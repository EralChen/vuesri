import{hZ as d,iR as b,lz as r,_ as i,$ as o,bu as f,iU as y,bL as a,a1 as c,a2 as j,i1 as h}from"./chunk-8J0p1hu6.js";function p(t,e){return u(t)===u(e)}function u(t){if(t==null)return null;const e=t.layer!=null?t.layer.id:"";let s=null;return s=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,s==null?null:`o-${e}-${s}`}const I={json:{write:{writer:v,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:g}}}};function v(t,e){t?.layer?.objectIdField!=null&&t.attributes!=null&&(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function g(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let l=class extends d(b(j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return r(this.position,e.position)&&r(this.elevationInfo,e.elevationInfo)&&p(this.feature,e.feature)}};i([o({type:f,json:{write:{isRequired:!0}}})],l.prototype,"position",void 0),i([o({type:y}),a()],l.prototype,"elevationInfo",void 0),i([o(I)],l.prototype,"feature",void 0),l=i([c("esri.analysis.LineOfSightAnalysisObserver")],l);const O=l;let n=class extends d(h){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return r(this.position,t.position)&&r(this.elevationInfo,t.elevationInfo)&&p(this.feature,t.feature)}};i([o({type:f}),a()],n.prototype,"position",void 0),i([o({type:y}),a()],n.prototype,"elevationInfo",void 0),i([o(I)],n.prototype,"feature",void 0),n=i([c("esri.analysis.LineOfSightAnalysisTarget")],n);const m=n;export{m as f,u as t,O as u};