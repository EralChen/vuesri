function A(t,r){return t?r?4:3:r?3:2}function q(t,r,N,n){if(!r?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const I=t.coords,o=[],l=N?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:s}=r,i=A(N,n);let E=0;for(const e of c){const u=O(l,s,E,e,N,n);u&&o.push(u),E+=e*i}if(o.sort((e,u)=>{let g=e[2]-u[2];return g===0&&N&&(g=e[4]-u[4]),g}),o.length){let e=6*o[0][2];I[0]=o[0][0]/e,I[1]=o[0][1]/e,N&&(e=6*o[0][4],I[2]=e!==0?o[0][3]/e:0),(I[0]<l[0]||I[0]>l[1]||I[1]<l[2]||I[1]>l[3]||N&&(I[2]<l[4]||I[2]>l[5]))&&(I.length=0)}if(!I.length){const e=r.lengths[0]?P(s,0,c[0],N,n):null;if(!e)return null;I[0]=e[0],I[1]=e[1],N&&e.length>2&&(I[2]=e[2])}return t}function O(t,r,N,n,I,o){const l=A(I,o);let c=N,s=N+l,i=0,E=0,e=0,u=0,g=0;for(let V=0,_=n-1;V<_;V++,c+=l,s+=l){const T=r[c],f=r[c+1],b=r[c+2],h=r[s],m=r[s+1],G=r[s+2];let Y=T*m-h*f;u+=Y,i+=(T+h)*Y,E+=(f+m)*Y,I&&(Y=T*G-h*b,e+=(b+G)*Y,g+=Y),T<t[0]&&(t[0]=T),T>t[1]&&(t[1]=T),f<t[2]&&(t[2]=f),f>t[3]&&(t[3]=f),I&&(b<t[4]&&(t[4]=b),b>t[5]&&(t[5]=b))}if(u>0&&(u*=-1),g>0&&(g*=-1),!u)return null;const F=[i,E,.5*u];return I&&(F[3]=e,F[4]=.5*g),F}function P(t,r,N,n,I){const o=A(n,I);let l=r,c=r+o,s=0,i=0,E=0,e=0;for(let u=0,g=N-1;u<g;u++,l+=o,c+=o){const F=t[l],V=t[l+1],_=t[l+2],T=t[c],f=t[c+1],b=t[c+2],h=n?d(F,V,_,T,f,b):S(F,V,T,f);if(h)if(s+=h,n){const m=p(F,V,_,T,f,b);i+=h*m[0],E+=h*m[1],e+=h*m[2]}else{const m=a(F,V,T,f);i+=h*m[0],E+=h*m[1]}}return s>0?n?[i/s,E/s,e/s]:[i/s,E/s]:N>0?n?[t[r],t[r+1],t[r+2]]:[t[r],t[r+1]]:null}function S(t,r,N,n){const I=N-t,o=n-r;return Math.sqrt(I*I+o*o)}function d(t,r,N,n,I,o){const l=n-t,c=I-r,s=o-N;return Math.sqrt(l*l+c*c+s*s)}function a(t,r,N,n){return[t+.5*(N-t),r+.5*(n-r)]}function p(t,r,N,n,I,o){return[t+.5*(n-t),r+.5*(I-r),N+.5*(o-N)]}export{q as n};
