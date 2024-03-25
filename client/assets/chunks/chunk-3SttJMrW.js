import{bV as E,bU as y,D as S,bA as w,dz as d,bq as D,dA as M,dB as N,dC as h,dD as b,dE as F,z as T}from"./chunk-xdbuWCSg.js";import"./chunk-t4TbIqUg.js";const m=()=>T.getLogger("esri.rest.support.meshFeatureSet");function G(e,t,r){const s=r.features;r.features=[],delete r.geometryType;const n=E.fromJSON(r);if(n.geometryType="mesh",!r.assetMaps)return n;const a=O(t,r.assetMaps),u=e.sourceSpatialReference??y.WGS84,f=r.globalIdFieldName,{outFields:o}=e,l=o!=null&&o.length>0?A(o.includes("*")?null:new Set(o)):()=>({});for(const c of s){const i=I(c,f,u,t,a);i!=null&&n.features.push(new S({geometry:i,attributes:l(c)}))}return n}function A(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function I(e,t,r,s,n){const a=e.attributes[t],u=n.get(a);if(u==null)return m().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return m().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const f=x(e,r,s),o=w.fromJSON(e.geometry);o.spatialReference=r;const l=L(e.attributes,s),c=r.isGeographic?"local":"georeferenced",i=$(u);return i?d.createWithExternalSource(f,i,{extent:o,transform:l,vertexSpace:c}):d.createIncomplete(f,{extent:o,transform:l,vertexSpace:c})}function x({attributes:e},t,{transformFieldRoles:r}){const s=e[r.originX],n=e[r.originY],a=e[r.originZ];return new D({x:s,y:n,z:a,spatialReference:t})}function L(e,{transformFieldRoles:t}){return new M({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var p;function O(e,t){const r=new Map;for(const s of t){const n=s.parentGlobalId;if(n==null)continue;const a=s.assetName,u=s.assetType,f=s.assetHash,o=s.assetURL,l=s.conversionStatus,c=s.seqNo,i=N(u,e.supportedFormats);if(!i){m().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${u}, but it does not list it as a supported type`);continue}const g=h(r,n,()=>({files:new Map}));h(g.files,a,()=>({name:a,type:u,mimeType:i,status:P(l),parts:[]})).parts[c]={hash:f,url:o}}return r}function $(e){const t=Array.from(e.files.values()),r=new Array;for(const s of t){if(s.status!==p.COMPLETED)return null;const n=new Array;for(const a of s.parts){if(!a)return null;n.push(new b(a.url,a.hash))}r.push(new F(s.name,s.mimeType,n))}return r}function P(e){switch(e){case"COMPLETED":case"SUBMITTED":return p.COMPLETED;case"INPROGRESS":return p.PENDING;default:return p.FAILED}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(p||(p={}));export{O as assetMapFromAssetMapsJSON,I as extractMesh,G as meshFeatureSetFromJSON};
