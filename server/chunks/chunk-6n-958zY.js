import { g3 as f$1, g4 as u$1, g5 as p$1, g6 as u$2, g7 as T, g8 as d$1, g9 as m } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class o {
  async extract(e) {
    const t = c(e), n = f$1(t), r = [t.data.buffer];
    return { result: l(n, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t) {
    const s = c(t), i = u$1(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p$1(i, p, g), o2 = [];
    return { result: u$2(a.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t) {
    const s = c(t), i = u$1(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a = p$1(i, f, g), o2 = [];
    return { result: u$2(a.regular.instancesData, o2), transferList: o2 };
  }
}
function c(e) {
  return { data: T.createView(e.dataBuffer), indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function l(t, n) {
  n.push(t.regular.lodInfo.lengths.buffer), n.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: u$2(t.regular.instancesData, n), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: u$2(t.silhouette.instancesData, n), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
class u {
  allocate(e) {
    return d$1.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1);
  }
}
class d {
  allocate(e) {
    return m.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n) {
    e.position0.setVec(t, n.position0), e.position1.setVec(t, n.position1), e.componentIndex.set(t, n.componentIndex);
  }
}
const f = new u(), p = new d(), g = { allocate: () => null, write: () => {
}, trim: () => null };
export {
  o as default
};
