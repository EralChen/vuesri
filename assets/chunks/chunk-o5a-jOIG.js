import{p as y,u as h,a as V}from"./chunk-jDrT5IC_.js";import{h2 as _,oK as v,gZ as n,lC as l,lH as L,hf as u,h5 as b,hg as g,hc as m,ha as p,h9 as c,oL as $,oM as w,hl as S}from"./chunk-gZYsZ36N.js";import{u as P}from"./chunk-5yhB8Y-n.js";import{V as C}from"./chunk-0BkBQc93.js";import{V as M}from"./chunk-iaPf1V3f.js";const O={...y,url:{type:String,default:""},defaultOptions:{type:Object,default:()=>({})},sublayers:{type:Array,default:void 0}},I={load:e=>e},W=_({name:"VaMapImageLayer",components:{VaLayerWhen:C,VaSublayersProvider:M},emits:I,props:O,setup(e,{emit:t}){const s=P(),o=s.map,a=new v({...e.defaultOptions});return n(()=>{a.url=e.url}),n(()=>{e.sublayers&&(a.sublayers=e.sublayers)}),h(a,e),V(o,a,e),l("vaLayer",a),l("vaMapImageLayer",a),t("load",{view:s,layer:a}),{}}});function k(e,t,s,o,a,x){const i=u("VaSublayersProvider"),d=u("VaLayerWhen");return b(),g(S,null,[m(e.$slots,"default"),p(d,null,{default:c(f=>[p(i,null,{default:c(()=>[m(e.$slots,"when",$(w(f)))]),_:2},1024)]),_:3})],64)}const r=L(W,[["render",k]]);r.install=e=>{e.component(r.name,r)};export{r as V};