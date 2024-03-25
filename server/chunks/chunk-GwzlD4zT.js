import { g7 as m, fb as d$1, ex as w$1, g8 as l$1, ce as d$2, cl as A$1 } from "./chunk-ejFG4zJ0.js";
function l(n, r) {
  n.interactive = true;
  const { tool: l2, view: a2 } = n;
  a2.activeTool = l2;
  let c2 = m(r, () => {
    a2.activeTool === l2 && (a2.activeTool = null);
  });
  return d$1(async (o) => {
    await w$1(() => null == l2 || !l2.active, o), c2 = l$1(c2);
  }, r);
}
function a(o, t) {
  return d$2(() => o.interactive, () => c(o, t), A$1);
}
function c(o, t) {
  o.interactive ? s(o, t) : v(o);
}
function s(o, t) {
  v(o);
  const { view: i, analysis: e } = o, n = new t({ view: i, analysis: e, analysisViewData: o });
  return o.tool = n, i.tools.add(n), n;
}
function v(o) {
  const { view: t, tool: i } = o;
  null != i && (t.tools.remove(i), o.tool = null);
}
export {
  a,
  l,
  v
};
