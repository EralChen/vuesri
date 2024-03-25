import { aO as s, aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
import { w } from "./chunk-8zH-_H-O.js";
import { o } from "./chunk-xiZY91GV.js";
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
let a = class extends o(w) {
  constructor() {
    super(...arguments), this.type = "ogc-feature-3d";
  }
  initialize() {
    this.layer.serviceSupportsSpatialReference(this.view.spatialReference) || this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The spatial references supported by this OGC layer are incompatible with the spatial reference of the view", { layer: this.layer })));
  }
};
e([y()], a.prototype, "layer", void 0), a = e([c("esri.views.3d.layers.OGCFeatureLayerView3D")], a);
const p = a;
export {
  p as default
};
