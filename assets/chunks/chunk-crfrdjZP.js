import{s as y,I as f,eo as T,ak as o,_ as m,ep as r,eq as w,ds as x,er as E,es as I,bU as A,et as M,eu as L,ev as D,ew as P,z as S,$ as b,a0 as p,a2 as F,cU as g,dk as $,ex as U}from"./chunk-xdbuWCSg.js";import{n as R}from"./chunk-w0wnclz1.js";import{i as C}from"./chunk-lAF4P8M5.js";import"./chunk-t4TbIqUg.js";var t;(function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"})(t||(t={}));const d=g(),V=g();let c=class extends C(R($)){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){return this.layer.parsedUrl?.path??""}get wasmLayerId(){return this._wasmLayerId}initialize(){if(this._dbgFlags.add(t.Error),this.view.viewingMode!=="local")throw new y("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)throw new y("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const e=this.layer.spatialReference;if(!f(e,this.view.spatialReference))throw new y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const s=this.layer.currentVariableId,i=this.layer.getVolume(s),l=this.layer.getVariable(s);if(i!=null&&l!=null){const h=i.dimensions[0],a=i.dimensions[1],u=i.zDimension;if(u>1){const v=i.dimensions[u],W=h.size*a.size*v.size;let _=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":_=2;break;case"Int32":case"UInt32":case"Float32":_=4}this._futureMemory=_*W}}const n=T(this).then(h=>{this._wasmLayerId=h,this._suspendedHandle=o(()=>this.suspended,a=>{const u=r(this.view);u&&u.setEnabled(this,!a)},m),this.addHandles([o(()=>this.layer.renderMode,a=>this._pushRenderModeToWasm(a)),o(()=>this.layer.currentVariableId,a=>this._pushCurrentVariableIdToWasm(a)),o(()=>this.layer.getSections(),a=>this._pushSectionsToWasm(a)),o(()=>this.layer.getVariableStyles(),a=>this._pushVariableStylesToWasm(a)),o(()=>this.layer.getVolumeStyles(),a=>this._pushVolumeStylesToWasm(a)),o(()=>this.layer.enableDynamicSections,a=>this._pushEnableDynamicSectionsToWasm(a)),o(()=>this.layer.enableIsosurfaces,a=>this._pushEnableIsosurfacesToWasm(a)),o(()=>this.layer.enableSections,a=>this._pushEnableSectionsToWasm(a)),o(()=>this.layer.enableSlices,a=>this._pushEnableSlicesToWasm(a)),o(()=>this.slicePlaneEnabled,a=>this._pushAnalysisSliceToWasm(a,this.view.slicePlane)),o(()=>this.view.slicePlane,a=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,a)),o(()=>this.layer.minScale,a=>this._onScaleUpdated(this.view.scale,a,this.layer.maxScale),m),o(()=>this.layer.maxScale,a=>this._onScaleUpdated(this.view.scale,this.layer.minScale,a),m),o(()=>this.view.scale,a=>this._onScaleUpdated(a,this.layer.minScale,this.layer.maxScale),m)])}).catch(h=>{if(w(this),this._wasmLayerId=-1,h===-1)throw new y("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(h===-2)throw new y("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})});this.addResolvingPromise(n)}destroy(){w(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=r(this.view);return!(this._wasmLayerId<0||e==null)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new x(this.usedMemory)}whenGraphicBounds(e,s){const i=e.attributes["Voxel.WorldPosition"];if(i){const l=E(),n=JSON.parse(i);if(I(n,this.view.renderSpatialReference,V,this.view.spatialReference||A.WGS84))return M(l,V),Promise.resolve({boundingBox:l,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){r(this.view)?.captureFrustum()}toggleFullVolumeExtentDraw(){r(this.view)?.toggleFullVolumeExtentDraw(this)}getLayerTimes(){return r(this.view)?.getLayerTimes(this)??[]}getCurrentLayerTimeIndex(){return r(this.view)?.getCurrentLayerTimeIndex(this)??0}_pushRenderModeToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setRenderMode(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setStaticSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),s?.setCurrentVariable(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setVariableStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const i=s??this.layer.enableSlices;for(let l=0;l<e.length;++l){const n=e[l];for(const h of n.slices)h.enabled=h.enabled&&i}}_pushVolumeStylesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const i=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(i?"have WASM":"don't have WASM!!!"));let l=!1;if(i){if(s){const n=s.origin;L(d,s.basis1,s.basis2),D(d,d),l=i.setAnalysisSlice(this,e,n,d)}else P(d,0,0,1),l=i.setAnalysisSlice(this,!1,d,d);l||this._dbg(t.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableDynamicSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=r(this.view);if(this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const i=this.layer.getVolumeStyles();this._accountForEnableSlices(i,e),s.setVolumeStyles(this,i)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableIsosurfaces(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=r(this.view);this._dbg(t.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s?.setEnableSections(this,e)||this._dbg(t.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}_onScaleUpdated(e,s,i){const l=U(e,s,i),n=r(this.view);n&&n.setIsInScaleRange(this,l)}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===t.Error?S.getLogger(this).error(s):S.getLogger(this).warn(s))}};b([p()],c.prototype,"layer",void 0),b([p()],c.prototype,"baseUrl",null),b([p({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),c=b([F("esri.views.3d.layers.VoxelLayerView3D")],c);const k=c;export{k as default};