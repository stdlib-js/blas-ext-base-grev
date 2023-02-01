// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,l,s,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(u.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),s="get"in t,_="set"in t,l&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e};var c=e,l=Math.floor;function s(e,r){return e[r]}function _(e,r){return e.get(r)}function d(e,r,t){e[r]=t}function p(e,r,t){e.set(t,r)}function b(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?_:s,setter:r?p:d}}function y(e,r,t,o){var n,a,i,u,f,c,s,_;for(n=r.data,i=r.accessors[0],a=r.accessors[1],s=l(e/2),c=(f=o)+(e-1)*t,_=0;_<s;_++)u=i(n,f),a(n,f,i(n,c)),a(n,c,u),f+=t,c-=t;return r}function v(e,r,t){var o,n,a,i,u,f,c;if(e<=0)return r;if((i=b(r)).accessorProtocol)return y(e,i,t,n=t<0?(1-e)*t:0),i.data;if(f=l(e/2),1===t){if(a=e-1,(u=f%3)>0)for(n=0;n<u;n++)o=r[n],r[n]=r[a],r[a]=o,a-=1;if(f<3)return r;for(n=u;n<f;n+=3)o=r[n],r[n]=r[a],r[a]=o,o=r[n+1],r[n+1]=r[a-1],r[a-1]=o,o=r[n+2],r[n+2]=r[a-2],r[a-2]=o,a-=3;return r}for(a=(n=t<0?(1-e)*t:0)+(e-1)*t,c=0;c<f;c++)o=r[n],r[n]=r[a],r[a]=o,n+=t,a-=t;return r}return c(v,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o){var n,a,i,u,f,c,s;if(e<=0)return r;if((u=b(r)).accessorProtocol)return y(e,u,t,o),u.data;if(c=l(e/2),a=o,1===t){if(i=a+e-1,(f=c%3)>0)for(s=0;s<f;s++)n=r[a],r[a]=r[i],r[i]=n,a+=t,i-=t;if(c<3)return r;for(s=f;s<c;s+=3)n=r[a],r[a]=r[i],r[i]=n,n=r[a+1],r[a+1]=r[i-1],r[i-1]=n,n=r[a+2],r[a+2]=r[i-2],r[i-2]=n,a+=3,i-=3;return r}for(i=a+(e-1)*t,s=0;s<c;s++)n=r[a],r[a]=r[i],r[i]=n,a+=t,i-=t;return r}}),v},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).grev=r();
//# sourceMappingURL=browser.js.map
