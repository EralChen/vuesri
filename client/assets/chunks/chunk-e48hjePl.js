import{u as i}from"./chunk-9Xx1cZHC.js";import{u as l}from"./chunk-7tXS8HdV.js";import{gp as u,gv as r,nB as p,kZ as d,l2 as c,gs as f,gD as m,gz as v,gK as w}from"./chunk-8J0p1hu6.js";const V={position:{type:[String,Object],default:"manual"},orphan:{type:Boolean,default:!1}},_={load:e=>e},g=u({name:"VaViewUi",emits:_,props:V,setup(e,{emit:n}){const o=i(),a=r(),s=r(!1);return p(()=>{a.value&&(l(o.ui,a.value,e),s.value=!0,d("vaViewUi",a.value),n("load",{view:o,el:a.value}))}),{viewUiNode:a,ready:s}}}),U={ref:"viewUiNode",class:"va-view-ui"};function y(e,n,o,a,s,$){return f(),m("div",U,[e.ready?v(e.$slots,"default",{key:0}):w("",!0)],512)}const t=c(g,[["render",y]]);t.install=e=>{e.component(t.name,t)};export{t as V,V as p};
