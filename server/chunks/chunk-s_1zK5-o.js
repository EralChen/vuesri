import { fj as r$1, aw as u$1, fk as x$1, fl as m } from "./chunk-KFNcxJaF.js";
function r(t, n, e, r2) {
  if (null == r2 || t.hasZ || (r2 = void 0), "point" === t.type)
    return t.x += n, t.y += e, t.hasZ && null != r2 && (t.z += r2), t;
  if ("multipoint" === t.type) {
    const o = t.points;
    for (let t2 = 0; t2 < o.length; t2++)
      o[t2] = l(o[t2], n, e, r2);
    return t;
  }
  if ("extent" === t.type)
    return t.xmin += n, t.xmax += n, t.ymin += e, t.ymax += e, null != r2 && (t.zmin ??= 0, t.zmin += r2, t.zmax ??= 0, t.zmax += r2), t;
  const i2 = r$1(t), s2 = "polyline" === t.type ? t.paths : t.rings;
  for (let o = 0; o < i2.length; o++) {
    const t2 = i2[o];
    for (let o2 = 0; o2 < t2.length; o2++)
      t2[o2] = l(t2[o2], n, e, r2);
  }
  return "paths" in t ? t.paths = s2 : t.rings = s2, t;
}
function i(t, n, e, i2, s2) {
  const a2 = t.clone(), m2 = i2.resolution;
  if ("point" === a2.type) {
    if (s2)
      r(a2, n * m2, -e * m2);
    else {
      const t2 = i2.state.transform, o = i2.state.inverseTransform, r2 = t2[0] * a2.x + t2[2] * a2.y + t2[4], s3 = t2[1] * a2.x + t2[3] * a2.y + t2[5];
      a2.x = o[0] * (r2 + n) + o[2] * (s3 + e) + o[4], a2.y = o[1] * (r2 + n) + o[3] * (s3 + e) + o[5];
    }
    return a2;
  }
  if ("multipoint" === a2.type) {
    if (s2)
      r(a2, n * m2, -e * m2);
    else {
      const t2 = a2.points, o = i2.state.transform, r2 = i2.state.inverseTransform;
      for (let i3 = 0; i3 < t2.length; i3++) {
        const s3 = t2[i3], a3 = o[0] * s3[0] + o[2] * s3[1] + o[4], m3 = o[1] * s3[0] + o[3] * s3[1] + o[5], l2 = r2[0] * (a3 + n) + r2[2] * (m3 + e) + r2[4], p = r2[1] * (a3 + n) + r2[3] * (m3 + e) + r2[5];
        t2[i3] = x(s3, l2, p, void 0);
      }
    }
    return a2;
  }
  if ("extent" === a2.type) {
    if (s2)
      r(a2, n * m2, -e * m2);
    else {
      const t2 = i2.state.transform, o = i2.state.inverseTransform, r2 = t2[0] * a2.xmin + t2[2] * a2.ymin + t2[4], s3 = t2[1] * a2.xmin + t2[3] * a2.ymin + t2[5], m3 = t2[0] * a2.xmax + t2[2] * a2.ymax + t2[4], l2 = t2[1] * a2.xmax + t2[3] * a2.ymax + t2[5];
      a2.xmin = o[0] * (r2 + n) + o[2] * (s3 + e) + o[4], a2.ymin = o[1] * (r2 + n) + o[3] * (s3 + e) + o[5], a2.xmax = o[0] * (m3 + n) + o[2] * (l2 + e) + o[4], a2.ymax = o[1] * (m3 + n) + o[3] * (l2 + e) + o[5];
    }
    return a2;
  }
  if (s2)
    r(a2, n * m2, -e * m2);
  else {
    const t2 = r$1(a2), r2 = "polyline" === a2.type ? a2.paths : a2.rings, s3 = i2.state.transform, m3 = i2.state.inverseTransform;
    for (let o = 0; o < t2.length; o++) {
      const r3 = t2[o];
      for (let t3 = 0; t3 < r3.length; t3++) {
        const o2 = r3[t3], i3 = s3[0] * o2[0] + s3[2] * o2[1] + s3[4], a3 = s3[1] * o2[0] + s3[3] * o2[1] + s3[5], l2 = m3[0] * (i3 + n) + m3[2] * (a3 + e) + m3[4], p = m3[1] * (i3 + n) + m3[3] * (a3 + e) + m3[5];
        r3[t3] = x(o2, l2, p, void 0);
      }
    }
    "paths" in a2 ? a2.paths = r2 : a2.rings = r2;
  }
  return a2;
}
function s(t, r2, i2, s2) {
  if ("point" === t.type) {
    const { x: n, y: e } = t, o = s2 ? s2[0] : n, a3 = s2 ? s2[1] : e, m3 = t.clone(), l3 = (n - o) * r2 + o, x2 = (e - a3) * i2 + a3;
    return m3.x = l3, m3.y = x2, m3;
  }
  if ("multipoint" === t.type) {
    const a3 = r$1(t), m3 = u$1(), [l3, p2, y2, f2] = x$1(m3, [a3]), u2 = s2 ? s2[0] : (l3 + y2) / 2, c2 = s2 ? s2[1] : (f2 + p2) / 2, h2 = t.clone(), g2 = h2.points;
    for (let t2 = 0; t2 < g2.length; t2++) {
      const n = g2[t2], [e, o] = n, s3 = (e - u2) * r2 + u2, a4 = (o - c2) * i2 + c2;
      g2[t2] = x(n, s3, a4, void 0);
    }
    return h2;
  }
  if ("extent" === t.type) {
    const { xmin: n, xmax: e, ymin: o, ymax: a3 } = t, m3 = s2 ? s2[0] : (n + e) / 2, l3 = s2 ? s2[1] : (a3 + o) / 2, x2 = t.clone();
    if (x2.xmin = (n - m3) * r2 + m3, x2.ymax = (a3 - l3) * i2 + l3, x2.xmax = (e - m3) * r2 + m3, x2.ymin = (o - l3) * i2 + l3, x2.xmin > x2.xmax) {
      const t2 = x2.xmin, n2 = x2.xmax;
      x2.xmin = n2, x2.xmax = t2;
    }
    if (x2.ymin > x2.ymax) {
      const t2 = x2.ymin, n2 = x2.ymax;
      x2.ymin = n2, x2.ymax = t2;
    }
    return x2;
  }
  const a2 = r$1(t), m2 = u$1(), [l2, p, y, f] = x$1(m2, a2), u = s2 ? s2[0] : (l2 + y) / 2, c = s2 ? s2[1] : (f + p) / 2, h = t.clone(), g = "polyline" === h.type ? h.paths : h.rings;
  for (let n = 0; n < a2.length; n++) {
    const t2 = a2[n];
    for (let e = 0; e < t2.length; e++) {
      const o = t2[e], [s3, a3] = o, m3 = (s3 - u) * r2 + u, l3 = (a3 - c) * i2 + c;
      g[n][e] = x(o, m3, l3, void 0);
    }
  }
  return "paths" in h ? h.paths = g : h.rings = g, h;
}
function a(t, n, e, o, r2, i2) {
  const s2 = Math.sqrt((e - t) * (e - t) + (o - n) * (o - n));
  return Math.sqrt((r2 - t) * (r2 - t) + (i2 - n) * (i2 - n)) / s2;
}
function m$1(n, e, o, r2 = false) {
  const i2 = Math.atan2(e.y - o.y, e.x - o.x) - Math.atan2(n.y - o.y, n.x - o.x), s2 = Math.atan2(Math.sin(i2), Math.cos(i2));
  return r2 ? s2 : m(s2);
}
function l(t, n, e, o) {
  return x(t, t[0] + n, t[1] + e, null != t[2] && null != o ? t[2] + o : void 0);
}
function x(t, n, e, o) {
  const r2 = [n, e];
  return t.length > 2 && r2.push(null != o ? o : t[2]), t.length > 3 && r2.push(t[3]), r2;
}
export {
  a,
  i,
  m$1 as m,
  r,
  s
};
