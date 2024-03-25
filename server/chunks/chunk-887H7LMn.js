import { bk as o } from "./chunk-ejFG4zJ0.js";
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
f = n, i = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, a = function(r = {}) {
  var e2, f2, a2 = r;
  a2.ready = new Promise((r2, i2) => {
    e2 = r2, f2 = i2;
  });
  var n2 = Object.assign({}, a2), t2 = "object" == typeof window, b2 = "function" == typeof importScripts;
  "object" == typeof process && "object" == typeof process.versions && process.versions.node;
  var o2, k = "";
  function u(r2) {
    return a2.locateFile ? a2.locateFile(r2, k) : k + r2;
  }
  (t2 || b2) && (b2 ? k = self.location.href : "undefined" != typeof document && document.currentScript && (k = document.currentScript.src), i && (k = i), k = 0 !== k.indexOf("blob:") ? k.substr(0, k.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", b2 && (o2 = (r2) => {
    var e3 = new XMLHttpRequest();
    return e3.open("GET", r2, false), e3.responseType = "arraybuffer", e3.send(null), new Uint8Array(e3.response);
  }));
  var c, s = a2.print || console.log.bind(console), A = a2.printErr || console.error.bind(console);
  Object.assign(a2, n2), n2 = null, a2.arguments && a2.arguments, a2.thisProgram && a2.thisProgram, a2.quit && a2.quit, a2.wasmBinary && (c = a2.wasmBinary);
  var l, v = { Memory: function(r2) {
    this.buffer = new ArrayBuffer(65536 * r2.initial);
  }, Module: function(r2) {
  }, Instance: function(r2, e3) {
    this.exports = function(r3) {
      function e4(r4) {
        return r4.set = function(r5, e5) {
          this[r5] = e5;
        }, r4.get = function(r5) {
          return this[r5];
        }, r4;
      }
      for (var f3, i2 = new Uint8Array(123), a3 = 25; a3 >= 0; --a3)
        i2[48 + a3] = 52 + a3, i2[65 + a3] = a3, i2[97 + a3] = 26 + a3;
      function n3(r4, e5, f4) {
        for (var a4, n4, t4 = 0, b4 = e5, o4 = f4.length, k3 = e5 + (3 * o4 >> 2) - ("=" == f4[o4 - 2]) - ("=" == f4[o4 - 1]); t4 < o4; t4 += 4)
          a4 = i2[f4.charCodeAt(t4 + 1)], n4 = i2[f4.charCodeAt(t4 + 2)], r4[b4++] = i2[f4.charCodeAt(t4)] << 2 | a4 >> 4, b4 < k3 && (r4[b4++] = a4 << 4 | n4 >> 2), b4 < k3 && (r4[b4++] = n4 << 6 | i2[f4.charCodeAt(t4 + 3)]);
      }
      function t3(r4) {
        n3(f3, 1024, "LSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweABuYW4AaW5mAE5BTgBJTkYALgAobnVsbCkAR290IGVycm9yICVkCgAlZCAlZCAoJWYsJWYpLCglZiwlZiksKCVmLCVmKSAK"), n3(f3, 1136, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk="), n3(f3, 1217, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO"), n3(f3, 1275, "DA=="), n3(f3, 1287, "EwAAAAATAAAAAAkMAAAAAAAMAAAM"), n3(f3, 1333, "EA=="), n3(f3, 1345, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ"), n3(f3, 1391, "Eg=="), n3(f3, 1403, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa"), n3(f3, 1458, "GgAAABoaGgAAAAAAAAk="), n3(f3, 1507, "FA=="), n3(f3, 1519, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU"), n3(f3, 1565, "Fg=="), n3(f3, 1577, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG"), n3(f3, 1616, "BQ=="), n3(f3, 1628, "JQ=="), n3(f3, 1652, "JgAAACcAAACYCAAAAAQ="), n3(f3, 1676, "AQ=="), n3(f3, 1692, "/////wo="), n3(f3, 1760, "YI8=");
      }
      i2[43] = 62, i2[47] = 63;
      var b3 = new ArrayBuffer(16), o3 = new Int32Array(b3), k2 = new Float64Array(b3);
      function u2(r4) {
        return o3[r4];
      }
      function c2(r4, e5) {
        o3[r4] = e5;
      }
      function s2() {
        return k2[0];
      }
      function A2(r4) {
        k2[0] = r4;
      }
      function l2() {
        throw new Error("abort");
      }
      function v2(r4) {
        var i3 = r4.a, a4 = i3.a, n4 = a4.buffer;
        a4.grow = ce;
        var b4 = new Int8Array(n4), o4 = new Int16Array(n4), k3 = new Int32Array(n4), v3 = new Uint8Array(n4), d2 = new Uint16Array(n4), h2 = new Uint32Array(n4), w2 = new Float32Array(n4), y2 = new Float64Array(n4), p2 = Math.imul, m2 = Math.fround, g2 = Math.abs, E2 = Math.clz32, C2 = i3.b, R2 = i3.c, I2 = i3.d, S2 = i3.e, M2 = i3.f, P2 = i3.g, _2 = i3.h, U2 = i3.i, B2 = 36704, F2 = 0, Q2 = 0;
        function T2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l3 = 0;
          B2 = s3 = B2 - 16 | 0;
          r: {
            e: {
              f: {
                i: {
                  a: {
                    n: {
                      t: {
                        b: {
                          o: {
                            if ((r5 |= 0) >>> 0 <= 244) {
                              if (3 & (e5 = (t4 = k3[854]) >>> (f4 = (b5 = r5 >>> 0 < 11 ? 16 : r5 + 11 & 504) >>> 3 | 0) | 0)) {
                                e5 = 3456 + (r5 = (f4 = f4 + (1 & (-1 ^ e5)) | 0) << 3) | 0, i4 = k3[r5 + 3464 >> 2], (0 | e5) != (0 | (r5 = k3[i4 + 8 >> 2])) ? (k3[r5 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = r5) : (A3 = 3416, l3 = Vr(f4) & t4, k3[A3 >> 2] = l3), r5 = i4 + 8 | 0, e5 = f4 << 3, k3[i4 + 4 >> 2] = 3 | e5, k3[4 + (e5 = e5 + i4 | 0) >> 2] = 1 | k3[e5 + 4 >> 2];
                                break r;
                              }
                              if ((c3 = k3[856]) >>> 0 >= b5 >>> 0)
                                break o;
                              if (e5) {
                                e5 = 3456 + (r5 = (i4 = re((0 - (r5 = 2 << f4) | r5) & e5 << f4)) << 3) | 0, a5 = k3[r5 + 3464 >> 2], (0 | e5) != (0 | (r5 = k3[a5 + 8 >> 2])) ? (k3[r5 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = r5) : (t4 = Vr(i4) & t4, k3[854] = t4), k3[a5 + 4 >> 2] = 3 | b5, i4 = (r5 = i4 << 3) - b5 | 0, k3[4 + (f4 = a5 + b5 | 0) >> 2] = 1 | i4, k3[r5 + a5 >> 2] = i4, c3 && (e5 = 3456 + (-8 & c3) | 0, n5 = k3[859], (r5 = 1 << (c3 >>> 3)) & t4 ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | t4, r5 = e5), k3[e5 + 8 >> 2] = n5, k3[r5 + 12 >> 2] = n5, k3[n5 + 12 >> 2] = e5, k3[n5 + 8 >> 2] = r5), r5 = a5 + 8 | 0, k3[859] = f4, k3[856] = i4;
                                break r;
                              }
                              if (!(u3 = k3[855]))
                                break o;
                              for (f4 = k3[3720 + (re(u3) << 2) >> 2], a5 = (-8 & k3[f4 + 4 >> 2]) - b5 | 0, e5 = f4; (r5 = k3[e5 + 16 >> 2]) || (r5 = k3[e5 + 20 >> 2]); )
                                a5 = (i4 = (e5 = (-8 & k3[r5 + 4 >> 2]) - b5 | 0) >>> 0 < a5 >>> 0) ? e5 : a5, f4 = i4 ? r5 : f4, e5 = r5;
                              if (o5 = k3[f4 + 24 >> 2], (0 | (i4 = k3[f4 + 12 >> 2])) != (0 | f4)) {
                                r5 = k3[f4 + 8 >> 2], k3[r5 + 12 >> 2] = i4, k3[i4 + 8 >> 2] = r5;
                                break e;
                              }
                              if (!(r5 = k3[(e5 = f4 + 20 | 0) >> 2])) {
                                if (!(r5 = k3[f4 + 16 >> 2]))
                                  break b;
                                e5 = f4 + 16 | 0;
                              }
                              for (; n5 = e5, i4 = r5, (r5 = k3[(e5 = r5 + 20 | 0) >> 2]) || (e5 = i4 + 16 | 0, r5 = k3[i4 + 16 >> 2]); )
                                ;
                              k3[n5 >> 2] = 0;
                              break e;
                            }
                            if (b5 = -1, !(r5 >>> 0 > 4294967231) && (b5 = -8 & (r5 = r5 + 11 | 0), u3 = k3[855])) {
                              a5 = 0 - b5 | 0, t4 = 0, b5 >>> 0 < 256 || (t4 = 31, b5 >>> 0 > 16777215 || (t4 = 62 + ((b5 >>> 38 - (r5 = E2(r5 >>> 8 | 0)) & 1) - (r5 << 1) | 0) | 0));
                              k: {
                                u: {
                                  if (e5 = k3[3720 + (t4 << 2) >> 2])
                                    for (r5 = 0, f4 = b5 << (31 != (0 | t4) ? 25 - (t4 >>> 1 | 0) | 0 : 0); ; ) {
                                      if (!((n5 = (-8 & k3[e5 + 4 >> 2]) - b5 | 0) >>> 0 >= a5 >>> 0 || (i4 = e5, a5 = n5))) {
                                        a5 = 0, r5 = e5;
                                        break u;
                                      }
                                      if (n5 = k3[e5 + 20 >> 2], e5 = k3[16 + ((f4 >>> 29 & 4) + e5 | 0) >> 2], r5 = n5 ? (0 | n5) == (0 | e5) ? r5 : n5 : r5, f4 <<= 1, !e5)
                                        break;
                                    }
                                  else
                                    r5 = 0;
                                  if (!(r5 | i4)) {
                                    if (i4 = 0, !(r5 = (0 - (r5 = 2 << t4) | r5) & u3))
                                      break o;
                                    r5 = k3[3720 + (re(r5) << 2) >> 2];
                                  }
                                  if (!r5)
                                    break k;
                                }
                                for (; a5 = (f4 = (e5 = (-8 & k3[r5 + 4 >> 2]) - b5 | 0) >>> 0 < a5 >>> 0) ? e5 : a5, i4 = f4 ? r5 : i4, r5 = (e5 = k3[r5 + 16 >> 2]) || k3[r5 + 20 >> 2]; )
                                  ;
                              }
                              if (!(!i4 | k3[856] - b5 >>> 0 <= a5 >>> 0)) {
                                if (t4 = k3[i4 + 24 >> 2], (0 | i4) != (0 | (f4 = k3[i4 + 12 >> 2]))) {
                                  r5 = k3[i4 + 8 >> 2], k3[r5 + 12 >> 2] = f4, k3[f4 + 8 >> 2] = r5;
                                  break f;
                                }
                                if (!(r5 = k3[(e5 = i4 + 20 | 0) >> 2])) {
                                  if (!(r5 = k3[i4 + 16 >> 2]))
                                    break t;
                                  e5 = i4 + 16 | 0;
                                }
                                for (; n5 = e5, f4 = r5, (r5 = k3[(e5 = r5 + 20 | 0) >> 2]) || (e5 = f4 + 16 | 0, r5 = k3[f4 + 16 >> 2]); )
                                  ;
                                k3[n5 >> 2] = 0;
                                break f;
                              }
                            }
                          }
                          if ((r5 = k3[856]) >>> 0 >= b5 >>> 0) {
                            i4 = k3[859], (e5 = r5 - b5 | 0) >>> 0 >= 16 ? (k3[4 + (f4 = i4 + b5 | 0) >> 2] = 1 | e5, k3[r5 + i4 >> 2] = e5, k3[i4 + 4 >> 2] = 3 | b5) : (k3[i4 + 4 >> 2] = 3 | r5, k3[4 + (r5 = r5 + i4 | 0) >> 2] = 1 | k3[r5 + 4 >> 2], f4 = 0, e5 = 0), k3[856] = e5, k3[859] = f4, r5 = i4 + 8 | 0;
                            break r;
                          }
                          if ((o5 = k3[857]) >>> 0 > b5 >>> 0) {
                            e5 = o5 - b5 | 0, k3[857] = e5, r5 = (f4 = k3[860]) + b5 | 0, k3[860] = r5, k3[r5 + 4 >> 2] = 1 | e5, k3[f4 + 4 >> 2] = 3 | b5, r5 = f4 + 8 | 0;
                            break r;
                          }
                          if (r5 = 0, a5 = b5 + 47 | 0, k3[972] ? f4 = k3[974] : (k3[975] = -1, k3[976] = -1, k3[973] = 4096, k3[974] = 4096, k3[972] = s3 + 12 & -16 ^ 1431655768, k3[977] = 0, k3[965] = 0, f4 = 4096), (e5 = (t4 = a5 + f4 | 0) & (n5 = 0 - f4 | 0)) >>> 0 <= b5 >>> 0)
                            break r;
                          if ((i4 = k3[964]) && i4 >>> 0 < (u3 = (f4 = k3[962]) + e5 | 0) >>> 0 | f4 >>> 0 >= u3 >>> 0)
                            break r;
                          o: {
                            if (!(4 & v3[3860])) {
                              k: {
                                u: {
                                  c: {
                                    s: {
                                      if (i4 = k3[860])
                                        for (r5 = 3864; ; ) {
                                          if ((f4 = k3[r5 >> 2]) >>> 0 <= i4 >>> 0 & i4 >>> 0 < f4 + k3[r5 + 4 >> 2] >>> 0)
                                            break s;
                                          if (!(r5 = k3[r5 + 8 >> 2]))
                                            break;
                                        }
                                      if (-1 == (0 | (f4 = Dr(0))))
                                        break k;
                                      if (t4 = e5, (r5 = (i4 = k3[973]) - 1 | 0) & f4 && (t4 = (e5 - f4 | 0) + (r5 + f4 & 0 - i4) | 0), t4 >>> 0 <= b5 >>> 0)
                                        break k;
                                      if ((i4 = k3[964]) && i4 >>> 0 < (n5 = (r5 = k3[962]) + t4 | 0) >>> 0 | r5 >>> 0 >= n5 >>> 0)
                                        break k;
                                      if ((0 | f4) != (0 | (r5 = Dr(t4))))
                                        break c;
                                      break o;
                                    }
                                    if ((0 | (f4 = Dr(t4 = n5 & t4 - o5))) == (k3[r5 >> 2] + k3[r5 + 4 >> 2] | 0))
                                      break u;
                                    r5 = f4;
                                  }
                                  if (-1 == (0 | r5))
                                    break k;
                                  if (b5 + 48 >>> 0 <= t4 >>> 0) {
                                    f4 = r5;
                                    break o;
                                  }
                                  if (-1 == (0 | Dr(f4 = (f4 = k3[974]) + (a5 - t4 | 0) & 0 - f4)))
                                    break k;
                                  t4 = f4 + t4 | 0, f4 = r5;
                                  break o;
                                }
                                if (-1 != (0 | f4))
                                  break o;
                              }
                              k3[965] = 4 | k3[965];
                            }
                            if (-1 == (0 | (f4 = Dr(e5))) | -1 == (0 | (r5 = Dr(0))) | r5 >>> 0 <= f4 >>> 0)
                              break i;
                            if ((t4 = r5 - f4 | 0) >>> 0 <= b5 + 40 >>> 0)
                              break i;
                          }
                          r5 = k3[962] + t4 | 0, k3[962] = r5, r5 >>> 0 > h2[963] && (k3[963] = r5);
                          o: {
                            if (a5 = k3[860]) {
                              for (r5 = 3864; ; ) {
                                if (((i4 = k3[r5 >> 2]) + (e5 = k3[r5 + 4 >> 2]) | 0) == (0 | f4))
                                  break o;
                                if (!(r5 = k3[r5 + 8 >> 2]))
                                  break;
                              }
                              break n;
                            }
                            for ((r5 = k3[858]) >>> 0 <= f4 >>> 0 && r5 || (k3[858] = f4), r5 = 0, k3[967] = t4, k3[966] = f4, k3[862] = -1, k3[863] = k3[972], k3[969] = 0; e5 = 3456 + (i4 = r5 << 3) | 0, k3[i4 + 3464 >> 2] = e5, k3[i4 + 3468 >> 2] = e5, 32 != (0 | (r5 = r5 + 1 | 0)); )
                              ;
                            e5 = (i4 = t4 - 40 | 0) - (r5 = -8 - f4 & 7) | 0, k3[857] = e5, r5 = r5 + f4 | 0, k3[860] = r5, k3[r5 + 4 >> 2] = 1 | e5, k3[4 + (f4 + i4 | 0) >> 2] = 40, k3[861] = k3[976];
                            break a;
                          }
                          if (8 & k3[r5 + 12 >> 2] | f4 >>> 0 <= a5 >>> 0 | i4 >>> 0 > a5 >>> 0)
                            break n;
                          k3[r5 + 4 >> 2] = e5 + t4, f4 = (r5 = -8 - a5 & 7) + a5 | 0, k3[860] = f4, r5 = (e5 = k3[857] + t4 | 0) - r5 | 0, k3[857] = r5, k3[f4 + 4 >> 2] = 1 | r5, k3[4 + (e5 + a5 | 0) >> 2] = 40, k3[861] = k3[976];
                          break a;
                        }
                        i4 = 0;
                        break e;
                      }
                      f4 = 0;
                      break f;
                    }
                    h2[858] > f4 >>> 0 && (k3[858] = f4), e5 = f4 + t4 | 0, r5 = 3864;
                    n: {
                      t: {
                        b: {
                          for (; ; ) {
                            if ((0 | e5) != k3[r5 >> 2]) {
                              if (r5 = k3[r5 + 8 >> 2])
                                continue;
                              break b;
                            }
                            break;
                          }
                          if (!(8 & v3[r5 + 12 | 0]))
                            break t;
                        }
                        for (r5 = 3864; !((e5 = k3[r5 >> 2]) >>> 0 <= a5 >>> 0 && (n5 = e5 + k3[r5 + 4 >> 2] | 0) >>> 0 > a5 >>> 0); )
                          r5 = k3[r5 + 8 >> 2];
                        for (e5 = (i4 = t4 - 40 | 0) - (r5 = -8 - f4 & 7) | 0, k3[857] = e5, r5 = r5 + f4 | 0, k3[860] = r5, k3[r5 + 4 >> 2] = 1 | e5, k3[4 + (f4 + i4 | 0) >> 2] = 40, k3[861] = k3[976], k3[(i4 = (r5 = (n5 + (39 - n5 & 7) | 0) - 47 | 0) >>> 0 < a5 + 16 >>> 0 ? a5 : r5) + 4 >> 2] = 27, r5 = k3[969], k3[i4 + 16 >> 2] = k3[968], k3[i4 + 20 >> 2] = r5, r5 = k3[967], k3[i4 + 8 >> 2] = k3[966], k3[i4 + 12 >> 2] = r5, k3[968] = i4 + 8, k3[967] = t4, k3[966] = f4, k3[969] = 0, r5 = i4 + 24 | 0; k3[r5 + 4 >> 2] = 7, e5 = r5 + 8 | 0, r5 = r5 + 4 | 0, e5 >>> 0 < n5 >>> 0; )
                          ;
                        if ((0 | i4) == (0 | a5))
                          break a;
                        if (k3[i4 + 4 >> 2] = -2 & k3[i4 + 4 >> 2], n5 = i4 - a5 | 0, k3[a5 + 4 >> 2] = 1 | n5, k3[i4 >> 2] = n5, n5 >>> 0 <= 255) {
                          e5 = 3456 + (-8 & n5) | 0, (f4 = k3[854]) & (r5 = 1 << (n5 >>> 3)) ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | f4, r5 = e5), k3[e5 + 8 >> 2] = a5, k3[r5 + 12 >> 2] = a5, k3[a5 + 12 >> 2] = e5, k3[a5 + 8 >> 2] = r5;
                          break a;
                        }
                        if (r5 = 31, n5 >>> 0 <= 16777215 && (r5 = 62 + ((n5 >>> 38 - (r5 = E2(n5 >>> 8 | 0)) & 1) - (r5 << 1) | 0) | 0), k3[a5 + 28 >> 2] = r5, k3[a5 + 16 >> 2] = 0, k3[a5 + 20 >> 2] = 0, e5 = 3720 + (r5 << 2) | 0, (i4 = k3[855]) & (f4 = 1 << r5)) {
                          for (r5 = n5 << (31 != (0 | r5) ? 25 - (r5 >>> 1 | 0) | 0 : 0), i4 = k3[e5 >> 2]; ; ) {
                            if ((0 | n5) == (-8 & k3[(e5 = i4) + 4 >> 2]))
                              break n;
                            if (f4 = r5 >>> 29 | 0, r5 <<= 1, !(i4 = k3[16 + (f4 = (4 & f4) + e5 | 0) >> 2]))
                              break;
                          }
                          k3[f4 + 16 >> 2] = a5;
                        } else
                          k3[855] = f4 | i4, k3[e5 >> 2] = a5;
                        k3[a5 + 24 >> 2] = e5, k3[a5 + 12 >> 2] = a5, k3[a5 + 8 >> 2] = a5;
                        break a;
                      }
                      k3[r5 >> 2] = f4, k3[r5 + 4 >> 2] = k3[r5 + 4 >> 2] + t4, k3[4 + (u3 = (-8 - f4 & 7) + f4 | 0) >> 2] = 3 | b5, t4 = (a5 = e5 + (-8 - e5 & 7) | 0) - (o5 = b5 + u3 | 0) | 0;
                      t:
                        if (k3[860] != (0 | a5))
                          if (k3[859] != (0 | a5)) {
                            if (1 == (3 & (f4 = k3[a5 + 4 >> 2]))) {
                              n5 = -8 & f4;
                              b:
                                if (f4 >>> 0 <= 255) {
                                  if ((0 | (e5 = k3[a5 + 12 >> 2])) == (0 | (r5 = k3[a5 + 8 >> 2]))) {
                                    A3 = 3416, l3 = k3[854] & Vr(f4 >>> 3 | 0), k3[A3 >> 2] = l3;
                                    break b;
                                  }
                                  k3[r5 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = r5;
                                } else {
                                  b5 = k3[a5 + 24 >> 2];
                                  o:
                                    if ((0 | a5) == (0 | (r5 = k3[a5 + 12 >> 2]))) {
                                      k: {
                                        if (!(f4 = k3[(e5 = a5 + 20 | 0) >> 2])) {
                                          if (!(f4 = k3[a5 + 16 >> 2]))
                                            break k;
                                          e5 = a5 + 16 | 0;
                                        }
                                        for (; i4 = e5, (f4 = k3[(e5 = (r5 = f4) + 20 | 0) >> 2]) || (e5 = r5 + 16 | 0, f4 = k3[r5 + 16 >> 2]); )
                                          ;
                                        k3[i4 >> 2] = 0;
                                        break o;
                                      }
                                      r5 = 0;
                                    } else
                                      e5 = k3[a5 + 8 >> 2], k3[e5 + 12 >> 2] = r5, k3[r5 + 8 >> 2] = e5;
                                  if (b5) {
                                    f4 = k3[a5 + 28 >> 2];
                                    o: {
                                      if (k3[(e5 = 3720 + (f4 << 2) | 0) >> 2] == (0 | a5)) {
                                        if (k3[e5 >> 2] = r5, r5)
                                          break o;
                                        A3 = 3420, l3 = k3[855] & Vr(f4), k3[A3 >> 2] = l3;
                                        break b;
                                      }
                                      if (k3[b5 + (k3[b5 + 16 >> 2] == (0 | a5) ? 16 : 20) >> 2] = r5, !r5)
                                        break b;
                                    }
                                    k3[r5 + 24 >> 2] = b5, (e5 = k3[a5 + 16 >> 2]) && (k3[r5 + 16 >> 2] = e5, k3[e5 + 24 >> 2] = r5), (e5 = k3[a5 + 20 >> 2]) && (k3[r5 + 20 >> 2] = e5, k3[e5 + 24 >> 2] = r5);
                                  }
                                }
                              t4 = n5 + t4 | 0, f4 = k3[4 + (a5 = a5 + n5 | 0) >> 2];
                            }
                            if (k3[a5 + 4 >> 2] = -2 & f4, k3[o5 + 4 >> 2] = 1 | t4, k3[t4 + o5 >> 2] = t4, t4 >>> 0 <= 255)
                              e5 = 3456 + (-8 & t4) | 0, (f4 = k3[854]) & (r5 = 1 << (t4 >>> 3)) ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | f4, r5 = e5), k3[e5 + 8 >> 2] = o5, k3[r5 + 12 >> 2] = o5, k3[o5 + 12 >> 2] = e5, k3[o5 + 8 >> 2] = r5;
                            else {
                              f4 = 31, t4 >>> 0 <= 16777215 && (f4 = 62 + ((t4 >>> 38 - (r5 = E2(t4 >>> 8 | 0)) & 1) - (r5 << 1) | 0) | 0), k3[o5 + 28 >> 2] = f4, k3[o5 + 16 >> 2] = 0, k3[o5 + 20 >> 2] = 0, e5 = 3720 + (f4 << 2) | 0;
                              b: {
                                if ((i4 = k3[855]) & (r5 = 1 << f4)) {
                                  for (f4 = t4 << (31 != (0 | f4) ? 25 - (f4 >>> 1 | 0) | 0 : 0), r5 = k3[e5 >> 2]; ; ) {
                                    if (e5 = r5, (-8 & k3[r5 + 4 >> 2]) == (0 | t4))
                                      break b;
                                    if (i4 = f4 >>> 29 | 0, f4 <<= 1, !(r5 = k3[16 + (i4 = (4 & i4) + r5 | 0) >> 2]))
                                      break;
                                  }
                                  k3[i4 + 16 >> 2] = o5;
                                } else
                                  k3[855] = r5 | i4, k3[e5 >> 2] = o5;
                                k3[o5 + 24 >> 2] = e5, k3[o5 + 12 >> 2] = o5, k3[o5 + 8 >> 2] = o5;
                                break t;
                              }
                              r5 = k3[e5 + 8 >> 2], k3[r5 + 12 >> 2] = o5, k3[e5 + 8 >> 2] = o5, k3[o5 + 24 >> 2] = 0, k3[o5 + 12 >> 2] = e5, k3[o5 + 8 >> 2] = r5;
                            }
                          } else
                            k3[859] = o5, r5 = k3[856] + t4 | 0, k3[856] = r5, k3[o5 + 4 >> 2] = 1 | r5, k3[r5 + o5 >> 2] = r5;
                        else
                          k3[860] = o5, r5 = k3[857] + t4 | 0, k3[857] = r5, k3[o5 + 4 >> 2] = 1 | r5;
                      r5 = u3 + 8 | 0;
                      break r;
                    }
                    r5 = k3[e5 + 8 >> 2], k3[r5 + 12 >> 2] = a5, k3[e5 + 8 >> 2] = a5, k3[a5 + 24 >> 2] = 0, k3[a5 + 12 >> 2] = e5, k3[a5 + 8 >> 2] = r5;
                  }
                  if (!((r5 = k3[857]) >>> 0 <= b5 >>> 0)) {
                    e5 = r5 - b5 | 0, k3[857] = e5, r5 = (f4 = k3[860]) + b5 | 0, k3[860] = r5, k3[r5 + 4 >> 2] = 1 | e5, k3[f4 + 4 >> 2] = 3 | b5, r5 = f4 + 8 | 0;
                    break r;
                  }
                }
                k3[806] = 48, r5 = 0;
                break r;
              }
              f:
                if (t4) {
                  e5 = k3[i4 + 28 >> 2];
                  i: {
                    if (k3[(r5 = 3720 + (e5 << 2) | 0) >> 2] == (0 | i4)) {
                      if (k3[r5 >> 2] = f4, f4)
                        break i;
                      u3 = Vr(e5) & u3, k3[855] = u3;
                      break f;
                    }
                    if (k3[t4 + (k3[t4 + 16 >> 2] == (0 | i4) ? 16 : 20) >> 2] = f4, !f4)
                      break f;
                  }
                  k3[f4 + 24 >> 2] = t4, (r5 = k3[i4 + 16 >> 2]) && (k3[f4 + 16 >> 2] = r5, k3[r5 + 24 >> 2] = f4), (r5 = k3[i4 + 20 >> 2]) && (k3[f4 + 20 >> 2] = r5, k3[r5 + 24 >> 2] = f4);
                }
              f:
                if (a5 >>> 0 <= 15)
                  r5 = a5 + b5 | 0, k3[i4 + 4 >> 2] = 3 | r5, k3[4 + (r5 = r5 + i4 | 0) >> 2] = 1 | k3[r5 + 4 >> 2];
                else if (k3[i4 + 4 >> 2] = 3 | b5, k3[4 + (n5 = i4 + b5 | 0) >> 2] = 1 | a5, k3[a5 + n5 >> 2] = a5, a5 >>> 0 <= 255)
                  e5 = 3456 + (-8 & a5) | 0, (f4 = k3[854]) & (r5 = 1 << (a5 >>> 3)) ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | f4, r5 = e5), k3[e5 + 8 >> 2] = n5, k3[r5 + 12 >> 2] = n5, k3[n5 + 12 >> 2] = e5, k3[n5 + 8 >> 2] = r5;
                else {
                  r5 = 31, a5 >>> 0 <= 16777215 && (r5 = 62 + ((a5 >>> 38 - (r5 = E2(a5 >>> 8 | 0)) & 1) - (r5 << 1) | 0) | 0), k3[n5 + 28 >> 2] = r5, k3[n5 + 16 >> 2] = 0, k3[n5 + 20 >> 2] = 0, e5 = 3720 + (r5 << 2) | 0;
                  i: {
                    if ((f4 = 1 << r5) & u3) {
                      for (r5 = a5 << (31 != (0 | r5) ? 25 - (r5 >>> 1 | 0) | 0 : 0), b5 = k3[e5 >> 2]; ; ) {
                        if ((-8 & k3[(e5 = b5) + 4 >> 2]) == (0 | a5))
                          break i;
                        if (f4 = r5 >>> 29 | 0, r5 <<= 1, !(b5 = k3[16 + (f4 = (4 & f4) + e5 | 0) >> 2]))
                          break;
                      }
                      k3[f4 + 16 >> 2] = n5;
                    } else
                      k3[855] = f4 | u3, k3[e5 >> 2] = n5;
                    k3[n5 + 24 >> 2] = e5, k3[n5 + 12 >> 2] = n5, k3[n5 + 8 >> 2] = n5;
                    break f;
                  }
                  r5 = k3[e5 + 8 >> 2], k3[r5 + 12 >> 2] = n5, k3[e5 + 8 >> 2] = n5, k3[n5 + 24 >> 2] = 0, k3[n5 + 12 >> 2] = e5, k3[n5 + 8 >> 2] = r5;
                }
              r5 = i4 + 8 | 0;
              break r;
            }
            e:
              if (o5) {
                e5 = k3[f4 + 28 >> 2];
                f: {
                  if (k3[(r5 = 3720 + (e5 << 2) | 0) >> 2] == (0 | f4)) {
                    if (k3[r5 >> 2] = i4, i4)
                      break f;
                    A3 = 3420, l3 = Vr(e5) & u3, k3[A3 >> 2] = l3;
                    break e;
                  }
                  if (k3[o5 + (k3[o5 + 16 >> 2] == (0 | f4) ? 16 : 20) >> 2] = i4, !i4)
                    break e;
                }
                k3[i4 + 24 >> 2] = o5, (r5 = k3[f4 + 16 >> 2]) && (k3[i4 + 16 >> 2] = r5, k3[r5 + 24 >> 2] = i4), (r5 = k3[f4 + 20 >> 2]) && (k3[i4 + 20 >> 2] = r5, k3[r5 + 24 >> 2] = i4);
              }
            a5 >>> 0 <= 15 ? (r5 = a5 + b5 | 0, k3[f4 + 4 >> 2] = 3 | r5, k3[4 + (r5 = r5 + f4 | 0) >> 2] = 1 | k3[r5 + 4 >> 2]) : (k3[f4 + 4 >> 2] = 3 | b5, k3[4 + (i4 = f4 + b5 | 0) >> 2] = 1 | a5, k3[i4 + a5 >> 2] = a5, c3 && (e5 = 3456 + (-8 & c3) | 0, n5 = k3[859], (r5 = 1 << (c3 >>> 3)) & t4 ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | t4, r5 = e5), k3[e5 + 8 >> 2] = n5, k3[r5 + 12 >> 2] = n5, k3[n5 + 12 >> 2] = e5, k3[n5 + 8 >> 2] = r5), k3[859] = i4, k3[856] = a5), r5 = f4 + 8 | 0;
          }
          return B2 = s3 + 16 | 0, 0 | r5;
        }
        function H2(r5, e5) {
          var f4 = m2(0), i4 = 0, a5 = m2(0), n5 = m2(0), t4 = 0, o5 = m2(0), u3 = 0, c3 = m2(0), s3 = m2(0), A3 = 0, d3 = 0, h3 = m2(0), p3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, I3 = 0, S3 = 0, M3 = 0, P3 = m2(0), _3 = 0, U3 = 0, F3 = 0;
          B2 = u3 = B2 - 144 | 0, U3 = k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2], M3 = k3[U3 >> 2], C3 = k3[M3 + 16 >> 2], R3 = k3[k3[M3 + 4 >> 2] + 16 >> 2], S3 = k3[e5 >> 2], E3 = k3[k3[S3 + 4 >> 2] + 16 >> 2], p3 = k3[S3 + 16 >> 2], dr2(E3, k3[r5 + 72 >> 2], p3) > m2(0) && (f4 = w2[E3 + 28 >> 2], n5 = w2[E3 + 32 >> 2], i4 = k3[r5 + 72 >> 2], a5 = w2[i4 + 28 >> 2], o5 = w2[i4 + 32 >> 2], s3 = w2[p3 + 28 >> 2], y2[u3 + 40 >> 3] = w2[p3 + 32 >> 2], y2[u3 + 32 >> 3] = s3, y2[u3 + 24 >> 3] = o5, y2[u3 + 16 >> 3] = a5, y2[u3 + 8 >> 3] = n5, y2[u3 >> 3] = f4, zr(1098, u3));
          r: {
            e: {
              f:
                if ((0 | p3) != (0 | C3) && (o5 = (f4 = w2[p3 + 32 >> 2]) <= (n5 = w2[E3 + 32 >> 2]) ? f4 : n5, n5 = w2[C3 + 32 >> 2], !(o5 > ((a5 = w2[R3 + 32 >> 2]) <= n5 ? n5 : a5)))) {
                  i: {
                    if (!(!((a5 = w2[p3 + 28 >> 2]) < (o5 = w2[C3 + 28 >> 2])) & (!(f4 <= n5) | a5 != o5))) {
                      if (!(dr2(R3, p3, C3) > m2(0)))
                        break i;
                      break f;
                    }
                    if (dr2(E3, C3, p3) < m2(0))
                      break f;
                  }
                  d3 = R3, i4 = C3, I3 = p3, (f4 = w2[(A3 = E3) + 28 >> 2]) < (n5 = w2[p3 + 28 >> 2]) | f4 == n5 & w2[A3 + 32 >> 2] <= w2[p3 + 32 >> 2] ? (t4 = I3, I3 = A3) : t4 = A3, (f4 = w2[i4 + 28 >> 2]) > (n5 = w2[d3 + 28 >> 2]) | f4 == n5 & w2[d3 + 32 >> 2] <= w2[i4 + 32 >> 2] ? (f4 = n5, A3 = i4, i4 = d3) : A3 = d3, (n5 = w2[I3 + 28 >> 2]) < f4 | f4 == n5 & w2[I3 + 32 >> 2] <= w2[i4 + 32 >> 2] ? (n5 = f4, d3 = A3, g3 = i4, A3 = t4, i4 = I3) : (d3 = t4, g3 = I3);
                  i:
                    if ((a5 = w2[A3 + 28 >> 2]) > n5 | a5 == n5 & w2[g3 + 32 >> 2] <= w2[A3 + 32 >> 2])
                      if (!((s3 = w2[d3 + 28 >> 2]) > a5) & (!(w2[A3 + 32 >> 2] <= w2[d3 + 32 >> 2]) | a5 != s3))
                        if (f4 = dr2(i4, g3, A3), a5 = dr2(i4, d3, A3), n5 = w2[g3 + 28 >> 2], (o5 = (f4 = (t4 = m2(f4 - a5) < m2(0)) ? m2(-f4) : f4) < m2(0) ? m2(0) : f4) <= (a5 = (f4 = t4 ? a5 : m2(-a5)) < m2(0) ? m2(0) : f4)) {
                          if (c3 = w2[d3 + 28 >> 2], f4 = m2(m2(n5 + c3) * m2(0.5)), a5 == m2(0))
                            break i;
                          f4 = m2(m2(m2(c3 - n5) * m2(o5 / m2(o5 + a5))) + n5);
                        } else
                          f4 = w2[d3 + 28 >> 2], f4 = m2(m2(m2(n5 - f4) * m2(a5 / m2(o5 + a5))) + f4);
                      else {
                        if (f4 = m2(0), o5 = m2(a5 - n5), h3 = m2(n5 - w2[i4 + 28 >> 2]), (P3 = m2(o5 + h3)) > m2(0) && (f4 = w2[((t4 = o5 > h3) ? i4 : A3) + 32 >> 2], f4 = m2(m2(m2(f4 - w2[(t4 ? A3 : i4) + 32 >> 2]) * m2((t4 ? h3 : o5) / P3)) + m2(w2[g3 + 32 >> 2] - f4))), s3 = m2(s3 - a5), (h3 = m2(o5 + s3)) > m2(0) && (c3 = w2[((t4 = o5 < s3) ? g3 : d3) + 32 >> 2], c3 = m2(m2(m2(c3 - w2[(t4 ? d3 : g3) + 32 >> 2]) * m2((t4 ? o5 : s3) / h3)) + m2(w2[A3 + 32 >> 2] - c3))), (s3 = (f4 = (t4 = m2(f4 + c3) < m2(0)) ? m2(-f4) : f4) < m2(0) ? m2(0) : f4) <= (c3 = (f4 = t4 ? m2(-c3) : c3) < m2(0) ? m2(0) : f4)) {
                          if (f4 = m2(m2(n5 + a5) * m2(0.5)), c3 == m2(0))
                            break i;
                          f4 = m2(m2(o5 * m2(s3 / m2(s3 + c3))) + n5);
                          break i;
                        }
                        f4 = m2(m2(m2(n5 - a5) * m2(c3 / m2(s3 + c3))) + a5);
                      }
                    else
                      f4 = m2(m2(n5 + a5) * m2(0.5));
                  w2[u3 + 84 >> 2] = f4, (f4 = w2[i4 + 32 >> 2]) < (n5 = w2[A3 + 32 >> 2]) | f4 == n5 & w2[i4 + 28 >> 2] <= w2[A3 + 28 >> 2] ? (t4 = A3, A3 = i4) : t4 = i4, (f4 = w2[d3 + 32 >> 2]) > (n5 = w2[g3 + 32 >> 2]) | f4 == n5 & w2[g3 + 28 >> 2] <= w2[d3 + 28 >> 2] ? (f4 = n5, i4 = d3, d3 = g3) : i4 = g3, (n5 = w2[A3 + 32 >> 2]) < f4 | f4 == n5 & w2[A3 + 28 >> 2] <= w2[d3 + 28 >> 2] ? (n5 = f4, I3 = i4, g3 = d3, i4 = t4, d3 = A3) : (I3 = t4, g3 = A3);
                  i: {
                    a:
                      if ((a5 = w2[i4 + 32 >> 2]) > n5 | a5 == n5 & w2[g3 + 28 >> 2] <= w2[i4 + 28 >> 2]) {
                        if (!(!((c3 = w2[I3 + 32 >> 2]) > a5) & (!(w2[i4 + 28 >> 2] <= w2[I3 + 28 >> 2]) | a5 != c3))) {
                          if (f4 = m2(0), o5 = m2(0), s3 = m2(a5 - n5), h3 = m2(n5 - w2[d3 + 32 >> 2]), (P3 = m2(s3 + h3)) > m2(0) && (o5 = w2[((t4 = s3 > h3) ? d3 : i4) + 28 >> 2], o5 = m2(m2(m2(o5 - w2[(t4 ? i4 : d3) + 28 >> 2]) * m2((t4 ? h3 : s3) / P3)) + m2(w2[g3 + 28 >> 2] - o5))), c3 = m2(c3 - a5), (h3 = m2(s3 + c3)) > m2(0) && (f4 = w2[((t4 = c3 > s3) ? g3 : I3) + 28 >> 2], f4 = m2(m2(m2(f4 - w2[(t4 ? I3 : g3) + 28 >> 2]) * m2((t4 ? s3 : c3) / h3)) + m2(w2[i4 + 28 >> 2] - f4))), (o5 = (o5 = (i4 = m2(o5 + f4) < m2(0)) ? m2(-o5) : o5) < m2(0) ? m2(0) : o5) <= (f4 = (f4 = i4 ? m2(-f4) : f4) < m2(0) ? m2(0) : f4)) {
                            if (f4 == m2(0))
                              break a;
                            w2[u3 + 88 >> 2] = m2(s3 * m2(o5 / m2(o5 + f4))) + n5;
                            break i;
                          }
                          w2[u3 + 88 >> 2] = m2(m2(n5 - a5) * m2(f4 / m2(o5 + f4))) + a5;
                          break i;
                        }
                        if (f4 = m2(0), o5 = m2(0), s3 = m2(a5 - n5), h3 = w2[d3 + 32 >> 2], P3 = m2(n5 - h3), m2(s3 + P3) > m2(0) && (o5 = w2[g3 + 28 >> 2], o5 = m2(m2(m2(o5 - w2[i4 + 28 >> 2]) * P3) + m2(s3 * m2(o5 - w2[d3 + 28 >> 2])))), a5 = m2(a5 - c3), s3 = m2(c3 - h3), m2(a5 + s3) > m2(0) && (f4 = w2[I3 + 28 >> 2], f4 = m2(m2(m2(f4 - w2[i4 + 28 >> 2]) * s3) + m2(a5 * m2(f4 - w2[d3 + 28 >> 2])))), (a5 = (a5 = (i4 = m2(o5 - f4) < m2(0)) ? m2(-o5) : o5) < m2(0) ? m2(0) : a5) <= (f4 = (f4 = i4 ? f4 : m2(-f4)) < m2(0) ? m2(0) : f4)) {
                          if (f4 == m2(0)) {
                            w2[u3 + 88 >> 2] = m2(n5 + c3) * m2(0.5);
                            break i;
                          }
                          w2[u3 + 88 >> 2] = m2(m2(c3 - n5) * m2(a5 / m2(a5 + f4))) + n5;
                          break i;
                        }
                        w2[u3 + 88 >> 2] = m2(m2(n5 - c3) * m2(f4 / m2(a5 + f4))) + c3;
                        break i;
                      }
                    w2[u3 + 88 >> 2] = m2(n5 + a5) * m2(0.5);
                  }
                  n5 = w2[u3 + 84 >> 2], t4 = k3[r5 + 72 >> 2];
                  i: {
                    if (n5 < (f4 = w2[t4 + 28 >> 2]))
                      a5 = w2[t4 + 32 >> 2];
                    else {
                      if (f4 != n5)
                        break i;
                      if (!((a5 = w2[t4 + 32 >> 2]) >= w2[u3 + 88 >> 2]))
                        break i;
                    }
                    w2[u3 + 88 >> 2] = a5, w2[u3 + 84 >> 2] = f4, n5 = f4;
                  }
                  (f4 = c3 = w2[(i4 = p3) + 28 >> 2]) < (a5 = w2[C3 + 28 >> 2]) || f4 == a5 && w2[i4 + 32 >> 2] <= w2[C3 + 32 >> 2] || (f4 = a5, i4 = C3);
                  i: {
                    if (f4 < n5)
                      o5 = w2[i4 + 32 >> 2];
                    else {
                      if (f4 != n5)
                        break i;
                      if (!((o5 = w2[i4 + 32 >> 2]) <= w2[u3 + 88 >> 2]))
                        break i;
                    }
                    w2[u3 + 88 >> 2] = o5, w2[u3 + 84 >> 2] = f4, n5 = f4;
                  }
                  if (!(n5 == c3 & w2[u3 + 88 >> 2] == w2[p3 + 32 >> 2]) & (a5 != n5 | w2[u3 + 88 >> 2] != w2[C3 + 32 >> 2])) {
                    i: {
                      a: {
                        if (!((n5 = w2[t4 + 28 >> 2]) == w2[E3 + 28 >> 2] & w2[E3 + 32 >> 2] == w2[t4 + 32 >> 2])) {
                          if (dr2(E3, t4, u3 + 56 | 0) >= m2(0))
                            break a;
                          t4 = k3[r5 + 72 >> 2], n5 = w2[t4 + 28 >> 2];
                        }
                        if (n5 == w2[R3 + 28 >> 2] & w2[R3 + 32 >> 2] == w2[t4 + 32 >> 2])
                          break i;
                        if (!(dr2(R3, t4, u3 + 56 | 0) <= m2(0)))
                          break i;
                      }
                      if ((0 | (i4 = k3[r5 + 72 >> 2])) == (0 | R3)) {
                        if (!er2(k3[S3 + 4 >> 2]))
                          break r;
                        if (!ir2(k3[M3 + 4 >> 2], S3))
                          break r;
                        for (i4 = k3[k3[e5 >> 2] + 16 >> 2]; e5 = k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2], A3 = k3[e5 >> 2], (0 | i4) == k3[A3 + 16 >> 2]; )
                          ;
                        if (v3[e5 + 15 | 0] && (t4 = 0, (i4 = X2(k3[k3[k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], k3[A3 + 12 >> 2])) && $2(k3[e5 >> 2]) && (k3[e5 >> 2] = i4, b4[e5 + 15 | 0] = 0, k3[i4 + 24 >> 2] = e5, t4 = k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2]), e5 = t4), !e5)
                          break r;
                        t4 = k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2], i4 = k3[t4 >> 2], wr2(r5, t4, U3), F3 = 1, q2(r5, e5, k3[k3[i4 + 4 >> 2] + 12 >> 2], i4, i4, 1);
                        break f;
                      }
                      if ((0 | i4) == (0 | E3)) {
                        if (!er2(k3[M3 + 4 >> 2]))
                          break r;
                        if (!ir2(k3[S3 + 12 >> 2], k3[k3[M3 + 4 >> 2] + 12 >> 2]))
                          break r;
                        for (t4 = k3[k3[k3[e5 >> 2] + 4 >> 2] + 16 >> 2], i4 = e5; i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2], (0 | t4) == k3[k3[k3[i4 >> 2] + 4 >> 2] + 16 >> 2]; )
                          ;
                        t4 = k3[k3[k3[k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2] + 8 >> 2], k3[e5 >> 2] = k3[k3[M3 + 4 >> 2] + 12 >> 2], F3 = 1, q2(r5, i4, k3[wr2(r5, e5, 0) + 8 >> 2], k3[k3[S3 + 4 >> 2] + 8 >> 2], t4, 1);
                        break f;
                      }
                      if (dr2(E3, i4, u3 + 56 | 0) >= m2(0)) {
                        if (b4[e5 + 14 | 0] = 1, b4[k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !er2(k3[S3 + 4 >> 2]))
                          break r;
                        t4 = k3[S3 + 16 >> 2], i4 = k3[r5 + 72 >> 2], w2[t4 + 28 >> 2] = w2[i4 + 28 >> 2], w2[t4 + 32 >> 2] = w2[i4 + 32 >> 2];
                      } else
                        i4 = k3[r5 + 72 >> 2];
                      if (!(dr2(R3, i4, u3 + 56 | 0) <= m2(0)))
                        break f;
                      if (b4[U3 + 14 | 0] = 1, b4[e5 + 14 | 0] = 1, !er2(k3[M3 + 4 >> 2]))
                        break r;
                      e5 = k3[M3 + 16 >> 2], r5 = k3[r5 + 72 >> 2], w2[e5 + 28 >> 2] = w2[r5 + 28 >> 2], w2[e5 + 32 >> 2] = w2[r5 + 32 >> 2];
                      break f;
                    }
                    if (!er2(k3[S3 + 4 >> 2]))
                      break r;
                    if (!er2(k3[M3 + 4 >> 2]))
                      break r;
                    if (!ir2(k3[k3[M3 + 4 >> 2] + 12 >> 2], S3))
                      break r;
                    if (i4 = k3[S3 + 16 >> 2], w2[i4 + 28 >> 2] = w2[u3 + 84 >> 2], w2[i4 + 32 >> 2] = w2[u3 + 88 >> 2], t4 = ar2(k3[r5 + 68 >> 2], i4), i4 = k3[S3 + 16 >> 2], k3[i4 + 36 >> 2] = t4, 2147483647 == (0 | t4))
                      break e;
                    k3[u3 + 112 >> 2] = k3[p3 + 12 >> 2], k3[u3 + 116 >> 2] = k3[E3 + 12 >> 2], k3[u3 + 120 >> 2] = k3[C3 + 12 >> 2], k3[u3 + 124 >> 2] = k3[R3 + 12 >> 2], k3[i4 + 24 >> 2] = 0, k3[i4 + 16 >> 2] = 0, k3[i4 + 20 >> 2] = 0, f4 = w2[i4 + 28 >> 2], c3 = (n5 = m2(w2[E3 + 28 >> 2] - f4)) < m2(0) ? m2(-n5) : n5, n5 = w2[i4 + 32 >> 2], a5 = m2(w2[E3 + 32 >> 2] - n5), o5 = m2(c3 + (a5 < m2(0) ? m2(-a5) : a5)), c3 = (a5 = m2(w2[p3 + 28 >> 2] - f4)) < m2(0) ? m2(-a5) : a5, a5 = m2(w2[p3 + 32 >> 2] - n5), c3 = m2(c3 + (a5 < m2(0) ? m2(-a5) : a5)), _3 = +m2(c3 + o5), a5 = m2(0.5 * +o5 / _3), w2[u3 + 96 >> 2] = a5, o5 = m2(0.5 * +c3 / _3), w2[u3 + 100 >> 2] = o5, c3 = m2(m2(m2(a5 * w2[p3 + 16 >> 2]) + m2(w2[E3 + 16 >> 2] * o5)) + m2(0)), w2[i4 + 16 >> 2] = c3, s3 = m2(m2(m2(a5 * w2[p3 + 20 >> 2]) + m2(w2[E3 + 20 >> 2] * o5)) + m2(0)), w2[i4 + 20 >> 2] = s3, o5 = m2(m2(m2(a5 * w2[p3 + 24 >> 2]) + m2(w2[E3 + 24 >> 2] * o5)) + m2(0)), w2[i4 + 24 >> 2] = o5, h3 = (a5 = m2(w2[C3 + 28 >> 2] - f4)) < m2(0) ? m2(-a5) : a5, a5 = m2(w2[C3 + 32 >> 2] - n5), a5 = m2(h3 + (a5 < m2(0) ? m2(-a5) : a5)), h3 = (f4 = m2(w2[R3 + 28 >> 2] - f4)) < m2(0) ? m2(-f4) : f4, f4 = m2(w2[R3 + 32 >> 2] - n5), f4 = m2(h3 + (f4 < m2(0) ? m2(-f4) : f4)), _3 = +m2(a5 + f4), f4 = m2(0.5 * +f4 / _3), w2[u3 + 104 >> 2] = f4, n5 = m2(0.5 * +a5 / _3), w2[u3 + 108 >> 2] = n5, a5 = m2(c3 + m2(m2(f4 * w2[C3 + 16 >> 2]) + m2(w2[R3 + 16 >> 2] * n5))), w2[i4 + 16 >> 2] = a5, c3 = m2(s3 + m2(m2(f4 * w2[C3 + 20 >> 2]) + m2(w2[R3 + 20 >> 2] * n5))), w2[i4 + 20 >> 2] = c3, f4 = m2(o5 + m2(m2(f4 * w2[C3 + 24 >> 2]) + m2(w2[R3 + 24 >> 2] * n5))), w2[i4 + 24 >> 2] = f4, w2[u3 + 140 >> 2] = f4, w2[u3 + 136 >> 2] = c3, w2[u3 + 132 >> 2] = a5, k3[i4 + 12 >> 2] = 0, i4 = i4 + 12 | 0, 10 == (0 | (t4 = k3[r5 + 1736 >> 2])) ? ke[k3[r5 + 76 >> 2]](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, i4) : ke[0 | t4](u3 + 132 | 0, u3 + 112 | 0, u3 + 96 | 0, i4, k3[r5 + 1896 >> 2]), k3[i4 >> 2] | v3[r5 + 60 | 0] || (11 == (0 | (i4 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100156) : ke[0 | i4](100156, k3[r5 + 1896 >> 2]), b4[r5 + 60 | 0] = 1), b4[U3 + 14 | 0] = 1, b4[e5 + 14 | 0] = 1, b4[k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1;
                  } else
                    N2(r5, e5);
                }
              return B2 = u3 + 144 | 0, F3;
            }
            Yr(k3[r5 + 68 >> 2]), k3[r5 + 68 >> 2] = 0;
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function W2(r5, e5, f4, i4, a5, n5) {
          r5 |= 0, e5 |= 0, f4 |= 0, i4 |= 0, a5 |= 0, n5 |= 0;
          for (var t4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, d3 = m2(0), h3 = 0, y3 = m2(0), g3 = m2(0), E3 = 0, I3 = 0, M3 = 0, P3 = 0, _3 = 0, B3 = 0; (t4 = k3[1776 + (u3 = s3 << 2) >> 2]) && (k3[t4 >> 2] = 0), (t4 = k3[1776 + (4 | u3) >> 2]) && (k3[t4 >> 2] = 0), (t4 = k3[1776 + (8 | u3) >> 2]) && (k3[t4 >> 2] = 0), (t4 = k3[1776 + (12 | u3) >> 2]) && (k3[t4 >> 2] = 0), 100 != (0 | (s3 = s3 + 4 | 0)); )
            ;
          if ((s3 = k3[544]) || (s3 = T2(16), k3[544] = s3), k3[s3 + 8 >> 2] = n5, k3[s3 + 4 >> 2] = 0, k3[s3 + 12 >> 2] = i4, k3[s3 >> 2] = a5, (s3 = k3[545]) || ((a5 = T2(1900)) ? (k3[a5 + 100 >> 2] = 12, k3[a5 + 96 >> 2] = 13, k3[a5 + 92 >> 2] = 14, k3[a5 + 88 >> 2] = 15, o4[a5 + 80 >> 1] = 0, k3[a5 + 52 >> 2] = 0, k3[a5 + 56 >> 2] = 100130, k3[a5 + 16 >> 2] = 0, k3[a5 + 20 >> 2] = 0, k3[a5 >> 2] = 0, k3[a5 + 1896 >> 2] = 0, k3[a5 + 1736 >> 2] = 10, k3[a5 + 1732 >> 2] = 11, k3[a5 + 1728 >> 2] = 6, k3[a5 + 1724 >> 2] = 5, k3[a5 + 1720 >> 2] = 4, k3[a5 + 1716 >> 2] = 3, k3[a5 + 104 >> 2] = 16, k3[a5 + 76 >> 2] = 17, k3[a5 + 12 >> 2] = 18, k3[a5 + 24 >> 2] = 0) : a5 = 0, k3[545] = a5, hr2(a5, 100107, 31), hr2(k3[545], 100100, 32), hr2(k3[545], 100102, 33), hr2(k3[545], 100105, 34), hr2(k3[545], 100103, 35), hr2(k3[545], 100104, 36), k3[k3[545] + 56 >> 2] = 100130, a5 = k3[545], w2[a5 + 16 >> 2] = 0, w2[a5 + 24 >> 2] = 1, w2[a5 + 20 >> 2] = 0, s3 = k3[545]), a5 = 0, n5 = k3[544], k3[s3 >> 2] && or2(s3, 0), k3[s3 + 112 >> 2] = 0, k3[s3 >> 2] = 1, b4[s3 + 108 | 0] = 0, k3[s3 + 1896 >> 2] = n5, k3[s3 + 8 >> 2] = 0, (0 | f4) > 0)
            for (n5 = 0; ; ) {
              if (M3 = k3[(n5 << 2) + e5 >> 2], t4 = k3[545], 1 != k3[t4 >> 2] && or2(t4, 1), k3[t4 >> 2] = 2, k3[t4 + 4 >> 2] = 0, k3[t4 + 112 >> 2] > 0 && (b4[t4 + 108 | 0] = 1), s3 = 0, (0 | M3) > 0)
                for (; ; ) {
                  A3 = k3[545], 2 != k3[A3 >> 2] && or2(A3, 2), h3 = (p2(a5 + s3 | 0, i4) << 2) + r5 | 0;
                  r: {
                    e: {
                      if (v3[A3 + 108 | 0]) {
                        if (!tr2(A3)) {
                          if (11 != (0 | (u3 = k3[A3 + 1732 >> 2])))
                            break e;
                          ke[k3[A3 + 12 >> 2]](100902);
                          break r;
                        }
                        k3[A3 + 4 >> 2] = 0;
                      }
                      if (B3 = (E3 = +(y3 = (P3 = (E3 = +(d3 = w2[h3 + 4 >> 2])) < -1e37) ? m2(-9999999933815813e21) : d3)) > 1e37, c3 = (I3 = +(g3 = (_3 = (I3 = +(d3 = w2[h3 >> 2])) < -1e37) ? m2(-9999999933815813e21) : d3)) > 1e37, ((t4 = +(d3 = w2[h3 + 8 >> 2]) < -1e37) | (u3 = +(d3 = t4 ? m2(-9999999933815813e21) : d3) > 1e37) | P3 | E3 > 1e37 || I3 > 1e37 || _3) && (11 == (0 | (t4 = k3[A3 + 1732 >> 2])) ? ke[k3[A3 + 12 >> 2]](100155) : ke[0 | t4](100155, k3[A3 + 1896 >> 2])), y3 = B3 ? m2(9999999933815813e21) : y3, g3 = c3 ? m2(9999999933815813e21) : g3, !k3[A3 + 8 >> 2]) {
                        if ((0 | (t4 = k3[A3 + 112 >> 2])) <= 99) {
                          w2[124 + (c3 = A3 + (t4 << 4) | 0) >> 2] = u3 ? m2(9999999933815813e21) : d3, w2[c3 + 120 >> 2] = y3, w2[c3 + 116 >> 2] = g3, k3[c3 + 128 >> 2] = h3, k3[A3 + 112 >> 2] = t4 + 1;
                          break r;
                        }
                        if (!tr2(A3)) {
                          if (11 != (0 | (u3 = k3[A3 + 1732 >> 2])))
                            break e;
                          ke[k3[A3 + 12 >> 2]](100902);
                          break r;
                        }
                      }
                      f: {
                        i: {
                          if (!(t4 = k3[A3 + 4 >> 2])) {
                            if (!(u3 = nr2(k3[A3 + 8 >> 2])))
                              break f;
                            if (ir2(u3, k3[u3 + 4 >> 2]))
                              break i;
                            break f;
                          }
                          if (!er2(t4))
                            break f;
                          u3 = k3[t4 + 12 >> 2];
                        }
                        t4 = k3[u3 + 16 >> 2], w2[t4 + 16 >> 2] = g3, k3[t4 + 12 >> 2] = h3, k3[t4 + 24 >> 2] = 0, w2[t4 + 20 >> 2] = y3, k3[u3 + 28 >> 2] = 1, k3[k3[u3 + 4 >> 2] + 28 >> 2] = -1, k3[A3 + 4 >> 2] = u3;
                        break r;
                      }
                      if (11 == (0 | (u3 = k3[A3 + 1732 >> 2]))) {
                        ke[k3[A3 + 12 >> 2]](100902);
                        break r;
                      }
                    }
                    ke[0 | u3](100902, k3[A3 + 1896 >> 2]);
                  }
                  if ((0 | M3) == (0 | (s3 = s3 + 1 | 0)))
                    break;
                }
              if (t4 = k3[545], 2 != k3[t4 >> 2] && or2(t4, 2), k3[t4 >> 2] = 1, a5 = a5 + M3 | 0, (0 | (n5 = n5 + 1 | 0)) == (0 | f4))
                break;
            }
          c3 = k3[545], r5 = T2(40), k3[r5 >> 2] = 0, u3 = Br(a5 = c3 + 1740 | 0, 1, r5, 4), t4 = F2, r5 = 0;
          r: {
            e: {
              for (; ; ) {
                if (r5) {
                  if (11 != (0 | (e5 = k3[c3 + 1732 >> 2]))) {
                    if (r5 = k3[c3 + 1896 >> 2], k3[978] = 0, C2(0 | e5, 100902, 0 | r5), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                      if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                        break e;
                      F2 = i4;
                    }
                    if (r5 = F2, 1 == (0 | e5))
                      continue;
                    break r;
                  }
                  if (r5 = k3[c3 + 12 >> 2], k3[978] = 0, S2(0 | r5, 100902), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                    if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                      break e;
                    F2 = i4;
                  }
                  if (r5 = F2, 1 == (0 | e5))
                    continue;
                  break r;
                }
                if (1 != k3[c3 >> 2]) {
                  if (k3[978] = 0, C2(19, 0 | c3, 1), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                    if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                      break e;
                    F2 = i4;
                  }
                  if (r5 = F2, 1 == (0 | e5))
                    continue;
                }
                if (k3[c3 >> 2] = 0, !k3[c3 + 8 >> 2]) {
                  if (!(v3[c3 + 80 | 0] | 16 != k3[c3 + 104 >> 2])) {
                    if (k3[978] = 0, f4 = 0 | R2(20, 0 | c3), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                      if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                        break e;
                      F2 = i4;
                    }
                    if (r5 = F2, 1 == (0 | e5))
                      continue;
                    if (f4) {
                      k3[c3 + 1896 >> 2] = 0;
                      break r;
                    }
                  }
                  if (k3[978] = 0, f4 = 0 | R2(21, 0 | c3), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                    if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                      break e;
                    F2 = i4;
                  }
                  if (r5 = F2, 1 == (0 | e5))
                    continue;
                  if (!f4) {
                    if (k3[978] = 0, C2(22, 0 | a5, 1), r5 = k3[978], k3[978] = 0, r5 && (i4 = k3[979])) {
                      if (!Or(k3[r5 >> 2], u3, t4))
                        break e;
                      F2 = i4;
                    }
                    r5 = F2;
                    continue;
                  }
                }
                if (k3[978] = 0, G2(c3), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                  if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                    break e;
                  F2 = i4;
                }
                if (r5 = F2, 1 != (0 | e5)) {
                  if (k3[978] = 0, f4 = 0 | R2(24, 0 | c3), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                    if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                      break e;
                    F2 = i4;
                  }
                  if (r5 = F2, 1 != (0 | e5))
                    if (f4) {
                      n5 = k3[c3 + 8 >> 2];
                      f: {
                        i: {
                          if (!v3[c3 + 60 | 0]) {
                            if (v3[c3 + 81 | 0] ? (k3[978] = 0, f4 = 0 | U2(25, 0 | n5, 1, 1)) : (k3[978] = 0, f4 = 0 | R2(26, 0 | n5)), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                              if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                                break e;
                              F2 = i4;
                            }
                            if (r5 = F2, 1 == (0 | e5))
                              continue;
                            if (!f4) {
                              if (k3[978] = 0, C2(22, 0 | a5, 1), r5 = k3[978], k3[978] = 0, r5 && (i4 = k3[979])) {
                                if (!Or(k3[r5 >> 2], u3, t4))
                                  break e;
                                F2 = i4;
                              }
                              r5 = F2;
                              continue;
                            }
                            if (15 != k3[c3 + 88 >> 2] | 12 != k3[c3 + 100 >> 2] | 13 != k3[c3 + 96 >> 2] | 14 != k3[c3 + 92 >> 2] || 3 != k3[c3 + 1716 >> 2] | 6 != k3[c3 + 1728 >> 2] | 5 != k3[c3 + 1724 >> 2] || 4 != k3[c3 + 1720 >> 2])
                              if (v3[c3 + 81 | 0]) {
                                if (k3[978] = 0, C2(27, 0 | c3, 0 | n5), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                                  if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                                    break e;
                                  F2 = i4;
                                }
                                if (r5 = F2, 1 == (0 | e5))
                                  continue;
                              } else {
                                if (k3[978] = 0, C2(28, 0 | c3, 0 | n5), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                                  if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                                    break e;
                                  F2 = i4;
                                }
                                if (r5 = F2, 1 == (0 | e5))
                                  continue;
                              }
                            if (16 != k3[c3 + 104 >> 2]) {
                              if (k3[978] = 0, fr2(n5), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                                if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                                  break e;
                                F2 = i4;
                              }
                              if (r5 = F2, 1 == (0 | e5))
                                continue;
                              if (r5 = k3[c3 + 104 >> 2], k3[978] = 0, S2(0 | r5, 0 | n5), r5 = k3[978], k3[978] = 0, e5 = -1, !r5)
                                break f;
                              if (!(i4 = k3[979]))
                                break f;
                              if (e5 = Or(k3[r5 >> 2], u3, t4))
                                break i;
                              break e;
                            }
                          }
                          if (k3[978] = 0, Mr(n5), r5 = k3[978], k3[978] = 0, e5 = -1, r5 && (i4 = k3[979])) {
                            if (!(e5 = Or(k3[r5 >> 2], u3, t4)))
                              break e;
                            F2 = i4;
                          }
                          if (r5 = F2, 1 == (0 | e5))
                            continue;
                          k3[c3 + 8 >> 2] = 0, k3[c3 + 1896 >> 2] = 0;
                          break r;
                        }
                        F2 = i4;
                      }
                      if (r5 = F2, 1 != (0 | e5))
                        break;
                    } else {
                      if (k3[978] = 0, C2(22, 0 | a5, 1), r5 = k3[978], k3[978] = 0, r5 && (i4 = k3[979])) {
                        if (!Or(k3[r5 >> 2], u3, t4))
                          break e;
                        F2 = i4;
                      }
                      r5 = F2;
                    }
                }
              }
              k3[c3 + 1896 >> 2] = 0, k3[c3 + 8 >> 2] = 0;
              break r;
            }
            Y2(u3), Kr(r5, i4), l2();
          }
          return Y2(u3), k3[k3[544] + 4 >> 2];
        }
        function x2(r5, e5, f4, i4, a5, n5) {
          r5 |= 0, e5 = +e5, f4 |= 0, i4 |= 0, a5 |= 0, n5 |= 0;
          var t4 = 0, o5 = 0, c3 = 0, s3 = 0, l3 = 0, d3 = 0, h3 = 0, w3 = 0, y3 = 0, m3 = 0, E3 = 0, C3 = 0, R3 = 0, I3 = 0, S3 = 0, M3 = 0, P3 = 0, _3 = 0, U3 = 0, F3 = 0, T3 = 0;
          B2 = w3 = B2 - 560 | 0, k3[w3 + 44 >> 2] = 0, A2(+e5), t4 = 0 | u2(1), u2(0), (0 | t4) < 0 ? (I3 = 1, P3 = 1034, A2(+(e5 = -e5)), t4 = 0 | u2(1), u2(0)) : 2048 & a5 ? (I3 = 1, P3 = 1037) : (P3 = (I3 = 1 & a5) ? 1040 : 1035, U3 = !I3);
          r:
            if (2146435072 != (2146435072 & t4)) {
              S3 = w3 + 16 | 0;
              e: {
                f: {
                  i: {
                    if (e5 = Fr(e5, w3 + 44 | 0), 0 != (e5 += e5)) {
                      if (t4 = k3[w3 + 44 >> 2], k3[w3 + 44 >> 2] = t4 - 1, 97 != (0 | (M3 = 32 | n5)))
                        break i;
                      break e;
                    }
                    if (97 == (0 | (M3 = 32 | n5)))
                      break e;
                    l3 = k3[w3 + 44 >> 2], d3 = (0 | i4) < 0 ? 6 : i4;
                    break f;
                  }
                  l3 = t4 - 29 | 0, k3[w3 + 44 >> 2] = l3, e5 *= 268435456, d3 = (0 | i4) < 0 ? 6 : i4;
                }
                for (o5 = m3 = (w3 + 48 | 0) + ((0 | l3) >= 0 ? 288 : 0) | 0; i4 = e5 < 4294967296 & e5 >= 0 ? ~~e5 >>> 0 : 0, k3[o5 >> 2] = i4, o5 = o5 + 4 | 0, 0 != (e5 = 1e9 * (e5 - +(i4 >>> 0))); )
                  ;
                if ((0 | l3) <= 0)
                  i4 = l3, t4 = o5, c3 = m3;
                else
                  for (c3 = m3, i4 = l3; ; ) {
                    if (s3 = (0 | i4) >= 29 ? 29 : i4, !(c3 >>> 0 > (t4 = o5 - 4 | 0) >>> 0)) {
                      for (y3 = 0; i4 = k3[t4 >> 2], h3 = 31 & s3, _3 = y3, (63 & s3) >>> 0 >= 32 ? (y3 = i4 << h3, i4 = 0) : (y3 = (1 << h3) - 1 & i4 >>> 32 - h3, i4 <<= h3), y3 = y3 + E3 | 0, F3 = t4, T3 = (h3 = _3 + i4 | 0) - Hr(y3 = ur2(h3, i4 >>> 0 > h3 >>> 0 ? y3 + 1 | 0 : y3, 1e9), Q2, 1e9, 0) | 0, k3[F3 >> 2] = T3, c3 >>> 0 <= (t4 = t4 - 4 | 0) >>> 0; )
                        ;
                      y3 && (k3[(c3 = c3 - 4 | 0) >> 2] = y3);
                    }
                    for (; c3 >>> 0 < (t4 = o5) >>> 0 && !k3[(o5 = t4 - 4 | 0) >> 2]; )
                      ;
                    if (i4 = k3[w3 + 44 >> 2] - s3 | 0, k3[w3 + 44 >> 2] = i4, o5 = t4, !((0 | i4) > 0))
                      break;
                  }
                if ((0 | i4) < 0)
                  for (R3 = 1 + ((d3 + 25 >>> 0) / 9 | 0) | 0, E3 = 102 == (0 | M3); ; ) {
                    if (h3 = (0 | (i4 = 0 - i4 | 0)) >= 9 ? 9 : i4, t4 >>> 0 <= c3 >>> 0)
                      o5 = k3[c3 >> 2];
                    else {
                      for (y3 = 1e9 >>> h3 | 0, s3 = -1 << h3 ^ -1, i4 = 0, o5 = c3; _3 = i4, i4 = k3[o5 >> 2], k3[o5 >> 2] = _3 + (i4 >>> h3 | 0), i4 = p2(y3, i4 & s3), (o5 = o5 + 4 | 0) >>> 0 < t4 >>> 0; )
                        ;
                      o5 = k3[c3 >> 2], i4 && (k3[t4 >> 2] = i4, t4 = t4 + 4 | 0);
                    }
                    if (i4 = h3 + k3[w3 + 44 >> 2] | 0, k3[w3 + 44 >> 2] = i4, c3 = (!o5 << 2) + c3 | 0, t4 = t4 - (o5 = E3 ? m3 : c3) >> 2 > (0 | R3) ? o5 + (R3 << 2) | 0 : t4, !((0 | i4) < 0))
                      break;
                  }
                if (i4 = 0, !(t4 >>> 0 <= c3 >>> 0 || (i4 = p2(m3 - c3 >> 2, 9), o5 = 10, (s3 = k3[c3 >> 2]) >>> 0 < 10)))
                  for (; i4 = i4 + 1 | 0, s3 >>> 0 >= (o5 = p2(o5, 10)) >>> 0; )
                    ;
                if ((0 | (o5 = (d3 - (102 != (0 | M3) ? i4 : 0) | 0) - (103 == (0 | M3) & 0 != (0 | d3)) | 0)) < (p2(t4 - m3 >> 2, 9) - 9 | 0)) {
                  if (l3 = (R3 = ((w3 + 48 | 0) + ((0 | l3) < 0 ? 4 : 292) | 0) + ((s3 = (0 | (y3 = o5 + 9216 | 0)) / 9 | 0) << 2) | 0) - 4096 | 0, o5 = 10, (0 | (h3 = y3 - p2(s3, 9) | 0)) <= 7)
                    for (; o5 = p2(o5, 10), 8 != (0 | (h3 = h3 + 1 | 0)); )
                      ;
                  if (!(!(h3 = (E3 = k3[l3 >> 2]) - p2(o5, y3 = (E3 >>> 0) / (o5 >>> 0) | 0) | 0) & (0 | (s3 = R3 - 4092 | 0)) == (0 | t4)) && (!(1 & y3) && (e5 = 9007199254740992, !(1 & b4[R3 - 4100 | 0]) | 1e9 != (0 | o5) | c3 >>> 0 >= l3 >>> 0) || (e5 = 9007199254740994), C3 = (0 | t4) == (0 | s3) ? 1 : 1.5, C3 = (s3 = o5 >>> 1 | 0) >>> 0 > h3 >>> 0 ? 0.5 : (0 | s3) == (0 | h3) ? C3 : 1.5, 45 != v3[0 | P3] | U3 || (C3 = -C3, e5 = -e5), s3 = E3 - h3 | 0, k3[l3 >> 2] = s3, e5 + C3 != e5)) {
                    if (i4 = o5 + s3 | 0, k3[l3 >> 2] = i4, i4 >>> 0 >= 1e9)
                      for (; k3[l3 >> 2] = 0, (l3 = l3 - 4 | 0) >>> 0 < c3 >>> 0 && (k3[(c3 = c3 - 4 | 0) >> 2] = 0), i4 = k3[l3 >> 2] + 1 | 0, k3[l3 >> 2] = i4, i4 >>> 0 > 999999999; )
                        ;
                    if (i4 = p2(m3 - c3 >> 2, 9), o5 = 10, !((s3 = k3[c3 >> 2]) >>> 0 < 10))
                      for (; i4 = i4 + 1 | 0, s3 >>> 0 >= (o5 = p2(o5, 10)) >>> 0; )
                        ;
                  }
                  t4 = t4 >>> 0 > (o5 = l3 + 4 | 0) >>> 0 ? o5 : t4;
                }
                for (; s3 = t4, !(y3 = t4 >>> 0 <= c3 >>> 0) && !k3[(t4 = t4 - 4 | 0) >> 2]; )
                  ;
                if (103 == (0 | M3)) {
                  if (d3 = ((t4 = (0 | (o5 = d3 || 1)) > (0 | i4) & (0 | i4) > -5) ? -1 ^ i4 : -1) + o5 | 0, n5 = (t4 ? -1 : -2) + n5 | 0, !(l3 = 8 & a5)) {
                    if (t4 = -9, !y3 && (l3 = k3[s3 - 4 >> 2]) && (h3 = 10, t4 = 0, !((l3 >>> 0) % 10 | 0))) {
                      for (; o5 = t4, t4 = t4 + 1 | 0, !((l3 >>> 0) % ((h3 = p2(h3, 10)) >>> 0) | 0); )
                        ;
                      t4 = -1 ^ o5;
                    }
                    o5 = p2(s3 - m3 >> 2, 9), 70 != (-33 & n5) ? (l3 = 0, d3 = (0 | (t4 = (0 | (t4 = ((i4 + o5 | 0) + t4 | 0) - 9 | 0)) > 0 ? t4 : 0)) > (0 | d3) ? d3 : t4) : (l3 = 0, d3 = (0 | (t4 = (0 | (t4 = (t4 + o5 | 0) - 9 | 0)) > 0 ? t4 : 0)) > (0 | d3) ? d3 : t4);
                  }
                } else
                  l3 = 8 & a5;
                if (h3 = -1, (0 | ((y3 = l3 | d3) ? 2147483645 : 2147483646)) < (0 | d3))
                  break r;
                if (E3 = 1 + ((0 != (0 | y3)) + d3 | 0) | 0, 70 != (0 | (o5 = -33 & n5))) {
                  if ((S3 - (t4 = Ur(((t4 = i4 >> 31) ^ i4) - t4 | 0, 0, S3)) | 0) <= 1)
                    for (; b4[0 | (t4 = t4 - 1 | 0)] = 48, (S3 - t4 | 0) < 2; )
                      ;
                  if (b4[0 | (R3 = t4 - 2 | 0)] = n5, b4[t4 - 1 | 0] = (0 | i4) < 0 ? 45 : 43, (0 | (t4 = S3 - R3 | 0)) > (2147483647 ^ E3))
                    break r;
                } else {
                  if ((2147483647 ^ E3) < (0 | i4))
                    break r;
                  t4 = (0 | i4) > 0 ? i4 : 0;
                }
                if ((0 | (i4 = t4 + E3 | 0)) > (2147483647 ^ I3))
                  break r;
                xr(r5, 32, f4, E3 = i4 + I3 | 0, a5), Ir(r5, P3, I3), xr(r5, 48, f4, E3, 65536 ^ a5);
                f: {
                  i: {
                    a: {
                      if (70 == (0 | o5)) {
                        for (i4 = 8 | (n5 = w3 + 16 | 0), l3 = 9 | n5, c3 = o5 = c3 >>> 0 > m3 >>> 0 ? m3 : c3; ; ) {
                          t4 = Ur(k3[c3 >> 2], 0, l3);
                          n:
                            if ((0 | o5) == (0 | c3))
                              (0 | t4) == (0 | l3) && (b4[w3 + 24 | 0] = 48, t4 = i4);
                            else {
                              if (w3 + 16 >>> 0 >= t4 >>> 0)
                                break n;
                              for (; b4[0 | (t4 = t4 - 1 | 0)] = 48, w3 + 16 >>> 0 < t4 >>> 0; )
                                ;
                            }
                          if (Ir(r5, t4, l3 - t4 | 0), !(m3 >>> 0 >= (c3 = c3 + 4 | 0) >>> 0))
                            break;
                        }
                        if (y3 && Ir(r5, 1069, 1), (0 | d3) <= 0 | c3 >>> 0 >= s3 >>> 0)
                          break a;
                        for (; ; ) {
                          if ((t4 = Ur(k3[c3 >> 2], 0, l3)) >>> 0 > w3 + 16 >>> 0)
                            for (; b4[0 | (t4 = t4 - 1 | 0)] = 48, w3 + 16 >>> 0 < t4 >>> 0; )
                              ;
                          if (Ir(r5, t4, (0 | d3) >= 9 ? 9 : d3), t4 = d3 - 9 | 0, s3 >>> 0 <= (c3 = c3 + 4 | 0) >>> 0)
                            break i;
                          if (i4 = (0 | d3) > 9, d3 = t4, !i4)
                            break;
                        }
                        break i;
                      }
                      n:
                        if (!((0 | d3) < 0))
                          for (m3 = c3 >>> 0 < s3 >>> 0 ? s3 : c3 + 4 | 0, i4 = 8 | (n5 = w3 + 16 | 0), s3 = 9 | n5, o5 = c3; ; ) {
                            (0 | s3) == (0 | (t4 = Ur(k3[o5 >> 2], 0, s3))) && (b4[w3 + 24 | 0] = 48, t4 = i4);
                            t:
                              if ((0 | o5) == (0 | c3))
                                Ir(r5, t4, 1), t4 = t4 + 1 | 0, l3 | d3 && Ir(r5, 1069, 1);
                              else {
                                if (w3 + 16 >>> 0 >= t4 >>> 0)
                                  break t;
                                for (; b4[0 | (t4 = t4 - 1 | 0)] = 48, w3 + 16 >>> 0 < t4 >>> 0; )
                                  ;
                              }
                            if (Ir(r5, t4, (0 | (n5 = s3 - t4 | 0)) < (0 | d3) ? n5 : d3), d3 = d3 - n5 | 0, m3 >>> 0 <= (o5 = o5 + 4 | 0) >>> 0)
                              break n;
                            if (!((0 | d3) >= 0))
                              break;
                          }
                      xr(r5, 48, d3 + 18 | 0, 18, 0), Ir(r5, R3, S3 - R3 | 0);
                      break f;
                    }
                    t4 = d3;
                  }
                  xr(r5, 48, t4 + 9 | 0, 9, 0);
                }
                xr(r5, 32, f4, E3, 8192 ^ a5), h3 = (0 | f4) < (0 | E3) ? E3 : f4;
                break r;
              }
              if (l3 = (n5 << 26 >> 31 & 9) + P3 | 0, !(i4 >>> 0 > 11)) {
                for (t4 = 12 - i4 | 0, C3 = 16; C3 *= 16, t4 = t4 - 1 | 0; )
                  ;
                e5 = 45 != v3[0 | l3] ? e5 + C3 - C3 : -(C3 + (-e5 - C3));
              }
              for ((0 | S3) == (0 | (t4 = Ur(((t4 = k3[w3 + 44 >> 2]) ^ (o5 = t4 >> 31)) - o5 | 0, 0, S3))) && (b4[w3 + 15 | 0] = 48, t4 = w3 + 15 | 0), m3 = 2 | I3, c3 = 32 & n5, o5 = k3[w3 + 44 >> 2], b4[0 | (d3 = t4 - 2 | 0)] = n5 + 15, b4[t4 - 1 | 0] = (0 | o5) < 0 ? 45 : 43, t4 = 8 & a5, o5 = w3 + 16 | 0; n5 = o5, s3 = g2(e5) < 2147483648 ? ~~e5 : -2147483648, b4[0 | o5] = c3 | v3[s3 + 1600 | 0], !((0 | i4) > 0 | t4) & 0 == (e5 = 16 * (e5 - +(0 | s3))) | 1 != ((o5 = n5 + 1 | 0) - (w3 + 16 | 0) | 0) || (b4[n5 + 1 | 0] = 46, o5 = n5 + 2 | 0), 0 != e5; )
                ;
              h3 = -1, (2147483645 - (n5 = (t4 = S3 - d3 | 0) + m3 | 0) | 0) < (0 | i4) || (s3 = n5, c3 = o5 - (n5 = w3 + 16 | 0) | 0, xr(r5, 32, f4, o5 = s3 + (i4 = i4 && (c3 - 2 | 0) < (0 | i4) ? i4 + 2 | 0 : c3) | 0, a5), Ir(r5, l3, m3), xr(r5, 48, f4, o5, 65536 ^ a5), Ir(r5, n5, c3), xr(r5, 48, i4 - c3 | 0, 0, 0), Ir(r5, d3, t4), xr(r5, 32, f4, o5, 8192 ^ a5), h3 = (0 | f4) < (0 | o5) ? o5 : f4);
            } else
              xr(r5, 32, f4, t4 = I3 + 3 | 0, -65537 & a5), Ir(r5, P3, I3), i4 = 32 & n5, Ir(r5, e5 != e5 ? i4 ? 1053 : 1061 : i4 ? 1057 : 1065, 3), xr(r5, 32, f4, t4, 8192 ^ a5), h3 = (0 | f4) < (0 | t4) ? t4 : f4;
          return B2 = w3 + 560 | 0, 0 | h3;
        }
        function j2(r5, e5, f4, i4, a5, n5) {
          var t4 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l3 = 0, d3 = 0, h3 = 0, w3 = 0, m3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, I3 = 0, S3 = 0, M3 = 0, P3 = 0, _3 = 0, U3 = 0, F3 = 0;
          B2 = c3 = B2 - 80 | 0, k3[c3 + 76 >> 2] = e5, M3 = a5 - 192 | 0, P3 = i4 - 384 | 0, U3 = c3 + 55 | 0, E3 = c3 + 56 | 0;
          r: {
            e: {
              f: {
                i: {
                  a:
                    for (; ; ) {
                      t4 = 0;
                      n:
                        for (; ; ) {
                          if (s3 = e5, (2147483647 ^ w3) < (0 | t4))
                            break i;
                          w3 = t4 + w3 | 0;
                          t: {
                            b: {
                              o: {
                                if (u3 = v3[0 | (t4 = e5)])
                                  for (; ; ) {
                                    k: {
                                      u:
                                        if (e5 = 255 & u3) {
                                          if (37 != (0 | e5))
                                            break k;
                                          for (u3 = t4; ; ) {
                                            if (37 != v3[u3 + 1 | 0]) {
                                              e5 = u3;
                                              break u;
                                            }
                                            if (t4 = t4 + 1 | 0, l3 = v3[u3 + 2 | 0], u3 = e5 = u3 + 2 | 0, 37 != (0 | l3))
                                              break;
                                          }
                                        } else
                                          e5 = t4;
                                      if ((0 | (t4 = t4 - s3 | 0)) > (0 | (_3 = 2147483647 ^ w3)))
                                        break i;
                                      if (r5 && Ir(r5, s3, t4), t4)
                                        continue n;
                                      k3[c3 + 76 >> 2] = e5, t4 = e5 + 1 | 0, m3 = -1, u3 = b4[e5 + 1 | 0] - 48 | 0, 36 != v3[e5 + 2 | 0] | u3 >>> 0 >= 10 || (m3 = u3, C3 = 1, t4 = e5 + 3 | 0), k3[c3 + 76 >> 2] = t4, d3 = 0;
                                      u:
                                        if ((e5 = (u3 = b4[0 | t4]) - 32 | 0) >>> 0 > 31)
                                          l3 = t4;
                                        else if (l3 = t4, 75913 & (e5 = 1 << e5))
                                          for (; ; ) {
                                            if (l3 = t4 + 1 | 0, k3[c3 + 76 >> 2] = l3, d3 |= e5, (e5 = (u3 = b4[t4 + 1 | 0]) - 32 | 0) >>> 0 >= 32)
                                              break u;
                                            if (t4 = l3, !(75913 & (e5 = 1 << e5)))
                                              break;
                                          }
                                      u:
                                        if (42 != (0 | u3)) {
                                          if ((0 | (g3 = Qr(c3 + 76 | 0))) < 0)
                                            break i;
                                          u3 = k3[c3 + 76 >> 2];
                                        } else {
                                          if (u3 = l3 + 1 | 0, 36 != v3[l3 + 2 | 0] | b4[l3 + 1 | 0] - 48 >>> 0 >= 10) {
                                            if (C3)
                                              break o;
                                            if (!r5) {
                                              k3[c3 + 76 >> 2] = u3, C3 = 0, g3 = 0;
                                              break u;
                                            }
                                            e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, C3 = 0, e5 = k3[e5 >> 2];
                                          } else
                                            e5 = b4[0 | u3], u3 = l3 + 3 | 0, C3 = 1, r5 ? e5 = k3[(e5 << 3) + P3 >> 2] : (k3[(e5 << 2) + M3 >> 2] = 10, e5 = 0);
                                          if (k3[c3 + 76 >> 2] = u3, g3 = e5, (0 | e5) >= 0)
                                            break u;
                                          g3 = 0 - e5 | 0, d3 |= 8192;
                                        }
                                      if (t4 = 0, A3 = -1, 46 == v3[0 | u3])
                                        if (42 != v3[u3 + 1 | 0])
                                          k3[c3 + 76 >> 2] = u3 + 1, A3 = Qr(c3 + 76 | 0), e5 = k3[c3 + 76 >> 2], I3 = 1;
                                        else {
                                          if (e5 = u3 + 2 | 0, 36 != v3[u3 + 3 | 0] | b4[u3 + 2 | 0] - 48 >>> 0 >= 10) {
                                            if (C3)
                                              break o;
                                            r5 ? (u3 = k3[f4 >> 2], k3[f4 >> 2] = u3 + 4, A3 = k3[u3 >> 2]) : A3 = 0;
                                          } else
                                            e5 = b4[0 | e5], r5 ? A3 = k3[(e5 << 3) + P3 >> 2] : (k3[(e5 << 2) + M3 >> 2] = 10, A3 = 0), e5 = u3 + 4 | 0;
                                          k3[c3 + 76 >> 2] = e5, I3 = (0 | A3) >= 0;
                                        }
                                      else
                                        e5 = u3, I3 = 0;
                                      for (; ; ) {
                                        if (S3 = t4, l3 = 28, h3 = e5, (u3 = b4[0 | e5]) - 123 >>> 0 < 4294967238)
                                          break f;
                                        if (e5 = e5 + 1 | 0, !((t4 = v3[1071 + (u3 + p2(t4, 58) | 0) | 0]) - 1 >>> 0 < 8))
                                          break;
                                      }
                                      k3[c3 + 76 >> 2] = e5;
                                      u:
                                        if (27 == (0 | t4)) {
                                          if ((0 | m3) >= 0)
                                            break f;
                                          if (t4 = 0, !r5)
                                            continue n;
                                        } else {
                                          if (!t4)
                                            break f;
                                          if ((0 | m3) >= 0) {
                                            if (!r5) {
                                              k3[(m3 << 2) + a5 >> 2] = t4;
                                              continue a;
                                            }
                                            t4 = k3[4 + (u3 = (m3 << 3) + i4 | 0) >> 2], k3[c3 + 64 >> 2] = k3[u3 >> 2], k3[c3 + 68 >> 2] = t4;
                                            break u;
                                          }
                                          if (!r5)
                                            break t;
                                          Ar2(c3 - -64 | 0, t4, f4);
                                        }
                                      if (32 & v3[0 | r5])
                                        break e;
                                      u3 = -65537 & d3, d3 = 8192 & d3 ? u3 : d3, m3 = 0, R3 = 1024, l3 = E3;
                                      u: {
                                        c: {
                                          s: {
                                            A: {
                                              l: {
                                                v: {
                                                  d: {
                                                    h: {
                                                      w: {
                                                        y: {
                                                          p: {
                                                            m: {
                                                              g: {
                                                                E: {
                                                                  C: {
                                                                    switch (t4 = b4[0 | h3], (t4 = S3 && 3 == (15 & t4) ? -45 & t4 : t4) - 88 | 0) {
                                                                      case 11:
                                                                        break u;
                                                                      case 9:
                                                                      case 13:
                                                                      case 14:
                                                                      case 15:
                                                                        break c;
                                                                      case 27:
                                                                        break d;
                                                                      case 12:
                                                                      case 17:
                                                                        break y;
                                                                      case 23:
                                                                        break p;
                                                                      case 0:
                                                                      case 32:
                                                                        break m;
                                                                      case 24:
                                                                        break g;
                                                                      case 22:
                                                                        break E;
                                                                      case 29:
                                                                        break C;
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
                                                                        break b;
                                                                    }
                                                                    switch (t4 - 65 | 0) {
                                                                      case 0:
                                                                      case 4:
                                                                      case 5:
                                                                      case 6:
                                                                        break c;
                                                                      case 2:
                                                                        break l;
                                                                      case 1:
                                                                      case 3:
                                                                        break b;
                                                                    }
                                                                    if (83 == (0 | t4))
                                                                      break v;
                                                                    break b;
                                                                  }
                                                                  s3 = k3[c3 + 64 >> 2], u3 = k3[c3 + 68 >> 2], R3 = 1024;
                                                                  break w;
                                                                }
                                                                t4 = 0;
                                                                E:
                                                                  switch (255 & S3) {
                                                                    case 0:
                                                                    case 1:
                                                                    case 6:
                                                                      k3[k3[c3 + 64 >> 2] >> 2] = w3;
                                                                      continue n;
                                                                    case 2:
                                                                      s3 = k3[c3 + 64 >> 2], k3[s3 >> 2] = w3, k3[s3 + 4 >> 2] = w3 >> 31;
                                                                      continue n;
                                                                    case 3:
                                                                      o4[k3[c3 + 64 >> 2] >> 1] = w3;
                                                                      continue n;
                                                                    case 4:
                                                                      b4[k3[c3 + 64 >> 2]] = w3;
                                                                      continue n;
                                                                    case 7:
                                                                      break E;
                                                                    default:
                                                                      continue n;
                                                                  }
                                                                s3 = k3[c3 + 64 >> 2], k3[s3 >> 2] = w3, k3[s3 + 4 >> 2] = w3 >> 31;
                                                                continue n;
                                                              }
                                                              A3 = A3 >>> 0 <= 8 ? 8 : A3, d3 |= 8, t4 = 120;
                                                            }
                                                            if (e5 = E3, (s3 = k3[c3 + 64 >> 2]) | (u3 = k3[c3 + 68 >> 2]))
                                                              for (F3 = 32 & t4; b4[0 | (e5 = e5 - 1 | 0)] = F3 | v3[1600 + (15 & s3) | 0], S3 = !u3 & s3 >>> 0 > 15 | 0 != (0 | u3), h3 = u3, u3 = u3 >>> 4 | 0, s3 = (15 & h3) << 28 | s3 >>> 4, S3; )
                                                                ;
                                                            if (s3 = e5, !(k3[c3 + 64 >> 2] | k3[c3 + 68 >> 2]) | !(8 & d3))
                                                              break h;
                                                            R3 = 1024 + (t4 >>> 4 | 0) | 0, m3 = 2;
                                                            break h;
                                                          }
                                                          if (e5 = E3, u3 = t4 = k3[c3 + 68 >> 2], t4 | (s3 = k3[c3 + 64 >> 2]))
                                                            for (; b4[0 | (e5 = e5 - 1 | 0)] = 7 & s3 | 48, h3 = !u3 & s3 >>> 0 > 7 | 0 != (0 | u3), u3 = (t4 = u3) >>> 3 | 0, s3 = (7 & t4) << 29 | s3 >>> 3, h3; )
                                                              ;
                                                          if (s3 = e5, !(8 & d3))
                                                            break h;
                                                          A3 = (0 | (e5 = E3 - e5 | 0)) < (0 | A3) ? A3 : e5 + 1 | 0;
                                                          break h;
                                                        }
                                                        s3 = k3[c3 + 64 >> 2], u3 = e5 = k3[c3 + 68 >> 2], (0 | e5) < 0 ? (u3 = t4 = 0 - (e5 + (0 != (0 | s3)) | 0) | 0, s3 = 0 - s3 | 0, k3[c3 + 64 >> 2] = s3, k3[c3 + 68 >> 2] = t4, m3 = 1, R3 = 1024) : 2048 & d3 ? (m3 = 1, R3 = 1025) : R3 = (m3 = 1 & d3) ? 1026 : 1024;
                                                      }
                                                      s3 = Ur(s3, u3, E3);
                                                    }
                                                    if ((0 | A3) < 0 & I3)
                                                      break i;
                                                    if (d3 = I3 ? -65537 & d3 : d3, !(A3 | 0 != ((e5 = k3[c3 + 64 >> 2]) | (t4 = k3[c3 + 68 >> 2])))) {
                                                      s3 = E3, A3 = 0;
                                                      break b;
                                                    }
                                                    A3 = (0 | (e5 = !(e5 | t4) + (E3 - s3 | 0) | 0)) < (0 | A3) ? A3 : e5;
                                                    break b;
                                                  }
                                                  h3 = l3 = A3 >>> 0 >= 2147483647 ? 2147483647 : A3, d3 = 0 != (0 | l3);
                                                  d: {
                                                    h: {
                                                      w: {
                                                        y:
                                                          if (!(!(3 & (e5 = s3 = (e5 = k3[c3 + 64 >> 2]) || 1071)) | !l3))
                                                            for (; ; ) {
                                                              if (!v3[0 | e5])
                                                                break w;
                                                              if (d3 = 0 != (0 | (h3 = h3 - 1 | 0)), !(3 & (e5 = e5 + 1 | 0)))
                                                                break y;
                                                              if (!h3)
                                                                break;
                                                            }
                                                        if (!d3)
                                                          break h;
                                                        if (!(!v3[0 | e5] | h3 >>> 0 < 4))
                                                          for (; ; ) {
                                                            if ((-1 ^ (t4 = k3[e5 >> 2])) & t4 - 16843009 & -2139062144)
                                                              break w;
                                                            if (e5 = e5 + 4 | 0, !((h3 = h3 - 4 | 0) >>> 0 > 3))
                                                              break;
                                                          }
                                                        if (!h3)
                                                          break h;
                                                      }
                                                      for (; ; ) {
                                                        if (!v3[0 | e5])
                                                          break d;
                                                        if (e5 = e5 + 1 | 0, !(h3 = h3 - 1 | 0))
                                                          break;
                                                      }
                                                    }
                                                    e5 = 0;
                                                  }
                                                  if (l3 = (e5 = e5 ? e5 - s3 | 0 : l3) + s3 | 0, (0 | A3) >= 0) {
                                                    d3 = u3, A3 = e5;
                                                    break b;
                                                  }
                                                  if (d3 = u3, A3 = e5, v3[0 | l3])
                                                    break i;
                                                  break b;
                                                }
                                                if (A3) {
                                                  u3 = k3[c3 + 64 >> 2];
                                                  break A;
                                                }
                                                t4 = 0, xr(r5, 32, g3, 0, d3);
                                                break s;
                                              }
                                              k3[c3 + 12 >> 2] = 0, k3[c3 + 8 >> 2] = k3[c3 + 64 >> 2], u3 = c3 + 8 | 0, k3[c3 + 64 >> 2] = u3, A3 = -1;
                                            }
                                            for (t4 = 0; ; ) {
                                              if (s3 = k3[u3 >> 2]) {
                                                if ((0 | (s3 = gr2(c3 + 4 | 0, s3))) < 0)
                                                  break e;
                                                if (!(s3 >>> 0 > A3 - t4 >>> 0) && (u3 = u3 + 4 | 0, A3 >>> 0 > (t4 = t4 + s3 | 0) >>> 0))
                                                  continue;
                                              }
                                              break;
                                            }
                                            if (l3 = 61, (0 | t4) < 0)
                                              break f;
                                            if (xr(r5, 32, g3, t4, d3), t4)
                                              for (l3 = 0, u3 = k3[c3 + 64 >> 2]; ; ) {
                                                if (!(s3 = k3[u3 >> 2]))
                                                  break s;
                                                if ((l3 = (s3 = gr2(A3 = c3 + 4 | 0, s3)) + l3 | 0) >>> 0 > t4 >>> 0)
                                                  break s;
                                                if (Ir(r5, A3, s3), u3 = u3 + 4 | 0, !(t4 >>> 0 > l3 >>> 0))
                                                  break;
                                              }
                                            else
                                              t4 = 0;
                                          }
                                          xr(r5, 32, g3, t4, 8192 ^ d3), t4 = (0 | t4) < (0 | g3) ? g3 : t4;
                                          continue n;
                                        }
                                        if ((0 | A3) < 0 & I3)
                                          break i;
                                        if (l3 = 61, (0 | (t4 = 0 | ke[0 | n5](r5, y2[c3 + 64 >> 3], g3, A3, d3, t4))) >= 0)
                                          continue n;
                                        break f;
                                      }
                                      b4[c3 + 55 | 0] = k3[c3 + 64 >> 2], A3 = 1, s3 = U3, d3 = u3;
                                      break b;
                                    }
                                    u3 = v3[t4 + 1 | 0], t4 = t4 + 1 | 0;
                                  }
                                if (r5)
                                  break r;
                                if (!C3)
                                  break t;
                                for (t4 = 1; ; ) {
                                  if (r5 = k3[(t4 << 2) + a5 >> 2]) {
                                    if (Ar2((t4 << 3) + i4 | 0, r5, f4), w3 = 1, 10 != (0 | (t4 = t4 + 1 | 0)))
                                      continue;
                                    break r;
                                  }
                                  break;
                                }
                                if (w3 = 1, t4 >>> 0 >= 10)
                                  break r;
                                for (; ; ) {
                                  if (k3[(t4 << 2) + a5 >> 2])
                                    break o;
                                  if (10 == (0 | (t4 = t4 + 1 | 0)))
                                    break;
                                }
                                break r;
                              }
                              l3 = 28;
                              break f;
                            }
                            if ((0 | (e5 = (0 | (u3 = l3 - s3 | 0)) < (0 | A3) ? A3 : u3)) > (2147483647 ^ m3))
                              break i;
                            if (l3 = 61, (0 | _3) < (0 | (t4 = (0 | (A3 = e5 + m3 | 0)) < (0 | g3) ? g3 : A3)))
                              break f;
                            xr(r5, 32, t4, A3, d3), Ir(r5, R3, m3), xr(r5, 48, t4, A3, 65536 ^ d3), xr(r5, 48, e5, u3, 0), Ir(r5, s3, u3), xr(r5, 32, t4, A3, 8192 ^ d3), e5 = k3[c3 + 76 >> 2];
                            continue;
                          }
                          break;
                        }
                      break;
                    }
                  w3 = 0;
                  break r;
                }
                l3 = 61;
              }
              k3[806] = l3;
            }
            w3 = -1;
          }
          return B2 = c3 + 80 | 0, w3;
        }
        function O2(r5) {
          r5 |= 0;
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = m2(0), s3 = 0, A3 = m2(0), v4 = 0, d3 = 0, h3 = 0, y3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0, I3 = 0;
          B2 = t4 = B2 - 48 | 0, b4[r5 + 60 | 0] = 0;
          r: {
            if (e5 = k3[r5 + 8 >> 2], (0 | (f4 = k3[e5 + 64 >> 2])) != (0 | (u3 = e5 - -64 | 0)))
              for (; ; ) {
                e5 = k3[f4 + 12 >> 2], i4 = k3[f4 >> 2], n5 = k3[f4 + 16 >> 2], a5 = k3[k3[f4 + 4 >> 2] + 16 >> 2];
                e: {
                  if (!(w2[n5 + 28 >> 2] != w2[a5 + 28 >> 2] | w2[n5 + 32 >> 2] != w2[a5 + 32 >> 2] | k3[e5 + 12 >> 2] == (0 | f4))) {
                    if (yr2(r5, e5, f4), $2(f4)) {
                      a5 = k3[e5 + 12 >> 2];
                      break e;
                    }
                    break r;
                  }
                  a5 = e5, e5 = f4;
                }
                if (k3[a5 + 12 >> 2] == (0 | e5)) {
                  if ((0 | e5) != (0 | a5) && (i4 = (0 | i4) != (0 | a5) & k3[i4 + 4 >> 2] != (0 | a5) ? i4 : k3[i4 >> 2], !$2(a5)))
                    break r;
                  if (f4 = (0 | e5) == (0 | i4) | k3[i4 + 4 >> 2] == (0 | e5) ? k3[i4 >> 2] : i4, !$2(e5))
                    break r;
                } else
                  f4 = i4;
                if ((0 | f4) == (0 | u3))
                  break;
              }
            (f4 = T2(28)) ? ((e5 = T2(28)) ? (k3[e5 + 8 >> 2] = 0, k3[e5 + 12 >> 2] = 32, a5 = T2(132), k3[e5 >> 2] = a5, a5 ? (i4 = T2(264), k3[e5 + 4 >> 2] = i4, i4 ? (k3[e5 + 24 >> 2] = 8, k3[e5 + 16 >> 2] = 0, k3[e5 + 20 >> 2] = 0, k3[a5 + 4 >> 2] = 1, k3[i4 + 8 >> 2] = 0) : (Y2(a5), Y2(e5), e5 = 0)) : (Y2(e5), e5 = 0)) : e5 = 0, k3[f4 >> 2] = e5, e5 ? (i4 = T2(128), k3[f4 + 4 >> 2] = i4, i4 ? (k3[f4 + 24 >> 2] = 8, k3[f4 + 20 >> 2] = 0, k3[f4 + 12 >> 2] = 0, k3[f4 + 16 >> 2] = 32) : (Y2(k3[e5 + 4 >> 2]), Y2(k3[e5 >> 2]), Y2(e5), Y2(f4), f4 = 0)) : (Y2(f4), f4 = 0)) : f4 = 0, d3 = f4, k3[r5 + 68 >> 2] = d3;
            e:
              if (d3) {
                f4 = i4 = k3[r5 + 8 >> 2];
                f: {
                  i: {
                    for (; ; ) {
                      if ((0 | i4) != (0 | (f4 = k3[f4 >> 2]))) {
                        if (e5 = ar2(d3, f4), k3[f4 + 36 >> 2] = e5, 2147483647 != (0 | e5))
                          continue;
                        break i;
                      }
                      break;
                    }
                    if (B2 = E3 = B2 - 400 | 0, i4 = T2(4 + (e5 = (C3 = k3[d3 + 12 >> 2]) << 2) | 0), k3[d3 + 8 >> 2] = i4, B2 = E3 + 400 | 0, i4) {
                      if ((a5 = (e5 + i4 | 0) - 4 | 0) >>> 0 >= i4 >>> 0)
                        for (e5 = k3[d3 + 4 >> 2], f4 = i4; k3[f4 >> 2] = e5, e5 = e5 + 4 | 0, a5 >>> 0 >= (f4 = f4 + 4 | 0) >>> 0; )
                          ;
                      for (k3[E3 + 4 >> 2] = a5, k3[E3 >> 2] = i4, v4 = 8 | E3, R3 = 2016473283, n5 = E3; ; ) {
                        if ((u3 = k3[v4 - 4 >> 2]) >>> 0 > (o5 = k3[n5 >> 2]) + 40 >>> 0)
                          for (; ; ) {
                            for (R3 = p2(R3, 1539415821) + 1 | 0, y3 = k3[(e5 = ((R3 >>> 0) % (1 + (u3 - o5 >> 2) >>> 0) << 2) + o5 | 0) >> 2], k3[e5 >> 2] = k3[o5 >> 2], k3[o5 >> 2] = y3, e5 = u3 + 4 | 0, f4 = o5 - 4 | 0; ; ) {
                              i4 = e5, a5 = f4, f4 = f4 + 4 | 0, s3 = k3[a5 + 4 >> 2], g3 = k3[s3 >> 2], c3 = w2[g3 + 28 >> 2], h3 = k3[y3 >> 2];
                              a:
                                if (!(c3 < (A3 = w2[h3 + 28 >> 2])))
                                  for (; ; ) {
                                    if (e5 = f4, !(!(w2[g3 + 32 >> 2] <= w2[h3 + 32 >> 2]) | c3 != A3))
                                      break a;
                                    if (f4 = e5 + 4 | 0, a5 = e5, s3 = k3[e5 + 4 >> 2], g3 = k3[s3 >> 2], A3 > (c3 = w2[g3 + 28 >> 2]))
                                      break;
                                  }
                              v4 = k3[(e5 = i4 - 4 | 0) >> 2], g3 = k3[v4 >> 2];
                              a:
                                if (!(A3 < (c3 = w2[g3 + 28 >> 2])))
                                  for (; ; ) {
                                    if (!(!(w2[h3 + 32 >> 2] <= w2[g3 + 32 >> 2]) | c3 != A3))
                                      break a;
                                    if (i4 = e5, v4 = k3[(e5 = e5 - 4 | 0) >> 2], g3 = k3[v4 >> 2], A3 < (c3 = w2[g3 + 28 >> 2]))
                                      break;
                                  }
                              if (k3[f4 >> 2] = v4, k3[e5 >> 2] = s3, !(e5 >>> 0 > f4 >>> 0))
                                break;
                            }
                            if (v4 = k3[f4 >> 2], k3[f4 >> 2] = s3, k3[e5 >> 2] = v4, (f4 - o5 | 0) < (u3 - e5 | 0) ? (e5 = i4, f4 = u3, u3 = a5) : (e5 = o5, f4 = a5, o5 = i4), k3[n5 + 4 >> 2] = f4, k3[n5 >> 2] = e5, n5 = n5 + 8 | 0, !(o5 + 40 >>> 0 < u3 >>> 0))
                              break;
                          }
                        if (v4 = n5, (s3 = o5 + 4 | 0) >>> 0 <= u3 >>> 0)
                          for (; ; ) {
                            h3 = k3[s3 >> 2];
                            a:
                              if (!(o5 >>> 0 >= (e5 = f4 = s3) >>> 0))
                                for (; ; ) {
                                  if (n5 = k3[h3 >> 2], c3 = w2[n5 + 28 >> 2], a5 = k3[(e5 = f4 - 4 | 0) >> 2], i4 = k3[a5 >> 2], c3 < (A3 = w2[i4 + 28 >> 2])) {
                                    e5 = f4;
                                    break a;
                                  }
                                  if (!(!(w2[n5 + 32 >> 2] <= w2[i4 + 32 >> 2]) | c3 != A3)) {
                                    e5 = f4;
                                    break a;
                                  }
                                  if (k3[f4 >> 2] = a5, f4 = e5, !(o5 >>> 0 < e5 >>> 0))
                                    break;
                                }
                            if (k3[e5 >> 2] = h3, !((s3 = s3 + 4 | 0) >>> 0 <= u3 >>> 0))
                              break;
                          }
                        if (!(E3 >>> 0 <= (n5 = v4 - 8 | 0) >>> 0))
                          break;
                      }
                      if (k3[d3 + 20 >> 2] = 1, k3[d3 + 16 >> 2] = C3, C3 = k3[d3 >> 2], (0 | (n5 = k3[C3 + 8 >> 2])) > 0)
                        for (h3 = k3[C3 + 4 >> 2], y3 = k3[C3 >> 2], e5 = n5; ; ) {
                          for (a5 = e5, d3 = h3 + ((s3 = k3[y3 + (e5 << 2) >> 2]) << 3) | 0, f4 = e5; (0 | n5) <= (0 | (e5 = f4 << 1)) || (o5 = k3[h3 + (k3[y3 + ((i4 = 1 | e5) << 2) >> 2] << 3) >> 2], c3 = w2[o5 + 28 >> 2], u3 = k3[h3 + (k3[y3 + (e5 << 2) >> 2] << 3) >> 2], !(c3 < (A3 = w2[u3 + 28 >> 2])) & (!(w2[o5 + 32 >> 2] <= w2[u3 + 32 >> 2]) | c3 != A3) || (e5 = i4)), !((0 | e5) > (0 | n5) || (v4 = k3[d3 >> 2], c3 = w2[v4 + 28 >> 2], o5 = k3[y3 + (e5 << 2) >> 2], i4 = k3[(u3 = h3 + (o5 << 3) | 0) >> 2], c3 < (A3 = w2[i4 + 28 >> 2]) | c3 == A3 & w2[v4 + 32 >> 2] <= w2[i4 + 32 >> 2])); )
                            k3[y3 + (f4 << 2) >> 2] = o5, k3[u3 + 4 >> 2] = f4, f4 = e5;
                          if (k3[y3 + (f4 << 2) >> 2] = s3, k3[d3 + 4 >> 2] = f4, e5 = a5 - 1 | 0, !((0 | a5) > 1))
                            break;
                        }
                      k3[C3 + 20 >> 2] = 1, f4 = 1;
                    } else
                      f4 = 0;
                    if (f4)
                      break f;
                  }
                  Yr(k3[r5 + 68 >> 2]), k3[r5 + 68 >> 2] = 0;
                  break e;
                }
                if ((e5 = T2(20)) && (k3[e5 + 16 >> 2] = 9, k3[e5 + 12 >> 2] = r5, k3[e5 >> 2] = 0, k3[e5 + 8 >> 2] = e5, k3[e5 + 4 >> 2] = e5), k3[r5 + 64 >> 2] = e5, !e5)
                  break r;
                if (Sr(r5, m2(-3999999973526325e22)), Sr(r5, m2(3999999973526325e22)), e5 = Cr(k3[r5 + 68 >> 2]))
                  for (; ; ) {
                    f:
                      if (f4 = Pr(k3[r5 + 68 >> 2]))
                        for (; ; ) {
                          if (w2[f4 + 28 >> 2] != w2[e5 + 28 >> 2] | w2[f4 + 32 >> 2] != w2[e5 + 32 >> 2])
                            break f;
                          if (a5 = k3[Cr(k3[r5 + 68 >> 2]) + 8 >> 2], i4 = k3[e5 + 8 >> 2], k3[t4 + 24 >> 2] = 0, k3[t4 + 28 >> 2] = 0, k3[t4 + 16 >> 2] = 0, k3[t4 + 20 >> 2] = 0, k3[t4 + 8 >> 2] = 0, k3[t4 + 12 >> 2] = 0, k3[t4 >> 2] = 1056964608, k3[t4 + 4 >> 2] = 1056964608, f4 = k3[i4 + 16 >> 2], k3[t4 + 16 >> 2] = k3[f4 + 12 >> 2], k3[t4 + 20 >> 2] = k3[k3[a5 + 16 >> 2] + 12 >> 2], w2[t4 + 36 >> 2] = w2[f4 + 16 >> 2], w2[t4 + 40 >> 2] = w2[f4 + 20 >> 2], w2[t4 + 44 >> 2] = w2[f4 + 24 >> 2], k3[f4 + 12 >> 2] = 0, n5 = f4 + 12 | 0, 10 == (0 | (f4 = k3[r5 + 1736 >> 2])) ? ke[k3[r5 + 76 >> 2]](t4 + 36 | 0, t4 + 16 | 0, t4, n5) : ke[0 | f4](t4 + 36 | 0, t4 + 16 | 0, t4, n5, k3[r5 + 1896 >> 2]), k3[n5 >> 2] || (k3[n5 >> 2] = k3[t4 + 16 >> 2]), !ir2(i4, a5))
                            break r;
                          if (!(f4 = Pr(k3[r5 + 68 >> 2])))
                            break;
                        }
                    if (D2(r5, e5), !(e5 = Cr(k3[r5 + 68 >> 2])))
                      break;
                  }
                for (f4 = k3[k3[k3[r5 + 64 >> 2] + 4 >> 2] >> 2], k3[r5 + 72 >> 2] = k3[k3[f4 >> 2] + 16 >> 2]; k3[k3[f4 >> 2] + 24 >> 2] = 0, Nr(k3[f4 + 4 >> 2]), Y2(f4), e5 = k3[r5 + 64 >> 2], f4 = k3[k3[e5 + 4 >> 2] >> 2]; )
                  ;
                if ((0 | e5) != (0 | (f4 = k3[e5 + 4 >> 2])))
                  for (; Y2(f4), (0 | e5) != (0 | (f4 = k3[f4 + 4 >> 2])); )
                    ;
                if (Y2(e5), Yr(k3[r5 + 68 >> 2]), I3 = 1, e5 = k3[r5 + 8 >> 2], (0 | (r5 = k3[e5 + 40 >> 2])) != (0 | (f4 = e5 + 40 | 0)))
                  for (; ; ) {
                    if (i4 = k3[r5 + 8 >> 2], r5 = k3[r5 >> 2], (0 | i4) == k3[k3[i4 + 12 >> 2] + 12 >> 2] && (e5 = k3[i4 + 8 >> 2], k3[e5 + 28 >> 2] = k3[e5 + 28 >> 2] + k3[i4 + 28 >> 2], e5 = k3[e5 + 4 >> 2], k3[e5 + 28 >> 2] = k3[e5 + 28 >> 2] + k3[k3[i4 + 4 >> 2] + 28 >> 2], !$2(i4))) {
                      I3 = 0;
                      break e;
                    }
                    if ((0 | r5) == (0 | f4))
                      break;
                  }
              }
            return B2 = t4 + 48 | 0, 0 | I3;
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function D2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = m2(0), o5 = 0, u3 = 0, c3 = m2(0), s3 = 0, A3 = 0, d3 = 0;
          B2 = d3 = B2 - 16 | 0, k3[r5 + 72 >> 2] = e5, f4 = a5 = k3[e5 + 8 >> 2];
          r: {
            e: {
              f: {
                for (; ; ) {
                  if (i4 = k3[f4 + 24 >> 2])
                    break f;
                  if ((0 | a5) == (0 | (f4 = k3[f4 + 8 >> 2])))
                    break;
                }
                for (k3[d3 >> 2] = k3[a5 + 4 >> 2], a5 = f4 = k3[r5 + 64 >> 2]; a5 = k3[a5 + 4 >> 2], (i4 = k3[a5 >> 2]) && !(0 | ke[k3[f4 + 16 >> 2]](k3[f4 + 12 >> 2], d3, i4)); )
                  ;
                if (i4 = k3[a5 >> 2], a5 = k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2], o5 = k3[a5 >> 2], n5 = k3[i4 >> 2], dr2(k3[k3[n5 + 4 >> 2] + 16 >> 2], e5, k3[n5 + 16 >> 2]) == m2(0)) {
                  if (t4 = w2[e5 + 28 >> 2], f4 = k3[i4 >> 2], a5 = k3[f4 + 16 >> 2], !(t4 != w2[a5 + 28 >> 2] | w2[a5 + 32 >> 2] != w2[e5 + 32 >> 2])) {
                    yr2(r5, f4, k3[e5 + 8 >> 2]);
                    break e;
                  }
                  if (n5 = k3[f4 + 4 >> 2], a5 = k3[n5 + 16 >> 2], !(t4 == w2[a5 + 28 >> 2] & w2[a5 + 32 >> 2] == w2[e5 + 32 >> 2])) {
                    if (!er2(n5))
                      break r;
                    if (v3[i4 + 15 | 0]) {
                      if (!$2(k3[f4 + 8 >> 2]))
                        break r;
                      b4[i4 + 15 | 0] = 0;
                    }
                    if (!ir2(k3[e5 + 8 >> 2], f4))
                      break r;
                    D2(r5, e5);
                    break e;
                  }
                  for (; i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2], (0 | a5) == k3[k3[k3[i4 >> 2] + 4 >> 2] + 16 >> 2]; )
                    ;
                  if (a5 = k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2], o5 = k3[a5 >> 2], n5 = k3[o5 + 4 >> 2], f4 = k3[n5 + 8 >> 2], v3[a5 + 15 | 0]) {
                    if (k3[o5 + 24 >> 2] = 0, Nr(k3[a5 + 4 >> 2]), Y2(a5), !$2(n5))
                      break r;
                    n5 = k3[k3[f4 + 4 >> 2] + 12 >> 2];
                  }
                  if (!ir2(k3[e5 + 8 >> 2], n5))
                    break r;
                  u3 = k3[n5 + 8 >> 2], a5 = k3[k3[f4 + 4 >> 2] + 16 >> 2], t4 = w2[a5 + 28 >> 2], o5 = k3[f4 + 16 >> 2], q2(r5, i4, u3, f4, e5 = t4 < (c3 = w2[o5 + 28 >> 2]) | t4 == c3 & w2[a5 + 32 >> 2] <= w2[o5 + 32 >> 2] ? f4 : 0, 1);
                  break e;
                }
                if (u3 = v3[i4 + 12 | 0], o5 = k3[o5 + 4 >> 2], s3 = k3[o5 + 16 >> 2], t4 = w2[s3 + 28 >> 2], A3 = k3[k3[n5 + 4 >> 2] + 16 >> 2], f4 = i4, t4 < (c3 = w2[A3 + 28 >> 2]) || t4 == c3 && (f4 = i4, w2[s3 + 32 >> 2] <= w2[A3 + 32 >> 2]) || (f4 = a5), u3 | v3[f4 + 15 | 0]) {
                  i: {
                    if ((0 | i4) == (0 | f4)) {
                      if (a5 = X2(k3[k3[e5 + 8 >> 2] + 4 >> 2], k3[n5 + 12 >> 2]))
                        break i;
                      break r;
                    }
                    if (!(a5 = X2(k3[k3[o5 + 8 >> 2] + 4 >> 2], k3[e5 + 8 >> 2])))
                      break r;
                    a5 = k3[a5 + 4 >> 2];
                  }
                  if (v3[f4 + 15 | 0]) {
                    if ($2(k3[f4 >> 2])) {
                      k3[f4 >> 2] = a5, b4[f4 + 15 | 0] = 0, k3[a5 + 24 >> 2] = f4, D2(r5, e5);
                      break e;
                    }
                    break r;
                  }
                  if (!(f4 = T2(16)))
                    break r;
                  if (k3[f4 >> 2] = a5, i4 = Wr(k3[r5 + 64 >> 2], k3[i4 + 4 >> 2], f4), k3[f4 + 4 >> 2] = i4, !i4)
                    break r;
                  b4[f4 + 13 | 0] = 0, b4[f4 + 14 | 0] = 0, b4[f4 + 15 | 0] = 0, k3[a5 + 24 >> 2] = f4, n5 = k3[r5 + 56 >> 2], a5 = k3[k3[f4 >> 2] + 28 >> 2] + k3[k3[k3[i4 + 4 >> 2] >> 2] + 8 >> 2] | 0, k3[f4 + 8 >> 2] = a5;
                  i: {
                    a:
                      switch (n5 - 100130 | 0) {
                        case 0:
                          i4 = 1 & a5;
                          break i;
                        case 1:
                          i4 = 0 != (0 | a5);
                          break i;
                        case 2:
                          i4 = (0 | a5) > 0;
                          break i;
                        case 3:
                          i4 = a5 >>> 31 | 0;
                          break i;
                        case 4:
                          break a;
                        default:
                          break i;
                      }
                    i4 = a5 - 2 >>> 0 < 4294967293;
                  }
                  b4[f4 + 12 | 0] = i4, D2(r5, e5);
                  break e;
                }
                q2(f4 = r5, i4, r5 = k3[e5 + 8 >> 2], r5, 0, 1);
                break e;
              }
              for (e5 = k3[k3[i4 >> 2] + 16 >> 2]; i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2], f4 = k3[i4 >> 2], (0 | e5) == k3[f4 + 16 >> 2]; )
                ;
              if (v3[i4 + 15 | 0]) {
                if (!(e5 = X2(k3[k3[k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], k3[f4 + 12 >> 2])))
                  break r;
                if (!$2(k3[i4 >> 2]))
                  break r;
                if (k3[i4 >> 2] = e5, b4[i4 + 15 | 0] = 0, k3[e5 + 24 >> 2] = i4, !(i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2]))
                  break r;
              }
              if (e5 = k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2], f4 = k3[e5 >> 2], e5 = wr2(r5, e5, 0), (0 | f4) != (0 | (a5 = k3[e5 + 8 >> 2])))
                q2(r5, i4, a5, f4, f4, 1);
              else {
                if (a5 = k3[i4 >> 2], s3 = k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2], o5 = k3[s3 >> 2], k3[k3[a5 + 4 >> 2] + 16 >> 2] != k3[k3[o5 + 4 >> 2] + 16 >> 2] && H2(r5, i4), A3 = 1, n5 = k3[r5 + 72 >> 2], t4 = w2[n5 + 28 >> 2], u3 = k3[a5 + 16 >> 2], !(t4 != w2[u3 + 28 >> 2] | w2[u3 + 32 >> 2] != w2[n5 + 32 >> 2])) {
                  if (!ir2(k3[k3[f4 + 4 >> 2] + 12 >> 2], a5))
                    break r;
                  for (f4 = k3[k3[i4 >> 2] + 16 >> 2]; i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2], n5 = k3[i4 >> 2], (0 | f4) == k3[n5 + 16 >> 2]; )
                    ;
                  if (v3[i4 + 15 | 0]) {
                    if (!(f4 = X2(k3[k3[k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2] >> 2] + 4 >> 2], k3[n5 + 12 >> 2])))
                      break r;
                    if (!$2(k3[i4 >> 2]))
                      break r;
                    if (k3[i4 >> 2] = f4, b4[i4 + 15 | 0] = 0, k3[f4 + 24 >> 2] = i4, !(i4 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2]))
                      break r;
                  }
                  n5 = k3[k3[k3[i4 + 4 >> 2] + 8 >> 2] >> 2], f4 = k3[n5 >> 2], wr2(r5, n5, s3), n5 = k3[r5 + 72 >> 2], t4 = w2[n5 + 28 >> 2], A3 = 0;
                }
                f: {
                  if (c3 = t4, u3 = k3[o5 + 16 >> 2], c3 != (t4 = w2[u3 + 28 >> 2]) | w2[u3 + 32 >> 2] != w2[n5 + 32 >> 2]) {
                    if (A3)
                      break f;
                  } else {
                    if (!ir2(e5, k3[k3[o5 + 4 >> 2] + 12 >> 2]))
                      break r;
                    e5 = wr2(r5, s3, 0);
                  }
                  q2(r5, i4, k3[e5 + 8 >> 2], f4, f4, 1);
                  break e;
                }
                if (f4 = k3[a5 + 16 >> 2], !((c3 = w2[f4 + 28 >> 2]) > t4) & (!(w2[u3 + 32 >> 2] <= w2[f4 + 32 >> 2]) | t4 != c3) || (a5 = k3[k3[o5 + 4 >> 2] + 12 >> 2]), !(e5 = X2(k3[k3[e5 + 8 >> 2] + 4 >> 2], a5)))
                  break r;
                q2(r5, i4, e5, f4 = k3[e5 + 8 >> 2], f4, 0), b4[k3[k3[e5 + 4 >> 2] + 24 >> 2] + 15 | 0] = 1, z2(r5, i4);
              }
            }
            return void (B2 = d3 + 16 | 0);
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function G2(r5) {
          r5 |= 0;
          var e5 = 0, f4 = 0, i4 = 0, a5 = m2(0), n5 = m2(0), t4 = 0, b5 = 0, o5 = m2(0), u3 = 0, c3 = m2(0), s3 = m2(0), A3 = 0, l3 = 0, v4 = m2(0), d3 = m2(0), h3 = m2(0), y3 = m2(0), p3 = m2(0), g3 = m2(0), E3 = m2(0), C3 = m2(0), R3 = m2(0), I3 = m2(0), S3 = m2(0), M3 = 0, P3 = 0, _3 = 0, U3 = 0, F3 = 0, Q3 = 0, T3 = 0, H3 = 0, W3 = m2(0);
          l3 = k3[r5 + 8 >> 2], e5 = B2 - 80 | 0, y3 = w2[r5 + 16 >> 2], w2[e5 + 8 >> 2] = y3, p3 = w2[r5 + 20 >> 2], w2[e5 + 12 >> 2] = p3, g3 = w2[r5 + 24 >> 2], w2[e5 + 16 >> 2] = g3, u3 = k3[l3 >> 2];
          r:
            if (P3 = y3 == m2(0) & p3 == m2(0) & g3 == m2(0)) {
              if (k3[e5 + 76 >> 2] = -42943038, k3[e5 + 68 >> 2] = -42943038, k3[e5 + 72 >> 2] = -42943038, k3[e5 + 64 >> 2] = 2104540610, k3[e5 + 56 >> 2] = 2104540610, k3[e5 + 60 >> 2] = 2104540610, (0 | l3) != (0 | u3)) {
                for (h3 = m2(19999999867631625e21), R3 = m2(-19999999867631625e21), E3 = m2(-19999999867631625e21), C3 = m2(19999999867631625e21), I3 = m2(-19999999867631625e21), S3 = m2(19999999867631625e21), c3 = m2(-19999999867631625e21), o5 = m2(19999999867631625e21), v4 = m2(-19999999867631625e21), n5 = m2(19999999867631625e21), s3 = m2(-19999999867631625e21), d3 = m2(19999999867631625e21), f4 = u3; c3 = (i4 = (a5 = w2[f4 + 24 >> 2]) > c3) ? a5 : c3, R3 = i4 ? a5 : R3, o5 = (A3 = a5 < o5) ? a5 : o5, h3 = A3 ? a5 : h3, v4 = (b5 = (a5 = w2[f4 + 20 >> 2]) > v4) ? a5 : v4, E3 = b5 ? a5 : E3, n5 = (M3 = n5 > a5) ? a5 : n5, C3 = M3 ? a5 : C3, s3 = (t4 = (a5 = w2[f4 + 16 >> 2]) > s3) ? a5 : s3, I3 = t4 ? a5 : I3, _3 = t4 ? f4 : _3, d3 = (t4 = a5 < d3) ? a5 : d3, S3 = t4 ? a5 : S3, U3 = t4 ? f4 : U3, F3 = i4 ? f4 : F3, Q3 = A3 ? f4 : Q3, T3 = b5 ? f4 : T3, H3 = M3 ? f4 : H3, (0 | l3) != (0 | (f4 = k3[f4 >> 2])); )
                  ;
                k3[e5 + 20 >> 2] = U3, w2[e5 + 56 >> 2] = S3, w2[e5 + 68 >> 2] = I3, k3[e5 + 32 >> 2] = _3, w2[e5 + 60 >> 2] = C3, k3[e5 + 24 >> 2] = H3, w2[e5 + 72 >> 2] = E3, k3[e5 + 36 >> 2] = T3, w2[e5 + 64 >> 2] = h3, k3[e5 + 28 >> 2] = Q3, w2[e5 + 76 >> 2] = R3, k3[e5 + 40 >> 2] = F3, o5 = m2(c3 - o5), c3 = m2(s3 - d3), n5 = m2(v4 - n5);
              } else
                c3 = m2(-3999999973526325e22), o5 = m2(-3999999973526325e22), n5 = m2(-3999999973526325e22);
              if (f4 = 2, i4 = (b5 = n5 > c3) << 2, A3 = b5, t4 = e5 + 56 | 0, A3 = m2(w2[(b5 = e5 + 68 | 0) + i4 >> 2] - w2[t4 + i4 >> 2]) < o5 ? 2 : A3, w2[(i4 = A3 << 2) + t4 >> 2] >= w2[i4 + b5 >> 2])
                k3[e5 + 8 >> 2] = 0, k3[e5 + 12 >> 2] = 0;
              else {
                if (f4 = k3[(i4 = A3 << 2) + (e5 + 20 | 0) >> 2], i4 = k3[i4 + (e5 + 32 | 0) >> 2], I3 = w2[i4 + 16 >> 2], h3 = m2(w2[f4 + 16 >> 2] - I3), w2[e5 + 44 >> 2] = h3, S3 = w2[i4 + 20 >> 2], s3 = m2(w2[f4 + 20 >> 2] - S3), w2[e5 + 48 >> 2] = s3, W3 = w2[i4 + 24 >> 2], d3 = m2(w2[f4 + 24 >> 2] - W3), R3 = m2(-h3), (0 | l3) != (0 | u3)) {
                  for (C3 = m2(-s3), E3 = m2(-d3), n5 = m2(0), f4 = u3; o5 = m2(w2[f4 + 20 >> 2] - S3), a5 = m2(w2[f4 + 16 >> 2] - I3), c3 = m2(m2(h3 * o5) + m2(a5 * C3)), v4 = m2(w2[f4 + 24 >> 2] - W3), o5 = m2(m2(s3 * v4) + m2(o5 * E3)), a5 = m2(m2(d3 * a5) + m2(v4 * R3)), (v4 = m2(m2(c3 * c3) + m2(m2(o5 * o5) + m2(a5 * a5)))) > n5 && (g3 = c3, p3 = a5, y3 = o5, n5 = v4), (0 | l3) != (0 | (f4 = k3[f4 >> 2])); )
                    ;
                  if (w2[e5 + 16 >> 2] = g3, w2[e5 + 12 >> 2] = p3, w2[e5 + 8 >> 2] = y3, !(n5 <= m2(0)))
                    break r;
                } else
                  E3 = m2(-d3), C3 = m2(-s3);
                k3[e5 + 16 >> 2] = 0, k3[e5 + 8 >> 2] = 0, k3[e5 + 12 >> 2] = 0, f4 = (s3 < m2(0) ? C3 : s3) > (h3 < m2(0) ? R3 : h3), n5 = w2[(e5 + 44 | 0) + (f4 << 2) >> 2], f4 = (d3 < m2(0) ? E3 : d3) > (n5 < m2(0) ? m2(-n5) : n5) ? 2 : f4;
              }
              k3[(e5 + 8 | 0) + (f4 << 2) >> 2] = 1065353216, g3 = w2[e5 + 16 >> 2], y3 = w2[e5 + 8 >> 2], p3 = w2[e5 + 12 >> 2];
            }
          if (b5 = e5 + 8 | 0, i4 = (p3 < m2(0) ? m2(-p3) : p3) > (y3 < m2(0) ? m2(-y3) : y3), n5 = w2[b5 + (i4 << 2) >> 2], f4 = r5 + 28 | 0, e5 = (g3 < m2(0) ? m2(-g3) : g3) > (n5 < m2(0) ? m2(-n5) : n5) ? 2 : i4, k3[f4 + (i4 = e5 << 2) >> 2] = 0, k3[(t4 = (3 != (0 | (t4 = e5 + 1 | 0)) ? t4 : 0) << 2) + f4 >> 2] = 1065353216, k3[(e5 = (e5 + 2 >>> 0) % 3 << 2) + f4 >> 2] = 0, k3[(f4 = r5 + 40 | 0) + i4 >> 2] = 0, i4 = w2[i4 + b5 >> 2] > m2(0), w2[f4 + t4 >> 2] = m2(i4 ? -0 : 0), w2[e5 + f4 >> 2] = m2(i4 ? 1 : -1), !(i4 = (0 | l3) == (0 | u3)))
            for (f4 = u3; e5 = k3[f4 + 20 >> 2], k3[f4 + 28 >> 2] = k3[f4 + 16 >> 2], k3[f4 + 32 >> 2] = e5, (0 | l3) != (0 | (f4 = k3[f4 >> 2])); )
              ;
          if (P3 && (0 | (e5 = k3[l3 + 40 >> 2])) != (0 | (b5 = l3 + 40 | 0))) {
            for (n5 = m2(0); ; ) {
              if (t4 = k3[e5 + 8 >> 2], k3[(f4 = t4) + 28 >> 2] > 0)
                for (; A3 = k3[f4 + 16 >> 2], M3 = k3[k3[f4 + 4 >> 2] + 16 >> 2], n5 = m2(m2(m2(w2[A3 + 28 >> 2] - w2[M3 + 28 >> 2]) * m2(w2[A3 + 32 >> 2] + w2[M3 + 32 >> 2])) + n5), (0 | t4) != (0 | (f4 = k3[f4 + 12 >> 2])); )
                  ;
              if ((0 | b5) == (0 | (e5 = k3[e5 >> 2])))
                break;
            }
            if (n5 < m2(0)) {
              if (!i4)
                for (; w2[u3 + 32 >> 2] = -w2[u3 + 32 >> 2], (0 | (u3 = k3[u3 >> 2])) != (0 | l3); )
                  ;
              w2[r5 + 40 >> 2] = -w2[r5 + 40 >> 2], w2[r5 + 44 >> 2] = -w2[r5 + 44 >> 2], w2[r5 + 48 >> 2] = -w2[r5 + 48 >> 2];
            }
          }
        }
        function L2(r5, e5) {
          e5 |= 0;
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l3 = 0, d3 = 0, h3 = 0, w3 = 0, y3 = 0, p3 = 0, m3 = 0, g3 = 0, E3 = 0;
          if (B2 = o5 = B2 - 16 | 0, k3[84 + (r5 |= 0) >> 2] = 0, !(f4 = (0 | (c3 = k3[e5 + 40 >> 2])) == (0 | (d3 = e5 + 40 | 0)))) {
            for (e5 = c3; b4[e5 + 20 | 0] = 0, (0 | d3) != (0 | (e5 = k3[e5 >> 2])); )
              ;
            if (!f4) {
              for (; ; ) {
                if (!(v3[c3 + 20 | 0] | !v3[c3 + 21 | 0])) {
                  if (t4 = k3[c3 + 8 >> 2], v3[r5 + 80 | 0])
                    e5 = 1, f4 = 1;
                  else {
                    n5 = 0, a5 = 0, e5 = 0, i4 = k3[(f4 = t4) + 20 >> 2];
                    r:
                      if (v3[i4 + 21 | 0])
                        for (; ; ) {
                          if (v3[(e5 = i4) + 20 | 0]) {
                            e5 = a5;
                            break r;
                          }
                          if (b4[e5 + 20 | 0] = 1, k3[e5 + 16 >> 2] = a5, n5 = n5 + 1 | 0, a5 = e5, f4 = k3[f4 + 8 >> 2], i4 = k3[f4 + 20 >> 2], !v3[i4 + 21 | 0])
                            break;
                        }
                    i4 = k3[t4 + 4 >> 2], a5 = k3[i4 + 20 >> 2];
                    r: {
                      e:
                        if (!v3[a5 + 21 | 0] | v3[a5 + 20 | 0]) {
                          if (h3 = t4, !e5)
                            break r;
                        } else
                          for (f4 = e5; ; ) {
                            if (b4[(e5 = a5) + 20 | 0] = 1, k3[e5 + 16 >> 2] = f4, n5 = n5 + 1 | 0, h3 = k3[i4 + 12 >> 2], i4 = k3[h3 + 4 >> 2], a5 = k3[i4 + 20 >> 2], !v3[a5 + 21 | 0])
                              break e;
                            if (f4 = e5, v3[a5 + 20 | 0])
                              break;
                          }
                      for (; b4[e5 + 20 | 0] = 0, e5 = k3[e5 + 16 >> 2]; )
                        ;
                    }
                    w3 = (0 | n5) > 1, a5 = 0, i4 = 0, e5 = 0, s3 = k3[t4 + 12 >> 2], f4 = k3[(u3 = s3) + 20 >> 2];
                    r:
                      if (v3[f4 + 21 | 0])
                        for (; ; ) {
                          if (v3[(e5 = f4) + 20 | 0]) {
                            e5 = i4;
                            break r;
                          }
                          if (b4[e5 + 20 | 0] = 1, k3[e5 + 16 >> 2] = i4, a5 = a5 + 1 | 0, i4 = e5, u3 = k3[u3 + 8 >> 2], f4 = k3[u3 + 20 >> 2], !v3[f4 + 21 | 0])
                            break;
                        }
                    A3 = w3 ? n5 : 1, i4 = k3[s3 + 4 >> 2], n5 = k3[i4 + 20 >> 2];
                    r: {
                      e:
                        if (!v3[n5 + 21 | 0] | v3[n5 + 20 | 0]) {
                          if (!e5)
                            break r;
                        } else
                          for (f4 = e5; ; ) {
                            if (b4[(e5 = n5) + 20 | 0] = 1, k3[e5 + 16 >> 2] = f4, a5 = a5 + 1 | 0, s3 = k3[i4 + 12 >> 2], i4 = k3[s3 + 4 >> 2], n5 = k3[i4 + 20 >> 2], !v3[n5 + 21 | 0])
                              break e;
                            if (f4 = e5, v3[n5 + 20 | 0])
                              break;
                          }
                      for (; b4[e5 + 20 | 0] = 0, e5 = k3[e5 + 16 >> 2]; )
                        ;
                    }
                    y3 = (0 | a5) > (0 | A3), n5 = 0, i4 = 0, e5 = 0, l3 = k3[k3[t4 + 8 >> 2] + 4 >> 2], f4 = k3[(u3 = l3) + 20 >> 2];
                    r:
                      if (v3[f4 + 21 | 0])
                        for (; ; ) {
                          if (v3[(e5 = f4) + 20 | 0]) {
                            e5 = i4;
                            break r;
                          }
                          if (b4[e5 + 20 | 0] = 1, k3[e5 + 16 >> 2] = i4, n5 = n5 + 1 | 0, i4 = e5, u3 = k3[u3 + 8 >> 2], f4 = k3[u3 + 20 >> 2], !v3[f4 + 21 | 0])
                            break;
                        }
                    u3 = y3 ? a5 : A3, i4 = k3[l3 + 4 >> 2], a5 = k3[i4 + 20 >> 2];
                    r: {
                      e:
                        if (!v3[a5 + 21 | 0] | v3[a5 + 20 | 0]) {
                          if (!e5)
                            break r;
                        } else
                          for (f4 = e5; ; ) {
                            if (b4[(e5 = a5) + 20 | 0] = 1, k3[e5 + 16 >> 2] = f4, n5 = n5 + 1 | 0, l3 = k3[i4 + 12 >> 2], i4 = k3[l3 + 4 >> 2], a5 = k3[i4 + 20 >> 2], !v3[a5 + 21 | 0])
                              break e;
                            if (f4 = e5, v3[a5 + 20 | 0])
                              break;
                          }
                      for (; b4[e5 + 20 | 0] = 0, e5 = k3[e5 + 16 >> 2]; )
                        ;
                    }
                    kr2(e5 = o5 + 4 | 0, t4), p3 = k3[o5 + 12 >> 2], m3 = k3[o5 + 8 >> 2], f4 = k3[o5 + 4 >> 2], kr2(e5, k3[t4 + 12 >> 2]), g3 = k3[o5 + 12 >> 2], E3 = k3[o5 + 8 >> 2], A3 = k3[o5 + 4 >> 2], kr2(e5, k3[k3[t4 + 8 >> 2] + 4 >> 2]), e5 = n5, (0 | (e5 = (a5 = (0 | (e5 = (i4 = (0 | (e5 = (n5 = (0 | n5) > (0 | u3)) ? e5 : u3)) < (0 | f4)) ? f4 : e5)) < (0 | A3)) ? A3 : e5)) >= (0 | (f4 = k3[o5 + 4 >> 2])) ? (t4 = a5 ? E3 : i4 ? m3 : n5 ? l3 : y3 ? s3 : w3 ? h3 : t4, f4 = a5 ? g3 : i4 ? p3 : n5 || y3 || w3 ? 2 : 1) : (t4 = k3[o5 + 8 >> 2], e5 = f4, f4 = k3[o5 + 12 >> 2]);
                  }
                  ke[0 | f4](r5, t4, e5);
                }
                if ((0 | d3) == (0 | (c3 = k3[c3 >> 2])))
                  break;
              }
              if (t4 = k3[r5 + 84 >> 2]) {
                for (3 == (0 | (e5 = k3[r5 + 1716 >> 2])) ? ke[k3[r5 + 88 >> 2]](4) : ke[0 | e5](4, k3[r5 + 1896 >> 2]), n5 = -1; ; ) {
                  for (e5 = k3[t4 + 8 >> 2]; v3[r5 + 80 | 0] && (0 | (f4 = !(i4 = v3[k3[k3[e5 + 4 >> 2] + 20 >> 2] + 21 | 0]))) != (0 | n5) && (4 == (0 | (a5 = k3[r5 + 1720 >> 2])) ? ke[k3[r5 + 92 >> 2]](!i4) : ke[0 | a5](!i4, k3[r5 + 1896 >> 2]), n5 = f4), 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[e5 + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[e5 + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), (0 | (e5 = k3[e5 + 12 >> 2])) != k3[t4 + 8 >> 2]; )
                    ;
                  if (!(t4 = k3[t4 + 16 >> 2]))
                    break;
                }
                6 == (0 | (e5 = k3[r5 + 1728 >> 2])) ? ke[k3[r5 + 100 >> 2]]() : ke[0 | e5](k3[r5 + 1896 >> 2]), k3[r5 + 84 >> 2] = 0;
              }
            }
          }
          B2 = o5 + 16 | 0;
        }
        function Y2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0;
          r:
            if (r5 |= 0) {
              n5 = (i4 = r5 - 8 | 0) + (r5 = -8 & (e5 = k3[r5 - 4 >> 2])) | 0;
              e:
                if (!(1 & e5)) {
                  if (!(2 & e5))
                    break r;
                  if ((i4 = i4 - (e5 = k3[i4 >> 2]) | 0) >>> 0 < h2[858])
                    break r;
                  r5 = r5 + e5 | 0;
                  f: {
                    i: {
                      if (k3[859] != (0 | i4)) {
                        if (e5 >>> 0 <= 255) {
                          if (a5 = e5 >>> 3 | 0, (0 | (e5 = k3[i4 + 12 >> 2])) == (0 | (f4 = k3[i4 + 8 >> 2]))) {
                            o5 = 3416, u3 = k3[854] & Vr(a5), k3[o5 >> 2] = u3;
                            break e;
                          }
                          k3[f4 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = f4;
                          break e;
                        }
                        if (b5 = k3[i4 + 24 >> 2], (0 | i4) != (0 | (e5 = k3[i4 + 12 >> 2]))) {
                          f4 = k3[i4 + 8 >> 2], k3[f4 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = f4;
                          break f;
                        }
                        if (!(f4 = k3[(a5 = i4 + 20 | 0) >> 2])) {
                          if (!(f4 = k3[i4 + 16 >> 2]))
                            break i;
                          a5 = i4 + 16 | 0;
                        }
                        for (; t4 = a5, (f4 = k3[(a5 = (e5 = f4) + 20 | 0) >> 2]) || (a5 = e5 + 16 | 0, f4 = k3[e5 + 16 >> 2]); )
                          ;
                        k3[t4 >> 2] = 0;
                        break f;
                      }
                      if (3 != (3 & (e5 = k3[n5 + 4 >> 2])))
                        break e;
                      return k3[856] = r5, k3[n5 + 4 >> 2] = -2 & e5, k3[i4 + 4 >> 2] = 1 | r5, void (k3[n5 >> 2] = r5);
                    }
                    e5 = 0;
                  }
                  if (b5) {
                    f4 = k3[i4 + 28 >> 2];
                    f: {
                      if (k3[(a5 = 3720 + (f4 << 2) | 0) >> 2] == (0 | i4)) {
                        if (k3[a5 >> 2] = e5, e5)
                          break f;
                        o5 = 3420, u3 = k3[855] & Vr(f4), k3[o5 >> 2] = u3;
                        break e;
                      }
                      if (k3[b5 + (k3[b5 + 16 >> 2] == (0 | i4) ? 16 : 20) >> 2] = e5, !e5)
                        break e;
                    }
                    k3[e5 + 24 >> 2] = b5, (f4 = k3[i4 + 16 >> 2]) && (k3[e5 + 16 >> 2] = f4, k3[f4 + 24 >> 2] = e5), (f4 = k3[i4 + 20 >> 2]) && (k3[e5 + 20 >> 2] = f4, k3[f4 + 24 >> 2] = e5);
                  }
                }
              if (!(i4 >>> 0 >= n5 >>> 0) && 1 & (e5 = k3[n5 + 4 >> 2])) {
                e: {
                  f: {
                    i: {
                      a: {
                        if (!(2 & e5)) {
                          if (k3[860] == (0 | n5)) {
                            if (k3[860] = i4, r5 = k3[857] + r5 | 0, k3[857] = r5, k3[i4 + 4 >> 2] = 1 | r5, k3[859] != (0 | i4))
                              break r;
                            return k3[856] = 0, void (k3[859] = 0);
                          }
                          if (k3[859] == (0 | n5))
                            return k3[859] = i4, r5 = k3[856] + r5 | 0, k3[856] = r5, k3[i4 + 4 >> 2] = 1 | r5, void (k3[r5 + i4 >> 2] = r5);
                          if (r5 = (-8 & e5) + r5 | 0, e5 >>> 0 <= 255) {
                            if (a5 = e5 >>> 3 | 0, (0 | (e5 = k3[n5 + 12 >> 2])) == (0 | (f4 = k3[n5 + 8 >> 2]))) {
                              o5 = 3416, u3 = k3[854] & Vr(a5), k3[o5 >> 2] = u3;
                              break f;
                            }
                            k3[f4 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = f4;
                            break f;
                          }
                          if (b5 = k3[n5 + 24 >> 2], (0 | n5) != (0 | (e5 = k3[n5 + 12 >> 2]))) {
                            f4 = k3[n5 + 8 >> 2], k3[f4 + 12 >> 2] = e5, k3[e5 + 8 >> 2] = f4;
                            break i;
                          }
                          if (!(f4 = k3[(a5 = n5 + 20 | 0) >> 2])) {
                            if (!(f4 = k3[n5 + 16 >> 2]))
                              break a;
                            a5 = n5 + 16 | 0;
                          }
                          for (; t4 = a5, (f4 = k3[(a5 = (e5 = f4) + 20 | 0) >> 2]) || (a5 = e5 + 16 | 0, f4 = k3[e5 + 16 >> 2]); )
                            ;
                          k3[t4 >> 2] = 0;
                          break i;
                        }
                        k3[n5 + 4 >> 2] = -2 & e5, k3[i4 + 4 >> 2] = 1 | r5, k3[r5 + i4 >> 2] = r5;
                        break e;
                      }
                      e5 = 0;
                    }
                    if (b5) {
                      f4 = k3[n5 + 28 >> 2];
                      i: {
                        if (k3[(a5 = 3720 + (f4 << 2) | 0) >> 2] == (0 | n5)) {
                          if (k3[a5 >> 2] = e5, e5)
                            break i;
                          o5 = 3420, u3 = k3[855] & Vr(f4), k3[o5 >> 2] = u3;
                          break f;
                        }
                        if (k3[b5 + (k3[b5 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = e5, !e5)
                          break f;
                      }
                      k3[e5 + 24 >> 2] = b5, (f4 = k3[n5 + 16 >> 2]) && (k3[e5 + 16 >> 2] = f4, k3[f4 + 24 >> 2] = e5), (f4 = k3[n5 + 20 >> 2]) && (k3[e5 + 20 >> 2] = f4, k3[f4 + 24 >> 2] = e5);
                    }
                  }
                  if (k3[i4 + 4 >> 2] = 1 | r5, k3[r5 + i4 >> 2] = r5, k3[859] == (0 | i4))
                    return void (k3[856] = r5);
                }
                if (r5 >>> 0 <= 255)
                  return e5 = 3456 + (-8 & r5) | 0, (f4 = k3[854]) & (r5 = 1 << (r5 >>> 3)) ? r5 = k3[e5 + 8 >> 2] : (k3[854] = r5 | f4, r5 = e5), k3[e5 + 8 >> 2] = i4, k3[r5 + 12 >> 2] = i4, k3[i4 + 12 >> 2] = e5, void (k3[i4 + 8 >> 2] = r5);
                f4 = 31, r5 >>> 0 <= 16777215 && (f4 = 62 + ((r5 >>> 38 - (e5 = E2(r5 >>> 8 | 0)) & 1) - (e5 << 1) | 0) | 0), k3[i4 + 28 >> 2] = f4, k3[i4 + 16 >> 2] = 0, k3[i4 + 20 >> 2] = 0, e5 = 3720 + (f4 << 2) | 0;
                e: {
                  f: {
                    if ((a5 = k3[855]) & (t4 = 1 << f4)) {
                      for (f4 = r5 << (31 != (0 | f4) ? 25 - (f4 >>> 1 | 0) | 0 : 0), e5 = k3[e5 >> 2]; ; ) {
                        if (a5 = e5, (-8 & k3[e5 + 4 >> 2]) == (0 | r5))
                          break f;
                        if (t4 = f4 >>> 29 | 0, f4 <<= 1, !(e5 = k3[16 + (t4 = e5 + (4 & t4) | 0) >> 2]))
                          break;
                      }
                      k3[t4 + 16 >> 2] = i4, k3[i4 + 24 >> 2] = a5;
                    } else
                      k3[855] = a5 | t4, k3[e5 >> 2] = i4, k3[i4 + 24 >> 2] = e5;
                    k3[i4 + 12 >> 2] = i4, k3[i4 + 8 >> 2] = i4;
                    break e;
                  }
                  r5 = k3[a5 + 8 >> 2], k3[r5 + 12 >> 2] = i4, k3[a5 + 8 >> 2] = i4, k3[i4 + 24 >> 2] = 0, k3[i4 + 12 >> 2] = a5, k3[i4 + 8 >> 2] = r5;
                }
                r5 = k3[862] - 1 | 0, k3[862] = r5 || -1;
              }
            }
        }
        function Z2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0;
          n5 = r5 + e5 | 0;
          r: {
            e:
              if (!(1 & (f4 = k3[r5 + 4 >> 2]))) {
                if (!(2 & f4))
                  break r;
                e5 = (f4 = k3[r5 >> 2]) + e5 | 0;
                f: {
                  i: {
                    a: {
                      if ((0 | (r5 = r5 - f4 | 0)) != k3[859]) {
                        if (f4 >>> 0 <= 255) {
                          if ((0 | (i4 = k3[r5 + 8 >> 2])) != (0 | (a5 = k3[r5 + 12 >> 2])))
                            break a;
                          o5 = 3416, u3 = k3[854] & Vr(f4 >>> 3 | 0), k3[o5 >> 2] = u3;
                          break e;
                        }
                        if (b5 = k3[r5 + 24 >> 2], (0 | (f4 = k3[r5 + 12 >> 2])) != (0 | r5)) {
                          i4 = k3[r5 + 8 >> 2], k3[i4 + 12 >> 2] = f4, k3[f4 + 8 >> 2] = i4;
                          break f;
                        }
                        if (!(i4 = k3[(a5 = r5 + 20 | 0) >> 2])) {
                          if (!(i4 = k3[r5 + 16 >> 2]))
                            break i;
                          a5 = r5 + 16 | 0;
                        }
                        for (; t4 = a5, (i4 = k3[(a5 = (f4 = i4) + 20 | 0) >> 2]) || (a5 = f4 + 16 | 0, i4 = k3[f4 + 16 >> 2]); )
                          ;
                        k3[t4 >> 2] = 0;
                        break f;
                      }
                      if (3 != (3 & (f4 = k3[n5 + 4 >> 2])))
                        break e;
                      return k3[856] = e5, k3[n5 + 4 >> 2] = -2 & f4, k3[r5 + 4 >> 2] = 1 | e5, void (k3[n5 >> 2] = e5);
                    }
                    k3[i4 + 12 >> 2] = a5, k3[a5 + 8 >> 2] = i4;
                    break e;
                  }
                  f4 = 0;
                }
                if (b5) {
                  i4 = k3[r5 + 28 >> 2];
                  f: {
                    if (k3[(a5 = 3720 + (i4 << 2) | 0) >> 2] == (0 | r5)) {
                      if (k3[a5 >> 2] = f4, f4)
                        break f;
                      o5 = 3420, u3 = k3[855] & Vr(i4), k3[o5 >> 2] = u3;
                      break e;
                    }
                    if (k3[b5 + (k3[b5 + 16 >> 2] == (0 | r5) ? 16 : 20) >> 2] = f4, !f4)
                      break e;
                  }
                  k3[f4 + 24 >> 2] = b5, (i4 = k3[r5 + 16 >> 2]) && (k3[f4 + 16 >> 2] = i4, k3[i4 + 24 >> 2] = f4), (i4 = k3[r5 + 20 >> 2]) && (k3[f4 + 20 >> 2] = i4, k3[i4 + 24 >> 2] = f4);
                }
              }
            e: {
              f: {
                i: {
                  a: {
                    if (!(2 & (f4 = k3[n5 + 4 >> 2]))) {
                      if (k3[860] == (0 | n5)) {
                        if (k3[860] = r5, e5 = k3[857] + e5 | 0, k3[857] = e5, k3[r5 + 4 >> 2] = 1 | e5, k3[859] != (0 | r5))
                          break r;
                        return k3[856] = 0, void (k3[859] = 0);
                      }
                      if (k3[859] == (0 | n5))
                        return k3[859] = r5, e5 = k3[856] + e5 | 0, k3[856] = e5, k3[r5 + 4 >> 2] = 1 | e5, void (k3[r5 + e5 >> 2] = e5);
                      if (e5 = (-8 & f4) + e5 | 0, f4 >>> 0 <= 255) {
                        if (a5 = f4 >>> 3 | 0, (0 | (f4 = k3[n5 + 12 >> 2])) == (0 | (i4 = k3[n5 + 8 >> 2]))) {
                          o5 = 3416, u3 = k3[854] & Vr(a5), k3[o5 >> 2] = u3;
                          break f;
                        }
                        k3[i4 + 12 >> 2] = f4, k3[f4 + 8 >> 2] = i4;
                        break f;
                      }
                      if (b5 = k3[n5 + 24 >> 2], (0 | n5) != (0 | (f4 = k3[n5 + 12 >> 2]))) {
                        i4 = k3[n5 + 8 >> 2], k3[i4 + 12 >> 2] = f4, k3[f4 + 8 >> 2] = i4;
                        break i;
                      }
                      if (!(i4 = k3[(a5 = n5 + 20 | 0) >> 2])) {
                        if (!(i4 = k3[n5 + 16 >> 2]))
                          break a;
                        a5 = n5 + 16 | 0;
                      }
                      for (; t4 = a5, (i4 = k3[(a5 = (f4 = i4) + 20 | 0) >> 2]) || (a5 = f4 + 16 | 0, i4 = k3[f4 + 16 >> 2]); )
                        ;
                      k3[t4 >> 2] = 0;
                      break i;
                    }
                    k3[n5 + 4 >> 2] = -2 & f4, k3[r5 + 4 >> 2] = 1 | e5, k3[r5 + e5 >> 2] = e5;
                    break e;
                  }
                  f4 = 0;
                }
                if (b5) {
                  i4 = k3[n5 + 28 >> 2];
                  i: {
                    if (k3[(a5 = 3720 + (i4 << 2) | 0) >> 2] == (0 | n5)) {
                      if (k3[a5 >> 2] = f4, f4)
                        break i;
                      o5 = 3420, u3 = k3[855] & Vr(i4), k3[o5 >> 2] = u3;
                      break f;
                    }
                    if (k3[b5 + (k3[b5 + 16 >> 2] == (0 | n5) ? 16 : 20) >> 2] = f4, !f4)
                      break f;
                  }
                  k3[f4 + 24 >> 2] = b5, (i4 = k3[n5 + 16 >> 2]) && (k3[f4 + 16 >> 2] = i4, k3[i4 + 24 >> 2] = f4), (i4 = k3[n5 + 20 >> 2]) && (k3[f4 + 20 >> 2] = i4, k3[i4 + 24 >> 2] = f4);
                }
              }
              if (k3[r5 + 4 >> 2] = 1 | e5, k3[r5 + e5 >> 2] = e5, k3[859] == (0 | r5))
                return void (k3[856] = e5);
            }
            if (e5 >>> 0 <= 255)
              return f4 = 3456 + (-8 & e5) | 0, (i4 = k3[854]) & (e5 = 1 << (e5 >>> 3)) ? e5 = k3[f4 + 8 >> 2] : (k3[854] = e5 | i4, e5 = f4), k3[f4 + 8 >> 2] = r5, k3[e5 + 12 >> 2] = r5, k3[r5 + 12 >> 2] = f4, void (k3[r5 + 8 >> 2] = e5);
            i4 = 31, e5 >>> 0 <= 16777215 && (i4 = 62 + ((e5 >>> 38 - (f4 = E2(e5 >>> 8 | 0)) & 1) - (f4 << 1) | 0) | 0), k3[r5 + 28 >> 2] = i4, k3[r5 + 16 >> 2] = 0, k3[r5 + 20 >> 2] = 0, f4 = 3720 + (i4 << 2) | 0;
            e: {
              if ((a5 = k3[855]) & (t4 = 1 << i4)) {
                for (i4 = e5 << (31 != (0 | i4) ? 25 - (i4 >>> 1 | 0) | 0 : 0), f4 = k3[f4 >> 2]; ; ) {
                  if (a5 = f4, (-8 & k3[f4 + 4 >> 2]) == (0 | e5))
                    break e;
                  if (t4 = i4 >>> 29 | 0, i4 <<= 1, !(f4 = k3[16 + (t4 = f4 + (4 & t4) | 0) >> 2]))
                    break;
                }
                k3[t4 + 16 >> 2] = r5, k3[r5 + 24 >> 2] = a5;
              } else
                k3[855] = a5 | t4, k3[f4 >> 2] = r5, k3[r5 + 24 >> 2] = f4;
              return k3[r5 + 12 >> 2] = r5, void (k3[r5 + 8 >> 2] = r5);
            }
            e5 = k3[a5 + 8 >> 2], k3[e5 + 12 >> 2] = r5, k3[a5 + 8 >> 2] = r5, k3[r5 + 24 >> 2] = 0, k3[r5 + 12 >> 2] = a5, k3[r5 + 8 >> 2] = e5;
          }
        }
        function J2(r5) {
          r5 |= 0;
          var e5 = 0, f4 = 0, i4 = m2(0), a5 = m2(0), n5 = m2(0), t4 = m2(0), b5 = m2(0), o5 = 0, u3 = m2(0), c3 = 0, s3 = 0, A3 = m2(0), l3 = m2(0), d3 = 0, h3 = m2(0), y3 = m2(0), p3 = 0, g3 = m2(0), E3 = m2(0), C3 = m2(0), R3 = m2(0), I3 = m2(0), S3 = m2(0), M3 = 0;
          r: {
            e:
              if (!((0 | (d3 = k3[r5 + 112 >> 2])) < 3)) {
                if (p3 = 116 + ((M3 = d3 << 4) + r5 | 0) | 0, g3 = w2[r5 + 124 >> 2], E3 = w2[r5 + 120 >> 2], t4 = w2[r5 + 24 >> 2], C3 = w2[r5 + 116 >> 2], u3 = w2[r5 + 16 >> 2], b5 = w2[r5 + 20 >> 2], !(u3 != m2(0) | b5 != m2(0)) & t4 == m2(0))
                  for (f4 = r5 + 148 | 0, t4 = m2(0), b5 = m2(0), u3 = m2(0), i4 = A3 = m2(w2[(e5 = r5 + 132 | 0) >> 2] - C3), a5 = l3 = m2(w2[r5 + 136 >> 2] - E3), h3 = n5 = m2(w2[r5 + 140 >> 2] - g3); R3 = m2(w2[e5 + 20 >> 2] - E3), I3 = m2(w2[f4 >> 2] - C3), S3 = m2(m2(i4 * R3) - m2(I3 * a5)), y3 = m2(w2[e5 + 24 >> 2] - g3), a5 = m2(m2(a5 * y3) - m2(R3 * h3)), i4 = m2(m2(h3 * I3) - m2(y3 * i4)), m2(m2(S3 * t4) + m2(m2(a5 * u3) + m2(b5 * i4))) >= m2(0) ? (t4 = m2(t4 + S3), b5 = m2(b5 + i4), a5 = m2(u3 + a5)) : (t4 = m2(t4 - S3), b5 = m2(b5 - i4), a5 = m2(u3 - a5)), u3 = a5, i4 = I3, a5 = R3, h3 = y3, p3 >>> 0 > (f4 = (e5 = f4) + 16 | 0) >>> 0; )
                    ;
                else
                  A3 = m2(w2[r5 + 132 >> 2] - C3), l3 = m2(w2[r5 + 136 >> 2] - E3), n5 = m2(w2[r5 + 140 >> 2] - g3);
                for (f4 = r5 + 148 | 0, e5 = c3 = r5 + 132 | 0; ; ) {
                  i4 = n5, n5 = l3, o5 = e5, a5 = A3, l3 = m2(w2[e5 + 20 >> 2] - E3), A3 = m2(w2[(e5 = f4) >> 2] - C3), y3 = m2(m2(m2(a5 * l3) - m2(n5 * A3)) * t4), h3 = n5, n5 = m2(w2[o5 + 24 >> 2] - g3);
                  f:
                    if ((i4 = m2(y3 + m2(m2(m2(m2(h3 * n5) - m2(l3 * i4)) * u3) + m2(b5 * m2(m2(i4 * A3) - m2(n5 * a5)))))) != m2(0)) {
                      if (i4 > m2(0)) {
                        if (f4 = 0, o5 = (0 | s3) < 0, s3 = 1, !o5)
                          break f;
                        break r;
                      }
                      if (f4 = 0, o5 = (0 | s3) > 0, s3 = -1, o5)
                        break r;
                    }
                  if (!(p3 >>> 0 > (f4 = e5 + 16 | 0) >>> 0))
                    break;
                }
                if (s3) {
                  f4 = 1;
                  f: {
                    i:
                      switch (k3[r5 + 56 >> 2] - 100132 | 0) {
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
                  3 == (0 | (e5 = k3[r5 + 1716 >> 2])) ? ke[k3[r5 + 88 >> 2]](v3[r5 + 81 | 0] ? 2 : (0 | d3) < 4 ? 4 : 6) : ke[0 | e5](v3[r5 + 81 | 0] ? 2 : (0 | d3) < 4 ? 4 : 6, k3[r5 + 1896 >> 2]), 5 == (0 | (e5 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[r5 + 128 >> 2]) : ke[0 | e5](k3[r5 + 128 >> 2], k3[r5 + 1896 >> 2]);
                  f:
                    if ((0 | s3) <= 0) {
                      if ((0 | d3) < 2)
                        break f;
                      for (e5 = M3 + 100 | 0; f4 = r5 + e5 | 0, 5 == (0 | (o5 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[f4 + 12 >> 2]) : ke[0 | o5](k3[f4 + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = (0 | e5) > 132, e5 = e5 - 16 | 0, f4; )
                        ;
                    } else if (!(c3 >>> 0 >= p3 >>> 0))
                      for (; 5 == (0 | (e5 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[c3 + 12 >> 2]) : ke[0 | e5](k3[c3 + 12 >> 2], k3[r5 + 1896 >> 2]), p3 >>> 0 > (c3 = c3 + 16 | 0) >>> 0; )
                        ;
                  6 == (0 | (e5 = k3[r5 + 1728 >> 2])) ? ke[k3[r5 + 100 >> 2]]() : ke[0 | e5](k3[r5 + 1896 >> 2]);
                }
              }
            f4 = 1;
          }
          return 0 | f4;
        }
        function N2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = m2(0), o5 = 0, u3 = m2(0), c3 = 0, s3 = 0, A3 = 0, v4 = 0, d3 = 0, h3 = 0, y3 = 0, p3 = 0, g3 = 0, E3 = 0, C3 = 0, R3 = 0;
          r: {
            A3 = k3[e5 >> 2], a5 = k3[A3 + 16 >> 2], u3 = w2[a5 + 28 >> 2], f4 = k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2], v4 = k3[f4 >> 2], n5 = k3[v4 + 16 >> 2];
            e: {
              if (!(!(u3 < (t4 = w2[n5 + 28 >> 2])) & (!(w2[a5 + 32 >> 2] <= w2[n5 + 32 >> 2]) | u3 != t4))) {
                if (dr2(k3[k3[v4 + 4 >> 2] + 16 >> 2], a5, n5) > m2(0))
                  break e;
                if (a5 = k3[A3 + 16 >> 2], n5 = k3[v4 + 16 >> 2], !(w2[a5 + 28 >> 2] == w2[n5 + 28 >> 2] & w2[a5 + 32 >> 2] == w2[n5 + 32 >> 2])) {
                  if (!er2(k3[v4 + 4 >> 2]))
                    break r;
                  if (!ir2(A3, k3[k3[v4 + 4 >> 2] + 12 >> 2]))
                    break r;
                  return b4[f4 + 14 | 0] = 1, b4[e5 + 14 | 0] = 1, 1;
                }
                if (i4 = 1, (0 | a5) == (0 | n5))
                  break e;
                if (o5 = k3[r5 + 68 >> 2], (0 | (n5 = k3[a5 + 36 >> 2])) >= 0) {
                  if (d3 = k3[o5 >> 2], c3 = k3[d3 >> 2], s3 = k3[d3 + 4 >> 2], e5 = k3[4 + (g3 = s3 + (n5 << 3) | 0) >> 2], y3 = k3[d3 + 8 >> 2], p3 = k3[c3 + (y3 << 2) >> 2], k3[c3 + (e5 << 2) >> 2] = p3, C3 = i4 = (p3 << 3) + s3 | 0, k3[i4 + 4 >> 2] = e5, E3 = y3 - 1 | 0, k3[d3 + 8 >> 2] = E3, (0 | e5) < (0 | y3)) {
                    f: {
                      if ((0 | e5) < 2 || (f4 = k3[(k3[c3 + (e5 << 1 & -4) >> 2] << 3) + s3 >> 2], t4 = w2[f4 + 28 >> 2], h3 = k3[i4 >> 2], t4 < (u3 = w2[h3 + 28 >> 2]) || !(!(w2[f4 + 32 >> 2] <= w2[h3 + 32 >> 2]) | u3 != t4)))
                        for (R3 = (p3 << 3) + s3 | 0; ; ) {
                          if ((0 | E3) <= (0 | (f4 = e5 << 1)) || (o5 = k3[(k3[c3 + ((i4 = 1 | f4) << 2) >> 2] << 3) + s3 >> 2], u3 = w2[o5 + 28 >> 2], a5 = k3[(k3[c3 + (f4 << 2) >> 2] << 3) + s3 >> 2], !(u3 < (t4 = w2[a5 + 28 >> 2])) & (!(w2[o5 + 32 >> 2] <= w2[a5 + 32 >> 2]) | u3 != t4) || (f4 = i4)), (0 | f4) >= (0 | y3)) {
                            f4 = e5;
                            break f;
                          }
                          if (h3 = k3[R3 >> 2], u3 = w2[h3 + 28 >> 2], o5 = k3[c3 + (f4 << 2) >> 2], i4 = k3[(a5 = (o5 << 3) + s3 | 0) >> 2], u3 < (t4 = w2[i4 + 28 >> 2])) {
                            f4 = e5;
                            break f;
                          }
                          if (!(!(w2[h3 + 32 >> 2] <= w2[i4 + 32 >> 2]) | u3 != t4)) {
                            f4 = e5;
                            break f;
                          }
                          k3[c3 + (e5 << 2) >> 2] = o5, k3[a5 + 4 >> 2] = e5, e5 = f4;
                        }
                      for (; ; ) {
                        if (o5 = k3[c3 + ((f4 = e5 >>> 1 | 0) << 2) >> 2], i4 = k3[(a5 = (o5 << 3) + s3 | 0) >> 2], (t4 = w2[i4 + 28 >> 2]) < u3) {
                          f4 = e5;
                          break f;
                        }
                        if (!(!(w2[i4 + 32 >> 2] <= w2[h3 + 32 >> 2]) | u3 != t4)) {
                          f4 = e5;
                          break f;
                        }
                        if (k3[c3 + (e5 << 2) >> 2] = o5, k3[a5 + 4 >> 2] = e5, i4 = e5 >>> 0 > 3, e5 = f4, !i4)
                          break;
                      }
                    }
                    k3[c3 + (f4 << 2) >> 2] = p3, k3[C3 + 4 >> 2] = f4;
                  }
                  k3[g3 >> 2] = 0, k3[g3 + 4 >> 2] = k3[d3 + 16 >> 2], k3[d3 + 16 >> 2] = n5;
                } else {
                  k3[k3[o5 + 4 >> 2] + ((-1 ^ n5) << 2) >> 2] = 0;
                  f:
                    if (!((0 | (e5 = k3[o5 + 12 >> 2])) <= 0))
                      for (n5 = k3[o5 + 8 >> 2] - 4 | 0; ; ) {
                        if (k3[k3[n5 + (e5 << 2) >> 2] >> 2])
                          break f;
                        if (f4 = e5 - 1 | 0, k3[o5 + 12 >> 2] = f4, i4 = (0 | e5) > 1, e5 = f4, !i4)
                          break;
                      }
                }
                return yr2(r5, k3[k3[v4 + 4 >> 2] + 12 >> 2], A3), 1;
              }
              if (!(dr2(k3[k3[A3 + 4 >> 2] + 16 >> 2], n5, a5) < m2(0))) {
                if (i4 = 1, b4[e5 + 14 | 0] = 1, b4[k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !er2(k3[A3 + 4 >> 2]))
                  break r;
                if (!ir2(k3[k3[v4 + 4 >> 2] + 12 >> 2], A3))
                  break r;
              }
            }
            return i4;
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function V2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0, l3 = 0, v4 = 0;
          if (!r5)
            return T2(e5);
          if (e5 >>> 0 >= 4294967232)
            return k3[806] = 48, 0;
          n5 = e5 >>> 0 < 11 ? 16 : e5 + 11 & -8, i4 = -8 & (o5 = k3[4 + (a5 = r5 - 8 | 0) >> 2]);
          r:
            if (3 & o5) {
              t4 = i4 + a5 | 0;
              e:
                if (i4 >>> 0 >= n5 >>> 0) {
                  if ((f4 = i4 - n5 | 0) >>> 0 < 16)
                    break e;
                  k3[a5 + 4 >> 2] = 1 & o5 | n5 | 2, k3[4 + (i4 = a5 + n5 | 0) >> 2] = 3 | f4, k3[t4 + 4 >> 2] = 1 | k3[t4 + 4 >> 2], Z2(i4, f4);
                } else if (k3[860] != (0 | t4))
                  if (k3[859] != (0 | t4)) {
                    if (2 & (b5 = k3[t4 + 4 >> 2]))
                      break r;
                    if ((u3 = i4 + (-8 & b5) | 0) >>> 0 < n5 >>> 0)
                      break r;
                    s3 = u3 - n5 | 0;
                    f:
                      if (b5 >>> 0 <= 255) {
                        if ((0 | (f4 = k3[t4 + 12 >> 2])) == (0 | (i4 = k3[t4 + 8 >> 2]))) {
                          l3 = 3416, v4 = k3[854] & Vr(b5 >>> 3 | 0), k3[l3 >> 2] = v4;
                          break f;
                        }
                        k3[i4 + 12 >> 2] = f4, k3[f4 + 8 >> 2] = i4;
                      } else {
                        c3 = k3[t4 + 24 >> 2];
                        i:
                          if ((0 | t4) == (0 | (i4 = k3[t4 + 12 >> 2]))) {
                            a: {
                              if (!(b5 = k3[(f4 = t4 + 20 | 0) >> 2])) {
                                if (!(b5 = k3[t4 + 16 >> 2]))
                                  break a;
                                f4 = t4 + 16 | 0;
                              }
                              for (; A3 = f4, (b5 = k3[(f4 = (i4 = b5) + 20 | 0) >> 2]) || (f4 = i4 + 16 | 0, b5 = k3[i4 + 16 >> 2]); )
                                ;
                              k3[A3 >> 2] = 0;
                              break i;
                            }
                            i4 = 0;
                          } else
                            f4 = k3[t4 + 8 >> 2], k3[f4 + 12 >> 2] = i4, k3[i4 + 8 >> 2] = f4;
                        if (c3) {
                          f4 = k3[t4 + 28 >> 2];
                          i: {
                            if (k3[(b5 = 3720 + (f4 << 2) | 0) >> 2] == (0 | t4)) {
                              if (k3[b5 >> 2] = i4, i4)
                                break i;
                              l3 = 3420, v4 = k3[855] & Vr(f4), k3[l3 >> 2] = v4;
                              break f;
                            }
                            if (k3[(k3[c3 + 16 >> 2] == (0 | t4) ? 16 : 20) + c3 >> 2] = i4, !i4)
                              break f;
                          }
                          k3[i4 + 24 >> 2] = c3, (f4 = k3[t4 + 16 >> 2]) && (k3[i4 + 16 >> 2] = f4, k3[f4 + 24 >> 2] = i4), (f4 = k3[t4 + 20 >> 2]) && (k3[i4 + 20 >> 2] = f4, k3[f4 + 24 >> 2] = i4);
                        }
                      }
                    s3 >>> 0 <= 15 ? (k3[a5 + 4 >> 2] = 1 & o5 | u3 | 2, k3[4 + (f4 = a5 + u3 | 0) >> 2] = 1 | k3[f4 + 4 >> 2]) : (k3[a5 + 4 >> 2] = 1 & o5 | n5 | 2, k3[4 + (f4 = a5 + n5 | 0) >> 2] = 3 | s3, k3[4 + (i4 = a5 + u3 | 0) >> 2] = 1 | k3[i4 + 4 >> 2], Z2(f4, s3));
                  } else {
                    if ((i4 = i4 + k3[856] | 0) >>> 0 < n5 >>> 0)
                      break r;
                    (f4 = i4 - n5 | 0) >>> 0 >= 16 ? (k3[a5 + 4 >> 2] = 1 & o5 | n5 | 2, k3[4 + (b5 = a5 + n5 | 0) >> 2] = 1 | f4, k3[(i4 = i4 + a5 | 0) >> 2] = f4, k3[i4 + 4 >> 2] = -2 & k3[i4 + 4 >> 2]) : (k3[a5 + 4 >> 2] = i4 | 1 & o5 | 2, k3[4 + (f4 = i4 + a5 | 0) >> 2] = 1 | k3[f4 + 4 >> 2], f4 = 0), k3[859] = b5, k3[856] = f4;
                  }
                else {
                  if ((i4 = i4 + k3[857] | 0) >>> 0 <= n5 >>> 0)
                    break r;
                  k3[a5 + 4 >> 2] = 1 & o5 | n5 | 2, i4 = i4 - n5 | 0, k3[4 + (f4 = a5 + n5 | 0) >> 2] = 1 | i4, k3[857] = i4, k3[860] = f4;
                }
              f4 = a5;
            } else {
              if (n5 >>> 0 < 256)
                break r;
              if (i4 >>> 0 >= n5 + 4 >>> 0 && (f4 = a5, i4 - n5 >>> 0 <= k3[974] << 1 >>> 0))
                break r;
              f4 = 0;
            }
          return f4 ? f4 + 8 | 0 : (f4 = T2(e5)) ? (rr2(f4, r5, e5 >>> 0 > (a5 = (3 & (a5 = k3[r5 - 4 >> 2]) ? -4 : -8) + (-8 & a5) | 0) >>> 0 ? a5 : e5), Y2(r5), f4) : 0;
        }
        function z2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = m2(0), c3 = 0, s3 = m2(0);
          for (i4 = k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2]; ; ) {
            r: {
              if (v3[i4 + 14 | 0])
                for (; i4 = k3[k3[k3[(e5 = i4) + 4 >> 2] + 8 >> 2] >> 2], v3[i4 + 14 | 0]; )
                  ;
              e: {
                f: {
                  i: {
                    a: {
                      if (v3[e5 + 14 | 0])
                        f4 = e5;
                      else {
                        if (!(f4 = k3[k3[k3[e5 + 4 >> 2] + 4 >> 2] >> 2]))
                          break a;
                        if (i4 = e5, !v3[f4 + 14 | 0])
                          break a;
                      }
                      b4[f4 + 14 | 0] = 0, a5 = k3[f4 >> 2], e5 = k3[k3[a5 + 4 >> 2] + 16 >> 2], t4 = k3[i4 >> 2];
                      n:
                        if ((0 | e5) != k3[k3[t4 + 4 >> 2] + 16 >> 2]) {
                          u3 = w2[e5 + 28 >> 2], c3 = k3[k3[k3[f4 + 4 >> 2] + 8 >> 2] >> 2], n5 = k3[c3 >> 2], o5 = k3[k3[n5 + 4 >> 2] + 16 >> 2];
                          t: {
                            if (!(!(u3 < (s3 = w2[o5 + 28 >> 2])) & (!(w2[e5 + 32 >> 2] <= w2[o5 + 32 >> 2]) | u3 != s3))) {
                              if (dr2(e5, o5, k3[a5 + 16 >> 2]) < m2(0)) {
                                e5 = f4;
                                break n;
                              }
                              if (b4[f4 + 14 | 0] = 1, b4[k3[k3[k3[f4 + 4 >> 2] + 4 >> 2] >> 2] + 14 | 0] = 1, !(e5 = er2(a5)))
                                break e;
                              if (ir2(k3[n5 + 4 >> 2], e5))
                                break t;
                              break r;
                            }
                            if (dr2(o5, e5, k3[n5 + 16 >> 2]) > m2(0)) {
                              e5 = f4;
                              break n;
                            }
                            if (b4[c3 + 14 | 0] = 1, b4[f4 + 14 | 0] = 1, !(e5 = er2(n5)))
                              break r;
                            if (!ir2(k3[a5 + 12 >> 2], k3[n5 + 4 >> 2]))
                              break r;
                            e5 = k3[e5 + 4 >> 2];
                          }
                          if (b4[k3[e5 + 20 >> 2] + 21 | 0] = v3[f4 + 12 | 0], v3[i4 + 15 | 0]) {
                            if (k3[k3[i4 >> 2] + 24 >> 2] = 0, Nr(k3[i4 + 4 >> 2]), Y2(i4), !$2(t4))
                              break r;
                            i4 = k3[k3[k3[f4 + 4 >> 2] + 8 >> 2] >> 2], t4 = k3[i4 >> 2], e5 = f4;
                          } else if (v3[f4 + 15 | 0]) {
                            if (k3[k3[f4 >> 2] + 24 >> 2] = 0, Nr(k3[f4 + 4 >> 2]), Y2(f4), !$2(a5))
                              break r;
                            e5 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2], a5 = k3[e5 >> 2];
                          } else
                            e5 = f4;
                        } else
                          e5 = f4;
                      if (k3[a5 + 16 >> 2] == k3[t4 + 16 >> 2])
                        break f;
                      if (f4 = k3[k3[a5 + 4 >> 2] + 16 >> 2], n5 = k3[k3[t4 + 4 >> 2] + 16 >> 2], v3[i4 + 15 | 0] | v3[e5 + 15 | 0] | (0 | f4) == (0 | n5))
                        break i;
                      if ((0 | (o5 = f4)) != (0 | (f4 = k3[r5 + 72 >> 2])) & (0 | f4) != (0 | n5))
                        break i;
                      if (!H2(r5, e5))
                        break f;
                    }
                    return;
                  }
                  N2(r5, e5);
                }
                if (k3[a5 + 16 >> 2] != k3[t4 + 16 >> 2])
                  continue;
                if (n5 = k3[a5 + 4 >> 2], f4 = k3[t4 + 4 >> 2], k3[n5 + 16 >> 2] != k3[f4 + 16 >> 2])
                  continue;
                if (k3[t4 + 28 >> 2] = k3[t4 + 28 >> 2] + k3[a5 + 28 >> 2], k3[f4 + 28 >> 2] = k3[f4 + 28 >> 2] + k3[n5 + 28 >> 2], k3[k3[e5 >> 2] + 24 >> 2] = 0, Nr(k3[e5 + 4 >> 2]), Y2(e5), !$2(a5))
                  break r;
                e5 = k3[k3[k3[i4 + 4 >> 2] + 4 >> 2] >> 2];
                continue;
              }
            }
            break;
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function K2(r5) {
          r5 |= 0;
          var e5 = 0, f4 = 0, i4 = 0, a5 = m2(0), n5 = m2(0), t4 = 0, b5 = 0, o5 = 0, u3 = 0;
          if ((0 | (e5 = k3[r5 + 40 >> 2])) != (0 | (o5 = r5 + 40 | 0)))
            for (; ; ) {
              if (r5 = k3[e5 >> 2], v3[e5 + 21 | 0]) {
                for (e5 = e5 + 8 | 0; e5 = k3[e5 >> 2], i4 = k3[k3[e5 + 4 >> 2] + 16 >> 2], a5 = w2[i4 + 28 >> 2], f4 = k3[e5 + 16 >> 2], !(!(a5 < (n5 = w2[f4 + 28 >> 2])) & (!(w2[i4 + 32 >> 2] <= w2[f4 + 32 >> 2]) | a5 != n5)); )
                  e5 = k3[e5 + 8 >> 2] + 4 | 0;
                for (; !(!(a5 > n5) & (!(w2[f4 + 32 >> 2] <= w2[i4 + 32 >> 2]) | a5 != n5)); )
                  e5 = k3[e5 + 12 >> 2], f4 = k3[e5 + 16 >> 2], n5 = w2[f4 + 28 >> 2], i4 = k3[k3[e5 + 4 >> 2] + 16 >> 2], a5 = w2[i4 + 28 >> 2];
                r: {
                  if ((0 | (i4 = k3[k3[e5 + 8 >> 2] + 4 >> 2])) != k3[e5 + 12 >> 2])
                    for (; ; ) {
                      if (f4 = k3[k3[e5 + 4 >> 2] + 16 >> 2], a5 = w2[f4 + 28 >> 2], t4 = k3[i4 + 16 >> 2], !(a5 < (n5 = w2[t4 + 28 >> 2])) & (!(w2[f4 + 32 >> 2] <= w2[t4 + 32 >> 2]) | a5 != n5)) {
                        e:
                          if (k3[i4 + 12 >> 2] != (0 | e5))
                            for (; ; ) {
                              if (f4 = k3[k3[e5 + 8 >> 2] + 4 >> 2], t4 = k3[f4 + 16 >> 2], a5 = w2[t4 + 28 >> 2], b5 = k3[k3[f4 + 4 >> 2] + 16 >> 2], !(a5 < (n5 = w2[b5 + 28 >> 2]) | a5 == n5 & w2[t4 + 32 >> 2] <= w2[b5 + 32 >> 2])) {
                                if (!(dr2(k3[k3[e5 + 4 >> 2] + 16 >> 2], k3[e5 + 16 >> 2], t4) >= m2(0)))
                                  break e;
                                f4 = k3[k3[e5 + 8 >> 2] + 4 >> 2];
                              }
                              if (e5 = X2(e5, f4), f4 = 0, !e5)
                                break r;
                              if ((0 | (e5 = k3[e5 + 4 >> 2])) == k3[i4 + 12 >> 2])
                                break;
                            }
                        e5 = k3[e5 + 12 >> 2];
                      } else {
                        e:
                          if ((0 | (f4 = k3[i4 + 12 >> 2])) != (0 | e5))
                            for (t4 = i4 + 12 | 0; ; ) {
                              if (b5 = k3[k3[f4 + 4 >> 2] + 16 >> 2], a5 = w2[b5 + 28 >> 2], u3 = k3[f4 + 16 >> 2], !(a5 < (n5 = w2[u3 + 28 >> 2]) | a5 == n5 & w2[b5 + 32 >> 2] <= w2[u3 + 32 >> 2])) {
                                if (!(dr2(k3[i4 + 16 >> 2], k3[k3[i4 + 4 >> 2] + 16 >> 2], b5) <= m2(0)))
                                  break e;
                                f4 = k3[t4 >> 2];
                              }
                              if (i4 = X2(f4, i4), f4 = 0, !i4)
                                break r;
                              if (t4 = (i4 = k3[i4 + 4 >> 2]) + 12 | 0, (0 | (f4 = k3[i4 + 12 >> 2])) == (0 | e5))
                                break;
                            }
                        i4 = k3[k3[i4 + 8 >> 2] + 4 >> 2];
                      }
                      if (k3[e5 + 12 >> 2] == (0 | i4))
                        break;
                    }
                  if (f4 = k3[i4 + 12 >> 2], k3[f4 + 12 >> 2] != (0 | e5))
                    for (; ; ) {
                      if (i4 = X2(f4, i4), f4 = 0, !i4)
                        break r;
                      if (i4 = k3[i4 + 4 >> 2], f4 = k3[i4 + 12 >> 2], k3[f4 + 12 >> 2] == (0 | e5))
                        break;
                    }
                  f4 = 1;
                }
                if (!f4)
                  return 0;
              }
              if ((0 | o5) == (0 | (e5 = r5)))
                break;
            }
          return 1;
        }
        function q2(r5, e5, f4, i4, a5, n5) {
          var t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0;
          r: {
            for (; ; ) {
              if (o5 = k3[f4 + 4 >> 2], !(t4 = T2(16)))
                break r;
              if (k3[t4 >> 2] = o5, u3 = Wr(k3[r5 + 64 >> 2], k3[e5 + 4 >> 2], t4), k3[t4 + 4 >> 2] = u3, !u3)
                break r;
              if (b4[t4 + 13 | 0] = 0, b4[t4 + 14 | 0] = 0, b4[t4 + 15 | 0] = 0, k3[o5 + 24 >> 2] = t4, (0 | i4) == (0 | (f4 = k3[f4 + 8 >> 2])))
                break;
            }
            if (f4 = k3[k3[k3[e5 + 4 >> 2] + 8 >> 2] >> 2], o5 = k3[k3[f4 >> 2] + 4 >> 2], a5 = a5 || k3[o5 + 8 >> 2], k3[o5 + 16 >> 2] == k3[a5 + 16 >> 2]) {
              if (k3[o5 + 8 >> 2] != (0 | a5)) {
                if (!ir2(k3[k3[o5 + 4 >> 2] + 12 >> 2], o5))
                  break r;
                if (!ir2(k3[k3[a5 + 4 >> 2] + 12 >> 2], o5))
                  break r;
              }
              i4 = (a5 = k3[e5 + 8 >> 2]) - (u3 = k3[o5 + 28 >> 2]) | 0, k3[f4 + 8 >> 2] = i4;
              e: {
                f:
                  switch (k3[r5 + 56 >> 2] - 100130 | 0) {
                    case 4:
                      t4 = i4 - 2 >>> 0 < 4294967293;
                      break e;
                    case 3:
                      t4 = i4 >>> 31 | 0;
                      break e;
                    case 2:
                      t4 = (0 | i4) > 0;
                      break e;
                    case 1:
                      t4 = (0 | a5) != (0 | u3);
                      break e;
                    case 0:
                      break f;
                    default:
                      break e;
                  }
                t4 = 1 & i4;
              }
              if (b4[f4 + 12 | 0] = t4, b4[e5 + 14 | 0] = 1, u3 = k3[k3[k3[f4 + 4 >> 2] + 8 >> 2] >> 2], i4 = k3[k3[u3 >> 2] + 4 >> 2], k3[i4 + 16 >> 2] == k3[o5 + 16 >> 2])
                for (a5 = f4 + 4 | 0; ; ) {
                  if (e5 = u3, k3[(t4 = i4) + 8 >> 2] != (0 | o5)) {
                    if (!ir2(k3[k3[t4 + 4 >> 2] + 12 >> 2], t4))
                      break r;
                    if (!ir2(k3[k3[o5 + 4 >> 2] + 12 >> 2], t4))
                      break r;
                  }
                  i4 = (c3 = k3[f4 + 8 >> 2]) - (s3 = k3[t4 + 28 >> 2]) | 0, k3[e5 + 8 >> 2] = i4;
                  e: {
                    f:
                      switch (k3[r5 + 56 >> 2] - 100130 | 0) {
                        case 0:
                          u3 = 1 & i4;
                          break e;
                        case 1:
                          u3 = (0 | c3) != (0 | s3);
                          break e;
                        case 2:
                          u3 = (0 | i4) > 0;
                          break e;
                        case 3:
                          u3 = i4 >>> 31 | 0;
                          break e;
                        case 4:
                          break f;
                        default:
                          break e;
                      }
                    u3 = i4 - 2 >>> 0 < 4294967293;
                  }
                  if (b4[e5 + 12 | 0] = u3, b4[f4 + 14 | 0] = 1, N2(r5, f4) && (k3[t4 + 28 >> 2] = k3[t4 + 28 >> 2] + k3[o5 + 28 >> 2], i4 = k3[t4 + 4 >> 2], k3[i4 + 28 >> 2] = k3[i4 + 28 >> 2] + k3[k3[o5 + 4 >> 2] + 28 >> 2], k3[k3[f4 >> 2] + 24 >> 2] = 0, Nr(k3[a5 >> 2]), Y2(f4), !$2(o5)))
                    break r;
                  if (a5 = e5 + 4 | 0, u3 = k3[k3[k3[(f4 = e5) + 4 >> 2] + 8 >> 2] >> 2], i4 = k3[k3[u3 >> 2] + 4 >> 2], o5 = t4, k3[i4 + 16 >> 2] != k3[t4 + 16 >> 2])
                    break;
                }
              else
                e5 = f4;
            }
            return b4[e5 + 14 | 0] = 1, void (n5 && z2(r5, e5));
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function $2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0;
          if (a5 = k3[r5 + 4 >> 2], (0 | (t4 = k3[a5 + 20 >> 2])) != (0 | (f4 = k3[r5 + 20 >> 2]))) {
            for (e5 = i4 = k3[f4 + 8 >> 2]; k3[e5 + 20 >> 2] = t4, (0 | i4) != (0 | (e5 = k3[e5 + 12 >> 2])); )
              ;
            e5 = k3[f4 >> 2], i4 = k3[f4 + 4 >> 2], k3[e5 + 4 >> 2] = i4, k3[i4 >> 2] = e5, Y2(f4);
          }
          if ((0 | (i4 = k3[r5 + 8 >> 2])) != (0 | r5)) {
            if (n5 = k3[r5 + 4 >> 2], e5 = k3[n5 + 12 >> 2], k3[k3[n5 + 20 >> 2] + 8 >> 2] = e5, k3[k3[r5 + 16 >> 2] + 8 >> 2] = i4, n5 = k3[e5 + 8 >> 2], k3[k3[i4 + 4 >> 2] + 12 >> 2] = e5, k3[k3[n5 + 4 >> 2] + 12 >> 2] = r5, k3[r5 + 8 >> 2] = n5, k3[e5 + 8 >> 2] = i4, (0 | f4) == (0 | t4)) {
              if (!(f4 = T2(24)))
                return 0;
              for (e5 = k3[r5 + 20 >> 2], i4 = k3[e5 + 4 >> 2], k3[f4 + 4 >> 2] = i4, k3[i4 >> 2] = f4, k3[f4 >> 2] = e5, k3[e5 + 4 >> 2] = f4, k3[f4 + 12 >> 2] = 0, k3[f4 + 16 >> 2] = 0, k3[f4 + 8 >> 2] = r5, b4[f4 + 20 | 0] = 0, b4[f4 + 21 | 0] = v3[e5 + 21 | 0], e5 = r5; k3[e5 + 20 >> 2] = f4, (0 | (e5 = k3[e5 + 12 >> 2])) != (0 | r5); )
                ;
            }
          } else {
            for (f4 = k3[r5 + 16 >> 2], e5 = i4 = k3[f4 + 8 >> 2]; k3[e5 + 16 >> 2] = 0, (0 | i4) != (0 | (e5 = k3[e5 + 8 >> 2])); )
              ;
            e5 = k3[f4 >> 2], i4 = k3[f4 + 4 >> 2], k3[e5 + 4 >> 2] = i4, k3[i4 >> 2] = e5, Y2(f4);
          }
          if ((0 | (e5 = k3[a5 + 8 >> 2])) != (0 | a5))
            f4 = k3[k3[a5 + 4 >> 2] + 12 >> 2], k3[k3[r5 + 20 >> 2] + 8 >> 2] = f4, k3[k3[a5 + 16 >> 2] + 8 >> 2] = e5, i4 = k3[f4 + 8 >> 2], k3[k3[e5 + 4 >> 2] + 12 >> 2] = f4, k3[k3[i4 + 4 >> 2] + 12 >> 2] = a5, k3[a5 + 8 >> 2] = i4, k3[f4 + 8 >> 2] = e5;
          else {
            for (f4 = k3[a5 + 16 >> 2], e5 = i4 = k3[f4 + 8 >> 2]; k3[e5 + 16 >> 2] = 0, (0 | i4) != (0 | (e5 = k3[e5 + 8 >> 2])); )
              ;
            for (e5 = k3[f4 >> 2], i4 = k3[f4 + 4 >> 2], k3[e5 + 4 >> 2] = i4, k3[i4 >> 2] = e5, Y2(f4), f4 = k3[a5 + 20 >> 2], e5 = a5 = k3[f4 + 8 >> 2]; k3[e5 + 20 >> 2] = 0, (0 | a5) != (0 | (e5 = k3[e5 + 12 >> 2])); )
              ;
            e5 = k3[f4 >> 2], a5 = k3[f4 + 4 >> 2], k3[e5 + 4 >> 2] = a5, k3[a5 >> 2] = e5, Y2(f4);
          }
          return e5 = k3[r5 + 4 >> 2], e5 = k3[(r5 = r5 >>> 0 > e5 >>> 0 ? e5 : r5) >> 2], f4 = k3[k3[r5 + 4 >> 2] >> 2], k3[k3[e5 + 4 >> 2] >> 2] = f4, k3[k3[f4 + 4 >> 2] >> 2] = e5, Y2(r5), 1;
        }
        function X2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0, u3 = 0, c3 = 0, s3 = 0, A3 = 0;
          r:
            if (f4 = T2(64)) {
              if (o5 = k3[r5 + 4 >> 2], n5 = k3[(i4 = r5 >>> 0 > o5 >>> 0 ? o5 : r5) + 4 >> 2], a5 = k3[n5 >> 2], k3[f4 + 32 >> 2] = a5, k3[k3[a5 + 4 >> 2] >> 2] = f4, k3[f4 >> 2] = i4, i4 = n5, n5 = f4 + 32 | 0, k3[i4 >> 2] = n5, k3[f4 + 16 >> 2] = 0, k3[f4 + 20 >> 2] = 0, k3[f4 + 12 >> 2] = n5, k3[f4 + 4 >> 2] = n5, k3[f4 + 24 >> 2] = 0, k3[f4 + 28 >> 2] = 0, k3[f4 + 48 >> 2] = 0, k3[f4 + 52 >> 2] = 0, k3[f4 + 44 >> 2] = f4, k3[f4 + 40 >> 2] = n5, k3[f4 + 36 >> 2] = f4, k3[f4 + 56 >> 2] = 0, k3[f4 + 60 >> 2] = 0, k3[f4 + 8 >> 2] = f4, a5 = n5, u3 = f4, (0 | (i4 = t4 = k3[e5 + 20 >> 2])) != (0 | (c3 = k3[r5 + 20 >> 2]))) {
                for (i4 = a5 = k3[i4 + 8 >> 2]; k3[i4 + 20 >> 2] = c3, (0 | a5) != (0 | (i4 = k3[i4 + 12 >> 2])); )
                  ;
                i4 = k3[t4 >> 2], a5 = k3[t4 + 4 >> 2], k3[i4 + 4 >> 2] = a5, k3[a5 >> 2] = i4, Y2(t4), o5 = k3[r5 + 4 >> 2], u3 = k3[f4 + 8 >> 2], a5 = k3[u3 + 4 >> 2], i4 = k3[r5 + 20 >> 2];
              }
              if (r5 = k3[r5 + 12 >> 2], s3 = k3[r5 + 8 >> 2], k3[a5 + 12 >> 2] = r5, k3[k3[s3 + 4 >> 2] + 12 >> 2] = f4, k3[f4 + 8 >> 2] = s3, k3[r5 + 8 >> 2] = u3, r5 = k3[e5 + 8 >> 2], a5 = k3[f4 + 40 >> 2], k3[k3[a5 + 4 >> 2] + 12 >> 2] = e5, k3[k3[r5 + 4 >> 2] + 12 >> 2] = n5, k3[f4 + 40 >> 2] = r5, k3[e5 + 8 >> 2] = a5, k3[f4 + 16 >> 2] = k3[o5 + 16 >> 2], r5 = k3[e5 + 16 >> 2], k3[f4 + 52 >> 2] = i4, k3[f4 + 48 >> 2] = r5, k3[f4 + 20 >> 2] = i4, k3[i4 + 8 >> 2] = n5, (0 | t4) == (0 | c3)) {
                if (!(r5 = T2(24)))
                  break r;
                for (e5 = k3[i4 + 4 >> 2], k3[r5 + 4 >> 2] = e5, k3[e5 >> 2] = r5, k3[r5 >> 2] = i4, k3[i4 + 4 >> 2] = r5, k3[r5 + 12 >> 2] = 0, k3[r5 + 16 >> 2] = 0, k3[r5 + 8 >> 2] = f4, b4[r5 + 20 | 0] = 0, b4[r5 + 21 | 0] = v3[i4 + 21 | 0], i4 = f4; k3[i4 + 20 >> 2] = r5, (0 | (i4 = k3[i4 + 12 >> 2])) != (0 | f4); )
                  ;
              }
              A3 = f4;
            }
          return A3;
        }
        function rr2(r5, e5, f4) {
          var i4 = 0, a5 = 0;
          if (f4 >>> 0 >= 512)
            _2(0 | r5, 0 | e5, 0 | f4);
          else {
            i4 = r5 + f4 | 0;
            r:
              if (3 & (r5 ^ e5))
                if (i4 >>> 0 < 4)
                  f4 = r5;
                else if ((a5 = i4 - 4 | 0) >>> 0 < r5 >>> 0)
                  f4 = r5;
                else
                  for (f4 = r5; b4[0 | f4] = v3[0 | e5], b4[f4 + 1 | 0] = v3[e5 + 1 | 0], b4[f4 + 2 | 0] = v3[e5 + 2 | 0], b4[f4 + 3 | 0] = v3[e5 + 3 | 0], e5 = e5 + 4 | 0, a5 >>> 0 >= (f4 = f4 + 4 | 0) >>> 0; )
                    ;
              else {
                e:
                  if (3 & r5)
                    if (f4)
                      for (f4 = r5; ; ) {
                        if (b4[0 | f4] = v3[0 | e5], e5 = e5 + 1 | 0, !(3 & (f4 = f4 + 1 | 0)))
                          break e;
                        if (!(f4 >>> 0 < i4 >>> 0))
                          break;
                      }
                    else
                      f4 = r5;
                  else
                    f4 = r5;
                if (!((r5 = -4 & i4) >>> 0 < 64 || (a5 = r5 + -64 | 0) >>> 0 < f4 >>> 0))
                  for (; k3[f4 >> 2] = k3[e5 >> 2], k3[f4 + 4 >> 2] = k3[e5 + 4 >> 2], k3[f4 + 8 >> 2] = k3[e5 + 8 >> 2], k3[f4 + 12 >> 2] = k3[e5 + 12 >> 2], k3[f4 + 16 >> 2] = k3[e5 + 16 >> 2], k3[f4 + 20 >> 2] = k3[e5 + 20 >> 2], k3[f4 + 24 >> 2] = k3[e5 + 24 >> 2], k3[f4 + 28 >> 2] = k3[e5 + 28 >> 2], k3[f4 + 32 >> 2] = k3[e5 + 32 >> 2], k3[f4 + 36 >> 2] = k3[e5 + 36 >> 2], k3[f4 + 40 >> 2] = k3[e5 + 40 >> 2], k3[f4 + 44 >> 2] = k3[e5 + 44 >> 2], k3[f4 + 48 >> 2] = k3[e5 + 48 >> 2], k3[f4 + 52 >> 2] = k3[e5 + 52 >> 2], k3[f4 + 56 >> 2] = k3[e5 + 56 >> 2], k3[f4 + 60 >> 2] = k3[e5 + 60 >> 2], e5 = e5 - -64 | 0, a5 >>> 0 >= (f4 = f4 - -64 | 0) >>> 0; )
                    ;
                if (r5 >>> 0 <= f4 >>> 0)
                  break r;
                for (; k3[f4 >> 2] = k3[e5 >> 2], e5 = e5 + 4 | 0, r5 >>> 0 > (f4 = f4 + 4 | 0) >>> 0; )
                  ;
              }
            if (f4 >>> 0 < i4 >>> 0)
              for (; b4[0 | f4] = v3[0 | e5], e5 = e5 + 1 | 0, (0 | i4) != (0 | (f4 = f4 + 1 | 0)); )
                ;
          }
        }
        function er2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0;
          if (n5 = r5, r5 = 0, (e5 = T2(64)) && (i4 = k3[n5 + 4 >> 2], a5 = k3[(f4 = i4 >>> 0 < n5 >>> 0 ? i4 : n5) + 4 >> 2], t4 = k3[a5 >> 2], k3[e5 + 32 >> 2] = t4, k3[k3[t4 + 4 >> 2] >> 2] = e5, k3[e5 >> 2] = f4, f4 = e5 + 32 | 0, k3[a5 >> 2] = f4, k3[e5 + 16 >> 2] = 0, k3[e5 + 20 >> 2] = 0, k3[e5 + 12 >> 2] = f4, k3[e5 + 4 >> 2] = f4, k3[e5 + 24 >> 2] = 0, k3[e5 + 28 >> 2] = 0, k3[e5 + 48 >> 2] = 0, k3[e5 + 52 >> 2] = 0, k3[e5 + 40 >> 2] = f4, k3[e5 + 36 >> 2] = e5, k3[e5 + 56 >> 2] = 0, k3[e5 + 60 >> 2] = 0, k3[e5 + 8 >> 2] = e5, a5 = k3[n5 + 12 >> 2], t4 = k3[a5 + 8 >> 2], k3[e5 + 44 >> 2] = a5, k3[k3[t4 + 4 >> 2] + 12 >> 2] = e5, k3[e5 + 8 >> 2] = t4, k3[a5 + 8 >> 2] = e5, a5 = k3[i4 + 16 >> 2], k3[e5 + 16 >> 2] = a5, i4 = T2(40))) {
            for (r5 = k3[a5 + 4 >> 2], k3[i4 + 4 >> 2] = r5, k3[r5 >> 2] = i4, k3[i4 >> 2] = a5, k3[a5 + 4 >> 2] = i4, k3[i4 + 12 >> 2] = 0, k3[i4 + 8 >> 2] = f4, r5 = f4; k3[r5 + 16 >> 2] = i4, (0 | f4) != (0 | (r5 = k3[r5 + 8 >> 2])); )
              ;
            r5 = k3[n5 + 20 >> 2], k3[e5 + 20 >> 2] = r5, k3[e5 + 52 >> 2] = r5, r5 = e5;
          }
          return r5 ? (e5 = k3[r5 + 4 >> 2], r5 = k3[n5 + 4 >> 2], f4 = k3[k3[r5 + 4 >> 2] + 12 >> 2], i4 = k3[f4 + 8 >> 2], a5 = k3[r5 + 8 >> 2], k3[k3[a5 + 4 >> 2] + 12 >> 2] = f4, k3[k3[i4 + 4 >> 2] + 12 >> 2] = r5, k3[r5 + 8 >> 2] = i4, k3[f4 + 8 >> 2] = a5, f4 = k3[e5 + 8 >> 2], i4 = k3[r5 + 8 >> 2], k3[k3[i4 + 4 >> 2] + 12 >> 2] = e5, k3[k3[f4 + 4 >> 2] + 12 >> 2] = r5, k3[r5 + 8 >> 2] = f4, k3[e5 + 8 >> 2] = i4, k3[r5 + 16 >> 2] = k3[e5 + 16 >> 2], f4 = k3[e5 + 4 >> 2], k3[k3[f4 + 16 >> 2] + 8 >> 2] = f4, k3[f4 + 20 >> 2] = k3[r5 + 20 >> 2], k3[e5 + 28 >> 2] = k3[n5 + 28 >> 2], k3[f4 + 28 >> 2] = k3[r5 + 28 >> 2], e5) : 0;
        }
        function fr2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0;
          if ((0 | (a5 = k3[40 + (r5 |= 0) >> 2])) != (0 | (b5 = r5 + 40 | 0)))
            for (; ; ) {
              if (u3 = k3[a5 >> 2], !v3[a5 + 21 | 0]) {
                for (o5 = k3[a5 + 8 >> 2], r5 = k3[o5 + 12 >> 2]; ; ) {
                  if (k3[r5 + 20 >> 2] = 0, t4 = k3[r5 + 12 >> 2], e5 = k3[r5 + 4 >> 2], !k3[e5 + 20 >> 2]) {
                    if (i4 = k3[r5 + 16 >> 2], (0 | (f4 = k3[r5 + 8 >> 2])) != (0 | r5))
                      k3[i4 + 8 >> 2] = f4, i4 = k3[e5 + 12 >> 2], n5 = k3[i4 + 8 >> 2], k3[k3[f4 + 4 >> 2] + 12 >> 2] = i4, k3[k3[n5 + 4 >> 2] + 12 >> 2] = r5, k3[r5 + 8 >> 2] = n5, k3[i4 + 8 >> 2] = f4;
                    else {
                      for (e5 = f4 = k3[i4 + 8 >> 2]; k3[e5 + 16 >> 2] = 0, (0 | f4) != (0 | (e5 = k3[e5 + 8 >> 2])); )
                        ;
                      e5 = k3[i4 >> 2], f4 = k3[i4 + 4 >> 2], k3[e5 + 4 >> 2] = f4, k3[f4 >> 2] = e5, Y2(i4), e5 = k3[r5 + 4 >> 2];
                    }
                    if (i4 = k3[e5 + 16 >> 2], (0 | (f4 = k3[e5 + 8 >> 2])) != (0 | e5))
                      k3[i4 + 8 >> 2] = f4, i4 = k3[k3[e5 + 4 >> 2] + 12 >> 2], n5 = k3[i4 + 8 >> 2], k3[k3[f4 + 4 >> 2] + 12 >> 2] = i4, k3[k3[n5 + 4 >> 2] + 12 >> 2] = e5, k3[e5 + 8 >> 2] = n5, k3[i4 + 8 >> 2] = f4;
                    else {
                      for (e5 = f4 = k3[i4 + 8 >> 2]; k3[e5 + 16 >> 2] = 0, (0 | f4) != (0 | (e5 = k3[e5 + 8 >> 2])); )
                        ;
                      e5 = k3[i4 >> 2], f4 = k3[i4 + 4 >> 2], k3[e5 + 4 >> 2] = f4, k3[f4 >> 2] = e5, Y2(i4), e5 = k3[r5 + 4 >> 2];
                    }
                    i4 = k3[(e5 = r5 >>> 0 > e5 >>> 0 ? e5 : r5) >> 2], f4 = k3[k3[e5 + 4 >> 2] >> 2], k3[k3[i4 + 4 >> 2] >> 2] = f4, k3[k3[f4 + 4 >> 2] >> 2] = i4, Y2(e5);
                  }
                  if (e5 = (0 | r5) != (0 | o5), r5 = t4, !e5)
                    break;
                }
                r5 = k3[a5 >> 2], t4 = k3[a5 + 4 >> 2], k3[r5 + 4 >> 2] = t4, k3[t4 >> 2] = r5, Y2(a5);
              }
              if ((0 | b5) == (0 | (a5 = u3)))
                break;
            }
        }
        function ir2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0;
          if ((0 | r5) != (0 | e5)) {
            if ((0 | (i4 = k3[e5 + 16 >> 2])) != (0 | (t4 = k3[r5 + 16 >> 2]))) {
              for (f4 = a5 = k3[i4 + 8 >> 2]; k3[f4 + 16 >> 2] = t4, (0 | a5) != (0 | (f4 = k3[f4 + 8 >> 2])); )
                ;
              f4 = k3[i4 >> 2], a5 = k3[i4 + 4 >> 2], k3[f4 + 4 >> 2] = a5, k3[a5 >> 2] = f4, Y2(i4);
            }
            if ((0 | (o5 = k3[r5 + 20 >> 2])) != (0 | (a5 = k3[e5 + 20 >> 2]))) {
              for (f4 = n5 = k3[a5 + 8 >> 2]; k3[f4 + 20 >> 2] = o5, (0 | n5) != (0 | (f4 = k3[f4 + 12 >> 2])); )
                ;
              f4 = k3[a5 >> 2], n5 = k3[a5 + 4 >> 2], k3[f4 + 4 >> 2] = n5, k3[n5 >> 2] = f4, Y2(a5);
            }
            if (f4 = k3[r5 + 8 >> 2], n5 = k3[e5 + 8 >> 2], k3[k3[n5 + 4 >> 2] + 12 >> 2] = r5, k3[k3[f4 + 4 >> 2] + 12 >> 2] = e5, k3[e5 + 8 >> 2] = f4, k3[r5 + 8 >> 2] = n5, (0 | i4) == (0 | t4)) {
              if (!(i4 = T2(40)))
                return 0;
              for (f4 = k3[r5 + 16 >> 2], t4 = k3[f4 + 4 >> 2], k3[i4 + 4 >> 2] = t4, k3[t4 >> 2] = i4, k3[i4 >> 2] = f4, k3[f4 + 4 >> 2] = i4, k3[i4 + 12 >> 2] = 0, k3[i4 + 8 >> 2] = e5, f4 = e5; k3[f4 + 16 >> 2] = i4, (0 | (f4 = k3[f4 + 8 >> 2])) != (0 | e5); )
                ;
              k3[k3[r5 + 16 >> 2] + 8 >> 2] = r5;
            }
            if ((0 | a5) == (0 | o5)) {
              if (!(i4 = T2(24)))
                return 0;
              for (f4 = k3[r5 + 20 >> 2], a5 = k3[f4 + 4 >> 2], k3[i4 + 4 >> 2] = a5, k3[a5 >> 2] = i4, k3[i4 >> 2] = f4, k3[f4 + 4 >> 2] = i4, k3[i4 + 12 >> 2] = 0, k3[i4 + 16 >> 2] = 0, k3[i4 + 8 >> 2] = e5, b4[i4 + 20 | 0] = 0, b4[i4 + 21 | 0] = v3[f4 + 21 | 0], f4 = e5; k3[f4 + 20 >> 2] = i4, (0 | (f4 = k3[f4 + 12 >> 2])) != (0 | e5); )
                ;
              k3[k3[r5 + 20 >> 2] + 8 >> 2] = r5;
            }
          }
          return 1;
        }
        function ar2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = m2(0), u3 = 0, c3 = 0, s3 = m2(0);
          if (k3[r5 + 20 >> 2]) {
            i4 = e5, f4 = k3[r5 >> 2], r5 = k3[f4 + 8 >> 2] + 1 | 0, k3[f4 + 8 >> 2] = r5;
            r: {
              if (!((0 | (e5 = k3[f4 + 12 >> 2])) >= r5 << 1)) {
                if (k3[f4 + 12 >> 2] = e5 << 1, a5 = k3[f4 + 4 >> 2], e5 = V2(n5 = k3[f4 >> 2], e5 << 3 | 4), k3[f4 >> 2] = e5, !e5) {
                  k3[f4 >> 2] = n5, a5 = 2147483647;
                  break r;
                }
                if (e5 = V2(k3[f4 + 4 >> 2], 8 + (k3[f4 + 12 >> 2] << 3) | 0), k3[f4 + 4 >> 2] = e5, !e5) {
                  k3[f4 + 4 >> 2] = a5, a5 = 2147483647;
                  break r;
                }
              }
              if (n5 = k3[f4 + 4 >> 2], a5 = r5, (e5 = k3[f4 + 16 >> 2]) && (k3[f4 + 16 >> 2] = k3[4 + (n5 + (e5 << 3) | 0) >> 2], a5 = e5), t4 = k3[f4 >> 2], k3[t4 + (r5 << 2) >> 2] = a5, k3[(b5 = n5 + (a5 << 3) | 0) >> 2] = i4, k3[b5 + 4 >> 2] = r5, k3[f4 + 20 >> 2]) {
                e:
                  if (r5 >>> 0 < 2)
                    e5 = r5;
                  else
                    for (o5 = w2[i4 + 28 >> 2]; ; ) {
                      if (f4 = k3[((e5 = r5 >> 1) << 2) + t4 >> 2], c3 = k3[(u3 = n5 + (f4 << 3) | 0) >> 2], (s3 = w2[c3 + 28 >> 2]) < o5) {
                        e5 = r5;
                        break e;
                      }
                      if (!(!(w2[c3 + 32 >> 2] <= w2[i4 + 32 >> 2]) | o5 != s3)) {
                        e5 = r5;
                        break e;
                      }
                      if (k3[(r5 << 2) + t4 >> 2] = f4, k3[u3 + 4 >> 2] = r5, !((r5 = e5) >>> 0 > 1))
                        break;
                    }
                k3[(e5 << 2) + t4 >> 2] = a5, k3[b5 + 4 >> 2] = e5;
              }
            }
            return a5;
          }
          if (i4 = (f4 = k3[r5 + 12 >> 2]) + 1 | 0, k3[r5 + 12 >> 2] = i4, a5 = k3[r5 + 4 >> 2], (0 | (n5 = i4)) < (0 | (i4 = k3[r5 + 16 >> 2])))
            i4 = a5;
          else if (k3[r5 + 16 >> 2] = i4 << 1, i4 = V2(a5, i4 << 3), k3[r5 + 4 >> 2] = i4, !i4)
            return k3[r5 + 4 >> 2] = a5, 2147483647;
          return k3[(f4 << 2) + i4 >> 2] = e5, -1 ^ f4;
        }
        function nr2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0;
          n5 = T2(40), t4 = T2(40);
          r: {
            if (!(i4 = T2(24)) || !n5 | !t4) {
              if (n5 && Y2(n5), t4 && Y2(t4), !i4)
                break r;
              return Y2(i4), 0;
            }
            if (!(e5 = T2(64)))
              return 0;
            for (f4 = k3[r5 + 68 >> 2], a5 = k3[(f4 = f4 >>> 0 < (a5 = r5 - -64 | 0) >>> 0 ? f4 : a5) + 4 >> 2], o5 = k3[a5 >> 2], k3[e5 + 32 >> 2] = o5, k3[k3[o5 + 4 >> 2] >> 2] = e5, k3[e5 >> 2] = f4, f4 = a5, a5 = e5 + 32 | 0, k3[f4 >> 2] = a5, k3[e5 + 16 >> 2] = 0, k3[e5 + 20 >> 2] = 0, k3[e5 + 12 >> 2] = a5, k3[e5 + 4 >> 2] = a5, k3[e5 + 24 >> 2] = 0, k3[e5 + 28 >> 2] = 0, k3[e5 + 48 >> 2] = 0, k3[e5 + 52 >> 2] = 0, k3[e5 + 44 >> 2] = e5, k3[e5 + 40 >> 2] = a5, k3[e5 + 36 >> 2] = e5, k3[e5 + 56 >> 2] = 0, k3[e5 + 60 >> 2] = 0, k3[e5 + 8 >> 2] = e5, f4 = k3[r5 + 4 >> 2], k3[n5 + 4 >> 2] = f4, k3[f4 >> 2] = n5, k3[n5 + 12 >> 2] = 0, k3[n5 + 8 >> 2] = e5, f4 = e5; k3[f4 + 16 >> 2] = n5, (0 | (f4 = k3[f4 + 8 >> 2])) != (0 | e5); )
              ;
            for (k3[t4 + 4 >> 2] = n5, k3[n5 >> 2] = t4, k3[t4 >> 2] = r5, k3[r5 + 4 >> 2] = t4, k3[t4 + 12 >> 2] = 0, k3[t4 + 8 >> 2] = a5, f4 = a5; k3[f4 + 16 >> 2] = t4, (0 | a5) != (0 | (f4 = k3[f4 + 8 >> 2])); )
              ;
            for (f4 = k3[r5 + 44 >> 2], k3[i4 + 4 >> 2] = f4, k3[f4 >> 2] = i4, k3[i4 >> 2] = r5 + 40, k3[r5 + 44 >> 2] = i4, k3[i4 + 12 >> 2] = 0, k3[i4 + 16 >> 2] = 0, k3[i4 + 8 >> 2] = e5, b4[i4 + 20 | 0] = 0, b4[i4 + 21 | 0] = v3[r5 + 61 | 0], f4 = e5; k3[f4 + 20 >> 2] = i4, (0 | (f4 = k3[f4 + 12 >> 2])) != (0 | e5); )
              ;
          }
          return e5;
        }
        function tr2(r5) {
          r5 |= 0;
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = m2(0);
          if ((e5 = T2(128)) && (k3[e5 + 8 >> 2] = 0, k3[e5 + 12 >> 2] = 0, f4 = e5 + 40 | 0, k3[e5 + 44 >> 2] = f4, k3[e5 + 48 >> 2] = 0, k3[e5 + 52 >> 2] = 0, k3[e5 + 40 >> 2] = f4, o4[e5 + 54 >> 1] = 0, o4[e5 + 56 >> 1] = 0, o4[e5 + 58 >> 1] = 0, o4[e5 + 60 >> 1] = 0, k3[e5 + 72 >> 2] = 0, k3[e5 + 76 >> 2] = 0, f4 = e5 + 96 | 0, k3[e5 + 68 >> 2] = f4, i4 = e5 - -64 | 0, k3[e5 + 64 >> 2] = i4, k3[e5 + 80 >> 2] = 0, k3[e5 + 84 >> 2] = 0, k3[e5 + 88 >> 2] = 0, k3[e5 + 92 >> 2] = 0, k3[e5 + 104 >> 2] = 0, k3[e5 + 108 >> 2] = 0, k3[e5 + 100 >> 2] = i4, k3[e5 + 96 >> 2] = f4, k3[e5 + 112 >> 2] = 0, k3[e5 + 116 >> 2] = 0, k3[e5 + 120 >> 2] = 0, k3[e5 + 124 >> 2] = 0, k3[e5 >> 2] = e5, k3[e5 + 4 >> 2] = e5), k3[r5 + 8 >> 2] = e5, !e5)
            return 0;
          r: {
            if ((0 | (e5 = k3[r5 + 112 >> 2])) > 0)
              for (a5 = 116 + ((e5 << 4) + r5 | 0) | 0, f4 = r5 + 116 | 0, e5 = k3[r5 + 4 >> 2]; ; ) {
                n5 = k3[f4 + 12 >> 2];
                e: {
                  if (!e5) {
                    if (i4 = 0, !(e5 = nr2(k3[r5 + 8 >> 2])))
                      break r;
                    if (ir2(e5, k3[e5 + 4 >> 2]))
                      break e;
                    break r;
                  }
                  if (!er2(e5))
                    return 0;
                  e5 = k3[e5 + 12 >> 2];
                }
                if (i4 = k3[e5 + 16 >> 2], k3[i4 + 12 >> 2] = n5, w2[i4 + 16 >> 2] = w2[f4 >> 2], t4 = w2[f4 + 4 >> 2], k3[i4 + 24 >> 2] = 0, w2[i4 + 20 >> 2] = t4, k3[e5 + 28 >> 2] = 1, k3[k3[e5 + 4 >> 2] + 28 >> 2] = -1, k3[r5 + 4 >> 2] = e5, !(a5 >>> 0 > (f4 = f4 + 16 | 0) >>> 0))
                  break;
              }
            b4[r5 + 108 | 0] = 0, k3[r5 + 112 >> 2] = 0, i4 = 1;
          }
          return 0 | i4;
        }
        function br2(r5, e5, f4) {
          e5 |= 0, f4 |= 0, 3 == (0 | (f4 = k3[1716 + (r5 |= 0) >> 2])) ? ke[k3[r5 + 88 >> 2]](5) : ke[0 | f4](5, k3[r5 + 1896 >> 2]), 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[e5 + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[e5 + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = k3[e5 + 20 >> 2];
          r:
            if (v3[f4 + 21 | 0])
              for (; ; ) {
                if (v3[f4 + 20 | 0])
                  break r;
                if (b4[f4 + 20 | 0] = 1, e5 = k3[k3[e5 + 12 >> 2] + 4 >> 2], 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[e5 + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[e5 + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = k3[e5 + 20 >> 2], !v3[f4 + 21 | 0] | v3[f4 + 20 | 0])
                  break r;
                if (b4[f4 + 20 | 0] = 1, e5 = k3[e5 + 8 >> 2], 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = k3[e5 + 20 >> 2], !v3[f4 + 21 | 0])
                  break;
              }
          6 == (0 | (e5 = k3[r5 + 1728 >> 2])) ? ke[k3[r5 + 100 >> 2]]() : ke[0 | e5](k3[r5 + 1896 >> 2]);
        }
        function or2(r5, e5) {
          e5 |= 0;
          var f4 = 0;
          if ((0 | (f4 = k3[(r5 |= 0) >> 2])) != (0 | e5))
            for (; ; ) {
              r:
                if (e5 >>> 0 > f4 >>> 0) {
                  e:
                    switch (0 | f4) {
                      case 0:
                        11 == (0 | (f4 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100151) : ke[0 | f4](100151, k3[r5 + 1896 >> 2]), k3[r5 >> 2] && or2(r5, 0), k3[r5 + 112 >> 2] = 0, f4 = 1, k3[r5 >> 2] = 1, b4[r5 + 108 | 0] = 0, k3[r5 + 1896 >> 2] = 0, k3[r5 + 8 >> 2] = 0;
                        break r;
                      case 1:
                        break e;
                      default:
                        break r;
                    }
                  if (11 == (0 | (f4 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100152) : ke[0 | f4](100152, k3[r5 + 1896 >> 2]), 1 != k3[r5 >> 2] && or2(r5, 1), k3[r5 >> 2] = 2, k3[r5 + 4 >> 2] = 0, f4 = 2, k3[r5 + 112 >> 2] <= 0)
                    break r;
                  b4[r5 + 108 | 0] = 1;
                } else {
                  e:
                    switch (f4 - 1 | 0) {
                      case 1:
                        11 == (0 | (f4 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100154) : ke[0 | f4](100154, k3[r5 + 1896 >> 2]), 2 != k3[r5 >> 2] && or2(r5, 2), f4 = 1, k3[r5 >> 2] = 1;
                        break r;
                      case 0:
                        break e;
                      default:
                        break r;
                    }
                  11 == (0 | (f4 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100153) : ke[0 | f4](100153, k3[r5 + 1896 >> 2]), (f4 = k3[r5 + 8 >> 2]) && Mr(f4), f4 = 0, k3[r5 + 8 >> 2] = 0, k3[r5 >> 2] = 0, k3[r5 + 4 >> 2] = 0;
                }
              if ((0 | e5) == (0 | f4))
                break;
            }
        }
        function kr2(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, o5 = 0;
          k3[r5 + 8 >> 2] = 7, k3[r5 + 4 >> 2] = 0, f4 = k3[e5 + 20 >> 2];
          r:
            if (v3[f4 + 21 | 0]) {
              a5 = e5;
              e: {
                f: {
                  for (; ; ) {
                    if (v3[f4 + 20 | 0])
                      break r;
                    if (b4[f4 + 20 | 0] = 1, k3[f4 + 16 >> 2] = i4, a5 = k3[k3[a5 + 12 >> 2] + 4 >> 2], i4 = k3[a5 + 20 >> 2], v3[i4 + 21 | 0]) {
                      if (v3[i4 + 20 | 0])
                        break f;
                      if (b4[i4 + 20 | 0] = 1, k3[i4 + 16 >> 2] = f4, n5 = n5 + 2 | 0, a5 = k3[a5 + 8 >> 2], f4 = k3[a5 + 20 >> 2], v3[f4 + 21 | 0])
                        continue;
                      break r;
                    }
                    break;
                  }
                  n5 |= 1;
                  break e;
                }
                n5 |= 1;
              }
              i4 = f4;
            } else
              a5 = e5;
          t4 = k3[e5 + 4 >> 2], f4 = k3[t4 + 20 >> 2];
          r:
            if (!(!v3[f4 + 21 | 0] | v3[f4 + 20 | 0])) {
              e: {
                f: {
                  for (; ; ) {
                    if (b4[f4 + 20 | 0] = 1, k3[f4 + 16 >> 2] = i4, e5 = k3[t4 + 12 >> 2], t4 = k3[e5 + 4 >> 2], i4 = k3[t4 + 20 >> 2], v3[i4 + 21 | 0]) {
                      if (v3[i4 + 20 | 0])
                        break f;
                      if (b4[i4 + 20 | 0] = 1, k3[i4 + 16 >> 2] = f4, o5 = o5 + 2 | 0, e5 = k3[k3[t4 + 8 >> 2] + 4 >> 2], t4 = k3[e5 + 4 >> 2], f4 = k3[t4 + 20 >> 2], !v3[f4 + 21 | 0])
                        break r;
                      if (!v3[f4 + 20 | 0])
                        continue;
                      break r;
                    }
                    break;
                  }
                  o5 |= 1;
                  break e;
                }
                o5 |= 1;
              }
              i4 = f4;
            }
          f4 = n5 + o5 | 0, k3[r5 >> 2] = f4;
          r: {
            if (1 & n5) {
              if (!(1 & o5))
                break r;
              k3[r5 >> 2] = f4 - 1, e5 = e5 + 8 | 0;
            } else
              e5 = a5 + 4 | 0;
            e5 = k3[e5 >> 2];
          }
          if (k3[r5 + 4 >> 2] = e5, i4)
            for (; b4[i4 + 20 | 0] = 0, i4 = k3[i4 + 16 >> 2]; )
              ;
        }
        function ur2(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, k4 = 0, u3 = 0, c3 = 0;
          r: {
            e: {
              f: {
                i: {
                  a: {
                    n: {
                      t: {
                        b: {
                          o: {
                            k: {
                              if (e5) {
                                if (!f4)
                                  break k;
                                break o;
                              }
                              Q2 = 0, r5 = (r5 >>> 0) / (f4 >>> 0) | 0;
                              break r;
                            }
                            if (!r5)
                              break b;
                            break t;
                          }
                          if (!(f4 - 1 & f4))
                            break n;
                          t4 = 0 - (n5 = (E2(f4) + 33 | 0) - E2(e5) | 0) | 0;
                          break i;
                        }
                        Q2 = 0, r5 = (e5 >>> 0) / 0 | 0;
                        break r;
                      }
                      if ((i4 = 32 - E2(e5) | 0) >>> 0 < 31)
                        break a;
                      break f;
                    }
                    if (1 == (0 | f4))
                      break e;
                    f4 = 31 & (n5 = re(f4)), (63 & n5) >>> 0 >= 32 ? r5 = e5 >>> f4 | 0 : (i4 = e5 >>> f4 | 0, r5 = ((1 << f4) - 1 & e5) << 32 - f4 | r5 >>> f4), Q2 = i4;
                    break r;
                  }
                  n5 = i4 + 1 | 0, t4 = 63 - i4 | 0;
                }
                if (a5 = 31 & (i4 = 63 & n5), i4 >>> 0 >= 32 ? (i4 = 0, b5 = e5 >>> a5 | 0) : (i4 = e5 >>> a5 | 0, b5 = ((1 << a5) - 1 & e5) << 32 - a5 | r5 >>> a5), a5 = 31 & (t4 &= 63), t4 >>> 0 >= 32 ? (e5 = r5 << a5, r5 = 0) : (e5 = (1 << a5) - 1 & r5 >>> 32 - a5 | e5 << a5, r5 <<= a5), n5)
                  for (c3 = -1 == (0 | (t4 = f4 - 1 | 0)) ? -1 : 0; o5 = i4 << 1 | b5 >>> 31, b5 = (i4 = b5 << 1 | e5 >>> 31) - (k4 = f4 & (a5 = c3 - (o5 + (i4 >>> 0 > t4 >>> 0) | 0) >> 31)) | 0, i4 = o5 - (i4 >>> 0 < k4 >>> 0) | 0, e5 = e5 << 1 | r5 >>> 31, r5 = u3 | r5 << 1, u3 = 1 & a5, n5 = n5 - 1 | 0; )
                    ;
                Q2 = e5 << 1 | r5 >>> 31, r5 = u3 | r5 << 1;
                break r;
              }
              r5 = 0, e5 = 0;
            }
            Q2 = e5;
          }
          return r5;
        }
        function cr2(r5, e5, f4) {
          e5 |= 0, f4 |= 0;
          var i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, u3 = 0;
          B2 = n5 = B2 - 32 | 0, i4 = k3[28 + (r5 |= 0) >> 2], k3[n5 + 16 >> 2] = i4, t4 = k3[r5 + 20 >> 2], k3[n5 + 28 >> 2] = f4, k3[n5 + 24 >> 2] = e5, e5 = t4 - i4 | 0, k3[n5 + 20 >> 2] = e5, t4 = e5 + f4 | 0, o5 = 2;
          r: {
            e: {
              e5 = n5 + 16 | 0, (i4 = 0 | I2(k3[r5 + 60 >> 2], 0 | e5, 2, n5 + 12 | 0)) ? (k3[806] = i4, i4 = -1) : i4 = 0;
              f: {
                if (i4)
                  i4 = e5;
                else
                  for (; ; ) {
                    if ((0 | (a5 = k3[n5 + 12 >> 2])) == (0 | t4))
                      break f;
                    if ((0 | a5) < 0) {
                      i4 = e5;
                      break e;
                    }
                    if (b5 = a5 - ((u3 = (b5 = k3[e5 + 4 >> 2]) >>> 0 < a5 >>> 0) ? b5 : 0) | 0, k3[(i4 = (u3 << 3) + e5 | 0) >> 2] = b5 + k3[i4 >> 2], k3[(e5 = (u3 ? 12 : 4) + e5 | 0) >> 2] = k3[e5 >> 2] - b5, t4 = t4 - a5 | 0, e5 = i4, o5 = o5 - u3 | 0, (a5 = 0 | I2(k3[r5 + 60 >> 2], 0 | e5, 0 | o5, n5 + 12 | 0)) ? (k3[806] = a5, a5 = -1) : a5 = 0, a5)
                      break;
                  }
                if (-1 != (0 | t4))
                  break e;
              }
              e5 = k3[r5 + 44 >> 2], k3[r5 + 28 >> 2] = e5, k3[r5 + 20 >> 2] = e5, k3[r5 + 16 >> 2] = e5 + k3[r5 + 48 >> 2], r5 = f4;
              break r;
            }
            k3[r5 + 28 >> 2] = 0, k3[r5 + 16 >> 2] = 0, k3[r5 + 20 >> 2] = 0, k3[r5 >> 2] = 32 | k3[r5 >> 2], r5 = 0, 2 != (0 | o5) && (r5 = f4 - k3[i4 + 4 >> 2] | 0);
          }
          return B2 = n5 + 32 | 0, 0 | r5;
        }
        function sr2(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = 0, b5 = m2(0), o5 = 0, u3 = m2(0), c3 = 0, s3 = 0, A3 = 0, l3 = 0, v4 = 0;
          if (a5 = k3[r5 + 4 >> 2], f4 = k3[r5 >> 2], i4 = k3[f4 + 4 >> 2], v4 = k3[(e5 = a5 + (i4 << 3) | 0) >> 2], !((0 | (n5 = k3[r5 + 8 >> 2])) <= 0) && (c3 = k3[(n5 << 2) + f4 >> 2], k3[f4 + 4 >> 2] = c3, k3[4 + (s3 = (c3 << 3) + a5 | 0) >> 2] = 1, k3[e5 >> 2] = 0, k3[e5 + 4 >> 2] = k3[r5 + 16 >> 2], A3 = n5 - 1 | 0, k3[r5 + 8 >> 2] = A3, k3[r5 + 16 >> 2] = i4, 1 != (0 | n5))) {
            for (e5 = 1; (0 | A3) <= (0 | (r5 = e5 << 1)) || (t4 = k3[(k3[((i4 = 1 | r5) << 2) + f4 >> 2] << 3) + a5 >> 2], b5 = w2[t4 + 28 >> 2], o5 = k3[(k3[(r5 << 2) + f4 >> 2] << 3) + a5 >> 2], !(b5 < (u3 = w2[o5 + 28 >> 2])) & (!(w2[t4 + 32 >> 2] <= w2[o5 + 32 >> 2]) | b5 != u3) || (r5 = i4)), !((0 | r5) >= (0 | n5) || (i4 = k3[s3 >> 2], b5 = w2[i4 + 28 >> 2], t4 = k3[(r5 << 2) + f4 >> 2], l3 = k3[(o5 = (t4 << 3) + a5 | 0) >> 2], b5 < (u3 = w2[l3 + 28 >> 2]) | b5 == u3 & w2[i4 + 32 >> 2] <= w2[l3 + 32 >> 2])); )
              k3[(e5 << 2) + f4 >> 2] = t4, k3[o5 + 4 >> 2] = e5, e5 = r5;
            k3[(e5 << 2) + f4 >> 2] = c3, k3[s3 + 4 >> 2] = e5;
          }
          return v4;
        }
        function Ar2(r5, e5, f4) {
          switch (e5 - 9 | 0) {
            case 0:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, void (k3[r5 >> 2] = k3[e5 >> 2]);
            case 6:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, e5 = o4[e5 >> 1], k3[r5 >> 2] = e5, void (k3[r5 + 4 >> 2] = e5 >> 31);
            case 7:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, k3[r5 >> 2] = d2[e5 >> 1], void (k3[r5 + 4 >> 2] = 0);
            case 8:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, e5 = b4[0 | e5], k3[r5 >> 2] = e5, void (k3[r5 + 4 >> 2] = e5 >> 31);
            case 9:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, k3[r5 >> 2] = v3[0 | e5], void (k3[r5 + 4 >> 2] = 0);
            case 16:
              return e5 = k3[f4 >> 2] + 7 & -8, k3[f4 >> 2] = e5 + 8, void (y2[r5 >> 3] = y2[e5 >> 3]);
            case 17:
              l2();
            default:
              return;
            case 1:
            case 4:
            case 14:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, e5 = k3[e5 >> 2], k3[r5 >> 2] = e5, void (k3[r5 + 4 >> 2] = e5 >> 31);
            case 2:
            case 5:
            case 11:
            case 15:
              return e5 = k3[f4 >> 2], k3[f4 >> 2] = e5 + 4, k3[r5 >> 2] = k3[e5 >> 2], void (k3[r5 + 4 >> 2] = 0);
            case 3:
            case 10:
            case 12:
            case 13:
          }
          e5 = k3[f4 >> 2] + 7 & -8, k3[f4 >> 2] = e5 + 8, f4 = k3[e5 + 4 >> 2], k3[r5 >> 2] = k3[e5 >> 2], k3[r5 + 4 >> 2] = f4;
        }
        function lr2(r5, e5, f4) {
          e5 |= 0, f4 |= 0, 3 == (0 | (f4 = k3[1716 + (r5 |= 0) >> 2])) ? ke[k3[r5 + 88 >> 2]](6) : ke[0 | f4](6, k3[r5 + 1896 >> 2]), 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[e5 + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[e5 + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = k3[e5 + 20 >> 2];
          r:
            if (v3[f4 + 21 | 0])
              for (; ; ) {
                if (v3[f4 + 20 | 0])
                  break r;
                if (b4[f4 + 20 | 0] = 1, e5 = k3[e5 + 8 >> 2], 5 == (0 | (f4 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2]) : ke[0 | f4](k3[k3[k3[e5 + 4 >> 2] + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), f4 = k3[e5 + 20 >> 2], !v3[f4 + 21 | 0])
                  break;
              }
          6 == (0 | (e5 = k3[r5 + 1728 >> 2])) ? ke[k3[r5 + 100 >> 2]]() : ke[0 | e5](k3[r5 + 1896 >> 2]);
        }
        function vr2(r5, e5, f4) {
          var i4 = 0, a5 = 0;
          if (f4 && (b4[0 | r5] = e5, b4[(i4 = r5 + f4 | 0) - 1 | 0] = e5, !(f4 >>> 0 < 3 || (b4[r5 + 2 | 0] = e5, b4[r5 + 1 | 0] = e5, b4[i4 - 3 | 0] = e5, b4[i4 - 2 | 0] = e5, f4 >>> 0 < 7 || (b4[r5 + 3 | 0] = e5, b4[i4 - 4 | 0] = e5, f4 >>> 0 < 9 || (a5 = (i4 = 0 - r5 & 3) + r5 | 0, r5 = p2(255 & e5, 16843009), k3[a5 >> 2] = r5, k3[(e5 = (f4 = f4 - i4 & -4) + a5 | 0) - 4 >> 2] = r5, f4 >>> 0 < 9 || (k3[a5 + 8 >> 2] = r5, k3[a5 + 4 >> 2] = r5, k3[e5 - 8 >> 2] = r5, k3[e5 - 12 >> 2] = r5, f4 >>> 0 < 25 || (k3[a5 + 24 >> 2] = r5, k3[a5 + 20 >> 2] = r5, k3[a5 + 16 >> 2] = r5, k3[a5 + 12 >> 2] = r5, k3[e5 - 16 >> 2] = r5, k3[e5 - 20 >> 2] = r5, k3[e5 - 24 >> 2] = r5, k3[e5 - 28 >> 2] = r5, (f4 = f4 - (e5 = 4 & a5 | 24) | 0) >>> 0 < 32))))))))
            for (r5 = Hr(r5, 0, 1, 1), i4 = Q2, e5 = e5 + a5 | 0; k3[e5 + 24 >> 2] = r5, k3[e5 + 28 >> 2] = i4, k3[e5 + 16 >> 2] = r5, k3[e5 + 20 >> 2] = i4, k3[e5 + 8 >> 2] = r5, k3[e5 + 12 >> 2] = i4, k3[e5 >> 2] = r5, k3[e5 + 4 >> 2] = i4, e5 = e5 + 32 | 0, (f4 = f4 - 32 | 0) >>> 0 > 31; )
              ;
        }
        function dr2(r5, e5, f4) {
          var i4 = m2(0), a5 = 0, n5 = 0, t4 = m2(0), b5 = m2(0), o5 = 0, u3 = m2(0), c3 = m2(0), s3 = m2(0);
          B2 = n5 = B2 + -64 | 0;
          r: {
            e: {
              if (!(!(o5 = (i4 = w2[e5 + 28 >> 2]) > (b5 = w2[r5 + 28 >> 2])) & (!(w2[r5 + 32 >> 2] <= w2[e5 + 32 >> 2]) | i4 != b5))) {
                if ((t4 = w2[f4 + 28 >> 2]) > i4 | i4 == t4 & w2[e5 + 32 >> 2] <= w2[f4 + 32 >> 2])
                  break r;
                if (a5 = 1, o5)
                  break e;
              }
              a5 = 0, i4 == b5 && (a5 = w2[r5 + 32 >> 2] <= w2[e5 + 32 >> 2]);
            }
            o5 = a5, a5 = 1, (t4 = w2[f4 + 28 >> 2]) > i4 || (a5 = 0, i4 == t4 && (a5 = w2[e5 + 32 >> 2] <= w2[f4 + 32 >> 2])), u3 = w2[r5 + 32 >> 2], c3 = w2[e5 + 32 >> 2], s3 = w2[f4 + 32 >> 2], y2[n5 + 40 >> 3] = t4, y2[n5 + 24 >> 3] = i4, y2[n5 + 48 >> 3] = s3, y2[n5 + 32 >> 3] = c3, y2[n5 + 16 >> 3] = u3, y2[n5 + 8 >> 3] = b5, k3[n5 + 4 >> 2] = a5, k3[n5 >> 2] = o5, zr(1092, n5), t4 = w2[f4 + 28 >> 2], b5 = w2[r5 + 28 >> 2], i4 = w2[e5 + 28 >> 2];
          }
          return u3 = m2(0), B2 = n5 - -64 | 0, b5 = m2(i4 - b5), i4 = m2(t4 - i4), m2(b5 + i4) > m2(0) && (t4 = w2[e5 + 32 >> 2], u3 = m2(m2(m2(t4 - w2[f4 + 32 >> 2]) * b5) + m2(i4 * m2(t4 - w2[r5 + 32 >> 2])))), u3;
        }
        function hr2(r5, e5, f4) {
          switch (e5 - 100100 | 0) {
            case 0:
              return void (k3[r5 + 88 >> 2] = f4 || 15);
            case 6:
              return void (k3[r5 + 1716 >> 2] = f4 || 3);
            case 4:
              return b4[r5 + 80 | 0] = 0 != (0 | f4), void (k3[r5 + 92 >> 2] = f4 || 14);
            case 10:
              return b4[r5 + 80 | 0] = 0 != (0 | f4), void (k3[r5 + 1720 >> 2] = f4 || 4);
            case 1:
              return void (k3[r5 + 96 >> 2] = f4 || 13);
            case 7:
              return void (k3[r5 + 1724 >> 2] = f4 || 5);
            case 2:
              return void (k3[r5 + 100 >> 2] = f4 || 12);
            case 8:
              return void (k3[r5 + 1728 >> 2] = f4 || 6);
            case 3:
              return void (k3[r5 + 12 >> 2] = f4 || 18);
            case 9:
              return void (k3[r5 + 1732 >> 2] = f4 || 11);
            case 5:
              return void (k3[r5 + 76 >> 2] = f4 || 17);
            case 11:
              return void (k3[r5 + 1736 >> 2] = f4 || 10);
            case 12:
              return void (k3[r5 + 104 >> 2] = f4 || 16);
          }
          11 == (0 | (e5 = k3[r5 + 1732 >> 2])) ? ke[k3[r5 + 12 >> 2]](100900) : ke[0 | e5](100900, k3[r5 + 1896 >> 2]);
        }
        function wr2(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0, t4 = 0;
          i4 = k3[e5 >> 2];
          r: {
            if ((0 | e5) != (0 | f4))
              for (; ; ) {
                if (b4[e5 + 15 | 0] = 0, t4 = k3[e5 + 4 >> 2], n5 = k3[k3[t4 + 8 >> 2] >> 2], a5 = k3[n5 >> 2], k3[a5 + 16 >> 2] != k3[i4 + 16 >> 2]) {
                  if (!v3[n5 + 15 | 0])
                    return r5 = v3[e5 + 12 | 0], f4 = k3[i4 + 20 >> 2], k3[f4 + 8 >> 2] = i4, b4[f4 + 21 | 0] = r5, k3[i4 + 24 >> 2] = 0, Nr(t4), Y2(e5), i4;
                  if (!(a5 = X2(k3[k3[i4 + 8 >> 2] + 4 >> 2], k3[a5 + 4 >> 2])))
                    break r;
                  if (!$2(k3[n5 >> 2]))
                    break r;
                  k3[n5 >> 2] = a5, b4[n5 + 15 | 0] = 0, k3[a5 + 24 >> 2] = n5;
                }
                if (k3[i4 + 8 >> 2] != (0 | a5)) {
                  if (!ir2(k3[k3[a5 + 4 >> 2] + 12 >> 2], a5))
                    break r;
                  if (!ir2(i4, a5))
                    break r;
                }
                if (a5 = v3[e5 + 12 | 0], i4 = k3[e5 >> 2], t4 = k3[i4 + 20 >> 2], k3[t4 + 8 >> 2] = i4, b4[t4 + 21 | 0] = a5, k3[i4 + 24 >> 2] = 0, Nr(k3[e5 + 4 >> 2]), Y2(e5), i4 = k3[n5 >> 2], (0 | f4) == (0 | (e5 = n5)))
                  break;
              }
            return i4;
          }
          Kr(r5 + 1740 | 0, 1), l2();
        }
        function yr2(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0;
          B2 = i4 = B2 - 48 | 0, k3[i4 + 24 >> 2] = 0, k3[i4 + 28 >> 2] = 0, k3[i4 + 16 >> 2] = 0, k3[i4 + 20 >> 2] = 0, k3[i4 + 8 >> 2] = 0, k3[i4 + 12 >> 2] = 0, k3[i4 >> 2] = 1056964608, k3[i4 + 4 >> 2] = 1056964608, a5 = k3[e5 + 16 >> 2], k3[i4 + 16 >> 2] = k3[a5 + 12 >> 2], k3[i4 + 20 >> 2] = k3[k3[f4 + 16 >> 2] + 12 >> 2], w2[i4 + 36 >> 2] = w2[a5 + 16 >> 2], w2[i4 + 40 >> 2] = w2[a5 + 20 >> 2], w2[i4 + 44 >> 2] = w2[a5 + 24 >> 2], k3[a5 + 12 >> 2] = 0, a5 = a5 + 12 | 0, 10 == (0 | (n5 = k3[r5 + 1736 >> 2])) ? ke[k3[r5 + 76 >> 2]](i4 + 36 | 0, i4 + 16 | 0, i4, a5) : ke[0 | n5](i4 + 36 | 0, i4 + 16 | 0, i4, a5, k3[r5 + 1896 >> 2]), k3[a5 >> 2] || (k3[a5 >> 2] = k3[i4 + 16 >> 2]), ir2(e5, f4) || (Kr(r5 + 1740 | 0, 1), l2()), B2 = i4 + 48 | 0;
        }
        function pr2(r5, e5) {
          r5 |= 0;
          var f4 = 0, i4 = 0, a5 = 0;
          if ((0 | (f4 = k3[40 + (e5 |= 0) >> 2])) != (0 | (i4 = e5 + 40 | 0)))
            for (; ; ) {
              if (v3[f4 + 21 | 0]) {
                for (3 == (0 | (e5 = k3[r5 + 1716 >> 2])) ? ke[k3[r5 + 88 >> 2]](2) : ke[0 | e5](2, k3[r5 + 1896 >> 2]), e5 = k3[f4 + 8 >> 2]; 5 == (0 | (a5 = k3[r5 + 1724 >> 2])) ? ke[k3[r5 + 96 >> 2]](k3[k3[e5 + 16 >> 2] + 12 >> 2]) : ke[0 | a5](k3[k3[e5 + 16 >> 2] + 12 >> 2], k3[r5 + 1896 >> 2]), (0 | (e5 = k3[e5 + 12 >> 2])) != k3[f4 + 8 >> 2]; )
                  ;
                6 == (0 | (e5 = k3[r5 + 1728 >> 2])) ? ke[k3[r5 + 100 >> 2]]() : ke[0 | e5](k3[r5 + 1896 >> 2]);
              }
              if ((0 | i4) == (0 | (f4 = k3[f4 >> 2])))
                break;
            }
        }
        function mr2(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0;
          if (B2 = i4 = B2 - 208 | 0, k3[i4 + 204 >> 2] = e5, vr2(e5 = i4 + 160 | 0, 0, 40), k3[i4 + 200 >> 2] = k3[i4 + 204 >> 2], !((0 | j2(0, r5, i4 + 200 | 0, i4 + 80 | 0, e5, f4)) < 0)) {
            e5 = k3[423] < 0, a5 = k3[404], k3[404] = -33 & a5;
            r: {
              e: {
                if (k3[416]) {
                  if (k3[408])
                    break e;
                } else
                  k3[416] = 80, k3[411] = 0, k3[408] = 0, k3[409] = 0, n5 = k3[415], k3[415] = i4;
                if (jr(1616))
                  break r;
              }
              j2(1616, r5, i4 + 200 | 0, i4 + 80 | 0, i4 + 160 | 0, f4);
            }
            n5 && (ke[k3[413]](1616, 0, 0), k3[416] = 0, k3[415] = n5, k3[411] = 0, k3[408] = 0, k3[409] = 0), k3[404] = k3[404] | 32 & a5;
          }
          B2 = i4 + 208 | 0;
        }
        function gr2(r5, e5) {
          if (!r5)
            return 0;
          r: {
            e: {
              if (r5) {
                if (e5 >>> 0 <= 127)
                  break e;
                if (k3[k3[845] >> 2]) {
                  if (e5 >>> 0 <= 2047) {
                    b4[r5 + 1 | 0] = 63 & e5 | 128, b4[0 | r5] = e5 >>> 6 | 192, r5 = 2;
                    break r;
                  }
                  if (!(57344 != (-8192 & e5) & e5 >>> 0 >= 55296)) {
                    b4[r5 + 2 | 0] = 63 & e5 | 128, b4[0 | r5] = e5 >>> 12 | 224, b4[r5 + 1 | 0] = e5 >>> 6 & 63 | 128, r5 = 3;
                    break r;
                  }
                  if (e5 - 65536 >>> 0 <= 1048575) {
                    b4[r5 + 3 | 0] = 63 & e5 | 128, b4[0 | r5] = e5 >>> 18 | 240, b4[r5 + 2 | 0] = e5 >>> 6 & 63 | 128, b4[r5 + 1 | 0] = e5 >>> 12 & 63 | 128, r5 = 4;
                    break r;
                  }
                } else if (57216 == (-128 & e5))
                  break e;
                k3[806] = 25, r5 = -1;
              } else
                r5 = 1;
              break r;
            }
            b4[0 | r5] = e5, r5 = 1;
          }
          return r5;
        }
        function Er(r5, e5, f4) {
          r5 |= 0, e5 |= 0, f4 |= 0;
          var i4 = 0, a5 = 0, n5 = m2(0), t4 = m2(0);
          return f4 = k3[f4 >> 2], i4 = k3[k3[f4 + 4 >> 2] + 16 >> 2], e5 = k3[e5 >> 2], (0 | (a5 = k3[k3[e5 + 4 >> 2] + 16 >> 2])) == (0 | (r5 = k3[r5 + 72 >> 2])) ? (0 | r5) == (0 | i4) ? (e5 = k3[e5 + 16 >> 2], n5 = w2[e5 + 28 >> 2], f4 = k3[f4 + 16 >> 2], !(n5 < (t4 = w2[f4 + 28 >> 2])) & (!(w2[e5 + 32 >> 2] <= w2[f4 + 32 >> 2]) | n5 != t4) ? dr2(r5, f4, e5) >= m2(0) | 0 : dr2(r5, e5, f4) <= m2(0) | 0) : dr2(i4, r5, k3[f4 + 16 >> 2]) <= m2(0) | 0 : (e5 = k3[e5 + 16 >> 2], (0 | r5) == (0 | i4) ? dr2(a5, r5, e5) >= m2(0) | 0 : Tr(a5, r5, e5) >= Tr(k3[k3[f4 + 4 >> 2] + 16 >> 2], r5, k3[f4 + 16 >> 2]) | 0);
        }
        function Cr(r5) {
          var e5 = 0, f4 = 0, i4 = 0, a5 = 0, n5 = 0, t4 = m2(0), b5 = m2(0);
          if (!(e5 = k3[r5 + 12 >> 2]))
            return sr2(k3[r5 >> 2]);
          if (i4 = k3[r5 + 8 >> 2], a5 = k3[k3[(i4 + (e5 << 2) | 0) - 4 >> 2] >> 2], f4 = k3[r5 >> 2], k3[f4 + 8 >> 2] && (n5 = k3[k3[f4 + 4 >> 2] + (k3[k3[f4 >> 2] + 4 >> 2] << 3) >> 2], !(!((t4 = w2[n5 + 28 >> 2]) < (b5 = w2[a5 + 28 >> 2])) & (!(w2[n5 + 32 >> 2] <= w2[a5 + 32 >> 2]) | t4 != b5))))
            return sr2(f4);
          for (f4 = i4 - 8 | 0, i4 = ((0 | e5) > 0 ? 1 : e5) - 1 | 0; ; ) {
            if ((0 | e5) < 2)
              return k3[r5 + 12 >> 2] = i4, a5;
            if (n5 = e5 << 2, e5 = e5 - 1 | 0, k3[k3[f4 + n5 >> 2] >> 2])
              break;
          }
          return k3[r5 + 12 >> 2] = e5, a5;
        }
        function Rr(r5, e5, f4) {
          e5 |= 0, f4 |= 0;
          var i4 = 0, a5 = 0, n5 = 0, t4 = 0;
          n5 = 1;
          r:
            if ((0 | (i4 = k3[64 + (r5 |= 0) >> 2])) != (0 | (a5 = r5 - -64 | 0))) {
              if (t4 = 0 - e5 | 0, !f4) {
                for (; ; )
                  if (r5 = v3[k3[i4 + 20 >> 2] + 21 | 0], k3[i4 + 28 >> 2] = (0 | r5) != v3[k3[k3[i4 + 4 >> 2] + 20 >> 2] + 21 | 0] ? r5 ? e5 : t4 : 0, (0 | a5) == (0 | (i4 = k3[i4 >> 2])))
                    break r;
              }
              for (; ; ) {
                if (r5 = k3[i4 >> 2], (0 | (f4 = v3[k3[i4 + 20 >> 2] + 21 | 0])) == v3[k3[k3[i4 + 4 >> 2] + 20 >> 2] + 21 | 0]) {
                  if (!$2(i4)) {
                    n5 = 0;
                    break r;
                  }
                } else
                  k3[i4 + 28 >> 2] = f4 ? e5 : t4;
                if ((0 | a5) == (0 | (i4 = r5)))
                  break;
              }
            }
          return 0 | n5;
        }
        function Ir(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0;
          if (!(32 & v3[0 | r5]))
            r: {
              if (!(i4 = k3[r5 + 16 >> 2])) {
                if (jr(r5))
                  break r;
                i4 = k3[r5 + 16 >> 2];
              }
              if (i4 - (a5 = k3[r5 + 20 >> 2]) >>> 0 < f4 >>> 0)
                ke[k3[r5 + 36 >> 2]](r5, e5, f4);
              else {
                e: {
                  f:
                    if (!(!f4 | k3[r5 + 80 >> 2] < 0)) {
                      for (i4 = f4; ; ) {
                        if (10 != v3[(n5 = e5 + i4 | 0) - 1 | 0]) {
                          if (i4 = i4 - 1 | 0)
                            continue;
                          break f;
                        }
                        break;
                      }
                      if (ke[k3[r5 + 36 >> 2]](r5, e5, i4) >>> 0 < i4 >>> 0)
                        break r;
                      f4 = f4 - i4 | 0, a5 = k3[r5 + 20 >> 2];
                      break e;
                    }
                  n5 = e5;
                }
                rr2(a5, n5, f4), k3[r5 + 20 >> 2] = k3[r5 + 20 >> 2] + f4;
              }
            }
        }
        function Sr(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0;
          (f4 = T2(16)) && (a5 = nr2(k3[r5 + 8 >> 2])) && (i4 = k3[a5 + 16 >> 2], w2[i4 + 32 >> 2] = e5, k3[i4 + 28 >> 2] = 2112929218, i4 = k3[k3[a5 + 4 >> 2] + 16 >> 2], w2[i4 + 32 >> 2] = e5, k3[i4 + 28 >> 2] = -34554430, k3[r5 + 72 >> 2] = i4, b4[f4 + 15 | 0] = 0, b4[f4 + 12 | 0] = 0, k3[f4 + 8 >> 2] = 0, k3[f4 >> 2] = a5, b4[f4 + 13 | 0] = 1, b4[f4 + 14 | 0] = 0, i4 = f4, f4 = Wr(a5 = k3[r5 + 64 >> 2], a5, f4), k3[i4 + 4 >> 2] = f4, f4) || (Kr(r5 + 1740 | 0, 1), l2());
        }
        function Mr(r5) {
          var e5 = 0, f4 = 0, i4 = 0;
          if ((0 | (e5 = k3[40 + (r5 |= 0) >> 2])) != (0 | (f4 = r5 + 40 | 0)))
            for (; i4 = k3[e5 >> 2], Y2(e5), (0 | f4) != (0 | (e5 = i4)); )
              ;
          if ((0 | (e5 = k3[r5 >> 2])) != (0 | r5))
            for (; i4 = k3[e5 >> 2], Y2(e5), (0 | (e5 = i4)) != (0 | r5); )
              ;
          if ((0 | (e5 = k3[r5 + 64 >> 2])) != (0 | (f4 = r5 - -64 | 0)))
            for (; i4 = k3[e5 >> 2], Y2(e5), (0 | f4) != (0 | (e5 = i4)); )
              ;
          Y2(r5);
        }
        function Pr(r5) {
          var e5 = 0, f4 = m2(0), i4 = m2(0);
          if (!(e5 = k3[r5 + 12 >> 2]))
            return r5 = k3[r5 >> 2], k3[k3[r5 + 4 >> 2] + (k3[k3[r5 >> 2] + 4 >> 2] << 3) >> 2];
          e5 = k3[k3[(k3[r5 + 8 >> 2] + (e5 << 2) | 0) - 4 >> 2] >> 2], r5 = k3[r5 >> 2];
          r: {
            if (k3[r5 + 8 >> 2]) {
              if (r5 = k3[k3[r5 + 4 >> 2] + (k3[k3[r5 >> 2] + 4 >> 2] << 3) >> 2], (f4 = w2[r5 + 28 >> 2]) < (i4 = w2[e5 + 28 >> 2]))
                break r;
              if (f4 == i4 && w2[r5 + 32 >> 2] <= w2[e5 + 32 >> 2])
                break r;
            }
            r5 = e5;
          }
          return r5;
        }
        function _r(r5, e5, f4, i4) {
          r5 |= 0, e5 |= 0, f4 |= 0, i4 |= 0, f4 = 0;
          r: {
            if (e5 = k3[456]) {
              if (!((f4 = k3[e5 >> 2]) >>> 0 < 100001)) {
                e5 = T2(12);
                break r;
              }
            } else
              e5 = T2(1200008), k3[e5 + 4 >> 2] = 12, k3[e5 >> 2] = 0, k3[456] = e5;
            k3[e5 >> 2] = f4 + 1, e5 = 8 + (p2(f4, 12) + e5 | 0) | 0;
          }
          w2[e5 >> 2] = w2[r5 >> 2], w2[e5 + 4 >> 2] = w2[r5 + 4 >> 2], w2[e5 + 8 >> 2] = w2[r5 + 8 >> 2], k3[i4 >> 2] = e5;
        }
        function Ur(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0, t4 = 0;
          if (e5)
            for (; n5 = f4 = f4 - 1 | 0, t4 = (a5 = r5) - Hr(r5 = ur2(r5, e5, 10), i4 = Q2, 10, 0) | 48, b4[0 | n5] = t4, a5 = e5 >>> 0 > 9, e5 = i4, a5; )
              ;
          if (r5)
            for (; e5 = (r5 >>> 0) / 10 | 0, b4[0 | (f4 = f4 - 1 | 0)] = r5 - p2(e5, 10) | 48, i4 = r5 >>> 0 > 9, r5 = e5, i4; )
              ;
          return f4;
        }
        function Br(r5, e5, f4, i4) {
          var a5 = 0, n5 = 0, t4 = 0;
          if (n5 = k3[980] + 1 | 0, k3[980] = n5, k3[r5 >> 2] = n5, i4)
            for (; ; ) {
              if (!k3[(a5 = (t4 << 3) + f4 | 0) >> 2])
                return k3[a5 >> 2] = n5, k3[a5 + 4 >> 2] = e5, k3[a5 + 8 >> 2] = 0, F2 = i4, f4;
              if ((0 | (t4 = t4 + 1 | 0)) == (0 | i4))
                break;
            }
          return a5 = r5, r5 = i4 << 1, e5 = Br(a5, e5, V2(f4, i4 << 4 | 8), r5), F2 = r5, e5;
        }
        function Fr(r5, e5) {
          var f4 = 0, i4 = 0, a5 = 0;
          if (A2(+r5), i4 = 0 | u2(1), a5 = 0 | u2(0), 2047 != (0 | (f4 = i4 >>> 20 & 2047))) {
            if (!f4)
              return 0 == r5 ? f4 = 0 : (r5 = Fr(18446744073709552e3 * r5, e5), f4 = k3[e5 >> 2] + -64 | 0), k3[e5 >> 2] = f4, r5;
            k3[e5 >> 2] = f4 - 1022, c2(0, 0 | a5), c2(1, -2146435073 & i4 | 1071644672), r5 = +s2();
          }
          return r5;
        }
        function Qr(r5) {
          var e5 = 0, f4 = 0, i4 = 0;
          if (b4[k3[r5 >> 2]] - 48 >>> 0 >= 10)
            return 0;
          for (; i4 = k3[r5 >> 2], f4 = -1, e5 >>> 0 <= 214748364 && (f4 = (0 | (f4 = b4[0 | i4] - 48 | 0)) > (2147483647 ^ (e5 = p2(e5, 10))) ? -1 : f4 + e5 | 0), k3[r5 >> 2] = i4 + 1, e5 = f4, b4[i4 + 1 | 0] - 48 >>> 0 < 10; )
            ;
          return e5;
        }
        function Tr(r5, e5, f4) {
          var i4 = m2(0), a5 = m2(0), n5 = 0, t4 = m2(0), b5 = m2(0);
          return i4 = w2[e5 + 28 >> 2], a5 = m2(i4 - w2[r5 + 28 >> 2]), i4 = m2(w2[f4 + 28 >> 2] - i4), (t4 = m2(a5 + i4)) > m2(0) ? (b5 = w2[((n5 = i4 > a5) ? r5 : f4) + 32 >> 2], i4 = m2(m2(m2(b5 - w2[(n5 ? f4 : r5) + 32 >> 2]) * m2((n5 ? a5 : i4) / t4)) + m2(w2[e5 + 32 >> 2] - b5))) : i4 = m2(0), i4;
        }
        function Hr(r5, e5, f4, i4) {
          var a5 = 0, n5 = 0, t4 = 0, b5 = 0, o5 = 0, k4 = 0;
          return k4 = p2(a5 = f4 >>> 16 | 0, n5 = r5 >>> 16 | 0), a5 = (65535 & (n5 = ((o5 = p2(t4 = 65535 & f4, b5 = 65535 & r5)) >>> 16 | 0) + p2(n5, t4) | 0)) + p2(a5, b5) | 0, Q2 = (p2(e5, f4) + k4 | 0) + p2(r5, i4) + (n5 >>> 16) + (a5 >>> 16) | 0, 65535 & o5 | a5 << 16;
        }
        function Wr(r5, e5, f4) {
          for (var i4 = 0; e5 = k3[e5 + 8 >> 2], (i4 = k3[e5 >> 2]) && !(0 | ke[k3[r5 + 16 >> 2]](k3[r5 + 12 >> 2], i4, f4)); )
            ;
          return (r5 = T2(12)) && (k3[r5 >> 2] = f4, f4 = k3[e5 + 4 >> 2], k3[r5 + 4 >> 2] = f4, k3[f4 + 8 >> 2] = r5, k3[r5 + 8 >> 2] = e5, k3[e5 + 4 >> 2] = r5), r5;
        }
        function xr(r5, e5, f4, i4, a5) {
          var n5 = 0;
          if (B2 = n5 = B2 - 256 | 0, !(73728 & a5 | (0 | f4) <= (0 | i4))) {
            if (vr2(n5, 255 & e5, (f4 = (i4 = f4 - i4 | 0) >>> 0 < 256) ? i4 : 256), !f4)
              for (; Ir(r5, n5, 256), (i4 = i4 - 256 | 0) >>> 0 > 255; )
                ;
            Ir(r5, n5, i4);
          }
          B2 = n5 + 256 | 0;
        }
        function jr(r5) {
          var e5 = 0;
          return e5 = k3[r5 + 72 >> 2], k3[r5 + 72 >> 2] = e5 - 1 | e5, 8 & (e5 = k3[r5 >> 2]) ? (k3[r5 >> 2] = 32 | e5, -1) : (k3[r5 + 4 >> 2] = 0, k3[r5 + 8 >> 2] = 0, e5 = k3[r5 + 44 >> 2], k3[r5 + 28 >> 2] = e5, k3[r5 + 20 >> 2] = e5, k3[r5 + 16 >> 2] = e5 + k3[r5 + 48 >> 2], 0);
        }
        function Or(r5, e5, f4) {
          var i4 = 0, a5 = 0, n5 = 0;
          r:
            if (f4)
              for (; ; ) {
                if (!(n5 = k3[(a5 = (i4 << 3) + e5 | 0) >> 2]))
                  break r;
                if ((0 | r5) == (0 | n5))
                  return k3[a5 + 4 >> 2];
                if ((0 | (i4 = i4 + 1 | 0)) == (0 | f4))
                  break;
              }
          return 0;
        }
        function Dr(r5) {
          var e5 = 0, f4 = 0;
          r: {
            if (!((r5 = (e5 = k3[440]) + (f4 = r5 + 7 & -8) | 0) >>> 0 <= e5 >>> 0 && f4)) {
              if (r5 >>> 0 <= ue() << 16 >>> 0)
                break r;
              if (0 | P2(0 | r5))
                break r;
            }
            return k3[806] = 48, -1;
          }
          return k3[440] = r5, e5;
        }
        function Gr(r5, e5) {
          r5 |= 0;
          var f4 = 0, i4 = 0;
          (0 | (f4 = k3[4 + (e5 |= 0) >> 2])) < k3[e5 + 8 >> 2] && (i4 = k3[e5 >> 2] + (p2(k3[e5 + 12 >> 2], f4) << 2) | 0, w2[i4 >> 2] = w2[r5 >> 2], w2[i4 + 4 >> 2] = w2[r5 + 4 >> 2], k3[e5 + 4 >> 2] = f4 + 1);
        }
        function Lr(r5, e5) {
          r5 |= 0, e5 |= 0;
          var f4 = m2(0), i4 = m2(0);
          if ((f4 = w2[r5 + 28 >> 2]) < (i4 = w2[e5 + 28 >> 2]))
            r5 = 1;
          else {
            if (f4 != i4)
              return 0;
            r5 = w2[r5 + 32 >> 2] <= w2[e5 + 32 >> 2];
          }
          return 0 | r5;
        }
        function Yr(r5) {
          var e5 = 0;
          (e5 = k3[r5 >> 2]) && (Y2(k3[e5 + 4 >> 2]), Y2(k3[e5 >> 2]), Y2(e5)), (e5 = k3[r5 + 8 >> 2]) && Y2(e5), (e5 = k3[r5 + 4 >> 2]) && Y2(e5), Y2(r5);
        }
        function Zr(r5) {
          r5 |= 0;
          var e5 = 0;
          B2 = e5 = B2 - 16 | 0, k3[e5 >> 2] = r5, B2 = r5 = B2 - 16 | 0, k3[r5 + 12 >> 2] = e5, mr2(1078, e5, 0), B2 = r5 + 16 | 0, B2 = e5 + 16 | 0;
        }
        function Jr(r5, e5, f4) {
          r5 |= 0, e5 = k3[20 + (e5 |= 0) >> 2], k3[e5 + 16 >> 2] = k3[r5 + 84 >> 2], k3[r5 + 84 >> 2] = e5, b4[e5 + 20 | 0] = 1;
        }
        function Nr(r5) {
          var e5 = 0, f4 = 0;
          e5 = k3[r5 + 4 >> 2], f4 = k3[r5 + 8 >> 2], k3[e5 + 8 >> 2] = f4, k3[f4 + 4 >> 2] = e5, Y2(r5);
        }
        function Vr(r5) {
          var e5 = 0;
          return (-1 >>> (e5 = 31 & r5) & -2) << e5 | (-1 << (r5 = 0 - r5 & 31) & -2) >>> r5;
        }
        function zr(r5, e5) {
          var f4 = 0;
          B2 = f4 = B2 - 16 | 0, k3[f4 + 12 >> 2] = e5, mr2(r5, e5, 40), B2 = f4 + 16 | 0;
        }
        function Kr(r5, e5) {
          r5 |= 0, e5 |= 0, k3[978] || (k3[978] = r5, k3[979] = e5), M2();
        }
        function qr(r5, e5) {
          r5 |= 0, e5 |= 0, k3[978] || (k3[978] = r5, k3[979] = e5);
        }
        function $r(r5, e5, f4, i4) {
          return Q2 = 0, 0;
        }
        function Xr(r5, e5, f4, i4, a5) {
        }
        function re(r5) {
          return r5 ? 31 - E2(r5 - 1 ^ r5) | 0 : 32;
        }
        function ee(r5, e5, f4, i4) {
        }
        function fe() {
          k3[845] = 3260, k3[827] = 42;
        }
        function ie(r5) {
          return 0;
        }
        function ae(r5, e5) {
        }
        function ne() {
          return 0 | B2;
        }
        function te(r5) {
          B2 = r5 |= 0;
        }
        function be(r5) {
        }
        function oe() {
        }
        f3 = v3, t3();
        var ke = e4([null, Jr, lr2, ae, ae, ae, be, br2, Lr, Er, Xr, ae, oe, be, be, be, be, ee, be, or2, J2, tr2, Kr, G2, O2, Rr, K2, pr2, L2, fr2, Mr, Gr, be, oe, _r, Zr, be, ie, cr2, $r, x2]);
        function ue() {
          return n4.byteLength / 65536 | 0;
        }
        function ce(r5) {
          r5 |= 0;
          var e5 = 0 | ue(), i4 = e5 + r5 | 0;
          if (e5 < i4 && i4 < 65536) {
            var t4 = new ArrayBuffer(p2(i4, 65536));
            new Int8Array(t4).set(b4), b4 = new Int8Array(t4), o4 = new Int16Array(t4), k3 = new Int32Array(t4), v3 = new Uint8Array(t4), d2 = new Uint16Array(t4), h2 = new Uint32Array(t4), w2 = new Float32Array(t4), y2 = new Float64Array(t4), n4 = t4, a4.buffer = n4, f3 = v3;
          }
          return e5;
        }
        return { j: fe, k: T2, l: Y2, m: ke, n: W2, o: qr, p: ne, q: te };
      }
      return v2(r3);
    }(e3);
  }, instantiate: function(r2, e3) {
    return { then: function(f3) {
      var i2 = new v.Module(r2);
      f3({ instance: new v.Instance(i2, e3) });
    } };
  }, RuntimeError: Error };
  function d(r2) {
    for (var e3 = atob(r2), f3 = new Uint8Array(e3.length), i2 = 0; i2 < e3.length; ++i2)
      f3[i2] = e3.charCodeAt(i2);
    return f3;
  }
  function h(r2) {
    if (j(r2))
      return d(r2.slice(x.length));
  }
  c = [], "object" != typeof v && H("no native wasm support detected");
  var w, y, p = false;
  function m() {
    var r2 = l.buffer;
    a2.HEAP8 = new Int8Array(r2), a2.HEAP16 = new Int16Array(r2), a2.HEAPU8 = w = new Uint8Array(r2), a2.HEAPU16 = new Uint16Array(r2), a2.HEAP32 = new Int32Array(r2), a2.HEAPU32 = y = new Uint32Array(r2), a2.HEAPF32 = new Float32Array(r2), a2.HEAPF64 = new Float64Array(r2);
  }
  var g = a2.INITIAL_MEMORY || 4194304;
  l = a2.wasmMemory ? a2.wasmMemory : new v.Memory({ initial: g / 65536, maximum: 32768 }), m(), g = l.buffer.byteLength;
  var E = [], C = [], R = [];
  function I() {
    if (a2.preRun)
      for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; )
        P(a2.preRun.shift());
    Z(E);
  }
  function S() {
    Z(C);
  }
  function M() {
    if (a2.postRun)
      for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; )
        U(a2.postRun.shift());
    Z(R);
  }
  function P(r2) {
    E.unshift(r2);
  }
  function _(r2) {
    C.unshift(r2);
  }
  function U(r2) {
    R.unshift(r2);
  }
  var B = 0, F = null;
  function Q(r2) {
    B++, a2.monitorRunDependencies?.(B);
  }
  function T(r2) {
    if (B--, a2.monitorRunDependencies?.(B), 0 == B && F) {
      var e3 = F;
      F = null, e3();
    }
  }
  function H(r2) {
    a2.onAbort?.(r2), A(r2 = "Aborted(" + r2 + ")"), p = true, r2 += ". Build with -sASSERTIONS for more info.";
    var e3 = new v.RuntimeError(r2);
    throw f2(e3), e3;
  }
  var W, x = "data:application/octet-stream;base64,", j = (r2) => r2.startsWith(x);
  function O(r2) {
    if (r2 == W && c)
      return new Uint8Array(c);
    var e3 = h(r2);
    if (e3)
      return e3;
    if (o2)
      return o2(r2);
    throw "both async and sync fetching of the wasm failed";
  }
  function D(r2) {
    return c || j(r2) || !t2 && !b2 || "function" != typeof fetch ? Promise.resolve().then(() => O(r2)) : fetch(r2, { credentials: "same-origin" }).then((e3) => {
      if (!e3.ok)
        throw "failed to load wasm binary file at '" + r2 + "'";
      return e3.arrayBuffer();
    }).catch(() => O(r2));
  }
  function G(r2, e3, f3) {
    return D(r2).then((r3) => v.instantiate(r3, e3)).then((r3) => r3).then(f3, (r3) => {
      A(`failed to asynchronously prepare wasm: ${r3}`), H(r3);
    });
  }
  function L(r2, e3, f3, i2) {
    return r2 || "function" != typeof v.instantiateStreaming || j(e3) || "function" != typeof fetch ? G(e3, f3, i2) : fetch(e3, { credentials: "same-origin" }).then((r3) => v.instantiateStreaming(r3, f3).then(i2, function(r4) {
      return A(`wasm streaming compile failed: ${r4}`), A("falling back to ArrayBuffer instantiation"), G(e3, f3, i2);
    }));
  }
  function Y() {
    var r2 = { a: ar };
    function e3(r3, e4) {
      return nr = r3.exports, J = nr.m, _(nr.j), T(), nr;
    }
    function i2(r3) {
      e3(r3.instance);
    }
    if (Q(), a2.instantiateWasm)
      try {
        return a2.instantiateWasm(r2, e3);
      } catch (n3) {
        A(`Module.instantiateWasm callback failed with error: ${n3}`), f2(n3);
      }
    return L(c, W, r2, i2).catch(f2), {};
  }
  j(W = "libtess-asm.wasm") || (W = u(W));
  var Z = (r2) => {
    for (; r2.length > 0; )
      r2.shift()(a2);
  };
  a2.noExitRuntime;
  var J, N = () => {
    throw 1 / 0;
  }, V = (r2, e3, f3) => w.copyWithin(r2, e3, e3 + f3), z = () => 2147483648, K = (r2) => {
    var e3 = (r2 - l.buffer.byteLength + 65535) / 65536;
    try {
      return l.grow(e3), m(), 1;
    } catch (f3) {
    }
  }, q = (r2) => {
    var e3 = w.length;
    r2 >>>= 0;
    var f3 = z();
    if (r2 > f3)
      return false;
    for (var i2 = (r3, e4) => r3 + (e4 - r3 % e4) % e4, a3 = 1; a3 <= 4; a3 *= 2) {
      var n3 = e3 * (1 + 0.2 / a3);
      n3 = Math.min(n3, r2 + 100663296);
      var t3 = Math.min(f3, i2(Math.max(r2, n3), 65536));
      if (K(t3))
        return true;
    }
    return false;
  }, $ = [null, [], []], X = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, rr = (r2, e3, f3) => {
    for (var i2 = e3 + f3, a3 = e3; r2[a3] && !(a3 >= i2); )
      ++a3;
    if (a3 - e3 > 16 && r2.buffer && X)
      return X.decode(r2.subarray(e3, a3));
    for (var n3 = ""; e3 < a3; ) {
      var t3 = r2[e3++];
      if (128 & t3) {
        var b3 = 63 & r2[e3++];
        if (192 != (224 & t3)) {
          var o3 = 63 & r2[e3++];
          if ((t3 = 224 == (240 & t3) ? (15 & t3) << 12 | b3 << 6 | o3 : (7 & t3) << 18 | b3 << 12 | o3 << 6 | 63 & r2[e3++]) < 65536)
            n3 += String.fromCharCode(t3);
          else {
            var k2 = t3 - 65536;
            n3 += String.fromCharCode(55296 | k2 >> 10, 56320 | 1023 & k2);
          }
        } else
          n3 += String.fromCharCode((31 & t3) << 6 | b3);
      } else
        n3 += String.fromCharCode(t3);
    }
    return n3;
  }, er = (r2, e3) => {
    var f3 = $[r2];
    0 === e3 || 10 === e3 ? ((1 === r2 ? s : A)(rr(f3, 0)), f3.length = 0) : f3.push(e3);
  }, fr = [], ir = (r2) => {
    var e3 = fr[r2];
    return e3 || (r2 >= fr.length && (fr.length = r2 + 1), fr[r2] = e3 = J.get(r2)), e3;
  }, ar = { f: N, h: V, g: q, d: (r2, e3, f3, i2) => {
    for (var a3 = 0, n3 = 0; n3 < f3; n3++) {
      var t3 = y[e3 >> 2], b3 = y[e3 + 4 >> 2];
      e3 += 8;
      for (var o3 = 0; o3 < b3; o3++)
        er(r2, w[t3 + o3]);
      a3 += b3;
    }
    return y[i2 >> 2] = a3, 0;
  }, c: sr, i: Ar, e: cr, b: ur, a: l }, nr = Y();
  a2._malloc = (r2) => (a2._malloc = nr.k)(r2), a2._free = (r2) => (a2._free = nr.l)(r2), a2._triangulate = (r2, e3, f3, i2, n3, t3) => (a2._triangulate = nr.n)(r2, e3, f3, i2, n3, t3);
  var tr, br = (r2, e3) => (br = nr.o)(r2, e3), or = () => (or = nr.p)(), kr = (r2) => (kr = nr.q)(r2);
  function ur(r2, e3, f3) {
    var i2 = or();
    try {
      ir(r2)(e3, f3);
    } catch (a3) {
      if (kr(i2), a3 !== a3 + 0)
        throw a3;
      br(1, 0);
    }
  }
  function cr(r2, e3) {
    var f3 = or();
    try {
      ir(r2)(e3);
    } catch (i2) {
      if (kr(f3), i2 !== i2 + 0)
        throw i2;
      br(1, 0);
    }
  }
  function sr(r2, e3) {
    var f3 = or();
    try {
      return ir(r2)(e3);
    } catch (i2) {
      if (kr(f3), i2 !== i2 + 0)
        throw i2;
      br(1, 0);
    }
  }
  function Ar(r2, e3, f3, i2) {
    var a3 = or();
    try {
      return ir(r2)(e3, f3, i2);
    } catch (n3) {
      if (kr(a3), n3 !== n3 + 0)
        throw n3;
      br(1, 0);
    }
  }
  function lr() {
    function r2() {
      tr || (tr = true, a2.calledRun = true, p || (S(), e2(a2), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), M()));
    }
    B > 0 || (I(), B > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a2.setStatus("");
      }, 1), r2();
    }, 1)) : r2()));
  }
  if (F = function r2() {
    tr || lr(), tr || (F = r2);
  }, a2.preInit)
    for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
      a2.preInit.pop()();
  lr();
  let vr = null, dr = null, hr = null, wr = null;
  const yr = 2, pr = 4e3;
  let mr = 0;
  const gr = (r2, e3, f3) => {
    vr || (vr = a2._triangulate);
    let i2 = a2.HEAPF32;
    const n3 = a2.HEAP32.BYTES_PER_ELEMENT, t3 = 2, b3 = i2.BYTES_PER_ELEMENT;
    f3 > mr && (mr = f3, hr && (a2._free(hr), hr = 0), dr && (a2._free(dr), dr = 0)), hr || (hr = a2._malloc(f3 * b3)), wr || (wr = a2._malloc(pr * n3));
    const o3 = f3 * yr;
    dr || (dr = a2._malloc(o3 * b3)), i2 = a2.HEAPF32, i2.set(r2, hr / b3), a2.HEAP32.set(e3, wr / n3);
    const k2 = o3 / t3, u2 = vr(hr, wr, Math.min(e3.length, pr), t3, dr, k2), c2 = u2 * t3;
    i2 = a2.HEAPF32;
    const s2 = i2.slice(dr / b3, dr / b3 + c2), A2 = {};
    return A2.buffer = s2, A2.vertexCount = u2, A2;
  };
  return a2.triangulate = gr, r.ready;
}, f.exports = a;
var t = n.exports;
const b = e({ __proto__: null, default: o(t) }, [t]);
export {
  b as l
};
