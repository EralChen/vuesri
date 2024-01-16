import { aM as s$1, he as c, cq as a, hf as w, hg as b$1, hh as p$1, aY as j, a_ as I, hi as j$1, hj as i, hk as d, hl as c$1, hm as a$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function f(t, r, s) {
  if (!t.name)
    throw new s$1("style-symbol-reference-name-missing", "Missing name in style symbol reference");
  if (t.styleName && "Esri2DPointSymbolsStyle" === t.styleName)
    return p(t, s);
  try {
    return b(await c(t, r, s), t.name, r, s);
  } catch (l) {
    return a(l), null;
  }
}
async function p(t, r) {
  const o = w.replaceAll(/\{SymbolName\}/gi, t.name);
  try {
    const t2 = await b$1(o, r);
    return p$1(t2.data);
  } catch (s) {
    return a(s), null;
  }
}
async function b(m, a$2, f2, p2) {
  const b2 = { portal: null != f2?.portal ? f2.portal : j.getDefault(), url: I(m.baseUrl), origin: "portal-item" }, j$2 = j$1(a$2, m.data);
  if (!j$2) {
    throw new s$1("symbolstyleutils:symbol-name-not-found", `The symbol name '${a$2}' could not be found`, { symbolName: a$2 });
  }
  let w2 = i(d(j$2, "cimRef"), b2);
  c$1() && (w2 = a$1(w2));
  try {
    const t = await b$1(w2, p2);
    return p$1(t.data);
  } catch (U) {
    return a(U), null;
  }
}
export {
  f as fetchCIMSymbolReference
};
