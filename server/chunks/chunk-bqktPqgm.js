import { ds as o, jc as u, eV as v, cf as C, ce as d$1, ex as w$1, aC as M, jw as d, bQ as V, aV as e, aX as y, jx as u$1, cV as o$1, a_ as c, iK as m, d1 as n, d2 as f, ax as t, av as u$2, aw as j$2, ay as m$1, fH as l, aB as f$1, bS as bt, aP as a, da as r, aZ as d$3, a$ as b } from "./chunk-ejFG4zJ0.js";
import { j as j$1, S as S$1, g, d as d$2 } from "./chunk-_d8mkte2.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var j;
let S = j = class extends o.EventedMixin(u(m)) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.id = null, this.networkLink = null, this.parent = null, this.sublayers = null, this.title = null, this.sourceJSON = null, this.layer = null, this.addHandles([v(() => this.sublayers, "after-add", ({ item: e3 }) => {
      e3.parent = this, e3.layer = this.layer;
    }, C), v(() => this.sublayers, "after-remove", ({ item: e3 }) => {
      e3.layer = e3.parent = null;
    }, C), d$1(() => this.sublayers, (e3, t2) => {
      if (t2)
        for (const r2 of t2)
          r2.layer = r2.parent = null;
      if (e3)
        for (const r2 of e3)
          r2.parent = this, r2.layer = this.layer;
    }, C), d$1(() => this.layer, (e3) => {
      if (this.sublayers)
        for (const t2 of this.sublayers)
          t2.layer = e3;
    }, C)]);
  }
  initialize() {
    w$1(() => this.networkLink).then(() => w$1(() => true === this.visible)).then(() => this.load());
  }
  load(e2) {
    if (!this.networkLink)
      return;
    if (this.networkLink.viewFormat)
      return;
    const r2 = null != e2 ? e2.signal : null, s = this._fetchService(this._get("networkLink")?.href ?? "", r2).then((e3) => {
      const r3 = j$1(e3.sublayers);
      this.fullExtent = M.fromJSON(r3), this.sourceJSON = e3;
      const s2 = d(V.ofType(j), S$1(j, e3));
      this.sublayers ? this.sublayers.addMany(s2) : this.sublayers = s2, this.layer?.emit("sublayer-update"), this.layer && this.layer.notifyChange("visibleSublayers");
    });
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e2) {
    this._get("visible") !== e2 && (this._set("visible", e2), this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e2, t2) {
    return !!t2.visibility;
  }
  _fetchService(e2, t2) {
    return g(e2, this.layer.outSpatialReference, this.layer.refreshInterval, t2).then((e3) => d$2(e3.data));
  }
};
e([y()], S.prototype, "description", void 0), e([y({ type: M })], S.prototype, "fullExtent", void 0), e([y()], S.prototype, "id", void 0), e([y({ readOnly: true, value: null })], S.prototype, "networkLink", void 0), e([y({ json: { write: { allowNull: true } } })], S.prototype, "parent", void 0), e([y({ type: V.ofType(S), json: { write: { allowNull: true } } })], S.prototype, "sublayers", void 0), e([y({ value: null, json: { read: { source: "name", reader: (e2) => u$1(e2) } } })], S.prototype, "title", void 0), e([y({ value: true })], S.prototype, "visible", null), e([o$1("visible", ["visibility"])], S.prototype, "readVisible", null), e([y()], S.prototype, "sourceJSON", void 0), e([y()], S.prototype, "layer", void 0), S = j = e([c("esri.layers.support.KMLSublayer")], S);
const k = S;
const w = ["kml", "xml"];
let F = class extends n(f(t(u$2(j$2(m$1(b)))))) {
  constructor(...e2) {
    super(...e2), this._visibleFolders = [], this.allSublayers = new l({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.sublayers }), this.outSpatialReference = f$1.WGS84, this.path = null, this.legendEnabled = false, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }
  initialize() {
    this.addHandles([d$1(() => this.sublayers, (e2, r2) => {
      r2 && r2.forEach((e3) => {
        e3.parent = null, e3.layer = null;
      }), e2 && e2.forEach((e3) => {
        e3.parent = this, e3.layer = this;
      });
    }, C), this.on("sublayer-update", () => this.notifyChange("fullExtent"))]);
  }
  normalizeCtorArgs(e2, r2) {
    return "string" == typeof e2 ? { url: e2, ...r2 } : e2;
  }
  readSublayersFromItemOrWebMap(e2, r2) {
    this._visibleFolders = r2.visibleFolders;
  }
  readSublayers(e2, r2, t2) {
    return S$1(k, r2, t2, this._visibleFolders);
  }
  writeSublayers(e2, r2) {
    const t2 = [], o2 = e2.toArray();
    for (; o2.length; ) {
      const e3 = o2[0];
      e3.networkLink || (e3.visible && t2.push(e3.id), e3.sublayers && o2.push(...e3.sublayers.toArray())), o2.shift();
    }
    r2.visibleFolders = t2;
  }
  get title() {
    const e2 = this._get("title");
    return e2 && "defaults" !== this.originOf("title") ? e2 : this.url ? bt(this.url, w) || "KML" : e2 || "";
  }
  set title(e2) {
    this._set("title", e2);
  }
  get visibleSublayers() {
    const e2 = this.sublayers, r2 = [], t2 = (e3) => {
      e3.visible && (r2.push(e3), e3.sublayers && e3.sublayers.forEach(t2));
    };
    return e2 && e2.forEach(t2), r2;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e2) {
    const r2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["KML"], supportsData: false }, e2).catch(a).then(() => this._fetchService(r2))), Promise.resolve(this);
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  async _fetchService(e2) {
    const r2 = await Promise.resolve().then(() => this.resourceInfo ? { ssl: false, data: this.resourceInfo } : g(this.url ?? "", this.outSpatialReference, this.refreshInterval, e2)), t2 = d$2(r2.data);
    t2 && this.read(t2, { origin: "service" });
  }
  _recomputeFullExtent() {
    let e2 = null;
    null != this.extent && (e2 = this.extent.clone());
    const r2 = (t2) => {
      if (t2.sublayers)
        for (const o2 of t2.sublayers.items)
          r2(o2), o2.visible && o2.fullExtent && (null != e2 ? e2.union(o2.fullExtent) : e2 = o2.fullExtent.clone());
    };
    return r2(this), e2;
  }
};
e([y({ readOnly: true })], F.prototype, "allSublayers", void 0), e([y({ type: f$1 })], F.prototype, "outSpatialReference", void 0), e([y({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], F.prototype, "path", void 0), e([y({ readOnly: true, json: { read: false, write: false } })], F.prototype, "legendEnabled", void 0), e([y({ type: ["show", "hide", "hide-children"] })], F.prototype, "listMode", void 0), e([y({ type: ["KML"] })], F.prototype, "operationalLayerType", void 0), e([y({})], F.prototype, "resourceInfo", void 0), e([y({ type: V.ofType(k), json: { write: { ignoreOrigin: true } } })], F.prototype, "sublayers", void 0), e([o$1(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], F.prototype, "readSublayersFromItemOrWebMap", null), e([o$1("service", "sublayers", ["sublayers"])], F.prototype, "readSublayers", null), e([r("sublayers")], F.prototype, "writeSublayers", null), e([y({ readOnly: true, json: { read: false } })], F.prototype, "type", void 0), e([y({ json: { origins: { "web-map": { read: { source: "title" } } }, write: { ignoreOrigin: true } } })], F.prototype, "title", null), e([y(d$3)], F.prototype, "url", void 0), e([y({ readOnly: true })], F.prototype, "visibleSublayers", null), e([y({ type: M })], F.prototype, "extent", void 0), e([y()], F.prototype, "fullExtent", null), F = e([c("esri.layers.KMLLayer")], F);
const O = F;
export {
  O as default
};
