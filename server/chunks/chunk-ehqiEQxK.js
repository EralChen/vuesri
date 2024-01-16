import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e(r, e2) {
  for (var f2 = 0; f2 < e2.length; f2++) {
    const i2 = e2[f2];
    if ("string" != typeof i2 && !Array.isArray(i2)) {
      for (const e3 in i2)
        if ("default" !== e3 && !(e3 in r)) {
          const f3 = Object.getOwnPropertyDescriptor(i2, e3);
          f3 && Object.defineProperty(r, e3, f3.get ? f3 : { enumerable: true, get: () => i2[e3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f, i, a, n = { exports: {} };
n.exports, f = n, i = function() {
  function r(r2) {
    const e2 = r2.locateFile, i2 = {};
    var a2 = void 0 !== a2 ? a2 : {};
    const n2 = (() => {
      let r3;
      return { resolve: (e3) => r3(e3), promise: new Promise((e3) => r3 = e3) };
    })(), t2 = () => n2.promise;
    a2.locateFile = e2, a2.onRuntimeInitialized = () => {
      n2.resolve(i2);
    }, i2.Module = a2, i2.whenLoaded = t2;
    var o2, b = {};
    for (o2 in a2)
      a2.hasOwnProperty(o2) && (b[o2] = a2[o2]);
    var k, u, c, s, A, l = "object" == typeof window, v = "function" == typeof importScripts, d = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, h = "";
    function p(r3) {
      return a2.locateFile ? a2.locateFile(r3, h) : h + r3;
    }
    d ? (h = v ? require("path").dirname(h) + "/" : __dirname + "/", k = function(r3, e3) {
      var f2 = dr(r3);
      return f2 ? e3 ? f2 : f2.toString() : (s || (s = require("fs")), A || (A = require("path")), r3 = A.normalize(r3), s.readFileSync(r3, e3 ? null : "utf8"));
    }, c = function(r3) {
      var e3 = k(r3, true);
      return e3.buffer || (e3 = new Uint8Array(e3)), _(e3.buffer), e3;
    }, u = function(r3, e3, f2) {
      var i3 = dr(r3);
      i3 && e3(i3), s || (s = require("fs")), A || (A = require("path")), r3 = A.normalize(r3), s.readFile(r3, function(r4, i4) {
        r4 ? f2(r4) : e3(i4.buffer);
      });
    }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), f.exports = a2, process.on("uncaughtException", function(r3) {
      if (!(r3 instanceof _r))
        throw r3;
    }), process.on("unhandledRejection", X), a2.inspect = function() {
      return "[Emscripten Module object]";
    }) : (l || v) && (v ? h = self.location.href : "undefined" != typeof document && document.currentScript && (h = document.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", k = function(r3) {
      try {
        var e3 = new XMLHttpRequest();
        return e3.open("GET", r3, false), e3.send(null), e3.responseText;
      } catch (w2) {
        var f2 = dr(r3);
        if (f2)
          return Ar(f2);
        throw w2;
      }
    }, v && (c = function(r3) {
      try {
        var e3 = new XMLHttpRequest();
        return e3.open("GET", r3, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
      } catch (w2) {
        var f2 = dr(r3);
        if (f2)
          return f2;
        throw w2;
      }
    }), u = function(r3, e3, f2) {
      var i3 = new XMLHttpRequest();
      i3.open("GET", r3, true), i3.responseType = "arraybuffer", i3.onload = function() {
        if (200 == i3.status || 0 == i3.status && i3.response)
          e3(i3.response);
        else {
          var a3 = dr(r3);
          a3 ? e3(a3.buffer) : f2();
        }
      }, i3.onerror = f2, i3.send(null);
    });
    var m = a2.print || console.log.bind(console), w = a2.printErr || console.warn.bind(console);
    for (o2 in b)
      b.hasOwnProperty(o2) && (a2[o2] = b[o2]);
    b = null, a2.arguments && a2.arguments, a2.thisProgram && a2.thisProgram, a2.quit && a2.quit;
    var y, g = 0, E = function(r3) {
      g = r3;
    }, C = function() {
      return g;
    };
    a2.wasmBinary && (y = a2.wasmBinary), a2.noExitRuntime;
    var R, M = { Memory: function(r3) {
      this.buffer = new ArrayBuffer(65536 * r3.initial);
    }, Module: function(r3) {
    }, Instance: function(r3, e3) {
      this.exports = function(r4) {
        function e4(r5) {
          return r5.set = function(r6, e5) {
            this[r6] = e5;
          }, r5.get = function(r6) {
            return this[r6];
          }, r5;
        }
        for (var f2, i3 = new Uint8Array(123), a3 = 25; a3 >= 0; --a3)
          i3[48 + a3] = 52 + a3, i3[65 + a3] = a3, i3[97 + a3] = 26 + a3;
        function n3(r5, e5, f3) {
          for (var a4, n4, t4 = 0, o4 = e5, b3 = f3.length, k3 = e5 + (3 * b3 >> 2) - ("=" == f3[b3 - 2]) - ("=" == f3[b3 - 1]); t4 < b3; t4 += 4)
            a4 = i3[f3.charCodeAt(t4 + 1)], n4 = i3[f3.charCodeAt(t4 + 2)], r5[o4++] = i3[f3.charCodeAt(t4)] << 2 | a4 >> 4, o4 < k3 && (r5[o4++] = a4 << 4 | n4 >> 2), o4 < k3 && (r5[o4++] = n4 << 6 | i3[f3.charCodeAt(t4 + 3)]);
        }
        function t3(r5) {
          n3(f2, 1024, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"), n3(f2, 1132, "BwAAAAAAAD8AAAA/AAAAAAAAAAB4Bg=="), n3(f2, 1168, "EQAKABEREQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAARAA8KERERAwoHAAEACQsLAAAJBgsAAAsABhEAAAARERE="), n3(f2, 1249, "CwAAAAAAAAAAEQAKChEREQAKAAACAAkLAAAACQALAAAL"), n3(f2, 1307, "DA=="), n3(f2, 1319, "DAAAAAAMAAAAAAkMAAAAAAAMAAAM"), n3(f2, 1365, "Dg=="), n3(f2, 1377, "DQAAAAQNAAAAAAkOAAAAAAAOAAAO"), n3(f2, 1423, "EA=="), n3(f2, 1435, "DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"), n3(f2, 1490, "EgAAABISEgAAAAAAAAk="), n3(f2, 1539, "Cw=="), n3(f2, 1551, "CgAAAAAKAAAAAAkLAAAAAAALAAAL"), n3(f2, 1597, "DA=="), n3(f2, 1609, "DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVG"), n3(f2, 1648, "4I8AAAAAAAAF"), n3(f2, 1668, "KA=="), n3(f2, 1692, "KQAAACoAAACYCwAAAAQ="), n3(f2, 1716, "AQ=="), n3(f2, 1731, "Cv////8="), n3(f2, 1972, "wA8=");
        }
        i3[43] = 62, i3[47] = 63;
        var o3 = new ArrayBuffer(16), b2 = new Int32Array(o3), k2 = new Float64Array(o3);
        function u2(r5) {
          return b2[r5];
        }
        function c2(r5, e5) {
          b2[r5] = e5;
        }
        function s2() {
          return k2[0];
        }
        function A2(r5) {
          k2[0] = r5;
        }
        function l2(r5) {
          var i4 = r5.a, a4 = i4.buffer;
          i4.grow = ue;
          var n4 = new Int8Array(a4), o4 = new Int16Array(a4), b3 = new Int32Array(a4), k3 = new Uint8Array(a4), l3 = new Uint16Array(a4), v2 = new Uint32Array(a4), d2 = new Float32Array(a4), h2 = new Float64Array(a4), p2 = Math.imul, m2 = Math.fround, w2 = Math.abs, y2 = Math.clz32, g2 = Math.max, E2 = r5.abort, C2 = r5.b, R2 = r5.c, M2 = r5.d, I2 = r5.e, _2 = r5.f, S2 = r5.g, P2 = r5.h, x2 = r5.i, L2 = r5.j, j2 = r5.k, B2 = r5.l, T2 = r5.m, U2 = 36832, F2 = 0;
          function O2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, d3 = 0, h3 = 0;
            U2 = l4 = U2 - 16 | 0;
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                u: {
                                  c: {
                                    if ((r6 |= 0) >>> 0 <= 244) {
                                      if (3 & (e5 = (n5 = b3[614]) >>> (f3 = (u3 = r6 >>> 0 < 11 ? 16 : r6 + 11 & -8) >>> 3 | 0) | 0)) {
                                        r6 = (a5 = b3[2504 + (e5 = (i5 = f3 + (1 & (-1 ^ e5)) | 0) << 3) >> 2]) + 8 | 0, (0 | (f3 = b3[a5 + 8 >> 2])) != (0 | (e5 = e5 + 2496 | 0)) ? (b3[f3 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = f3) : (d3 = 2456, h3 = Jr(i5) & n5, b3[d3 >> 2] = h3), e5 = i5 << 3, b3[a5 + 4 >> 2] = 3 | e5, b3[4 + (e5 = e5 + a5 | 0) >> 2] = 1 | b3[e5 + 4 >> 2];
                                        break r;
                                      }
                                      if ((s3 = b3[616]) >>> 0 >= u3 >>> 0)
                                        break c;
                                      if (e5) {
                                        f3 = r6 = (e5 = (0 - (r6 = (0 - (r6 = 2 << f3) | r6) & e5 << f3) & r6) - 1 | 0) >>> 12 & 16, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 5 & 8, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 2 & 4, t4 = b3[2504 + (r6 = (f3 = ((f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 2) | (r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 1)) + (e5 >>> r6 | 0) | 0) << 3) >> 2], (0 | (e5 = b3[t4 + 8 >> 2])) != (0 | (r6 = r6 + 2496 | 0)) ? (b3[e5 + 12 >> 2] = r6, b3[r6 + 8 >> 2] = e5) : (n5 = Jr(f3) & n5, b3[614] = n5), r6 = t4 + 8 | 0, b3[t4 + 4 >> 2] = 3 | u3, a5 = (e5 = f3 << 3) - u3 | 0, b3[4 + (i5 = t4 + u3 | 0) >> 2] = 1 | a5, b3[e5 + t4 >> 2] = a5, s3 && (f3 = 2496 + ((e5 = s3 >>> 3 | 0) << 3) | 0, t4 = b3[619], (e5 = 1 << e5) & n5 ? e5 = b3[f3 + 8 >> 2] : (b3[614] = e5 | n5, e5 = f3), b3[f3 + 8 >> 2] = t4, b3[e5 + 12 >> 2] = t4, b3[t4 + 12 >> 2] = f3, b3[t4 + 8 >> 2] = e5), b3[619] = i5, b3[616] = a5;
                                        break r;
                                      }
                                      if (!(o5 = b3[615]))
                                        break c;
                                      for (f3 = r6 = (e5 = (o5 & 0 - o5) - 1 | 0) >>> 12 & 16, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 5 & 8, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 2 & 4, e5 = b3[2760 + (((f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 2) | (r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 1)) + (e5 >>> r6 | 0) << 2) >> 2], i5 = (-8 & b3[e5 + 4 >> 2]) - u3 | 0, f3 = e5; (r6 = b3[f3 + 16 >> 2]) || (r6 = b3[f3 + 20 >> 2]); )
                                        i5 = (a5 = (f3 = (-8 & b3[r6 + 4 >> 2]) - u3 | 0) >>> 0 < i5 >>> 0) ? f3 : i5, e5 = a5 ? r6 : e5, f3 = r6;
                                      if ((c3 = e5 + u3 | 0) >>> 0 <= e5 >>> 0)
                                        break u;
                                      if (A3 = b3[e5 + 24 >> 2], (0 | (a5 = b3[e5 + 12 >> 2])) != (0 | e5)) {
                                        r6 = b3[e5 + 8 >> 2], b3[r6 + 12 >> 2] = a5, b3[a5 + 8 >> 2] = r6;
                                        break e;
                                      }
                                      if (!(r6 = b3[(f3 = e5 + 20 | 0) >> 2])) {
                                        if (!(r6 = b3[e5 + 16 >> 2]))
                                          break k;
                                        f3 = e5 + 16 | 0;
                                      }
                                      for (; t4 = f3, a5 = r6, (r6 = b3[(f3 = r6 + 20 | 0) >> 2]) || (f3 = a5 + 16 | 0, r6 = b3[a5 + 16 >> 2]); )
                                        ;
                                      b3[t4 >> 2] = 0;
                                      break e;
                                    }
                                    if (u3 = -1, !(r6 >>> 0 > 4294967231) && (u3 = -8 & (r6 = r6 + 11 | 0), c3 = b3[615])) {
                                      i5 = 0 - u3 | 0, n5 = 0, u3 >>> 0 < 256 || (n5 = 31, u3 >>> 0 > 16777215 || (r6 = r6 >>> 8 | 0, r6 <<= t4 = r6 + 1048320 >>> 16 & 8, n5 = 28 + ((r6 = ((r6 <<= f3 = r6 + 520192 >>> 16 & 4) << (e5 = r6 + 245760 >>> 16 & 2) >>> 15 | 0) - (e5 | f3 | t4) | 0) << 1 | u3 >>> r6 + 21 & 1) | 0));
                                      s: {
                                        A: {
                                          if (f3 = b3[2760 + (n5 << 2) >> 2])
                                            for (r6 = 0, e5 = u3 << (31 == (0 | n5) ? 0 : 25 - (n5 >>> 1 | 0) | 0); ; ) {
                                              if (!((t4 = (-8 & b3[f3 + 4 >> 2]) - u3 | 0) >>> 0 >= i5 >>> 0 || (a5 = f3, i5 = t4))) {
                                                i5 = 0, r6 = f3;
                                                break A;
                                              }
                                              if (t4 = b3[f3 + 20 >> 2], f3 = b3[16 + ((e5 >>> 29 & 4) + f3 | 0) >> 2], r6 = t4 ? (0 | t4) == (0 | f3) ? r6 : t4 : r6, e5 <<= 1, !f3)
                                                break;
                                            }
                                          else
                                            r6 = 0;
                                          if (!(r6 | a5)) {
                                            if (a5 = 0, !(r6 = (0 - (r6 = 2 << n5) | r6) & c3))
                                              break c;
                                            f3 = r6 = (e5 = (r6 & 0 - r6) - 1 | 0) >>> 12 & 16, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 5 & 8, f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 2 & 4, r6 = b3[2760 + (((f3 |= r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 2) | (r6 = (e5 = e5 >>> r6 | 0) >>> 1 & 1)) + (e5 >>> r6 | 0) << 2) >> 2];
                                          }
                                          if (!r6)
                                            break s;
                                        }
                                        for (; i5 = (f3 = (e5 = (-8 & b3[r6 + 4 >> 2]) - u3 | 0) >>> 0 < i5 >>> 0) ? e5 : i5, a5 = f3 ? r6 : a5, r6 = (e5 = b3[r6 + 16 >> 2]) || b3[r6 + 20 >> 2]; )
                                          ;
                                      }
                                      if (!(!a5 | b3[616] - u3 >>> 0 <= i5 >>> 0)) {
                                        if ((o5 = a5 + u3 | 0) >>> 0 <= a5 >>> 0)
                                          break u;
                                        if (n5 = b3[a5 + 24 >> 2], (0 | a5) != (0 | (e5 = b3[a5 + 12 >> 2]))) {
                                          r6 = b3[a5 + 8 >> 2], b3[r6 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = r6;
                                          break f;
                                        }
                                        if (!(r6 = b3[(f3 = a5 + 20 | 0) >> 2])) {
                                          if (!(r6 = b3[a5 + 16 >> 2]))
                                            break b;
                                          f3 = a5 + 16 | 0;
                                        }
                                        for (; t4 = f3, e5 = r6, (r6 = b3[(f3 = r6 + 20 | 0) >> 2]) || (f3 = e5 + 16 | 0, r6 = b3[e5 + 16 >> 2]); )
                                          ;
                                        b3[t4 >> 2] = 0;
                                        break f;
                                      }
                                    }
                                  }
                                  if ((f3 = b3[616]) >>> 0 >= u3 >>> 0) {
                                    i5 = b3[619], (e5 = f3 - u3 | 0) >>> 0 >= 16 ? (b3[616] = e5, r6 = i5 + u3 | 0, b3[619] = r6, b3[r6 + 4 >> 2] = 1 | e5, b3[f3 + i5 >> 2] = e5, b3[i5 + 4 >> 2] = 3 | u3) : (b3[619] = 0, b3[616] = 0, b3[i5 + 4 >> 2] = 3 | f3, b3[4 + (r6 = f3 + i5 | 0) >> 2] = 1 | b3[r6 + 4 >> 2]), r6 = i5 + 8 | 0;
                                    break r;
                                  }
                                  if ((o5 = b3[617]) >>> 0 > u3 >>> 0) {
                                    e5 = o5 - u3 | 0, b3[617] = e5, r6 = (f3 = b3[620]) + u3 | 0, b3[620] = r6, b3[r6 + 4 >> 2] = 1 | e5, b3[f3 + 4 >> 2] = 3 | u3, r6 = f3 + 8 | 0;
                                    break r;
                                  }
                                  if (r6 = 0, e5 = c3 = u3 + 47 | 0, b3[732] ? f3 = b3[734] : (b3[735] = -1, b3[736] = -1, b3[733] = 4096, b3[734] = 4096, b3[732] = l4 + 12 & -16 ^ 1431655768, b3[737] = 0, b3[725] = 0, f3 = 4096), (f3 = (t4 = e5 + f3 | 0) & (a5 = 0 - f3 | 0)) >>> 0 <= u3 >>> 0)
                                    break r;
                                  if ((i5 = b3[724]) && i5 >>> 0 < (n5 = (e5 = b3[722]) + f3 | 0) >>> 0 | e5 >>> 0 >= n5 >>> 0)
                                    break r;
                                  if (4 & k3[2900])
                                    break n;
                                  c: {
                                    s: {
                                      if (i5 = b3[620])
                                        for (r6 = 2904; ; ) {
                                          if (i5 >>> 0 < (e5 = b3[r6 >> 2]) + b3[r6 + 4 >> 2] >>> 0 && e5 >>> 0 <= i5 >>> 0)
                                            break s;
                                          if (!(r6 = b3[r6 + 8 >> 2]))
                                            break;
                                        }
                                      if (-1 == (0 | (e5 = Qr(0))))
                                        break t;
                                      if (n5 = f3, (r6 = (i5 = b3[733]) - 1 | 0) & e5 && (n5 = (f3 - e5 | 0) + (r6 + e5 & 0 - i5) | 0), n5 >>> 0 <= u3 >>> 0 | n5 >>> 0 > 2147483646)
                                        break t;
                                      if ((i5 = b3[724]) && i5 >>> 0 < (a5 = (r6 = b3[722]) + n5 | 0) >>> 0 | r6 >>> 0 >= a5 >>> 0)
                                        break t;
                                      if ((0 | e5) != (0 | (r6 = Qr(n5))))
                                        break c;
                                      break a;
                                    }
                                    if ((n5 = a5 & t4 - o5) >>> 0 > 2147483646)
                                      break t;
                                    if ((0 | (e5 = Qr(n5))) == (b3[r6 >> 2] + b3[r6 + 4 >> 2] | 0))
                                      break o;
                                    r6 = e5;
                                  }
                                  if (!(-1 == (0 | r6) | u3 + 48 >>> 0 <= n5 >>> 0)) {
                                    if ((e5 = (e5 = b3[734]) + (c3 - n5 | 0) & 0 - e5) >>> 0 > 2147483646) {
                                      e5 = r6;
                                      break a;
                                    }
                                    if (-1 != (0 | Qr(e5))) {
                                      n5 = e5 + n5 | 0, e5 = r6;
                                      break a;
                                    }
                                    Qr(0 - n5 | 0);
                                    break t;
                                  }
                                  if (e5 = r6, -1 != (0 | r6))
                                    break a;
                                  break t;
                                }
                                E2();
                              }
                              a5 = 0;
                              break e;
                            }
                            e5 = 0;
                            break f;
                          }
                          if (-1 != (0 | e5))
                            break a;
                        }
                        b3[725] = 4 | b3[725];
                      }
                      if (f3 >>> 0 > 2147483646)
                        break i;
                      if (-1 == (0 | (e5 = Qr(f3))) | -1 == (0 | (r6 = Qr(0))) | r6 >>> 0 <= e5 >>> 0)
                        break i;
                      if ((n5 = r6 - e5 | 0) >>> 0 <= u3 + 40 >>> 0)
                        break i;
                    }
                    r6 = b3[722] + n5 | 0, b3[722] = r6, r6 >>> 0 > v2[723] && (b3[723] = r6);
                    a: {
                      n: {
                        t: {
                          if (t4 = b3[620]) {
                            for (r6 = 2904; ; ) {
                              if (((i5 = b3[r6 >> 2]) + (f3 = b3[r6 + 4 >> 2]) | 0) == (0 | e5))
                                break t;
                              if (!(r6 = b3[r6 + 8 >> 2]))
                                break;
                            }
                            break n;
                          }
                          for ((r6 = b3[618]) >>> 0 <= e5 >>> 0 && r6 || (b3[618] = e5), r6 = 0, b3[727] = n5, b3[726] = e5, b3[622] = -1, b3[623] = b3[732], b3[729] = 0; f3 = 2496 + (i5 = r6 << 3) | 0, b3[i5 + 2504 >> 2] = f3, b3[i5 + 2508 >> 2] = f3, 32 != (0 | (r6 = r6 + 1 | 0)); )
                            ;
                          f3 = (i5 = n5 - 40 | 0) - (r6 = e5 + 8 & 7 ? -8 - e5 & 7 : 0) | 0, b3[617] = f3, r6 = r6 + e5 | 0, b3[620] = r6, b3[r6 + 4 >> 2] = 1 | f3, b3[4 + (e5 + i5 | 0) >> 2] = 40, b3[621] = b3[736];
                          break a;
                        }
                        if (!(8 & k3[r6 + 12 | 0] | i5 >>> 0 > t4 >>> 0 | e5 >>> 0 <= t4 >>> 0)) {
                          b3[r6 + 4 >> 2] = f3 + n5, f3 = (r6 = t4 + 8 & 7 ? -8 - t4 & 7 : 0) + t4 | 0, b3[620] = f3, r6 = (e5 = b3[617] + n5 | 0) - r6 | 0, b3[617] = r6, b3[f3 + 4 >> 2] = 1 | r6, b3[4 + (e5 + t4 | 0) >> 2] = 40, b3[621] = b3[736];
                          break a;
                        }
                      }
                      v2[618] > e5 >>> 0 && (b3[618] = e5), f3 = e5 + n5 | 0, r6 = 2904;
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                u: {
                                  for (; ; ) {
                                    if ((0 | f3) != b3[r6 >> 2]) {
                                      if (r6 = b3[r6 + 8 >> 2])
                                        continue;
                                      break u;
                                    }
                                    break;
                                  }
                                  if (!(8 & k3[r6 + 12 | 0]))
                                    break k;
                                }
                                for (r6 = 2904; ; ) {
                                  if ((f3 = b3[r6 >> 2]) >>> 0 <= t4 >>> 0 && (a5 = f3 + b3[r6 + 4 >> 2] | 0) >>> 0 > t4 >>> 0)
                                    break b;
                                  r6 = b3[r6 + 8 >> 2];
                                }
                              }
                              if (b3[r6 >> 2] = e5, b3[r6 + 4 >> 2] = b3[r6 + 4 >> 2] + n5, b3[4 + (c3 = (e5 + 8 & 7 ? -8 - e5 & 7 : 0) + e5 | 0) >> 2] = 3 | u3, f3 = (n5 = f3 + (f3 + 8 & 7 ? -8 - f3 & 7 : 0) | 0) - (o5 = u3 + c3 | 0) | 0, (0 | t4) == (0 | n5)) {
                                b3[620] = o5, r6 = b3[617] + f3 | 0, b3[617] = r6, b3[o5 + 4 >> 2] = 1 | r6;
                                break t;
                              }
                              if (b3[619] == (0 | n5)) {
                                b3[619] = o5, r6 = b3[616] + f3 | 0, b3[616] = r6, b3[o5 + 4 >> 2] = 1 | r6, b3[r6 + o5 >> 2] = r6;
                                break t;
                              }
                              if (1 == (3 & (r6 = b3[n5 + 4 >> 2]))) {
                                t4 = -8 & r6;
                                k:
                                  if (r6 >>> 0 <= 255) {
                                    if (i5 = b3[n5 + 8 >> 2], r6 = r6 >>> 3 | 0, (0 | (e5 = b3[n5 + 12 >> 2])) == (0 | i5)) {
                                      d3 = 2456, h3 = b3[614] & Jr(r6), b3[d3 >> 2] = h3;
                                      break k;
                                    }
                                    b3[i5 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = i5;
                                  } else {
                                    if (u3 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (e5 = b3[n5 + 12 >> 2])))
                                      if ((i5 = b3[(r6 = n5 + 20 | 0) >> 2]) || (i5 = b3[(r6 = n5 + 16 | 0) >> 2])) {
                                        for (; a5 = r6, (i5 = b3[(r6 = (e5 = i5) + 20 | 0) >> 2]) || (r6 = e5 + 16 | 0, i5 = b3[e5 + 16 >> 2]); )
                                          ;
                                        b3[a5 >> 2] = 0;
                                      } else
                                        e5 = 0;
                                    else
                                      r6 = b3[n5 + 8 >> 2], b3[r6 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = r6;
                                    if (u3) {
                                      i5 = b3[n5 + 28 >> 2];
                                      u: {
                                        if (b3[(r6 = 2760 + (i5 << 2) | 0) >> 2] == (0 | n5)) {
                                          if (b3[r6 >> 2] = e5, e5)
                                            break u;
                                          d3 = 2460, h3 = b3[615] & Jr(i5), b3[d3 >> 2] = h3;
                                          break k;
                                        }
                                        if (b3[u3 + (b3[u3 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = e5, !e5)
                                          break k;
                                      }
                                      b3[e5 + 24 >> 2] = u3, (r6 = b3[n5 + 16 >> 2]) && (b3[e5 + 16 >> 2] = r6, b3[r6 + 24 >> 2] = e5), (r6 = b3[n5 + 20 >> 2]) && (b3[e5 + 20 >> 2] = r6, b3[r6 + 24 >> 2] = e5);
                                    }
                                  }
                                n5 = t4 + n5 | 0, f3 = f3 + t4 | 0;
                              }
                              if (b3[n5 + 4 >> 2] = -2 & b3[n5 + 4 >> 2], b3[o5 + 4 >> 2] = 1 | f3, b3[f3 + o5 >> 2] = f3, f3 >>> 0 <= 255) {
                                e5 = 2496 + ((r6 = f3 >>> 3 | 0) << 3) | 0, (f3 = b3[614]) & (r6 = 1 << r6) ? r6 = b3[e5 + 8 >> 2] : (b3[614] = r6 | f3, r6 = e5), b3[e5 + 8 >> 2] = o5, b3[r6 + 12 >> 2] = o5, b3[o5 + 12 >> 2] = e5, b3[o5 + 8 >> 2] = r6;
                                break t;
                              }
                              if (r6 = 31, f3 >>> 0 <= 16777215 && (r6 = f3 >>> 8 | 0, r6 <<= a5 = r6 + 1048320 >>> 16 & 8, r6 = 28 + ((r6 = ((r6 <<= i5 = r6 + 520192 >>> 16 & 4) << (e5 = r6 + 245760 >>> 16 & 2) >>> 15 | 0) - (e5 | i5 | a5) | 0) << 1 | f3 >>> r6 + 21 & 1) | 0), b3[o5 + 28 >> 2] = r6, b3[o5 + 16 >> 2] = 0, b3[o5 + 20 >> 2] = 0, a5 = 2760 + (r6 << 2) | 0, (i5 = b3[615]) & (e5 = 1 << r6)) {
                                for (r6 = f3 << (31 == (0 | r6) ? 0 : 25 - (r6 >>> 1 | 0) | 0), e5 = b3[a5 >> 2]; ; ) {
                                  if (i5 = e5, (-8 & b3[e5 + 4 >> 2]) == (0 | f3))
                                    break o;
                                  if (e5 = r6 >>> 29 | 0, r6 <<= 1, !(e5 = b3[16 + (a5 = i5 + (4 & e5) | 0) >> 2]))
                                    break;
                                }
                                b3[a5 + 16 >> 2] = o5, b3[o5 + 24 >> 2] = i5;
                              } else
                                b3[615] = e5 | i5, b3[a5 >> 2] = o5, b3[o5 + 24 >> 2] = a5;
                              b3[o5 + 12 >> 2] = o5, b3[o5 + 8 >> 2] = o5;
                              break t;
                            }
                            for (f3 = (i5 = n5 - 40 | 0) - (r6 = e5 + 8 & 7 ? -8 - e5 & 7 : 0) | 0, b3[617] = f3, r6 = r6 + e5 | 0, b3[620] = r6, b3[r6 + 4 >> 2] = 1 | f3, b3[4 + (e5 + i5 | 0) >> 2] = 40, b3[621] = b3[736], b3[(f3 = (r6 = (a5 + (a5 - 39 & 7 ? 39 - a5 & 7 : 0) | 0) - 47 | 0) >>> 0 < t4 + 16 >>> 0 ? t4 : r6) + 4 >> 2] = 27, r6 = b3[729], b3[f3 + 16 >> 2] = b3[728], b3[f3 + 20 >> 2] = r6, r6 = b3[727], b3[f3 + 8 >> 2] = b3[726], b3[f3 + 12 >> 2] = r6, b3[728] = f3 + 8, b3[727] = n5, b3[726] = e5, b3[729] = 0, r6 = f3 + 24 | 0; b3[r6 + 4 >> 2] = 7, e5 = r6 + 8 | 0, r6 = r6 + 4 | 0, e5 >>> 0 < a5 >>> 0; )
                              ;
                            if ((0 | f3) == (0 | t4))
                              break a;
                            if (b3[f3 + 4 >> 2] = -2 & b3[f3 + 4 >> 2], a5 = f3 - t4 | 0, b3[t4 + 4 >> 2] = 1 | a5, b3[f3 >> 2] = a5, a5 >>> 0 <= 255) {
                              e5 = 2496 + ((r6 = a5 >>> 3 | 0) << 3) | 0, (f3 = b3[614]) & (r6 = 1 << r6) ? r6 = b3[e5 + 8 >> 2] : (b3[614] = r6 | f3, r6 = e5), b3[e5 + 8 >> 2] = t4, b3[r6 + 12 >> 2] = t4, b3[t4 + 12 >> 2] = e5, b3[t4 + 8 >> 2] = r6;
                              break a;
                            }
                            if (r6 = 31, b3[t4 + 16 >> 2] = 0, b3[t4 + 20 >> 2] = 0, a5 >>> 0 <= 16777215 && (r6 = a5 >>> 8 | 0, r6 <<= i5 = r6 + 1048320 >>> 16 & 8, r6 = 28 + ((r6 = ((r6 <<= f3 = r6 + 520192 >>> 16 & 4) << (e5 = r6 + 245760 >>> 16 & 2) >>> 15 | 0) - (e5 | f3 | i5) | 0) << 1 | a5 >>> r6 + 21 & 1) | 0), b3[t4 + 28 >> 2] = r6, i5 = 2760 + (r6 << 2) | 0, (f3 = b3[615]) & (e5 = 1 << r6)) {
                              for (r6 = a5 << (31 == (0 | r6) ? 0 : 25 - (r6 >>> 1 | 0) | 0), e5 = b3[i5 >> 2]; ; ) {
                                if (f3 = e5, (0 | a5) == (-8 & b3[e5 + 4 >> 2]))
                                  break n;
                                if (e5 = r6 >>> 29 | 0, r6 <<= 1, !(e5 = b3[16 + (i5 = f3 + (4 & e5) | 0) >> 2]))
                                  break;
                              }
                              b3[i5 + 16 >> 2] = t4, b3[t4 + 24 >> 2] = f3;
                            } else
                              b3[615] = e5 | f3, b3[i5 >> 2] = t4, b3[t4 + 24 >> 2] = i5;
                            b3[t4 + 12 >> 2] = t4, b3[t4 + 8 >> 2] = t4;
                            break a;
                          }
                          r6 = b3[i5 + 8 >> 2], b3[r6 + 12 >> 2] = o5, b3[i5 + 8 >> 2] = o5, b3[o5 + 24 >> 2] = 0, b3[o5 + 12 >> 2] = i5, b3[o5 + 8 >> 2] = r6;
                        }
                        r6 = c3 + 8 | 0;
                        break r;
                      }
                      r6 = b3[f3 + 8 >> 2], b3[r6 + 12 >> 2] = t4, b3[f3 + 8 >> 2] = t4, b3[t4 + 24 >> 2] = 0, b3[t4 + 12 >> 2] = f3, b3[t4 + 8 >> 2] = r6;
                    }
                    if (!((r6 = b3[617]) >>> 0 <= u3 >>> 0)) {
                      e5 = r6 - u3 | 0, b3[617] = e5, r6 = (f3 = b3[620]) + u3 | 0, b3[620] = r6, b3[r6 + 4 >> 2] = 1 | e5, b3[f3 + 4 >> 2] = 3 | u3, r6 = f3 + 8 | 0;
                      break r;
                    }
                  }
                  b3[613] = 48, r6 = 0;
                  break r;
                }
                f:
                  if (n5) {
                    f3 = b3[a5 + 28 >> 2];
                    i: {
                      if (b3[(r6 = 2760 + (f3 << 2) | 0) >> 2] == (0 | a5)) {
                        if (b3[r6 >> 2] = e5, e5)
                          break i;
                        c3 = Jr(f3) & c3, b3[615] = c3;
                        break f;
                      }
                      if (b3[n5 + (b3[n5 + 16 >> 2] == (0 | a5) ? 16 : 20) >> 2] = e5, !e5)
                        break f;
                    }
                    b3[e5 + 24 >> 2] = n5, (r6 = b3[a5 + 16 >> 2]) && (b3[e5 + 16 >> 2] = r6, b3[r6 + 24 >> 2] = e5), (r6 = b3[a5 + 20 >> 2]) && (b3[e5 + 20 >> 2] = r6, b3[r6 + 24 >> 2] = e5);
                  }
                f:
                  if (i5 >>> 0 <= 15)
                    r6 = i5 + u3 | 0, b3[a5 + 4 >> 2] = 3 | r6, b3[4 + (r6 = r6 + a5 | 0) >> 2] = 1 | b3[r6 + 4 >> 2];
                  else if (b3[a5 + 4 >> 2] = 3 | u3, b3[o5 + 4 >> 2] = 1 | i5, b3[i5 + o5 >> 2] = i5, i5 >>> 0 <= 255)
                    e5 = 2496 + ((r6 = i5 >>> 3 | 0) << 3) | 0, (f3 = b3[614]) & (r6 = 1 << r6) ? r6 = b3[e5 + 8 >> 2] : (b3[614] = r6 | f3, r6 = e5), b3[e5 + 8 >> 2] = o5, b3[r6 + 12 >> 2] = o5, b3[o5 + 12 >> 2] = e5, b3[o5 + 8 >> 2] = r6;
                  else {
                    r6 = 31, i5 >>> 0 <= 16777215 && (r6 = i5 >>> 8 | 0, r6 <<= t4 = r6 + 1048320 >>> 16 & 8, r6 = 28 + ((r6 = ((r6 <<= f3 = r6 + 520192 >>> 16 & 4) << (e5 = r6 + 245760 >>> 16 & 2) >>> 15 | 0) - (e5 | f3 | t4) | 0) << 1 | i5 >>> r6 + 21 & 1) | 0), b3[o5 + 28 >> 2] = r6, b3[o5 + 16 >> 2] = 0, b3[o5 + 20 >> 2] = 0, f3 = 2760 + (r6 << 2) | 0;
                    i: {
                      if ((e5 = 1 << r6) & c3) {
                        for (r6 = i5 << (31 == (0 | r6) ? 0 : 25 - (r6 >>> 1 | 0) | 0), u3 = b3[f3 >> 2]; ; ) {
                          if ((-8 & b3[(e5 = u3) + 4 >> 2]) == (0 | i5))
                            break i;
                          if (f3 = r6 >>> 29 | 0, r6 <<= 1, !(u3 = b3[16 + (f3 = e5 + (4 & f3) | 0) >> 2]))
                            break;
                        }
                        b3[f3 + 16 >> 2] = o5, b3[o5 + 24 >> 2] = e5;
                      } else
                        b3[615] = e5 | c3, b3[f3 >> 2] = o5, b3[o5 + 24 >> 2] = f3;
                      b3[o5 + 12 >> 2] = o5, b3[o5 + 8 >> 2] = o5;
                      break f;
                    }
                    r6 = b3[e5 + 8 >> 2], b3[r6 + 12 >> 2] = o5, b3[e5 + 8 >> 2] = o5, b3[o5 + 24 >> 2] = 0, b3[o5 + 12 >> 2] = e5, b3[o5 + 8 >> 2] = r6;
                  }
                r6 = a5 + 8 | 0;
                break r;
              }
              e:
                if (A3) {
                  f3 = b3[e5 + 28 >> 2];
                  f: {
                    if (b3[(r6 = 2760 + (f3 << 2) | 0) >> 2] == (0 | e5)) {
                      if (b3[r6 >> 2] = a5, a5)
                        break f;
                      d3 = 2460, h3 = Jr(f3) & o5, b3[d3 >> 2] = h3;
                      break e;
                    }
                    if (b3[(b3[A3 + 16 >> 2] == (0 | e5) ? 16 : 20) + A3 >> 2] = a5, !a5)
                      break e;
                  }
                  b3[a5 + 24 >> 2] = A3, (r6 = b3[e5 + 16 >> 2]) && (b3[a5 + 16 >> 2] = r6, b3[r6 + 24 >> 2] = a5), (r6 = b3[e5 + 20 >> 2]) && (b3[a5 + 20 >> 2] = r6, b3[r6 + 24 >> 2] = a5);
                }
              i5 >>> 0 <= 15 ? (r6 = i5 + u3 | 0, b3[e5 + 4 >> 2] = 3 | r6, b3[4 + (r6 = r6 + e5 | 0) >> 2] = 1 | b3[r6 + 4 >> 2]) : (b3[e5 + 4 >> 2] = 3 | u3, b3[c3 + 4 >> 2] = 1 | i5, b3[i5 + c3 >> 2] = i5, s3 && (f3 = 2496 + ((r6 = s3 >>> 3 | 0) << 3) | 0, a5 = b3[619], (r6 = 1 << r6) & n5 ? r6 = b3[f3 + 8 >> 2] : (b3[614] = r6 | n5, r6 = f3), b3[f3 + 8 >> 2] = a5, b3[r6 + 12 >> 2] = a5, b3[a5 + 12 >> 2] = f3, b3[a5 + 8 >> 2] = r6), b3[619] = c3, b3[616] = i5), r6 = e5 + 8 | 0;
            }
            return U2 = l4 + 16 | 0, 0 | r6;
          }
          function D2(r6, e5, f3, i5, a5, t4) {
            r6 |= 0, e5 |= 0, f3 |= 0, i5 |= 0, a5 |= 0, t4 |= 0;
            for (var u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = m2(0), h3 = 0, w3 = m2(0), y3 = m2(0), g3 = 0, S3 = 0, P3 = 0, x3 = 0, T3 = 0, U3 = 0, F3 = 0, D3 = 0; (s3 = b3[2032 + (u3 = c3 << 2) >> 2]) && (b3[s3 >> 2] = 0), (s3 = b3[2032 + (4 | u3) >> 2]) && (b3[s3 >> 2] = 0), (s3 = b3[2032 + (8 | u3) >> 2]) && (b3[s3 >> 2] = 0), (u3 = b3[2032 + (12 | u3) >> 2]) && (b3[u3 >> 2] = 0), 100 != (0 | (c3 = c3 + 4 | 0)); )
              ;
            if ((c3 = b3[608]) || (c3 = O2(16), b3[608] = c3), b3[c3 + 8 >> 2] = t4, b3[c3 + 4 >> 2] = 0, b3[c3 + 12 >> 2] = i5, b3[c3 >> 2] = a5, (c3 = b3[609]) || ((a5 = O2(1900)) ? (b3[a5 + 100 >> 2] = 12, b3[a5 + 96 >> 2] = 13, b3[a5 + 92 >> 2] = 14, b3[a5 + 88 >> 2] = 15, o4[a5 + 80 >> 1] = 0, b3[a5 + 52 >> 2] = 0, b3[a5 + 56 >> 2] = 100130, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, b3[a5 >> 2] = 0, b3[a5 + 1896 >> 2] = 0, b3[a5 + 1736 >> 2] = 8, b3[a5 + 1732 >> 2] = 11, b3[a5 + 1728 >> 2] = 6, b3[a5 + 1724 >> 2] = 5, b3[a5 + 1720 >> 2] = 4, b3[a5 + 1716 >> 2] = 3, b3[a5 + 104 >> 2] = 16, b3[a5 + 76 >> 2] = 17, b3[a5 + 12 >> 2] = 18, b3[a5 + 24 >> 2] = 0) : a5 = 0, b3[609] = a5, wr2(a5, 100107, 34), wr2(b3[609], 100100, 35), wr2(b3[609], 100102, 36), wr2(b3[609], 100105, 37), wr2(b3[609], 100103, 38), wr2(b3[609], 100104, 39), b3[b3[609] + 56 >> 2] = 100130, a5 = b3[609], d2[a5 + 16 >> 2] = 0, d2[a5 + 24 >> 2] = 1, d2[a5 + 20 >> 2] = 0, c3 = b3[609]), a5 = 0, t4 = b3[608], b3[c3 >> 2] && cr2(c3, 0), b3[c3 + 112 >> 2] = 0, b3[c3 >> 2] = 1, n4[c3 + 108 | 0] = 0, b3[c3 + 1896 >> 2] = t4, b3[c3 + 8 >> 2] = 0, (0 | f3) > 0)
              for (t4 = 0; ; ) {
                if (g3 = b3[(t4 << 2) + e5 >> 2], u3 = b3[609], 1 != b3[u3 >> 2] && cr2(u3, 1), b3[u3 >> 2] = 2, b3[u3 + 4 >> 2] = 0, b3[u3 + 112 >> 2] >= 1 && (n4[u3 + 108 | 0] = 1), c3 = 0, (0 | g3) > 0)
                  for (; ; ) {
                    l4 = S3 = (p2(a5 + c3 | 0, i5) << 2) + r6 | 0, s3 = b3[609], 2 != b3[s3 >> 2] && cr2(s3, 2);
                    r: {
                      e: {
                        f: {
                          if (k3[s3 + 108 | 0]) {
                            if (u3 = Rr2(), b3[s3 + 8 >> 2] = u3, !u3)
                              break f;
                            if ((0 | (u3 = b3[s3 + 112 >> 2])) >= 1)
                              for (P3 = 116 + (s3 + (u3 << 4) | 0) | 0, A3 = s3 + 116 | 0, u3 = b3[s3 + 4 >> 2]; ; ) {
                                D3 = b3[A3 + 12 >> 2];
                                i: {
                                  if (!u3) {
                                    if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                      break f;
                                    if (tr2(u3, b3[u3 + 4 >> 2]))
                                      break i;
                                    break f;
                                  }
                                  if (!ir2(u3))
                                    break f;
                                  u3 = b3[u3 + 12 >> 2];
                                }
                                if (h3 = b3[u3 + 16 >> 2], b3[h3 + 12 >> 2] = D3, d2[h3 + 16 >> 2] = d2[A3 >> 2], v3 = d2[A3 + 4 >> 2], b3[h3 + 24 >> 2] = 0, d2[h3 + 20 >> 2] = v3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3, !(P3 >>> 0 > (A3 = A3 + 16 | 0) >>> 0))
                                  break;
                              }
                            n4[s3 + 108 | 0] = 0, b3[s3 + 112 >> 2] = 0, b3[s3 + 4 >> 2] = 0;
                          }
                          A3 = (T3 = +(v3 = (x3 = +(v3 = d2[l4 + 4 >> 2])) < -1e37 ? m2(-9999999933815813e21) : v3)) > 1e37, h3 = (F3 = +(w3 = (U3 = +(w3 = d2[l4 >> 2])) < -1e37 ? m2(-9999999933815813e21) : w3)) > 1e37, ((u3 = +(y3 = d2[l4 + 8 >> 2]) < -1e37) | (l4 = +(y3 = u3 ? m2(-9999999933815813e21) : y3) > 1e37) | x3 < -1e37 | T3 > 1e37 || F3 > 1e37 || U3 < -1e37) && (11 == (0 | (u3 = b3[s3 + 1732 >> 2])) ? be[b3[s3 + 12 >> 2]](100155) : be[0 | u3](100155, b3[s3 + 1896 >> 2])), v3 = A3 ? m2(9999999933815813e21) : v3, w3 = h3 ? m2(9999999933815813e21) : w3;
                          i: {
                            if (!b3[s3 + 8 >> 2]) {
                              if ((0 | (A3 = b3[s3 + 112 >> 2])) <= 99) {
                                d2[124 + (u3 = s3 + (A3 << 4) | 0) >> 2] = l4 ? m2(9999999933815813e21) : y3, d2[u3 + 120 >> 2] = v3, d2[u3 + 116 >> 2] = w3, b3[u3 + 128 >> 2] = S3, b3[s3 + 112 >> 2] = A3 + 1;
                                break r;
                              }
                              if (u3 = Rr2(), b3[s3 + 8 >> 2] = u3, !u3)
                                break i;
                              if ((0 | (u3 = b3[s3 + 112 >> 2])) >= 1)
                                for (h3 = 116 + (s3 + (u3 << 4) | 0) | 0, A3 = s3 + 116 | 0, u3 = b3[s3 + 4 >> 2]; ; ) {
                                  P3 = b3[A3 + 12 >> 2];
                                  a: {
                                    if (!u3) {
                                      if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                        break i;
                                      if (tr2(u3, b3[u3 + 4 >> 2]))
                                        break a;
                                      break i;
                                    }
                                    if (!ir2(u3))
                                      break i;
                                    u3 = b3[u3 + 12 >> 2];
                                  }
                                  if (l4 = b3[u3 + 16 >> 2], b3[l4 + 12 >> 2] = P3, d2[l4 + 16 >> 2] = d2[A3 >> 2], y3 = d2[A3 + 4 >> 2], b3[l4 + 24 >> 2] = 0, d2[l4 + 20 >> 2] = y3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3, !(h3 >>> 0 > (A3 = A3 + 16 | 0) >>> 0))
                                    break;
                                }
                              n4[s3 + 108 | 0] = 0, b3[s3 + 112 >> 2] = 0;
                            }
                            a: {
                              n: {
                                if (!(u3 = b3[s3 + 4 >> 2])) {
                                  if (!(u3 = br2(b3[s3 + 8 >> 2])))
                                    break a;
                                  if (tr2(u3, b3[u3 + 4 >> 2]))
                                    break n;
                                  break a;
                                }
                                if (!ir2(u3))
                                  break a;
                                u3 = b3[u3 + 12 >> 2];
                              }
                              A3 = b3[u3 + 16 >> 2], d2[A3 + 16 >> 2] = w3, b3[A3 + 12 >> 2] = S3, b3[A3 + 24 >> 2] = 0, d2[A3 + 20 >> 2] = v3, b3[u3 + 28 >> 2] = 1, b3[b3[u3 + 4 >> 2] + 28 >> 2] = -1, b3[s3 + 4 >> 2] = u3;
                              break r;
                            }
                            if (11 != (0 | (u3 = b3[s3 + 1732 >> 2])))
                              break e;
                            be[b3[s3 + 12 >> 2]](100902);
                            break r;
                          }
                          if (11 != (0 | (u3 = b3[s3 + 1732 >> 2])))
                            break e;
                          be[b3[s3 + 12 >> 2]](100902);
                          break r;
                        }
                        if (11 == (0 | (u3 = b3[s3 + 1732 >> 2]))) {
                          be[b3[s3 + 12 >> 2]](100902);
                          break r;
                        }
                      }
                      be[0 | u3](100902, b3[s3 + 1896 >> 2]);
                    }
                    if ((0 | g3) == (0 | (c3 = c3 + 1 | 0)))
                      break;
                  }
                if (u3 = b3[609], 2 != b3[u3 >> 2] && cr2(u3, 2), b3[u3 >> 2] = 1, a5 = a5 + g3 | 0, (0 | (t4 = t4 + 1 | 0)) == (0 | f3))
                  break;
              }
            f3 = b3[609], r6 = 0, e5 = O2(40), b3[e5 >> 2] = 0, a5 = Br2(s3 = f3 + 1740 | 0, 1, e5, 4), t4 = 0 | R2();
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n:
                        for (; ; ) {
                          t: {
                            o: {
                              b: {
                                k: {
                                  u: {
                                    c: {
                                      s: {
                                        if (r6) {
                                          if (11 != (0 | (r6 = b3[f3 + 1732 >> 2]))) {
                                            if (e5 = b3[f3 + 1896 >> 2], b3[611] = 0, M2(0 | r6, 100902, 0 | e5), r6 = b3[611], b3[611] = 0, e5 = -1, !r6)
                                              break c;
                                            if (!(i5 = b3[612]))
                                              break c;
                                            if (e5 = Hr(b3[r6 >> 2], a5, t4))
                                              break s;
                                            break a;
                                          }
                                          if (r6 = b3[f3 + 12 >> 2], b3[611] = 0, _2(0 | r6, 100902), r6 = b3[611], b3[611] = 0, e5 = -1, !r6)
                                            break k;
                                          if (!(i5 = b3[612]))
                                            break k;
                                          if (e5 = Hr(b3[r6 >> 2], a5, t4))
                                            break u;
                                          break a;
                                        }
                                        if (1 == b3[f3 >> 2])
                                          break t;
                                        if (b3[611] = 0, M2(19, 0 | f3, 1), r6 = b3[611], b3[611] = 0, e5 = -1, !r6)
                                          break o;
                                        if (!(i5 = b3[612]))
                                          break o;
                                        if (e5 = Hr(b3[r6 >> 2], a5, t4))
                                          break b;
                                        break a;
                                      }
                                      C2(0 | i5);
                                    }
                                    if (r6 = 0 | R2(), 1 == (0 | e5))
                                      continue;
                                    break r;
                                  }
                                  C2(0 | i5);
                                }
                                if (r6 = 0 | R2(), 1 == (0 | e5))
                                  continue;
                                break r;
                              }
                              C2(0 | i5);
                            }
                            if (r6 = 0 | R2(), 1 == (0 | e5))
                              continue;
                          }
                          b3[f3 >> 2] = 0;
                          t: {
                            o: {
                              b: {
                                if (!b3[f3 + 8 >> 2]) {
                                  if (!(k3[f3 + 80 | 0] | 16 != b3[f3 + 104 >> 2])) {
                                    if (b3[611] = 0, u3 = 0 | I2(20, 0 | f3), r6 = b3[611], b3[611] = 0, e5 = -1, r6 && (i5 = b3[612])) {
                                      if (!(e5 = Hr(b3[r6 >> 2], a5, t4)))
                                        break a;
                                      C2(0 | i5);
                                    }
                                    if (r6 = 0 | R2(), 1 == (0 | e5))
                                      continue;
                                    if (u3) {
                                      b3[f3 + 1896 >> 2] = 0;
                                      break r;
                                    }
                                  }
                                  if (b3[611] = 0, i5 = 0 | B2(21), r6 = b3[611], b3[611] = 0, e5 = -1, r6 && (c3 = b3[612])) {
                                    if (!(e5 = Hr(b3[r6 >> 2], a5, t4)))
                                      break i;
                                    C2(0 | c3);
                                  }
                                  if (r6 = 0 | R2(), 1 == (0 | e5))
                                    continue;
                                  if (b3[f3 + 8 >> 2] = i5, !i5)
                                    break b;
                                  if ((0 | (r6 = b3[f3 + 112 >> 2])) >= 1)
                                    for (A3 = 116 + (f3 + (r6 << 4) | 0) | 0, i5 = f3 + 116 | 0, e5 = b3[f3 + 4 >> 2]; ; ) {
                                      g3 = b3[i5 + 12 >> 2];
                                      k: {
                                        u: {
                                          c: {
                                            s: {
                                              A: {
                                                l: {
                                                  if (!e5) {
                                                    if (r6 = b3[f3 + 8 >> 2], b3[611] = 0, e5 = 0 | I2(22, 0 | r6), r6 = b3[611], b3[611] = 0, c3 = -1, !r6)
                                                      break A;
                                                    if (!(u3 = b3[612]))
                                                      break A;
                                                    if (c3 = Hr(b3[r6 >> 2], a5, t4))
                                                      break l;
                                                    break f;
                                                  }
                                                  if (b3[611] = 0, l4 = 0 | I2(23, 0 | e5), r6 = b3[611], b3[611] = 0, c3 = -1, !r6)
                                                    break c;
                                                  if (!(u3 = b3[612]))
                                                    break c;
                                                  if (c3 = Hr(b3[r6 >> 2], a5, t4))
                                                    break s;
                                                  break f;
                                                }
                                                C2(0 | u3);
                                              }
                                              if (r6 = 0 | R2(), 1 != (0 | c3))
                                                break u;
                                              continue n;
                                            }
                                            C2(0 | u3);
                                          }
                                          if (r6 = 0 | R2(), 1 == (0 | c3))
                                            continue n;
                                          if (!l4)
                                            break b;
                                          e5 = b3[e5 + 12 >> 2];
                                          break k;
                                        }
                                        if (!e5)
                                          break b;
                                        if (r6 = b3[e5 + 4 >> 2], b3[611] = 0, l4 = 0 | j2(24, 0 | e5, 0 | r6), r6 = b3[611], b3[611] = 0, c3 = -1, r6 && (u3 = b3[612])) {
                                          if (!(c3 = Hr(b3[r6 >> 2], a5, t4)))
                                            break f;
                                          C2(0 | u3);
                                        }
                                        if (r6 = 0 | R2(), 1 == (0 | c3))
                                          continue n;
                                        if (!l4)
                                          break b;
                                      }
                                      if (r6 = b3[e5 + 16 >> 2], b3[r6 + 12 >> 2] = g3, d2[r6 + 16 >> 2] = d2[i5 >> 2], v3 = d2[i5 + 4 >> 2], b3[r6 + 24 >> 2] = 0, d2[r6 + 20 >> 2] = v3, b3[e5 + 28 >> 2] = 1, b3[b3[e5 + 4 >> 2] + 28 >> 2] = -1, b3[f3 + 4 >> 2] = e5, !(A3 >>> 0 > (i5 = i5 + 16 | 0) >>> 0))
                                        break;
                                    }
                                  n4[f3 + 108 | 0] = 0, b3[f3 + 112 >> 2] = 0;
                                }
                                if (b3[611] = 0, K2(f3), r6 = b3[611], b3[611] = 0, e5 = -1, !r6)
                                  break t;
                                if (!(i5 = b3[612]))
                                  break t;
                                if (e5 = Hr(b3[r6 >> 2], a5, t4))
                                  break o;
                                break a;
                              }
                              if (b3[611] = 0, M2(26, 0 | s3, 1), e5 = b3[611], b3[611] = 0, e5 && (r6 = b3[612])) {
                                if (!Hr(b3[e5 >> 2], a5, t4))
                                  break e;
                                C2(0 | r6);
                              }
                              r6 = 0 | R2();
                              continue;
                            }
                            C2(0 | i5);
                          }
                          if (r6 = 0 | R2(), 1 != (0 | e5)) {
                            if (b3[611] = 0, u3 = 0 | I2(27, 0 | f3), r6 = b3[611], b3[611] = 0, e5 = -1, r6 && (i5 = b3[612])) {
                              if (!(e5 = Hr(b3[r6 >> 2], a5, t4)))
                                break a;
                              C2(0 | i5);
                            }
                            if (r6 = 0 | R2(), 1 != (0 | e5)) {
                              t: {
                                o: {
                                  b: {
                                    k: {
                                      u: {
                                        c: {
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    if (!u3) {
                                                      if (b3[611] = 0, M2(26, 0 | s3, 1), e5 = b3[611], b3[611] = 0, !e5)
                                                        break v;
                                                      if (!(r6 = b3[612]))
                                                        break v;
                                                      if (Hr(b3[e5 >> 2], a5, t4))
                                                        break d;
                                                      break e;
                                                    }
                                                    if (e5 = b3[f3 + 8 >> 2], k3[f3 + 60 | 0])
                                                      break c;
                                                    if (k3[f3 + 81 | 0]) {
                                                      if (b3[611] = 0, c3 = 0 | L2(28, 0 | e5, 1, 1), r6 = b3[611], b3[611] = 0, i5 = -1, !r6)
                                                        break s;
                                                      if (!(u3 = b3[612]))
                                                        break s;
                                                      if (i5 = Hr(b3[r6 >> 2], a5, t4))
                                                        break l;
                                                      break f;
                                                    }
                                                    if (b3[611] = 0, c3 = 0 | I2(29, 0 | e5), r6 = b3[611], b3[611] = 0, i5 = -1, !r6)
                                                      break s;
                                                    if (!(u3 = b3[612]))
                                                      break s;
                                                    if (i5 = Hr(b3[r6 >> 2], a5, t4))
                                                      break A;
                                                    break f;
                                                  }
                                                  C2(0 | r6);
                                                }
                                                r6 = 0 | R2();
                                                continue;
                                              }
                                              C2(0 | u3);
                                              break s;
                                            }
                                            C2(0 | u3);
                                          }
                                          if (r6 = 0 | R2(), 1 == (0 | i5))
                                            continue;
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        if (!c3) {
                                                          if (b3[611] = 0, M2(26, 0 | s3, 1), e5 = b3[611], b3[611] = 0, !e5)
                                                            break h;
                                                          if (!(r6 = b3[612]))
                                                            break h;
                                                          if (Hr(b3[e5 >> 2], a5, t4))
                                                            break p;
                                                          break e;
                                                        }
                                                        if (!(15 != b3[f3 + 88 >> 2] | 12 != b3[f3 + 100 >> 2] | 13 != b3[f3 + 96 >> 2] | 14 != b3[f3 + 92 >> 2] || 3 != b3[f3 + 1716 >> 2] | 6 != b3[f3 + 1728 >> 2] | 5 != b3[f3 + 1724 >> 2] || 4 != b3[f3 + 1720 >> 2]))
                                                          break s;
                                                        if (k3[f3 + 81 | 0]) {
                                                          if (b3[611] = 0, M2(30, 0 | f3, 0 | e5), r6 = b3[611], b3[611] = 0, i5 = -1, !r6)
                                                            break v;
                                                          if (!(c3 = b3[612]))
                                                            break v;
                                                          if (i5 = Hr(b3[r6 >> 2], a5, t4))
                                                            break d;
                                                          break i;
                                                        }
                                                        if (b3[611] = 0, M2(31, 0 | f3, 0 | e5), r6 = b3[611], b3[611] = 0, i5 = -1, !r6)
                                                          break A;
                                                        if (!(c3 = b3[612]))
                                                          break A;
                                                        if (i5 = Hr(b3[r6 >> 2], a5, t4))
                                                          break l;
                                                        break i;
                                                      }
                                                      C2(0 | r6);
                                                    }
                                                    r6 = 0 | R2();
                                                    continue;
                                                  }
                                                  C2(0 | c3);
                                                }
                                                if (r6 = 0 | R2(), 1 == (0 | i5))
                                                  continue;
                                                break s;
                                              }
                                              C2(0 | c3);
                                            }
                                            if (r6 = 0 | R2(), 1 == (0 | i5))
                                              continue;
                                          }
                                          if (16 != b3[f3 + 104 >> 2]) {
                                            if (b3[611] = 0, nr2(e5), r6 = b3[611], b3[611] = 0, i5 = -1, !r6)
                                              break k;
                                            if (!(c3 = b3[612]))
                                              break k;
                                            if (i5 = Hr(b3[r6 >> 2], a5, t4))
                                              break u;
                                            break i;
                                          }
                                        }
                                        if (b3[611] = 0, Pr2(e5), r6 = b3[611], b3[611] = 0, e5 = -1, !r6)
                                          break o;
                                        if (!(i5 = b3[612]))
                                          break o;
                                        if (e5 = Hr(b3[r6 >> 2], a5, t4))
                                          break b;
                                        break a;
                                      }
                                      C2(0 | c3);
                                    }
                                    if (r6 = 0 | R2(), 1 != (0 | i5))
                                      break t;
                                    continue;
                                  }
                                  C2(0 | i5);
                                }
                                if (r6 = 0 | R2(), 1 == (0 | e5))
                                  continue;
                                b3[f3 + 8 >> 2] = 0, b3[f3 + 1896 >> 2] = 0;
                                break r;
                              }
                              if (r6 = b3[f3 + 104 >> 2], b3[611] = 0, _2(0 | r6, 0 | e5), r6 = b3[611], b3[611] = 0, e5 = -1, r6 && (i5 = b3[612])) {
                                if (!(e5 = Hr(b3[r6 >> 2], a5, t4)))
                                  break a;
                                C2(0 | i5);
                              }
                              if (r6 = 0 | R2(), 1 != (0 | e5))
                                break;
                            }
                          }
                        }
                      b3[f3 + 1896 >> 2] = 0, b3[f3 + 8 >> 2] = 0;
                      break r;
                    }
                    Zr(r6, i5), E2();
                  }
                  Zr(r6, c3), E2();
                }
                Zr(r6, u3), E2();
              }
              Zr(e5, r6), E2();
            }
            return Y2(a5), b3[b3[608] + 4 >> 2];
          }
          function H2(r6, e5) {
            var f3 = m2(0), i5 = m2(0), a5 = 0, t4 = m2(0), o5 = m2(0), u3 = 0, c3 = 0, s3 = m2(0), A3 = 0, l4 = 0, v3 = 0, p3 = m2(0), w3 = m2(0), y3 = m2(0), C3 = 0, R3 = 0, M3 = 0, I3 = 0, _3 = 0, S3 = 0, P3 = 0, x3 = 0, L3 = 0, j3 = m2(0), B3 = 0, T3 = m2(0);
            U2 = u3 = U2 - 144 | 0, L3 = b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2], P3 = b3[L3 >> 2], M3 = b3[P3 + 16 >> 2], _3 = b3[b3[P3 + 4 >> 2] + 16 >> 2], S3 = b3[e5 >> 2], I3 = b3[b3[S3 + 4 >> 2] + 16 >> 2], C3 = b3[S3 + 16 >> 2], pr2(I3, b3[r6 + 72 >> 2], C3) > m2(0) && (f3 = d2[I3 + 28 >> 2], i5 = d2[I3 + 32 >> 2], a5 = b3[r6 + 72 >> 2], t4 = d2[a5 + 28 >> 2], o5 = d2[a5 + 32 >> 2], s3 = d2[C3 + 28 >> 2], h2[u3 + 40 >> 3] = d2[C3 + 32 >> 2], h2[u3 + 32 >> 3] = s3, h2[u3 + 24 >> 3] = o5, h2[u3 + 16 >> 3] = t4, h2[u3 + 8 >> 3] = i5, h2[u3 >> 3] = f3, Gr(1098, u3));
            r: {
              e: {
                f:
                  if ((0 | C3) != (0 | M3) && !((w3 = (f3 = d2[C3 + 32 >> 2]) <= (i5 = d2[I3 + 32 >> 2]) ? f3 : i5) > ((i5 = d2[M3 + 32 >> 2]) >= (t4 = d2[_3 + 32 >> 2]) ? i5 : t4))) {
                    i: {
                      if (!(!(f3 <= i5) | (t4 = d2[C3 + 28 >> 2]) != (o5 = d2[M3 + 28 >> 2])) || t4 < o5) {
                        if (!(pr2(_3, C3, M3) > m2(0)))
                          break i;
                        break f;
                      }
                      if (pr2(I3, M3, C3) < m2(0))
                        break f;
                    }
                    v3 = _3, a5 = M3, l4 = C3, (f3 = d2[(A3 = I3) + 28 >> 2]) < (i5 = d2[C3 + 28 >> 2]) | (d2[A3 + 32 >> 2] <= d2[l4 + 32 >> 2] ? f3 == i5 : 0) ? (c3 = l4, l4 = A3) : c3 = A3, (f3 = d2[a5 + 28 >> 2]) > (i5 = d2[v3 + 28 >> 2]) | (d2[v3 + 32 >> 2] <= d2[a5 + 32 >> 2] ? f3 == i5 : 0) ? (f3 = i5, A3 = a5, a5 = v3) : A3 = v3, f3 > (i5 = d2[l4 + 28 >> 2]) | (d2[l4 + 32 >> 2] <= d2[a5 + 32 >> 2] ? f3 == i5 : 0) ? (i5 = f3, v3 = A3, R3 = a5, A3 = c3, a5 = l4) : (v3 = c3, R3 = l4), c3 = u3;
                    i:
                      if ((o5 = d2[A3 + 28 >> 2]) > i5 | (d2[R3 + 32 >> 2] <= d2[A3 + 32 >> 2] ? i5 == o5 : 0))
                        if (p3 = d2[v3 + 28 >> 2], !(d2[A3 + 32 >> 2] <= d2[v3 + 32 >> 2]) | o5 != p3 && !(p3 > o5))
                          if (i5 = pr2(a5, R3, A3), f3 = pr2(a5, v3, A3), l4 = m2(i5 - f3) < m2(0), (t4 = m2(g2(l4 ? m2(-i5) : i5, m2(0)))) <= (i5 = m2(g2(l4 ? f3 : m2(-f3), m2(0))))) {
                            if (o5 = d2[R3 + 28 >> 2], s3 = d2[v3 + 28 >> 2], f3 = m2(m2(o5 + s3) * m2(0.5)), i5 == m2(0))
                              break i;
                            f3 = m2(o5 + m2(m2(t4 / m2(t4 + i5)) * m2(s3 - o5)));
                          } else
                            f3 = d2[v3 + 28 >> 2], f3 = m2(f3 + m2(m2(i5 / m2(t4 + i5)) * m2(d2[R3 + 28 >> 2] - f3)));
                        else {
                          if (f3 = m2(0), s3 = m2(o5 - i5), t4 = m2(i5 - d2[a5 + 28 >> 2]), (w3 = m2(s3 + t4)) > m2(0) && (f3 = d2[((l4 = t4 < s3) ? a5 : A3) + 32 >> 2], f3 = m2(m2(d2[R3 + 32 >> 2] - f3) + m2(m2((l4 ? t4 : s3) / w3) * m2(f3 - d2[(l4 ? A3 : a5) + 32 >> 2])))), j3 = m2(-f3), w3 = f3, p3 = m2(p3 - o5), (t4 = m2(s3 + p3)) > m2(0) && (y3 = d2[((l4 = s3 < p3) ? R3 : v3) + 32 >> 2], y3 = m2(m2(d2[A3 + 32 >> 2] - y3) + m2(m2((l4 ? s3 : p3) / t4) * m2(y3 - d2[(l4 ? v3 : R3) + 32 >> 2])))), l4 = m2(f3 + y3) < m2(0), (p3 = m2(g2(l4 ? j3 : w3, m2(0)))) <= (t4 = m2(g2(l4 ? m2(-y3) : y3, m2(0))))) {
                            if (f3 = m2(m2(i5 + o5) * m2(0.5)), t4 == m2(0))
                              break i;
                            f3 = m2(i5 + m2(s3 * m2(p3 / m2(p3 + t4))));
                            break i;
                          }
                          f3 = m2(o5 + m2(m2(i5 - o5) * m2(t4 / m2(p3 + t4))));
                        }
                      else
                        f3 = m2(m2(i5 + o5) * m2(0.5));
                    d2[c3 + 84 >> 2] = f3, (f3 = d2[a5 + 32 >> 2]) < (i5 = d2[A3 + 32 >> 2]) | (d2[a5 + 28 >> 2] <= d2[A3 + 28 >> 2] ? f3 == i5 : 0) ? (c3 = A3, A3 = a5) : c3 = a5, (i5 = d2[v3 + 32 >> 2]) > (f3 = d2[R3 + 32 >> 2]) | (d2[R3 + 28 >> 2] <= d2[v3 + 28 >> 2] ? f3 == i5 : 0) ? (i5 = f3, a5 = v3, v3 = R3) : a5 = R3, (f3 = d2[A3 + 32 >> 2]) < i5 | (d2[A3 + 28 >> 2] <= d2[v3 + 28 >> 2] ? f3 == i5 : 0) ? (R3 = a5, l4 = v3, a5 = c3, v3 = A3) : (R3 = c3, l4 = A3);
                    i: {
                      a:
                        if ((o5 = d2[l4 + 32 >> 2]) < (s3 = d2[a5 + 32 >> 2]) | (d2[l4 + 28 >> 2] <= d2[a5 + 28 >> 2] ? o5 == s3 : 0)) {
                          if (y3 = d2[R3 + 32 >> 2], !(!(d2[a5 + 28 >> 2] <= d2[R3 + 28 >> 2]) | s3 != y3) || y3 > s3) {
                            if (f3 = m2(0), i5 = m2(0), p3 = m2(s3 - o5), t4 = m2(o5 - d2[v3 + 32 >> 2]), (w3 = m2(p3 + t4)) > m2(0) && (i5 = d2[((c3 = t4 < p3) ? v3 : a5) + 28 >> 2], i5 = m2(m2(d2[l4 + 28 >> 2] - i5) + m2(m2((c3 ? t4 : p3) / w3) * m2(i5 - d2[(c3 ? a5 : v3) + 28 >> 2])))), T3 = m2(-i5), w3 = i5, y3 = m2(y3 - s3), (t4 = m2(p3 + y3)) > m2(0) && (j3 = d2[a5 + 28 >> 2], f3 = d2[((a5 = p3 < y3) ? l4 : R3) + 28 >> 2], f3 = m2(m2(j3 - f3) + m2(m2((a5 ? p3 : y3) / t4) * m2(f3 - d2[(a5 ? R3 : l4) + 28 >> 2])))), a5 = m2(i5 + f3) < m2(0), (i5 = m2(g2(a5 ? T3 : w3, m2(0)))) <= (f3 = m2(g2(a5 ? m2(-f3) : f3, m2(0))))) {
                              if (f3 == m2(0))
                                break a;
                              d2[u3 + 88 >> 2] = o5 + m2(p3 * m2(i5 / m2(i5 + f3)));
                              break i;
                            }
                            d2[u3 + 88 >> 2] = s3 + m2(m2(o5 - s3) * m2(f3 / m2(i5 + f3)));
                            break i;
                          }
                          if (f3 = m2(0), i5 = m2(0), t4 = m2(s3 - o5), p3 = d2[v3 + 32 >> 2], w3 = m2(o5 - p3), m2(t4 + w3) > m2(0) && (i5 = d2[l4 + 28 >> 2], i5 = m2(m2(w3 * m2(i5 - d2[a5 + 28 >> 2])) + m2(t4 * m2(i5 - d2[v3 + 28 >> 2])))), w3 = m2(-i5), t4 = i5, s3 = m2(s3 - y3), p3 = m2(y3 - p3), m2(s3 + p3) > m2(0) && (f3 = d2[R3 + 28 >> 2], f3 = m2(m2(p3 * m2(f3 - d2[a5 + 28 >> 2])) + m2(s3 * m2(f3 - d2[v3 + 28 >> 2])))), a5 = m2(i5 - f3) < m2(0), (i5 = m2(g2(a5 ? w3 : t4, m2(0)))) <= (f3 = m2(g2(a5 ? f3 : m2(-f3), m2(0))))) {
                            if (f3 == m2(0)) {
                              d2[u3 + 88 >> 2] = m2(o5 + y3) * m2(0.5);
                              break i;
                            }
                            d2[u3 + 88 >> 2] = o5 + m2(m2(y3 - o5) * m2(i5 / m2(i5 + f3)));
                            break i;
                          }
                          d2[u3 + 88 >> 2] = y3 + m2(m2(o5 - y3) * m2(f3 / m2(i5 + f3)));
                          break i;
                        }
                      d2[u3 + 88 >> 2] = m2(o5 + s3) * m2(0.5);
                    }
                    f3 = d2[u3 + 84 >> 2], c3 = b3[r6 + 72 >> 2];
                    i: {
                      if (f3 < (t4 = d2[c3 + 28 >> 2]))
                        i5 = d2[c3 + 32 >> 2];
                      else {
                        if (f3 != t4)
                          break i;
                        if (!((i5 = d2[c3 + 32 >> 2]) >= d2[u3 + 88 >> 2]))
                          break i;
                      }
                      d2[u3 + 88 >> 2] = i5, d2[u3 + 84 >> 2] = t4, f3 = t4;
                    }
                    A3 = a5 = C3, (i5 = t4 = d2[a5 + 28 >> 2]) < (o5 = d2[M3 + 28 >> 2]) || t4 == o5 && (i5 = t4, A3 = C3, d2[a5 + 32 >> 2] <= d2[M3 + 32 >> 2]) || (i5 = o5, A3 = M3), a5 = A3;
                    i: {
                      if (f3 > i5)
                        o5 = d2[a5 + 32 >> 2];
                      else {
                        if (f3 != i5)
                          break i;
                        if (!((o5 = d2[a5 + 32 >> 2]) <= d2[u3 + 88 >> 2]))
                          break i;
                      }
                      d2[u3 + 88 >> 2] = o5, d2[u3 + 84 >> 2] = i5, t4 = d2[C3 + 28 >> 2], f3 = i5;
                    }
                    if (d2[M3 + 28 >> 2] != f3 | d2[u3 + 88 >> 2] != d2[M3 + 32 >> 2] && (d2[u3 + 88 >> 2] != d2[C3 + 32 >> 2] || f3 != t4)) {
                      i: {
                        f3 = d2[c3 + 28 >> 2];
                        a: {
                          if (d2[I3 + 32 >> 2] != d2[c3 + 32 >> 2] || f3 != d2[I3 + 28 >> 2]) {
                            if (pr2(I3, c3, u3 + 56 | 0) >= m2(0))
                              break a;
                            c3 = b3[r6 + 72 >> 2], f3 = d2[c3 + 28 >> 2];
                          }
                          if (d2[_3 + 32 >> 2] == d2[c3 + 32 >> 2] && f3 == d2[_3 + 28 >> 2])
                            break i;
                          if (!(pr2(_3, c3, u3 + 56 | 0) <= m2(0)))
                            break i;
                        }
                        if ((0 | (a5 = b3[r6 + 72 >> 2])) == (0 | _3)) {
                          if (!ir2(b3[S3 + 4 >> 2]))
                            break r;
                          if (!tr2(b3[P3 + 4 >> 2], S3))
                            break r;
                          for (a5 = b3[b3[e5 >> 2] + 16 >> 2]; e5 = b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2], A3 = b3[e5 >> 2], (0 | a5) == b3[A3 + 16 >> 2]; )
                            ;
                          if (c3 = e5, k3[e5 + 15 | 0] && (c3 = 0, (a5 = er2(b3[b3[b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[A3 + 12 >> 2])) && rr2(b3[e5 >> 2]) && (b3[e5 >> 2] = a5, n4[e5 + 15 | 0] = 0, b3[a5 + 24 >> 2] = e5, c3 = b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2])), !c3)
                            break r;
                          a5 = b3[b3[b3[c3 + 4 >> 2] + 8 >> 2] >> 2], e5 = b3[a5 >> 2], mr2(r6, a5, L3), B3 = 1, ar2(r6, c3, b3[b3[e5 + 4 >> 2] + 12 >> 2], e5, e5, 1);
                          break f;
                        }
                        if ((0 | a5) == (0 | I3)) {
                          if (!ir2(b3[P3 + 4 >> 2]))
                            break r;
                          if (!tr2(b3[S3 + 12 >> 2], b3[b3[P3 + 4 >> 2] + 12 >> 2]))
                            break r;
                          for (c3 = b3[b3[b3[e5 >> 2] + 4 >> 2] + 16 >> 2], a5 = e5; a5 = b3[b3[b3[a5 + 4 >> 2] + 4 >> 2] >> 2], (0 | c3) == b3[b3[b3[a5 >> 2] + 4 >> 2] + 16 >> 2]; )
                            ;
                          c3 = b3[b3[b3[b3[b3[b3[a5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2] + 8 >> 2], b3[e5 >> 2] = b3[b3[P3 + 4 >> 2] + 12 >> 2], B3 = 1, ar2(r6, a5, b3[mr2(r6, e5, 0) + 8 >> 2], b3[b3[S3 + 4 >> 2] + 8 >> 2], c3, 1);
                          break f;
                        }
                        if (pr2(I3, a5, u3 + 56 | 0) >= m2(0)) {
                          if (n4[e5 + 14 | 0] = 1, n4[b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !ir2(b3[S3 + 4 >> 2]))
                            break r;
                          c3 = b3[S3 + 16 >> 2], a5 = b3[r6 + 72 >> 2], d2[c3 + 28 >> 2] = d2[a5 + 28 >> 2], d2[c3 + 32 >> 2] = d2[a5 + 32 >> 2];
                        } else
                          a5 = b3[r6 + 72 >> 2];
                        if (!(pr2(_3, a5, u3 + 56 | 0) <= m2(0)))
                          break f;
                        if (n4[L3 + 14 | 0] = 1, n4[e5 + 14 | 0] = 1, !ir2(b3[P3 + 4 >> 2]))
                          break r;
                        e5 = b3[P3 + 16 >> 2], r6 = b3[r6 + 72 >> 2], d2[e5 + 28 >> 2] = d2[r6 + 28 >> 2], d2[e5 + 32 >> 2] = d2[r6 + 32 >> 2];
                        break f;
                      }
                      if (!ir2(b3[S3 + 4 >> 2]))
                        break r;
                      if (!ir2(b3[P3 + 4 >> 2]))
                        break r;
                      if (!tr2(b3[b3[P3 + 4 >> 2] + 12 >> 2], S3))
                        break r;
                      if (a5 = b3[S3 + 16 >> 2], d2[a5 + 28 >> 2] = d2[u3 + 84 >> 2], d2[a5 + 32 >> 2] = d2[u3 + 88 >> 2], c3 = or2(b3[r6 + 68 >> 2], a5), a5 = b3[S3 + 16 >> 2], b3[a5 + 36 >> 2] = c3, 2147483647 == (0 | c3))
                        break e;
                      b3[u3 + 112 >> 2] = b3[C3 + 12 >> 2], b3[u3 + 116 >> 2] = b3[I3 + 12 >> 2], b3[u3 + 120 >> 2] = b3[M3 + 12 >> 2], b3[u3 + 124 >> 2] = b3[_3 + 12 >> 2], b3[a5 + 24 >> 2] = 0, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, f3 = d2[a5 + 28 >> 2], w3 = (i5 = m2(d2[I3 + 28 >> 2] - f3)) < m2(0) ? m2(-i5) : i5, i5 = d2[a5 + 32 >> 2], t4 = m2(d2[I3 + 32 >> 2] - i5), o5 = m2(w3 + (t4 < m2(0) ? m2(-t4) : t4)), w3 = (t4 = m2(d2[C3 + 28 >> 2] - f3)) < m2(0) ? m2(-t4) : t4, t4 = m2(d2[C3 + 32 >> 2] - i5), s3 = m2(w3 + (t4 < m2(0) ? m2(-t4) : t4)), x3 = +m2(s3 + o5), t4 = m2(0.5 * +o5 / x3), d2[u3 + 96 >> 2] = t4, o5 = m2(0.5 * +s3 / x3), d2[u3 + 100 >> 2] = o5, s3 = m2(m2(m2(d2[C3 + 16 >> 2] * t4) + m2(d2[I3 + 16 >> 2] * o5)) + m2(0)), d2[a5 + 16 >> 2] = s3, y3 = m2(m2(m2(d2[C3 + 20 >> 2] * t4) + m2(d2[I3 + 20 >> 2] * o5)) + m2(0)), d2[a5 + 20 >> 2] = y3, o5 = m2(m2(m2(d2[C3 + 24 >> 2] * t4) + m2(d2[I3 + 24 >> 2] * o5)) + m2(0)), d2[a5 + 24 >> 2] = o5, w3 = (t4 = m2(d2[M3 + 28 >> 2] - f3)) < m2(0) ? m2(-t4) : t4, t4 = m2(d2[M3 + 32 >> 2] - i5), t4 = m2(w3 + (t4 < m2(0) ? m2(-t4) : t4)), w3 = (f3 = m2(d2[_3 + 28 >> 2] - f3)) < m2(0) ? m2(-f3) : f3, f3 = m2(d2[_3 + 32 >> 2] - i5), f3 = m2(w3 + (f3 < m2(0) ? m2(-f3) : f3)), x3 = +m2(t4 + f3), f3 = m2(0.5 * +f3 / x3), d2[u3 + 104 >> 2] = f3, i5 = m2(0.5 * +t4 / x3), d2[u3 + 108 >> 2] = i5, t4 = m2(s3 + m2(m2(d2[M3 + 16 >> 2] * f3) + m2(d2[_3 + 16 >> 2] * i5))), d2[a5 + 16 >> 2] = t4, s3 = m2(y3 + m2(m2(d2[M3 + 20 >> 2] * f3) + m2(d2[_3 + 20 >> 2] * i5))), d2[a5 + 20 >> 2] = s3, f3 = m2(o5 + m2(m2(d2[M3 + 24 >> 2] * f3) + m2(d2[_3 + 24 >> 2] * i5))), d2[a5 + 24 >> 2] = f3, d2[u3 + 140 >> 2] = f3, d2[u3 + 136 >> 2] = s3, d2[u3 + 132 >> 2] = t4, b3[a5 + 12 >> 2] = 0, a5 = a5 + 12 | 0, 8 == (0 | (c3 = b3[r6 + 1736 >> 2])) ? be[b3[r6 + 76 >> 2]](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, a5) : be[0 | c3](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, a5, b3[r6 + 1896 >> 2]), b3[a5 >> 2] | k3[r6 + 60 | 0] || (11 == (0 | (a5 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100156) : be[0 | a5](100156, b3[r6 + 1896 >> 2]), n4[r6 + 60 | 0] = 1), n4[L3 + 14 | 0] = 1, n4[e5 + 14 | 0] = 1, n4[b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1;
                    } else
                      G2(r6, e5);
                  }
                return U2 = u3 + 144 | 0, B3;
              }
              Kr(b3[r6 + 68 >> 2]), b3[r6 + 68 >> 2] = 0;
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function Q2(r6) {
            r6 |= 0;
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, k4 = 0, u3 = 0, c3 = m2(0), s3 = m2(0), A3 = 0, l4 = 0, v3 = 0, h3 = 0, w3 = 0, y3 = 0, g3 = 0, C3 = 0, R3 = 0, M3 = 0;
            U2 = t4 = U2 - 48 | 0, n4[r6 + 60 | 0] = 0;
            r: {
              if (f3 = b3[r6 + 8 >> 2], (0 | (e5 = b3[f3 + 64 >> 2])) != (0 | (k4 = f3 - -64 | 0)))
                for (; ; ) {
                  f3 = b3[e5 + 12 >> 2], a5 = b3[e5 >> 2], o5 = b3[e5 + 16 >> 2], i5 = b3[b3[e5 + 4 >> 2] + 16 >> 2];
                  e: {
                    if (!(d2[o5 + 28 >> 2] != d2[i5 + 28 >> 2] | d2[o5 + 32 >> 2] != d2[i5 + 32 >> 2] | b3[f3 + 12 >> 2] == (0 | e5))) {
                      b3[t4 + 24 >> 2] = 0, b3[t4 + 28 >> 2] = 0, b3[t4 + 16 >> 2] = 0, b3[t4 + 20 >> 2] = 0, i5 = b3[287], b3[t4 + 8 >> 2] = b3[286], b3[t4 + 12 >> 2] = i5, i5 = b3[285], b3[t4 >> 2] = b3[284], b3[t4 + 4 >> 2] = i5, i5 = b3[f3 + 16 >> 2], b3[t4 + 16 >> 2] = b3[i5 + 12 >> 2], b3[t4 + 20 >> 2] = b3[o5 + 12 >> 2], d2[t4 + 36 >> 2] = d2[i5 + 16 >> 2], d2[t4 + 40 >> 2] = d2[i5 + 20 >> 2], d2[t4 + 44 >> 2] = d2[i5 + 24 >> 2], b3[i5 + 12 >> 2] = 0, i5 = i5 + 12 | 0, 8 == (0 | (o5 = b3[r6 + 1736 >> 2])) ? be[b3[r6 + 76 >> 2]](t4 + 36 | 0, t4 + 16 | 0, t4, i5) : be[0 | o5](t4 + 36 | 0, t4 + 16 | 0, t4, i5, b3[r6 + 1896 >> 2]), b3[i5 >> 2] || (b3[i5 >> 2] = b3[t4 + 16 >> 2]);
                      f: {
                        if (tr2(f3, e5)) {
                          if (!rr2(e5))
                            break f;
                          i5 = b3[f3 + 12 >> 2];
                          break e;
                        }
                        break r;
                      }
                      break r;
                    }
                    i5 = f3, f3 = e5;
                  }
                  if (b3[i5 + 12 >> 2] == (0 | f3)) {
                    if ((0 | f3) != (0 | i5) && (a5 = b3[a5 + 4 >> 2] != (0 | i5) && (0 | i5) != (0 | a5) ? a5 : b3[a5 >> 2], !rr2(i5)))
                      break r;
                    if (e5 = (0 | f3) == (0 | a5) | b3[a5 + 4 >> 2] == (0 | f3) ? b3[a5 >> 2] : a5, !rr2(f3))
                      break r;
                  } else
                    e5 = a5;
                  if ((0 | e5) == (0 | k4))
                    break;
                }
              a5 = r6, (e5 = O2(28)) ? (i5 = e5, (f3 = O2(28)) ? (b3[f3 + 8 >> 2] = 0, b3[f3 + 12 >> 2] = 32, o5 = O2(132), b3[f3 >> 2] = o5, o5 ? (k4 = O2(264), b3[f3 + 4 >> 2] = k4, k4 ? (b3[f3 + 24 >> 2] = 9, b3[f3 + 16 >> 2] = 0, b3[f3 + 20 >> 2] = 0, b3[o5 + 4 >> 2] = 1, b3[k4 + 8 >> 2] = 0) : (Y2(o5), Y2(f3), f3 = 0)) : (Y2(f3), f3 = 0)) : f3 = 0, b3[i5 >> 2] = f3, f3 ? (i5 = O2(128), b3[e5 + 4 >> 2] = i5, i5 ? (b3[e5 + 24 >> 2] = 9, b3[e5 + 20 >> 2] = 0, b3[e5 + 12 >> 2] = 0, b3[e5 + 16 >> 2] = 32) : (Y2(b3[f3 + 4 >> 2]), Y2(b3[f3 >> 2]), Y2(f3), Y2(e5), e5 = 0)) : (Y2(e5), e5 = 0)) : e5 = 0, v3 = e5, b3[a5 + 68 >> 2] = e5;
              e:
                if (e5) {
                  f: {
                    f3 = b3[r6 + 8 >> 2];
                    i: {
                      if ((0 | (e5 = b3[f3 >> 2])) != (0 | f3))
                        for (; ; ) {
                          if (a5 = or2(v3, e5), b3[e5 + 36 >> 2] = a5, 2147483647 == (0 | a5))
                            break i;
                          if ((0 | f3) == (0 | (e5 = b3[e5 >> 2])))
                            break;
                        }
                      if (U2 = y3 = U2 - 400 | 0, a5 = O2(4 + (e5 = (w3 = b3[v3 + 12 >> 2]) << 2) | 0), b3[v3 + 8 >> 2] = a5, U2 = y3 + 400 | 0, a5) {
                        if (!((o5 = (e5 + a5 | 0) - 4 | 0) >>> 0 < a5 >>> 0)) {
                          if (f3 = b3[v3 + 4 >> 2], i5 = 1 + ((k4 = (w3 << 2) - 4 | 0) >>> 2 | 0) & 7)
                            for (e5 = a5; b3[e5 >> 2] = f3, e5 = e5 + 4 | 0, f3 = f3 + 4 | 0, i5 = i5 - 1 | 0; )
                              ;
                          else
                            e5 = a5;
                          if (!(k4 >>> 0 < 28))
                            for (; b3[e5 >> 2] = f3, b3[e5 + 28 >> 2] = f3 + 28, b3[e5 + 24 >> 2] = f3 + 24, b3[e5 + 20 >> 2] = f3 + 20, b3[e5 + 16 >> 2] = f3 + 16, b3[e5 + 12 >> 2] = f3 + 12, b3[e5 + 8 >> 2] = f3 + 8, b3[e5 + 4 >> 2] = f3 + 4, f3 = f3 + 32 | 0, o5 >>> 0 >= (e5 = e5 + 32 | 0) >>> 0; )
                              ;
                        }
                        for (b3[y3 + 4 >> 2] = o5, b3[y3 >> 2] = a5, g3 = 2016473283, u3 = 1; ; ) {
                          if ((A3 = b3[((u3 << 3) + y3 | 0) - 4 >> 2]) >>> 0 > (k4 = b3[(h3 << 3) + y3 >> 2]) + 40 >>> 0)
                            for (; ; ) {
                              for (g3 = p2(g3, 1539415821) + 1 | 0, R3 = b3[(e5 = ((g3 >>> 0) % (1 + (A3 - k4 >> 2) >>> 0) << 2) + k4 | 0) >> 2], b3[e5 >> 2] = b3[k4 >> 2], b3[k4 >> 2] = R3, i5 = A3 + 4 | 0, f3 = k4 - 4 | 0; ; ) {
                                a5 = i5, l4 = b3[f3 + 4 >> 2], o5 = f3, e5 = f3 + 4 | 0, i5 = b3[l4 >> 2], c3 = d2[i5 + 28 >> 2], C3 = b3[R3 >> 2], u3 = e5;
                                a:
                                  if (!(c3 < (s3 = d2[C3 + 28 >> 2]))) {
                                    for (; ; ) {
                                      if (f3 = e5, u3 = e5, d2[i5 + 32 >> 2] <= d2[C3 + 32 >> 2] && c3 == s3)
                                        break a;
                                      if (e5 = f3 + 4 | 0, o5 = f3, l4 = b3[f3 + 4 >> 2], i5 = b3[l4 >> 2], s3 > (c3 = d2[i5 + 28 >> 2]))
                                        break;
                                    }
                                    u3 = e5;
                                  }
                                f3 = u3, u3 = b3[(i5 = a5 - 4 | 0) >> 2], e5 = b3[u3 >> 2];
                                a:
                                  if (!(s3 < (c3 = d2[e5 + 28 >> 2])))
                                    for (; ; ) {
                                      if (!(!(d2[C3 + 32 >> 2] <= d2[e5 + 32 >> 2]) | c3 != s3))
                                        break a;
                                      if (a5 = i5, u3 = b3[(i5 = i5 - 4 | 0) >> 2], e5 = b3[u3 >> 2], s3 < (c3 = d2[e5 + 28 >> 2]))
                                        break;
                                    }
                                if (b3[f3 >> 2] = u3, b3[i5 >> 2] = l4, !(f3 >>> 0 < i5 >>> 0))
                                  break;
                              }
                              if (e5 = b3[f3 >> 2], b3[f3 >> 2] = l4, b3[i5 >> 2] = e5, (f3 - k4 | 0) < (A3 - i5 | 0) ? (e5 = a5, i5 = A3, A3 = o5) : (e5 = k4, i5 = o5, k4 = a5), b3[4 + (f3 = (h3 << 3) + y3 | 0) >> 2] = i5, b3[f3 >> 2] = e5, h3 = h3 + 1 | 0, !(k4 + 40 >>> 0 < A3 >>> 0))
                                break;
                            }
                          if (u3 = h3, A3 >>> 0 >= (a5 = k4 + 4 | 0) >>> 0)
                            for (; ; ) {
                              i5 = b3[a5 >> 2], f3 = e5 = a5;
                              a:
                                if (!(k4 >>> 0 >= e5 >>> 0))
                                  for (; ; ) {
                                    if (o5 = b3[i5 >> 2], c3 = d2[o5 + 28 >> 2], h3 = b3[(f3 = e5 - 4 | 0) >> 2], l4 = b3[h3 >> 2], c3 < (s3 = d2[l4 + 28 >> 2])) {
                                      f3 = e5;
                                      break a;
                                    }
                                    if (!(!(d2[o5 + 32 >> 2] <= d2[l4 + 32 >> 2]) | c3 != s3)) {
                                      f3 = e5;
                                      break a;
                                    }
                                    if (b3[e5 >> 2] = h3, !(k4 >>> 0 < (e5 = f3) >>> 0))
                                      break;
                                  }
                              if (b3[f3 >> 2] = i5, !(A3 >>> 0 >= (a5 = a5 + 4 | 0) >>> 0))
                                break;
                            }
                          if (h3 = u3 - 1 | 0, !((0 | u3) >= 1))
                            break;
                        }
                        if (b3[v3 + 20 >> 2] = 1, b3[v3 + 16 >> 2] = w3, v3 = b3[v3 >> 2], (0 | (a5 = b3[v3 + 8 >> 2])) >= 1)
                          for (A3 = b3[v3 + 4 >> 2], k4 = b3[v3 >> 2], f3 = a5; ; ) {
                            for (i5 = f3, u3 = A3 + ((h3 = b3[k4 + (f3 << 2) >> 2]) << 3) | 0, e5 = f3; (0 | a5) <= (0 | (f3 = e5 << 1)) || (l4 = b3[A3 + (b3[k4 + ((o5 = 1 | f3) << 2) >> 2] << 3) >> 2], c3 = d2[l4 + 28 >> 2], w3 = b3[A3 + (b3[k4 + (f3 << 2) >> 2] << 3) >> 2], s3 = d2[w3 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[w3 + 32 >> 2]) | c3 != s3 && !(c3 < s3) || (f3 = o5)), !((0 | f3) > (0 | a5) || (o5 = b3[u3 >> 2], c3 = d2[o5 + 28 >> 2], l4 = b3[k4 + (f3 << 2) >> 2], g3 = b3[(w3 = A3 + (l4 << 3) | 0) >> 2], c3 < (s3 = d2[g3 + 28 >> 2]) | (d2[o5 + 32 >> 2] <= d2[g3 + 32 >> 2] ? c3 == s3 : 0))); )
                              b3[k4 + (e5 << 2) >> 2] = l4, b3[w3 + 4 >> 2] = e5, e5 = f3;
                            if (b3[k4 + (e5 << 2) >> 2] = h3, b3[u3 + 4 >> 2] = e5, f3 = i5 - 1 | 0, !((0 | i5) > 1))
                              break;
                          }
                        b3[v3 + 20 >> 2] = 1, e5 = 1;
                      } else
                        e5 = 0;
                      if (e5)
                        break f;
                    }
                    Kr(b3[r6 + 68 >> 2]), b3[r6 + 68 >> 2] = 0;
                    break e;
                  }
                  if (f3 = r6 - -64 | 0, (e5 = O2(20)) ? (b3[e5 + 16 >> 2] = 10, b3[e5 + 12 >> 2] = r6, b3[e5 >> 2] = 0, b3[e5 + 8 >> 2] = e5, b3[e5 + 4 >> 2] = e5) : e5 = 0, b3[f3 >> 2] = e5, !e5)
                    break r;
                  if (Sr2(r6, m2(-3999999973526325e22)), Sr2(r6, m2(3999999973526325e22)), f3 = Ir2(b3[r6 + 68 >> 2]))
                    for (; ; ) {
                      f:
                        if (e5 = xr2(b3[r6 + 68 >> 2]))
                          for (; ; ) {
                            if (d2[e5 + 28 >> 2] != d2[f3 + 28 >> 2] | d2[e5 + 32 >> 2] != d2[f3 + 32 >> 2])
                              break f;
                            if (a5 = b3[Ir2(b3[r6 + 68 >> 2]) + 8 >> 2], i5 = b3[f3 + 8 >> 2], b3[t4 + 24 >> 2] = 0, b3[t4 + 28 >> 2] = 0, b3[t4 + 16 >> 2] = 0, b3[t4 + 20 >> 2] = 0, e5 = b3[287], b3[t4 + 8 >> 2] = b3[286], b3[t4 + 12 >> 2] = e5, e5 = b3[285], b3[t4 >> 2] = b3[284], b3[t4 + 4 >> 2] = e5, e5 = b3[i5 + 16 >> 2], b3[t4 + 16 >> 2] = b3[e5 + 12 >> 2], b3[t4 + 20 >> 2] = b3[b3[a5 + 16 >> 2] + 12 >> 2], d2[t4 + 36 >> 2] = d2[e5 + 16 >> 2], d2[t4 + 40 >> 2] = d2[e5 + 20 >> 2], d2[t4 + 44 >> 2] = d2[e5 + 24 >> 2], b3[e5 + 12 >> 2] = 0, e5 = e5 + 12 | 0, 8 == (0 | (o5 = b3[r6 + 1736 >> 2])) ? be[b3[r6 + 76 >> 2]](t4 + 36 | 0, t4 + 16 | 0, t4, e5) : be[0 | o5](t4 + 36 | 0, t4 + 16 | 0, t4, e5, b3[r6 + 1896 >> 2]), b3[e5 >> 2] || (b3[e5 >> 2] = b3[t4 + 16 >> 2]), !tr2(i5, a5))
                              break r;
                            if (!(e5 = xr2(b3[r6 + 68 >> 2])))
                              break;
                          }
                      if (z2(r6, f3), !(f3 = Ir2(b3[r6 + 68 >> 2])))
                        break;
                    }
                  if (e5 = b3[b3[b3[(a5 = r6 - -64 | 0) >> 2] + 4 >> 2] >> 2], f3 = b3[e5 >> 2], b3[r6 + 72 >> 2] = b3[f3 + 16 >> 2], b3[f3 + 24 >> 2] = 0, Vr(b3[e5 + 4 >> 2]), Y2(e5), f3 = b3[a5 >> 2], e5 = b3[b3[f3 + 4 >> 2] >> 2])
                    for (; b3[b3[e5 >> 2] + 24 >> 2] = 0, Vr(b3[e5 + 4 >> 2]), Y2(e5), f3 = b3[a5 >> 2], e5 = b3[b3[f3 + 4 >> 2] >> 2]; )
                      ;
                  if ((0 | f3) != (0 | (e5 = b3[f3 + 4 >> 2])))
                    for (; Y2(e5), (0 | f3) != (0 | (e5 = b3[e5 + 4 >> 2])); )
                      ;
                  if (Y2(f3), Kr(b3[r6 + 68 >> 2]), M3 = 1, r6 = b3[r6 + 8 >> 2], (0 | (f3 = b3[r6 + 40 >> 2])) != (0 | (a5 = r6 + 40 | 0)))
                    for (; ; ) {
                      if (r6 = b3[f3 + 8 >> 2], f3 = b3[f3 >> 2], (0 | r6) == b3[b3[r6 + 12 >> 2] + 12 >> 2] && (e5 = b3[r6 + 8 >> 2], b3[e5 + 28 >> 2] = b3[e5 + 28 >> 2] + b3[r6 + 28 >> 2], e5 = b3[e5 + 4 >> 2], b3[e5 + 28 >> 2] = b3[e5 + 28 >> 2] + b3[b3[r6 + 4 >> 2] + 28 >> 2], !rr2(r6))) {
                        M3 = 0;
                        break e;
                      }
                      if ((0 | f3) == (0 | a5))
                        break;
                    }
                }
              return U2 = t4 + 48 | 0, 0 | M3;
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function W2(r6, e5, f3, i5, a5, t4) {
            var u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, d3 = 0, m3 = 0, w3 = 0, y3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0, _3 = 0;
            U2 = c3 = U2 - 80 | 0, b3[c3 + 76 >> 2] = e5, M3 = c3 + 55 | 0, C3 = c3 + 56 | 0, e5 = 0;
            r: {
              e:
                for (; ; ) {
                  (0 | w3) < 0 || ((2147483647 - w3 | 0) < (0 | e5) ? (b3[613] = 61, w3 = -1) : w3 = e5 + w3 | 0);
                  f: {
                    i: {
                      a: {
                        if (l4 = b3[c3 + 76 >> 2], u3 = k3[0 | (e5 = l4)])
                          for (; ; ) {
                            n: {
                              t:
                                if (u3 &= 255) {
                                  if (37 != (0 | u3))
                                    break n;
                                  for (u3 = e5; ; ) {
                                    if (37 != k3[e5 + 1 | 0])
                                      break t;
                                    if (s3 = e5 + 2 | 0, b3[c3 + 76 >> 2] = s3, u3 = u3 + 1 | 0, v3 = k3[e5 + 2 | 0], e5 = s3, 37 != (0 | v3))
                                      break;
                                  }
                                } else
                                  u3 = e5;
                              if (e5 = u3 - l4 | 0, r6 && yr2(r6, l4, e5), e5)
                                continue e;
                              g3 = -1, u3 = 1, s3 = c3, e5 = b3[c3 + 76 >> 2], 36 != k3[e5 + 2 | 0] | n4[b3[c3 + 76 >> 2] + 1 | 0] - 48 >>> 0 >= 10 || (g3 = n4[e5 + 1 | 0] - 48 | 0, R3 = 1, u3 = 3), e5 = u3 + e5 | 0, b3[s3 + 76 >> 2] = e5, y3 = 0;
                              t:
                                if ((s3 = (A3 = n4[0 | e5]) - 32 | 0) >>> 0 > 31)
                                  u3 = e5;
                                else if (u3 = e5, 75913 & (s3 = 1 << s3))
                                  for (; ; ) {
                                    if (u3 = e5 + 1 | 0, b3[c3 + 76 >> 2] = u3, y3 |= s3, (s3 = (A3 = n4[e5 + 1 | 0]) - 32 | 0) >>> 0 >= 32)
                                      break t;
                                    if (e5 = u3, !(75913 & (s3 = 1 << s3)))
                                      break;
                                  }
                              t:
                                if (42 != (0 | A3)) {
                                  if ((0 | (d3 = Wr(c3 + 76 | 0))) < 0)
                                    break a;
                                  e5 = b3[c3 + 76 >> 2];
                                } else {
                                  if (s3 = c3, n4[u3 + 1 | 0] - 48 >>> 0 >= 10 || (e5 = b3[c3 + 76 >> 2], 36 != k3[e5 + 2 | 0])) {
                                    if (R3)
                                      break a;
                                    R3 = 0, d3 = 0, r6 && (e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, d3 = b3[e5 >> 2]), e5 = b3[c3 + 76 >> 2] + 1 | 0;
                                  } else
                                    b3[((n4[e5 + 1 | 0] << 2) + a5 | 0) - 192 >> 2] = 10, d3 = b3[((n4[e5 + 1 | 0] << 3) + i5 | 0) - 384 >> 2], R3 = 1, e5 = e5 + 3 | 0;
                                  if (b3[s3 + 76 >> 2] = e5, (0 | d3) > -1)
                                    break t;
                                  d3 = 0 - d3 | 0, y3 |= 8192;
                                }
                              v3 = -1;
                              t:
                                if (46 == k3[0 | e5])
                                  if (42 != k3[e5 + 1 | 0])
                                    b3[c3 + 76 >> 2] = e5 + 1, v3 = Wr(c3 + 76 | 0), e5 = b3[c3 + 76 >> 2];
                                  else {
                                    if (!(n4[e5 + 2 | 0] - 48 >>> 0 >= 10) && (e5 = b3[c3 + 76 >> 2], 36 == k3[e5 + 3 | 0])) {
                                      b3[((n4[e5 + 2 | 0] << 2) + a5 | 0) - 192 >> 2] = 10, v3 = b3[((n4[e5 + 2 | 0] << 3) + i5 | 0) - 384 >> 2], e5 = e5 + 4 | 0, b3[c3 + 76 >> 2] = e5;
                                      break t;
                                    }
                                    if (R3)
                                      break a;
                                    r6 ? (e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, v3 = b3[e5 >> 2]) : v3 = 0, e5 = b3[c3 + 76 >> 2] + 2 | 0, b3[c3 + 76 >> 2] = e5;
                                  }
                              for (u3 = 0; ; ) {
                                if (E3 = u3, m3 = -1, n4[0 | e5] - 65 >>> 0 > 57)
                                  break r;
                                if (A3 = e5 + 1 | 0, b3[c3 + 76 >> 2] = A3, u3 = n4[0 | e5], e5 = A3, !((u3 = k3[1103 + (u3 + p2(E3, 58) | 0) | 0]) - 1 >>> 0 < 8))
                                  break;
                              }
                              t: {
                                o: {
                                  if (19 != (0 | u3)) {
                                    if (!u3)
                                      break r;
                                    if ((0 | g3) >= 0) {
                                      b3[(g3 << 2) + a5 >> 2] = u3, u3 = b3[4 + (e5 = (g3 << 3) + i5 | 0) >> 2], b3[c3 + 64 >> 2] = b3[e5 >> 2], b3[c3 + 68 >> 2] = u3;
                                      break o;
                                    }
                                    if (!r6)
                                      break f;
                                    hr2(c3 - -64 | 0, u3, f3), A3 = b3[c3 + 76 >> 2];
                                    break t;
                                  }
                                  if ((0 | g3) > -1)
                                    break r;
                                }
                                if (e5 = 0, !r6)
                                  continue e;
                              }
                              s3 = -65537 & y3, u3 = 8192 & y3 ? s3 : y3, m3 = 0, g3 = 1024, y3 = C3;
                              t: {
                                o: {
                                  b: {
                                    k: {
                                      u: {
                                        c: {
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      p: {
                                                        m: {
                                                          w: {
                                                            switch (e5 = n4[A3 - 1 | 0], (e5 = E3 && 3 == (15 & e5) ? -33 & e5 : e5) - 88 | 0) {
                                                              case 11:
                                                                break t;
                                                              case 9:
                                                              case 13:
                                                              case 14:
                                                              case 15:
                                                                break o;
                                                              case 27:
                                                                break s;
                                                              case 12:
                                                              case 17:
                                                                break v;
                                                              case 23:
                                                                break d;
                                                              case 0:
                                                              case 32:
                                                                break h;
                                                              case 24:
                                                                break p;
                                                              case 22:
                                                                break m;
                                                              case 29:
                                                                break w;
                                                              case 1:
                                                              case 2:
                                                              case 3:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                              case 7:
                                                              case 8:
                                                              case 10:
                                                              case 16:
                                                              case 18:
                                                              case 19:
                                                              case 20:
                                                              case 21:
                                                              case 25:
                                                              case 26:
                                                              case 28:
                                                              case 30:
                                                              case 31:
                                                                break i;
                                                            }
                                                            switch (e5 - 65 | 0) {
                                                              case 0:
                                                              case 4:
                                                              case 5:
                                                              case 6:
                                                                break o;
                                                              case 2:
                                                                break u;
                                                              case 1:
                                                              case 3:
                                                                break i;
                                                            }
                                                            if (83 == (0 | e5))
                                                              break c;
                                                            break i;
                                                          }
                                                          A3 = b3[c3 + 64 >> 2], s3 = b3[c3 + 68 >> 2], g3 = 1024;
                                                          break l;
                                                        }
                                                        e5 = 0;
                                                        m:
                                                          switch (255 & E3) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              b3[b3[c3 + 64 >> 2] >> 2] = w3;
                                                              continue e;
                                                            case 2:
                                                              u3 = b3[c3 + 64 >> 2], b3[u3 >> 2] = w3, b3[u3 + 4 >> 2] = w3 >> 31;
                                                              continue e;
                                                            case 3:
                                                              o4[b3[c3 + 64 >> 2] >> 1] = w3;
                                                              continue e;
                                                            case 4:
                                                              n4[b3[c3 + 64 >> 2]] = w3;
                                                              continue e;
                                                            case 7:
                                                              break m;
                                                            default:
                                                              continue e;
                                                          }
                                                        u3 = b3[c3 + 64 >> 2], b3[u3 >> 2] = w3, b3[u3 + 4 >> 2] = w3 >> 31;
                                                        continue e;
                                                      }
                                                      v3 = v3 >>> 0 > 8 ? v3 : 8, u3 |= 8, e5 = 120;
                                                    }
                                                    if (l4 = C3, I3 = 32 & e5, (s3 = E3 = b3[c3 + 68 >> 2]) | (A3 = b3[c3 + 64 >> 2]))
                                                      for (; n4[0 | (l4 = l4 - 1 | 0)] = I3 | k3[1632 + (15 & A3) | 0], _3 = !s3 & A3 >>> 0 > 15 | 0 != (0 | s3), E3 = s3, s3 = s3 >>> 4 | 0, A3 = (15 & E3) << 28 | A3 >>> 4, _3; )
                                                        ;
                                                    if (!(b3[c3 + 64 >> 2] | b3[c3 + 68 >> 2]) | !(8 & u3))
                                                      break A;
                                                    g3 = 1024 + (e5 >>> 4 | 0) | 0, m3 = 2;
                                                    break A;
                                                  }
                                                  if (e5 = C3, (s3 = l4 = b3[c3 + 68 >> 2]) | (A3 = b3[c3 + 64 >> 2]))
                                                    for (; n4[0 | (e5 = e5 - 1 | 0)] = 7 & A3 | 48, E3 = !s3 & A3 >>> 0 > 7 | 0 != (0 | s3), l4 = s3, s3 = s3 >>> 3 | 0, A3 = (7 & l4) << 29 | A3 >>> 3, E3; )
                                                      ;
                                                  if (l4 = e5, !(8 & u3))
                                                    break A;
                                                  v3 = (0 | (e5 = C3 - l4 | 0)) < (0 | v3) ? v3 : e5 + 1 | 0;
                                                  break A;
                                                }
                                                s3 = e5 = b3[c3 + 68 >> 2], A3 = b3[c3 + 64 >> 2], (0 | e5) < -1 || (0 | e5) <= -1 ? (s3 = 0 - (s3 + (0 != (0 | A3)) | 0) | 0, A3 = 0 - A3 | 0, b3[c3 + 64 >> 2] = A3, b3[c3 + 68 >> 2] = s3, m3 = 1, g3 = 1024) : 2048 & u3 ? (m3 = 1, g3 = 1025) : g3 = (m3 = 1 & u3) ? 1026 : 1024;
                                              }
                                              l4 = jr2(A3, s3, C3);
                                            }
                                            if (u3 = (0 | v3) > -1 ? -65537 & u3 : u3, s3 = e5 = b3[c3 + 68 >> 2], !(v3 | 0 != (0 | (A3 = b3[c3 + 64 >> 2])) | 0 != (0 | e5))) {
                                              v3 = 0, l4 = C3;
                                              break i;
                                            }
                                            v3 = (0 | (e5 = !(s3 | A3) + (C3 - l4 | 0) | 0)) < (0 | v3) ? v3 : e5;
                                            break i;
                                          }
                                          y3 = 0 != (0 | (e5 = v3));
                                          s: {
                                            A: {
                                              l: {
                                                v:
                                                  if (!(!(3 & (u3 = l4 = (u3 = b3[c3 + 64 >> 2]) || 1071)) | !e5))
                                                    for (; ; ) {
                                                      if (!k3[0 | u3])
                                                        break l;
                                                      if (y3 = 0 != (0 | (e5 = e5 - 1 | 0)), !(3 & (u3 = u3 + 1 | 0)))
                                                        break v;
                                                      if (!e5)
                                                        break;
                                                    }
                                                if (!y3)
                                                  break A;
                                              }
                                              l:
                                                if (!(!k3[0 | u3] | e5 >>> 0 < 4))
                                                  for (; ; ) {
                                                    if ((-1 ^ (A3 = b3[u3 >> 2])) & A3 - 16843009 & -2139062144)
                                                      break l;
                                                    if (u3 = u3 + 4 | 0, !((e5 = e5 - 4 | 0) >>> 0 > 3))
                                                      break;
                                                  }
                                              if (e5)
                                                for (; ; ) {
                                                  if (A3 = u3, !k3[0 | u3])
                                                    break s;
                                                  if (u3 = u3 + 1 | 0, !(e5 = e5 - 1 | 0))
                                                    break;
                                                }
                                            }
                                            A3 = 0;
                                          }
                                          y3 = A3 || v3 + l4 | 0, u3 = s3, v3 = A3 ? A3 - l4 | 0 : v3;
                                          break i;
                                        }
                                        if (s3 = b3[c3 + 64 >> 2], v3)
                                          break k;
                                        e5 = 0, Dr(r6, 32, d3, 0, u3);
                                        break b;
                                      }
                                      b3[c3 + 12 >> 2] = 0, b3[c3 + 8 >> 2] = b3[c3 + 64 >> 2], b3[c3 + 64 >> 2] = c3 + 8, v3 = -1, s3 = c3 + 8 | 0;
                                    }
                                    e5 = 0;
                                    k: {
                                      for (; ; ) {
                                        if (!(l4 = b3[s3 >> 2]))
                                          break k;
                                        if (!((A3 = (0 | (l4 = Cr2(c3 + 4 | 0, l4))) < 0) | l4 >>> 0 > v3 - e5 >>> 0)) {
                                          if (s3 = s3 + 4 | 0, v3 >>> 0 > (e5 = e5 + l4 | 0) >>> 0)
                                            continue;
                                          break k;
                                        }
                                        break;
                                      }
                                      if (m3 = -1, A3)
                                        break r;
                                    }
                                    if (Dr(r6, 32, d3, e5, u3), e5)
                                      for (s3 = 0, A3 = b3[c3 + 64 >> 2]; ; ) {
                                        if (!(l4 = b3[A3 >> 2]))
                                          break b;
                                        if ((0 | (s3 = (l4 = Cr2(c3 + 4 | 0, l4)) + s3 | 0)) > (0 | e5))
                                          break b;
                                        if (yr2(r6, c3 + 4 | 0, l4), A3 = A3 + 4 | 0, !(e5 >>> 0 > s3 >>> 0))
                                          break;
                                      }
                                    else
                                      e5 = 0;
                                  }
                                  Dr(r6, 32, d3, e5, 8192 ^ u3), e5 = (0 | e5) < (0 | d3) ? d3 : e5;
                                  continue e;
                                }
                                e5 = 0 | be[0 | t4](r6, h2[c3 + 64 >> 3], d3, v3, u3, e5);
                                continue e;
                              }
                              n4[c3 + 55 | 0] = b3[c3 + 64 >> 2], v3 = 1, l4 = M3, u3 = s3;
                              break i;
                            }
                            s3 = e5 + 1 | 0, b3[c3 + 76 >> 2] = s3, u3 = k3[e5 + 1 | 0], e5 = s3;
                          }
                        if (m3 = w3, r6)
                          break r;
                        if (!R3)
                          break f;
                        for (e5 = 1; ; ) {
                          if (r6 = b3[(e5 << 2) + a5 >> 2]) {
                            if (hr2((e5 << 3) + i5 | 0, r6, f3), m3 = 1, 10 != (0 | (e5 = e5 + 1 | 0)))
                              continue;
                            break r;
                          }
                          break;
                        }
                        if (m3 = 1, e5 >>> 0 >= 10)
                          break r;
                        for (; ; ) {
                          if (b3[(e5 << 2) + a5 >> 2])
                            break a;
                          if (10 == (0 | (e5 = e5 + 1 | 0)))
                            break;
                        }
                        break r;
                      }
                      m3 = -1;
                      break r;
                    }
                    Dr(r6, 32, e5 = (0 | (s3 = (v3 = (0 | (A3 = y3 - l4 | 0)) > (0 | v3) ? A3 : v3) + m3 | 0)) > (0 | d3) ? s3 : d3, s3, u3), yr2(r6, g3, m3), Dr(r6, 48, e5, s3, 65536 ^ u3), Dr(r6, 48, v3, A3, 0), yr2(r6, l4, A3), Dr(r6, 32, e5, s3, 8192 ^ u3);
                    continue;
                  }
                  break;
                }
              m3 = 0;
            }
            return U2 = c3 + 80 | 0, m3;
          }
          function q2(r6, e5, f3, i5, a5, t4) {
            r6 |= 0, e5 = +e5, f3 |= 0, i5 |= 0, a5 |= 0, t4 |= 0;
            var o5 = 0, c3 = 0, s3 = 0, l4 = 0, v3 = 0, d3 = 0, h3 = 0, m3 = 0, y3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0, _3 = 0, S3 = 0, P3 = 0, x3 = 0, L3 = 0, j3 = 0;
            U2 = l4 = U2 - 560 | 0, b3[l4 + 44 >> 2] = 0, A2(+e5), o5 = 0 | u2(1), u2(0), (0 | o5) < -1 || (0 | o5) <= -1 ? (I3 = 1, _3 = 1034, A2(+(e5 = -e5)), o5 = 0 | u2(1), u2(0)) : 2048 & a5 ? (I3 = 1, _3 = 1037) : (_3 = (I3 = 1 & a5) ? 1040 : 1035, j3 = !I3);
            r:
              if (2146435072 != (2146435072 & o5)) {
                R3 = l4 + 16 | 0;
                e: {
                  f: {
                    i: {
                      if (e5 = Tr2(e5, l4 + 44 | 0), 0 != (e5 += e5)) {
                        if (o5 = b3[l4 + 44 >> 2], b3[l4 + 44 >> 2] = o5 - 1, 97 != (0 | (S3 = 32 | t4)))
                          break i;
                        break e;
                      }
                      if (97 == (0 | (S3 = 32 | t4)))
                        break e;
                      v3 = b3[l4 + 44 >> 2], h3 = (0 | i5) < 0 ? 6 : i5;
                      break f;
                    }
                    v3 = o5 - 29 | 0, b3[l4 + 44 >> 2] = v3, e5 *= 268435456, h3 = (0 | i5) < 0 ? 6 : i5;
                  }
                  for (c3 = E3 = (0 | v3) < 0 ? l4 + 48 | 0 : l4 + 336 | 0; o5 = e5 < 4294967296 & e5 >= 0 ? ~~e5 >>> 0 : 0, b3[(i5 = c3) >> 2] = o5, c3 = c3 + 4 | 0, 0 != (e5 = 1e9 * (e5 - +(o5 >>> 0))); )
                    ;
                  if ((0 | v3) < 1)
                    i5 = v3, o5 = c3, s3 = E3;
                  else
                    for (s3 = E3, i5 = v3; ; ) {
                      if (C3 = (0 | i5) < 29 ? i5 : 29, !(s3 >>> 0 > (o5 = c3 - 4 | 0) >>> 0)) {
                        for (i5 = C3, y3 = 0; g3 = o5, m3 = 0, x3 = y3, y3 = b3[o5 >> 2], d3 = 31 & i5, (63 & i5) >>> 0 >= 32 ? (L3 = y3 << d3, d3 = 0) : (L3 = (1 << d3) - 1 & y3 >>> 32 - d3, d3 = y3 << d3), m3 = m3 + L3 | 0, m3 = d3 >>> 0 > (y3 = x3 + d3 | 0) >>> 0 ? m3 + 1 | 0 : m3, x3 = g3, g3 = Or2(y3 = sr2(d3 = y3, m3, 1e9), F2, 1e9, 0), b3[x3 >> 2] = d3 - g3, s3 >>> 0 <= (o5 = o5 - 4 | 0) >>> 0; )
                          ;
                        (i5 = y3) && (b3[(s3 = s3 - 4 | 0) >> 2] = i5);
                      }
                      for (; s3 >>> 0 < (o5 = c3) >>> 0 && !b3[(c3 = o5 - 4 | 0) >> 2]; )
                        ;
                      if (i5 = b3[l4 + 44 >> 2] - C3 | 0, b3[l4 + 44 >> 2] = i5, c3 = o5, !((0 | i5) > 0))
                        break;
                    }
                  if (c3 = (h3 + 25 | 0) / 9 | 0, (0 | i5) <= -1)
                    for (C3 = c3 + 1 | 0, P3 = 102 == (0 | S3); ; ) {
                      y3 = (0 | i5) < -9 ? 9 : 0 - i5 | 0;
                      f:
                        if (o5 >>> 0 > s3 >>> 0) {
                          for (g3 = 1e9 >>> y3 | 0, d3 = -1 << y3 ^ -1, i5 = 0, c3 = s3; x3 = i5, i5 = b3[c3 >> 2], b3[c3 >> 2] = x3 + (i5 >>> y3 | 0), i5 = p2(g3, i5 & d3), (c3 = c3 + 4 | 0) >>> 0 < o5 >>> 0; )
                            ;
                          if (s3 = b3[s3 >> 2] ? s3 : s3 + 4 | 0, !i5)
                            break f;
                          b3[o5 >> 2] = i5, o5 = o5 + 4 | 0;
                        } else
                          s3 = b3[s3 >> 2] ? s3 : s3 + 4 | 0;
                      if (i5 = b3[l4 + 44 >> 2] + y3 | 0, b3[l4 + 44 >> 2] = i5, o5 = (0 | C3) < o5 - (c3 = P3 ? E3 : s3) >> 2 ? c3 + (C3 << 2) | 0 : o5, !((0 | i5) < 0))
                        break;
                    }
                  if (c3 = 0, !(o5 >>> 0 <= s3 >>> 0 || (c3 = p2(E3 - s3 >> 2, 9), i5 = 10, (d3 = b3[s3 >> 2]) >>> 0 < 10)))
                    for (; c3 = c3 + 1 | 0, d3 >>> 0 >= (i5 = p2(i5, 10)) >>> 0; )
                      ;
                  if ((0 | (i5 = (h3 - (102 == (0 | S3) ? 0 : c3) | 0) - (103 == (0 | S3) & 0 != (0 | h3)) | 0)) < (p2(o5 - E3 >> 2, 9) - 9 | 0)) {
                    if (m3 = (((d3 = (0 | (g3 = i5 + 9216 | 0)) / 9 | 0) << 2) + ((0 | v3) < 0 ? l4 + 48 | 4 : l4 + 340 | 0) | 0) - 4096 | 0, i5 = 10, (0 | (g3 = g3 - p2(d3, 9) | 0)) <= 7)
                      for (; i5 = p2(i5, 10), 8 != (0 | (g3 = g3 + 1 | 0)); )
                        ;
                    if (C3 = (g3 = b3[m3 >> 2]) - p2(i5, d3 = (g3 >>> 0) / (i5 >>> 0) | 0) | 0, ((0 | (v3 = m3 + 4 | 0)) != (0 | o5) || C3) && (e5 = (0 | o5) == (0 | v3) ? 1 : 1.5, M3 = (v3 = i5 >>> 1 | 0) >>> 0 > C3 >>> 0 ? 0.5 : (0 | v3) == (0 | C3) ? e5 : 1.5, e5 = 1 & d3 ? 9007199254740994 : 9007199254740992, 45 != k3[0 | _3] | j3 || (M3 = -M3, e5 = -e5), v3 = g3 - C3 | 0, b3[m3 >> 2] = v3, e5 + M3 != e5)) {
                      if (i5 = i5 + v3 | 0, b3[m3 >> 2] = i5, i5 >>> 0 >= 1e9)
                        for (; b3[m3 >> 2] = 0, (m3 = m3 - 4 | 0) >>> 0 < s3 >>> 0 && (b3[(s3 = s3 - 4 | 0) >> 2] = 0), i5 = b3[m3 >> 2] + 1 | 0, b3[m3 >> 2] = i5, i5 >>> 0 > 999999999; )
                          ;
                      if (c3 = p2(E3 - s3 >> 2, 9), i5 = 10, !((v3 = b3[s3 >> 2]) >>> 0 < 10))
                        for (; c3 = c3 + 1 | 0, v3 >>> 0 >= (i5 = p2(i5, 10)) >>> 0; )
                          ;
                    }
                    o5 = (i5 = m3 + 4 | 0) >>> 0 < o5 >>> 0 ? i5 : o5;
                  }
                  for (; d3 = o5, !(v3 = o5 >>> 0 <= s3 >>> 0) && !b3[(o5 = d3 - 4 | 0) >> 2]; )
                    ;
                  if (103 == (0 | S3)) {
                    if (h3 = ((i5 = (0 | (o5 = h3 || 1)) > (0 | c3) & (0 | c3) > -5) ? -1 ^ c3 : -1) + o5 | 0, t4 = (i5 ? -1 : -2) + t4 | 0, !(y3 = 8 & a5)) {
                      if (o5 = -9, !v3 && (v3 = b3[d3 - 4 >> 2]) && (g3 = 10, o5 = 0, !((v3 >>> 0) % 10 | 0))) {
                        for (; i5 = o5, o5 = o5 + 1 | 0, !((v3 >>> 0) % ((g3 = p2(g3, 10)) >>> 0) | 0); )
                          ;
                        o5 = -1 ^ i5;
                      }
                      i5 = p2(d3 - E3 >> 2, 9), 70 != (-33 & t4) ? (y3 = 0, h3 = (0 | (i5 = (0 | (i5 = ((i5 + c3 | 0) + o5 | 0) - 9 | 0)) > 0 ? i5 : 0)) > (0 | h3) ? h3 : i5) : (y3 = 0, h3 = (0 | (i5 = (0 | (i5 = (i5 + o5 | 0) - 9 | 0)) > 0 ? i5 : 0)) > (0 | h3) ? h3 : i5);
                    }
                  } else
                    y3 = 8 & a5;
                  if (C3 = 0 != (h3 | y3), i5 = r6, v3 = f3, 70 == (0 | (g3 = -33 & t4)))
                    t4 = (0 | c3) > 0 ? c3 : 0;
                  else {
                    if ((R3 - (o5 = jr2((o5 = c3 >> 31) + c3 ^ o5, 0, R3)) | 0) <= 1)
                      for (; n4[0 | (o5 = o5 - 1 | 0)] = 48, (R3 - o5 | 0) < 2; )
                        ;
                    n4[0 | (P3 = o5 - 2 | 0)] = t4, n4[o5 - 1 | 0] = (0 | c3) < 0 ? 45 : 43, t4 = R3 - P3 | 0;
                  }
                  Dr(i5, 32, v3, m3 = 1 + (t4 + (C3 + (h3 + I3 | 0) | 0) | 0) | 0, a5), yr2(r6, _3, I3), Dr(r6, 48, f3, m3, 65536 ^ a5);
                  f: {
                    i: {
                      a: {
                        if (70 == (0 | g3)) {
                          for (i5 = l4 + 16 | 8, c3 = l4 + 16 | 9, s3 = t4 = s3 >>> 0 > E3 >>> 0 ? E3 : s3; ; ) {
                            o5 = jr2(b3[s3 >> 2], 0, c3);
                            n:
                              if ((0 | t4) == (0 | s3))
                                (0 | o5) == (0 | c3) && (n4[l4 + 24 | 0] = 48, o5 = i5);
                              else {
                                if (l4 + 16 >>> 0 >= o5 >>> 0)
                                  break n;
                                for (; n4[0 | (o5 = o5 - 1 | 0)] = 48, l4 + 16 >>> 0 < o5 >>> 0; )
                                  ;
                              }
                            if (yr2(r6, o5, c3 - o5 | 0), !(E3 >>> 0 >= (s3 = s3 + 4 | 0) >>> 0))
                              break;
                          }
                          if (o5 = 0, !C3)
                            break i;
                          if (yr2(r6, 1069, 1), (0 | h3) < 1 | s3 >>> 0 >= d3 >>> 0)
                            break a;
                          for (; ; ) {
                            if ((o5 = jr2(b3[s3 >> 2], 0, c3)) >>> 0 > l4 + 16 >>> 0)
                              for (; n4[0 | (o5 = o5 - 1 | 0)] = 48, l4 + 16 >>> 0 < o5 >>> 0; )
                                ;
                            if (yr2(r6, o5, (0 | h3) < 9 ? h3 : 9), o5 = h3 - 9 | 0, d3 >>> 0 <= (s3 = s3 + 4 | 0) >>> 0)
                              break i;
                            if (i5 = (0 | h3) > 9, h3 = o5, !i5)
                              break;
                          }
                          break i;
                        }
                        n:
                          if (!((0 | h3) < 0))
                            for (t4 = s3 >>> 0 < d3 >>> 0 ? d3 : s3 + 4 | 0, v3 = l4 + 16 | 9, i5 = l4 + 16 | 8, c3 = s3; ; ) {
                              (0 | v3) == (0 | (o5 = jr2(b3[c3 >> 2], 0, v3))) && (n4[l4 + 24 | 0] = 48, o5 = i5);
                              t:
                                if ((0 | c3) == (0 | s3))
                                  yr2(r6, o5, 1), o5 = o5 + 1 | 0, !y3 && (0 | h3) <= 0 || yr2(r6, 1069, 1);
                                else {
                                  if (l4 + 16 >>> 0 >= o5 >>> 0)
                                    break t;
                                  for (; n4[0 | (o5 = o5 - 1 | 0)] = 48, l4 + 16 >>> 0 < o5 >>> 0; )
                                    ;
                                }
                              if (yr2(r6, d3 = o5, (0 | (o5 = v3 - o5 | 0)) < (0 | h3) ? o5 : h3), h3 = h3 - o5 | 0, t4 >>> 0 <= (c3 = c3 + 4 | 0) >>> 0)
                                break n;
                              if (!((0 | h3) > -1))
                                break;
                            }
                        Dr(r6, 48, h3 + 18 | 0, 18, 0), yr2(r6, P3, R3 - P3 | 0);
                        break f;
                      }
                      o5 = h3;
                    }
                    Dr(r6, 48, o5 + 9 | 0, 9, 0);
                  }
                  break r;
                }
                if (E3 = (v3 = 32 & t4) ? _3 + 9 | 0 : _3, !(i5 >>> 0 > 11) && (o5 = 12 - i5 | 0)) {
                  for (M3 = 8; M3 *= 16, o5 = o5 - 1 | 0; )
                    ;
                  e5 = 45 != k3[0 | E3] ? e5 + M3 - M3 : -(M3 + (-e5 - M3));
                }
                for ((0 | R3) == (0 | (o5 = jr2((c3 = (o5 = b3[l4 + 44 >> 2]) >> 31) ^ o5 + c3, 0, R3))) && (n4[l4 + 15 | 0] = 48, o5 = l4 + 15 | 0), h3 = 2 | I3, c3 = b3[l4 + 44 >> 2], n4[0 | (d3 = o5 - 2 | 0)] = t4 + 15, n4[o5 - 1 | 0] = (0 | c3) < 0 ? 45 : 43, o5 = 8 & a5, s3 = l4 + 16 | 0; t4 = s3, y3 = v3, c3 = w2(e5) < 2147483648 ? ~~e5 : -2147483648, n4[0 | s3] = y3 | k3[c3 + 1632 | 0], e5 = 16 * (e5 - +(0 | c3)), !(o5 || (0 | i5) > 0 | 0 != e5) | 1 != ((s3 = t4 + 1 | 0) - (l4 + 16 | 0) | 0) || (n4[t4 + 1 | 0] = 46, s3 = t4 + 2 | 0), 0 != e5; )
                  ;
                Dr(t4 = r6, 32, o5 = f3, m3 = (v3 = !i5 | ((s3 - l4 | 0) - 18 | 0) >= (0 | i5) ? (R3 - (d3 + (l4 + 16 | 0) | 0) | 0) + s3 | 0 : 2 + ((i5 + R3 | 0) - d3 | 0) | 0) + h3 | 0, a5), yr2(r6, E3, h3), Dr(r6, 48, f3, m3, 65536 ^ a5), yr2(r6, l4 + 16 | 0, i5 = s3 - (l4 + 16 | 0) | 0), Dr(r6, 48, v3 - ((t4 = i5) + (i5 = R3 - d3 | 0) | 0) | 0, 0, 0), yr2(r6, d3, i5);
              } else
                Dr(r6, 32, f3, m3 = I3 + 3 | 0, -65537 & a5), yr2(r6, _3, I3), i5 = 32 & t4, yr2(r6, e5 != e5 ? i5 ? 1053 : 1061 : i5 ? 1057 : 1065, 3);
            return Dr(r6, 32, f3, m3, 8192 ^ a5), U2 = l4 + 560 | 0, 0 | ((0 | f3) > (0 | m3) ? f3 : m3);
          }
          function z2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = m2(0), c3 = 0, s3 = m2(0), A3 = 0, l4 = 0, v3 = 0;
            U2 = o5 = U2 + -64 | 0, b3[r6 + 72 >> 2] = e5, f3 = a5 = b3[e5 + 8 >> 2];
            r: {
              e: {
                f: {
                  for (; ; ) {
                    if (i5 = b3[f3 + 24 >> 2])
                      break f;
                    if ((0 | a5) == (0 | (f3 = b3[f3 + 8 >> 2])))
                      break;
                  }
                  for (b3[o5 >> 2] = b3[a5 + 4 >> 2], a5 = f3 = b3[r6 - -64 >> 2]; a5 = b3[a5 + 4 >> 2], (i5 = b3[a5 >> 2]) && !(0 | be[b3[f3 + 16 >> 2]](b3[f3 + 12 >> 2], o5, i5)); )
                    ;
                  if (i5 = b3[a5 >> 2], a5 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[a5 >> 2], t4 = b3[i5 >> 2], pr2(b3[b3[t4 + 4 >> 2] + 16 >> 2], e5, b3[t4 + 16 >> 2]) == m2(0)) {
                    if (u3 = d2[e5 + 28 >> 2], a5 = b3[i5 >> 2], f3 = b3[a5 + 16 >> 2], !(u3 != d2[f3 + 28 >> 2] | d2[f3 + 32 >> 2] != d2[e5 + 32 >> 2])) {
                      if (i5 = b3[e5 + 8 >> 2], b3[o5 + 40 >> 2] = 0, b3[o5 + 44 >> 2] = 0, b3[o5 + 32 >> 2] = 0, b3[o5 + 36 >> 2] = 0, e5 = b3[287], b3[o5 + 24 >> 2] = b3[286], b3[o5 + 28 >> 2] = e5, e5 = b3[285], b3[o5 + 16 >> 2] = b3[284], b3[o5 + 20 >> 2] = e5, b3[o5 + 32 >> 2] = b3[f3 + 12 >> 2], b3[o5 + 36 >> 2] = b3[b3[i5 + 16 >> 2] + 12 >> 2], d2[o5 + 52 >> 2] = d2[f3 + 16 >> 2], d2[o5 + 56 >> 2] = d2[f3 + 20 >> 2], d2[o5 + 60 >> 2] = d2[f3 + 24 >> 2], b3[f3 + 12 >> 2] = 0, e5 = f3 + 12 | 0, 8 == (0 | (f3 = b3[r6 + 1736 >> 2])) ? be[b3[r6 + 76 >> 2]](o5 + 52 | 0, o5 + 32 | 0, o5 + 16 | 0, e5) : be[0 | f3](o5 + 52 | 0, o5 + 32 | 0, o5 + 16 | 0, e5, b3[r6 + 1896 >> 2]), b3[e5 >> 2] || (b3[e5 >> 2] = b3[o5 + 32 >> 2]), tr2(a5, i5))
                        break e;
                      break r;
                    }
                    if (t4 = b3[a5 + 4 >> 2], f3 = b3[t4 + 16 >> 2], d2[f3 + 32 >> 2] != d2[e5 + 32 >> 2] || u3 != d2[f3 + 28 >> 2]) {
                      if (!ir2(t4))
                        break r;
                      if (k3[i5 + 15 | 0]) {
                        if (!rr2(b3[a5 + 8 >> 2]))
                          break r;
                        n4[i5 + 15 | 0] = 0;
                      }
                      if (!tr2(b3[e5 + 8 >> 2], a5))
                        break r;
                      z2(r6, e5);
                      break e;
                    }
                    for (; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], (0 | f3) == b3[b3[b3[i5 >> 2] + 4 >> 2] + 16 >> 2]; )
                      ;
                    if (a5 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[a5 >> 2], t4 = b3[c3 + 4 >> 2], f3 = b3[t4 + 8 >> 2], k3[a5 + 15 | 0]) {
                      if (b3[c3 + 24 >> 2] = 0, Vr(b3[a5 + 4 >> 2]), Y2(a5), !rr2(t4))
                        break r;
                      t4 = b3[b3[f3 + 4 >> 2] + 12 >> 2];
                    }
                    if (!tr2(b3[e5 + 8 >> 2], t4))
                      break r;
                    A3 = b3[t4 + 8 >> 2], t4 = f3, e5 = f3, a5 = b3[b3[f3 + 4 >> 2] + 16 >> 2], u3 = d2[a5 + 28 >> 2], c3 = b3[f3 + 16 >> 2], u3 < (s3 = d2[c3 + 28 >> 2]) | (d2[a5 + 32 >> 2] <= d2[c3 + 32 >> 2] ? u3 == s3 : 0) || (e5 = 0), ar2(r6, i5, A3, t4, e5, 1);
                    break e;
                  }
                  if (l4 = k3[i5 + 12 | 0], c3 = b3[c3 + 4 >> 2], A3 = b3[c3 + 16 >> 2], u3 = d2[A3 + 28 >> 2], v3 = b3[b3[t4 + 4 >> 2] + 16 >> 2], f3 = i5, u3 < (s3 = d2[v3 + 28 >> 2]) || u3 == s3 && (f3 = i5, d2[A3 + 32 >> 2] <= d2[v3 + 32 >> 2]) || (f3 = a5), k3[f3 + 15 | 0] || l4) {
                    i: {
                      if ((0 | f3) == (0 | i5)) {
                        if (a5 = er2(b3[b3[e5 + 8 >> 2] + 4 >> 2], b3[t4 + 12 >> 2]))
                          break i;
                        break r;
                      }
                      if (!(a5 = er2(b3[b3[c3 + 8 >> 2] + 4 >> 2], b3[e5 + 8 >> 2])))
                        break r;
                      a5 = b3[a5 + 4 >> 2];
                    }
                    if (k3[f3 + 15 | 0]) {
                      if (rr2(b3[f3 >> 2])) {
                        b3[f3 >> 2] = a5, n4[f3 + 15 | 0] = 0, b3[a5 + 24 >> 2] = f3, z2(r6, e5);
                        break e;
                      }
                      break r;
                    }
                    if (!(f3 = O2(16)))
                      break r;
                    if (b3[f3 >> 2] = a5, i5 = Fr2(b3[r6 - -64 >> 2], b3[i5 + 4 >> 2], f3), b3[f3 + 4 >> 2] = i5, !i5)
                      break r;
                    n4[f3 + 13 | 0] = 0, n4[f3 + 14 | 0] = 0, n4[f3 + 15 | 0] = 0, b3[a5 + 24 >> 2] = f3, t4 = b3[r6 + 56 >> 2], a5 = b3[b3[f3 >> 2] + 28 >> 2] + b3[b3[b3[i5 + 4 >> 2] >> 2] + 8 >> 2] | 0, b3[f3 + 8 >> 2] = a5;
                    i: {
                      a:
                        switch (t4 - 100130 | 0) {
                          case 0:
                            i5 = 1 & a5;
                            break i;
                          case 1:
                            i5 = 0 != (0 | a5);
                            break i;
                          case 2:
                            i5 = (0 | a5) > 0;
                            break i;
                          case 3:
                            i5 = a5 >>> 31 | 0;
                            break i;
                          case 4:
                            break a;
                          default:
                            break i;
                        }
                      i5 = a5 + 1 >>> 0 > 2;
                    }
                    n4[f3 + 12 | 0] = i5, z2(r6, e5);
                    break e;
                  }
                  ar2(f3 = r6, i5, r6 = b3[e5 + 8 >> 2], r6, 0, 1);
                  break e;
                }
                for (e5 = b3[b3[i5 >> 2] + 16 >> 2]; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], f3 = b3[i5 >> 2], (0 | e5) == b3[f3 + 16 >> 2]; )
                  ;
                if (k3[i5 + 15 | 0]) {
                  if (!(e5 = er2(b3[b3[b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[f3 + 12 >> 2])))
                    break r;
                  if (!rr2(b3[i5 >> 2]))
                    break r;
                  if (b3[i5 >> 2] = e5, n4[i5 + 15 | 0] = 0, b3[e5 + 24 >> 2] = i5, !(i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2]))
                    break r;
                }
                if (e5 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], f3 = b3[e5 >> 2], e5 = mr2(r6, e5, 0), (0 | f3) != (0 | (a5 = b3[e5 + 8 >> 2])))
                  ar2(r6, i5, a5, f3, f3, 1);
                else {
                  if (a5 = b3[i5 >> 2], A3 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], c3 = b3[A3 >> 2], b3[b3[a5 + 4 >> 2] + 16 >> 2] != b3[b3[c3 + 4 >> 2] + 16 >> 2] && H2(r6, i5), v3 = 1, t4 = b3[r6 + 72 >> 2], u3 = d2[t4 + 28 >> 2], l4 = b3[a5 + 16 >> 2], !(u3 != d2[l4 + 28 >> 2] | d2[l4 + 32 >> 2] != d2[t4 + 32 >> 2])) {
                    if (!tr2(b3[b3[f3 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    for (f3 = b3[b3[i5 >> 2] + 16 >> 2]; i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], t4 = b3[i5 >> 2], (0 | f3) == b3[t4 + 16 >> 2]; )
                      ;
                    if (k3[i5 + 15 | 0]) {
                      if (!(f3 = er2(b3[b3[b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], b3[t4 + 12 >> 2])))
                        break r;
                      if (!rr2(b3[i5 >> 2]))
                        break r;
                      if (b3[i5 >> 2] = f3, n4[i5 + 15 | 0] = 0, b3[f3 + 24 >> 2] = i5, !(i5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2]))
                        break r;
                    }
                    t4 = b3[b3[b3[i5 + 4 >> 2] + 8 >> 2] >> 2], f3 = b3[t4 >> 2], mr2(r6, t4, A3), t4 = b3[r6 + 72 >> 2], u3 = d2[t4 + 28 >> 2], v3 = 0;
                  }
                  f: {
                    if (s3 = u3, l4 = b3[c3 + 16 >> 2], s3 != (u3 = d2[l4 + 28 >> 2]) | d2[l4 + 32 >> 2] != d2[t4 + 32 >> 2]) {
                      if (v3)
                        break f;
                    } else {
                      if (!tr2(e5, b3[b3[c3 + 4 >> 2] + 12 >> 2]))
                        break r;
                      e5 = mr2(r6, A3, 0);
                    }
                    ar2(r6, i5, b3[e5 + 8 >> 2], f3, f3, 1);
                    break e;
                  }
                  if (f3 = b3[a5 + 16 >> 2], s3 = d2[f3 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[f3 + 32 >> 2]) | u3 != s3 && !(s3 > u3) || (a5 = b3[b3[c3 + 4 >> 2] + 12 >> 2]), !(e5 = er2(b3[b3[e5 + 8 >> 2] + 4 >> 2], a5)))
                    break r;
                  ar2(r6, i5, e5, f3 = b3[e5 + 8 >> 2], f3, 0), n4[b3[b3[e5 + 4 >> 2] + 24 >> 2] + 15 | 0] = 1, X2(r6, i5);
                }
              }
              return void (U2 = o5 - -64 | 0);
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function K2(r6) {
            r6 |= 0;
            var e5 = 0, f3 = 0, i5 = 0, a5 = m2(0), n5 = m2(0), t4 = 0, o5 = 0, k4 = m2(0), u3 = m2(0), c3 = m2(0), s3 = m2(0), A3 = 0, l4 = m2(0), v3 = 0, h3 = m2(0), p3 = m2(0), w3 = m2(0), y3 = m2(0), g3 = m2(0), E3 = m2(0), C3 = m2(0), R3 = 0, M3 = 0, I3 = m2(0), _3 = m2(0), S3 = 0, P3 = 0, x3 = 0, L3 = 0, j3 = 0, B3 = 0, T3 = 0, F3 = 0;
            v3 = b3[r6 + 8 >> 2], e5 = U2 - 80 | 0, n5 = d2[r6 + 16 >> 2], d2[e5 + 8 >> 2] = n5, p3 = d2[r6 + 20 >> 2], d2[e5 + 12 >> 2] = p3, w3 = d2[r6 + 24 >> 2], d2[e5 + 16 >> 2] = w3;
            r:
              if (S3 = n5 == m2(0) & p3 == m2(0) & w3 == m2(0)) {
                if (b3[e5 + 76 >> 2] = -42943038, b3[e5 + 68 >> 2] = -42943038, b3[e5 + 72 >> 2] = -42943038, b3[e5 + 64 >> 2] = 2104540610, b3[e5 + 56 >> 2] = 2104540610, b3[e5 + 60 >> 2] = 2104540610, P3 = (0 | (A3 = b3[v3 >> 2])) == (0 | v3))
                  h3 = m2(-19999999867631625e21), k4 = m2(19999999867631625e21), u3 = m2(19999999867631625e21), l4 = m2(-19999999867631625e21), c3 = m2(19999999867631625e21), s3 = m2(-19999999867631625e21);
                else {
                  for (y3 = m2(19999999867631625e21), g3 = m2(-19999999867631625e21), E3 = m2(-19999999867631625e21), C3 = m2(19999999867631625e21), I3 = m2(-19999999867631625e21), _3 = m2(19999999867631625e21), h3 = m2(-19999999867631625e21), k4 = m2(19999999867631625e21), s3 = m2(-19999999867631625e21), c3 = m2(19999999867631625e21), l4 = m2(-19999999867631625e21), u3 = m2(19999999867631625e21), f3 = A3; h3 = (i5 = (a5 = d2[f3 + 24 >> 2]) > h3) ? a5 : h3, g3 = i5 ? a5 : g3, k4 = (R3 = a5 < k4) ? a5 : k4, y3 = R3 ? a5 : y3, s3 = (t4 = (a5 = d2[f3 + 20 >> 2]) > s3) ? a5 : s3, E3 = t4 ? a5 : E3, c3 = (M3 = a5 < c3) ? a5 : c3, C3 = M3 ? a5 : C3, l4 = (o5 = (a5 = d2[f3 + 16 >> 2]) > l4) ? a5 : l4, I3 = o5 ? a5 : I3, x3 = o5 ? f3 : x3, u3 = (o5 = a5 < u3) ? a5 : u3, _3 = o5 ? a5 : _3, L3 = o5 ? f3 : L3, j3 = i5 ? f3 : j3, B3 = R3 ? f3 : B3, T3 = t4 ? f3 : T3, F3 = M3 ? f3 : F3, (0 | v3) != (0 | (f3 = b3[f3 >> 2])); )
                    ;
                  b3[e5 + 20 >> 2] = L3, d2[e5 + 56 >> 2] = _3, d2[e5 + 68 >> 2] = I3, b3[e5 + 32 >> 2] = x3, d2[e5 + 60 >> 2] = C3, b3[e5 + 24 >> 2] = F3, d2[e5 + 72 >> 2] = E3, b3[e5 + 36 >> 2] = T3, d2[e5 + 64 >> 2] = y3, b3[e5 + 28 >> 2] = B3, d2[e5 + 76 >> 2] = g3, b3[e5 + 40 >> 2] = j3;
                }
                if (f3 = 2, i5 = (t4 = m2(s3 - c3) > m2(l4 - u3)) << 2, i5 = m2(h3 - k4) > m2(d2[i5 + (e5 + 68 | 0) >> 2] - d2[i5 + (e5 + 56 | 0) >> 2]) ? 2 : t4, d2[(t4 = i5 << 2) + (e5 + 56 | 0) >> 2] >= d2[t4 + (e5 + 68 | 0) >> 2])
                  b3[e5 + 8 >> 2] = 0, b3[e5 + 12 >> 2] = 0;
                else {
                  if (f3 = b3[(i5 <<= 2) + (e5 + 20 | 0) >> 2], i5 = b3[i5 + (e5 + 32 | 0) >> 2], g3 = d2[i5 + 16 >> 2], c3 = m2(d2[f3 + 16 >> 2] - g3), d2[e5 + 44 >> 2] = c3, E3 = d2[i5 + 20 >> 2], s3 = m2(d2[f3 + 20 >> 2] - E3), d2[e5 + 48 >> 2] = s3, C3 = d2[i5 + 24 >> 2], a5 = m2(d2[f3 + 24 >> 2] - C3), d2[e5 + 52 >> 2] = a5, !P3) {
                    for (y3 = m2(0), f3 = A3; k4 = m2(d2[f3 + 20 >> 2] - E3), u3 = m2(d2[f3 + 16 >> 2] - g3), h3 = m2(m2(c3 * k4) - m2(s3 * u3)), l4 = m2(d2[f3 + 24 >> 2] - C3), k4 = m2(m2(s3 * l4) - m2(a5 * k4)), u3 = m2(m2(a5 * u3) - m2(c3 * l4)), (l4 = m2(m2(h3 * h3) + m2(m2(k4 * k4) + m2(u3 * u3)))) > y3 && (w3 = h3, p3 = u3, y3 = l4, n5 = k4), (0 | v3) != (0 | (f3 = b3[f3 >> 2])); )
                      ;
                    if (d2[e5 + 16 >> 2] = w3, d2[e5 + 12 >> 2] = p3, d2[e5 + 8 >> 2] = n5, !(y3 <= m2(0)))
                      break r;
                  }
                  b3[e5 + 16 >> 2] = 0, b3[e5 + 8 >> 2] = 0, b3[e5 + 12 >> 2] = 0, f3 = (s3 < m2(0) ? m2(-s3) : s3) > (c3 < m2(0) ? m2(-c3) : c3), n5 = d2[(e5 + 44 | 0) + (f3 << 2) >> 2], f3 = (a5 < m2(0) ? m2(-a5) : a5) > (n5 < m2(0) ? m2(-n5) : n5) ? 2 : f3;
                }
                b3[(e5 + 8 | 0) + (f3 << 2) >> 2] = 1065353216, w3 = d2[e5 + 16 >> 2], n5 = d2[e5 + 8 >> 2], p3 = d2[e5 + 12 >> 2];
              } else
                A3 = b3[v3 >> 2];
            if (i5 = (p3 < m2(0) ? m2(-p3) : p3) > (n5 < m2(0) ? m2(-n5) : n5), n5 = d2[(e5 + 8 | 0) + (i5 << 2) >> 2], f3 = r6 + 28 | 0, i5 = (w3 < m2(0) ? m2(-w3) : w3) > (n5 < m2(0) ? m2(-n5) : n5) ? 2 : i5, b3[f3 + (t4 = i5 << 2) >> 2] = 0, b3[(o5 = (i5 + 1 >>> 0) % 3 << 2) + f3 >> 2] = 1065353216, b3[(i5 = (i5 + 2 >>> 0) % 3 << 2) + f3 >> 2] = 0, b3[(f3 = r6 + 40 | 0) + t4 >> 2] = 0, e5 = d2[t4 + (e5 + 8 | 0) >> 2] > m2(0), d2[f3 + o5 >> 2] = m2(e5 ? -0 : 0), d2[f3 + i5 >> 2] = m2(e5 ? 1 : -1), !(i5 = (0 | v3) == (0 | A3)))
              for (f3 = A3; e5 = b3[f3 + 20 >> 2], b3[f3 + 28 >> 2] = b3[f3 + 16 >> 2], b3[f3 + 32 >> 2] = e5, (0 | v3) != (0 | (f3 = b3[f3 >> 2])); )
                ;
            if (S3 && (0 | (e5 = b3[v3 + 40 >> 2])) != (0 | (t4 = v3 + 40 | 0))) {
              for (n5 = m2(0); ; ) {
                if (o5 = b3[e5 + 8 >> 2], b3[(f3 = o5) + 28 >> 2] >= 1)
                  for (; R3 = b3[f3 + 16 >> 2], M3 = b3[b3[f3 + 4 >> 2] + 16 >> 2], n5 = m2(n5 + m2(m2(d2[R3 + 28 >> 2] - d2[M3 + 28 >> 2]) * m2(d2[R3 + 32 >> 2] + d2[M3 + 32 >> 2]))), (0 | o5) != (0 | (f3 = b3[f3 + 12 >> 2])); )
                    ;
                if ((0 | t4) == (0 | (e5 = b3[e5 >> 2])))
                  break;
              }
              if (n5 < m2(0)) {
                if (!i5)
                  for (; d2[A3 + 32 >> 2] = -d2[A3 + 32 >> 2], (0 | (A3 = b3[A3 >> 2])) != (0 | v3); )
                    ;
                d2[r6 + 40 >> 2] = -d2[r6 + 40 >> 2], d2[r6 + 44 >> 2] = -d2[r6 + 44 >> 2], d2[r6 + 48 >> 2] = -d2[r6 + 48 >> 2];
              }
            }
          }
          function Y2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, k4 = 0, u3 = 0;
            r:
              if (r6 |= 0) {
                n5 = (i5 = r6 - 8 | 0) + (r6 = -8 & (e5 = b3[r6 - 4 >> 2])) | 0;
                e:
                  if (!(1 & e5)) {
                    if (!(3 & e5))
                      break r;
                    if ((i5 = i5 - (e5 = b3[i5 >> 2]) | 0) >>> 0 < v2[618])
                      break r;
                    if (r6 = r6 + e5 | 0, b3[619] == (0 | i5)) {
                      if (3 == (3 & (e5 = b3[n5 + 4 >> 2])))
                        return b3[616] = r6, b3[n5 + 4 >> 2] = -2 & e5, b3[i5 + 4 >> 2] = 1 | r6, void (b3[r6 + i5 >> 2] = r6);
                    } else {
                      if (e5 >>> 0 <= 255) {
                        if (a5 = b3[i5 + 8 >> 2], e5 = e5 >>> 3 | 0, (0 | (f3 = b3[i5 + 12 >> 2])) == (0 | a5)) {
                          k4 = 2456, u3 = b3[614] & Jr(e5), b3[k4 >> 2] = u3;
                          break e;
                        }
                        b3[a5 + 12 >> 2] = f3, b3[f3 + 8 >> 2] = a5;
                        break e;
                      }
                      if (o5 = b3[i5 + 24 >> 2], (0 | i5) == (0 | (e5 = b3[i5 + 12 >> 2])))
                        if ((f3 = b3[(a5 = i5 + 20 | 0) >> 2]) || (f3 = b3[(a5 = i5 + 16 | 0) >> 2])) {
                          for (; t4 = a5, (f3 = b3[(a5 = (e5 = f3) + 20 | 0) >> 2]) || (a5 = e5 + 16 | 0, f3 = b3[e5 + 16 >> 2]); )
                            ;
                          b3[t4 >> 2] = 0;
                        } else
                          e5 = 0;
                      else
                        f3 = b3[i5 + 8 >> 2], b3[f3 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = f3;
                      if (!o5)
                        break e;
                      a5 = b3[i5 + 28 >> 2];
                      f: {
                        if (b3[(f3 = 2760 + (a5 << 2) | 0) >> 2] == (0 | i5)) {
                          if (b3[f3 >> 2] = e5, e5)
                            break f;
                          k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                          break e;
                        }
                        if (b3[o5 + (b3[o5 + 16 >> 2] == (0 | i5) ? 16 : 20) >> 2] = e5, !e5)
                          break e;
                      }
                      if (b3[e5 + 24 >> 2] = o5, (f3 = b3[i5 + 16 >> 2]) && (b3[e5 + 16 >> 2] = f3, b3[f3 + 24 >> 2] = e5), !(f3 = b3[i5 + 20 >> 2]))
                        break e;
                      b3[e5 + 20 >> 2] = f3, b3[f3 + 24 >> 2] = e5;
                    }
                  }
                if (!(i5 >>> 0 >= n5 >>> 0) && 1 & (e5 = b3[n5 + 4 >> 2])) {
                  e: {
                    if (!(2 & e5)) {
                      if (b3[620] == (0 | n5)) {
                        if (b3[620] = i5, r6 = b3[617] + r6 | 0, b3[617] = r6, b3[i5 + 4 >> 2] = 1 | r6, b3[619] != (0 | i5))
                          break r;
                        return b3[616] = 0, void (b3[619] = 0);
                      }
                      if (b3[619] == (0 | n5))
                        return b3[619] = i5, r6 = b3[616] + r6 | 0, b3[616] = r6, b3[i5 + 4 >> 2] = 1 | r6, void (b3[r6 + i5 >> 2] = r6);
                      r6 = (-8 & e5) + r6 | 0;
                      f:
                        if (e5 >>> 0 <= 255) {
                          if (a5 = b3[n5 + 8 >> 2], e5 = e5 >>> 3 | 0, (0 | (f3 = b3[n5 + 12 >> 2])) == (0 | a5)) {
                            k4 = 2456, u3 = b3[614] & Jr(e5), b3[k4 >> 2] = u3;
                            break f;
                          }
                          b3[a5 + 12 >> 2] = f3, b3[f3 + 8 >> 2] = a5;
                        } else {
                          if (o5 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (e5 = b3[n5 + 12 >> 2])))
                            if ((f3 = b3[(a5 = n5 + 20 | 0) >> 2]) || (f3 = b3[(a5 = n5 + 16 | 0) >> 2])) {
                              for (; t4 = a5, (f3 = b3[(a5 = (e5 = f3) + 20 | 0) >> 2]) || (a5 = e5 + 16 | 0, f3 = b3[e5 + 16 >> 2]); )
                                ;
                              b3[t4 >> 2] = 0;
                            } else
                              e5 = 0;
                          else
                            f3 = b3[n5 + 8 >> 2], b3[f3 + 12 >> 2] = e5, b3[e5 + 8 >> 2] = f3;
                          if (o5) {
                            a5 = b3[n5 + 28 >> 2];
                            i: {
                              if (b3[(f3 = 2760 + (a5 << 2) | 0) >> 2] == (0 | n5)) {
                                if (b3[f3 >> 2] = e5, e5)
                                  break i;
                                k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                                break f;
                              }
                              if (b3[o5 + (b3[o5 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = e5, !e5)
                                break f;
                            }
                            b3[e5 + 24 >> 2] = o5, (f3 = b3[n5 + 16 >> 2]) && (b3[e5 + 16 >> 2] = f3, b3[f3 + 24 >> 2] = e5), (f3 = b3[n5 + 20 >> 2]) && (b3[e5 + 20 >> 2] = f3, b3[f3 + 24 >> 2] = e5);
                          }
                        }
                      if (b3[i5 + 4 >> 2] = 1 | r6, b3[r6 + i5 >> 2] = r6, b3[619] != (0 | i5))
                        break e;
                      return void (b3[616] = r6);
                    }
                    b3[n5 + 4 >> 2] = -2 & e5, b3[i5 + 4 >> 2] = 1 | r6, b3[r6 + i5 >> 2] = r6;
                  }
                  if (r6 >>> 0 <= 255)
                    return e5 = 2496 + ((r6 = r6 >>> 3 | 0) << 3) | 0, (f3 = b3[614]) & (r6 = 1 << r6) ? r6 = b3[e5 + 8 >> 2] : (b3[614] = r6 | f3, r6 = e5), b3[e5 + 8 >> 2] = i5, b3[r6 + 12 >> 2] = i5, b3[i5 + 12 >> 2] = e5, void (b3[i5 + 8 >> 2] = r6);
                  a5 = 31, b3[i5 + 16 >> 2] = 0, b3[i5 + 20 >> 2] = 0, r6 >>> 0 <= 16777215 && (e5 = r6 >>> 8 | 0, e5 <<= t4 = e5 + 1048320 >>> 16 & 8, a5 = 28 + ((e5 = ((e5 <<= a5 = e5 + 520192 >>> 16 & 4) << (f3 = e5 + 245760 >>> 16 & 2) >>> 15 | 0) - (f3 | a5 | t4) | 0) << 1 | r6 >>> e5 + 21 & 1) | 0), b3[i5 + 28 >> 2] = a5, t4 = 2760 + (a5 << 2) | 0;
                  e: {
                    f: {
                      if ((f3 = b3[615]) & (e5 = 1 << a5)) {
                        for (a5 = r6 << (31 == (0 | a5) ? 0 : 25 - (a5 >>> 1 | 0) | 0), e5 = b3[t4 >> 2]; ; ) {
                          if (f3 = e5, (-8 & b3[e5 + 4 >> 2]) == (0 | r6))
                            break f;
                          if (e5 = a5 >>> 29 | 0, a5 <<= 1, !(e5 = b3[16 + (t4 = f3 + (4 & e5) | 0) >> 2]))
                            break;
                        }
                        b3[t4 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f3;
                      } else
                        b3[615] = e5 | f3, b3[t4 >> 2] = i5, b3[i5 + 24 >> 2] = t4;
                      b3[i5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = i5;
                      break e;
                    }
                    r6 = b3[f3 + 8 >> 2], b3[r6 + 12 >> 2] = i5, b3[f3 + 8 >> 2] = i5, b3[i5 + 24 >> 2] = 0, b3[i5 + 12 >> 2] = f3, b3[i5 + 8 >> 2] = r6;
                  }
                  r6 = b3[622] - 1 | 0, b3[622] = r6 || -1;
                }
              }
          }
          function N2(r6, e5) {
            e5 |= 0;
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, d3 = 0, h3 = 0, p3 = 0, m3 = 0, w3 = 0, y3 = 0;
            if (U2 = u3 = U2 - 16 | 0, b3[84 + (r6 |= 0) >> 2] = 0, (0 | (s3 = b3[e5 + 40 >> 2])) != (0 | (h3 = e5 + 40 | 0)))
              for (e5 = s3; n4[e5 + 20 | 0] = 0, (0 | h3) != (0 | (e5 = b3[e5 >> 2])); )
                ;
            if ((0 | s3) != (0 | h3)) {
              for (; ; ) {
                if (!(k3[s3 + 20 | 0] | !k3[s3 + 21 | 0])) {
                  if (o5 = b3[s3 + 8 >> 2], k3[r6 + 80 | 0])
                    e5 = 1, f3 = 1;
                  else {
                    a5 = 0, i5 = 0, e5 = 0, t4 = b3[(f3 = o5) + 20 >> 2];
                    r:
                      if (k3[t4 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e5 = t4) + 20 | 0]) {
                            e5 = i5;
                            break r;
                          }
                          if (n4[e5 + 20 | 0] = 1, b3[e5 + 16 >> 2] = i5, a5 = a5 + 1 | 0, i5 = e5, f3 = b3[f3 + 8 >> 2], t4 = b3[f3 + 20 >> 2], !k3[t4 + 21 | 0])
                            break;
                        }
                    i5 = b3[o5 + 4 >> 2], t4 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[t4 + 21 | 0] | k3[t4 + 20 | 0]) {
                          if (m3 = o5, !e5)
                            break r;
                        } else
                          for (f3 = e5; ; ) {
                            if (n4[(e5 = t4) + 20 | 0] = 1, b3[e5 + 16 >> 2] = f3, a5 = a5 + 1 | 0, m3 = b3[i5 + 12 >> 2], i5 = b3[m3 + 4 >> 2], t4 = b3[i5 + 20 >> 2], !k3[t4 + 21 | 0])
                              break e;
                            if (f3 = e5, k3[t4 + 20 | 0])
                              break;
                          }
                      for (; n4[e5 + 20 | 0] = 0, e5 = b3[e5 + 16 >> 2]; )
                        ;
                    }
                    w3 = (0 | a5) > 1, t4 = 0, f3 = 0, e5 = 0, v3 = b3[o5 + 12 >> 2], i5 = b3[(c3 = v3) + 20 >> 2];
                    r:
                      if (k3[i5 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e5 = i5) + 20 | 0]) {
                            e5 = f3;
                            break r;
                          }
                          if (n4[e5 + 20 | 0] = 1, b3[e5 + 16 >> 2] = f3, t4 = t4 + 1 | 0, f3 = e5, c3 = b3[c3 + 8 >> 2], i5 = b3[c3 + 20 >> 2], !k3[i5 + 21 | 0])
                            break;
                        }
                    p3 = w3 ? a5 : 1, i5 = b3[v3 + 4 >> 2], a5 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[a5 + 21 | 0] | k3[a5 + 20 | 0]) {
                          if (!e5)
                            break r;
                        } else
                          for (f3 = e5; ; ) {
                            if (n4[(e5 = a5) + 20 | 0] = 1, b3[e5 + 16 >> 2] = f3, t4 = t4 + 1 | 0, v3 = b3[i5 + 12 >> 2], i5 = b3[v3 + 4 >> 2], a5 = b3[i5 + 20 >> 2], !k3[a5 + 21 | 0])
                              break e;
                            if (f3 = e5, k3[a5 + 20 | 0])
                              break;
                          }
                      for (; n4[e5 + 20 | 0] = 0, e5 = b3[e5 + 16 >> 2]; )
                        ;
                    }
                    y3 = (0 | t4) > (0 | p3), a5 = 0, f3 = 0, e5 = 0, d3 = b3[b3[o5 + 8 >> 2] + 4 >> 2], i5 = b3[(c3 = d3) + 20 >> 2];
                    r:
                      if (k3[i5 + 21 | 0])
                        for (; ; ) {
                          if (k3[(e5 = i5) + 20 | 0]) {
                            e5 = f3;
                            break r;
                          }
                          if (n4[e5 + 20 | 0] = 1, b3[e5 + 16 >> 2] = f3, a5 = a5 + 1 | 0, f3 = e5, c3 = b3[c3 + 8 >> 2], i5 = b3[c3 + 20 >> 2], !k3[i5 + 21 | 0])
                            break;
                        }
                    A3 = y3 ? t4 : p3, i5 = b3[d3 + 4 >> 2], t4 = b3[i5 + 20 >> 2];
                    r: {
                      e:
                        if (!k3[t4 + 21 | 0] | k3[t4 + 20 | 0]) {
                          if (!e5)
                            break r;
                        } else
                          for (f3 = e5; ; ) {
                            if (n4[(e5 = t4) + 20 | 0] = 1, b3[e5 + 16 >> 2] = f3, a5 = a5 + 1 | 0, d3 = b3[i5 + 12 >> 2], i5 = b3[d3 + 4 >> 2], t4 = b3[i5 + 20 >> 2], !k3[t4 + 21 | 0])
                              break e;
                            if (f3 = e5, k3[t4 + 20 | 0])
                              break;
                          }
                      for (; n4[e5 + 20 | 0] = 0, e5 = b3[e5 + 16 >> 2]; )
                        ;
                    }
                    kr2(u3, o5), c3 = b3[u3 + 8 >> 2], p3 = b3[u3 + 4 >> 2], l4 = b3[u3 >> 2], kr2(u3, b3[o5 + 12 >> 2]), t4 = b3[u3 + 8 >> 2], i5 = b3[u3 + 4 >> 2], f3 = b3[u3 >> 2], kr2(u3, b3[b3[o5 + 8 >> 2] + 4 >> 2]), e5 = a5, (0 | (e5 = (l4 = (0 | (e5 = (A3 = (0 | (e5 = (a5 = (0 | a5) > (0 | A3)) ? e5 : A3)) < (0 | l4)) ? l4 : e5)) < (0 | f3)) ? f3 : e5)) >= (0 | (f3 = b3[u3 >> 2])) ? (o5 = l4 ? i5 : A3 ? p3 : a5 ? d3 : y3 ? v3 : w3 ? m3 : o5, f3 = l4 ? t4 : A3 ? c3 : a5 || w3 | y3 ? 2 : 1) : (o5 = b3[u3 + 4 >> 2], e5 = f3, f3 = b3[u3 + 8 >> 2]);
                  }
                  be[0 | f3](r6, o5, e5);
                }
                if ((0 | h3) == (0 | (s3 = b3[s3 >> 2])))
                  break;
              }
              if (a5 = b3[r6 + 84 >> 2]) {
                for (3 == (0 | (e5 = b3[r6 + 1716 >> 2])) ? be[b3[r6 + 88 >> 2]](4) : be[0 | e5](4, b3[r6 + 1896 >> 2]), t4 = -1; ; ) {
                  for (e5 = b3[a5 + 8 >> 2]; k3[r6 + 80 | 0] && (0 | (f3 = !(o5 = k3[b3[b3[e5 + 4 >> 2] + 20 >> 2] + 21 | 0]))) != (0 | t4) && (4 == (0 | (i5 = b3[r6 + 1720 >> 2])) ? be[b3[r6 + 92 >> 2]](!o5) : be[0 | i5](!o5, b3[r6 + 1896 >> 2]), t4 = f3), 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[e5 + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[e5 + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), (0 | (e5 = b3[e5 + 12 >> 2])) != b3[a5 + 8 >> 2]; )
                    ;
                  if (!(a5 = b3[a5 + 16 >> 2]))
                    break;
                }
                6 == (0 | (e5 = b3[r6 + 1728 >> 2])) ? be[b3[r6 + 100 >> 2]]() : be[0 | e5](b3[r6 + 1896 >> 2]), b3[r6 + 84 >> 2] = 0;
              }
            }
            U2 = u3 + 16 | 0;
          }
          function V2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, k4 = 0, u3 = 0;
            n5 = r6 + e5 | 0;
            r: {
              e:
                if (!(1 & (f3 = b3[r6 + 4 >> 2]))) {
                  if (!(3 & f3))
                    break r;
                  e5 = (f3 = b3[r6 >> 2]) + e5 | 0;
                  f: {
                    if ((0 | (r6 = r6 - f3 | 0)) != b3[619]) {
                      if (f3 >>> 0 <= 255) {
                        if (a5 = b3[r6 + 8 >> 2], f3 = f3 >>> 3 | 0, (0 | (i5 = b3[r6 + 12 >> 2])) != (0 | a5))
                          break f;
                        k4 = 2456, u3 = b3[614] & Jr(f3), b3[k4 >> 2] = u3;
                        break e;
                      }
                      if (o5 = b3[r6 + 24 >> 2], (0 | (f3 = b3[r6 + 12 >> 2])) == (0 | r6))
                        if ((i5 = b3[(a5 = r6 + 20 | 0) >> 2]) || (i5 = b3[(a5 = r6 + 16 | 0) >> 2])) {
                          for (; t4 = a5, (i5 = b3[(a5 = (f3 = i5) + 20 | 0) >> 2]) || (a5 = f3 + 16 | 0, i5 = b3[f3 + 16 >> 2]); )
                            ;
                          b3[t4 >> 2] = 0;
                        } else
                          f3 = 0;
                      else
                        i5 = b3[r6 + 8 >> 2], b3[i5 + 12 >> 2] = f3, b3[f3 + 8 >> 2] = i5;
                      if (!o5)
                        break e;
                      a5 = b3[r6 + 28 >> 2];
                      i: {
                        if (b3[(i5 = 2760 + (a5 << 2) | 0) >> 2] == (0 | r6)) {
                          if (b3[i5 >> 2] = f3, f3)
                            break i;
                          k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                          break e;
                        }
                        if (b3[o5 + (b3[o5 + 16 >> 2] == (0 | r6) ? 16 : 20) >> 2] = f3, !f3)
                          break e;
                      }
                      if (b3[f3 + 24 >> 2] = o5, (i5 = b3[r6 + 16 >> 2]) && (b3[f3 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f3), !(i5 = b3[r6 + 20 >> 2]))
                        break e;
                      b3[f3 + 20 >> 2] = i5, b3[i5 + 24 >> 2] = f3;
                      break e;
                    }
                    if (3 != (3 & (f3 = b3[n5 + 4 >> 2])))
                      break e;
                    return b3[616] = e5, b3[n5 + 4 >> 2] = -2 & f3, b3[r6 + 4 >> 2] = 1 | e5, void (b3[n5 >> 2] = e5);
                  }
                  b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                }
              e: {
                if (!(2 & (f3 = b3[n5 + 4 >> 2]))) {
                  if (b3[620] == (0 | n5)) {
                    if (b3[620] = r6, e5 = b3[617] + e5 | 0, b3[617] = e5, b3[r6 + 4 >> 2] = 1 | e5, b3[619] != (0 | r6))
                      break r;
                    return b3[616] = 0, void (b3[619] = 0);
                  }
                  if (b3[619] == (0 | n5))
                    return b3[619] = r6, e5 = b3[616] + e5 | 0, b3[616] = e5, b3[r6 + 4 >> 2] = 1 | e5, void (b3[r6 + e5 >> 2] = e5);
                  e5 = (-8 & f3) + e5 | 0;
                  f:
                    if (f3 >>> 0 <= 255) {
                      if (a5 = b3[n5 + 8 >> 2], f3 = f3 >>> 3 | 0, (0 | (i5 = b3[n5 + 12 >> 2])) == (0 | a5)) {
                        k4 = 2456, u3 = b3[614] & Jr(f3), b3[k4 >> 2] = u3;
                        break f;
                      }
                      b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                    } else {
                      if (o5 = b3[n5 + 24 >> 2], (0 | n5) == (0 | (f3 = b3[n5 + 12 >> 2])))
                        if ((a5 = b3[(i5 = n5 + 20 | 0) >> 2]) || (a5 = b3[(i5 = n5 + 16 | 0) >> 2])) {
                          for (; t4 = i5, (a5 = b3[(i5 = (f3 = a5) + 20 | 0) >> 2]) || (i5 = f3 + 16 | 0, a5 = b3[f3 + 16 >> 2]); )
                            ;
                          b3[t4 >> 2] = 0;
                        } else
                          f3 = 0;
                      else
                        i5 = b3[n5 + 8 >> 2], b3[i5 + 12 >> 2] = f3, b3[f3 + 8 >> 2] = i5;
                      if (o5) {
                        a5 = b3[n5 + 28 >> 2];
                        i: {
                          if (b3[(i5 = 2760 + (a5 << 2) | 0) >> 2] == (0 | n5)) {
                            if (b3[i5 >> 2] = f3, f3)
                              break i;
                            k4 = 2460, u3 = b3[615] & Jr(a5), b3[k4 >> 2] = u3;
                            break f;
                          }
                          if (b3[o5 + (b3[o5 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = f3, !f3)
                            break f;
                        }
                        b3[f3 + 24 >> 2] = o5, (i5 = b3[n5 + 16 >> 2]) && (b3[f3 + 16 >> 2] = i5, b3[i5 + 24 >> 2] = f3), (i5 = b3[n5 + 20 >> 2]) && (b3[f3 + 20 >> 2] = i5, b3[i5 + 24 >> 2] = f3);
                      }
                    }
                  if (b3[r6 + 4 >> 2] = 1 | e5, b3[r6 + e5 >> 2] = e5, b3[619] != (0 | r6))
                    break e;
                  return void (b3[616] = e5);
                }
                b3[n5 + 4 >> 2] = -2 & f3, b3[r6 + 4 >> 2] = 1 | e5, b3[r6 + e5 >> 2] = e5;
              }
              if (e5 >>> 0 <= 255)
                return f3 = 2496 + ((e5 = e5 >>> 3 | 0) << 3) | 0, (i5 = b3[614]) & (e5 = 1 << e5) ? e5 = b3[f3 + 8 >> 2] : (b3[614] = e5 | i5, e5 = f3), b3[f3 + 8 >> 2] = r6, b3[e5 + 12 >> 2] = r6, b3[r6 + 12 >> 2] = f3, void (b3[r6 + 8 >> 2] = e5);
              a5 = 31, b3[r6 + 16 >> 2] = 0, b3[r6 + 20 >> 2] = 0, e5 >>> 0 <= 16777215 && (f3 = e5 >>> 8 | 0, f3 <<= t4 = f3 + 1048320 >>> 16 & 8, a5 = 28 + ((f3 = ((f3 <<= a5 = f3 + 520192 >>> 16 & 4) << (i5 = f3 + 245760 >>> 16 & 2) >>> 15 | 0) - (i5 | a5 | t4) | 0) << 1 | e5 >>> f3 + 21 & 1) | 0), b3[r6 + 28 >> 2] = a5, t4 = 2760 + (a5 << 2) | 0;
              e: {
                if ((i5 = b3[615]) & (f3 = 1 << a5)) {
                  for (a5 = e5 << (31 == (0 | a5) ? 0 : 25 - (a5 >>> 1 | 0) | 0), f3 = b3[t4 >> 2]; ; ) {
                    if (i5 = f3, (-8 & b3[f3 + 4 >> 2]) == (0 | e5))
                      break e;
                    if (f3 = a5 >>> 29 | 0, a5 <<= 1, !(f3 = b3[16 + (t4 = i5 + (4 & f3) | 0) >> 2]))
                      break;
                  }
                  b3[t4 + 16 >> 2] = r6, b3[r6 + 24 >> 2] = i5;
                } else
                  b3[615] = f3 | i5, b3[t4 >> 2] = r6, b3[r6 + 24 >> 2] = t4;
                return b3[r6 + 12 >> 2] = r6, void (b3[r6 + 8 >> 2] = r6);
              }
              e5 = b3[i5 + 8 >> 2], b3[e5 + 12 >> 2] = r6, b3[i5 + 8 >> 2] = r6, b3[r6 + 24 >> 2] = 0, b3[r6 + 12 >> 2] = i5, b3[r6 + 8 >> 2] = e5;
            }
          }
          function G2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = m2(0), o5 = 0, k4 = 0, u3 = m2(0), c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, h3 = 0, p3 = 0, w3 = 0, y3 = 0, g3 = 0, C3 = 0, R3 = 0, M3 = 0, I3 = 0;
            U2 = a5 = U2 - 48 | 0;
            r: {
              A3 = b3[e5 >> 2], k4 = b3[A3 + 16 >> 2], u3 = d2[k4 + 28 >> 2], f3 = b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2], v3 = b3[f3 >> 2], i5 = b3[v3 + 16 >> 2], t4 = d2[i5 + 28 >> 2];
              e: {
                if (!(!(d2[k4 + 32 >> 2] <= d2[i5 + 32 >> 2]) | u3 != t4) || u3 < t4) {
                  if (pr2(b3[b3[v3 + 4 >> 2] + 16 >> 2], k4, i5) > m2(0))
                    break e;
                  if (k4 = b3[A3 + 16 >> 2], i5 = b3[v3 + 16 >> 2], d2[k4 + 32 >> 2] != d2[i5 + 32 >> 2] || d2[k4 + 28 >> 2] != d2[i5 + 28 >> 2]) {
                    if (!ir2(b3[v3 + 4 >> 2]))
                      break r;
                    if (!tr2(A3, b3[b3[v3 + 4 >> 2] + 12 >> 2]))
                      break r;
                    g3 = 1, n4[f3 + 14 | 0] = 1, n4[e5 + 14 | 0] = 1;
                    break e;
                  }
                  if (g3 = 1, (0 | i5) == (0 | k4))
                    break e;
                  if (o5 = b3[r6 + 68 >> 2], (0 | (e5 = b3[k4 + 36 >> 2])) >= 0) {
                    if (h3 = b3[o5 >> 2], c3 = b3[h3 >> 2], k4 = e5, s3 = b3[h3 + 4 >> 2], e5 = b3[4 + (C3 = s3 + (e5 << 3) | 0) >> 2], y3 = b3[h3 + 8 >> 2], w3 = b3[c3 + (y3 << 2) >> 2], b3[c3 + (e5 << 2) >> 2] = w3, b3[4 + (R3 = (w3 << 3) + s3 | 0) >> 2] = e5, M3 = y3 - 1 | 0, b3[h3 + 8 >> 2] = M3, (0 | e5) < (0 | y3)) {
                      f: {
                        if ((0 | e5) < 2 || (f3 = b3[(b3[c3 + (e5 << 1 & -4) >> 2] << 3) + s3 >> 2], t4 = d2[f3 + 28 >> 2], p3 = b3[(w3 << 3) + s3 >> 2], t4 < (u3 = d2[p3 + 28 >> 2]) || !(!(d2[f3 + 32 >> 2] <= d2[p3 + 32 >> 2]) | u3 != t4)))
                          for (I3 = (w3 << 3) + s3 | 0; ; ) {
                            if ((0 | M3) <= (0 | (f3 = e5 << 1)) || (l4 = b3[(b3[c3 + ((i5 = 1 | f3) << 2) >> 2] << 3) + s3 >> 2], u3 = d2[l4 + 28 >> 2], o5 = b3[(b3[c3 + (f3 << 2) >> 2] << 3) + s3 >> 2], t4 = d2[o5 + 28 >> 2], !(d2[l4 + 32 >> 2] <= d2[o5 + 32 >> 2]) | u3 != t4 && !(u3 < t4) || (f3 = i5)), (0 | f3) >= (0 | y3)) {
                              f3 = e5;
                              break f;
                            }
                            if (p3 = b3[I3 >> 2], u3 = d2[p3 + 28 >> 2], l4 = b3[c3 + (f3 << 2) >> 2], i5 = b3[(o5 = (l4 << 3) + s3 | 0) >> 2], u3 < (t4 = d2[i5 + 28 >> 2])) {
                              f3 = e5;
                              break f;
                            }
                            if (!(!(d2[p3 + 32 >> 2] <= d2[i5 + 32 >> 2]) | u3 != t4)) {
                              f3 = e5;
                              break f;
                            }
                            b3[c3 + (e5 << 2) >> 2] = l4, b3[o5 + 4 >> 2] = e5, e5 = f3;
                          }
                        for (; ; ) {
                          if (l4 = b3[c3 + ((f3 = e5 >> 1) << 2) >> 2], i5 = b3[(o5 = (l4 << 3) + s3 | 0) >> 2], (t4 = d2[i5 + 28 >> 2]) < u3) {
                            f3 = e5;
                            break f;
                          }
                          if (!(!(d2[i5 + 32 >> 2] <= d2[p3 + 32 >> 2]) | u3 != t4)) {
                            f3 = e5;
                            break f;
                          }
                          if (b3[c3 + (e5 << 2) >> 2] = l4, b3[o5 + 4 >> 2] = e5, !((e5 = f3) >>> 0 > 1))
                            break;
                        }
                      }
                      b3[c3 + (f3 << 2) >> 2] = w3, b3[R3 + 4 >> 2] = f3;
                    }
                    b3[C3 >> 2] = 0, b3[C3 + 4 >> 2] = b3[h3 + 16 >> 2], b3[h3 + 16 >> 2] = k4;
                  } else {
                    b3[b3[o5 + 4 >> 2] + ((-1 ^ e5) << 2) >> 2] = 0;
                    f:
                      if (!((0 | (e5 = b3[o5 + 12 >> 2])) < 1))
                        for (k4 = b3[o5 + 8 >> 2]; ; ) {
                          if (b3[b3[k4 + ((f3 = e5 - 1 | 0) << 2) >> 2] >> 2])
                            break f;
                          if (b3[o5 + 12 >> 2] = f3, i5 = (0 | e5) > 1, e5 = f3, !i5)
                            break;
                        }
                  }
                  if (f3 = b3[b3[v3 + 4 >> 2] + 12 >> 2], b3[a5 + 24 >> 2] = 0, b3[a5 + 28 >> 2] = 0, b3[a5 + 16 >> 2] = 0, b3[a5 + 20 >> 2] = 0, e5 = b3[287], b3[a5 + 8 >> 2] = b3[286], b3[a5 + 12 >> 2] = e5, e5 = b3[285], b3[a5 >> 2] = b3[284], b3[a5 + 4 >> 2] = e5, e5 = b3[f3 + 16 >> 2], b3[a5 + 16 >> 2] = b3[e5 + 12 >> 2], b3[a5 + 20 >> 2] = b3[b3[A3 + 16 >> 2] + 12 >> 2], d2[a5 + 36 >> 2] = d2[e5 + 16 >> 2], d2[a5 + 40 >> 2] = d2[e5 + 20 >> 2], d2[a5 + 44 >> 2] = d2[e5 + 24 >> 2], b3[e5 + 12 >> 2] = 0, i5 = e5 + 12 | 0, 8 == (0 | (e5 = b3[r6 + 1736 >> 2])) ? be[b3[r6 + 76 >> 2]](a5 + 36 | 0, a5 + 16 | 0, a5, i5) : be[0 | e5](a5 + 36 | 0, a5 + 16 | 0, a5, i5, b3[r6 + 1896 >> 2]), b3[i5 >> 2] || (b3[i5 >> 2] = b3[a5 + 16 >> 2]), tr2(f3, A3))
                    break e;
                  break r;
                }
                if (!(pr2(b3[b3[A3 + 4 >> 2] + 16 >> 2], i5, k4) < m2(0))) {
                  if (g3 = 1, n4[e5 + 14 | 0] = 1, n4[b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !ir2(b3[A3 + 4 >> 2]))
                    break r;
                  if (!tr2(b3[b3[v3 + 4 >> 2] + 12 >> 2], A3))
                    break r;
                }
              }
              return U2 = a5 + 48 | 0, g3;
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function J2(r6) {
            r6 |= 0;
            var e5 = 0, f3 = 0, i5 = m2(0), a5 = m2(0), n5 = m2(0), t4 = m2(0), o5 = m2(0), u3 = m2(0), c3 = 0, s3 = 0, A3 = 0, l4 = m2(0), v3 = m2(0), h3 = 0, p3 = m2(0), w3 = m2(0), y3 = m2(0), g3 = m2(0), E3 = m2(0), C3 = 0, R3 = 0, M3 = m2(0), I3 = m2(0), _3 = m2(0);
            r: {
              e:
                if (!((0 | (A3 = b3[r6 + 112 >> 2])) < 3)) {
                  if (c3 = (R3 = r6 + 116 | 0) + (A3 << 4) | 0, t4 = d2[r6 + 24 >> 2], o5 = d2[r6 + 16 >> 2], u3 = d2[r6 + 20 >> 2], t4 != m2(0) || o5 != m2(0) | u3 != m2(0))
                    p3 = d2[r6 + 124 >> 2], n5 = m2(d2[r6 + 140 >> 2] - p3), w3 = d2[r6 + 120 >> 2], l4 = m2(d2[r6 + 136 >> 2] - w3), y3 = d2[r6 + 116 >> 2], v3 = m2(d2[r6 + 132 >> 2] - y3);
                  else {
                    for (f3 = r6 + 148 | 0, t4 = m2(0), u3 = m2(0), o5 = m2(0), e5 = r6 + 132 | 0, y3 = d2[r6 + 116 >> 2], i5 = v3 = m2(d2[e5 >> 2] - y3), w3 = d2[r6 + 120 >> 2], a5 = l4 = m2(d2[r6 + 136 >> 2] - w3), p3 = d2[r6 + 124 >> 2], g3 = n5 = m2(d2[r6 + 140 >> 2] - p3); E3 = m2(d2[e5 + 20 >> 2] - w3), M3 = m2(d2[f3 >> 2] - y3), I3 = m2(m2(i5 * E3) - m2(a5 * M3)), _3 = m2(d2[e5 + 24 >> 2] - p3), a5 = m2(m2(a5 * _3) - m2(g3 * E3)), i5 = m2(m2(g3 * M3) - m2(i5 * _3)), m2(m2(t4 * I3) + m2(m2(o5 * a5) + m2(u3 * i5))) >= m2(0) ? (u3 = m2(u3 + i5), o5 = m2(o5 + a5), t4 = m2(t4 + I3)) : (u3 = m2(u3 - i5), o5 = m2(o5 - a5), t4 = m2(t4 - I3)), i5 = M3, a5 = E3, g3 = _3, c3 >>> 0 > (f3 = (e5 = f3) + 16 | 0) >>> 0; )
                      ;
                    if ((0 | A3) < 3)
                      break e;
                  }
                  for (f3 = r6 + 148 | 0, e5 = h3 = r6 + 132 | 0; ; ) {
                    i5 = n5, n5 = l4, C3 = e5, a5 = v3, l4 = m2(d2[e5 + 20 >> 2] - w3), v3 = m2(d2[(e5 = f3) >> 2] - y3), E3 = m2(t4 * m2(m2(a5 * l4) - m2(n5 * v3))), g3 = n5, n5 = m2(d2[C3 + 24 >> 2] - p3);
                    f:
                      if ((i5 = m2(E3 + m2(m2(o5 * m2(m2(g3 * n5) - m2(i5 * l4))) + m2(u3 * m2(m2(i5 * v3) - m2(a5 * n5)))))) != m2(0)) {
                        if (i5 > m2(0)) {
                          if (f3 = 0, C3 = (0 | s3) < 0, s3 = 1, !C3)
                            break f;
                          break r;
                        }
                        if (f3 = 0, C3 = (0 | s3) > 0, s3 = -1, C3)
                          break r;
                      }
                    if (!(c3 >>> 0 > (f3 = e5 + 16 | 0) >>> 0))
                      break;
                  }
                  switch (f3 = 0, 0 | s3) {
                    case 2:
                      break r;
                    case 0:
                      break e;
                  }
                  f3 = 1;
                  f: {
                    i:
                      switch (b3[r6 + 56 >> 2] - 100132 | 0) {
                        case 0:
                          if ((0 | s3) >= 0)
                            break f;
                          break e;
                        case 2:
                          break r;
                        case 1:
                          break i;
                        default:
                          break f;
                      }
                    if ((0 | s3) > 0)
                      break e;
                  }
                  3 == (0 | (e5 = b3[r6 + 1716 >> 2])) ? be[b3[r6 + 88 >> 2]](k3[r6 + 81 | 0] ? 2 : (0 | A3) < 4 ? 4 : 6) : be[0 | e5](k3[r6 + 81 | 0] ? 2 : (0 | A3) < 4 ? 4 : 6, b3[r6 + 1896 >> 2]), 5 == (0 | (e5 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[r6 + 128 >> 2]) : be[0 | e5](b3[r6 + 128 >> 2], b3[r6 + 1896 >> 2]);
                  f:
                    if ((0 | s3) <= 0) {
                      if (R3 >>> 0 >= (e5 = c3 - 16 | 0) >>> 0)
                        break f;
                      for (; 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[c3 - 4 >> 2]) : be[0 | f3](b3[c3 - 4 >> 2], b3[r6 + 1896 >> 2]), c3 = e5, R3 >>> 0 < (e5 = e5 - 16 | 0) >>> 0; )
                        ;
                    } else if (!((0 | A3) < 2))
                      for (; 5 == (0 | (e5 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[h3 + 12 >> 2]) : be[0 | e5](b3[h3 + 12 >> 2], b3[r6 + 1896 >> 2]), (h3 = h3 + 16 | 0) >>> 0 < c3 >>> 0; )
                        ;
                  6 == (0 | (e5 = b3[r6 + 1728 >> 2])) ? be[b3[r6 + 100 >> 2]]() : be[0 | e5](b3[r6 + 1896 >> 2]);
                }
              f3 = 1;
            }
            return 0 | f3;
          }
          function Z2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, k4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0;
            if (!r6)
              return O2(e5);
            if (e5 >>> 0 >= 4294967232)
              return b3[613] = 48, 0;
            t4 = e5 >>> 0 < 11 ? 16 : e5 + 11 & -8, a5 = -8 & (u3 = b3[4 + (n5 = r6 - 8 | 0) >> 2]);
            r:
              if (3 & u3) {
                o5 = a5 + n5 | 0;
                e:
                  if (a5 >>> 0 >= t4 >>> 0) {
                    if ((i5 = a5 - t4 | 0) >>> 0 < 16)
                      break e;
                    b3[n5 + 4 >> 2] = 1 & u3 | t4 | 2, b3[4 + (f3 = n5 + t4 | 0) >> 2] = 3 | i5, b3[o5 + 4 >> 2] = 1 | b3[o5 + 4 >> 2], V2(f3, i5);
                  } else if (b3[620] != (0 | o5))
                    if (b3[619] != (0 | o5)) {
                      if (2 & (i5 = b3[o5 + 4 >> 2]))
                        break r;
                      if ((c3 = a5 + (-8 & i5) | 0) >>> 0 < t4 >>> 0)
                        break r;
                      A3 = c3 - t4 | 0;
                      f:
                        if (i5 >>> 0 <= 255) {
                          if (a5 = b3[o5 + 8 >> 2], f3 = i5 >>> 3 | 0, (0 | (i5 = b3[o5 + 12 >> 2])) == (0 | a5)) {
                            l4 = 2456, v3 = b3[614] & Jr(f3), b3[l4 >> 2] = v3;
                            break f;
                          }
                          b3[a5 + 12 >> 2] = i5, b3[i5 + 8 >> 2] = a5;
                        } else {
                          if (s3 = b3[o5 + 24 >> 2], (0 | (k4 = b3[o5 + 12 >> 2])) == (0 | o5))
                            if ((f3 = b3[(a5 = o5 + 20 | 0) >> 2]) || (f3 = b3[(a5 = o5 + 16 | 0) >> 2])) {
                              for (; i5 = a5, k4 = f3, (f3 = b3[(a5 = f3 + 20 | 0) >> 2]) || (a5 = k4 + 16 | 0, f3 = b3[k4 + 16 >> 2]); )
                                ;
                              b3[i5 >> 2] = 0;
                            } else
                              k4 = 0;
                          else
                            f3 = b3[o5 + 8 >> 2], b3[f3 + 12 >> 2] = k4, b3[k4 + 8 >> 2] = f3;
                          if (s3) {
                            i5 = b3[o5 + 28 >> 2];
                            i: {
                              if (b3[(f3 = 2760 + (i5 << 2) | 0) >> 2] == (0 | o5)) {
                                if (b3[f3 >> 2] = k4, k4)
                                  break i;
                                l4 = 2460, v3 = b3[615] & Jr(i5), b3[l4 >> 2] = v3;
                                break f;
                              }
                              if (b3[(b3[s3 + 16 >> 2] == (0 | o5) ? 16 : 20) + s3 >> 2] = k4, !k4)
                                break f;
                            }
                            b3[k4 + 24 >> 2] = s3, (f3 = b3[o5 + 16 >> 2]) && (b3[k4 + 16 >> 2] = f3, b3[f3 + 24 >> 2] = k4), (f3 = b3[o5 + 20 >> 2]) && (b3[k4 + 20 >> 2] = f3, b3[f3 + 24 >> 2] = k4);
                          }
                        }
                      A3 >>> 0 <= 15 ? (b3[n5 + 4 >> 2] = 1 & u3 | c3 | 2, b3[4 + (f3 = n5 + c3 | 0) >> 2] = 1 | b3[f3 + 4 >> 2]) : (b3[n5 + 4 >> 2] = 1 & u3 | t4 | 2, b3[4 + (i5 = n5 + t4 | 0) >> 2] = 3 | A3, b3[4 + (f3 = n5 + c3 | 0) >> 2] = 1 | b3[f3 + 4 >> 2], V2(i5, A3));
                    } else {
                      if ((i5 = a5 + b3[616] | 0) >>> 0 < t4 >>> 0)
                        break r;
                      (f3 = i5 - t4 | 0) >>> 0 >= 16 ? (b3[n5 + 4 >> 2] = 1 & u3 | t4 | 2, b3[4 + (a5 = n5 + t4 | 0) >> 2] = 1 | f3, b3[(i5 = i5 + n5 | 0) >> 2] = f3, b3[i5 + 4 >> 2] = -2 & b3[i5 + 4 >> 2]) : (b3[n5 + 4 >> 2] = i5 | 1 & u3 | 2, b3[4 + (f3 = i5 + n5 | 0) >> 2] = 1 | b3[f3 + 4 >> 2], f3 = 0, a5 = 0), b3[619] = a5, b3[616] = f3;
                    }
                  else {
                    if ((a5 = a5 + b3[617] | 0) >>> 0 <= t4 >>> 0)
                      break r;
                    b3[n5 + 4 >> 2] = 1 & u3 | t4 | 2, f3 = a5 - t4 | 0, b3[4 + (i5 = n5 + t4 | 0) >> 2] = 1 | f3, b3[617] = f3, b3[620] = i5;
                  }
                f3 = n5;
              } else {
                if (t4 >>> 0 < 256)
                  break r;
                if (a5 >>> 0 >= t4 + 4 >>> 0 && (f3 = n5, a5 - t4 >>> 0 <= b3[734] << 1 >>> 0))
                  break r;
                f3 = 0;
              }
            return f3 ? f3 + 8 | 0 : (n5 = O2(e5)) ? (fr2(n5, r6, e5 >>> 0 > (f3 = (3 & (f3 = b3[r6 - 4 >> 2]) ? -4 : -8) + (-8 & f3) | 0) >>> 0 ? f3 : e5), Y2(r6), n5) : 0;
          }
          function X2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = m2(0), s3 = 0, A3 = m2(0);
            for (i5 = b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2]; ; ) {
              r: {
                if (k3[i5 + 14 | 0])
                  for (; i5 = b3[b3[b3[(e5 = i5) + 4 >> 2] + 8 >> 2] >> 2], k3[i5 + 14 | 0]; )
                    ;
                e: {
                  f: {
                    i: {
                      a: {
                        if (k3[e5 + 14 | 0])
                          f3 = e5;
                        else {
                          if (!(f3 = b3[b3[b3[e5 + 4 >> 2] + 4 >> 2] >> 2]))
                            break a;
                          if (i5 = e5, !k3[f3 + 14 | 0])
                            break a;
                        }
                        n4[f3 + 14 | 0] = 0, a5 = b3[f3 >> 2], e5 = b3[b3[a5 + 4 >> 2] + 16 >> 2], o5 = b3[i5 >> 2];
                        n:
                          if ((0 | e5) != b3[b3[o5 + 4 >> 2] + 16 >> 2]) {
                            c3 = d2[e5 + 28 >> 2], s3 = b3[b3[b3[f3 + 4 >> 2] + 8 >> 2] >> 2], t4 = b3[s3 >> 2], u3 = b3[b3[t4 + 4 >> 2] + 16 >> 2], A3 = d2[u3 + 28 >> 2];
                            t: {
                              if (!(!(d2[e5 + 32 >> 2] <= d2[u3 + 32 >> 2]) | c3 != A3) || c3 < A3) {
                                if (pr2(e5, u3, b3[a5 + 16 >> 2]) < m2(0)) {
                                  e5 = f3;
                                  break n;
                                }
                                if (n4[f3 + 14 | 0] = 1, n4[b3[b3[b3[f3 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !(e5 = ir2(a5)))
                                  break e;
                                if (tr2(b3[t4 + 4 >> 2], e5))
                                  break t;
                                break r;
                              }
                              if (pr2(u3, e5, b3[t4 + 16 >> 2]) > m2(0)) {
                                e5 = f3;
                                break n;
                              }
                              if (n4[s3 + 14 | 0] = 1, n4[f3 + 14 | 0] = 1, !(e5 = ir2(t4)))
                                break r;
                              if (!tr2(b3[a5 + 12 >> 2], b3[t4 + 4 >> 2]))
                                break r;
                              e5 = b3[e5 + 4 >> 2];
                            }
                            if (n4[b3[e5 + 20 >> 2] + 21 | 0] = k3[f3 + 12 | 0], k3[i5 + 15 | 0]) {
                              if (b3[b3[i5 >> 2] + 24 >> 2] = 0, Vr(b3[i5 + 4 >> 2]), Y2(i5), !rr2(o5))
                                break r;
                              i5 = b3[b3[b3[f3 + 4 >> 2] + 8 >> 2] >> 2], o5 = b3[i5 >> 2], e5 = f3;
                            } else if (k3[f3 + 15 | 0]) {
                              if (b3[b3[f3 >> 2] + 24 >> 2] = 0, Vr(b3[f3 + 4 >> 2]), Y2(f3), !rr2(a5))
                                break r;
                              e5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2], a5 = b3[e5 >> 2];
                            } else
                              e5 = f3;
                          } else
                            e5 = f3;
                        if (b3[a5 + 16 >> 2] == b3[o5 + 16 >> 2])
                          break f;
                        if (f3 = b3[b3[a5 + 4 >> 2] + 16 >> 2], t4 = b3[b3[o5 + 4 >> 2] + 16 >> 2], k3[i5 + 15 | 0] | k3[e5 + 15 | 0] | (0 | f3) == (0 | t4))
                          break i;
                        if (u3 = f3, (0 | (f3 = b3[r6 + 72 >> 2])) != (0 | t4) && (0 | u3) != (0 | f3))
                          break i;
                        if (!H2(r6, e5))
                          break f;
                      }
                      return;
                    }
                    G2(r6, e5);
                  }
                  if (b3[a5 + 16 >> 2] != b3[o5 + 16 >> 2])
                    continue;
                  if (t4 = b3[a5 + 4 >> 2], f3 = b3[o5 + 4 >> 2], b3[t4 + 16 >> 2] != b3[f3 + 16 >> 2])
                    continue;
                  if (b3[o5 + 28 >> 2] = b3[o5 + 28 >> 2] + b3[a5 + 28 >> 2], b3[f3 + 28 >> 2] = b3[f3 + 28 >> 2] + b3[t4 + 28 >> 2], b3[b3[e5 >> 2] + 24 >> 2] = 0, Vr(b3[e5 + 4 >> 2]), Y2(e5), !rr2(a5))
                    break r;
                  e5 = b3[b3[b3[i5 + 4 >> 2] + 4 >> 2] >> 2];
                  continue;
                }
              }
              break;
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function $2(r6) {
            r6 |= 0;
            var e5 = 0, f3 = 0, i5 = 0, a5 = m2(0), n5 = m2(0), t4 = 0, o5 = 0, u3 = 0, c3 = 0;
            if ((0 | (e5 = b3[r6 + 40 >> 2])) != (0 | (u3 = r6 + 40 | 0)))
              for (; ; ) {
                if (r6 = b3[e5 >> 2], k3[e5 + 21 | 0]) {
                  for (e5 = e5 + 8 | 0; e5 = b3[e5 >> 2], f3 = b3[b3[e5 + 4 >> 2] + 16 >> 2], a5 = d2[f3 + 28 >> 2], i5 = b3[e5 + 16 >> 2], n5 = d2[i5 + 28 >> 2], !(!(d2[f3 + 32 >> 2] <= d2[i5 + 32 >> 2]) | a5 != n5) || a5 < n5; )
                    e5 = b3[e5 + 8 >> 2] + 4 | 0;
                  for (; !(!(d2[i5 + 32 >> 2] <= d2[f3 + 32 >> 2]) | a5 != n5) || a5 > n5; )
                    e5 = b3[e5 + 12 >> 2], i5 = b3[e5 + 16 >> 2], n5 = d2[i5 + 28 >> 2], f3 = b3[b3[e5 + 4 >> 2] + 16 >> 2], a5 = d2[f3 + 28 >> 2];
                  r: {
                    e:
                      if ((0 | (i5 = b3[b3[e5 + 8 >> 2] + 4 >> 2])) != b3[e5 + 12 >> 2])
                        for (; ; ) {
                          if (t4 = b3[i5 + 16 >> 2], n5 = d2[t4 + 28 >> 2], !(d2[f3 + 32 >> 2] <= d2[t4 + 32 >> 2]) | a5 != n5 && !(n5 > a5)) {
                            f:
                              if (b3[i5 + 12 >> 2] != (0 | e5))
                                for (; ; ) {
                                  if (f3 = b3[b3[e5 + 8 >> 2] + 4 >> 2], t4 = b3[f3 + 16 >> 2], a5 = d2[t4 + 28 >> 2], o5 = b3[b3[f3 + 4 >> 2] + 16 >> 2], !(a5 < (n5 = d2[o5 + 28 >> 2]) | (d2[t4 + 32 >> 2] <= d2[o5 + 32 >> 2] ? a5 == n5 : 0))) {
                                    if (!(pr2(b3[b3[e5 + 4 >> 2] + 16 >> 2], b3[e5 + 16 >> 2], t4) >= m2(0)))
                                      break f;
                                    f3 = b3[b3[e5 + 8 >> 2] + 4 >> 2];
                                  }
                                  if (e5 = er2(e5, f3), f3 = 0, !e5)
                                    break r;
                                  if ((0 | (e5 = b3[e5 + 4 >> 2])) == b3[i5 + 12 >> 2])
                                    break;
                                }
                            e5 = b3[e5 + 12 >> 2];
                          } else {
                            f:
                              if ((0 | (f3 = b3[i5 + 12 >> 2])) != (0 | e5))
                                for (t4 = i5 + 12 | 0; ; ) {
                                  if (o5 = b3[b3[f3 + 4 >> 2] + 16 >> 2], a5 = d2[o5 + 28 >> 2], c3 = b3[f3 + 16 >> 2], !(a5 < (n5 = d2[c3 + 28 >> 2]) | (d2[o5 + 32 >> 2] <= d2[c3 + 32 >> 2] ? a5 == n5 : 0))) {
                                    if (!(pr2(b3[i5 + 16 >> 2], b3[b3[i5 + 4 >> 2] + 16 >> 2], o5) <= m2(0)))
                                      break f;
                                    f3 = b3[t4 >> 2];
                                  }
                                  if (i5 = er2(f3, i5), f3 = 0, !i5)
                                    break r;
                                  if (t4 = (i5 = b3[i5 + 4 >> 2]) + 12 | 0, (0 | (f3 = b3[i5 + 12 >> 2])) == (0 | e5))
                                    break;
                                }
                            i5 = b3[b3[i5 + 8 >> 2] + 4 >> 2];
                          }
                          if (b3[e5 + 12 >> 2] == (0 | i5))
                            break e;
                          f3 = b3[b3[e5 + 4 >> 2] + 16 >> 2], a5 = d2[f3 + 28 >> 2];
                        }
                    if (f3 = b3[i5 + 12 >> 2], b3[f3 + 12 >> 2] != (0 | e5))
                      for (; ; ) {
                        if (i5 = er2(f3, i5), f3 = 0, !i5)
                          break r;
                        if (i5 = b3[i5 + 4 >> 2], f3 = b3[i5 + 12 >> 2], b3[f3 + 12 >> 2] == (0 | e5))
                          break;
                      }
                    f3 = 1;
                  }
                  if (!f3)
                    return 0;
                }
                if ((0 | u3) == (0 | (e5 = r6)))
                  break;
              }
            return 1;
          }
          function rr2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0;
            if (a5 = b3[r6 + 4 >> 2], (0 | (o5 = b3[a5 + 20 >> 2])) != (0 | (f3 = b3[r6 + 20 >> 2]))) {
              for (e5 = i5 = b3[f3 + 8 >> 2]; b3[e5 + 20 >> 2] = o5, (0 | i5) != (0 | (e5 = b3[e5 + 12 >> 2])); )
                ;
              e5 = b3[f3 >> 2], i5 = b3[f3 + 4 >> 2], b3[e5 + 4 >> 2] = i5, b3[i5 >> 2] = e5, Y2(f3);
            }
            if ((0 | (i5 = b3[r6 + 8 >> 2])) != (0 | r6)) {
              if (t4 = b3[r6 + 4 >> 2], e5 = b3[t4 + 12 >> 2], b3[b3[t4 + 20 >> 2] + 8 >> 2] = e5, b3[b3[r6 + 16 >> 2] + 8 >> 2] = i5, t4 = b3[e5 + 8 >> 2], b3[b3[i5 + 4 >> 2] + 12 >> 2] = e5, b3[b3[t4 + 4 >> 2] + 12 >> 2] = r6, b3[r6 + 8 >> 2] = t4, b3[e5 + 8 >> 2] = i5, (0 | f3) == (0 | o5)) {
                if (!(f3 = O2(24)))
                  return 0;
                for (e5 = b3[r6 + 20 >> 2], i5 = b3[e5 + 4 >> 2], b3[f3 + 4 >> 2] = i5, b3[i5 >> 2] = f3, b3[f3 >> 2] = e5, b3[e5 + 4 >> 2] = f3, b3[f3 + 12 >> 2] = 0, b3[f3 + 16 >> 2] = 0, b3[f3 + 8 >> 2] = r6, n4[f3 + 20 | 0] = 0, n4[f3 + 21 | 0] = k3[e5 + 21 | 0], e5 = r6; b3[e5 + 20 >> 2] = f3, (0 | (e5 = b3[e5 + 12 >> 2])) != (0 | r6); )
                  ;
              }
            } else {
              for (f3 = b3[r6 + 16 >> 2], e5 = i5 = b3[f3 + 8 >> 2]; b3[e5 + 16 >> 2] = 0, (0 | i5) != (0 | (e5 = b3[e5 + 8 >> 2])); )
                ;
              e5 = b3[f3 >> 2], i5 = b3[f3 + 4 >> 2], b3[e5 + 4 >> 2] = i5, b3[i5 >> 2] = e5, Y2(f3);
            }
            if ((0 | (e5 = b3[a5 + 8 >> 2])) != (0 | a5))
              f3 = b3[b3[a5 + 4 >> 2] + 12 >> 2], b3[b3[r6 + 20 >> 2] + 8 >> 2] = f3, b3[b3[a5 + 16 >> 2] + 8 >> 2] = e5, i5 = b3[f3 + 8 >> 2], b3[b3[e5 + 4 >> 2] + 12 >> 2] = f3, b3[b3[i5 + 4 >> 2] + 12 >> 2] = a5, b3[a5 + 8 >> 2] = i5, b3[f3 + 8 >> 2] = e5;
            else {
              for (f3 = b3[a5 + 16 >> 2], e5 = i5 = b3[f3 + 8 >> 2]; b3[e5 + 16 >> 2] = 0, (0 | i5) != (0 | (e5 = b3[e5 + 8 >> 2])); )
                ;
              for (e5 = b3[f3 >> 2], i5 = b3[f3 + 4 >> 2], b3[e5 + 4 >> 2] = i5, b3[i5 >> 2] = e5, Y2(f3), f3 = b3[a5 + 20 >> 2], e5 = a5 = b3[f3 + 8 >> 2]; b3[e5 + 20 >> 2] = 0, (0 | a5) != (0 | (e5 = b3[e5 + 12 >> 2])); )
                ;
              e5 = b3[f3 >> 2], a5 = b3[f3 + 4 >> 2], b3[e5 + 4 >> 2] = a5, b3[a5 >> 2] = e5, Y2(f3);
            }
            return e5 = b3[r6 + 4 >> 2], e5 = b3[(r6 = r6 >>> 0 > e5 >>> 0 ? e5 : r6) >> 2], f3 = b3[b3[r6 + 4 >> 2] >> 2], b3[b3[e5 + 4 >> 2] >> 2] = f3, b3[b3[f3 + 4 >> 2] >> 2] = e5, Y2(r6), 1;
          }
          function er2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0;
            if (i5 = 0, f3 = O2(64)) {
              if (u3 = b3[r6 + 4 >> 2], t4 = b3[(i5 = r6 >>> 0 > u3 >>> 0 ? u3 : r6) + 4 >> 2], a5 = b3[t4 >> 2], b3[f3 + 32 >> 2] = a5, b3[b3[a5 + 4 >> 2] >> 2] = f3, b3[f3 >> 2] = i5, o5 = f3 + 32 | 0, b3[t4 >> 2] = o5, b3[f3 + 16 >> 2] = 0, b3[f3 + 20 >> 2] = 0, b3[f3 + 12 >> 2] = o5, b3[f3 + 4 >> 2] = o5, b3[f3 + 24 >> 2] = 0, b3[f3 + 28 >> 2] = 0, b3[f3 + 48 >> 2] = 0, b3[f3 + 52 >> 2] = 0, b3[f3 + 44 >> 2] = f3, b3[f3 + 40 >> 2] = o5, b3[f3 + 36 >> 2] = f3, b3[f3 + 56 >> 2] = 0, b3[f3 + 60 >> 2] = 0, b3[f3 + 8 >> 2] = f3, (0 | (c3 = b3[r6 + 20 >> 2])) != (0 | (t4 = b3[e5 + 20 >> 2]))) {
                for (i5 = a5 = b3[t4 + 8 >> 2]; b3[i5 + 20 >> 2] = c3, (0 | a5) != (0 | (i5 = b3[i5 + 12 >> 2])); )
                  ;
                i5 = b3[t4 >> 2], a5 = b3[t4 + 4 >> 2], b3[i5 + 4 >> 2] = a5, b3[a5 >> 2] = i5, Y2(t4), u3 = b3[r6 + 4 >> 2], a5 = b3[f3 + 8 >> 2], i5 = b3[r6 + 20 >> 2];
              } else
                a5 = f3, i5 = t4;
              if (r6 = b3[r6 + 12 >> 2], s3 = b3[r6 + 8 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = r6, b3[b3[s3 + 4 >> 2] + 12 >> 2] = f3, b3[f3 + 8 >> 2] = s3, b3[r6 + 8 >> 2] = a5, r6 = b3[e5 + 8 >> 2], a5 = b3[f3 + 40 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = e5, b3[b3[r6 + 4 >> 2] + 12 >> 2] = o5, b3[f3 + 40 >> 2] = r6, b3[e5 + 8 >> 2] = a5, b3[f3 + 16 >> 2] = b3[u3 + 16 >> 2], e5 = b3[e5 + 16 >> 2], r6 = i5, b3[f3 + 52 >> 2] = r6, b3[f3 + 48 >> 2] = e5, b3[f3 + 20 >> 2] = r6, b3[r6 + 8 >> 2] = o5, i5 = f3, (0 | t4) == (0 | c3) && (i5 = 0, e5 = O2(24))) {
                for (i5 = b3[r6 + 4 >> 2], b3[e5 + 4 >> 2] = i5, b3[i5 >> 2] = e5, b3[e5 >> 2] = r6, b3[r6 + 4 >> 2] = e5, b3[e5 + 12 >> 2] = 0, b3[e5 + 16 >> 2] = 0, b3[e5 + 8 >> 2] = f3, n4[e5 + 20 | 0] = 0, n4[e5 + 21 | 0] = k3[r6 + 21 | 0], i5 = f3; b3[i5 + 20 >> 2] = e5, (0 | (i5 = b3[i5 + 12 >> 2])) != (0 | f3); )
                  ;
                i5 = f3;
              }
            }
            return i5;
          }
          function fr2(r6, e5, f3) {
            var i5 = 0, a5 = 0;
            if (f3 >>> 0 >= 512)
              T2(0 | r6, 0 | e5, 0 | f3);
            else {
              i5 = r6 + f3 | 0;
              r:
                if (3 & (r6 ^ e5))
                  if (i5 >>> 0 < 4)
                    f3 = r6;
                  else if ((a5 = i5 - 4 | 0) >>> 0 < r6 >>> 0)
                    f3 = r6;
                  else
                    for (f3 = r6; n4[0 | f3] = k3[0 | e5], n4[f3 + 1 | 0] = k3[e5 + 1 | 0], n4[f3 + 2 | 0] = k3[e5 + 2 | 0], n4[f3 + 3 | 0] = k3[e5 + 3 | 0], e5 = e5 + 4 | 0, a5 >>> 0 >= (f3 = f3 + 4 | 0) >>> 0; )
                      ;
                else {
                  e:
                    if (3 & r6)
                      if ((0 | f3) < 1)
                        f3 = r6;
                      else
                        for (f3 = r6; ; ) {
                          if (n4[0 | f3] = k3[0 | e5], e5 = e5 + 1 | 0, !(3 & (f3 = f3 + 1 | 0)))
                            break e;
                          if (!(f3 >>> 0 < i5 >>> 0))
                            break;
                        }
                    else
                      f3 = r6;
                  if (!((r6 = -4 & i5) >>> 0 < 64 || (a5 = r6 + -64 | 0) >>> 0 < f3 >>> 0))
                    for (; b3[f3 >> 2] = b3[e5 >> 2], b3[f3 + 4 >> 2] = b3[e5 + 4 >> 2], b3[f3 + 8 >> 2] = b3[e5 + 8 >> 2], b3[f3 + 12 >> 2] = b3[e5 + 12 >> 2], b3[f3 + 16 >> 2] = b3[e5 + 16 >> 2], b3[f3 + 20 >> 2] = b3[e5 + 20 >> 2], b3[f3 + 24 >> 2] = b3[e5 + 24 >> 2], b3[f3 + 28 >> 2] = b3[e5 + 28 >> 2], b3[f3 + 32 >> 2] = b3[e5 + 32 >> 2], b3[f3 + 36 >> 2] = b3[e5 + 36 >> 2], b3[f3 + 40 >> 2] = b3[e5 + 40 >> 2], b3[f3 + 44 >> 2] = b3[e5 + 44 >> 2], b3[f3 + 48 >> 2] = b3[e5 + 48 >> 2], b3[f3 + 52 >> 2] = b3[e5 + 52 >> 2], b3[f3 + 56 >> 2] = b3[e5 + 56 >> 2], b3[f3 + 60 >> 2] = b3[e5 + 60 >> 2], e5 = e5 - -64 | 0, a5 >>> 0 >= (f3 = f3 - -64 | 0) >>> 0; )
                      ;
                  if (r6 >>> 0 <= f3 >>> 0)
                    break r;
                  for (; b3[f3 >> 2] = b3[e5 >> 2], e5 = e5 + 4 | 0, r6 >>> 0 > (f3 = f3 + 4 | 0) >>> 0; )
                    ;
                }
              if (f3 >>> 0 < i5 >>> 0)
                for (; n4[0 | f3] = k3[0 | e5], e5 = e5 + 1 | 0, (0 | i5) != (0 | (f3 = f3 + 1 | 0)); )
                  ;
            }
          }
          function ir2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0;
            if (n5 = r6 |= 0, r6 = 0, (e5 = O2(64)) && (i5 = b3[n5 + 4 >> 2], a5 = b3[(f3 = i5 >>> 0 < n5 >>> 0 ? i5 : n5) + 4 >> 2], t4 = b3[a5 >> 2], b3[e5 + 32 >> 2] = t4, b3[b3[t4 + 4 >> 2] >> 2] = e5, b3[e5 >> 2] = f3, f3 = e5 + 32 | 0, b3[a5 >> 2] = f3, b3[e5 + 16 >> 2] = 0, b3[e5 + 20 >> 2] = 0, b3[e5 + 12 >> 2] = f3, b3[e5 + 4 >> 2] = f3, b3[e5 + 24 >> 2] = 0, b3[e5 + 28 >> 2] = 0, b3[e5 + 48 >> 2] = 0, b3[e5 + 52 >> 2] = 0, b3[e5 + 40 >> 2] = f3, b3[e5 + 36 >> 2] = e5, b3[e5 + 56 >> 2] = 0, b3[e5 + 60 >> 2] = 0, b3[e5 + 8 >> 2] = e5, a5 = b3[n5 + 12 >> 2], t4 = b3[a5 + 8 >> 2], b3[e5 + 44 >> 2] = a5, b3[b3[t4 + 4 >> 2] + 12 >> 2] = e5, b3[e5 + 8 >> 2] = t4, b3[a5 + 8 >> 2] = e5, a5 = b3[i5 + 16 >> 2], b3[e5 + 16 >> 2] = a5, i5 = O2(40))) {
              for (r6 = b3[a5 + 4 >> 2], b3[i5 + 4 >> 2] = r6, b3[r6 >> 2] = i5, b3[i5 >> 2] = a5, b3[a5 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 8 >> 2] = f3, r6 = f3; b3[r6 + 16 >> 2] = i5, (0 | f3) != (0 | (r6 = b3[r6 + 8 >> 2])); )
                ;
              r6 = b3[n5 + 20 >> 2], b3[e5 + 20 >> 2] = r6, b3[e5 + 52 >> 2] = r6, r6 = e5;
            }
            return r6 ? (e5 = b3[r6 + 4 >> 2], r6 = b3[n5 + 4 >> 2], f3 = b3[b3[r6 + 4 >> 2] + 12 >> 2], i5 = b3[f3 + 8 >> 2], a5 = b3[r6 + 8 >> 2], b3[b3[a5 + 4 >> 2] + 12 >> 2] = f3, b3[b3[i5 + 4 >> 2] + 12 >> 2] = r6, b3[r6 + 8 >> 2] = i5, b3[f3 + 8 >> 2] = a5, f3 = b3[e5 + 8 >> 2], i5 = b3[r6 + 8 >> 2], b3[b3[i5 + 4 >> 2] + 12 >> 2] = e5, b3[b3[f3 + 4 >> 2] + 12 >> 2] = r6, b3[r6 + 8 >> 2] = f3, b3[e5 + 8 >> 2] = i5, b3[r6 + 16 >> 2] = b3[e5 + 16 >> 2], f3 = b3[e5 + 4 >> 2], b3[b3[f3 + 16 >> 2] + 8 >> 2] = f3, b3[f3 + 20 >> 2] = b3[r6 + 20 >> 2], b3[e5 + 28 >> 2] = b3[n5 + 28 >> 2], b3[f3 + 28 >> 2] = b3[r6 + 28 >> 2], 0 | e5) : 0;
          }
          function ar2(r6, e5, f3, i5, a5, t4) {
            var o5 = 0, k4 = 0, u3 = 0, c3 = 0, s3 = 0;
            c3 = e5 + 4 | 0, u3 = r6 - -64 | 0;
            r: {
              for (; ; ) {
                if (k4 = b3[f3 + 4 >> 2], !(o5 = O2(16)))
                  break r;
                if (b3[o5 >> 2] = k4, s3 = Fr2(b3[u3 >> 2], b3[e5 + 4 >> 2], o5), b3[o5 + 4 >> 2] = s3, !s3)
                  break r;
                if (n4[o5 + 13 | 0] = 0, n4[o5 + 14 | 0] = 0, n4[o5 + 15 | 0] = 0, b3[k4 + 24 >> 2] = o5, (0 | i5) == (0 | (f3 = b3[f3 + 8 >> 2])))
                  break;
              }
              if (o5 = b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2], f3 = b3[b3[o5 >> 2] + 4 >> 2], a5 = a5 || b3[f3 + 8 >> 2], b3[f3 + 16 >> 2] == b3[a5 + 16 >> 2])
                for (u3 = 0; ; ) {
                  if (i5 = e5, e5 = o5, (0 | (o5 = a5)) != b3[(a5 = f3) + 8 >> 2]) {
                    if (!tr2(b3[b3[a5 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    if (!tr2(b3[b3[o5 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                  }
                  k4 = b3[i5 + 8 >> 2] - b3[a5 + 28 >> 2] | 0, b3[e5 + 8 >> 2] = k4;
                  e: {
                    f:
                      switch (b3[r6 + 56 >> 2] - 100130 | 0) {
                        case 0:
                          f3 = 1 & k4;
                          break e;
                        case 1:
                          f3 = 0 != (0 | k4);
                          break e;
                        case 2:
                          f3 = (0 | k4) > 0;
                          break e;
                        case 3:
                          f3 = k4 >>> 31 | 0;
                          break e;
                        case 4:
                          break f;
                        default:
                          break e;
                      }
                    f3 = k4 + 1 >>> 0 > 2;
                  }
                  if (n4[e5 + 12 | 0] = f3, n4[i5 + 14 | 0] = 1, u3 && G2(r6, i5) && (b3[a5 + 28 >> 2] = b3[a5 + 28 >> 2] + b3[o5 + 28 >> 2], f3 = b3[a5 + 4 >> 2], b3[f3 + 28 >> 2] = b3[f3 + 28 >> 2] + b3[b3[o5 + 4 >> 2] + 28 >> 2], b3[b3[i5 >> 2] + 24 >> 2] = 0, Vr(b3[c3 >> 2]), Y2(i5), !rr2(o5)))
                    break r;
                  if (c3 = e5 + 4 | 0, u3 = 1, o5 = b3[b3[b3[e5 + 4 >> 2] + 8 >> 2] >> 2], f3 = b3[b3[o5 >> 2] + 4 >> 2], b3[f3 + 16 >> 2] != b3[a5 + 16 >> 2])
                    break;
                }
              return n4[e5 + 14 | 0] = 1, void (t4 && X2(r6, e5));
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function nr2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0;
            if ((0 | (a5 = b3[40 + (r6 |= 0) >> 2])) != (0 | (o5 = r6 + 40 | 0)))
              for (; ; ) {
                if (c3 = b3[a5 >> 2], !k3[a5 + 21 | 0]) {
                  for (u3 = b3[a5 + 8 >> 2], r6 = b3[u3 + 12 >> 2]; ; ) {
                    if (b3[r6 + 20 >> 2] = 0, t4 = b3[r6 + 12 >> 2], e5 = b3[r6 + 4 >> 2], !b3[e5 + 20 >> 2]) {
                      if (i5 = b3[r6 + 16 >> 2], (0 | (f3 = b3[r6 + 8 >> 2])) != (0 | r6))
                        b3[i5 + 8 >> 2] = f3, i5 = b3[e5 + 12 >> 2], n5 = b3[i5 + 8 >> 2], b3[b3[f3 + 4 >> 2] + 12 >> 2] = i5, b3[b3[n5 + 4 >> 2] + 12 >> 2] = r6, b3[r6 + 8 >> 2] = n5, b3[i5 + 8 >> 2] = f3;
                      else {
                        for (e5 = f3 = b3[i5 + 8 >> 2]; b3[e5 + 16 >> 2] = 0, (0 | f3) != (0 | (e5 = b3[e5 + 8 >> 2])); )
                          ;
                        e5 = b3[i5 >> 2], f3 = b3[i5 + 4 >> 2], b3[e5 + 4 >> 2] = f3, b3[f3 >> 2] = e5, Y2(i5), e5 = b3[r6 + 4 >> 2];
                      }
                      if (i5 = b3[e5 + 16 >> 2], (0 | (f3 = b3[e5 + 8 >> 2])) != (0 | e5))
                        b3[i5 + 8 >> 2] = f3, i5 = b3[b3[e5 + 4 >> 2] + 12 >> 2], n5 = b3[i5 + 8 >> 2], b3[b3[f3 + 4 >> 2] + 12 >> 2] = i5, b3[b3[n5 + 4 >> 2] + 12 >> 2] = e5, b3[e5 + 8 >> 2] = n5, b3[i5 + 8 >> 2] = f3;
                      else {
                        for (e5 = f3 = b3[i5 + 8 >> 2]; b3[e5 + 16 >> 2] = 0, (0 | f3) != (0 | (e5 = b3[e5 + 8 >> 2])); )
                          ;
                        e5 = b3[i5 >> 2], f3 = b3[i5 + 4 >> 2], b3[e5 + 4 >> 2] = f3, b3[f3 >> 2] = e5, Y2(i5), e5 = b3[r6 + 4 >> 2];
                      }
                      i5 = b3[(e5 = r6 >>> 0 > e5 >>> 0 ? e5 : r6) >> 2], f3 = b3[b3[e5 + 4 >> 2] >> 2], b3[b3[i5 + 4 >> 2] >> 2] = f3, b3[b3[f3 + 4 >> 2] >> 2] = i5, Y2(e5);
                    }
                    if (e5 = (0 | r6) != (0 | u3), r6 = t4, !e5)
                      break;
                  }
                  r6 = b3[a5 >> 2], t4 = b3[a5 + 4 >> 2], b3[r6 + 4 >> 2] = t4, b3[t4 >> 2] = r6, Y2(a5);
                }
                if ((0 | o5) == (0 | (a5 = c3)))
                  break;
              }
          }
          function tr2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0;
            if ((0 | (r6 |= 0)) != (0 | (e5 |= 0))) {
              if ((0 | (i5 = b3[e5 + 16 >> 2])) != (0 | (o5 = b3[r6 + 16 >> 2]))) {
                for (f3 = a5 = b3[i5 + 8 >> 2]; b3[f3 + 16 >> 2] = o5, (0 | a5) != (0 | (f3 = b3[f3 + 8 >> 2])); )
                  ;
                f3 = b3[i5 >> 2], a5 = b3[i5 + 4 >> 2], b3[f3 + 4 >> 2] = a5, b3[a5 >> 2] = f3, Y2(i5);
              }
              if ((0 | (u3 = b3[r6 + 20 >> 2])) != (0 | (a5 = b3[e5 + 20 >> 2]))) {
                for (f3 = t4 = b3[a5 + 8 >> 2]; b3[f3 + 20 >> 2] = u3, (0 | t4) != (0 | (f3 = b3[f3 + 12 >> 2])); )
                  ;
                f3 = b3[a5 >> 2], t4 = b3[a5 + 4 >> 2], b3[f3 + 4 >> 2] = t4, b3[t4 >> 2] = f3, Y2(a5);
              }
              if (f3 = b3[r6 + 8 >> 2], t4 = b3[e5 + 8 >> 2], b3[b3[t4 + 4 >> 2] + 12 >> 2] = r6, b3[b3[f3 + 4 >> 2] + 12 >> 2] = e5, b3[e5 + 8 >> 2] = f3, b3[r6 + 8 >> 2] = t4, (0 | i5) == (0 | o5)) {
                if (!(i5 = O2(40)))
                  return 0;
                for (f3 = b3[r6 + 16 >> 2], o5 = b3[f3 + 4 >> 2], b3[i5 + 4 >> 2] = o5, b3[o5 >> 2] = i5, b3[i5 >> 2] = f3, b3[f3 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 8 >> 2] = e5, f3 = e5; b3[f3 + 16 >> 2] = i5, (0 | (f3 = b3[f3 + 8 >> 2])) != (0 | e5); )
                  ;
                b3[b3[r6 + 16 >> 2] + 8 >> 2] = r6;
              }
              if ((0 | a5) == (0 | u3)) {
                if (!(i5 = O2(24)))
                  return 0;
                for (f3 = b3[r6 + 20 >> 2], a5 = b3[f3 + 4 >> 2], b3[i5 + 4 >> 2] = a5, b3[a5 >> 2] = i5, b3[i5 >> 2] = f3, b3[f3 + 4 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 16 >> 2] = 0, b3[i5 + 8 >> 2] = e5, n4[i5 + 20 | 0] = 0, n4[i5 + 21 | 0] = k3[f3 + 21 | 0], f3 = e5; b3[f3 + 20 >> 2] = i5, (0 | (f3 = b3[f3 + 12 >> 2])) != (0 | e5); )
                  ;
                b3[b3[r6 + 20 >> 2] + 8 >> 2] = r6;
              }
            }
            return 1;
          }
          function or2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, k4 = m2(0), u3 = 0, c3 = 0, s3 = m2(0);
            if (b3[r6 + 20 >> 2]) {
              i5 = e5, f3 = b3[r6 >> 2], r6 = b3[f3 + 8 >> 2] + 1 | 0, b3[f3 + 8 >> 2] = r6;
              r: {
                if (!((0 | (e5 = b3[f3 + 12 >> 2])) >= r6 << 1)) {
                  if (b3[f3 + 12 >> 2] = e5 << 1, a5 = b3[f3 + 4 >> 2], e5 = Z2(n5 = b3[f3 >> 2], e5 << 3 | 4), b3[f3 >> 2] = e5, !e5) {
                    b3[f3 >> 2] = n5, a5 = 2147483647;
                    break r;
                  }
                  if (e5 = Z2(b3[f3 + 4 >> 2], 8 + (b3[f3 + 12 >> 2] << 3) | 0), b3[f3 + 4 >> 2] = e5, !e5) {
                    b3[f3 + 4 >> 2] = a5, a5 = 2147483647;
                    break r;
                  }
                }
                if (n5 = b3[f3 + 4 >> 2], a5 = r6, (e5 = b3[f3 + 16 >> 2]) && (b3[f3 + 16 >> 2] = b3[4 + (n5 + (e5 << 3) | 0) >> 2], a5 = e5), t4 = b3[f3 >> 2], b3[t4 + (r6 << 2) >> 2] = a5, b3[(o5 = n5 + (a5 << 3) | 0) >> 2] = i5, b3[o5 + 4 >> 2] = r6, b3[f3 + 20 >> 2]) {
                  e:
                    if (r6 >>> 0 < 2)
                      e5 = r6;
                    else
                      for (k4 = d2[i5 + 28 >> 2]; ; ) {
                        if (f3 = b3[((e5 = r6 >> 1) << 2) + t4 >> 2], c3 = b3[(u3 = n5 + (f3 << 3) | 0) >> 2], (s3 = d2[c3 + 28 >> 2]) < k4) {
                          e5 = r6;
                          break e;
                        }
                        if (!(!(d2[c3 + 32 >> 2] <= d2[i5 + 32 >> 2]) | k4 != s3)) {
                          e5 = r6;
                          break e;
                        }
                        if (b3[(r6 << 2) + t4 >> 2] = f3, b3[u3 + 4 >> 2] = r6, !((r6 = e5) >>> 0 > 1))
                          break;
                      }
                  b3[(e5 << 2) + t4 >> 2] = a5, b3[o5 + 4 >> 2] = e5;
                }
              }
              return a5;
            }
            if (i5 = (f3 = b3[r6 + 12 >> 2]) + 1 | 0, b3[r6 + 12 >> 2] = i5, a5 = b3[r6 + 4 >> 2], (0 | (n5 = i5)) < (0 | (i5 = b3[r6 + 16 >> 2])))
              i5 = a5;
            else if (b3[r6 + 16 >> 2] = i5 << 1, i5 = Z2(a5, i5 << 3), b3[r6 + 4 >> 2] = i5, !i5)
              return b3[r6 + 4 >> 2] = a5, 2147483647;
            return b3[(f3 << 2) + i5 >> 2] = e5, -1 ^ f3;
          }
          function br2(r6) {
            r6 |= 0;
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0;
            t4 = O2(40), o5 = O2(40);
            r: {
              if (!(i5 = O2(24)) || !t4 | !o5) {
                if (t4 && Y2(t4), o5 && Y2(o5), !i5)
                  break r;
                return Y2(i5), 0;
              }
              if (!(e5 = O2(64)))
                return 0;
              for (f3 = b3[r6 + 68 >> 2], a5 = b3[(f3 = f3 >>> 0 < (a5 = r6 - -64 | 0) >>> 0 ? f3 : a5) + 4 >> 2], u3 = b3[a5 >> 2], b3[e5 + 32 >> 2] = u3, b3[b3[u3 + 4 >> 2] >> 2] = e5, b3[e5 >> 2] = f3, f3 = a5, a5 = e5 + 32 | 0, b3[f3 >> 2] = a5, b3[e5 + 16 >> 2] = 0, b3[e5 + 20 >> 2] = 0, b3[e5 + 12 >> 2] = a5, b3[e5 + 4 >> 2] = a5, b3[e5 + 24 >> 2] = 0, b3[e5 + 28 >> 2] = 0, b3[e5 + 48 >> 2] = 0, b3[e5 + 52 >> 2] = 0, b3[e5 + 44 >> 2] = e5, b3[e5 + 40 >> 2] = a5, b3[e5 + 36 >> 2] = e5, b3[e5 + 56 >> 2] = 0, b3[e5 + 60 >> 2] = 0, b3[e5 + 8 >> 2] = e5, f3 = b3[r6 + 4 >> 2], b3[t4 + 4 >> 2] = f3, b3[f3 >> 2] = t4, b3[t4 + 12 >> 2] = 0, b3[t4 + 8 >> 2] = e5, f3 = e5; b3[f3 + 16 >> 2] = t4, (0 | (f3 = b3[f3 + 8 >> 2])) != (0 | e5); )
                ;
              for (b3[o5 + 4 >> 2] = t4, b3[t4 >> 2] = o5, b3[o5 >> 2] = r6, b3[r6 + 4 >> 2] = o5, b3[o5 + 12 >> 2] = 0, b3[o5 + 8 >> 2] = a5, f3 = a5; b3[f3 + 16 >> 2] = o5, (0 | a5) != (0 | (f3 = b3[f3 + 8 >> 2])); )
                ;
              for (f3 = b3[r6 + 44 >> 2], b3[i5 + 4 >> 2] = f3, b3[f3 >> 2] = i5, b3[i5 >> 2] = r6 + 40, b3[r6 + 44 >> 2] = i5, b3[i5 + 12 >> 2] = 0, b3[i5 + 16 >> 2] = 0, b3[i5 + 8 >> 2] = e5, n4[i5 + 20 | 0] = 0, n4[i5 + 21 | 0] = k3[r6 + 61 | 0], f3 = e5; b3[f3 + 20 >> 2] = i5, (0 | (f3 = b3[f3 + 12 >> 2])) != (0 | e5); )
                ;
            }
            return 0 | e5;
          }
          function kr2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0, t4 = 0, o5 = 0, u3 = 0;
            b3[r6 + 8 >> 2] = b3[283], f3 = b3[282], b3[r6 >> 2] = b3[281], b3[r6 + 4 >> 2] = f3, f3 = b3[e5 + 20 >> 2];
            r:
              if (k3[f3 + 21 | 0]) {
                a5 = e5;
                e: {
                  f: {
                    for (; ; ) {
                      if (k3[f3 + 20 | 0])
                        break r;
                      if (n4[f3 + 20 | 0] = 1, b3[f3 + 16 >> 2] = i5, a5 = b3[b3[a5 + 12 >> 2] + 4 >> 2], i5 = b3[a5 + 20 >> 2], k3[i5 + 21 | 0]) {
                        if (k3[i5 + 20 | 0])
                          break f;
                        if (n4[i5 + 20 | 0] = 1, b3[i5 + 16 >> 2] = f3, t4 = t4 + 2 | 0, a5 = b3[a5 + 8 >> 2], f3 = b3[a5 + 20 >> 2], k3[f3 + 21 | 0])
                          continue;
                        break r;
                      }
                      break;
                    }
                    t4 |= 1;
                    break e;
                  }
                  t4 |= 1;
                }
                i5 = f3;
              } else
                a5 = e5;
            o5 = b3[e5 + 4 >> 2], f3 = b3[o5 + 20 >> 2];
            r:
              if (!(!k3[f3 + 21 | 0] | k3[f3 + 20 | 0])) {
                e: {
                  f: {
                    for (; ; ) {
                      if (n4[f3 + 20 | 0] = 1, b3[f3 + 16 >> 2] = i5, e5 = b3[o5 + 12 >> 2], o5 = b3[e5 + 4 >> 2], i5 = b3[o5 + 20 >> 2], k3[i5 + 21 | 0]) {
                        if (k3[i5 + 20 | 0])
                          break f;
                        if (n4[i5 + 20 | 0] = 1, b3[i5 + 16 >> 2] = f3, u3 = u3 + 2 | 0, e5 = b3[b3[o5 + 8 >> 2] + 4 >> 2], o5 = b3[e5 + 4 >> 2], f3 = b3[o5 + 20 >> 2], !k3[f3 + 21 | 0])
                          break r;
                        if (!k3[f3 + 20 | 0])
                          continue;
                        break r;
                      }
                      break;
                    }
                    u3 |= 1;
                    break e;
                  }
                  u3 |= 1;
                }
                i5 = f3;
              }
            f3 = t4 + u3 | 0, b3[r6 >> 2] = f3;
            r: {
              if (1 & t4) {
                if (!(1 & u3))
                  break r;
                b3[r6 >> 2] = f3 - 1, e5 = e5 + 8 | 0;
              } else
                e5 = a5 + 4 | 0;
              e5 = b3[e5 >> 2];
            }
            if (b3[r6 + 4 >> 2] = e5, i5)
              for (; n4[i5 + 20 | 0] = 0, i5 = b3[i5 + 16 >> 2]; )
                ;
          }
          function ur2(r6, e5, f3) {
            e5 |= 0, f3 |= 0, 3 == (0 | (f3 = b3[1716 + (r6 |= 0) >> 2])) ? be[b3[r6 + 88 >> 2]](5) : be[0 | f3](5, b3[r6 + 1896 >> 2]), 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[e5 + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[e5 + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), f3 = b3[e5 + 20 >> 2];
            r:
              if (k3[f3 + 21 | 0])
                for (; ; ) {
                  if (k3[f3 + 20 | 0])
                    break r;
                  if (n4[f3 + 20 | 0] = 1, e5 = b3[b3[e5 + 12 >> 2] + 4 >> 2], 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[e5 + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[e5 + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), f3 = b3[e5 + 20 >> 2], !k3[f3 + 21 | 0] | k3[f3 + 20 | 0])
                    break r;
                  if (n4[f3 + 20 | 0] = 1, e5 = b3[e5 + 8 >> 2], 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), f3 = b3[e5 + 20 >> 2], !k3[f3 + 21 | 0])
                    break;
                }
            6 == (0 | (e5 = b3[r6 + 1728 >> 2])) ? be[b3[r6 + 100 >> 2]]() : be[0 | e5](b3[r6 + 1896 >> 2]);
          }
          function cr2(r6, e5) {
            e5 |= 0;
            var f3 = 0;
            if ((0 | (f3 = b3[(r6 |= 0) >> 2])) != (0 | e5))
              for (; ; ) {
                r:
                  if (e5 >>> 0 > f3 >>> 0) {
                    e:
                      switch (0 | f3) {
                        case 0:
                          11 == (0 | (f3 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100151) : be[0 | f3](100151, b3[r6 + 1896 >> 2]), b3[r6 >> 2] && cr2(r6, 0), b3[r6 + 112 >> 2] = 0, f3 = 1, b3[r6 >> 2] = 1, n4[r6 + 108 | 0] = 0, b3[r6 + 1896 >> 2] = 0, b3[r6 + 8 >> 2] = 0;
                          break r;
                        case 1:
                          break e;
                        default:
                          break r;
                      }
                    if (11 == (0 | (f3 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100152) : be[0 | f3](100152, b3[r6 + 1896 >> 2]), 1 != b3[r6 >> 2] && cr2(r6, 1), b3[r6 >> 2] = 2, b3[r6 + 4 >> 2] = 0, f3 = 2, b3[r6 + 112 >> 2] < 1)
                      break r;
                    n4[r6 + 108 | 0] = 1;
                  } else {
                    e:
                      switch (f3 - 1 | 0) {
                        case 1:
                          11 == (0 | (f3 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100154) : be[0 | f3](100154, b3[r6 + 1896 >> 2]), 2 != b3[r6 >> 2] && cr2(r6, 2), f3 = 1, b3[r6 >> 2] = 1;
                          break r;
                        case 0:
                          break e;
                        default:
                          break r;
                      }
                    11 == (0 | (f3 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100153) : be[0 | f3](100153, b3[r6 + 1896 >> 2]), (f3 = b3[r6 + 8 >> 2]) && Pr2(f3), f3 = 0, b3[r6 + 8 >> 2] = 0, b3[r6 >> 2] = 0, b3[r6 + 4 >> 2] = 0;
                  }
                if ((0 | e5) == (0 | f3))
                  break;
              }
          }
          function sr2(r6, e5, f3) {
            var i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, b4 = 0, k4 = 0, u3 = 0, c3 = 0;
            r: {
              e: {
                f: {
                  i: {
                    a: {
                      n: {
                        t: {
                          o: {
                            b: {
                              k: {
                                if (a5 = e5, e5) {
                                  if (!(i5 = f3))
                                    break k;
                                  break b;
                                }
                                r6 = (r6 >>> 0) / (f3 >>> 0) | 0, F2 = 0;
                                break r;
                              }
                              if (!r6)
                                break o;
                              break t;
                            }
                            if (!(i5 - 1 & i5))
                              break n;
                            b4 = 0 - (o5 = (y2(i5) + 33 | 0) - y2(a5) | 0) | 0;
                            break i;
                          }
                          r6 = (a5 >>> 0) / 0 | 0, F2 = 0;
                          break r;
                        }
                        if ((i5 = 32 - y2(a5) | 0) >>> 0 < 31)
                          break a;
                        break f;
                      }
                      if (1 == (0 | i5))
                        break e;
                      f3 = 31 & (i5 = i5 ? 31 - y2(i5 - 1 ^ i5) | 0 : 32), (63 & i5) >>> 0 >= 32 ? (a5 = 0, r6 = e5 >>> f3 | 0) : (a5 = e5 >>> f3 | 0, r6 = ((1 << f3) - 1 & e5) << 32 - f3 | r6 >>> f3), F2 = a5;
                      break r;
                    }
                    o5 = i5 + 1 | 0, b4 = 63 - i5 | 0;
                  }
                  if (i5 = e5, n5 = 31 & (a5 = 63 & o5), a5 >>> 0 >= 32 ? (a5 = 0, n5 = i5 >>> n5 | 0) : (a5 = i5 >>> n5 | 0, n5 = ((1 << n5) - 1 & i5) << 32 - n5 | r6 >>> n5), i5 = 31 & (b4 &= 63), b4 >>> 0 >= 32 ? (e5 = r6 << i5, r6 = 0) : (e5 = (1 << i5) - 1 & r6 >>> 32 - i5 | e5 << i5, r6 <<= i5), o5)
                    for (b4 = -1 != (0 | (i5 = f3 - 1 | 0)) ? 0 : -1; n5 = (k4 = t4 = n5 << 1 | e5 >>> 31) - (u3 = f3 & (t4 = b4 - ((a5 = a5 << 1 | n5 >>> 31) + (i5 >>> 0 < t4 >>> 0) | 0) >> 31)) | 0, a5 = a5 - (k4 >>> 0 < u3 >>> 0) | 0, e5 = e5 << 1 | r6 >>> 31, r6 = c3 | r6 << 1, c3 = t4 &= 1, o5 = o5 - 1 | 0; )
                      ;
                  F2 = e5 << 1 | r6 >>> 31, r6 = t4 | r6 << 1;
                  break r;
                }
                r6 = 0, e5 = 0;
              }
              F2 = e5;
            }
            return r6;
          }
          function Ar2(r6, e5, f3) {
            e5 |= 0, f3 |= 0;
            var i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, k4 = 0, u3 = 0;
            U2 = a5 = U2 - 32 | 0, n5 = b3[28 + (r6 |= 0) >> 2], b3[a5 + 16 >> 2] = n5, i5 = b3[r6 + 20 >> 2], b3[a5 + 28 >> 2] = f3, b3[a5 + 24 >> 2] = e5, e5 = i5 - n5 | 0, b3[a5 + 20 >> 2] = e5, n5 = e5 + f3 | 0, u3 = 2, e5 = a5 + 16 | 0;
            r: {
              e: {
                (i5 = 0 | S2(b3[r6 + 60 >> 2], a5 + 16 | 0, 2, a5 + 12 | 0)) ? (b3[613] = i5, i5 = -1) : i5 = 0;
                f: {
                  if (!i5)
                    for (; ; ) {
                      if ((0 | (i5 = b3[a5 + 12 >> 2])) == (0 | n5))
                        break f;
                      if ((0 | i5) <= -1)
                        break e;
                      if (t4 = i5 - ((o5 = (t4 = b3[e5 + 4 >> 2]) >>> 0 < i5 >>> 0) ? t4 : 0) | 0, b3[(k4 = (o5 << 3) + e5 | 0) >> 2] = t4 + b3[k4 >> 2], b3[(k4 = (o5 ? 12 : 4) + e5 | 0) >> 2] = b3[k4 >> 2] - t4, n5 = n5 - i5 | 0, e5 = o5 ? e5 + 8 | 0 : e5, u3 = u3 - o5 | 0, (i5 = 0 | S2(b3[r6 + 60 >> 2], 0 | e5, 0 | u3, a5 + 12 | 0)) ? (b3[613] = i5, i5 = -1) : i5 = 0, i5)
                        break;
                    }
                  if (-1 != (0 | n5))
                    break e;
                }
                e5 = b3[r6 + 44 >> 2], b3[r6 + 28 >> 2] = e5, b3[r6 + 20 >> 2] = e5, b3[r6 + 16 >> 2] = e5 + b3[r6 + 48 >> 2], r6 = f3;
                break r;
              }
              b3[r6 + 28 >> 2] = 0, b3[r6 + 16 >> 2] = 0, b3[r6 + 20 >> 2] = 0, b3[r6 >> 2] = 32 | b3[r6 >> 2], r6 = 0, 2 != (0 | u3) && (r6 = f3 - b3[e5 + 4 >> 2] | 0);
            }
            return U2 = a5 + 32 | 0, 0 | r6;
          }
          function lr2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = m2(0), k4 = 0, u3 = m2(0), c3 = 0, s3 = 0, A3 = 0, l4 = 0, v3 = 0, h3 = 0;
            if (a5 = b3[r6 + 4 >> 2], f3 = b3[r6 >> 2], i5 = b3[f3 + 4 >> 2], v3 = b3[(e5 = a5 + (i5 << 3) | 0) >> 2], !((0 | (n5 = b3[r6 + 8 >> 2])) < 1) && (c3 = b3[(n5 << 2) + f3 >> 2], b3[f3 + 4 >> 2] = c3, b3[4 + (s3 = (c3 << 3) + a5 | 0) >> 2] = 1, b3[e5 >> 2] = 0, b3[e5 + 4 >> 2] = b3[r6 + 16 >> 2], A3 = n5 - 1 | 0, b3[r6 + 8 >> 2] = A3, b3[r6 + 16 >> 2] = i5, 1 != (0 | n5))) {
              for (h3 = (c3 << 3) + a5 | 0, e5 = 1; (0 | A3) <= (0 | (r6 = e5 << 1)) || (t4 = b3[(b3[((i5 = 1 | r6) << 2) + f3 >> 2] << 3) + a5 >> 2], o5 = d2[t4 + 28 >> 2], k4 = b3[(b3[(r6 << 2) + f3 >> 2] << 3) + a5 >> 2], u3 = d2[k4 + 28 >> 2], !(d2[t4 + 32 >> 2] <= d2[k4 + 32 >> 2]) | o5 != u3 && !(o5 < u3) || (r6 = i5)), !((0 | r6) >= (0 | n5) || (i5 = b3[h3 >> 2], o5 = d2[i5 + 28 >> 2], t4 = b3[(r6 << 2) + f3 >> 2], l4 = b3[(k4 = (t4 << 3) + a5 | 0) >> 2], o5 < (u3 = d2[l4 + 28 >> 2]) | (d2[i5 + 32 >> 2] <= d2[l4 + 32 >> 2] ? o5 == u3 : 0))); )
                b3[(e5 << 2) + f3 >> 2] = t4, b3[k4 + 4 >> 2] = e5, e5 = r6;
              b3[(e5 << 2) + f3 >> 2] = c3, b3[s3 + 4 >> 2] = e5;
            }
            return v3;
          }
          function vr2(r6, e5, f3) {
            e5 |= 0, f3 |= 0, 3 == (0 | (f3 = b3[1716 + (r6 |= 0) >> 2])) ? be[b3[r6 + 88 >> 2]](6) : be[0 | f3](6, b3[r6 + 1896 >> 2]), 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[e5 + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[e5 + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), f3 = b3[e5 + 20 >> 2];
            r:
              if (k3[f3 + 21 | 0])
                for (; ; ) {
                  if (k3[f3 + 20 | 0])
                    break r;
                  if (n4[f3 + 20 | 0] = 1, e5 = b3[e5 + 8 >> 2], 5 == (0 | (f3 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : be[0 | f3](b3[b3[b3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), f3 = b3[e5 + 20 >> 2], !k3[f3 + 21 | 0])
                    break;
                }
            6 == (0 | (e5 = b3[r6 + 1728 >> 2])) ? be[b3[r6 + 100 >> 2]]() : be[0 | e5](b3[r6 + 1896 >> 2]);
          }
          function dr2(r6, e5, f3) {
            var i5 = 0, a5 = 0;
            if (f3 && (n4[(i5 = r6 + f3 | 0) - 1 | 0] = e5, n4[0 | r6] = e5, !(f3 >>> 0 < 3 || (n4[i5 - 2 | 0] = e5, n4[r6 + 1 | 0] = e5, n4[i5 - 3 | 0] = e5, n4[r6 + 2 | 0] = e5, f3 >>> 0 < 7 || (n4[i5 - 4 | 0] = e5, n4[r6 + 3 | 0] = e5, f3 >>> 0 < 9 || (i5 = (i5 = r6) + (r6 = 0 - r6 & 3) | 0, a5 = p2(255 & e5, 16843009), b3[i5 >> 2] = a5, b3[(e5 = (r6 = f3 - r6 & -4) + i5 | 0) - 4 >> 2] = a5, r6 >>> 0 < 9 || (b3[i5 + 8 >> 2] = a5, b3[i5 + 4 >> 2] = a5, b3[e5 - 8 >> 2] = a5, b3[e5 - 12 >> 2] = a5, r6 >>> 0 < 25 || (b3[i5 + 24 >> 2] = a5, b3[i5 + 20 >> 2] = a5, b3[i5 + 16 >> 2] = a5, b3[i5 + 12 >> 2] = a5, b3[e5 - 16 >> 2] = a5, b3[e5 - 20 >> 2] = a5, b3[e5 - 24 >> 2] = a5, b3[e5 - 28 >> 2] = a5, (f3 = r6 - (e5 = 4 & i5 | 24) | 0) >>> 0 < 32))))))))
              for (a5 = Or2(a5, 0, 1, 1), r6 = F2, e5 = e5 + i5 | 0; b3[e5 + 24 >> 2] = a5, i5 = r6, b3[e5 + 28 >> 2] = i5, b3[e5 + 16 >> 2] = a5, b3[e5 + 20 >> 2] = i5, b3[e5 + 8 >> 2] = a5, b3[e5 + 12 >> 2] = i5, b3[e5 >> 2] = a5, b3[e5 + 4 >> 2] = i5, e5 = e5 + 32 | 0, (f3 = f3 - 32 | 0) >>> 0 > 31; )
                ;
          }
          function hr2(r6, e5, f3) {
            r:
              if (!(e5 >>> 0 > 20)) {
                e:
                  switch (e5 - 9 | 0) {
                    case 0:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, void (b3[r6 >> 2] = b3[e5 >> 2]);
                    case 1:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, e5 = b3[e5 >> 2], b3[r6 >> 2] = e5, void (b3[r6 + 4 >> 2] = e5 >> 31);
                    case 2:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, b3[r6 >> 2] = b3[e5 >> 2], void (b3[r6 + 4 >> 2] = 0);
                    case 3:
                      return e5 = b3[f3 >> 2] + 7 & -8, b3[f3 >> 2] = e5 + 8, f3 = b3[e5 + 4 >> 2], b3[r6 >> 2] = b3[e5 >> 2], void (b3[r6 + 4 >> 2] = f3);
                    case 4:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, e5 = o4[e5 >> 1], b3[r6 >> 2] = e5, void (b3[r6 + 4 >> 2] = e5 >> 31);
                    case 5:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, b3[r6 >> 2] = l3[e5 >> 1], void (b3[r6 + 4 >> 2] = 0);
                    case 6:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, e5 = n4[0 | e5], b3[r6 >> 2] = e5, void (b3[r6 + 4 >> 2] = e5 >> 31);
                    case 7:
                      return e5 = b3[f3 >> 2], b3[f3 >> 2] = e5 + 4, b3[r6 >> 2] = k3[0 | e5], void (b3[r6 + 4 >> 2] = 0);
                    case 8:
                      return e5 = b3[f3 >> 2] + 7 & -8, b3[f3 >> 2] = e5 + 8, void (h2[r6 >> 3] = h2[e5 >> 3]);
                    case 9:
                      break e;
                    default:
                      break r;
                  }
                be[0](r6, f3);
              }
          }
          function pr2(r6, e5, f3) {
            var i5 = m2(0), a5 = m2(0), n5 = 0, t4 = 0, o5 = m2(0), k4 = m2(0), u3 = 0, c3 = m2(0), s3 = m2(0);
            U2 = t4 = U2 + -64 | 0, u3 = (i5 = d2[e5 + 28 >> 2]) > (a5 = d2[r6 + 28 >> 2]);
            r: {
              e: {
                if (!(!(d2[r6 + 32 >> 2] <= d2[e5 + 32 >> 2]) | i5 != a5) || u3) {
                  if ((o5 = d2[f3 + 28 >> 2]) > i5 | (d2[e5 + 32 >> 2] <= d2[f3 + 32 >> 2] ? i5 == o5 : 0))
                    break r;
                  if (n5 = 1, u3)
                    break e;
                }
                n5 = 0, i5 == a5 && (n5 = d2[r6 + 32 >> 2] <= d2[e5 + 32 >> 2]);
              }
              u3 = n5, n5 = 1, (o5 = d2[f3 + 28 >> 2]) > i5 || (n5 = 0, i5 == o5 && (n5 = d2[e5 + 32 >> 2] <= d2[f3 + 32 >> 2])), k4 = d2[r6 + 32 >> 2], c3 = d2[e5 + 32 >> 2], s3 = d2[f3 + 32 >> 2], h2[t4 + 40 >> 3] = o5, h2[t4 + 24 >> 3] = i5, h2[t4 + 48 >> 3] = s3, h2[t4 + 32 >> 3] = c3, h2[t4 + 16 >> 3] = k4, h2[t4 + 8 >> 3] = a5, b3[t4 + 4 >> 2] = n5, b3[t4 >> 2] = u3, Gr(1092, t4), o5 = d2[f3 + 28 >> 2], a5 = d2[r6 + 28 >> 2], i5 = d2[e5 + 28 >> 2];
            }
            return k4 = m2(0), U2 = t4 - -64 | 0, a5 = m2(i5 - a5), i5 = m2(o5 - i5), m2(a5 + i5) > m2(0) && (k4 = a5, a5 = d2[e5 + 32 >> 2], k4 = m2(m2(k4 * m2(a5 - d2[f3 + 32 >> 2])) + m2(i5 * m2(a5 - d2[r6 + 32 >> 2])))), k4;
          }
          function mr2(r6, e5, f3) {
            var i5 = 0, a5 = 0, t4 = 0, o5 = 0;
            i5 = b3[e5 >> 2];
            r: {
              if ((0 | e5) != (0 | f3))
                for (; ; ) {
                  if (n4[e5 + 15 | 0] = 0, o5 = b3[e5 + 4 >> 2], t4 = b3[b3[o5 + 8 >> 2] >> 2], a5 = b3[t4 >> 2], b3[a5 + 16 >> 2] != b3[i5 + 16 >> 2]) {
                    if (!k3[t4 + 15 | 0])
                      return r6 = k3[e5 + 12 | 0], f3 = b3[i5 + 20 >> 2], b3[f3 + 8 >> 2] = i5, n4[f3 + 21 | 0] = r6, b3[i5 + 24 >> 2] = 0, Vr(o5), Y2(e5), i5;
                    if (!(a5 = er2(b3[b3[i5 + 8 >> 2] + 4 >> 2], b3[a5 + 4 >> 2])))
                      break r;
                    if (!rr2(b3[t4 >> 2]))
                      break r;
                    b3[t4 >> 2] = a5, n4[t4 + 15 | 0] = 0, b3[a5 + 24 >> 2] = t4;
                  }
                  if (b3[i5 + 8 >> 2] != (0 | a5)) {
                    if (!tr2(b3[b3[a5 + 4 >> 2] + 12 >> 2], a5))
                      break r;
                    if (!tr2(i5, a5))
                      break r;
                  }
                  if (a5 = k3[e5 + 12 | 0], i5 = b3[e5 >> 2], o5 = b3[i5 + 20 >> 2], b3[o5 + 8 >> 2] = i5, n4[o5 + 21 | 0] = a5, b3[i5 + 24 >> 2] = 0, Vr(b3[e5 + 4 >> 2]), Y2(e5), i5 = b3[t4 >> 2], (0 | f3) == (0 | (e5 = t4)))
                    break;
                }
              return i5;
            }
            Zr(r6 + 1740 | 0, 1), E2();
          }
          function wr2(r6, e5, f3) {
            switch (e5 - 100100 | 0) {
              case 0:
                return void (b3[r6 + 88 >> 2] = f3 || 15);
              case 6:
                return void (b3[r6 + 1716 >> 2] = f3 || 3);
              case 4:
                return n4[r6 + 80 | 0] = 0 != (0 | f3), void (b3[r6 + 92 >> 2] = f3 || 14);
              case 10:
                return n4[r6 + 80 | 0] = 0 != (0 | f3), void (b3[r6 + 1720 >> 2] = f3 || 4);
              case 1:
                return void (b3[r6 + 96 >> 2] = f3 || 13);
              case 7:
                return void (b3[r6 + 1724 >> 2] = f3 || 5);
              case 2:
                return void (b3[r6 + 100 >> 2] = f3 || 12);
              case 8:
                return void (b3[r6 + 1728 >> 2] = f3 || 6);
              case 3:
                return void (b3[r6 + 12 >> 2] = f3 || 18);
              case 9:
                return void (b3[r6 + 1732 >> 2] = f3 || 11);
              case 5:
                return void (b3[r6 + 76 >> 2] = f3 || 17);
              case 11:
                return void (b3[r6 + 1736 >> 2] = f3 || 8);
              case 12:
                return void (b3[r6 + 104 >> 2] = f3 || 16);
            }
            11 == (0 | (e5 = b3[r6 + 1732 >> 2])) ? be[b3[r6 + 12 >> 2]](100900) : be[0 | e5](100900, b3[r6 + 1896 >> 2]);
          }
          function yr2(r6, e5, f3) {
            var i5 = 0, a5 = 0, t4 = 0;
            if (!(32 & k3[0 | r6]))
              r: {
                a5 = e5, i5 = f3;
                e: {
                  if (!(r6 = b3[(e5 = r6) + 16 >> 2])) {
                    if (r6 = k3[e5 + 74 | 0], n4[e5 + 74 | 0] = r6 - 1 | r6, 8 & (r6 = b3[e5 >> 2]) ? (b3[e5 >> 2] = 32 | r6, r6 = -1) : (b3[e5 + 4 >> 2] = 0, b3[e5 + 8 >> 2] = 0, r6 = b3[e5 + 44 >> 2], b3[e5 + 28 >> 2] = r6, b3[e5 + 20 >> 2] = r6, b3[e5 + 16 >> 2] = r6 + b3[e5 + 48 >> 2], r6 = 0), r6)
                      break e;
                    r6 = b3[e5 + 16 >> 2];
                  }
                  if (r6 - (t4 = b3[e5 + 20 >> 2]) >>> 0 < i5 >>> 0) {
                    be[b3[e5 + 36 >> 2]](e5, a5, f3);
                    break r;
                  }
                  f:
                    if (!(n4[e5 + 75 | 0] < 0)) {
                      for (r6 = f3; ; ) {
                        if (i5 = r6, !r6)
                          break f;
                        if (10 == k3[a5 + (r6 = i5 - 1 | 0) | 0])
                          break;
                      }
                      if (be[b3[e5 + 36 >> 2]](e5, a5, i5) >>> 0 < i5 >>> 0)
                        break e;
                      a5 = i5 + a5 | 0, f3 = f3 - i5 | 0, t4 = b3[e5 + 20 >> 2];
                    }
                  fr2(t4, a5, f3), b3[e5 + 20 >> 2] = b3[e5 + 20 >> 2] + f3;
                }
              }
          }
          function gr2(r6, e5, f3, i5) {
            var a5 = 0, t4 = 0;
            U2 = a5 = U2 - 208 | 0, b3[a5 + 204 >> 2] = f3, dr2(a5 + 160 | 0, 0, 40), b3[a5 + 200 >> 2] = b3[a5 + 204 >> 2], (0 | W2(0, e5, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5)) < 0 || (b3[r6 + 76 >> 2], f3 = b3[r6 >> 2], n4[r6 + 74 | 0] <= 0 && (b3[r6 >> 2] = -33 & f3), t4 = 32 & f3, b3[r6 + 48 >> 2] ? W2(r6, e5, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5) : (b3[r6 + 48 >> 2] = 80, b3[r6 + 16 >> 2] = a5 + 80, b3[r6 + 28 >> 2] = a5, b3[r6 + 20 >> 2] = a5, f3 = b3[r6 + 44 >> 2], b3[r6 + 44 >> 2] = a5, W2(r6, e5, a5 + 200 | 0, a5 + 80 | 0, a5 + 160 | 0, i5), f3 && (be[b3[r6 + 36 >> 2]](r6, 0, 0), b3[r6 + 48 >> 2] = 0, b3[r6 + 44 >> 2] = f3, b3[r6 + 28 >> 2] = 0, b3[r6 + 16 >> 2] = 0, b3[r6 + 20 >> 2] = 0)), b3[r6 >> 2] = b3[r6 >> 2] | t4), U2 = a5 + 208 | 0;
          }
          function Er2(r6, e5) {
            r6 |= 0;
            var f3 = 0, i5 = 0, a5 = 0;
            if ((0 | (f3 = b3[40 + (e5 |= 0) >> 2])) != (0 | (i5 = e5 + 40 | 0)))
              for (; ; ) {
                if (k3[f3 + 21 | 0]) {
                  for (3 == (0 | (e5 = b3[r6 + 1716 >> 2])) ? be[b3[r6 + 88 >> 2]](2) : be[0 | e5](2, b3[r6 + 1896 >> 2]), e5 = b3[f3 + 8 >> 2]; 5 == (0 | (a5 = b3[r6 + 1724 >> 2])) ? be[b3[r6 + 96 >> 2]](b3[b3[e5 + 16 >> 2] + 12 >> 2]) : be[0 | a5](b3[b3[e5 + 16 >> 2] + 12 >> 2], b3[r6 + 1896 >> 2]), (0 | (e5 = b3[e5 + 12 >> 2])) != b3[f3 + 8 >> 2]; )
                    ;
                  6 == (0 | (e5 = b3[r6 + 1728 >> 2])) ? be[b3[r6 + 100 >> 2]]() : be[0 | e5](b3[r6 + 1896 >> 2]);
                }
                if ((0 | i5) == (0 | (f3 = b3[f3 >> 2])))
                  break;
              }
          }
          function Cr2(r6, e5) {
            if (!r6)
              return 0;
            r: {
              e: {
                if (r6) {
                  if (e5 >>> 0 <= 127)
                    break e;
                  if (b3[b3[493] >> 2]) {
                    if (e5 >>> 0 <= 2047) {
                      n4[r6 + 1 | 0] = 63 & e5 | 128, n4[0 | r6] = e5 >>> 6 | 192, r6 = 2;
                      break r;
                    }
                    if (!(57344 != (-8192 & e5) && e5 >>> 0 >= 55296)) {
                      n4[r6 + 2 | 0] = 63 & e5 | 128, n4[0 | r6] = e5 >>> 12 | 224, n4[r6 + 1 | 0] = e5 >>> 6 & 63 | 128, r6 = 3;
                      break r;
                    }
                    if (e5 - 65536 >>> 0 <= 1048575) {
                      n4[r6 + 3 | 0] = 63 & e5 | 128, n4[0 | r6] = e5 >>> 18 | 240, n4[r6 + 2 | 0] = e5 >>> 6 & 63 | 128, n4[r6 + 1 | 0] = e5 >>> 12 & 63 | 128, r6 = 4;
                      break r;
                    }
                  } else if (57216 == (-128 & e5))
                    break e;
                  b3[613] = 25, r6 = -1;
                } else
                  r6 = 1;
                break r;
              }
              n4[0 | r6] = e5, r6 = 1;
            }
            return r6;
          }
          function Rr2() {
            var r6 = 0, e5 = 0, f3 = 0;
            return (r6 = O2(128)) ? (b3[r6 + 8 >> 2] = 0, b3[r6 + 12 >> 2] = 0, e5 = r6 + 40 | 0, b3[r6 + 44 >> 2] = e5, b3[r6 + 48 >> 2] = 0, b3[r6 + 52 >> 2] = 0, b3[r6 + 40 >> 2] = e5, o4[r6 + 54 >> 1] = 0, o4[r6 + 56 >> 1] = 0, o4[r6 + 58 >> 1] = 0, o4[r6 + 60 >> 1] = 0, b3[r6 + 72 >> 2] = 0, b3[r6 + 76 >> 2] = 0, e5 = r6 + 96 | 0, b3[r6 + 68 >> 2] = e5, f3 = r6 - -64 | 0, b3[r6 + 64 >> 2] = f3, b3[r6 + 80 >> 2] = 0, b3[r6 + 84 >> 2] = 0, b3[r6 + 88 >> 2] = 0, b3[r6 + 92 >> 2] = 0, b3[r6 + 104 >> 2] = 0, b3[r6 + 108 >> 2] = 0, b3[r6 + 100 >> 2] = f3, b3[r6 + 96 >> 2] = e5, b3[r6 + 112 >> 2] = 0, b3[r6 + 116 >> 2] = 0, b3[r6 + 120 >> 2] = 0, b3[r6 + 124 >> 2] = 0, b3[r6 >> 2] = r6, b3[r6 + 4 >> 2] = r6, 0 | r6) : 0;
          }
          function Mr2(r6, e5, f3) {
            r6 |= 0, e5 |= 0, f3 |= 0;
            var i5 = 0, a5 = 0, n5 = m2(0), t4 = m2(0);
            return f3 = b3[f3 >> 2], i5 = b3[b3[f3 + 4 >> 2] + 16 >> 2], e5 = b3[e5 >> 2], (0 | (a5 = b3[b3[e5 + 4 >> 2] + 16 >> 2])) == (0 | (r6 = b3[r6 + 72 >> 2])) ? (0 | r6) == (0 | i5) ? (e5 = b3[e5 + 16 >> 2], n5 = d2[e5 + 28 >> 2], f3 = b3[f3 + 16 >> 2], t4 = d2[f3 + 28 >> 2], !(!(d2[e5 + 32 >> 2] <= d2[f3 + 32 >> 2]) | n5 != t4) || n5 < t4 ? pr2(r6, e5, f3) <= m2(0) | 0 : pr2(r6, f3, e5) >= m2(0) | 0) : pr2(i5, r6, b3[f3 + 16 >> 2]) <= m2(0) | 0 : (e5 = b3[e5 + 16 >> 2], (0 | r6) == (0 | i5) ? pr2(a5, r6, e5) >= m2(0) | 0 : Ur2(a5, r6, e5) >= Ur2(b3[b3[f3 + 4 >> 2] + 16 >> 2], r6, b3[f3 + 16 >> 2]) | 0);
          }
          function Ir2(r6) {
            var e5 = 0, f3 = 0, i5 = 0, a5 = 0, n5 = 0, t4 = m2(0), o5 = m2(0), k4 = 0;
            if (!(e5 = b3[r6 + 12 >> 2]))
              return lr2(b3[r6 >> 2]);
            if (n5 = b3[r6 + 8 >> 2], i5 = b3[b3[(n5 + (e5 << 2) | 0) - 4 >> 2] >> 2], f3 = b3[r6 >> 2], b3[f3 + 8 >> 2] && (a5 = b3[b3[f3 + 4 >> 2] + (b3[b3[f3 >> 2] + 4 >> 2] << 3) >> 2], t4 = d2[a5 + 28 >> 2], o5 = d2[i5 + 28 >> 2], !(!(d2[a5 + 32 >> 2] <= d2[i5 + 32 >> 2]) | t4 != o5) || t4 < o5))
              return lr2(f3);
            for (f3 = ((0 | e5) < 1 ? e5 : 1) - 1 | 0; ; ) {
              if ((0 | e5) < 2)
                return b3[r6 + 12 >> 2] = f3, i5;
              if (a5 = e5 << 2, e5 = k4 = e5 - 1 | 0, b3[b3[(a5 + n5 | 0) - 8 >> 2] >> 2])
                break;
            }
            return b3[r6 + 12 >> 2] = k4, i5;
          }
          function _r2(r6, e5, f3) {
            e5 |= 0, f3 |= 0;
            var i5 = 0, a5 = 0, n5 = 0, t4 = 0;
            n5 = 1;
            r:
              if ((0 | (i5 = b3[64 + (r6 |= 0) >> 2])) != (0 | (a5 = r6 - -64 | 0))) {
                if (t4 = 0 - e5 | 0, !f3) {
                  for (; ; )
                    if (r6 = k3[b3[i5 + 20 >> 2] + 21 | 0], b3[i5 + 28 >> 2] = (0 | r6) == k3[b3[b3[i5 + 4 >> 2] + 20 >> 2] + 21 | 0] ? 0 : r6 ? e5 : t4, (0 | a5) == (0 | (i5 = b3[i5 >> 2])))
                      break r;
                }
                for (; ; ) {
                  if (r6 = b3[i5 >> 2], (0 | (f3 = k3[b3[i5 + 20 >> 2] + 21 | 0])) == k3[b3[b3[i5 + 4 >> 2] + 20 >> 2] + 21 | 0]) {
                    if (!rr2(i5)) {
                      n5 = 0;
                      break r;
                    }
                  } else
                    b3[i5 + 28 >> 2] = f3 ? e5 : t4;
                  if ((0 | a5) == (0 | (i5 = r6)))
                    break;
                }
              }
            return 0 | n5;
          }
          function Sr2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0;
            (f3 = O2(16)) && (a5 = br2(b3[r6 + 8 >> 2])) && (i5 = b3[a5 + 16 >> 2], d2[i5 + 32 >> 2] = e5, b3[i5 + 28 >> 2] = 2112929218, i5 = b3[b3[a5 + 4 >> 2] + 16 >> 2], d2[i5 + 32 >> 2] = e5, b3[i5 + 28 >> 2] = -34554430, b3[r6 + 72 >> 2] = i5, n4[f3 + 15 | 0] = 0, n4[f3 + 12 | 0] = 0, b3[f3 + 8 >> 2] = 0, b3[f3 >> 2] = a5, n4[f3 + 13 | 0] = 1, n4[f3 + 14 | 0] = 0, i5 = f3, f3 = Fr2(a5 = b3[r6 + 64 >> 2], a5, f3), b3[i5 + 4 >> 2] = f3, f3) || (Zr(r6 + 1740 | 0, 1), E2());
          }
          function Pr2(r6) {
            var e5 = 0, f3 = 0, i5 = 0;
            if ((0 | (e5 = b3[40 + (r6 |= 0) >> 2])) != (0 | (f3 = r6 + 40 | 0)))
              for (; i5 = b3[e5 >> 2], Y2(e5), (0 | f3) != (0 | (e5 = i5)); )
                ;
            if ((0 | (e5 = b3[r6 >> 2])) != (0 | r6))
              for (; i5 = b3[e5 >> 2], Y2(e5), (0 | (e5 = i5)) != (0 | r6); )
                ;
            if ((0 | (e5 = b3[r6 + 64 >> 2])) != (0 | (f3 = r6 - -64 | 0)))
              for (; i5 = b3[e5 >> 2], Y2(e5), (0 | f3) != (0 | (e5 = i5)); )
                ;
            Y2(r6);
          }
          function xr2(r6) {
            var e5 = 0, f3 = m2(0), i5 = m2(0);
            if (!(e5 = b3[r6 + 12 >> 2]))
              return r6 = b3[r6 >> 2], b3[b3[r6 + 4 >> 2] + (b3[b3[r6 >> 2] + 4 >> 2] << 3) >> 2];
            e5 = b3[b3[(b3[r6 + 8 >> 2] + (e5 << 2) | 0) - 4 >> 2] >> 2], r6 = b3[r6 >> 2];
            r: {
              if (b3[r6 + 8 >> 2]) {
                if (r6 = b3[b3[r6 + 4 >> 2] + (b3[b3[r6 >> 2] + 4 >> 2] << 3) >> 2], (f3 = d2[r6 + 28 >> 2]) < (i5 = d2[e5 + 28 >> 2]))
                  break r;
                if (f3 == i5 && d2[r6 + 32 >> 2] <= d2[e5 + 32 >> 2])
                  break r;
              }
              r6 = e5;
            }
            return r6;
          }
          function Lr2(r6, e5, f3, i5) {
            r6 |= 0, e5 |= 0, f3 |= 0, i5 |= 0, f3 = 0;
            r: {
              if (e5 = b3[520]) {
                if (!((f3 = b3[e5 >> 2]) >>> 0 < 100001)) {
                  e5 = O2(12);
                  break r;
                }
              } else
                e5 = O2(1200008), b3[e5 + 4 >> 2] = 12, b3[e5 >> 2] = 0, b3[520] = e5;
              b3[e5 >> 2] = f3 + 1, e5 = 8 + (p2(f3, 12) + e5 | 0) | 0;
            }
            d2[e5 >> 2] = d2[r6 >> 2], d2[e5 + 4 >> 2] = d2[r6 + 4 >> 2], d2[e5 + 8 >> 2] = d2[r6 + 8 >> 2], b3[i5 >> 2] = e5;
          }
          function jr2(r6, e5, f3) {
            var i5 = 0, a5 = 0, t4 = 0;
            if (e5 >>> 0 < 1)
              i5 = r6;
            else
              for (; i5 = sr2(r6, e5, 10), t4 = a5 = F2, a5 = Or2(i5, a5, 10, 0), n4[0 | (f3 = f3 - 1 | 0)] = r6 - a5 | 48, a5 = e5 >>> 0 > 9, r6 = i5, e5 = t4, a5; )
                ;
            if (i5)
              for (; r6 = (i5 >>> 0) / 10 | 0, n4[0 | (f3 = f3 - 1 | 0)] = i5 - p2(r6, 10) | 48, e5 = i5 >>> 0 > 9, i5 = r6, e5; )
                ;
            return f3;
          }
          function Br2(r6, e5, f3, i5) {
            var a5 = 0, n5 = 0, t4 = 0;
            if (n5 = b3[610] + 1 | 0, b3[610] = n5, b3[r6 >> 2] = n5, i5)
              for (; ; ) {
                if (!b3[(t4 = (a5 << 3) + f3 | 0) >> 2])
                  return b3[t4 >> 2] = n5, b3[4 + (r6 = (a5 << 3) + f3 | 0) >> 2] = e5, b3[r6 + 8 >> 2] = 0, C2(0 | i5), f3;
                if ((0 | (a5 = a5 + 1 | 0)) == (0 | i5))
                  break;
              }
            return a5 = r6, r6 = i5 << 1, e5 = Br2(a5, e5, Z2(f3, i5 << 4 | 8), r6), C2(0 | r6), e5;
          }
          function Tr2(r6, e5) {
            var f3 = 0, i5 = 0, a5 = 0;
            if (A2(+r6), f3 = 0 | u2(1), i5 = 0 | u2(0), a5 = f3, 2047 != (0 | (f3 = f3 >>> 20 & 2047))) {
              if (!f3)
                return f3 = e5, 0 == r6 ? e5 = 0 : (r6 = Tr2(18446744073709552e3 * r6, e5), e5 = b3[e5 >> 2] + -64 | 0), b3[f3 >> 2] = e5, r6;
              b3[e5 >> 2] = f3 - 1022, c2(0, 0 | i5), c2(1, -2146435073 & a5 | 1071644672), r6 = +s2();
            }
            return r6;
          }
          function Ur2(r6, e5, f3) {
            var i5 = m2(0), a5 = m2(0), n5 = m2(0), t4 = m2(0), o5 = m2(0);
            return i5 = d2[e5 + 28 >> 2], a5 = m2(i5 - d2[r6 + 28 >> 2]), i5 = m2(d2[f3 + 28 >> 2] - i5), (n5 = m2(a5 + i5)) > m2(0) ? (o5 = d2[e5 + 32 >> 2], t4 = d2[((e5 = i5 > a5) ? r6 : f3) + 32 >> 2], i5 = m2(m2(o5 - t4) + m2(m2((e5 ? a5 : i5) / n5) * m2(t4 - d2[(e5 ? f3 : r6) + 32 >> 2])))) : i5 = m2(0), i5;
          }
          function Fr2(r6, e5, f3) {
            for (var i5 = 0; e5 = b3[e5 + 8 >> 2], (i5 = b3[e5 >> 2]) && !(0 | be[b3[r6 + 16 >> 2]](b3[r6 + 12 >> 2], i5, f3)); )
              ;
            return (r6 = O2(12)) ? (b3[r6 >> 2] = f3, b3[r6 + 4 >> 2] = b3[e5 + 4 >> 2], b3[b3[e5 + 4 >> 2] + 8 >> 2] = r6, b3[r6 + 8 >> 2] = e5, b3[e5 + 4 >> 2] = r6, r6) : 0;
          }
          function Or2(r6, e5, f3, i5) {
            var a5 = 0, n5 = 0, t4 = 0, o5 = 0, b4 = 0, k4 = 0;
            return k4 = p2(a5 = f3 >>> 16 | 0, n5 = r6 >>> 16 | 0), a5 = (65535 & (n5 = ((b4 = p2(t4 = 65535 & f3, o5 = 65535 & r6)) >>> 16 | 0) + p2(n5, t4) | 0)) + p2(a5, o5) | 0, F2 = (p2(e5, f3) + k4 | 0) + p2(r6, i5) + (n5 >>> 16) + (a5 >>> 16) | 0, 65535 & b4 | a5 << 16;
          }
          function Dr(r6, e5, f3, i5, a5) {
            var n5 = 0;
            if (U2 = n5 = U2 - 256 | 0, !(73728 & a5 | (0 | f3) <= (0 | i5))) {
              if (dr2(n5, 255 & e5, (i5 = (f3 = f3 - i5 | 0) >>> 0 < 256) ? f3 : 256), !i5)
                for (; yr2(r6, n5, 256), (f3 = f3 - 256 | 0) >>> 0 > 255; )
                  ;
              yr2(r6, n5, f3);
            }
            U2 = n5 + 256 | 0;
          }
          function Hr(r6, e5, f3) {
            var i5 = 0, a5 = 0;
            r:
              if (f3)
                for (; ; ) {
                  if (!(a5 = b3[(i5 << 3) + e5 >> 2]))
                    break r;
                  if ((0 | r6) == (0 | a5))
                    return b3[4 + ((i5 << 3) + e5 | 0) >> 2];
                  if ((0 | (i5 = i5 + 1 | 0)) == (0 | f3))
                    break;
                }
            return 0;
          }
          function Qr(r6) {
            var e5 = 0, f3 = 0;
            return (r6 = (e5 = b3[412]) + (f3 = r6 + 3 & -4) | 0) >>> 0 <= e5 >>> 0 && f3 || r6 >>> 0 > ke() << 16 >>> 0 && !(0 | P2(0 | r6)) ? (b3[613] = 48, -1) : (b3[412] = r6, e5);
          }
          function Wr(r6) {
            var e5 = 0, f3 = 0, i5 = 0;
            if (n4[b3[r6 >> 2]] - 48 >>> 0 < 10)
              for (; e5 = b3[r6 >> 2], i5 = n4[0 | e5], b3[r6 >> 2] = e5 + 1, f3 = (p2(f3, 10) + i5 | 0) - 48 | 0, n4[e5 + 1 | 0] - 48 >>> 0 < 10; )
                ;
            return f3;
          }
          function qr(r6, e5) {
            r6 |= 0;
            var f3 = 0, i5 = 0;
            (0 | (f3 = b3[4 + (e5 |= 0) >> 2])) < b3[e5 + 8 >> 2] && (i5 = b3[e5 >> 2] + (p2(b3[e5 + 12 >> 2], f3) << 2) | 0, d2[i5 >> 2] = d2[r6 >> 2], d2[i5 + 4 >> 2] = d2[r6 + 4 >> 2], b3[e5 + 4 >> 2] = f3 + 1);
          }
          function zr(r6, e5) {
            r6 |= 0, e5 |= 0;
            var f3 = m2(0), i5 = m2(0);
            if ((f3 = d2[r6 + 28 >> 2]) < (i5 = d2[e5 + 28 >> 2]))
              r6 = 1;
            else {
              if (f3 != i5)
                return 0;
              r6 = d2[r6 + 32 >> 2] <= d2[e5 + 32 >> 2];
            }
            return 0 | r6;
          }
          function Kr(r6) {
            var e5 = 0;
            (e5 = b3[r6 >> 2]) && (Y2(b3[e5 + 4 >> 2]), Y2(b3[e5 >> 2]), Y2(e5)), (e5 = b3[r6 + 8 >> 2]) && Y2(e5), (e5 = b3[r6 + 4 >> 2]) && Y2(e5), Y2(r6);
          }
          function Yr(r6) {
            r6 |= 0;
            var e5 = 0;
            U2 = e5 = U2 - 16 | 0, b3[e5 >> 2] = r6, U2 = r6 = U2 - 16 | 0, b3[r6 + 12 >> 2] = e5, gr2(b3[288], 1078, e5, 0), U2 = r6 + 16 | 0, U2 = e5 + 16 | 0;
          }
          function Nr(r6, e5, f3) {
            r6 |= 0, e5 = b3[20 + (e5 |= 0) >> 2], b3[e5 + 16 >> 2] = b3[r6 + 84 >> 2], b3[r6 + 84 >> 2] = e5, n4[e5 + 20 | 0] = 1;
          }
          function Vr(r6) {
            var e5 = 0;
            e5 = b3[r6 + 4 >> 2], b3[e5 + 8 >> 2] = b3[r6 + 8 >> 2], b3[b3[r6 + 8 >> 2] + 4 >> 2] = e5, Y2(r6);
          }
          function Gr(r6, e5) {
            var f3 = 0;
            U2 = f3 = U2 - 16 | 0, b3[f3 + 12 >> 2] = e5, gr2(b3[288], r6, e5, 43), U2 = f3 + 16 | 0;
          }
          function Jr(r6) {
            var e5 = 0;
            return (-1 >>> (e5 = 31 & r6) & -2) << e5 | (-1 << (r6 = 0 - r6 & 31) & -2) >>> r6;
          }
          function Zr(r6, e5) {
            r6 |= 0, e5 |= 0, b3[611] || (b3[612] = e5, b3[611] = r6), x2();
          }
          function Xr(r6, e5) {
            r6 |= 0, e5 |= 0, b3[611] || (b3[612] = e5, b3[611] = r6);
          }
          function $r(r6, e5, f3, i5) {
            return F2 = 0, 0;
          }
          function re(r6, e5, f3, i5, a5) {
          }
          function ee(r6, e5, f3, i5) {
          }
          function fe(r6) {
            return 0;
          }
          function ie(r6, e5) {
          }
          function ae() {
            return 0 | U2;
          }
          function ne(r6) {
            U2 = r6 |= 0;
          }
          function te(r6) {
          }
          function oe() {
          }
          f2 = k3, t3();
          var be = e4([null, Nr, vr2, ie, ie, ie, te, ur2, re, zr, Mr2, ie, oe, te, te, te, te, ee, te, cr2, J2, Rr2, br2, ir2, tr2, K2, Zr, Q2, _r2, $2, Er2, N2, nr2, Pr2, qr, te, oe, Lr2, Yr, te, fe, Ar2, $r, q2]);
          function ke() {
            return a4.byteLength / 65536 | 0;
          }
          function ue(r6) {
            r6 |= 0;
            var e5 = 0 | ke(), t4 = e5 + r6 | 0;
            if (e5 < t4 && t4 < 65536) {
              var u3 = new ArrayBuffer(p2(t4, 65536));
              new Int8Array(u3).set(n4), n4 = new Int8Array(u3), o4 = new Int16Array(u3), b3 = new Int32Array(u3), k3 = new Uint8Array(u3), l3 = new Uint16Array(u3), v2 = new Uint32Array(u3), d2 = new Float32Array(u3), h2 = new Float64Array(u3), a4 = u3, i4.buffer = a4, f2 = k3;
            }
            return e5;
          }
          return { n: oe, o: O2, p: Y2, q: be, r: D2, s: ae, t: ne, u: Xr };
        }
        return l2(r4);
      }(hr);
    }, instantiate: function(r3, e3) {
      return { then: function(e4) {
        var f2 = new M.Module(r3);
        e4({ instance: new M.Instance(f2) });
      } };
    }, RuntimeError: Error };
    y = [], "object" != typeof M && X("no native wasm support detected");
    var I = false;
    function _(r3, e3) {
      r3 || X("Assertion failed: " + e3);
    }
    var S, P, x, L = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function j(r3, e3, f2) {
      for (var i3 = e3 + f2, a3 = e3; r3[a3] && !(a3 >= i3); )
        ++a3;
      if (a3 - e3 > 16 && r3.subarray && L)
        return L.decode(r3.subarray(e3, a3));
      for (var n3 = ""; e3 < a3; ) {
        var t3 = r3[e3++];
        if (128 & t3) {
          var o3 = 63 & r3[e3++];
          if (192 != (224 & t3)) {
            var b2 = 63 & r3[e3++];
            if ((t3 = 224 == (240 & t3) ? (15 & t3) << 12 | o3 << 6 | b2 : (7 & t3) << 18 | o3 << 12 | b2 << 6 | 63 & r3[e3++]) < 65536)
              n3 += String.fromCharCode(t3);
            else {
              var k2 = t3 - 65536;
              n3 += String.fromCharCode(55296 | k2 >> 10, 56320 | 1023 & k2);
            }
          } else
            n3 += String.fromCharCode((31 & t3) << 6 | o3);
        } else
          n3 += String.fromCharCode(t3);
      }
      return n3;
    }
    function B(r3, e3) {
      return r3 ? j(P, r3, e3) : "";
    }
    function T(r3, e3) {
      return r3 % e3 > 0 && (r3 += e3 - r3 % e3), r3;
    }
    function U(r3) {
      S = r3, a2.HEAP8 = new Int8Array(r3), a2.HEAP16 = new Int16Array(r3), a2.HEAP32 = x = new Int32Array(r3), a2.HEAPU8 = P = new Uint8Array(r3), a2.HEAPU16 = new Uint16Array(r3), a2.HEAPU32 = new Uint32Array(r3), a2.HEAPF32 = new Float32Array(r3), a2.HEAPF64 = new Float64Array(r3);
    }
    var F, O = a2.INITIAL_MEMORY || 4194304;
    (R = a2.wasmMemory ? a2.wasmMemory : new M.Memory({ initial: O / 65536, maximum: 32768 })) && (S = R.buffer), O = S.byteLength, U(S);
    var D = [], H = [], Q = [];
    function W() {
      if (a2.preRun)
        for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; )
          K(a2.preRun.shift());
      tr(D);
    }
    function q() {
      tr(H);
    }
    function z() {
      if (a2.postRun)
        for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; )
          N(a2.postRun.shift());
      tr(Q);
    }
    function K(r3) {
      D.unshift(r3);
    }
    function Y(r3) {
      H.unshift(r3);
    }
    function N(r3) {
      Q.unshift(r3);
    }
    var V = 0, G = null;
    function J(r3) {
      V++, a2.monitorRunDependencies && a2.monitorRunDependencies(V);
    }
    function Z(r3) {
      if (V--, a2.monitorRunDependencies && a2.monitorRunDependencies(V), 0 == V && G) {
        var e3 = G;
        G = null, e3();
      }
    }
    function X(r3) {
      throw a2.onAbort && a2.onAbort(r3), w(r3 += ""), I = true, r3 = "abort(" + r3 + "). Build with -s ASSERTIONS=1 for more info.", new M.RuntimeError(r3);
    }
    a2.preloadedImages = {}, a2.preloadedAudios = {};
    var $, rr = "data:application/octet-stream;base64,";
    function er(r3) {
      return r3.startsWith(rr);
    }
    function fr(r3) {
      return r3.startsWith("file://");
    }
    function ir(r3) {
      try {
        if (r3 == $ && y)
          return new Uint8Array(y);
        var e3 = dr(r3);
        if (e3)
          return e3;
        if (c)
          return c(r3);
        throw "both async and sync fetching of the wasm failed";
      } catch (w2) {
        X(w2);
      }
    }
    function ar() {
      if (!y && (l || v)) {
        if ("function" == typeof fetch && !fr($))
          return fetch($, { credentials: "same-origin" }).then(function(r3) {
            if (!r3.ok)
              throw "failed to load wasm binary file at '" + $ + "'";
            return r3.arrayBuffer();
          }).catch(function() {
            return ir($);
          });
        if (u)
          return new Promise(function(r3, e3) {
            u($, function(e4) {
              r3(new Uint8Array(e4));
            }, e3);
          });
      }
      return Promise.resolve().then(function() {
        return ir($);
      });
    }
    function nr() {
      var r3 = { a: hr };
      function e3(r4, e4) {
        var f3 = r4.exports;
        a2.asm = f3, F = a2.asm.q, Y(a2.asm.n), Z();
      }
      function f2(r4) {
        e3(r4.instance);
      }
      function i3(e4) {
        return ar().then(function(e5) {
          return M.instantiate(e5, r3);
        }).then(e4, function(r4) {
          w("failed to asynchronously prepare wasm: " + r4), X(r4);
        });
      }
      function n3() {
        return y || "function" != typeof M.instantiateStreaming || er($) || fr($) || "function" != typeof fetch ? i3(f2) : fetch($, { credentials: "same-origin" }).then(function(e4) {
          return M.instantiateStreaming(e4, r3).then(f2, function(r4) {
            return w("wasm streaming compile failed: " + r4), w("falling back to ArrayBuffer instantiation"), i3(f2);
          });
        });
      }
      if (J(), a2.instantiateWasm)
        try {
          return a2.instantiateWasm(r3, e3);
        } catch (t3) {
          return w("Module.instantiateWasm callback failed with error: " + t3), false;
        }
      return n3(), {};
    }
    function tr(r3) {
      for (; r3.length > 0; ) {
        var e3 = r3.shift();
        if ("function" != typeof e3) {
          var f2 = e3.func;
          "number" == typeof f2 ? void 0 === e3.arg ? F.get(f2)() : F.get(f2)(e3.arg) : f2(void 0 === e3.arg ? null : e3.arg);
        } else
          e3(a2);
      }
    }
    function or() {
      throw "longjmp";
    }
    function br(r3, e3, f2) {
      P.copyWithin(r3, e3, e3 + f2);
    }
    function kr(r3) {
      try {
        return R.grow(r3 - S.byteLength + 65535 >>> 16), U(R.buffer), 1;
      } catch (e3) {
      }
    }
    function ur(r3) {
      var e3 = P.length, f2 = 2147483648;
      if ((r3 >>>= 0) > f2)
        return false;
      for (var i3 = 1; i3 <= 4; i3 *= 2) {
        var a3 = e3 * (1 + 0.2 / i3);
        if (a3 = Math.min(a3, r3 + 100663296), kr(Math.min(f2, T(Math.max(r3, a3), 65536))))
          return true;
      }
      return false;
    }
    er($ = "libtess-asm.wasm") || ($ = p($));
    var cr = { mappings: {}, buffers: [null, [], []], printChar: function(r3, e3) {
      var f2 = cr.buffers[r3];
      0 === e3 || 10 === e3 ? ((1 === r3 ? m : w)(j(f2, 0)), f2.length = 0) : f2.push(e3);
    }, varargs: void 0, get: function() {
      return cr.varargs += 4, x[cr.varargs - 4 >> 2];
    }, getStr: function(r3) {
      return B(r3);
    }, get64: function(r3, e3) {
      return r3;
    } };
    function sr(r3, e3, f2, i3) {
      for (var a3 = 0, n3 = 0; n3 < f2; n3++) {
        for (var t3 = x[e3 + 8 * n3 >> 2], o3 = x[e3 + (8 * n3 + 4) >> 2], b2 = 0; b2 < o3; b2++)
          cr.printChar(r3, P[t3 + b2]);
        a3 += o3;
      }
      return x[i3 >> 2] = a3, 0;
    }
    function Ar(r3) {
      for (var e3 = [], f2 = 0; f2 < r3.length; f2++) {
        var i3 = r3[f2];
        i3 > 255 && (i3 &= 255), e3.push(String.fromCharCode(i3));
      }
      return e3.join("");
    }
    var lr = "function" == typeof atob ? atob : function(r3) {
      var e3, f2, i3, a3, n3, t3, o3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b2 = "", k2 = 0;
      r3 = r3.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do {
        e3 = o3.indexOf(r3.charAt(k2++)) << 2 | (a3 = o3.indexOf(r3.charAt(k2++))) >> 4, f2 = (15 & a3) << 4 | (n3 = o3.indexOf(r3.charAt(k2++))) >> 2, i3 = (3 & n3) << 6 | (t3 = o3.indexOf(r3.charAt(k2++))), b2 += String.fromCharCode(e3), 64 !== n3 && (b2 += String.fromCharCode(f2)), 64 !== t3 && (b2 += String.fromCharCode(i3));
      } while (k2 < r3.length);
      return b2;
    };
    function vr(r3) {
      if ("boolean" == typeof d && d) {
        var e3 = Buffer.from(r3, "base64");
        return new Uint8Array(e3.buffer, e3.byteOffset, e3.byteLength);
      }
      try {
        for (var f2 = lr(r3), i3 = new Uint8Array(f2.length), a3 = 0; a3 < f2.length; ++a3)
          i3[a3] = f2.charCodeAt(a3);
        return i3;
      } catch (n3) {
        throw new Error("Converting base64 string to bytes failed.");
      }
    }
    function dr(r3) {
      if (er(r3))
        return vr(r3.slice(rr.length));
    }
    var hr = { i: or, m: br, h: ur, g: sr, c: C, l: Rr, e: Cr, k: Mr, j: Ir, f: Er, d: gr, a: R, b: E };
    nr(), a2.___wasm_call_ctors = function() {
      return (a2.___wasm_call_ctors = a2.asm.n).apply(null, arguments);
    }, a2._malloc = function() {
      return (a2._malloc = a2.asm.o).apply(null, arguments);
    }, a2._free = function() {
      return (a2._free = a2.asm.p).apply(null, arguments);
    }, a2._triangulate = function() {
      return (a2._triangulate = a2.asm.r).apply(null, arguments);
    };
    var pr, mr = a2.stackSave = function() {
      return (mr = a2.stackSave = a2.asm.s).apply(null, arguments);
    }, wr = a2.stackRestore = function() {
      return (wr = a2.stackRestore = a2.asm.t).apply(null, arguments);
    }, yr = a2._setThrew = function() {
      return (yr = a2._setThrew = a2.asm.u).apply(null, arguments);
    };
    function gr(r3, e3, f2) {
      var i3 = mr();
      try {
        F.get(r3)(e3, f2);
      } catch (a3) {
        if (wr(i3), a3 !== a3 + 0 && "longjmp" !== a3)
          throw a3;
        yr(1, 0);
      }
    }
    function Er(r3, e3) {
      var f2 = mr();
      try {
        F.get(r3)(e3);
      } catch (i3) {
        if (wr(f2), i3 !== i3 + 0 && "longjmp" !== i3)
          throw i3;
        yr(1, 0);
      }
    }
    function Cr(r3, e3) {
      var f2 = mr();
      try {
        return F.get(r3)(e3);
      } catch (i3) {
        if (wr(f2), i3 !== i3 + 0 && "longjmp" !== i3)
          throw i3;
        yr(1, 0);
      }
    }
    function Rr(r3) {
      var e3 = mr();
      try {
        return F.get(r3)();
      } catch (f2) {
        if (wr(e3), f2 !== f2 + 0 && "longjmp" !== f2)
          throw f2;
        yr(1, 0);
      }
    }
    function Mr(r3, e3, f2) {
      var i3 = mr();
      try {
        return F.get(r3)(e3, f2);
      } catch (a3) {
        if (wr(i3), a3 !== a3 + 0 && "longjmp" !== a3)
          throw a3;
        yr(1, 0);
      }
    }
    function Ir(r3, e3, f2, i3) {
      var a3 = mr();
      try {
        return F.get(r3)(e3, f2, i3);
      } catch (n3) {
        if (wr(a3), n3 !== n3 + 0 && "longjmp" !== n3)
          throw n3;
        yr(1, 0);
      }
    }
    function _r(r3) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + r3 + ")", this.status = r3;
    }
    function Sr(r3) {
      function e3() {
        pr || (pr = true, a2.calledRun = true, I || (q(), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), z()));
      }
      V > 0 || (W(), V > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          a2.setStatus("");
        }, 1), e3();
      }, 1)) : e3()));
    }
    if (G = function r3() {
      pr || Sr(), pr || (G = r3);
    }, a2.run = Sr, a2.preInit)
      for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
        a2.preInit.pop()();
    Sr();
    let Pr = null, xr = null, Lr = null, jr = null;
    const Br = i2.Module, Tr = 2, Ur = 4e3;
    let Fr = 0;
    const Or = (r3, e3, f2) => {
      Pr || (Pr = Br._triangulate);
      let i3 = Br.HEAPF32;
      const a3 = Br.HEAP32.BYTES_PER_ELEMENT, n3 = 2, t3 = i3.BYTES_PER_ELEMENT;
      f2 > Fr && (Fr = f2, Lr && (Br._free(Lr), Lr = 0), xr && (Br._free(xr), xr = 0)), Lr || (Lr = Br._malloc(f2 * t3)), jr || (jr = Br._malloc(Ur * a3));
      const o3 = f2 * Tr;
      xr || (xr = Br._malloc(o3 * t3)), i3 = Br.HEAPF32, i3.set(r3, Lr / t3), Br.HEAP32.set(e3, jr / a3);
      const b2 = o3 / n3, k2 = Pr(Lr, jr, Math.min(e3.length, Ur), n3, xr, b2), u2 = k2 * n3;
      i3 = Br.HEAPF32;
      const c2 = i3.slice(xr / t3, xr / t3 + u2), s2 = {};
      return s2.buffer = c2, s2.vertexCount = k2, s2;
    };
    return i2.triangulate = Or, i2.whenLoaded();
  }
  return { load: r };
}, void 0 !== (a = i()) && (f.exports = a);
var t = n.exports;
const o = e({ __proto__: null, default: o$1(t) }, [t]);
export {
  o as l
};
