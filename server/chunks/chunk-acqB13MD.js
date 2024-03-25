import { ga as r, cY as x$1, gb as m, gc as e, gd as f$1, ge as y, bJ as c$1, cm as e$1, gf as d, gg as e$2, gh as p, gi as U, gj as w, d8 as y$1, d6 as d$1, gk as n, aW as n$1 } from "./chunk-ejFG4zJ0.js";
class f extends r {
  constructor(e2) {
    super(), this._graphicsLayer = e2, this._symbolPairingsByType = /* @__PURE__ */ new Map();
  }
  visualizeIntersectionPoint(e2, t) {
    return this._visualizeSnappingIndicator(new x$1({ x: e2.intersectionPoint[0], y: e2.intersectionPoint[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("intersectionPoint", t.view.effectiveTheme.accentColor));
  }
  visualizePoint(e2, t) {
    return this._visualizeSnappingIndicator(new x$1({ x: e2.point[0], y: e2.point[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("point", t.view.effectiveTheme.accentColor));
  }
  visualizeLine(e2, t) {
    return this._visualizeSnappingIndicator(new m({ paths: [[e2.lineStart, e2.lineEnd]], spatialReference: t.spatialReference }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeParallelSign(e2, t) {
    return this._visualizeSnappingIndicator(new m({ paths: [[e2.lineStart, e2.lineEnd]], spatialReference: t.spatialReference }), this._getOrCreateSymbol("parallelSign", t.view.effectiveTheme.accentColor));
  }
  visualizeRightAngleQuad(e$12, t) {
    const r2 = n(), l = n(), s = n$1();
    e(r2, f$1(e$12.centerVertex), f$1(e$12.previousVertex)), e(l, f$1(e$12.nextVertex), f$1(e$12.previousVertex)), y(s, r2, l);
    const c = `rightAngleQuad${s[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new m({ paths: [[e$12.previousVertex, e$12.centerVertex, e$12.nextVertex]], spatialReference: t.spatialReference }), this._getOrCreateSymbol(c, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r2, i) {
    const o = new c$1({ geometry: r2, symbol: i });
    return this._graphicsLayer.add(o), e$1(() => {
      this._graphicsLayer.remove(o);
    });
  }
  _getOrCreateSymbol(e2, t) {
    const r2 = this._symbolPairingsByType;
    return r2.get(e2)?.color !== t && r2.set(e2, { color: t, symbol: u(e2, t) }), r2.get(e2).symbol;
  }
}
function u(e2, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e2) {
    case "point":
      return new y$1({ outline: { width: 0.5, color: [0, 0, 0, 1] }, size: 10, color: t });
    case "intersectionPoint":
      return new y$1({ outline: new d$1({ width: 1.5, color: t }), size: 15, color: [0, 0, 0, 0] });
    case "line":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: U.Butt, joinStyle: w.Round, miterLimit: 10, width: e$2(p.lineHintWidthTarget), color: i }] } } });
    case "parallelSign":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: 1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const o = "rightAngleQuad45" === e2 ? 45 : 225;
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0.5, y: 0.5, z: 0 }, anchorPointUnits: "Relative", size: e$2(p.rightAngleHintSize), rotation: o, markerPlacement: { type: "CIMMarkerPlacementOnVertices", placePerPart: true, angleToLine: true, placeOnEndPoints: false }, frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]] }, symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e$2(p.rightAngleHintOutlineSize), color: i }, { type: "CIMSolidFill", enable: true, color: [...t.toRgb(), 255 * t.a * 0.4] }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    }
  }
}
export {
  f
};
