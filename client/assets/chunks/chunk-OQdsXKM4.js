import{dk as n,s as y,$ as i,a0 as s,a2 as d}from"./chunk-xdbuWCSg.js";import{n as m}from"./chunk-w0wnclz1.js";import{c}from"./chunk-iSqWkjna.js";import"./chunk-t4TbIqUg.js";let e=class extends c(m(n)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){const t=this.view?.map?.allLayers,r=t&&t.includes(this.layer),a=this.view?.map?.ground?.layers,o=a&&a.includes(this.layer);if(r&&!o){const l=new y("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(l))}this._addTilingSchemeMatchPromise()}};i([s()],e.prototype,"layer",void 0),i([s()],e.prototype,"tileInfo",null),e=i([d("esri.views.3d.layers.ElevationLayerView3D")],e);const f=e;export{f as default};
