import { hD as oe, aO as s, cU as s$1, dL as Z, dM as i, fb as d$1, aT as s$2, dd as s$3, hE as ee, cd as b$1, hF as K, dI as E, dP as N, bO as G, dR as ot, dQ as rt } from "./chunk-ejFG4zJ0.js";
import { m } from "./chunk-HoJyfhBe.js";
import { x, j } from "./chunk-pZO3UCge.js";
import { $ } from "./chunk-P_v7gizd.js";
import { p } from "./chunk-bLqiACBi.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-H58sM9yM.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
const w = "esri.layers.WFSLayer";
class R {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = true;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(e, r = {}) {
    const { getFeatureUrl: s$22, getFeatureOutputFormat: o, fields: n, geometryType: i$1, featureType: u, maxRecordCount: c, maxTotalRecordCount: p2, maxPageCount: d, objectIdField: g, customParameters: y } = e, { spatialReference: _, getFeatureSpatialReference: w2 } = oe(s$22, u, e.spatialReference);
    try {
      await x(w2, _);
    } catch {
      throw new s("unsupported-projection", "Projection not supported", { inSpatialReference: w2, outSpatialReference: _ });
    }
    s$1(r), this._customParameters = y, this._featureType = u, this._fieldsIndex = Z.fromLayerJSON({ fields: n, dateFieldsTimeReference: n.some((e2) => "esriFieldTypeDate" === e2.type) ? { timeZoneIANA: i } : null }), this._geometryType = i$1, this._getFeatureUrl = s$22, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = w2, this._maxRecordCount = c, this._maxTotalRecordCount = p2, this._maxPageCount = d, this._objectIdField = g, this._spatialReference = _;
    let R2 = await this._snapshotFeatures(r);
    if (R2.errors.length > 0 && (this._supportsPagination = false, R2 = await this._snapshotFeatures(r), R2.errors.length > 0))
      throw R2.errors[0];
    return this._queryEngine = new $({ fieldsIndex: this._fieldsIndex, geometryType: i$1, hasM: false, hasZ: false, objectIdField: g, spatialReference: _, timeInfo: null, featureStore: new m({ geometryType: i$1, hasM: false, hasZ: false }) }), this._queryEngine.featureStore.addMany(R2.features), { warnings: T(R2), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async applyEdits() {
    throw new s("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e, t.signal);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e, t.signal);
  }
  async refresh(t) {
    return this._customParameters = t.customParameters, this._maxRecordCount = t.maxRecordCount, this._maxTotalRecordCount = t.maxTotalRecordCount, this._maxPageCount = t.maxPageCount, this._snapshotTask?.abort(), this._snapshotTask = d$1((e) => this._snapshotFeatures({ signal: e })), this._snapshotTask.promise.then((e) => {
      this._queryEngine.featureStore.clear(), this._queryEngine.featureStore.addMany(e.features);
      for (const t2 of T(e))
        s$2.getLogger(w).warn(new s$3("wfs-layer:refresh-warning", t2.message, t2.details));
      e.errors?.length && s$2.getLogger(w).warn(new s$3("wfs-layer:refresh-error", "Refresh completed with errors", { errors: e.errors }));
    }, () => {
      this._queryEngine.featureStore.clear();
    }), await this._waitSnapshotComplete(), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _snapshotFeatures(e) {
    const t = e?.signal, r = this._maxTotalRecordCount, o = this._maxPageCount, n = this._supportsPagination ? await ee(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: t }) : void 0;
    let i2 = [];
    const u = [];
    if (null == n)
      try {
        i2 = await this._singleQuery(t);
      } catch (l) {
        b$1(l) || u.push(l);
      }
    else {
      const e2 = Math.min(n, r), a = F(this, Math.max(1, Math.min(Math.ceil(e2 / this._maxRecordCount), o)), t);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => S(a, i2, u)));
    }
    return s$1(t), { features: i2, totalRecordCount: n, maxTotalRecordCount: r, maxPageCount: o, errors: u };
  }
  async _singleQuery(e) {
    const t = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, signal: e });
    return this._processGeoJSON(t, { signal: e });
  }
  async _pageQuery(e, t) {
    const r = e * this._maxRecordCount, a = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, startIndex: r, count: this._maxRecordCount, signal: t });
    return this._processGeoJSON(a, { startIndex: r, signal: t });
  }
  _processGeoJSON(e, t) {
    E(e, this._getFeatureSpatialReference.wkid);
    const { startIndex: r, signal: s2 } = t;
    s$1(s2);
    const o = N(e, { geometryType: this._geometryType, hasZ: false, objectIdField: this._objectIdField });
    if (!G(this._spatialReference, this._getFeatureSpatialReference))
      for (const a of o)
        null != a.geometry && (a.geometry = ot(j(rt(a.geometry, this._geometryType, false, false), this._getFeatureSpatialReference, this._spatialReference)));
    let l = r ?? 1;
    for (const a of o) {
      const e2 = {};
      p(this._fieldsIndex, e2, a.attributes, true), a.attributes = e2, null == e2[this._objectIdField] && (a.objectId = e2[this._objectIdField] = l++);
    }
    return o;
  }
}
function* F(e, t, r) {
  for (let a = 0; a < t; a++)
    yield e._pageQuery(a, r);
}
async function S(e, t, r) {
  let a = e.next();
  for (; !a.done; ) {
    try {
      const e2 = await a.value;
      t.push(...e2);
    } catch (o) {
      b$1(o) || r.push(o);
    }
    a = e.next();
  }
}
function T(e) {
  const t = [];
  return null != e.totalRecordCount && (e.features.length < e.totalRecordCount && t.push({ name: "wfs-layer:maxRecordCount-too-low", message: `Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount } }), e.totalRecordCount > e.maxTotalRecordCount && t.push({ name: "wfs-layer:large-dataset", message: `The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount, maxTotalRecordCount: e.maxTotalRecordCount } })), t;
}
export {
  R as default
};
