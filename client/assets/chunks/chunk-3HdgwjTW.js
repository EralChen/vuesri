import{$ as r,a3 as P,a4 as x,D as S,a5 as p,a6 as L,a7 as O,a8 as $,a9 as j,V as A,aa as k,ab as T,a0 as d,a2 as D,ac as z}from"./chunk-xdbuWCSg.js";const E=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let o=class extends P{constructor(s){super(s),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=E.map(s=>new x({color:[s[0],s[1],s[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(s){this._enabled!==s&&(this._enabled=s,this.update())}update(){if(!this._enabled)return void this.clear();const s=e=>{if(e.label!=null)return e.label;let l=e.lij.toString();return e.loadPriority!=null&&(l+=` (${e.loadPriority})`),l},h=this.getTiles(),y=new Array,g=new Set((this._labels.size,this._labels.keys()));h.forEach((e,l)=>{const t=e.lij.toString();g.delete(t);const M=e.lij[0],u=e.geometry;if(this.enablePolygons&&!this._polygons.has(t)){const a=new S({geometry:u,symbol:this._symbols[M%this._symbols.length]});this._polygons.set(t,a),y.push(a)}if(this.enableLabels){const a=s(e),w=l/(h.length-1),b=z(0,200,w),_=z(20,6,w)/.75,m=e.loadPriority!=null&&e.loadPriority>=h.length,v=new p([b,m?0:b,m?0:b]),f=this.view.type==="3d"?()=>new L({verticalOffset:new O({screenLength:40/.75}),callout:new $({color:new p("white"),border:new j({color:new p("black")})}),symbolLayers:new A([new k({text:a,halo:{color:"white",size:1/.75},material:{color:v},size:_})])}):()=>new T({text:a,haloColor:"white",haloSize:1/.75,color:v,size:_}),n=this._labels.get(t);if(n){const i=f();n.symbol!=null&&JSON.stringify(i)===JSON.stringify(n.symbol)||(n.symbol=i)}else{const i=new S({geometry:u.extent.center,symbol:f()});this._labels.set(t,i),y.push(i)}}});const c=new Array;g.forEach(e=>{const l=this._polygons.get(e);l!=null&&(c.push(l),this._polygons.delete(e));const t=this._labels.get(e);t!=null&&(c.push(t),this._labels.delete(e))}),this.view.graphics.removeMany(c),this.view.graphics.addMany(y)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};r([d({constructOnly:!0})],o.prototype,"view",void 0),r([d({readOnly:!0})],o.prototype,"updating",void 0),r([d()],o.prototype,"enabled",null),o=r([D("esri.views.support.TileTreeDebugger")],o);export{o as d};
