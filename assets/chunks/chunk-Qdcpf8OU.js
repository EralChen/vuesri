import{V as v}from"./chunk-oGKzQC3o.js";import{V as w}from"./chunk-Lc4GdXmF.js";import{V as _}from"./chunk-9RnNHQJS.js";import{gj as b,gp as y,l0 as V,gn as k,gm as x,l2 as S,gz as C,f0 as $,bK as E,gv as M,gC as B,gq as O,gr as T,gw as a,gx as d,gy as s,gE as h,gs as c}from"./chunk-m3jlTyOz.js";import{V as j}from"./chunk-K9wJ12yw.js";import{u as q}from"./chunk-dfbnxT3d.js";import{c as F}from"./chunk-3E9jM2aR.js";import{e as H}from"./chunk-xi9lM-xU.js";import{c as L}from"./chunk-UIYUfr_z.js";import"./chunk-sx_5tzRY.js";import"./chunk-xESNvpj7.js";import"./chunk-3GvsUVmQ.js";import"./chunk-T8_LR2t6.js";import"./chunk-nhwCGmT6.js";import"./chunk-mzuyEGLb.js";import"./chunk-DeWxgD7-.js";import"./chunk-Ts4GXi8B.js";import"./chunk-aJpKuiq7.js";import"./chunk-08c5rnJX.js";import"./chunk-bntHIBZM.js";import"./chunk-ccEmCESr.js";function N(){const t=b("vaSublayer");if(!t)throw new Error("The component which use useSublayer() must be in a  Sublayer component");return t}const z={modelValue:{type:Object,default:()=>({})}},A={click:t=>t},U=y({name:"VaSublayerOnClick",emits:A,props:z,setup(t,{emit:p}){const i=N(),o=q(),u=o[F],r=L(u),e=new r("click",n=>{const l=i.createQuery(),g=H(o,{x:n.event.x,y:n.event.y});l.geometry=g,l.outFields=["*"],i.queryFeatures(l).then(f=>{p("click",{...n,featureSet:f,result:f.features[0],layer:i})})});return e.add(),V(()=>{e.remove()}),k(()=>{e.remove()}),x(()=>{e.add()}),{}}});function D(t,p,i,o,u,r){return C(t.$slots,"default")}const m=S(U,[["render",D]]);m.install=t=>{t.component(m.name,m)};const pe=y({__name:"index",setup(t){const p=async r=>{const e=r.view;await r.layer.when(),e.goTo(r.layer.fullExtent)},i=new $({symbol:new E({color:"red"})}),o=M("1=1"),u=r=>{console.log("onSublayerClick",r)};return(r,e)=>{const n=B("ElButton");return O(),T(c(v),{defaultOptions:{zoom:2}},{before:a(()=>[h("p",null,[s(n,{onClick:e[0]||(e[0]=l=>o.value="1=1")},{default:a(()=>[d("1 = 1")]),_:1}),s(n,{onClick:e[1]||(e[1]=l=>o.value="1=0")},{default:a(()=>[d("1 = 0")]),_:1}),s(n,{onClick:e[2]||(e[2]=l=>o.value="st='MO'")},{default:a(()=>[d("st = MO")]),_:1})])]),default:a(()=>[s(c(w),{type:"vec_w",anno:!1,"spatial-reference":{wkid:3857}}),s(c(_),{sublayers:[],url:"https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",onLoad:p},{when:a(()=>[s(c(j),{id:0,renderer:c(i),visible:!0,definitionExpression:o.value},{default:a(()=>[s(c(m),{onClick:u})]),_:1},8,["renderer","definitionExpression"])]),_:1},8,["url"])]),_:1})}}});export{pe as default};