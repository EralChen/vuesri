import { a as ae, H, $ as Ve, d as de, B, a0 as Ae, b as a, r, a1 as qe, N, q as Be, a2 as Ue, a3 as Te, a4 as He, a5 as ke, a6 as ye, v as Y, a7 as Ke, a8 as k } from "./chunk-piwgY2EI.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-MrDe64fM.js";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
function T(a2, e) {
  return a2 && a2.domain ? "coded-value" === a2.domain.type || "codedValue" === a2.domain.type ? N.convertObjectToArcadeDictionary({ type: "codedValue", name: a2.domain.name, dataType: k[a2.field.type], codedValues: a2.domain.codedValues.map((n) => ({ name: n.name, code: n.code })) }, Be(e)) : N.convertObjectToArcadeDictionary({ type: "range", name: a2.domain.name, dataType: k[a2.field.type], min: a2.domain.minValue, max: a2.domain.maxValue }, Be(e)) : null;
}
function b(h) {
  "async" === h.mode && (h.functions.domain = function(n, d) {
    return h.standardFunctionAsync(n, d, async (u, m, f) => {
      if (ae(f, 2, 3, n, d), H(f[0])) {
        return T(Ve(f[0], de(f[1]), void 0 === f[2] ? void 0 : f[2]), n);
      }
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        return T(Ae(de(f[1]), f[0], null, void 0 === f[2] ? void 0 : f[2]), n);
      }
      throw new a(n, r.InvalidParameter, d);
    });
  }, h.functions.subtypes = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, m, f) => {
      if (ae(f, 1, 1, o, i), H(f[0])) {
        const a2 = qe(f[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        const a2 = f[0].subtypeMetaData();
        return a2 ? N.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  }, h.functions.domainname = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, l) => {
      if (ae(l, 2, 4, n, o), H(l[0]))
        return Ue(l[0], de(l[1]), l[2], void 0 === l[3] ? void 0 : l[3]);
      if (B(l[0])) {
        await l[0]._ensureLoaded();
        const n2 = Ae(de(l[1]), l[0], null, void 0 === l[3] ? void 0 : l[3]);
        return Te(n2, l[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domainname", min: 2, max: 4 }), h.functions.domaincode = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, m) => {
      if (ae(m, 2, 4, n, o), H(m[0]))
        return He(m[0], de(m[1]), m[2], void 0 === m[3] ? void 0 : m[3]);
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        const n2 = Ae(de(m[1]), m[0], null, void 0 === m[3] ? void 0 : m[3]);
        return ke(n2, m[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domaincode", min: 2, max: 4 })), h.functions.text = function(n, a2) {
    return h.standardFunctionAsync(n, a2, (e, r2, o) => {
      if (ae(o, 1, 2, n, a2), !B(o[0]))
        return ye(o[0], o[1]);
      {
        const n2 = Y(o[1], "");
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
      if (ae(d, 1, 1, n, o), H(d[0]))
        return d[0].gdbVersion();
      if (B(d[0])) {
        return (await d[0].load()).gdbVersion;
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.functions.schema = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, d, m) => {
      if (ae(m, 1, 1, o, i), B(m[0]))
        return await m[0].load(), N.convertObjectToArcadeDictionary(m[0].schema(), Be(o));
      if (H(m[0])) {
        const a2 = Ke(m[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  };
}
export {
  b as registerFunctions
};
