import { bo as e$1, bp as y, br as c$6, bf as c$7, bs as g$1, aq as has, wy as a$4, ct as o$5, c_ as d$2, cZ as f$1, zM as l$3, zJ as u$4, b$ as n$4, i3 as F, h as h$2, bD as u$5, f as f$2, tj as n$6, zN as te, c8 as E$1, b7 as C$1, kL as w, bY as T$1, bI as b, aw as u$6, zO as _, zP as m$2, kz as d$3, cx as p$4, pk as f$3, zQ as i$4, eY as i$5, ig as m$3, fV as e$2, o6 as l$4, dO as a$6, fQ as m$4, dP as u$7, ej as k, bJ as d$4, bR as A, aM as s$3, ba as x, bh as V, bX as k$1, bS as e$3, ap as M$1, bn as P$1, bb as s$4, b8 as a$7, bQ as b$1, zR as d$5, zS as v, kr as l$5, tr as f$4, zT as b$2, ts as c$9, e1 as d$6, qo as V$1, e$ as n$8, h8 as u$8 } from "./chunk-KFNcxJaF.js";
import { a as a$5, r as r$6, n as n$5, m as m$1, b as n$7, w as w$1, h as h$3 } from "./chunk-Zlv3z8RW.js";
import { n as n$3 } from "./chunk-0Hxi-cKV.js";
import { t as t$3 } from "./chunk-jrhFla2W.js";
import { r as r$5 } from "./chunk-anoehU8Z.js";
import { g as c$8 } from "./chunk-yIp_WHt0.js";
import { o as o$6 } from "./chunk-E-M87tOH.js";
import { P } from "./chunk-eM88eykE.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-_ABw_62H.js";
let p$3 = class p extends c$7 {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e2 = false) {
    if (this.popupTemplate)
      return this.popupTemplate;
    const r4 = this.sourceLayer?.featureReduction;
    return r4 && "popupTemplate" in r4 && r4.popupEnabled ? r4.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
e$1([y({ type: Boolean })], p$3.prototype, "isAggregate", void 0), p$3 = e$1([c$6("esri.AggregateGraphic")], p$3);
const s$2 = p$3;
let c$5 = class c extends g$1 {
  constructor(e2) {
    super(e2), this._filter = null, this.duration = has("mapview-transitions-duration"), this._excludedEffectView = new a$4(e2), this._includedEffectView = new a$4(e2);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e2) {
    this._get("featureEffect") !== e2 && this._transitionTo(e2);
  }
  get filter() {
    return this._filter || this.featureEffect?.filter || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e2) {
    this._set("scale", e2), this._excludedEffectView.scale = e2, this._includedEffectView.scale = e2;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e2, t2) {
    this._set("scale", t2), this.transitioning ? (this._includedEffectView.transitionStep(e2, t2), this._excludedEffectView.transitionStep(e2, t2), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t2, this._includedEffectView.scale = t2);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e2) {
    const t2 = this._get("featureEffect"), i3 = e2, s2 = i3?.includedEffect, f2 = i3?.excludedEffect, c6 = this._includedEffectView.canTransitionTo(s2) && this._excludedEffectView.canTransitionTo(f2);
    this._includedEffectView.effect = s2, this._excludedEffectView.effect = f2, this._set("featureEffect", i3), this._filter = i3?.filter || t2?.filter || null, c6 || this.endTransitions();
  }
};
e$1([y()], c$5.prototype, "_filter", void 0), e$1([y()], c$5.prototype, "_excludedEffectView", void 0), e$1([y()], c$5.prototype, "_includedEffectView", void 0), e$1([y()], c$5.prototype, "duration", void 0), e$1([y()], c$5.prototype, "excludedEffects", null), e$1([y()], c$5.prototype, "featureEffect", null), e$1([y()], c$5.prototype, "filter", null), e$1([y()], c$5.prototype, "hasEffects", null), e$1([y()], c$5.prototype, "includedEffects", null), e$1([y({ value: 0 })], c$5.prototype, "scale", null), e$1([y()], c$5.prototype, "transitioning", null), c$5 = e$1([c$6("esri.layers.effects.FeatureEffectView")], c$5);
const r$4 = c$5;
let c$4 = class c2 extends d$2 {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e2, t2) {
    const o4 = f$1.fromJSON(t2.spatialReference), s2 = [];
    for (let a4 = 0; a4 < e2.length; a4++) {
      const t3 = e2[a4], p4 = s$2.fromJSON(t3), c6 = t3.geometry?.spatialReference;
      null == p4.geometry || c6 || (p4.geometry.spatialReference = o4);
      const i3 = t3.aggregateGeometries, m2 = p4.aggregateGeometries;
      if (i3 && null != m2)
        for (const e3 in m2) {
          const r4 = m2[e3], t4 = i3[e3], s3 = t4?.spatialReference;
          null == r4 || s3 || (r4.spatialReference = o4);
        }
      s2.push(p4);
    }
    return s2;
  }
};
e$1([y({ type: [s$2], json: { write: true } })], c$4.prototype, "features", void 0), e$1([o$5("features")], c$4.prototype, "readFeatures", null), c$4 = e$1([c$6("esri.rest.support.AggregateFeatureSet")], c$4);
const i$3 = c$4;
let r$3 = class r extends g$1 {
  constructor(e2) {
    super(e2), this.tiles = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.tiles.clear(), this.layer = this.layerView = this.tileInfoView = this.tiles = null;
  }
  get updating() {
    return this.isUpdating();
  }
  acquireTile(e2) {
    const t2 = this.createTile(e2);
    return t2.once("isReady", () => this.notifyChange("updating")), this.tiles.set(e2.id, t2), this.notifyChange("updating"), t2;
  }
  forceAttributeTextureUpload() {
  }
  forEachTile(e2) {
    this.tiles.forEach(e2);
  }
  releaseTile(e2) {
    this.tiles.delete(e2.key.id), this.notifyChange("updating"), this.disposeTile(e2);
  }
  isUpdating() {
    let e2 = true;
    this.tiles.forEach((t3) => {
      e2 = e2 && t3.isReady;
    });
    const t2 = !e2;
    if (has("esri-2d-log-updating")) {
      let s2 = "";
      this.tiles.forEach((t3) => {
        const i3 = t3.updateStatus;
        s2 += `-> ${t3.key.id}: isReady: ${t3.isReady} status: ${i3}
`, e2 = e2 && t3.isReady;
      }), console.log(`Updating BaseTileRenderer ${t2}
${s2}`);
    }
    return t2;
  }
  setHighlight() {
  }
  invalidateLabels() {
  }
  requestUpdate() {
    this.layerView.requestUpdate();
  }
};
e$1([y()], r$3.prototype, "layer", void 0), e$1([y()], r$3.prototype, "layerView", void 0), e$1([y()], r$3.prototype, "tileInfoView", void 0), e$1([y()], r$3.prototype, "updating", null), r$3 = e$1([c$6("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")], r$3);
const o$4 = r$3;
let i$2 = class i {
  constructor() {
    this.gradient = null, this.height = 512, this.intensities = null, this.width = 512;
  }
  render(i3) {
    l$3(i3, 512, this.intensities, this.gradient, this.minDensity, this.maxDensity);
  }
};
let o$3 = class o extends o$4 {
  constructor(e2) {
    super(e2), this._intensityInfo = { minDensity: 0, maxDensity: 0 }, this.type = "heatmap", this.featuresView = { attributeView: { initialize: () => {
    }, requestUpdate: () => {
    } }, requestRender: () => {
    } }, this._container = new n$3(e2.tileInfoView);
  }
  createTile(e2) {
    const t2 = this._container.createTile(e2);
    return this.tileInfoView.getTileCoords(t2.bitmap, e2), t2.bitmap.resolution = this.tileInfoView.getTileResolution(e2), t2;
  }
  onConfigUpdate() {
    const e2 = this.layer.renderer;
    if ("heatmap" === e2.type) {
      const { minDensity: t2, maxDensity: r4, colorStops: s2 } = e2;
      this._intensityInfo.minDensity = t2, this._intensityInfo.maxDensity = r4, this._gradient = u$4(s2), this.tiles.forEach((e3) => {
        const i3 = e3.bitmap.source;
        i3 && (i3.minDensity = t2, i3.maxDensity = r4, i3.gradient = this._gradient, e3.bitmap.invalidateTexture(), e3.bitmap.requestRender());
      });
    }
  }
  hitTest() {
    return Promise.resolve([]);
  }
  install(e2) {
    e2.addChild(this._container);
  }
  uninstall(e2) {
    this._container.removeAllChildren(), e2.removeChild(this._container);
  }
  disposeTile(e2) {
    this._container.removeChild(e2), e2.destroy();
  }
  supportsRenderer(e2) {
    return e2 && "heatmap" === e2.type;
  }
  onTileData(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    if (!t2)
      return;
    const i3 = e2.intensityInfo, { minDensity: r4, maxDensity: s2 } = this._intensityInfo, o4 = t2.bitmap.source || new i$2();
    o4.intensities = i3?.matrix || null, o4.minDensity = r4, o4.maxDensity = s2, o4.gradient = this._gradient, t2.bitmap.source = o4, this._container.addChild(t2), this._container.requestRender(), this.requestUpdate();
  }
  onTileError(e2) {
    console.error(e2);
  }
  lockGPUUploads() {
  }
  unlockGPUUploads() {
  }
  fetchResource(e2, t2) {
    return console.error(e2), Promise.reject();
  }
};
o$3 = e$1([c$6("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")], o$3);
const t$2 = 6, s$1 = 4294967296;
class e {
  constructor(t2) {
    this._savedCursor = null, this._savedOffset = null, this._head = t2, this._cursor = t2;
  }
  static from(t2) {
    const s2 = r$2.from(new Float32Array(t2));
    return new e(s2);
  }
  get id() {
    return this._cursor.id;
  }
  get baseZoom() {
    return this._cursor.baseZoom;
  }
  get anchorX() {
    return this._cursor.anchorX;
  }
  get anchorY() {
    return this._cursor.anchorY;
  }
  get directionX() {
    return this._cursor.directionX;
  }
  get directionY() {
    return this._cursor.directionY;
  }
  get size() {
    return this._cursor.size;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  get boundsCount() {
    return this._cursor.boundsCount;
  }
  computedMinZoom() {
    return this._cursor.computedMinZoom();
  }
  setComputedMinZoom(t2) {
    return this._cursor.setComputedMinZoom(t2);
  }
  boundsComputedAnchorX(t2) {
    return this._cursor.boundsComputedAnchorX(t2);
  }
  boundsComputedAnchorY(t2) {
    return this._cursor.boundsComputedAnchorY(t2);
  }
  setBoundsComputedAnchorX(t2, s2) {
    return this._cursor.setBoundsComputedAnchorX(t2, s2);
  }
  setBoundsComputedAnchorY(t2, s2) {
    return this._cursor.setBoundsComputedAnchorY(t2, s2);
  }
  boundsX(t2) {
    return this._cursor.boundsX(t2);
  }
  boundsY(t2) {
    return this._cursor.boundsY(t2);
  }
  boundsWidth(t2) {
    return this._cursor.boundsWidth(t2);
  }
  boundsHeight(t2) {
    return this._cursor.boundsHeight(t2);
  }
  link(t2) {
    if (null != t2._head)
      return this._cursor.link(t2._head);
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new e(this._head?.copy());
    if (!t2._head)
      return t2;
    let s2 = t2._head, r4 = t2._head._link;
    for (; r4; )
      s2._link = r4.copy(), s2 = r4, r4 = s2._link;
    return t2;
  }
  peekId() {
    return this._cursor.peekId() ?? this._cursor._link.peekId();
  }
  nextId() {
    const t2 = this.id;
    for (; t2 === this.id; )
      if (!this.next())
        return false;
    return true;
  }
  save() {
    this._savedCursor = this._cursor, this._savedOffset = this._cursor._offset;
  }
  restore() {
    this._savedCursor && (this._cursor = this._savedCursor), null != this._savedOffset && (this._cursor._offset = this._savedOffset);
  }
  next() {
    if (!this._cursor)
      return false;
    if (!this._cursor.next()) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link, this._cursor._offset = 0;
    }
    return true;
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  delete(t2) {
    let s2 = this._head, e2 = null;
    for (; s2; ) {
      if (s2.delete(t2))
        return s2.isEmpty() && null != e2 && (e2._link = s2._link), true;
      e2 = s2, s2 = s2._link;
    }
    return false;
  }
}
let r$2 = class r2 {
  constructor(t2) {
    this._offset = -1, this._link = null, this._count = 0, this._deletedCount = 0, this._offsets = { instance: null }, this._buffer = t2;
  }
  static from(t2) {
    return new r2(new Float32Array(t2));
  }
  isEmpty() {
    return this._deletedCount === this.count;
  }
  get count() {
    return this._count || (this._count = this._computeCount()), this._count;
  }
  get id() {
    return this._buffer[this._offset];
  }
  set id(t2) {
    this._buffer[this._offset] = t2;
  }
  get baseZoom() {
    return this._buffer[this._offset + 1];
  }
  get anchorX() {
    return this._buffer[this._offset + 2];
  }
  get anchorY() {
    return this._buffer[this._offset + 3];
  }
  get directionX() {
    return this._buffer[this._offset + 4];
  }
  get directionY() {
    return this._buffer[this._offset + 5];
  }
  get size() {
    return this._buffer[this._offset + 6];
  }
  get materialKey() {
    return this._buffer[this._offset + 7];
  }
  computedMinZoom() {
    return this._buffer[this._offset + 8];
  }
  setComputedMinZoom(t2) {
    this._buffer[this._offset + 8] = t2;
  }
  get boundsCount() {
    return this._buffer[this._offset + 9];
  }
  boundsComputedAnchorX(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2];
  }
  boundsComputedAnchorY(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2 + 1];
  }
  setBoundsComputedAnchorX(s2, e2) {
    this._buffer[this._offset + 10 + s2 * t$2] = e2;
  }
  setBoundsComputedAnchorY(s2, e2) {
    this._buffer[this._offset + 10 + s2 * t$2 + 1] = e2;
  }
  boundsX(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2 + 2];
  }
  boundsY(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2 + 3];
  }
  boundsWidth(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2 + 4];
  }
  boundsHeight(s2) {
    return this._buffer[this._offset + 10 + s2 * t$2 + 5];
  }
  link(t2) {
    let s2 = this;
    for (; s2._link; )
      s2 = s2._link;
    s2._link = t2;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new r2(this._buffer);
    return t2._link = this._link, t2._offset = this._offset, t2._deletedCount = this._deletedCount, t2._offsets = this._offsets, t2._count = this._count, t2;
  }
  peekId() {
    const s2 = this._offset + 10 + this.boundsCount * t$2 + 0;
    return s2 >= this._buffer.length ? 0 : this._buffer[s2];
  }
  next() {
    let e2 = 0;
    for (; this._offset < this._buffer.length && e2++ < 100 && (-1 === this._offset ? this._offset = 0 : this._offset += 10 + this.boundsCount * t$2, this.id === s$1); )
      ;
    return this.id !== s$1 && this._offset < this._buffer.length;
  }
  delete(t2) {
    const s2 = this._offset, e2 = this.lookup(t2);
    if (e2)
      for (this.id = 4294967295, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = 4294967295, ++this._deletedCount;
    return this._offset = s2, e2;
  }
  lookup(t2) {
    const e2 = this._offset;
    if (null == this._offsets.instance) {
      this._offsets.instance = /* @__PURE__ */ new Map();
      const t3 = this.copy();
      t3._offset = -1;
      let s2 = 0;
      for (; t3.next(); )
        t3.id !== s2 && (this._offsets.instance.set(t3.id, t3._offset), s2 = t3.id);
    }
    return !!this._offsets.instance.has(t2) && (this._offset = this._offsets.instance.get(t2), this.id !== s$1 || (this._offset = e2, false));
  }
  _computeCount() {
    const t2 = this._offset;
    let s2 = 0;
    for (this._offset = -1; this.next(); )
      s2++;
    return this._offset = t2, s2;
  }
};
const h$1 = 1.25, n$2 = 32767, u$3 = n$2 << 16 | n$2;
let a$3 = class a {
  constructor(t2, e2, r4, s2) {
    const h2 = r$5.create(e2 * r4 * Uint32Array.BYTES_PER_ELEMENT, s2);
    this.size = e2, this.strideInt = r4, this.bufferType = t2, this.dirty = { start: 1 / 0, end: 0 }, this._gpu = null, this._cpu = h2, this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get invalidated() {
    return this.bufferSize > 0 && !this._gpu;
  }
  get invalidatedComputeBuffer() {
    return this.bufferSize > 0 && !this._gpuComputeTriangles;
  }
  invalidate() {
    this._invalidateTriangleBuffer(), this._gpu?.dispose(), this._gpu = null;
  }
  _invalidateTriangleBuffer() {
    this._gpuComputeTriangles?.dispose(), this._gpuComputeTriangles = null;
  }
  destroy() {
    this._gpu?.dispose(), this._gpuComputeTriangles?.dispose(), this._cpu?.destroy(), this._cpu2?.destroy();
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new a$5({ start: 0, end: this._cpu.length / this.strideInt }), this.fillPointer = 0;
  }
  ensure(t2) {
    if (this.maxAvailableSpace() >= t2)
      return;
    if (t2 * this.strideInt > this._cpu.length - this.fillPointer) {
      this.invalidate();
      const i3 = this._cpu.length / this.strideInt, e2 = Math.round((i3 + t2) * h$1), r4 = e2 * this.strideInt;
      this._cpu.expand(r4 * Uint32Array.BYTES_PER_ELEMENT), this.freeList.free(i3, e2 - i3);
    }
  }
  set(t2, i3) {
    this._cpu.array[t2] !== i3 && (this._cpu.array[t2] = i3, this.dirty.start = Math.min(t2, this.dirty.start), this.dirty.end = Math.max(t2, this.dirty.end));
  }
  getGPUBuffer(t2, i3 = false) {
    if (!this.bufferSize)
      return null;
    if (i3) {
      if ("index" !== this.bufferType)
        throw new Error("Tired to get triangle buffer, but target is not an index buffer");
      return null == this._gpuComputeTriangles && (this._gpuComputeTriangles = this._createComputeBuffer(t2)), this._gpuComputeTriangles;
    }
    return null == this._gpu && (this._gpu = this._createBuffer(t2)), this._gpu;
  }
  getCPUBuffer() {
    if (!this._cpu2) {
      const t2 = this._cpu.slice();
      this._cpu2 = t2;
    }
    return this._cpu2.length !== this._cpu.length && this._cpu2.expand(this._cpu.length * this._cpu.array.BYTES_PER_ELEMENT), this._cpu2.set(this._cpu), this._cpu2;
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(i3, e2, r4, s2) {
    const h2 = r4 * this.strideInt;
    if (!h2)
      return 0;
    const n2 = e2 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, u3 = new Uint32Array(i3, n2, h2), a4 = this.freeList.firstFit(r4);
    n$4(a4, "First fit region must be defined");
    const d2 = a4 * this.strideInt, f2 = h2, p4 = d2 / this.strideInt - e2;
    if (0 !== s2)
      for (let t2 = 0; t2 < u3.length; t2++)
        u3[t2] += s2;
    return this._cpu.array.set(u3, d2), this.dirty.start = Math.min(this.dirty.start, d2), this.dirty.end = Math.max(this.dirty.end, d2 + f2), this.fillPointer = Math.max(this.fillPointer, d2 + f2), p4;
  }
  free(t2, i3, e2) {
    const r4 = t2 * this.strideInt, s2 = (t2 + i3) * this.strideInt;
    if (true === e2)
      for (let h2 = t2; h2 !== t2 + i3; h2++)
        this._cpu.array[h2 * this.strideInt] = u$3;
    this.dirty.start = Math.min(this.dirty.start, r4), this.dirty.end = Math.max(this.dirty.end, s2), this.freeList.free(t2, i3);
  }
  upload() {
    if (this.dirty.end) {
      if (this._invalidateTriangleBuffer(), null == this._gpu)
        return this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this._gpu.setSubData(this._cpu.array, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  _createBuffer(t2) {
    const i3 = F.DYNAMIC_DRAW;
    return "index" === this.bufferType ? h$2.createIndex(t2, i3, this._cpu.array) : h$2.createVertex(t2, i3, this._cpu.array);
  }
  _createComputeBuffer(t2) {
    const i3 = F.DYNAMIC_DRAW, e2 = new Uint32Array(this.fillPointer / 3);
    for (let r4 = 0; r4 < this.fillPointer; r4 += 3)
      e2[r4 / 3] = this._cpu.array[r4];
    return h$2.createIndex(t2, i3, e2);
  }
};
const n$1 = 0, f = 1;
let o$2 = class o2 {
  constructor(e2, t2) {
    this._vaos = /* @__PURE__ */ new Map(), this._indicesInvalid = false, this.geometryType = e2, this._stage = t2;
  }
  destroy() {
    for (const [e2, t2] of this._vaos)
      t2?.disposeVAOOnly();
    this._indexBuffer = u$5(this._indexBuffer), this._vertexBuffer = u$5(this._vertexBuffer);
  }
  get records() {
    return this._records;
  }
  insert(e2, t2, i3) {
    if (!e2.records.byteLength)
      return;
    const n2 = e2.stride;
    if (this._vertexBuffer && this._indexBuffer) {
      const r4 = e2.indices.byteLength / 4, i4 = e2.vertices.byteLength / n2;
      this._indexBuffer.ensure(r4), this._vertexBuffer.ensure(i4);
      const { vertices: f2, indices: o4 } = e2, d2 = r$6.from(e2.records), h2 = this._vertexBuffer.insert(f2, 0, f2.byteLength / n2, 0), u3 = this._indexBuffer.insert(o4, 0, o4.byteLength / 4, h2);
      if (d2.forEach((e3) => {
        e3.indexFrom += u3, e3.vertexFrom += h2;
      }), this._records.link(d2), t2)
        this._indicesInvalid = true;
      else if (this._displayList) {
        const e3 = d2.getCursor();
        for (; e3.next(); )
          this._displayList.addRecord(e3);
      }
    } else {
      const i4 = e2.indices.byteLength / 4, f2 = e2.vertices.byteLength / n2, o4 = n2 / Uint32Array.BYTES_PER_ELEMENT, d2 = this._stage.bufferPool;
      this._records = r$6.from(e2.records), this._indexBuffer = new a$3("index", i4, 1, d2), this._vertexBuffer = new a$3("vertex", f2, o4, d2), this._indexBuffer.insert(e2.indices, 0, e2.indices.byteLength / 4, 0), this._vertexBuffer.insert(e2.vertices, 0, e2.vertices.byteLength / n2, 0), t2 && (this._indicesInvalid = true);
    }
  }
  remove(e2) {
    if (null != this._records)
      for (const t2 of e2) {
        const e3 = this._records.getCursor();
        if (!e3.lookup(t2))
          continue;
        const r4 = e3.indexFrom, s2 = e3.vertexFrom;
        let i3 = e3.indexCount, n2 = e3.vertexCount;
        for (; e3.next() && e3.id === t2; )
          i3 += e3.indexCount, n2 += e3.vertexCount;
        this._indexBuffer.free(r4, i3), this._vertexBuffer.free(s2, n2, true), this._records.delete(t2);
      }
  }
  getVAO(e2, t2, r4, s2) {
    if (!this._vertexBuffer || !this._indexBuffer || null == this._records || !this._vertexBuffer.bufferSize)
      return null;
    const o4 = s2 ? f : n$1;
    let d2 = this._vaos.get(o4);
    (this._vertexBuffer.invalidated || this._indexBuffer.invalidated || s2 && this._indexBuffer.invalidatedComputeBuffer) && (d2?.disposeVAOOnly(), d2 = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
    const h2 = this._indexBuffer.getGPUBuffer(e2, 1 === o4), u3 = this._vertexBuffer.getGPUBuffer(e2);
    return d2 || (d2 = new f$2(e2, r4, t2, { geometry: u3 }, h2), this._vaos.set(o4, d2)), d2;
  }
  forEachCommand(e2) {
    if (null != this._records) {
      if (this._sortIndices(this._records), !this._displayList) {
        const e3 = this._cursorIndexOrder;
        this._displayList = n$5.from(this, this.geometryType, this._records.getCursor(), e3);
      }
      this._displayList.forEach(e2);
    }
  }
  _sortIndices(e2) {
    const t2 = !!this._indexBuffer.bufferSize;
    if (!this._indicesInvalid)
      return;
    this._indicesInvalid = false;
    let r4 = 0;
    const s2 = e2.getCursor(), i3 = [], n2 = [], f2 = [];
    for (; s2.next(); )
      n2.push(s2.index), f2.push(s2.sortKey), i3.push(s2.id);
    n2.sort((e3, t3) => {
      const r5 = f2[t3], s3 = f2[e3];
      return s3 === r5 ? i3[t3] - i3[e3] : r5 - s3;
    });
    const o4 = e2.getCursor(), d2 = t2 ? this._indexBuffer.getCPUBuffer() : this._vertexBuffer.getCPUBuffer();
    for (const h2 of n2) {
      if (!o4.seekIndex(h2))
        throw new Error("Expected to find index");
      if (t2) {
        const { indexFrom: e3, indexCount: t3 } = o4;
        o4.indexFrom = r4;
        for (let s3 = 0; s3 < t3; s3++)
          this._indexBuffer.set(r4++, d2.array[e3 + s3]);
      } else {
        const { vertexFrom: e3, vertexCount: t3 } = o4, s3 = this._vertexBuffer.strideInt, i4 = e3 * s3, n3 = i4 + t3 * s3;
        o4.vertexFrom = r4 / s3;
        for (let f3 = i4; f3 < n3; f3++)
          this._vertexBuffer.set(r4++, d2.array[f3]);
      }
    }
    this._cursorIndexOrder = n2, this._displayList = null;
  }
};
const h = 50, d$1 = 4, o$1 = 100;
let u$2 = 0;
let c$3 = class c3 extends m$1 {
  constructor(r4, s2, i3, a4, n2, h2) {
    super(r4, s2, i3, a4), this.instanceId = u$2++, this.patchCount = 0, this._renderState = { current: { geometry: /* @__PURE__ */ new Map(), metrics: null }, next: null, swap: false, swapFrames: 0, locked: false }, this._patches = new t$3(o$1), this._bufferPatches = new t$3(o$1), this._lastCommitTime = 0, this.transforms.labelMat2d = n$6(), this._store = n2, this._requestLabelUpdate = h2;
  }
  destroy() {
    super.destroy(), this._renderState.current.geometry.forEach((e2) => e2.destroy()), null != this._renderState.next && this._renderState.next.geometry.forEach((e2) => e2.destroy()), this._renderState.current = null, this._renderState.next = null;
  }
  get labelMetrics() {
    return this._renderState.current.metrics;
  }
  get hasData() {
    return !!this._renderState.current.geometry.size;
  }
  get updateStatus() {
    return `renderState:${!!this._renderState.current}, ${!!this._renderState.next}, hasData:${this.hasData}, queue:${this._patches.size}`;
  }
  getGeometry(e2) {
    return this._renderState.current.geometry.get(e2);
  }
  patch(e2, t2) {
    this.patchCount++, e2.clear && this._patches.size >= h && this._dropPatches();
    const r4 = e2, s2 = r4.addOrUpdate && this.key.id !== r4.addOrUpdate.tileKeyOrigin;
    t2 && s2 ? this._bufferPatches.enqueue(r4) : (r4.sort = r4.sort && !t2, this._patches.enqueue(r4)), this.requestRender();
  }
  commit(e2) {
    if (this._lastCommitTime !== e2.time) {
      this._lastCommitTime = e2.time;
      for (let e3 = 0; e3 < d$1; e3++)
        this._updateMesh(), this.isReady && this._updateBufferMesh();
      this._renderState.swap && (this._swapRenderStates(), this.requestRender());
    }
  }
  lock() {
    this._renderState.locked = true;
  }
  unlock() {
    this._renderState.locked = false, this._flushUpdates(), this._swap();
  }
  _swapRenderStates() {
    if (this._renderState.next) {
      if (this._renderState.locked)
        return this._renderState.swap = true, void this.requestRender();
      this._renderState.swap = true, this._swap();
    }
  }
  _swap() {
    this._renderState.swap && (this._renderState.swap = false, null != this._renderState.next && (this._renderState.current.geometry.forEach((e2) => e2.destroy()), this._renderState.current = this._renderState.next, this._renderState.next = null, this._requestLabelUpdate()));
  }
  _flushUpdates() {
    let e2 = this._patches.maxSize;
    for (; this._patches.size && e2--; )
      this._updateMesh(), this._swap();
  }
  _updateBufferMesh() {
    const e2 = this._bufferPatches.peek();
    if (null == e2 || !e2.clear || null === this._renderState.next)
      for (; this._bufferPatches.size; ) {
        const e3 = this._bufferPatches.dequeue();
        null != e3 && this._patchBuffer(e3);
      }
  }
  _updateMesh() {
    const e2 = this._patches.dequeue();
    if (null != e2) {
      if (has("esri-2d-update-debug")) {
        const t2 = e2, r4 = t2.addOrUpdate?.tileKeyOrigin, s2 = this.key.id === r4 ? "SELF" : r4;
        let i3 = "";
        for (let e3 = 0; e3 < 5; e3++)
          i3 += t2.addOrUpdate?.data[e3]?.records?.byteLength ? 1 : 0;
        console.debug(this.key.id, "FeatureTile:patch", `[clear: ${t2.clear} origin: ${s2}, end:${t2.end} data:${i3}]`);
      }
      true === e2.clear && (null != this._renderState.next && (this._renderState.next.geometry.forEach((e3) => e3.destroy()), this._renderState.next = null), this._renderState.next = { geometry: /* @__PURE__ */ new Map(), metrics: null }, has("esri-2d-update-debug") && console.debug(this.key.id, "FeatureTile:_updateMesh - Creating new renderState")), this.requestRender(), this._patch(e2), e2.end && (has("esri-2d-update-debug") && console.debug(this.key.id, "FeatureTile:_updateMesh - Encountered end message"), this.ready(), this._swapRenderStates());
    }
  }
  _patch(e2) {
    te((t2) => {
      this._remove(t2, e2.remove), this._insert(t2, e2, false);
    });
  }
  _patchBuffer(e2) {
    te((t2) => {
      this._insert(t2, e2, true);
    });
  }
  _insert(e2, t2, s2) {
    try {
      const i3 = this._renderState.next ?? this._renderState.current, a4 = t2.addOrUpdate?.data[e2], h2 = i3.geometry;
      if (null == a4)
        return;
      h2.has(e2) || (has("esri-2d-update-debug") && console.debug(this.key.id, `FeatureTile:_insert - Creating geometry buffer ${e2}`), h2.set(e2, new o$2(e2, this.stage))), has("esri-2d-update-debug") && console.debug(this.key.id, `FeatureTile:_insert - Inserting into ${e2}, version=${t2.addOrUpdate?.version} stride=${a4.stride}`), h2.get(e2).insert(a4, t2.sort, s2), e2 === E$1.LABEL && this._insertLabelMetrics(t2.type, a4.metrics, t2.clear);
    } catch (i3) {
    }
  }
  _insertLabelMetrics(e$12, t2, r4) {
    const s2 = this._renderState.next ?? this._renderState.current;
    if (null == t2)
      return;
    const i3 = e.from(t2);
    if (null != s2.metrics) {
      if ("update" === e$12) {
        const e2 = i3.getCursor();
        for (; e2.next(); )
          s2.metrics.delete(e2.id);
      }
      s2.metrics.link(i3);
    } else
      s2.metrics = i3;
  }
  _remove(e2, t2) {
    const r4 = (this._renderState.next ?? this._renderState.current).geometry.get(e2);
    t2 && t2.length && r4 && (r4.remove(t2), this._removeLabelMetrics(t2));
  }
  _removeLabelMetrics(e2) {
    const { metrics: t2 } = this._renderState.next ?? this._renderState.current;
    if (null != t2 && e2.length)
      for (const r4 of e2)
        for (; t2.delete(r4); )
          ;
  }
  _dropPatches() {
    const e2 = new Array();
    let t2 = false;
    for (; this._patches.size; ) {
      const r4 = this._patches.dequeue();
      if (null == r4)
        break;
      if (r4.clear) {
        if (t2)
          break;
        t2 = true;
      }
      e2.push(r4);
    }
    this._patches.clear(), e2.forEach((e3) => this._patches.enqueue(e3));
  }
};
const r$1 = has("featurelayer-order-by-server-enabled");
let a$2 = class a2 extends o$6 {
  constructor(e2, t2, s2, i3) {
    super(e2), this._hitTestsRequests = [], this._layer = s2, this._layerView = t2, this._onUpdate = i3;
  }
  renderChildren(e2) {
    if (this.attributeView.update(), this.hasAnimation) {
      e2.painter.effects.integrate.draw(e2, e2.attributeView);
    }
    super.renderChildren(e2);
  }
  hasEmptyAttributeView() {
    return this.attributeView.isEmpty();
  }
  isUpdating() {
    return this.attributeView.isUpdating();
  }
  hitTest(t2) {
    let s2 = this._hitTestsRequests.find(({ x: e2, y: s3 }) => e2 === t2.x && s3 === t2.y);
    const i3 = C$1();
    return s2 ? s2.resolvers.push(i3) : (s2 = { x: t2.x, y: t2.y, resolvers: [i3] }, this._hitTestsRequests.push(s2)), this.requestRender(), i3.promise;
  }
  onTileData(e2, t2) {
    const s2 = r$1 && "orderBy" in this._layer && this._layer.orderBy, i3 = s2 && s2?.length && !s2[0].valueExpression && s2[0].field, a4 = !!s2 && this._layerView.orderByFields === i3;
    e2.patch(t2, a4), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    this.contains(e2) || this.addChild(e2);
  }
  updateTransitionProperties(e2, t2) {
    super.updateTransitionProperties(e2, t2), this._layerView.featureEffectView.transitionStep(e2, t2), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e2) {
    const { minScale: t2, maxScale: s2 } = this._layer.effectiveScaleRange, i3 = e2.state.scale;
    i3 <= (t2 || 1 / 0) && i3 >= s2 && super.doRender(e2);
  }
  afterRender(e2) {
    super.afterRender(e2), this._hitTestsRequests.length && this.requestRender();
  }
  onAttributeStoreUpdate() {
    this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this._onUpdate();
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  setStencilReference(e2) {
    const { rendererSchema: t2 } = e2.rendererInfo;
    if ("dot-density" === t2?.type && t2?.dotSize > 1 || "heatmap" === t2?.type) {
      const e3 = 1;
      for (const t3 of this.children)
        t3.stencilRef = t3.key.level + e3;
    } else
      super.setStencilReference(e2);
  }
  get hasHighlight() {
    return this._layerView.hasHighlight();
  }
  get hasLabels() {
    if ("sublayers" in this._layer)
      return this._layer.sublayers.some((e3) => !!e3.labelingInfo?.length && e3.labelsVisible);
    const e2 = this._layer.featureReduction, t2 = e2 && "labelingInfo" in e2 && e2.labelsVisible && e2.labelingInfo && e2.labelingInfo.length;
    return this._layer.labelingInfo?.length && this._layer.labelsVisible || !!t2;
  }
  prepareRenderPasses(e2) {
    const s2 = super.prepareRenderPasses(e2), r4 = e2.registerRenderPass({ name: "label", brushes: [w.label], target: () => this.hasLabels ? this.children : null, drawPhase: T$1.LABEL | T$1.LABEL_ALPHA });
    if (has("featurelayer-force-marker-text-draw-order")) {
      const i3 = e2.registerRenderPass({ name: "geometry", brushes: [w.fill, w.dotDensity, w.line, w.heatmap, w.pieChart], target: () => this.children, forceDrawByDisplayOrder: true, enableDefaultDraw: () => !this._layerView.featureEffectView.hasEffects, effects: [{ apply: e2.effects.outsideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.excludedEffects }, { apply: e2.effects.insideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.includedEffects }, { apply: e2.effects.hittest, enable: () => !!this._hitTestsRequests.length, args: () => this._hitTestsRequests }] });
      s2.push(i3);
    } else {
      const i3 = e2.registerRenderPass({ name: "geometry", brushes: [w.fill, w.dotDensity, w.line, w.marker, w.heatmap, w.pieChart, w.text], target: () => this.children, enableDefaultDraw: () => !this._layerView.featureEffectView.hasEffects, effects: [{ apply: e2.effects.outsideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.excludedEffects }, { apply: e2.effects.insideEffect, enable: () => this._layerView.featureEffectView.hasEffects, args: () => this._layerView.featureEffectView.includedEffects }, { apply: e2.effects.hittest, enable: () => !!this._hitTestsRequests.length, args: () => this._hitTestsRequests }] });
      s2.push(i3);
    }
    const a4 = e2.registerRenderPass({ name: "highlight", brushes: [w.fill, w.dotDensity, w.line, w.marker, w.pieChart, w.text], target: () => this.children, drawPhase: T$1.HIGHLIGHT, enableDefaultDraw: () => false, effects: [{ apply: e2.effects.highlight, enable: () => !!this._layerView.hasHighlight() }] });
    return s2.push(a4), s2.push(r4), s2;
  }
};
let p$2 = class p2 extends o$4 {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  install(e2) {
    const t2 = () => this.notifyChange("updating"), i3 = new a$2(this.tileInfoView, this.layerView, this.layer, t2);
    this.featuresView = i3, e2.addChild(i3);
  }
  uninstall(e2) {
    e2.removeChild(this.featuresView), this.featuresView = u$5(this.featuresView);
  }
  fetchResource(e2, t2) {
    const { url: r4 } = e2, s2 = this.featuresView.stage;
    try {
      return s2.resourceManager.fetchResource(r4, { signal: t2.signal });
    } catch (a4) {
      return b(a4) ? Promise.resolve({ width: 0, height: 0 }) : Promise.reject(a4);
    }
  }
  isUpdating() {
    const e2 = super.isUpdating(), t2 = !this.featuresView || this.featuresView.isUpdating(), i3 = this.featuresView?.hasEmptyAttributeView(), r4 = e2 || t2 || e2 && i3;
    return has("esri-2d-log-updating") && console.log(`Updating SymbolTileRenderer ${r4}
  -> updatingTiles ${e2}
  -> hasFeaturesView ${!!this.featuresView}
  -> updatingFeaturesView ${t2}`), r4;
  }
  hitTest(e2) {
    return this.featuresView.hitTest(e2);
  }
  supportsRenderer(e2) {
    return null != e2 && ["simple", "class-breaks", "unique-value", "dot-density", "dictionary", "heatmap", "pie-chart"].includes(e2.type);
  }
  onConfigUpdate(e2) {
    let t2 = null;
    if (e2 && "visualVariables" in e2) {
      const i3 = (n$7(e2).visualVariables || []).map((e3) => {
        const t3 = e3.clone();
        return "normalizationField" in e3 && (t3.normalizationField = null), e3.valueExpression && "$view.scale" !== e3.valueExpression && (t3.valueExpression = null, t3.field = "nop"), t3;
      });
      t2 = c$8(i3);
    }
    this.featuresView.setRendererInfo(e2, t2, this.layerView.featureEffect);
  }
  onTileData(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && e2.data && this.featuresView.onTileData(t2, e2.data), this.layerView.view.labelManager.requestUpdate();
  }
  onTileError(e2) {
    const t2 = this.tiles.get(e2.tileKey);
    t2 && this.featuresView.onTileError(t2);
  }
  forceAttributeTextureUpload() {
    this.featuresView.attributeView.forceTextureUpload();
  }
  lockGPUUploads() {
    this.featuresView.attributeView.lockTextureUpload(), this.tiles.forEach((e2) => e2.lock());
  }
  unlockGPUUploads() {
    this.featuresView.attributeView.unlockTextureUpload(), this.tiles.forEach((e2) => e2.unlock());
  }
  async getMaterialItems(e2) {
    return this.featuresView.getMaterialItems(e2);
  }
  invalidateLabels() {
    this.featuresView.hasLabels && this.layerView.view.labelManager.requestUpdate();
  }
  createTile(e2) {
    const t2 = this.tileInfoView.getTileBounds(u$6(), e2), i3 = () => this.layerView.view.labelManager.requestUpdate(), r4 = this.tileInfoView.getTileResolution(e2.level), o4 = this.featuresView.attributeView;
    return new c$3(e2, r4, t2[0], t2[3], o4, i3);
  }
  disposeTile(e2) {
    this.featuresView.removeChild(e2), e2.destroy(), this.layerView.view.labelManager.requestUpdate();
  }
};
p$2 = e$1([c$6("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")], p$2);
function t$1(t2, n2) {
  if (!t2)
    return null;
  switch (t2.type) {
    case "symbol":
      return new p$2(n2);
    case "heatmap":
      return new o$3(n2);
  }
}
function i$1(e2) {
  return e2.some((e3) => e3.globalId);
}
function n(e2) {
  return e2.filter((e3) => !e3.error).map((e3) => e3.objectId ?? e3.globalId).filter((e3) => null != e3);
}
function d(e2, t2) {
  const s2 = new Set(e2);
  for (const r4 of t2.values())
    s2.add(r4);
  return s2;
}
function a$1(e2, t2) {
  const s2 = new Set(e2);
  for (const r4 of t2.values())
    s2.delete(r4);
  return s2;
}
let c$2 = class c4 extends g$1 {
  constructor(e2) {
    super(e2), this._hasGlobalIds = false, this._notifyUpdating = () => {
      this.notifyChange("updating");
    };
  }
  normalizeCtorArgs(e2) {
    return this._queueProcessor = new _({ concurrency: 1, process: e2.process }), {};
  }
  destroy() {
    this.clear();
  }
  get updating() {
    return this._queueProcessor.length > 0;
  }
  clear() {
    this._queueProcessor.clear();
  }
  push(e2) {
    const t2 = this._queueProcessor, s2 = t2.last();
    switch (e2.type) {
      case "update":
      case "refresh":
        if (s2?.type === e2.type)
          return;
        t2.push(e2).then(this._notifyUpdating, this._notifyUpdating);
        break;
      case "edit": {
        const r4 = "processed-edit" === s2?.type ? s2 : null;
        r4 && t2.popLast();
        const o4 = this._mergeEdits(r4, e2);
        for (const e3 of o4)
          e3 && t2.push(e3).then(this._notifyUpdating, this._notifyUpdating);
        break;
      }
    }
    this.notifyChange("updating");
  }
  _mergeEdits(e2, t2) {
    const { addedFeatures: s2, deletedFeatures: r4, updatedFeatures: o4 } = t2.edits;
    if (this._hasGlobalIds = this._hasGlobalIds || i$1(s2) || i$1(o4) || i$1(r4), this._hasGlobalIds) {
      return [e2, { type: "processed-edit", edits: { addOrModified: [...s2, ...o4], removed: r4 } }];
    }
    const c6 = new Set(n(e2?.edits.addOrModified ?? [])), p4 = new Set(n(e2?.edits.removed ?? [])), u3 = /* @__PURE__ */ new Set([...n(s2), ...n(o4)]), l2 = new Set(n(r4));
    return [{ type: "processed-edit", edits: { addOrModified: Array.from(d(a$1(c6, l2), u3)).map((e3) => ({ objectId: e3 })), removed: Array.from(d(a$1(p4, u3), l2)).map((e3) => ({ objectId: e3 })) } }];
  }
};
e$1([y({ readOnly: true })], c$2.prototype, "updating", null), e$1([y()], c$2.prototype, "process", void 0), c$2 = e$1([c$6("esri.views.2d.layers.support.FeatureCommandQueue")], c$2);
const p$1 = c$2;
function c$1(e2) {
  return Array.isArray(e2);
}
let u$1 = class u extends m$2 {
  constructor(e2) {
    super(e2), this._startupResolver = C$1(), this.isReady = false;
  }
  initialize() {
    this._controller = new AbortController(), this.addResolvingPromise(this._startWorker(this._controller.signal));
  }
  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }
  set tileRenderer(e2) {
    this.client.tileRenderer = e2;
  }
  get closed() {
    return this._connection.closed;
  }
  async startup(e2, t2, r4, s2) {
    await this.when();
    const o4 = this._controller.signal, i3 = c$1(r4.source) ? { transferList: r4.source, signal: o4 } : void 0, n2 = { service: r4, config: t2, tileInfo: e2.tileInfo.toJSON(), tiles: s2 };
    await this._connection.invoke("startup", n2, i3), this._startupResolver.resolve(), this._set("isReady", true);
  }
  async updateTiles(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("updateTiles", e2));
  }
  async update(e2) {
    const t2 = { config: e2 };
    return await this._startupResolver.promise, this._connection.invoke("update", t2);
  }
  async applyUpdate(e2) {
    return await this._startupResolver.promise, this._connection.invoke("applyUpdate", e2);
  }
  async setHighlight(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.setHighlight", e2));
  }
  async stop() {
    if (await this._startupResolver.promise, !this.closed)
      return d$3(this._connection.invoke("stop"));
  }
  async refresh(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.refresh", e2));
  }
  async querySummaryStatistics(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.querySummaryStatistics", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryAggregateSummaryStatistics(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateSummaryStatistics", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryUniqueValues(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryUniqueValues", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryAggregateUniqueValues(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateUniqueValues", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryClassBreaks(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryClassBreaks", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryAggregateClassBreaks(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateClassBreaks", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryHistogram(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryHistogram", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryAggregateHistogram(e2, t2, r4) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateHistogram", { query: e2.toJSON(), params: t2 }, r4);
  }
  async queryFeatures(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatures", e2?.toJSON(), t2);
  }
  async queryVisibleFeatures(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryVisibleFeatures", e2?.toJSON(), t2);
  }
  async queryObjectIds(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryObjectIds", e2?.toJSON(), t2);
  }
  async queryFeatureCount(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryFeatureCount", e2?.toJSON(), t2);
  }
  async queryExtent(e2, t2) {
    return this._connection.invoke("controller.queryExtent", e2.toJSON(), t2);
  }
  async queryLatestObservations(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryLatestObservations", e2.toJSON(), t2);
  }
  async queryStatistics(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryStatistics", e2);
  }
  async queryAggregates(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregates", e2?.toJSON(), t2);
  }
  async queryAggregateCount(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateCount", e2?.toJSON(), t2);
  }
  async queryAggregateIds(e2, t2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.queryAggregateIds", e2?.toJSON(), t2);
  }
  async getObjectId(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getObjectId", e2);
  }
  async getDisplayId(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getDisplayId", e2);
  }
  async getFeatures(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.getFeatures", e2);
  }
  async getAggregates() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregates");
  }
  async getAggregateValueRanges() {
    return await this._startupResolver.promise, this._connection.invoke("controller.getAggregateValueRanges");
  }
  async mapValidDisplayIds(e2) {
    return await this._startupResolver.promise, this._connection.invoke("controller.mapValidDisplayIds", e2);
  }
  async onEdits(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.onEdits", e2));
  }
  async enableEvent(e2, t2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.enableEvent", { name: e2, value: t2 }));
  }
  async pauseStream() {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.pauseStream"));
  }
  async resumeStream() {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.resumeStream"));
  }
  async sendMessageToSocket(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.sendMessageToSocket", e2));
  }
  async sendMessageToClient(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.sendMessageToClient", e2));
  }
  async updateCustomParameters(e2) {
    return await this._startupResolver.promise, d$3(this._connection.invoke("controller.updateCustomParameters", e2));
  }
  async _startWorker(e2) {
    try {
      this._connection = await p$4("Pipeline", { client: this.client, strategy: "dedicated", signal: e2 });
    } catch (t2) {
      f$3(t2);
    }
  }
};
e$1([y()], u$1.prototype, "isReady", void 0), e$1([y({ constructOnly: true })], u$1.prototype, "client", void 0), e$1([y()], u$1.prototype, "tileRenderer", null), u$1 = e$1([c$6("esri.views.2d.layers.support.FeatureLayerProxy")], u$1);
const l$2 = u$1;
const r3 = Math.PI;
function i2(e2, t2) {
  switch (t2.transformationType) {
    case i$4.Additive:
      return s(e2, t2);
    case i$4.Constant:
      return o3(t2, e2);
    case i$4.ClampedLinear:
      return u2(e2, t2);
    case i$4.Proportional:
      return l$1(e2, t2);
    case i$4.Stops:
      return c5(e2, t2);
    case i$4.RealWorldSize:
      return m(e2, t2);
    case i$4.Identity:
      return e2;
    case i$4.Unknown:
      return null;
  }
}
function a3(e2, t2) {
  return "number" == typeof e2 ? e2 : i2(t2, e2);
}
function s(e2, t2) {
  return e2 + (a3(t2.minSize, e2) || t2.minDataValue);
}
function o3(e2, t2) {
  const n2 = e2.stops;
  let r4 = n2?.length && n2[0].size;
  return null == r4 && (r4 = e2.minSize), a3(r4, t2);
}
function u2(e2, t2) {
  const n2 = t2.minDataValue, r4 = t2.maxDataValue, i3 = (e2 - n2) / (r4 - n2), s2 = a3(t2.minSize, e2), o4 = a3(t2.maxSize, e2);
  return e2 <= n2 ? s2 : e2 >= r4 ? o4 : s2 + i3 * (o4 - s2);
}
function l$1(t2, n2) {
  const r4 = t2 / n2.minDataValue, i3 = a3(n2.minSize, t2), s2 = a3(n2.maxSize, t2);
  let o4 = null;
  return o4 = r4 * i3, i$5(o4, i3, s2);
}
function c5(e2, t2) {
  const [n2, r4, i3] = p3(e2, t2.cache.ipData);
  if (n2 === r4)
    return a3(t2.stops[n2].size, e2);
  {
    const s2 = a3(t2.stops[n2].size, e2);
    return s2 + (a3(t2.stops[r4].size, e2) - s2) * i3;
  }
}
function m(n2, i3) {
  const s2 = m$3[i3.valueUnit], o4 = a3(i3.minSize, n2), u3 = a3(i3.maxSize, n2), { valueRepresentation: l2 } = i3;
  let c6 = null;
  return c6 = "area" === l2 ? 2 * Math.sqrt(n2 / r3) / s2 : "radius" === l2 || "distance" === l2 ? 2 * n2 / s2 : n2 / s2, i$5(c6, o4, u3);
}
function p3(e2, t2) {
  if (!t2)
    return;
  let n2 = 0, r4 = t2.length - 1;
  return t2.some((t3, i3) => e2 < t3 ? (r4 = i3, true) : (n2 = i3, false)), [n2, r4, (e2 - t2[n2]) / (t2[r4] - t2[n2])];
}
const t = 1e-6;
class l {
  constructor(e2) {
    this._tiles = /* @__PURE__ */ new Map(), this.buffer = 0, this.acquireTile = e2.acquireTile, this.releaseTile = e2.releaseTile, this.tileInfoView = e2.tileInfoView, this.buffer = e2.buffer;
  }
  destroy() {
  }
  clear() {
    this._tiles.forEach((e2) => this._releaseTile(e2));
  }
  tileKeys() {
    const e2 = [];
    return this._tiles.forEach((i3, t2) => e2.push(t2)), e2;
  }
  update(t2) {
    const l2 = this.tileInfoView.getTileCoverage(t2.state, this.buffer, true, "closest"), { spans: s2, lodInfo: r4 } = l2, { level: a4 } = r4, o4 = [], d2 = [], h2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set();
    for (const { row: e2, colFrom: c6, colTo: f2 } of s2)
      for (let t3 = c6; t3 <= f2; t3++) {
        const l3 = e$2.getId(a4, e2, r4.normalizeCol(t3), r4.getWorldForColumn(t3)), s3 = this._getOrAcquireTile(o4, l3);
        h2.add(l3), s3.isReady ? s3.visible = true : n2.add(s3.key);
      }
    n2.forEach((e2) => this._addPlaceholders(h2, e2)), this._tiles.forEach((e2) => {
      h2.has(e2.key.id) || (d2.push(e2.key.id), this._releaseTile(e2));
    }), l$4.pool.release(l2);
    return { hasMissingTiles: n2.size > 0, added: o4, removed: d2 };
  }
  _getOrAcquireTile(e2, t2) {
    if (!this._tiles.has(t2)) {
      const l2 = this.acquireTile(new e$2(t2));
      e2.push(t2), this._tiles.set(t2, l2), l2.visible = false;
    }
    return this._tiles.get(t2);
  }
  _getTile(e2) {
    return this._tiles.get(e2);
  }
  _releaseTile(e2) {
    this._tiles.delete(e2.key.id), this.releaseTile(e2);
  }
  _addPlaceholders(e2, i3) {
    const l2 = this._addPlaceholderChildren(e2, i3);
    if (!(Math.abs(1 - l2) < t)) {
      if (!this._addPlaceholderParent(e2, i3)) {
        this._getTile(i3.id).visible = true;
      }
    }
  }
  _addPlaceholderChildren(e2, i3) {
    let t2 = 0;
    return this._tiles.forEach((l2) => {
      t2 += this._addPlaceholderChild(e2, l2, i3);
    }), t2;
  }
  _addPlaceholderChild(e2, i3, t2) {
    if (i3.key.level <= t2.level || !i3.hasData || !t2.contains(i3.key))
      return 0;
    i3.visible = true, e2.add(i3.key.id);
    return 1 / (1 << 2 * (i3.key.level - t2.level));
  }
  _addPlaceholderParent(e2, i3) {
    let t2 = i3.getParentKey(), l2 = 0, s2 = null;
    for (; null != t2; ) {
      if (e2.has(t2.id))
        return true;
      const i4 = this._getTile(t2.id);
      if (i4?.isReady) {
        for (const i5 of e2) {
          const e3 = this._getTile(i5);
          e3 && t2.contains(e3.key) && (e3.visible = false);
        }
        return i4.visible = true, e2.add(i4.key.id), true;
      }
      i4?.hasData && i4.patchCount > l2 && (l2 = i4.patchCount, s2 = i4), t2 = t2.getParentKey();
    }
    return !!s2 && (s2.visible = true, e2.add(s2.key.id), true);
  }
}
function D(e2) {
  return e2 && "openPorts" in e2;
}
function M(e2) {
  for (const t2 of e2) {
    const e3 = "featureReduction" in t2 && t2.featureReduction && "labelingInfo" in t2.featureReduction ? t2.featureReduction : void 0, r4 = [...t2.labelingInfo || [], ...e3?.labelingInfo || []];
    if (!t2.labelsVisible || !r4.length)
      continue;
    if (r4.some((e4) => "none" === e4.deconflictionStrategy))
      return true;
  }
  return false;
}
function G(e2) {
  return (t2) => u$8(i2(t2, e2));
}
function B(e2) {
  const t2 = null != e2 && "visualVariables" in e2 && e2.visualVariables;
  if (!t2)
    return null;
  for (const r4 of t2)
    if ("size" === r4.type)
      return G(r4);
  return null;
}
const $ = "esri.views.2d.layers.FeatureLayerView2D";
function K(e2) {
  switch (e2.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "polygon":
    case "multipatch":
      return "esriGeometryPolygon";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return s$4.getLogger($).error(new s$3("unsupported-geometry-type", `Geometry type of ${e2.geometryType} is not supported`)), null;
  }
}
let Z = class extends P(a$6(m$4(u$7))) {
  constructor() {
    super(...arguments), this._pipelineIsUpdating = true, this._commandsQueue = new p$1({ process: (e2) => {
      switch (e2.type) {
        case "processed-edit":
          return this._doEdit(e2);
        case "refresh":
          return this._doRefresh(e2.dataChanged);
        case "update":
          return this._doUpdate();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightIds = /* @__PURE__ */ new Map(), this._updateHighlight = k(async () => this._proxy.setHighlight(Array.from(this._highlightIds.keys()))), this._uploadsLocked = false, this._needsClusterSizeUpdate = false, this.featureEffectView = new r$4(), this._lastDefinitionExpression = null;
  }
  destroy() {
    this._updateClusterSizeTask?.remove(), this._proxy?.destroy(), this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(Promise.all([this._initProxy(), this._initServiceOptions()])), this.addHandles([this.on("valueRangesChanged", (e2) => {
      this._set("_aggregateValueRanges", e2.valueRanges);
    }), d$4(() => this.featureEffect, (e2) => {
      this.featureEffectView.featureEffect = e2;
    }, A)], "constructor"), this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    const e2 = this.layer;
    if ("isTable" in e2 && e2.isTable)
      throw new s$3("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: this.layer });
    if (("feature" === e2.type || "subtype-group" === e2.type) && !x(e2)?.operations.supportsQuery)
      throw new s$3("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e2 });
    this._proxy && this._proxy.destroy();
    const t2 = this._createClientOptions();
    return this._set("_proxy", new l$2({ client: t2 })), this._proxy.when();
  }
  async _initServiceOptions() {
    return this._set("_serviceOptions", await this._createServiceOptions()), this._serviceOptions;
  }
  get _effectiveFeatureReduction() {
    if (!("featureReduction" in this.layer))
      return null;
    const e2 = this.layer.featureReduction;
    return e2 && (!("maxScale" in e2) || !e2.maxScale || e2.maxScale < this.view.scale) ? e2 : null;
  }
  get orderByFields() {
    return "stream" !== this._serviceOptions?.type ? this._serviceOptions?.orderByFields : void 0;
  }
  get labelsVisible() {
    const e2 = "subtype-group" === this.layer.type ? this.layer.sublayers.items : [this.layer];
    return !this.suspended && e2.some((e3) => e3.labelingInfo && e3.labelsVisible);
  }
  get labelingCollisionInfos() {
    const { tileRenderer: e2, layer: t2 } = this;
    if (null == e2)
      return null;
    const r4 = "subtype-group" === this.layer.type ? this.layer.sublayers.items : [this.layer], i3 = t2.geometryType, s2 = !M(r4), a4 = {};
    if ("subtype-group" !== t2.type) {
      if ("heatmap" === e2?.type)
        return null;
      const r5 = B(t2.renderer);
      a4[0] = r5;
    }
    return [{ tileRenderer: e2, vvEvaluators: a4, deconflictionEnabled: s2, geometryType: i3, visible: !this.suspended }];
  }
  get queryMode() {
    return this._serviceOptions?.type;
  }
  get renderingConfigHash() {
    if (!this.layer)
      return null;
    const e2 = this.availableFields, t2 = this.layer, r4 = this.view.floors, { definitionExpression: i3 } = t2, s2 = "subtype-group" !== this.layer.type && this.layer.labelsVisible && this.layer.labelingInfo, a4 = "renderer" in t2 && t2.renderer, n2 = "gdbVersion" in t2 ? t2.gdbVersion : void 0, o4 = "historicMoment" in t2 ? t2.historicMoment?.getTime() : void 0, { timeExtent: l2 } = this, u3 = "customParameters" in t2 ? JSON.stringify(t2.customParameters) : void 0, d2 = "apiKey" in t2 ? t2.apiKey : void 0, h2 = "stream" === t2.type ? `${JSON.stringify(t2.geometryDefinition)}${t2.definitionExpression}` : null, p4 = JSON.stringify(this.clips), c6 = this._effectiveFeatureReduction?.toJSON(), y2 = "orderBy" in this.layer && JSON.stringify(this.layer.orderBy), g = "sublayers" in this.layer && this.layer.sublayers.items.reduce((e3, t3) => e3 + `${t3.visible ? 1 : 0}.${JSON.stringify(t3.renderer)}.${t3.labelsVisible}
.${JSON.stringify(t3.labelingInfo)}`, ""), f2 = "subtypeCode" in this.layer && this.layer.subtypeCode;
    return JSON.stringify({ orderBy: y2, sublayerHash: g, subtypeCode: f2, filterHash: null != this.filter && this.filter.toJSON(), effectHash: null != this.featureEffect && this.featureEffect.toJSON(), streamFilter: h2, gdbVersion: n2, definitionExpression: i3, historicMoment: o4, availableFields: e2, renderer: a4, labelingInfo: s2, timeExtent: l2, floors: r4, clipsHash: p4, featureReduction: c6, customParameters: u3, apiKey: d2, timeZone: this.view.timeZone });
  }
  highlight(e2) {
    let t2;
    e2 instanceof c$7 ? t2 = [e2.getObjectId()] : "number" == typeof e2 || "string" == typeof e2 ? t2 = [e2] : V.isCollection(e2) && e2.length > 0 ? t2 = e2.map((e3) => e3?.getObjectId()).toArray() : Array.isArray(e2) && e2.length > 0 && (t2 = "number" == typeof e2[0] || "string" == typeof e2[0] ? e2 : e2.map((e3) => e3?.getObjectId()));
    const a4 = t2?.filter(k$1);
    return a4?.length ? (this._addHighlight(a4), e$3(() => this._removeHighlight(a4))) : e$3();
  }
  hasHighlight() {
    return !!this._highlightIds.size;
  }
  async hitTest(e2, i3) {
    if (!this.tileRenderer)
      return null;
    const s2 = await this.tileRenderer.hitTest(i3);
    if (0 === s2.length)
      return null;
    has("featurelayer-force-marker-text-draw-order") && s2.sort((e3, t2) => e3 - t2);
    const { features: a4, aggregates: n2 } = await this._proxy.getFeatures(s2);
    return [...n2.map((r4) => this._createGraphicHit(e2, s$2.fromJSON(r4))), ...a4.map((t2) => this._createGraphicHit(e2, c$7.fromJSON(t2)))];
  }
  queryStatistics() {
    return this._proxy.queryStatistics();
  }
  async querySummaryStatistics(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.querySummaryStatistics(this._cleanUpQuery(e2), i3, r4);
  }
  async queryAggregateSummaryStatistics(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryAggregateSummaryStatistics(this._cleanUpAggregateQuery(e2), i3, r4);
  }
  async queryUniqueValues(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryUniqueValues(this._cleanUpQuery(e2), i3, r4);
  }
  async queryAggregateUniqueValues(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryAggregateUniqueValues(this._cleanUpAggregateQuery(e2), i3, r4);
  }
  async queryClassBreaks(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryClassBreaks(this._cleanUpQuery(e2), i3, r4);
  }
  async queryAggregateClassBreaks(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryAggregateClassBreaks(this._cleanUpAggregateQuery(e2), i3, r4);
  }
  async queryHistogram(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryHistogram(this._cleanUpQuery(e2), i3, r4);
  }
  async queryAggregateHistogram(e2, t2, r4) {
    const i3 = { ...t2, scale: this.view.scale };
    return this._proxy.queryAggregateHistogram(this._cleanUpAggregateQuery(e2), i3, r4);
  }
  queryFeatures(e2, t2) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => {
      const t3 = d$2.fromJSON(e3);
      return t3.features.forEach((e4) => this._setLayersForFeature(e4)), t3;
    });
  }
  queryVisibleFeatures(e2, t2) {
    return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e2), t2).then((e3) => {
      const t3 = d$2.fromJSON(e3);
      return t3.features.forEach((e4) => this._setLayersForFeature(e4)), t3;
    });
  }
  async queryAggregates(e2, t2) {
    const r4 = await this._proxy.queryAggregates(this._cleanUpAggregateQuery(e2), t2), i3 = i$3.fromJSON(r4);
    return i3.features.forEach((e3) => this._setLayersForFeature(e3)), i3;
  }
  queryAggregateIds(e2, t2) {
    return this._proxy.queryAggregateIds(this._cleanUpAggregateQuery(e2), t2);
  }
  queryAggregateCount(e2, t2) {
    return this._proxy.queryAggregateCount(this._cleanUpAggregateQuery(e2), t2);
  }
  queryAggregateJSON(e2, t2) {
    return this._proxy.queryAggregates(this._cleanUpAggregateQuery(e2), t2);
  }
  queryFeaturesJSON(e2, t2) {
    return this._proxy.queryFeatures(this._cleanUpQuery(e2), t2);
  }
  queryObjectIds(e2, t2) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(e2), t2);
  }
  queryFeatureCount(e2, t2) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(e2), t2);
  }
  queryExtent(e2, t2) {
    return this._proxy.queryExtent(this._cleanUpQuery(e2), t2).then((e3) => ({ count: e3.count, extent: M$1.fromJSON(e3.extent) }));
  }
  setVisibility(e2, t2) {
    t2 ? this._visibilityOverrides.delete(e2) : this._visibilityOverrides.add(e2), this._update();
  }
  update(e2) {
    if (!this._tileStrategy || !this.tileRenderer)
      return;
    const { hasMissingTiles: t2, added: r4, removed: i3 } = this._tileStrategy.update(e2);
    (r4.length || i3.length) && this._proxy.updateTiles({ added: r4, removed: i3 }), t2 && this.requestUpdate(), this.notifyChange("updating");
  }
  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._tileStrategy = new l({ acquireTile: (e2) => this._acquireTile(e2), releaseTile: (e2) => this._releaseTile(e2), tileInfoView: this.view.featuresTilingScheme, buffer: 0 }), this.addAttachHandles(d$4(() => this.renderingConfigHash, () => this._update(), P$1)), "stream" !== this.layer.type && this.addAttachHandles(this.layer.on("edits", (e2) => this._edit(e2)));
  }
  detach() {
    this._commandsQueue.clear(), this._proxy?.stop(), this.container.removeAllChildren(), this.tileRenderer?.uninstall(this.container), this.tileRenderer = null, this._tileStrategy = u$5(this._tileStrategy), this._tileRendererHash = null;
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
  isUpdating() {
    const e2 = "renderer" in this.layer && null != this.layer.renderer, t2 = this._commandsQueue.updating, r4 = null != this._updatingRequiredFieldsPromise, i3 = !this._proxy || !this._proxy.isReady, s2 = this._pipelineIsUpdating, a4 = null == this.tileRenderer || this.tileRenderer?.updating, n2 = e2 && (t2 || r4 || i3 || s2 || this.dataUpdating || a4);
    return has("esri-2d-log-updating") && console.log(`Updating FLV2D (${this.layer.id}): ${n2}
  -> hasRenderer ${e2}
  -> hasPendingCommand ${t2}
  -> updatingRequiredFields ${r4}
  -> updatingProxy ${i3}
  -> updatingPipeline ${s2}
  -> updatingData: ${this.dataUpdating}
  -> updatingTileRenderer ${a4}
`), n2;
  }
  _createClientOptions() {
    return { setUpdating: (e2) => {
      this._set("_pipelineIsUpdating", e2);
    }, setDataUpdating: (e2) => {
      this._set("dataUpdating", e2);
    }, emitEvent: (e2) => {
      this.emit(e2.name, e2.event);
    } };
  }
  async _detectQueryMode(e2) {
    const t2 = "path" in e2, { layer: r4 } = this, i3 = "editingInfo" in r4 && r4.editingInfo?.lastEditDate, s2 = "refreshInterval" in r4 && !!r4.refreshInterval, a4 = !i3 && s2, n2 = x(r4);
    if (t2 && ("feature" === r4.type || "subtype-group" === r4.type) && "point" === r4.geometryType && n2?.query.supportsPagination && !n2?.operations.supportsEditing && !a4 && has("featurelayer-snapshot-enabled"))
      try {
        const e3 = await r4.queryFeatureCount();
        if (e3 <= has("featurelayer-snapshot-point-min-threshold"))
          return { mode: "snapshot", featureCount: e3 };
        const t3 = has("featurelayer-snapshot-point-max-threshold"), i4 = has("featurelayer-snapshot-point-coverage"), s3 = this.view.extent, a5 = r4.fullExtent, n3 = a5?.clone().intersection(s3), o4 = null != n3 ? n3.width * n3.height : 0, l2 = a5?.width * a5?.height;
        if (e3 <= t3 && (0 === l2 ? 0 : o4 / l2) >= i4)
          return { mode: "snapshot", featureCount: e3 };
      } catch (o4) {
        s$4.getLogger(this).warn("mapview-feature-layer", "Encountered an error when querying for featureCount", { error: o4 });
      }
    return { mode: "on-demand" };
  }
  async _createServiceOptions() {
    const e2 = this.layer;
    if ("stream" === e2.type)
      return null;
    const t2 = x(e2), { capabilities: r4, objectIdField: i3 } = e2, s2 = e2.fieldsIndex.toJSON(), a4 = s2.fields, n2 = null != e2.fullExtent ? e2.fullExtent.toJSON() : null, l2 = K(e2), u3 = "timeInfo" in e2 && e2.timeInfo?.toJSON() || null, d2 = e2.spatialReference ? e2.spatialReference.toJSON() : null, h2 = "feature" === e2.type ? e2.globalIdField : null;
    let p4;
    "ogc-feature" === e2.type ? p4 = e2.source.getSource() : D(e2.source) ? p4 = await e2.source.openPorts() : e2.parsedUrl && (p4 = a$7(e2.parsedUrl), "dynamicDataSource" in e2 && e2.dynamicDataSource && (p4.query = { layer: JSON.stringify({ source: e2.dynamicDataSource }) }));
    const c6 = "datesInUnknownTimezone" in this.layer && this.layer.datesInUnknownTimezone, y2 = ("subtypeField" in this.layer ? this.layer.subtypeField : null) ?? null, { mode: g, featureCount: f2 } = await this._detectQueryMode(p4);
    let m2 = this.layer.objectIdField;
    if ("feature" === this.layer.type && null != this.layer.orderBy && this.layer.orderBy.length) {
      const e3 = !this.layer.orderBy[0].valueExpression && this.layer.orderBy[0].field;
      e3 && (m2 = e3);
    }
    return { type: g, typeIdField: "typeIdField" in e2 && e2.typeIdField || void 0, types: "types" in e2 && e2.types?.map((e3) => e3.toJSON()) || void 0, timeReferenceUnknownClient: c6, subtypeField: y2, featureCount: f2, globalIdField: h2, maxRecordCount: r4.query.maxRecordCount, tileMaxRecordCount: r4.query.tileMaxRecordCount, capabilities: r4, effectiveCapabilities: t2, fields: a4, fieldsIndex: s2, fullExtent: n2, geometryType: l2, objectIdField: i3, source: p4, timeInfo: u3, spatialReference: d2, orderByFields: m2 };
  }
  async _createMemoryServiceOptions(e2) {
    const t2 = await e2.openPorts();
    return { ...this._createServiceOptions(), type: "memory", source: t2 };
  }
  _cleanUpQuery(e2) {
    const t2 = b$1.from(e2) || this.createQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2;
  }
  _cleanUpAggregateQuery(e2) {
    const t2 = b$1.from(e2) || this.createAggregateQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2;
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(e2) {
    if (this.suspended)
      return void this._clearTiles();
    return this._validateEdit(e2) ? this._commandsQueue.push({ type: "edit", edits: e2 }) : void 0;
  }
  async doRefresh(e2) {
    if (this.attached && this._tileStrategy.tileKeys().length)
      return this.suspended && e2 ? void this._clearTiles() : this._commandsQueue.push({ type: "refresh", dataChanged: e2 });
  }
  _clearTiles() {
    this._tileStrategy.tileKeys().length && (this._proxy.updateTiles({ added: [], removed: this._tileStrategy.tileKeys() }), this._tileStrategy.clear(), this.requestUpdate(), this._commandsQueue.clear(), this._update());
  }
  _validateEdit(e2) {
    const t2 = "globalIdField" in this.layer && this.layer.globalIdField, r4 = e2.deletedFeatures.some((e3) => -1 === e3.objectId || !e3.objectId), i3 = t2 && this.availableFields.includes(t2);
    return r4 && !i3 ? (s$4.getLogger(this).error(new s$3("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t2} to be included the layer's outFields for updates to be reflected on the map`)), null) : e2;
  }
  async _doUpdate() {
    try {
      if (this.destroyed || !this._hasRequiredSupport(this.layer) || !this._tileStrategy)
        return;
      const { featureEffectView: t2, filter: r4 } = this;
      if (await this._updateRequiredFields(), this.destroyed)
        return;
      const { renderer: i3 } = this._getEffectiveRenderer();
      this._set("_effectiveRenderer", i3);
      const s2 = this._createSchemaConfig(), a4 = this._createConfiguration(s2, r4, t2.filter), n2 = this._lastDefinitionExpression !== a4.schema.source.definitionExpression;
      this._lastDefinitionExpression = a4.schema.source.definitionExpression;
      const o4 = a4.schema.tileRenderer, u3 = this._createTileRendererHash(o4);
      if ("snapshot" === this._serviceOptions.type && (a4.schema.source.initialFeatureCount = this._serviceOptions.featureCount), u3 !== this._tileRendererHash) {
        this._initTileRenderer(o4, i3);
        const e2 = this.layer, t3 = "stream" === e2.type ? await this._initServiceOptions() : this._serviceOptions;
        this.tileRenderer.onConfigUpdate(i3), "stream" !== e2.type && D(e2.source) && (t3.source = await e2.source.openPorts());
        const r5 = { added: this._tileStrategy.tileKeys(), removed: [] };
        has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Proxy startup"), await this._proxy.startup(this.view.featuresTilingScheme, a4, t3, r5), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Finished proxy startup"), this.hasHighlight() && (has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Updating highlight"), await this._proxy.setHighlight(Array.from(this._highlightIds.keys())), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Finished highlight update")), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: onConfigUpdate start"), this.tileRenderer.onConfigUpdate(i3), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: onConfigUpdate end");
      } else {
        "snapshot" === this._serviceOptions.type && n2 && (a4.schema.source.changedFeatureCount = await this.layer.queryFeatureCount()), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Updating proxy");
        const t3 = await this._proxy.update(a4);
        has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Finished proxy update"), (t3.mesh || t3.targets?.aggregate) && (has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Locking GPU Uploads"), this._lockGPUUploads());
        try {
          has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Applying update to proxy"), await this._proxy.applyUpdate(t3), has("esri-2d-update-debug") && console.debug("FeatureLayerView2D: Finished applying update to proxy");
        } catch (e2) {
          b(e2) || s$4.getLogger(this).error(e2);
        }
        (t3.mesh || t3.targets?.aggregate) && this._unlockGPUUploads(), this.tileRenderer.onConfigUpdate(i3), this._updateClusterSizeVariable(), this._forceAttributeTextureUpload();
      }
      this._tileRendererHash = u3, this.tileRenderer.invalidateLabels(), this.requestUpdate();
    } catch (e2) {
    }
  }
  async _doEdit(e2) {
    try {
      await this._proxy.onEdits(e2);
    } catch (t2) {
      b(t2);
    }
  }
  async _doRefresh(e2) {
    this._lockGPUUploads();
    try {
      let t2;
      e2 && "snapshot" === this.queryMode && "queryFeatureCount" in this.layer && (t2 = await this.layer.queryFeatureCount()), await this._proxy.refresh({ dataChanged: e2, featureCount: t2 });
    } catch (t2) {
      b(t2);
    }
    this._unlockGPUUploads(), this._effectiveFeatureReduction && this._updateClusterSizeVariable();
  }
  _updateClusterSizeVariable() {
    this._needsClusterSizeUpdate && (this.tileRenderer.onConfigUpdate(this._effectiveRenderer), this._needsClusterSizeUpdate = false);
  }
  _createUpdateClusterSizeTask(e2, t2) {
    return d$4(() => this._aggregateValueRanges, (r4) => {
      this._updateClusterEffectiveRendererSizeVariable(e2, t2, r4), this._needsClusterSizeUpdate = true, this._uploadsLocked || this._updateClusterSizeVariable();
    });
  }
  async _updateClusterEffectiveRendererSizeVariable(e2, t2, r4) {
    if (e2.dynamicClusterSize && "visualVariables" in e2 && e2.visualVariables) {
      const i3 = d$5(e2.visualVariables);
      if (null != i3 && "cluster_count" === i3.field) {
        const s2 = e2.visualVariables.indexOf(i3);
        e2.visualVariables[s2] = v(t2, r4);
        const a4 = e2.clone();
        a4.dynamicClusterSize = true, this._set("_effectiveRenderer", a4);
      }
    }
  }
  _getEffectiveRenderer() {
    const e2 = this.layer, t2 = "renderer" in e2 ? e2.renderer : null, r4 = this._effectiveFeatureReduction;
    if (this._updateClusterSizeTask = l$5(this._updateClusterSizeTask), r4 && "renderer" in r4 && r4.renderer && !r4.renderer.authoringInfo?.isAutoGenerated) {
      const e3 = r4.fields;
      if ("cluster" === r4.type) {
        const { renderer: t3, didInject: i3 } = f$4(r4.renderer, r4, this._aggregateValueRanges);
        return i3 && (this._updateClusterSizeTask = this._createUpdateClusterSizeTask(t3, r4)), { renderer: t3, aggregateFields: e3, featureReduction: r4 };
      }
      return { renderer: r4.renderer, aggregateFields: e3, featureReduction: r4 };
    }
    if (r4 && "cluster" === r4.type && t2 && b$2(t2)) {
      const e3 = r4, i3 = [], s2 = c$9(i3, t2, e3, this._aggregateValueRanges, true);
      return this._updateClusterSizeTask = this._createUpdateClusterSizeTask(s2, e3), { renderer: s2, aggregateFields: i3, featureReduction: r4 };
    }
    return { renderer: t2, aggregateFields: [], featureReduction: null };
  }
  _acquireTile(e2) {
    const t2 = this.tileRenderer.acquireTile(e2);
    return t2.once("attach", () => {
      this.requestUpdate();
    }), t2;
  }
  _releaseTile(e2) {
    this.tileRenderer.releaseTile(e2);
  }
  _initTileRenderer(e2, t2) {
    const r4 = t$1(e2, { layerView: this, tileInfoView: this.view.featuresTilingScheme, layer: this.layer });
    return this.tileRenderer && (this._tileStrategy.clear(), this.tileRenderer.uninstall(this.container), this.tileRenderer = u$5(this.tileRenderer)), this.destroyed ? null : (this._proxy.tileRenderer = r4, this._set("tileRenderer", r4), this.tileRenderer.install(this.container), this.tileRenderer.onConfigUpdate(t2), this.requestUpdate(), this.tileRenderer);
  }
  _createTileRendererHash(e2) {
    return `${e2.type}`;
  }
  get hasFilter() {
    const e2 = !!("floorInfo" in this.layer && this.layer.floorInfo && this.view.floors && this.view.floors.length);
    return !!this.filter || e2 || !!this._visibilityOverrides.size || !!this.timeExtent;
  }
  _injectOverrides(e2) {
    const t2 = null != e2 ? e2.timeExtent : null, r4 = null != this.timeExtent && null != t2 ? this.timeExtent.intersection(t2) : this.timeExtent || t2;
    let i3 = null;
    const s2 = "floorInfo" in this.layer && this.layer.floorInfo;
    if (s2) {
      const t3 = null != e2 ? e2.where : null;
      i3 = this._addFloorFilterClause(t3);
    }
    if (!this._visibilityOverrides.size && !r4 && !s2)
      return null != e2 ? e2.toJSON() : null;
    (e2 = null != e2 && e2.clone() || new d$6()).timeExtent = r4, i3 && (e2.where = i3);
    const a4 = e2.toJSON();
    return a4.hiddenIds = Array.from(this._visibilityOverrides), a4;
  }
  _addFloorFilterClause(e2) {
    const t2 = this.layer;
    let r4 = e2 || "";
    if ("floorInfo" in t2 && t2.floorInfo) {
      let e3 = this.view.floors;
      if (!e3?.length)
        return r4;
      t2.floorInfo.viewAllLevelIds?.length && (e3 = t2.floorInfo.viewAllLevelIds);
      const i3 = e3.filter((e4) => "" !== e4).map((e4) => "'" + e4 + "'");
      i3.push("''");
      const s2 = t2.floorInfo.floorField;
      let a4 = "(" + s2 + " IN ({ids}) OR " + s2 + " IS NULL)";
      if (a4 = a4.replace("{ids}", i3.join(", ")), null != r4 && r4.includes(s2)) {
        let e4 = new RegExp("AND \\(" + s2 + ".*NULL\\)", "g");
        r4 = r4.replace(e4, ""), e4 = new RegExp("\\(" + s2 + ".*NULL\\)", "g"), r4 = r4.replace(e4, ""), r4 = r4.replaceAll(/\s+/g, " ").trim();
      }
      r4 = "" !== r4 ? "(" + r4 + ") AND " + a4 : a4;
    }
    return "" !== r4 ? r4 : null;
  }
  _createConfiguration(e2, t2, r4) {
    const i3 = "feature" === this.layer.type && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0, s2 = "feature" === this.layer.type ? this.layer.gdbVersion ?? void 0 : void 0, a4 = new Array(V$1), n2 = this._injectOverrides(t2);
    a4[0] = n2, a4[1] = null != r4 ? r4.toJSON() : null;
    const o4 = w$1(e2);
    if (null == o4)
      return null;
    const l2 = n$8("2d");
    return { availableFields: this.availableFields, gdbVersion: s2, historicMoment: i3, devicePixelRatio: window.devicePixelRatio || 1, filters: a4, schema: o4, supportsTextureFloat: l2.supportsTextureFloat, maxTextureSize: l2.maxTextureSize, timeZone: this.view.timeZone };
  }
  _hasRequiredSupport(e2) {
    return !("renderer" in e2) || h$3(e2.renderer);
  }
  _lockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = true, this.tileRenderer.lockGPUUploads());
  }
  _unlockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = false, this.tileRenderer.unlockGPUUploads());
  }
  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }
  _createSchemaConfig() {
    const e2 = this.layer;
    return { renderer: "renderer" in e2 ? e2.renderer : null, spatialReference: e2.spatialReference, timeExtent: "timeExtent" in e2 ? e2.timeExtent : null, definitionExpression: e2.definitionExpression, featureReduction: this._effectiveFeatureReduction, fields: e2.fields, geometryType: e2.geometryType, historicMoment: "historicMoment" in e2 ? e2.historicMoment : null, labelsVisible: "labelsVisible" in e2 && e2.labelsVisible, labelingInfo: "labelingInfo" in e2 ? e2.labelingInfo : null, availableFields: this.availableFields, featureEffect: this.featureEffect, filter: this.filter, gdbVersion: "gdbVersion" in e2 ? e2.gdbVersion : null, pixelBuffer: 0, orderBy: "orderBy" in e2 && e2.orderBy ? e2.orderBy : null, customParameters: { ..."customParameters" in e2 ? e2.customParameters : void 0, token: "apiKey" in e2 ? e2.apiKey ?? void 0 : void 0 }, subtypeCode: "subtypeCode" in e2 ? e2.subtypeCode : void 0, subtypeField: "subtypeField" in e2 ? e2.subtypeField : void 0 };
  }
  _addHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2);
        this._highlightIds.set(t2, e3 + 1);
      } else
        this._highlightIds.set(t2, 1);
    this._updateHighlight().catch((e3) => {
      b(e3) || s$4.getLogger(this).error(e3);
    });
  }
  _removeHighlight(e2) {
    for (const t2 of e2)
      if (this._highlightIds.has(t2)) {
        const e3 = this._highlightIds.get(t2) - 1;
        0 === e3 ? this._highlightIds.delete(t2) : this._highlightIds.set(t2, e3);
      }
    this._updateHighlight().catch((e3) => {
      b(e3) || s$4.getLogger(this).error(e3);
    });
  }
  _setLayersForFeature(e2) {
    const t2 = this.layer;
    e2.layer = t2, e2.sourceLayer = t2;
  }
  _createGraphicHit(e2, t2) {
    return this._setLayersForFeature(t2), null != t2.geometry && (t2.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: t2, layer: this.layer, mapPoint: e2 };
  }
};
e$1([y()], Z.prototype, "_serviceOptions", void 0), e$1([y()], Z.prototype, "_proxy", void 0), e$1([y()], Z.prototype, "_pipelineIsUpdating", void 0), e$1([y()], Z.prototype, "_effectiveRenderer", void 0), e$1([y()], Z.prototype, "_effectiveFeatureReduction", null), e$1([y()], Z.prototype, "_aggregateValueRanges", void 0), e$1([y()], Z.prototype, "_commandsQueue", void 0), e$1([y()], Z.prototype, "featureEffectView", void 0), e$1([y()], Z.prototype, "labelsVisible", null), e$1([y()], Z.prototype, "labelingCollisionInfos", null), e$1([y({ readOnly: true })], Z.prototype, "queryMode", null), e$1([y()], Z.prototype, "renderingConfigHash", null), e$1([y()], Z.prototype, "tileRenderer", void 0), e$1([y()], Z.prototype, "updating", void 0), Z = e$1([c$6($)], Z);
const W = Z;
export {
  W as default
};
