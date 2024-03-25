import { gH as p$3, dR as ot, sb as ht, ct as e, sc as at, sd as a$1, se as o, rD as l$1, bY as j, b6 as u$3, gq as m, bd as m$1, sf as W, b0 as has, me as L, kt as E, sg as i, b7 as s$1, bg as a$3, sh as J, id as u$4, c7 as s$2, dL as Z, ce as d$2, cr as q$1, si as d$3, sj as O, sk as U, i1 as K, cU as s$5, sl as b$1, bf as s$6, sm as O$1, be as f, sn as y$1, so as N, i0 as f$1, j2 as n$3, aV as e$1, aX as y$2, a_ as c$1, bZ as S$1 } from "./chunk-ejFG4zJ0.js";
import { M, p as p$4, b, s as s$3, a as s$4, n, c as n$1 } from "./chunk-xHgk_Pqx.js";
import { s, y, z, a as h, p as p$2, S, u as u$2, x, b as a$4, t as t$1 } from "./chunk-xXBI18-w.js";
import { d as d$1, n as n$2 } from "./chunk-Mke_bPEP.js";
import { a as a$2 } from "./chunk-X6Yd3gQb.js";
import { x as x$1, j as j$1 } from "./chunk-pZO3UCge.js";
async function l(l2, o2, p3) {
  const m2 = [], u2 = { scaleInfo: s(l2), scaleExpression: null };
  for (const e2 of o2)
    switch (e2.type) {
      case "marker":
        m2.push(...u$2(p3.instances.marker, e2, x, u2));
        break;
      case "fill":
        null == e2.spriteRasterizationParam ? m2.push(...p$2(p3.instances.fill, e2, u2)) : m2.push(...S(p3.instances.complexFill, e2, false, u2));
        break;
      case "line":
        e2.spriteRasterizationParam ? m2.push(...z(p3.instances.texturedLine, e2, false, u2)) : m2.push(...h(p3.instances.line, e2, false, u2));
        break;
      case "text":
        m2.push(...y(p3.instances.text, e2, x, u2));
    }
  return m2;
}
class c extends M {
  static from(t2, e2, r) {
    return new c(t2, e2, r);
  }
  constructor(t2, e2, r) {
    super(r), this._items = t2, this._tile = e2, this._index = -1, this._cachedGeometry = null;
    const s2 = e2.lod;
    s2.wrap && (this._wrappingInfo = { worldSizeX: s2.worldSize[0] });
  }
  get _current() {
    return this._items[this._index];
  }
  getItem() {
    return this._current;
  }
  getZOrder() {
    return this._current.zOrder;
  }
  getMeshWriters() {
    return this._current.symbolResource?.symbolInfo.meshWriters ?? [];
  }
  hasField(t2) {
    return null != this._current.attributes[t2];
  }
  field(t2) {
    return this.readAttribute(t2);
  }
  get geometryType() {
    const t2 = p$3(this._current.geometry);
    return "esriGeometryPoint" === t2 ? "esriGeometryMultipoint" : t2;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new c(this._items, this._tile, this.metadata);
    return this.copyInto(t2), t2;
  }
  copyInto(t2) {
    super.copyInto(t2), t2._cachedGeometry = this._cachedGeometry, t2._index = this._index;
  }
  get fields() {
    throw new Error("Fields reading not supported to graphics.");
  }
  get hasFeatures() {
    return !!this._items.length;
  }
  get hasNext() {
    return this._index + 1 < this._items.length;
  }
  get exceededTransferLimit() {
    throw new Error("InternalError: exceededTransferLimit not implemented for graphics.");
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  getInTransform() {
    return this._tile.transform;
  }
  getSize() {
    return this._items.length;
  }
  getAttributeHash() {
    let t2 = "";
    for (const e2 in this._current.attributes)
      t2 += this._current.attributes[e2];
    return t2;
  }
  getObjectId() {
    return this._items[this._index].objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t2) {
    throw new Error("InternalError: Setting displayId not supported for graphics.");
  }
  setIndex(t2) {
    this._index = t2;
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (this._cachedGeometry = null; ++this._index < this._items.length && !this._getExists(); )
      ;
    return this._index < this._items.length;
  }
  readGeometryArea() {
    throw new Error("InternalError: readGeometryArea not supported for graphics.");
  }
  _readGeometry() {
    if (!this._cachedGeometry) {
      let t2 = ot(this._current.projectedGeometry, this.hasZ, this.hasM);
      if ("esriGeometryPolyline" === this.geometryType && (t2 = ht(new e(), t2, this.hasZ, this.hasM, this.geometryType, this._tile.transform.scale[0])), this._cachedGeometry = at(new e(), t2, this.hasZ, this.hasM, this.geometryType, this._tile.transform), !this._cachedGeometry)
        return null;
      this._wrapGeometry(this._cachedGeometry);
    }
    return this._cachedGeometry;
  }
  _wrapGeometry(t2) {
    if (!this._wrappingInfo)
      return;
    const { worldSizeX: e2 } = this._wrappingInfo;
    if (t2.isPoint)
      return 1 === e2 ? (t2.coords.push(a$1, 0), t2.coords.push(2 * -a$1, 0), void t2.lengths.push(3)) : 2 === e2 ? (t2.coords.push(2 * a$1, 0), t2.coords.push(4 * -a$1, 0), void t2.lengths.push(3)) : void this._wrapVertex(t2.coords, 0, 2, e2);
    if ("esriGeometryMultipoint" !== this.geometryType)
      ;
    else {
      if (1 === e2) {
        const e3 = t2.coords.slice();
        e3[0] -= 512;
        const r = t2.coords.slice();
        r[0] += 512, t2.coords.push(...e3, ...r);
        const s2 = t2.lengths[0];
        return void t2.lengths.push(s2, s2);
      }
      this._wrapVertex(t2.coords, 0, 2, e2);
    }
  }
  _wrapVertex(t2, e2, r, s2) {
    const i2 = e2 * r, o2 = t2[i2];
    o2 < -a$1 * (s2 - 2) ? t2[i2] = o2 + a$1 * s2 : o2 > a$1 * (s2 - 1) && (t2[i2] = o2 - a$1 * s2);
  }
  _readX() {
    const t2 = this._readGeometry();
    return null != t2 ? t2.coords[0] : 0;
  }
  _readY() {
    const t2 = this._readGeometry();
    return null != t2 ? t2.coords[1] : 0;
  }
  _readServerCentroid() {
    switch (this.geometryType) {
      case "esriGeometryPolygon": {
        const t2 = l$1(this._current.projectedGeometry), r = new e([], t2);
        return at(new e(), r, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
      case "esriGeometryPolyline": {
        const e$12 = this._current.projectedGeometry, r = o(e$12.paths, this.hasZ), s2 = new e([], r);
        return at(new e(), s2, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
    }
    return null;
  }
  _readAttribute(t2, e2) {
    const r = this._current.attributes[t2];
    if (void 0 !== r)
      return r;
    const s2 = t2.toLowerCase();
    for (const i2 in this._current.attributes)
      if (i2.toLowerCase() === s2)
        return this._current.attributes[i2];
  }
  _readAttributes() {
    return this._current.attributes;
  }
}
const a = 50;
function u$1(e2) {
  if (!e2)
    return null;
  const { xmin: t2, ymin: i2, xmax: r, ymax: o2, spatialReference: s2 } = e2;
  return new j({ rings: [[[t2, i2], [t2, o2], [r, o2], [r, i2], [t2, i2]]], spatialReference: s2 });
}
let p$1 = class p {
  static fromGraphic(t2, e2, s2, r) {
    return new p(t2.geometry, e2, t2.attributes, t2.visible, t2.uid, s2, r);
  }
  constructor(e2, s2, r, i2, o2, m2, p3) {
    this.geometry = e2, this.symbol = s2, this.attributes = r, this.visible = i2, this.objectId = o2, this.zOrder = m2, this.displayId = p3, this.bounds = u$3(), this.prevBounds = u$3(), this.size = [0, 0, 0, 0];
  }
  get linearCIM() {
    return this.symbolResource?.symbolInfo.linearCIM;
  }
  update(e2, s2, r) {
    return (this.geometry !== e2.geometry || this.attributes !== e2.attributes || this.symbol !== s2 || this.zOrder !== r || this.visible !== e2.visible) && (this.prevBounds = this.bounds, this.bounds = u$3(), this.zOrder = r, this.geometry = e2.geometry, this.attributes = e2.attributes, this.symbol = s2, this.visible = e2.visible, this.symbolResource = null, this.projectedGeometry = null, true);
  }
  async projectAndNormalize(t2) {
    let p3 = this.geometry;
    if (!p3 || !p3.spatialReference || "mesh" === p3.type)
      return;
    "extent" === p3.type && (p3 = u$1(p3)), await x$1(p3.spatialReference, t2);
    const h2 = a$2(p3);
    if (!h2)
      return;
    const a2 = j$1(h2, p3.spatialReference, t2);
    a2 && m(a2), this.projectedGeometry = m$1(a2) ? u$1(a2) : a2;
  }
};
class t {
  constructor(t2, e2, d2) {
    this.added = t2, this.updated = e2, this.removed = d2;
  }
  hasAnyUpdate() {
    return !!(this.added.length || this.updated.length || this.removed.length);
  }
}
const u = 1e-5;
function d(e2, t2) {
  return t2.zOrder - e2.zOrder;
}
class p2 {
  constructor(e2, t2, s2, o2, i2) {
    this._items = /* @__PURE__ */ new Map(), this._boundsDirty = false, this._outSpatialReference = e2, this._cimResourceManager = t2, this._hittestDrawHelper = new W(t2), this._tileInfoView = s2, this._store = i2;
    const r = s2.getClosestInfoForScale(o2);
    this._resolution = this._tileInfoView.getTileResolution(r.level);
  }
  items() {
    return this._items.values();
  }
  getItem(e2) {
    return this._items.get(e2);
  }
  async update(e2, t$12, s2) {
    const o2 = [], i2 = [], r = [], n2 = /* @__PURE__ */ new Set(), m2 = [];
    let l2 = 0;
    for (const c2 of e2.items) {
      l2++;
      const e3 = c2.uid, r2 = this._items.get(e3), h2 = t$12(c2);
      if (n2.add(e3), r2) {
        r2.update(c2, h2, l2) && (i2.push(r2), m2.push(this._updateItem(r2, s2)));
        continue;
      }
      const u2 = this._store.createDisplayIdForObjectId(e3), d2 = p$1.fromGraphic(c2, h2, l2, u2);
      m2.push(this._updateItem(d2, s2)), this._items.set(d2.objectId, d2), o2.push(d2);
    }
    for (const [a2, c2] of this._items.entries())
      n2.has(a2) || (this._store.releaseDisplayIdForObjectId(a2), this._items.delete(a2), r.push(c2));
    return await Promise.all(m2), this._index = null, new t(o2, i2, r);
  }
  updateLevel(e2) {
    this._resolution !== e2 && (this._index = null, this._boundsDirty = true, this._resolution = e2);
  }
  hitTest(e2, t2, i2, n2, m2) {
    const l2 = has("esri-mobile"), a$12 = has(l2 ? "hittest-2d-mobile-tolerance" : "hittest-2d-desktop-tolerance"), h2 = a$12 + (l2 ? 0 : has("hittest-2d-small-symbol-tolerance"));
    e2 = L(e2, this._tileInfoView.spatialReference);
    const u2 = n2 * window.devicePixelRatio * h2, p3 = u$3();
    p3[0] = e2 - u2, p3[1] = t2 - u2, p3[2] = e2 + u2, p3[3] = t2 + u2;
    const _ = n2 * window.devicePixelRatio * a$12, f2 = u$3();
    f2[0] = e2 - _, f2[1] = t2 - _, f2[2] = e2 + _, f2[3] = t2 + _;
    const b2 = 0.5 * n2 * (h2 + a), y2 = this._searchIndex(e2 - b2, t2 - b2, e2 + b2, t2 + b2);
    if (!y2 || 0 === y2.length)
      return [];
    const I = [], g = u$3(), j2 = u$3();
    for (const s2 of y2) {
      if (!s2.visible)
        continue;
      const { projectedGeometry: e3, symbolResource: t3 } = s2;
      this._getSymbolBounds(g, t3, e3, j2, m2), j2[3] = j2[2] = j2[1] = j2[0] = 0, E(g, p3) && I.push(s2);
    }
    if (0 === I.length)
      return [];
    const x2 = this._hittestDrawHelper, w = [];
    for (const s2 of I) {
      const { projectedGeometry: e3, symbolResource: t3 } = s2;
      if (!t3)
        continue;
      const { textInfo: o2, symbolInfo: i3 } = t3, r = i3.cimSymbol;
      x2.hitTest(f2, r.symbol, e3, o2, m2, n2) && w.push(s2);
    }
    return w.sort(d), w.map((e3) => e3.objectId);
  }
  queryItems(e2) {
    return 0 === this._items.size ? [] : this._searchForItems(e2);
  }
  clear() {
    this._items.clear(), this._index = null;
  }
  async _updateItem(e2, t2) {
    await e2.projectAndNormalize(this._outSpatialReference), await t2(e2);
    const { size: s2 } = e2;
    s2[0] = s2[1] = s2[2] = s2[3] = 0, this._getSymbolBounds(e2.bounds, e2.symbolResource, e2.projectedGeometry, e2.size, 0);
  }
  _searchIndex(e2, s2, o2, i$1) {
    return this._boundsDirty && (this._items.forEach((e3) => this._getSymbolBounds(e3.bounds, e3.symbolResource, e3.projectedGeometry, e3.size, 0)), this._boundsDirty = false), this._index || (this._index = i(9, (e3) => ({ minX: e3.bounds[0], minY: e3.bounds[1], maxX: e3.bounds[2], maxY: e3.bounds[3] })), this._index.load(Array.from(this._items.values()))), this._index.search({ minX: e2, minY: s2, maxX: o2, maxY: i$1 });
  }
  _searchForItems(e2) {
    const t2 = this._tileInfoView.spatialReference, o2 = e2.bounds, i2 = s$1(t2);
    if (i2 && t2.isWrappable) {
      const [t3, r] = i2.valid, n2 = Math.abs(o2[2] - r) < u, m2 = Math.abs(o2[0] - t3) < u;
      if ((!n2 || !m2) && (n2 || m2)) {
        const i3 = e2.resolution;
        let m3;
        m3 = u$3(n2 ? [t3, o2[1], t3 + i3 * a, o2[3]] : [r - i3 * a, o2[1], r, o2[3]]);
        const l2 = this._searchIndex(o2[0], o2[1], o2[2], o2[3]), a$12 = this._searchIndex(m3[0], m3[1], m3[2], m3[3]);
        return [.../* @__PURE__ */ new Set([...l2, ...a$12])];
      }
    }
    return this._searchIndex(o2[0], o2[1], o2[2], o2[3]);
  }
  _getSymbolBounds(t2, o2, r, n2, m2) {
    if (!o2 || !o2.symbolInfo.linearCIM || !r)
      return null;
    if (t2 || (t2 = u$3()), a$3(t2, r), !n2 || 0 === n2[0] && 0 === n2[1] && 0 === n2[2] && 0 === n2[3]) {
      const { textInfo: t3, symbolInfo: s2 } = o2, i2 = s2.cimSymbol;
      n2 || (n2 = [0, 0, 0, 0]);
      const r2 = J.getSymbolInflateSize(n2, i2.symbol, this._cimResourceManager, m2, t3);
      n2[0] = u$4(r2[0]), n2[1] = u$4(r2[1]), n2[2] = u$4(r2[2]), n2[3] = u$4(r2[3]);
    }
    const a2 = this._resolution, c2 = J.safeSize(n2);
    return t2[0] -= c2 * a2, t2[1] -= c2 * a2, t2[2] += c2 * a2, t2[3] += c2 * a2, t2;
  }
}
class F {
  static getOrCreate(e2, t2, s2) {
    let r = t2.get(e2.id);
    return r || (r = new F(e2, s2), t2.set(e2.id, r)), r;
  }
  static fromItems(e2, t2, s2) {
    const r = new F(e2, s2);
    return r.addedOrModified.push(...t2), r;
  }
  constructor(e2, t2) {
    this.tile = e2, this.metadata = t2, this.addedOrModified = [], this.removed = [];
  }
  get reader() {
    return this._reader || (this._reader = c.from(this.addedOrModified, this.tile, this.metadata)), this._reader;
  }
}
let V = class extends s$2(S$1) {
  constructor(e2) {
    super(e2), this._attached = false, this._tiles = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._hashToSymbolInfo = /* @__PURE__ */ new Map(), this._lastCleanup = performance.now(), this._cleanupRequired = true, this.lastUpdateId = -1, this.renderer = null, this._updateTracking = new d$1({ debugName: "GraphicsView2D" }), this.updateRequested = false, this.defaultPointSymbolEnabled = true, this._commandQueue = new a$4({ process: (e3) => {
      switch (e3.type) {
        case "processed-edit":
          throw new Error("InternalError: Unsupported command");
        case "update":
          return this._update();
      }
    } }), this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this.container.destroy(), this.view = null, this.renderer = null, this._set("graphics", null), this._controller.abort(), this._graphicStore.clear(), this._attributeStore = null, this._hashToSymbolInfo.clear(), this._updateTracking.destroy(), this._commandQueue.destroy();
  }
  _initAttributeStore() {
    this._storage = new p$4({ spatialReference: this.view.spatialReference, fields: new Z() }), this._attributeStore = new b({ isLocal: true, update: async (e3) => {
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`, { message: e3 });
      const t2 = this.container.attributeView.requestUpdate(e3);
      this.container.requestRender(), await t2, has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`, { message: e3 });
    } });
    const e2 = t$1(null, []);
    this._attributeStore.update(e2, this._storage, null), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
  }
  initialize() {
    this._initAttributeStore(), this._metadata = s$3.create(this.view.spatialReference), this._resourceProxy = new s$4({ fetch: (e3) => Promise.all(e3.map((e4) => this.view.stage.textureManager.rasterizeItem(e4))), fetchDictionary: (e3) => {
      throw new Error("InternalError: Graphics do not support Dictionary requests");
    } }), this.addHandles([d$2(() => this._effectiveRenderer, () => this._pushUpdate()), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      this.addHandles([this.graphics.on("change", () => this._pushUpdate())]), this._graphicStore = new p2(this.view.spatialReference, this._cimResourceManager, this.view.featuresTilingScheme, this.view.state.scale, this._attributeStore), this._attached = true, this.requestUpdate(), this._pushUpdate();
    })]), this._updateTracking.addUpdateTracking("CommandQueue", this._commandQueue.updateTracking);
    const e2 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: e2, removed: [] });
  }
  get _effectiveRenderer() {
    return "function" == typeof this.renderer ? this.renderer() : this.renderer;
  }
  get _cimResourceManager() {
    return this.view.stage.textureManager.resourceManager;
  }
  get updating() {
    const e2 = !this._attached || this._updateTracking.updating;
    return has("esri-2d-log-updating") && console.log(`Updating GraphicsView2D: ${e2}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`), e2;
  }
  hitTest(e2) {
    if (!this.view || this.view.suspended)
      return [];
    const { resolution: t2, rotation: r } = this.view.state, i2 = this._graphicStore.hitTest(e2.x, e2.y, 2, t2, r), o2 = new Set(i2), a2 = this.graphics.items.reduce((e3, t3) => (o2.has(t3.uid) && e3.set(t3.uid, t3), e3), /* @__PURE__ */ new Map());
    return i2.map((e3) => a2.get(e3)).filter(q$1);
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback()), this.notifyChange("updating");
  }
  processUpdate(e2) {
    this.updateRequested && (this.updateRequested = false, this.update(e2));
  }
  viewChange() {
    this.requestUpdate();
  }
  setHighlight(e2) {
    const t2 = [];
    for (const { objectId: s2, highlightFlags: r } of e2) {
      const e3 = this._graphicStore.getItem(s2)?.displayId;
      t2.push({ objectId: s2, highlightFlags: r, displayId: e3 });
    }
    this._attributeStore.setHighlight(t2, e2), this._pushUpdate();
  }
  graphicUpdateHandler(e2) {
    this._pushUpdate();
  }
  update(e2) {
    this.updateRequested = false, this._attached && this._graphicStore.updateLevel(e2.state.resolution);
  }
  _pushUpdate() {
    d$3(this._commandQueue.push({ type: "update" }));
  }
  async _update() {
    try {
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);
      const e2 = await this._graphicStore.update(this.graphics, (e3) => this._getSymbolForGraphic(e3), (e3) => this._ensureSymbolResource(e3));
      if (!e2.hasAnyUpdate())
        return void await this._attributeStore.sendUpdates();
      e2.removed.length && (this._cleanupRequired = true), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`, e2);
      const t2 = this._createTileMessages(e2);
      await this._fetchResources(t2), this._write(t2);
      for (const s2 of e2.added)
        this._setFilterState(s2);
      for (const s2 of e2.updated)
        this._setFilterState(s2);
      has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`, e2), await this._attributeStore.sendUpdates(), has("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`, e2);
    } catch (e2) {
    }
    this._cleanupSharedResources();
  }
  _createTileMessages(e2) {
    const t2 = /* @__PURE__ */ new Map();
    for (const s2 of e2.added) {
      const e3 = this.view.graphicsTileStore.getIntersectingTiles(s2.bounds);
      for (const r of e3) {
        F.getOrCreate(r, t2, this._metadata).addedOrModified.push(s2);
      }
    }
    for (const s2 of e2.updated) {
      const e3 = this.view.graphicsTileStore.getIntersectingTiles(s2.prevBounds), r = this.view.graphicsTileStore.getIntersectingTiles(s2.bounds);
      for (const i2 of e3) {
        F.getOrCreate(i2, t2, this._metadata).removed.push(s2.displayId);
      }
      for (const i2 of r) {
        F.getOrCreate(i2, t2, this._metadata).addedOrModified.push(s2);
      }
    }
    for (const s2 of e2.removed) {
      const e3 = this.view.graphicsTileStore.getIntersectingTiles(s2.bounds);
      for (const r of e3) {
        F.getOrCreate(r, t2, this._metadata).removed.push(s2.displayId);
      }
    }
    return Array.from(t2.values());
  }
  async _fetchResources(e2) {
    for (const { tile: t2, reader: s2 } of e2) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t2.id}] GraphicsView fetchResources`, e2);
      const r = s2.getCursor();
      for (; r.next(); )
        for (const e3 of r.getMeshWriters())
          e3.enqueueRequest(this._resourceProxy, r, t2.createArcadeEvaluationOptions(this.view.timeZone));
    }
    await this._resourceProxy.fetchEnqueuedResources();
  }
  _write(e2) {
    for (const t2 of e2) {
      has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t2.tile.id}] GraphicsView write`, t2);
      const e3 = this._writeMeshes(t2);
      let s2 = this._tiles.get(t2.tile.key);
      s2 || (s2 = this._createFeatureTile(t2.tile.key)), has("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${t2.tile.id}] GraphicsView onTileData`, t2), this.container.onTileData(s2, { type: "update", modify: e3, remove: t2.removed, end: false, attributeEpoch: this._attributeStore.epoch }), this.container.requestRender();
    }
  }
  _writeMeshes(e2) {
    const t2 = new n(e2.tile.id), s2 = e2.reader.getCursor();
    for (; s2.next(); ) {
      t2.entityStart(s2.getDisplayId(), s2.getZOrder());
      for (const r of s2.getMeshWriters())
        r.write(t2, this._resourceProxy, s2, e2.tile.createArcadeEvaluationOptions(this.view.timeZone), e2.tile.level);
      t2.entityEnd();
    }
    return { ...t2.serialize().message, tileId: e2.tile.id };
  }
  _setFilterState(e2) {
    const t2 = e2.displayId, s2 = this._attributeStore.getHighlightFlags(e2.objectId);
    this._attributeStore.setData(t2, 0, 0, s2 | (e2.visible ? O : 0));
  }
  _getSymbolForGraphic(e2) {
    return null != e2.symbol ? e2.symbol : null != this._effectiveRenderer ? this._effectiveRenderer.getSymbol(e2) : this._getNullSymbol(e2);
  }
  async _ensureSymbolResource(e2) {
    if (!e2.symbol)
      return;
    const t2 = await this._getSymbolInfo(e2.symbol);
    if (!t2)
      return;
    const s2 = t2.linearCIM.filter((e3) => "text" === e3.type);
    if (s2.length > 0) {
      const r = await this._getTextResources(e2, s2);
      e2.symbolResource = { symbolInfo: t2, textInfo: r };
    } else
      e2.symbolResource = { symbolInfo: t2 };
  }
  _getSymbolInfo(e2) {
    const t2 = e2.hash();
    return this._hashToSymbolInfo.has(t2) || this._hashToSymbolInfo.set(t2, this._createSymbolInfo(t2, e2).catch((e3) => null)), this._hashToSymbolInfo.get(t2);
  }
  async _createSymbolInfo(e2, t2) {
    const s2 = await this._convertToCIMSymbol(t2), r = await this._createLinearCIM(s2);
    if ("text" === t2.type)
      for (const i2 of r)
        "text" === i2.type && (i2.lineWidth = t2.lineWidth);
    return { hash: e2, cimSymbol: s2, linearCIM: r, meshWriters: await this._createMeshWriters(s2, r) };
  }
  async _convertToCIMSymbol(e2) {
    const t2 = U(e2);
    if ("web-style" === t2.type) {
      return (await t2.fetchCIMSymbol()).data;
    }
    return t2;
  }
  async _createLinearCIM(e2) {
    return await Promise.all(K.fetchResources(e2.symbol, this._cimResourceManager, [])), this.view.stage.cimAnalyzer.analyzeSymbolReference(e2, false);
  }
  async _createMeshWriters(e2, t2) {
    s$5(this._controller.signal);
    const s2 = this.container.instanceStore, r = await l(e2, t2, s2);
    return Promise.all(r.map((e3) => n$1(this._storage, this._resourceProxy, e3.meshWriterName, n$2(e3.id), e3.options, { tileInfo: this.view.featuresTilingScheme.tileInfo }, e3.optionalAttributes)));
  }
  _onTileUpdate(e2) {
    if (e2.added && e2.added.length > 0)
      for (const t2 of e2.added)
        this._updateTracking.addPromise(this._addTile(t2));
    if (e2.removed && e2.removed.length > 0)
      for (const t2 of e2.removed)
        this._removeTile(t2.key);
  }
  _createFeatureTile(e2) {
    const t2 = this.view.featuresTilingScheme.getTileBounds(u$3(), e2), s2 = this.view.featuresTilingScheme.getTileResolution(e2.level), r = new b$1(e2, s2, t2[0], t2[3]);
    return this._tiles.set(e2, r), this.container.addChild(r), r;
  }
  async _addTile(e2) {
    if (!this._attached)
      return;
    const t2 = this._graphicStore.queryItems(e2);
    if (!t2.length)
      return;
    const s2 = this._createFeatureTile(e2.key), r = F.fromItems(e2, t2, this._metadata);
    await this._fetchResources([r]);
    const i2 = this._writeMeshes(r);
    s2.onMessage({ type: "append", append: i2, clear: false, end: true, attributeEpoch: this._attributeStore.epoch });
  }
  _removeTile(e2) {
    if (!this._tiles.has(e2))
      return;
    const t2 = this._tiles.get(e2);
    this.container.removeChild(t2), t2.destroy(), this._tiles.delete(e2);
  }
  _getNullSymbol(e2) {
    const t2 = e2.geometry;
    return s$6(t2) ? O$1 : f(t2) || m$1(t2) ? y$1 : this.defaultPointSymbolEnabled ? N : null;
  }
  async _getTextResources(e2, t2) {
    const s2 = new Array(), r = new Array();
    for (let i2 = 0; i2 < t2.length; i2++) {
      const o3 = t2[i2], { resource: a3, overrides: n3 } = o3.textRasterizationParam;
      if (n3?.length > 0) {
        const t3 = f$1.resolveSymbolOverrides({ type: "CIMSymbolReference", primitiveOverrides: n3, symbol: { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, size: a3.symbol.height, anchorPointUnits: "Relative", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: a3.symbol, textString: a3.textString }], scaleSymbolsProportionally: true, respectFrame: true }] } }, e2, this.view.spatialReference, null, p$3(e2.projectedGeometry), null, null);
        t3.then((e3) => {
          const t4 = e3.symbolLayers[0], { textString: s3 } = t4.markerGraphics[0];
          r.push({ type: "cim-rasterization-info", resource: { type: "text", textString: s3 || "", font: a3.font } }), o3.text = a3.textString = s3 || "";
        }), s2.push(t3);
      } else
        r.push({ type: "cim-rasterization-info", resource: a3 });
    }
    s2.length > 0 && await Promise.all(s2);
    const o2 = r.map((e3) => this.view.stage.textureManager.rasterizeItem(e3)), a2 = await Promise.all(o2);
    n$3(a2);
    const n2 = /* @__PURE__ */ new Map();
    for (let i2 = 0; i2 < t2.length; i2++) {
      const e3 = t2[i2];
      n2.set(e3.textRasterizationParam.resource.symbol, { text: e3.text, glyphMosaicItems: a2[i2] });
    }
    return n2;
  }
  _cleanupSharedResources() {
    if (!this._cleanupRequired)
      return;
    const e2 = performance.now();
    if (e2 - this._lastCleanup < 5e3)
      return;
    this._cleanupRequired = false, this._lastCleanup = e2;
    const t2 = /* @__PURE__ */ new Set();
    for (const r of this._graphicStore.items()) {
      const e3 = r.symbolResource?.symbolInfo.hash;
      t2.add(e3);
    }
    const s2 = new Set(this._hashToSymbolInfo.keys());
    for (const r of s2.values())
      t2.has(r) || this._hashToSymbolInfo.delete(r);
  }
};
e$1([y$2()], V.prototype, "_effectiveRenderer", null), e$1([y$2({ constructOnly: true })], V.prototype, "layerId", void 0), e$1([y$2({ constructOnly: true })], V.prototype, "requestUpdateCallback", void 0), e$1([y$2()], V.prototype, "container", void 0), e$1([y$2({ constructOnly: true })], V.prototype, "graphics", void 0), e$1([y$2()], V.prototype, "renderer", void 0), e$1([y$2()], V.prototype, "_updateTracking", void 0), e$1([y$2()], V.prototype, "updating", null), e$1([y$2()], V.prototype, "view", void 0), e$1([y$2()], V.prototype, "updateRequested", void 0), e$1([y$2()], V.prototype, "defaultPointSymbolEnabled", void 0), V = e$1([c$1("esri.views.2d.layers.support.GraphicsView2D")], V);
const $ = V;
export {
  $
};
