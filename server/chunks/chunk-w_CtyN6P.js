import { bo as e, bp as y, br as c, cO as f$1, j4 as c$1, j5 as p$1, cB as a, j7 as a$1, cD as t$1, cC as f, ck as l, cl as u$1, cm as j, cn as m$1, j3 as o, jk as i$1, cZ as f$2, ej as k, aM as s$1, cq as a$2, j8 as p$2, jl as o$1, bb as s$2, jm as D, h3 as o$2, eq as t$2, j9 as p$3, bQ as b, iL as A, a$ as j$1, d4 as y$1, ja as g, cz as t$3, jn as h, ap as M$1, jd as m, jb as C, jc as i$2, cH as c$2, jo as T, jp as S, jq as T$1, je as y$2, d0 as k$1, jf as m$2, jg as u, ct as o$3, b8 as a$3, jh as p$4, cv as d, jj as s, bN as b$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t;
let i = t = class extends f$1 {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new t({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
e([y({ type: Number, json: { write: true } })], i.prototype, "age", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "ageReceived", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "displayCount", void 0), e([y({ type: Number, json: { write: true } })], i.prototype, "maxObservations", void 0), i = t = e([c("esri.layers.support.PurgeOptions")], i);
const p = i;
const Y = s();
function Z(e2, t2) {
  return new s$1("layer:unsupported", `Layer (${e2.title}, ${e2.id}) of type '${e2.declaredClass}' ${t2}`, { layer: e2 });
}
let ee = class extends c$1(p$1(a(a$1(t$1(f(l(u$1(j(m$1(o(i$1(b$1)))))))))))) {
  constructor(...e2) {
    super(...e2), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.outFields = ["*"], this.popupEnabled = true, this.popupTemplate = null, this.purgeOptions = new p(), this.refreshInterval = 0, this.screenSizePerspectiveEnabled = true, this.sourceJSON = null, this.spatialReference = f$2.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.useViewTime = true, this.webSocketUrl = null, this._debouncedSaveOperations = k(async (e3, t2, r) => {
      const { save: i2, saveAs: o2 } = await import("./chunk-2_zpPNwr.js");
      switch (e3) {
        case A.SAVE:
          return i2(this, t2);
        case A.SAVE_AS:
          return o2(this, r, t2);
      }
    });
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? { url: e2, ...t2 } : e2;
  }
  load(e2) {
    if (!("WebSocket" in globalThis))
      return this.addResolvingPromise(Promise.reject(new s$1("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const t2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e2).catch(a$2).then(() => this._fetchService(t2))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e2) {
    const t2 = this._normalizeFeatureReduction(e2);
    this._set("featureReduction", t2);
  }
  set renderer(e2) {
    p$2(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  readRenderer(e2, t2, i2) {
    t2 = t2.layerDefinition || t2;
    const o2 = t2.drawingInfo?.renderer;
    if (o2) {
      const e3 = o$1(o2, t2, i2) || void 0;
      return e3 || s$2.getLogger(this).error("Failed to create renderer", { rendererDefinition: t2.drawingInfo.renderer, layer: this, context: i2 }), e3;
    }
    return D(t2, i2);
  }
  async connect(e2) {
    const [{ createConnection: t2 }] = await Promise.all([import("./chunk-uPuSzOAM.js"), this.load()]), r = this.geometryType ? o$2.toJSON(this.geometryType) : null, { customParameters: i2 = null, definitionExpression: o2 = null, geometryDefinition: s2 = null, maxReconnectionAttempts: n = 0, maxReconnectionInterval: a2 = 20, spatialReference: l2 = this.spatialReference } = e2 || this.createConnectionParameters(), d2 = t2(this.parsedUrl, this.spatialReference, l2, r, { geometry: s2, where: o2 }, n, a2, i2 ?? void 0), m2 = t$2([this.on("send-message-to-socket", (e3) => d2.sendMessageToSocket(e3)), this.on("send-message-to-client", (e3) => d2.sendMessageToClient(e3))]);
    return d2.once("destroy", m2.remove), d2;
  }
  createConnectionParameters() {
    return { spatialReference: this.spatialReference, customParameters: this.customParameters, definitionExpression: this.definitionExpression, geometryDefinition: this.geometryDefinition, maxReconnectionAttempts: this.maxReconnectionAttempts, maxReconnectionInterval: this.maxReconnectionInterval };
  }
  createPopupTemplate(e2) {
    return p$3(this, e2);
  }
  createQuery() {
    const e2 = new b();
    return e2.returnGeometry = true, e2.outFields = ["*"], e2.where = this.definitionExpression || "1=1", e2;
  }
  getFieldDomain(e2, t2) {
    if (!this.fields)
      return null;
    let r = null;
    return this.fields.some((t3) => (t3.name === e2 && (r = t3.domain), !!r)), r;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  serviceSupportsSpatialReference(e2) {
    return true;
  }
  sendMessageToSocket(e2) {
    this.emit("send-message-to-socket", e2);
  }
  sendMessageToClient(e2) {
    this.emit("send-message-to-client", e2);
  }
  async save(e2) {
    return this._debouncedSaveOperations(A.SAVE, e2);
  }
  async saveAs(e2, t2) {
    return this._debouncedSaveOperations(A.SAVE_AS, t2, e2);
  }
  write(e2, t2) {
    const r = t2?.messages;
    return this.webSocketUrl ? (r?.push(Z(this, "using a custom websocket connection cannot be written to web scenes and web maps")), null) : this.parsedUrl ? super.write(e2, t2) : (r?.push(Z(this, "using a client-side only connection without a url cannot be written to web scenes and web maps")), null);
  }
  async _fetchService(e2) {
    if (!!!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: t2 } = await j$1(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, ...this.parsedUrl.query }, responseType: "json", signal: e2 });
        this.sourceJSON = t2;
      }
    } else {
      if (!this.timeInfo?.trackIdField)
        throw new s$1("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField) {
        const e3 = this.fields.find((e4) => "oid" === e4.type)?.name;
        if (!e3)
          throw new s$1("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        this.objectIdField = e3;
      }
      if (!this.fields)
        throw new s$1("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (this.fields.some((e3) => e3.name === this.objectIdField) || this.fields.push(new y$1({ name: this.objectIdField, alias: this.objectIdField, type: "oid" })), !this.geometryType)
        throw new s$1("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return this.read(this.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl }), p$2(this.renderer, this.fieldsIndex), g(this.timeInfo, this.fieldsIndex), this.objectIdField || (this.objectIdField = "__esri_stream_id__"), t$3(this, { origin: "service" });
  }
};
e([y({ type: String })], ee.prototype, "copyright", void 0), e([y({ readOnly: true })], ee.prototype, "defaultPopupTemplate", null), e([y({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], ee.prototype, "definitionExpression", void 0), e([y({ type: String })], ee.prototype, "displayField", void 0), e([y({ type: h })], ee.prototype, "elevationInfo", void 0), e([y({ json: { origins: { "web-map": { read: false, write: false }, "portal-item": { read: false, write: false }, "web-scene": { read: false, write: false } } } })], ee.prototype, "featureReduction", null), e([y(Y.fields)], ee.prototype, "fields", void 0), e([y(Y.fieldsIndex)], ee.prototype, "fieldsIndex", void 0), e([y({ type: M$1, json: { name: "layerDefinition.definitionGeometry", write: true } })], ee.prototype, "geometryDefinition", void 0), e([y({ type: o$2.apiValues, json: { read: { reader: o$2.read } } })], ee.prototype, "geometryType", void 0), e([y(m)], ee.prototype, "labelsVisible", void 0), e([y({ type: [C], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: i$2 }, write: true } })], ee.prototype, "labelingInfo", void 0), e([y(c$2)], ee.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"], json: { origins: { "portal-item": { read: false, write: false } } } })], ee.prototype, "listMode", void 0), e([y({ type: T })], ee.prototype, "maxReconnectionAttempts", void 0), e([y({ type: T })], ee.prototype, "maxReconnectionInterval", void 0), e([y(S)], ee.prototype, "maxScale", void 0), e([y(T$1)], ee.prototype, "minScale", void 0), e([y({ type: String })], ee.prototype, "objectIdField", void 0), e([y({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], ee.prototype, "operationalLayerType", void 0), e([y({ readOnly: true })], ee.prototype, "outFields", void 0), e([y(y$2)], ee.prototype, "popupEnabled", void 0), e([y({ type: k$1, json: { name: "popupInfo", write: true } })], ee.prototype, "popupTemplate", void 0), e([y({ type: p })], ee.prototype, "purgeOptions", void 0), e([y({ json: { read: false, write: false } })], ee.prototype, "refreshInterval", void 0), e([y({ types: m$2, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: false } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: u, write: true } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], ee.prototype, "renderer", null), e([o$3("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), o$3("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], ee.prototype, "readRenderer", null), e([y((() => {
  const e2 = a$3(p$4);
  return e2.json.origins["portal-item"] = { read: false, write: false }, e2;
})())], ee.prototype, "screenSizePerspectiveEnabled", void 0), e([y()], ee.prototype, "sourceJSON", void 0), e([y({ type: f$2, json: { origins: { service: { read: { source: "spatialReference" } } } } })], ee.prototype, "spatialReference", void 0), e([y({ json: { read: false } })], ee.prototype, "type", void 0), e([y(d)], ee.prototype, "url", void 0), e([y({ type: Number })], ee.prototype, "updateInterval", void 0), e([y({ json: { read: false, write: false } })], ee.prototype, "useViewTime", void 0), e([y({ type: String })], ee.prototype, "webSocketUrl", void 0), ee = e([c("esri.layers.StreamLayer")], ee);
const te = ee;
export {
  te as default
};
