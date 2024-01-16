import { A6 as P, A7 as F, A8 as j, A9 as H, f as f$4, h as h$2, Aa as Y, i3 as F$1, Ab as x$2, Ac as U, Ad as R, Ae as t$5, zN as te$1, c9 as S$1, ax as G, aw as u$1, bq as j$1, fO as v, Af as ot, aE as f$5, qO as l$1, Ag as L, Ah as q, Ai as d$3, Aj as C, qW as dt, qX as ht, q_ as $, hS as t$6, oi as i$1, hZ as L$1, k6 as E, zx as i$2, aG as a$1, h8 as u$2, aq as has, bC as s$3, e$ as n$3, bJ as d$4, b1 as s$4, bX as k$1, k3 as M, k4 as s$5, bI as b$1, cZ as f$6, cq as a$3, b$ as n$4, aF as s$6, aD as m$2, fB as m$3, aB as l$2, aC as u$3, Ak as X, Al as O, Am as y$3, An as N, bo as e$7, bp as y$4, br as c$1, bs as g$3 } from "./chunk-KFNcxJaF.js";
import { c as ie$1, f as tt, g as te$2, i as i$5 } from "./chunk-G90k0bzF.js";
import { a as a$4 } from "./chunk-NkuZ7t90.js";
import { x as x$4, j as j$2 } from "./chunk-XCl2NxdK.js";
import { m as m$1, r as r$3, T, _ as _$1, i as i$3 } from "./chunk-Zlv3z8RW.js";
import { e as e$6, o as o$5, x as x$3, a as a$2, i as i$4, E as E$1 } from "./chunk-b7K892Yv.js";
import { h as h$3, S as S$2, r as r$4, k } from "./chunk-DnHFm0Vi.js";
const t$4 = -1;
let e$5 = class e {
  constructor() {
    this._dirties = [{ vertexFrom: t$4, vertexCount: t$4, indexFrom: t$4, indexCount: t$4, allDirty: false }, { vertexFrom: t$4, vertexCount: t$4, indexFrom: t$4, indexCount: t$4, allDirty: false }, { vertexFrom: t$4, vertexCount: t$4, indexFrom: t$4, indexCount: t$4, allDirty: false }, { vertexFrom: t$4, vertexCount: t$4, indexFrom: t$4, indexCount: t$4, allDirty: false }, { vertexFrom: t$4, vertexCount: t$4, indexFrom: t$4, indexCount: t$4, allDirty: false }];
  }
  hasDirty() {
    return this._dirties.some((e6) => e6.indexCount !== t$4 || e6.allDirty);
  }
  markAllClean() {
    for (const e6 of this._dirties)
      e6.indexFrom = t$4, e6.indexCount = t$4, e6.vertexFrom = t$4, e6.vertexCount = t$4, e6.allDirty = false;
  }
  markAllDirty() {
    for (const t4 of this._dirties)
      t4.allDirty = true;
  }
  forEach(e6) {
    for (let r3 = 0; r3 < this._dirties.length; ++r3) {
      const { indexCount: i2, indexFrom: o5, vertexCount: n3, vertexFrom: x2, allDirty: l2 } = this._dirties[r3], s3 = {};
      let d3, m2 = false;
      (l2 || x2 !== t$4 && n3 > 0) && (s3.geometry = { count: n3, from: x2, allDirty: l2 }, m2 = true), (l2 || o5 !== t$4 && i2 > 0) && (d3 = { count: i2, from: o5, allDirty: l2 }, m2 = true), m2 && e6({ indices: d3, vertices: s3 }, r3);
    }
  }
  markDirtyIndices(e6, r3, i2) {
    const o5 = this._dirties[e6], n3 = r3, x2 = i2;
    if (!o5.allDirty)
      if (o5.indexCount !== t$4) {
        const t4 = Math.min(o5.indexFrom, n3), e7 = Math.max(o5.indexFrom + o5.indexCount, n3 + x2) - t4;
        o5.indexFrom = t4, o5.indexCount = e7;
      } else
        o5.indexFrom = n3, o5.indexCount = x2;
  }
  markDirtyVertices(e6, r3, i2, o5) {
    const n3 = this._dirties[e6], x2 = i2, l2 = o5;
    if (!n3.allDirty)
      if (n3.vertexCount !== t$4) {
        const t4 = Math.min(n3.vertexFrom, x2), e7 = Math.max(n3.vertexFrom + n3.vertexCount, x2 + l2) - t4;
        n3.vertexFrom = t4, n3.vertexCount = e7;
      } else
        n3.vertexFrom = x2, n3.vertexCount = l2;
  }
};
let e$4 = class e2 {
  get largestRange() {
    return this._largestRange;
  }
  constructor(e6) {
    this._largestRange = null, this._parent = e6, this._updateLargestRange();
  }
  rangeCreated(e6) {
    (!this._largestRange || e6.count > this._largestRange.count) && (this._largestRange = e6);
  }
  rangeResized(e6, t4) {
    e6 === this._largestRange ? e6.count < t4 && this._updateLargestRange() : (!this._largestRange || e6.count > this._largestRange.count) && (this._largestRange = e6);
  }
  findBestRange(e6) {
    let t4 = this._parent._freeHead, n3 = null;
    for (; null !== t4; )
      t4.count >= e6 && (!n3 || t4.count - e6 < n3.count - e6) && (n3 = t4), t4 = t4.next;
    return n3;
  }
  findAdjacentRanges(e6, t4) {
    let n3 = true, r3 = false, s3 = null, o5 = this._parent._freeHead;
    for (; n3 && !r3; ) {
      const a2 = null !== s3 ? s3.from + s3.count : 0, l2 = null !== o5 ? o5.from : this._parent._size;
      e6 >= a2 && e6 + t4 <= l2 ? (n3 = false, r3 = true) : null !== o5 ? (s3 = o5, o5 = o5.next) : n3 = false;
    }
    return [s3, o5];
  }
  _updateLargestRange() {
    let e6 = null, t4 = this._parent._freeHead;
    for (; null !== t4; )
      (!e6 || t4.count > e6.count) && (e6 = t4), t4 = t4.next;
    this._largestRange = e6;
  }
};
let t$3 = class t {
  constructor(t4, n3) {
    this._allocated = 0, this._size = t4, this._freeHead = t4 > 0 ? { from: 0, count: t4, prev: null, next: null } : null, this._bookKeeper = n3 || new e$4(this), this._freeHead && this._bookKeeper.rangeCreated(this._freeHead);
  }
  allocate(e6) {
    const n3 = this._bookKeeper.findBestRange(e6);
    if (null == n3)
      return -1;
    const r3 = n3.from, s3 = n3.count;
    if (n3.from += e6, n3.count -= e6, this._bookKeeper.rangeResized(n3, r3, s3), this._allocated += e6, 0 === n3.count) {
      const e7 = null !== n3.prev ? this._freeHead : n3.next;
      t._removeRange(n3), this._freeHead = e7;
    }
    return r3;
  }
  free(e6, n3) {
    const [r3, s3] = this._bookKeeper.findAdjacentRanges(e6, n3), o5 = { from: e6, count: n3, prev: r3 ?? null, next: s3 ?? null };
    if (null != r3 && (r3.next = o5), null != s3 && (s3.prev = o5), this._bookKeeper.rangeCreated(o5), this._allocated -= n3, null != s3 && o5.from + o5.count === s3.from) {
      const e7 = o5.from, n4 = o5.count;
      t._fuse(o5, s3), t._removeRange(s3), this._bookKeeper.rangeResized(o5, e7, n4), this._bookKeeper.rangeResized(s3, void 0, 0);
    }
    if (null != r3 && r3.from + r3.count === o5.from) {
      const e7 = r3.from, n4 = r3.count;
      t._fuse(r3, o5), t._removeRange(o5), this._bookKeeper.rangeResized(r3, e7, n4), this._bookKeeper.rangeResized(o5, void 0, 0);
    }
    this._freeHead = null !== o5.prev ? this._freeHead : o5;
  }
  get fragmentation() {
    const e6 = this._size - this._allocated;
    if (0 === e6)
      return 0;
    return 1 - this._bookKeeper.largestRange.count / e6;
  }
  static _removeRange(e6) {
    null !== e6.prev ? null !== e6.next ? (e6.prev.next = e6.next, e6.next.prev = e6.prev) : e6.prev.next = null : null !== e6.next && (e6.next.prev = null);
  }
  static _fuse(e6, t4) {
    e6.count += t4.count, e6.next = t4.next, t4.from += t4.count, t4.count = 0, null !== t4.next && (t4.next.prev = e6);
  }
};
const s$2 = ["FILL", "LINE", "MARKER", "TEXT", "LABEL"];
function o$4(e6) {
  const t4 = e6.getStrides(), r3 = {};
  for (let i2 = 0; i2 < t4.length; i2++)
    r3[s$2[i2]] = t4[i2];
  return r3;
}
const n$2 = 0.5;
let d$2 = class d {
  constructor(r3, i2, s3, o5) {
    this._strides = r3, this._displayList = i2, this._freeListsAndStorage = {}, this._dirtyMap = null, this._dirtyMap = s3;
    for (const n3 in r3) {
      this._freeListsAndStorage[n3] = { vtxFreeList: o5 ? new t$3(o5) : null, idxFreeList: o5 ? new t$3(o5) : null, vertexBuffers: {}, indexBuffer: o5 ? new Uint32Array(o5) : null };
      for (const e6 in r3[n3])
        this._freeListsAndStorage[n3].vertexBuffers[e6] = { data: o5 ? P(o5, r3[n3][e6]) : null, stride: r3[n3][e6] };
    }
  }
  static fromTileData(t4, i2) {
    const n3 = o$4(t4), a2 = [0, 0, 0, 0, 0], x2 = [0, 0, 0, 0, 0];
    for (const e6 of t4.tileDisplayData.displayObjects)
      for (const t5 of e6.displayRecords)
        a2[t5.geometryType] = Math.max(a2[t5.geometryType], t5.vertexFrom + t5.vertexCount), x2[t5.geometryType] = Math.max(x2[t5.geometryType], t5.indexFrom + t5.indexCount);
    const u2 = new d(n3, t4.tileDisplayData.displayList, i2, void 0), f3 = t4.tileBufferData?.geometries ?? [];
    for (let o5 = 0; o5 < f3.length; ++o5) {
      const t5 = a2[o5], i3 = x2[o5], n4 = f3[o5], d3 = s$2[o5], c2 = u2._storageFor(d3), l2 = f3[o5].indexBuffer;
      c2.indexBuffer = l2, c2.idxFreeList = new t$3(l2.length), c2.idxFreeList.allocate(i3);
      let m2 = 0;
      for (const e6 in n4.vertexBuffer) {
        const t6 = f3[o5].vertexBuffer[e6];
        c2.vertexBuffers[e6].data = t6.data, c2.vertexBuffers[e6].stride = t6.stride;
        const i4 = F(t6.stride), s3 = t6.data.length * i4 / t6.stride;
        m2 || (m2 = s3);
      }
      c2.vtxFreeList = new t$3(m2), c2.vtxFreeList.allocate(t5);
    }
    return u2;
  }
  delete(e6) {
    const t4 = s$2[e6.geometryType];
    this._freeVertices(t4, e6.vertexFrom, e6.vertexCount), this._freeIndices(t4, e6.indexFrom, e6.indexCount), this._displayList.removeFromList(e6), e6.vertexFrom = void 0, e6.indexFrom = void 0;
  }
  setMeshData(e6, t4, r3, o5, n3) {
    const d3 = s$2[e6.geometryType];
    let a2, x2;
    e6.meshData = null, void 0 === e6.vertexFrom ? (x2 = t4.vertexCount, a2 = this._allocateVertices(d3, x2)) : t4.vertexCount > e6.vertexCount ? (this._freeVertices(d3, e6.vertexFrom, e6.vertexCount), x2 = t4.vertexCount, a2 = this._allocateVertices(d3, x2)) : t4.vertexCount === e6.vertexCount ? (a2 = e6.vertexFrom, x2 = e6.vertexCount) : (this._freeVertices(d3, e6.vertexFrom + t4.vertexCount, e6.vertexCount - t4.vertexCount), a2 = e6.vertexFrom, x2 = t4.vertexCount);
    let u2, f3, c2, l2 = true;
    if (void 0 === e6.indexFrom ? (u2 = n3, c2 = t4.indexCount, f3 = this._allocateIndices(d3, c2)) : t4.indexCount > e6.indexCount ? (u2 = this._displayList.removeFromList(e6), this._freeIndices(d3, e6.indexFrom, e6.indexCount), c2 = t4.indexCount, f3 = this._allocateIndices(d3, c2)) : t4.indexCount === e6.indexCount ? (l2 = false, f3 = e6.indexFrom, c2 = e6.indexCount) : (u2 = this._displayList.removeFromList(e6), this._freeIndices(d3, e6.indexFrom + t4.indexCount, e6.indexCount - t4.indexCount), f3 = e6.indexFrom, c2 = t4.indexCount), -1 !== a2 && -1 !== f3) {
      const s3 = this._storageFor(d3);
      if (j(a2, f3, s3.vertexBuffers, s3.indexBuffer, t4, r3, o5), e6.vertexFrom = a2, e6.indexFrom = f3, e6.vertexCount = t4.vertexCount, e6.indexCount = t4.indexCount, this._dirtyMap) {
        this._dirtyMap.markDirtyIndices(e6.geometryType, e6.indexFrom, e6.indexCount);
        for (const t5 in r3)
          this._dirtyMap.markDirtyVertices(e6.geometryType, t5, e6.vertexFrom, e6.vertexCount);
      }
      return l2 && this._displayList.addToList(e6, u2), true;
    }
    return -1 !== a2 && this._freeVertices(d3, a2, x2), -1 !== f3 && this._freeIndices(d3, f3, c2), e6.setMeshDataFromBuffers(t4, r3, o5), e6.vertexFrom = void 0, e6.vertexCount = 0, e6.indexFrom = void 0, e6.indexCount = 0, false;
  }
  tryAddMeshData(e6, t4) {
    const r3 = t4.vertexBuffer, o5 = t4.indexBuffer, n3 = s$2[e6.geometryType], d3 = this._allocateVertices(n3, e6.vertexCount);
    if (-1 === d3)
      return this._freeVertices(n3, d3, e6.vertexCount), false;
    const a2 = this._allocateIndices(n3, e6.indexCount);
    if (-1 === a2)
      return this._freeVertices(n3, d3, e6.vertexCount), this._freeIndices(n3, a2, e6.indexCount), false;
    const x2 = this._storageFor(n3);
    if (j(d3, a2, x2.vertexBuffers, x2.indexBuffer, e6, r3, o5), e6.vertexFrom = d3, e6.indexFrom = a2, this._dirtyMap) {
      this._dirtyMap.markDirtyIndices(e6.geometryType, e6.indexFrom, e6.indexCount);
      for (const t5 in r3)
        this._dirtyMap.markDirtyVertices(e6.geometryType, t5, d3, e6.vertexCount);
    }
    return this._displayList.addToList(e6), true;
  }
  _allocateVertices(e6, t4) {
    const r3 = this._storageFor(e6), i2 = r3.vtxFreeList?.allocate(t4);
    if (null == i2 || -1 === i2)
      return -1;
    const s3 = r3.vtxFreeList?.fragmentation;
    return null == s3 || s3 > n$2 ? -1 : i2;
  }
  _freeVertices(e6, t4, r3) {
    const i2 = this._storageFor(e6);
    i2.vtxFreeList?.free(t4, r3);
  }
  _freeIndices(e6, t4, r3) {
    const i2 = this._storageFor(e6);
    i2.idxFreeList?.free(t4, r3);
  }
  _allocateIndices(e6, t4) {
    const r3 = this._storageFor(e6), i2 = r3.idxFreeList?.allocate(t4);
    if (null == i2 || -1 === i2)
      return -1;
    const s3 = r3.idxFreeList?.fragmentation;
    return null == s3 || s3 > n$2 ? -1 : i2;
  }
  _storageFor(e6) {
    return this._freeListsAndStorage[e6];
  }
  _stridesFor(e6, t4) {
    return this._strides[e6][t4];
  }
};
let o$3 = class o {
  constructor(a2) {
    this.geometryMap = H(() => ({ indexBuffer: h$2.createIndex(a2, F$1.STATIC_DRAW), vao: null }), (e6, s3) => ({ vertexBuffer: h$2.createVertex(a2, Y[s3]) }));
  }
  dispose() {
    for (let e6 = 0; e6 < 5; e6++) {
      const t4 = this.geometryMap[e6];
      if (t4) {
        t4.data.vao?.disposeVAOOnly(), t4.data.indexBuffer?.dispose();
        for (const e7 in t4.buffers)
          t4.buffers[e7]?.data.vertexBuffer.dispose();
      }
    }
  }
  get(e6) {
    const t4 = this.geometryMap[e6];
    return { getVAO(e7, r3, s3) {
      if (!t4.data.vao) {
        const o5 = {};
        for (const e8 in t4.buffers)
          o5[e8] = t4.buffers[e8].data.vertexBuffer;
        t4.data.vao = new f$4(e7, s3, r3, o5, t4.data.indexBuffer);
      }
      return t4.data.vao;
    } };
  }
  has(e6) {
    return null != this.geometryMap[e6];
  }
  upload(e6, t4) {
    t4.forEach((t5, r3) => {
      this._upload(t5, r3, e6);
    });
  }
  _upload(e6, t4, r3) {
    if (e6.indices && (e6.indices.allDirty ? this._uploadIndices(r3, t4) : null != e6.indices.from && null != e6.indices.count && this._uploadIndices(r3, t4, e6.indices.from, e6.indices.count)), e6.vertices) {
      const s3 = e6.vertices;
      for (const e7 in s3) {
        const a2 = s3[e7];
        a2.allDirty ? this._uploadVertices(r3, t4, e7) : null != a2.from && null != a2.count && this._uploadVertices(r3, t4, e7, a2.from, a2.count);
      }
    }
  }
  _uploadVertices(e6, t4, r3, s3, a2) {
    const o5 = this.geometryMap[t4];
    if (!o5)
      return;
    const f3 = e6.geometries[t4].vertexBuffer[r3];
    if (!f3)
      return;
    const { data: i2, stride: n3 } = f3;
    if (o5.buffers[r3] && i2.length > 0) {
      const e7 = n3 / i2.BYTES_PER_ELEMENT;
      null != s3 && null != a2 ? o5.buffers[r3].data.vertexBuffer.setSubData(i2, s3 * e7, s3 * e7, (s3 + a2) * e7) : o5.buffers[r3].data.vertexBuffer.setData(i2);
    }
  }
  _uploadIndices(e6, t4, r3, s3) {
    const a2 = this.geometryMap[t4];
    if (!a2)
      return;
    const o5 = e6.geometries[t4].indexBuffer;
    a2.data.indexBuffer && o5.length > 0 && (null != r3 && null != s3 ? a2.data.indexBuffer.setSubData(o5, r3, r3, r3 + s3) : a2.data.indexBuffer.setData(o5));
  }
};
class a extends m$1 {
  constructor() {
    super(...arguments), this._data = null, this._displayList = null, this._lastCommitTime = 0, this._hasData = false, this._invalidated = false, this._wglBuffers = null, this._dirtyMap = new e$5();
  }
  destroy() {
    super.destroy(), this.clear();
  }
  get hasData() {
    return !!this._hasData;
  }
  get displayObjects() {
    return this._displayObjects ?? [];
  }
  getGeometry(t4) {
    return this._wglBuffers && this._wglBuffers.has(t4) ? this._wglBuffers.get(t4) : null;
  }
  getDisplayList() {
    return this._displayList;
  }
  patch(e6) {
    if (true === e6.clear)
      return this.clear(), void (this._hasData = false);
    const i2 = e6.addOrUpdate, a2 = e6.remove;
    !this._data && i2?.tileDisplayData?.displayObjects.length ? (i2.tileDisplayData.computeDisplayList(), this._dirtyMap = new e$5(), this._dispRecStore = d$2.fromTileData(i2, this._dirtyMap), this._data = i2, this._dirtyMap.markAllDirty(), this._hasData = true, e6.end && this.ready()) : this._data && (i2?.tileDisplayData?.displayObjects.length || a2.length) ? this._doPatchData(e6) : e6.end && this.ready(), e6.end && !this._data && this.clear(), this.requestRender(), this.emit("change");
  }
  commit(t4) {
    t4.time && t4.time === this._lastCommitTime || (this._lastCommitTime = t4.time, this.visible && this._data && (this._wglBuffers || (this._wglBuffers = new o$3(t4.context)), (this._dirtyMap.hasDirty() || this._invalidated) && (this._invalidated = false, this._wglBuffers.upload(this._data.tileBufferData, this._dirtyMap), this._displayList = this._data.tileDisplayData.displayList.clone(), this._displayObjects = this._data.tileDisplayData.displayObjects.slice(), this._dirtyMap.markAllClean())));
  }
  clear() {
    this._data = null, this._displayList = null, this._dispRecStore = null, this._wglBuffers && (this._wglBuffers.dispose(), this._wglBuffers = null);
  }
  _doPatchData(t4) {
    this._invalidated = true, this._patchData(t4) || (this._dirtyMap.markAllDirty(), this._data.reshuffle(), this._dispRecStore = d$2.fromTileData(this._data, this._dirtyMap)), this.requestRender();
  }
  _patchData(t4) {
    let s3 = true;
    const e6 = t4.addOrUpdate?.tileDisplayData?.displayObjects || [], i2 = (t4.remove || []).slice();
    for (const r3 of e6)
      null != r3.insertAfter && i2.push(r3.id);
    let a2;
    i2.length > 0 && (a2 = new Set(i2));
    const l2 = this._data.tileDisplayData;
    for (const r3 of i2) {
      const t5 = l2.displayObjectRegistry.get(r3);
      if (t5) {
        l2.displayList.removeFromList(t5.displayRecords);
        for (const s4 of t5.displayRecords)
          this._dispRecStore.delete(s4);
        l2.displayObjectRegistry.delete(r3);
      }
    }
    a2?.size && (l2.displayObjects = l2.displayObjects.filter((t5) => !a2.has(t5.id)));
    for (const r3 of e6) {
      let e7, i3 = l2.displayObjectRegistry.get(r3.id);
      if (i3) {
        const t5 = i3.displayRecords;
        i3.set(r3), i3.displayRecords = t5;
        const s4 = i3.displayRecords.length;
        for (let e8 = 0; e8 < s4; ++e8) {
          const t6 = i3.displayRecords[e8], s5 = r3.displayRecords[e8];
          (e8 >= r3.displayRecords.length || t6.geometryType !== s5.geometryType || t6.symbolLevel !== s5.symbolLevel || t6.zOrder !== s5.zOrder || t6.materialKey !== s5.materialKey) && (this._dispRecStore.delete(i3.displayRecords[e8]), e8 < r3.displayRecords.length && (i3.displayRecords[e8] = void 0));
        }
        i3.displayRecords.length = r3.displayRecords.length;
      } else {
        let t5;
        i3 = r3.copy(), i3.displayRecords = [], l2.displayObjectRegistry.set(r3.id, i3);
        const s4 = l2.displayObjects;
        if (null != i3.insertAfter)
          if (e7 = {}, i3.insertAfter >= 0) {
            const e8 = l2.displayObjectRegistry.get(i3.insertAfter);
            e8 ? (t5 = s4.indexOf(e8) + 1, t5 < s4.length ? s4.splice(t5, 0, i3) : (s4.push(i3), t5 = s4.length)) : (s4.push(i3), t5 = s4.length);
          } else
            s4.unshift(i3), t5 = 0;
        else
          s4.push(i3), t5 = s4.length;
        if (e7) {
          const i4 = r3.displayRecords.length > 0 ? 1 : 0;
          let a4 = 0;
          for (let r4 = t5 - 1; r4 >= 0 && a4 < i4; --r4)
            for (let t6 = s4[r4].displayRecords.length - 1; t6 >= 0 && a4 < i4; --t6) {
              const i5 = s4[r4].displayRecords[t6], d3 = l2.displayList.getDPInfoType();
              e7[d3] || (e7[d3] = i5, ++a4);
            }
        }
      }
      const a3 = r3.displayRecords.length;
      for (let d3 = 0; d3 < a3; ++d3) {
        const a4 = r3.displayRecords[d3];
        let o5 = i3.displayRecords[d3];
        o5 ? (o5.meshData = a4.meshData, o5.materialKey = a4.materialKey) : (o5 = a4.copy(), o5.vertexFrom = void 0, o5.indexFrom = void 0, i3.displayRecords[d3] = o5);
        const h2 = a4.geometryType, p2 = l2.displayList.getDPInfoType(), y2 = t4.addOrUpdate.tileBufferData.geometries[h2], c2 = y2.vertexBuffer, n3 = y2.indexBuffer;
        let f3;
        e7 && (f3 = e7[p2] ? l2.displayList.splitAfter(e7[p2]) : -1), s3 = this._dispRecStore.setMeshData(o5, a4, c2, n3, f3) && s3, e7 && null != o5.indexFrom && null != o5.indexFrom && (e7[p2] = o5);
      }
    }
    return s3;
  }
}
let e$3 = class e3 {
  constructor() {
    this._byGeometryType = null;
  }
  get satisfied() {
    return !this._byGeometryType;
  }
  reset() {
    this._byGeometryType = null;
  }
  verticesFor(e6) {
    return this._byGeometryType ? this._byGeometryType[e6].vertices : 0;
  }
  indicesFor(e6) {
    return this._byGeometryType ? this._byGeometryType[e6].indices : 0;
  }
  needMore(e6, t4, i2) {
    if (!t4 && !i2)
      return;
    this._byGeometryType || (this._byGeometryType = [{ vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }, { vertices: 0, indices: 0 }]);
    const s3 = this._byGeometryType[e6];
    s3.vertices += t4, s3.indices += i2;
  }
};
const r$2 = 5;
let f$3 = class f {
  constructor() {
    this.geometries = [{ indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }, { indexBuffer: void 0, vertexBuffer: {} }];
  }
  clone() {
    const e6 = new f();
    for (let r3 = 0; r3 < this.geometries.length; r3++) {
      const f3 = this.geometries[r3], t4 = e6.geometries[r3];
      t4.indexBuffer = f3.indexBuffer.slice(), t4.vertexBuffer = {};
      for (const e7 in f3.vertexBuffer) {
        const { data: r4, stride: i2 } = f3.vertexBuffer[e7];
        t4.vertexBuffer[e7] = { data: r4.slice(), stride: i2 };
      }
    }
    return e6;
  }
  static deserialize(t4) {
    const i2 = new f();
    for (let f3 = 0; f3 < r$2; ++f3) {
      i2.geometries[f3].indexBuffer = new Uint32Array(t4.geometries[f3].indexBuffer), i2.geometries[f3].vertexBuffer = {};
      for (const r3 in t4.geometries[f3].vertexBuffer)
        i2.geometries[f3].vertexBuffer[r3] = { data: x$2(t4.geometries[f3].vertexBuffer[r3].data, t4.geometries[f3].vertexBuffer[r3].stride), stride: t4.geometries[f3].vertexBuffer[r3].stride };
    }
    return i2;
  }
  serialize() {
    const e6 = { geometries: [{ indexBuffer: this.geometries[0].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[1].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[2].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[3].indexBuffer.buffer, vertexBuffer: {} }, { indexBuffer: this.geometries[4].indexBuffer.buffer, vertexBuffer: {} }] };
    for (let f3 = 0; f3 < r$2; ++f3)
      for (const r3 in this.geometries[f3].vertexBuffer)
        e6.geometries[f3].vertexBuffer[r3] = { data: this.geometries[f3].vertexBuffer[r3].data.buffer, stride: this.geometries[f3].vertexBuffer[r3].stride };
    return e6;
  }
  getBuffers() {
    const e6 = [];
    for (let f3 = 0; f3 < r$2; ++f3) {
      e6.push(this.geometries[f3].indexBuffer.buffer);
      for (const r3 in this.geometries[f3].vertexBuffer)
        e6.push(this.geometries[f3].vertexBuffer[r3].data.buffer);
    }
    return e6;
  }
};
function t$2(e6, t4, n3, ...o5) {
  t4 < e6.length ? e6.splice(t4, n3, ...o5) : e6.push(...o5);
}
let n$1 = class n {
  constructor() {
    this.symbolLevels = [];
  }
  replay(t4, n3, o5) {
    for (const i2 of this.symbolLevels)
      for (const r3 of i2.zLevels) {
        const i3 = r3.geometryDPInfo.unified;
        if (i3)
          for (const r4 of i3) {
            const { geometryType: i4, materialKey: l2, indexFrom: s3, indexCount: m2 } = r4, y2 = U.load(l2).symbologyType, d3 = t4.painter.getBrush(i4, y2), u2 = { geometryType: i4, materialKey: l2, indexFrom: s3, indexCount: m2, target: n3.getGeometry(i4) };
            d3.prepareState(t4), d3.drawGeometry(t4, n3, u2, o5);
          }
      }
  }
  get empty() {
    return !this.symbolLevels || 0 === this.symbolLevels.length;
  }
  clear() {
    this.symbolLevels.length = 0;
  }
  addToList(e6, t4) {
    if (Array.isArray(e6))
      for (const n3 of e6)
        this._addToList(n3, t4);
    else
      this._addToList(e6, t4);
  }
  removeFromList(e6) {
    Array.isArray(e6) || (e6 = [e6]);
    let t4 = null;
    for (const n3 of e6)
      t4 = this._removeFromList(n3);
    return t4;
  }
  clone() {
    const e6 = new n();
    for (const t4 of this.symbolLevels)
      e6.symbolLevels.push(t4.clone());
    return e6;
  }
  splitAfter(e6) {
    const t4 = this._getDisplayList(e6.symbolLevel, e6.zOrder), n3 = t4.length, i2 = e6.indexFrom + e6.indexCount;
    for (let r3 = 0; r3 < n3; ++r3) {
      const n4 = t4[r3];
      if (n4.geometryType === e6.geometryType && i2 > n4.indexFrom && i2 <= n4.indexFrom + n4.indexCount) {
        if (i2 < n4.indexFrom + n4.indexCount) {
          const e7 = new o$2();
          e7.geometryType = n4.geometryType, e7.materialKey = n4.materialKey, e7.indexFrom = i2, e7.indexCount = n4.indexFrom + n4.indexCount - i2, t4.splice(r3 + 1, 0, e7), n4.indexCount = i2 - n4.indexFrom;
        }
        return r3;
      }
    }
  }
  _addToList(e6, n3) {
    const i2 = e6.symbolLevel, r3 = e6.zOrder, l2 = this._getDisplayList(i2, r3), s3 = null != n3 ? n3 : l2.length - 1, m2 = s3 >= 0 && s3 < l2.length ? l2[s3] : null;
    if (null !== m2 && m2.materialKey === e6.materialKey && m2.indexFrom + m2.indexCount === e6.indexFrom && m2.geometryType === e6.geometryType)
      m2.indexCount += e6.indexCount;
    else {
      const n4 = new o$2();
      n4.indexFrom = e6.indexFrom, n4.indexCount = e6.indexCount, n4.materialKey = e6.materialKey, n4.geometryType = e6.geometryType, t$2(l2, s3 + 1, 0, n4);
    }
  }
  _removeFromList(e6) {
    const n3 = e6.symbolLevel, i2 = e6.zOrder, r3 = this._getDisplayList(n3, i2), l2 = r3.length;
    let s3;
    for (let t4 = 0; t4 < l2; ++t4) {
      const n4 = r3[t4];
      if (e6.indexFrom + e6.indexCount > n4.indexFrom && e6.indexFrom < n4.indexFrom + n4.indexCount && n4.geometryType === e6.geometryType) {
        s3 = t4;
        break;
      }
    }
    if (void 0 !== s3) {
      const n4 = r3[s3];
      if (e6.indexFrom === n4.indexFrom)
        return n4.indexCount -= e6.indexCount, n4.indexFrom += e6.indexCount, 0 === n4.indexCount && t$2(r3, s3, 1), s3 - 1;
      if (e6.indexFrom + e6.indexCount === n4.indexFrom + n4.indexCount)
        return n4.indexCount -= e6.indexCount, 0 === n4.indexCount ? (t$2(r3, s3, 1), s3 - 1) : s3;
      {
        const i3 = n4.indexFrom, l3 = e6.indexFrom - n4.indexFrom, m2 = e6.indexCount, y2 = n4.indexFrom + n4.indexCount - (e6.indexFrom + e6.indexCount);
        n4.indexCount = l3;
        const d3 = new o$2();
        return d3.geometryType = n4.geometryType, d3.materialKey = n4.materialKey, d3.indexFrom = i3 + l3 + m2, d3.indexCount = y2, t$2(r3, s3 + 1, 0, d3), s3;
      }
    }
    return null;
  }
  _getDisplayList(e6, t4) {
    let n3;
    const o5 = this.symbolLevels.length;
    for (let i2 = 0; i2 < o5; i2++)
      if (this.symbolLevels[i2].symbolLevel === e6) {
        n3 = this.symbolLevels[i2];
        break;
      }
    let s3;
    n3 || (n3 = new l(), n3.symbolLevel = e6, this.symbolLevels.push(n3));
    const m2 = n3.zLevels.length;
    for (let i2 = 0; i2 < m2; i2++)
      if (n3.zLevels[i2].zLevel === t4) {
        s3 = n3.zLevels[i2];
        break;
      }
    return s3 || (s3 = new r$1(), s3.geometryDPInfo = new i(), s3.zLevel = t4, n3.zLevels.push(s3)), s3.geometryDPInfo.unified || (s3.geometryDPInfo.unified = []), s3.geometryDPInfo.unified;
  }
  getDPInfoType() {
    return "unified";
  }
};
let o$2 = class o2 {
  constructor() {
    this.materialKey = null, this.indexFrom = 0, this.indexCount = 0;
  }
  clone() {
    const e6 = new o2();
    return e6.geometryType = this.geometryType, e6.materialKey = this.materialKey, e6.indexFrom = this.indexFrom, e6.indexCount = this.indexCount, e6;
  }
};
class i {
  constructor() {
    this.fill = null, this.line = null, this.marker = null, this.text = null, this.label = null, this.unified = null;
  }
  clone() {
    const e6 = new i();
    return e6.fill = this.fill && this.fill.map((e7) => e7.clone()), e6.line = this.line && this.line.map((e7) => e7.clone()), e6.marker = this.marker && this.marker.map((e7) => e7.clone()), e6.text = this.text && this.text.map((e7) => e7.clone()), e6.label = this.label && this.label.map((e7) => e7.clone()), e6.unified = this.unified && this.unified.map((e7) => e7.clone()), e6;
  }
}
let r$1 = class r {
  constructor() {
    this.geometryDPInfo = new i();
  }
  clone() {
    const e6 = new r();
    return e6.zLevel = this.zLevel, e6.geometryDPInfo = this.geometryDPInfo.clone(), e6;
  }
};
class l {
  constructor() {
    this.zLevels = [];
  }
  clone() {
    const e6 = new l();
    e6.symbolLevel = this.symbolLevel;
    for (const t4 of this.zLevels)
      e6.zLevels.push(t4.clone());
    return e6;
  }
}
let t$1 = class t2 {
  constructor() {
    this.vertexData = /* @__PURE__ */ new Map(), this.vertexCount = 0, this.indexData = [];
  }
  clear() {
    this.vertexData.clear(), this.vertexCount = 0, this.indexData = [];
  }
  update(t4, e6, a2) {
    for (const s3 in t4)
      this.vertexData.set(s3, t4[s3]);
    for (const s3 in this.vertexData)
      null === t4[s3] && this.vertexData.delete(s3);
    this.vertexCount = e6, this.indexData = a2;
  }
};
let s$1 = class s {
  constructor(t4, e6, s3, i2 = 0, r3 = 0) {
    this.id = t4, this.geometryType = e6, this.materialKey = s3, this.minZoom = i2, this.maxZoom = r3, this.meshData = null, this.symbolLevel = 0, this.zOrder = 0, this.vertexFrom = 0, this.vertexCount = 0, this.indexFrom = 0, this.indexCount = 0, this._sortKey = null;
  }
  get sortKey() {
    return null == this._sortKey && this._computeSortKey(), this._sortKey;
  }
  clone() {
    return this.copy();
  }
  copy() {
    const t4 = new s(this.id, this.geometryType, this.materialKey);
    return t4.vertexFrom = this.vertexFrom, t4.vertexCount = this.vertexCount, t4.indexFrom = this.indexFrom, t4.indexCount = this.indexCount, t4.zOrder = this.zOrder, t4.symbolLevel = this.symbolLevel, t4.meshData = this.meshData, t4.minZoom = this.minZoom, t4.maxZoom = this.maxZoom, t4;
  }
  setMeshDataFromBuffers(s3, i2, r3) {
    const o5 = new t$1();
    for (const t4 in i2) {
      const r4 = i2[t4].stride, a2 = i2[t4].data;
      if (!a2)
        continue;
      const h2 = [], n3 = F(r4);
      for (let t5 = 0; t5 < r4 * s3.vertexCount / n3; ++t5)
        h2[t5] = a2[t5 + r4 * s3.vertexFrom / n3];
      o5.vertexData.set(t4, h2);
    }
    o5.indexData.length = 0;
    for (let t4 = 0; t4 < s3.indexCount; ++t4)
      o5.indexData[t4] = r3[t4 + s3.indexFrom] - s3.vertexFrom;
    o5.vertexCount = s3.vertexCount, this.meshData = o5;
  }
  readMeshDataFromBuffers(s3, i2) {
    this.meshData ? this.meshData.clear() : this.meshData = new t$1();
    for (const t4 in s3) {
      const i3 = s3[t4].stride, r3 = s3[t4].data, o5 = [], a2 = F(i3);
      for (let t5 = 0; t5 < i3 * this.vertexCount / a2; ++t5)
        o5[t5] = r3[t5 + i3 * this.vertexFrom / a2];
      this.meshData.vertexData.set(t4, o5);
    }
    this.meshData.indexData.length = 0;
    for (let t4 = 0; t4 < this.indexCount; ++t4)
      this.meshData.indexData[t4] = i2[t4 + this.indexFrom] - this.vertexFrom;
    this.meshData.vertexCount = this.vertexCount;
  }
  writeMeshDataToBuffers(t4, s3, i2, r3) {
    if (this.meshData) {
      for (const i3 in s3) {
        const r4 = s3[i3].stride, o5 = this.meshData.vertexData.get(i3), a2 = s3[i3].data, h2 = F(r4);
        for (let e6 = 0; e6 < r4 * this.meshData.vertexCount / h2; ++e6)
          a2[e6 + r4 * t4 / h2] = o5[e6];
      }
      for (let e6 = 0; e6 < this.meshData.indexData.length; ++e6)
        r3[e6 + i2] = this.meshData.indexData[e6] + t4;
      this.vertexFrom = t4, this.vertexCount = this.meshData.vertexCount, this.indexFrom = i2, this.indexCount = this.meshData.indexData.length;
    }
  }
  static writeAllMeshDataToBuffers(t4, e6, s3) {
    let i2 = 0, r3 = 0;
    for (const o5 of t4)
      o5.writeMeshDataToBuffers(i2, e6, r3, s3), i2 += o5.vertexCount, r3 += o5.indexCount;
  }
  _computeSortKey() {
    this._sortKey = (31 & this.symbolLevel) << 12 | (127 & this.zOrder) << 4 | 7 & this.geometryType;
  }
  serialize(t4) {
    return t4.push(this.geometryType), t4.push(this.materialKey), t4.push(this.vertexFrom), t4.push(this.vertexCount), t4.push(this.indexFrom), t4.push(this.indexCount), t4.push(this.minZoom), t4.push(this.maxZoom), t4;
  }
  static deserialize(t4, e6) {
    const i2 = t4.readInt32(), r3 = t4.readInt32(), o5 = new s(e6.id, i2, r3);
    return o5.vertexFrom = t4.readInt32(), o5.vertexCount = t4.readInt32(), o5.indexFrom = t4.readInt32(), o5.indexCount = t4.readInt32(), o5.minZoom = t4.readInt32(), o5.maxZoom = t4.readInt32(), o5;
  }
};
function e$2(e6, n3) {
  if (null !== n3) {
    e6.push(n3.length);
    for (const r3 of n3)
      r3.serialize(e6);
    return e6;
  }
  e6.push(0);
}
function n2(e6, n3, r3) {
  const t4 = e6.readInt32(), o5 = new Array(t4);
  for (let i2 = 0; i2 < o5.length; i2++)
    o5[i2] = n3.deserialize(e6, r3);
  return o5;
}
let e$1 = class e4 {
  constructor(s3) {
    this.insertAfter = null, this.id = s3, this.displayRecords = [];
  }
  copy() {
    const s3 = new e4(this.id);
    return s3.set(this), s3;
  }
  clone() {
    const s3 = new e4(this.id);
    return s3.displayRecords = this.displayRecords.map((s4) => s4.clone()), s3.insertAfter = this.insertAfter, s3;
  }
  set(s3) {
    this.id = s3.id, this.displayRecords = s3.displayRecords, this.insertAfter = s3.insertAfter;
  }
  serialize(s3) {
    return s3.push(this.id), e$2(s3, this.displayRecords), s3;
  }
  static deserialize(i2) {
    const r3 = i2.readInt32(), d3 = new e4(r3), o5 = { id: r3 };
    return d3.displayRecords = n2(i2, s$1, o5) ?? [], d3;
  }
};
class e5 {
  constructor() {
    this.displayObjects = [], this._displayList = null;
  }
  get displayObjectRegistry() {
    if (!this._displayObjectRegistry) {
      this._displayObjectRegistry = /* @__PURE__ */ new Map();
      for (const s3 of this.displayObjects)
        this._displayObjectRegistry.set(s3.id, s3);
    }
    return this._displayObjectRegistry;
  }
  get displayList() {
    return this._displayList;
  }
  computeDisplayList() {
    this._displayList = new n$1();
    for (const s3 of this.displayObjects)
      for (const t4 of s3.displayRecords)
        this._displayList.addToList(t4);
  }
  clone() {
    const s3 = new e5();
    return this.displayObjects && (s3.displayObjects = this.displayObjects.map((s4) => s4.clone())), s3;
  }
  serialize(s3) {
    return e$2(s3, this.displayObjects), s3;
  }
  _deserializeObjects(s3) {
    const i2 = s3.readInt32(), e6 = new Array(i2), a2 = /* @__PURE__ */ new Map();
    for (let l2 = 0; l2 < e6.length; ++l2) {
      const i3 = e$1.deserialize(s3);
      e6[l2] = i3, a2.set(i3.id, i3);
    }
    this.displayObjects = e6, this._displayList = null, this._displayObjectRegistry = a2;
  }
  static deserialize(s3) {
    const t4 = new e5();
    return t4._deserializeObjects(s3), t4;
  }
}
class t3 {
  constructor(e6, t4) {
    this.data = e6, this.stride = t4;
  }
  static decode(r3) {
    const s3 = x$2(r3.data, r3.stride), n3 = r3.stride;
    return new t3(s3, n3);
  }
  static fromVertexVector(r3) {
    const s3 = x$2(r3.data.buffer(), r3.stride), n3 = r3.stride;
    return new t3(s3, n3);
  }
}
class r2 {
  constructor(e6, t4, r3) {
    this.geometryType = e6, this.indexBuffer = new Uint32Array(t4), this.namedBuffers = r3;
  }
  static decode(e6) {
    const s3 = e6.geometryType, n3 = e6.indexBuffer, o5 = {};
    for (const r3 in e6.namedBuffers)
      o5[r3] = t3.decode(e6.namedBuffers[r3]);
    return new r2(s3, n3, o5);
  }
  static fromVertexData(s3, n3) {
    const o5 = s3.indices, c2 = x$2(s3.vertices, s3.stride), i2 = s3.stride, d3 = { geometry: new t3(c2, i2) };
    return new r2(n3, o5, d3);
  }
  static fromVertexVectors(e6) {
    const s3 = e6.geometryType, n3 = e6.indexVector.buffer(), o5 = {};
    let c2;
    for (c2 in e6.namedVectors)
      o5[c2] = t3.fromVertexVector(e6.namedVectors[c2]);
    return new r2(s3, n3, o5);
  }
}
class s2 {
  get vertexCount() {
    const t4 = this.stride / 4, e6 = this.data.length / t4;
    return e6 !== (0 | e6) && console.debug("Corrupted stride"), e6;
  }
  constructor(t4, e6) {
    this.data = t4, this.stride = e6;
  }
  transfer(t4, e6) {
    const r3 = this.data.buffer();
    t4.vertexCount = this.vertexCount, t4.data = r3, t4.stride = this.stride, e6.push(r3);
  }
}
let o$1 = class o3 {
  constructor(e6, o5, n3) {
    this.geometryType = e6, this.indexVector = new e$6(Uint32Array, 6 * o5), this.namedVectors = {};
    const i2 = R(e6, n3);
    for (const t4 in i2) {
      const e7 = i2[t4];
      let n4;
      switch (e7 % 4) {
        case 0:
        case 2:
          n4 = new e$6(Uint32Array, e7 * o5);
          break;
        case 1:
        case 3:
          n4 = new e$6(Uint8Array, e7 * o5);
      }
      this.namedVectors[t4] = new s2(n4, e7);
    }
  }
  get(t4) {
    return this.namedVectors[t4].data;
  }
  getVector(t4) {
    return this.namedVectors[t4];
  }
  transfer(t4, e6) {
    const r3 = this.indexVector.buffer(), s3 = {};
    let o5;
    for (o5 in e6.push(r3), this.namedVectors) {
      const t5 = this.namedVectors[o5];
      s3[o5] = {}, t5.transfer(s3[o5], e6);
    }
    t4.geometryType = this.geometryType, t4.indexBuffer = r3, t4.namedBuffers = s3, this.destroy();
  }
  intoBuffers() {
    const t4 = r2.fromVertexVectors(this);
    return this.destroy(), t4;
  }
  destroy() {
    this.indexVector = null, this.namedVectors = null;
  }
};
const d$1 = new e$3(), p$3 = new e$3(), D = 5;
function h$1(e6, t4) {
  const r3 = {};
  for (const s3 in e6) {
    const i2 = { data: P(t4, e6[s3]), stride: e6[s3] };
    r3[s3] = i2;
  }
  return r3;
}
function x$1(e6) {
  return [e6.fill || {}, e6.line || {}, e6.icon || {}, e6.text || {}, e6.label || {}];
}
function y$2(e6) {
  const t4 = [[], [], [], [], []], r3 = e6;
  for (const s3 of r3)
    for (const e7 of s3.displayRecords)
      t4[e7.geometryType].push(e7);
  return t4;
}
class B {
  constructor() {
    this.tileDisplayData = null, this.tileBufferData = null;
  }
  reshuffle() {
    if (d$1.reset(), !this.tileDisplayData)
      return;
    const t4 = y$2(this.tileDisplayData.displayObjects);
    for (const e6 of t4)
      for (const t5 of e6)
        t5 && d$1.needMore(t5.geometryType, t5.meshData ? t5.meshData.vertexCount : t5.vertexCount, t5.meshData ? t5.meshData.indexData.length : t5.indexCount);
    const r3 = t4.length, i2 = new f$3();
    for (let s3 = 0; s3 < r3; ++s3) {
      i2.geometries[s3].indexBuffer = new Uint32Array(Math.round(t$5 * d$1.indicesFor(s3)));
      const t5 = [], r4 = this.tileBufferData?.geometries[s3].vertexBuffer;
      if (!r4)
        continue;
      for (const e6 in r4)
        t5.push(r4[e6].stride);
      const a2 = B._computeVertexAlignment(t5), n4 = Math.round(t$5 * d$1.verticesFor(s3)), f4 = B._align(n4, a2);
      for (const e6 in r4) {
        const t6 = r4[e6].stride;
        i2.geometries[s3].vertexBuffer[e6] = { stride: t6, data: P(f4, t6) };
      }
    }
    p$3.reset(), this.tileDisplayData.displayList?.clear();
    for (let e6 = 0; e6 < r3; ++e6) {
      const r4 = t4[e6];
      for (const t5 of r4) {
        if (t5.meshData)
          t5.writeMeshDataToBuffers(p$3.verticesFor(e6), i2.geometries[e6].vertexBuffer, p$3.indicesFor(e6), i2.geometries[e6].indexBuffer), t5.meshData = null;
        else {
          const r5 = this.tileBufferData?.geometries[e6];
          if (r5) {
            const s3 = r5.vertexBuffer, o5 = r5.indexBuffer, n4 = i2.geometries[e6].vertexBuffer, f4 = i2.geometries[e6].indexBuffer, l2 = p$3.verticesFor(e6), u2 = p$3.indicesFor(e6);
            j(l2, u2, n4, f4, t5, s3, o5), t5.vertexFrom = l2, t5.indexFrom = u2;
          }
        }
        p$3.needMore(e6, t5.vertexCount, t5.indexCount);
      }
    }
    const { displayList: n3, displayObjects: f3 } = this.tileDisplayData;
    if (n3)
      for (const e6 of f3)
        n3.addToList(e6.displayRecords);
    this.tileBufferData = i2;
  }
  getStrides() {
    const e6 = [], t4 = this.tileBufferData?.geometries;
    if (!t4)
      return e6;
    for (let r3 = 0; r3 < t4.length; ++r3) {
      const s3 = t4[r3];
      e6[r3] = {};
      for (const t5 in s3.vertexBuffer)
        e6[r3][t5] = s3.vertexBuffer[t5].stride;
    }
    return e6;
  }
  clone() {
    const e6 = new B();
    return e6.tileBufferData = this.tileBufferData?.clone() ?? null, e6.tileDisplayData = this.tileDisplayData?.clone() ?? null, e6;
  }
  _guessSize() {
    const e6 = this.tileDisplayData?.displayObjects ?? [], t4 = Math.min(e6.length, 4), r3 = 12, s3 = 40;
    let i2 = 0;
    for (let o5 = 0; o5 < t4; o5++)
      i2 = Math.max(i2, e6[o5].displayRecords.length);
    return 2 * (e6.length * r3 + e6.length * i2 * s3);
  }
  serialize() {
    const e6 = this.tileBufferData.serialize(), t4 = this.tileBufferData.getBuffers(), r3 = this.tileDisplayData.serialize(new e$6(Int32Array, this._guessSize())).buffer();
    return t4.push(r3), { result: { displayData: r3, bufferData: e6 }, transferList: t4 };
  }
  static fromVertexData(e6, r$12) {
    const s3 = {}, i2 = /* @__PURE__ */ new Map();
    for (const t4 of r$12)
      i2.set(t4.id, t4);
    return te$1((r$13) => {
      const o5 = e6.data[r$13];
      if (null != o5) {
        const e7 = r$3.from(o5.records).getCursor();
        for (; e7.next(); ) {
          const t4 = e7.id, s4 = e7.materialKey, o6 = e7.indexFrom, a2 = e7.indexCount, n3 = e7.vertexFrom, l2 = e7.vertexCount, u2 = i2.get(t4), c2 = new s$1(t4, r$13, s4);
          c2.indexFrom = o6, c2.indexCount = a2, c2.vertexFrom = n3, c2.vertexCount = l2, u2.displayRecords.push(c2);
        }
        s3[r$13] = r2.fromVertexData(o5, r$13);
      } else
        s3[r$13] = new o$1(r$13, 0, S$1.DEFAULT).intoBuffers();
    }), B.fromMeshData({ displayObjects: r$12, vertexBuffersMap: s3 });
  }
  static fromMeshData(e$12) {
    const t4 = new B(), r3 = new e5(), o5 = new f$3();
    r3.displayObjects = e$12.displayObjects;
    for (const s3 in e$12.vertexBuffersMap) {
      const t5 = s3, r4 = e$12.vertexBuffersMap[t5];
      o5.geometries[t5].indexBuffer = r4.indexBuffer, o5.geometries[t5].vertexBuffer = r4.namedBuffers;
    }
    return t4.tileDisplayData = r3, t4.tileBufferData = o5, t4;
  }
  static bind(e6, t4) {
    const r3 = new B();
    return r3.tileDisplayData = e6, r3.tileBufferData = t4, r3;
  }
  static create(e$12, t4) {
    const r3 = new B();
    r3.tileDisplayData = new e5(), r3.tileDisplayData.displayObjects = e$12;
    const o5 = [0, 0, 0, 0, 0], a2 = [0, 0, 0, 0, 0], n3 = [[], [], [], [], []];
    for (const s3 of e$12)
      for (const e6 of s3.displayRecords)
        n3[e6.geometryType].push(e6), o5[e6.geometryType] += e6.meshData.vertexCount, a2[e6.geometryType] += e6.meshData.indexData.length;
    const l2 = new f$3(), u2 = x$1(t4);
    for (let s3 = 0; s3 < D; s3++) {
      const e6 = new Uint32Array(a2[s3]), t5 = h$1(u2[s3], o5[s3]);
      s$1.writeAllMeshDataToBuffers(n3[s3], t5, e6), l2.geometries[s3] = { indexBuffer: e6, vertexBuffer: t5 };
    }
    return r3.tileBufferData = l2, r3;
  }
  static _align(e6, t4) {
    const r3 = e6 % t4;
    return 0 === r3 ? e6 : e6 + (t4 - r3);
  }
  static _computeVertexAlignment(e6) {
    let t4 = false, r3 = false;
    for (const s3 of e6)
      s3 % 4 == 2 ? t4 = true : s3 % 4 != 0 && (r3 = true);
    return r3 ? 4 : t4 ? 2 : 1;
  }
}
const c = 512, f$2 = 50;
function g$2(e6, t4) {
  const n3 = G(t4);
  if (!n3)
    return null;
  const [o5, s3] = n3.valid;
  return e6[2] > s3 ? [u$1([e6[0], e6[1], s3, e6[3]]), u$1([o5, e6[1], o5 + e6[2] - s3, e6[3]])] : e6[0] < o5 ? [u$1([o5, e6[1], e6[2], e6[3]]), u$1([s3 - (o5 - e6[0]), e6[1], s3, e6[3]])] : null;
}
function u(e6) {
  return "text" === e6 || "esriTS" === e6;
}
function p$2(e6) {
  return "simple-marker" === e6 || "picture-marker" === e6 || "esriSMS" === e6 || "esriPMS" === e6;
}
function h(e6) {
  switch (e6.geometry.type) {
    case "point":
    case "multipoint":
      return 0;
    case "polyline":
      return 1;
    case "polygon":
    case "extent":
      return 2;
  }
  return 0;
}
function x(e6) {
  if (!e6)
    return null;
  const { xmin: t4, ymin: i2, xmax: r3, ymax: o5, spatialReference: s3 } = e6;
  return new j$1({ rings: [[[t4, i2], [t4, o5], [r3, o5], [r3, i2], [t4, i2]]], spatialReference: s3 });
}
class o4 extends h$3 {
  static from(s3, n3, i2) {
    const c2 = S$2.createInstance(), u2 = [], a2 = s3.filter((r3) => !!r3.geometry);
    for (const e6 of a2) {
      const s4 = v(e6.geometry);
      ot(u2, [e6], s4, false, false, n3);
    }
    return new o4(c2, u2, i2);
  }
  constructor(r3, t4, e6) {
    super(r3, t4, null), this._transform = e6;
  }
  get geometryType() {
    const r3 = this._current;
    return r3 ? r3.geometryType : null;
  }
  get insertAfter() {
    return this._current.insertAfter;
  }
  readGraphic() {
    return this._current;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const r3 = new o4(this.instance, this._features, this._transform);
    return this.copyInto(r3), r3;
  }
}
const p$1 = new t$6(), y$1 = new t$6(), g$1 = "esriGeometryPolyline";
function f$1(t4) {
  t4.coords.length = 0, t4.lengths.length = 0;
}
class d2 {
  constructor() {
    this.bounds = u$1(), this.graphic = null;
  }
  static acquire(t4 = null, e6, s3, r3, i2) {
    let o5;
    return 0 === d2._pool.length ? o5 = new d2() : (o5 = d2._pool.pop(), this._set.delete(o5)), o5.acquire(t4, e6, s3, r3, i2), o5;
  }
  static release(t4) {
    t4 && !this._set.has(t4) && (t4.release(), this._pool.push(t4), this._set.add(t4));
  }
  static getCentroidQuantized(t4, e6) {
    if (f$5(t4.geometry)) {
      const r3 = t4.symbol;
      if (null == r3)
        return null;
      if (r3?.layers.length > 0 && r3.layers.some((t5) => "text" === t5.type || "marker" === t5.type)) {
        const r4 = l$1(t4.geometry);
        return null !== r4 ? L(e6, {}, { x: r4[0], y: r4[1] }, false, false) : null;
      }
    }
    return null;
  }
  acquire(t4 = null, e6, s3, r3, i2) {
    t4 && this.set(t4, e6, s3, r3, i2);
  }
  release() {
    this.graphic = null, this.symbolResource = null, this.geometry = null;
  }
  get symbol() {
    return this.symbolResource.symbol;
  }
  set(t4, e6, s3, r3, i2) {
    this.graphic = t4, this.geometry = s3, this.symbolResource = e6, this.bounds = r3, i2 && (this.size = i2);
  }
  getGeometryQuantized(t4, s3, r3, o5) {
    const c2 = this.geometry, d3 = v(c2);
    if (null == d3)
      return null;
    switch (d3) {
      case "esriGeometryPolygon": {
        const e6 = c2, { rings: s4 } = e6;
        if (!s4 || 0 === s4.length)
          return null;
        let r4;
        if (r4 = 1 === s4.length && 2 === s4[0].length ? d$3(t4, { paths: [[s4[0][0], s4[0][1]]] }) : d$3(t4, this.geometry), !r4) {
          const e7 = { x: s4[0][0][0], y: s4[0][0][1] };
          if (r4 = d$3(t4, e7), r4) {
            const { x: t5, y: e8 } = r4;
            return { rings: [[[t5 - 1, e8], [1, -1], [1, 1], [-1, 1], [-1, -1]]] };
          }
        }
        return r4;
      }
      case "esriGeometryPolyline": {
        const e6 = c2;
        f$1(p$1), f$1(y$1);
        const s4 = e6.hasZ ?? false, r4 = e6.hasM ?? false;
        return C(p$1, e6), dt(y$1, p$1, s4, r4, g$1, t4.scale[0]), ht(p$1, y$1, s4, r4, g$1, t4), $(p$1, e6.hasZ ?? false, e6.hasM ?? false);
      }
      case "esriGeometryMultipoint": {
        const i2 = c2, u2 = 0.5 * o5 * Math.max(Math.abs(this.size[0]) + this.size[2] - this.size[0], Math.abs(this.size[1]) + this.size[3] - this.size[1]), h2 = G(r3);
        let a2 = i2.points;
        if (h2) {
          const [t5, r4] = h2.valid, i3 = r4 - t5;
          a2 = a2.filter((o6) => {
            if (o6[0] + u2 > r4 || o6[0] - u2 < t5) {
              const t6 = [...o6];
              return o6[0] + u2 > r4 ? t6[0] -= i3 : t6[0] += i3, q(s3, o6, u2) || q(s3, t6, u2);
            }
            return q(s3, o6, u2);
          });
        }
        return 0 === a2.length ? { points: a2 } : d$3(t4, { points: a2 });
      }
    }
    return d$3(t4, this.geometry);
  }
}
d2._pool = [], d2._set = /* @__PURE__ */ new Set();
const m = { minX: 0, minY: 0, maxX: 0, maxY: 0 }, p = u$1(), g = 1e-5;
function f2(e6, t4, i2, r3, s3) {
  return m.minX = t4, m.minY = i2, m.maxX = r3, m.maxY = s3, e6.search(m);
}
function _(e6) {
  return { minX: e6.bounds[0], minY: e6.bounds[1], maxX: e6.bounds[2], maxY: e6.bounds[3] };
}
class b {
  constructor(e6, i2, r3, s3, o5, n3, l2) {
    this._graphics = s3, this._onAdd = o5, this._onRemove = n3, this._hashToCIM = l2, this._index = i$1(9, _), this._itemByGraphic = /* @__PURE__ */ new Map(), this._inflatedSizeHelper = new ie$1(), this._tileInfoView = e6, this._uidFieldName = r3;
    const u2 = e6.getClosestInfoForScale(i2);
    u2 && (this._resolution = this._tileInfoView.getTileResolution(u2.level));
  }
  setResourceManager(e6) {
    this._cimResourceManager = e6, this._hittestDrawHelper = new tt(e6);
  }
  hitTest(e6, t4, s3, o5, l2) {
    e6 = L$1(e6, this._tileInfoView.spatialReference);
    const u2 = 0.5 * o5 * window.devicePixelRatio * s3;
    p[0] = e6 - u2, p[1] = t4 - u2, p[2] = e6 + u2, p[3] = t4 + u2;
    const h2 = 0.5 * o5 * (s3 + f$2), a2 = f2(this._index, e6 - h2, t4 - h2, e6 + h2, t4 + h2);
    if (!a2 || 0 === a2.length)
      return [];
    const d3 = [], m2 = u$1(), g2 = u$1();
    for (const i2 of a2) {
      const { geometry: e7, symbolResource: t5 } = i2;
      this._getSymbolBounds(m2, t5, e7, g2, l2), g2[3] = g2[2] = g2[1] = g2[0] = 0, E(m2, p) && i2.graphic?.visible && d3.push(i2);
    }
    if (0 === d3.length)
      return [];
    const _2 = this._hittestDrawHelper, b2 = [];
    for (const i2 of d3) {
      const { geometry: e7, symbolResource: t5 } = i2, { hash: r3, textInfo: s4 } = t5, n3 = this._hashToCIM.get(r3);
      n3 && (_2.hitTest(p, n3.symbol, e7, s4, l2, o5) && b2.push(i2));
    }
    return b2.sort(y), b2.map((e7) => e7.graphic);
  }
  getGraphicsData(e6, t4, i2) {
    const r3 = this._searchForItems(t4);
    if (0 === r3.length || 0 === i2.length)
      return [];
    r3.sort((e7, t5) => e7.zorder - t5.zorder), r3[0].insertAfter = -1;
    for (let a2 = 1; a2 < r3.length; a2++)
      r3[a2].insertAfter = r3[a2 - 1].graphic.uid;
    r3.sort((e7, t5) => e7.graphic.uid - t5.graphic.uid), i2.sort((e7, t5) => e7.uid - t5.uid);
    let s3, o5 = 0, n3 = 0;
    const l2 = t4.resolution, u2 = [], h2 = { originPosition: "upperLeft", scale: [l2, l2], translate: [t4.bounds[0], t4.bounds[3]] };
    for (const c2 of i2) {
      for (n3 = -2; o5 < r3.length; )
        if (s3 = r3[o5], o5++, c2.uid === s3.graphic.uid) {
          n3 = s3.insertAfter;
          break;
        }
      if (!s3?.geometry || -2 === n3)
        continue;
      const i3 = s3.getGeometryQuantized(h2, t4.bounds, this._tileInfoView.spatialReference, l2), d$12 = { ...s3.graphic.attributes };
      d$12[this._uidFieldName] = c2.uid, null == s3.groupId && (s3.groupId = e6.createTemplateGroup(s3.symbol, null)), u2.push({ centroid: d2.getCentroidQuantized(s3, h2), geometry: i3, attributes: d$12, symbol: s3.symbol, groupId: s3.groupId, insertAfter: n3, zorder: s3.zorder });
    }
    return u2.sort((e7, t5) => e7.zorder - t5.zorder), u2;
  }
  queryTileData(e6, t4) {
    if (0 === this._graphics.length)
      return [];
    const { bounds: i2, resolution: r3 } = t4, s3 = this._searchForItems(t4), o5 = [];
    return 0 === s3.length || this._createTileGraphics(o5, e6, s3, { originPosition: "upperLeft", scale: [r3, r3], translate: [i2[0], i2[3]] }, t4), o5;
  }
  has(e6) {
    return this._itemByGraphic.has(e6);
  }
  getBounds(e6) {
    const t4 = this._itemByGraphic.get(e6);
    return t4 ? t4.bounds : null;
  }
  getAllBounds() {
    return Array.from(this._itemByGraphic.values()).filter((e6) => e6.graphic.visible).map((e6) => e6.bounds);
  }
  addOrModify(e6, t4, i2) {
    if (!e6 || null == t4)
      return;
    this.has(e6) && this.remove(e6), this._onAdd(e6);
    const r3 = [0, 0, 0, 0], s3 = this._getSymbolBounds(null, t4, i2, r3, 0), o5 = d2.acquire(e6, t4, i2, null != s3 ? s3 : null, r3);
    return this._itemByGraphic.set(e6, o5), i2 && this._index.insert(o5), o5.bounds;
  }
  remove(e6) {
    if (!this._itemByGraphic.has(e6))
      return;
    this._onRemove(e6);
    const t4 = this._itemByGraphic.get(e6);
    t4?.bounds && this._index.remove(t4), this._itemByGraphic.delete(e6);
  }
  updateZ() {
    const e6 = this._graphics.items;
    let t4, i2;
    for (let r3 = 0; r3 < e6.length; r3++)
      i2 = e6[r3], t4 = this._itemByGraphic.get(i2), t4 && (t4.zorder = r3);
  }
  update(e6, t4, i2) {
    const r3 = this._itemByGraphic.get(e6);
    r3.groupId = null;
    const o5 = i$2(r3.bounds);
    this._index.remove(r3);
    const n3 = this._getSymbolBounds(r3.bounds, t4, i2, r3.size, 0);
    return null != n3 && r3.set(e6, t4, i2, n3, r3.size), i2 && this._index.insert(r3), { oldBounds: o5, newBounds: r3.bounds };
  }
  updateLevel(e6) {
    if (this._resolution === e6)
      return;
    this._resolution = e6, this._index.clear();
    const t4 = this._itemByGraphic, i2 = [];
    for (const [r3, s3] of t4) {
      const e7 = this._getSymbolBounds(s3.bounds, s3.symbolResource, s3.geometry, s3.size, 0);
      s3.geometry && null != e7 && (s3.bounds = e7, i2.push(s3));
    }
    this._index.load(i2);
  }
  clear() {
    this._itemByGraphic.clear(), this._index.clear();
  }
  _createTileGraphics(e6, t4, i2, r3, s3) {
    const o5 = this._uidFieldName, n3 = this._tileInfoView.spatialReference, { bounds: l2, resolution: u2 } = s3;
    let h2, c2, d$12, m2;
    i2.sort((e7, t5) => e7.zorder - t5.zorder);
    for (let p2 = 0; p2 < i2.length; p2++) {
      d$12 = i2[p2], h2 = d$12.graphic, c2 = d$12.getGeometryQuantized(r3, l2, n3, u2), m2 = 0 === p2 ? -1 : i2[p2 - 1].graphic.uid;
      const s4 = { ...d$12.graphic.attributes };
      s4[o5] = h2.uid, null == d$12.groupId && (d$12.groupId = t4.createTemplateGroup(d$12.symbol, null)), e6.push({ centroid: d2.getCentroidQuantized(d$12, r3), geometry: c2, attributes: s4, symbol: d$12.symbol, groupId: d$12.groupId, insertAfter: m2, zorder: d$12.zorder });
    }
  }
  _searchForItems(e6) {
    const t4 = this._tileInfoView.spatialReference, r3 = e6.bounds, s3 = G(t4);
    if (s3 && t4.isWrappable) {
      const [t5, o5] = s3.valid, n3 = Math.abs(r3[2] - o5) < g, l2 = Math.abs(r3[0] - t5) < g;
      if ((!n3 || !l2) && (n3 || l2)) {
        const s4 = e6.resolution;
        let l3;
        l3 = u$1(n3 ? [t5, r3[1], t5 + s4 * f$2, r3[3]] : [o5 - s4 * f$2, r3[1], o5, r3[3]]);
        const u2 = f2(this._index, r3[0], r3[1], r3[2], r3[3]), h2 = f2(this._index, l3[0], l3[1], l3[2], l3[3]);
        return [.../* @__PURE__ */ new Set([...u2, ...h2])];
      }
    }
    return f2(this._index, r3[0], r3[1], r3[2], r3[3]);
  }
  _getSymbolBounds(t4, r3, s3, n3, l2) {
    if (!r3 || !r3.symbol || !s3)
      return null;
    if (t4 || (t4 = u$1()), a$1(t4, s3), !n3 || 0 === n3[0] && 0 === n3[1] && 0 === n3[2] && 0 === n3[3]) {
      const { hash: t5, textInfo: i2 } = r3, s4 = this._hashToCIM.get(t5);
      if (!s4)
        return null;
      n3 || (n3 = [0, 0, 0, 0]);
      const o5 = this._inflatedSizeHelper.getSymbolInflateSize(n3, s4.symbol, this._cimResourceManager, l2, i2);
      n3[0] = u$2(o5[0]), n3[1] = u$2(o5[1]), n3[2] = u$2(o5[2]), n3[3] = u$2(o5[3]);
    }
    const u2 = this._resolution, a2 = ie$1.safeSize(n3);
    return t4[0] -= a2 * u2, t4[1] -= a2 * u2, t4[2] += a2 * u2, t4[3] += a2 * u2, t4;
  }
}
const y = (e6, t4) => {
  const i2 = h(e6.graphic), r3 = h(t4.graphic);
  return i2 === r3 ? t4.zorder - e6.zorder : i2 - r3;
};
const te = has("esri-2d-graphic-debug");
function ie(e6, t4, i2) {
  let s3 = i2.get(e6);
  return s3 || (s3 = { tile: t4, addedOrModified: [], removed: [] }, i2.set(e6, s3)), s3;
}
let se = class extends s$3(g$3) {
  constructor(e6) {
    super(e6), this._storage = new r$4(), this._displayIds = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._tiles = /* @__PURE__ */ new Map(), this._graphicStoreUpdate = false, this._graphicsSet = /* @__PURE__ */ new Set(), this._matcher = Promise.resolve(null), this._tileUpdateSet = /* @__PURE__ */ new Set(), this._tilesToUpdate = /* @__PURE__ */ new Map(), this._graphicIdToAbortController = /* @__PURE__ */ new Map(), this._attached = false, this._updatingGraphicsTimer = null, this._hashToExpandedSymbol = /* @__PURE__ */ new Map(), this._hashToExpandedSymbolPromise = /* @__PURE__ */ new Map(), this._hashToCIMSymbolPromise = /* @__PURE__ */ new Map(), this._hashToCIM = /* @__PURE__ */ new Map(), this._processing = false, this._needsProcessing = false, this._pendingUpdate = { added: /* @__PURE__ */ new Set(), updated: /* @__PURE__ */ new Set(), removed: /* @__PURE__ */ new Set() }, this.lastUpdateId = -1, this.renderer = null, this.updateRequested = false, this.defaultPointSymbolEnabled = true, this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this._controller.abort(), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._attributeStore = null, this._hashToExpandedSymbol.clear(), this.view = null, this.renderer = null, this._hashToCIM.clear(), this._hashToCIMSymbolPromise.clear(), this._hashToExpandedSymbolPromise.clear();
  }
  _createMatcher(e6, t4, i2) {
    if (e6) {
      const s3 = T(e6), r3 = _$1({ indexCount: 0, fields: {} }, "feature", e6, s3);
      this._matcher = o$5(r3, t4, null, i2);
    }
  }
  _createDisplayId(e6) {
    let t4 = this._displayIds.get(e6);
    return t4 || (t4 = this._storage.createDisplayId(), this._displayIds.set(e6, t4)), t4;
  }
  initialize() {
    this._attributeStore = new k({ type: "local", initialize: (e7) => Promise.resolve(this.container.attributeView.initialize(e7)), update: (e7) => this.container.attributeView.requestUpdate(e7), render: () => this.container.requestRender() }, n$3("2d")), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
    const e6 = (e7) => {
      this._createDisplayId(e7.uid), this._setFilterState(e7.uid, e7.visible);
    }, t4 = (e7) => {
      const t5 = this._displayIds.get(e7.uid);
      this._displayIds.delete(e7.uid), this._storage.releaseDisplayId(t5);
    }, i2 = new x$3(this.container.getMaterialItems.bind(this.container), this.view.featuresTilingScheme.tileInfo);
    this._graphicStore = new b(this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, e6, t4, this._hashToCIM), this._meshFactory = new a$2(null, this.uid, i2), this._templateStore = i2, this.addHandles([d$4(() => this._effectiveRenderer, (e7) => {
      this._createMatcher(e7, i2, this.container.stage.resourceManager);
      for (const t5 of this.graphics)
        this._pendingUpdate.updated.add(t5);
      this.requestUpdate();
    }), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      te && this.container.enableRenderingBounds(() => this._graphicStore.getAllBounds()), this.graphics.items.length > 0 && this._graphicsChangeHandler({ target: this.graphics, added: this.graphics.items, removed: [], moved: [] }), this.addHandles(this.graphics.on("change", (e8) => this._graphicsChangeHandler(e8)), "graphics");
      const e7 = this.container.stage.resourceManager;
      this._createMatcher(this._effectiveRenderer, i2, e7), this._graphicStore.setResourceManager(e7), this._attached = true, this.notifyChange("updating");
    })]);
    const s3 = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: s3, removed: [] });
  }
  get _effectiveRenderer() {
    return "function" == typeof this.renderer ? this.renderer() : this.renderer;
  }
  get updating() {
    return !this._attached || null !== this._updatingGraphicsTimer || this._pendingUpdate.added.size > 0 || this._pendingUpdate.removed.size > 0 || this._pendingUpdate.updated.size > 0 || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0 || this._attributeStore?.updatingHandles.updating || this._processing;
  }
  hitTest(e6) {
    if (!this.view || this.view.suspended)
      return [];
    const { resolution: t4, rotation: i2 } = this.view.state;
    return this._graphicStore.hitTest(e6.x, e6.y, 2, t4, i2);
  }
  update(e6) {
    s$4(this._controller.signal);
    const t4 = e6.state, { resolution: i2 } = t4;
    if (this._graphicStore.updateLevel(i2), this._graphicStoreUpdate = true, this.updateRequested = false, this._pendingUpdate.updated.size > 0) {
      if (!this._processing)
        return void this._updateGraphics();
      this._needsProcessing = true;
    }
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.requestUpdateCallback());
  }
  processUpdate(e6) {
    this.updateRequested && (this.updateRequested = false, this.update(e6));
  }
  graphicUpdateHandler(e6) {
    const { graphic: t4, property: i2 } = e6;
    switch (i2) {
      case "attributes":
      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(t4), this.requestUpdate();
        break;
      case "visible":
        this._setFilterState(t4.uid, t4.visible), this._attributeStore.sendUpdates();
    }
  }
  setHighlight(e6) {
    const t4 = e6.map((e7) => this._displayIds.get(e7)).filter(k$1);
    this._attributeStore.setHighlight(e6, t4);
  }
  _getIntersectingTiles(e6) {
    const t4 = this._graphicStore.getBounds(e6);
    if (!t4 || 0 === M(t4) || 0 === s$5(t4))
      return [];
    const i2 = g$2(t4, this.view.spatialReference);
    return null != i2 ? [.../* @__PURE__ */ new Set([...this.view.graphicsTileStore.boundsIntersections(i2[0]), ...this.view.graphicsTileStore.boundsIntersections(i2[1])])] : this.view.graphicsTileStore.boundsIntersections(t4);
  }
  async _updateTile(e6) {
    s$4(this._controller.signal);
    const t4 = e6.tile, i2 = this._getGraphicsData(this._templateStore, t4, e6.addedOrModified), s3 = await this._processGraphics(t4, i2);
    return s$4(this._controller.signal), this._patchTile(t4.key, { type: "update", addOrUpdate: s3, remove: e6.removed, end: true, clear: false, sort: false }), s3;
  }
  _patchTile(e6, t4) {
    const i2 = this._tiles.get(e6);
    i2 && (this.container.onTileData(i2, t4), this.container.requestRender());
  }
  _graphicsChangeHandler(e6) {
    const t4 = this._pendingUpdate;
    for (const i2 of e6.added)
      t4.added.add(i2);
    for (const i2 of e6.moved)
      t4.updated.add(i2);
    for (const i2 of e6.removed)
      this._pendingUpdate.added.has(i2) ? t4.added.delete(i2) : t4.removed.add(i2);
    this._processing ? this._needsProcessing = true : this._updateGraphics();
  }
  _getGraphicsToUpdate() {
    const e6 = { added: [], removed: [], updated: [] };
    if (!this.graphics)
      return e6;
    const t4 = this._pendingUpdate;
    for (const i2 of this.graphics.items)
      t4.added.has(i2) ? e6.added.push(i2) : t4.updated.has(i2) && e6.updated.push(i2);
    for (const i2 of t4.removed)
      this._graphicStore.has(i2) && e6.removed.push(i2);
    return t4.added.clear(), t4.removed.clear(), t4.updated.clear(), e6;
  }
  async _updateGraphics() {
    this._processing = true;
    const { added: e6, removed: t4, updated: i2 } = this._getGraphicsToUpdate(), s3 = this._tilesToUpdate;
    let r3;
    try {
      if (!this._graphicStoreUpdate) {
        const e7 = this.view.state, { resolution: t5 } = e7;
        this._graphicStore.updateLevel(t5);
      }
      const o5 = [], a2 = new Array(e6.length + t4.length);
      for (let e7 = 0; e7 < i2.length; e7++) {
        const t5 = i2[e7], n4 = this._getIntersectingTiles(t5);
        for (const e8 of n4) {
          r3 = e8.id;
          ie(r3, e8, s3).removed.push(this._displayIds.get(t5.uid));
        }
        o5.push(this._updateGraphic(t5, null)), a2[e7] = t5;
      }
      const n3 = i2.length;
      for (let t5 = 0; t5 < e6.length; t5++) {
        const i3 = e6[t5];
        a2[n3 + t5] = i3, this._graphicsSet.add(i3), o5.push(this._addGraphic(i3));
      }
      for (const e7 of t4) {
        this._abortProcessingGraphic(e7.uid);
        const t5 = this._getIntersectingTiles(e7);
        for (const i3 of t5) {
          r3 = i3.id;
          ie(r3, i3, s3).removed.push(this._displayIds.get(e7.uid));
        }
        this._graphicsSet.delete(e7), this._graphicStore.remove(e7);
      }
      let h2;
      this._flipUpdatingGraphics(), await Promise.all(o5);
      for (let e7 = 0; e7 < a2.length; e7++) {
        h2 = a2[e7];
        const t5 = this._getIntersectingTiles(h2);
        for (const e8 of t5) {
          r3 = e8.id;
          ie(r3, e8, s3).addedOrModified.push(h2);
        }
      }
      this._graphicStore.updateZ();
      const l2 = [];
      for (const [e7, t5] of s3)
        l2.push(this._updateTile(t5));
      await Promise.all(l2);
    } catch (o5) {
      b$1(o5);
    }
    for (const a2 of t4)
      try {
        const e7 = await this._getSymbolForGraphic(a2, null);
        if (e7) {
          const t5 = e7.hash();
          this._hashToExpandedSymbol.delete(t5);
        }
      } catch (o5) {
        b$1(o5);
      }
    s3.clear(), this.notifyChange("updating"), this._processing = false, this._needsProcessing && (this._needsProcessing = false, this._updateGraphics());
  }
  _getArcadeInfo(e6) {
    const t4 = (e6.attributes ? Object.keys(e6.attributes) : []).map((t5) => ({ name: t5, alias: t5, type: "string" == typeof e6.attributes[t5] ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
    return null == e6.geometry ? null : { geometryType: v(e6.geometry), spatialReference: f$6.fromJSON(e6.geometry.spatialReference), fields: t4 };
  }
  _getSymbolForGraphic(e6, t4) {
    return s$4(this._controller.signal), null != e6.symbol ? Promise.resolve(e6.symbol) : null != this._effectiveRenderer ? this._effectiveRenderer.getSymbolAsync(e6, { scale: this.view.state.scale, signal: null != t4 ? t4.signal : null }) : Promise.resolve(this._getNullSymbol(e6));
  }
  _getCIMSymbol(e6, t4, i2) {
    let s3 = this._hashToCIM.get(t4);
    if (s3)
      return Promise.resolve(s3);
    const r3 = te$2(e6);
    if (null != r3) {
      if ("CIMSymbolReference" === r3.type)
        return s3 = r3, this._hashToCIM.set(t4, s3), Promise.resolve(s3);
      let e7 = this._hashToCIMSymbolPromise.get(t4);
      return e7 || (e7 = r3.fetchCIMSymbol(i2).then((e8) => (this._hashToCIM.set(t4, e8.data), this._hashToCIMSymbolPromise.delete(t4), e8)).catch((e8) => (this._hashToCIMSymbolPromise.delete(t4), a$3(e8), null)), this._hashToCIMSymbolPromise.set(t4, e7), e7);
    }
    return Promise.resolve(null);
  }
  _expandCIMSymbol(e6, t4, i2, s3) {
    const r3 = this._hashToExpandedSymbol.get(i2);
    if (r3)
      return Promise.resolve(r3);
    let o5 = this._hashToExpandedSymbolPromise.get(i2);
    if (o5)
      return o5;
    const a2 = this.container.stage, n3 = this._getArcadeInfo(t4), h2 = T(null), l2 = i$3(e6, h2);
    return o5 = i$4(l2, n3, a2.resourceManager, s3), this._hashToExpandedSymbolPromise.set(i2, o5), o5.then((e7) => (this._hashToExpandedSymbol.set(i2, e7), this._hashToExpandedSymbolPromise.delete(i2), e7)), o5;
  }
  async _getSymbolResources(e6, t4) {
    s$4(this._controller.signal);
    return this.container.stage ? this._getSymbolForGraphic(e6, t4).then((i2) => {
      if (!i2)
        return null;
      const r3 = i2.hash();
      return this._getCIMSymbol(i2, r3, t4).then((a2) => null == a2 ? null : this._expandCIMSymbol(a2, e6, r3, t4).then((e7) => {
        const t5 = e7.layers.filter((e8) => "text" === e8.type && "string" == typeof e8.text);
        if (t5 && t5.length > 0) {
          const a3 = new Array(t5.length);
          for (let e8 = 0; e8 < t5.length; e8++) {
            const r4 = t5[e8], o5 = [], [n4] = i$5(r4.text);
            r4.text = n4, "text" === i2.type && (r4.lineWidth = i2.lineWidth);
            for (let e9 = 0; e9 < n4.length; e9++)
              o5.push(n4.charCodeAt(e9));
            a3[e8] = { symbol: r4, id: e8, glyphIds: o5 };
          }
          const n3 = /* @__PURE__ */ new Map();
          return this.container.getMaterialItems(a3).then((i3) => {
            n$4(i3);
            for (let e8 = 0; e8 < t5.length; e8++) {
              const s3 = t5[e8];
              n3.set(s3.cim, { text: s3.text, mosaicItem: i3[e8].mosaicItem });
            }
            return { symbol: e7, textInfo: n3, hash: r3 };
          });
        }
        return { symbol: e7, hash: r3 };
      }));
    }).catch((e7) => (a$3(e7), null)) : null;
  }
  async _projectAndNormalizeGeometry(e6, t4) {
    if (s$4(this._controller.signal), null == e6.geometry || "mesh" === e6.geometry.type)
      return null;
    let i2 = e6.geometry;
    if (f$5(i2)) {
      const e7 = i2.rings;
      i2.rings = e7;
    } else if (s$6(i2)) {
      const e7 = i2.paths;
      i2.paths = e7;
    } else if (m$2(i2)) {
      const s4 = await this._getSymbolForGraphic(e6, t4);
      if (s$4(this._controller.signal), s4 && (p$2(s4.type) || u(s4.type))) {
        i2 = i2.center;
      } else
        i2 = x(i2);
    }
    await x$4(i2.spatialReference, this.view.spatialReference);
    const s3 = a$4(i2), r3 = j$2(s3, i2.spatialReference, this.view.spatialReference);
    return r3 && m$3(r3), r3;
  }
  _onTileUpdate(e6) {
    const t4 = G(this.view.spatialReference);
    if (e6.added && e6.added.length > 0)
      for (const i2 of e6.added)
        this._addNewTile(i2, t4);
    if (e6.removed && e6.removed.length > 0)
      for (const i2 of e6.removed)
        this._removeTile(i2.key);
  }
  async _addGraphic(e6) {
    this._abortProcessingGraphic(e6.uid), s$4(this._controller.signal);
    const t4 = new AbortController();
    this._graphicIdToAbortController.set(e6.uid, t4);
    const i2 = { signal: t4.signal };
    try {
      await this._addOrUpdateGraphic(e6, i2), s$4(this._controller.signal), this._graphicIdToAbortController.delete(e6.uid);
    } catch (s3) {
      if (this._graphicIdToAbortController.delete(e6.uid), !b$1(s3))
        throw s3;
    }
  }
  _updateGraphic(e6, t4) {
    s$4(this._controller.signal);
    const i2 = this._projectAndNormalizeGeometry(e6, t4), s3 = this._getSymbolResources(e6, t4);
    return Promise.all([i2, s3]).then(([t5, i3]) => {
      s$4(this._controller.signal), this._graphicStore.addOrModify(e6, i3, t5);
    });
  }
  _addOrUpdateGraphic(e6, t4) {
    s$4(this._controller.signal);
    const i2 = this._projectAndNormalizeGeometry(e6, t4), s3 = this._getSymbolResources(e6, t4);
    return Promise.all([i2, s3]).then(([t5, i3]) => {
      s$4(this._controller.signal), this._graphicsSet.has(e6) && this._graphicStore.addOrModify(e6, i3, t5);
    });
  }
  _addTile(e6) {
    const t4 = this.view.featuresTilingScheme.getTileBounds(u$1(), e6), i2 = this.view.featuresTilingScheme.getTileResolution(e6.level), s3 = new a(e6, i2, t4[0], t4[3]);
    return this._tiles.set(e6, s3), this.container.addChild(s3), s3;
  }
  async _addNewTile(e6, t4) {
    const i2 = this._addTile(e6.key), s3 = this._graphicStore.queryTileData(this._templateStore, e6);
    if (0 === s3.length)
      return;
    if (t4) {
      const i3 = Math.round((t4.valid[1] - t4.valid[0]) / e6.resolution);
      for (const e7 of s3)
        e7.geometry && (l$2(e7.geometry) || u$3(e7.geometry)) && this._wrapPoints(e7, i3);
    }
    const r3 = e6.key;
    this._tileUpdateSet.add(e6.key), this.notifyChange("updating");
    try {
      const t5 = { type: "update", clear: false, addOrUpdate: await this._processGraphics(e6, s3), remove: [], end: true, sort: false };
      i2.patch(t5), this._tileUpdateSet.delete(r3), this.notifyChange("updating");
    } catch (o5) {
      if (this._tileUpdateSet.delete(r3), this.notifyChange("updating"), !b$1(o5))
        throw o5;
    }
  }
  _removeTile(e6) {
    if (!this._tiles.has(e6))
      return;
    const t4 = this._tiles.get(e6);
    this.container.removeChild(t4), t4.destroy(), this._tiles.delete(e6);
  }
  _setFilterState(e6, t4) {
    const i2 = this._displayIds.get(e6), s3 = this._attributeStore.getHighlightFlag(e6);
    this._attributeStore.setData(i2, 0, 0, s3 | (t4 ? X : 0));
  }
  _getGraphicsData(e6, t4, i2) {
    const s3 = this.view, r3 = G(s3.spatialReference), o5 = this._graphicStore.getGraphicsData(e6, t4, i2);
    if (r3) {
      const e7 = Math.round((r3.valid[1] - r3.valid[0]) / t4.resolution);
      for (const t5 of o5)
        t5.geometry && (l$2(t5.geometry) || u$3(t5.geometry)) && this._wrapPoints(t5, e7);
    }
    return o5;
  }
  _wrapPoints(e6, t4) {
    const i2 = e6.geometry;
    u$3(i2) ? this._wrapMultipoint(i2, t4) : this._wrapPoint(e6, t4);
  }
  _wrapMultipoint(e6, t4) {
    const i2 = e6.points, s3 = [];
    let r3 = 0, o5 = 0;
    for (const [a2, n3] of i2) {
      if (s3.push([a2 + r3, n3]), r3 = 0, t4 === c) {
        const e7 = 5 * f$2;
        a2 + o5 < e7 ? (s3.push([t4, 0]), r3 = -t4) : a2 + o5 > c - e7 && (s3.push([-t4, 0]), r3 = t4);
      } else
        a2 + o5 < -f$2 ? (s3.push([t4, 0]), r3 = -t4) : a2 + o5 > c + f$2 && (s3.push([-t4, 0]), r3 = t4);
      o5 += a2;
    }
    e6.points = s3;
  }
  _wrapPoint(e6, t4) {
    const i2 = e6.geometry;
    if (t4 === c) {
      const s3 = 5 * f$2;
      i2.x < s3 ? e6.geometry = { points: [[i2.x, i2.y], [t4, 0]] } : i2.x > c - s3 && (e6.geometry = { points: [[i2.x, i2.y], [-t4, 0]] });
    } else
      i2.x < -f$2 ? e6.geometry = { points: [[i2.x, i2.y], [t4, 0]] } : i2.x > c + f$2 && (e6.geometry = { points: [[i2.x, i2.y], [-t4, 0]] });
  }
  _processGraphics(e6, t4, i2) {
    if (!(t4 && t4.length) || !this._meshFactory)
      return Promise.resolve(null);
    const s3 = o4.from(t4, this.uid, e6.transform), r3 = this._meshFactory;
    return this._matcher.then((t5) => r3.analyzeGraphics(s3, this.container.stage.resourceManager, t5, null, null, i2).then(() => (this._attributeStore.sendUpdates(), this._processAnalyzedGraphics(e6, s3))));
  }
  _processAnalyzedGraphics(e6, t4) {
    const i2 = this._meshFactory, s3 = t4.getSize(), r3 = t4.getCursor(), o5 = { features: s3, records: s3, metrics: 0 }, a2 = new E$1(e6.key.id, o5, S$1.DEFAULT, false, false), n3 = [];
    for (; r3.next(); ) {
      const t5 = r3.readGraphic();
      t5.insertAfter = -1 === t5.insertAfter ? -1 : this._displayIds.get(t5.insertAfter), t5.displayId = this._displayIds.get(t5.attributes[this.uid]);
      const s4 = new e$1(t5.displayId);
      s4.insertAfter = t5.insertAfter, n3.push(s4), i2.writeGraphic(a2, r3, e6.level, this.container.stage.resourceManager);
    }
    const h2 = e6.tileInfoView.tileInfo.isWrappable, l2 = a2.serialize(h2);
    if (1 !== l2.length)
      return new B();
    const d3 = l2[0].message;
    return B.fromVertexData(d3, n3);
  }
  _abortProcessingGraphic(e6) {
    this._graphicIdToAbortController.get(e6)?.abort();
  }
  _getNullSymbol(e6) {
    const t4 = e6.geometry;
    return s$6(t4) ? O : f$5(t4) || m$2(t4) ? y$3 : this.defaultPointSymbolEnabled ? N : null;
  }
  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(() => {
      this._updatingGraphicsTimer = null, this.notifyChange("updating");
    }, 160), this.notifyChange("updating");
  }
};
e$7([y$4()], se.prototype, "_effectiveRenderer", null), e$7([y$4({ constructOnly: true })], se.prototype, "requestUpdateCallback", void 0), e$7([y$4()], se.prototype, "container", void 0), e$7([y$4({ constructOnly: true })], se.prototype, "graphics", void 0), e$7([y$4()], se.prototype, "renderer", void 0), e$7([y$4()], se.prototype, "updating", null), e$7([y$4()], se.prototype, "view", void 0), e$7([y$4()], se.prototype, "updateRequested", void 0), e$7([y$4()], se.prototype, "defaultPointSymbolEnabled", void 0), se = e$7([c$1("esri.views.2d.layers.support.GraphicsView2D")], se);
const re = se;
export {
  re as r
};
