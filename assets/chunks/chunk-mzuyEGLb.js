import{gk as i,gn as x,gm as b,gt as g,l0 as h,kP as y}from"./chunk-m3jlTyOz.js";import{s as d,a as s,b as m}from"./chunk-3E9jM2aR.js";const w={maxScale:{type:Number,default:0},minScale:{type:Number,default:0},cursor:{type:String,default:""},title:{type:String,default:""},visible:{type:Boolean,default:!0},opacity:{type:Number,default:1},index:{type:Number,default:void 0},orphan:{type:Boolean,default:!1}};function p(t,e){i(()=>{t.visible=e.visible}),x(()=>{t.visible=!1}),b(()=>{t.visible=e.visible})}function T(t,e,n){const o=()=>t instanceof y?t.layers:t;if(n.orphan)return;e[d]=n.index,e[s]=n.indexTopping,t.add(e);const r=()=>{const a=o();v(a).forEach((f,l)=>{setTimeout(()=>{t.reorder(f,l)})})};e.when(()=>{r()}),typeof n.index=="number"&&r(),g(()=>[n.index,n.indexTopping],([a,c])=>{typeof a=="number"&&(e[d]=a,e[s]=c,r())}),h(()=>{t.remove(e)})}function A(t,e){p(t,e),i(()=>{t[m]=e.cursor}),i(()=>{t.title=e.title}),i(()=>{t.maxScale=e.maxScale}),i(()=>{t.minScale=e.minScale}),i(()=>{t.opacity=e.opacity})}function v(t){const e=new u,n=new u;return t.forEach(o=>{const r=o[d];o[s]?n.add(o,r):e.add(o,r)}),[...e.toArray(),...n.toArray()]}class u{record={};add(e,n){if(typeof n=="number"){let o=this.record[n];for(;o;)n++,o=this.record[n];this.record[n]=e}else this.record[this.getMaxIndex()+1]=e}getMaxIndex(){const e=Object.keys(this.record);return e.length?Math.max(...e.map(Number)):0}toArray(){return Object.values(this.record)}}export{T as a,p as b,w as p,A as u};