import{V as p}from"./chunk-jHUwkOTJ.js";import{V as c}from"./chunk-eL7rTImP.js";import{V as m}from"./chunk-3XJdahR2.js";import{h2 as l,h5 as u,h6 as d,h9 as f,ha as a,h7 as t}from"./chunk-gZYsZ36N.js";import"./chunk-B3AFDltd.js";import"./chunk-pR8IN3Kg.js";import"./chunk-5yhB8Y-n.js";import"./chunk-AKBpUdIm.js";import"./chunk-8dd3L-WV.js";import"./chunk-GWlnAQeV.js";import"./chunk-80lo0Aq7.js";import"./chunk-jDrT5IC_.js";import"./chunk-u9gmVhyK.js";import"./chunk-2bs7e3B8.js";import"./chunk-MEWVNnB1.js";import"./chunk-_piOf1Cc.js";import"./chunk-e9fsDuYR.js";import"./chunk-WXBpuwbD.js";import"./chunk-t4TbIqUg.js";const M=l({__name:"basic",setup(w){const i=async e=>{await e.layer.when(),e.view.goTo(e.layer.fullExtent,{duration:2e3})},n=async e=>{const o=e.view;await o.when();const r=o.map;r.ground.opacity=.5,r.ground.navigationConstraint={type:"none"}},s=e=>{console.log(e.result,"layerClick")};return(e,o)=>(u(),d(t(p),{onLoad:n},{default:f(()=>[a(t(c),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),a(t(m),{url:"https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/NYC_Utilities_Water_Main/SceneServer","default-options":{popupEnabled:!1},cursor:"pointer",onLoad:i,onClick:s},null,8,["url"])]),_:1}))}});export{M as default};