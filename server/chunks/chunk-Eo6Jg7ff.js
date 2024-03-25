import { cI as n$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t = {}, r = {}, n = {};
Object.defineProperty(n, "__esModule", { value: true }), n.loop = n.conditional = n.parse = void 0;
var a = function e(t2, r2) {
  var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n2;
  if (Array.isArray(r2))
    r2.forEach(function(r3) {
      return e(t2, r3, n2, a2);
    });
  else if ("function" == typeof r2)
    r2(t2, n2, a2, e);
  else {
    var i2 = Object.keys(r2)[0];
    Array.isArray(r2[i2]) ? (a2[i2] = {}, e(t2, r2[i2], n2, a2[i2])) : a2[i2] = r2[i2](t2, n2, a2, e);
  }
  return n2;
};
n.parse = a;
var i = function(e2, t2) {
  return function(r2, n2, a2, i2) {
    t2(r2, n2, a2) && i2(r2, e2, n2, a2);
  };
};
n.conditional = i;
var o = function(e2, t2) {
  return function(r2, n2, a2, i2) {
    for (var o2 = [], d2 = r2.pos; t2(r2, n2, a2); ) {
      var s2 = {};
      if (i2(r2, e2, n2, s2), r2.pos === d2)
        break;
      d2 = r2.pos, o2.push(s2);
    }
    return o2;
  };
};
n.loop = o;
var d = {};
Object.defineProperty(d, "__esModule", { value: true }), d.readBits = d.readArray = d.readUnsigned = d.readString = d.peekBytes = d.readBytes = d.peekByte = d.readByte = d.buildStream = void 0;
var s = function(e2) {
  return { data: e2, pos: 0 };
};
d.buildStream = s;
var c = function() {
  return function(e2) {
    return e2.data[e2.pos++];
  };
};
d.readByte = c;
var u = function() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return function(t2) {
    return t2.data[t2.pos + e2];
  };
};
d.peekByte = u;
var l = function(e2) {
  return function(t2) {
    return t2.data.subarray(t2.pos, t2.pos += e2);
  };
};
d.readBytes = l;
var f = function(e2) {
  return function(t2) {
    return t2.data.subarray(t2.pos, t2.pos + e2);
  };
};
d.peekBytes = f;
var p = function(e2) {
  return function(t2) {
    return Array.from(l(e2)(t2)).map(function(e3) {
      return String.fromCharCode(e3);
    }).join("");
  };
};
d.readString = p;
var g = function(e2) {
  return function(t2) {
    var r2 = l(2)(t2);
    return e2 ? (r2[1] << 8) + r2[0] : (r2[0] << 8) + r2[1];
  };
};
d.readUnsigned = g;
var y = function(e2, t2) {
  return function(r2, n2, a2) {
    for (var i2 = "function" == typeof t2 ? t2(r2, n2, a2) : t2, o2 = l(e2), d2 = new Array(i2), s2 = 0; s2 < i2; s2++)
      d2[s2] = o2(r2);
    return d2;
  };
};
d.readArray = y;
var h = function(e2, t2, r2) {
  for (var n2 = 0, a2 = 0; a2 < r2; a2++)
    n2 += e2[t2 + a2] && Math.pow(2, r2 - a2 - 1);
  return n2;
}, v = function(e2) {
  return function(t2) {
    for (var r2 = c()(t2), n2 = new Array(8), a2 = 0; a2 < 8; a2++)
      n2[7 - a2] = !!(r2 & 1 << a2);
    return Object.keys(e2).reduce(function(t3, r3) {
      var a3 = e2[r3];
      return a3.length ? t3[r3] = h(n2, a3.index, a3.length) : t3[r3] = n2[a3.index], t3;
    }, {});
  };
};
d.readBits = v, function(e2) {
  Object.defineProperty(e2, "__esModule", { value: true }), e2.default = void 0;
  var t2 = n, r2 = d, a2 = { blocks: function(e3) {
    for (var t3 = 0, n2 = [], a3 = e3.data.length, i3 = 0, o3 = (0, r2.readByte)()(e3); o3 !== t3 && o3; o3 = (0, r2.readByte)()(e3)) {
      if (e3.pos + o3 >= a3) {
        var d2 = a3 - e3.pos;
        n2.push((0, r2.readBytes)(d2)(e3)), i3 += d2;
        break;
      }
      n2.push((0, r2.readBytes)(o3)(e3)), i3 += o3;
    }
    for (var s3 = new Uint8Array(i3), c3 = 0, u3 = 0; u3 < n2.length; u3++)
      s3.set(n2[u3], c3), c3 += n2[u3].length;
    return s3;
  } }, i2 = (0, t2.conditional)({ gce: [{ codes: (0, r2.readBytes)(2) }, { byteSize: (0, r2.readByte)() }, { extras: (0, r2.readBits)({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: (0, r2.readUnsigned)(true) }, { transparentColorIndex: (0, r2.readByte)() }, { terminator: (0, r2.readByte)() }] }, function(e3) {
    var t3 = (0, r2.peekBytes)(2)(e3);
    return 33 === t3[0] && 249 === t3[1];
  }), o2 = (0, t2.conditional)({ image: [{ code: (0, r2.readByte)() }, { descriptor: [{ left: (0, r2.readUnsigned)(true) }, { top: (0, r2.readUnsigned)(true) }, { width: (0, r2.readUnsigned)(true) }, { height: (0, r2.readUnsigned)(true) }, { lct: (0, r2.readBits)({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, (0, t2.conditional)({ lct: (0, r2.readArray)(3, function(e3, t3, r3) {
    return Math.pow(2, r3.descriptor.lct.size + 1);
  }) }, function(e3, t3, r3) {
    return r3.descriptor.lct.exists;
  }), { data: [{ minCodeSize: (0, r2.readByte)() }, a2] }] }, function(e3) {
    return 44 === (0, r2.peekByte)()(e3);
  }), s2 = (0, t2.conditional)({ text: [{ codes: (0, r2.readBytes)(2) }, { blockSize: (0, r2.readByte)() }, { preData: function(e3, t3, n2) {
    return (0, r2.readBytes)(n2.text.blockSize)(e3);
  } }, a2] }, function(e3) {
    var t3 = (0, r2.peekBytes)(2)(e3);
    return 33 === t3[0] && 1 === t3[1];
  }), c2 = (0, t2.conditional)({ application: [{ codes: (0, r2.readBytes)(2) }, { blockSize: (0, r2.readByte)() }, { id: function(e3, t3, n2) {
    return (0, r2.readString)(n2.blockSize)(e3);
  } }, a2] }, function(e3) {
    var t3 = (0, r2.peekBytes)(2)(e3);
    return 33 === t3[0] && 255 === t3[1];
  }), u2 = (0, t2.conditional)({ comment: [{ codes: (0, r2.readBytes)(2) }, a2] }, function(e3) {
    var t3 = (0, r2.peekBytes)(2)(e3);
    return 33 === t3[0] && 254 === t3[1];
  }), l2 = [{ header: [{ signature: (0, r2.readString)(3) }, { version: (0, r2.readString)(3) }] }, { lsd: [{ width: (0, r2.readUnsigned)(true) }, { height: (0, r2.readUnsigned)(true) }, { gct: (0, r2.readBits)({ exists: { index: 0 }, resolution: { index: 1, length: 3 }, sort: { index: 4 }, size: { index: 5, length: 3 } }) }, { backgroundColorIndex: (0, r2.readByte)() }, { pixelAspectRatio: (0, r2.readByte)() }] }, (0, t2.conditional)({ gct: (0, r2.readArray)(3, function(e3, t3) {
    return Math.pow(2, t3.lsd.gct.size + 1);
  }) }, function(e3, t3) {
    return t3.lsd.gct.exists;
  }), { frames: (0, t2.loop)([i2, c2, u2, o2, s2], function(e3) {
    var t3 = (0, r2.peekByte)()(e3);
    return 33 === t3 || 44 === t3;
  }) }];
  e2.default = l2;
}(r);
var m = {};
Object.defineProperty(m, "__esModule", { value: true }), m.deinterlace = void 0;
var w = function(e2, t2) {
  for (var r2 = new Array(e2.length), n2 = e2.length / t2, a2 = function(n3, a3) {
    var i3 = e2.slice(a3 * t2, (a3 + 1) * t2);
    r2.splice.apply(r2, [n3 * t2, t2].concat(i3));
  }, i2 = [0, 4, 2, 1], o2 = [8, 8, 4, 2], d2 = 0, s2 = 0; s2 < 4; s2++)
    for (var c2 = i2[s2]; c2 < n2; c2 += o2[s2])
      a2(c2, d2), d2++;
  return r2;
};
m.deinterlace = w;
var x = {};
Object.defineProperty(x, "__esModule", { value: true }), x.lzw = void 0;
var B = function(e2, t2, r2) {
  var n2, a2, i2, o2, d2, s2, c2, u2, l2, f2, p2, g2, y2, h2, v2, m2, w2 = 4096, x2 = -1, B2 = r2, b2 = new Array(r2), k2 = new Array(w2), A2 = new Array(w2), U2 = new Array(w2 + 1);
  for (d2 = (a2 = 1 << (f2 = e2)) + 1, n2 = a2 + 2, c2 = x2, i2 = (1 << (o2 = f2 + 1)) - 1, u2 = 0; u2 < a2; u2++)
    k2[u2] = 0, A2[u2] = u2;
  for (p2 = g2 = y2 = h2 = v2 = m2 = 0, l2 = 0; l2 < B2; ) {
    if (0 === h2) {
      if (g2 < o2) {
        p2 += t2[m2] << g2, g2 += 8, m2++;
        continue;
      }
      if (u2 = p2 & i2, p2 >>= o2, g2 -= o2, u2 > n2 || u2 == d2)
        break;
      if (u2 == a2) {
        i2 = (1 << (o2 = f2 + 1)) - 1, n2 = a2 + 2, c2 = x2;
        continue;
      }
      if (c2 == x2) {
        U2[h2++] = A2[u2], c2 = u2, y2 = u2;
        continue;
      }
      for (s2 = u2, u2 == n2 && (U2[h2++] = y2, u2 = c2); u2 > a2; )
        U2[h2++] = A2[u2], u2 = k2[u2];
      y2 = 255 & A2[u2], U2[h2++] = y2, n2 < w2 && (k2[n2] = c2, A2[n2] = y2, 0 == (++n2 & i2) && n2 < w2 && (o2++, i2 += n2)), c2 = s2;
    }
    h2--, b2[v2++] = U2[h2], l2++;
  }
  for (l2 = v2; l2 < B2; l2++)
    b2[l2] = 0;
  return b2;
};
x.lzw = B, Object.defineProperty(t, "__esModule", { value: true });
var b = t.decompressFrames = t.decompressFrame = C = t.parseGIF = void 0, k = I(r), A = n, U = d, S = m, z = x;
function I(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
}
var _ = function(e2) {
  var t2 = new Uint8Array(e2);
  return (0, A.parse)((0, U.buildStream)(t2), k.default);
}, C = t.parseGIF = _, j = function(e2) {
  for (var t2 = e2.pixels.length, r2 = new Uint8ClampedArray(4 * t2), n2 = 0; n2 < t2; n2++) {
    var a2 = 4 * n2, i2 = e2.pixels[n2], o2 = e2.colorTable[i2] || [0, 0, 0];
    r2[a2] = o2[0], r2[a2 + 1] = o2[1], r2[a2 + 2] = o2[2], r2[a2 + 3] = i2 !== e2.transparentIndex ? 255 : 0;
  }
  return r2;
}, M = function(e2, t2, r2) {
  if (e2.image) {
    var n2 = e2.image, a2 = n2.descriptor.width * n2.descriptor.height, i2 = (0, z.lzw)(n2.data.minCodeSize, n2.data.blocks, a2);
    n2.descriptor.lct.interlaced && (i2 = (0, S.deinterlace)(i2, n2.descriptor.width));
    var o2 = { pixels: i2, dims: { top: e2.image.descriptor.top, left: e2.image.descriptor.left, width: e2.image.descriptor.width, height: e2.image.descriptor.height } };
    return n2.descriptor.lct && n2.descriptor.lct.exists ? o2.colorTable = n2.lct : o2.colorTable = t2, e2.gce && (o2.delay = 10 * (e2.gce.delay || 10), o2.disposalType = e2.gce.extras.disposal, e2.gce.extras.transparentColorGiven && (o2.transparentIndex = e2.gce.transparentColorIndex)), r2 && (o2.patch = j(o2)), o2;
  }
  console.warn("gif frame does not have associated image.");
};
t.decompressFrame = M;
var F = function(e2, t2) {
  return e2.frames.filter(function(e3) {
    return e3.image;
  }).map(function(r2) {
    return M(r2, e2.gct, t2);
  });
};
let D, O, T;
function P(e2, t2) {
  return D ??= document.createElement("canvas"), D.width = e2, D.height = t2, D.getContext("2d", { willReadFrequently: true });
}
async function G(t2, r2) {
  const n2 = C(t2), a2 = b(n2, true), { width: i2, height: o2 } = n2.lsd, d2 = P(i2, o2), s2 = [], c2 = [];
  let u2 = 0;
  for (const l2 of a2) {
    const t3 = n$1(l2.delay || 100);
    c2.push(t3), u2 += t3;
    const r3 = R(new ImageData(l2.patch, l2.dims.width, l2.dims.height)), n3 = 3 === l2.disposalType ? d2.getImageData(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height) : void 0;
    d2.drawImage(r3, l2.dims.left, l2.dims.top);
    const a3 = d2.getImageData(0, 0, i2, o2);
    s2.push(a3), 1 === l2.disposalType || (2 === l2.disposalType ? d2.clearRect(l2.dims.left, l2.dims.top, l2.dims.width, l2.dims.height) : 3 === l2.disposalType && d2.putImageData(n3, l2.dims.left, l2.dims.top));
  }
  return { frameCount: a2.length, duration: u2, frameDurations: c2, getFrame: (e2) => s2[e2], width: i2, height: o2 };
}
function R(e2) {
  return O ??= document.createElement("canvas"), T ??= O.getContext("2d", { willReadFrequently: true }), O.width = e2.width, O.height = e2.height, T.putImageData(e2, 0, 0), O;
}
b = t.decompressFrames = F;
const E = [71, 73, 70];
function q(e2) {
  const t2 = new Uint8Array(e2);
  return !E.some((e3, r2) => e3 !== t2[r2]);
}
function V(e2) {
  if (!q(e2))
    return false;
  const t2 = new DataView(e2), r2 = t2.getUint8(10);
  let n2 = 13 + (128 & r2 ? 3 * 2 ** (1 + (7 & r2)) : 0), a2 = 0, i2 = false;
  for (; !i2; ) {
    switch (t2.getUint8(n2++)) {
      case 33:
        if (!o2())
          return false;
        break;
      case 44:
        d2();
        break;
      case 59:
        i2 = true;
        break;
      default:
        return false;
    }
    if (a2 > 1)
      return true;
  }
  function o2() {
    switch (t2.getUint8(n2++)) {
      case 249:
        s2();
        break;
      case 1:
        c2();
        break;
      case 254:
        u2();
        break;
      case 255:
        l2();
        break;
      default:
        return false;
    }
    return true;
  }
  function d2() {
    a2++, n2 += 8;
    const e3 = t2.getUint8(n2++);
    n2 += 128 & e3 ? 3 * 2 ** (1 + (7 & e3)) : 0, n2++, f2();
  }
  function s2() {
    n2++, n2 += 4, f2();
  }
  function c2() {
    a2++, n2++, n2 += 12, f2();
  }
  function u2() {
    f2();
  }
  function l2() {
    n2++, n2 += 8, n2 += 3, f2();
  }
  function f2() {
    let e3;
    for (; e3 = t2.getUint8(n2++); )
      n2 += e3;
  }
  return false;
}
export {
  V as isAnimatedGIF,
  q as isGIF,
  G as parseGif
};
