import{_ as x}from"./chunk-oVLQlo07.js";import{iY as W,bl as k,iR as D,ac as X,J as v,cb as Y,L as ee,iF as te,f0 as A,s as h,iG as re,iZ as N,i_ as L,i5 as M,aq as Q,_ as i,$ as s,bM as ie,i$ as se,iK as ne,iI as ae,iJ as oe,bG as le,iX as ue,iW as pe,iL as de,b$ as ye,br as F,j0 as U,a1 as H,j1 as ce,j2 as he,j3 as be,iQ as B,j4 as fe,j5 as ge,j6 as me,hV as ve,j7 as we,j8 as je,bz as Se,iE as Fe,bB as $e,bA as Ie,bi as Oe,bj as Ee,bk as Te,iA as _e,ic as Ce,V as C,di as Ae,aj as Le,ak as xe,bo as Pe,j9 as Ge,ja as Ve,I as qe,eR as Re,jb as ke,jc as De,jd as Ne,je as Me,g4 as Qe,jf as Ue,jg as He,i8 as Be,jh as Je,ji as ze,jj as Ze,jk as Ke,jl as We,jm as Xe,i9 as I,jn as Ye,iH as et,jo as tt,bF as rt,jp as P,jq as it,an as st}from"./chunk-AGUgPSYp.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:ce,errorContext:"renderer",typeMap:{simple:A,"unique-value":he,"class-breaks":be}},G=B(),V=W({types:J});let at=0;function S(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ot(e){return new A({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return me.clone();case"polyline":return ge.clone();case"polygon":case"multipatch":return fe.clone();default:return null}}function ut(e,t){return!!t&&e?.type==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){return e==null?null:t.subtypes?.find(r=>r.code===e)}function pt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},l=z(e,t);if(l!=null){const{defaultValues:o}=l;for(const u in o)n[u]=o[u]}return n[t.subtypeField]=e,new U({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const Z="esri.layers.support.SubtypeSublayer";let a=class extends k(D(X(ve))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${at++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:l}=this;let o;if(n){o=[];let u=0;n.forEach(({name:y,alias:b,editable:w,visible:j})=>{if(!j)return;const d=l?.fields?.find(E=>E.name===y);if(!d)return;const f={name:y};let m=!1;b!==d.alias&&(f.alias=b,m=!0),w!==d.editable&&(f.editable=w,m=!0),o.push(f),m&&u++}),u===0&&o.length===n.length&&(o=null)}else o=v(e);o?.length&&Y(r,o,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e?.fields;if(!e||!n?.length)return null;const{subtypes:l,subtypeField:o}=e,u=l?.find(j=>j.code===r),y=u?.defaultValues,b=u?.domains,w=[];for(const j of n){const d=j.clone(),{name:f}=d,m=t?.find($=>$.name===f);if(d.visible=!t||!!m,m){const{alias:$,editable:K}=m;$&&(d.alias=$),K===!1&&(d.editable=!1)}const E=y?.[f]??null;d.defaultValue=f===o?r:E;const T=b?.[f]??null;d.domain=f===o?null:T?T.type==="inherited"?d.domain:T.clone():null,w.push(d)}return w}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||ee.getLogger(Z).error(g("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?ot(e.geometryType):null}readRendererFromService(e,t,r){if(t.type==="Table")return null;const n=t.drawingInfo?.renderer,l=V(n,t,r);let o;const{subtypeCode:u}=this;if(u!=null&&ut(l,t.subtypeField)){const y=l.uniqueValueInfos?.find(({value:b})=>(b=typeof b=="number"?String(b):b)===String(u));y&&(o=new A({symbol:y.symbol}))}else l?.type!=="simple"||l.visualVariables?.length||(o=l);return o}readRenderer(e,t,r){const n=t?.layerDefinition?.drawingInfo?.renderer;return n?n.visualVariables?.some(o=>o.type!=="rotationInfo")?void 0:V(n,t,r)||void 0:void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[pt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw g("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw g("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw g("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw g("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:l}=this;if(r){const{displayField:o,editFieldsInfo:u,objectIdField:y}=r;t={displayField:o,editFieldsInfo:u,fields:n,objectIdField:y,title:l}}return re(t,e)}createQuery(){if(!this.parent)throw g("createQuery");const e=N(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===M.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw g("queryAttachments");const n=e.clone();return n.where=q(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw g("queryFeatures");const n=Q.from(e)??r.createQuery();return e!=null&&(n.where=q(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),i([s({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),i([ie("fieldOverrides")],a.prototype,"writeFieldOverrides",null),i([s({...G.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),i([s(G.fieldsIndex)],a.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),i([s({type:se,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),i([s({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([s(S(v(ne)))],a.prototype,"labelsVisible",void 0),i([s({type:[ae],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:oe},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),i([s(S(v(le)))],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s((()=>{const e=v(ue);return e.json.origins.service.read=!1,S(e)})())],a.prototype,"minScale",void 0),i([s((()=>{const e=v(pe);return e.json.origins.service.read=!1,S(e)})())],a.prototype,"maxScale",void 0),i([s({readOnly:!0})],a.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),i([s({clonable:!1})],a.prototype,"parent",void 0),i([s(S(v(de)))],a.prototype,"popupEnabled",void 0),i([s({type:ye,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),i([s({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),i([F("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),i([F("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),i([s({type:[U],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),i([F("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),i([F("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),i([s({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=i([H(Z)],a);const q=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),l=`${t}=${r}`,o=e??"";return n.test(o)?o.replace(n,l):L(l,o)},g=e=>new h(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),O=a,c="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function R(e,t){return new h("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=B();let p=class extends we(je(Se(Fe($e(Ie(Oe(Ee(Te(k(_e(Ce(D(st))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(O)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Ae(async(t,r,n)=>{const{save:l,saveAs:o}=await x(()=>import("./chunk-sLeH5PCu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));switch(t){case I.SAVE:return l(this,r);case I.SAVE_AS:return o(this,n,r)}}),this.addHandles(Le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),xe))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Pe).then(async()=>{if(!this.url)throw new h("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new h("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Ge(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return Ve(this)}get parsedUrl(){const e=qe(this.url);return e!=null&&this.layerId!=null&&(e.path=Re(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?ke(this.url,t):t}async addAttachment(e,t){return De(this,e,t,c)}async updateAttachment(e,t,r){return Ne(this,e,t,r,c)}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Qe(x(()=>import("./chunk-rWSeg5zz.js"),__vite__mapDeps([8,2,1,3,9,10])),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=N(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Ue(this,e,t,c)}async fetchRecomputedExtents(e){return He(this,e,c)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Be(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Je(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),n=Q.from(e)??r.createQuery(),l=n.outFields??[];l.includes(this.subtypeField)||(l.push(this.subtypeField),n.outFields=l);const o=await r.source.queryFeatures(n,t);if(o?.features)for(const u of o.features)u.layer=u.sourceLayer=this.findSublayerForFeature(u);return o}async queryObjectIds(e,t){return ze(this,e,t,c)}async queryFeatureCount(e,t){return Ze(this,e,t,c)}async queryExtent(e,t){return Ke(this,e,t,c)}async queryRelatedFeatures(e,t){return We(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return Xe(this,e,t,c)}async save(e){return this._debouncedSaveOperations(I.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(I.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:n,messages:l}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return l?.push(R(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return l?.push(R(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(l?.push(new h("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Ye(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new h("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new h("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),et(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return tt(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],p.prototype,"createQueryVersion",null),i([s({readOnly:!0})],p.prototype,"editingEnabled",null),i([s({readOnly:!0})],p.prototype,"effectiveEditingEnabled",null),i([s({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],p.prototype,"fields",void 0),i([s(_.fieldsIndex)],p.prototype,"fieldsIndex",void 0),i([s(rt)],p.prototype,"id",void 0),i([s({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],p.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),i([s(_.outFields)],p.prototype,"outFields",void 0),i([s({readOnly:!0})],p.prototype,"parsedUrl",null),i([s({clonable:!1})],p.prototype,"source",null),i([s({type:C.ofType(O),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:l})=>{const o=new O({subtypeCode:l});return o.read(t,r),o});return new(C.ofType(O))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),l=M.PORTAL_ITEM;let o=!0;if(P(n)===l&&P(r.origin)>l){const u=e.some(y=>y.hasUserOverrides());o=this._sublayersCollectionChanged||u}return{enabled:o,ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),i([s({type:it})],p.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],p.prototype,"title",void 0),i([F("service","title",["name"])],p.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],p.prototype,"type",void 0),p=i([H(dt)],p);const ht=p;export{ht as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-sLeH5PCu.js","assets/chunks/chunk-AGUgPSYp.js","assets/chunks/chunk-oVLQlo07.js","assets/static/EdgeShader.1pVPqqV3.css","assets/chunks/chunk-8hK7Z-a9.js","assets/chunks/chunk-UVR0I-38.js","assets/chunks/chunk-60T-a_hh.js","assets/chunks/chunk-4e7sbcIe.js","assets/chunks/chunk-rWSeg5zz.js","assets/chunks/chunk-MhgqH6Lj.js","assets/chunks/chunk-eS0Kqlre.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}