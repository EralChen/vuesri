import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function t(e, t2) {
  for (var _2 = 0; _2 < t2.length; _2++) {
    const r2 = t2[_2];
    if ("string" != typeof r2 && !Array.isArray(r2)) {
      for (const t3 in r2)
        if ("default" !== t3 && !(t3 in e)) {
          const _3 = Object.getOwnPropertyDescriptor(r2, t3);
          _3 && Object.defineProperty(e, t3, _3.get ? _3 : { enumerable: true, get: () => r2[t3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var _, r, o, n = { exports: {} };
n.exports, _ = n, n.exports, r = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (r = r || __filename), o = function(e = {}) {
  var t2, _2, o2 = e;
  o2.ready = new Promise((e2, r2) => {
    t2 = e2, _2 = r2;
  });
  var n2, p2, i2, c = Object.assign({}, o2), s = "./this.program", P = "object" == typeof window, a = "function" == typeof importScripts, g = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, y = "";
  function u(e2) {
    return o2.locateFile ? o2.locateFile(e2, y) : y + e2;
  }
  if (g) {
    var d = require("fs"), f = require("path");
    y = a ? f.dirname(y) + "/" : __dirname + "/", n2 = (e2, t3) => (e2 = B(e2) ? new URL(e2) : f.normalize(e2), d.readFileSync(e2, t3 ? void 0 : "utf8")), i2 = (e2) => {
      var t3 = n2(e2, true);
      return t3.buffer || (t3 = new Uint8Array(t3)), t3;
    }, p2 = (e2, t3, _3, r2 = true) => {
      e2 = B(e2) ? new URL(e2) : f.normalize(e2), d.readFile(e2, r2 ? void 0 : "utf8", (e3, o3) => {
        e3 ? _3(e3) : t3(r2 ? o3.buffer : o3);
      });
    }, !o2.thisProgram && process.argv.length > 1 && (s = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), o2.inspect = () => "[Emscripten Module object]";
  } else
    (P || a) && (a ? y = self.location.href : "undefined" != typeof document && document.currentScript && (y = document.currentScript.src), r && (y = r), y = 0 !== y.indexOf("blob:") ? y.substr(0, y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", n2 = (e2) => {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", e2, false), t3.send(null), t3.responseText;
    }, a && (i2 = (e2) => {
      var t3 = new XMLHttpRequest();
      return t3.open("GET", e2, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
    }), p2 = (e2, t3, _3) => {
      var r2 = new XMLHttpRequest();
      r2.open("GET", e2, true), r2.responseType = "arraybuffer", r2.onload = () => {
        200 == r2.status || 0 == r2.status && r2.response ? t3(r2.response) : _3();
      }, r2.onerror = _3, r2.send(null);
    });
  var E, b, m = console.log.bind(console), T = console.error.bind(console);
  Object.assign(o2, c), c = null, "object" != typeof WebAssembly && X("no native wasm support detected");
  var O, S, N, h, l, M, v, D = false;
  function A(e2, t3) {
    e2 || X(t3);
  }
  function R() {
    var e2 = b.buffer;
    o2.HEAP8 = O = new Int8Array(e2), o2.HEAP16 = N = new Int16Array(e2), o2.HEAPU8 = S = new Uint8Array(e2), o2.HEAPU16 = new Uint16Array(e2), o2.HEAP32 = h = new Int32Array(e2), o2.HEAPU32 = l = new Uint32Array(e2), o2.HEAPF32 = M = new Float32Array(e2), o2.HEAPF64 = v = new Float64Array(e2);
  }
  var G = [], C = [], I = [];
  function j() {
    $(G);
  }
  function U() {
    $(C);
  }
  function L() {
    $(I);
  }
  function F(e2) {
    C.unshift(e2);
  }
  var Y = 0, w = null;
  function x(e2) {
    Y++;
  }
  function H(e2) {
    if (0 == --Y && w) {
      var t3 = w;
      w = null, t3();
    }
  }
  function X(e2) {
    T(e2 = "Aborted(" + e2 + ")"), D = true, e2 += ". Build with -sASSERTIONS for more info.";
    var t3 = new WebAssembly.RuntimeError(e2);
    throw _2(t3), t3;
  }
  var z, Z = "data:application/octet-stream;base64,";
  function W(e2) {
    return e2.startsWith(Z);
  }
  function B(e2) {
    return e2.startsWith("file://");
  }
  function K(e2) {
    if (e2 == z && E)
      return new Uint8Array(E);
    if (i2)
      return i2(e2);
    throw "both async and sync fetching of the wasm failed";
  }
  function V(e2) {
    if (P || a) {
      if ("function" == typeof fetch && !B(e2))
        return fetch(e2, { credentials: "same-origin" }).then((t3) => {
          if (!t3.ok)
            throw "failed to load wasm binary file at '" + e2 + "'";
          return t3.arrayBuffer();
        }).catch(() => K(e2));
      if (p2)
        return new Promise((t3, _3) => {
          p2(e2, (e3) => t3(new Uint8Array(e3)), _3);
        });
    }
    return Promise.resolve().then(() => K(e2));
  }
  function q(e2, t3, _3) {
    return V(e2).then((e3) => WebAssembly.instantiate(e3, t3)).then((e3) => e3).then(_3, (e3) => {
      T(`failed to asynchronously prepare wasm: ${e3}`), X(e3);
    });
  }
  function k(e2, t3, _3, r2) {
    return e2 || "function" != typeof WebAssembly.instantiateStreaming || W(t3) || B(t3) || g || "function" != typeof fetch ? q(t3, _3, r2) : fetch(t3, { credentials: "same-origin" }).then((e3) => WebAssembly.instantiateStreaming(e3, _3).then(r2, function(e4) {
      return T(`wasm streaming compile failed: ${e4}`), T("falling back to ArrayBuffer instantiation"), q(t3, _3, r2);
    }));
  }
  function J() {
    var e2 = { a: Me };
    function t3(e3, t4) {
      return ve = e3.exports, b = ve.t, R(), F(ve.u), H(), ve;
    }
    function r2(e3) {
      t3(e3.instance);
    }
    return x(), k(E, z, e2, r2).catch(_2), {};
  }
  W(z = "pe-wasm.wasm") || (z = u(z));
  var $ = (e2) => {
    for (; e2.length > 0; )
      e2.shift()(o2);
  };
  function Q(e2, t3 = "i8") {
    switch (t3.endsWith("*") && (t3 = "*"), t3) {
      case "i1":
      case "i8":
        return O[e2 >> 0];
      case "i16":
        return N[e2 >> 1];
      case "i32":
        return h[e2 >> 2];
      case "i64":
        X("to do getValue(i64) use WASM_BIGINT");
      case "float":
        return M[e2 >> 2];
      case "double":
        return v[e2 >> 3];
      case "*":
        return l[e2 >> 2];
      default:
        X(`invalid type for getValue: ${t3}`);
    }
  }
  var ee = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, te = (e2, t3, _3) => {
    for (var r2 = t3 + _3, o3 = t3; e2[o3] && !(o3 >= r2); )
      ++o3;
    if (o3 - t3 > 16 && e2.buffer && ee)
      return ee.decode(e2.subarray(t3, o3));
    for (var n3 = ""; t3 < o3; ) {
      var p3 = e2[t3++];
      if (128 & p3) {
        var i3 = 63 & e2[t3++];
        if (192 != (224 & p3)) {
          var c2 = 63 & e2[t3++];
          if ((p3 = 224 == (240 & p3) ? (15 & p3) << 12 | i3 << 6 | c2 : (7 & p3) << 18 | i3 << 12 | c2 << 6 | 63 & e2[t3++]) < 65536)
            n3 += String.fromCharCode(p3);
          else {
            var s2 = p3 - 65536;
            n3 += String.fromCharCode(55296 | s2 >> 10, 56320 | 1023 & s2);
          }
        } else
          n3 += String.fromCharCode((31 & p3) << 6 | i3);
      } else
        n3 += String.fromCharCode(p3);
    }
    return n3;
  }, _e = (e2, t3) => e2 ? te(S, e2, t3) : "";
  function re(e2, t3, _3) {
    return 0;
  }
  var oe = (e2, t3, _3, r2) => {
    if (!(r2 > 0))
      return 0;
    for (var o3 = _3, n3 = _3 + r2 - 1, p3 = 0; p3 < e2.length; ++p3) {
      var i3 = e2.charCodeAt(p3);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & e2.charCodeAt(++p3)), i3 <= 127) {
        if (_3 >= n3)
          break;
        t3[_3++] = i3;
      } else if (i3 <= 2047) {
        if (_3 + 1 >= n3)
          break;
        t3[_3++] = 192 | i3 >> 6, t3[_3++] = 128 | 63 & i3;
      } else if (i3 <= 65535) {
        if (_3 + 2 >= n3)
          break;
        t3[_3++] = 224 | i3 >> 12, t3[_3++] = 128 | i3 >> 6 & 63, t3[_3++] = 128 | 63 & i3;
      } else {
        if (_3 + 3 >= n3)
          break;
        t3[_3++] = 240 | i3 >> 18, t3[_3++] = 128 | i3 >> 12 & 63, t3[_3++] = 128 | i3 >> 6 & 63, t3[_3++] = 128 | 63 & i3;
      }
    }
    return t3[_3] = 0, _3 - o3;
  }, ne = (e2, t3, _3) => oe(e2, S, t3, _3);
  function pe(e2, t3, _3) {
    return 0;
  }
  function ie(e2, t3, _3, r2) {
  }
  var ce = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), se = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Pe = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ae = (e2) => (ce(e2.getFullYear()) ? se : Pe)[e2.getMonth()] + e2.getDate() - 1, ge = (e2, t3) => t3 + 2097152 >>> 0 < 4194305 - !!e2 ? (e2 >>> 0) + 4294967296 * t3 : NaN;
  function ye(e2, t3, _3) {
    var r2 = ge(e2, t3), o3 = new Date(1e3 * r2);
    h[_3 >> 2] = o3.getSeconds(), h[_3 + 4 >> 2] = o3.getMinutes(), h[_3 + 8 >> 2] = o3.getHours(), h[_3 + 12 >> 2] = o3.getDate(), h[_3 + 16 >> 2] = o3.getMonth(), h[_3 + 20 >> 2] = o3.getFullYear() - 1900, h[_3 + 24 >> 2] = o3.getDay();
    var n3 = 0 | ae(o3);
    h[_3 + 28 >> 2] = n3, h[_3 + 36 >> 2] = -60 * o3.getTimezoneOffset();
    var p3 = new Date(o3.getFullYear(), 0, 1), i3 = new Date(o3.getFullYear(), 6, 1).getTimezoneOffset(), c2 = p3.getTimezoneOffset(), s2 = 0 | (i3 != c2 && o3.getTimezoneOffset() == Math.min(c2, i3));
    h[_3 + 32 >> 2] = s2;
  }
  var ue = (e2) => {
    for (var t3 = 0, _3 = 0; _3 < e2.length; ++_3) {
      var r2 = e2.charCodeAt(_3);
      r2 <= 127 ? t3++ : r2 <= 2047 ? t3 += 2 : r2 >= 55296 && r2 <= 57343 ? (t3 += 4, ++_3) : t3 += 3;
    }
    return t3;
  }, de = (e2) => {
    var t3 = ue(e2) + 1, _3 = Ae(t3);
    return _3 && ne(e2, _3, t3), _3;
  }, fe = () => 2147483648, Ee = (e2) => {
    var t3 = (e2 - b.buffer.byteLength + 65535) / 65536;
    try {
      return b.grow(t3), R(), 1;
    } catch (_3) {
    }
  }, be = {}, me = () => s || "./this.program", Te = () => {
    if (!Te.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: me() };
      for (var t3 in be)
        void 0 === be[t3] ? delete e2[t3] : e2[t3] = be[t3];
      var _3 = [];
      for (var t3 in e2)
        _3.push(`${t3}=${e2[t3]}`);
      Te.strings = _3;
    }
    return Te.strings;
  }, Oe = (e2, t3) => {
    for (var _3 = 0; _3 < e2.length; ++_3)
      O[t3++ >> 0] = e2.charCodeAt(_3);
    O[t3 >> 0] = 0;
  };
  function Se(e2, t3, _3, r2, o3) {
    return 70;
  }
  var Ne = [null, [], []], he = (e2, t3) => {
    var _3 = Ne[e2];
    0 === t3 || 10 === t3 ? ((1 === e2 ? m : T)(te(_3, 0)), _3.length = 0) : _3.push(t3);
  };
  function le(e2, t3, _3) {
    var r2 = _3 > 0 ? _3 : ue(e2) + 1, o3 = new Array(r2), n3 = oe(e2, o3, 0, o3.length);
    return t3 && (o3.length = n3), o3;
  }
  var Me = { c: re, r: (e2, t3, _3) => {
  }, h: pe, d: ie, p: (e2) => {
  }, o: (e2, t3) => {
  }, q: (e2, t3, _3) => {
  }, j: ye, n: (e2, t3, _3) => {
    var r2 = (/* @__PURE__ */ new Date()).getFullYear(), o3 = new Date(r2, 0, 1), n3 = new Date(r2, 6, 1), p3 = o3.getTimezoneOffset(), i3 = n3.getTimezoneOffset(), c2 = Math.max(p3, i3);
    function s2(e3) {
      var t4 = e3.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return t4 ? t4[1] : "GMT";
    }
    l[e2 >> 2] = 60 * c2, h[t3 >> 2] = Number(p3 != i3);
    var P2 = s2(o3), a2 = s2(n3), g2 = de(P2), y2 = de(a2);
    i3 < p3 ? (l[_3 >> 2] = g2, l[_3 + 4 >> 2] = y2) : (l[_3 >> 2] = y2, l[_3 + 4 >> 2] = g2);
  }, l: () => {
    X("");
  }, i: () => Date.now(), s: (e2, t3, _3) => S.copyWithin(e2, t3, t3 + _3), m: (e2) => {
    var t3 = S.length;
    e2 >>>= 0;
    var _3 = fe();
    if (e2 > _3)
      return false;
    for (var r2 = (e3, t4) => e3 + (t4 - e3 % t4) % t4, o3 = 1; o3 <= 4; o3 *= 2) {
      var n3 = t3 * (1 + 0.2 / o3);
      n3 = Math.min(n3, e2 + 100663296);
      var p3 = Math.min(_3, r2(Math.max(e2, n3), 65536));
      if (Ee(p3))
        return true;
    }
    return false;
  }, e: (e2, t3) => {
    var _3 = 0;
    return Te().forEach((r2, o3) => {
      var n3 = t3 + _3;
      l[e2 + 4 * o3 >> 2] = n3, Oe(r2, n3), _3 += r2.length + 1;
    }), 0;
  }, f: (e2, t3) => {
    var _3 = Te();
    l[e2 >> 2] = _3.length;
    var r2 = 0;
    return _3.forEach((e3) => r2 += e3.length + 1), l[t3 >> 2] = r2, 0;
  }, a: (e2) => 52, g: (e2, t3, _3, r2) => 52, k: Se, b: (e2, t3, _3, r2) => {
    for (var o3 = 0, n3 = 0; n3 < _3; n3++) {
      var p3 = l[t3 >> 2], i3 = l[t3 + 4 >> 2];
      t3 += 8;
      for (var c2 = 0; c2 < i3; c2++)
        he(e2, S[p3 + c2]);
      o3 += i3;
    }
    return l[r2 >> 2] = o3, 0;
  } }, ve = J();
  o2._webidl_free = (e2) => (o2._webidl_free = ve.v)(e2), o2._webidl_malloc = (e2) => (o2._webidl_malloc = ve.w)(e2);
  var De, Ae = (e2) => (Ae = ve.x)(e2), Re = o2._emscripten_bind_PeObject_getCode_0 = (e2) => (Re = o2._emscripten_bind_PeObject_getCode_0 = ve.y)(e2), Ge = o2._emscripten_bind_PeObject_getName_1 = (e2, t3) => (Ge = o2._emscripten_bind_PeObject_getName_1 = ve.z)(e2, t3), Ce = o2._emscripten_bind_PeObject_getType_0 = (e2) => (Ce = o2._emscripten_bind_PeObject_getType_0 = ve.A)(e2), Ie = o2._emscripten_bind_PeCoordsys_getCode_0 = (e2) => (Ie = o2._emscripten_bind_PeCoordsys_getCode_0 = ve.B)(e2), je = o2._emscripten_bind_PeCoordsys_getName_1 = (e2, t3) => (je = o2._emscripten_bind_PeCoordsys_getName_1 = ve.C)(e2, t3), Ue = o2._emscripten_bind_PeCoordsys_getType_0 = (e2) => (Ue = o2._emscripten_bind_PeCoordsys_getType_0 = ve.D)(e2), Le = o2._emscripten_bind_VoidPtr___destroy___0 = (e2) => (Le = o2._emscripten_bind_VoidPtr___destroy___0 = ve.E)(e2), Fe = o2._emscripten_bind_PeDatum_getSpheroid_0 = (e2) => (Fe = o2._emscripten_bind_PeDatum_getSpheroid_0 = ve.F)(e2), Ye = o2._emscripten_bind_PeDatum_getCode_0 = (e2) => (Ye = o2._emscripten_bind_PeDatum_getCode_0 = ve.G)(e2), we = o2._emscripten_bind_PeDatum_getName_1 = (e2, t3) => (we = o2._emscripten_bind_PeDatum_getName_1 = ve.H)(e2, t3), xe = o2._emscripten_bind_PeDatum_getType_0 = (e2) => (xe = o2._emscripten_bind_PeDatum_getType_0 = ve.I)(e2), He = o2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = (e2) => (He = o2._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = ve.J)(e2), Xe = o2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = (e2) => (Xe = o2._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = ve.K)(e2), ze = o2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = (e2) => (ze = o2._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = ve.L)(e2), Ze = o2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = (e2) => (Ze = o2._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = ve.M)(e2), We = o2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = (e2) => (We = o2._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = ve.N)(e2), Be = o2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = (e2) => (Be = o2._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = ve.O)(e2), Ke = o2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = (e2) => (Ke = o2._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = ve.P)(e2), Ve = o2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = (e2) => (Ve = o2._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = ve.Q)(e2), qe = o2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = (e2) => (qe = o2._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = ve.R)(e2), ke = o2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = (e2) => (ke = o2._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = ve.S)(e2), Je = o2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = (e2) => (Je = o2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = ve.T)(e2), $e = o2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = (e2) => ($e = o2._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = ve.U)(e2), Qe = o2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = (e2) => (Qe = o2._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = ve.V)(e2), et = o2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = (e2) => (et = o2._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = ve.W)(e2), tt = o2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = (e2) => (tt = o2._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = ve.X)(e2), _t = o2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = (e2) => (_t = o2._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = ve.Y)(e2), rt = o2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = (e2) => (rt = o2._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = ve.Z)(e2), ot = o2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = (e2) => (ot = o2._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = ve._)(e2), nt = o2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = (e2) => (nt = o2._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = ve.$)(e2), pt = o2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = (e2) => (pt = o2._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = ve.aa)(e2), it = o2._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = (e2) => (it = o2._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = ve.ba)(e2), ct = o2._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = (e2) => (ct = o2._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = ve.ca)(e2), st = o2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = (e2) => (st = o2._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = ve.da)(e2), Pt = o2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = (e2) => (Pt = o2._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = ve.ea)(e2), at = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = (e2) => (at = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = ve.fa)(e2), gt = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = (e2) => (gt = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = ve.ga)(e2), yt = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = (e2) => (yt = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = ve.ha)(e2), ut = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = (e2) => (ut = o2._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = ve.ia)(e2), dt = o2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = (e2) => (dt = o2._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = ve.ja)(e2), ft = o2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = (e2) => (ft = o2._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = ve.ka)(e2), Et = o2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = (e2) => (Et = o2._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = ve.la)(e2), bt = o2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = (e2) => (bt = o2._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = ve.ma)(e2), mt = o2._emscripten_bind_PeFactory_initialize_1 = (e2, t3) => (mt = o2._emscripten_bind_PeFactory_initialize_1 = ve.na)(e2, t3), Tt = o2._emscripten_bind_PeFactory_factoryByType_2 = (e2, t3, _3) => (Tt = o2._emscripten_bind_PeFactory_factoryByType_2 = ve.oa)(e2, t3, _3), Ot = o2._emscripten_bind_PeFactory_fromString_2 = (e2, t3, _3) => (Ot = o2._emscripten_bind_PeFactory_fromString_2 = ve.pa)(e2, t3, _3), St = o2._emscripten_bind_PeFactory_getCode_1 = (e2, t3) => (St = o2._emscripten_bind_PeFactory_getCode_1 = ve.qa)(e2, t3), Nt = o2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = (e2, t3, _3, r2, n3, p3) => (Nt = o2._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = ve.ra)(e2, t3, _3, r2, n3, p3), ht = o2._emscripten_bind_PeGCSExtent_getLLon_0 = (e2) => (ht = o2._emscripten_bind_PeGCSExtent_getLLon_0 = ve.sa)(e2), lt = o2._emscripten_bind_PeGCSExtent_getSLat_0 = (e2) => (lt = o2._emscripten_bind_PeGCSExtent_getSLat_0 = ve.ta)(e2), Mt = o2._emscripten_bind_PeGCSExtent_getRLon_0 = (e2) => (Mt = o2._emscripten_bind_PeGCSExtent_getRLon_0 = ve.ua)(e2), vt = o2._emscripten_bind_PeGCSExtent_getNLat_0 = (e2) => (vt = o2._emscripten_bind_PeGCSExtent_getNLat_0 = ve.va)(e2), Dt = o2._emscripten_bind_PeGCSExtent___destroy___0 = (e2) => (Dt = o2._emscripten_bind_PeGCSExtent___destroy___0 = ve.wa)(e2), At = o2._emscripten_bind_PeGeogcs_getDatum_0 = (e2) => (At = o2._emscripten_bind_PeGeogcs_getDatum_0 = ve.xa)(e2), Rt = o2._emscripten_bind_PeGeogcs_getPrimem_0 = (e2) => (Rt = o2._emscripten_bind_PeGeogcs_getPrimem_0 = ve.ya)(e2), Gt = o2._emscripten_bind_PeGeogcs_getUnit_0 = (e2) => (Gt = o2._emscripten_bind_PeGeogcs_getUnit_0 = ve.za)(e2), Ct = o2._emscripten_bind_PeGeogcs_getCode_0 = (e2) => (Ct = o2._emscripten_bind_PeGeogcs_getCode_0 = ve.Aa)(e2), It = o2._emscripten_bind_PeGeogcs_getName_1 = (e2, t3) => (It = o2._emscripten_bind_PeGeogcs_getName_1 = ve.Ba)(e2, t3), jt = o2._emscripten_bind_PeGeogcs_getType_0 = (e2) => (jt = o2._emscripten_bind_PeGeogcs_getType_0 = ve.Ca)(e2), Ut = o2._emscripten_bind_PeGeogtran_isEqual_1 = (e2, t3) => (Ut = o2._emscripten_bind_PeGeogtran_isEqual_1 = ve.Da)(e2, t3), Lt = o2._emscripten_bind_PeGeogtran_getGeogcs1_0 = (e2) => (Lt = o2._emscripten_bind_PeGeogtran_getGeogcs1_0 = ve.Ea)(e2), Ft = o2._emscripten_bind_PeGeogtran_getGeogcs2_0 = (e2) => (Ft = o2._emscripten_bind_PeGeogtran_getGeogcs2_0 = ve.Fa)(e2), Yt = o2._emscripten_bind_PeGeogtran_getParameters_0 = (e2) => (Yt = o2._emscripten_bind_PeGeogtran_getParameters_0 = ve.Ga)(e2), wt = o2._emscripten_bind_PeGeogtran_loadConstants_0 = (e2) => (wt = o2._emscripten_bind_PeGeogtran_loadConstants_0 = ve.Ha)(e2), xt = o2._emscripten_bind_PeGeogtran_getCode_0 = (e2) => (xt = o2._emscripten_bind_PeGeogtran_getCode_0 = ve.Ia)(e2), Ht = o2._emscripten_bind_PeGeogtran_getName_1 = (e2, t3) => (Ht = o2._emscripten_bind_PeGeogtran_getName_1 = ve.Ja)(e2, t3), Xt = o2._emscripten_bind_PeGeogtran_getType_0 = (e2) => (Xt = o2._emscripten_bind_PeGeogtran_getType_0 = ve.Ka)(e2), zt = o2._emscripten_bind_PeGTlistExtended_getGTlist_6 = (e2, t3, _3, r2, n3, p3, i3) => (zt = o2._emscripten_bind_PeGTlistExtended_getGTlist_6 = ve.La)(e2, t3, _3, r2, n3, p3, i3), Zt = o2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = (e2) => (Zt = o2._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = ve.Ma)(e2), Wt = o2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = (e2) => (Wt = o2._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = ve.Na)(e2), Bt = o2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = (e2) => (Bt = o2._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = ve.Oa)(e2), Kt = o2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = (e2, t3) => (Kt = o2._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = ve.Pa)(e2, t3), Vt = o2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = (e2) => (Vt = o2._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = ve.Qa)(e2), qt = o2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = (e2) => (qt = o2._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = ve.Ra)(e2), kt = o2._emscripten_bind_PeHorizon_getNump_0 = (e2) => (kt = o2._emscripten_bind_PeHorizon_getNump_0 = ve.Sa)(e2), Jt = o2._emscripten_bind_PeHorizon_getKind_0 = (e2) => (Jt = o2._emscripten_bind_PeHorizon_getKind_0 = ve.Ta)(e2), $t = o2._emscripten_bind_PeHorizon_getInclusive_0 = (e2) => ($t = o2._emscripten_bind_PeHorizon_getInclusive_0 = ve.Ua)(e2), Qt = o2._emscripten_bind_PeHorizon_getSize_0 = (e2) => (Qt = o2._emscripten_bind_PeHorizon_getSize_0 = ve.Va)(e2), e_ = o2._emscripten_bind_PeHorizon_getCoord_0 = (e2) => (e_ = o2._emscripten_bind_PeHorizon_getCoord_0 = ve.Wa)(e2), t_ = o2._emscripten_bind_PeInteger_PeInteger_1 = (e2) => (t_ = o2._emscripten_bind_PeInteger_PeInteger_1 = ve.Xa)(e2), __ = o2._emscripten_bind_PeInteger_get_val_0 = (e2) => (__ = o2._emscripten_bind_PeInteger_get_val_0 = ve.Ya)(e2), r_ = o2._emscripten_bind_PeInteger_set_val_1 = (e2, t3) => (r_ = o2._emscripten_bind_PeInteger_set_val_1 = ve.Za)(e2, t3), o_ = o2._emscripten_bind_PeInteger___destroy___0 = (e2) => (o_ = o2._emscripten_bind_PeInteger___destroy___0 = ve._a)(e2), n_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = (e2) => (n_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = ve.$a)(e2), p_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = (e2) => (p_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = ve.ab)(e2), i_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = (e2) => (i_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = ve.bb)(e2), c_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = (e2) => (c_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = ve.cb)(e2), s_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = (e2) => (s_ = o2._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = ve.db)(e2), P_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = (e2) => (P_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = ve.eb)(e2), a_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = (e2) => (a_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = ve.fb)(e2), g_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = (e2) => (g_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = ve.gb)(e2), y_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = (e2) => (y_ = o2._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = ve.hb)(e2), u_ = o2._emscripten_bind_PeParameter_getValue_0 = (e2) => (u_ = o2._emscripten_bind_PeParameter_getValue_0 = ve.ib)(e2), d_ = o2._emscripten_bind_PeParameter_getCode_0 = (e2) => (d_ = o2._emscripten_bind_PeParameter_getCode_0 = ve.jb)(e2), f_ = o2._emscripten_bind_PeParameter_getName_1 = (e2, t3) => (f_ = o2._emscripten_bind_PeParameter_getName_1 = ve.kb)(e2, t3), E_ = o2._emscripten_bind_PeParameter_getType_0 = (e2) => (E_ = o2._emscripten_bind_PeParameter_getType_0 = ve.lb)(e2), b_ = o2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = (e2) => (b_ = o2._emscripten_bind_PePCSInfo_getCentralMeridian_0 = ve.mb)(e2), m_ = o2._emscripten_bind_PePCSInfo_getDomainMinx_0 = (e2) => (m_ = o2._emscripten_bind_PePCSInfo_getDomainMinx_0 = ve.nb)(e2), T_ = o2._emscripten_bind_PePCSInfo_getDomainMiny_0 = (e2) => (T_ = o2._emscripten_bind_PePCSInfo_getDomainMiny_0 = ve.ob)(e2), O_ = o2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = (e2) => (O_ = o2._emscripten_bind_PePCSInfo_getDomainMaxx_0 = ve.pb)(e2), S_ = o2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = (e2) => (S_ = o2._emscripten_bind_PePCSInfo_getDomainMaxy_0 = ve.qb)(e2), N_ = o2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = (e2) => (N_ = o2._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = ve.rb)(e2), h_ = o2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = (e2) => (h_ = o2._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = ve.sb)(e2), l_ = o2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = (e2) => (l_ = o2._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = ve.tb)(e2), M_ = o2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = (e2) => (M_ = o2._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = ve.ub)(e2), v_ = o2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = (e2) => (v_ = o2._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = ve.vb)(e2), D_ = o2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = (e2) => (D_ = o2._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = ve.wb)(e2), A_ = o2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = (e2) => (A_ = o2._emscripten_bind_PePCSInfo_isPannableRectangle_0 = ve.xb)(e2), R_ = o2._emscripten_bind_PePCSInfo_generate_2 = (e2, t3, _3) => (R_ = o2._emscripten_bind_PePCSInfo_generate_2 = ve.yb)(e2, t3, _3), G_ = o2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = (e2) => (G_ = o2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = ve.zb)(e2), C_ = o2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = (e2) => (C_ = o2._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = ve.Ab)(e2), I_ = o2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = (e2) => (I_ = o2._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = ve.Bb)(e2), j_ = o2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = (e2) => (j_ = o2._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = ve.Cb)(e2), U_ = o2._emscripten_bind_PePrimem_getLongitude_0 = (e2) => (U_ = o2._emscripten_bind_PePrimem_getLongitude_0 = ve.Db)(e2), L_ = o2._emscripten_bind_PePrimem_getCode_0 = (e2) => (L_ = o2._emscripten_bind_PePrimem_getCode_0 = ve.Eb)(e2), F_ = o2._emscripten_bind_PePrimem_getName_1 = (e2, t3) => (F_ = o2._emscripten_bind_PePrimem_getName_1 = ve.Fb)(e2, t3), Y_ = o2._emscripten_bind_PePrimem_getType_0 = (e2) => (Y_ = o2._emscripten_bind_PePrimem_getType_0 = ve.Gb)(e2), w_ = o2._emscripten_bind_PeProjcs_getGeogcs_0 = (e2) => (w_ = o2._emscripten_bind_PeProjcs_getGeogcs_0 = ve.Hb)(e2), x_ = o2._emscripten_bind_PeProjcs_getParameters_0 = (e2) => (x_ = o2._emscripten_bind_PeProjcs_getParameters_0 = ve.Ib)(e2), H_ = o2._emscripten_bind_PeProjcs_getUnit_0 = (e2) => (H_ = o2._emscripten_bind_PeProjcs_getUnit_0 = ve.Jb)(e2), X_ = o2._emscripten_bind_PeProjcs_loadConstants_0 = (e2) => (X_ = o2._emscripten_bind_PeProjcs_loadConstants_0 = ve.Kb)(e2), z_ = o2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = (e2) => (z_ = o2._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = ve.Lb)(e2), Z_ = o2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = (e2) => (Z_ = o2._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = ve.Mb)(e2), W_ = o2._emscripten_bind_PeProjcs_getCode_0 = (e2) => (W_ = o2._emscripten_bind_PeProjcs_getCode_0 = ve.Nb)(e2), B_ = o2._emscripten_bind_PeProjcs_getName_1 = (e2, t3) => (B_ = o2._emscripten_bind_PeProjcs_getName_1 = ve.Ob)(e2, t3), K_ = o2._emscripten_bind_PeProjcs_getType_0 = (e2) => (K_ = o2._emscripten_bind_PeProjcs_getType_0 = ve.Pb)(e2), V_ = o2._emscripten_bind_PeSpheroid_getAxis_0 = (e2) => (V_ = o2._emscripten_bind_PeSpheroid_getAxis_0 = ve.Qb)(e2), q_ = o2._emscripten_bind_PeSpheroid_getFlattening_0 = (e2) => (q_ = o2._emscripten_bind_PeSpheroid_getFlattening_0 = ve.Rb)(e2), k_ = o2._emscripten_bind_PeSpheroid_getCode_0 = (e2) => (k_ = o2._emscripten_bind_PeSpheroid_getCode_0 = ve.Sb)(e2), J_ = o2._emscripten_bind_PeSpheroid_getName_1 = (e2, t3) => (J_ = o2._emscripten_bind_PeSpheroid_getName_1 = ve.Tb)(e2, t3), $_ = o2._emscripten_bind_PeSpheroid_getType_0 = (e2) => ($_ = o2._emscripten_bind_PeSpheroid_getType_0 = ve.Ub)(e2), Q_ = o2._emscripten_bind_PeUnit_getUnitFactor_0 = (e2) => (Q_ = o2._emscripten_bind_PeUnit_getUnitFactor_0 = ve.Vb)(e2), er = o2._emscripten_bind_PeUnit_getCode_0 = (e2) => (er = o2._emscripten_bind_PeUnit_getCode_0 = ve.Wb)(e2), tr = o2._emscripten_bind_PeUnit_getName_1 = (e2, t3) => (tr = o2._emscripten_bind_PeUnit_getName_1 = ve.Xb)(e2, t3), _r = o2._emscripten_bind_PeUnit_getType_0 = (e2) => (_r = o2._emscripten_bind_PeUnit_getType_0 = ve.Yb)(e2), rr = o2._emscripten_bind_PeVersion_version_string_0 = (e2) => (rr = o2._emscripten_bind_PeVersion_version_string_0 = ve.Zb)(e2);
  function or() {
    function e2() {
      De || (De = true, o2.calledRun = true, D || (U(), t2(o2), L()));
    }
    Y > 0 || (j(), Y > 0 || e2());
  }
  function nr() {
  }
  function pr(e2) {
    return (e2 || nr).__cache__;
  }
  function ir(e2, t3) {
    var _3 = pr(t3), r2 = _3[e2];
    return r2 || ((r2 = Object.create((t3 || nr).prototype)).ptr = e2, _3[e2] = r2);
  }
  function cr(e2, t3) {
    return ir(e2.ptr, t3);
  }
  function sr(e2) {
    if (!e2.__destroy__)
      throw "Error: Cannot destroy object. (Did you create it yourself?)";
    e2.__destroy__(), delete pr(e2.__class__)[e2.ptr];
  }
  function Pr(e2, t3) {
    return e2.ptr === t3.ptr;
  }
  function ar(e2) {
    return e2.ptr;
  }
  function gr(e2) {
    return e2.__class__;
  }
  o2._pe_getPeGTlistExtendedEntrySize = () => (o2._pe_getPeGTlistExtendedEntrySize = ve._b)(), o2._pe_getPeGTlistExtendedGTsSize = () => (o2._pe_getPeGTlistExtendedGTsSize = ve.$b)(), o2._pe_getPeHorizonSize = () => (o2._pe_getPeHorizonSize = ve.ac)(), o2._pe_geog_to_geog = (e2, t3, _3, r2, n3) => (o2._pe_geog_to_geog = ve.cc)(e2, t3, _3, r2, n3), o2._pe_geog_to_proj = (e2, t3, _3) => (o2._pe_geog_to_proj = ve.dc)(e2, t3, _3), o2._pe_geog_to_dd = (e2, t3, _3, r2, n3) => (o2._pe_geog_to_dd = ve.ec)(e2, t3, _3, r2, n3), o2._pe_dd_to_geog = (e2, t3, _3, r2) => (o2._pe_dd_to_geog = ve.fc)(e2, t3, _3, r2), o2._pe_geog_to_ddm = (e2, t3, _3, r2, n3) => (o2._pe_geog_to_ddm = ve.gc)(e2, t3, _3, r2, n3), o2._pe_ddm_to_geog = (e2, t3, _3, r2) => (o2._pe_ddm_to_geog = ve.hc)(e2, t3, _3, r2), o2._pe_geog_to_dms = (e2, t3, _3, r2, n3) => (o2._pe_geog_to_dms = ve.ic)(e2, t3, _3, r2, n3), o2._pe_dms_to_geog = (e2, t3, _3, r2) => (o2._pe_dms_to_geog = ve.jc)(e2, t3, _3, r2), o2._pe_geog_to_mgrs_extended = (e2, t3, _3, r2, n3, p3, i3) => (o2._pe_geog_to_mgrs_extended = ve.kc)(e2, t3, _3, r2, n3, p3, i3), o2._pe_mgrs_to_geog_extended = (e2, t3, _3, r2, n3) => (o2._pe_mgrs_to_geog_extended = ve.lc)(e2, t3, _3, r2, n3), o2._pe_geog_to_usng = (e2, t3, _3, r2, n3, p3, i3) => (o2._pe_geog_to_usng = ve.mc)(e2, t3, _3, r2, n3, p3, i3), o2._pe_usng_to_geog = (e2, t3, _3, r2) => (o2._pe_usng_to_geog = ve.nc)(e2, t3, _3, r2), o2._pe_geog_to_utm = (e2, t3, _3, r2, n3) => (o2._pe_geog_to_utm = ve.oc)(e2, t3, _3, r2, n3), o2._pe_utm_to_geog = (e2, t3, _3, r2, n3) => (o2._pe_utm_to_geog = ve.pc)(e2, t3, _3, r2, n3), o2._pe_object_to_string_ext = (e2, t3, _3) => (o2._pe_object_to_string_ext = ve.qc)(e2, t3, _3), o2._pe_proj_to_geog_center = (e2, t3, _3, r2) => (o2._pe_proj_to_geog_center = ve.rc)(e2, t3, _3, r2), o2.___start_em_js = 2033306, o2.___stop_em_js = 2033404, o2.getValue = Q, o2.UTF8ToString = _e, w = function e2() {
    De || or(), De || (w = e2);
  }, or(), nr.prototype = Object.create(nr.prototype), nr.prototype.constructor = nr, nr.prototype.__class__ = nr, nr.__cache__ = {}, o2.WrapperObject = nr, o2.getCache = pr, o2.wrapPointer = ir, o2.castObject = cr, o2.NULL = ir(0), o2.destroy = sr, o2.compare = Pr, o2.getPointer = ar, o2.getClass = gr;
  var yr = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare() {
    if (yr.needed) {
      for (var e2 = 0; e2 < yr.temps.length; e2++)
        o2._webidl_free(yr.temps[e2]);
      yr.temps.length = 0, o2._webidl_free(yr.buffer), yr.buffer = 0, yr.size += yr.needed, yr.needed = 0;
    }
    yr.buffer || (yr.size += 128, yr.buffer = o2._webidl_malloc(yr.size), A(yr.buffer)), yr.pos = 0;
  }, alloc(e2, t3) {
    A(yr.buffer);
    var _3, r2 = t3.BYTES_PER_ELEMENT, n3 = e2.length * r2;
    return n3 = n3 + 7 & -8, yr.pos + n3 >= yr.size ? (A(n3 > 0), yr.needed += n3, _3 = o2._webidl_malloc(n3), yr.temps.push(_3)) : (_3 = yr.buffer + yr.pos, yr.pos += n3), _3;
  }, copy(e2, t3, _3) {
    switch (_3 >>>= 0, t3.BYTES_PER_ELEMENT) {
      case 2:
        _3 >>>= 1;
        break;
      case 4:
        _3 >>>= 2;
        break;
      case 8:
        _3 >>>= 3;
    }
    for (var r2 = 0; r2 < e2.length; r2++)
      t3[_3 + r2] = e2[r2];
  } };
  function ur(e2) {
    if ("string" == typeof e2) {
      var t3 = le(e2), _3 = yr.alloc(t3, O);
      return yr.copy(t3, O, _3), _3;
    }
    return e2;
  }
  function dr(e2) {
    if ("object" == typeof e2) {
      var t3 = yr.alloc(e2, O);
      return yr.copy(e2, O, t3), t3;
    }
    return e2;
  }
  function fr(e2) {
    if ("object" == typeof e2) {
      var t3 = yr.alloc(e2, N);
      return yr.copy(e2, N, t3), t3;
    }
    return e2;
  }
  function Er(e2) {
    if ("object" == typeof e2) {
      var t3 = yr.alloc(e2, h);
      return yr.copy(e2, h, t3), t3;
    }
    return e2;
  }
  function br(e2) {
    if ("object" == typeof e2) {
      var t3 = yr.alloc(e2, M);
      return yr.copy(e2, M, t3), t3;
    }
    return e2;
  }
  function mr(e2) {
    if ("object" == typeof e2) {
      var t3 = yr.alloc(e2, v);
      return yr.copy(e2, v, t3), t3;
    }
    return e2;
  }
  function Tr() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function Or() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function Sr() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function Nr() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function hr() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function lr() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function Mr(e2, t3, _3, r2, o3, n3) {
    e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), o3 && "object" == typeof o3 && (o3 = o3.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), this.ptr = Nt(e2, t3, _3, r2, o3, n3), pr(Mr)[this.ptr] = this;
  }
  function vr() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function Dr() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function Ar() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function Rr() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function Gr() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function Cr() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function Ir(e2) {
    e2 && "object" == typeof e2 && (e2 = e2.ptr), this.ptr = t_(e2), pr(Ir)[this.ptr] = this;
  }
  function jr() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function Ur() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function Lr() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function Fr() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function Yr() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function wr() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function xr() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function Hr() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function Xr() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return Tr.prototype = Object.create(nr.prototype), Tr.prototype.constructor = Tr, Tr.prototype.__class__ = Tr, Tr.__cache__ = {}, o2.PeObject = Tr, Tr.prototype.getCode = Tr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Re(e2);
  }, Tr.prototype.getName = Tr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(Ge(t3, e2));
  }, Tr.prototype.getType = Tr.prototype.getType = function() {
    var e2 = this.ptr;
    return Ce(e2);
  }, Or.prototype = Object.create(Tr.prototype), Or.prototype.constructor = Or, Or.prototype.__class__ = Or, Or.__cache__ = {}, o2.PeCoordsys = Or, Or.prototype.getCode = Or.prototype.getCode = function() {
    var e2 = this.ptr;
    return Ie(e2);
  }, Or.prototype.getName = Or.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(je(t3, e2));
  }, Or.prototype.getType = Or.prototype.getType = function() {
    var e2 = this.ptr;
    return Ue(e2);
  }, Sr.prototype = Object.create(nr.prototype), Sr.prototype.constructor = Sr, Sr.prototype.__class__ = Sr, Sr.__cache__ = {}, o2.VoidPtr = Sr, Sr.prototype.__destroy__ = Sr.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    Le(e2);
  }, Nr.prototype = Object.create(Tr.prototype), Nr.prototype.constructor = Nr, Nr.prototype.__class__ = Nr, Nr.__cache__ = {}, o2.PeDatum = Nr, Nr.prototype.getSpheroid = Nr.prototype.getSpheroid = function() {
    var e2 = this.ptr;
    return ir(Fe(e2), xr);
  }, Nr.prototype.getCode = Nr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Ye(e2);
  }, Nr.prototype.getName = Nr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(we(t3, e2));
  }, Nr.prototype.getType = Nr.prototype.getType = function() {
    var e2 = this.ptr;
    return xe(e2);
  }, hr.prototype = Object.create(nr.prototype), hr.prototype.constructor = hr, hr.prototype.__class__ = hr, hr.__cache__ = {}, o2.PeDefs = hr, hr.prototype.get_PE_BUFFER_MAX = hr.prototype.get_PE_BUFFER_MAX = function() {
    var e2 = this.ptr;
    return He(e2);
  }, Object.defineProperty(hr.prototype, "PE_BUFFER_MAX", { get: hr.prototype.get_PE_BUFFER_MAX }), hr.prototype.get_PE_NAME_MAX = hr.prototype.get_PE_NAME_MAX = function() {
    var e2 = this.ptr;
    return Xe(e2);
  }, Object.defineProperty(hr.prototype, "PE_NAME_MAX", { get: hr.prototype.get_PE_NAME_MAX }), hr.prototype.get_PE_MGRS_MAX = hr.prototype.get_PE_MGRS_MAX = function() {
    var e2 = this.ptr;
    return ze(e2);
  }, Object.defineProperty(hr.prototype, "PE_MGRS_MAX", { get: hr.prototype.get_PE_MGRS_MAX }), hr.prototype.get_PE_USNG_MAX = hr.prototype.get_PE_USNG_MAX = function() {
    var e2 = this.ptr;
    return Ze(e2);
  }, Object.defineProperty(hr.prototype, "PE_USNG_MAX", { get: hr.prototype.get_PE_USNG_MAX }), hr.prototype.get_PE_DD_MAX = hr.prototype.get_PE_DD_MAX = function() {
    var e2 = this.ptr;
    return We(e2);
  }, Object.defineProperty(hr.prototype, "PE_DD_MAX", { get: hr.prototype.get_PE_DD_MAX }), hr.prototype.get_PE_DMS_MAX = hr.prototype.get_PE_DMS_MAX = function() {
    var e2 = this.ptr;
    return Be(e2);
  }, Object.defineProperty(hr.prototype, "PE_DMS_MAX", { get: hr.prototype.get_PE_DMS_MAX }), hr.prototype.get_PE_DDM_MAX = hr.prototype.get_PE_DDM_MAX = function() {
    var e2 = this.ptr;
    return Ke(e2);
  }, Object.defineProperty(hr.prototype, "PE_DDM_MAX", { get: hr.prototype.get_PE_DDM_MAX }), hr.prototype.get_PE_UTM_MAX = hr.prototype.get_PE_UTM_MAX = function() {
    var e2 = this.ptr;
    return Ve(e2);
  }, Object.defineProperty(hr.prototype, "PE_UTM_MAX", { get: hr.prototype.get_PE_UTM_MAX }), hr.prototype.get_PE_PARM_MAX = hr.prototype.get_PE_PARM_MAX = function() {
    var e2 = this.ptr;
    return qe(e2);
  }, Object.defineProperty(hr.prototype, "PE_PARM_MAX", { get: hr.prototype.get_PE_PARM_MAX }), hr.prototype.get_PE_TYPE_NONE = hr.prototype.get_PE_TYPE_NONE = function() {
    var e2 = this.ptr;
    return ke(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_NONE", { get: hr.prototype.get_PE_TYPE_NONE }), hr.prototype.get_PE_TYPE_GEOGCS = hr.prototype.get_PE_TYPE_GEOGCS = function() {
    var e2 = this.ptr;
    return Je(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_GEOGCS", { get: hr.prototype.get_PE_TYPE_GEOGCS }), hr.prototype.get_PE_TYPE_PROJCS = hr.prototype.get_PE_TYPE_PROJCS = function() {
    var e2 = this.ptr;
    return $e(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_PROJCS", { get: hr.prototype.get_PE_TYPE_PROJCS }), hr.prototype.get_PE_TYPE_GEOGTRAN = hr.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var e2 = this.ptr;
    return Qe(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_GEOGTRAN", { get: hr.prototype.get_PE_TYPE_GEOGTRAN }), hr.prototype.get_PE_TYPE_COORDSYS = hr.prototype.get_PE_TYPE_COORDSYS = function() {
    var e2 = this.ptr;
    return et(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_COORDSYS", { get: hr.prototype.get_PE_TYPE_COORDSYS }), hr.prototype.get_PE_TYPE_UNIT = hr.prototype.get_PE_TYPE_UNIT = function() {
    var e2 = this.ptr;
    return tt(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_UNIT", { get: hr.prototype.get_PE_TYPE_UNIT }), hr.prototype.get_PE_TYPE_LINUNIT = hr.prototype.get_PE_TYPE_LINUNIT = function() {
    var e2 = this.ptr;
    return _t(e2);
  }, Object.defineProperty(hr.prototype, "PE_TYPE_LINUNIT", { get: hr.prototype.get_PE_TYPE_LINUNIT }), hr.prototype.get_PE_STR_OPTS_NONE = hr.prototype.get_PE_STR_OPTS_NONE = function() {
    var e2 = this.ptr;
    return rt(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_OPTS_NONE", { get: hr.prototype.get_PE_STR_OPTS_NONE }), hr.prototype.get_PE_STR_AUTH_NONE = hr.prototype.get_PE_STR_AUTH_NONE = function() {
    var e2 = this.ptr;
    return ot(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_AUTH_NONE", { get: hr.prototype.get_PE_STR_AUTH_NONE }), hr.prototype.get_PE_STR_AUTH_TOP = hr.prototype.get_PE_STR_AUTH_TOP = function() {
    var e2 = this.ptr;
    return nt(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_AUTH_TOP", { get: hr.prototype.get_PE_STR_AUTH_TOP }), hr.prototype.get_PE_STR_NAME_CANON = hr.prototype.get_PE_STR_NAME_CANON = function() {
    var e2 = this.ptr;
    return pt(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_NAME_CANON", { get: hr.prototype.get_PE_STR_NAME_CANON }), hr.prototype.get_PE_STR_FMT_WKT = hr.prototype.get_PE_STR_FMT_WKT = function() {
    var e2 = this.ptr;
    return it(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_FMT_WKT", { get: hr.prototype.get_PE_STR_FMT_WKT }), hr.prototype.get_PE_STR_FMT_WKT2 = hr.prototype.get_PE_STR_FMT_WKT2 = function() {
    var e2 = this.ptr;
    return ct(e2);
  }, Object.defineProperty(hr.prototype, "PE_STR_FMT_WKT2", { get: hr.prototype.get_PE_STR_FMT_WKT2 }), hr.prototype.get_PE_PARM_X0 = hr.prototype.get_PE_PARM_X0 = function() {
    var e2 = this.ptr;
    return st(e2);
  }, Object.defineProperty(hr.prototype, "PE_PARM_X0", { get: hr.prototype.get_PE_PARM_X0 }), hr.prototype.get_PE_PARM_ND = hr.prototype.get_PE_PARM_ND = function() {
    var e2 = this.ptr;
    return Pt(e2);
  }, Object.defineProperty(hr.prototype, "PE_PARM_ND", { get: hr.prototype.get_PE_PARM_ND }), hr.prototype.get_PE_TRANSFORM_1_TO_2 = hr.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var e2 = this.ptr;
    return at(e2);
  }, Object.defineProperty(hr.prototype, "PE_TRANSFORM_1_TO_2", { get: hr.prototype.get_PE_TRANSFORM_1_TO_2 }), hr.prototype.get_PE_TRANSFORM_2_TO_1 = hr.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var e2 = this.ptr;
    return gt(e2);
  }, Object.defineProperty(hr.prototype, "PE_TRANSFORM_2_TO_1", { get: hr.prototype.get_PE_TRANSFORM_2_TO_1 }), hr.prototype.get_PE_TRANSFORM_P_TO_G = hr.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var e2 = this.ptr;
    return yt(e2);
  }, Object.defineProperty(hr.prototype, "PE_TRANSFORM_P_TO_G", { get: hr.prototype.get_PE_TRANSFORM_P_TO_G }), hr.prototype.get_PE_TRANSFORM_G_TO_P = hr.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var e2 = this.ptr;
    return ut(e2);
  }, Object.defineProperty(hr.prototype, "PE_TRANSFORM_G_TO_P", { get: hr.prototype.get_PE_TRANSFORM_G_TO_P }), hr.prototype.get_PE_HORIZON_RECT = hr.prototype.get_PE_HORIZON_RECT = function() {
    var e2 = this.ptr;
    return dt(e2);
  }, Object.defineProperty(hr.prototype, "PE_HORIZON_RECT", { get: hr.prototype.get_PE_HORIZON_RECT }), hr.prototype.get_PE_HORIZON_POLY = hr.prototype.get_PE_HORIZON_POLY = function() {
    var e2 = this.ptr;
    return ft(e2);
  }, Object.defineProperty(hr.prototype, "PE_HORIZON_POLY", { get: hr.prototype.get_PE_HORIZON_POLY }), hr.prototype.get_PE_HORIZON_LINE = hr.prototype.get_PE_HORIZON_LINE = function() {
    var e2 = this.ptr;
    return Et(e2);
  }, Object.defineProperty(hr.prototype, "PE_HORIZON_LINE", { get: hr.prototype.get_PE_HORIZON_LINE }), hr.prototype.get_PE_HORIZON_DELTA = hr.prototype.get_PE_HORIZON_DELTA = function() {
    var e2 = this.ptr;
    return bt(e2);
  }, Object.defineProperty(hr.prototype, "PE_HORIZON_DELTA", { get: hr.prototype.get_PE_HORIZON_DELTA }), lr.prototype = Object.create(nr.prototype), lr.prototype.constructor = lr, lr.prototype.__class__ = lr, lr.__cache__ = {}, o2.PeFactory = lr, lr.prototype.initialize = lr.prototype.initialize = function(e2) {
    var t3 = this.ptr;
    yr.prepare(), e2 = e2 && "object" == typeof e2 ? e2.ptr : ur(e2), mt(t3, e2);
  }, lr.prototype.factoryByType = lr.prototype.factoryByType = function(e2, t3) {
    var _3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), ir(Tt(_3, e2, t3), Tr);
  }, lr.prototype.fromString = lr.prototype.fromString = function(e2, t3) {
    var _3 = this.ptr;
    return yr.prepare(), e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 = t3 && "object" == typeof t3 ? t3.ptr : ur(t3), ir(Ot(_3, e2, t3), Tr);
  }, lr.prototype.getCode = lr.prototype.getCode = function(e2) {
    var t3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), St(t3, e2);
  }, Mr.prototype = Object.create(nr.prototype), Mr.prototype.constructor = Mr, Mr.prototype.__class__ = Mr, Mr.__cache__ = {}, o2.PeGCSExtent = Mr, Mr.prototype.getLLon = Mr.prototype.getLLon = function() {
    var e2 = this.ptr;
    return ht(e2);
  }, Mr.prototype.getSLat = Mr.prototype.getSLat = function() {
    var e2 = this.ptr;
    return lt(e2);
  }, Mr.prototype.getRLon = Mr.prototype.getRLon = function() {
    var e2 = this.ptr;
    return Mt(e2);
  }, Mr.prototype.getNLat = Mr.prototype.getNLat = function() {
    var e2 = this.ptr;
    return vt(e2);
  }, Mr.prototype.__destroy__ = Mr.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    Dt(e2);
  }, vr.prototype = Object.create(Or.prototype), vr.prototype.constructor = vr, vr.prototype.__class__ = vr, vr.__cache__ = {}, o2.PeGeogcs = vr, vr.prototype.getDatum = vr.prototype.getDatum = function() {
    var e2 = this.ptr;
    return ir(At(e2), Nr);
  }, vr.prototype.getPrimem = vr.prototype.getPrimem = function() {
    var e2 = this.ptr;
    return ir(Rt(e2), Yr);
  }, vr.prototype.getUnit = vr.prototype.getUnit = function() {
    var e2 = this.ptr;
    return ir(Gt(e2), Hr);
  }, vr.prototype.getCode = vr.prototype.getCode = function() {
    var e2 = this.ptr;
    return Ct(e2);
  }, vr.prototype.getName = vr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(It(t3, e2));
  }, vr.prototype.getType = vr.prototype.getType = function() {
    var e2 = this.ptr;
    return jt(e2);
  }, Dr.prototype = Object.create(Tr.prototype), Dr.prototype.constructor = Dr, Dr.prototype.__class__ = Dr, Dr.__cache__ = {}, o2.PeGeogtran = Dr, Dr.prototype.isEqual = Dr.prototype.isEqual = function(e2) {
    var t3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), !!Ut(t3, e2);
  }, Dr.prototype.getGeogcs1 = Dr.prototype.getGeogcs1 = function() {
    var e2 = this.ptr;
    return ir(Lt(e2), vr);
  }, Dr.prototype.getGeogcs2 = Dr.prototype.getGeogcs2 = function() {
    var e2 = this.ptr;
    return ir(Ft(e2), vr);
  }, Dr.prototype.getParameters = Dr.prototype.getParameters = function() {
    var e2 = this.ptr;
    return Yt(e2);
  }, Dr.prototype.loadConstants = Dr.prototype.loadConstants = function() {
    var e2 = this.ptr;
    return !!wt(e2);
  }, Dr.prototype.getCode = Dr.prototype.getCode = function() {
    var e2 = this.ptr;
    return xt(e2);
  }, Dr.prototype.getName = Dr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(Ht(t3, e2));
  }, Dr.prototype.getType = Dr.prototype.getType = function() {
    var e2 = this.ptr;
    return Xt(e2);
  }, Ar.prototype = Object.create(nr.prototype), Ar.prototype.constructor = Ar, Ar.prototype.__class__ = Ar, Ar.__cache__ = {}, o2.PeGTlistExtended = Ar, Ar.prototype.getGTlist = Ar.prototype.getGTlist = function(e2, t3, _3, r2, o3, n3) {
    var p3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), _3 && "object" == typeof _3 && (_3 = _3.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), o3 && "object" == typeof o3 && (o3 = o3.ptr), n3 && "object" == typeof n3 && (n3 = n3.ptr), ir(zt(p3, e2, t3, _3, r2, o3, n3), Rr);
  }, Ar.prototype.get_PE_GTLIST_OPTS_COMMON = Ar.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var e2 = this.ptr;
    return Zt(e2);
  }, Object.defineProperty(Ar.prototype, "PE_GTLIST_OPTS_COMMON", { get: Ar.prototype.get_PE_GTLIST_OPTS_COMMON }), Rr.prototype = Object.create(nr.prototype), Rr.prototype.constructor = Rr, Rr.prototype.__class__ = Rr, Rr.__cache__ = {}, o2.PeGTlistExtendedEntry = Rr, Rr.prototype.getEntries = Rr.prototype.getEntries = function() {
    var e2 = this.ptr;
    return ir(Wt(e2), Gr);
  }, Rr.prototype.getSteps = Rr.prototype.getSteps = function() {
    var e2 = this.ptr;
    return Bt(e2);
  }, Rr.prototype.Delete = Rr.prototype.Delete = function(e2) {
    var t3 = this.ptr;
    e2 && "object" == typeof e2 && (e2 = e2.ptr), Kt(t3, e2);
  }, Gr.prototype = Object.create(nr.prototype), Gr.prototype.constructor = Gr, Gr.prototype.__class__ = Gr, Gr.__cache__ = {}, o2.PeGTlistExtendedGTs = Gr, Gr.prototype.getDirection = Gr.prototype.getDirection = function() {
    var e2 = this.ptr;
    return Vt(e2);
  }, Gr.prototype.getGeogtran = Gr.prototype.getGeogtran = function() {
    var e2 = this.ptr;
    return ir(qt(e2), Dr);
  }, Cr.prototype = Object.create(nr.prototype), Cr.prototype.constructor = Cr, Cr.prototype.__class__ = Cr, Cr.__cache__ = {}, o2.PeHorizon = Cr, Cr.prototype.getNump = Cr.prototype.getNump = function() {
    var e2 = this.ptr;
    return kt(e2);
  }, Cr.prototype.getKind = Cr.prototype.getKind = function() {
    var e2 = this.ptr;
    return Jt(e2);
  }, Cr.prototype.getInclusive = Cr.prototype.getInclusive = function() {
    var e2 = this.ptr;
    return $t(e2);
  }, Cr.prototype.getSize = Cr.prototype.getSize = function() {
    var e2 = this.ptr;
    return Qt(e2);
  }, Cr.prototype.getCoord = Cr.prototype.getCoord = function() {
    var e2 = this.ptr;
    return e_(e2);
  }, Ir.prototype = Object.create(nr.prototype), Ir.prototype.constructor = Ir, Ir.prototype.__class__ = Ir, Ir.__cache__ = {}, o2.PeInteger = Ir, Ir.prototype.get_val = Ir.prototype.get_val = function() {
    var e2 = this.ptr;
    return __(e2);
  }, Ir.prototype.set_val = Ir.prototype.set_val = function(e2) {
    var t3 = this.ptr;
    e2 && "object" == typeof e2 && (e2 = e2.ptr), r_(t3, e2);
  }, Object.defineProperty(Ir.prototype, "val", { get: Ir.prototype.get_val, set: Ir.prototype.set_val }), Ir.prototype.__destroy__ = Ir.prototype.__destroy__ = function() {
    var e2 = this.ptr;
    o_(e2);
  }, jr.prototype = Object.create(nr.prototype), jr.prototype.constructor = jr, jr.prototype.__class__ = jr, jr.__cache__ = {}, o2.PeNotationMgrs = jr, jr.prototype.get_PE_MGRS_STYLE_NEW = jr.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var e2 = this.ptr;
    return n_(e2);
  }, Object.defineProperty(jr.prototype, "PE_MGRS_STYLE_NEW", { get: jr.prototype.get_PE_MGRS_STYLE_NEW }), jr.prototype.get_PE_MGRS_STYLE_OLD = jr.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var e2 = this.ptr;
    return p_(e2);
  }, Object.defineProperty(jr.prototype, "PE_MGRS_STYLE_OLD", { get: jr.prototype.get_PE_MGRS_STYLE_OLD }), jr.prototype.get_PE_MGRS_STYLE_AUTO = jr.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var e2 = this.ptr;
    return i_(e2);
  }, Object.defineProperty(jr.prototype, "PE_MGRS_STYLE_AUTO", { get: jr.prototype.get_PE_MGRS_STYLE_AUTO }), jr.prototype.get_PE_MGRS_180_ZONE_1_PLUS = jr.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var e2 = this.ptr;
    return c_(e2);
  }, Object.defineProperty(jr.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: jr.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), jr.prototype.get_PE_MGRS_ADD_SPACES = jr.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var e2 = this.ptr;
    return s_(e2);
  }, Object.defineProperty(jr.prototype, "PE_MGRS_ADD_SPACES", { get: jr.prototype.get_PE_MGRS_ADD_SPACES }), Ur.prototype = Object.create(nr.prototype), Ur.prototype.constructor = Ur, Ur.prototype.__class__ = Ur, Ur.__cache__ = {}, o2.PeNotationUtm = Ur, Ur.prototype.get_PE_UTM_OPTS_NONE = Ur.prototype.get_PE_UTM_OPTS_NONE = function() {
    var e2 = this.ptr;
    return P_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_UTM_OPTS_NONE", { get: Ur.prototype.get_PE_UTM_OPTS_NONE }), Ur.prototype.get_PE_UTM_OPTS_NS = Ur.prototype.get_PE_UTM_OPTS_NS = function() {
    var e2 = this.ptr;
    return a_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_UTM_OPTS_NS", { get: Ur.prototype.get_PE_UTM_OPTS_NS }), Ur.prototype.get_PE_UTM_OPTS_NS_STRICT = Ur.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var e2 = this.ptr;
    return g_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_UTM_OPTS_NS_STRICT", { get: Ur.prototype.get_PE_UTM_OPTS_NS_STRICT }), Ur.prototype.get_PE_UTM_OPTS_ADD_SPACES = Ur.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var e2 = this.ptr;
    return y_(e2);
  }, Object.defineProperty(Ur.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: Ur.prototype.get_PE_UTM_OPTS_ADD_SPACES }), Lr.prototype = Object.create(Tr.prototype), Lr.prototype.constructor = Lr, Lr.prototype.__class__ = Lr, Lr.__cache__ = {}, o2.PeParameter = Lr, Lr.prototype.getValue = Lr.prototype.getValue = function() {
    var e2 = this.ptr;
    return u_(e2);
  }, Lr.prototype.getCode = Lr.prototype.getCode = function() {
    var e2 = this.ptr;
    return d_(e2);
  }, Lr.prototype.getName = Lr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(f_(t3, e2));
  }, Lr.prototype.getType = Lr.prototype.getType = function() {
    var e2 = this.ptr;
    return E_(e2);
  }, Fr.prototype = Object.create(nr.prototype), Fr.prototype.constructor = Fr, Fr.prototype.__class__ = Fr, Fr.__cache__ = {}, o2.PePCSInfo = Fr, Fr.prototype.getCentralMeridian = Fr.prototype.getCentralMeridian = function() {
    var e2 = this.ptr;
    return b_(e2);
  }, Fr.prototype.getDomainMinx = Fr.prototype.getDomainMinx = function() {
    var e2 = this.ptr;
    return m_(e2);
  }, Fr.prototype.getDomainMiny = Fr.prototype.getDomainMiny = function() {
    var e2 = this.ptr;
    return T_(e2);
  }, Fr.prototype.getDomainMaxx = Fr.prototype.getDomainMaxx = function() {
    var e2 = this.ptr;
    return O_(e2);
  }, Fr.prototype.getDomainMaxy = Fr.prototype.getDomainMaxy = function() {
    var e2 = this.ptr;
    return S_(e2);
  }, Fr.prototype.getNorthPoleLocation = Fr.prototype.getNorthPoleLocation = function() {
    var e2 = this.ptr;
    return N_(e2);
  }, Fr.prototype.getNorthPoleGeometry = Fr.prototype.getNorthPoleGeometry = function() {
    var e2 = this.ptr;
    return h_(e2);
  }, Fr.prototype.getSouthPoleLocation = Fr.prototype.getSouthPoleLocation = function() {
    var e2 = this.ptr;
    return l_(e2);
  }, Fr.prototype.getSouthPoleGeometry = Fr.prototype.getSouthPoleGeometry = function() {
    var e2 = this.ptr;
    return M_(e2);
  }, Fr.prototype.isDensificationNeeded = Fr.prototype.isDensificationNeeded = function() {
    var e2 = this.ptr;
    return !!v_(e2);
  }, Fr.prototype.isGcsHorizonMultiOverlap = Fr.prototype.isGcsHorizonMultiOverlap = function() {
    var e2 = this.ptr;
    return !!D_(e2);
  }, Fr.prototype.isPannableRectangle = Fr.prototype.isPannableRectangle = function() {
    var e2 = this.ptr;
    return !!A_(e2);
  }, Fr.prototype.generate = Fr.prototype.generate = function(e2, t3) {
    var _3 = this.ptr;
    return e2 && "object" == typeof e2 && (e2 = e2.ptr), t3 && "object" == typeof t3 && (t3 = t3.ptr), ir(R_(_3, e2, t3), Fr);
  }, Fr.prototype.get_PE_PCSINFO_OPTION_NONE = Fr.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var e2 = this.ptr;
    return G_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_PCSINFO_OPTION_NONE", { get: Fr.prototype.get_PE_PCSINFO_OPTION_NONE }), Fr.prototype.get_PE_PCSINFO_OPTION_DOMAIN = Fr.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var e2 = this.ptr;
    return C_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: Fr.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), Fr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = Fr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var e2 = this.ptr;
    return I_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: Fr.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), Fr.prototype.get_PE_POLE_POINT = Fr.prototype.get_PE_POLE_POINT = function() {
    var e2 = this.ptr;
    return j_(e2);
  }, Object.defineProperty(Fr.prototype, "PE_POLE_POINT", { get: Fr.prototype.get_PE_POLE_POINT }), Yr.prototype = Object.create(Tr.prototype), Yr.prototype.constructor = Yr, Yr.prototype.__class__ = Yr, Yr.__cache__ = {}, o2.PePrimem = Yr, Yr.prototype.getLongitude = Yr.prototype.getLongitude = function() {
    var e2 = this.ptr;
    return U_(e2);
  }, Yr.prototype.getCode = Yr.prototype.getCode = function() {
    var e2 = this.ptr;
    return L_(e2);
  }, Yr.prototype.getName = Yr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(F_(t3, e2));
  }, Yr.prototype.getType = Yr.prototype.getType = function() {
    var e2 = this.ptr;
    return Y_(e2);
  }, wr.prototype = Object.create(Or.prototype), wr.prototype.constructor = wr, wr.prototype.__class__ = wr, wr.__cache__ = {}, o2.PeProjcs = wr, wr.prototype.getGeogcs = wr.prototype.getGeogcs = function() {
    var e2 = this.ptr;
    return ir(w_(e2), vr);
  }, wr.prototype.getParameters = wr.prototype.getParameters = function() {
    var e2 = this.ptr;
    return x_(e2);
  }, wr.prototype.getUnit = wr.prototype.getUnit = function() {
    var e2 = this.ptr;
    return ir(H_(e2), Hr);
  }, wr.prototype.loadConstants = wr.prototype.loadConstants = function() {
    var e2 = this.ptr;
    return !!X_(e2);
  }, wr.prototype.horizonGcsGenerate = wr.prototype.horizonGcsGenerate = function() {
    var e2 = this.ptr;
    return ir(z_(e2), Cr);
  }, wr.prototype.horizonPcsGenerate = wr.prototype.horizonPcsGenerate = function() {
    var e2 = this.ptr;
    return ir(Z_(e2), Cr);
  }, wr.prototype.getCode = wr.prototype.getCode = function() {
    var e2 = this.ptr;
    return W_(e2);
  }, wr.prototype.getName = wr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(B_(t3, e2));
  }, wr.prototype.getType = wr.prototype.getType = function() {
    var e2 = this.ptr;
    return K_(e2);
  }, xr.prototype = Object.create(Tr.prototype), xr.prototype.constructor = xr, xr.prototype.__class__ = xr, xr.__cache__ = {}, o2.PeSpheroid = xr, xr.prototype.getAxis = xr.prototype.getAxis = function() {
    var e2 = this.ptr;
    return V_(e2);
  }, xr.prototype.getFlattening = xr.prototype.getFlattening = function() {
    var e2 = this.ptr;
    return q_(e2);
  }, xr.prototype.getCode = xr.prototype.getCode = function() {
    var e2 = this.ptr;
    return k_(e2);
  }, xr.prototype.getName = xr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(J_(t3, e2));
  }, xr.prototype.getType = xr.prototype.getType = function() {
    var e2 = this.ptr;
    return $_(e2);
  }, Hr.prototype = Object.create(Tr.prototype), Hr.prototype.constructor = Hr, Hr.prototype.__class__ = Hr, Hr.__cache__ = {}, o2.PeUnit = Hr, Hr.prototype.getUnitFactor = Hr.prototype.getUnitFactor = function() {
    var e2 = this.ptr;
    return Q_(e2);
  }, Hr.prototype.getCode = Hr.prototype.getCode = function() {
    var e2 = this.ptr;
    return er(e2);
  }, Hr.prototype.getName = Hr.prototype.getName = function(e2) {
    var t3 = this.ptr;
    return yr.prepare(), "object" == typeof e2 && (e2 = dr(e2)), _e(tr(t3, e2));
  }, Hr.prototype.getType = Hr.prototype.getType = function() {
    var e2 = this.ptr;
    return _r(e2);
  }, Xr.prototype = Object.create(nr.prototype), Xr.prototype.constructor = Xr, Xr.prototype.__class__ = Xr, Xr.__cache__ = {}, o2.PeVersion = Xr, Xr.prototype.version_string = Xr.prototype.version_string = function() {
    var e2 = this.ptr;
    return _e(rr(e2));
  }, o2.ensureCache = yr, o2.ensureString = ur, o2.ensureInt8 = dr, o2.ensureInt16 = fr, o2.ensureInt32 = Er, o2.ensureFloat32 = br, o2.ensureFloat64 = mr, e.ready;
}, _.exports = o;
var p = n.exports;
const i = t({ __proto__: null, default: o$1(p) }, [p]);
export {
  i as p
};
