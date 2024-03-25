import{W as w,S as L,s as g,c as M,X as m,bv as f}from"./chunk-xdbuWCSg.js";import{t as b}from"./chunk-sWi2EogI.js";class P{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(a,t){const r=this._serviceMetadatas.get(a);if(r)return r;const s=await b(a,t);return this._serviceMetadatas.set(a,s),s}async fetchItemData(a){const{id:t}=a;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const s=await a.fetchData();return r.set(t,s),s}async fetchCustomParameters(a,t){const r=await this.fetchItemData(a);return r&&typeof r=="object"&&(t?t(r):r.customParameters)||null}}function l(e){const a={id:e.id,name:e.name};return e.type==="Oriented Imagery Layer"&&(a.layerType="OrientedImageryLayer"),a}async function T(e,a,t){if(e?.layers==null||e?.tables==null){const r=await t.fetchServiceMetadata(a,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(l),e.tables=e.tables||r?.tables?.map(l)}return e}function C(e){const{layers:a,tables:t}=e;return a?.length?a[0].id:t?.length?t[0].id:null}function o(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function d(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function O(e){const a=[];return e?.layers?.forEach(t=>{t.layerType==="SubtypeGroupLayer"&&a.push(t.id)}),a}function D(e){return e?.layers?.filter(({layerType:a})=>a==="OrientedImageryLayer").map(({id:a})=>a)}function G(e){return e?.layers?.filter(({layerType:a})=>a==="CatalogLayer").map(({id:a})=>a)}async function F(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const n=await t.fetchServiceMetadata(e.url);a.layers=n.layers?.map(l)}const{serverUrl:r,portalItem:s}=await w(e.url,{sceneLayerItem:e,customParameters:o(a)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return a.tables=[],a;if(!a.tables&&s){const n=await s.fetchData();if(n?.tables)a.tables=n.tables.map(l);else{const c=await t.fetchServiceMetadata(r,{customParameters:o(n)?.customParameters});a.tables=c?.tables?.map(l)}}if(a.tables)for(const n of a.tables)n.url=`${r}/${n.id}`;return a}async function _(e){!e.portalItem||e.portalItem instanceof L||(e={...e,portalItem:new L(e.portalItem)});const a=await $(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function $(e){await e.load();const a=new P;return j(await S(e,a))}async function S(e,a){switch(e.type){case"3DTiles Service":return E();case"CSV":return R();case"Feature Collection":return K(e);case"Feature Service":return V(e,a);case"Feed":return H();case"GeoJson":return A();case"Group Layer":return Q();case"Image Service":return U(e,a);case"KML":return z();case"Map Service":return W(e,a);case"Media Layer":return Y();case"Scene Service":return J(e,a);case"Stream Service":return k();case"Vector Tile Service":return x();case"WFS":return X();case"WMS":return q();case"WMTS":return B();default:throw new g("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function j(e){const a=e.className,t=M[a];return{constructor:await t(),properties:e.properties}}async function W(e,a){return await Z(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function V(e,a){const t=await h(e,a);if(typeof t=="object"){const{sourceJSON:r,className:s}=t,n={sourceJSON:r};return t.id!=null&&(n.layerId=t.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function J(e,a){const t=await h(e,a,async()=>{try{if(!e.url)return[];const{serverUrl:r}=await w(e.url,{sceneLayerItem:e});return(await a.fetchServiceMetadata(r))?.tables??[]}catch{return[]}});if(typeof t=="object"){const r={};let s;if(t.id!=null?(r.layerId=t.id,s=`${e.url}/layers/${t.id}`):s=e.url,e.typeKeywords?.length){for(const c of Object.keys(m))if(e.typeKeywords.includes(c))return{className:m[c]}}const n=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,c=>o(c)?.customParameters)});return{className:m[n?.layerType]||"SceneLayer",properties:r}}return t===!1&&(await a.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function K(e){await e.load();const a=f(e,"Map Notes"),t=f(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if(f(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return d(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function U(e,a){await e.load();const t=e.typeKeywords?.map(u=>u.toLowerCase())??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),s=r?.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),c=n.cacheType?.toLowerCase(),y=n.capabilities?.toLowerCase().includes("tilesonly");return c==="map"||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function k(){return{className:"StreamLayer"}}function x(){return{className:"VectorTileLayer"}}function A(){return{className:"GeoJSONLayer"}}function E(){return{className:"IntegratedMesh3DTilesLayer"}}function R(){return{className:"CSVLayer"}}function z(){return{className:"KMLLayer"}}function X(){return{className:"WFSLayer"}}function q(){return{className:"WMSLayer"}}function B(){return{className:"WMTSLayer"}}function H(){return{className:"StreamLayer"}}function Q(){return{className:"GroupLayer"}}function Y(){return{className:"MediaLayer"}}async function Z(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}async function h(e,a,t){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const u=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,i=>o(i)?.customParameters)});if(u.type==="Oriented Imagery Layer")return{id:u.id,className:"OrientedImageryLayer",sourceJSON:u}}return{}}await e.load();let c=await a.fetchItemData(e);if(n){const u=await T(c,r,a),i=p(u);if(typeof i=="object"){const N=O(u),I=D(u),v=G(u);i.className=i.id!=null&&N.includes(i.id)?"SubtypeGroupLayer":i.id!=null&&I?.includes(i.id)?"OrientedImageryLayer":i.id!=null&&v?.includes(i.id)?"CatalogLayer":"FeatureLayer"}return i}if(s==="Scene Service"&&(c=await F(e,c,a)),d(c)>0)return p(c);const y=await a.fetchServiceMetadata(r);return t&&(y.tables=await t()),p(y)}function p(e){return d(e)===1&&{id:C(e)}}const te=Object.freeze(Object.defineProperty({__proto__:null,fromItem:_,selectLayerClassPath:S},Symbol.toStringTag,{value:"Module"}));export{T as a,F as c,P as e,G as i,o as l,O as n,te as p,C as r,d as s,l as t,D as u,S as w};
