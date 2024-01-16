import { o9 as i$1, oa as i$2, o8 as s, fV as e$1, b1 as s$1, aw as u$1, og as d, rb as e$2, rc as t$2, rd as _, re as d$1, rf as f, rg as o$1, rh as _$1, hV as r$1, od as a, i5 as O, hW as R, aq as has, aM as s$2, ri as k, rj as M, dS as w$1, bJ as d$2, bR as A, en as c, em as e$3, bD as u$2, bo as e$4, bp as y, br as c$1, dP as u$3 } from "./chunk-KFNcxJaF.js";
import { i, e, l as l$1, u, t as t$1 } from "./chunk-F_AWMxLF.js";
import { o as o$2 } from "./chunk-0VrCKcMu.js";
import { l as l$2 } from "./chunk-H8y5q1b_.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { o as o$3 } from "./chunk-yz-PXh9A.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-xi0IQ6PQ.js";
import "./chunk-GcIahY26.js";
import "./chunk-ZLxFSCNp.js";
class t {
  constructor(t2, e2, s2) {
    this._scale = t2, this._shift = e2, this._levelShift = s2;
  }
  getLevelRowColumn(t2) {
    const e2 = this.getLevelShift(t2[0]), s2 = this._shift + e2;
    return s2 ? [t2[0] - e2, t2[1] >> s2, t2[2] >> s2] : t2;
  }
  getLevelShift(t2) {
    return Math.min(t2, this._levelShift);
  }
  getOffset(t2, e2) {
    let s2 = 0, i2 = 0;
    const h = this._shift + this.getLevelShift(t2[0]);
    if (h) {
      const l2 = (1 << h) - 1, f2 = e2 / (this._scale * (1 << h - 1));
      s2 = (t2[2] & l2) * f2, i2 = (t2[1] & l2) * f2;
    }
    return [s2, i2];
  }
  getScale(t2) {
    return this._scale * (1 << this._shift + this.getLevelShift(t2));
  }
}
function p(p2) {
  const y2 = [], a2 = new i(4096, y2, () => {
    const e2 = new s();
    return e2.show = false, e2.parts.push({ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }), e2.parts.push({ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }), e2;
  }), m = new e(y2, a2, (t2, r, o2) => new l$1(t2, r, o2, p2.styleRepository, p2.key.level, 0), (t2, e2) => {
    i$1(t2, e2, false);
  }, () => 0, (t2) => {
    const e2 = p2.styleRepository.getStyleLayerByUID(t2).getLayoutProperty("visibility");
    return !e2 || e2.getValue() !== i$2.NONE;
  });
  y2.push(p2), a2.add(p2), m.setScreenSize(512, 512), m.continue(1 / 0);
}
class g extends u {
  constructor(e2, t2, o2, i2) {
    super(e2, t2, o2), this._memCache = i2, this._ongoingTileRequests = /* @__PURE__ */ new Map(), this._ongoingRequestToController = /* @__PURE__ */ new Map(), this._tileInfoView = new t$1(e2.tileInfo, e2.fullExtent);
  }
  destroy() {
    super.destroy(), this._ongoingRequestToController.forEach((e2) => e2.abort()), this._ongoingRequestToController.clear(), this._ongoingTileRequests.clear();
  }
  async getVectorTile(s2, l2, g2, h) {
    const u2 = new e$1(s2, l2, g2, 0);
    let m = this._memCache.get(u2.id);
    if (null != m)
      return m.retain(), m;
    const c2 = await this._getVectorTileData(u2);
    if (s$1(h), !this._layer)
      return null;
    if (m = this._memCache.get(u2.id), null != m)
      return m.retain(), m;
    const T = this._layer.tileInfo.getTileBounds(u$1(), u2), _2 = this._tileInfoView.getTileResolution(s2);
    return m = new d(u2, _2, T[0], T[3], 512, 512, this._styleRepository, this._memCache), c2 ? (m.setData(c2), m.retain(), this._memCache.put(u2.id, m, m.memoryUsed, e$2)) : m.setData(null), m.neededForCoverage = true, m.transforms.tileUnitsToPixels = t$2(1 / 8, 0, 0, 0, 1 / 8, 0, 0, 0, 1), p(m), m;
  }
  _getVectorTileData(e2) {
    const t2 = e2.id;
    if (this._ongoingTileRequests.has(t2))
      return this._ongoingTileRequests.get(t2);
    const o2 = new AbortController(), i2 = { signal: o2.signal }, s2 = this._getParsedVectorTileData(e2, i2).then((e3) => (this._ongoingTileRequests.delete(t2), this._ongoingRequestToController.delete(t2), e3)).catch(() => (this._ongoingTileRequests.delete(t2), this._ongoingRequestToController.delete(t2), null));
    return this._ongoingTileRequests.set(t2, s2), this._ongoingRequestToController.set(t2, o2), s2;
  }
  _getParsedVectorTileData(e2, t2) {
    return this.fetchTileData(e2, t2).then((o2) => this.parseTileData({ key: e2, data: o2 }, t2));
  }
}
const b = { vtlBackground: _, vtlFill: d$1, vtlLine: f, vtlCircle: o$1, vtlSymbol: _$1 };
const o = 1e-6;
class l {
  constructor(e2, t2) {
    this.spriteMosaic = e2, this.glyphMosaic = t2, this._brushCache = /* @__PURE__ */ new Map(), this._vtlMaterialManager = new o$2();
  }
  dispose() {
    this._brushCache && (this._brushCache.forEach((e2) => e2.dispose()), this._brushCache = null), this._vtlMaterialManager = r$1(this._vtlMaterialManager), this.spriteMosaic.dispose(), this.glyphMosaic.dispose();
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  drawSymbols(e2, t2, s2) {
    const n2 = s2.layers;
    e2.renderPass = "translucent";
    for (let i2 = 0; i2 < n2.length; i2++) {
      const s3 = n2[i2];
      if (s3.type !== a.SYMBOL)
        continue;
      const l2 = s3.getLayoutProperty("visibility");
      if (l2 && l2.getValue() === i$2.NONE)
        continue;
      const c2 = e2.displayLevel;
      void 0 !== s3.minzoom && s3.minzoom > c2 + o || void 0 !== s3.maxzoom && s3.maxzoom <= c2 - o || (e2.styleLayerUID = s3.uid, e2.styleLayer = s3, this._drawWithBrush(e2, t2, "vtlSymbol"));
    }
  }
  drawBackground(e2, t2, s2) {
    if (0 === s2.backgroundBucketIds.length)
      return;
    const { context: n2, displayLevel: i2, requiredLevel: l2 } = e2;
    t2.key.level = l2, n2.setBlendingEnabled(true), n2.setDepthTestEnabled(false), n2.setStencilTestEnabled(false), e2.renderPass = "background", s2.backgroundBucketIds.forEach((n3) => {
      const l3 = s2.getLayerById(n3);
      if (l3.type !== a.BACKGROUND)
        return;
      const c2 = l3.getLayoutProperty("visibility");
      c2 && c2.getValue() === i$2.NONE || void 0 !== l3.minzoom && l3.minzoom > i2 + o || void 0 !== l3.maxzoom && l3.maxzoom <= i2 - o || (e2.styleLayerUID = l3.uid, e2.styleLayer = l3, this._drawWithBrush(e2, t2, "vtlBackground"));
    });
  }
  drawTile(e2, t2, s2, r) {
    const { context: a2 } = e2, o2 = s2.layers;
    a2.setBlendingEnabled(false), a2.setDepthTestEnabled(true), a2.setDepthWriteEnabled(true), a2.setDepthFunction(O.LEQUAL), e2.renderPass = "opaque";
    for (let n2 = o2.length - 1; n2 >= 0; n2--) {
      const s3 = o2[n2];
      null != r && r !== s3.type || this._renderStyleLayer(s3, e2, t2, false);
    }
    a2.setDepthWriteEnabled(false), a2.setBlendingEnabled(true), a2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.renderPass = "translucent";
    for (let n2 = 0; n2 < o2.length; n2++) {
      const s3 = o2[n2];
      null != r && r !== s3.type || this._renderStyleLayer(s3, e2, t2, false);
    }
    a2.setDepthTestEnabled(false), a2.bindVAO();
  }
  _renderStyleLayer(e2, t2, s2, n2) {
    if (!(n2 || e2 && s2.layerData.has(e2.uid)))
      return;
    const i2 = e2.getLayoutProperty("visibility");
    if (i2 && i2.getValue() === i$2.NONE)
      return;
    const { renderPass: l2 } = t2;
    let c2;
    switch (e2.type) {
      case a.BACKGROUND:
        if ("background" !== l2)
          return;
        c2 = "vtlBackground";
        break;
      case a.FILL:
        if ("opaque" !== l2 && "translucent" !== t2.renderPass)
          return;
        c2 = "vtlFill";
        break;
      case a.LINE:
        if ("translucent" !== l2)
          return;
        c2 = "vtlLine";
        break;
      case a.CIRCLE:
        if ("translucent" !== l2)
          return;
        c2 = "vtlCircle";
        break;
      case a.SYMBOL:
        if ("translucent" !== l2)
          return;
        c2 = "vtlSymbol";
    }
    const d2 = t2.displayLevel;
    if (void 0 !== e2.minzoom && e2.minzoom > d2 + o || void 0 !== e2.maxzoom && e2.maxzoom <= d2 - o)
      return;
    const { context: h } = t2;
    h.setStencilTestEnabled(false), h.setStencilWriteMask(0), t2.styleLayerUID = e2.uid, t2.styleLayer = e2, this._drawWithBrush(t2, s2, c2);
  }
  _drawWithBrush(e2, s2, r) {
    if (!this._brushCache.has(r)) {
      const e3 = b[r];
      this._brushCache.set(r, new e3());
    }
    this._brushCache.get(r).drawMany(e2, [s2]);
  }
}
let S = class extends o$3(n(u$3)) {
  constructor() {
    super(...arguments), this._tileHandlerController = null, this.type = "vector-tile-3d", this.levelShift = has("disable-feature:vtl-level-shift") ? 0 : 1;
  }
  initialize() {
    if (null == this.layer.fullExtent)
      return void this.addResolvingPromise(Promise.reject(new s$2("vectortilelayerview:full-extent-undefined", "This layer view's layer does not define a fullExtent.")));
    const { basemapTerrain: e2, spatialReference: i2, state: l$12, viewingMode: r } = this.view, h = "local" === r && !k(i2) || M.force512VTL, c$12 = this.layer.tileInfo.spatialReference.isGeographic, y2 = h ? this.layer.tileInfo : this.layer.tileInfo.getOrCreateCompatible(256, c$12 ? 1 : 2), g$1 = this._getTileInfoSupportError(y2, this.layer.fullExtent);
    if (null != g$1)
      return this.addResolvingPromise(Promise.reject(g$1));
    const _2 = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const t$12 = e2.tilingScheme, i3 = t$12.pixelSize, l2 = 256 === i3 ? 1 : 2, r2 = e2.spatialReference?.isGeographic && 256 === i3 ? 1 : 0, s2 = e2.spatialReference?.isGeographic || 256 !== i3 ? 0 : 1;
      let o2;
      if (this.schemaHelper = new t(l2, r2, this.levelShift + s2), 256 === i3) {
        const e3 = this.layer.tileInfo.spatialReference.isGeographic;
        o2 = this.layer.tileInfo.getOrCreateCompatible(256, e3 ? 1 : 2);
      } else
        o2 = this.view.spatialReference?.isGeographic ? this.layer.tileInfo.getOrCreateCompatible(512, 0.5) : this.layer.tileInfo;
      const a2 = this._getTileInfoCompatibilityError(o2, t$12);
      if (a2)
        throw a2;
      this.tileInfo = o2;
    });
    this._tileHandlerController = new AbortController();
    const S2 = this.view.resourceController;
    this._memCache = S2.memoryController.newCache(`vtl-${this.layer.uid}`, (e3) => {
      e3.release();
    }), this.addHandles(d$2(() => this.view.qualitySettings.memoryLimit, (e3) => this._memCache.maxSize = Math.ceil(e3 / 10 * 1048576), A));
    const C2 = new l$2(this.layer.currentStyleInfo.style);
    this._tileHandler = new g(this.layer, C2, l$12.contentPixelRatio, this._memCache);
    const H = this._tileHandlerController.signal, R2 = w(S2), j = this._tileHandler.start({ signal: H, schedule: R2 }), x = this._tileHandler.spriteMosaic;
    x.then((e3) => {
      !c(H) && this._tileHandler && (this.painter = new l(e3, this._tileHandler.glyphMosaic));
    }), j.then(() => this._tileHandlerController = null), this._updatingHandles.add(() => ({ style: this.layer.currentStyleInfo.style, pixelRatio: this.view.state?.contentPixelRatio }), ({ style: e3, pixelRatio: t2 }) => {
      this._tileHandlerController && this._tileHandlerController.abort(), this._tileHandlerController = new AbortController(), this._memCache.clear();
      const i3 = new l$2(e3), l$13 = new g(this.layer, i3, t2, this._memCache), r2 = l$13.start({ signal: this._tileHandlerController.signal, schedule: R2 }), s2 = l$13.spriteMosaic;
      r2.then(() => this._tileHandlerController = null), this._updatingHandles.addPromise(Promise.all([r2, s2]).then(([, e4]) => {
        const t3 = this._tileHandler, i4 = this.painter;
        this.painter = new l(e4, l$13.glyphMosaic), this._tileHandler = l$13, this.emit("data-changed"), t3.destroy(), i4 && i4.dispose();
      }));
    });
    const L = Promise.all([_2, j, x]);
    this.addResolvingPromise(L);
  }
  destroy() {
    this.painter = r$1(this.painter), this._tileHandlerController = e$3(this._tileHandlerController), this._tileHandler = u$2(this._tileHandler), this._memCache = u$2(this._memCache);
  }
  get contentZoom() {
    return has("disable-feature:vtl-level-shift") ? 1 : this.view.qualitySettings.tiledSurface.vtlContentZoom;
  }
  get displayLevelRange() {
    const e2 = this.tileInfo.lods, t2 = this.layer.minScale || e2[0].scale, i2 = this.layer.maxScale || e2[e2.length - 1].scale, l2 = this.levelRangeFromScaleRange(t2, i2);
    return this.layer.maxScale ? l2.maxLevel++ : l2.maxLevel += this.levelShift, l2;
  }
  get dataScaleRange() {
    const e2 = this.tileInfo.lods;
    return { minScale: e2[0].scale, maxScale: e2[e2.length - 1].scale };
  }
  get dataLevelRange() {
    const { minScale: e2, maxScale: t2 } = this.dataScaleRange, i2 = this.levelRangeFromScaleRange(e2, t2);
    return 1 === i2.minLevel && 256 === this.tileInfo.size[0] && (i2.minLevel = 0), i2.maxLevel += this.levelShift, i2;
  }
  async fetchTile(e2, t2, i2, l2) {
    return this._tileHandler.getVectorTile(e2, t2, i2, l2);
  }
};
e$4([y()], S.prototype, "layer", void 0), e$4([y()], S.prototype, "levelShift", void 0), e$4([y()], S.prototype, "contentZoom", null), e$4([y()], S.prototype, "displayLevelRange", null), e$4([y()], S.prototype, "tileInfo", void 0), e$4([y()], S.prototype, "dataScaleRange", null), e$4([y()], S.prototype, "dataLevelRange", null), e$4([y()], S.prototype, "updatingProgressValue", void 0), S = e$4([c$1("esri.views.3d.layers.VectorTileLayerView3D")], S);
const C = S;
function w(e2) {
  return (t2) => e2.immediate.schedule(t2);
}
export {
  C as default
};
