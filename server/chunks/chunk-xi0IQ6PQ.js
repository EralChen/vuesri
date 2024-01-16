import { cc as c$1, ch as o } from "./chunk-KFNcxJaF.js";
const a = (o2) => "vertical" === o2 || "horizontal" === o2 || "cross" === o2 || "esriSFSCross" === o2 || "esriSFSVertical" === o2 || "esriSFSHorizontal" === o2;
function r(o2, r2, e2) {
  const i = c$1(Math.ceil(e2)), n = a(r2) ? 8 * i : 16 * i, s = 2 * i;
  o2.width = n, o2.height = n;
  const l = o2.getContext("2d");
  l.strokeStyle = "#FFFFFF", l.lineWidth = i, l.beginPath(), "vertical" !== r2 && "cross" !== r2 && "esriSFSCross" !== r2 && "esriSFSVertical" !== r2 || (l.moveTo(n / 2, -s), l.lineTo(n / 2, n + s)), "horizontal" !== r2 && "cross" !== r2 && "esriSFSCross" !== r2 && "esriSFSHorizontal" !== r2 || (l.moveTo(-s, n / 2), l.lineTo(n + s, n / 2)), "forward-diagonal" !== r2 && "diagonal-cross" !== r2 && "esriSFSDiagonalCross" !== r2 && "esriSFSForwardDiagonal" !== r2 || (l.moveTo(-s, -s), l.lineTo(n + s, n + s), l.moveTo(n - s, -s), l.lineTo(n + s, s), l.moveTo(-s, n - s), l.lineTo(s, n + s)), "backward-diagonal" !== r2 && "diagonal-cross" !== r2 && "esriSFSBackwardDiagonal" !== r2 && "esriSFSDiagonalCross" !== r2 || (l.moveTo(n + s, -s), l.lineTo(-s, n + s), l.moveTo(s, -s), l.lineTo(-s, s), l.moveTo(n + s, n - s), l.lineTo(n - s, n + s)), l.stroke();
  const h = l.getImageData(0, 0, o2.width, o2.height), c = new Uint8Array(h.data);
  let m;
  for (let t = 0; t < c.length; t += 4)
    m = c[t + 3] / 255, c[t] = c[t] * m, c[t + 1] = c[t + 1] * m, c[t + 2] = c[t + 2] * m;
  return [c, o2.width, o2.height];
}
function e(t, a2) {
  const r2 = "Butt" === a2, e2 = "Square" === a2, i = !r2 && !e2;
  t.length % 2 == 1 && (t = [...t, ...t]);
  const n = 15.5, s = 2 * n;
  let l = 0;
  for (const o2 of t)
    l += o2;
  const h = Math.round(l * n), c = new Float32Array(h * s), m = 0.5 * n;
  let S = 0, F = 0, g = 0.5, T = true;
  for (const o2 of t) {
    for (S = F, F += o2 * n; g <= F; ) {
      let o3 = 0.5;
      for (; o3 < s; ) {
        const t2 = (o3 - 0.5) * h + g - 0.5, a3 = i ? (o3 - n) * (o3 - n) : Math.abs(o3 - n);
        c[t2] = T ? r2 ? Math.max(Math.max(S + m - g, a3), Math.max(g - F + m, a3)) : a3 : i ? Math.min((g - S) * (g - S) + a3, (g - F) * (g - F) + a3) : e2 ? Math.min(Math.max(g - S, a3), Math.max(F - g, a3)) : Math.min(Math.max(g - S + m, a3), Math.max(F + m - g, a3)), o3++;
      }
      g++;
    }
    T = !T;
  }
  const d = c.length, f = new Uint8Array(4 * d);
  for (let M = 0; M < d; ++M) {
    const t2 = (i ? Math.sqrt(c[M]) : c[M]) / n;
    o(t2, f, 4 * M);
  }
  return [f, h, s];
}
export {
  e,
  r
};
