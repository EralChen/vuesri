import { kq as M, kr as s$1, ks as ct, kt as E, ku as t, kv as t$1, fj as I, fk as e, fl as t$2, et as i, ca as e$1, cb as C, f9 as k, cd as b$1, aT as s$2, cm as e$2, dz as I$1, b6 as u$1, aC as M$1, kw as a$1, kx as t$3, fc as e$3, g7 as m, fd as c, ky as u$2, kz as e$4, cU as s$3, ff as E$1, fp as N$1, fq as D$1, j5 as _$1, kA as E$2, fm as m$1, kB as u$3, kC as U, ex as w$1, aV as e$5, aX as y, a_ as c$1, eu as u$4 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { l as l$1 } from "./chunk-315ILBUn.js";
import { T } from "./chunk--_aQKBqP.js";
function u(r, o, n2) {
  const i2 = M(r) / s$1(r), m2 = { width: n2, height: n2 };
  return i2 > 1.0001 ? m2.height = n2 / i2 : i2 < 0.9999 && (m2.width = n2 * i2), m2.width = Math.round(m2.width / (M(r) / M(o))), m2.height = Math.round(m2.height / (s$1(r) / s$1(o))), m2;
}
function l(t2, e2) {
  return ct(t2, [[e2[0], e2[1], -1], [e2[2], e2[1], -1], [e2[2], e2[3], -1], [e2[0], e2[3], -1]]);
}
function s(t$32, e$12, h) {
  if (!E(e$12, h))
    return l(t$32, h);
  const u2 = [e$12[1] - h[1], Math.min(e$12[3], h[3]) - Math.max(e$12[1], h[1]), h[3] - e$12[3], 123456], s2 = [e$12[0] - h[0], Math.min(e$12[2], h[2]) - Math.max(e$12[0], h[0]), h[2] - e$12[2], 123456], f = h[2] - h[0], p = h[3] - h[1], w = s2[0] > 0 && s2[2] > 0 ? 3 : 2, b = u2[0] > 0 && u2[2] > 0 ? 3 : 2, c2 = (b + 1) * (w + 1), y2 = t(3 * c2), d = t$1(2 * c2), j = new Array(6 * (b * w - 1));
  let A = 0, M2 = 0, x = 0, O = 0, G = 0;
  for (let r = 0; r < 4; r++) {
    const t2 = u2[r];
    if (t2 <= 0)
      continue;
    let e2 = 0;
    for (let o = 0; o < 4; o++) {
      const t3 = s2[o];
      t3 <= 0 || (y2[M2++] = h[0] + e2, y2[M2++] = h[1] + A, y2[M2++] = -1, d[x++] = e2 / f, d[x++] = A / p, o < 3 && r < 3 && (1 !== o || 1 !== r) && (j[G++] = O, j[G++] = O + 1, j[G++] = O + w + 1, j[G++] = O + 1, j[G++] = O + w + 2, j[G++] = O + w + 1), O++, e2 += t3);
    }
    A += t2;
  }
  const I$12 = new Array(j.length);
  return new I(t$32, [[e.POSITION, new t$2(y2, j, 3, true)], [e.NORMAL, new t$2(a, I$12, 3, true)], [e.UV0, new t$2(d, j, 2, true)]]);
}
const a = [0, 0, 1];
let V = class extends i(n(u$4)) {
  constructor() {
    super(...arguments), this.drapeSourceType = e$1.RasterImage, this.updatePolicy = C.SYNC, this.fullExtentInLocalViewSpatialReference = null, this.maximumDataResolution = null, this._images = new Array(), this._extents = new Array(), this._overlays = new Array(), this.updateWhenStationary = true, this._drapeSourceRenderer = null, this.refreshDebounced = k(async (e2) => {
      this.destroyed || await this._doRefresh(e2).catch((e3) => {
        b$1(e3) || s$2.getLogger(this).error(e3);
      });
    }, 2e3);
  }
  initialize() {
    this._drapeSourceRenderer = this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this), this.addHandles(e$2(() => this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))), this.addResolvingPromise(l$1(this).then((e2) => this._set("fullExtentInLocalViewSpatialReference", e2))), this._updatingHandles.add(() => this.suspended, () => this._suspendedChangeHandler()), this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(() => {
      this._isScaleRangeActive() && this.notifyChange("suspended");
    }, () => {
    })), this._isScaleRangeLayer() && this._updatingHandles.add(() => this.layer.effectiveScaleRange, () => this.notifyChange("suspended"));
  }
  destroy() {
    this.clear();
  }
  setDrapingExtent(e2, t2) {
    this._spatialReference = t2, e2.forEach((e3, t3) => {
      this._overlays[t3] = e3, this._updateImageExtent(e3, t3);
    });
  }
  _updateImageExtent(e2, t2) {
    const r = this._clippedExtent(e2.extent, z);
    if (null == r)
      return;
    const i2 = u(e2.extent, r, e2.resolution);
    let s2 = e2.pixelRatio * this.view.state.pixelRatio;
    const { layer: n2 } = this;
    if ("imageMaxWidth" in n2 && null != n2.imageMaxWidth || "imageMaxHeight" in n2 && null != n2.imageMaxHeight) {
      const e3 = n2.imageMaxWidth, t3 = n2.imageMaxHeight;
      if (i2.width > e3) {
        const t4 = e3 / i2.width;
        i2.height = Math.floor(i2.height * t4), i2.width = e3, s2 *= t4;
      }
      if (i2.height > t3) {
        const e4 = t3 / i2.height;
        i2.width = Math.floor(i2.width * e4), i2.height = t3, s2 *= e4;
      }
    }
    const l2 = this._extents[t2];
    l2 && I$1(l2.extent, r) && this._imageSizeEquals(r, l2.imageSize, i2) || (this._extents[t2] = { extent: u$1(r), imageSize: i2, pixelRatio: s2 }, this.suspended || this._fetch(t2).catch((e3) => {
      b$1(e3) || s$2.getLogger(this).error(e3);
    }));
  }
  clear() {
    for (let e2 = 0; e2 < this._images.length; e2++)
      this._clearImage(e2);
  }
  async doRefresh() {
    return this._doRefresh();
  }
  async _doRefresh(e2) {
    if (this.suspended)
      return;
    const t2 = [];
    for (let r = 0; r < this._extents.length; r++)
      this._extents[r] && t2.push(this._fetch(r, e2));
    await Promise.allSettled(t2);
  }
  canResume() {
    if (!super.canResume())
      return false;
    const e2 = this.layer;
    if (this._isScaleRangeActive()) {
      const { minScale: t2, maxScale: r } = e2.effectiveScaleRange, i2 = this.view.scale;
      if (i2 < r || t2 > 0 && i2 > t2)
        return false;
    }
    return true;
  }
  async processResult(e2, t2, r) {
    (t2 instanceof HTMLImageElement || t2 instanceof HTMLCanvasElement) && (e2.image = t2);
  }
  findExtentInfoAt(e2) {
    for (const t2 of this._extents) {
      const r = t2.extent;
      if (new M$1(r[0], r[1], r[2], r[3], this._spatialReference).contains(e2))
        return t2;
    }
    return null;
  }
  getFetchOptions() {
  }
  async redraw(e2, r) {
    await a$1(this._images, async (t2, i2) => {
      t2 && (await e2(t2, r), await this._createStageObjects(i2, t2.image, r));
    });
  }
  _imageSizeEquals(e2, t2, r) {
    if (!this.maximumDataResolution)
      return false;
    const i2 = M(e2) / this.maximumDataResolution.x, a2 = s$1(e2) / this.maximumDataResolution.y, s2 = i2 / t2.width, n2 = a2 / t2.height, o = i2 / r.width, l2 = a2 / r.height, h = Math.abs(s2 - o), m2 = Math.abs(n2 - l2), d = t$3.TESTS_DISABLE_OPTIMIZATIONS ? 0 : 1.5;
    return h <= d && m2 <= d;
  }
  async _fetch(e2, t2) {
    if (this.suspended)
      return;
    const r = this._extents[e2], i2 = r.extent;
    this._images[e2] || (this._images[e2] = { texture: null, material: null, renderGeometry: null, loadingPromise: null, loadingAbortController: null, image: null, pixelData: null, renderExtent: u$1(i2) });
    const n2 = this._images[e2];
    n2.loadingAbortController = e$3(n2.loadingAbortController);
    const c$12 = new M$1(i2[0], i2[1], i2[2], i2[3], this._spatialReference);
    if (0 === c$12.width || 0 === c$12.height)
      return void this._clearImage(e2);
    const g = new AbortController();
    n2.loadingAbortController = g, m(t2, () => g.abort());
    const u2 = g.signal, f = this._waitFetchReady(u2).then(async () => {
      const t3 = { requestAsImageElement: true, pixelRatio: this._overlays[e2].pixelRatio, ...this.getFetchOptions(), signal: u2 }, { height: i3, width: a2 } = r.imageSize;
      return this.layer.fetchImage(c$12, a2, i3, t3);
    }).then((e3) => {
      if (c(u2))
        throw s$2.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."), u$2();
      return this.processResult(n2, e3);
    }).then(() => {
      e$4(n2.renderExtent, i2);
    });
    n2.loadingPromise = f, await this._updatingHandles.addPromise(f.then(async () => {
      s$3(u2), await this._createStageObjects(e2, n2.image, u2);
    }).catch((e3) => {
      throw e3 && !b$1(e3) && s$2.getLogger(this).error(e3), e3;
    }).finally(() => {
      f === n2.loadingPromise && (n2.loadingPromise = null, n2.loadingAbortController = null);
    }));
  }
  _clearImage(e2) {
    const t2 = this._images[e2];
    if (t2) {
      null != t2.renderGeometry && (this._drapeSourceRenderer.removeGeometries([t2.renderGeometry], E$1.UPDATE), t2.renderGeometry = null);
      const e3 = this.view._stage, r = t2.texture;
      r?.unload(), e3.remove(r), t2.texture = null, e3.remove(t2.material), t2.material = null, t2.loadingAbortController = e$3(t2.loadingAbortController), t2.loadingPromise = null, t2.image = null, t2.pixelData = null;
    }
  }
  async _createStageObjects(e2, t2, i2) {
    const a2 = this.view._stage, s$12 = this._images[e2], n2 = () => {
      s$12.texture?.unload(), a2.remove(s$12.texture), s$12.texture = null, s$12.renderGeometry && (this._drapeSourceRenderer.removeGeometries([s$12.renderGeometry], E$1.UPDATE), s$12.renderGeometry = null);
    };
    if (t2) {
      const o = new N$1(t2, { width: t2.width, height: t2.height, preMultiplyAlpha: true, wrap: { s: D$1.CLAMP_TO_EDGE, t: D$1.CLAMP_TO_EDGE } });
      let l$12;
      if (await _$1(this._images[e2 === E$2.INNER ? E$2.OUTER : E$2.INNER].loadingPromise), s$3(i2), n2(), await a2.schedule(() => o.load(a2.renderView.renderingContext), i2), a2.add(o), s$12.texture = o, null == s$12.material ? (s$12.material = new T({ transparent: true, textureId: o.id }), a2.add(s$12.material)) : s$12.material.setParameters({ textureId: o.id }), e2 === E$2.INNER)
        l$12 = l(s$12.material, s$12.renderExtent);
      else {
        const e3 = this._images[0].renderExtent;
        if (!e3)
          return void n2();
        l$12 = s(s$12.material, e3, s$12.renderExtent);
      }
      s$12.renderGeometry = new m$1(l$12), s$12.renderGeometry.localOrigin = this._overlays[e2].renderLocalOrigin, this._drapeSourceRenderer.addGeometries([s$12.renderGeometry], E$1.UPDATE);
    } else
      n2(), a2.remove(s$12.material), s$12.material = null;
  }
  _isScaleRangeLayer() {
    return "effectiveScaleRange" in this.layer;
  }
  _isScaleRangeActive() {
    const e2 = this.layer;
    if (!this._isScaleRangeLayer())
      return false;
    const { minScale: t2, maxScale: r } = e2.effectiveScaleRange;
    return u$3(t2, r);
  }
  _clippedExtent(e2, t2) {
    if ("local" !== this.view.viewingMode)
      return e$4(t2, e2);
    const r = this.view.basemapTerrain;
    return r.ready ? U(e2, r.extent, t2) : e$4(t2, e2);
  }
  _suspendedChangeHandler() {
    this.suspended ? this.clear() : this.refreshDebounced();
  }
  async _waitFetchReady(e2) {
    await w$1(() => this.view.stationary, e2), s$3(e2);
  }
};
e$5([y()], V.prototype, "layer", void 0), e$5([y()], V.prototype, "suspended", void 0), e$5([y({ readOnly: true })], V.prototype, "fullExtentInLocalViewSpatialReference", void 0), e$5([y()], V.prototype, "updating", void 0), V = e$5([c$1("esri.views.3d.layers.DynamicLayerView3D")], V);
const N = V, z = u$1();
export {
  N
};
