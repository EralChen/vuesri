import { m as m$1 } from "./chunk-Tt9yuqqG.js";
import { n as ne, H, q, P, b as $, a, r, Y as l, A as L, y as qe } from "./chunk-dapYIJB-.js";
import { x as x$1, r as r$1 } from "./chunk-ewxQmXoN.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-pLXZyeZ7.js";
import "./chunk-uS4nEbwW.js";
async function m(n, t, e, a2, o, u) {
  if (1 === a2.length) {
    if (q(a2[0]))
      return l(n, a2[0], L(a2[1], -1));
    if ($(a2[0]))
      return l(n, a2[0].toArray(), L(a2[1], -1));
  } else if (2 === a2.length) {
    if (q(a2[0]))
      return l(n, a2[0], L(a2[1], -1));
    if ($(a2[0]))
      return l(n, a2[0].toArray(), L(a2[1], -1));
    if (H(a2[0])) {
      const e2 = await a2[0].load(), r2 = await A(x$1.create(a2[1], e2.getFieldsIndex(), e2.dateFieldsTimeZoneDefaultUTC), u, o);
      return g(o, await a2[0].calculateStatistic(n, r2, L(a2[2], 1e3), t.abortSignal));
    }
  } else if (3 === a2.length && H(a2[0])) {
    const e2 = await a2[0].load(), r2 = await A(x$1.create(a2[1], e2.getFieldsIndex(), e2.dateFieldsTimeZoneDefaultUTC), u, o);
    return g(o, await a2[0].calculateStatistic(n, r2, L(a2[2], 1e3), t.abortSignal));
  }
  return l(n, a2, -1);
}
function g(t, e) {
  return e instanceof r$1 ? m$1.fromReaderAsTimeStampOffset(e.toStorageFormat()) : e instanceof Date ? m$1.dateJSAndZoneToArcadeDate(e, qe(t)) : e;
}
async function A(n, t, e) {
  const a2 = n.getVariables();
  if (a2.length > 0) {
    const r2 = [];
    for (let n2 = 0; n2 < a2.length; n2++) {
      const i2 = { name: a2[n2] };
      r2.push(await t.evaluateIdentifier(e, i2));
    }
    const i = {};
    for (let n2 = 0; n2 < a2.length; n2++)
      i[a2[n2]] = r2[n2];
    return n.parameters = i, n;
  }
  return n;
}
function y(n) {
  "async" === n.mode && (n.functions.stdev = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("stdev", e2, a2, r2, t, n));
  }, n.functions.variance = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("variance", e2, a2, r2, t, n));
  }, n.functions.average = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("mean", e2, a2, r2, t, n));
  }, n.functions.mean = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("mean", e2, a2, r2, t, n));
  }, n.functions.sum = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("sum", e2, a2, r2, t, n));
  }, n.functions.min = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("min", e2, a2, r2, t, n));
  }, n.functions.max = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r2) => m("max", e2, a2, r2, t, n));
  }, n.functions.count = function(c, u) {
    return n.standardFunctionAsync(c, u, (n2, f, d) => {
      if (ne(d, 1, 1, c, u), H(d[0]))
        return d[0].count(n2.abortSignal);
      if (q(d[0]) || P(d[0]))
        return d[0].length;
      if ($(d[0]))
        return d[0].length();
      throw new a(c, r.InvalidParameter, u);
    });
  });
}
export {
  y as registerFunctions
};
