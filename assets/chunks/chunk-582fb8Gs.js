import{V as g}from"./chunk-thpXRjtf.js";import{V as f}from"./chunk-pFKUakTm.js";import{V}from"./chunk-uFV9c2m3.js";import{V as d}from"./chunk-u6EnA5EX.js";import{V as y}from"./chunk-wqQ9VQFt.js";import{gp as v,gB as i,gs as _,gt as C,gw as s,gF as k,gx as S,gu as e,gy as t}from"./chunk-217NDGZJ.js";import"./chunk-3E9jM2aR.js";import"./chunk-DzQIQMlv.js";import"./chunk-08eVzt-u.js";import"./chunk-xESNvpj7.js";import"./chunk-Ik_Ra0Nu.js";import"./chunk-c4FGM-xh.js";import"./chunk-FwxPCT6d.js";import"./chunk-xeARl7y1.js";import"./chunk-RbowXUrL.js";import"./chunk-fZ-fS00Y.js";import"./chunk-SfnVcnNC.js";import"./chunk-MyaGGhw0.js";import"./chunk-Lh9f0rxK.js";import"./chunk-XfNrI97G.js";import"./chunk-pF2yWqaC.js";import"./chunk-oVLQlo07.js";const Y=v({__name:"index",setup(h){const r=i([]),o=i(""),n=()=>{const c=`POLYGON((${[...r.value[0].geometry.rings[0]].map(p=>[p[0],p[1]].join(" ")).join(", ")}))`;o.value=c},u=a=>{console.log("layerClick",a)};return(a,l)=>(_(),C(e(g),null,{after:s(()=>[S(k(o.value),1)]),default:s(()=>[t(e(f),{type:"vec_c",anno:!1,"spatial-reference":{wkid:4490}}),t(e(y),{multiple:!1,"available-creature-tools":["rectangle"],modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=m=>r.value=m),onComplete:n},null,8,["modelValue"]),t(e(V),{url:"http://192.168.110.252:8080/geoserver/developReformDatahouse/ows","custom-parameters":{VERSION:"1.3.0",CQL_FILTER:o.value?`INTERSECTS(shape, ${o.value})`:"1=1"},sublayers:[{name:"developReformDatahouse:tb_poi_gs",visible:!0,queryable:!0,popupEnabled:!1}]},{default:s(()=>[t(e(d),{onClick:u})]),_:1},8,["custom-parameters"])]),_:1}))}});export{Y as default};