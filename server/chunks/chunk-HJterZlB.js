import { eu as u$1, aO as s, aV as e, aX as y, a_ as c$1 } from "./chunk-ejFG4zJ0.js";
import { n as n$1 } from "./chunk-ZRKw_7qF.js";
import { c } from "./chunk-rp7NsXHP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let l = class extends c(n$1(u$1)) {
  constructor() {
    super(...arguments), this.type = "elevation-3d";
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    const e2 = this.view?.map?.allLayers, o = e2 && e2.includes(this.layer), s$1 = this.view?.map?.ground?.layers, i = s$1 && s$1.includes(this.layer);
    if (o && !i) {
      const e3 = new s("layerview:elevation-layer-only", "3D elevation layer '" + this.layer.id + "' can only be added to layers in map.ground");
      this.addResolvingPromise(Promise.reject(e3));
    }
    this._addTilingSchemeMatchPromise();
  }
};
e([y()], l.prototype, "layer", void 0), e([y()], l.prototype, "tileInfo", null), l = e([c$1("esri.views.3d.layers.ElevationLayerView3D")], l);
const n = l;
export {
  n as default
};
