import { bw as Q$1, at as s$1, dD as E$1, dE as B, dF as U$1, aB as f$1, i7 as p, i8 as n, bv as S, i6 as n$1, i9 as R, ia as d } from "./chunk-ejFG4zJ0.js";
import { a as ae, b as a, r, x as t, d as de, G, a9 as $, v as Y, N, U, q as Be, E as E$2, X, k as ee, t as te, aa as K$1, ab as q, ac as re } from "./chunk-piwgY2EI.js";
import { l } from "./chunk-3KM-oU2l.js";
import { a as a$1, m, t as t$1, p as p$1, c } from "./chunk-yIlBOqc3.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-MrDe64fM.js";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
let F = null;
async function J(r2) {
  const t2 = s$1.geometryServiceUrl ?? "";
  if (!t2) {
    E$1() || await B();
    for (const e of r2)
      e.container[e.indexer] = U$1(e.container[e.indexer], f$1.WGS84);
    return;
  }
  const n$12 = r2.map((e) => e.container[e.indexer]), o = new p({ geometries: n$12, outSpatialReference: f$1.WGS84 }), a2 = await n(t2, o);
  for (let e = 0; e < a2.length; e++) {
    const t3 = r2[e];
    t3.container[t3.indexer] = a2[e];
  }
}
async function M(e, r2) {
  const t2 = new S({ portal: e, id: r2 });
  return await t2.load(), null === F && (F = await import("./chunk-mTfv55ir.js").then((n2) => n2.k)), await F.fetchKnowledgeGraph(t2.url);
}
function Q(e, r$1, t2, a$12, i) {
  if (null === e)
    return null;
  if (G(e) || E$2(e))
    return e;
  if (X(e))
    return e.toJSDate();
  if (X(e))
    return e.toJSDate();
  if (ee(e))
    return e.toStorageFormat();
  if (te(e))
    return e.toStorageString();
  if (K$1(e)) {
    const n2 = {};
    for (const o of e.keys())
      n2[o] = Q(e.field(o), r$1, t2, a$12, i), n2[o] instanceof n$1 && i.push({ container: n2, indexer: o });
    return n2;
  }
  if (U(e)) {
    const n2 = e.map((e2) => Q(e2, r$1, t2, a$12, i));
    for (let e2 = 0; e2 < n2.length; e2++)
      n2[e2] instanceof n$1 && i.push({ container: n2, indexer: e2 });
    return n2;
  }
  if (q(e)) {
    if (e.spatialReference.isWGS84)
      return e;
    if (e.spatialReference.isWebMercator && r$1)
      return R(e);
    if (!r$1 || !t2)
      return e;
    throw new a(a$12, r.WrongSpatialReference, null);
  }
}
function E(e, r$1) {
  if (!e)
    return e;
  if (e.spatialReference.isWGS84 && r$1.spatialReference.isWebMercator)
    return d(e);
  if (e.spatialReference.equals(r$1.spatialReference))
    return e;
  throw new a(r$1, r.WrongSpatialReference, null);
}
function K(e, r2) {
  if (!e)
    return null;
  const t2 = {};
  for (const n2 in e)
    t2[n2] = V(e[n2], r2);
  return t2;
}
function V(e, r2) {
  return null === e ? null : U(e) ? e.map((e2) => V(e2, r2)) : e instanceof m ? { graphTypeName: e.typeName, id: e.id, graphType: "entity", properties: K(e.properties, r2) } : e instanceof t$1 ? { graphType: "object", properties: K(e.properties, r2) } : e instanceof p$1 ? { graphTypeName: e.typeName, id: e.id, graphType: "relationship", originId: e.originId ?? null, destinationId: e.destinationId ?? null, properties: K(e.properties, r2) } : e instanceof c ? { graphType: "path", path: e.path ? e.path.map((e2) => V(e2, r2)) : null } : q(e) ? E(e, r2) : G(e) || E$2(e) || re(e) ? e : null;
}
function C(e) {
  "async" === e.mode && (e.functions.knowledgegraphbyportalitem = function(t$12, p2) {
    return e.standardFunctionAsync(t$12, p2, (e2, l$1, c2) => {
      if (ae(c2, 2, 2, t$12, p2), null === c2[0])
        throw new a(t$12, r.PortalRequired, p2);
      if (c2[0] instanceof t) {
        const e3 = de(c2[1]);
        let r2 = null;
        r2 = t$12.services?.portal ? t$12.services.portal : Q$1.getDefault();
        return M(l(c2[0], r2), e3);
      }
      if (false === G(c2[0]))
        throw new a(t$12, r.InvalidParameter, p2);
      const f = de(c2[0]);
      return M(t$12.services?.portal ?? Q$1.getDefault(), f);
    });
  }, e.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), e.functions.querygraph = function(r$1, i) {
    return e.standardFunctionAsync(r$1, i, async (e2, u, m2) => {
      ae(m2, 2, 4, r$1, i);
      const g = m2[0];
      if (!$(g))
        throw new a(r$1, r.InvalidParameter, i);
      const h = m2[1];
      if (!G(h))
        throw new a(r$1, r.InvalidParameter, i);
      null === F && (F = await import("./chunk-mTfv55ir.js").then((n2) => n2.k));
      let d2 = null;
      const w = Y(m2[2], null);
      if (!(w instanceof N || null === w))
        throw new a(r$1, r.InvalidParameter, i);
      if (w) {
        let e3 = [];
        d2 = Q(w, true, false, r$1, e3), e3 = e3.filter((e4) => !e4.container[e4.indexer].spatialReference.isWGS84), e3.length > 0 && await J(e3);
      }
      const y = new a$1({ openCypherQuery: h, bindParameters: d2 });
      (g?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (y.outputSpatialReference = r$1.spatialReference);
      const j = (await F.executeQueryStreaming(g, y)).resultRowsStream.getReader(), S2 = [];
      try {
        for (; ; ) {
          const { done: e3, value: t2 } = await j.read();
          if (e3)
            break;
          if (U(t2))
            for (const n2 of t2)
              S2.push(V(n2, r$1));
          else {
            const e4 = [];
            for (const n2 of t2)
              e4.push(V(t2[n2], r$1));
            S2.push(e4);
          }
        }
      } catch (R2) {
        throw R2;
      }
      return N.convertJsonToArcade(S2, Be(r$1), false, true);
    });
  }, e.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  C as registerFunctions
};
