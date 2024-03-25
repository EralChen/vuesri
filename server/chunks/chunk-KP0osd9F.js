import { gD as f, gE as S } from "./chunk-ejFG4zJ0.js";
import { a } from "./chunk-VJPhRSL3.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function s(s2, e, p) {
  const u = f(s2);
  return (await a(u, S.from(e), { ...p })).data.count;
}
export {
  s as executeForTopCount
};
