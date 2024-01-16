import { h2 as t$1, hS as t$2 } from "./chunk-KFNcxJaF.js";
function t(t2, n2) {
  return t2 ? n2 ? 4 : 3 : n2 ? 3 : 2;
}
function n(n2, I2, o2, u2, N2) {
  if (!I2?.lengths.length)
    return null;
  const l = "upperLeft" === N2?.originPosition ? -1 : 1;
  n2.lengths.length && (n2.lengths.length = 0), n2.coords.length && (n2.coords.length = 0);
  const s = n2.coords, c = [], f = o2 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: T, coords: i } = I2, h = t(o2, u2);
  let g = 0;
  for (const t2 of T) {
    const n3 = e(f, i, g, t2, o2, u2, l);
    n3 && c.push(n3), g += t2 * h;
  }
  if (c.sort((t2, n3) => {
    let e2 = l * t2[2] - l * n3[2];
    return 0 === e2 && o2 && (e2 = t2[4] - n3[4]), e2;
  }), c.length) {
    let t2 = 6 * c[0][2];
    s[0] = c[0][0] / t2, s[1] = c[0][1] / t2, o2 && (t2 = 6 * c[0][4], s[2] = 0 !== t2 ? c[0][3] / t2 : 0), (s[0] < f[0] || s[0] > f[1] || s[1] < f[2] || s[1] > f[3] || o2 && (s[2] < f[4] || s[2] > f[5])) && (s.length = 0);
  }
  if (!s.length) {
    const t2 = I2.lengths[0] ? r(i, 0, T[0], o2, u2) : null;
    if (!t2)
      return null;
    s[0] = t2[0], s[1] = t2[1], o2 && t2.length > 2 && (s[2] = t2[2]);
  }
  return n2;
}
function e(n2, e2, r2, I2, o2, u2, N2 = 1) {
  const l = t(o2, u2);
  let s = r2, c = r2 + l, f = 0, T = 0, i = 0, h = 0, g = 0;
  for (let t2 = 0, b = I2 - 1; t2 < b; t2++, s += l, c += l) {
    const t3 = e2[s], r3 = e2[s + 1], I3 = e2[s + 2], u3 = e2[c], N3 = e2[c + 1], l2 = e2[c + 2];
    let E2 = t3 * N3 - u3 * r3;
    h += E2, f += (t3 + u3) * E2, T += (r3 + N3) * E2, o2 && (E2 = t3 * l2 - u3 * I3, i += (I3 + l2) * E2, g += E2), t3 < n2[0] && (n2[0] = t3), t3 > n2[1] && (n2[1] = t3), r3 < n2[2] && (n2[2] = r3), r3 > n2[3] && (n2[3] = r3), o2 && (I3 < n2[4] && (n2[4] = I3), I3 > n2[5] && (n2[5] = I3));
  }
  if (h * N2 > 0 && (h *= -1), g * N2 > 0 && (g *= -1), !h)
    return null;
  const E = [f, T, 0.5 * h];
  return o2 && (E[3] = i, E[4] = 0.5 * g), E;
}
function r(n2, e2, r2, l, s) {
  const c = t(l, s);
  let f = e2, T = e2 + c, i = 0, h = 0, g = 0, E = 0;
  for (let t2 = 0, b = r2 - 1; t2 < b; t2++, f += c, T += c) {
    const t3 = n2[f], e3 = n2[f + 1], r3 = n2[f + 2], s2 = n2[T], c2 = n2[T + 1], b2 = n2[T + 2], m = l ? o$1(t3, e3, r3, s2, c2, b2) : I(t3, e3, s2, c2);
    if (m)
      if (i += m, l) {
        const n3 = N(t3, e3, r3, s2, c2, b2);
        h += m * n3[0], g += m * n3[1], E += m * n3[2];
      } else {
        const n3 = u(t3, e3, s2, c2);
        h += m * n3[0], g += m * n3[1];
      }
  }
  return i > 0 ? l ? [h / i, g / i, E / i] : [h / i, g / i] : r2 > 0 ? l ? [n2[e2], n2[e2 + 1], n2[e2 + 2]] : [n2[e2], n2[e2 + 1]] : null;
}
function I(t2, n2, e2, r2) {
  const I2 = e2 - t2, o2 = r2 - n2;
  return Math.sqrt(I2 * I2 + o2 * o2);
}
function o$1(t2, n2, e2, r2, I2, o2) {
  const u2 = r2 - t2, N2 = I2 - n2, l = o2 - e2;
  return Math.sqrt(u2 * u2 + N2 * N2 + l * l);
}
function u(t2, n2, e2, r2) {
  return [t2 + 0.5 * (e2 - t2), n2 + 0.5 * (r2 - n2)];
}
function N(t2, n2, e2, r2, I2, o2) {
  return [t2 + 0.5 * (r2 - t2), n2 + 0.5 * (I2 - n2), e2 + 0.5 * (o2 - e2)];
}
const o = { getObjectId: (t2) => t2.objectId, getAttributes: (t2) => t2.attributes, getAttribute: (t2, e2) => t2.attributes[e2], cloneWithGeometry: (t2, r2) => new t$1(r2, t2.attributes, null, t2.objectId), getGeometry: (t2) => t2.geometry, getCentroid: (e2, o2) => (null == e2.centroid && (e2.centroid = n(new t$2(), e2.geometry, o2.hasZ, o2.hasM)), e2.centroid) };
export {
  n,
  o
};
