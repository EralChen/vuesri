import { bk as o$1, cU as s$1, cI as n$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var i, s = { exports: {} };
i = function() {
  return function(e) {
    var t = {};
    function r(n) {
      if (t[n])
        return t[n].exports;
      var i2 = t[n] = { exports: {}, id: n, loaded: false };
      return e[n].call(i2.exports, i2, i2.exports, r), i2.loaded = true, i2.exports;
    }
    return r.m = e, r.c = t, r.p = "", r(0);
  }([function(e, t, r) {
    Object.defineProperty(t, "__esModule", { value: true }), t.isNotPNG = u2, t.isNotAPNG = h2, t.default = c;
    var n = s2(r(1)), i2 = r(2);
    function s2(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    var a2 = new Error("Not a PNG"), o2 = new Error("Not an animated PNG");
    function u2(e2) {
      return e2 === a2;
    }
    function h2(e2) {
      return e2 === o2;
    }
    var l2 = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    function c(e2) {
      var t2 = new Uint8Array(e2);
      if (Array.prototype.some.call(l2, function(e3, r3) {
        return e3 !== t2[r3];
      }))
        return a2;
      var r2 = false;
      if (f(t2, function(e3) {
        return !(r2 = "acTL" === e3);
      }), !r2)
        return o2;
      var n2 = [], s3 = [], u3 = null, h3 = null, c2 = 0, p2 = new i2.APNG();
      if (f(t2, function(e3, t3, r3, a3) {
        var o3 = new DataView(t3.buffer);
        switch (e3) {
          case "IHDR":
            u3 = t3.subarray(r3 + 8, r3 + 8 + a3), p2.width = o3.getUint32(r3 + 8), p2.height = o3.getUint32(r3 + 12);
            break;
          case "acTL":
            p2.numPlays = o3.getUint32(r3 + 8 + 4);
            break;
          case "fcTL":
            h3 && (p2.frames.push(h3), c2++), (h3 = new i2.Frame()).width = o3.getUint32(r3 + 8 + 4), h3.height = o3.getUint32(r3 + 8 + 8), h3.left = o3.getUint32(r3 + 8 + 12), h3.top = o3.getUint32(r3 + 8 + 16);
            var l3 = o3.getUint16(r3 + 8 + 20), f2 = o3.getUint16(r3 + 8 + 22);
            0 === f2 && (f2 = 100), h3.delay = 1e3 * l3 / f2, h3.delay <= 10 && (h3.delay = 100), p2.playTime += h3.delay, h3.disposeOp = o3.getUint8(r3 + 8 + 24), h3.blendOp = o3.getUint8(r3 + 8 + 25), h3.dataParts = [], 0 === c2 && 2 === h3.disposeOp && (h3.disposeOp = 1);
            break;
          case "fdAT":
            h3 && h3.dataParts.push(t3.subarray(r3 + 8 + 4, r3 + 8 + a3));
            break;
          case "IDAT":
            h3 && h3.dataParts.push(t3.subarray(r3 + 8, r3 + 8 + a3));
            break;
          case "IEND":
            s3.push(d(t3, r3, 12 + a3));
            break;
          default:
            n2.push(d(t3, r3, 12 + a3));
        }
      }), h3 && p2.frames.push(h3), 0 == p2.frames.length)
        return o2;
      var m2 = new Blob(n2), g = new Blob(s3);
      return p2.frames.forEach(function(e3) {
        var t3 = [];
        t3.push(l2), u3.set(_(e3.width), 0), u3.set(_(e3.height), 4), t3.push(v("IHDR", u3)), t3.push(m2), e3.dataParts.forEach(function(e4) {
          return t3.push(v("IDAT", e4));
        }), t3.push(g), e3.imageData = new Blob(t3, { type: "image/png" }), delete e3.dataParts, t3 = null;
      }), p2;
    }
    function f(e2, t2) {
      var r2 = new DataView(e2.buffer), n2 = 8, i3 = void 0, s3 = void 0, a3 = void 0;
      do {
        s3 = r2.getUint32(n2), a3 = t2(i3 = p(e2, n2 + 4, 4), e2, n2, s3), n2 += 12 + s3;
      } while (false !== a3 && "IEND" != i3 && n2 < e2.length);
    }
    function p(e2, t2, r2) {
      var n2 = Array.prototype.slice.call(e2.subarray(t2, t2 + r2));
      return String.fromCharCode.apply(String, n2);
    }
    function m(e2) {
      for (var t2 = new Uint8Array(e2.length), r2 = 0; r2 < e2.length; r2++)
        t2[r2] = e2.charCodeAt(r2);
      return t2;
    }
    function d(e2, t2, r2) {
      var n2 = new Uint8Array(r2);
      return n2.set(e2.subarray(t2, t2 + r2)), n2;
    }
    var v = function(e2, t2) {
      var r2 = e2.length + t2.length, i3 = new Uint8Array(r2 + 8), s3 = new DataView(i3.buffer);
      s3.setUint32(0, t2.length), i3.set(m(e2), 4), i3.set(t2, 8);
      var a3 = (0, n.default)(i3, 4, r2);
      return s3.setUint32(r2 + 4, a3), i3;
    }, _ = function(e2) {
      return new Uint8Array([e2 >>> 24 & 255, e2 >>> 16 & 255, e2 >>> 8 & 255, 255 & e2]);
    };
  }, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: true }), t.default = function(e2) {
      for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = -1, i3 = t2, s3 = t2 + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e2.length - t2); i3 < s3; i3++)
        n2 = n2 >>> 8 ^ r[255 & (n2 ^ e2[i3])];
      return -1 ^ n2;
    };
    for (var r = new Uint32Array(256), n = 0; n < 256; n++) {
      for (var i2 = n, s2 = 0; s2 < 8; s2++)
        i2 = 0 != (1 & i2) ? 3988292384 ^ i2 >>> 1 : i2 >>> 1;
      r[n] = i2;
    }
  }, function(e, t, r) {
    Object.defineProperty(t, "__esModule", { value: true }), t.Frame = t.APNG = void 0;
    var n = /* @__PURE__ */ function() {
      function e2(e3, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
        }
      }
      return function(t2, r2, n2) {
        return r2 && e2(t2.prototype, r2), n2 && e2(t2, n2), t2;
      };
    }(), i2 = s2(r(3));
    function s2(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    function a2(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    t.APNG = function() {
      function e2() {
        a2(this, e2), this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [];
      }
      return n(e2, [{ key: "createImages", value: function() {
        return Promise.all(this.frames.map(function(e3) {
          return e3.createImage();
        }));
      } }, { key: "getPlayer", value: function(e3) {
        var t2 = this, r2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.createImages().then(function() {
          return new i2.default(t2, e3, r2);
        });
      } }]), e2;
    }(), t.Frame = function() {
      function e2() {
        a2(this, e2), this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.imageData = null, this.imageElement = null;
      }
      return n(e2, [{ key: "createImage", value: function() {
        var e3 = this;
        return this.imageElement ? Promise.resolve() : new Promise(function(t2, r2) {
          var n2 = URL.createObjectURL(e3.imageData);
          e3.imageElement = document.createElement("img"), e3.imageElement.onload = function() {
            URL.revokeObjectURL(n2), t2();
          }, e3.imageElement.onerror = function() {
            URL.revokeObjectURL(n2), e3.imageElement = null, r2(new Error("Image creation error"));
          }, e3.imageElement.src = n2;
        });
      } }]), e2;
    }();
  }, function(e, t, r) {
    Object.defineProperty(t, "__esModule", { value: true });
    var n = /* @__PURE__ */ function() {
      function e2(e3, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
        }
      }
      return function(t2, r2, n2) {
        return r2 && e2(t2.prototype, r2), n2 && e2(t2, n2), t2;
      };
    }();
    function i2(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    function s2(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function a2(e2, t2) {
      if (!e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t2 || "object" != typeof t2 && "function" != typeof t2 ? e2 : t2;
    }
    function o2(e2, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
      e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e2, t2) : e2.__proto__ = t2);
    }
    var u2 = function(e2) {
      function t2(e3, r2, n2) {
        s2(this, t2);
        var i3 = a2(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
        return i3.playbackRate = 1, i3._currentFrameNumber = 0, i3._ended = false, i3._paused = true, i3._numPlays = 0, i3._apng = e3, i3.context = r2, i3.stop(), n2 && i3.play(), i3;
      }
      return o2(t2, e2), n(t2, [{ key: "renderNextFrame", value: function() {
        this._currentFrameNumber = (this._currentFrameNumber + 1) % this._apng.frames.length, this._currentFrameNumber === this._apng.frames.length - 1 && (this._numPlays++, 0 !== this._apng.numPlays && this._numPlays >= this._apng.numPlays && (this._ended = true, this._paused = true)), this._prevFrame && 1 == this._prevFrame.disposeOp ? this.context.clearRect(this._prevFrame.left, this._prevFrame.top, this._prevFrame.width, this._prevFrame.height) : this._prevFrame && 2 == this._prevFrame.disposeOp && this.context.putImageData(this._prevFrameData, this._prevFrame.left, this._prevFrame.top);
        var e3 = this.currentFrame;
        this._prevFrame = e3, this._prevFrameData = null, 2 == e3.disposeOp && (this._prevFrameData = this.context.getImageData(e3.left, e3.top, e3.width, e3.height)), 0 == e3.blendOp && this.context.clearRect(e3.left, e3.top, e3.width, e3.height), this.context.drawImage(e3.imageElement, e3.left, e3.top), this.emit("frame", this._currentFrameNumber), this._ended && this.emit("end");
      } }, { key: "play", value: function() {
        var e3 = this;
        this.emit("play"), this._ended && this.stop(), this._paused = false;
        var t3 = performance.now() + this.currentFrame.delay / this.playbackRate, r2 = function r3(n2) {
          if (!e3._ended && !e3._paused) {
            if (n2 >= t3) {
              for (; n2 - t3 >= e3._apng.playTime / e3.playbackRate; )
                t3 += e3._apng.playTime / e3.playbackRate, e3._numPlays++;
              do {
                e3.renderNextFrame(), t3 += e3.currentFrame.delay / e3.playbackRate;
              } while (!e3._ended && n2 > t3);
            }
            requestAnimationFrame(r3);
          }
        };
        requestAnimationFrame(r2);
      } }, { key: "pause", value: function() {
        this._paused || (this.emit("pause"), this._paused = true);
      } }, { key: "stop", value: function() {
        this.emit("stop"), this._numPlays = 0, this._ended = false, this._paused = true, this._currentFrameNumber = -1, this.context.clearRect(0, 0, this._apng.width, this._apng.height), this.renderNextFrame();
      } }, { key: "currentFrameNumber", get: function() {
        return this._currentFrameNumber;
      } }, { key: "currentFrame", get: function() {
        return this._apng.frames[this._currentFrameNumber];
      } }, { key: "paused", get: function() {
        return this._paused;
      } }, { key: "ended", get: function() {
        return this._ended;
      } }]), t2;
    }(i2(r(4)).default);
    t.default = u2;
  }, function(e, t) {
    function r() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function n(e2) {
      return "function" == typeof e2;
    }
    function i2(e2) {
      return "number" == typeof e2;
    }
    function s2(e2) {
      return "object" == typeof e2 && null !== e2;
    }
    function a2(e2) {
      return void 0 === e2;
    }
    e.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e2) {
      if (!i2(e2) || e2 < 0 || isNaN(e2))
        throw TypeError("n must be a positive number");
      return this._maxListeners = e2, this;
    }, r.prototype.emit = function(e2) {
      var t2, r2, i3, o2, u2, h2;
      if (this._events || (this._events = {}), "error" === e2 && (!this._events.error || s2(this._events.error) && !this._events.error.length)) {
        if ((t2 = arguments[1]) instanceof Error)
          throw t2;
        var l2 = new Error('Uncaught, unspecified "error" event. (' + t2 + ")");
        throw l2.context = t2, l2;
      }
      if (a2(r2 = this._events[e2]))
        return false;
      if (n(r2))
        switch (arguments.length) {
          case 1:
            r2.call(this);
            break;
          case 2:
            r2.call(this, arguments[1]);
            break;
          case 3:
            r2.call(this, arguments[1], arguments[2]);
            break;
          default:
            o2 = Array.prototype.slice.call(arguments, 1), r2.apply(this, o2);
        }
      else if (s2(r2))
        for (o2 = Array.prototype.slice.call(arguments, 1), i3 = (h2 = r2.slice()).length, u2 = 0; u2 < i3; u2++)
          h2[u2].apply(this, o2);
      return true;
    }, r.prototype.addListener = function(e2, t2) {
      var i3;
      if (!n(t2))
        throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e2, n(t2.listener) ? t2.listener : t2), this._events[e2] ? s2(this._events[e2]) ? this._events[e2].push(t2) : this._events[e2] = [this._events[e2], t2] : this._events[e2] = t2, s2(this._events[e2]) && !this._events[e2].warned && (i3 = a2(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && i3 > 0 && this._events[e2].length > i3 && (this._events[e2].warned = true, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e2].length), "function" == typeof console.trace && console.trace()), this;
    }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e2, t2) {
      if (!n(t2))
        throw TypeError("listener must be a function");
      var r2 = false;
      function i3() {
        this.removeListener(e2, i3), r2 || (r2 = true, t2.apply(this, arguments));
      }
      return i3.listener = t2, this.on(e2, i3), this;
    }, r.prototype.removeListener = function(e2, t2) {
      var r2, i3, a3, o2;
      if (!n(t2))
        throw TypeError("listener must be a function");
      if (!this._events || !this._events[e2])
        return this;
      if (a3 = (r2 = this._events[e2]).length, i3 = -1, r2 === t2 || n(r2.listener) && r2.listener === t2)
        delete this._events[e2], this._events.removeListener && this.emit("removeListener", e2, t2);
      else if (s2(r2)) {
        for (o2 = a3; o2-- > 0; )
          if (r2[o2] === t2 || r2[o2].listener && r2[o2].listener === t2) {
            i3 = o2;
            break;
          }
        if (i3 < 0)
          return this;
        1 === r2.length ? (r2.length = 0, delete this._events[e2]) : r2.splice(i3, 1), this._events.removeListener && this.emit("removeListener", e2, t2);
      }
      return this;
    }, r.prototype.removeAllListeners = function(e2) {
      var t2, r2;
      if (!this._events)
        return this;
      if (!this._events.removeListener)
        return 0 === arguments.length ? this._events = {} : this._events[e2] && delete this._events[e2], this;
      if (0 === arguments.length) {
        for (t2 in this._events)
          "removeListener" !== t2 && this.removeAllListeners(t2);
        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }
      if (n(r2 = this._events[e2]))
        this.removeListener(e2, r2);
      else if (r2)
        for (; r2.length; )
          this.removeListener(e2, r2[r2.length - 1]);
      return delete this._events[e2], this;
    }, r.prototype.listeners = function(e2) {
      return this._events && this._events[e2] ? n(this._events[e2]) ? [this._events[e2]] : this._events[e2].slice() : [];
    }, r.prototype.listenerCount = function(e2) {
      if (this._events) {
        var t2 = this._events[e2];
        if (n(t2))
          return 1;
        if (t2)
          return t2.length;
      }
      return 0;
    }, r.listenerCount = function(e2, t2) {
      return e2.listenerCount(t2);
    };
  }]);
}, s.exports = i();
const a = o$1(s.exports);
async function o(e, t) {
  const i2 = a(e);
  if (i2 instanceof Error)
    throw i2;
  await i2.createImages(), s$1(t);
  const { frames: s2, width: o2, height: u2 } = i2, h2 = document.createElement("canvas");
  h2.width = o2, h2.height = u2;
  const l2 = h2.getContext("2d", { willReadFrequently: true }), c = [], f = [];
  let p = 0;
  for (const r of s2) {
    const e2 = n$1(r.delay || 100);
    f.push(e2), p += e2;
    const t2 = r.imageElement;
    0 === r.blendOp ? l2.globalCompositeOperation = "copy" : l2.globalCompositeOperation = "source-over";
    const i3 = 2 === r.disposeOp ? l2.getImageData(r.left, r.top, r.width, r.height) : void 0;
    l2.drawImage(t2, r.left, r.top);
    const s3 = l2.getImageData(0, 0, o2, u2);
    c.push(s3), 0 === r.disposeOp || (1 === r.disposeOp ? l2.clearRect(r.left, r.top, r.width, r.height) : 2 === r.disposeOp && l2.putImageData(i3, r.left, r.top));
  }
  return { frameCount: s2.length, duration: p, frameDurations: f, getFrame: (e2) => c[e2], width: o2, height: u2 };
}
const u = [137, 80, 78, 71, 13, 10, 26, 10];
function h(e) {
  const t = new Uint8Array(e);
  return !u.some((e2, r) => e2 !== t[r]);
}
function l(e) {
  if (!h(e))
    return false;
  const t = new DataView(e), r = new Uint8Array(e);
  let n, i2 = 8;
  do {
    const e2 = t.getUint32(i2);
    if (n = String.fromCharCode.apply(String, Array.prototype.slice.call(r.subarray(i2 + 4, i2 + 8))), "acTL" === n)
      return true;
    i2 += 12 + e2;
  } while ("IEND" !== n && i2 < r.length);
  return false;
}
export {
  l as isAnimatedPNG,
  h as isPNG,
  o as parseApng
};
