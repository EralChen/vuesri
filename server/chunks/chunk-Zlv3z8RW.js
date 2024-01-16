import { tj as n$2, hU as e$2, kJ as r$1, hA as c$2, hN as s$3, hL as i$3, tk as s$4, tl as o$1, tm as de, nB as L$1, ca as f$1, c8 as E$2, tn as _$1, c9 as S$2, to as A$2, bb as s$5, aq as has, e$ as n$3, aM as s$6, lz as o$2, bH as a$2, jt as n$4, h8 as u$2, tp as c$3, ib as c$4, tq as V$1, bX as k$1, tr as f$2, ts as c$5, qq as S$3, b7 as C$1, tt as E$3, tu as F$1, tv as G$1, tw as H$1, tx as I$1, ty as J$1, tz as K$1, tA as P$1, qs as R$1, qr as Q$1, tB as U$1, kR as e$4, eA as D$1, tC as L$2, T as T$1, qt as W, E as E$4, kT as U$2, tD as K$2 } from "./chunk-KFNcxJaF.js";
import { d as l$1, n as n$5, l as l$2, f as f$3 } from "./chunk-yIp_WHt0.js";
import { n as ne } from "./chunk-G90k0bzF.js";
import "./chunk-b-LoIQKK.js";
import { e as e$3 } from "./chunk-7WVHb2Yk.js";
class t {
  constructor(a3) {
    if (this.next = null, !Array.isArray(a3))
      return void (this.data = a3);
    this.data = a3[0];
    let e3 = this;
    for (let n3 = 1; n3 < a3.length; n3++)
      e3.next = new t([a3[n3]]), e3 = e3.next;
  }
  *values() {
    let t2 = this;
    for (; t2; )
      yield t2.data, t2 = t2.next;
  }
  forEach(t2) {
    let a3 = this;
    for (; a3; )
      t2(a3.data), a3 = a3.next;
  }
  find(t2) {
    return t2(this.data) ? this : this.next?.find(t2);
  }
  max(t2, a3 = this) {
    const e3 = t2(this.data) > t2(a3.data) ? this : a3;
    return this.next ? this.next.max(t2, e3) : e3;
  }
  remove(t2, a3 = null) {
    return this === t2 ? a3 ? (a3.next = this.next, a3) : this.next : this.next?.remove(t2, this) ?? null;
  }
  get last() {
    return this.next ? this.next.last : this;
  }
}
let a$1 = class a {
  constructor(a3) {
    this._head = null, null != a3 && (this._head = new t(a3));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (null == this._head)
      return 0;
    const t2 = this._head.max((t3) => t3.end - t3.start);
    return t2.data.end - t2.data.start;
  }
  firstFit(t2) {
    if (null == this._head)
      return null;
    let a3 = null, e3 = this._head;
    for (; e3; ) {
      const n3 = e3.data.end - e3.data.start;
      if (n3 === t2)
        return a3 ? a3.next = e3.next : this._head = e3.next, e3.data.start;
      if (n3 > t2) {
        const a4 = e3.data.start;
        return e3.data.start += t2, a4;
      }
      a3 = e3, e3 = e3.next;
    }
    return null;
  }
  free(a3, e3) {
    const n3 = a3 + e3;
    if (null == this._head) {
      const e4 = new t({ start: a3, end: n3 });
      return void (this._head = e4);
    }
    if (n3 <= this._head.data.start) {
      if (n3 === this._head.data.start)
        return void (this._head.data.start -= e3);
      const r3 = new t({ start: a3, end: n3 });
      return r3.next = this._head, void (this._head = r3);
    }
    let r2 = this._head, s2 = r2.next;
    for (; s2; ) {
      if (s2.data.start >= n3) {
        if (r2.data.end === a3) {
          if (r2.data.end += e3, r2.data.end === s2.data.start) {
            const t2 = s2.data.end - s2.data.start;
            return r2.data.end += t2, void (r2.next = s2.next);
          }
          return;
        }
        if (s2.data.start === n3)
          return void (s2.data.start -= e3);
        const d2 = new t({ start: a3, end: n3 });
        return d2.next = r2.next, void (r2.next = d2);
      }
      r2 = s2, s2 = s2.next;
    }
    if (a3 === r2.data.end)
      return void (r2.data.end += e3);
    const d = new t({ start: a3, end: n3 });
    r2.next = d;
  }
};
let h$3 = class h {
  acquire(s2) {
    return { refCount: 1, version: -1, labelMat2d: n$2(), tileMat3: e$2(), dvs: e$2() };
  }
  release(s2) {
  }
};
let m$3 = class m extends r$1 {
  constructor(s2, t2, r2, e3) {
    super(s2, t2, r2, e3, c$2, c$2);
  }
  destroy() {
    super.destroy(), this._transforms && m.TransformCache.release(this.key.hash);
  }
  setTransform(i3) {
    const o2 = this.resolution / i3.resolution, n3 = this.transforms.tileMat3, [h3, m3] = i3.toScreenNoRotation([0, 0], [this.x, this.y]), c2 = this.width / this.rangeX * o2, f2 = this.height / this.rangeY * o2;
    s$3(n3, c2, 0, 0, 0, f2, 0, h3, m3, 1), i$3(this.transforms.dvs, i3.displayViewMat3, n3);
    const d = this.transforms.labelMat2d, l2 = window.devicePixelRatio, u2 = s$4(n$2(), c2 * l2, 0, 0, f2 * l2, h3 * l2, m3 * l2);
    o$1(d, i3.viewMat2d, u2);
  }
  _createTransforms() {
    return m.TransformCache.acquire(this.key.hash);
  }
};
m$3.TransformCache = new h$3();
let e$1 = class e {
  constructor(t2, e3, n3, i3, a3) {
    this.target = t2, this.geometryType = e3, this.materialKey = n3, this.indexFrom = i3, this.indexCount = a3;
  }
  get indexEnd() {
    return this.indexFrom + this.indexCount;
  }
  extend(t2) {
    this.indexCount += t2;
  }
};
let n$1 = class n {
  constructor(t2, e3) {
    this.geometryType = 0, this._target = t2, this.geometryType = e3;
  }
  static from(t2, e3, i3, a3) {
    const d = new n(t2, e3);
    if (null != a3)
      for (const n3 of a3)
        i3.seekIndex(n3), d.addRecord(i3);
    else
      for (; i3.next(); )
        d.addRecord(i3);
    return d;
  }
  addRecord(n3) {
    const i3 = this._target, a3 = this.geometryType, d = n3.materialKey;
    let s2 = n3.indexFrom, r2 = n3.indexCount;
    const o2 = n3.vertexFrom, l2 = n3.vertexCount;
    if (r2 || (s2 = o2, r2 = l2), null == this._head) {
      const n4 = new e$1(i3, a3, d, s2, r2);
      return void (this._head = new t(n4));
    }
    let h3 = null, x2 = this._head;
    for (; x2; ) {
      if (s2 < x2.data.indexFrom)
        return this._insert(d, s2, r2, h3, x2);
      h3 = x2, x2 = x2.next;
    }
    this._insert(d, s2, r2, h3, null);
  }
  forEach(t2) {
    null != this._head && this._head.forEach(t2);
  }
  *infos() {
    if (null != this._head)
      for (const t2 of this._head.values())
        yield t2;
  }
  _insert(n3, i3, a3, d, s2) {
    if (null == d && null == s2) {
      const d2 = new e$1(this._target, this.geometryType, n3, i3, a3);
      this._head = new t(d2);
    }
    return null == d && null != s2 ? this._insertAtHead(n3, i3, a3, s2) : null != d && null == s2 ? this._insertAtEnd(n3, i3, a3, d) : null != d && null != s2 ? this._insertAtMiddle(n3, i3, a3, d, s2) : void 0;
  }
  _insertAtHead(n3, i3, a3, d) {
    const s2 = i3 + a3;
    if (n3 === d.data.materialKey && s2 === d.data.indexFrom)
      d.data.indexFrom = i3, d.data.indexCount += a3;
    else {
      const s3 = new e$1(this._target, this.geometryType, n3, i3, a3);
      this._head = new t(s3), this._head.next = d;
    }
  }
  _insertAtEnd(n3, i3, a3, d) {
    if (d.data.materialKey === n3 && d.data.indexEnd === i3)
      d.data.indexCount += a3;
    else {
      const s2 = new e$1(this._target, this.geometryType, n3, i3, a3), r2 = new t(s2);
      d.next = r2;
    }
  }
  _insertAtMiddle(n3, i3, a3, d, s2) {
    const r2 = i3 + a3;
    if (d.data.materialKey === n3 && d.data.indexEnd === i3)
      d.data.indexCount += a3, d.data.materialKey === s2.data.materialKey && d.data.indexEnd === s2.data.indexFrom && (d.data.indexCount += s2.data.indexCount, d.next = s2.next);
    else if (n3 === s2.data.materialKey && r2 === s2.data.indexFrom)
      s2.data.indexFrom = i3, s2.data.indexCount += a3;
    else {
      const r3 = new e$1(this._target, this.geometryType, n3, i3, a3), o2 = new t(r3);
      d.next = o2, o2.next = s2;
    }
  }
};
const s$2 = 2147483647;
class r {
  constructor(t2) {
    this._head = t2, this._cursor = t2;
  }
  static from(t2, e3 = 0, s2 = t2.byteLength / i$2.BYTES_PER_RECORD - e3) {
    const _2 = new i$2(new Int32Array(t2, e3 * i$2.BYTES_PER_RECORD, s2 * i$2.ELEMENTS_PER_RECORD));
    return new r(_2);
  }
  size() {
    let t2 = this._cursor, e3 = 0;
    for (; t2; )
      e3 += t2.size(), t2 = t2._link;
    return e3;
  }
  get id() {
    return this._cursor.id;
  }
  set id(t2) {
    this._cursor.id = t2;
  }
  get materialKey() {
    return this._cursor.materialKey;
  }
  set materialKey(t2) {
    this._cursor.materialKey = t2;
  }
  get insertAfter() {
    return this._cursor.insertAfter;
  }
  get indexFrom() {
    return this._cursor.indexFrom;
  }
  set indexFrom(t2) {
    this._cursor.indexFrom = t2;
  }
  get indexCount() {
    return this._cursor.indexCount;
  }
  set indexCount(t2) {
    this._cursor.indexCount = t2;
  }
  get vertexFrom() {
    return this._cursor.vertexFrom;
  }
  set vertexFrom(t2) {
    this._cursor.vertexFrom = t2;
  }
  get vertexCount() {
    return this._cursor.vertexCount;
  }
  set vertexCount(t2) {
    this._cursor.vertexCount = t2;
  }
  get sortKey() {
    return this._cursor.sortKey;
  }
  set sortKey(t2) {
    this._cursor.sortKey = t2;
  }
  get index() {
    return this._cursor._indexStart + this._cursor._index;
  }
  seekIndex(t2) {
    let e3 = t2;
    for (this._cursor = this._head; this._cursor; ) {
      const t3 = this._cursor.size();
      if (e3 < t3)
        return this._cursor._index = e3, true;
      e3 -= t3, this._cursor = this._cursor._link;
    }
    return false;
  }
  forEach(t2) {
    const e3 = this.getCursor();
    for (; e3.next(); )
      t2(e3);
  }
  link(t2) {
    if (!this._head)
      return void (this._head = t2._head);
    let e3 = this._head;
    for (; e3._link; )
      e3 = e3._link;
    e3._link = t2._head, e3._link._indexStart = e3._indexStart + e3.size();
  }
  getCursor() {
    return this.copy();
  }
  getDrawInfo(t2, s2) {
    return new e$1(t2, s2, this.materialKey, this.indexFrom, this.indexCount);
  }
  lookup(t2) {
    for (this._cursor = this._head; this._cursor && !this._cursor.lookup(t2); ) {
      if (!this._cursor._link)
        return false;
      this._cursor = this._cursor._link;
    }
    return !!this._cursor;
  }
  copy() {
    const t2 = new r(this._head?.copy());
    if (!t2._head)
      return t2;
    let e3 = t2._head, s2 = t2._head._link;
    for (; s2; )
      e3._link = s2.copy(), e3 = s2, s2 = e3._link;
    return t2;
  }
  next() {
    return !!this._cursor && (!!this._cursor.next() || !!this._cursor._link && (this._cursor = this._cursor._link, this.next()));
  }
  peekId() {
    return this._cursor.peekId() ?? this._cursor._link.peekId();
  }
  delete(t2) {
    let e3 = this._head, s2 = null;
    for (; e3; ) {
      if (e3.delete(t2))
        return e3.isEmpty() && (null != s2 && (s2._link = e3._link), e3 === this._head && (this._head = e3._link), e3 === this._cursor && (this._cursor = e3._link)), true;
      s2 = e3, e3 = e3._link;
    }
    return false;
  }
}
r.ELEMENTS_PER_RECORD = de, r.BYTES_PER_RECORD = r.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
let i$2 = class i {
  constructor(t2) {
    this._link = null, this._index = -1, this._indexStart = 0, this._packedRecordsF32 = null, this._deletedCount = 0, this._offsets = { instance: null }, this._packedRecords = t2;
  }
  static from(t2, e3 = 0, s2 = t2.byteLength / this.BYTES_PER_RECORD - e3) {
    return new i(new Int32Array(t2, e3 * this.BYTES_PER_RECORD, s2 * this.ELEMENTS_PER_RECORD));
  }
  delete(t2) {
    const e3 = this._index, r2 = this.lookup(t2);
    if (r2)
      for (this.id = s$2, ++this._deletedCount; this.next() && this.id === t2; )
        this.id = s$2, ++this._deletedCount;
    return this._index = e3, r2;
  }
  isEmpty() {
    return this._deletedCount === this.size();
  }
  link(t2) {
    this._link ? this._link.link(t2) : this._link = t2;
  }
  lookup(t2) {
    if (null == this._offsets.instance) {
      this._offsets.instance = /* @__PURE__ */ new Map();
      const t3 = this.copy();
      t3._index = -1;
      let e4 = 0;
      for (; t3.next(); )
        t3.id !== e4 && (this._offsets.instance.set(t3.id, t3._index), e4 = t3.id);
    }
    if (!this._offsets.instance.has(t2))
      return false;
    const e3 = this._index;
    return this._index = this._offsets.instance.get(t2), this.id !== s$2 || (this._index = e3, false);
  }
  get id() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD];
  }
  set id(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD] = t2;
  }
  get materialKey() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 1];
  }
  set materialKey(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 1] = t2;
  }
  get insertAfter() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 2];
  }
  get indexFrom() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 3];
  }
  set indexFrom(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 3] = t2;
  }
  get indexCount() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 4];
  }
  set indexCount(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 4] = t2;
  }
  get vertexFrom() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 5];
  }
  set vertexFrom(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 5] = t2;
  }
  get vertexCount() {
    return this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 6];
  }
  set vertexCount(t2) {
    this._packedRecords[this._index * i.ELEMENTS_PER_RECORD + 6] = t2;
  }
  get sortKey() {
    return this._packedRecordsF32 || (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)), this._packedRecordsF32[this._index * i.ELEMENTS_PER_RECORD + 7];
  }
  set sortKey(t2) {
    this._packedRecordsF32 || (this._packedRecordsF32 = new Float32Array(this._packedRecords.buffer)), this._packedRecordsF32[this._index * i.ELEMENTS_PER_RECORD + 7] = t2;
  }
  get index() {
    return this._index;
  }
  size() {
    return this._packedRecords.length / i.ELEMENTS_PER_RECORD;
  }
  next() {
    for (; ++this._index < this.size() && this.id === s$2; )
      ;
    return this._index < this.size();
  }
  peekId() {
    const t2 = (this._index + 1) * i.ELEMENTS_PER_RECORD;
    return t2 >= this._packedRecords.length ? 0 : this._packedRecords[t2];
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const t2 = new i(this._packedRecords);
    return t2._indexStart = this._indexStart, t2._link = this._link, t2._index = this._index, t2._offsets = this._offsets, t2._deletedCount = this._deletedCount, t2;
  }
};
i$2.ELEMENTS_PER_RECORD = de, i$2.BYTES_PER_RECORD = i$2.ELEMENTS_PER_RECORD * Int32Array.BYTES_PER_ELEMENT;
function e2(e3) {
  if (!e3)
    return L$1.NONE;
  let r2 = 0;
  for (const i3 of e3)
    if ("size" === i3.type) {
      const t2 = l$1(i3);
      r2 |= t2, "outline" === i3.target && (r2 |= t2 << 4);
    } else
      "color" === i3.type ? r2 |= L$1.COLOR : "opacity" === i3.type ? r2 |= L$1.OPACITY : "rotation" === i3.type && (r2 |= L$1.ROTATION);
  return r2;
}
function s$1(e3) {
  if ("line-marker" === e3.type) {
    return { type: "line-marker", color: e3.color?.toJSON(), placement: e3.placement, style: e3.style };
  }
  return e3.constructor.fromJSON(e3.toJSON()).toJSON();
}
function o(e3) {
  return A$2(e3);
}
function i$1(e3, t2, r2 = false) {
  if (!e3)
    return null;
  switch (e3.type) {
    case "simple-fill":
    case "picture-fill":
      return c$1(e3, t2, r2);
    case "simple-marker":
    case "picture-marker":
      return h$2(e3, t2, r2);
    case "simple-line":
      return y(e3, t2, r2);
    case "text":
      return u$1(e3, t2, r2);
    case "label":
      return m$2(e3, t2, r2);
    case "cim":
      return { type: "cim", rendererKey: t2.vvFlags, data: e3.data, maxVVSize: t2.maxVVSize };
    case "CIMSymbolReference":
      return { type: "cim", rendererKey: t2.vvFlags, data: e3, maxVVSize: t2.maxVVSize };
    case "web-style":
      return { ...s$1(e3), type: "web-style", hash: e3.hash(), rendererKey: t2.vvFlags, maxVVSize: t2.maxVVSize };
    default:
      throw new Error(`symbol not supported ${e3.type}`);
  }
}
function m$2(e3, r2, l2) {
  const n3 = e3.toJSON(), s2 = f$1(E$2.LABEL, { ...r2, placement: n3.labelPlacement });
  return { materialKey: l2 ? o(s2) : s2, hash: e3.hash(), ...n3, labelPlacement: n3.labelPlacement };
}
function c$1(e3, r2, n3) {
  const i3 = f$1(E$2.FILL, r2), m3 = n3 ? o(i3) : i3, c2 = e3.clone(), y2 = c2.outline, h3 = _$1(r2.symbologyType);
  h3 || (c2.outline = null);
  const u2 = { materialKey: m3, hash: c2.hash(), ...s$1(c2) };
  if (h3)
    return u2;
  const p2 = [];
  if (p2.push(u2), y2) {
    const e4 = f$1(E$2.LINE, { ...r2, isOutline: true }), l2 = { materialKey: n3 ? o(e4) : e4, hash: y2.hash(), ...s$1(y2) };
    p2.push(l2);
  }
  return { type: "composite-symbol", layers: p2, hash: p2.reduce((e4, t2) => t2.hash + e4, "") };
}
function y(e3, n3, i3) {
  const m3 = _$1(n3.symbologyType) ? S$2.DEFAULT : n3.symbologyType, c2 = f$1(E$2.LINE, { ...n3, symbologyType: m3 }), y2 = i3 ? o(c2) : c2, h3 = e3.clone(), u2 = h3.marker;
  h3.marker = null;
  const p2 = [];
  if (p2.push({ materialKey: y2, hash: h3.hash(), ...s$1(h3) }), u2) {
    const e4 = f$1(E$2.MARKER, n3), r2 = i3 ? o(e4) : e4;
    u2.color = u2.color ?? h3.color, p2.push({ materialKey: r2, hash: u2.hash(), lineWidth: h3.width, ...s$1(u2) });
  }
  return { type: "composite-symbol", layers: p2, hash: p2.reduce((e4, t2) => t2.hash + e4, "") };
}
function h$2(r2, l2, n3) {
  if ("simple-marker" === r2.type && ("path" === r2.style || r2.outline && "solid" !== r2.outline.style && "none" !== r2.outline.style)) {
    return i$1({ type: "CIMSymbolReference", symbol: ne.fromSimpleMarker(r2) }, l2, n3);
  }
  const m3 = f$1(E$2.MARKER, l2), c2 = n3 ? o(m3) : m3, y2 = s$1(r2);
  return { materialKey: c2, hash: r2.hash(), ...y2, angle: r2.angle, maxVVSize: l2.maxVVSize };
}
function u$1(e3, r2, l2) {
  const n3 = f$1(E$2.TEXT, r2), i3 = l2 ? o(n3) : n3, m3 = s$1(e3);
  return { materialKey: i3, hash: e3.hash(), ...m3, angle: e3.angle, maxVVSize: r2.maxVVSize };
}
const createSymbolSchema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createSymbolSchema: i$1
}, Symbol.toStringTag, { value: "Module" }));
function m$1(t2, e3) {
  if (!("visualVariables" in t2))
    return 0;
  if (!t2.hasVisualVariables("size"))
    return 0;
  const r2 = t2.getVisualVariablesForType("size");
  if (!r2[0])
    return 0;
  const i3 = r2[0];
  if (e3 && "cluster_count" === i3.field && "cluster" === e3.type)
    return e3.clusterMaxSize;
  if ("outline" === i3.target)
    return 0;
  if ("stops" === i3.transformationType)
    return i3.stops.map((t3) => t3.size).reduce(g$1, 0);
  if ("clamped-linear" === i3.transformationType) {
    let t3 = -1 / 0, e4 = -1 / 0;
    return t3 = "number" == typeof i3.maxSize ? i3.maxSize : i3.maxSize.stops.map((t4) => t4.size).reduce(g$1, 0), e4 = "number" == typeof i3.minSize ? i3.minSize : i3.minSize.stops.map((t4) => t4.size).reduce(g$1, 0), Math.max(t3, e4);
  }
  return "real-world-size" === i3.transformationType ? 30 : void 0;
}
function g$1(t2, e3) {
  return Math.max(t2, e3);
}
const s = 8, l = s - 2, a2 = s$5.getLogger("esri.views.2d.layers.features.support.rendererUtils"), n2 = (e3) => {
  if (!("visualVariables" in e3) || !e3.visualVariables?.length)
    return e3;
  const r2 = e3.clone(), t2 = r2.visualVariables.map((e4) => u(e4) ? p(e4) : e4);
  return r2.visualVariables = t2, r2;
};
function i2(e3) {
  return e3.map((e4) => u(e4) ? p(e4.clone()) : e4);
}
function u(e3) {
  return ("size" === e3.type || "color" === e3.type || "opacity" === e3.type) && null != e3.stops;
}
function p(e3) {
  return e3.stops = m2(e3.type, e3.stops ?? []), e3;
}
function c(e3, r2, t2) {
  return (1 - t2) * e3 + t2 * r2;
}
function f(e3, r2) {
  const [o2, ...s2] = r2, a3 = s2.pop(), n3 = s2[0].value, i3 = s2[s2.length - 1].value, u2 = (i3 - n3) / l, p2 = [];
  for (let l2 = n3; l2 < i3; l2 += u2) {
    let o3 = 0;
    for (; l2 >= s2[o3].value; )
      o3++;
    const a4 = s2[o3], n4 = r2[o3 - 1], i4 = l2 - n4.value, u3 = a4.value === n4.value ? 1 : i4 / (a4.value - n4.value);
    if ("color" === e3) {
      const e4 = s2[o3], t2 = r2[o3 - 1], a5 = e4.color.clone();
      a5.r = c(t2.color.r, a5.r, u3), a5.g = c(t2.color.g, a5.g, u3), a5.b = c(t2.color.b, a5.b, u3), a5.a = c(t2.color.a, a5.a, u3), p2.push({ value: l2, color: a5, label: e4.label });
    } else if ("size" === e3) {
      const e4 = s2[o3], a5 = r2[o3 - 1], n5 = o$2(e4.size), i5 = c(o$2(a5.size), n5, u3);
      p2.push({ value: l2, size: i5, label: e4.label });
    } else {
      const e4 = s2[o3], t2 = c(r2[o3 - 1].opacity, e4.opacity, u3);
      p2.push({ value: l2, opacity: t2, label: e4.label });
    }
  }
  return [o2, ...p2, a3];
}
function b(e3) {
  const [r2, ...t2] = e3, o2 = t2.pop();
  for (; t2.length > l; ) {
    let e4 = 0, r3 = 0;
    for (let o3 = 1; o3 < t2.length; o3++) {
      const s2 = t2[o3 - 1], l2 = t2[o3], a3 = Math.abs(l2.value - s2.value);
      a3 > r3 && (r3 = a3, e4 = o3);
    }
    t2.splice(e4, 1);
  }
  return [r2, ...t2, o2];
}
function m2(e3, r2) {
  return r2.length <= s ? r2 : (a2.warn(`Found ${r2.length} Visual Variable stops, but MapView only supports ${s}. Displayed stops will be simplified.`), r2.length > 2 * s ? f(e3, r2) : b(r2));
}
function g() {
  if (has("heatmap-force-raster"))
    return "raster";
  const { supportsTextureFloat: e3, supportsTextureHalfFloat: r2, supportsColorBufferFloat: t2, supportsColorBufferFloatBlend: s2, supportsColorBufferHalfFloat: l2 } = n$3("2d");
  return e3 && t2 && s2 || r2 && l2 ? "symbol" : has("heatmap-allow-raster-fallback") ? "raster" : "none";
}
function h$1(r2) {
  if (!r2)
    return true;
  switch (r2.type) {
    case "dot-density":
      if (!n$3("2d").supportsTextureFloat)
        return a2.error(new s$6("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), false;
      break;
    case "heatmap": {
      const r3 = g();
      if ("none" === r3 || "raster" === r3 && !has("heatmap-force-raster")) {
        const t2 = n$3("2d"), s2 = ["supportsTextureFloat", "supportsTextureHalfFloat", "supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e3) => !t2[e3]).join(", ");
        if ("none" === r3)
          return a2.errorOnce(new s$6("webgl-missing-extension", `Missing WebGL${t2.type} requirements for Heatmap: ${s2}`)), false;
        "raster" === r3 && a2.warnOnce(`Missing WebGL${t2.type} requirements for accelerated Heatmap: ${s2}. Feature support may be limited.`);
      }
      break;
    }
  }
  return true;
}
const x = s$5.getLogger("esri.views.2d.layers.features.schemaUtils"), h2 = "ValidationError";
function v(e3) {
  return e3;
}
function T(e$12, t2) {
  let r2 = 0, i3 = 0, n3 = S$2.DEFAULT;
  if (null != e$12) {
    if (i3 = m$1(e$12, t2), "visualVariables" in e$12 && (r2 = e2(e$12.visualVariables || []), "dot-density" === e$12.type && (n3 = S$2.DOT_DENSITY)), "heatmap" === e$12.type && (n3 = S$2.HEATMAP), "dictionary" === e$12.type)
      return { maxVVSize: i3, vvFlags: r2, symbologyType: S$2.DEFAULT };
    if ("pie-chart" === e$12.type)
      return { maxVVSize: i3, vvFlags: r2, symbologyType: S$2.PIE_CHART };
    if (n3 !== S$2.DOT_DENSITY && n3 !== S$2.HEATMAP) {
      const t3 = e$12.getSymbols();
      "backgroundFillSymbol" in e$12 && e$12.backgroundFillSymbol && t3.push(e$12.backgroundFillSymbol);
      let r3 = true, i4 = true;
      for (const e3 of t3)
        if ("cim" !== e3.type && "web-style" !== e3.type || (i4 = false), "simple-fill" === e3.type || "picture-fill" === e3.type) {
          const t4 = e3.outline, n4 = t4 && "none" !== t4.style && "solid" !== t4.style, s2 = "simple-fill" === e3.type && "none" !== e3.style && "solid" !== e3.style;
          n4 && (r3 = false), ("picture-fill" === e3.type || s2 || n4) && (i4 = false);
        }
      r3 ? n3 = i4 ? S$2.OUTLINE_FILL_SIMPLE : S$2.OUTLINE_FILL : i4 && (n3 = S$2.SIMPLE);
    }
  }
  return { vvFlags: r2, maxVVSize: i3, symbologyType: n3 };
}
let S$1 = null;
function w(e3) {
  if (has("esri-2d-update-debug")) {
    const t2 = E$1(e3, true);
    console.debug("Created new schema", t2), console.debug("Schema diff", a$2(S$1, t2)), S$1 = t2;
  }
  return E$1(e3);
}
function E$1(e3, t2 = false) {
  try {
    const r2 = R(e3, t2), i3 = D(e3), s2 = {};
    r2.map((t3) => F(s2, e3, t3));
    const l2 = null != e3.subtypeCode ? `${e3.subtypeField} = ${e3.subtypeCode}` : null, o2 = n$4(e3.definitionExpression, l2);
    return { source: { definitionExpression: o2, fields: e3.fields.map((e4) => e4.toJSON()), gdbVersion: e3.gdbVersion, historicMoment: e3.historicMoment?.getTime(), outFields: e3.availableFields, pixelBuffer: e3.pixelBuffer, spatialReference: e3.spatialReference.toJSON(), timeExtent: e3.timeExtent?.toJSON(), customParameters: e3.customParameters }, attributes: { fields: {}, indexCount: 0 }, processors: r2, tileRenderer: i3, targets: s2 };
  } catch (r2) {
    if (r2.fieldName === h2)
      return x.error(r2), null;
    throw r2;
  }
}
function F(e3, r2, i3) {
  switch (i3.target) {
    case "feature":
      return void O(e3, V(r2), i3);
    case "aggregate": {
      if (!("featureReduction" in r2))
        return;
      const n3 = r2.featureReduction;
      switch (n3?.type) {
        case "selection":
          throw new s$6(h2, "Mapview does not support `selection` reduction type", n3);
        case "binning":
          return O(e3, V(r2), i3), void N(e3, n3, r2.fields.map((e4) => e4.toJSON()), i3);
        case "cluster":
          return O(e3, V(r2), i3), void L(e3, n3, r2.fields.map((e4) => e4.toJSON()), i3);
      }
    }
  }
}
function I(e3, t2) {
  for (const r2 in t2) {
    const i3 = t2[r2];
    if (i3.target !== e3.name)
      continue;
    const n3 = e3.attributes[r2];
    if (n3?.context) {
      const e4 = n3.context;
      e4.mesh = e4.mesh || i3.context?.mesh, e4.storage = e4.storage || i3.context?.storage;
    } else
      e3.attributes[r2] = i3;
  }
  return e3;
}
function V(e3) {
  return [e3.filter?.toJSON() ?? null, e3.featureEffect?.filter?.toJSON() ?? null];
}
function O(e3, t2, r2) {
  return e3.feature || (e3.feature = { name: "feature", input: "source", filters: t2, attributes: {} }), I(e3.feature, r2.attributes.fields), e3;
}
function z(e3, r2) {
  const { onStatisticExpression: i3, onStatisticField: n3, statisticType: s2 } = e3;
  switch (s2) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (i3) {
        const { returnType: r3 } = i3;
        return r3 ? "string" === r3 ? "esriFieldTypeString" : "esriFieldTypeDouble" : (x.error(new s$6(h2, "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined", e3)), "esriFieldTypeString");
      }
      const s3 = r2.find((e4) => e4.name === n3);
      return s3 ? s3.type : (x.error(new s$6(h2, "Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined", e3)), "esriFieldTypeString");
    }
  }
}
function N(e3, t2, r2, i3) {
  return e3.aggregate || (e3.aggregate = { name: "aggregate", type: "bin", filters: null, input: "feature", params: { fixedBinLevel: t2.fixedBinLevel, fields: (t2.fields ?? []).map((e4) => ({ ...e4.toJSON(), type: z(e4, r2) })) }, attributes: {} }), I(e3.aggregate, i3.attributes.fields), e3;
}
function L(e3, t2, r2, n3) {
  const s2 = n3.aggregateFields ?? [], l2 = /* @__PURE__ */ new Set();
  for (const i3 of s2)
    l2.add(i3.name);
  for (const i3 of t2?.fields ?? [])
    l2.has(i3.name) || s2.push(i3);
  return e3.aggregate || (e3.aggregate = { name: "aggregate", type: "cluster", input: "feature", filters: null, attributes: {}, params: { clusterRadius: u$2(t2.clusterRadius / 2), clusterPixelBuffer: 64 * Math.ceil(u$2(t2.clusterMaxSize) / 64), fields: s2.map((e4) => ({ ...e4.toJSON(), type: z(e4, r2) })) } }), I(e3.aggregate, n3.attributes.fields), e3;
}
function M(e3, t2) {
  return t2.field ? j$1(e3, { ...t2, type: "field", field: t2.field }) : t2.valueExpression ? j$1(e3, { ...t2, type: "expression", valueExpression: t2.valueExpression }) : { field: void 0, fieldIndex: void 0 };
}
function j$1(e3, t2) {
  switch (t2.type) {
    case "expression": {
      const r2 = v(t2.valueExpression);
      if (!e3.fields[r2]) {
        const i3 = e3.indexCount++;
        e3.fields[r2] = { ...t2, name: r2, fieldIndex: i3 };
      }
      return { fieldIndex: e3.fields[r2].fieldIndex };
    }
    case "label-expression": {
      const r2 = v(JSON.stringify(t2.label));
      if (!e3.fields[r2]) {
        const i3 = e3.indexCount++;
        e3.fields[r2] = { ...t2, name: r2, fieldIndex: i3 };
      }
      return { fieldIndex: e3.fields[r2].fieldIndex };
    }
    case "field": {
      const r2 = t2.field;
      return "aggregate" === t2.target && e3.fields[r2] || (e3.fields[r2] = { ...t2, name: r2 }), { field: r2 };
    }
    case "statistic":
      return e3.fields[t2.name] = { ...t2 }, { field: t2.name };
  }
}
function R(e3, t2 = false) {
  const r2 = new Array();
  let i3 = 0;
  return r2.push(A$1(e3, i3++, t2)), r2;
}
function U(e3, t2, r2, i3, n3, s2 = false) {
  const l2 = j$1(e3, { type: "label-expression", target: r2, context: { mesh: true }, resultType: "string", label: { labelExpression: t2.labelExpression, labelExpressionInfo: t2.labelExpressionInfo ? { expression: t2.labelExpressionInfo.expression } : null, symbol: !!t2.symbol, where: t2.where } }), { fieldIndex: o2 } = l2;
  return { ...i$1(t2, n3, s2), fieldIndex: o2, target: r2, index: i3 };
}
function B(e3, r2, i3) {
  const n3 = "featureReduction" in r2 && r2.featureReduction;
  if (!n3)
    return { fields: [], labels: [], matcher: void 0, rendererOverride: void 0 };
  const s2 = "aggregate", o2 = [];
  let a3 = null, u2 = e$3(r2.geometryType), d = [], p2 = null;
  if (n3)
    switch (n3.type) {
      case "selection":
        return x.error(new s$6(h2, "Mapview does not support `selection` reduction type", n3)), { fields: [], labels: [], matcher: void 0, rendererOverride: void 0 };
      case "cluster":
      case "binning":
        if (o2.push(...n3.fields ?? []), "cluster" === n3.type ? u2 = "esriGeometryPoint" : "binning" === n3.type && (u2 = "esriGeometryPolygon"), n3.renderer && !n3.renderer.authoringInfo?.isAutoGenerated) {
          if ("cluster" === n3.type) {
            const { renderer: e4 } = f$2(n3.renderer, n3, null);
            p2 = e4;
          } else
            p2 = n3.renderer;
          const t2 = T(n3.renderer, n3);
          a3 = _(e3, s2, n3.renderer, t2, i3), d = n3 && n3.labelsVisible && n3.labelingInfo || [];
        } else if ("cluster" === n3.type) {
          if (p2 = c$5(o2, r2.renderer, n3, null, true), n3.symbol) {
            const e4 = T(p2, n3);
            a3 = { type: "simple", symbol: i$1(n3.symbol, e4, i3), symbologyType: e4.symbologyType };
          }
          d = n3 && n3.labelsVisible && n3.labelingInfo || [];
        }
    }
  k(e3, o2);
  return { labels: c$3(d, "binning" === n3.type ? "esriGeometryPolygon" : u2), matcher: a3, fields: o2, rendererOverride: p2 };
}
function A$1(e$12, r2, i3 = false) {
  const n3 = { indexCount: 0, fields: {} }, s2 = "featureReduction" in e$12 ? e$12.featureReduction ?? void 0 : void 0, a3 = s2 ? "aggregate" : "feature";
  if ("sublayers" in e$12) {
    const r3 = { type: "subtype", subtypeField: e$12.subtypeField, renderers: {}, symbologyType: S$2.DEFAULT }, s3 = { type: "subtype", mapping: {}, target: "feature", subtypeField: e$12.subtypeField }, l2 = { type: "subtype", classes: {} }, u3 = { type: "symbol", target: "feature", aggregateFields: [], attributes: n3, storage: s3, mesh: { matcher: r3, aggregateMatcher: null, labels: l2, sortKey: null } }, f3 = /* @__PURE__ */ new Set();
    let p3 = 0;
    for (const { renderer: c2, subtypeCode: y3, labelingInfo: m4, labelsVisible: g2 } of e$12.sublayers) {
      let e$13 = 0;
      "visualVariables" in c2 && c2.visualVariables && (c2.visualVariables.some((e3) => "rotation" !== e3.type) && x.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."), e$13 = e2(c2.visualVariables.filter((e3) => "size" !== e3.type)));
      const u4 = { symbologyType: S$2.DEFAULT, vvFlags: e$13, maxVVSize: 0 }, b2 = _(n3, a3, c2, u4, i3), v3 = C(n3, a3, c2), T2 = g2 && m4;
      if ("dictionary" === b2.type)
        throw new s$6(h2, "Dictionary renderer is not supported in subtype layers");
      if ("subtype" === b2.type)
        throw new s$6(h2, "Nested subtype renderers is not supported");
      if (null != v3 && "subtype" === v3.type)
        throw new s$6(h2, "Nested subtype storage is not supported");
      if (null != v3?.attributeMapping)
        throw new s$6(h2, "Non-visual-variable attributes are not supported in subtype layers");
      if ("heatmap" === b2.type)
        throw new s$6(h2, "Heatmaps are not supported in subtype layers");
      if ("pie-chart" === b2.type)
        throw new s$6(h2, "Pie-charts are not supported in subtype layers");
      if (f3.has(y3))
        throw new s$6(h2, "Subtype codes for sublayers must be unique");
      f3.add(y3), r3.renderers[y3] = b2, s3.mapping[y3] = v3, T2 && (l2.classes[y3] = T2.map((e3) => U(n3, e3, "feature", p3++, u4, i3)));
    }
    return u3;
  }
  if ("heatmap" === e$12.renderer?.type && "raster" === g()) {
    const { radius: t2, fieldOffset: r3, field: i4 } = e$12.renderer;
    return { type: "heatmap", aggregateFields: [], attributes: n3, target: a3, storage: null, mesh: { radius: t2, fieldOffset: r3, field: M(n3, { target: a3, field: i4, resultType: "numeric" }).field } };
  }
  const u2 = B(n3, e$12, i3), f2 = e$3(e$12.geometryType), p2 = u2.rendererOverride ?? e$12.renderer, y2 = T(p2, s2), m3 = _(n3, a3, p2, y2, i3), g$12 = C(n3, a3, p2), v2 = P(n3, e$12.orderBy, e$12.renderer, s2), S2 = e$12.labelsVisible && e$12.labelingInfo || [], w2 = c$3(S2, f2);
  let E2 = 0;
  const F2 = [...w2.map((e3) => U(n3, e3, "feature", E2++, y2, i3)), ...u2.labels.map((e3) => U(n3, e3, "aggregate", E2++, y2, i3))];
  return { type: "symbol", target: a3, attributes: n3, aggregateFields: u2.fields, storage: g$12, mesh: { matcher: m3, labels: { type: "simple", classes: F2 }, aggregateMatcher: u2.matcher, sortKey: v2 } };
}
function D(e3) {
  return "heatmap" === e3.renderer?.type && "raster" === g() ? { type: "heatmap" } : { type: "symbol" };
}
function P(e3, r2, i3, n3) {
  if (null != n3)
    return null;
  if (null != r2 && r2.length) {
    r2.length > 1 && x.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r2.length}. All but the first will be discarded`);
    const i4 = r2[0], n4 = "ascending" === i4.order ? "asc" : "desc";
    if (i4.field)
      return { field: i4.field, order: n4 };
    if (i4.valueExpression) {
      return { fieldIndex: j$1(e3, { type: "expression", target: "feature", valueExpression: i4.valueExpression, resultType: "numeric" }).fieldIndex, order: n4 };
    }
    return x.error(new s$6(h2, "Expected to find a field or valueExpression for OrderByInfo", i4)), null;
  }
  if (null != i3 && "unique-value" === i3.type && i3.orderByClassesEnabled) {
    return { byRenderer: true, order: "asc" };
  }
  return null;
}
function k(e3, t2) {
  const r2 = { mesh: true, storage: true };
  for (const i3 of t2) {
    const { name: t3, onStatisticField: n3, onStatisticExpression: s2, statisticType: l2 } = i3;
    let o2, a3;
    const u2 = "numeric", d = "feature";
    if (s2) {
      a3 = j$1(e3, { type: "expression", target: d, valueExpression: s2.expression, resultType: u2 }).fieldIndex;
    } else {
      o2 = j$1(e3, { type: "field", target: d, field: n3 }).field;
    }
    j$1(e3, { type: "statistic", target: "aggregate", name: t3, context: r2, inField: o2, inFieldIndex: a3, statisticType: l2 });
  }
}
function C(e3, t2, r2) {
  let i3;
  switch (r2.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      i3 = { visualVariables: true, attributes: null };
      break;
    default:
      i3 = c$4(r2).getStorageSpec(r2);
  }
  return J(e3, t2, i3, r2);
}
function J(e3, t2, r2, i3) {
  if (null == r2)
    return null;
  const { visualVariables: n3, attributes: s2 } = r2;
  let l2 = null;
  n3 && "visualVariables" in i3 && (l2 = q(e3, t2, i3.visualVariables));
  const o2 = null != l2 ? 4 : 0;
  let a3 = null;
  return null != s2 && (a3 = s2.map((r3, i4) => {
    const { field: n4, fieldIndex: s3 } = M(e3, { valueExpression: r3.valueExpression, field: r3.field, resultType: "numeric", target: t2 });
    return { binding: i4 + o2, field: n4, fieldIndex: s3 };
  })), { type: "simple", target: t2, attributeMapping: a3, vvMapping: l2 };
}
function q(t2, r2, i$12) {
  if (!i$12?.length)
    return [];
  const n3 = { storage: true }, s2 = "numeric";
  return i2(i$12).map((e3) => {
    const i3 = V$1(e3.type), { field: l2, fieldIndex: o2 } = M(t2, { target: r2, valueExpression: e3.valueExpression, field: e3.field, context: n3, resultType: s2 });
    switch (e3.type) {
      case "size":
        return "$view.scale" === e3.valueExpression ? null : { type: "size", binding: i3, field: l2, fieldIndex: o2, normalizationField: M(t2, { target: r2, field: e3.normalizationField, context: n3, resultType: s2 }).field, valueRepresentation: e3.valueRepresentation ?? null };
      case "color":
        return { type: "color", binding: i3, field: l2, fieldIndex: o2, normalizationField: M(t2, { target: r2, field: e3.normalizationField, context: n3, resultType: s2 }).field };
      case "opacity":
        return { type: "opacity", binding: i3, field: l2, fieldIndex: o2, normalizationField: M(t2, { target: r2, field: e3.normalizationField, context: n3, resultType: s2 }).field };
      case "rotation":
        return { type: "rotation", binding: i3, field: l2, fieldIndex: o2 };
    }
  }).filter(k$1);
}
function _(e3, t2, r2, i3, n3 = false) {
  const s2 = e3 ?? { indexCount: 0, fields: {} };
  switch (r2.type) {
    case "simple":
    case "dot-density":
      return G(s2, r2, i3, n3);
    case "class-breaks":
      return $(s2, t2, r2, i3, n3);
    case "unique-value":
      return K(s2, t2, r2, i3, n3);
    case "dictionary":
      return Y(s2, r2, i3, n3);
    case "heatmap":
      return Q(s2, r2, i3, n3);
    case "pie-chart":
      return H(s2, r2, i3, n3);
  }
}
function G(e3, t2, r2, i3 = false) {
  const n3 = t2.getSymbols(), s2 = n3.length ? n3[0] : null;
  return { type: "simple", symbol: i$1(s2, r2, i3), symbologyType: r2.symbologyType };
}
function H(e3, t2, r2, i3 = false) {
  const n3 = t2.getSymbols(), s2 = n3[0], l2 = n3.length > 1 ? n3[1] : null;
  return { type: "pie-chart", markerSymbol: i$1(s2, r2, i3), fillSymbol: i$1(l2, r2, i3), symbologyType: r2.symbologyType };
}
function $(e3, t2, r2, i3, n3 = false) {
  const s2 = { mesh: true, use: "renderer.field" }, l2 = r2.backgroundFillSymbol, { field: o2, fieldIndex: a3 } = M(e3, { target: t2, field: r2.field, valueExpression: r2.valueExpression, resultType: "numeric", context: s2 }), u2 = r2.normalizationType, d = "log" === u2 ? "esriNormalizeByLog" : "percent-of-total" === u2 ? "esriNormalizeByPercentOfTotal" : "field" === u2 ? "esriNormalizeByField" : null, p2 = r2.classBreakInfos.map((e4) => ({ symbol: i$1(e4.symbol, i3, n3), min: e4.minValue, max: e4.maxValue })).sort((e4, t3) => e4.min - t3.min);
  return { type: "interval", attributes: e3.fields, field: o2, fieldIndex: a3, backgroundFillSymbol: i$1(l2, i3, n3), defaultSymbol: i$1(r2.defaultSymbol, i3, n3), intervals: p2, normalizationField: r2.normalizationField, normalizationTotal: r2.normalizationTotal, normalizationType: d, isMaxInclusive: r2.isMaxInclusive, symbologyType: i3.symbologyType };
}
function K(e3, r2, i3, n3, s2 = false) {
  const l2 = [], o2 = i3.backgroundFillSymbol, a3 = { target: r2, context: { mesh: true }, resultType: "string" };
  if (i3.field && "string" != typeof i3.field)
    throw new s$6(h2, "Expected renderer.field to be a string", i3);
  const { field: u2, fieldIndex: d } = M(e3, { ...a3, field: i3.field, valueExpression: i3.valueExpression });
  for (const t2 of i3.uniqueValueInfos ?? [])
    l2.push({ value: "" + t2.value, symbol: i$1(t2.symbol, n3, s2) });
  return { type: "map", attributes: e3.fields, field: u2, fieldIndex: d, field2: M(e3, { ...a3, field: i3.field2 }).field, field3: M(e3, { ...a3, field: i3.field3 }).field, fieldDelimiter: i3.fieldDelimiter ?? void 0, backgroundFillSymbol: i$1(o2, n3), defaultSymbol: i$1(i3.defaultSymbol, n3), map: l2, symbologyType: n3.symbologyType };
}
function Y(e3, t2, r2, i3 = false) {
  return { type: "dictionary", config: t2.config, fieldMap: t2.fieldMap, scaleExpression: t2.scaleExpression, url: t2.url, symbolOptions: r2, symbologyType: r2.symbologyType };
}
function Q(e3, t2, r2, i3 = false) {
  const n3 = t2.getSymbols(), s2 = n3.length ? n3[0] : null;
  return { type: "heatmap", symbol: i$1(s2, r2, i3), symbologyType: r2.symbologyType };
}
const E = s$5.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"), S = n$5(l$2, E);
class A {
  constructor(t2, e3, i3) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s2, pixelType: r2, textureOnly: a3 } = t2, n3 = W(r2);
    this.shared = i3, this.pixelType = r2, this.size = e3, this.textureOnly = a3, a3 || (this.data = new n3(s2)), this._resetRange();
  }
  destroy() {
    this._texture?.dispose();
    for (const t2 in this._fbos) {
      const e3 = this._fbos[t2];
      e3 && ("0" === t2 && e3.detachColorTexture(), e3.dispose()), this._fbos[t2] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t2 = new e$4();
    return t2.wrapMode = D$1.CLAMP_TO_EDGE, t2.samplingMode = L$2.NEAREST, t2.dataType = this.pixelType, t2.width = this.size, t2.height = this.size, t2;
  }
  setData(t2, e3, i3) {
    const s2 = f$3(t2), r2 = this.data, a3 = s2 * this.texelSize + e3;
    !r2 || a3 >= r2.length || (r2[a3] = i3, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t2, e3) {
    if (null == this.data)
      return null;
    const i3 = f$3(t2) * this.texelSize + e3;
    return !this.data || i3 >= this.data.length ? null : this.data[i3];
  }
  getTexture(t2) {
    return this._texture ?? this._initTexture(t2);
  }
  getFBO(t2, e3 = 0) {
    if (!this._fbos[e3]) {
      const i3 = 0 === e3 ? this.getTexture(t2) : this._textureDesc;
      this._fbos[e3] = new E$4(t2, i3);
    }
    return this._fbos[e3];
  }
  get locked() {
    return !(this.pixelType !== U$2.UNSIGNED_BYTE || !this.shared || this.textureOnly || !has("esri-atomics") || !this.data) && 1 === Atomics.load(this.data, 0);
  }
  get hasDirty() {
    const t2 = this.dirtyStart;
    return this.dirtyEnd >= t2;
  }
  updateTexture(e3, i3) {
    if (!this.locked) {
      try {
        const i4 = this.dirtyStart, s2 = this.dirtyEnd;
        if (!this.hasDirty)
          return;
        this._resetRange();
        const r2 = this.data.buffer, a3 = this.getTexture(e3), n3 = 4, d = (i4 - i4 % this.size) / this.size, h3 = (s2 - s2 % this.size) / this.size, u2 = d, o2 = this.size, l2 = h3, p2 = d * this.size * n3, x2 = (o2 + l2 * this.size) * n3 - p2, _2 = W(this.pixelType), c2 = new _2(r2, p2 * _2.BYTES_PER_ELEMENT, x2), f2 = this.size, T2 = l2 - u2 + 1;
        if (T2 > this.size)
          return void E.error(new s$6("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
        a3.updateData(0, 0, u2, f2, T2, c2);
      } catch (s2) {
      }
      i3();
    }
  }
  update(t2) {
    const { data: e3, start: i3, end: s2 } = t2;
    if (null != e3 && null != this.data) {
      const s3 = this.data, r2 = i3 * this.texelSize;
      for (let i4 = 0; i4 < e3.length; i4++) {
        const a3 = 1 << i4 % this.texelSize;
        t2.layout & a3 && (s3[r2 + i4] = e3[i4]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i3), this.dirtyEnd = Math.max(this.dirtyEnd, s2);
  }
  resize(t2, e3) {
    const i3 = this.size;
    if (this.size = e3, this.textureOnly)
      return void (i3 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = W(this.pixelType);
    this.destroy(), this.data = new s2(t2.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t2) {
    const e3 = new T$1(t2, this._textureDesc, this.data ?? void 0);
    if (null != this._lastTexture && this._fbos[0]) {
      const i3 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r2 = this._lastTexture.descriptor.dataType, a3 = this._lastTexture.descriptor.pixelFormat, n3 = this.getFBO(t2), d = K$2(r2), h3 = new (W(r2))(new ArrayBuffer(i3 * s2 * d * this.texelSize)), u2 = t2.getBoundFramebufferObject(), { x: o2, y: l2, width: p2, height: x2 } = t2.getViewport();
      t2.bindFramebuffer(n3), n3.readPixels(0, 0, i3, s2, a3, r2, h3), e3.updateData(0, 0, 0, 2 * i3, s2 / 2, h3), t2.setViewport(o2, l2, p2, x2), t2.bindFramebuffer(u2);
    }
    return this.destroy(), this._texture = e3, this._texture;
  }
}
class j {
  constructor(t2) {
    this._onUpdate = t2, this._initialized = false, this._forceNextUpload = false, this._locked = false;
  }
  initialize(t2) {
    const { blocks: e3, shared: i3, size: s2 } = t2;
    if (this.shared = i3, this.size = s2, S("Initializing AttributeStoreView", t2), null == this._data)
      this._data = e3.map((t3) => null != t3 ? new A(t3, s2, i3) : null);
    else
      for (let r2 = 0; r2 < this._data.length; r2++) {
        const t3 = this._data[r2], a3 = e3[r2];
        null != a3 && (null == t3 ? this._data[r2] = new A(a3, s2, i3) : t3.resize(a3, s2));
      }
    this._initialized = true;
  }
  destroy() {
    for (const t2 of this._data ?? [])
      t2?.destroy();
    this._defaultTexture?.dispose();
  }
  isEmpty() {
    return null == this._data;
  }
  isUpdating() {
    const t2 = null != this._pendingAttributeUpdate, e3 = t2;
    return has("esri-2d-log-updating") && console.log(`Updating AttributeStoreView ${e3}
  -> hasPendingUpdate ${t2}`), e3;
  }
  getBlock(t2) {
    if (null == this._data)
      return null;
    return this._data[t2];
  }
  setLabelMinZoom(t2, e3) {
    this.setData(t2, 0, 1, e3);
  }
  getLabelMinZoom(t2) {
    return this.getData(t2, 0, 1, 255);
  }
  getFilterFlags(t2) {
    return this.getData(t2, 0, 0, 0);
  }
  getVVSize(t2) {
    return this.getData(t2, S$3, 0, 0);
  }
  getData(t2, e3, i3, s2) {
    if (!this._data)
      return 0;
    const r2 = this._data[e3];
    if (null == r2)
      return 0;
    const a3 = r2.getData(t2, i3);
    return null != a3 ? a3 : s2;
  }
  setData(t2, e3, i3, s2) {
    this._data[e3].setData(t2, i3, s2);
  }
  lockTextureUpload() {
    this._locked = true;
  }
  unlockTextureUpload() {
    this._locked = false;
  }
  forceTextureUpload() {
    this._forceNextUpload = true;
  }
  async requestUpdate(e3) {
    if (this._pendingAttributeUpdate)
      return void E.error(new s$6("mapview-webgl", "Tried to update attribute data with a pending update"));
    const s2 = C$1();
    return S("AttributeStoreView Update Requested", e3), this._pendingAttributeUpdate = { data: e3, resolver: s2 }, this._onUpdate(), s2.promise;
  }
  update() {
    if (this._initialized && null != this._pendingAttributeUpdate) {
      has("esri-2d-update-debug") && console.debug("AttributeStoreView::update");
      const { data: t2, resolver: e3 } = this._pendingAttributeUpdate, i3 = this._data;
      for (let s2 = 0; s2 < t2.blocks.length; s2++) {
        const e4 = t2.blocks[s2], r2 = i3[s2];
        null != r2 && null != e4 && (S(`Updating block ${s2}`, e4), r2.update(e4));
      }
      this._pendingAttributeUpdate = null, e3(), this._onUpdate();
    }
  }
  bindTextures(t2, e3 = true) {
    const i3 = this._getDefaultTexture(t2);
    if (!this._initialized)
      return t2.bindTexture(i3, E$3), void (e3 && (t2.bindTexture(i3, F$1), t2.bindTexture(i3, G$1), t2.bindTexture(i3, H$1), t2.bindTexture(i3, I$1), t2.bindTexture(i3, J$1), t2.bindTexture(i3, K$1)));
    const c2 = this._data;
    if (!this._locked || this._forceNextUpload) {
      for (const e4 of c2)
        e4?.updateTexture(t2, () => this._onUpdate());
      this._forceNextUpload = false;
    }
    t2.bindTexture(c2[P$1]?.getTexture(t2) ?? i3, E$3), e3 && (t2.bindTexture(c2[R$1]?.getTexture(t2) ?? i3, K$1), t2.bindTexture(c2[Q$1]?.getTexture(t2) ?? i3, F$1), t2.bindTexture(c2[S$3]?.getTexture(t2) ?? i3, G$1), t2.bindTexture(c2[U$1]?.getTexture(t2) ?? i3, H$1), t2.bindTexture(c2[I$1]?.getTexture(t2) ?? i3, I$1), t2.bindTexture(c2[J$1]?.getTexture(t2) ?? i3, J$1));
  }
  _getDefaultTexture(t2) {
    if (null == this._defaultTexture) {
      const e3 = new e$4();
      e3.wrapMode = D$1.CLAMP_TO_EDGE, e3.samplingMode = L$2.NEAREST, e3.width = 1, e3.height = 1, this._defaultTexture = new T$1(t2, e3, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
export {
  T,
  _,
  a$1 as a,
  n2 as b,
  createSymbolSchema as c,
  h$1 as h,
  i$1 as i,
  j,
  m$3 as m,
  n$1 as n,
  r,
  w
};
