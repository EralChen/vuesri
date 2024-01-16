import { t } from "./chunk-jrhFla2W.js";
import { bb as s$1, bH as a$1, lg as s, aq as has, oh as n, cU as i, d1 as o$1, oi as i$1, oj as d$1 } from "./chunk-KFNcxJaF.js";
import { S as S$1 } from "./chunk-DnHFm0Vi.js";
function r$1(r2, t2, a2) {
  if (null == r2)
    return null;
  const n2 = t2.readArcadeFeature();
  t2.contextTimeZone = a2.$view?.timeZone;
  try {
    return r2.evaluate({ ...a2, $feature: n2 }, r2.services);
  } catch (u2) {
    return s$1.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", u2), null;
  }
}
class a {
  constructor(e, s2) {
    this._canCacheExpressionValue = false, this._sourceInfo = e, this._storage = s2, this._bitsets = { computed: s2.getBitset(s2.createBitset()) };
  }
  get storage() {
    return this._storage;
  }
  invalidate() {
    this._bitsets.computed.clear();
  }
  async updateSchema(t2, i2) {
    const a2 = a$1(this._schema, i2);
    if (this._schema = i2, !i2 || null == a2 || !s(a2, "attributes"))
      return;
    has("esri-2d-update-debug") && console.debug("Applying Update - Store:", a2), this._bitsets.computed.clear(), t2.targets[i2.name] = true;
    const r2 = i2.attributes, o2 = [], c2 = [];
    for (const e in r2) {
      const s2 = r2[e];
      switch (s2.type) {
        case "field":
          break;
        case "expression":
          o2.push(this._createArcadeComputedField(s2));
          break;
        case "label-expression":
          o2.push(this._createLabelArcadeComputedField(s2));
          break;
        case "statistic":
          c2.push(s2);
      }
    }
    this._computedFields = await Promise.all(o2), this._canCacheExpressionValue = !this._computedFields.some((e) => "expression" === e.type && null != e.expression && e.expression.referencesScale()), this._statisticFields = c2;
  }
  setComputedAttributes(e, s2, t2, i2, a2) {
    const r2 = this._bitsets.computed;
    if (!this._canCacheExpressionValue || !r2.has(t2)) {
      r2.set(t2);
      for (const r3 of this._computedFields) {
        const o2 = this._evaluateField(s2, r3, i2, a2);
        switch (r3.resultType) {
          case "numeric":
            e.setComputedNumericAtIndex(t2, r3.fieldIndex, o2);
            break;
          case "string":
            e.setComputedStringAtIndex(t2, r3.fieldIndex, o2);
        }
      }
    }
  }
  async _createArcadeComputedField(e) {
    const s2 = this._sourceInfo.spatialReference, i2 = this._sourceInfo.fieldsIndex;
    return { ...e, expression: await n(e.valueExpression, s2, i2) };
  }
  async _createLabelArcadeComputedField(e) {
    const s2 = this._sourceInfo.spatialReference, t2 = this._sourceInfo.fieldsIndex, { createLabelFunction: i2 } = await import("./chunk-KFNcxJaF.js").then((n2) => n2.E3), a2 = await i2(e.label, t2, s2);
    return { ...e, builder: a2 };
  }
  _evaluateField(e, s2, t2, a2) {
    switch (s2.type) {
      case "label-expression": {
        const t3 = e.readArcadeFeature();
        return s2.builder.evaluate(t3, a2) || "";
      }
      case "expression": {
        const { expression: r2 } = s2;
        return r$1(r2, e, { $view: { scale: t2, timeZone: a2 } });
      }
    }
  }
}
class r extends S$1 {
  static from(e, t2) {
    return new r(e.copy(), t2);
  }
  constructor(r2, t2) {
    super(S$1.createInstance(), r2.fullSchema()), this._currentIndex = -1, this._reader = r2, this._indices = t2;
  }
  get fields() {
    return this._reader.fields;
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new r(this._reader.copy(), this._indices);
    return e._currentIndex = this._currentIndex, e;
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); )
      ;
    return this._currentIndex < this._indices.length;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), true);
  }
  setArcadeSpatialReference(e) {
    this._reader.setArcadeSpatialReference(e);
  }
  attachStorage(e) {
    this._reader.attachStorage(e);
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  get contextTimeZone() {
    return this._reader.contextTimeZone;
  }
  set contextTimeZone(e) {
    this._reader.contextTimeZone = e;
  }
  getStorage() {
    return this._reader.getStorage();
  }
  getComputedNumeric(e) {
    return this._reader.getComputedNumericAtIndex(0);
  }
  setComputedNumeric(e, r2) {
    return this._reader.setComputedNumericAtIndex(r2, 0);
  }
  getComputedString(e) {
    return this._reader.getComputedStringAtIndex(0);
  }
  setComputedString(e, r2) {
    return this._reader.setComputedStringAtIndex(0, r2);
  }
  getComputedNumericAtIndex(e) {
    return this._reader.getComputedNumericAtIndex(e);
  }
  setComputedNumericAtIndex(e, r2) {
    this._reader.setComputedNumericAtIndex(e, r2);
  }
  getComputedStringAtIndex(e) {
    return this._reader.getComputedStringAtIndex(e);
  }
  setComputedStringAtIndex(e, r2) {
    return this._reader.setComputedStringAtIndex(e, r2);
  }
  transform(e, r2, t2, d2) {
    const a2 = this.copy();
    return a2._reader = this._reader.transform(e, r2, t2, d2), a2;
  }
  readAttribute(e, r2 = false) {
    return this._reader.readAttribute(e, r2);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e) {
    return this._reader.joinAttributes(e);
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e) {
    return this.readAttribute(e, true);
  }
  hasField(e) {
    return this._reader.hasField(e);
  }
  setField(e, r2) {
    return this._reader.setField(e, r2);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e = false) {
    return this._reader.castToText(e);
  }
  getQuantizationTransform() {
    return this._reader.getQuantizationTransform();
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e) {
    return this._reader.setDisplayId(e);
  }
  getGroupId() {
    return this._reader.getGroupId();
  }
  setGroupId(e) {
    return this._reader.setGroupId(e);
  }
  getXHydrated() {
    return this._reader.getXHydrated();
  }
  getYHydrated() {
    return this._reader.getYHydrated();
  }
  getX() {
    return this._reader.getX();
  }
  getY() {
    return this._reader.getY();
  }
  setIndex(e) {
    return this._reader.setIndex(e);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readLegacyFeature() {
    return this._reader.readLegacyFeature();
  }
  readOptimizedFeature() {
    return this._reader.readOptimizedFeature();
  }
  readLegacyPointGeometry() {
    return this._reader.readLegacyPointGeometry();
  }
  readLegacyGeometry() {
    return this._reader.readLegacyGeometry();
  }
  readLegacyCentroid() {
    return this._reader.readLegacyCentroid();
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readUnquantizedGeometry() {
    return this._reader.readUnquantizedGeometry();
  }
  readHydratedGeometry() {
    return this._reader.readHydratedGeometry();
  }
  readGeometry() {
    return this._reader.readGeometry();
  }
  readCentroid() {
    return this._reader.readCentroid();
  }
  _readAttribute(e, r2) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
}
const o = i();
function d(t2, e) {
  return t2 << 16 | e;
}
function h(t2) {
  return (4294901760 & t2) >>> 16;
}
function c(t2) {
  return 65535 & t2;
}
const I = { getObjectId: (t2) => t2.getObjectId(), getAttributes: (t2) => t2.readAttributes(), getAttribute: (t2, e) => t2.readAttribute(e), getAttributeAsTimestamp: (t2, e) => t2.readAttributeAsTimestamp(e), cloneWithGeometry: (t2, e) => t2, getGeometry: (t2) => t2.readHydratedGeometry(), getCentroid: (t2, e) => t2.readCentroid() };
class u extends a {
  constructor(a2, r2, n2) {
    super(a2, r2), this.featureAdapter = I, this.events = new o$1(), this._featureSetsByInstance = /* @__PURE__ */ new Map(), this._objectIdToDisplayId = /* @__PURE__ */ new Map(), this._spatialIndexInvalid = true, this._indexSearchCache = new t(50), this._index = i$1(9, (t2) => ({ minX: this._storage.getXMin(t2), minY: this._storage.getYMin(t2), maxX: this._storage.getXMax(t2), maxY: this._storage.getYMax(t2) })), this.mode = n2;
  }
  get storeStatistics() {
    let t2 = 0, e = 0, s2 = 0;
    return this.forEach((a2) => {
      const r2 = a2.readGeometry();
      r2 && (e += r2.isPoint ? 1 : r2.lengths.reduce((t3, e2) => t3 + e2, 0), s2 += r2.isPoint ? 1 : r2.lengths.length, t2 += 1);
    }), { featureCount: t2, vertexCount: e, ringCount: s2 };
  }
  hasInstance(t2) {
    return this._featureSetsByInstance.has(t2);
  }
  onTileData(t2, e, s2) {
    if (null == e.addOrUpdate)
      return e;
    if (e.addOrUpdate.attachStorage(this._storage), "snapshot" === this.mode) {
      const a3 = e.addOrUpdate.getCursor();
      for (; a3.next(); ) {
        const e2 = a3.getDisplayId();
        this.setComputedAttributes(this._storage, a3, e2, t2.scale, s2);
      }
      return e;
    }
    this._featureSetsByInstance.set(e.addOrUpdate.instance, e.addOrUpdate);
    const a2 = e.addOrUpdate.getCursor();
    for (; a2.next(); )
      this._insertFeature(a2, t2.scale, s2);
    return this._spatialIndexInvalid = true, this.events.emit("changed"), e;
  }
  search(t2) {
    this._rebuildIndex();
    const e = t2.id, s2 = this._indexSearchCache.find((t3) => t3.tileId === e);
    if (null != s2)
      return s2.readers;
    const a2 = /* @__PURE__ */ new Map(), r$12 = this._searchIndex(t2.bounds), n2 = [];
    for (const i2 of r$12) {
      const t3 = this._storage.getInstanceId(i2), e2 = h(t3), s3 = c(t3);
      a2.has(e2) || a2.set(e2, []);
      a2.get(e2).push(s3);
    }
    return a2.forEach((t3, e2) => {
      const s3 = this._featureSetsByInstance.get(e2);
      n2.push(r.from(s3, t3));
    }), this._indexSearchCache.enqueue({ tileId: e, readers: n2 }), n2;
  }
  insert(t2) {
    const e = t2.getCursor(), s2 = this._storage;
    for (; e.next(); ) {
      const t3 = d(e.instance, e.getIndex()), a2 = e.getObjectId(), r2 = this._objectIdToDisplayId.get(a2) ?? this._storage.createDisplayId();
      e.setDisplayId(r2), s2.setInstanceId(r2, t3), this._objectIdToDisplayId.set(a2, r2);
    }
    this._featureSetsByInstance.set(t2.instance, t2), this._spatialIndexInvalid = true;
  }
  remove(t2) {
    const e = this._objectIdToDisplayId.get(t2);
    if (!e)
      return;
    const s2 = this._storage.getInstanceId(e), a2 = c(s2), r2 = h(s2), n2 = this._featureSetsByInstance.get(r2);
    this._objectIdToDisplayId.delete(t2), this._storage.releaseDisplayId(e), n2.removeAtIndex(a2), n2.isEmpty && this._featureSetsByInstance.delete(r2), this._spatialIndexInvalid = true;
  }
  forEach(t2) {
    this._objectIdToDisplayId.forEach((e) => {
      const s2 = this._storage.getInstanceId(e), a2 = this._lookupFeature(s2);
      t2(a2);
    });
  }
  forEachUnsafe(t2) {
    this._objectIdToDisplayId.forEach((e) => {
      const s2 = this._storage.getInstanceId(e), a2 = h(s2), r2 = c(s2), n2 = this._getFeatureSet(a2);
      n2.setIndex(r2), t2(n2);
    });
  }
  forEachInBounds(t2, e) {
    const s2 = this._searchIndex(t2);
    for (const a2 of s2) {
      e(this.lookupFeatureByDisplayId(a2, this._storage));
    }
  }
  forEachBounds(t2, e) {
    this._rebuildIndex();
    for (const s2 of t2) {
      if (!s2.readGeometry())
        continue;
      const t3 = s2.getDisplayId();
      d$1(o, this._storage.getXMin(t3), this._storage.getYMin(t3), this._storage.getXMax(t3), this._storage.getYMax(t3)), e(o);
    }
  }
  sweepFeatures(t2, e, s2) {
    this._spatialIndexInvalid = true, this._objectIdToDisplayId.forEach((a2, r2) => {
      t2.has(a2) || (e.releaseDisplayId(a2), s2 && s2.unsetAttributeData(a2), this._objectIdToDisplayId.delete(r2));
    }), this.events.emit("changed");
  }
  sweepFeatureSets(t2) {
    this._spatialIndexInvalid = true, this._featureSetsByInstance.forEach((e, s2) => {
      t2.has(s2) || this._featureSetsByInstance.delete(s2);
    });
  }
  lookupObjectId(t2, e) {
    const s2 = this.lookupFeatureByDisplayId(t2, e);
    return null == s2 ? null : s2.getObjectId();
  }
  lookupDisplayId(t2) {
    return this._objectIdToDisplayId.get(t2);
  }
  lookupFeatureByDisplayId(t2, e) {
    const s2 = e.getInstanceId(t2);
    return this._lookupFeature(s2);
  }
  lookupByDisplayIdUnsafe(t2) {
    const e = this._storage.getInstanceId(t2), s2 = h(e), a2 = c(e), r2 = this._getFeatureSet(s2);
    return r2 ? (r2.setIndex(a2), r2) : null;
  }
  _insertFeature(t2, e, s2) {
    const a2 = this._storage, r2 = t2.getObjectId(), n2 = d(t2.instance, t2.getIndex());
    a2.getInstanceId(t2.getDisplayId());
    let i2 = this._objectIdToDisplayId.get(r2);
    i2 || (i2 = a2.createDisplayId(), this._objectIdToDisplayId.set(r2, i2), this._spatialIndexInvalid = true), t2.setDisplayId(i2), a2.setInstanceId(i2, n2), this.setComputedAttributes(a2, t2, i2, e, s2);
  }
  _searchIndex(t2) {
    this._rebuildIndex();
    const e = { minX: t2[0], minY: t2[1], maxX: t2[2], maxY: t2[3] };
    return this._index.search(e);
  }
  _rebuildIndex() {
    if (!this._spatialIndexInvalid)
      return;
    const t2 = [];
    "snapshot" === this.mode ? this._featureSetsByInstance.forEach((e) => {
      const s2 = e.getCursor();
      for (; s2.next(); ) {
        const e2 = s2.getDisplayId();
        this._storage.setBounds(e2, s2) && t2.push(e2);
      }
    }) : this._objectIdToDisplayId.forEach((e) => {
      const s2 = this._storage.getInstanceId(e);
      this._storage.setBounds(e, this._lookupFeature(s2)) && t2.push(e);
    }), this._index.clear(), this._index.load(t2), this._indexSearchCache.clear(), this._spatialIndexInvalid = false;
  }
  _lookupFeature(t2) {
    const e = h(t2), s2 = this._getFeatureSet(e);
    if (!s2)
      return;
    const a2 = s2.getCursor(), r2 = c(t2);
    return a2.setIndex(r2), a2;
  }
  _getFeatureSet(t2) {
    return this._featureSetsByInstance.get(t2);
  }
}
export {
  I,
  a,
  r,
  u
};
