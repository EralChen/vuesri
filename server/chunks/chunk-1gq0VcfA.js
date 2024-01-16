import { bo as e, bp as y, br as c$1, bs as g$1, dY as V, gT as r$1, nj as i, mj as h$2, eQ as n$1, bm as h$3, kr as l$1, em as e$1, nk as a, er as c$2, en as c$3, b1 as s$1, bX as k$1 } from "./chunk-KFNcxJaF.js";
import { r } from "./chunk-73GSp-ey.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-x5arQHJi.js";
let p$1 = class p extends g$1 {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new l(this.schedule, { fetchAllEdgeLocations: (e2, t) => this._fetchAllEdgeLocations(e2, t) });
  }
  async fetchCandidates(e2, t) {
    const r2 = e2.coordinateHelper, { point: o } = e2, s = h$1;
    this.renderCoordsHelper.toRenderCoords(o, r2.spatialReference, s);
    const n = e2.distance, a2 = "number" == typeof n ? n : n.distance, d = await this._workerHandle.invoke({ bounds: V(s[0], s[1], s[2], a2), returnEdge: e2.returnEdge, returnVertex: "none" !== e2.vertexMode }, t);
    return d.candidates.sort((e3, t2) => e3.distance - t2.distance), d.candidates.map((e3) => this._convertCandidate(r2, e3));
  }
  async add(e2, t) {
    this._ids.add(e2.id), await this._workerHandle.invokeMethod("add", e2, t);
  }
  async remove(e2, t) {
    this._ids.delete(e2.id), await this._workerHandle.invokeMethod("remove", e2, t);
  }
  _convertCandidate(e2, t) {
    switch (t.type) {
      case "edge":
        return new r$1({ objectId: t.objectId, targetPoint: this._convertRenderCoordinate(e2, t.target), edgeStart: this._convertRenderCoordinate(e2, t.start), edgeEnd: this._convertRenderCoordinate(e2, t.end), isDraped: false });
      case "vertex":
        return new r({ objectId: t.objectId, targetPoint: this._convertRenderCoordinate(e2, t.target), isDraped: false });
    }
  }
  _convertRenderCoordinate({ spatialReference: e2 }, t) {
    const r2 = n$1();
    return this.renderCoordsHelper.fromRenderCoords(t, r2, e2), i(r2);
  }
  async _fetchAllEdgeLocations(e2, t) {
    const r2 = [], o = [];
    for (const { id: s, uid: n } of e2.components)
      this._ids.has(s) && r2.push((async () => {
        const e3 = await this.fetchEdgeLocations(s, t.signal), r3 = e3.locations.buffer;
        return o.push(r3), { id: s, uid: n, objectIds: e3.objectIds, locations: r3, origin: e3.origin, type: e3.type };
      })());
    return { result: { components: (await Promise.all(r2)).filter(({ id: e3 }) => this._ids.has(e3)) }, transferList: o };
  }
};
e([y({ constructOnly: true })], p$1.prototype, "renderCoordsHelper", void 0), e([y({ constructOnly: true })], p$1.prototype, "fetchEdgeLocations", void 0), e([y({ constructOnly: true })], p$1.prototype, "schedule", void 0), e([y({ readOnly: true })], p$1.prototype, "availability", void 0), p$1 = e([c$1("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], p$1);
class l extends h$2 {
  constructor(e2, t) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t });
  }
}
const h$1 = n$1();
let p2 = class extends g$1 {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._updatingHandles = new h$3(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l$1(this._tracker), this._abortController = e$1(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e2 } = this, r2 = e2.resourceController;
    this._edgeWorker = new a(h(r2)), this._workerHandle = new p$1({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: h(r2), fetchEdgeLocations: async (e3, r3) => {
      if (null == this._tracker)
        throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r3);
    } }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([c$2(this._workerHandle), c$2(this._edgeWorker)]);
  }
  async fetchCandidates(e2, r2) {
    return this._workerHandle.fetchCandidates(e2, r2);
  }
  refresh() {
  }
  async _setupLayerView() {
    if (this.destroyed)
      return;
    const e2 = this._abortController?.signal, r2 = await this.getLayerView();
    null == r2 || c$3(e2) || (this._tracker = r2.trackSnappingSources({ add: (r3, t) => {
      this._updatingHandles.addPromise(this._workerHandle.add({ id: r3, bounds: t }, e2));
    }, remove: (r3) => {
      this._updatingHandles.addPromise(this._workerHandle.remove({ id: r3 }, e2));
    } }));
  }
};
function h(e2) {
  return (r2) => e2.immediate.schedule(r2);
}
e([y({ constructOnly: true })], p2.prototype, "getLayerView", void 0), e([y({ constructOnly: true })], p2.prototype, "view", void 0), e([y({ readOnly: true })], p2.prototype, "updating", null), e([y({ readOnly: true })], p2.prototype, "availability", void 0), p2 = e([c$1("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p2);
let c = class extends g$1 {
  get updating() {
    return this._i3sSources.some((e2) => e2.updating);
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach((e2) => e2.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r2 = this.layerSource.layer;
    this._i3sSources = "building-scene" === r2.type ? this._getBuildingSceneI3SSources(e2, r2) : [this._getSceneLayerI3SSource(e2, r2)];
  }
  async fetchCandidates(e2, r2) {
    const s = await Promise.all(this._i3sSources.map((s2) => s2.fetchCandidates(e2, r2)));
    return s$1(r2), s.flat();
  }
  refresh() {
    this._i3sSources.forEach((e2) => e2.refresh());
  }
  _getBuildingSceneI3SSources(e2, r2) {
    return r2.allSublayers.toArray().map((s) => "building-component" === s.type ? new p2({ getLayerView: async () => (await e2.whenLayerView(r2)).whenSublayerView(s), view: e2 }) : null).filter(k$1);
  }
  _getSceneLayerI3SSource(e2, r2) {
    return new p2({ getLayerView: async () => {
      const s = await e2.whenLayerView(r2);
      return "scene-layer-graphics-3d" === s.type ? void 0 : s;
    }, view: e2 });
  }
};
e([y({ constructOnly: true })], c.prototype, "layerSource", void 0), e([y({ constructOnly: true })], c.prototype, "view", void 0), e([y({ readOnly: true })], c.prototype, "updating", null), e([y({ readOnly: true })], c.prototype, "availability", void 0), c = e([c$1("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c);
export {
  c as SceneLayerSnappingSource
};
