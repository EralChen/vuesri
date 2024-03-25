import { bk as o$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function n(t, n2) {
  for (var e2 = 0; e2 < n2.length; e2++) {
    const r2 = n2[e2];
    if ("string" != typeof r2 && !Array.isArray(r2)) {
      for (const n3 in r2)
        if ("default" !== n3 && !(n3 in t)) {
          const e3 = Object.getOwnPropertyDescriptor(r2, n3);
          e3 && Object.defineProperty(t, n3, e3.get ? e3 : { enumerable: true, get: () => r2[n3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var e, r, o, i = { exports: {} };
e = i, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, o = function(t = {}) {
  var n2, e2, o2 = t;
  o2.ready = new Promise((t2, r2) => {
    n2 = t2, e2 = r2;
  });
  var i2 = Object.assign({}, o2), a2 = "object" == typeof window, u2 = "function" == typeof importScripts;
  "object" == typeof process && "object" == typeof process.versions && process.versions.node;
  var f, s = "";
  function c(t2) {
    return o2.locateFile ? o2.locateFile(t2, s) : s + t2;
  }
  (a2 || u2) && (u2 ? s = self.location.href : "undefined" != typeof document && document.currentScript && (s = document.currentScript.src), r && (s = r), s = 0 !== s.indexOf("blob:") ? s.substr(0, s.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", u2 && (f = (t2) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t2, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
  }));
  var l, p, h = o2.print || console.log.bind(console), m = o2.printErr || console.error.bind(console);
  Object.assign(o2, i2), i2 = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit, o2.wasmBinary && (l = o2.wasmBinary), "object" != typeof WebAssembly && O("no native wasm support detected");
  var y, d, v = false;
  function g() {
    var t2 = p.buffer;
    o2.HEAP8 = new Int8Array(t2), o2.HEAP16 = new Int16Array(t2), o2.HEAPU8 = y = new Uint8Array(t2), o2.HEAPU16 = new Uint16Array(t2), o2.HEAP32 = new Int32Array(t2), o2.HEAPU32 = d = new Uint32Array(t2), o2.HEAPF32 = new Float32Array(t2), o2.HEAPF64 = new Float64Array(t2);
  }
  var b = [], w = [], A = [];
  function E() {
    if (o2.preRun)
      for ("function" == typeof o2.preRun && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        S(o2.preRun.shift());
    q(b);
  }
  function R() {
    q(w);
  }
  function P() {
    if (o2.postRun)
      for ("function" == typeof o2.postRun && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        H(o2.postRun.shift());
    q(A);
  }
  function S(t2) {
    b.unshift(t2);
  }
  function _(t2) {
    w.unshift(t2);
  }
  function H(t2) {
    A.unshift(t2);
  }
  var j = 0, I = null;
  function x(t2) {
    j++, o2.monitorRunDependencies?.(j);
  }
  function T(t2) {
    if (j--, o2.monitorRunDependencies?.(j), 0 == j && I) {
      var n3 = I;
      I = null, n3();
    }
  }
  function O(t2) {
    o2.onAbort?.(t2), m(t2 = "Aborted(" + t2 + ")"), v = true, t2 += ". Build with -sASSERTIONS for more info.";
    var n3 = new WebAssembly.RuntimeError(t2);
    throw e2(n3), n3;
  }
  var W, C = "data:application/octet-stream;base64,", F = (t2) => t2.startsWith(C);
  function M(t2) {
    if (t2 == W && l)
      return new Uint8Array(l);
    if (f)
      return f(t2);
    throw "both async and sync fetching of the wasm failed";
  }
  function U(t2) {
    return l || !a2 && !u2 || "function" != typeof fetch ? Promise.resolve().then(() => M(t2)) : fetch(t2, { credentials: "same-origin" }).then((n3) => {
      if (!n3.ok)
        throw "failed to load wasm binary file at '" + t2 + "'";
      return n3.arrayBuffer();
    }).catch(() => M(t2));
  }
  function B(t2, n3, e3) {
    return U(t2).then((t3) => WebAssembly.instantiate(t3, n3)).then((t3) => t3).then(e3, (t3) => {
      m(`failed to asynchronously prepare wasm: ${t3}`), O(t3);
    });
  }
  function D(t2, n3, e3, r2) {
    return t2 || "function" != typeof WebAssembly.instantiateStreaming || F(n3) || "function" != typeof fetch ? B(n3, e3, r2) : fetch(n3, { credentials: "same-origin" }).then((t3) => WebAssembly.instantiateStreaming(t3, e3).then(r2, function(t4) {
      return m(`wasm streaming compile failed: ${t4}`), m("falling back to ArrayBuffer instantiation"), B(n3, e3, r2);
    }));
  }
  function k() {
    var t2 = { a: tt };
    function n3(t3, n4) {
      return nt = t3.exports, p = nt.i, g(), L = nt.m, _(nt.j), T(), nt;
    }
    function r2(t3) {
      n3(t3.instance);
    }
    if (x(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(t2, n3);
      } catch (i3) {
        m(`Module.instantiateWasm callback failed with error: ${i3}`), e2(i3);
      }
    return D(l, W, t2, r2).catch(e2), {};
  }
  F(W = "libtess.wasm") || (W = c(W));
  var q = (t2) => {
    for (; t2.length > 0; )
      t2.shift()(o2);
  };
  o2.noExitRuntime;
  var L, z = () => {
    throw 1 / 0;
  }, N = (t2, n3, e3) => y.copyWithin(t2, n3, n3 + e3), $ = () => 2147483648, Y = (t2) => {
    var n3 = (t2 - p.buffer.byteLength + 65535) / 65536;
    try {
      return p.grow(n3), g(), 1;
    } catch (e3) {
    }
  }, G = (t2) => {
    var n3 = y.length;
    t2 >>>= 0;
    var e3 = $();
    if (t2 > e3)
      return false;
    for (var r2 = (t3, n4) => t3 + (n4 - t3 % n4) % n4, o3 = 1; o3 <= 4; o3 *= 2) {
      var i3 = n3 * (1 + 0.2 / o3);
      i3 = Math.min(i3, t2 + 100663296);
      var a3 = Math.min(e3, r2(Math.max(t2, i3), 65536));
      if (Y(a3))
        return true;
    }
    return false;
  }, X = [null, [], []], J = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, K = (t2, n3, e3) => {
    for (var r2 = n3 + e3, o3 = n3; t2[o3] && !(o3 >= r2); )
      ++o3;
    if (o3 - n3 > 16 && t2.buffer && J)
      return J.decode(t2.subarray(n3, o3));
    for (var i3 = ""; n3 < o3; ) {
      var a3 = t2[n3++];
      if (128 & a3) {
        var u3 = 63 & t2[n3++];
        if (192 != (224 & a3)) {
          var f2 = 63 & t2[n3++];
          if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u3 << 6 | f2 : (7 & a3) << 18 | u3 << 12 | f2 << 6 | 63 & t2[n3++]) < 65536)
            i3 += String.fromCharCode(a3);
          else {
            var s2 = a3 - 65536;
            i3 += String.fromCharCode(55296 | s2 >> 10, 56320 | 1023 & s2);
          }
        } else
          i3 += String.fromCharCode((31 & a3) << 6 | u3);
      } else
        i3 += String.fromCharCode(a3);
    }
    return i3;
  }, Q = (t2, n3) => {
    var e3 = X[t2];
    0 === n3 || 10 === n3 ? ((1 === t2 ? h : m)(K(e3, 0)), e3.length = 0) : e3.push(n3);
  }, V = [], Z = (t2) => {
    var n3 = V[t2];
    return n3 || (t2 >= V.length && (V.length = t2 + 1), V[t2] = n3 = L.get(t2)), n3;
  }, tt = { e: z, g: N, f: G, c: (t2, n3, e3, r2) => {
    for (var o3 = 0, i3 = 0; i3 < e3; i3++) {
      var a3 = d[n3 >> 2], u3 = d[n3 + 4 >> 2];
      n3 += 8;
      for (var f2 = 0; f2 < u3; f2++)
        Q(t2, y[a3 + f2]);
      o3 += u3;
    }
    return d[r2 >> 2] = o3, 0;
  }, b: ft, h: st, d: ut, a: at }, nt = k();
  o2._malloc = (t2) => (o2._malloc = nt.k)(t2), o2._free = (t2) => (o2._free = nt.l)(t2), o2._triangulate = (t2, n3, e3, r2, i3, a3) => (o2._triangulate = nt.n)(t2, n3, e3, r2, i3, a3);
  var et, rt = (t2, n3) => (rt = nt.o)(t2, n3), ot = () => (ot = nt.p)(), it = (t2) => (it = nt.q)(t2);
  function at(t2, n3, e3) {
    var r2 = ot();
    try {
      Z(t2)(n3, e3);
    } catch (o3) {
      if (it(r2), o3 !== o3 + 0)
        throw o3;
      rt(1, 0);
    }
  }
  function ut(t2, n3) {
    var e3 = ot();
    try {
      Z(t2)(n3);
    } catch (r2) {
      if (it(e3), r2 !== r2 + 0)
        throw r2;
      rt(1, 0);
    }
  }
  function ft(t2, n3) {
    var e3 = ot();
    try {
      return Z(t2)(n3);
    } catch (r2) {
      if (it(e3), r2 !== r2 + 0)
        throw r2;
      rt(1, 0);
    }
  }
  function st(t2, n3, e3, r2) {
    var o3 = ot();
    try {
      return Z(t2)(n3, e3, r2);
    } catch (i3) {
      if (it(o3), i3 !== i3 + 0)
        throw i3;
      rt(1, 0);
    }
  }
  function ct() {
    function t2() {
      et || (et = true, o2.calledRun = true, v || (R(), n2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), P()));
    }
    j > 0 || (E(), j > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), t2();
    }, 1)) : t2()));
  }
  if (I = function t2() {
    et || ct(), et || (I = t2);
  }, o2.preInit)
    for ("function" == typeof o2.preInit && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  ct();
  let lt = null, pt = null, ht = null, mt = null;
  const yt = 2, dt = 4e3;
  let vt = 0;
  const gt = (t2, n3, e3) => {
    lt || (lt = o2._triangulate);
    let r2 = o2.HEAPF32;
    const i3 = o2.HEAP32.BYTES_PER_ELEMENT, a3 = 2, u3 = r2.BYTES_PER_ELEMENT;
    e3 > vt && (vt = e3, ht && (o2._free(ht), ht = 0), pt && (o2._free(pt), pt = 0)), ht || (ht = o2._malloc(e3 * u3)), mt || (mt = o2._malloc(dt * i3));
    const f2 = e3 * yt;
    pt || (pt = o2._malloc(f2 * u3)), r2 = o2.HEAPF32, r2.set(t2, ht / u3), o2.HEAP32.set(n3, mt / i3);
    const s2 = f2 / a3, c2 = lt(ht, mt, Math.min(n3.length, dt), a3, pt, s2), l2 = c2 * a3;
    r2 = o2.HEAPF32;
    const p2 = r2.slice(pt / u3, pt / u3 + l2), h2 = {};
    return h2.buffer = p2, h2.vertexCount = c2, h2;
  };
  return o2.triangulate = gt, t.ready;
}, e.exports = o;
var a = i.exports;
const u = n({ __proto__: null, default: o$1(a) }, [a]);
export {
  u as l
};
