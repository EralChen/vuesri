import { bo as e, bp as y, br as c$1, dZ as a, ba as x, aM as s$1, cP as D } from "./chunk-KFNcxJaF.js";
import { _ } from "./chunk-P6X7E8x9.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-K_eIouts.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-HNaBfNyK.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
import "./chunk-mk4KSkT-.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-UzDyJefO.js";
import "./chunk-vP0bHkve.js";
import "./chunk-UZskY1JT.js";
import "./chunk-7Z1hjEcP.js";
import "./chunk-F2pifch3.js";
import "./chunk-eM88eykE.js";
let c = class extends _ {
  constructor() {
    super(...arguments), this.type = "feature-3d", this.direct3DObjectFeatureLayerDisplayEnabled = a();
  }
  initialize() {
    const { layer: e2, view: t } = this;
    x(e2)?.operations.supportsQuery || this.addResolvingPromise(Promise.reject(new s$1("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e2 }))), null != e2.infoFor3D && (this.direct3DObjectFeatureLayerDisplayEnabled ? this._set("suspendResumeExtentMode", "computed") : this.addResolvingPromise(Promise.reject(new s$1("featurelayerview3d:unsupported-geometry-type", `Unsupported geometry type ${e2.geometryType}`)))), "mesh" !== e2.geometryType || D(e2.spatialReference, t.spatialReference) || this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible", "The spatial references of the feature layer is incompatible with the spatial reference of the view")));
  }
  get featureSpatialReference() {
    return this.view.featureTiles?.tilingScheme?.spatialReference;
  }
};
e([y({ constructOnly: true })], c.prototype, "direct3DObjectFeatureLayerDisplayEnabled", void 0), e([y()], c.prototype, "layer", void 0), c = e([c$1("esri.views.3d.layers.FeatureLayerView3D")], c);
const l = c;
export {
  l as default
};
