import{u as _}from"./chunk-A28ZiPww.js";import{u as x}from"./chunk-3xNmT1XT.js";import{V as k}from"./chunk-1CE6gnXz.js";import{s as d}from"./chunk-B3AFDltd.js";import{c as v,i as g}from"./chunk-gtyL-bMM.js";import{V as F}from"./chunk-7iy6_9MI.js";import{h2 as G,qb as U,he as E,lw as $,h3 as f,qc as B,lE as y,oG as C,lG as L,hf as V,h5 as h,h6 as b,h9 as q,hg as M,hl as T,oI as R,lI as H,hc as I}from"./chunk-xdbuWCSg.js";const P={query:{type:Object,default:{}},visible:{type:Boolean,default:void 0},maxScale:{type:Number,default:0},minScale:{type:Number,default:0},queryExtent:{type:Boolean,default:!1}},j={"update:visible":e=>typeof e=="boolean",load:e=>e,change:e=>e},S=Symbol("key"),K=G({name:"VaFeaturePopupLayer",components:{VaGeoViewUi:k,VaViewUi:F},inheritAttrs:!1,props:P,emits:j,setup(e,{emit:u}){const o=_(),n=x(),c=v(o[d]),s=U({default:g(o.scale,{maxScale:e.maxScale,minScale:e.minScale}),key:"visible"},e,u),l=E([]),a=$({}),r=async()=>{if(s.value)return await o.when(),n.queryFeatures({returnGeometry:!0,outFields:["*"],where:"1=1",geometry:a.current,outSpatialReference:o.spatialReference,...e.query}).then(t=>(l.value=t.features.map(i=>(i[S]=i.attributes[n.objectIdField],i)),a.queried=a.current,t))};r().then(t=>{u("load",{featureSet:t,view:o,layer:n})}),f(()=>s.value,t=>{t&&(a.current=a.view,r())}),f(()=>({geometry:a.current,...e.query}),async()=>{await r().then(t=>{u("change",{featureSet:t,view:o,layer:n})})}),B(()=>a.view,async t=>{if(t&&s.value){if(!a.queried){a.current=t;return}a.queried.contains(t)||(a.current=a.queried.union(t).clone())}},{throttle:1e3});const w=new c("watch:scale",([t])=>{s.value=g(t,{maxScale:e.maxScale,minScale:e.minScale})});w.add(),y(()=>{w.remove()});const m=new c("watch:extent",([t])=>{a.view=t});if(f(()=>e.queryExtent,()=>{e.queryExtent?m.add():m.remove()},{immediate:!0}),y(()=>{m.remove()}),n[d]){const t=v(n[d]),i=new t("change",async()=>{l.value=[],await C(),await r()});i.add(),y(()=>{i.remove()})}return{visible:s,features:l,layer:n,sKey:S}}});function N(e,u,o,n,c,s){const l=V("VaGeoViewUi"),a=V("VaViewUi");return h(),b(a,{class:"feature-popup-layer"},{default:q(()=>[(h(!0),M(T,null,R(e.features,r=>(h(),b(l,H(e.$attrs,{key:r[e.sKey],class:"feature-popup-layer__item",visible:e.visible,geometry:r.geometry,orphan:!0}),{default:q(()=>[I(e.$slots,"default",{attributes:r?.attributes??{},geometry:r.geometry})]),_:2},1040,["visible","geometry"]))),128))]),_:3})}const p=L(K,[["render",N]]);p.install=e=>{e.component(p.name,p)};export{p as V};
