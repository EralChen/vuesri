import{_ as O}from"./chunk-t4TbIqUg.js";import{rH as H,rI as w,rV as L,az as p,rW as G,rX as X,rY as k,rZ as Q,l3 as ee,r_ as te,I as v,x as ne,r$ as Z,K as b,l4 as j,q as re,gO as ie,cA as R,hN as se,r3 as ae,R as oe,br as le,aI as m,aV as g,aW as ue,bK as ce,o8 as fe,G as me,cr as N,s0 as pe,s1 as he,bY as A,s2 as ye,s3 as Re,s as d,fz as ge}from"./chunk-xdbuWCSg.js";import{t as q}from"./chunk-v6EOeNTY.js";const T=new p,Se=new p,I=new p,$={esriGeometryPoint:G,esriGeometryPolyline:X,esriGeometryPolygon:k,esriGeometryMultipoint:Q};function Ve(e,t,n,r=e.hasZ,i=e.hasM){if(t==null)return null;const s=e.hasZ&&r,a=e.hasM&&i;if(n){const o=w(I,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return G(o,s,a)}return G(t,s,a)}function y(e,t,n,r,i,s,a=t,o=n){const u=t&&a,l=n&&o,c=r!=null?"coords"in r?r:r.geometry:null;if(c==null)return null;if(i){let f=H(Se,c,t,n,e,i,a,o);return s&&(f=w(I,f,u,l,e,s)),$[e]?.(f,u,l)??null}if(s){const f=w(I,c,t,n,e,s,a,o);return $[e]?.(f,u,l)??null}return L(T,c,t,n,a,o),$[e]?.(T,u,l)??null}function We(e){return e&&z in e?JSON.parse(JSON.stringify(e,de)):e}const z="_geVersion",de=(e,t)=>e!==z?t:void 0,x=[0,0];function U(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,x),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,x),[n.xmax,n.ymax]=e(t.xmax,t.ymax,x),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:E(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:E(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:C(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function E(e,t){const n=[];for(const r of e)n.push(C(r,t));return n}function C(e,t){const n=[];for(const r of e){const i=t(r[0],r[1],[0,0]);n.push(i),r.length>2&&i.push(r[2]),r.length>3&&i.push(r[3])}return n}async function M(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(r=>r.geometry!=null?r.geometry.spatialReference:null).filter(re):[e];await ie(n.map(r=>({source:r,dest:t})))}const V=U.bind(null,ee),W=U.bind(null,te);function D(e,t,n,r){if(!e||(n||(n=t,t=e.spatialReference),!R(t)||!R(n)||v(t,n)))return e;if(Z(t,n)){const i=b(n)?V(e):W(e);return i.spatialReference=n,i}return j(q,[e],t,n,null,r)[0]}class $e{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,r,i){if(!t?.length||!n||!r||v(n,r))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:r,geographicTransformation:i,resolve:ne()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:r,outSpatialReference:i,resolve:s,geographicTransformation:a}=t;Z(r,i)?b(i)?s(n.map(V)):s(n.map(W)):s(j(q,n,r,i,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const xe=new $e;function De(e,t,n,r){return xe.push(e,t,n,r)}const _e=new se({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),F=Object.freeze({});async function Je(e,t,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:a}=e;if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),we(e,t,n)}async function we(e,t,n){if(!e)return null;let{where:r}=e;if(e.where=r=r?.trim(),(!r||/^1 *= *1$/.test(r)||t&&t===r)&&(e.where=null),!e.geometry)return e;let i=await Ie(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=e.geometry;i=ae(i),i.spatialReference=s}if(i){await M(i.spatialReference,n),i=Ge(i,n);const s=(await oe(le(i)))[0];if(s==null)throw F;const a="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=a&&J(i,n)?{densificationStep:8*a}:void 0,u=s.toJSON(),l=D(u,u.spatialReference,n,o);if(!l)throw F;l.spatialReference=n,e.geometry=l}return e}function J(e,t){if(!e)return!1;const n=e.spatialReference;return(m(e)||g(e)||ue(e))&&!v(n,t)&&!ce(n,t)}function Ge(e,t){const n=e.spatialReference;return J(e,t)&&m(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Ie(e){const{distance:t,units:n}=e,r=e.geometry;if(t==null||"vertexAttributes"in r)return r;const i=r.spatialReference,s=n?_e.fromJSON(n):fe(i),a=i&&(me(i)||b(i))?r:await M(i,N).then(()=>D(r,N));return(await ve())(a.spatialReference,a,t,s)}async function ve(){return(await O(()=>import("./chunk-GwCoCZE6.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))).geodesicBuffer}function be(e){return e==="mesh"?pe:he(e)}function K(e,t){return e?t?4:3:t?3:2}function Me(e,t,n,r){return Y(e,t,n,r.coords[0],r.coords[1])}function Pe(e,t,n,r,i,s){const a=K(i,s),{coords:o,lengths:u}=r;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=a)if(!Y(e,t,n,o[c],o[c+1]))return!1;return!0}function Y(e,t,n,r,i){if(!e)return!1;const s=K(t,n),{coords:a,lengths:o}=e;let u=!1,l=0;for(const c of o)u=Ne(u,a,s,l,c,r,i),l+=c*s;return u}function Ne(e,t,n,r,i,s,a){let o=e,u=r;for(let l=r,c=r+i*n;l<c;l+=n){u=l+n,u===c&&(u=r);const f=t[l],h=t[l+1],B=t[u],S=t[u+1];(h<a&&S>=a||S<a&&h>=a)&&f+(a-h)/(S-h)*(B-f)<s&&(o=!o)}return o}const _="unsupported-query",Ae={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},P={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Te(e){return e!=null&&P.spatialRelationship[e]===!0}function Ee(e){return e!=null&&P.queryGeometry[ge(e)]===!0}function Fe(e){return e!=null&&P.layerGeometry[e]===!0}function Oe(){return O(()=>import("./chunk-GwCoCZE6.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4]))}function Ke(e,t,n,r,i){if(g(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=A(new p,t,!1,!1);return Promise.resolve(a=>Me(s,!1,!1,a))}if(g(t)&&n==="esriGeometryMultipoint"){const s=A(new p,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(a=>Pe(s,!1,!1,a,r,i))}if(m(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>ye(t,y(n,r,i,s)));if(m(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>Re(t,y(n,r,i,s)));if(m(t)&&e==="esriSpatialRelIntersects"){const s=be(n);return Promise.resolve(a=>s(t,y(n,r,i,a)))}return Oe().then(s=>{const a=s[Ae[e]].bind(null,t.spatialReference,t);return o=>a(y(n,r,i,o))})}async function Ye(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!Te(r))throw new d(_,"Unsupported query spatial relationship",{query:e});if(R(i.spatialReference)&&R(n)){if(!Ee(i))throw new d(_,"Unsupported query geometry type",{query:e});if(!Fe(t))throw new d(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return M(e.geometry?.spatialReference,e.outSR)}}}function Be(e){if(m(e))return!0;if(g(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function He(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(r&&i)await t.forEach(o=>{const u=n.getAttribute(o,r),l=n.getAttribute(o,i);u==null||isNaN(u)||(s=Math.min(s,u)),l==null||isNaN(l)||(a=Math.max(a,l))});else{const o=r||i;await t.forEach(u=>{const l=n.getAttribute(u,o);l==null||isNaN(l)||(s=Math.min(s,l),a=Math.max(a,l))})}return{start:s,end:a}}function Le(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:s,end:a}=t;if(s===null&&a===null)return null;if(s===void 0&&a===void 0)return qe();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return r&&i?Ze(o,r,i,s,a):je(o,r||i,s,a)}function Ze(e,t,n,r,i){return r!=null&&i!=null?s=>{const a=e(s,t),o=e(s,n);return(a==null||a<=i)&&(o==null||o>=r)}:r!=null?s=>{const a=e(s,n);return a==null||a>=r}:i!=null?s=>{const a=e(s,t);return a==null||a<=i}:void 0}function je(e,t,n,r){return n!=null&&r!=null&&n===r?i=>e(i,t)===n:n!=null&&r!=null?i=>{const s=e(i,t);return s!=null&&s>=n&&s<=r}:n!=null?i=>{const s=e(i,t);return s!=null&&s>=n}:r!=null?i=>{const s=e(i,t);return s!=null&&s<=r}:void 0}function qe(){return()=>!1}export{Be as I,Ye as P,Je as S,y as a,we as b,De as c,F as g,We as h,D as j,He as n,Le as t,Ke as v,M as x,Ve as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-GwCoCZE6.js","assets/chunks/chunk-xdbuWCSg.js","assets/chunks/chunk-t4TbIqUg.js","assets/static/ShadedColorMaterial.LVqRbJ38.css","assets/chunks/chunk-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
