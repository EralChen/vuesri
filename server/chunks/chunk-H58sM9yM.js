const t = { convertToGEGeometry: s, exportPoint: n, exportPolygon: o, exportPolyline: a, exportMultipoint: c, exportExtent: m };
function s(t2, s2) {
  return null == s2 ? null : t2.convertJSONToGeometry(s2);
}
class i {
  constructor(t2, s2, i2) {
    this.x = t2, this.y = s2, this.spatialReference = i2, this.z = void 0, this.m = void 0;
  }
}
function n(t2, s2, n2) {
  const e2 = new i(t2.getPointX(s2), t2.getPointY(s2), n2), o2 = t2.hasZ(s2), h2 = t2.hasM(s2);
  return o2 && (e2.z = t2.getPointZ(s2)), h2 && (e2.m = t2.getPointM(s2)), e2;
}
class e {
  constructor(t2, s2, i2, n2) {
    this.rings = t2, this.spatialReference = s2, this.hasZ = void 0, this.hasM = void 0, i2 && (this.hasZ = i2), n2 && (this.hasM = n2);
  }
}
function o(t2, s2, i2) {
  return new e(t2.exportPaths(s2), i2, t2.hasZ(s2), t2.hasM(s2));
}
class h {
  constructor(t2, s2, i2, n2) {
    this.paths = t2, this.spatialReference = s2, this.hasZ = void 0, this.hasM = void 0, i2 && (this.hasZ = i2), n2 && (this.hasM = n2);
  }
}
function a(t2, s2, i2) {
  return new h(t2.exportPaths(s2), i2, t2.hasZ(s2), t2.hasM(s2));
}
class r {
  constructor(t2, s2, i2, n2) {
    this.points = t2, this.spatialReference = s2, this.hasZ = void 0, this.hasM = void 0, i2 && (this.hasZ = i2), n2 && (this.hasM = n2);
  }
}
function c(t2, s2, i2) {
  return new r(t2.exportPoints(s2), i2, t2.hasZ(s2), t2.hasM(s2));
}
class x {
  constructor(t2, s2, i2, n2, e2) {
    this.xmin = t2, this.ymin = s2, this.xmax = i2, this.ymax = n2, this.spatialReference = e2, this.zmin = void 0, this.zmax = void 0, this.mmin = void 0, this.mmax = void 0;
  }
}
function m(t2, s2, i2) {
  const n2 = t2.hasZ(s2), e2 = t2.hasM(s2), o2 = new x(t2.getXMin(s2), t2.getYMin(s2), t2.getXMax(s2), t2.getYMax(s2), i2);
  if (n2) {
    const i3 = t2.getZExtent(s2);
    o2.zmin = i3.vmin, o2.zmax = i3.vmax;
  }
  if (e2) {
    const i3 = t2.getMExtent(s2);
    o2.mmin = i3.vmin, o2.mmax = i3.vmax;
  }
  return o2;
}
export {
  t
};
