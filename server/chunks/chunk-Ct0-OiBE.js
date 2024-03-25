import { gJ as m$1, eu as u$1, bQ as V$1, fH as l, bX as P$1, cr as q$1, cm as e$1, ce as d$1, aV as e, aX as y, a_ as c, gT as t$1 } from "./chunk-ejFG4zJ0.js";
import { m, c as c$1, O, f, j as j$1, g, a as O$1 } from "./chunk-fPzE2fLD.js";
import { t } from "./chunk-Ds4Mh7HH.js";
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
const j = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], M = { graphic: null, property: null, oldValue: null, newValue: null };
function V(t2) {
  return t2 instanceof m || t2 instanceof c$1 || t2 instanceof O || t2 instanceof f || t2 instanceof j$1 || t2 instanceof g || t2 instanceof O$1;
}
function v(t2) {
  return V$1.isCollection(t2) && t2.length && V(t2.at(0));
}
function G(t2) {
  return Array.isArray(t2) && t2.length > 0 && V(t2[0]);
}
let I = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._graphics = new V$1(), this._highlightIds = /* @__PURE__ */ new Map(), this._networkFeatureMap = /* @__PURE__ */ new Map(), this._networkGraphicMap = /* @__PURE__ */ new Map();
  }
  get _routeItems() {
    return new l({ getCollections: () => null == this.layer || this.destroyed ? [] : [null != this.layer.routeInfo ? new V$1([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] });
  }
  initialize() {
    this._updatingHandles.addOnCollectionChange(() => this._routeItems, (t2) => this._routeItemsChanged(t2), P$1);
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
  async fetchPopupFeaturesAtLocation(t2, e2) {
    return this._graphicsView.hitTest(t2).filter(({ popupTemplate: t3 }) => !!t3);
  }
  highlight(t2) {
    let r;
    r = V(t2) ? [this._getNetworkFeatureUid(t2)] : G(t2) ? t2.map((t3) => this._getNetworkFeatureUid(t3)) : v(t2) ? t2.map((t3) => this._getNetworkFeatureUid(t3)).toArray() : [t2.uid];
    const i = r.filter(q$1);
    return i.length ? (this._addHighlight(i), e$1(() => this._removeHighlight(i))) : e$1();
  }
  async hitTest(t2, r) {
    if (this.suspended)
      return null;
    const i = this._graphicsView.hitTest(t2).filter(q$1).map((t3) => this._networkGraphicMap.get(t3));
    if (!i.length)
      return null;
    const { layer: s } = this;
    return i.reverse().map((e2) => ({ type: "route", layer: s, mapPoint: t2, networkFeature: e2 }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(t2) {
    this._graphicsView.processUpdate(t2);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(t2) {
    for (const e2 of t2)
      if (this._highlightIds.has(e2)) {
        const t3 = this._highlightIds.get(e2);
        this._highlightIds.set(e2, t3 + 1);
      } else
        this._highlightIds.set(e2, 1);
    this._updateHighlight();
  }
  _createGraphic(t2) {
    const e2 = t2.toGraphic();
    return e2.layer = this.layer, e2.sourceLayer = this.layer, e2;
  }
  _createGraphicsView() {
    const t$12 = this.view, e2 = () => this.requestUpdate(), r = new t(t$12.featuresTilingScheme);
    this._graphicsView = new $({ container: r, graphics: this._graphics, requestUpdateCallback: e2, view: t$12 }), this.container.addChild(r), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(t2) {
    const e2 = this._networkGraphicMap.get(t2);
    return j.indexOf(e2.type);
  }
  _getNetworkFeatureUid(t2) {
    return this._networkFeatureMap.has(t2) ? this._networkFeatureMap.get(t2).uid : null;
  }
  _removeHighlight(t2) {
    for (const e2 of t2)
      if (this._highlightIds.has(e2)) {
        const t3 = this._highlightIds.get(e2) - 1;
        0 === t3 ? this._highlightIds.delete(e2) : this._highlightIds.set(e2, t3);
      }
    this._updateHighlight();
  }
  _routeItemsChanged(t2) {
    if (t2.removed.length) {
      this._graphics.removeMany(t2.removed.map((t3) => {
        const e2 = this._networkFeatureMap.get(t3);
        return this._networkFeatureMap.delete(t3), this._networkGraphicMap.delete(e2), e2;
      }));
      for (const e2 of t2.removed)
        this.removeHandles(e2);
    }
    if (t2.added.length) {
      this._graphics.addMany(t2.added.map((t3) => {
        const e2 = this._createGraphic(t3);
        return null == e2.symbol ? null : (this._networkFeatureMap.set(t3, e2), this._networkGraphicMap.set(e2, t3), e2);
      }).filter(q$1));
      for (const e2 of t2.added)
        this.addHandles([d$1(() => e2.geometry, (t3, r) => {
          this._updateGraphic(e2, "geometry", t3, r);
        }), d$1(() => e2.symbol, (t3, r) => {
          this._updateGraphic(e2, "symbol", t3, r);
        })], e2);
      this._graphics.sort((t3, e2) => this._getDrawOrder(t3) - this._getDrawOrder(e2));
    }
  }
  _updateGraphic(t2, e2, r, i) {
    if (!this._networkFeatureMap.has(t2)) {
      const e3 = this._createGraphic(t2);
      return this._networkFeatureMap.set(t2, e3), this._networkGraphicMap.set(e3, t2), void this._graphics.add(e3);
    }
    const s = this._networkFeatureMap.get(t2);
    s[e2] = r, M.graphic = s, M.property = e2, M.oldValue = i, M.newValue = r, this._graphicsView.graphicUpdateHandler(M);
  }
  _updateHighlight() {
    const t2 = Array.from(this._highlightIds.keys()), e2 = t$1("highlight");
    this._graphicsView.setHighlight(t2.map((t3) => ({ objectId: t3, highlightFlags: e2 })));
  }
};
e([y()], I.prototype, "_graphics", void 0), e([y()], I.prototype, "_routeItems", null), I = e([c("esri.views.2d.layers.RouteLayerView2D")], I);
const F = I;
export {
  F as default
};
