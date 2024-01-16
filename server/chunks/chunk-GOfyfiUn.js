import { e as e$2 } from "./chunk-Jwrw72Py.js";
import { eP as o$1, l6 as u$1, mL as g$1, fp as o, mD as v, mH as x, ie as z } from "./chunk-KFNcxJaF.js";
const e$1 = { readOnly: true, get() {
  return e$2(this.view);
} };
var e;
!function(e2) {
  e2[e2.Auto = 0] = "Auto", e2[e2.Euclidean = 1] = "Euclidean", e2[e2.Geodesic = 2] = "Geodesic";
}(e || (e = {}));
function t$1(e2, o2) {
  if (o$1(o2, 0, 0, 0), e2.length > 0) {
    for (let r = 0; r < e2.length; ++r)
      u$1(o2, o2, e2[r]);
    g$1(o2, o2, 1 / e2.length);
  }
}
function i(e2, n, c, s) {
  s.projectToRenderScreen(e2, f), s.projectToRenderScreen(n, p), o(c, a, m), v(c, c);
}
const f = x(), m = f, p = x(), a = p;
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
    this._metersPerDistanceUnit = z(this._spatialReference, 1), this._metersPerElevationUnit = z(this._spatialReference, 1), this._squareMetersPerAreaUnit = this._metersPerDistanceUnit * this._metersPerDistanceUnit;
  }
}
export {
  e$1 as a,
  t$1 as b,
  e,
  i,
  t
};
