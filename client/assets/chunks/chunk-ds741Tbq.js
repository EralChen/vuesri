import{gj as _,gp as d,y as h,P as g,gl as w,l2 as V,gz as T,gv as f,kY as b,gs as v,gt as F,gw as s,gu as e,gy as n,gF as L,gx as x}from"./chunk-8J0p1hu6.js";import{V as I,s as P}from"./chunk-4Hw7jKBN.js";import"./chunk-QGefeR4K.js";import{R as $}from"./chunk-KpbMssn-.js";import"./chunk-QaD_sRbR.js";import"./chunk-fI5jSiIS.js";import"./chunk-fc4IFfcH.js";import"./chunk-uNaeGMMM.js";import"./chunk-iiUwB5t_.js";import"./chunk-bFNjZW0x.js";import"./chunk-4kREPvPN.js";import"./chunk-XemX8x6N.js";import{V as j}from"./chunk-RFY32dbj.js";import"./chunk-jWmRZ6CR.js";import"./chunk-rp9G5Hm9.js";import"./chunk-yC53Rrsd.js";import"./chunk-qsYaPYJR.js";import{V as k}from"./chunk-GCw7EMMQ.js";import"./chunk-l7TJQPp9.js";import"./chunk-VSP1OmZm.js";import"./chunk-FizgFK0M.js";import"./chunk-qnQW4j_g.js";import"./chunk-culU3cWb.js";import"./chunk-e48hjePl.js";import"./chunk-uTir6p3d.js";import{V as S}from"./chunk-lEo3elO0.js";import"./chunk-jSC1GG4B.js";import"./chunk-5kKVXtii.js";import"./chunk-sN0vSnE3.js";import"./chunk-SeioV_88.js";import"./chunk-DIiskq-P.js";import"./chunk-OCeEVq_g.js";import"./chunk-dX4PDDUd.js";import"./chunk-YAbK3HLg.js";import"./chunk-Xln9TOnB.js";import"./chunk-XTb3uBWB.js";import"./chunk-ENQg6NNd.js";import"./chunk-3Bj5QBkN.js";import{V as R}from"./chunk-Nr78aDop.js";import"./chunk-M-SHjJk6.js";import"./chunk-qaKLXxsP.js";import{u as B}from"./chunk-Yj_SOQn_.js";import"./chunk-EUQwHdIv.js";import"./chunk-u8xdCC6Y.js";import"./chunk-xlnTbaEF.js";import"./chunk-9Xx1cZHC.js";import"./chunk-3E9jM2aR.js";import"./chunk-8_TIVmWE.js";import"./chunk-vx0QQQez.js";import"./chunk-wKTfZVHq.js";import"./chunk-WD1fh68X.js";import"./chunk-7tXS8HdV.js";import"./chunk-1xuDHoYo.js";import"./chunk-xESNvpj7.js";import"./chunk-PSa8gd-V.js";import"./chunk-9FiinX4D.js";import"./chunk-vyAk-nSt.js";import"./chunk-DOOrs2qQ.js";import"./chunk-rD0UKOh0.js";import"./chunk-muWf4gW8.js";function E(){const t=_("vaPopupTemplate");if(!t)throw new Error("The component which use usePopupTemplate() must be in a PopupTemplate component");return t}const y="http://t1.zjsophon.com:10000/geoserver",O=new $({baseURL:y,setRequestInit(t){return t.headers,t}}),W=t=>O.request(t),D=()=>W({method:"GET",url:"/rest/layers.json"}).then(t=>t.layers.layer),N={defaultOptions:{type:Object,default:()=>({})}},U={load:t=>t},q=d({name:"VaWmsLayerPopupTemplate",emits:U,props:N,setup(t,{emit:l}){const r=B(),i=r.fetchFeatureInfoFunction,p=E();return r.fetchFeatureInfoFunction=async m=>{m.info_format="application/json",m.feature_count=5;const{data:a}=await h(r.featureInfoUrl,{query:m});return a.features.map(o=>new g({attributes:o.properties,popupTemplate:p}))},w(()=>{r.fetchFeatureInfoFunction=i}),{popupTemplate:p}}});function z(t,l,r,i,p,m){return T(t.$slots,"default")}const u=V(q,[["render",z]]);u.install=t=>{t.component(u.name,u)};const Kt=d({__name:"index",setup(t){const l=async a=>{const o=a.view;await a.layer.when(),o.goTo(a.layer.fullExtent)},r=f([]),i=f([{templateType:"VkfSelect",prop:"name",filterable:!0,options:r}]),p=b({name:"pub:O3_predict_20220301"});m();function m(){D().then(a=>{r.value=a.map(o=>({label:o.name,value:o.name}))})}return(a,o)=>(v(),F(e(k),null,{before:s(()=>[n(e(I),{formItems:i.value,data:e(p),onSetData:o[0]||(o[0]=c=>e(P)(e(p),c))},null,8,["formItems","data"])]),default:s(()=>[n(e(j),{type:"vec_c",anno:!1,"spatial-reference":{wkid:4490}}),n(e(R),{url:e(y)+"/ows",onLoad:l,sublayers:[{name:e(p).name,queryable:!0,popupEnabled:!0}]},{default:s(()=>[n(e(S),{orphan:!0},{plugins:s(()=>[n(e(u))]),default:s(({attributes:c})=>[x(L(c),1)]),_:1})]),_:1},8,["url","sublayers"])]),_:1}))}});export{Kt as default};
