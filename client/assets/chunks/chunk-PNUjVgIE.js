import{_ as z}from"./chunk-EUQwHdIv.js";import{pi as N,rR as V,rS as U,dP as A,rT as j,_ as s,$ as a,a1 as S,a2 as b,rU as W,aj as g,ak as R,hR as k,Z as m,rV as L,as as D,a0 as J,ca as Z,Y as x,di as q,dl as G,jP as Y,g4 as B,l as C,g9 as Q,lE as X,mU as K,ct as ee,bu as te,cv as ie,rW as ne,rX as se,A as $,g1 as re,k4 as c,d2 as ae,dr as P,ar as oe,rY as le,dk as de}from"./chunk-8J0p1hu6.js";import{t as ue}from"./chunk-uBdPJ80n.js";import{o as pe,a as he}from"./chunk-UOAPjDUV.js";import{d as ce}from"./chunk-QSAjARtE.js";import"./chunk-6wNNur8a.js";import"./chunk-QYzwhhsT.js";function H(e,t){return V(t.extent,E),U(E,A(ye,e.x,e.y,0))}const E=N(),ye=j();let h=class extends b{get tiles(){const t=this.tilesCoveringView,n=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((r,i)=>H(n,r)-H(n,i)),t}_scaleEnabled(){return W(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:n}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=n,i=[];for(const{row:o,colFrom:l,colTo:w}of t)for(let _=l;_<=w;_++){const f=n.normalizeCol(_),d=new k(null,r,o,f);this.tileInfo.updateTileInfo(d),i.push(d)}return i}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(g(()=>this.view?.state?.viewpoint,()=>this.notifyChange("tilesCoveringView"),R))}};s([a({readOnly:!0})],h.prototype,"tiles",null),s([a({readOnly:!0})],h.prototype,"_scaleEnabled",null),s([a({readOnly:!0})],h.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],h.prototype,"tileInfo",null),s([a({readOnly:!0})],h.prototype,"tileSize",null),s([a({constructOnly:!0})],h.prototype,"view",void 0),s([a({constructOnly:!0})],h.prototype,"layer",void 0),s([a()],h.prototype,"pointOfInterest",void 0),h=s([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],h);let y=class extends b{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const n=e.map(r=>H(t,r));for(let r=1;r<n.length;r++)if(n[r-1]>n[r])return e.sort((i,o)=>H(t,i)-H(t,o)),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(fe)}get tileInfo(){return this.view.featureTiles?.tilingScheme.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return e??this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(g(()=>this.view.featureTiles,e=>{this.removeHandles(M),e&&this.addHandles(e.addClient(),M)},m))}_filterTiles(e){return e==null?[]:e.filter(t=>Math.abs(t.measures.screenRect[3]-t.measures.screenRect[1])>ge&&t.measures.visibility===L.VISIBLE_ON_SURFACE)}};function fe({lij:[e,t,n],extent:r}){return new k(`${e}/${t}/${n}`,e,t,n,r)}s([a({readOnly:!0})],y.prototype,"tiles",null),s([a({readOnly:!0})],y.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],y.prototype,"tileInfo",null),s([a({readOnly:!0})],y.prototype,"tileSize",null),s([a({constructOnly:!0})],y.prototype,"view",void 0),s([a()],y.prototype,"pointOfInterest",void 0),s([a()],y.prototype,"_effectivePointOfInterest",null),y=s([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],y);const ge=50,M="feature-tiles";let O=class extends ce{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(D(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(i=>{e.set(i.data.id,i.featureCount)}),this._debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const n=i=>{const o=t.get(i),l=e.get(i)??"?";return o?`${o}:${l}
${i}`:`store:${l}
${i}`},r=new Map;return this._debugInfo.storedTiles.forEach(i=>{r.set(i.data.id,i.data)}),this._debugInfo.pendingTiles.forEach(i=>{r.set(i.data.id,i.data)}),Array.from(r.values()).map(i=>({lij:[i.level,i.row,i.col],geometry:J.fromExtent(Z(i.extent,this.view.spatialReference)),label:n(i.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};s([a({constructOnly:!0})],O.prototype,"handle",void 0),O=s([S("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],O);let p=class extends b{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new x,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const n=[];for(const{points:r}of t.pointsInFeatures)for(const{z:i}of r)n.push(i);return{elevations:n,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=q(async(t,n)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],n)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n))})}destroy(){this._suspendController=G(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new _e(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const n=this._serviceInfoFromLayer(e.layer);if(n==null)return;const r={configuration:this._convertConfiguration(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const n=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:n,filter:r,coordinateHelper:i}=e,o={...e,point:Y(n[0],n[1],n[2],i.spatialReference.toJSON()),filter:r?.toJSON()};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const n={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const n=this._editId++,r={id:n};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",r,t));const i=await this._updatingHandles.addPromise(B(e.result,t)),o={id:n,edits:{addedFeatures:i.addedFeatures?.map(({objectId:l})=>l).filter(C)??[],deletedFeatures:i.deletedFeatures?.map(({objectId:l,globalId:w})=>({objectId:l,globalId:w}))??[],updatedFeatures:i.updatedFeatures?.map(({objectId:l})=>l).filter(C)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:Q.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};s([a({constructOnly:!0})],p.prototype,"schedule",void 0),s([a({constructOnly:!0})],p.prototype,"hasZ",void 0),s([a({constructOnly:!0})],p.prototype,"elevationAlignPointsInFeatures",void 0),s([a({constructOnly:!0})],p.prototype,"queryForSymbologySnapping",void 0),s([a({readOnly:!0})],p.prototype,"updating",null),s([a({readOnly:!0})],p.prototype,"availability",void 0),s([a()],p.prototype,"_workerHandleUpdating",void 0),p=s([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],p);class _e extends X{constructor(t,n){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:n})}}let v=class extends b{get tiles(){return[new k("0/0/0",0,0,0,K(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new ee({origin:new te({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new ie({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};s([a({readOnly:!0})],v.prototype,"tiles",null),s([a({readOnly:!0})],v.prototype,"tileInfo",null),s([a({readOnly:!0})],v.prototype,"tileSize",null),s([a({constructOnly:!0})],v.prototype,"layer",void 0),s([a()],v.prototype,"pointOfInterest",void 0),v=s([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],v);let u=class extends b{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find(e=>e.layer===this._layer)}get _isSuspended(){return ne(this._layer)&&!this._layer.sublayers.find(e=>e.visible)?!0:!!this.view&&(this._layerView?.suspended!==!1||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:n}=this,{layer:r}=n,{fieldsIndex:i,timeInfo:o,floorInfo:l,subtypeField:w}=r,_=t&&"filter"in t?t.filter:null,f=_?.where&&_.where!=="1=1"?this._getOrLoadWhereFields(_.where,i):[];if(_?.timeExtent&&o){const{startField:d,endField:I}=o,F=i.get(d)?.name??d,T=i.get(I)?.name??I;F&&f.push(F),T&&f.push(T)}if(e?.map&&se(e.map)&&e.map.utilityNetworks?.find(d=>d.isUtilityLayer(r))){const d=r.fieldsIndex.get("assetGroup")?.name,I=r.fieldsIndex.get("assetType")?.name;d&&I&&(f.push(d),f.push(I))}if(r&&l?.floorField&&e?.floors?.length){const d=i.get(l.floorField)?.name??l.floorField;d&&f.push(d)}if(w){const d=i.get(w)?.name??w;d&&f.push(d)}return new Set(f)}get configuration(){const{view:e}=this,t=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new x,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=ue(pe)}initialize(){let e;const t=this.view;if(t!=null)switch(t.type){case"2d":this._tilesOfInterest=new h({view:t,layer:this._layer}),e=this._workerHandle=new p;break;case"3d":{const{resourceController:n}=t,r=this._layer;this._tilesOfInterest=new y({view:t}),e=this._workerHandle=new p({schedule:i=>n.immediate.schedule(i),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(i,o)=>{const l=await t.whenLayerView(r);return $(o),l.elevationAlignPointsInFeatures(i,o)},queryForSymbologySnapping:async(i,o)=>{const l=await t.whenLayerView(r);return $(o),l.queryForSymbologySnapping(i,o)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:o}=r;re(i,o)&&c(e.notifyElevationSourceChange())}),g(()=>r.elevationInfo,()=>c(e.notifyElevationSourceChange()),m),g(()=>this._layerView?.processor?.renderer,()=>c(e.notifySymbologyChange()),m),g(()=>this._layerView?.symbologySnappingSupported??!1,i=>c(e.setSymbologySnappingSupported(i)),m),ae(()=>this._layerView?.layer,["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}else this._tilesOfInterest=new v({layer:this._layer}),e=this._workerHandle=new p;this.addHandles([P(e)]),c(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>c(e.updateTiles(this._updateTilesParameters,null)),m),this.addHandles([g(()=>this.configuration,n=>c(e.configure(n,null)),R),g(()=>this._outFields,n=>c(e.updateOutFields(n)),m),g(()=>this._isSuspended,n=>c(e.setSuspended(n)),oe)]),t!=null&&this.addHandles(g(()=>le.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,n=>{n&&!this._debug?(this._debug=new O({view:t,handle:e}),this.addHandles(P(this._debug),"debug")):!n&&this._debug&&this.removeHandles("debug")},m)),this.addHandles(this.layerSource.layer.on("apply-edits",n=>{c(e.applyEdits(n,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:n,point:r}=e;this._tilesOfInterest.pointOfInterest=n.arrayToPoint(r);const i=this._memoizedMakeGetGroundElevation(this.view,n.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(o=>he(o,i))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const r=de(async()=>{const i=await z(()=>import("./chunk-sVaRpQVs.js").then(o=>o.W),__vite__mapDeps([0,1,2,3,4]));return this._whereModule=i.WhereClause,this._whereModule});return this._loadWhereModuleTask=r,this._updatingHandles.addPromise(r.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch{return[]}}};s([a({constructOnly:!0})],u.prototype,"spatialReference",void 0),s([a({constructOnly:!0})],u.prototype,"layerSource",void 0),s([a({constructOnly:!0})],u.prototype,"view",void 0),s([a()],u.prototype,"_tilesOfInterest",void 0),s([a({readOnly:!0})],u.prototype,"_updateTilesParameters",null),s([a()],u.prototype,"_layerView",null),s([a()],u.prototype,"_isSuspended",null),s([a({readOnly:!0})],u.prototype,"updating",null),s([a()],u.prototype,"_outFields",null),s([a({readOnly:!0})],u.prototype,"configuration",null),s([a({readOnly:!0})],u.prototype,"availability",null),s([a()],u.prototype,"_loadWhereModuleTask",void 0),s([a()],u.prototype,"_whereModule",void 0),u=s([S("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],u);export{u as FeatureServiceSnappingSource};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-sVaRpQVs.js","assets/chunks/chunk-PNolxX3P.js","assets/chunks/chunk-8J0p1hu6.js","assets/chunks/chunk-EUQwHdIv.js","assets/static/EdgeShader._x1C5tJF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
