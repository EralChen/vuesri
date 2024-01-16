import { bn as P$1, eg as p, bD as u$1, eR as l$1, bh as V, bJ as d$1, bG as C, bo as e, bp as y, br as c, dP as u } from "./chunk-KFNcxJaF.js";
import { m, c as c$1, C as C$1, T, j, S as S$1, O as O$2 } from "./chunk-DofnyZMT.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { O as O$1 } from "./chunk-9-YhQQhc.js";
import { l } from "./chunk-UZskY1JT.js";
import { r } from "./chunk-F2pifch3.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
function _(e2) {
  return e2 instanceof m || e2 instanceof c$1 || e2 instanceof C$1 || e2 instanceof T || e2 instanceof j || e2 instanceof S$1 || e2 instanceof O$2;
}
let I = class extends n(u) {
  constructor() {
    super(...arguments), this.type = "route-3d", this.loadedGraphics = new r(), this._byObjectID = /* @__PURE__ */ new Map(), this.slicePlaneEnabled = false, this.fullExtentInLocalViewSpatialReference = null;
  }
  initialize() {
    this._set("processor", new O$1({ owner: this, scaleVisibilityEnabled: true, frustumVisibilityEnabled: true })), this.addResolvingPromise(this.processor.initializePromise), this._updatingHandles.addOnCollectionChange(() => this._routeItems, (e2) => this._routeItemsChanged(e2), P$1), this.addResolvingPromise(l(this).then((e2) => this.fullExtentInLocalViewSpatialReference = e2)), this.addHandles(p(() => this.view?.basemapTerrain?.ready, () => () => this.notifyChange("updating"), { once: true }));
  }
  destroy() {
    this._updatingHandles.removeAll(), this._set("processor", u$1(this.processor)), this._get("_routeItems")?.destroy();
  }
  get _routeItems() {
    return new l$1({ getCollections: () => [this.layer.pointBarriers, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.stops, this.layer.directionLines, this.layer.directionPoints, null != this.layer.routeInfo ? new V([this.layer.routeInfo]) : null] });
  }
  _routeItemsChanged(e2) {
    if (e2.removed.length) {
      this.loadedGraphics.removeMany(e2.removed.map((e3) => {
        const t = this._byObjectID.get(e3);
        return this._byObjectID.delete(e3), t;
      }));
      for (const t of e2.removed)
        this.removeHandles(t);
    }
    if (e2.added.length) {
      this.loadedGraphics.addMany(e2.added.map((e3) => {
        const t = e3.toGraphic();
        return this._byObjectID.set(e3, t), t;
      }));
      for (const t of e2.added)
        this.addHandles([d$1(() => t.geometry, (e3, r2) => {
          this._updateGraphic(t, "geometry", e3, r2);
        }), d$1(() => t.symbol, (e3, r2) => {
          this._updateGraphic(t, "symbol", e3, r2);
        })], t);
    }
  }
  get legendEnabled() {
    return this.canResume() && !this.processor?.frustumVisibilitySuspended;
  }
  getSuspendInfo() {
    const e2 = super.getSuspendInfo();
    return e2.outsideScaleRange = this.processor?.scaleVisibilitySuspended ?? false, e2.outsideOfView = this.processor?.frustumVisibilitySuspended ?? false, e2;
  }
  async fetchPopupFeatures(e2, t) {
    return t?.clientGraphics ?? [];
  }
  getHit(e2) {
    return this.processor.getHit(e2);
  }
  whenGraphicBounds(e2, t) {
    return this.processor.whenGraphicBounds(e2, t);
  }
  computeAttachmentOrigin(e2, t) {
    return this.processor?.computeAttachmentOrigin(e2, t);
  }
  getSymbolLayerSize(e2, t) {
    return this.processor.getSymbolLayerSize(e2, t);
  }
  async queryGraphics() {
    return new V(this.loadedGraphics.toArray());
  }
  maskOccludee(e2) {
    return this.processor.maskOccludee(e2);
  }
  highlight(e2) {
    return _(e2) && (e2 = this._byObjectID.get(e2)), this.processor.highlight(e2);
  }
  get updatePolicy() {
    return this.processor?.graphicsCore.effectiveUpdatePolicy || C.SYNC;
  }
  canResume() {
    return super.canResume() && !this.processor?.scaleVisibilitySuspended;
  }
  isUpdating() {
    return !(!this.processor?.updating && this.view?.basemapTerrain?.ready);
  }
  get performanceInfo() {
    return { displayedNumberOfFeatures: this.loadedGraphics.length, maximumNumberOfFeatures: -1, totalNumberOfFeatures: -1, nodes: 0, core: null, updating: this.updating, elevationUpdating: this.processor?.elevationAlignment.updating ?? false, visibilityFrustum: !this.processor?.frustumVisibilitySuspended };
  }
  _updateGraphic(e2, t, r2, s) {
    const o = this._byObjectID.get(e2);
    o[t] = r2, S.graphic = o, S.property = t, S.oldValue = s, S.newValue = r2, this.processor?.graphicsCore.graphicUpdateHandler(S);
  }
};
e([y()], I.prototype, "_routeItems", null), e([y()], I.prototype, "loadedGraphics", void 0), e([y({ readOnly: true })], I.prototype, "legendEnabled", null), e([y()], I.prototype, "layer", void 0), e([y({ readOnly: true })], I.prototype, "processor", void 0), e([y({ type: Boolean })], I.prototype, "slicePlaneEnabled", void 0), I = e([c("esri.views.3d.layers.RouteLayerView3D")], I);
const S = { graphic: null, property: null, oldValue: null, newValue: null }, O = I;
export {
  O as default
};
