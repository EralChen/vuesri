import{_ as l,$ as o,a1 as u,aj as c,ar as r,jI as y,dk as w,cR as p,jY as $}from"./chunk-217NDGZJ.js";import{l as f}from"./chunk-85jbldbg.js";let n=class extends f{constructor(t){super(t)}initialize(){this.addHandles(c(()=>this.analysisViewData.visible,t=>this.visible=t,r))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};l([o({constructOnly:!0})],n.prototype,"analysis",void 0),l([o()],n.prototype,"analysisViewData",void 0),n=l([u("esri.views.interactive.AnalysisToolBase")],n);function j(a,t){a.interactive=!0;const{tool:i,view:s}=a;s.activeTool=i;let e=y(t,()=>{s.activeTool===i&&(s.activeTool=null)});return w(async d=>{await p(()=>i==null||!i.active,d),e=$(e)},t)}function V(a,t){return c(()=>a.interactive,()=>h(a,t),r)}function h(a,t){a.interactive?m(a,t):v(a)}function m(a,t){v(a);const{view:i,analysis:s}=a,e=new t({view:i,analysis:s,analysisViewData:a});return a.tool=e,i.tools.add(e),e}function v(a){const{view:t,tool:i}=a;i!=null&&(t.tools.remove(i),a.tool=null)}export{n as a,V as b,j as l,v};