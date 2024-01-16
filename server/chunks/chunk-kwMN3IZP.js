import { fZ as e, fV as e$1, o6 as l$1, o7 as r$1, o8 as s$1, o9 as i$1, oa as i$2, ob as c$1, oc as e$3, b7 as C$1, bY as T$1, n9 as I, i5 as O, hW as R, od as a$1, aw as u$1, oe as t, fQ as m$1, dP as u, bf as c$2, of as I$1, bH as a$2, lg as s$2, bD as u$3, c4 as d$1, bI as b, bb as s$3, fT as y$1, b8 as a$3, og as d, bo as e$4, bp as y$2, br as c$3 } from "./chunk-KFNcxJaF.js";
import { i, e as e$2, l as l$2, t as t$1, u as u$2 } from "./chunk-F_AWMxLF.js";
import { i as i$3 } from "./chunk-_ABw_62H.js";
import { l as l$3 } from "./chunk-H8y5q1b_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-xi0IQ6PQ.js";
import "./chunk-ZLxFSCNp.js";
const l = 512, s = 1e-6, r = (e2, i2) => e2 + 1 / (1 << 2 * i2);
class o {
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
    const l2 = this.tileInfoView, s2 = l2.getTileCoverage(e2.state, 0, true, "smallest");
    if (!s2)
      return true;
    const { spans: r2, lodInfo: o2 } = s2, { level: n2 } = o2, a2 = this._tiles, c2 = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
    for (const { row: i2, colFrom: _2, colTo: f } of r2)
      for (let e3 = _2; e3 <= f; e3++) {
        const l3 = e$1.getId(n2, i2, o2.normalizeCol(e3), o2.getWorldForColumn(e3)), s3 = this._getOrAcquireTile(l3);
        c2.add(l3), s3.processed() ? this._addToContainer(s3) : h.add(new e$1(l3));
      }
    for (const [i2, t2] of a2)
      t2.isCoverage = c2.has(i2);
    for (const i2 of h)
      this._findPlaceholdersForMissingTiles(i2, c2);
    let d2 = false;
    for (const [i2, t2] of a2)
      t2.neededForCoverage = c2.has(i2), t2.neededForCoverage || t2.isHoldingForFade && l2.intersects(s2, t2.key) && c2.add(i2), t2.isFading && (d2 = true);
    for (const [i2, t2] of this._tiles)
      c2.has(i2) || this._releaseTile(i2);
    return l$1.pool.release(s2), !d2;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  _findPlaceholdersForMissingTiles(e2, i2) {
    const t2 = [];
    for (const [s2, r2] of this._tiles)
      this._addPlaceholderChild(t2, r2, e2, i2);
    const l2 = t2.reduce(r, 0);
    Math.abs(1 - l2) < s || this._addPlaceholderParent(e2.id, i2);
  }
  _addPlaceholderChild(e2, i2, t2, l2) {
    i2.key.level <= t2.level || !i2.hasData() || a(t2, i2.key) && (this._addToContainer(i2), l2.add(i2.id), e2.push(i2.key.level - t2.level));
  }
  _addPlaceholderParent(e2, i2) {
    const t2 = this._tiles;
    let l2 = e2;
    for (; ; ) {
      if (l2 = n$1(l2), !l2 || i2.has(l2))
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
    for (const [r2, o2] of s2)
      this._canConnectDirectly(e2, o2) && t2.push(o2), null == i2 && this._canConnectDirectly(o2, e2) && (i2 = o2);
    if (null != i2) {
      for (const l3 of t2)
        i2.childrenTiles.delete(l3), e2.childrenTiles.add(l3), l3.parentTile = e2;
      i2.childrenTiles.add(e2), e2.parentTile = i2;
    } else
      for (const r2 of t2)
        e2.childrenTiles.add(r2), r2.parentTile = e2;
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
    let { level: l2, row: s2, col: r2, world: o2 } = i2.key;
    const n2 = this._visibleTiles;
    for (; l2 > 0; ) {
      if (l2--, s2 >>= 1, r2 >>= 1, t2.level === l2 && t2.row === s2 && t2.col === r2 && t2.world === o2)
        return true;
      if (n2.has(`${l2}/${s2}/${r2}/${o2}`))
        return false;
    }
    return false;
  }
  _updateCacheSize(e2) {
    const i2 = e2.state.size;
    if (i2[0] === this._viewSize[0] && i2[1] === this._viewSize[1])
      return;
    const t2 = Math.ceil(i2[0] / l) + 1, s2 = Math.ceil(i2[1] / l) + 1;
    this._viewSize[0] = i2[0], this._viewSize[1] = i2[1], this._tileCache.maxSize = 5 * t2 * s2;
  }
}
function n$1(e2) {
  const [i2, t2, l2, s2] = e2.split("/"), r2 = parseInt(i2, 10);
  return 0 === r2 ? null : `${r2 - 1}/${parseInt(t2, 10) >> 1}/${parseInt(l2, 10) >> 1}/${parseInt(s2, 10)}`;
}
function a(e2, i2) {
  const t2 = i2.level - e2.level;
  return e2.row === i2.row >> t2 && e2.col === i2.col >> t2 && e2.world === i2.world;
}
const n = 0.5, c = 1e-6;
class _ {
  constructor(e2, i$32) {
    this.styleRepository = e2, this._tileToHandle = /* @__PURE__ */ new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._completed = false, this._fading = r$1(false), this._symbolRepository = new i(4096, i$32, () => new s$1()), this._symbolDeclutterer = new e$2(i$32, this._symbolRepository, (t2, e3, i2) => new l$2(t2, e3, i2, this.styleRepository, this._zoom, this._viewState.rotation), (t2, e3) => {
      t2.allSymbolsFadingOut = true, t2.lastOpacityUpdate = e3, i$1(t2, e3, true), t2.decluttered = true, t2.requestRender();
    }, (t2, e3) => this.styleRepository.getStyleLayerByUID(t2.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(e3.styleLayerUID).z, (t2) => {
      const e3 = this.styleRepository.getStyleLayerByUID(t2);
      if (this._zoom + c < e3.minzoom || this._zoom - c >= e3.maxzoom)
        return false;
      const i2 = e3.getLayoutProperty("visibility");
      return !i2 || i2.getValue() !== i$2.NONE;
    });
  }
  get fading() {
    return this._fading.value;
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
    return this._zoom = t2, this._viewState = { scale: e2.scale, rotation: e2.rotation, center: [e2.center[0], e2.center[1]], size: [e2.size[0], e2.size[1]] }, this._continueDeclutter(), this._completed;
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
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(c$1), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    null != this._stableNotificationHandle && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this._fading.value = false;
    }, (1 + n) * e$3);
  }
  _notifyUnstable() {
    null != this._stableNotificationHandle && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this._fading.value = true;
  }
}
const y = 1e-6;
function p(e2, t2) {
  if (e2) {
    const s2 = e2.getLayoutProperty("visibility");
    if (!s2 || s2.getValue() !== i$2.NONE && (void 0 === e2.minzoom || e2.minzoom < t2 + y) && (void 0 === e2.maxzoom || e2.maxzoom >= t2 - y))
      return true;
  }
  return false;
}
class m extends i$3 {
  constructor(e2) {
    super(e2), this._backgroundTiles = [], this._pointToCallbacks = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic?.dispose(), this._spriteMosaic = null, this._glyphMosaic?.dispose(), this._glyphMosaic = null, null != this._symbolFader && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [], this._pointToCallbacks.clear();
  }
  get fading() {
    return this._symbolFader?.fading ?? false;
  }
  setStyleResources(e2, t2, r2) {
    this._spriteMosaic = e2, this._glyphMosaic = t2, this._styleRepository = r2, null == this._symbolFader && (this._symbolFader = new _(this._styleRepository, this.children)), this._symbolFader.styleRepository = r2;
  }
  setSpriteMosaic(e2) {
    this._spriteMosaic?.dispose(), this._spriteMosaic = e2;
  }
  deleteStyleLayers(e2) {
    null != this._symbolFader && this._symbolFader.deleteStyleLayers(e2);
  }
  async hitTest(t2) {
    const s2 = C$1();
    return this._pointToCallbacks.set(t2, s2), this.requestRender(), s2.promise;
  }
  createRenderParams(e2) {
    return { ...super.createRenderParams(e2), renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos };
  }
  doRender(e2) {
    !this.visible || e2.drawPhase !== T$1.MAP && e2.drawPhase !== T$1.DEBUG || void 0 === this._spriteMosaic || super.doRender(e2);
  }
  addChild(e2) {
    return super.addChild(e2), null != this._symbolFader ? this._symbolFader.addTile(e2) : e2.decluttered = true, this.requestRender(), e2;
  }
  removeChild(e2) {
    return null != this._symbolFader && this._symbolFader.removeTile(e2), this.requestRender(), super.removeChild(e2);
  }
  renderChildren(e2) {
    const { drawPhase: t2 } = e2;
    if (t2 !== T$1.DEBUG) {
      if (this._doRender(e2), this._pointToCallbacks.size > 0) {
        e2.drawPhase = T$1.HITTEST;
        const s2 = e2.painter.effects.hittestVTL;
        s2.bind(e2), this._doRender(e2), s2.draw(e2, this._pointToCallbacks), s2.unbind(e2), e2.drawPhase = t2;
      }
    } else
      super.renderChildren(e2);
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
    const { context: t2 } = e2, s2 = this._styleRepository;
    if (!s2)
      return;
    const r2 = s2.layers;
    let i2 = true;
    e2.drawPhase === T$1.HITTEST && (i2 = false), s2.backgroundBucketIds.length > 0 && (e2.renderPass = "background", this._renderBackgroundLayers(e2, s2.backgroundBucketIds)), super.renderChildren(e2), e2.drawPhase === T$1.MAP && this._fade(e2.displayLevel, e2.state);
    const o2 = this.children.filter((e3) => e3.visible && e3.hasData());
    if (!o2 || 0 === o2.length)
      return t2.bindVAO(), t2.setStencilTestEnabled(true), void t2.setBlendingEnabled(true);
    for (const l2 of o2)
      l2.triangleCount = 0;
    t2.setStencilWriteMask(0), t2.setColorMask(true, true, true, true), t2.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(false), t2.setDepthTestEnabled(true), t2.setDepthWriteEnabled(true), t2.setDepthFunction(O.LEQUAL), t2.setClearDepth(1), t2.clear(t2.gl.DEPTH_BUFFER_BIT), e2.renderPass = "opaque";
    for (let l2 = r2.length - 1; l2 >= 0; l2--)
      this._renderStyleLayer(r2[l2], e2, o2);
    t2.setDepthWriteEnabled(false), t2.setBlendingEnabled(i2), t2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.renderPass = "translucent";
    for (let l2 = 0; l2 < r2.length; l2++)
      this._renderStyleLayer(r2[l2], e2, o2);
    t2.bindVAO(), t2.setStencilTestEnabled(true), t2.setBlendingEnabled(true);
  }
  _fade(e2, t2) {
    null != this._symbolFader && (this._symbolFader.update(e2, t2) || this.requestRender());
  }
  _renderStyleLayer(e2, t2, s2) {
    const { painter: l2, renderPass: o2 } = t2;
    if (void 0 === e2)
      return;
    const n2 = e2.getLayoutProperty("visibility");
    if (n2 && n2.getValue() === i$2.NONE)
      return;
    let a2;
    switch (e2.type) {
      case a$1.BACKGROUND:
        return;
      case a$1.FILL:
        if ("opaque" !== o2 && "translucent" !== t2.renderPass)
          return;
        a2 = "vtlFill";
        break;
      case a$1.LINE:
        if ("translucent" !== o2)
          return;
        a2 = "vtlLine";
        break;
      case a$1.CIRCLE:
        if ("translucent" !== o2)
          return;
        a2 = "vtlCircle";
        break;
      case a$1.SYMBOL:
        if ("translucent" !== o2)
          return;
        a2 = "vtlSymbol";
    }
    if (s2 = e2.type === a$1.SYMBOL ? s2.filter((e3) => e3.decluttered) : s2.filter((e3) => e3.neededForCoverage), "vtlSymbol" !== a2) {
      const r2 = t2.displayLevel;
      if (0 === s2.length || void 0 !== e2.minzoom && e2.minzoom >= r2 + y || void 0 !== e2.maxzoom && e2.maxzoom < r2 - y)
        return;
    }
    const d2 = e2.uid;
    t2.styleLayerUID = d2, t2.styleLayer = e2;
    for (const r2 of s2)
      if (r2.layerData.has(d2)) {
        l2.renderObjects(t2, s2, a2);
        break;
      }
  }
  _renderBackgroundLayers(e2, s2) {
    const { context: r2, displayLevel: n2, painter: u2, state: y2 } = e2, m2 = this._styleRepository;
    let _2 = false;
    for (const t2 of s2) {
      if (m2.getLayerById(t2).type === a$1.BACKGROUND && p(m2.getLayerById(t2), n2)) {
        _2 = true;
        break;
      }
    }
    if (!_2)
      return;
    const b2 = this._tileInfoView.getTileCoverage(e2.state, 0, true, "smallest"), { spans: f, lodInfo: g } = b2, { level: T } = g, E = u$1(), C = [];
    if (this._renderPasses) {
      const t2 = this._renderPasses[0];
      null != this._clippingInfos && (t2.brushes[0].prepareState(e2), t2.brushes[0].drawMany(e2, this._clippingInfos));
    }
    const L = this._backgroundTiles;
    let v2, F = 0;
    for (const { row: i2, colFrom: l2, colTo: a2 } of f)
      for (let e3 = l2; e3 <= a2; e3++) {
        if (F < L.length)
          v2 = L[F], v2.key.set(T, i2, g.normalizeCol(e3), g.getWorldForColumn(e3)), this._tileInfoView.getTileBounds(E, v2.key, false), v2.x = E[0], v2.y = E[3], v2.resolution = this._tileInfoView.getTileResolution(T);
        else {
          const s3 = new e$1(T, i2, g.normalizeCol(e3), g.getWorldForColumn(e3)), r3 = this._tileInfoView.getTileBounds(u$1(), s3), l3 = this._tileInfoView.getTileResolution(T);
          v2 = new t(s3, l3, r3[0], r3[3], 512, 512, 4096, 4096), L.push(v2);
        }
        v2.setTransform(y2), C.push(v2), F++;
      }
    r2.setStencilWriteMask(0), r2.setColorMask(true, true, true, true), r2.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), r2.setStencilFunction(O.EQUAL, 0, 255);
    let S = true;
    e2.drawPhase === T$1.HITTEST && (S = false), r2.setStencilTestEnabled(S);
    for (const t2 of s2) {
      const s3 = m2.getLayerById(t2);
      s3.type === a$1.BACKGROUND && p(s3, n2) && (e2.styleLayerUID = s3.uid, e2.styleLayer = s3, u2.renderObjects(e2, C, "vtlBackground"));
    }
    l$1.pool.release(b2);
  }
}
let v = class extends m$1(u) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._fetchQueue = null, this._parseQueue = null, this._tileHandlerPromise = null, this._isTileHandlerReady = false;
  }
  get fading() {
    return this._vectorTileContainer?.fading ?? false;
  }
  async hitTest(e2, i2) {
    if (!this._tileHandlerPromise)
      return null;
    await this._tileHandlerPromise;
    const s2 = await this._vectorTileContainer.hitTest(i2);
    if (!s2 || 0 === s2.length)
      return null;
    const r2 = s2[0] - 1, a2 = this._styleRepository, l2 = a2.getStyleLayerByUID(r2);
    if (!l2)
      return null;
    const o2 = a2.getStyleLayerIndex(l2.id);
    return [{ type: "graphic", mapPoint: e2, layer: this.layer, graphic: new c$2({ attributes: { layerId: o2, layerName: l2.id, layerUID: r2 }, layer: this.layer, sourceLayer: this.layer }) }];
  }
  update(e2) {
    if (this._tileHandlerPromise && this._isTileHandlerReady)
      return e2.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = e2.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = e2.state, this._parseQueue.state = e2.state, this._tileManager.update(e2) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    const { style: e2 } = this.layer.currentStyleInfo;
    this._styleRepository = new l$3(e2), this._tileInfoView = new t$1(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new m(this._tileInfoView), this._tileHandler = new u$2(this.layer, this._styleRepository, window.devicePixelRatio || 1), this.container.addChild(this._vectorTileContainer), this._start(), this.addAttachHandles([this.layer.on("paint-change", (e3) => {
      if (e3.isDataDriven)
        this._styleChanges.push({ type: I$1.PAINTER_CHANGED, data: e3 }), this.requestUpdate();
      else {
        const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
        if (!i2)
          return;
        const s2 = i2.type === a$1.SYMBOL;
        t2.setPaintProperties(e3.layer, e3.paint), s2 && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender();
      }
    }), this.layer.on("layout-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      if (!i2)
        return;
      const s2 = a$2(i2.layout, e3.layout);
      if (null != s2) {
        if (s$2(s2, "visibility") && 1 === D(s2))
          return t2.setLayoutProperties(e3.layer, e3.layout), i2.type === a$1.SYMBOL && this._vectorTileContainer?.restartDeclutter(), void this._vectorTileContainer?.requestRender();
        this._styleChanges.push({ type: I$1.LAYOUT_CHANGED, data: e3 }), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e3) => {
      const t2 = this._styleRepository, i2 = t2.getLayerById(e3.layer);
      i2 && (t2.setStyleLayerVisibility(e3.layer, e3.visibility), i2.type === a$1.SYMBOL && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender());
    }), this.layer.on("style-layer-change", (e3) => {
      this._styleChanges.push({ type: I$1.LAYER_CHANGED, data: e3 }), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e3) => {
      this._styleChanges.push({ type: I$1.LAYER_REMOVED, data: e3 }), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle()), this.layer.on("spriteSource-change", (e3) => {
      this._styleChanges.push({ type: I$1.SPRITES_CHANGED, data: e3 });
      const t2 = this._styleRepository.layers;
      for (const i2 of t2)
        switch (i2.type) {
          case a$1.SYMBOL:
            i2.getLayoutProperty("icon-image") && this._styleChanges.push({ type: I$1.LAYOUT_CHANGED, data: { layer: i2.id, layout: i2.layout } });
            break;
          case a$1.LINE:
            i2.getPaintProperty("line-pattern") && this._styleChanges.push({ type: I$1.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
            break;
          case a$1.FILL:
            i2.getLayoutProperty("fill-pattern") && this._styleChanges.push({ type: I$1.PAINTER_CHANGED, data: { layer: i2.id, paint: i2.paint, isDataDriven: i2.isPainterDataDriven() } });
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
    return d$1(this.layer.tileInfo?.spatialReference, e2);
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
      b(e3) || s$3.getLogger(this).error(e3);
    })), t2;
  }
  releaseTile(e2) {
    const t2 = e2.key.id;
    this._fetchQueue.abort(t2), this._parseQueue.abort(t2), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new o({ acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo)
      return;
    const e2 = new AbortController(), t2 = this._tileHandler.start({ signal: e2.signal }).then(() => {
      this._fetchQueue = new y$1({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._getTileData(e3, t3), concurrency: 15 }), this._parseQueue = new y$1({ tileInfoView: this._tileInfoView, process: (e3, t3) => this._parseTileData(e3, t3), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = true;
    });
    this._tileHandler.spriteMosaic.then((e3) => {
      this._vectorTileContainer.setStyleResources(e3, this._tileHandler.glyphMosaic, this._styleRepository), this.requestUpdate();
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
      s$3.getLogger(this).error("error applying vector-tiles style update", l2.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true;
    }
    const t2 = this._styleRepository, i2 = /* @__PURE__ */ new Set();
    e2.forEach((e3) => {
      if (e3.type !== I$1.LAYER_REMOVED)
        return;
      const s2 = e3.data, r3 = t2.getLayerById(s2.layer);
      r3 && i2.add(r3.uid);
    });
    const r2 = /* @__PURE__ */ new Set();
    e2.forEach((e3) => {
      let i3;
      switch (e3.type) {
        case I$1.PAINTER_CHANGED:
          t2.setPaintProperties(e3.data.layer, e3.data.paint), i3 = e3.data.layer;
          break;
        case I$1.LAYOUT_CHANGED:
          t2.setLayoutProperties(e3.data.layer, e3.data.layout), i3 = e3.data.layer;
          break;
        case I$1.LAYER_REMOVED:
          return void t2.deleteStyleLayer(e3.data.layer);
        case I$1.LAYER_CHANGED:
          t2.setStyleLayer(e3.data.layer, e3.data.index), i3 = e3.data.layer.id;
          break;
        case I$1.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(e3.data.spriteSource));
      }
      if (i3) {
        const e4 = t2.getLayerById(i3);
        e4 && r2.add(e4.uid);
      }
    });
    const a2 = this._vectorTileContainer.children;
    if (i2.size > 0) {
      const e3 = Array.from(i2);
      this._vectorTileContainer.deleteStyleLayers(e3);
      for (const t3 of a2)
        t3.deleteLayerData(e3);
    }
    if (this._fetchQueue.resume(), this._parseQueue.resume(), r2.size > 0) {
      const e3 = Array.from(r2), t3 = [];
      for (const i3 of a2) {
        const s2 = this._updatingHandles.addPromise(this._fetchQueue.push(i3.key).then((t4) => this._parseQueue.push({ key: i3.key, data: t4, styleLayerUIDs: e3 })).then((e4) => i3.setData(e4)));
        t3.push(s2);
      }
      await Promise.all(t3);
    }
    this._styleChanges = [], this._isTileHandlerReady = true, this.requestUpdate();
  }
  async _loadStyle() {
    const { style: e2 } = this.layer.currentStyleInfo, t2 = a$3(e2);
    this._isTileHandlerReady = false, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._styleRepository = new l$3(t2), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = new AbortController();
    const { signal: s2 } = this._tileHandlerAbortController;
    try {
      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, t2), await this._tileHandlerPromise;
    } catch (l2) {
      if (!b(l2))
        throw l2;
    }
    if (s2.aborted)
      return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, void this.requestUpdate();
    const r2 = await this._tileHandler.spriteMosaic;
    this._vectorTileContainer.setStyleResources(r2, this._tileHandler.glyphMosaic, this._styleRepository), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = true, this.requestUpdate();
  }
  _createVectorTile(e2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), e2), i2 = this._tileInfoView.getTileResolution(e2.level);
    return new d(e2, i2, t2[0], t2[3], 512, 512, this._styleRepository);
  }
};
function D(e2) {
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
e$4([y$2()], v.prototype, "_isTileHandlerReady", void 0), v = e$4([c$3("esri.views.2d.layers.VectorTileLayerView2D")], v);
const w = v;
export {
  w as default
};
