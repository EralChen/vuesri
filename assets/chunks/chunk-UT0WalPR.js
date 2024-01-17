import{L,cB as y,cC as R,cD as h,K as U,cE as k,cF as D,cG as z,cH as G,cI as E,cJ as O,cK as b,cL as g,cM as d}from"./chunk-217NDGZJ.js";const S="esri.widgets.Feature.support.featureUtils",T=L.getLogger(S),H=/href=(""|'')/gi,P=/(\{([^\{\r\n]+)\})/g,Q=/\'/g,$=/^\s*expression\//i,_=/(\n)/gi,B=/[\u00A0-\u9999<>\&]/gim,J=/href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi,K=/^(?:mailto:|tel:)/,x="relationships/",F=D("short-date-short-time");function Te(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function Fe(e,n){return typeof e=="function"?e(n):e}function we(e=""){if(e)return!K.test(e.trim().toLowerCase())}function V(e){return!!e&&$.test(e)}function W(e,n){if(!V(n)||!e)return null;const t=n.replace($,"").toLowerCase();let r=null;return e.some(i=>i.name.toLowerCase()===t&&(r=i,!0)),r}function Ne(e,n){const t=W(n,e?.fieldName);return t?t.title||null:e?e.label||e.fieldName:null}function X(e,n){return`{${n.get(e.toLowerCase())?.fieldName||e}}`}function Y(e){return e.replaceAll(H,"")}function C(e,n){const t=I(n,e);return t?t.name:e}function Ze(e,n){return e&&e.map(t=>C(t,n))}function I(e,n){return e&&typeof e.getField=="function"&&n?e.getField(n)??null:null}function M(e){return`${e}`.trim()}function Ee({attributes:e,globalAttributes:n,layer:t,text:r,expressionAttributes:i,fieldInfoMap:o}){return r?ee({formattedAttributes:n,template:oe(r,{...n,...i,...e},t),fieldInfoMap:o}):""}function ee({formattedAttributes:e,template:n,fieldInfoMap:t}){return M(Y(y(y(n,r=>X(r,t)),e)))}function ne(e,n,t=!1){const r=n[e];if(typeof r=="string"){const i="%27",o=(t?encodeURIComponent(r):r).replaceAll(Q,i);n[e]=o}}function te(e,n=!1){const t={...e};return Object.keys(t).forEach(r=>ne(r,t,n)),t}function re(e,n,t){const r=(n=M(n))&&n[0]!=="{";return y(e,te(t,r||!1))}function ie(e,n){return e.replaceAll(P,(t,r,i)=>{const o=I(n,i);return o?`{${o.name}}`:r})}function oe(e,n,t){const r=ie(e,t);return r&&r.replaceAll(J,(i,o,l)=>re(i,o||l,n))}function ae(e,n){if(typeof e=="string"&&n&&n.dateFormat==null&&(n.places!=null||n.digitSeparator!=null)){const t=Number(e);if(!isNaN(t))return t}return e}function le(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene")&&"when"in e}function ue(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function se(e){return le(e)&&ue(e)}function fe(e,n){const{fieldInfos:t,fieldName:r,preventPlacesFormatting:i,layer:o,timeZone:l}=n,s=de(t,r),u=I(o,r);if(s&&!b(r)){const f=u?.type,c=s.format?.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||c)return E(e,{format:c,fieldType:f,timeZoneOptions:{layerTimeZone:o&&"preferredTimeZone"in o?o.preferredTimeZone:null,viewTimeZone:l,datesInUnknownTimezone:!(!o||!("datesInUnknownTimezone"in o))&&!!o.datesInUnknownTimezone}})}const a=s?.format;return typeof e=="string"&&b(r)&&a?ce(e,a):typeof(e=ae(e,a))=="string"||e==null||a==null?j(e):g(e,i?{...d(a),minimumFractionDigits:0,maximumFractionDigits:20}:d(a))}function ce(e,n){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?m(e,",",", ",n):e.includes(";")?m(e,";","; ",n):e.includes(" ")?m(e," "," ",n):g(Number(e),d(n))}function m(e,n,t,r){return e.trim().split(n).map(i=>g(Number(i),d(r))).join(t)}function de(e,n){if(e?.length&&n)return e.find(t=>t.fieldName?.toLowerCase()===n.toLowerCase())}function pe({fieldName:e,graphic:n,layer:t}){if(A(e)||!t||typeof t.getFeatureType!="function")return null;const{typeIdField:r}=t;if(!r||e!==r)return null;const i=t.getFeatureType(n);return i?i.name:null}function me({fieldName:e,value:n,graphic:t,layer:r}){if(A(e)||!r||typeof r.getFieldDomain!="function")return null;const i=t&&r.getFieldDomain(e,{feature:t});return i&&i.type==="coded-value"?i.getName(n):null}function $e(e,n,t,r){const{creatorField:i,creationDateField:o,editorField:l,editDateField:s}=e;if(!n)return;const u=R(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r))&&!!r.datesInUnknownTimezone,t,F,"date"),a={...F,...u},f=n[s];if(typeof f=="number"){const p=n[l];return{type:"edit",date:h(f,a),user:p}}const c=n[o];if(typeof c=="number"){const p=n[i];return{type:"create",date:h(c,a),user:p}}return null}function xe(e,n){const t=new Map;return e&&e.forEach(r=>{const i=C(r.fieldName,n);r.fieldName=i,t.set(i.toLowerCase(),r)}),t}function Ce(e){const n=[];if(!e)return n;const{fieldInfos:t,content:r}=e;return t&&n.push(...t),r&&Array.isArray(r)&&r.forEach(i=>{if(i.type==="fields"){const o=i?.fieldInfos;o&&n.push(...o)}}),n}function Me(e){return e.replaceAll(B,n=>`&#${n.charCodeAt(0)};`)}function j(e){return typeof e=="string"?e.replaceAll(_,'<br class="esri-text-new-line" />'):e}function q(e){const{value:n,fieldName:t,fieldInfos:r,fieldInfoMap:i,layer:o,graphic:l,timeZone:s}=e;if(n==null)return"";const u=me({fieldName:t,value:n,graphic:l,layer:o});if(u)return u;const a=pe({fieldName:t,graphic:l,layer:o});if(a)return a;if(i.get(t.toLowerCase()))return fe(n,{fieldInfos:r||Array.from(i.values()),fieldName:t,layer:o,timeZone:s});const f=o?.fieldsIndex?.get(t);return f&&(z(f)||G(f))?E(n,{fieldType:f.type,timeZoneOptions:{layerTimeZone:o&&"preferredTimeZone"in o?o.preferredTimeZone:null,viewTimeZone:s,datesInUnknownTimezone:!(!o||!("datesInUnknownTimezone"in o))&&!!o.datesInUnknownTimezone}}):j(n)}function je({fieldInfos:e,attributes:n,layer:t,graphic:r,fieldInfoMap:i,relatedInfos:o,timeZone:l}){const s={};return o?.forEach(u=>he({attributes:s,relatedInfo:u,fieldInfoMap:i,fieldInfos:e,layer:t,timeZone:l})),n&&Object.keys(n).forEach(u=>{const a=n[u];s[u]=q({fieldName:u,fieldInfos:e,fieldInfoMap:i,layer:t,value:a,graphic:r,timeZone:l})}),s}async function ye(e,n){const{layer:t,graphic:r,outFields:i,objectIds:o,returnGeometry:l,spatialReference:s}=e,u=o[0];if(typeof u!="number"&&typeof u!="string"){const f="Could not query required fields for the specified feature. The feature's ID is invalid.",c={layer:t,graphic:r,objectId:u,requiredFields:i};return T.warn(f,c),null}if(!U(t)?.operations?.supportsQuery){const f="The specified layer cannot be queried. The following fields will not be available.",c={layer:t,graphic:r,requiredFields:i,returnGeometry:l};return T.warn(f,c),null}const a=t.createQuery();return a.objectIds=o,a.outFields=i?.length?i:[t.objectIdField],a.returnGeometry=!!l,a.returnZ=!!l,a.returnM=!!l,a.outSpatialReference=s,(await t.queryFeatures(a,n)).features[0]}async function ge(e){if(!e.expressionInfos?.length)return!1;const n=await O(),{arcadeUtils:{hasGeometryFunctions:t}}=n;return t(e)}async function qe({graphic:e,popupTemplate:n,layer:t,spatialReference:r},i){if(!t||!n||(typeof t.load=="function"&&await t.load(i),!e.attributes))return;const o=e.attributes[t.objectIdField];if(o==null)return;const l=[o],s=await n.getRequiredFields(t.fieldsIndex),u=k(s,e),a=u?[]:s,f=n.returnGeometry||await ge(n);if(u&&!f)return;const c=await ye({layer:t,graphic:e,outFields:a,objectIds:l,returnGeometry:f,spatialReference:r},i);c&&(c.geometry&&(e.geometry=c.geometry),c.attributes&&(e.attributes={...e.attributes,...c.attributes}))}function A(e=""){return!!e&&e.includes(x)}function Ie(e){return e?`${x}${e.layerId}/${e.fieldName}`:""}function w({attributes:e,graphic:n,relatedInfo:t,fieldInfos:r,fieldInfoMap:i,layer:o,timeZone:l}){e&&n&&t&&Object.keys(n.attributes).forEach(s=>{const u=Ie({layerId:t.relation.id.toString(),fieldName:s}),a=n.attributes[s];e[u]=q({fieldName:u,fieldInfos:r,fieldInfoMap:i,layer:o,value:a,graphic:n,timeZone:l})})}function he({attributes:e,relatedInfo:n,fieldInfoMap:t,fieldInfos:r,layer:i,timeZone:o}){e&&n&&(n.relatedFeatures?.forEach(l=>w({attributes:e,graphic:l,relatedInfo:n,fieldInfoMap:t,fieldInfos:r,layer:i,timeZone:o})),n.relatedStatsFeatures?.forEach(l=>w({attributes:e,graphic:l,relatedInfo:n,fieldInfoMap:t,fieldInfos:r,layer:i,timeZone:o})))}const N=e=>{if(!e)return!1;const n=e.toUpperCase();return n.includes("CURRENT_TIMESTAMP")||n.includes("CURRENT_DATE")||n.includes("CURRENT_TIME")},v=({layer:e,method:n,query:t,definitionExpression:r})=>{if(!e.capabilities?.query?.supportsCacheHint||n==="attachments")return;const i=t.where!=null?t.where:null,o=t.geometry!=null?t.geometry:null;N(r)||N(i)||o?.type==="extent"||t.resultType==="tile"||(t.cacheHint=!0)},Ae=({query:e,layer:n,method:t})=>{v({layer:n,method:t,query:e,definitionExpression:`${n.definitionExpression} ${n.serviceDefinitionExpression}`})},ve=({queryPayload:e,layer:n,method:t})=>{v({layer:n,method:t,query:e,definitionExpression:`${n.definitionExpression} ${n.serviceDefinitionExpression}`})};function Le(e,n,t){return e&&n&&t?Z(e.allLayers,n,t)||Z(e.allTables,n,t):null}function Z(e,n,t){const r=n.type==="scene"&&n.associatedLayer?n.associatedLayer.url:n.url;return e.filter(se).find(i=>i!==n&&i.url===r&&i.layerId===t.relatedTableId)}function Re(e){const n=e.getObjectId();return n!=null?`oid:${n}`:`uid:${e.uid}`}export{we as C,Ee as D,Te as E,Re as F,se as J,V as M,ie as P,Ze as R,Le as T,de as Y,j as a,ve as b,qe as c,A as d,Ae as h,Ce as i,$e as n,Me as o,Ne as q,xe as r,ye as s,je as u,C as v,Fe as x,ee as z};