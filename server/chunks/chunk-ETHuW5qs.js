import { aM as s$1, ap as M$1, bo as e, br as c } from "./chunk-KFNcxJaF.js";
import { N } from "./chunk-d7MAv1vm.js";
import { i } from "./chunk-ibWpFF1V.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-7Z1hjEcP.js";
import "./chunk-UZskY1JT.js";
import "./chunk-zw9UPZSi.js";
let a = class extends i(N) {
  constructor() {
    super(...arguments), this.type = "wms-3d";
  }
  initialize() {
    this.layer.serviceSupportsSpatialReference(this.view.spatialReference) || this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible", "The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))), this._updatingHandles.add(() => this.exportImageParameters?.version, () => {
      this._updatingHandles.addPromise(this.refreshDebounced());
    });
  }
  createFetchPopupFeaturesQuery(e2) {
    const t = this.findExtentInfoAt(e2), r = t.extent, i2 = new M$1(r[0], r[1], r[2], r[3], this._spatialReference), o = t.imageSize, a2 = o.width, n2 = o.height, p = i2.width / a2;
    return { extent: i2, width: a2, height: n2, x: Math.round((e2.x - i2.xmin) / p), y: Math.round((i2.ymax - e2.y) / p) };
  }
  getFetchOptions() {
    return { timeExtent: this.timeExtent };
  }
};
a = e([c("esri.views.3d.layers.WMSLayerView3D")], a);
const n = a;
export {
  n as default
};
