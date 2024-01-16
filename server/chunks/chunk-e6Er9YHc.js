import { cS as t, a$ as j, hd as p$1, ap as M$1, dy as m$1, cy as x$1, bq as j$1, dz as u$1, cw as p$2, aY as j$3, kX as r$2, ie as z } from "./chunk-KFNcxJaF.js";
import { Z as ke, n as ne, Q, K, X, d as ce, a, r, q, b as $, i as Ne, H, A as L, a9 as je, aa as Me, ab as Fe, c as pe, B as be, ac as u, ad as y$1, E as t$1, N as N$1, y as qe, ae as i, af as r$3 } from "./chunk-dapYIJB-.js";
import { c, r as r$1, a as a$1 } from "./chunk-Tt9yuqqG.js";
import { l } from "./chunk-9ybk236H.js";
import { disjoint as A, intersects as h, touches as S, crosses as m, within as x, contains as p, overlaps as O, equals as g, relate as R, intersect as D, union as b, difference as E, symmetricDifference as k, clip as y, cut as w, planarArea as W, geodesicArea as K$1, planarLength as F, geodesicLength as M, distance as d, densify as C, geodesicDensify as U, generalize as B, buffer as L$1, geodesicBuffer as P, offset as v, rotate as H$1, simplify as N, isSimple as J, convexHull as j$2, nearestCoordinate as T, nearestVertex as V } from "./chunk-N6hZu8Yl.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-pLXZyeZ7.js";
import "./chunk-uS4nEbwW.js";
async function n(n2, t$12, s) {
  const u2 = t?.findCredential(n2.restUrl);
  if (!u2)
    return null;
  if ("loaded" === n2.loadStatus && "" === t$12 && n2.user?.sourceJSON && false === s)
    return n2.user.sourceJSON;
  const o = { responseType: "json", query: { f: "json" } };
  if (s && (o.query.returnUserLicenseTypeExtensions = true), "" === t$12) {
    const e = await j(n2.restUrl + "/community/self", o);
    if (e.data) {
      const r2 = e.data;
      if (r2?.username)
        return r2;
    }
    return null;
  }
  const i2 = await j(n2.restUrl + "/community/users/" + t$12, o);
  if (i2.data) {
    const e = i2.data;
    return e.error ? null : e;
  }
  return null;
}
function vn(t2) {
  return 0 === r$2.indexOf("4.") ? j$1.fromExtent(t2) : new j$1({ spatialReference: t2.spatialReference, rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] });
}
function Pn(n2, t2, e) {
  if (ne(n2, 2, 2, t2, e), n2[0] instanceof p$1 && n2[1] instanceof p$1)
    ;
  else if (n2[0] instanceof p$1 && null === n2[1])
    ;
  else if (n2[1] instanceof p$1 && null === n2[0])
    ;
  else if (null !== n2[0] || null !== n2[1])
    throw new a(t2, r.InvalidParameter, e);
}
async function In(n2, t2) {
  if ("polygon" !== n2.type && "polyline" !== n2.type && "extent" !== n2.type)
    return 0;
  let e = 1;
  if (n2.spatialReference.vcsWkid || n2.spatialReference.latestVcsWkid) {
    e = i(n2.spatialReference) / z(n2.spatialReference);
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
    "extent" === n2.type && (r2 += 2 * r$3([n2.xmin, n2.ymin, 0], [n2.xmax, n2.ymin, 0], e), r2 += 2 * r$3([n2.xmin, n2.ymin, 0], [n2.xmin, n2.ymax, 0], e), r2 *= 2, r2 += 4 * Math.abs(L(n2.zmax, 0) * e - L(n2.zmin, 0) * e));
  const i$1 = new m$1({ hasZ: false, hasM: false, spatialReference: n2.spatialReference, paths: [[0, 0], [0, r2]] });
  return F(i$1, t2);
}
function An(n$1) {
  "async" === n$1.mode && (n$1.functions.disjoint = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null === i2[0] || null === i2[1] || A(i2[0], i2[1])));
  }, n$1.functions.intersects = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && h(i2[0], i2[1])));
  }, n$1.functions.touches = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && S(i2[0], i2[1])));
  }, n$1.functions.crosses = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && m(i2[0], i2[1])));
  }, n$1.functions.within = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && x(i2[0], i2[1])));
  }, n$1.functions.contains = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && p(i2[0], i2[1])));
  }, n$1.functions.overlaps = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null !== i2[1] && O(i2[0], i2[1])));
  }, n$1.functions.equals = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (ne(i2, 2, 2, t2, e), i2[0] === i2[1] || (i2[0] instanceof p$1 && i2[1] instanceof p$1 ? g(i2[0], i2[1]) : (Q(i2[0]) && Q(i2[1]) || !!(K(i2[0]) && K(i2[1]) || X(i2[0]) && X(i2[1]))) && i2[0].equals(i2[1]))));
  }, n$1.functions.relate = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = ke(o), ne(o, 3, 3, t2, e), o[0] instanceof p$1 && o[1] instanceof p$1)
        return R(o[0], o[1], ce(o[2]));
      if (o[0] instanceof p$1 && null === o[1])
        return false;
      if (o[1] instanceof p$1 && null === o[0])
        return false;
      if (null === o[0] && null === o[1])
        return false;
      throw new a(t2, r.InvalidParameter, e);
    });
  }, n$1.functions.intersection = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null === i2[0] || null === i2[1] ? null : D(i2[0], i2[1])));
  }, n$1.functions.union = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, o, l2) => {
      const u2 = [];
      if (0 === (l2 = ke(l2)).length)
        throw new a(t2, r.WrongNumberOfParameters, e);
      if (1 === l2.length)
        if (q(l2[0])) {
          const n3 = ke(l2[0]);
          for (let a$12 = 0; a$12 < n3.length; a$12++)
            if (null !== n3[a$12]) {
              if (!(n3[a$12] instanceof p$1))
                throw new a(t2, r.InvalidParameter, e);
              u2.push(n3[a$12]);
            }
        } else {
          if (!$(l2[0])) {
            if (l2[0] instanceof p$1)
              return Ne(c(l2[0]), t2.spatialReference);
            if (null === l2[0])
              return null;
            throw new a(t2, r.InvalidParameter, e);
          }
          {
            const n3 = ke(l2[0].toArray());
            for (let a$12 = 0; a$12 < n3.length; a$12++)
              if (null !== n3[a$12]) {
                if (!(n3[a$12] instanceof p$1))
                  throw new a(t2, r.InvalidParameter, e);
                u2.push(n3[a$12]);
              }
          }
        }
      else
        for (let a$12 = 0; a$12 < l2.length; a$12++)
          if (null !== l2[a$12]) {
            if (!(l2[a$12] instanceof p$1))
              throw new a(t2, r.InvalidParameter, e);
            u2.push(l2[a$12]);
          }
      return 0 === u2.length ? null : b(u2);
    });
  }, n$1.functions.difference = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null !== i2[0] && null === i2[1] ? c(i2[0]) : null === i2[0] ? null : E(i2[0], i2[1])));
  }, n$1.functions.symmetricdifference = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, r2, i2) => (Pn(i2 = ke(i2), t2, e), null === i2[0] && null === i2[1] ? null : null === i2[0] ? c(i2[1]) : null === i2[1] ? c(i2[0]) : k(i2[0], i2[1])));
  }, n$1.functions.clip = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = ke(o), ne(o, 2, 2, t2, e), !(o[1] instanceof M$1) && null !== o[1])
        throw new a(t2, r.InvalidParameter, e);
      if (null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return null === o[1] ? null : y(o[0], o[1]);
    });
  }, n$1.functions.cut = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, o, l2) => {
      if (l2 = ke(l2), ne(l2, 2, 2, t2, e), !(l2[1] instanceof m$1) && null !== l2[1])
        throw new a(t2, r.InvalidParameter, e);
      if (null === l2[0])
        return [];
      if (!(l2[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return null === l2[1] ? [c(l2[0])] : w(l2[0], l2[1]);
    });
  }, n$1.functions.area = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, async (n2, a$12, l2) => {
      if (ne(l2, 1, 2, t2, e), null === (l2 = ke(l2))[0])
        return 0;
      if (H(l2[0])) {
        const n3 = await l2[0].sumArea(r$1(L(l2[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (q(l2[0]) || $(l2[0])) {
        const n3 = je(l2[0], t2.spatialReference);
        return null === n3 ? 0 : W(n3, r$1(L(l2[1], -1)));
      }
      if (!(l2[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return W(l2[0], r$1(L(l2[1], -1)));
    });
  }, n$1.functions.areageodetic = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, async (n2, a$12, l2) => {
      if (ne(l2, 1, 2, t2, e), null === (l2 = ke(l2))[0])
        return 0;
      if (H(l2[0])) {
        const n3 = await l2[0].sumArea(r$1(L(l2[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (q(l2[0]) || $(l2[0])) {
        const n3 = je(l2[0], t2.spatialReference);
        return null === n3 ? 0 : K$1(n3, r$1(L(l2[1], -1)));
      }
      if (!(l2[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return K$1(l2[0], r$1(L(l2[1], -1)));
    });
  }, n$1.functions.length = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, async (n2, a$2, o) => {
      if (ne(o, 1, 2, t2, e), null === (o = ke(o))[0])
        return 0;
      if (H(o[0])) {
        const n3 = await o[0].sumLength(a$1(L(o[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (q(o[0]) || $(o[0])) {
        const n3 = Me(o[0], t2.spatialReference);
        return null === n3 ? 0 : F(n3, a$1(L(o[1], -1)));
      }
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return F(o[0], a$1(L(o[1], -1)));
    });
  }, n$1.functions.length3d = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (ne(o, 1, 2, t2, e), null === (o = ke(o))[0])
        return 0;
      if (q(o[0]) || $(o[0])) {
        const n3 = Me(o[0], t2.spatialReference);
        return null === n3 ? 0 : true === n3.hasZ ? In(n3, a$1(L(o[1], -1))) : F(n3, a$1(L(o[1], -1)));
      }
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return true === o[0].hasZ ? In(o[0], a$1(L(o[1], -1))) : F(o[0], a$1(L(o[1], -1)));
    });
  }, n$1.functions.lengthgeodetic = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, async (n2, a$2, o) => {
      if (ne(o, 1, 2, t2, e), null === (o = ke(o))[0])
        return 0;
      if (H(o[0])) {
        const n3 = await o[0].sumLength(a$1(L(o[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted)
          throw new a(t2, r.Cancelled, e);
        return n3;
      }
      if (q(o[0]) || $(o[0])) {
        const n3 = Me(o[0], t2.spatialReference);
        return null === n3 ? 0 : M(n3, a$1(L(o[1], -1)));
      }
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return M(o[0], a$1(L(o[1], -1)));
    });
  }, n$1.functions.distance = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      o = ke(o), ne(o, 2, 3, t2, e);
      let c2 = o[0];
      (q(o[0]) || $(o[0])) && (c2 = Fe(o[0], t2.spatialReference));
      let f = o[1];
      if ((q(o[1]) || $(o[1])) && (f = Fe(o[1], t2.spatialReference)), !(c2 instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      if (!(f instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return d(c2, f, a$1(L(o[2], -1)));
    });
  }, n$1.functions.distancegeodetic = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      o = ke(o), ne(o, 2, 3, t2, e);
      const c2 = o[0], f = o[1];
      if (!(c2 instanceof x$1))
        throw new a(t2, r.InvalidParameter, e);
      if (!(f instanceof x$1))
        throw new a(t2, r.InvalidParameter, e);
      const d2 = new m$1({ paths: [], spatialReference: c2.spatialReference });
      return d2.addPath([c2, f]), M(d2, a$1(L(o[2], -1)));
    });
  }, n$1.functions.densify = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = ke(o), ne(o, 2, 3, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = pe(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      if (c2 <= 0)
        throw new a(t2, r.InvalidParameter, e);
      return o[0] instanceof j$1 || o[0] instanceof m$1 ? C(o[0], c2, a$1(L(o[2], -1))) : o[0] instanceof M$1 ? C(vn(o[0]), c2, a$1(L(o[2], -1))) : o[0];
    });
  }, n$1.functions.densifygeodetic = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = ke(o), ne(o, 2, 3, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = pe(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      if (c2 <= 0)
        throw new a(t2, r.InvalidParameter, e);
      return o[0] instanceof j$1 || o[0] instanceof m$1 ? U(o[0], c2, a$1(L(o[2], -1))) : o[0] instanceof M$1 ? U(vn(o[0]), c2, a$1(L(o[2], -1))) : o[0];
    });
  }, n$1.functions.generalize = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = ke(o), ne(o, 2, 4, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = pe(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      return B(o[0], c2, be(L(o[2], true)), a$1(L(o[3], -1)));
    });
  }, n$1.functions.buffer = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, o, c$1) => {
      if (c$1 = ke(c$1), ne(c$1, 2, 3, t2, e), null === c$1[0])
        return null;
      if (!(c$1[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      const f = pe(c$1[1]);
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      return 0 === f ? c(c$1[0]) : L$1(c$1[0], f, a$1(L(c$1[2], -1)));
    });
  }, n$1.functions.buffergeodetic = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, o, c$1) => {
      if (c$1 = ke(c$1), ne(c$1, 2, 3, t2, e), null === c$1[0])
        return null;
      if (!(c$1[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      const f = pe(c$1[1]);
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      return 0 === f ? c(c$1[0]) : P(c$1[0], f, a$1(L(c$1[2], -1)));
    });
  }, n$1.functions.offset = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$2, o) => {
      if (o = ke(o), ne(o, 2, 6, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof j$1 || o[0] instanceof m$1))
        throw new a(t2, r.InvalidParameter, e);
      const c2 = pe(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      const f = pe(L(o[4], 10));
      if (isNaN(f))
        throw new a(t2, r.InvalidParameter, e);
      const d2 = pe(L(o[5], 0));
      if (isNaN(d2))
        throw new a(t2, r.InvalidParameter, e);
      return v(o[0], c2, a$1(L(o[2], -1)), ce(L(o[3], "round")).toLowerCase(), f, d2);
    });
  }, n$1.functions.rotate = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      o = ke(o), ne(o, 2, 3, t2, e);
      let l2 = o[0];
      if (null === l2)
        return null;
      if (!(l2 instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      l2 instanceof M$1 && (l2 = j$1.fromExtent(l2));
      const c2 = pe(o[1]);
      if (isNaN(c2))
        throw new a(t2, r.InvalidParameter, e);
      const f = L(o[2], null);
      if (null === f)
        return H$1(l2, c2);
      if (f instanceof x$1)
        return H$1(l2, c2, f);
      throw new a(t2, r.InvalidParameter, e);
    });
  }, n$1.functions.centroid = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, o, l2) => {
      if (l2 = ke(l2), ne(l2, 1, 1, t2, e), null === l2[0])
        return null;
      let c$1 = l2[0];
      if ((q(l2[0]) || $(l2[0])) && (c$1 = Fe(l2[0], t2.spatialReference)), null === c$1)
        return null;
      if (!(c$1 instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return c$1 instanceof x$1 ? Ne(c(l2[0]), t2.spatialReference) : c$1 instanceof j$1 ? c$1.centroid : c$1 instanceof m$1 ? u(c$1) : c$1 instanceof u$1 ? y$1(c$1) : c$1 instanceof M$1 ? c$1.center : null;
    });
  }, n$1.functions.multiparttosinglepart = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, async (n2, o, l2) => {
      l2 = ke(l2), ne(l2, 1, 1, t2, e);
      const c$1 = [];
      if (null === l2[0])
        return null;
      if (!(l2[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      if (l2[0] instanceof x$1)
        return [Ne(c(l2[0]), t2.spatialReference)];
      if (l2[0] instanceof M$1)
        return [Ne(c(l2[0]), t2.spatialReference)];
      const f = await N(l2[0]);
      if (f instanceof j$1) {
        const n3 = [], t3 = [];
        for (let e2 = 0; e2 < f.rings.length; e2++)
          if (f.isClockwise(f.rings[e2])) {
            const t4 = p$2({ rings: [f.rings[e2]], hasZ: true === f.hasZ, hazM: true === f.hasM, spatialReference: f.spatialReference.toJSON() });
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
          const e2 = p$2({ paths: [f.paths[t3]], hasZ: true === f.hasZ, hazM: true === f.hasM, spatialReference: f.spatialReference.toJSON() });
          n3.push(e2);
        }
        return n3;
      }
      if (l2[0] instanceof u$1) {
        const n3 = Ne(c(l2[0]), t2.spatialReference);
        for (let t3 = 0; t3 < n3.points.length; t3++)
          c$1.push(n3.getPoint(t3));
        return c$1;
      }
      return null;
    });
  }, n$1.functions.issimple = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = ke(o), ne(o, 1, 1, t2, e), null === o[0])
        return true;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return J(o[0]);
    });
  }, n$1.functions.simplify = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = ke(o), ne(o, 1, 1, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return N(o[0]);
    });
  }, n$1.functions.convexhull = function(t2, e) {
    return n$1.standardFunctionAsync(t2, e, (n2, a$12, o) => {
      if (o = ke(o), ne(o, 1, 1, t2, e), null === o[0])
        return null;
      if (!(o[0] instanceof p$1))
        throw new a(t2, r.InvalidParameter, e);
      return j$2(o[0]);
    });
  }, n$1.functions.getuser = function(a$12, o) {
    return n$1.standardFunctionAsync(a$12, o, async (n$12, l$1, s) => {
      ne(s, 0, 2, a$12, o);
      let c2 = L(s[1], ""), f = true === c2;
      if (c2 = true === c2 || false === c2 ? "" : ce(c2), 0 === s.length || s[0] instanceof t$1) {
        let n$13 = null;
        n$13 = a$12.services?.portal ? a$12.services.portal : j$3.getDefault(), s.length > 0 && (n$13 = l(s[0], n$13));
        const t2 = await n(n$13, c2, f);
        if (t2) {
          const n2 = JSON.parse(JSON.stringify(t2));
          for (const t3 of ["lastLogin", "created", "modified"])
            void 0 !== n2[t3] && null !== n2[t3] && (n2[t3] = new Date(n2[t3]));
          return N$1.convertObjectToArcadeDictionary(n2, qe(a$12));
        }
        return null;
      }
      let d2 = null;
      if (H(s[0]) && (d2 = s[0]), d2) {
        if (f = false, c2)
          return null;
        await d2.load();
        const n$13 = await d2.getOwningSystemUrl();
        if (!n$13) {
          if (!c2) {
            const n2 = await d2.getIdentityUser();
            return n2 ? N$1.convertObjectToArcadeDictionary({ username: n2 }, qe(a$12)) : null;
          }
          return null;
        }
        let r2 = null;
        r2 = a$12.services?.portal ? a$12.services.portal : j$3.getDefault(), r2 = l(new t$1(n$13), r2);
        const i2 = await n(r2, c2, f);
        if (i2) {
          const n2 = JSON.parse(JSON.stringify(i2));
          for (const t2 of ["lastLogin", "created", "modified"])
            void 0 !== n2[t2] && null !== n2[t2] && (n2[t2] = new Date(n2[t2]));
          return N$1.convertObjectToArcadeDictionary(n2, qe(a$12));
        }
        return null;
      }
      throw new a(a$12, r.InvalidParameter, o);
    });
  }), n$1.functions.nearestcoordinate = function(t2, a$12) {
    return n$1.standardFunctionAsync(t2, a$12, async (n2, o, l2) => {
      if (l2 = ke(l2), ne(l2, 2, 2, t2, a$12), !(l2[0] instanceof p$1 || null === l2[0]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(l2[1] instanceof x$1 || null === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (null === l2[0] || null === l2[1])
        return null;
      const c2 = await T(l2[0], l2[1]);
      return null === c2 ? null : N$1.convertObjectToArcadeDictionary({ coordinate: c2.coordinate, distance: c2.distance }, qe(t2), false, true);
    });
  }, n$1.functions.nearestvertex = function(t2, a$12) {
    return n$1.standardFunctionAsync(t2, a$12, async (n2, o, l2) => {
      if (l2 = ke(l2), ne(l2, 2, 2, t2, a$12), !(l2[0] instanceof p$1 || null === l2[0]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (!(l2[1] instanceof x$1 || null === l2[1]))
        throw new a(t2, r.InvalidParameter, a$12);
      if (null === l2[0] || null === l2[1])
        return null;
      const c2 = await V(l2[0], l2[1]);
      return null === c2 ? null : N$1.convertObjectToArcadeDictionary({ coordinate: c2.coordinate, distance: c2.distance }, qe(t2), false, true);
    });
  };
}
export {
  An as registerFunctions
};
