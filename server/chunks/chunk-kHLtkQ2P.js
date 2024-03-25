import { gD as f, gE as S } from "./chunk-ejFG4zJ0.js";
import { m } from "./chunk-VJPhRSL3.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function s(s2, e, p) {
  const a = f(s2);
  return (await m(a, S.from(e), { ...p })).data.objectIds;
}
export {
  s as executeForTopIds
};
