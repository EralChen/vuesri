import { bo as e, bp as y, br as c, iv as m, c_ as d$1, cZ as f$1, j2 as i, aM as s$1, iO as i$1, j3 as o, j4 as c$1, j5 as p, cB as a, j6 as c$2, j7 as a$1, cD as t, cl as u$1, cm as j$1, cC as f, cn as m$1, j8 as p$1, j9 as p$2, bQ as b$1, ja as g, iX as f$2, d4 as y$1, ap as M$1, h3 as o$1, jb as C, jc as i$2, jd as m$2, cH as c$3, je as y$2, d0 as k$1, jf as m$3, jg as u, jh as p$3, ji as n, cv as d, jj as s, bN as b$2 } from "./chunk-KFNcxJaF.js";
import { S, h as h$1, x, T, I, F, k, j, b } from "./chunk-KGs6dxL9.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let h = class extends m {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(e2) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e2)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: e2, layerDefinition: t2, spatialReference: s2, supportedCrs: r }, layer: { apiKey: o2, customParameters: p2, effectiveMaxRecordCount: i2 } } = this;
    return { type: "ogc-source", collection: e2, layerDefinition: t2, maxRecordCount: i2, queryParameters: { apiKey: o2, customParameters: p2 }, spatialReference: s2, supportedCrs: r };
  }
  queryExtent(e2, t2 = {}) {
    return null;
  }
  queryFeatureCount(e2, t2 = {}) {
    return null;
  }
  queryFeatures(e2, t2 = {}) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => d$1.fromJSON(e3));
  }
  queryFeaturesJSON(e2, t2 = {}) {
    const s2 = this.getSource();
    return this.load(t2).then(() => S(s2, e2, t2));
  }
  queryObjectIds(e2, t2 = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e2) {
    return !(!e2.isWGS84 && !e2.isWebMercator) || !!this.featureDefinition.supportedCrs[e2.wkid];
  }
  _conformsToType(e2, t2) {
    const s2 = new RegExp(`^${t2}$`, "i");
    return e2.conformsTo.some((e3) => s2.test(e3)) ?? false;
  }
  _getCapabilities(e2, t2) {
    return { analytics: { supportsCacheHint: false }, attachment: null, data: { isVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: e2 }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: false, supportsDelete: false, supportsEditing: false, supportsChangeTracking: false, supportsQuery: false, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: false, supportsExceedsLimitStatistics: false, supportsAsyncConvert3D: false }, query: { maxRecordCount: t2, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: false, supportsCentroid: false, supportsDisjointSpatialRelationship: false, supportsDistance: false, supportsDistinct: false, supportsExtent: false, supportsFormatPBF: false, supportsGeometryProperties: false, supportsHavingClause: false, supportsHistoricMoment: false, supportsMaxRecordCountFactor: false, supportsOrderBy: false, supportsPagination: false, supportsPercentileStatistics: false, supportsQuantization: false, supportsQuantizationEditMode: false, supportsQueryByAnonymous: false, supportsQueryByOthers: false, supportsQueryGeometry: false, supportsResultType: false, supportsStandardizedQueriesOnly: false, supportsTopFeaturesQuery: false, supportsStatistics: false, supportsSpatialAggregationStatistics: false, supportedSpatialAggregationStatistics: { envelope: false, centroid: false, convexHull: false }, supportsDefaultSpatialReference: false, supportsFullTextSearch: false, supportsCompactGeometry: false, supportsSqlExpression: false, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: false, supportsOrderBy: false, supportsPagination: false, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, editing: { supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsGeometryUpdate: false, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsUploadWithItemId: false, supportsUpdateWithoutM: false, supportsAsyncApplyEdits: false, zDefault: void 0 } };
  }
  _getMaxRecordCount(e2) {
    const t2 = e2?.components?.parameters;
    return t2?.limit?.schema?.maximum ?? t2?.limitFeatures?.schema?.maximum;
  }
  _getStorageSpatialReference(e2) {
    const t2 = e2.storageCrs ?? h$1, s2 = x(t2);
    return null == s2 ? f$1.WGS84 : new f$1({ wkid: s2 });
  }
  _getSupportedSpatialReferences(e2, t2) {
    const s2 = "#/crs", r = e2.crs ?? [h$1], o2 = r.includes(s2) ? r.filter((e3) => e3 !== s2).concat(t2.crs ?? []) : r, p2 = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return o2.filter((e3) => !p2.test(e3));
  }
  async _loadOGCServices(e2, s2) {
    const r = null != s2 ? s2.signal : null, { apiKey: o2, collectionId: p2, customParameters: i$12, fields: y2, geometryType: f2, hasZ: h2, objectIdField: S2, timeInfo: C2, url: R } = e2, w = { fields: y2?.map((e3) => e3.toJSON()), geometryType: i.toJSON(f2), hasZ: h2 ?? false, objectIdField: S2, timeInfo: C2?.toJSON() }, x$1 = { apiKey: o2, customParameters: i$12, signal: r }, j$12 = await T(R, x$1), [v, F$1] = await Promise.all([I(j$12, x$1), F(j$12, x$1)]);
    if (!this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))
      throw new s$1("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const O = F$1.collections.find((e3) => e3.id === p2);
    if (!O)
      throw new s$1("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const D = this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await k(j$12, x$1) : null, T$1 = await j(O, w, x$1), A = this._getMaxRecordCount(D), _ = this._getCapabilities(T$1.hasZ, A), P = this._getStorageSpatialReference(O).toJSON(), b$12 = this._getSupportedSpatialReferences(O, F$1), q = new RegExp(`^${b}`, "i"), E = {};
    for (const t2 of b$12) {
      const e3 = x(t2);
      null != e3 && (E[e3] || (E[e3] = t2.replace(q, "")));
    }
    this.featureDefinition = { capabilities: _, collection: O, layerDefinition: T$1, spatialReference: P, supportedCrs: E };
  }
};
e([y()], h.prototype, "featureDefinition", void 0), e([y({ constructOnly: true })], h.prototype, "layer", void 0), e([y()], h.prototype, "type", void 0), h = e([c("esri.layers.graphics.sources.OGCFeatureSource")], h);
const M = s();
let B = class extends i$1(o(c$1(p(a(c$2(a$1(t(u$1(j$1(f(m$1(b$2)))))))))))) {
  constructor(e2) {
    super(e2), this.capabilities = null, this.collectionId = null, this.copyright = null, this.definitionExpression = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = true, this.legendEnabled = true, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = true, this.popupTemplate = null, this.screenSizePerspectiveEnabled = true, this.source = new h({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
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
    return new b$1();
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
    return this.load().then(() => this.source.queryFeatures(b$1.from(e2) || this.createQuery(), r)).then((e3) => (e3?.features?.forEach((e4) => {
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
e([y({ readOnly: true, json: { origins: { service: { read: true } } } })], B.prototype, "capabilities", void 0), e([y({ type: String, json: { write: true } })], B.prototype, "collectionId", void 0), e([y({ type: String })], B.prototype, "copyright", void 0), e([y({ readOnly: true })], B.prototype, "defaultPopupTemplate", null), e([y({ type: String })], B.prototype, "definitionExpression", void 0), e([y({ readOnly: true, type: String, json: { origins: { service: { name: "collection.description" } } } })], B.prototype, "description", void 0), e([y({ type: String })], B.prototype, "displayField", void 0), e([y({ type: Number })], B.prototype, "effectiveMaxRecordCount", null), e([y(f$2)], B.prototype, "elevationInfo", void 0), e([y({ type: [y$1], json: { origins: { service: { name: "layerDefinition.fields" } } } })], B.prototype, "fields", void 0), e([y(M.fieldsIndex)], B.prototype, "fieldsIndex", void 0), e([y({ readOnly: true, type: M$1, json: { origins: { service: { name: "layerDefinition.extent" } } } })], B.prototype, "fullExtent", void 0), e([y({ type: o$1.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: o$1.read } } } } })], B.prototype, "geometryType", void 0), e([y({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], B.prototype, "hasZ", void 0), e([y({ type: Boolean, readOnly: true })], B.prototype, "isTable", null), e([y({ type: [C], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$2 }, write: true } } } })], B.prototype, "labelingInfo", void 0), e([y(m$2)], B.prototype, "labelsVisible", void 0), e([y(c$3)], B.prototype, "legendEnabled", void 0), e([y({ type: Number })], B.prototype, "maxRecordCount", void 0), e([y({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], B.prototype, "objectIdField", void 0), e([y({ type: ["OGCFeatureLayer"] })], B.prototype, "operationalLayerType", void 0), e([y(y$2)], B.prototype, "popupEnabled", void 0), e([y({ type: k$1, json: { name: "popupInfo", write: true } })], B.prototype, "popupTemplate", void 0), e([y({ types: m$3, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: false }, "web-scene": { types: u, name: "layerDefinition.drawingInfo.renderer", write: true } }, name: "layerDefinition.drawingInfo.renderer", write: true } })], B.prototype, "renderer", null), e([y(p$3)], B.prototype, "screenSizePerspectiveEnabled", void 0), e([y({ readOnly: true })], B.prototype, "source", void 0), e([y({ readOnly: true, type: f$1, json: { origins: { service: { read: true } } } })], B.prototype, "spatialReference", void 0), e([y({ type: String, json: { write: { enabled: true, ignoreOrigin: true, isRequired: true }, origins: { service: { name: "collection.title" } } } })], B.prototype, "title", void 0), e([y({ readOnly: true, json: { read: false } })], B.prototype, "type", void 0), e([y({ type: String, readOnly: true })], B.prototype, "typeIdField", void 0), e([y({ type: [n] })], B.prototype, "types", void 0), e([y(d)], B.prototype, "url", void 0), B = e([c("esri.layers.OGCFeatureLayer")], B);
const V = B;
export {
  V as default
};
