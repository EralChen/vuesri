import{p as d,u as l,a as p}from"./chunk-qwIWYVt5.js";import{gp as u,nA as f,gk as r,kZ as m,l2 as y,gC as g,gs as v,gD as E,gy as _,nB as L,gz as O,gI as V}from"./chunk-AGUgPSYp.js";import{u as $}from"./chunk-JOajwqOH.js";import{_ as k,c as j}from"./chunk-m5CRLALA.js";import{c as S}from"./chunk-3E9jM2aR.js";import{m as w}from"./chunk-r9p3aZnY.js";const x={...d,defaultOptions:{type:Object,default:()=>({})},url:{type:String,default:"",required:!0},geometryType:{type:String,required:!0,default:""},definitionExpression:{type:String,default:"1=1"},renderer:{type:Object,default:void 0}},H={load:e=>e,click:e=>e,pointerMove:e=>e},h=u({name:"VaGeojsonLayer",components:{VaLayerHitEvents:k},props:x,emits:H,setup(e,{emit:n}){const a=$(),o=a.map,i=j(n),t=new f({...e.defaultOptions});return t[S]=w(),l(t,e),r(()=>{t.geometryType=e.geometryType}),r(()=>{t.url=e.url,t.refresh()}),r(()=>{e.renderer!==void 0&&(t.renderer=e.renderer)}),r(()=>{t.definitionExpression=e.definitionExpression}),p(o,t,e),n("load",{view:a,layer:t}),m("vaLayer",t),m("vaGeojsonLayer",t),{layerEventsOnEmits:i}}});function B(e,n,a,o,i,t){const c=g("VaLayerHitEvents");return v(),E(V,null,[_(c,L(e.layerEventsOnEmits),null,16),O(e.$slots,"default")],64)}const s=y(h,[["render",B]]);s.install=e=>{e.component(s.name,s)};export{s as V};