import{p as d,u as l,a as p}from"./chunk-8_TIVmWE.js";import{gp as u,nG as f,gk as r,kZ as m,l2 as y,gC as g,gs as v,gD as E,gy as _,nC as L,gz as O,gI as V}from"./chunk-8J0p1hu6.js";import{u as $}from"./chunk-9Xx1cZHC.js";import{_ as k,c as j}from"./chunk-vx0QQQez.js";import{c as S}from"./chunk-3E9jM2aR.js";import{m as w}from"./chunk-xlnTbaEF.js";const x={...d,defaultOptions:{type:Object,default:()=>({})},url:{type:String,default:"",required:!0},geometryType:{type:String,required:!0,default:""},definitionExpression:{type:String,default:"1=1"},renderer:{type:Object,default:void 0}},C={load:e=>e,click:e=>e,pointerMove:e=>e},G=u({name:"VaGeojsonLayer",components:{VaLayerHitEvents:k},emits:C,props:x,setup(e,{emit:n}){const a=$(),o=a.map,i=j(n),t=new f({...e.defaultOptions});return t[S]=w(),l(t,e),r(()=>{t.geometryType=e.geometryType}),r(()=>{t.url=e.url,t.refresh()}),r(()=>{e.renderer!==void 0&&(t.renderer=e.renderer)}),r(()=>{t.definitionExpression=e.definitionExpression}),p(o,t,e),n("load",{view:a,layer:t}),m("vaLayer",t),m("vaGeojsonLayer",t),{layerEventsOnEmits:i}}});function H(e,n,a,o,i,t){const c=g("VaLayerHitEvents");return v(),E(V,null,[_(c,L(e.layerEventsOnEmits),null,16),O(e.$slots,"default")],64)}const s=y(G,[["render",H]]);s.install=e=>{e.component(s.name,s)};export{s as V};