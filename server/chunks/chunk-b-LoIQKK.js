import { c8 as E$1, c9 as S$1, ca as f } from "./chunk-KFNcxJaF.js";
const s = { marker: E$1.MARKER, fill: E$1.FILL, line: E$1.LINE, text: E$1.TEXT };
class l {
  constructor(e, l2, n, r) {
    const c = { minScale: l2?.minScale, maxScale: l2?.maxScale }, m = i(c);
    this.layers = e, this.data = l2, this.hash = this._createHash() + m, this.rendererKey = n;
    const o = { isOutline: false, placement: null, symbologyType: S$1.DEFAULT, vvFlags: n };
    for (const t of e) {
      const e2 = s[t.type];
      o.isOutline = "line" === t.type && t.isOutline, t.materialKey = f(e2, o), t.maxVVSize = r, t.scaleInfo = c, t.templateHash += m;
    }
  }
  get type() {
    return "expanded-cim";
  }
  _createHash() {
    let e = "";
    for (const t of this.layers)
      e += t.templateHash;
    return e;
  }
}
function i(e) {
  return e.minScale || e.maxScale ? e.minScale + "-" + e.maxScale : "";
}
export {
  l
};
