import{dZ as l,ae as h,s as c,ah as d,ds as u,$ as i,a0 as t,a2 as y,dk as g}from"./chunk-xdbuWCSg.js";import{n as m}from"./chunk-w0wnclz1.js";import{m as b,r as f}from"./chunk-1ASa9cmX.js";import{O as v}from"./chunk-7k4THFxZ.js";import{l as S}from"./chunk-OQ-COLJI.js";import"./chunk-t4TbIqUg.js";import"./chunk-qVxa0YU8.js";import"./chunk-ZHuCNcCR.js";import"./chunk-j8HE-0Dg.js";import"./chunk-47D7e9N5.js";import"./chunk-U8KCBqLL.js";let r=class extends m(g){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new v({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(S(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.addHandles(l(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",h(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,s){return this.processor.whenGraphicBounds(e,s)}computeAttachmentOrigin(e,s){return this.processor?.computeAttachmentOrigin(e,s)}getSymbolLayerSize(e,s){return this.processor.getSymbolLayerSize(e,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,s){const{processor:o}=this;if(o?.graphics3DGraphics==null)throw new c("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=o,p=a=>typeof a=="number"?n.get(a):void 0;return b(this.view,this.layer,p,e,s)}async queryForSymbologySnapping(e,s){return f(this.processor,e,s)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||d.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))}get performanceInfo(){return new u(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}};i([t()],r.prototype,"loadedGraphics",null),i([t({readOnly:!0})],r.prototype,"legendEnabled",null),i([t()],r.prototype,"layer",void 0),i([t({readOnly:!0})],r.prototype,"processor",void 0),i([t()],r.prototype,"_slicePlaneEnabled",void 0),i([t({type:Boolean})],r.prototype,"slicePlaneEnabled",null),r=i([y("esri.views.3d.layers.GraphicsLayerView3D")],r);const I=r;export{I as default};