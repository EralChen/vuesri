import{gp as f,gv as l,kP as w,pJ as V,kT as _,kZ as p,nB as g,l2 as $,gC as u,gs as E,gD as S,gz as r,gE as y,gy as m,l5 as C,gI as k}from"./chunk-8J0p1hu6.js";import{c as N}from"./chunk-3E9jM2aR.js";import{_ as B,a as W,m as h}from"./chunk-xlnTbaEF.js";const O={defaultOptions:{type:Object,default:()=>({})},cursor:{type:String,default:""}},b={load:e=>e},A=f({name:"VaSceneView",inheritAttrs:!1,components:{ViewEvents:B,ViewWatchs:W},emits:b,props:O,setup(e,{emit:o}){const t=l(),i=new w,s=new V({map:i,...e.defaultOptions});s[N]=h(),s.ui.components=[],window.__VA_SCENE_VIEW__=s;const n=l(""),a=_(()=>({"--va-scene-view-cursor":e.cursor||n.value}));return p("vaView",s),p("vaSceneView",s),g(()=>{s.container=t.value,o("load",{view:s})}),{viewNode:t,eventCursor:n,cursorStyle:a}}});function I(e,o,t,i,s,n){const a=u("ViewEvents"),v=u("ViewWatchs");return E(),S(k,null,[r(e.$slots,"before"),y("div",C({ref:"viewNode",style:e.cursorStyle,class:"va-scene-view va-view-x"},e.$attrs),[m(a,{cursor:e.eventCursor,"onUpdate:cursor":o[0]||(o[0]=d=>e.eventCursor=d)},null,8,["cursor"]),m(v),r(e.$slots,"default")],16),r(e.$slots,"after")],64)}const c=$(A,[["render",I]]);c.install=e=>{e.component(c.name,c)};export{c as V};
