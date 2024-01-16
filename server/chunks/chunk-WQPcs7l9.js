import { h8 as u, bo as e, bs as g$1, kA as l, jn as h, d1 as o, bJ as d$1, bK as C$1, kB as J, kC as d, kD as b$1, kE as i, cP as D, de as b$2, kF as e$1, fi as x$1, bp as y, br as c, eQ as n$1, kG as i$1 } from "./chunk-KFNcxJaF.js";
function s(s2) {
  let t = 0, a = 0, e2 = 0;
  return s2 ? ("cim" === s2.type && s2.data.symbol && "symbolLayers" in s2.data.symbol && s2.data.symbol.symbolLayers && s2.data.symbol.symbolLayers.map((o2) => {
    "CIMVectorMarker" === o2.type && o2.anchorPoint && (Math.abs(o2.anchorPoint.x) > t && (t = o2.anchorPoint.x), Math.abs(o2.anchorPoint.y) > a && (a = o2.anchorPoint.y), null != o2.size && o2.size > e2 && (e2 = o2.size));
  }), t = u(t), a = u(a), e2 = u(e2), { offsetX: t, offsetY: a, size: e2 }) : { offsetX: t, offsetY: a, size: e2 };
}
let S = class extends g$1 {
  set graphic(t) {
    this._circleCollisionCache = null, this._originalSymbol = t.symbol, this._set("graphic", t), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const { layer: t } = this.graphic, e2 = t && "elevationInfo" in t ? t.elevationInfo : null, o2 = l(this.graphic), i2 = e2 ? e2.offset : 0;
    return new h({ mode: o2, offset: i2 });
  }
  set focusedSymbol(t) {
    t !== this._get("focusedSymbol") && (this._set("focusedSymbol", t), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(t) {
    t !== this._get("grabbing") && (this._set("grabbing", t), this._updateGraphicSymbol());
  }
  set hovering(t) {
    t !== this._get("hovering") && (this._set("hovering", t), this._updateGraphicSymbol());
  }
  set selected(t) {
    t !== this._get("selected") && (this._set("selected", t), this._updateGraphicSymbol(), this.events.emit("select-changed", { action: t ? "select" : "deselect" }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  constructor(t) {
    super(t), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.consumesClicks = true, this.events = new o.EventEmitter(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(t) {
    const e2 = this.graphic;
    if (false === e2.visible)
      return null;
    const o2 = e2.geometry;
    if (null == o2)
      return null;
    const i2 = this._get("focusedSymbol"), s2 = null != i2 ? i2 : e2.symbol;
    return "2d" === this.view.type ? this._intersectDistance2D(this.view, t, o2, s2) : this._intersectDistance3D(this.view, t, e2);
  }
  attach() {
    this.attachSymbolChanged(), null != this.layer && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), null != this.layer && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = d$1(() => this.graphic?.symbol, (t) => {
      null != t && t !== this.focusedSymbol && t !== this._originalSymbol && (this._originalSymbol = t, this._focused && null != this.focusedSymbol && (this.graphic.symbol = this.focusedSymbol));
    }, C$1);
  }
  detachSymbolChanged() {
    null != this._graphicSymbolChangedHandle && (this._graphicSymbolChangedHandle.remove(), this._graphicSymbolChangedHandle = null);
  }
  onElevationChange() {
  }
  onViewChange() {
  }
  _updateGraphicSymbol() {
    this.graphic.symbol = this._focused && null != this.focusedSymbol ? this.focusedSymbol : this._originalSymbol;
  }
  _resetGraphicSymbol() {
    this.graphic.symbol = this._originalSymbol;
  }
  _intersectDistance2D(t, e2, o2, i$12) {
    if (null == (i$12 = i$12 || J(o2)))
      return null;
    const s$1 = 1;
    let n = this._circleCollisionCache;
    if ("point" === o2.type && "cim" === i$12.type && "CIMPointSymbol" === i$12.data.symbol?.type && i$12.data.symbol.symbolLayers) {
      const { offsetX: l2, offsetY: n2, size: a } = s(i$12), c2 = d(e2, j), p = a / 2, u2 = t.toScreen(o2), m = u2.x + l2, y2 = u2.y + n2;
      return b$1(c2, [m, y2]) < p * p ? s$1 : null;
    }
    if ("point" !== o2.type || "simple-marker" !== i$12.type)
      return i(e2, o2, t) ? s$1 : null;
    if (null == n || !n.originalPoint.equals(o2)) {
      const e3 = o2, s2 = t.spatialReference;
      if (D(e3.spatialReference, s2)) {
        const t2 = b$2(e3, s2);
        n = { originalPoint: e3.clone(), mapPoint: t2, radiusPx: u(i$12.size) }, this._circleCollisionCache = n;
      }
    }
    if (null != n) {
      const o3 = d(e2, j), a = t.toScreen?.(n.mapPoint);
      if (!a)
        return null;
      const c2 = n.radiusPx, p = a.x + u(i$12.xoffset), u$1 = a.y - u(i$12.yoffset);
      return b$1(o3, [p, u$1]) < c2 * c2 ? s$1 : null;
    }
    return null;
  }
  _intersectDistance3D(t, e2, o2) {
    const i2 = t.toMap(e2, { include: [o2] });
    return i2 && e$1(i2, C, t.renderSpatialReference) ? x$1(C, t.state.camera.eye) : null;
  }
};
e([y({ constructOnly: true, nonNullable: true })], S.prototype, "graphic", null), e([y()], S.prototype, "elevationInfo", null), e([y({ constructOnly: true, nonNullable: true })], S.prototype, "view", void 0), e([y({ value: null })], S.prototype, "focusedSymbol", null), e([y({ constructOnly: true })], S.prototype, "layer", void 0), e([y()], S.prototype, "interactive", void 0), e([y()], S.prototype, "selectable", void 0), e([y()], S.prototype, "grabbable", void 0), e([y({ value: false })], S.prototype, "grabbing", null), e([y()], S.prototype, "dragging", void 0), e([y()], S.prototype, "hovering", null), e([y({ value: false })], S.prototype, "selected", null), e([y()], S.prototype, "cursor", void 0), S = e([c("esri.views.interactive.GraphicManipulator")], S);
const C = n$1(), j = i$1();
export {
  S,
  s
};
