import{L as O,_ as o,$ as u,c$ as A,d0 as $,d1 as j,a1 as G,aj as N,ar as S,d2 as E,d3 as b,d4 as x,aq as I,d5 as v,cJ as C,d6 as R,d7 as L,d8 as q,d9 as M,da as Q,db as h,dc as y,s as m,dd as F,cE as B,de as D}from"./chunk-217NDGZJ.js";const P="esri.views.layers.FeatureLayerView",g=O.getLogger(P),U=_=>{let l=class extends _{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([N(()=>{const t=this.layer;return[t?.elevationInfo?.featureExpressionInfo,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),S),E(()=>this.view?.floors,"change",()=>this._handleRequiredFieldsChange()),E(()=>{const t=this.layer;return t&&"sublayers"in t?t.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:t,layer:{fieldsIndex:e},requiredFields:r}=this;return"outFields"in t&&t.outFields?b(e,[...x(e,t.outFields),...r]):b(e,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){this._override("featureEffect",t)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){g.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=this.filter!=null?this.filter.createQuery(t):new I(t);if(this.layer.type==="feature"){const r=v(this);r!=null&&(e.where=e.where?`(${e.where}) AND (${r})`:r)}return this.timeExtent!=null&&(e.timeExtent=e.timeExtent!=null?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}createAggregateQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new I(t)}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}async fetchPopupFeatures(t,e){const r=this.validateFetchPopupFeatures(e);if(r)throw r;return this.fetchClientPopupFeatures(e)}_loadArcadeModules(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?C():Promise.resolve()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t=this.view.type==="3d",{layer:e,layer:{fieldsIndex:r,objectIdField:a}}=this,p="renderer"in e&&e.renderer,n="orderBy"in e&&e.orderBy,s="featureReduction"in e?e.featureReduction:null,i=new Set,f=await Promise.allSettled([p?p.collectRequiredFields(i,r):null,R(i,e),t?L(i,e):null,this.filter!=null?q(i,e,this.filter):null,this.featureEffect!=null?q(i,e,this.featureEffect.filter):null,s?M(i,e,s):null,n?Q(i,e,n):null]);if("timeInfo"in e&&e.timeInfo&&this.timeExtent&&h(i,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),e.type==="feature"&&(e.floorInfo&&h(i,e.fieldsIndex,[e.floorInfo.floorField]),t&&e.infoFor3D!=null&&(e.globalIdField==null&&g.error("globalIdField missing on 3DObjectFeatureLayer"),h(i,e.fieldsIndex,[e.globalIdField]))),e.type==="subtype-group"){y(i,r,e.subtypeField);const d=e.sublayers.map(w=>Promise.all([w.renderer?.collectRequiredFields(i,r),R(i,w)]));await Promise.allSettled(d)}for(const d of f)d.status==="rejected"&&g.error(d.reason);y(i,r,a),t&&"displayField"in e&&e.displayField&&y(i,r,e.displayField);const c=Array.from(i).sort();this._set("requiredFields",c)}validateFetchPopupFeatures(t){if(t==null)return null;for(const e of t.clientGraphics??[]){const r=e.layer;if("popupEnabled"in r&&!r.popupEnabled)return new m("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r});if(e.isAggregate){const a="featureReduction"in r?r.featureReduction:null;if(!(a&&"popupTemplate"in a&&a.popupEnabled&&a.popupTemplate))return new m("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r})}else if("popupTemplate"in r&&!F(r,t))return new m("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r})}}async fetchClientPopupFeatures(t){const e=t!=null?t.clientGraphics:null;if(!e||e.length===0)return[];const r=new Array(e.length),a=new Map,p=await this.createPopupQuery(t);for(let n=0;n<e.length;n++){const s=e[n];if(s.isAggregate){r[n]=s;continue}const i=s.layer;if(!("popupEnabled"in i))continue;const f=x(this.layer.fieldsIndex,p.outFields),c=F(i,t);if(c==null)continue;const d=await this._loadArcadeModules(c);d&&d.arcadeUtils.hasGeometryOperations(c)||!B(f,s)?a.set(s.getObjectId(),{graphic:s,index:n}):r[n]=s}if(this.layer.type==="stream"||a.size===0)return r.filter(Boolean);p.objectIds=Array.from(a.keys());try{const n=await this.layer.queryFeatures(p);for(const s of n.features){const{graphic:{geometry:i},index:f}=a.get(s.getObjectId());s.geometry||=i,r[f]=s}}catch{}return r.filter(Boolean)}async createPopupQuery(t){const e=this.layer.createQuery(),r=new Set;let a=!1;const p=t?.clientGraphics?t.clientGraphics.map(n=>n.layer):[this.layer];for(const n of p){if(!("popupEnabled"in n))continue;const s=F(n,t);if(s==null)continue;const i=await this._loadArcadeModules(s),f=i&&i.arcadeUtils.hasGeometryOperations(s);a=!(this.layer.geometryType!=="point"&&!f);const c=await D(this.layer,s);for(const d of c)r.add(d)}if(e.returnGeometry=a,e.returnZ=a,e.returnM=a,e.outFields=Array.from(r),e.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const n=v(this);n!=null&&(e.where=e.where?`(${e.where}) AND (${n})`:n)}return e}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}};return o([u()],l.prototype,"_updatingRequiredFieldsPromise",void 0),o([u({readOnly:!0})],l.prototype,"availableFields",null),o([u({readOnly:!0})],l.prototype,"dataUpdating",void 0),o([u({type:A})],l.prototype,"featureEffect",null),o([u({type:$})],l.prototype,"filter",void 0),o([u(j)],l.prototype,"timeExtent",void 0),o([u()],l.prototype,"layer",void 0),o([u({type:Number})],l.prototype,"maximumNumberOfFeatures",null),o([u({readOnly:!0,type:Boolean})],l.prototype,"maximumNumberOfFeaturesExceeded",null),o([u({readOnly:!0})],l.prototype,"requiredFields",void 0),o([u()],l.prototype,"suspended",void 0),o([u()],l.prototype,"view",void 0),l=o([G(P)],l),l};export{U as P};