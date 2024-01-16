import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
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
var e, r, i, o = { exports: {} };
o.exports, e = o, o.exports, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (r = r || __filename), i = function(t) {
  var n2, e2;
  (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise(function(t2, r2) {
    n2 = t2, e2 = r2;
  });
  var i2, o2, u2, s2, a, c, f = Object.assign({}, t), p = "object" == typeof window, l = "function" == typeof importScripts, h = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, d = "";
  function m(n3) {
    return t.locateFile ? t.locateFile(n3, d) : d + n3;
  }
  h ? (d = l ? require("path").dirname(d) + "/" : __dirname + "/", c = () => {
    a || (s2 = require("fs"), a = require("path"));
  }, i2 = function(t2, n3) {
    return c(), t2 = a.normalize(t2), s2.readFileSync(t2, n3 ? void 0 : "utf8");
  }, u2 = (t2) => {
    var n3 = i2(t2, true);
    return n3.buffer || (n3 = new Uint8Array(n3)), n3;
  }, o2 = (t2, n3, e3) => {
    c(), t2 = a.normalize(t2), s2.readFile(t2, function(t3, r2) {
      t3 ? e3(t3) : n3(r2.buffer);
    });
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(t2) {
    if (!(t2 instanceof ht))
      throw t2;
  }), process.on("unhandledRejection", function(t2) {
    throw t2;
  }), t.inspect = function() {
    return "[Emscripten Module object]";
  }) : (p || l) && (l ? d = self.location.href : "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), r && (d = r), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", i2 = (t2) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t2, false), n3.send(null), n3.responseText;
  }, l && (u2 = (t2) => {
    var n3 = new XMLHttpRequest();
    return n3.open("GET", t2, false), n3.responseType = "arraybuffer", n3.send(null), new Uint8Array(n3.response);
  }), o2 = (t2, n3, e3) => {
    var r2 = new XMLHttpRequest();
    r2.open("GET", t2, true), r2.responseType = "arraybuffer", r2.onload = () => {
      200 == r2.status || 0 == r2.status && r2.response ? n3(r2.response) : e3();
    }, r2.onerror = e3, r2.send(null);
  }), t.print || console.log.bind(console);
  var _, y, g = t.printErr || console.warn.bind(console);
  Object.assign(t, f), f = null, t.arguments && t.arguments, t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (_ = t.wasmBinary), t.noExitRuntime, "object" != typeof WebAssembly && L("no native wasm support detected");
  var v, w, b, A, R, x, S = false, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function j(t2, n3, e3) {
    for (var r2 = n3 + e3, i3 = n3; t2[i3] && !(i3 >= r2); )
      ++i3;
    if (i3 - n3 > 16 && t2.buffer && P)
      return P.decode(t2.subarray(n3, i3));
    for (var o3 = ""; n3 < i3; ) {
      var u3 = t2[n3++];
      if (128 & u3) {
        var s3 = 63 & t2[n3++];
        if (192 != (224 & u3)) {
          var a2 = 63 & t2[n3++];
          if ((u3 = 224 == (240 & u3) ? (15 & u3) << 12 | s3 << 6 | a2 : (7 & u3) << 18 | s3 << 12 | a2 << 6 | 63 & t2[n3++]) < 65536)
            o3 += String.fromCharCode(u3);
          else {
            var c2 = u3 - 65536;
            o3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else
          o3 += String.fromCharCode((31 & u3) << 6 | s3);
      } else
        o3 += String.fromCharCode(u3);
    }
    return o3;
  }
  function E(t2, n3) {
    return t2 ? j(b, t2, n3) : "";
  }
  function I(n3) {
    v = n3, t.HEAP8 = w = new Int8Array(n3), t.HEAP16 = new Int16Array(n3), t.HEAP32 = A = new Int32Array(n3), t.HEAPU8 = b = new Uint8Array(n3), t.HEAPU16 = new Uint16Array(n3), t.HEAPU32 = R = new Uint32Array(n3), t.HEAPF32 = new Float32Array(n3), t.HEAPF64 = new Float64Array(n3);
  }
  t.INITIAL_MEMORY;
  var T = [], H = [], D = [];
  function M() {
    if (t.preRun)
      for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length; )
        U(t.preRun.shift());
    V(T);
  }
  function O() {
    V(H);
  }
  function W() {
    if (t.postRun)
      for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length; )
        C(t.postRun.shift());
    V(D);
  }
  function U(t2) {
    T.unshift(t2);
  }
  function q(t2) {
    H.unshift(t2);
  }
  function C(t2) {
    D.unshift(t2);
  }
  var F = 0, B = null;
  function k(n3) {
    F++, t.monitorRunDependencies && t.monitorRunDependencies(F);
  }
  function z(n3) {
    if (F--, t.monitorRunDependencies && t.monitorRunDependencies(F), 0 == F && B) {
      var e3 = B;
      B = null, e3();
    }
  }
  function L(n3) {
    t.onAbort && t.onAbort(n3), g(n3 = "Aborted(" + n3 + ")"), S = true, n3 += ". Build with -sASSERTIONS for more info.";
    var r2 = new WebAssembly.RuntimeError(n3);
    throw e2(r2), r2;
  }
  var G, X = "data:application/octet-stream;base64,";
  function N(t2) {
    return t2.startsWith(X);
  }
  function Y(t2) {
    return t2.startsWith("file://");
  }
  function J(t2) {
    try {
      if (t2 == G && _)
        return new Uint8Array(_);
      if (u2)
        return u2(t2);
      throw "both async and sync fetching of the wasm failed";
    } catch (g2) {
      L(g2);
    }
  }
  function K() {
    if (!_ && (p || l)) {
      if ("function" == typeof fetch && !Y(G))
        return fetch(G, { credentials: "same-origin" }).then(function(t2) {
          if (!t2.ok)
            throw "failed to load wasm binary file at '" + G + "'";
          return t2.arrayBuffer();
        }).catch(function() {
          return J(G);
        });
      if (o2)
        return new Promise(function(t2, n3) {
          o2(G, function(n4) {
            t2(new Uint8Array(n4));
          }, n3);
        });
    }
    return Promise.resolve().then(function() {
      return J(G);
    });
  }
  function Q() {
    var n3 = { a: ct };
    function r2(n4, e3) {
      var r3 = n4.exports;
      t.asm = r3, I((y = t.asm.g).buffer), x = t.asm.m, q(t.asm.h), z();
    }
    function i3(t2) {
      r2(t2.instance);
    }
    function o3(t2) {
      return K().then(function(t3) {
        return WebAssembly.instantiate(t3, n3);
      }).then(function(t3) {
        return t3;
      }).then(t2, function(t3) {
        g("failed to asynchronously prepare wasm: " + t3), L(t3);
      });
    }
    function u3() {
      return _ || "function" != typeof WebAssembly.instantiateStreaming || N(G) || Y(G) || h || "function" != typeof fetch ? o3(i3) : fetch(G, { credentials: "same-origin" }).then(function(t2) {
        return WebAssembly.instantiateStreaming(t2, n3).then(i3, function(t3) {
          return g("wasm streaming compile failed: " + t3), g("falling back to ArrayBuffer instantiation"), o3(i3);
        });
      });
    }
    if (k(), t.instantiateWasm)
      try {
        return t.instantiateWasm(n3, r2);
      } catch (s3) {
        return g("Module.instantiateWasm callback failed with error: " + s3), false;
      }
    return u3().catch(e2), {};
  }
  function V(n3) {
    for (; n3.length > 0; ) {
      var e3 = n3.shift();
      if ("function" != typeof e3) {
        var r2 = e3.func;
        "number" == typeof r2 ? void 0 === e3.arg ? $(r2)() : $(r2)(e3.arg) : r2(void 0 === e3.arg ? null : e3.arg);
      } else
        e3(t);
    }
  }
  N(G = "lerc-wasm.wasm") || (G = m(G));
  var Z = [];
  function $(t2) {
    var n3 = Z[t2];
    return n3 || (t2 >= Z.length && (Z.length = t2 + 1), Z[t2] = n3 = x.get(t2)), n3;
  }
  function tt(t2, n3, e3, r2) {
    L("Assertion failed: " + E(t2) + ", at: " + [n3 ? E(n3) : "unknown filename", e3, r2 ? E(r2) : "unknown function"]);
  }
  function nt(t2) {
    return ft(t2 + 24) + 24;
  }
  function et(t2) {
    this.excPtr = t2, this.ptr = t2 - 24, this.set_type = function(t3) {
      R[this.ptr + 4 >> 2] = t3;
    }, this.get_type = function() {
      return R[this.ptr + 4 >> 2];
    }, this.set_destructor = function(t3) {
      R[this.ptr + 8 >> 2] = t3;
    }, this.get_destructor = function() {
      return R[this.ptr + 8 >> 2];
    }, this.set_refcount = function(t3) {
      A[this.ptr >> 2] = t3;
    }, this.set_caught = function(t3) {
      t3 = t3 ? 1 : 0, w[this.ptr + 12 >> 0] = t3;
    }, this.get_caught = function() {
      return 0 != w[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(t3) {
      t3 = t3 ? 1 : 0, w[this.ptr + 13 >> 0] = t3;
    }, this.get_rethrown = function() {
      return 0 != w[this.ptr + 13 >> 0];
    }, this.init = function(t3, n3) {
      this.set_adjusted_ptr(0), this.set_type(t3), this.set_destructor(n3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var t3 = A[this.ptr >> 2];
      A[this.ptr >> 2] = t3 + 1;
    }, this.release_ref = function() {
      var t3 = A[this.ptr >> 2];
      return A[this.ptr >> 2] = t3 - 1, 1 === t3;
    }, this.set_adjusted_ptr = function(t3) {
      R[this.ptr + 16 >> 2] = t3;
    }, this.get_adjusted_ptr = function() {
      return R[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (lt(this.get_type()))
        return R[this.excPtr >> 2];
      var t3 = this.get_adjusted_ptr();
      return 0 !== t3 ? t3 : this.excPtr;
    };
  }
  function rt(t2, n3, e3) {
    throw new et(t2).init(n3, e3), t2;
  }
  function it() {
    L("");
  }
  function ot(t2, n3, e3) {
    b.copyWithin(t2, n3, n3 + e3);
  }
  function ut() {
    return 2147483648;
  }
  function st(t2) {
    try {
      return y.grow(t2 - v.byteLength + 65535 >>> 16), I(y.buffer), 1;
    } catch (n3) {
    }
  }
  function at(t2) {
    var n3 = b.length;
    t2 >>>= 0;
    var e3 = ut();
    if (t2 > e3)
      return false;
    let r2 = (t3, n4) => t3 + (n4 - t3 % n4) % n4;
    for (var i3 = 1; i3 <= 4; i3 *= 2) {
      var o3 = n3 * (1 + 0.2 / i3);
      if (o3 = Math.min(o3, t2 + 100663296), st(Math.min(e3, r2(Math.max(t2, o3), 65536))))
        return true;
    }
    return false;
  }
  var ct = { a: tt, c: nt, b: rt, d: it, f: ot, e: at };
  Q(), t.___wasm_call_ctors = function() {
    return (t.___wasm_call_ctors = t.asm.h).apply(null, arguments);
  }, t._lerc_getBlobInfo = function() {
    return (t._lerc_getBlobInfo = t.asm.i).apply(null, arguments);
  }, t._lerc_getDataRanges = function() {
    return (t._lerc_getDataRanges = t.asm.j).apply(null, arguments);
  }, t._lerc_decode = function() {
    return (t._lerc_decode = t.asm.k).apply(null, arguments);
  }, t._lerc_decode_4D = function() {
    return (t._lerc_decode_4D = t.asm.l).apply(null, arguments);
  };
  var ft = t._malloc = function() {
    return (ft = t._malloc = t.asm.n).apply(null, arguments);
  };
  t._free = function() {
    return (t._free = t.asm.o).apply(null, arguments);
  };
  var pt, lt = t.___cxa_is_pointer_type = function() {
    return (lt = t.___cxa_is_pointer_type = t.asm.p).apply(null, arguments);
  };
  function ht(t2) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t2 + ")", this.status = t2;
  }
  function dt(e3) {
    function r2() {
      pt || (pt = true, t.calledRun = true, S || (O(), n2(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), W()));
    }
    F > 0 || (M(), F > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t.setStatus("");
      }, 1), r2();
    }, 1)) : r2()));
  }
  if (B = function t2() {
    pt || dt(), pt || (B = t2);
  }, t.run = dt, t.preInit)
    for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0; )
      t.preInit.pop()();
  return dt(), t.ready;
}, e.exports = i;
var u = o.exports;
const s = n({ __proto__: null, default: o$1(u) }, [u]);
export {
  s as l
};
