import{s as d,bx as F,by as k,j as x,w as D,k as j}from"./chunk-m3jlTyOz.js";import{t as G}from"./chunk-0at02ZCs.js";import{a as P,n as T,s as E,i as C,l as $,t as g,r as O,e as L}from"./chunk-T7gDY-xe.js";import{populateGroupLayer as R}from"./chunk-BYZUL531.js";import{e as J,l as N}from"./chunk-OpuULzx3.js";import{t as q}from"./chunk-eepoNEis.js";import"./chunk-bntHIBZM.js";async function oe(e,a){const r=e.instance.portalItem;if(r?.id)return await r.load(a),z(e),A(e,a)}function z(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new d("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}async function A(e,a){const r=e.instance,t=r.portalItem;if(!t)return;const{url:o,title:s}=t,n=J(t);if(r.type==="group")return B(r,n,e);o&&r.read({url:o},n);const l=new L,i=await S(e,l,a);return i&&r.read(i,n),r.resourceReferences={portalItem:t,paths:n.readResourcePaths??[]},r.type!=="subtype-group"&&r.read({title:s},n),F(r,n)}async function B(e,a,r){const t=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:o,type:s}=t;if(s==="Group Layer"){if(!k(t,"Map"))throw new d("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return H(e)}return e.read({title:o},a),K(e,r)}async function H(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const t=N(a);e.read(r,t),await R(e,r,{context:t}),e.resourceReferences={portalItem:a,paths:t.readResourcePaths??[]}}async function K(e,a){let r;const{portalItem:t}=e;if(!t)return;const o=t.type,s=a.layerModuleTypeMap;switch(o){case"Feature Service":case"Feature Collection":r=s.FeatureLayer;break;case"Stream Service":r=s.StreamLayer;break;case"Scene Service":r=s.SceneLayer;break;default:throw new d("portal:unsupported-item-type-as-group",`The item type '${o}' is not supported as a 'IGroupLayer'`)}const n=new L;let[l,i]=await Promise.all([r(),S(a,n)]),u=()=>l;if(o==="Feature Service"){i=t.url?await P(i,t.url,n):{};const m=T(i),h=E(i),p=[];if(m.length||h?.length){m.length&&p.push("SubtypeGroupLayer"),h?.length&&p.push("OrientedImageryLayer");const w=[];for(const c of p){const y=s[c];w.push(y())}const M=await Promise.all(w),b=new Map;p.forEach((c,y)=>{b.set(c,M[y])}),u=c=>c.layerType?b.get(c.layerType)??l:l}const v=await Y(t.url);return await f(e,u,i,v)}return o==="Scene Service"&&t.url&&(i=await C(t,i,n)),$(i)>0?await f(e,u,i):await Q(e,u)}async function Q(e,a){const{portalItem:r}=e;if(!r?.url)return;const t=await q(r.url);t&&f(e,a,{layers:t.layers?.map(g),tables:t.tables?.map(g)})}async function f(e,a,r,t){let o=r.layers||[];const s=r.tables||[];if(e.portalItem?.type==="Feature Collection"?(o.forEach((n,l)=>{n.id=l,n?.layerDefinition?.type==="Table"&&s.push(n)}),o=o.filter(n=>n?.layerDefinition?.type!=="Table")):(o.reverse(),s.reverse()),o.forEach(n=>{const l=t?.(n);if(l||!t){const i=I(e,a(n),r,n,l);e.add(i)}}),s.length){const n=await x.FeatureLayer();s.forEach(l=>{const i=t?.(l);if(i||!t){const u=I(e,n,r,l,i);e.tables.add(u)}})}}function I(e,a,r,t,o){const s=e.portalItem,n={portalItem:s.clone(),layerId:t.id};t.url!=null&&(n.url=t.url);const l=new a(n);if("sourceJSON"in l&&(l.sourceJSON=o),l.type!=="subtype-group"&&(l.sublayerTitleMode="service-name"),s.type==="Feature Collection"){const i={origin:"portal-item",portal:s.portal||D.getDefault()};l.read(t,i);const u=r.showLegend;u!=null&&l.read({showLegend:u},i)}return l}async function S(e,a,r){if(e.supportsData===!1)return;const t=e.instance,o=t.portalItem;if(!o)return;let s=null;try{s=await o.fetchData("json",r)}catch{}if(W(t)){let n=null;const l=await U(o,s,a);if((s?.layers||s?.tables)&&l>0){if(t.layerId==null){const i=T(s);t.layerId=t.type==="subtype-group"?i?.[0]:O(s)}n=V(s,t),n&&s.showLegend!=null&&(n.showLegend=s.showLegend)}return l>1&&"sublayerTitleMode"in t&&t.sublayerTitleMode!=="service-name"&&(t.sublayerTitleMode="item-title-and-service-name"),n}return s}async function U(e,a,r){if(a?.layers&&a?.tables)return $(a);const t=j(e.url);if(!t)return 1;const o=await r.fetchServiceMetadata(t.url.path).catch(()=>null);return(a?.layers?.length??o?.layers?.length??0)+(a?.tables?.length??o?.tables?.length??0)}function V(e,a){const{layerId:r}=a,t=e.layers?.find(o=>o.id===r)||e.tables?.find(o=>o.id===r);return t&&X(t,a)?t:null}function W(e){return e.type!=="stream"&&"layerId"in e}function X(e,a){return!(a.type==="feature"&&"layerType"in e&&e.layerType==="SubtypeGroupLayer"||a.type==="subtype-group"&&!("layerType"in e))}async function Y(e){const{layersJSON:a}=await G(e);if(!a)return null;const r=[...a.layers,...a.tables];return t=>r.find(o=>o.id===t.id)}export{oe as load};