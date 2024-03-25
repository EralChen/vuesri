import { e6 as r, e7 as g$1, e8 as j$1, bF as O$1, e9 as je, aT as s$1, ea as E$1, eb as Z$1, ec as be$1, ed as N$1, ee as i, ef as Ge, eg as u, eh as o } from "./chunk-ejFG4zJ0.js";
const m = "esri.widgets.Feature.support.featureUtils", y = () => s$1.getLogger(m), g = /href=(""|'')/gi, I = /(\{([^\{\r\n]+)\})/g, h = /\'/g, b = /^\s*expression\//i, T = /(\n)/gi, w = /[\u00A0-\u9999<>\&]/gim, F = /href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/gi, N = /^(?:mailto:|tel:)/, j = "relationships/", Z = E$1("short-date-short-time");
function E(e) {
  if (null != e)
    return (e.sourceLayer || e.layer) ?? void 0;
}
async function x(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function C(e = "") {
  if (e)
    return !N.test(e.trim().toLowerCase());
}
function M(e) {
  return !!e && b.test(e);
}
function U(e, t) {
  if (!M(t) || !e)
    return;
  const n = t.replace(b, "").toLowerCase();
  return e.find(({ name: e2 }) => e2.toLowerCase() === n);
}
function q(e, t) {
  const n = U(t, e?.fieldName);
  return n ? n.title || null : e ? e.label || e.fieldName : null;
}
function A(e, t) {
  const n = t.get(e.toLowerCase());
  return `{${n?.fieldName || e}}`;
}
function L(e) {
  return e.replaceAll(g, "");
}
function v$1(e, t) {
  const n = $(t, e);
  return n ? n.name : e;
}
function R(e, t) {
  return e && e.map((e2) => v$1(e2, t));
}
function $(e, t) {
  return e && "function" == typeof e.getField && t ? e.getField(t) ?? null : null;
}
function k(e) {
  return `${e}`.trim();
}
function D({ attributes: e, globalAttributes: t, layer: n, text: r2, expressionAttributes: i2, fieldInfoMap: o2 }) {
  return r2 ? z({ formattedAttributes: t, template: Q(r2, { ...t, ...i2, ...e }, n), fieldInfoMap: o2 }) : "";
}
function z({ formattedAttributes: e, template: n, fieldInfoMap: r$1 }) {
  return k(L(r(r(n, (e2) => A(e2, r$1)), e)));
}
function O(e, t, n = false) {
  const r2 = t[e];
  if ("string" == typeof r2) {
    const i2 = "%27", o2 = (n ? encodeURIComponent(r2) : r2).replaceAll(h, i2);
    t[e] = o2;
  }
}
function G(e, t = false) {
  const n = { ...e };
  return Object.keys(n).forEach((e2) => O(e2, n, t)), n;
}
function S(e, n, r$1) {
  const i2 = (n = k(n)) && "{" !== n[0];
  return r(e, G(r$1, i2 || false));
}
function P(e, t) {
  return e.replaceAll(I, (e2, n, r2) => {
    const i2 = $(t, r2);
    return i2 ? `{${i2.name}}` : n;
  });
}
function Q(e, t, n) {
  const r2 = P(e, n);
  return r2 ? r2.replaceAll(F, (e2, n2, r3) => S(e2, n2 || r3, t)) : r2;
}
function _(e, t) {
  if ("string" == typeof e && t && null == t.dateFormat && (null != t.places || null != t.digitSeparator)) {
    const t2 = Number(e);
    if (!isNaN(t2))
      return t2;
  }
  return e;
}
function H(e) {
  return null != e && "object" == typeof e && "fieldsIndex" in e && "geometryType" in e && "getField" in e && "load" in e && "loaded" in e && "objectIdField" in e && "spatialReference" in e && "type" in e && ("feature" === e.type || "scene" === e.type) && "when" in e;
}
function B(e) {
  return null != e && "object" == typeof e && "createQuery" in e && "queryFeatureCount" in e && "queryObjectIds" in e && "queryRelatedFeatures" in e && "queryRelatedFeaturesCount" in e && "relationships" in e;
}
function J(e) {
  return H(e) && B(e);
}
function V(e, t) {
  const { fieldInfos: n, fieldName: r2, preventPlacesFormatting: l, layer: u$1, timeZone: s } = t, c = Y(n, r2), d = $(u$1, r2);
  if (c && !Ge(r2)) {
    const t2 = d?.type, n2 = c.format?.dateFormat;
    if ("date" === t2 || "date-only" === t2 || "time-only" === t2 || "timestamp-offset" === t2 || n2)
      return N$1(e, { format: n2, fieldType: t2, timeZoneOptions: { layerTimeZone: u$1 && "preferredTimeZone" in u$1 ? u$1.preferredTimeZone : null, viewTimeZone: s, datesInUnknownTimezone: !(!u$1 || !("datesInUnknownTimezone" in u$1)) && !!u$1.datesInUnknownTimezone } });
  }
  const p = c?.format;
  return "string" == typeof e && Ge(r2) && p ? W(e, p) : "string" == typeof (e = _(e, p)) || null == e || null == p ? ae(e) : u(e, l ? { ...o(p), minimumFractionDigits: 0, maximumFractionDigits: 20 } : o(p));
}
function W(e, t) {
  return e = e.trim(), /\d{2}-\d{2}/.test(e) ? e : e.includes(",") ? X(e, ",", ", ", t) : e.includes(";") ? X(e, ";", "; ", t) : e.includes(" ") ? X(e, " ", " ", t) : u(Number(e), o(t));
}
function X(e, t, n, r2) {
  return e.trim().split(t).map((e2) => u(Number(e2), o(r2))).join(n);
}
function Y(e, t) {
  if (e?.length && t)
    return e.find((e2) => e2.fieldName?.toLowerCase() === t.toLowerCase());
}
function ee({ fieldName: e, graphic: t, layer: n }) {
  if (de(e))
    return null;
  if (!n || "function" != typeof n.getFeatureType)
    return null;
  const { typeIdField: r2 } = n;
  if (!r2 || e !== r2)
    return null;
  const i2 = n.getFeatureType(t);
  return i2 ? i2.name : null;
}
function te({ fieldName: e, value: t, graphic: n, layer: r2 }) {
  if (de(e))
    return null;
  if (!r2 || "function" != typeof r2.getFieldDomain)
    return null;
  const i2 = n && r2.getFieldDomain(e, { feature: n });
  return i2 && "coded-value" === i2.type ? i2.getName(t) : null;
}
function ne(e, t, r2, i2) {
  const { creatorField: o2, creationDateField: a, editorField: l, editDateField: u2 } = e;
  if (!t)
    return;
  const s = g$1(i2 && "preferredTimeZone" in i2 ? i2.preferredTimeZone : null, !(!i2 || !("datesInUnknownTimezone" in i2)) && !!i2.datesInUnknownTimezone, r2, Z, "date"), f = { ...Z, ...s }, c = t[u2];
  if ("number" == typeof c) {
    const e2 = t[l];
    return { type: "edit", date: j$1(c, f), user: e2 };
  }
  const d = t[a];
  if ("number" == typeof d) {
    const e2 = t[o2];
    return { type: "create", date: j$1(d, f), user: e2 };
  }
  return null;
}
function re(e, t) {
  const n = /* @__PURE__ */ new Map();
  return e ? (e.forEach((e2) => {
    const r2 = v$1(e2.fieldName, t);
    e2.fieldName = r2, n.set(r2.toLowerCase(), e2);
  }), n) : n;
}
function ie(e) {
  const t = [];
  if (!e)
    return t;
  const { fieldInfos: n, content: r2 } = e;
  return n && t.push(...n), r2 && Array.isArray(r2) ? (r2.forEach((e2) => {
    if ("fields" === e2.type) {
      const n2 = e2?.fieldInfos;
      n2 && t.push(...n2);
    }
  }), t) : t;
}
function oe(e) {
  return e.replaceAll(w, (e2) => `&#${e2.charCodeAt(0)};`);
}
function ae(e) {
  return "string" == typeof e ? e.replaceAll(T, '<br class="esri-text-new-line" />') : e;
}
function le(e) {
  const { value: t, fieldName: n, fieldInfos: r2, fieldInfoMap: i2, layer: o2, graphic: a, timeZone: l } = e;
  if (null == t)
    return "";
  const s = te({ fieldName: n, value: t, graphic: a, layer: o2 });
  if (s)
    return s;
  const d = ee({ fieldName: n, graphic: a, layer: o2 });
  if (d)
    return d;
  if (i2.get(n.toLowerCase()))
    return V(t, { fieldInfos: r2 || Array.from(i2.values()), fieldName: n, layer: o2, timeZone: l });
  const p = o2?.fieldsIndex?.get(n);
  return p && (Z$1(p) || be$1(p)) ? N$1(t, { fieldType: p.type, timeZoneOptions: { layerTimeZone: o2 && "preferredTimeZone" in o2 ? o2.preferredTimeZone : null, viewTimeZone: l, datesInUnknownTimezone: !(!o2 || !("datesInUnknownTimezone" in o2)) && !!o2.datesInUnknownTimezone } }) : ae(t);
}
function ue({ fieldInfos: e, attributes: t, layer: n, graphic: r2, fieldInfoMap: i2, relatedInfos: o2, timeZone: a }) {
  const l = {};
  return o2?.forEach((t2) => ye({ attributes: l, relatedInfo: t2, fieldInfoMap: i2, fieldInfos: e, layer: n, timeZone: a })), t && Object.keys(t).forEach((o3) => {
    const u2 = t[o3];
    l[o3] = le({ fieldName: o3, fieldInfos: e, fieldInfoMap: i2, layer: n, value: u2, graphic: r2, timeZone: a });
  }), l;
}
async function se(e, t) {
  const { layer: n, graphic: r2, outFields: i2, objectIds: o2, returnGeometry: a, spatialReference: l } = e, u2 = o2[0];
  if ("number" != typeof u2 && "string" != typeof u2) {
    const e2 = "Could not query required fields for the specified feature. The feature's ID is invalid.", t2 = { layer: n, graphic: r2, objectId: u2, requiredFields: i2 };
    return y().warn(e2, t2), null;
  }
  if (!O$1(n)?.operations?.supportsQuery) {
    const e2 = "The specified layer cannot be queried. The following fields will not be available.", t2 = { layer: n, graphic: r2, requiredFields: i2, returnGeometry: a };
    return y().warn(e2, t2), null;
  }
  const f = n.createQuery();
  f.objectIds = o2, f.outFields = i2?.length ? i2 : [n.objectIdField], f.returnGeometry = !!a, f.returnZ = !!a, f.returnM = !!a, f.outSpatialReference = l;
  return (await n.queryFeatures(f, t)).features[0];
}
async function fe(e) {
  if (!e.expressionInfos?.length)
    return false;
  const t = await i(), { arcadeUtils: { hasGeometryFunctions: n } } = t;
  return n(e);
}
async function ce({ graphic: e, popupTemplate: t, layer: n, spatialReference: r2 }, i2) {
  if (!n || !t)
    return;
  if ("function" == typeof n.load && await n.load(i2), !e.attributes)
    return;
  const o2 = e.attributes[n.objectIdField];
  if (null == o2)
    return;
  const a = [o2], u2 = await t.getRequiredFields(n.fieldsIndex), s = je(u2, e), f = s ? [] : u2, c = t.returnGeometry || await fe(t);
  if (s && !c)
    return;
  const d = await se({ layer: n, graphic: e, outFields: f, objectIds: a, returnGeometry: c, spatialReference: r2 }, i2);
  d && (d.geometry && (e.geometry = d.geometry), d.attributes && (e.attributes = { ...e.attributes, ...d.attributes }));
}
function de(e = "") {
  return !!e && e.includes(j);
}
function pe(e) {
  return e ? `${j}${e.layerId}/${e.fieldName}` : "";
}
function me({ attributes: e, graphic: t, relatedInfo: n, fieldInfos: r2, fieldInfoMap: i2, layer: o2, timeZone: a }) {
  e && t && n && Object.keys(t.attributes).forEach((l) => {
    const u2 = pe({ layerId: n.relation.id.toString(), fieldName: l }), s = t.attributes[l];
    e[u2] = le({ fieldName: u2, fieldInfos: r2, fieldInfoMap: i2, layer: o2, value: s, graphic: t, timeZone: a });
  });
}
function ye({ attributes: e, relatedInfo: t, fieldInfoMap: n, fieldInfos: r2, layer: i2, timeZone: o2 }) {
  e && t && (t.relatedFeatures?.forEach((a) => me({ attributes: e, graphic: a, relatedInfo: t, fieldInfoMap: n, fieldInfos: r2, layer: i2, timeZone: o2 })), t.relatedStatsFeatures?.forEach((a) => me({ attributes: e, graphic: a, relatedInfo: t, fieldInfoMap: n, fieldInfos: r2, layer: i2, timeZone: o2 })));
}
const ge = (e) => {
  if (!e)
    return false;
  const t = e.toUpperCase();
  return t.includes("CURRENT_TIMESTAMP") || t.includes("CURRENT_DATE") || t.includes("CURRENT_TIME");
}, Ie = ({ layer: e, method: t, query: n, definitionExpression: r2 }) => {
  if (!e.capabilities?.query?.supportsCacheHint || "attachments" === t)
    return;
  const i2 = null != n.where ? n.where : null, o2 = null != n.geometry ? n.geometry : null;
  ge(r2) || ge(i2) || "extent" === o2?.type || "tile" === n.resultType || (n.cacheHint = true);
}, he = ({ query: e, layer: t, method: n }) => {
  Ie({ layer: t, method: n, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression}` });
}, be = ({ queryPayload: e, layer: t, method: n }) => {
  Ie({ layer: t, method: n, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression}` });
};
function Te(e, t, n) {
  return e && t && n ? we(e.allLayers, t, n) || we(e.allTables, t, n) : null;
}
function we(e, t, { relatedTableId: n }) {
  const r2 = "scene" === t.type && t.associatedLayer ? t.associatedLayer.url : t.url;
  return e.filter(J).find((e2) => e2 !== t && e2.url === r2 && e2.layerId === n);
}
function Fe(e) {
  const t = e.getObjectId();
  return null != t ? `oid:${t}` : `uid:${e.uid}`;
}
export {
  C,
  D,
  E,
  Fe as F,
  J,
  M,
  P,
  R,
  Te as T,
  Y,
  ae as a,
  be as b,
  ce as c,
  de as d,
  he as h,
  ie as i,
  ne as n,
  oe as o,
  q,
  re as r,
  se as s,
  ue as u,
  v$1 as v,
  x,
  z
};
