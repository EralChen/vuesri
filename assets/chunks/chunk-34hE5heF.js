import{V as r}from"./chunk-YWLhazPH.js";import{gp as o,gB as p,gk as c,gJ as i,gs as f,gt as l,gu as u,gK as m}from"./chunk-217NDGZJ.js";const w=o({__name:"rest-wfs-layer",props:{capabilities:{type:Object},name:{type:String},namespaceUri:{type:String},options:{type:Object,default:()=>({})}},setup(s){const e=s,a=p(null);c(n);function n(){a.value=null,e.capabilities&&i(e.capabilities,e.name,e.namespaceUri,e.options).then(t=>{a.value=t})}return(t,g)=>a.value?(f(),l(u(r),{key:0,wfsLayerInfo:a.value},null,8,["wfsLayerInfo"])):m("",!0)}});export{w as _};