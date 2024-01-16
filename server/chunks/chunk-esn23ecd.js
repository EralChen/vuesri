import { dP as u, aM as s$1, bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { o } from "./chunk-yz-PXh9A.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let l = class extends o(n(u)) {
  constructor() {
    super(...arguments), this.type = "elevation-3d";
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    const e2 = this.view?.map?.allLayers, o2 = e2 && e2.includes(this.layer), s = this.view?.map?.ground?.layers, i = s && s.includes(this.layer);
    if (o2 && !i) {
      const e3 = new s$1("layerview:elevation-layer-only", "3D elevation layer '" + this.layer.id + "' can only be added to layers in map.ground");
      this.addResolvingPromise(Promise.reject(e3));
    }
    this._addTilingSchemeMatchPromise();
  }
};
e([y()], l.prototype, "layer", void 0), e([y()], l.prototype, "tileInfo", null), l = e([c("esri.views.3d.layers.ElevationLayerView3D")], l);
const p = l;
export {
  p as default
};
