import { ki as e, cZ as f$1, kj as d$1, kk as a, b1 as s$1, kl as u, km as n, kn as c$1, ko as o, kp as R, dK as i } from "./chunk-KFNcxJaF.js";
async function c(t2, i2, s, c2, u$1) {
  const { elevationProvider: g, renderCoordsHelper: v } = t2, { elevationInfo: y } = i2, { pointsInFeatures: I, spatialReference: h } = c2, x = f$1.fromJSON(h), w = d$1(y, true), E = await a(w, x, u$1);
  s$1(u$1);
  const R2 = [], S = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  l.spatialReference = x;
  const P = t2.elevationProvider.spatialReference ?? t2.spatialReference;
  for (const { objectId: e2, points: a2 } of I) {
    const t3 = s(e2);
    if (null == t3) {
      for (const e3 of a2)
        R2.push(e3.z ?? 0);
      S.add(e2);
      continue;
    }
    t3.isDraped && z.add(e2);
    const p = t3.graphic.geometry;
    m.setFromElevationInfo(u(p, y)), m.updateFeatureExpressionInfoContext(E, t3.graphic, i2);
    for (const { x: e3, y: r2, z: i3 } of a2)
      l.x = e3, l.y = r2, l.z = i3 ?? 0, await n(l, j, P, 0, { signal: u$1 }), c$1(j, g, m, v, d), R2.push(d.z);
  }
  return { elevations: R2, drapedObjectIds: z, failedObjectIds: S };
}
const m = new o(), l = e(0, 0, 0, f$1.WGS84), d = new R(), j = [0, 0, 0];
async function r(r2, a2, s) {
  if (null == r2 || 0 === a2.candidates.length)
    return t;
  const i$1 = r2.graphics3DGraphicsByObjectID ?? r2.graphics3DGraphics, c2 = [], o2 = [], { renderer: d2 } = r2, p = null != d2 && "arcadeRequired" in d2 && d2.arcadeRequired ? i() : null, l2 = async (n2, { graphic: e2, graphics3DSymbol: t2 }) => {
    const a3 = await p, i2 = await r2.getRenderingInfoAsync(e2, d2, a3, { signal: s });
    return null == i2 ? [] : t2.queryForSnapping(n2, g, i2, s);
  }, { candidates: u2, spatialReference: g } = a2;
  for (let n2 = 0; n2 < u2.length; ++n2) {
    const e2 = u2[n2], { objectId: r3 } = e2, t2 = "number" == typeof r3 ? i$1?.get(r3) : void 0;
    if (null == t2)
      continue;
    const { graphics3DSymbol: a3 } = t2;
    a3.symbologySnappingSupported && (c2.push(l2(e2, t2)), o2.push(n2));
  }
  if (0 === c2.length)
    return t;
  const h = await Promise.all(c2);
  s$1(s);
  const f = [], m2 = [];
  for (let n2 = 0; n2 < h.length; ++n2) {
    const e2 = h[n2], r3 = o2[n2];
    for (const n3 of e2)
      f.push(n3), m2.push(r3);
  }
  return { candidates: f, sourceCandidateIndices: m2 };
}
const t = { candidates: [], sourceCandidateIndices: [] };
export {
  c,
  r
};
