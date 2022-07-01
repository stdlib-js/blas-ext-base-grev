// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,c=t,l=function(e,r,t){var c,l,s,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(u.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),s="get"in t,_="set"in t,l&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},s=r()?c:l,_=function(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor,p=function(e,r){return e[r]},b=function(e,r){return e.get(r)},y=function(e,r,t){e[r]=t},v=function(e,r,t){e.set(t,r)},g=function(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?b:p,setter:r?v:y}};function j(e,r,t,n){var o,i,a,u,f,c,l,s;for(o=r.data,i=r.setter,a=r.getter,l=d(e/2),c=(f=n)+(e-1)*t,s=0;s<l;s++)u=a(o,f),i(o,f,a(o,c)),i(o,c,u),f+=t,c-=t;return r}function m(e,r,t){var n,o,i,a,u,f,c;if(e<=0)return r;if((a=g(r)).accessors)return j(e,a,t,o=t<0?(1-e)*t:0),a.data;if(f=d(e/2),1===t){if(i=e-1,(u=f%3)>0)for(o=0;o<u;o++)n=r[o],r[o]=r[i],r[i]=n,i-=1;if(f<3)return r;for(o=u;o<f;o+=3)n=r[o],r[o]=r[i],r[i]=n,n=r[o+1],r[o+1]=r[i-1],r[i-1]=n,n=r[o+2],r[o+2]=r[i-2],r[i-2]=n,i-=3;return r}for(i=(o=t<0?(1-e)*t:0)+(e-1)*t,c=0;c<f;c++)n=r[o],r[o]=r[i],r[i]=n,o+=t,i-=t;return r}return _(m,"ndarray",(function(e,r,t,n){var o,i,a,u,f,c,l;if(e<=0)return r;if((u=g(r)).accessors)return j(e,u,t,n),u.data;if(c=d(e/2),i=n,1===t){if(a=i+e-1,(f=c%3)>0)for(l=0;l<f;l++)o=r[i],r[i]=r[a],r[a]=o,i+=t,a-=t;if(c<3)return r;for(l=f;l<c;l+=3)o=r[i],r[i]=r[a],r[a]=o,o=r[i+1],r[i+1]=r[a-1],r[a-1]=o,o=r[i+2],r[i+2]=r[a-2],r[a-2]=o,i+=3,a-=3;return r}for(a=i+(e-1)*t,l=0;l<c;l++)o=r[i],r[i]=r[a],r[a]=o,i+=t,a-=t;return r})),m},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).grev=r();
//# sourceMappingURL=index.js.map
