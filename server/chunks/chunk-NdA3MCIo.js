import { gJ as m$1, eu as u$1, ce as d$1, bX as P$1, dm as d$2, bQ as V, dp as P, dn as t, gS as m, aV as e, a_ as c } from "./chunk-ejFG4zJ0.js";
import { t as t$1 } from "./chunk-Ds4Mh7HH.js";
import { $ } from "./chunk-bVBkTso-.js";
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
let y = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(e2, r) {
    if (!this.graphicsViews.length)
      return null;
    const s = this.layer;
    return this.graphicsViews.reverse().flatMap((r2) => {
      const i = this._popupTemplates.get(r2), t2 = r2.hitTest(e2);
      for (const e3 of t2)
        e3.layer = s, e3.sourceLayer = s, e3.popupTemplate = i;
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
      for (const { popupInfo: i, featureSet: t$2, layerDefinition: o } of e2) {
        const e3 = d$2.fromJSON(t$2), p = new V(e3.features), n = o.drawingInfo, m2 = i ? P.fromJSON(i) : null, y2 = t(n.renderer), g2 = new $({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: p, renderer: y2, container: new t$1(this.view.featuresTilingScheme) });
        this._graphicsViewMap[e3.geometryType] = g2, this._popupTemplates.set(g2, m2), "polygon" !== e3.geometryType || this.layer.polygonSymbol ? "polyline" !== e3.geometryType || this.layer.lineSymbol ? "point" !== e3.geometryType || this.layer.pointSymbol || (this.layer.pointSymbol = y2.symbol) : this.layer.lineSymbol = y2.symbol : this.layer.polygonSymbol = y2.symbol, this.graphicsViews.push(g2), this.container.addChild(g2.container);
      }
    }, P$1), d$1(() => this.layer?.polygonSymbol, (e2) => {
      this._graphicsViewMap.polygon.renderer = new m({ symbol: e2 });
    }, P$1), d$1(() => this.layer?.lineSymbol, (e2) => {
      this._graphicsViewMap.polyline.renderer = new m({ symbol: e2 });
    }, P$1), d$1(() => this.layer?.pointSymbol, (e2) => {
      this._graphicsViewMap.point.renderer = new m({ symbol: e2 });
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
