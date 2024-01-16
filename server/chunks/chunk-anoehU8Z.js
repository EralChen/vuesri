import { aq as has, b$ as n } from "./chunk-KFNcxJaF.js";
import { a as a$1 } from "./chunk-Zlv3z8RW.js";
const s = has("esri-2d-log-allocations");
class r {
  constructor(t, e) {
    this._array = t, this._pool = e;
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  static create(t, e) {
    const s2 = e.acquire(t);
    return new r(s2, e);
  }
  expand(t) {
    const e = this._pool.acquire(t);
    e.set(this._array), this._pool.release(this._array), this._array = e;
  }
  destroy() {
    this._pool.release(this._array);
  }
  set(t, e) {
    this._array.set(t._array, e);
  }
  slice() {
    const t = this._pool.acquire(this._array.byteLength);
    return t.set(this._array), new r(t, this._pool);
  }
}
class a {
  constructor() {
    this._data = new ArrayBuffer(a.BYTE_LENGTH), this._freeList = new a$1({ start: 0, end: this._data.byteLength });
  }
  static get BYTE_LENGTH() {
    return 64e6;
  }
  get buffer() {
    return this._data;
  }
  allocate(t) {
    const e = this._freeList.firstFit(t);
    return null == e ? null : new Uint32Array(this._data, e, t / Uint32Array.BYTES_PER_ELEMENT);
  }
  free(t) {
    this._freeList.free(t.byteOffset, t.byteLength);
  }
}
class i {
  constructor() {
    this._bytesAllocated = 0, this._pages = [], this._pagesByBuffer = /* @__PURE__ */ new Map(), this._addPage();
  }
  destroy() {
    this._pages = [], this._pagesByBuffer = null;
  }
  get _bytesTotal() {
    return this._pages.length * a.BYTE_LENGTH;
  }
  acquire(e) {
    if (this._bytesAllocated += e, s && console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`), e > a.BYTE_LENGTH)
      return new Uint32Array(e / Uint32Array.BYTES_PER_ELEMENT);
    for (const t of this._pages) {
      const s2 = t.allocate(e);
      if (null != s2)
        return s2;
    }
    const r2 = this._addPage().allocate(e);
    return n(r2, "Expected to allocate page"), r2;
  }
  release(t) {
    this._bytesAllocated -= t.byteLength, s && console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);
    const e = this._pagesByBuffer.get(t.buffer);
    e && e.free(t);
  }
  _addPage() {
    const t = new a();
    return this._pages.push(t), this._pagesByBuffer.set(t.buffer, t), t;
  }
}
export {
  i,
  r
};
