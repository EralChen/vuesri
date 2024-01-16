import { fK as f, fL as S } from "./chunk-KFNcxJaF.js";
import { a } from "./chunk-ispk3iYV.js";
import "@popperjs/core";
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
