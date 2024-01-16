import { cU as i, d1 as o$1, bX as k$1, d2 as Z, bb as s$1, aM as s$2, d3 as yt, aw as u$1 } from "./chunk-KFNcxJaF.js";
import { o } from "./chunk-vP0bHkve.js";
import { h } from "./chunk-I8SN0CZW.js";
import { o as o$2 } from "./chunk-MT1PWqgL.js";
const f = i();
class m {
  constructor(e) {
    this.geometryInfo = e, this._boundsStore = new o(), this._featuresById = /* @__PURE__ */ new Map(), this._markedIds = /* @__PURE__ */ new Set(), this.events = new o$1(), this.featureAdapter = o$2;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    let e = 0;
    return this._featuresById.forEach((t) => {
      null != t.geometry && t.geometry.coords && (e += t.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  getFullExtent(e) {
    if (null == this.fullBounds)
      return null;
    const [t, r, s, o2] = this.fullBounds;
    return { xmin: t, ymin: r, xmax: s, ymax: o2, spatialReference: h(e) };
  }
  add(e) {
    this._add(e), this._emitChanged();
  }
  addMany(e) {
    for (const t of e)
      this._add(t);
    this._emitChanged();
  }
  upsertMany(t) {
    const r = t.map((e) => this._upsert(e));
    return this._emitChanged(), r.filter(k$1);
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
  }
  removeById(e) {
    const t = this._featuresById.get(e);
    return t ? (this._remove(t), this._emitChanged(), t) : null;
  }
  removeManyById(e) {
    this._boundsStore.invalidateIndex();
    for (const t of e) {
      const e2 = this._featuresById.get(t);
      e2 && this._remove(e2);
    }
    this._emitChanged();
  }
  forEachBounds(e, t) {
    for (const r of e) {
      const e2 = this._boundsStore.get(r.objectId);
      e2 && t(Z(f, e2));
    }
  }
  getFeature(e) {
    return this._featuresById.get(e);
  }
  has(e) {
    return this._featuresById.has(e);
  }
  forEach(e) {
    this._featuresById.forEach((t) => e(t));
  }
  forEachInBounds(e, t) {
    this._boundsStore.forEachInBounds(e, (e2) => {
      t(this._featuresById.get(e2));
    });
  }
  startMarkingUsedFeatures() {
    this._boundsStore.invalidateIndex(), this._markedIds.clear();
  }
  sweep() {
    let e = false;
    this._featuresById.forEach((t, r) => {
      this._markedIds.has(r) || (e = true, this._remove(t));
    }), this._markedIds.clear(), e && this._emitChanged();
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(e) {
    if (!e)
      return;
    const r = e.objectId;
    if (null == r)
      return void s$1.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$2("featurestore:invalid-feature", "feature id is missing", { feature: e }));
    const o2 = this._featuresById.get(r);
    let i2;
    if (this._markedIds.add(r), o2 ? (e.displayId = o2.displayId, i2 = this._boundsStore.get(r), this._boundsStore.delete(r)) : null != this.onFeatureAdd && this.onFeatureAdd(e), !e.geometry?.coords?.length)
      return this._boundsStore.set(r, null), void this._featuresById.set(r, e);
    i2 = yt(null != i2 ? i2 : u$1(), e.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), null != i2 && this._boundsStore.set(r, i2), this._featuresById.set(r, e);
  }
  _upsert(e) {
    const r = e?.objectId;
    if (null == r)
      return s$1.getLogger("esri.layers.graphics.data.FeatureStore").error(new s$2("featurestore:invalid-feature", "feature id is missing", { feature: e })), null;
    const o2 = this._featuresById.get(r);
    if (!o2)
      return this._add(e), e;
    this._markedIds.add(r);
    const { geometry: i2, attributes: d } = e;
    for (const t in d)
      o2.attributes[t] = d[t];
    return i2 && (o2.geometry = i2, this._boundsStore.set(r, yt(u$1(), i2, this.geometryInfo.hasZ, this.geometryInfo.hasM) ?? null)), o2;
  }
  _remove(e) {
    null != this.onFeatureRemove && this.onFeatureRemove(e);
    const t = e.objectId;
    return this._markedIds.delete(t), this._boundsStore.delete(t), this._featuresById.delete(t), e;
  }
}
export {
  m
};
