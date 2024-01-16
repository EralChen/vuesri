import { c4 as d$1 } from "./chunk-KFNcxJaF.js";
function n(e, n2) {
  if (e === n2)
    return true;
  if (null == e || null == n2)
    return false;
  if (e.length !== n2.length)
    return false;
  for (let t2 = 0; t2 < e.length; t2++) {
    const r2 = e[t2], a2 = n2[t2];
    if (r2.length !== a2.length)
      return false;
    for (let e2 = 0; e2 < r2.length; e2++)
      if (r2[e2] !== a2[e2])
        return false;
  }
  return true;
}
function t(e, t2) {
  if (e === t2)
    return true;
  if (null == e || null == t2)
    return false;
  if (e.length !== t2.length)
    return false;
  for (let r2 = 0; r2 < e.length; r2++)
    if (!n(e[r2], t2[r2]))
      return false;
  return true;
}
function r(n2, t2) {
  return n2 === t2 || null != n2 && null != t2 && d$1(n2.spatialReference, t2.spatialReference) && n2.x === t2.x && n2.y === t2.y && n2.z === t2.z && n2.m === t2.m;
}
function a(n2, r2) {
  return n2.hasZ === r2.hasZ && n2.hasM === r2.hasM && (!!d$1(n2.spatialReference, r2.spatialReference) && t(n2.paths, r2.paths));
}
function u(n2, r2) {
  return n2.hasZ === r2.hasZ && n2.hasM === r2.hasM && (!!d$1(n2.spatialReference, r2.spatialReference) && t(n2.rings, r2.rings));
}
function i(t2, r2) {
  return t2.hasZ === r2.hasZ && t2.hasM === r2.hasM && (!!d$1(t2.spatialReference, r2.spatialReference) && n(t2.points, r2.points));
}
function s(n2, t2) {
  return n2.hasZ === t2.hasZ && n2.hasM === t2.hasM && (!!d$1(n2.spatialReference, t2.spatialReference) && (n2.xmin === t2.xmin && n2.ymin === t2.ymin && n2.zmin === t2.zmin && n2.xmax === t2.xmax && n2.ymax === t2.ymax && n2.zmax === t2.zmax));
}
function l(e, n2) {
  if (e === n2)
    return true;
  if (null == e || null == n2)
    return false;
  if (e.type !== n2.type)
    return false;
  switch (e.type) {
    case "point":
      return r(e, n2);
    case "extent":
      return s(e, n2);
    case "polyline":
      return a(e, n2);
    case "polygon":
      return u(e, n2);
    case "multipoint":
      return i(e, n2);
    case "mesh":
      return false;
    default:
      return;
  }
}
function f(e, n2) {
  if (e === n2)
    return true;
  if (!e || !n2)
    return false;
  const t2 = Object.keys(e), r2 = Object.keys(n2);
  if (t2.length !== r2.length)
    return false;
  for (const a2 of t2)
    if (e[a2] !== n2[a2])
      return false;
  return true;
}
function c(e, n2) {
  return e === n2 || null != e && null != n2 && e.objectId === n2.objectId && (!!l(e.geometry, n2.geometry) && !!f(e.attributes, n2.attributes));
}
export {
  c,
  r
};
