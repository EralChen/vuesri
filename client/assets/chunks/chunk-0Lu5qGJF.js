import{V as u}from"./chunk-GCw7EMMQ.js";import{V as c}from"./chunk-RFY32dbj.js";import{V as y}from"./chunk-Nr78aDop.js";import{gp as d,gv as m,kY as V,gs as g,gt as w,gw as i,gu as a,gy as o}from"./chunk-8J0p1hu6.js";import{V as v,s as _}from"./chunk-4Hw7jKBN.js";import"./chunk-QGefeR4K.js";import{r as b,g as k}from"./chunk-rpHAQXu4.js";import"./chunk-3E9jM2aR.js";import"./chunk-xlnTbaEF.js";import"./chunk-9Xx1cZHC.js";import"./chunk-xESNvpj7.js";import"./chunk-fc4IFfcH.js";import"./chunk-rp9G5Hm9.js";import"./chunk-jWmRZ6CR.js";import"./chunk-8_TIVmWE.js";import"./chunk-iiUwB5t_.js";import"./chunk-wKTfZVHq.js";import"./chunk-EUQwHdIv.js";import"./chunk-u8xdCC6Y.js";import"./chunk-KpbMssn-.js";const G=d({__name:"basic",setup(L){const n=async t=>{const e=t.view;await t.layer.when(),e.goTo(t.layer.fullExtent)},s=m([]),p=m([{templateType:"VkfSelect",prop:"name",filterable:!0,options:s}]),r=V({data:void 0,name:""});l();function l(){b().then(t=>{s.value=t.map(e=>({label:e.name,value:e.name}))})}return(t,e)=>(g(),w(a(u),null,{before:i(()=>[o(a(v),{formItems:p.value,data:a(r),onSetData:e[0]||(e[0]=f=>a(_)(a(r),f))},null,8,["formItems","data"])]),default:i(()=>[o(a(c),{type:"vec_c",anno:!1,"spatial-reference":{wkid:4490}}),o(a(y),{url:a(k)+"/ows",onLoad:n,sublayers:[{name:a(r).name}]},null,8,["url","sublayers"])]),_:1}))}});export{G as default};