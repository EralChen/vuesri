import{V as f}from"./chunk-2D4Q3Y6C.js";import{V as d}from"./chunk-CwbMjArF.js";import{V as c}from"./chunk-n4UCYDXc.js";import{gp as g,f0 as v,bK as y,gv as V,gC as w,gs as _,gt as b,gw as t,gx as i,gy as o,gE as x,gu as r,gF as E,l3 as C}from"./chunk-AGUgPSYp.js";import{V as k}from"./chunk-ksWjeBmP.js";import{V as B}from"./chunk-3LKyCLwk.js";import"./chunk-r9p3aZnY.js";import"./chunk-JOajwqOH.js";import"./chunk-3E9jM2aR.js";import"./chunk-xESNvpj7.js";import"./chunk-76dCxm4a.js";import"./chunk-_RV9jjR7.js";import"./chunk-ezQvVqJs.js";import"./chunk-qwIWYVt5.js";import"./chunk-BUDQaXaC.js";import"./chunk-R46ESbsY.js";import"./chunk-U7Mc4naJ.js";import"./chunk-yPE1Yb-S.js";import"./chunk-oVLQlo07.js";import"./chunk-MdhcL4Zw.js";const R=g({__name:"index",setup(M){const p=[],m=async a=>{const e=a.view;console.log(a.sublayer,"sublayer"),await C(()=>!!a.sublayer?.fullExtent),e.goTo(a.sublayer.fullExtent)},u=new v({symbol:new y({color:"red"})}),s=V("1=1");return(a,e)=>{const l=w("ElButton");return _(),b(r(f),{defaultOptions:{zoom:2}},{before:t(()=>[x("p",null,[o(l,{onClick:e[0]||(e[0]=n=>s.value="1=1")},{default:t(()=>[i("1 = 1")]),_:1}),o(l,{onClick:e[1]||(e[1]=n=>s.value="1=0")},{default:t(()=>[i("1 = 0")]),_:1}),o(l,{onClick:e[2]||(e[2]=n=>s.value="st='MO'")},{default:t(()=>[i("st = MO")]),_:1})])]),default:t(()=>[o(r(d),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),o(r(c),{sublayers:p,url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer"},{when:t(()=>[o(r(k),{id:0,renderer:r(u),visible:!0,definitionExpression:s.value,onLoad:m},{default:t(()=>[o(r(B),null,{default:t(({attributes:n})=>[i(E(n),1)]),_:1})]),_:1},8,["renderer","definitionExpression"])]),_:1},8,["url"])]),_:1})}}});export{R as default};