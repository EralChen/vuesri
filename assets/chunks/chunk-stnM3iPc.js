import{V as u}from"./chunk-jHUwkOTJ.js";import{V as y}from"./chunk-eL7rTImP.js";import{V}from"./chunk-Q0dsQE4i.js";import{h2 as d,h8 as i,lx as _,h5 as h,h6 as k,h9 as m,ha as t,h7 as e}from"./chunk-gZYsZ36N.js";import{V as w,s as b}from"./chunk-C2-Ka-Qj.js";import"./chunk-0SdvbvMf.js";import{r as v,g as C}from"./chunk-rpHAQXu4.js";import{V as L}from"./chunk-856KQIpP.js";import"./chunk-B3AFDltd.js";import"./chunk-pR8IN3Kg.js";import"./chunk-5yhB8Y-n.js";import"./chunk-AKBpUdIm.js";import"./chunk-8dd3L-WV.js";import"./chunk-GWlnAQeV.js";import"./chunk-80lo0Aq7.js";import"./chunk-jDrT5IC_.js";import"./chunk-u9gmVhyK.js";import"./chunk-2bs7e3B8.js";import"./chunk-MEWVNnB1.js";import"./chunk-_piOf1Cc.js";import"./chunk-t4TbIqUg.js";import"./chunk-KpbMssn-.js";import"./chunk-miGwR9an.js";const Q=d({__name:"query",setup(x){const l=async a=>{const r=a.view;await a.layer.when(),r.goTo(a.layer.fullExtent)},s=i([]),n=i([{templateType:"VkfSelect",prop:"name",filterable:!0,options:s}]),o=_({name:"pub:O3_predict_20220301"});p();function p(){v().then(a=>{s.value=a.map(r=>({label:r.name,value:r.name}))})}const c=a=>{console.log("layerClick",a)};return(a,r)=>(h(),k(e(u),null,{before:m(()=>[t(e(w),{formItems:n.value,data:e(o),onSetData:r[0]||(r[0]=f=>e(b)(e(o),f))},null,8,["formItems","data"])]),default:m(()=>[t(e(y),{type:"vec_c",anno:!1,"spatial-reference":{wkid:4490}}),t(e(V),{url:e(C)+"/ows",onLoad:l,sublayers:[{name:e(o).name,queryable:!0}]},{default:m(()=>[t(e(L),{onClick:c})]),_:1},8,["url","sublayers"])]),_:1}))}});export{Q as default};