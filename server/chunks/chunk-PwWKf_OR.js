import { jc as u, bQ as V, bT as I, aQ as U$1, aV as e, aX as y, a_ as c, jp as L, au as l, av as u$1, aw as j, ax as t, ay as m$1, az as e$1, aA as i, eV as v, cf as C, jq as u$2, aP as a$1, jr as P$1, aO as s, aR as I$1, aS as x, aT as s$1, aU as Z, js as s$2, jt as l$1, ju as u$3, jv as m$2, d9 as j$1, cV as o, aY as f$1, a$ as b } from "./chunk-ejFG4zJ0.js";
import { f } from "./chunk-F8GT-pDR.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var m;
let n = m = class extends u(V.ofType(f)) {
  constructor(r) {
    super(r), this.url = null;
  }
  clone() {
    return new m({ url: this.url, items: this.items.map((r) => r.clone()) });
  }
  toJSON(r) {
    return this.toArray().map((o2) => o2.toJSON(r)).filter((r2) => !!r2.geometry);
  }
  static fromJSON(r, o2) {
    const t2 = new m();
    for (const e2 of r)
      t2.add(f.fromJSON(e2, o2));
    return t2;
  }
  static async fromUrl(r, t2, e2) {
    const i2 = { url: I(r), origin: "service" }, c2 = await U$1(r, { responseType: "json", signal: e2?.signal }), n2 = t2.toJSON(), a2 = [];
    for (const o2 of c2.data)
      a2.push(f.fromJSON({ ...o2, geometry: { ...o2.geometry, spatialReference: n2 } }, i2));
    return new m({ url: r, items: a2 });
  }
};
e([y({ type: String })], n.prototype, "url", void 0), n = m = e([c("esri.layers.support.SceneModifications")], n);
const a = n;
let A = class extends L(l(u$1(j(t(m$1(e$1(i(b)))))))) {
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
    this._modificationsSource = { url: u$2(e2, o2), context: o2 };
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
      const t3 = await a.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
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
    return this._debouncedSaveOperations(P$1.SAVE_AS, { ...t2, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(P$1.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && "IntegratedMesh" !== e2.layerType)
      throw new s("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor))
      throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1)
      throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo, t2 = "Integrated mesh layers";
    I$1(s$1.getLogger(this), x(t2, "absolute-height", e2)), I$1(s$1.getLogger(this), Z(t2, e2));
  }
};
e([y({ type: String, readOnly: true })], A.prototype, "geometryType", void 0), e([y({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), e([y({ type: ["IntegratedMeshLayer"] })], A.prototype, "operationalLayerType", void 0), e([y({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), e([y({ type: s$2, readOnly: true })], A.prototype, "nodePages", void 0), e([y({ type: [l$1], readOnly: true })], A.prototype, "materialDefinitions", void 0), e([y({ type: [u$3], readOnly: true })], A.prototype, "textureSetDefinitions", void 0), e([y({ type: [m$2], readOnly: true })], A.prototype, "geometryDefinitions", void 0), e([y({ readOnly: true })], A.prototype, "serviceUpdateTimeStamp", void 0), e([y({ type: a }), j$1({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), e([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), e([y(f$1)], A.prototype, "elevationInfo", null), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), A = e([c("esri.layers.IntegratedMeshLayer")], A);
const P = A;
export {
  P as default
};
