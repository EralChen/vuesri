import{V as _}from"./chunk-Rpg3QTvn.js";import{V as b}from"./chunk-6o6tFwA-.js";import{V as h}from"./chunk-zegxIybi.js";import{gY as w,h2 as y,lE as V,g_ as k,g$ as x,lG as S,hc as g,fK as C,bG as $,h8 as E,hf as M,h5 as B,h6 as O,h9 as a,hh as T,ha as s,hb as d,h7 as c}from"./chunk-xdbuWCSg.js";import{V as F}from"./chunk-EraEGKU1.js";import{u as H}from"./chunk-A28ZiPww.js";import{s as L}from"./chunk-B3AFDltd.js";import{e as N,c as j}from"./chunk-gtyL-bMM.js";import"./chunk-elC-BEzW.js";import"./chunk-PXg3VzVx.js";import"./chunk-1yHvQV-p.js";import"./chunk-SUrPPh2b.js";import"./chunk-63AI7Hpr.js";import"./chunk-wJeQeX2q.js";import"./chunk-3xNmT1XT.js";import"./chunk-ltK1s8nW.js";import"./chunk-WbQr-OU9.js";import"./chunk-t4TbIqUg.js";import"./chunk-IoGt2n0v.js";import"./chunk-X13qFF8j.js";function q(){const t=w("vaSublayer");if(!t)throw new Error("The component which use useSublayer() must be in a  Sublayer component");return t}const A={modelValue:{type:Object,default:()=>({})}},G={click:t=>t},U=y({name:"VaSublayerOnClick",props:A,emits:G,setup(t,{emit:u}){const i=q(),r=H(),m=r[L],o=j(m),e=new o("click",n=>{const l=i.createQuery(),v=N(r,{x:n.event.x,y:n.event.y});l.geometry=v,l.outFields=["*"],i.queryFeatures(l).then(f=>{u("click",{...n,featureSet:f,result:f.features[0],layer:i})})});return e.add(),V(()=>{e.remove()}),k(()=>{e.remove()}),x(()=>{e.add()}),{}}});function z(t,u,i,r,m,o){return g(t.$slots,"default")}const p=S(U,[["render",z]]);p.install=t=>{t.component(p.name,p)};const ce=y({__name:"index",setup(t){const u=async o=>{const e=o.view;await o.layer.when(),e.goTo(o.layer.fullExtent)},i=new C({symbol:new $({color:"red"})}),r=E("1=1"),m=o=>{console.log("onSublayerClick",o)};return(o,e)=>{const n=M("ElButton");return B(),O(c(_),{defaultOptions:{zoom:2}},{before:a(()=>[T("p",null,[s(n,{onClick:e[0]||(e[0]=l=>r.value="1=1")},{default:a(()=>[d("1 = 1")]),_:1}),s(n,{onClick:e[1]||(e[1]=l=>r.value="1=0")},{default:a(()=>[d("1 = 0")]),_:1}),s(n,{onClick:e[2]||(e[2]=l=>r.value="st='MO'")},{default:a(()=>[d("st = MO")]),_:1})])]),default:a(()=>[s(c(b),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),s(c(h),{sublayers:[],url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",onLoad:u},{when:a(()=>[s(c(F),{id:0,renderer:c(i),visible:!0,definitionExpression:r.value},{default:a(()=>[s(c(p),{onClick:m})]),_:1},8,["renderer","definitionExpression"])]),_:1},8,["url"])]),_:1})}}});export{ce as default};