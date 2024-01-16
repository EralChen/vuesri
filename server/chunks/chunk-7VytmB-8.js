import { cB as a, cD as t, cl as u$1, cm as j, iE as l, iF as d, cn as m$1, eR as l$1, iG as t$1, ej as k, bJ as d$1, iH as e$1, iI as f, aX as S, iJ as m, aQ as a$1, cq as a$2, iK as t$2, iL as A, iM as t$3, bo as e$2, bp as y, cN as r, ct as o, bR as A$1, e3 as v, bK as C, br as c, bN as b$1, bb as s$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const e = Symbol("WebScene");
let V = class extends a(t(u$1(j(l(d(m$1(b$1))))))) {
  constructor(e2) {
    super(e2), this.allLayers = new l$1({ getCollections: () => [this.layers], getChildrenFunction: (e3) => "layers" in e3 ? e3.layers : null }), this.allTables = t$1(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = k(async (e3, r2, t2) => {
      const { save: i, saveAs: s } = await import("./chunk-ISOsHpel.js");
      switch (e3) {
        case A.SAVE:
          return i(this, r2);
        case A.SAVE_AS:
          return s(this, t2, r2);
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
      const r2 = "prevent-adding-tables";
      this.removeHandles(r2), e2 && (this.tables.removeAll(), this.addHandles(v(() => this.tables, "before-add", (e3) => {
        e3.preventDefault(), s$1.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), r2));
    }, A$1), d$1(() => this.visible, this._onVisibilityChange.bind(this), C)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === e$1.USER;
  }
  _writeLayers(e2, r2, t2, i) {
    const s = [];
    if (!e2)
      return s;
    e2.forEach((e3) => {
      const r3 = f(e3, i.webmap ? i.webmap.getLayerJSONFromResourceInfo(e3) : null, i);
      r3?.layerType && s.push(r3);
    }), r2.layers = s;
  }
  set portalItem(e2) {
    this._set("portalItem", e2);
  }
  readPortalItem(e2, r2, t2) {
    const { itemId: i, layerType: s } = r2;
    if ("GroupLayer" === s && i)
      return new S({ id: i, portal: t2?.portal });
  }
  writePortalItem(e2, r2) {
    e2?.id && (r2.itemId = e2.id);
  }
  set visibilityMode(e2) {
    const r2 = this._get("visibilityMode") !== e2;
    this._set("visibilityMode", e2), r2 && this._enforceVisibility(e2, this.visible);
  }
  async beforeSave() {
    return m(this);
  }
  load(e2) {
    const r2 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service"], layerModuleTypeMap: a$1 }, e2).catch((e3) => {
      if (a$2(e3), this.sourceIsPortalItem)
        throw e3;
    });
    return this.addResolvingPromise(r2), Promise.resolve(this);
  }
  async loadAll() {
    return t$2(this, (e2) => {
      e2(this.layers, this.tables);
    });
  }
  async save(e2) {
    return this._debouncedSaveOperations(A.SAVE, e2);
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(A.SAVE_AS, r2, e2);
  }
  layerAdded(e2) {
    e2.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e2) : "inherited" === this.visibilityMode && (e2.visible = this.visible), this.hasHandles(e2.uid) ? console.error(`Layer readded to Grouplayer: uid=${e2.uid}`) : this.addHandles(d$1(() => e2.visible, (r2) => this._onChildVisibilityChange(e2, r2), C), e2.uid);
  }
  layerRemoved(e2) {
    this.removeHandles(e2.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e2) {
    this.layers.forEach((r2) => {
      r2 !== e2 && (r2.visible = false);
    });
  }
  _enforceVisibility(e2, r2) {
    if (!t$3(this).initialized)
      return;
    const t2 = this.layers;
    let i = t2.find((e3) => e3.visible);
    switch (e2) {
      case "exclusive":
        t2.length && !i && (i = t2.at(0), i.visible = true), this._turnOffOtherLayers(i);
        break;
      case "inherited":
        t2.forEach((e3) => {
          e3.visible = r2;
        });
    }
  }
  _onVisibilityChange(e2) {
    "inherited" === this.visibilityMode && this.layers.forEach((r2) => {
      r2.visible = e2;
    });
  }
  _onChildVisibilityChange(e2, r2) {
    switch (this.visibilityMode) {
      case "exclusive":
        r2 ? this._turnOffOtherLayers(e2) : this._isAnyLayerVisible() || (e2.visible = true);
        break;
      case "inherited":
        e2.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e2) => e2.visible);
  }
};
e$2([y({ readOnly: true, dependsOn: [] })], V.prototype, "allLayers", void 0), e$2([y({ readOnly: true })], V.prototype, "allTables", void 0), e$2([y({ json: { read: true, write: true } })], V.prototype, "blendMode", void 0), e$2([y()], V.prototype, "fullExtent", void 0), e$2([y({ readOnly: true })], V.prototype, "sourceIsPortalItem", null), e$2([y({ json: { read: false, write: { ignoreOrigin: true } } })], V.prototype, "layers", void 0), e$2([r("layers")], V.prototype, "_writeLayers", null), e$2([y({ type: ["GroupLayer"] })], V.prototype, "operationalLayerType", void 0), e$2([y({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e2, r2, t2) {
  return { enabled: "Group Layer" === e2?.type && t2?.initiator !== this };
} } }, "web-scene": { read: false, write: false } } } })], V.prototype, "portalItem", null), e$2([o("web-map", "portalItem", ["itemId"])], V.prototype, "readPortalItem", null), e$2([r("web-map", "portalItem", { itemId: { type: String } })], V.prototype, "writePortalItem", null), e$2([y()], V.prototype, "spatialReference", void 0), e$2([y({ json: { read: false }, readOnly: true, value: "group" })], V.prototype, "type", void 0), e$2([y({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e2, r2, t2) => {
  "inherited" !== e2 && (r2[t2] = e2);
} } } } })], V.prototype, "visibilityMode", null), V = e$2([c("esri.layers.GroupLayer")], V);
const E = V;
export {
  E as default
};
