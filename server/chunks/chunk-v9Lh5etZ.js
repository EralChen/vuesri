import { qP as r, qQ as i, qO as s, gO as e$1, cU as s$1, b6 as u$1, r0 as d, rQ as e$2, rR as t$2, rS as u, rT as f, rU as s$2, rV as n$1, rW as d$1, ma as r$1, qT as a, o7 as O, mb as R, b0 as has, aO as s$3, rX as k, rY as M, ex as w$1, ce as d$2, cl as A$1, qZ as l$2, fd as c$1, fc as e$3, c8 as u$2, aV as e$4, aX as y, a_ as c$2, eu as u$3 } from "./chunk-ejFG4zJ0.js";
import { n, e, l as l$1, h, t as t$1 } from "./chunk-IZN__eHF.js";
import { p as p$1 } from "./chunk-Cz0_inS0.js";
import { n as n$2 } from "./chunk-ZRKw_7qF.js";
import { c } from "./chunk-rp7NsXHP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-nvycIlGH.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-GcIahY26.js";
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
    const h2 = this._shift + this.getLevelShift(t2[0]);
    if (h2) {
      const l2 = (1 << h2) - 1, f2 = e2 / (this._scale * (1 << h2 - 1));
      s2 = (t2[2] & l2) * f2, i2 = (t2[1] & l2) * f2;
    }
    return [s2, i2];
  }
  getScale(t2) {
    return this._scale * (1 << this._shift + this.getLevelShift(t2));
  }
}
function p(p2) {
  const y2 = [], a2 = new n(4096, y2, () => {
    const e2 = new s();
    return e2.show = false, e2.parts.push({ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }), e2.parts.push({ startTime: 0, startOpacity: 0, targetOpacity: 0, show: false }), e2;
  }), m = new e(y2, a2, (t2, r2, o2) => new l$1(t2, r2, o2, p2.styleRepository, p2.key.level, 0), (t2, e2) => {
    r(t2, e2, false);
  }, () => 0, (t2) => {
    const e2 = p2.styleRepository.getStyleLayerByUID(t2).getLayoutProperty("visibility");
    return !e2 || e2.getValue() !== i.NONE;
  });
  y2.push(p2), a2.add(p2), m.setScreenSize(512, 512), m.continue(1 / 0);
}
class g extends h {
  constructor(e2, t2, o2, i2) {
    super(e2, t2, o2, e2.tileInfo.lods.length - 1), this._memCache = i2, this._ongoingTileRequests = /* @__PURE__ */ new Map(), this._ongoingRequestToController = /* @__PURE__ */ new Map(), this._tileInfoView = new t$1(e2.tileInfo, e2.fullExtent);
  }
  destroy() {
    super.destroy(), this._ongoingRequestToController.forEach((e2) => e2.abort()), this._ongoingRequestToController.clear(), this._ongoingTileRequests.clear();
  }
  async getVectorTile(s2, l2, g2, h2) {
    const u2 = new e$1(s2, l2, g2, 0);
    let m = this._memCache.get(u2.id);
    if (null != m)
      return m.retain(), m;
    const c2 = await this._getVectorTileData(u2);
    if (s$1(h2), !this._layer)
      return null;
    if (m = this._memCache.get(u2.id), null != m)
      return m.retain(), m;
    const T = this._layer.tileInfo.getTileBounds(u$1(), u2), _ = this._tileInfoView.getTileResolution(s2);
    return m = new d(u2, _, T[0], T[3], 512, 512, this._styleRepository, this._memCache), c2 ? (m.setData(c2), m.retain(), this._memCache.put(u2.id, m, m.usedMemory, e$2)) : m.setData(null), m.neededForCoverage = true, m.transforms.tileUnitsToPixels = t$2(1 / 8, 0, 0, 0, 1 / 8, 0, 0, 0, 1), p(m), m;
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
const b = { vtlBackground: u, vtlFill: f, vtlLine: s$2, vtlCircle: n$1, vtlSymbol: d$1 };
const o = 1e-6;
class l {
  constructor(e2, t2) {
    this.spriteMosaic = e2, this.glyphMosaic = t2, this._brushCache = /* @__PURE__ */ new Map(), this._vtlMaterialManager = new p$1();
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
    for (let i$1 = 0; i$1 < n2.length; i$1++) {
      const s3 = n2[i$1];
      if (s3.type !== a.SYMBOL)
        continue;
      const l2 = s3.getLayoutProperty("visibility");
      if (l2 && l2.getValue() === i.NONE)
        continue;
      const c2 = e2.displayLevel;
      void 0 !== s3.minzoom && s3.minzoom > c2 + o || void 0 !== s3.maxzoom && s3.maxzoom <= c2 - o || (e2.styleLayerUID = s3.uid, e2.styleLayer = s3, this._drawWithBrush(e2, t2, "vtlSymbol"));
    }
  }
  drawBackground(e2, t2, s2) {
    if (0 === s2.backgroundBucketIds.length)
      return;
    const { context: n2, displayLevel: i$1, requiredLevel: l2 } = e2;
    t2.key.level = l2, n2.setBlendingEnabled(true), n2.setDepthTestEnabled(false), n2.setStencilTestEnabled(false), e2.renderPass = "background", s2.backgroundBucketIds.forEach((n3) => {
      const l3 = s2.getLayerById(n3);
      if (l3.type !== a.BACKGROUND)
        return;
      const c2 = l3.getLayoutProperty("visibility");
      c2 && c2.getValue() === i.NONE || void 0 !== l3.minzoom && l3.minzoom > i$1 + o || void 0 !== l3.maxzoom && l3.maxzoom <= i$1 - o || (e2.styleLayerUID = l3.uid, e2.styleLayer = l3, this._drawWithBrush(e2, t2, "vtlBackground"));
    });
  }
  drawTile(e2, t2, s2, r2) {
    const { context: a2 } = e2, o2 = s2.layers;
    a2.setBlendingEnabled(false), a2.setDepthTestEnabled(true), a2.setDepthWriteEnabled(true), a2.setDepthFunction(O.LEQUAL), e2.renderPass = "opaque";
    for (let n2 = o2.length - 1; n2 >= 0; n2--) {
      const s3 = o2[n2];
      null != r2 && r2 !== s3.type || this._renderStyleLayer(s3, e2, t2, false);
    }
    a2.setDepthWriteEnabled(false), a2.setBlendingEnabled(true), a2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.renderPass = "translucent";
    for (let n2 = 0; n2 < o2.length; n2++) {
      const s3 = o2[n2];
      null != r2 && r2 !== s3.type || this._renderStyleLayer(s3, e2, t2, false);
    }
    a2.setDepthTestEnabled(false), a2.bindVAO();
  }
  _renderStyleLayer(e2, t2, s2, n2) {
    if (!(n2 || e2 && s2.layerData.has(e2.uid)))
      return;
    const i$1 = e2.getLayoutProperty("visibility");
    if (i$1 && i$1.getValue() === i.NONE)
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
    const { context: h2 } = t2;
    h2.setStencilTestEnabled(false), h2.setStencilWriteMask(0), t2.styleLayerUID = e2.uid, t2.styleLayer = e2, this._drawWithBrush(t2, s2, c2);
  }
  _drawWithBrush(e2, s2, r2) {
    if (!this._brushCache.has(r2)) {
      const e3 = b[r2];
      this._brushCache.set(r2, new e3());
    }
    this._brushCache.get(r2).drawMany(e2, [s2]);
  }
}
let C = class extends c(n$2(u$3)) {
  constructor() {
    super(...arguments), this._tileHandlerController = null, this.type = "vector-tile-3d", this.levelShift = has("disable-feature:vtl-level-shift") ? 0 : 1;
  }
  initialize() {
    if (null == this.layer.fullExtent)
      return void this.addResolvingPromise(Promise.reject(new s$3("vectortilelayerview:full-extent-undefined", "This layer view's layer does not define a fullExtent.")));
    const { basemapTerrain: e2, spatialReference: i2, state: l$12, viewingMode: r2 } = this.view, h2 = "local" === r2 && !k(i2) || M.force512VTL, c2 = this.layer.tileInfo.spatialReference.isGeographic, y2 = h2 ? this.layer.tileInfo : this.layer.tileInfo.getOrCreateCompatible(256, c2 ? 1 : 2), g$1 = this._getTileInfoSupportError(y2, this.layer.fullExtent);
    if (null != g$1)
      return this.addResolvingPromise(Promise.reject(g$1));
    const _ = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const t$12 = e2.tilingScheme, i3 = t$12.pixelSize, l2 = 256 === i3 ? 1 : 2, r3 = e2.spatialReference?.isGeographic && 256 === i3 ? 1 : 0, s2 = e2.spatialReference?.isGeographic || 256 !== i3 ? 0 : 1;
      let o2;
      if (this.schemaHelper = new t(l2, r3, this.levelShift + s2), 256 === i3) {
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
    const C2 = this.view.resourceController;
    this._memCache = C2.memoryController.newCache(`vtl-${this.layer.uid}`, (e3) => {
      e3.release();
    }), this.addHandles(d$2(() => this.view.qualitySettings.memoryLimit, (e3) => this._memCache.maxSize = Math.ceil(e3 / 10 * 1048576), A$1));
    const S2 = new l$2(this.layer.currentStyleInfo.style);
    this._tileHandler = new g(this.layer, S2, l$12.contentPixelRatio, this._memCache);
    const H = this._tileHandlerController.signal, R2 = w(C2), j = this._tileHandler.start({ signal: H, schedule: R2 }), x = this._tileHandler.spriteMosaic;
    x.then((e3) => {
      !c$1(H) && this._tileHandler && (this.painter = new l(e3, this._tileHandler.glyphMosaic));
    }), j.then(() => this._tileHandlerController = null), this._updatingHandles.add(() => ({ style: this.layer.currentStyleInfo.style, pixelRatio: this.view.state?.contentPixelRatio }), ({ style: e3, pixelRatio: t2 }) => {
      this._tileHandlerController && this._tileHandlerController.abort(), this._tileHandlerController = new AbortController(), this._memCache.clear();
      const i3 = new l$2(e3), l$13 = new g(this.layer, i3, t2, this._memCache), r3 = l$13.start({ signal: this._tileHandlerController.signal, schedule: R2 }), s2 = l$13.spriteMosaic;
      r3.then(() => this._tileHandlerController = null), this._updatingHandles.addPromise(Promise.all([r3, s2]).then(([, e4]) => {
        const t3 = this._tileHandler, i4 = this.painter;
        this.painter = new l(e4, l$13.glyphMosaic), this._tileHandler = l$13, this.emit("data-changed"), t3.destroy(), i4 && i4.dispose();
      }));
    });
    const L = Promise.all([_, j, x]);
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
e$4([y()], C.prototype, "layer", void 0), e$4([y()], C.prototype, "levelShift", void 0), e$4([y()], C.prototype, "contentZoom", null), e$4([y()], C.prototype, "displayLevelRange", null), e$4([y()], C.prototype, "tileInfo", void 0), e$4([y()], C.prototype, "dataScaleRange", null), e$4([y()], C.prototype, "dataLevelRange", null), e$4([y()], C.prototype, "updatingProgressValue", void 0), C = e$4([c$2("esri.views.3d.layers.VectorTileLayerView3D")], C);
const S = C;
function w(e2) {
  return (t2) => e2.immediate.schedule(t2);
}
export {
  S as default
};
