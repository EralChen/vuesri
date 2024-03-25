import { m as m$1 } from "./chunk-KfB6QvrM.js";
import { a as ae, B, U, G, Q, b as a, r, P as l, v as Y, q as Be } from "./chunk-piwgY2EI.js";
import { x as x$1, r as r$1 } from "./chunk-KyVc0M84.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-MrDe64fM.js";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
async function m(n, t, e, a2, o, u) {
  if (1 === a2.length) {
    if (U(a2[0]))
      return l(n, a2[0], Y(a2[1], -1));
    if (Q(a2[0]))
      return l(n, a2[0].toArray(), Y(a2[1], -1));
  } else if (2 === a2.length) {
    if (U(a2[0]))
      return l(n, a2[0], Y(a2[1], -1));
    if (Q(a2[0]))
      return l(n, a2[0].toArray(), Y(a2[1], -1));
    if (B(a2[0])) {
      const e2 = await a2[0].load(), r2 = await A(x$1.create(a2[1], e2.getFieldsIndex(), e2.dateFieldsTimeZoneDefaultUTC), u, o);
      return g(o, await a2[0].calculateStatistic(n, r2, Y(a2[2], 1e3), t.abortSignal));
    }
  } else if (3 === a2.length && B(a2[0])) {
    const e2 = await a2[0].load(), r2 = await A(x$1.create(a2[1], e2.getFieldsIndex(), e2.dateFieldsTimeZoneDefaultUTC), u, o);
    return g(o, await a2[0].calculateStatistic(n, r2, Y(a2[2], 1e3), t.abortSignal));
  }
  return l(n, a2, -1);
}
function g(t, e) {
  return e instanceof r$1 ? m$1.fromReaderAsTimeStampOffset(e.toStorageFormat()) : e instanceof Date ? m$1.dateJSAndZoneToArcadeDate(e, Be(t)) : e;
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
      if (ae(d, 1, 1, c, u), B(d[0]))
        return d[0].count(n2.abortSignal);
      if (U(d[0]) || G(d[0]))
        return d[0].length;
      if (Q(d[0]))
        return d[0].length();
      throw new a(c, r.InvalidParameter, u);
    });
  });
}
export {
  y as registerFunctions
};
