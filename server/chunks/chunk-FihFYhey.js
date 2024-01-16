import { aw as u$1, fV as e, bo as e$1, bp as y$1, br as c, bs as g$1, ej as k, b1 as s$1, ax as G, cq as a$1, kM as v$1, kK as b, da as c$1, du as j$1, fS as h } from "./chunk-KFNcxJaF.js";
const t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function o(t2, o2) {
  const a2 = n(o2.rotation), r = Math.abs(Math.cos(a2)), s = Math.abs(Math.sin(a2)), [u, c2] = o2.size;
  return t2[0] = Math.round(c2 * s + u * r), t2[1] = Math.round(c2 * r + u * s), t2;
}
function a(t2, n2, o2, a2) {
  const [r, s] = n2, [u, c2] = a2, h2 = 0.5 * o2;
  return t2[0] = r - h2 * u, t2[1] = s - h2 * c2, t2[2] = r + h2 * u, t2[3] = s + h2 * c2, t2;
}
const y = u$1(), x = [0, 0], S = new e(0, 0, 0, 0), _ = { container: null, fetchSource: null, requestUpdate: null, imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false };
let w = class extends g$1 {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.bitmaps = [], this.hidpi = _.hidpi, this.imageMaxWidth = _.imageMaxWidth, this.imageMaxHeight = _.imageMaxHeight, this.imageRotationSupported = _.imageRotationSupported, this.imageNormalizationSupported = _.imageNormalizationSupported, this.update = k(async (t3, e2) => {
      if (s$1(e2), !t3.stationary || this.destroyed)
        return;
      const i = t3.state, s = G(i.spatialReference), a2 = this.hidpi ? t3.pixelRatio : 1, p = this.imageNormalizationSupported && i.worldScreenWidth && i.worldScreenWidth < i.size[0], n2 = this.imageMaxWidth ?? 0, m = this.imageMaxHeight ?? 0;
      p ? (x[0] = i.worldScreenWidth, x[1] = i.size[1]) : this.imageRotationSupported ? (x[0] = i.size[0], x[1] = i.size[1]) : o(x, i);
      const h2 = Math.floor(x[0] * a2) > n2 || Math.floor(x[1] * a2) > m, c2 = s && (i.extent.xmin < s.valid[0] || i.extent.xmax > s.valid[1]), u = !this.imageNormalizationSupported && c2, g = !h2 && !u, f = this.imageRotationSupported ? i.rotation : 0, y2 = this.container.children.slice();
      if (g) {
        const t4 = p ? i.paddedViewState.center : i.center;
        this._imagePromise && console.error("Image promise was not defined!"), this._imagePromise = this._singleExport(i, x, t4, i.resolution, f, a2, e2);
      } else {
        let t4 = Math.min(n2, m);
        u && (t4 = Math.min(i.worldScreenWidth, t4)), this._imagePromise = this._tiledExport(i, t4, a2, e2);
      }
      try {
        const t4 = await this._imagePromise ?? [];
        s$1(e2);
        const i2 = [];
        if (this._imagePromise = null, this.destroyed)
          return;
        this.bitmaps = t4;
        for (const e3 of y2)
          t4.includes(e3) || i2.push(e3.fadeOut().then(() => {
            e3.remove(), e3.destroy();
          }));
        for (const e3 of t4)
          i2.push(e3.fadeIn());
        await Promise.all(i2);
      } catch (S2) {
        this._imagePromise = null, a$1(S2);
      }
    }, 5e3), this.updateExports = k(async (t3) => {
      const e2 = [];
      for (const i of this.container.children) {
        if (!i.visible || !i.stage)
          return;
        e2.push(t3(i).then(() => {
          i.invalidateTexture(), i.requestRender();
        }));
      }
      this._imagePromise = v$1(e2).then(() => this._imagePromise = null), await this._imagePromise;
    });
  }
  destroy() {
    this.bitmaps.forEach((t2) => t2.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && null !== this._imagePromise;
  }
  async _export(t2, e2, i, r, s, a2) {
    const p = await this.fetchSource(t2, Math.floor(e2 * s), Math.floor(i * s), { rotation: r, pixelRatio: s, signal: a2 });
    s$1(a2);
    const n2 = new b(null, true);
    return n2.x = t2.xmin, n2.y = t2.ymax, n2.resolution = t2.width / e2, n2.rotation = r, n2.pixelRatio = s, n2.opacity = 0, this.container.addChild(n2), await n2.setSourceAsync(p, a2), s$1(a2), n2;
  }
  async _singleExport(t2, e2, i, o2, r, s, a$12) {
    a(y, i, o2, e2);
    const p = c$1(y, t2.spatialReference);
    return [await this._export(p, e2[0], e2[1], r, s, a$12)];
  }
  _tiledExport(t2, e2, i, o2) {
    const r = j$1.create({ size: e2, spatialReference: t2.spatialReference, scales: [t2.scale] }), s = new h(r), a2 = s.getTileCoverage(t2);
    if (!a2)
      return null;
    const p = [];
    return a2.forEach((r2, a3, n2, l) => {
      S.set(r2, a3, n2, 0), s.getTileBounds(y, S);
      const h2 = c$1(y, t2.spatialReference);
      p.push(this._export(h2, e2, e2, 0, i, o2).then((t3) => (0 !== l && (S.set(r2, a3, n2, l), s.getTileBounds(y, S), t3.x = y[0], t3.y = y[3]), t3)));
    }), Promise.all(p);
  }
};
e$1([y$1()], w.prototype, "_imagePromise", void 0), e$1([y$1()], w.prototype, "bitmaps", void 0), e$1([y$1()], w.prototype, "container", void 0), e$1([y$1()], w.prototype, "fetchSource", void 0), e$1([y$1()], w.prototype, "hidpi", void 0), e$1([y$1()], w.prototype, "imageMaxWidth", void 0), e$1([y$1()], w.prototype, "imageMaxHeight", void 0), e$1([y$1()], w.prototype, "imageRotationSupported", void 0), e$1([y$1()], w.prototype, "imageNormalizationSupported", void 0), e$1([y$1()], w.prototype, "requestUpdate", void 0), e$1([y$1()], w.prototype, "updating", null), w = e$1([c("esri.views.2d.layers.support.ExportStrategy")], w);
const v = w;
export {
  v
};
