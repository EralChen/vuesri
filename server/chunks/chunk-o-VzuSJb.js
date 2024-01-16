import { dQ as r, bo as e, br as c } from "./chunk-KFNcxJaF.js";
import { N } from "./chunk-d7MAv1vm.js";
import { p } from "./chunk-rSZ9Aidu.js";
import { G } from "./chunk-IcrgUyIJ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-7Z1hjEcP.js";
import "./chunk-UZskY1JT.js";
import "./chunk-zw9UPZSi.js";
let o = class extends p(N) {
  constructor() {
    super(...arguments), this.type = "map-image-3d";
  }
  initialize() {
    this._updatingHandles.add(() => this.exportImageVersion, () => this._updatingHandles.addPromise(this.refreshDebounced())), this._popupHighlightHelper = new G({ createFetchPopupFeaturesQueryGeometry: (e2, r$1) => r(e2, r$1, this.view), layerView: this, updatingHandles: this._updatingHandles });
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  fetchPopupFeatures(e2, r2) {
    return this._popupHighlightHelper.fetchPopupFeatures(e2, r2);
  }
  getFetchOptions() {
    return { timeExtent: this.timeExtent };
  }
};
o = e([c("esri.views.3d.layers.MapImageLayerView3D")], o);
const a = o;
export {
  a as default
};
