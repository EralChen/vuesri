import{p as i}from"./chunk-9FkaBJ-M.js";import{h2 as c,oU as r,h3 as l,lH as d,hc as m}from"./chunk-gZYsZ36N.js";import{u as f}from"./chunk-e9fsDuYR.js";import{u}from"./chunk-ynt3b8_I.js";const p={...i,defaultOptions:{type:Object,default:()=>({})},viewModel:{type:Object,default:()=>({})}},w={load:e=>e},h=c({name:"VaSlice",props:p,emits:w,setup(e,{emit:a}){const t=f(),o=new r({view:t,...e.defaultOptions});return l(()=>({...e.viewModel}),()=>{Reflect.ownKeys(e.viewModel).forEach(s=>{o.viewModel[s]=e.viewModel[s]})},{immediate:!0}),u(t.ui,o,e),{}}});function _(e,a,t,o,s,v){return m(e.$slots,"default")}const n=d(h,[["render",_]]);n.install=e=>{e.component(n.name,n)};export{n as V};