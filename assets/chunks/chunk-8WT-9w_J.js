import{_ as s,$ as i,d1 as g,a1 as x,s as c,dd as E,aq as b,bu as d}from"./chunk-217NDGZJ.js";const T=y=>{let e=class extends y{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(n,p){const{layer:r}=this;if(!n)throw new c("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:u}=r,o=E(r,p);if(!u||o==null)throw new c("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:u,popupTemplate:o});const m=await o.getRequiredFields(),t=new b;t.timeExtent=this.timeExtent,t.geometry=n,t.outFields=m,t.outSpatialReference=n.spatialReference;const{resolution:a,spatialReference:l}=this.view,w=this.view.type==="2d"?new d(a,a,l):new d(.5*a,.5*a,l),{returnTopmostRaster:h,showNoDataRecords:R}=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},v={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:w,showNoDataRecords:R,signal:p!=null?p.signal:null};return r.queryVisibleRasters(t,v).then(f=>f)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return s([i()],e.prototype,"layer",void 0),s([i()],e.prototype,"suspended",void 0),s([i(g)],e.prototype,"timeExtent",void 0),s([i()],e.prototype,"view",void 0),e=s([x("esri.views.layers.ImageryLayerView")],e),e};export{T as n};