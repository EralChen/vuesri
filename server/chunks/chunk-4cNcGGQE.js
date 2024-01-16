import { iz as u$1, bh as V, a_ as I, a$ as j, bo as e, bp as y, br as c, iN as E, ck as l, cl as u$2, cm as j$1, cD as t, cn as m$1, iO as i, e3 as v, bK as C, hj as i$1, cq as a$1, iP as P, aM as s$1, iQ as x, iR as p, bb as s$2, iS as E$1, iT as s, iU as l$1, iV as u, iW as m$2, cM as j$2, ct as o, iX as f$1, bN as b$1 } from "./chunk-KFNcxJaF.js";
import { f } from "./chunk-Ju_DQ7D7.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var a;
let n = a = class extends u$1(V.ofType(f)) {
  constructor(r) {
    super(r), this.url = null;
  }
  clone() {
    return new a({ url: this.url, items: this.items.map((r) => r.clone()) });
  }
  toJSON(r) {
    return this.toArray().map((o2) => o2.toJSON(r)).filter((r2) => !!r2.geometry);
  }
  static fromJSON(r, o2) {
    const t2 = new a();
    for (const e2 of r)
      t2.add(f.fromJSON(e2, o2));
    return t2;
  }
  static async fromUrl(r, t2, e2) {
    const i2 = { url: I(r), origin: "service" }, c2 = await j(r, { responseType: "json", signal: e2?.signal }), n2 = t2.toJSON(), m2 = [];
    for (const o2 of c2.data)
      m2.push(f.fromJSON({ ...o2, geometry: { ...o2.geometry, spatialReference: n2 } }, i2));
    return new a({ url: r, items: m2 });
  }
};
e([y({ type: String })], n.prototype, "url", void 0), n = a = e([c("esri.layers.support.SceneModifications")], n);
const m = n;
let b = class extends E(l(u$2(j$1(t(m$1(i(b$1))))))) {
  constructor(...e2) {
    super(...e2), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null;
  }
  initialize() {
    this.addHandles(v(() => this.modifications, "after-changes", () => this.modifications = this.modifications, C));
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? { url: e2, ...t2 } : e2;
  }
  readModifications(e2, t2, o2) {
    this._modificationsSource = { url: i$1(e2, o2), context: o2 };
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const t2 = e2?.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2);
    } catch (o2) {
      a$1(o2);
    }
    if (await this._fetchService(t2), null != this._modificationsSource) {
      const t3 = await m.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
      this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t2);
  }
  beforeSave() {
    if (null != this._modificationsSource)
      return this.load().then(() => {
      }, () => {
      });
  }
  async saveAs(e2, t2) {
    return this._debouncedSaveOperations(P.SAVE_AS, { ...t2, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(P.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && "IntegratedMesh" !== e2.layerType)
      throw new s$1("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s$1("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new s$1("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo, t2 = "Integrated mesh layers";
    x(s$2.getLogger(this), p(t2, "absolute-height", e2)), x(s$2.getLogger(this), E$1(t2, e2));
  }
};
e([y({ type: String, readOnly: true })], b.prototype, "geometryType", void 0), e([y({ type: ["show", "hide"] })], b.prototype, "listMode", void 0), e([y({ type: ["IntegratedMeshLayer"] })], b.prototype, "operationalLayerType", void 0), e([y({ json: { read: false }, readOnly: true })], b.prototype, "type", void 0), e([y({ type: s, readOnly: true })], b.prototype, "nodePages", void 0), e([y({ type: [l$1], readOnly: true })], b.prototype, "materialDefinitions", void 0), e([y({ type: [u], readOnly: true })], b.prototype, "textureSetDefinitions", void 0), e([y({ type: [m$2], readOnly: true })], b.prototype, "geometryDefinitions", void 0), e([y({ readOnly: true })], b.prototype, "serviceUpdateTimeStamp", void 0), e([y({ type: m }), j$2({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], b.prototype, "modifications", void 0), e([o(["web-scene", "portal-item"], "modifications")], b.prototype, "readModifications", null), e([y(f$1)], b.prototype, "elevationInfo", null), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], b.prototype, "path", void 0), b = e([c("esri.layers.IntegratedMeshLayer")], b);
const U = b;
export {
  U as default
};
