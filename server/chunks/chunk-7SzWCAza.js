import { fQ as m$1, dP as u$1, bf as c$1, bh as V, bX as k$1, bS as e$1, bJ as d$1, bn as P$1, e3 as v, bo as e, br as c } from "./chunk-KFNcxJaF.js";
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
const d = "sublayers", u = "layerView";
let f = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  async fetchPopupFeatures(e2) {
    return Array.from(this.graphicsViews(), (i2) => i2.hitTest(e2).filter((e3) => !!e3.popupTemplate)).flat();
  }
  *graphicsViews() {
    null == this._graphicsViewsFeatureCollectionMap ? null == this._graphicsViews ? yield* [] : yield* this._graphicsViews : yield* this._graphicsViewsFeatureCollectionMap.keys();
  }
  async hitTest(e2, i2) {
    return Array.from(this.graphicsViews(), (i3) => {
      const s = i3.hitTest(e2);
      if (null != this._graphicsViewsFeatureCollectionMap) {
        const e3 = this._graphicsViewsFeatureCollectionMap.get(i3);
        for (const i4 of s)
          !i4.popupTemplate && e3.popupTemplate && (i4.popupTemplate = e3.popupTemplate), i4.sourceLayer = i4.layer = this.layer;
      }
      return s;
    }).flat().map((i3) => ({ type: "graphic", graphic: i3, layer: this.layer, mapPoint: e2 }));
  }
  highlight(e2) {
    let h;
    "number" == typeof e2 ? h = [e2] : e2 instanceof c$1 ? h = [e2.uid] : Array.isArray(e2) && e2.length > 0 ? h = "number" == typeof e2[0] ? e2 : e2.map((e3) => e3 && e3.uid) : V.isCollection(e2) && (h = e2.map((e3) => e3 && e3.uid).toArray());
    const a = h?.filter(k$1);
    return a?.length ? (this._addHighlight(a), e$1(() => this._removeHighlight(a))) : e$1();
  }
  update(e2) {
    for (const i2 of this.graphicsViews())
      i2.processUpdate(e2);
  }
  attach() {
    const e2 = this.view, i$1 = () => this.requestUpdate(), s = this.layer.featureCollections;
    if (null != s && s.length) {
      this._graphicsViewsFeatureCollectionMap = /* @__PURE__ */ new Map();
      for (const t of s) {
        const s2 = new i(this.view.featuresTilingScheme), r = new re({ view: e2, graphics: t.source, renderer: t.renderer, requestUpdateCallback: i$1, container: s2 });
        this._graphicsViewsFeatureCollectionMap.set(r, t), this.container.addChild(r.container), this.addHandles([d$1(() => t.visible, (e3) => r.container.visible = e3, P$1), d$1(() => r.updating, () => this.notifyChange("updating"), P$1)], u);
      }
      this._updateHighlight();
    } else
      null != this.layer.sublayers && this.addHandles(v(() => this.layer.sublayers, "change", () => this._createGraphicsViews(), { onListenerAdd: () => this._createGraphicsViews(), onListenerRemove: () => this._destroyGraphicsViews() }), d);
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(d);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews())
      e2.viewChange();
  }
  isUpdating() {
    for (const e2 of this.graphicsViews())
      if (e2.updating)
        return true;
    return false;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(u);
    for (const e2 of this.graphicsViews())
      e2.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), null == this.layer.sublayers)
      return;
    const e2 = [], i$1 = this.view, s = () => this.requestUpdate();
    for (const t of this.layer.sublayers) {
      const r = new i(this.view.featuresTilingScheme);
      r.fadeTransitionEnabled = true;
      const a = new re({ view: i$1, graphics: t.graphics, requestUpdateCallback: s, container: r });
      this.addHandles([t.on("graphic-update", a.graphicUpdateHandler), d$1(() => t.visible, (e3) => a.container.visible = e3, P$1), d$1(() => a.updating, () => this.notifyChange("updating"), P$1)], u), this.container.addChild(a.container), e2.push(a);
    }
    this._graphicsViews = e2, this._updateHighlight();
  }
  _addHighlight(e2) {
    for (const i2 of e2)
      if (this._highlightIds.has(i2)) {
        const e3 = this._highlightIds.get(i2);
        this._highlightIds.set(i2, e3 + 1);
      } else
        this._highlightIds.set(i2, 1);
    this._updateHighlight();
  }
  _removeHighlight(e2) {
    for (const i2 of e2)
      if (this._highlightIds.has(i2)) {
        const e3 = this._highlightIds.get(i2) - 1;
        0 === e3 ? this._highlightIds.delete(i2) : this._highlightIds.set(i2, e3);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const e2 = Array.from(this._highlightIds.keys());
    for (const i2 of this.graphicsViews())
      i2.setHighlight(e2);
  }
};
f = e([c("esri.views.2d.layers.MapNotesLayerView2D")], f);
const m = f;
export {
  m as default
};
