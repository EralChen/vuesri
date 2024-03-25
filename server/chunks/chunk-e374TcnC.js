import { hH as e, gO as e$1, qN as s, p8 as a$1, b6 as u$1, kt as E, eP as r$1, qO as s$1, qP as r$2, qQ as i, qR as c$3, qS as e$3, cu as E$1, o9 as I$1, o7 as O, mb as R, qT as a$2, qU as t, as as j$1, qV as E$2, qW as n$2, qX as L, bJ as c$4, eL as r$3, qY as d$2, gJ as m$2, eu as u$2, qZ as l$1, q_ as I$2, cc as m$3, q$ as p$1, c8 as u$3, bO as G, cd as b$1, aT as s$4, gM as m$4, bD as a$3, r0 as d$3, cY as x$1, aV as e$5, aX as y$2, a_ as c$5 } from "./chunk-ejFG4zJ0.js";
import { n as n$1, e as e$2, l, t as t$1, h as h$3 } from "./chunk-IZN__eHF.js";
import { i as i$1 } from "./chunk-YBgi6goH.js";
import { s as s$2 } from "./chunk-E1ai5rf5.js";
import { e as e$4, s as s$3 } from "./chunk-FDDBfvr6.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-nvycIlGH.js";
import "./chunk-9fkEo-9z.js";
const r = 512, n = 1e-6, a = (e2, i2) => e2 + 1 / (1 << 2 * i2);
let h$2 = class h {
  constructor(i2, t2) {
    this._tiles = /* @__PURE__ */ new Map(), this._tileCache = new e(40, (e2) => e2.dispose()), this._viewSize = [0, 0], this._visibleTiles = /* @__PURE__ */ new Map(), this.acquireTile = i2.acquireTile, this.releaseTile = i2.releaseTile, this.tileInfoView = i2.tileInfoView, this._container = t2;
  }
  destroy() {
    for (const [e2, i2] of this._tiles)
      i2.dispose();
    this._tiles = null, this._tileCache.clear(), this._tileCache = null;
  }
  update(e2) {
    this._updateCacheSize(e2);
    const i2 = this.tileInfoView, t2 = i2.getTileCoverage(e2.state, 0, true, "smallest");
    if (!t2)
      return true;
    const { spans: l2, lodInfo: r2 } = t2, { level: n2 } = r2, a2 = this._tiles, h3 = /* @__PURE__ */ new Set(), c2 = /* @__PURE__ */ new Set();
    for (const { row: s2, colFrom: _2, colTo: f } of l2)
      for (let e3 = _2; e3 <= f; e3++) {
        const i3 = e$1.getId(n2, s2, r2.normalizeCol(e3), r2.getWorldForColumn(e3)), t3 = this._getOrAcquireTile(i3);
        h3.add(i3), t3.processed() ? this._addToContainer(t3) : c2.add(new e$1(i3));
      }
    for (const [s2, o] of a2)
      o.isCoverage = h3.has(s2);
    for (const s2 of c2)
      this._findPlaceholdersForMissingTiles(s2, h3);
    let d2 = false;
    for (const [s2, o] of a2)
      o.neededForCoverage = h3.has(s2), o.neededForCoverage || o.isHoldingForFade && i2.intersects(t2, o.key) && h3.add(s2), o.isFading && (d2 = true);
    for (const [s2, o] of this._tiles)
      h3.has(s2) || this._releaseTile(s2);
    return s.pool.release(t2), !d2;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  getIntersectingTiles(e2, s2, o, r2, n2) {
    const a2 = [0, 0], h3 = [0, 0];
    r2.toMap(a2, e2 - o, s2 + o), r2.toMap(h3, e2 + o, s2 - o);
    const c2 = Math.min(a2[0], h3[0]), d2 = Math.min(a2[1], h3[1]), _2 = Math.max(a2[0], h3[0]), f = Math.max(a2[1], h3[1]), T = a$1(c2, d2, _2, f), p2 = u$1(), u2 = [];
    for (const [i2, t2] of this._visibleTiles)
      this.tileInfoView.getTileBounds(p2, t2.key), E(T, p2) && u2.push(t2);
    if (null != n2 && n2.length > 0) {
      const e3 = new Set(u2.map((e4) => e4.id)), i2 = n2.filter((i3) => !e3.has(i3.tileKey.id)).map((e4) => this._visibleTiles.get(e4.tileKey.id)).filter((e4) => void 0 !== e4);
      u2.push(...i2);
    }
    return u2;
  }
  _findPlaceholdersForMissingTiles(e2, i2) {
    const t2 = [];
    for (const [s2, o] of this._tiles)
      this._addPlaceholderChild(t2, o, e2, i2);
    const l2 = t2.reduce(a, 0);
    Math.abs(1 - l2) < n || this._addPlaceholderParent(e2.id, i2);
  }
  _addPlaceholderChild(e2, i2, t2, l2) {
    i2.key.level <= t2.level || !i2.hasData() || d$1(t2, i2.key) && (this._addToContainer(i2), l2.add(i2.id), e2.push(i2.key.level - t2.level));
  }
  _addPlaceholderParent(e2, i2) {
    const t2 = this._tiles;
    let l2 = e2;
    for (; ; ) {
      if (l2 = c$2(l2), !l2 || i2.has(l2))
        return;
      const e3 = t2.get(l2);
      if (e3 && e3.hasData())
        return this._addToContainer(e3), void i2.add(e3.id);
    }
  }
  _getOrAcquireTile(e2) {
    let i2 = this._tiles.get(e2);
    return i2 || (i2 = this._tileCache.pop(e2), i2 || (i2 = this.acquireTile(new e$1(e2))), this._tiles.set(e2, i2), i2);
  }
  _releaseTile(e2) {
    const i2 = this._tiles.get(e2);
    this.releaseTile(i2), this._removeFromContainer(i2), this._tiles.delete(e2), i2.hasData() ? this._tileCache.put(e2, i2, 1) : i2.dispose();
  }
  _addToContainer(e2) {
    let i2;
    const t2 = [], l2 = this._container;
    if (l2.contains(e2))
      return;
    const s2 = this._visibleTiles;
    for (const [o, r2] of s2)
      this._canConnectDirectly(e2, r2) && t2.push(r2), null == i2 && this._canConnectDirectly(r2, e2) && (i2 = r2);
    if (null != i2) {
      for (const l3 of t2)
        i2.childrenTiles.delete(l3), e2.childrenTiles.add(l3), l3.parentTile = e2;
      i2.childrenTiles.add(e2), e2.parentTile = i2;
    } else
      for (const o of t2)
        e2.childrenTiles.add(o), o.parentTile = e2;
    s2.set(e2.id, e2), l2.addChild(e2);
  }
  _removeFromContainer(e2) {
    if (this._visibleTiles.delete(e2.id), this._container.removeChild(e2), null != e2.parentTile) {
      e2.parentTile.childrenTiles.delete(e2);
      for (const i2 of e2.childrenTiles)
        null != e2.parentTile && e2.parentTile.childrenTiles.add(i2);
    }
    for (const i2 of e2.childrenTiles)
      i2.parentTile = e2.parentTile;
    e2.parentTile = null, e2.childrenTiles.clear();
  }
  _canConnectDirectly(e2, i2) {
    const t2 = e2.key;
    let { level: l2, row: s2, col: o, world: r2 } = i2.key;
    const n2 = this._visibleTiles;
    for (; l2 > 0; ) {
      if (l2--, s2 >>= 1, o >>= 1, t2.level === l2 && t2.row === s2 && t2.col === o && t2.world === r2)
        return true;
      if (n2.has(`${l2}/${s2}/${o}/${r2}`))
        return false;
    }
    return false;
  }
  _updateCacheSize(e2) {
    const i2 = e2.state.size;
    if (i2[0] === this._viewSize[0] && i2[1] === this._viewSize[1])
      return;
    const t2 = Math.ceil(i2[0] / r) + 1, l2 = Math.ceil(i2[1] / r) + 1;
    this._viewSize[0] = i2[0], this._viewSize[1] = i2[1], this._tileCache.maxSize = 5 * t2 * l2;
  }
};
function c$2(e2) {
  const [i2, t2, l2, s2] = e2.split("/"), o = parseInt(i2, 10);
  return 0 === o ? null : `${o - 1}/${parseInt(t2, 10) >> 1}/${parseInt(l2, 10) >> 1}/${parseInt(s2, 10)}`;
}
function d$1(e2, i2) {
  const t2 = i2.level - e2.level;
  return e2.row === i2.row >> t2 && e2.col === i2.col >> t2 && e2.world === i2.world;
}
const c$1 = 0.5, h$1 = 1e-6;
class _ {
  constructor(e2, i$12) {
    this.styleRepository = e2, this._tileToHandle = /* @__PURE__ */ new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._offsetFromScreenCenter = [0, 0], this._completed = false, this._fading = r$1(false), this._symbolRepository = new n$1(4096, i$12, () => new s$1()), this._symbolDeclutterer = new e$2(i$12, this._symbolRepository, (t2, e3, i2) => this._createCollisionJob(t2, e3, i2), (t2, e3) => {
      t2.allSymbolsFadingOut = true, t2.lastOpacityUpdate = e3, r$2(t2, e3, true), t2.decluttered = true, t2.requestRender();
    }, (t2, e3) => this.styleRepository.getStyleLayerByUID(t2.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(e3.styleLayerUID).z, (t2) => {
      const e3 = this.styleRepository.getStyleLayerByUID(t2);
      if (this._zoom + h$1 < e3.minzoom || this._zoom - h$1 >= e3.maxzoom)
        return false;
      const i$13 = e3.getLayoutProperty("visibility");
      return !i$13 || i$13.getValue() !== i.NONE;
    });
  }
  get symbolRepository() {
    return this._symbolRepository;
  }
  _createCollisionJob(t2, e2, i2) {
    return this.updateDecluttererViewState(), new l(t2, e2, i2, this.styleRepository, this._zoom, this._viewState.rotation);
  }
  get fading() {
    return this._fading.value;
  }
  get decluttererOffset() {
    return this._offsetFromScreenCenter;
  }
  addTile(t2) {
    t2.decluttered = false, this._tileToHandle.set(t2, t2.on("symbols-changed", () => {
      this._symbolRepository.add(t2), this.restartDeclutter();
    })), this._symbolRepository.add(t2), this.restartDeclutter();
  }
  removeTile(t2) {
    const e2 = this._tileToHandle.get(t2);
    e2 && (this._symbolRepository.removeTile(t2), this.restartDeclutter(), e2.remove(), this._tileToHandle.delete(t2));
  }
  update(t2, e2) {
    this._zoom = t2, this._viewState = { scale: e2.scale, rotation: e2.rotation, center: [e2.center[0], e2.center[1]], size: [e2.size[0], e2.size[1]] };
    const i2 = [0, 0];
    e2.toScreen(i2, e2.center);
    const s2 = [0, 0];
    return e2.toScreen(s2, this._declutterViewState.center), this._offsetFromScreenCenter[0] = i2[0] - s2[0], this._offsetFromScreenCenter[1] = i2[1] - s2[1], this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = false, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = false, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((t2) => t2.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(t2) {
    this._symbolRepository.deleteStyleLayers(t2);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this.updateDecluttererViewState(), this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(c$3), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    null != this._stableNotificationHandle && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this._fading.value = false;
    }, (1 + c$1) * e$3);
  }
  _notifyUnstable() {
    null != this._stableNotificationHandle && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this._fading.value = true;
  }
  updateDecluttererViewState() {
    this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._offsetFromScreenCenter[0] = 0, this._offsetFromScreenCenter[1] = 0;
  }
}
const y$1 = 1e-6;
function p(e2, t2) {
  if (e2) {
    const s2 = e2.getLayoutProperty("visibility");
    if (!s2 || s2.getValue() !== i.NONE && (void 0 === e2.minzoom || e2.minzoom < t2 + y$1) && (void 0 === e2.maxzoom || e2.maxzoom >= t2 - y$1))
      return true;
  }
  return false;
}
let m$1 = class m extends i$1 {
  constructor(e2) {
    super(e2), this._backgroundTiles = [], this._computeDisplayInfoView(e2);
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic?.dispose(), this._spriteMosaic = null, this._glyphMosaic?.dispose(), this._glyphMosaic = null, null != this._symbolFader && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [];
  }
  get fading() {
    return this._symbolFader?.fading ?? false;
  }
  get symbolFader() {
    return this._symbolFader;
  }
  get symbolRepository() {
    return this._symbolFader?.symbolRepository;
  }
  setStyleResources(e2, t2, r2, i2) {
    this._spriteMosaic = e2, this._glyphMosaic = t2, this._styleRepository = r2, this._tileInfoView = i2, this._computeDisplayInfoView(i2), null == this._symbolFader && (this._symbolFader = new _(this._styleRepository, this.children)), this._symbolFader.styleRepository = r2;
  }
  setSpriteMosaic(e2) {
    this._spriteMosaic?.dispose(), this._spriteMosaic = e2;
  }
  deleteStyleLayers(e2) {
    null != this._symbolFader && this._symbolFader.deleteStyleLayers(e2);
  }
  createRenderParams(e2) {
    return { ...super.createRenderParams(e2), renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos };
  }
  doRender(e2) {
    !this.visible || e2.drawPhase !== E$1.MAP && e2.drawPhase !== E$1.DEBUG || void 0 === this._spriteMosaic || super.doRender(e2);
  }
  addChild(e2) {
    return super.addChild(e2), null != this._symbolFader ? this._symbolFader.addTile(e2) : e2.decluttered = true, this.requestRender(), e2;
  }
  removeChild(e2) {
    return null != this._symbolFader && this._symbolFader.removeTile(e2), this.requestRender(), super.removeChild(e2);
  }
  renderChildren(e2) {
    const { drawPhase: t2 } = e2;
    t2 !== E$1.DEBUG ? this._doRender(e2) : super.renderChildren(e2);
  }
  removeAllChildren() {
    for (let e2 = 0; e2 < this.children.length; e2++) {
      const t2 = this.children[e2];
      null != this._symbolFader && this._symbolFader.removeTile(t2), t2.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e2) => e2.neededForCoverage && e2.hasData());
  }
  restartDeclutter() {
    null != this._symbolFader && this._symbolFader.restartDeclutter();
  }
  _doRender(e2) {
    const { context: t2, state: s2 } = e2, r2 = this._styleRepository;
    if (!r2)
      return;
    const i2 = r2.layers, o = this._displayInfo.scaleToZoom(s2.scale);
    r2.backgroundBucketIds.length > 0 && (e2.renderPass = "background", this._renderBackgroundLayers(e2, r2.backgroundBucketIds, o)), super.renderChildren(e2), e2.drawPhase === E$1.MAP && this._fade(o, s2);
    const n2 = this.children.filter((e3) => e3.visible && e3.hasData());
    if (!n2 || 0 === n2.length)
      return t2.bindVAO(), t2.setStencilTestEnabled(true), void t2.setBlendingEnabled(true);
    for (const l2 of n2)
      l2.triangleCount = 0;
    t2.setStencilWriteMask(0), t2.setColorMask(true, true, true, true), t2.setStencilOp(I$1.KEEP, I$1.KEEP, I$1.REPLACE), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(false), t2.setDepthTestEnabled(true), t2.setDepthWriteEnabled(true), t2.setDepthFunction(O.LEQUAL), t2.setClearDepth(1), t2.clear(t2.gl.DEPTH_BUFFER_BIT), e2.renderPass = "opaque";
    for (let l2 = i2.length - 1; l2 >= 0; l2--)
      this._renderStyleLayer(i2[l2], e2, n2);
    t2.setDepthWriteEnabled(false), t2.setBlendingEnabled(true), t2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.renderPass = "translucent";
    for (let l2 = 0; l2 < i2.length; l2++)
      this._renderStyleLayer(i2[l2], e2, n2);
    t2.bindVAO(), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(true);
    for (const l2 of n2)
      l2.debugInfo.display.triangleCount = l2.triangleCount;
  }
  _fade(e2, t2) {
    null != this._symbolFader && (this._symbolFader.update(e2, t2) || this.requestRender());
  }
  _renderStyleLayer(e2, t2, s2) {
    const { displayLevel: l2, painter: o, renderPass: n2 } = t2;
    if (void 0 === e2)
      return;
    const a2 = e2.getLayoutProperty("visibility");
    if (a2 && a2.getValue() === i.NONE)
      return;
    let d2;
    switch (e2.type) {
      case a$2.BACKGROUND:
        return;
      case a$2.FILL:
        if ("opaque" !== n2 && "translucent" !== t2.renderPass)
          return;
        d2 = "vtlFill";
        break;
      case a$2.LINE:
        if ("translucent" !== n2)
          return;
        d2 = "vtlLine";
        break;
      case a$2.CIRCLE:
        if ("translucent" !== n2)
          return;
        d2 = "vtlCircle";
        break;
      case a$2.SYMBOL:
        if ("translucent" !== n2)
          return;
        d2 = "vtlSymbol";
    }
    if (s2 = e2.type === a$2.SYMBOL ? s2.filter((e3) => e3.decluttered) : s2.filter((e3) => e3.neededForCoverage), "vtlSymbol" !== d2 && (0 === s2.length || void 0 !== e2.minzoom && e2.minzoom >= l2 + y$1 || void 0 !== e2.maxzoom && e2.maxzoom < l2 - y$1))
      return;
    const h3 = e2.uid;
    t2.styleLayerUID = h3, t2.styleLayer = e2;
    for (const r2 of s2)
      if (r2.layerData.has(h3)) {
        o.renderObjects(t2, s2, d2);
        break;
      }
  }
  _renderBackgroundLayers(t$12, s$12, r2) {
    const { context: l2, painter: n2, state: u2 } = t$12, y2 = this._styleRepository;
    let m3 = false;
    for (const e2 of s$12) {
      if (y2.getLayerById(e2).type === a$2.BACKGROUND && p(y2.getLayerById(e2), r2)) {
        m3 = true;
        break;
      }
    }
    if (!m3)
      return;
    const f = this._tileInfoView, g = f.getTileCoverage(t$12.state, 0, true, "smallest"), { spans: _2, lodInfo: b } = g, { level: E2 } = b, C = u$1(), F = [];
    if (this._renderPasses) {
      const e2 = this._renderPasses[0];
      null != this._clippingInfos && (e2.brushes[0].prepareState(t$12), e2.brushes[0].drawMany(t$12, this._clippingInfos));
    }
    const L2 = this._backgroundTiles;
    let R2, v = 0;
    for (const { row: i2, colFrom: a2, colTo: h3 } of _2)
      for (let t$13 = a2; t$13 <= h3; t$13++) {
        if (v < L2.length)
          R2 = L2[v], R2.key.set(E2, i2, b.normalizeCol(t$13), b.getWorldForColumn(t$13)), f.getTileBounds(C, R2.key, false), R2.x = C[0], R2.y = C[3], R2.resolution = f.getTileResolution(E2);
        else {
          const s2 = new e$1(E2, i2, b.normalizeCol(t$13), b.getWorldForColumn(t$13)), r3 = f.getTileBounds(u$1(), s2), l3 = f.getTileResolution(E2);
          R2 = new t(s2, l3, r3[0], r3[3], 512, 512, 4096, 4096), L2.push(R2);
        }
        R2.setTransform(u2), F.push(R2), v++;
      }
    l2.setStencilWriteMask(0), l2.setColorMask(true, true, true, true), l2.setStencilOp(I$1.KEEP, I$1.KEEP, I$1.REPLACE), l2.setStencilFunction(O.EQUAL, 0, 255), l2.setStencilTestEnabled(true);
    for (const e2 of s$12) {
      const s2 = y2.getLayerById(e2);
      s2.type === a$2.BACKGROUND && p(s2, r2) && (t$12.styleLayerUID = s2.uid, t$12.styleLayer = s2, n2.renderObjects(t$12, F, "vtlBackground"));
    }
    s.pool.release(g);
  }
  _computeDisplayInfoView(e2) {
    let s2 = e2.tileInfo.lods[0].scale;
    const r2 = Math.max(25, e2.tileInfo.lods.length), i2 = [];
    for (let t2 = 0; t2 <= r2; t2++)
      i2.push(s2), s2 /= 2;
    this._displayInfo = j$1.create({ scales: i2, size: 512, spatialReference: e2.spatialReference, numLODs: r2 });
  }
};
const y = 8, c = 512, u = 4096, h2 = (e2, t2) => {
  const s2 = e2.vtlSymbol.sourceTile, r2 = t2.vtlSymbol.sourceTile;
  return s2.level !== r2.level ? s2.level - r2.level : s2.row !== r2.row ? s2.row - r2.row : s2.col !== r2.col ? s2.col - r2.col : e2.styleLayerUID - t2.styleLayerUID;
};
class d {
  constructor(e2, t2, s2, r2, i2) {
    this.tileKey = e2, this._index = null, this._styleRepository = null, this._tileHandler = null, this._tileKeyToPBF = /* @__PURE__ */ new Map(), this._tileLayerData = t2, this._styleRepository = s2, this._tileHandler = r2, this._parentLayer = i2;
  }
  static create(e2, t2, s2, r2, i2) {
    return new d(e2, t2, s2, r2, i2);
  }
  clear() {
    this._index?.clear(), this._tileKeyToPBF.clear();
  }
  async queryAttributes(e2, t2, s2, i2, l2) {
    if (0 === this._tileLayerData.size || !this._styleRepository || !this._tileHandler)
      return [];
    null === this._index && (this._index = new s$2(100, m2), await this._indexLayers());
    const o = [];
    return this._queryIndex(o, e2, t2, s2, this.tileKey.level, i2), l2 && l2?.length > 0 && await this._getSymbolsAttributes(o, l2), o;
  }
  async _indexLayers() {
    const e2 = this.tileKey, t2 = this._styleRepository.layers, s2 = await this._getTilePayload(e2);
    for (const [r2, l2] of this._tileLayerData) {
      const o = t2[r2], n2 = s2.find((e3) => e3.sourceName === o.source);
      if (!n2)
        continue;
      const { protobuff: a2, key: y2 } = n2;
      if (l2.type !== E$2.SYMBOL) {
        const t3 = 1 << e2.level - y2.level, s3 = e2.row - y2.row * t3, r3 = e2.col - y2.col * t3;
        this._indexLayer(o, a2, e2.level, t3, s3, r3);
      }
    }
  }
  _indexLayer(e2, t2, r2, i2, y2, h3) {
    const d2 = e2.sourceLayer, m3 = e2.getFeatureFilter(), f = r2, _2 = r2 + 1, p2 = d$2(f), g = new n$2(new Uint8Array(t2), new DataView(t2));
    for (; g.next(); )
      switch (g.tag()) {
        case 3: {
          const t3 = g.getMessage(), s2 = new e$4(t3);
          if (t3.release(), s2.name !== d2)
            continue;
          const o = s2.getData(), w2 = s2.extent / i2, x = w2 * h3 - p2, b = w2 * y2 - p2, I2 = x + w2 + 2 * p2, L$1 = b + w2 + 2 * p2, v = w2 / c, D2 = u / w2, T = w2 * h3, S2 = w2 * y2;
          for (; o.nextTag(2); ) {
            const t4 = o.getMessage(), i3 = new s$3(t4, s2);
            if (t4.release(), m3 && !m3.filter(i3, r2))
              continue;
            const n2 = i3.values || {}, y3 = n2._minzoom, c2 = n2._maxzoom;
            if (y3 && y3 >= 10 * _2 || c2 && c2 <= 10 * f)
              continue;
            const u2 = e2.getFeatureInflatedBounds(i3, f, s2.extent, v);
            null == u2 || u2[0] > I2 || u2[1] > L$1 || u2[2] < x || u2[3] < b || (u2[0] = (u2[0] - T) * D2, u2[1] = (u2[1] - S2) * D2, u2[2] = (u2[2] - T) * D2, u2[3] = (u2[3] - S2) * D2, this._index.insert(new L(e2, i3, u2, D2, T, S2)));
          }
          break;
        }
        default:
          g.skip();
      }
  }
  async _getSymbolsAttributes(e2, t2) {
    if (!t2 || 0 === t2.length)
      return e2;
    const s2 = [];
    t2.sort(h2);
    let r2 = t2[0].styleLayerUID, i2 = 0;
    for (let a2 = 0; a2 < t2.length; a2++)
      r2 !== t2[a2].styleLayerUID && (s2.push({ from: i2, to: a2, styleLayerUID: r2, sourceTileKey: t2[a2].vtlSymbol.sourceTile }), i2 = a2, r2 = t2[a2].styleLayerUID);
    s2.push({ from: i2, to: t2.length, styleLayerUID: r2, sourceTileKey: t2[t2.length - 1].vtlSymbol.sourceTile });
    const l2 = this._styleRepository.layers;
    let o, n2 = null;
    for (const a2 of s2) {
      const s3 = await this._getTilePayload(a2.sourceTileKey);
      o = l2[a2.styleLayerUID], n2 = !!o && s3.find((e3) => e3.sourceName === o.source), n2 && this._addSymbolsAttributes(e2, t2.slice(a2.from, a2.to).map((e3) => e3.vtlSymbol), r2, n2);
    }
    return e2;
  }
  _addSymbolsAttributes(t2, s2, r2, i2) {
    const l2 = this._styleRepository.layers, o = i2.key, n2 = this.tileKey, a2 = 1 << n2.level - o.level, y2 = n2.row - o.row * a2, c2 = n2.col - o.col * a2;
    this._getSymbolAttributes(i2.protobuff, s2, r2, a2, y2, c2).forEach((s3) => {
      const { attributes: i3, tilePoint: o2 } = s3;
      t2.push({ layerId: l2[r2].id, layerIndex: r2, graphic: new c$4({ attributes: i3, origin: { type: "vector-tile", layerId: l2[r2].id, layerIndex: r2, layer: this._parentLayer } }), tilePoint: o2 });
    });
  }
  _getSymbolAttributes(e2, t2, r2, i2, o, a2) {
    const y2 = [], c2 = this._styleRepository.layers;
    let h3 = 0;
    t2.sort((e3, t3) => e3.featureIndex - t3.featureIndex);
    const d2 = new n$2(new Uint8Array(e2), new DataView(e2));
    for (; d2.next(); )
      switch (d2.tag()) {
        case 3: {
          const e3 = d2.getMessage(), s2 = new e$4(e3);
          if (e3.release(), s2.name !== c2[r2].sourceLayer)
            continue;
          const m3 = s2.getData(), f = s2.extent / i2, _2 = u / f, p2 = f * a2, g = f * o;
          let w2 = 0;
          for (; m3.nextTag(2); ) {
            const e4 = m3.getMessage();
            if (w2++ === t2[h3].featureIndex) {
              const t3 = new s$3(e4, s2), r3 = t3.values, i3 = t3.getGeometry(), o2 = null != i3 ? [_2 * (i3[0][0].x - p2), _2 * (i3[0][0].y - g)] : null;
              y2.push({ attributes: r3, tilePoint: o2 }), h3++;
            }
            if (e4.release(), h3 === t2.length)
              return y2;
          }
          break;
        }
        default:
          d2.skip();
      }
    return y2;
  }
  _queryIndex(t2, s2, r2, i2, l2, o) {
    const n2 = y * i2 * (window.devicePixelRatio || 1);
    return this._index?.search({ minX: s2 - n2, minY: r2 - n2, maxX: s2 + n2, maxY: r2 + n2 }, (n3) => {
      const { layer: a2, feature: y2 } = n3;
      a2.isIntersectingFeature(s2, r2, i2, y2, l2, o, n3) && t2.push({ layerId: a2.id, layerIndex: a2.uid, tilePoint: null, graphic: new c$4({ attributes: y2.values, origin: { type: "vector-tile", layerId: n3.layer.id, layerIndex: n3.layer.uid, layer: this._parentLayer } }) });
    }), t2;
  }
  async _getTilePayload(e2) {
    return r$3(this._tileKeyToPBF, e2.id, () => this._tileHandler.fetchTilePBFs(e2)).then((e3) => e3);
  }
}
const m2 = (e2) => ({ minX: e2.bounds[0], minY: e2.bounds[1], maxX: e2.bounds[2], maxY: e2.bounds[3] });
const w = 2, I = 8, D = 512;
let S = class extends m$2(u$2) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._fetchQueue = null, this._parseQueue = null, this._tileHandlerPromise = null, this._isTileHandlerReady = false;
  }
  get fading() {
    return this._vectorTileContainer?.fading ?? false;
  }
  async hitTest(e2, t2) {
    const i2 = this._tileHandlerPromise, s2 = this._vectorTileContainer?.symbolFader;
    if (!i2 || !this._isTileHandlerReady || !s2)
      return;
    await i2;
    let r2 = null;
    const a2 = this._vectorTileContainer?.symbolRepository;
    a2 && (r2 = a2.querySymbols(t2, w, s2.decluttererOffset, {}));
    const l2 = this.view.state, n2 = this._tileManager.getIntersectingTiles(t2.x, t2.y, w, l2, r2);
    if ((!n2 || 0 === n2.length) && 0 === r2?.length)
      return null;
    e2 = e2.clone().normalize();
    const o = [], h3 = [];
    for (const y2 of n2)
      o.push(this._queryTile(h3, e2, w, this.view.state.rotation, y2, r2?.filter((e3) => e3.tileKey.id === y2.id)));
    return await Promise.all(o), h3;
  }
  update(e2) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return e2.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = e2.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = e2.state, this._parseQueue.state = e2.state, this._tileManager.update(e2) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    const { style: e2 } = this.layer.currentStyleInfo;
    this._styleRepository = new l$1(e2), this._tileInfoView = new t$1(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new m$1(this._tileInfoView), this._tileHandler = new h$3(this.layer, this._styleRepository, window.devicePixelRatio || 1, this.layer.tileInfo.lods.length - 1), this.container.addChild(this._vectorTileContainer), this._start(), this.addAttachHandles([this.layer.on("paint-change", (e3) => {
      if (e3.isDataDriven)
        this._styleChanges.push({ type: I$2.PAINTER_CHANGED, data: e3 }), this.requestUpdate();
      else {
        const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
        if (!i2)
          return;
        const s2 = i2.type === a$2.SYMBOL;
        t2.setPaintProperties(e3.layer, e3.paint), s2 && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender();
      }
    }), this.layer.on("layout-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      if (!i2)
        return;
      const s2 = m$3(i2.layout, e3.layout);
      if (null != s2) {
        if (p$1(s2, "visibility") && 1 === P(s2))
          return t2.setLayoutProperties(e3.layer, e3.layout), i2.type === a$2.SYMBOL && this._vectorTileContainer?.restartDeclutter(), void this._vectorTileContainer?.requestRender();
        this._styleChanges.push({ type: I$2.LAYOUT_CHANGED, data: e3 }), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      i2 && (t2.setStyleLayerVisibility(e3.layer, e3.visibility), i2.type === a$2.SYMBOL && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender());
    }), this.layer.on("style-layer-change", (e3) => {
      this._styleChanges.push({ type: I$2.LAYER_CHANGED, data: e3 }), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e3) => {
      this._styleChanges.push({ type: I$2.LAYER_REMOVED, data: e3 }), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle()), this.layer.on("spriteSource-change", (e3) => {
      this._styleChanges.push({ type: I$2.SPRITES_CHANGED, data: e3 });
      const t2 = this._styleRepository.layers;
      for (const i2 of t2)
        switch (i2.type) {
          case a$2.SYMBOL:
            i2.getLayoutProperty("icon-image") && this._styleChanges.push({ type: I$2.LAYOUT_CHANGED, data: { layer: i2.id, layout: i2.layout } });
            break;
          case a$2.LINE:
            i2.getPaintProperty("line-pattern") && this._styleChanges.push({ type: I$2.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
            break;
          case a$2.FILL:
            i2.getLayoutProperty("fill-pattern") && this._styleChanges.push({ type: I$2.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
        }
      this.requestUpdate();
    })]);
  }
  detach() {
    this._stop(), this.container.removeAllChildren(), this._vectorTileContainer = u$3(this._vectorTileContainer), this._tileHandler = u$3(this._tileHandler);
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
  supportsSpatialReference(e2) {
    return G(this.layer.tileInfo?.spatialReference, e2);
  }
  canResume() {
    let e2 = super.canResume();
    const { currentStyleInfo: t2 } = this.layer;
    if (e2 && t2?.layerDefinition) {
      const i2 = this.view.scale, { minScale: s2, maxScale: r2 } = t2.layerDefinition;
      t2?.layerDefinition && (s2 && s2 < i2 && (e2 = false), r2 && r2 > i2 && (e2 = false));
    }
    return e2;
  }
  isUpdating() {
    return this.fading;
  }
  acquireTile(e2) {
    const t2 = this._createVectorTile(e2);
    return this._updatingHandles.addPromise(this._fetchQueue.push(t2.key).then((e3) => this._parseQueue.push({ key: t2.key, data: e3 })).then((e3) => {
      t2.once("attach", () => this.requestUpdate()), t2.setData(e3), this.requestUpdate();
    }).catch((e3) => {
      b$1(e3) || s$4.getLogger(this).error(e3);
    })), t2;
  }
  releaseTile(e2) {
    const t2 = e2.key.id;
    this._fetchQueue.abort(t2), this._parseQueue.abort(t2), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new h$2({ acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo)
      return;
    const e2 = new AbortController(), t2 = this._tileHandler.start({ signal: e2.signal }).then(() => {
      this._fetchQueue = new m$4({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._getTileData(e3, t3), concurrency: 15 }), this._parseQueue = new m$4({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._parseTileData(e3, t3), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = true;
    });
    this._tileHandler.spriteMosaic.then((e3) => {
      this._vectorTileContainer.setStyleResources(e3, this._tileHandler.glyphMosaic, this._styleRepository, this._tileInfoView), this.requestUpdate();
    }), this._tileHandlerAbortController = e2, this._tileHandlerPromise = t2;
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer)
      return;
    const e2 = this._tileHandlerAbortController;
    e2 && e2.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = false, this._fetchQueue = u$3(this._fetchQueue), this._parseQueue = u$3(this._parseQueue), this._tileManager = u$3(this._tileManager), this._vectorTileContainer.removeAllChildren();
  }
  async _getTileData(e2, t2) {
    return this._tileHandler.fetchTileData(e2, t2);
  }
  async _parseTileData(e2, t2) {
    return this._tileHandler.parseTileData(e2, t2);
  }
  async _applyStyleChanges() {
    this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
    const e2 = this._styleChanges;
    try {
      await this._tileHandler.updateStyle(e2);
    } catch (l2) {
      s$4.getLogger(this).error("error applying vector-tiles style update", l2.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true;
    }
    const t2 = this._styleRepository, s2 = /* @__PURE__ */ new Set();
    e2.forEach((e3) => {
      if (e3.type !== I$2.LAYER_REMOVED)
        return;
      const i2 = e3.data, r3 = t2.getLayerById(i2.layer);
      r3 && s2.add(r3.uid);
    });
    const r2 = /* @__PURE__ */ new Set();
    e2.forEach((e3) => {
      let i2;
      switch (e3.type) {
        case I$2.PAINTER_CHANGED:
          t2.setPaintProperties(e3.data.layer, e3.data.paint), i2 = e3.data.layer;
          break;
        case I$2.LAYOUT_CHANGED:
          t2.setLayoutProperties(e3.data.layer, e3.data.layout), i2 = e3.data.layer;
          break;
        case I$2.LAYER_REMOVED:
          return void t2.deleteStyleLayer(e3.data.layer);
        case I$2.LAYER_CHANGED:
          t2.setStyleLayer(e3.data.layer, e3.data.index), i2 = e3.data.layer.id;
          break;
        case I$2.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(e3.data.spriteSource));
      }
      if (i2) {
        const e4 = t2.getLayerById(i2);
        e4 && r2.add(e4.uid);
      }
    });
    const a2 = this._vectorTileContainer.children;
    if (s2.size > 0) {
      const e3 = Array.from(s2);
      this._vectorTileContainer.deleteStyleLayers(e3);
      for (const t3 of a2)
        t3.deleteLayerData(e3);
    }
    if (this._fetchQueue.resume(), this._parseQueue.resume(), r2.size > 0) {
      const e3 = Array.from(r2), t3 = [];
      for (const i2 of a2) {
        const s3 = this._updatingHandles.addPromise(this._fetchQueue.push(i2.key).then((t4) => this._parseQueue.push({ key: i2.key, data: t4, styleLayerUIDs: e3 })).then((e4) => i2.setData(e4)));
        t3.push(s3);
      }
      await Promise.all(t3);
    }
    this._styleChanges = [], this._isTileHandlerReady = true, this.requestUpdate();
  }
  async _loadStyle() {
    const { style: e2 } = this.layer.currentStyleInfo, i2 = a$3(e2);
    this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._styleRepository = new l$1(i2), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = new AbortController();
    const { signal: s2 } = this._tileHandlerAbortController;
    try {
      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, i2, this.layer.tileInfo.lods.length - 1), await this._tileHandlerPromise;
    } catch (n2) {
      if (!b$1(n2))
        throw n2;
    }
    if (s2.aborted)
      return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, void this.requestUpdate();
    const a2 = await this._tileHandler.spriteMosaic, l2 = this._vectorTileContainer;
    this._tileInfoView = new t$1(this.layer.tileInfo, this.layer.fullExtent), l2.setStyleResources(a2, this._tileHandler.glyphMosaic, this._styleRepository, this._tileInfoView), this._tileManager = new h$2({ acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }, this._vectorTileContainer), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.requestUpdate();
  }
  _createVectorTile(e2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), e2), i2 = this._tileInfoView.getTileResolution(e2.level);
    return new d$3(e2, i2, t2[0], t2[3], 512, 512, this._styleRepository);
  }
  async _queryTile(e2, t2, i2, s2, r2, a2) {
    if (0 === r2.layerData.size)
      return;
    const l2 = this._ensureTileIndex(r2), n2 = this._tileInfoView.getTileBounds(u$1(), r2.key, true), o = I * D * ((t2.x - n2[0]) / (n2[2] - n2[0])), h3 = I * D * (1 - (t2.y - n2[1]) / (n2[3] - n2[1])), u2 = await l2.queryAttributes(o, h3, i2, s2, a2);
    for (const y2 of u2)
      y2.graphic.geometry = this._tileToMapPoint(y2.tilePoint, r2.transforms.tileUnitsToPixels), e2.push({ type: "graphic", layer: this.layer, graphic: y2.graphic, mapPoint: t2.clone() });
    e2.sort((e3, t3) => t3.graphic.origin.layerIndex - e3.graphic.origin.layerIndex);
  }
  _tileToMapPoint(e2, t2) {
    if (!e2)
      return null;
    const i2 = e2[0] * t2[0] + e2[1] * t2[3] + t2[6], s2 = e2[0] * t2[1] + e2[1] * t2[4] + t2[7], r2 = this.view.state, a2 = [0, 0];
    return r2.toMap(a2, [i2, s2]), new x$1({ x: a2[0], y: a2[1], spatialReference: r2.spatialReference });
  }
  _ensureTileIndex(e2) {
    let t2 = e2.featureIndex;
    return t2 || (t2 = d.create(e2.key, e2.layerData, this._styleRepository, this._tileHandler, this.layer), e2.featureIndex = t2), t2;
  }
};
function P(e2) {
  if (null == e2)
    return 0;
  switch (e2.type) {
    case "partial":
      return Object.keys(e2.diff).length;
    case "complete":
      return Math.max(Object.keys(e2.oldValue).length, Object.keys(e2.newValue).length);
    case "collection":
      return Object.keys(e2.added).length + Object.keys(e2.changed).length + Object.keys(e2.removed).length;
  }
}
e$5([y$2()], S.prototype, "_isTileHandlerReady", void 0), S = e$5([c$5("esri.views.2d.layers.VectorTileLayerView2D")], S);
const A = S;
export {
  A as default
};
