import{dl as r,$ as p,a2 as s}from"./chunk-xdbuWCSg.js";import{N as a}from"./chunk-T1HfZ8_N.js";import{p as o}from"./chunk-wnUf0yTr.js";import{U as h}from"./chunk-QNFmJZvZ.js";import"./chunk-t4TbIqUg.js";import"./chunk-w0wnclz1.js";import"./chunk-OQ-COLJI.js";import"./chunk-6cVeal0h.js";let i=class extends o(a){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add(()=>this.exportImageVersion,()=>this._updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new h({createFetchPopupFeaturesQueryGeometry:(e,t)=>r(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};i=p([s("esri.views.3d.layers.MapImageLayerView3D")],i);const f=i;export{f as default};
