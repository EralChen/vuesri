import{V as f}from"./chunk-loHR4y2p.js";import{V as w}from"./chunk-6o6tFwA-.js";import{h2 as g,ls as V,lt as h,fK as j,lu as v,lv as k,h5 as p,h6 as a,h9 as i,ha as s,h7 as o,hn as _}from"./chunk-xdbuWCSg.js";import"./chunk-Rpg3QTvn.js";import"./chunk-1yHvQV-p.js";import"./chunk-eGNVTRpg.js";import"./chunk-wJeQeX2q.js";import"./chunk-050oiI48.js";import"./chunk-lQU-EnPR.js";import"./chunk-rNHK9wJ6.js";import"./chunk-63AI7Hpr.js";import"./chunk-SUrPPh2b.js";import"./chunk-7sBGr7NW.js";import"./chunk-NoRKKJwn.js";import{V as b}from"./chunk-MP3SmEKf.js";import"./chunk-AQSXafU-.js";import"./chunk-ltK1s8nW.js";import"./chunk-Wzez7fEs.js";import"./chunk-0gozDf9n.js";import"./chunk-Di8tOJah.js";import"./chunk-7iy6_9MI.js";import"./chunk-1CE6gnXz.js";import"./chunk-z466LWxV.js";import"./chunk-HEOKg0WM.js";import"./chunk-ZkYYvP3a.js";import"./chunk-zegxIybi.js";import"./chunk-EraEGKU1.js";import"./chunk-61dhINtI.js";import"./chunk-3dUbQ6r4.js";import"./chunk-93_OmANW.js";import"./chunk-NILXTdrs.js";import"./chunk-9gCcGOc7.js";import"./chunk-xDUoadMJ.js";import"./chunk-UzJWYQNQ.js";import"./chunk-K71dfVM6.js";import"./chunk-ogNnWqfN.js";import"./chunk-hfdktSrh.js";import"./chunk-2aAZ5bZv.js";import{V as C,s as x}from"./chunk-pdaYqzVd.js";import"./chunk-QmLkA8vh.js";import"./chunk-gtyL-bMM.js";import"./chunk-B3AFDltd.js";import"./chunk-X13qFF8j.js";import"./chunk-A28ZiPww.js";import"./chunk-E7RiHwKi.js";import"./chunk-3xNmT1XT.js";import"./chunk-elC-BEzW.js";import"./chunk-PXg3VzVx.js";import"./chunk-t4TbIqUg.js";import"./chunk-s4Wj1llY.js";import"./chunk-WbQr-OU9.js";import"./chunk-PYCr5Ivi.js";import"./chunk-PsIbZfTj.js";import"./chunk-TB-F49UB.js";import"./chunk-IoGt2n0v.js";import"./chunk-s1CWS4v1.js";import"./chunk-vUrHI-Qa.js";const Ro=g({__name:"many",setup(L){const t="/vuesri",e=V({url:t+"/data/geojson/polygon10w.json"}),n=h(()=>e.url),l=[{templateType:"VkfRadio",prop:"url",options:[{label:"10w",value:t+"/data/geojson/polygon10w.json"},{label:"5w",value:t+"/data/geojson/polygon5w.json"},{label:"1w",value:t+"/data/geojson/polygon1w.json"}]}],d=new j({symbol:new v({symbolLayers:[new k({size:100,material:{color:"red"}})]})}),c=({result:r})=>{console.log(r)},u=async r=>{const m=r.view;await r.layer.when(),m.goTo(r.layer.fullExtent)};return(r,m)=>(p(),a(o(b),null,{before:i(()=>[s(o(C),{"form-items":l,data:e,onSetData:m[0]||(m[0]=y=>o(x)(e,y))},null,8,["data"])]),default:i(()=>[s(o(w),{type:"vec_w","spatial-reference":{wkid:3857}}),o(n)?(p(),a(o(f),{key:0,cursor:"pointer","geometry-type":"polygon",url:e.url,renderer:o(d),onLoad:u,onClick:c},null,8,["url","renderer"])):_("",!0)]),_:1}))}});export{Ro as default};