import{p as y,u as h,a as V}from"./chunk-gtyL-bMM.js";import{h2 as _,oJ as v,gZ as n,lB as l,lG as L,hf as u,h5 as b,hg as g,hc as m,ha as p,h9 as c,oK as $,oL as w,hl as S}from"./chunk-xdbuWCSg.js";import{u as P}from"./chunk-A28ZiPww.js";import{V as O}from"./chunk-ltK1s8nW.js";import{V as B}from"./chunk-WbQr-OU9.js";const C={...y,url:{type:String,default:""},defaultOptions:{type:Object,default:()=>({})},sublayers:{type:Array,default:void 0}},I={load:e=>e},M=_({name:"VaMapImageLayer",components:{VaLayerWhen:O,VaSublayersProvider:B},emits:I,props:C,setup(e,{emit:t}){const s=P(),o=s.map,a=new v({...e.defaultOptions});return n(()=>{a.url=e.url}),n(()=>{e.sublayers&&(a.sublayers=e.sublayers)}),h(a,e),V(o,a,e),l("vaLayer",a),l("vaMapImageLayer",a),t("load",{view:s,layer:a}),{}}});function W(e,t,s,o,a,k){const i=u("VaSublayersProvider"),d=u("VaLayerWhen");return b(),g(S,null,[m(e.$slots,"default"),p(d,null,{default:c(f=>[p(i,null,{default:c(()=>[m(e.$slots,"when",$(w(f)))]),_:2},1024)]),_:3})],64)}const r=L(M,[["render",W]]);r.install=e=>{e.component(r.name,r)};export{r as V};