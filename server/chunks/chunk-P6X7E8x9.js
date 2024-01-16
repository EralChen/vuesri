import { cZ as f$1, mj as h$1, d4 as y$1, bf as c$1, nL as U, bo as e, bp as y, br as c$2, bs as g$1, nM as E, b1 as s$1, kc as u, nN as c$3, nO as d$1, bD as u$1, dO as a$1, bJ as d$2, bR as A, bG as C, bn as P$1, eg as p$1, nP as u$2, dU as t, dP as u$3, aM as s$2 } from "./chunk-KFNcxJaF.js";
import { I, E as E$1, T } from "./chunk-K_eIouts.js";
import { n as n$1 } from "./chunk-7Z1hjEcP.js";
import { r } from "./chunk-F2pifch3.js";
import { P } from "./chunk-eM88eykE.js";
class a {
  constructor(e2) {
    this._controller = e2, this._handle = new i$1((r2) => e2.schedule(r2));
  }
  destroy() {
    this._handle.destroy();
  }
  invoke(r2, s) {
    return r2.buffer && 0 !== r2.buffer.byteLength ? (r2.options.sourceSpatialReference && r2.options.sourceSpatialReference instanceof f$1 && (r2.options = { ...r2.options, sourceSpatialReference: r2.options.sourceSpatialReference.toJSON() }), this._handle.invoke(r2, s).then((r3) => {
      let s2 = 0, a2 = 0;
      const i3 = f$1.fromJSON(r3.spatialReference);
      r3.spatialReference = i3;
      const l = async (t2) => {
        if (r3.fields) {
          for (; s2 < r3.fields.length; )
            if (r3.fields[s2] = y$1.fromJSON(r3.fields[s2]), s2++, t2.madeProgress())
              return this._controller.reschedule((e2) => l(e2));
        }
        for (; a2 < r3.features.length; ) {
          const s3 = r3.features[a2];
          if (++a2, s3.uid = c$1.generateUID(), null != s3.geometry && (s3.geometry.spatialReference = i3, n(s3.geometry), t2.madeProgress()))
            return this._controller.reschedule((e2) => l(e2));
        }
        return r3;
      };
      return this._controller.schedule((e2) => l(e2));
    })) : Promise.resolve(null);
  }
}
function n(e2) {
  switch (e2.type) {
    case "polyline":
      e2.paths.reduce((e3, r2) => e3 + r2.length, 0) < U && (e2.paths = e2.hasZ || e2.hasM ? e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
      break;
    case "polygon":
      e2.rings.reduce((e3, r2) => e3 + r2.length, 0) < U && (e2.rings = e2.hasZ || e2.hasM ? e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
  }
}
let i$1 = class i extends h$1 {
  constructor(e2) {
    super("PBFDecoderWorker", "_parseFeatureQuery", { _parseFeatureQuery: (e3) => [e3.buffer] }, e2);
  }
};
let p = class extends g$1 {
  constructor(e2) {
    super(e2);
  }
  get queryFeaturesDehydrated() {
    const e2 = this.layer.capabilities, r2 = e2 && e2.query, t2 = r2 && r2.supportsFormatPBF, u$12 = this.layer.parsedUrl;
    if (t2) {
      null == this._decoder && (this._decoder = new a(this.controller));
      const e3 = { sourceSpatialReference: this.layer.spatialReference?.toJSON() ?? null, applyTransform: true, maxStringAttributeLength: 1024 };
      return (r3, t3) => E(u$12, r3, "pbf", this._createRequestOptions(t3)).then((r4) => (s$1(t3), null != this._decoder ? this._decoder.invoke({ buffer: r4.data, options: e3 }, t3.signal) : Promise.reject(u())));
    }
    return (e3, r3) => c$3(u$12, e3, this.layer.spatialReference, this._createRequestOptions(r3)).then((e4) => d$1(e4.data));
  }
  queryFeatureCount(e2, r2) {
    return this.layer.queryFeatureCount(e2, r2);
  }
  destroy() {
    this._decoder = u$1(this._decoder);
  }
  _createRequestOptions(e2) {
    return { ...e2, query: { ...this.layer.customParameters, token: this.layer.apiKey, ...e2?.query } };
  }
};
e([y({ constructOnly: true })], p.prototype, "layer", void 0), e([y({ constructOnly: true })], p.prototype, "controller", void 0), e([y({ readOnly: true })], p.prototype, "queryFeaturesDehydrated", null), p = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")], p);
let c = class extends g$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r2) {
    return this.layer.queryFeatures(e2, r2);
  }
  queryFeatureCount(e2, r2) {
    return this.layer.queryFeatureCount(e2, r2);
  }
};
e([y({ constructOnly: true })], c.prototype, "layer", void 0), e([y({ readOnly: true })], c.prototype, "queryFeaturesDehydrated", null), c = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")], c);
let d = class extends g$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r2) {
    return this.layer.queryFeatures(e2, r2);
  }
};
e([y({ constructOnly: true })], d.prototype, "layer", void 0), d = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")], d);
let h = class extends g$1 {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r2) {
    return this.source.queryFeaturesJSON(e2, r2).then(d$1, (t2) => {
      if (t2 && "query-features-json:unsupported" === t2.name)
        return this.layer.queryFeatures(e2, r2);
      throw t2;
    });
  }
  queryFeatureCount(e2, r2) {
    return this.layer.queryFeatureCount(e2, r2);
  }
};
function m(e2, r2) {
  return "feature" === e2.type && "feature-layer" === e2.source.type ? null != e2.infoFor3D ? new c({ layer: e2 }) : new p({ layer: e2, controller: r2 }) : "feature" === e2.type && "memory" === e2.source.type || "csv" === e2.type || "geojson" === e2.type || "oriented-imagery" === e2.type || "wfs" === e2.type ? new h({ layer: e2, source: e2.source }) : "ogc-feature" === e2.type ? new d({ layer: e2 }) : null;
}
e([y({ constructOnly: true })], h.prototype, "layer", void 0), e([y({ constructOnly: true })], h.prototype, "source", void 0), h = e([c$2("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")], h);
class i2 {
  constructor(e2) {
    this._memoryCache = null, this._capabilities = null;
    const r2 = e2.layerView.layer;
    this._layerView = e2.layerView, this.objectIdField = r2.objectIdField, this.globalIdField = "globalIdField" in r2 ? r2.globalIdField : null, this._returnZ = e2.returnZ, this._returnM = e2.returnM;
    const i3 = this._layerView.view.resourceController;
    this.query = m(r2, i3.normal), i3 && this._memoryCacheEnabled && (this._memoryCache = i3.memoryController.newCache(`fl-${r2.uid}`));
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
    this._memoryCache = u$1(this._memoryCache), this.query.destroy();
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
    return null != this._capabilities || (this._capabilities = I(this._layerView.layer)), this._capabilities;
  }
  logFetchError(e2, r2) {
    e2.error("#fetchTile()", this._layerView.layer, r2?.message ?? r2);
  }
}
let b = class extends a$1(E$1(P(n$1(u$3)))) {
  constructor(e2) {
    super(e2), this._controllerTotal = 0, this._processorTotal = 0, this.suspendResumeExtentMode = "data";
  }
  initialize() {
    this.addHandles(d$2(() => this._updatingRequiredFieldsPromise, (e2) => this._updatingHandles.addPromise(e2), A));
  }
  destroy() {
    this._updatingHandles.removeAll(), this._fetcherContext = u$1(this._fetcherContext);
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
      const r3 = this.controller.updatingRemaining, t2 = Math.max(this.controller.updatingTotal, this._controllerTotal);
      t2 > 0 && (e2 = (t2 - r3) / t2, this._controllerTotal = t2);
    }
    let r2 = 0;
    if (this.processor?.updating) {
      const e3 = this.processor.updatingRemaining, t2 = Math.max(e3, this._processorTotal);
      t2 > 0 && (r2 = (t2 - e3) / t2, this._processorTotal = t2);
    }
    return 0.5 * (e2 + r2);
  }
  get updatePolicy() {
    if (!this.controller)
      return C.ASYNC;
    switch (this.controller.mode) {
      case "snapshot": {
        const e2 = M.get(this.layer.geometryType);
        return null == e2 || this.controller.serviceDataCount > e2 ? C.ASYNC : C.SYNC;
      }
      case "tiles":
        return C.ASYNC;
    }
  }
  get hasZ() {
    const e2 = this.layer, r2 = e2.capabilities && e2.capabilities.data;
    return !(!r2 || !r2.supportsZ) && ("returnZ" in e2 && null != e2.returnZ ? e2.returnZ : r2.supportsZ);
  }
  get hasM() {
    const e2 = this.layer, r2 = e2.capabilities && e2.capabilities.data;
    return !(!r2 || !r2.supportsM) && ("returnM" in e2 && null != e2.returnM && e2.returnM);
  }
  setVisibility(e2, r2) {
    this.processor?.setObjectIdVisibility(e2, r2);
  }
  createQuery() {
    return super.createQuery();
  }
  queryFeatures(e2, r2) {
    const t2 = () => super.queryFeatures(e2, r2);
    return "mesh" === this.layer.geometryType ? this._queryFeaturesMesh(this._ensureQuery(e2), t2) : t2();
  }
  beforeSetController(e2) {
    e2.maximumNumberOfFeatures = this.maximumNumberOfFeatures;
  }
  createController() {
    this._fetcherContext = new i2({ layerView: this, returnZ: this.hasZ, returnM: this.hasM });
    const e2 = new T({ layerView: this, context: this._fetcherContext, graphics: new r(), extent: this.clippingExtent });
    return this._updatingHandles.add(() => e2.serviceDataExtent, (e3) => {
      this.processor && (this.processor.dataExtent = e3);
    }, P$1), this.addHandles(d$2(() => this.suspended, (r2) => {
      r2 ? e2.suspend() : e2.resume();
    }, A)), this._updatingHandles.add(() => this.processor?.displayFeatureLimit, (r2) => e2.displayFeatureLimit = r2, P$1), this.addHandles(p$1(() => !this.updating, () => {
      this._controllerTotal = 0, this._processorTotal = 0;
    })), e2;
  }
  async doRefresh(e2) {
    e2 && !this.suspended && this.controller && this.controller.refetch(), this.processor.refreshFilter();
  }
  get usedMemory() {
    return (this.processor?.usedMemory ?? 0) + (this.controller?.memoryForUnusedFeatures ?? 0);
  }
  get unloadedMemory() {
    const e2 = this.processor?.unprocessedMemoryEstimate ?? 0, r2 = this.controller?.expectedFeatureDiff ?? 0, t2 = this.processor?.loadedFeatures ?? 0, s = t2 + r2 > 0 ? t2 / (t2 + r2) : 1;
    return e2 + r2 * (this.processor?.usedMemoryPerFeature ?? 0) * s;
  }
  get ignoresMemoryFactor() {
    return this.controller?.hasMaximumNumberOfFeaturesOverride;
  }
  async _queryFeaturesMesh(e2, r2) {
    await this._validateQueryFeaturesMesh(e2);
    const t2 = await r2();
    if (e2?.outStatistics || null == this.graphics3DProcessor)
      return t2;
    const s = this.layer.objectIdField, o = this.graphics3DProcessor.graphics3DGraphicsByObjectID, i3 = [];
    for (const a2 of t2.features)
      if (a2.geometry) {
        const e3 = o.get(a2.attributes[s]);
        e3 && (a2.geometry = u$2(e3.graphic.geometry), i3.push(a2));
      } else
        i3.push(a2);
    return t2.features = i3, t2;
  }
  async _validateQueryFeaturesMesh(e2) {
    if (!e2)
      return;
    const t2 = (e3) => {
      throw new s$2("feature-layer-view:unsupported-query", `Queries on Mesh feature collection layers do not support '${e3}'`);
    }, s = ["quantizationParameters", "geometryPrecision", "maxAllowableOffset"];
    for (const r2 of s)
      null != e2[r2] && t2(r2);
    "returnM" in e2 && e2.returnM && t2("returnM"), "returnCentroid" in e2 && e2.returnCentroid && t2("returnCentroid"), null == e2.outSpatialReference || e2.outSpatialReference.equals(this.view.spatialReference) || t2("outSpatialReference");
  }
  get performanceInfo() {
    const e2 = this.controller?.displayFeatureLimit, r2 = null != e2 ? e2.averageSymbolComplexity : void 0, t2 = null != r2 ? `f:${r2.verticesPerFeature},v:${r2.verticesPerCoordinate}` : "n/a";
    return { ...this._getResourceInfo(), partial: this.maximumNumberOfFeaturesExceeded, mode: this.controller?.mode ?? "n/a", symbolComplexity: t2, nodes: this.controller?.tileDescriptors.length ?? 0, ...this.controller?.performanceInfo ?? { storedFeatures: 0, totalVertices: 0 } };
  }
  get test() {
    return { updatePolicy: this.updatePolicy, controller: this.controller, loadedGraphics: this.controller?.graphics };
  }
};
e([y()], b.prototype, "layer", void 0), e([y()], b.prototype, "controller", void 0), e([y()], b.prototype, "_controllerTotal", void 0), e([y()], b.prototype, "_processorTotal", void 0), e([y()], b.prototype, "maximumNumberOfFeatures", null), e([y()], b.prototype, "maximumNumberOfFeaturesExceeded", null), e([y(t)], b.prototype, "updatingProgress", void 0), e([y({ readOnly: true })], b.prototype, "updatingProgressValue", null), e([y({ readOnly: true })], b.prototype, "updatePolicy", null), e([y({ readOnly: true })], b.prototype, "hasZ", null), e([y({ readOnly: true })], b.prototype, "hasM", null), e([y()], b.prototype, "suspendResumeExtentMode", void 0), b = e([c$2("esri.views.3d.layers.FeatureLayerViewBase3D")], b);
const M = /* @__PURE__ */ new Map([["point", 5e3], ["polygon", 500], ["polyline", 1e3]]), _ = b;
export {
  _
};
