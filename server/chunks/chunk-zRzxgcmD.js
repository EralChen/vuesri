import { gg as e, h$ as V, id as u$1, i0 as f$1, i1 as K } from "./chunk-ejFG4zJ0.js";
import { CIMSymbolRasterizer as o } from "./chunk-7-IVRjET.js";
import { t, l } from "./chunk-0GVzsKqt.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-t6eBKp3U.js";
const s = new o(null), c = e(t.size), m = e(t.maxSize), u = e(t.lineWidth), f = 1;
async function h(e2, t2, i) {
  const l2 = t2?.size;
  let r = null != l2 && "object" == typeof l2 && "width" in l2 ? l2.width : l2, n = null != l2 && "object" == typeof l2 && "height" in l2 ? l2.height : l2;
  if (null == r || null == n)
    if ("esriGeometryPolygon" === i)
      r = c, n = c;
    else {
      const l3 = await y(e2, t2, i);
      l3 && (r = l3.width, n = l3.height), "esriGeometryPolyline" === i && (r = u), r = null != r && isFinite(r) ? Math.min(r, m) : c, n = null != n && isFinite(n) ? Math.max(Math.min(n, m), f) : c;
    }
  return "legend" === t2.style && "esriGeometryPolyline" === i && (r = u), { width: r, height: n };
}
async function y(e2, t2, l2) {
  const { feature: n, fieldMap: a, viewParams: o2 } = t2.cimOptions || t2, c2 = await f$1.resolveSymbolOverrides(e2.data, n, null, a, l2, null, o2);
  if (!c2)
    return null;
  (e2 = e2.clone()).data = { type: "CIMSymbolReference", symbol: c2 }, e2.data.primitiveOverrides = void 0;
  const m2 = [];
  return K.fetchResources(c2, s.resourceManager, m2), K.fetchFonts(c2, s.resourceManager, m2), m2.length > 0 && await Promise.all(m2), K.getEnvelope(c2, null, s.resourceManager);
}
async function p(e2, i = {}) {
  const { node: l$1, opacity: r, symbolConfig: a } = i, c2 = null != a && "object" == typeof a && "isSquareFill" in a && a.isSquareFill, m2 = i.cimOptions || i, u2 = m2.geometryType || V(e2?.data?.symbol), f2 = await h(e2, i, u2), { feature: y2, fieldMap: p2 } = m2, d = c2 || "esriGeometryPolygon" !== u2 ? "preview" : "legend", g = await s.rasterizeCIMSymbolAsync(e2, y2, f2, d, p2, u2, null, m2.viewParams, m2.allowScalingUp);
  if (!g)
    return null;
  const { width: w, height: b } = g, v = document.createElement("canvas");
  v.width = w, v.height = b;
  v.getContext("2d").putImageData(g, 0, 0);
  const M = u$1(f2.width), j = u$1(f2.height), S = new Image(M, j);
  S.src = v.toDataURL(), S.ariaLabel = i.ariaLabel ?? null, S.alt = i.ariaLabel ?? "", null != r && (S.style.opacity = `${r}`);
  let C = S;
  if (null != i.effectView) {
    const e3 = { shape: { type: "image", x: 0, y: 0, width: M, height: j, src: S.src }, fill: null, stroke: null, offset: [0, 0] };
    C = l([[e3]], [M, j], { effectView: i.effectView, ariaLabel: i.ariaLabel });
  }
  return l$1 && C && l$1.appendChild(C), C;
}
export {
  p as previewCIMSymbol
};
