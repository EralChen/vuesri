import { fX as q$1, lb as x, aG as u, lZ as w, l_ as Z, aV as e$1, a_ as c, l$ as W, m0 as v, aW as n$1, cU as s$1, h2 as m, m1 as b$1, m2 as j$1, m3 as st, m4 as t$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const t = 1e3;
function e(t2, e2, a) {
  const m2 = w(), p = Z(m2);
  return q$1(p, p, t2, 0.5), q$1(p, p, e2, 0.5), m2[3] = x(p, t2), u(p, p, a), m2;
}
let _ = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new W((e2) => e2.bounds), this._edges = new W((e2) => e2.bounds), this._tmpLineSegment = v(), this._tmpP1 = n$1(), this._tmpP2 = n$1(), this._tmpP3 = n$1(), this.remoteClient = null;
  }
  async fetchCandidates(e2, o) {
    await Promise.resolve(), s$1(o), await this._ensureEdgeLocations(e2, o);
    const s = [];
    return this._edges.forEachNeighbor((t$12) => (this._addCandidates(e2, t$12, s), s.length < t), e2.bounds), { result: { candidates: s } };
  }
  async _ensureEdgeLocations(e2, t2) {
    const o = [];
    if (this._components.forEachNeighbor((e3) => {
      if (null == e3.info) {
        const { id: t3, uid: s2 } = e3;
        o.push({ id: t3, uid: s2 });
      }
      return true;
    }, e2.bounds), !o.length)
      return;
    const s = { components: o }, n = await this.remoteClient.invoke("fetchAllEdgeLocations", s, t2 ?? {});
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
      this._edges.forEachNeighbor((o) => (o.component === t2 && e3.push(o), true), t2.bounds), this._edges.remove(e3), this._components.remove([t2]), this._idToComponent.delete(t2.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e$12) {
    const t2 = this._idToComponent.get(e$12.id);
    if (null == t2 || e$12.uid !== t2.uid)
      return;
    const o = m.createView(e$12.locations), s = new Array(o.count), n = n$1(), r = n$1();
    for (let i = 0; i < o.count; i++) {
      o.position0.getVec(i, n), o.position1.getVec(i, r);
      const d2 = e(n, r, e$12.origin), c3 = new j(t2, i, d2);
      s[i] = c3;
    }
    this._edges.add(s);
    const { objectIds: d, origin: c2 } = e$12;
    t2.info = { locations: o, objectIds: d, origin: c2 };
  }
  _addCandidates(e2, t2, o) {
    const { info: n } = t2.component, { origin: i, objectIds: r } = n, d = n.locations, c2 = d.position0.getVec(t2.index, this._tmpP1), a = d.position1.getVec(t2.index, this._tmpP2);
    u(c2, c2, i), u(a, a, i);
    const p = r[d.componentIndex.get(t2.index)];
    this._addEdgeCandidate(e2, p, c2, a, o), this._addVertexCandidate(e2, p, c2, o), this._addVertexCandidate(e2, p, a, o);
  }
  _addEdgeCandidate(e2, t2, o, s, i) {
    if (!e2.returnEdge)
      return;
    const d = Z(e2.bounds), h = b$1(o, s, this._tmpLineSegment), u2 = j$1(h, d, this._tmpP3);
    st(e2.bounds, u2) && i.push({ type: "edge", objectId: t2, target: t$1(u2), distance: x(d, u2), start: t$1(o), end: t$1(s) });
  }
  _addVertexCandidate(e2, t2, o, s) {
    if (!e2.returnVertex || !st(e2.bounds, o))
      return;
    const i = Z(e2.bounds);
    s.push({ type: "vertex", objectId: t2, target: t$1(o), distance: x(i, o) });
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
  constructor(e2, t2, o) {
    this.component = e2, this.index = t2, this.bounds = o;
  }
}
export {
  f as default
};
