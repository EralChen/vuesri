import { fK as f, fL as S } from "./chunk-KFNcxJaF.js";
import { m } from "./chunk-ispk3iYV.js";
import "@popperjs/core";
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
