import{s as h,bE as m,_ as d,a1 as c}from"./chunk-8J0p1hu6.js";import{N as l}from"./chunk-mMmhoyhe.js";import{i as u}from"./chunk-biU9xFww.js";import"./chunk-EUQwHdIv.js";import"./chunk-4NKVl-EH.js";import"./chunk-kg86AZUA.js";import"./chunk-xx4gdqG2.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new h("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>this.exportImageParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(i){const s=this.findExtentInfoAt(i),e=s.extent,t=new m(e[0],e[1],e[2],e[3],this._spatialReference),a=s.imageSize,n=a.width,p=a.height,o=t.width/n;return{extent:t,width:n,height:p,x:Math.round((i.x-t.xmin)/o),y:Math.round((t.ymax-i.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const M=r;export{M as default};
