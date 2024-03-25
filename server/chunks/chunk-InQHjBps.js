import { bk as o$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var r, t, n, o = { exports: {} };
r = o, t = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, n = function(e = {}) {
  var r2, n2, o2 = e;
  o2.ready = new Promise((e2, t2) => {
    r2 = e2, n2 = t2;
  });
  var a2, i2, s = Object.assign({}, o2), u = "./this.program", l = true, d = "";
  function c(e2) {
    return o2.locateFile ? o2.locateFile(e2, d) : d + e2;
  }
  "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), t && (d = t), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a2 = (e2) => {
    var r3 = new XMLHttpRequest();
    return r3.open("GET", e2, false), r3.send(null), r3.responseText;
  }, i2 = (e2, r3, t2) => {
    var n3 = new XMLHttpRequest();
    n3.open("GET", e2, true), n3.responseType = "arraybuffer", n3.onload = () => {
      200 == n3.status || 0 == n3.status && n3.response ? r3(n3.response) : t2();
    }, n3.onerror = t2, n3.send(null);
  };
  var f, m, h = o2.print || console.log.bind(console), p = o2.printErr || console.error.bind(console);
  Object.assign(o2, s), s = null, o2.arguments && o2.arguments, o2.thisProgram && (u = o2.thisProgram), o2.quit && o2.quit, o2.wasmBinary && (f = o2.wasmBinary), "object" != typeof WebAssembly && H("no native wasm support detected");
  var v, g, y, w, E, _, b, k, x = false;
  function F(e2, r3) {
    e2 || H(r3);
  }
  function S() {
    var e2 = m.buffer;
    o2.HEAP8 = v = new Int8Array(e2), o2.HEAP16 = y = new Int16Array(e2), o2.HEAPU8 = g = new Uint8Array(e2), o2.HEAPU16 = w = new Uint16Array(e2), o2.HEAP32 = E = new Int32Array(e2), o2.HEAPU32 = _ = new Uint32Array(e2), o2.HEAPF32 = b = new Float32Array(e2), o2.HEAPF64 = k = new Float64Array(e2);
  }
  var A = [], P = [], C = [];
  function D() {
    if (o2.preRun)
      for ("function" == typeof o2.preRun && (o2.preRun = [o2.preRun]); o2.preRun.length; )
        B(o2.preRun.shift());
    K(A);
  }
  function T() {
    o2.noFSInit || Fe.init.initialized || Fe.init(), Fe.ignorePermissions = false, K(P);
  }
  function M() {
    if (o2.postRun)
      for ("function" == typeof o2.postRun && (o2.postRun = [o2.postRun]); o2.postRun.length; )
        L(o2.postRun.shift());
    K(C);
  }
  function B(e2) {
    A.unshift(e2);
  }
  function j(e2) {
    P.unshift(e2);
  }
  function L(e2) {
    C.unshift(e2);
  }
  var R = 0, I = null;
  function O(e2) {
    return e2;
  }
  function N(e2) {
    R++, o2.monitorRunDependencies && o2.monitorRunDependencies(R);
  }
  function W(e2) {
    if (R--, o2.monitorRunDependencies && o2.monitorRunDependencies(R), 0 == R && I) {
      var r3 = I;
      I = null, r3();
    }
  }
  function H(e2) {
    o2.onAbort && o2.onAbort(e2), p(e2 = "Aborted(" + e2 + ")"), x = true, e2 += ". Build with -sASSERTIONS for more info.";
    var r3 = new WebAssembly.RuntimeError(e2);
    throw n2(r3), r3;
  }
  var z, U, $, V = "data:application/octet-stream;base64,", G = (e2) => e2.startsWith(V);
  function q(e2) {
    if (e2 == z && f)
      return new Uint8Array(f);
    throw "both async and sync fetching of the wasm failed";
  }
  function Y(e2) {
    return !f && l && "function" == typeof fetch ? fetch(e2, { credentials: "same-origin" }).then((r3) => {
      if (!r3.ok)
        throw "failed to load wasm binary file at '" + e2 + "'";
      return r3.arrayBuffer();
    }).catch(() => q(e2)) : Promise.resolve().then(() => q(e2));
  }
  function X(e2, r3, t2) {
    return Y(e2).then((e3) => WebAssembly.instantiate(e3, r3)).then((e3) => e3).then(t2, (e3) => {
      p(`failed to asynchronously prepare wasm: ${e3}`), H(e3);
    });
  }
  function Q(e2, r3, t2, n3) {
    return e2 || "function" != typeof WebAssembly.instantiateStreaming || G(r3) || "function" != typeof fetch ? X(r3, t2, n3) : fetch(r3, { credentials: "same-origin" }).then((e3) => WebAssembly.instantiateStreaming(e3, t2).then(n3, function(e4) {
      return p(`wasm streaming compile failed: ${e4}`), p("falling back to ArrayBuffer instantiation"), X(r3, t2, n3);
    }));
  }
  function J() {
    var e2 = { a: Fo };
    function r3(e3, r4) {
      return So = e3.exports, m = So.Xa, S(), yr = So.Za, j(So.Ya), W(), So;
    }
    function t2(e3) {
      r3(e3.instance);
    }
    if (N(), o2.instantiateWasm)
      try {
        return o2.instantiateWasm(e2, r3);
      } catch (a3) {
        p(`Module.instantiateWasm callback failed with error: ${a3}`), n2(a3);
      }
    return Q(f, z, e2, t2).catch(n2), {};
  }
  G(z = "vxlLayer.wasm") || (z = c(z));
  var K = (e2) => {
    for (; e2.length > 0; )
      e2.shift()(o2);
  };
  o2.noExitRuntime;
  var Z = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, ee = (e2, r3, t2) => {
    for (var n3 = r3 + t2, o3 = r3; e2[o3] && !(o3 >= n3); )
      ++o3;
    if (o3 - r3 > 16 && e2.buffer && Z)
      return Z.decode(e2.subarray(r3, o3));
    for (var a3 = ""; r3 < o3; ) {
      var i3 = e2[r3++];
      if (128 & i3) {
        var s2 = 63 & e2[r3++];
        if (192 != (224 & i3)) {
          var u2 = 63 & e2[r3++];
          if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | s2 << 6 | u2 : (7 & i3) << 18 | s2 << 12 | u2 << 6 | 63 & e2[r3++]) < 65536)
            a3 += String.fromCharCode(i3);
          else {
            var l2 = i3 - 65536;
            a3 += String.fromCharCode(55296 | l2 >> 10, 56320 | 1023 & l2);
          }
        } else
          a3 += String.fromCharCode((31 & i3) << 6 | s2);
      } else
        a3 += String.fromCharCode(i3);
    }
    return a3;
  }, re = (e2, r3) => e2 ? ee(g, e2, r3) : "", te = (e2, r3, t2, n3) => {
    H(`Assertion failed: ${re(e2)}, at: ` + [r3 ? re(r3) : "unknown filename", t2, n3 ? re(n3) : "unknown function"]);
  };
  function ne(e2) {
    this.excPtr = e2, this.ptr = e2 - 24, this.set_type = function(e3) {
      _[this.ptr + 4 >> 2] = e3;
    }, this.get_type = function() {
      return _[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e3) {
      _[this.ptr + 8 >> 2] = e3;
    }, this.get_destructor = function() {
      return _[this.ptr + 8 >> 2];
    }, this.set_caught = function(e3) {
      e3 = e3 ? 1 : 0, v[this.ptr + 12 >> 0] = e3;
    }, this.get_caught = function() {
      return 0 != v[this.ptr + 12 >> 0];
    }, this.set_rethrown = function(e3) {
      e3 = e3 ? 1 : 0, v[this.ptr + 13 >> 0] = e3;
    }, this.get_rethrown = function() {
      return 0 != v[this.ptr + 13 >> 0];
    }, this.init = function(e3, r3) {
      this.set_adjusted_ptr(0), this.set_type(e3), this.set_destructor(r3);
    }, this.set_adjusted_ptr = function(e3) {
      _[this.ptr + 16 >> 2] = e3;
    }, this.get_adjusted_ptr = function() {
      return _[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Mo(this.get_type()))
        return _[this.excPtr >> 2];
      var e3 = this.get_adjusted_ptr();
      return 0 !== e3 ? e3 : this.excPtr;
    };
  }
  var oe = (e2, r3, t2) => {
    throw new ne(e2).init(r3, t2), e2;
  }, ae = (e2) => (E[To() >> 2] = e2, e2), ie = { isAbs: (e2) => "/" === e2.charAt(0), splitPath: (e2) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e2).slice(1), normalizeArray: (e2, r3) => {
    for (var t2 = 0, n3 = e2.length - 1; n3 >= 0; n3--) {
      var o3 = e2[n3];
      "." === o3 ? e2.splice(n3, 1) : ".." === o3 ? (e2.splice(n3, 1), t2++) : t2 && (e2.splice(n3, 1), t2--);
    }
    if (r3)
      for (; t2; t2--)
        e2.unshift("..");
    return e2;
  }, normalize: (e2) => {
    var r3 = ie.isAbs(e2), t2 = "/" === e2.substr(-1);
    return (e2 = ie.normalizeArray(e2.split("/").filter((e3) => !!e3), !r3).join("/")) || r3 || (e2 = "."), e2 && t2 && (e2 += "/"), (r3 ? "/" : "") + e2;
  }, dirname: (e2) => {
    var r3 = ie.splitPath(e2), t2 = r3[0], n3 = r3[1];
    return t2 || n3 ? (n3 && (n3 = n3.substr(0, n3.length - 1)), t2 + n3) : ".";
  }, basename: (e2) => {
    if ("/" === e2)
      return "/";
    var r3 = (e2 = (e2 = ie.normalize(e2)).replace(/\/$/, "")).lastIndexOf("/");
    return -1 === r3 ? e2 : e2.substr(r3 + 1);
  }, join: function() {
    var e2 = Array.prototype.slice.call(arguments);
    return ie.normalize(e2.join("/"));
  }, join2: (e2, r3) => ie.normalize(e2 + "/" + r3) }, se = () => {
    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
      return (e2) => crypto.getRandomValues(e2);
    H("initRandomDevice");
  }, ue = (e2) => (ue = se())(e2), le = { resolve: function() {
    for (var e2 = "", r3 = false, t2 = arguments.length - 1; t2 >= -1 && !r3; t2--) {
      var n3 = t2 >= 0 ? arguments[t2] : Fe.cwd();
      if ("string" != typeof n3)
        throw new TypeError("Arguments to path.resolve must be strings");
      if (!n3)
        return "";
      e2 = n3 + "/" + e2, r3 = ie.isAbs(n3);
    }
    return (r3 ? "/" : "") + (e2 = ie.normalizeArray(e2.split("/").filter((e3) => !!e3), !r3).join("/")) || ".";
  }, relative: (e2, r3) => {
    function t2(e3) {
      for (var r4 = 0; r4 < e3.length && "" === e3[r4]; r4++)
        ;
      for (var t3 = e3.length - 1; t3 >= 0 && "" === e3[t3]; t3--)
        ;
      return r4 > t3 ? [] : e3.slice(r4, t3 - r4 + 1);
    }
    e2 = le.resolve(e2).substr(1), r3 = le.resolve(r3).substr(1);
    for (var n3 = t2(e2.split("/")), o3 = t2(r3.split("/")), a3 = Math.min(n3.length, o3.length), i3 = a3, s2 = 0; s2 < a3; s2++)
      if (n3[s2] !== o3[s2]) {
        i3 = s2;
        break;
      }
    var u2 = [];
    for (s2 = i3; s2 < n3.length; s2++)
      u2.push("..");
    return (u2 = u2.concat(o3.slice(i3))).join("/");
  } }, de = [], ce = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 <= 127 ? r3++ : n3 <= 2047 ? r3 += 2 : n3 >= 55296 && n3 <= 57343 ? (r3 += 4, ++t2) : r3 += 3;
    }
    return r3;
  }, fe = (e2, r3, t2, n3) => {
    if (!(n3 > 0))
      return 0;
    for (var o3 = t2, a3 = t2 + n3 - 1, i3 = 0; i3 < e2.length; ++i3) {
      var s2 = e2.charCodeAt(i3);
      if (s2 >= 55296 && s2 <= 57343 && (s2 = 65536 + ((1023 & s2) << 10) | 1023 & e2.charCodeAt(++i3)), s2 <= 127) {
        if (t2 >= a3)
          break;
        r3[t2++] = s2;
      } else if (s2 <= 2047) {
        if (t2 + 1 >= a3)
          break;
        r3[t2++] = 192 | s2 >> 6, r3[t2++] = 128 | 63 & s2;
      } else if (s2 <= 65535) {
        if (t2 + 2 >= a3)
          break;
        r3[t2++] = 224 | s2 >> 12, r3[t2++] = 128 | s2 >> 6 & 63, r3[t2++] = 128 | 63 & s2;
      } else {
        if (t2 + 3 >= a3)
          break;
        r3[t2++] = 240 | s2 >> 18, r3[t2++] = 128 | s2 >> 12 & 63, r3[t2++] = 128 | s2 >> 6 & 63, r3[t2++] = 128 | 63 & s2;
      }
    }
    return r3[t2] = 0, t2 - o3;
  };
  function me(e2, r3, t2) {
    var n3 = t2 > 0 ? t2 : ce(e2) + 1, o3 = new Array(n3), a3 = fe(e2, o3, 0, o3.length);
    return r3 && (o3.length = a3), o3;
  }
  var he = () => {
    if (!de.length) {
      var e2 = null;
      if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (e2 = window.prompt("Input: ")) && (e2 += "\n") : "function" == typeof readline && null !== (e2 = readline()) && (e2 += "\n"), !e2)
        return null;
      de = me(e2, true);
    }
    return de.shift();
  }, pe = { ttys: [], init() {
  }, shutdown() {
  }, register(e2, r3) {
    pe.ttys[e2] = { input: [], output: [], ops: r3 }, Fe.registerDevice(e2, pe.stream_ops);
  }, stream_ops: { open(e2) {
    var r3 = pe.ttys[e2.node.rdev];
    if (!r3)
      throw new Fe.ErrnoError(43);
    e2.tty = r3, e2.seekable = false;
  }, close(e2) {
    e2.tty.ops.fsync(e2.tty);
  }, fsync(e2) {
    e2.tty.ops.fsync(e2.tty);
  }, read(e2, r3, t2, n3, o3) {
    if (!e2.tty || !e2.tty.ops.get_char)
      throw new Fe.ErrnoError(60);
    for (var a3 = 0, i3 = 0; i3 < n3; i3++) {
      var s2;
      try {
        s2 = e2.tty.ops.get_char(e2.tty);
      } catch (u2) {
        throw new Fe.ErrnoError(29);
      }
      if (void 0 === s2 && 0 === a3)
        throw new Fe.ErrnoError(6);
      if (null == s2)
        break;
      a3++, r3[t2 + i3] = s2;
    }
    return a3 && (e2.node.timestamp = Date.now()), a3;
  }, write(e2, r3, t2, n3, o3) {
    if (!e2.tty || !e2.tty.ops.put_char)
      throw new Fe.ErrnoError(60);
    try {
      for (var a3 = 0; a3 < n3; a3++)
        e2.tty.ops.put_char(e2.tty, r3[t2 + a3]);
    } catch (i3) {
      throw new Fe.ErrnoError(29);
    }
    return n3 && (e2.node.timestamp = Date.now()), a3;
  } }, default_tty_ops: { get_char: (e2) => he(), put_char(e2, r3) {
    null === r3 || 10 === r3 ? (h(ee(e2.output, 0)), e2.output = []) : 0 != r3 && e2.output.push(r3);
  }, fsync(e2) {
    e2.output && e2.output.length > 0 && (h(ee(e2.output, 0)), e2.output = []);
  }, ioctl_tcgets: (e2) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (e2, r3, t2) => 0, ioctl_tiocgwinsz: (e2) => [24, 80] }, default_tty1_ops: { put_char(e2, r3) {
    null === r3 || 10 === r3 ? (p(ee(e2.output, 0)), e2.output = []) : 0 != r3 && e2.output.push(r3);
  }, fsync(e2) {
    e2.output && e2.output.length > 0 && (p(ee(e2.output, 0)), e2.output = []);
  } } }, ve = (e2) => {
    H();
  }, ge = { ops_table: null, mount: (e2) => ge.createNode(null, "/", 16895, 0), createNode(e2, r3, t2, n3) {
    if (Fe.isBlkdev(t2) || Fe.isFIFO(t2))
      throw new Fe.ErrnoError(63);
    ge.ops_table || (ge.ops_table = { dir: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, lookup: ge.node_ops.lookup, mknod: ge.node_ops.mknod, rename: ge.node_ops.rename, unlink: ge.node_ops.unlink, rmdir: ge.node_ops.rmdir, readdir: ge.node_ops.readdir, symlink: ge.node_ops.symlink }, stream: { llseek: ge.stream_ops.llseek } }, file: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: { llseek: ge.stream_ops.llseek, read: ge.stream_ops.read, write: ge.stream_ops.write, allocate: ge.stream_ops.allocate, mmap: ge.stream_ops.mmap, msync: ge.stream_ops.msync } }, link: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr, readlink: ge.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: ge.node_ops.getattr, setattr: ge.node_ops.setattr }, stream: Fe.chrdev_stream_ops } });
    var o3 = Fe.createNode(e2, r3, t2, n3);
    return Fe.isDir(o3.mode) ? (o3.node_ops = ge.ops_table.dir.node, o3.stream_ops = ge.ops_table.dir.stream, o3.contents = {}) : Fe.isFile(o3.mode) ? (o3.node_ops = ge.ops_table.file.node, o3.stream_ops = ge.ops_table.file.stream, o3.usedBytes = 0, o3.contents = null) : Fe.isLink(o3.mode) ? (o3.node_ops = ge.ops_table.link.node, o3.stream_ops = ge.ops_table.link.stream) : Fe.isChrdev(o3.mode) && (o3.node_ops = ge.ops_table.chrdev.node, o3.stream_ops = ge.ops_table.chrdev.stream), o3.timestamp = Date.now(), e2 && (e2.contents[r3] = o3, e2.timestamp = o3.timestamp), o3;
  }, getFileDataAsTypedArray: (e2) => e2.contents ? e2.contents.subarray ? e2.contents.subarray(0, e2.usedBytes) : new Uint8Array(e2.contents) : new Uint8Array(0), expandFileStorage(e2, r3) {
    var t2 = e2.contents ? e2.contents.length : 0;
    if (!(t2 >= r3)) {
      var n3 = 1048576;
      r3 = Math.max(r3, t2 * (t2 < n3 ? 2 : 1.125) >>> 0), 0 != t2 && (r3 = Math.max(r3, 256));
      var o3 = e2.contents;
      e2.contents = new Uint8Array(r3), e2.usedBytes > 0 && e2.contents.set(o3.subarray(0, e2.usedBytes), 0);
    }
  }, resizeFileStorage(e2, r3) {
    if (e2.usedBytes != r3)
      if (0 == r3)
        e2.contents = null, e2.usedBytes = 0;
      else {
        var t2 = e2.contents;
        e2.contents = new Uint8Array(r3), t2 && e2.contents.set(t2.subarray(0, Math.min(r3, e2.usedBytes))), e2.usedBytes = r3;
      }
  }, node_ops: { getattr(e2) {
    var r3 = {};
    return r3.dev = Fe.isChrdev(e2.mode) ? e2.id : 1, r3.ino = e2.id, r3.mode = e2.mode, r3.nlink = 1, r3.uid = 0, r3.gid = 0, r3.rdev = e2.rdev, Fe.isDir(e2.mode) ? r3.size = 4096 : Fe.isFile(e2.mode) ? r3.size = e2.usedBytes : Fe.isLink(e2.mode) ? r3.size = e2.link.length : r3.size = 0, r3.atime = new Date(e2.timestamp), r3.mtime = new Date(e2.timestamp), r3.ctime = new Date(e2.timestamp), r3.blksize = 4096, r3.blocks = Math.ceil(r3.size / r3.blksize), r3;
  }, setattr(e2, r3) {
    void 0 !== r3.mode && (e2.mode = r3.mode), void 0 !== r3.timestamp && (e2.timestamp = r3.timestamp), void 0 !== r3.size && ge.resizeFileStorage(e2, r3.size);
  }, lookup(e2, r3) {
    throw Fe.genericErrors[44];
  }, mknod: (e2, r3, t2, n3) => ge.createNode(e2, r3, t2, n3), rename(e2, r3, t2) {
    if (Fe.isDir(e2.mode)) {
      var n3;
      try {
        n3 = Fe.lookupNode(r3, t2);
      } catch (a3) {
      }
      if (n3)
        for (var o3 in n3.contents)
          throw new Fe.ErrnoError(55);
    }
    delete e2.parent.contents[e2.name], e2.parent.timestamp = Date.now(), e2.name = t2, r3.contents[t2] = e2, r3.timestamp = e2.parent.timestamp, e2.parent = r3;
  }, unlink(e2, r3) {
    delete e2.contents[r3], e2.timestamp = Date.now();
  }, rmdir(e2, r3) {
    var t2 = Fe.lookupNode(e2, r3);
    for (var n3 in t2.contents)
      throw new Fe.ErrnoError(55);
    delete e2.contents[r3], e2.timestamp = Date.now();
  }, readdir(e2) {
    var r3 = [".", ".."];
    for (var t2 in e2.contents)
      e2.contents.hasOwnProperty(t2) && r3.push(t2);
    return r3;
  }, symlink(e2, r3, t2) {
    var n3 = ge.createNode(e2, r3, 41471, 0);
    return n3.link = t2, n3;
  }, readlink(e2) {
    if (!Fe.isLink(e2.mode))
      throw new Fe.ErrnoError(28);
    return e2.link;
  } }, stream_ops: { read(e2, r3, t2, n3, o3) {
    var a3 = e2.node.contents;
    if (o3 >= e2.node.usedBytes)
      return 0;
    var i3 = Math.min(e2.node.usedBytes - o3, n3);
    if (i3 > 8 && a3.subarray)
      r3.set(a3.subarray(o3, o3 + i3), t2);
    else
      for (var s2 = 0; s2 < i3; s2++)
        r3[t2 + s2] = a3[o3 + s2];
    return i3;
  }, write(e2, r3, t2, n3, o3, a3) {
    if (r3.buffer === v.buffer && (a3 = false), !n3)
      return 0;
    var i3 = e2.node;
    if (i3.timestamp = Date.now(), r3.subarray && (!i3.contents || i3.contents.subarray)) {
      if (a3)
        return i3.contents = r3.subarray(t2, t2 + n3), i3.usedBytes = n3, n3;
      if (0 === i3.usedBytes && 0 === o3)
        return i3.contents = r3.slice(t2, t2 + n3), i3.usedBytes = n3, n3;
      if (o3 + n3 <= i3.usedBytes)
        return i3.contents.set(r3.subarray(t2, t2 + n3), o3), n3;
    }
    if (ge.expandFileStorage(i3, o3 + n3), i3.contents.subarray && r3.subarray)
      i3.contents.set(r3.subarray(t2, t2 + n3), o3);
    else
      for (var s2 = 0; s2 < n3; s2++)
        i3.contents[o3 + s2] = r3[t2 + s2];
    return i3.usedBytes = Math.max(i3.usedBytes, o3 + n3), n3;
  }, llseek(e2, r3, t2) {
    var n3 = r3;
    if (1 === t2 ? n3 += e2.position : 2 === t2 && Fe.isFile(e2.node.mode) && (n3 += e2.node.usedBytes), n3 < 0)
      throw new Fe.ErrnoError(28);
    return n3;
  }, allocate(e2, r3, t2) {
    ge.expandFileStorage(e2.node, r3 + t2), e2.node.usedBytes = Math.max(e2.node.usedBytes, r3 + t2);
  }, mmap(e2, r3, t2, n3, o3) {
    if (!Fe.isFile(e2.node.mode))
      throw new Fe.ErrnoError(43);
    var a3, i3, s2 = e2.node.contents;
    if (2 & o3 || s2.buffer !== v.buffer) {
      if ((t2 > 0 || t2 + r3 < s2.length) && (s2 = s2.subarray ? s2.subarray(t2, t2 + r3) : Array.prototype.slice.call(s2, t2, t2 + r3)), i3 = true, !(a3 = ve()))
        throw new Fe.ErrnoError(48);
      v.set(s2, a3);
    } else
      i3 = false, a3 = s2.byteOffset;
    return { ptr: a3, allocated: i3 };
  }, msync: (e2, r3, t2, n3, o3) => (ge.stream_ops.write(e2, r3, 0, n3, t2, false), 0) } }, ye = (e2, r3, t2, n3) => {
    var o3 = n3 ? "" : O(`al ${e2}`);
    i2(e2, (t3) => {
      F(t3, `Loading data file "${e2}" failed (no arrayBuffer).`), r3(new Uint8Array(t3)), o3 && W();
    }, (r4) => {
      if (!t2)
        throw `Loading data file "${e2}" failed.`;
      t2();
    }), o3 && N();
  }, we = (e2, r3, t2, n3, o3, a3) => Fe.createDataFile(e2, r3, t2, n3, o3, a3), Ee = o2.preloadPlugins || [], _e = (e2, r3, t2, n3) => {
    "undefined" != typeof Browser && Browser.init();
    var o3 = false;
    return Ee.forEach((a3) => {
      o3 || a3.canHandle(r3) && (a3.handle(e2, r3, t2, n3), o3 = true);
    }), o3;
  }, be = (e2, r3, t2, n3, o3, a3, i3, s2, u2, l2) => {
    var d2 = r3 ? le.resolve(ie.join2(e2, r3)) : e2;
    function c2(t3) {
      function c3(t4) {
        l2 && l2(), s2 || we(e2, r3, t4, n3, o3, u2), a3 && a3(), W();
      }
      _e(t3, d2, c3, () => {
        i3 && i3(), W();
      }) || c3(t3);
    }
    N(), "string" == typeof t2 ? ye(t2, (e3) => c2(e3), i3) : c2(t2);
  }, ke = (e2) => {
    var r3 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e2];
    if (void 0 === r3)
      throw new Error(`Unknown file open mode: ${e2}`);
    return r3;
  }, xe = (e2, r3) => {
    var t2 = 0;
    return e2 && (t2 |= 365), r3 && (t2 |= 146), t2;
  }, Fe = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath(e2, r3 = {}) {
    if (!(e2 = le.resolve(e2)))
      return { path: "", node: null };
    var t2 = { follow_mount: true, recurse_count: 0 };
    if ((r3 = Object.assign(t2, r3)).recurse_count > 8)
      throw new Fe.ErrnoError(32);
    for (var n3 = e2.split("/").filter((e3) => !!e3), o3 = Fe.root, a3 = "/", i3 = 0; i3 < n3.length; i3++) {
      var s2 = i3 === n3.length - 1;
      if (s2 && r3.parent)
        break;
      if (o3 = Fe.lookupNode(o3, n3[i3]), a3 = ie.join2(a3, n3[i3]), Fe.isMountpoint(o3) && (!s2 || s2 && r3.follow_mount) && (o3 = o3.mounted.root), !s2 || r3.follow)
        for (var u2 = 0; Fe.isLink(o3.mode); ) {
          var l2 = Fe.readlink(a3);
          if (a3 = le.resolve(ie.dirname(a3), l2), o3 = Fe.lookupPath(a3, { recurse_count: r3.recurse_count + 1 }).node, u2++ > 40)
            throw new Fe.ErrnoError(32);
        }
    }
    return { path: a3, node: o3 };
  }, getPath(e2) {
    for (var r3; ; ) {
      if (Fe.isRoot(e2)) {
        var t2 = e2.mount.mountpoint;
        return r3 ? "/" !== t2[t2.length - 1] ? `${t2}/${r3}` : t2 + r3 : t2;
      }
      r3 = r3 ? `${e2.name}/${r3}` : e2.name, e2 = e2.parent;
    }
  }, hashName(e2, r3) {
    for (var t2 = 0, n3 = 0; n3 < r3.length; n3++)
      t2 = (t2 << 5) - t2 + r3.charCodeAt(n3) | 0;
    return (e2 + t2 >>> 0) % Fe.nameTable.length;
  }, hashAddNode(e2) {
    var r3 = Fe.hashName(e2.parent.id, e2.name);
    e2.name_next = Fe.nameTable[r3], Fe.nameTable[r3] = e2;
  }, hashRemoveNode(e2) {
    var r3 = Fe.hashName(e2.parent.id, e2.name);
    if (Fe.nameTable[r3] === e2)
      Fe.nameTable[r3] = e2.name_next;
    else
      for (var t2 = Fe.nameTable[r3]; t2; ) {
        if (t2.name_next === e2) {
          t2.name_next = e2.name_next;
          break;
        }
        t2 = t2.name_next;
      }
  }, lookupNode(e2, r3) {
    var t2 = Fe.mayLookup(e2);
    if (t2)
      throw new Fe.ErrnoError(t2, e2);
    for (var n3 = Fe.hashName(e2.id, r3), o3 = Fe.nameTable[n3]; o3; o3 = o3.name_next) {
      var a3 = o3.name;
      if (o3.parent.id === e2.id && a3 === r3)
        return o3;
    }
    return Fe.lookup(e2, r3);
  }, createNode(e2, r3, t2, n3) {
    var o3 = new Fe.FSNode(e2, r3, t2, n3);
    return Fe.hashAddNode(o3), o3;
  }, destroyNode(e2) {
    Fe.hashRemoveNode(e2);
  }, isRoot: (e2) => e2 === e2.parent, isMountpoint: (e2) => !!e2.mounted, isFile: (e2) => 32768 == (61440 & e2), isDir: (e2) => 16384 == (61440 & e2), isLink: (e2) => 40960 == (61440 & e2), isChrdev: (e2) => 8192 == (61440 & e2), isBlkdev: (e2) => 24576 == (61440 & e2), isFIFO: (e2) => 4096 == (61440 & e2), isSocket: (e2) => 49152 == (49152 & e2), flagsToPermissionString(e2) {
    var r3 = ["r", "w", "rw"][3 & e2];
    return 512 & e2 && (r3 += "w"), r3;
  }, nodePermissions: (e2, r3) => Fe.ignorePermissions || (!r3.includes("r") || 292 & e2.mode) && (!r3.includes("w") || 146 & e2.mode) && (!r3.includes("x") || 73 & e2.mode) ? 0 : 2, mayLookup(e2) {
    var r3 = Fe.nodePermissions(e2, "x");
    return r3 || (e2.node_ops.lookup ? 0 : 2);
  }, mayCreate(e2, r3) {
    try {
      return Fe.lookupNode(e2, r3), 20;
    } catch (t2) {
    }
    return Fe.nodePermissions(e2, "wx");
  }, mayDelete(e2, r3, t2) {
    var n3;
    try {
      n3 = Fe.lookupNode(e2, r3);
    } catch (a3) {
      return a3.errno;
    }
    var o3 = Fe.nodePermissions(e2, "wx");
    if (o3)
      return o3;
    if (t2) {
      if (!Fe.isDir(n3.mode))
        return 54;
      if (Fe.isRoot(n3) || Fe.getPath(n3) === Fe.cwd())
        return 10;
    } else if (Fe.isDir(n3.mode))
      return 31;
    return 0;
  }, mayOpen: (e2, r3) => e2 ? Fe.isLink(e2.mode) ? 32 : Fe.isDir(e2.mode) && ("r" !== Fe.flagsToPermissionString(r3) || 512 & r3) ? 31 : Fe.nodePermissions(e2, Fe.flagsToPermissionString(r3)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
    for (var e2 = 0; e2 <= Fe.MAX_OPEN_FDS; e2++)
      if (!Fe.streams[e2])
        return e2;
    throw new Fe.ErrnoError(33);
  }, getStreamChecked(e2) {
    var r3 = Fe.getStream(e2);
    if (!r3)
      throw new Fe.ErrnoError(8);
    return r3;
  }, getStream: (e2) => Fe.streams[e2], createStream: (e2, r3 = -1) => (Fe.FSStream || (Fe.FSStream = function() {
    this.shared = {};
  }, Fe.FSStream.prototype = {}, Object.defineProperties(Fe.FSStream.prototype, { object: { get() {
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
  } } })), e2 = Object.assign(new Fe.FSStream(), e2), -1 == r3 && (r3 = Fe.nextfd()), e2.fd = r3, Fe.streams[r3] = e2, e2), closeStream(e2) {
    Fe.streams[e2] = null;
  }, chrdev_stream_ops: { open(e2) {
    var r3 = Fe.getDevice(e2.node.rdev);
    e2.stream_ops = r3.stream_ops, e2.stream_ops.open && e2.stream_ops.open(e2);
  }, llseek() {
    throw new Fe.ErrnoError(70);
  } }, major: (e2) => e2 >> 8, minor: (e2) => 255 & e2, makedev: (e2, r3) => e2 << 8 | r3, registerDevice(e2, r3) {
    Fe.devices[e2] = { stream_ops: r3 };
  }, getDevice: (e2) => Fe.devices[e2], getMounts(e2) {
    for (var r3 = [], t2 = [e2]; t2.length; ) {
      var n3 = t2.pop();
      r3.push(n3), t2.push.apply(t2, n3.mounts);
    }
    return r3;
  }, syncfs(e2, r3) {
    "function" == typeof e2 && (r3 = e2, e2 = false), Fe.syncFSRequests++, Fe.syncFSRequests > 1 && p(`warning: ${Fe.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t2 = Fe.getMounts(Fe.root.mount), n3 = 0;
    function o3(e3) {
      return Fe.syncFSRequests--, r3(e3);
    }
    function a3(e3) {
      if (e3)
        return a3.errored ? void 0 : (a3.errored = true, o3(e3));
      ++n3 >= t2.length && o3(null);
    }
    t2.forEach((r4) => {
      if (!r4.type.syncfs)
        return a3(null);
      r4.type.syncfs(r4, e2, a3);
    });
  }, mount(e2, r3, t2) {
    var n3, o3 = "/" === t2, a3 = !t2;
    if (o3 && Fe.root)
      throw new Fe.ErrnoError(10);
    if (!o3 && !a3) {
      var i3 = Fe.lookupPath(t2, { follow_mount: false });
      if (t2 = i3.path, n3 = i3.node, Fe.isMountpoint(n3))
        throw new Fe.ErrnoError(10);
      if (!Fe.isDir(n3.mode))
        throw new Fe.ErrnoError(54);
    }
    var s2 = { type: e2, opts: r3, mountpoint: t2, mounts: [] }, u2 = e2.mount(s2);
    return u2.mount = s2, s2.root = u2, o3 ? Fe.root = u2 : n3 && (n3.mounted = s2, n3.mount && n3.mount.mounts.push(s2)), u2;
  }, unmount(e2) {
    var r3 = Fe.lookupPath(e2, { follow_mount: false });
    if (!Fe.isMountpoint(r3.node))
      throw new Fe.ErrnoError(28);
    var t2 = r3.node, n3 = t2.mounted, o3 = Fe.getMounts(n3);
    Object.keys(Fe.nameTable).forEach((e3) => {
      for (var r4 = Fe.nameTable[e3]; r4; ) {
        var t3 = r4.name_next;
        o3.includes(r4.mount) && Fe.destroyNode(r4), r4 = t3;
      }
    }), t2.mounted = null;
    var a3 = t2.mount.mounts.indexOf(n3);
    t2.mount.mounts.splice(a3, 1);
  }, lookup: (e2, r3) => e2.node_ops.lookup(e2, r3), mknod(e2, r3, t2) {
    var n3 = Fe.lookupPath(e2, { parent: true }).node, o3 = ie.basename(e2);
    if (!o3 || "." === o3 || ".." === o3)
      throw new Fe.ErrnoError(28);
    var a3 = Fe.mayCreate(n3, o3);
    if (a3)
      throw new Fe.ErrnoError(a3);
    if (!n3.node_ops.mknod)
      throw new Fe.ErrnoError(63);
    return n3.node_ops.mknod(n3, o3, r3, t2);
  }, create: (e2, r3) => (r3 = void 0 !== r3 ? r3 : 438, r3 &= 4095, r3 |= 32768, Fe.mknod(e2, r3, 0)), mkdir: (e2, r3) => (r3 = void 0 !== r3 ? r3 : 511, r3 &= 1023, r3 |= 16384, Fe.mknod(e2, r3, 0)), mkdirTree(e2, r3) {
    for (var t2 = e2.split("/"), n3 = "", o3 = 0; o3 < t2.length; ++o3)
      if (t2[o3]) {
        n3 += "/" + t2[o3];
        try {
          Fe.mkdir(n3, r3);
        } catch (a3) {
          if (20 != a3.errno)
            throw a3;
        }
      }
  }, mkdev: (e2, r3, t2) => (void 0 === t2 && (t2 = r3, r3 = 438), r3 |= 8192, Fe.mknod(e2, r3, t2)), symlink(e2, r3) {
    if (!le.resolve(e2))
      throw new Fe.ErrnoError(44);
    var t2 = Fe.lookupPath(r3, { parent: true }).node;
    if (!t2)
      throw new Fe.ErrnoError(44);
    var n3 = ie.basename(r3), o3 = Fe.mayCreate(t2, n3);
    if (o3)
      throw new Fe.ErrnoError(o3);
    if (!t2.node_ops.symlink)
      throw new Fe.ErrnoError(63);
    return t2.node_ops.symlink(t2, n3, e2);
  }, rename(e2, r3) {
    var t2, n3, o3 = ie.dirname(e2), a3 = ie.dirname(r3), i3 = ie.basename(e2), s2 = ie.basename(r3);
    if (t2 = Fe.lookupPath(e2, { parent: true }).node, n3 = Fe.lookupPath(r3, { parent: true }).node, !t2 || !n3)
      throw new Fe.ErrnoError(44);
    if (t2.mount !== n3.mount)
      throw new Fe.ErrnoError(75);
    var u2, l2 = Fe.lookupNode(t2, i3), d2 = le.relative(e2, a3);
    if ("." !== d2.charAt(0))
      throw new Fe.ErrnoError(28);
    if ("." !== (d2 = le.relative(r3, o3)).charAt(0))
      throw new Fe.ErrnoError(55);
    try {
      u2 = Fe.lookupNode(n3, s2);
    } catch (m2) {
    }
    if (l2 !== u2) {
      var c2 = Fe.isDir(l2.mode), f2 = Fe.mayDelete(t2, i3, c2);
      if (f2)
        throw new Fe.ErrnoError(f2);
      if (f2 = u2 ? Fe.mayDelete(n3, s2, c2) : Fe.mayCreate(n3, s2))
        throw new Fe.ErrnoError(f2);
      if (!t2.node_ops.rename)
        throw new Fe.ErrnoError(63);
      if (Fe.isMountpoint(l2) || u2 && Fe.isMountpoint(u2))
        throw new Fe.ErrnoError(10);
      if (n3 !== t2 && (f2 = Fe.nodePermissions(t2, "w")))
        throw new Fe.ErrnoError(f2);
      Fe.hashRemoveNode(l2);
      try {
        t2.node_ops.rename(l2, n3, s2);
      } catch (m2) {
        throw m2;
      } finally {
        Fe.hashAddNode(l2);
      }
    }
  }, rmdir(e2) {
    var r3 = Fe.lookupPath(e2, { parent: true }).node, t2 = ie.basename(e2), n3 = Fe.lookupNode(r3, t2), o3 = Fe.mayDelete(r3, t2, true);
    if (o3)
      throw new Fe.ErrnoError(o3);
    if (!r3.node_ops.rmdir)
      throw new Fe.ErrnoError(63);
    if (Fe.isMountpoint(n3))
      throw new Fe.ErrnoError(10);
    r3.node_ops.rmdir(r3, t2), Fe.destroyNode(n3);
  }, readdir(e2) {
    var r3 = Fe.lookupPath(e2, { follow: true }).node;
    if (!r3.node_ops.readdir)
      throw new Fe.ErrnoError(54);
    return r3.node_ops.readdir(r3);
  }, unlink(e2) {
    var r3 = Fe.lookupPath(e2, { parent: true }).node;
    if (!r3)
      throw new Fe.ErrnoError(44);
    var t2 = ie.basename(e2), n3 = Fe.lookupNode(r3, t2), o3 = Fe.mayDelete(r3, t2, false);
    if (o3)
      throw new Fe.ErrnoError(o3);
    if (!r3.node_ops.unlink)
      throw new Fe.ErrnoError(63);
    if (Fe.isMountpoint(n3))
      throw new Fe.ErrnoError(10);
    r3.node_ops.unlink(r3, t2), Fe.destroyNode(n3);
  }, readlink(e2) {
    var r3 = Fe.lookupPath(e2).node;
    if (!r3)
      throw new Fe.ErrnoError(44);
    if (!r3.node_ops.readlink)
      throw new Fe.ErrnoError(28);
    return le.resolve(Fe.getPath(r3.parent), r3.node_ops.readlink(r3));
  }, stat(e2, r3) {
    var t2 = Fe.lookupPath(e2, { follow: !r3 }).node;
    if (!t2)
      throw new Fe.ErrnoError(44);
    if (!t2.node_ops.getattr)
      throw new Fe.ErrnoError(63);
    return t2.node_ops.getattr(t2);
  }, lstat: (e2) => Fe.stat(e2, true), chmod(e2, r3, t2) {
    var n3;
    if (!(n3 = "string" == typeof e2 ? Fe.lookupPath(e2, { follow: !t2 }).node : e2).node_ops.setattr)
      throw new Fe.ErrnoError(63);
    n3.node_ops.setattr(n3, { mode: 4095 & r3 | -4096 & n3.mode, timestamp: Date.now() });
  }, lchmod(e2, r3) {
    Fe.chmod(e2, r3, true);
  }, fchmod(e2, r3) {
    var t2 = Fe.getStreamChecked(e2);
    Fe.chmod(t2.node, r3);
  }, chown(e2, r3, t2, n3) {
    var o3;
    if (!(o3 = "string" == typeof e2 ? Fe.lookupPath(e2, { follow: !n3 }).node : e2).node_ops.setattr)
      throw new Fe.ErrnoError(63);
    o3.node_ops.setattr(o3, { timestamp: Date.now() });
  }, lchown(e2, r3, t2) {
    Fe.chown(e2, r3, t2, true);
  }, fchown(e2, r3, t2) {
    var n3 = Fe.getStreamChecked(e2);
    Fe.chown(n3.node, r3, t2);
  }, truncate(e2, r3) {
    if (r3 < 0)
      throw new Fe.ErrnoError(28);
    var t2;
    if (!(t2 = "string" == typeof e2 ? Fe.lookupPath(e2, { follow: true }).node : e2).node_ops.setattr)
      throw new Fe.ErrnoError(63);
    if (Fe.isDir(t2.mode))
      throw new Fe.ErrnoError(31);
    if (!Fe.isFile(t2.mode))
      throw new Fe.ErrnoError(28);
    var n3 = Fe.nodePermissions(t2, "w");
    if (n3)
      throw new Fe.ErrnoError(n3);
    t2.node_ops.setattr(t2, { size: r3, timestamp: Date.now() });
  }, ftruncate(e2, r3) {
    var t2 = Fe.getStreamChecked(e2);
    if (0 == (2097155 & t2.flags))
      throw new Fe.ErrnoError(28);
    Fe.truncate(t2.node, r3);
  }, utime(e2, r3, t2) {
    var n3 = Fe.lookupPath(e2, { follow: true }).node;
    n3.node_ops.setattr(n3, { timestamp: Math.max(r3, t2) });
  }, open(e2, r3, t2) {
    if ("" === e2)
      throw new Fe.ErrnoError(44);
    var n3;
    if (t2 = void 0 === t2 ? 438 : t2, t2 = 64 & (r3 = "string" == typeof r3 ? ke(r3) : r3) ? 4095 & t2 | 32768 : 0, "object" == typeof e2)
      n3 = e2;
    else {
      e2 = ie.normalize(e2);
      try {
        n3 = Fe.lookupPath(e2, { follow: !(131072 & r3) }).node;
      } catch (u2) {
      }
    }
    var a3 = false;
    if (64 & r3)
      if (n3) {
        if (128 & r3)
          throw new Fe.ErrnoError(20);
      } else
        n3 = Fe.mknod(e2, t2, 0), a3 = true;
    if (!n3)
      throw new Fe.ErrnoError(44);
    if (Fe.isChrdev(n3.mode) && (r3 &= -513), 65536 & r3 && !Fe.isDir(n3.mode))
      throw new Fe.ErrnoError(54);
    if (!a3) {
      var i3 = Fe.mayOpen(n3, r3);
      if (i3)
        throw new Fe.ErrnoError(i3);
    }
    512 & r3 && !a3 && Fe.truncate(n3, 0), r3 &= -131713;
    var s2 = Fe.createStream({ node: n3, path: Fe.getPath(n3), flags: r3, seekable: true, position: 0, stream_ops: n3.stream_ops, ungotten: [], error: false });
    return s2.stream_ops.open && s2.stream_ops.open(s2), !o2.logReadFiles || 1 & r3 || (Fe.readFiles || (Fe.readFiles = {}), e2 in Fe.readFiles || (Fe.readFiles[e2] = 1)), s2;
  }, close(e2) {
    if (Fe.isClosed(e2))
      throw new Fe.ErrnoError(8);
    e2.getdents && (e2.getdents = null);
    try {
      e2.stream_ops.close && e2.stream_ops.close(e2);
    } catch (r3) {
      throw r3;
    } finally {
      Fe.closeStream(e2.fd);
    }
    e2.fd = null;
  }, isClosed: (e2) => null === e2.fd, llseek(e2, r3, t2) {
    if (Fe.isClosed(e2))
      throw new Fe.ErrnoError(8);
    if (!e2.seekable || !e2.stream_ops.llseek)
      throw new Fe.ErrnoError(70);
    if (0 != t2 && 1 != t2 && 2 != t2)
      throw new Fe.ErrnoError(28);
    return e2.position = e2.stream_ops.llseek(e2, r3, t2), e2.ungotten = [], e2.position;
  }, read(e2, r3, t2, n3, o3) {
    if (n3 < 0 || o3 < 0)
      throw new Fe.ErrnoError(28);
    if (Fe.isClosed(e2))
      throw new Fe.ErrnoError(8);
    if (1 == (2097155 & e2.flags))
      throw new Fe.ErrnoError(8);
    if (Fe.isDir(e2.node.mode))
      throw new Fe.ErrnoError(31);
    if (!e2.stream_ops.read)
      throw new Fe.ErrnoError(28);
    var a3 = void 0 !== o3;
    if (a3) {
      if (!e2.seekable)
        throw new Fe.ErrnoError(70);
    } else
      o3 = e2.position;
    var i3 = e2.stream_ops.read(e2, r3, t2, n3, o3);
    return a3 || (e2.position += i3), i3;
  }, write(e2, r3, t2, n3, o3, a3) {
    if (n3 < 0 || o3 < 0)
      throw new Fe.ErrnoError(28);
    if (Fe.isClosed(e2))
      throw new Fe.ErrnoError(8);
    if (0 == (2097155 & e2.flags))
      throw new Fe.ErrnoError(8);
    if (Fe.isDir(e2.node.mode))
      throw new Fe.ErrnoError(31);
    if (!e2.stream_ops.write)
      throw new Fe.ErrnoError(28);
    e2.seekable && 1024 & e2.flags && Fe.llseek(e2, 0, 2);
    var i3 = void 0 !== o3;
    if (i3) {
      if (!e2.seekable)
        throw new Fe.ErrnoError(70);
    } else
      o3 = e2.position;
    var s2 = e2.stream_ops.write(e2, r3, t2, n3, o3, a3);
    return i3 || (e2.position += s2), s2;
  }, allocate(e2, r3, t2) {
    if (Fe.isClosed(e2))
      throw new Fe.ErrnoError(8);
    if (r3 < 0 || t2 <= 0)
      throw new Fe.ErrnoError(28);
    if (0 == (2097155 & e2.flags))
      throw new Fe.ErrnoError(8);
    if (!Fe.isFile(e2.node.mode) && !Fe.isDir(e2.node.mode))
      throw new Fe.ErrnoError(43);
    if (!e2.stream_ops.allocate)
      throw new Fe.ErrnoError(138);
    e2.stream_ops.allocate(e2, r3, t2);
  }, mmap(e2, r3, t2, n3, o3) {
    if (0 != (2 & n3) && 0 == (2 & o3) && 2 != (2097155 & e2.flags))
      throw new Fe.ErrnoError(2);
    if (1 == (2097155 & e2.flags))
      throw new Fe.ErrnoError(2);
    if (!e2.stream_ops.mmap)
      throw new Fe.ErrnoError(43);
    return e2.stream_ops.mmap(e2, r3, t2, n3, o3);
  }, msync: (e2, r3, t2, n3, o3) => e2.stream_ops.msync ? e2.stream_ops.msync(e2, r3, t2, n3, o3) : 0, munmap: (e2) => 0, ioctl(e2, r3, t2) {
    if (!e2.stream_ops.ioctl)
      throw new Fe.ErrnoError(59);
    return e2.stream_ops.ioctl(e2, r3, t2);
  }, readFile(e2, r3 = {}) {
    if (r3.flags = r3.flags || 0, r3.encoding = r3.encoding || "binary", "utf8" !== r3.encoding && "binary" !== r3.encoding)
      throw new Error(`Invalid encoding type "${r3.encoding}"`);
    var t2, n3 = Fe.open(e2, r3.flags), o3 = Fe.stat(e2).size, a3 = new Uint8Array(o3);
    return Fe.read(n3, a3, 0, o3, 0), "utf8" === r3.encoding ? t2 = ee(a3, 0) : "binary" === r3.encoding && (t2 = a3), Fe.close(n3), t2;
  }, writeFile(e2, r3, t2 = {}) {
    t2.flags = t2.flags || 577;
    var n3 = Fe.open(e2, t2.flags, t2.mode);
    if ("string" == typeof r3) {
      var o3 = new Uint8Array(ce(r3) + 1), a3 = fe(r3, o3, 0, o3.length);
      Fe.write(n3, o3, 0, a3, void 0, t2.canOwn);
    } else {
      if (!ArrayBuffer.isView(r3))
        throw new Error("Unsupported data type");
      Fe.write(n3, r3, 0, r3.byteLength, void 0, t2.canOwn);
    }
    Fe.close(n3);
  }, cwd: () => Fe.currentPath, chdir(e2) {
    var r3 = Fe.lookupPath(e2, { follow: true });
    if (null === r3.node)
      throw new Fe.ErrnoError(44);
    if (!Fe.isDir(r3.node.mode))
      throw new Fe.ErrnoError(54);
    var t2 = Fe.nodePermissions(r3.node, "x");
    if (t2)
      throw new Fe.ErrnoError(t2);
    Fe.currentPath = r3.path;
  }, createDefaultDirectories() {
    Fe.mkdir("/tmp"), Fe.mkdir("/home"), Fe.mkdir("/home/web_user");
  }, createDefaultDevices() {
    Fe.mkdir("/dev"), Fe.registerDevice(Fe.makedev(1, 3), { read: () => 0, write: (e3, r4, t3, n3, o3) => n3 }), Fe.mkdev("/dev/null", Fe.makedev(1, 3)), pe.register(Fe.makedev(5, 0), pe.default_tty_ops), pe.register(Fe.makedev(6, 0), pe.default_tty1_ops), Fe.mkdev("/dev/tty", Fe.makedev(5, 0)), Fe.mkdev("/dev/tty1", Fe.makedev(6, 0));
    var e2 = new Uint8Array(1024), r3 = 0, t2 = () => (0 === r3 && (r3 = ue(e2).byteLength), e2[--r3]);
    Fe.createDevice("/dev", "random", t2), Fe.createDevice("/dev", "urandom", t2), Fe.mkdir("/dev/shm"), Fe.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    Fe.mkdir("/proc");
    var e2 = Fe.mkdir("/proc/self");
    Fe.mkdir("/proc/self/fd"), Fe.mount({ mount() {
      var r3 = Fe.createNode(e2, "fd", 16895, 73);
      return r3.node_ops = { lookup(e3, r4) {
        var t2 = +r4, n3 = Fe.getStreamChecked(t2), o3 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n3.path } };
        return o3.parent = o3, o3;
      } }, r3;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams() {
    o2.stdin ? Fe.createDevice("/dev", "stdin", o2.stdin) : Fe.symlink("/dev/tty", "/dev/stdin"), o2.stdout ? Fe.createDevice("/dev", "stdout", null, o2.stdout) : Fe.symlink("/dev/tty", "/dev/stdout"), o2.stderr ? Fe.createDevice("/dev", "stderr", null, o2.stderr) : Fe.symlink("/dev/tty1", "/dev/stderr"), Fe.open("/dev/stdin", 0), Fe.open("/dev/stdout", 1), Fe.open("/dev/stderr", 1);
  }, ensureErrnoError() {
    Fe.ErrnoError || (Fe.ErrnoError = function(e2, r3) {
      this.name = "ErrnoError", this.node = r3, this.setErrno = function(e3) {
        this.errno = e3;
      }, this.setErrno(e2), this.message = "FS error";
    }, Fe.ErrnoError.prototype = new Error(), Fe.ErrnoError.prototype.constructor = Fe.ErrnoError, [44].forEach((e2) => {
      Fe.genericErrors[e2] = new Fe.ErrnoError(e2), Fe.genericErrors[e2].stack = "<generic error, no stack>";
    }));
  }, staticInit() {
    Fe.ensureErrnoError(), Fe.nameTable = new Array(4096), Fe.mount(ge, {}, "/"), Fe.createDefaultDirectories(), Fe.createDefaultDevices(), Fe.createSpecialDirectories(), Fe.filesystems = { MEMFS: ge };
  }, init(e2, r3, t2) {
    Fe.init.initialized = true, Fe.ensureErrnoError(), o2.stdin = e2 || o2.stdin, o2.stdout = r3 || o2.stdout, o2.stderr = t2 || o2.stderr, Fe.createStandardStreams();
  }, quit() {
    Fe.init.initialized = false;
    for (var e2 = 0; e2 < Fe.streams.length; e2++) {
      var r3 = Fe.streams[e2];
      r3 && Fe.close(r3);
    }
  }, findObject(e2, r3) {
    var t2 = Fe.analyzePath(e2, r3);
    return t2.exists ? t2.object : null;
  }, analyzePath(e2, r3) {
    try {
      e2 = (n3 = Fe.lookupPath(e2, { follow: !r3 })).path;
    } catch (o3) {
    }
    var t2 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
    try {
      var n3 = Fe.lookupPath(e2, { parent: true });
      t2.parentExists = true, t2.parentPath = n3.path, t2.parentObject = n3.node, t2.name = ie.basename(e2), n3 = Fe.lookupPath(e2, { follow: !r3 }), t2.exists = true, t2.path = n3.path, t2.object = n3.node, t2.name = n3.node.name, t2.isRoot = "/" === n3.path;
    } catch (o3) {
      t2.error = o3.errno;
    }
    return t2;
  }, createPath(e2, r3, t2, n3) {
    e2 = "string" == typeof e2 ? e2 : Fe.getPath(e2);
    for (var o3 = r3.split("/").reverse(); o3.length; ) {
      var a3 = o3.pop();
      if (a3) {
        var i3 = ie.join2(e2, a3);
        try {
          Fe.mkdir(i3);
        } catch (s2) {
        }
        e2 = i3;
      }
    }
    return i3;
  }, createFile(e2, r3, t2, n3, o3) {
    var a3 = ie.join2("string" == typeof e2 ? e2 : Fe.getPath(e2), r3), i3 = xe(n3, o3);
    return Fe.create(a3, i3);
  }, createDataFile(e2, r3, t2, n3, o3, a3) {
    var i3 = r3;
    e2 && (e2 = "string" == typeof e2 ? e2 : Fe.getPath(e2), i3 = r3 ? ie.join2(e2, r3) : e2);
    var s2 = xe(n3, o3), u2 = Fe.create(i3, s2);
    if (t2) {
      if ("string" == typeof t2) {
        for (var l2 = new Array(t2.length), d2 = 0, c2 = t2.length; d2 < c2; ++d2)
          l2[d2] = t2.charCodeAt(d2);
        t2 = l2;
      }
      Fe.chmod(u2, 146 | s2);
      var f2 = Fe.open(u2, 577);
      Fe.write(f2, t2, 0, t2.length, 0, a3), Fe.close(f2), Fe.chmod(u2, s2);
    }
    return u2;
  }, createDevice(e2, r3, t2, n3) {
    var o3 = ie.join2("string" == typeof e2 ? e2 : Fe.getPath(e2), r3), a3 = xe(!!t2, !!n3);
    Fe.createDevice.major || (Fe.createDevice.major = 64);
    var i3 = Fe.makedev(Fe.createDevice.major++, 0);
    return Fe.registerDevice(i3, { open(e3) {
      e3.seekable = false;
    }, close(e3) {
      n3 && n3.buffer && n3.buffer.length && n3(10);
    }, read(e3, r4, n4, o4, a4) {
      for (var i4 = 0, s2 = 0; s2 < o4; s2++) {
        var u2;
        try {
          u2 = t2();
        } catch (l2) {
          throw new Fe.ErrnoError(29);
        }
        if (void 0 === u2 && 0 === i4)
          throw new Fe.ErrnoError(6);
        if (null == u2)
          break;
        i4++, r4[n4 + s2] = u2;
      }
      return i4 && (e3.node.timestamp = Date.now()), i4;
    }, write(e3, r4, t3, o4, a4) {
      for (var i4 = 0; i4 < o4; i4++)
        try {
          n3(r4[t3 + i4]);
        } catch (s2) {
          throw new Fe.ErrnoError(29);
        }
      return o4 && (e3.node.timestamp = Date.now()), i4;
    } }), Fe.mkdev(o3, a3, i3);
  }, forceLoadFile(e2) {
    if (e2.isDevice || e2.isFolder || e2.link || e2.contents)
      return true;
    if ("undefined" != typeof XMLHttpRequest)
      throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    if (!a2)
      throw new Error("Cannot load without read() or XMLHttpRequest.");
    try {
      e2.contents = me(a2(e2.url), true), e2.usedBytes = e2.contents.length;
    } catch (r3) {
      throw new Fe.ErrnoError(29);
    }
  }, createLazyFile(e2, r3, t2, n3, o3) {
    if ("undefined" != typeof XMLHttpRequest)
      throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    var i3 = { isDevice: false, url: t2 }, s2 = Fe.createFile(e2, r3, i3, n3, o3);
    i3.contents ? s2.contents = i3.contents : i3.url && (s2.contents = null, s2.url = i3.url), Object.defineProperties(s2, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u2 = {};
    function l2(e3, r4, t3, n4, o4) {
      var a3 = e3.node.contents;
      if (o4 >= a3.length)
        return 0;
      var i4 = Math.min(a3.length - o4, n4);
      if (a3.slice)
        for (var s3 = 0; s3 < i4; s3++)
          r4[t3 + s3] = a3[o4 + s3];
      else
        for (s3 = 0; s3 < i4; s3++)
          r4[t3 + s3] = a3.get(o4 + s3);
      return i4;
    }
    return Object.keys(s2.stream_ops).forEach((e3) => {
      var r4 = s2.stream_ops[e3];
      u2[e3] = function() {
        return Fe.forceLoadFile(s2), r4.apply(null, arguments);
      };
    }), u2.read = (e3, r4, t3, n4, o4) => (Fe.forceLoadFile(s2), l2(e3, r4, t3, n4, o4)), u2.mmap = (e3, r4, t3, n4, o4) => {
      Fe.forceLoadFile(s2);
      var a3 = ve();
      if (!a3)
        throw new Fe.ErrnoError(48);
      return l2(e3, v, a3, r4, t3), { ptr: a3, allocated: true };
    }, s2.stream_ops = u2, s2;
  } }, Se = { DEFAULT_POLLMASK: 5, calculateAt(e2, r3, t2) {
    if (ie.isAbs(r3))
      return r3;
    var n3;
    if (n3 = -100 === e2 ? Fe.cwd() : Se.getStreamFromFD(e2).path, 0 == r3.length) {
      if (!t2)
        throw new Fe.ErrnoError(44);
      return n3;
    }
    return ie.join2(n3, r3);
  }, doStat(e2, r3, t2) {
    try {
      var n3 = e2(r3);
    } catch (s2) {
      if (s2 && s2.node && ie.normalize(r3) !== ie.normalize(Fe.getPath(s2.node)))
        return -54;
      throw s2;
    }
    E[t2 >> 2] = n3.dev, E[t2 + 4 >> 2] = n3.mode, _[t2 + 8 >> 2] = n3.nlink, E[t2 + 12 >> 2] = n3.uid, E[t2 + 16 >> 2] = n3.gid, E[t2 + 20 >> 2] = n3.rdev, $ = [n3.size >>> 0, (U = n3.size, +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[t2 + 24 >> 2] = $[0], E[t2 + 28 >> 2] = $[1], E[t2 + 32 >> 2] = 4096, E[t2 + 36 >> 2] = n3.blocks;
    var o3 = n3.atime.getTime(), a3 = n3.mtime.getTime(), i3 = n3.ctime.getTime();
    return $ = [Math.floor(o3 / 1e3) >>> 0, (U = Math.floor(o3 / 1e3), +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[t2 + 40 >> 2] = $[0], E[t2 + 44 >> 2] = $[1], _[t2 + 48 >> 2] = o3 % 1e3 * 1e3, $ = [Math.floor(a3 / 1e3) >>> 0, (U = Math.floor(a3 / 1e3), +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[t2 + 56 >> 2] = $[0], E[t2 + 60 >> 2] = $[1], _[t2 + 64 >> 2] = a3 % 1e3 * 1e3, $ = [Math.floor(i3 / 1e3) >>> 0, (U = Math.floor(i3 / 1e3), +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[t2 + 72 >> 2] = $[0], E[t2 + 76 >> 2] = $[1], _[t2 + 80 >> 2] = i3 % 1e3 * 1e3, $ = [n3.ino >>> 0, (U = n3.ino, +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[t2 + 88 >> 2] = $[0], E[t2 + 92 >> 2] = $[1], 0;
  }, doMsync(e2, r3, t2, n3, o3) {
    if (!Fe.isFile(r3.node.mode))
      throw new Fe.ErrnoError(43);
    if (2 & n3)
      return 0;
    var a3 = g.slice(e2, e2 + t2);
    Fe.msync(r3, a3, o3, t2, n3);
  }, varargs: void 0, get() {
    var e2 = E[+Se.varargs >> 2];
    return Se.varargs += 4, e2;
  }, getp: () => Se.get(), getStr: (e2) => re(e2), getStreamFromFD: (e2) => Fe.getStreamChecked(e2) };
  function Ae(e2, r3, t2) {
    Se.varargs = t2;
    try {
      var n3 = Se.getStreamFromFD(e2);
      switch (r3) {
        case 0:
          if ((o3 = Se.get()) < 0)
            return -28;
          for (; Fe.streams[o3]; )
            o3++;
          return Fe.createStream(n3, o3).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n3.flags;
        case 4:
          var o3 = Se.get();
          return n3.flags |= o3, 0;
        case 5:
          return o3 = Se.getp(), y[o3 + 0 >> 1] = 2, 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return ae(28), -1;
      }
    } catch (a3) {
      if (void 0 === Fe || "ErrnoError" !== a3.name)
        throw a3;
      return -a3.errno;
    }
  }
  function Pe(e2, r3, t2) {
    Se.varargs = t2;
    try {
      var n3 = Se.getStreamFromFD(e2);
      switch (r3) {
        case 21509:
        case 21510:
        case 21511:
        case 21512:
        case 21524:
        case 21515:
          return n3.tty ? 0 : -59;
        case 21505:
          if (!n3.tty)
            return -59;
          if (n3.tty.ops.ioctl_tcgets) {
            var o3 = n3.tty.ops.ioctl_tcgets(n3), a3 = Se.getp();
            E[a3 >> 2] = o3.c_iflag || 0, E[a3 + 4 >> 2] = o3.c_oflag || 0, E[a3 + 8 >> 2] = o3.c_cflag || 0, E[a3 + 12 >> 2] = o3.c_lflag || 0;
            for (var i3 = 0; i3 < 32; i3++)
              v[a3 + i3 + 17 >> 0] = o3.c_cc[i3] || 0;
            return 0;
          }
          return 0;
        case 21506:
        case 21507:
        case 21508:
          if (!n3.tty)
            return -59;
          if (n3.tty.ops.ioctl_tcsets) {
            a3 = Se.getp();
            var s2 = E[a3 >> 2], u2 = E[a3 + 4 >> 2], l2 = E[a3 + 8 >> 2], d2 = E[a3 + 12 >> 2], c2 = [];
            for (i3 = 0; i3 < 32; i3++)
              c2.push(v[a3 + i3 + 17 >> 0]);
            return n3.tty.ops.ioctl_tcsets(n3.tty, r3, { c_iflag: s2, c_oflag: u2, c_cflag: l2, c_lflag: d2, c_cc: c2 });
          }
          return 0;
        case 21519:
          return n3.tty ? (a3 = Se.getp(), E[a3 >> 2] = 0, 0) : -59;
        case 21520:
          return n3.tty ? -28 : -59;
        case 21531:
          return a3 = Se.getp(), Fe.ioctl(n3, r3, a3);
        case 21523:
          if (!n3.tty)
            return -59;
          if (n3.tty.ops.ioctl_tiocgwinsz) {
            var f2 = n3.tty.ops.ioctl_tiocgwinsz(n3.tty);
            a3 = Se.getp(), y[a3 >> 1] = f2[0], y[a3 + 2 >> 1] = f2[1];
          }
          return 0;
        default:
          return -28;
      }
    } catch (m2) {
      if (void 0 === Fe || "ErrnoError" !== m2.name)
        throw m2;
      return -m2.errno;
    }
  }
  function Ce(e2, r3, t2, n3) {
    Se.varargs = n3;
    try {
      r3 = Se.getStr(r3), r3 = Se.calculateAt(e2, r3);
      var o3 = n3 ? Se.get() : 0;
      return Fe.open(r3, t2, o3).fd;
    } catch (a3) {
      if (void 0 === Fe || "ErrnoError" !== a3.name)
        throw a3;
      return -a3.errno;
    }
  }
  var De = {}, Te = (e2) => {
    for (; e2.length; ) {
      var r3 = e2.pop();
      e2.pop()(r3);
    }
  };
  function Me(e2) {
    return this.fromWireType(E[e2 >> 2]);
  }
  var Be, je, Le, Re = {}, Ie = {}, Oe = {}, Ne = (e2) => {
    throw new Be(e2);
  }, We = (e2, r3, t2) => {
    function n3(r4) {
      var n4 = t2(r4);
      n4.length !== e2.length && Ne("Mismatched type converter count");
      for (var o4 = 0; o4 < e2.length; ++o4)
        qe(e2[o4], n4[o4]);
    }
    e2.forEach(function(e3) {
      Oe[e3] = r3;
    });
    var o3 = new Array(r3.length), a3 = [], i3 = 0;
    r3.forEach((e3, r4) => {
      Ie.hasOwnProperty(e3) ? o3[r4] = Ie[e3] : (a3.push(e3), Re.hasOwnProperty(e3) || (Re[e3] = []), Re[e3].push(() => {
        o3[r4] = Ie[e3], ++i3 === a3.length && n3(o3);
      }));
    }), 0 === a3.length && n3(o3);
  }, He = (e2) => {
    var r3 = De[e2];
    delete De[e2];
    var t2 = r3.rawConstructor, n3 = r3.rawDestructor, o3 = r3.fields, a3 = o3.map((e3) => e3.getterReturnType).concat(o3.map((e3) => e3.setterArgumentType));
    We([e2], a3, (e3) => {
      var a4 = {};
      return o3.forEach((r4, t3) => {
        var n4 = r4.fieldName, i3 = e3[t3], s2 = r4.getter, u2 = r4.getterContext, l2 = e3[t3 + o3.length], d2 = r4.setter, c2 = r4.setterContext;
        a4[n4] = { read: (e4) => i3.fromWireType(s2(u2, e4)), write: (e4, r5) => {
          var t4 = [];
          d2(c2, e4, l2.toWireType(t4, r5)), Te(t4);
        } };
      }), [{ name: r3.name, fromWireType: (e4) => {
        var r4 = {};
        for (var t3 in a4)
          r4[t3] = a4[t3].read(e4);
        return n3(e4), r4;
      }, toWireType: (e4, r4) => {
        for (var o4 in a4)
          if (!(o4 in r4))
            throw new TypeError(`Missing field: "${o4}"`);
        var i3 = t2();
        for (o4 in a4)
          a4[o4].write(i3, r4[o4]);
        return null !== e4 && e4.push(n3, i3), i3;
      }, argPackAdvance: Ye, readValueFromPointer: Me, destructorFunction: n3 }];
    });
  }, ze = (e2, r3, t2, n3, o3) => {
  }, Ue = () => {
    for (var e2 = new Array(256), r3 = 0; r3 < 256; ++r3)
      e2[r3] = String.fromCharCode(r3);
    je = e2;
  }, $e = (e2) => {
    for (var r3 = "", t2 = e2; g[t2]; )
      r3 += je[g[t2++]];
    return r3;
  }, Ve = (e2) => {
    throw new Le(e2);
  };
  function Ge(e2, r3, t2 = {}) {
    var n3 = r3.name;
    if (e2 || Ve(`type "${n3}" must have a positive integer typeid pointer`), Ie.hasOwnProperty(e2)) {
      if (t2.ignoreDuplicateRegistrations)
        return;
      Ve(`Cannot register type '${n3}' twice`);
    }
    if (Ie[e2] = r3, delete Oe[e2], Re.hasOwnProperty(e2)) {
      var o3 = Re[e2];
      delete Re[e2], o3.forEach((e3) => e3());
    }
  }
  function qe(e2, r3, t2 = {}) {
    if (!("argPackAdvance" in r3))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return Ge(e2, r3, t2);
  }
  var Ye = 8, Xe = (e2, r3, t2, n3) => {
    qe(e2, { name: r3 = $e(r3), fromWireType: function(e3) {
      return !!e3;
    }, toWireType: function(e3, r4) {
      return r4 ? t2 : n3;
    }, argPackAdvance: Ye, readValueFromPointer: function(e3) {
      return this.fromWireType(g[e3]);
    }, destructorFunction: null });
  };
  function Qe() {
    Object.assign(Je.prototype, { get(e2) {
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
  function Je() {
    this.allocated = [void 0], this.freelist = [];
  }
  var Ke = new Je(), Ze = (e2) => {
    e2 >= Ke.reserved && 0 == --Ke.get(e2).refcount && Ke.free(e2);
  }, er = () => {
    for (var e2 = 0, r3 = Ke.reserved; r3 < Ke.allocated.length; ++r3)
      void 0 !== Ke.allocated[r3] && ++e2;
    return e2;
  }, rr = () => {
    Ke.allocated.push({ value: void 0 }, { value: null }, { value: true }, { value: false }), Ke.reserved = Ke.allocated.length, o2.count_emval_handles = er;
  }, tr = { toValue: (e2) => (e2 || Ve("Cannot use deleted val. handle = " + e2), Ke.get(e2).value), toHandle: (e2) => {
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
        return Ke.allocate({ refcount: 1, value: e2 });
    }
  } }, nr = (e2, r3) => {
    qe(e2, { name: r3 = $e(r3), fromWireType: (e3) => {
      var r4 = tr.toValue(e3);
      return Ze(e3), r4;
    }, toWireType: (e3, r4) => tr.toHandle(r4), argPackAdvance: Ye, readValueFromPointer: Me, destructorFunction: null });
  }, or = (e2, r3, t2) => {
    if (void 0 === e2[r3].overloadTable) {
      var n3 = e2[r3];
      e2[r3] = function() {
        return e2[r3].overloadTable.hasOwnProperty(arguments.length) || Ve(`Function '${t2}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e2[r3].overloadTable})!`), e2[r3].overloadTable[arguments.length].apply(this, arguments);
      }, e2[r3].overloadTable = [], e2[r3].overloadTable[n3.argCount] = n3;
    }
  }, ar = (e2, r3, t2) => {
    o2.hasOwnProperty(e2) ? ((void 0 === t2 || void 0 !== o2[e2].overloadTable && void 0 !== o2[e2].overloadTable[t2]) && Ve(`Cannot register public name '${e2}' twice`), or(o2, e2, e2), o2.hasOwnProperty(t2) && Ve(`Cannot register multiple overloads of a function with the same number of arguments (${t2})!`), o2[e2].overloadTable[t2] = r3) : (o2[e2] = r3, void 0 !== t2 && (o2[e2].numArguments = t2));
  }, ir = (e2, r3, t2) => {
    switch (r3) {
      case 1:
        return t2 ? function(e3) {
          return this.fromWireType(v[e3 >> 0]);
        } : function(e3) {
          return this.fromWireType(g[e3 >> 0]);
        };
      case 2:
        return t2 ? function(e3) {
          return this.fromWireType(y[e3 >> 1]);
        } : function(e3) {
          return this.fromWireType(w[e3 >> 1]);
        };
      case 4:
        return t2 ? function(e3) {
          return this.fromWireType(E[e3 >> 2]);
        } : function(e3) {
          return this.fromWireType(_[e3 >> 2]);
        };
      default:
        throw new TypeError(`invalid integer width (${r3}): ${e2}`);
    }
  }, sr = (e2, r3, t2, n3) => {
    function o3() {
    }
    r3 = $e(r3), o3.values = {}, qe(e2, { name: r3, constructor: o3, fromWireType: function(e3) {
      return this.constructor.values[e3];
    }, toWireType: (e3, r4) => r4.value, argPackAdvance: Ye, readValueFromPointer: ir(r3, t2, n3), destructorFunction: null }), ar(r3, o3);
  }, ur = 48, lr = 57, dr = (e2) => {
    if (void 0 === e2)
      return "_unknown";
    var r3 = (e2 = e2.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r3 >= ur && r3 <= lr ? `_${e2}` : e2;
  };
  function cr(e2, r3) {
    return { [e2 = dr(e2)]: function() {
      return r3.apply(this, arguments);
    } }[e2];
  }
  var fr = (e2) => {
    var r3 = Co(e2), t2 = $e(r3);
    return Ao(r3), t2;
  }, mr = (e2, r3) => {
    var t2 = Ie[e2];
    return void 0 === t2 && Ve(r3 + " has unknown type " + fr(e2)), t2;
  }, hr = (e2, r3, t2) => {
    var n3 = mr(e2, "enum");
    r3 = $e(r3);
    var o3 = n3.constructor, a3 = Object.create(n3.constructor.prototype, { value: { value: t2 }, constructor: { value: cr(`${n3.name}_${r3}`, function() {
    }) } });
    o3.values[t2] = a3, o3[r3] = a3;
  }, pr = (e2, r3) => {
    switch (r3) {
      case 4:
        return function(e3) {
          return this.fromWireType(b[e3 >> 2]);
        };
      case 8:
        return function(e3) {
          return this.fromWireType(k[e3 >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${r3}): ${e2}`);
    }
  }, vr = (e2, r3, t2) => {
    qe(e2, { name: r3 = $e(r3), fromWireType: (e3) => e3, toWireType: (e3, r4) => r4, argPackAdvance: Ye, readValueFromPointer: pr(r3, t2), destructorFunction: null });
  };
  function gr(e2, r3, t2, n3, o3, a3) {
    var i3 = r3.length;
    i3 < 2 && Ve("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s2 = null !== r3[1] && null !== t2, u2 = false, l2 = 1; l2 < r3.length; ++l2)
      if (null !== r3[l2] && void 0 === r3[l2].destructorFunction) {
        u2 = true;
        break;
      }
    var d2 = "void" !== r3[0].name, c2 = i3 - 2, f2 = new Array(c2), m2 = [], h2 = [];
    return function() {
      var t3;
      arguments.length !== c2 && Ve(`function ${e2} called with ${arguments.length} arguments, expected ${c2}`), h2.length = 0, m2.length = s2 ? 2 : 1, m2[0] = o3, s2 && (t3 = r3[1].toWireType(h2, this), m2[1] = t3);
      for (var a4 = 0; a4 < c2; ++a4)
        f2[a4] = r3[a4 + 2].toWireType(h2, arguments[a4]), m2.push(f2[a4]);
      function i4(e3) {
        if (u2)
          Te(h2);
        else
          for (var n4 = s2 ? 1 : 2; n4 < r3.length; n4++) {
            var o4 = 1 === n4 ? t3 : f2[n4 - 2];
            null !== r3[n4].destructorFunction && r3[n4].destructorFunction(o4);
          }
        if (d2)
          return r3[0].fromWireType(e3);
      }
      return i4(n3.apply(null, m2));
    };
  }
  var yr, wr, Er = (e2, r3) => {
    for (var t2 = [], n3 = 0; n3 < e2; n3++)
      t2.push(_[r3 + 4 * n3 >> 2]);
    return t2;
  }, _r = (e2, r3, t2) => {
    o2.hasOwnProperty(e2) || Ne("Replacing nonexistant public symbol"), void 0 !== o2[e2].overloadTable && void 0 !== t2 ? o2[e2].overloadTable[t2] = r3 : (o2[e2] = r3, o2[e2].argCount = t2);
  }, br = (e2, r3, t2) => {
    var n3 = o2["dynCall_" + e2];
    return t2 && t2.length ? n3.apply(null, [r3].concat(t2)) : n3.call(null, r3);
  }, kr = [], xr = (e2) => {
    var r3 = kr[e2];
    return r3 || (e2 >= kr.length && (kr.length = e2 + 1), kr[e2] = r3 = yr.get(e2)), r3;
  }, Fr = (e2, r3, t2) => e2.includes("j") ? br(e2, r3, t2) : xr(r3).apply(null, t2), Sr = (e2, r3) => {
    var t2 = [];
    return function() {
      return t2.length = 0, Object.assign(t2, arguments), Fr(e2, r3, t2);
    };
  }, Ar = (e2, r3) => {
    function t2() {
      return e2.includes("j") ? Sr(e2, r3) : xr(r3);
    }
    e2 = $e(e2);
    var n3 = t2();
    return "function" != typeof n3 && Ve(`unknown function pointer with signature ${e2}: ${r3}`), n3;
  }, Pr = (e2, r3) => {
    var t2 = cr(r3, function(e3) {
      this.name = r3, this.message = e3;
      var t3 = new Error(e3).stack;
      void 0 !== t3 && (this.stack = this.toString() + "\n" + t3.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function() {
      return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
    }, t2;
  }, Cr = (e2, r3) => {
    var t2 = [], n3 = {};
    function o3(e3) {
      n3[e3] || Ie[e3] || (Oe[e3] ? Oe[e3].forEach(o3) : (t2.push(e3), n3[e3] = true));
    }
    throw r3.forEach(o3), new wr(`${e2}: ` + t2.map(fr).join([", "]));
  }, Dr = (e2) => {
    const r3 = (e2 = e2.trim()).indexOf("(");
    return -1 !== r3 ? (F(")" == e2[e2.length - 1], "Parentheses for argument names should match."), e2.substr(0, r3)) : e2;
  }, Tr = (e2, r3, t2, n3, o3, a3, i3) => {
    var s2 = Er(r3, t2);
    e2 = $e(e2), e2 = Dr(e2), o3 = Ar(n3, o3), ar(e2, function() {
      Cr(`Cannot call ${e2} due to unbound types`, s2);
    }, r3 - 1), We([], s2, function(t3) {
      var n4 = [t3[0], null].concat(t3.slice(1));
      return _r(e2, gr(e2, n4, null, o3, a3), r3 - 1), [];
    });
  }, Mr = (e2, r3, t2) => {
    switch (r3) {
      case 1:
        return t2 ? (e3) => v[e3 >> 0] : (e3) => g[e3 >> 0];
      case 2:
        return t2 ? (e3) => y[e3 >> 1] : (e3) => w[e3 >> 1];
      case 4:
        return t2 ? (e3) => E[e3 >> 2] : (e3) => _[e3 >> 2];
      default:
        throw new TypeError(`invalid integer width (${r3}): ${e2}`);
    }
  }, Br = (e2, r3, t2, n3, o3) => {
    r3 = $e(r3);
    var a3 = (e3) => e3;
    if (0 === n3) {
      var i3 = 32 - 8 * t2;
      a3 = (e3) => e3 << i3 >>> i3;
    }
    var s2 = r3.includes("unsigned"), u2 = (e3, r4) => {
    };
    qe(e2, { name: r3, fromWireType: a3, toWireType: s2 ? function(e3, r4) {
      return u2(r4, this.name), r4 >>> 0;
    } : function(e3, r4) {
      return u2(r4, this.name), r4;
    }, argPackAdvance: Ye, readValueFromPointer: Mr(r3, t2, 0 !== n3), destructorFunction: null });
  }, jr = (e2, r3, t2) => {
    var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r3];
    function o3(e3) {
      var r4 = _[e3 >> 2], t3 = _[e3 + 4 >> 2];
      return new n3(v.buffer, t3, r4);
    }
    qe(e2, { name: t2 = $e(t2), fromWireType: o3, argPackAdvance: Ye, readValueFromPointer: o3 }, { ignoreDuplicateRegistrations: true });
  };
  function Lr(e2) {
    return this.fromWireType(_[e2 >> 2]);
  }
  var Rr = (e2, r3, t2) => fe(e2, g, r3, t2), Ir = (e2, r3) => {
    var t2 = "std::string" === (r3 = $e(r3));
    qe(e2, { name: r3, fromWireType(e3) {
      var r4, n3 = _[e3 >> 2], o3 = e3 + 4;
      if (t2)
        for (var a3 = o3, i3 = 0; i3 <= n3; ++i3) {
          var s2 = o3 + i3;
          if (i3 == n3 || 0 == g[s2]) {
            var u2 = re(a3, s2 - a3);
            void 0 === r4 ? r4 = u2 : (r4 += String.fromCharCode(0), r4 += u2), a3 = s2 + 1;
          }
        }
      else {
        var l2 = new Array(n3);
        for (i3 = 0; i3 < n3; ++i3)
          l2[i3] = String.fromCharCode(g[o3 + i3]);
        r4 = l2.join("");
      }
      return Ao(e3), r4;
    }, toWireType(e3, r4) {
      var n3;
      r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
      var o3 = "string" == typeof r4;
      o3 || r4 instanceof Uint8Array || r4 instanceof Uint8ClampedArray || r4 instanceof Int8Array || Ve("Cannot pass non-string to std::string"), n3 = t2 && o3 ? ce(r4) : r4.length;
      var a3 = Po(4 + n3 + 1), i3 = a3 + 4;
      if (_[a3 >> 2] = n3, t2 && o3)
        Rr(r4, i3, n3 + 1);
      else if (o3)
        for (var s2 = 0; s2 < n3; ++s2) {
          var u2 = r4.charCodeAt(s2);
          u2 > 255 && (Ao(i3), Ve("String has UTF-16 code units that do not fit in 8 bits")), g[i3 + s2] = u2;
        }
      else
        for (s2 = 0; s2 < n3; ++s2)
          g[i3 + s2] = r4[s2];
      return null !== e3 && e3.push(Ao, a3), a3;
    }, argPackAdvance: Ye, readValueFromPointer: Lr, destructorFunction(e3) {
      Ao(e3);
    } });
  }, Or = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Nr = (e2, r3) => {
    for (var t2 = e2, n3 = t2 >> 1, o3 = n3 + r3 / 2; !(n3 >= o3) && w[n3]; )
      ++n3;
    if ((t2 = n3 << 1) - e2 > 32 && Or)
      return Or.decode(g.subarray(e2, t2));
    for (var a3 = "", i3 = 0; !(i3 >= r3 / 2); ++i3) {
      var s2 = y[e2 + 2 * i3 >> 1];
      if (0 == s2)
        break;
      a3 += String.fromCharCode(s2);
    }
    return a3;
  }, Wr = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 2)
      return 0;
    for (var n3 = r3, o3 = (t2 -= 2) < 2 * e2.length ? t2 / 2 : e2.length, a3 = 0; a3 < o3; ++a3) {
      var i3 = e2.charCodeAt(a3);
      y[r3 >> 1] = i3, r3 += 2;
    }
    return y[r3 >> 1] = 0, r3 - n3;
  }, Hr = (e2) => 2 * e2.length, zr = (e2, r3) => {
    for (var t2 = 0, n3 = ""; !(t2 >= r3 / 4); ) {
      var o3 = E[e2 + 4 * t2 >> 2];
      if (0 == o3)
        break;
      if (++t2, o3 >= 65536) {
        var a3 = o3 - 65536;
        n3 += String.fromCharCode(55296 | a3 >> 10, 56320 | 1023 & a3);
      } else
        n3 += String.fromCharCode(o3);
    }
    return n3;
  }, Ur = (e2, r3, t2) => {
    if (void 0 === t2 && (t2 = 2147483647), t2 < 4)
      return 0;
    for (var n3 = r3, o3 = n3 + t2 - 4, a3 = 0; a3 < e2.length; ++a3) {
      var i3 = e2.charCodeAt(a3);
      if (i3 >= 55296 && i3 <= 57343 && (i3 = 65536 + ((1023 & i3) << 10) | 1023 & e2.charCodeAt(++a3)), E[r3 >> 2] = i3, (r3 += 4) + 4 > o3)
        break;
    }
    return E[r3 >> 2] = 0, r3 - n3;
  }, $r = (e2) => {
    for (var r3 = 0, t2 = 0; t2 < e2.length; ++t2) {
      var n3 = e2.charCodeAt(t2);
      n3 >= 55296 && n3 <= 57343 && ++t2, r3 += 4;
    }
    return r3;
  }, Vr = (e2, r3, t2) => {
    var n3, o3, a3, i3, s2;
    t2 = $e(t2), 2 === r3 ? (n3 = Nr, o3 = Wr, i3 = Hr, a3 = () => w, s2 = 1) : 4 === r3 && (n3 = zr, o3 = Ur, i3 = $r, a3 = () => _, s2 = 2), qe(e2, { name: t2, fromWireType: (e3) => {
      for (var t3, o4 = _[e3 >> 2], i4 = a3(), u2 = e3 + 4, l2 = 0; l2 <= o4; ++l2) {
        var d2 = e3 + 4 + l2 * r3;
        if (l2 == o4 || 0 == i4[d2 >> s2]) {
          var c2 = n3(u2, d2 - u2);
          void 0 === t3 ? t3 = c2 : (t3 += String.fromCharCode(0), t3 += c2), u2 = d2 + r3;
        }
      }
      return Ao(e3), t3;
    }, toWireType: (e3, n4) => {
      "string" != typeof n4 && Ve(`Cannot pass non-string to C++ string type ${t2}`);
      var a4 = i3(n4), u2 = Po(4 + a4 + r3);
      return _[u2 >> 2] = a4 >> s2, o3(n4, u2 + 4, a4 + r3), null !== e3 && e3.push(Ao, u2), u2;
    }, argPackAdvance: Ye, readValueFromPointer: Me, destructorFunction(e3) {
      Ao(e3);
    } });
  }, Gr = (e2, r3, t2, n3, o3, a3) => {
    De[e2] = { name: $e(r3), rawConstructor: Ar(t2, n3), rawDestructor: Ar(o3, a3), fields: [] };
  }, qr = (e2, r3, t2, n3, o3, a3, i3, s2, u2, l2) => {
    De[e2].fields.push({ fieldName: $e(r3), getterReturnType: t2, getter: Ar(n3, o3), getterContext: a3, setterArgumentType: i3, setter: Ar(s2, u2), setterContext: l2 });
  }, Yr = (e2, r3) => {
    qe(e2, { isVoid: true, name: r3 = $e(r3), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (e3, r4) => {
    } });
  }, Xr = (e2) => {
    do {
      var r3 = _[e2 >> 2], t2 = _[(e2 += 4) >> 2], n3 = _[(e2 += 4) >> 2];
      e2 += 4;
      var o3 = re(r3);
      Fe.createPath("/", ie.dirname(o3), true, true), Fe.createDataFile(o3, null, v.subarray(n3, n3 + t2), true, true, true);
    } while (_[e2 >> 2]);
  }, Qr = (e2) => {
    e2 > 4 && (Ke.get(e2).refcount += 1);
  }, Jr = {}, Kr = (e2) => {
    var r3 = Jr[e2];
    return void 0 === r3 ? $e(e2) : r3;
  }, Zr = (e2) => tr.toHandle(Kr(e2)), et = () => tr.toHandle({}), rt = (e2, r3, t2) => {
    e2 = tr.toValue(e2), r3 = tr.toValue(r3), t2 = tr.toValue(t2), e2[r3] = t2;
  }, tt = (e2, r3) => {
    var t2 = (e2 = mr(e2, "_emval_take_value")).readValueFromPointer(r3);
    return tr.toHandle(t2);
  }, nt = () => {
    H("");
  }, ot = (e2, r3, t2) => g.copyWithin(e2, r3, r3 + t2), at = () => 2147483648, it = (e2) => {
    var r3 = (e2 - m.buffer.byteLength + 65535) / 65536;
    try {
      return m.grow(r3), S(), 1;
    } catch (t2) {
    }
  }, st = (e2) => {
    var r3 = g.length;
    e2 >>>= 0;
    var t2 = at();
    if (e2 > t2)
      return false;
    for (var n3 = (e3, r4) => e3 + (r4 - e3 % r4) % r4, o3 = 1; o3 <= 4; o3 *= 2) {
      var a3 = r3 * (1 + 0.2 / o3);
      a3 = Math.min(a3, e2 + 100663296);
      var i3 = Math.min(t2, n3(Math.max(e2, a3), 65536));
      if (it(i3))
        return true;
    }
    return false;
  }, ut = (e2) => !!(e2.dibvbi = e2.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")), lt = (e2) => !!(e2.mdibvbi = e2.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")), dt = (e2) => !!(e2.multiDrawWebgl = e2.getExtension("WEBGL_multi_draw")), ct = { counter: 1, buffers: [], programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function(e2) {
    ct.lastError || (ct.lastError = e2);
  }, getNewId: (e2) => {
    for (var r3 = ct.counter++, t2 = e2.length; t2 < r3; t2++)
      e2[t2] = null;
    return r3;
  }, getSource: (e2, r3, t2, n3) => {
    for (var o3 = "", a3 = 0; a3 < r3; ++a3) {
      var i3 = n3 ? E[n3 + 4 * a3 >> 2] : -1;
      o3 += re(E[t2 + 4 * a3 >> 2], i3 < 0 ? void 0 : i3);
    }
    return o3;
  }, createContext: (e2, r3) => {
    if (o2.preinitializedWebGLContext) {
      var t2 = o2.preinitializedWebGLContext;
      r3.majorVersion = Number(t2.getParameter(t2.VERSION).match(/^WebGL (\d+).\d+/)[1]);
    } else {
      if (!e2.getContextSafariWebGL2Fixed) {
        let n3 = function(r4, t3) {
          var n4 = e2.getContextSafariWebGL2Fixed(r4, t3);
          return "webgl" == r4 == n4 instanceof WebGLRenderingContext ? n4 : null;
        };
        e2.getContextSafariWebGL2Fixed = e2.getContext, e2.getContext = n3;
      }
      t2 = e2.getContext("webgl2", r3);
    }
    return t2 ? ct.registerContext(t2, r3) : 0;
  }, registerContext: (e2, r3) => {
    var t2 = ct.getNewId(ct.contexts), n3 = { handle: t2, attributes: r3, version: r3.majorVersion, GLctx: e2 };
    return e2.canvas && (e2.canvas.GLctxObject = n3), ct.contexts[t2] = n3, (void 0 === r3.enableExtensionsByDefault || r3.enableExtensionsByDefault) && ct.initExtensions(n3), t2;
  }, makeContextCurrent: (e2) => (ct.currentContext = ct.contexts[e2], o2.ctx = qn = ct.currentContext && ct.currentContext.GLctx, !(e2 && !qn)), getContext: (e2) => ct.contexts[e2], deleteContext: (e2) => {
    ct.currentContext === ct.contexts[e2] && (ct.currentContext = null), "object" == typeof ft && ft.removeAllHandlersOnTarget(ct.contexts[e2].GLctx.canvas), ct.contexts[e2] && ct.contexts[e2].GLctx.canvas && (ct.contexts[e2].GLctx.canvas.GLctxObject = void 0), ct.contexts[e2] = null;
  }, initExtensions: (e2) => {
    if (e2 || (e2 = ct.currentContext), !e2.initExtensionsDone) {
      e2.initExtensionsDone = true;
      var r3 = e2.GLctx;
      ut(r3), lt(r3), e2.version >= 2 && (r3.disjointTimerQueryExt = r3.getExtension("EXT_disjoint_timer_query_webgl2")), (e2.version < 2 || !r3.disjointTimerQueryExt) && (r3.disjointTimerQueryExt = r3.getExtension("EXT_disjoint_timer_query")), dt(r3), (r3.getSupportedExtensions() || []).forEach((e3) => {
        e3.includes("lose_context") || e3.includes("debug") || r3.getExtension(e3);
      });
    }
  } }, ft = { inEventHandler: 0, removeAllEventListeners() {
    for (var e2 = ft.eventHandlers.length - 1; e2 >= 0; --e2)
      ft._removeHandler(e2);
    ft.eventHandlers = [], ft.deferredCalls = [];
  }, registerRemoveEventListeners() {
    ft.removeEventListenersRegistered || (ft.removeEventListenersRegistered = true);
  }, deferredCalls: [], deferCall(e2, r3, t2) {
    function n3(e3, r4) {
      if (e3.length != r4.length)
        return false;
      for (var t3 in e3)
        if (e3[t3] != r4[t3])
          return false;
      return true;
    }
    for (var o3 in ft.deferredCalls) {
      var a3 = ft.deferredCalls[o3];
      if (a3.targetFunction == e2 && n3(a3.argsList, t2))
        return;
    }
    ft.deferredCalls.push({ targetFunction: e2, precedence: r3, argsList: t2 }), ft.deferredCalls.sort((e3, r4) => e3.precedence < r4.precedence);
  }, removeDeferredCalls(e2) {
    for (var r3 = 0; r3 < ft.deferredCalls.length; ++r3)
      ft.deferredCalls[r3].targetFunction == e2 && (ft.deferredCalls.splice(r3, 1), --r3);
  }, canPerformEventHandlerRequests: () => navigator.userActivation ? navigator.userActivation.isActive : ft.inEventHandler && ft.currentEventHandler.allowsDeferredCalls, runDeferredCalls() {
    if (ft.canPerformEventHandlerRequests())
      for (var e2 = 0; e2 < ft.deferredCalls.length; ++e2) {
        var r3 = ft.deferredCalls[e2];
        ft.deferredCalls.splice(e2, 1), --e2, r3.targetFunction.apply(null, r3.argsList);
      }
  }, eventHandlers: [], removeAllHandlersOnTarget: (e2, r3) => {
    for (var t2 = 0; t2 < ft.eventHandlers.length; ++t2)
      ft.eventHandlers[t2].target != e2 || r3 && r3 != ft.eventHandlers[t2].eventTypeString || ft._removeHandler(t2--);
  }, _removeHandler(e2) {
    var r3 = ft.eventHandlers[e2];
    r3.target.removeEventListener(r3.eventTypeString, r3.eventListenerFunc, r3.useCapture), ft.eventHandlers.splice(e2, 1);
  }, registerOrRemoveHandler(e2) {
    if (!e2.target)
      return -4;
    var r3 = function(r4) {
      ++ft.inEventHandler, ft.currentEventHandler = e2, ft.runDeferredCalls(), e2.handlerFunc(r4), ft.runDeferredCalls(), --ft.inEventHandler;
    };
    if (e2.callbackfunc)
      e2.eventListenerFunc = r3, e2.target.addEventListener(e2.eventTypeString, r3, e2.useCapture), ft.eventHandlers.push(e2), ft.registerRemoveEventListeners();
    else
      for (var t2 = 0; t2 < ft.eventHandlers.length; ++t2)
        ft.eventHandlers[t2].target == e2.target && ft.eventHandlers[t2].eventTypeString == e2.eventTypeString && ft._removeHandler(t2--);
    return 0;
  }, getNodeNameForTarget: (e2) => e2 ? e2 == window ? "#window" : e2 == screen ? "#screen" : e2 && e2.nodeName ? e2.nodeName : "" : "", fullscreenEnabled: () => document.fullscreenEnabled || document.webkitFullscreenEnabled }, mt = ["default", "low-power", "high-performance"], ht = (e2) => e2 > 2 ? re(e2) : e2, pt = [0, document, window], vt = (e2) => (e2 = ht(e2), pt[e2] || document.querySelector(e2)), gt = (e2) => vt(e2), yt = (e2, r3) => {
    var t2 = r3 >> 2, n3 = E[t2 + 6], o3 = { alpha: !!E[t2 + 0], depth: !!E[t2 + 1], stencil: !!E[t2 + 2], antialias: !!E[t2 + 3], premultipliedAlpha: !!E[t2 + 4], preserveDrawingBuffer: !!E[t2 + 5], powerPreference: mt[n3], failIfMajorPerformanceCaveat: !!E[t2 + 7], majorVersion: E[t2 + 8], minorVersion: E[t2 + 9], enableExtensionsByDefault: E[t2 + 10], explicitSwapControl: E[t2 + 11], proxyContextToMainThread: E[t2 + 12], renderViaOffscreenBackBuffer: E[t2 + 13] }, a3 = gt(e2);
    return a3 ? o3.explicitSwapControl ? 0 : ct.createContext(a3, o3) : 0;
  }, wt = (e2) => {
    for (var r3 = e2 >> 2, t2 = 0; t2 < 14; ++t2)
      E[r3 + t2] = 0;
    E[r3 + 0] = E[r3 + 1] = E[r3 + 3] = E[r3 + 4] = E[r3 + 8] = E[r3 + 10] = 1;
  }, Et = (e2) => ct.makeContextCurrent(e2) ? 0 : -5, _t = {}, bt = () => u || "./this.program", kt = () => {
    if (!kt.strings) {
      var e2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: bt() };
      for (var r3 in _t)
        void 0 === _t[r3] ? delete e2[r3] : e2[r3] = _t[r3];
      var t2 = [];
      for (var r3 in e2)
        t2.push(`${r3}=${e2[r3]}`);
      kt.strings = t2;
    }
    return kt.strings;
  }, xt = (e2, r3) => {
    for (var t2 = 0; t2 < e2.length; ++t2)
      v[r3++ >> 0] = e2.charCodeAt(t2);
    v[r3 >> 0] = 0;
  }, Ft = (e2, r3) => {
    var t2 = 0;
    return kt().forEach((n3, o3) => {
      var a3 = r3 + t2;
      _[e2 + 4 * o3 >> 2] = a3, xt(n3, a3), t2 += n3.length + 1;
    }), 0;
  }, St = (e2, r3) => {
    var t2 = kt();
    _[e2 >> 2] = t2.length;
    var n3 = 0;
    return t2.forEach((e3) => n3 += e3.length + 1), _[r3 >> 2] = n3, 0;
  };
  function At(e2) {
    try {
      var r3 = Se.getStreamFromFD(e2);
      return Fe.close(r3), 0;
    } catch (t2) {
      if (void 0 === Fe || "ErrnoError" !== t2.name)
        throw t2;
      return t2.errno;
    }
  }
  var Pt = (e2, r3, t2, n3) => {
    for (var o3 = 0, a3 = 0; a3 < t2; a3++) {
      var i3 = _[r3 >> 2], s2 = _[r3 + 4 >> 2];
      r3 += 8;
      var u2 = Fe.read(e2, v, i3, s2, n3);
      if (u2 < 0)
        return -1;
      if (o3 += u2, u2 < s2)
        break;
      void 0 !== n3 && (n3 += u2);
    }
    return o3;
  };
  function Ct(e2, r3, t2, n3) {
    try {
      var o3 = Se.getStreamFromFD(e2), a3 = Pt(o3, r3, t2);
      return _[n3 >> 2] = a3, 0;
    } catch (i3) {
      if (void 0 === Fe || "ErrnoError" !== i3.name)
        throw i3;
      return i3.errno;
    }
  }
  var Dt = (e2, r3) => r3 + 2097152 >>> 0 < 4194305 - !!e2 ? (e2 >>> 0) + 4294967296 * r3 : NaN;
  function Tt(e2, r3, t2, n3, o3) {
    var a3 = Dt(r3, t2);
    try {
      if (isNaN(a3))
        return 61;
      var i3 = Se.getStreamFromFD(e2);
      return Fe.llseek(i3, a3, n3), $ = [i3.position >>> 0, (U = i3.position, +Math.abs(U) >= 1 ? U > 0 ? +Math.floor(U / 4294967296) >>> 0 : ~~+Math.ceil((U - +(~~U >>> 0)) / 4294967296) >>> 0 : 0)], E[o3 >> 2] = $[0], E[o3 + 4 >> 2] = $[1], i3.getdents && 0 === a3 && 0 === n3 && (i3.getdents = null), 0;
    } catch (s2) {
      if (void 0 === Fe || "ErrnoError" !== s2.name)
        throw s2;
      return s2.errno;
    }
  }
  var Mt = (e2, r3, t2, n3) => {
    for (var o3 = 0, a3 = 0; a3 < t2; a3++) {
      var i3 = _[r3 >> 2], s2 = _[r3 + 4 >> 2];
      r3 += 8;
      var u2 = Fe.write(e2, v, i3, s2, n3);
      if (u2 < 0)
        return -1;
      o3 += u2, void 0 !== n3 && (n3 += u2);
    }
    return o3;
  };
  function Bt(e2, r3, t2, n3) {
    try {
      var o3 = Se.getStreamFromFD(e2), a3 = Mt(o3, r3, t2);
      return _[n3 >> 2] = a3, 0;
    } catch (i3) {
      if (void 0 === Fe || "ErrnoError" !== i3.name)
        throw i3;
      return i3.errno;
    }
  }
  function jt(e2) {
    qn.activeTexture(e2);
  }
  var Lt = (e2, r3) => {
    qn.attachShader(ct.programs[e2], ct.shaders[r3]);
  }, Rt = (e2, r3, t2) => {
    qn.bindAttribLocation(ct.programs[e2], r3, re(t2));
  }, It = (e2, r3) => {
    35051 == e2 ? qn.currentPixelPackBufferBinding = r3 : 35052 == e2 && (qn.currentPixelUnpackBufferBinding = r3), qn.bindBuffer(e2, ct.buffers[r3]);
  }, Ot = (e2, r3, t2) => {
    qn.bindBufferBase(e2, r3, ct.buffers[t2]);
  }, Nt = (e2, r3, t2, n3, o3) => {
    qn.bindBufferRange(e2, r3, ct.buffers[t2], n3, o3);
  }, Wt = (e2, r3) => {
    qn.bindFramebuffer(e2, ct.framebuffers[r3]);
  }, Ht = (e2, r3) => {
    qn.bindTexture(e2, ct.textures[r3]);
  }, zt = (e2) => {
    qn.bindVertexArray(ct.vaos[e2]);
  }, Ut = (e2, r3, t2, n3) => {
    t2 && r3 ? qn.bufferData(e2, g, n3, t2, r3) : qn.bufferData(e2, r3, n3);
  }, $t = (e2, r3, t2, n3) => {
    t2 && qn.bufferSubData(e2, r3, g, n3, t2);
  };
  function Vt(e2) {
    qn.clear(e2);
  }
  function Gt(e2, r3, t2, n3) {
    qn.clearBufferfi(e2, r3, t2, n3);
  }
  var qt = (e2, r3, t2) => {
    qn.clearBufferfv(e2, r3, b, t2 >> 2);
  }, Yt = (e2, r3, t2) => {
    qn.clearBufferiv(e2, r3, E, t2 >> 2);
  }, Xt = (e2, r3, t2) => {
    qn.clearBufferuiv(e2, r3, _, t2 >> 2);
  };
  function Qt(e2, r3, t2, n3) {
    qn.clearColor(e2, r3, t2, n3);
  }
  function Jt(e2) {
    qn.clearDepth(e2);
  }
  function Kt(e2) {
    qn.clearStencil(e2);
  }
  var Zt = (e2, r3, t2, n3) => {
    qn.colorMask(!!e2, !!r3, !!t2, !!n3);
  }, en = (e2) => {
    qn.compileShader(ct.shaders[e2]);
  }, rn = () => {
    var e2 = ct.getNewId(ct.programs), r3 = qn.createProgram();
    return r3.name = e2, r3.maxUniformLength = r3.maxAttributeLength = r3.maxUniformBlockNameLength = 0, r3.uniformIdCounter = 1, ct.programs[e2] = r3, e2;
  }, tn = (e2) => {
    var r3 = ct.getNewId(ct.shaders);
    return ct.shaders[r3] = qn.createShader(e2), r3;
  }, nn = (e2, r3) => {
    for (var t2 = 0; t2 < e2; t2++) {
      var n3 = E[r3 + 4 * t2 >> 2], o3 = ct.buffers[n3];
      o3 && (qn.deleteBuffer(o3), o3.name = 0, ct.buffers[n3] = null, n3 == qn.currentPixelPackBufferBinding && (qn.currentPixelPackBufferBinding = 0), n3 == qn.currentPixelUnpackBufferBinding && (qn.currentPixelUnpackBufferBinding = 0));
    }
  }, on = (e2, r3) => {
    for (var t2 = 0; t2 < e2; ++t2) {
      var n3 = E[r3 + 4 * t2 >> 2], o3 = ct.framebuffers[n3];
      o3 && (qn.deleteFramebuffer(o3), o3.name = 0, ct.framebuffers[n3] = null);
    }
  }, an = (e2) => {
    if (e2) {
      var r3 = ct.programs[e2];
      r3 ? (qn.deleteProgram(r3), r3.name = 0, ct.programs[e2] = null) : ct.recordError(1281);
    }
  }, sn = (e2, r3) => {
    for (var t2 = 0; t2 < e2; t2++) {
      var n3 = E[r3 + 4 * t2 >> 2], o3 = ct.queries[n3];
      o3 && (qn.deleteQuery(o3), ct.queries[n3] = null);
    }
  }, un = (e2) => {
    if (e2) {
      var r3 = ct.shaders[e2];
      r3 ? (qn.deleteShader(r3), ct.shaders[e2] = null) : ct.recordError(1281);
    }
  }, ln = (e2, r3) => {
    for (var t2 = 0; t2 < e2; t2++) {
      var n3 = E[r3 + 4 * t2 >> 2], o3 = ct.textures[n3];
      o3 && (qn.deleteTexture(o3), o3.name = 0, ct.textures[n3] = null);
    }
  }, dn = (e2, r3) => {
    for (var t2 = 0; t2 < e2; t2++) {
      var n3 = E[r3 + 4 * t2 >> 2];
      qn.deleteVertexArray(ct.vaos[n3]), ct.vaos[n3] = null;
    }
  }, cn = (e2, r3, t2) => {
    qn.drawArrays(e2, r3, t2);
  }, fn = [], mn = (e2, r3) => {
    for (var t2 = fn[e2], n3 = 0; n3 < e2; n3++)
      t2[n3] = E[r3 + 4 * n3 >> 2];
    qn.drawBuffers(t2);
  }, hn = (e2, r3, t2, n3) => {
    qn.drawElements(e2, r3, t2, n3);
  }, pn = (e2, r3, t2, n3, o3) => {
    qn.drawElementsInstanced(e2, r3, t2, n3, o3);
  }, vn = (e2) => {
    qn.enableVertexAttribArray(e2);
  }, gn = (e2, r3, t2, n3, o3) => {
    qn.framebufferTexture2D(e2, r3, t2, ct.textures[n3], o3);
  }, yn = (e2, r3, t2, n3) => {
    for (var o3 = 0; o3 < e2; o3++) {
      var a3 = qn[t2](), i3 = a3 && ct.getNewId(n3);
      a3 ? (a3.name = i3, n3[i3] = a3) : ct.recordError(1282), E[r3 + 4 * o3 >> 2] = i3;
    }
  }, wn = (e2, r3) => {
    yn(e2, r3, "createBuffer", ct.buffers);
  }, En = (e2, r3) => {
    yn(e2, r3, "createFramebuffer", ct.framebuffers);
  }, _n = (e2, r3) => {
    yn(e2, r3, "createQuery", ct.queries);
  }, bn = (e2, r3) => {
    yn(e2, r3, "createTexture", ct.textures);
  };
  function kn(e2, r3) {
    yn(e2, r3, "createVertexArray", ct.vaos);
  }
  function xn(e2) {
    qn.generateMipmap(e2);
  }
  var Fn = (e2, r3) => {
    _[e2 >> 2] = r3;
    var t2 = _[e2 >> 2];
    _[e2 + 4 >> 2] = (r3 - t2) / 4294967296;
  }, Sn = (e2, r3, t2) => {
    if (r3) {
      var n3 = void 0;
      switch (e2) {
        case 36346:
          n3 = 1;
          break;
        case 36344:
          return void (0 != t2 && 1 != t2 && ct.recordError(1280));
        case 34814:
        case 36345:
          n3 = 0;
          break;
        case 34466:
          var o3 = qn.getParameter(34467);
          n3 = o3 ? o3.length : 0;
          break;
        case 33309:
          if (ct.currentContext.version < 2)
            return void ct.recordError(1282);
          n3 = 2 * (qn.getSupportedExtensions() || []).length;
          break;
        case 33307:
        case 33308:
          if (ct.currentContext.version < 2)
            return void ct.recordError(1280);
          n3 = 33307 == e2 ? 3 : 0;
      }
      if (void 0 === n3) {
        var a3 = qn.getParameter(e2);
        switch (typeof a3) {
          case "number":
            n3 = a3;
            break;
          case "boolean":
            n3 = a3 ? 1 : 0;
            break;
          case "string":
            return void ct.recordError(1280);
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
                  n3 = 0;
                  break;
                default:
                  return void ct.recordError(1280);
              }
            else {
              if (a3 instanceof Float32Array || a3 instanceof Uint32Array || a3 instanceof Int32Array || a3 instanceof Array) {
                for (var i3 = 0; i3 < a3.length; ++i3)
                  switch (t2) {
                    case 0:
                      E[r3 + 4 * i3 >> 2] = a3[i3];
                      break;
                    case 2:
                      b[r3 + 4 * i3 >> 2] = a3[i3];
                      break;
                    case 4:
                      v[r3 + i3 >> 0] = a3[i3] ? 1 : 0;
                  }
                return;
              }
              try {
                n3 = 0 | a3.name;
              } catch (s2) {
                return ct.recordError(1280), void p("GL_INVALID_ENUM in glGet" + t2 + "v: Unknown object returned from WebGL getParameter(" + e2 + ")! (error: " + s2 + ")");
              }
            }
            break;
          default:
            return ct.recordError(1280), void p("GL_INVALID_ENUM in glGet" + t2 + "v: Native code calling glGet" + t2 + "v(" + e2 + ") and it returns " + a3 + " of type " + typeof a3 + "!");
        }
      }
      switch (t2) {
        case 1:
          Fn(r3, n3);
          break;
        case 0:
          E[r3 >> 2] = n3;
          break;
        case 2:
          b[r3 >> 2] = n3;
          break;
        case 4:
          v[r3 >> 0] = n3 ? 1 : 0;
      }
    } else
      ct.recordError(1281);
  }, An = (e2, r3) => {
    Sn(e2, r3, 0);
  }, Pn = (e2, r3, t2) => {
    if (t2) {
      var n3, o3 = ct.queries[e2];
      n3 = ct.currentContext.version < 2 ? qn.disjointTimerQueryExt.getQueryObjectEXT(o3, r3) : qn.getQueryParameter(o3, r3), Fn(t2, "boolean" == typeof n3 ? n3 ? 1 : 0 : n3);
    } else
      ct.recordError(1281);
  }, Cn = (e2, r3, t2) => {
    if (t2) {
      var n3, o3 = ct.queries[e2], a3 = qn.disjointTimerQueryExt.getQueryObjectEXT(o3, r3);
      n3 = "boolean" == typeof a3 ? a3 ? 1 : 0 : a3, E[t2 >> 2] = n3;
    } else
      ct.recordError(1281);
  }, Dn = (e2, r3) => qn.getUniformBlockIndex(ct.programs[e2], re(r3)), Tn = (e2) => parseInt(e2), Mn = (e2) => "]" == e2.slice(-1) && e2.lastIndexOf("["), Bn = (e2) => {
    var r3, t2, n3 = e2.uniformLocsById, o3 = e2.uniformSizeAndIdsByName;
    if (!n3)
      for (e2.uniformLocsById = n3 = {}, e2.uniformArrayNamesById = {}, r3 = 0; r3 < qn.getProgramParameter(e2, 35718); ++r3) {
        var a3 = qn.getActiveUniform(e2, r3), i3 = a3.name, s2 = a3.size, u2 = Mn(i3), l2 = u2 > 0 ? i3.slice(0, u2) : i3, d2 = e2.uniformIdCounter;
        for (e2.uniformIdCounter += s2, o3[l2] = [s2, d2], t2 = 0; t2 < s2; ++t2)
          n3[d2] = t2, e2.uniformArrayNamesById[d2++] = l2;
      }
  }, jn = (e2, r3) => {
    if (r3 = re(r3), e2 = ct.programs[e2]) {
      Bn(e2);
      var t2 = e2.uniformLocsById, n3 = 0, o3 = r3, a3 = Mn(r3);
      a3 > 0 && (n3 = Tn(r3.slice(a3 + 1)) >>> 0, o3 = r3.slice(0, a3));
      var i3 = e2.uniformSizeAndIdsByName[o3];
      if (i3 && n3 < i3[0] && (t2[n3 += i3[1]] = t2[n3] || qn.getUniformLocation(e2, r3)))
        return n3;
    } else
      ct.recordError(1281);
    return -1;
  }, Ln = (e2) => {
    e2 = ct.programs[e2], qn.linkProgram(e2), e2.uniformLocsById = 0, e2.uniformSizeAndIdsByName = {};
  }, Rn = (e2, r3) => {
    3317 == e2 && (ct.unpackAlignment = r3), qn.pixelStorei(e2, r3);
  }, In = (e2, r3) => {
    qn.disjointTimerQueryExt.queryCounterEXT(ct.queries[e2], r3);
  };
  function On(e2) {
    qn.readBuffer(e2);
  }
  var Nn = (e2) => 0 == (e2 -= 5120) ? v : 1 == e2 ? g : 2 == e2 ? y : 4 == e2 ? E : 6 == e2 ? b : 5 == e2 || 28922 == e2 || 28520 == e2 || 30779 == e2 || 30782 == e2 ? _ : w, Wn = (e2) => 31 - Math.clz32(e2.BYTES_PER_ELEMENT), Hn = (e2, r3, t2, n3, o3, a3, i3) => {
    if (qn.currentPixelPackBufferBinding)
      qn.readPixels(e2, r3, t2, n3, o3, a3, i3);
    else {
      var s2 = Nn(a3);
      qn.readPixels(e2, r3, t2, n3, o3, a3, s2, i3 >> Wn(s2));
    }
  }, zn = (e2, r3, t2, n3) => {
    var o3 = ct.getSource(e2, r3, t2, n3);
    qn.shaderSource(ct.shaders[e2], o3);
  }, Un = (e2, r3, t2, n3, o3, a3, i3, s2, u2, l2) => {
    if (qn.currentPixelUnpackBufferBinding)
      qn.texImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, l2);
    else if (l2) {
      var d2 = Nn(u2);
      qn.texImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, d2, l2 >> Wn(d2));
    } else
      qn.texImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, null);
  };
  function $n(e2, r3, t2) {
    qn.texParameteri(e2, r3, t2);
  }
  function Vn(e2, r3, t2, n3, o3) {
    qn.texStorage2D(e2, r3, t2, n3, o3);
  }
  var Gn, qn, Yn = (e2, r3, t2, n3, o3, a3, i3, s2, u2) => {
    if (qn.currentPixelUnpackBufferBinding)
      qn.texSubImage2D(e2, r3, t2, n3, o3, a3, i3, s2, u2);
    else if (u2) {
      var l2 = Nn(s2);
      qn.texSubImage2D(e2, r3, t2, n3, o3, a3, i3, s2, l2, u2 >> Wn(l2));
    } else
      qn.texSubImage2D(e2, r3, t2, n3, o3, a3, i3, s2, null);
  }, Xn = (e2, r3, t2, n3, o3, a3, i3, s2, u2, l2, d2) => {
    if (qn.currentPixelUnpackBufferBinding)
      qn.texSubImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, l2, d2);
    else if (d2) {
      var c2 = Nn(l2);
      qn.texSubImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, l2, c2, d2 >> Wn(c2));
    } else
      qn.texSubImage3D(e2, r3, t2, n3, o3, a3, i3, s2, u2, l2, null);
  }, Qn = (e2) => {
    var r3 = qn.currentProgram;
    if (r3) {
      var t2 = r3.uniformLocsById[e2];
      return "number" == typeof t2 && (r3.uniformLocsById[e2] = t2 = qn.getUniformLocation(r3, r3.uniformArrayNamesById[e2] + (t2 > 0 ? "[" + t2 + "]" : ""))), t2;
    }
    ct.recordError(1282);
  }, Jn = (e2, r3) => {
    qn.uniform1i(Qn(e2), r3);
  }, Kn = (e2, r3, t2) => {
    e2 = ct.programs[e2], qn.uniformBlockBinding(e2, r3, t2);
  }, Zn = (e2) => {
    e2 = ct.programs[e2], qn.useProgram(e2), qn.currentProgram = e2;
  }, eo = (e2, r3, t2, n3, o3) => {
    qn.vertexAttribIPointer(e2, r3, t2, n3, o3);
  }, ro = (e2, r3, t2, n3, o3, a3) => {
    qn.vertexAttribPointer(e2, r3, t2, !!n3, o3, a3);
  }, to = (e2) => e2 % 4 == 0 && (e2 % 100 != 0 || e2 % 400 == 0), no = (e2, r3) => {
    for (var t2 = 0, n3 = 0; n3 <= r3; t2 += e2[n3++])
      ;
    return t2;
  }, oo = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ao = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], io = (e2, r3) => {
    for (var t2 = new Date(e2.getTime()); r3 > 0; ) {
      var n3 = to(t2.getFullYear()), o3 = t2.getMonth(), a3 = (n3 ? oo : ao)[o3];
      if (!(r3 > a3 - t2.getDate()))
        return t2.setDate(t2.getDate() + r3), t2;
      r3 -= a3 - t2.getDate() + 1, t2.setDate(1), o3 < 11 ? t2.setMonth(o3 + 1) : (t2.setMonth(0), t2.setFullYear(t2.getFullYear() + 1));
    }
    return t2;
  }, so = (e2, r3) => {
    v.set(e2, r3);
  }, uo = (e2, r3, t2, n3) => {
    var o3 = _[n3 + 40 >> 2], a3 = { tm_sec: E[n3 >> 2], tm_min: E[n3 + 4 >> 2], tm_hour: E[n3 + 8 >> 2], tm_mday: E[n3 + 12 >> 2], tm_mon: E[n3 + 16 >> 2], tm_year: E[n3 + 20 >> 2], tm_wday: E[n3 + 24 >> 2], tm_yday: E[n3 + 28 >> 2], tm_isdst: E[n3 + 32 >> 2], tm_gmtoff: E[n3 + 36 >> 2], tm_zone: o3 ? re(o3) : "" }, i3 = re(t2), s2 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var u2 in s2)
      i3 = i3.replace(new RegExp(u2, "g"), s2[u2]);
    var l2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], d2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function c2(e3, r4, t3) {
      for (var n4 = "number" == typeof e3 ? e3.toString() : e3 || ""; n4.length < r4; )
        n4 = t3[0] + n4;
      return n4;
    }
    function f2(e3, r4) {
      return c2(e3, r4, "0");
    }
    function m2(e3, r4) {
      function t3(e4) {
        return e4 < 0 ? -1 : e4 > 0 ? 1 : 0;
      }
      var n4;
      return 0 === (n4 = t3(e3.getFullYear() - r4.getFullYear())) && 0 === (n4 = t3(e3.getMonth() - r4.getMonth())) && (n4 = t3(e3.getDate() - r4.getDate())), n4;
    }
    function h2(e3) {
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
      var r4 = io(new Date(e3.tm_year + 1900, 0, 1), e3.tm_yday), t3 = new Date(r4.getFullYear(), 0, 4), n4 = new Date(r4.getFullYear() + 1, 0, 4), o4 = h2(t3), a4 = h2(n4);
      return m2(o4, r4) <= 0 ? m2(a4, r4) <= 0 ? r4.getFullYear() + 1 : r4.getFullYear() : r4.getFullYear() - 1;
    }
    var v2 = { "%a": (e3) => l2[e3.tm_wday].substring(0, 3), "%A": (e3) => l2[e3.tm_wday], "%b": (e3) => d2[e3.tm_mon].substring(0, 3), "%B": (e3) => d2[e3.tm_mon], "%C": (e3) => f2((e3.tm_year + 1900) / 100 | 0, 2), "%d": (e3) => f2(e3.tm_mday, 2), "%e": (e3) => c2(e3.tm_mday, 2, " "), "%g": (e3) => p2(e3).toString().substring(2), "%G": (e3) => p2(e3), "%H": (e3) => f2(e3.tm_hour, 2), "%I": (e3) => {
      var r4 = e3.tm_hour;
      return 0 == r4 ? r4 = 12 : r4 > 12 && (r4 -= 12), f2(r4, 2);
    }, "%j": (e3) => f2(e3.tm_mday + no(to(e3.tm_year + 1900) ? oo : ao, e3.tm_mon - 1), 3), "%m": (e3) => f2(e3.tm_mon + 1, 2), "%M": (e3) => f2(e3.tm_min, 2), "%n": () => "\n", "%p": (e3) => e3.tm_hour >= 0 && e3.tm_hour < 12 ? "AM" : "PM", "%S": (e3) => f2(e3.tm_sec, 2), "%t": () => "	", "%u": (e3) => e3.tm_wday || 7, "%U": (e3) => {
      var r4 = e3.tm_yday + 7 - e3.tm_wday;
      return f2(Math.floor(r4 / 7), 2);
    }, "%V": (e3) => {
      var r4 = Math.floor((e3.tm_yday + 7 - (e3.tm_wday + 6) % 7) / 7);
      if ((e3.tm_wday + 371 - e3.tm_yday - 2) % 7 <= 2 && r4++, r4) {
        if (53 == r4) {
          var t3 = (e3.tm_wday + 371 - e3.tm_yday) % 7;
          4 == t3 || 3 == t3 && to(e3.tm_year) || (r4 = 1);
        }
      } else {
        r4 = 52;
        var n4 = (e3.tm_wday + 7 - e3.tm_yday - 1) % 7;
        (4 == n4 || 5 == n4 && to(e3.tm_year % 400 - 1)) && r4++;
      }
      return f2(r4, 2);
    }, "%w": (e3) => e3.tm_wday, "%W": (e3) => {
      var r4 = e3.tm_yday + 7 - (e3.tm_wday + 6) % 7;
      return f2(Math.floor(r4 / 7), 2);
    }, "%y": (e3) => (e3.tm_year + 1900).toString().substring(2), "%Y": (e3) => e3.tm_year + 1900, "%z": (e3) => {
      var r4 = e3.tm_gmtoff, t3 = r4 >= 0;
      return r4 = (r4 = Math.abs(r4) / 60) / 60 * 100 + r4 % 60, (t3 ? "+" : "-") + String("0000" + r4).slice(-4);
    }, "%Z": (e3) => e3.tm_zone, "%%": () => "%" };
    for (var u2 in i3 = i3.replace(/%%/g, "\0\0"), v2)
      i3.includes(u2) && (i3 = i3.replace(new RegExp(u2, "g"), v2[u2](a3)));
    var g2 = me(i3 = i3.replace(/\0\0/g, "%"), false);
    return g2.length > r3 ? 0 : (so(g2, e2), g2.length - 1);
  }, lo = (e2, r3, t2, n3, o3) => uo(e2, r3, t2, n3), co = (e2, r3) => {
    e2 < 128 ? r3.push(e2) : r3.push(e2 % 128 | 128, e2 >> 7);
  }, fo = (e2) => {
    for (var r3 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t2 = { parameters: [], results: "v" == e2[0] ? [] : [r3[e2[0]]] }, n3 = 1; n3 < e2.length; ++n3)
      t2.parameters.push(r3[e2[n3]]);
    return t2;
  }, mo = (e2, r3) => {
    var t2 = e2.slice(0, 1), n3 = e2.slice(1), o3 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
    r3.push(96), co(n3.length, r3);
    for (var a3 = 0; a3 < n3.length; ++a3)
      r3.push(o3[n3[a3]]);
    "v" == t2 ? r3.push(0) : r3.push(1, o3[t2]);
  }, ho = (e2, r3) => {
    if ("function" == typeof WebAssembly.Function)
      return new WebAssembly.Function(fo(r3), e2);
    var t2 = [1];
    mo(r3, t2);
    var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
    co(t2.length, n3), n3.push.apply(n3, t2), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
    var o3 = new WebAssembly.Module(new Uint8Array(n3));
    return new WebAssembly.Instance(o3, { e: { f: e2 } }).exports.f;
  }, po = (e2, r3) => {
    if (Gn)
      for (var t2 = e2; t2 < e2 + r3; t2++) {
        var n3 = xr(t2);
        n3 && Gn.set(n3, t2);
      }
  }, vo = (e2) => (Gn || (Gn = /* @__PURE__ */ new WeakMap(), po(0, yr.length)), Gn.get(e2) || 0), go = [], yo = () => {
    if (go.length)
      return go.pop();
    try {
      yr.grow(1);
    } catch (p2) {
      if (!(p2 instanceof RangeError))
        throw p2;
      throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
    }
    return yr.length - 1;
  }, wo = (e2, r3) => {
    yr.set(e2, r3), kr[e2] = yr.get(e2);
  }, Eo = (e2, r3) => {
    var t2 = vo(e2);
    if (t2)
      return t2;
    var n3 = yo();
    try {
      wo(n3, e2);
    } catch (p2) {
      if (!(p2 instanceof TypeError))
        throw p2;
      var o3 = ho(e2, r3);
      wo(n3, o3);
    }
    return Gn.set(e2, n3), n3;
  }, _o = function(e2, r3, t2, n3) {
    e2 || (e2 = this), this.parent = e2, this.mount = e2.mount, this.mounted = null, this.id = Fe.nextInode++, this.name = r3, this.mode = t2, this.node_ops = {}, this.stream_ops = {}, this.rdev = n3;
  }, bo = 365, ko = 146;
  Object.defineProperties(_o.prototype, { read: { get: function() {
    return (this.mode & bo) === bo;
  }, set: function(e2) {
    e2 ? this.mode |= bo : this.mode &= ~bo;
  } }, write: { get: function() {
    return (this.mode & ko) === ko;
  }, set: function(e2) {
    e2 ? this.mode |= ko : this.mode &= ~ko;
  } }, isFolder: { get: function() {
    return Fe.isDir(this.mode);
  } }, isDevice: { get: function() {
    return Fe.isChrdev(this.mode);
  } } }), Fe.FSNode = _o, Fe.createPreloadedFile = be, Fe.staticInit(), o2.FS_createPath = Fe.createPath, o2.FS_createDataFile = Fe.createDataFile, o2.FS_createPreloadedFile = Fe.createPreloadedFile, o2.FS_unlink = Fe.unlink, o2.FS_createLazyFile = Fe.createLazyFile, o2.FS_createDevice = Fe.createDevice, Be = o2.InternalError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "InternalError";
    }
  }, Ue(), Le = o2.BindingError = class extends Error {
    constructor(e2) {
      super(e2), this.name = "BindingError";
    }
  }, Qe(), rr(), wr = o2.UnboundTypeError = Pr(Error, "UnboundTypeError");
  for (var xo = 0; xo < 32; ++xo)
    fn.push(new Array(xo));
  var Fo = { X: te, m: oe, z: Ae, $: Pe, aa: Ce, ia: He, Ta: ze, ea: Xe, da: nr, F: sr, k: hr, E: vr, e: Tr, g: Br, f: jr, D: Ir, w: Vr, ja: Gr, o: qr, fa: Yr, ga: Xr, a: Ze, n: Qr, b: Zr, h: et, c: rt, d: tt, A: nt, ca: ot, ba: st, la: yt, oa: wt, ha: Et, Y: Ft, Z: St, B: At, _: Ct, Sa: Tt, C: Bt, La: jt, q: Lt, Ca: Rt, Oa: It, Ma: Ot, Na: Nt, t: Wt, i: Ht, u: zt, Va: Ut, P: $t, S: Vt, Ga: Gt, y: qt, Fa: Yt, Q: Xt, Ja: Qt, Ia: Jt, Ha: Kt, ka: Zt, L: en, Da: rn, N: tn, W: nn, T: on, Ea: an, I: sn, p: un, R: ln, K: dn, Pa: cn, Ka: mn, Qa: hn, Ra: pn, qa: vn, s: gn, Wa: wn, U: En, J: _n, xa: bn, ra: kn, sa: xn, v: An, G: Pn, ma: Cn, Ba: Dn, za: jn, O: Ln, j: Rn, H: In, x: On, r: Hn, M: zn, va: Un, l: $n, wa: Vn, ta: Yn, ua: Xn, ya: Jn, Aa: Kn, V: Zn, na: eo, pa: ro, Ua: lo }, So = J(), Ao = o2._free = (e2) => (Ao = o2._free = So._a)(e2), Po = o2._malloc = (e2) => (Po = o2._malloc = So.$a)(e2), Co = (e2) => (Co = So.ab)(e2);
  o2.__embind_initialize_bindings = () => (o2.__embind_initialize_bindings = So.bb)();
  var Do, To = () => (To = So.cb)(), Mo = (e2) => (Mo = So.db)(e2);
  function Bo() {
    function e2() {
      Do || (Do = true, o2.calledRun = true, x || (T(), r2(o2), o2.onRuntimeInitialized && o2.onRuntimeInitialized(), M()));
    }
    R > 0 || (D(), R > 0 || (o2.setStatus ? (o2.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        o2.setStatus("");
      }, 1), e2();
    }, 1)) : e2()));
  }
  if (o2.dynCall_iij = (e2, r3, t2, n3) => (o2.dynCall_iij = So.eb)(e2, r3, t2, n3), o2.dynCall_jiji = (e2, r3, t2, n3, a3) => (o2.dynCall_jiji = So.fb)(e2, r3, t2, n3, a3), o2.dynCall_viijii = (e2, r3, t2, n3, a3, i3, s2) => (o2.dynCall_viijii = So.gb)(e2, r3, t2, n3, a3, i3, s2), o2.dynCall_iiiiij = (e2, r3, t2, n3, a3, i3, s2) => (o2.dynCall_iiiiij = So.hb)(e2, r3, t2, n3, a3, i3, s2), o2.dynCall_iiiiijj = (e2, r3, t2, n3, a3, i3, s2, u2, l2) => (o2.dynCall_iiiiijj = So.ib)(e2, r3, t2, n3, a3, i3, s2, u2, l2), o2.dynCall_iiiiiijj = (e2, r3, t2, n3, a3, i3, s2, u2, l2, d2) => (o2.dynCall_iiiiiijj = So.jb)(e2, r3, t2, n3, a3, i3, s2, u2, l2, d2), o2.___emscripten_embedded_file_data = 139592, o2.addRunDependency = N, o2.removeRunDependency = W, o2.FS_createPath = Fe.createPath, o2.FS_createLazyFile = Fe.createLazyFile, o2.FS_createDevice = Fe.createDevice, o2.addFunction = Eo, o2.stringToUTF8 = Rr, o2.lengthBytesUTF8 = ce, o2.FS_createPreloadedFile = Fe.createPreloadedFile, o2.FS_createDataFile = Fe.createDataFile, o2.FS_unlink = Fe.unlink, I = function e2() {
    Do || Bo(), Do || (I = e2);
  }, o2.preInit)
    for ("function" == typeof o2.preInit && (o2.preInit = [o2.preInit]); o2.preInit.length > 0; )
      o2.preInit.pop()();
  return Bo(), e.ready;
}, r.exports = n;
const a = o$1(o.exports), i = Object.freeze(Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, { value: "Module" }));
export {
  i as v
};
