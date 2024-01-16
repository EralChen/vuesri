import { jr as u, cn as m$1, jk as i$1, bC as s, b8 as a$1, db as o, bb as s$1, j8 as p, fY as p$1, aM as s$2, j9 as p$2, js as x, jt as n, iH as e, bQ as b, bo as e$1, bp as y, cN as r, ju as y$1, jd as m, jb as C, jc as i, cH as c, jq as T, jp as S, je as y$2, d0 as k$1, ct as o$1, jv as p$3, br as c$1, jw as p$4, jx as A, jy as w, jj as s$3, jz as c$2, jA as u$1, jB as S$1, iv as m$2, jC as D, jD as F, cB as a, j7 as a$2, cD as t, cC as f, ck as l, cl as u$2, cm as j, j3 as o$2, iO as i$2, bh as V, ej as k$2, bJ as d$1, bK as C$1, cq as a$3, jE as Q$1, jF as T$1, a_ as I, fN as V$1, jG as h, jH as m$3, jI as w$1, jJ as b$1, g_ as h$1, jK as j$1, jL as I$1, iK as t$1, jM as q, jN as F$1, jO as A$1, jP as O, jQ as P, jR as E, iL as A$2, jS as e$2, ja as g, jT as S$2, cG as I$2, jU as n$1, jV as d, bN as b$2 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const G = ["charts", "editingEnabled", "formTemplate", "labelsVisible", "labelingInfo", "legendEnabled", "minScale", "maxScale", "opacity", "popupEnabled", "popupTemplate", "renderer", "subtypeCode", "templates", "title", "visible"], N = { key: "type", base: p$4, errorContext: "renderer", typeMap: { simple: p$1, "unique-value": A, "class-breaks": w } }, $ = s$3(), k = u({ types: N });
let M = 0;
function _(e2) {
  const t2 = e2.json.write;
  return "object" == typeof t2 ? t2.ignoreOrigin = true : e2.json.write = { ignoreOrigin: true }, e2;
}
function B(e2) {
  return new p$1({ symbol: H(e2) });
}
function H(e2) {
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
function Q(e2, t2) {
  return !!t2 && ("unique-value" === e2?.type && "string" == typeof e2.field && e2.field.toLowerCase() === t2.toLowerCase() && !e2.field2 && !e2.field3 && !e2.valueExpression);
}
function z(e2, t2) {
  return null == e2 ? null : t2.subtypes?.find((t3) => t3.code === e2);
}
function J(e2, t2) {
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
  const i2 = {}, o2 = z(e2, t2);
  if (null != o2) {
    const { defaultValues: e3 } = o2;
    for (const t3 in e3)
      i2[t3] = e3[t3];
  }
  return i2[t2.subtypeField] = e2, new p$3({ name: "New Feature", drawingTool: r2, prototype: { attributes: i2 } });
}
const K = "esri.layers.support.SubtypeSublayer";
let W = class extends m$1(i$1(s(m$2))) {
  constructor(e2) {
    super(e2), this.charts = null, this.editingEnabled = true, this.fieldOverrides = null, this.fieldsIndex = null, this.formTemplate = null, this.id = `${Date.now().toString(16)}-subtype-sublayer-${M++}`, this.type = "subtype-sublayer", this.labelsVisible = true, this.labelingInfo = null, this.layerType = "ArcGISFeatureLayer", this.legendEnabled = true, this.listMode = "show", this.minScale = 0, this.maxScale = 0, this.opacity = 1, this.parent = null, this.popupEnabled = true, this.popupTemplate = null, this.subtypeCode = null, this.templates = null, this.title = null, this.visible = true;
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
      n2 = a$1(e2);
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
    return this.parent || s$1.getLogger(K).error(Y("objectIdField")), this.parent?.objectIdField;
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
    return e2 && !e2.isTable && "mesh" !== e2.geometryType ? B(e2.geometryType) : null;
  }
  readRendererFromService(e2, t2, r2) {
    if ("Table" === t2.type)
      return null;
    const i2 = t2.drawingInfo?.renderer, n2 = k(i2, t2, r2);
    let s2;
    const { subtypeCode: l2 } = this;
    if (null != l2 && Q(n2, t2.subtypeField)) {
      const e3 = n2.uniqueValueInfos?.find(({ value: e4 }) => (e4 = "number" == typeof e4 ? String(e4) : e4) === String(l2));
      e3 && (s2 = new p$1({ symbol: e3.symbol }));
    } else
      "simple" !== n2?.type || n2.visualVariables?.length || (s2 = n2);
    return s2;
  }
  readRenderer(e2, t2, r2) {
    const i2 = t2?.layerDefinition?.drawingInfo?.renderer;
    if (!i2)
      return;
    const o2 = i2.visualVariables?.some((e3) => "rotationInfo" !== e3.type);
    return o2 ? void 0 : k(i2, t2, r2) || void 0;
  }
  get spatialReference() {
    return this.parent?.spatialReference;
  }
  readTemplatesFromService(e2, t2) {
    return [J(this.subtypeCode, t2)];
  }
  readTitleFromService(e2, t2) {
    const r2 = z(this.subtypeCode, t2);
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
      throw Y("addAttachment");
    if (e2.getAttribute(r2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:addAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return r2.addAttachment(e2, t2);
  }
  async updateAttachment(e2, t2, r2) {
    const { parent: i2 } = this;
    if (!i2)
      throw Y("updateAttachment");
    if (e2.getAttribute(i2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:updateAttachment", "The feature provided does not belong to this SubtypeSublayer");
    return i2.updateAttachment(e2, t2, r2);
  }
  async deleteAttachments(e2, t2) {
    const { parent: r2 } = this;
    if (!r2)
      throw Y("deleteAttachments");
    if (e2.getAttribute(r2.subtypeField) !== this.subtypeCode)
      throw new s$2("subtype-sublayer:deleteAttachments", "The feature provided does not belong to this SubtypeSublayer");
    return r2.deleteAttachments(e2, t2);
  }
  async applyEdits(e2, t2) {
    if (!this.parent)
      throw Y("applyEdits");
    return this.parent.applyEdits(e2, t2);
  }
  createPopupTemplate(e2) {
    let t2 = this;
    const { parent: r2, fields: i2, title: o2 } = this;
    if (r2) {
      const { displayField: e3, editFieldsInfo: n2, objectIdField: s2 } = r2;
      t2 = { displayField: e3, editFieldsInfo: n2, fields: i2, objectIdField: s2, title: o2 };
    }
    return p$2(t2, e2);
  }
  createQuery() {
    if (!this.parent)
      throw Y("createQuery");
    const e2 = x(this.parent), t2 = `${this.parent.subtypeField}=${this.subtypeCode}`;
    return e2.where = n(t2, this.parent.definitionExpression), e2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2) {
    return this._getLayerDomain(e2);
  }
  hasUserOverrides() {
    return G.some((e$12) => this.originIdOf(e$12) === e.USER);
  }
  async queryAttachments(e2, t2) {
    const r2 = await this.load();
    if (!r2.parent)
      throw Y("queryAttachments");
    const i2 = e2.clone();
    return i2.where = X(i2.where, r2.parent.subtypeField, r2.subtypeCode), r2.parent.queryAttachments(e2, t2);
  }
  async queryFeatures(e2, t2) {
    const r2 = await this.load();
    if (!r2.parent)
      throw Y("queryFeatures");
    const i2 = b.from(e2) ?? r2.createQuery();
    return null != e2 && (i2.where = X(i2.where, r2.parent.subtypeField, r2.subtypeCode)), r2.parent.queryFeatures(i2, t2);
  }
  _getLayerDomain(e2) {
    const t2 = this.fieldsIndex.get(e2);
    return t2 ? t2.domain : null;
  }
};
e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "capabilities", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "effectiveCapabilities", null), e$1([y({ json: { write: { ignoreOrigin: true } } })], W.prototype, "charts", void 0), e$1([y({ type: Boolean, nonNullable: true, json: { name: "enableEditing", write: { ignoreOrigin: true } } })], W.prototype, "editingEnabled", void 0), e$1([y({ type: Boolean, readOnly: true })], W.prototype, "effectiveEditingEnabled", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "elevationInfo", null), e$1([y({ json: { name: "layerDefinition.fieldOverrides", origins: { service: { read: false } }, write: { ignoreOrigin: true, allowNull: true } } })], W.prototype, "fieldOverrides", void 0), e$1([r("fieldOverrides")], W.prototype, "writeFieldOverrides", null), e$1([y({ ...$.fields, readOnly: true, json: { read: false } })], W.prototype, "fields", null), e$1([y($.fieldsIndex)], W.prototype, "fieldsIndex", void 0), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "floorInfo", null), e$1([y({ type: y$1, json: { name: "formInfo", write: { ignoreOrigin: true } } })], W.prototype, "formTemplate", void 0), e$1([y({ type: String, clonable: false, readOnly: true, json: { origins: { service: { read: false } }, write: { ignoreOrigin: true } } })], W.prototype, "id", void 0), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "geometryType", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "type", void 0), e$1([y(_(a$1(m)))], W.prototype, "labelsVisible", void 0), e$1([y({ type: [C], json: { name: "layerDefinition.drawingInfo.labelingInfo", origins: { service: { read: false } }, read: { reader: i }, write: { ignoreOrigin: true } } })], W.prototype, "labelingInfo", void 0), e$1([y({ type: ["ArcGISFeatureLayer"], readOnly: true, json: { read: false, write: { ignoreOrigin: true } } })], W.prototype, "layerType", void 0), e$1([y(_(a$1(c)))], W.prototype, "legendEnabled", void 0), e$1([y({ type: ["show", "hide"] })], W.prototype, "listMode", void 0), e$1([y((() => {
  const e2 = a$1(T);
  return e2.json.origins.service.read = false, _(e2);
})())], W.prototype, "minScale", void 0), e$1([y((() => {
  const e2 = a$1(S);
  return e2.json.origins.service.read = false, _(e2);
})())], W.prototype, "maxScale", void 0), e$1([y({ readOnly: true })], W.prototype, "effectiveScaleRange", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "objectIdField", null), e$1([y({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { write: { ignoreOrigin: true } } })], W.prototype, "opacity", void 0), e$1([y({ clonable: false })], W.prototype, "parent", void 0), e$1([y(_(a$1(y$2)))], W.prototype, "popupEnabled", void 0), e$1([y({ type: k$1, json: { name: "popupInfo", write: { ignoreOrigin: true } } })], W.prototype, "popupTemplate", void 0), e$1([y({ readOnly: true })], W.prototype, "defaultPopupTemplate", null), e$1([y({ types: N, json: { write: { target: "layerDefinition.drawingInfo.renderer", ignoreOrigin: true } } })], W.prototype, "renderer", null), e$1([o$1("service", "renderer", ["drawingInfo.renderer", "subtypeField", "type"])], W.prototype, "readRendererFromService", null), e$1([o$1("renderer", ["layerDefinition.drawingInfo.renderer"])], W.prototype, "readRenderer", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "spatialReference", null), e$1([y({ type: Number, json: { origins: { service: { read: false } }, write: { ignoreOrigin: true } } })], W.prototype, "subtypeCode", void 0), e$1([y({ type: [p$3], json: { name: "layerDefinition.templates", write: { ignoreOrigin: true } } })], W.prototype, "templates", void 0), e$1([o$1("service", "templates", ["geometryType", "subtypeField", "subtypes", "type"])], W.prototype, "readTemplatesFromService", null), e$1([y({ type: String, json: { write: { ignoreOrigin: true } } })], W.prototype, "title", void 0), e$1([o$1("service", "title", ["subtypes"])], W.prototype, "readTitleFromService", null), e$1([y({ readOnly: true, json: { read: false } })], W.prototype, "url", null), e$1([y({ readOnly: true })], W.prototype, "userHasUpdateItemPrivileges", null), e$1([y({ type: Boolean, nonNullable: true, json: { name: "visibility", write: { ignoreOrigin: true } } })], W.prototype, "visible", void 0), W = e$1([c$1(K)], W);
const X = (e2, t2, r2) => {
  const i2 = new RegExp(`${t2}\\s*=\\s*\\d+`), o2 = `${t2}=${r2}`, n$12 = e2 ?? "";
  return i2.test(n$12) ? n$12.replace(i2, o2) : n(o2, n$12);
}, Y = (e2) => new s$2(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e2}`), Z = W;
const re = "SubtypeGroupLayer", te = "esri.layers.SubtypeGroupLayer";
function se(e2, r2) {
  return new s$2("layer:unsupported", `Layer (${e2.title}, ${e2.id}) of type '${e2.declaredClass}' ${r2}`, { layer: e2 });
}
const ie = s$3();
let oe = class extends D(F(a(a$2(t(f(l(u$2(j(m$1(o$2(i$2(i$1(b$2))))))))))))) {
  constructor(...e2) {
    super(...e2), this._sublayersCollectionChanged = false, this._sublayerLookup = /* @__PURE__ */ new Map(), this.fields = null, this.fieldsIndex = null, this.outFields = null, this.sublayers = new (V.ofType(Z))(), this.timeInfo = null, this.title = "Layer", this.type = "subtype-group", this._debouncedSaveOperations = k$2(async (e3, r2, t2) => {
      const { save: s2, saveAs: i2 } = await import("./chunk-FWaE7Ign.js");
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
    const r2 = null != e2 ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e2).catch(a$3).then(async () => {
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
    return m$3(this, e2, r2, re);
  }
  async updateAttachment(e2, r2, t2) {
    return w$1(this, e2, r2, t2, re);
  }
  async applyEdits(e2, r2) {
    return b$1(this, e2, r2);
  }
  on(e2, r2) {
    return super.on(e2, r2);
  }
  async createGraphicsSource(e2) {
    const { default: r2 } = await h$1(import("./chunk-O4CDFUJG.js"), e2);
    return new r2({ layer: this }).load({ signal: e2 });
  }
  createQuery() {
    const e2 = x(this), r2 = this.sublayers.map((e3) => e3.subtypeCode);
    return e2.where = n(`${this.subtypeField} IN (${r2.join(",")})`, this.definitionExpression), e2;
  }
  async deleteAttachments(e2, r2) {
    return j$1(this, e2, r2, re);
  }
  async fetchRecomputedExtents(e2) {
    return I$1(this, e2, re);
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
    return q(this, e2, r2, re);
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
    return F$1(this, e2, r2, re);
  }
  async queryFeatureCount(e2, r2) {
    return A$1(this, e2, r2, re);
  }
  async queryExtent(e2, r2) {
    return O(this, e2, r2, re);
  }
  async queryRelatedFeatures(e2, r2) {
    return P(this, e2, r2, re);
  }
  async queryRelatedFeaturesCount(e2, r2) {
    return E(this, e2, r2, re);
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
        return o2?.push(se(this, "using a table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && "web-map" === t2 && "tables" === i2)
      return o2?.push(se(this, "using a non-table source cannot be written to tables in web maps")), null;
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
    }), this._sublayersCollectionChanged = false, this.addHandles([e2.on("after-add", ({ item: e3 }) => {
      e3.parent = this, this._sublayerLookup.set(e3.subtypeCode, e3);
    }), e2.on("after-remove", ({ item: e3 }) => {
      e3.parent = null, this._sublayerLookup.delete(e3.subtypeCode);
    }), e2.on("after-changes", () => {
      this._sublayersCollectionChanged = true;
    })], "sublayers-owner"));
  }
};
e$1([y({ readOnly: true })], oe.prototype, "createQueryVersion", null), e$1([y({ readOnly: true })], oe.prototype, "editingEnabled", null), e$1([y({ readOnly: true })], oe.prototype, "effectiveEditingEnabled", null), e$1([y({ ...ie.fields, readOnly: true, json: { origins: { service: { read: true } }, read: false } })], oe.prototype, "fields", void 0), e$1([y(ie.fieldsIndex)], oe.prototype, "fieldsIndex", void 0), e$1([y(I$2)], oe.prototype, "id", void 0), e$1([y({ type: ["show", "hide", "hide-children"], json: { origins: { "portal-item": { read: false, write: false } } } })], oe.prototype, "listMode", void 0), e$1([y({ value: "SubtypeGroupLayer", type: ["SubtypeGroupLayer"], json: { origins: { "portal-item": { name: "layerType", write: { enabled: true, ignoreOrigin: true } } } } })], oe.prototype, "operationalLayerType", void 0), e$1([y(ie.outFields)], oe.prototype, "outFields", void 0), e$1([y({ readOnly: true })], oe.prototype, "parsedUrl", null), e$1([y({ clonable: false })], oe.prototype, "source", null), e$1([y({ type: V.ofType(Z), json: { origins: { service: { read: { source: "subtypes", reader: (e2, r2, s2) => {
  const i2 = e2.map(({ code: e3 }) => {
    const t2 = new Z({ subtypeCode: e3 });
    return t2.read(r2, s2), t2;
  });
  return new (V.ofType(Z))(i2);
} } } }, name: "layers", write: { overridePolicy(e$12, r2, t2) {
  const s2 = this.originOf("sublayers"), i2 = e.PORTAL_ITEM;
  let o2 = true;
  if (n$1(s2) === i2 && n$1(t2.origin) > i2) {
    const r3 = e$12.some((e2) => e2.hasUserOverrides());
    o2 = this._sublayersCollectionChanged || r3;
  }
  return { enabled: o2, ignoreOrigin: true };
} } } })], oe.prototype, "sublayers", void 0), e$1([y({ type: d })], oe.prototype, "timeInfo", void 0), e$1([y({ json: { origins: { "portal-item": { write: { enabled: true, ignoreOrigin: true, writerEnsuresNonNull: true } } } } })], oe.prototype, "title", void 0), e$1([o$1("service", "title", ["name"])], oe.prototype, "readTitleFromService", null), e$1([y({ json: { read: false } })], oe.prototype, "type", void 0), oe = e$1([c$1(te)], oe);
const ae = oe;
export {
  ae as default
};
