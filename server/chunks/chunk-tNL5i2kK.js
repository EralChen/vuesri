import { ks as o, kt as n, ku as r$1, kv as s, eq as t } from "./chunk-KFNcxJaF.js";
import { n as n$1 } from "./chunk-x5arQHJi.js";
class r {
  draw(r2, a) {
    const p = this._getUniqueHints(r2), h = this.sortUniqueHints(p), u = [];
    for (const i of h)
      i instanceof o && u.push(this.visualizeIntersectionPoint(i, a)), i instanceof n && u.push(this.visualizeLine(i, a)), i instanceof r$1 && u.push(this.visualizeParallelSign(i, a)), i instanceof s && u.push(this.visualizeRightAngleQuad(i, a)), i instanceof n$1 && u.push(this.visualizePoint(i, a));
    return t(u);
  }
  sortUniqueHints(i) {
    return i;
  }
  _getUniqueHints(i) {
    const n2 = [];
    for (const t2 of i) {
      let i2 = true;
      for (const s2 of n2)
        if (t2.equals(s2)) {
          i2 = false;
          break;
        }
      i2 && n2.push(t2);
    }
    return n2;
  }
}
class e {
  constructor(e2) {
    this.vertexHandle = null, this.excludeFeature = null, this.visualizer = null, this.selfSnappingZ = null, this.editGeometryOperations = e2.editGeometryOperations, this.elevationInfo = e2.elevationInfo, this.pointer = e2.pointer, this.vertexHandle = e2.vertexHandle, this.excludeFeature = e2.excludeFeature, this.feature = e2.feature, this.visualizer = e2.visualizer, this.selfSnappingZ = e2.selfSnappingZ;
  }
  get coordinateHelper() {
    return this.editGeometryOperations.data.coordinateHelper;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
}
export {
  e,
  r
};
