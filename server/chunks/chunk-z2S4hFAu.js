import { f6 as p$1, c8 as u$1, aO as s, cb as C, eB as t$1, aV as e, aX as y$1, a_ as c, eu as u$2 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { m as m$1, r } from "./chunk-nxkTbLqW.js";
import { O } from "./chunk-CnrhdoMM.js";
import { l } from "./chunk-315ILBUn.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
let m = class extends n(u$2) {
  constructor() {
    super(...arguments), this.type = "graphics-3d", this.symbologySnappingSupported = true, this._slicePlaneEnabled = false, this.fullExtentInLocalViewSpatialReference = null, this.ignoresMemoryFactor = true;
  }
  initialize() {
    this._set("processor", new O({ owner: this, scaleVisibilityEnabled: true, frustumVisibilityEnabled: true })), this.addResolvingPromise(this.processor.initializePromise), this.addHandles(this.layer.on("graphic-update", (e2) => this.processor.graphicsCore.graphicUpdateHandler(e2))), this.addResolvingPromise(l(this).then((e2) => this.fullExtentInLocalViewSpatialReference = e2)), this.layer.internal ? this.notifyChange("updating") : this.addHandles(p$1(() => this.view?.basemapTerrain?.ready, () => () => this.notifyChange("updating"), { once: true }));
  }
  destroy() {
    this._updatingHandles.removeAll(), this._set("processor", u$1(this.processor));
  }
  get loadedGraphics() {
    return this.layer.graphics;
  }
  get legendEnabled() {
    return this.canResume() && !this.processor?.frustumVisibilitySuspended;
  }
  get slicePlaneEnabled() {
    const e2 = this.layer.internal;
    return this._slicePlaneEnabled && !e2;
  }
  set slicePlaneEnabled(e2) {
    this._slicePlaneEnabled = e2;
  }
  getSuspendInfo() {
    const e2 = super.getSuspendInfo();
    return e2.outsideScaleRange = this.processor?.scaleVisibilitySuspended ?? false, e2.outsideOfView = this.processor?.frustumVisibilitySuspended ?? false, e2;
  }
  getHit(e2) {
    return this.processor.getHit(e2);
  }
  whenGraphicBounds(e2, r2) {
    return this.processor.whenGraphicBounds(e2, r2);
  }
  computeAttachmentOrigin(e2, r2) {
    return this.processor?.computeAttachmentOrigin(e2, r2);
  }
  getSymbolLayerSize(e2, r2) {
    return this.processor.getSymbolLayerSize(e2, r2);
  }
  queryGraphics() {
    return Promise.resolve(this.loadedGraphics);
  }
  maskOccludee(e2) {
    return this.processor.maskOccludee(e2);
  }
  highlight(e2) {
    return this.processor.highlight(e2);
  }
  async elevationAlignPointsInFeatures(e2, s$1) {
    const { processor: i } = this;
    if (null == i?.graphics3DGraphics)
      throw new s("graphicslayerview3d:missing-processor", "A Graphics3D processor is needed to resolve graphics elevation.");
    const { graphics3DGraphics: t } = i, o = (e3) => "number" == typeof e3 ? t.get(e3) : void 0;
    return m$1(this.view, this.layer, o, e2, s$1);
  }
  async queryForSymbologySnapping(e2, r$1) {
    return r(this.processor, e2, r$1);
  }
  get updatePolicy() {
    return this.processor?.graphicsCore.effectiveUpdatePolicy || C.SYNC;
  }
  canResume() {
    return super.canResume() && !this.processor?.scaleVisibilitySuspended;
  }
  isUpdating() {
    return this.view && this.layer && !(!this.processor?.updating && (this.layer.internal || this.view.basemapTerrain?.ready));
  }
  get performanceInfo() {
    return new t$1(this.usedMemory, this.loadedGraphics.length, -1, -1);
  }
  get usedMemory() {
    return this.processor?.graphicsCore?.usedMemory ?? 0;
  }
  get unloadedMemory() {
    return this.processor?.graphicsCore?.unprocessedMemoryEstimate;
  }
};
e([y$1()], m.prototype, "loadedGraphics", null), e([y$1({ readOnly: true })], m.prototype, "legendEnabled", null), e([y$1()], m.prototype, "layer", void 0), e([y$1({ readOnly: true })], m.prototype, "processor", void 0), e([y$1()], m.prototype, "_slicePlaneEnabled", void 0), e([y$1({ type: Boolean })], m.prototype, "slicePlaneEnabled", null), m = e([c("esri.views.3d.layers.GraphicsLayerView3D")], m);
const y = m;
export {
  y as default
};
