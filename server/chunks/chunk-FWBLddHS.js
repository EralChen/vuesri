import { f5 as q, fi as x$1, l6 as u$1, l7 as E, l8 as U, bo as e$1, br as c, l9 as W, la as v, eQ as n$1, b1 as s$1, g9 as m, lb as b$1, lc as l, ld as it, le as t$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const t = 1e3;
function e(t2, e2, a) {
  const m2 = E(), p = U(m2);
  return q(p, p, t2, 0.5), q(p, p, e2, 0.5), m2[3] = x$1(p, t2), u$1(p, p, a), m2;
}
let _ = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new W((e2) => e2.bounds), this._edges = new W((e2) => e2.bounds), this._tmpLineSegment = v(), this._tmpP1 = n$1(), this._tmpP2 = n$1(), this._tmpP3 = n$1(), this.remoteClient = null;
  }
  async fetchCandidates(e2, s) {
    await Promise.resolve(), s$1(s), await this._ensureEdgeLocations(e2, s);
    const o = [];
    return this._edges.forEachNeighbor((t$12) => (this._addCandidates(e2, t$12, o), o.length < t), e2.bounds), { result: { candidates: o } };
  }
  async _ensureEdgeLocations(e2, t2) {
    const s = [];
    if (this._components.forEachNeighbor((e3) => {
      if (null == e3.info) {
        const { id: t3, uid: o2 } = e3;
        s.push({ id: t3, uid: o2 });
      }
      return true;
    }, e2.bounds), !s.length)
      return;
    const o = { components: s }, n = await this.remoteClient.invoke("fetchAllEdgeLocations", o, t2 ?? {});
    for (const i of n.components)
      this._setFetchEdgeLocations(i);
  }
  async add(e2) {
    const t2 = new b(e2.id, e2.bounds);
    return this._idToComponent.set(t2.id, t2), this._components.add([t2]), { result: {} };
  }
  async remove(e2) {
    const t2 = this._idToComponent.get(e2.id);
    if (t2) {
      const e3 = [];
      this._edges.forEachNeighbor((s) => (s.component === t2 && e3.push(s), true), t2.bounds), this._edges.remove(e3), this._components.remove([t2]), this._idToComponent.delete(t2.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e$12) {
    const t2 = this._idToComponent.get(e$12.id);
    if (null == t2 || e$12.uid !== t2.uid)
      return;
    const s = m.createView(e$12.locations), o = new Array(s.count), n = n$1(), r = n$1();
    for (let i = 0; i < s.count; i++) {
      s.position0.getVec(i, n), s.position1.getVec(i, r);
      const d2 = e(n, r, e$12.origin), c3 = new j(t2, i, d2);
      o[i] = c3;
    }
    this._edges.add(o);
    const { objectIds: d, origin: c2 } = e$12;
    t2.info = { locations: s, objectIds: d, origin: c2 };
  }
  _addCandidates(e2, t2, s) {
    const { info: n } = t2.component, { origin: i, objectIds: r } = n, d = n.locations, c2 = d.position0.getVec(t2.index, this._tmpP1), a = d.position1.getVec(t2.index, this._tmpP2);
    u$1(c2, c2, i), u$1(a, a, i);
    const p = r[d.componentIndex.get(t2.index)];
    this._addEdgeCandidate(e2, p, c2, a, s), this._addVertexCandidate(e2, p, c2, s), this._addVertexCandidate(e2, p, a, s);
  }
  _addEdgeCandidate(e2, t2, s, o, i) {
    if (!e2.returnEdge)
      return;
    const d = U(e2.bounds), h = b$1(s, o, this._tmpLineSegment), m2 = l(h, d, this._tmpP3);
    it(e2.bounds, m2) && i.push({ type: "edge", objectId: t2, target: t$1(m2), distance: x$1(d, m2), start: t$1(s), end: t$1(o) });
  }
  _addVertexCandidate(e2, t2, s, o) {
    if (!e2.returnVertex)
      return;
    const i = U(e2.bounds);
    it(e2.bounds, s) && o.push({ type: "vertex", objectId: t2, target: t$1(s), distance: x$1(i, s) });
  }
};
_ = e$1([c("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], _);
const f = _;
class b {
  constructor(e2, t2) {
    this.id = e2, this.bounds = t2, this.info = null, this.uid = ++b.uid;
  }
}
b.uid = 0;
class j {
  constructor(e2, t2, s) {
    this.component = e2, this.index = t2, this.bounds = s;
  }
}
export {
  f as default
};
