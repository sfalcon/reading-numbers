// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33278_33292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33279_33293 = null;
var count__33280_33294 = (0);
var i__33281_33295 = (0);
while(true){
if((i__33281_33295 < count__33280_33294)){
var f_33296 = cljs.core._nth.call(null,chunk__33279_33293,i__33281_33295);
cljs.core.println.call(null,"  ",f_33296);

var G__33297 = seq__33278_33292;
var G__33298 = chunk__33279_33293;
var G__33299 = count__33280_33294;
var G__33300 = (i__33281_33295 + (1));
seq__33278_33292 = G__33297;
chunk__33279_33293 = G__33298;
count__33280_33294 = G__33299;
i__33281_33295 = G__33300;
continue;
} else {
var temp__4657__auto___33301 = cljs.core.seq.call(null,seq__33278_33292);
if(temp__4657__auto___33301){
var seq__33278_33302__$1 = temp__4657__auto___33301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33278_33302__$1)){
var c__32920__auto___33303 = cljs.core.chunk_first.call(null,seq__33278_33302__$1);
var G__33304 = cljs.core.chunk_rest.call(null,seq__33278_33302__$1);
var G__33305 = c__32920__auto___33303;
var G__33306 = cljs.core.count.call(null,c__32920__auto___33303);
var G__33307 = (0);
seq__33278_33292 = G__33304;
chunk__33279_33293 = G__33305;
count__33280_33294 = G__33306;
i__33281_33295 = G__33307;
continue;
} else {
var f_33308 = cljs.core.first.call(null,seq__33278_33302__$1);
cljs.core.println.call(null,"  ",f_33308);

var G__33309 = cljs.core.next.call(null,seq__33278_33302__$1);
var G__33310 = null;
var G__33311 = (0);
var G__33312 = (0);
seq__33278_33292 = G__33309;
chunk__33279_33293 = G__33310;
count__33280_33294 = G__33311;
i__33281_33295 = G__33312;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33313 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32109__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32109__auto__)){
return or__32109__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33313);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33313)))?cljs.core.second.call(null,arglists_33313):arglists_33313));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33282 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33283 = null;
var count__33284 = (0);
var i__33285 = (0);
while(true){
if((i__33285 < count__33284)){
var vec__33286 = cljs.core._nth.call(null,chunk__33283,i__33285);
var name = cljs.core.nth.call(null,vec__33286,(0),null);
var map__33287 = cljs.core.nth.call(null,vec__33286,(1),null);
var map__33287__$1 = ((((!((map__33287 == null)))?((((map__33287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33287):map__33287);
var doc = cljs.core.get.call(null,map__33287__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33287__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33314 = seq__33282;
var G__33315 = chunk__33283;
var G__33316 = count__33284;
var G__33317 = (i__33285 + (1));
seq__33282 = G__33314;
chunk__33283 = G__33315;
count__33284 = G__33316;
i__33285 = G__33317;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33282);
if(temp__4657__auto__){
var seq__33282__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33282__$1)){
var c__32920__auto__ = cljs.core.chunk_first.call(null,seq__33282__$1);
var G__33318 = cljs.core.chunk_rest.call(null,seq__33282__$1);
var G__33319 = c__32920__auto__;
var G__33320 = cljs.core.count.call(null,c__32920__auto__);
var G__33321 = (0);
seq__33282 = G__33318;
chunk__33283 = G__33319;
count__33284 = G__33320;
i__33285 = G__33321;
continue;
} else {
var vec__33289 = cljs.core.first.call(null,seq__33282__$1);
var name = cljs.core.nth.call(null,vec__33289,(0),null);
var map__33290 = cljs.core.nth.call(null,vec__33289,(1),null);
var map__33290__$1 = ((((!((map__33290 == null)))?((((map__33290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33290):map__33290);
var doc = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33290__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33322 = cljs.core.next.call(null,seq__33282__$1);
var G__33323 = null;
var G__33324 = (0);
var G__33325 = (0);
seq__33282 = G__33322;
chunk__33283 = G__33323;
count__33284 = G__33324;
i__33285 = G__33325;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map