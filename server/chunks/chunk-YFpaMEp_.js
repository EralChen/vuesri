import { eg as p, bD as u$1, aM as s$1, bG as C, bo as e, bp as y, br as c$1, dP as u } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { c, r } from "./chunk-HNaBfNyK.js";
import { O } from "./chunk-9-YhQQhc.js";
import { l } from "./chunk-UZskY1JT.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
let d = class extends n(u) {
  constructor() {
    super(...arguments), this.type = "graphics-3d", this.symbologySnappingSupported = true, this._slicePlaneEnabled = false, this.fullExtentInLocalViewSpatialReference = null, this.ignoresMemoryFactor = true;
  }
  initialize() {
    this._set("processor", new O({ owner: this, scaleVisibilityEnabled: true, frustumVisibilityEnabled: true })), this.addResolvingPromise(this.processor.initializePromise), this.addHandles(this.layer.on("graphic-update", (e2) => this.processor.graphicsCore.graphicUpdateHandler(e2))), this.addResolvingPromise(l(this).then((e2) => this.fullExtentInLocalViewSpatialReference = e2)), this.layer.internal ? this.notifyChange("updating") : this.addHandles(p(() => this.view?.basemapTerrain?.ready, () => () => this.notifyChange("updating"), { once: true }));
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
  async fetchPopupFeatures(e2, r2) {
    return r2?.clientGraphics ?? [];
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
  async elevationAlignPointsInFeatures(e2, s) {
    const { processor: i } = this;
    if (null == i?.graphics3DGraphics)
      throw new s$1("graphicslayerview3d:missing-processor", "A Graphics3D processor is needed to resolve graphics elevation.");
    const { graphics3DGraphics: t } = i, o = (e3) => "number" == typeof e3 ? t.get(e3) : void 0;
    return c(this.view, this.layer, o, e2, s);
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
    return { displayedNumberOfFeatures: this.loadedGraphics.length, maximumNumberOfFeatures: -1, totalNumberOfFeatures: -1, nodes: 0, core: null, updating: this.updating, elevationUpdating: this.processor?.elevationAlignment.updating ?? false, visibilityFrustum: !this.processor?.frustumVisibilitySuspended };
  }
  get usedMemory() {
    return this.processor?.graphicsCore?.usedMemory ?? 0;
  }
  get unloadedMemory() {
    return this.processor?.graphicsCore?.unprocessedMemoryEstimate;
  }
};
e([y()], d.prototype, "loadedGraphics", null), e([y({ readOnly: true })], d.prototype, "legendEnabled", null), e([y()], d.prototype, "layer", void 0), e([y({ readOnly: true })], d.prototype, "processor", void 0), e([y()], d.prototype, "_slicePlaneEnabled", void 0), e([y({ type: Boolean })], d.prototype, "slicePlaneEnabled", null), d = e([c$1("esri.views.3d.layers.GraphicsLayerView3D")], d);
const m = d;
export {
  m as default
};
