import{_ as f,a as o}from"./chunk-OCeEVq_g.js";import{V as _}from"./chunk-QaD_sRbR.js";import"./chunk-XemX8x6N.js";import{V as v}from"./chunk-e48hjePl.js";import{V as y}from"./chunk-sN0vSnE3.js";import{V as d}from"./chunk-yC53Rrsd.js";import{V as g}from"./chunk-4kREPvPN.js";import{l as V}from"./chunk-rp9G5Hm9.js";import{V as b}from"./chunk-RFY32dbj.js";import{gp as h,gv as k,gs as s,gt as l,gw as t,gu as r,gy as a,lb as L,gK as p}from"./chunk-8J0p1hu6.js";import"./chunk-xlnTbaEF.js";import"./chunk-9Xx1cZHC.js";import"./chunk-3E9jM2aR.js";import"./chunk-7tXS8HdV.js";import"./chunk-8_TIVmWE.js";import"./chunk-VSP1OmZm.js";import"./chunk-wKTfZVHq.js";import"./chunk-1xuDHoYo.js";import"./chunk-PSa8gd-V.js";import"./chunk-vx0QQQez.js";import"./chunk-WD1fh68X.js";import"./chunk-jWmRZ6CR.js";import"./chunk-xESNvpj7.js";import"./chunk-fc4IFfcH.js";import"./chunk-iiUwB5t_.js";import"./chunk-EUQwHdIv.js";const R=h({__name:"basic",setup(w){const n={constraints:{lods:V.slice(2,19)}},m=k([{label:"我的图层",children:[{label:"xx",children:[{label:"河流",layer:{type:"MapImageLayer",url:"http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon1/MapServer"}},{label:"美洲",layer:{type:"FeatureLayer",url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0"}}]},{label:"点位",layer:{type:"FeatureLayer",url:"http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer"}}]},{label:"宁波",layer:{type:"TileLayer",url:"http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"}}]),c=(i,u)=>{i.layer&&(i.layer.if=!0,i.layer.visible=u)};return(i,u)=>(s(),l(r(_),{"default-options":n},{default:t(()=>[a(r(b),{type:"img_w","spatial-reference":{wkid:102100}}),a(r(v),null,{default:t(()=>[a(r(L),{data:m.value,"show-checkbox":"",onCheckChange:c,"render-after-expand":!1},null,8,["data"])]),_:1}),a(r(f),{data:m.value},{default:t(()=>[a(r(o),{type:"MapImageLayer"},{default:t(({layer:e})=>[e.if?(s(),l(r(y),{key:0,url:e.url,visible:e.visible},null,8,["url","visible"])):p("",!0)]),_:1}),a(r(o),{type:"FeatureLayer"},{default:t(({layer:e})=>[e.if?(s(),l(r(d),{key:0,url:e.url,visible:e.visible},null,8,["url","visible"])):p("",!0)]),_:1}),a(r(o),{type:"TileLayer"},{default:t(({layer:e})=>[e.if?(s(),l(r(g),{key:0,url:e.url,visible:e.visible},null,8,["url","visible"])):p("",!0)]),_:1})]),_:1},8,["data"])]),_:1}))}});export{R as default};