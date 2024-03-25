import { bk as o$1, i4 as e } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t, n, o, a = { exports: {} };
t = a, n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, o = function(e$1 = {}) {
  var t2, o2, a2 = e$1;
  a2.ready = new Promise((e2, r) => {
    t2 = e2, o2 = r;
  });
  var i2, s2, u = Object.assign({}, a2), l = "./this.program", d = (e2, r) => {
    throw r;
  }, c = true, f = "";
  function h(e2) {
    return a2.locateFile ? a2.locateFile(e2, f) : f + e2;
  }
  "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), n && (f = n), f = 0 !== f.indexOf("blob:") ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", i2 = (e2) => {
    var r = new XMLHttpRequest();
    return r.open("GET", e2, false), r.send(null), r.responseText;
  }, s2 = (e2, r, t3) => {
    var n2 = new XMLHttpRequest();
    n2.open("GET", e2, true), n2.responseType = "arraybuffer", n2.onload = () => {
      200 == n2.status || 0 == n2.status && n2.response ? r(n2.response) : t3();
    }, n2.onerror = t3, n2.send(null);
  };
  var m, p, v = a2.print || console.log.bind(console), y = a2.printErr || console.error.bind(console);
  Object.assign(a2, u), u = null, a2.arguments && a2.arguments, a2.thisProgram && (l = a2.thisProgram), a2.quit && (d = a2.quit), a2.wasmBinary && (m = a2.wasmBinary), "object" != typeof WebAssembly && U("no native wasm support detected");
  var w, g, E, _, b, k, F, A, S = false;
  function D(e2, r) {
    e2 || U(r);
  }
  function P() {
    var e2 = p.buffer;
    a2.HEAP8 = w = new Int8Array(e2), a2.HEAP16 = E = new Int16Array(e2), a2.HEAPU8 = g = new Uint8Array(e2), a2.HEAPU16 = _ = new Uint16Array(e2), a2.HEAP32 = b = new Int32Array(e2), a2.HEAPU32 = k = new Uint32Array(e2), a2.HEAPF32 = F = new Float32Array(e2), a2.HEAPF64 = A = new Float64Array(e2);
  }
  var T = [], $ = [], C = [];
  function M() {
    if (a2.preRun)
      for ("function" == typeof a2.preRun && (a2.preRun = [a2.preRun]); a2.preRun.length; )
        R(a2.preRun.shift());
    re(T);
  }
  function j() {
    a2.noFSInit || De.init.initialized || De.init(), De.ignorePermissions = false, re($);
  }
  function x() {
    if (a2.postRun)
      for ("function" == typeof a2.postRun && (a2.postRun = [a2.postRun]); a2.postRun.length; )
        z(a2.postRun.shift());
    re(C);
  }
  function R(e2) {
    T.unshift(e2);
  }
  function O(e2) {
    $.unshift(e2);
  }
  function z(e2) {
    C.unshift(e2);
  }
  var W = 0, N = null;
  function H(e2) {
    return e2;
  }
  function L(e2) {
    W++, a2.monitorRunDependencies && a2.monitorRunDependencies(W);
  }
  function B(e2) {
    if (W--, a2.monitorRunDependencies && a2.monitorRunDependencies(W), 0 == W && N) {
      var r = N;
      N = null, r();
    }
  }
  function U(e2) {
    a2.onAbort && a2.onAbort(e2), y(e2 = "Aborted(" + e2 + ")"), S = true, e2 += ". Build with -sASSERTIONS for more info.";
    var r = new WebAssembly.RuntimeError(e2);
    throw o2(r), r;
  }
  var I, V, Y, q = "data:application/octet-stream;base64,", X = (e2) => e2.startsWith(q);
  function G(e2) {
    if (e2 == I && m)
      return new Uint8Array(m);
    throw "both async and sync fetching of the wasm failed";
  }
  function J(e2) {
    return !m && c && "function" == typeof fetch ? fetch(e2, { credentials: "same-origin" }).then((r) => {
      if (!r.ok)
        throw "failed to load wasm binary file at '" + e2 + "'";
      return r.arrayBuffer();
    }).catch(() => G(e2)) : Promise.resolve().then(() => G(e2));
  }
  function K(e2, r, t3) {
    return J(e2).then((e3) => WebAssembly.instantiate(e3, r)).then((e3) => e3).then(t3, (e3) => {
      y(`failed to asynchronously prepare wasm: ${e3}`), U(e3);
    });
  }
  function Z(e2, r, t3, n2) {
    return e2 || "function" != typeof WebAssembly.instantiateStreaming || X(r) || "function" != typeof fetch ? K(r, t3, n2) : fetch(r, { credentials: "same-origin" }).then((e3) => WebAssembly.instantiateStreaming(e3, t3).then(n2, function(e4) {
      return y(`wasm streaming compile failed: ${e4}`), y("falling back to ArrayBuffer instantiation"), K(r, t3, n2);
    }));
  }
  function Q() {
    var e2 = { a: on };
    function r(e3, r2) {
      return an = e3.exports, p = an._, P(), hr = an.aa, O(an.$), B(), an;
    }
    function t3(e3) {
      r(e3.instance);
    }
    if (L(), a2.instantiateWasm)
      try {
        return a2.instantiateWasm(e2, r);
      } catch (n2) {
        y(`Module.instantiateWasm callback failed with error: ${n2}`), o2(n2);
      }
    return Z(m, I, e2, t3).catch(o2), {};
  }
  function ee(e2) {
    this.name = "ExitStatus", this.message = `Program terminated with exit(${e2})`, this.status = e2;
  }
  X(I = "lyr3DWorker.wasm") || (I = h(I));
  var re = (e2) => {
    for (; e2.length > 0; )
      e2.shift()(a2);
  }, te = a2.noExitRuntime || true;
  function ne(e2) {
    this.excPtr = e2, this.ptr = e2 - 24, this.set_type = function(e3) {
      k[this.ptr + 4 >> 2] = e3;
    }, this.get_type = function() {
      return k[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e3) {
      k[this.ptr + 8 >> 2] = e3;
    }, this.get_destructor = function() {
      return k[this.ptr + 8 >> 2];
    }, this.set_caught = function(e3) {
      e3 = e3 ? 1 : 0, w[this.ptr + 12 >> 0] = e3;
    }, this.get_caught = function() {
      return 0 != w[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(e3) {
      e3 = e3 ? 1 : 0, w[this.ptr + 13 >> 0] = e3;
    }, this.get_rethrown = function() {
      return 0 != w[this.ptr + 13 >> 0];
    }, this.init = function(e3, r) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(r);
    }, this.set_adjusted_ptr = function(e3) {
      k[this.ptr + 16 >> 2] = e3;
    }, this.get_adjusted_ptr = function() {
      return k[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (pn(this.get_type()))
        return k[this.excPtr >> 2];
      var e3 = this.get_adjusted_ptr();
      return 0 !== e3 ? e3 : this.excPtr;
    };
  }
  var oe = (e2, r, t3) => {
    throw new ne(e2).init(r, t3), e2;
  }, ae = (e2) => (b[ln() >> 2] = e2, e2), ie = { isAbs: (e2) => "/" === e2.charAt(0), splitPath: (e2) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e2).slice(1), normalizeArray: (e2, r) => {
    for (var t3 = 0, n2 = e2.length - 1; n2 >= 0; n2--) {
      var o3 = e2[n2];
      "." === o3 ? e2.splice(n2, 1) : ".." === o3 ? (e2.splice(n2, 1), t3++) : t3 && (e2.splice(n2, 1), t3--);
    }
    if (r)
      for (; t3; t3--)
        e2.unshift("..");
    return e2;
  }, normalize: (e2) => {
    var r = ie.isAbs(e2), t3 = "/" === e2.substr(-1);
    return (e2 = ie.normalizeArray(e2.split("/").filter((e3) => !!e3), !r).join("/")) || r || (e2 = "."), e2 && t3 && (e2 += "/"), (r ? "/" : "") + e2;
  }, dirname: (e2) => {
    var r = ie.splitPath(e2), t3 = r[0], n2 = r[1];
    return t3 || n2 ? (n2 && (n2 = n2.substr(0, n2.length - 1)), t3 + n2) : ".";
  }, basename: (e2) => {
    if ("/" === e2)
      return "/";
    var r = (e2 = (e2 = ie.normalize(e2)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === r ? e2 : e2.substr(r + 1);
  }, join: function() {
    var e2 = Array.prototype.slice.call(arguments);
    return ie.normalize(e2.join("/"));
  }, join2: (e2, r) => ie.normalize(e2 + "/" + r) }, se = () => {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
      return (e2) => crypto.getRandomValues(e2);
    U("initRandomDevice");
  }, ue = (e2) => (ue = se())(e2), le = { resolve: function() {
    for (var e2 = "", r = false, t3 = arguments.length - 1; t3 >= -1 && !r; t3--) {
      var n2 = t3 >= 0 ? arguments[t3] : De.cwd();
      if ("string" != typeof n2)
        throw new TypeError("Arguments to path.resolve must be strings");
      if (!n2)
        return "";
      e2 = n2 + "/" + e2, r = ie.isAbs(n2);
    }
    return (r ? "/" : "") + (e2 = ie.normalizeArray(e2.split("/").filter((e3) => !!e3), !r).join("/")) || ".";
  }, relative: (e2, r) => {
    function t3(e3) {
      for (var r2 = 0; r2 < e3.length && "" === e3[r2]; r2++)
        ;
      for (var t4 = e3.length - 1; t4 >= 0 && "" === e3[t4]; t4--)
        ;
      return r2 > t4 ? [] : e3.slice(r2, t4 - r2 + 1);
    }
    e2 = le.resolve(e2).substr(1), r = le.resolve(r).substr(1);
    for (var n2 = t3(e2.split("/")), o3 = t3(r.split("/")), a3 = Math.min(n2.length, o3.length), i3 = a3, s3 = 0; s3 < a3; s3++)
      if (n2[s3] !== o3[s3]) {
        i3 = s3;
        break;
      }
    var u2 = [];
    for (s3 = i3; s3 < n2.length; s3++)
      u2.push("..");
    return (u2 = u2.concat(o3.slice(i3))).join("/");
  } }, de = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ce = (e2, r, t3) => {
    for (var n2 = r + t3, o3 = r; e2[o3] && !(o3 >= n2); )
      ++o3;
    if (o3 - r > 16 && e2.buffer && de)
      return de.decode(e2.subarray(r, o3));
    for (var a3 = ""; r < o3; ) {
      var i3 = e2[r++];
      if (128 & i3) {
        var s3 = 63 & e2[r++];
        if (192 != (224 & i3)) {
          var u2 = 63 & e2[r++];
          if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | s3 << 6 | u2 : (7 & i3) << 18 | s3 << 12 | u2 << 6 | 63 & e2[r++]) < 65536)
            a3 += String.fromCharCode(i3);
          else {
            var l2 = i3 - 65536;
            a3 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else
          a3 += String.fromCharCode((31 & i3) << 6 | s3);
      } else
        a3 += String.fromCharCode(i3);
    }
    return a3;
  }, fe = [], he = (e2) => {
    for (var r = 0, t3 = 0; t3 < e2.length; ++t3) {
      var n2 = e2.charCodeAt(t3);
      n2 <= 127 ? r++ : n2 <= 2047 ? r += 2 : n2 >= 55296 && n2 <= 57343 ? (r += 4, ++t3) : r += 3;
    }
    return r;
  }, me = (e2, r, t3, n2) => {
    if (!(n2 > 0))
      return 0;
    for (var o3 = t3, a3 = t3 + n2 - 1, i3 = 0; i3 < e2.length; ++i3) {
      var s3 = e2.charCodeAt(i3);
      if (s3 >= 55296 && s3 <= 57343 && (s3 = 65536 + ((1023 & s3) << 10) | 1023 & e2.charCodeAt(++i3)), s3 <= 127) {
        if (t3 >= a3)
          break;
        r[t3++] = s3;
      } else if (s3 <= 2047) {
        if (t3 + 1 >= a3)
          break;
        r[t3++] = 192 | s3 >> 6, r[t3++] = 128 | 63 & s3;
      } else if (s3 <= 65535) {
        if (t3 + 2 >= a3)
          break;
        r[t3++] = 224 | s3 >> 12, r[t3++] = 128 | s3 >> 6 & 63, r[t3++] = 128 | 63 & s3;
      } else {
        if (t3 + 3 >= a3)
          break;
        r[t3++] = 240 | s3 >> 18, r[t3++] = 128 | s3 >> 12 & 63, r[t3++] = 128 | s3 >> 6 & 63, r[t3++] = 128 | 63 & s3;
      }
    }
    return r[t3] = 0, t3 - o3;
  };
  function pe(e2, r, t3) {
    var n2 = t3 > 0 ? t3 : he(e2) + 1, o3 = new Array(n2), a3 = me(e2, o3, 0, o3.length);
    return r && (o3.length = a3), o3;
  }
  var ve = () => {
    if (!fe.length) {
      var e2 = null;
      if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (e2 = window.prompt("Input: ")) && (e2 += "\n") : "function" == typeof readline && null !== (e2 = readline()) && (e2 += "\n"), !e2)
        return null;
      fe = pe(e2, true);
    }
    return fe.shift();
  }, ye = { ttys: [], init() {
  }, shutdown() {
  }, register(e2, r) {
    ye.ttys[e2] = { input: [], output: [], ops: r }, De.registerDevice(e2, ye.stream_ops);
  }, stream_ops: { open(e2) {
    var r = ye.ttys[e2.node.rdev];
    if (!r)
      throw new De.ErrnoError(43);
    e2.tty = r, e2.seekable = false;
  }, close(e2) {
    e2.tty.ops.fsync(e2.tty);
  }, fsync(e2) {
    e2.tty.ops.fsync(e2.tty);
  }, read(e2, r, t3, n2, o3) {
    if (!e2.tty || !e2.tty.ops.get_char)
      throw new De.ErrnoError(60);
    for (var a3 = 0, i3 = 0; i3 < n2; i3++) {
      var s3;
      try {
        s3 = e2.tty.ops.get_char(e2.tty);
      } catch (u2) {
        throw new De.ErrnoError(29);
      }
      if (void 0 === s3 && 0 === a3)
        throw new De.ErrnoError(6);
      if (null == s3)
        break;
      a3++, r[t3 + i3] = s3;
    }
    return a3 && (e2.node.timestamp = Date.now()), a3;
  }, write(e2, r, t3, n2, o3) {
    if (!e2.tty || !e2.tty.ops.put_char)
      throw new De.ErrnoError(60);
    try {
      for (var a3 = 0; a3 < n2; a3++)
        e2.tty.ops.put_char(e2.tty, r[t3 + a3]);
    } catch (i3) {
      throw new De.ErrnoError(29);
    }
    return n2 && (e2.node.timestamp = Date.now()), a3;
  } }, default_tty_ops: { get_char: (e2) => ve(), put_char(e2, r) {
    null === r || 10 === r ? (v(ce(e2.output, 0)), e2.output = []) : 0 != r && e2.output.push(r);
  }, fsync(e2) {
    e2.output && e2.output.length > 0 && (v(ce(e2.output, 0)), e2.output = []);
  }, ioctl_tcgets: (e2) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (e2, r, t3) => 0, ioctl_tiocgwinsz: (e2) => [24, 80] }, default_tty1_ops: { put_char(e2, r) {
    null === r || 10 === r ? (y(ce(e2.output, 0)), e2.output = []) : 0 != r && e2.output.push(r);
  }, fsync(e2) {
    e2.output && e2.output.length > 0 && (y(ce(e2.output, 0)), e2.output = []);
  } } }, we = (e2) => {
    U();
  }, ge = { ops_table: null, mount: (e2) => ge.createNode(null, "/", 16895, 0), createNode(e2, r, t3, n2) {
    if (De.isBlkdev(t3) || De.isFIFO(t3))
      throw new De.ErrnoError(63);
    ge.ops_table || (ge.ops_table = { dir: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, lookup: ge.node_ops.lookup, mknod: ge.node_ops.mknod, rename: ge.node_ops.rename, unlink: ge.node_ops.unlink, rmdir: ge.node_ops.rmdir, readdir: ge.node_ops.readdir, symlink: ge.node_ops.symlink }, stream: { llseek: ge.stream_ops.llseek } }, file: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: { llseek: ge.stream_ops.llseek, read: ge.stream_ops.read, write: ge.stream_ops.write, allocate: ge.stream_ops.allocate, mmap: ge.stream_ops.mmap, msync: ge.stream_ops.msync } }, link: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, readlink: ge.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: De.chrdev_stream_ops } });
    var o3 = De.createNode(e2, r, t3, n2);
    return De.isDir(o3.mode) ? (o3.node_ops = ge.ops_table.dir.node, o3.stream_ops = ge.ops_table.dir.stream, o3.contents = {}) : De.isFile(o3.mode) ? (o3.node_ops = ge.ops_table.file.node, o3.stream_ops = ge.ops_table.file.stream, o3.usedBytes = 0, o3.contents = null) : De.isLink(o3.mode) ? (o3.node_ops = ge.ops_table.link.node, o3.stream_ops = ge.ops_table.link.stream) : De.isChrdev(o3.mode) && (o3.node_ops = ge.ops_table.chrdev.node, o3.stream_ops = ge.ops_table.chrdev.stream), o3.timestamp = Date.now(), e2 && (e2.contents[r] = o3, e2.timestamp = o3.timestamp), o3;
  }, getFileDataAsTypedArray: (e2) => e2.contents ? e2.contents.subarray ? e2.contents.subarray(0, e2.usedBytes) : new Uint8Array(e2.contents) : new Uint8Array(0), expandFileStorage(e2, r) {
    var t3 = e2.contents ? e2.contents.length : 0;
    if (!(t3 >= r)) {
      var n2 = 1048576;
      r = Math.max(r, t3 * (t3 < n2 ? 2 : 1.125) >>> 0), 0 != t3 && (r = Math.max(r, 256));
      var o3 = e2.contents;
      e2.contents = new Uint8Array(r), e2.usedBytes > 0 && e2.contents.set(o3.subarray(0, e2.usedBytes), 0);
    }
  }, resizeFileStorage(e2, r) {
    if (e2.usedBytes != r)
      if (0 == r)
        e2.contents = null, e2.usedBytes = 0;
      else {
        var t3 = e2.contents;
        e2.contents = new Uint8Array(r), t3 && e2.contents.set(t3.subarray(0, Math.min(r, e2.usedBytes))), e2.usedBytes = r;
      }
  }, node_ops: { getattr(e2) {
    var r = {};
    return r.dev = De.isChrdev(e2.mode) ? e2.id : 1, r.ino = e2.id, r.mode = e2.mode, r.nlink = 1, r.uid = 0, r.gid = 0, r.rdev = e2.rdev, De.isDir(e2.mode) ? r.size = 4096 : De.isFile(e2.mode) ? r.size = e2.usedBytes : De.isLink(e2.mode) ? r.size = e2.link.length : r.size = 0, r.atime = new Date(e2.timestamp), r.mtime = new Date(e2.timestamp), r.ctime = new Date(e2.timestamp), r.blksize = 4096, r.blocks = Math.ceil(r.size / r.blksize), r;
  }, setattr(e2, r) {
    void 0 !== r.mode && (e2.mode = r.mode), void 0 !== r.timestamp && (e2.timestamp = r.timestamp), void 0 !== r.size && ge.resizeFileStorage(e2, r.size);
  }, lookup(e2, r) {
    throw De.genericErrors[44];
  }, mknod: (e2, r, t3, n2) => ge.createNode(e2, r, t3, n2), rename(e2, r, t3) {
    if (De.isDir(e2.mode)) {
      var n2;
      try {
        n2 = De.lookupNode(r, t3);
      } catch (a3) {
      }
      if (n2)
        for (var o3 in n2.contents)
          throw new De.ErrnoError(55);
    }
    delete e2.parent.contents[e2.name], e2.parent.timestamp = Date.now(), e2.name = t3, r.contents[t3] = e2, r.timestamp = e2.parent.timestamp, e2.parent = r;
  }, unlink(e2, r) {
    delete e2.contents[r], e2.timestamp = Date.now();
  }, rmdir(e2, r) {
    var t3 = De.lookupNode(e2, r);
    for (var n2 in t3.contents)
      throw new De.ErrnoError(55);
    delete e2.contents[r], e2.timestamp = Date.now();
  }, readdir(e2) {
    var r = [".", ".."];
    for (var t3 in e2.contents)
      e2.contents.hasOwnProperty(t3) && r.push(t3);
    return r;
  }, symlink(e2, r, t3) {
    var n2 = ge.createNode(e2, r, 41471, 0);
    return n2.link = t3, n2;
  }, readlink(e2) {
    if (!De.isLink(e2.mode))
      throw new De.ErrnoError(28);
    return e2.link;
  } }, stream_ops: { read(e2, r, t3, n2, o3) {
    var a3 = e2.node.contents;
    if (o3 >= e2.node.usedBytes)
      return 0;
    var i3 = Math.min(e2.node.usedBytes - o3, n2);
    if (i3 > 8 && a3.subarray)
      r.set(a3.subarray(o3, o3 + i3), t3);
    else
      for (var s3 = 0; s3 < i3; s3++)
        r[t3 + s3] = a3[o3 + s3];
    return i3;
  }, write(e2, r, t3, n2, o3, a3) {
    if (r.buffer === w.buffer && (a3 = false), !n2)
      return 0;
    var i3 = e2.node;
    if (i3.timestamp = Date.now(), r.subarray && (!i3.contents || i3.contents.subarray)) {
      if (a3)
        return i3.contents = r.subarray(t3, t3 + n2), i3.usedBytes = n2, n2;
      if (0 === i3.usedBytes && 0 === o3)
        return i3.contents = r.slice(t3, t3 + n2), i3.usedBytes = n2, n2;
      if (o3 + n2 <= i3.usedBytes)
        return i3.contents.set(r.subarray(t3, t3 + n2), o3), n2;
    }
    if (ge.expandFileStorage(i3, o3 + n2), i3.contents.subarray && r.subarray)
      i3.contents.set(r.subarray(t3, t3 + n2), o3);
    else
      for (var s3 = 0; s3 < n2; s3++)
        i3.contents[o3 + s3] = r[t3 + s3];
    return i3.usedBytes = Math.max(i3.usedBytes, o3 + n2), n2;
  }, llseek(e2, r, t3) {
    var n2 = r;
    if (1 === t3 ? n2 += e2.position : 2 === t3 && De.isFile(e2.node.mode) && (n2 += e2.node.usedBytes), n2 < 0)
      throw new De.ErrnoError(28);
    return n2;
  }, allocate(e2, r, t3) {
    ge.expandFileStorage(e2.node, r + t3), e2.node.usedBytes = Math.max(e2.node.usedBytes, r + t3);
  }, mmap(e2, r, t3, n2, o3) {
    if (!De.isFile(e2.node.mode))
      throw new De.ErrnoError(43);
    var a3, i3, s3 = e2.node.contents;
    if (2 & o3 || s3.buffer !== w.buffer) {
      if ((t3 > 0 || t3 + r < s3.length) && (s3 = s3.subarray ? s3.subarray(t3, t3 + r) : Array.prototype.slice.call(s3, t3, t3 + r)), i3 = true, !(a3 = we()))
        throw new De.ErrnoError(48);
      w.set(s3, a3);
    } else
      i3 = false, a3 = s3.byteOffset;
    return { ptr: a3, allocated: i3 };
  }, msync: (e2, r, t3, n2, o3) => (ge.stream_ops.write(e2, r, 0, n2, t3, false), 0) } }, Ee = (e2, r, t3, n2) => {
    var o3 = n2 ? "" : H(`al ${e2}`);
    s2(e2, (t4) => {
      D(t4, `Loading data file "${e2}" failed (no arrayBuffer).`), r(new Uint8Array(t4)), o3 && B();
    }, (r2) => {
      if (!t3)
        throw `Loading data file "${e2}" failed.`;
      t3();
    }), o3 && L();
  }, _e = (e2, r, t3, n2, o3, a3) => De.createDataFile(e2, r, t3, n2, o3, a3), be = a2.preloadPlugins || [], ke = (e2, r, t3, n2) => {
    "undefined" != typeof Browser && Browser.init();
    var o3 = false;
    return be.forEach((a3) => {
      o3 || a3.canHandle(r) && (a3.handle(e2, r, t3, n2), o3 = true);
    }), o3;
  }, Fe = (e2, r, t3, n2, o3, a3, i3, s3, u2, l2) => {
    var d2 = r ? le.resolve(ie.join2(e2, r)) : e2;
    function c2(t4) {
      function c3(t5) {
        l2 && l2(), s3 || _e(e2, r, t5, n2, o3, u2), a3 && a3(), B();
      }
      ke(t4, d2, c3, () => {
        i3 && i3(), B();
      }) || c3(t4);
    }
    L(), "string" == typeof t3 ? Ee(t3, (e3) => c2(e3), i3) : c2(t3);
  }, Ae = (e2) => {
    var r = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e2];
    if (void 0 === r)
      throw new Error(`Unknown file open mode: ${e2}`);
    return r;
  }, Se = (e2, r) => {
    var t3 = 0;
    return e2 && (t3 |= 365), r && (t3 |= 146), t3;
  }, De = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath(e2, r = {}) {
    if (!(e2 = le.resolve(e2)))
      return { path: "", node: null };
    var t3 = { follow_mount: true, recurse_count: 0 };
    if ((r = Object.assign(t3, r)).recurse_count > 8)
      throw new De.ErrnoError(32);
    for (var n2 = e2.split("/").filter((e3) => !!e3), o3 = De.root, a3 = "/", i3 = 0; i3 < n2.length; i3++) {
      var s3 = i3 === n2.length - 1;
      if (s3 && r.parent)
        break;
      if (o3 = De.lookupNode(o3, n2[i3]), a3 = ie.join2(a3, n2[i3]), De.isMountpoint(o3) && (!s3 || s3 && r.follow_mount) && (o3 = o3.mounted.root), !s3 || r.follow)
        for (var u2 = 0; De.isLink(o3.mode); ) {
          var l2 = De.readlink(a3);
          if (a3 = le.resolve(ie.dirname(a3), l2), o3 = De.lookupPath(a3, { recurse_count: r.recurse_count + 1 }).node, u2++ > 40)
            throw new De.ErrnoError(32);
        }
    }
    return { path: a3, node: o3 };
  }, getPath(e2) {
    for (var r; ; ) {
      if (De.isRoot(e2)) {
        var t3 = e2.mount.mountpoint;
        return r ? "/" !== t3[t3.length - 1] ? `${t3}/${r}` : t3 + r : t3;
      }
      r = r ? `${e2.name}/${r}` : e2.name, e2 = e2.parent;
    }
  }, hashName(e2, r) {
    for (var t3 = 0, n2 = 0; n2 < r.length; n2++)
      t3 = (t3 << 5) - t3 + r.charCodeAt(n2) | 0;
    return (e2 + t3 >>> 0) % De.nameTable.length;
  }, hashAddNode(e2) {
    var r = De.hashName(e2.parent.id, e2.name);
    e2.name_next = De.nameTable[r], De.nameTable[r] = e2;
  }, hashRemoveNode(e2) {
    var r = De.hashName(e2.parent.id, e2.name);
    if (De.nameTable[r] === e2)
      De.nameTable[r] = e2.name_next;
    else
      for (var t3 = De.nameTable[r]; t3; ) {
        if (t3.name_next === e2) {
          t3.name_next = e2.name_next;
          break;
        }
        t3 = t3.name_next;
      }
  }, lookupNode(e2, r) {
    var t3 = De.mayLookup(e2);
    if (t3)
      throw new De.ErrnoError(t3, e2);
    for (var n2 = De.hashName(e2.id, r), o3 = De.nameTable[n2]; o3; o3 = o3.name_next) {
      var a3 = o3.name;
      if (o3.parent.id === e2.id && a3 === r)
        return o3;
    }
    return De.lookup(e2, r);
  }, createNode(e2, r, t3, n2) {
    var o3 = new De.FSNode(e2, r, t3, n2);
    return De.hashAddNode(o3), o3;
  }, destroyNode(e2) {
    De.hashRemoveNode(e2);
  }, isRoot: (e2) => e2 === e2.parent, isMountpoint: (e2) => !!e2.mounted, isFile: (e2) => 32768 == (61440 & e2), isDir: (e2) => 16384 == (61440 & e2), isLink: (e2) => 40960 == (61440 & e2), isChrdev: (e2) => 8192 == (61440 & e2), isBlkdev: (e2) => 24576 == (61440 & e2), isFIFO: (e2) => 4096 == (61440 & e2), isSocket: (e2) => 49152 == (49152 & e2), flagsToPermissionString(e2) {
    var r = ["r", "w", "rw"][3 & e2];
    return 512 & e2 && (r += "w"), r;
  }, nodePermissions: (e2, r) => De.ignorePermissions || (!r.includes("r") || 292 & e2.mode) && (!r.includes("w") || 146 & e2.mode) && (!r.includes("x") || 73 & e2.mode) ? 0 : 2, mayLookup(e2) {
    var r = De.nodePermissions(e2, "x");
    return r || (e2.node_ops.lookup ? 0 : 2);
  }, mayCreate(e2, r) {
    try {
      return De.lookupNode(e2, r), 20;
    } catch (t3) {
    }
    return De.nodePermissions(e2, "wx");
  }, mayDelete(e2, r, t3) {
    var n2;
    try {
      n2 = De.lookupNode(e2, r);
    } catch (a3) {
      return a3.errno;
    }
    var o3 = De.nodePermissions(e2, "wx");
    if (o3)
      return o3;
    if (t3) {
      if (!De.isDir(n2.mode))
        return 54;
      if (De.isRoot(n2) || De.getPath(n2) === De.cwd())
        return 10;
    } else if (De.isDir(n2.mode))
      return 31;
    return 0;
  }, mayOpen: (e2, r) => e2 ? De.isLink(e2.mode) ? 32 : De.isDir(e2.mode) && ("r" !== De.flagsToPermissionString(r) || 512 & r) ? 31 : De.nodePermissions(e2, De.flagsToPermissionString(r)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
    for (var e2 = 0; e2 <= De.MAX_OPEN_FDS; e2++)
      if (!De.streams[e2])
        return e2;
    throw new De.ErrnoError(33);
  }, getStreamChecked(e2) {
    var r = De.getStream(e2);
    if (!r)
      throw new De.ErrnoError(8);
    return r;
  }, getStream: (e2) => De.streams[e2], createStream: (e2, r = -1) => (De.FSStream || (De.FSStream = function() {
    this.shared = {};
  }, De.FSStream.prototype = {}, Object.defineProperties(De.FSStream.prototype, { object: { get() {
    return this.node;
  }, set(e3) {
    this.node = e3;
  } }, isRead: { get() {
    return 1 != (2097155 & this.flags);
  } }, isWrite: { get() {
    return 0 != (2097155 & this.flags);
  } }, isAppend: { get() {
    return 1024 & this.flags;
  } }, flags: { get() {
    return this.shared.flags;
  }, set(e3) {
    this.shared.flags = e3;
  } }, position: { get() {
    return this.shared.position;
  }, set(e3) {
    this.shared.position = e3;
  } } })), e2 = Object.assign(new De.FSStream(), e2), -1 == r && (r = De.nextfd()), e2.fd = r, De.streams[r] = e2, e2), closeStream(e2) {
    De.streams[e2] = null;
  }, chrdev_stream_ops: { open(e2) {
    var r = De.getDevice(e2.node.rdev);
    e2.stream_ops = r.stream_ops, e2.stream_ops.open && e2.stream_ops.open(e2);
  }, llseek() {
    throw new De.ErrnoError(70);
  } }, major: (e2) => e2 >> 8, minor: (e2) => 255 & e2, makedev: (e2, r) => e2 << 8 | r, registerDevice(e2, r) {
    De.devices[e2] = { stream_ops: r };
  }, getDevice: (e2) => De.devices[e2], getMounts(e2) {
    for (var r = [], t3 = [e2]; t3.length; ) {
      var n2 = t3.pop();
      r.push(n2), t3.push.apply(t3, n2.mounts);
    }
    return r;
  }, syncfs(e2, r) {
    "function" == typeof e2 && (r = e2, e2 = false), De.syncFSRequests++, De.syncFSRequests > 1 && y(`warning: ${De.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t3 = De.getMounts(De.root.mount), n2 = 0;
    function o3(e3) {
      return De.syncFSRequests--, r(e3);
    }
    function a3(e3) {
      if (e3)
        return a3.errored ? void 0 : (a3.errored = true, o3(e3));
      ++n2 >= t3.length && o3(null);
    }
    t3.forEach((r2) => {
      if (!r2.type.syncfs)
        return a3(null);
      r2.type.syncfs(r2, e2, a3);
    });
  }, mount(e2, r, t3) {
    var n2, o3 = "/" === t3, a3 = !t3;
    if (o3 && De.root)
      throw new De.ErrnoError(10);
    if (!o3 && !a3) {
      var i3 = De.lookupPath(t3, { follow_mount: false });
      if (t3 = i3.path, n2 = i3.node, De.isMountpoint(n2))
        throw new De.ErrnoError(10);
      if (!De.isDir(n2.mode))
        throw new De.ErrnoError(54);
    }
    var s3 = { type: e2, opts: r, mountpoint: t3, mounts: [] }, u2 = e2.mount(s3);
    return u2.mount = s3, s3.root = u2, o3 ? De.root = u2 : n2 && (n2.mounted = s3, n2.mount && n2.mount.mounts.push(s3)), u2;
  }, unmount(e2) {
    var r = De.lookupPath(e2, { follow_mount: false });
    if (!De.isMountpoint(r.node))
      throw new De.ErrnoError(28);
    var t3 = r.node, n2 = t3.mounted, o3 = De.getMounts(n2);
    Object.keys(De.nameTable).forEach((e3) => {
      for (var r2 = De.nameTable[e3]; r2; ) {
        var t4 = r2.name_next;
        o3.includes(r2.mount) && De.destroyNode(r2), r2 = t4;
      }
    }), t3.mounted = null;
    var a3 = t3.mount.mounts.indexOf(n2);
    t3.mount.mounts.splice(a3, 1);
  }, lookup: (e2, r) => e2.node_ops.lookup(e2, r), mknod(e2, r, t3) {
    var n2 = De.lookupPath(e2, { parent: true }).node, o3 = ie.basename(e2);
    if (!o3 || "." === o3 || ".." === o3)
      throw new De.ErrnoError(28);
    var a3 = De.mayCreate(n2, o3);
    if (a3)
      throw new De.ErrnoError(a3);
    if (!n2.node_ops.mknod)
      throw new De.ErrnoError(63);
    return n2.node_ops.mknod(n2, o3, r, t3);
  }, create: (e2, r) => (r = void 0 !== r ? r : 438, r &= 4095, r |= 32768, De.mknod(e2, r, 0)), mkdir: (e2, r) => (r = void 0 !== r ? r : 511, r &= 1023, r |= 16384, De.mknod(e2, r, 0)), mkdirTree(e2, r) {
    for (var t3 = e2.split("/"), n2 = "", o3 = 0; o3 < t3.length; ++o3)
      if (t3[o3]) {
        n2 += "/" + t3[o3];
        try {
          De.mkdir(n2, r);
        } catch (a3) {
          if (20 != a3.errno)
            throw a3;
        }
      }
  }, mkdev: (e2, r, t3) => (void 0 === t3 && (t3 = r, r = 438), r |= 8192, De.mknod(e2, r, t3)), symlink(e2, r) {
    if (!le.resolve(e2))
      throw new De.ErrnoError(44);
    var t3 = De.lookupPath(r, { parent: true }).node;
    if (!t3)
      throw new De.ErrnoError(44);
    var n2 = ie.basename(r), o3 = De.mayCreate(t3, n2);
    if (o3)
      throw new De.ErrnoError(o3);
    if (!t3.node_ops.symlink)
      throw new De.ErrnoError(63);
    return t3.node_ops.symlink(t3, n2, e2);
  }, rename(e2, r) {
    var t3, n2, o3 = ie.dirname(e2), a3 = ie.dirname(r), i3 = ie.basename(e2), s3 = ie.basename(r);
    if (t3 = De.lookupPath(e2, { parent: true }).node, n2 = De.lookupPath(r, { parent: true }).node, !t3 || !n2)
      throw new De.ErrnoError(44);
    if (t3.mount !== n2.mount)
      throw new De.ErrnoError(75);
    var u2, l2 = De.lookupNode(t3, i3), d2 = le.relative(e2, a3);
    if ("." !== d2.charAt(0))
      throw new De.ErrnoError(28);
    if ("." !== (d2 = le.relative(r, o3)).charAt(0))
      throw new De.ErrnoError(55);
    try {
      u2 = De.lookupNode(n2, s3);
    } catch (h2) {
    }
    if (l2 !== u2) {
      var c2 = De.isDir(l2.mode), f2 = De.mayDelete(t3, i3, c2);
      if (f2)
        throw new De.ErrnoError(f2);
      if (f2 = u2 ? De.mayDelete(n2, s3, c2) : De.mayCreate(n2, s3))
        throw new De.ErrnoError(f2);
      if (!t3.node_ops.rename)
        throw new De.ErrnoError(63);
      if (De.isMountpoint(l2) || u2 && De.isMountpoint(u2))
        throw new De.ErrnoError(10);
      if (n2 !== t3 && (f2 = De.nodePermissions(t3, "w")))
        throw new De.ErrnoError(f2);
      De.hashRemoveNode(l2);
      try {
        t3.node_ops.rename(l2, n2, s3);
      } catch (h2) {
        throw h2;
      } finally {
        De.hashAddNode(l2);
      }
    }
  }, rmdir(e2) {
    var r = De.lookupPath(e2, { parent: true }).node, t3 = ie.basename(e2), n2 = De.lookupNode(r, t3), o3 = De.mayDelete(r, t3, true);
    if (o3)
      throw new De.ErrnoError(o3);
    if (!r.node_ops.rmdir)
      throw new De.ErrnoError(63);
    if (De.isMountpoint(n2))
      throw new De.ErrnoError(10);
    r.node_ops.rmdir(r, t3), De.destroyNode(n2);
  }, readdir(e2) {
    var r = De.lookupPath(e2, { follow: true }).node;
    if (!r.node_ops.readdir)
      throw new De.ErrnoError(54);
    return r.node_ops.readdir(r);
  }, unlink(e2) {
    var r = De.lookupPath(e2, { parent: true }).node;
    if (!r)
      throw new De.ErrnoError(44);
    var t3 = ie.basename(e2), n2 = De.lookupNode(r, t3), o3 = De.mayDelete(r, t3, false);
    if (o3)
      throw new De.ErrnoError(o3);
    if (!r.node_ops.unlink)
      throw new De.ErrnoError(63);
    if (De.isMountpoint(n2))
      throw new De.ErrnoError(10);
    r.node_ops.unlink(r, t3), De.destroyNode(n2);
  }, readlink(e2) {
    var r = De.lookupPath(e2).node;
    if (!r)
      throw new De.ErrnoError(44);
    if (!r.node_ops.readlink)
      throw new De.ErrnoError(28);
    return le.resolve(De.getPath(r.parent), r.node_ops.readlink(r));
  }, stat(e2, r) {
    var t3 = De.lookupPath(e2, { follow: !r }).node;
    if (!t3)
      throw new De.ErrnoError(44);
    if (!t3.node_ops.getattr)
      throw new De.ErrnoError(63);
    return t3.node_ops.getattr(t3);
  }, lstat: (e2) => De.stat(e2, true), chmod(e2, r, t3) {
    var n2;
    if (!(n2 = "string" == typeof e2 ? De.lookupPath(e2, { follow: !t3 }).node : e2).node_ops.setattr)
      throw new De.ErrnoError(63);
    n2.node_ops.setattr(n2, { mode: 4095 & r | -4096 & n2.mode, timestamp: Date.now() });
  }, lchmod(e2, r) {
    De.chmod(e2, r, true);
  }, fchmod(e2, r) {
    var t3 = De.getStreamChecked(e2);
    De.chmod(t3.node, r);
  }, chown(e2, r, t3, n2) {
    var o3;
    if (!(o3 = "string" == typeof e2 ? De.lookupPath(e2, { follow: !n2 }).node : e2).node_ops.setattr)
      throw new De.ErrnoError(63);
    o3.node_ops.setattr(o3, { timestamp: Date.now() });
  }, lchown(e2, r, t3) {
    De.chown(e2, r, t3, true);
  }, fchown(e2, r, t3) {
    var n2 = De.getStreamChecked(e2);
    De.chown(n2.node, r, t3);
  }, truncate(e2, r) {
    if (r < 0)
      throw new De.ErrnoError(28);
    var t3;
    if (!(t3 = "string" == typeof e2 ? De.lookupPath(e2, { follow: true }).node : e2).node_ops.setattr)
      throw new De.ErrnoError(63);
    if (De.isDir(t3.mode))
      throw new De.ErrnoError(31);
    if (!De.isFile(t3.mode))
      throw new De.ErrnoError(28);
    var n2 = De.nodePermissions(t3, "w");
    if (n2)
      throw new De.ErrnoError(n2);
    t3.node_ops.setattr(t3, { size: r, timestamp: Date.now() });
  }, ftruncate(e2, r) {
    var t3 = De.getStreamChecked(e2);
    if (0 == (2097155 & t3.flags))
      throw new De.ErrnoError(28);
    De.truncate(t3.node, r);
  }, utime(e2, r, t3) {
    var n2 = De.lookupPath(e2, { follow: true }).node;
    n2.node_ops.setattr(n2, { timestamp: Math.max(r, t3) });
  }, open(e2, r, t3) {
    if ("" === e2)
      throw new De.ErrnoError(44);
    var n2;
    if (t3 = void 0 === t3 ? 438 : t3, t3 = 64 & (r = "string" == typeof r ? Ae(r) : r) ? 4095 & t3 | 32768 : 0, "object" == typeof e2)
      n2 = e2;
    else {
      e2 = ie.normalize(e2);
      try {
        n2 = De.lookupPath(e2, { follow: !(131072 & r) }).node;
      } catch (u2) {
      }
    }
    var o3 = false;
    if (64 & r)
      if (n2) {
        if (128 & r)
          throw new De.ErrnoError(20);
      } else
        n2 = De.mknod(e2, t3, 0), o3 = true;
    if (!n2)
      throw new De.ErrnoError(44);
    if (De.isChrdev(n2.mode) && (r &= -513), 65536 & r && !De.isDir(n2.mode))
      throw new De.ErrnoError(54);
    if (!o3) {
      var i3 = De.mayOpen(n2, r);
      if (i3)
        throw new De.ErrnoError(i3);
    }
    512 & r && !o3 && De.truncate(n2, 0), r &= -131713;
    var s3 = De.createStream({ node: n2, path: De.getPath(n2), flags: r, seekable: true, position: 0, stream_ops: n2.stream_ops, ungotten: [], error: false });
    return s3.stream_ops.open && s3.stream_ops.open(s3), !a2.logReadFiles || 1 & r || (De.readFiles || (De.readFiles = {}), e2 in De.readFiles || (De.readFiles[e2] = 1)), s3;
  }, close(e2) {
    if (De.isClosed(e2))
      throw new De.ErrnoError(8);
    e2.getdents && (e2.getdents = null);
    try {
      e2.stream_ops.close && e2.stream_ops.close(e2);
    } catch (r) {
      throw r;
    } finally {
      De.closeStream(e2.fd);
    }
    e2.fd = null;
  }, isClosed: (e2) => null === e2.fd, llseek(e2, r, t3) {
    if (De.isClosed(e2))
      throw new De.ErrnoError(8);
    if (!e2.seekable || !e2.stream_ops.llseek)
      throw new De.ErrnoError(70);
    if (0 != t3 && 1 != t3 && 2 != t3)
      throw new De.ErrnoError(28);
    return e2.position = e2.stream_ops.llseek(e2, r, t3), e2.ungotten = [], e2.position;
  }, read(e2, r, t3, n2, o3) {
    if (n2 < 0 || o3 < 0)
      throw new De.ErrnoError(28);
    if (De.isClosed(e2))
      throw new De.ErrnoError(8);
    if (1 == (2097155 & e2.flags))
      throw new De.ErrnoError(8);
    if (De.isDir(e2.node.mode))
      throw new De.ErrnoError(31);
    if (!e2.stream_ops.read)
      throw new De.ErrnoError(28);
    var a3 = void 0 !== o3;
    if (a3) {
      if (!e2.seekable)
        throw new De.ErrnoError(70);
    } else
      o3 = e2.position;
    var i3 = e2.stream_ops.read(e2, r, t3, n2, o3);
    return a3 || (e2.position += i3), i3;
  }, write(e2, r, t3, n2, o3, a3) {
    if (n2 < 0 || o3 < 0)
      throw new De.ErrnoError(28);
    if (De.isClosed(e2))
      throw new De.ErrnoError(8);
    if (0 == (2097155 & e2.flags))
      throw new De.ErrnoError(8);
    if (De.isDir(e2.node.mode))
      throw new De.ErrnoError(31);
    if (!e2.stream_ops.write)
      throw new De.ErrnoError(28);
    e2.seekable && 1024 & e2.flags && De.llseek(e2, 0, 2);
    var i3 = void 0 !== o3;
    if (i3) {
      if (!e2.seekable)
        throw new De.ErrnoError(70);
    } else
      o3 = e2.position;
    var s3 = e2.stream_ops.write(e2, r, t3, n2, o3, a3);
    return i3 || (e2.position += s3), s3;
  }, allocate(e2, r, t3) {
    if (De.isClosed(e2))
      throw new De.ErrnoError(8);
    if (r < 0 || t3 <= 0)
      throw new De.ErrnoError(28);
    if (0 == (2097155 & e2.flags))
      throw new De.ErrnoError(8);
    if (!De.isFile(e2.node.mode) && !De.isDir(e2.node.mode))
      throw new De.ErrnoError(43);
    if (!e2.stream_ops.allocate)
      throw new De.ErrnoError(138);
    e2.stream_ops.allocate(e2, r, t3);
  }, mmap(e2, r, t3, n2, o3) {
    if (0 != (2 & n2) && 0 == (2 & o3) && 2 != (2097155 & e2.flags))
      throw new De.ErrnoError(2);
    if (1 == (2097155 & e2.flags))
      throw new De.ErrnoError(2);
    if (!e2.stream_ops.mmap)
      throw new De.ErrnoError(43);
    return e2.stream_ops.mmap(e2, r, t3, n2, o3);
  }, msync: (e2, r, t3, n2, o3) => e2.stream_ops.msync ? e2.stream_ops.msync(e2, r, t3, n2, o3) : 0, munmap: (e2) => 0, ioctl(e2, r, t3) {
    if (!e2.stream_ops.ioctl)
      throw new De.ErrnoError(59);
    return e2.stream_ops.ioctl(e2, r, t3);
  }, readFile(e2, r = {}) {
    if (r.flags = r.flags || 0, r.encoding = r.encoding || "binary", "utf8" !== r.encoding && "binary" !== r.encoding)
      throw new Error(`Invalid encoding type "${r.encoding}"`);
    var t3, n2 = De.open(e2, r.flags), o3 = De.stat(e2).size, a3 = new Uint8Array(o3);
    return De.read(n2, a3, 0, o3, 0), "utf8" === r.encoding ? t3 = ce(a3, 0) : "binary" === r.encoding && (t3 = a3), De.close(n2), t3;
  }, writeFile(e2, r, t3 = {}) {
    t3.flags = t3.flags || 577;
    var n2 = De.open(e2, t3.flags, t3.mode);
    if ("string" == typeof r) {
      var o3 = new Uint8Array(he(r) + 1), a3 = me(r, o3, 0, o3.length);
      De.write(n2, o3, 0, a3, void 0, t3.canOwn);
    } else {
      if (!ArrayBuffer.isView(r))
        throw new Error("Unsupported data type");
      De.write(n2, r, 0, r.byteLength, void 0, t3.canOwn);
    }
    De.close(n2);
  }, cwd: () => De.currentPath, chdir(e2) {
    var r = De.lookupPath(e2, { follow: true });
    if (null === r.node)
      throw new De.ErrnoError(44);
    if (!De.isDir(r.node.mode))
      throw new De.ErrnoError(54);
    var t3 = De.nodePermissions(r.node, "x");
    if (t3)
      throw new De.ErrnoError(t3);
    De.currentPath = r.path;
  }, createDefaultDirectories() {
    De.mkdir("/tmp"), De.mkdir("/home"), De.mkdir("/home/web_user");
  }, createDefaultDevices() {
    De.mkdir("/dev"), De.registerDevice(De.makedev(1, 3), { read: () => 0, write: (e3, r2, t4, n2, o3) => n2 }), De.mkdev("/dev/null", De.makedev(1, 3)), ye.register(De.makedev(5, 0), ye.default_tty_ops), ye.register(De.makedev(6, 0), ye.default_tty1_ops), De.mkdev("/dev/tty", De.makedev(5, 0)), De.mkdev("/dev/tty1", De.makedev(6, 0));
    var e2 = new Uint8Array(1024), r = 0, t3 = () => (0 === r && (r = ue(e2).byteLength), e2[--r]);
    De.createDevice("/dev", "random", t3), De.createDevice("/dev", "urandom", t3), De.mkdir("/dev/shm"), De.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    De.mkdir("/proc");
    var e2 = De.mkdir("/proc/self");
    De.mkdir("/proc/self/fd"), De.mount({ mount() {
      var r = De.createNode(e2, "fd", 16895, 73);
      return r.node_ops = { lookup(e3, r2) {
        var t3 = +r2, n2 = De.getStreamChecked(t3), o3 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n2.path } };
        return o3.parent = o3, o3;
      } }, r;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams() {
    a2.stdin ? De.createDevice("/dev", "stdin", a2.stdin) : De.symlink("/dev/tty", "/dev/stdin"), a2.stdout ? De.createDevice("/dev", "stdout", null, a2.stdout) : De.symlink("/dev/tty", "/dev/stdout"), a2.stderr ? De.createDevice("/dev", "stderr", null, a2.stderr) : De.symlink("/dev/tty1", "/dev/stderr"), De.open("/dev/stdin", 0), De.open("/dev/stdout", 1), De.open("/dev/stderr", 1);
  }, ensureErrnoError() {
    De.ErrnoError || (De.ErrnoError = function(e2, r) {
      this.name = "ErrnoError", this.node = r, this.setErrno = function(e3) {
        this.errno = e3;
      }, this.setErrno(e2), this.message = "FS error";
    }, De.ErrnoError.prototype = new Error(), De.ErrnoError.prototype.constructor = De.ErrnoError, [44].forEach((e2) => {
      De.genericErrors[e2] = new De.ErrnoError(e2), De.genericErrors[e2].stack = "<generic error, no stack>";
    }));
  }, staticInit() {
    De.ensureErrnoError(), De.nameTable = new Array(4096), De.mount(ge, {}, "/"), De.createDefaultDirectories(), De.createDefaultDevices(), De.createSpecialDirectories(), De.filesystems = { MEMFS: ge };
  }, init(e2, r, t3) {
    De.init.initialized = true, De.ensureErrnoError(), a2.stdin = e2 || a2.stdin, a2.stdout = r || a2.stdout, a2.stderr = t3 || a2.stderr, De.createStandardStreams();
  }, quit() {
    De.init.initialized = false;
    for (var e2 = 0; e2 < De.streams.length; e2++) {
      var r = De.streams[e2];
      r && De.close(r);
    }
  }, findObject(e2, r) {
    var t3 = De.analyzePath(e2, r);
    return t3.exists ? t3.object : null;
  }, analyzePath(e2, r) {
    try {
      e2 = (n2 = De.lookupPath(e2, { follow: !r })).path;
    } catch (o3) {
    }
    var t3 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var n2 = De.lookupPath(e2, { parent: true });
      t3.parentExists = true, t3.parentPath = n2.path, t3.parentObject = n2.node, t3.name = ie.basename(e2), n2 = De.lookupPath(e2, { follow: !r }), t3.exists = true, t3.path = n2.path, t3.object = n2.node, t3.name = n2.node.name, t3.isRoot = "/" === n2.path;
    } catch (o3) {
      t3.error = o3.errno;
    }
    return t3;
  }, createPath(e2, r, t3, n2) {
    e2 = "string" == typeof e2 ? e2 : De.getPath(e2);
    for (var o3 = r.split("/").reverse(); o3.length; ) {
      var a3 = o3.pop();
      if (a3) {
        var i3 = ie.join2(e2, a3);
        try {
          De.mkdir(i3);
        } catch (s3) {
        }
        e2 = i3;
      }
    }
    return i3;
  }, createFile(e2, r, t3, n2, o3) {
    var a3 = ie.join2("string" == typeof e2 ? e2 : De.getPath(e2), r), i3 = Se(n2, o3);
    return De.create(a3, i3);
  }, createDataFile(e2, r, t3, n2, o3, a3) {
    var i3 = r;
    e2 && (e2 = "string" == typeof e2 ? e2 : De.getPath(e2), i3 = r ? ie.join2(e2, r) : e2);
    var s3 = Se(n2, o3), u2 = De.create(i3, s3);
    if (t3) {
      if ("string" == typeof t3) {
        for (var l2 = new Array(t3.length), d2 = 0, c2 = t3.length; d2 < c2; ++d2)
          l2[d2] = t3.charCodeAt(d2);
        t3 = l2;
      }
      De.chmod(u2, 146 | s3);
      var f2 = De.open(u2, 577);
      De.write(f2, t3, 0, t3.length, 0, a3), De.close(f2), De.chmod(u2, s3);
    }
    return u2;
  }, createDevice(e2, r, t3, n2) {
    var o3 = ie.join2("string" == typeof e2 ? e2 : De.getPath(e2), r), a3 = Se(!!t3, !!n2);
    De.createDevice.major || (De.createDevice.major = 64);
    var i3 = De.makedev(De.createDevice.major++, 0);
    return De.registerDevice(i3, { open(e3) {
      e3.seekable = false;
    }, close(e3) {
      n2 && n2.buffer && n2.buffer.length && n2(10);
    }, read(e3, r2, n3, o4, a4) {
      for (var i4 = 0, s3 = 0; s3 < o4; s3++) {
        var u2;
        try {
          u2 = t3();
        } catch (l2) {
          throw new De.ErrnoError(29);
        }
        if (void 0 === u2 && 0 === i4)
          throw new De.ErrnoError(6);
        if (null == u2)
          break;
        i4++, r2[n3 + s3] = u2;
      }
      return i4 && (e3.node.timestamp = Date.now()), i4;
    }, write(e3, r2, t4, o4, a4) {
      for (var i4 = 0; i4 < o4; i4++)
        try {
          n2(r2[t4 + i4]);
        } catch (s3) {
          throw new De.ErrnoError(29);
        }
      return o4 && (e3.node.timestamp = Date.now()), i4;
    } }), De.mkdev(o3, a3, i3);
  }, forceLoadFile(e2) {
    if (e2.isDevice || e2.isFolder || e2.link || e2.contents)
      return true;
    if ("undefined" != typeof XMLHttpRequest)
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    if (!i2)
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    try {
      e2.contents = pe(i2(e2.url), true), e2.usedBytes = e2.contents.length;
    } catch (r) {
      throw new De.ErrnoError(29);
    }
  }, createLazyFile(e2, r, t3, n2, o3) {
    if ("undefined" != typeof XMLHttpRequest)
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    var i3 = { isDevice: false, url: t3 }, s3 = De.createFile(e2, r, i3, n2, o3);
    i3.contents ? s3.contents = i3.contents : i3.url && (s3.contents = null, s3.url = i3.url), Object.defineProperties(s3, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u2 = {};
    function l2(e3, r2, t4, n3, o4) {
      var a3 = e3.node.contents;
      if (o4 >= a3.length)
        return 0;
      var i4 = Math.min(a3.length - o4, n3);
      if (a3.slice)
        for (var s4 = 0; s4 < i4; s4++)
          r2[t4 + s4] = a3[o4 + s4];
      else
        for (s4 = 0; s4 < i4; s4++)
          r2[t4 + s4] = a3.get(o4 + s4);
      return i4;
    }
    return Object.keys(s3.stream_ops).forEach((e3) => {
      var r2 = s3.stream_ops[e3];
      u2[e3] = function() {
        return De.forceLoadFile(s3), r2.apply(null, arguments);
      };
    }), u2.read = (e3, r2, t4, n3, o4) => (De.forceLoadFile(s3), l2(e3, r2, t4, n3, o4)), u2.mmap = (e3, r2, t4, n3, o4) => {
      De.forceLoadFile(s3);
      var a3 = we();
      if (!a3)
        throw new De.ErrnoError(48);
      return l2(e3, w, a3, r2, t4), { ptr: a3, allocated: true };
    }, s3.stream_ops = u2, s3;
  } }, Pe = (e2, r) => e2 ? ce(g, e2, r) : "", Te = { DEFAULT_POLLMASK: 5, calculateAt(e2, r, t3) {
    if (ie.isAbs(r))
      return r;
    var n2;
    if (n2 = -100 === e2 ? De.cwd() : Te.getStreamFromFD(e2).path, 0 == r.length) {
      if (!t3)
        throw new De.ErrnoError(44);
      return n2;
    }
    return ie.join2(n2, r);
  }, doStat(e2, r, t3) {
    try {
      var n2 = e2(r);
    } catch (s3) {
      if (s3 && s3.node && ie.normalize(r) !== ie.normalize(De.getPath(s3.node)))
        return -54;
      throw s3;
    }
    b[t3 >> 2] = n2.dev, b[t3 + 4 >> 2] = n2.mode, k[t3 + 8 >> 2] = n2.nlink, b[t3 + 12 >> 2] = n2.uid, b[t3 + 16 >> 2] = n2.gid, b[t3 + 20 >> 2] = n2.rdev, Y = [n2.size >>> 0, (V = n2.size, +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[t3 + 24 >> 2] = Y[0], b[t3 + 28 >> 2] = Y[1], b[t3 + 32 >> 2] = 4096, b[t3 + 36 >> 2] = n2.blocks;
    var o3 = n2.atime.getTime(), a3 = n2.mtime.getTime(), i3 = n2.ctime.getTime();
    return Y = [Math.floor(o3 / 1e3) >>> 0, (V = Math.floor(o3 / 1e3), +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[t3 + 40 >> 2] = Y[0], b[t3 + 44 >> 2] = Y[1], k[t3 + 48 >> 2] = o3 % 1e3 * 1e3, Y = [Math.floor(a3 / 1e3) >>> 0, (V = Math.floor(a3 / 1e3), +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[t3 + 56 >> 2] = Y[0], b[t3 + 60 >> 2] = Y[1], k[t3 + 64 >> 2] = a3 % 1e3 * 1e3, Y = [Math.floor(i3 / 1e3) >>> 0, (V = Math.floor(i3 / 1e3), +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[t3 + 72 >> 2] = Y[0], b[t3 + 76 >> 2] = Y[1], k[t3 + 80 >> 2] = i3 % 1e3 * 1e3, Y = [n2.ino >>> 0, (V = n2.ino, +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[t3 + 88 >> 2] = Y[0], b[t3 + 92 >> 2] = Y[1], 0;
  }, doMsync(e2, r, t3, n2, o3) {
    if (!De.isFile(r.node.mode))
      throw new De.ErrnoError(43);
    if (2 & n2)
      return 0;
    var a3 = g.slice(e2, e2 + t3);
    De.msync(r, a3, o3, t3, n2);
  }, varargs: void 0, get() {
    var e2 = b[+Te.varargs >> 2];
    return Te.varargs += 4, e2;
  }, getp: () => Te.get(), getStr: (e2) => Pe(e2), getStreamFromFD: (e2) => De.getStreamChecked(e2) };
  function $e(e2, r, t3) {
    Te.varargs = t3;
    try {
      var n2 = Te.getStreamFromFD(e2);
      switch (r) {
        case 0:
          if ((o3 = Te.get()) < 0)
            return -28;
          for (; De.streams[o3]; )
            o3++;
          return De.createStream(n2, o3).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n2.flags;
        case 4:
          var o3 = Te.get();
          return n2.flags |= o3, 0;
        case 5:
          return o3 = Te.getp(), E[o3 + 0 >> 1] = 2, 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return ae(28), -1;
      }
    } catch (a3) {
      if (void 0 === De || "ErrnoError" !== a3.name)
        throw a3;
      return -a3.errno;
    }
  }
  function Ce(e2, r, t3) {
    Te.varargs = t3;
    try {
      var n2 = Te.getStreamFromFD(e2);
      switch (r) {
        case 21509:
        case 21510:
        case 21511:
        case 21512:
        case 21524:
        case 21515:
          return n2.tty ? 0 : -59;
        case 21505:
          if (!n2.tty)
            return -59;
          if (n2.tty.ops.ioctl_tcgets) {
            var o3 = n2.tty.ops.ioctl_tcgets(n2), a3 = Te.getp();
            b[a3 >> 2] = o3.c_iflag || 0, b[a3 + 4 >> 2] = o3.c_oflag || 0, b[a3 + 8 >> 2] = o3.c_cflag || 0, b[a3 + 12 >> 2] = o3.c_lflag || 0;
            for (var i3 = 0; i3 < 32; i3++)
              w[a3 + i3 + 17 >> 0] = o3.c_cc[i3] || 0;
            return 0;
          }
          return 0;
        case 21506:
        case 21507:
        case 21508:
          if (!n2.tty)
            return -59;
          if (n2.tty.ops.ioctl_tcsets) {
            a3 = Te.getp();
            var s3 = b[a3 >> 2], u2 = b[a3 + 4 >> 2], l2 = b[a3 + 8 >> 2], d2 = b[a3 + 12 >> 2], c2 = [];
            for (i3 = 0; i3 < 32; i3++)
              c2.push(w[a3 + i3 + 17 >> 0]);
            return n2.tty.ops.ioctl_tcsets(n2.tty, r, { c_iflag: s3, c_oflag: u2, c_cflag: l2, c_lflag: d2, c_cc: c2 });
          }
          return 0;
        case 21519:
          return n2.tty ? (a3 = Te.getp(), b[a3 >> 2] = 0, 0) : -59;
        case 21520:
          return n2.tty ? -28 : -59;
        case 21531:
          return a3 = Te.getp(), De.ioctl(n2, r, a3);
        case 21523:
          if (!n2.tty)
            return -59;
          if (n2.tty.ops.ioctl_tiocgwinsz) {
            var f2 = n2.tty.ops.ioctl_tiocgwinsz(n2.tty);
            a3 = Te.getp(), E[a3 >> 1] = f2[0], E[a3 + 2 >> 1] = f2[1];
          }
          return 0;
        default:
          return -28;
      }
    } catch (h2) {
      if (void 0 === De || "ErrnoError" !== h2.name)
        throw h2;
      return -h2.errno;
    }
  }
  function Me(e2, r, t3, n2) {
    Te.varargs = n2;
    try {
      r = Te.getStr(r), r = Te.calculateAt(e2, r);
      var o3 = n2 ? Te.get() : 0;
      return De.open(r, t3, o3).fd;
    } catch (a3) {
      if (void 0 === De || "ErrnoError" !== a3.name)
        throw a3;
      return -a3.errno;
    }
  }
  var je = {}, xe = (e2) => {
    for (; e2.length; ) {
      var r = e2.pop();
      e2.pop()(r);
    }
  };
  function Re(e2) {
    return this.fromWireType(b[e2 >> 2]);
  }
  var Oe, ze, We, Ne = {}, He = {}, Le = {}, Be = (e2) => {
    throw new Oe(e2);
  }, Ue = (e2, r, t3) => {
    function n2(r2) {
      var n3 = t3(r2);
      n3.length !== e2.length && Be("Mismatched type converter count");
      for (var o4 = 0; o4 < e2.length; ++o4)
        Je(e2[o4], n3[o4]);
    }
    e2.forEach(function(e3) {
      Le[e3] = r;
    });
    var o3 = new Array(r.length), a3 = [], i3 = 0;
    r.forEach((e3, r2) => {
      He.hasOwnProperty(e3) ? o3[r2] = He[e3] : (a3.push(e3), Ne.hasOwnProperty(e3) || (Ne[e3] = []), Ne[e3].push(() => {
        o3[r2] = He[e3], ++i3 === a3.length && n2(o3);
      }));
    }), 0 === a3.length && n2(o3);
  }, Ie = (e2) => {
    var r = je[e2];
    delete je[e2];
    var t3 = r.rawConstructor, n2 = r.rawDestructor, o3 = r.fields, a3 = o3.map((e3) => e3.getterReturnType).concat(o3.map((e3) => e3.setterArgumentType));
    Ue([e2], a3, (e3) => {
      var a4 = {};
      return o3.forEach((r2, t4) => {
        var n3 = r2.fieldName, i3 = e3[t4], s3 = r2.getter, u2 = r2.getterContext, l2 = e3[t4 + o3.length], d2 = r2.setter, c2 = r2.setterContext;
        a4[n3] = { read: (e4) => i3.fromWireType(s3(u2, e4)), write: (e4, r3) => {
          var t5 = [];
          d2(c2, e4, l2.toWireType(t5, r3)), xe(t5);
        } };
      }), [{ name: r.name, fromWireType: (e4) => {
        var r2 = {};
        for (var t4 in a4)
          r2[t4] = a4[t4].read(e4);
        return n2(e4), r2;
      }, toWireType: (e4, r2) => {
        for (var o4 in a4)
          if (!(o4 in r2))
            throw new TypeError(`Missing field: "${o4}"`);
        var i3 = t3();
        for (o4 in a4)
          a4[o4].write(i3, r2[o4]);
        return null !== e4 && e4.push(n2, i3), i3;
      }, argPackAdvance: Ke, readValueFromPointer: Re, destructorFunction: n2 }];
    });
  }, Ve = (e2, r, t3, n2, o3) => {
  }, Ye = () => {
    for (var e2 = new Array(256), r = 0; r < 256; ++r)
      e2[r] = String.fromCharCode(r);
    ze = e2;
  }, qe = (e2) => {
    for (var r = "", t3 = e2; g[t3]; )
      r += ze[g[t3++]];
    return r;
  }, Xe = (e2) => {
    throw new We(e2);
  };
  function Ge(e2, r, t3 = {}) {
    var n2 = r.name;
    if (e2 || Xe(`type "${n2}" must have a positive integer typeid pointer`), He.hasOwnProperty(e2)) {
      if (t3.ignoreDuplicateRegistrations)
        return;
      Xe(`Cannot register type '${n2}' twice`);
    }
    if (He[e2] = r, delete Le[e2], Ne.hasOwnProperty(e2)) {
      var o3 = Ne[e2];
      delete Ne[e2], o3.forEach((e3) => e3());
    }
  }
  function Je(e2, r, t3 = {}) {
    if (!("argPackAdvance" in r))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return Ge(e2, r, t3);
  }
  var Ke = 8, Ze = (e2, r, t3, n2) => {
    Je(e2, { name: r = qe(r), fromWireType: function(e3) {
      return !!e3;
    }, toWireType: function(e3, r2) {
      return r2 ? t3 : n2;
    }, argPackAdvance: Ke, readValueFromPointer: function(e3) {
      return this.fromWireType(g[e3]);
    }, destructorFunction: null });
  };
  function Qe() {
    Object.assign(er.prototype, { get(e2) {
      return this.allocated[e2];
    }, has(e2) {
      return void 0 !== this.allocated[e2];
    }, allocate(e2) {
      var r = this.freelist.pop() || this.allocated.length;
      return this.allocated[r] = e2, r;
    }, free(e2) {
      this.allocated[e2] = void 0, this.freelist.push(e2);
    } });
  }
  function er() {
    this.allocated = [void 0], this.freelist = [];
  }
  var rr = new er(), tr = (e2) => {
    e2 >= rr.reserved && 0 == --rr.get(e2).refcount && rr.free(e2);
  }, nr = () => {
    for (var e2 = 0, r = rr.reserved; r < rr.allocated.length; ++r)
      void 0 !== rr.allocated[r] && ++e2;
    return e2;
  }, or = () => {
    rr.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), rr.reserved = rr.allocated.length, a2.count_emval_handles = nr;
  }, ar = { toValue: (e2) => (e2 || Xe("Cannot use deleted val. handle = " + e2), rr.get(e2).value), toHandle: (e2) => {
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
        return rr.allocate({ refcount: 1, value: e2 });
    }
  } }, ir = (e2, r) => {
    Je(e2, { name: r = qe(r), fromWireType: (e3) => {
      var r2 = ar.toValue(e3);
      return tr(e3), r2;
    }, toWireType: (e3, r2) => ar.toHandle(r2), argPackAdvance: Ke, readValueFromPointer: Re, destructorFunction: null });
  }, sr = (e2, r) => {
    switch (r) {
      case 4:
        return function(e3) {
          return this.fromWireType(F[e3 >> 2]);
        };
      case 8:
        return function(e3) {
          return this.fromWireType(A[e3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r}): ${e2}`);
    }
  }, ur = (e2, r, t3) => {
    Je(e2, { name: r = qe(r), fromWireType: (e3) => e3, toWireType: (e3, r2) => r2, argPackAdvance: Ke, readValueFromPointer: sr(r, t3), destructorFunction: null });
  }, lr = 48, dr = 57, cr = (e2) => {
    if (void 0 === e2)
      return "_unknown";
    var r = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r >= lr && r <= dr ? `_${e2}` : e2;
  };
  function fr(e2, r, t3, n2, o3, a3) {
    var i3 = r.length;
    i3 < 2 && Xe("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s3 = null !== r[1] && null !== t3, u2 = false, l2 = 1; l2 < r.length; ++l2)
      if (null !== r[l2] && void 0 === r[l2].destructorFunction) {
        u2 = true;
        break;
      }
    var d2 = "void" !== r[0].name, c2 = i3 - 2, f2 = new Array(c2), h2 = [], m2 = [];
    return function() {
      var t4;
      arguments.length !== c2 && Xe(`function ${e2} called with ${arguments.length} arguments, expected ${c2}`), m2.length = 0, h2.length = s3 ? 2 : 1, h2[0] = o3, s3 && (t4 = r[1].toWireType(m2, this), h2[1] = t4);
      for (var a4 = 0; a4 < c2; ++a4)
        f2[a4] = r[a4 + 2].toWireType(m2, arguments[a4]), h2.push(f2[a4]);
      function i4(e3) {
        if (u2)
          xe(m2);
        else
          for (var n3 = s3 ? 1 : 2; n3 < r.length; n3++) {
            var o4 = 1 === n3 ? t4 : f2[n3 - 2];
            null !== r[n3].destructorFunction && r[n3].destructorFunction(o4);
          }
        if (d2)
          return r[0].fromWireType(e3);
      }
      return i4(n2.apply(null, h2));
    };
  }
  var hr, mr = (e2, r, t3) => {
    if (void 0 === e2[r].overloadTable) {
      var n2 = e2[r];
      e2[r] = function() {
        return e2[r].overloadTable.hasOwnProperty(arguments.length) || Xe(`Function '${t3}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e2[r].overloadTable})!`), e2[r].overloadTable[arguments.length].apply(this, arguments);
      }, e2[r].overloadTable = [], e2[r].overloadTable[n2.argCount] = n2;
    }
  }, pr = (e2, r, t3) => {
    a2.hasOwnProperty(e2) ? ((void 0 === t3 || void 0 !== a2[e2].overloadTable && void 0 !== a2[e2].overloadTable[t3]) && Xe(`Cannot register public name '${e2}' twice`), mr(a2, e2, e2), a2.hasOwnProperty(t3) && Xe(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`), a2[e2].overloadTable[t3] = r) : (a2[e2] = r, void 0 !== t3 && (a2[e2].numArguments = t3));
  }, vr = (e2, r) => {
    for (var t3 = [], n2 = 0; n2 < e2; n2++)
      t3.push(k[r + 4 * n2 >> 2]);
    return t3;
  }, yr = (e2, r, t3) => {
    a2.hasOwnProperty(e2) || Be("Replacing nonexistant public symbol"), void 0 !== a2[e2].overloadTable && void 0 !== t3 ? a2[e2].overloadTable[t3] = r : (a2[e2] = r, a2[e2].argCount = t3);
  }, wr = (e2, r, t3) => {
    var n2 = a2["dynCall_" + e2];
    return t3 && t3.length ? n2.apply(null, [r].concat(t3)) : n2.call(null, r);
  }, gr = [], Er = (e2) => {
    var r = gr[e2];
    return r || (e2 >= gr.length && (gr.length = e2 + 1), gr[e2] = r = hr.get(e2)), r;
  }, _r = (e2, r, t3) => e2.includes("j") ? wr(e2, r, t3) : Er(r).apply(null, t3), br = (e2, r) => {
    var t3 = [];
    return function() {
      return t3.length = 0, Object.assign(t3, arguments), _r(e2, r, t3);
    };
  }, kr = (e2, r) => {
    function t3() {
      return e2.includes("j") ? br(e2, r) : Er(r);
    }
    e2 = qe(e2);
    var n2 = t3();
    return "function" != typeof n2 && Xe(`unknown function pointer with signature ${e2}: ${r}`), n2;
  };
  function Fr(e2, r) {
    return { [e2 = cr(e2)]: function() {
      return r.apply(this, arguments);
    } }[e2];
  }
  var Ar, Sr = (e2, r) => {
    var t3 = Fr(r, function(e3) {
      this.name = r, this.message = e3;
      var t4 = new Error(e3).stack;
      void 0 !== t4 && (this.stack = this.toString() + "\n" + t4.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t3.prototype = Object.create(e2.prototype), t3.prototype.constructor = t3, t3.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t3;
  }, Dr = (e2) => {
    var r = dn(e2), t3 = qe(r);
    return sn(r), t3;
  }, Pr = (e2, r) => {
    var t3 = [], n2 = {};
    function o3(e3) {
      n2[e3] || He[e3] || (Le[e3] ? Le[e3].forEach(o3) : (t3.push(e3), n2[e3] = true));
    }
    throw r.forEach(o3), new Ar(`${e2}: ` + t3.map(Dr).join([", "]));
  }, Tr = (e2) => {
    const r = (e2 = e2.trim()).indexOf("(");
    return -1 !== r ? (D(")" == e2[e2.length - 1], "Parentheses for argument names should match."), e2.substr(0, r)) : e2;
  }, $r = (e2, r, t3, n2, o3, a3, i3) => {
    var s3 = vr(r, t3);
    e2 = qe(e2), e2 = Tr(e2), o3 = kr(n2, o3), pr(e2, function() {
      Pr(`Cannot call ${e2} due to unbound types`, s3);
    }, r - 1), Ue([], s3, function(t4) {
      var n3 = [t4[0], null].concat(t4.slice(1));
      return yr(e2, fr(e2, n3, null, o3, a3), r - 1), [];
    });
  }, Cr = (e2, r, t3) => {
    switch (r) {
      case 1:
        return t3 ? (e3) => w[e3 >> 0] : (e3) => g[e3 >> 0];
      case 2:
        return t3 ? (e3) => E[e3 >> 1] : (e3) => _[e3 >> 1];
      case 4:
        return t3 ? (e3) => b[e3 >> 2] : (e3) => k[e3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${r}): ${e2}`);
    }
  }, Mr = (e2, r, t3, n2, o3) => {
    r = qe(r);
    var a3 = (e3) => e3;
    if (0 === n2) {
      var i3 = 32 - 8 * t3;
      a3 = (e3) => e3 << i3 >>> i3;
    }
    var s3 = r.includes("unsigned"), u2 = (e3, r2) => {
    };
    Je(e2, { name: r, fromWireType: a3, toWireType: s3 ? function(e3, r2) {
      return u2(r2, this.name), r2 >>> 0;
    } : function(e3, r2) {
      return u2(r2, this.name), r2;
    }, argPackAdvance: Ke, readValueFromPointer: Cr(r, t3, 0 !== n2), destructorFunction: null });
  }, jr = (e2, r, t3) => {
    var n2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];
    function o3(e3) {
      var r2 = k[e3 >> 2], t4 = k[e3 + 4 >> 2];
      return new n2(w.buffer, t4, r2);
    }
    Je(e2, { name: t3 = qe(t3), fromWireType: o3, argPackAdvance: Ke, readValueFromPointer: o3 }, { ignoreDuplicateRegistrations: true });
  };
  function xr(e2) {
    return this.fromWireType(k[e2 >> 2]);
  }
  var Rr = (e2, r, t3) => me(e2, g, r, t3), Or = (e2, r) => {
    var t3 = "std::string" === (r = qe(r));
    Je(e2, { name: r, fromWireType(e3) {
      var r2, n2 = k[e3 >> 2], o3 = e3 + 4;
      if (t3)
        for (var a3 = o3, i3 = 0; i3 <= n2; ++i3) {
          var s3 = o3 + i3;
          if (i3 == n2 || 0 == g[s3]) {
            var u2 = Pe(a3, s3 - a3);
            void 0 === r2 ? r2 = u2 : (r2 += String.fromCharCode(0), r2 += u2), a3 = s3 + 1;
          }
        }
      else {
        var l2 = new Array(n2);
        for (i3 = 0; i3 < n2; ++i3)
          l2[i3] = String.fromCharCode(g[o3 + i3]);
        r2 = l2.join("");
      }
      return sn(e3), r2;
    }, toWireType(e3, r2) {
      var n2;
      r2 instanceof ArrayBuffer && (r2 = new Uint8Array(r2));
      var o3 = "string" == typeof r2;
      o3 || r2 instanceof Uint8Array || r2 instanceof Uint8ClampedArray || r2 instanceof Int8Array || Xe("Cannot pass non-string to std::string"), n2 = t3 && o3 ? he(r2) : r2.length;
      var a3 = un(4 + n2 + 1), i3 = a3 + 4;
      if (k[a3 >> 2] = n2, t3 && o3)
        Rr(r2, i3, n2 + 1);
      else if (o3)
        for (var s3 = 0; s3 < n2; ++s3) {
          var u2 = r2.charCodeAt(s3);
          u2 > 255 && (sn(i3), Xe("String has UTF-16 code units that do not fit in 8 bits")), g[i3 + s3] = u2;
        }
      else
        for (s3 = 0; s3 < n2; ++s3)
          g[i3 + s3] = r2[s3];
      return null !== e3 && e3.push(sn, a3), a3;
    }, argPackAdvance: Ke, readValueFromPointer: xr, destructorFunction(e3) {
      sn(e3);
    } });
  }, zr = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Wr = (e2, r) => {
    for (var t3 = e2, n2 = t3 >> 1, o3 = n2 + r / 2; !(n2 >= o3) && _[n2]; )
      ++n2;
    if ((t3 = n2 << 1) - e2 > 32 && zr)
      return zr.decode(g.subarray(e2, t3));
    for (var a3 = "", i3 = 0; !(i3 >= r / 2); ++i3) {
      var s3 = E[e2 + 2 * i3 >> 1];
      if (0 == s3)
        break;
      a3 += String.fromCharCode(s3);
    }
    return a3;
  }, Nr = (e2, r, t3) => {
    if (void 0 === t3 && (t3 = 2147483647), t3 < 2)
      return 0;
    for (var n2 = r, o3 = (t3 -= 2) < 2 * e2.length ? t3 / 2 : e2.length, a3 = 0; a3 < o3; ++a3) {
      var i3 = e2.charCodeAt(a3);
      E[r >> 1] = i3, r += 2;
    }
    return E[r >> 1] = 0, r - n2;
  }, Hr = (e2) => 2 * e2.length, Lr = (e2, r) => {
    for (var t3 = 0, n2 = ""; !(t3 >= r / 4); ) {
      var o3 = b[e2 + 4 * t3 >> 2];
      if (0 == o3)
        break;
      if (++t3, o3 >= 65536) {
        var a3 = o3 - 65536;
        n2 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3);
      } else
        n2 += String.fromCharCode(o3);
    }
    return n2;
  }, Br = (e2, r, t3) => {
    if (void 0 === t3 && (t3 = 2147483647), t3 < 4)
      return 0;
    for (var n2 = r, o3 = n2 + t3 - 4, a3 = 0; a3 < e2.length; ++a3) {
      var i3 = e2.charCodeAt(a3);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & e2.charCodeAt(++a3)), b[r >> 2] = i3, (r += 4) + 4 > o3)
        break;
    }
    return b[r >> 2] = 0, r - n2;
  }, Ur = (e2) => {
    for (var r = 0, t3 = 0; t3 < e2.length; ++t3) {
      var n2 = e2.charCodeAt(t3);
      n2 >= 55296 && n2 <= 57343 && ++t3, r += 4;
    }
    return r;
  }, Ir = (e2, r, t3) => {
    var n2, o3, a3, i3, s3;
    t3 = qe(t3), 2 === r ? (n2 = Wr, o3 = Nr, i3 = Hr, a3 = () => _, s3 = 1) : 4 === r && (n2 = Lr, o3 = Br, i3 = Ur, a3 = () => k, s3 = 2), Je(e2, { name: t3, fromWireType: (e3) => {
      for (var t4, o4 = k[e3 >> 2], i4 = a3(), u2 = e3 + 4, l2 = 0; l2 <= o4; ++l2) {
        var d2 = e3 + 4 + l2 * r;
        if (l2 == o4 || 0 == i4[d2 >> s3]) {
          var c2 = n2(u2, d2 - u2);
          void 0 === t4 ? t4 = c2 : (t4 += String.fromCharCode(0), t4 += c2), u2 = d2 + r;
        }
      }
      return sn(e3), t4;
    }, toWireType: (e3, n3) => {
      "string" != typeof n3 && Xe(`Cannot pass non-string to C++ string type ${t3}`);
      var a4 = i3(n3), u2 = un(4 + a4 + r);
      return k[u2 >> 2] = a4 >> s3, o3(n3, u2 + 4, a4 + r), null !== e3 && e3.push(sn, u2), u2;
    }, argPackAdvance: Ke, readValueFromPointer: Re, destructorFunction(e3) {
      sn(e3);
    } });
  }, Vr = (e2, r, t3, n2, o3, a3) => {
    je[e2] = { name: qe(r), rawConstructor: kr(t3, n2), rawDestructor: kr(o3, a3), fields: [] };
  }, Yr = (e2, r, t3, n2, o3, a3, i3, s3, u2, l2) => {
    je[e2].fields.push({ fieldName: qe(r), getterReturnType: t3, getter: kr(n2, o3), getterContext: a3, setterArgumentType: i3, setter: kr(s3, u2), setterContext: l2 });
  }, qr = (e2, r) => {
    Je(e2, { isVoid: true, name: r = qe(r), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (e3, r2) => {
    } });
  }, Xr = (e2) => {
    do {
      var r = k[e2 >> 2], t3 = k[(e2 += 4) >> 2], n2 = k[(e2 += 4) >> 2];
      e2 += 4;
      var o3 = Pe(r);
      De.createPath("/", ie.dirname(o3), true, true), De.createDataFile(o3, null, w.subarray(n2, n2 + t3), true, true, true);
    } while (k[e2 >> 2]);
  }, Gr = () => {
    throw 1 / 0;
  }, Jr = (e2, r) => {
    var t3 = He[e2];
    return void 0 === t3 && Xe(r + " has unknown type " + Dr(e2)), t3;
  }, Kr = (e2, r, t3) => {
    e2 = ar.toValue(e2), r = Jr(r, "emval::as");
    var n2 = [], o3 = ar.toHandle(n2);
    return k[t3 >> 2] = o3, r.toWireType(n2, e2);
  }, Zr = {}, Qr = (e2) => {
    var r = Zr[e2];
    return void 0 === r ? qe(e2) : r;
  }, et = [], rt = (e2, r, t3, n2, o3) => {
    var a3 = [], i3 = (e2 = et[e2])(r = ar.toValue(r), t3 = Qr(t3), a3, o3);
    return a3.length && (k[n2 >> 2] = ar.toHandle(a3)), i3;
  }, tt = () => {
    if ("object" == typeof globalThis)
      return globalThis;
    function e$12(e2) {
      e2.$$$embind_global$$$ = e2;
      var r = "object" == typeof $$$embind_global$$$ && e2.$$$embind_global$$$ == e2;
      return r || delete e2.$$$embind_global$$$, r;
    }
    if ("object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    if ("object" == typeof e && e$12(e) ? $$$embind_global$$$ = e : "object" == typeof self && e$12(self) && ($$$embind_global$$$ = self), "object" == typeof $$$embind_global$$$)
      return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }, nt = (e2) => 0 === e2 ? ar.toHandle(tt()) : (e2 = Qr(e2), ar.toHandle(tt()[e2])), ot = (e2) => {
    var r = et.length;
    return et.push(e2), r;
  }, at = (e2, r) => {
    for (var t3 = new Array(e2), n2 = 0; n2 < e2; ++n2)
      t3[n2] = Jr(k[r + 4 * n2 >> 2], "parameter " + n2);
    return t3;
  }, it = (e2, r) => {
    var t3 = at(e2, r), n2 = t3.shift();
    e2--;
    var o3 = new Array(e2);
    return ot((r2, a3, i3, s3) => {
      for (var u2 = 0, l2 = 0; l2 < e2; ++l2)
        o3[l2] = t3[l2].readValueFromPointer(s3 + u2), u2 += t3[l2].argPackAdvance;
      var d2 = r2[a3].apply(r2, o3);
      for (l2 = 0; l2 < e2; ++l2)
        t3[l2].deleteObject && t3[l2].deleteObject(o3[l2]);
      return n2.toWireType(i3, d2);
    });
  }, st = (e2, r) => (e2 = ar.toValue(e2), r = ar.toValue(r), ar.toHandle(e2[r])), ut = (e2) => {
    e2 > 4 && (rr.get(e2).refcount += 1);
  }, lt = () => ar.toHandle([]), dt = (e2) => ar.toHandle(Qr(e2)), ct = (e2) => {
    var r = ar.toValue(e2);
    xe(r), tr(e2);
  }, ft = (e2, r, t3) => {
    e2 = ar.toValue(e2), r = ar.toValue(r), t3 = ar.toValue(t3), e2[r] = t3;
  }, ht = (e2, r) => {
    var t3 = (e2 = Jr(e2, "_emval_take_value")).readValueFromPointer(r);
    return ar.toHandle(t3);
  }, mt = () => {
    U("");
  }, pt = (e2, r, t3) => g.copyWithin(e2, r, r + t3), vt = () => 2147483648, yt = (e2) => {
    var r = (e2 - p.buffer.byteLength + 65535) / 65536;
    try {
      return p.grow(r), P(), 1;
    } catch (t3) {
    }
  }, wt = (e2) => {
    var r = g.length;
    e2 >>>= 0;
    var t3 = vt();
    if (e2 > t3)
      return false;
    for (var n2 = (e3, r2) => e3 + (r2 - e3 % r2) % r2, o3 = 1; o3 <= 4; o3 *= 2) {
      var a3 = r * (1 + 0.2 / o3);
      a3 = Math.min(a3, e2 + 100663296);
      var i3 = Math.min(t3, n2(Math.max(e2, a3), 65536));
      if (yt(i3))
        return true;
    }
    return false;
  }, gt = {}, Et = () => l || "./this.program", _t = () => {
    if (!_t.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: Et() };
      for (var r in gt)
        void 0 === gt[r] ? delete e2[r] : e2[r] = gt[r];
      var t3 = [];
      for (var r in e2)
        t3.push(`${r}=${e2[r]}`);
      _t.strings = t3;
    }
    return _t.strings;
  }, bt = (e2, r) => {
    for (var t3 = 0; t3 < e2.length; ++t3)
      w[r++ >> 0] = e2.charCodeAt(t3);
    w[r >> 0] = 0;
  }, kt = (e2, r) => {
    var t3 = 0;
    return _t().forEach((n2, o3) => {
      var a3 = r + t3;
      k[e2 + 4 * o3 >> 2] = a3, bt(n2, a3), t3 += n2.length + 1;
    }), 0;
  }, Ft = (e2, r) => {
    var t3 = _t();
    k[e2 >> 2] = t3.length;
    var n2 = 0;
    return t3.forEach((e3) => n2 += e3.length + 1), k[r >> 2] = n2, 0;
  }, At = 0, St = () => te || At > 0, Dt = (e2) => {
    St() || (a2.onExit && a2.onExit(e2), S = true), d(e2, new ee(e2));
  }, Pt = (e2, r) => {
    Dt(e2);
  };
  function Tt(e2) {
    try {
      var r = Te.getStreamFromFD(e2);
      return De.close(r), 0;
    } catch (t3) {
      if (void 0 === De || "ErrnoError" !== t3.name)
        throw t3;
      return t3.errno;
    }
  }
  var $t = (e2, r, t3, n2) => {
    for (var o3 = 0, a3 = 0; a3 < t3; a3++) {
      var i3 = k[r >> 2], s3 = k[r + 4 >> 2];
      r += 8;
      var u2 = De.read(e2, w, i3, s3, n2);
      if (u2 < 0)
        return -1;
      if (o3 += u2, u2 < s3)
        break;
      void 0 !== n2 && (n2 += u2);
    }
    return o3;
  };
  function Ct(e2, r, t3, n2) {
    try {
      var o3 = Te.getStreamFromFD(e2), a3 = $t(o3, r, t3);
      return k[n2 >> 2] = a3, 0;
    } catch (i3) {
      if (void 0 === De || "ErrnoError" !== i3.name)
        throw i3;
      return i3.errno;
    }
  }
  var Mt = (e2, r) => r + 2097152 >>> 0 < 4194305 - !!e2 ? (e2 >>> 0) + 4294967296 * r : NaN;
  function jt(e2, r, t3, n2, o3) {
    var a3 = Mt(r, t3);
    try {
      if (isNaN(a3))
        return 61;
      var i3 = Te.getStreamFromFD(e2);
      return De.llseek(i3, a3, n2), Y = [i3.position >>> 0, (V = i3.position, +Math.abs(V) >= 1 ? V > 0 ? +Math.floor(V / 4294967296) >>> 0 : ~~+Math.ceil((V - +(~~V >>> 0)) / 4294967296) >>> 0 : 0)], b[o3 >> 2] = Y[0], b[o3 + 4 >> 2] = Y[1], i3.getdents && 0 === a3 && 0 === n2 && (i3.getdents = null), 0;
    } catch (s3) {
      if (void 0 === De || "ErrnoError" !== s3.name)
        throw s3;
      return s3.errno;
    }
  }
  var xt = (e2, r, t3, n2) => {
    for (var o3 = 0, a3 = 0; a3 < t3; a3++) {
      var i3 = k[r >> 2], s3 = k[r + 4 >> 2];
      r += 8;
      var u2 = De.write(e2, w, i3, s3, n2);
      if (u2 < 0)
        return -1;
      o3 += u2, void 0 !== n2 && (n2 += u2);
    }
    return o3;
  };
  function Rt(e2, r, t3, n2) {
    try {
      var o3 = Te.getStreamFromFD(e2), a3 = xt(o3, r, t3);
      return k[n2 >> 2] = a3, 0;
    } catch (i3) {
      if (void 0 === De || "ErrnoError" !== i3.name)
        throw i3;
      return i3.errno;
    }
  }
  var Ot, zt = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), Wt = (e2, r) => {
    for (var t3 = 0, n2 = 0; n2 <= r; t3 += e2[n2++])
      ;
    return t3;
  }, Nt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ht = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Lt = (e2, r) => {
    for (var t3 = new Date(e2.getTime()); r > 0; ) {
      var n2 = zt(t3.getFullYear()), o3 = t3.getMonth(), a3 = (n2 ? Nt : Ht)[o3];
      if (!(r > a3 - t3.getDate()))
        return t3.setDate(t3.getDate() + r), t3;
      r -= a3 - t3.getDate() + 1, t3.setDate(1), o3 < 11 ? t3.setMonth(o3 + 1) : (t3.setMonth(0), t3.setFullYear(t3.getFullYear() + 1));
    }
    return t3;
  }, Bt = (e2, r) => {
    w.set(e2, r);
  }, Ut = (e2, r, t3, n2) => {
    var o3 = k[n2 + 40 >> 2], a3 = { tm_sec: b[n2 >> 2], tm_min: b[n2 + 4 >> 2], tm_hour: b[n2 + 8 >> 2], tm_mday: b[n2 + 12 >> 2], tm_mon: b[n2 + 16 >> 2], tm_year: b[n2 + 20 >> 2], tm_wday: b[n2 + 24 >> 2], tm_yday: b[n2 + 28 >> 2], tm_isdst: b[n2 + 32 >> 2], tm_gmtoff: b[n2 + 36 >> 2], tm_zone: o3 ? Pe(o3) : "" }, i3 = Pe(t3), s3 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var u2 in s3)
      i3 = i3.replace(new RegExp(u2, "g"), s3[u2]);
    var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], d2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function c2(e3, r2, t4) {
      for (var n3 = "number" == typeof e3 ? e3.toString() : e3 || ""; n3.length < r2; )
        n3 = t4[0] + n3;
      return n3;
    }
    function f2(e3, r2) {
      return c2(e3, r2, "0");
    }
    function h2(e3, r2) {
      function t4(e4) {
        return e4 < 0 ? -1 : e4 > 0 ? 1 : 0;
      }
      var n3;
      return 0 === (n3 = t4(e3.getFullYear() - r2.getFullYear())) && 0 === (n3 = t4(e3.getMonth() - r2.getMonth())) && (n3 = t4(e3.getDate() - r2.getDate())), n3;
    }
    function m2(e3) {
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
    function p2(e3) {
      var r2 = Lt(new Date(e3.tm_year + 1900, 0, 1), e3.tm_yday), t4 = new Date(r2.getFullYear(), 0, 4), n3 = new Date(r2.getFullYear() + 1, 0, 4), o4 = m2(t4), a4 = m2(n3);
      return h2(o4, r2) <= 0 ? h2(a4, r2) <= 0 ? r2.getFullYear() + 1 : r2.getFullYear() : r2.getFullYear() - 1;
    }
    var v2 = { "%a": (e3) => l2[e3.tm_wday].substring(0, 3), "%A": (e3) => l2[e3.tm_wday], "%b": (e3) => d2[e3.tm_mon].substring(0, 3), "%B": (e3) => d2[e3.tm_mon], "%C": (e3) => f2((e3.tm_year + 1900) / 100 | 0, 2), "%d": (e3) => f2(e3.tm_mday, 2), "%e": (e3) => c2(e3.tm_mday, 2, " "), "%g": (e3) => p2(e3).toString().substring(2), "%G": (e3) => p2(e3), "%H": (e3) => f2(e3.tm_hour, 2), "%I": (e3) => {
      var r2 = e3.tm_hour;
      return 0 == r2 ? r2 = 12 : r2 > 12 && (r2 -= 12), f2(r2, 2);
    }, "%j": (e3) => f2(e3.tm_mday + Wt(zt(e3.tm_year + 1900) ? Nt : Ht, e3.tm_mon - 1), 3), "%m": (e3) => f2(e3.tm_mon + 1, 2), "%M": (e3) => f2(e3.tm_min, 2), "%n": () => "\n", "%p": (e3) => e3.tm_hour >= 0 && e3.tm_hour < 12 ? "AM" : "PM", "%S": (e3) => f2(e3.tm_sec, 2), "%t": () => "	", "%u": (e3) => e3.tm_wday || 7, "%U": (e3) => {
      var r2 = e3.tm_yday + 7 - e3.tm_wday;
      return f2(Math.floor(r2 / 7), 2);
    }, "%V": (e3) => {
      var r2 = Math.floor((e3.tm_yday + 7 - (e3.tm_wday + 6) % 7) / 7);
      if ((e3.tm_wday + 371 - e3.tm_yday - 2) % 7 <= 2 && r2++, r2) {
        if (53 == r2) {
          var t4 = (e3.tm_wday + 371 - e3.tm_yday) % 7;
          4 == t4 || 3 == t4 && zt(e3.tm_year) || (r2 = 1);
        }
      } else {
        r2 = 52;
        var n3 = (e3.tm_wday + 7 - e3.tm_yday - 1) % 7;
        (4 == n3 || 5 == n3 && zt(e3.tm_year % 400 - 1)) && r2++;
      }
      return f2(r2, 2);
    }, "%w": (e3) => e3.tm_wday, "%W": (e3) => {
      var r2 = e3.tm_yday + 7 - (e3.tm_wday + 6) % 7;
      return f2(Math.floor(r2 / 7), 2);
    }, "%y": (e3) => (e3.tm_year + 1900).toString().substring(2), "%Y": (e3) => e3.tm_year + 1900, "%z": (e3) => {
      var r2 = e3.tm_gmtoff, t4 = r2 >= 0;
      return r2 = (r2 = Math.abs(r2) / 60) / 60 * 100 + r2 % 60, (t4 ? "+" : "-") + String("0000" + r2).slice(-4);
    }, "%Z": (e3) => e3.tm_zone, "%%": () => "%" };
    for (var u2 in i3 = i3.replace(/%%/g, "\0\0"), v2)
      i3.includes(u2) && (i3 = i3.replace(new RegExp(u2, "g"), v2[u2](a3)));
    var y2 = pe(i3 = i3.replace(/\0\0/g, "%"), false);
    return y2.length > r ? 0 : (Bt(y2, e2), y2.length - 1);
  }, It = (e2, r, t3, n2, o3) => Ut(e2, r, t3, n2), Vt = (e2, r) => {
    e2 < 128 ? r.push(e2) : r.push(e2 % 128 | 128, e2 >> 7);
  }, Yt = (e2) => {
    for (var r = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t3 = { parameters: [], results: "v" == e2[0] ? [] : [r[e2[0]]] }, n2 = 1; n2 < e2.length; ++n2)
      t3.parameters.push(r[e2[n2]]);
    return t3;
  }, qt = (e2, r) => {
    var t3 = e2.slice(0, 1), n2 = e2.slice(1), o3 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
    r.push(96), Vt(n2.length, r);
    for (var a3 = 0; a3 < n2.length; ++a3)
      r.push(o3[n2[a3]]);
    "v" == t3 ? r.push(0) : r.push(1, o3[t3]);
  }, Xt = (e2, r) => {
    if ("function" == typeof WebAssembly.Function)
      return new WebAssembly.Function(Yt(r), e2);
    var t3 = [1];
    qt(r, t3);
    var n2 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
    Vt(t3.length, n2), n2.push.apply(n2, t3), n2.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
    var o3 = new WebAssembly.Module(new Uint8Array(n2));
    return new WebAssembly.Instance(o3, { e: { f: e2 } }).exports.f;
  }, Gt = (e2, r) => {
    if (Ot)
      for (var t3 = e2; t3 < e2 + r; t3++) {
        var n2 = Er(t3);
        n2 && Ot.set(n2, t3);
      }
  }, Jt = (e2) => (Ot || (Ot = /* @__PURE__ */ new WeakMap(), Gt(0, hr.length)), Ot.get(e2) || 0), Kt = [], Zt = () => {
    if (Kt.length)
      return Kt.pop();
    try {
      hr.grow(1);
    } catch (y2) {
      if (!(y2 instanceof RangeError))
        throw y2;
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    return hr.length - 1;
  }, Qt = (e2, r) => {
    hr.set(e2, r), gr[e2] = hr.get(e2);
  }, en = (e2, r) => {
    var t3 = Jt(e2);
    if (t3)
      return t3;
    var n2 = Zt();
    try {
      Qt(n2, e2);
    } catch (y2) {
      if (!(y2 instanceof TypeError))
        throw y2;
      var o3 = Xt(e2, r);
      Qt(n2, o3);
    }
    return Ot.set(e2, n2), n2;
  }, rn = function(e2, r, t3, n2) {
    e2 || (e2 = this), this.parent = e2, this.mount = e2.mount, this.mounted = null, this.id = De.nextInode++, this.name = r, this.mode = t3, this.node_ops = {}, this.stream_ops = {}, this.rdev = n2;
  }, tn = 365, nn = 146;
  Object.defineProperties(rn.prototype, { read: { get: function() {
    return (this.mode & tn) === tn;
  }, set: function(e2) {
    e2 ? this.mode |= tn : this.mode &= ~tn;
  } }, write: { get: function() {
    return (this.mode & nn) === nn;
  }, set: function(e2) {
    e2 ? this.mode |= nn : this.mode &= ~nn;
  } }, isFolder: { get: function() {
    return De.isDir(this.mode);
  } }, isDevice: { get: function() {
    return De.isChrdev(this.mode);
  } } }), De.FSNode = rn, De.createPreloadedFile = Fe, De.staticInit(), a2.FS_createPath = De.createPath, a2.FS_createDataFile = De.createDataFile, a2.FS_createPreloadedFile = De.createPreloadedFile, a2.FS_unlink = De.unlink, a2.FS_createLazyFile = De.createLazyFile, a2.FS_createDevice = De.createDevice, Oe = a2.InternalError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "InternalError";
    }
  }, Ye(), We = a2.BindingError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "BindingError";
    }
  }, Qe(), or(), Ar = a2.UnboundTypeError = Sr(Error, "UnboundTypeError");
  var on = { m: oe, x: $e, N: Ce, O: Me, V: Ie, G: Ve, R: Ze, Q: ir, z: ur, r: $r, d: Mr, b: jr, y: Or, p: Ir, W: Vr, j: Yr, S: qr, U: Xr, I: Gr, Y: Kr, A: rt, a: tr, Z: nt, B: it, l: st, g: ut, C: lt, h: dt, s: ct, X: ft, k: ht, q: mt, P: pt, J: wt, K: kt, L: Ft, T: Pt, v: Tt, M: Ct, F: jt, w: Rt, n: vn, i: gn, o: _n, t: bn, E: Fn, u: En, c: yn, D: An, e: kn, f: wn, H: It }, an = Q(), sn = a2._free = (e2) => (sn = a2._free = an.ba)(e2), un = a2._malloc = (e2) => (un = a2._malloc = an.ca)(e2), ln = () => (ln = an.da)(), dn = (e2) => (dn = an.ea)(e2);
  a2.__embind_initialize_bindings = () => (a2.__embind_initialize_bindings = an.fa)();
  var cn, fn = (e2, r) => (fn = an.ga)(e2, r), hn = () => (hn = an.ha)(), mn = (e2) => (mn = an.ia)(e2), pn = (e2) => (pn = an.ja)(e2);
  function vn(e2, r) {
    var t3 = hn();
    try {
      return Er(e2)(r);
    } catch (n2) {
      if (mn(t3), n2 !== n2 + 0)
        throw n2;
      fn(1, 0);
    }
  }
  function yn(e2, r) {
    var t3 = hn();
    try {
      Er(e2)(r);
    } catch (n2) {
      if (mn(t3), n2 !== n2 + 0)
        throw n2;
      fn(1, 0);
    }
  }
  function wn(e2, r, t3, n2) {
    var o3 = hn();
    try {
      Er(e2)(r, t3, n2);
    } catch (a3) {
      if (mn(o3), a3 !== a3 + 0)
        throw a3;
      fn(1, 0);
    }
  }
  function gn(e2, r, t3) {
    var n2 = hn();
    try {
      return Er(e2)(r, t3);
    } catch (o3) {
      if (mn(n2), o3 !== o3 + 0)
        throw o3;
      fn(1, 0);
    }
  }
  function En(e2) {
    var r = hn();
    try {
      Er(e2)();
    } catch (t3) {
      if (mn(r), t3 !== t3 + 0)
        throw t3;
      fn(1, 0);
    }
  }
  function _n(e2, r, t3, n2) {
    var o3 = hn();
    try {
      return Er(e2)(r, t3, n2);
    } catch (a3) {
      if (mn(o3), a3 !== a3 + 0)
        throw a3;
      fn(1, 0);
    }
  }
  function bn(e2, r, t3, n2, o3) {
    var a3 = hn();
    try {
      return Er(e2)(r, t3, n2, o3);
    } catch (i3) {
      if (mn(a3), i3 !== i3 + 0)
        throw i3;
      fn(1, 0);
    }
  }
  function kn(e2, r, t3) {
    var n2 = hn();
    try {
      Er(e2)(r, t3);
    } catch (o3) {
      if (mn(n2), o3 !== o3 + 0)
        throw o3;
      fn(1, 0);
    }
  }
  function Fn(e2, r, t3, n2, o3, a3, i3, s3, u2, l2) {
    var d2 = hn();
    try {
      return Er(e2)(r, t3, n2, o3, a3, i3, s3, u2, l2);
    } catch (c2) {
      if (mn(d2), c2 !== c2 + 0)
        throw c2;
      fn(1, 0);
    }
  }
  function An(e2, r, t3, n2) {
    var o3 = hn();
    try {
      Er(e2)(r, t3, n2);
    } catch (a3) {
      if (mn(o3), a3 !== a3 + 0)
        throw a3;
      fn(1, 0);
    }
  }
  function Sn() {
    function e2() {
      cn || (cn = true, a2.calledRun = true, S || (j(), t2(a2), a2.onRuntimeInitialized && a2.onRuntimeInitialized(), x()));
    }
    W > 0 || (M(), W > 0 || (a2.setStatus ? (a2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a2.setStatus("");
      }, 1), e2();
    }, 1)) : e2()));
  }
  if (a2.dynCall_viji = (e2, r, t3, n2, o3) => (a2.dynCall_viji = an.ka)(e2, r, t3, n2, o3), a2.dynCall_ji = (e2, r) => (a2.dynCall_ji = an.la)(e2, r), a2.dynCall_jiji = (e2, r, t3, n2, o3) => (a2.dynCall_jiji = an.ma)(e2, r, t3, n2, o3), a2.dynCall_viijii = (e2, r, t3, n2, o3, i3, s3) => (a2.dynCall_viijii = an.na)(e2, r, t3, n2, o3, i3, s3), a2.dynCall_iiiiij = (e2, r, t3, n2, o3, i3, s3) => (a2.dynCall_iiiiij = an.oa)(e2, r, t3, n2, o3, i3, s3), a2.dynCall_iiiiijj = (e2, r, t3, n2, o3, i3, s3, u2, l2) => (a2.dynCall_iiiiijj = an.pa)(e2, r, t3, n2, o3, i3, s3, u2, l2), a2.dynCall_iiiiiijj = (e2, r, t3, n2, o3, i3, s3, u2, l2, d2) => (a2.dynCall_iiiiiijj = an.qa)(e2, r, t3, n2, o3, i3, s3, u2, l2, d2), a2.___emscripten_embedded_file_data = 1273112, a2.addRunDependency = L, a2.removeRunDependency = B, a2.FS_createPath = De.createPath, a2.FS_createLazyFile = De.createLazyFile, a2.FS_createDevice = De.createDevice, a2.addFunction = en, a2.UTF8ToString = Pe, a2.FS_createPreloadedFile = De.createPreloadedFile, a2.FS_createDataFile = De.createDataFile, a2.FS_unlink = De.unlink, N = function e2() {
    cn || Sn(), cn || (N = e2);
  }, a2.preInit)
    for ("function" == typeof a2.preInit && (a2.preInit = [a2.preInit]); a2.preInit.length > 0; )
      a2.preInit.pop()();
  return Sn(), e$1.ready;
}, t.exports = o;
const i = o$1(a.exports), s = Object.freeze(Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, { value: "Module" }));
export {
  s as l
};
