import { t as t$1 } from "./chunk-Ll6uvSxj.js";
async function t(t2, a2) {
  const { loadContext: r2, ...s2 } = a2 || {}, i2 = r2 ? await r2.fetchServiceMetadata(t2, s2) : await t$1(t2, s2);
  c(i2), n(i2);
  const o = { serviceJSON: i2 };
  if ((i2.currentVersion ?? 0) < 10.5)
    return o;
  const l = `${t2}/layers`, y = r2 ? await r2.fetchServiceMetadata(l, s2) : await t$1(l, s2);
  return c(y), n(y), o.layersJSON = { layers: y.layers, tables: y.tables }, o;
}
function a(e) {
  return "Feature Layer" === e.type || "Oriented Imagery Layer" === e.type;
}
function r(e) {
  return "Table" === e.type;
}
function n(e) {
  e.layers = e.layers?.filter(a), e.tables = e.tables?.filter(r);
}
function s(e) {
  e.type ||= "Feature Layer";
}
function i(e) {
  e.type ||= "Table";
}
function c(e) {
  e.layers?.forEach(s), e.tables?.forEach(i);
}
export {
  t
};
