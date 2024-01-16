import { dO as a, dP as u, cP as D, aM as s$1, dQ as r, bo as e, bp as y, br as c$1 } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { o } from "./chunk-yz-PXh9A.js";
import { S, G } from "./chunk-IcrgUyIJ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let m = class extends a(o(n(u))) {
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
      if (null == e2 || null == r2 || !D(e2, r2)) {
        const e3 = "defaults" === this.layer.originOf("fullExtent") || null == this.layer.fullExtent ? "SceneView requires fullExtent to be specified by the user on WebTileLayer" : "SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";
        this.addResolvingPromise(Promise.reject(new s$1("layerview:incompatible-fullextent", e3)));
      }
    }
    S(this, this.layer) && (this._popupHighlightHelper = new G({ createFetchPopupFeaturesQueryGeometry: (e2, t) => r(e2, t, this.view), layerView: this, updatingHandles: this._updatingHandles })), this._addTilingSchemeMatchPromise();
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  async fetchPopupFeatures(e2, t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeatures(e2, t) : [];
  }
  async doRefresh() {
    this.suspended || this.emit("data-changed");
  }
};
e([y()], m.prototype, "imageFormatIsOpaque", null), e([y()], m.prototype, "hasMixedImageFormats", null), e([y()], m.prototype, "layer", void 0), e([y()], m.prototype, "tileInfo", null), m = e([c$1("esri.views.3d.layers.TileLayerView3D")], m);
const c = m;
export {
  c as default
};
