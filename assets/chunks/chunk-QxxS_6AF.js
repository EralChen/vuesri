import{_ as r,$ as a,a1 as s,cY as p,K as m,s as i,bO as l}from"./chunk-217NDGZJ.js";import{_ as n}from"./chunk-uByWkc9Y.js";import"./chunk-oVLQlo07.js";import"./chunk-4RvaleYy.js";import"./chunk-o_D30D-_.js";import"./chunk-L4OAvHf1.js";import"./chunk-SS5GKVPY.js";import"./chunk-snGw7sZD.js";import"./chunk-02A6HnH6.js";import"./chunk-oaJGPhPf.js";import"./chunk-jOtLLR3q.js";import"./chunk-T4dGmTbW.js";import"./chunk-D6ppR_5q.js";import"./chunk-l4dfT1B4.js";import"./chunk-MiF2G4E6.js";import"./chunk-NuNdKSuN.js";import"./chunk-v6EOeNTY.js";import"./chunk-16MmnYJS.js";import"./chunk-jo4wFQpA.js";import"./chunk-3F9qDIKo.js";import"./chunk-hWOheTy-.js";import"./chunk-lZW-DZ9M.js";import"./chunk-2Gnj122v.js";let t=class extends n{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=p()}initialize(){const{layer:e,view:o}=this;m(e)?.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new i("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),e.infoFor3D!=null&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new i("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||l(e.spatialReference,o.spatialReference)||this.addResolvingPromise(Promise.reject(new i("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){return this.view.featureTiles?.tilingScheme?.spatialReference}};r([a({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),r([a()],t.prototype,"layer",void 0),t=r([s("esri.views.3d.layers.FeatureLayerView3D")],t);const S=t;export{S as default};