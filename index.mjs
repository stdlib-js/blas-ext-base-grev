// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";function n(r,t,n,s){var i,a,f,o,d,u,m,l;for(i=t.data,a=t.setter,f=t.getter,m=e(r/2),u=(d=s)+(r-1)*n,l=0;l<m;l++)o=f(i,d),a(i,d,f(i,u)),a(i,u,o),d+=n,u-=n;return t}function s(r,s,i){var a,f,o,d,u,m,l;if(r<=0)return s;if((d=t(s)).accessors)return n(r,d,i,f=i<0?(1-r)*i:0),d.data;if(m=e(r/2),1===i){if(o=r-1,(u=m%3)>0)for(f=0;f<u;f++)a=s[f],s[f]=s[o],s[o]=a,o-=1;if(m<3)return s;for(f=u;f<m;f+=3)a=s[f],s[f]=s[o],s[o]=a,a=s[f+1],s[f+1]=s[o-1],s[o-1]=a,a=s[f+2],s[f+2]=s[o-2],s[o-2]=a,o-=3;return s}for(o=(f=i<0?(1-r)*i:0)+(r-1)*i,l=0;l<m;l++)a=s[f],s[f]=s[o],s[o]=a,f+=i,o-=i;return s}function i(r,s,i,a){var f,o,d,u,m,l,c;if(r<=0)return s;if((u=t(s)).accessors)return n(r,u,i,a),u.data;if(l=e(r/2),o=a,1===i){if(d=o+r-1,(m=l%3)>0)for(c=0;c<m;c++)f=s[o],s[o]=s[d],s[d]=f,o+=i,d-=i;if(l<3)return s;for(c=m;c<l;c+=3)f=s[o],s[o]=s[d],s[d]=f,f=s[o+1],s[o+1]=s[d-1],s[d-1]=f,f=s[o+2],s[o+2]=s[d-2],s[d-2]=f,o+=3,d-=3;return s}for(d=o+(r-1)*i,c=0;c<l;c++)f=s[o],s[o]=s[d],s[d]=f,o+=i,d-=i;return s}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
