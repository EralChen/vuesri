import { kN as N, kO as n$1, de as b$1, cy as x$1, kP as C$1, gO as ee, kQ as m$1, kR as e, eA as D, E, kS as G, kT as U, kU as X, kV as f, kW as w, T as T$1, a$ as j$1, fQ as m$2, dP as u, fX as a, fR as i, bh as V, bJ as d$1, em as e$1, bD as u$1, ap as M$1, kK as b, dd as _, cZ as f$1, kX as r, kY as A, fK as f$2, cs as v, bo as e$2, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { b as b$2, g, d } from "./chunk-xtwM9xwm.js";
import { i as i$1 } from "./chunk-HuS-BxAR.js";
import { r as re } from "./chunk-pNUePs4Z.js";
import { o } from "./chunk-_vc6r2eV.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-IbXsXbhF.js";
import "./chunk-E-M87tOH.js";
import "./chunk-Zlv3z8RW.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-_ABw_62H.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-b7K892Yv.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-GcIahY26.js";
class l {
  constructor(t) {
    if (this._ownsRctx = false, t)
      this._ownsRctx = false, this._rctx = t;
    else {
      if (l._instance)
        return l._instanceRefCount++, l._instance;
      l._instanceRefCount = 1, l._instance = this, this._ownsRctx = true;
      const t2 = document.createElement("canvas").getContext("webgl");
      t2.getExtension("OES_texture_float"), this._rctx = new N(t2, {});
    }
    const e2 = { applyProjection: true, bilinear: false, bicubic: false }, r2 = o("raster/reproject", "raster/reproject", /* @__PURE__ */ new Map([["a_position", 0]]), e2);
    this._program = this._rctx.programCache.acquire(r2.shaders.vertexShader, r2.shaders.fragmentShader, r2.attributes), this._rctx.useProgram(this._program), this._program.setUniform1f("u_opacity", 1), this._program.setUniform1i("u_image", 0), this._program.setUniform1i("u_flipY", 0), this._program.setUniform1i("u_transformGrid", 1), this._quad = new n$1(this._rctx, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  reprojectTexture(t, s, n = false) {
    const o2 = b$1(t.extent, s), m = new x$1({ x: (t.extent.xmax - t.extent.xmin) / t.texture.descriptor.width, y: (t.extent.ymax - t.extent.ymin) / t.texture.descriptor.height, spatialReference: t.extent.spatialReference }), { x: _2, y: g2 } = C$1(m, s, t.extent);
    let l2 = (_2 + g2) / 2;
    const w2 = Math.round((o2.xmax - o2.xmin) / l2), b2 = Math.round((o2.ymax - o2.ymin) / l2);
    l2 = (o2.width / w2 + o2.height / b2) / 2;
    const j2 = new x$1({ x: l2, y: l2, spatialReference: o2.spatialReference }), D$1 = ee({ projectedExtent: o2, srcBufferExtent: t.extent, pixelSize: j2, hasWrapAround: true, spacing: [16, 16] }), R = m$1(this._rctx, D$1), C2 = new e(w2, b2);
    C2.wrapMode = D.CLAMP_TO_EDGE;
    const T = new E(this._rctx, C2);
    this._rctx.bindFramebuffer(T), this._rctx.setViewport(0, 0, w2, b2), this._rctx.useProgram(this._program), this._rctx.bindTexture(t.texture, 0), this._rctx.bindTexture(R, 1), this._quad.bind();
    const { width: y2 = 0, height: E$1 = 0 } = t.texture.descriptor;
    if (this._program.setUniform2f("u_srcImageSize", y2, E$1), this._program.setUniform2fv("u_transformSpacing", D$1.spacing), this._program.setUniform2fv("u_transformGridSize", D$1.size), this._program.setUniform2f("u_targetImageSize", w2, b2), this._quad.draw(), this._quad.unbind(), this._rctx.useProgram(null), this._rctx.bindFramebuffer(null), R.dispose(), n) {
      const { width: t2, height: e2 } = T, r2 = new ImageData(t2 ?? 0, e2 ?? 0);
      T.readPixels(0, 0, t2 ?? 0, e2 ?? 0, G.RGBA, U.UNSIGNED_BYTE, r2.data);
      const i2 = T.detachColorTexture(X.COLOR_ATTACHMENT0);
      return T.dispose(), { texture: i2, extent: o2, imageData: r2 };
    }
    const M = T.detachColorTexture(X.COLOR_ATTACHMENT0);
    return T.dispose(), { texture: M, extent: o2 };
  }
  reprojectBitmapData(t, e$12) {
    const r2 = f(t.bitmapData) ? w(t.bitmapData) : t.bitmapData, i2 = new e();
    i2.wrapMode = D.CLAMP_TO_EDGE, i2.width = t.bitmapData.width, i2.height = t.bitmapData.height;
    const a2 = new T$1(this._rctx, i2, r2), o2 = this.reprojectTexture({ texture: a2, extent: t.extent }, e$12, true);
    o2.texture.dispose();
    const m = document.createElement("canvas"), p = o2.imageData;
    m.width = p.width, m.height = p.height;
    return m.getContext("2d").putImageData(p, 0, 0), { bitmapData: m, extent: o2.extent };
  }
  async loadAndReprojectBitmapData(e2, r2, i2) {
    const a2 = (await j$1(e2, { responseType: "image" })).data, s = document.createElement("canvas");
    s.width = a2.width, s.height = a2.height;
    const n = s.getContext("2d");
    n.drawImage(a2, 0, 0);
    const o2 = n.getImageData(0, 0, s.width, s.height);
    if (r2.spatialReference.equals(i2))
      return { bitmapData: o2, extent: r2 };
    const m = this.reprojectBitmapData({ bitmapData: o2, extent: r2 }, i2);
    return { bitmapData: m.bitmapData, extent: m.extent };
  }
  destroy() {
    this._ownsRctx ? (l._instanceRefCount--, 0 === l._instanceRefCount && (this._quad.dispose(), this._program.dispose(), this._rctx.dispose(), l._instance = null)) : (this._quad.dispose(), this._program.dispose());
  }
}
l._instanceRefCount = 0;
class C {
  constructor() {
    this.allSublayers = /* @__PURE__ */ new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let j = class extends m$2(u) {
  constructor() {
    super(...arguments), this._bitmapIndex = /* @__PURE__ */ new Map(), this._mapImageContainer = new a(), this._kmlVisualData = new C(), this._fetchController = null, this.allVisiblePoints = new i(), this.allVisiblePolylines = new i(), this.allVisiblePolygons = new i(), this.allVisibleMapImages = new V();
  }
  async hitTest(e2, i2) {
    const t = this.layer;
    return [this._pointsView?.hitTest(e2), this._polylinesView?.hitTest(e2), this._polygonsView?.hitTest(e2)].flat().filter(Boolean).map((i3) => (i3.layer = t, i3.sourceLayer = t, { type: "graphic", graphic: i3, layer: t, mapPoint: e2 }));
  }
  update(e2) {
    this._polygonsView && this._polygonsView.processUpdate(e2), this._polylinesView && this._polylinesView.processUpdate(e2), this._pointsView && this._pointsView.processUpdate(e2);
  }
  attach() {
    this._fetchController = new AbortController(), this.container.addChild(this._mapImageContainer), this._polygonsView = new re({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new re({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new re({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new i$1(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.addAttachHandles([this.allVisibleMapImages.on("change", (e2) => {
      e2.added.forEach((e3) => this._addMapImage(e3)), e2.removed.forEach((e3) => this._removeMapImage(e3));
    }), d$1(() => this.layer.visibleSublayers, (e2) => {
      for (const [i2, t] of this._kmlVisualData.allSublayers)
        t.visibility = 0;
      for (const i2 of e2) {
        const e3 = this._kmlVisualData.allSublayers.get(i2.id);
        e3 && (e3.visibility = 1);
      }
      this._refreshCollections();
    })]), this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)), this._imageReprojector = new l();
  }
  detach() {
    this._fetchController = e$1(this._fetchController), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView = u$1(this._polygonsView), this._polylinesView = u$1(this._polylinesView), this._pointsView = u$1(this._pointsView), this._imageReprojector = u$1(this._imageReprojector);
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
    (this.view.spatialReference?.isWGS84 || this.view.spatialReference?.isWebMercator) && this._imageReprojector.loadAndReprojectBitmapData(e2.href, M$1.fromJSON(e2.extent), this.view.spatialReference).then((i2) => {
      const t = new b(i2.bitmapData);
      t.x = i2.extent.xmin, t.y = i2.extent.ymax, t.resolution = i2.extent.width / i2.bitmapData.width, t.rotation = e2.rotation, this._mapImageContainer.addChild(t), this._bitmapIndex.set(e2, t);
    });
  }
  async _getViewDependentUrl(e2, t) {
    const { viewFormat: s, viewBoundScale: a2, httpQuery: o2 } = e2;
    if (null != s) {
      if (null == t)
        throw new Error("Loading this network link requires a view state.");
      let n;
      if (await _(), null != a2 && 1 !== a2) {
        const e3 = new M$1(t.extent);
        e3.expand(a2), n = e3;
      } else
        n = t.extent;
      n = b$1(n, f$1.WGS84);
      const h = b$1(n, f$1.WebMercator), y2 = n.xmin, g2 = n.xmax, w2 = n.ymin, _$1 = n.ymax, b2 = t.size[0] * t.pixelRatio, V2 = t.size[1] * t.pixelRatio, f2 = Math.max(h.width, h.height), v$1 = { "[bboxWest]": y2.toString(), "[bboxEast]": g2.toString(), "[bboxSouth]": w2.toString(), "[bboxNorth]": _$1.toString(), "[lookatLon]": n.center.x.toString(), "[lookatLat]": n.center.y.toString(), "[lookatRange]": f2.toString(), "[lookatTilt]": "0", "[lookatHeading]": t.rotation.toString(), "[lookatTerrainLon]": n.center.x.toString(), "[lookatTerrainLat]": n.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": n.center.x.toString(), "[cameraLat]": n.center.y.toString(), "[cameraAlt]": f2.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": b2.toString(), "[vertPixels]": V2.toString(), "[terrainEnabled]": "0", "[clientVersion]": r, "[kmlVersion]": "2.2", "[clientName]": "ArcGIS API for JavaScript", "[language]": "en-US" }, S = (e3) => {
        for (const i2 in e3) {
          let t2;
          for (t2 in v$1)
            e3[i2] = e3[i2].replace(t2, v$1[t2]);
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
    const i2 = new C();
    await this._loadVisualData(this.layer.url, i2, e2), this._kmlVisualData = i2, this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e2) => this._isSublayerVisible(e2.sublayerId)).map(({ item: e2 }) => e2));
  }
  _isSublayerVisible(e2) {
    const i2 = this._kmlVisualData.allSublayers.get(e2);
    return !!i2?.visibility && (-1 === i2.parentFolderId || this._isSublayerVisible(i2.parentFolderId));
  }
  _loadVisualData(e2, i2, t) {
    return this._fetchParsedKML(e2, t).then(async (e3) => {
      for (const s of e3.sublayers) {
        i2.allSublayers.set(s.id, s);
        const e4 = s.points ? await b$2(s.points) : [], a2 = s.polylines ? await b$2(s.polylines) : [], o2 = s.polygons ? await b$2(s.polygons) : [], l2 = s.mapImages || [];
        if (i2.allPoints.push(...e4.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allPolylines.push(...a2.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allPolygons.push(...o2.map((e5) => ({ item: e5, sublayerId: s.id }))), i2.allMapImages.push(...l2.map((e5) => ({ item: e5, sublayerId: s.id }))), s.networkLink) {
          const e5 = await this._getViewDependentUrl(s.networkLink, this.view.state);
          await this._loadVisualData(e5, i2, t);
        }
      }
    });
  }
  _fetchParsedKML(e2, i2) {
    return g(e2, this.layer.spatialReference, this.layer.refreshInterval, i2).then((e3) => d(e3.data));
  }
  _removeMapImage(e2) {
    const i2 = this._bitmapIndex.get(e2);
    i2 && (this._mapImageContainer.removeChild(i2), this._bitmapIndex.delete(e2));
  }
};
e$2([y()], j.prototype, "_pointsView", void 0), e$2([y()], j.prototype, "_polylinesView", void 0), e$2([y()], j.prototype, "_polygonsView", void 0), e$2([y()], j.prototype, "updating", void 0), j = e$2([c("esri.views.2d.layers.KMLLayerView2D")], j);
const k = j;
export {
  k as default
};
