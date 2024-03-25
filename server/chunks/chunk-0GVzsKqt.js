import { eg as u$6, d6 as d$5, eb as Z$1, ec as be, tL as r$4, ed as N$2, b$ as u$7, pY as l$4, b0 as has, r8 as n$3, j2 as n$4, ij as g$3, tM as n$5, tN as e$2, tO as i$2, tP as a$2, tQ as c$4, tR as s$5, tS as i$3, tT as I$2, tU as z$1, df as t$2, aQ as U$2, aO as s$6, tV as y$2, tW as b$2, id as u$8, aT as s$7, tX as y$3, tY as w$1, tZ as p$3, hG as n$6, t_ as g$4, ie as f$3, t$ as d$6, u0 as j$1, ii as y$4, ic as N$3, u1 as g$5, ee as i$4, u2 as R$1, u3 as D$1 } from "./chunk-ejFG4zJ0.js";
const n$2 = /^-?(\d+)(\.(\d+))?$/i;
function e$1(t2, n2) {
  return t2 - n2;
}
function r$3(t2, n2) {
  let e2, r2;
  return e2 = Number(t2.toFixed(n2)), e2 < t2 ? r2 = e2 + 1 / 10 ** n2 : (r2 = e2, e2 -= 1 / 10 ** n2), e2 = Number(e2.toFixed(n2)), r2 = Number(r2.toFixed(n2)), [e2, r2];
}
function o$2(t2, n2, e2, r2, o2) {
  const i2 = l$3(t2, n2, e2, r2), u2 = null == i2.previous || i2.previous <= o2, s2 = null == i2.next || i2.next <= o2;
  return u2 && s2 || i2.previous + i2.next <= 2 * o2;
}
function i$1(t2) {
  const e2 = String(t2), r2 = e2.match(n$2);
  if (r2 && r2[1])
    return { integer: r2[1].split("").length, fractional: r2[3] ? r2[3].split("").length : 0 };
  if (e2.toLowerCase().includes("e")) {
    const t3 = e2.split("e"), n2 = t3[0], r3 = t3[1];
    if (n2 && r3) {
      const t4 = Number(n2);
      let e3 = Number(r3);
      const o2 = e3 > 0;
      o2 || (e3 = Math.abs(e3));
      const l2 = i$1(t4);
      return o2 ? (l2.integer += e3, e3 > l2.fractional ? l2.fractional = 0 : l2.fractional -= e3) : (l2.fractional += e3, e3 > l2.integer ? l2.integer = 1 : l2.integer -= e3), l2;
    }
  }
  return { integer: 0, fractional: 0 };
}
function l$3(t2, n2, e2, r2) {
  const o2 = { previous: null, next: null };
  if (null != e2) {
    const r3 = t2 - e2, i2 = n2 - e2 - r3;
    o2.previous = Math.floor(Math.abs(100 * i2 / r3));
  }
  if (null != r2) {
    const e3 = r2 - t2, i2 = r2 - n2 - e3;
    o2.next = Math.floor(Math.abs(100 * i2 / e3));
  }
  return o2;
}
function u$5(t2, n2 = {}) {
  const l2 = t2.slice(0), { tolerance: u2 = 2, strictBounds: s2 = false, indexes: c2 = l2.map((t3, n3) => n3) } = n2;
  c2.sort(e$1);
  for (let e2 = 0; e2 < c2.length; e2++) {
    const t3 = c2[e2], n3 = l2[t3], a2 = 0 === t3 ? null : l2[t3 - 1], f2 = t3 === l2.length - 1 ? null : l2[t3 + 1], m2 = i$1(n3).fractional;
    if (m2) {
      let i2, c3 = 0, g2 = false;
      for (; c3 <= m2 && !g2; ) {
        const t4 = r$3(n3, c3);
        i2 = s2 && 0 === e2 ? t4[1] : t4[0], g2 = o$2(n3, i2, a2, f2, u2), c3++;
      }
      g2 && (l2[t3] = i2);
    }
  }
  return l2;
}
const s$4 = { maximumFractionDigits: 20 };
function c$3(n2) {
  return u$6(n2, s$4);
}
const a$1 = "<", l$2 = ">";
function r$2(e2, A2, i2, o2) {
  let r2 = "";
  0 === A2 ? r2 = `${a$1} ` : A2 === i2 && (r2 = `${l$2} `);
  return r2 + (o2 ? N$2(e2, o2) : c$3(e2));
}
const s$3 = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];
async function u$4(e2) {
  if (!("visualVariables" in e2) || !e2.visualVariables)
    return null;
  const A2 = e2.visualVariables.find((e3) => "color" === e3.type);
  if (!A2)
    return null;
  let t2 = null, n2 = null;
  if (A2.stops) {
    if (1 === A2.stops.length)
      return A2.stops[0].color;
    t2 = A2.stops[0].value, n2 = A2.stops[A2.stops.length - 1].value;
  }
  const i2 = null != t2 && null != n2 ? t2 + (n2 - t2) / 2 : 0, { getColor: o2 } = await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW);
  return o2(A2, i2) ?? null;
}
async function p$2(e2, A2) {
  const t2 = e2.trailCap, n2 = e2.trailWidth || 1, i2 = A2 || await u$4(e2) || e2.color;
  return new d$5({ cap: t2, color: i2, width: n2 });
}
function m$4(e2) {
  return null != e2 && "object" == typeof e2 && "min" in e2 && "max" in e2;
}
function f$2(e2, A2) {
  if (!A2.field)
    return null;
  if ("featureReduction" in e2)
    switch (e2.featureReduction?.type) {
      case "cluster":
      case "binning": {
        const t2 = e2.featureReduction.fields.find(({ name: e3 }) => e3.toLowerCase() === A2.field.toLowerCase());
        return t2 && "getField" in e2 ? e2.getField(t2.onStatisticField) : null;
      }
    }
  return "getField" in e2 ? e2.getField?.(A2.field) : null;
}
function d$4(e2, A2) {
  const t2 = "popupTemplate" in e2 ? e2.popupTemplate?.fieldInfos : null;
  if (t2?.length && A2)
    return t2.find((e3) => e3.fieldName?.toLowerCase() === A2.toLowerCase())?.format?.dateFormat;
}
function c$2(t2, n2, o2) {
  const a2 = f$2(t2, n2);
  if (!a2 || !Z$1(a2) && !be(a2))
    return null;
  let l2 = d$4(t2, a2.name);
  if (!l2 && "date" === a2.type) {
    let A2 = 0, t3 = 0;
    n2.stops ? (A2 = n2.stops?.at(0)?.value ?? A2, t3 = n2.stops?.at(-1)?.value ?? t3) : "minDataValue" in n2 && "maxDataValue" in n2 && (A2 = n2.minDataValue ?? A2, t3 = n2.maxDataValue ?? t3), l2 = t3 - A2 > 2 * r$4.days ? "short-date" : "short-date-short-time";
  }
  return { fieldType: a2.type, format: l2, timeZoneOptions: { layerTimeZone: "preferredTimeZone" in t2 ? t2.preferredTimeZone : null, viewTimeZone: o2, datesInUnknownTimezone: "datesInUnknownTimezone" in t2 && t2.datesInUnknownTimezone } };
}
const o$1 = new u$7([64, 64, 64]);
function n$1(l2, o2) {
  const n2 = [], r2 = l2.length - 1;
  return 5 === l2.length ? n2.push(0, 2, 4) : n2.push(0, r2), l2.map((l3, t2) => n2.includes(t2) ? r$2(l3, t2, r2, o2) : null);
}
async function r$1(l2, e2, o2) {
  let r2 = false, a2 = [], u2 = [];
  if (l2.stops) {
    const e3 = l2.stops;
    a2 = e3.map((l3) => l3.value), r2 = e3.some((l3) => !!l3.label), r2 && (u2 = e3.map((l3) => l3.label));
  }
  const s2 = a2[0], i2 = a2[a2.length - 1];
  if (null == s2 && null == i2)
    return null;
  const c2 = r2 ? null : n$1(a2, o2);
  return (await Promise.all(a2.map(async (o3, n2) => ({ value: o3, color: "opacity" === l2.type ? await t$1(o3, l2, e2) : (await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW)).getColor(l2, o3), label: r2 ? u2[n2] : c2?.[n2] ?? "" })))).reverse();
}
async function t$1(e2, n2, r2) {
  const t2 = new u$7(r2 ?? o$1), a2 = (await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW)).getOpacity(n2, e2);
  return null != a2 && (t2.a = a2), t2;
}
function a(l2) {
  let e2 = false, o2 = [], r2 = [];
  o2 = l2.map((l3) => l3.value), e2 = l2.some((l3) => !!l3.label), e2 && (r2 = l2.map((l3) => l3.label ?? ""));
  const t2 = o2[0], a2 = o2[o2.length - 1];
  if (null == t2 && null == a2)
    return null;
  const s2 = e2 ? null : n$1(o2);
  return o2.map((o3, n2) => ({ value: o3, color: u$3(o3, l2), label: e2 ? r2[n2] : s2?.[n2] ?? "" })).reverse();
}
function u$3(e2, o2) {
  const { startIndex: n2, endIndex: r2, weight: t2 } = s$2(e2, o2);
  if (n2 === r2)
    return o2[n2].color;
  const a2 = u$7.blendColors(o2[n2].color, o2[r2].color, t2);
  return new u$7(a2);
}
function s$2(l2, e2) {
  let o2 = 0, n2 = e2.length - 1;
  return e2.some((e3, r2) => l2 < e3.value ? (n2 = r2, true) : (o2 = r2, false)), { startIndex: o2, endIndex: n2, weight: (l2 - e2[o2].value) / (e2[n2].value - e2[o2].value) };
}
function i(e2, o2) {
  let n2 = [];
  if (e2 && "multipart" === e2.type)
    e2.colorRamps.reverse().forEach((r2, t2) => {
      0 === t2 ? n2.push({ value: o2.max, color: new u$7(r2.toColor), label: "high" }) : n2.push({ value: null, color: new u$7(r2.toColor), label: "" }), t2 === e2.colorRamps.length - 1 ? n2.push({ value: o2.min, color: new u$7(r2.fromColor), label: "low" }) : n2.push({ value: null, color: new u$7(r2.fromColor), label: "" });
    });
  else {
    let r2, t2;
    e2 && "algorithmic" === e2.type ? (r2 = e2.fromColor, t2 = e2.toColor) : (r2 = [0, 0, 0, 1], t2 = [255, 255, 255, 1]), n2 = [{ value: o2.max, color: new u$7(t2), label: "high" }, { value: o2.min, color: new u$7(r2), label: "low" }];
  }
  return n2;
}
function r(r2) {
  if (!r2.colorStops)
    return [];
  const e2 = [...r2.colorStops].filter((o2) => o2.color?.a > 0);
  let t2 = e2.length - 1;
  if (e2 && e2[0]) {
    const r3 = e2[t2];
    r3 && 1 !== r3.ratio && (e2.push(new l$4({ ratio: 1, color: r3.color })), t2++);
  }
  return e2.map((o2, e3) => {
    let l2 = "";
    return 0 === e3 ? l2 = r2.legendOptions?.minLabel || "low" : e3 === t2 && (l2 = r2.legendOptions?.maxLabel || "high"), { color: o2.color, label: l2, ratio: o2.ratio };
  }).reverse();
}
var t;
!function(a2) {
  a2[a2.size = 22] = "size", a2[a2.lineWidth = 50] = "lineWidth", a2[a2.maxSize = 120] = "maxSize", a2[a2.maxOutlineSize = 80] = "maxOutlineSize", a2[a2.tallSymbolWidth = 20] = "tallSymbolWidth";
}(t || (t = {}));
const e = { fill: [{ type: "path", path: "M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z" }], squareFill: [{ type: "path", path: "M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z" }], meshSymbol3DFill: [{ type: "path", path: "M -10,-8 L 6,0 L 6,6 L -10,6 L -10,-8 Z" }, { type: "path", path: "M -10,-8 L -7,-10 L 9,-2 L 6,0 L -10,-8 Z" }, { type: "path", path: "M 6,0 L 9,-2 L 9,4 L 6,6 L 6,0 Z" }], pathSymbol3DLayer: [{ type: "path", path: "M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z" }, { type: "circle", cx: -2, cy: 10, r: 5 }], extrudeSymbol3DLayer: [{ type: "path", path: "M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z" }, { type: "path", path: "M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z" }, { type: "path", path: "M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z" }], cone: [{ type: "path", path: "M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z" }], tallCone: [{ type: "path", path: "M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z" }], invertedCone: [{ type: "path", path: "M 0,7 L -8,-8 L 8,-8 Z" }, { type: "path", path: "M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z" }], cube: [{ type: "path", path: "M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z" }, { type: "path", path: "M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z" }, { type: "path", path: "M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z" }], tallCube: [{ type: "path", path: "M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z" }, { type: "path", path: "M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z" }, { type: "path", path: "M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z" }], cylinder: [{ type: "path", path: "M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z" }, { type: "ellipse", cx: 0, cy: -9, rx: 8, ry: 2 }], tallCylinder: [{ type: "path", path: "M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z" }, { type: "ellipse", cx: 0, cy: -9, rx: 3.5, ry: 1 }], diamond: [{ type: "path", path: "M 0,-10 L 10,-1 L -1,1 L 0,-10 Z" }, { type: "path", path: "M 0,-10 L -1,1 L -8,-1 L 0,-10 Z" }, { type: "path", path: "M -1,1 L 0,10 L -8,-1 L -1,1 Z" }, { type: "path", path: "M -1,0 L 0,10 L 10,-1 L -1,1 Z" }], tetrahedron: [{ type: "path", path: "M 0,-10 L 10,7 L 0,0 L 0,-10 Z" }, { type: "path", path: "M 0,-10 L 0,0 L -8,7 L 0,-10 Z" }, { type: "path", path: "M 10,7 L 0,0 L -8,7 L 10,7 Z" }] };
function m$3(a2, e2, m2) {
  const c2 = t.size;
  let p2 = c2, L2 = c2;
  a2 < 1 ? p2 *= 0.75 : a2 > 1 && (L2 *= 1.25);
  const n2 = 0, l2 = 0;
  let o2 = c2, s2 = c2;
  e2 && m2 && (p2 = L2 = o2 = s2 = 0);
  return [{ type: "path", path: [{ command: "M", values: [o2, n2] }, { command: "L", values: [m2 ? o2 : 0.875 * o2, n2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, L2 - 0.5 * s2] }, { command: "L", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [o2, n2] }, { command: "L", values: [o2, e2 ? n2 : 0.125 * s2] }, { command: "L", values: [p2 - 0.5 * o2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "L", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, L2 - 0.5 * s2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "L", values: [p2 - 0.5 * o2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "Z", values: [] }] }];
}
function c$1(a2) {
  const e2 = t.size, m2 = 0.5 * a2, c2 = 0, p2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [p2, 0.7 * e2 * 0.5] }, { command: "L", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [0.3 * e2, 0.7 * e2 + m2] }, { command: "L", values: [p2, 0.7 * e2 + m2 - 0.7 * e2 * 0.5] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [0.3 * e2, 0.7 * e2 + m2] }, { command: "L", values: [e2, m2] }, { command: "L", values: [e2, c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.3 * e2, c2] }, { command: "L", values: [e2, c2] }, { command: "L", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [p2, 0.7 * e2 * 0.5] }, { command: "Z", values: [] }] }];
}
function p$1() {
  return [{ type: "path", path: "M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27" }, { type: "path", path: "M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z" }, { type: "path", path: "M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z" }];
}
function L$2(a2, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a2;
  const c2 = a2, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0, n2 = 0, l2 = e2 ? 0.35 * m2 : 0.5 * m2;
  return [{ type: "path", path: [{ command: "M", values: [0.5 * m2, L2] }, { command: "L", values: [m2, 0.5 * l2] }, { command: "L", values: [0.5 * m2, l2] }, { command: "L", values: [n2, 0.5 * l2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, 0.5 * l2] }, { command: "L", values: [0.5 * m2, l2] }, { command: "L", values: [0.5 * m2, c2] }, { command: "L", values: [n2, c2 - 0.5 * l2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.5 * m2, l2] }, { command: "L", values: [0.5 * m2, c2] }, { command: "L", values: [m2, c2 - 0.5 * l2] }, { command: "L", values: [m2, 0.5 * l2] }, { command: "Z", values: [] }] }];
}
function n(a2, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a2;
  const c2 = a2, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0.5 * m2, n2 = 0.15 * m2, l2 = 0, o2 = c2 - n2;
  return [{ type: "ellipse", cx: 0.5 * m2, cy: o2, rx: L2, ry: n2 }, { type: "path", path: [{ command: "M", values: [l2, n2] }, { command: "L", values: [l2, o2] }, { command: "L", values: [m2, o2] }, { command: "L", values: [m2, n2] }, { command: "Z", values: [] }] }, { type: "ellipse", cx: 0.5 * m2, cy: n2, rx: L2, ry: n2 }];
}
function l$1(a2, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a2;
  const c2 = a2, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0.15 * m2, n2 = c2 - L2;
  return [{ type: "ellipse", cx: 0.5 * m2, cy: n2, rx: 0.5 * m2, ry: L2 }, { type: "path", path: [{ command: "M", values: [0.5 * m2, 0] }, { command: "L", values: [m2, n2] }, { command: "L", values: [0, n2] }, { command: "Z", values: [] }] }];
}
function o(a2) {
  let e2 = a2;
  const m2 = a2, c2 = 6;
  e2 < t.size ? e2 -= 0.5 * c2 : e2 -= c2;
  const p2 = 0.15 * e2, L2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [0, L2] }, { command: "L", values: [e2, L2] }, { command: "L", values: [0.5 * e2, m2 - p2] }, { command: "Z", values: [] }] }, { type: "ellipse", cx: 0.5 * e2, cy: L2, rx: 0.5 * e2, ry: p2 }];
}
function s$1(a2) {
  let e2 = a2;
  const m2 = a2, c2 = 4;
  e2 < t.size ? e2 -= 0.5 * c2 : e2 -= c2;
  const p2 = 0, L2 = 0, n2 = e2, l2 = m2, o2 = Math.floor(a2 / 10) - 1 || 1;
  return [{ type: "path", path: [{ command: "M", values: [0.45 * n2, p2] }, { command: "L", values: [n2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * n2, p2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "L", values: [L2, 0.5 * l2 - o2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "L", values: [0.45 * n2, m2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * n2, m2] }, { command: "L", values: [n2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "Z", values: [] }] }];
}
function u$2(a2) {
  const e2 = a2, m2 = 2;
  let c2 = a2;
  c2 < t.size ? c2 -= 0.5 * m2 : c2 -= m2;
  const p2 = 0, L2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [0.45 * e2, p2] }, { command: "L", values: [e2, c2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * e2, p2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "L", values: [L2, c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, c2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "L", values: [e2, c2] }, { command: "Z", values: [] }] }];
}
function h$1(a2, t2) {
  const e2 = 0.75;
  return Math.round(Math.min(Math.max(a2 + 255 * t2 * e2, 0), 255));
}
function d$3(t2, e2) {
  if (null == t2)
    return new u$7();
  if ("type" in t2 && ("linear" === t2.type || "pattern" === t2.type))
    return t2;
  const m2 = new u$7(t2);
  return new u$7([h$1(m2.r, e2), h$1(m2.g, e2), h$1(m2.b, e2), m2.a]);
}
const f$1 = "http://www.w3.org/2000/svg";
let c = 0, u$1 = 0;
const d$2 = has("android"), y$1 = has("chrome") || d$2 && d$2 >= 4 ? "auto" : "optimizeLegibility", p = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 }, g$2 = /([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;
let m$2 = {}, x = {};
const w = Math.PI;
let k$1 = 1;
function b$1(t2, e2) {
  const i2 = t2 * (w / 180);
  return Math.abs(e2 * Math.sin(i2)) + Math.abs(e2 * Math.cos(i2));
}
function j(t2) {
  return t2.map((t3) => `${t3.command} ${t3.values.join(" ")}`).join(" ").trim();
}
function v$1(t2, i2, r2, n2, o2) {
  if (t2) {
    if ("circle" === t2.type)
      return n$3("circle", { cx: t2.cx, cy: t2.cy, fill: i2, "fill-rule": "evenodd", r: t2.r, stroke: r2.color, "stroke-dasharray": r2.dashArray, "stroke-dashoffset": r2.dashOffset, "stroke-linecap": r2.cap, "stroke-linejoin": r2.join, "stroke-miterlimit": "4", "stroke-width": r2.width });
    if ("ellipse" === t2.type)
      return n$3("ellipse", { cx: t2.cx, cy: t2.cy, fill: i2, "fill-rule": "evenodd", rx: t2.rx, ry: t2.ry, stroke: r2.color, "stroke-dasharray": r2.dashArray, "stroke-linecap": r2.cap, "stroke-linejoin": r2.join, "stroke-miterlimit": "4", "stroke-width": r2.width });
    if ("rect" === t2.type)
      return n$3("rect", { fill: i2, "fill-rule": "evenodd", height: t2.height, stroke: r2.color, "stroke-dasharray": r2.dashArray, "stroke-linecap": r2.cap, "stroke-linejoin": r2.join, "stroke-miterlimit": "4", "stroke-width": r2.width, width: t2.width, x: t2.x, y: t2.y });
    if ("image" === t2.type)
      return n$3("image", { alt: o2 || "image", height: t2.height, href: t2.src, preserveAspectRatio: "none", width: t2.width, x: t2.x, y: t2.y });
    if ("path" === t2.type) {
      const e2 = "string" != typeof t2.path ? j(t2.path) : t2.path;
      return n$3("path", { d: e2, fill: i2, "fill-rule": "evenodd", stroke: r2.color, "stroke-dasharray": r2.dashArray, "stroke-linecap": r2.cap, "stroke-linejoin": r2.join, "stroke-miterlimit": "4", "stroke-width": r2.width });
    }
    if ("text" === t2.type)
      return n$4(n2), n$3("text", { "dominant-baseline": n2.dominantBaseline, fill: i2, "fill-rule": "evenodd", "font-family": n2.font.family, "font-size": n2.font.size, "font-style": n2.font.style, "font-variant": n2.font.variant, "font-weight": n2.font.weight, kerning: n2.kerning, rotate: n2.rotate, stroke: r2.color, "stroke-dasharray": r2.dashArray, "stroke-linecap": r2.cap, "stroke-linejoin": r2.join, "stroke-miterlimit": "4", "stroke-width": r2.width, "text-anchor": n2.align, "text-decoration": n2.decoration, "text-rendering": y$1, x: t2.x, y: t2.y }, t2.text);
  }
  return null;
}
function M(e2) {
  const i2 = { fill: "none", pattern: null, linearGradient: null };
  if (e2) {
    if ("type" in e2 && "pattern" === e2.type) {
      const t2 = "patternId-" + ++c;
      i2.fill = `url(#${t2})`, i2.pattern = { id: t2, x: e2.x, y: e2.y, width: e2.width, height: e2.height, image: { x: 0, y: 0, width: e2.width, height: e2.height, href: e2.src } };
    } else if ("type" in e2 && "linear" === e2.type) {
      const r2 = "linearGradientId-" + ++u$1;
      i2.fill = `url(#${r2})`, i2.linearGradient = { id: r2, x1: e2.x1, y1: e2.y1, x2: e2.x2, y2: e2.y2, stops: e2.colors.map((e3) => ({ offset: e3.offset, color: e3.color && new u$7(e3.color).toString() })) };
    } else if (e2) {
      const r2 = new u$7(e2);
      i2.fill = r2.toString();
    }
  }
  return i2;
}
function A$1(e2) {
  const i2 = { color: "none", width: 1, cap: "butt", join: "4", dashArray: "none", dashOffset: "0" };
  return e2 && (null != e2.width && (i2.width = e2.width), e2.cap && (i2.cap = e2.cap), e2.join && (i2.join = e2.join.toString()), e2.color && (i2.color = new u$7(e2.color).toString()), e2.dashArray && (i2.dashArray = e2.dashArray), e2.dashoffset && (i2.dashOffset = e2.dashoffset), e2.style && !e2.dashArray && (i2.dashArray = g$3(e2).join(",") || "none")), i2;
}
function S$1(t2, i2) {
  const r2 = { align: null, decoration: null, kerning: null, rotate: null, font: { style: null, variant: null, weight: null, size: null, family: null } };
  if (t2) {
    const n2 = t2.alignBaseline, o2 = "baseline" === n2 ? "auto" : "top" === n2 ? "text-top" : "bottom" === n2 ? "hanging" : n2;
    r2.align = t2.align, r2.dominantBaseline = o2, r2.decoration = t2.decoration, r2.kerning = t2.kerning ? "auto" : "0", r2.rotate = t2.rotated ? "90" : "0", n$4(i2), r2.font.style = i2.style || "normal", r2.font.variant = i2.variant || "normal", r2.font.weight = i2.weight || "normal", r2.font.size = i2.size && i2.size.toString() || "10pt", r2.font.family = i2.family || "serif";
  }
  return r2;
}
function $$1(t2) {
  const { pattern: e2, linearGradient: i2 } = t2;
  if (e2)
    return n$3("pattern", { height: e2.height, id: e2.id, patternUnits: "userSpaceOnUse", width: e2.width, x: e2.x, y: e2.y }, n$3("image", { height: e2.image.height, href: e2.image.href, width: e2.image.width, x: e2.image.x, y: e2.image.y }));
  if (i2) {
    const t3 = i2.stops.map((t4, e3) => n$3("stop", { key: `${e3}-stop`, offset: t4.offset, "stop-color": t4.color }));
    return n$3("linearGradient", { gradientUnits: "userSpaceOnUse", id: i2.id, x1: i2.x1, x2: i2.x2, y1: i2.y1, y2: i2.y2 }, t3);
  }
  return null;
}
function N$1(t2, e2) {
  if (!t2 || 0 === t2.length)
    return null;
  const i2 = [];
  for (const r2 of t2) {
    const { shape: t3, fill: e3, stroke: n2, font: o2 } = r2, s2 = M(e3), a2 = A$1(n2), l2 = "text" === t3.type ? S$1(t3, o2) : null, h2 = v$1(t3, s2.fill, a2, l2);
    h2 && i2.push(h2);
  }
  return n$3("mask", { id: e2, maskUnits: "userSpaceOnUse" }, n$3("g", null, i2));
}
function G$1(t2, e2, i2) {
  return i$2(t2, a$2(t2), [e2, i2]);
}
function I$1(t2, e2, i2, r2, n2) {
  return c$4(t2, a$2(t2), [e2, i2]), t2[4] = t2[4] * e2 - r2 * e2 + r2, t2[5] = t2[5] * i2 - n2 * i2 + n2, t2;
}
function z(t2, e2, i2, r2) {
  const n2 = e2 % 360 * Math.PI / 180;
  s$5(t2, a$2(t2), n2);
  const s2 = Math.cos(n2), l2 = Math.sin(n2), h2 = t2[4], f2 = t2[5];
  return t2[4] = h2 * s2 - f2 * l2 + r2 * l2 - i2 * s2 + i2, t2[5] = f2 * s2 + h2 * l2 - i2 * l2 - r2 * s2 + r2, t2;
}
function B$1(t2, e2) {
  m$2 && "left" in m$2 ? (null != m$2.left && m$2.left > t2 && (m$2.left = t2), (null == m$2.right || m$2.right < t2) && (m$2.right = t2), (null == m$2.top || m$2.top > e2) && (m$2.top = e2), (null == m$2.bottom || m$2.bottom < e2) && (m$2.bottom = e2)) : m$2 = { left: t2, bottom: e2, right: t2, top: e2 };
}
function U$1(t2) {
  const e2 = t2.args, i2 = e2.length;
  let r2;
  switch (t2.action) {
    case "M":
    case "L":
    case "C":
    case "S":
    case "Q":
    case "T":
      for (r2 = 0; r2 < i2; r2 += 2)
        B$1(e2[r2], e2[r2 + 1]);
      x.x = e2[i2 - 2], x.y = e2[i2 - 1];
      break;
    case "H":
      for (r2 = 0; r2 < i2; ++r2)
        B$1(e2[r2], x.y);
      x.x = e2[i2 - 1];
      break;
    case "V":
      for (r2 = 0; r2 < i2; ++r2)
        B$1(x.x, e2[r2]);
      x.y = e2[i2 - 1];
      break;
    case "m": {
      let t3 = 0;
      "x" in x || (B$1(x.x = e2[0], x.y = e2[1]), t3 = 2);
      for (r2 = t3; r2 < i2; r2 += 2)
        B$1(x.x += e2[r2], x.y += e2[r2 + 1]);
      break;
    }
    case "l":
    case "t":
      for (r2 = 0; r2 < i2; r2 += 2)
        B$1(x.x += e2[r2], x.y += e2[r2 + 1]);
      break;
    case "h":
      for (r2 = 0; r2 < i2; ++r2)
        B$1(x.x += e2[r2], x.y);
      break;
    case "v":
      for (r2 = 0; r2 < i2; ++r2)
        B$1(x.x, x.y += e2[r2]);
      break;
    case "c":
      for (r2 = 0; r2 < i2; r2 += 6)
        B$1(x.x + e2[r2], x.y + e2[r2 + 1]), B$1(x.x + e2[r2 + 2], x.y + e2[r2 + 3]), B$1(x.x += e2[r2 + 4], x.y += e2[r2 + 5]);
      break;
    case "s":
    case "q":
      for (r2 = 0; r2 < i2; r2 += 4)
        B$1(x.x + e2[r2], x.y + e2[r2 + 1]), B$1(x.x += e2[r2 + 2], x.y += e2[r2 + 3]);
      break;
    case "A":
      for (r2 = 0; r2 < i2; r2 += 7)
        B$1(e2[r2 + 5], e2[r2 + 6]);
      x.x = e2[i2 - 2], x.y = e2[i2 - 1];
      break;
    case "a":
      for (r2 = 0; r2 < i2; r2 += 7)
        B$1(x.x += e2[r2 + 5], x.y += e2[r2 + 6]);
  }
}
function F$1(t2, e2, i2) {
  const r2 = p[t2.toLowerCase()];
  let n2;
  "number" == typeof r2 && (r2 ? e2.length >= r2 && (n2 = { action: t2, args: e2.slice(0, e2.length - e2.length % r2) }, i2.push(n2), U$1(n2)) : (n2 = { action: t2, args: [] }, i2.push(n2), U$1(n2)));
}
function O$1(t2) {
  const e2 = ("string" != typeof t2.path ? j(t2.path) : t2.path).match(g$2), i2 = [];
  if (m$2 = {}, x = {}, !e2)
    return null;
  let r2 = "", n2 = [];
  const o2 = e2.length;
  for (let a2 = 0; a2 < o2; ++a2) {
    const t3 = e2[a2], o3 = parseFloat(t3);
    isNaN(o3) ? (r2 && F$1(r2, n2, i2), n2 = [], r2 = t3) : n2.push(o3);
  }
  F$1(r2, n2, i2);
  const s2 = { x: 0, y: 0, width: 0, height: 0 };
  return m$2 && "left" in m$2 && (s2.x = m$2.left, s2.y = m$2.top, s2.width = m$2.right - m$2.left, s2.height = m$2.bottom - m$2.top), s2;
}
function T$1(t2) {
  const e2 = { x: 0, y: 0, width: 0, height: 0 };
  if ("circle" === t2.type)
    e2.x = t2.cx - t2.r, e2.y = t2.cy - t2.r, e2.width = 2 * t2.r, e2.height = 2 * t2.r;
  else if ("ellipse" === t2.type)
    e2.x = t2.cx - t2.rx, e2.y = t2.cy - t2.ry, e2.width = 2 * t2.rx, e2.height = 2 * t2.ry;
  else if ("image" === t2.type || "rect" === t2.type)
    e2.x = t2.x, e2.y = t2.y, e2.width = t2.width, e2.height = t2.height;
  else if ("path" === t2.type) {
    const i2 = O$1(t2);
    e2.x = i2.x, e2.y = i2.y, e2.width = i2.width, e2.height = i2.height;
  }
  return e2;
}
function E$1(t2) {
  const e2 = { x: 0, y: 0, width: 0, height: 0 };
  let i2 = null, r2 = Number.NEGATIVE_INFINITY, n2 = Number.NEGATIVE_INFINITY;
  for (const o2 of t2)
    i2 ? (i2.x = Math.min(i2.x, o2.x), i2.y = Math.min(i2.y, o2.y), r2 = Math.max(r2, o2.x + o2.width), n2 = Math.max(n2, o2.y + o2.height)) : (i2 = e2, i2.x = o2.x, i2.y = o2.y, r2 = o2.x + o2.width, n2 = o2.y + o2.height);
  return i2 && (i2.width = r2 - i2.x, i2.height = n2 - i2.y), i2;
}
function L$1(t2, e2, n2, o2, s2, a2, l2, h2, f2) {
  let c2 = (l2 && a2 ? b$1(a2, e2) : e2) / 2, u2 = (l2 && a2 ? b$1(a2, n2) : n2) / 2;
  if (f2) {
    const t3 = f2[0], e3 = f2[1];
    c2 = (l2 && a2 ? b$1(a2, t3) : t3) / 2, u2 = (l2 && a2 ? b$1(a2, e3) : e3) / 2;
  }
  const d2 = t2.width + o2, y2 = t2.height + o2, p2 = n$5(), g2 = n$5();
  let m2 = false;
  if (s2 && 0 !== d2 && 0 !== y2) {
    const t3 = e2 !== n2 ? e2 / n2 : d2 / y2, i2 = e2 > n2 ? e2 : n2;
    let o3 = 1, s3 = 1;
    isNaN(i2) || (t3 > 1 ? (o3 = i2 / d2, s3 = i2 / t3 / y2) : (s3 = i2 / y2, o3 = i2 * t3 / d2)), e$2(g2, g2, I$1(p2, o3, s3, c2, u2)), m2 = true;
  }
  const x2 = t2.x + (d2 - o2) / 2, w2 = t2.y + (y2 - o2) / 2;
  if (e$2(g2, g2, G$1(p2, c2 - x2, u2 - w2)), !m2 && (d2 > e2 || y2 > n2)) {
    const t3 = d2 / e2 > y2 / n2, i2 = (t3 ? e2 : n2) / (t3 ? d2 : y2);
    e$2(g2, g2, I$1(p2, i2, i2, x2, w2));
  }
  return a2 && e$2(g2, g2, z(p2, a2, x2, w2)), h2 && e$2(g2, g2, G$1(p2, h2[0], h2[1])), `matrix(${g2[0]},${g2[1]},${g2[2]},${g2[3]},${g2[4]},${g2[5]})`;
}
function V$2(t2, e2, i2) {
  const r2 = t2?.effects.find((t3) => "bloom" === t3.type);
  if (!r2)
    return null;
  const { strength: n2, radius: o2 } = r2, s2 = n2 > 0 ? o2 : 0, a2 = (n2 + s2) * e2, l2 = 4 * n2 + 1;
  return n$3("filter", { filterUnits: "userSpaceOnUse", height: "300%", id: `bloom${i2}`, width: "300%", x: "-100%", y: "-100%" }, n$3("feMorphology", { in: "SourceGraphic", operator: "dilate", radius: (n2 + 0.5 * s2) * (5 ** (e2 / 100) * (0.4 + e2 / 100)), result: "dilate" }), n$3("feGaussianBlur", { in: "dilate", result: "blur", stdDeviation: a2 / 25 }), n$3("feGaussianBlur", { in: "blur", result: "intensityBlur", stdDeviation: a2 / 50 }), n$3("feComponentTransfer", { in: "SourceGraphic", result: "intensityBrightness" }, n$3("feFuncR", { slope: l2, type: "linear" }), n$3("feFuncG", { slope: l2, type: "linear" }), n$3("feFuncB", { slope: l2, type: "linear" })), n$3("feMerge", null, n$3("feMergeNode", { in: "intensityBlur" }), n$3("feMergeNode", { in: "intensityBrightness" }), n$3("feGaussianBlur", { stdDeviation: n2 / 10 })));
}
function C$2(t2, i2, r2, n2 = {}) {
  const o2 = [], s2 = [], a2 = ++k$1, l2 = V$2(n2.effectView, i2, a2);
  let c2 = null;
  if (l2) {
    const t3 = n2.effectView?.effects.find((t4) => "bloom" === t4.type), e2 = (t3.strength ? t3.strength + t3.radius / 2 : 0) / 3, o3 = i2 + i2 * e2, s3 = r2 + r2 * e2;
    c2 = [Math.max(o3, 10), Math.max(s3, 10)];
  }
  for (let e2 = 0; e2 < t2.length; e2++) {
    const a3 = t2[e2], l3 = [], f2 = [];
    let u3 = 0, d2 = 0, y2 = 0;
    for (const t3 of a3) {
      const { shape: e3, fill: i3, stroke: r3, font: s3, offset: a4 } = t3;
      n2.ignoreStrokeWidth || "text" === e3.type || (u3 += r3?.width || 0);
      const h2 = M(i3), c3 = A$1(r3), p3 = "text" === e3.type ? S$1(e3, s3) : null;
      o2.push($$1(h2)), l3.push(v$1(e3, h2.fill, c3, p3, n2.ariaLabel)), f2.push(T$1(e3)), a4 && (d2 += a4[0], y2 += a4[1]);
    }
    const p2 = L$1(E$1(f2), i2, r2, u3, n2.scale ?? false, n2.rotation, n2.useRotationSize ?? false, [d2, y2], c2);
    let g2 = null;
    if (n2.masking) {
      const t3 = `mask-${e2}`, i3 = n2.masking[e2];
      o2.push(N$1(i3, t3)), g2 = `url(#${t3})`;
    }
    s2.push(g2 ? n$3("g", { mask: g2 }, n$3("g", { transform: p2 }, l3)) : n$3("g", { transform: p2 }, l3));
  }
  n2.useRotationSize && n2.rotation && (i2 = b$1(n2.rotation, i2), r2 = b$1(n2.rotation, r2)), l2 && (n$4(c2), i2 = c2[0], r2 = c2[1]);
  const u2 = "display: block;";
  return n$3("svg", { "aria-labelledby": n2.ariaLabel, focusable: false, height: r2, role: "img", style: u2, width: i2, xmlns: f$1 }, l2, n$3("defs", null, o2), l2 ? n$3("g", { filter: `url(#bloom${a2})` }, s2) : s2);
}
const s = i$3();
function h(t2, e2) {
  s.append(t2, e2), s.detach(e2);
}
function l(t2, e2, i2) {
  const r2 = Math.ceil(e2[0]), n2 = Math.ceil(e2[1]);
  if (!t2.some((t3) => !!t3.length))
    return null;
  const o2 = i2?.node || document.createElement("div");
  null != i2.opacity && (o2.style.opacity = i2.opacity.toString()), null != i2.effectView && (o2.style.filter = I$2(i2.effectView));
  return h(o2, () => C$2(t2, r2, n2, i2)), o2;
}
function m$1(t2, e2) {
  t2 = Math.ceil(t2), e2 = Math.ceil(e2);
  const i2 = document.createElement("canvas");
  i2.width = t2, i2.height = e2, i2.style.width = t2 + "px", i2.style.height = e2 + "px";
  const r2 = i2.getContext("2d");
  return r2.clearRect(0, 0, t2, e2), r2;
}
function g$1(t2, i2, r2) {
  return t2 ? U$2(t2, { responseType: "image" }).then((t3) => {
    const e2 = t3.data, n2 = e2.width, o2 = e2.height, a2 = n2 / o2;
    let c2 = i2;
    if (r2) {
      const t4 = Math.max(n2, o2);
      c2 = Math.min(c2, t4);
    }
    return { image: e2, width: a2 <= 1 ? Math.ceil(c2 * a2) : c2, height: a2 <= 1 ? c2 : Math.ceil(c2 / a2) };
  }) : Promise.reject(new s$6("renderUtils: imageDataSize", "href not provided."));
}
function u(t2, e2) {
  return !(!t2 || "ignore" === e2) && ("multiply" !== e2 || 255 !== t2.r || 255 !== t2.g || 255 !== t2.b || 1 !== t2.a);
}
function f(t2, e2, n2, o2, a2) {
  switch (a2) {
    case "multiply":
      t2[e2] *= n2[0], t2[e2 + 1] *= n2[1], t2[e2 + 2] *= n2[2], t2[e2 + 3] *= n2[3];
      break;
    default: {
      const a3 = z$1({ r: t2[e2], g: t2[e2 + 1], b: t2[e2 + 2] });
      a3.h = o2.h, a3.s = o2.s, a3.v = a3.v / 100 * o2.v;
      const c2 = y$2(a3);
      t2[e2] = c2.r, t2[e2 + 1] = c2.g, t2[e2 + 2] = c2.b, t2[e2 + 3] *= n2[3];
      break;
    }
  }
}
function d$1(e2, r2, n2, o2, a2) {
  return g$1(e2, r2, a2).then((a3) => {
    const c2 = a3.width ?? r2, s2 = a3.height ?? r2;
    if (a3.image && u(n2, o2)) {
      let t2 = a3.image.width, r3 = a3.image.height;
      has("edge") && /\.svg$/i.test(e2) && (t2 -= 1, r3 -= 1);
      const h2 = m$1(c2, s2);
      h2.drawImage(a3.image, 0, 0, t2, r3, 0, 0, c2, s2);
      const l2 = h2.getImageData(0, 0, c2, s2), g2 = [n2.r / 255, n2.g / 255, n2.b / 255, n2.a], u2 = z$1(n2);
      for (let e3 = 0; e3 < l2.data.length; e3 += 4)
        f(l2.data, e3, g2, u2, o2);
      h2.putImageData(l2, 0, 0), e2 = h2.canvas.toDataURL("image/png");
    } else {
      const i2 = t$2?.findCredential(e2);
      if (i2?.token) {
        const t2 = e2.includes("?") ? "&" : "?";
        e2 = `${e2}${t2}token=${i2.token}`;
      }
    }
    return { url: e2, width: c2, height: s2 };
  }).catch(() => ({ url: e2, width: r2, height: r2 }));
}
const P = t.size, D = t.maxSize, U = t.maxOutlineSize, O = t.lineWidth, C$1 = t.tallSymbolWidth;
function R(e2) {
  const t2 = e2.outline, l2 = null != e2.material ? e2.material.color : null, a2 = null != l2 ? l2.toHex() : null;
  if (null == t2 || "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type && "none" === t2.pattern.style)
    return "fill" === e2.type && "#ffffff" === a2 ? { color: "#bdc3c7", width: 0.75 } : null;
  const s2 = u$8(t2.size) || 0;
  return { color: "rgba(" + (null != t2.color ? t2.color.toRgba() : "255,255,255,1") + ")", width: Math.min(s2, U), style: "pattern" in t2 && null != t2.pattern && "style" === t2.pattern.type ? w$1(t2.pattern.style) : null, join: "butt", cap: "patternCap" in t2 ? t2.patternCap : "butt" };
}
async function E(t2, l2) {
  if (t2.thumbnail?.url)
    return t2.thumbnail.url;
  if ("icon" === l2.type) {
    const e2 = l2?.resource?.href;
    if (e2)
      return p$3(l2);
  }
  const a2 = n$6("esri/images/Legend/legend3dsymboldefault.png");
  if (t2.styleOrigin && (t2.styleOrigin.styleName || t2.styleOrigin.styleUrl)) {
    const e2 = await g$4(t2.styleOrigin, { portal: t2.styleOrigin.portal }, "webRef").catch(() => null);
    if (e2 && "thumbnail" in e2 && e2.thumbnail?.url)
      return e2.thumbnail.url;
  }
  return a2;
}
function I(e2, a2 = 1) {
  const s2 = e2.a, n2 = z$1(e2), r2 = n2.h, o2 = n2.s / a2, i2 = 100 - (100 - n2.v) / a2, { r: c2, g: p2, b: u2 } = y$2({ h: r2, s: o2, v: i2 });
  return [c2, p2, u2, s2];
}
function Z(e2) {
  return "water" === e2.type ? null == e2.color ? null : e2.color : null == e2.material?.color ? null : e2.material.color;
}
function q(e2, t2 = 0) {
  const l2 = Z(e2);
  if (!l2) {
    if ("fill" === e2.type)
      return null;
    const l3 = b$2.r, a3 = h$1(l3, t2);
    return [a3, a3, a3, 100];
  }
  const a2 = l2.toRgba();
  for (let s2 = 0; s2 < 3; s2++)
    a2[s2] = h$1(a2[s2], t2);
  return a2;
}
async function H(t2, l2) {
  const a2 = t2.style;
  if ("none" === a2)
    return null;
  return { type: "pattern", x: 0, y: 0, src: await f$3(n$6(`esri/symbols/patterns/${a2}.png`), l2.toCss(true)), width: 5, height: 5 };
}
function N(e2) {
  return e2.outline ? R(e2) : { color: "rgba(0, 0, 0, 1)", width: 1.5 };
}
function T(e2, t2) {
  const l2 = Z(e2);
  if (!l2)
    return null;
  let a2 = "rgba(";
  return a2 += h$1(l2.r, t2) + ",", a2 += h$1(l2.g, t2) + ",", a2 += h$1(l2.b, t2) + ",", a2 + l2.a + ");";
}
function W(e2, t2) {
  const l2 = T(e2, t2);
  if (!l2)
    return {};
  if ("pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type && "none" === e2.pattern.style)
    return null;
  return { color: l2, width: Math.min(e2.size ? u$8(e2.size) : 0.75, U), style: "pattern" in e2 && null != e2.pattern && "style" === e2.pattern.type ? w$1(e2.pattern.style) : null, cap: "cap" in e2 ? e2.cap : null, join: "join" in e2 ? "miter" === e2.join ? u$8(2) : e2.join : null };
}
function F(e2, t2, l2) {
  const a2 = null != l2 ? 0.75 * l2 : 0;
  return { type: "linear", x1: a2 ? 0.25 * a2 : 0, y1: a2 ? 0.5 * a2 : 0, x2: a2 || 4, y2: a2 ? 0.5 * a2 : 4, colors: [{ color: e2, offset: 0 }, { color: t2, offset: 1 }] };
}
function $(e2) {
  const t2 = e2.depth, l2 = e2.height, a2 = e2.width;
  return 0 !== a2 && 0 !== t2 && 0 !== l2 && a2 === t2 && null != a2 && null != l2 && a2 < l2;
}
function A(e2, t2, l2) {
  const a2 = [];
  if (!e2)
    return a2;
  switch (e2.type) {
    case "icon": {
      const l3 = 0, s2 = 0, n2 = t2, r2 = t2;
      switch (e2.resource && e2.resource.primitive || j$1) {
        case "circle":
          a2.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: q(e2, 0), stroke: R(e2) });
          break;
        case "square":
          a2.push({ shape: { type: "path", path: [{ command: "M", values: [l3, r2] }, { command: "L", values: [l3, s2] }, { command: "L", values: [n2, s2] }, { command: "L", values: [n2, r2] }, { command: "Z", values: [] }] }, fill: q(e2, 0), stroke: R(e2) });
          break;
        case "triangle":
          a2.push({ shape: { type: "path", path: [{ command: "M", values: [l3, r2] }, { command: "L", values: [0.5 * n2, s2] }, { command: "L", values: [n2, r2] }, { command: "Z", values: [] }] }, fill: q(e2, 0), stroke: R(e2) });
          break;
        case "cross":
          a2.push({ shape: { type: "path", path: [{ command: "M", values: [0.5 * n2, s2] }, { command: "L", values: [0.5 * n2, r2] }, { command: "M", values: [l3, 0.5 * r2] }, { command: "L", values: [n2, 0.5 * r2] }] }, stroke: N(e2) });
          break;
        case "x":
          a2.push({ shape: { type: "path", path: [{ command: "M", values: [l3, s2] }, { command: "L", values: [n2, r2] }, { command: "M", values: [n2, s2] }, { command: "L", values: [l3, r2] }] }, stroke: N(e2) });
          break;
        case "kite":
          a2.push({ shape: { type: "path", path: [{ command: "M", values: [l3, 0.5 * r2] }, { command: "L", values: [0.5 * n2, s2] }, { command: "L", values: [n2, 0.5 * r2] }, { command: "L", values: [0.5 * n2, r2] }, { command: "Z", values: [] }] }, fill: q(e2, 0), stroke: R(e2) });
      }
      break;
    }
    case "object":
      switch (e2.resource && e2.resource.primitive || d$6) {
        case "cone": {
          const s2 = F(q(e2, 0), q(e2, -0.6), l2 ? C$1 : t2), n2 = l$1(t2, l2);
          a2.push({ shape: n2[0], fill: s2 }, { shape: n2[1], fill: s2 });
          break;
        }
        case "inverted-cone": {
          const l3 = q(e2, 0), s2 = F(l3, q(e2, -0.6), t2), n2 = o(t2);
          a2.push({ shape: n2[0], fill: s2 }, { shape: n2[1], fill: l3 });
          break;
        }
        case "cube": {
          const s2 = L$2(t2, l2);
          a2.push({ shape: s2[0], fill: q(e2, 0) }, { shape: s2[1], fill: q(e2, -0.3) }, { shape: s2[2], fill: q(e2, -0.5) });
          break;
        }
        case "cylinder": {
          const s2 = F(q(e2, 0), q(e2, -0.6), l2 ? C$1 : t2), n$12 = n(t2, l2);
          a2.push({ shape: n$12[0], fill: s2 }, { shape: n$12[1], fill: s2 }, { shape: n$12[2], fill: q(e2, 0) });
          break;
        }
        case "diamond": {
          const l3 = s$1(t2);
          a2.push({ shape: l3[0], fill: q(e2, -0.3) }, { shape: l3[1], fill: q(e2, 0) }, { shape: l3[2], fill: q(e2, -0.3) }, { shape: l3[3], fill: q(e2, -0.7) });
          break;
        }
        case "sphere": {
          const l3 = F(q(e2, 0), q(e2, -0.6));
          l3.x1 = 0, l3.y1 = 0, l3.x2 = 0.25 * t2, l3.y2 = 0.25 * t2, a2.push({ shape: { type: "circle", cx: 0, cy: 0, r: 0.5 * t2 }, fill: l3 });
          break;
        }
        case "tetrahedron": {
          const l3 = u$2(t2);
          a2.push({ shape: l3[0], fill: q(e2, -0.3) }, { shape: l3[1], fill: q(e2, 0) }, { shape: l3[2], fill: q(e2, -0.6) });
          break;
        }
      }
      break;
  }
  return a2;
}
function B(e2) {
  const t2 = "number" == typeof e2?.size ? e2?.size : null;
  return t2 ? u$8(t2) : null;
}
function G(e2) {
  return "icon" === e2.type ? "multiply" : "tint";
}
async function J(e2, t2) {
  const l$12 = B(t2), a2 = t2?.maxSize ? u$8(t2.maxSize) : null, r2 = t2?.disableUpsampling ?? false, o2 = e2.symbolLayers, i2 = [];
  let c2 = 0, p2 = 0;
  const u2 = o2.at(-1);
  let h2;
  u2 && "icon" === u2.type && (h2 = u2.size && u$8(u2.size)), o2.forEach((s2) => {
    if ("icon" !== s2.type && "object" !== s2.type)
      return;
    const o3 = "icon" === s2.type ? s2.size && u$8(s2.size) : 0, u3 = l$12 || o3 ? Math.ceil(Math.min(l$12 || o3, a2 || D)) : P;
    if (s2?.resource?.href) {
      const t3 = E(e2, s2).then((e3) => {
        const t4 = s2?.material?.color, l2 = G(s2);
        return d$1(e3, u3, t4, l2, r2);
      }).then((e3) => {
        const t4 = e3.width, l2 = e3.height;
        return c2 = Math.max(c2, t4), p2 = Math.max(p2, l2), [{ shape: { type: "image", x: 0, y: 0, width: t4, height: l2, src: e3.url }, fill: null, stroke: null }];
      });
      i2.push(t3);
    } else {
      let e3 = u3;
      "icon" === s2.type && h2 && l$12 && (e3 = u3 * (o3 / h2));
      const a3 = "tall" === t2?.symbolConfig || t2?.symbolConfig?.isTall || "object" === s2.type && $(s2);
      c2 = Math.max(c2, a3 ? C$1 : e3), p2 = Math.max(p2, e3), i2.push(Promise.resolve(A(s2, e3, a3)));
    }
  });
  const m2 = await Promise.allSettled(i2), f2 = [];
  return m2.forEach((e3) => {
    "fulfilled" === e3.status ? f2.push(e3.value) : e3.reason && s$7.getLogger("esri.symbols.support.previewSymbol3D").warn("error while building swatchInfo!", e3.reason);
  }), l(f2, [c2, p2], { node: t2?.node, scale: false, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel });
}
function K(e$12, t2) {
  const l$12 = e$12.symbolLayers, a2 = [], s2 = y$3(e$12), r2 = B(t2), o2 = (t2?.maxSize ? u$8(t2.maxSize) : null) || U;
  let i2, c2 = 0, p2 = 0;
  return l$12.forEach((e$13, t3) => {
    if (!e$13)
      return;
    if ("line" !== e$13.type && "path" !== e$13.type)
      return;
    const l2 = [];
    switch (e$13.type) {
      case "line": {
        const a3 = W(e$13, 0);
        if (null == a3)
          break;
        const s3 = a3?.width || 0;
        0 === t3 && (i2 = s3);
        const n2 = Math.min(r2 || s3, o2), u2 = 0 === t3 ? n2 : r2 ? n2 * (s3 / i2) : n2, h2 = u2 > O / 2 ? 2 * u2 : O;
        p2 = Math.max(p2, u2), c2 = Math.max(c2, h2), a3.width = u2, l2.push({ shape: { type: "path", path: [{ command: "M", values: [0, 0.5 * p2] }, { command: "L", values: [c2, 0.5 * p2] }] }, stroke: a3 });
        break;
      }
      case "path": {
        const t4 = Math.min(r2 || P, o2), a3 = q(e$13, 0), s3 = q(e$13, -0.2), n2 = T(e$13, -0.4), i3 = n2 ? { color: n2, width: 1 } : {};
        if ("quad" === e$13.profile) {
          const t5 = e$13.width, n3 = e$13.height, r3 = m$3(t5 && n3 ? t5 / n3 : 1, 0 === n3, 0 === t5), o3 = { ...i3, join: "bevel" };
          l2.push({ shape: r3[0], fill: s3, stroke: o3 }, { shape: r3[1], fill: s3, stroke: o3 }, { shape: r3[2], fill: a3, stroke: o3 });
        } else
          l2.push({ shape: e.pathSymbol3DLayer[0], fill: s3, stroke: i3 }, { shape: e.pathSymbol3DLayer[1], fill: a3, stroke: i3 });
        p2 = Math.max(p2, t4), c2 = p2;
      }
    }
    a2.push(l2);
  }), Promise.resolve(l(a2, [c2, p2], { node: t2?.node, scale: s2, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel }));
}
async function Q(e$12, t2) {
  const l$12 = "mesh-3d" === e$12.type, a2 = e$12.symbolLayers, s2 = B(t2), r2 = t2?.maxSize ? u$8(t2.maxSize) : null, o2 = s2 || P, i2 = [];
  let c2 = 0, p2 = 0, u2 = false;
  for (let n2 = 0; n2 < a2.length; n2++) {
    const e$13 = a2.at(n2), t3 = [];
    if (!l$12 || "fill" === e$13.type) {
      switch (e$13.type) {
        case "fill": {
          const a3 = Math.min(o2, r2 || D);
          if (c2 = Math.max(c2, a3), p2 = Math.max(p2, a3), u2 = true, l$12) {
            const l2 = e.meshSymbol3DFill, a4 = T(e$13, -0.4), s3 = a4 ? { color: a4, width: 1, join: "round" } : {};
            t3.push({ shape: l2[0], fill: q(e$13, 0), stroke: s3 }, { shape: l2[1], fill: q(e$13, -0.2), stroke: s3 }, { shape: l2[2], fill: q(e$13, -0.6), stroke: s3 });
          } else {
            let l2 = q(e$13, 0);
            const a4 = "pattern" in e$13 ? e$13.pattern : null, s3 = R(e$13), n3 = Z(e$13);
            null != a4 && "style" === a4.type && "solid" !== a4.style && n3 && (l2 = await H(a4, n3)), t3.push({ shape: e.fill[0], fill: l2, stroke: s3 });
          }
          break;
        }
        case "line": {
          const l2 = W(e$13, 0);
          if (null == l2)
            break;
          const a3 = { stroke: l2, shape: e.fill[0] };
          c2 = Math.max(c2, P), p2 = Math.max(p2, P), t3.push(a3);
          break;
        }
        case "extrude": {
          const l2 = { join: "round", width: 1, ...W(e$13, -0.4) }, a3 = q(e$13, 0), s3 = q(e$13, -0.2), n3 = Math.min(o2, r2 || D), i3 = c$1(n3);
          l2.width = 1, t3.push({ shape: i3[0], fill: s3, stroke: l2 }, { shape: i3[1], fill: s3, stroke: l2 }, { shape: i3[2], fill: a3, stroke: l2 });
          const u3 = P, h2 = 0.7 * P + 0.5 * n3;
          c2 = Math.max(c2, u3), p2 = Math.max(p2, h2);
          break;
        }
        case "water": {
          const l2 = Z(e$13), a3 = I(l2), s3 = I(l2, 2), n3 = I(l2, 3), i3 = p$1();
          u2 = true, t3.push({ shape: i3[0], fill: a3 }, { shape: i3[1], fill: s3 }, { shape: i3[2], fill: n3 });
          const h2 = Math.min(o2, r2 || D);
          c2 = Math.max(c2, h2), p2 = Math.max(p2, h2);
          break;
        }
      }
      i2.push(t3);
    }
  }
  return l(i2, [c2, p2], { node: t2?.node, scale: u2, opacity: t2?.opacity, ariaLabel: t2?.ariaLabel });
}
function V$1(e2, t2) {
  if (0 === e2.symbolLayers.length)
    return Promise.reject(new s$6("symbolPreview: renderPreviewHTML3D", "No symbolLayers in the symbol."));
  switch (e2.type) {
    case "point-3d":
      return J(e2, t2);
    case "line-3d":
      return K(e2, t2);
    case "polygon-3d":
    case "mesh-3d":
      return Q(e2, t2);
  }
  return Promise.reject(new s$6("symbolPreview: swatchInfo3D", "symbol not supported."));
}
const previewSymbol3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getPatternDescriptor: H,
  getSizeFromOptions: B,
  getSymbolLayerFill: q,
  previewSymbol3D: V$1
}, Symbol.toStringTag, { value: "Module" }));
let y = null;
const d = [255, 255, 255];
function m(e2, t2) {
  return Math.floor(Math.random() * (t2 - e2 + 1) + e2);
}
function b(e2, t$12, a2) {
  const { backgroundColor: i2, outline: s2, dotSize: r2 } = e2, n2 = a2?.swatchSize || t.size, o2 = 0.8, c2 = Math.round(n2 * n2 / Math.max(r2, 0.5) ** 2 * o2), u2 = window.devicePixelRatio, f2 = document.createElement("canvas"), p2 = n2 * u2;
  f2.width = p2, f2.height = p2, f2.style.width = f2.width / u2 + "px", f2.style.height = f2.height / u2 + "px";
  const h2 = f2.getContext("2d");
  if (i2 && (h2.fillStyle = i2.toCss(true), h2.fillRect(0, 0, p2, p2), h2.fill()), h2.fillStyle = t$12?.toCss(true) ?? "", y && y.length / 2 === c2)
    for (let l2 = 0; l2 < 2 * c2; l2 += 2) {
      const e3 = y[l2], t2 = y[l2 + 1];
      h2.fillRect(e3, t2, r2 * u2, r2 * u2), h2.fill();
    }
  else {
    y = [];
    for (let e3 = 0; e3 < 2 * c2; e3 += 2) {
      const e4 = m(0, p2), t2 = m(0, p2);
      y.push(e4, t2), h2.fillRect(e4, t2, r2 * u2, r2 * u2), h2.fill();
    }
  }
  s2 && (s2.color && (h2.strokeStyle = s2.color.toCss(true)), h2.lineWidth = s2.width, h2.strokeRect(0, 0, p2, p2));
  const d2 = new Image(n2, n2);
  return d2.src = f2.toDataURL(), d2.ariaLabel = a2?.ariaLabel ?? null, d2.alt = a2?.ariaLabel ?? "", d2;
}
function g(e2, l$12 = {}) {
  const i2 = l$12.radius || 40, s2 = 2 * Math.PI * i2, r2 = e2.length, n2 = s2 / r2, o2 = [], c2 = y$4(l$12.outline);
  null != c2?.width && (c2.width *= 2), (c2 || l$12.backgroundColor) && o2.push({ shape: { type: "circle", cx: i2, cy: i2, r: i2 }, fill: l$12.backgroundColor, stroke: c2, offset: [0, 0] });
  const u2 = l$12.values, f2 = u2 && u2.length === r2 && 100 === u2.reduce((e3, t2) => e3 + t2, 0), p2 = [0];
  for (let t2 = 0; t2 < r2; t2++) {
    let l2 = null;
    f2 && (l2 = u2[t2] * s2 / 100, p2.push(l2 + p2[t2])), o2.push({ shape: { type: "circle", cx: i2, cy: i2, r: i2 / 2 }, fill: [0, 0, 0, 0], stroke: { width: i2, dashArray: `${(l2 ?? n2) / 2} ${s2}`, dashoffset: "-" + (f2 ? p2[t2] / 2 : t2 * (n2 / 2)), color: e2[t2] }, offset: [0, 0] });
  }
  let h2 = null;
  const y2 = 2 * i2 + (c2?.width || 0), m2 = l$12.holePercentage;
  if (m2) {
    c2 && o2.push({ shape: { type: "circle", cx: i2, cy: i2, r: i2 * m2 }, fill: null, stroke: c2, offset: [0, 0] });
    const e3 = y2 / 2;
    h2 = [[{ shape: { type: "circle", cx: e3, cy: e3, r: e3 }, fill: d, stroke: c2 ? { ...c2, color: d } : null, offset: [0, 0] }, { shape: { type: "circle", cx: e3, cy: e3, r: i2 * m2 }, fill: [0, 0, 0], stroke: null, offset: [0, 0] }]];
  }
  return l([o2], [y2, y2], { effectView: l$12.effectList, ignoreStrokeWidth: true, masking: h2, rotation: -90, ariaLabel: l$12.ariaLabel });
}
function v(e2, t2 = {}) {
  const l2 = 24, a2 = 75, i2 = "horizontal" === t2.align, s2 = i2 ? a2 : l2, r2 = i2 ? l2 : a2, n2 = t2.width ?? s2, o2 = t2.height ?? r2, c2 = t2.gradient ?? true, u2 = window.devicePixelRatio, f2 = n2 * u2, p2 = o2 * u2, h2 = document.createElement("canvas");
  h2.width = f2, h2.height = p2, h2.ariaLabel = t2.ariaLabel ?? null, h2.style.width = `${n2}px`, h2.style.height = `${o2}px`;
  const y2 = h2.getContext("2d"), d2 = i2 ? f2 : 0, m2 = i2 ? 0 : p2;
  if (c2) {
    const t3 = y2.createLinearGradient(0, 0, d2, m2), l3 = e2.length, a3 = 1 === l3 ? 0 : 1 / (l3 - 1);
    e2.forEach((e3, l4) => t3.addColorStop(l4 * a3, e3.toString())), y2.fillStyle = t3, y2.fillRect(0, 0, f2, p2);
  } else {
    const t3 = i2 ? f2 / e2.length : f2, l3 = i2 ? p2 : p2 / e2.length;
    let a3 = 0, s3 = 0;
    for (const r3 of e2)
      y2.fillStyle = r3.toString(), y2.fillRect(a3, s3, t3, l3), a3 = i2 ? a3 + t3 : 0, s3 = i2 ? 0 : s3 + l3;
  }
  const b2 = document.createElement("div");
  return b2.style.width = `${n2}px`, b2.style.height = `${o2}px`, S(b2, t2?.effectList), b2.appendChild(h2), b2;
}
function S(e2, t2) {
  if (!t2)
    return;
  e2.style.filter = I$2(t2);
  const l2 = t2.effects;
  if (l2) {
    for (const a2 of l2)
      if ("drop-shadow" === a2?.type) {
        a2.offsetX < 0 ? e2.style.marginLeft = `${Math.abs(a2.offsetX)}px` : e2.style.marginRight = `${a2.offsetX}px`;
        break;
      }
  }
}
async function V(e2, t2) {
  switch (e2.type) {
    case "web-style": {
      const { previewWebStyleSymbol: l2 } = await import("./chunk-s6_-b81j.js");
      return l2(e2, V, t2);
    }
    case "label-3d":
    case "line-3d":
    case "mesh-3d":
    case "point-3d":
    case "polygon-3d": {
      const { previewSymbol3D: l2 } = await Promise.resolve().then(() => previewSymbol3D);
      return l2(e2, t2);
    }
    case "simple-marker":
    case "simple-line":
    case "simple-fill":
    case "picture-marker":
    case "picture-fill":
    case "text": {
      const { previewSymbol2D: l2 } = await import("./chunk-RePhr1cu.js");
      return l2(e2, t2);
    }
    case "cim": {
      const { previewCIMSymbol: l2 } = await import("./chunk-zRzxgcmD.js");
      return l2(e2, t2);
    }
    default:
      return;
  }
}
function k(e2) {
  return e2 && "opacity" in e2 ? e2.opacity * k(e2.parent) : 1;
}
async function L(t2, l2) {
  if (!t2)
    return;
  const a2 = t2.sourceLayer, i2 = (null != l2 && l2.useSourceLayer ? a2 : t2.layer) ?? a2, s2 = k(i2);
  if (null != t2.symbol && (null == l2 || true !== l2.ignoreGraphicSymbol)) {
    const e2 = "web-style" === t2.symbol.type ? await N$3(t2.symbol, { ...l2, cache: null != l2 ? l2.webStyleCache : null }) : t2.symbol.clone();
    return g$5(e2, null, s2), e2;
  }
  const u2 = l2?.renderer ?? C(i2);
  let f2 = u2 && "getSymbolAsync" in u2 ? await u2.getSymbolAsync(t2, l2) : null;
  if (!f2)
    return;
  if (f2 = "web-style" === f2.type ? await f2.fetchSymbol({ ...l2, cache: null != l2 ? l2.webStyleCache : null }) : f2.clone(), !u2 || !("visualVariables" in u2) || !u2.visualVariables?.length)
    return g$5(f2, null, s2), f2;
  if ("arcadeRequiredForVisualVariables" in u2 && u2.arcadeRequiredForVisualVariables && null == l2?.arcade) {
    const t3 = { ...l2 };
    t3.arcade = await i$4(), l2 = t3;
  }
  const { getColor: p2, getOpacity: h2, getAllSizes: y2, getRotationAngle: d2 } = await import("./chunk-ejFG4zJ0.js").then((n2) => n2.DW), m2 = [], b2 = [], g2 = [], w2 = [];
  for (const e2 of u2.visualVariables)
    switch (e2.type) {
      case "color":
        m2.push(e2);
        break;
      case "opacity":
        b2.push(e2);
        break;
      case "rotation":
        w2.push(e2);
        break;
      case "size":
        e2.target || g2.push(e2);
    }
  const v2 = !!m2.length && m2[m2.length - 1], S2 = v2 ? p2(v2, t2, l2) : null, V2 = !!b2.length && b2[b2.length - 1];
  let L2 = V2 ? h2(V2, t2, l2) : null;
  if (null != s2 && (L2 = null != L2 ? L2 * s2 : s2), g$5(f2, S2, L2), g2.length) {
    const e2 = y2(g2, t2, l2);
    await R$1(f2, e2);
  }
  for (const e2 of w2)
    D$1(f2, d2(e2, t2, l2), e2.axis);
  return f2;
}
function C(e2) {
  if (e2)
    return "renderer" in e2 ? e2.renderer : void 0;
}
export {
  $$1 as $,
  A$1 as A,
  C$2 as C,
  E$1 as E,
  L$1 as L,
  M,
  T$1 as T,
  V,
  l$3 as a,
  a$1 as b,
  l$2 as c,
  d$3 as d,
  e,
  v as f,
  u$3 as g,
  a as h,
  i$1 as i,
  b as j,
  g as k,
  l,
  r as m,
  m$4 as n,
  i as o,
  p$2 as p,
  q,
  r$2 as r,
  u$4 as s,
  t,
  u$5 as u,
  v$1 as v,
  s$3 as w,
  c$2 as x,
  r$1 as y,
  L as z
};
