import{V as s}from"./chunk-MP3SmEKf.js";import{V as l}from"./chunk-LA4b6Enm.js";import{V as n}from"./chunk-6o6tFwA-.js";import{u as c}from"./chunk-vUrHI-Qa.js";import{h2 as p,h5 as m,h6 as u,h9 as d,ha as o,h7 as t}from"./chunk-xdbuWCSg.js";import"./chunk-B3AFDltd.js";import"./chunk-elC-BEzW.js";import"./chunk-A28ZiPww.js";import"./chunk-gtyL-bMM.js";import"./chunk-X13qFF8j.js";import"./chunk-PXg3VzVx.js";import"./chunk-1yHvQV-p.js";import"./chunk-SUrPPh2b.js";import"./chunk-63AI7Hpr.js";import"./chunk-wJeQeX2q.js";import"./chunk-3xNmT1XT.js";import"./chunk-t4TbIqUg.js";const r="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",R=p({__name:"basic",setup(f){const{interceptorToggle:a}=c({urls:[r],after(e){e.url===r&&(e.data.capabilities="TilesOnly",console.log("e.data: ",e.data))}});a.add();const i={layers:[{layout:{},paint:{"fill-color":"#F0ECDB"},source:"esri",minzoom:0,"source-layer":"Land",type:"fill",id:"Land/0"},{layout:{},paint:{"fill-pattern":"Landpattern","fill-opacity":.25},source:"esri",minzoom:0,"source-layer":"Land",type:"fill",id:"Land/1"},{layout:{},paint:{"fill-color":"#93CFC7"},source:"esri",minzoom:0,"source-layer":"Marine area",type:"fill",id:"Marine area/1"},{layout:{},paint:{"fill-pattern":"Marine area","fill-opacity":.08},source:"esri","source-layer":"Marine area",type:"fill",id:"Marine area/2"},{layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#cccccc","line-dasharray":[7,5.33333],"line-width":1},source:"esri",minzoom:1,"source-layer":"Boundary line",type:"line",id:"Boundary line/Admin0/0"},{layout:{"text-font":["Risque Regular"],"text-anchor":"center","text-field":"{_name_global}"},paint:{"text-halo-blur":1,"text-color":"#AF420A","text-halo-width":1,"text-halo-color":"#f0efec"},source:"esri","source-layer":"Continent",type:"symbol",id:"Continent"},{layout:{"text-font":["Atomic Age Regular"],"text-field":"{_name}","text-transform":"none"},paint:{"text-halo-blur":1,"text-color":"#AF420A","text-halo-width":1,"text-halo-color":"#f0efec"},source:"esri",minzoom:2,"source-layer":"Admin0 point",maxzoom:10,type:"symbol",id:"Admin0 point/large"}],glyphs:"https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf",version:8,sprite:"https://www.arcgis.com/sharing/rest/content/items/7675d44bb1e4428aa2c30a9b68f97822/resources/sprites/sprite",sources:{esri:{url:r,type:"vector"}}};return(e,y)=>(m(),u(t(s),null,{default:d(()=>[o(t(n),{"spatial-reference":{wkid:3857},type:"img_w"}),o(t(l),{style:i})]),_:1}))}});export{R as default};
