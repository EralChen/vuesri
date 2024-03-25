import { gF as t, bT as I, bI as R, gC as t$1, aQ as U$1, gG as V$1, gH as p$1, gI as d$1 } from "./chunk-ejFG4zJ0.js";
const u = "Layer does not support extent calculation.";
function y(t2, e) {
  const r = t2.geometry, o = t2.toJSON(), s = o;
  if (null != r && (s.geometry = JSON.stringify(r), s.geometryType = p$1(r), s.inSR = d$1(r.spatialReference)), o.topFilter?.groupByFields && (s.topFilter.groupByFields = o.topFilter.groupByFields.join(",")), o.topFilter?.orderByFields && (s.topFilter.orderByFields = o.topFilter.orderByFields.join(",")), o.topFilter && (s.topFilter = JSON.stringify(s.topFilter)), o.objectIds && (s.objectIds = o.objectIds.join(",")), o.orderByFields && (s.orderByFields = o.orderByFields.join(",")), o.outFields && !(e?.returnCountOnly || e?.returnExtentOnly || e?.returnIdsOnly) ? o.outFields.includes("*") ? s.outFields = "*" : s.outFields = o.outFields.join(",") : delete s.outFields, o.outSR ? s.outSR = d$1(o.outSR) : r && o.returnGeometry && (s.outSR = s.inSR), o.returnGeometry && delete o.returnGeometry, o.timeExtent) {
    const t3 = o.timeExtent, { start: e2, end: r2 } = t3;
    null == e2 && null == r2 || (s.time = e2 === r2 ? e2 : `${e2 ?? "null"},${r2 ?? "null"}`), delete o.timeExtent;
  }
  return s;
}
async function p(t$12, e, r, n) {
  const o = await c(t$12, e, "json", n);
  return t(e, r, o.data), o;
}
async function m(t2, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { objectIds: [] } } : c(t2, e, "json", r, { returnIdsOnly: true });
}
async function d(t2, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { count: 0, extent: null } } : c(t2, e, "json", r, { returnExtentOnly: true, returnCountOnly: true }).then((t3) => {
    const e2 = t3.data;
    if (e2.hasOwnProperty("extent"))
      return t3;
    if (e2.features)
      throw new Error(u);
    if (e2.hasOwnProperty("count"))
      throw new Error(u);
    return t3;
  });
}
function a(t2, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({ data: { count: 0 } }) : c(t2, e, "json", r, { returnIdsOnly: true, returnCountOnly: true });
}
function c(n, i, l, u2 = {}, p2 = {}) {
  const m2 = "string" == typeof n ? I(n) : n, d2 = i.geometry ? [i.geometry] : [];
  return u2.responseType = "pbf" === l ? "array-buffer" : "json", R(d2, null, u2).then((e) => {
    const n2 = e?.[0];
    null != n2 && ((i = i.clone()).geometry = n2);
    const o = t$1({ ...m2.query, f: l, ...p2, ...y(i, p2) });
    return U$1(V$1(m2.path, "queryTopFeatures"), { ...u2, query: { ...o, ...u2.query } });
  });
}
export {
  a,
  d,
  m,
  p
};
