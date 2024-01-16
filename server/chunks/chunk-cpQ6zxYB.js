import { bo as e$2, bp as y$2, br as c$1, bs as g$1, eQ as n$1, b8 as a$1, le as t, lB as o, vh as G, b0 as h$1, vi as j, pl as d$3, pw as b$1, ng as t$1, kC as d$4, pn as t$2, po as g, rS as p, vj as l$1, n7 as i$2, vk as k, vl as n, vm as f$1, vn as z, hw as r$1, eO as z$1, mL as g$2, l6 as u$2, pA as h$2, bb as s$2, d1 as o$1, bm as h$3, kx as F, mz as e$3, eV as I$1, fi as x$1, vo as B$1, vp as V$1, mJ as e$4, vq as U$1, cy as x$2, vr as J$1, vs as g$3, eq as t$5, d7 as U$2, bn as P$1, em as e$5, el as d$5, kz as d$6, bS as e$6, ar as D$1, uU as s$3, rU as F$1, vt as j$1, bu as u$3, sB as G$1, sA as F$2, pS as nt, bJ as d$7, rO as u$4, la as v, bR as A, bD as u$5, lb as b, vu as t$7, mW as n$2, jn as h$4, fo as s$4, vv as c$3, nX as d$9, vw as e$8, hy as e$9, bh as V$2 } from "./chunk-KFNcxJaF.js";
import { s as s$5 } from "./chunk-FIgfswJd.js";
import { t as t$3, u as u$6, f as f$2 } from "./chunk-_p1vQhyl.js";
import { b as t$4, u as u$7 } from "./chunk-XZLuqbq5.js";
import { $, w as w$1, e as e$7 } from "./chunk-S1k8w-_l.js";
import { t as t$6 } from "./chunk-mRgVwI7R.js";
import { c as c$2, x as x$3 } from "./chunk-nQSFOLog.js";
import { a, b as a$2, v as v$1 } from "./chunk-ipKbHu6Z.js";
import { d as d$8 } from "./chunk-FKMfLf6u.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-s_1zK5-o.js";
let s$1 = class s extends g$1 {
  constructor(o2) {
    super(o2), this.target = null, this.intersectedGraphic = null, this.intersectedLocation = null, this.elevationAlignedTargetLocation = null, this.visible = void 0;
  }
};
e$2([y$2()], s$1.prototype, "target", void 0), e$2([y$2()], s$1.prototype, "intersectedGraphic", void 0), e$2([y$2()], s$1.prototype, "intersectedLocation", void 0), e$2([y$2()], s$1.prototype, "elevationAlignedTargetLocation", void 0), e$2([y$2({ type: Boolean })], s$1.prototype, "visible", void 0), s$1 = e$2([c$1("esri.views.3d.analysis.LineOfSightAnalysisResult")], s$1);
let i$1 = class i extends g$1 {
  constructor(t2) {
    super(t2), this.elevationAlignedTargetLocation = null, this.inputPoints = { isValid: false, observer: n$1(), observerSurfaceNormal: null, observerFeatureId: null, target: n$1(), targetSurfaceNormal: null, targetFeatureId: null, observerAdjusted: n$1(), targetAdjusted: n$1() }, this.computationResult = { start: n$1(), end: n$1(), intersection: n$1(), isValid: false, isTargetVisible: false }, this.result = null;
  }
  notifyResultChanged() {
    this.notifyChange("computationResult");
  }
  notifyInputPointsChanged() {
    this.notifyChange("inputPoints");
  }
};
e$2([y$2()], i$1.prototype, "target", void 0), e$2([y$2()], i$1.prototype, "elevationAlignedTargetLocation", void 0), e$2([y$2()], i$1.prototype, "inputPoints", void 0), e$2([y$2()], i$1.prototype, "computationResult", void 0), e$2([y$2()], i$1.prototype, "result", void 0), i$1 = e$2([c$1("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")], i$1);
var m$1;
let y$1 = m$1 = class extends g$1 {
  constructor(r2) {
    super(r2);
  }
  clone() {
    return new m$1({ type: this.type, id: a$1(this.id), mapPoint: a$1(this.mapPoint), renderPoint: t(this.renderPoint), normal: a$1(this.normal), ray: a$1(this.ray), graphic: this.graphic });
  }
  equals(r2) {
    return this.type === r2.type && this.id === r2.id && o(this.mapPoint, r2.mapPoint) && G(this.renderPoint, r2.renderPoint) && h$1(this.normal, r2.normal) && j(this.ray, r2.ray) && this.graphic === r2.graphic;
  }
};
e$2([y$2()], y$1.prototype, "type", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "id", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "mapPoint", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "renderPoint", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "normal", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "graphic", void 0), e$2([y$2({ constructOnly: true })], y$1.prototype, "ray", void 0), y$1 = m$1 = e$2([c$1("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")], y$1);
let S = class extends g$1 {
  constructor(e3) {
    super(e3), this._terrainIntersectionOptionsLayerUids = /* @__PURE__ */ new Set(["terrain"]);
  }
  initialize() {
    this.intersector = b$1(this.view.state.viewingMode), this.intersector.options.hud = false, this.intersector.options.store = t$1.MIN;
  }
  getScreenPointIntersection(e3) {
    const r2 = d$4(e3, t$2.get()), s3 = g(this.view.state.camera, r2, L);
    return this._getRayIntersection(s3);
  }
  _getRayIntersection(e3, r2) {
    if (null == e3 || null == this.view.sceneIntersectionHelper)
      return null;
    const { intersector: t$22 } = this;
    t$22.options.store = t$1.MIN, this.view.sceneIntersectionHelper.intersectToolIntersectorRay(e3, t$22, r2);
    const s3 = t$22.results.min, o2 = n$1();
    if (!s3.getIntersectionPoint(o2))
      return null;
    if (null != r2?.maxDistance && p(o2, e3.origin) > r2.maxDistance ** 2)
      return null;
    const n$22 = this.view.renderCoordsHelper.fromRenderCoords(o2, this.view.spatialReference), a2 = t(s3.normal);
    if (l$1(s3))
      return new y$1({ type: i$2.OBJECT, id: `${s3.target.layerUid}/${s3.target.nodeIndex}/${s3.target.componentIndex}`, mapPoint: n$22, renderPoint: o2, normal: a2, ray: k(e3), graphic: null });
    if (n(s3))
      return new y$1({ type: i$2.TERRAIN, id: s3.target.lij.slice(), mapPoint: n$22, renderPoint: o2, normal: a2, ray: k(e3), graphic: null });
    const c2 = f$1(s3, this.view);
    if (null != c2) {
      const r3 = c2.layer, t2 = c2.sourceLayer;
      let s4;
      if (t2)
        if ("scene" === t2.type)
          s4 = z(c2, t2.objectIdField);
        else
          s4 = c2.uid;
      else
        s4 = c2.uid;
      return new y$1({ type: i$2.OBJECT, id: `${r3?.uid}/${s4}`, mapPoint: n$22, renderPoint: o2, normal: a2, ray: k(e3), graphic: c2 });
    }
    return null;
  }
  updateFromGroundIntersection(e3, r2, t$12) {
    const s3 = x, o2 = U, i3 = O$2, m2 = C$1;
    r$1(o2, e3), this.view.renderCoordsHelper.worldUpAtPosition(o2, i3), z$1(i3, i3);
    const u2 = this.view.basemapTerrain.visibleElevationBounds, d4 = (r2 >= 0 ? 1 : -1) * ((u2 ? Math.abs(u2.max - u2.min) : 100) + Math.abs(r2));
    g$2(m2, i3, d4), u$2(s3, o2, m2), h$2(s3, o2, L);
    const h2 = this._getRayIntersection(L, { include: this._terrainIntersectionOptionsLayerUids, maxDistance: d4 });
    if (null != h2) {
      const e4 = C$1;
      return g$2(e4, i3, r2), u$2(t$12, h2.renderPoint, e4), t(h2.normal);
    }
    return r$1(t$12, e3), null;
  }
};
e$2([y$2()], S.prototype, "view", void 0), e$2([y$2()], S.prototype, "intersector", void 0), S = e$2([c$1("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")], S);
const x = n$1(), U = n$1(), O$2 = n$1(), C$1 = n$1(), L = d$3();
const M = "esri.views.3d.analysis.LineOfSight.LineOfSightController", Z = s$2.getLogger(M);
let B = class extends o$1.EventedMixin(g$1) {
  constructor(e3) {
    super(e3), this.updateOnCameraChange = true, this._observerGroundOffsetRenderSpace = 0, this._effectiveObserverElevationMode = "absolute-height", this._observerFeatureId = null, this._updatingHandles = new h$3(), this._frameTask = F, this._computationHandles = new e$3(), this._externalObserverUpdate = true;
  }
  initialize() {
    const e3 = this.view.resourceController?.scheduler;
    this._frameTask = e3 ? e3.registerTask(I$1.LINE_OF_SIGHT_TOOL) : F, this._intersector = new S({ view: this.view }), this.addHandles([this._connectObserver(), this._connectComputations(), this._connectTargets()]);
  }
  destroy() {
    this._computationHandles.destroy(), this._computations.removeAll(), this._updatingHandles.destroy();
  }
  get updating() {
    return this._frameTask.updating || this._updatingHandles.updating;
  }
  get priority() {
    return this._frameTask.priority;
  }
  set priority(e3) {
    this._frameTask.priority = e3;
  }
  get _computations() {
    return this.analysisViewData.computations;
  }
  get _elevationAlignedObserverPositionRenderSpace() {
    return this.analysisViewData.observerEngineLocation;
  }
  set _elevationAlignedObserverPositionRenderSpace(e3) {
    this.analysisViewData.observerEngineLocation = e3;
  }
  get _screenPixelSize() {
    return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace);
  }
  _computeResult(e3) {
    const t2 = e3.computation, { inputPoints: n2, computationResult: o2 } = t2, { observerAdjusted: i3, targetAdjusted: r2 } = n2, { start: s3, end: a2 } = o2;
    r$1(s3, i3), r$1(a2, r2);
    this._canCompute(t2) ? this._computeIntersection(e3) : this._interpolateIntersection(e3), t2.notifyResultChanged(), this.emit("result-changed", { target: e3.computation.target, result: t2.result });
  }
  _updateAdjustedPointsFromFeatures(e3) {
    const n2 = this.view, { sceneIntersectionHelper: o2 } = n2, { inputPoints: i3 } = e3, { observerAdjusted: r2, observerFeatureId: s3, targetFeatureId: a2, targetAdjusted: l2 } = i3;
    if (null == s3 && null == a2)
      return;
    const u2 = x$1(r2, l2), c2 = this._intersector.intersector, d4 = h$2(i3.observer, i3.target, K);
    c2.options.store = t$1.ALL, o2.intersectToolIntersectorRay(d4, c2);
    let p2 = null, g2 = null, h2 = null, v2 = null;
    for (const m2 of c2.results.all) {
      const e4 = f$1(m2, this.view);
      if (null == e4 || null == m2.distanceInRenderSpace)
        continue;
      const o3 = t$3(e4);
      null != o3 && (null != s3 && o3 === s3 && (null == p2 && (p2 = this._getFeatureDistanceThreshold(m2, n2, u2)), m2.distanceInRenderSpace < p2 && (h2 = m2)), null != a2 && o3 === a2 && (null == g2 && (g2 = this._getFeatureDistanceThreshold(m2, n2, u2)), null == v2 && m2.distanceInRenderSpace < u2 && u2 - m2.distanceInRenderSpace < g2 && (v2 = m2)));
    }
    null != h2 && h2.getIntersectionPoint(r2) && (i3.observerSurfaceNormal = h2.getTransformedNormal(n$1())), null != v2 && v2.getIntersectionPoint(l2) && (i3.targetSurfaceNormal = v2.getTransformedNormal(n$1()));
  }
  _getFeatureDistanceThreshold(e3, t2, n2) {
    if (B$1(e3)) {
      const o2 = V$1(e3, t2);
      if (null != o2)
        return Math.min(o2 * W, n2);
    }
    return 1e-5 * n2;
  }
  _adjustStartEndPositions(e3) {
    const t2 = this._screenPixelSize, n2 = this.view, { inputPoints: o2 } = e3, { observer: i3, observerSurfaceNormal: r2, target: s3, targetSurfaceNormal: a2, observerAdjusted: l2, targetAdjusted: u2 } = o2, c2 = J;
    r$1(l2, i3), r$1(u2, s3), this._updateAdjustedPointsFromFeatures(e3), null != r2 ? r$1(c2, r2) : e$4(c2, u2, l2);
    const d4 = t2;
    z$1(c2, c2), g$2(c2, c2, Math.min(d4, 1)), u$2(l2, l2, c2), null != a2 ? r$1(c2, a2) : e$4(c2, l2, u2);
    const p2 = n2.state.camera.computeScreenPixelSizeAt(u2);
    z$1(c2, c2), g$2(c2, c2, Math.min(p2, 1)), u$2(u2, u2, c2);
  }
  _computeIntersection({ computation: e3, interpolationInfo: t2 }) {
    const { view: n2 } = this, { sceneIntersectionHelper: o2, renderCoordsHelper: i3 } = n2;
    if (null == o2)
      return;
    const r2 = this._intersector.intersector, { computationResult: s3, inputPoints: a2 } = e3, { observer: l2, target: u2 } = a2, { start: c2, end: d4 } = s3, p2 = h$2(c2, d4, K);
    r2.options.store = t$1.MIN, o2.intersectToolIntersectorRay(p2, r2);
    const g2 = r2.results.min, m2 = s3.intersection, v2 = J;
    let f2 = true;
    if (null != g2 && g2.getIntersectionPoint(m2)) {
      r$1(t2.originalIntersection, m2), r$1(t2.originalObserver, c2), r$1(t2.originalTarget, d4), i3.fromRenderCoords(m2, v2, n2.spatialReference);
      const e4 = 1 - U$1(d4, u2) / U$1(c2, u2);
      f2 = U$1(l2, m2) >= e4 * U$1(l2, u2);
    }
    const _2 = new x$2(v2, n2.spatialReference);
    {
      const { result: t3, target: o3 } = e3;
      null != t3 ? (t3.target = o3, t3.intersectedGraphic = f2 ? null : f$1(g2, n2), t3.intersectedLocation = f2 ? null : _2, t3.visible = f2) : e3.result = new s$1({ target: o3, elevationAlignedTargetLocation: e3.elevationAlignedTargetLocation, intersectedGraphic: f2 ? null : f$1(g2, n2), intersectedLocation: f2 ? null : _2, visible: f2 });
    }
    s3.isValid = a2.isValid = true, s3.isTargetVisible = f2;
  }
  _interpolateIntersection({ computation: e3, interpolationInfo: t2 }) {
    const { computationResult: n2, inputPoints: o2 } = e3, { start: i3, end: r2, intersection: s3 } = n2, { originalIntersection: a2, originalObserver: l2, originalTarget: u2 } = t2;
    if (r$1(s3, a2), o2.isValid) {
      const e4 = J, t3 = U$1(l2, a2) / U$1(l2, u2);
      J$1(e4, i3, l2), g$2(e4, e4, 1 - t3), u$2(s3, s3, e4), J$1(e4, r2, u2), g$2(e4, e4, t3), u$2(s3, s3, e4), n2.isValid = true;
    } else
      e3.result = null, n2.isValid = false, n2.isTargetVisible = false;
  }
  _canCompute(e3) {
    const t2 = this.analysisViewData.elevationAlignedObserver, n2 = this.view.frustum;
    if (null == t2 || null == e3.elevationAlignedTargetLocation || null == n2)
      return false;
    const { observerAdjusted: o2, targetAdjusted: i3 } = e3.inputPoints, r2 = n2.intersectsPoint(o2), s3 = n2.intersectsPoint(i3);
    return r2 && s3;
  }
  _onObserverPositionChange(e3, n2, o2, i3, r2) {
    if (this._externalObserverUpdate = r2, null == e3)
      return this.analysisViewData.elevationAlignedObserver = null, void (this._observerFeatureId = null);
    if (null == n2)
      return t$4(this.analysis, e3.spatialReference, Z), void (this.analysisViewData.elevationAlignedObserver = null);
    const s3 = this._getEffectiveElevationInfo(n2, o2), { absoluteZ: a2, elevation: l2 } = g$3(n2.x, n2.y, n2.z, this.view.spatialReference, this.view, s3), u2 = n2.clone();
    u2.z = a2, this._effectiveObserverElevationMode = s3.mode, this.analysisViewData.elevationAlignedObserver = u2;
    const c2 = n$1();
    this.view.renderCoordsHelper.toRenderCoords(u2, c2), this._elevationAlignedObserverPositionRenderSpace = c2, this._observerGroundOffsetRenderSpace = a2 - l2, this._observerFeatureId = t$3(i3), this.priority = I$1.LINE_OF_SIGHT_TOOL_INTERACTIVE;
  }
  _onObserverRenderSpacePositionChangeForComputation(e3, t2, n2, o2, i3) {
    const { inputPoints: r2 } = e3;
    switch (r$1(r2.observer, t2), r2.observerFeatureId = i3, r2.observerSurfaceNormal = null, o2) {
      case "on-the-ground":
      case "relative-to-ground": {
        const e4 = this._intersector.updateFromGroundIntersection(r2.observer, n2, r2.observer);
        null == r2.observerFeatureId && (r2.observerSurfaceNormal = e4);
      }
    }
    this._adjustStartEndPositions(e3), e3.notifyInputPointsChanged(), this.priority = I$1.LINE_OF_SIGHT_TOOL_INTERACTIVE;
  }
  _onTargetPositionChange(e3, n2, o2, i3, r2, s3 = true) {
    const a2 = e3.inputPoints;
    if (s3 && (a2.isValid = false), null == o2)
      return null != n2 && t$4(this.analysis, n2.spatialReference, Z), e3.elevationAlignedTargetLocation = null, void e3.notifyInputPointsChanged();
    const l2 = this._getEffectiveElevationInfo(o2, i3), { absoluteZ: u2, elevation: c2 } = g$3(o2.x, o2.y, o2.z, this.view.spatialReference, this.view, l2), d4 = o2.clone();
    switch (d4.z = u2, e3.elevationAlignedTargetLocation = d4, this.view.renderCoordsHelper.toRenderCoords(e3.elevationAlignedTargetLocation, a2.target), a2.targetFeatureId = t$3(r2), a2.targetSurfaceNormal = null, l2.mode) {
      case "on-the-ground":
      case "relative-to-ground": {
        const e4 = this._intersector.updateFromGroundIntersection(a2.target, u2 - c2, a2.target);
        null == a2.targetFeatureId && (a2.targetSurfaceNormal = e4);
      }
    }
    this._adjustStartEndPositions(e3), e3.notifyInputPointsChanged(), this.priority = I$1.LINE_OF_SIGHT_TOOL_INTERACTIVE;
  }
  _connectComputationToTarget(e3) {
    return t$5([this._updatingHandles.add(() => ({ computation: e3, targetPosition: e3.target.position, targetElevationInfo: e3.target.elevationInfo, targetFeatureInfo: e3.target.feature, projectedTargetPosition: U$2(e3.target.position, this.view.spatialReference) }), ({ computation: e4, targetPosition: t2, targetElevationInfo: n2, targetFeatureInfo: o2, projectedTargetPosition: i3 }) => {
      null == i3.pending ? this._onTargetPositionChange(e4, t2, i3.geometry, n2, o2) : this._updatingHandles.addPromise(i3.pending);
    }, P$1)]);
  }
  _connectComputationToObserver(e3) {
    return this._updatingHandles.add(() => ({ computation: e3, observer: this.analysisViewData.elevationAlignedObserver }), ({ computation: e4 }) => {
      this._externalObserverUpdate && (e4.inputPoints.isValid = false, e4.notifyInputPointsChanged());
    }, P$1);
  }
  _connectComputationToRenderSpaceObserver(e3) {
    return this._updatingHandles.add(() => ({ computation: e3, observer: this._elevationAlignedObserverPositionRenderSpace, observerGroundOffset: this._observerGroundOffsetRenderSpace, observerElevationMode: this._effectiveObserverElevationMode, observerFeatureId: this._observerFeatureId }), ({ computation: e4, observer: t2, observerGroundOffset: n2, observerElevationMode: o2, observerFeatureId: i3 }) => {
      this._onObserverRenderSpacePositionChangeForComputation(e4, t2, n2, o2, i3);
    }, P$1);
  }
  _connectComputationToCamera(e3) {
    return this._updatingHandles.add(() => ({ camera: this.view.state.camera, isDirty: this._isCameraDirty }), ({ isDirty: t2 }) => {
      !this.updateOnCameraChange || e3.inputPoints.isValid && !t2 || e3.notifyInputPointsChanged();
    });
  }
  _connectComputationToSlicePlane(e3) {
    return this._updatingHandles.add(() => this.view.slicePlane, () => {
      e3.inputPoints.isValid = false, e3.notifyInputPointsChanged();
    });
  }
  _connectComputationToElevation(e3) {
    const t2 = (n2, o2) => {
      const i3 = this.analysis.observer, r2 = e3.target;
      let s3 = null, a2 = null, l2 = null, u2 = null, c2 = null, d4 = null;
      if (null != i3?.position) {
        const e4 = U$2(i3.position, this.view.spatialReference);
        if (null != e4.pending)
          return this._updatingHandles.addPromise(e4.pending), void e4.pending.finally(() => t2(n2, o2));
        s3 = e4.geometry, a2 = i3.elevationInfo, l2 = i3.feature;
      }
      if (null != r2.position) {
        const e4 = U$2(r2.position, this.view.spatialReference);
        if (null != e4.pending)
          return this._updatingHandles.addPromise(e4.pending), void e4.pending.finally(() => t2(n2, o2));
        u2 = e4.geometry, c2 = r2.elevationInfo, d4 = r2.feature;
      }
      null == s3 && null == u2 || (s$3(n2, o2, Q, this.view.spatialReference), null != s3 && F$1(Q, s3) && this._onObserverPositionChange(null != i3 ? i3.position : null, s3, a2, l2, false), null != u2 && F$1(Q, u2) && this._onTargetPositionChange(e3, r2.position, u2, c2, d4, false), null != s3 && null != u2 && j$1(Q, s3, u2) && e3.notifyInputPointsChanged());
    };
    return this.view.elevationProvider.on("elevation-change", (e4) => t2(e4.extent, e4.spatialReference));
  }
  _connectComputationToTask(e3) {
    let t2 = null;
    const n2 = { computation: e3, interpolationInfo: { originalIntersection: n$1(), originalObserver: n$1(), originalTarget: n$1() } };
    return t$5([this._updatingHandles.add(() => e3.inputPoints, () => {
      t2 = e$5(t2), t2 = d$5(async (e4) => {
        await d$6(this._frameTask.schedule(() => this._computeResult(n2), e4));
      });
    }, { initial: true, equals: () => false }), e$6(() => t2 = e$5(t2))]);
  }
  _connectComputation(e3) {
    const t2 = this._computationHandles;
    t2.has(e3) || t2.add([this._connectComputationToTarget(e3), this._connectComputationToObserver(e3), this._connectComputationToRenderSpaceObserver(e3), this._connectComputationToCamera(e3), this._connectComputationToSlicePlane(e3), this._connectComputationToElevation(e3), this._connectComputationToTask(e3)], e3);
  }
  _disconnectComputation(e3) {
    this._computationHandles.remove(e3);
  }
  _onComputationCollectionChange({ added: e3, removed: t2 }) {
    for (const n2 of t2)
      this._disconnectComputation(n2);
    for (const n2 of e3)
      this._connectComputation(n2);
  }
  _onTargetCollectionChange({ added: e3, removed: t2 }) {
    for (const n2 of t2)
      this._removeTarget(n2);
    for (const n2 of e3)
      this._addTarget(n2);
  }
  _onCursorTargetChange(e3, t2) {
    null != t2 && this._removeTarget(t2), null != e3 && this._addTarget(e3);
  }
  _addTarget(e3) {
    this._computations.some((t2) => t2.target === e3) || this._computations.add(new i$1({ target: e3 }));
  }
  _removeTarget(e3) {
    const t2 = this._computations.findIndex((t3) => t3.target === e3);
    this._computations.removeAt(t2);
  }
  _connectObserver() {
    return t$5([this._updatingHandles.add(() => ({ observerPosition: null != this.analysis.observer ? this.analysis.observer.position : null, projectedObserverPosition: U$2(null != this.analysis.observer ? this.analysis.observer.position : null, this.view.spatialReference), observerElevationInfo: null != this.analysis.observer ? this.analysis.observer.elevationInfo : null, observerFeatureInfo: null != this.analysis.observer ? this.analysis.observer.feature : null }), ({ observerPosition: e3, projectedObserverPosition: t2, observerElevationInfo: n2, observerFeatureInfo: o2 }) => {
      null == t2.pending ? this._onObserverPositionChange(e3, t2.geometry, n2, o2, true) : this._updatingHandles.addPromise(t2.pending);
    }, P$1)]);
  }
  _connectComputations() {
    return this._updatingHandles.addOnCollectionChange(() => this._computations, (e3) => this._onComputationCollectionChange(e3), { initial: true, final: true });
  }
  _connectTargets() {
    return t$5([this._updatingHandles.addOnCollectionChange(() => this.analysis.targets, (e3) => this._onTargetCollectionChange(e3), { initial: true, final: true }), this._updatingHandles.add(() => this.analysisViewData.cursorTarget, (e3, t2) => {
      this._onCursorTargetChange(e3, t2);
    })]);
  }
  get _isCameraDirty() {
    const e3 = this.analysisViewData.elevationAlignedObserver, { view: t2 } = this, { renderCoordsHelper: n2 } = t2;
    if (null == e3 || null == n2)
      return false;
    const o2 = J;
    n2.toRenderCoords(e3, o2);
    const i3 = t2.state.camera.computeScreenPixelSizeAt(o2);
    return Math.abs((i3 - this._screenPixelSize) / this._screenPixelSize) > q;
  }
  _getEffectiveElevationInfo(e3, t2) {
    return e3.hasZ ? t2 ?? { mode: "absolute-height", offset: 0 } : { mode: "on-the-ground", offset: 0 };
  }
};
e$2([y$2({ constructOnly: true })], B.prototype, "analysis", void 0), e$2([y$2({ constructOnly: true })], B.prototype, "analysisViewData", void 0), e$2([y$2({ constructOnly: true })], B.prototype, "view", void 0), e$2([y$2()], B.prototype, "updating", null), e$2([y$2()], B.prototype, "priority", null), e$2([y$2()], B.prototype, "updateOnCameraChange", void 0), e$2([y$2()], B.prototype, "_computations", null), e$2([y$2()], B.prototype, "_elevationAlignedObserverPositionRenderSpace", null), e$2([y$2()], B.prototype, "_observerGroundOffsetRenderSpace", void 0), e$2([y$2()], B.prototype, "_effectiveObserverElevationMode", void 0), e$2([y$2()], B.prototype, "_observerFeatureId", void 0), e$2([y$2()], B.prototype, "_screenPixelSize", null), e$2([y$2({ readOnly: true })], B.prototype, "_updatingHandles", void 0), e$2([y$2()], B.prototype, "_frameTask", void 0), e$2([y$2()], B.prototype, "_isCameraDirty", null), B = e$2([c$1(M)], B);
const q = 0.1, J = n$1(), K = d$3(), Q = D$1(), W = 0.05;
let e$1 = class e {
  constructor() {
    this.glowWidth = 8, this.innerWidth = 0.75;
  }
};
const r = new e$1();
function s2(o2) {
  const t2 = o2.accentColor;
  return { glowColor: t2, innerColor: G$1(t2), globalAlpha: 0.75 * t2.a };
}
class i2 {
  constructor() {
    this.size = 0.5;
  }
}
const c = new i2();
function l(o2) {
  return F$2(o2.accentColor, 0.75);
}
class h {
  constructor() {
    this.size = 0.5, this.visibleColor = new u$3([3, 252, 111, 0.75]), this.occludedColor = new u$3([252, 3, 69, 0.75]), this.undefinedColor = new u$3([127, 127, 127, 0.75]);
  }
}
const u$1 = new h();
let d$2 = class d {
  constructor() {
    this.innerWidth = 2, this.outerWidth = 8, this.visibleInnerColor = new u$3([3, 252, 111, 1]), this.visibleOuterColor = new u$3([3, 252, 111, 0.15]), this.occludedInnerColor = new u$3([252, 3, 69, 1]), this.occludedOuterColor = new u$3([252, 3, 69, 0.1]), this.undefinedInnerColor = new u$3([255, 255, 255, 1]), this.undefinedOuterColor = new u$3([127, 127, 127, 0.2]);
  }
};
const w = new d$2();
class f extends $ {
  constructor(e3, i3) {
    const s3 = w$1(l(e3.effectiveTheme)), l$12 = nt(s3, c.size, 32, 32), f2 = new e$7(l$12);
    super({ view: e3, renderObjects: [f2], metadata: i3, elevationInfo: { mode: "absolute-height", offset: 0 } }), t$6(this), this.themeHandle = d$7(() => ({ color: l(e3.effectiveTheme) }), (e4) => {
      s3.setParameters(e4);
    });
  }
  destroy() {
    this.themeHandle.remove(), super.destroy();
  }
}
let d$1 = class d2 extends $ {
  constructor(e3, t2) {
    const { size: o2, visibleColor: r2, occludedColor: s3, undefinedColor: n2 } = u$1;
    super({ view: e3, renderObjects: [u(o2, r2, u$4.Custom1), u(o2, s3, u$4.Custom2), u(o2, n2, u$4.Custom3)], metadata: t2, elevationInfo: { mode: "absolute-height", offset: 0 } }), t$6(this);
  }
};
function u(t2, o2, r2) {
  return new e$7(nt(w$1(u$3.toUnitRGBA(o2)), t2, 32, 32), r2);
}
var D;
!function(e3) {
  e3.Ready = "ready", e3.Creating = "creating", e3.Created = "created";
}(D || (D = {}));
let O$1 = class O extends a {
  constructor(e3) {
    super(e3), this.removeIncompleteOnCancel = false, this.analysisViewData = null, this._latestPointerMovePointerType = null, this._laserlineVisualElement = null, this._grabbedManipulator = null, this._analysisHandles = new e$3(), this._updatingHandles = new h$3(), this._manipulatorHandles = new e$3(), this._targetTrackerManipulator = null;
  }
  initialize() {
    this._intersector = new S({ view: this.view }), this.addHandles(d$7(() => this.state, (e3) => {
      e3 === D.Created && this.finishToolCreation();
    }, A)), this._observerManipulator = this._createObserverManipulator(), this._createLaserLine(), this.addHandles([this._updatingHandles.add(() => this.analysisViewData?.elevationAlignedObserver, (e3) => this._onObserverLocationChange(e3), P$1), this._updatingHandles.add(() => s2(this.view.effectiveTheme), ({ glowColor: e3, innerColor: t2, globalAlpha: i3 }) => this._updateLaserLineStyle(e3, t2, i3), P$1), this._updatingHandles.add(() => this._laserLineRendererDependencies(), (e3) => this._updateLaserLineRenderer(e3)), this._connectComputations(), this._updatingHandles.addWhen(() => !this._shouldRenderTracker, () => this._clearCursorTracker(), P$1)]);
  }
  destroy() {
    this._updatingHandles = u$5(this._updatingHandles), this._manipulatorHandles = u$5(this._manipulatorHandles), this._analysisHandles = u$5(this._analysisHandles), this._observerManipulator = null, this._clearCursorTracker(), this._removeLaserLine(), this._intersector = null, this._set("analysis", null);
  }
  get state() {
    return this.active ? this.hasGrabbedManipulators ? D.Created : D.Creating : null != this.analysis.observer?.position ? D.Created : D.Ready;
  }
  get cursor() {
    return this.active && this._showTracker ? "crosshair" : null;
  }
  get updating() {
    return null != this.analysisViewData && this.analysisViewData.updating || this._updatingHandles.updating;
  }
  get _showTracker() {
    return this.active && "mouse" === this._latestPointerMovePointerType;
  }
  get _shouldRenderTracker() {
    return this._showTracker && null != this.analysis.observer?.position && !this.hasGrabbedManipulators;
  }
  continue() {
    this.view.activeTool = this;
  }
  stop() {
    this.view.activeTool = null;
  }
  onEditableChange() {
    this.analysisViewData.editable = this.internallyEditable;
  }
  onInputEvent(e3) {
    switch (e3.type) {
      case "immediate-double-click":
        this._doubleClickHandler(e3);
        break;
      case "key-down":
        this._keyDownHandler(e3);
        break;
      case "pointer-move":
        this._pointerMoveHandler(e3);
    }
  }
  onInputEventAfter(e3) {
    if ("immediate-click" === e3.type)
      this._clickHandler(e3);
  }
  onShow() {
  }
  onHide() {
  }
  onDeactivate() {
    this._clearCursorTracker();
  }
  _connectComputations() {
    return this._updatingHandles.addOnCollectionChange(() => this.analysisViewData.computations, (e3) => this._onComputationsCollectionChange(e3), { initial: true, final: true });
  }
  _onComputationsCollectionChange({ added: e3, removed: t2 }) {
    for (const i3 of t2)
      this._disconnectComputation(i3);
    for (const i3 of e3)
      this._connectComputation(i3);
  }
  _connectComputation(e3) {
    if (this.destroyed)
      return void s$2.getLogger(this).warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");
    const t2 = this._analysisHandles;
    if (t2.has(e3))
      return;
    const i3 = this._createTargetManipulator(e3.target);
    null == this._targetTrackerManipulator && i3.metadata.target === this.analysisViewData.cursorTarget && (this._targetTrackerManipulator = i3, this._targetTrackerManipulator.available = false, this._targetTrackerManipulator.interactive = false, this._updateLaserLineRenderer()), t2.add([this._updatingHandles.add(() => this._getLineOfSightManipulatorStateDependencies(e3), () => this._updateManipulatorState(i3, e3), P$1), this._updatingHandles.add(() => e3.elevationAlignedTargetLocation, (e4) => this._onTargetLocationChange(e4, i3), P$1)], e3);
  }
  _disconnectComputation(e3) {
    if (this.destroyed)
      return void s$2.getLogger(this).warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring.");
    this._analysisHandles.remove(e3);
    const t2 = this._getTargetManipulator(e3.target);
    null != t2 && (this.manipulators.remove(t2), this._manipulatorHandles.remove(t2), null != this._targetTrackerManipulator && this._targetTrackerManipulator === t2 && (this._targetTrackerManipulator = null));
  }
  _clearCursorTracker() {
    this.analysisViewData.cursorTarget = u$5(this.analysisViewData.cursorTarget);
  }
  _createTargetManipulator(e3) {
    const t2 = { target: e3, type: "target" }, i3 = new d$1(this.view, t2);
    return this._manipulatorHandles.add([this._createTargetManipulatorDragPipeline(i3), i3.events.on("grab-changed", (e4) => this._manipulatorGrabChanged(i3, e4)), i3.events.on("immediate-click", (e4) => this._manipulatorClick(i3, e4))], i3), this.manipulators.add(i3), null != e3.position ? i3.elevationAlignedLocation = e3.position : i3.available = false, i3;
  }
  _getTargetManipulator(e3) {
    let t2 = null;
    return this.manipulators.forEach((i3) => {
      const a2 = i3.manipulator;
      null == t2 && "target" === a2.metadata.type && a2.metadata.target === e3 && (t2 = a2);
    }), t2;
  }
  _createObserverManipulator() {
    const e3 = new f(this.view, { type: "observer", intersection: null });
    return this._manipulatorHandles.add([this._createObserverManipulatorDragPipeline(e3), e3.events.on("grab-changed", (t2) => this._manipulatorGrabChanged(e3, t2)), e3.events.on("immediate-click", (t2) => this._manipulatorClick(e3, t2))], e3), this.manipulators.add(e3), e3;
  }
  _screenToIntersection() {
    return (e3) => {
      const t2 = this._intersector.getScreenPointIntersection(e3.screenEnd);
      return null == t2 ? null : { ...e3, intersection: t2 };
    };
  }
  _createTargetManipulatorDragPipeline(e3) {
    return d$8(e3, (t2, i3, a2) => {
      i3.next(this._screenToIntersection()).next(this._updateTargetDragStep(e3)).next(() => this._updateLaserLineRenderer()), a2.next(this._cancelTargetDragStep(e3.metadata.target)).next(() => this._updateLaserLineRenderer());
    });
  }
  _createObserverManipulatorDragPipeline(e3) {
    return d$8(e3, (e4, t2, i3) => {
      t2.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(() => this._updateLaserLineRenderer()), i3.next(this._cancelObserverDragStep()).next(() => this._updateLaserLineRenderer());
    });
  }
  _updateObserverDragStep() {
    return (e3) => (null != e3.intersection.mapPoint ? (null == this.analysis.observer && (this.analysis.observer = new u$6()), this._updateFromIntersection(this.analysis.observer, e3.intersection)) : this.analysis.observer = null, e3);
  }
  _cancelObserverDragStep() {
    const e3 = null != this.analysis.observer?.position ? this.analysis.observer.clone() : null;
    return (t2) => (this.analysis.observer = e3, t2);
  }
  _updateTargetDragStep(e3) {
    return (t2) => {
      this._updateFromIntersection(e3.metadata.target, t2.intersection);
      const i3 = t2.intersection.mapPoint;
      return null != i3 && (e3.elevationAlignedLocation = i3), t2;
    };
  }
  _cancelTargetDragStep(e3) {
    const t2 = e3.position?.clone();
    return (i3) => (e3.position = t2, i3);
  }
  _manipulatorGrabChanged(e3, t2) {
    switch (t2.action) {
      case "start":
        this._grabbedManipulator = e3;
        break;
      case "end":
        this._grabbedManipulator === e3 && (this._grabbedManipulator = null);
    }
  }
  _updateManipulatorState(e3, t2) {
    const { isValid: i3, isTargetVisible: a2 } = t2.computationResult;
    e3.state = i3 ? a2 ? u$4.Custom1 : u$4.Custom2 : u$4.Custom3;
  }
  _getLineOfSightManipulatorStateDependencies(e3) {
    const { isValid: t2, isTargetVisible: i3 } = e3.computationResult;
    return { isValid: t2, isTargetVisible: i3 };
  }
  _laserLineRendererDependencies() {
    return { laserlineVisualElement: this._laserlineVisualElement, grabbedManipulator: this._grabbedManipulator, shouldRenderTracker: this._shouldRenderTracker, observerPosition: null != this.analysis.observer ? this.analysis.observer.position : null, visible: this.visible };
  }
  _updateLaserLineRenderer(e3 = this._laserLineRendererDependencies()) {
    const { laserlineVisualElement: t2, grabbedManipulator: i3, shouldRenderTracker: a2, observerPosition: n2, visible: r2 } = e3;
    if (null == t2)
      return;
    const s3 = null != i3 ? i3 : a2 && null != n2 ? this._targetTrackerManipulator : null;
    null != s3 && r2 ? (t2.visible = true, t2.heightManifoldTarget = s3.renderLocation, s3 !== this._observerManipulator ? t2.lineVerticalPlaneSegment = b(this._observerManipulator.renderLocation, s3.renderLocation, I) : t2.lineVerticalPlaneSegment = null) : (t2.visible = false, t2.heightManifoldTarget = null, t2.lineVerticalPlaneSegment = null);
  }
  _createLaserLine() {
    this._removeLaserLine();
    const { glowWidth: e3, innerWidth: t2 } = r;
    this._laserlineVisualElement = new c$2({ view: this.view, attached: true, visible: this.visible, style: { glowWidth: e3, innerWidth: t2 }, isDecoration: true });
  }
  _removeLaserLine() {
    null != this._laserlineVisualElement && (this._laserlineVisualElement.destroy(), this._laserlineVisualElement = null);
  }
  _updateLaserLineStyle(e3, i3, a2) {
    const n2 = this._laserlineVisualElement;
    if (null == n2)
      return;
    const r2 = n2.style;
    n2.style = { ...r2, glowColor: u$3.toUnitRGB(e3), innerColor: u$3.toUnitRGB(i3), globalAlpha: a2 };
  }
  _onObserverLocationChange(e3) {
    null != e3 ? (this._observerManipulator.metadata.intersection = null, this._observerManipulator.available = true, this._observerManipulator.elevationAlignedLocation = e3) : this._observerManipulator.available = false;
  }
  _onTargetLocationChange(e3, t2) {
    null != e3 ? (t2.elevationAlignedLocation = e3, t2 !== this._targetTrackerManipulator && (t2.available = true)) : t2.available = false;
  }
  _addPointFromClickEvent(e3) {
    const t2 = this._intersector.getScreenPointIntersection(e3);
    if (null != t2?.mapPoint)
      if (null != this.analysis.observer?.position) {
        this._clearCursorTracker();
        const e4 = new f$2();
        this._updateFromIntersection(e4, t2), this.analysis.targets.add(e4);
      } else {
        const e4 = new u$6();
        this._updateFromIntersection(e4, t2), this.analysis.observer = e4;
      }
  }
  _clickHandler(e3) {
    this.active && e3.button !== t$7.Right && (this._addPointFromClickEvent(n$2(e3)), e3.stopPropagation());
  }
  _doubleClickHandler(e3) {
    this.active && e3.button !== t$7.Right && (this.stop(), e3.stopPropagation());
  }
  _keyDownHandler(e3) {
    this.active && "Escape" === e3.key && (this.stop(), e3.stopPropagation());
  }
  _pointerMoveHandler(e3) {
    if (this.hasGrabbedManipulators)
      return;
    if (this._latestPointerMovePointerType = e3.pointerType, this._updateLaserLineRenderer(), !this._showTracker || null == this.analysis.observer?.position)
      return;
    const t2 = n$2(e3), i3 = this._intersector.getScreenPointIntersection(t2);
    null != i3?.mapPoint && (null == this.analysisViewData.cursorTarget && (this.analysisViewData.cursorTarget = new f$2()), this._updateFromIntersection(this.analysisViewData.cursorTarget, i3), this._updateLaserLineRenderer());
  }
  _updateFromIntersection(e3, t2) {
    if (null == t2.mapPoint)
      return e3.position = null, e3.elevationInfo = null, void (e3.feature = null);
    switch (t2.type) {
      case i$2.OBJECT:
        if (null != t2.graphic) {
          const i4 = t2.graphic, a2 = s$4(i4);
          "on-the-ground" === a2.mode && (a2.mode = "relative-to-ground", a2.offset = 0), e3.elevationInfo = new h$4(a2), e3.feature = i4;
        } else
          e3.elevationInfo = null, e3.feature = null;
        break;
      case i$2.TERRAIN:
      case i$2.I3S:
        e3.elevationInfo = new h$4({ mode: "on-the-ground" }), e3.feature = null;
        break;
      default:
        e3.elevationInfo = null, e3.feature = null;
    }
    const i3 = t2.mapPoint.clone();
    i3.z = c$3(this.view, i3, { mode: "absolute-height", offset: 0 }, e3.elevationInfo), e3.position = i3;
  }
  _manipulatorClick(e3, t2) {
    if ("observer" === e3.metadata.type || e3.grabbing || e3.dragging || t2.button !== t$7.Right || this.analysis.targets.length <= 1)
      return;
    const { target: i3 } = e3.metadata;
    this.analysis.targets.remove(i3), t2.stopPropagation();
  }
  get testInfo() {
    return { laserLineVisualElement: this._laserlineVisualElement, getTargetManipulator: (e3) => this._getTargetManipulator(e3) };
  }
};
e$2([y$2({ constructOnly: true })], O$1.prototype, "view", void 0), e$2([y$2({ constructOnly: true })], O$1.prototype, "analysis", void 0), e$2([y$2({ readOnly: true })], O$1.prototype, "state", null), e$2([y$2({ readOnly: true })], O$1.prototype, "cursor", null), e$2([y$2()], O$1.prototype, "removeIncompleteOnCancel", void 0), e$2([y$2({ readOnly: true })], O$1.prototype, "updating", null), e$2([y$2({ constructOnly: true })], O$1.prototype, "analysisViewData", void 0), e$2([y$2({ readOnly: true })], O$1.prototype, "_showTracker", null), e$2([y$2()], O$1.prototype, "_latestPointerMovePointerType", void 0), e$2([y$2()], O$1.prototype, "_shouldRenderTracker", null), e$2([y$2()], O$1.prototype, "_laserlineVisualElement", void 0), e$2([y$2()], O$1.prototype, "_grabbedManipulator", void 0), O$1 = e$2([c$1("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")], O$1);
const I = v();
class e2 {
  constructor(e3, i3, t2, s3) {
    this.visibleLineVisualElement = e3, this.occludedLineVisualElement = i3, this.undefinedLineVisualElement = t2, this.targetVisualElement = s3;
  }
  destroy() {
    this.visibleLineVisualElement.destroy(), this.occludedLineVisualElement.destroy(), this.undefinedLineVisualElement.destroy(), this.targetVisualElement.destroy();
  }
}
let O2 = class extends g$1 {
  constructor(e3) {
    super(e3), this._lineOfSightVisualElements = new Array(), this._computationHandles = new e$3(), this._updatingHandles = new h$3();
  }
  initialize() {
    this.addHandles(this._connectComputations()), this._createObserverVisualization();
  }
  destroy() {
    this._updatingHandles = u$5(this._updatingHandles), this._computationHandles = u$5(this._computationHandles), this._observerVisualElement = u$5(this._observerVisualElement);
  }
  get visible() {
    return this.analysisViewData.visible;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get interactiveAndEditable() {
    return this.analysisViewData.interactive && this.analysisViewData.editable;
  }
  get test() {
    return { disablePartialOcclusion: () => {
      for (const e3 of this._lineOfSightVisualElements)
        e3.visibleLineVisualElement.renderOccluded = d$9.Occlude, e3.occludedLineVisualElement.renderOccluded = d$9.Occlude, e3.undefinedLineVisualElement.renderOccluded = d$9.Occlude;
    }, visualizations: this._lineOfSightVisualElements };
  }
  _createLineOfSightVisualization() {
    const e$12 = w, t2 = this.view, o2 = this.isDecoration, n2 = { view: t2, attached: true, width: e$12.outerWidth, innerWidth: e$12.innerWidth, isDecoration: o2 }, s3 = u$3.toUnitRGBA(e$12.visibleOuterColor), r2 = u$3.toUnitRGBA(e$12.visibleInnerColor), l2 = u$3.toUnitRGBA(e$12.occludedOuterColor), a2 = u$3.toUnitRGBA(e$12.occludedInnerColor), c2 = u$3.toUnitRGBA(e$12.undefinedOuterColor), d4 = u$3.toUnitRGBA(e$12.undefinedInnerColor), u2 = new u$7({ ...n2, color: s3, innerColor: r2 }), m2 = new u$7({ ...n2, color: l2, innerColor: a2 }), p2 = new u$7({ ...n2, color: c2, innerColor: d4 }), b2 = new x$3({ view: t2, attached: true, ..._, size: 8, isDecoration: o2 }), O3 = new e2(u2, m2, p2, b2);
    return this._lineOfSightVisualElements.push(O3), O3;
  }
  _destroyLineOfSightVisualization(e3) {
    e3.destroy(), this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(e3), 1);
  }
  _updateLineOfSightVisualization(e3, t2, o2) {
    const n2 = w, { computationResult: s3, inputPoints: r2 } = e3, { start: l2, end: a2, intersection: c2, isValid: m2, isTargetVisible: p2 } = s3, { observer: v2 } = r2, f2 = E;
    f2[12] = v2[0], f2[13] = v2[1], f2[14] = v2[2];
    const g2 = e$4(y, l2, v2), b2 = e$4(V, a2, v2), O3 = e$4(C, c2, v2), { visibleLineVisualElement: _2, occludedLineVisualElement: A2, undefinedLineVisualElement: w$12, targetVisualElement: S2 } = t2, j2 = null == this.analysisViewData.elevationAlignedObserver || null == e3.elevationAlignedTargetLocation, L2 = this.visible && !j2;
    _2.visible = L2, A2.visible = L2, w$12.visible = L2, S2.visible = L2, S2.attached = !o2.interactiveAndEditable, L2 && (_2.geometry = null, A2.geometry = null, w$12.geometry = null, S2.geometry = e3.elevationAlignedTargetLocation, m2 ? p2 ? (_2.geometry = [[e$8(g2), e$8(b2)]], _2.transform = f2, _2.color = u$3.toUnitRGBA(n2.visibleOuterColor), S2.color = u$3.toUnitRGBA(n2.visibleInnerColor)) : (_2.geometry = [[e$8(g2), e$8(O3)]], _2.transform = f2, _2.color = u$3.toUnitRGBA(n2.occludedOuterColor), A2.geometry = [[e$8(O3), e$8(b2)]], A2.transform = f2, S2.color = u$3.toUnitRGBA(n2.occludedInnerColor)) : (w$12.geometry = [[e$8(g2), e$8(b2)]], w$12.transform = f2, S2.color = u$3.toUnitRGBA(n2.undefinedInnerColor)));
  }
  _getLineOfSightVisualizationDependencies(e3) {
    const { computationResult: i3 } = e3, { occludedOuterColor: t2, visibleOuterColor: o2 } = w;
    return { computationResult: i3, occludedOuterColor: t2, visibleOuterColor: o2, visible: this.visible, interactiveAndEditable: this.interactiveAndEditable };
  }
  _connectComputation(e3) {
    const i3 = this._computationHandles;
    if (i3.has(e3))
      return;
    const t2 = this._createLineOfSightVisualization();
    i3.add([this._updatingHandles.add(() => this._getLineOfSightVisualizationDependencies(e3), (i4) => this._updateLineOfSightVisualization(e3, t2, i4), { initial: true, equals: () => false }), e$6(() => this._destroyLineOfSightVisualization(t2))], e3);
  }
  _disconnectComputation(e3) {
    this._computationHandles.remove(e3);
  }
  _connectComputations() {
    return this._updatingHandles.addOnCollectionChange(() => this.analysisViewData.computations, (e3) => this._onComputationsCollectionChange(e3), { initial: true, final: true });
  }
  _onComputationsCollectionChange({ added: e3, removed: i3 }) {
    for (const t2 of i3)
      this._disconnectComputation(t2);
    for (const t2 of e3)
      this._connectComputation(t2);
  }
  _createObserverVisualization() {
    const e3 = u$3.toUnitRGBA(w.visibleInnerColor), t2 = new x$3({ view: this.view, color: e3, ..._, isDecoration: this.isDecoration });
    this._observerVisualElement = t2, this.addHandles(this._updatingHandles.add(() => ({ observer: this.analysisViewData.elevationAlignedObserver, interactiveAndEditable: this.interactiveAndEditable, visible: this.visible }), ({ observer: e4, interactiveAndEditable: i3, visible: o2 }) => {
      null != e4 && !i3 && o2 ? (t2.geometry = e4, this._observerVisualElement.attached = true) : t2.attached = false;
    }, P$1));
  }
};
e$2([y$2({ constructOnly: true })], O2.prototype, "analysis", void 0), e$2([y$2({ constructOnly: true })], O2.prototype, "analysisViewData", void 0), e$2([y$2({ constructOnly: true })], O2.prototype, "view", void 0), e$2([y$2({ readOnly: true })], O2.prototype, "visible", null), e$2([y$2({ constructOnly: true })], O2.prototype, "isDecoration", void 0), e$2([y$2()], O2.prototype, "updating", null), e$2([y$2()], O2.prototype, "interactiveAndEditable", null), e$2([y$2()], O2.prototype, "test", null), O2 = e$2([c$1("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")], O2);
const _ = { size: 6, pixelSnappingEnabled: false, primitive: "circle", elevationInfo: { mode: "absolute-height", offset: 0 }, outlineSize: 0 }, y = n$1(), V = n$1(), C = n$1(), E = e$9();
let m = class extends s$5(o$1.EventedMixin(g$1)) {
  constructor(t2) {
    super(t2), this.type = "line-of-sight-view-3d", this.analysis = null, this.tool = null, this.computations = new V$2(), this.elevationAlignedObserver = null, this.observerEngineLocation = n$1(), this.cursorTarget = null, this.editable = true;
  }
  initialize() {
    const t2 = this.view, i3 = this.analysis;
    this._analysisController = new B({ analysis: i3, analysisViewData: this, view: t2 }), this._analysisVisualization = new O2({ analysis: i3, analysisViewData: this, view: t2, isDecoration: !this.parent }), this.addHandles([this._analysisController.on("result-changed", (t3) => {
      t3.target !== this.cursorTarget && this.emit("result-changed", t3);
    }), a$2(this, O$1)]);
  }
  destroy() {
    v$1(this), this._analysisController = u$5(this._analysisController), this._analysisVisualization = u$5(this._analysisVisualization);
  }
  get results() {
    return this.computations.map((t2) => t2.result);
  }
  get priority() {
    return this._analysisController.priority;
  }
  set priority(t2) {
    this._analysisController.priority = t2;
  }
  get updating() {
    return null != this._analysisController && this._analysisController.updating || null != this._analysisVisualization && this._analysisVisualization.updating;
  }
  getResultForTarget(t2) {
    return this.computations.find((i3) => i3.target === t2)?.result;
  }
  get testInfo() {
    return { visualization: this._analysisVisualization, controller: this._analysisController };
  }
};
e$2([y$2({ readOnly: true })], m.prototype, "type", void 0), e$2([y$2({ constructOnly: true, nonNullable: true })], m.prototype, "analysis", void 0), e$2([y$2()], m.prototype, "tool", void 0), e$2([y$2({ readOnly: true })], m.prototype, "results", null), e$2([y$2()], m.prototype, "priority", null), e$2([y$2()], m.prototype, "computations", void 0), e$2([y$2()], m.prototype, "elevationAlignedObserver", void 0), e$2([y$2()], m.prototype, "observerEngineLocation", void 0), e$2([y$2()], m.prototype, "cursorTarget", void 0), e$2([y$2()], m.prototype, "updating", null), e$2([y$2()], m.prototype, "editable", void 0), e$2([y$2()], m.prototype, "_analysisController", void 0), e$2([y$2()], m.prototype, "_analysisVisualization", void 0), m = e$2([c$1("esri.views.3d.analysis.LineOfSightAnalysisView3D")], m);
const d3 = m;
export {
  d3 as default
};
