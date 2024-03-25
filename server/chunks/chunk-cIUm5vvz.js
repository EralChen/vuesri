import { t, lC as w$1, lD as h$1, dF as U, cY as x$1, lE as C$1, hC as ee, lF as c, lG as e, fq as D$1, x as x$2, cL as G$1, cJ as U$1, lH as X, lI as g, lJ as f, m as m$1, aQ as U$2, gJ as m$2, eu as u$1, gQ as a, gK as c$1, bQ as V, ce as d$1, fc as e$1, c8 as u$2, aC as M, lB as b, dE as B, aB as f$1, lK as r, lL as A, gD as f$2, cT as v, aV as e$2, aX as y, a_ as c$2 } from "./chunk-ejFG4zJ0.js";
import { b as b$1, g as g$1, d } from "./chunk-_d8mkte2.js";
import { t as t$1 } from "./chunk-Ds4Mh7HH.js";
import { $ } from "./chunk-bVBkTso-.js";
import { o } from "./chunk-tWyHFLJd.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-YBgi6goH.js";
import "./chunk-xXBI18-w.js";
import "./chunk-drfK378b.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-GcIahY26.js";
class w {
  constructor(t$12) {
    if (this._ownsRctx = false, t$12)
      this._ownsRctx = false, this._rctx = t$12;
    else {
      if (w._instance)
        return w._instanceRefCount++, w._instance;
      w._instanceRefCount = 1, w._instance = this, this._ownsRctx = true;
      const t$13 = document.createElement("canvas"), e3 = t(t$13);
      e3.getExtension("OES_texture_float"), this._rctx = new w$1(e3, {});
    }
    const e2 = { applyProjection: true, bilinear: false, bicubic: false }, r2 = o("raster/reproject", "raster/reproject", /* @__PURE__ */ new Map([["a_position", 0]]), e2);
    this._program = this._rctx.programCache.acquire(r2.shaders.vertexShader, r2.shaders.fragmentShader, r2.attributes), this._rctx.useProgram(this._program), this._program.setUniform1f("u_opacity", 1), this._program.setUniform1i("u_image", 0), this._program.setUniform1i("u_flipY", 0), this._program.setUniform1i("u_transformGrid", 1), this._quad = new h$1(this._rctx, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  reprojectTexture(t2, s, n = false) {
    const o2 = U(t2.extent, s), m = new x$1({ x: (t2.extent.xmax - t2.extent.xmin) / t2.texture.descriptor.width, y: (t2.extent.ymax - t2.extent.ymin) / t2.texture.descriptor.height, spatialReference: t2.extent.spatialReference }), { x: c$12, y: g2 } = C$1(m, s, t2.extent);
    let f2 = (c$12 + g2) / 2;
    const w2 = Math.round((o2.xmax - o2.xmin) / f2), b2 = Math.round((o2.ymax - o2.ymin) / f2);
    f2 = (o2.width / w2 + o2.height / b2) / 2;
    const j2 = new x$1({ x: f2, y: f2, spatialReference: o2.spatialReference }), D = ee({ projectedExtent: o2, srcBufferExtent: t2.extent, pixelSize: j2, hasWrapAround: true, spacing: [16, 16] }), R = c(this._rctx, D), T = new e(w2, b2);
    T.wrapMode = D$1.CLAMP_TO_EDGE;
    const C2 = new x$2(this._rctx, T);
    this._rctx.bindFramebuffer(C2), this._rctx.setViewport(0, 0, w2, b2), this._rctx.useProgram(this._program), this._rctx.bindTexture(t2.texture, 0), this._rctx.bindTexture(R, 1), this._quad.bind();
    const { width: y2 = 0, height: E = 0 } = t2.texture.descriptor;
    if (this._program.setUniform2f("u_srcImageSize", y2, E), this._program.setUniform2fv("u_transformSpacing", D.spacing), this._program.setUniform2fv("u_transformGridSize", D.size), this._program.setUniform2f("u_targetImageSize", w2, b2), this._quad.draw(), this._quad.unbind(), this._rctx.useProgram(null), this._rctx.bindFramebuffer(null), R.dispose(), n) {
      const { width: t3, height: e2 } = C2, r2 = new ImageData(t3 ?? 0, e2 ?? 0);
      C2.readPixels(0, 0, t3 ?? 0, e2 ?? 0, G$1.RGBA, U$1.UNSIGNED_BYTE, r2.data);
      const i = C2.detachColorTexture(X.COLOR_ATTACHMENT0);
      return C2.dispose(), { texture: i, extent: o2, imageData: r2 };
    }
    const U$22 = C2.detachColorTexture(X.COLOR_ATTACHMENT0);
    return C2.dispose(), { texture: U$22, extent: o2 };
  }
  reprojectBitmapData(t2, e$12) {
    const r2 = g(t2.bitmapData) ? f(t2.bitmapData) : t2.bitmapData, i = new e();
    i.wrapMode = D$1.CLAMP_TO_EDGE, i.width = t2.bitmapData.width, i.height = t2.bitmapData.height;
    const a2 = new m$1(this._rctx, i, r2), o2 = this.reprojectTexture({ texture: a2, extent: t2.extent }, e$12, true);
    o2.texture.dispose();
    const m = document.createElement("canvas"), c2 = o2.imageData;
    m.width = c2.width, m.height = c2.height;
    return m.getContext("2d").putImageData(c2, 0, 0), { bitmapData: m, extent: o2.extent };
  }
  async loadAndReprojectBitmapData(e2, r2, i) {
    const a2 = (await U$2(e2, { responseType: "image" })).data, s = document.createElement("canvas");
    s.width = a2.width, s.height = a2.height;
    const n = s.getContext("2d");
    n.drawImage(a2, 0, 0);
    const o2 = n.getImageData(0, 0, s.width, s.height);
    if (r2.spatialReference.equals(i))
      return { bitmapData: o2, extent: r2 };
    const m = this.reprojectBitmapData({ bitmapData: o2, extent: r2 }, i);
    return { bitmapData: m.bitmapData, extent: m.extent };
  }
  destroy() {
    this._ownsRctx ? (w._instanceRefCount--, 0 === w._instanceRefCount && (this._quad.dispose(), this._program.dispose(), this._rctx.dispose(), w._instance = null)) : (this._quad.dispose(), this._program.dispose());
  }
}
w._instanceRefCount = 0;
class C {
  constructor() {
    this.allSublayers = /* @__PURE__ */ new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let j = class extends m$2(u$1) {
  constructor() {
    super(...arguments), this._bitmapIndex = /* @__PURE__ */ new Map(), this._mapImageContainer = new a(), this._kmlVisualData = new C(), this._fetchController = null, this.allVisiblePoints = new c$1(), this.allVisiblePolylines = new c$1(), this.allVisiblePolygons = new c$1(), this.allVisibleMapImages = new V();
  }
  async hitTest(e2, i) {
    const t2 = this.layer;
    return [this._pointsView?.hitTest(e2), this._polylinesView?.hitTest(e2), this._polygonsView?.hitTest(e2)].flat().filter(Boolean).map((i2) => (i2.layer = t2, i2.sourceLayer = t2, { type: "graphic", graphic: i2, layer: t2, mapPoint: e2 }));
  }
  update(e2) {
    this._polygonsView && this._polygonsView.processUpdate(e2), this._polylinesView && this._polylinesView.processUpdate(e2), this._pointsView && this._pointsView.processUpdate(e2);
  }
  attach() {
    this._fetchController = new AbortController(), this.container.addChild(this._mapImageContainer), this._polygonsView = new $({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new t$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new $({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new t$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new $({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new t$1(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.addAttachHandles([this.allVisibleMapImages.on("change", (e2) => {
      e2.added.forEach((e3) => this._addMapImage(e3)), e2.removed.forEach((e3) => this._removeMapImage(e3));
    }), d$1(() => this.layer.visibleSublayers, (e2) => {
      for (const [i, t2] of this._kmlVisualData.allSublayers)
        t2.visibility = 0;
      for (const i of e2) {
        const e3 = this._kmlVisualData.allSublayers.get(i.id);
        e3 && (e3.visibility = 1);
      }
      this._refreshCollections();
    })]), this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)), this._imageReprojector = new w();
  }
  detach() {
    this._fetchController = e$1(this._fetchController), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView = u$2(this._polygonsView), this._polylinesView = u$2(this._polylinesView), this._pointsView = u$2(this._pointsView), this._imageReprojector = u$2(this._imageReprojector);
  }
  moveStart() {
  }
  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }
  _addMapImage(e2) {
    (this.view.spatialReference?.isWGS84 || this.view.spatialReference?.isWebMercator) && this._imageReprojector.loadAndReprojectBitmapData(e2.href, M.fromJSON(e2.extent), this.view.spatialReference).then((i) => {
      const t2 = new b(i.bitmapData);
      t2.x = i.extent.xmin, t2.y = i.extent.ymax, t2.resolution = i.extent.width / i.bitmapData.width, t2.rotation = e2.rotation, this._mapImageContainer.addChild(t2), this._bitmapIndex.set(e2, t2);
    });
  }
  async _getViewDependentUrl(e2, t2) {
    const { viewFormat: s, viewBoundScale: a2, httpQuery: o2 } = e2;
    if (null != s) {
      if (null == t2)
        throw new Error("Loading this network link requires a view state.");
      let n;
      if (await B(), null != a2 && 1 !== a2) {
        const e3 = new M(t2.extent);
        e3.expand(a2), n = e3;
      } else
        n = t2.extent;
      n = U(n, f$1.WGS84);
      const h = U(n, f$1.WebMercator), y2 = n.xmin, g2 = n.xmax, w2 = n.ymin, _ = n.ymax, b2 = t2.size[0] * t2.pixelRatio, V2 = t2.size[1] * t2.pixelRatio, f2 = Math.max(h.width, h.height), v$1 = { "[bboxWest]": y2.toString(), "[bboxEast]": g2.toString(), "[bboxSouth]": w2.toString(), "[bboxNorth]": _.toString(), "[lookatLon]": n.center.x.toString(), "[lookatLat]": n.center.y.toString(), "[lookatRange]": f2.toString(), "[lookatTilt]": "0", "[lookatHeading]": t2.rotation.toString(), "[lookatTerrainLon]": n.center.x.toString(), "[lookatTerrainLat]": n.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": n.center.x.toString(), "[cameraLat]": n.center.y.toString(), "[cameraAlt]": f2.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": b2.toString(), "[vertPixels]": V2.toString(), "[terrainEnabled]": "0", "[clientVersion]": r, "[kmlVersion]": "2.2", "[clientName]": "ArcGIS API for JavaScript", "[language]": "en-US" }, S = (e3) => {
        for (const i in e3) {
          let t3;
          for (t3 in v$1)
            e3[i] = e3[i].replace(t3, v$1[t3]);
        }
      }, I = A(s);
      S(I);
      let x = {};
      null != o2 && (x = A(o2), S(x));
      const C2 = f$2(e2.href);
      C2.query = { ...C2.query, ...I, ...x };
      return `${C2.path}?${v(I)}`;
    }
    return e2.href;
  }
  async _fetchService(e2) {
    const i = new C();
    await this._loadVisualData(this.layer.url, i, e2), this._kmlVisualData = i, this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2));
  }
  _isSublayerVisible(e2) {
    const i = this._kmlVisualData.allSublayers.get(e2);
    return !!i?.visibility && (-1 === i.parentFolderId || this._isSublayerVisible(i.parentFolderId));
  }
  _loadVisualData(e2, i, t2) {
    return this._fetchParsedKML(e2, t2).then(async (e3) => {
      for (const s of e3.sublayers) {
        i.allSublayers.set(s.id, s);
        const e4 = s.points ? await b$1(s.points) : [], a2 = s.polylines ? await b$1(s.polylines) : [], o2 = s.polygons ? await b$1(s.polygons) : [], l = s.mapImages || [];
        if (i.allPoints.push(...e4.map((e5) => ({ item: e5, sublayerId: s.id }))), i.allPolylines.push(...a2.map((e5) => ({ item: e5, sublayerId: s.id }))), i.allPolygons.push(...o2.map((e5) => ({ item: e5, sublayerId: s.id }))), i.allMapImages.push(...l.map((e5) => ({ item: e5, sublayerId: s.id }))), s.networkLink) {
          const e5 = await this._getViewDependentUrl(s.networkLink, this.view.state);
          await this._loadVisualData(e5, i, t2);
        }
      }
    });
  }
  _fetchParsedKML(e2, i) {
    return g$1(e2, this.layer.spatialReference, this.layer.refreshInterval, i).then((e3) => d(e3.data));
  }
  _removeMapImage(e2) {
    const i = this._bitmapIndex.get(e2);
    i && (this._mapImageContainer.removeChild(i), this._bitmapIndex.delete(e2));
  }
};
e$2([y()], j.prototype, "_pointsView", void 0), e$2([y()], j.prototype, "_polylinesView", void 0), e$2([y()], j.prototype, "_polygonsView", void 0), e$2([y()], j.prototype, "updating", void 0), j = e$2([c$2("esri.views.2d.layers.KMLLayerView2D")], j);
const k = j;
export {
  k as default
};
