import{ds as Pe,lX as le,oe as N,kx as U,eh as T,nf as Ee,jY as Oe,np as Ue,D as Ae,of as Ie,e1 as Ve,s as Y,og as Re,ak as ce,_ as Fe,oh as L,oi as de,ae as he,cV as He,ln as ue,fh as Se,dv as Le,oj as je,ok as De,ol as Be,om as ke,ei as me,on as Ge,oo as Z,op as Ne,oq as $e,cU as K,mC as pe,cI as fe,or as ge,os as ze,iJ as We,eb as j,ot as Je,es as Xe,dy as qe,ou as Ye,ov as Ze,ow as ye,eg as Ke,nX as Qe,nZ as et,n$ as tt,o1 as Q,o0 as st,o4 as it,ec as D,o6 as rt,ox as at,oy as ot,oz as be,oA as _e,z as we,$ as B,a0 as ee,a2 as nt,dk as lt,hE as ve}from"./chunk-gZYsZ36N.js";import{x as ct,f as dt}from"./chunk-ivNXwBZO.js";import{r as M,a as te,S as k,N as E,e as f,m as ht,d as ut,g as se,t as C,n as ie,i as V}from"./chunk-5LadvCkh.js";import{n as mt}from"./chunk-YjI2u2JI.js";import{s as pt}from"./chunk-47J53BIn.js";import"./chunk-t4TbIqUg.js";class ft extends Pe{constructor(e,c,o,a,r,u,p){super(e,0,0,0,c),this.nodesCached=o,this.vboMB=a,this.textureMB=r,this.vboMBCached=u,this.textureMBCached=p}}const gt={[M.Points]:null,[M.Lines]:null,[M.LineStrip]:null,[M.Triangles]:le.TRIANGLES,[M.TriangleStrip]:le.TRIANGLE_STRIP,[M.NotSet]:null},xe={[te.Opaque]:N.Opaque,[te.Mask]:N.Mask,[te.Blend]:N.Blend},yt={[k.Back]:U.Back,[k.Front]:U.Front,[k.None]:U.None,[k.NotSet]:U.Back},bt={[E.WrapYBit]:{s:T.CLAMP_TO_EDGE,t:T.REPEAT},[E.WrapXBit]:{s:T.REPEAT,t:T.CLAMP_TO_EDGE},[E.WrapXy]:{s:T.REPEAT,t:T.REPEAT},[E.None]:{s:T.CLAMP_TO_EDGE,t:T.CLAMP_TO_EDGE},[E.NotSet]:{s:T.CLAMP_TO_EDGE,t:T.CLAMP_TO_EDGE}},_t={[f.U8]:1,[f.I8]:1,[f.U16]:2,[f.I16]:2,[f.U32]:4,[f.I32]:4,[f.F32]:4,[f.F64]:8,[f.Utf8String]:1,[f.NotSet]:1};class wt{constructor(e){this.layerUid=[],this.type=Ee.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,c,o,a){const r=e.results,u=e.options.store===Oe.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const p=this.layerView.view._stage.renderView.componentObjectCollection;this.layerView.objects.forEach(y=>{y.visible&&y.intersectionGeometry&&p.intersect(y,o,a,e.tolerance,null,(_,m,h,d)=>{if(m>=0){if(c!=null&&!c(o,a,m))return;const n=i=>{const l=new Ie(this.layerView.layer.uid,()=>this._createTiles3DGraphic(this.layerView.layer,{}));i.set(this.type,l,m,h)};if(this.isGround&&(r.ground.dist==null||m<r.ground.dist)&&n(r.ground),e.options.isFiltered)return;if((r.min.dist==null||m<r.min.dist)&&n(r.min),(r.max.dist==null||m>r.max.dist)&&n(r.max),u){const i=Ue(e.ray);n(i),e.results.all.push(i)}}})})}_createTiles3DGraphic(e,c){return new Ae({layer:e,sourceLayer:e,attributes:c})}}var g;(function(t){t[t.API=1]="API",t[t.VerboseAPI=2]="VerboseAPI",t[t.Error=3]="Error"})(g||(g={}));class vt{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function G(t){return Math.round(t/1048.576)/1e3}let O=class extends mt(lt){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=Ve.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(g.Error),this._dbg(g.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new Y("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=Re(this).then(e=>{this._intersectionHandler=new wt(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add(()=>this.slicePlaneEnabled,o=>this._slicePlaneEnabledChange(o)),this._elevationProvider=new ct({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const c=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,o=>this._onRemoveFromCache(o));this._memCache=c,this._suspendedHandle=ce(()=>this.suspended,o=>{const a=L(this.view);a&&a.setEnabled(this,!o)},Fe),this.addHandles([ce(()=>this.layer.elevationInfo,o=>this._elevationInfoChanged(o))])}).catch(e=>{if(de(this),this._wasmLayerId=-1,e===ht)throw new Y("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===ut)throw new Y("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})});this.addResolvingPromise(t)}destroy(){this._dbg(g.VerboseAPI,"Tiles3DLayerView3D destroy() called"),de(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach(t=>this.freeObject(t)),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=he(this._memCache),this._updatingHandles=he(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){this._visibleGeometryChangedSchedulerHandle==null&&(this._visibleGeometryChangedSchedulerHandle=He(()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null}))}_slicePlaneEnabledChange(t){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=t),this.objects.forEach(e=>{const c=this._collection.getMaterial(e);c.commonMaterialParameters.hasSlicePlane=t,c.commonMaterialParameters.cullFace=t?U.None:this._initialCullFace.get(e)})}_elevationInfoChanged(t){const e=t?.offset??0,c=t?.unit?ue(t?.unit):1,o=L(this.view);o&&o.setLayerOffset(this,e*c)}get _obbs(){return this.objects.map(t=>this._collection.getComponentObb(t))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible&&(t+=e.totalMemory())}),t}get unloadedMemory(){let t=0;return this._lyrHandleToObjects.forEach(e=>{e.isVisible||(t+=e.totalMemory())}),t}get performanceInfo(){let t=0,e=0,c=0,o=0,a=0,r=0;return this._lyrHandleToObjects.forEach(u=>{u.isVisible?(t+=u.texMemoryUsage,e+=u.vboMemoryUsage,a++):(c+=u.texMemoryUsage,o+=u.vboMemoryUsage,r++)}),new ft(this.usedMemory,a,r,G(e),G(t),G(o),G(c))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===Se.Local){const t=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1;if(t!==3857&&t!==32662)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return(this.layer.elevationInfo?.offset??0)*(this.layer.elevationInfo?.unit?ue(this.layer.elevationInfo.unit):1)}get elevationRange(){const t=this.fullExtent;return t?.zmin&&t?.zmax?new Le(t.zmin,t.zmax):null}getElevationRange(t){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce((t,e)=>t.concat(e.components),new Array)}isUpdating(){const t=L(this.view);return!(this._wasmLayerId<0||t==null)&&t.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(t){const e=t.meshData;if(e.data==null)throw new Error("meshData.data undefined");if(e.desc=JSON.parse(e.desc),e.desc==null)throw new Error("meshData.desc undefined");const c=je(e.desc.origin),o=new Array,a=new Map,r=new vt;r.handle=t.handle,this._lyrHandleToObjects.set(t.handle,r);const u=this.view.basemapTerrain.spatialReference;let p,y;if(this.view.viewingMode==="global"){const n=ve();De(Be,c,n,u),p=ke(me(),n),y=Ge(me(),p)}else p=Z,y=Z;const _=ve();Ne(_,_,c);const m=$e(K(),_);let h=null;const d=K();for(let n=0;n<e.desc.prims.length;n++){const i=e.desc.prims[n];if(i.ptype!==M.Lines||e.data==null)continue;const{positionView:l,positionAttr:b,indicesView:P}=this.getBufferViews(i,e.data.buffer,p,!1);b!=null&&l!=null&&P!=null&&(h=pe(b),fe(d,h.center,c),h.center=d)}for(let n=0;n<e.desc.prims.length;n++){const i=e.desc.prims[n];if(this._dbg(g.VerboseAPI,JSON.stringify(i)),i.ptype===M.Lines)continue;if(gt[i.ptype]==null||e.data==null){this._dbg(g.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+i.ptype+"). Skipping primitive.");continue}const l=e.desc?.materials&&i.materialId!=null?e.desc.materials[i.materialId]:null,b=l!=null?l.lightingModel:se.Unlit,P=b!==se.Unlit,{positionView:v,positionAttr:w,normalsView:$,normalsAttr:z,colorAttr:R,texCoord0Attr:F,indicesView:A}=this.getBufferViews(i,e.data.buffer,p,P);if(w==null||v==null||A==null)continue;const re={colors:R!=null,textureCoordinates:F!=null?ge.Default:ge.None,hasNormals:$!=null,needsNormals:P},Te=w.data.length/w.size,W=(s,x)=>!s||s.data.length/s.size===Te||(this._dbg(g.Error,`${x} !== numPos. Skipping primitive.`),!1);if(!W(F,"numTexcoord")||!W(R,"numColors")||!W(z,"normals"))continue;const ae=ze(re);let I;if(h!=null?I=h.clone():(I=pe(w),fe(d,I.center,c),I.center=d),p!==Z)for(let s=0;s<v.count;s++)v.getVec(s,d),We(d,d,p),v.setVec(s,d);const J=ae.createBuffer(w.data.length),H=new Map([[j.POSITION,w]]);F!=null&&H.set(j.UV0,F),R!=null&&H.set(j.COLOR,R),z!=null&&H.set(j.NORMALCOMPRESSED,z),H.forEach((s,x)=>{s!=null&&Je(x,s,null,null,J,0)});const Ce=new Uint32Array([0,A.typedBuffer.length]),Me={vertices:{data:J.buffer,count:J.byteLength/ae.stride,layoutParameters:re},positionData:{positions:v.typedBuffer,indices:A.typedBuffer},indices:A.typedBuffer,componentOffsets:Ce};r.cpuMemoryUsage+=v.count,r.cpuMemoryUsage+=A.count;const oe=this.view.renderSpatialReference,X=K(),q=[1,1,1];dt(m,oe,q,u)||this._dbg(g.Error,"Unsupported coordinate system for IM overlay"),Xe(m,oe,X,u);const S=this._collection.createObject({toMapSpace:qe(X[0],X[1],q[0],q[1]),geometry:Me,obb:I,transform:{position:m,rotationScale:y}});l&&this._collection.updateMaterial(S,s=>{s.baseColor=l.baseColorFactor,s.usePBR=b===se.Pbr,s.hasParametersFromSource=!1,s.baseColorTexture=this._getTexture(l.baseColorTex,e,a),s.usePBR&&(s.mrrFactors=[l.metallicFactor,l.roughnessFactor,0],s.emissiveFactor=l.emissiveFactor??[0,0,0],s.metallicRoughnessTexture=this._getTexture(l.metalTex,e,a),s.emissionTexture=this._getTexture(l.emissiveTex,e,a),s.occlusionTexture=this._getTexture(l.occlusionTex,e,a),s.normalTexture=this._getTexture(l.normalTex,e,a)),s.objectOpacity=0,s.alphaDiscardMode=N.Mask;const x=[];s.baseColorTexture&&x.push(s.baseColorTexture.loadPromise),s.usePBR&&s.metallicRoughnessTexture&&x.push(s.metallicRoughnessTexture.loadPromise),s.usePBR&&s.emissionTexture&&x.push(s.emissionTexture.loadPromise),s.usePBR&&s.occlusionTexture&&x.push(s.occlusionTexture.loadPromise),s.usePBR&&s.normalTexture&&x.push(s.normalTexture.loadPromise);const ne=Promise.all(x);o.push(ne),ne.then(()=>{s.alphaDiscardMode=xe[l.alphaMode],s.objectOpacity=1,r.texMemoryUsage+=s.baseColorTexture?.glTexture?.usedMemory||0,s.usePBR&&(r.texMemoryUsage+=s.metallicRoughnessTexture?.glTexture?.usedMemory||0,r.texMemoryUsage+=s.emissionTexture?.glTexture?.usedMemory||0,r.texMemoryUsage+=s.occlusionTexture?.glTexture?.usedMemory||0,r.texMemoryUsage+=s.normalTexture?.glTexture?.usedMemory||0)}),s.commonMaterialParameters.doubleSided=l.isDoubleSided,s.commonMaterialParameters.cullFace=l.faceCulling?yt[l.faceCulling]:U.Back,this._initialCullFace.set(S,s.commonMaterialParameters.cullFace),s.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,s.componentParameters.castShadows=Ye.All,s.textureAlphaCutoff=l.alphaCutoff??.1,s.alphaDiscardMode=xe[l.alphaMode],s.isIntegratedMesh=!0,s.polygonOffsetEnabled=!1,s.hasOccludees=!1,s.ellipsoidMode=Ze(this.view.spatialReference)}),r.components.push(S),r.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(S)}if(await Promise.all(o),a.forEach(n=>{r.textures.push(n)}),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${r.handle}`,r,r.totalMemory()),{memUsageBytes:r.totalMemory()}}freeRenderable(t){const e=this._lyrHandleToObjects.get(t);e&&(this.freeObject(e),this._lyrHandleToObjects.delete(t))}freeObject(t){this._memCache&&this._memCache.pop(`${t.handle}`),t.components.forEach(e=>{t.textures.forEach(c=>{this._stage.remove(c)}),this._collection.destroyObject(e),this._initialCullFace.delete(e)})}setRenderableVisibility(t,e,c){if(this._memCache){for(let o=0;o<c;++o){const a=t[o],r=e[o];if(!r)continue;const u=this._lyrHandleToObjects.get(a);u&&(this._visibleGeometryChanged(),u.isVisible=r,u.components.forEach(p=>{this._collection.setObjectVisibility(p,r),this._elevationProvider.objectChanged(this._collection.getComponentObb(p))}),this._memCache.pop(`${a}`))}for(let o=0;o<c;++o){const a=t[o],r=e[o];if(r)continue;const u=this._lyrHandleToObjects.get(a);u&&(this._visibleGeometryChanged(),u.isVisible=r,u.components.forEach(p=>{this._collection.setObjectVisibility(p,r),this._elevationProvider.objectChanged(this._collection.getComponentObb(p))}),this._memCache.put(`${a}`,u,u.totalMemory()))}}}_getTexture(t,e,c){let o=null;if(t&&e.desc?.images&&e.data?.buffer){const a=e.desc.images[t?.imageId];if(o=c.get(a),!o&&a){const r=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,u=r>1,p=bt[t.wrapMode??E.None];let y=a.alpha?4:3;const _=new Uint8Array(e.data.buffer,a.data.byteOffset,a.data.byteCount);let m=null,h=null,d=null;switch(a.format){case C.Raw:a.pixelFormat===ie.R8?(m=_.buffer,y=1,h=""):a.pixelFormat===ie.Rgb8?(m=_.buffer,y=3,h=""):a.pixelFormat===ie.Rgba8&&(m=_.buffer,y=4,h="");break;case C.Dxt1:m=_.buffer,y=3,h=ye.DDS_ENCODING;break;case C.Dxt5:m=_.buffer,y=4,h=ye.DDS_ENCODING;break;case C.Png:h="image/png",d=document.createElement("img");break;case C.Jpeg:h="image/jpeg",d=document.createElement("img");break;case C.Etc2:h="image/ktx",d=document.createElement("img");break;case C.Astc:this._dbg(g.Error,"Astc texture not supported");break;case C.Pvrtc:this._dbg(g.Error,"Pvrtc texture not supported")}if(d&&h){const n=new Blob([_],{type:h});d.src=URL.createObjectURL(n),m=d}m&&h!=null&&(o=new Ke(m,{mipmap:u,maxAnisotropy:r,encoding:h,wrap:p,components:y,noUnpackFlip:!0,width:a.mip0Width,height:a.mip0Height}),this._stage.add(o),c.set(a,o))}}return o?new pt(this.view._stage.renderView.textureRepository,o.id):null}getBufferViews(t,e,c,o){let a,r,u,p,y,_,m,h=null;for(let d=0;d<t.atrbs.length;d++){const n=t.atrbs[d],i=n.view,l=void 0,b=i.byteOffset+i.byteCount,P=i.byteCount/_t[i.type],v=[...Array(P).keys()].map(w=>w);try{switch(n.sem){case V.Position:i.ncomp!==3||i.type!==f.F32?this._dbg(g.Error,"[Unsupported Feature] Unsupported view for Position ("+i+")"):(a=new Q(e,i.byteOffset,l,b),r=new D(a.typedBuffer,v,3));break;case V.Normal:if(i.ncomp!==3||i.type!==f.F32)this._dbg(g.Error,"[Unsupported Feature] Unsupported view for Normal ("+i+")");else if(o){const w=new Q(e,i.byteOffset,l,b),$=at(w.typedBuffer,c);y=new ot($),_=new D(y.typedBuffer,v,2)}break;case V.TexCoord:i.ncomp!==2||i.type!==f.F32?this._dbg(g.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+i+")"):p===void 0&&(p=new D(new rt(e,i.byteOffset,l,b).typedBuffer,v,2));break;case V.Color:i.ncomp===4?(i.type===f.F32&&(h=new Qe(e,i.byteOffset,l,b)),i.type===f.U8&&(h=new et(e,i.byteOffset,l,b)),i.type===f.U16&&(h=new tt(e,i.byteOffset,l,b))):i.ncomp===3&&(i.type===f.F32&&(h=new Q(e,i.byteOffset,l,b)),i.type===f.U8&&(h=new st(e,i.byteOffset,l,b)),i.type===f.U16&&(h=new it(e,i.byteOffset,l,b))),h==null?this._dbg(g.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+i+")"):u=new D(h.typedBuffer,v,i.ncomp);break;case V.FeatureIndex:break;default:this._dbg(g.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+n.sem+"). Skipping vertex attribute.")}}catch(w){this._dbg(g.VerboseAPI,"Error Creating buffer ("+w+"). Skipping vertex attribute.")}}if(t.index){const d=t.index.view,n=void 0,i=d.byteOffset+d.byteCount;switch(t.index.view.type){case f.U16:m=new _e(e,d.byteOffset,n,i);break;case f.U32:m=new be(e,d.byteOffset,n,i);break;case f.U8:default:this._dbg(g.Error,"[Unsupported Feature] index type not supported ("+d.type+").")}}if(m==null&&a!=null){const d=a.count;if(d<65535){const n=new Uint16Array(d);m=new _e(n)}else{const n=new Uint32Array(d);m=new be(n)}for(let n=0;n<d;n++)m.set(n,n)}return{positionView:a,positionAttr:r,colorAttr:u,texCoord0Attr:p,indicesView:m,normalsView:y,normalsAttr:_}}_onRemoveFromCache(t){const e=L(this.view);e&&e.onRenderableEvicted(this,t.handle,t.totalMemory()),this.freeRenderable(t.handle)}_dbg(t,e){this._dbgFlags.has(t)&&(t===g.Error?we.getLogger(this).error(e):we.getLogger(this).warn(e))}};B([ee()],O.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),B([ee()],O.prototype,"layer",void 0),B([ee()],O.prototype,"elevationOffset",null),O=B([nt("esri.views.3d.layers.Tiles3DLayerView3D")],O);const Ot=O;export{Ot as default};