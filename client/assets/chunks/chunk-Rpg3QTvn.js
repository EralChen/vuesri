import{h2 as f,h8 as p,lo as w,q8 as V,lx as _,lB as l,oF as h,lG as $,hf as m,h5 as M,hg as y,hc as r,hh as C,ha as u,lI as E,hl as g}from"./chunk-xdbuWCSg.js";import{p as B,e as N,_ as S,a as W,m as A}from"./chunk-elC-BEzW.js";import{s as O}from"./chunk-B3AFDltd.js";const b={...B,defaultOptions:{type:Object,default:()=>({})},cursor:{type:String,default:""}},k={...N,load:e=>e},F=f({name:"VaMapView",components:{ViewEvents:S,ViewWatchs:W},inheritAttrs:!1,props:b,emits:k,setup(e,{emit:o}){const t=p(),c=new w,s=new V({map:c,...e.defaultOptions});s[O]=A(),s.ui.components=[],window.__VA_MAP_VIEW__=s;const a=p(""),n=_(()=>({"--va-map-view-cursor":e.cursor||a.value}));return l("vaView",s),l("vaMapView",s),h(()=>{s.container=t.value,o("load",{view:s})}),{viewNode:t,eventCursor:a,cursorStyle:n}}});function I(e,o,t,c,s,a){const n=m("ViewEvents"),d=m("ViewWatchs");return M(),y(g,null,[r(e.$slots,"before"),C("div",E({ref:"viewNode",style:e.cursorStyle,class:"va-map-view va-view-x"},e.$attrs),[u(n,{cursor:e.eventCursor,"onUpdate:cursor":o[0]||(o[0]=v=>e.eventCursor=v)},null,8,["cursor"]),u(d),r(e.$slots,"default")],16),r(e.$slots,"after")],64)}const i=$(F,[["render",I]]);i.install=e=>{e.component(i.name,i)};export{i as V};
