import { f3 as n$1, bC as s$2, d1 as o$2, bo as e, bp as y, br as c$1, r7 as a, r8 as n$2, nZ as t$1, bs as g$1, eT as u, bn as P$1, bb as s$3, kh as ee, e4 as I, e5 as x, bf as c$2, ef as n$3, ee as p$1, eG as Ce, aM as s$4, bQ as b, eV as I$1, eW as ue, e1 as d$2, dP as u$1, bh as V, r9 as me, em as e$1, bJ as d$3, bR as A, bI as b$1, ra as R$1, g$ as P, b7 as C$1, eq as t$3, dU as t$4 } from "./chunk-KFNcxJaF.js";
import { x as x$1 } from "./chunk-ewxQmXoN.js";
import { E as Et, c as c$3, a as E } from "./chunk-q8E2ylxA.js";
import { L as L$1, d as d$1, l as l$1, o as o$3 } from "./chunk-QPiqbyfc.js";
import { t as t$2 } from "./chunk-I90ewfux.js";
import { n as n$4 } from "./chunk-7Z1hjEcP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-ZkCkRDhu.js";
import "./chunk-YQ5VkQy2.js";
import "./chunk-9JhcsZul.js";
import "./chunk-0qGRH15g.js";
import "./chunk-_FX4l1J_.js";
import "./chunk-sTYTsp9W.js";
import "./chunk-P6X7E8x9.js";
import "./chunk-K_eIouts.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-HNaBfNyK.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
import "./chunk-mk4KSkT-.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-UzDyJefO.js";
import "./chunk-vP0bHkve.js";
import "./chunk-UZskY1JT.js";
import "./chunk-F2pifch3.js";
import "./chunk-eM88eykE.js";
import "./chunk-Ju_DQ7D7.js";
import "./chunk-CenXEh_9.js";
const p = (p2, l2) => {
  let n2 = class extends n$1(s$2(o$2.EventedMixin(p2))) {
    constructor(e2) {
      super(e2), this.sublayer = null, this.parent = null, this.view = null;
    }
    initialize() {
    }
    get suspended() {
      return !this.canResume();
    }
    get updating() {
      return !this.suspended && this.isUpdating();
    }
    get visible() {
      return !!this.sublayer?.visible;
    }
    set visible(e2) {
      this._overrideIfSome("visible", e2);
    }
    get fullOpacity() {
      const e2 = (e3) => null != e3 ? e3 : 1;
      return e2(this.sublayer?.opacity) * e2(this.parent?.fullOpacity);
    }
    canResume() {
      return !this.parent?.suspended && this.view?.ready && this.visible || false;
    }
    isUpdating() {
      return false;
    }
  };
  return e([y()], n2.prototype, "sublayer", void 0), e([y()], n2.prototype, "parent", void 0), e([y({ readOnly: true })], n2.prototype, "suspended", null), e([y({ type: Boolean, readOnly: true })], n2.prototype, "updating", null), e([y()], n2.prototype, "view", void 0), e([y()], n2.prototype, "visible", null), e([y()], n2.prototype, "fullOpacity", null), n2 = e([c$1("esri.views.3d.layers.BuildingSublayerView3D")], n2), n2;
};
var o$1;
!function(e2) {
  e2[e2.Solid = 0] = "Solid", e2[e2.WireFrame = 1] = "WireFrame", e2[e2.XRay = 2] = "XRay";
}(o$1 || (o$1 = {}));
const l = 0.15, t = 0.5 * l;
function i(e2) {
  switch (e2.filterMode.type) {
    case "solid":
      return { mode: o$1.Solid };
    case "wire-frame":
      return { mode: o$1.WireFrame, edgeMaterial: a(e2.filterMode.edges, {}) };
    case "x-ray":
      return { mode: o$1.XRay };
  }
}
function c(e2, r) {
  if (null == r)
    return e2.color[3] = 0, e2.edgeMaterial = null, void (e2.pickable = false);
  switch (r.mode) {
    case o$1.Solid:
      return;
    case o$1.WireFrame:
      return e2.color[3] = 0, e2.edgeMaterial = r.edgeMaterial, void (e2.pickable = false);
    case o$1.XRay:
      return e2.color[0] = 1, e2.color[1] = 1, e2.color[2] = 1, e2.color[3] *= l, e2.colorMixMode = n$2.Replace, e2.castShadows = false, e2.pickable = false, void (e2.edgeMaterial = n(e2.edgeMaterial));
  }
}
function n(e2) {
  return null == e2 ? null : (s$1.lastMaterial !== e2 && (s$1.cachedMaterial = d(e2), s$1.lastMaterial = e2), s$1.cachedMaterial);
}
function d(r) {
  const a2 = t$1(r.color);
  return a2[3] *= t, { ...r, color: a2 };
}
const s$1 = { cachedMaterial: null, lastMaterial: null };
class o extends g$1 {
  constructor() {
    super(...arguments), this.sublayer = null;
  }
  get updating() {
    return false;
  }
  get suspended() {
    return false;
  }
  get availableFields() {
    return [];
  }
  get filter() {
    return null;
  }
  set filter(r) {
    throw new Error("Not implemented");
  }
  queryFeatures(r, e2) {
    throw new Error("Not implemented");
  }
  queryObjectIds(r, e2) {
    throw new Error("Not implemented");
  }
  queryFeatureCount(r, e2) {
    throw new Error("Not implemented");
  }
  createQuery() {
    throw new Error("Not implemented");
  }
  queryExtent(r, e2) {
    throw new Error("Not implemented");
  }
  highlight(r) {
    throw new Error("Not implemented");
  }
}
e([y()], o.prototype, "sublayer", void 0), e([y()], o.prototype, "availableFields", null), e([y()], o.prototype, "filter", null);
let R = class extends t$2(Et(p(o))) {
  constructor() {
    super(...arguments), this.type = "building-component-sublayer-3d", this.layerView = null, this._elevationContext = "scene", this._isIntegratedMesh = false, this._supportsLabeling = false, this.requiredFields = [], this.progressiveLoadFactor = 1, this._queryEngine = null;
  }
  get i3slayer() {
    return this.sublayer;
  }
  get layerUid() {
    return this.sublayer.layer.uid;
  }
  get sublayerUid() {
    return this.sublayer.uid;
  }
  get layerId() {
    return this.sublayer.layer.id;
  }
  get sublayerId() {
    return this.sublayer.id;
  }
  get layerPopupEnabledAndHasTemplate() {
    return this.sublayer.popupEnabled && u(this.sublayer, this.layerView?.view.popup?.defaultPopupTemplateEnabled);
  }
  initialize() {
    this._updatingHandles.add(() => [this.sublayer.renderer, this.definitionExpressionFields, this.filterExpressionFields], () => this._updateRequiredFields()), this._updatingHandles.add(() => this.sublayer.renderer, (e3) => this._rendererChange(e3), P$1);
    const e2 = () => this._filterChange();
    this._updatingHandles.add(() => this.parsedDefinitionExpression, e2), this._updatingHandles.add(() => null != this._filter ? this._filter.sortedObjectIds : null, e2), this._updatingHandles.add(() => null != this._filter ? this._filter.parsedWhereClause : null, e2), this._updatingHandles.add(() => [null != this._filter ? this._filter.parsedGeometry : null, null != this.filter ? this.filter.spatialRelationship : null], () => this._geometryFilterChange()), this._updatingHandles.add(() => this.parsedFilterExpressions, () => this._updateSymbologyOverride(), P$1), this.addResolvingPromise(this._updateRequiredFields());
  }
  get lodFactor() {
    return this.view.qualitySettings.sceneService.object.lodFactor;
  }
  get parsedFilterExpressions() {
    return "Overview" !== this.sublayer.modelName && this.layerView ? this.layerView.filterExpressions.map(([e2, r]) => {
      let t2;
      try {
        t2 = x$1.create(e2, this.sublayer.fieldsIndex);
      } catch (n2) {
        return s$3.getLogger(this).error("Failed to parse filterExpression: " + n2), null;
      }
      if (!t2.isStandardized)
        return s$3.getLogger(this).error("filterExpression is using non standard function"), null;
      const s2 = [], l2 = t2.fieldNames;
      return ee(l2, this.sublayer.fields, { missingFields: s2 }), s2.length > 0 ? (s$3.getLogger(this).error(`filterExpression references unknown fields: ${s2.join(", ")}`), null) : [t2, r];
    }).filter((e2) => null != e2) : [];
  }
  get filter() {
    return null != this._filter ? this._filter.viewFilter : null;
  }
  set filter(e2) {
    null != e2 && L$1.checkSupport(e2) ? null != this._filter ? this._filter.viewFilter = e2 : this._filter = new L$1({ viewFilter: e2, layerFieldsIndex: this.sublayer.fieldsIndex, loadAsyncModule: (e3) => this._loadAsyncModule(e3), addSqlFilter: (e3, r) => this.addSqlFilter(e3, r, this.logError) }) : this._filter = null;
  }
  isUpdating() {
    return super.isUpdating() || null != this._filter && this._filter.updating;
  }
  _updateSymbologyOverride() {
    const e2 = this.parsedFilterExpressions;
    e2.length > 0 ? this._setSymbologyOverride((r, t2) => {
      for (const [s2, l2] of e2)
        try {
          if (s2.testFeature(r))
            return c(t2, l2);
        } catch (i2) {
          this.logError(i2);
        }
      return c(t2, null);
    }, this.filterExpressionFields) : this._setSymbologyOverride(null, null);
  }
  get filterExpressionFields() {
    return I(this.sublayer.fieldsIndex, this.parsedFilterExpressions.reduce((e2, [r]) => e2.concat(r.fieldNames), new Array()));
  }
  get availableFields() {
    const e2 = this.sublayer, r = e2.fieldsIndex;
    let t2 = this.requiredFields;
    if (e2.outFields || e2.layer.outFields) {
      const i2 = [...e2.outFields || [], ...e2.layer.outFields || []];
      t2 = [...x(r, i2), ...t2];
    }
    return I(r, t2);
  }
  _createLayerGraphic(e2) {
    const t2 = new c$2(null, null, e2);
    return t2.layer = this.sublayer.layer, t2.sourceLayer = this.sublayer, t2;
  }
  canResume() {
    return super.canResume() && (!this._controller || this._controller.rootNodeVisible);
  }
  async fetchPopupFeatures(e2, r) {
    const t2 = this._validateFetchPopupFeatures(r);
    if (t2)
      throw t2;
    if (!r?.clientGraphics || 0 === r.clientGraphics.length)
      return [];
    const s2 = [], l2 = [], n2 = null != this.sublayer.associatedLayer ? await this.sublayer.associatedLayer.load() : this.sublayer, a2 = x(this.sublayer.fieldsIndex, await n$3(n2, p$1(this.sublayer, r))), o2 = /* @__PURE__ */ new Set();
    for (const i2 of r.clientGraphics)
      Ce(a2, i2, o2) ? l2.push(i2) : s2.push(i2);
    return 0 === l2.length ? s2 : (null != this.sublayer.associatedLayer && await this.sublayer.associatedLayer.load().catch(() => s$3.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes.")), this.whenGraphicAttributes(l2, Array.from(o2)).catch(() => l2).then((e3) => s2.concat(e3)));
  }
  async _updateRequiredFields() {
    const e2 = I(this.sublayer.fieldsIndex, [...this.sublayer.renderer ? await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex) : [], ...this.definitionExpressionFields || [], ...this.filterExpressionFields || []]);
    this._set("requiredFields", e2);
  }
  _validateFetchPopupFeatures(e2) {
    const { sublayer: r } = this, { popupEnabled: i2 } = r;
    return i2 ? p$1(r, e2) ? void 0 : new s$4("buildingscenelayerview3d:fetchPopupFeatures", "Layer does not define a popup template", { sublayer: r }) : new s$4("buildingscenelayerview3d:fetchPopupFeatures", "Popups are disabled", { sublayer: r });
  }
  getFilters() {
    const e2 = super.getFilters();
    return this.addSqlFilter(e2, this.parsedDefinitionExpression, this.logError), null != this._filter && this._filter.addFilters(e2, this.view, this._controller.crsIndex, this._collection), e2;
  }
  createQuery() {
    const e2 = { outFields: ["*"], returnGeometry: false, outSpatialReference: this.view.spatialReference };
    return null != this.filter ? this.filter.createQuery(e2) : new b(e2);
  }
  queryExtent(e2, r) {
    return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e2), r?.signal);
  }
  queryFeatureCount(e2, r) {
    return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e2), r?.signal);
  }
  queryFeatures(e2, r) {
    return this._ensureQueryEngine().executeQuery(this._ensureQuery(e2), r?.signal).then((e3) => {
      if (!e3?.features)
        return e3;
      const r2 = this.sublayer, t2 = r2.layer;
      for (const i2 of e3.features)
        i2.layer = t2, i2.sourceLayer = r2;
      return e3;
    });
  }
  queryObjectIds(e2, r) {
    return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e2), r?.signal);
  }
  _ensureQueryEngine() {
    return null == this._queryEngine && (this._queryEngine = this._createQueryEngine()), this._queryEngine;
  }
  _createQueryEngine() {
    const e2 = c$3(this.view.spatialReference, this.view.renderSpatialReference, this._collection);
    return new d$1({ layerView: this, priority: I$1.FEATURE_QUERY_ENGINE, spatialIndex: new l$1({ featureAdapter: new o$3({ objectIdField: this.sublayer.objectIdField, attributeStorageInfo: this.sublayer.attributeStorageInfo, getFeatureExtent: e2 }), forAllFeatures: (e3, r) => this._forAllFeatures((r2, t2, i2) => e3({ id: r2, index: t2, meta: i2 }), r, E.QUERYABLE), getFeatureExtent: e2, sourceSpatialReference: ue(this.sublayer), viewSpatialReference: this.view.spatialReference }) });
  }
  _ensureQuery(e2) {
    return this._addDefinitionExpressionToQuery(null == e2 ? this.createQuery() : b.from(e2));
  }
};
e([y()], R.prototype, "i3slayer", null), e([y()], R.prototype, "layerView", void 0), e([y()], R.prototype, "lodFactor", null), e([y({ readOnly: true })], R.prototype, "parsedFilterExpressions", null), e([y({ type: d$2 })], R.prototype, "filter", null), e([y()], R.prototype, "_filter", void 0), e([y({ type: [String], readOnly: true })], R.prototype, "filterExpressionFields", null), e([y({ type: [String], readOnly: true })], R.prototype, "requiredFields", void 0), e([y({ type: [String], readOnly: true })], R.prototype, "availableFields", null), R = e([c$1("esri.views.3d.layers.BuildingComponentSublayerView3D")], R);
const L = R;
class s extends u$1 {
  constructor(r) {
    super(r), this.layer = null, this.sublayerViews = null;
  }
  highlight(r) {
    throw new Error("Not implemented");
  }
}
e([y()], s.prototype, "layer", void 0), e([y()], s.prototype, "sublayerViews", void 0);
const _ = p(g$1);
let C = class extends n$4(s) {
  constructor(e2) {
    super(e2), this.type = "building-scene-3d", this.sublayerViews = new V(), this._abortController = new AbortController(), this._loadingComponents = 0, this._pendingWhenSublayerViews = /* @__PURE__ */ new Map(), this.ignoresMemoryFactor = false;
  }
  get filterExpression() {
    const e2 = this.layer.activeFilterId, r = null != e2 ? this.layer.filters.find((r2) => r2.id === e2) : null, s2 = null != r ? r.filterBlocks?.find((e3) => "solid" === e3.filterMode.type) : null;
    return s2 ? s2.filterExpression : null;
  }
  get filterExpressions() {
    const e2 = this.layer.activeFilterId, r = null != e2 ? this.layer.filters.find((r2) => r2.id === e2) : null;
    return r?.filterBlocks ? r.filterBlocks.toArray().map((e3) => [e3.filterExpression ?? "", i(e3)]) : [];
  }
  get updatingProgressValue() {
    const e2 = this.sublayerViews, r = this._loadingComponents + (e2 ? e2.length : 0);
    return e2.reduce((e3, r2) => e3 + r2.updatingProgress, 0) / r;
  }
  isUpdating() {
    return this._loadingComponents > 0 || this.sublayerViews && this.sublayerViews.some((e2) => e2.updating);
  }
  initialize() {
    me(this.layer.spatialReference, this.view.spatialReference, this.view.viewingMode), this._initializeSubLayerViews(this.layer.sublayers, this);
  }
  destroy() {
    this.sublayerViews && (this.sublayerViews.forEach((e2) => e2.destroy()), this.sublayerViews = null), this._abortController = e$1(this._abortController);
  }
  _initializeSubLayerViews(e2, r) {
    const s2 = this, t2 = this.view;
    e2.forEach((e3) => {
      if (!e3.isEmpty)
        if ("building-group" === e3.type) {
          const s3 = new _({ sublayer: e3, view: t2, parent: r });
          this._initializeSubLayerViews(e3.sublayers, s3);
        } else
          "mesh" === e3.geometryType && (this._loadingComponents++, e3.load({ signal: this._abortController.signal }).then(() => {
            const i2 = new L({ sublayer: e3, layerView: s2, view: t2, parent: r });
            this.sublayerViews.push(i2);
            const o2 = this._pendingWhenSublayerViews.get(e3);
            if (o2) {
              for (const e4 of o2)
                e4.resolve(i2);
              this._pendingWhenSublayerViews.delete(e3);
            }
            this.addHandles([d$3(() => i2.updating, () => this.notifyChange("updating"), A), d$3(() => i2.updatingProgress, () => this.notifyChange("updatingProgressValue"), A)]);
          }).catch((r2) => {
            b$1(r2) || s$3.getLogger(this).error(`Error while creating view for sublayer ${e3.id}
Layer: ${this.layer.url}
`, r2);
          }).then(() => {
            this._loadingComponents--, this.notifyChange("updating"), this.notifyChange("updatingProgressValue");
          }));
    });
  }
  getGraphicFromIntersectorTarget(e2) {
    for (const r of this.sublayerViews.items)
      if (r.sublayer.uid === e2.sublayerUid)
        return r.getGraphicFromIntersectorTarget(e2);
    return null;
  }
  async fetchPopupFeatures(e2, r) {
    if (!r?.clientGraphics || 0 === r.clientGraphics.length)
      return [];
    const s2 = R$1(r.clientGraphics, (e3) => e3.sourceLayer), i2 = [];
    for (const [t2, o2] of s2) {
      const s3 = this._findComponent(t2);
      null != s3 && i2.push(s3.fetchPopupFeatures(e2, { ...r, clientGraphics: o2 }));
    }
    return (await P(i2)).flat();
  }
  whenGraphicBounds(e2) {
    const r = this._findComponent(e2.sourceLayer);
    return null == r ? Promise.reject() : r.whenGraphicBounds(e2);
  }
  getAABBFromIntersectorTarget(e2) {
    for (const r of this.sublayerViews.items)
      if (r.sublayer.uid === e2.sublayerUid)
        return r.getAABBFromIntersectorTarget(e2);
    return null;
  }
  async whenSublayerView(e2) {
    const r = this._findComponent(e2);
    if (null != r)
      return r;
    const s2 = this._pendingWhenSublayerViews.get(e2), t2 = C$1();
    return s2 ? s2.push(t2) : this._pendingWhenSublayerViews.set(e2, [t2]), t2.promise;
  }
  _findComponent(e2) {
    return this.sublayerViews.find((r) => e2 === r.sublayer);
  }
  highlight(e2) {
    e2 instanceof c$2 ? e2 = [e2] : e2 instanceof V && (e2 = e2.toArray());
    const s2 = [];
    if (Array.isArray(e2) && e2.length > 0 && e2[0] instanceof c$2) {
      const r = e2, t2 = /* @__PURE__ */ new Map();
      for (const e3 of r) {
        let r2 = t2.get(e3.sourceLayer);
        null == r2 && (r2 = [], t2.set(e3.sourceLayer, r2)), r2.push(e3);
      }
      this.sublayerViews.forEach((e3) => {
        const r2 = t2.get(e3.sublayer);
        r2 && s2.push(e3.highlight(r2));
      });
    }
    return t$3(s2);
  }
  get usedMemory() {
    return this.sublayerViews.reduce((e2, r) => e2 + r.usedMemory, 0);
  }
  get unloadedMemory() {
    return this.sublayerViews.reduce((e2, r) => e2 + r.unloadedMemory, 0);
  }
};
e([y()], C.prototype, "sublayerViews", void 0), e([y({ readOnly: true })], C.prototype, "filterExpression", null), e([y({ readOnly: true })], C.prototype, "filterExpressions", null), e([y(t$4)], C.prototype, "updatingProgress", void 0), e([y({ readOnly: true, dependsOn: [] })], C.prototype, "updatingProgressValue", null), C = e([c$1("esri.views.3d.layers.BuildingSceneLayerView3D")], C);
const S = C;
export {
  S as default
};
