import{V as i}from"./chunk-gOzRnZOw.js";import{V as u}from"./chunk-eL7rTImP.js";import{V as f}from"./chunk-WR4Mf62_.js";import{V as c,s as d}from"./chunk-C2-Ka-Qj.js";import"./chunk-0SdvbvMf.js";import{h2 as h,h8 as V,ly as b,lA as w,a5 as y,h5 as v,h6 as _,h9 as p,ha as o,h7 as r}from"./chunk-gZYsZ36N.js";import"./chunk-pR8IN3Kg.js";import"./chunk-5yhB8Y-n.js";import"./chunk-B3AFDltd.js";import"./chunk-AKBpUdIm.js";import"./chunk-8dd3L-WV.js";import"./chunk-GWlnAQeV.js";import"./chunk-80lo0Aq7.js";import"./chunk-jDrT5IC_.js";import"./chunk-u9gmVhyK.js";import"./chunk-2bs7e3B8.js";import"./chunk-MEWVNnB1.js";import"./chunk-_piOf1Cc.js";import"./chunk-t4TbIqUg.js";const k="http://116.63.63.191/server/rest/services/FCFW/wind_sample_20240125_20240128/ImageServer",G=h({__name:"basic",setup(g){const t=V({color:"rgba(255, 0, 0, 0.5)",trailWidth:4}),l=b(()=>new w({...t.value,color:new y(t.value.color)})),m=async e=>{const a=e.view;await e.layer.when(),a.goTo(e.layer.fullExtent)},n=[{templateType:"VkfColorPicker",prop:"color",label:"颜色",showAlpha:!0,colorFormat:"rgba"},{templateType:"VkfInputNumber",prop:"trailWidth",label:"轨迹宽度"},{templateType:"VkfInputNumber",prop:"trailLength",label:"轨迹长度"},{templateType:"VkfInputNumber",prop:"flowSpeed",label:"流速"},{templateType:"VkfInputNumber",prop:"maxPathLength",label:"最大路径长度"}];return(e,a)=>(v(),_(r(i),{"default-options":{zoom:2}},{before:p(()=>[o(r(c),{"form-items":n,data:t.value,onSetData:a[0]||(a[0]=s=>r(d)(t.value,s))},null,8,["data"])]),default:p(()=>[o(r(u),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),o(r(f),{renderer:l.value,url:k,onLoad:m},null,8,["renderer"])]),_:1}))}});export{G as default};