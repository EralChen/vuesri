import { d8 as y, ds as o, bQ as V, gm as l, f6 as p$1, gn as e, go as _, gp as U, ce as d$1, c8 as u$1, gq as m, gb as m$1, gr as V$1, gs as l$1, dG as h$2, gt as e$1, fc as e$2, gu as e$3, bJ as c$1, cY as x$1, gv as c, fb as d$2, gw as i, gx as e$4, gy as c$2, gl as m$3, aT as s$1, aO as s, aV as e$5, aX as y$1, cl as A$1, bX as P$1, a_ as c$4 } from "./chunk-ejFG4zJ0.js";
import { f } from "./chunk-acqB13MD.js";
import { h as h$1, j } from "./chunk-_vrZQo51.js";
import { h } from "./chunk-ndrb-L6C.js";
import { u as u$2 } from "./chunk-IhjTEMBX.js";
import { r, p } from "./chunk-H9yM79cA.js";
import { u } from "./chunk-Dwvm8fnS.js";
import { m as m$2, c as c$3 } from "./chunk-MIHgBujt.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ozhCrCUU.js";
import "./chunk-KUOhxWR4.js";
import "./chunk-19x7Cx8s.js";
import "./chunk-TCdzNZ_N.js";
import "./chunk-V0WGYzWu.js";
import "./chunk-cRQzjRBY.js";
import "./chunk-OKVnMJUL.js";
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
  constructor(e2, t, i2, s2) {
    this.added = e2, this.graphic = t, this.oldGraphic = i2, this.vertices = s2, this.type = "vertex-add";
  }
}
class Z {
  constructor(e2, t, i2, s2) {
    this.removed = e2, this.graphic = t, this.oldGraphic = i2, this.vertices = s2, this.type = "vertex-remove";
  }
}
const $ = h.reshapeGraphics, ee = { vertices: { default: new y({ style: "circle", size: $.vertex.size, color: $.vertex.color, outline: { color: $.vertex.outlineColor, width: 1 } }), hover: new y({ style: "circle", size: $.vertex.hoverSize, color: $.vertex.hoverColor, outline: { color: $.vertex.hoverOutlineColor, width: 1 } }), selected: new y({ style: "circle", size: $.selected.size, color: $.selected.color, outline: { color: $.selected.outlineColor, width: 1 } }) }, midpoints: { default: new y({ style: "circle", size: $.midpoint.size, color: $.midpoint.color, outline: { color: $.midpoint.outlineColor, width: 1 } }), hover: new y({ style: "circle", size: $.midpoint.size, color: $.midpoint.color, outline: { color: $.midpoint.outlineColor, width: 1 } }) } };
let te = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this._activeOperationInfo = null, this._editGeometryOperations = null, this._graphicAttributes = { esriSketchTool: "box" }, this._mover = null, this._snappingContext = null, this._hoverGraphic = null, this._snappingTask = null, this._stagedVertex = null, this.tooltip = null, this._translateGraphicTooltipInfo = null, this._translateVertexTooltipInfo = null, this.callbacks = { onReshapeStart() {
    }, onReshape() {
    }, onReshapeStop() {
    }, onMoveStart() {
    }, onMove() {
    }, onMoveStop() {
    }, onGraphicClick() {
    } }, this.enableMidpoints = true, this.enableMovement = true, this.enableVertices = true, this.graphic = null, this.layer = null, this.midpointGraphics = new V(), this.midpointSymbol = new y({ style: "circle", size: 6, color: [200, 200, 200], outline: { color: [100, 100, 100], width: 1 } }), this.selectedVertices = [], this.snappingManager = null, this.symbols = ee, this.sketchOptions = new l(), this.type = "reshape", this.vertexGraphics = new V(), this.view = null;
  }
  initialize() {
    const e$12 = this.view;
    this._highlightHelper = new h$1({ view: e$12 }), this._setup(), this.addHandles([p$1(() => e$12?.ready, () => {
      const { layer: e$13, view: t } = this;
      e(t, e$13), this.addHandles(t.on("key-down", (e2) => this._keyDownHandler(e2), _.TOOL));
    }, { once: true, initial: true }), U(() => this.graphic, () => this.refresh()), U(() => this.layer, (e2, t) => {
      t && (this._clearSelection(), this._resetGraphics(t)), this.refresh();
    }), U(() => this.enableMidpoints, () => this.refresh()), d$1(() => this.sketchOptions.tooltips.effectiveEnabled, (e2) => {
      this.tooltip = e2 ? new u$2({ view: this.view }) : u$1(this.tooltip);
    }, A$1), d$1(() => this.view.effectiveTheme.accentColor, () => this._updateSymbolsForTheme(), P$1)]);
  }
  destroy() {
    this._reset(), this._mover?.destroy(), this._mover = null, this.tooltip = u$1(this.tooltip);
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
    this._snappingGraphicsLayer = new h$2({ listMode: "hide", internal: true, title: "Reshape snapping layer" }), this.view.map.layers.add(this._snappingGraphicsLayer), this._snappingContext = new e$1({ editGeometryOperations: this._editGeometryOperations, elevationInfo: { mode: "on-the-ground", offset: 0 }, pointer: t.viewEvent?.pointerType || "mouse", excludeFeature: this.graphic, feature: this.graphic, visualizer: new f(this._snappingGraphicsLayer), vertexHandle: this._getVertexFromEditGeometry(e2) });
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
    const t = e$3(e2.clone());
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
    const { _graphicAttributes: i2, symbols: s2, view: { spatialReference: o2 } } = this, r2 = [];
    return e2?.forEach((e3, n) => {
      e3.forEach((e4, h2) => {
        const [a, p2, c2] = e4;
        r2.push(new c$1({ geometry: new x$1({ x: a, y: p2, z: c2, spatialReference: o2 }), symbol: s2?.vertices?.default, attributes: { ...i2, pathIndex: n, pointIndex: h2 } }));
      });
    }), r2;
  }
  _createMidpointGraphics(e2) {
    const { _graphicAttributes: i2, symbols: s2, view: { spatialReference: o2 } } = this, r2 = [];
    return e2?.forEach((e3, n) => {
      e3.forEach((h2, a) => {
        const [p2, c$22, l2] = h2, d = e3[a + 1] ? a + 1 : 0;
        if ("polygon" === this.graphic.geometry?.type || 0 !== d) {
          const [h3, m2, v] = e3[d], [y2, _2, g] = c([p2, c$22, l2], [h3, m2, v]);
          r2.push(new c$1({ geometry: new x$1({ x: y2, y: _2, z: g, spatialReference: o2 }), symbol: s2.midpoints.default, attributes: { ...i2, pathIndex: n, pointIndexStart: a, pointIndexEnd: d } }));
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
      const s2 = [];
      for (let e3 = 0; e3 < t.length; e3++) {
        if (i2 === e3)
          continue;
        const o2 = t[i2], r2 = t[e3];
        o2.x === r2.x && o2.y === r2.y && s2.push(e3);
      }
      e2[i2].attributes.relatedGraphicIndices = s2;
    }
  }
  _setupMover() {
    const { enableMovement: e2, graphic: t, midpointGraphics: i2, vertexGraphics: s2, view: o2 } = this, r2 = s2.concat(i2).items;
    e2 && r2.push(t), this._mover = new j({ enableMoveAllGraphics: false, highlightsEnabled: false, indicatorsEnabled: false, graphics: r2, view: o2, callbacks: { onGraphicClick: (e3) => this._onGraphicClickCallback(e3), onGraphicMoveStart: (e3) => this._onGraphicMoveStartCallback(e3), onGraphicMove: (e3) => this._onGraphicMoveCallback(e3), onGraphicMoveStop: (e3) => this._onGraphicMoveStopCallback(e3), onGraphicPointerOver: (e3) => this._onGraphicPointerOverCallback(e3), onGraphicPointerOut: (e3) => this._onGraphicPointerOutCallback(e3) } });
  }
  _onGraphicClickCallback(e2) {
    e2.viewEvent.stopPropagation();
    const t = e2.graphic;
    if (t === this.graphic)
      this.clearSelection(), this.emit("graphic-click", e2), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e2);
    else if (this._isMidpoint(t)) {
      if (2 === e2.viewEvent.button)
        return;
      const i2 = this.graphic.clone(), s2 = this._createVertexFromMidpoint(t);
      this.refresh(), this._emitVertexAddEvent([t], i2, s2);
    } else if (this._isVertex(t))
      if (e2.viewEvent.stopPropagation(), 2 === e2.viewEvent.button)
        this._removeVertices(t);
      else {
        e2.viewEvent.native.shiftKey || this._clearSelection(), this.selectedVertices.includes(t) ? this._removeFromSelection(t, true) : this._addToSelection(t);
      }
  }
  _setUpOperation(e2) {
    const { graphic: t, dx: i2, dy: s2 } = e2, o2 = t === this.graphic;
    this._resetSnappingStateVars(), this._setUpGeometryHelper(), this._saveSnappingContextForHandle(t, e2), this._activeOperationInfo = { target: this.graphic, mover: t, operationType: o2 ? "move" : "reshape", totalDx: i2, totalDy: s2 };
  }
  _onGraphicMoveStartCallback(e2) {
    const { dx: t, dy: i2, graphic: s2 } = e2;
    if (s2 === this.graphic) {
      const { geometry: o2 } = s2;
      return this._setUpOperation(e2), this._emitMoveStartEvent(t, i2), void (null != o2 && "point" === o2.type && this._onHandleMove(s2, t, i2, e2, () => {
        this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(t, i2);
      }));
    }
    if (!this.selectedVertices.includes(s2)) {
      if (this._clearSelection(), this._isMidpoint(s2)) {
        const e3 = this.graphic.clone(), t2 = this._createVertexFromMidpoint(s2);
        this._emitVertexAddEvent([s2], e3, t2);
      }
      this._addToSelection(s2);
    }
    this._setUpOperation(e2), this._emitReshapeStartEvent(s2), this._onHandleMove(s2, t, i2, e2, () => {
      this._updateTooltip(s2, e2.viewEvent), this._emitReshapeEvent(s2);
    });
  }
  _onGraphicMoveCallback(e2) {
    const t = this._activeOperationInfo;
    if (!t)
      return;
    const { dx: i2, dy: s2, graphic: o2 } = e2;
    t.totalDx += i2, t.totalDy += s2;
    const { operationType: r2 } = t, { geometry: n } = o2;
    if (null != n) {
      if ("move" !== r2)
        this._onHandleMove(o2, i2, s2, e2, () => {
          this._updateTooltip(o2, e2.viewEvent), this._emitReshapeEvent(o2);
        });
      else if ("point" === n.type)
        this._onHandleMove(o2, i2, s2, e2, () => {
          this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(i2, s2);
        });
      else if ("polyline" === n.type || "polygon" === n.type) {
        const t2 = this._getCoordinatesForUI(n);
        this._updateVertexGraphicLocations(t2), this._updateTooltip(this.graphic, e2.viewEvent), this._emitMoveEvent(i2, s2);
      }
    }
  }
  _onGraphicMoveStopCallback(e2) {
    const t = this._activeOperationInfo;
    if (!t)
      return;
    const { dx: i2, dy: s2, graphic: o2 } = e2, { operationType: r2 } = t;
    t.totalDx += i2, t.totalDy += s2, this._onHandleMove(o2, i2, s2, e2, () => "move" === r2 ? this._emitMoveStopEvent() : this._emitReshapeStopEvent(o2)), this._isMidpoint(o2) ? this.refresh() : (this._updateTooltip(this._isVertex(o2) ? o2 : null), this._resetSnappingStateVars(), this._activeOperationInfo = null);
  }
  _updateVertexGraphicLocations(e2) {
    const t = this.view.spatialReference;
    for (const i2 of this.vertexGraphics) {
      const { pathIndex: s2, pointIndex: o2 } = i2.attributes, [r2, n, h2] = e2[s2][o2];
      i2.geometry = new x$1({ x: r2, y: n, z: h2, spatialReference: t });
    }
    this._updateMidpointGraphicLocations(e2);
  }
  _updateMidpointGraphicLocations(e2) {
    for (const t of this.midpointGraphics) {
      const { pathIndex: i2, pointIndexStart: s2, pointIndexEnd: o2 } = t.attributes, [r2, n, h2] = e2[i2][s2], [a, p2, c$12] = e2[i2][o2], [l2, d, m2] = c([r2, n, h2], [a, p2, c$12]);
      t.geometry = new x$1({ x: l2, y: d, z: m2, spatialReference: this.view.spatialReference });
    }
  }
  _getIndicesForVertexGraphic({ attributes: e2 }) {
    return [e2?.pathIndex || 0, e2?.pointIndex || 0];
  }
  _getVertexFromEditGeometry(e2) {
    const [t, i2] = this._getIndicesForVertexGraphic(e2);
    return this._editGeometryOperations.data.components[t].vertices[i2];
  }
  _onHandleMove(e2, t, s2, o2, r2) {
    e$2(this._snappingTask);
    const n = this._snappingContext;
    if (!n)
      return;
    const h2 = e2.geometry, p2 = "graphic-move-stop" === o2.type;
    if (null != this.snappingManager && this.selectedVertices.length < 2 && !p2) {
      const o3 = this.snappingManager;
      this._stagedVertex = o3.update({ point: h2, context: n }), this._syncGeometryAfterVertexMove(e2, new x$1(this._stagedVertex), t, s2, p2), r2(), this._snappingTask = d$2(async (i2) => {
        const a = await o3.snap({ point: h2, context: n, signal: i2 });
        a.valid && (this._stagedVertex = a.apply(), this._syncGeometryAfterVertexMove(e2, new x$1(this._stagedVertex), t, s2, p2), r2());
      });
    } else {
      const i2 = null != this._stagedVertex ? new x$1(this._stagedVertex) : h2;
      this._syncGeometryAfterVertexMove(e2, i2, t, s2, p2), r2();
    }
  }
  async _syncGeometryAfterVertexMove(e2, t, i2, s2, o2 = false) {
    const r2 = this._editGeometryOperations.data.geometry;
    if ("point" === r2.type)
      e2.geometry = t;
    else if ("mesh" === r2.type)
      e2.geometry = r2.centerAt(t), e2.notifyGeometryChanged();
    else {
      const { x: n, y: h2, z: a } = t, [p2, c2] = this._getIndicesForVertexGraphic(e2);
      let l2 = e$3(r2);
      const d = l2[p2].length - 1, m2 = null != a ? [n, h2, a] : [n, h2];
      l2[p2][c2] = m2, "polygon" === r2.type && (0 === c2 ? l2[p2][d] = m2 : c2 === d && (l2[p2][0] = m2)), this._isVertex(e2) && (l2 = this._moveRelatedCoordinates(l2, e2, m2), l2 = this._moveSelectedHandleCoordinates(l2, e2, i2, s2, "polygon" === r2.type), this._updateMidpointGraphicLocations(l2)), this.graphic.geometry = r2.clone();
      const v = this._getVertexFromEditGeometry(e2), y2 = n - v.pos[0], _2 = h2 - v.pos[1];
      this._editGeometryOperations.moveVertices([v], y2, _2, 0), o2 && (this._mover ? this._mover.updateGeometry(this._mover.graphics.indexOf(e2), t) : e2.geometry = t);
    }
  }
  _moveRelatedCoordinates(e2, t, i2) {
    const { relatedGraphicIndices: s2 } = t.attributes;
    for (const o2 of s2) {
      const s3 = this.vertexGraphics.at(o2), { pathIndex: r2, pointIndex: n } = s3.attributes;
      e2[r2][n] = i2, s3.geometry = t.geometry;
    }
    return e2;
  }
  _moveSelectedHandleCoordinates(e2, t, i$1, s2, o2) {
    for (const r2 of this.selectedVertices)
      if (r2 !== t) {
        const { pathIndex: t2, pointIndex: n, relatedGraphicIndices: h2 } = r2.attributes, a = i(r2.geometry, i$1, s2, this.view), p2 = e2[t2].length - 1;
        e2[t2][n] = [a.x, a.y], r2.geometry = a, o2 && (0 === n ? e2[t2][p2] = [a.x, a.y] : n === p2 && (e2[t2][0] = [a.x, a.y]));
        for (const i2 of h2) {
          const t3 = this.vertexGraphics.at(i2), { pathIndex: s3, pointIndex: o3 } = t3.attributes;
          e2[s3][o3] = [a.x, a.y], t3.geometry = a;
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
    const { _graphicAttributes: t, graphic: i2 } = this, s2 = i2.geometry;
    if (null == s2 || "polygon" !== s2.type && "polyline" !== s2.type)
      return [];
    const o2 = s2.clone(), r2 = [], { pathIndex: n, pointIndexStart: h2, pointIndexEnd: a } = e2.attributes, { x: p2, y: c2, z: l2 } = e2.geometry, d = 0 === a ? h2 + 1 : a, m2 = e$3(o2);
    return m2[n].splice(d, 0, null != l2 ? [p2, c2, l2] : [p2, c2]), e2.attributes = { ...t, pathIndex: n, pointIndex: d, relatedGraphicIndices: [] }, r2.push({ coordinates: m2[n][d], componentIndex: n, vertexIndex: d }), this.graphic.geometry = o2, r2;
  }
  _addToSelection(e2) {
    e2 instanceof c$1 && (e2 = [e2]);
    for (const t of e2)
      t.symbol = this.symbols.vertices.selected;
    this._set("selectedVertices", this.selectedVertices.concat(e2)), this._emitSelectEvent(e2);
  }
  _removeFromSelection(e2, i2) {
    const { vertices: s2 } = this.symbols, o2 = i2 ? s2.hover : s2.default;
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
    e$4.delete.includes(e2.key) && !e2.repeat && this.selectedVertices.length && this._removeVertices(this.selectedVertices);
  }
  _removeVertices(e2) {
    const i2 = this.graphic.geometry;
    if (null == i2 || "polygon" !== i2.type && "polyline" !== i2.type)
      return;
    if ("polygon" === i2.type && this.vertexGraphics.length < 4 || this.vertexGraphics.length < 3)
      return;
    e2 instanceof c$1 && (e2 = [e2]);
    const s2 = this.graphic.clone(), o2 = i2.clone();
    let r2 = e$3(o2);
    const n = [];
    e2 instanceof c$1 && (e2 = [e2]);
    for (const t of e2) {
      const { x: e3, y: i3 } = t.geometry;
      for (let t2 = 0; t2 < r2.length; t2++) {
        const s3 = r2[t2];
        for (let o3 = 0; o3 < s3.length; o3++) {
          const [h2, a] = s3[o3];
          e3 === h2 && i3 === a && (n.push({ coordinates: r2[t2][o3], componentIndex: t2, vertexIndex: o3 }), r2[t2].splice(Number(o3), 1));
        }
      }
    }
    if ("polygon" === o2.type)
      r2 = r2.filter((e3) => {
        if (e3.length < 2)
          return false;
        const [t, i3] = e3[0], [s3, o3] = e3[e3.length - 1];
        return (2 !== e3.length || t !== s3 || i3 !== o3) && (t === s3 && i3 === o3 || e3.push(e3[0]), true);
      }), o2.rings = r2;
    else {
      for (const e3 of r2)
        1 === e3.length && r2.splice(r2.indexOf(e3), 1);
      o2.paths = r2;
    }
    this.graphic.geometry = o2, this.refresh(), this._emitVertexRemoveEvent(e2, s2, n);
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
    null != this.tooltip && (e2 ? e2 === this.graphic ? this._updateMoveGraphicTooltip(t) : this._updateMoveVertexTooltip(t) : this.tooltip.clear());
  }
  _updateMoveGraphicTooltip(e2) {
    const { tooltip: t, sketchOptions: i2, view: s2 } = this;
    if (null == t)
      return;
    const o2 = this._translateGraphicTooltipInfo ??= new r({ sketchOptions: i2 });
    if (o2.clear(), o2.sketchOptions = i2, e2) {
      const { x: t2, y: i3 } = e2.origin, r2 = s2.toMap(e2), n = s2.toMap(c$2(t2, i3)), h2 = m$2(n, r2);
      o2.distance = null != h2 ? h2 : m$3;
    }
    t.info = o2;
  }
  _updateMoveVertexTooltip(e2) {
    const { tooltip: t, graphic: { geometry: i2 }, sketchOptions: s2, view: o2 } = this;
    if (null == t)
      return;
    const r2 = this._translateVertexTooltipInfo ??= new p({ sketchOptions: s2 });
    if (r2.clear(), r2.sketchOptions = s2, "polygon" === i2?.type ? r2.area = u(i2) : "polyline" === i2?.type && (r2.totalLength = c$3(i2)), e2) {
      const { x: t2, y: i3 } = e2.origin, s3 = o2.toMap(e2), n = o2.toMap(c$2(t2, i3)), h2 = m$2(n, s3);
      r2.distance = null != h2 ? h2 : m$3;
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
    const { totalDx: t, totalDy: i2 } = e2, s2 = new Q(this.graphic, t, i2);
    this.emit("move-stop", s2), this.callbacks.onMoveStop && this.callbacks.onMoveStop(s2);
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
    const s2 = new Y(e2, this.graphic, t, i2);
    this.emit("vertex-add", s2), this.callbacks.onVertexAdd && this.callbacks.onVertexAdd(s2);
  }
  _emitVertexRemoveEvent(e2, t, i2) {
    const s2 = new Z(e2, this.graphic, t, i2);
    this.emit("vertex-remove", s2), this.callbacks.onVertexRemove && this.callbacks.onVertexRemove(s2);
  }
  _logGeometryTypeError() {
    s$1.getLogger(this).error(new s("reshape:invalid-geometry", "Reshape operation not supported for the provided graphic. The geometry type is not supported."));
  }
};
e$5([y$1()], te.prototype, "tooltip", void 0), e$5([y$1()], te.prototype, "_translateGraphicTooltipInfo", void 0), e$5([y$1()], te.prototype, "_translateVertexTooltipInfo", void 0), e$5([y$1()], te.prototype, "callbacks", void 0), e$5([y$1()], te.prototype, "enableMidpoints", void 0), e$5([y$1()], te.prototype, "enableMovement", void 0), e$5([y$1()], te.prototype, "enableVertices", void 0), e$5([y$1()], te.prototype, "graphic", void 0), e$5([y$1({ value: true })], te.prototype, "highlightsEnabled", null), e$5([y$1()], te.prototype, "layer", void 0), e$5([y$1({ readOnly: true })], te.prototype, "midpointGraphics", void 0), e$5([y$1()], te.prototype, "midpointSymbol", void 0), e$5([y$1({ readOnly: true })], te.prototype, "selectedVertices", void 0), e$5([y$1()], te.prototype, "snappingManager", void 0), e$5([y$1({ readOnly: true })], te.prototype, "state", null), e$5([y$1()], te.prototype, "symbols", void 0), e$5([y$1({ type: l })], te.prototype, "sketchOptions", void 0), e$5([y$1({ readOnly: true })], te.prototype, "type", void 0), e$5([y$1({ readOnly: true })], te.prototype, "vertexGraphics", void 0), e$5([y$1()], te.prototype, "view", void 0), te = e$5([c$4("esri.views.draw.support.Reshape")], te);
const ie = te;
export {
  ie as default
};
