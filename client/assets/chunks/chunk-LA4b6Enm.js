import{p as c,a as l,u as i}from"./chunk-gtyL-bMM.js";import{h2 as p,oW as d,lB as n,lG as u,hc as m}from"./chunk-xdbuWCSg.js";import{u as f}from"./chunk-A28ZiPww.js";const y={...c,defaultOptions:{type:Object,default:()=>({})},style:{type:Object,default:void 0}},V={load:e=>e},_=p({name:"VaVectorTileLayer",props:y,emits:V,setup(e,{emit:o}){const a=f(),r=a.map,t=new d({style:e.style,...e.defaultOptions});return n("vaLayer",t),n("vaVectorTileLayer",t),o("load",{layer:t,view:a}),l(r,t,e),i(t,e),{}}});function L(e,o,a,r,t,$){return m(e.$slots,"default")}const s=u(_,[["render",L]]);s.install=e=>{e.component(s.name,s)};export{s as V};