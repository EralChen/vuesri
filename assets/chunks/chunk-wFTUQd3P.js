import{di as l,df as o,_ as m,a1 as h}from"./chunk-m3jlTyOz.js";import{N as p}from"./chunk-usr91ONi.js";import{n as g}from"./chunk-byL3FYPc.js";import"./chunk-bntHIBZM.js";import"./chunk-faGQGsTX.js";import"./chunk-1-ZovkUw.js";import"./chunk-PF-kDxCw.js";let s=class extends g(p){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=l(async e=>{this.redraw((a,t)=>this._redrawImage(a,t),e)},2e3)}initialize(){this.addHandles([o(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.layer?.renderer,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,a,t){a.imageOrCanvasElement?e.image=a.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=a.pixelData,await this._redrawImage(e,t))}async _redrawImage(e,a){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const t=e.image,r=t.getContext("2d"),d=await this.layer.applyRenderer(e.pixelData,{signal:a}),i=this.layer.applyFilter(d).pixelBlock;if(i==null)throw new Error;t.width=i.width,t.height=i.height;const n=r.createImageData(i.width,i.height);n.data.set(i.getAsRGBA()),r.putImageData(n,0,0)}};s=m([h("esri.views.3d.layers.ImageryLayerView3D")],s);const f=s;export{f as default};