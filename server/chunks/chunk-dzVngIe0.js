import { gD as f, gE as S, dm as d$1 } from "./chunk-ejFG4zJ0.js";
import { p } from "./chunk-VJPhRSL3.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function s(s2, p$1, u, a) {
  const m = f(s2), i = { ...a }, { data: f$1 } = await p(m, S.from(p$1), u, i);
  return d$1.fromJSON(f$1);
}
export {
  s as executeTopFeaturesQuery
};
