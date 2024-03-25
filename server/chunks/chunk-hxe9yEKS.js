import { ca as e, cb as C, f9 as k, cm as e$1, eV as v, dB as c$1, ff as E, fg as r$1, fh as i, fi as S, fj as I, fk as e$2, fl as t, fm as m$1, fn as I$1, fo as te, aO as s, fp as N, fq as D$1, aV as e$3, aX as y, a_ as c, fr as e$4, eu as u$1 } from "./chunk-ejFG4zJ0.js";
import { m, j as j$1 } from "./chunk-HWDf1Z3J.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { T } from "./chunk--_aQKBqP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-X6Yd3gQb.js";
let x = class extends n(u$1) {
  constructor() {
    super(...arguments), this.type = "media-3d", this.drapeSourceType = e.RasterImage, this.updatePolicy = C.ASYNC, this._uidToElement = /* @__PURE__ */ new Map(), this._renderedElements = /* @__PURE__ */ new Map(), this._lastDrapingExtent = null, this._update = k(async (e2, t2, r) => {
      const i2 = await this._collectMediaElements(e2, t2, r);
      this._synchronizeRenderElements(i2);
    }, 0);
  }
  initialize() {
    this._renderer = this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);
    const e2 = () => this._updateWithLastDrapingExtent();
    this.addHandles([e$1(() => this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)), v(() => this.layer.effectiveSource, "change", e2), v(() => this.layer.effectiveSource, "refresh", e2)]), this._updatingHandles.add(() => this.suspended, e2);
  }
  setDrapingExtent(e2, t2) {
    this._lastDrapingExtent = { overlays: e2, spatialReference: t2 }, this._updateWithLastDrapingExtent();
  }
  getHit(e2) {
    const t2 = this._uidToElement.get(e2);
    return t2 ? { type: "media", element: t2, layer: this.layer } : null;
  }
  _updateWithLastDrapingExtent() {
    if (null == this._lastDrapingExtent || this.suspended)
      return void (this._renderer && this._synchronizeRenderElements(/* @__PURE__ */ new Set()));
    const { overlays: e2, spatialReference: t2 } = this._lastDrapingExtent;
    this._updatingHandles.addPromise(this._update(e2, t2).catch(() => {
    }));
  }
  async _collectMediaElements(e2, t2, r) {
    const i2 = this.layer.effectiveSource;
    return null == i2 ? /* @__PURE__ */ new Set() : new Set((await Promise.all(e2.map((e3) => i2.queryElements(c$1(e3.extent, t2), { signal: r })))).flat());
  }
  _synchronizeRenderElements(e2) {
    this._synchronizeRenderElementsRemove(e2), this._synchronizeRenderElementsAdd(e2);
  }
  _synchronizeRenderElementsRemove(e2) {
    const t2 = /* @__PURE__ */ new Set(), r = [];
    this._renderedElements.forEach((i2, n2) => {
      e2.has(n2) || (t2.add(n2), null != i2.renderData && r.push(i2.renderData.renderGeometry), this._removeElement(n2, i2));
    }), this._renderer.removeGeometries(r, E.REMOVE);
  }
  _synchronizeRenderElementsAdd(e2) {
    for (const t2 of e2)
      this._renderedElements.has(t2) || this._createRenderElement(t2);
  }
  _removeElement(e2, { renderData: t2, handle: r }) {
    this._destroyRenderData(t2), this._renderedElements.delete(e2), this._uidToElement.delete(e2.uid), r.remove();
  }
  async _createRenderElement(e2) {
    const t2 = new m({ spatialReference: this.view.spatialReference, element: e2 }), r = { renderData: null, handle: r$1([this._updatingHandles.add(() => e2.opacity, (e3) => {
      null != r.renderData && r.renderData.material.setParameters({ opacity: e3 });
    }), this._updatingHandles.add(() => t2.coords, () => {
      null != r.renderData ? this._updateGeometry(t2, r, r.renderData) : this._initializeRenderData(t2, r);
    }), this._updatingHandles.add(() => e2.content, () => this._initializeRenderData(t2, r)), i(t2)]) };
    this._renderedElements.set(e2, r), this._uidToElement.set(e2.uid, e2), this._updatingHandles.addPromise(e2.load().catch(() => {
    })), this._initializeRenderData(t2, r);
  }
  _initializeRenderData(e2, t$1) {
    const { coords: r, element: i2 } = e2, { contentWidth: n2, contentHeight: s2 } = i2;
    if (null == r || null == i2.content)
      return void (t$1.renderData = this._destroyRenderData(t$1.renderData));
    if (null != t$1.renderData)
      return;
    const a = this._createTexture(i2.content), d = a.load(this.view._stage.renderView.renderingContext);
    this.view._stage.add(a), S(d) && this._updatingHandles.addPromise(d);
    const l = new T({ initTextureTransparent: true, textureId: a.id, opacity: i2.opacity, transparent: true, perspectiveInterpolation: true }), m2 = this._getPositionAttributeArray(r), p = [0, 0, 1, 0, 1, 1, 0, 1], c2 = this._getPerspectiveDivideAttributeArray(m2, n2, s2), h = [0, 1, 2, 0, 2, 3], u = new I(l, [[e$2.POSITION, new t(m2, h, 3, true)], [e$2.UV0, new t(p, h, 2, true)], [e$2.PERSPECTIVEDIVIDE, new t(c2, h, 1, true)]]), y2 = new m$1(u, { layerUid: this.layer.uid, graphicUid: i2.uid });
    this._renderer.addGeometries([y2], E.ADD), t$1.renderData = { renderGeometry: y2, texture: a, material: l };
  }
  _updateGeometry(e2, t2, r) {
    const { coords: i2, element: n2 } = e2;
    if (null == i2 || null == n2.content)
      return void (t2.renderData = this._destroyRenderData(t2.renderData));
    const s2 = this._getPositionAttributeArray(i2);
    r.renderGeometry.geometry.setAttributeData(e$2.POSITION, s2);
    const a = this._getPerspectiveDivideAttributeArray(s2, n2.contentWidth, n2.contentHeight);
    r.renderGeometry.geometry.setAttributeData(e$2.PERSPECTIVEDIVIDE, a), this._renderer.modifyGeometries([r.renderGeometry], I$1.GEOMETRY);
  }
  _getPositionAttributeArray(e2) {
    const [t2, r, i2, n2] = e2.rings[0];
    return [t2[0], t2[1], te, n2[0], n2[1], te, i2[0], i2[1], te, r[0], r[1], te];
  }
  _getPerspectiveDivideAttributeArray(e2, t2, r) {
    j$1(P, [0, 0, t2, 0, t2, r, 0, r], [e2[0], e2[1], e2[3], e2[4], e2[6], e2[7], e2[9], e2[10]]);
    const i2 = P[6] / P[8] * t2, n2 = P[7] / P[8] * r;
    return [1, 1 + i2, 1 + i2 + n2, 1 + n2];
  }
  _destroyRenderData(e2) {
    if (null == e2)
      return null;
    const t2 = e2.texture;
    return t2.unload(), this.view._stage.remove(t2), this._renderer.removeGeometries([e2.renderGeometry], E.REMOVE), null;
  }
  _createTexture(e2) {
    const r = e2 instanceof HTMLImageElement ? e2.naturalWidth : e2.width, i2 = e2 instanceof HTMLImageElement ? e2.naturalHeight : e2.height;
    if ("getFrame" in e2)
      throw new s("media-layer-view-3d", "animation is not supported");
    return new N(e2, { wrap: { s: D$1.CLAMP_TO_EDGE, t: D$1.CLAMP_TO_EDGE }, preMultiplyAlpha: true, width: r, height: i2, mipmap: true, updateCallback: () => this.view.basemapTerrain.overlayManager.setDrawTexturesDirty() });
  }
  get test() {
    const e2 = this;
    return { get numberOfElements() {
      return e2._renderedElements.size;
    } };
  }
};
e$3([y({ readOnly: true })], x.prototype, "type", void 0), e$3([y()], x.prototype, "layer", void 0), x = e$3([c("esri.views.3d.layers.MediaLayerView3D")], x);
const P = e$4(), G = x;
export {
  G as default
};
