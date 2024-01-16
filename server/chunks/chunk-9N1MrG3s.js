import { cL as y$1, d1 as o, bh as V, fx as p, eg as p$1, fy as e, fz as _, fA as U, bJ as d$1, bD as u$1, fB as m, dy as m$1, fC as l$1, df as h, em as e$2, fj as r, bf as c$1, cy as x$1, fD as c, el as d$2, fE as e$3, fF as c$2, bb as s$1, aM as s$2, bo as e$4, bp as y, bR as A, bn as P$1, br as c$3 } from "./chunk-KFNcxJaF.js";
import { h as h$1 } from "./chunk-KXkDk_IW.js";
import { S } from "./chunk--zBqtsY2.js";
import { i } from "./chunk-s_1zK5-o.js";
import { l, U as U$1 } from "./chunk-fxymnekL.js";
import { d } from "./chunk-YbwgE-Jb.js";
import { V as V$1 } from "./chunk-ntY6_aOQ.js";
import { e as e$1 } from "./chunk-tNL5i2kK.js";
import { m as m$2, g, u as u$2 } from "./chunk-GM3bx0Bh.js";
import { r as r$1, p as p$2 } from "./chunk-6h7v8yvx.js";
import { u } from "./chunk-7pOsGJCN.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-cBUQnPnC.js";
import "./chunk-WQPcs7l9.js";
import "./chunk-x5arQHJi.js";
import "./chunk-sO9RJjHR.js";
import "./chunk-z9Tnkksn.js";
import "./chunk-WuibsuuF.js";
import "./chunk-Z0Yk6-wB.js";
import "./chunk-8M1zBeVZ.js";
import "./chunk-Jk46lvUq.js";
import "./chunk-Jwrw72Py.js";
import "./chunk-J84yWr0C.js";
class q {
  constructor(e2, t, i2) {
    this.graphic = e2, this.mover = t, this.selected = i2, this.type = "reshape-start";
  }
}
class K {
  constructor(e2, t, i2) {
    this.graphic = e2, this.mover = t, this.selected = i2, this.type = "reshape";
  }
}
class N {
  constructor(e2, t, i2) {
    this.graphic = e2, this.mover = t, this.selected = i2, this.type = "reshape-stop";
  }
}
class B {
  constructor(e2, t, i2) {
    this.mover = e2, this.dx = t, this.dy = i2, this.type = "move-start";
  }
}
class J {
  constructor(e2, t, i2) {
    this.mover = e2, this.dx = t, this.dy = i2, this.type = "move";
  }
}
class Q {
  constructor(e2, t, i2) {
    this.mover = e2, this.dx = t, this.dy = i2, this.type = "move-stop";
  }
}
class W {
  constructor(e2) {
    this.added = e2, this.type = "vertex-select";
  }
}
class X {
  constructor(e2) {
    this.removed = e2, this.type = "vertex-deselect";
  }
}
class Y {
  constructor(e2, t, i2, s) {
    this.added = e2, this.graphic = t, this.oldGraphic = i2, this.vertices = s, this.type = "vertex-add";
  }
}
class Z {
  constructor(e2, t, i2, s) {
    this.removed = e2, this.graphic = t, this.oldGraphic = i2, this.vertices = s, this.type = "vertex-remove";
  }
}
const $ = d.reshapeGraphics, ee = { vertices: { default: new y$1({ style: "circle", size: $.vertex.size, color: $.vertex.color, outline: { color: $.vertex.outlineColor, width: 1 } }), hover: new y$1({ style: "circle", size: $.vertex.hoverSize, color: $.vertex.hoverColor, outline: { color: $.vertex.hoverOutlineColor, width: 1 } }), selected: new y$1({ style: "circle", size: $.selected.size, color: $.selected.color, outline: { color: $.selected.outlineColor, width: 1 } }) }, midpoints: { default: new y$1({ style: "circle", size: $.midpoint.size, color: $.midpoint.color, outline: { color: $.midpoint.outlineColor, width: 1 } }), hover: new y$1({ style: "circle", size: $.midpoint.size, color: $.midpoint.color, outline: { color: $.midpoint.outlineColor, width: 1 } }) } };
let te = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this._activeOperationInfo = null, this._editGeometryOperations = null, this._graphicAttributes = { esriSketchTool: "box" }, this._mover = null, this._snappingContext = null, this._hoverGraphic = null, this._snappingTask = null, this._stagedVertex = null, this._tooltip = null, this._translateGraphicTooltipInfo = null, this._translateVertexTooltipInfo = null, this.callbacks = { onReshapeStart() {
    }, onReshape() {
    }, onReshapeStop() {
    }, onMoveStart() {
    }, onMove() {
    }, onMoveStop() {
    }, onGraphicClick() {
    } }, this.enableMidpoints = true, this.enableMovement = true, this.enableVertices = true, this.graphic = null, this.layer = null, this.midpointGraphics = new V(), this.midpointSymbol = new y$1({ style: "circle", size: 6, color: [200, 200, 200], outline: { color: [100, 100, 100], width: 1 } }), this.selectedVertices = [], this.snappingManager = null, this.symbols = ee, this.tooltipOptions = new p(), this.type = "reshape", this.vertexGraphics = new V(), this.view = null;
  }
  initialize() {
    const e$12 = this.view;
    this._highlightHelper = new l({ view: e$12 }), this._setup(), this.addHandles([p$1(() => e$12?.ready, () => {
      const { layer: e$13, view: t } = this;
      e(t, e$13), this.addHandles(t.on("key-down", (e2) => this._keyDownHandler(e2), _.TOOL));
    }, { once: true, initial: true }), U(() => this.graphic, () => this.refresh()), U(() => this.layer, (e2, t) => {
      t && (this._clearSelection(), this._resetGraphics(t)), this.refresh();
    }), U(() => this.enableMidpoints, () => this.refresh()), d$1(() => this.tooltipOptions.enabled, (e2) => {
      this._tooltip = e2 ? new u$2({ view: this.view }) : u$1(this._tooltip);
    }, A), d$1(() => this.view.effectiveTheme.accentColor, () => this._updateSymbolsForTheme(), P$1)]);
  }
  destroy() {
    this._reset(), this._mover?.destroy(), this._mover = null, this._tooltip = u$1(this._tooltip);
  }
  set highlightsEnabled(e2) {
    this._highlightHelper?.removeAll(), this._set("highlightsEnabled", e2), this._setUpHighlights();
  }
  get state() {
    const e2 = this.view.ready, t = !(!this.graphic || !this.layer);
    return e2 && t ? "active" : e2 ? "ready" : "disabled";
  }
  isUIGraphic(e2) {
    const t = [];
    return this.graphic && t.push(this.graphic), t.concat(this.vertexGraphics.items, this.midpointGraphics.items), t.length > 0 && t.includes(e2);
  }
  refresh() {
    this._reset(), this._setup();
  }
  reset() {
    this.graphic = null;
  }
  clearSelection() {
    this._clearSelection();
  }
  removeSelectedVertices() {
    this.selectedVertices.length && this._removeVertices(this.selectedVertices);
  }
  _setup() {
    const { graphic: e2, layer: t } = this;
    if (!t || null == e2?.geometry)
      return;
    const i2 = e2.geometry;
    "mesh" !== i2.type && "extent" !== i2.type ? ("polygon" === i2.type && m(i2), this._setUpHighlights(), this._setupGraphics(), this._setupMover()) : this._logGeometryTypeError();
  }
  _setUpHighlights() {
    this.highlightsEnabled && this.graphic && this._highlightHelper?.add(this.graphic);
  }
  _setUpGeometryHelper() {
    const e2 = this.graphic.geometry;
    if (null == e2 || "mesh" === e2.type || "extent" === e2.type)
      return void this._logGeometryTypeError();
    const t = "multipoint" === e2.type ? new m$1({ paths: e2.points, spatialReference: e2.spatialReference }) : e2;
    this._editGeometryOperations = V$1.fromGeometry(t, l$1.Local);
  }
  _saveSnappingContextForHandle(e2, t) {
    this._snappingGraphicsLayer = new h({ listMode: "hide", internal: true, title: "Reshape snapping layer" }), this.view.map.layers.add(this._snappingGraphicsLayer), this._snappingContext = new e$1({ editGeometryOperations: this._editGeometryOperations, elevationInfo: { mode: "on-the-ground", offset: 0 }, pointer: t.viewEvent?.pointerType || "mouse", excludeFeature: this.graphic, feature: this.graphic, visualizer: new S(this._snappingGraphicsLayer), vertexHandle: this._getVertexFromEditGeometry(e2) });
  }
  _reset() {
    this._clearSelection(), this._highlightHelper?.removeAll(), this._updateTooltip(), this._resetGraphics(), this._resetSnappingStateVars(), this._activeOperationInfo = null, this._mover && this._mover.destroy(), this._mover = null, this.view.cursor = "default";
  }
  _resetSnappingStateVars() {
    null != this.snappingManager && this.snappingManager.doneSnapping(), null != this._snappingGraphicsLayer && (this.view?.map && this.view.map.layers.remove(this._snappingGraphicsLayer), this._snappingGraphicsLayer.destroy()), this._editGeometryOperations = u$1(this._editGeometryOperations), this._snappingTask = e$2(this._snappingTask), this._snappingTask = null, this._snappingContext = null, this._stagedVertex = null;
  }
  _resetGraphics(e2) {
    this._removeMidpointGraphics(e2), this._removeVertexGraphics(e2), this._set("selectedVertices", []);
  }
  _removeMidpointGraphics(e2) {
    const t = e2 || this.layer;
    t && t.removeMany(this.midpointGraphics.items), this.midpointGraphics.items.forEach((e3) => e3.destroy()), this.midpointGraphics.removeAll();
  }
  _removeVertexGraphics(e2) {
    const t = e2 || this.layer;
    t && t.removeMany(this.vertexGraphics.items), this.vertexGraphics.items.forEach((e3) => e3.destroy()), this.vertexGraphics.removeAll();
  }
  _getCoordinatesForUI(e2) {
    const t = r(e2.clone());
    if ("polygon" === e2.type)
      for (const i2 of t) {
        const e3 = i2[i2.length - 1];
        i2[0][0] === e3[0] && i2[0][1] === e3[1] && i2.length > 2 && i2.pop();
      }
    return t;
  }
  _setupGraphics() {
    const e2 = this.graphic.geometry;
    if (null != e2 && ("polyline" === e2.type || "polygon" === e2.type)) {
      const t = this._getCoordinatesForUI(e2);
      this.enableMidpoints && this._setUpMidpointGraphics(t), this.enableVertices && this._setUpVertexGraphics(t);
    }
  }
  _setUpMidpointGraphics(e2) {
    this._removeMidpointGraphics();
    const t = this._createMidpointGraphics(e2);
    this.midpointGraphics.addMany(t), this.layer.addMany(t);
  }
  _setUpVertexGraphics(e2) {
    this._removeVertexGraphics();
    const t = this._createVertexGraphics(e2);
    this.vertexGraphics.addMany(t), this._storeRelatedVertexIndices(), this.layer.addMany(t);
  }
  _createVertexGraphics(e2) {
    const { _graphicAttributes: i2, symbols: s, view: { spatialReference: o2 } } = this, r2 = [];
    return e2?.forEach((e3, n) => {
      e3.forEach((e4, a) => {
        const [h2, p2, c2] = e4;
        r2.push(new c$1({ geometry: new x$1({ x: h2, y: p2, z: c2, spatialReference: o2 }), symbol: s?.vertices?.default, attributes: { ...i2, pathIndex: n, pointIndex: a } }));
      });
    }), r2;
  }
  _createMidpointGraphics(e2) {
    const { _graphicAttributes: i2, symbols: s, view: { spatialReference: o2 } } = this, r2 = [];
    return e2?.forEach((e3, n) => {
      e3.forEach((a, h2) => {
        const [p2, c$22, l2] = a, d2 = e3[h2 + 1] ? h2 + 1 : 0;
        if ("polygon" === this.graphic.geometry?.type || 0 !== d2) {
          const [a2, m2, v] = e3[d2], [y2, _2, g2] = c([p2, c$22, l2], [a2, m2, v]);
          r2.push(new c$1({ geometry: new x$1({ x: y2, y: _2, z: g2, spatialReference: o2 }), symbol: s.midpoints.default, attributes: { ...i2, pathIndex: n, pointIndexStart: h2, pointIndexEnd: d2 } }));
        }
      });
    }), r2;
  }
  _updateSymbolsForTheme() {
    const e2 = this.view.effectiveTheme.accentColor;
    this.symbols = { vertices: { ...this.symbols.vertices, default: this.symbols.vertices.default.clone().set("color", e2), hover: this.symbols.vertices.hover?.clone().set("color", e2) }, midpoints: { ...this.symbols.midpoints } };
    for (const t of this.vertexGraphics)
      this._isSelected(t) ? t.symbol = this.symbols.vertices.selected : this._hoverGraphic === t ? t.symbol = this.symbols.vertices.hover : t.symbol = this.symbols.vertices.default;
  }
  _storeRelatedVertexIndices() {
    const e2 = this.vertexGraphics.items;
    if (!e2)
      return;
    const t = e2.map(({ geometry: e3 }) => ({ x: e3.x, y: e3.y }));
    for (let i2 = 0; i2 < t.length; i2++) {
      const s = [];
      for (let e3 = 0; e3 < t.length; e3++) {
        if (i2 === e3)
          continue;
        const o2 = t[i2], r2 = t[e3];
        o2.x === r2.x && o2.y === r2.y && s.push(e3);
      }
      e2[i2].attributes.relatedGraphicIndices = s;
    }
  }
  _setupMover() {
    const { enableMovement: e2, graphic: t, midpointGraphics: i2, vertexGraphics: s, view: o2 } = this, r2 = s.concat(i2).items;
    e2 && r2.push(t), this._mover = new U$1({ enableMoveAllGraphics: false, highlightsEnabled: false, indicatorsEnabled: false, graphics: r2, view: o2, callbacks: { onGraphicClick: (e3) => this._onGraphicClickCallback(e3), onGraphicMoveStart: (e3) => this._onGraphicMoveStartCallback(e3), onGraphicMove: (e3) => this._onGraphicMoveCallback(e3), onGraphicMoveStop: (e3) => this._onGraphicMoveStopCallback(e3), onGraphicPointerOver: (e3) => this._onGraphicPointerOverCallback(e3), onGraphicPointerOut: (e3) => this._onGraphicPointerOutCallback(e3) } });
  }
  _onGraphicClickCallback(e2) {
    e2.viewEvent.stopPropagation();
    const t = e2.graphic;
    if (t === this.graphic)
      this.clearSelection(), this.emit("graphic-click", e2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e2);
    else if (this._isMidpoint(t)) {
      if (2 === e2.viewEvent.button)
        return;
      const i2 = this.graphic.clone(), s = this._createVertexFromMidpoint(t);
      this.refresh(), this._emitVertexAddEvent([t], i2, s);
    } else if (this._isVertex(t))
      if (e2.viewEvent.stopPropagation(), 2 === e2.viewEvent.button)
        this._removeVertices(t);
      else {
        e2.viewEvent.native.shiftKey || this._clearSelection(), this.selectedVertices.includes(t) ? this._removeFromSelection(t, true) : this._addToSelection(t);
      }
  }
  _setUpOperation(e2) {
    const { graphic: t, dx: i2, dy: s } = e2, o2 = t === this.graphic;
    this._resetSnappingStateVars(), this._setUpGeometryHelper(), this._saveSnappingContextForHandle(t, e2), this._activeOperationInfo = { target: this.graphic, mover: t, operationType: o2 ? "move" : "reshape", totalDx: i2, totalDy: s };
  }
  _onGraphicMoveStartCallback(e2) {
    const { dx: t, dy: i2, graphic: s } = e2;
    if (s === this.graphic) {
      const { geometry: o2 } = s;
      return this._setUpOperation(e2), this._emitMoveStartEvent(t, i2), void (null != o2 && "point" === o2.type && this._onHandleMove(s, t, i2, e2, () => {
        this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(t, i2);
      }));
    }
    if (!this.selectedVertices.includes(s)) {
      if (this._clearSelection(), this._isMidpoint(s)) {
        const e3 = this.graphic.clone(), t2 = this._createVertexFromMidpoint(s);
        this._emitVertexAddEvent([s], e3, t2);
      }
      this._addToSelection(s);
    }
    this._setUpOperation(e2), this._emitReshapeStartEvent(s), this._onHandleMove(s, t, i2, e2, () => {
      this._updateTooltip(s, e2.viewEvent), this._emitReshapeEvent(s);
    });
  }
  _onGraphicMoveCallback(e2) {
    const t = this._activeOperationInfo;
    if (!t)
      return;
    const { dx: i2, dy: s, graphic: o2 } = e2;
    t.totalDx += i2, t.totalDy += s;
    const { operationType: r2 } = t, { geometry: n } = o2;
    if (null != n) {
      if ("move" !== r2)
        this._onHandleMove(o2, i2, s, e2, () => {
          this._updateTooltip(o2, e2.viewEvent), this._emitReshapeEvent(o2);
        });
      else if ("point" === n.type)
        this._onHandleMove(o2, i2, s, e2, () => {
          this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(i2, s);
        });
      else if ("polyline" === n.type || "polygon" === n.type) {
        const t2 = this._getCoordinatesForUI(n);
        this._updateVertexGraphicLocations(t2), this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(i2, s);
      }
    }
  }
  _onGraphicMoveStopCallback(e2) {
    const t = this._activeOperationInfo;
    if (!t)
      return;
    const { dx: i2, dy: s, graphic: o2 } = e2, { operationType: r2 } = t;
    t.totalDx += i2, t.totalDy += s, this._onHandleMove(o2, i2, s, e2, () => "move" === r2 ? this._emitMoveStopEvent() : this._emitReshapeStopEvent(o2)), this._isMidpoint(o2) ? this.refresh() : (this._updateTooltip(this._isVertex(o2) ? o2 : null), this._resetSnappingStateVars(), this._activeOperationInfo = null);
  }
  _updateVertexGraphicLocations(e2) {
    const t = this.view.spatialReference;
    for (const i2 of this.vertexGraphics) {
      const { pathIndex: s, pointIndex: o2 } = i2.attributes, [r2, n, a] = e2[s][o2];
      i2.geometry = new x$1({ x: r2, y: n, z: a, spatialReference: t });
    }
    this._updateMidpointGraphicLocations(e2);
  }
  _updateMidpointGraphicLocations(e2) {
    for (const t of this.midpointGraphics) {
      const { pathIndex: i2, pointIndexStart: s, pointIndexEnd: o2 } = t.attributes, [r2, n, a] = e2[i2][s], [h2, p2, c$12] = e2[i2][o2], [l2, d2, m2] = c([r2, n, a], [h2, p2, c$12]);
      t.geometry = new x$1({ x: l2, y: d2, z: m2, spatialReference: this.view.spatialReference });
    }
  }
  _getIndicesForVertexGraphic({ attributes: e2 }) {
    return [e2?.pathIndex || 0, e2?.pointIndex || 0];
  }
  _getVertexFromEditGeometry(e2) {
    const [t, i2] = this._getIndicesForVertexGraphic(e2);
    return this._editGeometryOperations.data.components[t].vertices[i2];
  }
  _onHandleMove(e2, t, s, o2, r2) {
    e$2(this._snappingTask);
    const n = this._snappingContext;
    if (!n)
      return;
    const a = e2.geometry, p2 = "graphic-move-stop" === o2.type;
    if (null != this.snappingManager && this.selectedVertices.length < 2 && !p2) {
      const o3 = this.snappingManager;
      this._stagedVertex = o3.update({ point: a, context: n }), this._syncGeometryAfterVertexMove(e2, new x$1(this._stagedVertex), t, s, p2), r2(), this._snappingTask = d$2(async (i2) => {
        const h2 = await o3.snap({ point: a, context: n, signal: i2 });
        h2.valid && (this._stagedVertex = h2.apply(), this._syncGeometryAfterVertexMove(e2, new x$1(this._stagedVertex), t, s, p2), r2());
      });
    } else {
      const i2 = null != this._stagedVertex ? new x$1(this._stagedVertex) : a;
      this._syncGeometryAfterVertexMove(e2, i2, t, s, p2), r2();
    }
  }
  async _syncGeometryAfterVertexMove(e2, t, i2, s, o2 = false) {
    const r$12 = this._editGeometryOperations.data.geometry;
    if ("point" === r$12.type)
      e2.geometry = t;
    else if ("mesh" === r$12.type)
      e2.geometry = r$12.centerAt(t), e2.notifyGeometryChanged();
    else {
      const { x: n, y: a, z: h2 } = t, [p2, c2] = this._getIndicesForVertexGraphic(e2);
      let l2 = r(r$12);
      const d2 = l2[p2].length - 1, m2 = null != h2 ? [n, a, h2] : [n, a];
      l2[p2][c2] = m2, "polygon" === r$12.type && (0 === c2 ? l2[p2][d2] = m2 : c2 === d2 && (l2[p2][0] = m2)), this._isVertex(e2) && (l2 = this._moveRelatedCoordinates(l2, e2, m2), l2 = this._moveSelectedHandleCoordinates(l2, e2, i2, s, "polygon" === r$12.type), this._updateMidpointGraphicLocations(l2)), this.graphic.geometry = r$12.clone();
      const v = this._getVertexFromEditGeometry(e2), y2 = n - v.pos[0], _2 = a - v.pos[1];
      this._editGeometryOperations.moveVertices([v], y2, _2, 0), o2 && (this._mover ? this._mover.updateGeometry(this._mover.graphics.indexOf(e2), t) : e2.geometry = t);
    }
  }
  _moveRelatedCoordinates(e2, t, i2) {
    const { relatedGraphicIndices: s } = t.attributes;
    for (const o2 of s) {
      const s2 = this.vertexGraphics.at(o2), { pathIndex: r2, pointIndex: n } = s2.attributes;
      e2[r2][n] = i2, s2.geometry = t.geometry;
    }
    return e2;
  }
  _moveSelectedHandleCoordinates(e2, t, i$1, s, o2) {
    for (const r2 of this.selectedVertices)
      if (r2 !== t) {
        const { pathIndex: t2, pointIndex: n, relatedGraphicIndices: a } = r2.attributes, h2 = i(r2.geometry, i$1, s, this.view), p2 = e2[t2].length - 1;
        e2[t2][n] = [h2.x, h2.y], r2.geometry = h2, o2 && (0 === n ? e2[t2][p2] = [h2.x, h2.y] : n === p2 && (e2[t2][0] = [h2.x, h2.y]));
        for (const i2 of a) {
          const t3 = this.vertexGraphics.at(i2), { pathIndex: s2, pointIndex: o3 } = t3.attributes;
          e2[s2][o3] = [h2.x, h2.y], t3.geometry = h2;
        }
      }
    return e2;
  }
  _onGraphicPointerOverCallback(e2) {
    const t = e2.graphic;
    this._hoverGraphic = t;
    const i2 = this._isVertex(t);
    i2 && !this._isSelected(t) && (t.symbol = this.symbols.vertices.hover), this._updateTooltip(i2 ? t : null), this._updateHoverCursor(t);
  }
  _onGraphicPointerOutCallback(e2) {
    const t = e2.graphic;
    this._hoverGraphic = null, this._isVertex(t) && !this._isSelected(t) && (t.symbol = this.symbols.vertices.default), this.view.cursor = "default", this._updateTooltip();
  }
  _createVertexFromMidpoint(e2) {
    const { _graphicAttributes: t, graphic: i2 } = this, s = i2.geometry;
    if (null == s || "polygon" !== s.type && "polyline" !== s.type)
      return [];
    const o2 = s.clone(), r$12 = [], { pathIndex: n, pointIndexStart: a, pointIndexEnd: h2 } = e2.attributes, { x: p2, y: c2, z: l2 } = e2.geometry, d2 = 0 === h2 ? a + 1 : h2, m2 = r(o2);
    return m2[n].splice(d2, 0, null != l2 ? [p2, c2, l2] : [p2, c2]), e2.attributes = { ...t, pathIndex: n, pointIndex: d2, relatedGraphicIndices: [] }, r$12.push({ coordinates: m2[n][d2], componentIndex: n, vertexIndex: d2 }), this.graphic.geometry = o2, r$12;
  }
  _addToSelection(e2) {
    e2 instanceof c$1 && (e2 = [e2]);
    for (const t of e2)
      t.symbol = this.symbols.vertices.selected;
    this._set("selectedVertices", this.selectedVertices.concat(e2)), this._emitSelectEvent(e2);
  }
  _removeFromSelection(e2, i2) {
    const { vertices: s } = this.symbols, o2 = i2 ? s.hover : s.default;
    e2 instanceof c$1 && (e2 = [e2]);
    for (const t of e2)
      this.selectedVertices.splice(this.selectedVertices.indexOf(t), 1), this._set("selectedVertices", this.selectedVertices), t.set("symbol", o2);
    this._emitDeselectEvent(e2);
  }
  _clearSelection() {
    if (this.selectedVertices.length) {
      const e2 = this.selectedVertices;
      for (const t of this.selectedVertices)
        t.set("symbol", this.symbols.vertices.default);
      this._set("selectedVertices", []), this._emitDeselectEvent(e2);
    }
  }
  _keyDownHandler(e2) {
    e$3.delete.includes(e2.key) && !e2.repeat && this.selectedVertices.length && this._removeVertices(this.selectedVertices);
  }
  _removeVertices(e2) {
    const i2 = this.graphic.geometry;
    if (null == i2 || "polygon" !== i2.type && "polyline" !== i2.type)
      return;
    if ("polygon" === i2.type && this.vertexGraphics.length < 4 || this.vertexGraphics.length < 3)
      return;
    e2 instanceof c$1 && (e2 = [e2]);
    const s = this.graphic.clone(), o2 = i2.clone();
    let r$12 = r(o2);
    const n = [];
    e2 instanceof c$1 && (e2 = [e2]);
    for (const t of e2) {
      const { x: e3, y: i3 } = t.geometry;
      for (let t2 = 0; t2 < r$12.length; t2++) {
        const s2 = r$12[t2];
        for (let o3 = 0; o3 < s2.length; o3++) {
          const [a, h2] = s2[o3];
          e3 === a && i3 === h2 && (n.push({ coordinates: r$12[t2][o3], componentIndex: t2, vertexIndex: o3 }), r$12[t2].splice(Number(o3), 1));
        }
      }
    }
    if ("polygon" === o2.type)
      r$12 = r$12.filter((e3) => {
        if (e3.length < 2)
          return false;
        const [t, i3] = e3[0], [s2, o3] = e3[e3.length - 1];
        return (2 !== e3.length || t !== s2 || i3 !== o3) && (t === s2 && i3 === o3 || e3.push(e3[0]), true);
      }), o2.rings = r$12;
    else {
      for (const e3 of r$12)
        1 === e3.length && r$12.splice(r$12.indexOf(e3), 1);
      o2.paths = r$12;
    }
    this.graphic.geometry = o2, this.refresh(), this._emitVertexRemoveEvent(e2, s, n);
  }
  _isVertex(e2) {
    return this.vertexGraphics.includes(e2);
  }
  _isSelected(e2) {
    return this._isVertex(e2) && this.selectedVertices.includes(e2);
  }
  _isMidpoint(e2) {
    return this.midpointGraphics.includes(e2);
  }
  _updateHoverCursor(e2) {
    this.view.cursor = this._isMidpoint(e2) ? "copy" : "move";
  }
  _updateTooltip(e2, t) {
    null != this._tooltip && (e2 ? e2 === this.graphic ? this._updateMoveGraphicTooltip(t) : this._updateMoveVertexTooltip(t) : this._tooltip.clear());
  }
  _updateMoveGraphicTooltip(e2) {
    const { _tooltip: t, tooltipOptions: i2, view: s } = this;
    if (null == t)
      return;
    const o2 = this._translateGraphicTooltipInfo ??= new r$1({ tooltipOptions: i2 });
    if (o2.clear(), o2.tooltipOptions = i2, e2) {
      const { x: t2, y: i3 } = e2.origin, r2 = s.toMap(e2), n = s.toMap(c$2(t2, i3)), a = m$2(n, r2);
      o2.distance = null != a ? a : h$1;
    }
    t.info = o2;
  }
  _updateMoveVertexTooltip(e2) {
    const { _tooltip: t, graphic: { geometry: i2 }, tooltipOptions: s, view: o2 } = this;
    if (null == t)
      return;
    const r2 = this._translateVertexTooltipInfo ??= new p$2({ tooltipOptions: s });
    if (r2.clear(), r2.tooltipOptions = s, "polygon" === i2?.type ? r2.area = u(i2) : "polyline" === i2?.type && (r2.totalLength = g(i2)), e2) {
      const { x: t2, y: i3 } = e2.origin, s2 = o2.toMap(e2), n = o2.toMap(c$2(t2, i3)), a = m$2(n, s2);
      r2.distance = null != a ? a : h$1;
    }
    t.info = r2;
  }
  _emitMoveStartEvent(e2, t) {
    const i2 = new B(this.graphic, e2, t);
    this.emit("move-start", i2), this.callbacks.onMoveStart && this.callbacks.onMoveStart(i2);
  }
  _emitMoveEvent(e2, t) {
    const i2 = new J(this.graphic, e2, t);
    this.emit("move", i2), this.callbacks.onMove && this.callbacks.onMove(i2);
  }
  _emitMoveStopEvent() {
    const e2 = this._activeOperationInfo;
    if (!e2)
      return;
    const { totalDx: t, totalDy: i2 } = e2, s = new Q(this.graphic, t, i2);
    this.emit("move-stop", s), this.callbacks.onMoveStop && this.callbacks.onMoveStop(s);
  }
  _emitReshapeStartEvent(e2) {
    const t = new q(this.graphic, e2, this.selectedVertices);
    this.emit("reshape-start", t), this.callbacks.onReshapeStart && this.callbacks.onReshapeStart(t);
  }
  _emitReshapeEvent(e2) {
    const t = new K(this.graphic, e2, this.selectedVertices);
    this.emit("reshape", t), this.callbacks.onReshape && this.callbacks.onReshape(t);
  }
  _emitReshapeStopEvent(e2) {
    const t = new N(this.graphic, e2, this.selectedVertices);
    this.emit("reshape-stop", t), this.callbacks.onReshapeStop && this.callbacks.onReshapeStop(t);
  }
  _emitSelectEvent(e2) {
    const t = new W(e2);
    this.emit("select", t), this.callbacks.onVertexSelect && this.callbacks.onVertexSelect(t);
  }
  _emitDeselectEvent(e2) {
    const t = new X(e2);
    this.emit("deselect", t), this.callbacks.onVertexDeselect && this.callbacks.onVertexDeselect(t);
  }
  _emitVertexAddEvent(e2, t, i2) {
    const s = new Y(e2, this.graphic, t, i2);
    this.emit("vertex-add", s), this.callbacks.onVertexAdd && this.callbacks.onVertexAdd(s);
  }
  _emitVertexRemoveEvent(e2, t, i2) {
    const s = new Z(e2, this.graphic, t, i2);
    this.emit("vertex-remove", s), this.callbacks.onVertexRemove && this.callbacks.onVertexRemove(s);
  }
  _logGeometryTypeError() {
    s$1.getLogger(this).error(new s$2("reshape:invalid-geometry", "Reshape operation not supported for the provided graphic. The geometry type is not supported."));
  }
};
e$4([y()], te.prototype, "_tooltip", void 0), e$4([y()], te.prototype, "_translateGraphicTooltipInfo", void 0), e$4([y()], te.prototype, "_translateVertexTooltipInfo", void 0), e$4([y()], te.prototype, "callbacks", void 0), e$4([y()], te.prototype, "enableMidpoints", void 0), e$4([y()], te.prototype, "enableMovement", void 0), e$4([y()], te.prototype, "enableVertices", void 0), e$4([y()], te.prototype, "graphic", void 0), e$4([y({ value: true })], te.prototype, "highlightsEnabled", null), e$4([y()], te.prototype, "layer", void 0), e$4([y({ readOnly: true })], te.prototype, "midpointGraphics", void 0), e$4([y()], te.prototype, "midpointSymbol", void 0), e$4([y({ readOnly: true })], te.prototype, "selectedVertices", void 0), e$4([y()], te.prototype, "snappingManager", void 0), e$4([y({ readOnly: true })], te.prototype, "state", null), e$4([y()], te.prototype, "symbols", void 0), e$4([y({ type: p })], te.prototype, "tooltipOptions", void 0), e$4([y({ readOnly: true })], te.prototype, "type", void 0), e$4([y({ readOnly: true })], te.prototype, "vertexGraphics", void 0), e$4([y()], te.prototype, "view", void 0), te = e$4([c$3("esri.views.draw.support.Reshape")], te);
const ie = te;
export {
  ie as default
};
