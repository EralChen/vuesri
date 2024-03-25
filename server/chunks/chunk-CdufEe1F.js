import { m5 as h$1, ds as o, nq as n$1, fI as Y, c8 as u$1, nr as te, bX as P$1, ce as d$1, kx as t$1, cb as C, lS as o$1, ns as N, nt as A, ci as c$1, aT as s$1, aJ as n$2, nu as S, fJ as u$2, nv as J, fB as n$3, ku as t$2, l4 as l, nw as e, fF as o$2, nx as o$3, ny as i$2, bJ as c$2, kU as e$1, nz as Z, nA as A$1, nB as o$4, nC as A$2, ck as b, fL as I, eB as t$3, aV as e$2, aX as y, eT as d, ez as t$4, a_ as c$3, nk as Q, aW as n$4, nD as s$2 } from "./chunk-ejFG4zJ0.js";
import { D, Y as Y$1 } from "./chunk-n_TfoHHo.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { P, l as l$1 } from "./chunk-qr0t-oSA.js";
import { c, i as i$1, u as u$3, f, a as i$3, w } from "./chunk-EtEJiJOm.js";
import { u, t } from "./chunk-0yX55L32.js";
import { i } from "./chunk-8KqbLGAY.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-tcpOk1v2.js";
import "./chunk-LITpsmk3.js";
import "./chunk-wg0ozFEK.js";
import "./chunk-9u8dCT92.js";
import "./chunk-IVubHwAV.js";
import "./chunk-8zH-_H-O.js";
import "./chunk-QztbNmp9.js";
import "./chunk-GTnGZnu1.js";
import "./chunk-nxkTbLqW.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-P_v7gizd.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-HoJyfhBe.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-drfK378b.js";
import "./chunk-315ILBUn.js";
class r extends h$1 {
  constructor(e2) {
    super("SceneLayerWorker", "dracoDecompressPointCloudData", { dracoDecompressPointCloudData: (e3) => [e3.geometryBuffer] }, e2, { hasInitialize: true });
  }
}
class s extends o {
  constructor(e2, t2) {
    super(), this._updateAndCompare = e2, this._notifyUpdated = t2, this._nodes = /* @__PURE__ */ new Map(), this._graphics = /* @__PURE__ */ new Map(), this._duplicates = /* @__PURE__ */ new Map();
  }
  clear() {
    if (this._graphics.size > 0) {
      const e2 = this.toArray();
      this._graphics.clear(), this.emit("change", { added: [], removed: e2 });
    }
    this._nodes.clear();
  }
  get length() {
    return this._graphics.size;
  }
  get(e2) {
    return this._graphics.get(e2);
  }
  getNode(e2) {
    return this._nodes.get(e2);
  }
  hasNode(e2) {
    return this._nodes.has(e2);
  }
  nodes() {
    return this._nodes.values();
  }
  addNode(e2, t2) {
    this._nodes.set(e2, t2);
    const s2 = t2.graphics;
    if (0 === s2.length)
      return;
    const n2 = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < s2.length; i2++) {
      const t3 = s2[i2], o3 = t3.objectId, r2 = this._graphics.get(o3);
      if (r2) {
        n2.add(o3), t3 !== r2 && (s2[i2] = r2);
        const d2 = this._duplicates.get(o3);
        d2 ? d2.push(e2) : this._duplicates.set(o3, [r2.nodeIndex, e2]);
      } else
        t3.nodeIndex = e2, this._graphics.set(o3, t3);
    }
    n2.size && this._updateForeignGraphics(t2);
    const o2 = n2.size > 0 ? s2.filter((e3) => !n2.has(e3.objectId)) : s2;
    o2.length > 0 && this.emit("change", { added: o2, removed: [] });
  }
  removeNode(e2) {
    const t2 = this._nodes.get(e2);
    if (!t2)
      return void console.error("Removing unknown node");
    this._nodes.delete(e2);
    const s2 = /* @__PURE__ */ new Set(), n2 = [];
    for (const o2 of t2.graphics) {
      const t3 = o2.objectId, i2 = this._graphics.get(t3);
      if (!i2)
        continue;
      const r2 = this._duplicates.get(t3);
      if (r2) {
        const n3 = r2.indexOf(e2);
        if (-1 === n3) {
          console.error("error: removing graphic from node that should not reference it.");
          continue;
        }
        if (r2.splice(n3, 1), i2.nodeIndex === e2) {
          let e3 = this.getNode(r2[0]);
          for (let t4 = 1; t4 < r2.length; t4++) {
            const s3 = this.getNode(r2[t4]);
            (null == e3 || null != s3 && s3.node.level > e3.node.level) && (e3 = s3);
          }
          null != e3 && s2.add(e3);
        }
        1 === r2.length && this._duplicates.delete(t3);
      } else
        this._graphics.delete(t3), n2.push(o2);
    }
    n2.length > 0 && this.emit("change", { added: [], removed: n2 }), s2.forEach((e3) => this._updateForeignGraphics(e3));
  }
  _updateForeignGraphics(e2) {
    const t2 = [], s2 = e2.node.index, n2 = e2.node.level;
    let o2 = 0;
    for (; o2 < e2.graphics.length; ) {
      const i2 = e2.graphics[o2].nodeIndex;
      if (i2 === s2) {
        o2++;
        continue;
      }
      let r2 = 1;
      for (; o2 + r2 < e2.graphics.length && e2.graphics[o2 + r2].nodeIndex === i2; )
        r2++;
      const d2 = this.getNode(i2);
      if (null != d2 && d2.node.level > n2)
        o2 += r2;
      else {
        for (let n3 = o2; n3 < o2 + r2; n3++) {
          const o3 = e2.graphics[n3];
          o3.nodeIndex = s2, this._updateAndCompare(o3, e2, n3) && t2.push(o3);
        }
        o2 += r2;
      }
    }
    this._notifyUpdated(t2);
  }
  toArray() {
    return Array.from(this._graphics.values());
  }
  find(e2) {
    let s2;
    return n$1(this._graphics, (t2) => !!e2(t2) && (s2 = t2, true)), s2;
  }
  forEach(e2) {
    this._graphics.forEach((t2) => e2(t2));
  }
  forEachNode(e2) {
    this._nodes.forEach((t2, s2) => e2(t2, s2));
  }
  get nodeCount() {
    return this._nodes.size;
  }
  _checkInvariants() {
    const e2 = /* @__PURE__ */ new Map();
    this._nodes.forEach((t3, s2) => {
      s2 !== t3.node.index && console.error("Mismatched node index"), t3.graphics.forEach((t4) => {
        e2.set(t4.objectId, 1 + (e2.get(t4.objectId) ?? 0));
        const n2 = this._duplicates.get(t4.objectId);
        n2 && !n2.includes(s2) && console.error("Node not listed in duplicate list"), n2 || t4.nodeIndex === s2 || console.error("Unique graphic does not reference owning node index");
      });
    }), this._graphics.size !== e2.size && console.error("Mismatch between actual and expected number of graphics");
    let t2 = 0;
    e2.forEach((e3, s2) => {
      t2 += e3 > 1 ? 1 : 0;
      const n2 = this._graphics.get(s2);
      if (!n2)
        return void console.error("Missing graphic entry");
      const o2 = this._nodes.get(n2.nodeIndex);
      if (!o2)
        return void console.error("Graphic references unkown node");
      const i2 = this._duplicates.get(s2);
      i2 ? (i2.length !== e3 && console.error("Wrong number of entries in duplicate list"), i2.forEach((e4) => {
        const t3 = this._nodes.get(e4);
        t3 ? t3.node.level > o2.node.level && console.error("Duplicated graphic does not reference highest level node") : console.error("Unknown node in duplicate list");
      })) : e3 > 1 && console.error("Missing duplicates entry");
    }), this._duplicates.size !== t2 && console.error("Mismatch between expected and actual number of duplicate entries");
  }
}
const re = i$3();
class ie {
  constructor(e2, t2, r2, i2) {
    this.graphics = e2, this.featureIds = t2, this.attributeInfo = r2, this.node = i2;
  }
}
let se = class extends u(t(i(n(w)))) {
  constructor() {
    super(...arguments), this.type = "scene-layer-graphics-3d", this._queryEngine = null, this._memCache = null, this._interactiveEditingSessions = /* @__PURE__ */ new Map(), this._pendingEditsQueue = Promise.resolve(), this.loadedGraphics = new s((e2, t2, r2) => le(e2, t2, r2), (e2) => this.processor.graphicsCore.recreateGraphics(e2)), this.holeFilling = "always", this.progressiveLoadFactor = 1, this.supportsHeightUnitConversion = true, this._coordinatesOutsideExtentErrors = 0, this._maxCoordinatesOutsideExtentErrors = 20;
  }
  tryRecycleWith(e2, t2) {
    return e2.url === this.layer.url && this._i3sOverrides.isEmpty ? e2.load(t2).then(() => {
      Y(this.layer, e2, this._i3sOverrides), this.layer = e2, this._i3sOverrides.destroy();
      const t3 = this.view.resourceController?.memoryController;
      this._i3sOverrides = new D({ view: this.view, layer: e2, memoryController: t3 }), u$1(this._queryEngine), this._setupQueryEngine(), this.processor.resetObjectStates();
    }) : null;
  }
  initialize() {
    this.addResolvingPromise(this.layer.indexInfo);
    const e2 = this.view.resourceController?.memoryController;
    this._i3sOverrides = new D({ view: this.view, layer: this.layer, memoryController: e2 }), te(this.layer, this.view.spatialReference, this.view.viewingMode), this._fieldsHelper = new c({ layerView: this }), this._updatingHandles.add(() => this.layer.rangeInfos, (e3) => this._rangeInfosChanged(e3), P$1), this._updatingHandles.add(() => this.layer.renderer, (e3, t2) => this._rendererChange(e3, t2)), this._updatingHandles.add(() => [this.parsedDefinitionExpression, this._excludeObjectIdsSorted], () => this._filterChange()), this.addHandles(d$1(() => t$1.I3S_TREE_SHOW_TILES, (e3) => {
      if (e3 && !this._treeDebugger) {
        const e4 = this._controller.crsIndex;
        import("./chunk-GN1Bylhy.js").then(({ I3STreeDebugger: t2 }) => {
          !this._treeDebugger && t$1.I3S_TREE_SHOW_TILES && (this._treeDebugger = new t2({ lv: this, view: this.view, nodeSR: e4 }));
        });
      } else
        e3 || !this._treeDebugger || t$1.I3S_TREE_SHOW_TILES || (this._treeDebugger.destroy(), this._treeDebugger = null);
    }, P$1)), this._set("processor", new P({ owner: this, preferredUpdatePolicy: C.ASYNC, scaleVisibilityEnabled: true, filterVisibilityEnabled: true, timeExtentEnabled: false, frustumVisibilityEnabled: false, elevationAlignmentEnabled: true, elevationFeatureExpressionEnabled: false, setUidToIdOnAdd: false, dataExtent: this.layer.fullExtent, updateClippingExtent: (e3) => this._updateClippingExtent(e3) })), this.processor.elevationAlignment?.events.on("invalidate-elevation", ({ extent: e3, spatialReference: t2 }) => this._controller.updateElevationChanged(e3, t2)), this.supportsHeightUnitConversion && (this._verticalScale = o$1("point", this.layer.spatialReference, this.view.spatialReference)), this.addResolvingPromise(this.processor.initializePromise), this._memCache = this.view.resourceController.memoryController.newCache(`psl-${this.uid}`), this._controller = new Y$1({ layerView: this, scaleVisibilityEnabled: false }), N(this.layer.geometryDefinitions) && (this._worker = new r((e3) => this.view.resourceController.immediate.schedule(e3))), this.addHandles(this.layer.on("apply-edits", (e3) => this._updatingHandles.addPromise(e3.result))), this.addHandles(this.layer.on("edits", (e3) => {
      const t2 = this._pendingEditsQueue.then(() => this._handleEdits(e3)).then();
      this._pendingEditsQueue = t2, this._updatingHandles.addPromise(t2);
    })), this.when(() => {
      this._setupQueryEngine(), this._updatingHandles.add(() => this.maximumNumberOfFeatures, (e3) => this._controller.featureTarget = e3, P$1), this._updatingHandles.add(() => this.suspended, (e3) => {
        e3 && this._removeAllNodeData();
      });
    });
  }
  destroy() {
    this._treeDebugger = u$1(this._treeDebugger), this._i3sOverrides = u$1(this._i3sOverrides), this._set("processor", u$1(this.processor)), this._controller = u$1(this._controller), this._queryEngine = u$1(this._queryEngine), this._worker = u$1(this._worker), this._memCache = u$1(this._memCache), this.loadedGraphics.clear(), this._fieldsHelper = u$1(this._fieldsHelper);
  }
  get i3slayer() {
    return this.layer;
  }
  get updatingProgressValue() {
    return this._controller?.updatingProgress ?? 1;
  }
  get requiredFields() {
    return this._fieldsHelper?.requiredFields ?? [];
  }
  get maximumNumberOfFeatures() {
    const e2 = this.processor?.graphicsCore?.displayFeatureLimit;
    return e2?.maximumNumberOfFeatures ?? 0;
  }
  set maximumNumberOfFeatures(e2) {
    null != e2 ? (this._override("maximumNumberOfFeatures", e2), this._controller.fixedFeatureTarget = true) : (this._clearOverride("maximumNumberOfFeatures"), this._controller.fixedFeatureTarget = false);
  }
  get maximumNumberOfFeaturesExceeded() {
    return !this.suspended && (!!this._controller?.useMaximumNumberOfFeatures && !this._controller.leavesReached);
  }
  get _excludeObjectIdsSorted() {
    const e2 = this.layer.excludeObjectIds;
    return e2.length ? e2.toArray().sort((e3, t2) => e3 - t2) : null;
  }
  get lodFactor() {
    return "Labels" === this.layer.semantic ? 1 : this.view.qualitySettings.sceneService.point.lodFactor;
  }
  get hasM() {
    return false;
  }
  get hasZ() {
    return true;
  }
  get contentVisible() {
    return !this.suspended && !!this._controller?.rootNodeVisible;
  }
  get legendEnabled() {
    return this.contentVisible && true === this.i3slayer?.legendEnabled;
  }
  async whenGraphicAttributes(e2, t2) {
    return A(this.layer, e2, this._getObjectIdField(), t2, () => [...this.loadedGraphics.nodes()]);
  }
  getHit(e2) {
    if (!this.loadedGraphics)
      return null;
    const t2 = c$1(this.loadedGraphics.find((t3) => t3.uid === e2), this.layer), r2 = this._getObjectIdField();
    return t2?.attributes?.[r2] ? (t2.layer = this.layer, t2.sourceLayer = this.layer, { type: "graphic", graphic: t2, layer: t2.layer }) : null;
  }
  whenGraphicBounds(e2, t2) {
    return this.processor.whenGraphicBounds(e2, t2);
  }
  computeAttachmentOrigin(e2, t2) {
    return this.processor.computeAttachmentOrigin(e2, t2);
  }
  isUpdating() {
    return !!(this._controller?.updating || this.processor?.updating || this._fieldsHelper?.updating || this.layerFilterUpdating);
  }
  highlight(e2) {
    return this.processor.highlight(e2, this.layer.objectIdField);
  }
  get updatePolicy() {
    return this.processor.graphicsCore.effectiveUpdatePolicy;
  }
  createInteractiveEditSession(e2) {
    return i$1(this._attributeEditingContext, e2);
  }
  async _decompressBinaryPointData(e2, t2) {
    const r$1 = { geometryBuffer: e2.geometryBuffer };
    null == this._worker && (this._worker = new r((e3) => this.view.resourceController.immediate.schedule(e3)));
    const i2 = await this._worker.invoke(r$1, t2);
    if (null == i2)
      throw new Error("Failed to decompress Draco point data");
    return { positionData: i2.positions, featureIds: i2.featureIds };
  }
  async addNode(e2, t2, r2) {
    if (!ne(t2) && !ae(t2))
      throw new Error();
    if (this.loadedGraphics.hasNode(e2.index))
      return void s$1.getLogger(this).error("I3S node " + e2.id + " already added");
    const s2 = null != this.layer.fullExtent ? ue(this.layer.fullExtent.clone(), 0.5) : null, { featureIds: o2, pointPositions: a } = ne(t2) ? await this._extractBinaryPointPositions(e2, t2, r2) : this._extractLegacyPointPositions(t2), n2 = new Array();
    this._validatePositions(e2, o2, a, s2, n2);
    const l2 = this._controller.crsVertex, d2 = this.view.spatialReference;
    n$2(a, l2, 0, a, d2, 0, o2.length);
    const u2 = ne(t2) ? e2.level : 0, h = this._createGraphics(o2, a, e2.index, u2), p = new ie(h, o2, t2.attributeDataInfo, e2);
    if (await this._i3sOverrides.applyAttributeOverrides(p.featureIds, t2.attributeDataInfo, r2), e2.numFeatures = p.graphics.length, this._updateNodeMemory(e2), de(p), n2.length > 0 && (this._computeObb(e2, n2, l2), this._controller.updateVisibility(e2.index)), !this._controller.isGeometryVisible(e2))
      return void this._cacheNodeData(p);
    if (null != this._verticalScale)
      for (const i2 of p.graphics)
        this._verticalScale(i2.geometry);
    const g = this.view._stage.renderView.objectAndLayerIdRenderHelper;
    if (null != g) {
      const e3 = S(this.view.map, this.layer.uid);
      for (let t3 = 0; t3 < p.featureIds.length; t3++) {
        const r3 = p.featureIds[t3];
        g.setUidToObjectAndLayerId(r3, p.graphics[t3].uid, this.layer.id, this.layer.uid, this.layer.popupEnabled && !e3 && u$2(this.layer, this.view.popup?.defaultPopupTemplateEnabled), p.node.resources.attributes, t3);
      }
    }
    this.loadedGraphics.addNode(e2.index, p), this._controller.updateLoadStatus(e2.index, true), this._filterNode(p), this._treeDebugger && this._treeDebugger.update();
  }
  _computeObb(e2, t2, r2) {
    const i2 = this._controller.crsIndex, s2 = i2.isGeographic ? this.view.renderSpatialReference : i2;
    n$2(t2, r2, 0, t2, s2, 0, t2.length / 3), e2.serviceObbInIndexSR = J(new s$2(t2, 3)), i2.isGeographic && (n$3(e2.serviceObbInIndexSR.center, s2, pe, i2), e2.serviceObbInIndexSR.center = pe);
  }
  isNodeLoaded(e2) {
    return this.loadedGraphics.hasNode(e2);
  }
  isNodeReloading() {
    return false;
  }
  updateNodeState() {
  }
  async _extractBinaryPointPositions(e$12, t2, r2) {
    const i2 = await this._decompressBinaryPointData(t2, r2), s2 = i2.positionData, o2 = 3, a = s2.length / o2, n2 = t$2(3 * a), l$12 = null != e$12.serviceObbInIndexSR ? e$12.serviceObbInIndexSR.center : l, d2 = Math.abs(l$12[2]) * 2 ** -20;
    for (let u2 = 0; u2 < a; u2++) {
      const e2 = u2 * o2;
      n2[e2] = s2[e2] + l$12[0], n2[e2 + 1] = s2[e2 + 1] + l$12[1], n2[e2 + 2] = s2[e2 + 2] + l$12[2], Math.abs(n2[e2 + 2]) < d2 && (n2[e2 + 2] = 0);
    }
    return { featureIds: i2.featureIds ? e(i2.featureIds) : [], pointPositions: n2 };
  }
  _extractLegacyPointPositions(e2) {
    const t2 = e2.pointData.length, r2 = t$2(3 * t2), i2 = new Array();
    for (let s2 = 0; s2 < t2; s2++) {
      const t3 = e2.pointData[s2], o2 = t3.featureDataPosition, a = o2.length, n2 = t3.geometries?.[0] ?? he[a], l2 = t3.featureIds[0];
      if ("Embedded" !== n2.type || "points" !== n2.params.type || a < 2 || a > 3)
        continue;
      const d2 = n2.params.vertexAttributes?.position ?? [0, 0, 0], u2 = 3 * i2.length;
      r2[u2] = o2[0] + d2[0], r2[u2 + 1] = o2[1] + d2[1], r2[u2 + 2] = 3 === a ? o2[2] + d2[2] : NaN, i2.push(l2);
    }
    return { featureIds: i2, pointPositions: r2 };
  }
  _validatePositions(e2, t2, r2, s2, o2) {
    if (null == s2 && e2.serviceObbInIndexSR)
      return;
    const a = t2.length, n2 = 3;
    for (let l2 = 0; l2 < a; l2++) {
      const t3 = l2 * n2;
      o$2(pe, r2[t3], r2[t3 + 1], r2[t3 + 2]);
      const a2 = !Number.isNaN(r2[2]);
      null == s2 || (a2 ? o$3(s2, pe) : i$2(s2, pe)) || (this._coordinatesOutsideExtentErrors < this._maxCoordinatesOutsideExtentErrors && s$1.getLogger(this).error("Service Error: Coordinates outside of layer extent"), this._coordinatesOutsideExtentErrors + 1 === this._maxCoordinatesOutsideExtentErrors && s$1.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."), this._coordinatesOutsideExtentErrors++), e2.serviceObbInIndexSR || o2.push(pe[0], pe[1], pe[2]);
    }
  }
  _createGraphics(e2, r2, i2, s2) {
    const o2 = e2.length, a = 3, n2 = this._getObjectIdField(), l2 = this.processor.graphicsCore, d2 = new Array(), u2 = this.view.spatialReference;
    for (let h = 0; h < o2; h++) {
      const o3 = e2[h], p = {};
      null != o3 && (p[n2] = o3);
      const c2 = o3 ?? c$2.generateUID(), g = h * a, m = isNaN(r2[g + 2]) ? void 0 : r2[g + 2], y2 = e$1(r2[g], r2[g + 1], m, u2), f2 = this.loadedGraphics.get(c2);
      if (null != f2)
        (null == f2.level || f2.level < s2) && (ce.property = "geometry", ce.graphic = f2, ce.oldValue = f2.geometry, ce.newValue = y2, f2.geometry = y2, f2.level = s2, l2.graphicUpdateHandler(ce)), d2.push(f2);
      else {
        const e3 = c$2.generateUID();
        d2.push({ objectId: c2, uid: e3, geometry: y2, attributes: p, visible: true, nodeIndex: i2, level: s2 });
      }
    }
    return d2;
  }
  _updateNodeMemory(e2) {
    e2.memory = 4096 + (null != e2.numFeatures ? e2.numFeatures * this.processor.graphicsCore.usedMemoryPerGraphic : 0);
  }
  _cacheNodeData(e2) {
    const t2 = e2.graphics.reduce((e3, t3) => Z(t3) + e3, A$1(e2.featureIds) + 1024);
    this._memCache.put(this._getMemCacheKey(e2.node), e2, t2);
  }
  _getMemCacheKey(e2) {
    return `${e2.index}`;
  }
  _removeAllNodeData() {
    this.loadedGraphics.forEachNode((e2, t2) => {
      if (e2) {
        const t3 = e2.node;
        this._updateNodeMemory(t3), this._cacheNodeData(e2);
      }
      this._controller.updateLoadStatus(t2, false);
    }), this._treeDebugger && this._treeDebugger.update(), this.loadedGraphics.clear();
  }
  removeNode(e2) {
    const t2 = this._removeNodeStageData(e2);
    t2 && (this._updateNodeMemory(t2.node), this._cacheNodeData(t2));
  }
  _removeNodeStageData(e2) {
    const t2 = this.loadedGraphics.getNode(e2);
    return null == t2 ? null : (this._controller.updateLoadStatus(e2, false), this.loadedGraphics.removeNode(e2), this._treeDebugger && this._treeDebugger.update(), t2);
  }
  async loadCachedNodeData(e2) {
    return this._memCache?.pop(this._getMemCacheKey(e2));
  }
  async addCachedNodeData(e2, t2, r2, s2) {
    this.loadedGraphics.hasNode(e2.index) ? s$1.getLogger(this).error("I3S node " + e2.id + " already added") : (await this._i3sOverrides.applyAttributeOverrides(t2.featureIds, r2, s2), this.loadedGraphics.addNode(e2.index, t2), this._controller.updateLoadStatus(e2.index, true), this._updateNodeMemory(e2), t2.attributeInfo = r2, this._attributeValuesChanged(t2), this._filterNode(t2), this._treeDebugger && this._treeDebugger.update());
  }
  getLoadedNodeIds() {
    const e2 = [];
    return this.loadedGraphics.forEachNode((t2) => e2.push(t2.node.id)), e2.sort();
  }
  getVisibleNodes() {
    const e2 = new Array();
    return this.loadedGraphics.forEachNode((t2) => e2.push(t2.node)), e2;
  }
  getLoadedNodeIndices(e2) {
    this.loadedGraphics.forEachNode((t2, r2) => e2.push(r2));
  }
  getLoadedAttributes(e2) {
    const t2 = this.loadedGraphics.getNode(e2);
    if (null != t2?.attributeInfo)
      return t2.attributeInfo.loadedAttributes;
  }
  getAttributeData(e2) {
    const t2 = this.loadedGraphics.getNode(e2);
    if (null != t2?.attributeInfo)
      return t2.attributeInfo.attributeData;
  }
  _setAttributeData(e2, t2) {
    const r2 = this.loadedGraphics.getNode(e2);
    null != r2?.attributeInfo && (r2.attributeInfo.attributeData = t2, this._attributeValuesChanged(r2));
  }
  async updateAttributes(e2, t2, r2) {
    const i2 = this.loadedGraphics.getNode(e2);
    null != i2 && (await this._i3sOverrides.applyAttributeOverrides(i2.featureIds, t2, r2), i2.attributeInfo = t2, this._attributeValuesChanged(i2));
  }
  _attributeValuesChanged(e2) {
    if (de(e2), this._filterNode(e2), this.processor.graphicsCore.labelsEnabled) {
      const t2 = e2.graphics.map((e3) => e3.uid);
      this.processor.graphicsCore.updateLabelingInfo(t2);
    }
  }
  _updateClippingExtent(e2) {
    return this._controller && this._controller.updateClippingArea(e2), false;
  }
  _getObjectIdField() {
    return this.layer.objectIdField || o$4;
  }
  _getGlobalIdField() {
    return this.layer.associatedLayer?.globalIdField;
  }
  async _rendererChange(e2, t2) {
    const { layer: { fieldsIndex: r2 } } = this, i2 = /* @__PURE__ */ new Set();
    let s2, o2;
    e2 ? (await e2.collectRequiredFields(i2, r2), s2 = Array.from(i2).sort()) : s2 = [], i2.clear(), t2 ? (await t2.collectRequiredFields(i2, r2), o2 = Array.from(i2).sort()) : o2 = [], s2.length === o2.length && s2.every((e3, t3) => s2[t3] === o2[t3]) || this._reloadAllNodes();
  }
  _rangeInfosChanged(e2) {
    null != e2 && e2.length > 0 && s$1.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.");
  }
  _filterChange() {
    this.loadedGraphics.forEachNode((e2) => this._filterNode(e2));
  }
  _reloadAllNodes() {
    this._removeAllNodeData(), this._controller && this._controller.restartNodeLoading();
  }
  _filterNode(e2) {
    const t2 = this.parsedDefinitionExpression, i2 = this._excludeObjectIdsSorted, s2 = this._getObjectIdField();
    for (const o2 of e2.graphics) {
      const e3 = o2.visible, a = !t2 || this._evaluateClause(t2, o2), n2 = null == i2 || A$2(i2, o2.attributes[s2]) < 0;
      o2.visible = a && n2, e3 !== o2.visible && (ce.graphic = o2, ce.property = "visible", ce.oldValue = e3, ce.newValue = o2.visible, this.processor.graphicsCore.graphicUpdateHandler(ce));
    }
  }
  createQuery() {
    const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference };
    return null != this.filter ? this.filter.createQuery(e2) : new b(e2);
  }
  queryFeatures(e2, t2) {
    return this._queryEngine.executeQuery(this._ensureQuery(e2), t2?.signal);
  }
  queryObjectIds(e2, t2) {
    return this._queryEngine.executeQueryForIds(this._ensureQuery(e2), t2?.signal);
  }
  queryFeatureCount(e2, t2) {
    return this._queryEngine.executeQueryForCount(this._ensureQuery(e2), t2?.signal);
  }
  queryExtent(e2, t2) {
    return this._queryEngine.executeQueryForExtent(this._ensureQuery(e2), t2?.signal);
  }
  _ensureQuery(e2) {
    return this._addDefinitionExpressionToQuery(null == e2 ? this.createQuery() : b.from(e2));
  }
  _setupQueryEngine() {
    const e2 = () => this.processor.featureStore;
    this._queryEngine = new l$1({ context: { spatialReference: this.view.spatialReference, layer: this.layer, scheduler: this.view.resourceController.scheduler, get featureStore() {
      return e2();
    }, hasZ: this.hasZ, hasM: this.hasM }, priority: I.FEATURE_QUERY_ENGINE });
  }
  get usedMemory() {
    return this.processor?.graphicsCore?.usedMemory ?? 0;
  }
  get unloadedMemory() {
    return 0.8 * ((this._controller?.unloadedMemoryEstimate ?? 0) + (this.processor?.graphicsCore?.unprocessedMemoryEstimate ?? 0));
  }
  get ignoresMemoryFactor() {
    return this._controller && this._controller.fixedFeatureTarget;
  }
  async _handleEdits(e2) {
    const t2 = this._attributeEditingContext, r2 = await u$3(t2, e2);
    f(t2, r2);
  }
  get _attributeEditingContext() {
    const e2 = this._getObjectIdField(), t2 = this._getGlobalIdField();
    return { sessions: this._interactiveEditingSessions, fieldsIndex: this.layer.fieldsIndex, objectIdField: e2, globalIdField: t2, forEachNode: (e3) => this.loadedGraphics.forEachNode((t3) => e3(t3.node, t3.featureIds)), attributeStorageInfo: this.i3slayer.attributeStorageInfo ?? [], i3sOverrides: this._i3sOverrides, getAttributeData: (e3) => this.getAttributeData(e3), setAttributeData: (t3, r2, i2) => {
      this._setAttributeData(t3, r2);
      const s2 = this.loadedGraphics.getNode(t3);
      if (null != i2) {
        const t4 = this.loadedGraphics.get(i2.attributes[e2]);
        null != t4 && this.processor.graphicsCore.recreateGraphics([t4]);
      } else
        null != s2 && this.processor.graphicsCore.recreateGraphics(s2.graphics);
    }, clearMemCache: () => {
    } };
  }
  get performanceInfo() {
    return new t$3(this.usedMemory, this.loadedGraphics.length, -1, this.maximumNumberOfFeatures, this.loadedGraphics.nodeCount, this.processor.graphicsCore.performanceInfo);
  }
  get test() {
    return { controller: this._controller, numNodes: this.loadedGraphics.nodeCount, loadedGraphics: this.loadedGraphics };
  }
};
e$2([y()], se.prototype, "processor", void 0), e$2([y({ type: d })], se.prototype, "filter", void 0), e$2([y()], se.prototype, "loadedGraphics", void 0), e$2([y()], se.prototype, "i3slayer", null), e$2([y()], se.prototype, "_controller", void 0), e$2([y()], se.prototype, "updating", void 0), e$2([y()], se.prototype, "suspended", void 0), e$2([y()], se.prototype, "holeFilling", void 0), e$2([y(t$4)], se.prototype, "updatingProgress", void 0), e$2([y()], se.prototype, "updatingProgressValue", null), e$2([y(re.requiredFields)], se.prototype, "requiredFields", null), e$2([y(re.availableFields)], se.prototype, "availableFields", void 0), e$2([y()], se.prototype, "_fieldsHelper", void 0), e$2([y({ type: Number })], se.prototype, "maximumNumberOfFeatures", null), e$2([y({ readOnly: true })], se.prototype, "maximumNumberOfFeaturesExceeded", null), e$2([y()], se.prototype, "_excludeObjectIdsSorted", null), e$2([y({ readOnly: true })], se.prototype, "lodFactor", null), e$2([y({ readOnly: true })], se.prototype, "hasM", null), e$2([y({ readOnly: true })], se.prototype, "hasZ", null), e$2([y()], se.prototype, "contentVisible", null), e$2([y({ readOnly: true })], se.prototype, "legendEnabled", null), se = e$2([c$3("esri.views.3d.layers.SceneLayerGraphicsView3D")], se);
const oe = se;
function ae(e2) {
  return "pointData" in e2;
}
function ne(e2) {
  return "geometryBuffer" in e2 && null !== e2.geometryBuffer;
}
function le(e2, t2, r2) {
  const i2 = t2.attributeInfo;
  if (null == i2?.loadedAttributes || null == i2.attributeData)
    return false;
  let s2 = false;
  for (const { name: o2 } of i2.loadedAttributes)
    if (i2.attributeData[o2]) {
      const t3 = Q(i2.attributeData[o2], r2);
      t3 !== e2.attributes[o2] && (e2.attributes[o2] = t3, s2 = true);
    }
  return s2;
}
function de(e2) {
  const t2 = e2.attributeInfo, r2 = e2.node.index;
  if (null != t2?.loadedAttributes && null != t2.attributeData)
    for (let i2 = 0; i2 < e2.graphics.length; i2++) {
      const s2 = e2.graphics[i2];
      if (s2.nodeIndex === r2) {
        s2.attributes || (s2.attributes = {});
        for (const { name: e3 } of t2.loadedAttributes)
          t2.attributeData[e3] && (s2.attributes[e3] = Q(t2.attributeData[e3], i2));
      }
    }
}
function ue(e2, t2) {
  return e2.xmin -= t2, e2.ymin -= t2, e2.xmax += t2, e2.ymax += t2, null != e2.zmin && null != e2.zmax && (e2.zmin -= t2, e2.zmax += t2), null != e2.mmin && null != e2.mmax && (e2.mmin -= t2, e2.mmax += t2), e2;
}
const he = { 2: { type: "Embedded", params: { type: "points", vertexAttributes: { position: [0, 0] } } }, 3: { type: "Embedded", params: { type: "points", vertexAttributes: { position: [0, 0, 0] } } } }, pe = n$4(), ce = { graphic: null, property: null, oldValue: null, newValue: null };
export {
  oe as default
};
