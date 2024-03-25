import { eE as e, eF as B, eG as ge, eH as r$1 } from "./chunk-ejFG4zJ0.js";
class s extends e {
  constructor(e2, n) {
    super(NaN, NaN), this.id = e2, this.serviceMbsInIndexSR = n, this.serviceMbsInRenderSR = B(0, 0, 0, -1);
  }
  invalidateServiceBVsInRenderSR() {
    ge(this.serviceMbsInRenderSR), this.serviceObbInRenderSR?.invalidate();
  }
  shareServiceBVsInRenderSRWith(e2) {
    this.serviceObbInRenderSR = e2.serviceObbInRenderSR, this.serviceMbsInRenderSR = e2.serviceMbsInRenderSR;
  }
}
var o, r, a, d, c;
!function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.Culled = 1] = "Culled", e2[e2.NotChecked = 2] = "NotChecked";
}(o || (o = {})), function(e2) {
  e2[e2.Unmodified = 0] = "Unmodified", e2[e2.PotentiallyModified = 1] = "PotentiallyModified", e2[e2.Culled = 2] = "Culled", e2[e2.Unknown = 3] = "Unknown", e2[e2.NotChecked = 4] = "NotChecked";
}(r || (r = {}));
class h extends s {
  constructor(i, n, t, s2, o2, d2, c2, h2, l2, u) {
    super(i, t), this.index = n, this.childCount = s2, this.level = o2, this.resources = d2, this.version = c2, this.lodMetric = h2, this.maxError = l2, this.numFeatures = u, this.failed = false, this.cacheState = a.Unknown, this.vertexCount = 0, this.memory = 0, this.childrenLoaded = 0, this.hasModifications = false, this.imModificationImpact = r.NotChecked, this.elevationAgnosticBoundingVolume = r$1(0, 0, 0, -1);
  }
  invalidateServiceBVsInRenderSR() {
    super.invalidateServiceBVsInRenderSR(), this.elevationAgnosticBoundingVolume[3] = -1;
  }
}
!function(e2) {
  e2[e2.Unknown = 0] = "Unknown", e2[e2.Uncached = 1] = "Uncached", e2[e2.Cached = 2] = "Cached";
}(a || (a = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.MaxScreenThreshold = 1] = "MaxScreenThreshold", e2[e2.ScreenSpaceRelative = 2] = "ScreenSpaceRelative", e2[e2.RemovedFeatureDiameter = 3] = "RemovedFeatureDiameter", e2[e2.DistanceRangeFromDefaultCamera = 4] = "DistanceRangeFromDefaultCamera";
}(d || (d = {})), function(e2) {
  e2[e2.Hole = 0] = "Hole", e2[e2.Leaf = 1] = "Leaf";
}(c || (c = {}));
class l {
  constructor(e2, i, n, t) {
    this.nodeHasLOD = e2, this.isChosen = i, this.lodLevel = n, this.version = t;
  }
}
export {
  a,
  c,
  d,
  h,
  l,
  o,
  r,
  s
};
