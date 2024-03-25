import { aO as s$1, cp as S, cq as a$1, cr as q$1 } from "./chunk-ejFG4zJ0.js";
function t(r) {
  return null == r || "simple" === r.type || "unique-value" === r.type || "class-breaks" === r.type || "dictionary" === r.type || "heatmap" === r.type;
}
function s(r, n) {
  if (null == r)
    return null;
  if (!t(r))
    return new s$1("renderer-conversion-3d:unsupported-renderer", `Unsupported renderer of type '${r.type || r.declaredClass}'`, { renderer: r });
  switch (r.type) {
    case "simple":
      return u(r);
    case "unique-value":
      return i(r, n);
    case "class-breaks":
      return a(r);
    case "dictionary":
    case "heatmap":
      return null;
  }
  return null;
}
function l(r, n) {
  if (!n)
    return null;
  let o;
  if (o = Array.isArray(n) ? n : [n], o.length > 0) {
    const n2 = o.map((r2) => r2.details.symbol.type || r2.details.symbol.declaredClass).filter((r2) => !!r2);
    n2.sort();
    const t2 = [];
    return n2.forEach((r2, e) => {
      0 !== e && r2 === n2[e - 1] || t2.push(r2);
    }), new s$1("renderer-conversion-3d:unsupported-symbols", `Renderer contains symbols (${t2.join(", ")}) which are not supported in 3D`, { renderer: r, symbolErrors: o });
  }
  return null;
}
function u(r) {
  return l(r, S(r.symbol).error);
}
function i(e, t2) {
  const s2 = { ...a$1, ...t2 }, u2 = e.uniqueValueInfos?.map((r) => S(r.symbol, s2).error).filter(q$1), i2 = S(e.defaultSymbol, s2);
  return i2.error && u2?.unshift(i2.error), l(e, u2);
}
function a(e) {
  const o = e.classBreakInfos.map((r) => S(r.symbol).error).filter(q$1), t2 = S(e.defaultSymbol);
  return t2.error && o.unshift(t2.error), l(e, o);
}
export {
  s,
  t
};
