import { cy as x$1, dy as m, fp as o, fq as y, bf as c$1, bS as e$1, fr as d, fs as e, ft as p$1, fu as U, fv as w, cL as y$1, cJ as m$1, fw as n, eQ as n$1 } from "./chunk-KFNcxJaF.js";
import { r } from "./chunk-tNL5i2kK.js";
class S extends r {
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
  visualizeRightAngleQuad(e2, t) {
    const r2 = n(), l = n(), s = n$1();
    o(r2, e2.centerVertex, e2.previousVertex), o(l, e2.nextVertex, e2.previousVertex), y(s, r2, l);
    const m$12 = `rightAngleQuad${s[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new m({ paths: [[e2.previousVertex, e2.centerVertex, e2.nextVertex]], spatialReference: t.spatialReference }), this._getOrCreateSymbol(m$12, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r2, i) {
    const n2 = new c$1({ geometry: r2, symbol: i });
    return this._graphicsLayer.add(n2), e$1(() => {
      this._graphicsLayer.remove(n2);
    });
  }
  _getOrCreateSymbol(e2, t) {
    const r2 = this._symbolPairingsByType;
    return r2.get(e2)?.color !== t && r2.set(e2, { color: t, symbol: u(e2, t) }), r2.get(e2).symbol;
  }
}
function u(e$12, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e$12) {
    case "point":
      return new y$1({ outline: { width: 0.5, color: [0, 0, 0, 1] }, size: 10, color: t });
    case "intersectionPoint":
      return new y$1({ outline: new m$1({ width: 1.5, color: t }), size: 15, color: [0, 0, 0, 0] });
    case "line":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: U.Butt, joinStyle: w.Round, miterLimit: 10, width: e(p$1.lineHintWidthTarget), color: i }] } } });
    case "parallelSign":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: 1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const n2 = "rightAngleQuad45" === e$12 ? 45 : 225;
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0.5, y: 0.5, z: 0 }, anchorPointUnits: "Relative", size: e(p$1.rightAngleHintSize), rotation: n2, markerPlacement: { type: "CIMMarkerPlacementOnVertices", placePerPart: true, angleToLine: true, placeOnEndPoints: false }, frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]] }, symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e(p$1.rightAngleHintOutlineSize), color: i }, { type: "CIMSolidFill", enable: true, color: [...t.toRgb(), 255 * t.a * 0.4] }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    }
  }
}
export {
  S
};
