import { zU as b, zV as h$3, aM as s$3, dj as Z, h2 as t$1, dp as st, hS as t$2, l1 as It, b$ as n$2, tb as r$1, bb as s$4, aq as has, zW as d$2, qL as m$4, nN as c$4, ql as it, zX as at, zY as c$5, b7 as C$1, pk as f$3, bX as k$1, kc as u$3, bm as h$5, d1 as o$3, kz as d$3, bH as a$3, lv as w$2, lu as c$6, lg as s$5, zZ as p$4, bQ as b$1, z_ as j$1, zO as _$2, b1 as s$6, bI as b$2, a$ as j$2, bo as e, br as c$7, z$ as t$4, lw as A$2, bp as y$3, bs as g$2, eq as t$5, gh as tt, qX as ht, A0 as M, A1 as N, oi as i$1, cZ as f$4, r4 as K, zK as L$2, cU as i$2, d3 as yt, nJ as s$7, bq as j$4, ap as M$1, ax as G$1, hA as c$8, A2 as e$1, eg as p$5, bJ as d$4, dk as i$3, dS as w$3, c4 as d$5, fS as h$6, du as j$5, A3 as d$6 } from "./chunk-KFNcxJaF.js";
import { W } from "./chunk-mk4KSkT-.js";
import { r, a as a$4, I as I$2, u as u$4 } from "./chunk-FEoO8e12.js";
import { v as v$1 } from "./chunk-KGs6dxL9.js";
import { S as S$4, h as h$4, r as r$2, k as k$2 } from "./chunk-DnHFm0Vi.js";
import { t as t$3 } from "./chunk-jrhFla2W.js";
import { o as o$4 } from "./chunk-i-bvTqwe.js";
import { createConnection as o$5 } from "./chunk-uPuSzOAM.js";
import { X, b as b$3, Y } from "./chunk-GPG0Fj9B.js";
import { j as j$3, x as x$2 } from "./chunk-XCl2NxdK.js";
import { s as s$8, b as n$3 } from "./chunk-yIp_WHt0.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-H58sM9yM.js";
function o$2(o3) {
  return "heatmap" === o3 ? import("./chunk-3NA0YKbV.js") : import("./chunk--YvHuqU1.js");
}
const n$1 = 268435455;
let o$1 = class o {
  constructor() {
    this.hasFeatures = false, this.exceededTransferLimit = false, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
};
function a$2(a3, i2, c4 = false) {
  const f2 = 1, d3 = 3, u2 = 9, g2 = 12, l2 = 13, p2 = 15, h3 = a3.asUnsafe(), b$12 = h3.pos(), w2 = new o$1();
  let m4 = 0, y2 = 0;
  const k2 = 1, x2 = 2, I2 = 4, L2 = 3;
  let A3 = null, F3 = null, C2 = null, S4 = false;
  const j2 = [];
  for (; h3.next(); )
    switch (h3.tag()) {
      case f2:
        A3 = h3.getString();
        break;
      case d3:
        F3 = h3.getString();
        break;
      case g2:
        C2 = h3.processMessage(h$3);
        break;
      case u2:
        if (w2.exceededTransferLimit = h3.getBool(), w2.exceededTransferLimit) {
          w2.offsets.geometry = c4 ? new Float64Array(8e3) : new Int32Array(8e3), w2.centroid = c4 ? new Float64Array(16e3) : new Int32Array(16e3);
          for (let e2 = 0; e2 < w2.centroid.length; e2++)
            w2.centroid[e2] = n$1;
        }
        break;
      case l2: {
        const e2 = h3.processMessage(b);
        e2.index = m4++, j2.push(e2);
        break;
      }
      case p2: {
        const e2 = h3.getLength(), t2 = h3.pos() + e2;
        if (!w2.exceededTransferLimit) {
          const e3 = w2.offsets.geometry, t3 = w2.centroid;
          e3.push(0), t3.push(n$1), t3.push(n$1);
        }
        !S4 && w2.exceededTransferLimit && (S4 = true, w2.offsets.attributes = c4 ? new Float64Array(8e3 * m4) : new Uint32Array(8e3 * m4));
        let s3 = y2 * m4;
        for (; h3.pos() < t2 && h3.next(); )
          switch (h3.tag()) {
            case k2: {
              if (S4)
                w2.offsets.attributes[s3++] = h3.pos();
              else {
                w2.offsets.attributes.push(h3.pos());
              }
              const e3 = h3.getLength();
              h3.skipLen(e3);
              break;
            }
            case x2:
              if (i2) {
                const e3 = h3.getLength(), t3 = h3.pos() + e3;
                for (; h3.pos() < t3 && h3.next(); )
                  switch (h3.tag()) {
                    case L2: {
                      h3.getUInt32();
                      const e4 = h3.getSInt64(), t4 = h3.getSInt64();
                      w2.centroid[2 * y2] = e4, w2.centroid[2 * y2 + 1] = t4;
                      break;
                    }
                    default:
                      h3.skip();
                  }
              } else {
                w2.offsets.geometry[y2] = h3.pos();
                const e3 = h3.getLength();
                w2.vertexCount += e3, h3.skipLen(e3);
              }
              break;
            case I2: {
              const e3 = h3.getLength(), t3 = h3.pos() + e3;
              for (; h3.pos() < t3 && h3.next(); )
                switch (h3.tag()) {
                  case L2: {
                    h3.getUInt32();
                    const e4 = h3.getSInt64(), t4 = h3.getSInt64();
                    w2.centroid[2 * y2] = e4, w2.centroid[2 * y2 + 1] = t4;
                    break;
                  }
                  default:
                    h3.skip();
                }
              break;
            }
            default:
              h3.skip();
          }
        y2++, w2.hasFeatures = true;
        break;
      }
      default:
        h3.skip();
    }
  const U2 = A3 || F3;
  if (!U2)
    throw new s$3("FeatureSet has no objectId or globalId field name");
  return w2.fields = new Z(j2), w2.featureCount = y2, w2.fieldCount = m4, w2.objectIdFieldIndex = w2.fields.get(U2)?.index, w2.transform = C2, w2.displayIds = new Uint32Array(w2.featureCount), w2.groupIds = new Uint16Array(w2.featureCount), h3.move(b$12), w2;
}
const u$2 = true, c$3 = 268435455, g$1 = 128, l$2 = 128e3, _$1 = { small: { delta: new Int32Array(g$1), decoded: new Int32Array(g$1) }, large: { delta: new Int32Array(l$2), decoded: new Int32Array(l$2) } };
function f$2(e2) {
  return e2 <= _$1.small.delta.length ? _$1.small : (e2 <= _$1.large.delta.length || (_$1.large.delta = new Int32Array(Math.round(1.25 * e2)), _$1.large.decoded = new Int32Array(Math.round(1.25 * e2))), _$1.large);
}
function y$2(r2) {
  try {
    const e2 = 2, t2 = new r$1(new Uint8Array(r2), new DataView(r2));
    for (; t2.next(); ) {
      if (t2.tag() === e2)
        return I$1(t2.getMessage());
      t2.skip();
    }
  } catch (i2) {
    const r3 = new s$3("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: i2 });
    s$4.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(r3);
  }
  return null;
}
function I$1(e2) {
  const t2 = 1;
  for (; e2.next(); ) {
    if (e2.tag() === t2)
      return e2.getMessage();
    e2.skip();
  }
  return null;
}
function p$3(e2) {
  const t2 = 1, r2 = 2, s3 = 3, i2 = 4, n2 = 5, a3 = 6, h3 = 7, o3 = 8, d3 = 9, u2 = e2.getLength(), c4 = e2.pos() + u2;
  for (; e2.pos() < c4 && e2.next(); )
    switch (e2.tag()) {
      case t2:
        return e2.getString();
      case r2:
        return e2.getFloat();
      case s3:
        return e2.getDouble();
      case i2:
        return e2.getSInt32();
      case n2:
        return e2.getUInt32();
      case a3:
        return e2.getInt64();
      case h3:
        return e2.getUInt64();
      case o3:
        return e2.getSInt64();
      case d3:
        return e2.getBool();
      default:
        return e2.skip(), null;
    }
  return null;
}
function m$3(e2, t2, r2, s3, i2, n2) {
  return 0.5 * Math.abs(e2 * s3 + r2 * n2 + i2 * t2 - e2 * n2 - r2 * t2 - i2 * s3);
}
function x$1(e2, t2, r2, s3) {
  return 0 === e2 * s3 - r2 * t2 && e2 * r2 + t2 * s3 > 0;
}
let S$3 = class S extends S$4 {
  static fromBuffer(e2, t2, r2 = false) {
    const s3 = t2.geometryType, i2 = y$2(e2), n2 = a$2(i2, "esriGeometryPoint" === s3, r2), a3 = S$4.createInstance();
    return new S(a3, i2, n2, t2);
  }
  constructor(e2, t2, r2, s3) {
    super(e2, s3), this._hasNext = false, this._isPoints = false, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._geometryType = s3.geometryType, this._reader = t2, this._header = r2, this._hasNext = r2.hasFeatures, this._isPoints = "esriGeometryPoint" === s3.geometryType;
  }
  get fields() {
    return this._header.fields;
  }
  get geometryType() {
    return this._geometryType;
  }
  get _size() {
    return this._header.featureCount;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  get stride() {
    return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  getSize() {
    return this._size;
  }
  getQuantizationTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e2) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e2;
  }
  getAttributeHash() {
    let e2 = "";
    for (const t2 of this._header.fields.fields)
      e2 += this._readAttributeAtIndex(t2.index) + ".";
    return e2;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e2) {
    this._header.displayIds[this._featureIndex] = e2;
  }
  getGroupId() {
    return this._header.groupIds[this._featureIndex];
  }
  setGroupId(e2) {
    this._header.groupIds[this._featureIndex] = e2;
  }
  readLegacyFeature() {
    if (void 0 === this._cache.legacyFeature) {
      const e2 = this.readCentroid(), t2 = { attributes: this.readAttributes(), geometry: this._isPoints ? this.readLegacyPointGeometry() : this.readLegacyGeometry(), centroid: (e2 && { x: e2.coords[0], y: e2.coords[1] }) ?? null };
      return this._cache.legacyFeature = t2, t2;
    }
    return this._cache.legacyFeature;
  }
  readOptimizedFeature() {
    if (void 0 === this._cache.optFeature) {
      const e2 = new t$1(this.readGeometry(), this.readAttributes(), this.readCentroid());
      return e2.objectId = this.getObjectId(), e2.displayId = this.getDisplayId(), this._cache.optFeature = e2, e2;
    }
    return this._cache.optFeature;
  }
  getXHydrated() {
    const e2 = this._header.centroid[2 * this._featureIndex], t2 = this.getQuantizationTransform();
    return null == t2 ? e2 : e2 * t2.scale[0] + t2.translate[0];
  }
  getYHydrated() {
    const e2 = this._header.centroid[2 * this._featureIndex + 1], t2 = this.getQuantizationTransform();
    return null == t2 ? e2 : t2.translate[1] - e2 * t2.scale[1];
  }
  getX() {
    return this._header.centroid[2 * this._featureIndex] * this._sx + this._tx;
  }
  getY() {
    return this._header.centroid[2 * this._featureIndex + 1] * this._sy + this._ty;
  }
  readLegacyPointGeometry() {
    return { x: this.getX(), y: this.getY() };
  }
  readLegacyGeometry(e2) {
    const t2 = this.readUnquantizedGeometry(e2);
    return st(t2, this.geometryType, false, false);
  }
  readLegacyCentroid() {
    const e2 = this.readCentroid();
    if (!e2)
      return null;
    const [t2, r2] = e2.coords;
    return { x: t2, y: r2 };
  }
  readGeometryArea() {
    return this._cache.area || this.readGeometry(true), this._cache.area;
  }
  readUnquantizedGeometry(e2 = false) {
    if (void 0 === this._cache.unquantGeometry) {
      const t2 = this.readGeometry(e2);
      if (!t2)
        return this._cache.unquantGeometry = void 0, null;
      const r2 = f$2(t2.coords.length).decoded, s3 = t2.clone(r2), i2 = s3.coords;
      let n2 = 0;
      for (const e3 of s3.lengths) {
        for (let t3 = 1; t3 < e3; t3++) {
          const e4 = 2 * (n2 + t3), r3 = 2 * (n2 + t3 - 1);
          i2[e4] += i2[r3], i2[e4 + 1] += i2[r3 + 1];
        }
        n2 += e3;
      }
      return this._cache.unquantGeometry = s3, s3;
    }
    return this._cache.unquantGeometry;
  }
  readHydratedGeometry() {
    if (this._isPoints) {
      if (this._header.centroid[2 * this._featureIndex] === c$3)
        return null;
      const e3 = this.getXHydrated(), t3 = this.getYHydrated();
      return new t$2([], [e3, t3]);
    }
    const e2 = this.readGeometry();
    if (!e2)
      return null;
    const t2 = e2.clone(), r2 = this.getQuantizationTransform();
    return null != r2 && It(t2, t2, this.hasZ, this.hasM, r2), t2;
  }
  readGeometry(e2 = false) {
    if (void 0 === this._cache.geometry) {
      let r2 = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === c$3)
          return null;
        const e3 = this.getX(), t2 = this.getY();
        r2 = new t$2([], [e3, t2]);
      } else {
        const s3 = this._header.offsets.geometry[this._featureIndex], i2 = this._reader;
        if (0 === s3) {
          const e3 = this._readServerCentroid();
          if (!e3)
            return null;
          const [t2, r3] = e3.coords;
          return this.createQuantizedExtrudedGeometry(t2, r3);
        }
        i2.move(s3);
        try {
          if (r2 = e2 ? this._parseGeometryForDisplay(i2) : this._parseGeometry(i2), !r2) {
            const e3 = this._readServerCentroid();
            if (!e3)
              return null;
            const [t2, r3] = e3.coords;
            return this.createQuantizedExtrudedGeometry(t2, r3);
          }
        } catch (t2) {
          return console.error("Failed to parse geometry!", t2), null;
        }
      }
      return this._cache.geometry = r2, r2;
    }
    return this._cache.geometry;
  }
  readCentroid() {
    if (void 0 === this._cache.centroid) {
      let e2;
      return e2 = this._computeCentroid(), e2 || (e2 = this._readServerCentroid()), this._cache.centroid = e2 ?? void 0, e2 ?? null;
    }
    return this._cache.centroid;
  }
  copy() {
    const e2 = this._reader.clone(), t2 = new S(this.instance, e2, this._header, this.fullSchema());
    return this.copyInto(t2), t2;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this._size && !this._getExists(); )
      ;
    return this._featureIndex < this._size;
  }
  _readAttribute(e2, t2) {
    const r2 = this._header.fields.get(e2);
    if (null == r2)
      return;
    let s3 = this._readAttributeAtIndex(r2.index);
    "esriFieldTypeTimestampOffset" === this.fields.get(e2)?.type && (s3 = this.parseTimestampOffset(s3));
    const i2 = this._header.fields.isDateField(r2.name);
    return t2 ? null == s3 ? s3 : i2 ? new Date(s3) : s3 : s3;
  }
  _readAttributes() {
    const e2 = {};
    for (const t2 of this._header.fields.fields)
      e2[t2.name] = this._readAttributeAtIndex(t2.index);
    return e2;
  }
  copyInto(e2) {
    super.copyInto(e2), e2._featureIndex = this._featureIndex, e2._featureOffset = this._featureOffset, e2._hasNext = this._hasNext;
  }
  _readAttributeAtIndex(e2) {
    const t2 = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e2], r2 = this._reader;
    return r2.move(t2), p$3(r2);
  }
  _readServerCentroid() {
    const e2 = this._header.centroid[2 * this._featureIndex] + this._tx, t2 = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
    return e2 === c$3 ? null : new t$2([], [e2, t2]);
  }
  _parseGeometry(e2) {
    const t2 = 2, r2 = 3, s3 = e2.asUnsafe(), i2 = s3.getLength(), n2 = s3.pos() + i2, a3 = [], o3 = [];
    for (; s3.pos() < n2 && s3.next(); )
      switch (s3.tag()) {
        case t2: {
          const e3 = s3.getUInt32(), t3 = s3.pos() + e3;
          for (; s3.pos() < t3; )
            o3.push(s3.getUInt32());
          break;
        }
        case r2: {
          const e3 = s3.getUInt32(), t3 = s3.pos() + e3;
          for (a3.push(s3.getSInt32() + this._tx), a3.push(s3.getSInt32() + this._ty), this.hasZ && s3.getSInt32(), this.hasM && s3.getSInt32(); s3.pos() < t3; )
            a3.push(s3.getSInt32()), a3.push(s3.getSInt32()), this.hasZ && s3.getSInt32(), this.hasM && s3.getSInt32();
          break;
        }
        default:
          s3.skip();
      }
    return a3.length ? new t$2(o3, a3) : null;
  }
  _parseGeometryForDisplay(e2) {
    const t2 = 2, s3 = 3, i2 = e2.asUnsafe(), n2 = i2.getLength(), a3 = i2.pos() + n2, o3 = [], d3 = [];
    let c4 = 0, g2 = 0, l2 = null, _2 = 0;
    const y2 = "esriGeometryPolygon" === this.geometryType;
    for (; i2.pos() < a3 && i2.next(); )
      switch (i2.tag()) {
        case t2: {
          const e3 = i2.getUInt32(), t3 = i2.pos() + e3;
          for (; i2.pos() < t3; ) {
            const e4 = i2.getUInt32();
            o3.push(e4), c4 += e4;
          }
          l2 = f$2(2 * c4).delta;
          break;
        }
        case s3: {
          i2.getUInt32();
          const e3 = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
          n$2(l2);
          for (const t3 of o3)
            if (g2 + e3 * t3 > l2.length)
              for (let e4 = 0; e4 < t3; e4++)
                i2.getSInt32(), i2.getSInt32(), this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32();
            else if (y2 && u$2) {
              const e4 = this.getAreaSimplificationThreshold(t3, this._header.vertexCount);
              let r2 = 2, s4 = 1;
              const n3 = false;
              let a4 = i2.getSInt32(), h3 = i2.getSInt32();
              l2[g2++] = a4, l2[g2++] = h3, this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32();
              let o4 = i2.getSInt32(), u2 = i2.getSInt32();
              for (this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32(); r2 < t3; ) {
                let t4 = i2.getSInt32(), n4 = i2.getSInt32();
                this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32();
                const d4 = a4 + o4, c5 = h3 + u2;
                m$3(a4, h3, d4, c5, d4 + t4, c5 + n4) >= e4 ? (_2 += -0.5 * (d4 - a4) * (c5 + h3), s4 > 1 && x$1(l2[g2 - 2], l2[g2 - 1], o4, u2) ? (l2[g2 - 2] += o4, l2[g2 - 1] += u2) : (l2[g2++] = o4, l2[g2++] = u2, s4++), a4 = d4, h3 = c5) : (t4 += o4, n4 += u2), o4 = t4, u2 = n4, r2++;
              }
              s4 < 3 || n3 ? g2 -= 2 * s4 : (_2 += -0.5 * (a4 + o4 - a4) * (h3 + u2 + h3), x$1(l2[g2 - 2], l2[g2 - 1], o4, u2) ? (l2[g2 - 2] += o4, l2[g2 - 1] += u2, d3.push(s4)) : (l2[g2++] = o4, l2[g2++] = u2, d3.push(++s4)));
            } else {
              let e4 = 0, r2 = i2.getSInt32(), s4 = i2.getSInt32();
              this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32(), l2[g2++] = r2, l2[g2++] = s4, e4 += 1;
              for (let n3 = 1; n3 < t3; n3++) {
                const t4 = i2.getSInt32(), a4 = i2.getSInt32(), h3 = r2 + t4, o4 = s4 + a4;
                _2 += -0.5 * (h3 - r2) * (o4 + s4), this.hasZ && i2.getSInt32(), this.hasM && i2.getSInt32(), n3 > 2 && x$1(l2[g2 - 2], l2[g2 - 1], t4, a4) ? (l2[g2 - 2] += t4, l2[g2 - 1] += a4) : (l2[g2++] = t4, l2[g2++] = a4, e4 += 1), r2 = h3, s4 = o4;
              }
              d3.push(e4);
            }
          break;
        }
        default:
          i2.skip();
      }
    if (this._cache.area = _2, !d3.length)
      return null;
    if (this._tx || this._ty) {
      let e3 = 0;
      n$2(l2);
      for (const t3 of d3)
        l2[2 * e3] += this._tx, l2[2 * e3 + 1] += this._ty, e3 += t3;
    }
    return new t$2(d3, l2);
  }
};
let m$2 = class m {
  constructor(e2) {
    this.service = e2, this._arcadeLayerSchema = { ...e2, fieldsIndex: Z.fromJSON(e2.fieldsIndex) };
  }
  destroy() {
  }
};
function p$2(e2) {
  return Array.isArray(e2.source);
}
function l$1(e2) {
  return "ogc-source" === e2?.type;
}
function y$1(e2) {
  const { capabilities: t2 } = e2;
  return l$1(e2.source) ? new F$1(e2) : p$2(e2) ? new h$2(e2) : t2.query.supportsFormatPBF && has("featurelayer-pbf") ? new d$1(e2) : new S$2(e2);
}
async function f$1(t2) {
  const r2 = new c$5();
  return await r2.open(t2, {}), r2;
}
let h$2 = class h extends m$2 {
  constructor(e2) {
    super(e2), this._portsOpen = f$1(e2.source).then((e3) => this.client = e3);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e2, t2) {
    await this._portsOpen;
    const r2 = await this.client.invoke("queryFeatures", e2.toJSON(), t2);
    return h$4.fromFeatureSet(r2, this._arcadeLayerSchema);
  }
};
let d$1 = class d extends m$2 {
  async executeQuery(e2, t2) {
    const { data: r2 } = await d$2(this.service.source, e2, t2), a3 = !e2.quantizationParameters;
    return S$3.fromBuffer(r2, this._arcadeLayerSchema, a3);
  }
};
let S$2 = class S2 extends m$2 {
  async executeQuery(e2, s3) {
    const { source: i2, capabilities: o3, spatialReference: u2, objectIdField: m4, geometryType: p2 } = this.service;
    if (null != e2.quantizationParameters && !o3.query.supportsQuantization) {
      const o4 = e2.clone(), p3 = m$4(o4.quantizationParameters);
      o4.quantizationParameters = null;
      const { data: l3 } = await c$4(i2, o4, u2, s3), y2 = it(l3, m4);
      return at(p3, y2), h$4.fromOptimizedFeatureSet(y2, this._arcadeLayerSchema);
    }
    const { data: l2 } = await c$4(i2, e2, this.service.spatialReference, s3);
    return "esriGeometryPoint" === p2 && (l2.features = l2.features?.filter((e3) => {
      if (null != e3.geometry) {
        const t2 = e3.geometry;
        return Number.isFinite(t2.x) && Number.isFinite(t2.y);
      }
      return true;
    })), h$4.fromFeatureSet(l2, this._arcadeLayerSchema);
  }
};
let F$1 = class F extends m$2 {
  async executeQuery(e2, r2) {
    const { capabilities: i2 } = this.service;
    if (e2.quantizationParameters && !i2.query.supportsQuantization) {
      const i3 = e2.clone(), o4 = m$4(i3.quantizationParameters);
      i3.quantizationParameters = null;
      const n2 = await v$1(this.service.source, e2, r2);
      return at(o4, n2), h$4.fromOptimizedFeatureSet(n2, this._arcadeLayerSchema);
    }
    const o3 = await v$1(this.service.source, e2, r2);
    return h$4.fromOptimizedFeatureSet(o3, this._arcadeLayerSchema);
  }
};
class t {
  constructor() {
    this.version = 0, this.source = false, this.targets = { feature: false, aggregate: false }, this.storage = { filters: false, data: false }, this.mesh = false, this.queryFilter = false, this.why = { mesh: [], source: [] };
  }
  static create(e2) {
    const s3 = new t();
    let r2;
    for (r2 in e2) {
      const t2 = e2[r2];
      if ("object" == typeof t2)
        for (const e3 in t2) {
          const a3 = e3, i2 = t2[a3];
          s3[r2][a3] = i2;
        }
      s3[r2] = t2;
    }
    return s3;
  }
  static empty() {
    return t.create({});
  }
  static all() {
    return t.create({ source: true, targets: { feature: true, aggregate: true }, storage: { filters: true, data: true }, mesh: true });
  }
  unset(t2) {
    this.version = t2.version, t2.source && (this.source = false), t2.targets.feature && (this.targets.feature = false), t2.targets.aggregate && (this.targets.aggregate = false), t2.storage.filters && (this.storage.filters = false), t2.storage.data && (this.storage.data = false), t2.mesh && (this.mesh = false), t2.queryFilter && (this.queryFilter = false);
  }
  any() {
    return this.source || this.mesh || this.storage.filters || this.storage.data || this.targets.feature || this.targets.aggregate || this.queryFilter;
  }
  describe() {
    let t2 = 0, e2 = "";
    if (this.mesh) {
      t2 += 20, e2 += "-> (20) Mesh needs update\n";
      for (const t3 of this.why.mesh)
        e2 += `    + ${t3}
`;
    }
    if (this.source) {
      t2 += 10, e2 += "-> (10) The source needs update\n";
      for (const t3 of this.why.source)
        e2 += `    + ${t3}
`;
    }
    this.targets.feature && (t2 += 5, e2 += "-> (5) Feature target parameters changed\n"), this.storage.filters && (t2 += 5, e2 += "-> (5) Feature filter parameters changed\n"), this.targets.aggregate && (t2 += 4, e2 += "-> (4) Aggregate target parameters changed\n"), this.storage.data && (t2 += 1, e2 += "-> (1) Texture storage parameters changed");
    const s3 = t2 < 5 ? "Fastest" : t2 < 10 ? "Fast" : t2 < 15 ? "Moderate" : t2 < 20 ? "Slow" : "Very Slow";
    console.debug(`Applying ${s3} update of cost ${t2}/45 `), console.debug(e2);
  }
  toJSON() {
    return { queryFilter: this.queryFilter, source: this.source, targets: this.targets, storage: this.storage, mesh: this.mesh };
  }
}
let a$1 = class a {
  constructor(e2, i2) {
    this.requests = { done: new Array(), stream: new t$3(10) }, this._edits = null, this._abortController = new AbortController(), this._version = 0, this._isDone = false, this.didSend = false, this.tile = e2, this._version = i2, this._resolver = C$1(), this._resolver.promise.catch((e3) => f$3(e3));
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  get empty() {
    return !this.requests.done.length && null == this.edits;
  }
  get edits() {
    return this._edits;
  }
  get done() {
    return this._resolver.promise;
  }
  get isDone() {
    return this._isDone;
  }
  resolve() {
    this._isDone = true, this._resolver.resolve();
  }
  clear() {
    this.requests.done = [];
  }
  applyUpdate(e2) {
    this.requests.done.forEach((s3) => s3.message.status.unset(e2)), this._version = e2.version, null != this._edits && this._edits.status.unset(e2);
  }
  add(e2) {
    e2.message.status = e2.message.status ?? t.empty(), e2.message.status.version = this._version, has("esri-2d-update-debug") && console.debug(this.tile.id, "DataTileSubscription:add", this._version), e2.message.end && (this.requests.done.forEach((e3) => {
      null != e3.message && e3.message.end && (e3.message.end = false);
    }), this._resolver.resolve(), this._isDone = true), this.requests.done.push(e2);
  }
  edit(s3, t$12) {
    const r2 = s3.getQuantizationTransform(), i2 = s3.fullSchema(), a3 = Array.from(s3.features()).filter(k$1), n2 = [...t$12, ...a3.map((e2) => e2.objectId)];
    if (this.removeIds(n2), this._invalidate(), null == this._edits)
      return void (this._edits = { type: "append", addOrUpdate: h$4.fromOptimizedFeatures(a3, i2, r2), id: this.tile.id, status: t.empty(), end: true });
    this.requests.done.forEach((e2) => e2.message.end = false);
    this._edits.addOrUpdate.append(s3.features());
  }
  *readers() {
    for (const { message: e2 } of this.requests.done)
      null != e2.addOrUpdate && (yield e2.addOrUpdate);
    null != this._edits?.addOrUpdate && (yield this._edits.addOrUpdate);
  }
  _invalidate() {
    for (const e2 of this.requests.done)
      e2.message.status = t.empty();
    null != this._edits && (this._edits.status = t.empty());
  }
  removeIds(e2) {
    this._invalidate();
    for (const { message: s3 } of this.requests.done) {
      const t2 = s3.addOrUpdate;
      null != t2 && (t2.removeIds(e2), t2.isEmpty && (has("esri-2d-update-debug") && console.debug("Removing FeatureSetReader"), s3.addOrUpdate = null));
    }
    null != this._edits?.addOrUpdate && this._edits.addOrUpdate.removeIds(e2), this.requests.done = this.requests.done.filter((e3) => e3.message.addOrUpdate || e3.message.end);
  }
  abort() {
    this._abortController.abort(), this._resolver.reject(u$3());
  }
};
function p$1(e2, s3) {
  const t2 = /* @__PURE__ */ new Set();
  return e2 && e2.forEach((e3) => t2.add(e3)), s3 && s3.forEach((e3) => t2.add(e3)), t2.has("*") ? ["*"] : Array.from(t2);
}
let m$1 = class m2 {
  constructor(e2) {
    this.updatingHandles = new h$5(), this.events = new o$3(), this._resolver = C$1(), this._didEdit = false, this._subscriptions = /* @__PURE__ */ new Map(), this._outSR = e2.outSR, this._serviceInfo = e2.serviceInfo, this._onTileUpdateMessage = e2.onMessage, this._arcadeLayerSchema = e2.arcadeLayerSchema;
  }
  destroy() {
    for (const e2 of this._subscriptions.values())
      e2.abort();
    this.updatingHandles.destroy();
  }
  get subscriptions() {
    return this._subscriptions.values();
  }
  async _onMessage(e2) {
    const s3 = this._subscriptions.get(e2.id);
    if (!s3)
      return;
    const t$12 = { ...e2, remove: e2.remove ?? [], status: e2.status ?? t.empty() };
    return d$3(this._onTileUpdateMessage(t$12, s3.options));
  }
  update(s3, t2) {
    const i2 = t2.fields.length;
    t2.outFields = p$1(this._schema?.outFields, t2.outFields), t2.outFields = t2.outFields.length >= 0.75 * i2 ? ["*"] : t2.outFields, t2.outFields.sort();
    const r2 = a$3(this._schema, t2);
    if (!r2)
      return;
    has("esri-2d-update-debug") && console.debug("Applying Update - Source:", r2);
    const a3 = "orderByFields" in this._serviceInfo && this._serviceInfo.orderByFields ? this._serviceInfo.orderByFields : this._serviceInfo.objectIdField + " ASC", d3 = this._serviceInfo.source, h3 = { returnCentroid: !(null !== d3 && "object" == typeof d3 && "path" in d3 && w$2(d3.path)) && "esriGeometryPolygon" === this._serviceInfo.geometryType, returnGeometry: true, timeReferenceUnknownClient: "stream" !== this._serviceInfo.type && this._serviceInfo.timeReferenceUnknownClient, outFields: t2.outFields, outSpatialReference: this._outSR, orderByFields: [a3], where: t2.definitionExpression || "1=1", gdbVersion: t2.gdbVersion, historicMoment: t2.historicMoment, timeExtent: t2.timeExtent ? c$6.fromJSON(t2.timeExtent) : null }, l2 = this._schema && s$5(r2, "outFields");
    this._schema && p$4(r2, ["timeExtent", "definitionExpression", "gdbVersion", "historicMoment", "customParameters"]) && (s3.why.mesh.push("Layer filter and/or custom parameters changed"), s3.why.source.push("Layer filter and/or custom parameters changed"), s3.mesh = true, s3.source = true, s3.queryFilter = true), l2 && (s3.why.source.push("Layer required fields changed"), s3.source = true), a$3(h3, this._queryInfo) && (this._queryInfo = h3), this._schema = t2, this._resolver.resolve();
  }
  whenInitialized() {
    return this._resolver.promise;
  }
  async applyUpdate(e2) {
    if (e2.queryFilter || e2.source && this._didEdit)
      return this.refresh(e2.version), void (this._didEdit = false);
    this._subscriptions.forEach((s3) => s3.applyUpdate(e2)), await this.resend();
  }
  refresh(e2, s3) {
    for (const t2 of this._tiles())
      this.unsubscribe(t2), this.subscribe(t2, e2);
  }
  subscribe(e2, s3) {
    const t2 = new a$1(e2, s3);
    return this._subscriptions.set(e2.id, t2), t2;
  }
  unsubscribe(e2) {
    const s3 = this.getSubscription(e2.id);
    null != s3 && s3.abort(), this._subscriptions.delete(e2.id);
  }
  createQuery(e2 = {}) {
    const s3 = this._queryInfo.historicMoment ? new Date(this._queryInfo.historicMoment) : null;
    return new b$1({ ...this._queryInfo, historicMoment: s3, ...e2 });
  }
  getSubscription(e2) {
    return this._subscriptions.has(e2) ? this._subscriptions.get(e2) : null;
  }
  async queryLastEditDate() {
    throw new Error("Service does not support query type");
  }
  async query(e2, s3) {
    throw new Error("Service does not support query");
  }
  *_tiles() {
    const e2 = Array.from(this._subscriptions.values());
    for (const s3 of e2)
      yield s3.tile;
  }
  async edit(e2, s3) {
    return this.updatingHandles.addPromise(this._edit(e2, s3));
  }
  async _edit(e2, s3) {
    const t2 = Array.from(this._subscriptions.values()), i2 = t2.map(({ tile: e3 }) => e3);
    for (const r2 of t2)
      r2.removeIds(s3);
    if (e2.length) {
      const t3 = i2.map((s4) => {
        const t4 = this.createTileQuery(s4);
        return t4.objectIds = e2, { tile: s4, query: t4 };
      }).map(async ({ tile: e3, query: s4 }) => ({ tile: e3, result: await this.query(s4, { query: { tile: has("esri-tiles-debug") ? e3.id.replaceAll("/", ".") : void 0 } }), query: s4 })), o3 = (await j$1(t3)).map(async ({ tile: t4, result: i3 }) => {
        if (!i3.hasFeatures && !s3.length && !e2.length)
          return;
        const r2 = this._subscriptions.get(t4.key.id);
        r2 && r2.edit(i3, e2);
      });
      await Promise.allSettled(o3);
    }
    this._didEdit = true;
  }
};
const u$1 = 4;
let c$2 = class c extends m$1 {
  constructor(e2) {
    super(e2), this.type = "feature", this.mode = "on-demand", this._adapter = y$1(e2.serviceInfo), this._queue = new _$2({ concurrency: 8, process: async (e3) => {
      if (s$6(e3), null != e3.tile) {
        const t2 = e3.tile.key.id, { signal: r2 } = e3, s3 = has("esri-tiles-debug") ? { tile: t2.replaceAll("/", "."), depth: e3.depth } : void 0, i2 = await this._adapter.executeQuery(e3.query, { signal: r2, query: { ...s3, ...this._schema?.customParameters } });
        return i2.level = e3.tile.key.level, i2;
      }
      return this._adapter.executeQuery(e3.query, { ...e3, query: this._schema?.customParameters });
    } }), this._patchQueue = new _$2({ concurrency: 8, process: async (e3) => {
      if (s$6(e3), null != e3.tile) {
        const t2 = e3.tile.key.id, { signal: r2 } = e3, s3 = has("esri-tiles-debug") ? { tile: t2.replaceAll("/", "."), depth: e3.depth } : void 0, i2 = await this._adapter.executeQuery(e3.query, { signal: r2, query: { ...s3, ...this._schema?.customParameters } });
        return i2.level = e3.tile.key.level, i2;
      }
      return this._adapter.executeQuery(e3.query, { ...e3, query: this._schema?.customParameters });
    } });
  }
  destroy() {
    super.destroy(), this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
  }
  enqueueQuery(e2, t2) {
    return this.updatingHandles.addPromise(this._queue.push(e2, t2));
  }
  enqueuePatchQuery(e2, t2) {
    return this.updatingHandles.addPromise(this._patchQueue.push(e2, t2));
  }
  get maxRecordCountFactor() {
    const { query: e2 } = this._serviceInfo.capabilities;
    return e2.supportsMaxRecordCountFactor ? u$1 : null;
  }
  get maxPageSize() {
    const { query: e2 } = this._serviceInfo.capabilities;
    return (e2.maxRecordCount ?? 8e3) * (this.maxRecordCountFactor ?? 1);
  }
  get pageSize() {
    return Math.min(8e3, this.maxPageSize);
  }
  enableEvent(e2, t2) {
  }
  subscribe(e2, s3) {
    const a3 = super.subscribe(e2, s3);
    return this._fetchDataTile(e2).catch((s4) => {
      b$2(s4) || s$4.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource").error(new s$3("mapview-query-error", "Encountered error when fetching tile", { tile: e2, error: s4 }));
    }), a3;
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  readers(e2) {
    return this._subscriptions.get(e2).readers();
  }
  async query(e2, t2 = {}) {
    const r2 = t2.query ?? {};
    return this._adapter.executeQuery(e2, { ...t2, query: { ...r2, ...this._schema?.customParameters } });
  }
  async queryLastEditDate() {
    const t2 = this._serviceInfo.source, r2 = { ...t2.query, f: "json" };
    return (await j$2(t2.path, { query: r2, responseType: "json" })).data.editingInfo.lastEditDate;
  }
  createTileQuery(e2, t2 = {}) {
    const r2 = this._serviceInfo.geometryType, s3 = this.createQuery(t2);
    s3.quantizationParameters = t2.quantizationParameters ?? e2.getQuantizationParameters(), s3.resultType = "tile", s3.geometry = e2.extent, this._serviceInfo.capabilities.query.supportsQuantization ? "esriGeometryPolyline" === r2 && (s3.maxAllowableOffset = e2.resolution * has("feature-polyline-generalization-factor")) : "esriGeometryPolyline" !== r2 && "esriGeometryPolygon" !== r2 || (s3.maxAllowableOffset = e2.resolution, "esriGeometryPolyline" === r2 && (s3.maxAllowableOffset *= has("feature-polyline-generalization-factor")));
    const i2 = this._serviceInfo.capabilities.query;
    return s3.defaultSpatialReferenceEnabled = i2.supportsDefaultSpatialReference, s3.compactGeometryEnabled = i2.supportsCompactGeometry, s3;
  }
  async _executePatchQuery(e2, t2, r2, s3) {
    const i2 = t2.clone();
    i2.outFields = [this._serviceInfo.objectIdField, ...r2], i2.returnCentroid = false, i2.returnGeometry = false;
    const a3 = null != i2.start ? i2.start / 8e3 : 0, o3 = s3.signal;
    return await this.enqueuePatchQuery({ tile: e2, query: i2, signal: o3, depth: a3 });
  }
  async _resend(e2, t2) {
    const { query: r2, message: i2 } = e2, a3 = null != r2.outFields ? r2.outFields : [], o3 = this._queryInfo.outFields, n2 = o3.filter((e3) => !a3.includes(e3));
    if (null != i2.addOrUpdate)
      if (n2.length)
        try {
          const e3 = this._subscriptions.get(i2.id).tile, a4 = await this._executePatchQuery(e3, r2, n2, t2);
          s$6(t2), r2.outFields = o3, i2.addOrUpdate.joinAttributes(a4), this._onMessage({ ...i2, end: i2.end, type: "append" });
        } catch (u2) {
        }
      else
        this._onMessage({ ...i2, type: "append" });
    else
      this._onMessage({ ...i2, type: "append" });
  }
  async _resendSubscription(e2) {
    if (has("esri-2d-update-debug") && console.debug(e2.tile.id, "Resend Subscription"), e2.empty)
      return this._onMessage({ id: e2.tile.id, addOrUpdate: null, end: false, type: "append" });
    const t2 = e2.signal;
    for (const r2 of e2.requests.done)
      await this._resend(r2, { signal: t2 });
    return null != e2.edits ? this._onMessage(e2.edits) : void 0;
  }
  async resend() {
    const e2 = Array.from(this._subscriptions.values());
    await Promise.all(e2.map((e3) => this._resendSubscription(e3)));
  }
};
const s$2 = has("esri-mobile"), i = { maxDrillLevel: s$2 ? 1 : 4, maxRecordCountFactor: s$2 ? 1 : 3 };
class a2 extends c$2 {
  constructor(e2) {
    super(e2);
  }
  async _fetchDataTile(r2) {
    const s3 = this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor, a3 = this._subscriptions.get(r2.key.id), o3 = a3.signal, n2 = r2.getQuantizationParameters();
    let c4 = 0;
    const d3 = async (u2, l2) => {
      const m4 = this._queryInfo, p2 = this.createTileQuery(u2, { maxRecordCountFactor: s3 ? i.maxRecordCountFactor : void 0, returnExceededLimitFeatures: false, quantizationParameters: n2 });
      c4++;
      try {
        const t2 = await this.enqueueQuery({ tile: r2, query: p2, signal: o3, depth: l2 });
        if (c4--, s$6(o3), !t2)
          return;
        if (m4 !== this._queryInfo)
          return void d3(u2, l2);
        if (t2.exceededTransferLimit && l2 < i.maxDrillLevel) {
          for (const e2 of u2.createChildTiles())
            d3(e2, l2 + 1);
          return;
        }
        const s4 = { id: r2.id, addOrUpdate: t2, end: 0 === c4, type: "append" };
        a3.add({ query: p2, message: s4 }), this._onMessage(s4);
      } catch (f2) {
        if (!b$2(f2)) {
          const e2 = { id: r2.id, addOrUpdate: null, end: true, type: "append" };
          a3.add({ query: p2, message: e2 }), this._onMessage(e2);
        }
      }
    };
    d3(r2, 0);
  }
}
class o2 extends c$2 {
  constructor(e2) {
    super(e2);
  }
  async _fetchDataTile(s3) {
    const i2 = 6, o3 = 20, n2 = this._subscriptions.get(s3.key.id);
    let d3 = false, c4 = 0, u2 = 0;
    const h3 = (e2, t2) => {
      u2--, s$6(n2);
      const r2 = s3.id, i3 = e2.reader, o4 = e2.query;
      if (!i3.exceededTransferLimit) {
        if (d3 = true, 0 !== t2 && !i3.hasFeatures) {
          const e4 = { id: r2, addOrUpdate: i3, end: 0 === u2, type: "append" };
          return n2.add({ message: e4, query: o4 }), void this._onMessage(e4);
        }
        const e3 = { id: r2, addOrUpdate: i3, end: 0 === u2, type: "append" };
        return n2.add({ message: e3, query: o4 }), void this._onMessage(e3);
      }
      const c5 = { id: r2, addOrUpdate: i3, end: d3 && 0 === u2, type: "append" };
      n2.add({ message: c5, query: o4 }), this._onMessage(c5);
    };
    let m4 = 0, p2 = 0;
    for (; !d3 && p2++ < o3; ) {
      let o4;
      for (let a3 = 0; a3 < m4 + 1; a3++) {
        const a4 = c4++;
        u2++, o4 = this._fetchDataTilePage(s3, a4, n2).then((e2) => e2 && h3(e2, a4)).catch((a5) => {
          if (d3 = true, !b$2(a5)) {
            s$4.getLogger("esri.views.2d.layers.features.sources.PagedFeatureSource").error(new s$3("mapview-query-error", "Encountered error when fetching tile", { tile: s3, error: a5 }));
            const r2 = { id: s3.id, addOrUpdate: null, end: d3, type: "append" }, i3 = { start: this.pageSize * c4, num: this.pageSize, returnExceededLimitFeatures: true, quantizationParameters: s3.getQuantizationParameters() };
            null != this.maxRecordCountFactor && (i3.maxRecordCountFactor = this.maxRecordCountFactor);
            const o5 = this.createTileQuery(s3, i3);
            n2.add({ message: r2, query: o5 }), this._onMessage(r2);
          }
        });
      }
      await o4, s$6(n2), m4 = Math.min(m4 + 2, i2);
    }
  }
  async _fetchDataTilePage(e2, t2, r2) {
    s$6(r2);
    const i2 = this._queryInfo, o3 = { start: this.pageSize * t2, num: this.pageSize, returnExceededLimitFeatures: true, quantizationParameters: e2.getQuantizationParameters() };
    null != this.maxRecordCountFactor && (o3.maxRecordCountFactor = this.maxRecordCountFactor);
    const n2 = this.createTileQuery(e2, o3);
    try {
      const s3 = r2.signal, o4 = await this.enqueueQuery({ tile: e2, query: n2, signal: s3, depth: t2 });
      return s$6(r2), o4 ? i2 !== this._queryInfo ? this._fetchDataTilePage(e2, t2, r2) : { reader: o4, query: n2 } : null;
    } catch (d3) {
      return f$3(d3), null;
    }
  }
}
function l(e2, t2, s3) {
  const r2 = e2.getXHydrated(), o3 = e2.getYHydrated(), a3 = t2.getColumnForX(r2), n2 = Math.floor(t2.normalizeCol(a3));
  return `${s3}/${Math.floor(t2.getRowForY(o3))}/${n2}`;
}
function h$1(e2, t2) {
  if (null == e2)
    return null;
  const s3 = t2.transform, r2 = e2.getQuantizationTransform();
  if (null == r2) {
    const [t3, r3] = s3.scale, [o4, a4] = s3.translate, n3 = -o4 / t3, i3 = 1 / t3, d4 = a4 / r3, u3 = 1 / -r3;
    return e2.transform(n3, d4, i3, u3);
  }
  const [o3, a3] = r2.scale, [n2, i2] = r2.translate, [d3, u2] = s3.scale, [l2, h3] = s3.translate, c4 = o3 / d3, g2 = (n2 - l2) / d3, p2 = a3 / u2, _2 = (-i2 + h3) / u2;
  return e2.transform(g2, _2, c4, p2);
}
let c$1 = class c2 extends c$2 {
  constructor(e2) {
    super(e2), this.mode = "snapshot", this._loading = true, this._controller = new AbortController(), this._downloadPromise = null, this._didSendEnd = false, this._queries = new Array(), this._invalidated = false, this._hasAggregates = false, this._random = new t$4(1e3), this._store = e2.store, this._markedIdsBufId = this._store.storage.createBitset();
  }
  destroy() {
    super.destroy(), this._controller.abort();
  }
  get loading() {
    return this._loading;
  }
  get _signal() {
    return this._controller.signal;
  }
  update(e2, t2) {
    super.update(e2, t2), this._featureCount ??= t2.initialFeatureCount, null != t2.changedFeatureCount && (this._featureCount = t2.changedFeatureCount), this._hasAggregates = !!e2.targets?.aggregate;
  }
  async resend(e2 = false) {
    if (await this._downloadPromise, this._invalidated || e2) {
      const e3 = this._featureCount;
      return n$2(e3, "Expected featureCount to be defined"), this._invalidated = false, this._subscriptions.forEach((e4) => e4.clear()), this._downloadPromise = this._download(e3), void await this._downloadPromise;
    }
    const t2 = this._queries.map(({ query: e3, reader: t3 }) => this._sendPatchQuery(e3, t3));
    await Promise.all(t2), this._subscriptions.forEach((e3) => {
      e3.requests.done.forEach((e4) => this._onMessage(e4.message));
    });
  }
  async refresh(e2, t2) {
    t2 && (this._featureCount = t2.featureCount), await this.resend(true);
  }
  async _sendPatchQuery(e2, t2) {
    const s3 = null != e2.outFields ? e2.outFields : [], o3 = this._queryInfo.outFields, a3 = o3.filter((e3) => !s3.includes(e3));
    if (!a3.length)
      return;
    const n2 = e2.clone(), i2 = this._signal;
    n2.returnGeometry = false, n2.returnCentroid = false, n2.outFields = a3, e2.outFields = o3;
    const d3 = await this.enqueueQuery({ query: n2, depth: 0, signal: i2 });
    s$6({ signal: i2 }), t2.joinAttributes(d3);
  }
  async _fetchDataTile(e2) {
    this._downloadPromise ??= this._download(this._featureCount);
    const t$12 = this._store.search(e2), s3 = this._subscriptions.get(e2.key.id), r2 = t$12.length - 1;
    for (let d3 = 0; d3 < r2; d3++) {
      const r3 = h$1(t$12[d3], e2), a4 = { type: "append", id: e2.id, addOrUpdate: r3, end: false, status: t.empty() };
      s3.add({ query: null, message: a4 }), this._hasAggregates || await A$2(1), this._onMessage(a4);
    }
    const a3 = h$1(r2 >= 0 ? t$12[r2] : null, e2), n2 = this._didSendEnd, i2 = { type: "append", id: e2.id, addOrUpdate: a3, end: n2, status: t.empty() };
    s3.add({ query: null, message: i2 }), this._onMessage(i2);
  }
  async _download(e2) {
    try {
      await this.whenInitialized();
      const t2 = this._store.storage.getBitset(this._markedIdsBufId), s3 = /* @__PURE__ */ new Set();
      t2.clear();
      const r2 = Math.ceil(e2 / this.pageSize), o3 = Array.from({ length: r2 }, (e3, t3) => t3).sort((e3, t3) => this._random.getInt() - this._random.getInt()).map((e3) => this._downloadPage(e3, t2, s3));
      await Promise.all(o3), this._store.sweepFeatures(t2, this._store.storage), this._store.sweepFeatureSets(s3);
    } catch (s3) {
      s$4.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource").error("mapview-snapshot-source", "Encountered and error when downloading feature snapshot", s3);
    }
    this._sendEnd(), this._loading = false;
  }
  async _downloadPage(e2, t2, s3) {
    const o3 = this.pageSize, a3 = { start: e2 * o3, num: o3, cacheHint: true };
    null != this.maxRecordCountFactor && (a3.maxRecordCountFactor = this.maxRecordCountFactor);
    const n2 = this.createQuery(a3), i2 = this._signal, d3 = await this.enqueueQuery({ query: n2, depth: e2, signal: i2 });
    s$6({ signal: i2 }), this._queries.push({ query: n2, reader: d3 }), this._store.insert(d3), s3.add(d3.instance);
    const u2 = d3.getCursor();
    for (; u2.next(); )
      t2.set(u2.getDisplayId());
    this._send(d3);
  }
  _send(e2) {
    if (!this._subscriptions.size)
      return;
    let t$12 = null;
    const s3 = /* @__PURE__ */ new Map(), r$12 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Map();
    this._subscriptions.forEach((e3) => {
      const a3 = e3.tile;
      s3.set(a3.key.id, null), t$12 = a3.tileInfoView, r$12.add(a3.level);
      const { row: n2, col: i2 } = a3.key, d3 = `${a3.level}/${n2}/${i2}`, u2 = o3.get(d3) ?? [];
      u2.push(e3), o3.set(d3, u2);
    });
    for (const a3 of r$12) {
      const r2 = t$12.getLODInfoAt(a3), n2 = e2.getCursor();
      for (; n2.next(); ) {
        const e3 = l(n2, r2, a3), t2 = n2.getIndex();
        if (o3.has(e3))
          for (const r3 of o3.get(e3)) {
            const e4 = r3.tile.id;
            let o4 = s3.get(e4);
            null == o4 && (o4 = [], s3.set(e4, o4)), o4.push(t2);
          }
      }
    }
    s3.forEach((t$13, s4) => {
      if (null != t$13) {
        const r$13 = this._subscriptions.get(s4), o4 = { type: "append", id: s4, addOrUpdate: h$1(r.from(e2, t$13), r$13.tile), end: false, status: t.empty() };
        r$13.add({ query: null, message: o4 }), this._onMessage(o4);
      }
    });
  }
  _sendEnd() {
    this._subscriptions.forEach((e2) => {
      const t$12 = { type: "append", id: e2.tile.id, addOrUpdate: null, end: true, status: t.empty() };
      e2.add({ query: null, message: t$12 }), this._onMessage(t$12);
    }), this._didSendEnd = true;
  }
};
c$1 = e([c$7("esri.view.2d.layers.features.sources.SnapshotFeatureSource")], c$1);
let s$1 = class s extends g$2 {
  constructor(r2) {
    super(r2);
  }
  get connectionStatus() {
    return this.connection?.connectionStatus;
  }
  get errorString() {
    return this.connection?.errorString;
  }
};
e([y$3()], s$1.prototype, "connection", void 0), e([y$3()], s$1.prototype, "connectionStatus", null), e([y$3()], s$1.prototype, "errorString", null), s$1 = e([c$7("esri.views.2d.layers.features.sources.StreamConnectionState")], s$1);
const p = 2500;
function _(e2, t2) {
  const s3 = e2.weakClone();
  if (null != e2.geometry) {
    const i2 = M(t2, e2.geometry.coords[0]), o3 = N(t2, e2.geometry.coords[1]);
    s3.geometry = new t$2([], [i2, o3]);
  }
  return s3;
}
function m3(e2) {
  return "esriGeometryPoint" === e2 ? _ : (t2, s3) => {
    const n2 = t2.weakClone(), r2 = new t$2(), o3 = false, d3 = false, c4 = ht(r2, t2.geometry, o3, d3, e2, s3, false, false);
    return n2.geometry = c4, n2;
  };
}
function y(e2) {
  return "esriGeometryPoint" === e2 ? (e3) => null != e3.geometry ? { minX: e3.geometry.coords[0], minY: e3.geometry.coords[1], maxX: e3.geometry.coords[0], maxY: e3.geometry.coords[1] } : { minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 } : (e3) => {
    let t2 = 1 / 0, s3 = 1 / 0, i2 = -1 / 0, n2 = -1 / 0;
    return null != e3.geometry && e3.geometry.forEachVertex((e4, r2) => {
      t2 = Math.min(t2, e4), s3 = Math.min(s3, r2), i2 = Math.max(i2, e4), n2 = Math.max(n2, r2);
    }), { minX: t2, minY: s3, maxX: i2, maxY: n2 };
  };
}
function g(e2, s3) {
  const i2 = i$1(9, y(s3));
  return i2.load(e2), i2;
}
function f(e2, t2) {
  return e2.search({ minX: t2.bounds[0], minY: t2.bounds[1], maxX: t2.bounds[2], maxY: t2.bounds[3] });
}
class v {
  constructor(e2, t2) {
    this.onUpdate = e2, this._geometryType = t2, this._objectIdToFeature = /* @__PURE__ */ new Map(), this._index = null;
  }
  get _features() {
    const e2 = [];
    return this._objectIdToFeature.forEach((t2) => e2.push(t2)), e2;
  }
  add(e2) {
    this._objectIdToFeature.set(e2.objectId, e2), this._index = null;
  }
  get(e2) {
    return this._objectIdToFeature.has(e2) ? this._objectIdToFeature.get(e2) : null;
  }
  forEach(e2) {
    this._objectIdToFeature.forEach(e2);
  }
  search(e2) {
    return this._index || (this._index = g(this._features, this._geometryType)), f(this._index, e2);
  }
  clear() {
    this._index = null, this._objectIdToFeature.clear();
  }
  removeById(e2) {
    const t2 = this._objectIdToFeature.get(e2);
    return t2 ? (this._objectIdToFeature.delete(e2), this._index = null, t2) : null;
  }
  update(e2, t2) {
    this.onUpdate(e2, t2);
  }
  get size() {
    return this._objectIdToFeature.size;
  }
}
class I extends m$1 {
  constructor(t2) {
    super(t2), this.type = "stream", this._updateIntervalId = 0, this._level = 0, this._isPaused = false, this._updateInfo = { websocket: 0, client: 0 }, this._inUpdate = false;
    const { outSR: s3 } = t2, { geometryType: i2, objectIdField: n2, timeInfo: r2, purgeOptions: a3, source: c4, spatialReference: u2, serviceFilter: l2, maxReconnectionAttempts: _2, maxReconnectionInterval: y2, updateInterval: g2, customParameters: f2, enabledEventTypes: I2 } = t2.serviceInfo, b2 = new v(this._onUpdate.bind(this), i2), T2 = new o$4(b2, n2, r2, a3), S4 = o$5(c4, u2, s3, i2, l2, _2, y2, f2 ?? {});
    this._connectionState = new s$1({ connection: S4 }), this._store = b2, this._manager = T2, this._connection = S4, this._quantize = m3(i2), this._enabledEventTypes = new Set(I2), this._handlesGroup = t$5([this._connection.on("data-received", (e2) => this._onFeature(e2)), this._connection.on("message-received", (e2) => this._onWebSocketMessage(e2))]), this._initUpdateInterval = () => {
      let e2 = performance.now();
      this._updateIntervalId = setInterval(() => {
        const s4 = performance.now(), i3 = s4 - e2;
        if (i3 > p) {
          e2 = s4;
          const t3 = Math.round(this._updateInfo.client / (i3 / 1e3)), n3 = Math.round(this._updateInfo.websocket / (i3 / 1e3));
          this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.events.emit("updateRate", { client: t3, websocket: n3 });
        }
        t2.canAcceptRequest() && !this._inUpdate && this._manager.checkForUpdates();
      }, g2);
    }, this._isPaused = t2.serviceInfo.isPaused, this._isPaused || this._initUpdateInterval();
  }
  destroy() {
    super.destroy(), this._clearUpdateInterval(), this._connection.destroy(), this._handlesGroup?.remove();
  }
  _fetchDataTile() {
  }
  get connectionStatus() {
    return this._connectionState.connectionStatus;
  }
  get errorString() {
    return this._connectionState.errorString;
  }
  updateCustomParameters(e2) {
    this._connection.updateCustomParameters(e2);
  }
  pauseStream() {
    this._isPaused || (this._isPaused = true, this._clearUpdateInterval());
  }
  resumeStream() {
    this._isPaused && (this._isPaused = false, this._initUpdateInterval());
  }
  sendMessageToSocket(e2) {
    this._connection.sendMessageToSocket(e2);
  }
  sendMessageToClient(e2) {
    this._isPaused && "type" in e2 && "clear" === e2.type ? (this._store.clear(), this._subscriptions.forEach((e3, t2) => {
      e3.didSend && e3.tile.level === this._level && this._onMessage({ type: "append", id: t2, addOrUpdate: null, clear: true, end: true });
    })) : this._connection.sendMessageToClient(e2);
  }
  enableEvent(e2, t2) {
    t2 ? this._enabledEventTypes.add(e2) : this._enabledEventTypes.delete(e2);
  }
  subscribe(e2, t2) {
    const s3 = super.subscribe(e2, t2);
    this._level = e2.level;
    const i2 = this._getTileFeatures(e2);
    return this._onMessage({ type: "append", id: e2.key.id, addOrUpdate: i2, end: true }), s3.didSend = true, s3;
  }
  unsubscribe(e2) {
    super.unsubscribe(e2);
  }
  *readers(e2) {
    const t2 = this._subscriptions.get(e2), { tile: s3 } = t2;
    yield this._getTileFeatures(s3);
  }
  createTileQuery(e2) {
    throw new Error("Service does not support tile  queries");
  }
  async resend() {
    this._subscriptions.forEach((e2) => {
      const { tile: t2 } = e2, s3 = { type: "append", id: t2.id, addOrUpdate: this._getTileFeatures(t2), end: true };
      this._onMessage(s3);
    });
  }
  _getTileFeatures(e2) {
    const t2 = this._store.search(e2).map((t3) => this._quantize(t3, e2.transform));
    return h$4.fromOptimizedFeatures(t2, this._arcadeLayerSchema, e2.transform);
  }
  _onWebSocketMessage(e2) {
    if (this._enabledEventTypes.has("message-received") && this.events.emit("message-received", e2), "type" in e2)
      switch (e2.type) {
        case "delete":
          if (e2.objectIds)
            for (const t2 of e2.objectIds)
              this._manager.removeById(t2);
          if (e2.trackIds)
            for (const t2 of e2.trackIds)
              this._manager.removeByTrackId(t2);
          break;
        case "clear":
          this._store.forEach((e3) => this._manager.removeById(e3.objectId));
      }
  }
  _onFeature(e2) {
    this._updateInfo.websocket++;
    try {
      this._enabledEventTypes.has("data-received") && this.events.emit("data-received", e2);
      const t2 = tt(e2, this._serviceInfo.geometryType, false, false, this._serviceInfo.objectIdField);
      this._manager.add(t2);
    } catch (t2) {
    }
  }
  _clearUpdateInterval() {
    clearInterval(this._updateIntervalId), this._updateIntervalId = 0;
  }
  async _onUpdate(e2, t$12) {
    this._inUpdate = true;
    try {
      null != e2 && (this._updateInfo.client += e2.length), this._subscriptions.forEach((e3, t2) => {
        e3.didSend && e3.tile.level === this._level && this._onMessage({ type: "append", id: t2, addOrUpdate: null, clear: true, end: false });
      });
      const t$13 = [];
      this._subscriptions.forEach((e3, s3) => {
        if (!e3.didSend || e3.tile.level !== this._level)
          return;
        const i2 = e3.tile, n2 = { type: "append", id: s3, addOrUpdate: this._getTileFeatures(i2), remove: [], end: false, status: t.empty() };
        e3.requests.stream.enqueue(n2), t$13.push(this._onMessage(n2));
      }), await Promise.all(t$13), this._subscriptions.forEach((e3, t2) => {
        e3.didSend && e3.tile.level === this._level && this._onMessage({ type: "append", id: t2, addOrUpdate: null, end: true });
      });
    } catch {
    }
    this._inUpdate = false;
  }
}
function s2(e2, s3, c4, u2, i2, p2, m4) {
  const f2 = n(e2, s3, c4, u2, i2, p2, m4);
  switch (f2.type) {
    case "feature":
      switch (f2.origin) {
        case "hosted":
        case "local":
          return new o2(f2);
        case "snapshot":
          return new c$1(f2);
        default:
          return new a2(f2);
      }
    case "stream":
      return new I(f2);
  }
}
function n(r2, t2, a3, o3, s3, n2, c4) {
  switch (r2.type) {
    case "snapshot":
      return { type: "feature", origin: "snapshot", featureCount: r2.featureCount ?? 0, serviceInfo: r2, onMessage: s3, outSR: a3, tileInfoView: o3, canAcceptRequest: n2, store: c4, arcadeLayerSchema: t2 };
    case "stream":
      return { type: "stream", serviceInfo: r2, onMessage: s3, outSR: a3, canAcceptRequest: n2, arcadeLayerSchema: t2 };
    case "memory":
    case "on-demand":
      return { type: "feature", serviceInfo: r2, onMessage: s3, outSR: a3, origin: u2(r2.source), tileInfoView: o3, canAcceptRequest: n2, arcadeLayerSchema: t2 };
  }
  function u2(r3) {
    return Array.isArray(r3) ? "local" : "path" in r3 && w$2(r3.path) ? "hosted" : "unknown";
  }
}
class h2 {
  constructor(e2 = [], s3, i2 = 8096) {
    this.onRelease = (t2) => {
    }, this._nodes = 0, this._root = new c3(this, 0, 0, 0), this._statisticFields = e2, this._pool = i2 ? new t$3(8096) : null, this._serviceInfo = s3;
  }
  destroy() {
    this.clear();
  }
  _acquire(t2, e2, s3) {
    this._nodes++;
    let i2 = null;
    return null != this._pool && (i2 = this._pool.dequeue()), null != i2 ? i2.realloc(t2, e2, s3) : i2 = new c3(this, t2, e2, s3), i2;
  }
  _release(t2) {
    this.onRelease(t2), this._nodes--, null != this._pool && this._pool.enqueue(t2);
  }
  get count() {
    return this._root.count;
  }
  get size() {
    return this._nodes;
  }
  get poolSize() {
    return this._pool?.size ?? 0;
  }
  get depth() {
    let t2 = 0;
    return this.forEach((e2) => t2 = Math.max(t2, e2.depth)), t2;
  }
  dropLevels(t2) {
    this.forEach((e2) => {
      if (e2.depth >= t2)
        for (let t3 = 0; t3 < e2.children.length; t3++) {
          const s3 = e2.children[t3];
          s3 && this._release(s3);
        }
    }), this.forEach((e2) => {
      if (e2.depth >= t2)
        for (let t3 = 0; t3 < e2.children.length; t3++)
          e2.children[t3] = null;
    });
  }
  clear() {
    this.forEach((t2) => this._release(t2)), this._root = new c3(this, 0, 0, 0);
  }
  insert(t2, e2, s3 = 0) {
    const i2 = h$4.fromOptimizedFeatures([t2], this._serviceInfo).getCursor();
    i2.next();
    const n2 = i2.readGeometry();
    if (!n2)
      return;
    const [o3, a3] = n2.coords, r2 = t2.geohashX, h3 = t2.geohashY;
    this.insertCursor(i2, t2.displayId, o3, a3, r2, h3, e2, s3);
  }
  insertCursor(t2, e2, s3, i2, n2, o3, a3, r2 = 0) {
    let l2 = this._root, h3 = 0, c4 = 0, u2 = 0;
    for (; null !== l2; ) {
      if (l2.depth >= r2 && (l2.count += 1, l2.xTotal += s3, l2.yTotal += i2, l2.xGeohashTotal += n2, l2.yGeohashTotal += o3, l2.referenceId = e2, this._updateStatisticsCursor(t2, l2, 1)), h3 >= a3)
        return void l2.add(e2);
      const d3 = Math.ceil((h3 + 1) / 2), f2 = Math.floor((h3 + 1) / 2), x2 = 1 - h3 % 2, m4 = 30 - (3 * d3 + 2 * f2), g2 = 30 - (2 * d3 + 3 * f2), y2 = (n2 & 7 * x2 + 3 * (1 - x2) << m4) >> m4, p2 = (o3 & 3 * x2 + 7 * (1 - x2) << g2) >> g2, _2 = y2 + p2 * (8 * x2 + 4 * (1 - x2));
      c4 = c4 << 3 * x2 + 2 * (1 - x2) | y2, u2 = u2 << 2 * x2 + 3 * (1 - x2) | p2, null == l2.children[_2] && (l2.children[_2] = this._acquire(c4, u2, h3 + 1)), h3 += 1, l2 = l2.children[_2];
    }
  }
  remove(t2, e2) {
    const s3 = h$4.fromOptimizedFeatures([t2], this._serviceInfo).getCursor();
    s3.next();
    const i2 = s3.readGeometry();
    if (!i2)
      return;
    const [n2, o3] = i2.coords, a3 = t2.geohashX, r2 = t2.geohashY;
    this.removeCursor(s3, n2, o3, a3, r2, e2);
  }
  removeCursor(t2, e2, s3, i2, n2, o3) {
    let a3 = this._root, r2 = 0;
    for (; null !== a3; ) {
      if (a3.count -= 1, a3.xTotal -= e2, a3.yTotal -= s3, a3.xGeohashTotal -= i2, a3.yGeohashTotal -= n2, this._updateStatisticsCursor(t2, a3, -1), r2 >= o3)
        return void a3.remove(t2.getDisplayId());
      const l2 = Math.ceil((r2 + 1) / 2), h3 = Math.floor((r2 + 1) / 2), c4 = 1 - r2 % 2, u2 = 30 - (3 * l2 + 2 * h3), d3 = 30 - (2 * l2 + 3 * h3), f2 = ((i2 & 7 * c4 + 3 * (1 - c4) << u2) >> u2) + ((n2 & 3 * c4 + 7 * (1 - c4) << d3) >> d3) * (8 * c4 + 4 * (1 - c4)), x2 = a3.children[f2];
      1 === x2?.count && (this._release(x2), a3.children[f2] = null), r2 += 1, a3 = x2;
    }
  }
  forEach(t2) {
    let e2 = this._root;
    for (; null !== e2; ) {
      const s3 = this._linkChildren(e2) || e2.next;
      t2(e2), e2 = s3;
    }
  }
  find(t2, e2, s3) {
    return this._root.find(t2, e2, s3, 0, 0, 0);
  }
  findIf(t2) {
    let e2 = null;
    return this.forEach((s3) => {
      t2(s3) && (e2 = s3);
    }), e2;
  }
  findAllIf(t2) {
    const e2 = [];
    return this.forEach((s3) => {
      t2(s3) && e2.push(s3);
    }), e2;
  }
  findSingleOccupancyNode(t2, e2, s3, i2, n2) {
    let o3 = this._root;
    for (; null !== o3; ) {
      const a3 = o3.depth, r2 = o3.xNode, l2 = o3.yNode, h3 = 1 - a3 % 2, c4 = o3.xGeohashTotal / o3.count, u2 = o3.yGeohashTotal / o3.count;
      if (1 === o3.count && t2 < c4 && c4 <= s3 && e2 < u2 && u2 <= i2)
        return o3;
      if (a3 >= n2) {
        o3 = o3.next;
        continue;
      }
      const d3 = Math.ceil((a3 + 1) / 2), f2 = Math.floor((a3 + 1) / 2), x2 = 30 - (3 * d3 + 2 * f2), m4 = 30 - (2 * d3 + 3 * f2), g2 = ~((1 << x2) - 1), y2 = ~((1 << m4) - 1), p2 = (t2 & g2) >> x2, _2 = (e2 & y2) >> m4, v2 = (s3 & g2) >> x2, M2 = (i2 & y2) >> m4, T2 = r2 << 3 * h3 + 2 * (1 - h3), b2 = l2 << 2 * h3 + 3 * (1 - h3), k2 = T2 + 8 * h3 + 4 * (1 - h3), N2 = b2 + 4 * h3 + 8 * (1 - h3), I2 = Math.max(T2, p2), C2 = Math.max(b2, _2), G2 = Math.min(k2, v2), L2 = Math.min(N2, M2);
      let S4 = null, w2 = null;
      for (let t3 = C2; t3 <= L2; t3++)
        for (let e3 = I2; e3 <= G2; e3++) {
          const s4 = e3 - T2 + (t3 - b2) * (8 * h3 + 4 * (1 - h3)), i3 = o3.children[s4];
          i3 && (S4 || (S4 = i3, S4.next = o3.next), w2 && (w2.next = i3), w2 = i3, i3.next = o3.next);
        }
      o3 = S4 || o3.next;
    }
    return null;
  }
  getRegionDisplayIds(t2) {
    let e2 = this._root;
    const { bounds: s3, geohashBounds: i2, level: n2 } = t2, [o3, a3, r2, l2] = s3, h3 = [];
    for (; null !== e2; ) {
      const t3 = e2.depth, s4 = e2.xNode, c4 = e2.yNode;
      if (t3 >= n2) {
        const t4 = e2.xTotal / e2.count, s5 = e2.yTotal / e2.count;
        t4 >= o3 && t4 <= r2 && s5 >= a3 && s5 <= l2 && e2.displayIds.forEach((t5) => h3.push(t5)), e2 = e2.next;
        continue;
      }
      const u2 = Math.ceil((t3 + 1) / 2), d3 = Math.floor((t3 + 1) / 2), f2 = 1 - t3 % 2, x2 = 30 - (3 * u2 + 2 * d3), m4 = 30 - (2 * u2 + 3 * d3), g2 = ~((1 << x2) - 1), y2 = ~((1 << m4) - 1), p2 = (i2.xLL & g2) >> x2, _2 = (i2.yLL & y2) >> m4, v2 = (i2.xTR & g2) >> x2, M2 = (i2.yTR & y2) >> m4, T2 = s4 << 3 * f2 + 2 * (1 - f2), b2 = c4 << 2 * f2 + 3 * (1 - f2), k2 = T2 + 8 * f2 + 4 * (1 - f2), N2 = b2 + 4 * f2 + 8 * (1 - f2), I2 = Math.max(T2, p2), C2 = Math.max(b2, _2), G2 = Math.min(k2, v2), L2 = Math.min(N2, M2);
      let S4 = null, w2 = null;
      for (let i3 = C2; i3 <= L2; i3++)
        for (let t4 = I2; t4 <= G2; t4++) {
          const s5 = t4 - T2 + (i3 - b2) * (8 * f2 + 4 * (1 - f2)), n3 = e2.children[s5];
          n3 && (S4 || (S4 = n3, S4.next = e2.next), w2 && (w2.next = n3), w2 = n3, n3.next = e2.next);
        }
      e2 = S4 || e2.next;
    }
    return h3;
  }
  getRegionStatistics(t2) {
    let e2 = this._root, s3 = 0, i2 = 0, n2 = 0;
    const o3 = {}, { bounds: a3, geohashBounds: r2, level: l2 } = t2, [h3, c4, u2, d3] = a3;
    let f2 = 0;
    for (; null !== e2; ) {
      const t3 = e2.depth, a4 = e2.xNode, x2 = e2.yNode;
      if (t3 >= l2) {
        const t4 = e2.xTotal / e2.count, a5 = e2.yTotal / e2.count;
        t4 > h3 && t4 <= u2 && a5 > c4 && a5 <= d3 && (s3 += e2.count, i2 += e2.xTotal, n2 += e2.yTotal, 1 === e2.count && (f2 = e2.referenceId), this._aggregateStatistics(o3, e2.statistics)), e2 = e2.next;
        continue;
      }
      const m4 = Math.ceil((t3 + 1) / 2), g2 = Math.floor((t3 + 1) / 2), y2 = 1 - t3 % 2, p2 = 30 - (3 * m4 + 2 * g2), _2 = 30 - (2 * m4 + 3 * g2), v2 = ~((1 << p2) - 1), M2 = ~((1 << _2) - 1), T2 = (r2.xLL & v2) >> p2, b2 = (r2.yLL & M2) >> _2, k2 = (r2.xTR & v2) >> p2, N2 = (r2.yTR & M2) >> _2, I2 = a4 << 3 * y2 + 2 * (1 - y2), C2 = x2 << 2 * y2 + 3 * (1 - y2), G2 = I2 + 8 * y2 + 4 * (1 - y2), L2 = C2 + 4 * y2 + 8 * (1 - y2), S4 = Math.max(I2, T2), w2 = Math.max(C2, b2), R2 = Math.min(G2, k2), F3 = Math.min(L2, N2);
      let z = null, j2 = null;
      for (let r3 = w2; r3 <= F3; r3++)
        for (let t4 = S4; t4 <= R2; t4++) {
          const a5 = t4 - I2 + (r3 - C2) * (8 * y2 + 4 * (1 - y2)), l3 = e2.children[a5];
          if (l3) {
            if (r3 !== w2 && r3 !== F3 && t4 !== S4 && t4 !== R2) {
              const t5 = l3.xTotal / l3.count, e3 = l3.yTotal / l3.count;
              t5 > h3 && t5 <= u2 && e3 > c4 && e3 <= d3 && (s3 += l3.count, i2 += l3.xTotal, n2 += l3.yTotal, 1 === l3.count && (f2 = l3.referenceId), this._aggregateStatistics(o3, l3.statistics));
              continue;
            }
            z || (z = l3, z.next = e2.next), j2 && (j2.next = l3), j2 = l3, l3.next = e2.next;
          }
        }
      e2 = z || e2.next;
    }
    return { count: s3, attributes: this.normalizeStatistics(o3, s3), xTotal: i2, yTotal: n2, referenceId: f2 };
  }
  getBins(t2) {
    const e2 = [], { geohashBounds: s3, level: i2 } = t2;
    let n2 = this._root;
    for (; null !== n2; ) {
      const t3 = n2.depth, o3 = n2.xNode, a3 = n2.yNode;
      if (t3 >= i2) {
        e2.push(n2), n2 = n2.next;
        continue;
      }
      const r2 = Math.ceil((t3 + 1) / 2), l2 = Math.floor((t3 + 1) / 2), h3 = 1 - t3 % 2, c4 = 30 - (3 * r2 + 2 * l2), u2 = 30 - (2 * r2 + 3 * l2), d3 = ~((1 << c4) - 1), f2 = ~((1 << u2) - 1), x2 = (s3.xLL & d3) >> c4, m4 = (s3.yLL & f2) >> u2, g2 = (s3.xTR & d3) >> c4, y2 = (s3.yTR & f2) >> u2, p2 = o3 << 3 * h3 + 2 * (1 - h3), _2 = a3 << 2 * h3 + 3 * (1 - h3), v2 = p2 + 8 * h3 + 4 * (1 - h3), M2 = _2 + 4 * h3 + 8 * (1 - h3), T2 = Math.max(p2, x2), b2 = Math.max(_2, m4), k2 = Math.min(v2, g2), N2 = Math.min(M2, y2);
      let I2 = null, C2 = null;
      for (let e3 = b2; e3 <= N2; e3++)
        for (let t4 = T2; t4 <= k2; t4++) {
          const s4 = t4 - p2 + (e3 - _2) * (8 * h3 + 4 * (1 - h3)), i3 = n2.children[s4];
          i3 && (I2 || (I2 = i3, I2.next = n2.next), C2 && (C2.next = i3), C2 = i3, i3.next = n2.next);
        }
      n2 = I2 || n2.next;
    }
    return e2;
  }
  _linkChildren(t2) {
    let e2 = null, s3 = null;
    for (let i2 = 0; i2 <= t2.children.length; i2++) {
      const n2 = t2.children[i2];
      n2 && (e2 || (e2 = n2, e2.next = t2.next), s3 && (s3.next = n2), s3 = n2, n2.next = t2.next);
    }
    return e2;
  }
  _updateStatisticsCursor(t2, e2, s3) {
    for (const i2 of this._statisticFields) {
      const n2 = i2.name, o3 = i2.inField ? t2.readAttribute(i2.inField) : t2.getComputedNumericAtIndex(i2.inFieldIndex);
      switch (i2.statisticType) {
        case "min": {
          if (isNaN(o3))
            break;
          if (!e2.statistics[n2]) {
            e2.statistics[n2] = { value: o3 };
            break;
          }
          const t3 = e2.statistics[n2].value;
          e2.statistics[n2].value = Math.min(t3, o3);
          break;
        }
        case "max": {
          if (isNaN(o3))
            break;
          if (!e2.statistics[n2]) {
            e2.statistics[n2] = { value: o3 };
            break;
          }
          const t3 = e2.statistics[n2].value;
          e2.statistics[n2].value = Math.max(t3, o3);
          break;
        }
        case "count":
          break;
        case "sum":
        case "avg": {
          e2.statistics[n2] || (e2.statistics[n2] = { value: 0, nanCount: 0 });
          const t3 = e2.statistics[n2].value, i3 = e2.statistics[n2].nanCount ?? 0;
          null == o3 || isNaN(o3) ? e2.statistics[n2].nanCount = i3 + s3 : e2.statistics[n2].value = t3 + s3 * o3;
          break;
        }
        case "avg_angle": {
          e2.statistics[n2] || (e2.statistics[n2] = { x: 0, y: 0, nanCount: 0 });
          const t3 = e2.statistics[n2].x, i3 = e2.statistics[n2].y, a3 = e2.statistics[n2].nanCount ?? 0, r2 = Math.PI / 180;
          null == o3 || isNaN(o3) ? e2.statistics[n2].nanCount = a3 + s3 : (e2.statistics[n2].x = t3 + s3 * Math.cos(o3 * r2), e2.statistics[n2].y = i3 + s3 * Math.sin(o3 * r2));
          break;
        }
        case "mode": {
          e2.statistics[n2] || (e2.statistics[n2] = {});
          const t3 = e2.statistics[n2][o3] || 0;
          e2.statistics[n2][o3] = t3 + s3;
          break;
        }
      }
    }
  }
  _aggregateStatistics(t2, e2) {
    for (const s3 of this._statisticFields) {
      const i2 = s3.name;
      switch (s3.statisticType) {
        case "min": {
          if (!t2[i2]) {
            t2[i2] = { value: e2[i2].value };
            break;
          }
          const s4 = t2[i2].value;
          t2[i2].value = Math.min(s4, e2[i2].value);
          break;
        }
        case "max": {
          if (!t2[i2]) {
            t2[i2] = { value: e2[i2].value };
            break;
          }
          const s4 = t2[i2].value;
          t2[i2].value = Math.max(s4, e2[i2].value);
          break;
        }
        case "count":
          break;
        case "sum":
        case "avg":
        case "avg_angle":
        case "mode":
          t2[i2] || (t2[i2] = {});
          for (const s4 in e2[i2]) {
            const n2 = t2[i2][s4] || 0;
            t2[i2][s4] = n2 + e2[i2][s4];
          }
      }
    }
  }
  normalizeStatistics(t2, e2) {
    const s3 = {};
    for (const i2 of this._statisticFields) {
      const n2 = i2.name;
      switch (i2.statisticType) {
        case "min":
        case "max": {
          const i3 = t2[n2];
          if (!e2 || !i3)
            break;
          s3[n2] = i3.value;
          break;
        }
        case "count":
          if (!e2)
            break;
          s3[n2] = e2;
          break;
        case "sum": {
          if (!e2)
            break;
          const { value: i3, nanCount: o3 } = t2[n2];
          if (!(e2 - o3))
            break;
          s3[n2] = i3;
          break;
        }
        case "avg": {
          if (!e2)
            break;
          const { value: i3, nanCount: o3 } = t2[n2];
          if (!(e2 - o3))
            break;
          s3[n2] = i3 / (e2 - o3);
          break;
        }
        case "avg_angle": {
          if (!e2)
            break;
          const { x: i3, y: o3, nanCount: a3 } = t2[n2];
          if (!(e2 - a3))
            break;
          const r2 = i3 / (e2 - a3), l2 = o3 / (e2 - a3), h3 = 180 / Math.PI, c4 = Math.atan2(l2, r2) * h3;
          s3[n2] = c4;
          break;
        }
        case "mode": {
          const e3 = t2[n2];
          let i3 = 0, o3 = 0, a3 = null;
          for (const t3 in e3) {
            const s4 = e3[t3];
            s4 === i3 ? o3 += 1 : s4 > i3 && (i3 = s4, o3 = 1, a3 = t3);
          }
          s3[n2] = "null" === a3 || o3 > 1 ? null : a3;
          break;
        }
      }
    }
    return s3;
  }
}
class c3 {
  constructor(t2, e2, s3, i2) {
    this.count = 0, this.xTotal = 0, this.yTotal = 0, this.statistics = {}, this.displayId = 0, this.referenceId = 0, this.displayIds = /* @__PURE__ */ new Set(), this.next = null, this.depth = 0, this.xNode = 0, this.yNode = 0, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this._tree = t2, this.children = new Array(32);
    for (let n2 = 0; n2 < this.children.length; n2++)
      this.children[n2] = null;
    this.xNode = e2, this.yNode = s3, this.depth = i2;
  }
  realloc(t2, e2, s3) {
    for (let i2 = 0; i2 < this.children.length; i2++)
      this.children[i2] = null;
    return this.xNode = t2, this.yNode = e2, this.depth = s3, this.next = null, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.displayId = 0, this.referenceId = 0, this.xTotal = 0, this.yTotal = 0, this.count = 0, this.statistics = {}, this.displayIds.clear(), this;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  add(t2) {
    this.displayIds.add(t2);
  }
  remove(t2) {
    this.displayIds.delete(t2);
  }
  getAttributes() {
    const t2 = this._tree.normalizeStatistics(this.statistics, this.count);
    return t2.referenceId = null, t2.aggregateId = this.id, t2.aggregateCount = this.count, t2;
  }
  getGeometry(t2, e2) {
    const o3 = this.getLngLatBounds(), [l2, h3, c4, u2] = o3, d3 = j$3({ rings: [[[l2, h3], [l2, u2], [c4, u2], [c4, h3], [l2, h3]]] }, f$4.WGS84, t2), f2 = K(new t$2(), d3, false, false);
    if (null != e2) {
      return ht(new t$2(), f2, false, false, "esriGeometryPolygon", e2, false, false);
    }
    return f2;
  }
  getGeometryCentroid(t2, e2) {
    const i2 = this.getLngLatBounds(), [l2, h3, c4, u2] = i2, d3 = j$3({ x: (l2 + c4) / 2, y: (h3 + u2) / 2 }, f$4.WGS84, t2), f2 = L$2(new t$2(), d3);
    if (null != e2) {
      return ht(new t$2(), f2, false, false, "esriGeometryPoint", e2, false, false);
    }
    return f2;
  }
  getLngLatBounds() {
    const t2 = this.depth, s3 = Math.ceil(t2 / 2), i2 = Math.floor(t2 / 2), n2 = 30 - (3 * s3 + 2 * i2), o3 = 30 - (2 * s3 + 3 * i2), a3 = this.xNode << n2, r2 = this.yNode << o3;
    return X({ geohashX: a3, geohashY: r2 }, this.depth);
  }
  find(t2, e2, s3, i2, n2, o3) {
    if (i2 >= s3)
      return this;
    const a3 = 1 - i2 % 2, r2 = 3 * a3 + 2 * (1 - a3), l2 = 2 * a3 + 3 * (1 - a3), h3 = 30 - n2 - r2, c4 = 30 - o3 - l2, u2 = ((t2 & 7 * a3 + 3 * (1 - a3) << h3) >> h3) + ((e2 & 3 * a3 + 7 * (1 - a3) << c4) >> c4) * (8 * a3 + 4 * (1 - a3)), d3 = this.children[u2];
    return null == d3 ? null : d3.find(t2, e2, s3, i2 + 1, n2 + r2, o3 + l2);
  }
}
const F2 = s$4.getLogger("esri.view.2d.layers.features.support.BinStore"), S$1 = 12, G = 64, R$1 = i$2(), L$1 = 5;
function T$2(e2) {
  return 57.29577951308232 * e2;
}
let A$1 = class A extends a$4 {
  constructor(t2, s3, r2, i2) {
    super(t2, r2), this.type = "bin", this.events = new o$3(), this.objectIdField = "aggregateId", this.featureAdapter = I$2, this._geohashLevel = L$1, this._geohashBuf = [], this._serviceInfo = i2, this.geometryInfo = t2.geometryInfo, this._spatialReference = s3, this._projectionSupportCheck = x$2(s3, f$4.WGS84), this._bitsets.geohash = r2.getBitset(r2.createBitset()), this._bitsets.inserted = r2.getBitset(r2.createBitset());
  }
  destroy() {
    this._tree && this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(e2, t2) {
    const o3 = this._schema;
    try {
      await super.updateSchema(e2, t2), await this._projectionSupportCheck;
    } catch (h3) {
    }
    this._fields = this._schema.params.fields, this._fieldsIndex = new Z(this._fields);
    const a3 = a$3(o3, t2);
    t2 && (null != a3 || e2.source || e2.storage.filters) ? ((s$5(a3, "params.fields") || s$5(a3, "params") || !this._tree || e2.source) && (this._tree && this._tree.destroy(), this._tree = new h2(this._statisticFields, this._serviceInfo), this._tree.onRelease = (e3) => e3.displayId && this._storage.releaseDisplayId(e3.displayId), this._geohashLevel = this._schema.params.fixedBinLevel, this._rebuildTree(), has("esri-2d-update-debug") && F2.info("Aggregate mesh needs update due to tree changing")), has("esri-2d-update-debug") && F2.info("Aggregate mesh needs update due to tree changing"), e2.targets[t2.name] = true, e2.mesh = false) : o3 && (e2.mesh = true);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e2, t2) {
    this._bitsets.inserted.forEachSet((s3) => {
      if (!e2.has(s3)) {
        const e3 = t2.lookupByDisplayIdUnsafe(s3);
        this._remove(e3);
      }
    });
  }
  sweepAggregates(e2, t2, s3) {
  }
  onTileData(e2, t2, s3, r2, i2, o3 = true) {
    if (!this._schema || null == t2.addOrUpdate)
      return t2;
    this.events.emit("changed");
    const a3 = this._getTransforms(e2, this._spatialReference);
    {
      const e3 = t2.addOrUpdate.getCursor();
      for (; e3.next(); )
        this._update(e3, r2);
    }
    if (t2.status.mesh || !o3)
      return t2;
    const h3 = new Array();
    this._getBinsForTile(h3, e2, a3, s3), t2.addOrUpdate = h$4.fromOptimizedFeatures(h3, { fields: this.fields, fieldsIndex: this._fieldsIndex, geometryType: "esriGeometryPolygon", objectIdField: this.objectIdField }), t2.addOrUpdate.attachStorage(s3), t2.end = true, t2.isRepush || (t2.clear = true);
    {
      const r3 = t2.addOrUpdate.getCursor();
      for (; r3.next(); ) {
        const t3 = r3.getDisplayId();
        this._bitsets.computed.unset(t3), this.setComputedAttributes(s3, r3, t3, e2.scale, i2);
      }
    }
    return t2;
  }
  forEachBin(e2) {
    this._tree.forEach(e2);
  }
  forEach(e2) {
    this._tree.forEach((t2) => {
      if (t2.depth !== this._geohashLevel)
        return;
      const s3 = this._toFeatureJSON(t2), r2 = h$4.fromFeatures([s3], { objectIdField: this.objectIdField, globalIdField: null, geometryType: this.geometryInfo.geometryType, fields: this.fields, fieldsIndex: this._fieldsIndex }).getCursor();
      r2.next(), e2(r2);
    });
  }
  forEachInBounds(e2, t2) {
  }
  forEachBounds(e2, t2) {
    const { hasM: s3, hasZ: r2 } = this.geometryInfo;
    for (const i2 of e2) {
      const e3 = yt(R$1, i2.readGeometry(), r2, s3);
      null != e3 && t2(e3);
    }
  }
  onTileUpdate(e2) {
  }
  getAggregate(e2) {
    const t2 = s$8(e2, true), s3 = this._tree.findIf((e3) => e3.displayId === t2);
    return s3 ? this._toFeatureJSON(s3) : null;
  }
  getAggregates() {
    return this._tree.findAllIf((e2) => e2.depth === this._geohashLevel).map(this._toFeatureJSON.bind(this));
  }
  getDisplayId(e2) {
    return this._tree.findIf((t2) => t2.id === e2)?.displayId;
  }
  getFeatureDisplayIdsForAggregate(e2) {
    const t2 = this._tree.findIf((t3) => t3.id === e2);
    return null != t2 ? Array.from(t2.displayIds) : [];
  }
  getDisplayIdForReferenceId(e2) {
    return this._tree.findIf((t2) => 1 === t2.displayIds.size && t2.displayIds.has(e2))?.displayId;
  }
  _toFeatureJSON(e2) {
    const t2 = this._spatialReference;
    return { displayId: e2.displayId, attributes: e2.getAttributes(), geometry: st(e2.getGeometry(t2), "esriGeometryPolygon", false, false), centroid: null };
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e2) {
    const t2 = e2.getDisplayId(), s3 = e2.getXHydrated(), r2 = e2.getYHydrated(), i2 = this._geohashBuf[2 * t2], o3 = this._geohashBuf[2 * t2 + 1];
    this._bitsets.inserted.has(t2) && (this._bitsets.inserted.unset(t2), this._tree.removeCursor(e2, s3, r2, i2, o3, this._geohashLevel));
  }
  _update(e2, t2) {
    const s3 = e2.getDisplayId(), r2 = this._bitsets.inserted, i2 = t2.isVisible(s3);
    if (i2 === r2.has(s3))
      return;
    if (!i2)
      return void this._remove(e2);
    const o3 = e2.getXHydrated(), a3 = e2.getYHydrated();
    if (!this._setGeohash(s3, o3, a3))
      return;
    const h3 = this._geohashBuf[2 * s3], n2 = this._geohashBuf[2 * s3 + 1];
    this._tree.insertCursor(e2, s3, o3, a3, h3, n2, this._geohashLevel), r2.set(s3);
  }
  _setGeohash(e2, t2, s3) {
    if (this._bitsets.geohash.has(e2))
      return true;
    const r2 = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const i2 = T$2(t2 / s$7.radius), a3 = i2 - 360 * Math.floor((i2 + 180) / 360), h3 = T$2(Math.PI / 2 - 2 * Math.atan(Math.exp(-s3 / s$7.radius)));
      b$3(r2, e2, h3, a3, S$1);
    } else {
      const i2 = j$3({ x: t2, y: s3 }, this._spatialReference, f$4.WGS84);
      if (!i2)
        return false;
      b$3(r2, e2, i2.y, i2.x, S$1);
    }
    return this._bitsets.geohash.set(e2), true;
  }
  _getBinsForTile(e2, t2, s3, r2) {
    try {
      const i2 = this._getGeohashBounds(t2), o3 = this._tree.getBins(i2);
      for (const t3 of o3) {
        t3.displayId || (t3.displayId = r2.createDisplayId(true));
        let i3 = null;
        const o4 = t3.getGeometry(this._spatialReference, s3.tile);
        o4 || (i3 = t3.getGeometryCentroid(this._spatialReference, s3.tile));
        const a3 = new t$1(o4, t3.getAttributes(), i3);
        a3.objectId = t3.id, a3.displayId = t3.displayId, e2.push(a3);
      }
    } catch (i2) {
      return void F2.error("Unable to get bins for tile", t2.key.id);
    }
  }
  _getGeohash(e2, t2, s3) {
    const r2 = { geohashX: 0, geohashY: 0 };
    return Y(r2, t2, e2, s3), r2;
  }
  _getGeohashBounds(e2) {
    const t2 = this._getGeohashLevel(e2.key.level), s3 = [e2.extent.xmin, e2.extent.ymin, e2.extent.xmax, e2.extent.ymax], r2 = j$4.fromExtent(M$1.fromBounds(s3, this._spatialReference)), i2 = j$3(r2, this._spatialReference, f$4.WGS84, { densificationStep: e2.resolution * G }), o3 = K(new t$2(), i2, false, false), a3 = o3.coords.filter((e3, t3) => !(t3 % 2)), h3 = o3.coords.filter((e3, t3) => t3 % 2), n2 = Math.min(...a3), d3 = Math.min(...h3), l2 = Math.max(...a3), p2 = Math.max(...h3), f2 = this._getGeohash(n2, d3, t2), c4 = this._getGeohash(l2, p2, t2);
    return { bounds: s3, geohashBounds: { xLL: f2.geohashX, yLL: f2.geohashY, xTR: c4.geohashX, yTR: c4.geohashY }, level: t2 };
  }
  _getGeohashLevel(e2) {
    return this._schema.params.fixedBinLevel;
  }
  _getTransforms(e2, t2) {
    const s3 = { originPosition: "upperLeft", scale: [e2.resolution, e2.resolution], translate: [e2.bounds[0], e2.bounds[3]] }, r2 = G$1(t2);
    if (!r2)
      return { tile: s3, left: null, right: null };
    const [i2, o3] = r2.valid;
    return { tile: s3, left: { ...s3, translate: [o3, e2.bounds[3]] }, right: { ...s3, translate: [i2 - o3 + e2.bounds[0], e2.bounds[3]] } };
  }
};
const C = 12, L = 64, w$1 = 1, B = i$2();
class S3 extends e$1 {
  constructor(e2, t2, s3, r2, i2) {
    super(new t$2([], [t2, s3]), r2, null, e2), this.geohashBoundsInfo = i2;
  }
  get count() {
    return this.attributes.cluster_count;
  }
  static create(e2, t2, s3, r2, i2, o3, a3, h3) {
    const l2 = new S3(t2, s3, r2, o3, a3);
    return l2.displayId = e2.createDisplayId(true), l2.referenceId = h3, l2.tileLevel = i2, l2;
  }
  update(e2, t2, s3, r2, i2, o3) {
    return this.geometry.coords[0] = e2, this.geometry.coords[1] = t2, this.tileLevel = s3, this.attributes = r2, this.geohashBoundsInfo = i2, this.referenceId = null, this.referenceId = o3, this;
  }
  toJSON() {
    return { attributes: { ...this.attributes, aggregateId: this.objectId, referenceId: 1 === this.attributes.cluster_count ? this.referenceId : null }, geometry: { x: this.geometry.coords[0], y: this.geometry.coords[1] } };
  }
}
function T$1(e2) {
  return 57.29577951308232 * e2;
}
class V extends a$4 {
  constructor(t2, s3, r2, i2) {
    super(t2, r2), this.type = "cluster", this.events = new o$3(), this.objectIdField = "aggregateId", this.featureAdapter = I$2, this._geohashLevel = 0, this._tileLevel = 0, this._aggregateValueRanges = {}, this._aggregateValueRangesChanged = false, this._geohashBuf = [], this._clusters = /* @__PURE__ */ new Map(), this._tiles = /* @__PURE__ */ new Map(), this._serviceInfo = i2, this.geometryInfo = t2.geometryInfo, this._spatialReference = s3, this._projectionSupportCheck = x$2(s3, f$4.WGS84), this._bitsets.geohash = r2.getBitset(r2.createBitset()), this._bitsets.inserted = r2.getBitset(r2.createBitset());
  }
  destroy() {
    this._tree.destroy();
  }
  get featureSpatialReference() {
    return this._spatialReference;
  }
  get fields() {
    return this._fields;
  }
  async updateSchema(e2, i2) {
    const o3 = this._schema;
    try {
      await super.updateSchema(e2, i2), await this._projectionSupportCheck;
    } catch (h3) {
    }
    this._fields = [...this._schema.params.fields, { name: "referenceId", alias: "referenceId", type: "esriFieldTypeInteger" }];
    !!this._fields.some((e3) => "cluster_count" === e3.name) || this._fields.push({ name: "cluster_count", alias: "cluster_count", type: "esriFieldTypeInteger" }), this._fieldsIndex = new Z(this._fields);
    const a3 = a$3(o3, i2);
    i2 && (null != a3 || e2.source || e2.storage.filters) ? ((s$5(a3, "params.fields") || !this._tree || e2.source) && (this._tree && this._tree.destroy(), this._tree = new h2(this._statisticFields, this._serviceInfo), this._rebuildTree(), has("esri-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), has("esri-2d-update-debug") && console.debug("Applying Update - ClusterStore:", a3), e2.targets[i2.name] = true, e2.mesh = false, this._aggregateValueRanges = {}) : o3 && (e2.mesh = true);
  }
  clear() {
    this._rebuildTree();
  }
  sweepFeatures(e2, t2) {
    this._bitsets.inserted.forEachSet((s3) => {
      if (!e2.has(s3)) {
        const e3 = t2.lookupByDisplayIdUnsafe(s3);
        this._remove(e3);
      }
    });
  }
  sweepAggregates(e2, t2, s3) {
    this._clusters.forEach((r2, i2) => {
      r2 && r2.tileLevel !== s3 && (e2.releaseDisplayId(r2.displayId), t2.unsetAttributeData(r2.displayId), this._clusters.delete(i2));
    });
  }
  onTileData(e2, t2, s3, r2, i2, o3 = true) {
    if (!this._schema || null == t2.addOrUpdate)
      return t2;
    this.events.emit("changed");
    const a3 = this._getTransforms(e2, this._spatialReference);
    {
      const e3 = t2.addOrUpdate.getCursor();
      for (; e3.next(); )
        this._update(e3, r2);
    }
    if (t2.status.mesh || !o3)
      return t2;
    const h3 = new Array(), l2 = this._schema.params.clusterRadius;
    this._getClustersForTile(h3, e2, l2, s3, a3), t2.addOrUpdate = h$4.fromOptimizedFeatures(h3, { fields: this.fields, fieldsIndex: this._fieldsIndex, geometryType: "esriGeometryPoint", objectIdField: this.objectIdField }), t2.addOrUpdate.attachStorage(s3), t2.clear = true, t2.end = true;
    {
      const r3 = t2.addOrUpdate.getCursor();
      for (; r3.next(); ) {
        const t3 = r3.getDisplayId();
        this._bitsets.computed.unset(t3), this.setComputedAttributes(s3, r3, t3, e2.scale, i2);
      }
    }
    return this._aggregateValueRangesChanged && t2.end && (this.events.emit("valueRangesChanged", { valueRanges: this._aggregateValueRanges }), this._aggregateValueRangesChanged = false), t2;
  }
  onTileUpdate({ added: e2, removed: t2 }) {
    if (e2.length) {
      const t3 = e2[0].level;
      this._tileLevel = t3, this._setGeohashLevel(t3);
    }
    if (!this._schema)
      return;
    const s3 = this._schema.params.clusterRadius;
    t2.forEach((e3) => {
      this._tiles.delete(e3.key.id), this._markTileClustersForDeletion(e3, s3);
    });
  }
  getAggregate(e2) {
    for (const t2 of this._clusters.values())
      if ((t2?.displayId & n$3) == (e2 & n$3))
        return t2.toJSON();
    return null;
  }
  getAggregates() {
    const e2 = [];
    for (const t2 of this._clusters.values())
      t2?.tileLevel === this._tileLevel && e2.push(t2.toJSON());
    return e2;
  }
  getDisplayId(e2) {
    const t2 = this._clusters.get(e2);
    return t2 ? t2.displayId : null;
  }
  getFeatureDisplayIdsForAggregate(e2) {
    const t2 = this._clusters.get(e2);
    return t2 ? this._tree.getRegionDisplayIds(t2.geohashBoundsInfo) : [];
  }
  getDisplayIdForReferenceId(e2) {
    for (const t2 of this._clusters.values())
      if (t2?.referenceId === e2)
        return t2.displayId;
    return null;
  }
  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }
  forEach(e2) {
    this._clusters.forEach((t2) => {
      if (!t2)
        return;
      const s3 = t2.toJSON(), r2 = h$4.fromFeatures([s3], { objectIdField: this.objectIdField, globalIdField: null, geometryType: this.geometryInfo.geometryType, fields: this.fields, fieldsIndex: this._fieldsIndex }).getCursor();
      r2.next(), e2(r2);
    });
  }
  forEachInBounds(e2, t2) {
  }
  forEachBounds(e2, t2) {
    const { hasM: s3, hasZ: r2 } = this.geometryInfo;
    for (const i2 of e2) {
      const e3 = yt(B, i2.readGeometry(), r2, s3);
      null != e3 && t2(e3);
    }
  }
  size() {
    let e2 = 0;
    return this.forEach((t2) => e2++), e2;
  }
  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }
  _remove(e2) {
    const t2 = e2.getDisplayId(), s3 = e2.getXHydrated(), r2 = e2.getYHydrated(), i2 = this._geohashBuf[2 * t2], o3 = this._geohashBuf[2 * t2 + 1];
    this._bitsets.inserted.has(t2) && (this._bitsets.inserted.unset(t2), this._tree.removeCursor(e2, s3, r2, i2, o3, this._geohashLevel));
  }
  _update(e2, t2) {
    const s3 = e2.getDisplayId(), r2 = this._bitsets.inserted, i2 = t2.isVisible(s3);
    if (i2 === r2.has(s3))
      return;
    if (!i2)
      return void this._remove(e2);
    const o3 = e2.getXHydrated(), a3 = e2.getYHydrated();
    if (!this._setGeohash(s3, o3, a3))
      return;
    const h3 = this._geohashBuf[2 * s3], l2 = this._geohashBuf[2 * s3 + 1];
    this._tree.insertCursor(e2, s3, o3, a3, h3, l2, this._geohashLevel), r2.set(s3);
  }
  _setGeohash(e2, t2, s3) {
    if (this._bitsets.geohash.has(e2))
      return true;
    const r2 = this._geohashBuf;
    if (this._spatialReference.isWebMercator) {
      const o3 = T$1(t2 / s$7.radius), a3 = o3 - 360 * Math.floor((o3 + 180) / 360), l2 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-s3 / s$7.radius)));
      b$3(r2, e2, l2, a3, C);
    } else {
      const o3 = j$3({ x: t2, y: s3 }, this._spatialReference, f$4.WGS84);
      if (!o3)
        return false;
      b$3(r2, e2, o3.y, o3.x, C);
    }
    return this._bitsets.geohash.set(e2), true;
  }
  _getClustersForTile(e2, t2, s3, r2, i2, o3 = true) {
    const a3 = this._schema.params.clusterPixelBuffer, h3 = 2 * s3, l2 = Math.ceil(2 ** t2.key.level * c$8 / h3) + 1, n2 = Math.ceil(a3 / h3) + 0, g2 = Math.ceil(c$8 / h3), { row: c4, col: p2 } = t2.key, _2 = p2 * c$8, m4 = c4 * c$8, y2 = Math.floor(_2 / h3) - n2, b2 = Math.floor(m4 / h3) - n2, v2 = y2 + g2 + 2 * n2, R2 = b2 + g2 + 2 * n2, x2 = t2.tileInfoView.getLODInfoAt(t2.key.level);
    for (let I2 = y2; I2 <= v2; I2++)
      for (let s4 = b2; s4 <= R2; s4++) {
        let a4 = I2;
        x2.wrap && (a4 = I2 < 0 ? I2 + l2 : I2 % l2);
        const h4 = x2.wrap && I2 < 0, n3 = x2.wrap && I2 % l2 !== I2, g3 = this._lookupCluster(r2, x2, t2.key.level, a4, s4, t2);
        if (null != g3) {
          let t3 = null;
          if (i2 && (t3 = h4 ? i2.left : n3 ? i2.right : i2.tile), o3 && null == t3)
            continue;
          if (!g3.count)
            continue;
          if (null != t3 && o3) {
            const s5 = g3.geometry.clone();
            let r3 = g3.attributes;
            s5.coords[0] = M(t3, s5.coords[0]), s5.coords[1] = N(t3, s5.coords[1]), 1 === g3.count && null != g3.referenceId && (r3 = { ...g3.attributes, referenceId: g3.referenceId });
            const i3 = new t$1(s5, r3);
            i3.displayId = g3.displayId, e2.push(i3);
          }
        }
      }
  }
  _getGeohashLevel(e2) {
    return Math.min(Math.ceil(e2 / 2 + 2), C);
  }
  _setGeohashLevel(e2) {
    const t2 = this._getGeohashLevel(e2), s3 = (Math.floor(t2 / w$1) + 1) * w$1 - 1;
    if (this._geohashLevel !== s3)
      return this._geohashLevel = s3, this._rebuildTree(), void this._bitsets.geohash.clear();
  }
  _getTransforms(e2, t2) {
    const s3 = { originPosition: "upperLeft", scale: [e2.resolution, e2.resolution], translate: [e2.bounds[0], e2.bounds[3]] }, r2 = G$1(t2);
    if (!r2)
      return { tile: s3, left: null, right: null };
    const [i2, o3] = r2.valid;
    return { tile: s3, left: { ...s3, translate: [o3, e2.bounds[3]] }, right: { ...s3, translate: [i2 - o3 + e2.bounds[0], e2.bounds[3]] } };
  }
  _getClusterId(e2, t2, s3) {
    return (15 & e2) << 28 | (16383 & t2) << 14 | 16383 & s3;
  }
  _markForDeletion(e2, t2, s3) {
    const r2 = this._getClusterId(e2, t2, s3);
    this._clusters.delete(r2);
  }
  _getClusterBounds(e2, t2, s3) {
    const r2 = this._schema.params.clusterRadius, i2 = 2 * r2;
    let o3 = s3 % 2 ? t2 * i2 : t2 * i2 - r2;
    const a3 = s3 * i2;
    let h3 = o3 + i2;
    const l2 = a3 - i2, n2 = 2 ** e2.level * c$8;
    e2.wrap && o3 < 0 && (o3 = 0), e2.wrap && h3 > n2 && (h3 = n2);
    const u2 = o3 / c$8, d3 = a3 / c$8, g2 = h3 / c$8, c4 = l2 / c$8;
    return [e2.getXForColumn(u2), e2.getYForRow(d3), e2.getXForColumn(g2), e2.getYForRow(c4)];
  }
  _getGeohash(e2, t2, s3) {
    const r2 = { geohashX: 0, geohashY: 0 };
    return Y(r2, t2, e2, s3), r2;
  }
  _getGeohashBounds(e2, t2) {
    const s3 = this._getGeohashLevel(e2.key.level);
    if (this._spatialReference.isWebMercator) {
      const [e3, r3, i3, a4] = t2, l3 = { x: e3, y: r3 }, n3 = { x: i3, y: a4 };
      let u3 = 0, d4 = 0, g2 = 0, c5 = 0;
      {
        const e4 = T$1(l3.x / s$7.radius);
        u3 = e4 - 360 * Math.floor((e4 + 180) / 360), d4 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-l3.y / s$7.radius)));
      }
      {
        const e4 = T$1(n3.x / s$7.radius);
        g2 = e4 - 360 * Math.floor((e4 + 180) / 360), c5 = T$1(Math.PI / 2 - 2 * Math.atan(Math.exp(-n3.y / s$7.radius)));
      }
      const f3 = { geohashX: 0, geohashY: 0 }, p2 = { geohashX: 0, geohashY: 0 };
      Y(f3, d4, u3, s3), Y(p2, c5, g2, s3);
      return { bounds: [e3, r3, i3, a4], geohashBounds: { xLL: f3.geohashX, yLL: f3.geohashY, xTR: p2.geohashX, yTR: p2.geohashY }, level: s3 };
    }
    const r2 = j$4.fromExtent(M$1.fromBounds(t2, this._spatialReference)), i2 = j$3(r2, this._spatialReference, f$4.WGS84, { densificationStep: e2.resolution * L });
    if (!i2)
      return null;
    const a3 = K(new t$2(), i2, false, false), l2 = a3.coords.filter((e3, t3) => !(t3 % 2)), n2 = a3.coords.filter((e3, t3) => t3 % 2), u2 = Math.min(...l2), d3 = Math.min(...n2), c4 = Math.max(...l2), f2 = Math.max(...n2), _2 = this._getGeohash(u2, d3, s3), y2 = this._getGeohash(c4, f2, s3);
    return { bounds: t2, geohashBounds: { xLL: _2.geohashX, yLL: _2.geohashY, xTR: y2.geohashX, yTR: y2.geohashY }, level: s3 };
  }
  _lookupCluster(e2, t2, s3, r2, i2, o3) {
    const a3 = this._getClusterId(s3, r2, i2), h3 = this._clusters.get(a3), l2 = this._getClusterBounds(t2, r2, i2), n2 = this._getGeohashBounds(o3, l2);
    if (null == n2)
      return null;
    const u2 = this._tree.getRegionStatistics(n2), { count: d3, xTotal: g2, yTotal: c4, referenceId: f2 } = u2, p2 = d3 ? g2 / d3 : 0, _2 = d3 ? c4 / d3 : 0;
    if (0 === d3)
      return this._clusters.set(a3, null), null;
    const m4 = { cluster_count: d3, ...u2.attributes }, y2 = null != h3 ? h3.update(p2, _2, s3, m4, n2, f2) : S3.create(e2, a3, p2, _2, s3, m4, n2, f2);
    if (0 === d3) {
      const [e3, t3, s4, r3] = l2;
      y2.geometry.coords[0] = (e3 + s4) / 2, y2.geometry.coords[1] = (t3 + r3) / 2;
    }
    return this._clusters.set(a3, y2), this._updateAggregateValueRangeForCluster(y2, y2.tileLevel), y2;
  }
  _updateAggregateValueRangeForCluster(e2, t2) {
    const s3 = this._aggregateValueRanges[t2] || { minValue: 1 / 0, maxValue: 0 }, r2 = s3.minValue, i2 = s3.maxValue;
    s3.minValue = Math.min(r2, e2.count), s3.maxValue = Math.max(i2, e2.count), this._aggregateValueRanges[t2] = s3, r2 === s3.minValue && i2 === s3.maxValue || (this._aggregateValueRangesChanged = true);
  }
  _markTileClustersForDeletion(e2, t2) {
    const s3 = 2 * t2, r2 = Math.ceil(c$8 / s3), { row: i2, col: o3 } = e2.key, a3 = o3 * c$8, h3 = i2 * c$8, l2 = Math.floor(a3 / s3), n2 = Math.floor(h3 / s3);
    for (let u2 = l2; u2 < l2 + r2; u2++)
      for (let t3 = n2; t3 < n2 + r2; t3++)
        this._markForDeletion(e2.key.level, u2, t3);
  }
}
const w = 5e3, x = "tileRenderer.featuresView.attributeView.initialize", T = "tileRenderer.featuresView.attributeView.requestUpdate", A2 = "tileRenderer.featuresView.requestRender";
function j(e2) {
  return "worker:port-closed" === e2.name;
}
function k(e2) {
  if (!b$2(e2) && !j(e2))
    throw e2;
}
function U(e2) {
  return "feature" === e2.type && "snapshot" === e2.mode;
}
let R = class extends g$2 {
  constructor() {
    super(...arguments), this._storage = new r$2(), this._markedIdsBufId = this._storage.createBitset(), this._lastCleanup = performance.now(), this._cleanupNeeded = false, this._invalidated = false, this._tileToResolver = /* @__PURE__ */ new Map(), this._didEdit = false, this._updateVersion = 1, this._updatingHandles = new h$5(), this.tileStore = null, this.config = null, this.processor = null, this.remoteClient = null, this.service = null;
  }
  initialize() {
    this._initStores(), this._initSource(), this._updateQueue = new _$2({ concurrency: "stream" === this._source.type ? 1 : 4, process: (e2, t2) => this._onTileMessage(e2, { signal: t2 }) }), this.addHandles([this.tileStore.on("update", this.onTileUpdate.bind(this)), p$5(() => !this.updating, () => this.onIdle())]);
  }
  _initSource() {
    const e2 = this.tileStore.tileScheme, t2 = () => this._updateQueue && this._updateQueue.length < 50, r2 = (e3, t3) => (this._invalidated = true, this._patchTile(e3, t3));
    this._source = s2(this.service, { ...this.service, fieldsIndex: this.fieldsIndex }, this.spatialReference, e2, r2, t2, this.featureStore), this._proxyEvents();
  }
  _setStreamClientProperty(e2, t2) {
    this.remoteClient.invoke("setProperty", { propertyName: e2, value: t2 }).catch(k);
  }
  _proxyEvents() {
    if ("stream" === this._source.type) {
      const e2 = this._source.events, t2 = this._source;
      this.addHandles([d$4(() => t2.connectionStatus, (e3) => this._setStreamClientProperty("pipelineConnectionStatus", e3), { initial: true }), d$4(() => t2.errorString, (e3) => this._setStreamClientProperty("pipelineErrorString", e3), { initial: true }), e2.on("data-received", (e3) => this.remoteClient.invoke("emitEvent", { name: "data-received", event: { attributes: e3.attributes, centroid: e3.centroid, geometry: e3.geometry } }).catch(k)), e2.on("message-received", (e3) => this.remoteClient.invoke("emitEvent", { name: "message-received", event: e3 }).catch(k)), e2.on("updateRate", (e3) => this.remoteClient.invoke("emitEvent", { name: "update-rate", event: { ...e3 } }).catch(k))]);
    }
  }
  _initAttributeStore(e2) {
    this.attributeStore || (this.attributeStore = new k$2({ type: "remote", initialize: (e3, t2) => d$3(this.remoteClient.invoke(x, e3, { signal: t2 }).catch(k)), update: (e3, t2) => d$3(this.remoteClient.invoke(T, e3, { signal: t2 }).catch(k)), render: (e3) => d$3(this.remoteClient.invoke(A2, void 0, { signal: e3 }).catch(k)) }, e2));
  }
  _initStores() {
    const e2 = "snapshot" === this.service.type ? "snapshot" : "on-demand", t2 = { geometryInfo: { geometryType: this.service.geometryType, hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex };
    this.featureStore = new u$4(t2, this._storage, e2);
  }
  _initQueryEngine(e2) {
    const t2 = this;
    this.featureQueryEngine?.destroy(), this.featureQueryEngine = new W({ availableFields: e2.availableFields, definitionExpression: e2.schema.source.definitionExpression ?? void 0, fieldsIndex: Z.fromJSON(this.service.fieldsIndex), geometryType: this.service.geometryType, objectIdField: this.service.objectIdField, hasM: false, hasZ: false, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: true, featureStore: this.featureStore, aggregateAdapter: { getFeatureObjectIds(e3) {
      if (null == t2.aggregateStore)
        return [];
      return t2.aggregateStore.getFeatureDisplayIdsForAggregate(e3).map((e4) => t2.getObjectId(e4));
    } }, timeInfo: this.service.timeInfo });
  }
  _initAggregateQueryEngine(e2, t2) {
    if (this.aggregateQueryEngine?.destroy(), null == e2)
      return;
    const r2 = t2.targets.aggregate.params.fields.slice();
    this.aggregateQueryEngine = new W({ definitionExpression: void 0, fieldsIndex: Z.fromLayerJSON({ fields: r2, dateFieldsTimeReference: { timeZoneIANA: i$3 } }), geometryType: e2.geometryInfo.geometryType, objectIdField: e2.objectIdField, hasM: e2.geometryInfo.hasM, hasZ: e2.geometryInfo.hasZ, spatialReference: this.spatialReference.toJSON(), cacheSpatialQueries: false, featureStore: e2, aggregateAdapter: { getFeatureObjectIds: (e3) => [] } });
  }
  destroy() {
    this._updateQueue.destroy(), this._source.destroy(), this.featureQueryEngine?.destroy(), this.aggregateQueryEngine?.destroy(), this.attributeStore?.destroy();
    for (const e2 of this.tileStore.tiles)
      this._source.unsubscribe(e2);
    clearInterval(this._checkUpdating), this._updatingHandles.destroy();
  }
  get fieldsIndex() {
    return Z.fromJSON(this.service.fieldsIndex);
  }
  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }
  get dataUpdating() {
    return this._source.updatingHandles.updating;
  }
  get updating() {
    return this.isUpdating();
  }
  isUpdating() {
    const e2 = this._source.updatingHandles.updating, t2 = !this.attributeStore || this.attributeStore.updatingHandles.updating, r2 = e2 || t2 || this._updatingHandles.updating;
    if (has("esri-2d-log-updating")) {
      let s3 = `Updating FeatureController2D: ${r2}
`;
      s3 += `  -> updatingSource ${e2}
`;
      for (const e3 of this._source.subscriptions)
        s3 += `     ${e3.tile.id} ${e3.isDone}
`;
      s3 += `  -> updatingAttributeStore ${t2}
`, s3 += `  -> updatingHandles ${this._updatingHandles.updating} (queue: ${this._updateQueue.length})
`, console.log(s3);
    }
    return r2;
  }
  updateCustomParameters(e2) {
    "stream" === this._source.type && this._source.updateCustomParameters(e2);
  }
  enableEvent(e2) {
    this._source.enableEvent(e2.name, e2.value);
  }
  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }
  resume() {
    this._updateQueue.resume();
  }
  pauseStream() {
    "stream" === this._source.type && this._source.pauseStream();
  }
  resumeStream() {
    "stream" === this._source.type && this._source.resumeStream();
  }
  sendMessageToSocket(e2) {
    "stream" === this._source.type && this._source.sendMessageToSocket(e2);
  }
  sendMessageToClient(e2) {
    "stream" === this._source.type && this._source.sendMessageToClient(e2);
  }
  _initAggregateStore(e2) {
    const t2 = e2.schema.targets?.aggregate?.type ?? null;
    if ((this.config?.schema.targets?.aggregate?.type ?? null) !== t2 && (null != this.aggregateStore && (this.removeHandles("valueRangesChanged"), this.aggregateStore.destroy(), this.aggregateStore = null), t2)) {
      switch (t2) {
        case "cluster": {
          const e3 = { geometryInfo: { geometryType: "esriGeometryPoint", hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
          this.aggregateStore = new V(e3, this.spatialReference, this._storage, { ...this.service, fieldsIndex: this.fieldsIndex }), this.addHandles(this.aggregateStore.events.on("valueRangesChanged", (e4) => {
            this.remoteClient.invoke("emitEvent", { name: "valueRangesChanged", event: { valueRanges: e4.valueRanges } }).catch(k);
          }), "valueRangesChanged");
          break;
        }
        case "bin": {
          const e3 = { geometryInfo: { geometryType: "esriGeometryPolygon", hasM: false, hasZ: false }, spatialReference: this.spatialReference, fieldsIndex: this.fieldsIndex, fields: this.service.fields };
          this.aggregateStore = new A$1(e3, this.spatialReference, this._storage, { ...this.service, fieldsIndex: this.fieldsIndex });
          break;
        }
      }
      this.aggregateStore.onTileUpdate({ added: this.tileStore.tiles, removed: [] });
    }
  }
  async update(e2, t2) {
    this._updateVersion++, has("esri-2d-update-debug") && console.debug(`FeatureController2D::update: Token version ${this._updateVersion}`), this._initQueryEngine(t2), this._initAttributeStore(t2), this.pause(), this.config?.timeZone !== t2.timeZone && (e2.mesh = true, e2.storage.data = true, e2.storage.filters = true, e2.targets.aggregate = true, e2.targets.feature = true, this.featureStore.invalidate()), await Promise.all([this._source.update(e2, t2.schema.source), this.featureStore.updateSchema(e2, t2.schema.targets.feature), this.attributeStore.update(e2, t2), this.attributeStore.updateFilters(e2, t2, this)]), this._initAggregateStore(t2), null != this.aggregateStore && await this.aggregateStore.updateSchema(e2, t2.schema.targets.aggregate), this._initAggregateQueryEngine(this.aggregateStore, t2.schema), has("esri-2d-update-debug") && e2.describe(), this._set("config", t2);
  }
  async applyUpdate(e2) {
    e2.version = this._updateVersion, has("esri-2d-update-debug") && console.debug(`FeatureController2D::applyUpdate: Token version ${e2.version}`), e2.mesh && this.clearTiles(), this._updateQueue.resume(), await this._source.applyUpdate(e2), has("esri-2d-update-debug") && console.debug("FeatureController2D::applyUpdate Waiting for source update to finish"), this.notifyChange("updating"), await w$3(() => !this.updating), has("esri-2d-update-debug") && console.debug("FeatureController2D::applyUpdate Source update finsihed"), null != this.aggregateStore && (await A$2(10), has("esri-2d-update-debug") && console.debug("FeatureController2D::applyUpdate Waiting for aggregate idle call"), await w$3(() => !this.updating), has("esri-2d-update-debug") && console.debug("FeatureController2D::applyUpdate Aggregate idle called")), has("esri-2d-update-debug") && console.debug("FeatureController2D::applyUpdate Update finished");
  }
  async onEdits({ edits: e2 }) {
    has("esri-2d-update-debug") && console.debug("Applying Edit:", e2), this._didEdit = true;
    try {
      const t2 = e2.removed.map((e3) => e3.objectId && -1 !== e3.objectId ? e3.objectId : this._lookupObjectIdByGlobalId(e3.globalId)), r2 = e2.addOrModified.map(({ objectId: e3 }) => e3);
      this.featureStore.invalidate(), await this._source.edit(r2, t2), this.clearTiles(), this.notifyChange("updating"), null != this.aggregateStore && this.aggregateStore.clear(), await this._source.resend(), await w$3(() => !this.updating);
    } catch (t2) {
    }
  }
  async refresh(e2) {
    if (!e2.dataChanged) {
      const e3 = t.empty();
      return e3.storage.filters = true, this.applyUpdate(e3);
    }
    this.featureStore.invalidate(), this.clearTiles(), this._source.refresh(this._updateVersion, e2), this._cleanupNeeded = true, this.notifyChange("updating"), await w$3(() => !this.updating);
  }
  clearTiles() {
    for (const e2 of this.tileStore.tiles)
      this.processor.onTileClear(e2, false);
  }
  onTileUpdate(e2) {
    null != this.aggregateStore && this.aggregateStore.onTileUpdate(e2);
    for (const t2 of e2.added) {
      const e3 = this._source.subscribe(t2, this._updateVersion);
      "stream" !== this._source.type && this._updatingHandles.addPromise(e3.done), this._level = t2.level;
    }
    for (const t2 of e2.removed)
      this._source.unsubscribe(t2), this._cleanupNeeded = true, this._tileToResolver.has(t2.id) && (this._tileToResolver.get(t2.id).resolve(), this._tileToResolver.delete(t2.id));
    this.notifyChange("updating");
  }
  async onIdle() {
    this._invalidated && (this._invalidated = false, null == this.aggregateStore && "heatmap" !== this.processor.type || await this._repushCurrentLevelTiles()), this._markAndSweep();
  }
  async querySummaryStatistics({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForSummaryStatistics(e2, t2);
  }
  async queryAggregateSummaryStatistics({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForSummaryStatistics(this._normalizeAggregateQuery(e2), t2);
  }
  async queryUniqueValues({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForUniqueValues(e2, t2);
  }
  async queryAggregateUniqueValues({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForUniqueValues(this._normalizeAggregateQuery(e2), t2);
  }
  async queryClassBreaks({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForClassBreaks(e2, t2);
  }
  async queryAggregateClassBreaks({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForClassBreaks(this._normalizeAggregateQuery(e2), t2);
  }
  async queryHistogram({ query: e2, params: t2 }) {
    return this.featureQueryEngine.executeQueryForHistogram(e2, t2);
  }
  async queryAggregateHistogram({ query: e2, params: t2 }) {
    return this.aggregateQueryEngine.executeQueryForHistogram(this._normalizeAggregateQuery(e2), t2);
  }
  queryExtent(e2) {
    return this.featureQueryEngine.executeQueryForExtent(e2);
  }
  queryAggregates(e2) {
    return this.aggregateQueryEngine.executeQuery(this._normalizeAggregateQuery(e2));
  }
  queryAggregateCount(e2) {
    return this.aggregateQueryEngine.executeQueryForCount(this._normalizeAggregateQuery(e2));
  }
  queryAggregateIds(e2) {
    return this.aggregateQueryEngine.executeQueryForIds(this._normalizeAggregateQuery(e2));
  }
  queryFeatures(e2) {
    return this.featureQueryEngine.executeQuery(e2);
  }
  async queryVisibleFeatures(e2) {
    const t2 = await this.featureQueryEngine.executeQuery(e2), r2 = t2.objectIdFieldName;
    return t2.features = t2.features.filter((e3) => {
      const t3 = e3.attributes[r2], s3 = this.getDisplayId(t3);
      return null != s3 && this.attributeStore.isVisible(s3);
    }), t2;
  }
  queryFeatureCount(e2) {
    return this.featureQueryEngine.executeQueryForCount(e2);
  }
  queryLatestObservations(e2) {
    return this.featureQueryEngine.executeQueryForLatestObservations(e2);
  }
  queryObjectIds(e2) {
    return this.featureQueryEngine.executeQueryForIds(e2);
  }
  async queryStatistics() {
    return this.featureStore.storeStatistics;
  }
  getObjectId(e2) {
    return this.featureStore.lookupObjectId(e2, this._storage);
  }
  getDisplayId(e2) {
    if (null != this.aggregateStore) {
      const t2 = this.aggregateStore.getDisplayId(e2);
      if (null == t2) {
        const t3 = this.featureStore.lookupDisplayId(e2);
        return this.aggregateStore.getDisplayIdForReferenceId(t3);
      }
      return t2;
    }
    return this.featureStore.lookupDisplayId(e2);
  }
  getFeatures(e2) {
    const t2 = [], r2 = [];
    for (const s3 of e2) {
      const e3 = null != this.aggregateStore ? this.getAggregate(s3) : null;
      if (null != e3)
        if (null != e3.attributes.referenceId) {
          const r3 = this.getFeature(e3.attributes.referenceId);
          null != r3 && t2.push(r3);
        } else
          r2.push(e3);
      else {
        const e4 = this.getFeature(s3);
        null != e4 && t2.push(e4);
      }
    }
    return { features: t2, aggregates: r2 };
  }
  getFeature(e2) {
    const t2 = this.featureStore.lookupFeatureByDisplayId(e2, this._storage);
    if (null == t2)
      return null;
    const r2 = t2.readHydratedGeometry(), s3 = st(r2, t2.geometryType, t2.hasZ, t2.hasM);
    return { attributes: t2.readAttributes(), geometry: s3 };
  }
  getAggregate(e2) {
    return null == this.aggregateStore ? null : this.aggregateStore.getAggregate(e2);
  }
  getAggregates() {
    return null == this.aggregateStore ? [] : this.aggregateStore.getAggregates();
  }
  async setHighlight(e2) {
    const t2 = e2.map((e3) => this.getDisplayId(e3)).filter(k$1);
    return this.attributeStore.setHighlight(e2, t2);
  }
  _normalizeAggregateQuery(e2) {
    const t2 = e2.objectIds ?? [];
    for (const r2 of e2.aggregateIds ?? [])
      t2.push(r2);
    return e2.objectIds = t2, e2.aggregateIds = [], e2;
  }
  _lookupObjectIdByGlobalId(e2) {
    const t2 = this.service.globalIdField;
    if (null == t2)
      throw new Error("Expected globalIdField to be defined");
    let r2 = null;
    if (this.featureStore.forEach((s3) => {
      e2 === s3.readAttribute(t2) && (r2 = s3.getObjectId());
    }), null == r2)
      throw new Error(`Expected to find a feature with globalId ${e2}`);
    return r2;
  }
  async _repushCurrentLevelTiles() {
    const e2 = this.tileStore.tiles.filter((e3) => e3.level === this._level);
    e2.map(async (e3) => this._patchTile({ type: "append", id: e3.key.id, clear: true, addOrUpdate: null, end: false }));
    const t$12 = e2.map(async (e3) => this._patchTile({ type: "append", id: e3.key.id, addOrUpdate: h$4.fromOptimizedFeatures([], { ...this.service, fieldsIndex: this.fieldsIndex }), remove: [], end: true, isRepush: true, status: t.empty() }));
    await Promise.all(t$12);
  }
  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > w && this._markAndSweep();
  }
  _patchTile(e2, t2) {
    const r2 = this._updateQueue.push(e2, t2).catch((e3) => {
    });
    return this._updatingHandles.addPromise(r2);
  }
  async _onTileMessage(e2, t2) {
    if (s$6(t2), has("esri-2d-update-debug")) {
      const t3 = e2.addOrUpdate?.hasFeatures;
      console.debug(e2.id, `FeatureController:onTileMessage: [clear:${e2.clear}, end:${e2.end}, features: ${t3}]`);
    }
    const r2 = this.tileStore.get(e2.id);
    if (!r2)
      return;
    if (e2.clear)
      return this.processor.onTileClear(r2, e2.end);
    const s3 = e2.status;
    this._cleanupNeeded = true;
    const i2 = [];
    for (const a3 of e2.remove ?? []) {
      const e3 = this.featureStore.lookupDisplayId(a3);
      e3 && i2.push(e3);
    }
    e2.remove = i2;
    try {
      if (null == e2.addOrUpdate)
        return void this.processor.onTileMessage(r2, { ...e2, addOrUpdate: null }, null != this.aggregateStore, t2).catch(f$3);
      if (e2.addOrUpdate.setArcadeSpatialReference(this.spatialReference), this.featureStore.hasInstance(e2.addOrUpdate.instance) && s3.targets.feature || (s3.targets.feature = true, this.featureStore.onTileData(r2, e2, this.config?.timeZone)), !s3.storage.data || !s3.storage.filters) {
        s3.storage.data = true, s3.storage.filters = true, this.attributeStore.onTileData(r2, e2);
        "stream" === this._source.type || this._didEdit ? (await this.attributeStore.sendUpdates(), s$6(t2)) : this.attributeStore.sendUpdates();
      }
      if (null != this.aggregateStore && !s3.targets.aggregate) {
        s3.targets.aggregate = true;
        const t3 = U(this._source) && this._source.loading, i3 = !U(this._source) || t3 || e2.end;
        if (this.aggregateStore.onTileData(r2, e2, this._storage, this.attributeStore, this.config?.timeZone, i3), !i3)
          return;
        s3.mesh || (this.attributeStore.onTileData(r2, e2), await this.attributeStore.sendUpdates());
      }
      if (!s3.mesh) {
        s3.mesh = true;
        const i3 = null != this.aggregateStore && "cluster" === this.aggregateStore.type;
        await this.processor.onTileMessage(r2, e2, i3, t2), s$6(t2);
      }
      this._maybeForceCleanup();
    } catch (n2) {
      f$3(n2);
    }
  }
  _mark(e2, t2, r2) {
    const s3 = (4294901760 & this._storage.getInstanceId(e2)) >>> 16;
    e2 && (t2.add(s3), r2.set(e2));
  }
  _markAndSweep() {
    this._lastCleanup = performance.now();
    if (!(!("feature" === this._source.type && "snapshot" === this._source.mode) && ("stream" === this._source.type || this._cleanupNeeded)))
      return;
    this._cleanupNeeded = false;
    const e2 = this._storage.getBitset(this._markedIdsBufId), t2 = /* @__PURE__ */ new Set();
    e2.clear();
    for (const r2 of this.tileStore.tiles)
      for (const s3 of this._source.readers(r2.id)) {
        const r3 = s3.getCursor();
        for (; r3.next(); ) {
          let s4 = r3.getDisplayId();
          if (!s4) {
            const e3 = r3.getObjectId();
            s4 = this.featureStore.lookupDisplayId(e3);
          }
          this._mark(s4, t2, e2);
        }
      }
    "symbol" === this.processor.type && this.processor.forEachBufferId((r2) => {
      this._mark(r2, t2, e2);
    }), this._updateQueue.forEach((r2) => {
      for (const s3 of r2.remove ?? []) {
        const r3 = this.featureStore.lookupDisplayId(s3);
        this._mark(r3, t2, e2);
      }
    }), null != this.aggregateStore && (this.aggregateStore.sweepFeatures(e2, this.featureStore), "sweepAggregates" in this.aggregateStore && this.aggregateStore.sweepAggregates(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(e2, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(t2);
  }
};
e([y$3({ constructOnly: true })], R.prototype, "tileStore", void 0), e([y$3()], R.prototype, "config", void 0), e([y$3({ readOnly: true })], R.prototype, "fieldsIndex", null), e([y$3()], R.prototype, "processor", void 0), e([y$3({ constructOnly: true })], R.prototype, "remoteClient", void 0), e([y$3({ constructOnly: true })], R.prototype, "service", void 0), e([y$3()], R.prototype, "spatialReference", null), e([y$3()], R.prototype, "dataUpdating", null), e([y$3()], R.prototype, "updating", null), R = e([c$7("esri.views.2d.layers.features.controllers.FeatureController2D")], R);
const q = R;
let d2 = class extends g$2 {
  constructor() {
    super(...arguments), this.controller = null, this.processor = null, this.remoteClient = null, this.tileStore = null, this.service = null, this.viewState = null, this._paused = false, this._pendingTileUpdates = [];
  }
  initialize() {
    this.addHandles([d$4(() => this.updating, (e2) => {
      this.remoteClient.invoke("setUpdating", e2).catch((e3) => {
      });
    })]);
  }
  destroy() {
    this.stop(), this.controller?.destroy(), this.processor?.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
  }
  get updating() {
    return !this.controller || this.controller.updating;
  }
  stop() {
    this._paused = true, Array.isArray(this.service?.source) && (this.service.source.forEach((e2) => e2.close()), this.service.source.length = 0), this.tileStore?.updateTiles({ added: [], removed: this.tileStore.tiles.map((e2) => e2.id) }), this.tileStore?.destroy(), this.tileStore = null, this._pendingTileUpdates.length = 0;
  }
  async startup({ service: e2, config: t2, tileInfo: r2, tiles: s3 }) {
    if (this._paused = true, Array.isArray(this.service?.source) && (this.service.source.forEach((e3) => e3.close()), this.service.source.length = 0), this.service = e2, !this.tileStore || !d$5(this.tileStore.tileScheme.spatialReference, r2.spatialReference)) {
      const e3 = new h$6(j$5.fromJSON(r2));
      s3.added.length = s3.removed.length = 0, this.tileStore?.updateTiles({ added: [], removed: this.tileStore.tiles.map((e4) => e4.id) }), this.tileStore?.destroy(), this.tileStore = new d$6(e3), this._pendingTileUpdates.length = 0;
    }
    for (await this._createProcessorAndController(t2), await this.update({ config: t2 }), this.controller.resume(), this.tileStore.clear(), this.tileStore.updateTiles(s3), this._paused = false; this._pendingTileUpdates.length; )
      this.tileStore.updateTiles(this._pendingTileUpdates.pop());
  }
  async updateTiles(e2) {
    this._paused ? this._pendingTileUpdates.push(e2) : this.tileStore?.updateTiles(e2);
  }
  async update({ config: e2 }) {
    const t$12 = t.empty();
    return await Promise.all([this.processor.update(t$12, e2), this.controller.update(t$12, e2)]), t$12.toJSON();
  }
  async applyUpdate(e2) {
    return this.controller.applyUpdate(t.create(e2));
  }
  async _createProcessorAndController(e2) {
    await Promise.all([this._handleControllerConfig(e2), this._handleProcessorConfig(e2)]), this.controller.processor = this.processor;
  }
  async _handleControllerConfig(e2) {
    return this._createController(this.service, e2);
  }
  async _handleProcessorConfig(e2) {
    return this._createProcessor(this.service, e2);
  }
  async _createController(e2, t2) {
    this.controller && (this.controller.destroy(), this.removeHandles("controller"));
    const { tileStore: s3, remoteClient: o3 } = this, i2 = new q({ service: e2, tileStore: s3, remoteClient: o3 }), l2 = d$4(() => i2.dataUpdating, (e3) => {
      this.remoteClient.invoke("setDataUpdating", e3).catch((e4) => {
      });
    });
    return this.addHandles(l2, "controller"), this.controller = i2, i2;
  }
  async _createProcessor(e2, t2) {
    const r2 = t2.schema.processors[0].type, s3 = (await o$2(r2)).default, { remoteClient: o3, tileStore: i2 } = this, l2 = new s3({ service: e2, config: t2, tileStore: i2, remoteClient: o3 });
    return this.processor && this.processor.destroy(), this.processor = l2, l2;
  }
};
e([y$3()], d2.prototype, "controller", void 0), e([y$3()], d2.prototype, "processor", void 0), e([y$3()], d2.prototype, "updating", null), e([y$3()], d2.prototype, "viewState", void 0), d2 = e([c$7("esri.views.2d.layers.features.Pipeline")], d2);
const u = d2;
export {
  u as default
};
