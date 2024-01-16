import { t as t$1 } from "./chunk-rOxUIHGZ.js";
async function t(t2, r2) {
  const a2 = await t$1(t2, r2);
  y(a2), n(a2);
  const s2 = { serviceJSON: a2 };
  if ((a2.currentVersion ?? 0) < 10.5)
    return s2;
  const o2 = await t$1(t2 + "/layers", r2);
  return y(o2), n(o2), s2.layersJSON = { layers: o2.layers, tables: o2.tables }, s2;
}
function r(e) {
  return "Feature Layer" === e.type || "Oriented Imagery Layer" === e.type;
}
function a(e) {
  return "Table" === e.type;
}
function n(e) {
  e.layers = e.layers?.filter(r), e.tables = e.tables?.filter(a);
}
function s(e) {
  e.type ||= "Feature Layer";
}
function o(e) {
  e.type ||= "Table";
}
function y(e) {
  e.layers?.forEach(s), e.tables?.forEach(o);
}
export {
  t
};
