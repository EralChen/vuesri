import{$ as s,a0 as n,a2 as v,a3 as P,pQ as k,fI as q,aj as g,z as x,D as w,pR as D,pS as A,a$ as U,aF as V,e0 as I,bA as E,pT as z,gc as C,ak as y,as as T,pU as F,U as M,fA as j,dj as H,fB as L,dk as O,fC as G,al as $,V as S,at as R,b1 as J}from"./chunk-gZYsZ36N.js";import{d as N,f as W,a as Q}from"./chunk-KWrdSm7C.js";import{$ as K}from"./chunk-9wG_pF9U.js";import{h as X}from"./chunk-f4OHVDFZ.js";import{v as Y}from"./chunk-wj-IYDOv.js";import{u as Z}from"./chunk-XoXFkraM.js";import"./chunk-t4TbIqUg.js";import"./chunk-jUZKQwH1.js";import"./chunk-O81L3uYa.js";import"./chunk-LCQ8NG3J.js";import"./chunk-gJZ7CV2L.js";import"./chunk-_x3yiVOL.js";import"./chunk-47D7e9N5.js";import"./chunk-L0QvornZ.js";import"./chunk-v6EOeNTY.js";import"./chunk-f_w1oLax.js";import"./chunk-rTJVl5ZJ.js";import"./chunk-X2Pl0lLl.js";import"./chunk-ppeJNCA9.js";import"./chunk-ojUUCvqn.js";import"./chunk-iPxuUnvs.js";let h=class extends P{constructor(){super(...arguments),this.attached=!1,this.container=new k,this.updateRequested=!1,this.type="imagery",this._bitmapView=new q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{g(t)||x.getLogger(this).error(t)})}hitTest(e){return new w({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Y({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=a=>this.layer.pixelFilter?this.layer.applyFilter(a):{...i,extent:t.extent}}).catch(e=>{g(e)||x.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(t)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=D(i,t);return a!=null?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(e,t,i,a){(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,a.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,t,i,a);if(r.imageBitmap)return r.imageBitmap;const o=await this.layer.applyRenderer(r.pixelData,{signal:a.signal}),l=new A(o.pixelBlock,o.extent?.clone(),r.pixelData.pixelBlock);return l.filter=u=>this.layer.applyFilter(u),l}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([n()],h.prototype,"type",void 0),h=s([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const ee=h;class te extends U{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[N],target:()=>this.children,drawPhase:V.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===V.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let c=class extends P{constructor(e){super(e),this._loading=null,this.update=I((t,i)=>this._update(t,i).catch(a=>{g(a)||x.getLogger(this).error(a)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:a,spatialReference:r}=e.state,o=new E({xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax,spatialReference:r}),[l,u]=e.state.size;this._loading=this.fetchPixels(o,l,u,i);const b=await this._loading;this._addToDisplay(b,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:a,pixelBlock:r}=e,o=new W(r);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=a.xmin,o.y=a.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=r.width*t.symbolTileSize,o.height=r.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};s([n()],c.prototype,"fetchPixels",void 0),s([n()],c.prototype,"container",void 0),s([n()],c.prototype,"_loading",void 0),s([n()],c.prototype,"updating",null),c=s([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],c);const ie=c;let d=class extends P{constructor(){super(...arguments),this.attached=!1,this.container=new te,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,a)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:l,width:u,height:b}=z(e,t,i,o,r);if(r!=null&&!r.intersects(e))return{extent:l,pixelBlock:null};const f={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(f)){const p=this.getPixelData();if(p!=null&&`${p.extent.xmin}, ${p.extent.ymin}, ${p.extent.xmax}, ${p.extent.ymax}`===f.bbox)return p}const{pixelData:B}=await this.layer.fetchImage(l,u,b,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:a});this._dataParameters=f;const _=B?.pixelBlock;return _==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?C(_,"vector-uv"):_}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new ie({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(y(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),T),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new w({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{g(t)||x.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,a=this._dataParameters.symbolTileSize===e.symbolTileSize,r=this._dataParameters.bbox===e.bbox;return t&&i&&a&&r}async _getProjectedFullExtent(e){try{return F(this.layer.fullExtent,e)}catch{try{const i=(await M(this.layer.url,{query:{option:"footprints",outSR:j(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?E.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([n()],d.prototype,"attached",void 0),s([n()],d.prototype,"container",void 0),s([n()],d.prototype,"layer",void 0),s([n()],d.prototype,"timeExtent",void 0),s([n()],d.prototype,"type",void 0),s([n()],d.prototype,"view",void 0),s([n()],d.prototype,"updating",null),d=s([v("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const ae=d;let m=class extends Z(H(L(O))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new G,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new K({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new X(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([y(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},$),y(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},$),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),y(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof w))return R();let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(a=>a.clone()):e instanceof w&&(i=[e.clone()]),this._highlightGraphics.addMany(i),R(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return J("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:i}=this.subview;if(i===t)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=t==="imagery"?new ee({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new ae({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new Q({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([n()],m.prototype,"pixelData",null),s([n()],m.prototype,"subview",void 0),m=s([v("esri.views.2d.layers.ImageryLayerView2D")],m);const $e=m;export{$e as default};