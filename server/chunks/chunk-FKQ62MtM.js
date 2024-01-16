import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function t(n, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    const e2 = t2[r2];
    if ("string" != typeof e2 && !Array.isArray(e2)) {
      for (const t3 in e2)
        if ("default" !== t3 && !(t3 in n)) {
          const r3 = Object.getOwnPropertyDescriptor(e2, t3);
          r3 && Object.defineProperty(n, t3, r3.get ? r3 : { enumerable: true, get: () => e2[t3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var r, e, i, o = { exports: {} };
o.exports, r = o, o.exports, e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (e = e || __filename), i = function(n) {
  var t2, r2, i2 = void 0 !== (n = n || {}) ? n : {};
  i2.ready = new Promise(function(n2, e2) {
    t2 = n2, r2 = e2;
  });
  var o2, a2, u2, c = Object.assign({}, i2), f = "./this.program", s = "object" == typeof window, l = "function" == typeof importScripts, p = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, d = "";
  function h(n2) {
    return i2.locateFile ? i2.locateFile(n2, d) : d + n2;
  }
  if (p) {
    var m = require("fs"), y = require("path");
    d = l ? y.dirname(d) + "/" : __dirname + "/", o2 = (n2, t3) => (n2 = tn(n2) ? new URL(n2) : y.normalize(n2), m.readFileSync(n2, t3 ? void 0 : "utf8")), u2 = (n2) => {
      var t3 = o2(n2, true);
      return t3.buffer || (t3 = new Uint8Array(t3)), t3;
    }, a2 = (n2, t3, r3) => {
      n2 = tn(n2) ? new URL(n2) : y.normalize(n2), m.readFile(n2, function(n3, e2) {
        n3 ? r3(n3) : t3(e2.buffer);
      });
    }, process.argv.length > 1 && (f = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(n2) {
      if (!(n2 instanceof an))
        throw n2;
    }), process.on("unhandledRejection", function(n2) {
      throw n2;
    }), i2.inspect = function() {
      return "[Emscripten Module object]";
    };
  } else
    (s || l) && (l ? d = self.location.href : "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), e && (d = e), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", o2 = (n2) => {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", n2, false), t3.send(null), t3.responseText;
    }, l && (u2 = (n2) => {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", n2, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
    }), a2 = (n2, t3, r3) => {
      var e2 = new XMLHttpRequest();
      e2.open("GET", n2, true), e2.responseType = "arraybuffer", e2.onload = () => {
        200 == e2.status || 0 == e2.status && e2.response ? t3(e2.response) : r3();
      }, e2.onerror = r3, e2.send(null);
    });
  i2.print || console.log.bind(console);
  var v, g, _ = i2.printErr || console.warn.bind(console);
  Object.assign(i2, c), c = null, i2.arguments && i2.arguments, i2.thisProgram && (f = i2.thisProgram), i2.quit && i2.quit, i2.wasmBinary && (v = i2.wasmBinary), i2.noExitRuntime, "object" != typeof WebAssembly && $("no native wasm support detected");
  var w, b, A, T, C, E, F, P, S, j, W = false, M = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function O(n2, t3, r3) {
    for (var e2 = t3 + r3, i3 = t3; n2[i3] && !(i3 >= e2); )
      ++i3;
    if (i3 - t3 > 16 && n2.buffer && M)
      return M.decode(n2.subarray(t3, i3));
    for (var o3 = ""; t3 < i3; ) {
      var a3 = n2[t3++];
      if (128 & a3) {
        var u3 = 63 & n2[t3++];
        if (192 != (224 & a3)) {
          var c2 = 63 & n2[t3++];
          if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u3 << 6 | c2 : (7 & a3) << 18 | u3 << 12 | c2 << 6 | 63 & n2[t3++]) < 65536)
            o3 += String.fromCharCode(a3);
          else {
            var f2 = a3 - 65536;
            o3 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
          }
        } else
          o3 += String.fromCharCode((31 & a3) << 6 | u3);
      } else
        o3 += String.fromCharCode(a3);
    }
    return o3;
  }
  function R(n2, t3) {
    return n2 ? O(A, n2, t3) : "";
  }
  function x(n2, t3, r3, e2) {
    if (!(e2 > 0))
      return 0;
    for (var i3 = r3, o3 = r3 + e2 - 1, a3 = 0; a3 < n2.length; ++a3) {
      var u3 = n2.charCodeAt(a3);
      if (u3 >= 55296 && u3 <= 57343 && (u3 = 65536 + ((1023 & u3) << 10) | 1023 & n2.charCodeAt(++a3)), u3 <= 127) {
        if (r3 >= o3)
          break;
        t3[r3++] = u3;
      } else if (u3 <= 2047) {
        if (r3 + 1 >= o3)
          break;
        t3[r3++] = 192 | u3 >> 6, t3[r3++] = 128 | 63 & u3;
      } else if (u3 <= 65535) {
        if (r3 + 2 >= o3)
          break;
        t3[r3++] = 224 | u3 >> 12, t3[r3++] = 128 | u3 >> 6 & 63, t3[r3++] = 128 | 63 & u3;
      } else {
        if (r3 + 3 >= o3)
          break;
        t3[r3++] = 240 | u3 >> 18, t3[r3++] = 128 | u3 >> 12 & 63, t3[r3++] = 128 | u3 >> 6 & 63, t3[r3++] = 128 | 63 & u3;
      }
    }
    return t3[r3] = 0, r3 - i3;
  }
  function D(n2, t3, r3) {
    return x(n2, A, t3, r3);
  }
  function k(n2) {
    for (var t3 = 0, r3 = 0; r3 < n2.length; ++r3) {
      var e2 = n2.charCodeAt(r3);
      e2 <= 127 ? t3++ : e2 <= 2047 ? t3 += 2 : e2 >= 55296 && e2 <= 57343 ? (t3 += 4, ++r3) : t3 += 3;
    }
    return t3;
  }
  function U(n2) {
    w = n2, i2.HEAP8 = b = new Int8Array(n2), i2.HEAP16 = T = new Int16Array(n2), i2.HEAP32 = E = new Int32Array(n2), i2.HEAPU8 = A = new Uint8Array(n2), i2.HEAPU16 = C = new Uint16Array(n2), i2.HEAPU32 = F = new Uint32Array(n2), i2.HEAPF32 = P = new Float32Array(n2), i2.HEAPF64 = S = new Float64Array(n2);
  }
  i2.INITIAL_MEMORY;
  var I = [], H = [], Y = [];
  function z() {
    if (i2.preRun)
      for ("function" == typeof i2.preRun && (i2.preRun = [i2.preRun]); i2.preRun.length; )
        q(i2.preRun.shift());
    un(I);
  }
  function V() {
    un(H);
  }
  function B() {
    if (i2.postRun)
      for ("function" == typeof i2.postRun && (i2.postRun = [i2.postRun]); i2.postRun.length; )
        G(i2.postRun.shift());
    un(Y);
  }
  function q(n2) {
    I.unshift(n2);
  }
  function L(n2) {
    H.unshift(n2);
  }
  function G(n2) {
    Y.unshift(n2);
  }
  var N = 0, X = null;
  function J(n2) {
    N++, i2.monitorRunDependencies && i2.monitorRunDependencies(N);
  }
  function Z(n2) {
    if (N--, i2.monitorRunDependencies && i2.monitorRunDependencies(N), 0 == N && X) {
      var t3 = X;
      X = null, t3();
    }
  }
  function $(n2) {
    i2.onAbort && i2.onAbort(n2), _(n2 = "Aborted(" + n2 + ")"), W = true, n2 += ". Build with -sASSERTIONS for more info.";
    var t3 = new WebAssembly.RuntimeError(n2);
    throw r2(t3), t3;
  }
  var K, Q = "data:application/octet-stream;base64,";
  function nn(n2) {
    return n2.startsWith(Q);
  }
  function tn(n2) {
    return n2.startsWith("file://");
  }
  function rn(n2) {
    try {
      if (n2 == K && v)
        return new Uint8Array(v);
      if (u2)
        return u2(n2);
      throw "both async and sync fetching of the wasm failed";
    } catch (_2) {
      $(_2);
    }
  }
  function en() {
    if (!v && (s || l)) {
      if ("function" == typeof fetch && !tn(K))
        return fetch(K, { credentials: "same-origin" }).then(function(n2) {
          if (!n2.ok)
            throw "failed to load wasm binary file at '" + K + "'";
          return n2.arrayBuffer();
        }).catch(function() {
          return rn(K);
        });
      if (a2)
        return new Promise(function(n2, t3) {
          a2(K, function(t4) {
            n2(new Uint8Array(t4));
          }, t3);
        });
    }
    return Promise.resolve().then(function() {
      return rn(K);
    });
  }
  function on() {
    var n2 = { a: Vt };
    function t3(n3, t4) {
      var r3 = n3.exports;
      i2.asm = r3, U((g = i2.asm.w).buffer), j = i2.asm.y, L(i2.asm.x), Z();
    }
    function e2(n3) {
      t3(n3.instance);
    }
    function o3(t4) {
      return en().then(function(t5) {
        return WebAssembly.instantiate(t5, n2);
      }).then(function(n3) {
        return n3;
      }).then(t4, function(n3) {
        _("failed to asynchronously prepare wasm: " + n3), $(n3);
      });
    }
    function a3() {
      return v || "function" != typeof WebAssembly.instantiateStreaming || nn(K) || tn(K) || p || "function" != typeof fetch ? o3(e2) : fetch(K, { credentials: "same-origin" }).then(function(t4) {
        return WebAssembly.instantiateStreaming(t4, n2).then(e2, function(n3) {
          return _("wasm streaming compile failed: " + n3), _("falling back to ArrayBuffer instantiation"), o3(e2);
        });
      });
    }
    if (J(), i2.instantiateWasm)
      try {
        return i2.instantiateWasm(n2, t3);
      } catch (u3) {
        _("Module.instantiateWasm callback failed with error: " + u3), r2(u3);
      }
    return a3().catch(r2), {};
  }
  function an(n2) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + n2 + ")", this.status = n2;
  }
  function un(n2) {
    for (; n2.length > 0; )
      n2.shift()(i2);
  }
  function cn(n2) {
    this.excPtr = n2, this.ptr = n2 - 24, this.set_type = function(n3) {
      F[this.ptr + 4 >> 2] = n3;
    }, this.get_type = function() {
      return F[this.ptr + 4 >> 2];
    }, this.set_destructor = function(n3) {
      F[this.ptr + 8 >> 2] = n3;
    }, this.get_destructor = function() {
      return F[this.ptr + 8 >> 2];
    }, this.set_refcount = function(n3) {
      E[this.ptr >> 2] = n3;
    }, this.set_caught = function(n3) {
      n3 = n3 ? 1 : 0, b[this.ptr + 12 >> 0] = n3;
    }, this.get_caught = function() {
      return 0 != b[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(n3) {
      n3 = n3 ? 1 : 0, b[this.ptr + 13 >> 0] = n3;
    }, this.get_rethrown = function() {
      return 0 != b[this.ptr + 13 >> 0];
    }, this.init = function(n3, t3) {
      this.set_adjusted_ptr(0), this.set_type(n3), this.set_destructor(t3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var n3 = E[this.ptr >> 2];
      E[this.ptr >> 2] = n3 + 1;
    }, this.release_ref = function() {
      var n3 = E[this.ptr >> 2];
      return E[this.ptr >> 2] = n3 - 1, 1 === n3;
    }, this.set_adjusted_ptr = function(n3) {
      F[this.ptr + 16 >> 2] = n3;
    }, this.get_adjusted_ptr = function() {
      return F[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Nt(this.get_type()))
        return F[this.excPtr >> 2];
      var n3 = this.get_adjusted_ptr();
      return 0 !== n3 ? n3 : this.excPtr;
    };
  }
  function fn(n2, t3, r3) {
    throw new cn(n2).init(t3, r3), n2;
  }
  function sn(n2, t3, r3, e2, i3) {
  }
  function ln(n2) {
    switch (n2) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + n2);
    }
  }
  function pn() {
    for (var n2 = new Array(256), t3 = 0; t3 < 256; ++t3)
      n2[t3] = String.fromCharCode(t3);
    dn = n2;
  }
  nn(K = "lclayout.wasm") || (K = h(K));
  var dn = void 0;
  function hn(n2) {
    for (var t3 = "", r3 = n2; A[r3]; )
      t3 += dn[A[r3++]];
    return t3;
  }
  var mn = {}, yn = {}, vn = {}, gn = 48, _n = 57;
  function wn(n2) {
    if (void 0 === n2)
      return "_unknown";
    var t3 = (n2 = n2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return t3 >= gn && t3 <= _n ? "_" + n2 : n2;
  }
  function bn(n2, t3) {
    return n2 = wn(n2), function() {
      return t3.apply(this, arguments);
    };
  }
  function An(n2, t3) {
    var r3 = bn(t3, function(n3) {
      this.name = t3, this.message = n3;
      var r4 = new Error(n3).stack;
      void 0 !== r4 && (this.stack = this.toString() + "\n" + r4.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return r3.prototype = Object.create(n2.prototype), r3.prototype.constructor = r3, r3.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, r3;
  }
  var Tn = void 0;
  function Cn(n2) {
    throw new Tn(n2);
  }
  var En = void 0;
  function Fn(n2) {
    throw new En(n2);
  }
  function Pn(n2, t3, r3) {
    function e2(t4) {
      var e3 = r3(t4);
      e3.length !== n2.length && Fn("Mismatched type converter count");
      for (var i4 = 0; i4 < n2.length; ++i4)
        Sn(n2[i4], e3[i4]);
    }
    n2.forEach(function(n3) {
      vn[n3] = t3;
    });
    var i3 = new Array(t3.length), o3 = [], a3 = 0;
    t3.forEach((n3, t4) => {
      yn.hasOwnProperty(n3) ? i3[t4] = yn[n3] : (o3.push(n3), mn.hasOwnProperty(n3) || (mn[n3] = []), mn[n3].push(() => {
        i3[t4] = yn[n3], ++a3 === o3.length && e2(i3);
      }));
    }), 0 === o3.length && e2(i3);
  }
  function Sn(n2, t3, r3 = {}) {
    if (!("argPackAdvance" in t3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var e2 = t3.name;
    if (n2 || Cn('type "' + e2 + '" must have a positive integer typeid pointer'), yn.hasOwnProperty(n2)) {
      if (r3.ignoreDuplicateRegistrations)
        return;
      Cn("Cannot register type '" + e2 + "' twice");
    }
    if (yn[n2] = t3, delete vn[n2], mn.hasOwnProperty(n2)) {
      var i3 = mn[n2];
      delete mn[n2], i3.forEach((n3) => n3());
    }
  }
  function jn(n2, t3, r3, e2, i3) {
    var o3 = ln(r3);
    Sn(n2, { name: t3 = hn(t3), fromWireType: function(n3) {
      return !!n3;
    }, toWireType: function(n3, t4) {
      return t4 ? e2 : i3;
    }, argPackAdvance: 8, readValueFromPointer: function(n3) {
      var e3;
      if (1 === r3)
        e3 = b;
      else if (2 === r3)
        e3 = T;
      else {
        if (4 !== r3)
          throw new TypeError("Unknown boolean type size: " + t3);
        e3 = E;
      }
      return this.fromWireType(e3[n3 >> o3]);
    }, destructorFunction: null });
  }
  function Wn(n2, t3, r3) {
    n2 = hn(n2), Pn([], [t3], function(t4) {
      return t4 = t4[0], i2[n2] = t4.fromWireType(r3), [];
    });
  }
  var Mn = [], On = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function Rn(n2) {
    n2 > 4 && 0 == --On[n2].refcount && (On[n2] = void 0, Mn.push(n2));
  }
  function xn() {
    for (var n2 = 0, t3 = 5; t3 < On.length; ++t3)
      void 0 !== On[t3] && ++n2;
    return n2;
  }
  function Dn() {
    for (var n2 = 5; n2 < On.length; ++n2)
      if (void 0 !== On[n2])
        return On[n2];
    return null;
  }
  function kn() {
    i2.count_emval_handles = xn, i2.get_first_emval = Dn;
  }
  var Un = { toValue: (n2) => (n2 || Cn("Cannot use deleted val. handle = " + n2), On[n2].value), toHandle: (n2) => {
    switch (n2) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        var t3 = Mn.length ? Mn.pop() : On.length;
        return On[t3] = { refcount: 1, value: n2 }, t3;
    }
  } };
  function In(n2) {
    return this.fromWireType(E[n2 >> 2]);
  }
  function Hn(n2, t3) {
    Sn(n2, { name: t3 = hn(t3), fromWireType: function(n3) {
      var t4 = Un.toValue(n3);
      return Rn(n3), t4;
    }, toWireType: function(n3, t4) {
      return Un.toHandle(t4);
    }, argPackAdvance: 8, readValueFromPointer: In, destructorFunction: null });
  }
  function Yn(n2, t3) {
    switch (t3) {
      case 2:
        return function(n3) {
          return this.fromWireType(P[n3 >> 2]);
        };
      case 3:
        return function(n3) {
          return this.fromWireType(S[n3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n2);
    }
  }
  function zn(n2, t3, r3) {
    var e2 = ln(r3);
    Sn(n2, { name: t3 = hn(t3), fromWireType: function(n3) {
      return n3;
    }, toWireType: function(n3, t4) {
      return t4;
    }, argPackAdvance: 8, readValueFromPointer: Yn(t3, e2), destructorFunction: null });
  }
  function Vn(n2) {
    for (; n2.length; ) {
      var t3 = n2.pop();
      n2.pop()(t3);
    }
  }
  function Bn(n2, t3, r3, e2, i3) {
    var o3 = t3.length;
    o3 < 2 && Cn("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var a3 = null !== t3[1] && null !== r3, u3 = false, c2 = 1; c2 < t3.length; ++c2)
      if (null !== t3[c2] && void 0 === t3[c2].destructorFunction) {
        u3 = true;
        break;
      }
    var f2 = "void" !== t3[0].name, s2 = o3 - 2, l2 = new Array(s2), p2 = [], d2 = [];
    return function() {
      var r4;
      arguments.length !== s2 && Cn("function " + n2 + " called with " + arguments.length + " arguments, expected " + s2 + " args!"), d2.length = 0, p2.length = a3 ? 2 : 1, p2[0] = i3, a3 && (r4 = t3[1].toWireType(d2, this), p2[1] = r4);
      for (var o4 = 0; o4 < s2; ++o4)
        l2[o4] = t3[o4 + 2].toWireType(d2, arguments[o4]), p2.push(l2[o4]);
      function c3(n3) {
        if (u3)
          Vn(d2);
        else
          for (var e3 = a3 ? 1 : 2; e3 < t3.length; e3++) {
            var i4 = 1 === e3 ? r4 : l2[e3 - 2];
            null !== t3[e3].destructorFunction && t3[e3].destructorFunction(i4);
          }
        if (f2)
          return t3[0].fromWireType(n3);
      }
      return c3(e2.apply(null, p2));
    };
  }
  function qn(n2, t3, r3) {
    if (void 0 === n2[t3].overloadTable) {
      var e2 = n2[t3];
      n2[t3] = function() {
        return n2[t3].overloadTable.hasOwnProperty(arguments.length) || Cn("Function '" + r3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n2[t3].overloadTable + ")!"), n2[t3].overloadTable[arguments.length].apply(this, arguments);
      }, n2[t3].overloadTable = [], n2[t3].overloadTable[e2.argCount] = e2;
    }
  }
  function Ln(n2, t3, r3) {
    i2.hasOwnProperty(n2) ? ((void 0 === r3 || void 0 !== i2[n2].overloadTable && void 0 !== i2[n2].overloadTable[r3]) && Cn("Cannot register public name '" + n2 + "' twice"), qn(i2, n2, n2), i2.hasOwnProperty(r3) && Cn("Cannot register multiple overloads of a function with the same number of arguments (" + r3 + ")!"), i2[n2].overloadTable[r3] = t3) : (i2[n2] = t3, void 0 !== r3 && (i2[n2].numArguments = r3));
  }
  function Gn(n2, t3) {
    for (var r3 = [], e2 = 0; e2 < n2; e2++)
      r3.push(F[t3 + 4 * e2 >> 2]);
    return r3;
  }
  function Nn(n2, t3, r3) {
    i2.hasOwnProperty(n2) || Fn("Replacing nonexistant public symbol"), void 0 !== i2[n2].overloadTable && void 0 !== r3 ? i2[n2].overloadTable[r3] = t3 : (i2[n2] = t3, i2[n2].argCount = r3);
  }
  function Xn(n2, t3, r3) {
    var e2 = i2["dynCall_" + n2];
    return r3 && r3.length ? e2.apply(null, [t3].concat(r3)) : e2.call(null, t3);
  }
  var Jn = [];
  function Zn(n2) {
    var t3 = Jn[n2];
    return t3 || (n2 >= Jn.length && (Jn.length = n2 + 1), Jn[n2] = t3 = j.get(n2)), t3;
  }
  function $n(n2, t3, r3) {
    return n2.includes("j") ? Xn(n2, t3, r3) : Zn(t3).apply(null, r3);
  }
  function Kn(n2, t3) {
    var r3 = [];
    return function() {
      return r3.length = 0, Object.assign(r3, arguments), $n(n2, t3, r3);
    };
  }
  function Qn(n2, t3) {
    function r3() {
      return n2.includes("j") ? Kn(n2, t3) : Zn(t3);
    }
    n2 = hn(n2);
    var e2 = r3();
    return "function" != typeof e2 && Cn("unknown function pointer with signature " + n2 + ": " + t3), e2;
  }
  var nt = void 0;
  function tt(n2) {
    var t3 = Bt(n2), r3 = hn(t3);
    return Gt(t3), r3;
  }
  function rt(n2, t3) {
    var r3 = [], e2 = {};
    function i3(n3) {
      e2[n3] || yn[n3] || (vn[n3] ? vn[n3].forEach(i3) : (r3.push(n3), e2[n3] = true));
    }
    throw t3.forEach(i3), new nt(n2 + ": " + r3.map(tt).join([", "]));
  }
  function et(n2, t3, r3, e2, i3, o3) {
    var a3 = Gn(t3, r3);
    n2 = hn(n2), i3 = Qn(e2, i3), Ln(n2, function() {
      rt("Cannot call " + n2 + " due to unbound types", a3);
    }, t3 - 1), Pn([], a3, function(r4) {
      var e3 = [r4[0], null].concat(r4.slice(1));
      return Nn(n2, Bn(n2, e3, null, i3, o3), t3 - 1), [];
    });
  }
  function it(n2, t3, r3) {
    switch (t3) {
      case 0:
        return r3 ? function(n3) {
          return b[n3];
        } : function(n3) {
          return A[n3];
        };
      case 1:
        return r3 ? function(n3) {
          return T[n3 >> 1];
        } : function(n3) {
          return C[n3 >> 1];
        };
      case 2:
        return r3 ? function(n3) {
          return E[n3 >> 2];
        } : function(n3) {
          return F[n3 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
  }
  function ot(n2, t3, r3, e2, i3) {
    t3 = hn(t3);
    var o3 = ln(r3), a3 = (n3) => n3;
    if (0 === e2) {
      var u3 = 32 - 8 * r3;
      a3 = (n3) => n3 << u3 >>> u3;
    }
    var c2 = t3.includes("unsigned"), f2 = (n3, t4) => {
    };
    Sn(n2, { name: t3, fromWireType: a3, toWireType: c2 ? function(n3, t4) {
      return f2(t4, this.name), t4 >>> 0;
    } : function(n3, t4) {
      return f2(t4, this.name), t4;
    }, argPackAdvance: 8, readValueFromPointer: it(t3, o3, 0 !== e2), destructorFunction: null });
  }
  function at(n2, t3, r3) {
    var e2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t3];
    function i3(n3) {
      var t4 = F, r4 = t4[n3 >>= 2], i4 = t4[n3 + 1];
      return new e2(w, i4, r4);
    }
    Sn(n2, { name: r3 = hn(r3), fromWireType: i3, argPackAdvance: 8, readValueFromPointer: i3 }, { ignoreDuplicateRegistrations: true });
  }
  function ut(n2, t3) {
    var r3 = "std::string" === (t3 = hn(t3));
    Sn(n2, { name: t3, fromWireType: function(n3) {
      var t4, e2 = F[n3 >> 2], i3 = n3 + 4;
      if (r3)
        for (var o3 = i3, a3 = 0; a3 <= e2; ++a3) {
          var u3 = i3 + a3;
          if (a3 == e2 || 0 == A[u3]) {
            var c2 = R(o3, u3 - o3);
            void 0 === t4 ? t4 = c2 : (t4 += String.fromCharCode(0), t4 += c2), o3 = u3 + 1;
          }
        }
      else {
        var f2 = new Array(e2);
        for (a3 = 0; a3 < e2; ++a3)
          f2[a3] = String.fromCharCode(A[i3 + a3]);
        t4 = f2.join("");
      }
      return Gt(n3), t4;
    }, toWireType: function(n3, t4) {
      var e2;
      t4 instanceof ArrayBuffer && (t4 = new Uint8Array(t4));
      var i3 = "string" == typeof t4;
      i3 || t4 instanceof Uint8Array || t4 instanceof Uint8ClampedArray || t4 instanceof Int8Array || Cn("Cannot pass non-string to std::string"), e2 = r3 && i3 ? k(t4) : t4.length;
      var o3 = Lt(4 + e2 + 1), a3 = o3 + 4;
      if (F[o3 >> 2] = e2, r3 && i3)
        D(t4, a3, e2 + 1);
      else if (i3)
        for (var u3 = 0; u3 < e2; ++u3) {
          var c2 = t4.charCodeAt(u3);
          c2 > 255 && (Gt(a3), Cn("String has UTF-16 code units that do not fit in 8 bits")), A[a3 + u3] = c2;
        }
      else
        for (u3 = 0; u3 < e2; ++u3)
          A[a3 + u3] = t4[u3];
      return null !== n3 && n3.push(Gt, o3), o3;
    }, argPackAdvance: 8, readValueFromPointer: In, destructorFunction: function(n3) {
      Gt(n3);
    } });
  }
  var ct = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function ft(n2, t3) {
    for (var r3 = n2, e2 = r3 >> 1, i3 = e2 + t3 / 2; !(e2 >= i3) && C[e2]; )
      ++e2;
    if ((r3 = e2 << 1) - n2 > 32 && ct)
      return ct.decode(A.subarray(n2, r3));
    for (var o3 = "", a3 = 0; !(a3 >= t3 / 2); ++a3) {
      var u3 = T[n2 + 2 * a3 >> 1];
      if (0 == u3)
        break;
      o3 += String.fromCharCode(u3);
    }
    return o3;
  }
  function st(n2, t3, r3) {
    if (void 0 === r3 && (r3 = 2147483647), r3 < 2)
      return 0;
    for (var e2 = t3, i3 = (r3 -= 2) < 2 * n2.length ? r3 / 2 : n2.length, o3 = 0; o3 < i3; ++o3) {
      var a3 = n2.charCodeAt(o3);
      T[t3 >> 1] = a3, t3 += 2;
    }
    return T[t3 >> 1] = 0, t3 - e2;
  }
  function lt(n2) {
    return 2 * n2.length;
  }
  function pt(n2, t3) {
    for (var r3 = 0, e2 = ""; !(r3 >= t3 / 4); ) {
      var i3 = E[n2 + 4 * r3 >> 2];
      if (0 == i3)
        break;
      if (++r3, i3 >= 65536) {
        var o3 = i3 - 65536;
        e2 += String.fromCharCode(55296 | o3 >> 10, 56320 | 1023 & o3);
      } else
        e2 += String.fromCharCode(i3);
    }
    return e2;
  }
  function dt(n2, t3, r3) {
    if (void 0 === r3 && (r3 = 2147483647), r3 < 4)
      return 0;
    for (var e2 = t3, i3 = e2 + r3 - 4, o3 = 0; o3 < n2.length; ++o3) {
      var a3 = n2.charCodeAt(o3);
      if (a3 >= 55296 && a3 <= 57343 && (a3 = 65536 + ((1023 & a3) << 10) | 1023 & n2.charCodeAt(++o3)), E[t3 >> 2] = a3, (t3 += 4) + 4 > i3)
        break;
    }
    return E[t3 >> 2] = 0, t3 - e2;
  }
  function ht(n2) {
    for (var t3 = 0, r3 = 0; r3 < n2.length; ++r3) {
      var e2 = n2.charCodeAt(r3);
      e2 >= 55296 && e2 <= 57343 && ++r3, t3 += 4;
    }
    return t3;
  }
  function mt(n2, t3, r3) {
    var e2, i3, o3, a3, u3;
    r3 = hn(r3), 2 === t3 ? (e2 = ft, i3 = st, a3 = lt, o3 = () => C, u3 = 1) : 4 === t3 && (e2 = pt, i3 = dt, a3 = ht, o3 = () => F, u3 = 2), Sn(n2, { name: r3, fromWireType: function(n3) {
      for (var r4, i4 = F[n3 >> 2], a4 = o3(), c2 = n3 + 4, f2 = 0; f2 <= i4; ++f2) {
        var s2 = n3 + 4 + f2 * t3;
        if (f2 == i4 || 0 == a4[s2 >> u3]) {
          var l2 = e2(c2, s2 - c2);
          void 0 === r4 ? r4 = l2 : (r4 += String.fromCharCode(0), r4 += l2), c2 = s2 + t3;
        }
      }
      return Gt(n3), r4;
    }, toWireType: function(n3, e3) {
      "string" != typeof e3 && Cn("Cannot pass non-string to C++ string type " + r3);
      var o4 = a3(e3), c2 = Lt(4 + o4 + t3);
      return F[c2 >> 2] = o4 >> u3, i3(e3, c2 + 4, o4 + t3), null !== n3 && n3.push(Gt, c2), c2;
    }, argPackAdvance: 8, readValueFromPointer: In, destructorFunction: function(n3) {
      Gt(n3);
    } });
  }
  function yt(n2, t3) {
    Sn(n2, { isVoid: true, name: t3 = hn(t3), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(n3, t4) {
    } });
  }
  var vt, gt = true;
  function _t() {
    return gt;
  }
  function wt() {
    $("");
  }
  function bt() {
    return Date.now();
  }
  function At() {
    return 2147483648;
  }
  function Tt() {
    return At();
  }
  function Ct(n2, t3, r3) {
    A.copyWithin(n2, t3, t3 + r3);
  }
  function Et(n2) {
    try {
      return g.grow(n2 - w.byteLength + 65535 >>> 16), U(g.buffer), 1;
    } catch (t3) {
    }
  }
  function Ft(n2) {
    var t3 = A.length;
    n2 >>>= 0;
    var r3 = At();
    if (n2 > r3)
      return false;
    let e2 = (n3, t4) => n3 + (t4 - n3 % t4) % t4;
    for (var i3 = 1; i3 <= 4; i3 *= 2) {
      var o3 = t3 * (1 + 0.2 / i3);
      if (o3 = Math.min(o3, n2 + 100663296), Et(Math.min(r3, e2(Math.max(n2, o3), 65536))))
        return true;
    }
    return false;
  }
  vt = p ? () => {
    var n2 = process.hrtime();
    return 1e3 * n2[0] + n2[1] / 1e6;
  } : () => performance.now();
  var Pt = {};
  function St() {
    return f || "./this.program";
  }
  function jt() {
    if (!jt.strings) {
      var n2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: St() };
      for (var t3 in Pt)
        void 0 === Pt[t3] ? delete n2[t3] : n2[t3] = Pt[t3];
      var r3 = [];
      for (var t3 in n2)
        r3.push(t3 + "=" + n2[t3]);
      jt.strings = r3;
    }
    return jt.strings;
  }
  function Wt(n2, t3, r3) {
    for (var e2 = 0; e2 < n2.length; ++e2)
      b[t3++ >> 0] = n2.charCodeAt(e2);
    r3 || (b[t3 >> 0] = 0);
  }
  function Mt(n2, t3) {
    var r3 = 0;
    return jt().forEach(function(e2, i3) {
      var o3 = t3 + r3;
      F[n2 + 4 * i3 >> 2] = o3, Wt(e2, o3), r3 += e2.length + 1;
    }), 0;
  }
  function Ot(n2, t3) {
    var r3 = jt();
    F[n2 >> 2] = r3.length;
    var e2 = 0;
    return r3.forEach(function(n3) {
      e2 += n3.length + 1;
    }), F[t3 >> 2] = e2, 0;
  }
  function Rt(n2) {
    return n2 % 4 == 0 && (n2 % 100 != 0 || n2 % 400 == 0);
  }
  function xt(n2, t3) {
    for (var r3 = 0, e2 = 0; e2 <= t3; r3 += n2[e2++])
      ;
    return r3;
  }
  var Dt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Ut(n2, t3) {
    for (var r3 = new Date(n2.getTime()); t3 > 0; ) {
      var e2 = Rt(r3.getFullYear()), i3 = r3.getMonth(), o3 = (e2 ? Dt : kt)[i3];
      if (!(t3 > o3 - r3.getDate()))
        return r3.setDate(r3.getDate() + t3), r3;
      t3 -= o3 - r3.getDate() + 1, r3.setDate(1), i3 < 11 ? r3.setMonth(i3 + 1) : (r3.setMonth(0), r3.setFullYear(r3.getFullYear() + 1));
    }
    return r3;
  }
  function It(n2, t3, r3) {
    var e2 = r3 > 0 ? r3 : k(n2) + 1, i3 = new Array(e2), o3 = x(n2, i3, 0, i3.length);
    return t3 && (i3.length = o3), i3;
  }
  function Ht(n2, t3) {
    b.set(n2, t3);
  }
  function Yt(n2, t3, r3, e2) {
    var i3 = E[e2 + 40 >> 2], o3 = { tm_sec: E[e2 >> 2], tm_min: E[e2 + 4 >> 2], tm_hour: E[e2 + 8 >> 2], tm_mday: E[e2 + 12 >> 2], tm_mon: E[e2 + 16 >> 2], tm_year: E[e2 + 20 >> 2], tm_wday: E[e2 + 24 >> 2], tm_yday: E[e2 + 28 >> 2], tm_isdst: E[e2 + 32 >> 2], tm_gmtoff: E[e2 + 36 >> 2], tm_zone: i3 ? R(i3) : "" }, a3 = R(r3), u3 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var c2 in u3)
      a3 = a3.replace(new RegExp(c2, "g"), u3[c2]);
    var f2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], s2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function l2(n3, t4, r4) {
      for (var e3 = "number" == typeof n3 ? n3.toString() : n3 || ""; e3.length < t4; )
        e3 = r4[0] + e3;
      return e3;
    }
    function p2(n3, t4) {
      return l2(n3, t4, "0");
    }
    function d2(n3, t4) {
      function r4(n4) {
        return n4 < 0 ? -1 : n4 > 0 ? 1 : 0;
      }
      var e3;
      return 0 === (e3 = r4(n3.getFullYear() - t4.getFullYear())) && 0 === (e3 = r4(n3.getMonth() - t4.getMonth())) && (e3 = r4(n3.getDate() - t4.getDate())), e3;
    }
    function h2(n3) {
      switch (n3.getDay()) {
        case 0:
          return new Date(n3.getFullYear() - 1, 11, 29);
        case 1:
          return n3;
        case 2:
          return new Date(n3.getFullYear(), 0, 3);
        case 3:
          return new Date(n3.getFullYear(), 0, 2);
        case 4:
          return new Date(n3.getFullYear(), 0, 1);
        case 5:
          return new Date(n3.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(n3.getFullYear() - 1, 11, 30);
      }
    }
    function m2(n3) {
      var t4 = Ut(new Date(n3.tm_year + 1900, 0, 1), n3.tm_yday), r4 = new Date(t4.getFullYear(), 0, 4), e3 = new Date(t4.getFullYear() + 1, 0, 4), i4 = h2(r4), o4 = h2(e3);
      return d2(i4, t4) <= 0 ? d2(o4, t4) <= 0 ? t4.getFullYear() + 1 : t4.getFullYear() : t4.getFullYear() - 1;
    }
    var y2 = { "%a": function(n3) {
      return f2[n3.tm_wday].substring(0, 3);
    }, "%A": function(n3) {
      return f2[n3.tm_wday];
    }, "%b": function(n3) {
      return s2[n3.tm_mon].substring(0, 3);
    }, "%B": function(n3) {
      return s2[n3.tm_mon];
    }, "%C": function(n3) {
      return p2((n3.tm_year + 1900) / 100 | 0, 2);
    }, "%d": function(n3) {
      return p2(n3.tm_mday, 2);
    }, "%e": function(n3) {
      return l2(n3.tm_mday, 2, " ");
    }, "%g": function(n3) {
      return m2(n3).toString().substring(2);
    }, "%G": function(n3) {
      return m2(n3);
    }, "%H": function(n3) {
      return p2(n3.tm_hour, 2);
    }, "%I": function(n3) {
      var t4 = n3.tm_hour;
      return 0 == t4 ? t4 = 12 : t4 > 12 && (t4 -= 12), p2(t4, 2);
    }, "%j": function(n3) {
      return p2(n3.tm_mday + xt(Rt(n3.tm_year + 1900) ? Dt : kt, n3.tm_mon - 1), 3);
    }, "%m": function(n3) {
      return p2(n3.tm_mon + 1, 2);
    }, "%M": function(n3) {
      return p2(n3.tm_min, 2);
    }, "%n": function() {
      return "\n";
    }, "%p": function(n3) {
      return n3.tm_hour >= 0 && n3.tm_hour < 12 ? "AM" : "PM";
    }, "%S": function(n3) {
      return p2(n3.tm_sec, 2);
    }, "%t": function() {
      return "	";
    }, "%u": function(n3) {
      return n3.tm_wday || 7;
    }, "%U": function(n3) {
      var t4 = n3.tm_yday + 7 - n3.tm_wday;
      return p2(Math.floor(t4 / 7), 2);
    }, "%V": function(n3) {
      var t4 = Math.floor((n3.tm_yday + 7 - (n3.tm_wday + 6) % 7) / 7);
      if ((n3.tm_wday + 371 - n3.tm_yday - 2) % 7 <= 2 && t4++, t4) {
        if (53 == t4) {
          var r4 = (n3.tm_wday + 371 - n3.tm_yday) % 7;
          4 == r4 || 3 == r4 && Rt(n3.tm_year) || (t4 = 1);
        }
      } else {
        t4 = 52;
        var e3 = (n3.tm_wday + 7 - n3.tm_yday - 1) % 7;
        (4 == e3 || 5 == e3 && Rt(n3.tm_year % 400 - 1)) && t4++;
      }
      return p2(t4, 2);
    }, "%w": function(n3) {
      return n3.tm_wday;
    }, "%W": function(n3) {
      var t4 = n3.tm_yday + 7 - (n3.tm_wday + 6) % 7;
      return p2(Math.floor(t4 / 7), 2);
    }, "%y": function(n3) {
      return (n3.tm_year + 1900).toString().substring(2);
    }, "%Y": function(n3) {
      return n3.tm_year + 1900;
    }, "%z": function(n3) {
      var t4 = n3.tm_gmtoff, r4 = t4 >= 0;
      return t4 = (t4 = Math.abs(t4) / 60) / 60 * 100 + t4 % 60, (r4 ? "+" : "-") + String("0000" + t4).slice(-4);
    }, "%Z": function(n3) {
      return n3.tm_zone;
    }, "%%": function() {
      return "%";
    } };
    for (var c2 in a3 = a3.replace(/%%/g, "\0\0"), y2)
      a3.includes(c2) && (a3 = a3.replace(new RegExp(c2, "g"), y2[c2](o3)));
    var v2 = It(a3 = a3.replace(/\0\0/g, "%"), false);
    return v2.length > t3 ? 0 : (Ht(v2, n2), v2.length - 1);
  }
  function zt(n2, t3, r3, e2, i3) {
    return Yt(n2, t3, r3, e2);
  }
  pn(), Tn = i2.BindingError = An(Error, "BindingError"), En = i2.InternalError = An(Error, "InternalError"), kn(), nt = i2.UnboundTypeError = An(Error, "UnboundTypeError");
  var Vt = { a: fn, m: sn, k: jn, i: Wn, j: Hn, h: zn, c: et, d: ot, b: at, g: ut, e: mt, l: yt, r: _t, f: wt, s: bt, n: Tt, u: vt, v: Ct, t: Ft, p: Mt, q: Ot, o: zt };
  on(), i2.___wasm_call_ctors = function() {
    return (i2.___wasm_call_ctors = i2.asm.x).apply(null, arguments);
  };
  var Bt = i2.___getTypeName = function() {
    return (Bt = i2.___getTypeName = i2.asm.z).apply(null, arguments);
  };
  i2.__embind_initialize_bindings = function() {
    return (i2.__embind_initialize_bindings = i2.asm.A).apply(null, arguments);
  };
  var qt, Lt = i2._malloc = function() {
    return (Lt = i2._malloc = i2.asm.B).apply(null, arguments);
  }, Gt = i2._free = function() {
    return (Gt = i2._free = i2.asm.C).apply(null, arguments);
  }, Nt = i2.___cxa_is_pointer_type = function() {
    return (Nt = i2.___cxa_is_pointer_type = i2.asm.D).apply(null, arguments);
  };
  function Xt(n2) {
    function r3() {
      qt || (qt = true, i2.calledRun = true, W || (V(), t2(i2), i2.onRuntimeInitialized && i2.onRuntimeInitialized(), B()));
    }
    N > 0 || (z(), N > 0 || (i2.setStatus ? (i2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        i2.setStatus("");
      }, 1), r3();
    }, 1)) : r3()));
  }
  if (i2.dynCall_viijii = function() {
    return (i2.dynCall_viijii = i2.asm.E).apply(null, arguments);
  }, i2.dynCall_iiiiij = function() {
    return (i2.dynCall_iiiiij = i2.asm.F).apply(null, arguments);
  }, i2.dynCall_iiiiijj = function() {
    return (i2.dynCall_iiiiijj = i2.asm.G).apply(null, arguments);
  }, i2.dynCall_iiiiiijj = function() {
    return (i2.dynCall_iiiiiijj = i2.asm.H).apply(null, arguments);
  }, X = function n2() {
    qt || Xt(), qt || (X = n2);
  }, i2.preInit)
    for ("function" == typeof i2.preInit && (i2.preInit = [i2.preInit]); i2.preInit.length > 0; )
      i2.preInit.pop()();
  return Xt(), n.ready;
}, r.exports = i;
var a = o.exports;
const u = t({ __proto__: null, default: o$1(a) }, [a]);
export {
  u as l
};
