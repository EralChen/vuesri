import{cP as r,_ as s,a1 as p}from"./chunk-8J0p1hu6.js";import{N as a}from"./chunk-mMmhoyhe.js";import{p as o}from"./chunk-8A2TG7WN.js";import{G as h}from"./chunk-5eYqxLOV.js";import"./chunk-EUQwHdIv.js";import"./chunk-4NKVl-EH.js";import"./chunk-kg86AZUA.js";import"./chunk-xx4gdqG2.js";let i=class extends o(a){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new h({createFetchPopupFeaturesQueryGeometry:(e,t)=>r(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeatures(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};i=s([p("esri.views.3d.layers.MapImageLayerView3D")],i);const f=i;export{f as default};
