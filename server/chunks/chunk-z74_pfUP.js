import { aM as s$1, bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { _ } from "./chunk-P6X7E8x9.js";
import { o } from "./chunk-Lt9KDr6t.js";
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
let i = class extends o(_) {
  constructor() {
    super(...arguments), this.type = "ogc-feature-3d";
  }
  initialize() {
    this.layer.serviceSupportsSpatialReference(this.view.spatialReference) || this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible", "The spatial references supported by this OGC layer are incompatible with the spatial reference of the view", { layer: this.layer })));
  }
};
e([y()], i.prototype, "layer", void 0), i = e([c("esri.views.3d.layers.OGCFeatureLayerView3D")], i);
const p = i;
export {
  p as default
};