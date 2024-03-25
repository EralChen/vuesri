import { bk as o$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var r, t, n, a = { exports: {} };
r = a, t = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, n = function(e = {}) {
  var r2, n2, a2 = e;
  a2.ready = new Promise((e2, t2) => {
    r2 = e2, n2 = t2;
  });
  var o2 = Object.assign({}, a2), i2 = "./this.program", u = true, s = "";
  function l(e2) {
    return a2.locateFile ? a2.locateFile(e2, s) : s + e2;
  }
  "undefined" != typeof document && document.currentScript && (s = document.currentScript.src), t && (s = t), s = 0 !== s.indexOf("blob:") ? s.substr(0, s.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a2.print || console.log.bind(console);
  var c, f, d = a2.printErr || console.error.bind(console);
  Object.assign(a2, o2), o2 = null, a2.arguments && a2.arguments, a2.thisProgram && (i2 = a2.thisProgram), a2.quit && a2.quit, a2.wasmBinary && (c = a2.wasmBinary), "object" != typeof WebAssembly && k("no native wasm support detected");
  var h, p, m, v, g, y, w, _, b = false;
  function A(e2, r3) {
    e2 || k(r3);
  }
  function T() {
    var e2 = f.buffer;
    a2.HEAP8 = h = new Int8Array(e2), a2.HEAP16 = m = new Int16Array(e2), a2.HEAPU8 = p = new Uint8Array(e2), a2.HEAPU16 = v = new Uint16Array(e2), a2.HEAP32 = g = new Int32Array(e2), a2.HEAPU32 = y = new Uint32Array(e2), a2.HEAPF32 = w = new Float32Array(e2), a2.HEAPF64 = _ = new Float64Array(e2);
  }
  var C = [], F = [], W = [];
  function E() {
    if (a2.preRun)
      for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; )
        j(a2.preRun.shift());
    N(C);
  }
  function P() {
    N(F);
  }
  function S() {
    if (a2.postRun)
      for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; )
        O(a2.postRun.shift());
    N(W);
  }
  function j(e2) {
    C.unshift(e2);
  }
  function x(e2) {
    F.unshift(e2);
  }
  function O(e2) {
    W.unshift(e2);
  }
  var D = 0, M = null;
  function R(e2) {
    D++, a2.monitorRunDependencies && a2.monitorRunDependencies(D);
  }
  function $(e2) {
    if (D--, a2.monitorRunDependencies && a2.monitorRunDependencies(D), 0 == D && M) {
      var r3 = M;
      M = null, r3();
    }
  }
  function k(e2) {
    a2.onAbort && a2.onAbort(e2), d(e2 = "Aborted(" + e2 + ")"), b = true, e2 += ". Build with -sASSERTIONS for more info.";
    var r3 = new WebAssembly.RuntimeError(e2);
    throw n2(r3), r3;
  }
  var H, I = "data:application/octet-stream;base64,", U = (e2) => e2.startsWith(I);
  function Y(e2) {
    if (e2 == H && c)
      return new Uint8Array(c);
    throw "both async and sync fetching of the wasm failed";
  }
  function V(e2) {
    return !c && u && "function" == typeof fetch ? fetch(e2, { credentials: "same-origin" }).then((r3) => {
      if (!r3.ok)
        throw "failed to load wasm binary file at '" + e2 + "'";
      return r3.arrayBuffer();
    }).catch(() => Y(e2)) : Promise.resolve().then(() => Y(e2));
  }
  function z(e2, r3, t2) {
    return V(e2).then((e3) => WebAssembly.instantiate(e3, r3)).then((e3) => e3).then(t2, (e3) => {
      d(`failed to asynchronously prepare wasm: ${e3}`), k(e3);
    });
  }
  function B(e2, r3, t2, n3) {
    return e2 || "function" != typeof WebAssembly.instantiateStreaming || U(r3) || "function" != typeof fetch ? z(r3, t2, n3) : fetch(r3, { credentials: "same-origin" }).then((e3) => WebAssembly.instantiateStreaming(e3, t2).then(n3, function(e4) {
      return d(`wasm streaming compile failed: ${e4}`), d("falling back to ArrayBuffer instantiation"), z(r3, t2, n3);
    }));
  }
  function L() {
    var e2 = { a: ot };
    function r3(e3, r4) {
      return it = e3.exports, f = it.E, T(), xe = it.G, x(it.F), $(), it;
    }
    function t2(e3) {
      r3(e3.instance);
    }
    if (R(), a2.instantiateWasm)
      try {
        return a2.instantiateWasm(e2, r3);
      } catch (o3) {
        d(`Module.instantiateWasm callback failed with error: ${o3}`), n2(o3);
      }
    return B(c, H, e2, t2).catch(n2), {};
  }
  U(H = "lyr3DMain.wasm") || (H = l(H));
  var N = (e2) => {
    for (; e2.length > 0; )
      e2.shift()(a2);
  };
  function G(e2) {
    this.excPtr = e2, this.ptr = e2 - 24, this.set_type = function(e3) {
      y[this.ptr + 4 >> 2] = e3;
    }, this.get_type = function() {
      return y[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e3) {
      y[this.ptr + 8 >> 2] = e3;
    }, this.get_destructor = function() {
      return y[this.ptr + 8 >> 2];
    }, this.set_caught = function(e3) {
      e3 = e3 ? 1 : 0, h[this.ptr + 12 >> 0] = e3;
    }, this.get_caught = function() {
      return 0 != h[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(e3) {
      e3 = e3 ? 1 : 0, h[this.ptr + 13 >> 0] = e3;
    }, this.get_rethrown = function() {
      return 0 != h[this.ptr + 13 >> 0];
    }, this.init = function(e3, r3) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(r3);
    }, this.set_adjusted_ptr = function(e3) {
      y[this.ptr + 16 >> 2] = e3;
    }, this.get_adjusted_ptr = function() {
      return y[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (ft(this.get_type()))
        return y[this.excPtr >> 2];
      var e3 = this.get_adjusted_ptr();
      return 0 !== e3 ? e3 : this.excPtr;
    };
  }
  a2.noExitRuntime;
  var q = (e2, r3, t2) => {
    throw new G(e2).init(r3, t2), e2;
  }, J = {}, X = (e2) => {
    for (; e2.length; ) {
      var r3 = e2.pop();
      e2.pop()(r3);
    }
  };
  function Z(e2) {
    return this.fromWireType(g[e2 >> 2]);
  }
  var K, Q, ee, re = {}, te = {}, ne = {}, ae = (e2) => {
    throw new K(e2);
  }, oe = (e2, r3, t2) => {
    function n3(r4) {
      var n4 = t2(r4);
      n4.length !== e2.length && ae("Mismatched type converter count");
      for (var a4 = 0; a4 < e2.length; ++a4)
        pe(e2[a4], n4[a4]);
    }
    e2.forEach(function(e3) {
      ne[e3] = r3;
    });
    var a3 = new Array(r3.length), o3 = [], i3 = 0;
    r3.forEach((e3, r4) => {
      te.hasOwnProperty(e3) ? a3[r4] = te[e3] : (o3.push(e3), re.hasOwnProperty(e3) || (re[e3] = []), re[e3].push(() => {
        a3[r4] = te[e3], ++i3 === o3.length && n3(a3);
      }));
    }), 0 === o3.length && n3(a3);
  }, ie = (e2) => {
    var r3 = J[e2];
    delete J[e2];
    var t2 = r3.elements, n3 = t2.length, a3 = t2.map((e3) => e3.getterReturnType).concat(t2.map((e3) => e3.setterArgumentType)), o3 = r3.rawConstructor, i3 = r3.rawDestructor;
    oe([e2], a3, function(e3) {
      return t2.forEach((r4, t3) => {
        var a4 = e3[t3], o4 = r4.getter, i4 = r4.getterContext, u2 = e3[t3 + n3], s2 = r4.setter, l2 = r4.setterContext;
        r4.read = (e4) => a4.fromWireType(o4(i4, e4)), r4.write = (e4, r5) => {
          var t4 = [];
          s2(l2, e4, u2.toWireType(t4, r5)), X(t4);
        };
      }), [{ name: r3.name, fromWireType: (e4) => {
        for (var r4 = new Array(n3), a4 = 0; a4 < n3; ++a4)
          r4[a4] = t2[a4].read(e4);
        return i3(e4), r4;
      }, toWireType: (e4, a4) => {
        if (n3 !== a4.length)
          throw new TypeError(`Incorrect number of tuple elements for ${r3.name}: expected=${n3}, actual=${a4.length}`);
        for (var u2 = o3(), s2 = 0; s2 < n3; ++s2)
          t2[s2].write(u2, a4[s2]);
        return null !== e4 && e4.push(i3, u2), u2;
      }, argPackAdvance: me, readValueFromPointer: Z, destructorFunction: i3 }];
    });
  }, ue = {}, se = (e2) => {
    var r3 = ue[e2];
    delete ue[e2];
    var t2 = r3.rawConstructor, n3 = r3.rawDestructor, a3 = r3.fields, o3 = a3.map((e3) => e3.getterReturnType).concat(a3.map((e3) => e3.setterArgumentType));
    oe([e2], o3, (e3) => {
      var o4 = {};
      return a3.forEach((r4, t3) => {
        var n4 = r4.fieldName, i3 = e3[t3], u2 = r4.getter, s2 = r4.getterContext, l2 = e3[t3 + a3.length], c2 = r4.setter, f2 = r4.setterContext;
        o4[n4] = { read: (e4) => i3.fromWireType(u2(s2, e4)), write: (e4, r5) => {
          var t4 = [];
          c2(f2, e4, l2.toWireType(t4, r5)), X(t4);
        } };
      }), [{ name: r3.name, fromWireType: (e4) => {
        var r4 = {};
        for (var t3 in o4)
          r4[t3] = o4[t3].read(e4);
        return n3(e4), r4;
      }, toWireType: (e4, r4) => {
        for (var a4 in o4)
          if (!(a4 in r4))
            throw new TypeError(`Missing field: "${a4}"`);
        var i3 = t2();
        for (a4 in o4)
          o4[a4].write(i3, r4[a4]);
        return null !== e4 && e4.push(n3, i3), i3;
      }, argPackAdvance: me, readValueFromPointer: Z, destructorFunction: n3 }];
    });
  }, le = (e2, r3, t2, n3, a3) => {
  }, ce = () => {
    for (var e2 = new Array(256), r3 = 0; r3 < 256; ++r3)
      e2[r3] = String.fromCharCode(r3);
    Q = e2;
  }, fe = (e2) => {
    for (var r3 = "", t2 = e2; p[t2]; )
      r3 += Q[p[t2++]];
    return r3;
  }, de = (e2) => {
    throw new ee(e2);
  };
  function he(e2, r3, t2 = {}) {
    var n3 = r3.name;
    if (e2 || de(`type "${n3}" must have a positive integer typeid pointer`), te.hasOwnProperty(e2)) {
      if (t2.ignoreDuplicateRegistrations)
        return;
      de(`Cannot register type '${n3}' twice`);
    }
    if (te[e2] = r3, delete ne[e2], re.hasOwnProperty(e2)) {
      var a3 = re[e2];
      delete re[e2], a3.forEach((e3) => e3());
    }
  }
  function pe(e2, r3, t2 = {}) {
    if (!("argPackAdvance" in r3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return he(e2, r3, t2);
  }
  var me = 8, ve = (e2, r3, t2, n3) => {
    pe(e2, { name: r3 = fe(r3), fromWireType: function(e3) {
      return !!e3;
    }, toWireType: function(e3, r4) {
      return r4 ? t2 : n3;
    }, argPackAdvance: me, readValueFromPointer: function(e3) {
      return this.fromWireType(p[e3]);
    }, destructorFunction: null });
  };
  function ge() {
    Object.assign(ye.prototype, { get(e2) {
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
  function ye() {
    this.allocated = [void 0], this.freelist = [];
  }
  var we = new ye(), _e = (e2) => {
    e2 >= we.reserved && 0 == --we.get(e2).refcount && we.free(e2);
  }, be = () => {
    for (var e2 = 0, r3 = we.reserved; r3 < we.allocated.length; ++r3)
      void 0 !== we.allocated[r3] && ++e2;
    return e2;
  }, Ae = () => {
    we.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), we.reserved = we.allocated.length, a2.count_emval_handles = be;
  }, Te = { toValue: (e2) => (e2 || de("Cannot use deleted val. handle = " + e2), we.get(e2).value), toHandle: (e2) => {
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
        return we.allocate({ refcount: 1, value: e2 });
    }
  } }, Ce = (e2, r3) => {
    pe(e2, { name: r3 = fe(r3), fromWireType: (e3) => {
      var r4 = Te.toValue(e3);
      return _e(e3), r4;
    }, toWireType: (e3, r4) => Te.toHandle(r4), argPackAdvance: me, readValueFromPointer: Z, destructorFunction: null });
  }, Fe = (e2, r3) => {
    switch (r3) {
      case 4:
        return function(e3) {
          return this.fromWireType(w[e3 >> 2]);
        };
      case 8:
        return function(e3) {
          return this.fromWireType(_[e3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r3}): ${e2}`);
    }
  }, We = (e2, r3, t2) => {
    pe(e2, { name: r3 = fe(r3), fromWireType: (e3) => e3, toWireType: (e3, r4) => r4, argPackAdvance: me, readValueFromPointer: Fe(r3, t2), destructorFunction: null });
  }, Ee = 48, Pe = 57, Se = (e2) => {
    if (void 0 === e2)
      return "_unknown";
    var r3 = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= Ee && r3 <= Pe ? `_${e2}` : e2;
  };
  function je(e2, r3, t2, n3, a3, o3) {
    var i3 = r3.length;
    i3 < 2 && de("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var u2 = null !== r3[1] && null !== t2, s2 = false, l2 = 1; l2 < r3.length; ++l2)
      if (null !== r3[l2] && void 0 === r3[l2].destructorFunction) {
        s2 = true;
        break;
      }
    var c2 = "void" !== r3[0].name, f2 = i3 - 2, d2 = new Array(f2), h2 = [], p2 = [];
    return function() {
      var t3;
      arguments.length !== f2 && de(`function ${e2} called with ${arguments.length} arguments, expected ${f2}`), p2.length = 0, h2.length = u2 ? 2 : 1, h2[0] = a3, u2 && (t3 = r3[1].toWireType(p2, this), h2[1] = t3);
      for (var o4 = 0; o4 < f2; ++o4)
        d2[o4] = r3[o4 + 2].toWireType(p2, arguments[o4]), h2.push(d2[o4]);
      function i4(e3) {
        if (s2)
          X(p2);
        else
          for (var n4 = u2 ? 1 : 2; n4 < r3.length; n4++) {
            var a4 = 1 === n4 ? t3 : d2[n4 - 2];
            null !== r3[n4].destructorFunction && r3[n4].destructorFunction(a4);
          }
        if (c2)
          return r3[0].fromWireType(e3);
      }
      return i4(n3.apply(null, h2));
    };
  }
  var xe, Oe = (e2, r3, t2) => {
    if (void 0 === e2[r3].overloadTable) {
      var n3 = e2[r3];
      e2[r3] = function() {
        return e2[r3].overloadTable.hasOwnProperty(arguments.length) || de(`Function '${t2}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e2[r3].overloadTable})!`), e2[r3].overloadTable[arguments.length].apply(this, arguments);
      }, e2[r3].overloadTable = [], e2[r3].overloadTable[n3.argCount] = n3;
    }
  }, De = (e2, r3, t2) => {
    a2.hasOwnProperty(e2) ? ((void 0 === t2 || void 0 !== a2[e2].overloadTable && void 0 !== a2[e2].overloadTable[t2]) && de(`Cannot register public name '${e2}' twice`), Oe(a2, e2, e2), a2.hasOwnProperty(t2) && de(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), a2[e2].overloadTable[t2] = r3) : (a2[e2] = r3, void 0 !== t2 && (a2[e2].numArguments = t2));
  }, Me = (e2, r3) => {
    for (var t2 = [], n3 = 0; n3 < e2; n3++)
      t2.push(y[r3 + 4 * n3 >> 2]);
    return t2;
  }, Re = (e2, r3, t2) => {
    a2.hasOwnProperty(e2) || ae("Replacing nonexistant public symbol"), void 0 !== a2[e2].overloadTable && void 0 !== t2 ? a2[e2].overloadTable[t2] = r3 : (a2[e2] = r3, a2[e2].argCount = t2);
  }, $e = (e2, r3, t2) => {
    var n3 = a2["dynCall_" + e2];
    return t2 && t2.length ? n3.apply(null, [r3].concat(t2)) : n3.call(null, r3);
  }, ke = [], He = (e2) => {
    var r3 = ke[e2];
    return r3 || (e2 >= ke.length && (ke.length = e2 + 1), ke[e2] = r3 = xe.get(e2)), r3;
  }, Ie = (e2, r3, t2) => e2.includes("j") ? $e(e2, r3, t2) : He(r3).apply(null, t2), Ue = (e2, r3) => {
    var t2 = [];
    return function() {
      return t2.length = 0, Object.assign(t2, arguments), Ie(e2, r3, t2);
    };
  }, Ye = (e2, r3) => {
    function t2() {
      return e2.includes("j") ? Ue(e2, r3) : He(r3);
    }
    e2 = fe(e2);
    var n3 = t2();
    return "function" != typeof n3 && de(`unknown function pointer with signature ${e2}: ${r3}`), n3;
  };
  function Ve(e2, r3) {
    return { [e2 = Se(e2)]: function() {
      return r3.apply(this, arguments);
    } }[e2];
  }
  var ze, Be = (e2, r3) => {
    var t2 = Ve(r3, function(e3) {
      this.name = r3, this.message = e3;
      var t3 = new Error(e3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Le = (e2) => {
    var r3 = lt(e2), t2 = fe(r3);
    return ut(r3), t2;
  }, Ne = (e2, r3) => {
    var t2 = [], n3 = {};
    function a3(e3) {
      n3[e3] || te[e3] || (ne[e3] ? ne[e3].forEach(a3) : (t2.push(e3), n3[e3] = true));
    }
    throw r3.forEach(a3), new ze(`${e2}: ` + t2.map(Le).join([", "]));
  }, Ge = (e2) => {
    const r3 = (e2 = e2.trim()).indexOf("(");
    return -1 !== r3 ? (A(")" == e2[e2.length - 1], "Parentheses for argument names should match."), e2.substr(0, r3)) : e2;
  }, qe = (e2, r3, t2, n3, a3, o3, i3) => {
    var u2 = Me(r3, t2);
    e2 = fe(e2), e2 = Ge(e2), a3 = Ye(n3, a3), De(e2, function() {
      Ne(`Cannot call ${e2} due to unbound types`, u2);
    }, r3 - 1), oe([], u2, function(t3) {
      var n4 = [t3[0], null].concat(t3.slice(1));
      return Re(e2, je(e2, n4, null, a3, o3), r3 - 1), [];
    });
  }, Je = (e2, r3, t2) => {
    switch (r3) {
      case 1:
        return t2 ? (e3) => h[e3 >> 0] : (e3) => p[e3 >> 0];
      case 2:
        return t2 ? (e3) => m[e3 >> 1] : (e3) => v[e3 >> 1];
      case 4:
        return t2 ? (e3) => g[e3 >> 2] : (e3) => y[e3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${r3}): ${e2}`);
    }
  }, Xe = (e2, r3, t2, n3, a3) => {
    r3 = fe(r3);
    var o3 = (e3) => e3;
    if (0 === n3) {
      var i3 = 32 - 8 * t2;
      o3 = (e3) => e3 << i3 >>> i3;
    }
    var u2 = r3.includes("unsigned"), s2 = (e3, r4) => {
    };
    pe(e2, { name: r3, fromWireType: o3, toWireType: u2 ? function(e3, r4) {
      return s2(r4, this.name), r4 >>> 0;
    } : function(e3, r4) {
      return s2(r4, this.name), r4;
    }, argPackAdvance: me, readValueFromPointer: Je(r3, t2, 0 !== n3), destructorFunction: null });
  }, Ze = (e2, r3, t2) => {
    var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function a3(e3) {
      var r4 = y[e3 >> 2], t3 = y[e3 + 4 >> 2];
      return new n3(h.buffer, t3, r4);
    }
    pe(e2, { name: t2 = fe(t2), fromWireType: a3, argPackAdvance: me, readValueFromPointer: a3 }, { ignoreDuplicateRegistrations: true });
  };
  function Ke(e2) {
    return this.fromWireType(y[e2 >> 2]);
  }
  var Qe = (e2, r3, t2, n3) => {
    if (!(n3 > 0))
      return 0;
    for (var a3 = t2, o3 = t2 + n3 - 1, i3 = 0; i3 < e2.length; ++i3) {
      var u2 = e2.charCodeAt(i3);
      if (u2 >= 55296 && u2 <= 57343 && (u2 = 65536 + ((1023 & u2) << 10) | 1023 & e2.charCodeAt(++i3)), u2 <= 127) {
        if (t2 >= o3)
          break;
        r3[t2++] = u2;
      } else if (u2 <= 2047) {
        if (t2 + 1 >= o3)
          break;
        r3[t2++] = 192 | u2 >> 6, r3[t2++] = 128 | 63 & u2;
      } else if (u2 <= 65535) {
        if (t2 + 2 >= o3)
          break;
        r3[t2++] = 224 | u2 >> 12, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      } else {
        if (t2 + 3 >= o3)
          break;
        r3[t2++] = 240 | u2 >> 18, r3[t2++] = 128 | u2 >> 12 & 63, r3[t2++] = 128 | u2 >> 6 & 63, r3[t2++] = 128 | 63 & u2;
      }
    }
    return r3[t2] = 0, t2 - a3;
  }, er = (e2, r3, t2) => Qe(e2, p, r3, t2), rr = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 <= 127 ? r3++ : n3 <= 2047 ? r3 += 2 : n3 >= 55296 && n3 <= 57343 ? (r3 += 4, ++t2) : r3 += 3;
    }
    return r3;
  }, tr = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, nr = (e2, r3, t2) => {
    for (var n3 = r3 + t2, a3 = r3; e2[a3] && !(a3 >= n3); )
      ++a3;
    if (a3 - r3 > 16 && e2.buffer && tr)
      return tr.decode(e2.subarray(r3, a3));
    for (var o3 = ""; r3 < a3; ) {
      var i3 = e2[r3++];
      if (128 & i3) {
        var u2 = 63 & e2[r3++];
        if (192 != (224 & i3)) {
          var s2 = 63 & e2[r3++];
          if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | u2 << 6 | s2 : (7 & i3) << 18 | u2 << 12 | s2 << 6 | 63 & e2[r3++]) < 65536)
            o3 += String.fromCharCode(i3);
          else {
            var l2 = i3 - 65536;
            o3 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else
          o3 += String.fromCharCode((31 & i3) << 6 | u2);
      } else
        o3 += String.fromCharCode(i3);
    }
    return o3;
  }, ar = (e2, r3) => e2 ? nr(p, e2, r3) : "", or = (e2, r3) => {
    var t2 = "std::string" === (r3 = fe(r3));
    pe(e2, { name: r3, fromWireType(e3) {
      var r4, n3 = y[e3 >> 2], a3 = e3 + 4;
      if (t2)
        for (var o3 = a3, i3 = 0; i3 <= n3; ++i3) {
          var u2 = a3 + i3;
          if (i3 == n3 || 0 == p[u2]) {
            var s2 = ar(o3, u2 - o3);
            void 0 === r4 ? r4 = s2 : (r4 += String.fromCharCode(0), r4 += s2), o3 = u2 + 1;
          }
        }
      else {
        var l2 = new Array(n3);
        for (i3 = 0; i3 < n3; ++i3)
          l2[i3] = String.fromCharCode(p[a3 + i3]);
        r4 = l2.join("");
      }
      return ut(e3), r4;
    }, toWireType(e3, r4) {
      var n3;
      r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
      var a3 = "string" == typeof r4;
      a3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || de("Cannot pass non-string to std::string"), n3 = t2 && a3 ? rr(r4) : r4.length;
      var o3 = st(4 + n3 + 1), i3 = o3 + 4;
      if (y[o3 >> 2] = n3, t2 && a3)
        er(r4, i3, n3 + 1);
      else if (a3)
        for (var u2 = 0; u2 < n3; ++u2) {
          var s2 = r4.charCodeAt(u2);
          s2 > 255 && (ut(i3), de("String has UTF-16 code units that do not fit in 8 bits")), p[i3 + u2] = s2;
        }
      else
        for (u2 = 0; u2 < n3; ++u2)
          p[i3 + u2] = r4[u2];
      return null !== e3 && e3.push(ut, o3), o3;
    }, argPackAdvance: me, readValueFromPointer: Ke, destructorFunction(e3) {
      ut(e3);
    } });
  }, ir = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ur = (e2, r3) => {
    for (var t2 = e2, n3 = t2 >> 1, a3 = n3 + r3 / 2; !(n3 >= a3) && v[n3]; )
      ++n3;
    if ((t2 = n3 << 1) - e2 > 32 && ir)
      return ir.decode(p.subarray(e2, t2));
    for (var o3 = "", i3 = 0; !(i3 >= r3 / 2); ++i3) {
      var u2 = m[e2 + 2 * i3 >> 1];
      if (0 == u2)
        break;
      o3 += String.fromCharCode(u2);
    }
    return o3;
  }, sr = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 2)
      return 0;
    for (var n3 = r3, a3 = (t2 -= 2) < 2 * e2.length ? t2 / 2 : e2.length, o3 = 0; o3 < a3; ++o3) {
      var i3 = e2.charCodeAt(o3);
      m[r3 >> 1] = i3, r3 += 2;
    }
    return m[r3 >> 1] = 0, r3 - n3;
  }, lr = (e2) => 2 * e2.length, cr = (e2, r3) => {
    for (var t2 = 0, n3 = ""; !(t2 >= r3 / 4); ) {
      var a3 = g[e2 + 4 * t2 >> 2];
      if (0 == a3)
        break;
      if (++t2, a3 >= 65536) {
        var o3 = a3 - 65536;
        n3 += String.fromCharCode(55296 | o3 >> 10, 56320 | 1023 & o3);
      } else
        n3 += String.fromCharCode(a3);
    }
    return n3;
  }, fr = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 4)
      return 0;
    for (var n3 = r3, a3 = n3 + t2 - 4, o3 = 0; o3 < e2.length; ++o3) {
      var i3 = e2.charCodeAt(o3);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & e2.charCodeAt(++o3)), g[r3 >> 2] = i3, (r3 += 4) + 4 > a3)
        break;
    }
    return g[r3 >> 2] = 0, r3 - n3;
  }, dr = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 >= 55296 && n3 <= 57343 && ++t2, r3 += 4;
    }
    return r3;
  }, hr = (e2, r3, t2) => {
    var n3, a3, o3, i3, u2;
    t2 = fe(t2), 2 === r3 ? (n3 = ur, a3 = sr, i3 = lr, o3 = () => v, u2 = 1) : 4 === r3 && (n3 = cr, a3 = fr, i3 = dr, o3 = () => y, u2 = 2), pe(e2, { name: t2, fromWireType: (e3) => {
      for (var t3, a4 = y[e3 >> 2], i4 = o3(), s2 = e3 + 4, l2 = 0; l2 <= a4; ++l2) {
        var c2 = e3 + 4 + l2 * r3;
        if (l2 == a4 || 0 == i4[c2 >> u2]) {
          var f2 = n3(s2, c2 - s2);
          void 0 === t3 ? t3 = f2 : (t3 += String.fromCharCode(0), t3 += f2), s2 = c2 + r3;
        }
      }
      return ut(e3), t3;
    }, toWireType: (e3, n4) => {
      "string" != typeof n4 && de(`Cannot pass non-string to C++ string type ${t2}`);
      var o4 = i3(n4), s2 = st(4 + o4 + r3);
      return y[s2 >> 2] = o4 >> u2, a3(n4, s2 + 4, o4 + r3), null !== e3 && e3.push(ut, s2), s2;
    }, argPackAdvance: me, readValueFromPointer: Z, destructorFunction(e3) {
      ut(e3);
    } });
  }, pr = (e2, r3, t2, n3, a3, o3) => {
    J[e2] = { name: fe(r3), rawConstructor: Ye(t2, n3), rawDestructor: Ye(a3, o3), elements: [] };
  }, mr = (e2, r3, t2, n3, a3, o3, i3, u2, s2) => {
    J[e2].elements.push({ getterReturnType: r3, getter: Ye(t2, n3), getterContext: a3, setterArgumentType: o3, setter: Ye(i3, u2), setterContext: s2 });
  }, vr = (e2, r3, t2, n3, a3, o3) => {
    ue[e2] = { name: fe(r3), rawConstructor: Ye(t2, n3), rawDestructor: Ye(a3, o3), fields: [] };
  }, gr = (e2, r3, t2, n3, a3, o3, i3, u2, s2, l2) => {
    ue[e2].fields.push({ fieldName: fe(r3), getterReturnType: t2, getter: Ye(n3, a3), getterContext: o3, setterArgumentType: i3, setter: Ye(u2, s2), setterContext: l2 });
  }, yr = (e2, r3) => {
    pe(e2, { isVoid: true, name: r3 = fe(r3), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (e3, r4) => {
    } });
  }, wr = (e2) => {
    e2 > 4 && (we.get(e2).refcount += 1);
  }, _r = () => Te.toHandle([]), br = {}, Ar = (e2) => {
    var r3 = br[e2];
    return void 0 === r3 ? fe(e2) : r3;
  }, Tr = (e2) => Te.toHandle(Ar(e2)), Cr = () => Te.toHandle({}), Fr = (e2, r3, t2) => {
    e2 = Te.toValue(e2), r3 = Te.toValue(r3), t2 = Te.toValue(t2), e2[r3] = t2;
  }, Wr = (e2, r3) => {
    var t2 = te[e2];
    return void 0 === t2 && de(r3 + " has unknown type " + Le(e2)), t2;
  }, Er = (e2, r3) => {
    var t2 = (e2 = Wr(e2, "_emval_take_value")).readValueFromPointer(r3);
    return Te.toHandle(t2);
  }, Pr = () => {
    k("");
  }, Sr = (e2, r3, t2) => p.copyWithin(e2, r3, r3 + t2), jr = () => 2147483648, xr = (e2) => {
    var r3 = (e2 - f.buffer.byteLength + 65535) / 65536;
    try {
      return f.grow(r3), T(), 1;
    } catch (t2) {
    }
  }, Or = (e2) => {
    var r3 = p.length;
    e2 >>>= 0;
    var t2 = jr();
    if (e2 > t2)
      return false;
    for (var n3 = (e3, r4) => e3 + (r4 - e3 % r4) % r4, a3 = 1; a3 <= 4; a3 *= 2) {
      var o3 = r3 * (1 + 0.2 / a3);
      o3 = Math.min(o3, e2 + 100663296);
      var i3 = Math.min(t2, n3(Math.max(e2, o3), 65536));
      if (xr(i3))
        return true;
    }
    return false;
  }, Dr = {}, Mr = () => i2 || "./this.program", Rr = () => {
    if (!Rr.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Mr() };
      for (var r3 in Dr)
        void 0 === Dr[r3] ? delete e2[r3] : e2[r3] = Dr[r3];
      var t2 = [];
      for (var r3 in e2)
        t2.push(`${r3}=${e2[r3]}`);
      Rr.strings = t2;
    }
    return Rr.strings;
  }, $r = (e2, r3) => {
    for (var t2 = 0; t2 < e2.length; ++t2)
      h[r3++ >> 0] = e2.charCodeAt(t2);
    h[r3 >> 0] = 0;
  }, kr = (e2, r3) => {
    var t2 = 0;
    return Rr().forEach((n3, a3) => {
      var o3 = r3 + t2;
      y[e2 + 4 * a3 >> 2] = o3, $r(n3, o3), t2 += n3.length + 1;
    }), 0;
  }, Hr = (e2, r3) => {
    var t2 = Rr();
    y[e2 >> 2] = t2.length;
    var n3 = 0;
    return t2.forEach((e3) => n3 += e3.length + 1), y[r3 >> 2] = n3, 0;
  }, Ir = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), Ur = (e2, r3) => {
    for (var t2 = 0, n3 = 0; n3 <= r3; t2 += e2[n3++])
      ;
    return t2;
  }, Yr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Vr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zr = (e2, r3) => {
    for (var t2 = new Date(e2.getTime()); r3 > 0; ) {
      var n3 = Ir(t2.getFullYear()), a3 = t2.getMonth(), o3 = (n3 ? Yr : Vr)[a3];
      if (!(r3 > o3 - t2.getDate()))
        return t2.setDate(t2.getDate() + r3), t2;
      r3 -= o3 - t2.getDate() + 1, t2.setDate(1), a3 < 11 ? t2.setMonth(a3 + 1) : (t2.setMonth(0), t2.setFullYear(t2.getFullYear() + 1));
    }
    return t2;
  };
  function Br(e2, r3, t2) {
    var n3 = t2 > 0 ? t2 : rr(e2) + 1, a3 = new Array(n3), o3 = Qe(e2, a3, 0, a3.length);
    return r3 && (a3.length = o3), a3;
  }
  var Lr, Nr = (e2, r3) => {
    h.set(e2, r3);
  }, Gr = (e2, r3, t2, n3) => {
    var a3 = y[n3 + 40 >> 2], o3 = { tm_sec: g[n3 >> 2], tm_min: g[n3 + 4 >> 2], tm_hour: g[n3 + 8 >> 2], tm_mday: g[n3 + 12 >> 2], tm_mon: g[n3 + 16 >> 2], tm_year: g[n3 + 20 >> 2], tm_wday: g[n3 + 24 >> 2], tm_yday: g[n3 + 28 >> 2], tm_isdst: g[n3 + 32 >> 2], tm_gmtoff: g[n3 + 36 >> 2], tm_zone: a3 ? ar(a3) : "" }, i3 = ar(t2), u2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var s2 in u2)
      i3 = i3.replace(new RegExp(s2, "g"), u2[s2]);
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
    function m2(e3) {
      var r4 = zr(new Date(e3.tm_year + 1900, 0, 1), e3.tm_yday), t3 = new Date(r4.getFullYear(), 0, 4), n4 = new Date(r4.getFullYear() + 1, 0, 4), a4 = p2(t3), o4 = p2(n4);
      return h2(a4, r4) <= 0 ? h2(o4, r4) <= 0 ? r4.getFullYear() + 1 : r4.getFullYear() : r4.getFullYear() - 1;
    }
    var v2 = { "%a": (e3) => l2[e3.tm_wday].substring(0, 3), "%A": (e3) => l2[e3.tm_wday], "%b": (e3) => c2[e3.tm_mon].substring(0, 3), "%B": (e3) => c2[e3.tm_mon], "%C": (e3) => d2((e3.tm_year + 1900) / 100 | 0, 2), "%d": (e3) => d2(e3.tm_mday, 2), "%e": (e3) => f2(e3.tm_mday, 2, " "), "%g": (e3) => m2(e3).toString().substring(2), "%G": (e3) => m2(e3), "%H": (e3) => d2(e3.tm_hour, 2), "%I": (e3) => {
      var r4 = e3.tm_hour;
      return 0 == r4 ? r4 = 12 : r4 > 12 && (r4 -= 12), d2(r4, 2);
    }, "%j": (e3) => d2(e3.tm_mday + Ur(Ir(e3.tm_year + 1900) ? Yr : Vr, e3.tm_mon - 1), 3), "%m": (e3) => d2(e3.tm_mon + 1, 2), "%M": (e3) => d2(e3.tm_min, 2), "%n": () => "\n", "%p": (e3) => e3.tm_hour >= 0 && e3.tm_hour < 12 ? "AM" : "PM", "%S": (e3) => d2(e3.tm_sec, 2), "%t": () => "	", "%u": (e3) => e3.tm_wday || 7, "%U": (e3) => {
      var r4 = e3.tm_yday + 7 - e3.tm_wday;
      return d2(Math.floor(r4 / 7), 2);
    }, "%V": (e3) => {
      var r4 = Math.floor((e3.tm_yday + 7 - (e3.tm_wday + 6) % 7) / 7);
      if ((e3.tm_wday + 371 - e3.tm_yday - 2) % 7 <= 2 && r4++, r4) {
        if (53 == r4) {
          var t3 = (e3.tm_wday + 371 - e3.tm_yday) % 7;
          4 == t3 || 3 == t3 && Ir(e3.tm_year) || (r4 = 1);
        }
      } else {
        r4 = 52;
        var n4 = (e3.tm_wday + 7 - e3.tm_yday - 1) % 7;
        (4 == n4 || 5 == n4 && Ir(e3.tm_year % 400 - 1)) && r4++;
      }
      return d2(r4, 2);
    }, "%w": (e3) => e3.tm_wday, "%W": (e3) => {
      var r4 = e3.tm_yday + 7 - (e3.tm_wday + 6) % 7;
      return d2(Math.floor(r4 / 7), 2);
    }, "%y": (e3) => (e3.tm_year + 1900).toString().substring(2), "%Y": (e3) => e3.tm_year + 1900, "%z": (e3) => {
      var r4 = e3.tm_gmtoff, t3 = r4 >= 0;
      return r4 = (r4 = Math.abs(r4) / 60) / 60 * 100 + r4 % 60, (t3 ? "+" : "-") + String("0000" + r4).slice(-4);
    }, "%Z": (e3) => e3.tm_zone, "%%": () => "%" };
    for (var s2 in i3 = i3.replace(/%%/g, "\0\0"), v2)
      i3.includes(s2) && (i3 = i3.replace(new RegExp(s2, "g"), v2[s2](o3)));
    var w2 = Br(i3 = i3.replace(/\0\0/g, "%"), false);
    return w2.length > r3 ? 0 : (Nr(w2, e2), w2.length - 1);
  }, qr = (e2, r3, t2, n3, a3) => Gr(e2, r3, t2, n3), Jr = (e2, r3) => {
    e2 < 128 ? r3.push(e2) : r3.push(e2 % 128 | 128, e2 >> 7);
  }, Xr = (e2) => {
    for (var r3 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t2 = { parameters: [], results: "v" == e2[0] ? [] : [r3[e2[0]]] }, n3 = 1; n3 < e2.length; ++n3)
      t2.parameters.push(r3[e2[n3]]);
    return t2;
  }, Zr = (e2, r3) => {
    var t2 = e2.slice(0, 1), n3 = e2.slice(1), a3 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
    r3.push(96), Jr(n3.length, r3);
    for (var o3 = 0; o3 < n3.length; ++o3)
      r3.push(a3[n3[o3]]);
    "v" == t2 ? r3.push(0) : r3.push(1, a3[t2]);
  }, Kr = (e2, r3) => {
    if ("function" == typeof WebAssembly.Function)
      return new WebAssembly.Function(Xr(r3), e2);
    var t2 = [1];
    Zr(r3, t2);
    var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
    Jr(t2.length, n3), n3.push.apply(n3, t2), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
    var a3 = new WebAssembly.Module(new Uint8Array(n3));
    return new WebAssembly.Instance(a3, { e: { f: e2 } }).exports.f;
  }, Qr = (e2, r3) => {
    if (Lr)
      for (var t2 = e2; t2 < e2 + r3; t2++) {
        var n3 = He(t2);
        n3 && Lr.set(n3, t2);
      }
  }, et = (e2) => (Lr || (Lr = /* @__PURE__ */ new WeakMap(), Qr(0, xe.length)), Lr.get(e2) || 0), rt = [], tt = () => {
    if (rt.length)
      return rt.pop();
    try {
      xe.grow(1);
    } catch (d2) {
      if (!(d2 instanceof RangeError))
        throw d2;
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    return xe.length - 1;
  }, nt = (e2, r3) => {
    xe.set(e2, r3), ke[e2] = xe.get(e2);
  }, at = (e2, r3) => {
    var t2 = et(e2);
    if (t2)
      return t2;
    var n3 = tt();
    try {
      nt(n3, e2);
    } catch (d2) {
      if (!(d2 instanceof TypeError))
        throw d2;
      var a3 = Kr(e2, r3);
      nt(n3, a3);
    }
    return Lr.set(e2, n3), n3;
  };
  K = a2.InternalError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "InternalError";
    }
  }, ce(), ee = a2.BindingError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "BindingError";
    }
  }, ge(), Ae(), ze = a2.UnboundTypeError = Be(Error, "UnboundTypeError");
  var ot = { m: q, k: ie, s: se, u: le, B: ve, A: Ce, r: We, c: qe, f: Xe, b: Ze, q: or, o: hr, l: pr, d: mr, t: vr, i: gr, C: yr, a: _e, n: wr, D: _r, h: Tr, j: Cr, e: Fr, g: Er, p: Pr, z: Sr, y: Or, w: kr, x: Hr, v: qr }, it = L(), ut = a2._free = (e2) => (ut = a2._free = it.H)(e2), st = a2._malloc = (e2) => (st = a2._malloc = it.I)(e2), lt = (e2) => (lt = it.J)(e2);
  a2.__embind_initialize_bindings = () => (a2.__embind_initialize_bindings = it.K)();
  var ct, ft = (e2) => (ft = it.L)(e2);
  function dt() {
    function e2() {
      ct || (ct = true, a2.calledRun = true, b || (P(), r2(a2), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), S()));
    }
    D > 0 || (E(), D > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a2.setStatus("");
      }, 1), e2();
    }, 1)) : e2()));
  }
  if (a2.dynCall_viji = (e2, r3, t2, n3, o3) => (a2.dynCall_viji = it.M)(e2, r3, t2, n3, o3), a2.dynCall_ji = (e2, r3) => (a2.dynCall_ji = it.N)(e2, r3), a2.dynCall_viijii = (e2, r3, t2, n3, o3, i3, u2) => (a2.dynCall_viijii = it.O)(e2, r3, t2, n3, o3, i3, u2), a2.dynCall_iiiiij = (e2, r3, t2, n3, o3, i3, u2) => (a2.dynCall_iiiiij = it.P)(e2, r3, t2, n3, o3, i3, u2), a2.dynCall_iiiiijj = (e2, r3, t2, n3, o3, i3, u2, s2, l2) => (a2.dynCall_iiiiijj = it.Q)(e2, r3, t2, n3, o3, i3, u2, s2, l2), a2.dynCall_iiiiiijj = (e2, r3, t2, n3, o3, i3, u2, s2, l2, c2) => (a2.dynCall_iiiiiijj = it.R)(e2, r3, t2, n3, o3, i3, u2, s2, l2, c2), a2.addFunction = at, a2.UTF8ToString = ar, M = function e2() {
    ct || dt(), ct || (M = e2);
  }, a2.preInit)
    for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
      a2.preInit.pop()();
  return dt(), e.ready;
}, r.exports = n;
const o = o$1(a.exports), i = Object.freeze(Object.defineProperty({ __proto__: null, default: o }, Symbol.toStringTag, { value: "Module" }));
export {
  i as l
};
