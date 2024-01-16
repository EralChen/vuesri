import { gi as Ae, gj as Ue, gk as pe, gl as ye, gm as ge, gn as n, go as _e, c3 as W$1 } from "./chunk-KFNcxJaF.js";
class u {
  constructor() {
    this.code = null, this.description = null;
  }
}
class c {
  constructor(t) {
    this.error = new u(), this.globalId = null, this.objectId = null, this.success = false, this.uniqueId = null, this.error.description = t;
  }
}
function f(t) {
  return new c(t);
}
class a {
  constructor(t) {
    this.globalId = null, this.success = true, this.objectId = this.uniqueId = t;
  }
}
function d(t) {
  return new a(t);
}
const m = /* @__PURE__ */ new Set();
function p(t, n2, i, o = false) {
  m.clear();
  for (const s in i) {
    const l = t.get(s);
    if (!l)
      continue;
    const u2 = h(l, i[s]);
    if (m.add(l.name), l && (o || l.editable)) {
      const t2 = Ae(l, u2);
      if (t2)
        return f(Ue(t2, l, u2));
      n2[l.name] = u2;
    }
  }
  for (const e of t?.requiredFields ?? [])
    if (!m.has(e.name))
      return f(`missing required field "${e.name}"`);
  return null;
}
function h(n$1, e) {
  let r = e;
  return pe(n$1) && "string" == typeof e ? r = parseFloat(e) : ye(n$1) && null != e && "string" != typeof e ? r = String(e) : ge(n$1) && "string" == typeof e && (r = n(e)), _e(r);
}
let y;
function w(t, e) {
  if (!t || !W$1(e))
    return t;
  if ("rings" in t || "paths" in t) {
    if (null == y)
      throw new TypeError("geometry engine not loaded");
    return y.simplify(e, t);
  }
  return t;
}
async function j() {
  return null == y && (y = await import("./chunk--awtHmbx.js")), y;
}
async function I(t, e) {
  !W$1(t) || "esriGeometryPolygon" !== e && "esriGeometryPolyline" !== e || await j();
}
export {
  I,
  d,
  f,
  p,
  w
};
