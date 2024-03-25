import { aV as e, aX as y, a_ as c$1, iK as m$1, f9 as k, dm as d$1, aC as M, cZ as p$1, b0 as has, cV as o, j9 as p, ja as f$1, dw as We, jb as l, aB as f$2, aP as a, bT as I, ck as b, aO as s } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c = class extends m$1 {
  constructor(t) {
    super(t), this.type = "csv", this.refresh = k(async (t2) => {
      await this.load();
      const { extent: e2, timeExtent: o2 } = await this._connection.invoke("refresh", t2);
      return e2 && (this.sourceJSON.extent = e2), o2 && (this.sourceJSON.timeInfo.timeExtent = [o2.start, o2.end]), { dataChanged: true, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(t) {
    const e2 = null != t ? t.signal : null;
    return this.addResolvingPromise(this._startWorker(e2)), Promise.resolve(this);
  }
  destroy() {
    this._connection?.close(), this._connection = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(t, e2 = {}) {
    await this.load(e2);
    const o2 = await this._connection.invoke("queryFeatures", t ? t.toJSON() : null, e2);
    return d$1.fromJSON(o2);
  }
  async queryFeaturesJSON(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryFeatures", t ? t.toJSON() : null, e2);
  }
  async queryFeatureCount(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryFeatureCount", t ? t.toJSON() : null, e2);
  }
  async queryObjectIds(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("queryObjectIds", t ? t.toJSON() : null, e2);
  }
  async queryExtent(t, e2 = {}) {
    await this.load(e2);
    const o2 = await this._connection.invoke("queryExtent", t ? t.toJSON() : null, e2);
    return { count: o2.count, extent: M.fromJSON(o2.extent) };
  }
  async querySnapping(t, e2 = {}) {
    return await this.load(e2), this._connection.invoke("querySnapping", t, e2);
  }
  async _startWorker(t) {
    this._connection = await p$1("CSVSourceWorker", { strategy: has("feature-layers-workers") ? "dedicated" : "local", signal: t, registryTarget: this });
    const { url: e2, delimiter: o2, fields: i, latitudeField: s2, longitudeField: n, spatialReference: a2, timeInfo: c2 } = this.loadOptions, l2 = await this._connection.invoke("load", { url: e2, customParameters: this.customParameters, parsingOptions: { delimiter: o2, fields: i?.map((t2) => t2.toJSON()), latitudeField: s2, longitudeField: n, spatialReference: a2?.toJSON(), timeInfo: c2?.toJSON() } }, { signal: t });
    this.locationInfo = l2.locationInfo, this.sourceJSON = l2.layerDefinition, this.delimiter = l2.delimiter;
  }
};
e([y()], c.prototype, "type", void 0), e([y()], c.prototype, "loadOptions", void 0), e([y()], c.prototype, "customParameters", void 0), e([y()], c.prototype, "locationInfo", void 0), e([y()], c.prototype, "sourceJSON", void 0), e([y()], c.prototype, "delimiter", void 0), c = e([c$1("esri.layers.graphics.sources.CSVSource")], c);
function h(e2, r) {
  throw new s(r, `CSVLayer (title: ${e2.title}, id: ${e2.id}) cannot be saved to a portal item`);
}
let m = class extends We {
  constructor(...e2) {
    super(...e2), this.geometryType = "point", this.capabilities = l(false, false), this.delimiter = null, this.editingEnabled = false, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.spatialReference = f$2.WGS84, this.source = null, this.type = "csv";
  }
  normalizeCtorArgs(e2, t) {
    return "string" == typeof e2 ? { url: e2, ...t } : e2;
  }
  load(e2) {
    const t = null != e2 ? e2.signal : null, i = this.loadFromPortal({ supportedTypes: ["CSV"], supportsData: false }, e2).catch(a).then(async () => this.initLayerProperties(await this.createGraphicsSource(t)));
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  get isTable() {
    return this.loaded && null == this.geometryType;
  }
  readWebMapLabelsVisible(e2, t) {
    return null != t.showLabels ? t.showLabels : !!t.layerDefinition?.drawingInfo?.labelingInfo;
  }
  set url(e2) {
    if (!e2)
      return void this._set("url", e2);
    const t = I(e2);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async createGraphicsSource(e2) {
    const t = new c({ loadOptions: { delimiter: this.delimiter, fields: this.fields, latitudeField: this.latitudeField ?? void 0, longitudeField: this.longitudeField ?? void 0, spatialReference: this.spatialReference ?? void 0, timeInfo: this.timeInfo ?? void 0, url: this.url }, customParameters: this.customParameters ?? void 0 });
    return this._set("source", t), await t.load({ signal: e2 }), this.read({ locationInfo: t.locationInfo, columnDelimiter: t.delimiter }, { origin: "service", url: this.parsedUrl }), t;
  }
  queryFeatures(e2, t) {
    return this.load().then(() => this.source.queryFeatures(b.from(e2) || this.createQuery())).then((e3) => {
      if (e3?.features)
        for (const t2 of e3.features)
          t2.layer = t2.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t) {
    return this.load().then(() => this.source.queryObjectIds(b.from(e2) || this.createQuery()));
  }
  queryFeatureCount(e2, t) {
    return this.load().then(() => this.source.queryFeatureCount(b.from(e2) || this.createQuery()));
  }
  queryExtent(e2, t) {
    return this.load().then(() => this.source.queryExtent(b.from(e2) || this.createQuery()));
  }
  read(e2, t) {
    super.read(e2, t), t && "service" === t.origin && this.revert(["latitudeField", "longitudeField"], "service");
  }
  write(e2, t) {
    return super.write(e2, { ...t, writeLayerSchema: true });
  }
  clone() {
    throw new s("csv-layer:clone", `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);
  }
  async save(e2) {
    return h(this, "csv-layer:save");
  }
  async saveAs(e2, t) {
    return h(this, "csv-layer:save-as");
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e2, updates: t } = await this.source.refresh(this.customParameters);
      return null != t && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: true }), e2;
    } catch {
    }
    return false;
  }
  _verifyFields() {
  }
  _verifySource() {
  }
  _hasMemorySource() {
    return false;
  }
};
e([y({ readOnly: true, json: { read: false, write: false } })], m.prototype, "capabilities", void 0), e([y({ type: [",", " ", ";", "|", "	"], json: { read: { source: "columnDelimiter" }, write: { target: "columnDelimiter", ignoreOrigin: true } } })], m.prototype, "delimiter", void 0), e([y({ readOnly: true, type: Boolean, json: { origins: { "web-scene": { read: false, write: false } } } })], m.prototype, "editingEnabled", void 0), e([y({ json: { read: { source: "layerDefinition.fields" }, write: { target: "layerDefinition.fields" } } })], m.prototype, "fields", void 0), e([y({ type: Boolean, readOnly: true })], m.prototype, "isTable", null), e([o("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], m.prototype, "readWebMapLabelsVisible", null), e([y({ type: String, json: { read: { source: "locationInfo.latitudeFieldName" }, write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: true } } })], m.prototype, "latitudeField", void 0), e([y({ type: ["show", "hide"] })], m.prototype, "listMode", void 0), e([y({ type: ["coordinates"], json: { read: { source: "locationInfo.locationType" }, write: { target: "locationInfo.locationType", ignoreOrigin: true, isRequired: true } } })], m.prototype, "locationType", void 0), e([y({ type: String, json: { read: { source: "locationInfo.longitudeFieldName" }, write: { target: "locationInfo.longitudeFieldName", ignoreOrigin: true } } })], m.prototype, "longitudeField", void 0), e([y({ type: ["CSV"] })], m.prototype, "operationalLayerType", void 0), e([y()], m.prototype, "outFields", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: false, write: false } }, read: false, write: false } })], m.prototype, "path", void 0), e([y({ json: { read: false }, cast: null, type: c, readOnly: true })], m.prototype, "source", void 0), e([y({ json: { read: false }, value: "csv", readOnly: true })], m.prototype, "type", void 0), e([y({ json: { read: p, write: { isRequired: true, ignoreOrigin: true, writer: f$1 } } })], m.prototype, "url", null), m = e([c$1("esri.layers.CSVLayer")], m);
const f = m;
export {
  f as default
};
