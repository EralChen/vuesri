import{gp as i,kY as f,kZ as v,k_ as m,k$ as y,gj as _,l0 as k,l1 as I}from"./chunk-8J0p1hu6.js";const b={source:{type:Object,default:void 0},templateInstances:{type:Object,default:void 0},typeField:{type:String,default:"type"}};var l=i({name:"VkRenderer",props:b,setup(e,t){var r;const a=(r=e.templateInstances)!=null?r:f({});v(m,a);function d(n){var s,o;if(!n)return null;const p=n[e.typeField];if(y(a))return null;const c=a[p];return c?(o=(s=c.slots).default)==null?void 0:o.call(s,{raw:n}):(console.warn(`未找到 ${p} 对应的模板`),null)}return()=>{var n,s;return[(s=(n=t.slots).default)==null?void 0:s.call(n),d(e.source)]}}});l.__file="renderer/src/index.vue";l.install=e=>{e.component(l.name,l)};const g={type:{type:String,required:!0}};var u=i({name:"VkRendererTemplate",props:g,setup(e){const t=_(m);if(!t)throw new Error;const r=I(),a=t[e.type];return r&&t&&(t[e.type]=r),k(()=>{t[e.type]=a}),()=>null}});u.__file="renderer-template/src/index.vue";u.install=e=>{e.component(u.name,u)};export{u as a,l as s};
