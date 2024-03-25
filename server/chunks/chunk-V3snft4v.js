import { d1 as n, d2 as f, av as u$1, aw as j, ax as t, ay as m, bS as bt, aP as a, aQ as U$1, bP as C, at as s$1, aV as e, aX as y, cV as o, aC as M, d3 as I, d4 as c, aZ as d, a_ as c$1, d5 as n$1, d6 as d$1, d7 as n$2, d8 as y$1, b_ as S, a$ as b } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const G = ["atom", "xml"], P = { base: n$1, key: "type", typeMap: { "simple-line": d$1 }, errorContext: "symbol" }, R = { base: n$1, key: "type", typeMap: { "picture-marker": n$2, "simple-marker": y$1 }, errorContext: "symbol" }, k = { base: n$1, key: "type", typeMap: { "simple-fill": S }, errorContext: "symbol" };
let _ = class extends n(f(u$1(j(t(m(b)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, o2) {
    return "string" == typeof e2 ? { url: e2, ...o2 } : e2;
  }
  readFeatureCollections(e2, o2) {
    return o2.featureCollection.layers.forEach((e3) => {
      const o3 = e3.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && o3.outline?.style.includes("esriSFS") && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e2 = this._get("title");
    return e2 && "defaults" !== this.originOf("title") ? e2 : this.url ? bt(this.url, G) || "GeoRSS" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  load(e2) {
    const o2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e2).catch(a).then(() => this._fetchService(o2)).then((e3) => {
      this.read(e3, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e2 = await this._fetchService();
    return this.read(e2, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e2) {
    const t2 = this.spatialReference, { data: s } = await U$1(s$1.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: C(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e2 });
    return s;
  }
  _hasGeometry(e2) {
    return this.featureCollections?.some((o2) => o2.featureSet?.geometryType === e2 && o2.featureSet.features?.length > 0) ?? false;
  }
};
e([y()], _.prototype, "description", void 0), e([y()], _.prototype, "featureCollections", void 0), e([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), e([y({ type: M, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), e([y(I)], _.prototype, "id", void 0), e([y(c)], _.prototype, "legendEnabled", void 0), e([y({ types: P, json: { write: true } })], _.prototype, "lineSymbol", void 0), e([y({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), e([y({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), e([y({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), e([y({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), e([y(d)], _.prototype, "url", void 0), e([y({ json: { origins: { service: { read: { source: "name", reader: (e2) => e2 || void 0 } } } } })], _.prototype, "title", null), e([y({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = e([c$1("esri.layers.GeoRSSLayer")], _);
const w = _;
export {
  w as default
};
