import { fQ as m$1, dP as u, bJ as d$1, bn as P$1, c_ as d$2, bh as V, d0 as k, c$ as t, fY as p, bo as e, br as c } from "./chunk-KFNcxJaF.js";
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
let y = class extends m$1(u) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(e2, r) {
    if (!this.graphicsViews.length)
      return null;
    const s = this.layer;
    return this.graphicsViews.reverse().flatMap((r2) => {
      const i2 = this._popupTemplates.get(r2), t2 = r2.hitTest(e2);
      for (const e3 of t2)
        e3.layer = s, e3.sourceLayer = s, e3.popupTemplate = i2;
      return t2;
    }).map((r2) => ({ type: "graphic", graphic: r2, layer: s, mapPoint: e2 }));
  }
  update(e2) {
    if (this.graphicsViews)
      for (const r of this.graphicsViews)
        r.processUpdate(e2);
  }
  attach() {
    this.addAttachHandles([d$1(() => this.layer?.featureCollections, (e2) => {
      this._clear();
      for (const { popupInfo: i$1, featureSet: t$1, layerDefinition: o } of e2) {
        const e3 = d$2.fromJSON(t$1), p2 = new V(e3.features), n = o.drawingInfo, m = i$1 ? k.fromJSON(i$1) : null, y2 = t(n.renderer), g2 = new re({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: p2, renderer: y2, container: new i(this.view.featuresTilingScheme) });
        this._graphicsViewMap[e3.geometryType] = g2, this._popupTemplates.set(g2, m), "polygon" !== e3.geometryType || this.layer.polygonSymbol ? "polyline" !== e3.geometryType || this.layer.lineSymbol ? "point" !== e3.geometryType || this.layer.pointSymbol || (this.layer.pointSymbol = y2.symbol) : this.layer.lineSymbol = y2.symbol : this.layer.polygonSymbol = y2.symbol, this.graphicsViews.push(g2), this.container.addChild(g2.container);
      }
    }, P$1), d$1(() => this.layer?.polygonSymbol, (e2) => {
      this._graphicsViewMap.polygon.renderer = new p({ symbol: e2 });
    }, P$1), d$1(() => this.layer?.lineSymbol, (e2) => {
      this._graphicsViewMap.polyline.renderer = new p({ symbol: e2 });
    }, P$1), d$1(() => this.layer?.pointSymbol, (e2) => {
      this._graphicsViewMap.point.renderer = new p({ symbol: e2 });
    }, P$1)]);
  }
  detach() {
    this._clear();
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e2 of this.graphicsViews)
      e2.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e2 of this.graphicsViews)
      e2.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
y = e([c("esri.views.2d.layers.GeoRSSLayerView2D")], y);
const g = y;
export {
  g as default
};
