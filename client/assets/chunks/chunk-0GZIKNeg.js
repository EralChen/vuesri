import{_ as V,a as d}from"./chunk-OCeEVq_g.js";import{V as b}from"./chunk-QaD_sRbR.js";import"./chunk-XemX8x6N.js";import{V as y}from"./chunk-e48hjePl.js";import{V as L}from"./chunk-yC53Rrsd.js";import{V as k}from"./chunk-sN0vSnE3.js";import{V as B}from"./chunk-SeioV_88.js";import{l as w}from"./chunk-rp9G5Hm9.js";import{V as C}from"./chunk-RFY32dbj.js";import{gp as S,gv as I,gC as M,gs as p,gt as u,gw as t,gx as s,gy as a,gu as r,lb as F}from"./chunk-8J0p1hu6.js";import"./chunk-xlnTbaEF.js";import"./chunk-9Xx1cZHC.js";import"./chunk-3E9jM2aR.js";import"./chunk-7tXS8HdV.js";import"./chunk-PSa8gd-V.js";import"./chunk-8_TIVmWE.js";import"./chunk-vx0QQQez.js";import"./chunk-wKTfZVHq.js";import"./chunk-WD1fh68X.js";import"./chunk-VSP1OmZm.js";import"./chunk-1xuDHoYo.js";import"./chunk-rD0UKOh0.js";import"./chunk-jWmRZ6CR.js";import"./chunk-xESNvpj7.js";import"./chunk-fc4IFfcH.js";import"./chunk-iiUwB5t_.js";import"./chunk-EUQwHdIv.js";const le=S({__name:"del",setup(h){const f={xmin:121.73886453000011,ymin:29.76753505000005,xmax:122.04663644800003,ymax:29.960934498000025,spatialReference:{wkid:4326}},c={constraints:{lods:w.slice(2,19)},extent:f},m=[{label:"林地一张图更新",layer:{url:"http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer",type:"MapImageLayer",if:!0,id:6,visible:!0,index:2}},{label:"村庄",layer:{url:"http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer/18",type:"FeatureLayer",if:!0,visible:!0,index:1}}],i=I([]),v=()=>{i.value=i.value.slice(1)},x=()=>{i.value=i.value.slice(0,-1)},_=[],g=()=>{const n=i.value.findIndex((l,o)=>l.label==="村庄");if(n+1){const l=i.value[n]?.layer;l.index=99,console.log(l)}};return(n,l)=>{const o=M("ElButton");return p(),u(r(b),{"default-options":c},{before:t(()=>[a(o,{onClick:l[0]||(l[0]=e=>i.value.unshift(m[0]))},{default:t(()=>[s("add1")]),_:1}),a(o,{onClick:v},{default:t(()=>[s("delF ")]),_:1}),a(o,{onClick:x},{default:t(()=>[s("delL ")]),_:1}),a(o,{onClick:l[1]||(l[1]=e=>i.value=[...m])},{default:t(()=>[s("xxx")]),_:1}),a(o,{onClick:g},{default:t(()=>[s("changeIndex")]),_:1})]),default:t(()=>[a(r(C),{type:"img_w","spatial-reference":{wkid:102100}}),a(r(y),null,{default:t(()=>[a(r(F),{data:i.value,"render-after-expand":!1},null,8,["data"])]),_:1}),a(r(V),{data:i.value},{default:t(()=>[a(r(d),{type:"FeatureLayer"},{default:t(({layer:e})=>[(p(),u(r(L),{key:e.url,url:e.url,visible:e.visible,index:e.index},null,8,["url","visible","index"]))]),_:1}),a(r(d),{type:"MapImageLayer"},{default:t(({layer:e})=>[(p(),u(r(k),{key:e.url,url:e.url,visible:e.visible,sublayers:_,index:e.index},{when:t(()=>[a(r(B),{id:e.id,visible:!0},null,8,["id"])]),_:2},1032,["url","visible","index"]))]),_:1})]),_:1},8,["data"])]),_:1})}}});export{le as default};