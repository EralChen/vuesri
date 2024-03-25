import { yg as v$3, r8 as n$2, yh as g$2, tT as I$3, ii as y$2, ih as u$6, yi as b$3, tX as y$3, yj as m$1, d8 as y$4, d6 as d$2, yk as x$1, yl as r$3, v2 as I$4, b$ as u$8, eg as u$9, iJ as s$3, b_ as S$1, aV as e$2, aX as y$5, a_ as c$3, bZ as S$2, bQ as V$1, eV as v$5, ce as d$3, bX as P$1, ym as h$3, yn as r$5, dn as t, aT as s$4, f9 as k$3, ex as w$3, cr as q$2, dg as Et, aQ as U$1, jj as e$3, fe as m$2, gA as m$3, yo as i$3, yp as s$5, gg as e$4, yq as a$6, tC as h$4, r9 as s$7, tA as f$3, yr as o$1, f6 as p$5, tS as i$5, id as u$c, jx as u$d, r5 as e$6, ys as t$3, r6 as O, yt as e$7, yu as n$3, yv as e$8, jd as s$8, yw as i$6 } from "./chunk-ejFG4zJ0.js";
import { e as e$5 } from "./chunk-zypaAtdF.js";
import { t as t$2 } from "./chunk-t40IK_QY.js";
import { M as M$1, A as A$2, $ as $$2, v as v$4, T as T$3, E as E$2, L as L$3, q as q$1, u as u$7, p as p$4, i as i$2, r as r$4, a as l$4, b as a$4, c as l$5, f as v$6, g as u$a, h as a$5, j as b$4, l as l$6, k as g$3, m as r$6, n as m$4, o as i$4, s as u$b, w as s$6, t as t$1, V as V$2, x as c$4, y as r$7, C as C$2 } from "./chunk-0GVzsKqt.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const b$2 = "esri-relationship-ramp", u$5 = `${b$2}--diamond`, c$2 = `${b$2}--square`, f$2 = "http://www.w3.org/2000/svg", p$3 = { diamondContainer: `${u$5}__container`, diamondLeftCol: `${u$5}__left-column`, diamondRightCol: `${u$5}__right-column`, diamondMidCol: `${u$5}__middle-column`, diamondMidColLabel: `${u$5}__middle-column--label`, diamondMidColRamp: `${u$5}__middle-column--ramp`, squareTable: `${c$2}__table`, squareTableRow: `${c$2}__table-row`, squareTableCell: `${c$2}__table-cell`, squareTableLabel: `${c$2}__table-label`, squareTableLabelLeftBottom: `${c$2}__table-label--left-bottom`, squareTableLabelRightBottom: `${c$2}__table-label--right-bottom`, squareTableLabelLeftTop: `${c$2}__table-label--left-top`, squareTableLabelRightTop: `${c$2}__table-label--right-top` };
function h$2(e2, l2, a2 = {}) {
  const { focus: r2, labels: t2 } = e2, s2 = !!r2, o2 = T$2(e2, l2, a2), i2 = { justifyContent: "center" }, b2 = v$3();
  return s2 ? n$2("div", { class: p$3.diamondContainer, styles: i2 }, n$2("div", { class: p$3.diamondLeftCol }, b2 ? t2.right : t2.left), n$2("div", { class: p$3.diamondMidCol }, n$2("div", { class: p$3.diamondMidColLabel }, t2.top), o2, n$2("div", { class: p$3.diamondMidColLabel }, t2.bottom)), n$2("div", { class: p$3.diamondRightCol }, b2 ? t2.left : t2.right)) : n$2("div", { class: p$3.squareTable }, n$2("div", { class: p$3.squareTableRow }, n$2("div", { class: g$2(p$3.squareTableCell, p$3.squareTableLabel, p$3.squareTableLabelRightBottom) }, b2 ? t2.top : t2.left), n$2("div", { class: p$3.squareTableCell }), n$2("div", { class: g$2(p$3.squareTableCell, p$3.squareTableLabel, p$3.squareTableLabelLeftBottom) }, b2 ? t2.left : t2.top)), n$2("div", { class: p$3.squareTableRow }, n$2("div", { class: p$3.squareTableCell }), o2, n$2("div", { class: p$3.squareTableCell })), n$2("div", { class: p$3.squareTableRow }, n$2("div", { class: g$2(p$3.squareTableCell, p$3.squareTableLabel, p$3.squareTableLabelRightTop) }, b2 ? t2.right : t2.bottom), n$2("div", { class: p$3.squareTableCell }), n$2("div", { class: g$2(p$3.squareTableCell, p$3.squareTableLabel, p$3.squareTableLabelLeftTop) }, b2 ? t2.bottom : t2.right)));
}
function k$2(e2, l2, a2) {
  const r2 = `${a2}_arrowStart`, t2 = `${a2}_arrowEnd`, s2 = "left" === e2, o2 = { markerStart: null, markerEnd: null };
  switch (l2) {
    case "HL":
      s2 ? o2.markerStart = `url(#${t2})` : o2.markerEnd = `url(#${r2})`;
      break;
    case "LL":
      o2.markerStart = `url(#${t2})`;
      break;
    case "LH":
      s2 ? o2.markerEnd = `url(#${r2})` : o2.markerStart = `url(#${t2})`;
      break;
    default:
      o2.markerEnd = `url(#${r2})`;
  }
  return o2;
}
function T$2(n2, d2, b2 = {}) {
  const { focus: u2, numClasses: c2, colors: h2, rotation: T2 } = n2, { opacity: _2, effectList: q2, ariaLabel: L2 } = b2, g2 = b2.size ?? 60, $2 = !!u2, C2 = Math.sqrt(g2 ** 2 + g2 ** 2) + ($2 ? 0 : 5), v2 = [], w3 = [], y2 = [], x2 = (g2 || 75) / c2;
  for (let s2 = 0; s2 < c2; s2++) {
    const o2 = s2 * x2;
    for (let i2 = 0; i2 < c2; i2++) {
      const n3 = i2 * x2, d3 = M$1(h2[s2][i2]), m2 = A$2(null), b3 = { type: "rect", x: n3, y: o2, width: x2, height: x2 }, u3 = $$2(d3);
      u3 && v2.push(u3);
      const c3 = v$4(b3, d3.fill, m2, null);
      c3 && w3.push(c3), y2.push(T$3(b3));
    }
  }
  const R2 = 10, E2 = 15, M2 = 15, S2 = 10;
  let j2 = null;
  $2 || (j2 = "margin: -15px -15px -18px -15px");
  const B2 = k$2("left", u2, d2), H2 = k$2("right", u2, d2), U2 = E$2(y2), W = L$3(U2, C2, C2, 0, false, T2, false), X = L$3(U2, C2, C2, 0, false, $2 ? -45 : null, false), Y = { filter: I$3(q2) ?? void 0, opacity: null == _2 ? "" : `${_2}` };
  return n$2("div", { class: $2 ? p$3.diamondMidColRamp : p$3.squareTableCell, styles: Y }, n$2("svg", { "aria-labelledBy": L2, focusable: false, height: C2, role: "image", style: j2, width: C2, xmlns: f$2 }, n$2("defs", null, n$2("marker", { id: `${d2}_arrowStart`, markerHeight: "10", markerUnits: "strokeWidth", markerWidth: "10", orient: "auto", refX: "5", refY: "5" }, n$2("polyline", { fill: "none", points: "0,0 5,5 0,10", stroke: "#555555", "stroke-width": "1" })), n$2("marker", { id: `${d2}_arrowEnd`, markerHeight: "10", markerUnits: "strokeWidth", markerWidth: "10", orient: "auto", refX: "0", refY: "5" }, n$2("polyline", { fill: "none", points: "5,0 0,5 5,10", stroke: "#555555", "stroke-width": "1" })), v2), n$2("g", { transform: W }, w3), n$2("g", { transform: X }, n$2("line", { fill: "none", "marker-end": B2.markerEnd, "marker-start": B2.markerStart, stroke: "#555555", "stroke-width": "1", x1: -R2, x2: -R2, y1: g2 - E2, y2: E2 }), n$2("line", { fill: "none", "marker-end": H2.markerEnd, "marker-start": H2.markerStart, stroke: "#555555", "stroke-width": "1", x1: M2, x2: g2 - M2, y1: g2 + S2, y2: g2 + S2 }))));
}
const s$2 = { HH: 315, HL: 45, LL: 135, LH: 225 }, l$3 = { 2: [["HL", "HH"], ["LL", "LH"]], 3: [["HL", "HM", "HH"], ["ML", "MM", "MH"], ["LL", "LM", "LH"]], 4: [["HL", "HM1", "HM2", "HH"], ["M2L", "M2M1", "M2M2", "M2H"], ["M1L", "M1M1", "M1M2", "M1H"], ["LL", "LM1", "LM2", "LH"]] };
function n$1(t2) {
  if (!t2)
    return;
  const { type: s2 } = t2;
  if (s2.includes("3d"))
    return q$1(t2.symbolLayers.at(0));
  if ("simple-line" === s2) {
    const e2 = y$2(t2);
    return e2 && e2.color;
  }
  if ("simple-marker" === t2.type && ("x" === t2.style || "cross" === t2.style)) {
    const e2 = y$2(t2);
    return e2 && e2.color;
  }
  return u$6(t2);
}
function H(t2, o2) {
  const e2 = o2.HH.label, r2 = o2.LL.label, s2 = o2.HL.label, l2 = o2.LH.label;
  switch (t2) {
    case "HH":
    default:
      return { top: e2, bottom: r2, left: s2, right: l2 };
    case "HL":
      return { top: s2, bottom: l2, left: r2, right: e2 };
    case "LL":
      return { top: r2, bottom: e2, left: l2, right: s2 };
    case "LH":
      return { top: l2, bottom: s2, left: e2, right: r2 };
  }
}
function i$1(t2) {
  const { focus: o2, infos: e2, numClasses: r2 } = t2, s2 = l$3[r2], L2 = {};
  e2.forEach((t3) => {
    L2[t3.value] = { label: t3.label, fill: n$1(t3.symbol) };
  });
  const i2 = [];
  for (let l2 = 0; l2 < r2; l2++) {
    const t3 = [];
    for (let o3 = 0; o3 < r2; o3++) {
      const e3 = L2[s2[l2][o3]];
      t3.push(e3.fill);
    }
    i2.push(t3);
  }
  return { type: "relationship-ramp", numClasses: r2, focus: o2, colors: i2, labels: H(o2, L2), rotation: u$4(o2) };
}
function u$4(t2) {
  let o2 = s$2[t2];
  return t2 && null == o2 && (o2 = s$2.HH), o2 || 0;
}
function l$2(l2, i2, s2) {
  const a2 = l2.effectiveClusterRenderer;
  if (!a2 || !("visualVariables" in a2) || !a2.visualVariables)
    return null;
  const n2 = a2.visualVariables.find((e2) => "size" === e2.type);
  if (!("stops" in n2) || !n2.stops)
    return null;
  const t2 = n2.stops.find((e2) => e2.useMinValue), u2 = n2.stops.find((e2) => e2.useMaxValue);
  if (null == t2 || null == u2)
    return null;
  const r2 = s2.featuresTilingScheme.getClosestInfoForScale(s2.scale).level, f2 = n2.field, o2 = i2.getDisplayStatistics(r2, f2);
  return o2 ? new b$3({ field: n2.field, minSize: l2.clusterMinSize, minDataValue: o2.minValue, maxSize: l2.clusterMaxSize, maxDataValue: o2.maxValue }) : null;
}
const p$2 = 30, y$1 = 12, b$1 = [255, 255, 255], h$1 = [200, 200, 200], d$1 = [128, 128, 128], w$2 = 20, g$1 = 5;
function S(e2) {
  return "esri.symbols.SimpleMarkerSymbol" === e2.declaredClass;
}
function v$2(e2) {
  return "esri.symbols.PictureMarkerSymbol" === e2.declaredClass;
}
function z$1(e2) {
  return "esri.symbols.SimpleLineSymbol" === e2.declaredClass;
}
function j$2(e2) {
  return "esri.symbols.TextSymbol" === e2.declaredClass;
}
function V(e2, l2) {
  const t2 = e2.length - 1;
  return e2.map((e3, n2) => r$4(e3, n2, t2, l2));
}
async function k$1(e2, l2, n2, i2, o2, a2, u2) {
  const c2 = l2.legendOptions, m2 = c2?.customValues, f2 = u2 || await U(e2, n2), p2 = l2.stops, y2 = !!f2, b2 = !!m2, h2 = null != l2.minSize && null != l2.maxSize, d2 = p2 && p2.length > 1, w3 = !!l2.target;
  if (!y2 || !b2 && !(h2 || d2 && !w3))
    return;
  const g2 = y$3(f2);
  let S2 = false, v2 = null, z2 = null;
  v2 = g2 && !d2 ? u$7([l2.minDataValue, l2.maxDataValue]) : m2 ?? await D(l2, f2, i2, o2?.type);
  const j2 = e2?.authoringInfo, k2 = "univariate-color-size" === j2?.type, C2 = k2 && "above-and-below" === j2?.univariateTheme;
  if (!v2 && d2 && (v2 = p2.map((e3) => e3.value), S2 = p2.some((e3) => !!e3.label), "flow" === e2.type && (v2 = u$7(v2)), S2 && (z2 = p2.map((e3) => e3.label))), g2 && null != v2 && v2?.length > 2 && !C2 && (v2 = [v2[0], v2[v2.length - 1]]), !v2)
    return null;
  k2 && 5 !== v2?.length && (v2 = E$1({ minSize: v2[0], maxSize: v2[v2.length - 1] }));
  const I2 = g2 ? x(e2, v2) : null, M2 = m$1(f2), T2 = S2 ? null : V(v2, a2);
  return (await Promise.all(v2.map(async (t2, n3) => {
    const s2 = g2 ? I2[n3] : await B$1(l2, f2, t2, i2, o2?.type);
    return { value: t2, symbol: P(C2 && "class-breaks" === e2.type ? L$2(e2, n3) : f2, s2), label: S2 ? z2[n3] : T2[n3], size: s2, outlineSize: M2 };
  }))).reverse();
}
function x(e2, l2) {
  const t2 = e2?.authoringInfo, n2 = "univariate-color-size" === t2?.type;
  let i2 = [y$1, p$2];
  if (n2) {
    const e3 = l2[0], t3 = l2[l2.length - 1], n3 = y$1, o2 = p$2;
    i2 = l2.map((l3) => n3 + (l3 - e3) / (t3 - e3) * (o2 - n3));
  }
  return n2 && "below" === t2?.univariateTheme && i2.reverse(), i2;
}
function L$2(e2, l2) {
  const t2 = e2.classBreakInfos, n2 = t2.length, i2 = n2 < 2 || !(l2 >= 2) ? t2[0].symbol.clone() : t2[n2 - 1].symbol.clone();
  return e2.visualVariables.some((e3) => "color" === e3.type) && (i2.type.includes("3d") ? I$2(i2) : M(i2)), i2;
}
async function U(e2, l2) {
  if ("flow" === e2.type)
    return p$4(e2, l2);
  if ("pie-chart" === e2.type)
    return new y$4({ color: null, outline: e2.outline?.width ? e2.outline : new d$2() });
  let t2 = null, n2 = null;
  if ("simple" === e2.type)
    t2 = e2.symbol;
  else if ("class-breaks" === e2.type) {
    const l3 = e2.classBreakInfos;
    t2 = l3 && l3[0] && l3[0].symbol, n2 = l3.length > 1;
  } else if ("unique-value" === e2.type) {
    const l3 = e2.uniqueValueInfos;
    t2 = l3?.[0]?.symbol, n2 = null != l3 && l3.length > 1;
  }
  return !t2 || C$1(t2) ? null : (t2 = t2.clone(), (l2 || n2) && (t2.type.includes("3d") ? I$2(t2) : M(t2)), t2);
}
function C$1(e2) {
  if (e2) {
    if (x$1(e2)) {
      return !!e2.symbolLayers && e2.symbolLayers.some((e3) => e3 && "fill" === e3.type);
    }
    return e2.type.includes("fill");
  }
  return false;
}
function I$2(e2) {
  "line-3d" === e2.type ? e2.symbolLayers.forEach((e3) => {
    e3.material = { color: d$1 };
  }) : e2.symbolLayers.forEach((e3) => {
    "icon" !== e3.type || e3.resource?.href ? e3.material = { color: h$1 } : (e3.material = { color: b$1 }, e3.outline = { color: d$1, size: 1.5 });
  });
}
function M(l2) {
  const t2 = r$3();
  if ("cim" === l2.type)
    I$4(l2, new u$8(h$1));
  else if (l2.type.includes("line"))
    l2.color = d$1;
  else if (l2.color = t2 ? d$1 : b$1, "simple-marker" === l2.type)
    if (l2.outline) {
      const e2 = l2.outline?.color?.toHex();
      "#ffffff" === e2 && (l2.outline.color = d$1);
    } else
      l2.outline = { color: d$1, width: 1.5 };
}
async function D(e2, l2, n2, i2) {
  const o2 = (await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW)).getSizeRangeAtScale(e2, n2, i2), s2 = o2 && E$1(o2);
  if (!o2 || !s2)
    return;
  let r2 = s2.map((l3) => T$1(l3, e2, o2));
  r2 = u$7(r2);
  for (let t2 = 1; t2 < r2.length - 1; t2++) {
    const o3 = await q(e2, l2, r2[t2], r2[t2 - 1], n2, i2);
    o3 && (r2[t2] = o3[0], s2[t2] = o3[1]);
  }
  return r2;
}
function E$1(e2) {
  const l2 = e2.minSize, t2 = e2.maxSize, n2 = g$1, i2 = (t2 - l2) / (n2 - 1), o2 = [];
  for (let s2 = 0; s2 < n2; s2++)
    o2.push(l2 + i2 * s2);
  return o2;
}
function T$1(e2, l2, t2) {
  const n2 = t2.minSize, i2 = t2.maxSize, o2 = l2.minDataValue, s2 = l2.maxDataValue;
  let r2;
  if (e2 <= n2)
    r2 = o2;
  else if (e2 >= i2)
    r2 = s2;
  else {
    r2 = (e2 - n2) / (i2 - n2) * (s2 - o2) + o2;
  }
  return r2;
}
async function q(e2, l2, o2, s2, r2, a2) {
  const u2 = await B$1(e2, l2, o2, r2, a2), c2 = await B$1(e2, l2, s2, r2, a2), m2 = i$2(o2), f2 = m2.fractional, p2 = w$2;
  let y2 = m2.integer, b2 = null, h2 = null;
  o2 > 0 && o2 < 1 && (b2 = 10 ** f2, y2 = i$2(o2 *= b2).integer);
  for (let n2 = y2 - 1; n2 >= 0; n2--) {
    const s3 = 10 ** n2;
    let m3 = Math.floor(o2 / s3) * s3, f3 = Math.ceil(o2 / s3) * s3;
    null != b2 && (m3 /= b2, f3 /= b2);
    let y3 = (m3 + f3) / 2;
    [, y3] = u$7([m3, y3, f3], { indexes: [1] });
    const d2 = await B$1(e2, l2, m3, r2, a2), w3 = await B$1(e2, l2, f3, r2, a2), g2 = await B$1(e2, l2, y3, r2, a2), S2 = l$4(u2, d2, c2, null), v2 = l$4(u2, w3, c2, null), z2 = l$4(u2, g2, c2, null);
    let j2 = S2.previous <= p2, V2 = v2.previous <= p2;
    if (j2 && V2 && (S2.previous <= v2.previous ? (j2 = true, V2 = false) : (V2 = true, j2 = false)), j2 ? h2 = [m3, d2] : V2 ? h2 = [f3, w3] : z2.previous <= p2 && (h2 = [y3, g2]), h2)
      break;
  }
  return h2;
}
async function B$1(e2, l2, t2, n2, i2) {
  const { getSize: o2 } = await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW);
  return o2(e2, t2, { scale: n2, view: i2, shape: "simple-marker" === l2.type ? l2.style : null });
}
function P(e2, t2) {
  const n2 = e2.clone();
  if (x$1(n2))
    y$3(n2) || n2.symbolLayers.forEach((e3) => {
      "fill" !== e3.type && (e3.size = t2);
    });
  else if (S(n2))
    n2.size = t2;
  else if (v$2(n2)) {
    const e3 = n2.width, l2 = n2.height;
    n2.height = t2, n2.width = t2 * (e3 / l2);
  } else
    z$1(n2) ? n2.width = t2 : j$2(n2) && n2.font && (n2.font.size = t2);
  return n2;
}
function s$1(t2) {
  const n2 = 2, o2 = Math.floor(Math.log10(Math.abs(t2))) + 1, e2 = o2 < 4 || o2 > 6 ? 4 : o2, r2 = 1e6, s2 = Math.abs(t2) >= r2 ? "compact" : "standard";
  return u$9(t2, { notation: s2, minimumSignificantDigits: n2, maximumSignificantDigits: e2 });
}
const ie = "https://utility.arcgis.com/sharing/tools/legend", re = "esri.layers.ImageryLayer", ne = "esri.layers.ImageryTileLayer", ae = "esri.layers.WCSLayer", oe = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i, ue = new s$3({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch" }), ce = new y$4({ size: 6, outline: { color: [128, 128, 128, 0.5], width: 0.5 } }), de = new S$1({ style: "solid" });
function ye(e2) {
  return "flow" === e2.type;
}
function he(e2) {
  return "vector-field" === e2.type;
}
function me(e2) {
  return "raster-colormap" === e2.type;
}
function fe(e2) {
  return "raster-stretch" === e2.type;
}
function pe(e2) {
  return "raster-shaded-relief" === e2.type;
}
function ge(e2) {
  return "esri.renderers.SimpleRenderer" === e2.declaredClass;
}
function be(e2) {
  return "esri.renderers.ClassBreaksRenderer" === e2.declaredClass;
}
function Se(e2) {
  return "esri.renderers.UniqueValueRenderer" === e2.declaredClass;
}
function _e(e2) {
  return "esri.renderers.HeatmapRenderer" === e2.declaredClass;
}
function ve(e2) {
  return Le(e2) || Ee(e2) || Ce(e2) || we(e2);
}
function we(e2) {
  return "esri.renderers.PointCloudRGBRenderer" === e2.declaredClass;
}
function Le(e2) {
  return "esri.renderers.PointCloudClassBreaksRenderer" === e2.declaredClass;
}
function Ee(e2) {
  return "esri.renderers.PointCloudStretchRenderer" === e2.declaredClass;
}
function Ce(e2) {
  return "esri.renderers.PointCloudUniqueValueRenderer" === e2.declaredClass;
}
function Ie(e2) {
  return "esri.renderers.DotDensityRenderer" === e2.declaredClass;
}
function Re(e2) {
  return "esri.renderers.PieChartRenderer" === e2.declaredClass;
}
function Fe(e2, t2) {
  return ge(e2) || be(e2) || Se(e2) || _e(e2) || Ie(e2) || Re(e2) ? "2d" === t2.type || t$2(e2) : fe(e2) || me(e2) || pe(e2) || Le(e2) || Ee(e2) || Ce(e2) || he(e2) || ye(e2);
}
function Ve(e2) {
  return "esri.layers.BuildingSceneLayer" === e2.declaredClass;
}
function Te(e2) {
  return "esri.layers.SubtypeGroupLayer" === e2.declaredClass;
}
function ze(e2) {
  return "esri.layers.VoxelLayer" === e2.declaredClass;
}
function xe(e2) {
  return "esri.layers.WMSLayer" === e2.declaredClass;
}
function De(e2) {
  return "esri.layers.WMTSLayer" === e2.declaredClass;
}
function je(e2) {
  return "esri.layers.MapImageLayer" === e2.declaredClass;
}
function Oe(e2) {
  return "esri.layers.TileLayer" === e2.declaredClass;
}
function Pe(e2) {
  return e2.declaredClass === re;
}
function Ae(e2) {
  return e2.declaredClass === ne;
}
function Me(e2) {
  return e2.declaredClass === ae;
}
function Ue(e2) {
  return "stretch-ramp" === e2.type;
}
function ke(e2) {
  const t2 = "authoringInfo" in e2 ? e2?.authoringInfo : null;
  return "univariate-color-size" === t2?.type;
}
function Be(e2) {
  const t2 = "authoringInfo" in e2 ? e2?.authoringInfo : null;
  return "univariate-color-size" === t2?.type && "above-and-below" === t2?.univariateTheme;
}
function Ne(e2) {
  return "sublayers" in e2;
}
async function qe(e2, t2) {
  const s2 = await h$4("esri/widgets/Legend/t9n/Legend");
  return "previewTemplateAriaLabel" !== e2 || t2 || (e2 = "previewAriaLabel"), s$7(s2[e2], { label: t2 });
}
const He = new y$4({ style: "path", path: "M10,5 L5,0 0,5 M5,0 L5,15", size: 15, outline: { width: 1, color: [85, 85, 85, 1] } });
let $e = {}, We = class extends S$2 {
  constructor(e2) {
    super(e2), this._hasColorRamp = false, this._hasOpacityRamp = false, this._hasSizeRamp = false, this._webStyleSymbolCache = /* @__PURE__ */ new Map(), this._dotDensityUrlCache = /* @__PURE__ */ new Map(), this._scaleDrivenSizeVariable = null, this._hasClusterSizeVariable = false, this.children = new V$1(), this.layerView = null, this.layer = null, this.legendElements = [], this.parent = null, this.hideLayersNotInCurrentView = false, this.keepCacheOnDestroy = false, this.respectLayerVisibility = true, this.sublayerIds = [], this.title = null, this.view = null;
  }
  initialize() {
    const e2 = () => this.notifyChange("ready");
    this.addHandles([v$5(() => this.children, "change", (t2) => {
      const { added: s2, removed: l2 } = t2;
      s2.forEach((t3) => {
        const s3 = `activeLayerInfo-ready-watcher-${t3.layer.uid}`;
        this.addHandles(d$3(() => t3.ready, e2, P$1), s3);
      }), l2.forEach((e3) => this.removeHandles(e3.layer.uid)), e2();
    })]), this.keepCacheOnDestroy || ($e = {});
  }
  destroy() {
    this._webStyleSymbolCache = null, this._dotDensityUrlCache = null, this._scaleDrivenSizeVariable = null, this.keepCacheOnDestroy || ($e = null);
  }
  get effectList() {
    const e2 = this.layer;
    let t2 = null;
    return "effect" in e2 && e2.effect && (t2 = new h$3(), t2.effect = e2.effect, t2.endTransitions(), t2.scale = this.scale), t2;
  }
  get opacity() {
    const e2 = this.layer.opacity, t2 = this.parent?.opacity, s2 = this.layer.parent, l2 = s2 && "uid" in s2 ? this._getParentLayerOpacity(s2) : null;
    return null != t2 ? t2 * e2 : null != l2 ? l2 * e2 : e2;
  }
  get ready() {
    return null === this.layer || (this.children.length > 0 ? this._isGroupActive() : this.legendElements.length > 0);
  }
  get scale() {
    return this.view?.scale ?? 0;
  }
  get isScaleDriven() {
    const e2 = this.layer;
    if (null === e2)
      return false;
    if ("effect" in e2 && e2.effect && Array.isArray(e2.effect))
      return true;
    if ("featureReduction" in e2 && e2.featureReduction) {
      if ("cluster" === e2.featureReduction.type)
        return true;
      if ("binning" === e2.featureReduction.type && "renderer" in e2.featureReduction && e2.featureReduction.renderer)
        return this._isRendererScaleDriven(e2.featureReduction.renderer);
    }
    return "renderer" in e2 && e2.renderer ? this._isRendererScaleDriven(e2.renderer) : this._isLayerScaleDriven(this.layer);
  }
  get version() {
    return this._get("version") + 1;
  }
  async buildLegendElementsForFeatureCollections(e2) {
    if (!(!this.hideLayersNotInCurrentView || await this._isLayerInCurrentView()))
      return this.legendElements = [], void this.notifyChange("ready");
    const t$12 = Array.from(e2, (e3) => {
      if (r$5(e3))
        return this._getRendererLegendElements(e3.renderer, { title: e3.title });
      if (e3.featureSet?.features.length) {
        const t$13 = e3.layerDefinition, s2 = t$13?.drawingInfo, l2 = s2 && t(s2.renderer), i2 = ue.read(t$13.geometryType);
        return l2 ? this._getRendererLegendElements(l2, { title: e3.name, geometryType: i2 }) : (s$4.getLogger(this).warn("drawingInfo not available!"), null);
      }
      return null;
    });
    try {
      const e3 = [], s2 = await Promise.allSettled(t$12);
      for (const t2 of s2)
        if ("fulfilled" === t2.status)
          for (const s3 of t2.value ?? [])
            e3.push(s3);
      this.legendElements = e3, this.notifyChange("ready");
    } catch (s2) {
      s$4.getLogger(this).warn("error while building legend for layer!", s2);
    }
  }
  async buildLegendElementsForRenderer(e2) {
    try {
      const t2 = !this.hideLayersNotInCurrentView || await this._isLayerInCurrentView();
      this.legendElements = t2 ? await this._getRendererLegendElements(e2) : [], this.notifyChange("ready");
    } catch (t2) {
      s$4.getLogger(this).warn("error while building legend for layer!", t2);
    }
  }
  async buildLegendElementsForFeatureReduction(e2) {
    try {
      const t2 = !this.hideLayersNotInCurrentView || await this._isLayerInCurrentView();
      this.legendElements = t2 ? await this._getLegendElementsForFeatureReduction(e2) : [], this.notifyChange("ready");
    } catch (t2) {
      s$4.getLogger(this).warn("error while building legend for layer!", t2);
    }
  }
  async buildLegendElementsForTools() {
    const e2 = this.layer;
    if (ze(e2))
      this._constructLegendElementsForVoxelLayer();
    else if (De(e2))
      this._constructLegendElementsForWMTSlayer();
    else if (xe(e2))
      await this._constructLegendElementsForWMSSublayers();
    else if (Ve(e2))
      await this._constructLegendElementsForBuildingSceneLayer();
    else if (je(e2) || Oe(e2) || Te(e2))
      await this._constructLegendElementsForSublayers();
    else {
      this.removeHandles("imageryLayers-watcher");
      let t2 = "default";
      if (Pe(e2)) {
        const s2 = e2;
        t2 = (s2?.rasterFunction?.functionName || "default") + "_" + (e2.bandIds?.length ? e2.bandIds.join("") : "###");
      }
      if (Ae(e2))
        return;
      await this._getLegendLayers(`${e2.uid}-${t2}`).then(async (t3) => {
        this.legendElements = [], this.notifyChange("ready");
        const s2 = t3.map(async (t4) => {
          if (Pe(e2)) {
            const t5 = d$3(() => ["renderingRule" in e2 && e2.rasterFunction, e2.bandIds], () => k$3(async () => {
              $e.default = null, e2.renderer ? await this.buildLegendElementsForRenderer(e2.renderer) : await this.buildLegendElementsForTools();
            })());
            this.addHandles(t5, "imageryLayers-watcher");
          }
          const s3 = this._generateSymbolTableElementForLegendLayer(t4);
          s3 && s3.infos.length && (Pe(e2) && (s3.title = e2.title), this.legendElements.push(s3)), this.notifyChange("ready");
        });
        await Promise.allSettled(s2);
      }).catch((e3) => {
        s$4.getLogger(this).warn("Request to server for legend has failed!", e3);
      });
    }
  }
  async _isLayerInCurrentView() {
    const e2 = this.layer, t2 = this.layerView, s2 = t2 && "createQuery" in t2 && "queryFeatureCount" in t2;
    if (!s2 && !(t2 && "createQuery" in e2 && "queryFeatureCount" in e2))
      return true;
    await w$3(() => !t2.updating);
    const l2 = s2 ? "createQuery" in t2 && t2.createQuery() : "createQuery" in e2 && e2.createQuery();
    if (!l2)
      return true;
    l2.geometry = this.view.extent;
    return 0 !== (s2 ? "queryFeatureCount" in t2 && await t2.queryFeatureCount(l2) : "queryFeatureCount" in e2 && await e2.queryFeatureCount(l2));
  }
  _getParentLayerOpacity(e2) {
    let t2 = 1;
    const s2 = e2.parent;
    return s2 && "uid" in s2 && (t2 = this._getParentLayerOpacity(s2)), e2.opacity * t2;
  }
  _isGroupActive() {
    return this.children.some((e2) => e2.ready);
  }
  _isRendererScaleDriven(e2) {
    if ("dot-density" === e2.type)
      return true;
    const t2 = "valueExpression" in e2 ? e2.valueExpression : null;
    if (oe.test(t2))
      return true;
    const s2 = "visualVariables" in e2 ? e2.visualVariables : null;
    return !!s2?.some((e3) => this._isScaleDrivenSizeVariable(e3)) || this._hasScaleDrivenSymbols(e2);
  }
  _hasScaleDrivenSymbols(e2) {
    switch (e2.type) {
      case "simple":
        return this._isScaleDrivenSymbol(e2.symbol);
      case "class-breaks":
        return this._isScaleDrivenSymbol(e2.defaultSymbol) || e2.classBreakInfos.some((e3) => this._isScaleDrivenSymbol(e3.symbol));
      case "unique-value":
        return this._isScaleDrivenSymbol(e2.defaultSymbol) || !!e2.uniqueValueInfos?.some((e3) => this._isScaleDrivenSymbol(e3.symbol));
    }
    return false;
  }
  _isScaleDrivenSymbol(e2) {
    if ("cim" === e2?.type) {
      const { primitiveOverrides: t2, minScale: s2, maxScale: l2 } = e2.data, i2 = t2?.some((e3) => /\$view\.scale/.test(e3.valueExpressionInfo?.expression || "")) ?? false;
      return null != s2 || null != l2 || i2;
    }
    return false;
  }
  _isScaleDrivenSizeVariable(e2) {
    if (e2 && "size" !== e2.type)
      return false;
    const t2 = e2, s2 = t2.minSize, l2 = t2.maxSize;
    return !("object" != typeof s2 || !s2 || !this._isScaleDrivenSizeVariable(s2)) || (!("object" != typeof l2 || !l2 || !this._isScaleDrivenSizeVariable(l2)) || (!!t2.expression || oe.test(t2.valueExpression)));
  }
  _isLayerScaleDriven(e2) {
    if ("minScale" in e2 && e2.minScale > 0 || "maxScale" in e2 && e2.maxScale > 0)
      return true;
    if ("sublayers" in e2 && e2.sublayers)
      return e2.sublayers.some((e3) => this._isLayerScaleDriven(e3));
    const t2 = e2.parent;
    if (false === e2.loaded && t2 && je(t2) && "source" in e2 && e2.source && "map-layer" === e2.source.type) {
      for (const s2 of t2.sourceJSON.layers ?? [])
        if (s2.id === e2.source.mapLayerId && (s2.minScale > 0 || s2.maxScale > 0))
          return true;
    }
    return false;
  }
  async _constructLegendElementsForVoxelLayer() {
    this.legendElements = [], this.removeHandles("voxel-style-watcher"), this.removeHandles("voxel-current-variable");
    const e2 = this.layer;
    this.addHandles(d$3(() => e2.currentVariableId, () => this._constructLegendElementsForVoxelLayer()), "voxel-current-variable"), this.addHandles(d$3(() => e2.getVariableStyles(), () => this._constructLegendElementsForVoxelLayer()), "voxel-style-watcher");
    const t2 = e2.getVariableStyle(null), s2 = [];
    if (t2) {
      if (t2.uniqueValues?.length) {
        const e3 = [];
        t2.uniqueValues.forEach((t3) => {
          t3.enabled && e3.push({ label: t3.label || `${t3.value}`, value: t3.value, symbol: new S$1({ color: t3.color, outline: null }) });
        }), e3.length && s2.push({ type: "symbol-table", title: t2.label, infos: e3 });
      } else if (t2.transferFunction) {
        const { colorStops: e3, stretchRange: l3 } = t2.transferFunction, i3 = e3.toArray().reverse(), r2 = l3.map((e4, t3) => `${0 === t3 ? a$4 : l$5} ${s$1(e4)}`).reverse(), n2 = i3.map((e4) => ({ color: e4.color, value: null, label: null }));
        n2[0].label = r2[0], n2[n2.length - 1].label = r2[1], s2.push({ type: "color-ramp", title: t2.label, infos: n2, preview: v$6(i3.map((e4) => e4.color), { ariaLabel: await qe("previewColorRampAriaLabel") }) });
      }
    }
    const l2 = e2.opacity, i2 = s2.reduce((e3, t3) => [...e3, ...this._getAllInfos(t3)], []).filter((e3) => !!e3?.symbol).map((e3) => this._getSymbolPreview(e3, l2));
    await Promise.allSettled(i2), this.legendElements = s2, this.notifyChange("ready");
  }
  _constructLegendElementsForWMTSlayer() {
    this.legendElements = [], this.removeHandles("wmts-activeLayer-watcher");
    const e2 = this.layer.activeLayer;
    this.addHandles(d$3(() => {
      const { layer: e3 } = this;
      return e3 && "activeLayer" in e3 && e3.activeLayer;
    }, () => this._constructLegendElementsForWMTSlayer()), "wmts-activeLayer-watcher");
    const t2 = e2.styleId ? e2.styles?.find(({ id: t3 }) => t3 === e2.styleId)?.legendUrl : void 0;
    t2 && (this.legendElements = [{ type: "symbol-table", title: e2.title, infos: [{ src: t2, opacity: this.opacity }] }]), this.notifyChange("ready");
  }
  async _constructLegendElementsForWMSSublayers() {
    this.legendElements = [], this.removeHandles("wms-sublayers-watcher");
    const e2 = this.layer;
    let t2 = null;
    (e2.customParameters || e2.customLayerParameters) && (t2 = { ...e2.customParameters, ...e2.customLayerParameters }), this.addHandles(d$3(() => {
      const { layer: e3 } = this;
      return e3 && "sublayers" in e3 && e3.sublayers;
    }, () => this._constructLegendElementsForWMSSublayers()), "wms-sublayers-watcher"), this.legendElements = await this._generateLegendElementsForWMSSublayers(e2.sublayers, t2), this.notifyChange("ready");
  }
  async _generateLegendElementsForWMSSublayers(e2, t2) {
    const s2 = this.layer, l2 = [];
    this.addHandles(e2.on("change", () => this._constructLegendElementsForWMSSublayers()), "wms-sublayers-watcher");
    const i2 = this.sublayerIds?.map((e3) => s2.findSublayerById(e3))?.filter(q$2) ?? [], n2 = i2.length ? i2 : e2.toArray();
    for (const r2 of n2) {
      const e3 = d$3(() => [r2.title, r2.visible, r2.legendEnabled], () => this._constructLegendElementsForWMSSublayers());
      if (this.addHandles(e3, "wms-sublayers-watcher"), !this.respectLayerVisibility || r2.visible && r2.legendEnabled) {
        const e4 = await this._generateSymbolTableElementForWMSSublayer(r2, t2);
        e4?.infos.length && l2.unshift(e4);
      }
    }
    return l2;
  }
  async _generateSymbolTableElementForWMSSublayer(e2, t2) {
    if (!e2.legendUrl && e2.sublayers) {
      const s2 = (await this._generateLegendElementsForWMSSublayers(e2.sublayers, t2)).filter((e3) => e3);
      return { type: "symbol-table", title: e2.title, infos: s2 };
    }
    return this._generateSymbolTableElementForLegendUrl(e2, t2);
  }
  async _generateSymbolTableElementForLegendUrl(e2, t2) {
    let s2 = e2.legendUrl;
    if (!s2)
      return;
    const i2 = { type: "symbol-table", title: e2.title || e2.name || String(e2.id ?? ""), infos: [] };
    t2 && (s2 = Et(s2, t2));
    let r2 = null;
    const n2 = e2.layer?.opacity;
    try {
      r2 = (await U$1(s2, { responseType: "image" })).data, r2 && (r2.style.opacity = n2);
    } catch {
    }
    return i2.infos.push({ src: s2, preview: r2, opacity: n2 }), i2;
  }
  _getLegendLayers(e2, t2) {
    const s2 = $e && $e[e2];
    return s2 ? Promise.resolve(s2) : this._legendRequest(t2).then((t3) => {
      const s3 = t3.layers;
      return $e[e2] = s3, s3;
    });
  }
  _legendRequest(e2) {
    const t2 = this.layer;
    let s2 = { f: "json", dynamicLayers: e2 };
    if (Pe(t2)) {
      const e3 = t2.exportImageServiceParameters.rasterFunction;
      if (e3 && (s2.renderingRule = JSON.stringify(e3.functionDefinition?.toJSON() || e3.toJSON())), t2.bandIds && (s2.bandIds = t2.bandIds.join()), t2.raster || t2.viewId || t2.customParameters) {
        const { raster: e4, viewId: l2, customParameters: i3 } = t2;
        s2 = { raster: e4, viewId: l2, ...s2, ...i3 };
      }
    }
    let i2 = t2.url.replace(/(\/)+$/, "");
    if ("version" in t2 && +t2.version >= 10.01) {
      const e3 = i2.indexOf("?");
      e3 > -1 ? i2 = i2.substring(0, e3) + "/legend" + i2.substring(e3) : i2 += "/legend";
    } else {
      const e3 = i2.toLowerCase().indexOf("/rest/"), t3 = i2.substring(0, e3) + i2.substring(e3 + 5, i2.length);
      i2 = ie + "?soapUrl=" + encodeURI(t3) + "&returnbytes=true";
    }
    return U$1(i2, { query: s2 }).then((e3) => e3.data);
  }
  async _constructLegendElementsForBuildingSceneLayer() {
    this.legendElements = [], this.removeHandles("sublayers-watcher");
    const e2 = this.layer;
    this.addHandles(d$3(() => e2.sublayers, () => this._constructLegendElementsForBuildingSceneLayer()), "sublayers-watcher");
    try {
      this.legendElements = await this._generateLegendElementsForBuildingSublayers(e2.sublayers, this.opacity), this.notifyChange("ready");
    } catch (t2) {
      s$4.getLogger(this).warn("Request to server for legend has failed!", t2);
    }
  }
  async _generateLegendElementsForBuildingSublayers(e2, t2) {
    let s2 = [];
    this.addHandles(e2.on("change", () => this._constructLegendElementsForBuildingSceneLayer()), "sublayers-watcher");
    const l2 = e2.toArray();
    for (const i2 of l2) {
      const e3 = d$3(() => ["renderer" in i2 && i2.renderer, i2.opacity, i2.title, i2.visible], () => this._constructLegendElementsForBuildingSceneLayer());
      if (this.addHandles(e3, "sublayers-watcher"), !this.respectLayerVisibility || i2.visible) {
        const e4 = null != i2?.opacity ? i2.opacity : null, l3 = null != e4 ? e4 * t2 : t2;
        if ("building-group" === i2.type) {
          const e5 = { type: "symbol-table", title: i2.title, infos: [] }, t3 = await this._generateLegendElementsForBuildingSublayers(i2.sublayers, l3);
          e5.infos.push(...t3), s2 = [e5, ...s2];
        } else if (i2.renderer) {
          s2 = [...await this._getRendererLegendElements(i2.renderer, { title: i2.title, opacity: l3, sublayer: i2 }), ...s2];
        }
      }
    }
    return s2.filter((e3) => !!e3 && (!("infos" in e3) || !e3.infos || e3.infos.length > 0));
  }
  async _constructLegendElementsForSublayers() {
    this.legendElements = [], this.removeHandles("sublayers-watcher");
    const e2 = this.layer;
    if (je(e2) || Oe(e2) || Te(e2)) {
      this.addHandles(d$3(() => e2.sublayers, () => this._constructLegendElementsForSublayers), "sublayers-watcher");
      try {
        this.legendElements = await this._generateLegendElementsForSublayers(e2.sublayers, this.opacity), this.notifyChange("ready");
      } catch (t2) {
        s$4.getLogger(this).warn("Request to server for legend has failed!", t2);
      }
    }
  }
  async _generateLegendElementsForSublayers(e2, t2, s2) {
    const l2 = this.layer;
    let i2 = [];
    this.addHandles(e2.on("change", () => this._constructLegendElementsForSublayers()), "sublayers-watcher");
    let n2 = e2.toArray();
    !s2 && this.sublayerIds && this.sublayerIds.length && (n2 = Te(l2) ? this.sublayerIds.map((e3) => l2.findSublayerForSubtypeCode(e3)).filter(q$2) : this.sublayerIds.map((e3) => l2.findSublayerById(e3)).filter(q$2));
    for (const r2 of n2) {
      const e3 = d$3(() => [r2.renderer, r2.opacity, r2.title, r2.visible, r2.legendEnabled], () => this._constructLegendElementsForSublayers());
      if (this.addHandles(e3, "sublayers-watcher"), !this.respectLayerVisibility || r2.visible && r2.legendEnabled && this._isSublayerInScale(r2)) {
        const e4 = null != r2?.opacity ? r2.opacity : null, l3 = null != e4 ? e4 * t2 : t2, n3 = !Ne(r2) || r2.originIdOf("renderer") > e$3.SERVICE && !r2.sublayers;
        if (r2.renderer && n3) {
          await r2.load();
          i2 = [...await this._getRendererLegendElements(r2.renderer, { title: r2.title, opacity: l3, sublayer: r2 }), ...i2];
        } else if (Ne(r2)) {
          const e5 = await this._generateSymbolTableElementForSublayer(r2, l3, s2);
          e5 && i2.unshift(e5);
        }
      }
    }
    return i2.filter((e3) => !!e3 && (!("infos" in e3) || !e3.infos || e3.infos.length > 0));
  }
  async _generateSymbolTableElementForSublayer(e2, t2, s2) {
    if (!s2) {
      s2 = /* @__PURE__ */ new Map();
      const t3 = this.layer, l3 = e2.source;
      let i2 = null;
      if (!(!l3 || "map-layer" === l3.type && l3.mapLayerId === e2.id && (!l3.gdbVersion || l3.gdbVersion === ("gdbVersion" in t3 && t3.gdbVersion))) || e2.originIdOf("renderer") > e$3.SERVICE || e2.originIdOf("labelingInfo") > e$3.SERVICE || e2.originIdOf("labelsVisible") > e$3.SERVICE) {
        const e3 = new m$2({ layer: this.layer });
        i2 = e3.hasDynamicLayers ? e3.dynamicLayers : null, e3.destroy();
      }
      const r2 = i2 || `${t3.uid}-default`;
      (await this._getLegendLayers(r2, i2)).forEach((e3) => s2.set(e3.layerId, e3));
    }
    const l2 = s2.get(e2.id);
    if ((!l2 || l2?.subLayerIds && l2.defaultVisibility) && e2.sublayers) {
      const l3 = await this._generateLegendElementsForSublayers(e2.sublayers, t2, s2);
      return { type: "symbol-table", title: e2.title, infos: l3 };
    }
    return this._generateSymbolTableElementForLegendLayer(l2, e2, t2);
  }
  _generateSymbolTableElementForLegendLayer(e2, t2, s2) {
    if (!e2?.legend || this.respectLayerVisibility && !this._isLegendLayerInScale(e2, t2))
      return null;
    const l2 = t2?.renderer;
    let i2 = t2?.title || e2.layerName;
    if (l2 && (!t2 || t2?.originIdOf("renderer") > e$3.SERVICE)) {
      const e3 = t2?.title || this._getRendererTitle(l2, t2);
      e3 && (i2 && "string" != typeof e3 && "title" in e3 && (e3.title = i2), i2 = e3);
    }
    const r2 = { type: "symbol-table", title: i2, legendType: e2.legendType || null, infos: [] }, n2 = t2 ? this._sanitizeLegendForSublayer(e2.legend.slice(), t2) : e2.legend;
    return e2.legendGroups && e2.legendGroups.length > 0 ? e2.legendGroups.forEach((t3) => {
      const l3 = { type: "symbol-table", title: t3.heading, legendType: e2.legendType || null, infos: this._generateSymbolTableElementInfosForLegendLayer(n2.filter((e3) => e3.groupId === t3.id), e2.layerId, s2) };
      l3.infos?.length > 0 && r2.infos.push(l3);
    }) : r2.infos = this._generateSymbolTableElementInfosForLegendLayer(n2, e2.layerId, s2), r2.infos.length > 0 ? r2 : null;
  }
  _generateSymbolTableElementInfosForLegendLayer(e2, t2, l2) {
    return e2.map((e3) => {
      let i2 = e3.url;
      if (e3.imageData && e3.imageData.length > 0)
        i2 = `data:image/png;base64,${e3.imageData}`;
      else {
        if (0 === i2.indexOf("http"))
          return null;
        i2 = m$3(`${this.layer.url}/${t2}/images/${i2}`);
      }
      return { label: e3.label, src: i2, opacity: l2 ?? this.opacity, width: e3.width, height: e3.height };
    }).filter(q$2);
  }
  _isSublayerInScale(e2) {
    const t2 = e2.minScale || 0, s2 = e2.maxScale || 0;
    return !(t2 > 0 && t2 < this.scale || s2 > this.scale);
  }
  _isLegendLayerInScale(e2, t2) {
    const s2 = t2 || this.layer;
    let l2 = null, i2 = null, r2 = true;
    return !s2.minScale && 0 !== s2.minScale || !s2.maxScale && 0 !== s2.maxScale ? (0 === e2.minScale && s2.tileInfo && (l2 = s2.tileInfo.lods[0].scale), 0 === e2.maxScale && s2.tileInfo && (i2 = s2.tileInfo.lods[s2.tileInfo.lods.length - 1].scale)) : (l2 = Math.min(s2.minScale, e2.minScale) || s2.minScale || e2.minScale, i2 = Math.max(s2.maxScale, e2.maxScale)), (l2 > 0 && l2 < this.scale || i2 > this.scale) && (r2 = false), r2;
  }
  _sanitizeLegendForSublayer(e2, t2) {
    if ("version" in this.layer && +this.layer.version < 10.1 || 0 === e2.length)
      return e2;
    const s2 = t2.renderer, l2 = e2.some((e3) => e3.values);
    let i2 = 0, r2 = null;
    return l2 && e2.some((e3, t3) => (e3.values || (i2 = t3, r2 = e3, r2.label || (r2.label = "others")), null != r2)), s2 ? "unique-value" === s2.type ? r2 && (e2.splice(i2, 1), e2.push(r2)) : "class-breaks" === s2.type && (r2 && e2.splice(i2, 1), e2.reverse(), r2 && e2.push(r2)) : r2 && (e2.splice(i2, 1), e2.push(r2)), e2;
  }
  async _getRendererLegendElements(e2, t2 = {}) {
    if (!Fe(e2, this.view))
      return s$4.getLogger(this).warn(`Renderer of type '${e2.type}' not supported!`), [];
    if (ve(e2))
      return this._constructPointCloudRendererLegendElements(e2, t2);
    if (Ie(e2))
      return this._constructDotDensityRendererLegendElements(e2);
    const s2 = await this._loadRenderer(e2);
    return Re(s2) ? this._constructPieChartRendererLegendElements(s2) : this._constructRendererLegendElements(s2, t2);
  }
  async _getLegendElementsForFeatureReduction(e2) {
    let t2 = null;
    return "binning" === e2.type ? t2 = e2.renderer : "cluster" === e2.type && (t2 = this._getClusterRenderer(e2)), t2 ? this._getRendererLegendElements(t2) : [];
  }
  _getPointCloudRendererTitle(e2) {
    return (e2.legendOptions?.title || e2.field) ?? "";
  }
  async _constructPointCloudRendererLegendElements(e2, t2 = {}) {
    const s2 = t2.title, l2 = [];
    let i2 = null, r2 = null;
    if (Le(e2))
      i2 = { type: "symbol-table", title: s2 || this._getPointCloudRendererTitle(e2), infos: [] }, e2.colorClassBreakInfos.forEach((e3) => {
        i2.infos.unshift({ label: e3.label || e3.minValue + " - " + e3.maxValue, value: [e3.minValue, e3.maxValue], symbol: this._getAppliedCloneSymbol(ce, e3.color) });
      });
    else if (Ee(e2)) {
      const t3 = e2.stops;
      let l3 = null;
      if (t3?.length && (1 === t3.length && (l3 = t3[0].color), !l3)) {
        const e3 = t3[0].value, s3 = t3[t3.length - 1].value;
        if (null != e3 && null != s3) {
          l3 = u$a(e3 + (s3 - e3) / 2, t3);
        }
      }
      i2 = { type: "symbol-table", title: null, infos: [{ label: null, value: null, symbol: this._getAppliedCloneSymbol(ce, l3 || ce.color) }] };
      const n3 = a$5(e2.stops ?? []) ?? [];
      r2 = { type: "color-ramp", title: s2 || this._getPointCloudRendererTitle(e2), infos: n3, preview: v$6(n3.map((e3) => e3.color), { ariaLabel: await qe("previewColorRampAriaLabel") }) };
    } else
      Ce(e2) && (i2 = { type: "symbol-table", title: s2 || this._getPointCloudRendererTitle(e2), infos: [] }, e2.colorUniqueValueInfos?.forEach((e3) => {
        i2.infos.push({ label: e3.label || e3.values.join(", "), value: e3.values.join(", "), symbol: this._getAppliedCloneSymbol(ce, e3.color) });
      }));
    i2 && i2.infos.length && l2.push(i2), r2 && r2.infos.length && l2.push(r2);
    const n2 = l2.reduce((e3, t3) => [...e3, ...t3.infos ?? []], []).filter((e3) => !!e3.symbol).map((t3) => this._getSymbolPreview(t3, this.opacity, { symbolConfig: { applyColorModulation: !!e2.colorModulation } }));
    return await Promise.allSettled(n2), l2;
  }
  async _getElementInfoForDotDensity(e2, t2) {
    const { color: s2, label: l2, valueExpressionTitle: i2 } = t2, { backgroundColor: r2, outline: n2, dotSize: a2 } = e2, o2 = this.effectList, u2 = o2?.effects.map((e3) => e3.toJSON()), c2 = i$3(u2), d2 = await qe("previewTemplateAriaLabel", l2 || i2), y2 = a2 + "-" + s2 + "-" + r2 + "-" + (n2 && JSON.stringify(n2.toJSON())) + "-" + c2, h2 = this._dotDensityUrlCache, m2 = h2.has(y2) ? h2.get(y2) : b$4(e2, s2, { ariaLabel: d2 });
    h2.set(y2, m2);
    const f2 = { shape: { type: "image", x: 0, y: 0, width: m2.width, height: m2.height, src: m2.src }, fill: null, stroke: null, offset: [0, 0] }, p2 = l$6([[f2]], [m2.width, m2.height], { effectView: this.effectList, ariaLabel: d2 });
    return { opacity: 1, src: m2.src, preview: p2, width: m2.width, height: m2.height };
  }
  async _constructDotDensityRendererLegendElements(e2) {
    const t2 = e2.calculateDotValue(this.view.scale), s2 = e2.legendOptions?.unit, l2 = { type: "symbol-table", title: { value: t2 && Math.round(t2), unit: s2 || "" }, infos: [] };
    for (const i2 of e2.attributes) {
      const t3 = await this._getElementInfoForDotDensity(e2, i2);
      t3.label = i2.label || i2.valueExpressionTitle || i2.field, l2.infos.push(t3);
    }
    return [l2];
  }
  async _constructPieChartRendererLegendElements(e2) {
    const t2 = this.layer.opacity, s2 = [];
    let l2 = null;
    const i2 = e2.outline;
    e2.attributes.forEach((e3) => {
      const t3 = new y$4({ color: e3.color, outline: i2 }), l3 = e3.label || e3.valueExpressionTitle || e3.field;
      s2.push({ label: l3, symbol: t3 });
    });
    const r2 = s2.length ? [...s2] : [];
    if (e2.othersCategory?.color && 0 !== e2.othersCategory?.threshold) {
      const t3 = new y$4({ color: e2.othersCategory.color, outline: i2 });
      l2 = e2.othersCategory.label || "Other", s2.push({ label: l2, symbol: t3 });
    }
    if (e2.defaultColor?.a) {
      const t3 = new y$4({ color: e2.defaultColor, outline: i2 });
      s2.push({ label: e2.defaultLabel, symbol: t3 });
    }
    const n2 = await this._getVisualVariableLegendElements(e2, this.layer) || [];
    if (s2.length) {
      n2.unshift({ type: "symbol-table", title: null, infos: s2 });
      const t3 = r2.filter((e3) => e3.label !== l2).map((e3) => e3.symbol.color).filter(Boolean), a3 = g$3(t3, { holePercentage: e2.holePercentage, backgroundColor: e2.backgroundFillSymbol?.color, effectList: this.effectList, outline: i2, ariaLabel: await qe("previewPieChartAriaLabel") });
      n2.unshift({ type: "pie-chart-ramp", title: this._getRendererTitle(e2, this.layer), infos: s2, preview: a3 });
    }
    const a2 = n2.reduce((e3, t3) => [...e3, ...this._getAllInfos(t3)], []).filter((e3) => !!e3?.symbol && !e3?.preview).map((e3) => this._getSymbolPreview(e3, t2, { effectList: this.effectList }));
    return await Promise.allSettled(a2), n2;
  }
  async _constructRendererLegendElements(e2, t2 = {}) {
    const { title: s2, sublayer: l2 } = t2, i2 = l2 || this.layer;
    this._hasColorRamp = false, this._hasOpacityRamp = false, this._hasSizeRamp = false, this._scaleDrivenSizeVariable = null;
    const r2 = await this._getVisualVariableLegendElements(e2, i2) || [], n2 = { type: "symbol-table", title: s2 || this._getRendererTitle(e2, i2), infos: [] };
    let a2 = null, o2 = false;
    const u2 = /* @__PURE__ */ new Set();
    if (ye(e2) && !this._hasSizeRamp) {
      const t3 = await p$4(e2);
      n2.infos.push({ label: null, symbol: t3 });
    } else if (ke(e2)) {
      let t3 = s2;
      const l3 = Be(e2) ? "univariate-above-and-below-ramp" : "univariate-color-size-ramp", i3 = r2.findIndex((e3) => "color-ramp" === e3.type), n3 = -1 !== i3 ? r2.splice(i3, 1)[0] : null, a3 = r2.findIndex((e3) => "size-ramp" === e3.type), o3 = -1 !== a3 ? r2.splice(a3, 1)[0] : null, u3 = [];
      n3 && (t3 = n3.title, u3.push(n3)), o3 && (t3 = o3.title, u3.push(o3)), u3.length > 0 && r2.push({ type: l3, title: t3, infos: u3 });
    } else if (_e(e2)) {
      const t3 = r$6(e2);
      r2.push({ type: "heatmap-ramp", title: s2 || this._getRendererTitle(e2, i2), infos: t3, preview: v$6(t3.map((e3) => e3.color), { effectList: this.effectList, ariaLabel: await qe("previewColorRampAriaLabel") }) });
    } else if (Se(e2)) {
      const t3 = e2 && e2.authoringInfo;
      if (t3 && "relationship" === t3.type) {
        const { numClasses: s3, field1: l3, field2: a3 } = t3, o3 = t3.focus;
        if (s3 && l3 && a3) {
          const t4 = [l3, a3];
          let c3 = u$4(o3) || 0;
          for (const e3 of t4) {
            const { field: t5, normalizationField: s4, label: l4 } = e3, r3 = l4 || { field: this._getFieldAlias(t5, i2), normField: s4 && this._getFieldAlias(s4, i2) }, a4 = He.clone();
            a4.angle = c3, n2.infos.push({ label: r3, symbol: a4 }), u2.add(a4), c3 += 90;
          }
          const d3 = i$1({ focus: o3, numClasses: s3, infos: e2.uniqueValueInfos ?? [] });
          r2.unshift(d3);
        }
      } else if (Pe(this.layer) || Ae(this.layer))
        e2.uniqueValueInfos?.forEach((e3) => {
          e3.symbol && n2.infos.push({ label: e3.label || e3.value, value: e3.value, symbol: e3.symbol });
        });
      else {
        const { field: t4, field2: l3, field3: r3, fieldDelimiter: a3, valueExpression: u3, defaultSymbol: c3 } = e2, d3 = !(!t4 && !u3 || !l3 && !r3), y3 = [];
        if (e2.uniqueValueGroups?.forEach((e3) => {
          const s3 = { type: "symbol-table", title: e3.heading, infos: [] };
          e3.classes?.forEach((e4) => {
            const { symbol: n3, values: o3 } = e4;
            if (n3) {
              const c4 = [], y4 = [];
              for (const e5 of o3 ?? []) {
                const { value: s4, value2: n4, value3: o4 } = e5, h4 = [], m4 = [];
                (t4 || u3) && (h4.push(s4), m4.push(this._getDomainName(t4, s4, i2))), l3 && (h4.push(n4), m4.push(this._getDomainName(l3, n4, i2))), r3 && (h4.push(o4), m4.push(this._getDomainName(r3, o4, i2))), c4.push(d3 ? h4.join(a3 || "") : h4[0]), y4.push(m4.join(" - "));
              }
              const h3 = c4.join(", ");
              let m3 = e4.label;
              if (!m3) {
                const e5 = y4.filter(Boolean);
                m3 = e5.length ? e5.join(", ") : h3;
              }
              s3.infos.push({ label: m3, value: h3, symbol: n3 });
            }
          }), s3.infos.length && y3.push(s3);
        }), y3.length) {
          const t5 = y3[0];
          1 === y3.length && "title" in t5 && !t5.title ? n2.infos.push(...t5.infos ?? []) : (c3 && (y3.push({ type: "symbol-table", infos: [{ label: e2.defaultLabel || "others", symbol: c3 }] }), o2 = true), n2.infos.push(...y3)), s2 || e2.legendOptions?.title || e2.valueExpressionTitle || (n2.title = null);
        }
      }
      e2.defaultSymbol && !o2 && (n2.infos.push({ label: e2.defaultLabel || "others", symbol: e2.defaultSymbol }), o2 = true);
    } else if (be(e2)) {
      a2 = this._isUnclassedRenderer(e2);
      (!a2 || !this._hasSizeRamp) && (e2.classBreakInfos.forEach((e3) => {
        e3.symbol && n2.infos.unshift({ label: e3.label || (a2 ? null : e3.minValue + " - " + e3.maxValue), value: [e3.minValue, e3.maxValue], symbol: e3.symbol });
      }), a2 && (n2.title = null), this._updateInfosForClassedSizeRenderer(e2, n2.infos)), e2.defaultSymbol && !a2 && (n2.infos.push({ label: e2.defaultLabel || "others", symbol: e2.defaultSymbol }), o2 = true);
    } else if (fe(e2))
      if (Ae(this.layer) || Me(this.layer)) {
        const t3 = await this._constructTileImageryStretchRendererElements(e2);
        Ue(t3) ? r2.push(t3) : n2.infos = t3;
      } else {
        const t3 = this.layer;
        let s3, l3;
        if (e2.statistics?.length) {
          const t4 = e2.statistics[0];
          m$4(t4) ? (s3 = t4.min, l3 = t4.max) : [s3, l3] = t4;
        }
        let i3 = [], a3 = t3.serviceRasterInfo;
        if (t3.rasterFunction)
          try {
            a3 = await t3.generateRasterInfo(t3.rasterFunction);
          } catch {
          }
        const o3 = s$5(a3.pixelType);
        if (1 === a3.bandCount) {
          const i4 = t3.bandIds?.[0] || 0;
          s3 = null != s3 ? s3 : a3.statistics ? a3.statistics[i4].min : o3[0], l3 = null != l3 ? l3 : a3.statistics ? a3.statistics[i4].max : o3[1], s3 || l3 ? r2.push(await this._getStretchLegendElements(e2, { min: s3, max: l3 })) : this._getServerSideLegend();
        } else if (t3.bandIds && 1 === t3.bandIds.length)
          s3 = null != s3 ? s3 : a3.statistics ? a3.statistics[t3.bandIds[0]].min : o3[0], l3 = null != l3 ? l3 : a3.statistics ? a3.statistics[t3.bandIds[0]].max : o3[1], s3 || l3 ? r2.push(await this._getStretchLegendElements(e2, { min: s3, max: l3 })) : this._getServerSideLegend();
        else if (a3.bandCount >= 3) {
          const { bandInfos: e3 } = a3, { bandIds: s4 } = t3;
          e3.length >= a3.bandCount ? 3 === s4?.length ? (i3 = s4.map((t4) => e3[t4].name), n2.infos = this._createSymbolTableElementMultiBand(i3)) : "lerc" === t3.format ? (i3 = [0, 1, 2].map((t4) => e3[t4].name), n2.infos = this._createSymbolTableElementMultiBand(i3)) : this._getServerSideLegend() : "lerc" === t3.format ? (i3 = ["band1", "band2", "band3"], n2.infos = this._createSymbolTableElementMultiBand(i3)) : this._getServerSideLegend();
        } else
          this._getServerSideLegend();
      }
    else if (me(e2))
      e2.colormapInfos.forEach((e3) => {
        n2.infos.push({ label: e3.label, value: e3.value, symbol: this._getAppliedCloneSymbol(de, e3.color) });
      });
    else if (ge(e2)) {
      let s3 = e2.symbol;
      switch (t2.geometryType) {
        case "point":
          s3 = "pointSymbol" in i2 ? i2.pointSymbol : null;
          break;
        case "polyline":
          s3 = "lineSymbol" in i2 ? i2.lineSymbol : null;
          break;
        case "polygon":
          s3 = "polygonSymbol" in i2 ? i2.polygonSymbol : null;
      }
      const l3 = this._hasClusterSizeVariable && this._getClusterSymbol() || !this._hasSizeRamp;
      e2.symbol && l3 && n2.infos.push({ label: e2.label, symbol: s3 });
    } else if (he(e2)) {
      e2.outputUnit && (this.title = "(" + e2.toJSON().outputUnit + ")"), n2.title = e2.attributeField;
      const t3 = e2.getClassBreakInfos();
      t3?.length ? t3.forEach((e3) => {
        n2.infos.push({ label: e3.minValue + " - " + e3.maxValue, symbol: e3.symbol });
      }) : n2.infos.push({ label: e2.attributeField, symbol: e2.getDefaultSymbol() });
    } else
      pe(e2) && r2.push(await this._getStretchLegendElements(e2, { min: 0, max: 255 }));
    const c2 = e2.defaultSymbol;
    !c2 || o2 || ge(e2) || a2 && !this._hasColorRamp && !this._hasSizeRamp && !this._hasOpacityRamp || r2.push({ type: "symbol-table", infos: [{ label: e2.defaultLabel || "others", symbol: c2 }] }), n2.infos.length && r2.unshift(n2);
    const d2 = null == t2.opacity ? this.opacity : t2.opacity, y2 = this._isTallSymbol("visualVariables" in e2 ? e2.visualVariables : null), h2 = Pe(this.layer) || Ae(this.layer), m2 = r2.reduce((e3, t3) => [...e3, ...this._getAllInfos(t3)], []).filter((e3) => !!e3?.symbol).filter((e3) => {
      if ("cim" === e3.symbol.type) {
        const { minScale: t3, maxScale: s3 } = e3.symbol.data;
        if (t3 && t3 < this.scale || s3 && s3 > this.scale)
          return false;
      }
      return true;
    }).map((e3) => this._getSymbolPreview(e3, d2, { isDefault: e3.symbol === c2, applyScaleDrivenSize: !u2.has(e3.symbol), symbolConfig: { isTall: y2, isSquareFill: h2 }, effectList: u2.has(e3.symbol) ? null : this.effectList }));
    return e2 = null, await Promise.allSettled(m2), r2;
  }
  _getServerSideLegend() {
    setTimeout(() => this.buildLegendElementsForTools(), 0);
  }
  _getAllInfos(e2) {
    const t2 = e2?.infos;
    return t2 ? t2.reduce((e3, t3) => e3.concat(this._getAllInfos(t3)), []) : [e2];
  }
  async _constructTileImageryStretchRendererElements(e2) {
    const t2 = this.layer, s2 = t2.symbolizer.rasterInfo ?? t2.raster.rasterInfo;
    let l2, i2;
    const r2 = e2?.statistics?.length ? e2.statistics : s2?.statistics;
    if (r2) {
      const e3 = r2[0];
      m$4(e3) ? (l2 = e3.min, i2 = e3.max) : [l2, i2] = e3;
    } else {
      const e3 = s$5(s2.pixelType);
      l2 = e3[0], i2 = e3[1];
    }
    if (t2.hasStandardTime() && (l2 = t2.getStandardTimeValue(l2), i2 = t2.getStandardTimeValue(i2)), 1 === s2.bandCount || 1 === t2.bandIds?.length)
      return this._getStretchLegendElements(e2, { min: l2, max: i2 });
    const n2 = (t2?.bandIds?.length ? t2.bandIds : Array.from(Array(Math.min(s2.bandCount, 3)).keys())).map((e3) => s2.bandInfos[e3].name);
    return n2.length < 3 ? n2.push(n2[1]) : n2.length > 3 && n2.splice(3), this._createSymbolTableElementMultiBand(n2);
  }
  async _getStretchLegendElements(e2, t2) {
    const s2 = e2.colorRamp, l2 = i$4(s2, t2);
    return { type: "stretch-ramp", title: "", infos: l2, preview: v$6(l2.map((e3) => e3.color), { ariaLabel: await qe("previewColorRampAriaLabel") }) };
  }
  _getClusterSymbol() {
    const e2 = this.layer, t2 = "featureReduction" in e2 && e2.featureReduction, s2 = t2 && "symbol" in t2 && t2.renderer;
    return s2 && true !== s2?.authoringInfo?.isAutoGenerated ? null : t2 && "symbol" in t2 ? t2.symbol : null;
  }
  async _getSizeLegendElement(e2, t2, s2, l2) {
    return { type: "size-ramp", title: this._hasClusterSizeVariable ? this._getClusterTitle(t2) : e2, infos: await k$1(s2, t2, await u$b(s2), this.scale, this.view, l2, this._hasClusterSizeVariable ? this._getClusterSymbol() : null) };
  }
  _createSymbolTableElementMultiBand(e2) {
    const t2 = [], s2 = ["red", "green", "blue"];
    return e2.forEach((e3, l2) => {
      t2.push({ label: { colorName: s2[l2], bandName: e3 }, src: s$6[l2], opacity: this.opacity ?? 1 });
    }), t2;
  }
  _updateInfosForClassedSizeRenderer(e2, t2) {
    const s2 = e2.authoringInfo && "class-breaks-size" === e2.authoringInfo.type, l2 = e2.classBreakInfos.some((e3) => y$3(e3.symbol));
    if (s2 && l2) {
      const s3 = p$2, l3 = y$1, i2 = e2.classBreakInfos.length, r2 = (s3 - l3) / (i2 > 1 ? i2 - 1 : i2);
      t2.forEach((e3, t3) => {
        e3.size = s3 - r2 * t3;
      });
    }
  }
  _isTallSymbol(e2) {
    let t2 = false, s2 = false;
    if (e2)
      for (let l2 = 0; l2 < e2.length && (!t2 || !s2); l2++) {
        const i2 = e2[l2];
        "size" === i2.type && ("height" === i2.axis && (t2 = true), "width-and-depth" === i2.axis && (s2 = true));
      }
    return t2 && s2;
  }
  async _getSymbolPreview(e2, t2, s2) {
    let l2 = !s2?.isDefault && null == e2.size && this._hasSizeRamp ? e$4(t$1.size) : e2.size;
    if (this._scaleDrivenSizeVariable && s2?.applyScaleDrivenSize) {
      const { getSize: t3 } = await import("./chunk-ejFG4zJ0.js").then((n2) => n2.DW);
      l2 = t3(this._scaleDrivenSizeVariable, null, { view: this.view.type, scale: this.scale, shape: "simple-marker" === e2.symbol.type ? e2.symbol.style : null });
    }
    const i2 = !s2?.isDefault && this._hasSizeRamp || !(!this._scaleDrivenSizeVariable || !s2?.applyScaleDrivenSize);
    return V$2(e2.symbol, { size: l2, opacity: t2, scale: false, symbolConfig: s2?.symbolConfig, effectView: s2?.effectList, style: "legend", cimOptions: { allowScalingUp: i2, viewParams: this.isScaleDriven ? { viewingMode: "2d" === this.view?.type ? "map" : this.view?.viewingMode, scale: this.view?.scale } : null }, ariaLabel: e2.label && "string" != typeof e2.label ? null : await qe("previewTemplateAriaLabel", e2.label) }).then((t3) => (e2.preview = t3, e2)).catch(() => (e2.preview = null, e2));
  }
  _getClusterRenderer(e2) {
    this._hasClusterSizeVariable = false;
    const t2 = "renderer" in this.layer ? this.layer.renderer : null, s2 = e2.renderer?.clone() || t2?.clone(), l2 = l$2(e2, this.layerView, this.view);
    if (l2 && null != s2 && "visualVariables" in s2) {
      const t3 = s2.visualVariables?.some((e3) => "size" === e3.type && "outline" !== e3.target && !oe.test(e3.valueExpression));
      if (!t3) {
        if ("clusterMinSize" in e2 && "clusterMaxSize" in e2) {
          const { clusterMinSize: t5, clusterMaxSize: s3 } = e2;
          l2.legendOptions = new a$6({ showLegend: t5 !== s3 });
        }
        const t4 = s2.visualVariables || [];
        s2.visualVariables = t4.concat([l2]), this._hasClusterSizeVariable = true;
      }
    }
    return s2;
  }
  async _loadRenderer(e2) {
    const t2 = [], s2 = e2.clone(), l2 = await u$b(s2);
    if (be(s2) || Se(s2)) {
      const e3 = (s2.classBreakInfos || s2.uniqueValueInfos).map((e4) => this._fetchSymbol(e4.symbol, l2).then((t3) => {
        e4.symbol = t3;
      }).catch(() => {
        e4.symbol = null;
      }));
      Array.prototype.push.apply(t2, e3);
    }
    return t2.push(this._fetchSymbol(s2.symbol || s2.defaultSymbol, s2.defaultSymbol ? null : l2).then((e3) => {
      this._applySymbolToRenderer(s2, e3, ge(s2));
    }).catch(() => {
      this._applySymbolToRenderer(s2, null, ge(s2));
    })), await Promise.allSettled(t2), s2;
  }
  _applySymbolToRenderer(e2, t2, s2) {
    s2 ? e2.symbol = t2 : e2.defaultSymbol = t2;
  }
  async _fetchSymbol(e2, t2) {
    if (!e2)
      throw new Error();
    if ("web-style" === e2.type) {
      const s2 = this._webStyleSymbolCache;
      try {
        const l2 = await ("2d" === this.view.type ? e2.fetchCIMSymbol({ cache: s2 }) : e2.fetchSymbol({ cache: s2 }));
        return this._getAppliedCloneSymbol(l2, t2);
      } catch {
        throw s$4.getLogger(this).warn("Fetching web-style failed!"), new Error();
      }
    }
    return this._getAppliedCloneSymbol(e2, t2);
  }
  _getAppliedCloneSymbol(e2, s2) {
    if (!e2 || !s2)
      return e2;
    const l2 = e2.clone(), i2 = s2 && s2.toRgba();
    return l2.type.includes("3d") ? this._applyColorTo3dSymbol(l2, i2) : "cim" === l2.type ? I$4(l2, s2) : l2.color && (l2.color = new u$8(i2 || l2.color)), l2;
  }
  _applyColorTo3dSymbol(e2, s2) {
    s2 && e2.symbolLayers.forEach((e3) => {
      e3 && (e3.material || (e3.material = {}), e3.material.color = new u$8(s2));
    });
  }
  async _getVisualVariableLegendElements(e2, t2) {
    if (!("visualVariables" in e2) || !e2.visualVariables || "vector-field" === e2.type)
      return null;
    const s2 = e2.visualVariables, l2 = [], i2 = [], n2 = [];
    for (const r2 of s2)
      "color" === r2.type ? l2.push(r2) : "size" === r2.type ? i2.push(r2) : "opacity" === r2.type && n2.push(r2);
    const a2 = [...l2, ...i2, ...n2];
    let o2, u2;
    if (0 === l2.length && be(e2) && e2.classBreakInfos && 1 === e2.classBreakInfos.length) {
      const t3 = e2.classBreakInfos[0];
      o2 = t3 && t3.symbol;
    }
    if (0 === l2.length && ge(e2) && (o2 = e2.symbol), o2)
      if (o2.type.includes("3d")) {
        const e3 = o2.symbolLayers.at(0);
        "water" === e3.type ? null != e3.color && (u2 = e3.color) : null != e3.material?.color && (u2 = e3.material.color);
      } else
        o2.url || (u2 = o2.color);
    const c2 = this.effectList;
    return (await Promise.all(a2.map(async (s3) => {
      if (!s3.legendOptions || false !== s3.legendOptions.showLegend) {
        const l3 = ye(e2) ? s3.field : this._getRampTitle(s3, t2);
        let i3 = null;
        const r2 = c$4(t2, s3, this.view.timeZone);
        if ("color" === s3.type) {
          const e3 = await r$7(s3, null, r2) ?? [];
          i3 = { type: "color-ramp", title: l3, infos: e3, preview: v$6(e3.map((e4) => e4.color), { effectList: c2, ariaLabel: await qe("previewColorRampAriaLabel") }) }, this._hasColorRamp || (this._hasColorRamp = e3.length > 0);
        } else if ("size" === s3.type && "outline" !== s3.target)
          oe.test(s3.valueExpression) ? this._hasClusterSizeVariable || (this._scaleDrivenSizeVariable = s3) : (i3 = await this._getSizeLegendElement(l3, s3, e2, r2), this._hasSizeRamp || (this._hasSizeRamp = !(null == i3.infos || !i3.infos.length)));
        else if ("opacity" === s3.type) {
          const e3 = await r$7(s3, u2, r2) ?? [];
          i3 = { type: "opacity-ramp", title: l3, infos: e3, preview: v$6(e3.map((e4) => e4.color), { effectList: c2, ariaLabel: await qe("previewColorRampAriaLabel") }) }, this._hasOpacityRamp || (this._hasOpacityRamp = e3.length > 0);
        }
        return i3 && i3.infos ? i3 : null;
      }
    }))).filter(q$2);
  }
  _getDomainName(e2, t2, s2) {
    if (e2 && "function" != typeof e2) {
      const l2 = "getField" in s2 && s2.getField?.(e2), i2 = l2 && "getFieldDomain" in s2 && s2.getFieldDomain ? s2.getFieldDomain(l2.name) : null;
      return "coded-value" === i2?.type ? i2.getName(t2) : null;
    }
    return null;
  }
  _getClusterTitle(e2) {
    const t2 = this.layer, s2 = e2.field;
    if ("featureReduction" in t2 && t2.featureReduction && "cluster" === t2.featureReduction.type) {
      const e3 = t2.featureReduction, l2 = "popupTemplate" in e3 && e3.popupTemplate, i2 = l2 && l2.fieldInfos;
      if (i2) {
        for (const t3 of i2)
          if (t3.fieldName === s2)
            return "cluster_count" === s2 ? t3.label || { showCount: true } : t3.label;
      }
    }
    return { showCount: true };
  }
  _getRampTitle(e2, t2) {
    let s2 = e2.field, l2 = e2.normalizationField, i2 = false, r2 = false, n2 = false, a2 = null;
    s2 = "function" == typeof s2 ? null : s2, l2 = "function" == typeof l2 ? null : l2;
    const o2 = e2.legendOptions?.title;
    if (null != o2)
      a2 = o2;
    else if (e2.valueExpressionTitle)
      a2 = e2.valueExpressionTitle;
    else {
      if ("renderer" in t2 && t2.renderer && "authoringInfo" in t2.renderer && t2.renderer.authoringInfo?.visualVariables) {
        const e3 = t2.renderer.authoringInfo.visualVariables;
        for (let t3 = 0; t3 < e3.length; t3++) {
          const s3 = e3[t3];
          if ("color" === s3.type) {
            if ("ratio" === s3.style) {
              i2 = true;
              break;
            }
            if ("percent" === s3.style) {
              r2 = true;
              break;
            }
            if ("percent-of-total" === s3.style) {
              n2 = true;
              break;
            }
          }
        }
      }
      a2 = { field: s2 && this._getFieldAlias(s2, t2), normField: l2 && this._getFieldAlias(l2, t2), ratio: i2, ratioPercent: r2, ratioPercentTotal: n2 };
    }
    return a2;
  }
  _getRendererTitle(e2, t2) {
    const s2 = e2;
    if (s2.legendOptions?.title)
      return s2.legendOptions.title;
    if (s2.valueExpressionTitle)
      return s2.valueExpressionTitle;
    let l2 = s2.field, i2 = null, r2 = null;
    if (be(s2) && (i2 = s2.normalizationField, r2 = "percent-of-total" === s2.normalizationType), l2 = "function" == typeof l2 ? null : l2, i2 = "function" == typeof i2 ? null : i2, Se(s2)) {
      const { field2: e3, field3: i3, fieldDelimiter: r3 } = s2;
      let n3 = l2 && this._getFieldAlias(l2, t2);
      return e3 && (n3 = `<${n3}>${r3}<${this._getFieldAlias(e3, t2)}>`, i3 && (n3 = `${n3}${r3}<${this._getFieldAlias(i3, t2)}>`)), n3;
    }
    let n2 = null;
    return (l2 || i2) && (n2 = { field: l2 && this._getFieldAlias(l2, t2), normField: i2 && this._getFieldAlias(i2, t2), normByPct: r2 }), n2;
  }
  _getFieldAlias(e2, t2) {
    const s2 = "popupTemplate" in t2 ? t2.popupTemplate : null, l2 = s2?.fieldInfos;
    let i2 = l2?.find((t3) => e2 === t3.fieldName), r2 = null;
    "getField" in t2 && t2.getField ? r2 = t2.getField(e2) : "fieldsIndex" in t2 && t2.fieldsIndex && (r2 = t2.fieldsIndex.get(e2));
    let n2 = null;
    const a2 = "featureReduction" in t2 && t2.featureReduction;
    a2 && (i2 ??= "popupTemplate" in a2 ? a2.popupTemplate?.fieldInfos?.find((t3) => e2?.toLowerCase() === t3.fieldName?.toLowerCase()) : void 0, "fields" in a2 && a2.fields && (n2 = a2.fields.find((t3) => t3.name?.toLowerCase() === e2?.toLowerCase())));
    const o2 = i2 || r2 || n2;
    let u2 = null;
    return o2 && (u2 = i2?.label || r2?.alias || n2?.alias || "name" in o2 && o2.name || "fieldName" in o2 && o2.fieldName || null), u2;
  }
  _isUnclassedRenderer(e2) {
    const t2 = e2.visualVariables;
    let s2 = false;
    return be(e2) && e2.classBreakInfos && 1 === e2.classBreakInfos.length && t2 && (s2 = e2.field ? t2.some((t3) => !(!t3 || e2.field !== t3.field || (e2.normalizationField || t3.normalizationField) && e2.normalizationField !== t3.normalizationField)) : !!t2.length), s2;
  }
};
e$2([y$5()], We.prototype, "children", void 0), e$2([y$5({ readOnly: true })], We.prototype, "effectList", null), e$2([y$5()], We.prototype, "layerView", void 0), e$2([y$5()], We.prototype, "layer", void 0), e$2([y$5()], We.prototype, "legendElements", void 0), e$2([y$5({ readOnly: true })], We.prototype, "opacity", null), e$2([y$5()], We.prototype, "parent", void 0), e$2([y$5({ readOnly: true, dependsOn: [] })], We.prototype, "ready", null), e$2([y$5()], We.prototype, "hideLayersNotInCurrentView", void 0), e$2([y$5()], We.prototype, "keepCacheOnDestroy", void 0), e$2([y$5()], We.prototype, "respectLayerVisibility", void 0), e$2([y$5({ readOnly: true })], We.prototype, "scale", null), e$2([y$5()], We.prototype, "sublayerIds", void 0), e$2([y$5({ readOnly: true })], We.prototype, "isScaleDriven", null), e$2([y$5()], We.prototype, "title", void 0), e$2([y$5({ readOnly: true, dependsOn: ["ready"], value: 0 })], We.prototype, "version", null), e$2([y$5()], We.prototype, "view", void 0), We = e$2([c$3("esri.widgets.Legend.support.ActiveLayerInfo")], We);
const Ge = We;
const c$1 = { state: "state", view: "view", allLayerViews: "all-layer-views", legendProperties: "legend-properties" }, L$1 = V$1.ofType(Ge), u$3 = /* @__PURE__ */ new Set(["esri.layers.BuildingSceneLayer", "esri.layers.CSVLayer", "esri.layers.FeatureLayer", "esri.layers.GeoJSONLayer", "esri.layers.GeoRSSLayer", "esri.layers.GroupLayer", "esri.layers.HeatmapLayer", "esri.layers.ImageryLayer", "esri.layers.ImageryTileLayer", "esri.layers.MapImageLayer", "esri.layers.OGCFeatureLayer", "esri.layers.OrientedImageryLayer", "esri.layers.PointCloudLayer", "esri.layers.StreamLayer", "esri.layers.SceneLayer", "esri.layers.SubtypeGroupLayer", "esri.layers.TileLayer", "esri.layers.VoxelLayer", "esri.layers.WFSLayer", "esri.layers.WMSLayer", "esri.layers.WMTSLayer", "esri.layers.WCSLayer", "esri.layers.LinkChartLayer", "esri.layers.knowledgeGraph.KnowledgeGraphSublayer"]), f$1 = "view.basemapView.baseLayerViews", p$1 = "view.groundView.layerViews", v$1 = "view.basemapView.referenceLayerViews", _$1 = [f$1, p$1, "view.layerViews", v$1];
let w$1 = class w extends S$2 {
  constructor(e2) {
    super(e2), this._layerViewByLayerId = {}, this._layerInfosByLayerViewId = {}, this._activeLayerInfosByLayerViewId = {}, this._activeLayerInfosWithNoParent = new V$1(), this.activeLayerInfos = new L$1(), this.basemapLegendVisible = false, this.groundLegendVisible = false, this.hideLayersNotInCurrentView = false, this.keepCacheOnDestroy = false, this.respectLayerVisibility = true, this.layerInfos = [], this.view = null;
  }
  initialize() {
    this.addHandles(d$3(() => this.view, () => this._viewHandles(), P$1), c$1.view), this.addHandles(f$3(() => this._refresh()));
  }
  destroy() {
    this._destroyViewActiveLayerInfos(), this.view = null;
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  _viewHandles() {
    this.removeHandles(c$1.state), this.view && this.addHandles(d$3(() => this.state, () => this._stateHandles(), P$1), c$1.state);
  }
  _stateHandles() {
    this._resetAll(), "ready" === this.state && this._watchPropertiesAndAllLayerViews();
  }
  _resetAll() {
    this.removeHandles([c$1.allLayerViews, c$1.legendProperties]), this._destroyViewActiveLayerInfos(), this.activeLayerInfos.removeAll();
  }
  _destroyViewActiveLayerInfos() {
    Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo, this);
  }
  _destroyViewActiveLayerInfo(e2) {
    this.removeHandles(e2);
    const r2 = this._activeLayerInfosByLayerViewId[e2];
    delete this._activeLayerInfosByLayerViewId[e2], r2?.parent && r2.parent.children.remove(r2);
  }
  _watchPropertiesAndAllLayerViews() {
    const { view: e2 } = this;
    if (!e2)
      return;
    const { allLayerViews: r2 } = e2;
    r2.length && this._refresh(), this.addHandles(r2.on("change", (e3) => this._propertiesChangeHandle()), c$1.allLayerViews), this.addHandles(d$3(() => [this.layerInfos, this.basemapLegendVisible, this.groundLegendVisible], () => this._propertiesChangeHandle()), c$1.legendProperties);
  }
  _propertiesChangeHandle() {
    this._destroyViewActiveLayerInfos(), this._refresh();
  }
  _refresh() {
    this._layerInfosByLayerViewId = {}, this.activeLayerInfos.removeAll(), this._generateLayerViews().filter(this._filterLayerViewsByLayerInfos, this).filter(this._isLayerViewSupported, this).forEach(this._generateActiveLayerInfo, this), this._sortActiveLayerInfos(this.activeLayerInfos);
  }
  _sortActiveLayerInfos(e2) {
    const r2 = this.view;
    if (e2.length < 2 || !r2)
      return;
    const i2 = [];
    e2.forEach((r3) => {
      if (!r3.parent) {
        const t3 = r3.layer.parent, s2 = t3 && "uid" in t3 && this._layerViewByLayerId[t3.uid], a2 = s2 && this._activeLayerInfosByLayerViewId[s2.uid];
        a2 && e2.includes(a2) && (i2.push(r3), r3.parent = a2, a2.children.add(r3), this._sortActiveLayerInfos(a2.children));
      }
    }), e2.removeMany(i2);
    const t2 = {};
    r2.allLayerViews.forEach((e3, r3) => t2[e3.layer.uid] = r3), e2.sort((e3, r3) => {
      const i3 = t2[e3.layer.uid] || 0;
      return (t2[r3.layer.uid] || 0) - i3;
    });
  }
  _generateLayerViews() {
    const e2 = [];
    return _$1.filter(this._filterLayerViews, this).map((e3) => o$1(this, e3)).filter((e3) => null != e3).forEach(this._collectLayerViews("layerViews", e2)), e2;
  }
  _filterLayerViews(e2) {
    const r2 = !this.basemapLegendVisible && (e2 === f$1 || e2 === v$1), i2 = !this.groundLegendVisible && e2 === p$1;
    return !r2 && !i2;
  }
  _collectLayerViews(e2, r2) {
    const i2 = (t2) => (t2 && t2.forEach((t3) => {
      r2.push(t3), i2(t3[e2]);
    }), r2);
    return i2;
  }
  _filterLayerViewsByLayerInfos(e2) {
    const r2 = this.layerInfos;
    return !r2 || !r2.length || r2.some((r3) => this._hasLayerInfo(r3, e2));
  }
  _hasLayerInfo(e2, r2) {
    const i2 = this._isLayerUIDMatching(e2.layer, r2.layer.uid);
    return i2 && (this._layerInfosByLayerViewId[r2.uid] = e2), i2;
  }
  _isLayerUIDMatching(e2, r2) {
    return e2 && (e2.uid === r2 || this._hasLayerUID(e2.layers, r2));
  }
  _hasLayerUID(e2, r2) {
    return e2 && e2.some((e3) => this._isLayerUIDMatching(e3, r2));
  }
  _isLayerViewSupported(e2) {
    return !!u$3.has(e2.layer.declaredClass) && (this._layerViewByLayerId[e2.layer.uid] = e2, true);
  }
  _generateActiveLayerInfo(e2) {
    this._isLayerActive(e2) ? this._buildActiveLayerInfo(e2) : (this.removeHandles(e2.uid), this.addHandles(d$3(() => [e2.legendEnabled, e2.layer?.legendEnabled], () => this._layerActiveHandle(e2)), e2.uid));
  }
  _layerActiveHandle(e2) {
    this._isLayerActive(e2) && (this.removeHandles(e2.uid), this._buildActiveLayerInfo(e2));
  }
  _isLayerActive(e2) {
    return !this.respectLayerVisibility || e2.legendEnabled && e2.layer?.legendEnabled;
  }
  _buildActiveLayerInfo(e2) {
    const r2 = e2.layer, i2 = e2.uid, n2 = this._layerInfosByLayerViewId[i2];
    let o2 = this._activeLayerInfosByLayerViewId[i2];
    if (!o2) {
      const t2 = void 0 !== n2?.title && n2.layer.uid === r2.uid;
      o2 = new Ge({ layer: r2, layerView: e2, title: t2 ? n2.title : r2.title, view: this.view, respectLayerVisibility: this.respectLayerVisibility, hideLayersNotInCurrentView: this.hideLayersNotInCurrentView, keepCacheOnDestroy: this.keepCacheOnDestroy, sublayerIds: n2?.sublayerIds || [] }), this._activeLayerInfosByLayerViewId[i2] = o2;
    }
    const l2 = r2.parent && "uid" in r2.parent ? this._layerViewByLayerId[r2.parent?.uid] : null;
    if (o2.parent = this._activeLayerInfosByLayerViewId[l2?.uid], !this.hasHandles(i2)) {
      const n3 = [d$3(() => r2.title, (e3) => this._titleHandle(e3, o2)), d$3(() => [r2.opacity, "renderer" in r2 && r2.renderer, "pointSymbol" in r2 && r2.pointSymbol, "lineSymbol" in r2 && r2.lineSymbol, "polygonSymbol" in r2 && r2.polygonSymbol], () => this._constructLegendElements(o2)), p$5(() => true === this.view?.stationary, () => this._scaleHandle(o2), P$1), d$3(() => e2.layer ? e$5(e2.layer, e2.view) : null, () => this._constructLegendElements(o2)), d$3(() => e2.updating, () => {
        if (null == e2.layer)
          return;
        null != e$5(e2.layer, e2.view) && this._constructLegendElements(o2);
      }), d$3(() => "effect" in r2 && r2.effect, () => this._constructLegendElements(o2)), p$5(() => this.view?.timeZone, () => this._constructLegendElements(o2), P$1)];
      if (this.respectLayerVisibility) {
        const i3 = d$3(() => e2.legendEnabled, (e3) => this._legendEnabledHandle(e3, o2)), s2 = d$3(() => r2.legendEnabled, (e3) => this._legendEnabledHandle(e3, o2));
        n3.push(i3, s2);
      }
      this.addHandles(n3, i2);
    }
    o2.isScaleDriven || this._constructLegendElements(o2), this._addActiveLayerInfo(o2);
  }
  _titleHandle(e2, r2) {
    r2.title = e2, this._constructLegendElements(r2);
  }
  _legendEnabledHandle(e2, r2) {
    e2 ? this._addActiveLayerInfo(r2) : this._removeActiveLayerInfo(r2);
  }
  _scaleHandle(e2) {
    (e2.isScaleDriven || e2.hideLayersNotInCurrentView) && this._constructLegendElements(e2);
  }
  _addActiveLayerInfo(e2) {
    const { layerView: r2, layer: i2 } = e2;
    if (this._isLayerActive(r2) && !this.activeLayerInfos.includes(e2)) {
      const r3 = e2.parent;
      if (r3)
        r3.children.includes(e2) || r3.children.push(e2), this._sortActiveLayerInfos(r3.children);
      else {
        const r4 = this.layerInfos?.some((e3) => e3.layer.uid === i2.uid);
        i2.parent && "uid" in i2.parent && !r4 ? this._activeLayerInfosWithNoParent.add(e2) : (this.activeLayerInfos.add(e2), this._sortActiveLayerInfos(this.activeLayerInfos));
      }
      if (this._activeLayerInfosWithNoParent.length) {
        const e3 = [];
        this._activeLayerInfosWithNoParent.forEach((r4) => {
          const i3 = r4.layer.parent, t2 = i3 && "uid" in i3 ? this._layerViewByLayerId[i3?.uid] : null, s2 = this._activeLayerInfosByLayerViewId[t2?.uid];
          s2 && (e3.push(r4), r4.parent = s2);
        }), e3.length && (this._activeLayerInfosWithNoParent.removeMany(e3), e3.forEach((e4) => this._addActiveLayerInfo(e4)));
      }
    }
  }
  _removeActiveLayerInfo(e2) {
    const r2 = e2.parent;
    r2 ? r2.children.remove(e2) : this.activeLayerInfos.remove(e2);
  }
  _constructLegendElements(e2) {
    const r2 = e2.layer;
    "featureCollections" in r2 && r2.featureCollections ? e2.buildLegendElementsForFeatureCollections(r2.featureCollections) : "featureReduction" in r2 && r2.featureReduction && "renderer" in r2.featureReduction && ("binning" === r2.featureReduction.type || "cluster" === r2.featureReduction.type) && (!this.view || r2.featureReduction.maxScale <= this.view.scale) ? e2.buildLegendElementsForFeatureReduction(r2.featureReduction) : "renderer" in r2 && r2.renderer && !("sublayers" in r2) ? e2.buildLegendElementsForRenderer(r2.renderer) : "url" in r2 && r2.url ? e2.buildLegendElementsForTools() : e2.children.forEach((e3) => this._constructLegendElements(e3));
  }
};
e$2([y$5({ type: L$1 })], w$1.prototype, "activeLayerInfos", void 0), e$2([y$5()], w$1.prototype, "basemapLegendVisible", void 0), e$2([y$5()], w$1.prototype, "groundLegendVisible", void 0), e$2([y$5()], w$1.prototype, "hideLayersNotInCurrentView", void 0), e$2([y$5()], w$1.prototype, "keepCacheOnDestroy", void 0), e$2([y$5()], w$1.prototype, "respectLayerVisibility", void 0), e$2([y$5()], w$1.prototype, "layerInfos", void 0), e$2([y$5({ readOnly: true })], w$1.prototype, "state", null), e$2([y$5()], w$1.prototype, "view", void 0), w$1 = e$2([c$3("esri.widgets.Legend.LegendViewModel")], w$1);
const I$1 = w$1;
const e$1 = "esri-legend--card", a$3 = "esri-legend", r$2 = { activated: `${e$1}__carousel-indicator--activated`, base: e$1, stacked: `${a$3}--stacked`, carouselTitle: `${e$1}__carousel-title`, indicator: `${e$1}__carousel-indicator`, intervalSeparator: `${e$1}__interval-separator`, imageryLayerStretchedImage: `${e$1}__imagery-layer-image--stretched`, imageLabel: `${e$1}__image-label`, layerCaption: `${e$1}__layer-caption`, labelElement: `${e$1}__label-element`, layerRow: `${e$1}__layer-row`, labelCell: `${e$1}__label-cell`, message: `${e$1}__message`, rampLabel: `${e$1}__ramp-label`, section: `${e$1}__section`, relationshipSection: `${e$1}__relationship-section`, serviceCaptionText: `${e$1}__service-caption-text`, serviceContent: `${e$1}__service-content`, service: `${e$1}__service`, groupLayer: `${e$1}__group-layer`, groupLayerChild: `${e$1}__group-layer-child`, symbol: `${e$1}__symbol`, sizeRampRow: `${e$1}__size-ramp-row`, symbolRow: `${e$1}__symbol-row`, symbolCell: `${e$1}__symbol-cell`, indicatorContainer: `${e$1}__carousel-indicator-container`, intervalSeparatorsContainer: `${e$1}__interval-separators-container`, relationshipLabelContainer: `${e$1}__relationship-label-container`, labelContainer: `${e$1}__label-container`, serviceCaptionContainer: `${e$1}__service-caption-container`, symbolContainer: `${e$1}__symbol-container`, sizeRampContainer: `${e$1}__size-ramp-container`, sizeRampPreview: `${e$1}__size-ramp-preview`, pieChartRampPreview: `${e$1}__pie-chart-ramp-preview`, rampContainer: `${a$3}__ramps`, sizeRampHorizontal: `${a$3}__size-ramp--horizontal`, rampLabelsContainer: `${a$3}__ramp-labels`, layerInfo: `${a$3}__layer-cell ${a$3}__layer-cell--info`, univariateAboveAndBelowColorRamp: "esri-univariate-above-and-below-ramp__color--card" };
const l$1 = i$5(), n = 10, r$1 = 20, s = 10, a$2 = 20, c = { univariateAboveAndBelowSymbol: "esri-univariate-above-and-below-ramp__symbol", colorRamp: "esri-legend__color-ramp" };
function f(e2 = "vertical") {
  const t2 = "stroke:rgb(200, 200, 200);stroke-width:1";
  return "vertical" === e2 ? n$2("svg", { height: "4", width: "10" }, n$2("line", { style: t2, x1: "0", x2: "10", y1: "2", y2: "2" })) : n$2("svg", { height: "10", width: "10" }, n$2("line", { style: t2, x1: "5", x2: "5", y1: "0", y2: "10" }));
}
function p(e2, t2 = "vertical") {
  const o2 = document.createElement("div");
  return o2.style.height = `${r$1}px`, o2.className = c.univariateAboveAndBelowSymbol, null != e2 && (o2.style.opacity = e2.toString()), l$1.append(o2, f.bind(null, t2)), o2;
}
function m(t2, o2, i2 = "vertical", l2) {
  t2.infos.forEach((t3, n2) => {
    if (l2 && 2 === n2)
      t3.preview = p(o2, i2);
    else {
      const o3 = u$c(t3.size) + ("horizontal" === i2 ? a$2 : s), l3 = t3.preview, n3 = "div" === l3?.tagName.toLowerCase(), r2 = n3 ? l3 : document.createElement("div");
      r2.className = c.univariateAboveAndBelowSymbol, "horizontal" === i2 ? r2.style.width = `${o3}px` : r2.style.height = `${o3}px`, !n3 && l3 && r2.appendChild(l3), t3.preview = r2;
    }
  });
}
function u$2(t2, o2 = "classic") {
  const i2 = t2.infos;
  return "classic" === o2 ? (u$c(i2[0].size) + s) / 2 : (u$c(i2[0].size) - u$c(i2[i2.length - 1].size)) / 2;
}
function h(e2, t2) {
  if (!e2)
    return null;
  const i2 = e2.infos.map((e3) => e3.color), l2 = v$6("full" === t2.type ? i2 : "above" === t2.type ? i2.slice(0, 3) : i2.slice(2, 5), { width: t2.width, height: t2.height, align: t2.rampAlignment, effectList: t2.effectList, ariaLabel: t2.ariaLabel });
  return l2.className = c.colorRamp, null != t2.opacity && (l2.style.opacity = t2.opacity.toString()), l2;
}
function v(t2, o2, i2, l2 = "vertical") {
  let c2 = 0;
  const f2 = t2.infos, p2 = Math.floor(f2.length / 2), m2 = "full" === o2 || "above" === o2 ? 0 : p2, u2 = "full" === o2 || "below" === o2 ? f2.length - 1 : p2;
  for (let h2 = m2; h2 <= u2; h2++)
    if (i2 && h2 === p2)
      c2 += "horizontal" === l2 ? n : r$1;
    else {
      c2 += u$c(f2[h2].size) + ("horizontal" === l2 ? a$2 : s);
    }
  return Math.round(c2);
}
function y(t2, o2, i2, l2 = "vertical") {
  const c2 = v(t2, o2, i2, l2), f2 = t2.infos, p2 = Math.floor(f2.length / 2), m2 = "full" === o2 || "above" === o2 ? 0 : p2, u2 = "full" === o2 || "below" === o2 ? f2.length - 1 : p2, h2 = "full" === o2 ? f2[m2].size + f2[u2].size : "above" === o2 ? f2[m2].size : f2[u2].size, y2 = i2 ? "vertical" === l2 ? r$1 : n : 0, d2 = "vertical" === l2 ? s * ("full" === o2 ? 2 : 1) : a$2 * ("full" === o2 ? 2 : 1);
  return Math.round(c2 - (u$c(h2) / 2 + y2 / 2 + d2 / 2));
}
function d(e2, t2, o2 = "vertical") {
  const i2 = e2.infos;
  let l2 = i2.find(({ type: e3 }) => "size-ramp" === e3), n2 = i2.find(({ type: e3 }) => "color-ramp" === e3);
  return l2 && (l2 = { ...l2 }, l2.infos = [...l2.infos], m(l2, t2, o2, true)), n2 && (n2 = { ...n2 }, n2.infos = [...n2.infos]), "horizontal" === o2 && (l2?.infos.reverse(), n2?.infos.reverse()), { sizeRampElement: l2, colorRampElement: n2 };
}
function b(e2, t2 = "vertical") {
  const o2 = e2.infos;
  let i2 = o2.find(({ type: e3 }) => "size-ramp" === e3), l2 = o2.find(({ type: e3 }) => "color-ramp" === e3);
  return i2 && (i2 = { ...i2 }, i2.infos = [...i2.infos], m(i2, null, t2, false)), l2 && (l2 = { ...l2 }, l2.infos = [...l2.infos]), "horizontal" === t2 && (i2?.infos.reverse(), l2?.infos.reverse()), { sizeRampElement: i2, colorRampElement: l2 };
}
function r(e2, t2) {
  return t2;
}
function i(e2) {
  const t2 = this;
  e2.appendChild(t2);
}
function o(n2, i2, o2) {
  if (!i2)
    return;
  if ("number" == typeof i2)
    return i2;
  if ("string" == typeof i2)
    return u$d(i2);
  if ("value" in i2 || "unit" in i2)
    return s$7(n2.dotValue, i2);
  if ("colorName" in i2 && "bandName" in i2)
    return n2[i2.colorName] + ": " + (n2[i2.bandName] || i2.bandName);
  if ("showCount" in i2)
    return i2.showCount ? n2.clusterCountTitle : void 0;
  let u2 = null;
  return r(i2, o2) ? u2 = i2.ratioPercentTotal ? "showRatioPercentTotal" : i2.ratioPercent ? "showRatioPercent" : i2.ratio ? "showRatio" : i2.normField ? "showNormField" : i2.field ? "showField" : null : l(i2, o2) && (u2 = i2.normField ? "showNormField" : i2.normByPct ? "showNormPct" : i2.field ? "showField" : null), u2 ? s$7("showField" === u2 ? "{field}" : n2[u2], { field: i2.field, normField: i2.normField }) : void 0;
}
function l(e2, t2) {
  return !t2;
}
function u$1(e2, t2) {
  return !!(t2 && "Stretched" === t2 && e2.version >= 10.3 && "esri.layers.ImageryLayer" === e2.declaredClass);
}
function a$1(e2, t2) {
  return e2.label ? t2[e2.label] + ": " + ("string" == typeof e2.value ? e2.value : u$9(e2.value ?? 0, { style: "decimal", notation: e2.value?.toString().toLowerCase().includes("e") ? "scientific" : "standard" })) : "";
}
const $$1 = 25, k = 25, z = 768, I = 100;
var N;
!function(e2) {
  e2.Auto = "auto", e2.Stack = "stack", e2.SideBySide = "side-by-side";
}(N || (N = {}));
const A$1 = "#ddd", j$1 = window.devicePixelRatio;
function E(e2) {
  if (e2) {
    if (e2.type.includes("3d")) {
      const t2 = e2.symbolLayers?.length;
      if (!t2)
        return;
      const s2 = e2.symbolLayers.at(t2 - 1), i2 = s2.resource?.primitive;
      return "circle" === i2 || "cross" === i2 || "kite" === i2 || "sphere" === i2 || "cube" === i2 || "diamond" === i2;
    }
    {
      const t2 = e2.style;
      return "circle" === t2 || "diamond" === t2 || "cross" === t2;
    }
  }
}
function F(e2) {
  if (e2) {
    if (e2.type.includes("3d")) {
      const t2 = e2.symbolLayers?.length;
      if (!t2)
        return;
      const s2 = e2.symbolLayers.at(t2 - 1).get("resource.primitive");
      return "triangle" === s2 || "cone" === s2 || "tetrahedron" === s2;
    }
    return "triangle" === e2.style;
  }
}
let T = class extends O {
  constructor(e2, t2) {
    super(e2, t2), this._hasIndicators = false, this._selectedSectionName = null, this._sectionNames = [], this._sectionMap = /* @__PURE__ */ new Map(), this.activeLayerInfos = null, this.headingLevel = 3, this.layout = N.Stack, this.messages = null, this.messagesCommon = null, this.type = "card", this.view = null;
  }
  initialize() {
    this.addHandles(d$3(() => this.activeLayerInfos, (e2) => {
      this.removeAllHandles(), this._watchForSectionChanges(e2);
    }));
  }
  render() {
    const { view: e2 } = this;
    this._hasIndicators = this.layout === N.Auto && e2 && e2.container.clientWidth <= z || this.layout === N.Stack;
    const t2 = this.activeLayerInfos, s2 = t2 && t2.toArray().map((e3) => this._renderLegendForLayer(e3)).filter((e3) => !!e3);
    this._hasIndicators ? this._selectedSectionName && this._sectionNames.includes(this._selectedSectionName) || (this._selectedSectionName = this._sectionNames && this._sectionNames[0]) : this._selectedSectionName = null;
    const i2 = this._sectionNames.length, a2 = this._sectionNames.map((e3, t3) => {
      const s3 = s$7(this.messagesCommon.pagination.pageText, { index: t3 + 1, total: i2 });
      return n$2("div", { "aria-controls": `${e3}-panel`, "aria-label": s3, "aria-selected": (this._selectedSectionName === e3).toString(), bind: this, class: this.classes(r$2.indicator, { [r$2.activated]: this._selectedSectionName === e3 }), "data-section-name": e3, id: e3, key: e3, onclick: this._selectSection, onkeydown: this._focusSection, role: "tab", tabIndex: this._selectedSectionName === e3 ? 0 : -1, title: s3 });
    }), r2 = this._hasIndicators && i2 > 1 ? n$2("div", { class: r$2.indicatorContainer, key: "carousel-navigation", role: "tablist" }, a2) : null, o2 = this._hasIndicators ? this._sectionMap.get(this._selectedSectionName) : s2 && s2.length ? s2 : null, l2 = { [r$2.stacked]: this._hasIndicators };
    return n$2("div", { class: this.classes(r$2.base, l2) }, o2 || n$2("div", { class: r$2.message }, this.messages.noLegend), r2);
  }
  _selectSection(e2) {
    const t2 = e2.target.getAttribute("data-section-name");
    t2 && (this._selectedSectionName = t2);
  }
  _focusSection(e2) {
    switch (e2.key) {
      case "ArrowLeft":
      case "ArrowRight":
        this._switchSectionOnArrowPress(e2);
        break;
      case "Enter":
      case " ":
        this._selectSection(e2);
    }
  }
  _switchSectionOnArrowPress(e2) {
    const t2 = e2.key, s2 = "ArrowLeft" === t2 ? -1 : 1, i2 = e2.target.getAttribute("data-section-name"), a2 = this._sectionNames.indexOf(i2), r2 = this._sectionNames;
    let o2 = null;
    -1 !== a2 && (r2[a2 + s2] ? o2 = document.getElementById(r2[a2 + s2]) : "ArrowLeft" === t2 ? o2 = document.getElementById(r2[r2.length - 1]) : "ArrowRight" === t2 && (o2 = document.getElementById(r2[0])), o2?.focus());
  }
  _watchForSectionChanges(e2) {
    if (this._generateSectionNames(), e2) {
      e2.forEach((e3) => {
        const s3 = `activeLayerInfo-${e3.layer.uid}-version-change`;
        this.removeHandles(s3), this._watchForSectionChanges(e3.children), this.addHandles(d$3(() => e3.version, () => this._generateSectionNames()), s3);
      });
      const s2 = "activeLayerInfos-collection-change";
      this.removeHandles(s2), this.addHandles(e2.on("change", () => this._watchForSectionChanges(e2)), s2);
    }
  }
  _generateSectionNames() {
    this._sectionNames.length = 0, this._selectedSectionName = null, this.activeLayerInfos && this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo, this);
  }
  _getSectionName(e2, t2, s2) {
    return `${this.id}${e2.uid}-type-${t2.type}-${s2}`;
  }
  _generateSectionNamesForActiveLayerInfo(e2) {
    e2.children.forEach(this._generateSectionNamesForActiveLayerInfo, this), e2.legendElements && e2.legendElements.forEach((t2, s2) => {
      this._sectionNames.push(this._getSectionName(e2.layer, t2, s2));
    });
  }
  _renderLegendForLayer(e2) {
    if (!e2.ready)
      return null;
    if (e2.children.length) {
      const t2 = e2.children.map((e3) => this._renderLegendForLayer(e3)).toArray();
      return n$2("div", { class: this.classes(r$2.service, r$2.groupLayer), key: e2.layer.uid }, n$2("div", { class: r$2.serviceCaptionContainer }, e2.title), t2);
    }
    {
      const t2 = e2.legendElements;
      if (t2 && !t2.length)
        return null;
      const s2 = t2.some((e3) => "relationship-ramp" === e3.type), i2 = t2.map((t3, i3) => this._renderLegendForElement(t3, e2, i3, s2)).filter((e3) => !!e3);
      if (!i2.length)
        return null;
      const a2 = { [r$2.groupLayerChild]: !!e2.parent };
      return n$2("div", { class: this.classes(r$2.service, a2), key: e2.layer.uid }, n$2("div", { class: r$2.serviceCaptionContainer }, n$2("div", { class: r$2.serviceCaptionText }, e2.title)), n$2("div", { class: r$2.serviceContent }, i2));
    }
  }
  _renderLegendForElement(e2, t2, s2, i2 = false, a2 = false) {
    const r2 = "color-ramp" === e2.type, o$12 = "opacity-ramp" === e2.type, l2 = t2.layer;
    let p2 = null;
    if ("string" == typeof e2.title)
      p2 = e2.title;
    else if (e2.title) {
      const t3 = e2.title, s3 = o(this.messages, t3, r2 || o$12);
      p2 = t3.title ? `${t3.title} (${s3})` : s3;
    }
    const d2 = this._getSectionName(l2, e2, s2), m2 = this._hasIndicators && !a2 ? n$2("div", null, n$2(e$7, { class: r$2.carouselTitle, level: this.headingLevel }, t2.title), n$2(e$7, { class: r$2.layerCaption, level: n$3(this.headingLevel) }, p2)) : p2 ? n$2(e$7, { class: r$2.layerCaption, level: this.headingLevel }, p2) : null, h2 = t2.effectList;
    let y2 = null;
    switch (e2.type) {
      case "symbol-table": {
        const s3 = e2.infos.map((s4, i3) => this._renderLegendForElementInfo(s4, t2, e2.legendType, i3)).filter((e3) => !!e3);
        if (s3.length) {
          const e3 = s3[0].properties.classes?.[r$2.symbolRow], t3 = { [r$2.labelContainer]: !e3 && !i2, [r$2.relationshipLabelContainer]: i2 };
          y2 = n$2("div", { class: this.classes(t3) }, s3);
        }
        break;
      }
      case "color-ramp":
      case "opacity-ramp":
      case "heatmap-ramp":
      case "stretch-ramp":
        y2 = this._renderLegendForRamp(e2, l2.opacity, h2);
        break;
      case "size-ramp":
        y2 = this._renderSizeRamp(e2, l2.opacity);
        break;
      case "pie-chart-ramp":
        y2 = this._renderPieChartRamp(e2);
        break;
      case "relationship-ramp":
        y2 = h$2(e2, this.id, { opacity: l2.opacity, effectList: h2, ariaLabel: this.messages.previewRelationshipRampAriaLabel });
        break;
      case "univariate-above-and-below-ramp":
        y2 = this._renderUnivariateAboveAndBelowRamp(e2, l2.opacity, h2);
        break;
      case "univariate-color-size-ramp":
        y2 = this._renderUnivariateColorSizeRamp(e2, l2.opacity, h2);
    }
    if (!y2)
      return null;
    const g2 = n$2("div", { "aria-labelledby": d2, class: r$2.section, id: `${d2}-panel`, key: d2, role: "tabpanel", tabIndex: 0 }, [m2, y2]);
    return a2 || this._sectionMap.set(d2, g2), g2;
  }
  _renderPieChartRamp(e2) {
    return n$2("div", { afterCreate: i, bind: e2.preview, class: r$2.pieChartRampPreview });
  }
  _renderUnivariateAboveAndBelowRamp(e2, t2, s2) {
    const { sizeRampElement: i$12, colorRampElement: a2 } = d(e2, t2, "horizontal");
    if (!i$12)
      return null;
    const r2 = v(i$12, "full", true, "horizontal"), o2 = y(i$12, "above", true, "horizontal"), l2 = y(i$12, "below", true, "horizontal"), c2 = 12, g2 = this.messages?.previewColorRampAriaLabel, v$12 = h(a2, { width: o2, height: c2, rampAlignment: "horizontal", opacity: t2, type: "above", effectList: s2, ariaLabel: g2 }), u2 = h(a2, { width: l2, height: c2, rampAlignment: "horizontal", opacity: t2, type: "below", effectList: s2, ariaLabel: g2 }), b2 = u$2(i$12, "card"), _2 = i$12.infos.map((e3) => e3.label), w3 = _2.length - 1, L2 = _2.map((e3, t3) => 0 === t3 || t3 === w3 ? n$2("div", { key: t3 }, e3) : null), S2 = { display: "flex", flexDirection: "column" }, R2 = { display: "flex", flexDirection: "row" }, $2 = { marginTop: "3px", display: "flex" };
    v$3(this.container) ? $2.marginRight = `${b2}px` : $2.marginLeft = `${b2}px`;
    const k2 = { width: `${r2}px`, display: "flex", flexDirection: "row", justifyContent: "space-between" };
    return n$2("div", { class: r$2.layerRow, key: "size-ramp-preview", styles: S2 }, n$2("div", { class: this.classes(r$2.symbolContainer, r$2.sizeRampHorizontal), styles: R2 }, i$12.infos.map((e3, t3) => n$2("div", { afterCreate: i, bind: e3.preview, class: r$2.symbol, key: t3 }))), v$12 ? n$2("div", { class: r$2.univariateAboveAndBelowColorRamp, key: "color-ramp-preview", styles: $2 }, n$2("div", { afterCreate: i, bind: v$12 }), n$2("div", { afterCreate: i, bind: u2 })) : null, n$2("div", { class: r$2.layerInfo }, n$2("div", { class: r$2.rampLabelsContainer, styles: k2 }, L2)));
  }
  _renderUnivariateColorSizeRamp(e2, t2, s2) {
    const { sizeRampElement: i$12, colorRampElement: a2 } = b(e2, "horizontal");
    if (!i$12)
      return null;
    const r2 = v(i$12, "full", false, "horizontal"), o2 = y(i$12, "full", false, "horizontal"), l2 = h(a2, { width: o2, height: 12, rampAlignment: "horizontal", opacity: t2, type: "full", effectList: s2, ariaLabel: this.messages?.previewColorRampAriaLabel }), c2 = u$2(i$12, "card"), p2 = i$12.infos.length - 1, v$12 = i$12.infos.map((e3, t3) => 0 === t3 || t3 === p2 ? n$2("div", { key: t3 }, e3.label) : null), u2 = { display: "flex", flexDirection: "column" }, b$12 = { display: "flex", flexDirection: "row" }, _2 = { marginTop: "3px", display: "flex" };
    v$3(this.container) ? _2.marginRight = `${c2}px` : _2.marginLeft = `${c2}px`;
    const w3 = { width: `${r2}px`, display: "flex", flexDirection: "row", justifyContent: "space-between" };
    return n$2("div", { class: r$2.layerRow, key: "size-ramp-preview", styles: u2 }, n$2("div", { class: this.classes(r$2.symbolContainer, r$2.sizeRampHorizontal), styles: b$12 }, i$12.infos.map((e3, t3) => n$2("div", { afterCreate: i, bind: e3.preview, class: r$2.symbol, key: t3 }))), n$2("div", { class: r$2.univariateAboveAndBelowColorRamp, key: "color-ramp-preview", styles: _2 }, n$2("div", { afterCreate: i, bind: l2 })), n$2("div", { class: r$2.layerInfo }, n$2("div", { class: r$2.rampLabelsContainer, styles: w3 }, v$12)));
  }
  _renderLegendForElementInfo(e2, t2, s2, i$12) {
    const a2 = t2.layer;
    if (e2.type)
      return this._renderLegendForElement(e2, t2, i$12, false, true);
    const r2 = u$1(a2, s2), l2 = o(this.messages, e2.label, false) ?? "";
    if (e2.preview) {
      if (!e2.symbol?.type.includes("simple-fill")) {
        if (!e2.label)
          return n$2("div", { afterCreate: i, bind: e2.preview, key: i$12 });
        const t3 = { [r$2.symbolCell]: this._hasIndicators };
        return n$2("div", { class: this.classes(r$2.layerRow, { [r$2.symbolRow]: this._hasIndicators }), key: i$12 }, n$2("div", { afterCreate: i, bind: e2.preview, class: this.classes(t3) }), n$2("div", { class: this.classes(r$2.imageLabel, { [r$2.labelCell]: this._hasIndicators }) }, l2));
      }
      let s3 = 255, r3 = 255, c2 = 255, p2 = 0, d2 = 255, m2 = 255, h2 = 255, y2 = 0;
      const g2 = e2.symbol.color?.a, v2 = e2.symbol.outline?.color?.a;
      g2 && (s3 = e2.symbol.color.r, r3 = e2.symbol.color.g, c2 = e2.symbol.color.b, p2 = e2.symbol.color.a * a2.opacity), v2 && (d2 = e2.symbol.outline.color.r, m2 = e2.symbol.outline.color.g, h2 = e2.symbol.outline.color.b, y2 = e2.symbol.outline.color.a * a2.opacity);
      const u2 = e2.symbol.color?.isBright ?? true, b2 = u2 ? "rgba(255, 255, 255, .6)" : "rgba(0, 0, 0, .6)", _2 = { background: g2 ? `rgba(${s3}, ${r3}, ${c2}, ${p2})` : "none", color: u2 ? "black" : "white", textShadow: `-1px -1px 0 ${b2},
                                              1px -1px 0 ${b2},
                                              -1px 1px 0 ${b2},
                                              1px 1px 0 ${b2}`, border: v2 ? `1px solid rgba(${d2}, ${m2}, ${h2}, ${y2})` : "none", filter: I$3(t2.effectList) ?? void 0 };
      return n$2("div", { class: r$2.layerRow, key: i$12 }, n$2("div", { class: r$2.labelElement, styles: _2 }, l2));
    }
    if (e2.src) {
      const t3 = this._renderImage(e2, a2, r2);
      return n$2("div", { class: r$2.layerRow, key: i$12 }, t3, n$2("div", { class: r$2.imageLabel }, l2));
    }
  }
  _renderImage(e2, t2, s2) {
    const { label: i2, src: a2, opacity: r2 } = e2, o$12 = { [r$2.imageryLayerStretchedImage]: s2, [r$2.symbol]: !s2 }, l2 = { opacity: `${null != r2 ? r2 : t2.opacity}` };
    return n$2("img", { alt: o(this.messages, i2, false), "aria-label": o(this.messages, i2, false), border: 0, class: this.classes(o$12), height: e2.height, src: a2, styles: l2, width: e2.width });
  }
  _renderSizeRampLines(e2) {
    const t2 = e2.infos, i$12 = t2[0], a2 = t2[t2.length - 1], r2 = i$12.symbol, o2 = this._hasIndicators, l2 = u$c(i$12.size + i$12.outlineSize) * j$1, n2 = u$c(a2.size + a2.outlineSize) * j$1, c2 = o2 ? l2 : l2 + 50 * j$1, p2 = o2 ? l2 / 2 + 50 * j$1 : l2, d2 = F(r2), m2 = E(r2), h2 = document.createElement("canvas");
    h2.width = c2, h2.height = p2, h2.style.width = h2.width / j$1 + "px", h2.style.height = h2.height / j$1 + "px";
    const y2 = h2.getContext("2d");
    if (o2) {
      y2.beginPath();
      const e3 = 0, t3 = 0, s2 = c2 / 2 - n2 / 2, i2 = p2;
      y2.moveTo(e3, t3), y2.lineTo(s2, i2);
      const a3 = c2, r3 = 0, o3 = c2 / 2 + n2 / 2, l3 = p2;
      y2.moveTo(a3, r3), y2.lineTo(o3, l3);
    } else {
      y2.beginPath();
      const e3 = 0, t3 = p2 / 2 - n2 / 2, s2 = c2, i2 = 0;
      y2.moveTo(e3, t3), y2.lineTo(s2, i2);
      const a3 = 0, r3 = p2 / 2 + n2 / 2, o3 = c2, l3 = p2;
      y2.moveTo(a3, r3), y2.lineTo(o3, l3);
    }
    return y2.strokeStyle = A$1, y2.stroke(), n$2("div", { afterCreate: i, bind: h2, styles: o2 ? { display: "flex", marginTop: `-${d2 ? 0 : m2 ? l2 / 2 : 0}px`, marginBottom: `-${d2 ? n2 : m2 ? n2 / 2 : 0}px` } : { display: "flex", marginRight: `-${d2 ? 0 : m2 ? l2 / 2 : 0}px`, marginLeft: `-${d2 ? 0 : m2 ? n2 / 2 : 0}px` } });
  }
  _renderSizeRamp(e2, t2) {
    const s2 = e2.infos, i$12 = s2[0].label, a2 = s2[s2.length - 1].label;
    let r2 = s2[0].preview, o2 = s2[s2.length - 1].preview;
    const l2 = this._hasIndicators, c2 = { "flex-direction": l2 ? "column" : "row-reverse" };
    r2 && (r2 = r2.cloneNode(true), r2.style.display = "flex"), o2 && (o2 = o2.cloneNode(true), o2.style.display = "flex");
    const p2 = { opacity: null != t2 ? `${t2}` : "" };
    return n$2("div", { class: this.classes(r$2.layerRow, { [r$2.sizeRampRow]: l2 }) }, n$2("div", { class: r$2.rampLabel }, l2 ? i$12 : a2), n$2("div", { class: r$2.sizeRampContainer, styles: c2 }, n$2("div", { afterCreate: i, bind: r2, class: r$2.sizeRampPreview, styles: p2 }), this._renderSizeRampLines(e2), n$2("div", { afterCreate: i, bind: o2, class: r$2.sizeRampContainer, styles: p2 })), n$2("div", { class: r$2.rampLabel }, l2 ? a2 : i$12));
  }
  _getRampStopLabel(e2, t2) {
    switch (t2) {
      case "heatmap-ramp":
        return this.messages[e2.label];
      case "stretch-ramp":
        return a$1(e2, this.messages);
      default:
        return e2.label;
    }
  }
  _renderLegendForRamp(e2, t2, s2) {
    const i2 = e2.infos, a2 = e2.type, l2 = "heatmap-ramp" === a2, c2 = i2.length - 1, p2 = k, d2 = c2 > 2 && !l2 ? $$1 * c2 : I, m2 = d2 + 20, h2 = 10, y2 = i2.slice(0).reverse(), g2 = y2.length - 1, v2 = y2.length % 2 != 0 ? y2[y2.length / 2 | 0] : null, f2 = v2 && n$2("div", { class: r$2.intervalSeparatorsContainer }, n$2("div", { class: r$2.intervalSeparator }, "|"), n$2("div", { class: r$2.rampLabel }, this._getRampStopLabel(v2, a2))), u2 = [[{ shape: { type: "path", path: `M0 ${p2 / 2} L${h2} 0 L${h2} ${p2} Z` }, fill: y2[0].color, stroke: { width: 0 } }, { shape: { type: "rect", x: h2, y: 0, width: d2, height: p2 }, fill: { type: "linear", x1: h2, y1: 0, x2: d2 + h2, y2: 0, colors: y2.map((e3, t3) => ({ color: e3.color, offset: l2 && "ratio" in e3 ? e3.ratio : t3 / c2 })) }, stroke: { width: 0 } }, { shape: { type: "path", path: `M${d2 + h2} 0 L${m2} ${p2 / 2} L${d2 + h2} ${p2} Z` }, fill: y2[g2].color, stroke: { width: 0 } }]], b2 = C$2(u2, m2, p2), _2 = { filter: I$3(s2) ?? void 0, opacity: null == t2 ? void 0 : `${t2}` }, w3 = { justifyContent: "center" };
    return n$2("div", { class: r$2.layerRow, styles: w3 }, n$2("div", { class: r$2.rampLabel }, this._getRampStopLabel(y2[0], a2)), n$2("div", { class: r$2.symbolContainer }, n$2("div", { styles: _2 }, b2), f2), n$2("div", { class: r$2.rampLabel }, this._getRampStopLabel(y2[g2], a2)));
  }
};
e$2([y$5()], T.prototype, "activeLayerInfos", void 0), e$2([y$5()], T.prototype, "headingLevel", void 0), e$2([y$5()], T.prototype, "layout", void 0), e$2([y$5(), e$6("esri/widgets/Legend/t9n/Legend")], T.prototype, "messages", void 0), e$2([y$5(), e$6("esri/t9n/common")], T.prototype, "messagesCommon", void 0), e$2([y$5({ readOnly: true })], T.prototype, "type", void 0), e$2([y$5()], T.prototype, "view", void 0), e$2([t$3()], T.prototype, "_selectSection", null), T = e$2([c$3("esri.widgets.Legend.styles.Card")], T);
const B = T;
const e = "esri-legend", a = { service: `${e}__service`, label: `${e}__service-label`, layer: `${e}__layer`, groupLayer: `${e}__group-layer`, groupLayerChild: `${e}__group-layer-child`, layerTable: `${e}__layer-table`, layerTableSizeRamp: `${e}__layer-table--size-ramp`, layerChildTable: `${e}__layer-child-table`, layerCaption: `${e}__layer-caption`, layerBody: `${e}__layer-body`, layerRow: `${e}__layer-row`, layerCell: `${e}__layer-cell`, layerInfo: `${e}__layer-cell ${e}__layer-cell--info`, imageryLayerStretchedImage: `${e}__imagery-layer-image--stretched`, imageryLayerCellStretched: `${e}__imagery-layer-cell--stretched`, imageryLayerInfoStretched: `${e}__imagery-layer-info--stretched`, symbolContainer: `${e}__layer-cell ${e}__layer-cell--symbols`, symbol: `${e}__symbol`, rampContainer: `${e}__ramps`, sizeRamp: `${e}__size-ramp`, colorRamp: `${e}__color-ramp`, opacityRamp: `${e}__opacity-ramp`, borderlessRamp: `${e}__borderless-ramp`, rampTick: `${e}__ramp-tick`, rampFirstTick: `${e}__ramp-tick-first`, rampLastTick: `${e}__ramp-tick-last`, rampLabelsContainer: `${e}__ramp-labels`, rampLabel: `${e}__ramp-label`, message: `${e}__message`, univariateAboveAndBelowLabel: "esri-univariate-above-and-below-ramp__label" };
const w2 = `${e}__`, C = 24, R = { display: "flex", alignItems: "flex-start" }, A = { marginLeft: "3px" }, _ = { display: "table-cell", verticalAlign: "middle" };
let j = class extends O {
  constructor(e2, s2) {
    super(e2, s2), this.activeLayerInfos = null, this.headingLevel = 3, this.messages = null, this.type = "classic";
  }
  render() {
    const e2 = this.activeLayerInfos, s2 = e2 && e2.toArray().map((e3) => this._renderLegendForLayer(e3)).filter((e3) => !!e3);
    return n$2("div", null, s2 && s2.length ? s2 : n$2("div", { class: a.message }, this.messages.noLegend));
  }
  _renderLegendForLayer(e2) {
    if (!e2.ready)
      return null;
    const s2 = !!e2.children.length, t2 = `${w2}${e2.layer.uid}-version-${e2.version}`, a$12 = e2.title ? e$7({ level: this.headingLevel, class: this.classes(e$8.heading, a.label) }, e2.title) : null;
    if (s2) {
      const s3 = e2.children.map((e3) => this._renderLegendForLayer(e3)).toArray();
      return n$2("div", { class: this.classes(a.service, a.groupLayer), key: t2 }, a$12, s3);
    }
    {
      const s3 = e2.legendElements;
      if (s3 && !s3.length)
        return null;
      const i2 = s3.map((s4) => this._renderLegendForElement(s4, e2.layer, e2.effectList)).filter((e3) => !!e3);
      if (!i2.length)
        return null;
      const l2 = { [a.groupLayerChild]: !!e2.parent };
      return n$2("div", { class: this.classes(a.service, l2), key: t2 }, a$12, n$2("div", { class: a.layer }, i2));
    }
  }
  _renderLegendForElement(e2, s2, t2, a$12) {
    const i2 = "color-ramp" === e2.type, o$12 = "opacity-ramp" === e2.type, n2 = "size-ramp" === e2.type;
    let p2 = null;
    if ("symbol-table" === e2.type || n2) {
      const a$13 = e2.infos.map((a2) => this._renderLegendForElementInfo(a2, s2, t2, n2, e2.legendType)).filter((e3) => !!e3);
      a$13.length && (p2 = n$2("div", { class: a.layerBody }, a$13));
    } else
      "color-ramp" === e2.type || "opacity-ramp" === e2.type || "heatmap-ramp" === e2.type || "stretch-ramp" === e2.type ? p2 = this._renderLegendForRamp(e2, s2.opacity) : "relationship-ramp" === e2.type ? p2 = h$2(e2, this.id, { opacity: s2.opacity, effectList: t2, ariaLabel: this.messages.previewRelationshipRampAriaLabel }) : "pie-chart-ramp" === e2.type ? p2 = this._renderPieChartRamp(e2) : "univariate-above-and-below-ramp" === e2.type ? p2 = this._renderUnivariateAboveAndBelowRamp(e2, s2.opacity, t2) : "univariate-color-size-ramp" === e2.type && (p2 = this._renderUnivariateColorSizeRamp(e2, s2.opacity, t2));
    if (!p2)
      return null;
    const d2 = e2.title;
    let m2 = null;
    if ("string" == typeof d2)
      m2 = d2;
    else if (d2) {
      const e3 = o(this.messages, d2, i2 || o$12);
      m2 = l(d2, i2 || o$12) && d2.title ? `${d2.title} (${e3})` : e3;
    }
    const v2 = a$12 ? a.layerChildTable : a.layerTable, h2 = m2 ? n$2("div", { class: a.layerCaption }, m2) : null, g2 = { [a.layerTableSizeRamp]: n2 || !a$12 };
    return n$2("div", { class: this.classes(v2, g2) }, h2, p2);
  }
  _renderPieChartRamp(e2) {
    return n$2("div", { afterCreate: i, bind: e2.preview });
  }
  _renderUnivariateAboveAndBelowRamp(e2, s2, t2) {
    const { sizeRampElement: a$12, colorRampElement: i$12 } = d(e2, s2);
    if (!a$12)
      return null;
    const l2 = this.messages?.previewColorRampAriaLabel, m2 = y(a$12, "above", true), c2 = y(a$12, "below", true), y$12 = 12, h$12 = h(i$12, { width: y$12, height: m2, rampAlignment: "vertical", opacity: s2, type: "above", effectList: t2, ariaLabel: l2 }), g2 = h(i$12, { width: y$12, height: c2, rampAlignment: "vertical", opacity: s2, type: "below", effectList: t2, ariaLabel: l2 }), u2 = u$2(a$12), b2 = a$12.infos.map((e3) => e3.label), f2 = b2.map((e3, s3) => {
      const t3 = 2 === s3;
      return 0 === s3 ? n$2("div", { class: e3 ? h$12 ? a.univariateAboveAndBelowLabel : a.rampLabel : void 0, key: s3 }, e3) : t3 ? n$2("div", null) : null;
    }), w3 = b2.length - 1, C2 = Math.floor(b2.length / 2), j2 = b2.map((e3, s3) => s3 === C2 || s3 === w3 ? n$2("div", { class: e3 ? h$12 ? a.univariateAboveAndBelowLabel : a.rampLabel : void 0, key: s3 }, e3) : null), $2 = { display: "table-cell", verticalAlign: "middle" }, I2 = { marginTop: `${u2}px` }, x2 = { height: `${m2}px` }, F2 = { height: `${c2}px` };
    return n$2("div", { key: "univariate-above-and-below-ramp-preview", styles: R }, n$2("div", { class: a.layerBody }, a$12.infos.map((e3, s3) => n$2("div", { class: this.classes(a.layerRow, a.sizeRamp) }, n$2("div", { afterCreate: i, bind: e3.preview, class: a.symbol, styles: $2 }), h$12 || s3 % 2 != 0 ? null : n$2("div", { class: a.layerInfo }, b2[s3])))), h$12 ? n$2("div", { key: "color-ramp-preview", styles: I2 }, n$2("div", { styles: A }, n$2("div", { styles: _ }, n$2("div", { afterCreate: i, bind: h$12, class: a.rampContainer })), n$2("div", { styles: _ }, n$2("div", { class: a.rampLabelsContainer, styles: x2 }, f2))), n$2("div", { styles: A }, n$2("div", { styles: _ }, n$2("div", { afterCreate: i, bind: g2, class: a.rampContainer })), n$2("div", { styles: _ }, n$2("div", { class: a.rampLabelsContainer, styles: F2 }, j2)))) : null);
  }
  _renderUnivariateColorSizeRamp(e2, s2, t2) {
    const { sizeRampElement: a$12, colorRampElement: i$12 } = b(e2);
    if (!a$12)
      return null;
    const l2 = u$2(a$12), o2 = 12, c2 = y(a$12, "full", false), y$12 = h(i$12, { width: o2, height: c2, rampAlignment: "vertical", opacity: s2, type: "full", effectList: t2, ariaLabel: this.messages?.previewColorRampAriaLabel }), h$12 = a$12.infos.length - 1, g2 = a$12.infos.map((e3, s3) => 0 === s3 || s3 === h$12 ? n$2("div", { class: e3.label ? i$12 ? a.univariateAboveAndBelowLabel : a.rampLabel : void 0, key: s3 }, e3.label) : null), u2 = { display: "table-cell", verticalAlign: "middle" }, b$12 = { marginTop: `${l2}px` }, f2 = { height: `${c2}px` };
    return n$2("div", { key: "univariate-above-and-below-ramp-preview", styles: R }, n$2("div", { class: a.layerBody }, a$12.infos.map((e3) => n$2("div", { class: this.classes(a.layerRow, a.sizeRamp) }, n$2("div", { afterCreate: i, bind: e3.preview, class: a.symbol, styles: u2 })))), n$2("div", { key: "color-ramp-preview", styles: b$12 }, n$2("div", { styles: A }, n$2("div", { styles: _ }, n$2("div", { afterCreate: i, bind: y$12, class: a.rampContainer })), n$2("div", { styles: _ }, n$2("div", { class: a.rampLabelsContainer, styles: f2 }, g2)))));
  }
  _renderLegendForRamp(e2, s2) {
    const t2 = e2.infos, a$22 = "opacity-ramp" === e2.type, i$12 = "heatmap-ramp" === e2.type, l2 = "stretch-ramp" === e2.type, o2 = e2.preview, n2 = a$22 ? a.opacityRamp : "";
    o2.className = `${a.colorRamp} ${n2}`, null != s2 && (o2.style.opacity = s2.toString());
    const p2 = t2.map((e3) => n$2("div", { class: e3.label ? a.rampLabel : void 0 }, i$12 ? this.messages[e3.label] || e3.label : l2 ? a$1(e3, this.messages) : e3.label)), d2 = { width: `${C}px` }, m2 = { height: o2.style.height };
    return n$2("div", { class: a.layerRow }, n$2("div", { class: a.symbolContainer, styles: d2 }, n$2("div", { afterCreate: i, bind: o2, class: a.rampContainer })), n$2("div", { class: a.layerInfo }, n$2("div", { class: a.rampLabelsContainer, styles: m2 }, p2)));
  }
  _renderLegendForElementInfo(e2, s2, t2, a$12, i$12) {
    if (e2.type)
      return this._renderLegendForElement(e2, s2, t2, true);
    let l2 = null;
    const o$12 = u$1(s2, i$12);
    if (e2.preview ? l2 = n$2("div", { afterCreate: i, bind: e2.preview, class: a.symbol }) : e2.src && (l2 = this._renderImage(e2, s2, o$12)), !l2)
      return null;
    const n2 = { [a.imageryLayerInfoStretched]: o$12 }, p2 = { [a.imageryLayerInfoStretched]: o$12, [a.sizeRamp]: !o$12 && a$12 };
    return n$2("div", { class: a.layerRow }, n$2("div", { class: this.classes(a.symbolContainer, p2) }, l2), n$2("div", { class: this.classes(a.layerInfo, n2) }, o(this.messages, e2.label, false) || ""));
  }
  _renderImage(e2, s2, t2) {
    const { label: a$12, src: i2, opacity: l2 } = e2, o$12 = { [a.imageryLayerStretchedImage]: t2, [a.symbol]: !t2 }, n2 = { opacity: `${null != l2 ? l2 : s2.opacity}` };
    return n$2("img", { alt: o(this.messages, a$12, false), "aria-label": o(this.messages, a$12, false), border: 0, class: this.classes(o$12), height: e2.height, src: i2, styles: n2, width: e2.width });
  }
};
e$2([y$5()], j.prototype, "activeLayerInfos", void 0), e$2([y$5()], j.prototype, "headingLevel", void 0), e$2([y$5(), e$6("esri/widgets/Legend/t9n/Legend")], j.prototype, "messages", void 0), e$2([y$5({ readOnly: true })], j.prototype, "type", void 0), j = e$2([c$3("esri.widgets.Legend.styles.Classic")], j);
const $ = j;
const g = { base: "esri-legend", widgetIcon: i$6.layerList };
let u = class extends O {
  constructor(e2, t2) {
    super(e2, t2), this.headingLevel = 3, this.iconClass = g.widgetIcon, this.icon = null, this.messages = null, this.style = new $(), this.viewModel = new I$1();
  }
  initialize() {
    this.addHandles([v$5(() => this.view, "resize", () => this.scheduleRender()), v$5(() => this.activeLayerInfos, "change", () => this._refreshActiveLayerInfos(this.activeLayerInfos)), d$3(() => this.headingLevel, (e2) => {
      const { style: t2 } = this;
      t2 && (t2.headingLevel = e2);
    }), d$3(() => this.style, (e2, t2) => {
      t2 && e2 !== t2 && t2.destroy(), e2 && (e2.activeLayerInfos = this.activeLayerInfos, "card" === e2.type && (e2.view = this.view), e2.headingLevel = this.headingLevel);
    }, P$1)]);
  }
  get activeLayerInfos() {
    return this.viewModel.activeLayerInfos;
  }
  set activeLayerInfos(e2) {
    this.viewModel.activeLayerInfos = e2;
  }
  get basemapLegendVisible() {
    return this.viewModel.basemapLegendVisible;
  }
  set basemapLegendVisible(e2) {
    this.viewModel.basemapLegendVisible = e2;
  }
  get groundLegendVisible() {
    return this.viewModel.groundLegendVisible;
  }
  set groundLegendVisible(e2) {
    this.viewModel.groundLegendVisible = e2;
  }
  get hideLayersNotInCurrentView() {
    return this.viewModel.hideLayersNotInCurrentView;
  }
  set hideLayersNotInCurrentView(e2) {
    this.viewModel.hideLayersNotInCurrentView = e2;
  }
  get keepCacheOnDestroy() {
    return this.viewModel.keepCacheOnDestroy;
  }
  set keepCacheOnDestroy(e2) {
    this.viewModel.keepCacheOnDestroy = e2;
  }
  get respectLayerVisibility() {
    return this.viewModel.respectLayerVisibility;
  }
  set respectLayerVisibility(e2) {
    this.viewModel.respectLayerVisibility = e2;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e2) {
    this._overrideIfSome("label", e2);
  }
  get layerInfos() {
    return this.viewModel.layerInfos;
  }
  set layerInfos(e2) {
    this.viewModel.layerInfos = e2;
  }
  castStyle(e2) {
    if (e2 instanceof B || e2 instanceof $)
      return e2;
    if ("string" == typeof e2)
      return "card" === e2 ? new B() : new $();
    if (e2 && "string" == typeof e2.type) {
      const t2 = { ...e2 };
      delete t2.type;
      return new ("card" === e2.type ? B : $)(t2);
    }
    return new $();
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e2) {
    this.viewModel.view = e2;
  }
  render() {
    return n$2("div", { class: this.classes(g.base, e$8.widget, this.style instanceof $ ? e$8.panel : null) }, this.style.render());
  }
  _refreshActiveLayerInfos(e2) {
    e2.forEach((e3) => {
      this.removeHandles(`version_${e3.layer.uid}`), this._renderOnActiveLayerInfoChange(e3);
    }), this.scheduleRender();
  }
  _renderOnActiveLayerInfoChange(e2) {
    const r2 = d$3(() => e2.version, () => this.scheduleRender());
    this.addHandles(r2, `version_${e2.layer.uid}`);
    const o2 = v$5(() => e2.children, "change", () => e2.children.forEach((e3) => this._renderOnActiveLayerInfoChange(e3)), P$1);
    this.addHandles(o2, `version_${e2.layer.uid}`), e2.children.forEach((e3) => this._renderOnActiveLayerInfoChange(e3));
  }
};
e$2([y$5()], u.prototype, "activeLayerInfos", null), e$2([y$5()], u.prototype, "basemapLegendVisible", null), e$2([y$5()], u.prototype, "groundLegendVisible", null), e$2([y$5()], u.prototype, "headingLevel", void 0), e$2([y$5()], u.prototype, "hideLayersNotInCurrentView", null), e$2([y$5()], u.prototype, "keepCacheOnDestroy", null), e$2([y$5()], u.prototype, "respectLayerVisibility", null), e$2([y$5()], u.prototype, "iconClass", void 0), e$2([y$5()], u.prototype, "icon", void 0), e$2([y$5()], u.prototype, "label", null), e$2([y$5()], u.prototype, "layerInfos", null), e$2([y$5(), e$6("esri/widgets/Legend/t9n/Legend")], u.prototype, "messages", void 0), e$2([y$5()], u.prototype, "style", void 0), e$2([s$8("style")], u.prototype, "castStyle", null), e$2([y$5()], u.prototype, "view", null), e$2([y$5()], u.prototype, "viewModel", void 0), u = e$2([c$3("esri.widgets.Legend")], u);
const L = u;
export {
  L as default
};
