import { aM as s$2, c8 as E$2, tm as de, fV as e$4, Ad as R, Bk as fe, hA as c$6, Bl as x$8, Bm as w$5, h8 as u$8, Ac as U, Bn as w$6, lz as o$6, Bo as b$2, Bp as s$3, Bq as r$8, Br as n$4, Bs as i$7, Bt as o$7, Bu as t$4, Bv as me, bb as s$4, Bw as i$9, Bx as a$7, By as q$1, Bz as Z$2, BA as c$7, BB as o$8, BC as h$4, tj as n$5, eY as i$a, BD as N, c9 as S$3, tJ as n$6, tI as i$b, i0 as t$5, tL as e$5, hK as r$9, BE as z$4, AP as ae, B5 as n$7, AR as ce, BF as ne, BG as le, BH as pe, BI as we, BJ as xe, BK as o$9, BL as a$8, hS as t$7, BM as C$3, BN as w$7, i7 as $, BO as O, BP as b$3, i8 as e$7, BQ as k$4, BR as G$1, BS as ke, BT as je, BU as ge, h7 as t$8, BV as e$8, BW as c$9, BX as ue, BY as ve, BZ as i$c, B_ as h$5, B$ as ye, C0 as be, C1 as P$2, b7 as C$4, C2 as r$b, ca as f$7, C3 as s$5, C4 as y$7, bI as b$4, en as c$a, fZ as e$9, bX as k$5, oh as n$8, C5 as s$6 } from "./chunk-KFNcxJaF.js";
import { f as f$6, p as p$8 } from "./chunk-yIp_WHt0.js";
import { o as o$5 } from "./chunk-pjiN37wa.js";
import { r as r$a, c as c$8, i as i$d } from "./chunk-6KbR9szJ.js";
import { k as g$5, S as S$2, m as l$4, i as i$8, V, j as j$3 } from "./chunk-G90k0bzF.js";
import { a as a$6 } from "./chunk-ubi9cRRg.js";
import { c as e$6, t as t$6 } from "./chunk-ZLxFSCNp.js";
import { l as l$5 } from "./chunk-b-LoIQKK.js";
function e$3(e4, n2) {
  if (e4 && "name" in e4) {
    const o2 = e4;
    return n2 && n2.error(new s$2(o2.name, o2.message, o2.details)), false;
  }
  return true;
}
const t$3 = 1.25;
let e$2 = class e {
  get length() {
    return this._pos;
  }
  constructor(t2, e4) {
    this._pos = 0;
    const r6 = e4 ? this._roundToNearest(e4, t2.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(r6), this._buffer = new t2(this._array), this._ctor = t2, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(t2, e4) {
    const r6 = Math.round(t2);
    return 1 === e4 ? r6 : r6 + (e4 - r6 % e4);
  }
  _ensureSize(e4) {
    if (this._pos + e4 >= this._buffer.length) {
      const r6 = this._roundToNearest((this._array.byteLength + e4 * this._buffer.BYTES_PER_ELEMENT) * t$3, this._buffer.BYTES_PER_ELEMENT), s2 = new ArrayBuffer(r6), i2 = new this._ctor(s2);
      i2.set(this._buffer, 0), this._array = s2, this._buffer = i2, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t2) {
    this._ensureSize(t2);
  }
  writeF32(t2) {
    this._ensureSize(1);
    const e4 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t2, this._pos++, e4;
  }
  push(t2) {
    this._ensureSize(1);
    const e4 = this._pos;
    return this._buffer[this._pos++] = t2, e4;
  }
  writeFixed(t2) {
    this._buffer[this._pos++] = t2;
  }
  setValue(t2, e4) {
    this._buffer[t2] = e4;
  }
  i1616Add(t2, e4, r6) {
    this._i16View[2 * t2] += e4, this._i16View[2 * t2 + 1] += r6;
  }
  getValue(t2) {
    return this._buffer[t2];
  }
  incr(t2) {
    if (this._buffer.length < t2)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[t2]++;
  }
  decr(t2) {
    this._buffer[t2]--;
  }
  writeRegion(t2) {
    this._ensureSize(t2.length);
    const e4 = this._pos;
    return this._buffer.set(t2, this._pos), this._pos += t2.length, e4;
  }
  writeManyFrom(t2, e4, r6) {
    this._ensureSize(r6 - e4);
    for (let s2 = e4; s2 !== r6; s2++)
      this.writeFixed(t2._buffer[s2]);
  }
  buffer() {
    const t2 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t2;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(t2) {
    this._pos = t2;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};
const i$6 = /* @__PURE__ */ new Map();
function t$2(r6, t2, c2) {
  const { indicesPerRecord: s2, multiplier: o2, verticesPerRecord: d4 } = i$6.get(r6);
  return { recordBytes: c2 * de * Uint32Array.BYTES_PER_ELEMENT, indexBytes: o2 * s2 * c2 * Uint32Array.BYTES_PER_ELEMENT, vertexBytes: o2 * d4 * c2 * t2 };
}
i$6.set(E$2.MARKER, { multiplier: 1, indicesPerRecord: 6, verticesPerRecord: 4 }), i$6.set(E$2.LINE, { multiplier: 1, indicesPerRecord: 24, verticesPerRecord: 8 }), i$6.set(E$2.FILL, { multiplier: 1, indicesPerRecord: 10, verticesPerRecord: 10 }), i$6.set(E$2.TEXT, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 }), i$6.set(E$2.LABEL, { multiplier: 8, indicesPerRecord: 6, verticesPerRecord: 4 });
let r$7 = class r {
  constructor(e4, r6, i2) {
    this._start = { index: 0, vertex: 0 };
    const h2 = t$2(e4, r6, i2), c2 = r6 / 4;
    this.geometryType = e4, this._records = new e$2(Int32Array, h2.recordBytes), this._indices = new e$2(Uint32Array, h2.indexBytes), this._vertices = new e$2(Uint32Array, h2.vertexBytes), this._metrics = new e$2(Float32Array, 0), this._strideInt = c2;
  }
  serialize(e4) {
    const t2 = this._records.buffer(), s2 = this._indices.buffer(), r6 = this._vertices.buffer(), i2 = this._metrics.length ? this._metrics.buffer() : null, h2 = 4 * this._strideInt;
    return e4.push(t2, s2, r6), { stride: h2, records: t2, indices: s2, vertices: r6, metrics: i2 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get recordCount() {
    return this._records.length / de;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(e4) {
    this._vertices.ensureSize(e4);
  }
  indexEnsureSize(e4) {
    this._indices.ensureSize(e4);
  }
  recordStart() {
    this._start.index = this._indices.length, this._start.vertex = this._vertices.length;
  }
  recordEnd(e4, t2, s2, r6, i2, h2, c2, n2) {
    this._records.push(e4), this._records.push(t2 ?? 0), this._records.push(s2), this._records.push(r6), this._records.push(i2), this._records.push(h2), this._records.push(c2), this._records.writeF32(n2);
  }
  writeIndex(e4) {
    this._indices.push(e4);
  }
  writeVertex(e4) {
    this._vertices.push(e4);
  }
  writeVertexF32(e4) {
    this._vertices.writeF32(e4);
  }
  copyLastFrom(t2, s2, r6) {
    const i2 = t2._records.length - de, h2 = t2._records.getValue(i2), c2 = t2._records.getValue(i2 + 1), n2 = t2._records.getValue(i2 + 2), _2 = t2._records.getValue(i2 + 4), d4 = t2._records.getValue(i2 + 6), o2 = t2._records.getValue(i2 + 7), u2 = this._vertices.length, l2 = (t2._start.vertex - this._vertices.length) / this._strideInt, g3 = this._indices.length, p2 = this.vertexCount;
    for (let e4 = t2._start.index; e4 !== t2._indices.length; e4++) {
      const s3 = t2._indices.getValue(e4);
      this._indices.push(s3 - l2);
    }
    for (let e4 = t2._start.vertex; e4 !== t2._vertices.length; e4++) {
      const s3 = t2._vertices.getValue(e4);
      this._vertices.push(s3);
    }
    for (let e4 = u2; e4 <= this._vertices.length; e4 += this._strideInt)
      this._vertices.i1616Add(e4, s2, r6);
    this._records.push(h2), this._records.push(c2), this._records.push(n2), this._records.push(g3), this._records.push(_2), this._records.push(p2), this._records.push(d4), this._records.push(o2);
  }
};
const u$7 = 1, c$5 = 2, o$4 = 4, _$3 = 8, l$3 = 16, d$7 = 32, p$7 = 64, g$4 = 128;
function x$7(e4) {
  switch (e4) {
    case u$7:
    case _$3:
    case d$7:
      return -1;
    case c$5:
    case p$7:
      return 0;
    case o$4:
    case l$3:
    case g$4:
      return 1;
  }
}
function f$5(e4) {
  switch (e4) {
    case u$7:
    case c$5:
    case o$4:
      return -1;
    case _$3:
    case l$3:
      return 0;
    case d$7:
    case p$7:
    case g$4:
      return 1;
  }
}
const m$4 = u$7 | _$3 | d$7, y$6 = o$4 | l$3 | g$4, w$4 = u$7 | c$5 | o$4, v$4 = d$7 | p$7 | g$4;
let E$1 = class E {
  constructor(e4, t2, r6, i2, s2, n2 = 0) {
    this._hasAggregate = false, this.hasRecords = false, this._data = { self: /* @__PURE__ */ new Map(), neighbors: new Array() }, this._version = 0, this._current = { geometryType: 0, writer: null, overlaps: 0, start: 0, insertAfter: 0, sortKey: 0, id: 0, materialKey: 0, indexStart: 0, vertStart: 0, isDotDensity: false, bufferingEnabled: false, metricBoxLenPointer: 0 }, this.hint = t2, this.tileKey = e4, this._hasAggregate = i2, this._pixelBufferEnabled = s2, this._version = n2, this._symbologyType = r6;
  }
  get hasAggregates() {
    return this._hasAggregate;
  }
  get hasPixelBufferEnabled() {
    return this._pixelBufferEnabled;
  }
  serialize(t2) {
    const r6 = [];
    return r6.push(this._serializeTileVertexData(this.tileKey, this.tileKey, this._data.self)), this._data.neighbors.forEach((i2, s2) => {
      const n2 = 1 << s2, a3 = x$7(n2), u2 = f$5(n2), c2 = o$5(new e$4(this.tileKey), a3, u2, t2), o2 = this._serializeTileVertexData(this.tileKey, c2.id, i2.vertexData);
      o2.message.bufferIds = i2.displayIds, r6.push(o2);
    }), r6;
  }
  _serializeTileVertexData(e4, t2, r6) {
    const i2 = new Array();
    return { message: { tileKeyOrigin: e4, tileKey: t2, data: { [E$2.MARKER]: r6.get(E$2.MARKER)?.serialize(i2), [E$2.FILL]: r6.get(E$2.FILL)?.serialize(i2), [E$2.LINE]: r6.get(E$2.LINE)?.serialize(i2), [E$2.TEXT]: r6.get(E$2.TEXT)?.serialize(i2), [E$2.LABEL]: r6.get(E$2.LABEL)?.serialize(i2) }, version: this._version }, transferList: i2 };
  }
  featureStart(e4, t2) {
    this._current.insertAfter = e4, this._current.sortKey = t2;
  }
  featureEnd() {
  }
  recordStart(e4, t2, r6, i2) {
    this._current.writer = this._getVertexWriter(r6), this._current.overlaps = 0, this._current.indexStart = this._current.writer.indexCount, this._current.vertStart = this._current.writer.vertexCount, this._current.bufferingEnabled = i2, this._current.id = e4, this._current.materialKey = t2, this._current.geometryType = r6, this._current.isDotDensity = false, this._current.writer.recordStart();
  }
  recordCount() {
    return this._current.writer.recordCount;
  }
  vertexCount() {
    return this._current.writer.vertexCount;
  }
  indexCount() {
    return this._current.writer.indexCount;
  }
  vertexEnsureSize(e4) {
    this._current.writer.vertexEnsureSize(e4);
  }
  indexEnsureSize(e4) {
    this._current.writer.indexEnsureSize(e4);
  }
  vertexBounds(e4, t2, r6, i2) {
    this._current.bufferingEnabled && this._addOverlap(e4, t2, r6, i2);
  }
  vertexWrite(e4) {
    this._current.writer.writeVertex(e4);
  }
  vertexWriteF32(e4) {
    this._current.writer.writeVertexF32(e4);
  }
  vertexEnd() {
  }
  vertexWriter() {
    return this._current.writer.vertexWriter;
  }
  indexWrite(e4) {
    this._current.writer.writeIndex(e4);
  }
  indexWriter() {
    return this._current.writer.indexWriter;
  }
  metricWriter() {
    return this._current.writer.metricWriter;
  }
  metricStart(e4, t2, r6, n2, a3, h2, u2, c2) {
    this._current.writer = this._getVertexWriter(E$2.LABEL);
    const o2 = this._current.writer.metricWriter;
    o2.push(f$6(e4)), o2.push(t2), o2.push(r6), o2.push(n2), o2.push(a3), o2.push(h2), o2.push(u2), o2.push(c2), o2.push(255), this._current.metricBoxLenPointer = o2.push(0);
  }
  metricEnd() {
    const e4 = this._current.writer.metricWriter;
    0 === e4.getValue(this._current.metricBoxLenPointer) && e4.seek(e4.length - 10);
  }
  metricBoxWrite(e4, t2, r6, i2) {
    const s2 = this._current.writer.metricWriter;
    s2.incr(this._current.metricBoxLenPointer), s2.push(0), s2.push(0), s2.push(e4), s2.push(t2), s2.push(r6), s2.push(i2);
  }
  recordEnd() {
    const e4 = this._current.vertStart, r6 = this._current.writer.vertexCount - e4;
    if (!r6)
      return false;
    this.hasRecords = true;
    const i2 = this._current.indexStart, h2 = this._current.writer.indexCount - i2;
    if (this._current.writer.recordEnd(this._current.id, this._current.materialKey, this._current.insertAfter, i2, h2, e4, r6, this._current.sortKey), !this._pixelBufferEnabled || this._hasAggregate || 0 === this._current.overlaps || this._current.geometryType === E$2.LABEL)
      return true;
    const u2 = this._current.writer;
    for (let s2 = 0; s2 < 8; s2++) {
      const e5 = 1 << s2;
      if (!!(this._current.overlaps & e5)) {
        this._data.neighbors[s2] || (this._data.neighbors[s2] = { vertexData: /* @__PURE__ */ new Map(), displayIds: /* @__PURE__ */ new Set() });
        const r7 = this._data.neighbors[s2], i3 = this._current.geometryType;
        if (!r7.vertexData.has(i3)) {
          const e6 = R(i3, this._symbologyType).geometry, s3 = new r$7(i3, e6, fe);
          r7.vertexData.set(i3, s3);
        }
        const h3 = r7.vertexData.get(this._current.geometryType), c2 = 8, o2 = 512 * -x$7(e5) * c2, _2 = 512 * -f$5(e5) * c2;
        h3?.copyLastFrom(u2, o2, _2), r7.displayIds.add(this._current.id);
      }
    }
    return true;
  }
  _addOverlap(e4, t2, i2, s2) {
    const n2 = 255 ^ ((e4 < 0 + i2 ? y$6 : e4 >= c$6 - i2 ? m$4 : y$6 | m$4) | (t2 < 0 + s2 ? v$4 : t2 >= c$6 - s2 ? w$4 : v$4 | w$4));
    this._current.overlaps |= n2;
  }
  _getVertexWriter(e4) {
    if (!this._data.self.has(e4)) {
      const t2 = this._data.self, r6 = R(e4, this._symbologyType).geometry;
      t2.set(e4, new r$7(e4, r6, this.hint.records));
    }
    return this._data.self.get(e4);
  }
};
const n$3 = 0, o$3 = 100;
function t$1(n2, o2, t2) {
  return n2[0] = o2[0] - t2[0], n2[1] = o2[1] - t2[1], n2;
}
function i$5(n2, o2) {
  return Math.sqrt(n2 * n2 + o2 * o2);
}
function r$6(n2) {
  const o2 = i$5(n2[0], n2[1]);
  n2[0] /= o2, n2[1] /= o2;
}
function u$6(n2, o2) {
  return i$5(n2[0] - o2[0], n2[1] - o2[1]);
}
function c$4(n2 = 2) {
  return 1 / Math.max(n2, 1);
}
function v$3(t2, i2) {
  return [!!t2?.minScale && i2.scaleToZoom(t2.minScale) || n$3, !!t2?.maxScale && i2.scaleToZoom(t2.maxScale) || o$3];
}
function n$2(t2, e4) {
  return t2[e4 + 1];
}
function i$4(t2) {
  return t2.length - 1;
}
function r$5(t2) {
  let e4 = 0;
  for (let s2 = 0; s2 < i$4(t2); s2++)
    e4 += h$3(t2, s2);
  return e4;
}
function h$3(t2, e4, s2 = 1) {
  const [i2, r6] = n$2(t2, e4);
  return Math.sqrt(i2 * i2 + r6 * r6) * s2;
}
let a$5 = class a {
  constructor(t2, e4, s2, n2, i2) {
    this._segments = t2, this._index = e4, this._distance = s2, this._xStart = n2, this._yStart = i2, this._done = false;
  }
  static create(t2) {
    return new a(t2, 0, 0, t2[0][0], t2[0][1]);
  }
  clone() {
    return new a(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t2) {
    return this._index === t2._index || t2._index === this._index - 1 && (0 === this._distance || 1 === t2._distance) || t2._index === this._index + 1 && (1 === this._distance || 0 === t2._distance);
  }
  leq(t2) {
    return this._index < t2._index || this._index === t2._index && this._distance <= t2._distance;
  }
  geq(t2) {
    return this._index > t2._index || this._index === t2._index && this._distance >= t2._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t2 = this.dy, e4 = (0 * t2 + -1 * -this.dx) / (1 * this.length);
    let s2 = Math.acos(e4);
    return t2 > 0 && (s2 = 2 * Math.PI - s2), s2;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t2, dy: e4 } = this;
    return Math.sqrt(t2 * t2 + e4 * e4);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < i$4(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t2, e4) {
    const s2 = this.backwardLength;
    if (t2 <= s2)
      return this._distance = (s2 - t2) / this.length, this;
    let n2 = this.backwardLength;
    for (; this.prev(); ) {
      if (n2 + this.length > t2)
        return this._seekBackwards(t2 - n2);
      n2 += this.length;
    }
    return this._distance = 0, e4 ? this : null;
  }
  seek(t2, e4 = false) {
    if (t2 < 0)
      return this._seekBackwards(Math.abs(t2), e4);
    if (t2 <= this.remainingLength)
      return this._distance = (this.backwardLength + t2) / this.length, this;
    let s2 = this.remainingLength;
    for (; this.next(); ) {
      if (s2 + this.length > t2)
        return this.seek(t2 - s2, e4);
      s2 += this.length;
    }
    return this._distance = 1, e4 ? this : null;
  }
};
function d$6(t2, e4, s2, n2 = true) {
  const i2 = r$5(t2), h2 = a$5.create(t2), d4 = i2 / 2;
  if (!n2)
    return h2.seek(d4), void s2(h2.clone(), 0, d4 + 0 * e4, i2);
  const c2 = Math.max((i2 - e4) / 2, 0), u2 = Math.floor(c2 / e4), o2 = d4 - u2 * e4;
  h2.seek(o2);
  for (let r6 = -u2; r6 <= u2; r6++)
    h2.x < 512 && h2.x >= 0 && h2.y < 512 && h2.y >= 0 && s2(h2.clone(), r6, d4 + r6 * e4, i2), h2.seek(e4);
}
function o$2(t2, e4) {
  const s2 = e4;
  for (let n2 = 0; n2 < t2.length; n2++) {
    let e5 = t2[n2];
    _$2(e5, s2);
    const i2 = [];
    i2.push(e5[0]);
    for (let t3 = 1; t3 < e5.length; t3++) {
      const [s3, n3] = e5[t3 - 1], [r6, h2] = e5[t3], a3 = Math.round(r6 - s3), d4 = Math.round(h2 - n3);
      i2.push([a3, d4]);
    }
    t2[n2] = i2, e5 = i2;
  }
  return t2;
}
function _$2(n2, i2) {
  const r6 = 1e-6;
  if (i2 <= 0)
    return;
  const h2 = n2.length;
  if (h2 < 3)
    return;
  const a3 = [];
  let d4 = 0;
  a3.push(0);
  for (let e4 = 1; e4 < h2; e4++)
    d4 += u$6(n2[e4], n2[e4 - 1]), a3.push(d4);
  i2 = Math.min(i2, 0.2 * d4);
  const c2 = [];
  c2.push(n2[0][0]), c2.push(n2[0][1]);
  const u2 = n2[h2 - 1][0], o2 = n2[h2 - 1][1], _2 = t$1([0, 0], n2[0], n2[1]);
  r$6(_2), n2[0][0] += i2 * _2[0], n2[0][1] += i2 * _2[1], t$1(_2, n2[h2 - 1], n2[h2 - 2]), r$6(_2), n2[h2 - 1][0] += i2 * _2[0], n2[h2 - 1][1] += i2 * _2[1];
  for (let t2 = 1; t2 < h2; t2++)
    a3[t2] += i2;
  a3[h2 - 1] += i2;
  const l2 = 0.5 * i2;
  for (let t2 = 1; t2 < h2 - 1; t2++) {
    let e4 = 0, s2 = 0, d5 = 0;
    for (let h3 = t2 - 1; h3 >= 0 && !(a3[h3 + 1] < a3[t2] - l2); h3--) {
      const c3 = l2 + a3[h3 + 1] - a3[t2], u3 = a3[h3 + 1] - a3[h3], o3 = a3[t2] - a3[h3] < l2 ? 1 : c3 / u3;
      if (Math.abs(o3) < r6)
        break;
      const _3 = o3 * o3, g3 = o3 * c3 - 0.5 * _3 * u3, x2 = o3 * u3 / i2, f2 = n2[h3 + 1], y2 = n2[h3][0] - f2[0], k2 = n2[h3][1] - f2[1];
      e4 += x2 / g3 * (f2[0] * o3 * c3 + 0.5 * _3 * (c3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), s2 += x2 / g3 * (f2[1] * o3 * c3 + 0.5 * _3 * (c3 * k2 - u3 * f2[1]) - _3 * o3 * u3 * k2 / 3), d5 += x2;
    }
    for (let c3 = t2 + 1; c3 < h2 && !(a3[c3 - 1] > a3[t2] + l2); c3++) {
      const h3 = l2 - a3[c3 - 1] + a3[t2], u3 = a3[c3] - a3[c3 - 1], o3 = a3[c3] - a3[t2] < l2 ? 1 : h3 / u3;
      if (Math.abs(o3) < r6)
        break;
      const _3 = o3 * o3, g3 = o3 * h3 - 0.5 * _3 * u3, x2 = o3 * u3 / i2, f2 = n2[c3 - 1], y2 = n2[c3][0] - f2[0], k2 = n2[c3][1] - f2[1];
      e4 += x2 / g3 * (f2[0] * o3 * h3 + 0.5 * _3 * (h3 * y2 - u3 * f2[0]) - _3 * o3 * u3 * y2 / 3), s2 += x2 / g3 * (f2[1] * o3 * h3 + 0.5 * _3 * (h3 * k2 - u3 * f2[1]) - _3 * o3 * u3 * k2 / 3), d5 += x2;
    }
    c2.push(e4 / d5), c2.push(s2 / d5);
  }
  c2.push(u2), c2.push(o2);
  for (let t2 = 0, e4 = 0; t2 < h2; t2++)
    n2[t2][0] = c2[e4++], n2[t2][1] = c2[e4++];
}
let e$1 = class e2 {
  static getPlacement(e4, r6, n2, s2, c2, o2) {
    const a3 = g$5(n2);
    if (!a3)
      return null;
    -1 === r6 && e4.invertY();
    return a3.execute(e4, n2, s2, c2, o2);
  }
};
const a$4 = 8, x$6 = w$6(4, 4), _$1 = w$6(16, 4), c$3 = w$6(4, 2), l$2 = w$6(4, 6), u$5 = [c$3, c$3, l$2, l$2], g$3 = [c$3, l$2, c$3, l$2], m$3 = [l$2, l$2, x$6, x$6], f$4 = [x$6, x$6, l$2, l$2], y$5 = [l$2, x$6, l$2, x$6], p$6 = [x$6, l$2, x$6, l$2], w$3 = (x2) => class extends x2 {
  constructor(...e4) {
    super(...e4), this._isCIM = false, this._vertexBoundsScale = 1, this.geometryType = E$2.TEXT, this._aux = x$8(0, 0, this._referenceSize, this._bitset);
  }
  bindTextInfo(e4, t2) {
    this._shapingInfo = e4?.length ? S$2(e4, t2, { scale: this._scale, angle: this._angle, xOffset: this._xOffset, yOffset: this._yOffset, hAlign: this._xAlignD, vAlign: this._yAlignD, maxLineWidth: Math.max(32, Math.min(this._lineWidth, 512)), lineHeight: w$5 * Math.max(0.25, Math.min(this._lineHeight, 4)), decoration: this._decoration, isCIM: this._isCIM, hasBackground: !!this._backgroundColor, borderLineSize: this._borderLineSize }) : null;
  }
  _write(e4, t2, r6, i2) {
    const o2 = t2.getDisplayId();
    this._writeGeometry(e4, t2, o2, r6, i2);
  }
  _writeGeometry(e4, t2, r6, i2, o2) {
    const s2 = this._shapingInfo;
    if (null == s2)
      return;
    if (this._textPlacement)
      return this._writePlacedText(e4, r6, s2, i2, t2, o2);
    const n2 = o2 ? o2.asOptimized() : "esriGeometryPolygon" === t2.geometryType ? t2.readCentroid() : t2.readGeometryForDisplay();
    if (null != n2) {
      if (n2.isPoint) {
        const [t3, i3] = n2.coords;
        if (!e4.hasAggregates && e4.hasPixelBufferEnabled && (t3 < 0 || t3 >= 512 || i3 < 0 || i3 >= 512))
          return;
        return this._writeGlyphs(e4, r6, { x: t3, y: i3 }, s2);
      }
      n2.forEachVertex((t3, i3) => this._writeGlyphs(e4, r6, { x: t3, y: i3 }, s2));
    }
  }
  _writePlacedText(i2, o2, s2, n2, h2, d4) {
    const a3 = this._textPlacement, x3 = d4 || a$6.fromFeatureSetReaderCIM(h2);
    if (!x3)
      return;
    const _2 = -1, c2 = e$1.getPlacement(x3, _2, a3, u$8(1), i2.tileKey, n2.geometryEngine);
    if (!c2)
      return;
    const l2 = s2.bounds, u2 = Math.sqrt(l2.height * l2.height + l2.width * l2.width);
    let g3, m2, f2;
    for (; g3 = c2.next(); )
      if (m2 = g3.tx, f2 = -g3.ty, m2 + u2 >= 0 && m2 - u2 < 512 && f2 + u2 >= 0 && f2 - u2 < 512) {
        const e4 = -g3.getAngle();
        s2.setRotation(e4), this._writeGlyphs(i2, o2, { x: m2, y: f2 }, s2), s2.setRotation(-e4);
      }
  }
  _writeGlyphs(e4, t2, r6, i2) {
    const o2 = U.load(this._materialKey), s2 = w$6(Math.round(a$4 * r6.x), Math.round(a$4 * r6.y)), d4 = this._vertexBoundsScale, { bounds: x3, background: _2, glyphs: c2 } = i2;
    c2.length > 0 && (this._borderLineColor || this._backgroundColor) && (o2.textureBinding = c2[0].textureBinding, e4.recordStart(t2, o2.data, this.geometryType, true), this._writeBackgroundGeometry(e4, t2, r6, x3, _2), e4.recordEnd());
    const l2 = 2 * Math.max(x3.width, x3.height);
    for (const n2 of i2.glyphs)
      o2.textureBinding = n2.textureBinding, e4.recordStart(t2, o2.data, this.geometryType, true), e4.vertexBounds(r6.x + x3.x + this._xOffset, r6.y + x3.y - this._yOffset, l2 * d4, l2 * d4), this._writeVertices(e4, t2, s2, n2), e4.recordEnd();
  }
  _writeGlyph(e4, t2, r6, i2, o2) {
    const s2 = U.load(this._materialKey), d4 = w$6(Math.round(a$4 * r6), Math.round(a$4 * i2));
    s2.textureBinding = o2.textureBinding, e4.recordStart(t2, s2.data, this.geometryType, true);
    const x3 = o2.bounds, _2 = this._vertexBoundsScale;
    e4.vertexBounds(r6 + x3.x * _2, i2 + x3.y * _2, x3.width * _2, x3.height * _2), this._writeVertices(e4, t2, d4, o2), e4.recordEnd();
  }
  _writeVertices(e4, t2, r6, i2) {
    const o2 = e4.vertexCount();
    this._writeVertexCommon(e4, t2, r6, i2), e4.vertexWrite(i2.offsets.upperLeft), e4.vertexWrite(i2.texcoords.upperLeft), e4.vertexEnd(), this._writeVertexCommon(e4, t2, r6, i2), e4.vertexWrite(i2.offsets.upperRight), e4.vertexWrite(i2.texcoords.upperRight), e4.vertexEnd(), this._writeVertexCommon(e4, t2, r6, i2), e4.vertexWrite(i2.offsets.lowerLeft), e4.vertexWrite(i2.texcoords.lowerLeft), e4.vertexEnd(), this._writeVertexCommon(e4, t2, r6, i2), e4.vertexWrite(i2.offsets.lowerRight), e4.vertexWrite(i2.texcoords.lowerRight), e4.vertexEnd(), e4.indexWrite(o2 + 0), e4.indexWrite(o2 + 1), e4.indexWrite(o2 + 2), e4.indexWrite(o2 + 1), e4.indexWrite(o2 + 3), e4.indexWrite(o2 + 2);
  }
  _writeVertexCommon(e4, t2, r6, i2) {
    const o2 = this._color, n2 = this._haloColor, h2 = x$8(0, 0, this._referenceSize, this._bitset), d4 = x$8(0, 0, this._size, this._haloSize);
    e4.vertexWrite(r6), e4.vertexWrite(t2), e4.vertexWrite(o2), e4.vertexWrite(n2), e4.vertexWrite(d4), e4.vertexWrite(h2), e4.vertexWrite(this._minMaxZoom);
  }
  _writeBackgroundVertex(e4, t2, r6, i2, o2, n2) {
    const h2 = x$8(0, 1, this._referenceSize, this._bitset), d4 = x$8(0, 0, this._size, this._haloSize), a3 = x$8(0, 0, 0, 0);
    e4.vertexWrite(r6), e4.vertexWrite(t2), e4.vertexWrite(i2), e4.vertexWrite(a3), e4.vertexWrite(d4), e4.vertexWrite(h2), e4.vertexWrite(this._minMaxZoom), e4.vertexWrite(o2), e4.vertexWrite(n2), e4.vertexEnd();
  }
  _writeBackgroundQuad(e4, t2, r6, i2, o2, s2) {
    const n2 = e4.vertexCount();
    this._writeBackgroundVertex(e4, t2, r6, i2, o2.upperLeft, s2[0]), this._writeBackgroundVertex(e4, t2, r6, i2, o2.upperRight, s2[1]), this._writeBackgroundVertex(e4, t2, r6, i2, o2.lowerLeft, s2[2]), this._writeBackgroundVertex(e4, t2, r6, i2, o2.lowerRight, s2[3]), e4.indexWrite(n2 + 0), e4.indexWrite(n2 + 1), e4.indexWrite(n2 + 2), e4.indexWrite(n2 + 1), e4.indexWrite(n2 + 3), e4.indexWrite(n2 + 2);
  }
  _writeBackgroundGeometry(e4, t2, r6, i2, o2) {
    const s2 = w$6(Math.round(a$4 * r6.x), Math.round(a$4 * r6.y)), { x: h2, y: d4, width: x3, height: c2 } = i2, l2 = 2 * Math.max(x3, c2);
    if (e4.vertexBounds(r6.x + h2 + this._xOffset, r6.y + d4 - this._yOffset, l2 * this._vertexBoundsScale, l2 * this._vertexBoundsScale), this._backgroundColor) {
      const r7 = [_$1, _$1, _$1, _$1];
      this._writeBackgroundQuad(e4, t2, s2, this._backgroundColor, o2.main, r7);
    }
    if (this._borderLineColor || this._backgroundColor) {
      const r7 = !!this._borderLineColor && !!this._borderLineSize && this._borderLineSize > 0, [i3, n2, h3, d5, a3] = r7 ? [u$5, u$5, g$3, g$3, this._borderLineColor] : [m$3, f$4, y$5, p$6, this._backgroundColor];
      this._writeBackgroundQuad(e4, t2, s2, a3, o2.top, i3), this._writeBackgroundQuad(e4, t2, s2, a3, o2.bot, n2), this._writeBackgroundQuad(e4, t2, s2, a3, o2.left, h3), this._writeBackgroundQuad(e4, t2, s2, a3, o2.right, d5);
    }
  }
};
let r$4 = class r2 {
  constructor() {
    this._materialKey = null;
  }
  bindFeature(e4, t2, r6) {
  }
  write(r6, s2, i2, f2) {
    if (this._effects && this._effects.length > 0) {
      let i3 = a$6.fromFeatureSetReaderCIM(s2);
      if (i3) {
        i3.invertY();
        const e4 = l$4.executeEffects(this._effects, i3, r6.tileKey, f2.geometryEngine);
        for (; i3 = e4.next(); )
          i3.invertY(), this._write(r6, s2, f2, i3);
      }
    } else
      this._write(r6, s2, f2);
  }
  _write(e4, t2, r6, s2) {
  }
};
const z$3 = 5;
let g$2 = class g extends w$3(r$4) {
  constructor(e4, l2, a3, d4, _2, u2, b2, x2, g3, C2, M2, p2, S2, j3, L3, y2, T, V2, k2, A2, v2, W2, I, K3) {
    super(), this._xOffset = u$8(S2), this._yOffset = u$8(j3), this._decoration = C2 || "none", this._backgroundColor = W2, this._borderLineColor = I, this._borderLineSize = K3, this._color = _2, this._haloColor = u2, this._haloSize = Math.min(Math.floor(z$3 * u$8(o$6(a3))), 127), this._size = Math.min(Math.round(u$8(l2)), 127);
    const R2 = Math.min(Math.round(u$8(d4 || l2)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * R2)), this._scale = this._size / b$2, this._angle = p2, this._justify = s$3(b2 || "center"), this._xAlignD = r$8(b2 || "center"), this._yAlignD = n$4(x2 || "baseline"), this._baseline = "baseline" === (x2 || "baseline"), this._bitset = (g3 === i$7.MAP ? 1 : 0) | (M2 ? 1 : 0) << 1;
    const B2 = U.load(e4);
    B2.sdf = true, this._materialKey = B2.data, this._lineWidth = u$8(L3) || 512, this._lineHeight = y2 || 1, this._textPlacement = T, this._effects = V2, this._isCIM = k2 ?? false, this._minMaxZoom = w$6(Math.round(A2 * me), Math.round(v2 * me));
  }
  static fromText(o2, t2) {
    const r6 = o2.font?.size, n2 = new g(o2.materialKey, r6, o2.haloSize || 0, r6, o2.color && o$7(o2.color) || 0, o2.haloColor && o$7(o2.haloColor) || 0, o2.horizontalAlignment, o2.verticalAlignment, i$7.SCREEN, o2.font?.decoration, false, o2.angle || 0, o2.xoffset || 0, o2.yoffset || 0, o2.lineWidth || 0, o2.lineHeight || 0, null, null, false, n$3, o$3, o2.backgroundColor && o$7(o2.backgroundColor), o2.borderLineColor && o$7(o2.borderLineColor), o2.borderLineSize), [, s2] = i$8(o2.text);
    return n2.bindTextInfo(t2 ?? [], s2), n2._vertexBoundsScale = o2.maxVVSize && r6 ? o2.maxVVSize / r6 : 1, n2;
  }
  static fromCIMText(o2, t2, i2) {
    const r6 = o2.scaleFactor || 1, n2 = o2.size * o2.sizeRatio * r6, [s2, l2] = v$3(o2.scaleInfo, i2), m2 = new g(o2.materialKey, n2, o2.outlineSize * o2.sizeRatio, o2.referenceSize, t$4(o2.color), t$4(o2.outlineColor), o2.horizontalAlignment, o2.verticalAlignment, o2.alignment, o2.decoration, o2.colorLocked ?? false, o2.angle, o2.offsetX * o2.sizeRatio * r6, o2.offsetY * o2.sizeRatio * r6, o2.lineWidth || 512, 1, o2.markerPlacement, o2.effects, true, s2, l2, o2.backgroundColor ? t$4(o2.backgroundColor) : void 0, o2.borderLineColor ? t$4(o2.borderLineColor) : void 0, o2.borderLineWidth), [, h2] = i$8(o2.text);
    return m2.bindTextInfo(t2, h2), m2._vertexBoundsScale = o2.maxVVSize ? o2.maxVVSize / n2 : 1, m2;
  }
};
const x$5 = s$4.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"), L$2 = (t2, i2 = "mapview-labeling") => x$5.error(new s$2(i2, t2)), S$1 = 1, v$2 = 0, P$1 = 4, w$2 = 25;
function M$1(e4, t2) {
  const o2 = !!e4.minScale && t2.scaleToZoom(e4.minScale) || 0;
  return i$a(o2, 0, 25.5);
}
function Z$1(e4, t2) {
  const o2 = !!e4.maxScale && t2.scaleToZoom(e4.maxScale) || 255;
  return i$a(o2, 0, 25.5);
}
function k$3(e4) {
  const t2 = /* @__PURE__ */ new Map();
  return (i2) => (t2.has(i2) || t2.set(i2, e4(i2)), t2.get(i2));
}
const A$1 = k$3((e4) => {
  let t2 = 0;
  if (0 === e4)
    return 1 / 0;
  for (; !(e4 % 2); )
    t2++, e4 /= 2;
  return t2;
}), B$1 = (e4) => Math.floor(127 * e4 + 127), z$2 = (e4) => Math.floor(e4 * me), C$2 = (e4) => Math.round(e4 * (254 / 360));
class W extends g$2 {
  constructor(e4, t2, i2, r6) {
    super(e4, i2.font?.size, i2.haloSize || 0, i2.font?.size, i2.color && o$7(i2.color) || 0, i2.haloColor && o$7(i2.haloColor) || 0, i2.horizontalAlignment, i2.verticalAlignment, i$9(t2.labelPlacement) ? i$7.MAP : i$7.SCREEN, i2.font?.decoration, false, i2.angle || 0, i2.xoffset, i2.yoffset, i2.lineWidth, i2.lineHeight, null, null, false, null, null, i2.backgroundColor && o$7(i2.backgroundColor), i2.borderLineColor && o$7(i2.borderLineColor), i2.borderLineSize), this._outLineLabelAngle = 0, this._refPlacementPadding = 0, this._refPlacementDirX = 0, this._refPlacementDirY = 0, this._refOffsetX = 0, this._refOffsetY = 0, this._zoomLevel = 0, this.geometryType = E$2.LABEL, this._allowOverrun = t2.allowOverrun ?? false, this._repeatLabel = t2.repeatLabel ?? true, this._labelPosition = t2.labelPosition ?? "curved";
    const n2 = M$1(t2, r6), h2 = Z$1(t2, r6), c2 = t2.labelPlacement, [g3, f2] = a$7(c2);
    this._xAlignD = g3, this._yAlignD = f2, this._minZoom = n2, this._maxZoom = h2, this._minBackgroundZoom = n2, this._maxBackgroundZoom = h2, this._refPlacementPadding = u$8(i2.haloSize) + q$1, this._repeatLabelDistance = t2.repeatLabelDistance ? u$8(t2.repeatLabelDistance) : 128;
    const p2 = Z$2.load(e4);
    p2.sdf = true, this._materialKey = p2.data;
  }
  static fromLabelClass(e4, t2) {
    if ("esriServerLinePlacementCenterAlong" === e4.labelPlacement) {
      const t3 = e4.symbol;
      t3.xoffset = 0, t3.yoffset = 0, t3.angle = 0, t3.font.decoration = "none";
    }
    return new W(e4.materialKey, e4, e4.symbol, t2);
  }
  get _shapedBox() {
    return this._shapingInfo.bounds;
  }
  setZoomLevel(e4) {
    this._zoomLevel = e4;
  }
  bindReferenceTemplate(e4) {
    let t2 = c$7(this._xAlignD), i2 = o$8(this._yAlignD);
    if (this._refOffsetX = 0, this._refOffsetY = 0, null == e4)
      return void (this._refSymbolAndPlacementOffset = x$8(0, 0, B$1(t2), B$1(i2)));
    if ("circle" === e4.boundsType && (t2 || i2)) {
      const e5 = Math.sqrt(t2 * t2 + i2 * i2);
      t2 /= e5, i2 /= e5;
    }
    const o2 = Math.max(e4.height, e4.width), r6 = this._refPlacementPadding * P$1;
    this._refSymbolAndPlacementOffset = x$8(r6, o2, B$1(t2), B$1(i2)), this._referenceSize = o2, this._refPlacementDirX = t2, this._refPlacementDirY = i2, this._refOffsetX = e4.xOffset, this._refOffsetY = e4.yOffset;
  }
  _write(e4, t2) {
    if (null == this._shapingInfo)
      return;
    const i2 = this._shapingInfo, o2 = t2.getDisplayId(), r6 = "esriGeometryPolygon" === t2.geometryType ? t2.readLegacyCentroid() : t2.readLegacyGeometry();
    if (r6)
      switch (this._current = { out: e4, inId: o2, inShaping: i2, zoomLevel: this._zoomLevel }, "esriGeometryPolyline" === t2.geometryType && "curved" === this._labelPosition && (this._borderLineColor || this._backgroundColor) && x$5.warnOnce("TextSymbol properties 'borderLineColor', 'borderLineSize', and 'backgroundColor' are not supported in curved labels"), t2.geometryType) {
        case "esriGeometryPolyline":
          this._placeLineLabels(r6);
          break;
        case "esriGeometryPoint":
        case "esriGeometryPolygon":
          this._placePointLabels(r6);
          break;
        default:
          L$2(`Geometry of type ${t2.geometryType} is not supported`);
      }
  }
  _isVisible(e4, t2) {
    const i2 = z$2(this._current.zoomLevel);
    return z$2(e4) <= i2 && i2 <= z$2(t2);
  }
  _placePointLabels(e4) {
    const { out: t2, inId: i2, inShaping: o2 } = this._current;
    this._writeGlyphs(t2, i2, e4, o2);
  }
  _placeLineLabels(e4) {
    const t2 = o$2(e4.paths, this._current.inShaping.bounds.width), i2 = this._placeSubdivGlyphs.bind(this), o2 = (this._shapedBox.width + this._repeatLabelDistance) / (1 << S$1);
    for (const r6 of t2)
      d$6(r6, o2, i2, this._repeatLabel);
  }
  _placeSubdivGlyphs(e4, t2, i2, o2) {
    const r6 = A$1(t2), n2 = this._shapedBox.width / (1 << S$1), s2 = Math.sqrt(this._repeatLabelDistance) / (1 << S$1), a3 = Math.min(i2, o2 - i2), l2 = this._current.inShaping.isMultiline ? w$2 : Math.log2(a3 / (s2 + n2 / 2)), h2 = 0 === t2 ? l2 : Math.min(r6, l2), c2 = Math.max(this._minZoom, this._current.zoomLevel + S$1 - h2), m2 = this._current.zoomLevel - c2, _2 = this._shapedBox.width / 2 * 2 ** m2;
    this._current.inShaping.isMultiline ? 0 === t2 && this._placeStraight(e4, c2) : this._allowOverrun && m2 < 0 ? this._placeStraightAlong(e4, this._minZoom) : "parallel" === this._labelPosition ? this._placeStraightAlong(e4, c2) : "curved" === this._labelPosition && this._placeCurved(e4, c2, _2);
  }
  _placeStraight(e4, t2) {
    const { out: i2, inId: o2, inShaping: r6 } = this._current, n2 = Math.ceil(e4.angle * (180 / Math.PI) % 360), s2 = Math.ceil((e4.angle * (180 / Math.PI) + 180) % 360);
    this._outLineLabelAngle = C$2(n2), this._writeGlyphs(i2, o2, e4, r6, t2), this._outLineLabelAngle = C$2(s2), this._writeGlyphs(i2, o2, e4, r6, t2);
  }
  _placeCurved(e4, t2, i2) {
    const { out: o2, inId: r6 } = this._current;
    o2.metricStart(r6, t2, e4.x, e4.y, 0, 0, 0, 0);
    const n2 = e4.clone(), s2 = e4.angle * (180 / Math.PI) % 360, a3 = (e4.angle * (180 / Math.PI) + 180) % 360;
    this._outLineLabelAngle = C$2(s2), this._placeFirst(n2, t2, 1), this._placeBack(e4, n2, t2, i2, 1), this._placeForward(e4, n2, t2, i2, 1), this._outLineLabelAngle = C$2(a3), this._placeFirst(n2, t2, 0), this._placeBack(e4, n2, t2, i2, 0), this._placeForward(e4, n2, t2, i2, 0), o2.metricEnd();
  }
  _placeStraightAlong(e4, t2) {
    const { out: i2, inId: o2, inShaping: s2 } = this._current;
    i2.metricStart(o2, t2, e4.x, e4.y, 0, 0, 0, 0);
    const a3 = e4.clone(), l2 = e4.angle * (180 / Math.PI) % 360, h2 = (e4.angle * (180 / Math.PI) + 180) % 360, c2 = s2.glyphs.length > 0 && (this._borderLineColor || this._backgroundColor);
    if (this._maxBackgroundZoom = w$2, this._minBackgroundZoom = Math.max(t2, 0), c2) {
      const t3 = Z$2.load(this._materialKey);
      t3.textureBinding = s2.glyphs[0].textureBinding;
      const a4 = h$4(n$5(), -e4.angle), [c3, m2] = s2.shapeBackground(a4);
      this._outLineLabelAngle = C$2(l2), i2.recordStart(o2, t3.data, this.geometryType, true), this._writeBackgroundGeometry(i2, o2, e4, c3, m2), i2.recordEnd(), this._outLineLabelAngle = C$2(h2), i2.recordStart(o2, t3.data, this.geometryType, true), this._writeBackgroundGeometry(i2, o2, e4, c3, m2), i2.recordEnd();
    }
    this._outLineLabelAngle = C$2(l2), this._placeFirst(a3, t2, 1, true), this._outLineLabelAngle = C$2(h2), this._placeFirst(a3, t2, 0, true), i2.metricEnd();
  }
  _placeBack(e4, t2, i2, o2, r6) {
    const n2 = e4.clone();
    let s2 = e4.backwardLength + v$2;
    for (; n2.prev() && !(s2 >= o2); )
      this._placeOnSegment(n2, t2, s2, i2, -1, r6), s2 += n2.length + v$2;
  }
  _placeForward(e4, t2, i2, o2, r6) {
    const n2 = e4.clone();
    let s2 = e4.remainingLength + v$2;
    for (; n2.next() && !(s2 >= o2); )
      this._placeOnSegment(n2, t2, s2, i2, 1, r6), s2 += n2.length + v$2;
  }
  _placeFirst(e4, t2, i2, o2 = false) {
    const r6 = e4, n2 = this._current.inShaping, s2 = n2.glyphs, a3 = this._current.zoomLevel, { out: l2, inId: h2 } = this._current;
    for (const c2 of s2) {
      const s3 = c2.x > n2.bounds.x ? i2 : 1 - i2, m2 = s3 * e4.remainingLength + (1 - s3) * e4.backwardLength, _2 = Math.abs(c2.x + c2.width / 2 - n2.bounds.x), g3 = Math.max(0, a3 + Math.log2(_2 / (m2 + v$2))), d4 = Math.max(t2, o2 ? 0 : g3);
      if (c2.maxZoom = w$2, c2.angle = e4.angle + (1 - i2) * Math.PI, c2.minZoom = d4, this._writeGlyph(l2, h2, r6.x, r6.y, c2), i2 && this._isVisible(c2.minZoom, c2.maxZoom)) {
        const e5 = c2.bounds;
        l2.metricBoxWrite(e5.center[0], e5.center[1], e5.width, e5.height);
      }
    }
  }
  _placeOnSegment(e4, t2, i2, o2, r6, n2) {
    const s2 = this._current.inShaping.glyphs, { out: a3, inId: l2 } = this._current, h2 = this._current.inShaping, c2 = this._current.zoomLevel, m2 = e4.dx / e4.length, _2 = e4.dy / e4.length, g3 = { x: e4.x + i2 * -r6 * m2, y: e4.y + i2 * -r6 * _2 };
    for (const d4 of s2) {
      const s3 = d4.x > h2.bounds.x ? n2 : 1 - n2;
      if (!(s3 && 1 === r6 || !s3 && -1 === r6))
        continue;
      const m3 = Math.abs(d4.x + d4.width / 2 - h2.bounds.x), _3 = Math.max(0, c2 + Math.log2(m3 / i2) - 0.1), f2 = Math.max(o2, c2 + Math.log2(m3 / (i2 + e4.length + v$2)));
      if (0 !== _3 && (d4.angle = e4.angle + (1 - n2) * Math.PI, d4.minZoom = f2, d4.maxZoom = _3, this._writeGlyph(a3, l2, g3.x, g3.y, d4), n2 && this._isVisible(d4.minZoom, d4.maxZoom))) {
        const i3 = d4.bounds, o3 = e4.x - t2.x, r7 = e4.y - t2.y;
        a3.metricBoxWrite(i3.center[0] + o3, i3.center[1] + r7, i3.width, i3.height);
      }
    }
  }
  _writeGlyphs(e4, t2, i2, o2, r6 = this._minZoom) {
    if (i2.x < 0 || i2.x >= 512 || i2.y < 0 || i2.y >= 512)
      return;
    if (o2.glyphs.length > 0 && (this._borderLineColor || this._backgroundColor)) {
      const r7 = Z$2.load(this._materialKey);
      r7.textureBinding = o2.glyphs[0].textureBinding, e4.recordStart(t2, r7.data, this.geometryType, true), this._writeBackgroundGeometry(e4, t2, i2, o2.bounds, o2.background), e4.recordEnd();
    }
    const n2 = i2.x + this._refOffsetX, s2 = i2.y - this._refOffsetY;
    for (const c2 of o2.glyphs)
      c2.minZoom = r6, c2.maxZoom = this._maxZoom, this._writeGlyph(e4, t2, n2, s2, c2);
    const a3 = this._refPlacementDirX, l2 = this._refPlacementDirY, h2 = o2.boundsT;
    e4.metricStart(t2, r6, n2, s2, a3, l2, this._referenceSize, this._materialKey), e4.metricBoxWrite(h2.center[0], h2.center[1], h2.width, h2.height), e4.metricEnd();
  }
  _writeVertexCommon(e4, t2, i2, o2) {
    const r6 = this._color, n2 = this._haloColor, s2 = x$8(0, 0, this._size, this._haloSize), a3 = Math.max(o2.minZoom, this._minZoom), l2 = Math.min(o2.maxZoom, this._maxZoom), h2 = x$8(z$2(a3), z$2(l2), this._outLineLabelAngle, 0);
    e4.vertexWrite(i2), e4.vertexWrite(t2), e4.vertexWrite(r6), e4.vertexWrite(n2), e4.vertexWrite(s2), e4.vertexWrite(this._refSymbolAndPlacementOffset), e4.vertexWrite(h2);
  }
  _writeBackgroundVertex(e4, t2, i2, o2, r6, n2) {
    const s2 = x$8(0, 0, this._size, this._haloSize), a3 = x$8(0, 0, 0, 0), l2 = x$8(z$2(this._minBackgroundZoom), z$2(this._maxBackgroundZoom), this._outLineLabelAngle, 1);
    e4.vertexWrite(i2), e4.vertexWrite(t2), e4.vertexWrite(o2), e4.vertexWrite(a3), e4.vertexWrite(s2), e4.vertexWrite(this._refSymbolAndPlacementOffset), e4.vertexWrite(l2), e4.vertexWrite(r6), e4.vertexWrite(n2), e4.vertexEnd();
  }
}
const g$1 = 3.14159265359 / 180, u$4 = 8, y$4 = (y2) => class extends y2 {
  constructor(...t2) {
    super(...t2), this.angle = 0, this.xOffset = 0, this.yOffset = 0, this.width = 0, this.height = 0, this.boundsType = "square", this._anchorX = 0, this._anchorY = 0, this._computedWidth = 0, this._computedHeight = 0, this._allowBorrowing = true, this._vertexBoundsScaleX = 1, this._vertexBoundsScaleY = 1, this.geometryType = E$2.MARKER;
  }
  _write(t2, e4, i2, r6) {
    const s2 = e4.getDisplayId();
    t2.recordStart(s2, this._materialKey, this.geometryType, true), this._writeGeometry(t2, e4, s2, i2, r6), t2.recordEnd();
  }
  _writeGeometry(t2, e4, i2, r6, s2) {
    if (null != this._markerPlacement)
      return this._writePlacedMarkers(t2, e4, r6, s2);
    if (this._allowBorrowing = true, !s2 && "esriGeometryPoint" === e4.geometryType) {
      const r7 = e4.getX(), s3 = e4.getY();
      if (!t2.hasAggregates && t2.hasPixelBufferEnabled && (r7 < 0 || r7 >= 513 || s3 < 0 || s3 >= 513))
        return;
      return this._writeVertices(t2, i2, this._getPos(r7, s3), r7, s3);
    }
    const o2 = s2 ? s2.asOptimized() : "esriGeometryPolygon" === e4.geometryType ? e4.readCentroid() : e4.readGeometryForDisplay();
    if (null != o2) {
      if (o2.isPoint) {
        const [e5, r7] = o2.coords;
        if (!t2.hasAggregates && t2.hasPixelBufferEnabled && (e5 < 0 || e5 >= 512 || r7 < 0 || r7 >= 512))
          return;
        return this._writeVertices(t2, i2, this._getPos(e5, r7), e5, r7);
      }
      o2.forEachVertex((e5, r7) => {
        const s3 = 2 * c$6;
        e5 < -s3 || e5 >= s3 || r7 < -s3 || r7 >= s3 || this._writeVertices(t2, i2, this._getPos(e5, r7), e5, r7);
      });
    }
  }
  _writePlacedMarkers(e4, i2, r6, s2) {
    const h2 = s2 || a$6.fromFeatureSetReaderCIM(i2);
    if (!h2)
      return;
    const n2 = -1, a3 = e$1.getPlacement(h2, n2, this._markerPlacement, u$8(1), e4.tileKey, r6.geometryEngine);
    if (!a3)
      return;
    this._allowBorrowing = "esriGeometryPolygon" !== i2.geometryType;
    const _2 = i2.getDisplayId(), l2 = n$7(), c2 = n$5(), d4 = -128, v2 = 640;
    let W2 = a3.next();
    for (; null != W2; ) {
      const t2 = W2.tx, i3 = -W2.ty;
      t2 >= d4 && t2 <= v2 && i3 >= d4 && i3 <= v2 && (this._applyTransformation(c2, l2, -W2.getAngle() / g$1), this._writeVertices(e4, _2, this._getPos(t2, i3), t2, i3)), W2 = a3.next();
    }
  }
  _writeVertices(t2, e4, i2, r6, s2) {
    const o2 = N.load(this._materialKey);
    return o2.symbologyType === S$3.HEATMAP ? this._writeHeatmapVertices(t2, e4, i2) : this._writeMarkerVertices(t2, e4, o2, i2, r6, s2);
  }
  _writeMarkerVertices(t2, e4, i2, r6, s2, o2) {
    const h2 = i2.vvRotation, n2 = t2.vertexCount();
    let a3 = this._computedWidth * this._vertexBoundsScaleX, x2 = this._computedHeight * this._vertexBoundsScaleY;
    if (this.angle) {
      const t3 = Math.max(a3, x2);
      a3 = t3, x2 = t3;
    }
    if (h2) {
      const t3 = Math.max(this.xOffset, this.yOffset);
      a3 += t3, x2 += t3;
    }
    this._allowBorrowing && t2.vertexBounds(s2 + this.xOffset, o2 - this.yOffset, a3, x2), t2.vertexWrite(r6), t2.vertexWrite(this._offsetUpperLeft), t2.vertexWrite(this._texUpperLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e4), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r6), t2.vertexWrite(this._offsetUpperRight), t2.vertexWrite(this._texUpperRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e4), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r6), t2.vertexWrite(this._offsetBottomLeft), t2.vertexWrite(this._texBottomLeft), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e4), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), t2.vertexWrite(r6), t2.vertexWrite(this._offsetBottomRight), t2.vertexWrite(this._texBottomRight), t2.vertexWrite(this._bitestAndDistRatio), t2.vertexWrite(e4), t2.vertexWrite(this._fillColor), t2.vertexWrite(this._outlineColor), t2.vertexWrite(this._sizeOutlineWidth), t2.vertexWrite(this._minMaxZoom), t2.vertexEnd(), this._writeIndices(t2, n2);
  }
  _writeHeatmapVertices(t2, e4, i2) {
    const r6 = t2.vertexCount();
    t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperLeft), t2.vertexWrite(e4), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetUpperRight), t2.vertexWrite(e4), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomLeft), t2.vertexWrite(e4), t2.vertexEnd(), t2.vertexWrite(i2), t2.vertexWrite(this._offsetBottomRight), t2.vertexWrite(e4), t2.vertexEnd(), this._writeIndices(t2, r6);
  }
  _writeIndices(t2, e4) {
    t2.indexWrite(e4 + 0), t2.indexWrite(e4 + 1), t2.indexWrite(e4 + 2), t2.indexWrite(e4 + 1), t2.indexWrite(e4 + 3), t2.indexWrite(e4 + 2);
  }
  _applyTransformation(t2, o2, x2 = 0) {
    x2 ? h$4(t2, g$1 * x2) : n$6(t2), i$b(t2, t2, t$5(this.xOffset, -this.yOffset)), this.angle && e$5(t2, t2, g$1 * this.angle);
    const f2 = this._computedWidth, m2 = this._computedHeight, _2 = -(0.5 + this._anchorX) * f2, l2 = -(0.5 - this._anchorY) * m2;
    r$9(o2, _2, l2), z$4(o2, o2, t2), this._offsetUpperLeft = w$6(16 * o2[0], 16 * o2[1]), r$9(o2, _2 + f2, l2), z$4(o2, o2, t2), this._offsetUpperRight = w$6(16 * o2[0], 16 * o2[1]), r$9(o2, _2, l2 + m2), z$4(o2, o2, t2), this._offsetBottomLeft = w$6(16 * o2[0], 16 * o2[1]), r$9(o2, _2 + f2, l2 + m2), z$4(o2, o2, t2), this._offsetBottomRight = w$6(16 * o2[0], 16 * o2[1]);
  }
  _computeSize(t2, e4, i2, r6, s2, o2, h2, n2) {
    const a3 = t2 * i2, x2 = e4 * i2;
    if (!!o2.sdf && !h2) {
      const i3 = n2 && t2 > e4 ? a3 : t2, s3 = e4, o3 = r6 + 2 * 1;
      t2 = Math.min(i3 + o3, a3), e4 = Math.min(s3 + o3, x2);
    } else
      t2 = a3, e4 = x2;
    const f2 = ce / Math.max(a3, x2), m2 = 0.5 * (a3 - t2) * f2, l2 = 0.5 * (x2 - e4) * f2, d4 = o2.rect.x + ae + m2, v2 = o2.rect.y + ae + l2, p2 = d4 + o2.width - 2 * m2, g3 = v2 + o2.height - 2 * l2, u2 = Math.floor(d4), y3 = Math.floor(v2), w2 = Math.ceil(p2), M2 = Math.ceil(g3);
    t2 *= (w2 - u2) / (p2 - d4), e4 *= (M2 - y3) / (g3 - v2), this._texUpperLeft = w$6(u2, y3), this._texUpperRight = w$6(w2, y3), this._texBottomLeft = w$6(u2, M2), this._texBottomRight = w$6(w2, M2), this._anchorX *= a3 / t2, this._anchorY *= x2 / e4, t2 *= s2, e4 *= s2, this._computedWidth = t2, this._computedHeight = e4;
  }
  _getPos(t2, e4) {
    return w$6(Math.round(u$4 * t2), Math.round(u$4 * e4));
  }
};
let z$1 = class z extends y$4(r$4) {
  constructor(t2, r6, s2, a3, d4, p2, y2, V2, _2, g3, z3, b2, k2, w2, B2, j3, C2, P2, v2, E3, T, A2, L3, R2) {
    super(), this.angle = a3, this.height = y2, this.width = p2, this.xOffset = r6 * v2, this.yOffset = s2 * v2, this._markerPlacement = E3 || void 0, this._effects = T || void 0, this._anchorX = j3, this._anchorY = C2, this._minMaxZoom = w$6(Math.round(A2 * me), Math.round(L3 * me));
    const K3 = (w2 === i$7.MAP ? ne : le) | (z3 ? pe : 0) | (k2 ? we : 0) | (b2 ? xe : 0), W2 = B2 && B2.sdf, X = N.load(t2);
    X.sdf = W2, X.pattern = true, X.textureBinding = B2.textureBinding, this._materialKey = X.data, this._fillColor = d4, this._outlineColor = _2, this._sizeOutlineWidth = x$8(Math.round(Math.min(Math.sqrt(128 * p2), 255)), Math.round(Math.min(Math.sqrt(128 * y2), 255)), Math.round(Math.min(Math.sqrt(128 * g3), 255)), Math.round(Math.min(Math.sqrt(128 * V2), 255))), X.symbologyType === S$3.PIE_CHART ? (p2 *= P2 * v2, y2 *= P2 * v2, this._computedWidth = p2, this._computedHeight = y2, this._texUpperLeft = w$6(0, 1), this._texUpperRight = w$6(1, 1), this._texBottomLeft = w$6(0, 0), this._texBottomRight = w$6(1, 0)) : this._computeSize(p2, y2, P2, g3, v2, B2, X.hasSizeVV(), R2);
    const q2 = Math.round(64 * P2);
    this._bitestAndDistRatio = w$6(K3, q2);
    const Y = n$7(), H = n$5();
    this._applyTransformation(H, Y);
  }
  static fromCIMMarker(e4, o2, r6) {
    const a3 = o2 && o2.width || 1, n2 = o2 && o2.height || 1, l2 = e4.size, h2 = a3 / n2 * e4.scaleX, m2 = e4.scaleSymbolsProportionally && e4.frameHeight ? l2 / e4.frameHeight : 1, c2 = t$4(e4.color), u2 = t$4(e4.outlineColor), d4 = u$8(l2), f2 = d4 * h2, M2 = u$8(e4.offsetX || 0), S2 = u$8(e4.offsetY || 0), x2 = u$8(e4.outlineWidth || 0) * m2, y2 = e4.alignment || i$7.SCREEN, V2 = u$8(e4.referenceSize), [_2, g3] = v$3(e4.scaleInfo, r6);
    let b2 = e4.rotation || 0;
    e4.rotateClockwise || (b2 = -b2);
    let k2 = 0, w2 = 0;
    const B2 = e4.anchorPoint;
    B2 && (e4.isAbsoluteAnchorPoint ? l2 && (k2 = B2.x / (l2 * h2), w2 = B2.y / l2) : (k2 = B2.x, w2 = B2.y));
    const j3 = new z(e4.materialKey, M2, S2, b2, c2, f2, d4, V2, u2, x2, e4.colorLocked, e4.scaleSymbolsProportionally, false, y2, o2, k2, w2, e4.sizeRatio, e4.scaleFactor ?? 1, e4.markerPlacement, e4.effects, _2, g3, true);
    return j3._vertexBoundsScaleX = e4.maxVVSize ? e4.maxVVSize / f2 : 1, j3._vertexBoundsScaleY = e4.maxVVSize ? e4.maxVVSize / d4 : 1, j3;
  }
  static fromPictureMarker(e4, o2) {
    const r6 = Math.round(u$8(e4.width)), s2 = Math.round(u$8(e4.height)), a3 = a$8, n2 = Math.round(u$8(e4.xoffset || 0)), l2 = Math.round(u$8(e4.yoffset || 0)), h2 = new z(e4.materialKey, n2, l2, e4.angle, a3, r6, s2, s2, 0, 0, false, false, false, i$7.SCREEN, o2, 0, 0, 1, 1, null, null, n$3, o$3, false);
    return h2._vertexBoundsScaleX = e4.maxVVSize ? e4.maxVVSize / e4.width : 1, h2._vertexBoundsScaleY = e4.maxVVSize ? e4.maxVVSize / e4.height : 1, h2;
  }
  static fromSimpleMarker(e4, o2) {
    const r6 = e4.style, s2 = o$7(e4.color), n2 = Math.round(u$8(e4.size));
    let l2 = n2;
    "esriSMSTriangle" === r6 && (l2 *= o2.height / o2.width);
    const h2 = Math.round(u$8(e4.xoffset || 0)), m2 = Math.round(u$8(e4.yoffset || 0)), c2 = e4.outline, u2 = 0 | (c2?.color && o$7(c2.color)), d4 = 0 | (c2?.width && Math.round(u$8(c2.width))), f2 = new z(e4.materialKey, h2, m2, e4.angle ?? 0, s2, n2, l2, l2, u2, d4, false, false, "esriSMSCross" === r6 || "esriSMSX" === r6, i$7.SCREEN, o2, 0, 0, 2, 1, null, null, n$3, o$3, false);
    return f2.boundsType = "esriSMSCircle" === r6 ? "circle" : "square", f2._vertexBoundsScaleX = e4.maxVVSize ? e4.maxVVSize / e4.size : 1, f2._vertexBoundsScaleY = e4.maxVVSize ? e4.maxVVSize / e4.size : 1, f2;
  }
  static fromLineSymbolMarker(e4, o2) {
    const s2 = o$7(e4.color), n2 = 6, l2 = Math.round(u$8(n2 * e4.lineWidth)), h2 = l2, m2 = "cross" === e4.style || "x" === e4.style;
    let c2;
    switch (e4.placement) {
      case "begin-end":
        c2 = o$9.Both;
        break;
      case "begin":
        c2 = o$9.JustBegin;
        break;
      case "end":
        c2 = o$9.JustEnd;
        break;
      default:
        c2 = o$9.None;
    }
    const u2 = { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: c2, offsetAlongLine: 0 }, d4 = new z(e4.materialKey, 0, 0, 0, s2, l2, h2, h2 / n2, s2, m2 ? Math.round(u$8(e4.lineWidth)) : 0, false, false, m2, i$7.MAP, o2, 0, 0, 2, 1, u2, null, n$3, o$3, false);
    return d4.boundsType = "circle" === e4.style ? "circle" : "square", d4;
  }
};
function e3(e4, t2, r6, i2, u2, o2, l2) {
  D = 0;
  const f2 = (i2 - r6) * o2, p2 = u2 && u2.length, c2 = p2 ? (u2[0] - r6) * o2 : f2;
  let v2, s2, h2, d4, Z2, a3 = n$1(t2, r6, i2, 0, c2, o2, true);
  if (a3 && a3.next !== a3.prev) {
    if (p2 && (a3 = y$3(t2, r6, i2, u2, a3, o2)), f2 > 80 * o2) {
      v2 = h2 = t2[0 + r6 * o2], s2 = d4 = t2[1 + r6 * o2];
      for (let e5 = o2; e5 < c2; e5 += o2) {
        const n2 = t2[e5 + r6 * o2], x2 = t2[e5 + 1 + r6 * o2];
        v2 = Math.min(v2, n2), s2 = Math.min(s2, x2), h2 = Math.max(h2, n2), d4 = Math.max(d4, x2);
      }
      Z2 = Math.max(h2 - v2, d4 - s2), Z2 = 0 !== Z2 ? 1 / Z2 : 0;
    }
    x$4(a3, e4, o2, v2, s2, Z2, l2, 0);
  }
}
function n$1(e4, n2, t2, x2, r6, i2, l2) {
  let y2;
  if (l2 === Z(e4, n2, t2, x2, r6, i2) > 0)
    for (let o2 = x2; o2 < r6; o2 += i2)
      y2 = u$3(o2 + n2 * i2, e4[o2 + n2 * i2], e4[o2 + 1 + n2 * i2], y2);
  else
    for (let o2 = r6 - i2; o2 >= x2; o2 -= i2)
      y2 = u$3(o2 + n2 * i2, e4[o2 + n2 * i2], e4[o2 + 1 + n2 * i2], y2);
  return y2 && M(y2, y2.next) && (o$1(y2), y2 = y2.next), y2;
}
function t(e4, n2 = e4) {
  if (!e4)
    return e4;
  let t2, x2 = e4;
  do {
    if (t2 = false, x2.steiner || !M(x2, x2.next) && 0 !== s$1(x2.prev, x2, x2.next))
      x2 = x2.next;
    else {
      if (o$1(x2), x2 = n2 = x2.prev, x2 === x2.next)
        break;
      t2 = true;
    }
  } while (t2 || x2 !== n2);
  return n2;
}
function x$4(e4, n2, u2, l2, y2, f2, p2, v2) {
  if (!e4)
    return;
  !v2 && f2 && (e4 = c$2(e4, l2, y2, f2));
  let s2 = e4;
  for (; e4.prev !== e4.next; ) {
    const c2 = e4.prev, h2 = e4.next;
    if (f2 ? i$3(e4, l2, y2, f2) : r$3(e4))
      n2.push(c2.index / u2 + p2), n2.push(e4.index / u2 + p2), n2.push(h2.index / u2 + p2), o$1(e4), e4 = h2.next, s2 = h2.next;
    else if ((e4 = h2) === s2) {
      v2 ? 1 === v2 ? x$4(e4 = b$1(e4, n2, u2, p2), n2, u2, l2, y2, f2, p2, 2) : 2 === v2 && g2(e4, n2, u2, l2, y2, f2, p2) : x$4(t(e4), n2, u2, l2, y2, f2, p2, 1);
      break;
    }
  }
}
function r$3(e4) {
  const n2 = e4.prev, t2 = e4, x2 = e4.next;
  if (s$1(n2, t2, x2) >= 0)
    return false;
  let r6 = e4.next.next;
  const i2 = r6;
  let u2 = 0;
  for (; r6 !== e4.prev && (0 === u2 || r6 !== i2); ) {
    if (u2++, a$3(n2.x, n2.y, t2.x, t2.y, x2.x, x2.y, r6.x, r6.y) && s$1(r6.prev, r6, r6.next) >= 0)
      return false;
    r6 = r6.next;
  }
  return true;
}
function i$3(e4, n2, t2, x2) {
  const r6 = e4.prev, i2 = e4, u2 = e4.next;
  if (s$1(r6, i2, u2) >= 0)
    return false;
  const o2 = r6.x < i2.x ? r6.x < u2.x ? r6.x : u2.x : i2.x < u2.x ? i2.x : u2.x, l2 = r6.y < i2.y ? r6.y < u2.y ? r6.y : u2.y : i2.y < u2.y ? i2.y : u2.y, y2 = r6.x > i2.x ? r6.x > u2.x ? r6.x : u2.x : i2.x > u2.x ? i2.x : u2.x, f2 = r6.y > i2.y ? r6.y > u2.y ? r6.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = z2(o2, l2, n2, t2, x2), c2 = z2(y2, f2, n2, t2, x2);
  let v2 = e4.prevZ, h2 = e4.nextZ;
  for (; v2 && v2.z >= p2 && h2 && h2.z <= c2; ) {
    if (v2 !== e4.prev && v2 !== e4.next && a$3(r6.x, r6.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$1(v2.prev, v2, v2.next) >= 0)
      return false;
    if (v2 = v2.prevZ, h2 !== e4.prev && h2 !== e4.next && a$3(r6.x, r6.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$1(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  for (; v2 && v2.z >= p2; ) {
    if (v2 !== e4.prev && v2 !== e4.next && a$3(r6.x, r6.y, i2.x, i2.y, u2.x, u2.y, v2.x, v2.y) && s$1(v2.prev, v2, v2.next) >= 0)
      return false;
    v2 = v2.prevZ;
  }
  for (; h2 && h2.z <= c2; ) {
    if (h2 !== e4.prev && h2 !== e4.next && a$3(r6.x, r6.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && s$1(h2.prev, h2, h2.next) >= 0)
      return false;
    h2 = h2.nextZ;
  }
  return true;
}
function u$3(e4, n2, t2, x2) {
  const r6 = q.create(e4, n2, t2);
  return x2 ? (r6.next = x2.next, r6.prev = x2, x2.next.prev = r6, x2.next = r6) : (r6.prev = r6, r6.next = r6), r6;
}
function o$1(e4) {
  e4.next.prev = e4.prev, e4.prev.next = e4.next, e4.prevZ && (e4.prevZ.nextZ = e4.nextZ), e4.nextZ && (e4.nextZ.prevZ = e4.prevZ);
}
function l$1(e4) {
  let n2 = e4, t2 = e4;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e4);
  return t2;
}
function y$3(e4, t2, x2, r6, i2, u2) {
  const o2 = new Array();
  for (let y2 = 0, f2 = r6.length; y2 < f2; y2++) {
    const i3 = n$1(e4, t2, x2, r6[y2] * u2, y2 < f2 - 1 ? r6[y2 + 1] * u2 : x2 * u2, u2, false);
    i3 === i3.next && (i3.steiner = true), o2.push(l$1(i3));
  }
  o2.sort(m$2);
  for (const n2 of o2)
    i2 = f$3(n2, i2);
  return i2;
}
function f$3(e4, n2) {
  const x2 = p$5(e4, n2);
  if (!x2)
    return n2;
  const r6 = j$2(x2, e4);
  return t(r6, r6.next), t(x2, x2.next);
}
function p$5(e4, n2) {
  let t2 = n2;
  const x2 = e4.x, r6 = e4.y;
  let i2, u2 = -1 / 0;
  do {
    if (r6 <= t2.y && r6 >= t2.next.y && t2.next.y !== t2.y) {
      const e5 = t2.x + (r6 - t2.y) * (t2.next.x - t2.x) / (t2.next.y - t2.y);
      if (e5 <= x2 && e5 > u2) {
        if (u2 = e5, e5 === x2) {
          if (r6 === t2.y)
            return t2;
          if (r6 === t2.next.y)
            return t2.next;
        }
        i2 = t2.x < t2.next.x ? t2 : t2.next;
      }
    }
    t2 = t2.next;
  } while (t2 !== n2);
  if (!i2)
    return null;
  if (x2 === u2)
    return i2.prev;
  const o2 = i2, l2 = i2.x, y2 = i2.y;
  let f2, p2 = 1 / 0;
  for (t2 = i2.next; t2 !== o2; )
    x2 >= t2.x && t2.x >= l2 && x2 !== t2.x && a$3(r6 < y2 ? x2 : u2, r6, l2, y2, r6 < y2 ? u2 : x2, r6, t2.x, t2.y) && (f2 = Math.abs(r6 - t2.y) / (x2 - t2.x), (f2 < p2 || f2 === p2 && t2.x > i2.x) && w$1(t2, e4) && (i2 = t2, p2 = f2)), t2 = t2.next;
  return i2;
}
function c$2(e4, n2, t2, x2) {
  let r6;
  for (; r6 !== e4; r6 = r6.next) {
    if (r6 = r6 || e4, null === r6.z && (r6.z = z2(r6.x, r6.y, n2, t2, x2)), r6.prev.next !== r6 || r6.next.prev !== r6)
      return r6.prev.next = r6, r6.next.prev = r6, c$2(e4, n2, t2, x2);
    r6.prevZ = r6.prev, r6.nextZ = r6.next;
  }
  return e4.prevZ.nextZ = null, e4.prevZ = null, v$1(e4);
}
function v$1(e4) {
  let n2, t2 = 1;
  for (; ; ) {
    let x2, r6 = e4;
    e4 = null, n2 = null;
    let i2 = 0;
    for (; r6; ) {
      i2++, x2 = r6;
      let u2 = 0;
      for (; u2 < t2 && x2; u2++)
        x2 = x2.nextZ;
      let o2 = t2;
      for (; u2 > 0 || o2 > 0 && x2; ) {
        let t3;
        0 === u2 ? (t3 = x2, x2 = x2.nextZ, o2--) : 0 !== o2 && x2 ? r6.z <= x2.z ? (t3 = r6, r6 = r6.nextZ, u2--) : (t3 = x2, x2 = x2.nextZ, o2--) : (t3 = r6, r6 = r6.nextZ, u2--), n2 ? n2.nextZ = t3 : e4 = t3, t3.prevZ = n2, n2 = t3;
      }
      r6 = x2;
    }
    if (n2.nextZ = null, t2 *= 2, i2 < 2)
      return e4;
  }
}
function s$1(e4, n2, t2) {
  return (n2.y - e4.y) * (t2.x - n2.x) - (n2.x - e4.x) * (t2.y - n2.y);
}
function h$2(e4, n2, t2, x2) {
  return !!(M(e4, n2) && M(t2, x2) || M(e4, x2) && M(t2, n2)) || s$1(e4, n2, t2) > 0 != s$1(e4, n2, x2) > 0 && s$1(t2, x2, e4) > 0 != s$1(t2, x2, n2) > 0;
}
function d$5(e4, n2) {
  let t2 = e4;
  do {
    if (t2.index !== e4.index && t2.next.index !== e4.index && t2.index !== n2.index && t2.next.index !== n2.index && h$2(t2, t2.next, e4, n2))
      return true;
    t2 = t2.next;
  } while (t2 !== e4);
  return false;
}
function Z(e4, n2, t2, x2, r6, i2) {
  let u2 = 0;
  for (let o2 = x2, l2 = r6 - i2; o2 < r6; o2 += i2)
    u2 += (e4[l2 + n2 * i2] - e4[o2 + n2 * i2]) * (e4[o2 + 1 + n2 * i2] + e4[l2 + 1 + n2 * i2]), l2 = o2;
  return u2;
}
function a$3(e4, n2, t2, x2, r6, i2, u2, o2) {
  return (r6 - u2) * (n2 - o2) - (e4 - u2) * (i2 - o2) >= 0 && (e4 - u2) * (x2 - o2) - (t2 - u2) * (n2 - o2) >= 0 && (t2 - u2) * (i2 - o2) - (r6 - u2) * (x2 - o2) >= 0;
}
function w$1(e4, n2) {
  return s$1(e4.prev, e4, e4.next) < 0 ? s$1(e4, n2, e4.next) >= 0 && s$1(e4, e4.prev, n2) >= 0 : s$1(e4, n2, e4.prev) < 0 || s$1(e4, e4.next, n2) < 0;
}
function z2(e4, n2, t2, x2, r6) {
  return (e4 = 1431655765 & ((e4 = 858993459 & ((e4 = 252645135 & ((e4 = 16711935 & ((e4 = 32767 * (e4 - t2) * r6) | e4 << 8)) | e4 << 4)) | e4 << 2)) | e4 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - x2) * r6) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function M(e4, n2) {
  return e4.x === n2.x && e4.y === n2.y;
}
function m$2(e4, n2) {
  return e4.x - n2.x;
}
function b$1(e4, n2, t2, x2) {
  let r6 = e4;
  do {
    const i2 = r6.prev, u2 = r6.next.next;
    !M(i2, u2) && h$2(i2, r6, r6.next, u2) && w$1(i2, u2) && w$1(u2, i2) && (n2.push(i2.index / t2 + x2), n2.push(r6.index / t2 + x2), n2.push(u2.index / t2 + x2), o$1(r6), o$1(r6.next), r6 = e4 = u2), r6 = r6.next;
  } while (r6 !== e4);
  return r6;
}
function g2(e4, n2, r6, i2, u2, o2, l2) {
  let y2 = e4;
  do {
    let e5 = y2.next.next;
    for (; e5 !== y2.prev; ) {
      if (y2.index !== e5.index && k$2(y2, e5)) {
        let f2 = j$2(y2, e5);
        return y2 = t(y2, y2.next), f2 = t(f2, f2.next), x$4(y2, n2, r6, i2, u2, o2, l2, 0), void x$4(f2, n2, r6, i2, u2, o2, l2, 0);
      }
      e5 = e5.next;
    }
    y2 = y2.next;
  } while (y2 !== e4);
}
function k$2(e4, n2) {
  return e4.next.index !== n2.index && e4.prev.index !== n2.index && !d$5(e4, n2) && w$1(e4, n2) && w$1(n2, e4) && A(e4, n2);
}
function A(e4, n2) {
  let t2 = e4, x2 = false;
  const r6 = (e4.x + n2.x) / 2, i2 = (e4.y + n2.y) / 2;
  do {
    t2.y > i2 != t2.next.y > i2 && t2.next.y !== t2.y && r6 < (t2.next.x - t2.x) * (i2 - t2.y) / (t2.next.y - t2.y) + t2.x && (x2 = !x2), t2 = t2.next;
  } while (t2 !== e4);
  return x2;
}
function j$2(e4, n2) {
  const t2 = q.create(e4.index, e4.x, e4.y), x2 = q.create(n2.index, n2.x, n2.y), r6 = e4.next, i2 = n2.prev;
  return e4.next = n2, n2.prev = e4, t2.next = r6, r6.prev = t2, x2.next = t2, t2.prev = x2, i2.next = x2, x2.prev = i2, x2;
}
class q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e4, n2, t2) {
    const x2 = D < B.length ? B[D++] : new q();
    return x2.index = e4, x2.x = n2, x2.y = t2, x2.prev = null, x2.next = null, x2.z = null, x2.prevZ = null, x2.nextZ = null, x2.steiner = false, x2;
  }
}
const B = new Array(), C$1 = 8096;
let D = 0;
for (let E3 = 0; E3 < C$1; E3++)
  B.push(new q());
const i$2 = 1e-5, f$2 = new e$6(0, 0, 0, 1, 0), c$1 = new e$6(0, 0, 0, 1, 0);
function u$2(t2, e4, n2) {
  let o2 = 0;
  for (let r6 = 1; r6 < n2; r6++) {
    const n3 = t2[2 * (e4 + r6 - 1)], s2 = t2[2 * (e4 + r6 - 1) + 1];
    o2 += (t2[2 * (e4 + r6)] - n3) * (t2[2 * (e4 + r6) + 1] + s2);
  }
  return o2;
}
function h$1(t2, e4, n2, o2, r6) {
  let s2 = 0;
  const l2 = 2;
  for (let i2 = n2; i2 < o2; i2 += 3) {
    const n3 = (t2[i2] - r6) * l2, o3 = (t2[i2 + 1] - r6) * l2, f2 = (t2[i2 + 2] - r6) * l2;
    s2 += Math.abs((e4[n3] - e4[f2]) * (e4[o3 + 1] - e4[n3 + 1]) - (e4[n3] - e4[o3]) * (e4[f2 + 1] - e4[n3 + 1]));
  }
  return s2;
}
function a$2(t2, e$12) {
  const { coords: n2, lengths: o2, hasIndeterminateRingOrder: r6 } = e$12, s2 = 0, f2 = t2;
  if (r6)
    return false;
  let c2 = 0;
  for (let a3 = 0; a3 < o2.length; ) {
    let t3 = a3, e$13 = o2[a3], r7 = u$2(n2, c2, e$13);
    const g3 = [];
    for (; ++t3 < o2.length; ) {
      const s3 = o2[t3], l2 = u$2(n2, c2 + e$13, s3);
      if (!(l2 > 0))
        break;
      r7 += l2, g3.push(c2 + e$13), e$13 += s3;
    }
    const p2 = f2.length;
    e3(f2, n2, c2, c2 + e$13, g3, 2, s2);
    const m2 = h$1(f2, n2, p2, f2.length, s2), d4 = Math.abs(r7);
    if (Math.abs((m2 - d4) / Math.max(1e-7, d4)) > i$2)
      return f2.length = 0, false;
    a3 = t3, c2 += e$13;
  }
  return true;
}
function p$4(t2) {
  const { coords: n2, lengths: o2 } = t2, { buffer: r6 } = r$a(n2, o2);
  return r6;
}
function m$1(t2, e4, n2) {
  let o2 = 0;
  for (let r6 = 0; r6 < t2.lengths.length; r6++) {
    const s2 = t2.lengths[r6];
    for (let r7 = 0; r7 < s2; r7++) {
      const s3 = t2.coords[2 * (r7 + o2)], l2 = t2.coords[2 * (r7 + o2) + 1];
      if (s3 < e4 || s3 > n2 || l2 < e4 || l2 > n2)
        return true;
    }
    o2 += s2;
  }
  return false;
}
function d$4(t2, e4) {
  if (null == t2)
    return null;
  if (!m$1(t2, -128, c$6 + 128))
    return t2;
  f$2.setPixelMargin(e4), f$2.reset(t$6.Polygon);
  let n2 = 0;
  for (let o2 = 0; o2 < t2.lengths.length; o2++) {
    const e5 = t2.lengths[o2];
    let r6 = t2.coords[2 * (0 + n2)], s2 = t2.coords[2 * (0 + n2) + 1];
    f$2.moveTo(r6, s2);
    for (let o3 = 1; o3 < e5; o3++)
      r6 = t2.coords[2 * (o3 + n2)], s2 = t2.coords[2 * (o3 + n2) + 1], f$2.lineTo(r6, s2);
    f$2.close(), n2 += e5;
  }
  const l2 = f$2.result(false);
  if (!l2)
    return null;
  const i2 = [], c2 = [];
  for (const o2 of l2) {
    let t3 = 0;
    for (const e5 of o2)
      c2.push(e5.x), c2.push(e5.y), t3++;
    i2.push(t3);
  }
  return new t$7(i2, c2);
}
function x$3(t2, e4) {
  c$1.setPixelMargin(e4);
  const n2 = c$1, r6 = -e4, l2 = c$6 + e4;
  let i2 = [], f2 = false;
  if (!t2.nextPath())
    return null;
  let u2 = true;
  for (; u2; ) {
    t2.seekPathStart();
    const e5 = [];
    if (!t2.pathSize)
      return null;
    n2.reset(t$6.LineString), t2.nextPoint();
    let s2 = t2.x, c2 = t2.y;
    if (f2)
      n2.moveTo(s2, c2);
    else {
      if (s2 < r6 || s2 > l2 || c2 < r6 || c2 > l2) {
        f2 = true;
        continue;
      }
      e5.push({ x: s2, y: c2 });
    }
    let h2 = false;
    for (; t2.nextPoint(); )
      if (s2 = t2.x, c2 = t2.y, f2)
        n2.lineTo(s2, c2);
      else {
        if (s2 < r6 || s2 > l2 || c2 < r6 || c2 > l2) {
          h2 = true;
          break;
        }
        e5.push({ x: s2, y: c2 });
      }
    if (h2)
      f2 = true;
    else {
      if (f2) {
        const t3 = n2.resultWithStarts();
        if (t3)
          for (const e6 of t3)
            i2.push(e6);
      } else
        i2.push({ line: e5, start: 0 });
      u2 = t2.nextPath(), f2 = false;
    }
  }
  return i2 = i2.filter((t3) => t3.line.length > 1), 0 === i2.length ? null : i2;
}
f$2.setExtent(c$6), c$1.setExtent(c$6);
const d$3 = 8, x$2 = 16, f$1 = 65535, p$3 = (r6) => class extends r6 {
  constructor(...e4) {
    super(...e4), this.tessellationProperties = {}, this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0 }, this.geometryType = E$2.LINE;
  }
  writeGeometry(e4, t2, i2, r7) {
    this._writeGeometry(e4, t2, i2, r7);
  }
  _initializeTessellator(e4) {
    const i2 = C$3.load(this._materialKey), r7 = w$7.load(this._materialKey), s2 = this._tessellationOptions, h2 = i2.vvSizeFieldStops || i2.vvSizeMinMaxValue || i2.vvSizeScaleStops || i2.vvSizeUnitValue, m2 = this.tessellationProperties._halfWidth < $ && !e4 && !h2;
    this.tessellationProperties.minMaxZoom = this._minMaxZoom, s2.wrapDistance = f$1, s2.textured = this._isDashed || this._hasPattern, s2.offset = this.tessellationProperties.offset, s2.halfWidth = this.tessellationProperties._halfWidth;
    const d4 = m2 ? 0 : 1, x2 = O(r7) ? v : _;
    this._lineTessellator = new c$8(x2(this.tessellationProperties, d4, d4), u$1(this.tessellationProperties), m2);
  }
  _write(e4, t2, i2, r7) {
    const s2 = "esriGeometryPoint" === t2.geometryType;
    e4.recordStart(t2.getDisplayId(), this._materialKey, this.geometryType, s2), this._writeGeometry(e4, t2, r7, s2), e4.recordEnd();
  }
  _writeGeometry(t2, i2, r7, s2) {
    const o2 = r7 || a$6.fromFeatureSetReaderCIM(i2);
    if (!o2)
      return;
    const n2 = this._getLines(o2, s2);
    null != n2 && this._writeVertices(t2, i2, n2);
  }
  _getLines(e4, t2) {
    return x$3(e4, t2 ? 256 : 16);
  }
  _writeVertices(e4, t2, i2) {
    const r7 = t2.getDisplayId(), s2 = e4.vertexCount(), o2 = this.tessellationProperties, h2 = this._tessellationOptions;
    o2.out = e4, o2.id = r7, o2.indexCount = 0, o2.vertexCount = 0, o2.offset = s2, h2.capType = this._capType, h2.joinType = this._joinType;
    const m2 = w$7.load(this._materialKey);
    this.tessellationProperties.key = O(m2) ? m2 : C$3.load(this._materialKey);
    for (const { line: n2, start: l2 } of i2)
      h2.initialDistance = l2 % f$1, this._lineTessellator.tessellate(n2, h2);
  }
}, _ = (e4, t2, i2) => (o2, n2, l2, a3, h2, m2, f2, p2, _2, v2, u2) => {
  const W2 = w$6(u2, Math.ceil(x$2 * e4._halfWidth)), c2 = x$8(Math.round(x$2 * f2), Math.round(x$2 * p2), Math.round(x$2 * _2), Math.round(x$2 * v2)), y2 = x$8(x$2 * h2, x$2 * m2, 0, e4._bitset), M2 = e4.out;
  return M2.vertexBounds(o2, n2, t2, i2), M2.vertexWrite(w$6(d$3 * o2, d$3 * n2)), M2.vertexWrite(e4.id), M2.vertexWrite(e4._fillColor), M2.vertexWrite(c2), M2.vertexWrite(W2), M2.vertexWrite(e4._tl), M2.vertexWrite(e4._br), M2.vertexWrite(y2), M2.vertexWrite(w$6(Math.ceil(x$2 * e4._halfReferenceWidth), 0)), M2.vertexWrite(e4.minMaxZoom), M2.vertexEnd(), e4.offset + e4.vertexCount++;
}, v = (e4, t2, i2) => (o2, n2, l2, a3, m2, f2, p2, _2, v2, u2, W2) => {
  const c2 = w$6(x$2 * e4._halfWidth, x$2 * e4._halfReferenceWidth), y2 = x$8(x$2 * p2 + 128, x$2 * _2 + 128, x$2 * v2 + 128, x$2 * u2 + 128), M2 = e4.out, C2 = e4._bitset << 24 | e4.id;
  M2.vertexBounds(o2, n2, t2, i2), M2.vertexWrite(w$6(d$3 * o2, d$3 * n2)), M2.vertexWrite(C2), M2.vertexWrite(e4._fillColor);
  const P2 = b$3(e4.key);
  return P2 || (M2.vertexWrite(0), M2.vertexWrite(0)), M2.vertexWrite(0), M2.vertexWrite(c2), M2.vertexWrite(y2), P2 || M2.vertexWrite(e4.minMaxZoom), M2.vertexEnd(), e4.offset + e4.vertexCount++;
}, u$1 = (e4) => (t2, i2, r6) => {
  const s2 = e4.out;
  s2.indexWrite(t2), s2.indexWrite(i2), s2.indexWrite(r6), e4.indexCount += 3;
};
let K$1 = class K extends p$3(r$4) {
  constructor(e4, t2, i2, r6, s2, o2, p2, f2, d4, y2, S2, _2, j3, g3, w2, K3, P2, x2, b2, O2) {
    super();
    const T = C$3.load(e4);
    t2 && (T.sdf = t2.sdf, T.pattern = true, T.textureBinding = t2.textureBinding), this._capType = r6, this._joinType = s2, this._miterLimitCosine = c$4(o2), this.tessellationProperties._fillColor = p2, this.tessellationProperties._tl = f2, this.tessellationProperties._br = d4, this._hasPattern = y2, this._isDashed = S2, this._zOrder = P2, this._effects = x2 || null, this._minMaxZoom = w$6(Math.round(b2 * me), Math.round(O2 * me)), this._materialKey = T.data;
    const M2 = (j3 ? pe : 0) | (g3 ? ke : 0) | (_2 ? je : 0) | (w2 ? ge : 0);
    this.tessellationProperties._bitset = M2, this.tessellationProperties._halfWidth = 0.5 * i2, this.tessellationProperties._halfReferenceWidth = 0.5 * K3, this.tessellationProperties.offset = 0, this._initializeTessellator(false);
  }
  static fromCIMLine(e4, r6, l2) {
    const n2 = e4.color, a3 = e4.scaleFactor || 1, m2 = !!e4.dashTemplate;
    let c2 = e4.cap;
    m2 && c2 === e$7.ROUND && (c2 = e$7.SQUARE);
    const p2 = e4.join, f2 = u$8(e4.width) * a3, u2 = u$8(e4.referenceWidth), d4 = u$8(e4.miterLimit), y2 = n2 && t$4(n2) || 0, [L3, _2] = v$3(e4.scaleInfo, l2), j3 = false;
    if (!r6)
      return new K(e4.materialKey, r6, f2, c2, p2, d4, y2, 0, 0, false, m2, e4.scaleDash ?? false, e4.colorLocked ?? false, j3, e4.sampleAlphaOnly, u2, e4.zOrder, e4.effects, L3, _2);
    const { rect: g3, width: w2, height: P2 } = r6, x2 = g3.x + ae, b2 = g3.y + ae, O2 = x2 + w2, T = b2 + P2, M2 = w$6(x2, b2), W2 = w$6(O2, T), z3 = false;
    return new K(e4.materialKey, r6, f2, c2, p2, d4, y2, M2, W2, true, m2, e4.scaleDash ?? false, e4.colorLocked ?? false, z3, e4.sampleAlphaOnly, u2, e4.zOrder, e4.effects, L3, _2);
  }
  static fromFillOutline(e4) {
    const t2 = w$7.load(e4.materialKey);
    return O(t2) && e4.outline && "esriSLSSolid" === e4.outline?.style ? K.fromSimpleLine({ hash: "", materialKey: e4.materialKey, ...e4.outline }, null, true) : null;
  }
  static fromSimpleLine(e4, i2, s2 = false) {
    const { color: l2 } = e4, n2 = "esriSLSSolid" !== e4.style && "esriSLSNull" !== e4.style, a3 = k$4(e4.cap || "round"), m2 = G$1(e4.join || "round");
    let c2 = l2 && "esriSLSNull" !== e4.style && o$7(l2) || 0;
    "esriSLSNull" === e4.style && (c2 = 0);
    const u2 = u$8(e4.width), d4 = e4.miterLimit;
    if (!i2)
      return new K(e4.materialKey, i2, u2, a3, m2, d4, c2, 0, 0, false, n2, true, false, s2, false, u2, 0, null, n$3, o$3);
    const { rect: y2, width: L3, height: S2 } = i2, g3 = y2.x + ae, w2 = y2.y + ae, P2 = g3 + L3, x2 = w2 + S2, b2 = w$6(g3, w2), O2 = w$6(P2, x2);
    return new K(e4.materialKey, i2, u2, a3, m2, d4, c2, b2, O2, true, n2, true, false, s2, false, u2, 0, null, n$3, o$3);
  }
  static fromPictureLineSymbol(t2, i2, r6, s2) {
    return s$4.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate").error("PictureLineSymbol support does not exist!"), null;
  }
};
const y$2 = 100, p$2 = 1, x$1 = (x2) => class extends x2 {
  constructor(...t2) {
    super(...t2), this.forceLibtess = false, this._bitset = 0, this._lineTemplate = null, this.geometryType = E$2.FILL;
  }
  _maybeAddLineTemplate(e4) {
    this._lineTemplate = K$1.fromFillOutline(e4);
  }
  _write(e4, t2, r6, i2) {
    const l2 = "esriGeometryPoint" === t2.geometryType, n2 = w$7.load(this._materialKey);
    e4.recordStart(t2.getDisplayId(), this._materialKey, this.geometryType, l2), this._writeGeometry(e4, t2, n2, i2, l2), O(n2) && null != this._lineTemplate && this._lineTemplate.writeGeometry(e4, t2, i2, l2), e4.recordEnd();
  }
  _writeGeometry(e4, t2, r6, i2, s2) {
    const o2 = this._getGeometry(t2, i2, s2);
    if (null == o2)
      return;
    const l2 = [];
    if (!(o2.maxLength > y$2) && !this.forceLibtess && a$2(l2, o2))
      return void (l2.length && this._writeVertices(e4, t2, o2.coords, o2.lengths, r6, l2));
    const a3 = p$4(o2);
    this._writeVertices(e4, t2, a3, [a3.length / 2], r6);
  }
  _writeVertex(e4, i2, s2, o2, n2, m2) {
    const a3 = w$6(p$2 * o2, p$2 * n2);
    if (e4.vertexBounds(o2, n2, 0, 0), e4.vertexWrite(a3), e4.vertexWrite(i2), s2.symbologyType === S$3.DOT_DENSITY)
      e4.vertexWriteF32(1 / Math.abs(m2.readGeometryArea()));
    else {
      e4.vertexWrite(this.fillColor);
      const t2 = b$3(s2);
      t2 || (e4.vertexWrite(this.tl), e4.vertexWrite(this.br)), e4.vertexWrite(this.aux21), e4.vertexWrite(this.aux22), e4.vertexWrite(this.aux3), t2 || e4.vertexWrite(this._minMaxZoom);
    }
  }
  _writeVertices(e4, t2, r6, s2, o2, l2) {
    const n2 = t2.getDisplayId(), m2 = this._bitset << 24 | n2, a3 = s2.reduce((e5, t3) => e5 + t3), h2 = R(o2.geometryType, o2.symbologyType).geometry / 4, y2 = e4.vertexCount();
    e4.vertexEnsureSize(h2 * a3);
    let p2 = 0;
    if (l2)
      for (const i2 of l2) {
        const s3 = r6[2 * i2], l3 = r6[2 * i2 + 1];
        this._writeVertex(e4, m2, o2, s3, l3, t2), p2++;
      }
    else
      for (let i2 = 0; i2 < r6.length; i2 += 2) {
        const s3 = Math.round(r6[i2]), l3 = Math.round(r6[i2 + 1]);
        this._writeVertex(e4, m2, o2, s3, l3, t2), p2++;
      }
    e4.indexEnsureSize(p2);
    for (let i2 = 0; i2 < p2; i2++)
      e4.indexWrite(i2 + y2);
  }
  _getGeometry(e4, t2, r6) {
    const i2 = t2?.asOptimized() || e4.readGeometryForDisplay();
    if (!i2)
      return null;
    return d$4(i2, r6 ? 256 : 8);
  }
};
const i$1 = s$4.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");
let r$2 = class r3 extends r$4 {
  constructor(e4) {
    super(), this._ongoingMaterialRequestMap = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._dynamicPropertyMap = /* @__PURE__ */ new Map(), this._cimLayer = e4;
  }
  async analyze(e4, s2, r6, n2, l2) {
    if (l2 && 0 === l2.length)
      return null;
    const o2 = l2 && l2.length > 0, m2 = s2.readLegacyFeature(), c2 = s2.getObjectId(), h2 = this._materialCache, u2 = this._cimLayer.materialHash;
    if (!u2)
      return i$1.error("A Dynamic mesh template must have a material hash value or function!"), null;
    const p2 = "function" == typeof u2 ? u2(m2, r6, n2, c2) : u2, g3 = h2.get(p2);
    if (null != g3)
      return g3;
    const y2 = this._ongoingMaterialRequestMap.get(p2);
    if (y2)
      return y2;
    const M2 = this._cimLayer, d4 = V(M2.cim, this._cimLayer.materialOverrides);
    d4.mosaicHash = p2;
    const { type: f2, url: _2 } = M2, b2 = { cim: d4, type: f2, mosaicHash: p2, url: _2, size: null, dashTemplate: null, text: null, fontName: null, objectId: c2, animatedSymbolProperties: null };
    switch (f2) {
      case "marker":
        b2.size = t$8(M2.size, m2, r6, n2), b2.animatedSymbolProperties = t$8(M2.animatedSymbolProperties, m2, r6, n2);
        break;
      case "line":
        b2.dashTemplate = M2.dashTemplate;
        break;
      case "text":
        b2.text = t$8(M2.text, m2, r6, n2), b2.fontName = t$8(M2.fontName, m2, r6, n2);
    }
    const L3 = e4.getMosaicItem(b2, l2).then((e5) => (o2 || (this._ongoingMaterialRequestMap.delete(p2), h2.set(p2, e5)), e5)).catch((e5) => (this._ongoingMaterialRequestMap.delete(p2), i$1.error(".analyze()", e5.message), null));
    return o2 || this._ongoingMaterialRequestMap.set(p2, L3), L3;
  }
};
let j$1 = class j extends x$1(r$2) {
  constructor(l2, h2, n2) {
    if (super(l2), this._minMaxZoom = w$6(Math.round(h2 * me), Math.round(n2 * me)), e$8(l2.color)) {
      const t2 = (t3, e4, i2) => {
        const o2 = l2.color(t3, e4, i2);
        return o2 && t$4(o2) || 0;
      };
      this._dynamicPropertyMap.set("fillColor", t2);
    } else {
      const t2 = l2.color;
      this.fillColor = t2 && t$4(t2) || 0;
    }
    const c2 = "CIMMarkerPlacementInsidePolygon" === l2.cim.placement?.type && l2.cim.placement.shiftOddRows ? 2 : 1, f2 = l2.height;
    if (e$8(f2)) {
      const t2 = (t3, e4, s2) => f2(t3, e4, s2) * c2;
      this._dynamicPropertyMap.set("_height", t2);
    } else
      this._height = (f2 || 0) * c2;
    const y2 = l2.offsetX;
    if (e$8(y2)) {
      const e4 = (e5, s2, i2) => u$8(y2(e5, s2, i2));
      this._dynamicPropertyMap.set("_offsetX", e4);
    } else
      this._offsetX = u$8(y2 || 0);
    const d4 = l2.offsetY;
    if (e$8(d4)) {
      const e4 = (e5, s2, i2) => u$8(-d4(e5, s2, i2));
      this._dynamicPropertyMap.set("_offsetY", e4);
    } else
      this._offsetY = u$8(-d4 || 0);
    const u2 = l2.scaleX;
    e$8(u2) ? this._dynamicPropertyMap.set("_scaleX", u2) : this._scaleX = u2 || 1;
    const M2 = l2.angle;
    if (e$8(M2)) {
      const t2 = (t3, e4, s2) => c$9(M2(t3, e4, s2));
      this._dynamicPropertyMap.set("_angle", t2);
    } else
      this._angle = c$9(M2) || 0;
    if (null != l2.effects) {
      const t2 = l2.effects;
      e$8(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    this._cimFillLayer = l2, this._bitset = (l2.colorLocked ? pe : 0) | (l2.applyRandomOffset ? ue : 0) | (l2.sampleAlphaOnly ? ge : 0) | (l2.hasUnresolvedReplacementColor ? ve : 0), this._fillMaterialKey = l2.materialKey;
  }
  static fromCIMFill(t2, e4) {
    const [s2, i2] = v$3(t2.scaleInfo, e4);
    return new j(t2, s2, i2);
  }
  bindFeature(e4, s2, i2) {
    const o2 = e4.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t2, e5) => {
      this[e5] = t2(o2, s2, i2);
    });
    const r6 = w$7.load(this._fillMaterialKey), a3 = this._materialCache, m2 = (0, this._cimFillLayer.materialHash)(o2, s2, i2), p2 = a3.get(m2);
    let u2 = null;
    if (p2 && e$3(p2.spriteMosaicItem) && (u2 = p2.spriteMosaicItem), u2) {
      const { rect: e5, width: s3, height: i3 } = u2, o3 = e5.x + ae, a4 = e5.y + ae, m3 = o3 + s3, p3 = a4 + i3;
      let d4 = u$8(this._height);
      d4 <= 0 && (d4 = p3 - a4), d4 < i$c && (d4 *= h$5, this._bitset |= ye), d4 = Math.round(d4);
      let M2 = u$8(this._height / i3 * s3);
      M2 <= 0 && (M2 = m3 - o3), M2 < i$c && (M2 *= h$5, this._bitset |= be), M2 = Math.round(M2);
      const g3 = this._scaleX, x2 = 1;
      this.tl = w$6(o3, a4), this.br = w$6(m3, p3), this.aux21 = w$6(M2, d4), this.aux22 = w$6(this._offsetX, this._offsetY), this.aux3 = x$8(g3 * h$5, x2 * h$5, this._angle, 0), r6.sdf = u2.sdf, r6.pattern = true, r6.textureBinding = u2.textureBinding;
    } else
      this.tl = 0, this.br = 0, this.aux21 = 0, this.aux22 = 0, this.aux3 = 0, r6.sdf = false, r6.pattern = false, r6.textureBinding = 0;
    this._materialKey = r6.data;
  }
};
let d$2 = class d extends p$3(r$2) {
  constructor(a3, n2, m2) {
    super(a3), this._minMaxZoom = w$6(Math.round(n2 * me), Math.round(m2 * me)), this._cimLineLayer = a3;
    let p2 = 0;
    e$8(a3.width) || (p2 = 0.5 * u$8(a3.width));
    const _2 = (i2, s2, r6) => e$8(a3.width) ? 0.5 * u$8(a3.width(i2, s2, r6)) : p2;
    this._dynamicPropertyMap.set("_halfWidth", _2), e$8(a3.cap) ? this._dynamicPropertyMap.set("_capType", a3.cap) : this._capType = a3.cap, e$8(a3.join) ? this._dynamicPropertyMap.set("_joinType", a3.join) : this._joinType = a3.join;
    const f2 = a3.color;
    if (e$8(f2)) {
      const t2 = (t3, e4, s2) => t$4(f2(t3, e4, s2));
      this._dynamicPropertyMap.set("_fillColor", t2);
    } else
      this._fillColor = f2 && t$4(f2) || 0;
    const d4 = a3.miterLimit;
    if (e$8(d4)) {
      const t2 = (t3, e4, i2) => c$4(d4(t3, e4, i2));
      this._dynamicPropertyMap.set("_miterLimitCosine", t2);
    } else
      this._miterLimitCosine = c$4(d4);
    if (null != a3.effects) {
      const t2 = a3.effects;
      e$8(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    this._scaleFactor = a3.scaleFactor || 1, this._isDashed = null != a3.dashTemplate;
    const y2 = a3.colorLocked ? pe : 0, P2 = a3.scaleDash ? je : 0, u2 = a3.sampleAlphaOnly ? ge : 0;
    this.tessellationProperties._bitset = y2 | P2 | u2, this._materialKey = a3.materialKey, this._initializeTessellator(true);
  }
  static fromCIMLine(t2, e4) {
    const [i2, s2] = v$3(t2.scaleInfo, e4);
    return new d(t2, i2, s2);
  }
  bindFeature(t2, e4, i2) {
    const s2 = t2.readLegacyFeature();
    this._dynamicPropertyMap.forEach((t3, r7) => {
      this[r7] = t3(s2, e4, i2);
    }), this._halfWidth *= this._scaleFactor;
    const r6 = this._materialCache, o2 = (0, this._cimLineLayer.materialHash)(s2, e4, i2), l2 = r6.get(o2);
    let c2 = null;
    if (l2 && e$3(l2.spriteMosaicItem) && (c2 = l2.spriteMosaicItem), c2) {
      this._hasPattern = true;
      const { rect: t3, width: e5, height: i3 } = c2, s3 = t3.x + ae, r7 = t3.y + ae, o3 = s3 + e5, l3 = r7 + i3;
      this.tessellationProperties._tl = w$6(s3, r7), this.tessellationProperties._br = w$6(o3, l3);
    } else
      this._hasPattern = false, this.tessellationProperties._tl = 0, this.tessellationProperties._br = 0;
    this.tessellationProperties._fillColor = this._fillColor, this.tessellationProperties._halfWidth = this._halfWidth, this.tessellationProperties.offset = 0, this.tessellationProperties._halfReferenceWidth = this.tessellationProperties._halfWidth;
    const m2 = C$3.load(this._materialKey);
    c2 && (m2.sdf = c2.sdf, m2.pattern = true, m2.textureBinding = c2.textureBinding), this._materialKey = m2.data;
  }
};
const k$1 = n$7(), P = n$5();
let L$1 = class L extends y$4(r$2) {
  constructor(t2, e4, i2) {
    super(t2), this._cimMarkerLayer = t2, this._minMaxZoom = w$6(Math.round(e4 * me), Math.round(i2 * me));
    const r6 = t2.color;
    if (e$8(r6)) {
      const t3 = (t4, e5, s2) => t$4(r6(t4, e5, s2));
      this._dynamicPropertyMap.set("_fillColor", t3);
    } else
      this._fillColor = t$4(r6);
    const y2 = t2.outlineColor;
    if (e$8(y2)) {
      const t3 = (t4, e5, s2) => t$4(y2(t4, e5, s2));
      this._dynamicPropertyMap.set("_outlineColor", t3);
    } else
      this._outlineColor = t$4(y2);
    const p2 = t2.size;
    if (e$8(p2)) {
      const t3 = (t4, e5, i3) => u$8(p2(t4, e5, i3));
      this._dynamicPropertyMap.set("_size", t3);
    } else
      this._size = u$8(p2) || 0;
    const M2 = t2.scaleX;
    e$8(M2) ? this._dynamicPropertyMap.set("_scaleX", M2) : this._scaleX = M2;
    const d4 = t2.offsetX;
    if (e$8(d4)) {
      const t3 = (t4, e5, i3) => u$8(d4(t4, e5, i3));
      this._dynamicPropertyMap.set("xOffset", t3);
    } else
      this.xOffset = u$8(d4) || 0;
    const u2 = t2.offsetY;
    if (e$8(u2)) {
      const t3 = (t4, e5, i3) => u$8(u2(t4, e5, i3));
      this._dynamicPropertyMap.set("yOffset", t3);
    } else
      this.yOffset = u$8(u2) || 0;
    const g3 = t2.outlineWidth;
    if (e$8(g3)) {
      const t3 = (t4, e5, i3) => u$8(g3(t4, e5, i3));
      this._dynamicPropertyMap.set("_outlineWidth", t3);
    } else
      this._outlineWidth = u$8(g3) || 0;
    const k2 = t2.rotation;
    if (e$8(k2) ? this._dynamicPropertyMap.set("_angle", k2) : this._angle = k2 || 0, null != t2.effects) {
      const e5 = t2.effects;
      e$8(e5) ? this._dynamicPropertyMap.set("_effects", e5) : this._effects = e5;
    }
    if (null != t2.markerPlacement) {
      const e5 = t2.markerPlacement;
      e$8(e5) ? this._dynamicPropertyMap.set("_markerPlacement", e5) : this._markerPlacement = e5;
    }
    this._scaleFactor = t2.scaleFactor ?? 1, this._bitSet = (t2.alignment === i$7.MAP ? ne : le) | (t2.colorLocked ? pe : 0) | (t2.scaleSymbolsProportionally ? xe : 0), this._materialKey = t2.materialKey;
  }
  static fromCIMMarker(t2, e4) {
    const [s2, i2] = v$3(t2.scaleInfo, e4);
    return new L(t2, s2, i2);
  }
  bindFeature(i2, r6, o2) {
    const a3 = i2.readLegacyFeature(), n2 = i2.getObjectId();
    this._dynamicPropertyMap.forEach((t2, e4) => {
      this[e4] = t2(a3, r6, o2);
    });
    const c2 = this._cimMarkerLayer.materialHash, h2 = "function" == typeof c2 ? c2(a3, r6, o2, n2) : c2, m2 = this._materialCache.get(h2);
    if (!m2 || !e$3(m2.spriteMosaicItem) || !m2.spriteMosaicItem)
      return void s$4.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate").error(new s$2("mapview-cim", "Encountered an error when binding feature"));
    const l2 = m2.spriteMosaicItem, f2 = this._cimMarkerLayer.sizeRatio, M2 = l2.width / l2.height * this._scaleX, d4 = N.load(this._materialKey);
    d4.sdf = l2.sdf, d4.pattern = true, d4.textureBinding = l2.textureBinding, this._materialKey = d4.data;
    const u2 = this._cimMarkerLayer.rotateClockwise ? this._angle : -this._angle, L3 = this._size, j3 = L3 * M2, b2 = this.xOffset, z3 = this.yOffset;
    this.xOffset *= this._scaleFactor, this.yOffset *= this._scaleFactor;
    const x2 = this._cimMarkerLayer.scaleSymbolsProportionally && this._cimMarkerLayer.frameHeight ? this._size / u$8(this._cimMarkerLayer.frameHeight) : 1, O2 = this._outlineWidth * x2, w2 = u$8(this._cimMarkerLayer.referenceSize);
    let C2 = 0, W2 = 0;
    const F2 = this._cimMarkerLayer.anchorPoint;
    F2 && (this._cimMarkerLayer.isAbsoluteAnchorPoint ? this._size && (C2 = u$8(F2.x) / (this._size * M2), W2 = u$8(F2.y) / this._size) : (C2 = F2.x, W2 = F2.y)), this._anchorX = C2, this._anchorY = W2, this._sizeOutlineWidth = x$8(Math.round(Math.min(Math.sqrt(128 * j3), 255)), Math.round(Math.min(Math.sqrt(128 * L3), 255)), Math.round(Math.min(Math.sqrt(128 * O2), 255)), Math.round(Math.min(Math.sqrt(128 * w2), 255))), this.angle = u2;
    const S2 = Math.round(64 * f2);
    this._bitestAndDistRatio = w$6(this._bitSet, S2), this._computeSize(j3, L3, f2, O2, this._scaleFactor, l2, d4.hasSizeVV(), true), this._applyTransformation(P, k$1), this.xOffset = b2, this.yOffset = z3;
  }
};
function n(n2) {
  if (null == n2)
    return [];
  const r6 = new Array(n2.length);
  for (let t2 = 0; t2 < n2.length; t2++)
    r6[t2] = n2.charCodeAt(t2);
  return r6;
}
const y$1 = 5;
function p$1(t2, e4, i2, s2) {
  return "string" == typeof t2.text ? t2.text : "function" == typeof t2.text ? t2.text(e4, i2, s2) ?? "" : "";
}
let d$1 = class d2 extends w$3(r$2) {
  constructor(s2, o2, n2) {
    super(s2), this._horizontalAlignment = "center", this._verticalAlignment = "middle", this._textToGlyphs = /* @__PURE__ */ new Map(), this._minMaxZoom = w$6(Math.round(o2 * me), Math.round(n2 * me));
    const c2 = s2.scaleFactor || 1;
    this._cimTextLayer = s2;
    const m2 = s2.color;
    if (e$8(m2)) {
      const t2 = (t3, e4, i2) => t$4(m2(t3, e4, i2));
      this._dynamicPropertyMap.set("_color", t2);
    } else
      this._color = t$4(m2);
    const _2 = s2.outlineColor;
    if (e$8(_2)) {
      const t2 = (t3, e4, i2) => t$4(_2(t3, e4, i2));
      this._dynamicPropertyMap.set("_haloColor", t2);
    } else
      this._haloColor = t$4(_2);
    let f2;
    e$8(s2.size) || (f2 = Math.min(Math.round(u$8(s2.size * s2.sizeRatio)), 127));
    const p2 = (e4, o3, r6) => e$8(s2.size) ? Math.min(Math.round(u$8(s2.size(e4, o3, r6) * s2.sizeRatio)), 127) : f2;
    if (this._dynamicPropertyMap.set("_size", p2), e$8(s2.outlineSize)) {
      const e4 = (e5, i2, o3) => Math.min(Math.floor(y$1 * u$8(s2.outlineSize(e5, i2, o3) * s2.sizeRatio)), 127);
      this._dynamicPropertyMap.set("_haloSize", e4);
    } else
      this._haloSize = Math.min(Math.floor(y$1 * u$8(s2.outlineSize * s2.sizeRatio)), 127);
    let d4;
    e$8(s2.offsetX) || (d4 = Math.round(u$8(s2.offsetX * s2.sizeRatio)));
    const M2 = (e4, o3, r6) => e$8(s2.offsetX) ? Math.round(u$8(s2.offsetX(e4, o3, r6) * s2.sizeRatio)) : d4;
    let u2;
    this._dynamicPropertyMap.set("_xOffset", M2), e$8(s2.offsetY) || (u2 = Math.round(u$8(s2.offsetY * s2.sizeRatio)));
    const g3 = (e4, o3, r6) => e$8(s2.offsetY) ? Math.round(u$8(s2.offsetY(e4, o3, r6) * s2.sizeRatio)) : u2;
    if (this._dynamicPropertyMap.set("_yOffset", g3), e$8(s2.angle) ? this._dynamicPropertyMap.set("_angle", s2.angle) : this._angle = s2.angle, e$8(s2.horizontalAlignment) ? this._dynamicPropertyMap.set("_horizontalAlignment", s2.horizontalAlignment) : this._horizontalAlignment = s2.horizontalAlignment, e$8(s2.verticalAlignment) ? this._dynamicPropertyMap.set("_verticalAlignment", s2.verticalAlignment) : this._verticalAlignment = s2.verticalAlignment, null != s2.effects) {
      const t2 = s2.effects;
      e$8(t2) ? this._dynamicPropertyMap.set("_effects", t2) : this._effects = t2;
    }
    if (null != s2.markerPlacement) {
      const t2 = s2.markerPlacement;
      e$8(t2) ? this._dynamicPropertyMap.set("_markerPlacement", t2) : this._textPlacement = t2;
    }
    e$8(s2.text) ? this._dynamicPropertyMap.set("_text", s2.text) : this._text = s2.text, this._backgroundColor = s2.backgroundColor && t$4(s2.backgroundColor), this._borderLineColor = s2.borderLineColor && t$4(s2.borderLineColor), this._borderLineSize = s2.borderLineWidth, this._scaleFactor = c2;
    const z3 = Math.min(Math.round(u$8(s2.referenceSize * s2.sizeRatio)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * z3)), this._materialKey = s2.materialKey;
    const x2 = P$2.load(this._materialKey);
    x2.sdf = true, this._bitset = (s2.alignment === i$7.MAP ? 1 : 0) | (s2.colorLocked ? 1 : 0) << 1, this._materialKey = x2.data, this._decoration = "none", this._lineHeight = 1, this._lineWidth = 512, this._isCIM = true;
  }
  static fromCIMText(t2, e4) {
    const [i2, s2] = v$3(t2.scaleInfo, e4);
    return new d2(t2, i2, s2);
  }
  async analyze(t2, e4, i2, s2) {
    const o2 = e4.readLegacyFeature(), r6 = p$1(this._cimTextLayer, o2, i2, s2), n$12 = await super.analyze(t2, e4, i2, s2, n(r6));
    return n$12?.glyphMosaicItems && this._textToGlyphs.set(r6, n$12.glyphMosaicItems), n$12;
  }
  bindFeature(t2, e4, i2) {
    const r6 = t2.readLegacyFeature();
    if (this._dynamicPropertyMap.forEach((t3, s2) => {
      this[s2] = t3(r6, e4, i2);
    }), !this._text || 0 === this._text.length)
      return void (this._shapingInfo = null);
    this._size *= this._scaleFactor, this._scale = this._size / b$2, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = r$8(this._horizontalAlignment ?? "center"), this._yAlignD = n$4(this._verticalAlignment ?? "baseline");
    const a3 = this._textToGlyphs.get(this._text) ?? [];
    this.bindTextInfo(a3, false);
  }
};
class K2 extends x$1(r$4) {
  constructor(t2, e4, l2, o2, r6, i2, s2, a3, n2, m2, c2, f2, d4, u2, M2, j3) {
    super(), this._effects = u2 || void 0;
    const w2 = w$7.load(t2);
    e4 && (w2.sdf = e4.sdf, w2.pattern = true, w2.textureBinding = e4.textureBinding), this.fillColor = l2, this.tl = o2, this.br = r6, this.aux21 = w$6(i2, s2), this.aux22 = w$6(a3, n2), this.aux3 = x$8(m2, c2, f2, 0), this._bitset = d4, this._minMaxZoom = w$6(Math.round(M2 * me), Math.round(j3 * me)), this._materialKey = w2.data;
  }
  static fromCIMFill(e4, h2, d4) {
    const y2 = e4.color, x2 = y2 && t$4(y2) || 0, j3 = e4.materialKey, [w2, g3] = v$3(e4.scaleInfo, d4);
    let F2 = (e4.colorLocked ? pe : 0) | (e4.applyRandomOffset ? ue : 0) | (e4.sampleAlphaOnly ? ge : 0) | (e4.hasUnresolvedReplacementColor ? ve : 0);
    if (!h2)
      return new K2(j3, null, x2, 0, 0, 0, 0, 0, 0, 0, 0, 0, F2, e4.effects, w2, g3);
    const { rect: _2, width: b2, height: L3 } = h2, C2 = e4.scaleX || 1, T = _2.x + ae, A2 = _2.y + ae, B2 = T + b2, G2 = A2 + L3, I = u$8(e4.height);
    let R2 = C2 * I;
    "CIMHatchFill" === e4.cim.type && (R2 *= b2 / L3);
    let S2 = I;
    S2 <= 0 && (S2 = G2 - A2), S2 < i$c && (S2 *= h$5, F2 |= ye), S2 = Math.round(S2);
    let U2 = R2;
    U2 <= 0 && (U2 = B2 - T), U2 < i$c && (U2 *= h$5, F2 |= be), U2 = Math.round(U2);
    const v2 = u$8(e4.offsetX || 0), O2 = u$8(-e4.offsetY || 0), W2 = w$6(T, A2), X = w$6(B2, G2);
    return new K2(j3, h2, x2, W2, X, U2, S2, v2, O2, h$5, h$5, c$9(e4.angle), F2, e4.effects, w2, g3);
  }
  static fromSimpleFill(t2, l2, r6 = false) {
    const { color: i2 } = t2, s2 = i2 && "esriSFSNull" !== t2.style && o$7(i2) || 0;
    let h2 = r6 ? pe : 0;
    const d4 = t2.materialKey;
    let u2;
    if (l2) {
      const { rect: t3, width: e4, height: o2, pixelRatio: r7 } = l2, i3 = t3.x + ae, y2 = t3.y + ae, x2 = i3 + e4, M2 = y2 + o2, g3 = w$6(i3, y2), F2 = w$6(x2, M2);
      let _2 = e4 / r7;
      _2 < i$c && (_2 *= h$5, h2 |= be), _2 = Math.round(_2);
      let b2 = o2 / r7;
      b2 < i$c && (b2 *= h$5, h2 |= ye), b2 = Math.round(b2), u2 = new K2(d4, l2, s2, g3, F2, _2, b2, 0, 0, h$5, h$5, 0, h2, null, n$3, o$3);
    } else
      u2 = new K2(d4, null, s2, 0, 0, 0, 0, 0, 0, 0, 0, 0, h2, null, n$3, o$3);
    return u2._maybeAddLineTemplate(t2), u2;
  }
  static fromPictureFill(e4, l2, r6 = false) {
    const i2 = a$8, { rect: s2, width: h2, height: u2 } = l2, y2 = s2.x + ae, x2 = s2.y + ae, M2 = y2 + h2, g3 = x2 + u2, F2 = w$6(y2, x2), _2 = w$6(M2, g3);
    let b2 = r6 ? pe : 0, L3 = u$8(e4.width);
    L3 < i$c && (L3 *= h$5, b2 |= be), L3 = Math.round(L3);
    let C2 = u$8(e4.height);
    C2 < i$c && (C2 *= h$5, b2 |= ye), C2 = Math.round(C2);
    const T = u$8(e4.xoffset), A2 = u$8(-e4.yoffset), B2 = e4.materialKey, G2 = new K2(B2, l2, i2, F2, _2, L3, C2, T, A2, h$5 * e4.xscale, h$5 * e4.yscale, 0, b2, null, n$3, o$3);
    return G2._maybeAddLineTemplate(e4), G2;
  }
}
let r$1 = class r4 {
  constructor() {
    this._resolver = null;
  }
  isHeld() {
    return !!this._resolver;
  }
  async acquire() {
    this._resolver ? (await this._resolver.promise, await this.acquire()) : this._resolver = C$4();
  }
  release() {
    const e4 = this._resolver;
    this._resolver = null, e4?.resolve();
  }
};
async function s(e4, r6, s2) {
  try {
    await e4.acquire(), await r6(s2), e4.release();
  } catch (t2) {
    throw e4.release(), t2;
  }
}
const a$1 = async (a3, i2, r6) => {
  const n2 = new j$3(r6, i2);
  return new l$5(await n2.analyzeSymbolReference(a3.data, false), a3.data, a3.rendererKey, a3.maxVVSize);
};
async function i(e4, t2, i2, r6) {
  if (!e4)
    return null;
  if ("cim" === e4.type)
    return a$1(e4, t2, i2);
  if ("web-style" === e4.type) {
    const { fetchCIMSymbolReference: n2 } = await import("./chunk-0aF7vulM.js"), l2 = { type: "cim", data: await n2(e4, null, r6) ?? void 0, rendererKey: e4.rendererKey, maxVVSize: e4.maxVVSize };
    return a$1(l2, t2, i2);
  }
  return e4;
}
function r5(e4) {
  if (!e4)
    return null;
  const { avoidSDFRasterization: t2, type: a3, cim: i2, url: r6, materialHash: n2, maxVVSize: l2 } = e4, m2 = { cim: i2, type: a3, mosaicHash: n2, url: r6, size: null, dashTemplate: null, path: null, text: null, fontName: null, animatedSymbolProperties: null, avoidSDFRasterization: t2 };
  switch (a3) {
    case "marker":
      l2 && "size" in i2 && (i2.size = Math.max(l2, i2.size)), m2.size = e4.size, m2.path = e4.path, m2.animatedSymbolProperties = e4.animatedSymbolProperties;
      break;
    case "line":
      m2.dashTemplate = e4.dashTemplate;
      break;
    case "text":
      m2.text = e4.text, m2.fontName = e4.fontName;
  }
  return m2;
}
const S = s$4.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"), w = { sortKey: null, templates: new Array() }, k = { isOutline: false, placement: null, symbologyType: S$3.DEFAULT, vvFlags: 0 }, C = { ...r$b, hash: JSON.stringify(r$b), materialKey: f$7(E$2.MARKER, k) }, L2 = { ...s$5, hash: JSON.stringify(s$5), materialKey: f$7(E$2.LINE, k) }, b = { ...y$7, hash: JSON.stringify(y$7), materialKey: f$7(E$2.FILL, k) };
function E2(e4, t2) {
  const r6 = e4.length;
  return e4.push(null), t2.then((t3) => e4[r6] = t3), e4;
}
function G(e4) {
  return null != e4 && !!(1 & e4);
}
function j2(e4) {
  return "worker:port-closed" === e4.name;
}
class x {
  constructor(e4, t2) {
    this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = /* @__PURE__ */ new Map(), this._symbolToTemplate = /* @__PURE__ */ new Map(), this._fetchQueue = [], this._idToResolver = /* @__PURE__ */ new Map(), this._cimTemplateCache = /* @__PURE__ */ new Map(), this._cimAnalyses = [], this._lock = new r$1(), this._fetchResource = e4, this._tileInfo = t2;
  }
  get _markerError() {
    return this._errorTemplates.marker[0];
  }
  get _fillError() {
    return this._errorTemplates.fill[0];
  }
  get _lineError() {
    return this._errorTemplates.line[0];
  }
  get _textError() {
    return this._errorTemplates.line[0];
  }
  createTemplateGroup(e4, t2, r6 = null) {
    this._initErrorTemplates();
    const s2 = e4.hash, i2 = this._symbolToTemplate.get(s2);
    if (null != i2)
      return i2;
    const a3 = new Array(), o2 = { sortKey: r6, templates: a3 };
    t2 && this._createMeshTemplates(a3, t2, true), this._createMeshTemplates(a3, e4, false);
    const l2 = this._createGroupId("expanded-cim" === e4.type && F(e4));
    return this._idToTemplateGroup.set(l2, o2), this._symbolToTemplate.set(s2, l2), l2;
  }
  getTemplateGroup(e4) {
    return this._idToTemplateGroup.get(e4) ?? w;
  }
  getDynamicTemplateGroup(e4) {
    return this._idToTemplateGroup.has(e4) ? (G(e4) || S.error("mapview-template-store", `Id ${e4} does not refer to a dynamic template`), this._idToTemplateGroup.get(e4)) : w;
  }
  getMosaicItem(e4, t2) {
    const r6 = this._createTemplateId(), s2 = new Promise((e5) => this._idToResolver.set(r6, e5));
    return this._fetchQueue.push({ symbol: e4, id: r6, glyphIds: t2 }), s2;
  }
  finalize(e4) {
    return this._fetchQueue.length || this._lock.isHeld() ? s(this._lock, this._fetchAllQueuedResources.bind(this), e4) : Promise.resolve();
  }
  _initErrorTemplates() {
    this._errorTemplates || (this._errorTemplates = { fill: this._createMeshTemplates([], b, false), marker: this._createMeshTemplates([], C, false), line: this._createMeshTemplates([], L2, false) });
  }
  _fetchAllQueuedResources(t2) {
    if (!this._fetchQueue.length)
      return Promise.resolve();
    const s2 = this._fetchQueue, i2 = this._cimAnalyses;
    return this._fetchQueue = [], this._cimAnalyses = [], Promise.all(i2).then(() => this._fetchResource(s2, t2).then((e4) => {
      for (const { id: t3, mosaicItem: r6 } of e4) {
        this._idToResolver.get(t3)(r6), this._idToResolver.delete(t3);
      }
    })).catch((t3) => {
      b$4(t3) ? this._fetchQueue = this._fetchQueue.concat(s2) : j2(t3) || S.error(new s$2("mapview-template-store", "Unable to fetch requested texture resources", t3));
    });
  }
  _createGroupId(e4) {
    return this._idCounter++ << 1 | (e4 ? 1 : 0);
  }
  _createTemplateId() {
    return this._templateIdCounter++;
  }
  async _createSMS(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e4);
    return e$3(t2, S) ? z$1.fromSimpleMarker(e4, t2) : this._markerError;
  }
  async _createPMS(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e4);
    return e$3(t2, S) ? z$1.fromPictureMarker(e4, t2) : this._markerError;
  }
  async _createSFS(e4, t2) {
    const { spriteMosaicItem: r6 } = await this.getMosaicItem(e4);
    return e$3(r6, S) ? K2.fromSimpleFill(e4, r6, t2) : this._fillError;
  }
  async _createPFS(e4, t2) {
    const { spriteMosaicItem: r6 } = await this.getMosaicItem(e4);
    return e$3(r6, S) ? K2.fromPictureFill(e4, r6, t2) : this._fillError;
  }
  async _createSLS(e4, t2) {
    const { spriteMosaicItem: r6 } = await this.getMosaicItem(e4);
    return e$3(r6, S) ? K$1.fromSimpleLine(e4, r6) : this._lineError;
  }
  async _createLMS(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(e4);
    return e$3(t2, S) ? z$1.fromLineSymbolMarker(e4, t2) : this._markerError;
  }
  async _createTS(e4) {
    const { glyphMosaicItems: t2 } = await this.getMosaicItem(e4);
    return g$2.fromText(e4, t2 ?? []);
  }
  async _createCIMText(e4) {
    const { glyphMosaicItems: t2 } = await this.getMosaicItem(r5(e4), n(e4.text));
    return e$3(t2, S) ? g$2.fromCIMText(e4, t2, this._tileInfo) : this._textError;
  }
  async _createCIMFill(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(r5(e4));
    return e$3(t2, S) ? K2.fromCIMFill(e4, t2, this._tileInfo) : this._fillError;
  }
  async _createCIMLine(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(r5(e4));
    return e$3(t2, S) ? K$1.fromCIMLine(e4, t2, this._tileInfo) : this._lineError;
  }
  async _createCIMMarker(e4) {
    const { spriteMosaicItem: t2 } = await this.getMosaicItem(r5(e4));
    return e$3(t2, S) ? z$1.fromCIMMarker(e4, t2, this._tileInfo) : this._markerError;
  }
  async _createCIM(e4) {
    const t2 = e4.templateHash;
    let r6 = this._cimTemplateCache.get(t2);
    if (null != r6)
      return r6;
    switch (e4.type) {
      case "marker":
        r6 = await this._createCIMMarker(e4);
        break;
      case "line":
        r6 = await this._createCIMLine(e4);
        break;
      case "fill":
        r6 = await this._createCIMFill(e4);
        break;
      case "text":
        r6 = await this._createCIMText(e4);
    }
    return this._cimTemplateCache.set(t2, r6), r6;
  }
  async _createDynamicCIM(e4) {
    const t2 = e4.templateHash;
    let r6 = this._cimTemplateCache.get(t2);
    if (null != r6)
      return r6;
    switch (e4.type) {
      case "marker":
        r6 = L$1.fromCIMMarker(e4, this._tileInfo);
        break;
      case "line":
        r6 = d$2.fromCIMLine(e4, this._tileInfo);
        break;
      case "fill":
        r6 = j$1.fromCIMFill(e4, this._tileInfo);
        break;
      case "text":
        r6 = d$1.fromCIMText(e4, this._tileInfo);
    }
    return this._cimTemplateCache.set(t2, r6), r6;
  }
  _createPrimitiveMeshTemplates(e4, t2, r6) {
    switch (t2.type) {
      case "esriSMS":
        return E2(e4, this._createSMS(t2));
      case "esriPMS":
        return E2(e4, this._createPMS(t2));
      case "esriSFS":
        return E2(e4, this._createSFS(t2, r6));
      case "line-marker":
        return E2(e4, this._createLMS(t2));
      case "esriPFS":
        return E2(e4, this._createPFS(t2, r6));
      case "esriSLS":
        return E2(e4, this._createSLS(t2, false));
      case "esriTS":
        return E2(e4, this._createTS(t2));
      default:
        return S.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), e4;
    }
  }
  _createMeshTemplates(e4, t2, r6) {
    if (t2.type.includes("3d"))
      return S.error("3D symbols are not supported with MapView"), e4;
    if ("expanded-cim" === t2.type) {
      for (const r7 of t2.layers)
        "function" == typeof r7.materialHash ? E2(e4, this._createDynamicCIM(r7)) : E2(e4, this._createCIM(r7));
      return e4;
    }
    if ("composite-symbol" === t2.type) {
      for (const s2 of t2.layers)
        this._createPrimitiveMeshTemplates(e4, s2, r6);
      return e4;
    }
    return "cim" === t2.type || "label" === t2.type || "web-style" === t2.type ? e4 : this._createPrimitiveMeshTemplates(e4, t2, r6);
  }
}
const F = (e4) => {
  if (!e4.layers)
    return false;
  for (const t2 of e4.layers)
    if ("function" == typeof t2.materialHash)
      return true;
  return false;
};
class a2 {
  constructor(e4, t2, r6) {
    this._geometryType = e4, this._idField = t2, this._templateStore = r6;
  }
  update(e4, t2) {
    null != e4.mesh.labels && (this._labelTemplates = this._createLabelTemplates(e4.mesh.labels, t2)), this._schema = e4;
  }
  _createLabelTemplates(e4, t2) {
    const r6 = /* @__PURE__ */ new Map();
    if ("simple" === e4.type) {
      for (const s2 of e4.classes) {
        const e5 = W.fromLabelClass(s2, t2);
        r6.set(s2.index, e5);
      }
      return r6;
    }
    for (const s2 in e4.classes) {
      const i2 = e4.classes[s2];
      for (const e5 of i2) {
        const s3 = W.fromLabelClass(e5, t2);
        r6.set(e5.index, s3);
      }
    }
    return r6;
  }
  get templates() {
    return this._templateStore;
  }
  async analyze(l2, s2, a3, o2, n2, p2, m2) {
    if (c$a(m2))
      return;
    let f2;
    "dictionary" === a3?.type && (f2 = await a3.analyze(this._idField, l2.copy(), s2, n2, p2, m2));
    let u2 = 0;
    for (; l2.next(); ) {
      let e4 = null;
      if (e4 = f2 ? f2[u2++] : null != o2 && p$8(l2.getDisplayId()) && 1 !== l2.readAttribute("cluster_count") ? o2.match(this._idField, l2, this._geometryType, n2, p2) : a3.match(this._idField, l2, this._geometryType, n2, p2), l2.setGroupId(e4), G(e4)) {
        const t2 = this._templateStore.getDynamicTemplateGroup(e4).templates;
        for (const e5 of t2)
          e5 && e5.analyze && e5.analyze(this._templateStore, l2, n2, p2);
      }
    }
    return await i$d(), this._templateStore.finalize(m2);
  }
  async analyzeGraphics(r6, l2, s2, a3, o2, n2) {
    if (c$a(n2))
      return;
    const p2 = r6.getCursor();
    for (s2 && await s2.analyze(this._idField, p2.copy(), l2, a3, o2, n2); p2.next(); ) {
      let e4 = p2.getGroupId();
      if (null != e4 && -1 !== e4 || (e4 = s2?.match(this._idField, p2, p2.geometryType, a3, o2), p2.setGroupId(e4)), G(e4)) {
        const t2 = this._templateStore.getDynamicTemplateGroup(e4).templates;
        for (const e5 of t2)
          e5 && e5.analyze && e5.analyze(this._templateStore, p2, a3, o2);
      }
      p2.setGroupId(e4);
    }
    return await i$d(), this._templateStore.finalize(n2);
  }
  writeGraphic(e4, t2, r6, l2) {
    const s2 = t2.getGroupId(), a3 = t2.getDisplayId(), o2 = this._templateStore.getTemplateGroup(s2);
    if (e4.featureStart(t2.insertAfter, 0), null != a3) {
      if (G(s2))
        for (const e5 of o2.templates)
          e5 && e5.bindFeature(t2, null, null);
      if (o2) {
        for (const s3 of o2.templates)
          s3 && s3.write(e4, t2, r6, l2);
        e4.featureEnd();
      }
    }
  }
  writeCursor(e4, t2, r6, l2, s2, a3, o2) {
    const n2 = t2.getGroupId(), p2 = t2.getDisplayId(), m2 = this._templateStore.getTemplateGroup(n2), f2 = m2.templates, u2 = this._getSortKeyValue(t2, m2);
    if (e4.featureStart(0, u2), null == p2)
      return;
    if (!f2)
      return;
    if (G(n2))
      for (const i2 of f2)
        i2.bindFeature(t2, r6, l2);
    for (const i2 of f2)
      i2.write(e4, t2, s2, o2);
    if (!!f2.length && null != a3) {
      const r7 = a3 && this._findLabelRef(f2);
      this._writeLabels(e4, t2, a3, r7, s2, o2);
    }
    e4.featureEnd();
  }
  _getSortKeyValue(e4, t2) {
    const r6 = this._schema.mesh.sortKey;
    if (null == r6)
      return 0;
    let l2 = 0;
    return l2 = true === r6.byRenderer && null != t2.sortKey ? t2.sortKey : null != r6.fieldIndex ? e4.getComputedNumericAtIndex(r6.fieldIndex) : null != r6.field ? e4.readAttribute(r6.field) : e4.readAttribute(this._idField), l2 *= "asc" === r6.order ? 1 : -1, null == l2 || isNaN(l2) ? 0 : l2;
  }
  _findLabelRef(e4) {
    for (const t2 of e4)
      if (t2 instanceof z$1)
        return t2;
    return null;
  }
  _writeLabels(e4, t2, r6, l2, s2, i2) {
    for (const a3 of r6)
      if (null != a3 && a3) {
        const { glyphs: r7, rtl: o2, index: n2 } = a3, p2 = this._labelTemplates.get(n2);
        if (!p2)
          continue;
        p2.setZoomLevel(s2), p2.bindReferenceTemplate(l2), p2.bindTextInfo(r7, o2), p2.write(e4, t2, null, i2);
      }
  }
}
const l = s$4.getLogger("esri/views/2d/engine/webgl/util/Matcher");
async function o(e4, t2, s2, r6) {
  switch (e4.type) {
    case "simple":
    case "heatmap":
      return u.fromBasicRenderer(e4, t2, s2, r6);
    case "map":
      return d3.fromUVRenderer(e4, t2, s2, r6);
    case "interval":
      return m.fromCBRenderer(e4, t2, s2, r6);
    case "dictionary":
      return y.fromDictionaryRenderer(e4, t2, s2, r6);
    case "pie-chart":
      return c.fromPieChartRenderer(e4, t2, s2, r6);
    case "subtype":
      return c.fromSubtypes(e4, t2, s2, r6);
  }
}
class u {
  constructor() {
    this.type = "feature", this._defaultResult = null;
  }
  static async fromBasicRenderer(e4, t2, s2, r6) {
    const i$12 = new u();
    if (e4.symbol) {
      const a3 = await i(e4.symbol, s2, r6), l2 = t2.createTemplateGroup(a3, null);
      i$12.setDefault(l2);
    }
    return i$12;
  }
  static async fromPieChartRenderer(e4, t2, s2, r6) {
    const i$12 = new u();
    if (e4.markerSymbol) {
      const a3 = await i(e4.markerSymbol, s2, r6);
      let l2;
      e4.fillSymbol && (l2 = await i(e4.fillSymbol, s2, r6));
      const o2 = t2.createTemplateGroup(a3, l2);
      i$12.setDefault(o2);
    }
    return i$12;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(e4) {
    this._defaultResult = e4;
  }
  match(e4, t2, s2, r6, i2) {
    return this.getDefault();
  }
  async analyze(e4, t2, s2, r6, i2, a3) {
    return null;
  }
}
class c extends u {
  constructor(e4, t2) {
    super(), this._subMatchers = e4, this._subtypeField = t2;
  }
  static async fromSubtypes(e4, t2, s2, r6) {
    const i2 = /* @__PURE__ */ new Map(), a3 = [];
    for (const n2 in e4.renderers) {
      const l2 = parseInt(n2, 10), u2 = o(e4.renderers[n2], t2, s2, r6).then((e5) => i2.set(l2, e5));
      a3.push(u2);
    }
    return await Promise.all(a3), new c(i2, e4.subtypeField);
  }
  match(e4, t2, s2, r6, i2) {
    const a3 = t2.readAttribute(this._subtypeField), n2 = this._subMatchers.get(a3);
    return n2 ? n2.match(e4, t2, s2, r6, i2) : null;
  }
}
class m extends u {
  constructor(e4, t2, s2, r6) {
    super(), this.type = "interval", this._intervals = [], this._isMaxInclusive = t2, this._fieldIndex = r6, this._field = e4, this._normalizationInfo = s2;
  }
  static async fromCBRenderer(e4, t2, s2, r6) {
    const { isMaxInclusive: i$12, normalizationField: a3, normalizationTotal: l2, normalizationType: o2 } = e4, u2 = e4.field, c2 = new m(u2, i$12, { normalizationField: a3, normalizationTotal: l2, normalizationType: o2 }, e4.fieldIndex), d4 = await i(e4.backgroundFillSymbol, s2, r6);
    await Promise.all(e4.intervals.map(async (e5) => {
      const i$13 = await i(e5.symbol, s2, r6), a4 = t2.createTemplateGroup(i$13, d4), l3 = { min: e5.min, max: e5.max };
      c2.add(l3, a4);
    }));
    const h2 = await i(e4.defaultSymbol, s2, r6);
    if (h2) {
      const e5 = t2.createTemplateGroup(h2, d4);
      c2.setDefault(e5);
    }
    return c2;
  }
  add(e4, t2) {
    this._intervals.push({ interval: e4, result: t2 }), this._intervals.sort((e5, t3) => e5.interval.min - t3.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  match(e4, t2, s2, r6, i2) {
    if (null == this._fieldIndex && !this._field)
      return this.getDefault();
    const a3 = null != this._fieldIndex ? t2.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(t2);
    if (null == a3 || isNaN(a3) || a3 === 1 / 0 || a3 === -1 / 0)
      return this.getDefault();
    for (let n2 = 0; n2 < this._intervals.length; n2++) {
      const { interval: e5, result: t3 } = this._intervals[n2], s3 = a3 >= e5.min, r7 = this._isMaxInclusive ? a3 <= e5.max : a3 < e5.max;
      if (s3 && r7)
        return t3;
    }
    return this.getDefault();
  }
  _needsNormalization() {
    const e4 = this._normalizationInfo;
    return e4 && (e4.normalizationField || e4.normalizationTotal || e4.normalizationType);
  }
  _getValueFromField(e4) {
    const t2 = e4.readAttribute(this._field);
    if (!this._needsNormalization() || null == t2)
      return t2;
    const { normalizationField: s2, normalizationTotal: r6, normalizationType: i2 } = this._normalizationInfo, a3 = e4.readAttribute(s2) ?? 1;
    if (i2)
      switch (i2) {
        case "esriNormalizeByField":
          return a3 ? t2 / a3 : void 0;
        case "esriNormalizeByLog":
          return Math.log(t2) * Math.LOG10E;
        case "esriNormalizeByPercentOfTotal":
          return t2 / r6 * 100;
        default:
          return void l.error(`Found unknown normalization type: ${i2}`);
      }
    else
      l.error("Normalization is required, but no type was set!");
  }
}
class d3 extends u {
  constructor(e4, t2, s2) {
    super(), this.type = "map", this._nullResult = null, this._resultsMap = /* @__PURE__ */ new Map(), this._fields = [], this._fieldsIndex = s2, this._fields = e4, this._seperator = t2 || "";
  }
  static async fromUVRenderer(e4, t2, s2, r6) {
    const i$12 = e4.fieldDelimiter, a3 = [e4.field];
    e4.field2 && a3.push(e4.field2), e4.field3 && a3.push(e4.field3);
    const l2 = await i(e4.backgroundFillSymbol, s2, r6), o2 = new d3(a3, i$12, e4.fieldIndex);
    await Promise.all(e4.map.map(async (e5, i$13) => {
      const a4 = await i(e5.symbol, s2, r6), u3 = i$13 + 1, c2 = t2.createTemplateGroup(a4, l2, u3);
      "<Null>" === e5.value ? o2.setNullResult(c2) : o2.add(e5.value, c2);
    }));
    const u2 = await i(e4.defaultSymbol, s2, r6);
    if (u2) {
      const e5 = Number.MAX_SAFE_INTEGER, s3 = t2.createTemplateGroup(u2, l2, e5);
      o2.setDefault(s3);
    }
    return o2;
  }
  setNullResult(e4) {
    this._nullResult = e4;
  }
  add(e4, t2) {
    this._resultsMap.set(e4.toString(), t2);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  match(e4, t2, s2, r6, i2) {
    if (null == this._fieldsIndex && !this._fields)
      return this.getDefault();
    const a3 = null != this._fieldsIndex ? t2.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(t2);
    if (null !== this._nullResult && (null == a3 || "" === a3 || "<Null>" === a3))
      return this._nullResult;
    if (null == a3)
      return this.getDefault();
    const n2 = a3.toString();
    return this._resultsMap.has(n2) ? this._resultsMap.get(n2) : this.getDefault();
  }
  _getValueFromFields(e4) {
    const t2 = [];
    for (const s2 of this._fields) {
      const r6 = e4.readAttribute(s2);
      null == r6 || "" === r6 ? t2.push("<Null>") : t2.push(r6);
    }
    return t2.join(this._seperator);
  }
}
async function h(e4, t2) {
  const s2 = e4 || 1;
  if ("number" == typeof s2)
    return (e5, t3, r7) => s2;
  const r6 = await n$8(s2, t2.spatialReference, t2.fields);
  return (e5, s3, i2) => s$6(r6, e5, { $view: i2 }, t2.geometryType, s3) || 1;
}
let f;
async function p() {
  return f || (f = import("./chunk-Zlv3z8RW.js").then((n2) => n2.c)), f;
}
class y extends u {
  constructor(e4, t2, s2, i2, a3, n2) {
    super(), this.type = "dictionary", this._groupIdCache = new e$9(100), this._loader = e4, this._fieldMap = e4.fieldMap, this._symbolFields = e4.getSymbolFields(), this._templates = t2, this._info = s2, this._scaleFn = i2, this._schemaUtilsModule = a3, this._symbolOptions = n2;
  }
  static async fromDictionaryRenderer(e4, t2, s2, r6) {
    const [{ DictionaryLoader: i2 }, a3] = await Promise.all([import("./chunk-KFNcxJaF.js").then((n3) => n3.D$), p()]), n2 = new i2(e4.url, e4.config, e4.fieldMap);
    await n2.fetchResources({ spatialReference: s2.spatialReference, fields: s2.fields });
    const l2 = await h(e4.scaleExpression, s2);
    return new y(n2, t2, s2, l2, a3, e4.symbolOptions);
  }
  async _analyzeFeature(e4, s2, r6, i$12, a3) {
    const o2 = e4.readLegacyFeature(), u2 = this._scaleFn(o2, r6, i$12), c2 = this._attributeHash(o2) + "-" + u2, m2 = this._groupIdCache.get(c2);
    if (m2)
      return m2;
    const d4 = { ...i$12, spatialReference: this._info.spatialReference, abortOptions: a3, fields: this._info.fields }, h2 = await this._loader.getSymbolAsync(o2, d4), f2 = this._schemaUtilsModule.createSymbolSchema(h2, this._symbolOptions), p2 = i(f2, this._info, s2, a3).then((e5) => {
      if ("expanded-cim" !== e5?.type)
        return l.error(new s$2("mapview-bad-type", `Found unexpected type ${e5?.type} in dictionary response`)), null;
      e5.hash += "-" + u2;
      for (const t2 of e5.layers)
        t2.scaleFactor = u2, t2.templateHash += "-" + u2;
      return this._templates.createTemplateGroup(e5, null);
    });
    return this._groupIdCache.put(c2, p2, 1), p2;
  }
  async analyze(t2, s2, r6, i2, a3, n2) {
    const l2 = s2.getCursor(), o2 = [];
    for (; l2.next(); )
      o2.push(this._analyzeFeature(l2, r6, i2, a3, n2));
    return Promise.all(o2).then((t3) => t3.filter(k$5));
  }
  match(e4, t2, s2, r6, i2) {
    return null;
  }
  _attributeHash(e4) {
    let t2 = "";
    for (const s2 of this._symbolFields) {
      const r6 = this._fieldMap?.[s2];
      r6 && (t2 += e4.attributes[r6] + "-");
    }
    return t2;
  }
}
export {
  E$1 as E,
  a2 as a,
  e$3 as b,
  e$2 as e,
  i,
  n,
  o,
  x
};
