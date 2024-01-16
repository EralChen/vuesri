import { aN as o$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function r(e, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    const n2 = r2[t2];
    if ("string" != typeof n2 && !Array.isArray(n2)) {
      for (const r3 in n2)
        if ("default" !== r3 && !(r3 in e)) {
          const t3 = Object.getOwnPropertyDescriptor(n2, r3);
          t3 && Object.defineProperty(e, r3, t3.get ? t3 : { enumerable: true, get: () => n2[r3] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var t, n, o, a = { exports: {} };
a.exports, t = a, a.exports, n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, o = function(e) {
  var r2, t2, o2 = void 0 !== (e = e || {}) ? e : {};
  o2.ready = new Promise(function(e2, n2) {
    r2 = e2, t2 = n2;
  });
  var a2, i2, s2, u = Object.assign({}, o2), c = "./this.program", f = true, l = "";
  function d(e2) {
    return o2.locateFile ? o2.locateFile(e2, l) : l + e2;
  }
  "undefined" != typeof document && document.currentScript && (l = document.currentScript.src), n && (l = n), l = 0 !== l.indexOf("blob:") ? l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a2 = (e2) => {
    var r3 = new XMLHttpRequest();
    return r3.open("GET", e2, false), r3.send(null), r3.responseText;
  }, i2 = (e2, r3, t3) => {
    var n2 = new XMLHttpRequest();
    n2.open("GET", e2, true), n2.responseType = "arraybuffer", n2.onload = () => {
      200 == n2.status || 0 == n2.status && n2.response ? r3(n2.response) : t3();
    }, n2.onerror = t3, n2.send(null);
  };
  var m, p, h = o2.print || console.log.bind(console), v = o2.printErr || console.warn.bind(console);
  Object.assign(o2, u), u = null, o2.arguments && o2.arguments, o2.thisProgram && (c = o2.thisProgram), o2.quit && o2.quit, o2.wasmBinary && (m = o2.wasmBinary), o2.noExitRuntime, "object" != typeof WebAssembly && Q("no native wasm support detected");
  var _ = false;
  function g(e2, r3) {
    e2 || Q(r3);
  }
  var y, w, E, b, k, x, S, D, F, A, P = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  function C(e2, r3, t3) {
    for (var n2 = r3 + t3, o3 = r3; e2[o3] && !(o3 >= n2); )
      ++o3;
    if (o3 - r3 > 16 && e2.buffer && P)
      return P.decode(e2.subarray(r3, o3));
    for (var a3 = ""; r3 < o3; ) {
      var i3 = e2[r3++];
      if (128 & i3) {
        var s3 = 63 & e2[r3++];
        if (192 != (224 & i3)) {
          var u2 = 63 & e2[r3++];
          if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | s3 << 6 | u2 : (7 & i3) << 18 | s3 << 12 | u2 << 6 | 63 & e2[r3++]) < 65536)
            a3 += String.fromCharCode(i3);
          else {
            var c2 = i3 - 65536;
            a3 += String.fromCharCode(55296 | c2 >> 10, 56320 | 1023 & c2);
          }
        } else
          a3 += String.fromCharCode((31 & i3) << 6 | s3);
      } else
        a3 += String.fromCharCode(i3);
    }
    return a3;
  }
  function T(e2, r3) {
    return e2 ? C(E, e2, r3) : "";
  }
  function j(e2, r3, t3, n2) {
    if (!(n2 > 0))
      return 0;
    for (var o3 = t3, a3 = t3 + n2 - 1, i3 = 0; i3 < e2.length; ++i3) {
      var s3 = e2.charCodeAt(i3);
      if (s3 >= 55296 && s3 <= 57343 && (s3 = 65536 + ((1023 & s3) << 10) | 1023 & e2.charCodeAt(++i3)), s3 <= 127) {
        if (t3 >= a3)
          break;
        r3[t3++] = s3;
      } else if (s3 <= 2047) {
        if (t3 + 1 >= a3)
          break;
        r3[t3++] = 192 | s3 >> 6, r3[t3++] = 128 | 63 & s3;
      } else if (s3 <= 65535) {
        if (t3 + 2 >= a3)
          break;
        r3[t3++] = 224 | s3 >> 12, r3[t3++] = 128 | s3 >> 6 & 63, r3[t3++] = 128 | 63 & s3;
      } else {
        if (t3 + 3 >= a3)
          break;
        r3[t3++] = 240 | s3 >> 18, r3[t3++] = 128 | s3 >> 12 & 63, r3[t3++] = 128 | s3 >> 6 & 63, r3[t3++] = 128 | 63 & s3;
      }
    }
    return r3[t3] = 0, t3 - o3;
  }
  function B(e2, r3, t3) {
    return j(e2, E, r3, t3);
  }
  function M(e2) {
    for (var r3 = 0, t3 = 0; t3 < e2.length; ++t3) {
      var n2 = e2.charCodeAt(t3);
      n2 >= 55296 && n2 <= 57343 && (n2 = 65536 + ((1023 & n2) << 10) | 1023 & e2.charCodeAt(++t3)), n2 <= 127 ? ++r3 : r3 += n2 <= 2047 ? 2 : n2 <= 65535 ? 3 : 4;
    }
    return r3;
  }
  function L(e2) {
    y = e2, o2.HEAP8 = w = new Int8Array(e2), o2.HEAP16 = b = new Int16Array(e2), o2.HEAP32 = x = new Int32Array(e2), o2.HEAPU8 = E = new Uint8Array(e2), o2.HEAPU16 = k = new Uint16Array(e2), o2.HEAPU32 = S = new Uint32Array(e2), o2.HEAPF32 = D = new Float32Array(e2), o2.HEAPF64 = F = new Float64Array(e2);
  }
  o2.INITIAL_MEMORY;
  var R = [], I = [], N = [];
  function O() {
    if (o2.preRun)
      for ("function" == typeof o2.preRun && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        Z(o2.preRun.shift());
    ae(R);
  }
  function z() {
    o2.noFSInit || we.init.initialized || we.init(), we.ignorePermissions = false, ae(I);
  }
  function W() {
    if (o2.postRun)
      for ("function" == typeof o2.postRun && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        U(o2.postRun.shift());
    ae(N);
  }
  function Z(e2) {
    R.unshift(e2);
  }
  function H(e2) {
    I.unshift(e2);
  }
  function U(e2) {
    N.unshift(e2);
  }
  var q = 0, V = null;
  function G(e2) {
    return e2;
  }
  function Y(e2) {
    q++, o2.monitorRunDependencies && o2.monitorRunDependencies(q);
  }
  function X(e2) {
    if (q--, o2.monitorRunDependencies && o2.monitorRunDependencies(q), 0 == q && V) {
      var r3 = V;
      V = null, r3();
    }
  }
  function Q(e2) {
    o2.onAbort && o2.onAbort(e2), v(e2 = "Aborted(" + e2 + ")"), _ = true, e2 += ". Build with -sASSERTIONS for more info.";
    var r3 = new WebAssembly.RuntimeError(e2);
    throw t2(r3), r3;
  }
  var K, J, $, ee = "data:application/octet-stream;base64,";
  function re(e2) {
    return e2.startsWith(ee);
  }
  function te(e2) {
    try {
      if (e2 == K && m)
        return new Uint8Array(m);
      if (!s2)
        throw "both async and sync fetching of the wasm failed";
    } catch (v2) {
      Q(v2);
    }
  }
  function ne() {
    return !m && f && "function" == typeof fetch ? fetch(K, { credentials: "same-origin" }).then(function(e2) {
      if (!e2.ok)
        throw "failed to load wasm binary file at '" + K + "'";
      return e2.arrayBuffer();
    }).catch(function() {
      return te(K);
    }) : Promise.resolve().then(function() {
      return te(K);
    });
  }
  function oe() {
    var e2 = { a: po };
    function r3(e3, r4) {
      var t3 = e3.exports;
      o2.asm = t3, L((p = o2.asm.Za).buffer), A = o2.asm.$a, H(o2.asm._a), X();
    }
    function n2(e3) {
      r3(e3.instance);
    }
    function a3(r4) {
      return ne().then(function(r5) {
        return WebAssembly.instantiate(r5, e2);
      }).then(function(e3) {
        return e3;
      }).then(r4, function(e3) {
        v("failed to asynchronously prepare wasm: " + e3), Q(e3);
      });
    }
    function i3() {
      return m || "function" != typeof WebAssembly.instantiateStreaming || re(K) || "function" != typeof fetch ? a3(n2) : fetch(K, { credentials: "same-origin" }).then(function(r4) {
        return WebAssembly.instantiateStreaming(r4, e2).then(n2, function(e3) {
          return v("wasm streaming compile failed: " + e3), v("falling back to ArrayBuffer instantiation"), a3(n2);
        });
      });
    }
    if (Y(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(e2, r3);
      } catch (s3) {
        return v("Module.instantiateWasm callback failed with error: " + s3), false;
      }
    return i3().catch(t2), {};
  }
  function ae(e2) {
    for (; e2.length > 0; )
      e2.shift()(o2);
  }
  function ie(e2, r3) {
    w.set(e2, r3);
  }
  function se(e2, r3, t3, n2) {
    Q("Assertion failed: " + T(e2) + ", at: " + [r3 ? T(r3) : "unknown filename", t3, n2 ? T(n2) : "unknown function"]);
  }
  function ue(e2) {
    return vo(e2 + 24) + 24;
  }
  function ce(e2) {
    this.excPtr = e2, this.ptr = e2 - 24, this.set_type = function(e3) {
      S[this.ptr + 4 >> 2] = e3;
    }, this.get_type = function() {
      return S[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e3) {
      S[this.ptr + 8 >> 2] = e3;
    }, this.get_destructor = function() {
      return S[this.ptr + 8 >> 2];
    }, this.set_refcount = function(e3) {
      x[this.ptr >> 2] = e3;
    }, this.set_caught = function(e3) {
      e3 = e3 ? 1 : 0, w[this.ptr + 12 >> 0] = e3;
    }, this.get_caught = function() {
      return 0 != w[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(e3) {
      e3 = e3 ? 1 : 0, w[this.ptr + 13 >> 0] = e3;
    }, this.get_rethrown = function() {
      return 0 != w[this.ptr + 13 >> 0];
    }, this.init = function(e3, r3) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(r3), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
    }, this.add_ref = function() {
      var e3 = x[this.ptr >> 2];
      x[this.ptr >> 2] = e3 + 1;
    }, this.release_ref = function() {
      var e3 = x[this.ptr >> 2];
      return x[this.ptr >> 2] = e3 - 1, 1 === e3;
    }, this.set_adjusted_ptr = function(e3) {
      S[this.ptr + 16 >> 2] = e3;
    }, this.get_adjusted_ptr = function() {
      return S[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (wo(this.get_type()))
        return S[this.excPtr >> 2];
      var e3 = this.get_adjusted_ptr();
      return 0 !== e3 ? e3 : this.excPtr;
    };
  }
  function fe(e2, r3, t3) {
    throw new ce(e2).init(r3, t3), e2;
  }
  function le(e2) {
    return x[yo() >> 2] = e2, e2;
  }
  re(K = "vxlLayer.wasm") || (K = d(K));
  var de = { isAbs: (e2) => "/" === e2.charAt(0), splitPath: (e2) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e2).slice(1), normalizeArray: (e2, r3) => {
    for (var t3 = 0, n2 = e2.length - 1; n2 >= 0; n2--) {
      var o3 = e2[n2];
      "." === o3 ? e2.splice(n2, 1) : ".." === o3 ? (e2.splice(n2, 1), t3++) : t3 && (e2.splice(n2, 1), t3--);
    }
    if (r3)
      for (; t3; t3--)
        e2.unshift("..");
    return e2;
  }, normalize: (e2) => {
    var r3 = de.isAbs(e2), t3 = "/" === e2.substr(-1);
    return (e2 = de.normalizeArray(e2.split("/").filter((e3) => !!e3), !r3).join("/")) || r3 || (e2 = "."), e2 && t3 && (e2 += "/"), (r3 ? "/" : "") + e2;
  }, dirname: (e2) => {
    var r3 = de.splitPath(e2), t3 = r3[0], n2 = r3[1];
    return t3 || n2 ? (n2 && (n2 = n2.substr(0, n2.length - 1)), t3 + n2) : ".";
  }, basename: (e2) => {
    if ("/" === e2)
      return "/";
    var r3 = (e2 = (e2 = de.normalize(e2)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === r3 ? e2 : e2.substr(r3 + 1);
  }, join: function() {
    var e2 = Array.prototype.slice.call(arguments, 0);
    return de.normalize(e2.join("/"));
  }, join2: (e2, r3) => de.normalize(e2 + "/" + r3) };
  function me() {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
      var e2 = new Uint8Array(1);
      return function() {
        return crypto.getRandomValues(e2), e2[0];
      };
    }
    return function() {
      Q("randomDevice");
    };
  }
  var pe = { resolve: function() {
    for (var e2 = "", r3 = false, t3 = arguments.length - 1; t3 >= -1 && !r3; t3--) {
      var n2 = t3 >= 0 ? arguments[t3] : we.cwd();
      if ("string" != typeof n2)
        throw new TypeError("Arguments to path.resolve must be strings");
      if (!n2)
        return "";
      e2 = n2 + "/" + e2, r3 = de.isAbs(n2);
    }
    return (r3 ? "/" : "") + (e2 = de.normalizeArray(e2.split("/").filter((e3) => !!e3), !r3).join("/")) || ".";
  }, relative: (e2, r3) => {
    function t3(e3) {
      for (var r4 = 0; r4 < e3.length && "" === e3[r4]; r4++)
        ;
      for (var t4 = e3.length - 1; t4 >= 0 && "" === e3[t4]; t4--)
        ;
      return r4 > t4 ? [] : e3.slice(r4, t4 - r4 + 1);
    }
    e2 = pe.resolve(e2).substr(1), r3 = pe.resolve(r3).substr(1);
    for (var n2 = t3(e2.split("/")), o3 = t3(r3.split("/")), a3 = Math.min(n2.length, o3.length), i3 = a3, s3 = 0; s3 < a3; s3++)
      if (n2[s3] !== o3[s3]) {
        i3 = s3;
        break;
      }
    var u2 = [];
    for (s3 = i3; s3 < n2.length; s3++)
      u2.push("..");
    return (u2 = u2.concat(o3.slice(i3))).join("/");
  } };
  function he(e2, r3, t3) {
    var n2 = t3 > 0 ? t3 : M(e2) + 1, o3 = new Array(n2), a3 = j(e2, o3, 0, o3.length);
    return r3 && (o3.length = a3), o3;
  }
  var ve = { ttys: [], init: function() {
  }, shutdown: function() {
  }, register: function(e2, r3) {
    ve.ttys[e2] = { input: [], output: [], ops: r3 }, we.registerDevice(e2, ve.stream_ops);
  }, stream_ops: { open: function(e2) {
    var r3 = ve.ttys[e2.node.rdev];
    if (!r3)
      throw new we.ErrnoError(43);
    e2.tty = r3, e2.seekable = false;
  }, close: function(e2) {
    e2.tty.ops.flush(e2.tty);
  }, flush: function(e2) {
    e2.tty.ops.flush(e2.tty);
  }, read: function(e2, r3, t3, n2, o3) {
    if (!e2.tty || !e2.tty.ops.get_char)
      throw new we.ErrnoError(60);
    for (var a3 = 0, i3 = 0; i3 < n2; i3++) {
      var s3;
      try {
        s3 = e2.tty.ops.get_char(e2.tty);
      } catch (u2) {
        throw new we.ErrnoError(29);
      }
      if (void 0 === s3 && 0 === a3)
        throw new we.ErrnoError(6);
      if (null == s3)
        break;
      a3++, r3[t3 + i3] = s3;
    }
    return a3 && (e2.node.timestamp = Date.now()), a3;
  }, write: function(e2, r3, t3, n2, o3) {
    if (!e2.tty || !e2.tty.ops.put_char)
      throw new we.ErrnoError(60);
    try {
      for (var a3 = 0; a3 < n2; a3++)
        e2.tty.ops.put_char(e2.tty, r3[t3 + a3]);
    } catch (i3) {
      throw new we.ErrnoError(29);
    }
    return n2 && (e2.node.timestamp = Date.now()), a3;
  } }, default_tty_ops: { get_char: function(e2) {
    if (!e2.input.length) {
      var r3 = null;
      if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (r3 = window.prompt("Input: ")) && (r3 += "\n") : "function" == typeof readline && null !== (r3 = readline()) && (r3 += "\n"), !r3)
        return null;
      e2.input = he(r3, true);
    }
    return e2.input.shift();
  }, put_char: function(e2, r3) {
    null === r3 || 10 === r3 ? (h(C(e2.output, 0)), e2.output = []) : 0 != r3 && e2.output.push(r3);
  }, flush: function(e2) {
    e2.output && e2.output.length > 0 && (h(C(e2.output, 0)), e2.output = []);
  } }, default_tty1_ops: { put_char: function(e2, r3) {
    null === r3 || 10 === r3 ? (v(C(e2.output, 0)), e2.output = []) : 0 != r3 && e2.output.push(r3);
  }, flush: function(e2) {
    e2.output && e2.output.length > 0 && (v(C(e2.output, 0)), e2.output = []);
  } } };
  function _e(e2) {
    Q();
  }
  var ge = { ops_table: null, mount: function(e2) {
    return ge.createNode(null, "/", 16895, 0);
  }, createNode: function(e2, r3, t3, n2) {
    if (we.isBlkdev(t3) || we.isFIFO(t3))
      throw new we.ErrnoError(63);
    ge.ops_table || (ge.ops_table = { dir: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, lookup: ge.node_ops.lookup, mknod: ge.node_ops.mknod, rename: ge.node_ops.rename, unlink: ge.node_ops.unlink, rmdir: ge.node_ops.rmdir, readdir: ge.node_ops.readdir, symlink: ge.node_ops.symlink }, stream: { llseek: ge.stream_ops.llseek } }, file: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: { llseek: ge.stream_ops.llseek, read: ge.stream_ops.read, write: ge.stream_ops.write, allocate: ge.stream_ops.allocate, mmap: ge.stream_ops.mmap, msync: ge.stream_ops.msync } }, link: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, readlink: ge.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: we.chrdev_stream_ops } });
    var o3 = we.createNode(e2, r3, t3, n2);
    return we.isDir(o3.mode) ? (o3.node_ops = ge.ops_table.dir.node, o3.stream_ops = ge.ops_table.dir.stream, o3.contents = {}) : we.isFile(o3.mode) ? (o3.node_ops = ge.ops_table.file.node, o3.stream_ops = ge.ops_table.file.stream, o3.usedBytes = 0, o3.contents = null) : we.isLink(o3.mode) ? (o3.node_ops = ge.ops_table.link.node, o3.stream_ops = ge.ops_table.link.stream) : we.isChrdev(o3.mode) && (o3.node_ops = ge.ops_table.chrdev.node, o3.stream_ops = ge.ops_table.chrdev.stream), o3.timestamp = Date.now(), e2 && (e2.contents[r3] = o3, e2.timestamp = o3.timestamp), o3;
  }, getFileDataAsTypedArray: function(e2) {
    return e2.contents ? e2.contents.subarray ? e2.contents.subarray(0, e2.usedBytes) : new Uint8Array(e2.contents) : new Uint8Array(0);
  }, expandFileStorage: function(e2, r3) {
    var t3 = e2.contents ? e2.contents.length : 0;
    if (!(t3 >= r3)) {
      var n2 = 1048576;
      r3 = Math.max(r3, t3 * (t3 < n2 ? 2 : 1.125) >>> 0), 0 != t3 && (r3 = Math.max(r3, 256));
      var o3 = e2.contents;
      e2.contents = new Uint8Array(r3), e2.usedBytes > 0 && e2.contents.set(o3.subarray(0, e2.usedBytes), 0);
    }
  }, resizeFileStorage: function(e2, r3) {
    if (e2.usedBytes != r3)
      if (0 == r3)
        e2.contents = null, e2.usedBytes = 0;
      else {
        var t3 = e2.contents;
        e2.contents = new Uint8Array(r3), t3 && e2.contents.set(t3.subarray(0, Math.min(r3, e2.usedBytes))), e2.usedBytes = r3;
      }
  }, node_ops: { getattr: function(e2) {
    var r3 = {};
    return r3.dev = we.isChrdev(e2.mode) ? e2.id : 1, r3.ino = e2.id, r3.mode = e2.mode, r3.nlink = 1, r3.uid = 0, r3.gid = 0, r3.rdev = e2.rdev, we.isDir(e2.mode) ? r3.size = 4096 : we.isFile(e2.mode) ? r3.size = e2.usedBytes : we.isLink(e2.mode) ? r3.size = e2.link.length : r3.size = 0, r3.atime = new Date(e2.timestamp), r3.mtime = new Date(e2.timestamp), r3.ctime = new Date(e2.timestamp), r3.blksize = 4096, r3.blocks = Math.ceil(r3.size / r3.blksize), r3;
  }, setattr: function(e2, r3) {
    void 0 !== r3.mode && (e2.mode = r3.mode), void 0 !== r3.timestamp && (e2.timestamp = r3.timestamp), void 0 !== r3.size && ge.resizeFileStorage(e2, r3.size);
  }, lookup: function(e2, r3) {
    throw we.genericErrors[44];
  }, mknod: function(e2, r3, t3, n2) {
    return ge.createNode(e2, r3, t3, n2);
  }, rename: function(e2, r3, t3) {
    if (we.isDir(e2.mode)) {
      var n2;
      try {
        n2 = we.lookupNode(r3, t3);
      } catch (a3) {
      }
      if (n2)
        for (var o3 in n2.contents)
          throw new we.ErrnoError(55);
    }
    delete e2.parent.contents[e2.name], e2.parent.timestamp = Date.now(), e2.name = t3, r3.contents[t3] = e2, r3.timestamp = e2.parent.timestamp, e2.parent = r3;
  }, unlink: function(e2, r3) {
    delete e2.contents[r3], e2.timestamp = Date.now();
  }, rmdir: function(e2, r3) {
    var t3 = we.lookupNode(e2, r3);
    for (var n2 in t3.contents)
      throw new we.ErrnoError(55);
    delete e2.contents[r3], e2.timestamp = Date.now();
  }, readdir: function(e2) {
    var r3 = [".", ".."];
    for (var t3 in e2.contents)
      e2.contents.hasOwnProperty(t3) && r3.push(t3);
    return r3;
  }, symlink: function(e2, r3, t3) {
    var n2 = ge.createNode(e2, r3, 41471, 0);
    return n2.link = t3, n2;
  }, readlink: function(e2) {
    if (!we.isLink(e2.mode))
      throw new we.ErrnoError(28);
    return e2.link;
  } }, stream_ops: { read: function(e2, r3, t3, n2, o3) {
    var a3 = e2.node.contents;
    if (o3 >= e2.node.usedBytes)
      return 0;
    var i3 = Math.min(e2.node.usedBytes - o3, n2);
    if (i3 > 8 && a3.subarray)
      r3.set(a3.subarray(o3, o3 + i3), t3);
    else
      for (var s3 = 0; s3 < i3; s3++)
        r3[t3 + s3] = a3[o3 + s3];
    return i3;
  }, write: function(e2, r3, t3, n2, o3, a3) {
    if (r3.buffer === w.buffer && (a3 = false), !n2)
      return 0;
    var i3 = e2.node;
    if (i3.timestamp = Date.now(), r3.subarray && (!i3.contents || i3.contents.subarray)) {
      if (a3)
        return i3.contents = r3.subarray(t3, t3 + n2), i3.usedBytes = n2, n2;
      if (0 === i3.usedBytes && 0 === o3)
        return i3.contents = r3.slice(t3, t3 + n2), i3.usedBytes = n2, n2;
      if (o3 + n2 <= i3.usedBytes)
        return i3.contents.set(r3.subarray(t3, t3 + n2), o3), n2;
    }
    if (ge.expandFileStorage(i3, o3 + n2), i3.contents.subarray && r3.subarray)
      i3.contents.set(r3.subarray(t3, t3 + n2), o3);
    else
      for (var s3 = 0; s3 < n2; s3++)
        i3.contents[o3 + s3] = r3[t3 + s3];
    return i3.usedBytes = Math.max(i3.usedBytes, o3 + n2), n2;
  }, llseek: function(e2, r3, t3) {
    var n2 = r3;
    if (1 === t3 ? n2 += e2.position : 2 === t3 && we.isFile(e2.node.mode) && (n2 += e2.node.usedBytes), n2 < 0)
      throw new we.ErrnoError(28);
    return n2;
  }, allocate: function(e2, r3, t3) {
    ge.expandFileStorage(e2.node, r3 + t3), e2.node.usedBytes = Math.max(e2.node.usedBytes, r3 + t3);
  }, mmap: function(e2, r3, t3, n2, o3) {
    if (!we.isFile(e2.node.mode))
      throw new we.ErrnoError(43);
    var a3, i3, s3 = e2.node.contents;
    if (2 & o3 || s3.buffer !== y) {
      if ((t3 > 0 || t3 + r3 < s3.length) && (s3 = s3.subarray ? s3.subarray(t3, t3 + r3) : Array.prototype.slice.call(s3, t3, t3 + r3)), i3 = true, !(a3 = _e()))
        throw new we.ErrnoError(48);
      w.set(s3, a3);
    } else
      i3 = false, a3 = s3.byteOffset;
    return { ptr: a3, allocated: i3 };
  }, msync: function(e2, r3, t3, n2, o3) {
    if (!we.isFile(e2.node.mode))
      throw new we.ErrnoError(43);
    return 2 & o3 || ge.stream_ops.write(e2, r3, 0, n2, t3, false), 0;
  } } };
  function ye(e2, r3, t3, n2) {
    var o3 = n2 ? "" : G("al " + e2);
    i2(e2, function(t4) {
      g(t4, 'Loading data file "' + e2 + '" failed (no arrayBuffer).'), r3(new Uint8Array(t4)), o3 && X();
    }, function(r4) {
      if (!t3)
        throw 'Loading data file "' + e2 + '" failed.';
      t3();
    }), o3 && Y();
  }
  var we = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (e2, r3 = {}) => {
    if (!(e2 = pe.resolve(we.cwd(), e2)))
      return { path: "", node: null };
    var t3 = { follow_mount: true, recurse_count: 0 };
    if ((r3 = Object.assign(t3, r3)).recurse_count > 8)
      throw new we.ErrnoError(32);
    for (var n2 = de.normalizeArray(e2.split("/").filter((e3) => !!e3), false), o3 = we.root, a3 = "/", i3 = 0; i3 < n2.length; i3++) {
      var s3 = i3 === n2.length - 1;
      if (s3 && r3.parent)
        break;
      if (o3 = we.lookupNode(o3, n2[i3]), a3 = de.join2(a3, n2[i3]), we.isMountpoint(o3) && (!s3 || s3 && r3.follow_mount) && (o3 = o3.mounted.root), !s3 || r3.follow)
        for (var u2 = 0; we.isLink(o3.mode); ) {
          var c2 = we.readlink(a3);
          if (a3 = pe.resolve(de.dirname(a3), c2), o3 = we.lookupPath(a3, { recurse_count: r3.recurse_count + 1 }).node, u2++ > 40)
            throw new we.ErrnoError(32);
        }
    }
    return { path: a3, node: o3 };
  }, getPath: (e2) => {
    for (var r3; ; ) {
      if (we.isRoot(e2)) {
        var t3 = e2.mount.mountpoint;
        return r3 ? "/" !== t3[t3.length - 1] ? t3 + "/" + r3 : t3 + r3 : t3;
      }
      r3 = r3 ? e2.name + "/" + r3 : e2.name, e2 = e2.parent;
    }
  }, hashName: (e2, r3) => {
    for (var t3 = 0, n2 = 0; n2 < r3.length; n2++)
      t3 = (t3 << 5) - t3 + r3.charCodeAt(n2) | 0;
    return (e2 + t3 >>> 0) % we.nameTable.length;
  }, hashAddNode: (e2) => {
    var r3 = we.hashName(e2.parent.id, e2.name);
    e2.name_next = we.nameTable[r3], we.nameTable[r3] = e2;
  }, hashRemoveNode: (e2) => {
    var r3 = we.hashName(e2.parent.id, e2.name);
    if (we.nameTable[r3] === e2)
      we.nameTable[r3] = e2.name_next;
    else
      for (var t3 = we.nameTable[r3]; t3; ) {
        if (t3.name_next === e2) {
          t3.name_next = e2.name_next;
          break;
        }
        t3 = t3.name_next;
      }
  }, lookupNode: (e2, r3) => {
    var t3 = we.mayLookup(e2);
    if (t3)
      throw new we.ErrnoError(t3, e2);
    for (var n2 = we.hashName(e2.id, r3), o3 = we.nameTable[n2]; o3; o3 = o3.name_next) {
      var a3 = o3.name;
      if (o3.parent.id === e2.id && a3 === r3)
        return o3;
    }
    return we.lookup(e2, r3);
  }, createNode: (e2, r3, t3, n2) => {
    var o3 = new we.FSNode(e2, r3, t3, n2);
    return we.hashAddNode(o3), o3;
  }, destroyNode: (e2) => {
    we.hashRemoveNode(e2);
  }, isRoot: (e2) => e2 === e2.parent, isMountpoint: (e2) => !!e2.mounted, isFile: (e2) => 32768 == (61440 & e2), isDir: (e2) => 16384 == (61440 & e2), isLink: (e2) => 40960 == (61440 & e2), isChrdev: (e2) => 8192 == (61440 & e2), isBlkdev: (e2) => 24576 == (61440 & e2), isFIFO: (e2) => 4096 == (61440 & e2), isSocket: (e2) => 49152 == (49152 & e2), flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: (e2) => {
    var r3 = we.flagModes[e2];
    if (void 0 === r3)
      throw new Error("Unknown file open mode: " + e2);
    return r3;
  }, flagsToPermissionString: (e2) => {
    var r3 = ["r", "w", "rw"][3 & e2];
    return 512 & e2 && (r3 += "w"), r3;
  }, nodePermissions: (e2, r3) => we.ignorePermissions || (!r3.includes("r") || 292 & e2.mode) && (!r3.includes("w") || 146 & e2.mode) && (!r3.includes("x") || 73 & e2.mode) ? 0 : 2, mayLookup: (e2) => {
    var r3 = we.nodePermissions(e2, "x");
    return r3 || (e2.node_ops.lookup ? 0 : 2);
  }, mayCreate: (e2, r3) => {
    try {
      return we.lookupNode(e2, r3), 20;
    } catch (t3) {
    }
    return we.nodePermissions(e2, "wx");
  }, mayDelete: (e2, r3, t3) => {
    var n2;
    try {
      n2 = we.lookupNode(e2, r3);
    } catch (a3) {
      return a3.errno;
    }
    var o3 = we.nodePermissions(e2, "wx");
    if (o3)
      return o3;
    if (t3) {
      if (!we.isDir(n2.mode))
        return 54;
      if (we.isRoot(n2) || we.getPath(n2) === we.cwd())
        return 10;
    } else if (we.isDir(n2.mode))
      return 31;
    return 0;
  }, mayOpen: (e2, r3) => e2 ? we.isLink(e2.mode) ? 32 : we.isDir(e2.mode) && ("r" !== we.flagsToPermissionString(r3) || 512 & r3) ? 31 : we.nodePermissions(e2, we.flagsToPermissionString(r3)) : 44, MAX_OPEN_FDS: 4096, nextfd: (e2 = 0, r3 = we.MAX_OPEN_FDS) => {
    for (var t3 = e2; t3 <= r3; t3++)
      if (!we.streams[t3])
        return t3;
    throw new we.ErrnoError(33);
  }, getStream: (e2) => we.streams[e2], createStream: (e2, r3, t3) => {
    we.FSStream || (we.FSStream = function() {
      this.shared = {};
    }, we.FSStream.prototype = {}, Object.defineProperties(we.FSStream.prototype, { object: { get: function() {
      return this.node;
    }, set: function(e3) {
      this.node = e3;
    } }, isRead: { get: function() {
      return 1 != (2097155 & this.flags);
    } }, isWrite: { get: function() {
      return 0 != (2097155 & this.flags);
    } }, isAppend: { get: function() {
      return 1024 & this.flags;
    } }, flags: { get: function() {
      return this.shared.flags;
    }, set: function(e3) {
      this.shared.flags = e3;
    } }, position: { get: function() {
      return this.shared.position;
    }, set: function(e3) {
      this.shared.position = e3;
    } } })), e2 = Object.assign(new we.FSStream(), e2);
    var n2 = we.nextfd(r3, t3);
    return e2.fd = n2, we.streams[n2] = e2, e2;
  }, closeStream: (e2) => {
    we.streams[e2] = null;
  }, chrdev_stream_ops: { open: (e2) => {
    var r3 = we.getDevice(e2.node.rdev);
    e2.stream_ops = r3.stream_ops, e2.stream_ops.open && e2.stream_ops.open(e2);
  }, llseek: () => {
    throw new we.ErrnoError(70);
  } }, major: (e2) => e2 >> 8, minor: (e2) => 255 & e2, makedev: (e2, r3) => e2 << 8 | r3, registerDevice: (e2, r3) => {
    we.devices[e2] = { stream_ops: r3 };
  }, getDevice: (e2) => we.devices[e2], getMounts: (e2) => {
    for (var r3 = [], t3 = [e2]; t3.length; ) {
      var n2 = t3.pop();
      r3.push(n2), t3.push.apply(t3, n2.mounts);
    }
    return r3;
  }, syncfs: (e2, r3) => {
    "function" == typeof e2 && (r3 = e2, e2 = false), we.syncFSRequests++, we.syncFSRequests > 1 && v("warning: " + we.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
    var t3 = we.getMounts(we.root.mount), n2 = 0;
    function o3(e3) {
      return we.syncFSRequests--, r3(e3);
    }
    function a3(e3) {
      if (e3)
        return a3.errored ? void 0 : (a3.errored = true, o3(e3));
      ++n2 >= t3.length && o3(null);
    }
    t3.forEach((r4) => {
      if (!r4.type.syncfs)
        return a3(null);
      r4.type.syncfs(r4, e2, a3);
    });
  }, mount: (e2, r3, t3) => {
    var n2, o3 = "/" === t3, a3 = !t3;
    if (o3 && we.root)
      throw new we.ErrnoError(10);
    if (!o3 && !a3) {
      var i3 = we.lookupPath(t3, { follow_mount: false });
      if (t3 = i3.path, n2 = i3.node, we.isMountpoint(n2))
        throw new we.ErrnoError(10);
      if (!we.isDir(n2.mode))
        throw new we.ErrnoError(54);
    }
    var s3 = { type: e2, opts: r3, mountpoint: t3, mounts: [] }, u2 = e2.mount(s3);
    return u2.mount = s3, s3.root = u2, o3 ? we.root = u2 : n2 && (n2.mounted = s3, n2.mount && n2.mount.mounts.push(s3)), u2;
  }, unmount: (e2) => {
    var r3 = we.lookupPath(e2, { follow_mount: false });
    if (!we.isMountpoint(r3.node))
      throw new we.ErrnoError(28);
    var t3 = r3.node, n2 = t3.mounted, o3 = we.getMounts(n2);
    Object.keys(we.nameTable).forEach((e3) => {
      for (var r4 = we.nameTable[e3]; r4; ) {
        var t4 = r4.name_next;
        o3.includes(r4.mount) && we.destroyNode(r4), r4 = t4;
      }
    }), t3.mounted = null;
    var a3 = t3.mount.mounts.indexOf(n2);
    t3.mount.mounts.splice(a3, 1);
  }, lookup: (e2, r3) => e2.node_ops.lookup(e2, r3), mknod: (e2, r3, t3) => {
    var n2 = we.lookupPath(e2, { parent: true }).node, o3 = de.basename(e2);
    if (!o3 || "." === o3 || ".." === o3)
      throw new we.ErrnoError(28);
    var a3 = we.mayCreate(n2, o3);
    if (a3)
      throw new we.ErrnoError(a3);
    if (!n2.node_ops.mknod)
      throw new we.ErrnoError(63);
    return n2.node_ops.mknod(n2, o3, r3, t3);
  }, create: (e2, r3) => (r3 = void 0 !== r3 ? r3 : 438, r3 &= 4095, r3 |= 32768, we.mknod(e2, r3, 0)), mkdir: (e2, r3) => (r3 = void 0 !== r3 ? r3 : 511, r3 &= 1023, r3 |= 16384, we.mknod(e2, r3, 0)), mkdirTree: (e2, r3) => {
    for (var t3 = e2.split("/"), n2 = "", o3 = 0; o3 < t3.length; ++o3)
      if (t3[o3]) {
        n2 += "/" + t3[o3];
        try {
          we.mkdir(n2, r3);
        } catch (a3) {
          if (20 != a3.errno)
            throw a3;
        }
      }
  }, mkdev: (e2, r3, t3) => (void 0 === t3 && (t3 = r3, r3 = 438), r3 |= 8192, we.mknod(e2, r3, t3)), symlink: (e2, r3) => {
    if (!pe.resolve(e2))
      throw new we.ErrnoError(44);
    var t3 = we.lookupPath(r3, { parent: true }).node;
    if (!t3)
      throw new we.ErrnoError(44);
    var n2 = de.basename(r3), o3 = we.mayCreate(t3, n2);
    if (o3)
      throw new we.ErrnoError(o3);
    if (!t3.node_ops.symlink)
      throw new we.ErrnoError(63);
    return t3.node_ops.symlink(t3, n2, e2);
  }, rename: (e2, r3) => {
    var t3, n2, o3 = de.dirname(e2), a3 = de.dirname(r3), i3 = de.basename(e2), s3 = de.basename(r3);
    if (t3 = we.lookupPath(e2, { parent: true }).node, n2 = we.lookupPath(r3, { parent: true }).node, !t3 || !n2)
      throw new we.ErrnoError(44);
    if (t3.mount !== n2.mount)
      throw new we.ErrnoError(75);
    var u2, c2 = we.lookupNode(t3, i3), f2 = pe.relative(e2, a3);
    if ("." !== f2.charAt(0))
      throw new we.ErrnoError(28);
    if ("." !== (f2 = pe.relative(r3, o3)).charAt(0))
      throw new we.ErrnoError(55);
    try {
      u2 = we.lookupNode(n2, s3);
    } catch (m2) {
    }
    if (c2 !== u2) {
      var l2 = we.isDir(c2.mode), d2 = we.mayDelete(t3, i3, l2);
      if (d2)
        throw new we.ErrnoError(d2);
      if (d2 = u2 ? we.mayDelete(n2, s3, l2) : we.mayCreate(n2, s3))
        throw new we.ErrnoError(d2);
      if (!t3.node_ops.rename)
        throw new we.ErrnoError(63);
      if (we.isMountpoint(c2) || u2 && we.isMountpoint(u2))
        throw new we.ErrnoError(10);
      if (n2 !== t3 && (d2 = we.nodePermissions(t3, "w")))
        throw new we.ErrnoError(d2);
      we.hashRemoveNode(c2);
      try {
        t3.node_ops.rename(c2, n2, s3);
      } catch (m2) {
        throw m2;
      } finally {
        we.hashAddNode(c2);
      }
    }
  }, rmdir: (e2) => {
    var r3 = we.lookupPath(e2, { parent: true }).node, t3 = de.basename(e2), n2 = we.lookupNode(r3, t3), o3 = we.mayDelete(r3, t3, true);
    if (o3)
      throw new we.ErrnoError(o3);
    if (!r3.node_ops.rmdir)
      throw new we.ErrnoError(63);
    if (we.isMountpoint(n2))
      throw new we.ErrnoError(10);
    r3.node_ops.rmdir(r3, t3), we.destroyNode(n2);
  }, readdir: (e2) => {
    var r3 = we.lookupPath(e2, { follow: true }).node;
    if (!r3.node_ops.readdir)
      throw new we.ErrnoError(54);
    return r3.node_ops.readdir(r3);
  }, unlink: (e2) => {
    var r3 = we.lookupPath(e2, { parent: true }).node;
    if (!r3)
      throw new we.ErrnoError(44);
    var t3 = de.basename(e2), n2 = we.lookupNode(r3, t3), o3 = we.mayDelete(r3, t3, false);
    if (o3)
      throw new we.ErrnoError(o3);
    if (!r3.node_ops.unlink)
      throw new we.ErrnoError(63);
    if (we.isMountpoint(n2))
      throw new we.ErrnoError(10);
    r3.node_ops.unlink(r3, t3), we.destroyNode(n2);
  }, readlink: (e2) => {
    var r3 = we.lookupPath(e2).node;
    if (!r3)
      throw new we.ErrnoError(44);
    if (!r3.node_ops.readlink)
      throw new we.ErrnoError(28);
    return pe.resolve(we.getPath(r3.parent), r3.node_ops.readlink(r3));
  }, stat: (e2, r3) => {
    var t3 = we.lookupPath(e2, { follow: !r3 }).node;
    if (!t3)
      throw new we.ErrnoError(44);
    if (!t3.node_ops.getattr)
      throw new we.ErrnoError(63);
    return t3.node_ops.getattr(t3);
  }, lstat: (e2) => we.stat(e2, true), chmod: (e2, r3, t3) => {
    var n2;
    if (!(n2 = "string" == typeof e2 ? we.lookupPath(e2, { follow: !t3 }).node : e2).node_ops.setattr)
      throw new we.ErrnoError(63);
    n2.node_ops.setattr(n2, { mode: 4095 & r3 | -4096 & n2.mode, timestamp: Date.now() });
  }, lchmod: (e2, r3) => {
    we.chmod(e2, r3, true);
  }, fchmod: (e2, r3) => {
    var t3 = we.getStream(e2);
    if (!t3)
      throw new we.ErrnoError(8);
    we.chmod(t3.node, r3);
  }, chown: (e2, r3, t3, n2) => {
    var o3;
    if (!(o3 = "string" == typeof e2 ? we.lookupPath(e2, { follow: !n2 }).node : e2).node_ops.setattr)
      throw new we.ErrnoError(63);
    o3.node_ops.setattr(o3, { timestamp: Date.now() });
  }, lchown: (e2, r3, t3) => {
    we.chown(e2, r3, t3, true);
  }, fchown: (e2, r3, t3) => {
    var n2 = we.getStream(e2);
    if (!n2)
      throw new we.ErrnoError(8);
    we.chown(n2.node, r3, t3);
  }, truncate: (e2, r3) => {
    if (r3 < 0)
      throw new we.ErrnoError(28);
    var t3;
    if (!(t3 = "string" == typeof e2 ? we.lookupPath(e2, { follow: true }).node : e2).node_ops.setattr)
      throw new we.ErrnoError(63);
    if (we.isDir(t3.mode))
      throw new we.ErrnoError(31);
    if (!we.isFile(t3.mode))
      throw new we.ErrnoError(28);
    var n2 = we.nodePermissions(t3, "w");
    if (n2)
      throw new we.ErrnoError(n2);
    t3.node_ops.setattr(t3, { size: r3, timestamp: Date.now() });
  }, ftruncate: (e2, r3) => {
    var t3 = we.getStream(e2);
    if (!t3)
      throw new we.ErrnoError(8);
    if (0 == (2097155 & t3.flags))
      throw new we.ErrnoError(28);
    we.truncate(t3.node, r3);
  }, utime: (e2, r3, t3) => {
    var n2 = we.lookupPath(e2, { follow: true }).node;
    n2.node_ops.setattr(n2, { timestamp: Math.max(r3, t3) });
  }, open: (e2, r3, t3) => {
    if ("" === e2)
      throw new we.ErrnoError(44);
    var n2;
    if (t3 = void 0 === t3 ? 438 : t3, t3 = 64 & (r3 = "string" == typeof r3 ? we.modeStringToFlags(r3) : r3) ? 4095 & t3 | 32768 : 0, "object" == typeof e2)
      n2 = e2;
    else {
      e2 = de.normalize(e2);
      try {
        n2 = we.lookupPath(e2, { follow: !(131072 & r3) }).node;
      } catch (u2) {
      }
    }
    var a3 = false;
    if (64 & r3)
      if (n2) {
        if (128 & r3)
          throw new we.ErrnoError(20);
      } else
        n2 = we.mknod(e2, t3, 0), a3 = true;
    if (!n2)
      throw new we.ErrnoError(44);
    if (we.isChrdev(n2.mode) && (r3 &= -513), 65536 & r3 && !we.isDir(n2.mode))
      throw new we.ErrnoError(54);
    if (!a3) {
      var i3 = we.mayOpen(n2, r3);
      if (i3)
        throw new we.ErrnoError(i3);
    }
    512 & r3 && !a3 && we.truncate(n2, 0), r3 &= -131713;
    var s3 = we.createStream({ node: n2, path: we.getPath(n2), flags: r3, seekable: true, position: 0, stream_ops: n2.stream_ops, ungotten: [], error: false });
    return s3.stream_ops.open && s3.stream_ops.open(s3), !o2.logReadFiles || 1 & r3 || (we.readFiles || (we.readFiles = {}), e2 in we.readFiles || (we.readFiles[e2] = 1)), s3;
  }, close: (e2) => {
    if (we.isClosed(e2))
      throw new we.ErrnoError(8);
    e2.getdents && (e2.getdents = null);
    try {
      e2.stream_ops.close && e2.stream_ops.close(e2);
    } catch (r3) {
      throw r3;
    } finally {
      we.closeStream(e2.fd);
    }
    e2.fd = null;
  }, isClosed: (e2) => null === e2.fd, llseek: (e2, r3, t3) => {
    if (we.isClosed(e2))
      throw new we.ErrnoError(8);
    if (!e2.seekable || !e2.stream_ops.llseek)
      throw new we.ErrnoError(70);
    if (0 != t3 && 1 != t3 && 2 != t3)
      throw new we.ErrnoError(28);
    return e2.position = e2.stream_ops.llseek(e2, r3, t3), e2.ungotten = [], e2.position;
  }, read: (e2, r3, t3, n2, o3) => {
    if (n2 < 0 || o3 < 0)
      throw new we.ErrnoError(28);
    if (we.isClosed(e2))
      throw new we.ErrnoError(8);
    if (1 == (2097155 & e2.flags))
      throw new we.ErrnoError(8);
    if (we.isDir(e2.node.mode))
      throw new we.ErrnoError(31);
    if (!e2.stream_ops.read)
      throw new we.ErrnoError(28);
    var a3 = void 0 !== o3;
    if (a3) {
      if (!e2.seekable)
        throw new we.ErrnoError(70);
    } else
      o3 = e2.position;
    var i3 = e2.stream_ops.read(e2, r3, t3, n2, o3);
    return a3 || (e2.position += i3), i3;
  }, write: (e2, r3, t3, n2, o3, a3) => {
    if (n2 < 0 || o3 < 0)
      throw new we.ErrnoError(28);
    if (we.isClosed(e2))
      throw new we.ErrnoError(8);
    if (0 == (2097155 & e2.flags))
      throw new we.ErrnoError(8);
    if (we.isDir(e2.node.mode))
      throw new we.ErrnoError(31);
    if (!e2.stream_ops.write)
      throw new we.ErrnoError(28);
    e2.seekable && 1024 & e2.flags && we.llseek(e2, 0, 2);
    var i3 = void 0 !== o3;
    if (i3) {
      if (!e2.seekable)
        throw new we.ErrnoError(70);
    } else
      o3 = e2.position;
    var s3 = e2.stream_ops.write(e2, r3, t3, n2, o3, a3);
    return i3 || (e2.position += s3), s3;
  }, allocate: (e2, r3, t3) => {
    if (we.isClosed(e2))
      throw new we.ErrnoError(8);
    if (r3 < 0 || t3 <= 0)
      throw new we.ErrnoError(28);
    if (0 == (2097155 & e2.flags))
      throw new we.ErrnoError(8);
    if (!we.isFile(e2.node.mode) && !we.isDir(e2.node.mode))
      throw new we.ErrnoError(43);
    if (!e2.stream_ops.allocate)
      throw new we.ErrnoError(138);
    e2.stream_ops.allocate(e2, r3, t3);
  }, mmap: (e2, r3, t3, n2, o3) => {
    if (0 != (2 & n2) && 0 == (2 & o3) && 2 != (2097155 & e2.flags))
      throw new we.ErrnoError(2);
    if (1 == (2097155 & e2.flags))
      throw new we.ErrnoError(2);
    if (!e2.stream_ops.mmap)
      throw new we.ErrnoError(43);
    return e2.stream_ops.mmap(e2, r3, t3, n2, o3);
  }, msync: (e2, r3, t3, n2, o3) => e2 && e2.stream_ops.msync ? e2.stream_ops.msync(e2, r3, t3, n2, o3) : 0, munmap: (e2) => 0, ioctl: (e2, r3, t3) => {
    if (!e2.stream_ops.ioctl)
      throw new we.ErrnoError(59);
    return e2.stream_ops.ioctl(e2, r3, t3);
  }, readFile: (e2, r3 = {}) => {
    if (r3.flags = r3.flags || 0, r3.encoding = r3.encoding || "binary", "utf8" !== r3.encoding && "binary" !== r3.encoding)
      throw new Error('Invalid encoding type "' + r3.encoding + '"');
    var t3, n2 = we.open(e2, r3.flags), o3 = we.stat(e2).size, a3 = new Uint8Array(o3);
    return we.read(n2, a3, 0, o3, 0), "utf8" === r3.encoding ? t3 = C(a3, 0) : "binary" === r3.encoding && (t3 = a3), we.close(n2), t3;
  }, writeFile: (e2, r3, t3 = {}) => {
    t3.flags = t3.flags || 577;
    var n2 = we.open(e2, t3.flags, t3.mode);
    if ("string" == typeof r3) {
      var o3 = new Uint8Array(M(r3) + 1), a3 = j(r3, o3, 0, o3.length);
      we.write(n2, o3, 0, a3, void 0, t3.canOwn);
    } else {
      if (!ArrayBuffer.isView(r3))
        throw new Error("Unsupported data type");
      we.write(n2, r3, 0, r3.byteLength, void 0, t3.canOwn);
    }
    we.close(n2);
  }, cwd: () => we.currentPath, chdir: (e2) => {
    var r3 = we.lookupPath(e2, { follow: true });
    if (null === r3.node)
      throw new we.ErrnoError(44);
    if (!we.isDir(r3.node.mode))
      throw new we.ErrnoError(54);
    var t3 = we.nodePermissions(r3.node, "x");
    if (t3)
      throw new we.ErrnoError(t3);
    we.currentPath = r3.path;
  }, createDefaultDirectories: () => {
    we.mkdir("/tmp"), we.mkdir("/home"), we.mkdir("/home/web_user");
  }, createDefaultDevices: () => {
    we.mkdir("/dev"), we.registerDevice(we.makedev(1, 3), { read: () => 0, write: (e3, r3, t3, n2, o3) => n2 }), we.mkdev("/dev/null", we.makedev(1, 3)), ve.register(we.makedev(5, 0), ve.default_tty_ops), ve.register(we.makedev(6, 0), ve.default_tty1_ops), we.mkdev("/dev/tty", we.makedev(5, 0)), we.mkdev("/dev/tty1", we.makedev(6, 0));
    var e2 = me();
    we.createDevice("/dev", "random", e2), we.createDevice("/dev", "urandom", e2), we.mkdir("/dev/shm"), we.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories: () => {
    we.mkdir("/proc");
    var e2 = we.mkdir("/proc/self");
    we.mkdir("/proc/self/fd"), we.mount({ mount: () => {
      var r3 = we.createNode(e2, "fd", 16895, 73);
      return r3.node_ops = { lookup: (e3, r4) => {
        var t3 = +r4, n2 = we.getStream(t3);
        if (!n2)
          throw new we.ErrnoError(8);
        var o3 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n2.path } };
        return o3.parent = o3, o3;
      } }, r3;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams: () => {
    o2.stdin ? we.createDevice("/dev", "stdin", o2.stdin) : we.symlink("/dev/tty", "/dev/stdin"), o2.stdout ? we.createDevice("/dev", "stdout", null, o2.stdout) : we.symlink("/dev/tty", "/dev/stdout"), o2.stderr ? we.createDevice("/dev", "stderr", null, o2.stderr) : we.symlink("/dev/tty1", "/dev/stderr"), we.open("/dev/stdin", 0), we.open("/dev/stdout", 1), we.open("/dev/stderr", 1);
  }, ensureErrnoError: () => {
    we.ErrnoError || (we.ErrnoError = function(e2, r3) {
      this.node = r3, this.setErrno = function(e3) {
        this.errno = e3;
      }, this.setErrno(e2), this.message = "FS error";
    }, we.ErrnoError.prototype = new Error(), we.ErrnoError.prototype.constructor = we.ErrnoError, [44].forEach((e2) => {
      we.genericErrors[e2] = new we.ErrnoError(e2), we.genericErrors[e2].stack = "<generic error, no stack>";
    }));
  }, staticInit: () => {
    we.ensureErrnoError(), we.nameTable = new Array(4096), we.mount(ge, {}, "/"), we.createDefaultDirectories(), we.createDefaultDevices(), we.createSpecialDirectories(), we.filesystems = { MEMFS: ge };
  }, init: (e2, r3, t3) => {
    we.init.initialized = true, we.ensureErrnoError(), o2.stdin = e2 || o2.stdin, o2.stdout = r3 || o2.stdout, o2.stderr = t3 || o2.stderr, we.createStandardStreams();
  }, quit: () => {
    we.init.initialized = false;
    for (var e2 = 0; e2 < we.streams.length; e2++) {
      var r3 = we.streams[e2];
      r3 && we.close(r3);
    }
  }, getMode: (e2, r3) => {
    var t3 = 0;
    return e2 && (t3 |= 365), r3 && (t3 |= 146), t3;
  }, findObject: (e2, r3) => {
    var t3 = we.analyzePath(e2, r3);
    return t3.exists ? t3.object : null;
  }, analyzePath: (e2, r3) => {
    try {
      e2 = (n2 = we.lookupPath(e2, { follow: !r3 })).path;
    } catch (o3) {
    }
    var t3 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var n2 = we.lookupPath(e2, { parent: true });
      t3.parentExists = true, t3.parentPath = n2.path, t3.parentObject = n2.node, t3.name = de.basename(e2), n2 = we.lookupPath(e2, { follow: !r3 }), t3.exists = true, t3.path = n2.path, t3.object = n2.node, t3.name = n2.node.name, t3.isRoot = "/" === n2.path;
    } catch (o3) {
      t3.error = o3.errno;
    }
    return t3;
  }, createPath: (e2, r3, t3, n2) => {
    e2 = "string" == typeof e2 ? e2 : we.getPath(e2);
    for (var o3 = r3.split("/").reverse(); o3.length; ) {
      var a3 = o3.pop();
      if (a3) {
        var i3 = de.join2(e2, a3);
        try {
          we.mkdir(i3);
        } catch (s3) {
        }
        e2 = i3;
      }
    }
    return i3;
  }, createFile: (e2, r3, t3, n2, o3) => {
    var a3 = de.join2("string" == typeof e2 ? e2 : we.getPath(e2), r3), i3 = we.getMode(n2, o3);
    return we.create(a3, i3);
  }, createDataFile: (e2, r3, t3, n2, o3, a3) => {
    var i3 = r3;
    e2 && (e2 = "string" == typeof e2 ? e2 : we.getPath(e2), i3 = r3 ? de.join2(e2, r3) : e2);
    var s3 = we.getMode(n2, o3), u2 = we.create(i3, s3);
    if (t3) {
      if ("string" == typeof t3) {
        for (var c2 = new Array(t3.length), f2 = 0, l2 = t3.length; f2 < l2; ++f2)
          c2[f2] = t3.charCodeAt(f2);
        t3 = c2;
      }
      we.chmod(u2, 146 | s3);
      var d2 = we.open(u2, 577);
      we.write(d2, t3, 0, t3.length, 0, a3), we.close(d2), we.chmod(u2, s3);
    }
    return u2;
  }, createDevice: (e2, r3, t3, n2) => {
    var o3 = de.join2("string" == typeof e2 ? e2 : we.getPath(e2), r3), a3 = we.getMode(!!t3, !!n2);
    we.createDevice.major || (we.createDevice.major = 64);
    var i3 = we.makedev(we.createDevice.major++, 0);
    return we.registerDevice(i3, { open: (e3) => {
      e3.seekable = false;
    }, close: (e3) => {
      n2 && n2.buffer && n2.buffer.length && n2(10);
    }, read: (e3, r4, n3, o4, a4) => {
      for (var i4 = 0, s3 = 0; s3 < o4; s3++) {
        var u2;
        try {
          u2 = t3();
        } catch (c2) {
          throw new we.ErrnoError(29);
        }
        if (void 0 === u2 && 0 === i4)
          throw new we.ErrnoError(6);
        if (null == u2)
          break;
        i4++, r4[n3 + s3] = u2;
      }
      return i4 && (e3.node.timestamp = Date.now()), i4;
    }, write: (e3, r4, t4, o4, a4) => {
      for (var i4 = 0; i4 < o4; i4++)
        try {
          n2(r4[t4 + i4]);
        } catch (s3) {
          throw new we.ErrnoError(29);
        }
      return o4 && (e3.node.timestamp = Date.now()), i4;
    } }), we.mkdev(o3, a3, i3);
  }, forceLoadFile: (e2) => {
    if (e2.isDevice || e2.isFolder || e2.link || e2.contents)
      return true;
    if ("undefined" != typeof XMLHttpRequest)
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    if (!a2)
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    try {
      e2.contents = he(a2(e2.url), true), e2.usedBytes = e2.contents.length;
    } catch (r3) {
      throw new we.ErrnoError(29);
    }
  }, createLazyFile: (e2, r3, t3, n2, o3) => {
    if ("undefined" != typeof XMLHttpRequest)
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    var i3 = { isDevice: false, url: t3 }, s3 = we.createFile(e2, r3, i3, n2, o3);
    i3.contents ? s3.contents = i3.contents : i3.url && (s3.contents = null, s3.url = i3.url), Object.defineProperties(s3, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u2 = {};
    function c2(e3, r4, t4, n3, o4) {
      var a3 = e3.node.contents;
      if (o4 >= a3.length)
        return 0;
      var i4 = Math.min(a3.length - o4, n3);
      if (a3.slice)
        for (var s4 = 0; s4 < i4; s4++)
          r4[t4 + s4] = a3[o4 + s4];
      else
        for (s4 = 0; s4 < i4; s4++)
          r4[t4 + s4] = a3.get(o4 + s4);
      return i4;
    }
    return Object.keys(s3.stream_ops).forEach((e3) => {
      var r4 = s3.stream_ops[e3];
      u2[e3] = function() {
        return we.forceLoadFile(s3), r4.apply(null, arguments);
      };
    }), u2.read = (e3, r4, t4, n3, o4) => (we.forceLoadFile(s3), c2(e3, r4, t4, n3, o4)), u2.mmap = (e3, r4, t4, n3, o4) => {
      we.forceLoadFile(s3);
      var a3 = _e();
      if (!a3)
        throw new we.ErrnoError(48);
      return c2(e3, w, a3, r4, t4), { ptr: a3, allocated: true };
    }, s3.stream_ops = u2, s3;
  }, createPreloadedFile: (e2, r3, t3, n2, o3, a3, i3, s3, u2, c2) => {
    var f2 = r3 ? pe.resolve(de.join2(e2, r3)) : e2;
    function l2(t4) {
      function l3(t5) {
        c2 && c2(), s3 || we.createDataFile(e2, r3, t5, n2, o3, u2), a3 && a3(), X();
      }
      Browser.handledByPreloadPlugin(t4, f2, l3, () => {
        i3 && i3(), X();
      }) || l3(t4);
    }
    Y(), "string" == typeof t3 ? ye(t3, (e3) => l2(e3), i3) : l2(t3);
  }, indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, DB_NAME: () => "EM_FS_" + window.location.pathname, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (e2, r3, t3) => {
    r3 = r3 || (() => {
    }), t3 = t3 || (() => {
    });
    var n2 = we.indexedDB();
    try {
      var o3 = n2.open(we.DB_NAME(), we.DB_VERSION);
    } catch (a3) {
      return t3(a3);
    }
    o3.onupgradeneeded = () => {
      h("creating db"), o3.result.createObjectStore(we.DB_STORE_NAME);
    }, o3.onsuccess = () => {
      var n3 = o3.result.transaction([we.DB_STORE_NAME], "readwrite"), a3 = n3.objectStore(we.DB_STORE_NAME), i3 = 0, s3 = 0, u2 = e2.length;
      function c2() {
        0 == s3 ? r3() : t3();
      }
      e2.forEach((e3) => {
        var r4 = a3.put(we.analyzePath(e3).object.contents, e3);
        r4.onsuccess = () => {
          ++i3 + s3 == u2 && c2();
        }, r4.onerror = () => {
          s3++, i3 + s3 == u2 && c2();
        };
      }), n3.onerror = t3;
    }, o3.onerror = t3;
  }, loadFilesFromDB: (e2, r3, t3) => {
    r3 = r3 || (() => {
    }), t3 = t3 || (() => {
    });
    var n2 = we.indexedDB();
    try {
      var o3 = n2.open(we.DB_NAME(), we.DB_VERSION);
    } catch (a3) {
      return t3(a3);
    }
    o3.onupgradeneeded = t3, o3.onsuccess = () => {
      var n3 = o3.result;
      try {
        var i3 = n3.transaction([we.DB_STORE_NAME], "readonly");
      } catch (a3) {
        return void t3(a3);
      }
      var s3 = i3.objectStore(we.DB_STORE_NAME), u2 = 0, c2 = 0, f2 = e2.length;
      function l2() {
        0 == c2 ? r3() : t3();
      }
      e2.forEach((e3) => {
        var r4 = s3.get(e3);
        r4.onsuccess = () => {
          we.analyzePath(e3).exists && we.unlink(e3), we.createDataFile(de.dirname(e3), de.basename(e3), r4.result, true, true, true), ++u2 + c2 == f2 && l2();
        }, r4.onerror = () => {
          c2++, u2 + c2 == f2 && l2();
        };
      }), i3.onerror = t3;
    }, o3.onerror = t3;
  } }, Ee = { DEFAULT_POLLMASK: 5, calculateAt: function(e2, r3, t3) {
    if (de.isAbs(r3))
      return r3;
    var n2;
    if (-100 === e2)
      n2 = we.cwd();
    else {
      var o3 = we.getStream(e2);
      if (!o3)
        throw new we.ErrnoError(8);
      n2 = o3.path;
    }
    if (0 == r3.length) {
      if (!t3)
        throw new we.ErrnoError(44);
      return n2;
    }
    return de.join2(n2, r3);
  }, doStat: function(e2, r3, t3) {
    try {
      var n2 = e2(r3);
    } catch (o3) {
      if (o3 && o3.node && de.normalize(r3) !== de.normalize(we.getPath(o3.node)))
        return -54;
      throw o3;
    }
    return x[t3 >> 2] = n2.dev, x[t3 + 4 >> 2] = 0, x[t3 + 8 >> 2] = n2.ino, x[t3 + 12 >> 2] = n2.mode, x[t3 + 16 >> 2] = n2.nlink, x[t3 + 20 >> 2] = n2.uid, x[t3 + 24 >> 2] = n2.gid, x[t3 + 28 >> 2] = n2.rdev, x[t3 + 32 >> 2] = 0, $ = [n2.size >>> 0, (J = n2.size, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], x[t3 + 40 >> 2] = $[0], x[t3 + 44 >> 2] = $[1], x[t3 + 48 >> 2] = 4096, x[t3 + 52 >> 2] = n2.blocks, x[t3 + 56 >> 2] = n2.atime.getTime() / 1e3 | 0, x[t3 + 64 >> 2] = 0, x[t3 + 72 >> 2] = n2.mtime.getTime() / 1e3 | 0, x[t3 + 80 >> 2] = 0, x[t3 + 88 >> 2] = n2.ctime.getTime() / 1e3 | 0, x[t3 + 96 >> 2] = 0, $ = [n2.ino >>> 0, (J = n2.ino, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], x[t3 + 104 >> 2] = $[0], x[t3 + 108 >> 2] = $[1], 0;
  }, doMsync: function(e2, r3, t3, n2, o3) {
    var a3 = E.slice(e2, e2 + t3);
    we.msync(r3, a3, o3, t3, n2);
  }, varargs: void 0, get: function() {
    return Ee.varargs += 4, x[Ee.varargs - 4 >> 2];
  }, getStr: function(e2) {
    return T(e2);
  }, getStreamFromFD: function(e2) {
    var r3 = we.getStream(e2);
    if (!r3)
      throw new we.ErrnoError(8);
    return r3;
  } };
  function be(e2, r3, t3) {
    Ee.varargs = t3;
    try {
      var n2 = Ee.getStreamFromFD(e2);
      switch (r3) {
        case 0:
          return (o3 = Ee.get()) < 0 ? -28 : we.createStream(n2, o3).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n2.flags;
        case 4:
          var o3 = Ee.get();
          return n2.flags |= o3, 0;
        case 5:
          return o3 = Ee.get(), b[o3 + 0 >> 1] = 2, 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return le(28), -1;
      }
    } catch (a3) {
      if (void 0 === we || !(a3 instanceof we.ErrnoError))
        throw a3;
      return -a3.errno;
    }
  }
  function ke(e2, r3, t3) {
    Ee.varargs = t3;
    try {
      var n2 = Ee.getStreamFromFD(e2);
      switch (r3) {
        case 21509:
        case 21505:
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
        case 21523:
        case 21524:
          return n2.tty ? 0 : -59;
        case 21519:
          if (!n2.tty)
            return -59;
          var o3 = Ee.get();
          return x[o3 >> 2] = 0, 0;
        case 21520:
          return n2.tty ? -28 : -59;
        case 21531:
          return o3 = Ee.get(), we.ioctl(n2, r3, o3);
        default:
          Q("bad ioctl syscall " + r3);
      }
    } catch (a3) {
      if (void 0 === we || !(a3 instanceof we.ErrnoError))
        throw a3;
      return -a3.errno;
    }
  }
  function xe(e2, r3, t3, n2) {
    Ee.varargs = n2;
    try {
      r3 = Ee.getStr(r3), r3 = Ee.calculateAt(e2, r3);
      var o3 = n2 ? Ee.get() : 0;
      return we.open(r3, t3, o3).fd;
    } catch (a3) {
      if (void 0 === we || !(a3 instanceof we.ErrnoError))
        throw a3;
      return -a3.errno;
    }
  }
  var Se = {};
  function De(e2) {
    for (; e2.length; ) {
      var r3 = e2.pop();
      e2.pop()(r3);
    }
  }
  function Fe(e2) {
    return this.fromWireType(x[e2 >> 2]);
  }
  var Ae = {}, Pe = {}, Ce = {}, Te = 48, je = 57;
  function Be(e2) {
    if (void 0 === e2)
      return "_unknown";
    var r3 = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= Te && r3 <= je ? "_" + e2 : e2;
  }
  function Me(e2, r3) {
    return e2 = Be(e2), function() {
      return r3.apply(this, arguments);
    };
  }
  function Le(e2, r3) {
    var t3 = Me(r3, function(e3) {
      this.name = r3, this.message = e3;
      var t4 = new Error(e3).stack;
      void 0 !== t4 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t3.prototype = Object.create(e2.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
      return void 0 === this.message ? this.name : this.name + ": " + this.message;
    }, t3;
  }
  var Re = void 0;
  function Ie(e2) {
    throw new Re(e2);
  }
  function Ne(e2, r3, t3) {
    function n2(r4) {
      var n3 = t3(r4);
      n3.length !== e2.length && Ie("Mismatched type converter count");
      for (var o4 = 0; o4 < e2.length; ++o4)
        Ge(e2[o4], n3[o4]);
    }
    e2.forEach(function(e3) {
      Ce[e3] = r3;
    });
    var o3 = new Array(r3.length), a3 = [], i3 = 0;
    r3.forEach((e3, r4) => {
      Pe.hasOwnProperty(e3) ? o3[r4] = Pe[e3] : (a3.push(e3), Ae.hasOwnProperty(e3) || (Ae[e3] = []), Ae[e3].push(() => {
        o3[r4] = Pe[e3], ++i3 === a3.length && n2(o3);
      }));
    }), 0 === a3.length && n2(o3);
  }
  function Oe(e2) {
    var r3 = Se[e2];
    delete Se[e2];
    var t3 = r3.rawConstructor, n2 = r3.rawDestructor, o3 = r3.fields;
    Ne([e2], o3.map((e3) => e3.getterReturnType).concat(o3.map((e3) => e3.setterArgumentType)), (e3) => {
      var a3 = {};
      return o3.forEach((r4, t4) => {
        var n3 = r4.fieldName, i3 = e3[t4], s3 = r4.getter, u2 = r4.getterContext, c2 = e3[t4 + o3.length], f2 = r4.setter, l2 = r4.setterContext;
        a3[n3] = { read: (e4) => i3.fromWireType(s3(u2, e4)), write: (e4, r5) => {
          var t5 = [];
          f2(l2, e4, c2.toWireType(t5, r5)), De(t5);
        } };
      }), [{ name: r3.name, fromWireType: function(e4) {
        var r4 = {};
        for (var t4 in a3)
          r4[t4] = a3[t4].read(e4);
        return n2(e4), r4;
      }, toWireType: function(e4, r4) {
        for (var o4 in a3)
          if (!(o4 in r4))
            throw new TypeError('Missing field:  "' + o4 + '"');
        var i3 = t3();
        for (o4 in a3)
          a3[o4].write(i3, r4[o4]);
        return null !== e4 && e4.push(n2, i3), i3;
      }, argPackAdvance: 8, readValueFromPointer: Fe, destructorFunction: n2 }];
    });
  }
  function ze(e2, r3, t3, n2, o3) {
  }
  function We(e2) {
    switch (e2) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + e2);
    }
  }
  function Ze() {
    for (var e2 = new Array(256), r3 = 0; r3 < 256; ++r3)
      e2[r3] = String.fromCharCode(r3);
    He = e2;
  }
  var He = void 0;
  function Ue(e2) {
    for (var r3 = "", t3 = e2; E[t3]; )
      r3 += He[E[t3++]];
    return r3;
  }
  var qe = void 0;
  function Ve(e2) {
    throw new qe(e2);
  }
  function Ge(e2, r3, t3 = {}) {
    if (!("argPackAdvance" in r3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var n2 = r3.name;
    if (e2 || Ve('type "' + n2 + '" must have a positive integer typeid pointer'), Pe.hasOwnProperty(e2)) {
      if (t3.ignoreDuplicateRegistrations)
        return;
      Ve("Cannot register type '" + n2 + "' twice");
    }
    if (Pe[e2] = r3, delete Ce[e2], Ae.hasOwnProperty(e2)) {
      var o3 = Ae[e2];
      delete Ae[e2], o3.forEach((e3) => e3());
    }
  }
  function Ye(e2, r3, t3, n2, o3) {
    var a3 = We(t3);
    Ge(e2, { name: r3 = Ue(r3), fromWireType: function(e3) {
      return !!e3;
    }, toWireType: function(e3, r4) {
      return r4 ? n2 : o3;
    }, argPackAdvance: 8, readValueFromPointer: function(e3) {
      var n3;
      if (1 === t3)
        n3 = w;
      else if (2 === t3)
        n3 = b;
      else {
        if (4 !== t3)
          throw new TypeError("Unknown boolean type size: " + r3);
        n3 = x;
      }
      return this.fromWireType(n3[e3 >> a3]);
    }, destructorFunction: null });
  }
  var Xe = [], Qe = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
  function Ke(e2) {
    e2 > 4 && 0 == --Qe[e2].refcount && (Qe[e2] = void 0, Xe.push(e2));
  }
  function Je() {
    for (var e2 = 0, r3 = 5; r3 < Qe.length; ++r3)
      void 0 !== Qe[r3] && ++e2;
    return e2;
  }
  function $e() {
    for (var e2 = 5; e2 < Qe.length; ++e2)
      if (void 0 !== Qe[e2])
        return Qe[e2];
    return null;
  }
  function er() {
    o2.count_emval_handles = Je, o2.get_first_emval = $e;
  }
  var rr = { toValue: (e2) => (e2 || Ve("Cannot use deleted val. handle = " + e2), Qe[e2].value), toHandle: (e2) => {
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
        var r3 = Xe.length ? Xe.pop() : Qe.length;
        return Qe[r3] = { refcount: 1, value: e2 }, r3;
    }
  } };
  function tr(e2, r3) {
    Ge(e2, { name: r3 = Ue(r3), fromWireType: function(e3) {
      var r4 = rr.toValue(e3);
      return Ke(e3), r4;
    }, toWireType: function(e3, r4) {
      return rr.toHandle(r4);
    }, argPackAdvance: 8, readValueFromPointer: Fe, destructorFunction: null });
  }
  function nr(e2, r3, t3) {
    if (void 0 === e2[r3].overloadTable) {
      var n2 = e2[r3];
      e2[r3] = function() {
        return e2[r3].overloadTable.hasOwnProperty(arguments.length) || Ve("Function '" + t3 + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e2[r3].overloadTable + ")!"), e2[r3].overloadTable[arguments.length].apply(this, arguments);
      }, e2[r3].overloadTable = [], e2[r3].overloadTable[n2.argCount] = n2;
    }
  }
  function or(e2, r3, t3) {
    o2.hasOwnProperty(e2) ? ((void 0 === t3 || void 0 !== o2[e2].overloadTable && void 0 !== o2[e2].overloadTable[t3]) && Ve("Cannot register public name '" + e2 + "' twice"), nr(o2, e2, e2), o2.hasOwnProperty(t3) && Ve("Cannot register multiple overloads of a function with the same number of arguments (" + t3 + ")!"), o2[e2].overloadTable[t3] = r3) : (o2[e2] = r3, void 0 !== t3 && (o2[e2].numArguments = t3));
  }
  function ar(e2, r3, t3) {
    switch (r3) {
      case 0:
        return function(e3) {
          var r4 = t3 ? w : E;
          return this.fromWireType(r4[e3]);
        };
      case 1:
        return function(e3) {
          var r4 = t3 ? b : k;
          return this.fromWireType(r4[e3 >> 1]);
        };
      case 2:
        return function(e3) {
          var r4 = t3 ? x : S;
          return this.fromWireType(r4[e3 >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + e2);
    }
  }
  function ir(e2, r3, t3, n2) {
    var o3 = We(t3);
    function a3() {
    }
    r3 = Ue(r3), a3.values = {}, Ge(e2, { name: r3, constructor: a3, fromWireType: function(e3) {
      return this.constructor.values[e3];
    }, toWireType: function(e3, r4) {
      return r4.value;
    }, argPackAdvance: 8, readValueFromPointer: ar(r3, o3, n2), destructorFunction: null }), or(r3, a3);
  }
  function sr(e2) {
    var r3 = _o(e2), t3 = Ue(r3);
    return ho(r3), t3;
  }
  function ur(e2, r3) {
    var t3 = Pe[e2];
    return void 0 === t3 && Ve(r3 + " has unknown type " + sr(e2)), t3;
  }
  function cr(e2, r3, t3) {
    var n2 = ur(e2, "enum");
    r3 = Ue(r3);
    var o3 = n2.constructor, a3 = Object.create(n2.constructor.prototype, { value: { value: t3 }, constructor: { value: Me(n2.name + "_" + r3, function() {
    }) } });
    o3.values[t3] = a3, o3[r3] = a3;
  }
  function fr(e2, r3) {
    switch (r3) {
      case 2:
        return function(e3) {
          return this.fromWireType(D[e3 >> 2]);
        };
      case 3:
        return function(e3) {
          return this.fromWireType(F[e3 >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + e2);
    }
  }
  function lr(e2, r3, t3) {
    var n2 = We(t3);
    Ge(e2, { name: r3 = Ue(r3), fromWireType: function(e3) {
      return e3;
    }, toWireType: function(e3, r4) {
      return r4;
    }, argPackAdvance: 8, readValueFromPointer: fr(r3, n2), destructorFunction: null });
  }
  function dr(e2, r3, t3, n2, o3) {
    var a3 = r3.length;
    a3 < 2 && Ve("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var i3 = null !== r3[1] && null !== t3, s3 = false, u2 = 1; u2 < r3.length; ++u2)
      if (null !== r3[u2] && void 0 === r3[u2].destructorFunction) {
        s3 = true;
        break;
      }
    var c2 = "void" !== r3[0].name, f2 = a3 - 2, l2 = new Array(f2), d2 = [], m2 = [];
    return function() {
      var t4;
      arguments.length !== f2 && Ve("function " + e2 + " called with " + arguments.length + " arguments, expected " + f2 + " args!"), m2.length = 0, d2.length = i3 ? 2 : 1, d2[0] = o3, i3 && (t4 = r3[1].toWireType(m2, this), d2[1] = t4);
      for (var a4 = 0; a4 < f2; ++a4)
        l2[a4] = r3[a4 + 2].toWireType(m2, arguments[a4]), d2.push(l2[a4]);
      function u3(e3) {
        if (s3)
          De(m2);
        else
          for (var n3 = i3 ? 1 : 2; n3 < r3.length; n3++) {
            var o4 = 1 === n3 ? t4 : l2[n3 - 2];
            null !== r3[n3].destructorFunction && r3[n3].destructorFunction(o4);
          }
        if (c2)
          return r3[0].fromWireType(e3);
      }
      return u3(n2.apply(null, d2));
    };
  }
  function mr(e2, r3) {
    for (var t3 = [], n2 = 0; n2 < e2; n2++)
      t3.push(S[r3 + 4 * n2 >> 2]);
    return t3;
  }
  function pr(e2, r3, t3) {
    o2.hasOwnProperty(e2) || Ie("Replacing nonexistant public symbol"), void 0 !== o2[e2].overloadTable && void 0 !== t3 ? o2[e2].overloadTable[t3] = r3 : (o2[e2] = r3, o2[e2].argCount = t3);
  }
  function hr(e2, r3, t3) {
    var n2 = o2["dynCall_" + e2];
    return t3 && t3.length ? n2.apply(null, [r3].concat(t3)) : n2.call(null, r3);
  }
  var vr = [];
  function _r(e2) {
    var r3 = vr[e2];
    return r3 || (e2 >= vr.length && (vr.length = e2 + 1), vr[e2] = r3 = A.get(e2)), r3;
  }
  function gr(e2, r3, t3) {
    return e2.includes("j") ? hr(e2, r3, t3) : _r(r3).apply(null, t3);
  }
  function yr(e2, r3) {
    var t3 = [];
    return function() {
      return t3.length = 0, Object.assign(t3, arguments), gr(e2, r3, t3);
    };
  }
  function wr(e2, r3) {
    function t3() {
      return e2.includes("j") ? yr(e2, r3) : _r(r3);
    }
    e2 = Ue(e2);
    var n2 = t3();
    return "function" != typeof n2 && Ve("unknown function pointer with signature " + e2 + ": " + r3), n2;
  }
  var Er = void 0;
  function br(e2, r3) {
    var t3 = [], n2 = {};
    function o3(e3) {
      n2[e3] || Pe[e3] || (Ce[e3] ? Ce[e3].forEach(o3) : (t3.push(e3), n2[e3] = true));
    }
    throw r3.forEach(o3), new Er(e2 + ": " + t3.map(sr).join([", "]));
  }
  function kr(e2, r3, t3, n2, o3, a3) {
    var i3 = mr(r3, t3);
    e2 = Ue(e2), o3 = wr(n2, o3), or(e2, function() {
      br("Cannot call " + e2 + " due to unbound types", i3);
    }, r3 - 1), Ne([], i3, function(t4) {
      var n3 = [t4[0], null].concat(t4.slice(1));
      return pr(e2, dr(e2, n3, null, o3, a3), r3 - 1), [];
    });
  }
  function xr(e2, r3, t3) {
    switch (r3) {
      case 0:
        return t3 ? function(e3) {
          return w[e3];
        } : function(e3) {
          return E[e3];
        };
      case 1:
        return t3 ? function(e3) {
          return b[e3 >> 1];
        } : function(e3) {
          return k[e3 >> 1];
        };
      case 2:
        return t3 ? function(e3) {
          return x[e3 >> 2];
        } : function(e3) {
          return S[e3 >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + e2);
    }
  }
  function Sr(e2, r3, t3, n2, o3) {
    r3 = Ue(r3);
    var a3 = We(t3), i3 = (e3) => e3;
    if (0 === n2) {
      var s3 = 32 - 8 * t3;
      i3 = (e3) => e3 << s3 >>> s3;
    }
    var u2 = r3.includes("unsigned"), c2 = (e3, r4) => {
    };
    Ge(e2, { name: r3, fromWireType: i3, toWireType: u2 ? function(e3, r4) {
      return c2(r4, this.name), r4 >>> 0;
    } : function(e3, r4) {
      return c2(r4, this.name), r4;
    }, argPackAdvance: 8, readValueFromPointer: xr(r3, a3, 0 !== n2), destructorFunction: null });
  }
  function Dr(e2, r3, t3) {
    var n2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function o3(e3) {
      var r4 = S, t4 = r4[e3 >>= 2], o4 = r4[e3 + 1];
      return new n2(y, o4, t4);
    }
    Ge(e2, { name: t3 = Ue(t3), fromWireType: o3, argPackAdvance: 8, readValueFromPointer: o3 }, { ignoreDuplicateRegistrations: true });
  }
  function Fr(e2, r3) {
    var t3 = "std::string" === (r3 = Ue(r3));
    Ge(e2, { name: r3, fromWireType: function(e3) {
      var r4, n2 = S[e3 >> 2], o3 = e3 + 4;
      if (t3)
        for (var a3 = o3, i3 = 0; i3 <= n2; ++i3) {
          var s3 = o3 + i3;
          if (i3 == n2 || 0 == E[s3]) {
            var u2 = T(a3, s3 - a3);
            void 0 === r4 ? r4 = u2 : (r4 += String.fromCharCode(0), r4 += u2), a3 = s3 + 1;
          }
        }
      else {
        var c2 = new Array(n2);
        for (i3 = 0; i3 < n2; ++i3)
          c2[i3] = String.fromCharCode(E[o3 + i3]);
        r4 = c2.join("");
      }
      return ho(e3), r4;
    }, toWireType: function(e3, r4) {
      var n2;
      r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
      var o3 = "string" == typeof r4;
      o3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || Ve("Cannot pass non-string to std::string"), n2 = t3 && o3 ? M(r4) : r4.length;
      var a3 = vo(4 + n2 + 1), i3 = a3 + 4;
      if (S[a3 >> 2] = n2, t3 && o3)
        B(r4, i3, n2 + 1);
      else if (o3)
        for (var s3 = 0; s3 < n2; ++s3) {
          var u2 = r4.charCodeAt(s3);
          u2 > 255 && (ho(i3), Ve("String has UTF-16 code units that do not fit in 8 bits")), E[i3 + s3] = u2;
        }
      else
        for (s3 = 0; s3 < n2; ++s3)
          E[i3 + s3] = r4[s3];
      return null !== e3 && e3.push(ho, a3), a3;
    }, argPackAdvance: 8, readValueFromPointer: Fe, destructorFunction: function(e3) {
      ho(e3);
    } });
  }
  var Ar = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
  function Pr(e2, r3) {
    for (var t3 = e2, n2 = t3 >> 1, o3 = n2 + r3 / 2; !(n2 >= o3) && k[n2]; )
      ++n2;
    if ((t3 = n2 << 1) - e2 > 32 && Ar)
      return Ar.decode(E.subarray(e2, t3));
    for (var a3 = "", i3 = 0; !(i3 >= r3 / 2); ++i3) {
      var s3 = b[e2 + 2 * i3 >> 1];
      if (0 == s3)
        break;
      a3 += String.fromCharCode(s3);
    }
    return a3;
  }
  function Cr(e2, r3, t3) {
    if (void 0 === t3 && (t3 = 2147483647), t3 < 2)
      return 0;
    for (var n2 = r3, o3 = (t3 -= 2) < 2 * e2.length ? t3 / 2 : e2.length, a3 = 0; a3 < o3; ++a3) {
      var i3 = e2.charCodeAt(a3);
      b[r3 >> 1] = i3, r3 += 2;
    }
    return b[r3 >> 1] = 0, r3 - n2;
  }
  function Tr(e2) {
    return 2 * e2.length;
  }
  function jr(e2, r3) {
    for (var t3 = 0, n2 = ""; !(t3 >= r3 / 4); ) {
      var o3 = x[e2 + 4 * t3 >> 2];
      if (0 == o3)
        break;
      if (++t3, o3 >= 65536) {
        var a3 = o3 - 65536;
        n2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3);
      } else
        n2 += String.fromCharCode(o3);
    }
    return n2;
  }
  function Br(e2, r3, t3) {
    if (void 0 === t3 && (t3 = 2147483647), t3 < 4)
      return 0;
    for (var n2 = r3, o3 = n2 + t3 - 4, a3 = 0; a3 < e2.length; ++a3) {
      var i3 = e2.charCodeAt(a3);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & e2.charCodeAt(++a3)), x[r3 >> 2] = i3, (r3 += 4) + 4 > o3)
        break;
    }
    return x[r3 >> 2] = 0, r3 - n2;
  }
  function Mr(e2) {
    for (var r3 = 0, t3 = 0; t3 < e2.length; ++t3) {
      var n2 = e2.charCodeAt(t3);
      n2 >= 55296 && n2 <= 57343 && ++t3, r3 += 4;
    }
    return r3;
  }
  function Lr(e2, r3, t3) {
    var n2, o3, a3, i3, s3;
    t3 = Ue(t3), 2 === r3 ? (n2 = Pr, o3 = Cr, i3 = Tr, a3 = () => k, s3 = 1) : 4 === r3 && (n2 = jr, o3 = Br, i3 = Mr, a3 = () => S, s3 = 2), Ge(e2, { name: t3, fromWireType: function(e3) {
      for (var t4, o4 = S[e3 >> 2], i4 = a3(), u2 = e3 + 4, c2 = 0; c2 <= o4; ++c2) {
        var f2 = e3 + 4 + c2 * r3;
        if (c2 == o4 || 0 == i4[f2 >> s3]) {
          var l2 = n2(u2, f2 - u2);
          void 0 === t4 ? t4 = l2 : (t4 += String.fromCharCode(0), t4 += l2), u2 = f2 + r3;
        }
      }
      return ho(e3), t4;
    }, toWireType: function(e3, n3) {
      "string" != typeof n3 && Ve("Cannot pass non-string to C++ string type " + t3);
      var a4 = i3(n3), u2 = vo(4 + a4 + r3);
      return S[u2 >> 2] = a4 >> s3, o3(n3, u2 + 4, a4 + r3), null !== e3 && e3.push(ho, u2), u2;
    }, argPackAdvance: 8, readValueFromPointer: Fe, destructorFunction: function(e3) {
      ho(e3);
    } });
  }
  function Rr(e2, r3, t3, n2, o3, a3) {
    Se[e2] = { name: Ue(r3), rawConstructor: wr(t3, n2), rawDestructor: wr(o3, a3), fields: [] };
  }
  function Ir(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2) {
    Se[e2].fields.push({ fieldName: Ue(r3), getterReturnType: t3, getter: wr(n2, o3), getterContext: a3, setterArgumentType: i3, setter: wr(s3, u2), setterContext: c2 });
  }
  function Nr(e2, r3) {
    Ge(e2, { isVoid: true, name: r3 = Ue(r3), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(e3, r4) {
    } });
  }
  function Or(e2) {
    do {
      var r3 = S[e2 >> 2], t3 = S[(e2 += 4) >> 2], n2 = S[(e2 += 4) >> 2];
      e2 += 4;
      var o3 = T(r3);
      we.createPath("/", de.dirname(o3), true, true), we.createDataFile(o3, null, w.subarray(n2, n2 + t3), true, true, true);
    } while (S[e2 >> 2]);
  }
  function zr(e2) {
    e2 > 4 && (Qe[e2].refcount += 1);
  }
  var Wr = {};
  function Zr(e2) {
    var r3 = Wr[e2];
    return void 0 === r3 ? Ue(e2) : r3;
  }
  function Hr(e2) {
    return rr.toHandle(Zr(e2));
  }
  function Ur() {
    return rr.toHandle({});
  }
  function qr(e2, r3, t3) {
    e2 = rr.toValue(e2), r3 = rr.toValue(r3), t3 = rr.toValue(t3), e2[r3] = t3;
  }
  function Vr(e2, r3) {
    var t3 = (e2 = ur(e2, "_emval_take_value")).readValueFromPointer(r3);
    return rr.toHandle(t3);
  }
  function Gr() {
    Q("");
  }
  function Yr(e2, r3, t3) {
    E.copyWithin(e2, r3, r3 + t3);
  }
  function Xr() {
    return 2147483648;
  }
  function Qr(e2) {
    try {
      return p.grow(e2 - y.byteLength + 65535 >>> 16), L(p.buffer), 1;
    } catch (r3) {
    }
  }
  function Kr(e2) {
    var r3 = E.length;
    e2 >>>= 0;
    var t3 = Xr();
    if (e2 > t3)
      return false;
    let n2 = (e3, r4) => e3 + (r4 - e3 % r4) % r4;
    for (var o3 = 1; o3 <= 4; o3 *= 2) {
      var a3 = r3 * (1 + 0.2 / o3);
      if (a3 = Math.min(a3, e2 + 100663296), Qr(Math.min(t3, n2(Math.max(e2, a3), 65536))))
        return true;
    }
    return false;
  }
  function Jr(e2) {
    return !!(e2.dibvbi = e2.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function $r(e2) {
    return !!(e2.mdibvbi = e2.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function et(e2) {
    return !!(e2.multiDrawWebgl = e2.getExtension("WEBGL_multi_draw"));
  }
  var rt = { counter: 1, buffers: [], programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function(e2) {
    rt.lastError || (rt.lastError = e2);
  }, getNewId: function(e2) {
    for (var r3 = rt.counter++, t3 = e2.length; t3 < r3; t3++)
      e2[t3] = null;
    return r3;
  }, getSource: function(e2, r3, t3, n2) {
    for (var o3 = "", a3 = 0; a3 < r3; ++a3) {
      var i3 = n2 ? x[n2 + 4 * a3 >> 2] : -1;
      o3 += T(x[t3 + 4 * a3 >> 2], i3 < 0 ? void 0 : i3);
    }
    return o3;
  }, createContext: function(e2, r3) {
    if (o2.preinitializedWebGLContext) {
      var t3 = o2.preinitializedWebGLContext;
      r3.majorVersion = "undefined" != typeof WebGL2RenderingContext && t3 instanceof WebGL2RenderingContext ? 2 : 1;
    } else {
      if (!e2.getContextSafariWebGL2Fixed) {
        let n2 = function(r4, t4) {
          var n3 = e2.getContextSafariWebGL2Fixed(r4, t4);
          return "webgl" == r4 == n3 instanceof WebGLRenderingContext ? n3 : null;
        };
        e2.getContextSafariWebGL2Fixed = e2.getContext, e2.getContext = n2;
      }
      t3 = e2.getContext("webgl2", r3);
    }
    return t3 ? rt.registerContext(t3, r3) : 0;
  }, registerContext: function(e2, r3) {
    var t3 = rt.getNewId(rt.contexts), n2 = { handle: t3, attributes: r3, version: r3.majorVersion, GLctx: e2 };
    return e2.canvas && (e2.canvas.GLctxObject = n2), rt.contexts[t3] = n2, (void 0 === r3.enableExtensionsByDefault || r3.enableExtensionsByDefault) && rt.initExtensions(n2), t3;
  }, makeContextCurrent: function(e2) {
    return rt.currentContext = rt.contexts[e2], o2.ctx = uo = rt.currentContext && rt.currentContext.GLctx, !(e2 && !uo);
  }, getContext: function(e2) {
    return rt.contexts[e2];
  }, deleteContext: function(e2) {
    rt.currentContext === rt.contexts[e2] && (rt.currentContext = null), "object" == typeof tt && tt.removeAllHandlersOnTarget(rt.contexts[e2].GLctx.canvas), rt.contexts[e2] && rt.contexts[e2].GLctx.canvas && (rt.contexts[e2].GLctx.canvas.GLctxObject = void 0), rt.contexts[e2] = null;
  }, initExtensions: function(e2) {
    if (e2 || (e2 = rt.currentContext), !e2.initExtensionsDone) {
      e2.initExtensionsDone = true;
      var r3 = e2.GLctx;
      Jr(r3), $r(r3), e2.version >= 2 && (r3.disjointTimerQueryExt = r3.getExtension("EXT_disjoint_timer_query_webgl2")), (e2.version < 2 || !r3.disjointTimerQueryExt) && (r3.disjointTimerQueryExt = r3.getExtension("EXT_disjoint_timer_query")), et(r3), (r3.getSupportedExtensions() || []).forEach(function(e3) {
        e3.includes("lose_context") || e3.includes("debug") || r3.getExtension(e3);
      });
    }
  } }, tt = { inEventHandler: 0, removeAllEventListeners: function() {
    for (var e2 = tt.eventHandlers.length - 1; e2 >= 0; --e2)
      tt._removeHandler(e2);
    tt.eventHandlers = [], tt.deferredCalls = [];
  }, registerRemoveEventListeners: function() {
    tt.removeEventListenersRegistered || (tt.removeEventListenersRegistered = true);
  }, deferredCalls: [], deferCall: function(e2, r3, t3) {
    function n2(e3, r4) {
      if (e3.length != r4.length)
        return false;
      for (var t4 in e3)
        if (e3[t4] != r4[t4])
          return false;
      return true;
    }
    for (var o3 in tt.deferredCalls) {
      var a3 = tt.deferredCalls[o3];
      if (a3.targetFunction == e2 && n2(a3.argsList, t3))
        return;
    }
    tt.deferredCalls.push({ targetFunction: e2, precedence: r3, argsList: t3 }), tt.deferredCalls.sort(function(e3, r4) {
      return e3.precedence < r4.precedence;
    });
  }, removeDeferredCalls: function(e2) {
    for (var r3 = 0; r3 < tt.deferredCalls.length; ++r3)
      tt.deferredCalls[r3].targetFunction == e2 && (tt.deferredCalls.splice(r3, 1), --r3);
  }, canPerformEventHandlerRequests: function() {
    return tt.inEventHandler && tt.currentEventHandler.allowsDeferredCalls;
  }, runDeferredCalls: function() {
    if (tt.canPerformEventHandlerRequests())
      for (var e2 = 0; e2 < tt.deferredCalls.length; ++e2) {
        var r3 = tt.deferredCalls[e2];
        tt.deferredCalls.splice(e2, 1), --e2, r3.targetFunction.apply(null, r3.argsList);
      }
  }, eventHandlers: [], removeAllHandlersOnTarget: function(e2, r3) {
    for (var t3 = 0; t3 < tt.eventHandlers.length; ++t3)
      tt.eventHandlers[t3].target != e2 || r3 && r3 != tt.eventHandlers[t3].eventTypeString || tt._removeHandler(t3--);
  }, _removeHandler: function(e2) {
    var r3 = tt.eventHandlers[e2];
    r3.target.removeEventListener(r3.eventTypeString, r3.eventListenerFunc, r3.useCapture), tt.eventHandlers.splice(e2, 1);
  }, registerOrRemoveHandler: function(e2) {
    var r3 = function(r4) {
      ++tt.inEventHandler, tt.currentEventHandler = e2, tt.runDeferredCalls(), e2.handlerFunc(r4), tt.runDeferredCalls(), --tt.inEventHandler;
    };
    if (e2.callbackfunc)
      e2.eventListenerFunc = r3, e2.target.addEventListener(e2.eventTypeString, r3, e2.useCapture), tt.eventHandlers.push(e2), tt.registerRemoveEventListeners();
    else
      for (var t3 = 0; t3 < tt.eventHandlers.length; ++t3)
        tt.eventHandlers[t3].target == e2.target && tt.eventHandlers[t3].eventTypeString == e2.eventTypeString && tt._removeHandler(t3--);
  }, getNodeNameForTarget: function(e2) {
    return e2 ? e2 == window ? "#window" : e2 == screen ? "#screen" : e2 && e2.nodeName ? e2.nodeName : "" : "";
  }, fullscreenEnabled: function() {
    return document.fullscreenEnabled || document.webkitFullscreenEnabled;
  } }, nt = ["default", "low-power", "high-performance"];
  function ot(e2) {
    return e2 > 2 ? T(e2) : e2;
  }
  var at = [0, document, window];
  function it(e2) {
    return e2 = ot(e2), at[e2] || document.querySelector(e2);
  }
  function st(e2) {
    return it(e2);
  }
  function ut(e2, r3) {
    var t3 = r3 >> 2, n2 = x[t3 + 6], o3 = { alpha: !!x[t3 + 0], depth: !!x[t3 + 1], stencil: !!x[t3 + 2], antialias: !!x[t3 + 3], premultipliedAlpha: !!x[t3 + 4], preserveDrawingBuffer: !!x[t3 + 5], powerPreference: nt[n2], failIfMajorPerformanceCaveat: !!x[t3 + 7], majorVersion: x[t3 + 8], minorVersion: x[t3 + 9], enableExtensionsByDefault: x[t3 + 10], explicitSwapControl: x[t3 + 11], proxyContextToMainThread: x[t3 + 12], renderViaOffscreenBackBuffer: x[t3 + 13] }, a3 = st(e2);
    return a3 ? o3.explicitSwapControl ? 0 : rt.createContext(a3, o3) : 0;
  }
  var ct = ut;
  function ft(e2) {
    for (var r3 = e2 >> 2, t3 = 0; t3 < 14; ++t3)
      x[r3 + t3] = 0;
    x[r3 + 0] = x[r3 + 1] = x[r3 + 3] = x[r3 + 4] = x[r3 + 8] = x[r3 + 10] = 1;
  }
  function lt(e2) {
    return rt.makeContextCurrent(e2) ? 0 : -5;
  }
  var dt = {};
  function mt() {
    return c || "./this.program";
  }
  function pt() {
    if (!pt.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: mt() };
      for (var r3 in dt)
        void 0 === dt[r3] ? delete e2[r3] : e2[r3] = dt[r3];
      var t3 = [];
      for (var r3 in e2)
        t3.push(r3 + "=" + e2[r3]);
      pt.strings = t3;
    }
    return pt.strings;
  }
  function ht(e2, r3, t3) {
    for (var n2 = 0; n2 < e2.length; ++n2)
      w[r3++ >> 0] = e2.charCodeAt(n2);
    t3 || (w[r3 >> 0] = 0);
  }
  function vt(e2, r3) {
    var t3 = 0;
    return pt().forEach(function(n2, o3) {
      var a3 = r3 + t3;
      S[e2 + 4 * o3 >> 2] = a3, ht(n2, a3), t3 += n2.length + 1;
    }), 0;
  }
  function _t(e2, r3) {
    var t3 = pt();
    S[e2 >> 2] = t3.length;
    var n2 = 0;
    return t3.forEach(function(e3) {
      n2 += e3.length + 1;
    }), S[r3 >> 2] = n2, 0;
  }
  function gt(e2) {
    try {
      var r3 = Ee.getStreamFromFD(e2);
      return we.close(r3), 0;
    } catch (t3) {
      if (void 0 === we || !(t3 instanceof we.ErrnoError))
        throw t3;
      return t3.errno;
    }
  }
  function yt(e2, r3, t3, n2) {
    for (var o3 = 0, a3 = 0; a3 < t3; a3++) {
      var i3 = S[r3 >> 2], s3 = S[r3 + 4 >> 2];
      r3 += 8;
      var u2 = we.read(e2, w, i3, s3, n2);
      if (u2 < 0)
        return -1;
      if (o3 += u2, u2 < s3)
        break;
    }
    return o3;
  }
  function wt(e2, r3, t3, n2) {
    try {
      var o3 = yt(Ee.getStreamFromFD(e2), r3, t3);
      return x[n2 >> 2] = o3, 0;
    } catch (a3) {
      if (void 0 === we || !(a3 instanceof we.ErrnoError))
        throw a3;
      return a3.errno;
    }
  }
  function Et(e2, r3) {
    return r3 + 2097152 >>> 0 < 4194305 - !!e2 ? (e2 >>> 0) + 4294967296 * r3 : NaN;
  }
  function bt(e2, r3, t3, n2, o3) {
    try {
      var a3 = Et(r3, t3);
      if (isNaN(a3))
        return 61;
      var i3 = Ee.getStreamFromFD(e2);
      return we.llseek(i3, a3, n2), $ = [i3.position >>> 0, (J = i3.position, +Math.abs(J) >= 1 ? J > 0 ? (0 | Math.min(+Math.floor(J / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0 : 0)], x[o3 >> 2] = $[0], x[o3 + 4 >> 2] = $[1], i3.getdents && 0 === a3 && 0 === n2 && (i3.getdents = null), 0;
    } catch (s3) {
      if (void 0 === we || !(s3 instanceof we.ErrnoError))
        throw s3;
      return s3.errno;
    }
  }
  function kt(e2, r3, t3, n2) {
    for (var o3 = 0, a3 = 0; a3 < t3; a3++) {
      var i3 = S[r3 >> 2], s3 = S[r3 + 4 >> 2];
      r3 += 8;
      var u2 = we.write(e2, w, i3, s3, n2);
      if (u2 < 0)
        return -1;
      o3 += u2;
    }
    return o3;
  }
  function xt(e2, r3, t3, n2) {
    try {
      var o3 = kt(Ee.getStreamFromFD(e2), r3, t3);
      return S[n2 >> 2] = o3, 0;
    } catch (a3) {
      if (void 0 === we || !(a3 instanceof we.ErrnoError))
        throw a3;
      return a3.errno;
    }
  }
  function St(e2) {
    uo.activeTexture(e2);
  }
  function Dt(e2, r3) {
    uo.attachShader(rt.programs[e2], rt.shaders[r3]);
  }
  function Ft(e2, r3, t3) {
    uo.bindAttribLocation(rt.programs[e2], r3, T(t3));
  }
  function At(e2, r3) {
    35051 == e2 ? uo.currentPixelPackBufferBinding = r3 : 35052 == e2 && (uo.currentPixelUnpackBufferBinding = r3), uo.bindBuffer(e2, rt.buffers[r3]);
  }
  function Pt(e2, r3, t3) {
    uo.bindBufferBase(e2, r3, rt.buffers[t3]);
  }
  function Ct(e2, r3, t3, n2, o3) {
    uo.bindBufferRange(e2, r3, rt.buffers[t3], n2, o3);
  }
  function Tt(e2, r3) {
    uo.bindFramebuffer(e2, rt.framebuffers[r3]);
  }
  function jt(e2, r3) {
    uo.bindTexture(e2, rt.textures[r3]);
  }
  function Bt(e2) {
    uo.bindVertexArray(rt.vaos[e2]);
  }
  function Mt(e2, r3, t3, n2) {
    t3 && r3 ? uo.bufferData(e2, E, n2, t3, r3) : uo.bufferData(e2, r3, n2);
  }
  function Lt(e2, r3, t3, n2) {
    t3 && uo.bufferSubData(e2, r3, E, n2, t3);
  }
  function Rt(e2) {
    uo.clear(e2);
  }
  function It(e2, r3, t3, n2) {
    uo.clearBufferfi(e2, r3, t3, n2);
  }
  function Nt(e2, r3, t3) {
    uo.clearBufferfv(e2, r3, D, t3 >> 2);
  }
  function Ot(e2, r3, t3) {
    uo.clearBufferiv(e2, r3, x, t3 >> 2);
  }
  function zt(e2, r3, t3) {
    uo.clearBufferuiv(e2, r3, S, t3 >> 2);
  }
  function Wt(e2, r3, t3, n2) {
    uo.clearColor(e2, r3, t3, n2);
  }
  function Zt(e2) {
    uo.clearDepth(e2);
  }
  function Ht(e2) {
    uo.clearStencil(e2);
  }
  function Ut(e2, r3, t3, n2) {
    uo.colorMask(!!e2, !!r3, !!t3, !!n2);
  }
  function qt(e2) {
    uo.compileShader(rt.shaders[e2]);
  }
  function Vt() {
    var e2 = rt.getNewId(rt.programs), r3 = uo.createProgram();
    return r3.name = e2, r3.maxUniformLength = r3.maxAttributeLength = r3.maxUniformBlockNameLength = 0, r3.uniformIdCounter = 1, rt.programs[e2] = r3, e2;
  }
  function Gt(e2) {
    var r3 = rt.getNewId(rt.shaders);
    return rt.shaders[r3] = uo.createShader(e2), r3;
  }
  function Yt(e2, r3) {
    for (var t3 = 0; t3 < e2; t3++) {
      var n2 = x[r3 + 4 * t3 >> 2], o3 = rt.buffers[n2];
      o3 && (uo.deleteBuffer(o3), o3.name = 0, rt.buffers[n2] = null, n2 == uo.currentPixelPackBufferBinding && (uo.currentPixelPackBufferBinding = 0), n2 == uo.currentPixelUnpackBufferBinding && (uo.currentPixelUnpackBufferBinding = 0));
    }
  }
  function Xt(e2, r3) {
    for (var t3 = 0; t3 < e2; ++t3) {
      var n2 = x[r3 + 4 * t3 >> 2], o3 = rt.framebuffers[n2];
      o3 && (uo.deleteFramebuffer(o3), o3.name = 0, rt.framebuffers[n2] = null);
    }
  }
  function Qt(e2) {
    if (e2) {
      var r3 = rt.programs[e2];
      r3 ? (uo.deleteProgram(r3), r3.name = 0, rt.programs[e2] = null) : rt.recordError(1281);
    }
  }
  function Kt(e2, r3) {
    for (var t3 = 0; t3 < e2; t3++) {
      var n2 = x[r3 + 4 * t3 >> 2], o3 = rt.queries[n2];
      o3 && (uo.deleteQuery(o3), rt.queries[n2] = null);
    }
  }
  function Jt(e2) {
    if (e2) {
      var r3 = rt.shaders[e2];
      r3 ? (uo.deleteShader(r3), rt.shaders[e2] = null) : rt.recordError(1281);
    }
  }
  function $t(e2, r3) {
    for (var t3 = 0; t3 < e2; t3++) {
      var n2 = x[r3 + 4 * t3 >> 2], o3 = rt.textures[n2];
      o3 && (uo.deleteTexture(o3), o3.name = 0, rt.textures[n2] = null);
    }
  }
  function en(e2, r3) {
    for (var t3 = 0; t3 < e2; t3++) {
      var n2 = x[r3 + 4 * t3 >> 2];
      uo.deleteVertexArray(rt.vaos[n2]), rt.vaos[n2] = null;
    }
  }
  function rn(e2, r3, t3) {
    uo.drawArrays(e2, r3, t3);
  }
  var tn = [];
  function nn(e2, r3) {
    for (var t3 = tn[e2], n2 = 0; n2 < e2; n2++)
      t3[n2] = x[r3 + 4 * n2 >> 2];
    uo.drawBuffers(t3);
  }
  function on(e2, r3, t3, n2) {
    uo.drawElements(e2, r3, t3, n2);
  }
  function an(e2, r3, t3, n2, o3) {
    uo.drawElementsInstanced(e2, r3, t3, n2, o3);
  }
  function sn(e2) {
    uo.enableVertexAttribArray(e2);
  }
  function un(e2, r3, t3, n2, o3) {
    uo.framebufferTexture2D(e2, r3, t3, rt.textures[n2], o3);
  }
  function cn(e2, r3, t3, n2) {
    for (var o3 = 0; o3 < e2; o3++) {
      var a3 = uo[t3](), i3 = a3 && rt.getNewId(n2);
      a3 ? (a3.name = i3, n2[i3] = a3) : rt.recordError(1282), x[r3 + 4 * o3 >> 2] = i3;
    }
  }
  function fn(e2, r3) {
    cn(e2, r3, "createBuffer", rt.buffers);
  }
  function ln(e2, r3) {
    cn(e2, r3, "createFramebuffer", rt.framebuffers);
  }
  function dn(e2, r3) {
    cn(e2, r3, "createQuery", rt.queries);
  }
  function mn(e2, r3) {
    cn(e2, r3, "createTexture", rt.textures);
  }
  function pn(e2, r3) {
    cn(e2, r3, "createVertexArray", rt.vaos);
  }
  function hn(e2) {
    uo.generateMipmap(e2);
  }
  function vn(e2, r3) {
    S[e2 >> 2] = r3, S[e2 + 4 >> 2] = (r3 - S[e2 >> 2]) / 4294967296;
  }
  function _n(e2, r3, t3) {
    if (r3) {
      var n2 = void 0;
      switch (e2) {
        case 36346:
          n2 = 1;
          break;
        case 36344:
          return void (0 != t3 && 1 != t3 && rt.recordError(1280));
        case 34814:
        case 36345:
          n2 = 0;
          break;
        case 34466:
          var o3 = uo.getParameter(34467);
          n2 = o3 ? o3.length : 0;
          break;
        case 33309:
          if (rt.currentContext.version < 2)
            return void rt.recordError(1282);
          n2 = 2 * (uo.getSupportedExtensions() || []).length;
          break;
        case 33307:
        case 33308:
          if (rt.currentContext.version < 2)
            return void rt.recordError(1280);
          n2 = 33307 == e2 ? 3 : 0;
      }
      if (void 0 === n2) {
        var a3 = uo.getParameter(e2);
        switch (typeof a3) {
          case "number":
            n2 = a3;
            break;
          case "boolean":
            n2 = a3 ? 1 : 0;
            break;
          case "string":
            return void rt.recordError(1280);
          case "object":
            if (null === a3)
              switch (e2) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068:
                  n2 = 0;
                  break;
                default:
                  return void rt.recordError(1280);
              }
            else {
              if (a3 instanceof Float32Array || a3 instanceof Uint32Array || a3 instanceof Int32Array || a3 instanceof Array) {
                for (var i3 = 0; i3 < a3.length; ++i3)
                  switch (t3) {
                    case 0:
                      x[r3 + 4 * i3 >> 2] = a3[i3];
                      break;
                    case 2:
                      D[r3 + 4 * i3 >> 2] = a3[i3];
                      break;
                    case 4:
                      w[r3 + i3 >> 0] = a3[i3] ? 1 : 0;
                  }
                return;
              }
              try {
                n2 = 0 | a3.name;
              } catch (s3) {
                return rt.recordError(1280), void v("GL_INVALID_ENUM in glGet" + t3 + "v: Unknown object returned from WebGL getParameter(" + e2 + ")! (error: " + s3 + ")");
              }
            }
            break;
          default:
            return rt.recordError(1280), void v("GL_INVALID_ENUM in glGet" + t3 + "v: Native code calling glGet" + t3 + "v(" + e2 + ") and it returns " + a3 + " of type " + typeof a3 + "!");
        }
      }
      switch (t3) {
        case 1:
          vn(r3, n2);
          break;
        case 0:
          x[r3 >> 2] = n2;
          break;
        case 2:
          D[r3 >> 2] = n2;
          break;
        case 4:
          w[r3 >> 0] = n2 ? 1 : 0;
      }
    } else
      rt.recordError(1281);
  }
  function gn(e2, r3) {
    _n(e2, r3, 0);
  }
  function yn(e2, r3, t3) {
    if (t3) {
      var n2, o3 = rt.queries[e2];
      vn(t3, "boolean" == typeof (n2 = rt.currentContext.version < 2 ? uo.disjointTimerQueryExt.getQueryObjectEXT(o3, r3) : uo.getQueryParameter(o3, r3)) ? n2 ? 1 : 0 : n2);
    } else
      rt.recordError(1281);
  }
  function wn(e2, r3, t3) {
    if (t3) {
      var n2, o3 = rt.queries[e2], a3 = uo.disjointTimerQueryExt.getQueryObjectEXT(o3, r3);
      n2 = "boolean" == typeof a3 ? a3 ? 1 : 0 : a3, x[t3 >> 2] = n2;
    } else
      rt.recordError(1281);
  }
  function En(e2, r3) {
    return uo.getUniformBlockIndex(rt.programs[e2], T(r3));
  }
  function bn(e2) {
    return parseInt(e2);
  }
  function kn(e2) {
    return "]" == e2.slice(-1) && e2.lastIndexOf("[");
  }
  function xn(e2) {
    var r3, t3, n2 = e2.uniformLocsById, o3 = e2.uniformSizeAndIdsByName;
    if (!n2)
      for (e2.uniformLocsById = n2 = {}, e2.uniformArrayNamesById = {}, r3 = 0; r3 < uo.getProgramParameter(e2, 35718); ++r3) {
        var a3 = uo.getActiveUniform(e2, r3), i3 = a3.name, s3 = a3.size, u2 = kn(i3), c2 = u2 > 0 ? i3.slice(0, u2) : i3, f2 = e2.uniformIdCounter;
        for (e2.uniformIdCounter += s3, o3[c2] = [s3, f2], t3 = 0; t3 < s3; ++t3)
          n2[f2] = t3, e2.uniformArrayNamesById[f2++] = c2;
      }
  }
  function Sn(e2, r3) {
    if (r3 = T(r3), e2 = rt.programs[e2]) {
      xn(e2);
      var t3 = e2.uniformLocsById, n2 = 0, o3 = r3, a3 = kn(r3);
      a3 > 0 && (n2 = bn(r3.slice(a3 + 1)) >>> 0, o3 = r3.slice(0, a3));
      var i3 = e2.uniformSizeAndIdsByName[o3];
      if (i3 && n2 < i3[0] && (t3[n2 += i3[1]] = t3[n2] || uo.getUniformLocation(e2, r3)))
        return n2;
    } else
      rt.recordError(1281);
    return -1;
  }
  function Dn(e2) {
    e2 = rt.programs[e2], uo.linkProgram(e2), e2.uniformLocsById = 0, e2.uniformSizeAndIdsByName = {};
  }
  function Fn(e2, r3) {
    3317 == e2 && (rt.unpackAlignment = r3), uo.pixelStorei(e2, r3);
  }
  function An(e2, r3) {
    uo.disjointTimerQueryExt.queryCounterEXT(rt.queries[e2], r3);
  }
  function Pn(e2) {
    uo.readBuffer(e2);
  }
  function Cn(e2) {
    return 0 == (e2 -= 5120) ? w : 1 == e2 ? E : 2 == e2 ? b : 4 == e2 ? x : 6 == e2 ? D : 5 == e2 || 28922 == e2 || 28520 == e2 || 30779 == e2 || 30782 == e2 ? S : k;
  }
  function Tn(e2) {
    return 31 - Math.clz32(e2.BYTES_PER_ELEMENT);
  }
  function jn(e2, r3, t3, n2, o3, a3, i3) {
    if (uo.currentPixelPackBufferBinding)
      uo.readPixels(e2, r3, t3, n2, o3, a3, i3);
    else {
      var s3 = Cn(a3);
      uo.readPixels(e2, r3, t3, n2, o3, a3, s3, i3 >> Tn(s3));
    }
  }
  function Bn(e2, r3, t3, n2) {
    var o3 = rt.getSource(e2, r3, t3, n2);
    uo.shaderSource(rt.shaders[e2], o3);
  }
  function Mn(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2) {
    if (uo.currentPixelUnpackBufferBinding)
      uo.texImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2);
    else if (c2) {
      var f2 = Cn(u2);
      uo.texImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, f2, c2 >> Tn(f2));
    } else
      uo.texImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, null);
  }
  function Ln(e2, r3, t3) {
    uo.texParameteri(e2, r3, t3);
  }
  function Rn(e2, r3, t3, n2, o3) {
    uo.texStorage2D(e2, r3, t3, n2, o3);
  }
  function In(e2, r3, t3, n2, o3, a3, i3, s3, u2) {
    if (uo.currentPixelUnpackBufferBinding)
      uo.texSubImage2D(e2, r3, t3, n2, o3, a3, i3, s3, u2);
    else if (u2) {
      var c2 = Cn(s3);
      uo.texSubImage2D(e2, r3, t3, n2, o3, a3, i3, s3, c2, u2 >> Tn(c2));
    } else
      uo.texSubImage2D(e2, r3, t3, n2, o3, a3, i3, s3, null);
  }
  function Nn(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2, f2) {
    if (uo.currentPixelUnpackBufferBinding)
      uo.texSubImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2, f2);
    else if (f2) {
      var l2 = Cn(c2);
      uo.texSubImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2, l2, f2 >> Tn(l2));
    } else
      uo.texSubImage3D(e2, r3, t3, n2, o3, a3, i3, s3, u2, c2, null);
  }
  function On(e2) {
    var r3 = uo.currentProgram;
    if (r3) {
      var t3 = r3.uniformLocsById[e2];
      return "number" == typeof t3 && (r3.uniformLocsById[e2] = t3 = uo.getUniformLocation(r3, r3.uniformArrayNamesById[e2] + (t3 > 0 ? "[" + t3 + "]" : ""))), t3;
    }
    rt.recordError(1282);
  }
  function zn(e2, r3) {
    uo.uniform1i(On(e2), r3);
  }
  function Wn(e2, r3, t3) {
    e2 = rt.programs[e2], uo.uniformBlockBinding(e2, r3, t3);
  }
  function Zn(e2) {
    e2 = rt.programs[e2], uo.useProgram(e2), uo.currentProgram = e2;
  }
  function Hn(e2, r3, t3, n2, o3) {
    uo.vertexAttribIPointer(e2, r3, t3, n2, o3);
  }
  function Un(e2, r3, t3, n2, o3, a3) {
    uo.vertexAttribPointer(e2, r3, t3, !!n2, o3, a3);
  }
  function qn(e2) {
  }
  function Vn(e2) {
    return e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0);
  }
  function Gn(e2, r3) {
    for (var t3 = 0, n2 = 0; n2 <= r3; t3 += e2[n2++])
      ;
    return t3;
  }
  var Yn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Xn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Qn(e2, r3) {
    for (var t3 = new Date(e2.getTime()); r3 > 0; ) {
      var n2 = Vn(t3.getFullYear()), o3 = t3.getMonth(), a3 = (n2 ? Yn : Xn)[o3];
      if (!(r3 > a3 - t3.getDate()))
        return t3.setDate(t3.getDate() + r3), t3;
      r3 -= a3 - t3.getDate() + 1, t3.setDate(1), o3 < 11 ? t3.setMonth(o3 + 1) : (t3.setMonth(0), t3.setFullYear(t3.getFullYear() + 1));
    }
    return t3;
  }
  function Kn(e2, r3, t3, n2) {
    var o3 = x[n2 + 40 >> 2], a3 = { tm_sec: x[n2 >> 2], tm_min: x[n2 + 4 >> 2], tm_hour: x[n2 + 8 >> 2], tm_mday: x[n2 + 12 >> 2], tm_mon: x[n2 + 16 >> 2], tm_year: x[n2 + 20 >> 2], tm_wday: x[n2 + 24 >> 2], tm_yday: x[n2 + 28 >> 2], tm_isdst: x[n2 + 32 >> 2], tm_gmtoff: x[n2 + 36 >> 2], tm_zone: o3 ? T(o3) : "" }, i3 = T(t3), s3 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var u2 in s3)
      i3 = i3.replace(new RegExp(u2, "g"), s3[u2]);
    var c2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], f2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function l2(e3, r4, t4) {
      for (var n3 = "number" == typeof e3 ? e3.toString() : e3 || ""; n3.length < r4; )
        n3 = t4[0] + n3;
      return n3;
    }
    function d2(e3, r4) {
      return l2(e3, r4, "0");
    }
    function m2(e3, r4) {
      function t4(e4) {
        return e4 < 0 ? -1 : e4 > 0 ? 1 : 0;
      }
      var n3;
      return 0 === (n3 = t4(e3.getFullYear() - r4.getFullYear())) && 0 === (n3 = t4(e3.getMonth() - r4.getMonth())) && (n3 = t4(e3.getDate() - r4.getDate())), n3;
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
    function h2(e3) {
      var r4 = Qn(new Date(e3.tm_year + 1900, 0, 1), e3.tm_yday), t4 = new Date(r4.getFullYear(), 0, 4), n3 = new Date(r4.getFullYear() + 1, 0, 4), o4 = p2(t4), a4 = p2(n3);
      return m2(o4, r4) <= 0 ? m2(a4, r4) <= 0 ? r4.getFullYear() + 1 : r4.getFullYear() : r4.getFullYear() - 1;
    }
    var v2 = { "%a": function(e3) {
      return c2[e3.tm_wday].substring(0, 3);
    }, "%A": function(e3) {
      return c2[e3.tm_wday];
    }, "%b": function(e3) {
      return f2[e3.tm_mon].substring(0, 3);
    }, "%B": function(e3) {
      return f2[e3.tm_mon];
    }, "%C": function(e3) {
      return d2((e3.tm_year + 1900) / 100 | 0, 2);
    }, "%d": function(e3) {
      return d2(e3.tm_mday, 2);
    }, "%e": function(e3) {
      return l2(e3.tm_mday, 2, " ");
    }, "%g": function(e3) {
      return h2(e3).toString().substring(2);
    }, "%G": function(e3) {
      return h2(e3);
    }, "%H": function(e3) {
      return d2(e3.tm_hour, 2);
    }, "%I": function(e3) {
      var r4 = e3.tm_hour;
      return 0 == r4 ? r4 = 12 : r4 > 12 && (r4 -= 12), d2(r4, 2);
    }, "%j": function(e3) {
      return d2(e3.tm_mday + Gn(Vn(e3.tm_year + 1900) ? Yn : Xn, e3.tm_mon - 1), 3);
    }, "%m": function(e3) {
      return d2(e3.tm_mon + 1, 2);
    }, "%M": function(e3) {
      return d2(e3.tm_min, 2);
    }, "%n": function() {
      return "\n";
    }, "%p": function(e3) {
      return e3.tm_hour >= 0 && e3.tm_hour < 12 ? "AM" : "PM";
    }, "%S": function(e3) {
      return d2(e3.tm_sec, 2);
    }, "%t": function() {
      return "	";
    }, "%u": function(e3) {
      return e3.tm_wday || 7;
    }, "%U": function(e3) {
      var r4 = e3.tm_yday + 7 - e3.tm_wday;
      return d2(Math.floor(r4 / 7), 2);
    }, "%V": function(e3) {
      var r4 = Math.floor((e3.tm_yday + 7 - (e3.tm_wday + 6) % 7) / 7);
      if ((e3.tm_wday + 371 - e3.tm_yday - 2) % 7 <= 2 && r4++, r4) {
        if (53 == r4) {
          var t4 = (e3.tm_wday + 371 - e3.tm_yday) % 7;
          4 == t4 || 3 == t4 && Vn(e3.tm_year) || (r4 = 1);
        }
      } else {
        r4 = 52;
        var n3 = (e3.tm_wday + 7 - e3.tm_yday - 1) % 7;
        (4 == n3 || 5 == n3 && Vn(e3.tm_year % 400 - 1)) && r4++;
      }
      return d2(r4, 2);
    }, "%w": function(e3) {
      return e3.tm_wday;
    }, "%W": function(e3) {
      var r4 = e3.tm_yday + 7 - (e3.tm_wday + 6) % 7;
      return d2(Math.floor(r4 / 7), 2);
    }, "%y": function(e3) {
      return (e3.tm_year + 1900).toString().substring(2);
    }, "%Y": function(e3) {
      return e3.tm_year + 1900;
    }, "%z": function(e3) {
      var r4 = e3.tm_gmtoff, t4 = r4 >= 0;
      return r4 = (r4 = Math.abs(r4) / 60) / 60 * 100 + r4 % 60, (t4 ? "+" : "-") + String("0000" + r4).slice(-4);
    }, "%Z": function(e3) {
      return e3.tm_zone;
    }, "%%": function() {
      return "%";
    } };
    for (var u2 in i3 = i3.replace(/%%/g, "\0\0"), v2)
      i3.includes(u2) && (i3 = i3.replace(new RegExp(u2, "g"), v2[u2](a3)));
    var _2 = he(i3 = i3.replace(/\0\0/g, "%"), false);
    return _2.length > r3 ? 0 : (ie(_2, e2), _2.length - 1);
  }
  function Jn(e2, r3, t3, n2) {
    return Kn(e2, r3, t3, n2);
  }
  function $n(e2, r3) {
    e2 < 128 ? r3.push(e2) : r3.push(e2 % 128 | 128, e2 >> 7);
  }
  function eo(e2) {
    for (var r3 = { i: "i32", j: "i64", f: "f32", d: "f64", p: "i32" }, t3 = { parameters: [], results: "v" == e2[0] ? [] : [r3[e2[0]]] }, n2 = 1; n2 < e2.length; ++n2)
      t3.parameters.push(r3[e2[n2]]);
    return t3;
  }
  function ro(e2, r3) {
    if ("function" == typeof WebAssembly.Function)
      return new WebAssembly.Function(eo(r3), e2);
    var t3 = [1, 96], n2 = r3.slice(0, 1), o3 = r3.slice(1), a3 = { i: 127, p: 127, j: 126, f: 125, d: 124 };
    $n(o3.length, t3);
    for (var i3 = 0; i3 < o3.length; ++i3)
      t3.push(a3[o3[i3]]);
    "v" == n2 ? t3.push(0) : t3.push(1, a3[n2]);
    var s3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
    $n(t3.length, s3), s3.push.apply(s3, t3), s3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
    var u2 = new WebAssembly.Module(new Uint8Array(s3));
    return new WebAssembly.Instance(u2, { e: { f: e2 } }).exports.f;
  }
  function to(e2, r3) {
    if (no)
      for (var t3 = e2; t3 < e2 + r3; t3++) {
        var n2 = _r(t3);
        n2 && no.set(n2, t3);
      }
  }
  var no = void 0, oo = [];
  function ao() {
    if (oo.length)
      return oo.pop();
    try {
      A.grow(1);
    } catch (v2) {
      if (!(v2 instanceof RangeError))
        throw v2;
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    return A.length - 1;
  }
  function io(e2, r3) {
    A.set(e2, r3), vr[e2] = A.get(e2);
  }
  function so(e2, r3) {
    if (no || (no = /* @__PURE__ */ new WeakMap(), to(0, A.length)), no.has(e2))
      return no.get(e2);
    var t3 = ao();
    try {
      io(t3, e2);
    } catch (v2) {
      if (!(v2 instanceof TypeError))
        throw v2;
      io(t3, ro(e2, r3));
    }
    return no.set(e2, t3), t3;
  }
  var uo, co = function(e2, r3, t3, n2) {
    e2 || (e2 = this), this.parent = e2, this.mount = e2.mount, this.mounted = null, this.id = we.nextInode++, this.name = r3, this.mode = t3, this.node_ops = {}, this.stream_ops = {}, this.rdev = n2;
  }, fo = 365, lo = 146;
  Object.defineProperties(co.prototype, { read: { get: function() {
    return (this.mode & fo) === fo;
  }, set: function(e2) {
    e2 ? this.mode |= fo : this.mode &= ~fo;
  } }, write: { get: function() {
    return (this.mode & lo) === lo;
  }, set: function(e2) {
    e2 ? this.mode |= lo : this.mode &= ~lo;
  } }, isFolder: { get: function() {
    return we.isDir(this.mode);
  } }, isDevice: { get: function() {
    return we.isChrdev(this.mode);
  } } }), we.FSNode = co, we.staticInit(), o2.FS_createPath = we.createPath, o2.FS_createDataFile = we.createDataFile, o2.FS_createPreloadedFile = we.createPreloadedFile, o2.FS_unlink = we.unlink, o2.FS_createLazyFile = we.createLazyFile, o2.FS_createDevice = we.createDevice, Re = o2.InternalError = Le(Error, "InternalError"), Ze(), qe = o2.BindingError = Le(Error, "BindingError"), er(), Er = o2.UnboundTypeError = Le(Error, "UnboundTypeError");
  for (var mo = 0; mo < 32; ++mo)
    tn.push(new Array(mo));
  var po = { Y: se, n: ue, m: fe, A: be, $: ke, aa: xe, ja: Oe, Ta: ze, fa: Ye, ea: tr, G: ir, j: cr, F: lr, e: kr, g: Sr, f: Dr, E: Fr, x: Lr, ka: Rr, p: Ir, ga: Nr, ha: Or, a: Ke, o: zr, b: Hr, h: Ur, c: qr, d: Vr, B: Gr, ca: Yr, ba: Kr, ia: ct, ma: ft, da: lt, Wa: vt, Z: _t, C: gt, _: wt, Sa: bt, D: xt, La: St, r: Dt, Ca: Ft, Oa: At, Ma: Pt, Na: Ct, u: Tt, i: jt, v: Bt, Xa: Mt, Q: Lt, S: Rt, Ga: It, z: Nt, Fa: Ot, R: zt, Ja: Wt, Ia: Zt, Ha: Ht, la: Ut, M: qt, Da: Vt, O: Gt, X: Yt, U: Xt, Ea: Qt, J: Kt, q: Jt, T: $t, L: en, Pa: rn, Ka: nn, Qa: on, Ra: an, qa: sn, t: un, Ya: fn, V: ln, K: dn, xa: mn, ra: pn, sa: hn, w: gn, H: yn, na: wn, Ba: En, za: Sn, P: Dn, l: Fn, I: An, y: Pn, s: jn, N: Bn, va: Mn, k: Ln, wa: Rn, ta: In, ua: Nn, ya: zn, Aa: Wn, W: Zn, oa: Hn, pa: Un, Ua: qn, Va: Jn };
  oe(), o2.___wasm_call_ctors = function() {
    return (o2.___wasm_call_ctors = o2.asm._a).apply(null, arguments);
  };
  var ho = o2._free = function() {
    return (ho = o2._free = o2.asm.ab).apply(null, arguments);
  }, vo = o2._malloc = function() {
    return (vo = o2._malloc = o2.asm.bb).apply(null, arguments);
  };
  o2.__Z16get_new_requestsi = function() {
    return (o2.__Z16get_new_requestsi = o2.asm.cb).apply(null, arguments);
  }, o2.__Z7respondiiN6i3slib3vxl13Wasm_responseE = function() {
    return (o2.__Z7respondiiN6i3slib3vxl13Wasm_responseE = o2.asm.db).apply(null, arguments);
  }, o2.__Z9add_layerRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjjddddbi = function() {
    return (o2.__Z9add_layerRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjjddddbi = o2.asm.eb).apply(null, arguments);
  }, o2.__Z12remove_layeri = function() {
    return (o2.__Z12remove_layeri = o2.asm.fb).apply(null, arguments);
  }, o2.__Z21initialize_voxel_wasmiiiiiiiiddbbb = function() {
    return (o2.__Z21initialize_voxel_wasmiiiiiiiiddbbb = o2.asm.gb).apply(null, arguments);
  }, o2.__Z23uninitialize_voxel_wasmv = function() {
    return (o2.__Z23uninitialize_voxel_wasmv = o2.asm.hb).apply(null, arguments);
  }, o2.__Z15set_view_matrixffffffffffffffff = function() {
    return (o2.__Z15set_view_matrixffffffffffffffff = o2.asm.ib).apply(null, arguments);
  }, o2.__Z21set_projection_matrixffffffffffffffff = function() {
    return (o2.__Z21set_projection_matrixffffffffffffffff = o2.asm.jb).apply(null, arguments);
  }, o2.__Z12set_near_fardd = function() {
    return (o2.__Z12set_near_fardd = o2.asm.kb).apply(null, arguments);
  }, o2.__Z4cullv = function() {
    return (o2.__Z4cullv = o2.asm.lb).apply(null, arguments);
  }, o2.__Z31update_camera_pos_and_directiondddddd = function() {
    return (o2.__Z31update_camera_pos_and_directiondddddd = o2.asm.mb).apply(null, arguments);
  }, o2.__Z8get_nearv = function() {
    return (o2.__Z8get_nearv = o2.asm.nb).apply(null, arguments);
  }, o2.__Z7get_farv = function() {
    return (o2.__Z7get_farv = o2.asm.ob).apply(null, arguments);
  }, o2.__Z17begin_color_framebddd = function() {
    return (o2.__Z17begin_color_framebddd = o2.asm.pb).apply(null, arguments);
  }, o2.__Z11begin_framev = function() {
    return (o2.__Z11begin_framev = o2.asm.qb).apply(null, arguments);
  }, o2.__Z32get_texture_units_bound_in_framev = function() {
    return (o2.__Z32get_texture_units_bound_in_framev = o2.asm.rb).apply(null, arguments);
  }, o2.__Z23get_active_texture_unitv = function() {
    return (o2.__Z23get_active_texture_unitv = o2.asm.sb).apply(null, arguments);
  }, o2.__Z12set_viewportii = function() {
    return (o2.__Z12set_viewportii = o2.asm.tb).apply(null, arguments);
  }, o2.__Z4drawv = function() {
    return (o2.__Z4drawv = o2.asm.ub).apply(null, arguments);
  }, o2.__Z11set_qualityi = function() {
    return (o2.__Z11set_qualityi = o2.asm.vb).apply(null, arguments);
  }, o2.__Z10pick_depthii = function() {
    return (o2.__Z10pick_depthii = o2.asm.wb).apply(null, arguments);
  }, o2.__Z11pick_objectiijj = function() {
    return (o2.__Z11pick_objectiijj = o2.asm.xb).apply(null, arguments);
  }, o2.__Z11set_enabledib = function() {
    return (o2.__Z11set_enabledib = o2.asm.yb).apply(null, arguments);
  }, o2.__Z23handle_masked_ui_updateijj = function() {
    return (o2.__Z23handle_masked_ui_updateijj = o2.asm.zb).apply(null, arguments);
  }, o2.__Z21set_scene_time_extentddb = function() {
    return (o2.__Z21set_scene_time_extentddb = o2.asm.Ab).apply(null, arguments);
  }, o2.__Z20set_upscaling_limitsidd = function() {
    return (o2.__Z20set_upscaling_limitsidd = o2.asm.Bb).apply(null, arguments);
  }, o2.__Z21estimate_memory_usagei = function() {
    return (o2.__Z21estimate_memory_usagei = o2.asm.Cb).apply(null, arguments);
  }, o2.__Z16add_generic_meshjjjjjjjj = function() {
    return (o2.__Z16add_generic_meshjjjjjjjj = o2.asm.Db).apply(null, arguments);
  }, o2.__Z19remove_generic_meshi = function() {
    return (o2.__Z19remove_generic_meshi = o2.asm.Eb).apply(null, arguments);
  }, o2.__Z30toggle_full_volume_extent_drawi = function() {
    return (o2.__Z30toggle_full_volume_extent_drawi = o2.asm.Fb).apply(null, arguments);
  }, o2.__Z21get_layer_epoch_timesii = function() {
    return (o2.__Z21get_layer_epoch_timesii = o2.asm.Gb).apply(null, arguments);
  }, o2.__Z25get_layer_current_time_idi = function() {
    return (o2.__Z25get_layer_current_time_idi = o2.asm.Hb).apply(null, arguments);
  }, o2.__Z27get_locked_isosurface_coloriid = function() {
    return (o2.__Z27get_locked_isosurface_coloriid = o2.asm.Ib).apply(null, arguments);
  };
  var _o = o2.___getTypeName = function() {
    return (_o = o2.___getTypeName = o2.asm.Jb).apply(null, arguments);
  };
  o2.___embind_register_native_and_builtin_types = function() {
    return (o2.___embind_register_native_and_builtin_types = o2.asm.Kb).apply(null, arguments);
  };
  var go, yo = o2.___errno_location = function() {
    return (yo = o2.___errno_location = o2.asm.Lb).apply(null, arguments);
  }, wo = o2.___cxa_is_pointer_type = function() {
    return (wo = o2.___cxa_is_pointer_type = o2.asm.Mb).apply(null, arguments);
  };
  function Eo(e2) {
    function t3() {
      go || (go = true, o2.calledRun = true, _ || (z(), r2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), W()));
    }
    q > 0 || (O(), q > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), t3();
    }, 1)) : t3()));
  }
  if (o2.dynCall_iij = function() {
    return (o2.dynCall_iij = o2.asm.Nb).apply(null, arguments);
  }, o2.dynCall_jiji = function() {
    return (o2.dynCall_jiji = o2.asm.Ob).apply(null, arguments);
  }, o2.dynCall_viijii = function() {
    return (o2.dynCall_viijii = o2.asm.Pb).apply(null, arguments);
  }, o2.dynCall_iiiiij = function() {
    return (o2.dynCall_iiiiij = o2.asm.Qb).apply(null, arguments);
  }, o2.dynCall_iiiiijj = function() {
    return (o2.dynCall_iiiiijj = o2.asm.Rb).apply(null, arguments);
  }, o2.dynCall_iiiiiijj = function() {
    return (o2.dynCall_iiiiiijj = o2.asm.Sb).apply(null, arguments);
  }, o2.___emscripten_embedded_file_data = 139184, o2.stringToUTF8 = B, o2.lengthBytesUTF8 = M, o2.addRunDependency = Y, o2.removeRunDependency = X, o2.FS_createPath = we.createPath, o2.FS_createDataFile = we.createDataFile, o2.FS_createPreloadedFile = we.createPreloadedFile, o2.FS_createLazyFile = we.createLazyFile, o2.FS_createDevice = we.createDevice, o2.FS_unlink = we.unlink, o2.addFunction = so, V = function e2() {
    go || Eo(), go || (V = e2);
  }, o2.preInit)
    for ("function" == typeof o2.preInit && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  return Eo(), e.ready;
}, t.exports = o;
var i = a.exports;
const s = r({ __proto__: null, default: o$1(i) }, [i]);
export {
  s as v
};
