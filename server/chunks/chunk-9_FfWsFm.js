import { gD as f, gE as S, aC as M } from "./chunk-ejFG4zJ0.js";
import { d } from "./chunk-VJPhRSL3.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function a(a2, m, n) {
  const s = f(a2), i = await d(s, S.from(m), { ...n }), u = i.data.extent;
  return !u || isNaN(u.xmin) || isNaN(u.ymin) || isNaN(u.xmax) || isNaN(u.ymax) ? { count: i.data.count, extent: null } : { count: i.data.count, extent: M.fromJSON(u) };
}
export {
  a as executeForTopExtents
};
