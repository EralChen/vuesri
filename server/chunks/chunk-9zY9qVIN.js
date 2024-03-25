import { h3 as g, h4 as P, b0 as has } from "./chunk-ejFG4zJ0.js";
import { s } from "./chunk-E1ai5rf5.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class n {
  async createIndex(t, r) {
    const n2 = new Array();
    if (!t.vertexAttributes?.position)
      return new s();
    const o2 = this._createMeshData(t), s$1 = null != r ? await r.invoke("createIndexThread", o2, { transferList: n2 }) : this.createIndexThread(o2).result;
    return this._createPooledRBush().fromJSON(s$1);
  }
  createIndexThread(e) {
    const t = new Float64Array(e.position), r = this._createPooledRBush();
    return e.components ? this._createIndexComponentsThread(r, t, e.components.map((e2) => new Uint32Array(e2))) : this._createIndexAllThread(r, t);
  }
  _createIndexAllThread(e, t) {
    const r = new Array(t.length / 9);
    let n2 = 0;
    for (let s2 = 0; s2 < t.length; s2 += 9)
      r[n2++] = o(t, s2, s2 + 3, s2 + 6);
    return e.load(r), { result: e.toJSON() };
  }
  _createIndexComponentsThread(e, t, r) {
    let n2 = 0;
    for (const o2 of r)
      n2 += o2.length / 3;
    const s2 = new Array(n2);
    let a = 0;
    for (const i of r)
      for (let e2 = 0; e2 < i.length; e2 += 3)
        s2[a++] = o(t, 3 * i[e2], 3 * i[e2 + 1], 3 * i[e2 + 2]);
    return e.load(s2), { result: e.toJSON() };
  }
  _createMeshData(e) {
    const n2 = (g(e.vertexSpace) ? P({ position: e.vertexAttributes.position, normal: null, tangent: null }, e.vertexSpace, e.transform, e.spatialReference).position : e.vertexAttributes.position).buffer;
    return !e.components || e.components.some((e2) => !e2.faces) ? { position: n2 } : { position: n2, components: e.components.map((e2) => e2.faces) };
  }
  _createPooledRBush() {
    return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function o(e, t, r, n2) {
  return { minX: Math.min(e[t], e[r], e[n2]), maxX: Math.max(e[t], e[r], e[n2]), minY: Math.min(e[t + 1], e[r + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[n2 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[n2], e[n2 + 1], e[n2 + 2]] };
}
export {
  n as default
};
