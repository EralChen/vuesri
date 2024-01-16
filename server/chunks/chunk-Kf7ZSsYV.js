import { fQ as m$1, dP as u, bh as V$1, eR as l, bn as P$1, bX as k$1, bS as e$1, bJ as d$1, bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
import { m, c as c$1, C, T, j as j$1, S, O } from "./chunk-DofnyZMT.js";
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
const k = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], M = { graphic: null, property: null, oldValue: null, newValue: null };
function V(t) {
  return t instanceof m || t instanceof c$1 || t instanceof C || t instanceof T || t instanceof j$1 || t instanceof S || t instanceof O;
}
function j(t) {
  return V$1.isCollection(t) && t.length && V(t.at(0));
}
function v(t) {
  return Array.isArray(t) && t.length > 0 && V(t[0]);
}
let G = class extends m$1(u) {
  constructor() {
    super(...arguments), this._graphics = new V$1(), this._highlightIds = /* @__PURE__ */ new Map(), this._networkFeatureMap = /* @__PURE__ */ new Map(), this._networkGraphicMap = /* @__PURE__ */ new Map();
  }
  get _routeItems() {
    return new l({ getCollections: () => null == this.layer || this.destroyed ? [] : [null != this.layer.routeInfo ? new V$1([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] });
  }
  initialize() {
    this._updatingHandles.addOnCollectionChange(() => this._routeItems, (t) => this._routeItemsChanged(t), P$1);
  }
  destroy() {
    this._networkFeatureMap.clear(), this._networkGraphicMap.clear(), this._graphics.removeAll(), this._get("_routeItems")?.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeatures(t) {
    return this._graphicsView.hitTest(t).filter((t2) => !!t2.popupTemplate);
  }
  highlight(t) {
    let r;
    r = V(t) ? [this._getNetworkFeatureUid(t)] : v(t) ? t.map((t2) => this._getNetworkFeatureUid(t2)) : j(t) ? t.map((t2) => this._getNetworkFeatureUid(t2)).toArray() : [t.uid];
    const i2 = r.filter(k$1);
    return i2.length ? (this._addHighlight(i2), e$1(() => this._removeHighlight(i2))) : e$1();
  }
  async hitTest(t, r) {
    if (this.suspended)
      return null;
    const i2 = this._graphicsView.hitTest(t).filter(k$1).map((t2) => this._networkGraphicMap.get(t2));
    if (!i2.length)
      return null;
    const { layer: s } = this;
    return i2.reverse().map((e2) => ({ type: "route", layer: s, mapPoint: t, networkFeature: e2 }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(t) {
    this._graphicsView.processUpdate(t);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(t) {
    for (const e2 of t)
      if (this._highlightIds.has(e2)) {
        const t2 = this._highlightIds.get(e2);
        this._highlightIds.set(e2, t2 + 1);
      } else
        this._highlightIds.set(e2, 1);
    this._updateHighlight();
  }
  _createGraphic(t) {
    const e2 = t.toGraphic();
    return e2.layer = this.layer, e2.sourceLayer = this.layer, e2;
  }
  _createGraphicsView() {
    const t = this.view, e2 = () => this.requestUpdate(), r = new i(t.featuresTilingScheme);
    this._graphicsView = new re({ container: r, graphics: this._graphics, requestUpdateCallback: e2, view: t }), this.container.addChild(r), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(t) {
    const e2 = this._networkGraphicMap.get(t);
    return k.indexOf(e2.type);
  }
  _getNetworkFeatureUid(t) {
    return this._networkFeatureMap.has(t) ? this._networkFeatureMap.get(t).uid : null;
  }
  _removeHighlight(t) {
    for (const e2 of t)
      if (this._highlightIds.has(e2)) {
        const t2 = this._highlightIds.get(e2) - 1;
        0 === t2 ? this._highlightIds.delete(e2) : this._highlightIds.set(e2, t2);
      }
    this._updateHighlight();
  }
  _routeItemsChanged(t) {
    if (t.removed.length) {
      this._graphics.removeMany(t.removed.map((t2) => {
        const e2 = this._networkFeatureMap.get(t2);
        return this._networkFeatureMap.delete(t2), this._networkGraphicMap.delete(e2), e2;
      }));
      for (const e2 of t.removed)
        this.removeHandles(e2);
    }
    if (t.added.length) {
      this._graphics.addMany(t.added.map((t2) => {
        const e2 = this._createGraphic(t2);
        return null == e2.symbol ? null : (this._networkFeatureMap.set(t2, e2), this._networkGraphicMap.set(e2, t2), e2);
      }).filter(k$1));
      for (const e2 of t.added)
        this.addHandles([d$1(() => e2.geometry, (t2, r) => {
          this._updateGraphic(e2, "geometry", t2, r);
        }), d$1(() => e2.symbol, (t2, r) => {
          this._updateGraphic(e2, "symbol", t2, r);
        })], e2);
      this._graphics.sort((t2, e2) => this._getDrawOrder(t2) - this._getDrawOrder(e2));
    }
  }
  _updateGraphic(t, e2, r, i2) {
    if (!this._networkFeatureMap.has(t)) {
      const e3 = this._createGraphic(t);
      return this._networkFeatureMap.set(t, e3), this._networkGraphicMap.set(e3, t), void this._graphics.add(e3);
    }
    const s = this._networkFeatureMap.get(t);
    s[e2] = r, M.graphic = s, M.property = e2, M.oldValue = i2, M.newValue = r, this._graphicsView.graphicUpdateHandler(M);
  }
  _updateHighlight() {
    const t = Array.from(this._highlightIds.keys());
    this._graphicsView.setHighlight(t);
  }
};
e([y()], G.prototype, "_graphics", void 0), e([y()], G.prototype, "_routeItems", null), G = e([c("esri.views.2d.layers.RouteLayerView2D")], G);
const I = G;
export {
  I as default
};
