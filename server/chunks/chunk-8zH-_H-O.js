import { eB as t$1, aB as f$1, m5 as h$1, dv as y, bJ as c$1, q9 as U, aV as e, aX as y$1, a_ as c$2, bZ as S$1, qa as u, qb as E, cU as s$1, ky as u$1, qc as c$3, qd as b, c8 as u$2, et as i$1, ce as d$1, cl as A$1, cb as C, bX as P$1, f6 as p$1, qe as I, qf as u$3, ez as t$2, eu as u$4, aO as s } from "./chunk-ejFG4zJ0.js";
import { c as P, b as b$1, T } from "./chunk-qr0t-oSA.js";
import { n as n$1 } from "./chunk-ZRKw_7qF.js";
import { h as h$2 } from "./chunk-QztbNmp9.js";
import { j as j$1 } from "./chunk-GTnGZnu1.js";
class t extends t$1 {
  constructor(e2, t2, s2, r, o, a2) {
    super(e2.usedMemory, e2.displayedFeatures, e2.totalFeatures, e2.maximumFeatures, e2.nodes, e2.core), this.storedFeatures = t2, this.totalVertices = s2, this.partial = r, this.mode = o, this.symbolComplexity = a2;
  }
}
class n {
  constructor(e2) {
    this._controller = e2, this._handle = new c((r) => e2.schedule(r));
  }
  destroy() {
    this._handle.destroy();
  }
  invoke(r, s2) {
    return r.buffer && 0 !== r.buffer.byteLength ? (r.options.sourceSpatialReference && r.options.sourceSpatialReference instanceof f$1 && (r.options = { ...r.options, sourceSpatialReference: r.options.sourceSpatialReference.toJSON() }), this._handle.invoke(r, s2).then((r2) => {
      let s3 = 0, n2 = 0;
      const c2 = f$1.fromJSON(r2.spatialReference);
      r2.spatialReference = c2;
      const i2 = async (t2) => {
        const l = r2.fields;
        if (l) {
          for (; s3 < l.length; )
            if (l[s3] = y.fromJSON(l[s3]), s3++, t2.madeProgress())
              return this._controller.reschedule((e2) => i2(e2));
        }
        const p2 = r2.features;
        for (; n2 < p2.length; ) {
          const r3 = p2[n2];
          ++n2, r3.uid = c$1.generateUID();
          const s4 = r3.geometry;
          if (null != s4 && (s4.spatialReference = c2, a(s4), t2.madeProgress()))
            return this._controller.reschedule((e2) => i2(e2));
        }
        return r2;
      };
      return this._controller.schedule((e2) => i2(e2));
    })) : Promise.resolve(null);
  }
}
function a(e2) {
  switch (e2.type) {
    case "polyline":
      e2.paths.reduce((e3, r) => e3 + r.length, 0) < U && (e2.paths = e2.hasZ || e2.hasM ? e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
      break;
    case "polygon":
      e2.rings.reduce((e3, r) => e3 + r.length, 0) < U && (e2.rings = e2.hasZ || e2.hasM ? e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
  }
}
class c extends h$1 {
  constructor(e2) {
    super("PBFDecoderWorker", "_parseFeatureQuery", { _parseFeatureQuery: (e3) => [e3.buffer] }, e2);
  }
}
let p = class extends S$1 {
  constructor(e2) {
    super(e2);
  }
  get implicitFields() {
    const e2 = this.layer.outFields?.includes("*");
    if (!e2)
      return /* @__PURE__ */ new Set();
    const r = new Set(this.layerView.requiredFields), t2 = new Set(this.layerView.availableFields);
    return u(t2, r);
  }
  get queryFeaturesDehydrated() {
    const { layer: e2 } = this, r = e2.capabilities, t2 = r && r.query, u2 = t2 && t2.supportsFormatPBF, i2 = e2.parsedUrl;
    if (u2) {
      null == this._decoder && (this._decoder = new n(this.controller));
      const r2 = { sourceSpatialReference: e2.spatialReference?.toJSON() ?? null, applyTransform: true, maxStringAttributeFields: this.implicitFields, maxStringAttributeLength: f };
      return (e3, t3) => E(i2, e3, "pbf", this._createRequestOptions(t3)).then((e4) => (s$1(t3), null != this._decoder ? this._decoder.invoke({ buffer: e4.data, options: r2 }, t3.signal) : Promise.reject(u$1())));
    }
    return (r2, t3) => c$3(i2, r2, e2.spatialReference, this._createRequestOptions(t3)).then((e3) => b(e3.data, { maxStringAttributeFields: this.implicitFields, maxStringAttributeLength: f }));
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
  destroy() {
    this._decoder = u$2(this._decoder);
  }
  _createRequestOptions(e2) {
    return { ...e2, query: { ...this.layer.customParameters, token: this.layer.apiKey, ...e2?.query } };
  }
};
e([y$1({ constructOnly: true })], p.prototype, "layer", void 0), e([y$1({ constructOnly: true })], p.prototype, "layerView", void 0), e([y$1({ constructOnly: true })], p.prototype, "controller", void 0), e([y$1({ readOnly: true })], p.prototype, "implicitFields", null), e([y$1({ readOnly: true })], p.prototype, "queryFeaturesDehydrated", null), p = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")], p);
let d = class extends S$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.layer.queryFeatures(e2, r);
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
};
e([y$1({ constructOnly: true })], d.prototype, "layer", void 0), e([y$1({ readOnly: true })], d.prototype, "queryFeaturesDehydrated", null), d = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")], d);
let m = class extends S$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.layer.queryFeatures(e2, r);
  }
};
e([y$1({ constructOnly: true })], m.prototype, "layer", void 0), m = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")], m);
let h = class extends S$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.source.queryFeaturesJSON(e2, r).then(b, (t2) => {
      if (t2 && "query-features-json:unsupported" === t2.name)
        return this.layer.queryFeatures(e2, r);
      throw t2;
    });
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
};
function F(e2, r) {
  const { layer: t2 } = e2;
  return "feature" === t2.type && "feature-layer" === t2.source.type ? null != t2.infoFor3D ? new d({ layer: t2 }) : new p({ layer: t2, layerView: e2, controller: r }) : "feature" === t2.type && "memory" === t2.source.type || "csv" === t2.type || "geojson" === t2.type || "oriented-imagery" === t2.type || "wfs" === t2.type ? new h({ layer: t2, source: t2.source }) : "ogc-feature" === t2.type ? new m({ layer: t2 }) : null;
}
e([y$1({ constructOnly: true })], h.prototype, "layer", void 0), e([y$1({ constructOnly: true })], h.prototype, "source", void 0), h = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")], h);
const f = 1024;
class i {
  constructor(e2) {
    this._memoryCache = null, this._capabilities = null;
    const r = e2.layerView.layer;
    this._layerView = e2.layerView, this.objectIdField = r.objectIdField, this.globalIdField = "globalIdField" in r ? r.globalIdField : null, this._returnZ = e2.returnZ, this._returnM = e2.returnM;
    const i2 = this._layerView.view.resourceController;
    this.query = F(this._layerView, i2.normal), i2 && this._memoryCacheEnabled && (this._memoryCache = i2.memoryController.newCache(`fl-${r.uid}`));
  }
  get _memoryCacheEnabled() {
    switch (this._layerView.layer.source.type) {
      case "feature-layer":
      case "ogc-feature":
      case "oriented-imagery":
        return true;
      case "csv":
      case "geojson":
      case "memory":
      case "wfs":
        return false;
    }
  }
  destroy() {
    this._memoryCache = u$2(this._memoryCache), this.query.destroy();
  }
  createQuery() {
    const e2 = this._layerView.layer.createQuery();
    return e2.outFields = this._layerView.availableFields, e2.returnZ = this._returnZ, e2.returnM = this._returnM, e2.outSpatialReference = this.tilingScheme.spatialReference, e2;
  }
  get memoryCache() {
    return this._memoryCache;
  }
  get viewingMode() {
    return this._layerView.view.state.viewingMode;
  }
  get tilingScheme() {
    return this._layerView.view.featureTiles.tilingScheme;
  }
  get scheduler() {
    const e2 = this._layerView.view.resourceController;
    return e2 ? e2.scheduler : null;
  }
  get geometryType() {
    return this._layerView.layer.geometryType;
  }
  get fullExtent() {
    return this._layerView.layer.fullExtent;
  }
  get tileMaxRecordCount() {
    return this._layerView.layer.capabilities.query.tileMaxRecordCount;
  }
  get maxRecordCount() {
    return this._layerView.layer.capabilities.query.maxRecordCount;
  }
  get capabilities() {
    return null != this._capabilities || (this._capabilities = P(this._layerView.layer)), this._capabilities;
  }
  logFetchError(e2, r) {
    e2.error("#fetchTile()", this._layerView.layer, r?.message ?? r);
  }
}
let M = class extends i$1(b$1(j$1(n$1(u$4)))) {
  constructor(e2) {
    super(e2), this._controllerTotal = 0, this._processorTotal = 0, this._needsRefresh = false, this.suspendResumeExtentMode = "data";
  }
  initialize() {
    this.addHandles([d$1(() => this._updatingRequiredFieldsPromise, (e2) => this._updatingHandles.addPromise(e2), A$1), d$1(() => ({ controller: this.controller, suspended: this.suspended }), ({ controller: e2, suspended: r }) => {
      e2 && !r && this._needsRefresh && (e2.refetch(), this._needsRefresh = false);
    })]);
  }
  destroy() {
    this._updatingHandles.removeAll(), this._fetcherContext = u$2(this._fetcherContext);
  }
  get maximumNumberOfFeatures() {
    return this.controller?.maximumNumberOfFeatures ?? this._get("maximumNumberOfFeatures");
  }
  set maximumNumberOfFeatures(e2) {
    this._set("maximumNumberOfFeatures", e2), this.controller && (this.controller.maximumNumberOfFeatures = e2);
  }
  get maximumNumberOfFeaturesExceeded() {
    return !!this.controller && !(this.suspended || !this.controller.maximumNumberOfFeaturesExceeded);
  }
  get updatingProgressValue() {
    let e2 = 0;
    if (this.controller?.updating) {
      const r2 = this.controller.updatingRemaining, t2 = Math.max(this.controller.updatingTotal, this._controllerTotal);
      t2 > 0 && (e2 = (t2 - r2) / t2, this._controllerTotal = t2);
    }
    let r = 0;
    if (this.processor?.updating) {
      const e3 = this.processor.updatingRemaining, t2 = Math.max(e3, this._processorTotal);
      t2 > 0 && (r = (t2 - e3) / t2, this._processorTotal = t2);
    }
    return 0.5 * (e2 + r);
  }
  get updatePolicy() {
    if (!this.controller)
      return C.ASYNC;
    switch (this.controller.mode) {
      case "snapshot": {
        const e2 = j.get(this.layer.geometryType);
        return null == e2 || this.controller.serviceDataCount > e2 ? C.ASYNC : C.SYNC;
      }
      case "tiles":
        return C.ASYNC;
    }
  }
  get hasZ() {
    const e2 = this.layer, r = e2.capabilities && e2.capabilities.data;
    return !(!r || !r.supportsZ) && ("returnZ" in e2 && null != e2.returnZ ? e2.returnZ : r.supportsZ);
  }
  get hasM() {
    const e2 = this.layer, r = e2.capabilities && e2.capabilities.data;
    return !(!r || !r.supportsM) && ("returnM" in e2 && null != e2.returnM && e2.returnM);
  }
  setVisibility(e2, r) {
    this.processor?.setObjectIdVisibility(e2, r);
  }
  createQuery() {
    return super.createQuery();
  }
  queryFeatures(e2, r) {
    const t2 = () => super.queryFeatures(e2, r);
    return "mesh" === this.layer.geometryType ? this._queryFeaturesMesh(this._ensureQuery(e2), t2) : t2();
  }
  beforeSetController(e2) {
    e2.maximumNumberOfFeatures = this.maximumNumberOfFeatures;
  }
  createController() {
    this._fetcherContext = new i({ layerView: this, returnZ: this.hasZ, returnM: this.hasM });
    const e2 = new T({ layerView: this, context: this._fetcherContext, graphics: new h$2(), extent: this.clippingExtent });
    return this._updatingHandles.add(() => e2.serviceDataExtent, (e3) => {
      this.processor && (this.processor.dataExtent = e3);
    }, P$1), this.addHandles(d$1(() => this.suspended, (r) => {
      r ? e2.suspend() : e2.resume();
    }, A$1)), this._updatingHandles.add(() => this.processor?.displayFeatureLimit, (r) => e2.displayFeatureLimit = r, P$1), this.addHandles(p$1(() => !this.updating, () => {
      this._controllerTotal = 0, this._processorTotal = 0;
    })), e2;
  }
  async doRefresh(e2) {
    const { controller: r, processor: t2, suspended: s2 } = this;
    e2 && r && (s2 ? this._needsRefresh = true : (r.refetch(), this._needsRefresh = false)), t2.refreshFilter();
  }
  _popupFeatureHasRequiredFields(e2, r) {
    if (!super._popupFeatureHasRequiredFields(e2, r))
      return false;
    const t2 = I(e2, this.layer.objectIdField);
    if (null == t2)
      return true;
    const s2 = this.controller.getMissingAttributesForFeature(t2);
    if (null == s2)
      return true;
    for (const o of r)
      if (s2.has(o))
        return false;
    return true;
  }
  get usedMemory() {
    return (this.processor?.usedMemory ?? 0) + (this.controller?.memoryForUnusedFeatures ?? 0);
  }
  get unloadedMemory() {
    const e2 = this.processor?.unprocessedMemoryEstimate ?? 0, r = this.controller?.expectedFeatureDiff ?? 0, t2 = this.processor?.loadedFeatures ?? 0, s2 = t2 + r > 0 ? t2 / (t2 + r) : 1;
    return e2 + r * (this.processor?.usedMemoryPerFeature ?? 0) * s2;
  }
  get ignoresMemoryFactor() {
    return this.controller?.hasMaximumNumberOfFeaturesOverride;
  }
  async _queryFeaturesMesh(e2, r) {
    await this._validateQueryFeaturesMesh(e2);
    const t2 = await r();
    if (e2?.outStatistics || null == this.graphics3DProcessor)
      return t2;
    const s2 = this.layer.objectIdField, o = this.graphics3DProcessor.graphics3DGraphicsByObjectID, i2 = [];
    for (const a2 of t2.features)
      if (a2.geometry) {
        const e3 = o.get(a2.attributes[s2]);
        e3 && (a2.geometry = u$3(e3.graphic.geometry), i2.push(a2));
      } else
        i2.push(a2);
    return t2.features = i2, t2;
  }
  async _validateQueryFeaturesMesh(e2) {
    if (!e2)
      return;
    const t2 = (e3) => {
      throw new s("feature-layer-view:unsupported-query", `Queries on Mesh feature collection layers do not support '${e3}'`);
    }, s$12 = ["quantizationParameters", "geometryPrecision", "maxAllowableOffset"];
    for (const r of s$12)
      null != e2[r] && t2(r);
    "returnM" in e2 && e2.returnM && t2("returnM"), "returnCentroid" in e2 && e2.returnCentroid && t2("returnCentroid"), null == e2.outSpatialReference || e2.outSpatialReference.equals(this.view.spatialReference) || t2("outSpatialReference");
  }
  get performanceInfo() {
    const e2 = this.controller?.displayFeatureLimit, r = null != e2 ? e2.averageSymbolComplexity : void 0, t$12 = null != r ? `f:${r.verticesPerFeature},v:${r.verticesPerCoordinate}` : "n/a";
    return new t(super.performanceInfo, this.controller?.performanceInfo?.storedFeatures ?? 0, this.controller?.performanceInfo?.totalVertices ?? 0, this.maximumNumberOfFeaturesExceeded, this.controller?.mode ?? "n/a", t$12);
  }
  get test() {
    return { updatePolicy: this.updatePolicy, controller: this.controller, loadedGraphics: this.controller?.graphics, ...this.getTest() };
  }
};
e([y$1()], M.prototype, "layer", void 0), e([y$1()], M.prototype, "controller", void 0), e([y$1()], M.prototype, "_controllerTotal", void 0), e([y$1()], M.prototype, "_processorTotal", void 0), e([y$1()], M.prototype, "_needsRefresh", void 0), e([y$1()], M.prototype, "maximumNumberOfFeatures", null), e([y$1()], M.prototype, "maximumNumberOfFeaturesExceeded", null), e([y$1(t$2)], M.prototype, "updatingProgress", void 0), e([y$1({ readOnly: true })], M.prototype, "updatingProgressValue", null), e([y$1({ readOnly: true })], M.prototype, "updatePolicy", null), e([y$1({ readOnly: true })], M.prototype, "hasZ", null), e([y$1({ readOnly: true })], M.prototype, "hasM", null), e([y$1()], M.prototype, "suspendResumeExtentMode", void 0), M = e([c$2("esri.views.3d.layers.FeatureLayerViewBase3D")], M);
const j = /* @__PURE__ */ new Map([["point", 5e3], ["polygon", 500], ["polyline", 1e3]]), w = M;
export {
  w
};
