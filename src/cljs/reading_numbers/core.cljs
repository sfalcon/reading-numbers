(ns reading-numbers.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))

;; -------------------------
;; Views

(def smalls
  (map name
       '(zero one two three four five six seven eight nine ten eleven twelve
              thirteen fourteen fifteen sixteen seventeen eighteen nineteen)))

(def tens
  (map name
       '(zero ten twenty thirty forty fifty sixty seventy eighty ninety)))

(defn int->eng [n]
  (let [n (int n)
        nonzero (fn [n]
                  (if (zero? n)
                    ""
                    (int->eng n)))]
    (cond
      (< n 20) (nth smalls n)
      (< n 100) (let [q (quot n 10)
                      r (mod n 10)]
                  (str (nth tens q) " " (nonzero r)))
      (< n 1000) (let [q (quot n 100)
                       r (mod n 100)]
                   (str (nth smalls q) " hundred " (nonzero r)))
      :else "one thousand")))

(defn read-result [number]
  [:p (int->eng number)])

(defn valid-input? [v]
  (let [n (int v)]
    (and (>= n 0)
        (<= n 1000))))

(defn home-page []
  (let [number (atom 0)]
    (fn []
      [:div {:class "centered"}
       [:h2  "Welcome to reading-numbers"]
       [:div
        [:input {:type "number" :value @number :min "0" :max "1000"
                 :on-change (fn [e]
                              (let [is-number-reg #"^\d+$"
                                    value (->> e .-target .-value
                                               (re-find is-number-reg))]
                                (when (valid-input? value)
                                  (reset! number value))))}]
        [read-result @number]]])))

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))


;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
