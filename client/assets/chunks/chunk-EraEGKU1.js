import{p as h,u as b,a as w}from"./chunk-gtyL-bMM.js";import{h2 as v,oM as x,gZ as a,lB as f,U as S,lG as _,hc as $}from"./chunk-xdbuWCSg.js";import{u as E}from"./chunk-A28ZiPww.js";import{u as L}from"./chunk-3xNmT1XT.js";import{u as O}from"./chunk-IoGt2n0v.js";const j={...h,defaultOptions:{type:Object,default:()=>({})},id:{type:Number,default:0},renderer:{type:Object,default:void 0},definitionExpression:{type:String,default:"1=1"}},V={load:e=>e},U=v({name:"VaSublayer",emits:V,props:j,setup(e,{emit:i}){const u=E(),s=O(),c=L(),t=new x({...e.defaultOptions}),l=t.when(),y=m().then(n=>{t.set("fullExtent",n.extent)});t.when=async function(...n){const[d,p]=n;return y.then(()=>l).then(r=>(d?.(r),r)).catch(r=>{p?.(r)})},a(()=>{t.id=e.id}),a(()=>{e.renderer!==void 0&&(t.renderer=e.renderer)}),a(()=>{t.definitionExpression=e.definitionExpression}),b(t,e),w(s,t,e),f("vaSublayer",t),f("vaLayer",t),i("load",{view:u,sublayers:s,sublayer:t});async function m(){await c.when();const n=t.url;return(await S(n,{query:{f:"json"}})).data}return{}}});function g(e,i,u,s,c,t){return $(e.$slots,"default")}const o=_(U,[["render",g]]);o.install=e=>{e.component(o.name,o)};export{o as V};
