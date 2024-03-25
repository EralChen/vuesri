import { aV as e, aX as y, a_ as c$1, eO as a, bF as O, aO as s, dc as H$1 } from "./chunk-ejFG4zJ0.js";
import { w } from "./chunk-8zH-_H-O.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-qr0t-oSA.js";
import "./chunk-nxkTbLqW.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-P_v7gizd.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-HoJyfhBe.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-drfK378b.js";
import "./chunk-315ILBUn.js";
import "./chunk-ZRKw_7qF.js";
import "./chunk-QztbNmp9.js";
import "./chunk-GTnGZnu1.js";
let l = class extends w {
  constructor() {
    super(...arguments), this.type = "feature-3d", this.direct3DObjectFeatureLayerDisplayEnabled = a();
  }
  initialize() {
    const { layer: e2, view: t } = this;
    O(e2)?.operations.supportsQuery || this.addResolvingPromise(Promise.reject(new s("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e2 }))), null != e2.infoFor3D && (this.direct3DObjectFeatureLayerDisplayEnabled ? this._set("suspendResumeExtentMode", "computed") : this.addResolvingPromise(Promise.reject(new s("featurelayerview3d:unsupported-geometry-type", `Unsupported geometry type ${e2.geometryType}`)))), "mesh" !== e2.geometryType || H$1(e2.spatialReference, t.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references of the feature layer is incompatible with the spatial reference of the view")));
  }
  get featureSpatialReference() {
    return this.view.featureTiles?.tilingScheme?.spatialReference;
  }
};
e([y({ constructOnly: true })], l.prototype, "direct3DObjectFeatureLayerDisplayEnabled", void 0), e([y()], l.prototype, "layer", void 0), l = e([c$1("esri.views.3d.layers.FeatureLayerView3D")], l);
const c = l;
export {
  c as default
};
