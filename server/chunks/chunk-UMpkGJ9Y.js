import { bo as e$1, bp as y, br as c$1, cO as f$1, jo as T, sq as o, b8 as a$1, iN as E, ck as l$2, cl as u$3, cm as j, cD as t$1, cn as m$1, iO as i$2, d4 as y$1, db as o$1, cq as a$4, j9 as p$3, sr as i$3, aM as s$1, fN as V$1, a$ as j$1, iP as P, iQ as x, iR as p$4, bb as s$2, iS as E$1, je as y$2, d0 as k, ct as o$2, iX as f, cH as c$2, cN as r, jj as s, bN as b$1 } from "./chunk-KFNcxJaF.js";
import { c as a, d as d$1, b as a$2, a as a$3 } from "./chunk-6ErlZ1bD.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let t = class extends f$1 {
  constructor(r2) {
    super(r2), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
e$1([y({ type: String, json: { write: { enabled: true, isRequired: true } } })], t.prototype, "field", void 0), e$1([y({ readOnly: true, nonNullable: true, json: { read: false } })], t.prototype, "type", void 0), t = e$1([c$1("esri.layers.pointCloudFilters.PointCloudFilter")], t);
const l$1 = t;
var d;
let p$2 = d = class extends l$1 {
  constructor(e2) {
    super(e2), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new d({ field: this.field, requiredClearBits: a$1(this.requiredClearBits), requiredSetBits: a$1(this.requiredSetBits) });
  }
};
e$1([y({ type: [T], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredSetBits };
} } } })], p$2.prototype, "requiredClearBits", void 0), e$1([y({ type: [T], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredClearBits };
} } } })], p$2.prototype, "requiredSetBits", void 0), e$1([o({ pointCloudBitfieldFilter: "bitfield" })], p$2.prototype, "type", void 0), p$2 = d = e$1([c$1("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], p$2);
const u$2 = p$2;
var n$1;
let p$1 = n$1 = class extends l$1 {
  constructor(r2) {
    super(r2), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new n$1({ field: this.field, includedReturns: a$1(this.includedReturns) });
  }
};
e$1([y({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: true, isRequired: true } } })], p$1.prototype, "includedReturns", void 0), e$1([o({ pointCloudReturnFilter: "return" })], p$1.prototype, "type", void 0), p$1 = n$1 = e$1([c$1("esri.layers.pointCloudFilters.PointCloudReturnFilter")], p$1);
const u$1 = p$1;
var p;
let l = p = class extends l$1 {
  constructor(e2) {
    super(e2), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new p({ field: this.field, mode: this.mode, values: a$1(this.values) });
  }
};
e$1([y({ type: ["exclude", "include"], json: { write: { enabled: true, isRequired: true } } })], l.prototype, "mode", void 0), e$1([o({ pointCloudValueFilter: "value" })], l.prototype, "type", void 0), e$1([y({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], l.prototype, "values", void 0), l = p = e$1([c$1("esri.layers.pointCloudFilters.PointCloudValueFilter")], l);
const u = l;
const e = { key: "type", base: l$1, typeMap: { value: u, bitfield: u$2, return: u$1 } };
var i$1;
let c = i$1 = class extends a {
  constructor(r2) {
    super(r2), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new i$1({ ...this.cloneProperties(), field: a$1(this.field) });
  }
};
e$1([o({ pointCloudRGBRenderer: "point-cloud-rgb" })], c.prototype, "type", void 0), e$1([y({ type: String, json: { write: true } })], c.prototype, "field", void 0), c = i$1 = e$1([c$1("esri.renderers.PointCloudRGBRenderer")], c);
const n = c;
const i = { key: "type", base: a, typeMap: { "point-cloud-class-breaks": d$1, "point-cloud-rgb": n, "point-cloud-stretch": a$2, "point-cloud-unique-value": a$3 }, errorContext: "renderer" };
const R = s();
let O = class extends E(l$2(u$3(j(t$1(m$1(i$2(b$1))))))) {
  constructor(...e2) {
    super(...e2), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = true, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = true, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e2, r2) {
    return "string" == typeof e2 ? { url: e2, ...r2 } : e2;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2?.domain ? r2.domain : null;
  }
  readServiceFields(e2, r2, t2) {
    return Array.isArray(e2) ? e2.map((e3) => {
      const r3 = new y$1();
      return "FieldTypeInteger" === e3.type && ((e3 = a$1(e3)).type = "esriFieldTypeInteger"), r3.read(e3, t2), r3;
    }) : Array.isArray(r2.attributeStorageInfo) ? r2.attributeStorageInfo.map((e3) => new y$1({ name: e3.name, type: "ELEVATION" === e3.name ? "double" : "integer" })) : null;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  writeRenderer(e2, r2, t2, o2) {
    o$1("layerDefinition.drawingInfo.renderer", e2.write({}, o2), r2);
  }
  load(e2) {
    const r2 = null != e2 ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(a$4).then(() => this._fetchService(r2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    const r2 = p$3(this, e2);
    return r2 && (this._formatPopupTemplateReturnsField(r2), this._formatPopupTemplateRGBField(r2)), r2;
  }
  _formatPopupTemplateReturnsField(e2) {
    const r2 = this.fieldsIndex.get("RETURNS");
    if (!r2)
      return;
    const t2 = e2.fieldInfos?.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$3({ name: "pcl-returns-decoded", title: r2.alias || r2.name, expression: `
        var returnValue = $feature.${r2.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e2) {
    const r2 = this.fieldsIndex.get("RGB");
    if (!r2)
      return;
    const t2 = e2.fieldInfos?.find((e3) => e3.fieldName === r2.name);
    if (!t2)
      return;
    const o2 = new i$3({ name: "pcl-rgb-decoded", title: r2.alias || r2.name, expression: `
        var rgb = $feature.${r2.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e2.expressionInfos = [...e2.expressionInfos || [], o2], t2.fieldName = "expression/pcl-rgb-decoded";
  }
  async queryCachedStatistics(e2, r2) {
    if (await this.load(r2), !this.attributeStorageInfo)
      throw new s$1("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const i2 = this.fieldsIndex.get(e2);
    if (!i2)
      throw new s$1("pointcloudlayer:field-unexisting", `Field '${e2}' does not exist on the layer`);
    for (const o2 of this.attributeStorageInfo)
      if (o2.name === i2.name) {
        const e3 = V$1(this.parsedUrl.path, `./statistics/${o2.key}`);
        return j$1(e3, { query: { f: "json", token: this.apiKey }, responseType: "json", signal: r2 ? r2.signal : null }).then((e4) => e4.data);
      }
    throw new s$1("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(P.SAVE_AS, { ...r2, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }, e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(P.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && "PointCloud" !== e2.layerType)
      throw new s$1("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$1("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2)
      throw new s$1("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e2) {
    return null != this.attributeStorageInfo && this.attributeStorageInfo.some((r2) => r2.name === e2);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo;
    x(s$2.getLogger(this), p$4("Point cloud layers", "absolute-height", e2)), x(s$2.getLogger(this), E$1("Point cloud layers", e2));
  }
};
e$1([y({ type: ["PointCloudLayer"] })], O.prototype, "operationalLayerType", void 0), e$1([y(y$2)], O.prototype, "popupEnabled", void 0), e$1([y({ type: k, json: { name: "popupInfo", write: true } })], O.prototype, "popupTemplate", void 0), e$1([y({ readOnly: true, json: { read: false } })], O.prototype, "defaultPopupTemplate", null), e$1([y({ readOnly: true, json: { write: false, read: false, origins: { "web-document": { write: false, read: false } } } })], O.prototype, "opacity", void 0), e$1([y({ type: ["show", "hide"] })], O.prototype, "listMode", void 0), e$1([y({ types: [e], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: true } })], O.prototype, "filters", void 0), e$1([y({ type: [y$1] })], O.prototype, "fields", void 0), e$1([y(R.fieldsIndex)], O.prototype, "fieldsIndex", void 0), e$1([o$2("service", "fields", ["fields", "attributeStorageInfo"])], O.prototype, "readServiceFields", null), e$1([y(R.outFields)], O.prototype, "outFields", void 0), e$1([y({ readOnly: true })], O.prototype, "attributeStorageInfo", void 0), e$1([y(f)], O.prototype, "elevationInfo", null), e$1([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], O.prototype, "path", void 0), e$1([y(c$2)], O.prototype, "legendEnabled", void 0), e$1([y({ types: i, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: i }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], O.prototype, "renderer", void 0), e$1([r("renderer")], O.prototype, "writeRenderer", null), e$1([y({ json: { read: false }, readOnly: true })], O.prototype, "type", void 0), O = e$1([c$1("esri.layers.PointCloudLayer")], O);
const V = O;
export {
  V as default
};
