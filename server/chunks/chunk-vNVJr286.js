import { j_ as u, ay as m, jT as i$1, c7 as s, jH as p, bD as a, dC as o, aT as s$1, gS as m$1, aO as s$2, jI as p$1, j$ as x, gR as n, ck as b, aV as e, aX as y, da as r, k0 as y$1, jM as m$2, jK as C, jL as i, d4 as c, jZ as T, jY as S, jN as y$2, dp as P, cV as o$1, k1 as p$2, a_ as c$1, k2 as p$3, k3 as A, k4 as w, jS as s$3, k5 as c$2, k6 as u$1, k7 as S$1, iK as m$3, k8 as D, k9 as F, d1 as n$1, jG as f, ax as t, d2 as f$1, au as l, av as u$2, aw as j, az as e$1, aA as i$2, bQ as V, f9 as k$1, ce as d$1, cf as C$1, aP as a$1, iM as Q$1, ka as T$1, bT as I, gG as V$1, kb as h, kc as m$4, kd as w$1, ke as b$1, hU as h$1, kf as j$1, kg as I$1, jm as t$1, kh as q, ki as F$1, kj as A$1, kk as O, kl as P$1, km as E, jn as A$2, kn as e$2, jJ as g, ko as S$2, d3 as I$2, kp as d, a$ as b$2 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const G = { key: "type", base: p$3, errorContext: "renderer", typeMap: { simple: m$1, "unique-value": A, "class-breaks": w } }, N = s$3(), U = u({ types: G });
let $ = 0;
function k(e2) {
  const t2 = e2.json.write;
  return "object" == typeof t2 ? t2.ignoreOrigin = true : e2.json.write = { ignoreOrigin: true }, e2;
}
function M(e2) {
  return new m$1({ symbol: _(e2) });
}
function _(e2) {
  switch (e2) {
    case "point":
    case "multipoint":
      return S$1.clone();
    case "polyline":
      return u$1.clone();
    case "polygon":
    case "multipatch":
      return c$2.clone();
    default:
      return null;
  }
}
function B(e2, t2) {
  return !!t2 && ("unique-value" === e2?.type && "string" == typeof e2.field && e2.field.toLowerCase() === t2.toLowerCase() && !e2.field2 && !e2.field3 && !e2.valueExpression);
}
function H(e2, t2) {
  return null == e2 ? null : t2.subtypes?.find((t3) => t3.code === e2);
}
function Q(e2, t2) {
  let r2 = null;
  switch (t2.geometryType) {
    case "esriGeometryPoint":
    case "esriGeometryMultipoint":
      r2 = "point";
      break;
    case "esriGeometryPolyline":
      r2 = "line";
      break;
    case "esriGeometryPolygon":
    case "esriGeometryMultiPatch":
      r2 = "polygon";
      break;
    default:
      t2.type, r2 = null;
  }
  const i2 = {}, o2 = H(e2, t2);
  if (null != o2) {
    const { defaultValues: e3 } = o2;
    for (const t3 in e3)
      i2[t3] = e3[t3];
  }
  return i2[t2.subtypeField] = e2, new p$2({ name: "New Feature", drawingTool: r2, prototype: { attributes: i2 } });
}
const z = "esri.layers.support.SubtypeSublayer";
let J = class extends m(i$1(s(m$3))) {
  constructor(e2) {
    super(e2), this.charts = null, this.editingEnabled = true, this.fieldOverrides = null, this.fieldsIndex = null, this.formTemplate = null, this.id = `${Date.now().toString(16)}-subtype-sublayer-${$++}`, this.type = "subtype-sublayer", this.labelsVisible = true, this.labelingInfo = null, this.layerType = "ArcGISFeatureLayer", this.legendEnabled = true, this.listMode = "show", this.minScale = 0, this.maxScale = 0, this.opacity = 1, this.parent = null, this.popupEnabled = true, this.popupTemplate = null, this.subtypeCode = null, this.templates = null, this.title = null, this.visible = true;
  }
  load(e2) {
    return p(this.renderer, this.fieldsIndex), Promise.resolve(this);
  }
  get capabilities() {
    return this.parent?.capabilities;
  }
  get effectiveCapabilities() {
    return this.parent?.effectiveCapabilities;
  }
  get effectiveEditingEnabled() {
    const { parent: e2 } = this;
    return e2 ? e2.effectiveEditingEnabled && this.editingEnabled : this.editingEnabled;
  }
  get elevationInfo() {
    return this.parent?.elevationInfo;
  }
  writeFieldOverrides(e2, t2, r2) {
    const { fields: i2, parent: o$12 } = this;
    let n2;
    if (i2) {
      n2 = [];
      let e3 = 0;
      i2.forEach(({ name: t3, alias: r3, editable: i3, visible: s2 }) => {
        if (!s2)
          return;
        const l2 = o$12?.fields?.find((e4) => e4.name === t3);
        if (!l2)
          return;
        const a2 = { name: t3 };
        let p2 = false;
        r3 !== l2.alias && (a2.alias = r3, p2 = true), i3 !== l2.editable && (a2.editable = i3, p2 = true), n2.push(a2), p2 && e3++;
      }), 0 === e3 && n2.length === i2.length && (n2 = null);
    } else
      n2 = a(e2);
    n2?.length && o(r2, n2, t2);
  }
  get fields() {
    const { parent: e2, fieldOverrides: t2, subtypeCode: r2 } = this, i2 = e2?.fields;
    if (!e2 || !i2?.length)
      return null;
    const { subtypes: o2, subtypeField: n2 } = e2, s2 = o2?.find((e3) => e3.code === r2), l2 = s2?.defaultValues, a2 = s2?.domains, p2 = [];
    for (const d2 of i2) {
      const e3 = d2.clone(), { name: i3 } = e3, o3 = t2?.find((e4) => e4.name === i3);
      if (e3.visible = !t2 || !!o3, o3) {
        const { alias: t3, editable: r3 } = o3;
        t3 && (e3.alias = t3), false === r3 && (e3.editable = false);
      }
      const s3 = l2?.[i3] ?? null;
      e3.defaultValue = i3 === n2 ? r2 : s3;
      const u2 = a2?.[i3] ?? null;
      e3.domain = i3 === n2 ? null : u2 ? "inherited" === u2.type ? e3.domain : u2.clone() : null, p2.push(e3);
    }
    return p2;
  }
  get floorInfo() {
    return this.parent?.floorInfo;
  }
  get geometryType() {
    return this.parent?.geometryType;
  }
  get effectiveScaleRange() {
    const { minScale: e2, maxScale: t2 } = this;
    return { minScale: e2, maxScale: t2 };
  }
  get objectIdField() {
    return this.parent || s$1.getLogger(z).error(W("objectIdField")), this.parent?.objectIdField;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e2) {
    p(e2, this.fieldsIndex), this._override("renderer", e2);
  }
  get renderer() {
    if (this._isOverridden("renderer"))
      return this._get("renderer");
    const { parent: e2 } = this;
    return e2 && !e2.isTable && "mesh" !== e2.geometryType ? M(e2.geometryType) : null;
  }
  readRendererFromService(e2, t2, r2) {
    if ("Table" === t2.type)
      return null;
    const i2 = t2.drawingInfo?.renderer, n2 = U(i2, t2, r2);
    let s2;
    const { subtypeCode: l2 } = this;
    if (null != l2 && B(n2, t2.subtypeField)) {
      const e3 = n2.uniqueValueInfos?.find(({ value: e4 }) => (e4 = "number" == typeof e4 ? String(e4) : e4) === String(l2));
      e3 && (s2 = new m$1({ symbol: e3.symbol }));
    } else
      "simple" !== n2?.type || n2.visualVariables?.length || (s2 = n2);
    return s2;
  }
  readRenderer(e2, t2, r2) {
    const i2 = t2?.layerDefinition?.drawingInfo?.renderer;
    if (!i2)
      return;
    const o2 = i2.visualVariables?.some((e3) => "rotationInfo" !== e3.type);
    return o2 ? void 0 : U(i2, t2, r2) || void 0;
  }
  get spatialReference() {
    return this.parent?.spatialReference;
  }
  get subtypeField() {
    return this.parent?.subtypeField;
  }
  readTemplatesFromService(e2, t2) {
    return [Q(this.subtypeCode, t2)];
  }
  readTitleFromService(e2, t2) {
    const r2 = H(this.subtypeCode, t2);
    return null != r2 ? r2.name : null;
  }
  get url() {
    return this.parent?.url;
  }
  get userHasUpdateItemPrivileges() {
    return !!this.parent?.userHasUpdateItemPrivileges;
  }
  async addAttachment(e2, t2) {
    const { parent: r2 } = this;
    if (!r2)
      throw W("addAttachment");
    if (e2.getAttribute(r2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:addAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return r2.addAttachment(e2, t2);
  }
  async updateAttachment(e2, t2, r2) {
    const { parent: i2 } = this;
    if (!i2)
      throw W("updateAttachment");
    if (e2.getAttribute(i2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:updateAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return i2.updateAttachment(e2, t2, r2);
  }
  async deleteAttachments(e2, t2) {
    const { parent: r2 } = this;
    if (!r2)
      throw W("deleteAttachments");
    if (e2.getAttribute(r2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:deleteAttachments", "The feature provided does not belong to this SubtypeSublayer");
    return r2.deleteAttachments(e2, t2);
  }
  async applyEdits(e2, t2) {
    if (!this.parent)
      throw W("applyEdits");
    return this.parent.applyEdits(e2, t2);
  }
  createPopupTemplate(e2) {
    let t2 = this;
    const { parent: r2, fields: i2, title: o2 } = this;
    if (r2) {
      const { displayField: e3, editFieldsInfo: n2, objectIdField: s2 } = r2;
      t2 = { displayField: e3, editFieldsInfo: n2, fields: i2, objectIdField: s2, title: o2 };
    }
    return p$1(t2, e2);
  }
  createQuery() {
    if (!this.parent)
      throw W("createQuery");
    const e2 = x(this.parent), t2 = `${this.parent.subtypeField}=${this.subtypeCode}`;
    return e2.where = n(t2, this.parent.definitionExpression), e2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2) {
    return this._getLayerDomain(e2);
  }
  async queryAttachments(e2, t2) {
    const r2 = await this.load();
    if (!r2.parent)
      throw W("queryAttachments");
    const i2 = e2.clone();
    return i2.where = K(i2.where, r2.parent.subtypeField, r2.subtypeCode), r2.parent.queryAttachments(e2, t2);
  }
  async queryFeatures(e2, t2) {
    const r2 = await this.load();
    if (!r2.parent)
      throw W("queryFeatures");
    const i2 = b.from(e2) ?? r2.createQuery();
    return null != e2 && (i2.where = K(i2.where, r2.parent.subtypeField, r2.subtypeCode)), r2.parent.queryFeatures(i2, t2);
  }
  _getLayerDomain(e2) {
    const t2 = this.fieldsIndex.get(e2);
    return t2 ? t2.domain : null;
  }
};
e([y({ readOnly: true, json: { read: false } })], J.prototype, "capabilities", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "effectiveCapabilities", null), e([y({ json: { write: { ignoreOrigin: true } } })], J.prototype, "charts", void 0), e([y({ type: Boolean, nonNullable: true, json: { name: "enableEditing", write: { ignoreOrigin: true } } })], J.prototype, "editingEnabled", void 0), e([y({ type: Boolean, readOnly: true })], J.prototype, "effectiveEditingEnabled", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "elevationInfo", null), e([y({ json: { name: "layerDefinition.fieldOverrides", origins: { service: { read: false } }, write: { ignoreOrigin: true, allowNull: true } } })], J.prototype, "fieldOverrides", void 0), e([r("fieldOverrides")], J.prototype, "writeFieldOverrides", null), e([y({ ...N.fields, readOnly: true, json: { read: false } })], J.prototype, "fields", null), e([y(N.fieldsIndex)], J.prototype, "fieldsIndex", void 0), e([y({ readOnly: true, json: { read: false } })], J.prototype, "floorInfo", null), e([y({ type: y$1, json: { name: "formInfo", write: { ignoreOrigin: true } } })], J.prototype, "formTemplate", void 0), e([y({ type: String, clonable: false, readOnly: true, json: { origins: { service: { read: false }, "portal-item": { read: false } }, write: { ignoreOrigin: true } } })], J.prototype, "id", void 0), e([y({ readOnly: true, json: { read: false } })], J.prototype, "geometryType", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "type", void 0), e([y(k(a(m$2)))], J.prototype, "labelsVisible", void 0), e([y({ type: [C], json: { name: "layerDefinition.drawingInfo.labelingInfo", origins: { service: { read: false } }, read: { reader: i }, write: { ignoreOrigin: true } } })], J.prototype, "labelingInfo", void 0), e([y({ type: ["ArcGISFeatureLayer"], readOnly: true, json: { read: false, write: { ignoreOrigin: true } } })], J.prototype, "layerType", void 0), e([y(k(a(c)))], J.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide"] })], J.prototype, "listMode", void 0), e([y((() => {
  const e2 = a(T);
  return e2.json.origins.service.read = false, k(e2);
})())], J.prototype, "minScale", void 0), e([y((() => {
  const e2 = a(S);
  return e2.json.origins.service.read = false, k(e2);
})())], J.prototype, "maxScale", void 0), e([y({ readOnly: true })], J.prototype, "effectiveScaleRange", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "objectIdField", null), e([y({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { write: { ignoreOrigin: true } } })], J.prototype, "opacity", void 0), e([y({ clonable: false })], J.prototype, "parent", void 0), e([y(k(a(y$2)))], J.prototype, "popupEnabled", void 0), e([y({ type: P, json: { name: "popupInfo", write: { ignoreOrigin: true } } })], J.prototype, "popupTemplate", void 0), e([y({ readOnly: true })], J.prototype, "defaultPopupTemplate", null), e([y({ types: G, json: { write: { target: "layerDefinition.drawingInfo.renderer", ignoreOrigin: true } } })], J.prototype, "renderer", null), e([o$1("service", "renderer", ["drawingInfo.renderer", "subtypeField", "type"])], J.prototype, "readRendererFromService", null), e([o$1("renderer", ["layerDefinition.drawingInfo.renderer"])], J.prototype, "readRenderer", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "spatialReference", null), e([y({ type: Number, json: { origins: { service: { read: false } }, write: { ignoreOrigin: true } } })], J.prototype, "subtypeCode", void 0), e([y({ readOnly: true, json: { read: false } })], J.prototype, "subtypeField", null), e([y({ type: [p$2], json: { name: "layerDefinition.templates", write: { ignoreOrigin: true } } })], J.prototype, "templates", void 0), e([o$1("service", "templates", ["geometryType", "subtypeField", "subtypes", "type"])], J.prototype, "readTemplatesFromService", null), e([y({ type: String, json: { write: { ignoreOrigin: true } } })], J.prototype, "title", void 0), e([o$1("service", "title", ["subtypes"])], J.prototype, "readTitleFromService", null), e([y({ readOnly: true, json: { read: false } })], J.prototype, "url", null), e([y({ readOnly: true })], J.prototype, "userHasUpdateItemPrivileges", null), e([y({ type: Boolean, nonNullable: true, json: { name: "visibility", write: { ignoreOrigin: true } } })], J.prototype, "visible", void 0), J = e([c$1(z)], J);
const K = (e2, t2, r2) => {
  const i2 = new RegExp(`${t2}\\s*=\\s*\\d+`), o2 = `${t2}=${r2}`, n$12 = e2 ?? "";
  return i2.test(n$12) ? n$12.replace(i2, o2) : n(o2, n$12);
}, W = (e2) => new s$2(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e2}`), X = J;
const Y = "SubtypeGroupLayer", ee = "esri.layers.SubtypeGroupLayer";
function re(e2, r2) {
  return new s$2("layer:unsupported", `Layer (${e2.title}, ${e2.id}) of type '${e2.declaredClass}' ${r2}`, { layer: e2 });
}
const te = s$3();
let se = class extends D(F(n$1(f(t(f$1(l(u$2(j(m(e$1(i$2(i$1(b$2))))))))))))) {
  constructor(...e2) {
    super(...e2), this._sublayerLookup = /* @__PURE__ */ new Map(), this.fields = null, this.fieldsIndex = null, this.outFields = null, this.sublayers = new (V.ofType(X))(), this.timeInfo = null, this.title = "Layer", this.type = "subtype-group", this._debouncedSaveOperations = k$1(async (e3, r2, t2) => {
      const { save: s2, saveAs: i2 } = await import("./chunk-YTj96kXe.js");
      switch (e3) {
        case A$2.SAVE:
          return s2(this, r2);
        case A$2.SAVE_AS:
          return i2(this, t2, r2);
      }
    }), this.addHandles(d$1(() => this.sublayers, (e3, r2) => this._handleSublayersChange(e3, r2), C$1));
  }
  destroy() {
    this.source?.destroy();
  }
  normalizeCtorArgs(e2, r2) {
    return "string" == typeof e2 ? { url: e2, ...r2 } : e2;
  }
  load(e2) {
    const r2 = null != e2 ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e2).catch(a$1).then(async () => {
      if (!this.url)
        throw new s$2("subtype-grouplayer:missing-url-or-source", "SubtypeGroupLayer must be created with either a url or a portal item");
      if (null == this.layerId)
        throw new s$2("subtype-grouplayer:missing-layerid", "layerId is required for a SubtypeGroupLayer created with url");
      return this._initLayerProperties(await this.createGraphicsSource(r2));
    }).then(() => Q$1(this, "load", e2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("gdbVersion"), this.commitProperty("historicMoment"), this.commitProperty("returnZ"), this.commitProperty("capabilities"), this.commitProperty("returnM"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && null != this.capabilities && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get effectiveEditingEnabled() {
    return T$1(this);
  }
  get parsedUrl() {
    const e2 = I(this.url);
    return null != e2 && null != this.layerId && (e2.path = V$1(e2.path, this.layerId.toString())), e2;
  }
  set source(e2) {
    this._get("source") !== e2 && this._set("source", e2);
  }
  readTitleFromService(e2, { name: r2 }) {
    return this.url ? h(this.url, r2) : r2;
  }
  async addAttachment(e2, r2) {
    return m$4(this, e2, r2, Y);
  }
  async updateAttachment(e2, r2, t2) {
    return w$1(this, e2, r2, t2, Y);
  }
  async applyEdits(e2, r2) {
    return b$1(this, e2, r2);
  }
  on(e2, r2) {
    return super.on(e2, r2);
  }
  async createGraphicsSource(e2) {
    const { default: r2 } = await h$1(import("./chunk-c3c_C8vI.js"), e2);
    return new r2({ layer: this }).load({ signal: e2 });
  }
  createQuery() {
    const e2 = x(this), r2 = this.sublayers.map((e3) => e3.subtypeCode);
    return e2.where = n(`${this.subtypeField} IN (${r2.join(",")})`, this.definitionExpression), e2;
  }
  async deleteAttachments(e2, r2) {
    return j$1(this, e2, r2, Y);
  }
  async fetchRecomputedExtents(e2) {
    return I$1(this, e2, Y);
  }
  findSublayerForFeature(e2) {
    const r2 = this.fieldsIndex.get(this.subtypeField), t2 = e2.attributes[r2.name];
    return this.findSublayerForSubtypeCode(t2);
  }
  findSublayerForSubtypeCode(e2) {
    return this._sublayerLookup.get(e2);
  }
  getFieldDomain(e2, r2) {
    return this._getLayerDomain(e2);
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  loadAll() {
    return t$1(this, (e2) => {
      e2(this.sublayers);
    });
  }
  async queryAttachments(e2, r2) {
    return q(this, e2, r2, Y);
  }
  async queryFeatures(e2, r2) {
    const t2 = await this.load(), s2 = b.from(e2) ?? t2.createQuery(), i2 = s2.outFields ?? [];
    i2.includes(this.subtypeField) || (i2.push(this.subtypeField), s2.outFields = i2);
    const o2 = await t2.source.queryFeatures(s2, r2);
    if (o2?.features)
      for (const a2 of o2.features)
        a2.layer = a2.sourceLayer = this.findSublayerForFeature(a2);
    return o2;
  }
  async queryObjectIds(e2, r2) {
    return F$1(this, e2, r2, Y);
  }
  async queryFeatureCount(e2, r2) {
    return A$1(this, e2, r2, Y);
  }
  async queryExtent(e2, r2) {
    return O(this, e2, r2, Y);
  }
  async queryRelatedFeatures(e2, r2) {
    return P$1(this, e2, r2, Y);
  }
  async queryRelatedFeaturesCount(e2, r2) {
    return E(this, e2, r2, Y);
  }
  async save(e2) {
    return this._debouncedSaveOperations(A$2.SAVE, e2);
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(A$2.SAVE_AS, r2, e2);
  }
  write(e2, r2) {
    const { origin: t2, layerContainerType: i2, messages: o2 } = r2;
    if (this.isTable) {
      if ("web-scene" === t2 || "web-map" === t2 && "tables" !== i2)
        return o2?.push(re(this, "using a table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && "web-map" === t2 && "tables" === i2)
      return o2?.push(re(this, "using a non-table source cannot be written to tables in web maps")), null;
    return this.sublayers?.length ? super.write(e2, r2) : (o2?.push(new s$2("web-document-write:invalid-property", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`, { layer: this })), null);
  }
  serviceSupportsSpatialReference(e2) {
    return !!this.loaded && e$2(this, e2);
  }
  _getLayerDomain(e2) {
    const r2 = this.fieldsIndex.get(e2);
    return r2 ? r2.domain : null;
  }
  async _initLayerProperties(e2) {
    this._set("source", e2);
    const { sourceJSON: r2 } = e2;
    if (r2 && (this.sourceJSON = r2, this.read(r2, { origin: "service", url: this.parsedUrl })), this.isTable)
      throw new s$2("subtype-grouplayer:unsupported-source", "SubtypeGroupLayer cannot be created using a layer with table source");
    if (!this.subtypes?.length)
      throw new s$2("subtype-grouplayer:missing-subtypes", "SubtypeGroupLayer must be created using a layer with subtypes");
    this._verifyFields(), g(this.timeInfo, this.fieldsIndex);
  }
  async hasDataChanged() {
    return S$2(this);
  }
  _verifyFields() {
    const e2 = this.parsedUrl?.path ?? "undefined";
    this.objectIdField || console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: " + e2 + ")"), this.isTable || -1 !== e2.search(/\/FeatureServer\//i) || this.fields?.some((e3) => "geometry" === e3.type) || console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e2 + ")");
  }
  _handleSublayersChange(e2, r2) {
    r2 && (r2.forEach((e3) => {
      e3.parent = null;
    }), this.removeHandles("sublayers-owner"), this._sublayerLookup.clear()), e2 && (e2.forEach((e3) => {
      e3.parent = this, this._sublayerLookup.set(e3.subtypeCode, e3);
    }), this.addHandles([e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this, this._sublayerLookup.set(e3.subtypeCode, e3);
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null, this._sublayerLookup.delete(e3.subtypeCode);
    })], "sublayers-owner"));
  }
};
e([y({ readOnly: true })], se.prototype, "createQueryVersion", null), e([y({ readOnly: true })], se.prototype, "editingEnabled", null), e([y({ readOnly: true })], se.prototype, "effectiveEditingEnabled", null), e([y({ ...te.fields, readOnly: true, json: { origins: { service: { read: true } }, read: false } })], se.prototype, "fields", void 0), e([y(te.fieldsIndex)], se.prototype, "fieldsIndex", void 0), e([y(I$2)], se.prototype, "id", void 0), e([y({ type: ["show", "hide", "hide-children"], json: { origins: { "portal-item": { read: false, write: false } } } })], se.prototype, "listMode", void 0), e([y({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"], json: { origins: { "portal-item": { name: "layerType", write: { enabled: true, ignoreOrigin: true } } } } })], se.prototype, "operationalLayerType", void 0), e([y(te.outFields)], se.prototype, "outFields", void 0), e([y({ readOnly: true })], se.prototype, "parsedUrl", null), e([y({ clonable: false })], se.prototype, "source", null), e([y({ type: V.ofType(X), json: { origins: { service: { read: { source: "subtypes", reader: (e2, r2, s2) => {
  const i2 = e2.map(({ code: e3 }) => {
    const t2 = new X({ subtypeCode: e3 });
    return t2.read(r2, s2), t2;
  });
  return new (V.ofType(X))(i2);
} } } }, name: "layers", write: { ignoreOrigin: true } } })], se.prototype, "sublayers", void 0), e([y({ type: d })], se.prototype, "timeInfo", void 0), e([y({ json: { origins: { "portal-item": { write: { enabled: true, ignoreOrigin: true, writerEnsuresNonNull: true } } } } })], se.prototype, "title", void 0), e([o$1("service", "title", ["name"])], se.prototype, "readTitleFromService", null), e([y({ json: { read: false } })], se.prototype, "type", void 0), se = e([c$1(ee)], se);
const ie = se;
export {
  ie as default
};
