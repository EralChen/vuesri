import { fs as e, h5 as O, h8 as u$1 } from "./chunk-KFNcxJaF.js";
import { b as le, n as ne } from "./chunk-G90k0bzF.js";
import { CIMSymbolRasterizer as M } from "./chunk-mwi5Pl1S.js";
import { t, l } from "./chunk-y_FkjZn_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-j9e9MSVv.js";
import "./chunk-W2fbhL5l.js";
import "./chunk-xi0IQ6PQ.js";
const s = new M(null, true), c = e(t.size), m = e(t.maxSize), u = e(t.lineWidth), f = 1;
async function h(e2, t2, i) {
  const l2 = t2?.size;
  let n = null != l2 && "object" == typeof l2 && "width" in l2 ? l2.width : l2, a = null != l2 && "object" == typeof l2 && "height" in l2 ? l2.height : l2;
  if (null == n || null == a)
    if ("esriGeometryPolygon" === i)
      n = c, a = c;
    else {
      const l3 = await y(e2, t2, i);
      l3 && (n = l3.width, a = l3.height), "esriGeometryPolyline" === i && (n = u), n = null != n && isFinite(n) ? Math.min(n, m) : c, a = null != a && isFinite(a) ? Math.max(Math.min(a, m), f) : c;
    }
  return "legend" === t2.style && "esriGeometryPolyline" === i && (n = u), { width: n, height: a };
}
async function y(e2, t2, n) {
  const { feature: a, fieldMap: r, viewParams: o } = t2.cimOptions || t2, c2 = await le.resolveSymbolOverrides(e2.data, a, null, r, n, null, o);
  if (!c2)
    return null;
  (e2 = e2.clone()).data = { type: "CIMSymbolReference", symbol: c2 }, e2.data.primitiveOverrides = void 0;
  const m2 = [];
  return ne.fetchResources(c2, s.resourceManager, m2), ne.fetchFonts(c2, s.resourceManager, m2), m2.length > 0 && await Promise.all(m2), ne.getEnvelope(c2, null, s.resourceManager);
}
async function p(e2, i = {}) {
  const { node: l$1, opacity: n, symbolConfig: r } = i, c2 = null != r && "object" == typeof r && "isSquareFill" in r && r.isSquareFill, m2 = i.cimOptions || i, u2 = m2.geometryType || O(e2?.data?.symbol), f2 = await h(e2, i, u2), { feature: y2, fieldMap: p2 } = m2, d = c2 || "esriGeometryPolygon" !== u2 ? "preview" : "legend", g = await s.rasterizeCIMSymbolAsync(e2, y2, f2, d, p2, u2, null, m2.viewParams, m2.allowScalingUp);
  if (!g)
    return null;
  const { width: w, height: b } = g, M2 = document.createElement("canvas");
  M2.width = w, M2.height = b;
  M2.getContext("2d").putImageData(g, 0, 0);
  const v = u$1(f2.width), j = u$1(f2.height), S = new Image(v, j);
  S.src = M2.toDataURL(), S.ariaLabel = i.ariaLabel ?? null, S.alt = i.ariaLabel ?? "", null != n && (S.style.opacity = `${n}`);
  let C = S;
  if (null != i.effectView) {
    const e3 = { shape: { type: "image", x: 0, y: 0, width: v, height: j, src: S.src }, fill: null, stroke: null, offset: [0, 0] };
    C = l([[e3]], [v, j], { effectView: i.effectView, ariaLabel: i.ariaLabel });
  }
  return l$1 && C && l$1.appendChild(C), C;
}
export {
  p as previewCIMSymbol
};
