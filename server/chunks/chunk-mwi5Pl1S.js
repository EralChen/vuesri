import { h5 as O, b1 as s$1, h6 as c$1, h7 as t, h8 as u, h9 as p, a$ as j$1, bu as u$1, ha as m, hb as r$1 } from "./chunk-KFNcxJaF.js";
import { r, b as le, n as ne, e as et, j, V, Q } from "./chunk-G90k0bzF.js";
import { i } from "./chunk-j9e9MSVv.js";
import { c } from "./chunk-W2fbhL5l.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-xi0IQ6PQ.js";
const C = (e) => e?.scaleFactor ? e.scaleFactor : 1, _ = 96 / 72;
class M {
  constructor(e, t2) {
    this._spatialReference = e, this._avoidSDF = t2, this._resourceCache = /* @__PURE__ */ new Map(), this._lazyImageDataCanvas = null, this._pictureMarkerCache = /* @__PURE__ */ new Map(), this._textRasterizer = new r(), this._cimResourceManager = new i(), this._rasterizer = new c(this._cimResourceManager);
  }
  get _imageDataCanvas() {
    return this._lazyImageDataCanvas ??= document.createElement("canvas"), this._lazyImageDataCanvas;
  }
  get _imageDataContext() {
    return this._imageDataCanvas.getContext("2d", { willReadFrequently: true });
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(e, t2, a, i2, r2, o, s, m2, g) {
    if (!e)
      return null;
    const { data: f } = e;
    if (!f || "CIMSymbolReference" !== f.type || !f.symbol)
      return null;
    const { symbol: d } = f;
    o || (o = O(d));
    const y = await le.resolveSymbolOverrides(f, t2, this._spatialReference, r2, o, s, m2), p2 = this._imageDataCanvas, w = this._cimResourceManager, C2 = [];
    ne.fetchResources(y, w, C2), ne.fetchFonts(y, w, C2), C2.length > 0 && await Promise.all(C2);
    const { width: M2, height: b2 } = a, I = z(o, M2, b2, i2), x = ne.getEnvelope(y, I, w);
    if (!x)
      return null;
    const R = (window.devicePixelRatio || 1) * _;
    let v = 1, D = 0, P = 0;
    switch (d.type) {
      case "CIMPointSymbol":
      case "CIMTextSymbol":
        {
          let e2 = 1;
          x.width > M2 && (e2 = M2 / x.width);
          let t3 = 1;
          x.height > b2 && (t3 = b2 / x.height), "preview" === i2 && (x.width < M2 && (e2 = M2 / x.width), x.height < b2 && (t3 = b2 / x.height)), v = Math.min(e2, t3), D = x.x + x.width / 2, P = x.y + x.height / 2;
        }
        break;
      case "CIMLineSymbol":
        {
          (g || x.height > b2) && (v = b2 / x.height), P = x.y + x.height / 2;
          const e2 = x.x * v + M2 / 2, t3 = (x.x + x.width) * v + M2 / 2, { paths: a2 } = I;
          a2[0][0][0] -= e2 / v, a2[0][2][0] -= (t3 - M2) / v;
        }
        break;
      case "CIMPolygonSymbol": {
        D = x.x + x.width / 2, P = x.y + x.height / 2;
        const e2 = x.x * v + M2 / 2, t3 = (x.x + x.width) * v + M2 / 2, a2 = x.y * v + b2 / 2, i3 = (x.y + x.height) * v + b2 / 2, { rings: r3 } = I;
        e2 < 0 && (r3[0][0][0] -= e2, r3[0][3][0] -= e2, r3[0][4][0] -= e2), a2 < 0 && (r3[0][0][1] += a2, r3[0][1][1] += a2, r3[0][4][1] += a2), t3 > M2 && (r3[0][1][0] -= t3 - M2, r3[0][2][0] -= t3 - M2), i3 > b2 && (r3[0][2][1] += i3 - b2, r3[0][3][1] += i3 - b2);
      }
    }
    p2.width = M2 * R, p2.height = b2 * R;
    const S = 1;
    p2.width += 2 * S, p2.height += 2 * S;
    const k = this._imageDataContext, A = Q.createIdentity();
    A.translate(-D, -P), A.scale(v * R, -v * R), A.translate(M2 * R / 2 + S, b2 * R / 2 + S), k.clearRect(0, 0, p2.width, p2.height);
    return new et(k, w, A, true).drawSymbol(y, I), k.getImageData(0, 0, p2.width, p2.height);
  }
  async analyzeCIMSymbol3D(e, t2, i2, o, s) {
    const n = [], l = t2 ? { geometryType: o, spatialReference: this._spatialReference, fields: t2 } : null, c2 = [];
    ne.fetchFonts(e.data.symbol, this._cimResourceManager, c2), await Promise.all(c2);
    const m2 = new j(this._cimResourceManager, l);
    let g;
    await m2.analyzeSymbolReference(e.data, this._avoidSDF, n), s$1(s);
    for (const a of n)
      "CIMPictureMarker" !== a.cim.type && "CIMPictureFill" !== a.cim.type && "CIMPictureStroke" !== a.cim.type || (g || (g = []), g.push(this._fetchPictureMarkerResource(a, s))), i2 && "text" === a.type && "string" == typeof a.text && a.text.includes("[") && (a.text = c$1(i2, a.text, a.cim.textCase));
    return g && await Promise.all(g), n;
  }
  rasterizeCIMSymbol3D(e, t$1, a, i2, r2, o) {
    const s = [];
    for (const n of e) {
      i2 && "function" == typeof i2.scaleFactor && (i2.scaleFactor = i2.scaleFactor(t$1, r2, o));
      const e2 = this._getRasterizedResource(n, t$1, a, i2, r2, o);
      if (!e2)
        continue;
      let l = 0, c2 = e2.anchorX || 0, h = e2.anchorY || 0, m2 = false, g = 0, u2 = 0;
      if ("esriGeometryPoint" === a) {
        const e3 = C(i2);
        if (g = t(n.offsetX, t$1, r2, o) * e3 || 0, u2 = t(n.offsetY, t$1, r2, o) * e3 || 0, "marker" === n.type)
          l = t(n.rotation, t$1, r2, o) || 0, m2 = n.rotateClockwise ?? false;
        else if ("text" === n.type) {
          if (l = t(n.angle, t$1, r2, o) || 0, void 0 !== n.horizontalAlignment)
            switch (n.horizontalAlignment) {
              case "left":
                c2 = -0.5;
                break;
              case "right":
                c2 = 0.5;
                break;
              default:
                c2 = 0;
            }
          if (void 0 !== n.verticalAlignment)
            switch (n.verticalAlignment) {
              case "top":
                h = 0.5;
                break;
              case "bottom":
                h = -0.5;
                break;
              case "baseline":
                h = -0.25;
                break;
              default:
                h = 0;
            }
        }
      }
      null != e2 && s.push({ angle: l, rotateClockWise: m2, anchorX: c2, anchorY: h, offsetX: g, offsetY: u2, rasterizedResource: e2 });
    }
    return this.getSymbolImage(s);
  }
  getSymbolImage(e) {
    const t2 = document.createElement("canvas"), a = t2.getContext("2d");
    let r2 = 0, o = 0, s = 0, n = 0;
    const l = [];
    for (let g = 0; g < e.length; g++) {
      const t3 = e[g], c3 = t3.rasterizedResource;
      if (!c3)
        continue;
      const h2 = c3.size, m3 = t3.offsetX, u$12 = t3.offsetY, f = t3.anchorX, d = t3.anchorY, y = t3.rotateClockWise || false;
      let p2 = t3.angle, w = u(m3) - h2[0] * (0.5 + f), C2 = u(u$12) - h2[1] * (0.5 + d), _2 = w + h2[0], M2 = C2 + h2[1];
      if (p2) {
        y && (p2 = -p2);
        const e2 = Math.sin(p2 * Math.PI / 180), t4 = Math.cos(p2 * Math.PI / 180), a2 = w * t4 - C2 * e2, i2 = w * e2 + C2 * t4, r3 = w * t4 - M2 * e2, o2 = w * e2 + M2 * t4, s2 = _2 * t4 - M2 * e2, n2 = _2 * e2 + M2 * t4, l2 = _2 * t4 - C2 * e2, c4 = _2 * e2 + C2 * t4;
        w = Math.min(a2, r3, s2, l2), C2 = Math.min(i2, o2, n2, c4), _2 = Math.max(a2, r3, s2, l2), M2 = Math.max(i2, o2, n2, c4);
      }
      r2 = w < r2 ? w : r2, o = C2 < o ? C2 : o, s = _2 > s ? _2 : s, n = M2 > n ? M2 : n;
      const z2 = a.createImageData(c3.size[0], c3.size[1]);
      z2.data.set(new Uint8ClampedArray(c3.image.buffer));
      const b2 = { offsetX: m3, offsetY: u$12, rotateClockwise: y, angle: p2, rasterizedImage: z2, anchorX: f, anchorY: d };
      l.push(b2);
    }
    t2.width = s - r2, t2.height = n - o;
    const c2 = -r2, h = n;
    for (let g = 0; g < l.length; g++) {
      const e2 = l[g], t3 = this._imageDataToCanvas(e2.rasterizedImage), r3 = e2.rasterizedImage.width, o2 = e2.rasterizedImage.height, s2 = c2 - r3 * (0.5 + e2.anchorX), n2 = h - o2 * (0.5 - e2.anchorY);
      if (e2.angle) {
        const r4 = (360 - e2.angle) * Math.PI / 180;
        a.save(), a.translate(u(e2.offsetX), -u(e2.offsetY)), a.translate(c2, h), a.rotate(r4), a.translate(-c2, -h), a.drawImage(t3, s2, n2), a.restore();
      } else
        a.drawImage(t3, s2 + u(e2.offsetX), n2 - u(e2.offsetY));
    }
    const m2 = new p({ x: c2 / t2.width - 0.5, y: h / t2.height - 0.5 });
    return { imageData: 0 !== t2.width && 0 !== t2.height ? a.getImageData(0, 0, t2.width, t2.height) : a.createImageData(1, 1), anchorPosition: m2 };
  }
  async _fetchPictureMarkerResource(e, a) {
    const i2 = e.materialHash;
    if (!this._pictureMarkerCache.get(i2)) {
      const r2 = (await j$1(e.cim.url, { responseType: "image", signal: a?.signal })).data;
      this._pictureMarkerCache.set(i2, r2);
    }
  }
  _imageDataToCanvas(e) {
    const t2 = this._imageDataCanvas, a = this._imageDataContext;
    return t2.width = e.width, t2.height = e.height, a.putImageData(e, 0, 0), t2;
  }
  _imageTo32Array(t2, a, i2, r2) {
    const o = this._imageDataCanvas, s = this._imageDataContext;
    if (o.width = a, o.height = i2, s.drawImage(t2, 0, 0, a, i2), r2) {
      s.save();
      const o2 = new u$1(r2);
      s.fillStyle = o2.toHex(), s.globalCompositeOperation = "multiply", s.fillRect(0, 0, a, i2), s.globalCompositeOperation = "destination-atop", s.drawImage(t2, 0, 0, a, i2), s.restore();
    }
    return new Uint32Array(s.getImageData(0, 0, a, i2).data.buffer);
  }
  _getRasterizedResource(e, t$1, a, i2, r2, o) {
    let s, n, l;
    const c2 = null, h = null;
    if ("text" === e.type)
      return this._rasterizeTextResource(e, t$1, i2, r2, o);
    ({ analyzedCIM: s, hash: n } = b(e, t$1, r2, o));
    const m$1 = C(i2);
    if ("CIMPictureMarker" === e.cim.type) {
      const a2 = t(e.size, t$1, r2, o) * m$1, { image: i3, width: s2, height: n2 } = this._getPictureResource(e, a2, t(e.color, t$1, r2, o));
      return l = { image: i3, size: [s2, n2], sdf: false, simplePattern: false, anchorX: e.anchorPoint ? e.anchorPoint.x : 0, anchorY: e.anchorPoint ? e.anchorPoint.y : 0 }, l;
    }
    m(s, m$1, { preserveOutlineWidth: false });
    const g = s;
    n += a, i2 && (n += JSON.stringify(i2));
    const u2 = this._resourceCache;
    return u2.has(n) ? u2.get(n) : (l = this._rasterizer.rasterizeJSONResource({ cim: g, type: e.type, url: e.url, mosaicHash: n, size: c2, path: h }, window.devicePixelRatio || 1, this._avoidSDF), u2.set(n, l), l);
  }
  _rasterizeTextResource(e, t$1, a, i2, r2) {
    const o = C(a), s = t(e.text, t$1, i2, r2);
    if (!s || 0 === s.length)
      return null;
    const n = e.cim, l = t(n?.fontFamilyName || e.fontName, t$1, i2, r2), c2 = t(n?.font?.style || e.style, t$1, i2, r2), h = t(n?.font?.weight || e.weight, t$1, i2, r2), m2 = t(n?.font?.decoration || e.decoration, t$1, i2, r2), g = t(e.size, t$1, i2, r2) * o, u2 = t(e.horizontalAlignment, t$1, i2, r2), f = t(e.verticalAlignment, t$1, i2, r2), p2 = r$1(t(e.color, t$1, i2, r2)), w = r$1(t(e.outlineColor, t$1, i2, r2)), _2 = t(e.outlineSize, t$1, i2, r2), M2 = null != e.backgroundColor ? r$1(e.backgroundColor) : null, z2 = null != e.borderLineColor ? r$1(e.borderLineColor) : null, b2 = null != e.borderLineWidth ? e.borderLineWidth : null, I = { color: p2, size: g, horizontalAlignment: u2, verticalAlignment: f, font: { family: l, style: c2, weight: h, decoration: m2 }, halo: { size: _2 || 0, color: w, style: c2 }, backgroundColor: M2, borderLine: null != z2 && null != b2 ? { color: z2, size: b2 } : null, pixelRatio: 1, premultiplyColors: !this._avoidSDF };
    return this._textRasterizer.rasterizeText(s, I);
  }
  _getPictureResource(e, t2, a) {
    const r2 = this._pictureMarkerCache.get(e.materialHash);
    if (!r2)
      return null;
    const o = r2.height / r2.width, s = t2 ? o > 1 ? u(t2) : u(t2) / o : r2.width, n = t2 ? o > 1 ? u(t2) * o : u(t2) : r2.height;
    return { image: this._imageTo32Array(r2, s, n, a), width: s, height: n };
  }
}
function z(e, t2, a, i2) {
  const r2 = 1, o = -t2 / 2 + r2, s = t2 / 2 - r2, n = a / 2 - r2, l = -a / 2 + r2;
  switch (e) {
    case "esriGeometryPoint":
      return { x: 0, y: 0 };
    case "esriGeometryPolyline":
      return { paths: [[[o, 0], [0, 0], [s, 0]]] };
    default:
      return "legend" === i2 ? { rings: [[[o, n], [s, 0], [s, l], [o, l], [o, n]]] } : { rings: [[[o, n], [s, n], [s, l], [o, l], [o, n]]] };
  }
}
function b(e, t2, a, i2) {
  let r2, s;
  if ("function" == typeof e.materialHash) {
    r2 = (0, e.materialHash)(t2, a, i2), s = V(e.cim, e.materialOverrides);
  } else
    r2 = e.materialHash, s = e.cim;
  return { analyzedCIM: s, hash: r2 };
}
export {
  M as CIMSymbolRasterizer
};
