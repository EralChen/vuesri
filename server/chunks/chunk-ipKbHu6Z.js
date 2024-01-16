import { bo as e, bp as y, br as c$1, bJ as d$1, bR as A, kb as m, el as d$2, dS as w$1, kr as l$2 } from "./chunk-KFNcxJaF.js";
import { l as l$1 } from "./chunk-FKMfLf6u.js";
let a$1 = class a extends l$1 {
  constructor(s2) {
    super(s2);
  }
  initialize() {
    this.addHandles(d$1(() => this.analysisViewData.visible, (s2) => this.visible = s2, A));
  }
  deactivate() {
    this.onDeactivate(), this.created || this.analysis.clear();
  }
  resetCreated() {
    this._set("created", false);
  }
};
e([y({ constructOnly: true })], a$1.prototype, "analysis", void 0), e([y()], a$1.prototype, "analysisViewData", void 0), a$1 = e([c$1("esri.views.interactive.AnalysisToolBase")], a$1);
function l(n, r) {
  n.interactive = true;
  const { tool: l2, view: a3 } = n;
  a3.activeTool = l2;
  let c2 = m(r, () => {
    a3.activeTool === l2 && (a3.activeTool = null);
  });
  return d$2(async (o) => {
    await w$1(() => null == l2 || !l2.active, o), c2 = l$2(c2);
  }, r);
}
function a2(o, t) {
  return d$1(() => o.interactive, () => c(o, t), A);
}
function c(o, t) {
  o.interactive ? s(o, t) : v(o);
}
function s(o, t) {
  v(o);
  const { view: i, analysis: e2 } = o, n = new t({ view: i, analysis: e2, analysisViewData: o });
  return o.tool = n, i.tools.add(n), n;
}
function v(o) {
  const { view: t, tool: i } = o;
  null != i && (t.tools.remove(i), o.tool = null);
}
export {
  a$1 as a,
  a2 as b,
  l,
  v
};
