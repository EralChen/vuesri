import { j3 as W } from "./chunk-ejFG4zJ0.js";
var e;
!function(e2) {
  e2[e2.Auto = 0] = "Auto", e2[e2.Euclidean = 1] = "Euclidean", e2[e2.Geodesic = 2] = "Geodesic";
}(e || (e = {}));
class t {
  constructor(e2 = null) {
    this.spatialReference = e2;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  set spatialReference(e2) {
    e2 !== this._spatialReference && (this._spatialReference = e2, this._updateNormalizationFactors());
  }
  normalizeDistance(e2) {
    return e2 * this._metersPerDistanceUnit;
  }
  normalizeElevation(e2) {
    return e2 * this._metersPerElevationUnit;
  }
  normalizeArea(e2) {
    return e2 * this._squareMetersPerAreaUnit;
  }
  _updateNormalizationFactors() {
    this._metersPerDistanceUnit = W(this._spatialReference, 1), this._metersPerElevationUnit = W(this._spatialReference, 1), this._squareMetersPerAreaUnit = this._metersPerDistanceUnit * this._metersPerDistanceUnit;
  }
}
export {
  e,
  t
};
