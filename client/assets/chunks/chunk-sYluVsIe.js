import{_ as u}from"./chunk-EUQwHdIv.js";import{bz as v,bB as c,bj as m,bk as f,i2 as _,i3 as w,bl as g,dR as I,i4 as L,di as O,aj as y,i5 as S,i6 as $,S as A,i7 as V,j as E,bo as M,i8 as P,i9 as d,ia as C,_ as r,$ as l,bM as p,br as T,ar as j,d2 as x,ak as b,a1 as R,an as G,L as H}from"./chunk-8J0p1hu6.js";const k=Symbol("WebScene");let s=class extends v(c(m(f(_(w(g(G))))))){constructor(e){super(e),this.allLayers=new I({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=L(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=O(async(i,t,a)=>{const{save:o,saveAs:n}=await u(()=>import("./chunk-DeFIoczu.js"),__vite__mapDeps([0,1,2,3,4,5]));switch(i){case d.SAVE:return o(this,t);case d.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([y(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&k in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(x(()=>this.tables,"before-add",t=>{t.preventDefault(),H.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},j),y(()=>this.visible,this._onVisibilityChange.bind(this),b)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===S.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const h=$(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);h?.layerType&&o.push(h)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new A({id:a,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return V(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:E},e).catch(t=>{if(M(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return P(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(d.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(d.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles(y(()=>e.visible,i=>this._onChildVisibilityChange(e,i),b),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!C(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([p("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:e?.type==="Group Layer"&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([T("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([p("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([R("esri.layers.GroupLayer")],s);const D=s;export{D as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-DeFIoczu.js","assets/chunks/chunk-uCbd_5iQ.js","assets/chunks/chunk-8J0p1hu6.js","assets/chunks/chunk-EUQwHdIv.js","assets/static/EdgeShader._x1C5tJF.css","assets/chunks/chunk-BqDkEJ-e.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
