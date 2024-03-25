import { ev as r, aV as e, a_ as c } from "./chunk-ejFG4zJ0.js";
import { N } from "./chunk-oJ14iR_X.js";
import { p as p$1 } from "./chunk-BMM_upw9.js";
import { U } from "./chunk-GrWojVOW.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZRKw_7qF.js";
import "./chunk-315ILBUn.js";
import "./chunk--_aQKBqP.js";
let p = class extends p$1(N) {
  constructor() {
    super(...arguments), this.type = "map-image-3d";
  }
  initialize() {
    this._updatingHandles.add(() => this.exportImageVersion, () => this._updatingHandles.addPromise(this.refreshDebounced())), this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (e2, t) => r(e2, t, this.view), layerView: this, updatingHandles: this._updatingHandles });
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  fetchPopupFeaturesAtLocation(e2, t) {
    return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e2, t);
  }
  getFetchOptions() {
    return { timeExtent: this.timeExtent };
  }
};
p = e([c("esri.views.3d.layers.MapImageLayerView3D")], p);
const a = p;
export {
  a as default
};
