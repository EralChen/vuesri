import { bk as o$1, i4 as e$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var e, r, a, o = { exports: {} };
e = o, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, a = function(n) {
  var e2, a2, o2;
  n = n || {}, e2 || (e2 = void 0 !== n ? n : {}), e2.ready = new Promise(function(n2, t) {
    a2 = n2, o2 = t;
  });
  var i2 = Object.assign({}, e2), u2 = "./this.program", c = "";
  "undefined" != typeof document && document.currentScript && (c = document.currentScript.src), r && (c = r), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
  var f, s = e2.print || console.log.bind(console), l = e2.printErr || console.warn.bind(console);
  Object.assign(e2, i2), i2 = null, e2.thisProgram && (u2 = e2.thisProgram), e2.wasmBinary && (f = e2.wasmBinary), e2.noExitRuntime, "object" != typeof WebAssembly && R("no native wasm support detected");
  var h, d, p, v, m, y, g, b, w, A, T, _, C = false, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function $(n2, t, e3) {
    var r2 = t + e3;
    for (e3 = t; n2[e3] && !(e3 >= r2); )
      ++e3;
    if (16 < e3 - t && n2.buffer && P)
      return P.decode(n2.subarray(t, e3));
    for (r2 = ""; t < e3; ) {
      var a3 = n2[t++];
      if (128 & a3) {
        var o3 = 63 & n2[t++];
        if (192 == (224 & a3))
          r2 += String.fromCharCode((31 & a3) << 6 | o3);
        else {
          var i3 = 63 & n2[t++];
          65536 > (a3 = 224 == (240 & a3) ? (15 & a3) << 12 | o3 << 6 | i3 : (7 & a3) << 18 | o3 << 12 | i3 << 6 | 63 & n2[t++]) ? r2 += String.fromCharCode(a3) : (a3 -= 65536, r2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3));
        }
      } else
        r2 += String.fromCharCode(a3);
    }
    return r2;
  }
  function k(n2, t, e3, r2) {
    if (0 < r2) {
      r2 = e3 + r2 - 1;
      for (var a3 = 0; a3 < n2.length; ++a3) {
        var o3 = n2.charCodeAt(a3);
        if (55296 <= o3 && 57343 >= o3 && (o3 = 65536 + ((1023 & o3) << 10) | 1023 & n2.charCodeAt(++a3)), 127 >= o3) {
          if (e3 >= r2)
            break;
          t[e3++] = o3;
        } else {
          if (2047 >= o3) {
            if (e3 + 1 >= r2)
              break;
            t[e3++] = 192 | o3 >> 6;
          } else {
            if (65535 >= o3) {
              if (e3 + 2 >= r2)
                break;
              t[e3++] = 224 | o3 >> 12;
            } else {
              if (e3 + 3 >= r2)
                break;
              t[e3++] = 240 | o3 >> 18, t[e3++] = 128 | o3 >> 12 & 63;
            }
            t[e3++] = 128 | o3 >> 6 & 63;
          }
          t[e3++] = 128 | 63 & o3;
        }
      }
      t[e3] = 0;
    }
  }
  function W(n2) {
    for (var t = 0, e3 = 0; e3 < n2.length; ++e3) {
      var r2 = n2.charCodeAt(e3);
      127 >= r2 ? t++ : 2047 >= r2 ? t += 2 : 55296 <= r2 && 57343 >= r2 ? (t += 4, ++e3) : t += 3;
    }
    return t;
  }
  function E() {
    var n2 = h.buffer;
    d = n2, e2.HEAP8 = p = new Int8Array(n2), e2.HEAP16 = m = new Int16Array(n2), e2.HEAP32 = g = new Int32Array(n2), e2.HEAPU8 = v = new Uint8Array(n2), e2.HEAPU16 = y = new Uint16Array(n2), e2.HEAPU32 = b = new Uint32Array(n2), e2.HEAPF32 = w = new Float32Array(n2), e2.HEAPF64 = _ = new Float64Array(n2), e2.HEAP64 = A = new BigInt64Array(n2), e2.HEAPU64 = T = new BigUint64Array(n2);
  }
  var j, O = [], S = [], F = [];
  function D() {
    var n2 = e2.preRun.shift();
    O.unshift(n2);
  }
  var M, U = 0, I = null;
  function R(n2) {
    throw e2.onAbort && e2.onAbort(n2), l(n2 = "Aborted(" + n2 + ")"), C = true, n2 = new WebAssembly.RuntimeError(n2 + ". Build with -sASSERTIONS for more info."), o2(n2), n2;
  }
  function x() {
    return M.startsWith("data:application/octet-stream;base64,");
  }
  if (M = "arcgis-knowledge-client-core.wasm", !x()) {
    var H = M;
    M = e2.locateFile ? e2.locateFile(H, c) : c + H;
  }
  function Y() {
    var n2 = M;
    try {
      if (n2 == M && f)
        return new Uint8Array(f);
      throw "both async and sync fetching of the wasm failed";
    } catch (t) {
      R(t);
    }
  }
  function V() {
    return f || "function" != typeof fetch ? Promise.resolve().then(function() {
      return Y();
    }) : fetch(M, { credentials: "same-origin" }).then(function(n2) {
      if (!n2.ok)
        throw "failed to load wasm binary file at '" + M + "'";
      return n2.arrayBuffer();
    }).catch(function() {
      return Y();
    });
  }
  function B(n2) {
    for (; 0 < n2.length; )
      n2.shift()(e2);
  }
  function z(n2) {
    this.fa = n2 - 24, this.Ya = function(n3) {
      b[this.fa + 4 >> 2] = n3;
    }, this.Oa = function(n3) {
      b[this.fa + 8 >> 2] = n3;
    }, this.Ua = function() {
      g[this.fa >> 2] = 0;
    }, this.Ma = function() {
      p[this.fa + 12 >> 0] = 0;
    }, this.Va = function() {
      p[this.fa + 13 >> 0] = 0;
    }, this.Ia = function(n3, t) {
      this.La(), this.Ya(n3), this.Oa(t), this.Ua(), this.Ma(), this.Va();
    }, this.La = function() {
      b[this.fa + 16 >> 2] = 0;
    };
  }
  var q = {};
  function N(n2) {
    for (; n2.length; ) {
      var t = n2.pop();
      n2.pop()(t);
    }
  }
  function L(n2) {
    return this.fromWireType(g[n2 >> 2]);
  }
  var G = {}, J = {}, X = {};
  function Z(n2) {
    if (void 0 === n2)
      return "_unknown";
    var t = (n2 = n2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return 48 <= t && 57 >= t ? "_" + n2 : n2;
  }
  function K(n2, t) {
    return n2 = Z(n2), function() {
      return t.apply(this, arguments);
    };
  }
  function Q(n2) {
    var t = Error, e3 = K(n2, function(t2) {
      this.name = n2, this.message = t2, void 0 !== (t2 = Error(t2).stack) && (this.stack = this.toString() + "\n" + t2.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e3.prototype = Object.create(t.prototype), e3.prototype.constructor = e3, e3.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, e3;
  }
  var nn = void 0;
  function tn(n2) {
    throw new nn(n2);
  }
  function en(n2, t, e3) {
    function r2(t2) {
      (t2 = e3(t2)).length !== n2.length && tn("Mismatched type converter count");
      for (var r3 = 0; r3 < n2.length; ++r3)
        fn(n2[r3], t2[r3]);
    }
    n2.forEach(function(n3) {
      X[n3] = t;
    });
    var a3 = Array(t.length), o3 = [], i3 = 0;
    t.forEach((n3, t2) => {
      J.hasOwnProperty(n3) ? a3[t2] = J[n3] : (o3.push(n3), G.hasOwnProperty(n3) || (G[n3] = []), G[n3].push(() => {
        a3[t2] = J[n3], ++i3 === o3.length && r2(a3);
      }));
    }), 0 === o3.length && r2(a3);
  }
  function rn(n2) {
    if (null === n2)
      return "null";
    var t = typeof n2;
    return "object" === t || "array" === t || "function" === t ? n2.toString() : "" + n2;
  }
  var an = void 0;
  function on(n2) {
    for (var t = ""; v[n2]; )
      t += an[v[n2++]];
    return t;
  }
  var un = void 0;
  function cn(n2) {
    throw new un(n2);
  }
  function fn(n2, t, e3 = {}) {
    if (!("argPackAdvance" in t))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var r2 = t.name;
    if (n2 || cn('type "' + r2 + '" must have a positive integer typeid pointer'), J.hasOwnProperty(n2)) {
      if (e3.Wa)
        return;
      cn("Cannot register type '" + r2 + "' twice");
    }
    J[n2] = t, delete X[n2], G.hasOwnProperty(n2) && (t = G[n2], delete G[n2], t.forEach((n3) => n3()));
  }
  function sn(n2, t, e3) {
    switch (t) {
      case 0:
        return e3 ? function(n3) {
          return p[n3];
        } : function(n3) {
          return v[n3];
        };
      case 1:
        return e3 ? function(n3) {
          return m[n3 >> 1];
        } : function(n3) {
          return y[n3 >> 1];
        };
      case 2:
        return e3 ? function(n3) {
          return g[n3 >> 2];
        } : function(n3) {
          return b[n3 >> 2];
        };
      case 3:
        return e3 ? function(n3) {
          return A[n3 >> 3];
        } : function(n3) {
          return T[n3 >> 3];
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
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
  function hn(n2) {
    cn(n2.da.ga.ea.name + " instance already deleted");
  }
  var dn = false;
  function pn() {
  }
  function vn(n2) {
    --n2.count.value, 0 === n2.count.value && (n2.ia ? n2.ka.na(n2.ia) : n2.ga.ea.na(n2.fa));
  }
  function mn(n2, t, e3) {
    return t === e3 ? n2 : void 0 === e3.la || null === (n2 = mn(n2, t, e3.la)) ? null : e3.Ka(n2);
  }
  var yn = {}, gn = [];
  function bn() {
    for (; gn.length; ) {
      var n2 = gn.pop();
      n2.da.ta = false, n2.delete();
    }
  }
  var wn = void 0, An = {};
  function Tn(n2, t) {
    for (void 0 === t && cn("ptr should not be undefined"); n2.la; )
      t = n2.va(t), n2 = n2.la;
    return An[t];
  }
  function _n(n2, t) {
    return t.ga && t.fa || tn("makeClassHandle requires ptr and ptrType"), !!t.ka != !!t.ia && tn("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, Cn(Object.create(n2, { da: { value: t } }));
  }
  function Cn(n2) {
    return "undefined" == typeof FinalizationRegistry ? (Cn = (n3) => n3, n2) : (dn = new FinalizationRegistry((n3) => {
      vn(n3.da);
    }), pn = (n3) => {
      dn.unregister(n3);
    }, (Cn = (n3) => {
      var t = n3.da;
      return t.ia && dn.register(n3, { da: t }, n3), n3;
    })(n2));
  }
  function Pn() {
  }
  function $n(n2, t, e3) {
    if (void 0 === n2[t].ha) {
      var r2 = n2[t];
      n2[t] = function() {
        return n2[t].ha.hasOwnProperty(arguments.length) || cn("Function '" + e3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n2[t].ha + ")!"), n2[t].ha[arguments.length].apply(this, arguments);
      }, n2[t].ha = [], n2[t].ha[r2.sa] = r2;
    }
  }
  function kn(n2, t, r2) {
    e2.hasOwnProperty(n2) ? ((void 0 === r2 || void 0 !== e2[n2].ha && void 0 !== e2[n2].ha[r2]) && cn("Cannot register public name '" + n2 + "' twice"), $n(e2, n2, n2), e2.hasOwnProperty(r2) && cn("Cannot register multiple overloads of a function with the same number of arguments (" + r2 + ")!"), e2[n2].ha[r2] = t) : (e2[n2] = t, void 0 !== r2 && (e2[n2].kb = r2));
  }
  function Wn(n2, t, e3, r2, a3, o3, i3, u3) {
    this.name = n2, this.constructor = t, this.oa = e3, this.na = r2, this.la = a3, this.Pa = o3, this.va = i3, this.Ka = u3, this.$a = [];
  }
  function En(n2, t, e3) {
    for (; t !== e3; )
      t.va || cn("Expected null or instance of " + e3.name + ", got an instance of " + t.name), n2 = t.va(n2), t = t.la;
    return n2;
  }
  function jn(n2, t) {
    return null === t ? (this.Aa && cn("null is not a valid " + this.name), 0) : (t.da || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.da.fa || cn("Cannot pass deleted object as a pointer of type " + this.name), En(t.da.fa, t.da.ga.ea, this.ea));
  }
  function On(n2, t) {
    if (null === t) {
      if (this.Aa && cn("null is not a valid " + this.name), this.xa) {
        var e3 = this.Ba();
        return null !== n2 && n2.push(this.na, e3), e3;
      }
      return 0;
    }
    if (t.da || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.da.fa || cn("Cannot pass deleted object as a pointer of type " + this.name), !this.wa && t.da.ga.wa && cn("Cannot convert argument of type " + (t.da.ka ? t.da.ka.name : t.da.ga.name) + " to parameter type " + this.name), e3 = En(t.da.fa, t.da.ga.ea, this.ea), this.xa)
      switch (void 0 === t.da.ia && cn("Passing raw pointer to smart pointer is illegal"), this.fb) {
        case 0:
          t.da.ka === this ? e3 = t.da.ia : cn("Cannot convert argument of type " + (t.da.ka ? t.da.ka.name : t.da.ga.name) + " to parameter type " + this.name);
          break;
        case 1:
          e3 = t.da.ia;
          break;
        case 2:
          if (t.da.ka === this)
            e3 = t.da.ia;
          else {
            var r2 = t.clone();
            e3 = this.ab(e3, Ln(function() {
              r2.delete();
            })), null !== n2 && n2.push(this.na, e3);
          }
          break;
        default:
          cn("Unsupporting sharing policy");
      }
    return e3;
  }
  function Sn(n2, t) {
    return null === t ? (this.Aa && cn("null is not a valid " + this.name), 0) : (t.da || cn('Cannot pass "' + rn(t) + '" as a ' + this.name), t.da.fa || cn("Cannot pass deleted object as a pointer of type " + this.name), t.da.ga.wa && cn("Cannot convert argument of type " + t.da.ga.name + " to parameter type " + this.name), En(t.da.fa, t.da.ga.ea, this.ea));
  }
  function Fn(n2, t, e3, r2, a3, o3, i3, u3, c2, f2, s2) {
    this.name = n2, this.ea = t, this.Aa = e3, this.wa = r2, this.xa = a3, this.Za = o3, this.fb = i3, this.Ga = u3, this.Ba = c2, this.ab = f2, this.na = s2, a3 || void 0 !== t.la ? this.toWireType = On : (this.toWireType = r2 ? jn : Sn, this.ja = null);
  }
  function Dn(n2, t, r2) {
    e2.hasOwnProperty(n2) || tn("Replacing nonexistant public symbol"), void 0 !== e2[n2].ha && void 0 !== r2 ? e2[n2].ha[r2] = t : (e2[n2] = t, e2[n2].sa = r2);
  }
  var Mn = [];
  function Un(n2, t) {
    n2 = on(n2);
    var e3 = Mn[t];
    return e3 || (t >= Mn.length && (Mn.length = t + 1), Mn[t] = e3 = j.get(t)), "function" != typeof e3 && cn("unknown function pointer with signature " + n2 + ": " + t), e3;
  }
  var In = void 0;
  function Rn(n2) {
    var t = on(n2 = $t(n2));
    return Pt(n2), t;
  }
  function xn(n2, t) {
    function e3(n3) {
      a3[n3] || J[n3] || (X[n3] ? X[n3].forEach(e3) : (r2.push(n3), a3[n3] = true));
    }
    var r2 = [], a3 = {};
    throw t.forEach(e3), new In(n2 + ": " + r2.map(Rn).join([", "]));
  }
  function Hn(n2, t, e3, r2, a3) {
    var o3 = t.length;
    2 > o3 && cn("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var i3 = null !== t[1] && null !== e3, u3 = false;
    for (e3 = 1; e3 < t.length; ++e3)
      if (null !== t[e3] && void 0 === t[e3].ja) {
        u3 = true;
        break;
      }
    var c2 = "void" !== t[0].name, f2 = o3 - 2, s2 = Array(f2), l2 = [], h2 = [];
    return function() {
      if (arguments.length !== f2 && cn("function " + n2 + " called with " + arguments.length + " arguments, expected " + f2 + " args!"), h2.length = 0, l2.length = i3 ? 2 : 1, l2[0] = a3, i3) {
        var e4 = t[1].toWireType(h2, this);
        l2[1] = e4;
      }
      for (var o4 = 0; o4 < f2; ++o4)
        s2[o4] = t[o4 + 2].toWireType(h2, arguments[o4]), l2.push(s2[o4]);
      if (o4 = r2.apply(null, l2), u3)
        N(h2);
      else
        for (var d2 = i3 ? 1 : 2; d2 < t.length; d2++) {
          var p2 = 1 === d2 ? e4 : s2[d2 - 2];
          null !== t[d2].ja && t[d2].ja(p2);
        }
      return e4 = c2 ? t[0].fromWireType(o4) : void 0;
    };
  }
  function Yn(n2, t) {
    for (var e3 = [], r2 = 0; r2 < n2; r2++)
      e3.push(b[t + 4 * r2 >> 2]);
    return e3;
  }
  function Vn(n2, t, e3) {
    return n2 instanceof Object || cn(e3 + ' with invalid "this": ' + n2), n2 instanceof t.ea.constructor || cn(e3 + ' incompatible with "this" of type ' + n2.constructor.name), n2.da.fa || cn("cannot call emscripten binding method " + e3 + " on deleted object"), En(n2.da.fa, n2.da.ga.ea, t.ea);
  }
  var Bn = [], zn = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function qn(n2) {
    4 < n2 && 0 == --zn[n2].Ca && (zn[n2] = void 0, Bn.push(n2));
  }
  var Nn = (n2) => (n2 || cn("Cannot use deleted val. handle = " + n2), zn[n2].value), Ln = (n2) => {
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
        var t = Bn.length ? Bn.pop() : zn.length;
        return zn[t] = { Ca: 1, value: n2 }, t;
    }
  };
  function Gn(n2, t, e3) {
    switch (t) {
      case 0:
        return function(n3) {
          return this.fromWireType((e3 ? p : v)[n3]);
        };
      case 1:
        return function(n3) {
          return this.fromWireType((e3 ? m : y)[n3 >> 1]);
        };
      case 2:
        return function(n3) {
          return this.fromWireType((e3 ? g : b)[n3 >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + n2);
    }
  }
  function Jn(n2, t) {
    var e3 = J[n2];
    return void 0 === e3 && cn(t + " has unknown type " + Rn(n2)), e3;
  }
  function Xn(n2, t) {
    switch (t) {
      case 2:
        return function(n3) {
          return this.fromWireType(w[n3 >> 2]);
        };
      case 3:
        return function(n3) {
          return this.fromWireType(_[n3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + n2);
    }
  }
  var Zn = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function Kn(n2, t) {
    for (var e3 = n2 >> 1, r2 = e3 + t / 2; !(e3 >= r2) && y[e3]; )
      ++e3;
    if (32 < (e3 <<= 1) - n2 && Zn)
      return Zn.decode(v.subarray(n2, e3));
    for (e3 = "", r2 = 0; !(r2 >= t / 2); ++r2) {
      var a3 = m[n2 + 2 * r2 >> 1];
      if (0 == a3)
        break;
      e3 += String.fromCharCode(a3);
    }
    return e3;
  }
  function Qn(n2, t, e3) {
    if (void 0 === e3 && (e3 = 2147483647), 2 > e3)
      return 0;
    var r2 = t;
    e3 = (e3 -= 2) < 2 * n2.length ? e3 / 2 : n2.length;
    for (var a3 = 0; a3 < e3; ++a3)
      m[t >> 1] = n2.charCodeAt(a3), t += 2;
    return m[t >> 1] = 0, t - r2;
  }
  function nt(n2) {
    return 2 * n2.length;
  }
  function tt(n2, t) {
    for (var e3 = 0, r2 = ""; !(e3 >= t / 4); ) {
      var a3 = g[n2 + 4 * e3 >> 2];
      if (0 == a3)
        break;
      ++e3, 65536 <= a3 ? (a3 -= 65536, r2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3)) : r2 += String.fromCharCode(a3);
    }
    return r2;
  }
  function et(n2, t, e3) {
    if (void 0 === e3 && (e3 = 2147483647), 4 > e3)
      return 0;
    var r2 = t;
    e3 = r2 + e3 - 4;
    for (var a3 = 0; a3 < n2.length; ++a3) {
      var o3 = n2.charCodeAt(a3);
      if (55296 <= o3 && 57343 >= o3 && (o3 = 65536 + ((1023 & o3) << 10) | 1023 & n2.charCodeAt(++a3)), g[t >> 2] = o3, (t += 4) + 4 > e3)
        break;
    }
    return g[t >> 2] = 0, t - r2;
  }
  function rt(n2) {
    for (var t = 0, e3 = 0; e3 < n2.length; ++e3) {
      var r2 = n2.charCodeAt(e3);
      55296 <= r2 && 57343 >= r2 && ++e3, t += 4;
    }
    return t;
  }
  function at(n2, t) {
    for (var e3 = Array(n2), r2 = 0; r2 < n2; ++r2)
      e3[r2] = Jn(b[t + 4 * r2 >> 2], "parameter " + r2);
    return e3;
  }
  var ot = {};
  function it(n2) {
    var t = ot[n2];
    return void 0 === t ? on(n2) : t;
  }
  var ut = [];
  function ct() {
    function n2(n3) {
      n3.$$$embind_global$$$ = n3;
      var t = "object" == typeof $$$embind_global$$$ && n3.$$$embind_global$$$ == n3;
      return t || delete n3.$$$embind_global$$$, t;
    }
    if ("object" == typeof globalThis)
      return globalThis;
    if ("object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    if ("object" == typeof e$1 && n2(e$1) ? $$$embind_global$$$ = e$1 : "object" == typeof self && n2(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function ft(n2) {
    var t = ut.length;
    return ut.push(n2), t;
  }
  var st = [], lt = {};
  function ht() {
    if (!dt) {
      var n2, t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: u2 || "./this.program" };
      for (n2 in lt)
        void 0 === lt[n2] ? delete t[n2] : t[n2] = lt[n2];
      var e3 = [];
      for (n2 in t)
        e3.push(n2 + "=" + t[n2]);
      dt = e3;
    }
    return dt;
  }
  var dt, pt = [null, [], []];
  function vt(n2) {
    return 0 == n2 % 4 && (0 != n2 % 100 || 0 == n2 % 400);
  }
  var mt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function gt(n2) {
    var t = Array(W(n2) + 1);
    return k(n2, t, 0, t.length), t;
  }
  function bt(n2, t, e3, r2) {
    function a3(n3, t2, e4) {
      for (n3 = "number" == typeof n3 ? n3.toString() : n3 || ""; n3.length < t2; )
        n3 = e4[0] + n3;
      return n3;
    }
    function o3(n3, t2) {
      return a3(n3, t2, "0");
    }
    function i3(n3, t2) {
      function e4(n4) {
        return 0 > n4 ? -1 : 0 < n4 ? 1 : 0;
      }
      var r3;
      return 0 === (r3 = e4(n3.getFullYear() - t2.getFullYear())) && 0 === (r3 = e4(n3.getMonth() - t2.getMonth())) && (r3 = e4(n3.getDate() - t2.getDate())), r3;
    }
    function u3(n3) {
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
    function c2(n3) {
      var t2 = n3.qa;
      for (n3 = new Date(new Date(n3.ra + 1900, 0, 1).getTime()); 0 < t2; ) {
        var e4 = n3.getMonth(), r3 = (vt(n3.getFullYear()) ? mt : yt)[e4];
        if (!(t2 > r3 - n3.getDate())) {
          n3.setDate(n3.getDate() + t2);
          break;
        }
        t2 -= r3 - n3.getDate() + 1, n3.setDate(1), 11 > e4 ? n3.setMonth(e4 + 1) : (n3.setMonth(0), n3.setFullYear(n3.getFullYear() + 1));
      }
      return e4 = new Date(n3.getFullYear() + 1, 0, 4), t2 = u3(new Date(n3.getFullYear(), 0, 4)), e4 = u3(e4), 0 >= i3(t2, n3) ? 0 >= i3(e4, n3) ? n3.getFullYear() + 1 : n3.getFullYear() : n3.getFullYear() - 1;
    }
    var f2 = g[r2 + 40 >> 2];
    for (var s2 in r2 = { ib: g[r2 >> 2], hb: g[r2 + 4 >> 2], ya: g[r2 + 8 >> 2], Da: g[r2 + 12 >> 2], za: g[r2 + 16 >> 2], ra: g[r2 + 20 >> 2], ma: g[r2 + 24 >> 2], qa: g[r2 + 28 >> 2], lb: g[r2 + 32 >> 2], gb: g[r2 + 36 >> 2], jb: f2 && f2 ? $(v, f2) : "" }, e3 = e3 ? $(v, e3) : "", f2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" })
      e3 = e3.replace(new RegExp(s2, "g"), f2[s2]);
    var l2 = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), h2 = "January February March April May June July August September October November December".split(" ");
    for (s2 in f2 = { "%a": function(n3) {
      return l2[n3.ma].substring(0, 3);
    }, "%A": function(n3) {
      return l2[n3.ma];
    }, "%b": function(n3) {
      return h2[n3.za].substring(0, 3);
    }, "%B": function(n3) {
      return h2[n3.za];
    }, "%C": function(n3) {
      return o3((n3.ra + 1900) / 100 | 0, 2);
    }, "%d": function(n3) {
      return o3(n3.Da, 2);
    }, "%e": function(n3) {
      return a3(n3.Da, 2, " ");
    }, "%g": function(n3) {
      return c2(n3).toString().substring(2);
    }, "%G": function(n3) {
      return c2(n3);
    }, "%H": function(n3) {
      return o3(n3.ya, 2);
    }, "%I": function(n3) {
      return 0 == (n3 = n3.ya) ? n3 = 12 : 12 < n3 && (n3 -= 12), o3(n3, 2);
    }, "%j": function(n3) {
      for (var t2 = 0, e4 = 0; e4 <= n3.za - 1; t2 += (vt(n3.ra + 1900) ? mt : yt)[e4++])
        ;
      return o3(n3.Da + t2, 3);
    }, "%m": function(n3) {
      return o3(n3.za + 1, 2);
    }, "%M": function(n3) {
      return o3(n3.hb, 2);
    }, "%n": function() {
      return "\n";
    }, "%p": function(n3) {
      return 0 <= n3.ya && 12 > n3.ya ? "AM" : "PM";
    }, "%S": function(n3) {
      return o3(n3.ib, 2);
    }, "%t": function() {
      return "	";
    }, "%u": function(n3) {
      return n3.ma || 7;
    }, "%U": function(n3) {
      return o3(Math.floor((n3.qa + 7 - n3.ma) / 7), 2);
    }, "%V": function(n3) {
      var t2 = Math.floor((n3.qa + 7 - (n3.ma + 6) % 7) / 7);
      if (2 >= (n3.ma + 371 - n3.qa - 2) % 7 && t2++, t2)
        53 == t2 && (4 == (e4 = (n3.ma + 371 - n3.qa) % 7) || 3 == e4 && vt(n3.ra) || (t2 = 1));
      else {
        t2 = 52;
        var e4 = (n3.ma + 7 - n3.qa - 1) % 7;
        (4 == e4 || 5 == e4 && vt(n3.ra % 400 - 1)) && t2++;
      }
      return o3(t2, 2);
    }, "%w": function(n3) {
      return n3.ma;
    }, "%W": function(n3) {
      return o3(Math.floor((n3.qa + 7 - (n3.ma + 6) % 7) / 7), 2);
    }, "%y": function(n3) {
      return (n3.ra + 1900).toString().substring(2);
    }, "%Y": function(n3) {
      return n3.ra + 1900;
    }, "%z": function(n3) {
      var t2 = 0 <= (n3 = n3.gb);
      return n3 = Math.abs(n3) / 60, (t2 ? "+" : "-") + String("0000" + (n3 / 60 * 100 + n3 % 60)).slice(-4);
    }, "%Z": function(n3) {
      return n3.jb;
    }, "%%": function() {
      return "%";
    } }, e3 = e3.replace(/%%/g, "\0\0"), f2)
      e3.includes(s2) && (e3 = e3.replace(new RegExp(s2, "g"), f2[s2](r2)));
    return (s2 = gt(e3 = e3.replace(/\0\0/g, "%"))).length > t ? 0 : (p.set(s2, n2), s2.length - 1);
  }
  nn = e2.InternalError = Q("InternalError");
  for (var wt = Array(256), At = 0; 256 > At; ++At)
    wt[At] = String.fromCharCode(At);
  an = wt, un = e2.BindingError = Q("BindingError"), Pn.prototype.isAliasOf = function(n2) {
    if (!(this instanceof Pn && n2 instanceof Pn))
      return false;
    var t = this.da.ga.ea, e3 = this.da.fa, r2 = n2.da.ga.ea;
    for (n2 = n2.da.fa; t.la; )
      e3 = t.va(e3), t = t.la;
    for (; r2.la; )
      n2 = r2.va(n2), r2 = r2.la;
    return t === r2 && e3 === n2;
  }, Pn.prototype.clone = function() {
    if (this.da.fa || hn(this), this.da.ua)
      return this.da.count.value += 1, this;
    var n2 = Cn, t = Object, e3 = t.create, r2 = Object.getPrototypeOf(this), a3 = this.da;
    return (n2 = n2(e3.call(t, r2, { da: { value: { count: a3.count, ta: a3.ta, ua: a3.ua, fa: a3.fa, ga: a3.ga, ia: a3.ia, ka: a3.ka } } }))).da.count.value += 1, n2.da.ta = false, n2;
  }, Pn.prototype.delete = function() {
    this.da.fa || hn(this), this.da.ta && !this.da.ua && cn("Object already scheduled for deletion"), pn(this), vn(this.da), this.da.ua || (this.da.ia = void 0, this.da.fa = void 0);
  }, Pn.prototype.isDeleted = function() {
    return !this.da.fa;
  }, Pn.prototype.deleteLater = function() {
    return this.da.fa || hn(this), this.da.ta && !this.da.ua && cn("Object already scheduled for deletion"), gn.push(this), 1 === gn.length && wn && wn(bn), this.da.ta = true, this;
  }, e2.getInheritedInstanceCount = function() {
    return Object.keys(An).length;
  }, e2.getLiveInheritedInstances = function() {
    var n2, t = [];
    for (n2 in An)
      An.hasOwnProperty(n2) && t.push(An[n2]);
    return t;
  }, e2.flushPendingDeletes = bn, e2.setDelayFunction = function(n2) {
    wn = n2, gn.length && wn && wn(bn);
  }, Fn.prototype.Qa = function(n2) {
    return this.Ga && (n2 = this.Ga(n2)), n2;
  }, Fn.prototype.Ea = function(n2) {
    this.na && this.na(n2);
  }, Fn.prototype.argPackAdvance = 8, Fn.prototype.readValueFromPointer = L, Fn.prototype.deleteObject = function(n2) {
    null !== n2 && n2.delete();
  }, Fn.prototype.fromWireType = function(n2) {
    function t() {
      return this.xa ? _n(this.ea.oa, { ga: this.Za, fa: e3, ka: this, ia: n2 }) : _n(this.ea.oa, { ga: this, fa: n2 });
    }
    var e3 = this.Qa(n2);
    if (!e3)
      return this.Ea(n2), null;
    var r2 = Tn(this.ea, e3);
    if (void 0 !== r2)
      return 0 === r2.da.count.value ? (r2.da.fa = e3, r2.da.ia = n2, r2.clone()) : (r2 = r2.clone(), this.Ea(n2), r2);
    if (r2 = this.ea.Pa(e3), !(r2 = yn[r2]))
      return t.call(this);
    r2 = this.wa ? r2.Ha : r2.pointerType;
    var a3 = mn(e3, this.ea, r2.ea);
    return null === a3 ? t.call(this) : this.xa ? _n(r2.ea.oa, { ga: r2, fa: a3, ka: this, ia: n2 }) : _n(r2.ea.oa, { ga: r2, fa: a3 });
  }, In = e2.UnboundTypeError = Q("UnboundTypeError"), e2.count_emval_handles = function() {
    for (var n2 = 0, t = 5; t < zn.length; ++t)
      void 0 !== zn[t] && ++n2;
    return n2;
  }, e2.get_first_emval = function() {
    for (var n2 = 5; n2 < zn.length; ++n2)
      if (void 0 !== zn[n2])
        return zn[n2];
    return null;
  };
  var Tt = { n: function(n2) {
    return Ct(n2 + 24) + 24;
  }, m: function(n2, t, e3) {
    throw new z(n2).Ia(t, e3), n2;
  }, u: function(n2) {
    var t = q[n2];
    delete q[n2];
    var e3 = t.Ba, r2 = t.na, a3 = t.Fa;
    en([n2], a3.map((n3) => n3.Ta).concat(a3.map((n3) => n3.cb)), (n3) => {
      var o3 = {};
      return a3.forEach((t2, e4) => {
        var r3 = n3[e4], i3 = t2.Ra, u3 = t2.Sa, c2 = n3[e4 + a3.length], f2 = t2.bb, s2 = t2.eb;
        o3[t2.Na] = { read: (n4) => r3.fromWireType(i3(u3, n4)), write: (n4, t3) => {
          var e5 = [];
          f2(s2, n4, c2.toWireType(e5, t3)), N(e5);
        } };
      }), [{ name: t.name, fromWireType: function(n4) {
        var t2, e4 = {};
        for (t2 in o3)
          e4[t2] = o3[t2].read(n4);
        return r2(n4), e4;
      }, toWireType: function(n4, t2) {
        for (var a4 in o3)
          if (!(a4 in t2))
            throw new TypeError('Missing field:  "' + a4 + '"');
        var i3 = e3();
        for (a4 in o3)
          o3[a4].write(i3, t2[a4]);
        return null !== n4 && n4.push(r2, i3), i3;
      }, argPackAdvance: 8, readValueFromPointer: L, ja: r2 }];
    });
  }, E: function(n2, t, e3, r2, a3) {
    t = on(t), e3 = ln(e3);
    var o3 = -1 != t.indexOf("u");
    o3 && (a3 = (1n << 64n) - 1n), fn(n2, { name: t, fromWireType: function(n3) {
      return n3;
    }, toWireType: function(n3, e4) {
      if ("bigint" != typeof e4 && "number" != typeof e4)
        throw new TypeError('Cannot convert "' + rn(e4) + '" to ' + this.name);
      if (e4 < r2 || e4 > a3)
        throw new TypeError('Passing a number "' + rn(e4) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + r2 + ", " + a3 + "]!");
      return e4;
    }, argPackAdvance: 8, readValueFromPointer: sn(t, e3, !o3), ja: null });
  }, S: function(n2, t, e3, r2, a3) {
    var o3 = ln(e3);
    fn(n2, { name: t = on(t), fromWireType: function(n3) {
      return !!n3;
    }, toWireType: function(n3, t2) {
      return t2 ? r2 : a3;
    }, argPackAdvance: 8, readValueFromPointer: function(n3) {
      if (1 === e3)
        var r3 = p;
      else if (2 === e3)
        r3 = m;
      else {
        if (4 !== e3)
          throw new TypeError("Unknown boolean type size: " + t);
        r3 = g;
      }
      return this.fromWireType(r3[n3 >> o3]);
    }, ja: null });
  }, f: function(n2, t, e3, r2, a3, o3, i3, u3, c2, f2, s2, l2, h2) {
    s2 = on(s2), o3 = Un(a3, o3), u3 && (u3 = Un(i3, u3)), f2 && (f2 = Un(c2, f2)), h2 = Un(l2, h2);
    var d2 = Z(s2);
    kn(d2, function() {
      xn("Cannot construct " + s2 + " due to unbound types", [r2]);
    }), en([n2, t, e3], r2 ? [r2] : [], function(t2) {
      if (t2 = t2[0], r2)
        var e4 = t2.ea, a4 = e4.oa;
      else
        a4 = Pn.prototype;
      t2 = K(d2, function() {
        if (Object.getPrototypeOf(this) !== i4)
          throw new un("Use 'new' to construct " + s2);
        if (void 0 === c3.pa)
          throw new un(s2 + " has no accessible constructor");
        var n3 = c3.pa[arguments.length];
        if (void 0 === n3)
          throw new un("Tried to invoke ctor of " + s2 + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(c3.pa).toString() + ") parameters instead!");
        return n3.apply(this, arguments);
      });
      var i4 = Object.create(a4, { constructor: { value: t2 } });
      t2.prototype = i4;
      var c3 = new Wn(s2, t2, i4, h2, e4, o3, u3, f2);
      e4 = new Fn(s2, c3, true, false, false), a4 = new Fn(s2 + "*", c3, false, false, false);
      var l3 = new Fn(s2 + " const*", c3, false, true, false);
      return yn[n2] = { pointerType: a4, Ha: l3 }, Dn(d2, t2), [e4, a4, l3];
    });
  }, o: function(n2, t, e3, r2, a3, o3, i3) {
    var u3 = Yn(e3, r2);
    t = on(t), o3 = Un(a3, o3), en([], [n2], function(n3) {
      function r3() {
        xn("Cannot call " + a4 + " due to unbound types", u3);
      }
      var a4 = (n3 = n3[0]).name + "." + t;
      t.startsWith("@@") && (t = Symbol[t.substring(2)]);
      var c2 = n3.ea.constructor;
      return void 0 === c2[t] ? (r3.sa = e3 - 1, c2[t] = r3) : ($n(c2, t, a4), c2[t].ha[e3 - 1] = r3), en([], u3, function(n4) {
        return n4 = Hn(a4, [n4[0], null].concat(n4.slice(1)), null, o3, i3), void 0 === c2[t].ha ? (n4.sa = e3 - 1, c2[t] = n4) : c2[t].ha[e3 - 1] = n4, [];
      }), [];
    });
  }, i: function(n2, t, e3, r2, a3, o3) {
    0 < t || R();
    var i3 = Yn(t, e3);
    a3 = Un(r2, a3), en([], [n2], function(n3) {
      var e4 = "constructor " + (n3 = n3[0]).name;
      if (void 0 === n3.ea.pa && (n3.ea.pa = []), void 0 !== n3.ea.pa[t - 1])
        throw new un("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + n3.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      return n3.ea.pa[t - 1] = () => {
        xn("Cannot construct " + n3.name + " due to unbound types", i3);
      }, en([], i3, function(r3) {
        return r3.splice(1, 0, null), n3.ea.pa[t - 1] = Hn(e4, r3, null, a3, o3), [];
      }), [];
    });
  }, b: function(n2, t, e3, r2, a3, o3, i3, u3) {
    var c2 = Yn(e3, r2);
    t = on(t), o3 = Un(a3, o3), en([], [n2], function(n3) {
      function r3() {
        xn("Cannot call " + a4 + " due to unbound types", c2);
      }
      var a4 = (n3 = n3[0]).name + "." + t;
      t.startsWith("@@") && (t = Symbol[t.substring(2)]), u3 && n3.ea.$a.push(t);
      var f2 = n3.ea.oa, s2 = f2[t];
      return void 0 === s2 || void 0 === s2.ha && s2.className !== n3.name && s2.sa === e3 - 2 ? (r3.sa = e3 - 2, r3.className = n3.name, f2[t] = r3) : ($n(f2, t, a4), f2[t].ha[e3 - 2] = r3), en([], c2, function(r4) {
        return r4 = Hn(a4, r4, n3, o3, i3), void 0 === f2[t].ha ? (r4.sa = e3 - 2, f2[t] = r4) : f2[t].ha[e3 - 2] = r4, [];
      }), [];
    });
  }, c: function(n2, t, e3, r2, a3, o3, i3, u3, c2, f2) {
    t = on(t), a3 = Un(r2, a3), en([], [n2], function(n3) {
      var r3 = (n3 = n3[0]).name + "." + t, s2 = { get: function() {
        xn("Cannot access " + r3 + " due to unbound types", [e3, i3]);
      }, enumerable: true, configurable: true };
      return s2.set = c2 ? () => {
        xn("Cannot access " + r3 + " due to unbound types", [e3, i3]);
      } : () => {
        cn(r3 + " is a read-only property");
      }, Object.defineProperty(n3.ea.oa, t, s2), en([], c2 ? [e3, i3] : [e3], function(e4) {
        var i4 = e4[0], s3 = { get: function() {
          var t2 = Vn(this, n3, r3 + " getter");
          return i4.fromWireType(a3(o3, t2));
        }, enumerable: true };
        if (c2) {
          c2 = Un(u3, c2);
          var l2 = e4[1];
          s3.set = function(t2) {
            var e5 = Vn(this, n3, r3 + " setter"), a4 = [];
            c2(f2, e5, l2.toWireType(a4, t2)), N(a4);
          };
        }
        return Object.defineProperty(n3.ea.oa, t, s3), [];
      }), [];
    });
  }, R: function(n2, t) {
    fn(n2, { name: t = on(t), fromWireType: function(n3) {
      var t2 = Nn(n3);
      return qn(n3), t2;
    }, toWireType: function(n3, t2) {
      return Ln(t2);
    }, argPackAdvance: 8, readValueFromPointer: L, ja: null });
  }, s: function(n2, t, e3, r2) {
    function a3() {
    }
    e3 = ln(e3), t = on(t), a3.values = {}, fn(n2, { name: t, constructor: a3, fromWireType: function(n3) {
      return this.constructor.values[n3];
    }, toWireType: function(n3, t2) {
      return t2.value;
    }, argPackAdvance: 8, readValueFromPointer: Gn(t, e3, r2), ja: null }), kn(t, a3);
  }, e: function(n2, t, e3) {
    var r2 = Jn(n2, "enum");
    t = on(t), n2 = r2.constructor, r2 = Object.create(r2.constructor.prototype, { value: { value: e3 }, constructor: { value: K(r2.name + "_" + t, function() {
    }) } }), n2.values[e3] = r2, n2[t] = r2;
  }, D: function(n2, t, e3) {
    e3 = ln(e3), fn(n2, { name: t = on(t), fromWireType: function(n3) {
      return n3;
    }, toWireType: function(n3, t2) {
      return t2;
    }, argPackAdvance: 8, readValueFromPointer: Xn(t, e3), ja: null });
  }, V: function(n2, t, e3, r2, a3, o3) {
    var i3 = Yn(t, e3);
    n2 = on(n2), a3 = Un(r2, a3), kn(n2, function() {
      xn("Cannot call " + n2 + " due to unbound types", i3);
    }, t - 1), en([], i3, function(e4) {
      return Dn(n2, Hn(n2, [e4[0], null].concat(e4.slice(1)), null, a3, o3), t - 1), [];
    });
  }, w: function(n2, t, e3, r2, a3) {
    t = on(t), -1 === a3 && (a3 = 4294967295), a3 = ln(e3);
    var o3 = (n3) => n3;
    if (0 === r2) {
      var i3 = 32 - 8 * e3;
      o3 = (n3) => n3 << i3 >>> i3;
    }
    e3 = t.includes("unsigned") ? function(n3, t2) {
      return t2 >>> 0;
    } : function(n3, t2) {
      return t2;
    }, fn(n2, { name: t, fromWireType: o3, toWireType: e3, argPackAdvance: 8, readValueFromPointer: sn(t, a3, 0 !== r2), ja: null });
  }, q: function(n2, t, e3) {
    function r2(n3) {
      var t2 = b;
      return new a3(d, t2[1 + (n3 >>= 2)], t2[n3]);
    }
    var a3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][t];
    fn(n2, { name: e3 = on(e3), fromWireType: r2, argPackAdvance: 8, readValueFromPointer: r2 }, { Wa: true });
  }, h: function(n2, t, e3, r2, a3, o3, i3, u3, c2, f2, s2, l2) {
    e3 = on(e3), o3 = Un(a3, o3), u3 = Un(i3, u3), f2 = Un(c2, f2), l2 = Un(s2, l2), en([n2], [t], function(n3) {
      return n3 = n3[0], [new Fn(e3, n3.ea, false, false, true, n3, r2, o3, u3, f2, l2)];
    });
  }, F: function(n2, t) {
    var e3 = "std::string" === (t = on(t));
    fn(n2, { name: t, fromWireType: function(n3) {
      var t2 = b[n3 >> 2], r2 = n3 + 4;
      if (e3)
        for (var a3 = r2, o3 = 0; o3 <= t2; ++o3) {
          var i3 = r2 + o3;
          if (o3 == t2 || 0 == v[i3]) {
            if (a3 = a3 ? $(v, a3, i3 - a3) : "", void 0 === u3)
              var u3 = a3;
            else
              u3 += String.fromCharCode(0), u3 += a3;
            a3 = i3 + 1;
          }
        }
      else {
        for (u3 = Array(t2), o3 = 0; o3 < t2; ++o3)
          u3[o3] = String.fromCharCode(v[r2 + o3]);
        u3 = u3.join("");
      }
      return Pt(n3), u3;
    }, toWireType: function(n3, t2) {
      t2 instanceof ArrayBuffer && (t2 = new Uint8Array(t2));
      var r2 = "string" == typeof t2;
      r2 || t2 instanceof Uint8Array || t2 instanceof Uint8ClampedArray || t2 instanceof Int8Array || cn("Cannot pass non-string to std::string");
      var a3 = e3 && r2 ? W(t2) : t2.length, o3 = Ct(4 + a3 + 1), i3 = o3 + 4;
      if (b[o3 >> 2] = a3, e3 && r2)
        k(t2, v, i3, a3 + 1);
      else if (r2)
        for (r2 = 0; r2 < a3; ++r2) {
          var u3 = t2.charCodeAt(r2);
          255 < u3 && (Pt(i3), cn("String has UTF-16 code units that do not fit in 8 bits")), v[i3 + r2] = u3;
        }
      else
        for (r2 = 0; r2 < a3; ++r2)
          v[i3 + r2] = t2[r2];
      return null !== n3 && n3.push(Pt, o3), o3;
    }, argPackAdvance: 8, readValueFromPointer: L, ja: function(n3) {
      Pt(n3);
    } });
  }, A: function(n2, t, e3) {
    if (e3 = on(e3), 2 === t)
      var r2 = Kn, a3 = Qn, o3 = nt, i3 = () => y, u3 = 1;
    else
      4 === t && (r2 = tt, a3 = et, o3 = rt, i3 = () => b, u3 = 2);
    fn(n2, { name: e3, fromWireType: function(n3) {
      for (var e4, a4 = b[n3 >> 2], o4 = i3(), c2 = n3 + 4, f2 = 0; f2 <= a4; ++f2) {
        var s2 = n3 + 4 + f2 * t;
        f2 != a4 && 0 != o4[s2 >> u3] || (c2 = r2(c2, s2 - c2), void 0 === e4 ? e4 = c2 : (e4 += String.fromCharCode(0), e4 += c2), c2 = s2 + t);
      }
      return Pt(n3), e4;
    }, toWireType: function(n3, r3) {
      "string" != typeof r3 && cn("Cannot pass non-string to C++ string type " + e3);
      var i4 = o3(r3), c2 = Ct(4 + i4 + t);
      return b[c2 >> 2] = i4 >> u3, a3(r3, c2 + 4, i4 + t), null !== n3 && n3.push(Pt, c2), c2;
    }, argPackAdvance: 8, readValueFromPointer: L, ja: function(n3) {
      Pt(n3);
    } });
  }, v: function(n2, t, e3, r2, a3, o3) {
    q[n2] = { name: on(t), Ba: Un(e3, r2), na: Un(a3, o3), Fa: [] };
  }, l: function(n2, t, e3, r2, a3, o3, i3, u3, c2, f2) {
    q[n2].Fa.push({ Na: on(t), Ta: e3, Ra: Un(r2, a3), Sa: o3, cb: i3, bb: Un(u3, c2), eb: f2 });
  }, T: function(n2, t) {
    fn(n2, { Xa: true, name: t = on(t), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function() {
    } });
  }, k: function(n2, t, e3) {
    n2 = Nn(n2), t = Jn(t, "emval::as");
    var r2 = [], a3 = Ln(r2);
    return b[e3 >> 2] = a3, t.toWireType(r2, n2);
  }, z: function(n2, t) {
    return n2 = Nn(n2), (t = Jn(t, "emval::as")).toWireType(null, n2);
  }, W: function(n2, t, e3, r2) {
    n2 = Nn(n2), e3 = at(t, e3);
    for (var a3 = Array(t), o3 = 0; o3 < t; ++o3) {
      var i3 = e3[o3];
      a3[o3] = i3.readValueFromPointer(r2), r2 += i3.argPackAdvance;
    }
    return n2 = n2.apply(void 0, a3), Ln(n2);
  }, U: function(n2, t, e3, r2, a3) {
    n2 = ut[n2], t = Nn(t), e3 = it(e3);
    var o3 = [];
    return b[r2 >> 2] = Ln(o3), n2(t, e3, o3, a3);
  }, G: function(n2, t, e3, r2) {
    (n2 = ut[n2])(t = Nn(t), e3 = it(e3), null, r2);
  }, a: qn, H: function(n2) {
    return 0 === n2 ? Ln(ct()) : (n2 = it(n2), Ln(ct()[n2]));
  }, B: function(n2, t) {
    var e3 = at(n2, t), r2 = e3[0];
    t = r2.name + "_$" + e3.slice(1).map(function(n3) {
      return n3.name;
    }).join("_") + "$";
    var a3 = st[t];
    if (void 0 !== a3)
      return a3;
    var o3 = Array(n2 - 1);
    return a3 = ft((t2, a4, i3, u3) => {
      for (var c2 = 0, f2 = 0; f2 < n2 - 1; ++f2)
        o3[f2] = e3[f2 + 1].readValueFromPointer(u3 + c2), c2 += e3[f2 + 1].argPackAdvance;
      for (t2 = t2[a4].apply(t2, o3), f2 = 0; f2 < n2 - 1; ++f2)
        e3[f2 + 1].Ja && e3[f2 + 1].Ja(o3[f2]);
      if (!r2.Xa)
        return r2.toWireType(i3, t2);
    }), st[t] = a3;
  }, r: function(n2, t) {
    return n2 = Nn(n2), t = Nn(t), Ln(n2[t]);
  }, g: function(n2) {
    4 < n2 && (zn[n2].Ca += 1);
  }, I: function(n2, t) {
    return (n2 = Nn(n2)) instanceof (t = Nn(t));
  }, t: function(n2) {
    return "number" == typeof (n2 = Nn(n2));
  }, x: function(n2) {
    return "string" == typeof (n2 = Nn(n2));
  }, p: function(n2) {
    return Ln(it(n2));
  }, j: function(n2) {
    N(Nn(n2)), qn(n2);
  }, d: function(n2, t) {
    return n2 = (n2 = Jn(n2, "_emval_take_value")).readValueFromPointer(t), Ln(n2);
  }, y: function(n2) {
    return n2 = Nn(n2), Ln(typeof n2);
  }, C: function() {
    R("");
  }, N: function(n2, t, e3) {
    v.copyWithin(n2, t, t + e3);
  }, M: function(n2) {
    var t = v.length;
    if (2147483648 < (n2 >>>= 0))
      return false;
    for (var e3 = 1; 4 >= e3; e3 *= 2) {
      var r2 = t * (1 + 0.2 / e3);
      r2 = Math.min(r2, n2 + 100663296);
      var a3 = Math;
      r2 = Math.max(n2, r2), a3 = a3.min.call(a3, 2147483648, r2 + (65536 - r2 % 65536) % 65536);
      n: {
        try {
          h.grow(a3 - d.byteLength + 65535 >>> 16), E();
          var o3 = 1;
          break n;
        } catch (i3) {
        }
        o3 = void 0;
      }
      if (o3)
        return true;
    }
    return false;
  }, K: function(n2, t) {
    var e3 = 0;
    return ht().forEach(function(r2, a3) {
      var o3 = t + e3;
      for (a3 = b[n2 + 4 * a3 >> 2] = o3, o3 = 0; o3 < r2.length; ++o3)
        p[a3++ >> 0] = r2.charCodeAt(o3);
      p[a3 >> 0] = 0, e3 += r2.length + 1;
    }), 0;
  }, L: function(n2, t) {
    var e3 = ht();
    b[n2 >> 2] = e3.length;
    var r2 = 0;
    return e3.forEach(function(n3) {
      r2 += n3.length + 1;
    }), b[t >> 2] = r2, 0;
  }, Q: function() {
    return 52;
  }, P: function() {
    return 70;
  }, O: function(n2, t, e3, r2) {
    for (var a3 = 0, o3 = 0; o3 < e3; o3++) {
      var i3 = b[t >> 2], u3 = b[t + 4 >> 2];
      t += 8;
      for (var c2 = 0; c2 < u3; c2++) {
        var f2 = v[i3 + c2], h2 = pt[n2];
        0 === f2 || 10 === f2 ? ((1 === n2 ? s : l)($(h2, 0)), h2.length = 0) : h2.push(f2);
      }
      a3 += u3;
    }
    return b[r2 >> 2] = a3, 0;
  }, J: function(n2, t, e3, r2) {
    return bt(n2, t, e3, r2);
  } };
  !function() {
    function n2(n3) {
      e2.asm = n3.exports, h = e2.asm.X, E(), j = e2.asm.ba, S.unshift(e2.asm.Y), U--, e2.monitorRunDependencies && e2.monitorRunDependencies(U), 0 == U && I && (n3 = I, I = null, n3());
    }
    function t(t2) {
      n2(t2.instance);
    }
    function r2(n3) {
      return V().then(function(n4) {
        return WebAssembly.instantiate(n4, a3);
      }).then(function(n4) {
        return n4;
      }).then(n3, function(n4) {
        l("failed to asynchronously prepare wasm: " + n4), R(n4);
      });
    }
    var a3 = { a: Tt };
    if (U++, e2.monitorRunDependencies && e2.monitorRunDependencies(U), e2.instantiateWasm)
      try {
        return e2.instantiateWasm(a3, n2);
      } catch (i3) {
        l("Module.instantiateWasm callback failed with error: " + i3), o2(i3);
      }
    (f || "function" != typeof WebAssembly.instantiateStreaming || x() || "function" != typeof fetch ? r2(t) : fetch(M, { credentials: "same-origin" }).then(function(n3) {
      return WebAssembly.instantiateStreaming(n3, a3).then(t, function(n4) {
        return l("wasm streaming compile failed: " + n4), l("falling back to ArrayBuffer instantiation"), r2(t);
      });
    })).catch(o2);
  }(), e2.___wasm_call_ctors = function() {
    return (e2.___wasm_call_ctors = e2.asm.Y).apply(null, arguments);
  };
  var _t, Ct = e2._malloc = function() {
    return (Ct = e2._malloc = e2.asm.Z).apply(null, arguments);
  }, Pt = e2._free = function() {
    return (Pt = e2._free = e2.asm._).apply(null, arguments);
  }, $t = e2.___getTypeName = function() {
    return ($t = e2.___getTypeName = e2.asm.$).apply(null, arguments);
  };
  function kt() {
    function n2() {
      if (!_t && (_t = true, e2.calledRun = true, !C)) {
        if (B(S), a2(e2), e2.onRuntimeInitialized && e2.onRuntimeInitialized(), e2.postRun)
          for ("function" == typeof e2.postRun && (e2.postRun = [e2.postRun]); e2.postRun.length; ) {
            var n3 = e2.postRun.shift();
            F.unshift(n3);
          }
        B(F);
      }
    }
    if (!(0 < U)) {
      if (e2.preRun)
        for ("function" == typeof e2.preRun && (e2.preRun = [e2.preRun]); e2.preRun.length; )
          D();
      B(O), 0 < U || (e2.setStatus ? (e2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          e2.setStatus("");
        }, 1), n2();
      }, 1)) : n2());
    }
  }
  if (e2.__embind_initialize_bindings = function() {
    return (e2.__embind_initialize_bindings = e2.asm.aa).apply(null, arguments);
  }, e2.___cxa_is_pointer_type = function() {
    return (e2.___cxa_is_pointer_type = e2.asm.ca).apply(null, arguments);
  }, I = function n2() {
    _t || kt(), _t || (I = n2);
  }, e2.preInit)
    for ("function" == typeof e2.preInit && (e2.preInit = [e2.preInit]); 0 < e2.preInit.length; )
      e2.preInit.pop()();
  return kt(), n.ready;
}, e.exports = a;
const i = o$1(o.exports), u = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  u as a
};
