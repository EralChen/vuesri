import{_ as i}from"./chunk-FwxPCT6d.js";import{_ as n}from"./chunk-RbowXUrL.js";import{a as l}from"./chunk-xESNvpj7.js";import{u as p}from"./chunk-08eVzt-u.js";import{gp as m,l2 as c,gC as a,gs as f,gt as u,gw as _,gy as d,l5 as y}from"./chunk-217NDGZJ.js";import"./chunk-xeARl7y1.js";import"./chunk-3E9jM2aR.js";import"./chunk-fZ-fS00Y.js";import"./chunk-oVLQlo07.js";const b=m({inheritAttrs:!1,components:{VaWebTileLayer:i,VaBasemapBaseLayers:n},setup(){const t=p().map.basemap.baseLayers.getItemAt(0);return{defaultOptions:{title:"zjLayer",urlTemplate:"https://ditu.zjzwfw.gov.cn/services/wmts/emap_lab/default/oss?service=WMTS&request=GetTile&version=1.0.0&layer=TDT_ZJEMAPANNO&style=default&tileMatrixSet=c&format=tiles&height=256&width=256&token=2c92920471b56e640171be7537bd0074&tilecol={col}&tilerow={row}&tilematrix={level}",tileInfo:t.tileInfo,spatialReference:t.spatialReference},levelToScale:l}}});function w(e,t,s,g,L,v){const o=a("VaBasemapBaseLayers"),r=a("VaWebTileLayer");return f(),u(r,y({defaultOptions:e.defaultOptions,orphan:!0},e.$attrs),{default:_(()=>[d(o)]),_:1},16,["defaultOptions"])}const N=c(b,[["render",w]]);export{N as default};