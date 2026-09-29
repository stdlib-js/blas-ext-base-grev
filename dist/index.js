"use strict";var y=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var g=y(function(F,l){
var M=require('@stdlib/math-base-special-floor/dist');function O(u,r,v,f){var o,a,e,c,i,n,t,q;for(o=r.data,e=r.accessors[0],a=r.accessors[1],t=M(u/2),i=f,n=i+(u-1)*v,q=0;q<t;q++)c=e(o,i),a(o,i,e(o,n)),a(o,n,c),i+=v,n-=v;return r}l.exports=O
});var p=y(function(G,m){
var P=require('@stdlib/math-base-special-floor/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),h=g(),s=3;function w(u,r,v,f){var o,a,e,c,i,n,t;if(u<=0)return r;if(c=R(r),c.accessorProtocol)return h(u,c,v,f),c.data;if(n=P(u/2),a=f,v===1){if(i=n%s,e=a+u-1,i>0)for(t=0;t<i;t++)o=r[a],r[a]=r[e],r[e]=o,a+=v,e-=v;if(n<s)return r;for(t=i;t<n;t+=s)o=r[a],r[a]=r[e],r[e]=o,o=r[a+1],r[a+1]=r[e-1],r[e-1]=o,o=r[a+2],r[a+2]=r[e-2],r[e-2]=o,a+=s,e-=s;return r}for(e=a+(u-1)*v,t=0;t<n;t++)o=r[a],r[a]=r[e],r[e]=o,a+=v,e-=v;return r}m.exports=w
});var j=y(function(H,b){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=p();function B(u,r,v){return A(u,r,v,z(u,v))}b.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),D=p();C(k,"ndarray",D);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
