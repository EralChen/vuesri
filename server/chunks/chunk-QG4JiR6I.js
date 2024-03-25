import { aV as e, aX as y$1, a_ as c$1, bZ as S$1, qI as h, gQ as a, cd as b$1, aT as s$1, bJ as c$2, qJ as M, qK as l, cD as n, cu as E, f9 as k, aC as M$1, qL as m$1, hl as f$2, ce as d$2, cl as A$1, qM as J, aQ as U$1, gI as d$3, et as i, gJ as m$2, eu as u$1, gK as c$3, cf as C, bQ as V, cm as e$1, b0 as has } from "./chunk-ejFG4zJ0.js";
import { d as d$1, f as f$1, a as d$4 } from "./chunk-Zl47MRFM.js";
import { $ } from "./chunk-bVBkTso-.js";
import { h as h$1 } from "./chunk-MoY3igy4.js";
import { v } from "./chunk-tFylJgQz.js";
import { u } from "./chunk-Z_-ET0Cm.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-xXBI18-w.js";
import "./chunk-drfK378b.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-YBgi6goH.js";
let m = class extends S$1 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new h(), this.updateRequested = false, this.type = "imagery", this._bitmapView = new a();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = false), this.updateRequested = false;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(t2) {
    this.strategy.update(t2).catch((t3) => {
      b$1(t3) || s$1.getLogger(this).error(t3);
    });
  }
  hitTest(t2) {
    return new c$2({ attributes: {}, geometry: t2.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const t2 = this.layer.version >= 10, e2 = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, i2 = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new v({ container: this._bitmapView, imageNormalizationSupported: t2, imageMaxHeight: e2, imageMaxWidth: i2, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = false;
  }
  redraw() {
    this.strategy.updateExports(async (t2) => {
      const { source: e2 } = t2;
      if (!e2 || e2 instanceof ImageBitmap)
        return;
      const i2 = await this.layer.applyRenderer({ extent: e2.extent, pixelBlock: e2.originalPixelBlock ?? e2.pixelBlock });
      e2.filter = (t3) => this.layer.pixelFilter ? this.layer.applyFilter(t3) : { ...i2, extent: e2.extent };
    }).catch((t2) => {
      b$1(t2) || s$1.getLogger(this).error(t2);
    });
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating)
      return null;
    const t2 = this.strategy.bitmaps;
    if (1 === t2.length && t2[0].source)
      return { extent: t2[0].source.extent, pixelBlock: t2[0].source.originalPixelBlock };
    if (t2.length > 1) {
      const e2 = this.view.extent, i2 = t2.map((t3) => t3.source).filter((t3) => t3.extent && t3.extent.intersects(e2)).map((t3) => ({ extent: t3.extent, pixelBlock: t3.originalPixelBlock })), r = M(i2, e2);
      return null != r ? { extent: r.extent, pixelBlock: r.pixelBlock } : null;
    }
    return null;
  }
  async _fetchImage(t2, e2, i2, r) {
    (r = r || {}).timeExtent = this.timeExtent, r.requestAsImageElement = true, r.returnImageBitmap = true;
    const s = await this.layer.fetchImage(t2, e2, i2, r);
    if (s.imageBitmap)
      return s.imageBitmap;
    const a2 = await this.layer.applyRenderer(s.pixelData, { signal: r.signal }), o = new l(a2.pixelBlock, a2.extent?.clone(), s.pixelData.pixelBlock);
    return o.filter = (t3) => this.layer.applyFilter(t3), o;
  }
};
e([y$1()], m.prototype, "attached", void 0), e([y$1()], m.prototype, "container", void 0), e([y$1()], m.prototype, "layer", void 0), e([y$1()], m.prototype, "strategy", void 0), e([y$1()], m.prototype, "timeExtent", void 0), e([y$1()], m.prototype, "view", void 0), e([y$1()], m.prototype, "updateRequested", void 0), e([y$1()], m.prototype, "updating", null), e([y$1()], m.prototype, "type", void 0), m = e([c$1("esri.views.2d.layers.imagery.ImageryView2D")], m);
const d = m;
class t extends n {
  constructor() {
    super(...arguments), this.symbolTypes = ["triangle"];
  }
  prepareRenderPasses(s) {
    const t2 = s.registerRenderPass({ name: "imagery (vf)", brushes: [d$1], target: () => this.children, drawPhase: E.MAP });
    return [...super.prepareRenderPasses(s), t2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === E.MAP && this.symbolTypes.forEach((r) => {
      e2.renderPass = r, super.doRender(e2);
    });
  }
}
let c = class extends S$1 {
  constructor(e2) {
    super(e2), this._loading = null, this.update = k((e3, t2) => this._update(e3, t2).catch((e4) => {
      b$1(e4) || s$1.getLogger(this).error(e4);
    }));
  }
  get updating() {
    return !!this._loading;
  }
  redraw(e2) {
    if (!this.container.children.length)
      return;
    const t2 = this.container.children[0];
    t2.symbolizerParameters = e2, t2.invalidateVAO(), this.container.symbolTypes = "wind_speed" === e2.style ? ["scalar", "triangle"] : "simple_scalar" === e2.style ? ["scalar"] : ["triangle"], this.container.requestRender();
  }
  async _update(e2, t2, i2) {
    if (!e2.stationary)
      return;
    const { extent: r, spatialReference: o } = e2.state, s = new M$1({ xmin: r.xmin, ymin: r.ymin, xmax: r.xmax, ymax: r.ymax, spatialReference: o }), [a2, l2] = e2.state.size;
    this._loading = this.fetchPixels(s, a2, l2, i2);
    const c2 = await this._loading;
    this._addToDisplay(c2, t2, e2.state), this._loading = null;
  }
  _addToDisplay(e2, t2, i2) {
    if (null == e2.pixelBlock)
      return this.container.children.forEach((e3) => e3.destroy()), void this.container.removeAllChildren();
    const { extent: r, pixelBlock: o } = e2, s = new f$1(o);
    s.offset = [0, 0], s.symbolizerParameters = t2, s.rawPixelData = e2, s.invalidateVAO(), s.x = r.xmin, s.y = r.ymax, s.pixelRatio = i2.pixelRatio, s.rotation = i2.rotation, s.resolution = i2.resolution, s.width = o.width * t2.symbolTileSize, s.height = o.height * t2.symbolTileSize, this.container.children.forEach((e3) => e3.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = "wind_speed" === t2.style ? ["scalar", "triangle"] : "simple_scalar" === t2.style ? ["scalar"] : ["triangle"], this.container.addChild(s);
  }
};
e([y$1()], c.prototype, "fetchPixels", void 0), e([y$1()], c.prototype, "container", void 0), e([y$1()], c.prototype, "_loading", void 0), e([y$1()], c.prototype, "updating", null), c = e([c$1("esri.views.2d.layers.imagery.ImageryVFStrategy")], c);
const p = c;
let f = class extends S$1 {
  constructor() {
    super(...arguments), this.attached = false, this.container = new t(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (t2, e2, r, i2) => {
      const s = await this._projectFullExtentPromise, { symbolTileSize: a2 } = this.layer.renderer, { extent: o, width: n2, height: l2 } = m$1(t2, e2, r, a2, s);
      if (null != s && !s.intersects(t2))
        return { extent: o, pixelBlock: null };
      const m2 = { bbox: `${o.xmin}, ${o.ymin}, ${o.xmax}, ${o.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: a2, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(m2)) {
        const t3 = this.getPixelData();
        if (null != t3) {
          if (`${t3.extent.xmin}, ${t3.extent.ymin}, ${t3.extent.xmax}, ${t3.extent.ymax}` === m2.bbox)
            return t3;
        }
      }
      const { pixelData: c2 } = await this.layer.fetchImage(o, n2, l2, { timeExtent: this.timeExtent, requestAsImageElement: false, signal: i2 });
      this._dataParameters = m2;
      const p2 = c2?.pixelBlock;
      if (null == p2)
        return { extent: o, pixelBlock: null };
      return { extent: o, pixelBlock: "vector-uv" === this.layer.rasterInfo.dataType ? f$2(p2, "vector-uv") : p2 };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new p({ container: this.container, fetchPixels: this._fetchpixels }), this.addHandles(d$2(() => this.layer.renderer, (t2) => this._updateSymbolizerParams(t2), A$1), "attach");
  }
  detach() {
    this._strategy.destroy(), this.container.children.forEach((t2) => t2.destroy()), this.container.removeAllChildren(), this.removeHandles("attach"), this._strategy = this.container = this._projectFullExtentPromise = null;
  }
  getPixelData() {
    const t2 = this.container.children[0]?.rawPixelData;
    if (this.updating || !t2)
      return null;
    const { extent: e2, pixelBlock: r } = t2;
    return { extent: e2, pixelBlock: r };
  }
  hitTest(t2) {
    return new c$2({ attributes: {}, geometry: t2.clone(), layer: this.layer });
  }
  update(t2) {
    this._strategy.update(t2, this._symbolizerParams).catch((t3) => {
      b$1(t3) || s$1.getLogger(this).error(t3);
    });
  }
  redraw() {
    const { renderer: t2 } = this.layer;
    t2 && (this._updateSymbolizerParams(t2), this._strategy.redraw(this._symbolizerParams));
  }
  _canReuseVectorFieldData(t2) {
    const e2 = this._dataParameters.exportParametersVersion === t2.exportParametersVersion, r = this._dataParameters.time === t2.time, i2 = this._dataParameters.symbolTileSize === t2.symbolTileSize, s = this._dataParameters.bbox === t2.bbox;
    return e2 && r && i2 && s;
  }
  async _getProjectedFullExtent(t2) {
    try {
      return J(this.layer.fullExtent, t2);
    } catch (e2) {
      try {
        const e3 = (await U$1(this.layer.url, { query: { option: "footprints", outSR: d$3(t2), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return e3 ? M$1.fromJSON(e3) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(t2) {
    "vector-field" === t2.type && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
e([y$1()], f.prototype, "attached", void 0), e([y$1()], f.prototype, "container", void 0), e([y$1()], f.prototype, "layer", void 0), e([y$1()], f.prototype, "timeExtent", void 0), e([y$1()], f.prototype, "type", void 0), e([y$1()], f.prototype, "view", void 0), e([y$1()], f.prototype, "updating", null), f = e([c$1("esri.views.2d.layers.imagery.VectorFieldView2D")], f);
const g = f;
let y = class extends u(i(m$2(u$1))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new c$3(), this._highlightView = void 0, this.layer = null, this.subview = null;
  }
  get pixelData() {
    const { subview: e2 } = this;
    return this.updating || !e2 ? null : "getPixelData" in e2 ? e2.getPixelData() : null;
  }
  update(e2) {
    this.subview?.update(e2);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new $({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new h$1(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.addAttachHandles([d$2(() => this.layer.exportImageServiceParameters.version, (e2) => {
      e2 && this._exportImageVersion !== e2 && (this._exportImageVersion = e2, this.requestUpdate());
    }, C), d$2(() => this.timeExtent, (e2) => {
      const { subview: i2 } = this;
      i2 && (i2.timeExtent = e2, "redraw" in i2 ? this.requestUpdate() : i2.redrawOrRefetch());
    }, C), this.layer.on("redraw", () => {
      const { subview: e2 } = this;
      e2 && ("redraw" in e2 ? e2.redraw() : e2.redrawOrRefetch());
    }), d$2(() => this.layer.renderer, () => this._setSubView())]);
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this.container.removeAllChildren(), this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null, this._highlightView?.destroy(), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e2, s) {
    if (!((Array.isArray(e2) ? e2[0] : V.isCollection(e2) ? e2.at(0) : e2) instanceof c$2))
      return e$1();
    let a2 = [];
    return Array.isArray(e2) || V.isCollection(e2) ? a2 = e2.map((e3) => e3.clone()) : e2 instanceof c$2 && (a2 = [e2.clone()]), this._highlightGraphics.addMany(a2), e$1(() => this._highlightGraphics.removeMany(a2));
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    const e2 = !this.subview || this.subview.updating || !!this._highlightView?.updating;
    return has("esri-2d-log-updating") && console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e2}
-> subview ${!this.subview || this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`), e2;
  }
  _setSubView() {
    if (!this.view)
      return;
    const e2 = this.layer.renderer?.type;
    let i2 = "imagery";
    if ("vector-field" === e2 ? i2 = "imageryVF" : "flow" === e2 && (i2 = "flow"), this.subview) {
      const { type: e3 } = this.subview;
      if (e3 === i2)
        return this._attachSubview(this.subview), void ("flow" === e3 ? this.subview.redrawOrRefetch() : "imagery" === e3 && "lerc" === this.layer.format ? this.subview.redraw() : this.requestUpdate());
      this._detachSubview(this.subview), this.subview?.destroy();
    }
    this.subview = "imagery" === i2 ? new d({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : "imageryVF" === i2 ? new g({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new d$4({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e2) {
    e2 && !e2.attached && (e2.attach(), e2.attached = true, this.container.addChildAt(e2.container, 0));
  }
  _detachSubview(e2) {
    e2?.attached && (this.container.removeChild(e2.container), e2.detach(), e2.attached = false);
  }
};
e([y$1()], y.prototype, "pixelData", null), e([y$1()], y.prototype, "subview", void 0), y = e([c$1("esri.views.2d.layers.ImageryLayerView2D")], y);
const b = y;
export {
  b as default
};
