import{cN as n,eU as m,cO as d,eV as l,ai as u,L as c,e$ as f,cP as y,aj as _,_ as p,$ as o,a1 as H}from"./chunk-8J0p1hu6.js";import{r as w}from"./chunk-muEXMgU8.js";import{a as v}from"./chunk-M7FlLM-S.js";import{v as x}from"./chunk-CK8bkjZt.js";import{p as U}from"./chunk-8A2TG7WN.js";import{G as $}from"./chunk-5eYqxLOV.js";import"./chunk-EUQwHdIv.js";import"./chunk-HUuvQ7TL.js";import"./chunk-8z8MVveq.js";import"./chunk-stayn4kD.js";import"./chunk-CEMOhUyj.js";import"./chunk-pT1ASav_.js";import"./chunk-0qv62VNE.js";import"./chunk-jI1fVavC.js";import"./chunk-v6EOeNTY.js";import"./chunk-1c-vb2AJ.js";import"./chunk-Ll0OLjFE.js";import"./chunk-gG12UYPH.js";import"./chunk-kJE7c3GJ.js";import"./chunk-EImeEInu.js";import"./chunk-pcBJnprf.js";import"./chunk-IrzVJFiS.js";import"./chunk-FmWAqQex.js";import"./chunk-PNolxX3P.js";import"./chunk-M0WhCTtK.js";import"./chunk-I8sKPvw3.js";import"./chunk-Oe5CxYGj.js";let r=class extends U(n(m(d))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,g=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(h,s)=>y(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{this._highlightView.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new x({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:g,hidpi:!0}),this.addAttachHandles(_(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};p([o()],r.prototype,"strategy",void 0),p([o()],r.prototype,"updating",void 0),r=p([H("esri.views.2d.layers.MapImageLayerView2D")],r);const Y=r;export{Y as default};