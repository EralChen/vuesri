import { aq as has, hS as t$1, dp as st, cw as p$1, qj as o, qk as r$2, b$ as n$3, gf as et, ql as it, dj as Z, gg as nt, qm as s, qn as Nt, l1 as It, bb as s$1, bm as h$2, qo as V, kT as U$1, bH as a$1, qp as W, qq as S, nD as t$2, b7 as C$1, bI as b$1, aM as s$2, qr as Q, qs as R, qt as W$1, eY as i$1 } from "./chunk-KFNcxJaF.js";
import { m, n as n$1, b as n$2 } from "./chunk-Tt9yuqqG.js";
import { a, l } from "./chunk-ubi9cRRg.js";
import { c as c$1, u, f as f$1, e, i, n as n$4, l as l$1, a as l$2, s as s$3, b as n$5 } from "./chunk-yIp_WHt0.js";
class t {
  static fromBuffer(e2, s2) {
    return new t(e2, s2);
  }
  static create(e2, s2 = 4294967295) {
    const r3 = new Uint32Array(Math.ceil(e2 / 32));
    return new t(r3, s2);
  }
  constructor(t2, e2) {
    this._mask = 0, this._buf = t2, this._mask = e2;
  }
  _getIndex(t2) {
    return Math.floor(t2 / 32);
  }
  has(t2) {
    const e2 = this._mask & t2;
    return !!(this._buf[this._getIndex(e2)] & 1 << e2 % 32);
  }
  hasRange(t2, e2) {
    let s2 = t2, r3 = e2;
    for (; s2 % 32 && s2 !== r3; ) {
      if (this.has(s2))
        return true;
      s2++;
    }
    for (; r3 % 32 && s2 !== r3; ) {
      if (this.has(s2))
        return true;
      r3--;
    }
    if (s2 === r3)
      return false;
    for (let h3 = s2 / 32; h3 !== r3 / 32; h3++) {
      if (this._buf[h3])
        return true;
    }
    return false;
  }
  set(t2) {
    const e2 = this._mask & t2, s2 = this._getIndex(e2), r3 = 1 << e2 % 32;
    this._buf[s2] |= r3;
  }
  setRange(t2, e2) {
    let s2 = t2, r3 = e2;
    for (; s2 % 32 && s2 !== r3; )
      this.set(s2++);
    for (; r3 % 32 && s2 !== r3; )
      this.set(r3--);
    if (s2 !== r3)
      for (let h3 = s2 / 32; h3 !== r3 / 32; h3++)
        this._buf[h3] = 4294967295;
  }
  unset(t2) {
    const e2 = this._mask & t2, s2 = this._getIndex(e2), r3 = 1 << e2 % 32;
    this._buf[s2] &= 4294967295 ^ r3;
  }
  resize(t2) {
    const e2 = this._buf, s2 = new Uint32Array(Math.ceil(t2 / 32));
    s2.set(e2), this._buf = s2;
  }
  or(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= t2._buf[e2];
    return this;
  }
  and(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= t2._buf[e2];
    return this;
  }
  xor(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= t2._buf[e2];
    return this;
  }
  ior(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= ~t2._buf[e2];
    return this;
  }
  iand(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= ~t2._buf[e2];
    return this;
  }
  ixor(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= ~t2._buf[e2];
    return this;
  }
  any() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      if (this._buf[t2])
        return true;
    return false;
  }
  copy(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] = t2._buf[e2];
    return this;
  }
  clone() {
    return new t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t2 = 0; t2 < this._buf.length; t2++)
      this._buf[t2] = 0;
  }
  forEachSet(t2) {
    for (let e2 = 0; e2 < this._buf.length; e2++) {
      let s2 = this._buf[e2], r3 = 32 * e2;
      if (s2)
        for (; s2; ) {
          1 & s2 && t2(r3), s2 >>>= 1, r3++;
        }
    }
  }
  countSet() {
    let t2 = 0;
    return this.forEachSet((e2) => {
      t2++;
    }), t2;
  }
}
let c = 0;
const h = has("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5], y = h[0], f = h[1], p = h[2], g = h[3], _ = has("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4], x = _[0], A$1 = _[1], T = _[2], I = has("featurelayer-simplify-mobile-factor") ?? 2, b = has("esri-mobile");
let S$1 = class S2 {
  constructor(e2, t2) {
    this.type = "FeatureSetReader", this.arcadeDeclaredClass = "esri.arcade.Feature", this.seen = false, this.instance = 0, this._tx = 0, this._ty = 0, this._sx = 1, this._sy = 1, this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._contextTimeZone = null, this._level = 0, this.instance = e2, this._layerSchema = t2;
  }
  static createInstance() {
    return c++, c = c > 65535 ? 0 : c, c;
  }
  get isEmpty() {
    return null != this._deleted && this._deleted.countSet() === this.getSize();
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e2) {
    this._contextTimeZone = e2;
  }
  set level(e2) {
    this._level = e2;
  }
  getAreaSimplificationThreshold(e2, t2) {
    let r3 = 1;
    const s2 = b ? I : 1;
    t2 > 4e6 ? r3 = T * s2 : t2 > 1e6 ? r3 = A$1 * s2 : t2 > 5e5 ? r3 = x * s2 : t2 > 1e5 && (r3 = s2);
    let i2 = 0;
    e2 > 4e3 ? i2 = g * r3 : e2 > 2e3 ? i2 = p * r3 : e2 > 100 ? i2 = f : e2 > 15 && (i2 = y);
    let n2 = 8;
    return this._level < 4 ? n2 = 1 : this._level < 5 ? n2 = 2 : this._level < 6 && (n2 = 4), i2 * n2;
  }
  createQuantizedExtrudedGeometry(e2, t2) {
    return "esriGeometryPolyline" === this.geometryType ? this._createQuantizedExtrudedLine(e2, t2) : this._createQuantizedExtrudedQuad(e2, t2);
  }
  _createQuantizedExtrudedQuad(e2, t2) {
    return new t$1([5], [e2 - 1, t2, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createQuantizedExtrudedLine(e2, t2) {
    return new t$1([2], [e2 - 1, t2 + 1, 1, -1]);
  }
  parseTimestampOffset(e2) {
    return e2;
  }
  setArcadeSpatialReference(e2) {
    this._arcadeSpatialReference = e2;
  }
  attachStorage(e2) {
    this._storage = e2;
  }
  getQuantizationTransform() {
    throw new Error("Unable to find transform for featureSet");
  }
  getStorage() {
    return this._storage;
  }
  getComputedNumeric(e2) {
    return this.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e2, t2) {
    return this.setComputedNumericAtIndex(t2, 0);
  }
  getComputedString(e2) {
    return this.getComputedStringAtIndex(0);
  }
  setComputedString(e2, t2) {
    return this.setComputedStringAtIndex(0, t2);
  }
  getComputedNumericAtIndex(e2) {
    return this._storage.getComputedNumericAtIndex(this.getDisplayId(), e2);
  }
  setComputedNumericAtIndex(e2, t2) {
    this._storage.setComputedNumericAtIndex(this.getDisplayId(), e2, t2);
  }
  getComputedStringAtIndex(e2) {
    return this._storage.getComputedStringAtIndex(this.getDisplayId(), e2);
  }
  setComputedStringAtIndex(e2, t2) {
    return this._storage.setComputedStringAtIndex(this.getDisplayId(), e2, t2);
  }
  transform(e2, t2, r3, s2) {
    const i2 = this.copy();
    return i2._tx += e2, i2._ty += t2, i2._sx *= r3, i2._sy *= s2, i2;
  }
  readAttributeAsTimestamp(e2) {
    const t2 = this.readAttribute(e2);
    return "string" == typeof t2 ? new Date(t2).getTime() : "number" == typeof t2 || null == t2 ? t2 : null;
  }
  readAttribute(e2, t2 = false) {
    const r3 = this._readAttribute(e2, t2);
    if (void 0 !== r3)
      return r3;
    for (const s2 of this._joined) {
      s2.setIndex(this.getIndex());
      const r4 = s2._readAttribute(e2, t2);
      if (void 0 !== r4)
        return r4;
    }
  }
  readAttributes() {
    const e2 = this._readAttributes();
    for (const t2 of this._joined) {
      t2.setIndex(this.getIndex());
      const r3 = t2._readAttributes();
      for (const t3 of Object.keys(r3))
        e2[t3] = r3[t3];
    }
    return e2;
  }
  joinAttributes(e2) {
    this._joined.push(e2);
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e2) {
    return this.fields.has(e2);
  }
  geometry() {
    const e2 = this.readHydratedGeometry(), t2 = st(e2, this.geometryType, this.hasZ, this.hasM), r3 = p$1(t2);
    return r3 && (r3.spatialReference = this._arcadeSpatialReference), r3;
  }
  autocastArcadeDate(t2, r3) {
    return r3 && r3 instanceof Date ? this.isUnknownDateTimeField(t2) ? m.unknownDateJSToArcadeDate(r3) : m.dateJSAndZoneToArcadeDate(r3, this.contextTimeZone ?? o) : r3;
  }
  isUnknownDateTimeField(e2) {
    return this._layerSchema.fieldsIndex.getTimeZone(e2) === r$2;
  }
  field(t2) {
    let i2 = this.fields.get(t2);
    if (i2)
      switch (i2.type) {
        case "date-only":
        case "esriFieldTypeDateOnly":
          return n$2.fromReader(this.readAttribute(t2, false));
        case "time-only":
        case "esriFieldTypeTimeOnly":
          return n$1.fromReader(this.readAttribute(t2, false));
        case "esriFieldTypeTimestampOffset":
        case "timestamp-offset":
          return m.fromReaderAsTimeStampOffset(this.readAttribute(t2, false));
        case "date":
        case "esriFieldTypeDate":
          return this.autocastArcadeDate(t2, this.readAttribute(t2, true));
        default:
          return this.readAttribute(t2, false);
      }
    for (const n2 of this._joined)
      if (n2.setIndex(this.getIndex()), i2 = n2.fields.get(t2), i2)
        switch (i2.type) {
          case "date-only":
          case "esriFieldTypeDateOnly":
            return n$2.fromReader(n2._readAttribute(t2, false));
          case "time-only":
          case "esriFieldTypeTimeOnly":
            return n$1.fromReader(n2._readAttribute(t2, false));
          case "esriFieldTypeTimestampOffset":
          case "timestamp-offset":
            return m.fromReaderAsTimeStampOffset(n2._readAttribute(t2, false));
          case "date":
          case "esriFieldTypeDate":
            return this.autocastArcadeDate(t2, n2._readAttribute(t2, true));
          default:
            return this.readAttribute(t2, false);
        }
    throw new Error(`Field ${t2} does not exist`);
  }
  setField(e2, t2) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e2) => e2.name);
  }
  castToText(e2 = false) {
    if (!e2)
      return JSON.stringify(this.readLegacyFeature());
    const t2 = this.readLegacyFeature();
    if (!t2)
      return JSON.stringify(null);
    const r3 = { geometry: t2.geometry, attributes: { ...t2.attributes ?? {} } };
    for (const s2 in r3.attributes) {
      const e3 = r3.attributes[s2];
      e3 instanceof Date && (r3.attributes[s2] = e3.getTime());
    }
    return JSON.stringify(r3);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this._layerSchema;
  }
  castAsJson(e2 = null) {
    return { attributes: this._readAttributes(), geometry: true === e2?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null };
  }
  castAsJsonAsync(e2 = null, t2 = null) {
    return Promise.resolve(this.castAsJson(t2));
  }
  removeIds(e2) {
    if (null == this._objectIdToIndex) {
      const e3 = /* @__PURE__ */ new Map(), r4 = this.getCursor();
      for (; r4.next(); ) {
        const s2 = r4.getObjectId();
        n$3(s2), e3.set(s2, r4.getIndex());
      }
      this._objectIdToIndex = e3;
    }
    const r3 = this._objectIdToIndex;
    for (const t2 of e2)
      r3.has(t2) && this.removeAtIndex(r3.get(t2));
  }
  removeAtIndex(e2) {
    null == this._deleted && (this._deleted = t.create(this.getSize())), this._deleted.set(e2);
  }
  readGeometryForDisplay() {
    return this.readUnquantizedGeometry(true);
  }
  readLegacyGeometryForDisplay() {
    return this.readLegacyGeometry(true);
  }
  *features() {
    const e2 = this.getCursor();
    for (; e2.next(); )
      yield e2.readOptimizedFeature();
  }
  _getExists() {
    return null == this._deleted || !this._deleted.has(this.getIndex());
  }
  _computeCentroid() {
    if ("esriGeometryPolygon" !== this.geometryType)
      return null;
    const e2 = this.readUnquantizedGeometry();
    if (!e2 || e2.hasIndeterminateRingOrder)
      return null;
    const t2 = a.fromOptimized(e2, this.geometryType);
    t2.yFactor *= -1;
    const r3 = l(t2);
    return r3 ? (r3[1] *= -1, new t$1([], r3)) : null;
  }
  copyInto(e2) {
    e2.seen = this.seen, e2._storage = this._storage, e2._arcadeSpatialReference = this._arcadeSpatialReference, e2._joined = this._joined, e2._tx = this._tx, e2._ty = this._ty, e2._sx = this._sx, e2._sy = this._sy, e2._deleted = this._deleted, e2._objectIdToIndex = this._objectIdToIndex, e2.contextTimeZone = this.contextTimeZone;
  }
};
function d({ coords: t2, lengths: e2 }) {
  let r3 = 0;
  for (const s2 of e2) {
    for (let e3 = 1; e3 < s2; e3++)
      t2[2 * (r3 + e3)] += t2[2 * (r3 + e3) - 2], t2[2 * (r3 + e3) + 1] += t2[2 * (r3 + e3) - 1];
    r3 += s2;
  }
}
let h$1 = class h2 extends S$1 {
  static fromFeatures(e2, r3) {
    const { objectIdField: s2, geometryType: i2 } = r3, n2 = et([], e2, i2, false, false, s2);
    for (let t2 = 0; t2 < n2.length; t2++)
      n2[t2].displayId = e2[t2].displayId;
    return h2.fromOptimizedFeatures(n2, r3);
  }
  static fromFeatureSet(t2, r3) {
    const s2 = it(t2, r3.objectIdField);
    return h2.fromOptimizedFeatureSet(s2, r3);
  }
  static fromOptimizedFeatureSet(t2, e2) {
    const { features: r3 } = t2, s2 = h2.fromOptimizedFeatures(r3, e2);
    return s2._exceededTransferLimit = t2.exceededTransferLimit, s2._transform = t2.transform, s2._fieldsIndex = new Z(e2.fields), s2;
  }
  static fromOptimizedFeatures(t2, e2, r3) {
    const s2 = S$1.createInstance(), i2 = new h2(s2, t2, e2);
    return i2._fieldsIndex = new Z(e2.fields), i2._transform = r3, i2;
  }
  constructor(t2, e2, r3) {
    super(t2, r3), this._exceededTransferLimit = false, this._featureIndex = -1, this._fieldsIndex = null, this._geometryType = r3?.geometryType, this._features = e2;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  removeIds(t2) {
    const e2 = new Set(t2);
    this._features = this._features.filter((t3) => !(null != t3.objectId && e2.has(t3.objectId)));
  }
  append(t2) {
    for (const e2 of t2)
      this._features.push(e2);
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getQuantizationTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let t2 = "";
    for (const e2 in this._current.attributes)
      t2 += this._current.attributes[e2];
    return t2;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(t2) {
    this._featureIndex = t2;
  }
  getObjectId() {
    return this._current?.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(t2) {
    this._current.displayId = t2;
  }
  getGroupId() {
    return this._current.groupId;
  }
  setGroupId(t2) {
    this._current.groupId = t2;
  }
  copy() {
    const t2 = new h2(this.instance, this._features, this.fullSchema());
    return this.copyInto(t2), t2;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); )
      ;
    return this._featureIndex < this._features.length;
  }
  readLegacyFeature() {
    return nt(this._current, this.geometryType, this.hasZ, this.hasM);
  }
  readOptimizedFeature() {
    return this._current;
  }
  readLegacyPointGeometry() {
    return this.readGeometry() ? { x: this.getX(), y: this.getY() } : null;
  }
  readLegacyGeometry() {
    const t2 = this.readUnquantizedGeometry();
    return st(t2, this.geometryType, this.hasZ, this.hasM);
  }
  readLegacyCentroid() {
    const t2 = this.readCentroid();
    return null == t2 ? null : { x: t2.coords[0] * this._sx + this._tx, y: t2.coords[1] * this._sy + this._ty };
  }
  readGeometryArea() {
    return s(this._current) ? Nt(this._current.geometry, 2) : 0;
  }
  readUnquantizedGeometry() {
    const t2 = this.readGeometry();
    if ("esriGeometryPoint" === this.geometryType || !t2)
      return t2;
    const e2 = t2.clone();
    return d(e2), e2;
  }
  readHydratedGeometry() {
    const t2 = this._current.geometry;
    if (null == t2)
      return null;
    const e2 = t2.clone();
    return null != this._transform && It(e2, e2, this.hasZ, this.hasM, this._transform), e2;
  }
  getXHydrated() {
    if (!s(this._current))
      return 0;
    const t2 = this._current.geometry.coords[0], e2 = this.getQuantizationTransform();
    return null == e2 ? t2 : t2 * e2.scale[0] + e2.translate[0];
  }
  getYHydrated() {
    if (!s(this._current))
      return 0;
    const t2 = this._current.geometry.coords[1], e2 = this.getQuantizationTransform();
    return null == e2 ? t2 : e2.translate[1] - t2 * e2.scale[1];
  }
  getX() {
    return s(this._current) ? this._current.geometry.coords[0] * this._sx + this._tx : 0;
  }
  getY() {
    return s(this._current) ? this._current.geometry.coords[1] * this._sy + this._ty : 0;
  }
  readGeometry() {
    if (!s(this._current)) {
      if (null != this._current.centroid) {
        const [t3, e3] = this._current.centroid.coords;
        return this.createQuantizedExtrudedGeometry(t3, e3);
      }
      return null;
    }
    const t2 = this._current.geometry.clone();
    if (t2.isPoint)
      return t2.coords[0] = t2.coords[0] * this._sx + this._tx, t2.coords[1] = t2.coords[1] * this._sy + this._ty, t2;
    let e2 = 0;
    for (const r3 of t2.lengths)
      t2.coords[2 * e2] = t2.coords[2 * e2] * this._sx + this._tx, t2.coords[2 * e2 + 1] = t2.coords[2 * e2 + 1] * this._sy + this._ty, e2 += r3;
    return t2;
  }
  readCentroid() {
    return s(this._current) ? this._computeCentroid() : this._current.centroid;
  }
  _readAttribute(t2, e2) {
    const r3 = this._fieldsIndex.get(t2);
    if (!r3)
      return;
    let s2 = this._current.attributes[r3.name];
    return null == s2 ? s2 : ("esriFieldTypeTimestampOffset" === this.fields.get(t2)?.type && (s2 = this.parseTimestampOffset(s2)), e2 && this.fields.isDateField(t2) ? new Date(s2) : s2);
  }
  copyInto(t2) {
    super.copyInto(t2), t2._featureIndex = this._featureIndex, t2._transform = this._transform, t2._fieldsIndex = this._fieldsIndex;
  }
  _readAttributes() {
    return this._current.attributes;
  }
};
const U = s$1.getLogger("esri.views.layers.2d.features.support.AttributeStore"), A = n$4(l$1, U), E = { sharedArrayBuffer: has("esri-shared-array-buffer"), atomics: has("esri-atomics") };
function w(t2, e2) {
  return (i2) => e2(t2(i2));
}
class D {
  constructor(t2, e2, i2, s2) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: r3, layout: a2, textureOnly: n2 } = s2;
    this.textureOnly = n2 || false, this.pixelType = r3, this._ctype = e2, this.layout = a2, this._resetRange(), this._shared = t2, this.size = i2, n2 || (this.data = this._initData(r3, i2, t2, e2));
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(t2, e2) {
    const i2 = this.data;
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] &= ~e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t2, e2) {
    const i2 = this.data;
    for (let s2 = 0; s2 < this.size * this.size; s2++)
      i2[s2 * this.texelSize + t2] |= 255 & e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t2, e2, i2) {
    const s2 = this.data;
    for (const r3 of i2)
      s2[r3 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, r3), this.dirtyEnd = Math.max(this.dirtyEnd, r3);
  }
  setComponentTexel(t2, e2, i2) {
    this.data[i2 * this.texelSize + t2] |= e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  unsetComponentTexel(t2, e2, i2) {
    this.data[i2 * this.texelSize + t2] &= ~e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  getData(t2, e2) {
    const i2 = f$1(t2);
    return this.data[i2 * this.texelSize + e2];
  }
  setData(t2, e2, i2) {
    const s2 = f$1(t2), r3 = 1 << e2;
    0 != (this.layout & r3) ? null != this.data && (this.data[s2 * this.texelSize + e2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2)) : U.error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  lock() {
    this.pixelType === U$1.UNSIGNED_BYTE && this._shared && E.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 1);
  }
  unlock() {
    this.pixelType === U$1.UNSIGNED_BYTE && this._shared && E.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 0);
  }
  expand(t2) {
    if (this.size = t2, !this.textureOnly) {
      const e2 = this._initData(this.pixelType, t2, this._shared, this._ctype), i2 = this.data;
      e2.set(i2), this.data = e2;
    }
  }
  toMessage() {
    const t2 = this.dirtyStart, e2 = this.dirtyEnd, i2 = this.texelSize;
    if (t2 > e2)
      return null;
    this._resetRange();
    const s2 = !(this._shared || "local" === this._ctype), r3 = this.pixelType, a2 = this.layout, n2 = this.data;
    return { start: t2, end: e2, data: s2 && n2.slice(t2 * i2, (e2 + 1) * i2) || null, pixelType: r3, layout: a2 };
  }
  _initData(t2, e2, i2, s2) {
    const r3 = i2 && "local" !== s2 ? SharedArrayBuffer : ArrayBuffer, a2 = W$1(t2), n2 = new a2(new r3(e2 * e2 * 4 * a2.BYTES_PER_ELEMENT));
    for (let o2 = 0; o2 < n2.length; o2 += 4)
      n2[o2 + 1] = 255;
    return n2;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class k {
  constructor(t2, e2) {
    this._client = t2, this.config = e2, this.updatingHandles = new h$2(), this._blocks = new Array(), this._filters = new Array(V), this._attributeComputeInfo = null, this._targetType = 0, this._abortController = new AbortController(), this._hasScaleExpr = false, this._size = 32, this._nextUpdate = null, this._currUpdate = null, this._idsToHighlight = /* @__PURE__ */ new Set();
    const i2 = e2.supportsTextureFloat ? U$1.FLOAT : U$1.UNSIGNED_BYTE;
    A(`Creating AttributeStore ${E.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: U$1.UNSIGNED_BYTE, layout: 1 }, { pixelType: U$1.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: U$1.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: i2, layout: 15 }, { pixelType: i2, layout: 15 }, { pixelType: i2, layout: 15 }, { pixelType: i2, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  destroy() {
    this._abortController.abort(), this.updatingHandles.destroy();
  }
  get hasScaleExpr() {
    return this._hasScaleExpr;
  }
  get _signal() {
    return this._abortController.signal;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  isUpdating() {
    const t2 = this.updatingHandles.updating || !!this._nextUpdate;
    return has("esri-2d-log-updating") && console.log(`Updating AttributeStore: ${t2}
  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})
  -> nextUpdate: ${!!this._nextUpdate}
`), t2;
  }
  update(t2, e2) {
    this.config = e2;
    const i2 = e2.schema.processors[0].storage, s2 = a$1(this._schema, i2);
    if ((t2.targets.feature || t2.targets.aggregate) && (t2.storage.data = true), s2 && (has("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", s2), t2.storage.data = true, this._schema = i2, this._attributeComputeInfo = null, null != i2)) {
      switch (i2.target) {
        case "feature":
          this._targetType = u;
          break;
        case "aggregate":
          this._targetType = c$1;
      }
      if ("subtype" === i2.type) {
        this._attributeComputeInfo = { isSubtype: true, subtypeField: i2.subtypeField, map: /* @__PURE__ */ new Map() };
        for (const t3 in i2.mapping) {
          const e3 = i2.mapping[t3];
          if (null != e3?.vvMapping)
            for (const i3 of e3.vvMapping)
              this._bindAttribute(i3, parseInt(t3, 10));
        }
      } else {
        if (this._attributeComputeInfo = { isSubtype: false, map: /* @__PURE__ */ new Map() }, null != i2.vvMapping)
          for (const t3 of i2.vvMapping)
            this._bindAttribute(t3);
        if (null != i2.attributeMapping)
          for (const t3 of i2.attributeMapping)
            this._bindAttribute(t3);
      }
    }
  }
  onTileData(t2, e2) {
    if (null == e2.addOrUpdate)
      return;
    const i2 = e2.addOrUpdate.getCursor();
    for (; i2.next(); ) {
      const t3 = i2.getDisplayId();
      this.setAttributeData(t3, i2);
    }
  }
  async setHighlight(t2, e2) {
    const i2 = 1, s2 = this._getBlock(0), r3 = e2.map((t3) => f$1(t3));
    s2.lock(), s2.unsetComponentAllTexels(0, i2), s2.setComponent(0, i2, r3), s2.unlock(), this._idsToHighlight.clear();
    for (const a2 of t2)
      this._idsToHighlight.add(a2);
    await this.sendUpdates();
  }
  async updateFilters(t2, e2, i2) {
    has("esri-2d-update-debug") && console.debug("AttributeStore::updateFilters");
    const { service: s2, spatialReference: r3 } = i2, { filters: a2 } = e2, n2 = a2.map((t3, e3) => this._updateFilter(t3, e3, s2, r3)), o2 = (await Promise.all(n2)).some((t3) => t3);
    has("esri-2d-update-debug") && console.debug("AttributeStore::updateFilters - finsihed"), o2 && (t2.storage.filters = true, has("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", "Filters changed"));
  }
  setData(t2, e2, i2, s2) {
    const r3 = f$1(t2);
    this._ensureSizeForTexel(r3), this._getBlock(e2).setData(t2, i2, s2);
  }
  getData(t2, e2, i2) {
    return this._getBlock(e2).getData(t2, i2);
  }
  getHighlightFlag(t2) {
    return this._idsToHighlight.has(t2) ? W : 0;
  }
  unsetAttributeData(t2) {
    const e2 = f$1(t2);
    this._getBlock(0).setData(e2, 0, 0);
  }
  setAttributeData(t2, e$1) {
    const s2 = f$1(t2);
    if (this._ensureSizeForTexel(s2), this._getBlock(0).setData(s2, 0, this.getFilterFlags(e$1)), this._targetType !== e(t2))
      return;
    const r3 = this._attributeComputeInfo, a2 = this.config.supportsTextureFloat ? 1 : 2, n2 = 4;
    let o2 = null;
    r3 && (o2 = r3.isSubtype ? r3.map.get(e$1.readAttribute(r3.subtypeField)) : r3.map, o2?.size && o2.forEach((t3, r4) => {
      const o3 = r4 * a2 % n2, l2 = Math.floor(r4 * a2 / n2), h3 = this._getBlock(l2 + S), p2 = t3(e$1);
      if (this.config.supportsTextureFloat)
        h3.setData(s2, o3, p2);
      else if (p2 === t$2)
        h3.setData(s2, o3, 255), h3.setData(s2, o3 + 1, 255);
      else {
        const t4 = i$1(Math.round(p2), -32767, 32766) + 32768, e2 = 255 & t4, r5 = (65280 & t4) >> 8;
        h3.setData(s2, o3, e2), h3.setData(s2, o3 + 1, r5);
      }
    }));
  }
  sendUpdates() {
    if (has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate"), this._nextUpdate)
      return this._nextUpdate.promise;
    if (this._currUpdate)
      return this._nextUpdate = C$1(), this.updatingHandles.addPromise(this._nextUpdate.promise), this._nextUpdate.promise;
    const e2 = { blocks: this._blocks.map((t2) => null != t2 ? t2.toMessage() : null) };
    return this._currUpdate = this._createResources().then(() => {
      const t2 = () => {
        if (this._currUpdate = null, this._nextUpdate) {
          const t3 = this._nextUpdate;
          this._nextUpdate = null, this.sendUpdates().then(() => t3.resolve());
        } else
          has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate::No additional updates queued");
      };
      has("esri-2d-update-debug") && console.debug("AttributeStore::sendUpdate::client.update");
      const i2 = this.updatingHandles.addPromise(this._client.update(e2, this._signal).then(t2).catch(t2));
      return this._client.render(this._signal), i2;
    }).catch((e3) => {
      if (b$1(e3))
        return this._createResourcesPromise = null, this._createResources();
      U.error(new s$2("mapview-attribute-store", "Encountered an error during client update", e3));
    }), this._currUpdate;
  }
  _ensureSizeForTexel(t2) {
    for (; t2 >= this._size * this._size; )
      if (this._expand())
        return;
  }
  _bindAttribute(t2, e2) {
    function i2() {
      const { normalizationField: e3 } = t2;
      return e3 ? (i3) => {
        const s3 = i3.readAttribute(e3);
        if (!s3)
          return null;
        return i3.readAttribute(t2.field) / s3;
      } : (e4) => e4.readAttribute(t2.field);
    }
    function s2() {
      return t2.normalizationField && U.warn("mapview-arcade", "Ignoring normalizationField specified with an arcade expression which is not supported."), (e3) => e3.getComputedNumericAtIndex(t2.fieldIndex);
    }
    let r3;
    if (null != t2.fieldIndex)
      r3 = s2();
    else {
      if (!t2.field)
        return;
      r3 = i2();
    }
    const { valueRepresentation: a2 } = t2;
    if (a2) {
      r3 = w(r3, (t3) => l$2(t3, a2));
    }
    const n2 = (t3) => null === t3 || isNaN(t3) || t3 === 1 / 0 || t3 === -1 / 0 ? t$2 : t3, o2 = this._attributeComputeInfo;
    if (o2.isSubtype) {
      const i3 = o2.map.get(e2) ?? /* @__PURE__ */ new Map();
      i3.set(t2.binding, w(r3, n2)), o2.map.set(e2, i3);
    } else
      o2.map.set(t2.binding, w(r3, n2));
  }
  _createResources() {
    if (null != this._createResourcesPromise)
      return this._createResourcesPromise;
    this._getBlock(Q), this._getBlock(R), A("Initializing AttributeStore");
    const e2 = { shared: E.sharedArrayBuffer && !("local" === this._client.type), size: this._size, blocks: this._blocks.map((t2) => null != t2 ? { textureOnly: t2.textureOnly, buffer: t2.buffer, pixelType: t2.pixelType } : null) }, i2 = this._client.initialize(e2, this._signal).catch((e3) => {
      b$1(e3) ? this._createResourcesPromise = null : U.error(new s$2("mapview-attribute-store", "Encountered an error during client initialization", e3));
    });
    return this._createResourcesPromise = i2, i2.then(() => null == this._createResourcesPromise ? this._createResources() : void 0), i2;
  }
  _getBlock(t2) {
    const e2 = this._blocks[t2];
    if (null != e2)
      return e2;
    A(`Initializing AttributeBlock at index ${t2}`);
    const i2 = E.sharedArrayBuffer, s2 = this._client.type, r3 = new D(i2, s2, this._size, this._blockDescriptors[t2]);
    return this._blocks[t2] = r3, this._createResourcesPromise = null, r3;
  }
  _expand() {
    if (this._size < this.config.maxTextureSize) {
      const t2 = this._size <<= 1;
      A("Expanding block size to", t2, this._blocks);
      for (const e2 of this._blocks)
        e2?.expand(t2);
      return this._createResourcesPromise = null, this._size = t2, 0;
    }
    return U.error(new s$2("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  async _updateFilter(t2, e2, i2, s2) {
    const r3 = this._filters[e2], a2 = null != r3 && r3.hash;
    if (!r3 && !t2)
      return false;
    if (a2 === JSON.stringify(t2))
      return false;
    if (null == t2) {
      if (!r3)
        return false;
      const t3 = 1 << e2 + 1, i3 = this._getBlock(0);
      return this._filters[e2] = null, i3.setComponentAllTexels(0, t3), this.sendUpdates(), true;
    }
    const n2 = await this._getFilter(e2, i2);
    return await n2.update(t2, s2), true;
  }
  async _getFilter(t2, e2) {
    const i2 = this._filters[t2];
    if (null != i2)
      return i2;
    const { default: s2 } = await import("./chunk-sXTTGYzy.js"), r3 = new s2({ geometryType: e2.geometryType, hasM: false, hasZ: false, timeInfo: e2.timeInfo, fieldsIndex: Z.fromJSON(e2.fieldsIndex) });
    return this._filters[t2] = r3, r3;
  }
  isVisible(t2) {
    return !!(2 & this._getBlock(0).getData(t2, 0));
  }
  getFilterFlags(t2) {
    let e2 = 0;
    const i$12 = i(t2.getDisplayId());
    for (let r3 = 0; r3 < this._filters.length; r3++) {
      const s3 = !!(i$12 & 1 << r3), a2 = this._filters[r3];
      e2 |= (!s3 || null == a2 || a2.check(t2) ? 1 : 0) << r3;
    }
    let s2 = 0;
    if (this._idsToHighlight.size) {
      const e3 = t2.getObjectId();
      s2 = this.getHighlightFlag(e3);
    }
    return e2 << 1 | s2;
  }
}
let r$1 = class r {
  constructor() {
    this._freeIds = [], this._idCounter = 1;
  }
  createId(r3 = false) {
    return s$3(this._getFreeId(), r3);
  }
  releaseId(e2) {
    this._freeIds.push(e2);
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
};
function n(t2, e2, s2) {
  if (!(t2.length > e2))
    for (; t2.length <= e2; )
      t2.push(s2);
}
class r2 {
  constructor() {
    this._numerics = [], this._strings = [], this._idGenerator = new r$1(), this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [];
  }
  createBitset() {
    const e2 = this._bitsets.length;
    return this._bitsets.push(t.create(this._allocatedSize, n$5)), e2 + 1;
  }
  getBitset(t2) {
    return this._bitsets[t2 - 1];
  }
  _expand() {
    this._allocatedSize <<= 1;
    for (const t2 of this._bitsets)
      t2.resize(this._allocatedSize);
  }
  _ensureNumeric(t2, e2) {
    this._numerics[t2] || (this._numerics[t2] = []);
    n(this._numerics[t2], e2, 0);
  }
  _ensureInstanceId(t2) {
    n(this._instanceIds, t2, 0);
  }
  _ensureString(t2, e2) {
    this._strings[t2] || (this._strings[t2] = []);
    n(this._strings[t2], e2, null);
  }
  createDisplayId(t2 = false) {
    const s2 = this._idGenerator.createId();
    return s2 > this._allocatedSize && this._expand(), s$3(s2, t2);
  }
  releaseDisplayId(e2) {
    for (const t2 of this._bitsets)
      t2.unset(e2);
    return this._idGenerator.releaseId(e2 & n$5);
  }
  getComputedNumeric(e2, s2) {
    return this.getComputedNumericAtIndex(e2 & n$5, 0);
  }
  setComputedNumeric(e2, s2, i2) {
    return this.setComputedNumericAtIndex(e2 & n$5, i2, 0);
  }
  getComputedString(e2, s2) {
    return this.getComputedStringAtIndex(e2 & n$5, 0);
  }
  setComputedString(e2, s2, i2) {
    return this.setComputedStringAtIndex(e2 & n$5, 0, i2);
  }
  getComputedNumericAtIndex(e2, s2) {
    const i2 = e2 & n$5;
    return this._ensureNumeric(s2, i2), this._numerics[s2][i2];
  }
  setComputedNumericAtIndex(e2, s2, i2) {
    const n2 = e2 & n$5;
    this._ensureNumeric(s2, n2), this._numerics[s2][n2] = i2;
  }
  getInstanceId(e2) {
    const s2 = e2 & n$5;
    return this._ensureInstanceId(s2), this._instanceIds[s2];
  }
  setInstanceId(e2, s2) {
    const i2 = e2 & n$5;
    this._ensureInstanceId(i2), this._instanceIds[i2] = s2;
  }
  getComputedStringAtIndex(e2, s2) {
    const i2 = e2 & n$5;
    return this._ensureString(s2, i2), this._strings[s2][i2];
  }
  setComputedStringAtIndex(e2, s2, i2) {
    const n2 = e2 & n$5;
    this._ensureString(s2, n2), this._strings[s2][n2] = i2;
  }
  getXMin(e2) {
    return this._bounds[4 * (e2 & n$5)];
  }
  getYMin(e2) {
    return this._bounds[4 * (e2 & n$5) + 1];
  }
  getXMax(e2) {
    return this._bounds[4 * (e2 & n$5) + 2];
  }
  getYMax(e2) {
    return this._bounds[4 * (e2 & n$5) + 3];
  }
  setBounds(e2, s2) {
    const i2 = s2.readHydratedGeometry();
    if (!i2?.coords.length)
      return false;
    let r3 = 1 / 0, u2 = 1 / 0, o2 = -1 / 0, h3 = -1 / 0;
    i2.forEachVertex((t2, e3) => {
      r3 = Math.min(r3, t2), u2 = Math.min(u2, e3), o2 = Math.max(o2, t2), h3 = Math.max(h3, e3);
    });
    const d2 = e2 & n$5;
    return n(this._bounds, 4 * d2 + 4, 0), this._bounds[4 * d2] = r3, this._bounds[4 * d2 + 1] = u2, this._bounds[4 * d2 + 2] = o2, this._bounds[4 * d2 + 3] = h3, true;
  }
}
export {
  S$1 as S,
  h$1 as h,
  k,
  r2 as r,
  t
};
