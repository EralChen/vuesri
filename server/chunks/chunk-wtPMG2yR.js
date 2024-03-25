import { aO as s, bD as a, ee as i, bw as Q, bJ as c$1, dm as d$1, dw as We } from "./chunk-ejFG4zJ0.js";
import { n, a as n$1, m as m$1 } from "./chunk-KfB6QvrM.js";
import { t } from "./chunk-MrDe64fM.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let p = null;
function f(e, t$1, a2, n2 = {}) {
  const o = t$1.elementType, s2 = "value", c = "array" === o.type ? [{ name: s2, type: o.type, elementType: o.elementType }] : "dictionary" === o.type ? [{ name: s2, type: o.type, properties: o.properties }] : [{ name: s2, type: o.type }];
  return new t(e.map((e2) => {
    const t2 = {};
    return b(t2, c, { [s2]: e2 }, a2, n2), t2[s2];
  }));
}
function m(e, t2, r = {}) {
  const a2 = e instanceof d$1 ? new We({ source: e.features, geometryType: e.geometryType, fields: e.fields, spatialReference: e.spatialReference }) : e;
  return t2.constructFeatureSet(a2, r.spatialReference, null, true, r.lruCache, r.interceptor);
}
function y(e, t2, r = {}) {
  const { spatialReference: a2, interceptor: n2, lruCache: o } = r;
  return "string" == typeof e ? t2.createFeatureSetCollectionFromService(e, a2, o, n2) : t2.createFeatureSetCollectionFromMap(e, a2, o, n2);
}
function d(e, t2, r, a2 = {}) {
  const n2 = {};
  return b(n2, t2.properties, e, r, a2), new p.Dictionary(n2);
}
function b(e, r, a2, n$2, c = {}) {
  const i2 = {};
  for (const t2 of Object.keys(a2))
    i2[t2.toLowerCase()] = a2[t2];
  for (const l of r) {
    const r2 = l.name.toLowerCase();
    if (c.variablesPreProcessed)
      e[r2] = i2[r2];
    else
      switch (l.type) {
        case "array": {
          const t2 = i2[r2];
          e[r2] = null == t2 ? null : f(t2, l, n$2, c);
          break;
        }
        case "feature": {
          const t2 = i2[r2];
          e[r2] = null == t2 ? null : p.Feature.createFromGraphic(t2, c?.timeZone);
          break;
        }
        case "featureSet": {
          const t2 = i2[r2];
          e[r2] = null == t2 ? null : n$2 ? m(t2, n$2, c) : null;
          break;
        }
        case "featureSetCollection": {
          const t2 = i2[r2];
          e[r2] = null == t2 ? null : n$2 ? y(t2, n$2, c) : null;
          break;
        }
        case "dictionary": {
          const t2 = i2[r2];
          e[r2] = null == t2 ? null : d(t2, l, n$2, c);
          break;
        }
        case "date": {
          const a3 = i2[r2];
          e[r2] = a3 ? a3 instanceof m$1 ? a3 : c?.timeZone ? m$1.dateJSAndZoneToArcadeDate(a3, c?.timeZone) : m$1.dateJSToArcadeDate(a3) : null;
          break;
        }
        case "dateOnly": {
          const t2 = i2[r2];
          e[r2] = t2 ? t2 instanceof n$1 ? t2 : n$1.fromReader(t2) : null;
          break;
        }
        case "time": {
          const t2 = i2[r2];
          e[r2] = t2 ? t2 instanceof n ? t2 : n.fromReader(t2) : null;
          break;
        }
        case "knowledgeGraph":
        case "geometry":
        case "boolean":
        case "text":
        case "number":
          e[r2] = i2[r2];
      }
  }
}
function S(e, t2) {
  for (const r of e)
    t2.push(r), "dictionary" === r.type && S(r.properties, t2);
  return t2;
}
function v(e, t2, r, a2, n2) {
  const { spatialReference: o, interceptor: s2, lruCache: c, console: l, abortSignal: u, timeZone: p2, services: f2 = { portal: Q.getDefault() } } = r, m2 = { vars: {}, spatialReference: o, interceptor: s2, timeZone: p2, lrucache: c, useAsync: n2, services: f2, console: l, abortSignal: u };
  return t2 ? (b(m2.vars, e.variables, t2, a2, r), m2) : m2;
}
function g(t2, r) {
  switch (r.getArcadeType(t2)) {
    case "number":
    case "text":
    case "boolean":
    case "point":
    case "polygon":
    case "polyline":
    case "multipoint":
    case "extent":
      return t2;
    case "date":
      return t2.toJSDate();
    case "time":
    case "dateOnly":
      return t2.toString();
    case "feature": {
      const r2 = (t2.type, t2), a2 = "geometry" in r2 ? r2.geometry() : null, n2 = "readAttributes" in r2 ? r2.readAttributes() : r2.attributes;
      return new c$1({ geometry: a2, attributes: n2 });
    }
    case "dictionary": {
      const e = t2, a2 = e.attributes, n2 = {};
      for (const t3 of Object.keys(a2))
        n2[t3] = g(e.field(t3), r);
      return n2;
    }
    case "array":
      return ("toArray" in t2 ? t2.toArray() : t2).map((e) => g(e, r));
  }
  return t2;
}
const w = { variables: [{ name: "$feature", type: "feature" }, { name: "$layer", type: "featureSet" }, { name: "$datastore", type: "featureSetCollection" }, { name: "$map", type: "featureSetCollection" }, { name: "$userInput", type: "geometry" }, { name: "$graph", type: "knowledgeGraph" }] }, $ = { variables: [{ name: "$feature", type: "feature" }, { name: "$aggregatedFeatures", type: "featureSet" }] }, h = /* @__PURE__ */ new Map([["form-constraint", { variables: [{ name: "$feature", type: "feature" }] }], ["feature-z", { variables: [{ name: "$feature", type: "feature" }] }], ["field-calculation", { variables: [{ name: "$feature", type: "feature" }, { name: "$datastore", type: "featureSetCollection" }] }], ["form-calculation", { variables: [{ name: "$feature", type: "feature" }, { name: "$originalFeature", type: "feature" }, { name: "$layer", type: "featureSet" }, { name: "$featureSet", type: "featureSet" }, { name: "$datastore", type: "featureSetCollection" }, { name: "$map", type: "featureSetCollection" }, { name: "$editContext", type: "dictionary", properties: [{ name: "editType", type: "text" }] }] }], ["labeling", { variables: [{ name: "$feature", type: "feature" }] }], ["popup", w], ["popup-element", w], ["feature-reduction-popup", $], ["feature-reduction-popup-element", $], ["visualization", { variables: [{ name: "$feature", type: "feature" }, { name: "$view", type: "dictionary", properties: [{ name: "scale", type: "number" }] }] }]]);
function C(e) {
  const t2 = h.get(e);
  if (!t2) {
    const t3 = Array.from(h.keys()).map((e2) => `'${e2}'`).join(", ");
    throw new s("createArcadeProfile:invalid-profile-name", `Invalid profile name '${e}'. You must specify one of the following values: ${t3}`);
  }
  return a(t2);
}
async function A(e, t2, r = {}) {
  p || (p = await i());
  const { arcade: n2, arcadeUtils: o } = p, { loadScriptDependencies: s$1, referencesMember: c, scriptIsAsync: i$1 } = n2, l = S(t2.variables, []), f2 = l.filter((e2) => "featureSet" === e2.type || "featureSetCollection" === e2.type).map((e2) => e2.name.toLowerCase()), m2 = n2.parseScript(e, f2);
  if (!m2)
    throw new s("arcade:invalid-script", "Unable to create SyntaxTree");
  const y2 = o.extractFieldNames(m2), d2 = n2.scriptTouchesGeometry(m2), b2 = l.map((e2) => e2.name.toLowerCase()).filter((e2) => c(m2, e2)), w2 = i$1(m2, f2);
  await s$1(m2, w2, f2);
  const $2 = { vars: {}, spatialReference: null, useAsync: w2 };
  for (const a2 of b2)
    $2.vars[a2] = "any";
  const { lruCache: h2 } = r, C2 = n2.compileScript(m2, $2), A2 = n2.featureSetUtils(), { services: j } = r;
  return { execute: (e2, r2 = {}) => {
    if (w2)
      throw new s("arcade:invalid-execution-mode", "Cannot execute the script in synchronous mode");
    const n3 = C2(v(t2, e2, { lruCache: h2, ...r2 }, A2, w2));
    return r2.rawOutput ? n3 : g(n3, o);
  }, executeAsync: async (e2, r2 = {}) => {
    const a2 = await C2(v(t2, e2, { lruCache: h2, services: j, ...r2 }, A2, w2));
    return r2.rawOutput ? a2 : g(a2, o);
  }, isAsync: w2, variablesUsed: b2, fieldsUsed: y2, geometryUsed: d2, syntaxTree: m2 };
}
export {
  A as createArcadeExecutor,
  C as createArcadeProfile
};
