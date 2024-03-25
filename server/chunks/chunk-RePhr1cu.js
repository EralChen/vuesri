import { aO as s, ie as f$1, cC as c, id as u, ig as s$1, ih as u$1, ii as y$1, ij as g$1, b$ as u$2, ik as H } from "./chunk-ejFG4zJ0.js";
import { t, d as d$1, l, e } from "./chunk-0GVzsKqt.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const d = "picture-fill", f = "picture-marker", y = "simple-fill", g = "simple-line", w = "simple-marker", v = "text", x = "Aa", b = t.size, M = t.maxSize, k = t.maxOutlineSize, L = t.lineWidth, z = 225, j = document.createElement("canvas");
function C(e2, t2) {
  const a = j.getContext("2d"), o = [];
  t2 && (t2.weight && o.push(t2.weight), t2.size && o.push(t2.size + "px"), t2.family && o.push(t2.family)), a.font = o.join(" ");
  const { width: i, actualBoundingBoxLeft: l2, actualBoundingBoxRight: n, actualBoundingBoxAscent: s2, actualBoundingBoxDescent: r } = a.measureText(e2);
  return { width: Math.ceil(Math.max(i, l2 + n)), height: Math.ceil(s2 + r), x: Math.floor(l2), y: Math.floor((s2 - r) / 2) };
}
function S(e2) {
  const t2 = e2?.size;
  return { width: null != t2 && "object" == typeof t2 && "width" in t2 ? u(t2.width) : null, height: null != t2 && "object" == typeof t2 && "height" in t2 ? u(t2.height) : null };
}
async function B(e2, t2) {
  const a = t2.fill, o = e2.color;
  if ("pattern" === a?.type && o && e2.type !== d) {
    const e3 = await f$1(a.src, o.toCss(true));
    a.src = e3, t2.fill = a;
  }
}
async function U(e2, t2, a, i) {
  if (!("font" in e2) || !e2.font || "text" !== t2.shape.type)
    return;
  try {
    await c(e2.font);
  } catch {
  }
  const { width: l2, height: n } = S(i);
  if (!/[\uE600-\uE6FF]/.test(t2.shape.text)) {
    const { width: o, height: s2, x: r, y: c2 } = C(t2.shape.text, { weight: t2.font?.weight, size: t2.font?.size, family: t2.font?.family });
    a[0] = l2 ?? o, a[1] = n ?? s2, t2.shape.x = r, t2.shape.y = c2;
    const h = null != i?.rotation ? i.rotation : "angle" in e2 ? e2.angle : null;
    if (h) {
      const e3 = h * (Math.PI / 180), t3 = Math.abs(Math.sin(e3)), o2 = Math.abs(Math.cos(e3));
      a[1] = a[0] * t3 + a[1] * o2;
    }
  }
}
function E(e2, t2, a, o, l2) {
  if (null != e2.haloColor && null != e2.haloSize) {
    l2.masking ??= a.map(() => []);
    const n = u(e2.haloSize);
    o[0] += n, o[1] += n, a.unshift([{ ...t2, fill: null, stroke: { color: e2.haloColor, width: 2 * n, join: "round", cap: "round" } }]), l2.masking.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0] + 2 * s$1, height: o[1] + 2 * s$1 }, fill: [255, 255, 255], stroke: null }, { ...t2, fill: [0, 0, 0, 0], stroke: null }]);
  }
  null == e2.backgroundColor && null == e2.borderLineColor || (o[0] += 2 * s$1, o[1] += 2 * s$1, a.unshift([{ shape: { type: "rect", x: 0, y: 0, width: o[0], height: o[1] }, fill: e2.backgroundColor, stroke: { color: e2.borderLineColor, width: u(e2.borderLineSize) } }]), l2.masking?.unshift([]));
}
function F(e2, t2) {
  return e2 > t2 ? "dark" : "light";
}
function D(e$1, t2) {
  const a = "number" == typeof t2?.size ? t2?.size : null, o = null != a ? u(a) : null, r = null != t2?.maxSize ? u(t2.maxSize) : null, c2 = null != t2?.rotation ? t2.rotation : "angle" in e$1 ? e$1.angle : null, u$22 = u$1(e$1);
  let m = y$1(e$1);
  "dark" !== A(e$1, 245) || t2?.ignoreWhiteSymbols || (m = { width: 0.75, ...m, color: "#bdc3c7" });
  const p = { shape: null, fill: u$22, stroke: m, offset: [0, 0] };
  m?.width && (m.width = Math.min(m.width, k));
  const z2 = m?.width || 0;
  let j2 = null != t2?.size && (null == t2?.scale || t2?.scale), B2 = 0, U2 = 0, E2 = false;
  switch (e$1.type) {
    case w: {
      const a2 = e$1.style, { width: l2, height: n } = S(t2), s2 = l2 === n && null != l2 ? l2 : null != o ? o : Math.min(u(e$1.size), r || M);
      switch (B2 = s2, U2 = s2, a2) {
        case "circle":
          p.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * s2 }, j2 || (B2 += z2, U2 += z2);
          break;
        case "cross":
          p.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * U2] }, { command: "L", values: [B2, 0.5 * U2] }, { command: "M", values: [0.5 * B2, 0] }, { command: "L", values: [0.5 * B2, U2] }] };
          break;
        case "diamond":
          p.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * U2] }, { command: "L", values: [0.5 * B2, 0] }, { command: "L", values: [B2, 0.5 * U2] }, { command: "L", values: [0.5 * B2, U2] }, { command: "Z", values: [] }] }, j2 || (B2 += z2, U2 += z2);
          break;
        case "square":
          p.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [B2, 0] }, { command: "L", values: [B2, U2] }, { command: "L", values: [0, U2] }, { command: "Z", values: [] }] }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true);
          break;
        case "triangle":
          p.shape = { type: "path", path: [{ command: "M", values: [0.5 * B2, 0] }, { command: "L", values: [B2, U2] }, { command: "L", values: [0, U2] }, { command: "Z", values: [] }] }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true);
          break;
        case "x":
          p.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [B2, U2] }, { command: "M", values: [B2, 0] }, { command: "L", values: [0, U2] }] }, c2 && (E2 = true);
          break;
        case "path":
          p.shape = { type: "path", path: e$1.path || "" }, j2 || (B2 += z2, U2 += z2), c2 && (E2 = true), j2 = true;
      }
      break;
    }
    case g: {
      const { width: e2, height: a2 } = S(t2), i = g$1(m).reduce((e3, t3) => e3 + t3, 0), l2 = i && Math.ceil(L / i), n = a2 ?? o ?? z2, r2 = e2 ?? (i * l2 || L);
      m && (m.width = n), B2 = r2, U2 = n, j2 = true, p.shape = { type: "path", path: [{ command: "M", values: [n / 2, U2 / 2] }, { command: "L", values: [B2 - n / 2, U2 / 2] }] };
      break;
    }
    case d:
    case y: {
      const e$12 = "object" == typeof t2?.symbolConfig && !!t2?.symbolConfig?.isSquareFill, { width: a2, height: i } = S(t2);
      B2 = !e$12 && a2 !== i || null == a2 ? null != o ? o : b : a2, U2 = !e$12 && a2 !== i || null == i ? B2 : i, j2 || (B2 += z2, U2 += z2), j2 = true, p.shape = e$12 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [B2, 0] }, { command: "L", values: [B2, U2] }, { command: "L", values: [0, U2] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : e.fill[0];
      break;
    }
    case f: {
      const a2 = Math.min(u(e$1.width), r || M), l2 = Math.min(u(e$1.height), r || M), { width: n, height: s2 } = S(t2), h = n === s2 && null != n ? n : null != o ? o : Math.max(a2, l2), u$12 = a2 / l2;
      B2 = u$12 <= 1 ? Math.ceil(h * u$12) : h, U2 = u$12 <= 1 ? h : Math.ceil(h / u$12), p.shape = { type: "image", x: -Math.round(B2 / 2), y: -Math.round(U2 / 2), width: B2, height: U2, src: e$1.url || "" }, c2 && (E2 = true);
      break;
    }
    case v: {
      const a2 = e$1, l2 = t2?.overrideText || a2.text || x, n = a2.font, { width: s2, height: c3 } = S(t2), h = null != c3 ? c3 : null != o ? o : Math.min(u(n.size), r || M), { width: u$12, height: m2 } = C(l2, { weight: n.weight, size: h, family: n.family }), d2 = /[\uE600-\uE6FF]/.test(l2);
      B2 = s2 ?? (d2 ? h : u$12), U2 = d2 ? h : m2;
      let f2 = 0.5 * (d2 ? h : m2);
      d2 && (f2 += 5), p.shape = { type: "text", text: l2, x: a2.xoffset || 0, y: a2.yoffset || f2, align: "middle", alignBaseline: a2.verticalAlignment, decoration: n && n.decoration, rotated: a2.rotated, kerning: a2.kerning }, p.font = n && { size: h, style: n.style, decoration: n.decoration, weight: n.weight, family: n.family };
      break;
    }
  }
  return { shapeDescriptor: p, size: [B2, U2], renderOptions: { node: t2?.node, scale: j2, opacity: t2?.opacity, rotation: c2, useRotationSize: E2, effectView: t2?.effectView, ariaLabel: t2?.ariaLabel } };
}
async function Z(e2, t2) {
  const { shapeDescriptor: o, size: i, renderOptions: l$1 } = D(e2, t2);
  if (!o.shape)
    throw new s("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
  await B(e2, o), await U(e2, o, i, t2);
  const n = [[o]];
  if ("object" == typeof t2?.symbolConfig && t2?.symbolConfig?.applyColorModulation) {
    const e3 = 0.6 * i[0];
    n.unshift([{ ...o, offset: [-e3, 0], fill: d$1(o.fill, -0.3) }]), n.push([{ ...o, offset: [e3, 0], fill: d$1(o.fill, 0.3) }]), i[0] += 2 * e3, l$1.scale = false;
  }
  return "text" === e2.type && E(e2, o, n, i, l$1), l(n, i, l$1);
}
function A(a, o = z) {
  const i = u$1(a), s2 = y$1(a), r = !i || "type" in i ? null : new u$2(i), c2 = s2?.color ? new u$2(s2?.color) : null, h = r ? F(H(r), o) : null, u2 = c2 ? F(H(c2), o) : null;
  return u2 ? h ? h === u2 ? h : o >= z ? "light" : "dark" : u2 : h;
}
export {
  A as getContrastingBackgroundTheme,
  D as getRenderSymbolParameters,
  Z as previewSymbol2D
};
