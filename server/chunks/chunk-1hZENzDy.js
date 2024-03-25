import { hH as e, ax as t, d1 as n, ay as m, bQ as V, my as c, mz as T$1, eL as r, cm as e$1, aT as s$1, bo as a, bw as Q$1, a$ as b$1, bv as S, aV as e$2, aX as y, mA as g$2, a_ as c$1, jE as p, jI as p$1, jK as C, jL as i, jM as m$1, d4 as c$2, jN as y$1, dp as P, jO as m$2, k8 as D, jF as c$3, jG as f, d2 as f$1, au as l, av as u$1, aw as j, az as e$3, aA as i$1, jT as i$2, aP as a$1, aO as s, iM as Q$2, bT as I, gG as V$1, ck as b$2, kn as e$4, dN as o, aQ as U$1, jS as s$2 } from "./chunk-ejFG4zJ0.js";
import H from "./chunk-c3c_C8vI.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-_XGy4kgm.js";
class _ {
  constructor(e2, r2) {
    this.objectId = e2, this.itemSource = r2, this.count = 0, this.layer = null, this.sortValue = void 0;
  }
}
const g$1 = new e(20, (e2) => e2.destroy());
let L = class extends t(n(m(b$1))) {
  constructor(e2) {
    super(e2), this._oidToReference = /* @__PURE__ */ new Map(), this._layerToReference = /* @__PURE__ */ new Map(), this._portals = /* @__PURE__ */ new Map(), this.layers = new V(), this.maximumVisibleSublayers = 10, this.opacity = 1, this.title = "Layers In View", this.type = "catalog-dynamic-group", this.visible = true;
  }
  load(e2) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  get _orderBy() {
    return this.parent.orderBy?.find((e2) => !e2.valueExpression && e2.field) ?? new c({ field: this.parent.objectIdField });
  }
  get _referenceComparator() {
    const e2 = this._orderBy, r2 = this.parent.fieldsIndex.get(e2.field), t2 = T$1(r2?.toJSON().type, "descending" === e2.order);
    return (e3, r3) => {
      const o2 = t2(e3.sortValue, r3.sortValue);
      return o2 || e3.objectId - e3.objectId;
    };
  }
  acquireLayer(e2) {
    const r$1 = e2.getObjectId(), o2 = r(this._oidToReference, r$1, () => this._createLayerReference(e2));
    return o2.count++, e$1(() => {
      o2.count--, o2.count || this._disposeLayerReference(o2);
    });
  }
  _createLayerReference(e2) {
    const r2 = e2.getObjectId(), t2 = e2.getAttribute(this.parent.itemSourceField), s2 = new _(r2, t2);
    if (g$1.get(t2))
      return this._addLayer(g$1.pop(t2), s2, e2), s2;
    let i2;
    try {
      i2 = JSON.parse(t2);
    } catch (a2) {
      return s$1.getLogger(this).error(a2), s2;
    }
    return this._createLayer(i2).then((r3) => {
      this.destroyed || 0 === s2.count ? (g$1.get(t2) || g$1.put(s2.itemSource, r3), s2.layer = null) : this._addLayer(r3, s2, e2);
    }).catch(() => {
    }), s2;
  }
  _addLayer(e2, r2, t2) {
    this._layerToReference.set(e2, r2), r2.sortValue = t2.getAttribute(this._orderBy.field), r2.layer = e2, e2.parent = this, this.layers.add(e2), this.layers.sort((e3, r3) => this._referenceComparator(this._layerToReference.get(e3), this._layerToReference.get(r3)));
  }
  _disposeLayerReference(e2) {
    e2.layer && (this._layerToReference.delete(e2.layer), this.layers.remove(e2.layer), g$1.put(e2.itemSource, e2.layer)), this._oidToReference.delete(e2.objectId);
  }
  async _createLayer(e2) {
    if (!R(e2)) {
      return new (await a.UnsupportedLayer())();
    }
    const { itemId: r$1, portalUrl: t2 } = e2, o2 = r(this._portals, t2, () => new Q$1({ url: t2 }));
    return b$1.fromPortalItem(new S({ id: r$1, portal: o2 }));
  }
};
e$2([y()], L.prototype, "_orderBy", null), e$2([y()], L.prototype, "_referenceComparator", null), e$2([y({ readOnly: true })], L.prototype, "layers", void 0), e$2([y()], L.prototype, "maximumVisibleSublayers", void 0), e$2([y(g$2)], L.prototype, "opacity", void 0), e$2([y({ type: String, json: { name: "title", write: true } })], L.prototype, "title", void 0), e$2([y({ json: { read: false } })], L.prototype, "type", void 0), e$2([y({ type: Boolean, json: { name: "visibility", write: true } })], L.prototype, "visible", void 0), L = e$2([c$1("esri.layers.catalog.CatalogDynamicGroupLayer")], L);
const b = L;
function R(e2) {
  return "object" == typeof e2 && null != e2 && "itemId" in e2 && "portalUrl" in e2;
}
let h = class extends t(p(n(m(b$1)))) {
  constructor(e2) {
    super(e2), this.labelingInfo = null, this.labelsVisible = true, this.legendEnabled = true, this.opacity = 1, this.popupEnabled = true, this.popupTemplate = null, this.renderer = null, this.type = "catalog-footprint", this.visible = true;
  }
  load(e2) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get fields() {
    return this.parent.fields;
  }
  get fieldsIndex() {
    return this.parent.fieldsIndex;
  }
  get geometryType() {
    return this.parent.geometryType;
  }
  get objectIdField() {
    return this.parent.objectIdField;
  }
  get orderBy() {
    return this.parent.orderBy;
  }
  createPopupTemplate(e2) {
    const r2 = { fields: this.parent.fields, objectIdField: this.parent.objectIdField, title: this.title };
    return p$1(r2, e2);
  }
  createQuery() {
    return this.parent.createQuery();
  }
  queryFeatures(e2, r2) {
    return this.parent.queryFeatures(e2, r2);
  }
};
e$2([y({ readOnly: true })], h.prototype, "defaultPopupTemplate", null), e$2([y({ type: [C], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: i, write: true } })], h.prototype, "labelingInfo", void 0), e$2([y(m$1)], h.prototype, "labelsVisible", void 0), e$2([y(c$2)], h.prototype, "legendEnabled", void 0), e$2([y(g$2)], h.prototype, "opacity", void 0), e$2([y(y$1)], h.prototype, "popupEnabled", void 0), e$2([y({ type: P, json: { name: "popupInfo", write: true } })], h.prototype, "popupTemplate", void 0), e$2([y({ types: m$2, json: { name: "layerDefinition.drawingInfo.renderer" } })], h.prototype, "renderer", void 0), e$2([y({ json: { read: false } })], h.prototype, "type", void 0), e$2([y({ type: Boolean, json: { name: "visibility", write: true } })], h.prototype, "visible", void 0), h = e$2([c$1("esri.layers.catalog.CatalogFootprintLayer")], h);
const g = h;
const E = "esri.layers.CatalogLayer", Q = s$2();
let T = class extends D(n(c$3(f(t(f$1(l(u$1(j(m(e$3(i$1(i$2(b$1))))))))))))) {
  constructor(e2) {
    super(e2), this.dynamicGroupLayer = new b({ parent: this }), this.fields = null, this.fieldsIndex = null, this.footprintLayer = new g({ parent: this }), this.itemSourceField = "cd_itemsource", this.itemTypeField = "cd_itemtype", this.layers = new V([this.dynamicGroupLayer, this.footprintLayer]), this.source = new H({ layer: this }), this.type = "catalog";
  }
  load(e2) {
    const r2 = null != e2 ? e2.signal : null, t2 = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e2).catch(a$1).then(async () => {
      if (!this.url)
        throw new s("catalog-layer:missing-url", "Catalog layer must be created with a url");
      if (this.url && null == this.layerId) {
        const e3 = await this._fetchFirstValidLayerId(r2);
        if (null == e3)
          throw new s("catalog-layer:missing-layerId", "There is no Catalog Layer in the service", { service: this.url });
        this.layerId = e3;
      }
      await this.source.load(), this.source.sourceJSON && (this.sourceJSON = this.source.sourceJSON, this.read(this.source.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl }));
    }).then(() => Q$2(this, "load", e2));
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get parsedUrl() {
    const e2 = I(this.url);
    return null != e2 && null != this.layerId && (e2.path = V$1(e2.path, this.layerId.toString())), e2;
  }
  createQuery() {
    const e2 = new b$2(), r2 = this.capabilities?.query;
    e2.returnGeometry = true, r2 && (e2.compactGeometryEnabled = r2.supportsCompactGeometry, e2.defaultSpatialReferenceEnabled = r2.supportsDefaultSpatialReference), e2.outFields = ["*"];
    const { timeOffset: t2, timeExtent: o2 } = this;
    return e2.timeExtent = null != t2 && null != o2 ? o2.offset(-t2.value, t2.unit) : o2 || null, e2;
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, r2) {
    return this.fieldsIndex.get(e2)?.domain;
  }
  async queryFeatures(e2, r2) {
    const t2 = await this.load(), o2 = await t2.source.queryFeatures(b$2.from(e2) ?? t2.createQuery(), r2);
    if (o2?.features)
      for (const i2 of o2.features)
        i2.layer = i2.sourceLayer = t2.footprintLayer;
    return o2;
  }
  async queryObjectIds(e2, r2) {
    return (await this.load()).source.queryObjectIds(b$2.from(e2) ?? this.createQuery(), r2);
  }
  async queryFeatureCount(e2, r2) {
    return (await this.load()).source.queryFeatureCount(b$2.from(e2) ?? this.createQuery(), r2);
  }
  async queryExtent(e2, r2) {
    return (await this.load()).source.queryExtent(b$2.from(e2) ?? this.createQuery(), r2);
  }
  serviceSupportsSpatialReference(e2) {
    return this.loaded && e$4(this, e2);
  }
  read(e2, r2) {
    super.read(e2, r2);
    let t2 = e2.footprintLayer;
    t2 || "service" !== r2?.origin || (t2 = { layerDefinition: { drawingInfo: o(e2.geometryType) } }), this.footprintLayer.read(t2, r2);
  }
  _fetchFirstValidLayerId(e2) {
    return U$1(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e2 }).then((e3) => {
      const r2 = e3.data;
      if (r2)
        return Array.isArray(r2.layers) ? r2.layers.find((e4) => "Catalog Layer" === e4.type)?.id : void 0;
    });
  }
};
e$2([y({ readOnly: true })], T.prototype, "createQueryVersion", null), e$2([y({ ...Q.fields, json: { origins: { service: { name: "fields" } } } })], T.prototype, "fields", void 0), e$2([y(Q.fieldsIndex)], T.prototype, "fieldsIndex", void 0), e$2([y({ json: { read: false, write: false } })], T.prototype, "footprintLayer", void 0), e$2([y()], T.prototype, "itemSourceField", void 0), e$2([y()], T.prototype, "itemTypeField", void 0), e$2([y()], T.prototype, "layers", void 0), e$2([y({ value: "CatalogLayer", type: ["CatalogLayer"] })], T.prototype, "operationalLayerType", void 0), e$2([y()], T.prototype, "outFields", void 0), e$2([y({ readOnly: true })], T.prototype, "parsedUrl", null), e$2([y()], T.prototype, "source", void 0), e$2([y({ json: { read: false } })], T.prototype, "type", void 0), T = e$2([c$1(E)], T);
const G = T;
export {
  G as default
};
