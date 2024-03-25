import{a3 as f,Z as v,gI as S,_ as u,gH as w,ak as b,dM as k,gM as E,bm as c,gN as C,gK as F,e2 as I,gO as P,a1 as $,gP as y,bK as A,cd as G,cp as H,ay as R,gQ as O,cj as x,eC as Z,$ as r,a0 as p,a2 as z,gL as M,gR as L}from"./chunk-xdbuWCSg.js";import{a as W}from"./chunk-n9GpRiMO.js";import{m as j}from"./chunk-5lDmXkbT.js";import{$ as N}from"./chunk-PjUWctIG.js";import{o as q,a as J}from"./chunk-SWcSJFhk.js";import{i as g,r as T,n as m}from"./chunk-_GAfIJpR.js";import"./chunk-t4TbIqUg.js";import"./chunk-KRG6P2cV.js";import"./chunk-U8KCBqLL.js";import"./chunk-sNjA4mhg.js";import"./chunk-v6EOeNTY.js";import"./chunk-j8HE-0Dg.js";import"./chunk-47D7e9N5.js";import"./chunk-Qgee6Uqe.js";import"./chunk-FqE439Yz.js";import"./chunk-8eWXLfbg.js";const _="graphics-collections";let o=class extends f{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,s=e!=null&&e.type==="3d";if(!s||t.type==="map-notes")return g();const i=async(n,a)=>(await M(e.whenLayerView(t),a)).elevationAlignPointsInFeatures(n,a);return g(s,{elevationInfo:t.elevationInfo,alignPointsInFeatures:i})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,s=e!=null&&e.type==="3d",i=this._extrudedPolygonSymbolsCount>0;return s&&t.type!=="map-notes"&&i?m(i,async(n,a)=>{const l=await e.whenLayerView(t);return c(a),l.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},a)}):m()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new v,this._memoizedMakeGetGroundElevation=S(q)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),s=>{this._updatingHandles.removeHandles(_);for(const i of s)this._addMany(i.graphics.toArray()),this.addHandles([i.on("graphic-update",n=>this._onGraphicUpdate(n)),this._updatingHandles.addOnCollectionChange(()=>i.graphics,n=>this._onGraphicsChanged(n))],_)},u);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",({context:s})=>{w(s,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),b(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),u),k(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:s,coordinateHelper:{spatialReference:i}}=e,n=await E(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const a=this._memoizedMakeGetGroundElevation(this.view,i),l=n.flat().map(d=>J(d,a));return C(s,l),l}async _fetchCandidatesForSource(e,t,s){const i=F(t,this.view?.type??"2d"),n=await e.queryEngine.executeQueryForSnapping(i,s);c(s);const a=await this._snappingElevationAligner.alignCandidates(n.candidates,t.coordinateHelper.spatialReference,s);c(s);const l=await this._symbologySnappingFetcher.fetch(a,s);c(s);const d=l.length===0?a:[...a,...l];return this._snappingElevationFilter.filter(i,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],s=new Map;for(const i of e)i.geometry!=null&&(this._needsInitializeProjection(i.geometry.spatialReference)?(t.push(i.geometry.spatialReference),s.set(i.uid,i)):this._add(i));this._createPendingAdd(t,s)}_createPendingAdd(e,t){if(!e.length)return;const s=I(async a=>{await P(e.map(l=>({source:l,dest:this.spatialReference})),{signal:a}),this._markLoadedSpatialReferences(e);for(const[,l]of t)this._add(l)});this._updatingHandles.addPromise(s.promise);const i={task:s,graphics:t},n=()=>L(this._pendingAdds,i);s.promise.then(n,n),this._pendingAdds.push(i)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const s=t.wkt2||t.wkt;s&&this._loadedWkts.add(s)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=$.fromExtent(t));const s=this._ensureSource(t.type);if(s==null)return;const i=this._createOptimizedFeature(e.uid,t);i!=null&&(s.featureStore.add(i),y(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!A(e,this.spatialReference)}_createOptimizedFeature(e,t){const s=G(W(t),this.spatialReference);if(!s)return null;const i=this._ensureGeometryHasZ(s),n=H(i,this._hasZ,!1);return new R(n,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=i=>{for(;i.length<3;)i.push(0)},s=e.clone();switch(s.hasZ=!0,s.type){case"point":s.z=s.z??0;break;case"multipoint":s.points.forEach(t);break;case"polyline":s.paths.forEach(i=>i.forEach(t));break;case"polygon":s.rings.forEach(i=>i.forEach(t))}return s}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const s=this._createSource(e);return this._sources[e]=s,s}_createSource(e){const t=O.toJSON(e),s=this._hasZ,i=new j({geometryType:t,hasZ:s,hasM:!1});return{featureStore:i,queryEngine:new N({featureStore:i,fieldsIndex:x.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:s,objectIdField:h,spatialReference:this.spatialReference,priority:Z.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const s=t.uid;e.featureStore.has(s)&&(e.featureStore.removeById(t.uid),y(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:s,polyline:i,multipoint:n}=this._sources,a=[];return t!=null&&a.push(e(t)),s!=null&&a.push(e(s)),i!=null&&a.push(e(i)),n!=null&&a.push(e(n)),a}};r([p()],o.prototype,"getGraphicsLayers",void 0),r([p({constructOnly:!0})],o.prototype,"layerSource",void 0),r([p({constructOnly:!0})],o.prototype,"spatialReference",void 0),r([p({constructOnly:!0})],o.prototype,"view",void 0),r([p({readOnly:!0})],o.prototype,"updating",null),r([p({readOnly:!0})],o.prototype,"availability",void 0),r([p()],o.prototype,"_hasZ",null),r([p()],o.prototype,"_snappingElevationAligner",null),r([p()],o.prototype,"_snappingElevationFilter",null),r([p()],o.prototype,"_symbologySnappingFetcher",null),r([p()],o.prototype,"_extrudedPolygonSymbolsCount",void 0),o=r([z("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],o);const h="OBJECTID";export{o as GraphicsSnappingSource};