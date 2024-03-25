import { bX as P$1, f6 as p$1, c8 as u$1, fH as l$1, bQ as V$1, ce as d$1, cb as C, eB as t$1, aV as e, aX as y, a_ as c, eu as u$2 } from "./chunk-ejFG4zJ0.js";
import { m, c as c$1, O as O$1, f, j, g, a as O$2 } from "./chunk-fPzE2fLD.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { O } from "./chunk-CnrhdoMM.js";
import { l } from "./chunk-315ILBUn.js";
import { h } from "./chunk-QztbNmp9.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
function v(e2) {
  return e2 instanceof m || e2 instanceof c$1 || e2 instanceof O$1 || e2 instanceof f || e2 instanceof j || e2 instanceof g || e2 instanceof O$2;
}
let S = class extends n(u$2) {
  constructor() {
    super(...arguments), this.type = "route-3d", this.loadedGraphics = new h(), this._byObjectID = /* @__PURE__ */ new Map(), this.slicePlaneEnabled = false, this.fullExtentInLocalViewSpatialReference = null;
  }
  initialize() {
    this._set("processor", new O({ owner: this, scaleVisibilityEnabled: true, frustumVisibilityEnabled: true })), this.addResolvingPromise(this.processor.initializePromise), this._updatingHandles.addOnCollectionChange(() => this._routeItems, (e2) => this._routeItemsChanged(e2), P$1), this.addResolvingPromise(l(this).then((e2) => this.fullExtentInLocalViewSpatialReference = e2)), this.addHandles(p$1(() => this.view?.basemapTerrain?.ready, () => () => this.notifyChange("updating"), { once: true }));
  }
  destroy() {
    this._updatingHandles.removeAll(), this._set("processor", u$1(this.processor)), this._get("_routeItems")?.destroy();
  }
  get _routeItems() {
    return new l$1({ getCollections: () => [this.layer.pointBarriers, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.stops, this.layer.directionLines, this.layer.directionPoints, null != this.layer.routeInfo ? new V$1([this.layer.routeInfo]) : null] });
  }
  _routeItemsChanged(e2) {
    if (e2.removed.length) {
      this.loadedGraphics.removeMany(e2.removed.map((e3) => {
        const r = this._byObjectID.get(e3);
        return this._byObjectID.delete(e3), r;
      }));
      for (const r of e2.removed)
        this.removeHandles(r);
    }
    if (e2.added.length) {
      this.loadedGraphics.addMany(e2.added.map((e3) => {
        const r = e3.toGraphic();
        return this._byObjectID.set(e3, r), r;
      }));
      for (const r of e2.added)
        this.addHandles([d$1(() => r.geometry, (e3, t) => {
          this._updateGraphic(r, "geometry", e3, t);
        }), d$1(() => r.symbol, (e3, t) => {
          this._updateGraphic(r, "symbol", e3, t);
        })], r);
    }
  }
  get legendEnabled() {
    return this.canResume() && !this.processor?.frustumVisibilitySuspended;
  }
  getSuspendInfo() {
    const e2 = super.getSuspendInfo();
    return e2.outsideScaleRange = this.processor?.scaleVisibilitySuspended ?? false, e2.outsideOfView = this.processor?.frustumVisibilitySuspended ?? false, e2;
  }
  getHit(e2) {
    return this.processor.getHit(e2);
  }
  whenGraphicBounds(e2, r) {
    return this.processor.whenGraphicBounds(e2, r);
  }
  computeAttachmentOrigin(e2, r) {
    return this.processor?.computeAttachmentOrigin(e2, r);
  }
  getSymbolLayerSize(e2, r) {
    return this.processor.getSymbolLayerSize(e2, r);
  }
  async queryGraphics() {
    return new V$1(this.loadedGraphics.toArray());
  }
  maskOccludee(e2) {
    return this.processor.maskOccludee(e2);
  }
  highlight(e2) {
    return v(e2) && (e2 = this._byObjectID.get(e2)), this.processor.highlight(e2);
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
    return new t$1(this.processor?.graphicsCore.usedMemory ?? 0, this.loadedGraphics.length, -1, -1, 0, this.processor?.graphicsCore.performanceInfo ?? null);
  }
  _updateGraphic(e2, r, t, s) {
    const o = this._byObjectID.get(e2);
    o[r] = t, V.graphic = o, V.property = r, V.oldValue = s, V.newValue = t, this.processor?.graphicsCore.graphicUpdateHandler(V);
  }
};
e([y()], S.prototype, "_routeItems", null), e([y()], S.prototype, "loadedGraphics", void 0), e([y({ readOnly: true })], S.prototype, "legendEnabled", null), e([y()], S.prototype, "layer", void 0), e([y({ readOnly: true })], S.prototype, "processor", void 0), e([y({ type: Boolean })], S.prototype, "slicePlaneEnabled", void 0), S = e([c("esri.views.3d.layers.RouteLayerView3D")], S);
const V = { graphic: null, property: null, oldValue: null, newValue: null }, G = S;
export {
  G as default
};
