import { aM as s$1, hq as h, b_ as c, h8 as u, hr as s, hs as f$1, ht as y$1, bu as u$1, hu as H, fs as e$1 } from "./chunk-KFNcxJaF.js";
import { t, d as d$1, l, e } from "./chunk-y_FkjZn_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const d = "picture-fill", f = "picture-marker", y = "simple-fill", g = "simple-line", w = "simple-marker", v = "text", b = "Aa", k = t.size, x = t.maxSize, z = t.maxOutlineSize, L = t.lineWidth, M = 225, j = document.createElement("canvas");
function C(e2, t2) {
  const a = j.getContext("2d"), n = [];
  return t2 && (t2.weight && n.push(t2.weight), t2.size && n.push(t2.size + "px"), t2.family && n.push(t2.family)), a.font = n.join(" "), a.measureText(e2).width;
}
const S = 7.2 / 2.54, F = 72 / 2.54;
function U(e2) {
  if (0 === e2.length)
    return 0;
  if (e2.length > 2) {
    const t2 = e$1(1), a = parseFloat(e2);
    switch (e2.slice(-2)) {
      case "px":
        return a;
      case "pt":
        return a * t2;
      case "in":
        return 72 * a * t2;
      case "pc":
        return 12 * a * t2;
      case "mm":
        return a * S * t2;
      case "cm":
        return a * F * t2;
    }
  }
  return parseFloat(e2);
}
function E(e2) {
  const t2 = e2?.size;
  return { width: null != t2 && "object" == typeof t2 && "width" in t2 ? u(t2.width) : null, height: null != t2 && "object" == typeof t2 && "height" in t2 ? u(t2.height) : null };
}
async function Z(e2, t2) {
  const a = t2.fill, n = e2.color;
  if ("pattern" === a?.type && n && e2.type !== d) {
    const e3 = await h(a.src, n.toCss(true));
    a.src = e3, t2.fill = a;
  }
}
async function q(e2, t2, a, l2) {
  if (!("font" in e2) || !e2.font || "text" !== t2.shape.type)
    return;
  try {
    await c(e2.font);
  } catch {
  }
  const { width: o } = E(l2), i = /[\uE600-\uE6FF]/.test(t2.shape.text);
  null != o || i || (a[0] = C(t2.shape.text, { weight: t2.font?.weight, size: t2.font?.size, family: t2.font?.family }));
}
function D(e2, t2, a, n, o) {
  if (null != e2.haloColor && null != e2.haloSize) {
    o.masking ??= a.map(() => []);
    const i = u(e2.haloSize);
    n[0] += i, n[1] += i, a.unshift([{ ...t2, fill: null, stroke: { color: e2.haloColor, width: 2 * i, join: "round", cap: "round" } }]), o.masking.unshift([{ shape: { type: "rect", x: 0, y: 0, width: n[0] + 2 * s, height: n[1] + 2 * s }, fill: [255, 255, 255], stroke: null }, { ...t2, fill: [0, 0, 0, 0], stroke: null }]);
  }
  null == e2.backgroundColor && null == e2.borderLineColor || (n[0] += 2 * s, n[1] += 2 * s, a.unshift([{ shape: { type: "rect", x: 0, y: 0, width: n[0], height: n[1] }, fill: e2.backgroundColor, stroke: { color: e2.borderLineColor, width: u(e2.borderLineSize) } }]), o.masking?.unshift([]));
}
function O(e2, t2) {
  return e2 > t2 ? "dark" : "light";
}
function T(e$12, t2) {
  const a = "number" == typeof t2?.size ? t2?.size : null, n = null != a ? u(a) : null, o = null != t2?.maxSize ? u(t2.maxSize) : null, r = null != t2?.rotation ? t2.rotation : "angle" in e$12 ? e$12.angle : null, c2 = f$1(e$12);
  let h2 = y$1(e$12);
  "dark" !== P(e$12, 245) || t2?.ignoreWhiteSymbols || (h2 = { width: 0.75, ...h2, color: "#bdc3c7" });
  const m = { shape: null, fill: c2, stroke: h2, offset: [0, 0] };
  h2?.width && (h2.width = Math.min(h2.width, z));
  const p = h2?.width || 0;
  let M2 = null != t2?.size && (null == t2?.scale || t2?.scale), j2 = 0, S2 = 0, F2 = false;
  switch (e$12.type) {
    case w: {
      const a2 = e$12.style, { width: i, height: s2 } = E(t2), c3 = i === s2 && null != i ? i : null != n ? n : Math.min(u(e$12.size), o || x);
      switch (j2 = c3, S2 = c3, a2) {
        case "circle":
          m.shape = { type: "circle", cx: 0, cy: 0, r: 0.5 * c3 }, M2 || (j2 += p, S2 += p);
          break;
        case "cross":
          m.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * S2] }, { command: "L", values: [j2, 0.5 * S2] }, { command: "M", values: [0.5 * j2, 0] }, { command: "L", values: [0.5 * j2, S2] }] };
          break;
        case "diamond":
          m.shape = { type: "path", path: [{ command: "M", values: [0, 0.5 * S2] }, { command: "L", values: [0.5 * j2, 0] }, { command: "L", values: [j2, 0.5 * S2] }, { command: "L", values: [0.5 * j2, S2] }, { command: "Z", values: [] }] }, M2 || (j2 += p, S2 += p);
          break;
        case "square":
          m.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [j2, 0] }, { command: "L", values: [j2, S2] }, { command: "L", values: [0, S2] }, { command: "Z", values: [] }] }, M2 || (j2 += p, S2 += p), r && (F2 = true);
          break;
        case "triangle":
          m.shape = { type: "path", path: [{ command: "M", values: [0.5 * j2, 0] }, { command: "L", values: [j2, S2] }, { command: "L", values: [0, S2] }, { command: "Z", values: [] }] }, M2 || (j2 += p, S2 += p), r && (F2 = true);
          break;
        case "x":
          m.shape = { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [j2, S2] }, { command: "M", values: [j2, 0] }, { command: "L", values: [0, S2] }] }, r && (F2 = true);
          break;
        case "path":
          m.shape = { type: "path", path: e$12.path || "" }, M2 || (j2 += p, S2 += p), r && (F2 = true), M2 = true;
      }
      break;
    }
    case g: {
      const { width: e2, height: a2 } = E(t2), l2 = null != a2 ? a2 : null != n ? n : p, o2 = null != e2 ? e2 : L;
      h2 && (h2.width = l2), j2 = o2, S2 = l2;
      const i = m?.stroke?.cap || "butt", s2 = "round" === i;
      M2 = true, m.stroke && (m.stroke.cap = "butt" === i ? "square" : i), m.shape = { type: "path", path: [{ command: "M", values: [s2 ? l2 / 2 : 0, S2 / 2] }, { command: "L", values: [s2 ? j2 - l2 / 2 : j2, S2 / 2] }] };
      break;
    }
    case d:
    case y: {
      const e$13 = "object" == typeof t2?.symbolConfig && !!t2?.symbolConfig?.isSquareFill, { width: a2, height: l2 } = E(t2);
      j2 = !e$13 && a2 !== l2 || null == a2 ? null != n ? n : k : a2, S2 = !e$13 && a2 !== l2 || null == l2 ? j2 : l2, M2 || (j2 += p, S2 += p), M2 = true, m.shape = e$13 ? { type: "path", path: [{ command: "M", values: [0, 0] }, { command: "L", values: [j2, 0] }, { command: "L", values: [j2, S2] }, { command: "L", values: [0, S2] }, { command: "L", values: [0, 0] }, { command: "Z", values: [] }] } : e.fill[0];
      break;
    }
    case f: {
      const a2 = Math.min(u(e$12.width), o || x), i = Math.min(u(e$12.height), o || x), { width: s2, height: c3 } = E(t2), u$12 = s2 === c3 && null != s2 ? s2 : null != n ? n : Math.max(a2, i), h3 = a2 / i;
      j2 = h3 <= 1 ? Math.ceil(u$12 * h3) : u$12, S2 = h3 <= 1 ? u$12 : Math.ceil(u$12 / h3), m.shape = { type: "image", x: -Math.round(j2 / 2), y: -Math.round(S2 / 2), width: j2, height: S2, src: e$12.url || "" }, r && (F2 = true);
      break;
    }
    case v: {
      const a2 = e$12, i = t2?.overrideText || a2.text || b, s2 = a2.font, { width: r2, height: c3 } = E(t2), u$12 = null != c3 ? c3 : null != n ? n : Math.min(u(s2.size), o || x), h3 = C(i, { weight: s2.weight, size: u$12, family: s2.family }), p2 = /[\uE600-\uE6FF]/.test(i);
      j2 = r2 ?? (p2 ? u$12 : h3), S2 = u$12;
      let d2 = 0.25 * U((s2 ? u$12 : 0).toString());
      p2 && (d2 += 5), m.shape = { type: "text", text: i, x: a2.xoffset || 0, y: a2.yoffset || d2, align: "middle", alignBaseline: a2.verticalAlignment, decoration: s2 && s2.decoration, rotated: a2.rotated, kerning: a2.kerning }, m.font = s2 && { size: u$12, style: s2.style, decoration: s2.decoration, weight: s2.weight, family: s2.family };
      break;
    }
  }
  return { shapeDescriptor: m, size: [j2, S2], renderOptions: { node: t2?.node, scale: M2, opacity: t2?.opacity, rotation: r, useRotationSize: F2, effectView: t2?.effectView, ariaLabel: t2?.ariaLabel } };
}
async function A(e2, t2) {
  const { shapeDescriptor: n, size: l$1, renderOptions: o } = T(e2, t2);
  if (!n.shape)
    throw new s$1("symbolPreview: renderPreviewHTML2D", "symbol not supported.");
  await Z(e2, n), await q(e2, n, l$1, t2);
  const i = [[n]];
  if ("object" == typeof t2?.symbolConfig && t2?.symbolConfig?.applyColorModulation) {
    const e3 = 0.6 * l$1[0];
    i.unshift([{ ...n, offset: [-e3, 0], fill: d$1(n.fill, -0.3) }]), i.push([{ ...n, offset: [e3, 0], fill: d$1(n.fill, 0.3) }]), l$1[0] += 2 * e3, o.scale = false;
  }
  return "text" === e2.type && D(e2, n, i, l$1, o), l(i, l$1, o);
}
function P(a, n = M) {
  const l2 = f$1(a), o = y$1(a), r = !l2 || "type" in l2 ? null : new u$1(l2), c2 = o?.color ? new u$1(o?.color) : null, u2 = r ? O(H(r), n) : null, h2 = c2 ? O(H(c2), n) : null;
  return h2 ? u2 ? u2 === h2 ? u2 : n >= M ? "light" : "dark" : h2 : u2;
}
export {
  P as getContrastingBackgroundTheme,
  T as getRenderSymbolParameters,
  A as previewSymbol2D
};
