import{V as c}from"./chunk-oGKzQC3o.js";import{V as u}from"./chunk-Lc4GdXmF.js";import{_ as d}from"./chunk-q_Q8GqjV.js";import{V as _}from"./chunk-sfFU6-Mp.js";import{gp as g,gv as s,kY as w,ld as V,gq as v,gr as y,gw as r,gs as a,gy as i,gF as b,gx as x}from"./chunk-m3jlTyOz.js";import{V as k,s as T}from"./chunk-KeaEG4wt.js";import"./chunk-UGOwPU3E.js";import"./chunk-sx_5tzRY.js";import"./chunk-dfbnxT3d.js";import"./chunk-3E9jM2aR.js";import"./chunk-xESNvpj7.js";import"./chunk-3GvsUVmQ.js";import"./chunk-T8_LR2t6.js";import"./chunk-nhwCGmT6.js";import"./chunk-mzuyEGLb.js";import"./chunk-DeWxgD7-.js";import"./chunk-Ts4GXi8B.js";import"./chunk-BOPyiqs1.js";import"./chunk-yAT8stFn.js";import"./chunk-NMVZqJQc.js";import"./chunk-UIYUfr_z.js";import"./chunk-bntHIBZM.js";import"./chunk-u8xdCC6Y.js";import"./chunk-KpbMssn-.js";const h="http://192.168.110.250:8080/geoserver/pub/ows",W=g({__name:"index",setup(S){const n=async t=>{const e=t.view;await t.layer.when(),e.goTo(t.layer.fullExtent)},m=s([]),l=s([{templateType:"VkfSelect",prop:"name",filterable:!0,options:m}]),o=w({data:void 0,name:""});f();function f(){V(h).then(t=>{o.data=t,m.value=t.featureTypes.map(e=>({label:e.name,value:e.name}))})}return(t,e)=>(v(),y(a(c),{defaultOptions:{zoom:2}},{before:r(()=>[i(a(k),{formItems:l.value,data:a(o),onSetData:e[0]||(e[0]=p=>a(T)(a(o),p))},null,8,["formItems","data"])]),default:r(()=>[i(a(u),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),i(d,{capabilities:a(o).data,name:a(o).name,onLoad:n},{default:r(()=>[i(a(_),null,{default:r(({attributes:p})=>[x(b(p),1)]),_:1})]),_:1},8,["capabilities","name"])]),_:1}))}});export{W as default};