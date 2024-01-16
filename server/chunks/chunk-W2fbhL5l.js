import { cc as c$1, cd as a } from "./chunk-KFNcxJaF.js";
import { d as de, n as ne, l, t, a as a$1 } from "./chunk-G90k0bzF.js";
import { r, e } from "./chunk-xi0IQ6PQ.js";
const m = 512;
class c {
  constructor(e2) {
    this._resourceManager = e2, this._lazyRasterizationCanvas = null;
  }
  dispose() {
    this._lazyRasterizationCanvas = null;
  }
  get _rasterizationCanvas() {
    return null == this._lazyRasterizationCanvas && (this._lazyRasterizationCanvas = document.createElement("canvas"), this._lazyRasterizationCanvas.getContext("2d", { willReadFrequently: true })), this._lazyRasterizationCanvas;
  }
  rasterizeJSONResource(l$1, m2, c2) {
    if ("simple-fill" === l$1.type || "esriSFS" === l$1.type) {
      const [t2, a2, i] = r(this._rasterizationCanvas, l$1.style, m2);
      return { size: [a2, i], image: new Uint32Array(t2.buffer), sdf: false, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: c$1(Math.ceil(m2)) };
    }
    if ("simple-line" === l$1.type || "esriSLS" === l$1.type || "line" === l$1.type && l$1.dashTemplate) {
      let e$1, a2;
      if ("simple-line" === l$1.type || "esriSLS" === l$1.type)
        switch (e$1 = de(l$1.style, l$1.cap), l$1.cap) {
          case "butt":
            a2 = "Butt";
            break;
          case "square":
            a2 = "Square";
            break;
          default:
            a2 = "Round";
        }
      else
        e$1 = l$1.dashTemplate, a2 = l$1.cim.capStyle;
      const [r2, n, s] = e(e$1, a2);
      return { size: [n, s], image: new Uint32Array(r2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 };
    }
    let f, h = null, p = null, u = 1;
    if ("simple-marker" === l$1.type || "esriSMS" === l$1.type || "line-marker" === l$1.type ? (f = ne.fromSimpleMarker(l$1), p = l(f)) : l$1.cim && "CIMHatchFill" === l$1.cim.type ? (f = ne.fromCIMHatchFill(l$1.cim, m2), h = new t(f.frame.xmin, -f.frame.ymax, f.frame.xmax - f.frame.xmin, f.frame.ymax - f.frame.ymin), u = m2) : l$1.cim.markerPlacement && "CIMMarkerPlacementInsidePolygon" === l$1.cim.markerPlacement.type ? (f = ne.fromCIMInsidePolygon(l$1.cim), h = new t(f.frame.xmin, -f.frame.ymax, f.frame.xmax - f.frame.xmin, f.frame.ymax - f.frame.ymin)) : (f = l$1.cim, l$1.avoidSDFRasterization || (p = l(f))), p && !c2) {
      const [e2, t2, a2] = a$1(p);
      return e2 ? { size: [t2, a2], image: new Uint32Array(e2.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: u } : null;
    }
    const [y, z, d, C, g] = ne.rasterize(this._rasterizationCanvas, f, h, this._resourceManager, !c2);
    return y ? { size: [z, d], image: new Uint32Array(y.buffer), sdf: false, simplePattern: false, anchorX: C, anchorY: g } : null;
  }
  rasterizeImageResource(e2, t2, a$12, r2) {
    this._rasterizationCanvas.width = e2, this._rasterizationCanvas.height = t2;
    const i = this._rasterizationCanvas.getContext("2d");
    a$12 instanceof ImageData ? i.putImageData(a$12, 0, 0) : (a$12.setAttribute("width", `${e2}px`), a$12.setAttribute("height", `${t2}px`), i.drawImage(a$12, 0, 0, e2, t2));
    const n = i.getImageData(0, 0, e2, t2), s = new Uint8Array(n.data);
    if (r2) {
      for (const l2 of r2)
        if (l2 && l2.oldColor && 4 === l2.oldColor.length && l2.newColor && 4 === l2.newColor.length) {
          const [e3, t3, a2, r3] = l2.oldColor, [i2, n2, o2, m2] = l2.newColor;
          if (e3 === i2 && t3 === n2 && a2 === o2 && r3 === m2)
            continue;
          for (let l3 = 0; l3 < s.length; l3 += 4)
            e3 === s[l3] && t3 === s[l3 + 1] && a2 === s[l3 + 2] && r3 === s[l3 + 3] && (s[l3] = i2, s[l3 + 1] = n2, s[l3 + 2] = o2, s[l3 + 3] = m2);
        }
    }
    let o;
    for (let l2 = 0; l2 < s.length; l2 += 4)
      o = s[l2 + 3] / 255, s[l2] = s[l2] * o, s[l2 + 1] = s[l2 + 1] * o, s[l2 + 2] = s[l2 + 2] * o;
    let c2 = s, f = e2, h = t2;
    const p = m;
    if (f >= p || h >= p) {
      const a$13 = f / h;
      a$13 > 1 ? (f = p, h = Math.round(p / a$13)) : (h = p, f = Math.round(p * a$13)), c2 = new Uint8Array(4 * f * h);
      const r3 = new Uint8ClampedArray(c2.buffer);
      a(s, e2, t2, r3, f, h, false);
    }
    return { size: [f, h], image: new Uint32Array(c2.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
}
export {
  c
};
