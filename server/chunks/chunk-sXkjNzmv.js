import { cH as d, m8 as i, gk as n, ce as d$1, bX as P$1, ma as r$1, f6 as p$1, n_ as o, aT as s$1, aO as s, lG as e, fq as D$1, m as m$1, h as h$1, ml as F, o as o$1, iy as o$2, fr as e$1, cD as n$1, gy as c, m9 as e$2, n$ as h, cu as E$1, me as L, mf as o$3, iz as i$1, mg as M, mh as t, mi as f$1, mj as r, mk as h$2, b7 as s$2, o0 as mt, gJ as m$2, eu as u$1, bQ as V$1, eV as v$2, gM as m, gN as r$2, o1 as s$3, cd as b$1, aC as M$1, eL as r$3, aV as e$3, aX as y, a_ as c$1, b6 as u$2, o2 as x } from "./chunk-ejFG4zJ0.js";
import { j as j$1, m as m$3 } from "./chunk-HWDf1Z3J.js";
import "./chunk-a-_9RY_Z.js";
import "./chunk-xXBI18-w.js";
import "./chunk-bVBkTso-.js";
import { f } from "./chunk-uHRm7Cl7.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-jrhFla2W.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-drfK378b.js";
const v$1 = e$1(), _$1 = { none: d.None, loop: d.Loop, oscillate: d.Oscillate };
function V(e2) {
  return e2 ? { ...e2, playAnimation: e2.playing, repeatType: e2.repeatType ? _$1[e2.repeatType] : void 0 } : {};
}
class j extends i {
  constructor(i2) {
    super(), this.elementView = i2, this.isWrapAround = false, this.perspectiveTransform = n(), this._playHandle = null, this._vertices = new Float32Array(20), this._handles = [], this._handles.push(d$1(() => this.elementView.element.opacity, (e2) => this.opacity = e2, P$1), d$1(() => [this.elementView.coords], () => {
      this.requestRender();
    }, P$1), d$1(() => ["animationOptions" in this.elementView.element && this.elementView.element.animationOptions], () => {
      this._playHandle?.remove(), this.texture = r$1(this.texture), this.requestRender();
    }, P$1), p$1(() => this.elementView.element.loaded, () => {
      const e2 = this.elementView.element;
      this.ready(), "video" === e2.type && null != e2.content && this._handles.push(o(e2.content, "play", () => this.requestRender()));
    }, P$1)), i2.element.load().catch((t2) => {
      s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s("element-load-error", "Element cannot be displayed", { element: i2, error: t2 }));
    });
  }
  getMesh(e2) {
    throw new Error("Method not implemented.");
  }
  destroy() {
    this._playHandle?.remove(), this._handles.forEach((e2) => e2.remove()), this.texture = r$1(this.texture);
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e$12) {
    const { context: t2 } = e$12, r2 = this.elementView.element.content;
    if (null != r2) {
      const e$13 = r2 instanceof HTMLImageElement, s2 = r2 instanceof HTMLVideoElement, i2 = e$13 ? r2.naturalWidth : s2 ? r2.videoWidth : r2.width, o2 = e$13 ? r2.naturalHeight : s2 ? r2.videoHeight : r2.height;
      if (this._updatePerspectiveTransform(i2, o2), this.texture)
        s2 && !r2.paused && (this.texture.setData(r2), this.requestRender(), this.texture.generateMipmap());
      else {
        const e$14 = new e();
        if (e$14.wrapMode = D$1.CLAMP_TO_EDGE, e$14.preMultiplyAlpha = true, e$14.width = i2, e$14.height = o2, "getFrame" in r2) {
          const s3 = (r3) => {
            this.texture ? this.texture.setData(r3) : this.texture = new m$1(t2, e$14, r3), this.requestRender();
          };
          "animationOptions" in this.elementView.element && (this._playHandle = f(r2, V(this.elementView.element.animationOptions), null, s3));
        } else
          this.texture = new m$1(t2, e$14, r2);
        this.texture.generateMipmap(), s2 && !r2.paused && this.requestRender();
      }
    }
    super.beforeRender(e$12);
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e2, t2) {
    const r2 = this.elementView.coords;
    if (null == r2)
      return;
    const [s2, i2, o2, n2] = r2.rings[0], a = this._vertices, { x: l, y: m2 } = e2, h2 = 0 !== t2;
    h2 ? a.set([i2[0] - l, i2[1] - m2, s2[0] - l, s2[1] - m2, o2[0] - l, o2[1] - m2, n2[0] - l, n2[1] - m2, n2[0] - l, n2[1] - m2, i2[0] + t2 - l, i2[1] - m2, i2[0] + t2 - l, i2[1] - m2, s2[0] + t2 - l, s2[1] - m2, o2[0] + t2 - l, o2[1] - m2, n2[0] + t2 - l, n2[1] - m2]) : a.set([i2[0] - l, i2[1] - m2, s2[0] - l, s2[1] - m2, o2[0] - l, o2[1] - m2, n2[0] - l, n2[1] - m2]), this.isWrapAround = h2;
  }
  getVAO(e2, t2, r2) {
    if (null == this.elementView.coords)
      return null;
    const s2 = this._vertices;
    if (this._vao)
      this._geometryVbo.setData(s2);
    else {
      this._geometryVbo = h$1.createVertex(e2, F.DYNAMIC_DRAW, s2);
      const i2 = h$1.createVertex(e2, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]));
      this._vao = new o$1(e2, r2, t2, { geometry: this._geometryVbo, tex: i2 });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e2, t2) {
    const r2 = this._vertices;
    j$1(v$1, [0, 0, e2, 0, 0, t2, e2, t2], [r2[0], r2[1], r2[4], r2[5], r2[2], r2[3], r2[6], r2[7]]), o$2(this.perspectiveTransform, v$1[6] / v$1[8] * e2, v$1[7] / v$1[8] * t2);
  }
}
class u extends n$1 {
  constructor() {
    super(...arguments), this._localOrigin = c(0, 0), this._viewStateId = -1, this._dvsMat3 = e$2();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(t2) {
    this._updateMatrices(t2), this._updateOverlays(t2, this.children);
    for (const e2 of this.children)
      e2.beforeRender(t2);
  }
  prepareRenderPasses(t2) {
    const e2 = t2.registerRenderPass({ name: "overlay", brushes: [h.overlay], target: () => this.children, drawPhase: E$1.MAP });
    return [...super.prepareRenderPasses(t2), e2];
  }
  _updateMatrices(t$1) {
    const { state: a } = t$1, { id: p, size: m2, pixelRatio: d2, resolution: f2, rotation: h2, viewpoint: u2, displayMat3: M$12 } = a;
    if (this._viewStateId === p)
      return;
    const v2 = Math.PI / 180 * h2, g = d2 * m2[0], _2 = d2 * m2[1], { x: w2, y: b2 } = u2.targetGeometry, y2 = L(w2, a.spatialReference);
    this._localOrigin.x = y2, this._localOrigin.y = b2;
    const j2 = f2 * g, x2 = f2 * _2, R2 = o$3(this._dvsMat3);
    i$1(R2, R2, M$12), M(R2, R2, t(g / 2, _2 / 2)), f$1(R2, R2, r(g / j2, -_2 / x2, 1)), h$2(R2, R2, -v2), this._viewStateId = p;
  }
  _updateOverlays(t2, e2) {
    const { state: r2 } = t2, { rotation: s2, spatialReference: o2, worldScreenWidth: i2, size: a, viewpoint: n2 } = r2, l = this._localOrigin;
    let c2 = 0;
    const d2 = s$2(o2);
    if (d2 && o2.isWrappable) {
      const t3 = a[0], p = a[1], f2 = 180 / Math.PI * s2, h2 = Math.abs(Math.cos(f2)), u2 = Math.abs(Math.sin(f2)), M2 = Math.round(t3 * h2 + p * u2), [v2, g] = d2.valid, _2 = mt(o2), { x: w2, y: b2 } = n2.targetGeometry, y2 = [w2, b2], j2 = [0, 0];
      r2.toScreen(j2, y2);
      const x2 = [0, 0];
      let R2;
      R2 = M2 > i2 ? 0.5 * i2 : 0.5 * M2;
      const P = Math.floor((w2 + 0.5 * _2) / _2), O = v2 + P * _2, C = g + P * _2, I = [j2[0] + R2, 0];
      r2.toMap(x2, I), x2[0] > C && (c2 = _2), I[0] = j2[0] - R2, r2.toMap(x2, I), x2[0] < O && (c2 = -_2);
      for (const r3 of e2) {
        const t4 = r3.elementView.bounds;
        if (null == t4)
          continue;
        const [e3, , s3] = t4;
        e3 < v2 && s3 > v2 ? r3.updateDrawCoords(l, _2) : s3 > g && e3 < g ? r3.updateDrawCoords(l, -_2) : r3.updateDrawCoords(l, c2);
      }
    } else
      for (const p of e2)
        p.updateDrawCoords(l, c2);
  }
}
let b = class extends m$2(u$1) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this.layer = null, this.elements = new V$1();
  }
  attach() {
    this.addAttachHandles([v$2(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((e2) => this._updateTile(e2)), this.requestUpdate();
    }), v$2(() => this.layer.effectiveSource, "change", ({ element: e2 }) => this._elementUpdateHandler(e2))]), this._overlayContainer = new u(), this.container.addChild(this._overlayContainer), this._fetchQueue = new m({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (e2, t2) => this._queryElements(e2, t2) }), this._tileStrategy = new r$2({ cachePolicy: "purge", resampling: true, acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear(), this._debugGraphicsView?.destroy();
  }
  supportsSpatialReference(e2) {
    return true;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  update(e2) {
    this._tileStrategy.update(e2), this._debugGraphicsView?.update(e2);
  }
  async hitTest(e2, t2) {
    const r2 = [], s2 = e2.normalize(), i2 = [s2.x, s2.y];
    for (const { projectedElement: { normalizedCoords: o2, element: n2 } } of this._elementReferences.values())
      null != o2 && s$3(o2.rings, i2) && r2.push({ type: "media", element: n2, layer: this.layer, mapPoint: e2, sourcePoint: n2.toSource(e2) });
    return r2.reverse();
  }
  canResume() {
    return null != this.layer.source && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updateTile(e2));
  }
  _acquireTile(e2) {
    const t2 = new E(e2.clone());
    return this._updateTile(t2), t2;
  }
  _updateTile(e2) {
    this._updatingHandles.addPromise(this._fetchQueue.push(e2.key).then((t2) => {
      const [r2, s2] = e2.setElements(t2);
      this._referenceElements(e2, r2), this._dereferenceElements(e2, s2), this.requestUpdate();
    }, (e3) => {
      b$1(e3) || s$1.getLogger(this).error(e3);
    }));
  }
  _releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), e2.elements && this._dereferenceElements(e2, e2.elements), this.requestUpdate();
  }
  async _queryElements(e2, t2) {
    const r2 = this.layer.effectiveSource;
    if (null == r2)
      return [];
    this.view.featuresTilingScheme.getTileBounds(w, e2, true);
    const s2 = new M$1({ xmin: w[0], ymin: w[1], xmax: w[2], ymax: w[3], spatialReference: this.view.spatialReference });
    return r2.queryElements(s2, t2);
  }
  _referenceElements(e2, t2) {
    if (null != this.layer.source)
      for (const r2 of t2)
        this._referenceElement(e2, r2);
  }
  _referenceElement(e2, t2) {
    r$3(this._elementReferences, t2.uid, () => {
      const e3 = new m$3({ element: t2, spatialReference: this.view.spatialReference }), r2 = new j(e3);
      this._overlayContainer.addChild(r2), this.elements.add(t2);
      let s2 = null;
      return { tiles: /* @__PURE__ */ new Set(), projectedElement: e3, overlay: r2, debugGraphic: s2 };
    }).tiles.add(e2);
  }
  _dereferenceElements(e2, t2) {
    for (const r2 of t2)
      this._dereferenceElement(e2, r2);
  }
  _dereferenceElement(e2, t2) {
    const r2 = this._elementReferences.get(t2.uid);
    r2.tiles.delete(e2), r2.tiles.size || (this._overlayContainer.removeChild(r2.overlay), r2.overlay.destroy(), r2.projectedElement.destroy(), this._elementReferences.delete(t2.uid), this.elements.remove(t2), this._debugGraphicsView?.graphics.remove(r2.debugGraphic));
  }
  _elementUpdateHandler(e2) {
    let t2 = this._elementReferences.get(e2.uid);
    if (t2) {
      const r3 = t2.projectedElement.normalizedCoords;
      if (null == r3)
        return this._overlayContainer.removeChild(t2.overlay), t2.overlay.destroy(), t2.projectedElement.destroy(), this._elementReferences.delete(e2.uid), this.elements.remove(e2), void this._debugGraphicsView?.graphics.remove(t2.debugGraphic);
      const s2 = [], i2 = [];
      for (const e3 of this._tileStrategy.tiles) {
        const o2 = v(this.view.featuresTilingScheme, e3, r3);
        t2.tiles.has(e3) ? o2 || i2.push(e3) : o2 && s2.push(e3);
      }
      for (const t3 of s2)
        this._referenceElement(t3, e2);
      for (const t3 of i2)
        this._dereferenceElement(t3, e2);
      return t2 = this._elementReferences.get(e2.uid), void (t2?.debugGraphic && (t2.debugGraphic.geometry = t2.projectedElement.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: t2.debugGraphic, property: "geometry" })));
    }
    const r2 = new m$3({ element: e2, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (null != r2)
      for (const s2 of this._tileStrategy.tiles) {
        v(this.view.featuresTilingScheme, s2, r2) && this._referenceElement(s2, e2);
      }
  }
};
e$3([y()], b.prototype, "layer", void 0), e$3([y({ readOnly: true })], b.prototype, "elements", void 0), b = e$3([c$1("esri.views.2d.layers.MediaLayerView2D")], b);
const w = u$2(), _ = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function v(e2, t2, r2) {
  return e2.getTileBounds(w, t2.key, true), _.xmin = w[0], _.ymin = w[1], _.xmax = w[2], _.ymax = w[3], x(_, r2);
}
class E {
  constructor(e2) {
    this.key = e2, this.elements = null, this.isReady = false, this.visible = true;
  }
  setElements(e2) {
    const t2 = [], r2 = new Set(this.elements);
    this.elements = e2;
    for (const s2 of e2)
      r2.has(s2) ? r2.delete(s2) : t2.push(s2);
    return this.isReady = true, [t2, Array.from(r2)];
  }
  destroy() {
  }
}
const R = b;
export {
  R as default
};
