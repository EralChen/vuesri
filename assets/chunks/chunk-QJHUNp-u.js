import{V as u}from"./chunk-Hi7r9wTp.js";import"./chunk-RTwjkWjX.js";import{V as d}from"./chunk-zOlTYYDb.js";import{gp as f,f0 as g,bK as v,gv as _,gC as V,gq as k,gr as w,gw as o,gx as s,gy as t,gE as y,gs as n}from"./chunk-m3jlTyOz.js";import{V as x}from"./chunk-Lc4GdXmF.js";import"./chunk-3E9jM2aR.js";import"./chunk-sx_5tzRY.js";import"./chunk-dfbnxT3d.js";import"./chunk-yAT8stFn.js";import"./chunk-mzuyEGLb.js";import"./chunk-NMVZqJQc.js";import"./chunk-Ts4GXi8B.js";import"./chunk-UIYUfr_z.js";import"./chunk-bntHIBZM.js";import"./chunk-xESNvpj7.js";import"./chunk-3GvsUVmQ.js";import"./chunk-T8_LR2t6.js";import"./chunk-nhwCGmT6.js";import"./chunk-DeWxgD7-.js";const j=f({__name:"basic",setup(B){const l=async r=>{const e=r.view;await r.layer.when(),e.goTo(r.layer.fullExtent)},p=async r=>{const{result:e}=r;e&&console.log(e)},m=new g({symbol:new v({size:10,color:"green"})}),a=_("1=1");return(r,e)=>{const i=V("ElButton");return k(),w(n(u),null,{before:o(()=>[y("p",null,[t(i,{onClick:e[0]||(e[0]=c=>a.value="Park = 'Big Bend National Park'")},{default:o(()=>[s("park")]),_:1}),t(i,{onClick:e[1]||(e[1]=c=>a.value="1=1")},{default:o(()=>[s("1=1")]),_:1})])]),default:o(()=>[t(n(x),{type:"vec_w","spatial-reference":{wkid:3857}}),t(n(d),{definitionExpression:a.value,renderer:n(m),cursor:"pointer",url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",onLoad:l,onClick:p},null,8,["definitionExpression","renderer","url"])]),_:1})}}});export{j as default};