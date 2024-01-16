import { ga as q, aq as has } from "./chunk-KFNcxJaF.js";
import { s } from "./chunk-tNARKRa3.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class r {
  async createIndex(t, r2) {
    const n2 = new Array();
    if (!t.vertexAttributes?.position)
      return new s();
    const o = this._createMeshData(t), s$1 = null != r2 ? await r2.invoke("createIndexThread", o, { transferList: n2 }) : this.createIndexThread(o).result;
    return this._createPooledRBush().fromJSON(s$1);
  }
  createIndexThread(e) {
    const t = new Float64Array(e.position), r2 = this._createPooledRBush();
    return e.components ? this._createIndexComponentsThread(r2, t, e.components.map((e2) => new Uint32Array(e2))) : this._createIndexAllThread(r2, t);
  }
  _createIndexAllThread(e, t) {
    const r2 = new Array(t.length / 9);
    let o = 0;
    for (let s2 = 0; s2 < t.length; s2 += 9)
      r2[o++] = n(t, s2, s2 + 3, s2 + 6);
    return e.load(r2), { result: e.toJSON() };
  }
  _createIndexComponentsThread(e, t, r2) {
    let o = 0;
    for (const n2 of r2)
      o += n2.length / 3;
    const s2 = new Array(o);
    let a = 0;
    for (const i of r2)
      for (let e2 = 0; e2 < i.length; e2 += 3)
        s2[a++] = n(t, 3 * i[e2], 3 * i[e2 + 1], 3 * i[e2 + 2]);
    return e.load(s2), { result: e.toJSON() };
  }
  _createMeshData(e) {
    const r2 = (e.vertexSpace.isRelative ? q({ position: e.vertexAttributes.position, normal: null, tangent: null }, e.vertexSpace, e.transform, e.spatialReference).position : e.vertexAttributes.position).buffer;
    return !e.components || e.components.some((e2) => !e2.faces) ? { position: r2 } : { position: r2, components: e.components.map((e2) => e2.faces) };
  }
  _createPooledRBush() {
    return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
  }
}
function n(e, t, r2, n2) {
  return { minX: Math.min(e[t], e[r2], e[n2]), maxX: Math.max(e[t], e[r2], e[n2]), minY: Math.min(e[t + 1], e[r2 + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r2 + 1], e[n2 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r2], e[r2 + 1], e[r2 + 2]], p2: [e[n2], e[n2 + 1], e[n2 + 2]] };
}
export {
  r as default
};
