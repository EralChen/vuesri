import { bd as m$1, cx as $, cy as o, cz as t } from "./chunk-ejFG4zJ0.js";
function e(t2) {
  switch (t2.type) {
    case "CIMPointSymbol": {
      const o2 = t2.symbolLayers;
      if (!o2 || 1 !== o2.length)
        return null;
      const n = o2[0];
      return "CIMVectorMarker" !== n.type ? null : e(n);
    }
    case "CIMVectorMarker": {
      const o2 = t2.markerGraphics;
      if (!o2 || 1 !== o2.length)
        return null;
      const n = o2[0];
      if (!n)
        return null;
      const r = n.geometry;
      if (!r)
        return null;
      const e2 = n.symbol;
      return !e2 || "CIMPolygonSymbol" !== e2.type && "CIMLineSymbol" !== e2.type || e2.symbolLayers?.some((t3) => !!t3.effects) ? null : { type: "sdf", geom: r, asFill: "CIMPolygonSymbol" === e2.type };
    }
  }
}
function l(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : void 0 !== t2.xmin && void 0 !== t2.ymin && void 0 !== t2.xmax && void 0 !== t2.ymax ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function i(t$1) {
  let o2 = 1 / 0, r = -1 / 0, e2 = 1 / 0, l2 = -1 / 0;
  for (const n of t$1)
    for (const t2 of n)
      t2[0] < o2 && (o2 = t2[0]), t2[0] > r && (r = t2[0]), t2[1] < e2 && (e2 = t2[1]), t2[1] > l2 && (l2 = t2[1]);
  return new t(o2, e2, r - o2, l2 - e2);
}
function s(t2) {
  let o2 = 1 / 0, n = -1 / 0, r = 1 / 0, e2 = -1 / 0;
  for (const l2 of t2)
    for (const t3 of l2)
      t3[0] < o2 && (o2 = t3[0]), t3[0] > n && (n = t3[0]), t3[1] < r && (r = t3[1]), t3[1] > e2 && (e2 = t3[1]);
  return [o2, r, n, e2];
}
function f(t2) {
  return t2 ? t2.rings ? s(t2.rings) : t2.paths ? s(t2.paths) : m$1(t2) ? [t2.xmin, t2.ymin, t2.xmax, t2.ymax] : null : null;
}
function m(t2, o2, n, e2, l2) {
  const [i2, s2, f2, m2] = t2;
  if (f2 < i2 || m2 < s2)
    return [0, 0, 0, 1];
  const a2 = f2 - i2, c2 = m2 - s2, u2 = 128, y2 = $, h = Math.floor(0.5 * (0.5 * u2 - y2)), x = (u2 - 2 * (h + y2)) / Math.max(a2, c2), M = Math.round(a2 * x) + 2 * h, p = Math.round(c2 * x) + 2 * h;
  let g = 1;
  if (o2) {
    g = p / x / (o2.ymax - o2.ymin);
  }
  let d = 0, b = 0, w = 1;
  e2 && (l2 ? o2 && n && o2.ymax - o2.ymin > 0 && (w = (o2.xmax - o2.xmin) / (o2.ymax - o2.ymin), d = e2.x / (n * w), b = e2.y / n) : (d = e2.x, b = e2.y)), o2 && (d = 0.5 * (o2.xmax + o2.xmin) + d * (o2.xmax - o2.xmin), b = 0.5 * (o2.ymax + o2.ymin) + b * (o2.ymax - o2.ymin)), d -= i2, b -= s2, d *= x, b *= x, d += h, b += h;
  let C = d / M - 0.5, I = b / p - 0.5;
  return l2 && n && (C *= n * w, I *= n), [g, C, I, w];
}
function a(t2) {
  const o2 = l(t2.geom), n = i(o2), e2 = 128, s2 = $, f2 = Math.floor(0.5 * (0.5 * e2 - s2)), m2 = (e2 - 2 * (f2 + s2)) / Math.max(n.width, n.height), a2 = Math.round(n.width * m2) + 2 * f2, h = Math.round(n.height * m2) + 2 * f2, x = [];
  for (const r of o2)
    if (r && r.length > 1) {
      const o3 = [];
      for (const e3 of r) {
        let [r2, l2] = e3;
        r2 -= n.x, l2 -= n.y, r2 *= m2, l2 *= m2, r2 += f2 - 0.5, l2 += f2 - 0.5, t2.asFill ? o3.push([r2, l2]) : o3.push([Math.round(r2), Math.round(l2)]);
      }
      if (t2.asFill) {
        const t3 = o3.length - 1;
        o3[0][0] === o3[t3][0] && o3[0][1] === o3[t3][1] || o3.push(o3[0]);
      }
      x.push(o3);
    }
  const M = c(x, a2, h, f2);
  return t2.asFill && u(x, a2, h, f2, M), [y(M, f2), a2, h];
}
function c(t2, o2, n, r) {
  const e2 = o2 * n, l2 = new Array(e2), i2 = r * r + 1;
  for (let s2 = 0; s2 < e2; ++s2)
    l2[s2] = i2;
  for (const s2 of t2) {
    const t3 = s2.length;
    for (let e3 = 1; e3 < t3; ++e3) {
      const t4 = s2[e3 - 1], i3 = s2[e3];
      let f2, m2, a2, c2;
      t4[0] < i3[0] ? (f2 = t4[0], m2 = i3[0]) : (f2 = i3[0], m2 = t4[0]), t4[1] < i3[1] ? (a2 = t4[1], c2 = i3[1]) : (a2 = i3[1], c2 = t4[1]);
      let u2 = Math.floor(f2) - r, y2 = Math.floor(m2) + r, h = Math.floor(a2) - r, x = Math.floor(c2) + r;
      u2 < 0 && (u2 = 0), y2 > o2 && (y2 = o2), h < 0 && (h = 0), x > n && (x = n);
      const M = i3[0] - t4[0], p = i3[1] - t4[1], g = M * M + p * p;
      for (let r2 = u2; r2 < y2; r2++)
        for (let e4 = h; e4 < x; e4++) {
          let s3, f3, m3 = (r2 - t4[0]) * M + (e4 - t4[1]) * p;
          m3 < 0 ? (s3 = t4[0], f3 = t4[1]) : m3 > g ? (s3 = i3[0], f3 = i3[1]) : (m3 /= g, s3 = t4[0] + m3 * M, f3 = t4[1] + m3 * p);
          const a3 = (r2 - s3) * (r2 - s3) + (e4 - f3) * (e4 - f3), c3 = (n - e4 - 1) * o2 + r2;
          a3 < l2[c3] && (l2[c3] = a3);
        }
    }
  }
  for (let s2 = 0; s2 < e2; ++s2)
    l2[s2] = Math.sqrt(l2[s2]);
  return l2;
}
function u(t2, o2, n, r, e2) {
  for (const l2 of t2) {
    const t3 = l2.length;
    for (let i2 = 1; i2 < t3; ++i2) {
      const t4 = l2[i2 - 1], s2 = l2[i2];
      let f2, m2, a2, c2;
      t4[0] < s2[0] ? (f2 = t4[0], m2 = s2[0]) : (f2 = s2[0], m2 = t4[0]), t4[1] < s2[1] ? (a2 = t4[1], c2 = s2[1]) : (a2 = s2[1], c2 = t4[1]);
      let u2 = Math.floor(f2), y2 = Math.floor(m2) + 1, h = Math.floor(a2), x = Math.floor(c2) + 1;
      u2 < r && (u2 = r), y2 > o2 - r && (y2 = o2 - r), h < r && (h = r), x > n - r && (x = n - r);
      for (let l3 = h; l3 < x; ++l3) {
        if (t4[1] > l3 == s2[1] > l3)
          continue;
        const i3 = (n - l3 - 1) * o2;
        for (let o3 = u2; o3 < y2; ++o3)
          o3 < (s2[0] - t4[0]) * (l3 - t4[1]) / (s2[1] - t4[1]) + t4[0] && (e2[i3 + o3] = -e2[i3 + o3]);
        for (let t5 = r; t5 < u2; ++t5)
          e2[i3 + t5] = -e2[i3 + t5];
      }
    }
  }
}
function y(o$1, n) {
  const r = 2 * n, e2 = o$1.length, l2 = new Uint8Array(4 * e2);
  for (let i2 = 0; i2 < e2; ++i2) {
    const n2 = 0.5 - o$1[i2] / r;
    o(n2, l2, 4 * i2);
  }
  return l2;
}
export {
  a,
  e,
  f,
  m
};
