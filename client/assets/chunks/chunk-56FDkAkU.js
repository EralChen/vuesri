import{gx as $,$ as A,a0 as q,a2 as O,nc as N,nd as D,ne as z,z as v,ak as L,_ as F,nf as j,ng as V,nh as b,U as H,aj as G,ni as p,nj as w,nk as X,fh as Y,nl as K,nm as Q,b1 as I,nn as J,ko as Z,jY as ee,no as te,D as ie,cU as se,np as re}from"./chunk-xdbuWCSg.js";import{_ as ae}from"./chunk-t4TbIqUg.js";var M,E,T,W,f,R;(function(e){e[e.Binary=0]="Binary",e[e.JSON=1]="JSON"})(M||(M={})),function(e){e[e.TreeIndex=0]="TreeIndex",e[e.TreeStats=1]="TreeStats",e[e.TreeData=2]="TreeData",e[e.BrickBundles=3]="BrickBundles",e[e.Section=4]="Section",e[e.VariableStats=5]="VariableStats"}(E||(E={})),function(e){e[e.None=1]="None",e[e.Front=2]="Front",e[e.Back=3]="Back"}(T||(T={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(W||(W={})),function(e){e[e.None=0]="None",e[e.StaticSections=1]="StaticSections",e[e.Slices=2]="Slices",e[e.DynamicSections=4]="DynamicSections",e[e.GhostShell=8]="GhostShell",e[e.Isosurface=16]="Isosurface",e[e.Quality=32]="Quality",e[e.SunLocation=64]="SunLocation",e[e.StaticSectionSelection=128]="StaticSectionSelection",e[e.ExaggerationAndOffset=256]="ExaggerationAndOffset",e[e.CurrentTime=512]="CurrentTime",e[e.CurrentVariable=1024]="CurrentVariable",e[e.DeleteIsosurface=2048]="DeleteIsosurface",e[e.ContainerVisibility=4096]="ContainerVisibility",e[e.RenderMode=8192]="RenderMode",e[e.Optimization=16384]="Optimization",e[e.VariableStyles=32768]="VariableStyles",e[e.VolumeStyles=65536]="VolumeStyles",e[e.AnalysisSlice=131072]="AnalysisSlice"}(f||(f={})),function(e){e[e.Isosurfaces=0]="Isosurfaces",e[e.DynamicSections=1]="DynamicSections",e[e.StaticSections=2]="StaticSections"}(R||(R={}));function ne(e){return new Promise(t=>ae(()=>import("./chunk-cscijgOw.js"),__vite__mapDeps([0,1,2,3])).then(i=>i.v).then(({default:i})=>{const s=i({locateFile:oe,preinitializedWebGLContext:e,onRuntimeInitialized:()=>t(s)})})).catch(t=>{throw t})}function oe(e){return $(`esri/libs/vxl/${e}`)}var l;(function(e){e[e.Lifetime=1]="Lifetime",e[e.RequestResponse=2]="RequestResponse",e[e.Rendering=3]="Rendering",e[e.Error=4]="Error"})(l||(l={}));let C=class extends N{constructor(e){super(e),this._halfIntTexturesAvailable=!1,this._textureFloatLinearAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxlPromise=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._captureFrustum=!1,this._frustum=null,this._frustumRenderableId=-1,this._renderCoordsHelper=null,this.produces=new Map([[D.VOXEL,()=>!!this._vxl&&this.view.viewingMode==="local"]]),this.type=z.VOXEL,this.slicePlaneEnabled=!0,this.isGround=!1,this.layerUid=[]}_dbg(e,t){this._dbgFlags.has(e)&&(e===l.Error?v.getLogger(this).error(t):v.getLogger(this).warn(t))}_removeRenderPlugin(){this._pluginIsActive&&this.view._stage&&(this._dbg(l.Lifetime,"--removeRenderPlugin--"),this.view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}initialize(){this._dbg(l.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this.addHandles([L(()=>this.view.ready,e=>{e&&this.view.viewingMode==="local"?(this._dbg(l.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this.view._stage.addRenderPlugin(this),this._pluginIsActive=!0):(this._dbg(l.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},F),L(()=>this.view?.qualityProfile,e=>{this._dbg(l.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))},F),L(()=>this.view?.timeExtent,()=>{if(this._vxl){const e=this._getTimeArgs(this.view?.timeExtent);this._dbg(l.Rendering,"sceneView timeExtent changed to useTime="+e.useTime+" st="+e.startTime+" et="+e.endTime),this._vxl.set_scene_time_extent(e.startTime,e.endTime,e.useTime),this._renderPluginContext.requestRender()}},F),L(()=>this.view?.stationary,e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})])}initializeRenderContext(e){this._dbg(l.Lifetime,"--initializeRenderContext--");const t=e.renderContext.rctx;this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._textureFloatLinearAvailable=this._rctx.capabilities.textureFloatLinear,this._initializeWasm(t.gl)}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(l.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(l.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height)}_bindPreviousDepthToSlot(e,t){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const a=this._renderTargetToRestore.fbo.depthStencilTexture;return a?(t===0?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(a,e,!0),1):(this._dbg(l.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(e,t,i){if(!this._rctx)return void this._dbg(l.Error,"modifyAllocation callback has no rendering context!");const s=e;i===1?this._rctx.instanceCounter.increment(s,t):this._rctx.instanceCounter.decrement(s,t)}_setBlendState(e,t,i,s){this._rctx?(this._rctx.setBlendingEnabled(e===1),this._rctx.setBlendFunction(t,i),this._rctx.setBlendEquation(s)):this._dbg(l.Error,"setBlendState callback has no rendering context!")}_setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(l.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(e,t,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(e===1),this._rctx.setDepthWriteEnabled(t===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(j.ALWAYS,0,255),this._rctx.setStencilOpSeparate(V.FRONT,b.KEEP,b.INCR,b.KEEP),this._rctx.setStencilOpSeparate(V.BACK,b.KEEP,b.DECR,b.KEEP)):this._dbg(l.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(e){if(this._rctx)switch(e){case T.None:this._rctx.setFaceCullingEnabled(!1);break;case T.Back:this._rctx.setCullFace(V.BACK),this._rctx.setFaceCullingEnabled(!0);break;case T.Front:this._rctx.setCullFace(V.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(l.Error,"setRasterizerState callback has no rendering context!")}_setViewport(e,t,i,s){this._rctx?this._rctx.setViewport(e,t,i,s):this._dbg(l.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((e,t)=>{if(e.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(t);i>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(i))}})}_syncRequestsResponses(){this._layers.forEach((e,t)=>{const i=[];e.responses.forEach((r,u)=>{i.push(u),this._dbg(l.RequestResponse,"responding for requestID:"+u+" size:"+r.size),this._vxl.respond(t,u,r),r.requestType!==E.TreeIndex&&r.requestType!==E.Section||(e.needMemoryUsageUpdate=!0)});const s=e.responses;for(const r of i)s.delete(r);const a=this._vxl.get_new_requests(t),n=e.abortController.signal;for(const r in a){e.outstandingRequestCount+=1,e.outstandingRequestCount===1&&e.layerView.updatingFlagChanged();const u=a[r],_={responseType:"array-buffer",signal:n,query:{...e.layerView.layer.customParameters,token:e.layerView.layer.apiKey}};this._dbg(l.RequestResponse,"making requestID:"+r+" url:"+u.url),H(u.url,_).then(o=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),this._dbg(l.RequestResponse,"have response for requestID:"+r);let d=0;if(o.data.byteLength>0){d=this._vxl._malloc(o.data.byteLength);const m=new Uint8Array(this._vxl.HEAPU8.buffer,d,o.data.byteLength),x=new Uint8Array(o.data);for(let g=0;g<o.data.byteLength;++g)m[g]=x[g]}s.set(+r,{responseType:u.responseType,ptr:d,size:o.data.byteLength,success:!0,requestType:u.requestType})}).catch(o=>{e.outstandingRequestCount-=1,e.outstandingRequestCount===0&&e.layerView.updatingFlagChanged(),G(o)||(this._dbg(l.Error,`requestID:${r} failed, error=${o.toString()}`),s.set(+r,{responseType:u.responseType,ptr:0,size:0,success:!1,requestType:u.requestType}))})}})}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){if(!this._vxl&&this._vxlPromise)return!0;const t=this._layers.get(e);return!!t&&t.outstandingRequestCount>0}getLayerTimes(e){const t=[];return this._layers.forEach((i,s)=>{if(i.layerView.wasmLayerId===e.wasmLayerId){const a=this._vxl.get_layer_epoch_times(s,e.layer.currentVariableId);for(let n=0;n<a.length;++n)t.push(a[n])}}),t}getCurrentLayerTimeIndex(e){let t=0;return this._layers.forEach((i,s)=>{i.layerView.wasmLayerId===e.wasmLayerId&&(t=this._vxl.get_layer_current_time_id(s))}),t}setEnabled(e,t){this._layers.forEach((i,s)=>{i.layerView.wasmLayerId===e.wasmLayerId&&(this._vxl.set_enabled(s,t),i.needMemoryUsageUpdate=!0,this._renderPluginContext.requestRender())})}setIsInScaleRange(e,t){const i=this._layers.get(e.wasmLayerId);i&&t!==i.isInScaleRange&&(i.isInScaleRange=t,this._vxl.set_is_in_scale_range(e.wasmLayerId,t),i.needMemoryUsageUpdate=!t,this._renderPluginContext.requestRender())}setStaticSections(e,t){const i={mask:f.StaticSections,staticSections:t};return this._doMaskedUIUpdate(e,i,!0)}setCurrentVariable(e,t){const i={mask:f.CurrentVariable,currentVariable:t};return this._doMaskedUIUpdate(e,i,!0)}setRenderMode(e,t){const i={mask:f.RenderMode,renderMode:t};return this._doMaskedUIUpdate(e,i,!0)}setVerticalExaggerationAndOffset(e,t,i,s){const a={mask:f.ExaggerationAndOffset,volStyleDesc:{volumeId:t,verticalExaggeration:i,verticalOffset:s}};return this._doMaskedUIUpdate(e,a,!0)}setVariableStyles(e,t){const i={mask:f.VariableStyles,variableStyles:t};return this._doMaskedUIUpdate(e,i,!0)}setVolumeStyles(e,t){const i={mask:f.VolumeStyles,volumeStyles:t};return this._doMaskedUIUpdate(e,i,!0)}setEnableDynamicSections(e,t){const i={mask:f.ContainerVisibility,containerIsVisible:t,container:R.DynamicSections};return this._doMaskedUIUpdate(e,i,!0)}setEnableIsosurfaces(e,t){const i={mask:f.ContainerVisibility,containerIsVisible:t,container:R.Isosurfaces};return this._doMaskedUIUpdate(e,i,!0)}setEnableSections(e,t){const i={mask:f.ContainerVisibility,containerIsVisible:t,container:R.StaticSections};return this._doMaskedUIUpdate(e,i,!0)}setAnalysisSlice(e,t,i,s){const a={mask:f.AnalysisSlice,analysisSlice:{point:i,normal:s,enabled:t}};return this._doMaskedUIUpdate(e,a,!0)}_doMaskedUIUpdate(e,t,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach((a,n)=>{if(a.layerView.wasmLayerId===e.wasmLayerId){const r={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(r)&&(s=this._vxl.handle_masked_ui_update(n,r.ptr,r.byteCount)===1,r.isReusable||this._vxl._free(r.ptr))}}),s&&i&&this._renderPluginContext.requestRender(),s}_addTriangleToWasmBuffer(e,t,i,s,a){return e[3*t]=i[0],e[3*t+1]=i[1],e[3*t+2]=i[2],e[3*(t+=1)]=s[0],e[3*t+1]=s[1],e[3*t+2]=s[2],e[3*(t+=1)]=a[0],e[3*t+1]=a[1],e[3*t+2]=a[2],t+=1}_addNormalToWasmBuffer(e,t,i){return e[3*t]=i[0],e[3*t+1]=i[1],e[3*t+2]=i[2],t+=1}_doCaptureFrustum(){if(!this._vxl)return;const e=36,t=e/3,i=this._vxl._malloc(3*e*Float32Array.BYTES_PER_ELEMENT),s=new Float32Array(this._vxl.HEAPF32.buffer,i,3*e),a=this._vxl._malloc(3*t*Float32Array.BYTES_PER_ELEMENT),n=new Float32Array(this._vxl.HEAPF32.buffer,a,e),r=this._frustum.points[p.NEAR_BOTTOM_LEFT],u=this._frustum.points[p.NEAR_BOTTOM_RIGHT],_=this._frustum.points[p.NEAR_TOP_RIGHT],o=this._frustum.points[p.NEAR_TOP_LEFT],d=this._frustum.points[p.FAR_BOTTOM_LEFT],m=this._frustum.points[p.FAR_BOTTOM_RIGHT],x=this._frustum.points[p.FAR_TOP_RIGHT],g=this._frustum.points[p.FAR_TOP_LEFT];let h=0,c=0;const y=this._frustum.planes[w.NEAR];h=this._addTriangleToWasmBuffer(s,h,_,u,r),c=this._addNormalToWasmBuffer(n,c,y),h=this._addTriangleToWasmBuffer(s,h,r,o,_),c=this._addNormalToWasmBuffer(n,c,y);const S=this._frustum.planes[w.FAR];h=this._addTriangleToWasmBuffer(s,h,d,m,x),c=this._addNormalToWasmBuffer(n,c,S),h=this._addTriangleToWasmBuffer(s,h,x,g,d),c=this._addNormalToWasmBuffer(n,c,S);const P=this._frustum.planes[w.TOP];h=this._addTriangleToWasmBuffer(s,h,x,_,o),c=this._addNormalToWasmBuffer(n,c,P),h=this._addTriangleToWasmBuffer(s,h,o,g,x),c=this._addNormalToWasmBuffer(n,c,P);const U=this._frustum.planes[w.BOTTOM];h=this._addTriangleToWasmBuffer(s,h,r,u,m),c=this._addNormalToWasmBuffer(n,c,U),h=this._addTriangleToWasmBuffer(s,h,m,d,r),c=this._addNormalToWasmBuffer(n,c,U);const k=this._frustum.planes[w.LEFT];h=this._addTriangleToWasmBuffer(s,h,o,r,d),c=this._addNormalToWasmBuffer(n,c,k),h=this._addTriangleToWasmBuffer(s,h,d,g,o),c=this._addNormalToWasmBuffer(n,c,k);const B=this._frustum.planes[w.RIGHT];h=this._addTriangleToWasmBuffer(s,h,_,x,m),c=this._addNormalToWasmBuffer(n,c,B),h=this._addTriangleToWasmBuffer(s,h,m,u,_),c=this._addNormalToWasmBuffer(n,c,B),this._frustumRenderableId!==-1&&this._vxl.remove_generic_mesh(this._frustumRenderableId),this._frustumRenderableId=this._vxl.add_generic_mesh(i,3*e,a,e,255,0,0,64),this._vxl._free(i),this._vxl._free(a),this._captureFrustum=!1,this._renderPluginContext.requestRender()}captureFrustum(){this._renderCoordsHelper===null&&(this._renderCoordsHelper=X.create(Y.Local,K(!1,this.view.spatialReference))),this._frustum===null&&(this._frustum=new Q(this._renderCoordsHelper)),this._captureFrustum=!0,this._renderPluginContext!==null&&this._renderPluginContext.requestRender()}toggleFullVolumeExtentDraw(e){this._vxl&&this._layers.forEach((t,i)=>{t.layerView.wasmLayerId===e.wasmLayerId&&(this._vxl.toggle_full_volume_extent_draw(i),this._renderPluginContext.requestRender())})}addVoxelLayer(e){if(!this._vxl){const i={layerView:e,resolveCallback:null,rejectCallback:null},s=new Promise((a,n)=>{i.resolveCallback=a,i.rejectCallback=n});return this._newLayers.push(i),s}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)}removeVoxelLayer(e){if(!this._vxl){const s=this._newLayers.findIndex(n=>e.uid===n.layerView.uid);s>=0&&(this._newLayers[s].resolveCallback(-1),this._newLayers.splice(s,1));const a=this._newLayers.length;return a===0&&(this._dbg(l.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),a}let t=-1;this._layers.forEach((s,a)=>{if(s.layerView.wasmLayerId===e.wasmLayerId){t=a,s.abortController.abort(),this._vxl.remove_layer(t);const n=this.layerUid.indexOf(e.layer.uid);n!==-1&&this.layerUid.splice(n,1)}}),t>=0&&this._layers.delete(t);const i=this._layers.size;return i===0&&(this._dbg(l.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return-1}_allocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),e.ptr===0&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),e.ptr!==0&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let t=-Number.MAX_VALUE,i=Number.MAX_VALUE,s=!1;return e!=null&&(e.isAllTime?s=!0:(e.start!=null&&(s=!0,t=e.start.getTime()/1e3),e.end!=null&&(s=!0,i=e.end.getTime()/1e3))),{startTime:t,endTime:i,useTime:s}}_addVoxelLayer(e){const t=e.layer;let i=-1;const s=t.getConfiguration();if(s.length<1)return-1;const a={str:s,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const n=this._getTimeArgs(this.view?.timeExtent),r=this.view.spatialReference.isWGS84&&t.spatialReference.isWGS84?111319.49079327357:1;if(i=this._vxl.add_layer(t.serviceRoot,a.ptr,a.byteCount,r,r,n.startTime,n.endTime,n.useTime,this._toWasmQuality(this.view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),i>=0){t.test?.constantUpscaling&&(this._setUpscalingLimits(0,.25,.25),this._setUpscalingLimits(1,.5,.5),this._setUpscalingLimits(2,.75,.75));const u=new AbortController;if(this._layers.set(i,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:u,needMemoryUsageUpdate:!1,isInScaleRange:!0}),this.layerUid.push(e.layer.uid),!this._halfIntTexturesAvailable||I("mac")){const _=[];let o="";for(const d of e.layer.variables)d.renderingFormat.type!=="Int16"&&d.renderingFormat.type!=="UInt16"||(_.push(d.name),d.id===e.layer.currentVariableId&&(o=d.name));o!==""&&v.getLogger(this).error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${o}' in this browser`),_.length>0&&v.getLogger(this).warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}if(!this._textureFloatLinearAvailable){const _=[];let o="";for(const d of e.layer.variables)d.renderingFormat.type==="Float32"&&(_.push(d.name),d.id===e.layer.currentVariableId&&(o=d.name));o!==""&&v.getLogger(this).error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${o}' in this browser`),_.length>0&&v.getLogger(this).warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}return I("esri-mobile")&&v.getLogger(this).warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),i}return-1}prepareRender(e){if(!this._vxl)return;const t=e.bindParameters.camera.viewForward,i=e.bindParameters.camera.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],t[0],t[1],t[2]);const s=this._vxl.cull();this._dbg(l.RequestResponse,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=this._newLayers.length===0,this._updateMemoryUsage()}renderNode(e){if(!this._vxl)return;for(const i of this._newLayers){const s=this._addVoxelLayer(i.layerView);s===-1?i.rejectCallback(-1):i.resolveCallback(s)}if(this._newLayers=[],this._layers.size===0)return void this._dbg(l.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._lastFrameWasStationary=this.view.stationary,this._syncRequestsResponses(),this._beforeDraw(),this._vxl.begin_color_frame(!this.view._stage.renderer.isFeatureEnabled(J.HighResolutionVoxel),e.bindParameters.lighting.mainLight.direction[0],e.bindParameters.lighting.mainLight.direction[1],e.bindParameters.lighting.mainLight.direction[2]);const t=this._renderTargetToRestore.viewport;t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height),this._layers.forEach(i=>{i.needMemoryUsageUpdate=!0})),t.x===0&&t.y===0||this._dbg(l.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.bindParameters.camera),this._captureFrustum&&(this._frustum.update(e.bindParameters.camera),this._doCaptureFrustum()),this._vxl.draw(),this._afterDraw(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(l.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._vxl&&(this._layers.forEach(e=>{e.abortController.abort()}),this._wasmMemBlocks.forEach(e=>{e!==0&&this._vxl._free(e)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=ne(e).then(t=>{if(this._vxl=t,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(l.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs(this.view?.timeExtent),s=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),r=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),u=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),_=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),o=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),d=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),m=this._halfIntTexturesAvailable&&!I("mac"),x=this._textureFloatLinearAvailable;this._vxl.initialize_voxel_wasm(s,a,n,r,u,_,o,d,i.startTime,i.endTime,i.useTime,m,x),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const t of this._newLayers)t.rejectCallback(-2);this._dbg(l.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(e,t,i){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const s=i.viewport[3]-t;if(e<0||e>i.viewport[2]||t<0||t>i.viewport[3])return this._dbg(l.Error,`[js] pickDepth: outOfRange, screenXY=[${e.toFixed(0)}, ${s.toFixed(0)}]]`),null;this._beforeDraw();const a=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],a[0],a[1],a[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const r=this._vxl.pick_depth(e,s);return this._afterDraw(),r.success?r.distanceToCamera:null}pickObject(e,t,i,s){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const a=Math.round(e),n=Math.round(t);if(a<0||a>i.viewport[2]||n<0||n>i.viewport[3])return this._dbg(l.Error,`[js] pickObject: outOfRange, screenXY=[${a}, ${n}], vp=[${i.viewport.toString()}]`),null;this._beforeDraw();const r=i.viewForward,u=i.eye;this._vxl.update_camera_pos_and_direction(u[0],u[1],u[2],r[0],r[1],r[2]),this.updateWasmCamera(i),this._vxl.begin_frame();let _=null;if(s.length===0)_=this._vxl.pick_object(a,n,0,0);else{const o={str:JSON.stringify({layerIds:s}),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(o)&&(_=this._vxl.pick_object(a,n,o.ptr,o.byteCount),o.isReusable||this._vxl._free(o.ptr))}return this._afterDraw(),_}_beforeDraw(){this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0)}_afterDraw(){this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate()}intersect(e,t,i,s,a){if(!this._vxl||!this._rctx||this._layers.size===0||!e.options.selectionMode||e.options.isFiltered)return;if(a==null||a[0]<0||a[0]>e.camera.viewport[2]||a[1]<0||a[1]>e.camera.viewport[3])return this._dbg(l.Error,`[js] VoxelWasmPerScene.intersect: outOfRange, screenXY=[${a[0].toFixed(0)}, ${a[1].toFixed(0)}]`),null;const n=[];this._layers.forEach(_=>{e.options.filteredLayerUids.includes(_.layerView.layer.uid)&&n.push(_.layerView.wasmLayerId)});const r=this.pickObject(a[0],a[1],e.camera,n);if(r==null||r.layerId===-1)return;const u=this._layers.get(r.layerId);if(u){const _=u.layerView.layer.uid,o=r.distanceToCamera/Z(i,s),d=se();d[0]=r.worldX,d[1]=r.worldY,d[2]=r.worldZ;const m={};if(r.continuousValue!=null&&r.continuousValueUnits!=null?m["Voxel.ServiceValue"]=`${r.continuousValue.toLocaleString()} ${r.continuousValueUnits}`:r.uniqueValueLabel!=null&&r.uniqueValue!=null?m["Voxel.ServiceValue"]=`${r.uniqueValueLabel} (${r.uniqueValue})`:r.uniqueValue!=null&&(m["Voxel.ServiceValue"]=`${r.uniqueValue}`),m["Voxel.ServiceVariableLabel"]=r.variableLabel,m["Voxel.Position"]=r.voxelSpacePosition,r.epochTime!=null&&r.nativeTime!=null&&r.nativeTimeUnits!=null){const y=new Date(r.epochTime);m["Voxel.ServiceLocalTime"]=y.toString(),m["Voxel.ServiceNativeTime"]=`${r.nativeTime.toLocaleString()} ${r.nativeTimeUnits}`}r.depth!=null&&r.depthUnits!=null&&(m["Voxel.ServiceDepth"]=`${r.depth.toLocaleString()} ${r.depthUnits}`);const x=r.faceNormal;m["Voxel.WorldPosition"]=`[${d[0]}, ${d[1]}, ${d[2]}]`;const g=y=>{const S=new re(d,_,()=>this._createVoxelGraphic(u.layerView.layer,m));y.set(this.type,S,o,x)},h=e.results,c=e.options.store===ee.ALL;if((h.min.dist==null||o<h.min.dist)&&g(h.min),(h.max.dist==null||o>h.max.dist)&&g(h.max),c){const y=te(e.ray);g(y),e.results.all.push(y)}}}_createVoxelGraphic(e,t){return new ie({layer:e,sourceLayer:e,attributes:t})}_toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}_setUpscalingLimits(e,t,i){this._vxl&&this._vxl.set_upscaling_limits(e,t,i)}};A([q({constructOnly:!0})],C.prototype,"view",void 0),C=A([O("esri.layers.VoxelWasmPerSceneView")],C);const de=C;export{de as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-cscijgOw.js","assets/chunks/chunk-xdbuWCSg.js","assets/chunks/chunk-t4TbIqUg.js","assets/static/ShadedColorMaterial.LVqRbJ38.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
