import{eo as l,as as a}from"./chunk-8J0p1hu6.js";function u(e,t=l(e)){return t.mode!=="on-the-ground"&&!(e.geometry==null||!e.geometry.hasZ)}function m(e,t){let o=null;const n=e.events.on("grab-changed",r=>{o!=null&&(o.remove(),o=null),r.action==="start"&&(o=e.disableDisplay()),t&&t(r)});return a(()=>{o?.remove(),n.remove()})}export{u as n,m as t};
