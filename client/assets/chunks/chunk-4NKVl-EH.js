import{_ as t,$ as n,a1 as o,cQ as r,as as c,cR as h,A as d,cS as p}from"./chunk-8J0p1hu6.js";const g=l=>{let a=class extends l{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),r(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,s=e.signal;this.addHandles(c(()=>e.abort())),await h(()=>this.view.defaultsFromMap?.heightModelInfoReady,s),d(s);const i=p(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!e?.minScale||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return t([n()],a.prototype,"view",void 0),t([n()],a.prototype,"slicePlaneEnabled",void 0),a=t([o("esri.views.3d.layers.LayerView3D")],a),a};export{g as n};
