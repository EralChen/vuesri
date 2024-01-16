const c = new Float64Array(2), f = new Float64Array(2), i = "0123456789bcdefghjkmnpqrstuvwxyz";
function g(t) {
  return i[t];
}
function A(t) {
  return (t[0] + t[1]) / 2;
}
function d(t, n, o) {
  return t[0] = n, t[1] = o, t;
}
function M(t, n) {
  const o = A(t), e = n, r = !n;
  t[0] = r * t[0] + e * o, t[1] = r * o + e * t[1];
}
function w(t, n) {
  const o = n > A(t);
  return M(t, o), o;
}
function X(t, n) {
  let o = -90, e = 90, r = -180, c2 = 180;
  for (let f2 = 0; f2 < n; f2++) {
    const n2 = Math.ceil((f2 + 1) / 2), l = Math.floor((f2 + 1) / 2), u = 1 - f2 % 2, h = 30 - (3 * n2 + 2 * l), s = 30 - (2 * n2 + 3 * l), i2 = 3 * u + 2 * (1 - u), a = 2 * u + 3 * (1 - u), g2 = 3 * u + 7 * (1 - u) << s, A2 = (7 * u + 3 * (1 - u) << h & t.geohashX) >> h, d2 = (g2 & t.geohashY) >> s;
    for (let t2 = i2 - 1; t2 >= 0; t2--) {
      const n3 = (r + c2) / 2, o2 = A2 & 1 << t2 ? 1 : 0;
      r = (1 - o2) * r + o2 * n3, c2 = (1 - o2) * n3 + o2 * c2;
    }
    for (let t2 = a - 1; t2 >= 0; t2--) {
      const n3 = (o + e) / 2, r2 = d2 & 1 << t2 ? 1 : 0;
      o = (1 - r2) * o + r2 * n3, e = (1 - r2) * n3 + r2 * e;
    }
  }
  return [r, o, c2, e];
}
function Y(t, n, o, e) {
  e % 2 && (e += 1);
  let r = 0, c2 = 0, f2 = -90, l = 90, u = -180, h = 180;
  for (let s = 0; s < e / 2; s++) {
    for (let t2 = 0; t2 < 5; t2++) {
      const n2 = (u + h) / 2, e2 = o > n2 ? 1 : 0;
      r |= e2 << 29 - (t2 + 5 * s), u = (1 - e2) * u + e2 * n2, h = (1 - e2) * n2 + e2 * h;
    }
    for (let t2 = 0; t2 < 5; t2++) {
      const o2 = (f2 + l) / 2, e2 = n > o2 ? 1 : 0;
      c2 |= e2 << 29 - (t2 + 5 * s), f2 = (1 - e2) * f2 + e2 * o2, l = (1 - e2) * o2 + e2 * l;
    }
  }
  t.geohashX = r, t.geohashY = c2;
}
function b(t, n, o, e, r) {
  r % 2 && (r += 1);
  let c2 = 0, f2 = 0, l = -90, u = 90, h = -180, s = 180;
  for (let i2 = 0; i2 < r / 2; i2++) {
    for (let t2 = 0; t2 < 5; t2++) {
      const n2 = (h + s) / 2, o2 = e > n2 ? 1 : 0;
      c2 |= o2 << 29 - (t2 + 5 * i2), h = (1 - o2) * h + o2 * n2, s = (1 - o2) * n2 + o2 * s;
    }
    for (let t2 = 0; t2 < 5; t2++) {
      const n2 = (l + u) / 2, e2 = o > n2 ? 1 : 0;
      f2 |= e2 << 29 - (t2 + 5 * i2), l = (1 - e2) * l + e2 * n2, u = (1 - e2) * n2 + e2 * u;
    }
  }
  t[2 * n] = c2, t[2 * n + 1] = f2;
}
function p(t, n, o) {
  let e = "";
  const r = d(c, -90, 90), l = d(f, -180, 180);
  for (let c2 = 0; c2 < o; c2++) {
    let o2 = 0;
    !(c2 % 2) ? (o2 |= w(l, n) << 4, o2 |= w(r, t) << 3, o2 |= w(l, n) << 2, o2 |= w(r, t) << 1, o2 |= w(l, n) << 0) : (o2 |= w(r, t) << 4, o2 |= w(l, n) << 3, o2 |= w(r, t) << 2, o2 |= w(l, n) << 1, o2 |= w(r, t) << 0), e += g(o2);
  }
  return e;
}
export {
  X,
  Y,
  b,
  p
};
