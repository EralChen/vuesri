import { bk as o$1, i4 as e$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var e, r, i, o = { exports: {} };
e = o, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (r = r || __filename), i = function(t) {
  var e2, i2, o2 = void 0 !== (t = t || {}) ? t : {};
  o2.ready = new Promise(function(t2, n) {
    e2 = t2, i2 = n;
  });
  var a2, u2 = {};
  for (a2 in o2)
    o2.hasOwnProperty(a2) && (u2[a2] = o2[a2]);
  var s = false, l = false, c = false, f = false;
  s = "object" == typeof window, l = "function" == typeof importScripts, c = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, f = !s && !c && !l;
  var p, d, y, h, v = "";
  function m(t2) {
    return o2.locateFile ? o2.locateFile(t2, v) : v + t2;
  }
  c ? (v = l ? require("path").dirname(v) + "/" : __dirname + "/", p = function(t2, n) {
    return y || (y = require("fs")), h || (h = require("path")), t2 = h.normalize(t2), y.readFileSync(t2, n ? null : "utf8");
  }, d = function(t2) {
    var n = p(t2, true);
    return n.buffer || (n = new Uint8Array(n)), _(n.buffer), n;
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(t2) {
    if (!(t2 instanceof Qe))
      throw t2;
  }), process.on("unhandledRejection", vt), o2.inspect = function() {
    return "[Emscripten Module object]";
  }) : f ? ("undefined" != typeof read && (p = function(t2) {
    return read(t2);
  }), d = function(t2) {
    var n;
    return "function" == typeof readbuffer ? new Uint8Array(readbuffer(t2)) : (_("object" == typeof (n = read(t2, "binary"))), n);
  }, "undefined" != typeof scriptArgs && scriptArgs, "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (s || l) && (l ? v = self.location.href : document.currentScript && (v = document.currentScript.src), r && (v = r), v = 0 !== v.indexOf("blob:") ? v.substr(0, v.lastIndexOf("/") + 1) : "", p = function(t2) {
    var n = new XMLHttpRequest();
    return n.open("GET", t2, false), n.send(null), n.responseText;
  }, l && (d = function(t2) {
    var n = new XMLHttpRequest();
    return n.open("GET", t2, false), n.responseType = "arraybuffer", n.send(null), new Uint8Array(n.response);
  }));
  var g, b, $ = o2.print || console.log.bind(console), C = o2.printErr || console.warn.bind(console);
  for (a2 in u2)
    u2.hasOwnProperty(a2) && (o2[a2] = u2[a2]);
  u2 = null, o2.arguments && o2.arguments, o2.thisProgram && o2.thisProgram, o2.quit && o2.quit, o2.wasmBinary && (g = o2.wasmBinary), o2.noExitRuntime && o2.noExitRuntime, "object" != typeof WebAssembly && vt("no native wasm support detected");
  var w = new WebAssembly.Table({ initial: 157, maximum: 157, element: "anyfunc" }), T = false;
  function _(t2, n) {
    t2 || vt("Assertion failed: " + n);
  }
  var P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function A(t2, n, e3) {
    for (var r2 = n + e3, i3 = n; t2[i3] && !(i3 >= r2); )
      ++i3;
    if (i3 - n > 16 && t2.subarray && P)
      return P.decode(t2.subarray(n, i3));
    for (var o3 = ""; n < i3; ) {
      var a3 = t2[n++];
      if (128 & a3) {
        var u3 = 63 & t2[n++];
        if (192 != (224 & a3)) {
          var s2 = 63 & t2[n++];
          if ((a3 = 224 == (240 & a3) ? (15 & a3) << 12 | u3 << 6 | s2 : (7 & a3) << 18 | u3 << 12 | s2 << 6 | 63 & t2[n++]) < 65536)
            o3 += String.fromCharCode(a3);
          else {
            var l2 = a3 - 65536;
            o3 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else
          o3 += String.fromCharCode((31 & a3) << 6 | u3);
      } else
        o3 += String.fromCharCode(a3);
    }
    return o3;
  }
  function W(t2, n) {
    return t2 ? A(V, t2, n) : "";
  }
  function E(t2, n, e3, r2) {
    if (!(r2 > 0))
      return 0;
    for (var i3 = e3, o3 = e3 + r2 - 1, a3 = 0; a3 < t2.length; ++a3) {
      var u3 = t2.charCodeAt(a3);
      if (u3 >= 55296 && u3 <= 57343 && (u3 = 65536 + ((1023 & u3) << 10) | 1023 & t2.charCodeAt(++a3)), u3 <= 127) {
        if (e3 >= o3)
          break;
        n[e3++] = u3;
      } else if (u3 <= 2047) {
        if (e3 + 1 >= o3)
          break;
        n[e3++] = 192 | u3 >> 6, n[e3++] = 128 | 63 & u3;
      } else if (u3 <= 65535) {
        if (e3 + 2 >= o3)
          break;
        n[e3++] = 224 | u3 >> 12, n[e3++] = 128 | u3 >> 6 & 63, n[e3++] = 128 | 63 & u3;
      } else {
        if (e3 + 3 >= o3)
          break;
        n[e3++] = 240 | u3 >> 18, n[e3++] = 128 | u3 >> 12 & 63, n[e3++] = 128 | u3 >> 6 & 63, n[e3++] = 128 | 63 & u3;
      }
    }
    return n[e3] = 0, e3 - i3;
  }
  function S(t2, n, e3) {
    return E(t2, V, n, e3);
  }
  function j(t2) {
    for (var n = 0, e3 = 0; e3 < t2.length; ++e3) {
      var r2 = t2.charCodeAt(e3);
      r2 >= 55296 && r2 <= 57343 && (r2 = 65536 + ((1023 & r2) << 10) | 1023 & t2.charCodeAt(++e3)), r2 <= 127 ? ++n : n += r2 <= 2047 ? 2 : r2 <= 65535 ? 3 : 4;
    }
    return n;
  }
  var O = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function k(t2, n) {
    for (var e3 = t2, r2 = e3 >> 1, i3 = r2 + n / 2; !(r2 >= i3) && z[r2]; )
      ++r2;
    if ((e3 = r2 << 1) - t2 > 32 && O)
      return O.decode(V.subarray(t2, e3));
    for (var o3 = 0, a3 = ""; ; ) {
      var u3 = H[t2 + 2 * o3 >> 1];
      if (0 == u3 || o3 == n / 2)
        return a3;
      ++o3, a3 += String.fromCharCode(u3);
    }
  }
  function F(t2, n, e3) {
    if (void 0 === e3 && (e3 = 2147483647), e3 < 2)
      return 0;
    for (var r2 = n, i3 = (e3 -= 2) < 2 * t2.length ? e3 / 2 : t2.length, o3 = 0; o3 < i3; ++o3) {
      var a3 = t2.charCodeAt(o3);
      H[n >> 1] = a3, n += 2;
    }
    return H[n >> 1] = 0, n - r2;
  }
  function R(t2) {
    return 2 * t2.length;
  }
  function x(t2, n) {
    for (var e3 = 0, r2 = ""; !(e3 >= n / 4); ) {
      var i3 = q[t2 + 4 * e3 >> 2];
      if (0 == i3)
        break;
      if (++e3, i3 >= 65536) {
        var o3 = i3 - 65536;
        r2 += String.fromCharCode(55296 | o3 >> 10, 56320 | 1023 & o3);
      } else
        r2 += String.fromCharCode(i3);
    }
    return r2;
  }
  function D(t2, n, e3) {
    if (void 0 === e3 && (e3 = 2147483647), e3 < 4)
      return 0;
    for (var r2 = n, i3 = r2 + e3 - 4, o3 = 0; o3 < t2.length; ++o3) {
      var a3 = t2.charCodeAt(o3);
      if (a3 >= 55296 && a3 <= 57343 && (a3 = 65536 + ((1023 & a3) << 10) | 1023 & t2.charCodeAt(++o3)), q[n >> 2] = a3, (n += 4) + 4 > i3)
        break;
    }
    return q[n >> 2] = 0, n - r2;
  }
  function I(t2) {
    for (var n = 0, e3 = 0; e3 < t2.length; ++e3) {
      var r2 = t2.charCodeAt(e3);
      r2 >= 55296 && r2 <= 57343 && ++e3, n += 4;
    }
    return n;
  }
  var U, M, V, H, z, q, B, N, G, L = 65536;
  function X(t2, n) {
    return t2 % n > 0 && (t2 += n - t2 % n), t2;
  }
  function J(t2) {
    U = t2, o2.HEAP8 = M = new Int8Array(t2), o2.HEAP16 = H = new Int16Array(t2), o2.HEAP32 = q = new Int32Array(t2), o2.HEAPU8 = V = new Uint8Array(t2), o2.HEAPU16 = z = new Uint16Array(t2), o2.HEAPU32 = B = new Uint32Array(t2), o2.HEAPF32 = N = new Float32Array(t2), o2.HEAPF64 = G = new Float64Array(t2);
  }
  var Y = 5565536, Z = 322496, K = o2.INITIAL_MEMORY || 16777216;
  function Q(t2) {
    for (; t2.length > 0; ) {
      var n = t2.shift();
      if ("function" != typeof n) {
        var e3 = n.func;
        "number" == typeof e3 ? void 0 === n.arg ? o2.dynCall_v(e3) : o2.dynCall_vi(e3, n.arg) : e3(void 0 === n.arg ? null : n.arg);
      } else
        n(o2);
    }
  }
  (b = o2.wasmMemory ? o2.wasmMemory : new WebAssembly.Memory({ initial: K / L, maximum: 2147483648 / L })) && (U = b.buffer), K = U.byteLength, J(U), q[Z >> 2] = Y;
  var tt = [], nt = [], et = [], rt = [];
  function it() {
    if (o2.preRun)
      for ("function" == typeof o2.preRun && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        st(o2.preRun.shift());
    Q(tt);
  }
  function ot() {
    Q(nt);
  }
  function at() {
    Q(et);
  }
  function ut() {
    if (o2.postRun)
      for ("function" == typeof o2.postRun && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        lt(o2.postRun.shift());
    Q(rt);
  }
  function st(t2) {
    tt.unshift(t2);
  }
  function lt(t2) {
    rt.unshift(t2);
  }
  var ct = Math.ceil, ft = Math.floor, pt = 0, dt = null;
  function yt(t2) {
    pt++, o2.monitorRunDependencies && o2.monitorRunDependencies(pt);
  }
  function ht(t2) {
    if (pt--, o2.monitorRunDependencies && o2.monitorRunDependencies(pt), 0 == pt && dt) {
      var n = dt;
      dt = null, n();
    }
  }
  function vt(t2) {
    o2.onAbort && o2.onAbort(t2), C(t2 += ""), T = true, t2 = "abort(" + t2 + "). Build with -s ASSERTIONS=1 for more info.";
    var n = new WebAssembly.RuntimeError(t2);
    throw i2(n), n;
  }
  function mt(t2, n) {
    return String.prototype.startsWith ? t2.startsWith(n) : 0 === t2.indexOf(n);
  }
  o2.preloadedImages = {}, o2.preloadedAudios = {};
  var gt = "data:application/octet-stream;base64,";
  function bt(t2) {
    return mt(t2, gt);
  }
  var $t = "file://";
  function Ct(t2) {
    return mt(t2, $t);
  }
  var wt = "basis_transcoder.wasm";
  function Tt() {
    try {
      if (g)
        return new Uint8Array(g);
      if (d)
        return d(wt);
      throw "both async and sync fetching of the wasm failed";
    } catch (C2) {
      vt(C2);
    }
  }
  function _t() {
    return g || !s && !l || "function" != typeof fetch || Ct(wt) ? new Promise(function(t2, n) {
      t2(Tt());
    }) : fetch(wt, { credentials: "same-origin" }).then(function(t2) {
      if (!t2.ok)
        throw "failed to load wasm binary file at '" + wt + "'";
      return t2.arrayBuffer();
    }).catch(function() {
      return Tt();
    });
  }
  function Pt() {
    var t2 = { a: Le };
    function n(t3, n2) {
      var e4 = t3.exports;
      o2.asm = e4, ht();
    }
    function e3(t3) {
      n(t3.instance);
    }
    function r2(n2) {
      return _t().then(function(n3) {
        return WebAssembly.instantiate(n3, t2);
      }).then(n2, function(t3) {
        C("failed to asynchronously prepare wasm: " + t3), vt(t3);
      });
    }
    function i3() {
      if (g || "function" != typeof WebAssembly.instantiateStreaming || bt(wt) || Ct(wt) || "function" != typeof fetch)
        return r2(e3);
      fetch(wt, { credentials: "same-origin" }).then(function(n2) {
        return WebAssembly.instantiateStreaming(n2, t2).then(e3, function(t3) {
          return C("wasm streaming compile failed: " + t3), C("falling back to ArrayBuffer instantiation"), r2(e3);
        });
      });
    }
    if (yt(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(t2, n);
      } catch (a3) {
        return C("Module.instantiateWasm callback failed with error: " + a3), false;
      }
    return i3(), {};
  }
  bt(wt) || (wt = m(wt)), nt.push({ func: function() {
    Je();
  } });
  var At = {};
  function Wt(t2) {
    for (; t2.length; ) {
      var n = t2.pop();
      t2.pop()(n);
    }
  }
  function Et(t2) {
    return this.fromWireType(B[t2 >> 2]);
  }
  var St = {}, jt = {}, Ot = {}, kt = 48, Ft = 57;
  function Rt(t2) {
    if (void 0 === t2)
      return "_unknown";
    var n = (t2 = t2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return n >= kt && n <= Ft ? "_" + t2 : t2;
  }
  function xt(t2, n) {
    return t2 = Rt(t2), function() {
      return n.apply(this, arguments);
    };
  }
  function Dt(t2, n) {
    var e3 = xt(n, function(t3) {
      this.name = n, this.message = t3;
      var e4 = new Error(t3).stack;
      void 0 !== e4 && (this.stack = this.toString() + "\n" + e4.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e3.prototype = Object.create(t2.prototype), e3.prototype.constructor = e3, e3.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, e3;
  }
  var It = void 0;
  function Ut(t2) {
    throw new It(t2);
  }
  function Mt(t2, n, e3) {
    function r2(n2) {
      var r3 = e3(n2);
      r3.length !== t2.length && Ut("Mismatched type converter count");
      for (var i4 = 0; i4 < t2.length; ++i4)
        Lt(t2[i4], r3[i4]);
    }
    t2.forEach(function(t3) {
      Ot[t3] = n;
    });
    var i3 = new Array(n.length), o3 = [], a3 = 0;
    n.forEach(function(t3, n2) {
      jt.hasOwnProperty(t3) ? i3[n2] = jt[t3] : (o3.push(t3), St.hasOwnProperty(t3) || (St[t3] = []), St[t3].push(function() {
        i3[n2] = jt[t3], ++a3 === o3.length && r2(i3);
      }));
    }), 0 === o3.length && r2(i3);
  }
  function Vt(t2) {
    var n = At[t2];
    delete At[t2];
    var e3 = n.rawConstructor, r2 = n.rawDestructor, i3 = n.fields;
    Mt([t2], i3.map(function(t3) {
      return t3.getterReturnType;
    }).concat(i3.map(function(t3) {
      return t3.setterArgumentType;
    })), function(t3) {
      var o3 = {};
      return i3.forEach(function(n2, e4) {
        var r3 = n2.fieldName, a3 = t3[e4], u3 = n2.getter, s2 = n2.getterContext, l2 = t3[e4 + i3.length], c2 = n2.setter, f2 = n2.setterContext;
        o3[r3] = { read: function(t4) {
          return a3.fromWireType(u3(s2, t4));
        }, write: function(t4, n3) {
          var e5 = [];
          c2(f2, t4, l2.toWireType(e5, n3)), Wt(e5);
        } };
      }), [{ name: n.name, fromWireType: function(t4) {
        var n2 = {};
        for (var e4 in o3)
          n2[e4] = o3[e4].read(t4);
        return r2(t4), n2;
      }, toWireType: function(t4, n2) {
        for (var i4 in o3)
          if (!(i4 in n2))
            throw new TypeError('Missing field:  "' + i4 + '"');
        var a3 = e3();
        for (i4 in o3)
          o3[i4].write(a3, n2[i4]);
        return null !== t4 && t4.push(r2, a3), a3;
      }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: r2 }];
    });
  }
  function Ht(t2) {
    switch (t2) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + t2);
    }
  }
  function zt() {
    for (var t2 = new Array(256), n = 0; n < 256; ++n)
      t2[n] = String.fromCharCode(n);
    qt = t2;
  }
  var qt = void 0;
  function Bt(t2) {
    for (var n = "", e3 = t2; V[e3]; )
      n += qt[V[e3++]];
    return n;
  }
  var Nt = void 0;
  function Gt(t2) {
    throw new Nt(t2);
  }
  function Lt(t2, n, e3) {
    if (e3 = e3 || {}, !("argPackAdvance" in n))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var r2 = n.name;
    if (t2 || Gt('type "' + r2 + '" must have a positive integer typeid pointer'), jt.hasOwnProperty(t2)) {
      if (e3.ignoreDuplicateRegistrations)
        return;
      Gt("Cannot register type '" + r2 + "' twice");
    }
    if (jt[t2] = n, delete Ot[t2], St.hasOwnProperty(t2)) {
      var i3 = St[t2];
      delete St[t2], i3.forEach(function(t3) {
        t3();
      });
    }
  }
  function Xt(t2, n, e3, r2, i3) {
    var o3 = Ht(e3);
    Lt(t2, { name: n = Bt(n), fromWireType: function(t3) {
      return !!t3;
    }, toWireType: function(t3, n2) {
      return n2 ? r2 : i3;
    }, argPackAdvance: 8, readValueFromPointer: function(t3) {
      var r3;
      if (1 === e3)
        r3 = M;
      else if (2 === e3)
        r3 = H;
      else {
        if (4 !== e3)
          throw new TypeError("Unknown boolean type size: " + n);
        r3 = q;
      }
      return this.fromWireType(r3[t3 >> o3]);
    }, destructorFunction: null });
  }
  function Jt(t2) {
    if (!(this instanceof pn))
      return false;
    if (!(t2 instanceof pn))
      return false;
    for (var n = this.$$.ptrType.registeredClass, e3 = this.$$.ptr, r2 = t2.$$.ptrType.registeredClass, i3 = t2.$$.ptr; n.baseClass; )
      e3 = n.upcast(e3), n = n.baseClass;
    for (; r2.baseClass; )
      i3 = r2.upcast(i3), r2 = r2.baseClass;
    return n === r2 && e3 === i3;
  }
  function Yt(t2) {
    return { count: t2.count, deleteScheduled: t2.deleteScheduled, preservePointerOnDelete: t2.preservePointerOnDelete, ptr: t2.ptr, ptrType: t2.ptrType, smartPtr: t2.smartPtr, smartPtrType: t2.smartPtrType };
  }
  function Zt(t2) {
    function n(t3) {
      return t3.$$.ptrType.registeredClass.name;
    }
    Gt(n(t2) + " instance already deleted");
  }
  var Kt = false;
  function Qt(t2) {
  }
  function tn(t2) {
    t2.smartPtr ? t2.smartPtrType.rawDestructor(t2.smartPtr) : t2.ptrType.registeredClass.rawDestructor(t2.ptr);
  }
  function nn(t2) {
    t2.count.value -= 1, 0 === t2.count.value && tn(t2);
  }
  function en(t2) {
    return "undefined" == typeof FinalizationGroup ? (en = function(t3) {
      return t3;
    }, t2) : (Kt = new FinalizationGroup(function(t3) {
      for (var n = t3.next(); !n.done; n = t3.next()) {
        var e3 = n.value;
        e3.ptr ? nn(e3) : console.warn("object already deleted: " + e3.ptr);
      }
    }), en = function(t3) {
      return Kt.register(t3, t3.$$, t3.$$), t3;
    }, Qt = function(t3) {
      Kt.unregister(t3.$$);
    }, en(t2));
  }
  function rn() {
    if (this.$$.ptr || Zt(this), this.$$.preservePointerOnDelete)
      return this.$$.count.value += 1, this;
    var t2 = en(Object.create(Object.getPrototypeOf(this), { $$: { value: Yt(this.$$) } }));
    return t2.$$.count.value += 1, t2.$$.deleteScheduled = false, t2;
  }
  function on() {
    this.$$.ptr || Zt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Gt("Object already scheduled for deletion"), Qt(this), nn(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
  }
  function an() {
    return !this.$$.ptr;
  }
  var un = void 0, sn = [];
  function ln() {
    for (; sn.length; ) {
      var t2 = sn.pop();
      t2.$$.deleteScheduled = false, t2.delete();
    }
  }
  function cn() {
    return this.$$.ptr || Zt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Gt("Object already scheduled for deletion"), sn.push(this), 1 === sn.length && un && un(ln), this.$$.deleteScheduled = true, this;
  }
  function fn() {
    pn.prototype.isAliasOf = Jt, pn.prototype.clone = rn, pn.prototype.delete = on, pn.prototype.isDeleted = an, pn.prototype.deleteLater = cn;
  }
  function pn() {
  }
  var dn = {};
  function yn(t2, n, e3) {
    if (void 0 === t2[n].overloadTable) {
      var r2 = t2[n];
      t2[n] = function() {
        return t2[n].overloadTable.hasOwnProperty(arguments.length) || Gt("Function '" + e3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t2[n].overloadTable + ")!"), t2[n].overloadTable[arguments.length].apply(this, arguments);
      }, t2[n].overloadTable = [], t2[n].overloadTable[r2.argCount] = r2;
    }
  }
  function hn(t2, n, e3) {
    o2.hasOwnProperty(t2) ? ((void 0 === e3 || void 0 !== o2[t2].overloadTable && void 0 !== o2[t2].overloadTable[e3]) && Gt("Cannot register public name '" + t2 + "' twice"), yn(o2, t2, t2), o2.hasOwnProperty(e3) && Gt("Cannot register multiple overloads of a function with the same number of arguments (" + e3 + ")!"), o2[t2].overloadTable[e3] = n) : (o2[t2] = n, void 0 !== e3 && (o2[t2].numArguments = e3));
  }
  function vn(t2, n, e3, r2, i3, o3, a3, u3) {
    this.name = t2, this.constructor = n, this.instancePrototype = e3, this.rawDestructor = r2, this.baseClass = i3, this.getActualType = o3, this.upcast = a3, this.downcast = u3, this.pureVirtualFunctions = [];
  }
  function mn(t2, n, e3) {
    for (; n !== e3; )
      n.upcast || Gt("Expected null or instance of " + e3.name + ", got an instance of " + n.name), t2 = n.upcast(t2), n = n.baseClass;
    return t2;
  }
  function gn(t2, n) {
    if (null === n)
      return this.isReference && Gt("null is not a valid " + this.name), 0;
    n.$$ || Gt('Cannot pass "' + oe(n) + '" as a ' + this.name), n.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name);
    var e3 = n.$$.ptrType.registeredClass;
    return mn(n.$$.ptr, e3, this.registeredClass);
  }
  function bn(t2, n) {
    var e3;
    if (null === n)
      return this.isReference && Gt("null is not a valid " + this.name), this.isSmartPointer ? (e3 = this.rawConstructor(), null !== t2 && t2.push(this.rawDestructor, e3), e3) : 0;
    n.$$ || Gt('Cannot pass "' + oe(n) + '" as a ' + this.name), n.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && n.$$.ptrType.isConst && Gt("Cannot convert argument of type " + (n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name) + " to parameter type " + this.name);
    var r2 = n.$$.ptrType.registeredClass;
    if (e3 = mn(n.$$.ptr, r2, this.registeredClass), this.isSmartPointer)
      switch (void 0 === n.$$.smartPtr && Gt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
        case 0:
          n.$$.smartPtrType === this ? e3 = n.$$.smartPtr : Gt("Cannot convert argument of type " + (n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name) + " to parameter type " + this.name);
          break;
        case 1:
          e3 = n.$$.smartPtr;
          break;
        case 2:
          if (n.$$.smartPtrType === this)
            e3 = n.$$.smartPtr;
          else {
            var i3 = n.clone();
            e3 = this.rawShare(e3, Qn(function() {
              i3.delete();
            })), null !== t2 && t2.push(this.rawDestructor, e3);
          }
          break;
        default:
          Gt("Unsupporting sharing policy");
      }
    return e3;
  }
  function $n(t2, n) {
    if (null === n)
      return this.isReference && Gt("null is not a valid " + this.name), 0;
    n.$$ || Gt('Cannot pass "' + oe(n) + '" as a ' + this.name), n.$$.ptr || Gt("Cannot pass deleted object as a pointer of type " + this.name), n.$$.ptrType.isConst && Gt("Cannot convert argument of type " + n.$$.ptrType.name + " to parameter type " + this.name);
    var e3 = n.$$.ptrType.registeredClass;
    return mn(n.$$.ptr, e3, this.registeredClass);
  }
  function Cn(t2) {
    return this.rawGetPointee && (t2 = this.rawGetPointee(t2)), t2;
  }
  function wn(t2) {
    this.rawDestructor && this.rawDestructor(t2);
  }
  function Tn(t2) {
    null !== t2 && t2.delete();
  }
  function _n(t2, n, e3) {
    if (n === e3)
      return t2;
    if (void 0 === e3.baseClass)
      return null;
    var r2 = _n(t2, n, e3.baseClass);
    return null === r2 ? null : e3.downcast(r2);
  }
  function Pn() {
    return Object.keys(Sn).length;
  }
  function An() {
    var t2 = [];
    for (var n in Sn)
      Sn.hasOwnProperty(n) && t2.push(Sn[n]);
    return t2;
  }
  function Wn(t2) {
    un = t2, sn.length && un && un(ln);
  }
  function En() {
    o2.getInheritedInstanceCount = Pn, o2.getLiveInheritedInstances = An, o2.flushPendingDeletes = ln, o2.setDelayFunction = Wn;
  }
  var Sn = {};
  function jn(t2, n) {
    for (void 0 === n && Gt("ptr should not be undefined"); t2.baseClass; )
      n = t2.upcast(n), t2 = t2.baseClass;
    return n;
  }
  function On(t2, n) {
    return n = jn(t2, n), Sn[n];
  }
  function kn(t2, n) {
    return n.ptrType && n.ptr || Ut("makeClassHandle requires ptr and ptrType"), !!n.smartPtrType != !!n.smartPtr && Ut("Both smartPtrType and smartPtr must be specified"), n.count = { value: 1 }, en(Object.create(t2, { $$: { value: n } }));
  }
  function Fn(t2) {
    var n = this.getPointee(t2);
    if (!n)
      return this.destructor(t2), null;
    var e3 = On(this.registeredClass, n);
    if (void 0 !== e3) {
      if (0 === e3.$$.count.value)
        return e3.$$.ptr = n, e3.$$.smartPtr = t2, e3.clone();
      var r2 = e3.clone();
      return this.destructor(t2), r2;
    }
    function i3() {
      return this.isSmartPointer ? kn(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: n, smartPtrType: this, smartPtr: t2 }) : kn(this.registeredClass.instancePrototype, { ptrType: this, ptr: t2 });
    }
    var o3, a3 = this.registeredClass.getActualType(n), u3 = dn[a3];
    if (!u3)
      return i3.call(this);
    o3 = this.isConst ? u3.constPointerType : u3.pointerType;
    var s2 = _n(n, this.registeredClass, o3.registeredClass);
    return null === s2 ? i3.call(this) : this.isSmartPointer ? kn(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2, smartPtrType: this, smartPtr: t2 }) : kn(o3.registeredClass.instancePrototype, { ptrType: o3, ptr: s2 });
  }
  function Rn() {
    xn.prototype.getPointee = Cn, xn.prototype.destructor = wn, xn.prototype.argPackAdvance = 8, xn.prototype.readValueFromPointer = Et, xn.prototype.deleteObject = Tn, xn.prototype.fromWireType = Fn;
  }
  function xn(t2, n, e3, r2, i3, o3, a3, u3, s2, l2, c2) {
    this.name = t2, this.registeredClass = n, this.isReference = e3, this.isConst = r2, this.isSmartPointer = i3, this.pointeeType = o3, this.sharingPolicy = a3, this.rawGetPointee = u3, this.rawConstructor = s2, this.rawShare = l2, this.rawDestructor = c2, i3 || void 0 !== n.baseClass ? this.toWireType = bn : r2 ? (this.toWireType = gn, this.destructorFunction = null) : (this.toWireType = $n, this.destructorFunction = null);
  }
  function Dn(t2, n, e3) {
    o2.hasOwnProperty(t2) || Ut("Replacing nonexistant public symbol"), void 0 !== o2[t2].overloadTable && void 0 !== e3 ? o2[t2].overloadTable[e3] = n : (o2[t2] = n, o2[t2].argCount = e3);
  }
  function In(t2, n) {
    function e3(t3) {
      var e4 = [n];
      return function() {
        e4.length = arguments.length + 1;
        for (var n2 = 0; n2 < arguments.length; n2++)
          e4[n2 + 1] = arguments[n2];
        return t3.apply(null, e4);
      };
    }
    t2 = Bt(t2);
    var r2 = e3(o2["dynCall_" + t2]);
    return "function" != typeof r2 && Gt("unknown function pointer with signature " + t2 + ": " + n), r2;
  }
  var Un = void 0;
  function Mn(t2) {
    var n = Ke(t2), e3 = Bt(n);
    return Ze(n), e3;
  }
  function Vn(t2, n) {
    var e3 = [], r2 = {};
    function i3(t3) {
      r2[t3] || jt[t3] || (Ot[t3] ? Ot[t3].forEach(i3) : (e3.push(t3), r2[t3] = true));
    }
    throw n.forEach(i3), new Un(t2 + ": " + e3.map(Mn).join([", "]));
  }
  function Hn(t2, n, e3, r2, i3, o3, a3, u3, s2, l2, c2, f2, p2) {
    c2 = Bt(c2), o3 = In(i3, o3), u3 && (u3 = In(a3, u3)), l2 && (l2 = In(s2, l2)), p2 = In(f2, p2);
    var d2 = Rt(c2);
    hn(d2, function() {
      Vn("Cannot construct " + c2 + " due to unbound types", [r2]);
    }), Mt([t2, n, e3], r2 ? [r2] : [], function(n2) {
      var e4, i4;
      n2 = n2[0], i4 = r2 ? (e4 = n2.registeredClass).instancePrototype : pn.prototype;
      var a4 = xt(d2, function() {
        if (Object.getPrototypeOf(this) !== s3)
          throw new Nt("Use 'new' to construct " + c2);
        if (void 0 === f3.constructor_body)
          throw new Nt(c2 + " has no accessible constructor");
        var t3 = f3.constructor_body[arguments.length];
        if (void 0 === t3)
          throw new Nt("Tried to invoke ctor of " + c2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f3.constructor_body).toString() + ") parameters instead!");
        return t3.apply(this, arguments);
      }), s3 = Object.create(i4, { constructor: { value: a4 } });
      a4.prototype = s3;
      var f3 = new vn(c2, a4, s3, p2, e4, o3, u3, l2), y2 = new xn(c2, f3, true, false, false), h2 = new xn(c2 + "*", f3, false, false, false), v2 = new xn(c2 + " const*", f3, false, true, false);
      return dn[t2] = { pointerType: h2, constPointerType: v2 }, Dn(d2, a4), [y2, h2, v2];
    });
  }
  function zn(t2, n) {
    for (var e3 = [], r2 = 0; r2 < t2; r2++)
      e3.push(q[(n >> 2) + r2]);
    return e3;
  }
  function qn(t2, n, e3, r2, i3, o3) {
    _(n > 0);
    var a3 = zn(n, e3);
    i3 = In(r2, i3);
    var u3 = [o3], s2 = [];
    Mt([], [t2], function(t3) {
      var e4 = "constructor " + (t3 = t3[0]).name;
      if (void 0 === t3.registeredClass.constructor_body && (t3.registeredClass.constructor_body = []), void 0 !== t3.registeredClass.constructor_body[n - 1])
        throw new Nt("Cannot register multiple constructors with identical number of parameters (" + (n - 1) + ") for class '" + t3.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      return t3.registeredClass.constructor_body[n - 1] = function() {
        Vn("Cannot construct " + t3.name + " due to unbound types", a3);
      }, Mt([], a3, function(r3) {
        return t3.registeredClass.constructor_body[n - 1] = function() {
          arguments.length !== n - 1 && Gt(e4 + " called with " + arguments.length + " arguments, expected " + (n - 1)), s2.length = 0, u3.length = n;
          for (var t4 = 1; t4 < n; ++t4)
            u3[t4] = r3[t4].toWireType(s2, arguments[t4 - 1]);
          var o4 = i3.apply(null, u3);
          return Wt(s2), r3[0].fromWireType(o4);
        }, [];
      }), [];
    });
  }
  function Bn(t2, n, e3, r2, i3) {
    var o3 = n.length;
    o3 < 2 && Gt("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var a3 = null !== n[1] && null !== e3, u3 = false, s2 = 1; s2 < n.length; ++s2)
      if (null !== n[s2] && void 0 === n[s2].destructorFunction) {
        u3 = true;
        break;
      }
    var l2 = "void" !== n[0].name, c2 = o3 - 2, f2 = new Array(c2), p2 = [], d2 = [];
    return function() {
      var e4;
      arguments.length !== c2 && Gt("function " + t2 + " called with " + arguments.length + " arguments, expected " + c2 + " args!"), d2.length = 0, p2.length = a3 ? 2 : 1, p2[0] = i3, a3 && (e4 = n[1].toWireType(d2, this), p2[1] = e4);
      for (var o4 = 0; o4 < c2; ++o4)
        f2[o4] = n[o4 + 2].toWireType(d2, arguments[o4]), p2.push(f2[o4]);
      var s3 = r2.apply(null, p2);
      if (u3)
        Wt(d2);
      else
        for (o4 = a3 ? 1 : 2; o4 < n.length; o4++) {
          var y2 = 1 === o4 ? e4 : f2[o4 - 2];
          null !== n[o4].destructorFunction && n[o4].destructorFunction(y2);
        }
      if (l2)
        return n[0].fromWireType(s3);
    };
  }
  function Nn(t2, n, e3, r2, i3, o3, a3, u3) {
    var s2 = zn(e3, r2);
    n = Bt(n), o3 = In(i3, o3), Mt([], [t2], function(t3) {
      var r3 = (t3 = t3[0]).name + "." + n;
      function i4() {
        Vn("Cannot call " + r3 + " due to unbound types", s2);
      }
      u3 && t3.registeredClass.pureVirtualFunctions.push(n);
      var l2 = t3.registeredClass.instancePrototype, c2 = l2[n];
      return void 0 === c2 || void 0 === c2.overloadTable && c2.className !== t3.name && c2.argCount === e3 - 2 ? (i4.argCount = e3 - 2, i4.className = t3.name, l2[n] = i4) : (yn(l2, n, r3), l2[n].overloadTable[e3 - 2] = i4), Mt([], s2, function(i5) {
        var u4 = Bn(r3, i5, t3, o3, a3);
        return void 0 === l2[n].overloadTable ? (u4.argCount = e3 - 2, l2[n] = u4) : l2[n].overloadTable[e3 - 2] = u4, [];
      }), [];
    });
  }
  function Gn(t2, n, e3) {
    t2 = Bt(t2), Mt([], [n], function(n2) {
      return n2 = n2[0], o2[t2] = n2.fromWireType(e3), [];
    });
  }
  var Ln = [], Xn = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function Jn(t2) {
    t2 > 4 && 0 == --Xn[t2].refcount && (Xn[t2] = void 0, Ln.push(t2));
  }
  function Yn() {
    for (var t2 = 0, n = 5; n < Xn.length; ++n)
      void 0 !== Xn[n] && ++t2;
    return t2;
  }
  function Zn() {
    for (var t2 = 5; t2 < Xn.length; ++t2)
      if (void 0 !== Xn[t2])
        return Xn[t2];
    return null;
  }
  function Kn() {
    o2.count_emval_handles = Yn, o2.get_first_emval = Zn;
  }
  function Qn(t2) {
    switch (t2) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        var n = Ln.length ? Ln.pop() : Xn.length;
        return Xn[n] = { refcount: 1, value: t2 }, n;
    }
  }
  function te(t2, n) {
    Lt(t2, { name: n = Bt(n), fromWireType: function(t3) {
      var n2 = Xn[t3].value;
      return Jn(t3), n2;
    }, toWireType: function(t3, n2) {
      return Qn(n2);
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: null });
  }
  function ne(t2, n, e3) {
    switch (n) {
      case 0:
        return function(t3) {
          var n2 = e3 ? M : V;
          return this.fromWireType(n2[t3]);
        };
      case 1:
        return function(t3) {
          var n2 = e3 ? H : z;
          return this.fromWireType(n2[t3 >> 1]);
        };
      case 2:
        return function(t3) {
          var n2 = e3 ? q : B;
          return this.fromWireType(n2[t3 >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + t2);
    }
  }
  function ee(t2, n, e3, r2) {
    var i3 = Ht(e3);
    function o3() {
    }
    n = Bt(n), o3.values = {}, Lt(t2, { name: n, constructor: o3, fromWireType: function(t3) {
      return this.constructor.values[t3];
    }, toWireType: function(t3, n2) {
      return n2.value;
    }, argPackAdvance: 8, readValueFromPointer: ne(n, i3, r2), destructorFunction: null }), hn(n, o3);
  }
  function re(t2, n) {
    var e3 = jt[t2];
    return void 0 === e3 && Gt(n + " has unknown type " + Mn(t2)), e3;
  }
  function ie(t2, n, e3) {
    var r2 = re(t2, "enum");
    n = Bt(n);
    var i3 = r2.constructor, o3 = Object.create(r2.constructor.prototype, { value: { value: e3 }, constructor: { value: xt(r2.name + "_" + n, function() {
    }) } });
    i3.values[e3] = o3, i3[n] = o3;
  }
  function oe(t2) {
    if (null === t2)
      return "null";
    var n = typeof t2;
    return "object" === n || "array" === n || "function" === n ? t2.toString() : "" + t2;
  }
  function ae(t2, n) {
    switch (n) {
      case 2:
        return function(t3) {
          return this.fromWireType(N[t3 >> 2]);
        };
      case 3:
        return function(t3) {
          return this.fromWireType(G[t3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + t2);
    }
  }
  function ue(t2, n, e3) {
    var r2 = Ht(e3);
    Lt(t2, { name: n = Bt(n), fromWireType: function(t3) {
      return t3;
    }, toWireType: function(t3, n2) {
      if ("number" != typeof n2 && "boolean" != typeof n2)
        throw new TypeError('Cannot convert "' + oe(n2) + '" to ' + this.name);
      return n2;
    }, argPackAdvance: 8, readValueFromPointer: ae(n, r2), destructorFunction: null });
  }
  function se(t2, n, e3, r2, i3, o3) {
    var a3 = zn(n, e3);
    t2 = Bt(t2), i3 = In(r2, i3), hn(t2, function() {
      Vn("Cannot call " + t2 + " due to unbound types", a3);
    }, n - 1), Mt([], a3, function(e4) {
      var r3 = [e4[0], null].concat(e4.slice(1));
      return Dn(t2, Bn(t2, r3, null, i3, o3), n - 1), [];
    });
  }
  function le(t2, n, e3) {
    switch (n) {
      case 0:
        return e3 ? function(t3) {
          return M[t3];
        } : function(t3) {
          return V[t3];
        };
      case 1:
        return e3 ? function(t3) {
          return H[t3 >> 1];
        } : function(t3) {
          return z[t3 >> 1];
        };
      case 2:
        return e3 ? function(t3) {
          return q[t3 >> 2];
        } : function(t3) {
          return B[t3 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + t2);
    }
  }
  function ce(t2, n, e3, r2, i3) {
    n = Bt(n), -1 === i3 && (i3 = 4294967295);
    var o3 = Ht(e3), a3 = function(t3) {
      return t3;
    };
    if (0 === r2) {
      var u3 = 32 - 8 * e3;
      a3 = function(t3) {
        return t3 << u3 >>> u3;
      };
    }
    var s2 = -1 != n.indexOf("unsigned");
    Lt(t2, { name: n, fromWireType: a3, toWireType: function(t3, e4) {
      if ("number" != typeof e4 && "boolean" != typeof e4)
        throw new TypeError('Cannot convert "' + oe(e4) + '" to ' + this.name);
      if (e4 < r2 || e4 > i3)
        throw new TypeError('Passing a number "' + oe(e4) + '" from JS side to C/C++ side to an argument of type "' + n + '", which is outside the valid range [' + r2 + ", " + i3 + "]!");
      return s2 ? e4 >>> 0 : 0 | e4;
    }, argPackAdvance: 8, readValueFromPointer: le(n, o3, 0 !== r2), destructorFunction: null });
  }
  function fe(t2, n, e3) {
    var r2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][n];
    function i3(t3) {
      var n2 = B, e4 = n2[t3 >>= 2], i4 = n2[t3 + 1];
      return new r2(U, i4, e4);
    }
    Lt(t2, { name: e3 = Bt(e3), fromWireType: i3, argPackAdvance: 8, readValueFromPointer: i3 }, { ignoreDuplicateRegistrations: true });
  }
  function pe(t2, n) {
    var e3 = "std::string" === (n = Bt(n));
    Lt(t2, { name: n, fromWireType: function(t3) {
      var n2, r2 = B[t3 >> 2];
      if (e3)
        for (var i3 = t3 + 4, o3 = 0; o3 <= r2; ++o3) {
          var a3 = t3 + 4 + o3;
          if (o3 == r2 || 0 == V[a3]) {
            var u3 = W(i3, a3 - i3);
            void 0 === n2 ? n2 = u3 : (n2 += String.fromCharCode(0), n2 += u3), i3 = a3 + 1;
          }
        }
      else {
        var s2 = new Array(r2);
        for (o3 = 0; o3 < r2; ++o3)
          s2[o3] = String.fromCharCode(V[t3 + 4 + o3]);
        n2 = s2.join("");
      }
      return Ze(t3), n2;
    }, toWireType: function(t3, n2) {
      n2 instanceof ArrayBuffer && (n2 = new Uint8Array(n2));
      var r2 = "string" == typeof n2;
      r2 || n2 instanceof Uint8Array || n2 instanceof Uint8ClampedArray || n2 instanceof Int8Array || Gt("Cannot pass non-string to std::string");
      var i3 = (e3 && r2 ? function() {
        return j(n2);
      } : function() {
        return n2.length;
      })(), o3 = Ye(4 + i3 + 1);
      if (B[o3 >> 2] = i3, e3 && r2)
        S(n2, o3 + 4, i3 + 1);
      else if (r2)
        for (var a3 = 0; a3 < i3; ++a3) {
          var u3 = n2.charCodeAt(a3);
          u3 > 255 && (Ze(o3), Gt("String has UTF-16 code units that do not fit in 8 bits")), V[o3 + 4 + a3] = u3;
        }
      else
        for (a3 = 0; a3 < i3; ++a3)
          V[o3 + 4 + a3] = n2[a3];
      return null !== t3 && t3.push(Ze, o3), o3;
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: function(t3) {
      Ze(t3);
    } });
  }
  function de(t2, n, e3) {
    var r2, i3, o3, a3, u3;
    e3 = Bt(e3), 2 === n ? (r2 = k, i3 = F, a3 = R, o3 = function() {
      return z;
    }, u3 = 1) : 4 === n && (r2 = x, i3 = D, a3 = I, o3 = function() {
      return B;
    }, u3 = 2), Lt(t2, { name: e3, fromWireType: function(t3) {
      for (var e4, i4 = B[t3 >> 2], a4 = o3(), s2 = t3 + 4, l2 = 0; l2 <= i4; ++l2) {
        var c2 = t3 + 4 + l2 * n;
        if (l2 == i4 || 0 == a4[c2 >> u3]) {
          var f2 = r2(s2, c2 - s2);
          void 0 === e4 ? e4 = f2 : (e4 += String.fromCharCode(0), e4 += f2), s2 = c2 + n;
        }
      }
      return Ze(t3), e4;
    }, toWireType: function(t3, r3) {
      "string" != typeof r3 && Gt("Cannot pass non-string to C++ string type " + e3);
      var o4 = a3(r3), s2 = Ye(4 + o4 + n);
      return B[s2 >> 2] = o4 >> u3, i3(r3, s2 + 4, o4 + n), null !== t3 && t3.push(Ze, s2), s2;
    }, argPackAdvance: 8, readValueFromPointer: Et, destructorFunction: function(t3) {
      Ze(t3);
    } });
  }
  function ye(t2, n, e3, r2, i3, o3) {
    At[t2] = { name: Bt(n), rawConstructor: In(e3, r2), rawDestructor: In(i3, o3), fields: [] };
  }
  function he(t2, n, e3, r2, i3, o3, a3, u3, s2, l2) {
    At[t2].fields.push({ fieldName: Bt(n), getterReturnType: e3, getter: In(r2, i3), getterContext: o3, setterArgumentType: a3, setter: In(u3, s2), setterContext: l2 });
  }
  function ve(t2, n) {
    Lt(t2, { isVoid: true, name: n = Bt(n), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(t3, n2) {
    } });
  }
  function me(t2) {
    return t2 || Gt("Cannot use deleted val. handle = " + t2), Xn[t2].value;
  }
  function ge(t2, n, e3) {
    t2 = me(t2), n = re(n, "emval::as");
    var r2 = [], i3 = Qn(r2);
    return q[e3 >> 2] = i3, n.toWireType(r2, t2);
  }
  var be = {};
  function $e(t2) {
    var n = be[t2];
    return void 0 === n ? Bt(t2) : n;
  }
  var Ce = [];
  function we(t2, n, e3, r2) {
    (t2 = Ce[t2])(n = me(n), e3 = $e(e3), null, r2);
  }
  function Te() {
    if ("object" == typeof globalThis)
      return globalThis;
    function t2(t3) {
      t3.$$$embind_global$$$ = t3;
      var n = "object" == typeof $$$embind_global$$$ && t3.$$$embind_global$$$ === t3;
      return n || delete t3.$$$embind_global$$$, n;
    }
    if ("object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    if ("object" == typeof e$1 && t2(e$1) ? $$$embind_global$$$ = e$1 : "object" == typeof self && t2(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function _e(t2) {
    return 0 === t2 ? Qn(Te()) : (t2 = $e(t2), Qn(Te()[t2]));
  }
  function Pe(t2) {
    var n = Ce.length;
    return Ce.push(t2), n;
  }
  function Ae(t2, n) {
    for (var e3 = new Array(t2), r2 = 0; r2 < t2; ++r2)
      e3[r2] = re(q[(n >> 2) + r2], "parameter " + r2);
    return e3;
  }
  function We(t2, n) {
    var e3 = Ae(t2, n), r2 = e3[0], i3 = new Array(t2 - 1);
    return Pe(function(n2, o3, a3, u3) {
      for (var s2 = 0, l2 = 0; l2 < t2 - 1; ++l2)
        i3[l2] = e3[l2 + 1].readValueFromPointer(u3 + s2), s2 += e3[l2 + 1].argPackAdvance;
      var c2 = n2[o3].apply(n2, i3);
      for (l2 = 0; l2 < t2 - 1; ++l2)
        e3[l2 + 1].deleteObject && e3[l2 + 1].deleteObject(i3[l2]);
      if (!r2.isVoid)
        return r2.toWireType(a3, c2);
    });
  }
  function Ee(t2) {
    return t2 = $e(t2), Qn(o2[t2]);
  }
  function Se(t2, n) {
    return Qn((t2 = me(t2))[n = me(n)]);
  }
  function je(t2) {
    t2 > 4 && (Xn[t2].refcount += 1);
  }
  function Oe(t2) {
    var n = new Array(t2 + 1);
    return function(e3, r2, i3) {
      n[0] = e3;
      for (var o3 = 0; o3 < t2; ++o3) {
        var a3 = re(q[(r2 >> 2) + o3], "parameter " + o3);
        n[o3 + 1] = a3.readValueFromPointer(i3), i3 += a3.argPackAdvance;
      }
      return Qn(new (e3.bind.apply(e3, n))());
    };
  }
  var ke = {};
  function Fe(t2, n, e3, r2) {
    t2 = me(t2);
    var i3 = ke[n];
    return i3 || (i3 = Oe(n), ke[n] = i3), i3(t2, e3, r2);
  }
  function Re(t2) {
    return Qn($e(t2));
  }
  function xe(t2) {
    Wt(Xn[t2].value), Jn(t2);
  }
  function De() {
    vt();
  }
  function Ie(t2, n, e3) {
    V.copyWithin(t2, n, n + e3);
  }
  function Ue() {
    return V.length;
  }
  function Me(t2) {
    try {
      return b.grow(t2 - U.byteLength + 65535 >>> 16), J(b.buffer), 1;
    } catch (n) {
    }
  }
  function Ve(t2) {
    t2 >>>= 0;
    var n = Ue(), e3 = 65536, r2 = 2147483648;
    if (t2 > r2)
      return false;
    for (var i3 = 16777216, o3 = 1; o3 <= 4; o3 *= 2) {
      var a3 = n * (1 + 0.2 / o3);
      if (a3 = Math.min(a3, t2 + 100663296), Me(Math.min(r2, X(Math.max(i3, t2, a3), e3))))
        return true;
    }
    return false;
  }
  var He = { mappings: {}, buffers: [null, [], []], printChar: function(t2, n) {
    var e3 = He.buffers[t2];
    0 === n || 10 === n ? ((1 === t2 ? $ : C)(A(e3, 0)), e3.length = 0) : e3.push(n);
  }, varargs: void 0, get: function() {
    return He.varargs += 4, q[He.varargs - 4 >> 2];
  }, getStr: function(t2) {
    return W(t2);
  }, get64: function(t2, n) {
    return t2;
  } };
  function ze(t2) {
    return 0;
  }
  function qe(t2, n, e3, r2, i3) {
  }
  function Be(t2, n, e3, r2) {
    for (var i3 = 0, o3 = 0; o3 < e3; o3++) {
      for (var a3 = q[n + 8 * o3 >> 2], u3 = q[n + (8 * o3 + 4) >> 2], s2 = 0; s2 < u3; s2++)
        He.printChar(t2, V[a3 + s2]);
      i3 += u3;
    }
    return q[r2 >> 2] = i3, 0;
  }
  function Ne(t2) {
    return (t2 = +t2) >= 0 ? +ft(t2 + 0.5) : +ct(t2 - 0.5);
  }
  function Ge(t2) {
  }
  It = o2.InternalError = Dt(Error, "InternalError"), zt(), Nt = o2.BindingError = Dt(Error, "BindingError"), fn(), Rn(), En(), Un = o2.UnboundTypeError = Dt(Error, "UnboundTypeError"), Kn();
  var Le = { u: Vt, J: Xt, y: Hn, x: qn, d: Nn, k: Gn, I: te, n: ee, a: ie, B: ue, i: se, j: ce, h: fe, C: pe, w: de, v: ye, c: he, K: ve, m: ge, s: we, b: Jn, z: _e, t: We, r: Ee, e: Se, g: je, q: Fe, f: Re, l: xe, p: De, F: Ie, G: Ve, H: ze, D: qe, A: Be, memory: b, o: Ne, E: Ge, table: w };
  Pt();
  var Xe, Je = o2.___wasm_call_ctors = function() {
    return (Je = o2.___wasm_call_ctors = o2.asm.L).apply(null, arguments);
  }, Ye = o2._malloc = function() {
    return (Ye = o2._malloc = o2.asm.M).apply(null, arguments);
  }, Ze = o2._free = function() {
    return (Ze = o2._free = o2.asm.N).apply(null, arguments);
  }, Ke = o2.___getTypeName = function() {
    return (Ke = o2.___getTypeName = o2.asm.O).apply(null, arguments);
  };
  function Qe(t2) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + t2 + ")", this.status = t2;
  }
  function tr(t2) {
    function n() {
      Xe || (Xe = true, o2.calledRun = true, T || (ot(), at(), e2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), ut()));
    }
    pt > 0 || (it(), pt > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), n();
    }, 1)) : n()));
  }
  if (o2.___embind_register_native_and_builtin_types = function() {
    return (o2.___embind_register_native_and_builtin_types = o2.asm.P).apply(null, arguments);
  }, o2.dynCall_viii = function() {
    return (o2.dynCall_viii = o2.asm.Q).apply(null, arguments);
  }, o2.dynCall_vi = function() {
    return (o2.dynCall_vi = o2.asm.R).apply(null, arguments);
  }, o2.dynCall_v = function() {
    return (o2.dynCall_v = o2.asm.S).apply(null, arguments);
  }, o2.dynCall_i = function() {
    return (o2.dynCall_i = o2.asm.T).apply(null, arguments);
  }, o2.dynCall_iii = function() {
    return (o2.dynCall_iii = o2.asm.U).apply(null, arguments);
  }, o2.dynCall_ii = function() {
    return (o2.dynCall_ii = o2.asm.V).apply(null, arguments);
  }, o2.dynCall_vii = function() {
    return (o2.dynCall_vii = o2.asm.W).apply(null, arguments);
  }, o2.dynCall_iiii = function() {
    return (o2.dynCall_iiii = o2.asm.X).apply(null, arguments);
  }, o2.dynCall_iiiii = function() {
    return (o2.dynCall_iiiii = o2.asm.Y).apply(null, arguments);
  }, o2.dynCall_iiiiii = function() {
    return (o2.dynCall_iiiiii = o2.asm.Z).apply(null, arguments);
  }, o2.dynCall_iiiiiiii = function() {
    return (o2.dynCall_iiiiiiii = o2.asm._).apply(null, arguments);
  }, o2.dynCall_iiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiii = o2.asm.$).apply(null, arguments);
  }, o2.dynCall_viiii = function() {
    return (o2.dynCall_viiii = o2.asm.aa).apply(null, arguments);
  }, o2.dynCall_iiiiiii = function() {
    return (o2.dynCall_iiiiiii = o2.asm.ba).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiiii = o2.asm.ca).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiiiii = o2.asm.da).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiiiiiiiiiii = o2.asm.ea).apply(null, arguments);
  }, o2.dynCall_viiiii = function() {
    return (o2.dynCall_viiiii = o2.asm.fa).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiii = o2.asm.ga).apply(null, arguments);
  }, o2.dynCall_iiiiiiiiiii = function() {
    return (o2.dynCall_iiiiiiiiiii = o2.asm.ha).apply(null, arguments);
  }, o2.dynCall_jiji = function() {
    return (o2.dynCall_jiji = o2.asm.ia).apply(null, arguments);
  }, o2.dynCall_viiiiii = function() {
    return (o2.dynCall_viiiiii = o2.asm.ja).apply(null, arguments);
  }, dt = function t2() {
    Xe || tr(), Xe || (dt = t2);
  }, o2.run = tr, o2.preInit)
    for ("function" == typeof o2.preInit && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  return tr(), t.ready;
}, e.exports = i;
const a = o$1(o.exports), u = Object.freeze(Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, { value: "Module" }));
export {
  u as b
};
