import{u as c}from"./chunk-TB-F49UB.js";import{h2 as n,h3 as p,h4 as h,h1 as d}from"./chunk-xdbuWCSg.js";const y=n({props:{data:{type:Object,required:!0},symbol:{type:Object,required:!0}},setup(r){const i=c();class l extends d{map=new Map;add(t){t.forEach(e=>{this.map.set(e,e.symbol),e.symbol=r.symbol}),this.removeHandler=()=>{t.forEach(e=>{const a=this.map.get(e);a&&(e.symbol=a)}),this.map=new Map}}reset(t){this.remove(),this.add(t)}}const o=new l;return p(()=>r.data,s=>{if(s&&h(s)){const t=i.graphics.filter(e=>{let a=!0;return Object.keys(s).forEach(m=>{e.attributes[m]!==s[m]&&(a=!1)}),a});o.reset(t)}else o.remove()},{immediate:!0,deep:!0}),()=>null}});export{y as _};