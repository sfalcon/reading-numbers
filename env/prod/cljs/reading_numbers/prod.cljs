(ns reading-numbers.prod
  (:require [reading-numbers.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
