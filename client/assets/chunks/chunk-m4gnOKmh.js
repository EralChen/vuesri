import{V as y}from"./chunk-AQSXafU-.js";import{V as g}from"./chunk-MP3SmEKf.js";import{V as w}from"./chunk-6o6tFwA-.js";import{h2 as V,fK as _,lu as C,he as v,hf as k,h5 as b,h6 as D,h9 as r,hh as T,ha as a,hb as i,h7 as n,D as x,a1 as B}from"./chunk-xdbuWCSg.js";import{R}from"./chunk-KpbMssn-.js";import{V as F}from"./chunk-NoRKKJwn.js";import"./chunk-PYCr5Ivi.js";import"./chunk-gtyL-bMM.js";import"./chunk-B3AFDltd.js";import"./chunk-X13qFF8j.js";import"./chunk-A28ZiPww.js";import"./chunk-E7RiHwKi.js";import"./chunk-3xNmT1XT.js";import"./chunk-elC-BEzW.js";import"./chunk-PXg3VzVx.js";import"./chunk-1yHvQV-p.js";import"./chunk-SUrPPh2b.js";import"./chunk-63AI7Hpr.js";import"./chunk-wJeQeX2q.js";import"./chunk-t4TbIqUg.js";const $=new R({baseURL:"/data"}),j=(m="")=>$.request({method:"GET",url:`/cell${m}.json`}),Z=V({__name:"index",setup(m){const u=new _({symbol:new C({symbolLayers:[{type:"extrude",material:{color:"red"},size:100}]})}),s=v([]),p=(t="")=>{j(t).then(e=>{s.value=e.features.map(o=>new x({geometry:new B({rings:o.geometry.coordinates}),attributes:o.properties}))})};p();const d=t=>{const{result:e}=t;e&&console.log(e)},f=async t=>{const e=t.layer,o=t.view;await e.when(),o.goTo(s.value)},c=(t="")=>{p(t)},h=()=>{s.value=[]};return(t,e)=>{const o=k("ElButton");return b(),D(n(g),null,{before:r(()=>[T("p",null,[a(o,{onClick:e[0]||(e[0]=l=>c("2"))},{default:r(()=>[i("getTestData2")]),_:1}),a(o,{onClick:e[1]||(e[1]=l=>c("3"))},{default:r(()=>[i("getTestData3")]),_:1}),a(o,{onClick:h},{default:r(()=>[i("清空")]),_:1})])]),default:r(()=>[a(n(w),{type:"img_w",spatialReference:{wkid:3857}}),a(n(F),null,{default:r(({spatialReference:l})=>[a(n(y),{spatialReference:l,renderer:n(u),source:s.value,fields:[{name:"FID",type:"oid"},{name:"name",type:"string"}],"geometry-type":"polygon","object-id-field":"FID",cursor:"pointer",onClick:d,onChange:f},null,8,["spatialReference","renderer","source"])]),_:1})]),_:1})}}});export{Z as default};
