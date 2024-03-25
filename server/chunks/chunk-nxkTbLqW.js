import { aB as f$1, kS as d, kT as a, cU as s$1, kU as e, kV as l, kW as i, kX as c$1, kY as o, kZ as R, aW as n$1, ee as i$1 } from "./chunk-ejFG4zJ0.js";
async function m$1(m, l$1, d$1, j, u) {
  const { elevationProvider: v, renderCoordsHelper: g } = m, { elevationInfo: y } = l$1, { pointsInFeatures: I, spatialReference: x } = j, h = f$1.fromJSON(x), w = d(y, true), R$1 = await a(w, h, u);
  s$1(u);
  const S = [], b = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), E = new o(), P = e(0, 0, 0, f$1.WGS84), U = new R(), C = n$1();
  P.spatialReference = h;
  const F = m.elevationProvider.spatialReference ?? m.spatialReference;
  for (const { objectId: e2, points: o2 } of I) {
    const r2 = d$1(e2);
    if (null == r2) {
      for (const e3 of o2)
        S.push(e3.z ?? 0);
      b.add(e2);
      continue;
    }
    r2.isDraped && z.add(e2);
    const s = r2.graphic.geometry;
    E.setFromElevationInfo(l(s, y)), E.updateFeatureExpressionInfoContext(R$1, r2.graphic, l$1);
    for (const { x: e3, y: i$12, z: a2 } of o2)
      P.x = e3, P.y = i$12, P.z = a2 ?? 0, await i(P, C, F, 0, { signal: u }), c$1(C, v, E, g, U), S.push(U.z);
  }
  return { elevations: S, drapedObjectIds: z, failedObjectIds: b };
}
async function r(r2, a2, s) {
  if (null == r2 || 0 === a2.candidates.length)
    return t;
  const i2 = r2.graphics3DGraphicsByObjectID ?? r2.graphics3DGraphics, c = [], o2 = [], { renderer: d2 } = r2, p = null != d2 && "arcadeRequired" in d2 && d2.arcadeRequired ? i$1() : null, l2 = async (n, { graphic: e2, graphics3DSymbol: t2 }) => {
    const a3 = await p, i3 = await r2.getRenderingInfoAsync(e2, d2, a3, { signal: s });
    return null == i3 ? [] : t2.queryForSnapping(n, g, i3, s);
  }, { candidates: u, spatialReference: g } = a2;
  for (let n = 0; n < u.length; ++n) {
    const e2 = u[n], { objectId: r3 } = e2, t2 = "number" == typeof r3 ? i2?.get(r3) : void 0;
    if (null == t2)
      continue;
    const { graphics3DSymbol: a3 } = t2;
    a3.symbologySnappingSupported && (c.push(l2(e2, t2)), o2.push(n));
  }
  if (0 === c.length)
    return t;
  const h = await Promise.all(c);
  s$1(s);
  const f = [], m = [];
  for (let n = 0; n < h.length; ++n) {
    const e2 = h[n], r3 = o2[n];
    for (const n2 of e2)
      f.push(n2), m.push(r3);
  }
  return { candidates: f, sourceCandidateIndices: m };
}
const t = { candidates: [], sourceCandidateIndices: [] };
export {
  m$1 as m,
  r
};
