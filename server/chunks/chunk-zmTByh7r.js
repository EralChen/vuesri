import { n as ne, U, _ as Ge, d as ce, H, a0 as De, a, r, a1 as ze, N, y as qe, a2 as Ee, a3 as xe, a4 as Ve, a5 as Ze, a6 as de, A as L, a7 as Ue, a8 as k } from "./chunk-dapYIJB-.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-pLXZyeZ7.js";
import "./chunk-uS4nEbwW.js";
function T(a2, e) {
  return a2 && a2.domain ? "coded-value" === a2.domain.type || "codedValue" === a2.domain.type ? N.convertObjectToArcadeDictionary({ type: "codedValue", name: a2.domain.name, dataType: k[a2.field.type], codedValues: a2.domain.codedValues.map((n) => ({ name: n.name, code: n.code })) }, qe(e)) : N.convertObjectToArcadeDictionary({ type: "range", name: a2.domain.name, dataType: k[a2.field.type], min: a2.domain.min, max: a2.domain.max }, qe(e)) : null;
}
function b(h) {
  "async" === h.mode && (h.functions.domain = function(n, d) {
    return h.standardFunctionAsync(n, d, async (u, m, f) => {
      if (ne(f, 2, 3, n, d), U(f[0])) {
        return T(Ge(f[0], ce(f[1]), void 0 === f[2] ? void 0 : f[2]), n);
      }
      if (H(f[0])) {
        await f[0]._ensureLoaded();
        return T(De(ce(f[1]), f[0], null, void 0 === f[2] ? void 0 : f[2]), n);
      }
      throw new a(n, r.InvalidParameter, d);
    });
  }, h.functions.subtypes = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, m, f) => {
      if (ne(f, 1, 1, o, i), U(f[0])) {
        const a2 = ze(f[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, qe(o)) : null;
      }
      if (H(f[0])) {
        await f[0]._ensureLoaded();
        const a2 = f[0].subtypes();
        return a2 ? N.convertObjectToArcadeDictionary(a2, qe(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  }, h.functions.domainname = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, l) => {
      if (ne(l, 2, 4, n, o), U(l[0]))
        return Ee(l[0], ce(l[1]), l[2], void 0 === l[3] ? void 0 : l[3]);
      if (H(l[0])) {
        await l[0]._ensureLoaded();
        const n2 = De(ce(l[1]), l[0], null, void 0 === l[3] ? void 0 : l[3]);
        return xe(n2, l[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domainname", min: 2, max: 4 }), h.functions.domaincode = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, m) => {
      if (ne(m, 2, 4, n, o), U(m[0]))
        return Ve(m[0], ce(m[1]), m[2], void 0 === m[3] ? void 0 : m[3]);
      if (H(m[0])) {
        await m[0]._ensureLoaded();
        const n2 = De(ce(m[1]), m[0], null, void 0 === m[3] ? void 0 : m[3]);
        return Ze(n2, m[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domaincode", min: 2, max: 4 })), h.functions.text = function(n, a2) {
    return h.standardFunctionAsync(n, a2, (e, r2, o) => {
      if (ne(o, 1, 2, n, a2), !H(o[0]))
        return de(o[0], o[1]);
      {
        const n2 = L(o[1], "");
        if ("" === n2)
          return o[0].castToText();
        if ("schema" === n2.toLowerCase())
          return o[0].convertToText("schema", e.abortSignal);
        if ("featureset" === n2.toLowerCase())
          return o[0].convertToText("featureset", e.abortSignal);
      }
    });
  }, h.functions.gdbversion = function(n, o) {
    return h.standardFunctionAsync(n, o, async (i, s, d) => {
      if (ne(d, 1, 1, n, o), U(d[0]))
        return d[0].gdbVersion();
      if (H(d[0])) {
        return (await d[0].load()).gdbVersion;
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.functions.schema = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, d, m) => {
      if (ne(m, 1, 1, o, i), H(m[0]))
        return await m[0].load(), N.convertObjectToArcadeDictionary(m[0].schema(), qe(o));
      if (U(m[0])) {
        const a2 = Ue(m[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, qe(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  };
}
export {
  b as registerFunctions
};
