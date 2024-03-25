function t(t2, n2) {
  return t2 ? n2 ? 4 : 3 : n2 ? 3 : 2;
}
function n(n2, I2, u2, o2) {
  if (!I2?.lengths.length)
    return null;
  n2.lengths.length && (n2.lengths.length = 0), n2.coords.length && (n2.coords.length = 0);
  const N2 = n2.coords, l = [], s = u2 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: c, coords: T } = I2, f = t(u2, o2);
  let h = 0;
  for (const t2 of c) {
    const n3 = e(s, T, h, t2, u2, o2);
    n3 && l.push(n3), h += t2 * f;
  }
  if (l.sort((t2, n3) => {
    let e2 = t2[2] - n3[2];
    return 0 === e2 && u2 && (e2 = t2[4] - n3[4]), e2;
  }), l.length) {
    let t2 = 6 * l[0][2];
    N2[0] = l[0][0] / t2, N2[1] = l[0][1] / t2, u2 && (t2 = 6 * l[0][4], N2[2] = 0 !== t2 ? l[0][3] / t2 : 0), (N2[0] < s[0] || N2[0] > s[1] || N2[1] < s[2] || N2[1] > s[3] || u2 && (N2[2] < s[4] || N2[2] > s[5])) && (N2.length = 0);
  }
  if (!N2.length) {
    const t2 = I2.lengths[0] ? r(T, 0, c[0], u2, o2) : null;
    if (!t2)
      return null;
    N2[0] = t2[0], N2[1] = t2[1], u2 && t2.length > 2 && (N2[2] = t2[2]);
  }
  return n2;
}
function e(n2, e2, r2, I2, u2, o2) {
  const N2 = t(u2, o2);
  let l = r2, s = r2 + N2, c = 0, T = 0, f = 0, h = 0, i = 0;
  for (let t2 = 0, g = I2 - 1; t2 < g; t2++, l += N2, s += N2) {
    const t3 = e2[l], r3 = e2[l + 1], I3 = e2[l + 2], o3 = e2[s], N3 = e2[s + 1], E2 = e2[s + 2];
    let g2 = t3 * N3 - o3 * r3;
    h += g2, c += (t3 + o3) * g2, T += (r3 + N3) * g2, u2 && (g2 = t3 * E2 - o3 * I3, f += (I3 + E2) * g2, i += g2), t3 < n2[0] && (n2[0] = t3), t3 > n2[1] && (n2[1] = t3), r3 < n2[2] && (n2[2] = r3), r3 > n2[3] && (n2[3] = r3), u2 && (I3 < n2[4] && (n2[4] = I3), I3 > n2[5] && (n2[5] = I3));
  }
  if (h > 0 && (h *= -1), i > 0 && (i *= -1), !h)
    return null;
  const E = [c, T, 0.5 * h];
  return u2 && (E[3] = f, E[4] = 0.5 * i), E;
}
function r(n2, e2, r2, l, s) {
  const c = t(l, s);
  let T = e2, f = e2 + c, h = 0, i = 0, E = 0, g = 0;
  for (let t2 = 0, b = r2 - 1; t2 < b; t2++, T += c, f += c) {
    const t3 = n2[T], e3 = n2[T + 1], r3 = n2[T + 2], s2 = n2[f], c2 = n2[f + 1], b2 = n2[f + 2], m = l ? u(t3, e3, r3, s2, c2, b2) : I(t3, e3, s2, c2);
    if (m)
      if (h += m, l) {
        const n3 = N(t3, e3, r3, s2, c2, b2);
        i += m * n3[0], E += m * n3[1], g += m * n3[2];
      } else {
        const n3 = o(t3, e3, s2, c2);
        i += m * n3[0], E += m * n3[1];
      }
  }
  return h > 0 ? l ? [i / h, E / h, g / h] : [i / h, E / h] : r2 > 0 ? l ? [n2[e2], n2[e2 + 1], n2[e2 + 2]] : [n2[e2], n2[e2 + 1]] : null;
}
function I(t2, n2, e2, r2) {
  const I2 = e2 - t2, u2 = r2 - n2;
  return Math.sqrt(I2 * I2 + u2 * u2);
}
function u(t2, n2, e2, r2, I2, u2) {
  const o2 = r2 - t2, N2 = I2 - n2, l = u2 - e2;
  return Math.sqrt(o2 * o2 + N2 * N2 + l * l);
}
function o(t2, n2, e2, r2) {
  return [t2 + 0.5 * (e2 - t2), n2 + 0.5 * (r2 - n2)];
}
function N(t2, n2, e2, r2, I2, u2) {
  return [t2 + 0.5 * (r2 - t2), n2 + 0.5 * (I2 - n2), e2 + 0.5 * (u2 - e2)];
}
export {
  n
};
