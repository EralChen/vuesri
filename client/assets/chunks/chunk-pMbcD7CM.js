import{Z as d,_ as p,$ as r,a0 as s,a1 as g,a2 as l}from"./chunk-xdbuWCSg.js";import{d as c}from"./chunk-3HdgwjTW.js";import"./chunk-t4TbIqUg.js";let i=class extends c{get updating(){return this._watchUpdatingTracking?.updating??!1}constructor(t){super(t),this._watchUpdatingTracking=new d}initialize(){const{featureTiles:t}=this.view;this.addHandles(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>t?.tiles,()=>this.update(),p)}destroy(){this._watchUpdatingTracking.destroy()}getTiles(){const t=e=>{const[a,o,n]=e.lij;return g.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(a,o,n))};return this.view.featureTiles.tiles.toArray().sort((e,a)=>e.loadPriority-a.loadPriority).map(e=>({...e,geometry:t(e)}))}};r([s()],i.prototype,"_watchUpdatingTracking",void 0),r([s()],i.prototype,"updating",null),r([s()],i.prototype,"view",void 0),i=r([l("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],i);export{i as FeatureTileTree3DDebugger};