import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function t(n, t2) {
  for (var e2 = 0; e2 < t2.length; e2++) {
    const r2 = t2[e2];
    if ("string" != typeof r2 && !Array.isArray(r2)) {
      for (const t3 in r2)
        if ("default" !== t3 && !(t3 in n)) {
          const e3 = Object.getOwnPropertyDescriptor(r2, t3);
          e3 && Object.defineProperty(n, t3, e3.get ? e3 : { enumerable: true, get: () => r2[t3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var e, r, o = { exports: {} };
o.exports, e = o, void 0 !== (r = /* @__PURE__ */ function() {
  function n(n2) {
    const t2 = n2.locateFile, r2 = {};
    var o2 = void 0 !== o2 ? o2 : {};
    const i2 = (() => {
      let n3;
      return { resolve: (t3) => n3(t3), promise: new Promise((t3) => n3 = t3) };
    })(), a2 = () => i2.promise;
    o2.locateFile = t2, o2.onRuntimeInitialized = () => {
      i2.resolve(r2);
    }, r2.Module = o2, r2.whenLoaded = a2;
    var u, s = {};
    for (u in o2)
      o2.hasOwnProperty(u) && (s[u] = o2[u]);
    var f, c, l, p, m, h = "object" == typeof window, d = "function" == typeof importScripts, y = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, g = "";
    function v(n3) {
      return o2.locateFile ? o2.locateFile(n3, g) : g + n3;
    }
    y ? (g = d ? require("path").dirname(g) + "/" : __dirname + "/", f = function(n3, t3) {
      return p || (p = require("fs")), m || (m = require("path")), n3 = m.normalize(n3), p.readFileSync(n3, t3 ? null : "utf8");
    }, l = function(n3) {
      var t3 = f(n3, true);
      return t3.buffer || (t3 = new Uint8Array(t3)), j(t3.buffer), t3;
    }, c = function(n3, t3, e2) {
      p || (p = require("fs")), m || (m = require("path")), n3 = m.normalize(n3), p.readFile(n3, function(n4, r3) {
        n4 ? e2(n4) : t3(r3.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), e.exports = o2, process.on("uncaughtException", function(n3) {
      if (!(n3 instanceof Pn))
        throw n3;
    }), process.on("unhandledRejection", Q), o2.inspect = function() {
      return "[Emscripten Module object]";
    }) : (h || d) && (d ? g = self.location.href : "undefined" != typeof document && document.currentScript && (g = document.currentScript.src), g = 0 !== g.indexOf("blob:") ? g.substr(0, g.lastIndexOf("/") + 1) : "", f = function(n3) {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", n3, false), t3.send(null), t3.responseText;
    }, d && (l = function(n3) {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", n3, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
    }), c = function(n3, t3, e2) {
      var r3 = new XMLHttpRequest();
      r3.open("GET", n3, true), r3.responseType = "arraybuffer", r3.onload = function() {
        200 == r3.status || 0 == r3.status && r3.response ? t3(r3.response) : e2();
      }, r3.onerror = e2, r3.send(null);
    });
    var w = o2.print || console.log.bind(console), b = o2.printErr || console.warn.bind(console);
    for (u in s)
      s.hasOwnProperty(u) && (o2[u] = s[u]);
    s = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit;
    var A, _, E = 0, R = function(n3) {
      E = n3;
    }, P = function() {
      return E;
    };
    o2.wasmBinary && (A = o2.wasmBinary), o2.noExitRuntime, "object" != typeof WebAssembly && Q("no native wasm support detected");
    var S = false;
    function j(n3, t3) {
      n3 || Q("Assertion failed: " + t3);
    }
    var T, x, I, H, M = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function F(n3, t3, e2) {
      for (var r3 = t3 + e2, o3 = t3; n3[o3] && !(o3 >= r3); )
        ++o3;
      if (o3 - t3 > 16 && n3.subarray && M)
        return M.decode(n3.subarray(t3, o3));
      for (var i3 = ""; t3 < o3; ) {
        var a3 = n3[t3++];
        if (128 & a3) {
          var u2 = 63 & n3[t3++];
          if (192 != (224 & a3)) {
            var s2 = 63 & n3[t3++];
            if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u2 << 6 | s2 : (7 & a3) << 18 | u2 << 12 | s2 << 6 | 63 & n3[t3++]) < 65536)
              i3 += String.fromCharCode(a3);
            else {
              var f2 = a3 - 65536;
              i3 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
            }
          } else
            i3 += String.fromCharCode((31 & a3) << 6 | u2);
        } else
          i3 += String.fromCharCode(a3);
      }
      return i3;
    }
    function q(n3, t3) {
      return n3 ? F(x, n3, t3) : "";
    }
    function C(n3, t3) {
      return n3 % t3 > 0 && (n3 += t3 - n3 % t3), n3;
    }
    function O(n3) {
      T = n3, o2.HEAP8 = new Int8Array(n3), o2.HEAP16 = new Int16Array(n3), o2.HEAP32 = I = new Int32Array(n3), o2.HEAPU8 = x = new Uint8Array(n3), o2.HEAPU16 = new Uint16Array(n3), o2.HEAPU32 = new Uint32Array(n3), o2.HEAPF32 = new Float32Array(n3), o2.HEAPF64 = new Float64Array(n3);
    }
    o2.INITIAL_MEMORY;
    var W = [], U = [], L = [];
    function k() {
      if (o2.preRun)
        for ("function" == typeof o2.preRun && (o2.preRun = [o2.preRun]); o2.preRun.length; )
          z(o2.preRun.shift());
      on(W);
    }
    function B() {
      on(U);
    }
    function D() {
      if (o2.postRun)
        for ("function" == typeof o2.postRun && (o2.postRun = [o2.postRun]); o2.postRun.length; )
          G(o2.postRun.shift());
      on(L);
    }
    function z(n3) {
      W.unshift(n3);
    }
    function N(n3) {
      U.unshift(n3);
    }
    function G(n3) {
      L.unshift(n3);
    }
    var X = 0, Y = null;
    function J(n3) {
      X++, o2.monitorRunDependencies && o2.monitorRunDependencies(X);
    }
    function K(n3) {
      if (X--, o2.monitorRunDependencies && o2.monitorRunDependencies(X), 0 == X && Y) {
        var t3 = Y;
        Y = null, t3();
      }
    }
    function Q(n3) {
      throw o2.onAbort && o2.onAbort(n3), b(n3 += ""), S = true, n3 = "abort(" + n3 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(n3);
    }
    o2.preloadedImages = {}, o2.preloadedAudios = {};
    var V, Z = "data:application/octet-stream;base64,";
    function $(n3) {
      return n3.startsWith(Z);
    }
    function nn(n3) {
      return n3.startsWith("file://");
    }
    function tn(n3) {
      try {
        if (n3 == V && A)
          return new Uint8Array(A);
        if (l)
          return l(n3);
        throw "both async and sync fetching of the wasm failed";
      } catch (b2) {
        Q(b2);
      }
    }
    function en() {
      if (!A && (h || d)) {
        if ("function" == typeof fetch && !nn(V))
          return fetch(V, { credentials: "same-origin" }).then(function(n3) {
            if (!n3.ok)
              throw "failed to load wasm binary file at '" + V + "'";
            return n3.arrayBuffer();
          }).catch(function() {
            return tn(V);
          });
        if (c)
          return new Promise(function(n3, t3) {
            c(V, function(t4) {
              n3(new Uint8Array(t4));
            }, t3);
          });
      }
      return Promise.resolve().then(function() {
        return tn(V);
      });
    }
    function rn() {
      var n3 = { a: hn };
      function t3(n4, t4) {
        var e3 = n4.exports;
        o2.asm = e3, O((_ = o2.asm.m).buffer), H = o2.asm.q, N(o2.asm.n), K();
      }
      function e2(n4) {
        t3(n4.instance);
      }
      function r3(t4) {
        return en().then(function(t5) {
          return WebAssembly.instantiate(t5, n3);
        }).then(t4, function(n4) {
          b("failed to asynchronously prepare wasm: " + n4), Q(n4);
        });
      }
      function i3() {
        return A || "function" != typeof WebAssembly.instantiateStreaming || $(V) || nn(V) || "function" != typeof fetch ? r3(e2) : fetch(V, { credentials: "same-origin" }).then(function(t4) {
          return WebAssembly.instantiateStreaming(t4, n3).then(e2, function(n4) {
            return b("wasm streaming compile failed: " + n4), b("falling back to ArrayBuffer instantiation"), r3(e2);
          });
        });
      }
      if (J(), o2.instantiateWasm)
        try {
          return o2.instantiateWasm(n3, t3);
        } catch (a3) {
          return b("Module.instantiateWasm callback failed with error: " + a3), false;
        }
      return i3(), {};
    }
    function on(n3) {
      for (; n3.length > 0; ) {
        var t3 = n3.shift();
        if ("function" != typeof t3) {
          var e2 = t3.func;
          "number" == typeof e2 ? void 0 === t3.arg ? H.get(e2)() : H.get(e2)(t3.arg) : e2(void 0 === t3.arg ? null : t3.arg);
        } else
          t3(o2);
      }
    }
    function an() {
      throw "longjmp";
    }
    function un(n3, t3, e2) {
      x.copyWithin(n3, t3, t3 + e2);
    }
    function sn(n3) {
      try {
        return _.grow(n3 - T.byteLength + 65535 >>> 16), O(_.buffer), 1;
      } catch (t3) {
      }
    }
    function fn(n3) {
      var t3 = x.length, e2 = 2147483648;
      if ((n3 >>>= 0) > e2)
        return false;
      for (var r3 = 1; r3 <= 4; r3 *= 2) {
        var o3 = t3 * (1 + 0.2 / r3);
        if (o3 = Math.min(o3, n3 + 100663296), sn(Math.min(e2, C(Math.max(n3, o3), 65536))))
          return true;
      }
      return false;
    }
    $(V = "libtess.wasm") || (V = v(V));
    var cn = { mappings: {}, buffers: [null, [], []], printChar: function(n3, t3) {
      var e2 = cn.buffers[n3];
      0 === t3 || 10 === t3 ? ((1 === n3 ? w : b)(F(e2, 0)), e2.length = 0) : e2.push(t3);
    }, varargs: void 0, get: function() {
      return cn.varargs += 4, I[cn.varargs - 4 >> 2];
    }, getStr: function(n3) {
      return q(n3);
    }, get64: function(n3, t3) {
      return n3;
    } };
    function ln(n3, t3, e2, r3) {
      for (var o3 = 0, i3 = 0; i3 < e2; i3++) {
        for (var a3 = I[t3 + 8 * i3 >> 2], u2 = I[t3 + (8 * i3 + 4) >> 2], s2 = 0; s2 < u2; s2++)
          cn.printChar(n3, x[a3 + s2]);
        o3 += u2;
      }
      return I[r3 >> 2] = o3, 0;
    }
    function pn() {
      return P();
    }
    function mn(n3) {
      R(n3);
    }
    var hn = { h: an, l: un, g: fn, f: ln, b: pn, k: _n, d: An, j: En, i: Rn, e: bn, c: wn, a: mn };
    rn(), o2.___wasm_call_ctors = function() {
      return (o2.___wasm_call_ctors = o2.asm.n).apply(null, arguments);
    }, o2._malloc = function() {
      return (o2._malloc = o2.asm.o).apply(null, arguments);
    }, o2._free = function() {
      return (o2._free = o2.asm.p).apply(null, arguments);
    }, o2._triangulate = function() {
      return (o2._triangulate = o2.asm.r).apply(null, arguments);
    };
    var dn, yn = o2.stackSave = function() {
      return (yn = o2.stackSave = o2.asm.s).apply(null, arguments);
    }, gn = o2.stackRestore = function() {
      return (gn = o2.stackRestore = o2.asm.t).apply(null, arguments);
    }, vn = o2._setThrew = function() {
      return (vn = o2._setThrew = o2.asm.u).apply(null, arguments);
    };
    function wn(n3, t3, e2) {
      var r3 = yn();
      try {
        H.get(n3)(t3, e2);
      } catch (o3) {
        if (gn(r3), o3 !== o3 + 0 && "longjmp" !== o3)
          throw o3;
        vn(1, 0);
      }
    }
    function bn(n3, t3) {
      var e2 = yn();
      try {
        H.get(n3)(t3);
      } catch (r3) {
        if (gn(e2), r3 !== r3 + 0 && "longjmp" !== r3)
          throw r3;
        vn(1, 0);
      }
    }
    function An(n3, t3) {
      var e2 = yn();
      try {
        return H.get(n3)(t3);
      } catch (r3) {
        if (gn(e2), r3 !== r3 + 0 && "longjmp" !== r3)
          throw r3;
        vn(1, 0);
      }
    }
    function _n(n3) {
      var t3 = yn();
      try {
        return H.get(n3)();
      } catch (e2) {
        if (gn(t3), e2 !== e2 + 0 && "longjmp" !== e2)
          throw e2;
        vn(1, 0);
      }
    }
    function En(n3, t3, e2) {
      var r3 = yn();
      try {
        return H.get(n3)(t3, e2);
      } catch (o3) {
        if (gn(r3), o3 !== o3 + 0 && "longjmp" !== o3)
          throw o3;
        vn(1, 0);
      }
    }
    function Rn(n3, t3, e2, r3) {
      var o3 = yn();
      try {
        return H.get(n3)(t3, e2, r3);
      } catch (i3) {
        if (gn(o3), i3 !== i3 + 0 && "longjmp" !== i3)
          throw i3;
        vn(1, 0);
      }
    }
    function Pn(n3) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + n3 + ")", this.status = n3;
    }
    function Sn(n3) {
      function t3() {
        dn || (dn = true, o2.calledRun = true, S || (B(), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), D()));
      }
      X > 0 || (k(), X > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          o2.setStatus("");
        }, 1), t3();
      }, 1)) : t3()));
    }
    if (Y = function n3() {
      dn || Sn(), dn || (Y = n3);
    }, o2.run = Sn, o2.preInit)
      for ("function" == typeof o2.preInit && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
        o2.preInit.pop()();
    Sn();
    let jn = null, Tn = null, xn = null, In = null;
    const Hn = r2.Module, Mn = 2, Fn = 4e3;
    let qn = 0;
    const Cn = (n3, t3, e2) => {
      jn || (jn = Hn._triangulate);
      let r3 = Hn.HEAPF32;
      const o3 = Hn.HEAP32.BYTES_PER_ELEMENT, i3 = 2, a3 = r3.BYTES_PER_ELEMENT;
      e2 > qn && (qn = e2, xn && (Hn._free(xn), xn = 0), Tn && (Hn._free(Tn), Tn = 0)), xn || (xn = Hn._malloc(e2 * a3)), In || (In = Hn._malloc(Fn * o3));
      const u2 = e2 * Mn;
      Tn || (Tn = Hn._malloc(u2 * a3)), r3 = Hn.HEAPF32, r3.set(n3, xn / a3), Hn.HEAP32.set(t3, In / o3);
      const s2 = u2 / i3, f2 = jn(xn, In, Math.min(t3.length, Fn), i3, Tn, s2), c2 = f2 * i3;
      r3 = Hn.HEAPF32;
      const l2 = r3.slice(Tn / a3, Tn / a3 + c2), p2 = {};
      return p2.buffer = l2, p2.vertexCount = f2, p2;
    };
    return r2.triangulate = Cn, r2.whenLoaded();
  }
  return { load: n };
}()) && (e.exports = r);
var i = o.exports;
const a = t({ __proto__: null, default: o$1(i) }, [i]);
export {
  a as l
};
