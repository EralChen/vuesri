import { et as i, eu as u$1, dc as H$1, aO as s, ev as r, aV as e, aX as y, a_ as c$2 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { c as c$1 } from "./chunk-rp7NsXHP.js";
import { S, U } from "./chunk-GrWojVOW.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let m = class extends i(c$1(n(u$1))) {
  constructor() {
    super(...arguments), this.type = "tile-3d", this._popupHighlightHelper = null;
  }
  get imageFormatIsOpaque() {
    return "jpg" === this.layer.tileInfo.format;
  }
  get hasMixedImageFormats() {
    return "mixed" === this.layer.tileInfo.format;
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    if ("web-tile" === this.layer.type) {
      const e2 = this.layer.fullExtent?.spatialReference, r2 = this.layer.tileInfo?.spatialReference;
      if (null == e2 || null == r2 || !H$1(e2, r2)) {
        const e3 = "defaults" === this.layer.originOf("fullExtent") || null == this.layer.fullExtent ? "SceneView requires fullExtent to be specified by the user on WebTileLayer" : "SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";
        this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent", e3)));
      }
    }
    S(this, this.layer) && (this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (e2, t) => r(e2, t, this.view), layerView: this, updatingHandles: this._updatingHandles })), this._addTilingSchemeMatchPromise();
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  async fetchPopupFeaturesAtLocation(e2, t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e2, t) : [];
  }
  async doRefresh() {
    this.suspended || this.emit("data-changed");
  }
};
e([y()], m.prototype, "imageFormatIsOpaque", null), e([y()], m.prototype, "hasMixedImageFormats", null), e([y()], m.prototype, "layer", void 0), e([y()], m.prototype, "tileInfo", null), m = e([c$2("esri.views.3d.layers.TileLayerView3D")], m);
const c = m;
export {
  c as default
};
