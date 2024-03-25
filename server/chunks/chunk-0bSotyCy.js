import { bk as o$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var r, t, n, a = { exports: {} };
r = a, t = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, "undefined" != typeof __filename && (t = t || __filename), n = function(e = {}) {
  var r2, n2, a2 = e;
  a2.ready = new Promise((e2, t2) => {
    r2 = e2, n2 = t2;
  });
  var i2, o2, u, s = Object.assign({}, a2), l = "./this.program", c = "object" == typeof window, f = "function" == typeof importScripts, d = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, h = "";
  function p(e2) {
    return a2.locateFile ? a2.locateFile(e2, h) : h + e2;
  }
  if (d) {
    var v = require("fs"), m = require("path");
    h = f ? m.dirname(h) + "/" : __dirname + "/", i2 = (e2, r3) => (e2 = G(e2) ? new URL(e2) : m.normalize(e2), v.readFileSync(e2, r3 ? void 0 : "utf8")), u = (e2) => {
      var r3 = i2(e2, true);
      return r3.buffer || (r3 = new Uint8Array(r3)), r3;
    }, o2 = (e2, r3, t2, n3 = true) => {
      e2 = G(e2) ? new URL(e2) : m.normalize(e2), v.readFile(e2, n3 ? void 0 : "utf8", (e3, a3) => {
        e3 ? t2(e3) : r3(n3 ? a3.buffer : a3);
      });
    }, !a2.thisProgram && process.argv.length > 1 && (l = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), a2.inspect = () => "[Emscripten Module object]";
  } else
    (c || f) && (f ? h = self.location.href : "undefined" != typeof document && document.currentScript && (h = document.currentScript.src), t && (h = t), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", i2 = (e2) => {
      var r3 = new XMLHttpRequest();
      return r3.open("GET", e2, false), r3.send(null), r3.responseText;
    }, f && (u = (e2) => {
      var r3 = new XMLHttpRequest();
      return r3.open("GET", e2, false), r3.responseType = "arraybuffer", r3.send(null), new Uint8Array(r3.response);
    }), o2 = (e2, r3, t2) => {
      var n3 = new XMLHttpRequest();
      n3.open("GET", e2, true), n3.responseType = "arraybuffer", n3.onload = () => {
        200 == n3.status || 0 == n3.status && n3.response ? r3(n3.response) : t2();
      }, n3.onerror = t2, n3.send(null);
    });
  a2.print || console.log.bind(console);
  var y, g, w = a2.printErr || console.error.bind(console);
  Object.assign(a2, s), s = null, a2.arguments && a2.arguments, a2.thisProgram && (l = a2.thisProgram), a2.quit && a2.quit, a2.wasmBinary && (y = a2.wasmBinary), a2.noExitRuntime, "object" != typeof WebAssembly && V("no native wasm support detected");
  var _, b, A, T, C, E, F, P, S = false;
  function W() {
    var e2 = g.buffer;
    a2.HEAP8 = _ = new Int8Array(e2), a2.HEAP16 = A = new Int16Array(e2), a2.HEAPU8 = b = new Uint8Array(e2), a2.HEAPU16 = T = new Uint16Array(e2), a2.HEAP32 = C = new Int32Array(e2), a2.HEAPU32 = E = new Uint32Array(e2), a2.HEAPF32 = F = new Float32Array(e2), a2.HEAPF64 = P = new Float64Array(e2);
  }
  var j = [], M = [], R = [];
  function O() {
    if (a2.preRun)
      for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; )
        $(a2.preRun.shift());
    Q(j);
  }
  function D() {
    Q(M);
  }
  function x() {
    if (a2.postRun)
      for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; )
        U(a2.postRun.shift());
    Q(R);
  }
  function $(e2) {
    j.unshift(e2);
  }
  function k(e2) {
    M.unshift(e2);
  }
  function U(e2) {
    R.unshift(e2);
  }
  var H = 0, I = null;
  function Y(e2) {
    H++, a2.monitorRunDependencies && a2.monitorRunDependencies(H);
  }
  function z(e2) {
    if (H--, a2.monitorRunDependencies && a2.monitorRunDependencies(H), 0 == H && I) {
      var r3 = I;
      I = null, r3();
    }
  }
  function V(e2) {
    a2.onAbort && a2.onAbort(e2), w(e2 = "Aborted(" + e2 + ")"), S = true, e2 += ". Build with -sASSERTIONS for more info.";
    var r3 = new WebAssembly.RuntimeError(e2);
    throw n2(r3), r3;
  }
  var B, q = "data:application/octet-stream;base64,";
  function L(e2) {
    return e2.startsWith(q);
  }
  function G(e2) {
    return e2.startsWith("file://");
  }
  function X(e2) {
    if (e2 == B && y)
      return new Uint8Array(y);
    if (u)
      return u(e2);
    throw "both async and sync fetching of the wasm failed";
  }
  function N(e2) {
    if (!y && (c || f)) {
      if ("function" == typeof fetch && !G(e2))
        return fetch(e2, { credentials: "same-origin" }).then((r3) => {
          if (!r3.ok)
            throw "failed to load wasm binary file at '" + e2 + "'";
          return r3.arrayBuffer();
        }).catch(() => X(e2));
      if (o2)
        return new Promise((r3, t2) => {
          o2(e2, (e3) => r3(new Uint8Array(e3)), t2);
        });
    }
    return Promise.resolve().then(() => X(e2));
  }
  function J(e2, r3, t2) {
    return N(e2).then((e3) => WebAssembly.instantiate(e3, r3)).then((e3) => e3).then(t2, (e3) => {
      w(`failed to asynchronously prepare wasm: ${e3}`), V(e3);
    });
  }
  function Z(e2, r3, t2, n3) {
    return e2 || "function" != typeof WebAssembly.instantiateStreaming || L(r3) || G(r3) || d || "function" != typeof fetch ? J(r3, t2, n3) : fetch(r3, { credentials: "same-origin" }).then((e3) => WebAssembly.instantiateStreaming(e3, t2).then(n3, function(e4) {
      return w(`wasm streaming compile failed: ${e4}`), w("falling back to ArrayBuffer instantiation"), J(r3, t2, n3);
    }));
  }
  function K() {
    var e2 = { a: Vr };
    function r3(e3, r4) {
      return Br = e3.exports, g = Br.w, W(), xe = Br.y, k(Br.x), z(), Br;
    }
    function t2(e3) {
      r3(e3.instance);
    }
    if (Y(), a2.instantiateWasm)
      try {
        return a2.instantiateWasm(e2, r3);
      } catch (i3) {
        w(`Module.instantiateWasm callback failed with error: ${i3}`), n2(i3);
      }
    return Z(y, B, e2, t2).catch(n2), {};
  }
  L(B = "lclayout.wasm") || (B = p(B));
  var Q = (e2) => {
    for (; e2.length > 0; )
      e2.shift()(a2);
  };
  function ee(e2) {
    this.excPtr = e2, this.ptr = e2 - 24, this.set_type = function(e3) {
      E[this.ptr + 4 >> 2] = e3;
    }, this.get_type = function() {
      return E[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e3) {
      E[this.ptr + 8 >> 2] = e3;
    }, this.get_destructor = function() {
      return E[this.ptr + 8 >> 2];
    }, this.set_caught = function(e3) {
      e3 = e3 ? 1 : 0, _[this.ptr + 12 >> 0] = e3;
    }, this.get_caught = function() {
      return 0 != _[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(e3) {
      e3 = e3 ? 1 : 0, _[this.ptr + 13 >> 0] = e3;
    }, this.get_rethrown = function() {
      return 0 != _[this.ptr + 13 >> 0];
    }, this.init = function(e3, r3) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(r3);
    }, this.set_adjusted_ptr = function(e3) {
      E[this.ptr + 16 >> 2] = e3;
    }, this.get_adjusted_ptr = function() {
      return E[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Nr(this.get_type()))
        return E[this.excPtr >> 2];
      var e3 = this.get_adjusted_ptr();
      return 0 !== e3 ? e3 : this.excPtr;
    };
  }
  var re, te, ne, ae = (e2, r3, t2) => {
    throw new ee(e2).init(r3, t2), e2;
  }, ie = (e2, r3, t2, n3, a3) => {
  }, oe = () => {
    for (var e2 = new Array(256), r3 = 0; r3 < 256; ++r3)
      e2[r3] = String.fromCharCode(r3);
    re = e2;
  }, ue = (e2) => {
    for (var r3 = "", t2 = e2; b[t2]; )
      r3 += re[b[t2++]];
    return r3;
  }, se = {}, le = {}, ce = {}, fe = (e2) => {
    throw new te(e2);
  }, de = (e2) => {
    throw new ne(e2);
  }, he = (e2, r3, t2) => {
    function n3(r4) {
      var n4 = t2(r4);
      n4.length !== e2.length && de("Mismatched type converter count");
      for (var a4 = 0; a4 < e2.length; ++a4)
        ve(e2[a4], n4[a4]);
    }
    e2.forEach(function(e3) {
      ce[e3] = r3;
    });
    var a3 = new Array(r3.length), i3 = [], o3 = 0;
    r3.forEach((e3, r4) => {
      le.hasOwnProperty(e3) ? a3[r4] = le[e3] : (i3.push(e3), se.hasOwnProperty(e3) || (se[e3] = []), se[e3].push(() => {
        a3[r4] = le[e3], ++o3 === i3.length && n3(a3);
      }));
    }), 0 === i3.length && n3(a3);
  };
  function pe(e2, r3, t2 = {}) {
    var n3 = r3.name;
    if (e2 || fe(`type "${n3}" must have a positive integer typeid pointer`), le.hasOwnProperty(e2)) {
      if (t2.ignoreDuplicateRegistrations)
        return;
      fe(`Cannot register type '${n3}' twice`);
    }
    if (le[e2] = r3, delete ce[e2], se.hasOwnProperty(e2)) {
      var a3 = se[e2];
      delete se[e2], a3.forEach((e3) => e3());
    }
  }
  function ve(e2, r3, t2 = {}) {
    if (!("argPackAdvance" in r3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return pe(e2, r3, t2);
  }
  var me = 8, ye = (e2, r3, t2, n3) => {
    ve(e2, { name: r3 = ue(r3), fromWireType: function(e3) {
      return !!e3;
    }, toWireType: function(e3, r4) {
      return r4 ? t2 : n3;
    }, argPackAdvance: me, readValueFromPointer: function(e3) {
      return this.fromWireType(b[e3]);
    }, destructorFunction: null });
  }, ge = (e2, r3, t2) => {
    e2 = ue(e2), he([], [r3], function(r4) {
      return r4 = r4[0], a2[e2] = r4.fromWireType(t2), [];
    });
  };
  function we() {
    Object.assign(_e.prototype, { get(e2) {
      return this.allocated[e2];
    }, has(e2) {
      return void 0 !== this.allocated[e2];
    }, allocate(e2) {
      var r3 = this.freelist.pop() || this.allocated.length;
      return this.allocated[r3] = e2, r3;
    }, free(e2) {
      this.allocated[e2] = void 0, this.freelist.push(e2);
    } });
  }
  function _e() {
    this.allocated = [void 0], this.freelist = [];
  }
  var be = new _e(), Ae = (e2) => {
    e2 >= be.reserved && 0 == --be.get(e2).refcount && be.free(e2);
  }, Te = () => {
    for (var e2 = 0, r3 = be.reserved; r3 < be.allocated.length; ++r3)
      void 0 !== be.allocated[r3] && ++e2;
    return e2;
  }, Ce = () => {
    be.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), be.reserved = be.allocated.length, a2.count_emval_handles = Te;
  }, Ee = { toValue: (e2) => (e2 || fe("Cannot use deleted val. handle = " + e2), be.get(e2).value), toHandle: (e2) => {
    switch (e2) {
      case void 0:
        return 1;
      case null:
        return 2;
      case true:
        return 3;
      case false:
        return 4;
      default:
        return be.allocate({ refcount: 1, value: e2 });
    }
  } };
  function Fe(e2) {
    return this.fromWireType(C[e2 >> 2]);
  }
  var Pe = (e2, r3) => {
    ve(e2, { name: r3 = ue(r3), fromWireType: (e3) => {
      var r4 = Ee.toValue(e3);
      return Ae(e3), r4;
    }, toWireType: (e3, r4) => Ee.toHandle(r4), argPackAdvance: me, readValueFromPointer: Fe, destructorFunction: null });
  }, Se = (e2, r3) => {
    switch (r3) {
      case 4:
        return function(e3) {
          return this.fromWireType(F[e3 >> 2]);
        };
      case 8:
        return function(e3) {
          return this.fromWireType(P[e3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r3}): ${e2}`);
    }
  }, We = (e2, r3, t2) => {
    ve(e2, { name: r3 = ue(r3), fromWireType: (e3) => e3, toWireType: (e3, r4) => r4, argPackAdvance: me, readValueFromPointer: Se(r3, t2), destructorFunction: null });
  }, je = 48, Me = 57, Re = (e2) => {
    if (void 0 === e2)
      return "_unknown";
    var r3 = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= je && r3 <= Me ? `_${e2}` : e2;
  }, Oe = (e2) => {
    for (; e2.length; ) {
      var r3 = e2.pop();
      e2.pop()(r3);
    }
  };
  function De(e2, r3, t2, n3, a3, i3) {
    var o3 = r3.length;
    o3 < 2 && fe("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var u2 = null !== r3[1] && null !== t2, s2 = false, l2 = 1; l2 < r3.length; ++l2)
      if (null !== r3[l2] && void 0 === r3[l2].destructorFunction) {
        s2 = true;
        break;
      }
    var c2 = "void" !== r3[0].name, f2 = o3 - 2, d2 = new Array(f2), h2 = [], p2 = [];
    return function() {
      var t3;
      arguments.length !== f2 && fe(`function ${e2} called with ${arguments.length} arguments, expected ${f2}`), p2.length = 0, h2.length = u2 ? 2 : 1, h2[0] = a3, u2 && (t3 = r3[1].toWireType(p2, this), h2[1] = t3);
      for (var i4 = 0; i4 < f2; ++i4)
        d2[i4] = r3[i4 + 2].toWireType(p2, arguments[i4]), h2.push(d2[i4]);
      function o4(e3) {
        if (s2)
          Oe(p2);
        else
          for (var n4 = u2 ? 1 : 2; n4 < r3.length; n4++) {
            var a4 = 1 === n4 ? t3 : d2[n4 - 2];
            null !== r3[n4].destructorFunction && r3[n4].destructorFunction(a4);
          }
        if (c2)
          return r3[0].fromWireType(e3);
      }
      return o4(n3.apply(null, h2));
    };
  }
  var xe, $e = (e2, r3, t2) => {
    if (void 0 === e2[r3].overloadTable) {
      var n3 = e2[r3];
      e2[r3] = function() {
        return e2[r3].overloadTable.hasOwnProperty(arguments.length) || fe(`Function '${t2}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e2[r3].overloadTable})!`), e2[r3].overloadTable[arguments.length].apply(this, arguments);
      }, e2[r3].overloadTable = [], e2[r3].overloadTable[n3.argCount] = n3;
    }
  }, ke = (e2, r3, t2) => {
    a2.hasOwnProperty(e2) ? ((void 0 === t2 || void 0 !== a2[e2].overloadTable && void 0 !== a2[e2].overloadTable[t2]) && fe(`Cannot register public name '${e2}' twice`), $e(a2, e2, e2), a2.hasOwnProperty(t2) && fe(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), a2[e2].overloadTable[t2] = r3) : (a2[e2] = r3, void 0 !== t2 && (a2[e2].numArguments = t2));
  }, Ue = (e2, r3) => {
    for (var t2 = [], n3 = 0; n3 < e2; n3++)
      t2.push(E[r3 + 4 * n3 >> 2]);
    return t2;
  }, He = (e2, r3, t2) => {
    a2.hasOwnProperty(e2) || de("Replacing nonexistant public symbol"), void 0 !== a2[e2].overloadTable && void 0 !== t2 ? a2[e2].overloadTable[t2] = r3 : (a2[e2] = r3, a2[e2].argCount = t2);
  }, Ie = (e2, r3, t2) => {
    var n3 = a2["dynCall_" + e2];
    return t2 && t2.length ? n3.apply(null, [r3].concat(t2)) : n3.call(null, r3);
  }, Ye = [], ze = (e2) => {
    var r3 = Ye[e2];
    return r3 || (e2 >= Ye.length && (Ye.length = e2 + 1), Ye[e2] = r3 = xe.get(e2)), r3;
  }, Ve = (e2, r3, t2) => e2.includes("j") ? Ie(e2, r3, t2) : ze(r3).apply(null, t2), Be = (e2, r3) => {
    var t2 = [];
    return function() {
      return t2.length = 0, Object.assign(t2, arguments), Ve(e2, r3, t2);
    };
  }, qe = (e2, r3) => {
    function t2() {
      return e2.includes("j") ? Be(e2, r3) : ze(r3);
    }
    e2 = ue(e2);
    var n3 = t2();
    return "function" != typeof n3 && fe(`unknown function pointer with signature ${e2}: ${r3}`), n3;
  };
  function Le(e2, r3) {
    return { [e2 = Re(e2)]: function() {
      return r3.apply(this, arguments);
    } }[e2];
  }
  var Ge, Xe = (e2, r3) => {
    var t2 = Le(r3, function(e3) {
      this.name = r3, this.message = e3;
      var t3 = new Error(e3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Ne = (e2) => {
    var r3 = qr(e2), t2 = ue(r3);
    return Xr(r3), t2;
  }, Je = (e2, r3) => {
    var t2 = [], n3 = {};
    function a3(e3) {
      n3[e3] || le[e3] || (ce[e3] ? ce[e3].forEach(a3) : (t2.push(e3), n3[e3] = true));
    }
    throw r3.forEach(a3), new Ge(`${e2}: ` + t2.map(Ne).join([", "]));
  }, Ze = (e2, r3, t2, n3, a3, i3, o3) => {
    var u2 = Ue(r3, t2);
    e2 = ue(e2), a3 = qe(n3, a3), ke(e2, function() {
      Je(`Cannot call ${e2} due to unbound types`, u2);
    }, r3 - 1), he([], u2, function(t3) {
      var n4 = [t3[0], null].concat(t3.slice(1));
      return He(e2, De(e2, n4, null, a3, i3), r3 - 1), [];
    });
  }, Ke = (e2, r3, t2) => {
    switch (r3) {
      case 1:
        return t2 ? (e3) => _[e3 >> 0] : (e3) => b[e3 >> 0];
      case 2:
        return t2 ? (e3) => A[e3 >> 1] : (e3) => T[e3 >> 1];
      case 4:
        return t2 ? (e3) => C[e3 >> 2] : (e3) => E[e3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${r3}): ${e2}`);
    }
  }, Qe = (e2, r3, t2, n3, a3) => {
    r3 = ue(r3);
    var i3 = (e3) => e3;
    if (0 === n3) {
      var o3 = 32 - 8 * t2;
      i3 = (e3) => e3 << o3 >>> o3;
    }
    var u2 = r3.includes("unsigned"), s2 = (e3, r4) => {
    };
    ve(e2, { name: r3, fromWireType: i3, toWireType: u2 ? function(e3, r4) {
      return s2(r4, this.name), r4 >>> 0;
    } : function(e3, r4) {
      return s2(r4, this.name), r4;
    }, argPackAdvance: me, readValueFromPointer: Ke(r3, t2, 0 !== n3), destructorFunction: null });
  }, er = (e2, r3, t2) => {
    var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function a3(e3) {
      var r4 = E[e3 >> 2], t3 = E[e3 + 4 >> 2];
      return new n3(_.buffer, t3, r4);
    }
    ve(e2, { name: t2 = ue(t2), fromWireType: a3, argPackAdvance: me, readValueFromPointer: a3 }, { ignoreDuplicateRegistrations: true });
  };
  function rr(e2) {
    return this.fromWireType(E[e2 >> 2]);
  }
  var tr, nr = (e2, r3, t2, n3) => {
    if (!(n3 > 0))
      return 0;
    for (var a3 = t2, i3 = t2 + n3 - 1, o3 = 0; o3 < e2.length; ++o3) {
      var u2 = e2.charCodeAt(o3);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & e2.charCodeAt(++o3)), u2 <= 127) {
        if (t2 >= i3)
          break;
        r3[t2++] = u2;
      } else if (u2 <= 2047) {
        if (t2 + 1 >= i3)
          break;
        r3[t2++] = 192 | u2 >> 6, r3[t2++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (t2 + 2 >= i3)
          break;
        r3[t2++] = 224 | u2 >> 12, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      } else {
        if (t2 + 3 >= i3)
          break;
        r3[t2++] = 240 | u2 >> 18, r3[t2++] = 128 | u2 >> 12 & 63, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      }
    }
    return r3[t2] = 0, t2 - a3;
  }, ar = (e2, r3, t2) => nr(e2, b, r3, t2), ir = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 <= 127 ? r3++ : n3 <= 2047 ? r3 += 2 : n3 >= 55296 && n3 <= 57343 ? (r3 += 4, ++t2) : r3 += 3;
    }
    return r3;
  }, or = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ur = (e2, r3, t2) => {
    for (var n3 = r3 + t2, a3 = r3; e2[a3] && !(a3 >= n3); )
      ++a3;
    if (a3 - r3 > 16 && e2.buffer && or)
      return or.decode(e2.subarray(r3, a3));
    for (var i3 = ""; r3 < a3; ) {
      var o3 = e2[r3++];
      if (128 & o3) {
        var u2 = 63 & e2[r3++];
        if (192 != (224 & o3)) {
          var s2 = 63 & e2[r3++];
          if ((o3 = 224 == (240 & o3) ? (15 & o3) << 12 | u2 << 6 | s2 : (7 & o3) << 18 | u2 << 12 | s2 << 6 | 63 & e2[r3++]) < 65536)
            i3 += String.fromCharCode(o3);
          else {
            var l2 = o3 - 65536;
            i3 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else
          i3 += String.fromCharCode((31 & o3) << 6 | u2);
      } else
        i3 += String.fromCharCode(o3);
    }
    return i3;
  }, sr = (e2, r3) => e2 ? ur(b, e2, r3) : "", lr = (e2, r3) => {
    var t2 = "std::string" === (r3 = ue(r3));
    ve(e2, { name: r3, fromWireType(e3) {
      var r4, n3 = E[e3 >> 2], a3 = e3 + 4;
      if (t2)
        for (var i3 = a3, o3 = 0; o3 <= n3; ++o3) {
          var u2 = a3 + o3;
          if (o3 == n3 || 0 == b[u2]) {
            var s2 = sr(i3, u2 - i3);
            void 0 === r4 ? r4 = s2 : (r4 += String.fromCharCode(0), r4 += s2), i3 = u2 + 1;
          }
        }
      else {
        var l2 = new Array(n3);
        for (o3 = 0; o3 < n3; ++o3)
          l2[o3] = String.fromCharCode(b[a3 + o3]);
        r4 = l2.join("");
      }
      return Xr(e3), r4;
    }, toWireType(e3, r4) {
      var n3;
      r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
      var a3 = "string" == typeof r4;
      a3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || fe("Cannot pass non-string to std::string"), n3 = t2 && a3 ? ir(r4) : r4.length;
      var i3 = Gr(4 + n3 + 1), o3 = i3 + 4;
      if (E[i3 >> 2] = n3, t2 && a3)
        ar(r4, o3, n3 + 1);
      else if (a3)
        for (var u2 = 0; u2 < n3; ++u2) {
          var s2 = r4.charCodeAt(u2);
          s2 > 255 && (Xr(o3), fe("String has UTF-16 code units that do not fit in 8 bits")), b[o3 + u2] = s2;
        }
      else
        for (u2 = 0; u2 < n3; ++u2)
          b[o3 + u2] = r4[u2];
      return null !== e3 && e3.push(Xr, i3), i3;
    }, argPackAdvance: me, readValueFromPointer: rr, destructorFunction(e3) {
      Xr(e3);
    } });
  }, cr = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, fr = (e2, r3) => {
    for (var t2 = e2, n3 = t2 >> 1, a3 = n3 + r3 / 2; !(n3 >= a3) && T[n3]; )
      ++n3;
    if ((t2 = n3 << 1) - e2 > 32 && cr)
      return cr.decode(b.subarray(e2, t2));
    for (var i3 = "", o3 = 0; !(o3 >= r3 / 2); ++o3) {
      var u2 = A[e2 + 2 * o3 >> 1];
      if (0 == u2)
        break;
      i3 += String.fromCharCode(u2);
    }
    return i3;
  }, dr = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 2)
      return 0;
    for (var n3 = r3, a3 = (t2 -= 2) < 2 * e2.length ? t2 / 2 : e2.length, i3 = 0; i3 < a3; ++i3) {
      var o3 = e2.charCodeAt(i3);
      A[r3 >> 1] = o3, r3 += 2;
    }
    return A[r3 >> 1] = 0, r3 - n3;
  }, hr = (e2) => 2 * e2.length, pr = (e2, r3) => {
    for (var t2 = 0, n3 = ""; !(t2 >= r3 / 4); ) {
      var a3 = C[e2 + 4 * t2 >> 2];
      if (0 == a3)
        break;
      if (++t2, a3 >= 65536) {
        var i3 = a3 - 65536;
        n3 += String.fromCharCode(55296 | i3 >> 10, 56320 | 1023 & i3);
      } else
        n3 += String.fromCharCode(a3);
    }
    return n3;
  }, vr = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 4)
      return 0;
    for (var n3 = r3, a3 = n3 + t2 - 4, i3 = 0; i3 < e2.length; ++i3) {
      var o3 = e2.charCodeAt(i3);
      if (o3 >= 55296 && o3 <= 57343 && (o3 = 65536 + ((1023 & o3) << 10) | 1023 & e2.charCodeAt(++i3)), C[r3 >> 2] = o3, (r3 += 4) + 4 > a3)
        break;
    }
    return C[r3 >> 2] = 0, r3 - n3;
  }, mr = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 >= 55296 && n3 <= 57343 && ++t2, r3 += 4;
    }
    return r3;
  }, yr = (e2, r3, t2) => {
    var n3, a3, i3, o3, u2;
    t2 = ue(t2), 2 === r3 ? (n3 = fr, a3 = dr, o3 = hr, i3 = () => T, u2 = 1) : 4 === r3 && (n3 = pr, a3 = vr, o3 = mr, i3 = () => E, u2 = 2), ve(e2, { name: t2, fromWireType: (e3) => {
      for (var t3, a4 = E[e3 >> 2], o4 = i3(), s2 = e3 + 4, l2 = 0; l2 <= a4; ++l2) {
        var c2 = e3 + 4 + l2 * r3;
        if (l2 == a4 || 0 == o4[c2 >> u2]) {
          var f2 = n3(s2, c2 - s2);
          void 0 === t3 ? t3 = f2 : (t3 += String.fromCharCode(0), t3 += f2), s2 = c2 + r3;
        }
      }
      return Xr(e3), t3;
    }, toWireType: (e3, n4) => {
      "string" != typeof n4 && fe(`Cannot pass non-string to C++ string type ${t2}`);
      var i4 = o3(n4), s2 = Gr(4 + i4 + r3);
      return E[s2 >> 2] = i4 >> u2, a3(n4, s2 + 4, i4 + r3), null !== e3 && e3.push(Xr, s2), s2;
    }, argPackAdvance: me, readValueFromPointer: Fe, destructorFunction(e3) {
      Xr(e3);
    } });
  }, gr = (e2, r3) => {
    ve(e2, { isVoid: true, name: r3 = ue(r3), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (e3, r4) => {
    } });
  }, wr = true, _r = () => wr, br = () => {
    V("");
  }, Ar = () => Date.now(), Tr = () => 2147483648, Cr = () => Tr();
  tr = () => performance.now();
  var Er = (e2, r3, t2) => b.copyWithin(e2, r3, r3 + t2), Fr = (e2) => {
    var r3 = (e2 - g.buffer.byteLength + 65535) / 65536;
    try {
      return g.grow(r3), W(), 1;
    } catch (t2) {
    }
  }, Pr = (e2) => {
    var r3 = b.length;
    e2 >>>= 0;
    var t2 = Tr();
    if (e2 > t2)
      return false;
    for (var n3 = (e3, r4) => e3 + (r4 - e3 % r4) % r4, a3 = 1; a3 <= 4; a3 *= 2) {
      var i3 = r3 * (1 + 0.2 / a3);
      i3 = Math.min(i3, e2 + 100663296);
      var o3 = Math.min(t2, n3(Math.max(e2, i3), 65536));
      if (Fr(o3))
        return true;
    }
    return false;
  }, Sr = {}, Wr = () => l || "./this.program", jr = () => {
    if (!jr.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Wr() };
      for (var r3 in Sr)
        void 0 === Sr[r3] ? delete e2[r3] : e2[r3] = Sr[r3];
      var t2 = [];
      for (var r3 in e2)
        t2.push(`${r3}=${e2[r3]}`);
      jr.strings = t2;
    }
    return jr.strings;
  }, Mr = (e2, r3) => {
    for (var t2 = 0; t2 < e2.length; ++t2)
      _[r3++ >> 0] = e2.charCodeAt(t2);
    _[r3 >> 0] = 0;
  }, Rr = (e2, r3) => {
    var t2 = 0;
    return jr().forEach((n3, a3) => {
      var i3 = r3 + t2;
      E[e2 + 4 * a3 >> 2] = i3, Mr(n3, i3), t2 += n3.length + 1;
    }), 0;
  }, Or = (e2, r3) => {
    var t2 = jr();
    E[e2 >> 2] = t2.length;
    var n3 = 0;
    return t2.forEach((e3) => n3 += e3.length + 1), E[r3 >> 2] = n3, 0;
  }, Dr = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), xr = (e2, r3) => {
    for (var t2 = 0, n3 = 0; n3 <= r3; t2 += e2[n3++])
      ;
    return t2;
  }, $r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], kr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ur = (e2, r3) => {
    for (var t2 = new Date(e2.getTime()); r3 > 0; ) {
      var n3 = Dr(t2.getFullYear()), a3 = t2.getMonth(), i3 = (n3 ? $r : kr)[a3];
      if (!(r3 > i3 - t2.getDate()))
        return t2.setDate(t2.getDate() + r3), t2;
      r3 -= i3 - t2.getDate() + 1, t2.setDate(1), a3 < 11 ? t2.setMonth(a3 + 1) : (t2.setMonth(0), t2.setFullYear(t2.getFullYear() + 1));
    }
    return t2;
  };
  function Hr(e2, r3, t2) {
    var n3 = t2 > 0 ? t2 : ir(e2) + 1, a3 = new Array(n3), i3 = nr(e2, a3, 0, a3.length);
    return r3 && (a3.length = i3), a3;
  }
  var Ir = (e2, r3) => {
    _.set(e2, r3);
  }, Yr = (e2, r3, t2, n3) => {
    var a3 = E[n3 + 40 >> 2], i3 = { tm_sec: C[n3 >> 2], tm_min: C[n3 + 4 >> 2], tm_hour: C[n3 + 8 >> 2], tm_mday: C[n3 + 12 >> 2], tm_mon: C[n3 + 16 >> 2], tm_year: C[n3 + 20 >> 2], tm_wday: C[n3 + 24 >> 2], tm_yday: C[n3 + 28 >> 2], tm_isdst: C[n3 + 32 >> 2], tm_gmtoff: C[n3 + 36 >> 2], tm_zone: a3 ? sr(a3) : "" }, o3 = sr(t2), u2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var s2 in u2)
      o3 = o3.replace(new RegExp(s2, "g"), u2[s2]);
    var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function f2(e3, r4, t3) {
      for (var n4 = "number" == typeof e3 ? e3.toString() : e3 || ""; n4.length < r4; )
        n4 = t3[0] + n4;
      return n4;
    }
    function d2(e3, r4) {
      return f2(e3, r4, "0");
    }
    function h2(e3, r4) {
      function t3(e4) {
        return e4 < 0 ? -1 : e4 > 0 ? 1 : 0;
      }
      var n4;
      return 0 === (n4 = t3(e3.getFullYear() - r4.getFullYear())) && 0 === (n4 = t3(e3.getMonth() - r4.getMonth())) && (n4 = t3(e3.getDate() - r4.getDate())), n4;
    }
    function p2(e3) {
      switch (e3.getDay()) {
        case 0:
          return new Date(e3.getFullYear() - 1, 11, 29);
        case 1:
          return e3;
        case 2:
          return new Date(e3.getFullYear(), 0, 3);
        case 3:
          return new Date(e3.getFullYear(), 0, 2);
        case 4:
          return new Date(e3.getFullYear(), 0, 1);
        case 5:
          return new Date(e3.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(e3.getFullYear() - 1, 11, 30);
      }
    }
    function v2(e3) {
      var r4 = Ur(new Date(e3.tm_year + 1900, 0, 1), e3.tm_yday), t3 = new Date(r4.getFullYear(), 0, 4), n4 = new Date(r4.getFullYear() + 1, 0, 4), a4 = p2(t3), i4 = p2(n4);
      return h2(a4, r4) <= 0 ? h2(i4, r4) <= 0 ? r4.getFullYear() + 1 : r4.getFullYear() : r4.getFullYear() - 1;
    }
    var m2 = { "%a": (e3) => l2[e3.tm_wday].substring(0, 3), "%A": (e3) => l2[e3.tm_wday], "%b": (e3) => c2[e3.tm_mon].substring(0, 3), "%B": (e3) => c2[e3.tm_mon], "%C": (e3) => d2((e3.tm_year + 1900) / 100 | 0, 2), "%d": (e3) => d2(e3.tm_mday, 2), "%e": (e3) => f2(e3.tm_mday, 2, " "), "%g": (e3) => v2(e3).toString().substring(2), "%G": (e3) => v2(e3), "%H": (e3) => d2(e3.tm_hour, 2), "%I": (e3) => {
      var r4 = e3.tm_hour;
      return 0 == r4 ? r4 = 12 : r4 > 12 && (r4 -= 12), d2(r4, 2);
    }, "%j": (e3) => d2(e3.tm_mday + xr(Dr(e3.tm_year + 1900) ? $r : kr, e3.tm_mon - 1), 3), "%m": (e3) => d2(e3.tm_mon + 1, 2), "%M": (e3) => d2(e3.tm_min, 2), "%n": () => "\n", "%p": (e3) => e3.tm_hour >= 0 && e3.tm_hour < 12 ? "AM" : "PM", "%S": (e3) => d2(e3.tm_sec, 2), "%t": () => "	", "%u": (e3) => e3.tm_wday || 7, "%U": (e3) => {
      var r4 = e3.tm_yday + 7 - e3.tm_wday;
      return d2(Math.floor(r4 / 7), 2);
    }, "%V": (e3) => {
      var r4 = Math.floor((e3.tm_yday + 7 - (e3.tm_wday + 6) % 7) / 7);
      if ((e3.tm_wday + 371 - e3.tm_yday - 2) % 7 <= 2 && r4++, r4) {
        if (53 == r4) {
          var t3 = (e3.tm_wday + 371 - e3.tm_yday) % 7;
          4 == t3 || 3 == t3 && Dr(e3.tm_year) || (r4 = 1);
        }
      } else {
        r4 = 52;
        var n4 = (e3.tm_wday + 7 - e3.tm_yday - 1) % 7;
        (4 == n4 || 5 == n4 && Dr(e3.tm_year % 400 - 1)) && r4++;
      }
      return d2(r4, 2);
    }, "%w": (e3) => e3.tm_wday, "%W": (e3) => {
      var r4 = e3.tm_yday + 7 - (e3.tm_wday + 6) % 7;
      return d2(Math.floor(r4 / 7), 2);
    }, "%y": (e3) => (e3.tm_year + 1900).toString().substring(2), "%Y": (e3) => e3.tm_year + 1900, "%z": (e3) => {
      var r4 = e3.tm_gmtoff, t3 = r4 >= 0;
      return r4 = (r4 = Math.abs(r4) / 60) / 60 * 100 + r4 % 60, (t3 ? "+" : "-") + String("0000" + r4).slice(-4);
    }, "%Z": (e3) => e3.tm_zone, "%%": () => "%" };
    for (var s2 in o3 = o3.replace(/%%/g, "\0\0"), m2)
      o3.includes(s2) && (o3 = o3.replace(new RegExp(s2, "g"), m2[s2](i3)));
    var y2 = Hr(o3 = o3.replace(/\0\0/g, "%"), false);
    return y2.length > r3 ? 0 : (Ir(y2, e2), y2.length - 1);
  }, zr = (e2, r3, t2, n3, a3) => Yr(e2, r3, t2, n3);
  oe(), te = a2.BindingError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "BindingError";
    }
  }, ne = a2.InternalError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "InternalError";
    }
  }, we(), Ce(), Ge = a2.UnboundTypeError = Xe(Error, "UnboundTypeError");
  var Vr = { a: ae, m: ie, k: ye, i: ge, j: Pe, h: We, b: Ze, d: Qe, c: er, g: lr, e: yr, l: gr, r: _r, f: br, s: Ar, n: Cr, u: tr, v: Er, t: Pr, p: Rr, q: Or, o: zr }, Br = K(), qr = (e2) => (qr = Br.z)(e2);
  a2.__embind_initialize_bindings = () => (a2.__embind_initialize_bindings = Br.A)();
  var Lr, Gr = a2._malloc = (e2) => (Gr = a2._malloc = Br.B)(e2), Xr = a2._free = (e2) => (Xr = a2._free = Br.C)(e2), Nr = (e2) => (Nr = Br.D)(e2);
  function Jr() {
    function e2() {
      Lr || (Lr = true, a2.calledRun = true, S || (D(), r2(a2), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), x()));
    }
    H > 0 || (O(), H > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a2.setStatus("");
      }, 1), e2();
    }, 1)) : e2()));
  }
  if (a2.dynCall_viijii = (e2, r3, t2, n3, i3, o3, u2) => (a2.dynCall_viijii = Br.E)(e2, r3, t2, n3, i3, o3, u2), a2.dynCall_iiiiij = (e2, r3, t2, n3, i3, o3, u2) => (a2.dynCall_iiiiij = Br.F)(e2, r3, t2, n3, i3, o3, u2), a2.dynCall_iiiiijj = (e2, r3, t2, n3, i3, o3, u2, s2, l2) => (a2.dynCall_iiiiijj = Br.G)(e2, r3, t2, n3, i3, o3, u2, s2, l2), a2.dynCall_iiiiiijj = (e2, r3, t2, n3, i3, o3, u2, s2, l2, c2) => (a2.dynCall_iiiiiijj = Br.H)(e2, r3, t2, n3, i3, o3, u2, s2, l2, c2), I = function e2() {
    Lr || Jr(), Lr || (I = e2);
  }, a2.preInit)
    for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
      a2.preInit.pop()();
  return Jr(), e.ready;
}, r.exports = n;
const i = o$1(a.exports), o = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  o as l
};
