import{_ as C}from"./chunk-t4TbIqUg.js";import{fz as X,fA as Y,pa as K,pb as ee,pc as I,fJ as te,$ as a,a0 as p,pd as re,br as ie,bI as Q,bA as q,bU as se,hW as oe,a2 as _,bJ as D,fO as ne,D as G,bn as ae,iP as le,fv as pe,R as ue,fN as ye,fM as ce,U as he,a3 as de,e0 as fe,dM as me,s as T,at as j,V as ge,q as U,bG as L,dC as be,i8 as we,b1 as ve,pe as H,pf as xe,dY as $e,bm as J,dV as Se,d4 as Fe,dX as Oe}from"./chunk-xdbuWCSg.js";function Re(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:n,height:s,historicMoment:f,layerOption:u,mapExtent:l,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:d,spatialReference:S,timeExtent:b,tolerance:g,width:v}=t.toJSON(),{dynamicLayers:F,layerDefs:O,layerIds:V}=Ee(t),A=e?.geometry!=null?e.geometry:null,w={historicMoment:f,geometryPrecision:n,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:d,tolerance:g},E=A&&A.toJSON()||r;w.imageDisplay=`${v},${s},${i}`,o&&(w.gdbVersion=o),E&&(delete E.spatialReference,w.geometry=JSON.stringify(E),w.geometryType=X(E));const M=S??E?.spatialReference??l?.spatialReference;if(M&&(w.sr=Y(M)),w.time=b?[b.start,b.end].join(","):null,l){const{xmin:B,ymin:k,xmax:Z,ymax:W}=l;w.mapExtent=`${B},${k},${Z},${W}`}return O&&(w.layerDefs=O),F&&!O&&(w.dynamicLayers=F),w.layers=u==="popup"?"visible":u,V&&!F&&(w.layers+=`:${V.join(",")}`),w}function Ee(t){const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:n,layerOption:s,gdbVersion:f}=t,u=r?.find(d=>d.layer!=null)?.layer?.serviceSublayers,l=s==="popup",y={},c=K({extent:e,width:o,spatialReference:e?.spatialReference}),m=[],x=d=>{const S=c===0,b=d.minScale===0||c<=d.minScale,g=d.maxScale===0||c>=d.maxScale;if(d.visible&&(S||b&&g))if(d.sublayers)d.sublayers.forEach(x);else{if(n?.includes(d.id)===!1||l&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r?.forEach(x),r&&!m.length)y.layerIds=[];else{const d=ee(m,u,f),S=m.map(b=>{const g=I(i,b);return b.toExportImageJSON(g)});if(d)y.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:v})=>v);n&&(g=g.filter(v=>n.includes(v))),y.layerIds=g}else n?.length&&(y.layerIds=n);const b=je(i,m);if(b!=null&&b.length){const g={};for(const v of b)v.definitionExpression&&(g[v.id]=v.definitionExpression);Object.keys(g).length&&(y.layerDefs=JSON.stringify(g))}}}return y}function je(t,e){const i=!!t?.length,o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const n=I(t,r),s=te(n,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var P;let h=P=class extends D{static from(t){return ne(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};a([p({type:Number,json:{write:!0}})],h.prototype,"dpi",void 0),a([p()],h.prototype,"floors",void 0),a([p({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),a([p({types:re,json:{read:ie,write:!0}})],h.prototype,"geometry",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"height",void 0),a([p({type:Date})],h.prototype,"historicMoment",void 0),a([Q("historicMoment")],h.prototype,"writeHistoricMoment",null),a([p({type:[Number],json:{write:!0}})],h.prototype,"layerIds",void 0),a([p({type:["top","visible","all","popup"],json:{write:!0}})],h.prototype,"layerOption",void 0),a([p({type:q,json:{write:!0}})],h.prototype,"mapExtent",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnFieldName",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnGeometry",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnM",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnUnformattedValues",void 0),a([p({type:Boolean,json:{write:!0}})],h.prototype,"returnZ",void 0),a([p({type:se,json:{write:!0}})],h.prototype,"spatialReference",void 0),a([p()],h.prototype,"sublayers",void 0),a([p({type:oe,json:{write:!0}})],h.prototype,"timeExtent",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"tolerance",void 0),a([p({type:Number,json:{write:!0}})],h.prototype,"width",void 0),h=P=a([_("esri.rest.support.IdentifyParameters")],h);const z=h;let $=class extends D{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return G.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=le.toJSON(o.type))}};a([p({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),a([p({type:G})],$.prototype,"feature",void 0),a([ae("feature",["attributes","geometry"])],$.prototype,"readFeature",null),a([Q("feature")],$.prototype,"writeFeature",null),a([p({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),a([p({type:String,json:{write:!0}})],$.prototype,"layerName",void 0),$=a([_("esri.rest.support.IdentifyResult")],$);const Ne=$;async function Pe(t,e,i){const o=(e=_e(e)).geometry?[e.geometry]:[],r=pe(t);return r.path+="/identify",ue(o).then(n=>{const s=Re(e,{geometry:n?.[0]}),f=ye({...r.query,f:"json",...s}),u=ce(f,i);return he(r.path,u).then(Ie).then(l=>Ge(l,e.sublayers))})}function Ie(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Ne.fromJSON(i)),e}function _e(t){return t=z.from(t)}function Ge(t,e){if(!e?.length)return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let N=null;function He(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends de{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=fe(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([me(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ve(i.sublayers,o,e);if(!r.length)return[];const n=await Me(i,r);if(!((i.capabilities?.operations?.supportsIdentify??!0)&&i.version>=10.5)&&!n)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return j();let i=null;if(t instanceof G?i=[t]:ge.isCollection(t)&&t.length>0?i=t.toArray():Array.isArray(t)&&t.length>0&&(i=t),i=i?.filter(U),!i?.length)return j();for(const o of i){const r=o.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),j(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async s=>{s||=new L;let f=null;const u="visualVariables"in n?n.visualVariables?.find(l=>l.type==="size"):void 0;u&&(N||(N=(await C(()=>import("./chunk-xdbuWCSg.js").then(l=>l.F1),__vite__mapDeps([0,1,2]))).getSize),f=N(u,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),f||="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16,i.includes(r)&&(r.symbol=new L({style:"square",size:f,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!o?.length||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const y=l.sourceLayer;be(s,y,()=>new Map).set(l.getObjectId(),l)}const f=Array.from(s,([l,y])=>{const c=l.createQuery();return c.objectIds=[...y.keys()],c.outFields=[l.objectIdField],c.returnGeometry=!0,c.maxAllowableOffset=n,c.outSpatialReference=i.spatialReference,l.queryFeatures(c)}),u=await Promise.all(f);if(!this.destroyed)for(const{features:l}of u)for(const y of l){const c=y.sourceLayer,m=s.get(c).get(y.getObjectId());m&&o.includes(m)&&(m.geometry=y.geometry,r(m,"geometry"),this._featuresResolutions.set(m,n))}}_getTargetResolution(t){const e=t*we(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await Pe(this.layerView.layer.parsedUrl,o,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:n,view:{spatialReference:s,scale:f}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const u=Math.min(ve("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,d)=>d.renderer?H({renderer:d.renderer,pointerType:i?.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,u),y=xe(f,s),c=Math.round(l.width/y),m=new q({xmin:l.center.x-y*c,ymin:l.center.y-y*c,xmax:l.center.x+y*c,ymax:l.center.y+y*c,spatialReference:l.spatialReference});return new z({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:c,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:n,tolerance:u,width:c})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,n=e.map(async({sublayer:s,popupTemplate:f})=>{if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const u=s.createQuery(),l=H({renderer:s.renderer,pointerType:i?.pointerType}),y=this.createFetchPopupFeaturesQueryGeometry(t,l),c=new Set,[m]=await Promise.all([$e(s,f),s.renderer?.collectRequiredFields(c,s.fieldsIndex)]);J(i),Se(c,s.fieldsIndex,m);const x=Array.from(c).sort();if(u.geometry=y,u.outFields=x,u.timeExtent=r,o){const F=o.clone(),O=I(F,s);O!=null&&(u.where=u.where?`(${u.where}) AND (${O})`:O)}const d=this._getTargetResolution(y.width/l),S=await Ae(f);J(i);const b=s.geometryType==="point"||S&&S.arcadeUtils.hasGeometryOperations(f);b||(u.maxAllowableOffset=d);let{features:g}=await s.queryFeatures(u,i);const v=b?0:d;g=await Te(s,g,i);for(const F of g)this._featuresResolutions.set(F,v);return g});return(await Promise.allSettled(n)).reduce((s,f)=>f.status==="fulfilled"?[...s,...f.value]:s,[]).filter(U)}};function Ve(t,e,i){const o=[];if(!t)return o;const r=n=>{const s=n.minScale===0||e<=n.minScale,f=n.maxScale===0||e>=n.maxScale;if(n.visible&&s&&f){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const u=Oe(n,{...i,defaultPopupTemplateEnabled:!1});u!=null&&o.unshift({sublayer:n,popupTemplate:u})}}};return t.map(r),o}function Ae(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?Fe():Promise.resolve()}async function Me(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:i})=>i.load().then(()=>i.capabilities.operations.supportsQuery)))}catch{return!1}}async function Te(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(n=>n?r:null))).then(r=>r.filter(n=>n!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}a([p({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),a([p({constructOnly:!0})],R.prototype,"layerView",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),a([p({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),a([p({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=a([_("esri.views.layers.support.MapService")],R);export{He as S,R as U};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-xdbuWCSg.js","assets/chunks/chunk-t4TbIqUg.js","assets/static/ShadedColorMaterial.LVqRbJ38.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
