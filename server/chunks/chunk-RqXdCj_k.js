import { aO as s, aC as M, aV as e, a_ as c } from "./chunk-ejFG4zJ0.js";
import { N } from "./chunk-oJ14iR_X.js";
import { m } from "./chunk-EGG5wFDa.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZRKw_7qF.js";
import "./chunk-315ILBUn.js";
import "./chunk--_aQKBqP.js";
let o = class extends m(N) {
  constructor() {
    super(...arguments), this.type = "wms-3d";
  }
  initialize() {
    this.layer.serviceSupportsSpatialReference(this.view.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))), this._updatingHandles.add(() => this.exportImageParameters?.version, () => {
      this._updatingHandles.addPromise(this.refreshDebounced());
    });
  }
  createFetchPopupFeaturesQuery(e2) {
    const t = this.findExtentInfoAt(e2), r = t.extent, s2 = new M(r[0], r[1], r[2], r[3], this._spatialReference), a = t.imageSize, o2 = a.width, n2 = a.height, p = s2.width / o2;
    return { extent: s2, width: o2, height: n2, x: Math.round((e2.x - s2.xmin) / p), y: Math.round((s2.ymax - e2.y) / p) };
  }
  getFetchOptions() {
    return { timeExtent: this.timeExtent };
  }
};
o = e([c("esri.views.3d.layers.WMSLayerView3D")], o);
const n = o;
export {
  n as default
};
