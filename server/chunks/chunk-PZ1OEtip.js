import { eS as he, eT as u, e6 as o, bn as P$1, eU as n$1, bD as u$1, bb as s$1, bQ as b, eV as I, eW as ue, bf as c$2, eX as Z, bo as e, bp as y, dU as t$2, e1 as d$2, br as c$3 } from "./chunk-KFNcxJaF.js";
import { s } from "./chunk-9JhcsZul.js";
import { x as x$1 } from "./chunk-ewxQmXoN.js";
import { E as Et, c as c$1, a as E } from "./chunk-q8E2ylxA.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { c, i as i$1, u as u$2, d as d$1, f, a as i$2, j } from "./chunk-75kWlGIh.js";
import { L, d, l, o as o$1 } from "./chunk-QPiqbyfc.js";
import { t as t$1 } from "./chunk-YQ5VkQy2.js";
import { S } from "./chunk-ZkCkRDhu.js";
import { t } from "./chunk-I90ewfux.js";
import { i } from "./chunk-9RFzr6gv.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-Ju_DQ7D7.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
import "./chunk-CenXEh_9.js";
import "./chunk-K_eIouts.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-HNaBfNyK.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-mk4KSkT-.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-UzDyJefO.js";
import "./chunk-vP0bHkve.js";
import "./chunk-UZskY1JT.js";
import "./chunk-0qGRH15g.js";
import "./chunk-_FX4l1J_.js";
import "./chunk-sTYTsp9W.js";
import "./chunk-P6X7E8x9.js";
import "./chunk-F2pifch3.js";
import "./chunk-eM88eykE.js";
const U = i$2();
let G = class extends Et(t(i(n(j)))) {
  constructor() {
    super(...arguments), this.type = "scene-layer-3d", this._setVisibilityHiddenObjectIds = new s(), this.progressiveLoadFactor = 1, this._elevationContext = "scene", this._isIntegratedMesh = false, this._supportsLabeling = true, this._pendingEditsQueue = Promise.resolve(), this._interactiveEditingSessions = /* @__PURE__ */ new Map(), this._queryEngine = null;
  }
  get i3slayer() {
    return this.layer;
  }
  tryRecycleWith(e2, t2) {
    return e2.url === this.layer.url && this.i3sOverrides.isEmpty ? e2.load(t2).then(() => {
      he(this.layer, e2, this.i3sOverrides), this.layer = e2, this.i3sOverrides.destroy();
      const t3 = this.view.resourceController?.memoryController;
      this.i3sOverrides = new S({ view: this.view, layer: e2, memoryController: t3 }), this.resetHighlights();
    }) : null;
  }
  get layerPopupEnabledAndHasTemplate() {
    return this.layer.popupEnabled && u(this.layer, this.view.popup?.defaultPopupTemplateEnabled);
  }
  get filter() {
    return this._get("filter");
  }
  set filter(e2) {
    this._set("filter", L.checkSupport(e2) ? e2 : null);
  }
  get viewFilter() {
    const e2 = this.filter, t2 = this.layerFilter;
    if (null == e2 && null == t2)
      return null;
    const i2 = this._get("viewFilter");
    return null == i2 ? new L({ layerFilter: t2, viewFilter: e2, layerFieldsIndex: this.layer.fieldsIndex, loadAsyncModule: (e3) => this._loadAsyncModule(e3), addSqlFilter: (e3, t3) => this.addSqlFilter(e3, t3, this.logError) }) : (i2.viewFilter = e2, i2.layerFilter = t2, i2);
  }
  get requiredFields() {
    return this._fieldsHelper?.requiredFields ?? [];
  }
  get _floorFilterClause() {
    const e2 = o(this);
    return null != e2 ? x$1.create(e2, this.layer.fieldsIndex) : null;
  }
  get _excludeObjectIdsSorted() {
    const e2 = this.layer.excludeObjectIds.toArray();
    return e2.length ? e2.sort((e3, t2) => e3 - t2) : null;
  }
  get _setVisibilityHiddenObjectIdsSorted() {
    return this._setVisibilityHiddenObjectIds.size ? Array.from(this._setVisibilityHiddenObjectIds).sort((e2, t2) => e2 - t2) : null;
  }
  get _objectQualitySettings() {
    return this.view?.qualitySettings?.sceneService?.object;
  }
  get lodFactor() {
    return this._objectQualitySettings?.lodFactor ?? 1;
  }
  get lodCrossfadeinDuration() {
    return this._objectQualitySettings.lodCrossfadeinDuration ?? 0;
  }
  get lodCrossfadeoutDuration() {
    return this._objectQualitySettings.lodCrossfadeoutDuration ?? 0;
  }
  get lodCrossfadeUncoveredDuration() {
    return this._objectQualitySettings.lodCrossfadeUncoveredDuration ?? 0;
  }
  get updatingProgressValue() {
    return this._controller?.updatingProgress ?? 0;
  }
  initialize() {
    this._fieldsHelper = new c({ layerView: this }), this._updatingHandles.add(() => this.layer.rangeInfos, (e3) => this._rangeInfosChanged(e3), P$1), this._updatingHandles.add(() => this.layer.renderer, (e3) => this._updatingHandles.addPromise(this._rendererChange(e3)), P$1);
    const e2 = () => this._filterChange();
    this._updatingHandles.add(() => this.parsedDefinitionExpression, e2), this._updatingHandles.add(() => this.filter, e2), this._updatingHandles.add(() => this._floorFilterClause, e2), this._updatingHandles.add(() => this._excludeObjectIdsSorted, e2), this._updatingHandles.add(() => this._setVisibilityHiddenObjectIdsSorted, e2), this._updatingHandles.add(() => null != this.viewFilter ? this.viewFilter.sortedObjectIds : null, e2), this._updatingHandles.add(() => null != this.viewFilter ? this.viewFilter.parsedWhereClause : null, e2), this._updatingHandles.add(() => [null != this.viewFilter ? this.viewFilter.parsedGeometry : null, null != this.filter ? this.filter.spatialRelationship : null, null != this.layer.filter ? this.layer.filter.spatialRelationship : null], () => this._geometryFilterChange()), n$1() && this.i3sOverrides.is3DOFL && this._updatingHandles.add(() => this.i3sOverrides.sortedGeometryChangedObjectIds, e2), this.addHandles(this.layer.on("apply-edits", (e3) => this._updatingHandles.addPromise(e3.result))), this.addHandles(this.layer.on("edits", (e3) => {
      const t2 = this._pendingEditsQueue.then(() => this._handleEdits(e3)).then();
      this._pendingEditsQueue = t2, this._updatingHandles.addPromise(t2);
    }));
  }
  destroy() {
    this._fieldsHelper = u$1(this._fieldsHelper);
  }
  _rangeInfosChanged(e2) {
    null != e2 && e2.length > 0 && s$1.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.");
  }
  createQuery() {
    const e2 = { outFields: ["*"], returnGeometry: false, outSpatialReference: this.view.spatialReference };
    return null != this.filter ? this.filter.createQuery(e2) : new b(e2);
  }
  queryExtent(e2, t2) {
    return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e2), t2?.signal);
  }
  queryFeatureCount(e2, t2) {
    return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e2), t2?.signal);
  }
  queryFeatures(e2, t2) {
    return this._ensureQueryEngine().executeQuery(this._ensureQuery(e2), t2?.signal).then((e3) => {
      if (!e3?.features)
        return e3;
      const t3 = this.layer;
      for (const i2 of e3.features)
        i2.layer = t3, i2.sourceLayer = t3;
      return e3;
    });
  }
  queryObjectIds(e2, t2) {
    return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e2), t2?.signal);
  }
  _ensureQueryEngine() {
    return this._queryEngine || (this._queryEngine = this._createQueryEngine()), this._queryEngine;
  }
  _createQueryEngine() {
    const e2 = c$1(this.view.spatialReference, this.view.renderSpatialReference, this._collection);
    return new d({ layerView: this, priority: I.FEATURE_QUERY_ENGINE, spatialIndex: new l({ featureAdapter: new o$1({ objectIdField: this.layer.objectIdField, attributeStorageInfo: this.layer.attributeStorageInfo ?? [], getFeatureExtent: e2 }), forAllFeatures: (e3, t2) => this._forAllFeatures((t3, i2, r) => e3({ id: t3, index: i2, meta: r }), t2, E.QUERYABLE), getFeatureExtent: e2, sourceSpatialReference: ue(this.layer), viewSpatialReference: this.view.spatialReference }) });
  }
  highlight(e2) {
    const t2 = this._highlights;
    if (e2 instanceof b) {
      const { set: i2, handle: r } = t2.acquireSet();
      return this.queryObjectIds(e2).then((e3) => t2.setFeatureIds(i2, e3)), r;
    }
    return super.highlight(e2);
  }
  createInteractiveEditSession(e2) {
    return i$1(this._attributeEditingContext, e2);
  }
  _createLayerGraphic(e2) {
    const i2 = new c$2(null, null, e2);
    return i2.layer = this.layer, i2.sourceLayer = this.layer, i2;
  }
  getFilters() {
    const e2 = super.getFilters();
    n$1() && this.i3sOverrides.is3DOFL && this.i3sOverrides.sortedGeometryChangedObjectIds.length > 0 && e2.push((e3, t3) => {
      t3.node.index >= 0 && Z(this.i3sOverrides.sortedGeometryChangedObjectIds, false, e3);
    });
    const t2 = this._setVisibilityHiddenObjectIdsSorted;
    null != t2 && e2.push((e3) => Z(t2, false, e3));
    const i2 = this._excludeObjectIdsSorted;
    return null != i2 && e2.push((e3) => Z(i2, false, e3)), this._floorFilterClause && this.addSqlFilter(e2, this._floorFilterClause, this.logError), this.addSqlFilter(e2, this.parsedDefinitionExpression, this.logError), null != this.viewFilter && this.viewFilter.addFilters(e2, this.view, this._controller.crsIndex, this._collection), e2;
  }
  setVisibility(e2, t2) {
    t2 ? this._setVisibilityHiddenObjectIds.delete(e2) : this._setVisibilityHiddenObjectIds.add(e2);
  }
  isUpdating() {
    return super.isUpdating() || this.layerFilterUpdating || null != this.viewFilter && this.viewFilter.updating || null != this.i3sOverrides && this.i3sOverrides.updating;
  }
  _ensureQuery(e2) {
    return this._addDefinitionExpressionToQuery(null == e2 ? this.createQuery() : b.from(e2));
  }
  get _attributeEditingContext() {
    return { sessions: this._interactiveEditingSessions, fieldsIndex: this.layer.fieldsIndex, objectIdField: this._getObjectIdField(), globalIdField: this._getGlobalIdField(), forEachNode: (e2) => this._forAllNodes((t2) => null != t2 ? e2(t2.node, t2.featureIds) : null), attributeStorageInfo: this.i3slayer.attributeStorageInfo ?? [], i3sOverrides: this.i3sOverrides, getAttributeData: (e2) => this.getAttributeData(e2), setAttributeData: (e2, t2) => this.setAttributeData(e2, t2), clearMemCache: () => this.clearMemCache() };
  }
  async _handleEdits(e2) {
    const t2 = n$1(), i2 = this._attributeEditingContext, r = await u$2(i2, e2);
    t2 && d$1(i2, r), f(i2, r);
  }
  get hasGeometryFilter() {
    const e2 = this.viewFilter;
    return null != e2?.parsedGeometry;
  }
  computeNodeFiltering(e2) {
    const t2 = this.viewFilter;
    return null == t2 || !this.view.spatialReference || t2.isMBSGeometryVisible(e2, this.view.spatialReference, this._controller.crsIndex) ? t$1.Unmodified : t$1.Culled;
  }
};
e([y()], G.prototype, "i3slayer", null), e([y(t$2)], G.prototype, "updatingProgress", void 0), e([y({ type: d$2 })], G.prototype, "filter", null), e([y({ readOnly: true })], G.prototype, "viewFilter", null), e([y(U.requiredFields)], G.prototype, "requiredFields", null), e([y(U.availableFields)], G.prototype, "availableFields", void 0), e([y()], G.prototype, "_fieldsHelper", void 0), e([y()], G.prototype, "_floorFilterClause", null), e([y()], G.prototype, "_excludeObjectIdsSorted", null), e([y()], G.prototype, "_setVisibilityHiddenObjectIds", void 0), e([y()], G.prototype, "_setVisibilityHiddenObjectIdsSorted", null), e([y()], G.prototype, "_objectQualitySettings", null), e([y()], G.prototype, "lodFactor", null), e([y()], G.prototype, "updatingProgressValue", null), G = e([c$3("esri.views.3d.layers.SceneLayerView3D")], G);
const P = G;
export {
  P as default
};
