import { mX as d, hT as i, fw as n, bJ as d$1, bn as P$1, hV as r$1, eg as p, mY as r, bb as s$1, aM as s$2, mZ as n$1, m_ as o, kR as e, eA as D, T as T$2, h as h$1, i3 as F, f as f$1, hK as r$2, eB as e$1, ce as n$2, fF as c, hU as e$2, kL as w$1, bY as T$3, hZ as L, h_ as r$3, hL as i$1, h$ as M, i0 as t, i1 as f$2, gs as r$4, i2 as h, ax as G, m$ as lt, fQ as m$1, dP as u$1, bh as V$1, e3 as v$1, fT as y, fU as r$5, n0 as s, bI as b$2, ap as M$1, n1 as r$6, bo as e$3, bp as y$1, br as c$1, aw as u$2, n2 as x } from "./chunk-KFNcxJaF.js";
import { j as j$1, i as i$2 } from "./chunk-_6WFmAiF.js";
import "./chunk-anoehU8Z.js";
import { l } from "./chunk-Vy6X02jp.js";
import "./chunk-pNUePs4Z.js";
import "./chunk-Zlv3z8RW.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-W2fbhL5l.js";
import "./chunk-xi0IQ6PQ.js";
import "./chunk-DicJw-UR.js";
import "./chunk-b7K892Yv.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-jrhFla2W.js";
import "./chunk-KMgzOHQd.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-7WVHb2Yk.js";
const j = e$1(), V = { none: d.None, loop: d.Loop, oscillate: d.Oscillate };
function b$1(e2) {
  return e2 ? { ...e2, playAnimation: e2.playing, repeatType: e2.repeatType ? V[e2.repeatType] : void 0 } : {};
}
let T$1 = class T extends i {
  constructor(s2) {
    super(), this.elementView = s2, this.isWrapAround = false, this.perspectiveTransform = n(), this._playHandle = null, this._vertices = new Float32Array(20), this._handles = [], this._handles.push(d$1(() => this.elementView.element.opacity, (e2) => this.opacity = e2, P$1), d$1(() => [this.elementView.coords], () => {
      this.requestRender();
    }, P$1), d$1(() => ["animationOptions" in this.elementView.element && this.elementView.element.animationOptions], () => {
      this._playHandle?.remove(), this.texture = r$1(this.texture), this.requestRender();
    }, P$1), p(() => this.elementView.element.loaded, () => {
      const e2 = this.elementView.element;
      this.ready(), "video" === e2.type && null != e2.content && this._handles.push(r(e2.content, "play", () => this.requestRender()));
    }, P$1)), s2.element.load().catch((t2) => {
      s$1.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s$2("element-load-error", "Element cannot be displayed", { element: s2, error: t2 }));
    });
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
      const e$13 = r2 instanceof HTMLImageElement, i2 = r2 instanceof HTMLVideoElement, o$1 = e$13 ? r2.naturalWidth : i2 ? r2.videoWidth : r2.width, n2 = e$13 ? r2.naturalHeight : i2 ? r2.videoHeight : r2.height;
      if (this._updatePerspectiveTransform(o$1, n2), this.texture)
        i2 && !r2.paused && (this.texture.setData(r2), this.requestRender(), (t2.type === n$1.WEBGL2 || o(o$1) && o(n2)) && this.texture.generateMipmap());
      else {
        const e$14 = new e();
        if (e$14.wrapMode = D.CLAMP_TO_EDGE, e$14.preMultiplyAlpha = true, e$14.width = o$1, e$14.height = n2, "getFrame" in r2) {
          const s2 = (r3) => {
            this.texture ? this.texture.setData(r3) : this.texture = new T$2(t2, e$14, r3), this.requestRender();
          };
          "animationOptions" in this.elementView.element && (this._playHandle = l(r2, b$1(this.elementView.element.animationOptions), null, s2));
        } else
          this.texture = new T$2(t2, e$14, r2);
        (t2.type === n$1.WEBGL2 || o(o$1) && o(n2)) && this.texture.generateMipmap(), i2 && !r2.paused && this.requestRender();
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
    const [s2, i2, o2, n2] = r2.rings[0], a = this._vertices, { x: m, y: l2 } = e2, h2 = 0 !== t2;
    h2 ? a.set([i2[0] - m, i2[1] - l2, s2[0] - m, s2[1] - l2, o2[0] - m, o2[1] - l2, n2[0] - m, n2[1] - l2, n2[0] - m, n2[1] - l2, i2[0] + t2 - m, i2[1] - l2, i2[0] + t2 - m, i2[1] - l2, s2[0] + t2 - m, s2[1] - l2, o2[0] + t2 - m, o2[1] - l2, n2[0] + t2 - m, n2[1] - l2]) : a.set([i2[0] - m, i2[1] - l2, s2[0] - m, s2[1] - l2, o2[0] - m, o2[1] - l2, n2[0] - m, n2[1] - l2]), this.isWrapAround = h2;
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
      this._vao = new f$1(e2, r2, t2, { geometry: this._geometryVbo, tex: i2 });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e2, t2) {
    const r2 = this._vertices;
    j$1(j, [0, 0, e2, 0, 0, t2, e2, t2], [r2[0], r2[1], r2[4], r2[5], r2[2], r2[3], r2[6], r2[7]]), r$2(this.perspectiveTransform, j[6] / j[8] * e2, j[7] / j[8] * t2);
  }
};
class u extends n$2 {
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
    const e2 = t2.registerRenderPass({ name: "overlay", brushes: [w$1.overlay], target: () => this.children, drawPhase: T$3.MAP });
    return [...super.prepareRenderPasses(t2), e2];
  }
  _updateMatrices(t$1) {
    const { state: i2 } = t$1, { id: l2, size: d2, pixelRatio: h$12, resolution: m, rotation: f, viewpoint: u2, displayMat3: M$12 } = i2;
    if (this._viewStateId === l2)
      return;
    const v2 = Math.PI / 180 * f, _2 = h$12 * d2[0], w2 = h$12 * d2[1], { x: g, y: y2 } = u2.targetGeometry, j2 = L(g, i2.spatialReference);
    this._localOrigin.x = j2, this._localOrigin.y = y2;
    const R2 = m * _2, b2 = m * w2, P = r$3(this._dvsMat3);
    i$1(P, P, M$12), M(P, P, t(_2 / 2, w2 / 2)), f$2(P, P, r$4(_2 / R2, -w2 / b2, 1)), h(P, P, -v2), this._viewStateId = l2;
  }
  _updateOverlays(t2, e2) {
    const { state: s2 } = t2, { rotation: r2, spatialReference: o2, worldScreenWidth: a, size: i2, viewpoint: n2 } = s2, c2 = this._localOrigin;
    let p2 = 0;
    const h2 = G(o2);
    if (h2 && o2.isWrappable) {
      const t3 = i2[0], l2 = i2[1], m = 180 / Math.PI * r2, f = Math.abs(Math.cos(m)), u2 = Math.abs(Math.sin(m)), M2 = Math.round(t3 * f + l2 * u2), [v2, _2] = h2.valid, w2 = lt(o2), { x: g, y: y2 } = n2.targetGeometry, j2 = [g, y2], R2 = [0, 0];
      s2.toScreen(R2, j2);
      const b2 = [0, 0];
      let P;
      P = M2 > a ? 0.5 * a : 0.5 * M2;
      const x2 = Math.floor((g + 0.5 * w2) / w2), O = v2 + x2 * w2, C = _2 + x2 * w2, I = [R2[0] + P, 0];
      s2.toMap(b2, I), b2[0] > C && (p2 = w2), I[0] = R2[0] - P, s2.toMap(b2, I), b2[0] < O && (p2 = -w2);
      for (const s3 of e2) {
        const t4 = s3.elementView.bounds;
        if (null == t4)
          continue;
        const [e3, , r3] = t4;
        e3 < v2 && r3 > v2 ? s3.updateDrawCoords(c2, w2) : r3 > _2 && e3 < _2 ? s3.updateDrawCoords(c2, -w2) : s3.updateDrawCoords(c2, p2);
      }
    } else
      for (const l2 of e2)
        l2.updateDrawCoords(c2, p2);
  }
}
let w = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this.layer = null, this.elements = new V$1();
  }
  attach() {
    this.addAttachHandles([v$1(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((e2) => this._updateTile(e2)), this.requestUpdate();
    }), v$1(() => this.layer.effectiveSource, "change", ({ element: e2 }) => this._elementUpdateHandler(e2))]), this._overlayContainer = new u(), this.container.addChild(this._overlayContainer), this._fetchQueue = new y({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (e2, r2) => this._queryElements(e2, r2) }), this._tileStrategy = new r$5({ cachePolicy: "purge", resampling: true, acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
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
  async hitTest(e2, r2) {
    const t2 = [], s$12 = e2.normalize(), i2 = [s$12.x, s$12.y];
    for (const { projectedElement: { normalizedCoords: n2, element: o2 } } of this._elementReferences.values())
      null != n2 && s(n2.rings, i2) && t2.push({ type: "media", element: o2, layer: this.layer, mapPoint: e2, sourcePoint: o2.toSource(e2) });
    return t2.reverse();
  }
  canResume() {
    return null != this.layer.source && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updateTile(e2));
  }
  _acquireTile(e2) {
    const r2 = new T2(e2.clone());
    return this._updateTile(r2), r2;
  }
  _updateTile(e2) {
    this._updatingHandles.addPromise(this._fetchQueue.push(e2.key).then((r2) => {
      const [t2, s2] = e2.setElements(r2);
      this._referenceElements(e2, t2), this._dereferenceElements(e2, s2), this.requestUpdate();
    }, (e3) => {
      b$2(e3) || s$1.getLogger(this).error(e3);
    }));
  }
  _releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), e2.elements && this._dereferenceElements(e2, e2.elements), this.requestUpdate();
  }
  async _queryElements(e2, r2) {
    const t2 = this.layer.effectiveSource;
    if (null == t2)
      return [];
    this.view.featuresTilingScheme.getTileBounds(b, e2, true);
    const s2 = new M$1({ xmin: b[0], ymin: b[1], xmax: b[2], ymax: b[3], spatialReference: this.view.spatialReference });
    return t2.queryElements(s2, r2);
  }
  _referenceElements(e2, r2) {
    if (null != this.layer.source)
      for (const t2 of r2)
        this._referenceElement(e2, t2);
  }
  _referenceElement(e2, r2) {
    r$6(this._elementReferences, r2.uid, () => {
      const e3 = new i$2({ element: r2, spatialReference: this.view.spatialReference }), t2 = new T$1(e3);
      this._overlayContainer.addChild(t2), this.elements.add(r2);
      let s2 = null;
      return { tiles: /* @__PURE__ */ new Set(), projectedElement: e3, overlay: t2, debugGraphic: s2 };
    }).tiles.add(e2);
  }
  _dereferenceElements(e2, r2) {
    for (const t2 of r2)
      this._dereferenceElement(e2, t2);
  }
  _dereferenceElement(e2, r2) {
    const t2 = this._elementReferences.get(r2.uid);
    t2.tiles.delete(e2), t2.tiles.size || (this._overlayContainer.removeChild(t2.overlay), t2.overlay.destroy(), t2.projectedElement.destroy(), this._elementReferences.delete(r2.uid), this.elements.remove(r2), this._debugGraphicsView?.graphics.remove(t2.debugGraphic));
  }
  _elementUpdateHandler(e2) {
    let r2 = this._elementReferences.get(e2.uid);
    if (r2) {
      const t3 = r2.projectedElement.normalizedCoords;
      if (null == t3)
        return this._overlayContainer.removeChild(r2.overlay), r2.overlay.destroy(), r2.projectedElement.destroy(), this._elementReferences.delete(e2.uid), this.elements.remove(e2), void this._debugGraphicsView?.graphics.remove(r2.debugGraphic);
      const s2 = [], i2 = [];
      for (const e3 of this._tileStrategy.tiles) {
        const n2 = v(this.view.featuresTilingScheme, e3, t3);
        r2.tiles.has(e3) ? n2 || i2.push(e3) : n2 && s2.push(e3);
      }
      for (const r3 of s2)
        this._referenceElement(r3, e2);
      for (const r3 of i2)
        this._dereferenceElement(r3, e2);
      return r2 = this._elementReferences.get(e2.uid), void (r2?.debugGraphic && (r2.debugGraphic.geometry = r2.projectedElement.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: r2.debugGraphic, property: "geometry" })));
    }
    const t2 = new i$2({ element: e2, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (null != t2)
      for (const s2 of this._tileStrategy.tiles) {
        v(this.view.featuresTilingScheme, s2, t2) && this._referenceElement(s2, e2);
      }
  }
};
e$3([y$1()], w.prototype, "layer", void 0), e$3([y$1({ readOnly: true })], w.prototype, "elements", void 0), w = e$3([c$1("esri.views.2d.layers.MediaLayerView2D")], w);
const b = u$2(), _ = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function v(e2, r2, t2) {
  return e2.getTileBounds(b, r2.key, true), _.xmin = b[0], _.ymin = b[1], _.xmax = b[2], _.ymax = b[3], x(_, t2);
}
class T2 {
  constructor(e2) {
    this.key = e2, this.elements = null, this.isReady = false, this.visible = true;
  }
  setElements(e2) {
    const r2 = [], t2 = new Set(this.elements);
    this.elements = e2;
    for (const s2 of e2)
      t2.has(s2) ? t2.delete(s2) : r2.push(s2);
    return this.isReady = true, [r2, Array.from(t2)];
  }
  destroy() {
  }
}
const R = w;
export {
  R as default
};
