import{e_ as s,e2 as c,dn as v,e$ as r,ak as u,as as w}from"./chunk-gZYsZ36N.js";function m(t,a){t.interactive=!0;const{tool:n,view:i}=t;i.activeTool=n;let e=s(a,()=>{i.activeTool===n&&(i.activeTool=null)});return c(async o=>{await v(()=>n==null||!n.active,o),e=r(e)},a)}function y(t,a){return u(()=>t.interactive,()=>f(t,a),w)}function f(t,a){t.interactive?$(t,a):l(t)}function $(t,a){l(t);const{view:n,analysis:i}=t,e=new a({view:n,analysis:i,analysisViewData:t});return t.tool=e,n.tools.add(e),e}function l(t){const{view:a,tool:n}=t;n!=null&&(a.tools.remove(n),t.tool=null)}export{y as a,m as l,l as v};