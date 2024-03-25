import { i } from "./chunk-t6eBKp3U.js";
import { h$ as V, i0 as f, i1 as K, i2 as K$1, i3 as V$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const n = 96 / 72;
class o {
  constructor(t) {
    this._spatialReference = t, this._imageDataCanvas = null, this._cimResourceManager = new i();
  }
  get _canvas() {
    return this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas")), this._imageDataCanvas;
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(e, t, i2, n2, o2, l, c, m, g) {
    if (!e)
      return null;
    const { data: y } = e;
    if (!y || "CIMSymbolReference" !== y.type || !y.symbol)
      return null;
    const { symbol: u } = y;
    l || (l = V(u));
    const d = await f.resolveSymbolOverrides(y, t, this._spatialReference, o2, l, c, m), w = this._cimResourceManager, p = [];
    K.fetchResources(d, w, p), K.fetchFonts(d, w, p), p.length > 0 && await Promise.all(p);
    const { width: b, height: f$1 } = i2, M = h(l, b, f$1, n2), C = K.getEnvelope(d, M, w);
    if (!C)
      return null;
    let R = 1, v = 0, I = 0;
    switch (u.type) {
      case "CIMPointSymbol":
      case "CIMTextSymbol":
        {
          let e2 = 1;
          C.width > b && (e2 = b / C.width);
          let t2 = 1;
          C.height > f$1 && (t2 = f$1 / C.height), "preview" === n2 && (C.width < b && (e2 = b / C.width), C.height < f$1 && (t2 = f$1 / C.height)), R = Math.min(e2, t2), v = C.x + C.width / 2, I = C.y + C.height / 2;
        }
        break;
      case "CIMLineSymbol":
        {
          (g || C.height > f$1) && (R = f$1 / C.height), I = C.y + C.height / 2;
          const e2 = C.x * R + b / 2, t2 = (C.x + C.width) * R + b / 2, { paths: i3 } = M;
          i3[0][0][0] -= e2 / R, i3[0][2][0] -= (t2 - b) / R;
        }
        break;
      case "CIMPolygonSymbol": {
        v = C.x + C.width / 2, I = C.y + C.height / 2;
        const e2 = C.x * R + b / 2, t2 = (C.x + C.width) * R + b / 2, i3 = C.y * R + f$1 / 2, r = (C.y + C.height) * R + f$1 / 2, { rings: a } = M;
        e2 < 0 && (a[0][0][0] -= e2, a[0][3][0] -= e2, a[0][4][0] -= e2), i3 < 0 && (a[0][0][1] += i3, a[0][1][1] += i3, a[0][4][1] += i3), t2 > b && (a[0][1][0] -= t2 - b, a[0][2][0] -= t2 - b), r > f$1 && (a[0][2][1] += r - f$1, a[0][3][1] += r - f$1);
      }
    }
    const S = { type: "cim", data: { type: "CIMSymbolReference", symbol: d } };
    return this.rasterize(S, b, f$1, v, I, R, l, 1, M);
  }
  rasterize(e, r, a, o2, l, c, m, g = 0, y = null) {
    const { data: u } = e;
    if (!u || "CIMSymbolReference" !== u.type || !u.symbol)
      return null;
    const { symbol: d } = u, w = this._canvas, p = (window.devicePixelRatio || 1) * n;
    w.width = r * p, w.height = a * p, m || (m = V(d)), y || (y = h(m, r, a, "legend")), w.width += 2 * g, w.height += 2 * g;
    const b = w.getContext("2d", { willReadFrequently: true }), f2 = V$1.createIdentity();
    f2.translate(-o2, -l), f2.scale(c * p, -c * p), f2.translate(r * p / 2 + g, a * p / 2 + g), b.clearRect(0, 0, w.width, w.height);
    return new K$1(b, this._cimResourceManager, f2, true).drawSymbol(d, y), b.getImageData(0, 0, w.width, w.height);
  }
}
function h(e, t, i2, r) {
  const a = 1, s = -t / 2 + a, n2 = t / 2 - a, o2 = i2 / 2 - a, h2 = -i2 / 2 + a;
  switch (e) {
    case "esriGeometryPoint":
      return { x: 0, y: 0 };
    case "esriGeometryPolyline":
      return { paths: [[[s, 0], [0, 0], [n2, 0]]] };
    default:
      return "legend" === r ? { rings: [[[s, o2], [n2, 0], [n2, h2], [s, h2], [s, o2]]] } : { rings: [[[s, o2], [n2, o2], [n2, h2], [s, h2], [s, o2]]] };
  }
}
export {
  o as CIMSymbolRasterizer
};
