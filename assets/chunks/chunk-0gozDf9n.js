import{p as i,u as l,a as m}from"./chunk-gtyL-bMM.js";import{h2 as f,ce as d,gZ as u,lB as c,lG as h,hf as y,h5 as v,hg as _,ha as L,oD as E,hc as O,hl as V}from"./chunk-xdbuWCSg.js";import{u as $}from"./chunk-A28ZiPww.js";import{_ as g,c as w}from"./chunk-E7RiHwKi.js";const G={...i,defaultOptions:{type:Object,default:()=>({})},graphics:{type:[Array,Object],default:()=>[]}},H={click:e=>e,pointerMove:e=>e,load:e=>e},k=f({name:"VaGraphicsLayer",components:{VaLayerHitEvents:g},emits:H,props:G,setup(e,{emit:s}){const t=$(),o=t.map,r=w(s),a=new d({...e.defaultOptions});return u(()=>{a.graphics=e.graphics}),l(a,e),m(o,a,e),c("vaLayer",a),c("vaGraphicsLayer",a),s("load",{view:t,layer:a}),{eventsOnEmits:r}}});function B(e,s,t,o,r,a){const p=y("VaLayerHitEvents");return v(),_(V,null,[L(p,E(e.eventsOnEmits),null,16),O(e.$slots,"default")],64)}const n=h(k,[["render",B]]);n.install=e=>{e.component(n.name,n)};export{n as V};