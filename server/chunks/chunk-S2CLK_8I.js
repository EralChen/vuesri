import { et as i, gJ as m$1, eu as u$1, gK as c$1, cd as b$1, aT as s$1, gQ as a, ev as r, ce as d$1, aV as e, aX as y$1, a_ as c } from "./chunk-ejFG4zJ0.js";
import { $ } from "./chunk-bVBkTso-.js";
import { h } from "./chunk-MoY3igy4.js";
import { v } from "./chunk-tFylJgQz.js";
import { p as p$1 } from "./chunk-BMM_upw9.js";
import { U } from "./chunk-GrWojVOW.js";
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
let y = class extends p$1(i(m$1(u$1))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new c$1(), this._updateHash = "";
  }
  fetchPopupFeaturesAtLocation(t, e2) {
    return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t, e2);
  }
  update(t) {
    const r2 = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== r2 && (this._updateHash = r2, this.strategy.update(t).catch((t2) => {
      b$1(t2) || s$1.getLogger(this).error(t2);
    }), t.stationary && this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)), this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e2, version: i2 } = this.layer, s = i2 >= 10.3, a$1 = i2 >= 10;
    this._bitmapContainer = new a(), this.container.addChild(this._bitmapContainer), this._highlightView = new $({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new h(this.view.featuresTilingScheme), defaultPointSymbolEnabled: false }), this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (t2, e3) => r(t2, e3, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (t2, e3) => {
      this._highlightView.graphicUpdateHandler({ graphic: t2, property: e3 });
    }, layerView: this, updatingHandles: this._updatingHandles }), this.strategy = new v({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: t, imageMaxHeight: e2, imageRotationSupported: s, imageNormalizationSupported: a$1, hidpi: true }), this.addAttachHandles(d$1(() => this.exportImageVersion, () => this.requestUpdate())), this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren(), this._highlightView.destroy(), this._popupHighlightHelper.destroy();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  async doRefresh() {
    this._updateHash = "", this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e2, i2, r2) {
    return this.layer.fetchImage(t, e2, i2, { timeExtent: this.timeExtent, floors: this.floors, ...r2 });
  }
  fetchImageBitmap(t, e2, i2, r2) {
    return this.layer.fetchImageBitmap(t, e2, i2, { timeExtent: this.timeExtent, floors: this.floors, ...r2 });
  }
  highlight(t) {
    return this._popupHighlightHelper.highlight(t);
  }
};
e([y$1()], y.prototype, "strategy", void 0), e([y$1()], y.prototype, "updating", void 0), y = e([c("esri.views.2d.layers.MapImageLayerView2D")], y);
const w = y;
export {
  w as default
};
