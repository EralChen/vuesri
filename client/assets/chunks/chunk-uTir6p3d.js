import{V as v}from"./chunk-e48hjePl.js";import{u as g}from"./chunk-9Xx1cZHC.js";import{c as d}from"./chunk-3E9jM2aR.js";import{c as w}from"./chunk-WD1fh68X.js";import{gp as y,kT as m,gv as h,gB as V,l0 as x,gq as b,l2 as S,gC as B,la as C,l9 as U,gs as _,gt as $,gw as P,gz as k,qv as M}from"./chunk-8J0p1hu6.js";const T={geometry:{type:Object,default:void 0},visible:{type:Boolean,default:!0},outContainsShow:{type:Boolean,default:!1},position:{type:[String,Object],default:"manual"},orphan:{type:Boolean,default:!1}},j={},q=y({name:"VaGeoViewUi",components:{VaViewUi:v},emits:j,props:T,setup(e){const r=g(),i=r[d],l=w(i),c={point(t){return t},extent(t){return t.center},mesh(t){return t.extent.center},multipoint(t){return t.extent.center},polygon(t){return t.extent.center},polyline(t){return t.extent.center}},n=m(()=>e.geometry?.type&&c[e.geometry.type](e.geometry)),o=h(!0),u=V(),a=()=>{let t=n.value?r.toScreen(n.value):{x:0,y:0};u.value=t};a();const p=new l("watch:extent",([t])=>{if(e.visible&&n.value){if(!e.outContainsShow&&!t.contains(n.value))return o.value=!1;a(),o.value=!0}});p.add(),x(()=>{p.remove()}),b(()=>n.value,()=>{a()});const f=m(()=>e.visible?o.value:!1);return{screenPoint:u,visible:f,setScreenPoint:a}}});function z(e,r,i,l,c,n){const o=B("VaViewUi");return C((_(),$(o,{class:"va-geo-view-ui",style:M({left:e.screenPoint?.x+"px",top:e.screenPoint?.y+"px"}),position:e.position,orphan:e.orphan},{default:P(()=>[k(e.$slots,"default")]),_:3},8,["style","position","orphan"])),[[U,e.visible]])}const s=S(q,[["render",z]]);s.install=e=>{e.component(s.name,s)};export{s as V};