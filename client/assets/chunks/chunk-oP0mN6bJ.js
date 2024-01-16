import{_ as T}from"./chunk-EUQwHdIv.js";import{rb as q,rc as w,rd as C,hd as p,re as G,rf as V,rg as D,rh as J,b5 as Z,r1 as z,R as B,bv as W,aT as m,aU as S,aV as k,b2 as K,bO as L,mT as Y,ri as H,aP as Q,cr as _,rj as X,rk as ee,rl as b,rm as te,rn as re,s as h,b1 as x,eS as ne}from"./chunk-8J0p1hu6.js";import{x as P,j as A}from"./chunk-jI1fVavC.js";const N=new p,ie=new p,v=new p,g={esriGeometryPoint:G,esriGeometryPolyline:V,esriGeometryPolygon:D,esriGeometryMultipoint:J};function _e(e,t,r,i=e.hasZ,s=e.hasM){if(t==null)return null;const n=e.hasZ&&i,l=e.hasM&&s;if(r){const a=w(v,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,s);return G(a,n,l)}return G(t,n,l)}function R(e,t,r,i,s,n,l=t,a=r){const u=t&&l,o=r&&a,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(s){let f=q(ie,c,t,r,e,s,l,a);return n&&(f=w(v,f,u,o,e,n)),g[e]?.(f,u,o)??null}if(n){const f=w(v,c,t,r,e,n,l,a);return g[e]?.(f,u,o)??null}return C(N,c,t,r,l,a),g[e]?.(N,u,o)??null}function be(e){return e&&E in e?JSON.parse(JSON.stringify(e,se)):e}const E="_geVersion",se=(e,t)=>e!==E?t:void 0,le=new Z({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),M=Object.freeze({});async function xe(e,t,r){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:l}=e;if(i)for(let a=0;a<i.length;a++)i[a]=i[a].trim();if(s)for(let a=0;a<s.length;a++)s[a]=s[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(l)for(let a=0;a<l.length;a++)l[a].onStatisticField&&(l[a].onStatisticField=l[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),ae(e,t,r)}async function ae(e,t,r){if(!e)return null;let{where:i}=e;if(e.where=i=i?.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let s=await ue(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:n}=e.geometry;s=z(s),s.spatialReference=n}if(s){await P(s.spatialReference,r),s=oe(s,r);const n=(await B(W(s)))[0];if(n==null)throw M;const l="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,a=l&&F(s,r)?{densificationStep:8*l}:void 0,u=n.toJSON(),o=A(u,u.spatialReference,r,a);if(!o)throw M;o.spatialReference=r,e.geometry=o}return e}function F(e,t){if(!e)return!1;const r=e.spatialReference;return(m(e)||S(e)||k(e))&&!K(r,t)&&!L(r,t)}function oe(e,t){const r=e.spatialReference;return F(e,t)&&m(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function ue(e){const{distance:t,units:r}=e,i=e.geometry;if(t==null||"vertexAttributes"in i)return i;const s=i.spatialReference,n=r?le.fromJSON(r):Y(s),l=s&&(H(s)||Q(s))?i:await P(s,_).then(()=>A(i,_));return(await ce())(l.spatialReference,l,t,n)}async function ce(){return(await T(()=>import("./chunk-0qLlCJLm.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4,5]))).geodesicBuffer}function fe(e){return e==="mesh"?X:ee(e)}function O(e,t){return e?t?4:3:t?3:2}function me(e,t,r,i){return U(e,t,r,i.coords[0],i.coords[1])}function pe(e,t,r,i,s,n){const l=O(s,n),{coords:a,lengths:u}=i;if(!u)return!1;for(let o=0,c=0;o<u.length;o++,c+=l)if(!U(e,t,r,a[c],a[c+1]))return!1;return!0}function U(e,t,r,i,s){if(!e)return!1;const n=O(t,r),{coords:l,lengths:a}=e;let u=!1,o=0;for(const c of a)u=ye(u,l,n,o,c,i,s),o+=c*n;return u}function ye(e,t,r,i,s,n,l){let a=e,u=i;for(let o=i,c=i+s*r;o<c;o+=r){u=o+r,u===c&&(u=i);const f=t[o],y=t[o+1],j=t[u],d=t[u+1];(y<l&&d>=l||d<l&&y>=l)&&f+(l-y)/(d-y)*(j-f)<n&&(a=!a)}return a}const $="unsupported-query",Re={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Se(e){return e!=null&&I.spatialRelationship[e]===!0}function de(e){return e!=null&&I.queryGeometry[ne(e)]===!0}function he(e){return e!=null&&I.layerGeometry[e]===!0}function ge(){return T(()=>import("./chunk-0qLlCJLm.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4,5]))}function Ne(e,t,r,i,s){if(S(t)&&r==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const n=b(new p,t,!1,!1);return Promise.resolve(l=>me(n,!1,!1,l))}if(S(t)&&r==="esriGeometryMultipoint"){const n=b(new p,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>pe(n,!1,!1,l,i,s))}if(m(t)&&r==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(n=>te(t,R(r,i,s,n)));if(m(t)&&r==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(n=>re(t,R(r,i,s,n)));if(m(t)&&e==="esriSpatialRelIntersects"){const n=fe(r);return Promise.resolve(l=>n(t,R(r,i,s,l)))}return ge().then(n=>{const l=n[Re[e]].bind(null,t.spatialReference,t);return a=>l(R(r,i,s,a))})}async function Me(e,t,r){const{spatialRel:i,geometry:s}=e;if(s){if(!Se(i))throw new h($,"Unsupported query spatial relationship",{query:e});if(x(s.spatialReference)&&x(r)){if(!de(s))throw new h($,"Unsupported query geometry type",{query:e});if(!he(t))throw new h($,"Unsupported layer geometry type",{query:e});if(e.outSR)return P(e.geometry?.spatialReference,e.outSR)}}}function Te(e){if(m(e))return!0;if(S(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Ae(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&s)await t.forEach(a=>{const u=r.getAttribute(a,i),o=r.getAttribute(a,s);u==null||isNaN(u)||(n=Math.min(n,u)),o==null||isNaN(o)||(l=Math.max(l,o))});else{const a=i||s;await t.forEach(u=>{const o=r.getAttribute(u,a);o==null||isNaN(o)||(n=Math.min(n,o),l=Math.max(l,o))})}return{start:n,end:l}}function Ee(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:n,end:l}=t;if(n===null&&l===null)return null;if(n===void 0&&l===void 0)return Ge();const a=r.getAttributeAsTimestamp?.bind(r)??r.getAttribute.bind(r);return i&&s?$e(a,i,s,n,l):we(a,i||s,n,l)}function $e(e,t,r,i,s){return i!=null&&s!=null?n=>{const l=e(n,t),a=e(n,r);return(l==null||l<=s)&&(a==null||a>=i)}:i!=null?n=>{const l=e(n,r);return l==null||l>=i}:s!=null?n=>{const l=e(n,t);return l==null||l<=s}:void 0}function we(e,t,r,i){return r!=null&&i!=null&&r===i?s=>e(s,t)===r:r!=null&&i!=null?s=>{const n=e(s,t);return n!=null&&n>=r&&n<=i}:r!=null?s=>{const n=e(s,t);return n!=null&&n>=r}:i!=null?s=>{const n=e(s,t);return n!=null&&n<=i}:void 0}function Ge(){return()=>!1}export{Te as I,Me as P,xe as S,R as a,M as g,be as h,ae as j,Ae as n,Ee as t,Ne as v,_e as y};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-0qLlCJLm.js","assets/chunks/chunk-x2EARIDc.js","assets/chunks/chunk-8J0p1hu6.js","assets/chunks/chunk-EUQwHdIv.js","assets/static/EdgeShader._x1C5tJF.css","assets/chunks/chunk-v6EOeNTY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
