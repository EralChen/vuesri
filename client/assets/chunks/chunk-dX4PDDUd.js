import{u as d}from"./chunk-9Xx1cZHC.js";import{gp as p,gv as i,nB as u,nQ as c,kZ as l,l0 as f,l2 as m,gs as g,gD as v,gz as _,gK as y}from"./chunk-8J0p1hu6.js";import{u as h}from"./chunk-7tXS8HdV.js";const k={defaultOptions:{type:Object,default:()=>({})},position:{type:String,default:"top-right"},orphan:{type:Boolean,default:!1}},V={load:e=>e},$=p({name:"VaPrint",emits:V,props:k,setup(e,{emit:r}){const o=d(),n=i(),s=i(!1);return u(()=>{const t=new c({container:n.value,view:o,...e.defaultOptions});h(o.ui,t,e),l("vaSketch",t),s.value=!0,r("load",{print:t,view:o}),f(()=>{t.destroy()})}),{uiNode:n,ready:s}}}),B={ref:"uiNode",class:"va-print-x"};function w(e,r,o,n,s,t){return g(),v("div",B,[e.ready?_(e.$slots,"default",{key:0}):y("",!0)],512)}const a=m($,[["render",w]]);a.install=e=>{e.component(a.name,a)};export{a as V};