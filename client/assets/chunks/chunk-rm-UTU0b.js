import{V as i}from"./chunk-Rpg3QTvn.js";import{V as u}from"./chunk-6o6tFwA-.js";import{V as f}from"./chunk-9gCcGOc7.js";import{V as c,s as d}from"./chunk-pdaYqzVd.js";import"./chunk-QmLkA8vh.js";import{h2 as h,h8 as V,lx as b,lz as w,a5 as y,h5 as v,h6 as _,h9 as p,ha as o,h7 as r}from"./chunk-xdbuWCSg.js";import"./chunk-elC-BEzW.js";import"./chunk-A28ZiPww.js";import"./chunk-B3AFDltd.js";import"./chunk-PXg3VzVx.js";import"./chunk-1yHvQV-p.js";import"./chunk-SUrPPh2b.js";import"./chunk-63AI7Hpr.js";import"./chunk-gtyL-bMM.js";import"./chunk-X13qFF8j.js";import"./chunk-wJeQeX2q.js";import"./chunk-3xNmT1XT.js";import"./chunk-t4TbIqUg.js";const k="http://116.63.63.191/server/rest/services/FCFW/wind_sample_20240125_20240128/ImageServer",q=h({__name:"basic",setup(g){const t=V({color:"rgba(255, 0, 0, 0.5)",trailWidth:4}),l=b(()=>new w({...t.value,color:new y(t.value.color)})),m=async e=>{const a=e.view;await e.layer.when(),a.goTo(e.layer.fullExtent)},n=[{templateType:"VkfColorPicker",prop:"color",label:"颜色",showAlpha:!0,colorFormat:"rgba"},{templateType:"VkfInputNumber",prop:"trailWidth",label:"轨迹宽度"},{templateType:"VkfInputNumber",prop:"trailLength",label:"轨迹长度"},{templateType:"VkfInputNumber",prop:"flowSpeed",label:"流速"},{templateType:"VkfInputNumber",prop:"maxPathLength",label:"最大路径长度"}];return(e,a)=>(v(),_(r(i),{"default-options":{zoom:2}},{before:p(()=>[o(r(c),{"form-items":n,data:t.value,onSetData:a[0]||(a[0]=s=>r(d)(t.value,s))},null,8,["data"])]),default:p(()=>[o(r(u),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),o(r(f),{renderer:l.value,url:k,onLoad:m},null,8,["renderer"])]),_:1}))}});export{q as default};
