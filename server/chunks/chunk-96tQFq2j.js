import { gP as ae, aM as s$1, b1 as s$2, dj as Z, dk as i, el as d$1, bI as b, bb as s$3, gQ as B, dg as E, dn as N, c4 as d$2, dq as rt, dp as st } from "./chunk-KFNcxJaF.js";
import { m } from "./chunk-UzDyJefO.js";
import { x, j } from "./chunk-XCl2NxdK.js";
import { W } from "./chunk-mk4KSkT-.js";
import { p } from "./chunk-m6JrK9fL.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-H58sM9yM.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
class F {
  constructor() {
    this._queryEngine = null, this._customParameters = null;
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(e, r) {
    const { getFeatureUrl: a, getFeatureOutputFormat: i$1, fields: o, geometryType: n, featureType: l, objectIdField: c, customParameters: m$1 } = e, { spatialReference: y, getFeatureSpatialReference: g } = ae(a, l, e.spatialReference);
    this._featureType = l, this._customParameters = m$1, this._getFeatureUrl = a, this._getFeatureOutputFormat = i$1, this._getFeatureSpatialReference = g;
    try {
      await x(g, y);
    } catch {
      throw new s$1("unsupported-projection", "Projection not supported", { inSpatialReference: g, outSpatialReference: y });
    }
    s$2(r);
    const F2 = Z.fromLayerJSON({ fields: o, dateFieldsTimeReference: o.some((e2) => "esriFieldTypeDate" === e2.type) ? { timeZoneIANA: i } : null }), w = await this._snapshotFeatures({ fieldsIndex: F2, geometryType: n, objectIdField: c, spatialReference: y }, r.signal);
    return this._queryEngine = new W({ fieldsIndex: F2, geometryType: n, hasM: false, hasZ: false, objectIdField: c, spatialReference: y, timeInfo: null, featureStore: new m({ geometryType: n, hasM: false, hasZ: false }) }), this._queryEngine.featureStore.addMany(w), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async applyEdits() {
    throw new s$1("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
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
  async refresh(s) {
    return this._customParameters = s, this._snapshotTask?.abort(), this._snapshotTask = d$1((e) => this._snapshotFeatures(this._queryEngine, e)), this._snapshotTask.promise.then((e) => {
      this._queryEngine.featureStore.clear(), e && this._queryEngine.featureStore.addMany(e);
    }, (e) => {
      this._queryEngine.featureStore.clear(), b(e) || s$3.getLogger("esri.layers.WFSLayer").error(new s$1("wfs-layer:getfeature-error", "An error occurred during the GetFeature request", { error: e }));
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
  async _snapshotFeatures({ objectIdField: e, geometryType: t, spatialReference: r, fieldsIndex: a }, u) {
    const p$1 = await B(this._getFeatureUrl ?? "", this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, signal: u });
    E(p$1, this._getFeatureSpatialReference.wkid), s$2(u);
    const h = N(p$1, { geometryType: t, hasZ: false, objectIdField: e });
    if (!d$2(r, this._getFeatureSpatialReference))
      for (const s of h)
        null != s.geometry && (s.geometry = rt(j(st(s.geometry, t, false, false), this._getFeatureSpatialReference, r)));
    let f = 1;
    for (const s of h) {
      const t2 = {};
      p(a, t2, s.attributes, true), s.attributes = t2, null == t2[e] && (s.objectId = t2[e] = f++);
    }
    return h;
  }
}
export {
  F as default
};
