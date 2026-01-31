"use strict";var y=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var g=y(function(F,l){
var M=require('@stdlib/math-base-special-floor/dist');function O(u,r,o,f){var v,a,e,c,i,n,t,q;for(v=r.data,e=r.accessors[0],a=r.accessors[1],t=M(u/2),i=f,n=i+(u-1)*o,q=0;q<t;q++)c=e(v,i),a(v,i,e(v,n)),a(v,n,c),i+=o,n-=o;return r}l.exports=O
});var p=y(function(G,m){
var P=require('@stdlib/math-base-special-floor/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),h=g(),s=3;function w(u,r,o,f){var v,a,e,c,i,n,t;if(u<=0)return r;if(c=R(r),c.accessorProtocol)return h(u,c,o,f),c.data;if(n=P(u/2),a=f,o===1){if(i=n%s,e=a+u-1,i>0)for(t=0;t<i;t++)v=r[a],r[a]=r[e],r[e]=v,a+=o,e-=o;if(n<s)return r;for(t=i;t<n;t+=s)v=r[a],r[a]=r[e],r[e]=v,v=r[a+1],r[a+1]=r[e-1],r[e-1]=v,v=r[a+2],r[a+2]=r[e-2],r[e-2]=v,a+=s,e-=s;return r}for(e=a+(u-1)*o,t=0;t<n;t++)v=r[a],r[a]=r[e],r[e]=v,a+=o,e-=o;return r}m.exports=w
});var j=y(function(H,b){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=p();function B(u,r,o){return A(u,r,o,z(u,o))}b.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),D=p();C(k,"ndarray",D);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
