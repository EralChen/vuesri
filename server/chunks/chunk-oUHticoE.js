import { fI as Y, fJ as u$1, eY as o, bX as P$2, fK as n$1, c8 as u$2, aT as s$1, ck as b, fL as I, fM as Z, bJ as c$1, fN as W, aV as e, aX as y, ez as t$1, eT as d$2, a_ as c$2 } from "./chunk-ejFG4zJ0.js";
import { s } from "./chunk-wg0ozFEK.js";
import { x as x$1 } from "./chunk-KyVc0M84.js";
import { S as St, u as u$3, n as n$2 } from "./chunk-Or4hSTj_.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { c, i as i$1, u as u$4, d as d$1, f, a as i$2, w } from "./chunk-EtEJiJOm.js";
import { P as P$1, d, h, o as o$1 } from "./chunk-o0bAceQS.js";
import { o as o$2 } from "./chunk-LITpsmk3.js";
import { D } from "./chunk-n_TfoHHo.js";
import { u, t } from "./chunk-0yX55L32.js";
import { i } from "./chunk-8KqbLGAY.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-m3sjKNXT.js";
import "./chunk-tcpOk1v2.js";
import "./chunk-F8GT-pDR.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-6ji-DoVP.js";
import "./chunk-qr0t-oSA.js";
import "./chunk-nxkTbLqW.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-P_v7gizd.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-HoJyfhBe.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-drfK378b.js";
import "./chunk-315ILBUn.js";
import "./chunk-ItRUmXQG.js";
import "./chunk-9u8dCT92.js";
import "./chunk-IVubHwAV.js";
import "./chunk-8zH-_H-O.js";
import "./chunk-QztbNmp9.js";
import "./chunk-GTnGZnu1.js";
const U = i$2();
let P = class extends St(u(t(i(n(w))))) {
  constructor() {
    super(...arguments), this.type = "scene-layer-3d", this._setVisibilityHiddenObjectIds = new s(), this.progressiveLoadFactor = 1, this._elevationContext = "scene", this._isIntegratedMesh = false, this._supportsLabeling = true, this._pendingEditsQueue = Promise.resolve(), this._interactiveEditingSessions = /* @__PURE__ */ new Map(), this._queryEngine = null;
  }
  get i3slayer() {
    return this.layer;
  }
  tryRecycleWith(e2, t2) {
    return e2.url === this.layer.url && this.i3sOverrides.isEmpty ? e2.load(t2).then(() => {
      Y(this.layer, e2, this.i3sOverrides), this.layer = e2, this.i3sOverrides.destroy();
      const t3 = this.view.resourceController?.memoryController;
      this.i3sOverrides = new D({ view: this.view, layer: e2, memoryController: t3 }), this.resetHighlights();
    }) : null;
  }
  get layerPopupEnabledAndHasTemplate() {
    return this.layer.popupEnabled && u$1(this.layer, this.view.popup?.defaultPopupTemplateEnabled);
  }
  get filter() {
    return this._get("filter");
  }
  set filter(e2) {
    this._set("filter", P$1.checkSupport(e2) ? e2 : null);
  }
  get viewFilter() {
    const e2 = this.mergedFilter, t2 = this.layerFilter;
    if (null == e2 && null == t2)
      return null;
    const i2 = this._get("viewFilter");
    return null == i2 ? new P$1({ layerFilter: t2, viewFilter: e2, layerFieldsIndex: this.layer.fieldsIndex, loadAsyncModule: (e3) => this._loadAsyncModule(e3), addSqlFilter: (e3, t3) => this.addSqlFilter(e3, t3, this.logError), addTimeFilter: (e3, t3) => this.addTimeFilter(e3, t3) }) : (i2.viewFilter = e2, i2.layerFilter = t2, i2);
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
  get lodFactor() {
    return this.view?.qualitySettings?.sceneService?.object?.lodFactor ?? 1;
  }
  get lodCrossfadeUncoveredDuration() {
    return this.view?.qualitySettings?.fadeDuration ?? 0;
  }
  get updatingProgressValue() {
    return this._controller?.updatingProgress ?? 0;
  }
  initialize() {
    this._fieldsHelper = new c({ layerView: this }), this._updatingHandles.add(() => this.layer.rangeInfos, (e3) => this._rangeInfosChanged(e3), P$2), this._updatingHandles.add(() => this.layer.renderer, (e3) => this._updatingHandles.addPromise(this._rendererChange(e3)), P$2);
    const e2 = () => this._filterChange();
    this._updatingHandles.add(() => this.parsedDefinitionExpression, e2), this._updatingHandles.add(() => this.mergedFilter, e2), this._updatingHandles.add(() => this._floorFilterClause, e2), this._updatingHandles.add(() => this._excludeObjectIdsSorted, e2), this._updatingHandles.add(() => this._setVisibilityHiddenObjectIdsSorted, e2), this._updatingHandles.add(() => this.viewFilter?.sortedObjectIds, e2), this._updatingHandles.add(() => this.viewFilter?.parsedWhereClause, e2), this._updatingHandles.add(() => this.getTimeFilterDependencies(), e2), this._updatingHandles.add(() => [this.viewFilter?.parsedGeometry, this.mergedFilter?.spatialRelationship, this.layer.filter?.spatialRelationship], () => this._geometryFilterChange()), n$1() && this.i3sOverrides.is3DOFL && this._updatingHandles.add(() => this.i3sOverrides.sortedGeometryChangedObjectIds, e2), this.addHandles(this.layer.on("apply-edits", (e3) => this._updatingHandles.addPromise(e3.result))), this.addHandles(this.layer.on("edits", (e3) => {
      const t2 = this._pendingEditsQueue.then(() => this._handleEdits(e3)).then();
      this._pendingEditsQueue = t2, this._updatingHandles.addPromise(t2);
    }));
  }
  destroy() {
    this._fieldsHelper = u$2(this._fieldsHelper);
  }
  _rangeInfosChanged(e2) {
    null != e2 && e2.length > 0 && s$1.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.");
  }
  createQuery() {
    const e2 = { outFields: ["*"], returnGeometry: false, outSpatialReference: this.view.spatialReference };
    return this.mergedFilter?.createQuery(e2) ?? new b(e2);
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
    const e2 = u$3(this.view.spatialReference, this.view.renderSpatialReference, this._collection);
    return new d({ layerView: this, priority: I.FEATURE_QUERY_ENGINE, spatialIndex: new h({ featureAdapter: new o$1({ objectIdField: this.layer.objectIdField, attributeStorageInfo: this.layer.attributeStorageInfo ?? [], getFeatureExtent: e2 }), forAllFeatures: (e3, t2) => this._forAllFeatures((t3, i2, r) => e3({ id: t3, index: i2, meta: r }), t2, n$2.QUERYABLE), getFeatureExtent: e2, sourceSpatialReference: Z(this.layer), viewSpatialReference: this.view.spatialReference }) });
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
    const i2 = new c$1(null, null, e2);
    return i2.layer = this.layer, i2.sourceLayer = this.layer, i2;
  }
  getFilters() {
    const e2 = super.getFilters();
    n$1() && this.i3sOverrides.is3DOFL && this.i3sOverrides.sortedGeometryChangedObjectIds.length > 0 && e2.push((e3, t3) => {
      t3.node.index >= 0 && W(this.i3sOverrides.sortedGeometryChangedObjectIds, false, e3);
    });
    const t2 = this._setVisibilityHiddenObjectIdsSorted;
    null != t2 && e2.push((e3) => W(t2, false, e3));
    const i2 = this._excludeObjectIdsSorted;
    return null != i2 && e2.push((e3) => W(i2, false, e3)), this._floorFilterClause && this.addSqlFilter(e2, this._floorFilterClause, this.logError), this.addSqlFilter(e2, this.parsedDefinitionExpression, this.logError), null != this.viewFilter && this.viewFilter.addFilters(e2, this.view, this._controller.crsIndex, this._collection), e2;
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
    const t2 = n$1(), i2 = this._attributeEditingContext, r = await u$4(i2, e2);
    t2 && d$1(i2, r), f(i2, r);
  }
  get hasGeometryFilter() {
    const e2 = this.viewFilter;
    return null != e2?.parsedGeometry;
  }
  computeNodeFiltering(e2) {
    const t2 = this.viewFilter;
    return null == t2 || !this.view.spatialReference || t2.isMBSGeometryVisible(e2, this.view.spatialReference, this._controller.crsIndex) ? o$2.Unmodified : o$2.Culled;
  }
};
e([y()], P.prototype, "i3slayer", null), e([y(t$1)], P.prototype, "updatingProgress", void 0), e([y({ type: d$2 })], P.prototype, "filter", null), e([y({ readOnly: true })], P.prototype, "viewFilter", null), e([y(U.requiredFields)], P.prototype, "requiredFields", null), e([y(U.availableFields)], P.prototype, "availableFields", void 0), e([y()], P.prototype, "_fieldsHelper", void 0), e([y()], P.prototype, "_floorFilterClause", null), e([y()], P.prototype, "_excludeObjectIdsSorted", null), e([y()], P.prototype, "_setVisibilityHiddenObjectIds", void 0), e([y()], P.prototype, "_setVisibilityHiddenObjectIdsSorted", null), e([y()], P.prototype, "lodFactor", null), e([y()], P.prototype, "updatingProgressValue", null), P = e([c$2("esri.views.3d.layers.SceneLayerView3D")], P);
const M = P;
export {
  M as default
};
