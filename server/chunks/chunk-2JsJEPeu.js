import { d1 as n, ax as t, av as u$1, aw as j, jg as n$1, jh as d, ay as m, fH as l, ji as t$1, f9 as k, ce as d$1, jj as e$1, jk as f, bv as S, jl as r, bo as a, aP as a$1, jm as t$2, jn as A, jo as t$3, aV as e$2, aX as y, da as r$1, cV as o, cl as A$1, eV as v, cf as C$1, a_ as c, a$ as b, aT as s$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const e = Symbol("WebScene");
let V = class extends n(t(u$1(j(n$1(d(m(b))))))) {
  constructor(e2) {
    super(e2), this.allLayers = new l({ getCollections: () => [this.layers], getChildrenFunction: (e3) => "layers" in e3 ? e3.layers : null }), this.allTables = t$1(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = k(async (e3, i, t2) => {
      const { save: r2, saveAs: s } = await import("./chunk-7OHu2TiE.js");
      switch (e3) {
        case A.SAVE:
          return r2(this, i);
        case A.SAVE_AS:
          return s(this, t2, i);
      }
    });
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([d$1(() => {
      let e$12 = this.parent;
      for (; e$12 && "parent" in e$12 && e$12.parent; )
        e$12 = e$12.parent;
      return e$12 && e in e$12;
    }, (e2) => {
      const i = "prevent-adding-tables";
      this.removeHandles(i), e2 && (this.tables.removeAll(), this.addHandles(v(() => this.tables, "before-add", (e3) => {
        e3.preventDefault(), s$1.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), i));
    }, A$1), d$1(() => this.visible, this._onVisibilityChange.bind(this), C$1)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === e$1.USER;
  }
  _writeLayers(e2, i, t2, r2) {
    const s = [];
    if (!e2)
      return s;
    e2.forEach((e3) => {
      const i2 = f(e3, r2.webmap ? r2.webmap.getLayerJSONFromResourceInfo(e3) : null, r2);
      i2?.layerType && s.push(i2);
    }), i.layers = s;
  }
  set portalItem(e2) {
    this._set("portalItem", e2);
  }
  readPortalItem(e2, i, t2) {
    const { itemId: r2, layerType: s } = i;
    if ("GroupLayer" === s && r2)
      return new S({ id: r2, portal: t2?.portal });
  }
  writePortalItem(e2, i) {
    e2?.id && (i.itemId = e2.id);
  }
  set visibilityMode(e2) {
    const i = this._get("visibilityMode") !== e2;
    this._set("visibilityMode", e2), i && this._enforceVisibility(e2, this.visible);
  }
  async beforeSave() {
    return r(this);
  }
  load(e2) {
    const i = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service"], layerModuleTypeMap: a }, e2).catch((e3) => {
      if (a$1(e3), this.sourceIsPortalItem)
        throw e3;
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  async loadAll() {
    return t$2(this, (e2) => {
      e2(this.layers, this.tables);
    });
  }
  async save(e2) {
    return this._debouncedSaveOperations(A.SAVE, e2);
  }
  async saveAs(e2, i) {
    return this._debouncedSaveOperations(A.SAVE_AS, i, e2);
  }
  layerAdded(e2) {
    e2.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e2) : "inherited" === this.visibilityMode && (e2.visible = this.visible), this.hasHandles(e2.uid) ? console.error(`Layer read to Grouplayer: uid=${e2.uid}`) : this.addHandles(d$1(() => e2.visible, (i) => this._onChildVisibilityChange(e2, i), C$1), e2.uid);
  }
  layerRemoved(e2) {
    this.removeHandles(e2.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e2) {
    this.layers.forEach((i) => {
      i !== e2 && (i.visible = false);
    });
  }
  _enforceVisibility(e2, i) {
    if (!t$3(this).initialized)
      return;
    const t2 = this.layers;
    let r2 = t2.find((e3) => e3.visible);
    switch (e2) {
      case "exclusive":
        t2.length && !r2 && (r2 = t2.at(0), r2.visible = true), this._turnOffOtherLayers(r2);
        break;
      case "inherited":
        t2.forEach((e3) => {
          e3.visible = i;
        });
    }
  }
  _onVisibilityChange(e2) {
    "inherited" === this.visibilityMode && this.layers.forEach((i) => {
      i.visible = e2;
    });
  }
  _onChildVisibilityChange(e2, i) {
    switch (this.visibilityMode) {
      case "exclusive":
        i ? this._turnOffOtherLayers(e2) : this._isAnyLayerVisible() || (e2.visible = true);
        break;
      case "inherited":
        e2.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e2) => e2.visible);
  }
};
e$2([y({ readOnly: true, dependsOn: [] })], V.prototype, "allLayers", void 0), e$2([y({ readOnly: true })], V.prototype, "allTables", void 0), e$2([y({ json: { read: true, write: true } })], V.prototype, "blendMode", void 0), e$2([y()], V.prototype, "fullExtent", void 0), e$2([y({ readOnly: true })], V.prototype, "sourceIsPortalItem", null), e$2([y({ json: { read: false, write: { ignoreOrigin: true } } })], V.prototype, "layers", void 0), e$2([r$1("layers")], V.prototype, "_writeLayers", null), e$2([y({ type: ["GroupLayer"] })], V.prototype, "operationalLayerType", void 0), e$2([y({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e2, i, t2) {
  return { enabled: "Group Layer" === e2?.type && t2?.initiator !== this };
} } }, "web-scene": { read: false, write: false } } } })], V.prototype, "portalItem", null), e$2([o("web-map", "portalItem", ["itemId"])], V.prototype, "readPortalItem", null), e$2([r$1("web-map", "portalItem", { itemId: { type: String } })], V.prototype, "writePortalItem", null), e$2([y()], V.prototype, "spatialReference", void 0), e$2([y({ json: { read: false }, readOnly: true, value: "group" })], V.prototype, "type", void 0), e$2([y({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e2, i, t2) => {
  "inherited" !== e2 && (i[t2] = e2);
} } } } })], V.prototype, "visibilityMode", null), V = e$2([c("esri.layers.GroupLayer")], V);
const C = V;
export {
  C as default
};
