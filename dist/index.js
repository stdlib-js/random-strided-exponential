"use strict";var f=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var y=f(function(E,s){
var h=require('@stdlib/array-base-assert-is-accessor-array/dist'),v=require('@stdlib/random-base-exponential/dist');function m(n,r,u,t,a){var e,i;if(e={arity:0,fcn:null},t){if(r===0)return h(n)?i=n.get(u):i=n[u],e.fcn=v.factory(i,a),e;e.fcn=v.factory(a)}else e.fcn=v;return e.arity+=1,e}s.exports=m
});var l=f(function(F,q){
var A=require('@stdlib/strided-base-nullary/dist'),k=require('@stdlib/strided-base-unary/dist'),O=y();function R(n,r,u,t,a,e){var i=O(r,u,0,arguments.length>5,e);return i.arity===0?(A([t],[n],[a],i.fcn),t):(k([r,t],[n],[u,a],i.fcn),t)}q.exports=R
});var p=f(function(G,g){
var j=require('@stdlib/strided-base-nullary/dist').ndarray,o=require('@stdlib/strided-base-unary/dist').ndarray,w=y();function z(n,r,u,t,a,e,i,x){var c=w(r,u,t,arguments.length>7,x);return c.arity===0?(j([a],[n],[e],[i],c.fcn),a):(o([r,a],[n],[u,e],[t,i],c.fcn),a)}g.exports=z
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),C=p();B(d,"ndarray",C);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
