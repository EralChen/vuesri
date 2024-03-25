import { hc as A } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t = {};
t.defaultNoDataValue = A(-1 / 0), t.decode = function(s2, r2) {
  var o2 = (r2 = r2 || {}).encodedMaskData || null === r2.encodedMaskData, f2 = l(s2, r2.inputOffset || 0, o2), u = null != r2.noDataValue ? A(r2.noDataValue) : t.defaultNoDataValue, m = i(f2, r2.pixelType || Float32Array, r2.encodedMaskData, u, r2.returnMask), d = { width: f2.width, height: f2.height, pixelData: m.resultPixels, minValue: f2.pixels.minValue, maxValue: f2.pixels.maxValue, noDataValue: u };
  return m.resultMask && (d.maskData = m.resultMask), r2.returnEncodedMask && f2.mask && (d.encodedMaskData = f2.mask.bitset ? f2.mask.bitset : null), r2.returnFileInfo && (d.fileInfo = n(f2, u), r2.computeUsedBitDepths && (d.fileInfo.bitDepths = a(f2))), d;
};
var i = function(e, t2, i2, n2, a2) {
  var l2, r2, o2 = 0, f2 = e.pixels.numBlocksX, u = e.pixels.numBlocksY, m = Math.floor(e.width / f2), d = Math.floor(e.height / u), c = 2 * e.maxZError;
  i2 = i2 || (e.mask ? e.mask.bitset : null), l2 = new t2(e.width * e.height), a2 && i2 && (r2 = new Uint8Array(e.width * e.height));
  for (var g, h, k = new Float32Array(m * d), x = 0; x <= u; x++) {
    var p = x !== u ? d : e.height % u;
    if (0 !== p)
      for (var w = 0; w <= f2; w++) {
        var y = w !== f2 ? m : e.width % f2;
        if (0 !== y) {
          var V, B, v, U, D = x * e.width * d + w * m, M = e.width - y, b = e.pixels.blocks[o2];
          if (b.encoding < 2 ? (0 === b.encoding ? V = b.rawData : (s(b.stuffedData, b.bitsPerPixel, b.numValidPixels, b.offset, c, k, e.pixels.maxValue), V = k), B = 0) : v = 2 === b.encoding ? 0 : b.offset, i2)
            for (h = 0; h < p; h++) {
              for (7 & D && (U = i2[D >> 3], U <<= 7 & D), g = 0; g < y; g++)
                7 & D || (U = i2[D >> 3]), 128 & U ? (r2 && (r2[D] = 1), l2[D++] = b.encoding < 2 ? V[B++] : v) : (r2 && (r2[D] = 0), l2[D++] = n2), U <<= 1;
              D += M;
            }
          else if (b.encoding < 2)
            for (h = 0; h < p; h++) {
              for (g = 0; g < y; g++)
                l2[D++] = V[B++];
              D += M;
            }
          else
            for (h = 0; h < p; h++)
              if (l2.fill)
                l2.fill(v, D, D + y), D += y + M;
              else {
                for (g = 0; g < y; g++)
                  l2[D++] = v;
                D += M;
              }
          if (1 === b.encoding && B !== b.numValidPixels)
            throw "Block and Mask do not match";
          o2++;
        }
      }
  }
  return { resultPixels: l2, resultMask: r2 };
}, n = function(e, t2) {
  return { fileIdentifierString: e.fileIdentifierString, fileVersion: e.fileVersion, imageType: e.imageType, height: e.height, width: e.width, maxZError: e.maxZError, eofOffset: e.eofOffset, mask: e.mask ? { numBlocksX: e.mask.numBlocksX, numBlocksY: e.mask.numBlocksY, numBytes: e.mask.numBytes, maxValue: e.mask.maxValue } : null, pixels: { numBlocksX: e.pixels.numBlocksX, numBlocksY: e.pixels.numBlocksY, numBytes: e.pixels.numBytes, maxValue: e.pixels.maxValue, minValue: e.pixels.minValue, noDataValue: t2 } };
}, a = function(e) {
  for (var t2 = e.pixels.numBlocksX * e.pixels.numBlocksY, i2 = {}, n2 = 0; n2 < t2; n2++) {
    var a2 = e.pixels.blocks[n2];
    0 === a2.encoding ? i2.float32 = true : 1 === a2.encoding ? i2[a2.bitsPerPixel] = true : i2[0] = true;
  }
  return Object.keys(i2);
}, l = function(e, t2, i2) {
  var n2 = {}, a2 = new Uint8Array(e, t2, 10);
  if (n2.fileIdentifierString = String.fromCharCode.apply(null, a2), "CntZImage" != n2.fileIdentifierString.trim())
    throw "Unexpected file identifier string: " + n2.fileIdentifierString;
  t2 += 10;
  var l2 = new DataView(e, t2, 24);
  if (n2.fileVersion = l2.getInt32(0, true), n2.imageType = l2.getInt32(4, true), n2.height = l2.getUint32(8, true), n2.width = l2.getUint32(12, true), n2.maxZError = l2.getFloat64(16, true), t2 += 24, !i2) {
    if (l2 = new DataView(e, t2, 16), n2.mask = {}, n2.mask.numBlocksY = l2.getUint32(0, true), n2.mask.numBlocksX = l2.getUint32(4, true), n2.mask.numBytes = l2.getUint32(8, true), n2.mask.maxValue = l2.getFloat32(12, true), t2 += 16, n2.mask.numBytes > 0) {
      var s2 = new Uint8Array(Math.ceil(n2.width * n2.height / 8)), r2 = (l2 = new DataView(e, t2, n2.mask.numBytes)).getInt16(0, true), o2 = 2, f2 = 0;
      do {
        if (r2 > 0)
          for (; r2--; )
            s2[f2++] = l2.getUint8(o2++);
        else {
          var u = l2.getUint8(o2++);
          for (r2 = -r2; r2--; )
            s2[f2++] = u;
        }
        r2 = l2.getInt16(o2, true), o2 += 2;
      } while (o2 < n2.mask.numBytes);
      if (-32768 !== r2 || f2 < s2.length)
        throw "Unexpected end of mask RLE encoding";
      n2.mask.bitset = s2, t2 += n2.mask.numBytes;
    } else if (0 == (n2.mask.numBytes | n2.mask.numBlocksY | n2.mask.maxValue)) {
      s2 = new Uint8Array(Math.ceil(n2.width * n2.height / 8));
      n2.mask.bitset = s2;
    }
  }
  l2 = new DataView(e, t2, 16), n2.pixels = {}, n2.pixels.numBlocksY = l2.getUint32(0, true), n2.pixels.numBlocksX = l2.getUint32(4, true), n2.pixels.numBytes = l2.getUint32(8, true), n2.pixels.maxValue = l2.getFloat32(12, true), t2 += 16;
  var m = n2.pixels.numBlocksX, d = n2.pixels.numBlocksY, c = m + (n2.width % m > 0 ? 1 : 0), g = d + (n2.height % d > 0 ? 1 : 0);
  n2.pixels.blocks = new Array(c * g);
  for (var h = 1e9, k = 0, x = 0; x < g; x++)
    for (var p = 0; p < c; p++) {
      var w = 0, y = e.byteLength - t2;
      l2 = new DataView(e, t2, Math.min(10, y));
      var V = {};
      n2.pixels.blocks[k++] = V;
      var B = l2.getUint8(0);
      if (w++, V.encoding = 63 & B, V.encoding > 3)
        throw "Invalid block encoding (" + V.encoding + ")";
      if (2 !== V.encoding) {
        if (0 !== B && 2 !== B) {
          if (B >>= 6, V.offsetType = B, 2 === B)
            V.offset = l2.getInt8(1), w++;
          else if (1 === B)
            V.offset = l2.getInt16(1, true), w += 2;
          else {
            if (0 !== B)
              throw "Invalid block offset type";
            V.offset = l2.getFloat32(1, true), w += 4;
          }
          if (h = Math.min(V.offset, h), 1 === V.encoding)
            if (B = l2.getUint8(w), w++, V.bitsPerPixel = 63 & B, B >>= 6, V.numValidPixelsType = B, 2 === B)
              V.numValidPixels = l2.getUint8(w), w++;
            else if (1 === B)
              V.numValidPixels = l2.getUint16(w, true), w += 2;
            else {
              if (0 !== B)
                throw "Invalid valid pixel count type";
              V.numValidPixels = l2.getUint32(w, true), w += 4;
            }
        }
        var v;
        if (t2 += w, 3 != V.encoding) {
          if (0 === V.encoding) {
            var U = (n2.pixels.numBytes - 1) / 4;
            if (U !== Math.floor(U))
              throw "uncompressed block has invalid length";
            v = new ArrayBuffer(4 * U), new Uint8Array(v).set(new Uint8Array(e, t2, 4 * U));
            for (var D = new Float32Array(v), M = 0; M < D.length; M++)
              h = Math.min(h, D[M]);
            V.rawData = D, t2 += 4 * U;
          } else if (1 === V.encoding) {
            var b = Math.ceil(V.numValidPixels * V.bitsPerPixel / 8), I = Math.ceil(b / 4);
            v = new ArrayBuffer(4 * I), new Uint8Array(v).set(new Uint8Array(e, t2, b)), V.stuffedData = new Uint32Array(v), t2 += b;
          }
        }
      } else
        t2++, h = Math.min(h, 0);
    }
  return n2.pixels.minValue = h, n2.eofOffset = t2, n2;
}, s = function(e, t2, i2, n2, a2, l2, s2) {
  var r2, o2, f2, u = (1 << t2) - 1, m = 0, d = 0, c = Math.ceil((s2 - n2) / a2), g = 4 * e.length - Math.ceil(t2 * i2 / 8);
  for (e[e.length - 1] <<= 8 * g, r2 = 0; r2 < i2; r2++) {
    if (0 === d && (f2 = e[m++], d = 32), d >= t2)
      o2 = f2 >>> d - t2 & u, d -= t2;
    else {
      var h = t2 - d;
      o2 = (f2 & u) << h & u, o2 += (f2 = e[m++]) >>> (d = 32 - h);
    }
    l2[r2] = o2 < c ? n2 + o2 * a2 : s2;
  }
  return l2;
};
const r = t.decode;
class o {
  _decode(e) {
    const t2 = r(e.buffer, e.options);
    return Promise.resolve({ result: t2, transferList: [t2.pixelData.buffer] });
  }
}
function f() {
  return new o();
}
export {
  f as default
};
