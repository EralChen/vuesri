import { aV as e, aX as y, a_ as c, iK as m, dm as d$1, aB as f$1, jC as i, aO as s, aA as i$1, az as e$1, jD as c$1, jE as p, d1 as n, jF as c$2, jG as f, ax as t, av as u$1, aw as j, d2 as f$2, ay as m$1, jH as p$1, jI as p$2, ck as b, jJ as g, aY as f$3, dv as y$1, aC as M, hZ as o, jK as C$1, jL as i$2, jM as m$2, d4 as c$3, jN as y$2, dp as P$1, jO as m$3, jP as u, jQ as p$3, jR as n$1, aZ as d, jS as s$1, a$ as b$1 } from "./chunk-ejFG4zJ0.js";
import { R, x, C, P, O, N, q, v, k } from "./chunk-tdBLh9Pj.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-bLqiACBi.js";
let h = class extends m {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(t2) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, t2)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: t2, layerDefinition: e2, spatialReference: s2, supportedCrs: r }, layer: { apiKey: o2, customParameters: p2, effectiveMaxRecordCount: i2 } } = this;
    return { type: "ogc-source", collection: t2, layerDefinition: e2, maxRecordCount: i2, queryParameters: { apiKey: o2, customParameters: p2 }, spatialReference: s2, supportedCrs: r };
  }
  queryExtent(t2, e2 = {}) {
    return null;
  }
  queryFeatureCount(t2, e2 = {}) {
    return null;
  }
  queryFeatures(t2, e2 = {}) {
    return this.queryFeaturesJSON(t2, e2).then((t3) => d$1.fromJSON(t3));
  }
  queryFeaturesJSON(t2, e2 = {}) {
    const s2 = this.getSource();
    return this.load(e2).then(() => R(s2, t2, e2));
  }
  queryObjectIds(t2, e2 = {}) {
    return null;
  }
  serviceSupportsSpatialReference(t2) {
    return !(!t2.isWGS84 && !t2.isWebMercator) || !!this.featureDefinition.supportedCrs[t2.wkid];
  }
  _conformsToType(t2, e2) {
    const s2 = new RegExp(`^${e2}$`, "i");
    return t2.conformsTo.some((t3) => s2.test(t3)) ?? false;
  }
  _getCapabilities(t2, e2) {
    return { analytics: { supportsCacheHint: false }, attachment: null, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: t2 }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsChangeTracking: false, supportsQuery: false, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: false, supportsExceedsLimitStatistics: false, supportsAsyncConvert3D: false }, query: { maxRecordCount: e2, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: false, supportsCentroid: false, supportsDisjointSpatialRelationship: false, supportsDistance: false, supportsDistinct: false, supportsExtent: false, supportsFormatPBF: false, supportsGeometryProperties: false, supportsHavingClause: false, supportsHistoricMoment: false, supportsMaxRecordCountFactor: false, supportsOrderBy: false, supportsPagination: false, supportsPercentileStatistics: false, supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryByAnonymous: false, supportsQueryByOthers: false, supportsQueryGeometry: false, supportsResultType: false, supportsStandardizedQueriesOnly: false, supportsTopFeaturesQuery: false, supportsStatistics: false, supportsSpatialAggregationStatistics: false, supportedSpatialAggregationStatistics: { envelope: false, centroid: false, convexHull: false }, supportsDefaultSpatialReference: false, supportsFullTextSearch: false, supportsCompactGeometry: false, supportsSqlExpression: false, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, editing: { supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsGeometryUpdate: false, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsUploadWithItemId: false, supportsUpdateWithoutM: false, supportsAsyncApplyEdits: false, zDefault: void 0 } };
  }
  _getMaxRecordCount(t2) {
    const e2 = t2?.components?.parameters;
    return e2?.limit?.schema?.maximum ?? e2?.limitFeatures?.schema?.maximum;
  }
  _getStorageSpatialReference(t2) {
    const e2 = t2.storageCrs ?? x, s2 = C(e2);
    return null == s2 ? f$1.WGS84 : new f$1({ wkid: s2 });
  }
  _getSupportedSpatialReferences(t2, e2) {
    const s2 = "#/crs", r = t2.crs ?? [x], o2 = r.includes(s2) ? r.filter((t3) => t3 !== s2).concat(e2.crs ?? []) : r, p2 = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return o2.filter((t3) => !p2.test(t3));
  }
  async _loadOGCServices(t2, s$12) {
    const r = null != s$12 ? s$12.signal : null, { apiKey: o2, collectionId: p2, customParameters: i$12, fields: y2, geometryType: f2, hasZ: h2, objectIdField: S, timeInfo: C$12, url: R2 } = t2, w = { fields: y2?.map((t3) => t3.toJSON()), geometryType: i.toJSON(f2), hasZ: h2 ?? false, objectIdField: S, timeInfo: C$12?.toJSON() }, x2 = { apiKey: o2, customParameters: i$12, signal: r }, j2 = await P(R2, x2), [v$1, F] = await Promise.all([O(j2, x2), N(j2, x2)]);
    if (!this._conformsToType(v$1, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))
      throw new s("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const O$1 = F.collections.find(({ id: t3 }) => t3 === p2);
    if (!O$1)
      throw new s("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const D = this._conformsToType(v$1, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await q(j2, x2) : null, T = await v(O$1, w, x2), A = this._getMaxRecordCount(D), _ = this._getCapabilities(T.hasZ, A), P$12 = this._getStorageSpatialReference(O$1).toJSON(), b2 = this._getSupportedSpatialReferences(O$1, F), q$1 = new RegExp(`^${k}`, "i"), E = {};
    for (const e2 of b2) {
      const t3 = C(e2);
      null != t3 && (E[t3] || (E[t3] = e2.replace(q$1, "")));
    }
    this.featureDefinition = { capabilities: _, collection: O$1, layerDefinition: T, spatialReference: P$12, supportedCrs: E };
  }
};
e([y()], h.prototype, "featureDefinition", void 0), e([y({ constructOnly: true })], h.prototype, "layer", void 0), e([y()], h.prototype, "type", void 0), h = e([c("esri.layers.graphics.sources.OGCFeatureSource")], h);
const U = s$1();
let B = class extends i$1(e$1(c$1(p(n(c$2(f(t(u$1(j(f$2(m$1(b$1)))))))))))) {
  constructor(e2) {
    super(e2), this.capabilities = null, this.collectionId = null, this.copyright = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = true, this.legendEnabled = true, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = true, this.popupTemplate = null, this.screenSizePerspectiveEnabled = true, this.source = new h({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }
  destroy() {
    this.source?.destroy();
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e2).then(() => this._fetchService(e2))), this.when();
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    return this.maxRecordCount ?? this.capabilities?.query.maxRecordCount ?? 5e3;
  }
  get isTable() {
    return this.loaded && null == this.geometryType;
  }
  set renderer(e2) {
    p$1(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  on(e2, r) {
    return super.on(e2, r);
  }
  createPopupTemplate(e2) {
    return p$2(this, e2);
  }
  createQuery() {
    return new b();
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, r) {
    let t2, i2 = false;
    const o2 = r?.feature?.attributes, s2 = this.typeIdField && o2?.[this.typeIdField];
    return null != s2 && this.types && (i2 = this.types.some((r2) => r2.id == s2 && (t2 = r2.domains?.[e2], "inherited" === t2?.type && (t2 = this._getLayerDomain(e2)), true))), i2 || t2 || (t2 = this._getLayerDomain(e2)), t2;
  }
  queryFeatures(e2, r) {
    return this.load().then(() => this.source.queryFeatures(b.from(e2) || this.createQuery(), r)).then((e3) => (e3?.features?.forEach((e4) => {
      e4.layer = e4.sourceLayer = this;
    }), e3));
  }
  serviceSupportsSpatialReference(e2) {
    return this.source?.serviceSupportsSpatialReference(e2) ?? false;
  }
  async _fetchService(e2) {
    await this.source.load(e2), this.read(this.source.featureDefinition, { origin: "service" }), p$1(this.renderer, this.fieldsIndex), g(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e2) {
    if (!this.fields)
      return null;
    for (const r of this.fields)
      if (r.name === e2 && r.domain)
        return r.domain;
    return null;
  }
};
e([y({ readOnly: true, json: { origins: { service: { read: true } } } })], B.prototype, "capabilities", void 0), e([y({ type: String, json: { write: true } })], B.prototype, "collectionId", void 0), e([y({ type: String })], B.prototype, "copyright", void 0), e([y({ readOnly: true })], B.prototype, "defaultPopupTemplate", null), e([y({ readOnly: true, type: String, json: { origins: { service: { name: "collection.description" } } } })], B.prototype, "description", void 0), e([y({ type: String })], B.prototype, "displayField", void 0), e([y({ type: Number })], B.prototype, "effectiveMaxRecordCount", null), e([y(f$3)], B.prototype, "elevationInfo", void 0), e([y({ type: [y$1], json: { origins: { service: { name: "layerDefinition.fields" } } } })], B.prototype, "fields", void 0), e([y(U.fieldsIndex)], B.prototype, "fieldsIndex", void 0), e([y({ readOnly: true, type: M, json: { origins: { service: { name: "layerDefinition.extent" } } } })], B.prototype, "fullExtent", void 0), e([y({ type: o.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: o.read } } } } })], B.prototype, "geometryType", void 0), e([y({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], B.prototype, "hasZ", void 0), e([y({ type: Boolean, readOnly: true })], B.prototype, "isTable", null), e([y({ type: [C$1], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$2 }, write: true } } } })], B.prototype, "labelingInfo", void 0), e([y(m$2)], B.prototype, "labelsVisible", void 0), e([y(c$3)], B.prototype, "legendEnabled", void 0), e([y({ type: Number })], B.prototype, "maxRecordCount", void 0), e([y({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], B.prototype, "objectIdField", void 0), e([y({ type: ["OGCFeatureLayer"] })], B.prototype, "operationalLayerType", void 0), e([y(y$2)], B.prototype, "popupEnabled", void 0), e([y({ type: P$1, json: { name: "popupInfo", write: true } })], B.prototype, "popupTemplate", void 0), e([y({ types: m$3, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: false }, "web-scene": { types: u, name: "layerDefinition.drawingInfo.renderer", write: true } }, name: "layerDefinition.drawingInfo.renderer", write: true } })], B.prototype, "renderer", null), e([y(p$3)], B.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ readOnly: true })], B.prototype, "source", void 0), e([y({ readOnly: true, type: f$1, json: { origins: { service: { read: true } } } })], B.prototype, "spatialReference", void 0), e([y({ type: String, json: { write: { enabled: true, ignoreOrigin: true, isRequired: true }, origins: { service: { name: "collection.title" } } } })], B.prototype, "title", void 0), e([y({ readOnly: true, json: { read: false } })], B.prototype, "type", void 0), e([y({ type: String, readOnly: true })], B.prototype, "typeIdField", void 0), e([y({ type: [n$1] })], B.prototype, "types", void 0), e([y(d)], B.prototype, "url", void 0), B = e([c("esri.layers.OGCFeatureLayer")], B);
const V = B;
export {
  V as default
};
