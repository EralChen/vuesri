import { T as Me, a as ae, d as de, B, b as a, r } from "./chunk-piwgY2EI.js";
import { s } from "./chunk-KfB6QvrM.js";
import { u, f } from "./chunk-M-7rbv6e.js";
import { i6 as n } from "./chunk-ejFG4zJ0.js";
import { relate as R$1, crosses as m, touches as S$1, within as x, overlaps as O, contains as p, intersects as h } from "./chunk-mWJZoVFa.js";
import "./chunk-MrDe64fM.js";
import "luxon";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-KyVc0M84.js";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function y(e) {
  return e instanceof n;
}
function S(i, a$1, c, S2) {
  return S2(i, a$1, async (S3, R2, v) => {
    if (v.length < 2)
      throw new a(i, r.WrongNumberOfParameters, a$1);
    if (null === (v = Me(v))[0] && null === v[1])
      return false;
    if (B(v[0])) {
      if (v[1] instanceof n)
        return new f({ parentfeatureset: v[0], relation: c, relationGeom: v[1] });
      if (null === v[1])
        return new u({ parentfeatureset: v[0] });
      throw new a(i, r.InvalidParameter, a$1);
    }
    if (y(v[0])) {
      if (y(v[1])) {
        switch (c) {
          case "esriSpatialRelEnvelopeIntersects":
            return h(s(v[0]), s(v[1]));
          case "esriSpatialRelIntersects":
            return h(v[0], v[1]);
          case "esriSpatialRelContains":
            return p(v[0], v[1]);
          case "esriSpatialRelOverlaps":
            return O(v[0], v[1]);
          case "esriSpatialRelWithin":
            return x(v[0], v[1]);
          case "esriSpatialRelTouches":
            return S$1(v[0], v[1]);
          case "esriSpatialRelCrosses":
            return m(v[0], v[1]);
        }
        throw new a(i, r.InvalidParameter, a$1);
      }
      if (B(v[1]))
        return new f({ parentfeatureset: v[1], relation: c, relationGeom: v[0] });
      if (null === v[1])
        return false;
      throw new a(i, r.InvalidParameter, a$1);
    }
    if (null !== v[0])
      throw new a(i, r.InvalidParameter, a$1);
    return B(v[1]) ? new u({ parentfeatureset: v[1] }) : !(v[1] instanceof n || null === v[1]) && void 0;
  });
}
function R(t) {
  "async" === t.mode && (t.functions.intersects = function(e, n2) {
    return S(e, n2, "esriSpatialRelIntersects", t.standardFunctionAsync);
  }, t.functions.envelopeintersects = function(e, n2) {
    return S(e, n2, "esriSpatialRelEnvelopeIntersects", t.standardFunctionAsync);
  }, t.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), t.functions.contains = function(e, n2) {
    return S(e, n2, "esriSpatialRelContains", t.standardFunctionAsync);
  }, t.functions.overlaps = function(e, n2) {
    return S(e, n2, "esriSpatialRelOverlaps", t.standardFunctionAsync);
  }, t.functions.within = function(e, n2) {
    return S(e, n2, "esriSpatialRelWithin", t.standardFunctionAsync);
  }, t.functions.touches = function(e, n2) {
    return S(e, n2, "esriSpatialRelTouches", t.standardFunctionAsync);
  }, t.functions.crosses = function(e, n2) {
    return S(e, n2, "esriSpatialRelCrosses", t.standardFunctionAsync);
  }, t.functions.relate = function(u$1, f2) {
    return t.standardFunctionAsync(u$1, f2, (t2, p2, m2) => {
      if (m2 = Me(m2), ae(m2, 3, 3, u$1, f2), y(m2[0]) && y(m2[1]))
        return R$1(m2[0], m2[1], de(m2[2]));
      if (m2[0] instanceof n && null === m2[1])
        return false;
      if (m2[1] instanceof n && null === m2[0])
        return false;
      if (B(m2[0]) && null === m2[1])
        return new u({ parentfeatureset: m2[0] });
      if (B(m2[1]) && null === m2[0])
        return new u({ parentfeatureset: m2[1] });
      if (B(m2[0]) && m2[1] instanceof n)
        return m2[0].relate(m2[1], de(m2[2]));
      if (B(m2[1]) && m2[0] instanceof n)
        return m2[1].relate(m2[0], de(m2[2]));
      if (null === m2[0] && null === m2[1])
        return false;
      throw new a(u$1, r.InvalidParameter, f2);
    });
  });
}
export {
  R as registerFunctions
};
