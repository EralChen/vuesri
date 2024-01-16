import { fK as f, fL as S, ap as M$1 } from "./chunk-KFNcxJaF.js";
import { d } from "./chunk-ispk3iYV.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function m(m2, s, n) {
  const p = f(m2), a = await d(p, S.from(s), { ...n });
  return { count: a.data.count, extent: M$1.fromJSON(a.data.extent) };
}
export {
  m as executeForTopExtents
};
