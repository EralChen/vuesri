import{V as l}from"./chunk-GCw7EMMQ.js";import"./chunk-XemX8x6N.js";import{V as n}from"./chunk-yC53Rrsd.js";import{V as u}from"./chunk-FizgFK0M.js";import{V as c}from"./chunk-5kKVXtii.js";import{gp as g,gB as d,f0 as y,bK as V,gs as f,gt as v,gw as m,gF as _,gx as w,gu as e,gy as a}from"./chunk-8J0p1hu6.js";import{V as h}from"./chunk-RFY32dbj.js";import"./chunk-3E9jM2aR.js";import"./chunk-xlnTbaEF.js";import"./chunk-9Xx1cZHC.js";import"./chunk-PSa8gd-V.js";import"./chunk-8_TIVmWE.js";import"./chunk-vx0QQQez.js";import"./chunk-wKTfZVHq.js";import"./chunk-WD1fh68X.js";import"./chunk-l7TJQPp9.js";import"./chunk-VSP1OmZm.js";import"./chunk-9FiinX4D.js";import"./chunk-e48hjePl.js";import"./chunk-7tXS8HdV.js";import"./chunk-DOOrs2qQ.js";import"./chunk-EUQwHdIv.js";import"./chunk-xESNvpj7.js";import"./chunk-fc4IFfcH.js";import"./chunk-rp9G5Hm9.js";import"./chunk-jWmRZ6CR.js";import"./chunk-iiUwB5t_.js";const Q=g({__name:"query-geometry",setup(x){const r=d([]),s=async t=>{const o=t.view;await t.layer.when(),o.goTo(t.layer.fullExtent)},p=new y({symbol:new V({size:10,color:"green"})});return(t,o)=>(f(),v(e(l),null,{after:m(()=>[w(" graphics.geometry: "+_(r.value.map(i=>i.geometry)),1)]),default:m(()=>[a(e(h),{type:"vec_w","spatial-reference":{wkid:3857}}),a(e(c),{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=i=>r.value=i),multiple:!1,availableCreatureTools:["rectangle"]},null,8,["modelValue"]),a(e(n),{orphan:!0,renderer:e(p),url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",onLoad:s},{default:m(()=>[a(e(u),{query:{outFields:["*"],geometry:r.value[0]?.geometry},cursor:"pointer"},null,8,["query"])]),_:1},8,["renderer","url"])]),_:1}))}});export{Q as default};
