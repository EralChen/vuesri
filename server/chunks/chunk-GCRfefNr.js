import { dO as a, fQ as m$1, dP as u, fR as i, bI as b, bb as s$1, fX as a$1, dQ as r, bJ as d$1, bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { r as re } from "./chunk-pNUePs4Z.js";
import { a as a$2 } from "./chunk-SHcdQomB.js";
import { v } from "./chunk-FihFYhey.js";
import { p } from "./chunk-rSZ9Aidu.js";
import { G } from "./chunk-IcrgUyIJ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-Zlv3z8RW.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-b7K892Yv.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-IbXsXbhF.js";
import "./chunk-E-M87tOH.js";
import "./chunk-_ABw_62H.js";
let f = class extends p(a(m$1(u))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new i(), this._updateHash = "";
  }
  fetchPopupFeatures(t, e2) {
    return this._popupHighlightHelper.fetchPopupFeatures(t, e2);
  }
  update(t) {
    const r2 = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== r2 && (this._updateHash = r2, this.strategy.update(t).catch((t2) => {
      b(t2) || s$1.getLogger(this).error(t2);
    }), t.stationary && this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)), this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e2, version: i2 } = this.layer, s = i2 >= 10.3, a2 = i2 >= 10;
    this._bitmapContainer = new a$1(), this.container.addChild(this._bitmapContainer), this._highlightView = new re({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new a$2(this.view.featuresTilingScheme), defaultPointSymbolEnabled: false }), this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new G({ createFetchPopupFeaturesQueryGeometry: (t2, e3) => r(t2, e3, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (t2, e3) => {
      this._highlightView.graphicUpdateHandler({ graphic: t2, property: e3 });
    }, layerView: this, updatingHandles: this._updatingHandles }), this.strategy = new v({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: t, imageMaxHeight: e2, imageRotationSupported: s, imageNormalizationSupported: a2, hidpi: true }), this.addAttachHandles(d$1(() => this.exportImageVersion, () => this.requestUpdate())), this.requestUpdate();
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
e([y()], f.prototype, "strategy", void 0), e([y()], f.prototype, "updating", void 0), f = e([c("esri.views.2d.layers.MapImageLayerView2D")], f);
const w = f;
export {
  w as default
};
