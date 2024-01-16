import { id as $, nB as L, bb as s$1, aM as s$2, nC as r$2, lz as o$1, nD as t$1, h8 as u$2 } from "./chunk-KFNcxJaF.js";
const n$1 = 8388607, t = 8388608, r$1 = 254, o = 255, u$1 = 0, c$1 = 1, e = (n2) => (n2 & t) >>> 23, f$1 = (t2) => t2 & n$1, i = (n2) => e(n2) === c$1 ? r$1 : o;
function p$1(n2) {
  return e(n2) === c$1;
}
function s(n2, r2) {
  return ((r2 ? t : 0) | n2) >>> 0;
}
const n = (n2, l2) => n2 && ((...n3) => l2.warn("DEBUG:", ...n3)) || (() => null), l$2 = false;
function l$1(l2) {
  return $(l2.minDataValue) && $(l2.maxDataValue) && null != l2.minSize && null != l2.maxSize ? L.SIZE_MINMAX_VALUE : (l2.expression && "view.scale" === l2.expression || l2.valueExpression && "$view.scale" === l2.valueExpression) && Array.isArray(l2.stops) ? L.SIZE_SCALE_STOPS : (null != l2.field || l2.expression && "view.scale" !== l2.expression || l2.valueExpression && "$view.scale" !== l2.valueExpression) && (Array.isArray(l2.stops) || "levels" in l2 && l2.levels) ? L.SIZE_FIELD_STOPS : (null != l2.field || l2.expression && "view.scale" !== l2.expression || l2.valueExpression && "$view.scale" !== l2.valueExpression) && null != l2.valueUnit ? L.SIZE_UNIT_VALUE : (s$1.getLogger("esri.views.2d.engine.webgl").error(new s$2("mapview-bad-type", "Found invalid size VisualVariable", l2)), L.NONE);
}
function l(e2, t2) {
  if (!e2 || !t2)
    return e2;
  switch (t2) {
    case "radius":
    case "distance":
      return 2 * e2;
    case "diameter":
    case "width":
      return e2;
    case "area":
      return Math.sqrt(e2);
  }
  return e2;
}
function r(t2) {
  return { value: t2.value, size: o$1(t2.size) };
}
function a(e2) {
  return (e2 ?? []).map((e3) => r(e3));
}
function u(t2) {
  if ("string" == typeof t2 || "number" == typeof t2)
    return o$1(t2);
  const s2 = t2;
  return { type: "size", expression: s2.expression, stops: a(s2.stops) };
}
const p = (e2) => {
  const s2 = [], o2 = [], i2 = a(e2), l2 = i2.length;
  for (let r2 = 0; r2 < 6; r2++) {
    const e3 = i2[Math.min(r2, l2 - 1)];
    s2.push(e3.value), o2.push(null == e3.size ? t$1 : u$2(e3.size));
  }
  return { values: new Float32Array(s2), sizes: new Float32Array(o2) };
};
function c(e2) {
  const t2 = e2 && e2.length > 0 ? {} : null, s2 = t2 ? {} : null;
  if (!t2 || !s2)
    return { vvFields: t2, vvRanges: s2 };
  for (const n2 of e2)
    if (n2.field && (t2[n2.type] = n2.field), "size" === n2.type) {
      s2.size || (s2.size = {});
      const e3 = n2;
      switch (l$1(e3)) {
        case L.SIZE_MINMAX_VALUE:
          s2.size.minMaxValue = { minDataValue: e3.minDataValue, maxDataValue: e3.maxDataValue, minSize: u(e3.minSize), maxSize: u(e3.maxSize) };
          break;
        case L.SIZE_SCALE_STOPS:
          s2.size.scaleStops = { stops: a(e3.stops) };
          break;
        case L.SIZE_FIELD_STOPS:
          if (e3.levels) {
            const t3 = {};
            for (const s3 in e3.levels)
              t3[s3] = p(e3.levels[s3]);
            s2.size.fieldStops = { type: "level-dependent", levels: t3 };
          } else
            s2.size.fieldStops = { type: "static", ...p(e3.stops) };
          break;
        case L.SIZE_UNIT_VALUE:
          s2.size.unitValue = { unit: e3.valueUnit, valueRepresentation: e3.valueRepresentation ?? void 0 };
      }
    } else if ("color" === n2.type)
      s2.color = m(n2);
    else if ("opacity" === n2.type)
      s2.opacity = f(n2);
    else if ("rotation" === n2.type) {
      const e3 = n2;
      s2.rotation = { type: e3.rotationType };
    }
  return { vvFields: t2, vvRanges: s2 };
}
function f(e2) {
  const t2 = { values: [0, 0, 0, 0, 0, 0, 0, 0], opacities: [0, 0, 0, 0, 0, 0, 0, 0] };
  if ("string" == typeof e2.field) {
    if (!e2.stops)
      return null;
    {
      if (e2.stops.length > 8)
        return null;
      const s2 = e2.stops;
      for (let e3 = 0; e3 < 8; ++e3) {
        const n2 = s2[Math.min(e3, s2.length - 1)];
        t2.values[e3] = n2.value, t2.opacities[e3] = n2.opacity;
      }
    }
  } else {
    if (!(e2.stops && e2.stops.length >= 0))
      return null;
    {
      const s2 = e2.stops && e2.stops.length >= 0 ? e2.stops[0].opacity : 0;
      for (let e3 = 0; e3 < 8; e3++)
        t2.values[e3] = 1 / 0, t2.opacities[e3] = s2;
    }
  }
  return t2;
}
function v(e2, t2, s2) {
  e2[4 * t2] = s2.r / 255, e2[4 * t2 + 1] = s2.g / 255, e2[4 * t2 + 2] = s2.b / 255, e2[4 * t2 + 3] = s2.a;
}
function m(e2) {
  if (null == e2)
    return null;
  if (e2.normalizationField)
    return null;
  const t2 = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
  if ("string" == typeof e2.field) {
    if (!e2.stops)
      return null;
    {
      if (e2.stops.length > 8)
        return null;
      t2.field = e2.field;
      const s2 = e2.stops;
      for (let e3 = 0; e3 < 8; ++e3) {
        const n2 = s2[Math.min(e3, s2.length - 1)];
        t2.values[e3] = n2.value, v(t2.colors, e3, n2.color);
      }
    }
  } else {
    if (!(e2.stops && e2.stops.length >= 0))
      return null;
    {
      const s2 = e2.stops && e2.stops.length >= 0 && e2.stops[0].color;
      for (let e3 = 0; e3 < 8; e3++)
        t2.values[e3] = 1 / 0, v(t2.colors, e3, s2);
    }
  }
  for (let n2 = 0; n2 < 32; n2 += 4)
    r$2(t2.colors, n2, true);
  return t2;
}
export {
  l as a,
  n$1 as b,
  c$1 as c,
  l$1 as d,
  e,
  f$1 as f,
  c as g,
  i,
  l$2 as l,
  n,
  p$1 as p,
  s,
  u$1 as u
};
