import{_ as t,$ as r,d1 as l,a1 as x,e1 as d,ad as w,s as p}from"./chunk-AGUgPSYp.js";const f=h=>{let e=class extends h{initialize(){this.exportImageParameters=new d({layer:this.layer})}destroy(){this.exportImageParameters=w(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(n){const{layer:o}=this;if(!n)return Promise.reject(new p("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const{popupEnabled:m}=o;if(!m)return Promise.reject(new p("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:m}));const u=this.createFetchPopupFeaturesQuery(n);if(!u)return Promise.resolve([]);const{extent:s,width:a,height:i,x:y,y:c}=u;if(!(s&&a&&i))throw new p("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:i});return o.fetchFeatureInfo(s,a,i,y,c)}};return t([r()],e.prototype,"exportImageParameters",void 0),t([r({readOnly:!0})],e.prototype,"exportImageVersion",null),t([r()],e.prototype,"layer",void 0),t([r(l)],e.prototype,"timeExtent",void 0),e=t([x("esri.layers.mixins.WMSLayerView")],e),e};export{f as i};