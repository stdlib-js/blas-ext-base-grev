"use strict";var y=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var p=y(function(H,m){
var P=require('@stdlib/math-base-special-floor/dist');function O(u,r,o,f){var a,e,v,c,i,n,t,q;for(a=r.data,v=r.accessors[0],e=r.accessors[1],t=P(u/2),i=f,n=i+(u-1)*o,q=0;q<t;q++)c=v(a,i),e(a,i,v(a,n)),e(a,n,c),i+=o,n-=o;return r}m.exports=O
});var b=y(function(I,g){
var R=require('@stdlib/math-base-special-floor/dist'),h=require('@stdlib/array-base-arraylike2object/dist'),w=p(),l=3;function z(u,r,o){var f,a,e,v,c,i,n;if(u<=0)return r;if(v=h(r),v.accessorProtocol)return o<0?a=(1-u)*o:a=0,w(u,v,o,a),v.data;if(i=R(u/2),o===1){if(c=i%l,e=u-1,c>0)for(a=0;a<c;a++)f=r[a],r[a]=r[e],r[e]=f,e-=1;if(i<l)return r;for(a=c;a<i;a+=l)f=r[a],r[a]=r[e],r[e]=f,f=r[a+1],r[a+1]=r[e-1],r[e-1]=f,f=r[a+2],r[a+2]=r[e-2],r[e-2]=f,e-=l;return r}for(o<0?a=(1-u)*o:a=0,e=a+(u-1)*o,n=0;n<i;n++)f=r[a],r[a]=r[e],r[e]=f,a+=o,e-=o;return r}g.exports=z
});var k=y(function(J,j){
var A=require('@stdlib/math-base-special-floor/dist'),B=require('@stdlib/array-base-arraylike2object/dist'),C=p(),s=3;function D(u,r,o,f){var a,e,v,c,i,n,t;if(u<=0)return r;if(c=B(r),c.accessorProtocol)return C(u,c,o,f),c.data;if(n=A(u/2),e=f,o===1){if(i=n%s,v=e+u-1,i>0)for(t=0;t<i;t++)a=r[e],r[e]=r[v],r[v]=a,e+=o,v-=o;if(n<s)return r;for(t=i;t<n;t+=s)a=r[e],r[e]=r[v],r[v]=a,a=r[e+1],r[e+1]=r[v-1],r[v-1]=a,a=r[e+2],r[e+2]=r[v-2],r[v-2]=a,e+=s,v-=s;return r}for(v=e+(u-1)*o,t=0;t<n;t++)a=r[e],r[e]=r[v],r[v]=a,e+=o,v-=o;return r}j.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=b(),F=k();E(M,"ndarray",F);module.exports=M;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
