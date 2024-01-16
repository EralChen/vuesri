import { bC as s, bD as u$1, bo as e, bp as y, bE as o, br as c, bs as g$1 } from "./chunk-KFNcxJaF.js";
import { O } from "./chunk-9-YhQQhc.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
let a = class extends s(g$1) {
  constructor(r) {
    super(r), this.processor = null, this.slicePlaneEnabled = false, this.layer = new h();
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
  async fetchPopupFeatures(r, e2) {
    return e2?.clientGraphics ?? [];
  }
  highlight(r) {
    return this.processor.highlight(r);
  }
  maskOccludee(r) {
    return this.processor.maskOccludee(r);
  }
};
e([y({ readOnly: true })], a.prototype, "graphics", null), e([y()], a.prototype, "loadedGraphics", null), e([y({ readOnly: true })], a.prototype, "updating", null), e([y({ constructOnly: true })], a.prototype, "view", void 0), e([y()], a.prototype, "processor", void 0), e([y({ type: Boolean })], a.prototype, "slicePlaneEnabled", void 0), e([y()], a.prototype, "layer", void 0), a = e([c("esri.views.3d.layers.GraphicsView3D")], a);
class h extends o {
  constructor() {
    super(), this.type = "graphics-view-3d-dummy", this.id = this.uid;
  }
}
const n = a;
export {
  n as default
};
