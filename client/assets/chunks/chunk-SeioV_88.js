import{p as b,u as h,a as w}from"./chunk-8_TIVmWE.js";import{gp as v,nO as x,gk as a,kZ as f,y as S,l2 as _,gz as O}from"./chunk-8J0p1hu6.js";import{u as $}from"./chunk-9Xx1cZHC.js";import{u as j}from"./chunk-wKTfZVHq.js";import{u as E}from"./chunk-rD0UKOh0.js";const L={...b,defaultOptions:{type:Object,default:()=>({})},id:{type:Number,default:0},renderer:{type:Object,default:void 0},definitionExpression:{type:String,default:"1=1"}},g={load:e=>e},V=v({name:"VaSublayer",emits:g,props:L,setup(e,{emit:i}){const u=$(),s=E(),c=j(),t=new x({...e.defaultOptions}),l=t.when(),y=m().then(n=>{t.set("fullExtent",n.extent)});t.when=async function(...n){const[d,p]=n;return y.then(()=>l).then(r=>(d?.(r),r)).catch(r=>{p?.(r)})},a(()=>{t.id=e.id}),a(()=>{e.renderer!==void 0&&(t.renderer=e.renderer)}),a(()=>{t.definitionExpression=e.definitionExpression}),h(t,e),w(s,t,e),f("vaSublayer",t),f("vaLayer",t),i("load",{view:u,sublayers:s,sublayer:t});async function m(){await c.when();const n=t.url;return(await S(n,{query:{f:"json"}})).data}return{}}});function k(e,i,u,s,c,t){return O(e.$slots,"default")}const o=_(V,[["render",k]]);o.install=e=>{e.component(o.name,o)};export{o as V};
