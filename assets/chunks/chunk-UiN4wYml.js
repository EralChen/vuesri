import{V as c}from"./chunk-gOzRnZOw.js";import{V as p}from"./chunk-me0K167v.js";import{_ as n}from"./chunk-8dd3L-WV.js";import{_ as i}from"./chunk-MEWVNnB1.js";import{V as f}from"./chunk-GWlnAQeV.js";import{h2 as u,he as y,h5 as _,h6 as d,h9 as o,ha as t,h7 as a}from"./chunk-gZYsZ36N.js";import"./chunk-pR8IN3Kg.js";import"./chunk-5yhB8Y-n.js";import"./chunk-B3AFDltd.js";import"./chunk-jDrT5IC_.js";import"./chunk-u9gmVhyK.js";import"./chunk-UnR6FEZ6.js";import"./chunk-_piOf1Cc.js";import"./chunk-80lo0Aq7.js";import"./chunk-AKBpUdIm.js";import"./chunk-2bs7e3B8.js";import"./chunk-t4TbIqUg.js";const h="http://192.168.110.252:9000/geoserver/gwc/service/wmts",v="EPSG:4326",m="cite:cx4326",F=u({__name:"basic",setup(w){const s=y(),l=async e=>{const r=e.view;await r.when(),await e.layer.when(),r.goTo(e.layer.activeLayer.fullExtent),setTimeout(()=>{console.log("e.layer.activeLayer: ",e.layer.activeLayer.tileMatrixSet),console.log("view.map.basemap.baseLayers.item[0]",r.map.basemap.baseLayers.getItemAt(0))},1e3),s.value=e.layer.activeLayer.fullExtent};return(e,r)=>(_(),d(a(c),null,{default:o(()=>[t(a(n),null,{default:o(()=>[t(a(f),null,{default:o(()=>[t(a(i))]),_:1}),t(a(p),{orphan:!0,url:h,"service-mode":"KVP","active-layer":{id:m,imageFormat:"image/png",tileMatrixSetId:v},"custom-parameters":{format:"image/png",layerId:m},onLoad:l},{default:o(()=>[t(a(i))]),_:1},8,["active-layer","custom-parameters"])]),_:1})]),_:1}))}});export{F as default};