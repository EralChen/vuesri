import { bq as j, dy as m, kH as a, cy as x$1, dz as u, cL as y$1, bt as S, cJ as m$1, d1 as o$1, fx as p, aw as u$1, fj as r$1, fk as x, eg as p$1, fy as e, bJ as d$1, bD as u$3, bf as c$1, bo as e$1, bp as y, bR as A$1, bn as P$1, br as c } from "./chunk-KFNcxJaF.js";
import { h as h$1 } from "./chunk-KXkDk_IW.js";
import { i, s, a as a$1, m as m$2 } from "./chunk-s_1zK5-o.js";
import { l, U as U$1 } from "./chunk-fxymnekL.js";
import { d } from "./chunk-YbwgE-Jb.js";
import { i as i$1, p as p$2 } from "./chunk-fMj7ynpL.js";
import { u as u$2, m as m$3 } from "./chunk-GM3bx0Bh.js";
import { r as r$2 } from "./chunk-6h7v8yvx.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-cBUQnPnC.js";
import "./chunk-WQPcs7l9.js";
import "./chunk-sO9RJjHR.js";
import "./chunk-z9Tnkksn.js";
import "./chunk-WuibsuuF.js";
import "./chunk-Z0Yk6-wB.js";
import "./chunk-8M1zBeVZ.js";
import "./chunk-Jk46lvUq.js";
import "./chunk-Jwrw72Py.js";
function o(n, e2, t, s2) {
  const i2 = [];
  for (const o2 of n) {
    const n2 = o2.slice(0);
    i2.push(n2);
    const r2 = e2 * (o2[0] - s2.x) - t * (o2[1] - s2.y) + s2.x, a2 = t * (o2[0] - s2.x) + e2 * (o2[1] - s2.y) + s2.y;
    n2[0] = r2, n2[1] = a2;
  }
  return i2;
}
function r(r2, a$12, c2) {
  const { hasM: m$12, hasZ: x2, spatialReference: f } = r2, p2 = a$12 * Math.PI / 180, l2 = Math.cos(p2), h = Math.sin(p2);
  if ("xmin" in r2 && (c2 = c2 ?? r2.center, r2 = new j({ spatialReference: f, rings: [[[r2.xmin, r2.ymin], [r2.xmin, r2.ymax], [r2.xmax, r2.ymax], [r2.xmax, r2.ymin], [r2.xmin, r2.ymin]]] })), "paths" in r2) {
    c2 = c2 ?? r2.extent.center;
    const n = [];
    for (const e2 of r2.paths)
      n.push(o(e2, l2, h, c2));
    return new m({ hasM: m$12, hasZ: x2, spatialReference: f, paths: n });
  }
  if ("rings" in r2) {
    c2 = c2 ?? r2.extent.center;
    const t = [];
    for (const e2 of r2.rings) {
      const s2 = a(e2), i2 = o(e2, l2, h, c2);
      a(i2) !== s2 && i2.reverse(), t.push(i2);
    }
    return new j({ hasM: m$12, hasZ: x2, spatialReference: f, rings: t });
  }
  if ("x" in r2) {
    c2 = c2 ?? r2;
    const n = new x$1({ x: l2 * (r2.x - c2.x) - h * (r2.y - c2.y) + c2.x, y: h * (r2.x - c2.x) + l2 * (r2.y - c2.y) + c2.y, spatialReference: f });
    return null != r2.z && (n.z = r2.z), null != r2.m && (n.m = r2.m), n;
  }
  return "points" in r2 ? (c2 = c2 ?? r2.extent.center, new u({ hasM: m$12, hasZ: x2, points: o(r2.points, l2, h, c2), spatialReference: f })) : null;
}
class L {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move-start";
  }
}
class B {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move";
  }
}
class z {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.dx = i2, this.dy = s2, this.type = "move-stop";
  }
}
class Y {
  constructor(t, e2, i2) {
    this.graphics = t, this.mover = e2, this.angle = i2, this.type = "rotate-start";
  }
}
class N {
  constructor(t, e2, i2) {
    this.graphics = t, this.mover = e2, this.angle = i2, this.type = "rotate";
  }
}
class U {
  constructor(t, e2, i2) {
    this.graphics = t, this.mover = e2, this.angle = i2, this.type = "rotate-stop";
  }
}
class A {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale-start";
  }
}
class P {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale";
  }
}
class X {
  constructor(t, e2, i2, s2) {
    this.graphics = t, this.mover = e2, this.xScale = i2, this.yScale = s2, this.type = "scale-stop";
  }
}
const D = d.transformGraphics, F = { centerIndicator: new y$1({ style: "cross", size: D.center.size, color: D.center.color }), fill: { default: new S({ color: D.fill.color, outline: { color: D.fill.outlineColor, join: "round", width: 1 } }), active: new S({ color: D.fill.stagedColor, outline: { color: D.fill.outlineColor, join: "round", style: "dash", width: 1 } }) }, handles: { default: new y$1({ style: "square", size: D.vertex.size, color: D.vertex.color, outline: { color: D.vertex.outlineColor, width: 1 } }), hover: new y$1({ style: "square", size: D.vertex.hoverSize, color: D.vertex.hoverColor, outline: { color: D.vertex.hoverOutlineColor, width: 1 } }) }, rotator: { default: new y$1({ style: "circle", size: D.vertex.size, color: D.vertex.color, outline: { color: D.vertex.outlineColor, width: 1 } }), hover: new y$1({ style: "circle", size: D.vertex.hoverSize, color: D.vertex.hoverColor, outline: { color: D.vertex.hoverOutlineColor, width: 1 } }) }, rotatorLine: new m$1({ color: D.line.color, width: 1 }) };
let V = class extends o$1.EventedAccessor {
  constructor(t) {
    super(t), this._activeHandleGraphic = null, this._graphicAttributes = { esriSketchTool: "box" }, this._mover = null, this._centerGraphic = null, this._backgroundGraphic = null, this._vertexGraphics = [], this._rotateHandleGraphic = null, this._rotateGraphicOffset = 20, this._angleOfRotation = 0, this._rotateLineGraphic = null, this._startInfo = null, this._tooltip = null, this._totalDx = 0, this._totalDy = 0, this._xScale = 1, this._yScale = 1, this.type = "box", this.callbacks = { onMoveStart() {
    }, onMove() {
    }, onMoveStop() {
    }, onScaleStart() {
    }, onScale() {
    }, onScaleStop() {
    }, onRotateStart() {
    }, onRotate() {
    }, onRotateStop() {
    }, onGraphicClick() {
    } }, this.enableMovement = true, this.enableRotation = true, this.enableScaling = true, this.graphics = [], this.highlightsEnabled = true, this.layer = null, this.preserveAspectRatio = false, this.showCenterGraphic = true, this.symbols = F, this.tooltipOptions = new p(), this.view = null, this._getBounds = (() => {
      const t2 = u$1();
      return (e2, i2) => {
        e2[0] = Number.POSITIVE_INFINITY, e2[1] = Number.POSITIVE_INFINITY, e2[2] = Number.NEGATIVE_INFINITY, e2[3] = Number.NEGATIVE_INFINITY;
        for (const s2 of i2) {
          if (!s2)
            continue;
          let i3, o2, r2, a2;
          if ("point" === s2.type)
            i3 = r2 = s2.x, o2 = a2 = s2.y;
          else if ("multipoint" === s2.type) {
            const e3 = r$1(s2);
            [i3, o2, r2, a2] = x(t2, [e3]);
          } else if ("extent" === s2.type)
            [i3, o2, r2, a2] = [s2.xmin, s2.ymin, s2.xmax, s2.ymax];
          else {
            const e3 = r$1(s2);
            [i3, o2, r2, a2] = x(t2, e3);
          }
          e2[0] = Math.min(i3, e2[0]), e2[1] = Math.min(o2, e2[1]), e2[2] = Math.max(r2, e2[2]), e2[3] = Math.max(a2, e2[3]);
        }
        return e2;
      };
    })();
  }
  initialize() {
    const t = this.view;
    this._highlightHelper = new l({ view: t }), this._tooltip = new u$2({ view: t }), this._setup(), this.addHandles([p$1(() => t?.ready, () => {
      const { layer: t2, view: e$12 } = this;
      e(e$12, t2);
    }, { once: true, initial: true }), d$1(() => this.preserveAspectRatio, () => {
      this._activeHandleGraphic && (this._scaleGraphic(this._activeHandleGraphic), this._updateGraphics(), this._updateTooltip(this._activeHandleGraphic));
    }), d$1(() => t?.scale, () => {
      this._updateRotateGraphic(), this._updateRotateLineGraphic();
    }), d$1(() => this.graphics, () => this.refresh()), d$1(() => this.layer, (t2, e2) => {
      e2 && this._resetGraphics(e2), this.refresh();
    }), d$1(() => this.highlightsEnabled, () => {
      this._highlightHelper?.removeAll(), this._setUpHighlights();
    }), d$1(() => this.tooltipOptions.enabled, (t2) => {
      this._tooltip = t2 ? new u$2({ view: this.view }) : u$3(this._tooltip);
    }, A$1), d$1(() => this.view.effectiveTheme.accentColor, () => this._updateSymbolsForTheme(), P$1), this.on("move-start", (t2) => this.callbacks?.onMoveStart?.(t2)), this.on("move", (t2) => this.callbacks?.onMove?.(t2)), this.on("move-stop", (t2) => this.callbacks?.onMoveStop?.(t2)), this.on("rotate-start", (t2) => this.callbacks?.onRotateStart?.(t2)), this.on("rotate", (t2) => this.callbacks?.onRotate?.(t2)), this.on("rotate-stop", (t2) => this.callbacks?.onRotateStop?.(t2)), this.on("scale-start", (t2) => this.callbacks?.onScaleStart?.(t2)), this.on("scale", (t2) => this.callbacks?.onScale?.(t2)), this.on("scale-stop", (t2) => this.callbacks?.onScaleStop?.(t2))]);
  }
  destroy() {
    this._reset(), this._tooltip = u$3(this._tooltip);
  }
  get state() {
    const t = this.view?.ready ?? false, e2 = this.graphics.length && this.layer;
    return t && e2 ? "active" : t ? "ready" : "disabled";
  }
  isUIGraphic(t) {
    return this._vertexGraphics.includes(t) || t === this._backgroundGraphic || t === this._centerGraphic || t === this._rotateHandleGraphic || t === this._rotateLineGraphic;
  }
  move(t, e2) {
    if (this._mover && this.graphics.length) {
      for (const i$12 of this.graphics) {
        const s2 = i$12.geometry, o2 = i(s2, t, e2, this.view);
        i$12.geometry = o2;
      }
      this.refresh(), this.emit("move-stop", new z(this.graphics, null, t, e2));
    }
  }
  scale(t, e2) {
    if (this._mover && this.graphics.length) {
      for (const i2 of this.graphics) {
        const s$1 = i2.geometry, o2 = s(s$1, t, e2);
        i2.geometry = o2;
      }
      this.refresh(), this.emit("scale-stop", new X(this.graphics, null, t, e2));
    }
  }
  rotate(t, e2) {
    if (this._mover && this.graphics.length) {
      if (!e2) {
        const t2 = this._vertexGraphics[1].geometry.x, i2 = this._vertexGraphics[3].geometry.y;
        e2 = new x$1(t2, i2, this.view.spatialReference);
      }
      for (const i2 of this.graphics) {
        const s2 = i2.geometry, o2 = r(s2, t, e2);
        i2.geometry = o2;
      }
      this.refresh(), this.emit("rotate-stop", new U(this.graphics, null, t));
    }
  }
  refresh() {
    this._reset(), this._setup();
  }
  reset() {
    this.graphics = [];
  }
  _setup() {
    "active" === this.state && (this._setUpHighlights(), this._setupGraphics(), this._setupMover(), this._updateGraphics());
  }
  _reset() {
    this._highlightHelper?.removeAll(), this._resetGraphicStateVars(), this._resetGraphics(), this._updateTooltip(), this._mover && this._mover.destroy(), this._mover = null, this.view.cursor = "default";
  }
  _resetGraphicStateVars() {
    this._startInfo = null, this._activeHandleGraphic = null, this._totalDx = 0, this._totalDy = 0, this._xScale = 1, this._yScale = 1, this._angleOfRotation = 0;
  }
  _resetGraphics(t) {
    (t = t || this.layer) && (t.removeMany(this._vertexGraphics), t.remove(this._backgroundGraphic), t.remove(this._centerGraphic), t.remove(this._rotateHandleGraphic), t.remove(this._rotateLineGraphic)), this._vertexGraphics = [], this._backgroundGraphic = null, this._centerGraphic = null, this._rotateHandleGraphic = null, this._rotateLineGraphic = null;
  }
  _setupMover() {
    let t = [];
    this.enableScaling && (t = t.concat(this._vertexGraphics)), this.enableMovement && (t = t.concat(this.graphics, this._backgroundGraphic)), this.enableRotation && t.push(this._rotateHandleGraphic), this.showCenterGraphic && t.push(this._centerGraphic), this._mover = new U$1({ enableMoveAllGraphics: false, highlightsEnabled: false, indicatorsEnabled: false, view: this.view, graphics: t, callbacks: { onGraphicClick: (t2) => this._onGraphicClickCallback(t2), onGraphicMoveStart: (t2) => this._onGraphicMoveStartCallback(t2), onGraphicMove: (t2) => this._onGraphicMoveCallback(t2), onGraphicMoveStop: (t2) => this._onGraphicMoveStopCallback(t2), onGraphicPointerOver: (t2) => this._onGraphicPointerOverCallback(t2), onGraphicPointerOut: (t2) => this._onGraphicPointerOutCallback(t2) } });
  }
  _getStartInfo(t) {
    const [e2, i2, s2, o2] = this._getBoxBounds(u$1()), r2 = Math.abs(s2 - e2), a2 = Math.abs(o2 - i2), h = (s2 + e2) / 2, c2 = (o2 + i2) / 2, { x: l2, y: n } = t.geometry;
    return { width: r2, height: a2, centerX: h, centerY: c2, startX: l2, startY: n, graphicInfos: this._getGraphicInfos(), box: this._backgroundGraphic.geometry, rotate: this._rotateHandleGraphic.geometry };
  }
  _getGraphicInfos() {
    return this.graphics.map((t) => this._getGraphicInfo(t));
  }
  _getGraphicInfo(t) {
    const e2 = t.geometry, [i2, s2, o2, r2] = this._getBounds(u$1(), [e2]);
    return { width: Math.abs(o2 - i2), height: Math.abs(r2 - s2), centerX: (o2 + i2) / 2, centerY: (r2 + s2) / 2, geometry: e2 };
  }
  _onGraphicClickCallback(t) {
    t.viewEvent.stopPropagation(), this.emit("graphic-click", t), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(t);
  }
  _onGraphicMoveStartCallback(t) {
    const { _angleOfRotation: e2, _xScale: i2, _yScale: s2, _backgroundGraphic: o2, _vertexGraphics: r2, _rotateHandleGraphic: a2, symbols: h } = this, c2 = t.graphic;
    this._resetGraphicStateVars(), this._hideGraphicsBeforeUpdate(), o2.symbol = h.fill.active, this._startInfo = this._getStartInfo(c2), this._updateTooltip(c2, t.viewEvent), c2 === a2 ? (this.view.cursor = "grabbing", this.emit("rotate-start", new Y(this.graphics, c2, e2))) : r2.includes(c2) ? (this._activeHandleGraphic = c2, this.emit("scale-start", new A(this.graphics, c2, i2, s2))) : this.emit("move-start", new L(this.graphics, c2, t.dx, t.dy));
  }
  _onGraphicMoveCallback(t) {
    const e2 = t.graphic;
    if (this._startInfo)
      if (this._vertexGraphics.includes(e2))
        this._scaleGraphic(e2), this._updateTooltip(e2, t.viewEvent), this.emit("scale", new P(this.graphics, e2, this._xScale, this._yScale));
      else if (e2 === this._rotateHandleGraphic)
        this._rotateGraphic(e2), this._updateTooltip(e2, t.viewEvent), this.emit("rotate", new N(this.graphics, e2, this._angleOfRotation));
      else {
        const { dx: i2, dy: s2 } = t;
        this._totalDx += i2, this._totalDy += s2, this._moveGraphic(e2, i2, s2), this._updateTooltip(e2, t.viewEvent), this.emit("move", new B(this.graphics, e2, i2, s2));
      }
  }
  _onGraphicMoveStopCallback(t) {
    const e2 = t.graphic;
    if (!this._startInfo)
      return void this.refresh();
    const { _angleOfRotation: i2, _totalDx: s2, _totalDy: o2, _xScale: r2, _yScale: a2, _vertexGraphics: h, _rotateHandleGraphic: c2 } = this;
    this.refresh(), e2 === c2 ? (this.view.cursor = "pointer", this.emit("rotate-stop", new U(this.graphics, e2, i2))) : h.includes(e2) ? this.emit("scale-stop", new X(this.graphics, e2, r2, a2)) : this.emit("move-stop", new z(this.graphics, e2, s2, o2));
  }
  _onGraphicPointerOverCallback(t) {
    const { _backgroundGraphic: e2, _vertexGraphics: i2, graphics: s2, _rotateHandleGraphic: o2, symbols: r2, view: a2 } = this, h = t.graphic;
    if (this._hoveredGraphic = h, h === o2)
      return o2.symbol = r2.rotator.hover, a2.cursor = "pointer", void this._updateTooltip(h);
    if (s2.includes(h) || h === e2)
      return void (a2.cursor = "move");
    if (!i2.includes(h))
      return void (a2.cursor = "pointer");
    this._updateTooltip(h), t.graphic.symbol = r2.handles.hover;
    const c2 = a2.rotation;
    let l2, n = t.index;
    switch (n < 8 && (c2 >= 0 && c2 < 45 ? n %= 8 : n = c2 >= 45 && c2 < 90 ? (n + 1) % 8 : c2 >= 90 && c2 < 135 ? (n + 2) % 8 : c2 >= 135 && c2 < 180 ? (n + 3) % 8 : c2 >= 180 && c2 < 225 ? (n + 4) % 8 : c2 >= 225 && c2 < 270 ? (n + 5) % 8 : c2 >= 270 && c2 < 315 ? (n + 6) % 8 : (n + 7) % 8), n) {
      case 0:
      case 4:
        l2 = "nwse-resize";
        break;
      case 1:
      case 5:
        l2 = "ns-resize";
        break;
      case 2:
      case 6:
        l2 = "nesw-resize";
        break;
      case 3:
      case 7:
        l2 = "ew-resize";
        break;
      default:
        l2 = "pointer";
    }
    a2.cursor = l2;
  }
  _onGraphicPointerOutCallback(t) {
    const { _vertexGraphics: e2, _rotateHandleGraphic: i2, symbols: s2, view: o2 } = this;
    this._hoveredGraphic = null, t.graphic === i2 ? i2.symbol = s2.rotator.default : e2.includes(t.graphic) && (t.graphic.symbol = s2.handles.default), o2.cursor = "default", this._updateTooltip();
  }
  _scaleGraphic(t) {
    const { _startInfo: e2, _vertexGraphics: i$12, preserveAspectRatio: s$1, view: o2 } = this, { centerX: r2, centerY: a2, startX: h, startY: c2 } = e2, { resolution: l2, transform: n } = o2.state, p2 = i$12.indexOf(t);
    1 !== p2 && 5 !== p2 || this._updateX(t, r2), 3 !== p2 && 7 !== p2 || this._updateY(t, a2);
    const { x: _, y: d2 } = t.geometry, u2 = n[0] * _ + n[2] * d2 + n[4], m2 = n[1] * _ + n[3] * d2 + n[5], g = e2.graphicInfos?.map((t2) => t2.geometry) ?? [];
    if (s$1) {
      const t2 = n[0] * r2 + n[2] * a2 + n[4], e3 = n[1] * r2 + n[3] * a2 + n[5], i2 = n[0] * h + n[2] * c2 + n[4], s$12 = n[1] * h + n[3] * c2 + n[5];
      this._xScale = this._yScale = a$1(t2, e3, i2, s$12, u2, m2);
      for (const o3 of g) {
        const t3 = g.indexOf(o3);
        this.graphics[t3].geometry = s(o3, this._xScale, this._yScale, [r2, a2]);
      }
      this._updateBackgroundGraphic();
    } else {
      const { width: t2, height: i$13 } = e2;
      let s$12 = _ - h, n2 = c2 - d2;
      if (1 === p2 || 5 === p2 ? s$12 = 0 : 3 !== p2 && 7 !== p2 || (n2 = 0), 0 === s$12 && 0 === n2)
        return;
      const u3 = t2 + (h > r2 ? s$12 : -1 * s$12), m3 = i$13 + (c2 < a2 ? n2 : -1 * n2), v = r2 + s$12 / 2, G = a2 + n2 / 2;
      this._xScale = u3 / t2 || 1, this._yScale = m3 / i$13 || 1, 1 === p2 || 5 === p2 ? this._xScale = 1 : 3 !== p2 && 7 !== p2 || (this._yScale = 1);
      const b = (v - r2) / l2, w = (G - a2) / l2, x2 = s(e2.box, this._xScale, this._yScale);
      this._backgroundGraphic.geometry = i(x2, b, w, o2, true);
      const { centerX: S2, centerY: k } = this._getGraphicInfo(this._backgroundGraphic), R = (S2 - r2) / l2, I = -1 * (k - a2) / l2;
      for (const e3 of g) {
        const t3 = g.indexOf(e3), i$14 = s(e3, this._xScale, this._yScale, [r2, a2]);
        this.graphics[t3].geometry = i(i$14, R, I, o2, true);
      }
      this._centerGraphic.geometry = new x$1(S2, k, o2.spatialReference);
    }
  }
  _rotateGraphic(t) {
    const { centerX: e2, centerY: i2, startX: s2, startY: o2, box: r$12, rotate: a2 } = this._startInfo, h = this.view.spatialReference, c2 = new x$1(s2, o2, h), l2 = new x$1(e2, i2, h), n = t.geometry;
    this._angleOfRotation = m$2(c2, n, l2);
    const p2 = this._startInfo.graphicInfos?.map((t2) => t2.geometry) ?? [];
    for (const _ of p2) {
      const t2 = p2.indexOf(_), e3 = r(_, this._angleOfRotation, l2);
      this.graphics[t2].geometry = e3;
    }
    this._backgroundGraphic.geometry = r(r$12, this._angleOfRotation, l2), this._rotateHandleGraphic.geometry = r(a2, this._angleOfRotation, l2);
  }
  _moveGraphic(t, e2, i$12) {
    if (this.graphics.includes(t)) {
      const s2 = this._backgroundGraphic.geometry;
      this._backgroundGraphic.geometry = i(s2, e2, i$12, this.view);
      for (const o2 of this.graphics)
        o2 !== t && (o2.geometry = i(o2.geometry, e2, i$12, this.view));
    } else if (t === this._centerGraphic) {
      const t2 = this._backgroundGraphic.geometry;
      this._backgroundGraphic.geometry = i(t2, e2, i$12, this.view);
    }
    if (t === this._backgroundGraphic || t === this._centerGraphic)
      for (const s2 of this.graphics)
        s2.geometry = i(s2.geometry, e2, i$12, this.view);
  }
  _setUpHighlights() {
    this.highlightsEnabled && this.graphics.length && this._highlightHelper?.add(this.graphics);
  }
  _setupGraphics() {
    const { _graphicAttributes: t, symbols: i2 } = this;
    this._centerGraphic = new c$1(null, i2.centerIndicator, t), this.showCenterGraphic && this.layer.add(this._centerGraphic), this._backgroundGraphic = new c$1(null, i2.fill.default, t), this.layer.add(this._backgroundGraphic), this._rotateLineGraphic = new c$1(null, i2.rotatorLine, t), this._rotateHandleGraphic = new c$1(null, i2.rotator.default, t), this.enableRotation && !this._hasExtentGraphic() && this.layer.addMany([this._rotateLineGraphic, this._rotateHandleGraphic]);
    for (let s2 = 0; s2 < 8; s2++)
      this._vertexGraphics.push(new c$1(null, i2.handles.default, t));
    this.enableScaling && this.layer.addMany(this._vertexGraphics);
  }
  _updateSymbolsForTheme() {
    const t = this.view.effectiveTheme.accentColor;
    this.symbols = { ...this.symbols, fill: { active: this.symbols.fill.active?.clone().set("outline.color", t), default: this.symbols.fill.default?.clone().set("outline.color", t) }, handles: { ...this.symbols.handles, default: this.symbols.handles.default.clone().set("outline.color", t) }, rotator: { ...this.symbols.rotator, default: this.symbols.rotator.default.clone().set("outline.color", t) }, rotatorLine: this.symbols.rotatorLine.clone().set("color", t) };
    for (const e2 of this._vertexGraphics)
      e2.symbol = e2 === this._hoveredGraphic ? this.symbols.handles.hover : this.symbols.handles.default;
    this._backgroundGraphic.symbol = this.symbols.fill.default, this._rotateHandleGraphic.symbol = this._rotateHandleGraphic === this._hoveredGraphic ? this.symbols.rotator.hover : this.symbols.rotator.default, this._rotateLineGraphic.symbol = this.symbols.rotatorLine;
  }
  _updateGraphics() {
    this._updateBackgroundGraphic(), this._updateHandleGraphics(), this._updateCenterGraphic(), this._updateRotateGraphic(), this._updateRotateLineGraphic();
  }
  _hideGraphicsBeforeUpdate() {
    this._centerGraphic.visible = false, this._rotateHandleGraphic.visible = false, this._rotateLineGraphic.visible = false, this._vertexGraphics.forEach((t) => t.visible = false);
  }
  _updateHandleGraphics() {
    const t = this._getCoordinates(true);
    this._vertexGraphics.forEach((e2, i2) => {
      const [s2, o2] = t[i2];
      this._updateXY(e2, s2, o2);
    });
  }
  _updateBackgroundGraphic() {
    const t = this._getCoordinates();
    this._backgroundGraphic.geometry = new j({ rings: t, spatialReference: this.view.spatialReference });
  }
  _updateCenterGraphic() {
    const [t, e2, i2, s2] = this._getBoxBounds(u$1()), o2 = (i2 + t) / 2, r2 = (s2 + e2) / 2;
    this._centerGraphic.geometry = new x$1(o2, r2, this.view.spatialReference);
  }
  _updateRotateGraphic() {
    if (!this._vertexGraphics.length)
      return;
    const { x: t, y: e2 } = this._vertexGraphics[1].geometry, i2 = e2 + this.view.state.resolution * this._rotateGraphicOffset;
    this._rotateHandleGraphic.geometry = new x$1(t, i2, this.view.spatialReference);
  }
  _updateRotateLineGraphic() {
    if (!this._vertexGraphics.length || !this._rotateHandleGraphic?.geometry)
      return;
    const t = this._vertexGraphics[1].geometry, e2 = this._rotateHandleGraphic.geometry;
    this._rotateLineGraphic.geometry = new m({ paths: [[t.x, t.y], [e2.x, e2.y]], spatialReference: this.view.spatialReference });
  }
  _updateXY(t, e2, i2) {
    t.geometry = new x$1(e2, i2, this.view.spatialReference);
  }
  _updateX(t, e2) {
    const i2 = t.geometry.y;
    t.geometry = new x$1(e2, i2, this.view.spatialReference);
  }
  _updateY(t, e2) {
    const i2 = t.geometry.x;
    t.geometry = new x$1(i2, e2, this.view.spatialReference);
  }
  _hasExtentGraphic() {
    return this.graphics.some((t) => null != t?.geometry && "extent" === t.geometry.type);
  }
  _getBoxBounds(t) {
    const e2 = this.graphics.map((t2) => t2.geometry);
    return this._getBounds(t, e2);
  }
  _getCoordinates(t) {
    const [e2, i2, s2, o2] = this._getBoxBounds(u$1());
    if (t) {
      const t2 = (e2 + s2) / 2, r2 = (o2 + i2) / 2;
      return [[e2, o2], [t2, o2], [s2, o2], [s2, r2], [s2, i2], [t2, i2], [e2, i2], [e2, r2]];
    }
    return [[e2, o2], [s2, o2], [s2, i2], [e2, i2]];
  }
  _updateTooltip(t, e2) {
    if (null == this._tooltip)
      return;
    if (!t)
      return void this._tooltip.clear();
    const { _backgroundGraphic: i2, graphics: s2, _vertexGraphics: o2, _rotateHandleGraphic: r2 } = this;
    t === r2 ? this._updateRotateTooltip() : o2.includes(t) ? this._updateScaleTooltip() : (s2.includes(t) || t === i2) && this._updateMoveTooltip(e2);
  }
  _updateRotateTooltip() {
    null != this._tooltip && (this._tooltip.info = new i$1({ tooltipOptions: this.tooltipOptions, angle: -this._angleOfRotation }));
  }
  _updateScaleTooltip() {
    const { _tooltip: t, _xScale: e2, _yScale: i2, tooltipOptions: s2, view: o2 } = this;
    if (null == t)
      return;
    const r2 = o2.spatialReference, a2 = this._getCoordinates(), h = new x$1(a2[0][0], a2[0][1], r2), c2 = new x$1(a2[1][0], a2[1][1], r2), l2 = new x$1(a2[2][0], a2[2][1], r2), n = m$3(h, c2), p2 = m$3(c2, l2);
    if (null == n || null == p2)
      return;
    const _ = Math.abs(e2), d2 = Math.abs(i2);
    t.info = new p$2({ tooltipOptions: s2, xScale: _, yScale: d2, xSize: n, ySize: p2 });
  }
  _updateMoveTooltip(t) {
    const { _tooltip: e2, tooltipOptions: i2, view: s2 } = this;
    if (null == e2)
      return;
    const r2 = new r$2({ tooltipOptions: i2 });
    if (t) {
      const { x: e3, y: i3 } = t.origin, a2 = s2.toMap(t), h = s2.toMap({ x: e3, y: i3 }), c2 = m$3(h, a2);
      r2.distance = null != c2 ? c2 : h$1;
    }
    e2.info = r2;
  }
};
e$1([y()], V.prototype, "_tooltip", void 0), e$1([y({ readOnly: true })], V.prototype, "type", void 0), e$1([y()], V.prototype, "callbacks", void 0), e$1([y()], V.prototype, "enableMovement", void 0), e$1([y()], V.prototype, "enableRotation", void 0), e$1([y()], V.prototype, "enableScaling", void 0), e$1([y()], V.prototype, "graphics", void 0), e$1([y()], V.prototype, "highlightsEnabled", void 0), e$1([y()], V.prototype, "layer", void 0), e$1([y()], V.prototype, "preserveAspectRatio", void 0), e$1([y()], V.prototype, "showCenterGraphic", void 0), e$1([y({ readOnly: true })], V.prototype, "state", null), e$1([y()], V.prototype, "symbols", void 0), e$1([y({ type: p })], V.prototype, "tooltipOptions", void 0), e$1([y({ constructOnly: true })], V.prototype, "view", void 0), V = e$1([c("esri.views.draw.support.Box")], V);
const q = V;
export {
  q as default
};
