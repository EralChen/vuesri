import{u as s}from"./chunk-s1CWS4v1.js";import{u as i}from"./chunk-PsIbZfTj.js";import{h2 as c,h3 as u,h4 as p,lG as f,h5 as m,hg as d}from"./chunk-xdbuWCSg.js";import"./chunk-t4TbIqUg.js";const h=c({props:{data:{type:Object,default:()=>({})}},setup(r){const n=i(),o=s();return u(()=>r.data,()=>{if(p(r.data)){const a=Object.entries(r.data).map(([t,e])=>{if(typeof e=="string")return`${t}='${e}'`;if(typeof e=="number")return`${t}=${e}`}).join(" AND ");n.queryFeatures({where:a,outFields:["*"],returnGeometry:!0}).then(t=>{const{features:e}=t;e.length&&(o.goTo(e),o.popup.open({features:e}))})}},{immediate:!0}),{}}});function _(r,n,o,a,t,e){return m(),d("div")}const g=f(h,[["render",_]]);export{g as default};
