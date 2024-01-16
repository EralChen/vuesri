import { fQ as m$1, dP as u, bD as u$1, bf as c$1, bh as V, bX as k$1, bS as e$1, bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { i } from "./chunk-HuS-BxAR.js";
import { r as re } from "./chunk-pNUePs4Z.js";
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
let n = class extends m$1(u) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  attach() {
    this.graphicsView = new re({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new i(this.view.featuresTilingScheme) }), this._updateHighlight(), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler));
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = u$1(this.graphicsView);
  }
  async hitTest(i2) {
    return this.graphicsView ? this.graphicsView.hitTest(i2).map((t) => ({ type: "graphic", graphic: t, mapPoint: i2, layer: this.layer })) : null;
  }
  async fetchPopupFeatures(i2) {
    return this.graphicsView ? this.graphicsView.hitTest(i2).filter((i3) => !!i3.popupTemplate) : [];
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i2) {
    this.graphicsView.processUpdate(i2);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i2) {
    let r;
    "number" == typeof i2 ? r = [i2] : i2 instanceof c$1 ? r = [i2.uid] : Array.isArray(i2) && i2.length > 0 ? r = "number" == typeof i2[0] ? i2 : i2.map((i3) => i3 && i3.uid) : V.isCollection(i2) && i2.length > 0 && (r = i2.map((i3) => i3 && i3.uid).toArray());
    const a = r?.filter(k$1);
    return a?.length ? (this._addHighlight(a), e$1(() => this._removeHighlight(a))) : e$1();
  }
  _addHighlight(i2) {
    for (const t of i2)
      if (this._highlightIds.has(t)) {
        const i3 = this._highlightIds.get(t);
        this._highlightIds.set(t, i3 + 1);
      } else
        this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _removeHighlight(i2) {
    for (const t of i2)
      if (this._highlightIds.has(t)) {
        const i3 = this._highlightIds.get(t) - 1;
        0 === i3 ? this._highlightIds.delete(t) : this._highlightIds.set(t, i3);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));
  }
};
e([y()], n.prototype, "graphicsView", void 0), n = e([c("esri.views.2d.layers.GraphicsLayerView2D")], n);
const d = n;
export {
  d as default
};
