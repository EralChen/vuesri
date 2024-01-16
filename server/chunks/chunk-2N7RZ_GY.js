import { fJ as t, a$ as j, fP as T$1, kI as d$1, fK as f, c_ as d$2 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !o?.returnCountOnly ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = T$1(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({ source: r2.dynamicDataSource }), delete r2.dynamicDataSource), r2;
}
async function s(e, t2, o) {
  const r2 = await a(e, t2, o), s2 = r2.data, n2 = s2.geometryType, d = s2.spatialReference, c = {};
  for (const a2 of s2.relatedRecordGroups) {
    const e2 = { fields: void 0, objectIdFieldName: void 0, geometryType: n2, spatialReference: d, hasZ: !!s2.hasZ, hasM: !!s2.hasM, features: a2.relatedRecords };
    if (null != a2.objectId)
      c[a2.objectId] = e2;
    else
      for (const t3 of Object.keys(a2))
        "relatedRecords" !== t3 && (c[a2[t3]] = e2);
  }
  return { ...r2, data: c };
}
async function n$1(e, t2, o) {
  const r2 = await a(e, t2, o, { returnCountOnly: true }), s2 = r2.data, n2 = {};
  for (const a2 of s2.relatedRecordGroups)
    null != a2.objectId && (n2[a2.objectId] = a2.count);
  return { ...r2, data: n2 };
}
async function a(t$1, s2, n2 = {}, a2) {
  const d = t({ ...t$1.query, f: "json", ...a2, ...r(s2, a2) });
  return j(t$1.path + "/queryRelatedRecords", { ...n2, query: { ...n2.query, ...d } });
}
async function n(e, n2, u2) {
  n2 = d$1.from(n2);
  const a2 = f(e);
  return s(a2, n2, u2).then((t2) => {
    const r2 = t2.data, e2 = {};
    return Object.keys(r2).forEach((t3) => e2[t3] = d$2.fromJSON(r2[t3])), e2;
  });
}
async function u(r2, o, n2) {
  o = d$1.from(o);
  const u2 = f(r2);
  return n$1(u2, o, { ...n2 }).then((t2) => t2.data);
}
export {
  n as executeRelationshipQuery,
  u as executeRelationshipQueryForCount
};
