import { aV as e$1, aX as y, a_ as c$1, bZ as S$1, nX as r$1, nY as n$1, ds as o, dG as h$2, gn as e$2, ce as d$1, f6 as p$1, go as _, nZ as n$2, gw as i$1, bD as a$2, d8 as y$1, d6 as d, b_ as S$2 } from "./chunk-ejFG4zJ0.js";
import { F as Fe } from "./chunk-ozhCrCUU.js";
import { S } from "./chunk-KUOhxWR4.js";
let a$1 = class a extends S$1 {
  constructor(r2) {
    super(r2), this.view = null;
  }
  add(r2) {
    const s2 = !r2 || Array.isArray(r2) ? r2 : [r2];
    s2?.length && s2.forEach((r3) => this._highlight(r3));
  }
  remove(r2) {
    const s2 = !r2 || Array.isArray(r2) ? r2 : [r2];
    s2?.length && s2.forEach((r3) => this._removeHighlight(r3));
  }
  removeAll() {
    this.removeAllHandles();
  }
  _highlight(r2) {
    const s2 = r$1(this.view, r2.layer);
    n$1(s2) && this.addHandles(s2.highlight(r2), Fe(r2));
  }
  _removeHighlight(r2) {
    r2 && this.removeHandles(Fe(r2));
  }
};
e$1([y()], a$1.prototype, "view", void 0), a$1 = e$1([c$1("esri.views.draw.support.HighlightHelper")], a$1);
const h$1 = a$1;
class t {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-click";
  }
}
class i {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-double-click";
  }
}
class s {
  constructor(t2, i2, s2, h2, e2, r2, c2, a3, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a3, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-start";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class h {
  constructor(t2, i2, s2, h2, e2, r2, c2, a3, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a3, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class e {
  constructor(t2, i2, s2, h2, e2, r2, c2, a3, n2, p) {
    this.graphic = t2, this.allGraphics = i2, this.index = s2, this.x = h2, this.y = e2, this.dx = r2, this.dy = c2, this.totalDx = a3, this.totalDy = n2, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-stop";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class r {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-over";
  }
}
class c {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-out";
  }
}
class a2 {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-down";
  }
}
class n {
  constructor(t2, i2, s2, h2, e2) {
    this.graphic = t2, this.index = i2, this.x = s2, this.y = h2, this.viewEvent = e2, this.type = "graphic-pointer-up";
  }
}
const M = "indicator-symbols";
let E = class extends o.EventedAccessor {
  constructor(i2) {
    super(i2), this._activeGraphic = null, this._dragEvent = null, this._hoverGraphic = null, this._indicators = [], this._initialDragGeometry = null, this._manipulators = [], this._layerViews = null, this.type = "graphic-mover", this.callbacks = { onGraphicClick() {
    }, onGraphicDoubleClick() {
    }, onGraphicMoveStart() {
    }, onGraphicMove() {
    }, onGraphicMoveStop() {
    }, onGraphicPointerOver() {
    }, onGraphicPointerOut() {
    }, onGraphicPointerDown() {
    }, onGraphicPointerUp() {
    } }, this.enableMoveAllGraphics = false, this.graphics = [], this.indicatorsEnabled = false, this.layer = new h$2({ listMode: "hide", internal: true, title: "GraphicMover highlight layer" }), this.view = null;
  }
  initialize() {
    e$2(this.view, this.layer), this._highlightHelper = new h$1({ view: this.view }), this.refresh(), this.addHandles([d$1(() => this.graphics.length, () => this.refresh()), p$1(() => this.view?.ready, () => {
      this.addHandles([this.view.on("immediate-click", (i2) => this._clickHandler(i2), _.TOOL), this.view.on("double-click", (i2) => this._doubleClickHandler(i2), _.TOOL), this.view.on("pointer-down", (i2) => this._pointerDownHandler(i2), _.TOOL), this.view.on("pointer-move", (i2) => this._pointerMoveHandler(i2), _.TOOL), this.view.on("pointer-up", (i2) => this._pointerUpHandler(i2), _.TOOL), this.view.on("drag", (i2) => this._dragHandler(i2), _.TOOL), this.view.on("key-down", (i2) => this._keyDownHandler(i2), _.TOOL)]);
    }, { once: true, initial: true }), d$1(() => this.view, (i2) => {
      this._highlightHelper.removeAll(), this._highlightHelper.view = i2;
    })]);
  }
  destroy() {
    this._removeIndicators(), this.view.map?.remove(this.layer), this.layer.destroy(), this.reset(), this._manipulators.forEach((i2) => i2.destroy()), this._manipulators = null;
  }
  set highlightsEnabled(i2) {
    this._highlightHelper?.removeAll(), this._set("highlightsEnabled", i2), i2 && this._highlightHelper?.add(this.graphics);
  }
  get state() {
    const i2 = this.view.ready, t2 = this.graphics.length > 0, e2 = this._activeGraphic;
    return i2 && t2 ? e2 ? "moving" : "active" : i2 ? "ready" : "disabled";
  }
  refresh() {
    this.reset(), this._setup();
  }
  reset() {
    this._activeGraphic = null, this._hoverGraphic = null, this._dragEvent = null, this._highlightHelper.removeAll();
  }
  updateGeometry(i2, t2) {
    const e2 = this.graphics[i2];
    e2 && (e2.set("geometry", t2), this._setUpIndicators());
  }
  _setup() {
    this._setUpHighlights(), this._setUpIndicators(), this._setUpManipulators(), this._syncLayerViews();
  }
  _clickHandler(i2) {
    const t$1 = this._findTargetGraphic(n$2(i2));
    if (t$1) {
      const e2 = new t(t$1, this.graphics.indexOf(t$1), i2.x, i2.y, i2);
      this.emit("graphic-click", e2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e2);
    }
  }
  _doubleClickHandler(i$12) {
    const t2 = this._findTargetGraphic(n$2(i$12));
    if (t2) {
      const e2 = new i(t2, this.graphics.indexOf(t2), i$12.x, i$12.y, i$12);
      this.emit("graphic-double-click", e2), this.callbacks.onGraphicDoubleClick && this.callbacks.onGraphicDoubleClick(e2);
    }
  }
  _pointerDownHandler(i2) {
    const t2 = this._findTargetGraphic(n$2(i2));
    if (t2) {
      this._activeGraphic = t2;
      const { x: e2, y: s2 } = i2, r2 = new a2(t2, this.graphics.indexOf(t2), e2, s2, i2);
      this.emit("graphic-pointer-down", r2), this.callbacks.onGraphicPointerDown && this.callbacks.onGraphicPointerDown(r2);
    } else
      this._activeGraphic = null;
  }
  _pointerUpHandler(i2) {
    if (this._activeGraphic) {
      const { x: t2, y: e2 } = i2, s2 = this.graphics.indexOf(this._activeGraphic), r2 = new n(this._activeGraphic, s2, t2, e2, i2);
      this.emit("graphic-pointer-up", r2), this.callbacks.onGraphicPointerUp && this.callbacks.onGraphicPointerUp(r2);
    }
  }
  _pointerMoveHandler(i2) {
    if (this._dragEvent)
      return;
    const t2 = this._findTargetGraphic(n$2(i2));
    if (t2) {
      const { x: e2, y: s2 } = i2;
      if (this._hoverGraphic) {
        if (this._hoverGraphic === t2)
          return;
        const r2 = this.graphics.indexOf(this._hoverGraphic), o3 = new c(this.graphics[r2], r2, e2, s2, i2);
        this._hoverGraphic = null, this.emit("graphic-pointer-out", o3), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(o3);
      }
      const r$12 = this.graphics.indexOf(t2), o2 = new r(t2, r$12, e2, s2, i2);
      return this._hoverGraphic = t2, this.emit("graphic-pointer-over", o2), void (this.callbacks.onGraphicPointerOver && this.callbacks.onGraphicPointerOver(o2));
    }
    if (this._hoverGraphic) {
      const { x: t3, y: e2 } = i2, s2 = this.graphics.indexOf(this._hoverGraphic), r2 = new c(this.graphics[s2], s2, t3, e2, i2);
      this._hoverGraphic = null, this.emit("graphic-pointer-out", r2), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(r2);
    }
  }
  _dragHandler(i2) {
    if ("start" !== i2.action && !this._dragEvent || !this._activeGraphic?.geometry)
      return;
    "start" === i2.action && this._removeIndicators(), i2.stopPropagation();
    const { action: t2, x: s$1, y: r2 } = i2, o2 = this.graphics.indexOf(this._activeGraphic), h$12 = this._dragEvent ? s$1 - this._dragEvent.x : 0, a3 = this._dragEvent ? r2 - this._dragEvent.y : 0, n2 = s$1 - i2.origin.x, l = r2 - i2.origin.y, p = "start" === t2 ? this._activeGraphic.geometry : this._initialDragGeometry, d2 = i$1(p, n2, l, this.view);
    if (this._activeGraphic.geometry = d2, this.enableMoveAllGraphics && this.graphics.forEach((i3) => {
      i3 !== this._activeGraphic && (i3.geometry = i$1(i3.geometry, h$12, a3, this.view));
    }), this._dragEvent = i2, "start" === t2) {
      this._initialDragGeometry = a$2(p);
      const t3 = new s(this._activeGraphic, this.graphics, o2, s$1, r2, h$12, a3, n2, l, i2);
      this.emit("graphic-move-start", t3), this.callbacks.onGraphicMoveStart && this.callbacks.onGraphicMoveStart(t3), t3.defaultPrevented && this._activeGraphic.set("geometry", p);
    } else if ("update" === t2) {
      const t3 = new h(this._activeGraphic, this.graphics, o2, s$1, r2, h$12, a3, n2, l, i2);
      this.emit("graphic-move", t3), this.callbacks.onGraphicMove && this.callbacks.onGraphicMove(t3), t3.defaultPrevented && (this._activeGraphic.geometry = p);
    } else {
      const t3 = new e(this._activeGraphic, this.graphics, o2, s$1, r2, h$12, a3, n2, l, i2);
      this._dragEvent = null, this._activeGraphic = null, this._setUpIndicators(), this.emit("graphic-move-stop", t3), this.callbacks.onGraphicMoveStop && this.callbacks.onGraphicMoveStop(t3), t3.defaultPrevented && (this.graphics[o2].set("geometry", this._initialDragGeometry), this._setUpIndicators()), this._initialDragGeometry = null;
    }
  }
  _keyDownHandler(i2) {
    "a" !== i2.key && "d" !== i2.key && "n" !== i2.key || "moving" !== this.state || i2.stopPropagation();
  }
  _findTargetGraphic(i2) {
    const t2 = this.view.toMap(i2), e2 = this.graphics;
    let s2 = null, r2 = Number.MAX_VALUE;
    this._syncLayerViews();
    const o2 = this._layerViews.flatMap((i3) => "graphicsViews" in i3 ? Array.from(i3.graphicsViews(), (i4) => i4.hitTest(t2)).flat() : i3.graphicsView.hitTest(t2)).filter((i3) => e2.includes(i3)).sort((i3, t3) => e2.indexOf(i3) - e2.indexOf(t3));
    return o2.length ? o2[0] : (this._manipulators.forEach((t3) => {
      const e3 = t3.intersectionDistance(i2);
      null != e3 && e3 < r2 && (r2 = e3, s2 = t3.graphic);
    }), s2);
  }
  _syncLayerViews() {
    this._layerViews = [];
    const i2 = /* @__PURE__ */ new Set();
    for (const t2 of this.graphics) {
      const e2 = r$1(this.view, t2.layer);
      e2 && i2.add(e2);
    }
    this._layerViews = [...i2];
  }
  _setUpManipulators() {
    const { graphics: i2, view: t2 } = this;
    this._manipulators.forEach((i3) => i3.destroy()), this._manipulators = i2.length ? i2.map((i3) => new S({ graphic: i3, view: t2 })) : [];
  }
  _setUpHighlights() {
    this.highlightsEnabled && this._highlightHelper.add(this.graphics);
  }
  _setUpIndicators() {
    if (this._removeIndicators(), this.indicatorsEnabled) {
      for (const i2 of this.graphics) {
        const t2 = i2.clone();
        t2.symbol = this._getSymbolForIndicator(i2), this._indicators.push(t2), this.addHandles(d$1(() => i2.symbol, () => this._setUpIndicators()), M);
      }
      this.layer.addMany(this._indicators);
    }
  }
  _removeIndicators() {
    this.removeHandles(M), this._indicators.length && (this.layer.removeMany(this._indicators), this._indicators.forEach((i2) => i2.destroy()), this._indicators = []);
  }
  _getSymbolForIndicator(i2) {
    const t2 = 12;
    if (null == i2.symbol)
      return null;
    switch (i2.symbol.type) {
      case "cim":
        return new y$1({ style: "circle", size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      case "picture-marker": {
        const { xoffset: t3, yoffset: e2, height: s2, width: r2 } = i2.symbol, o2 = s2 === r2 ? r2 : Math.max(s2, r2);
        return new y$1({ xoffset: t3, yoffset: e2, size: o2, style: "square", color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      case "simple-marker": {
        const { xoffset: t3, yoffset: e2, size: s2, style: r2 } = i2.symbol;
        return new y$1({ xoffset: t3, yoffset: e2, style: "circle" === r2 ? "circle" : "square", size: s2 + 2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      case "simple-fill":
        return new S$2({ color: [0, 0, 0, 0], outline: { style: "dash", color: [255, 127, 0, 1], width: 1 } });
      case "simple-line":
        return new d({ color: [255, 127, 0, 1], style: "dash", width: 1 });
      case "text": {
        const { xoffset: e2, yoffset: s2 } = i2.symbol;
        return new y$1({ xoffset: e2, yoffset: s2, size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
      }
      default:
        return null;
    }
  }
};
e$1([y()], E.prototype, "_activeGraphic", void 0), e$1([y({ readOnly: true })], E.prototype, "type", void 0), e$1([y()], E.prototype, "callbacks", void 0), e$1([y()], E.prototype, "enableMoveAllGraphics", void 0), e$1([y()], E.prototype, "graphics", void 0), e$1([y({ value: false })], E.prototype, "highlightsEnabled", null), e$1([y()], E.prototype, "indicatorsEnabled", void 0), e$1([y()], E.prototype, "layer", void 0), e$1([y({ readOnly: true })], E.prototype, "state", null), e$1([y()], E.prototype, "view", void 0), E = e$1([c$1("esri.views.draw.support.GraphicMover")], E);
const j = E;
const GraphicMover = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j
}, Symbol.toStringTag, { value: "Module" }));
export {
  GraphicMover as G,
  h$1 as h,
  j
};
