import { bo as e, bs as g$1, bF as e$1, bm as h$1, bG as C, bH as a$1, bI as b, bJ as d$1, bK as C$1, bD as u$1, bL as i, bM as l, bN as b$1, bO as c, bP as t, bQ as b$2, bf as c$1, bh as V, bR as A, bp as y$1, br as c$2, bS as e$2, bT as R, bU as s$1 } from "./chunk-KFNcxJaF.js";
import { F as Fe, p, y, s, u } from "./chunk-rv0-OtqZ.js";
let O = class extends g$1 {
  constructor(t2) {
    super(t2), this.type = "graphics-3d", this.graphicsCore = null, this.drapeSourceType = e$1.Features, this.scaleVisibilityEnabled = false, this.frustumVisibilityEnabled = false, this._suspendResumeExtent = null, this._updatingHandles = new h$1();
  }
  initialize() {
    const { layer: t2 } = this, i2 = "effectiveScaleRange" in t2 ? t2 : null, e2 = this.scaleVisibilityEnabled && null != i2, s$12 = new Fe({ owner: this, layer: this.owner.layer, preferredUpdatePolicy: C.SYNC, graphicSymbolSupported: true, componentFactories: { elevationAlignment: (t3, i3) => new p({ graphicsCoreOwner: this, graphicsCore: t3, queryGraphicUIDsInExtent: i3, elevationProvider: this.view.elevationProvider }), scaleVisibility: e2 ? (t3, e3) => new y({ graphicsCoreOwner: this, layer: i2, queryGraphicUIDsInExtent: e3, graphicsCore: t3, basemapTerrain: this.owner.view.basemapTerrain }) : null, objectStates: (t3) => new s(t3) } });
    if (this._set("graphicsCore", s$12), this.frustumVisibilityEnabled && this._set("frustumVisibility", new u({ graphicsCoreOwner: this })), "fullOpacity" in this.owner) {
      const t3 = this.owner;
      this._updatingHandles.add(() => t3.fullOpacity, () => this.graphicsCore.opacityChange());
    }
    if ("elevationInfo" in t2) {
      const i3 = t2;
      this._updatingHandles.add(() => i3.elevationInfo, (t3, i4) => {
        a$1(t3, i4) && this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange());
      });
    }
    this._set("initializePromise", this._initializeAsync()), this._updatingHandles.addPromise(this.initializePromise);
  }
  async _initializeAsync() {
    try {
      await this.graphicsCore.initializePromise;
    } catch (t2) {
      if (b(t2))
        return;
      throw t2;
    }
    this.destroyed || (this.addHandles(d$1(() => this.view.clippingArea, () => this._updateClippingExtent(), C$1)), this._updateClippingExtent(), this._setupSuspendResumeExtent(), this.graphicsCore.startCreateGraphics());
  }
  destroy() {
    this._updatingHandles.destroy(), this._set("frustumVisibility", u$1(this.frustumVisibility)), this._set("graphicsCore", u$1(this.graphicsCore));
  }
  get layer() {
    return this.owner.layer;
  }
  get view() {
    return this.owner.view;
  }
  get scaleVisibility() {
    return this.graphicsCore?.scaleVisibility;
  }
  get elevationAlignment() {
    return this.graphicsCore?.elevationAlignment;
  }
  get objectStates() {
    return this.graphicsCore?.objectStates;
  }
  get scaleVisibilitySuspended() {
    return !(null == this.scaleVisibility || !this.scaleVisibility.suspended);
  }
  get frustumVisibilitySuspended() {
    return null != this.frustumVisibility && this.frustumVisibility.suspended;
  }
  get suspended() {
    return this.owner.suspended ?? false;
  }
  get updating() {
    return !!(this.graphicsCore?.updating || null != this.scaleVisibility && this.scaleVisibility.updating || null != this.frustumVisibility && this.frustumVisibility.updating || this._updatingHandles.updating);
  }
  get graphics3DGraphics() {
    return this.graphicsCore?.graphics3DGraphics;
  }
  get graphics3DGraphicsByObjectID() {
    return this.graphicsCore?.graphics3DGraphicsByObjectID;
  }
  get loadedGraphics() {
    return this.owner.loadedGraphics;
  }
  get fullOpacity() {
    return this.owner.fullOpacity ?? 1;
  }
  get slicePlaneEnabled() {
    return this.owner.slicePlaneEnabled;
  }
  get updatePolicy() {
    return this.owner.updatePolicy;
  }
  notifyGraphicGeometryChanged(t2) {
    this.graphicsCore.notifyGraphicGeometryChanged(t2);
  }
  notifyGraphicVisibilityChanged(t2) {
    this.graphicsCore.notifyGraphicVisibilityChanged(t2);
  }
  getRenderingInfo(t2, i$1, e2) {
    const s2 = i(t2, { renderer: i$1, arcade: e2 });
    if (s2?.color) {
      const t3 = s2.color;
      t3[0] = t3[0] / 255, t3[1] = t3[1] / 255, t3[2] = t3[2] / 255;
    }
    return s2;
  }
  getRenderingInfoAsync(t2, i2, e2, s2) {
    return l(t2, { renderer: i2, arcade: e2, ...s2 });
  }
  getHit(t2) {
    if (this.owner.loadedGraphics) {
      const i2 = this.owner.loadedGraphics.find((i3) => i3.uid === t2);
      if (i2) {
        const t3 = this.layer instanceof b$1 ? this.layer : null, e2 = c(i2, t3);
        return { type: "graphic", graphic: e2, layer: e2.layer };
      }
    }
    return null;
  }
  whenGraphicBounds(t2, i2) {
    return this.graphicsCore ? this.graphicsCore.whenGraphicBounds(t2, i2) : Promise.reject();
  }
  computeAttachmentOrigin(t2, i2) {
    return this.graphicsCore ? this.graphicsCore.computeAttachmentOrigin(t2, i2) : null;
  }
  getSymbolLayerSize(t2, i2) {
    return this.graphicsCore ? this.graphicsCore.getSymbolLayerSize(t2, i2) : null;
  }
  maskOccludee(t$1) {
    const { set: i2, handle: e2 } = this.objectStates.acquireSet(t.MaskOccludee, null);
    return this.objectStates.setUid(i2, t$1.uid), e2;
  }
  highlight(t$1) {
    if (t$1 instanceof b$2)
      return P;
    if ("number" == typeof t$1)
      return this.highlight([t$1]);
    if (t$1 instanceof c$1)
      return this.highlight([t$1]);
    if (t$1 instanceof V && (t$1 = t$1.toArray()), Array.isArray(t$1) && t$1.length > 0) {
      if (t$1[0] instanceof c$1) {
        const i2 = t$1.map((t2) => t2.uid), { set: e2, handle: s2 } = this.objectStates.acquireSet(t.Highlight, null);
        return this.objectStates.setUids(e2, i2), s2;
      }
      if ("number" == typeof t$1[0]) {
        const i2 = t$1, { set: e2, handle: s2 } = this.objectStates.acquireSet(t.Highlight, null);
        return this.objectStates.setObjectIds(e2, i2), s2;
      }
    }
    return P;
  }
  _setupSuspendResumeExtent() {
    const { scaleVisibility: t2, frustumVisibility: i2 } = this;
    if (null == t2 && null == i2)
      return;
    const e2 = ({ computedExtent: e3, extentPadding: s2 }) => {
      this._suspendResumeExtent = R(e3, this._suspendResumeExtent, s$1, s2), null != t2 && t2.setExtent(this._suspendResumeExtent), null != i2 && i2.setExtent(this._suspendResumeExtent);
    };
    this.addHandles(d$1(() => ({ computedExtent: this.graphicsCore?.computedExtent, extentPadding: this.graphicsCore?.extentPadding }), (t3) => e2(t3), A));
  }
  _updateClippingExtent() {
    const t2 = this.view.clippingArea;
    this.graphicsCore.setClippingExtent(t2, this.view.spatialReference) && this.graphicsCore.recreateAllGraphics();
  }
};
e([y$1()], O.prototype, "type", void 0), e([y$1({ constructOnly: true })], O.prototype, "owner", void 0), e([y$1()], O.prototype, "layer", null), e([y$1()], O.prototype, "view", null), e([y$1({ constructOnly: true })], O.prototype, "graphicsCore", void 0), e([y$1()], O.prototype, "scaleVisibility", null), e([y$1({ constructOnly: true })], O.prototype, "frustumVisibility", void 0), e([y$1()], O.prototype, "elevationAlignment", null), e([y$1()], O.prototype, "objectStates", null), e([y$1()], O.prototype, "scaleVisibilitySuspended", null), e([y$1({ readOnly: true })], O.prototype, "frustumVisibilitySuspended", null), e([y$1()], O.prototype, "suspended", null), e([y$1({ readOnly: true })], O.prototype, "updating", null), e([y$1()], O.prototype, "loadedGraphics", null), e([y$1()], O.prototype, "fullOpacity", null), e([y$1()], O.prototype, "slicePlaneEnabled", null), e([y$1()], O.prototype, "drapeSourceType", void 0), e([y$1()], O.prototype, "updatePolicy", null), e([y$1({ constructOnly: true })], O.prototype, "scaleVisibilityEnabled", void 0), e([y$1({ constructOnly: true })], O.prototype, "frustumVisibilityEnabled", void 0), e([y$1()], O.prototype, "initializePromise", void 0), O = e([c$2("esri.views.3d.layers.graphics.GraphicsProcessor")], O);
const P = e$2();
export {
  O
};
