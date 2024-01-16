import { bF as e, bG as C, ej as k, bS as e$1, e3 as v, da as c$1, ep as E, eq as t, er as c, es as E$1, et as I, eu as e$2, ev as t$1, ew as h, ex as I$1, ey as se, aM as s$1, ez as N, eA as D, bo as e$3, bp as y, br as c$2, eB as e$4, dP as u } from "./chunk-KFNcxJaF.js";
import { i, j } from "./chunk-_6WFmAiF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { g as g$1 } from "./chunk-zw9UPZSi.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-NkuZ7t90.js";
let x = class extends n(u) {
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
    const t$12 = new i({ spatialReference: this.view.spatialReference, element: e2 }), r = { renderData: null, handle: t([this._updatingHandles.add(() => e2.opacity, (e3) => {
      null != r.renderData && r.renderData.material.setParameters({ opacity: e3 });
    }), this._updatingHandles.add(() => t$12.coords, () => {
      null != r.renderData ? this._updateGeometry(t$12, r, r.renderData) : this._initializeRenderData(t$12, r);
    }), this._updatingHandles.add(() => e2.content, () => this._initializeRenderData(t$12, r)), c(t$12)]) };
    this._renderedElements.set(e2, r), this._uidToElement.set(e2.uid, e2), this._updatingHandles.addPromise(e2.load().catch(() => {
    })), this._initializeRenderData(t$12, r);
  }
  _initializeRenderData(e2, t2) {
    const { coords: r, element: i2 } = e2, { contentWidth: n2, contentHeight: s } = i2;
    if (null == r || null == i2.content)
      return void (t2.renderData = this._destroyRenderData(t2.renderData));
    if (null != t2.renderData)
      return;
    const a = this._createTexture(i2.content), d = a.load(this.view._stage.renderView.renderingContext);
    this.view._stage.add(a), E$1(d) && this._updatingHandles.addPromise(d);
    const l = new g$1({ initTextureTransparent: true, textureId: a.id, opacity: i2.opacity, transparent: true, perspectiveInterpolation: true }), m = this._getPositionAttributeArray(r), p = [0, 0, 1, 0, 1, 1, 0, 1], c2 = this._getPerspectiveDivideAttributeArray(m, n2, s), h$1 = [0, 1, 2, 0, 2, 3], u2 = new I(l, [[e$2.POSITION, new t$1(m, h$1, 3, true)], [e$2.UV0, new t$1(p, h$1, 2, true)], [e$2.PERSPECTIVEDIVIDE, new t$1(c2, h$1, 1, true)]]), y2 = new h(u2, { layerUid: this.layer.uid, graphicUid: i2.uid });
    this._renderer.addGeometries([y2], E.ADD), t2.renderData = { renderGeometry: y2, texture: a, material: l };
  }
  _updateGeometry(e2, t2, r) {
    const { coords: i2, element: n2 } = e2;
    if (null == i2 || null == n2.content)
      return void (t2.renderData = this._destroyRenderData(t2.renderData));
    const s = this._getPositionAttributeArray(i2);
    r.renderGeometry.geometry.setAttributeData(e$2.POSITION, s);
    const a = this._getPerspectiveDivideAttributeArray(s, n2.contentWidth, n2.contentHeight);
    r.renderGeometry.geometry.setAttributeData(e$2.PERSPECTIVEDIVIDE, a), this._renderer.modifyGeometries([r.renderGeometry], I$1.GEOMETRY);
  }
  _getPositionAttributeArray(e2) {
    const [t2, r, i2, n2] = e2.rings[0];
    return [t2[0], t2[1], se, n2[0], n2[1], se, i2[0], i2[1], se, r[0], r[1], se];
  }
  _getPerspectiveDivideAttributeArray(e2, t2, r) {
    j(P, [0, 0, t2, 0, t2, r, 0, r], [e2[0], e2[1], e2[3], e2[4], e2[6], e2[7], e2[9], e2[10]]);
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
      throw new s$1("media-layer-view-3d", "animation is not supported");
    return new N(e2, { wrap: { s: D.CLAMP_TO_EDGE, t: D.CLAMP_TO_EDGE }, preMultiplyAlpha: true, width: r, height: i2, mipmap: true, updateCallback: () => this.view.basemapTerrain.overlayManager.setDrawTexturesDirty() });
  }
  get test() {
    const e2 = this;
    return { get numberOfElements() {
      return e2._renderedElements.size;
    } };
  }
};
e$3([y({ readOnly: true })], x.prototype, "type", void 0), e$3([y()], x.prototype, "layer", void 0), x = e$3([c$2("esri.views.3d.layers.MediaLayerView3D")], x);
const P = e$4(), M = x;
export {
  M as default
};
