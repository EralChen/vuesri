import{a as c}from"./chunk-xESNvpj7.js";import{_ as S}from"./chunk-Ik_Ra0Nu.js";import{V as h}from"./chunk-c4FGM-xh.js";import{_ as T}from"./chunk-RbowXUrL.js";import{gp as _,kT as u,l2 as B,gC as o,gs as f,gt as d,gw as l,gy as s,gK as V,gz as k}from"./chunk-217NDGZJ.js";const L={spatialReference:{type:Object,default:()=>({wkid:4326})},type:{type:String,default:"img_c"},orphan:{type:Boolean,default:!1},anno:{type:Boolean,default:!0},thumbnailUrl:{type:String,default:""},minScale:{type:Number,default:c[1]},maxScale:{type:Number,default:c[18]},token:{type:String,default:void 0},webTileLayerOptions:{type:Object,default:()=>({})}},$={load:e=>e},O=_({name:"VaTdtBasemap",components:{VaBasemap:S,VaBasemapBaseLayers:T,VaTdtWebTileLayer:h},emits:$,props:L,setup(e){const a=u(()=>{const t=e.type.split("_"),i=t[0],p=t[1];return`c${i[0]}a_${p}`});return{thumbnailUrl:u(()=>e.thumbnailUrl?e.thumbnailUrl:e.type.startsWith("vec")?"http://lbs.tianditu.gov.cn/images/vec_c.png":e.type.startsWith("img")?"http://lbs.tianditu.gov.cn/images/img_c.png":""),annoType:a}}});function w(e,a,y,t,i,p){const n=o("VaBasemapBaseLayers"),m=o("VaTdtWebTileLayer"),b=o("VaBasemap");return f(),d(b,{orphan:e.orphan,thumbnailUrl:e.thumbnailUrl,onLoad:a[0]||(a[0]=g=>e.$emit("load",g))},{default:l(()=>[s(m,{defaultOptions:e.webTileLayerOptions,type:e.type,orphan:!0,spatialReference:e.spatialReference,maxScale:e.maxScale,minScale:e.minScale,token:e.token,title:"tdt_web_tile_layer"},{default:l(()=>[s(n)]),_:1},8,["defaultOptions","type","spatialReference","maxScale","minScale","token"]),e.anno?(f(),d(m,{key:0,type:e.annoType,orphan:!0,spatialReference:e.spatialReference,maxScale:e.maxScale,minScale:e.minScale,token:e.token,defaultOptions:e.webTileLayerOptions,title:"tdt_web_tile_layer_anno"},{default:l(()=>[s(n)]),_:1},8,["type","spatialReference","maxScale","minScale","token","defaultOptions"])):V("",!0),k(e.$slots,"default")]),_:3},8,["orphan","thumbnailUrl"])}const r=B(O,[["render",w]]);r.install=e=>{e.component(r.name,r)};export{r as V};