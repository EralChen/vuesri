import { c7 as s, c8 as u$1, aV as e, aX as y, c9 as o, a_ as c, bZ as S$1 } from "./chunk-ejFG4zJ0.js";
import { O } from "./chunk-CnrhdoMM.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
let a = class extends s(S$1) {
  constructor(r) {
    super(r), this.processor = null, this.slicePlaneEnabled = false, this.layer = new h(), this.suspended = false;
  }
  initialize() {
    this._set("processor", new O({ owner: this }));
  }
  destroy() {
    this._set("processor", u$1(this.processor));
  }
  get graphics() {
    return this.view?.graphics;
  }
  get loadedGraphics() {
    return this.graphics;
  }
  get updating() {
    return !!this.processor?.updating;
  }
  get symbolUpdateType() {
    return this.processor.graphicsCore.symbolUpdateType;
  }
  getHit(r) {
    return this.processor.getHit(r);
  }
  whenGraphicBounds(r, e2) {
    return this.processor.whenGraphicBounds(r, e2);
  }
  graphicChanged(r) {
    this.processor.graphicsCore.graphicUpdateHandler(r);
  }
  get updatePolicy() {
    return this.processor.graphicsCore.effectiveUpdatePolicy;
  }
  async queryGraphics() {
    return this.loadedGraphics;
  }
  highlight(r) {
    return this.processor.highlight(r);
  }
  maskOccludee(r) {
    return this.processor.maskOccludee(r);
  }
};
e([y({ readOnly: true })], a.prototype, "graphics", null), e([y()], a.prototype, "loadedGraphics", null), e([y({ readOnly: true })], a.prototype, "updating", null), e([y({ constructOnly: true })], a.prototype, "view", void 0), e([y()], a.prototype, "processor", void 0), e([y({ type: Boolean })], a.prototype, "slicePlaneEnabled", void 0), e([y()], a.prototype, "layer", void 0), e([y()], a.prototype, "suspended", void 0), a = e([c("esri.views.3d.layers.GraphicsView3D")], a);
class h extends o {
  constructor() {
    super(), this.type = "graphics-view-3d-dummy", this.id = this.uid;
  }
}
const n = a;
export {
  n as default
};
