import{p as u,a as i,u as c}from"./chunk-8_TIVmWE.js";import{gp as f,nJ as l,gk as o,kZ as d,l2 as m,gz as p}from"./chunk-8J0p1hu6.js";import{u as y}from"./chunk-9Xx1cZHC.js";const g={...u,defaultOptions:{type:Object,default:()=>({})},url:{type:String,default:""},renderer:{type:Object,default:void 0}},_={load:e=>e},v=f({name:"VaImageryLayer",emits:_,props:g,setup(e,{emit:n}){const a=y(),s=a.map,r=new l({...e.defaultOptions});return o(()=>{r.url=e.url}),o(()=>{e.renderer!==void 0&&(r.renderer=e.renderer)}),i(s,r,e),c(r,e),n("load",{layer:r,view:a}),d("vaLayer",r),d("vaImageryLayer",r),{}}});function L(e,n,a,s,r,$){return p(e.$slots,"default")}const t=m(v,[["render",L]]);t.install=e=>{e.component(t.name,t)};export{t as V};