import{V as k}from"./chunk-B-fCu76y.js";import{V as x}from"./chunk-gOzRnZOw.js";import{V as y}from"./chunk-eL7rTImP.js";import{u as E}from"./chunk-5yhB8Y-n.js";import{h2 as B,h8 as C,hd as D,he as S,h3 as b,hf as u,h5 as N,hg as G,hh as p,ha as a,h9 as l,hb as c,h7 as s,hi as I,hj as L,hk as T,hl as U}from"./chunk-gZYsZ36N.js";import{V as j}from"./chunk-MDlOrpWw.js";const A={class:"esri-sketch__section"},H=B({__name:"dialog-sketch",props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(h,{emit:f}){const d=h,V=f,n=C(!1),m=E(),i=new D;m.watch("extent",async t=>{if(n.value)return;const e=await i.promise;e.extent=t}),i.promise.then(t=>{t.watch("extent",e=>{n.value&&(m.extent=e.extent)})});const r=S(d.modelValue.map(t=>t.clone()));b(()=>d.modelValue,t=>{r.value=t.map(e=>e.clone())});const v=()=>{V("update:modelValue",r.value),n.value=!1};return(t,e)=>{const _=u("ElButton"),w=u("ElIcon"),g=u("ElDialog");return N(),G(U,null,[p("p",null,[a(_,{onClick:e[0]||(e[0]=o=>n.value=!0)},{default:l(()=>[c("open")]),_:1})]),a(g,{title:"绘制图斑",modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),draggable:!0},{default:l(()=>[a(s(x),{onLoad:e[2]||(e[2]=o=>s(i).resolve(o.view))},{after:l(()=>[c(I(r.value.map(o=>o.geometry)),1)]),default:l(()=>[a(s(y),{type:"img_w",anno:!1,"spatial-reference":{wkid:3857}}),a(s(j),null,{default:l(()=>[a(s(k),{class:"esri-sketch-dialog-with-save",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o)},{default:l(()=>[a(s(L),{to:".esri-sketch-dialog-with-save .esri-sketch__panel",sleep:800},{default:l(()=>[p("div",A,[a(w,{class:"esri-sketch-ui-save esri-widget--button",onClick:v},{default:l(()=>[a(s(T))]),_:1})])]),_:1},8,["to"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{H as _};