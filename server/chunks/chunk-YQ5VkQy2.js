import { dY as V } from "./chunk-KFNcxJaF.js";
class i {
  constructor(i2, t2) {
    this.id = i2, this.mbs = t2, this.renderMbs = V(0, 0, 0, -1), this.elevationRangeMin = NaN, this.elevationRangeMax = NaN;
  }
  invalidateElevationRange() {
    this.elevationRangeMin = NaN;
  }
}
var t, n, o, a, s$1;
!function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.Culled = 1] = "Culled", e[e.NotChecked = 2] = "NotChecked";
}(t || (t = {})), function(e) {
  e[e.Unmodified = 0] = "Unmodified", e[e.PotentiallyModified = 1] = "PotentiallyModified", e[e.Culled = 2] = "Culled", e[e.Unknown = 3] = "Unknown", e[e.NotChecked = 4] = "NotChecked";
}(n || (n = {}));
class h extends i {
  constructor(e, i2, t2, a2, s, h2, d2, c, r, l) {
    super(e, t2), this.index = i2, this.childCount = a2, this.level = s, this.resources = h2, this.version = d2, this.lodMetric = c, this.maxError = r, this.numFeatures = l, this.failed = false, this.cacheState = o.Unknown, this.vertexCount = 0, this.memory = 0, this.childrenLoaded = 0, this.hasModifications = false, this.imModificationImpact = n.NotChecked;
  }
}
!function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Uncached = 1] = "Uncached", e[e.Cached = 2] = "Cached";
}(o || (o = {})), function(e) {
  e[e.None = 0] = "None", e[e.MaxScreenThreshold = 1] = "MaxScreenThreshold", e[e.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e[e.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e[e.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(a || (a = {})), function(e) {
  e[e.Hole = 0] = "Hole", e[e.Leaf = 1] = "Leaf";
}(s$1 || (s$1 = {}));
class d {
  constructor(e, i2, t2, n2) {
    this.nodeHasLOD = e, this.isChosen = i2, this.lodLevel = t2, this.version = n2;
  }
}
export {
  a,
  d,
  h,
  i,
  n,
  o,
  s$1 as s,
  t
};
