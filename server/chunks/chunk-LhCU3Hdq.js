import { df as t, aQ as U$1, i6 as n$1, aC as M, gb as m$1, cY as x$1, bY as j, j6 as u, cX as y$3, bw as Q$1, lK as r$2, j3 as W$1 } from "./chunk-ejFG4zJ0.js";
import { T as Me, a as ae, X, t as te, k as ee, d as de, b as a, r, U, Q, Z as Ze, B, v as Y, ad as we, ae as Oe, af as Re, h as he, S as Se, ag as y$1, ah as m$2, E as E$1, ai as y$2, N, q as Be, aj as x$2, ak as Z, x as t$1, al as c$1, am as r$3 } from "./chunk-piwgY2EI.js";
import { c, r as r$1, b as a$1 } from "./chunk-KfB6QvrM.js";
import { l } from "./chunk-3KM-oU2l.js";
import { disjoint as A, intersects as h, touches as S, crosses as m, within as x, contains as p, overlaps as O, equals as g, relate as R, intersect as D, union as b, difference as E, symmetricDifference as k, clip as y, cut as w, planarArea as W, geodesicArea as K, planarLength as F, geodesicLength as M$1, distance as d, densify as C, geodesicDensify as U$2, generalize as B$1, buffer as L, geodesicBuffer as P, offset as v, rotate as H, simplify as N$1, isSimple as J, convexHull as j$1, nearestCoordinate as T, nearestVertex as V } from "./chunk-mWJZoVFa.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-MrDe64fM.js";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
async function n(n2, t$12, s) {
  const u2 = t?.findCredential(n2.restUrl);
  if (!u2)
    return null;
  if ("loaded" === n2.loadStatus && "" === t$12 && n2.user?.sourceJSON && false === s)
    return n2.user.sourceJSON;
  const o = { responseType: "json", query: { f: "json" } };
  if (s && (o.query.returnUserLicenseTypeExtensions = true), "" === t$12) {
    const e = await U$1(n2.restUrl + "/community/self", o);
    if (e.data) {
      const r2 = e.data;
      if (r2?.username)
        return r2;
    }
    return null;
  }
  const i = await U$1(n2.restUrl + "/community/users/" + t$12, o);
  if (i.data) {
    const e = i.data;
    return e.error ? null : e;
  }
  return null;
}
function Fn(t2) {
  return 0 === r$2.indexOf("4.") ? j.fromExtent(t2) : new j({ spatialReference: t2.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] });
}
function Rn(n2, t2, e) {
  if (ae(n2, 2, 2, t2, e), n2[0] instanceof n$1 && n2[1] instanceof n$1)
    ;
  else if (n2[0] instanceof n$1 && null === n2[1])
    ;
  else if (n2[1] instanceof n$1 && null === n2[0])
    ;
  else if (null !== n2[0] || null !== n2[1])
    throw new a(t2, r.InvalidParameter, e);
}
async function jn(n2, t2) {
  if ("polygon" !== n2.type && "polyline" !== n2.type && "extent" !== n2.type)
    return 0;
  let e = 1;
  if (n2.spatialReference.vcsWkid || n2.spatialReference.latestVcsWkid) {
    e = c$1(n2.spatialReference) / W$1(n2.spatialReference);
  }
  let r2 = 0;
  if ("polyline" === n2.type)
    for (const a2 of n2.paths)
      for (let n3 = 1; n3 < a2.length; n3++)
        r2 += r$3(a2[n3], a2[n3 - 1], e);
  else if ("polygon" === n2.type)
    for (const a2 of n2.rings) {
      for (let n3 = 1; n3 < a2.length; n3++)
        r2 += r$3(a2[n3], a2[n3 - 1], e);
      (a2[0][0] !== a2[a2.length - 1][0] || a2[0][1] !== a2[a2.length - 1][1] || void 0 !== a2[0][2] && a2[0][2] !== a2[a2.length - 1][2]) && (r2 += r$3(a2[0], a2[a2.length - 1], e));
    }
  else
    "extent" === n2.type && (r2 += 2 * r$3([n2.xmin, n2.ymin, 0], [n2.xmax, n2.ymin, 0], e), r2 += 2 * r$3([n2.xmin, n2.ymin, 0], [n2.xmin, n2.ymax, 0], e), r2 *= 2, r2 += 4 * Math.abs(Y(n2.zmax, 0) * e - Y(n2.zmin, 0) * e));
  const i = new m$1({ hasZ: false, hasM: false, spatialReference: n2.spatialReference, paths: [[0, 0], [0, r2]] });
  return F(i, t2);
}
function xn(n$2) {
  "async" === n$2.mode && (n$2.functions.disjoint = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null === i[0] || null === i[1] || A(i[0], i[1])));
  }, n$2.functions.intersects = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && h(i[0], i[1])));
  }, n$2.functions.touches = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && S(i[0], i[1])));
  }, n$2.functions.crosses = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && m(i[0], i[1])));
  }, n$2.functions.within = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && x(i[0], i[1])));
  }, n$2.functions.contains = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && p(i[0], i[1])));
  }, n$2.functions.overlaps = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null !== i[1] && O(i[0], i[1])));
  }, n$2.functions.equals = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (ae(i, 2, 2, t2, e), i[0] === i[1] || (i[0] instanceof n$1 && i[1] instanceof n$1 ? g(i[0], i[1]) : (X(i[0]) && X(i[1]) || !!(te(i[0]) && te(i[1]) || ee(i[0]) && ee(i[1]))) && i[0].equals(i[1]))));
  }, n$2.functions.relate = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = Me(o), ae(o, 3, 3, t2, e), o[0] instanceof n$1 && o[1] instanceof n$1)
        return R(o[0], o[1], de(o[2]));
      if (o[0] instanceof n$1 && null === o[1])
        return false;
      if (o[1] instanceof n$1 && null === o[0])
        return false;
      if (null === o[0] && null === o[1])
        return false;
      throw new a(t2, r.InvalidParameter, e);
    });
  }, n$2.functions.intersection = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null === i[0] || null === i[1] ? null : D(i[0], i[1])));
  }, n$2.functions.union = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, o, l2) => {
      const u2 = [];
      if (0 === (l2 = Me(l2)).length)
        throw new a(t2, r.WrongNumberOfParameters, e);
      if (1 === l2.length)
        if (U(l2[0])) {
          const n3 = Me(l2[0]);
          for (let a$12 = 0; a$12 < n3.length; a$12++)
            if (null !== n3[a$12]) {
              if (!(n3[a$12] instanceof n$1))
                throw new a(t2, r.InvalidParameter, e);
              u2.push(n3[a$12]);
            }
        } else {
          if (!Q(l2[0])) {
            if (l2[0] instanceof n$1)
              return Ze(c(l2[0]), t2.spatialReference);
            if (null === l2[0])
              return null;
            throw new a(t2, r.InvalidParameter, e);
          }
          {
            const n3 = Me(l2[0].toArray());
            for (let a$12 = 0; a$12 < n3.length; a$12++)
              if (null !== n3[a$12]) {
                if (!(n3[a$12] instanceof n$1))
                  throw new a(t2, r.InvalidParameter, e);
                u2.push(n3[a$12]);
              }
          }
        }
      else
        for (let a$12 = 0; a$12 < l2.length; a$12++)
          if (null !== l2[a$12]) {
            if (!(l2[a$12] instanceof n$1))
              throw new a(t2, r.InvalidParameter, e);
            u2.push(l2[a$12]);
          }
      return 0 === u2.length ? null : b(u2);
    });
  }, n$2.functions.difference = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null !== i[0] && null === i[1] ? c(i[0]) : null === i[0] ? null : E(i[0], i[1])));
  }, n$2.functions.symmetricdifference = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, r2, i) => (Rn(i = Me(i), t2, e), null === i[0] && null === i[1] ? null : null === i[0] ? c(i[1]) : null === i[1] ? c(i[0]) : k(i[0], i[1])));
  }, n$2.functions.clip = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = Me(o), ae(o, 2, 2, t2, e), !(o[1] instanceof M) && null !== o[1])
        throw new a(t2, r.InvalidParameter, e);
      if (null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return null === o[1] ? null : y(o[0], o[1]);
    });
  }, n$2.functions.cut = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, e), !(l2[1] instanceof m$1) && null !== l2[1])
        throw new a(t2, r.InvalidParameter, e);
      if (null === l2[0])
        return [];
      if (!(l2[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return null === l2[1] ? [c(l2[0])] : w(l2[0], l2[1]);
    });
  }, n$2.functions.area = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, async (n2, a$12, l2) => {
      if (ae(l2, 1, 2, t2, e), null === (l2 = Me(l2))[0])
        return 0;
      if (B(l2[0])) {
        const n3 = await l2[0].sumArea(r$1(Y(l2[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (U(l2[0]) || Q(l2[0])) {
        const n3 = we(l2[0], t2.spatialReference);
        return null === n3 ? 0 : W(n3, r$1(Y(l2[1], -1)));
      }
      if (!(l2[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return W(l2[0], r$1(Y(l2[1], -1)));
    });
  }, n$2.functions.areageodetic = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, async (n2, a$12, l2) => {
      if (ae(l2, 1, 2, t2, e), null === (l2 = Me(l2))[0])
        return 0;
      if (B(l2[0])) {
        const n3 = await l2[0].sumArea(r$1(Y(l2[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (U(l2[0]) || Q(l2[0])) {
        const n3 = we(l2[0], t2.spatialReference);
        return null === n3 ? 0 : K(n3, r$1(Y(l2[1], -1)));
      }
      if (!(l2[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return K(l2[0], r$1(Y(l2[1], -1)));
    });
  }, n$2.functions.length = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, async (n2, a$2, o) => {
      if (ae(o, 1, 2, t2, e), null === (o = Me(o))[0])
        return 0;
      if (B(o[0])) {
        const n3 = await o[0].sumLength(a$1(Y(o[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (U(o[0]) || Q(o[0])) {
        const n3 = Oe(o[0], t2.spatialReference);
        return null === n3 ? 0 : F(n3, a$1(Y(o[1], -1)));
      }
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return F(o[0], a$1(Y(o[1], -1)));
    });
  }, n$2.functions.length3d = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (ae(o, 1, 2, t2, e), null === (o = Me(o))[0])
        return 0;
      if (U(o[0]) || Q(o[0])) {
        const n3 = Oe(o[0], t2.spatialReference);
        return null === n3 ? 0 : true === n3.hasZ ? jn(n3, a$1(Y(o[1], -1))) : F(n3, a$1(Y(o[1], -1)));
      }
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return true === o[0].hasZ ? jn(o[0], a$1(Y(o[1], -1))) : F(o[0], a$1(Y(o[1], -1)));
    });
  }, n$2.functions.lengthgeodetic = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, async (n2, a$2, o) => {
      if (ae(o, 1, 2, t2, e), null === (o = Me(o))[0])
        return 0;
      if (B(o[0])) {
        const n3 = await o[0].sumLength(a$1(Y(o[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (U(o[0]) || Q(o[0])) {
        const n3 = Oe(o[0], t2.spatialReference);
        return null === n3 ? 0 : M$1(n3, a$1(Y(o[1], -1)));
      }
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return M$1(o[0], a$1(Y(o[1], -1)));
    });
  }, n$2.functions.distance = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      o = Me(o), ae(o, 2, 3, t2, e);
      let c2 = o[0];
      (U(o[0]) || Q(o[0])) && (c2 = Re(o[0], t2.spatialReference));
      let f = o[1];
      if ((U(o[1]) || Q(o[1])) && (f = Re(o[1], t2.spatialReference)), !(c2 instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      if (!(f instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return d(c2, f, a$1(Y(o[2], -1)));
    });
  }, n$2.functions.distancegeodetic = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      o = Me(o), ae(o, 2, 3, t2, e);
      const c2 = o[0], f = o[1];
      if (!(c2 instanceof x$1))
        throw new a(t2, r.InvalidParameter, e);
      if (!(f instanceof x$1))
        throw new a(t2, r.InvalidParameter, e);
      const d2 = new m$1({ paths: [], spatialReference: c2.spatialReference });
      return d2.addPath([c2, f]), M$1(d2, a$1(Y(o[2], -1)));
    });
  }, n$2.functions.densify = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = Me(o), ae(o, 2, 3, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = he(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      if (c2 <= 0)
        throw new a(t2, r.InvalidParameter, e);
      return o[0] instanceof j || o[0] instanceof m$1 ? C(o[0], c2, a$1(Y(o[2], -1))) : o[0] instanceof M ? C(Fn(o[0]), c2, a$1(Y(o[2], -1))) : o[0];
    });
  }, n$2.functions.densifygeodetic = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = Me(o), ae(o, 2, 3, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = he(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      if (c2 <= 0)
        throw new a(t2, r.InvalidParameter, e);
      return o[0] instanceof j || o[0] instanceof m$1 ? U$2(o[0], c2, a$1(Y(o[2], -1))) : o[0] instanceof M ? U$2(Fn(o[0]), c2, a$1(Y(o[2], -1))) : o[0];
    });
  }, n$2.functions.generalize = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = Me(o), ae(o, 2, 4, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = he(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      return B$1(o[0], c2, Se(Y(o[2], true)), a$1(Y(o[3], -1)));
    });
  }, n$2.functions.buffer = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, o, c$12) => {
      if (c$12 = Me(c$12), ae(c$12, 2, 3, t2, e), null === c$12[0])
        return null;
      if (!(c$12[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      const f = he(c$12[1]);
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      return 0 === f ? c(c$12[0]) : L(c$12[0], f, a$1(Y(c$12[2], -1)));
    });
  }, n$2.functions.buffergeodetic = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, o, c$12) => {
      if (c$12 = Me(c$12), ae(c$12, 2, 3, t2, e), null === c$12[0])
        return null;
      if (!(c$12[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      const f = he(c$12[1]);
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      return 0 === f ? c(c$12[0]) : P(c$12[0], f, a$1(Y(c$12[2], -1)));
    });
  }, n$2.functions.offset = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = Me(o), ae(o, 2, 6, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof j || o[0] instanceof m$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = he(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      const f = he(Y(o[4], 10));
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      const d2 = he(Y(o[5], 0));
      if (isNaN(d2))
        throw new a(t2, r.InvalidParameter, e);
      return v(o[0], c2, a$1(Y(o[2], -1)), de(Y(o[3], "round")).toLowerCase(), f, d2);
    });
  }, n$2.functions.rotate = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      o = Me(o), ae(o, 2, 3, t2, e);
      let l2 = o[0];
      if (null === l2)
        return null;
      if (!(l2 instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      l2 instanceof M && (l2 = j.fromExtent(l2));
      const c2 = he(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      const f = Y(o[2], null);
      if (null === f)
        return H(l2, c2);
      if (f instanceof x$1)
        return H(l2, c2, f);
      throw new a(t2, r.InvalidParameter, e);
    });
  }, n$2.functions.centroid = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 1, 1, t2, e), null === l2[0])
        return null;
      let c$12 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c$12 = Re(l2[0], t2.spatialReference)), null === c$12)
        return null;
      if (!(c$12 instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return c$12 instanceof x$1 ? Ze(c(l2[0]), t2.spatialReference) : c$12 instanceof j ? c$12.centroid : c$12 instanceof m$1 ? y$1(c$12) : c$12 instanceof u ? m$2(c$12) : c$12 instanceof M ? c$12.center : null;
    });
  }, n$2.functions.measuretocoordinate = function(t2, a$12) {
    return n$2.standardFunctionAsync(t2, a$12, (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, a$12), null === l2[0])
        return null;
      let c2 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c2 = Oe(l2[0], t2.spatialReference)), null === c2)
        return null;
      if (!(c2 instanceof n$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(c2 instanceof m$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (E$1(false === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      const f = y$2(c2, l2[1]);
      return f ? N.convertObjectToArcadeDictionary(f, Be(t2), false, true) : null;
    });
  }, n$2.functions.pointtocoordinate = function(t2, a$12) {
    return n$2.standardFunctionAsync(t2, a$12, (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, a$12), null === l2[0])
        return null;
      let c2 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c2 = Oe(l2[0], t2.spatialReference)), null === c2)
        return null;
      if (!(c2 instanceof n$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(c2 instanceof m$1))
        throw new a(t2, r.InvalidParameter, a$12);
      const f = l2[1];
      if (null === f)
        return null;
      if (!(f instanceof x$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (E$1(false === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      const d2 = x$2(c2, f);
      return d2 ? N.convertObjectToArcadeDictionary(d2, Be(t2), false, true) : null;
    });
  }, n$2.functions.distancetocoordinate = function(t2, a$12) {
    return n$2.standardFunctionAsync(t2, a$12, (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, a$12), null === l2[0])
        return null;
      let c2 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c2 = Oe(l2[0], t2.spatialReference)), null === c2)
        return null;
      if (!(c2 instanceof n$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(c2 instanceof m$1))
        throw new a(t2, r.InvalidParameter, a$12);
      if (E$1(false === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      const f = Z(c2, l2[1]);
      return f ? N.convertObjectToArcadeDictionary(f, Be(t2), false, true) : null;
    });
  }, n$2.functions.multiparttosinglepart = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, async (n2, o, l2) => {
      l2 = Me(l2), ae(l2, 1, 1, t2, e);
      const c$12 = [];
      if (null === l2[0])
        return null;
      if (!(l2[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      if (l2[0] instanceof x$1)
        return [Ze(c(l2[0]), t2.spatialReference)];
      if (l2[0] instanceof M)
        return [Ze(c(l2[0]), t2.spatialReference)];
      const f = await N$1(l2[0]);
      if (f instanceof j) {
        const n3 = [], t3 = [];
        for (let e2 = 0; e2 < f.rings.length; e2++)
          if (f.isClockwise(f.rings[e2])) {
            const t4 = y$3({ rings: [f.rings[e2]], hasZ: true === f.hasZ, hazM: true === f.hasM, spatialReference: f.spatialReference.toJSON() });
            n3.push(t4);
          } else
            t3.push({ ring: f.rings[e2], pt: f.getPoint(e2, 0) });
        for (let e2 = 0; e2 < t3.length; e2++)
          for (let r2 = 0; r2 < n3.length; r2++)
            if (n3[r2].contains(t3[e2].pt)) {
              n3[r2].addRing(t3[e2].ring);
              break;
            }
        return n3;
      }
      if (f instanceof m$1) {
        const n3 = [];
        for (let t3 = 0; t3 < f.paths.length; t3++) {
          const e2 = y$3({ paths: [f.paths[t3]], hasZ: true === f.hasZ, hazM: true === f.hasM, spatialReference: f.spatialReference.toJSON() });
          n3.push(e2);
        }
        return n3;
      }
      if (l2[0] instanceof u) {
        const n3 = Ze(c(l2[0]), t2.spatialReference);
        for (let t3 = 0; t3 < n3.points.length; t3++)
          c$12.push(n3.getPoint(t3));
        return c$12;
      }
      return null;
    });
  }, n$2.functions.issimple = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = Me(o), ae(o, 1, 1, t2, e), null === o[0])
        return true;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return J(o[0]);
    });
  }, n$2.functions.simplify = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = Me(o), ae(o, 1, 1, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return N$1(o[0]);
    });
  }, n$2.functions.convexhull = function(t2, e) {
    return n$2.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = Me(o), ae(o, 1, 1, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof n$1))
        throw new a(t2, r.InvalidParameter, e);
      return j$1(o[0]);
    });
  }, n$2.functions.getuser = function(a$12, o) {
    return n$2.standardFunctionAsync(a$12, o, async (n$12, l$1, s) => {
      ae(s, 0, 2, a$12, o);
      let c2 = Y(s[1], ""), f = true === c2;
      if (c2 = true === c2 || false === c2 ? "" : de(c2), 0 === s.length || s[0] instanceof t$1) {
        let n$13 = null;
        n$13 = a$12.services?.portal ? a$12.services.portal : Q$1.getDefault(), s.length > 0 && (n$13 = l(s[0], n$13));
        const t2 = await n(n$13, c2, f);
        if (t2) {
          const n2 = JSON.parse(JSON.stringify(t2));
          for (const t3 of ["lastLogin", "created", "modified"])
            void 0 !== n2[t3] && null !== n2[t3] && (n2[t3] = new Date(n2[t3]));
          return N.convertObjectToArcadeDictionary(n2, Be(a$12));
        }
        return null;
      }
      let d2 = null;
      if (B(s[0]) && (d2 = s[0]), d2) {
        if (f = false, c2)
          return null;
        await d2.load();
        const n$13 = await d2.getOwningSystemUrl();
        if (!n$13) {
          if (!c2) {
            const n2 = await d2.getIdentityUser();
            return n2 ? N.convertObjectToArcadeDictionary({ username: n2 }, Be(a$12)) : null;
          }
          return null;
        }
        let r2 = null;
        r2 = a$12.services?.portal ? a$12.services.portal : Q$1.getDefault(), r2 = l(new t$1(n$13), r2);
        const i = await n(r2, c2, f);
        if (i) {
          const n2 = JSON.parse(JSON.stringify(i));
          for (const t2 of ["lastLogin", "created", "modified"])
            void 0 !== n2[t2] && null !== n2[t2] && (n2[t2] = new Date(n2[t2]));
          return N.convertObjectToArcadeDictionary(n2, Be(a$12));
        }
        return null;
      }
      throw new a(a$12, r.InvalidParameter, o);
    });
  }), n$2.functions.nearestcoordinate = function(t2, a$12) {
    return n$2.standardFunctionAsync(t2, a$12, async (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, a$12), !(l2[0] instanceof n$1 || null === l2[0]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(l2[1] instanceof x$1 || null === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (null === l2[0] || null === l2[1])
        return null;
      const c2 = await T(l2[0], l2[1]);
      return null === c2 ? null : N.convertObjectToArcadeDictionary({ coordinate: c2.coordinate, distance: c2.distance, sideOfLine: 0 === c2.distance ? "straddle" : c2.isRightSide ? "right" : "left" }, Be(t2), false, true);
    });
  }, n$2.functions.nearestvertex = function(t2, a$12) {
    return n$2.standardFunctionAsync(t2, a$12, async (n2, o, l2) => {
      if (l2 = Me(l2), ae(l2, 2, 2, t2, a$12), !(l2[0] instanceof n$1 || null === l2[0]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(l2[1] instanceof x$1 || null === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (null === l2[0] || null === l2[1])
        return null;
      const c2 = await V(l2[0], l2[1]);
      return null === c2 ? null : N.convertObjectToArcadeDictionary({ coordinate: c2.coordinate, distance: c2.distance, sideOfLine: 0 === c2.distance ? "straddle" : c2.isRightSide ? "right" : "left" }, Be(t2), false, true);
    });
  };
}
export {
  xn as registerFunctions
};
