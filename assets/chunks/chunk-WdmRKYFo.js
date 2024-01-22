import{hE as u,mQ as a,L as y,s as E,mR as g,lx as v,mS as x,ge as z}from"./chunk-AGUgPSYp.js";const h=8388607,S=8388608,$=254,w=255,b=0,m=1,d=e=>(e&S)>>>23,D=e=>e&h,M=e=>d(e)===m?$:w;function U(e){return d(e)===m}function F(e,s){return((s?S:0)|e)>>>0}const Z=(e,s)=>e&&((...t)=>s.warn("DEBUG:",...t))||(()=>null),T=!1;function _(e){return u(e.minDataValue)&&u(e.maxDataValue)&&e.minSize!=null&&e.maxSize!=null?a.SIZE_MINMAX_VALUE:(e.expression&&e.expression==="view.scale"||e.valueExpression&&e.valueExpression==="$view.scale")&&Array.isArray(e.stops)?a.SIZE_SCALE_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?a.SIZE_FIELD_STOPS:(e.field!=null||e.expression&&e.expression!=="view.scale"||e.valueExpression&&e.valueExpression!=="$view.scale")&&e.valueUnit!=null?a.SIZE_UNIT_VALUE:(y.getLogger("esri.views.2d.engine.webgl").error(new E("mapview-bad-type","Found invalid size VisualVariable",e)),a.NONE)}function N(e,s){if(!e||!s)return e;switch(s){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function A(e){return{value:e.value,size:v(e.size)}}function l(e){return(e??[]).map(s=>A(s))}function p(e){if(typeof e=="string"||typeof e=="number")return v(e);const s=e;return{type:"size",expression:s.expression,stops:l(s.stops)}}const c=e=>{const s=[],t=[],n=l(e),i=n.length;for(let o=0;o<6;o++){const r=n[Math.min(o,i-1)];s.push(r.value),t.push(r.size==null?x:z(r.size))}return{values:new Float32Array(s),sizes:new Float32Array(t)}};function O(e){const s=e&&e.length>0?{}:null,t=s?{}:null;if(!s||!t)return{vvFields:s,vvRanges:t};for(const n of e)if(n.field&&(s[n.type]=n.field),n.type==="size"){t.size||(t.size={});const i=n;switch(_(i)){case a.SIZE_MINMAX_VALUE:t.size.minMaxValue={minDataValue:i.minDataValue,maxDataValue:i.maxDataValue,minSize:p(i.minSize),maxSize:p(i.maxSize)};break;case a.SIZE_SCALE_STOPS:t.size.scaleStops={stops:l(i.stops)};break;case a.SIZE_FIELD_STOPS:if(i.levels){const o={};for(const r in i.levels)o[r]=c(i.levels[r]);t.size.fieldStops={type:"level-dependent",levels:o}}else t.size.fieldStops={type:"static",...c(i.stops)};break;case a.SIZE_UNIT_VALUE:t.size.unitValue={unit:i.valueUnit,valueRepresentation:i.valueRepresentation??void 0}}}else if(n.type==="color")t.color=V(n);else if(n.type==="opacity")t.opacity=I(n);else if(n.type==="rotation"){const i=n;t.rotation={type:i.rotationType}}return{vvFields:s,vvRanges:t}}function I(e){const s={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;const t=e.stops;for(let n=0;n<8;++n){const i=t[Math.min(n,t.length-1)];s.values[n]=i.value,s.opacities[n]=i.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;for(let n=0;n<8;n++)s.values[n]=1/0,s.opacities[n]=t}}return s}function f(e,s,t){e[4*s]=t.r/255,e[4*s+1]=t.g/255,e[4*s+2]=t.b/255,e[4*s+3]=t.a}function V(e){if(e==null||e.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if(typeof e.field=="string"){if(!e.stops)return null;{if(e.stops.length>8)return null;s.field=e.field;const t=e.stops;for(let n=0;n<8;++n){const i=t[Math.min(n,t.length-1)];s.values[n]=i.value,f(s.colors,n,i.color)}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const t=e.stops&&e.stops.length>=0&&e.stops[0].color;for(let n=0;n<8;n++)s.values[n]=1/0,f(s.colors,n,t)}}for(let t=0;t<32;t+=4)g(s.colors,t,!0);return s}export{N as a,h as b,m as c,_ as d,d as e,D as f,O as g,M as i,T as l,Z as n,U as p,F as s,b as u};