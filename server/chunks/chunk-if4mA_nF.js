import { md as C, fF as o$2, aF as e$3, fD as _$1, fE as z$1, aW as n$1, aO as s$2, up as tt, bG as ot, vS as G, l4 as l$1, m4 as t$1, vT as N$1, vU as o$3, vV as r$1, vW as _, iH as z, uF as f$3, vX as o$4, vY as O, nl as i$4, vZ as C$1, oH as m, kR as h, eL as r$2, oG as r$3, fq as D$1, im as e$4, aT as s$3, v_ as R$1, hi as e$5, v$ as T, cY as x$1, w0 as ct } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t;
!function(t2) {
  t2[t2.JSON = 1313821514] = "JSON", t2[t2.BIN = 5130562] = "BIN";
}(t || (t = {}));
let e$2 = class e {
  constructor(i4, r2) {
    if (!i4)
      throw new Error("GLB requires a JSON gltf chunk");
    this._length = e.HEADER_SIZE, this._length += e.CHUNK_HEADER_SIZE;
    const n = this._textToArrayBuffer(i4);
    if (this._length += this._alignTo(n.byteLength, 4), r2 && (this._length += e.CHUNK_HEADER_SIZE, this._length += r2.byteLength, r2.byteLength % 4))
      throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const h2 = this._writeChunk(n, 12, t.JSON, 32);
    r2 && this._writeChunk(r2, h2, t.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, e.MAGIC, true), this._outView.setUint32(4, e.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t2, e3, i4, r2 = 0) {
    const n = this._alignTo(t2.byteLength, 4);
    for (this._outView.setUint32(e3, n, true), this._outView.setUint32(e3 += 4, i4, true), this._writeArrayBuffer(this._outView.buffer, t2, e3 += 4, 0, t2.byteLength), e3 += t2.byteLength; e3 % 4; )
      r2 && this._outView.setUint8(e3, r2), e3++;
    return e3;
  }
  _writeArrayBuffer(t2, e3, i4, r2, n) {
    new Uint8Array(t2, i4, n).set(new Uint8Array(e3, r2, n), 0);
  }
  _textToArrayBuffer(t2) {
    return new TextEncoder().encode(t2).buffer;
  }
  _alignTo(t2, e3) {
    return e3 * Math.ceil(t2 / e3);
  }
};
e$2.HEADER_SIZE = 12, e$2.CHUNK_HEADER_SIZE = 8, e$2.MAGIC = 1179937895, e$2.VERSION = 2;
var E, A, R, L$1, o$1, I, N;
!function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(E || (E = {})), function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(A || (A = {})), function(E2) {
  E2[E2.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", E2[E2.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(R || (R = {})), function(E2) {
  E2.SCALAR = "SCALAR", E2.VEC2 = "VEC2", E2.VEC3 = "VEC3", E2.VEC4 = "VEC4", E2.MAT2 = "MAT2", E2.MAT3 = "MAT3", E2.MAT4 = "MAT4";
}(L$1 || (L$1 = {})), function(E2) {
  E2[E2.POINTS = 0] = "POINTS", E2[E2.LINES = 1] = "LINES", E2[E2.LINE_LOOP = 2] = "LINE_LOOP", E2[E2.LINE_STRIP = 3] = "LINE_STRIP", E2[E2.TRIANGLES = 4] = "TRIANGLES", E2[E2.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", E2[E2.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(o$1 || (o$1 = {})), function(E2) {
  E2.OPAQUE = "OPAQUE", E2.MASK = "MASK", E2.BLEND = "BLEND";
}(I || (I = {})), function(E2) {
  E2[E2.NoColor = 0] = "NoColor", E2[E2.FaceColor = 1] = "FaceColor", E2[E2.VertexColor = 2] = "VertexColor";
}(N || (N = {}));
let i$3 = class i {
  constructor(t2, s3, i4, r2, n) {
    this._buffer = t2, this._componentType = i4, this._dataType = r2, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, s3.bufferViews || (s3.bufferViews = []), this.index = s3.bufferViews.length, this._bufferView = { buffer: t2.index, byteLength: -1, target: n };
    const a2 = this._getElementSize();
    a2 >= 4 && n !== R.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a2), s3.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e3) {
    const t2 = this._data.length;
    if (this._data.push(e3), this._accessorIndex >= 0) {
      const s3 = t2 % this._numComponentsForDataType, i4 = this._accessorMin[s3];
      this._accessorMin[s3] = "number" != typeof i4 ? e3 : Math.min(i4, e3);
      const r2 = this._accessorMax[s3];
      this._accessorMax[s3] = "number" != typeof r2 ? e3 : Math.max(r2, e3);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e3(e4, t2) {
      return t2 * Math.ceil(e4 / t2);
    }
    return e3(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized)
      throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized)
      throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e3, t2) {
    switch (this._componentType) {
      case C.BYTE:
        return new Int8Array(e3, t2);
      case C.FLOAT:
        return new Float32Array(e3, t2);
      case C.SHORT:
        return new Int16Array(e3, t2);
      case C.UNSIGNED_BYTE:
        return new Uint8Array(e3, t2);
      case C.UNSIGNED_INT:
        return new Uint32Array(e3, t2);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(e3, t2);
    }
  }
  writeOutToBuffer(e3, t2) {
    this._createTypedArray(e3, t2).set(this._data);
  }
  writeAsync(e3) {
    if (this._asyncWritePromise)
      throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e3.then((e4) => {
      const t2 = new Uint8Array(e4);
      for (let s3 = 0; s3 < t2.length; ++s3)
        this._data.push(t2[s3]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e3) {
    if (this._accessorIndex >= 0)
      throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e3;
    const t2 = this._numComponentsForDataType;
    this._accessorMin = new Array(t2), this._accessorMax = new Array(t2);
  }
  endAccessor() {
    if (this._accessorIndex < 0)
      throw new Error("An accessor was not started, but was attempted to be ended");
    const e3 = this._getElementSize(), t2 = this._numComponentsForDataType, i4 = (this._data.length - this._accessorIndex) / t2;
    if (i4 % 1)
      throw new Error("An accessor was ended with missing component values");
    for (let s3 = 0; s3 < this._accessorMin.length; ++s3)
      "number" != typeof this._accessorMin[s3] && (this._accessorMin[s3] = 0), "number" != typeof this._accessorMax[s3] && (this._accessorMax[s3] = 0);
    const r2 = { byteOffset: e3 * (this._accessorIndex / t2), componentType: this._componentType, count: i4, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case C.UNSIGNED_BYTE:
          case C.UNSIGNED_SHORT:
            r2.normalized = true;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r2;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e3) => this._finalizedPromiseResolve = e3);
  }
  async finalize() {
    const e3 = this._bufferView, t2 = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t2.push(this._asyncWritePromise), await Promise.allSettled(t2), this._isFinalized = true, e3.byteOffset = this.getByteOffset(), e3.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case C.BYTE:
      case C.UNSIGNED_BYTE:
        return 1;
      case C.SHORT:
      case C.UNSIGNED_SHORT:
        return 2;
      case C.UNSIGNED_INT:
      case C.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case L$1.SCALAR:
        return 1;
      case L$1.VEC2:
        return 2;
      case L$1.VEC3:
        return 3;
      case L$1.VEC4:
      case L$1.MAT2:
        return 4;
      case L$1.MAT3:
        return 9;
      case L$1.MAT4:
        return 16;
    }
  }
};
let i$2 = class i2 {
  constructor(e3) {
    this._gltf = e3, this._bufferViews = [], this._isFinalized = false, e3.buffers || (e3.buffers = []), this.index = e3.buffers.length;
    const i4 = { byteLength: -1 };
    e3.buffers.push(i4), this._buffer = i4;
  }
  addBufferView(i4, t2, r2) {
    if (this._finalizePromise)
      throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f2 = new i$3(this, this._gltf, i4, t2, r2);
    return this._bufferViews.push(f2), f2;
  }
  getByteOffset(e3) {
    let i4 = 0;
    for (const t2 of this._bufferViews) {
      if (t2 === e3)
        return i4;
      i4 += t2.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e3) {
    const i4 = [];
    for (const t2 of this._bufferViews) {
      if (e3 && t2 === e3)
        return i4;
      i4.push(t2.finalized);
    }
    return i4;
  }
  getArrayBuffer() {
    if (!this._isFinalized)
      throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e3 = this._getTotalSize(), i4 = new ArrayBuffer(e3);
    let t2 = 0;
    for (const r2 of this._bufferViews)
      r2.writeOutToBuffer(i4, t2), t2 += r2.byteSize;
    return i4;
  }
  finalize() {
    if (this._finalizePromise)
      throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = true;
      const e3 = this.getArrayBuffer();
      this._buffer.byteLength = e3.byteLength, this._buffer.uri = e3;
    }), this._gltf.extras?.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e3 = 0;
    for (const i4 of this._bufferViews)
      e3 += i4.byteSize;
    return e3;
  }
};
function c$1(o2, n) {
  if (o2.components)
    for (const s3 of o2.components)
      s3.faces && "smooth" === s3.shading && e$1(s3, n);
}
function e$1(r2, c2) {
  null == c2.normal && (c2.normal = new Float32Array(c2.position.length));
  const e3 = r2.faces, { position: m2, normal: p2 } = c2, h2 = e3.length / 3;
  for (let t2 = 0; t2 < h2; ++t2) {
    const r3 = 3 * e3[3 * t2], c3 = 3 * e3[3 * t2 + 1], l2 = 3 * e3[3 * t2 + 2], h3 = o$2(a$2, m2[r3], m2[r3 + 1], m2[r3 + 2]), g2 = o$2(f$2, m2[c3], m2[c3 + 1], m2[c3 + 2]), u2 = o$2(i$1, m2[l2], m2[l2 + 1], m2[l2 + 2]), b = e$3(g2, g2, h3), j = e$3(u2, u2, h3), v2 = _$1(b, b, j);
    p2[r3] += v2[0], p2[r3 + 1] += v2[1], p2[r3 + 2] += v2[2], p2[c3] += v2[0], p2[c3 + 1] += v2[1], p2[c3 + 2] += v2[2], p2[l2] += v2[0], p2[l2 + 1] += v2[1], p2[l2 + 2] += v2[2];
  }
  for (let n = 0; n < p2.length; n += 3)
    o$2(l, p2[n], p2[n + 1], p2[n + 2]), z$1(l, l), p2[n] = l[0], p2[n + 1] = l[1], p2[n + 2] = l[2];
}
const a$2 = n$1(), f$2 = n$1(), i$1 = n$1(), l = n$1();
function a$1(e3) {
  const t2 = o(e3);
  return null != t2 ? t2.toDataURL() : "";
}
async function r(t2) {
  const n = o(t2);
  if (null == n)
    throw new s$2("imageToArrayBuffer", "Unsupported image type");
  const a2 = await i3(t2), r2 = await new Promise((e3) => n.toBlob(e3, a2));
  if (!r2)
    throw new s$2("imageToArrayBuffer", "Failed to encode image");
  return { data: await r2.arrayBuffer(), type: a2 };
}
async function i3(e3) {
  if (!(e3 instanceof HTMLImageElement))
    return "image/png";
  const a2 = e3.src;
  if (tt(a2)) {
    const e4 = ot(a2);
    return "image/jpeg" === e4?.mediaType ? e4.mediaType : "image/png";
  }
  return /\.png$/i.test(a2) ? "image/png" : /\.(jpg|jpeg)$/i.test(a2) ? "image/jpeg" : "image/png";
}
function o(e3) {
  if (e3 instanceof HTMLCanvasElement)
    return e3;
  if (e3 instanceof HTMLVideoElement)
    return null;
  const t2 = document.createElement("canvas");
  t2.width = e3.width, t2.height = e3.height;
  const n = t2.getContext("2d");
  return e3 instanceof HTMLImageElement ? n.drawImage(e3, 0, 0, e3.width, e3.height) : e3 instanceof ImageData && n.putImageData(e3, 0, 0), t2;
}
function c(e3) {
  const t2 = [], n = new Uint8Array(e3);
  for (let a2 = 0; a2 < n.length; a2++)
    t2.push(String.fromCharCode(n[a2]));
  return "data:application/octet-stream;base64," + btoa(t2.join(""));
}
function g(e3) {
  if (e3.byteLength < 8)
    return false;
  const t2 = new Uint8Array(e3);
  return 137 === t2[0] && 80 === t2[1] && 78 === t2[2] && 71 === t2[3] && 13 === t2[4] && 10 === t2[5] && 26 === t2[6] && 10 === t2[7];
}
const L = () => s$3.getLogger("gltf");
class S {
  constructor(e3, t2, s3) {
    this.params = {}, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e3.copyright, generator: e3.generator }, extras: { options: t2, binChunkBuffer: null, promises: [] } }, s3 && (this.params = s3), this._addScenes(e3);
  }
  _addScenes(e3) {
    this.gltf.scene = e3.defaultScene;
    const t2 = this.gltf.extras, s3 = t2.options.bufferOutputType === E.GLB || t2.options.imageOutputType === A.GLB;
    s3 && (t2.binChunkBuffer = new i$2(this.gltf)), e3.forEachScene((e4) => {
      this._addScene(e4);
    }), s3 && t2.binChunkBuffer.finalize();
  }
  _addScene(e3) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t2 = {};
    e3.name && (t2.name = e3.name), e3.forEachNode((e4) => {
      t2.nodes || (t2.nodes = []), t2.nodes.push(...this._addNodes(e4));
    }), this.gltf.scenes.push(t2);
  }
  _addNodes(e3) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t2 = {};
    e3.name && (t2.name = e3.name);
    const s3 = e3.translation;
    G(s3, l$1) || (t2.translation = t$1(s3));
    const r2 = e3.rotation;
    N$1(r2, o$3) || (t2.rotation = r$1(r2));
    const i4 = e3.scale;
    G(i4, _) || (t2.scale = t$1(i4));
    const a2 = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t2), e3.mesh && e3.mesh.vertexAttributes.position) {
      const s4 = this._createMeshes(e3.mesh), r3 = [a2];
      if (1 === s4.length)
        this._addMesh(t2, s4[0]);
      else
        for (const e4 of s4) {
          const t3 = {};
          this._addMesh(t3, e4), r3.push(this.gltf.nodes.length), this.gltf.nodes.push(t3);
        }
      return r3;
    }
    return e3.forEachNode((e4) => {
      t2.children || (t2.children = []), t2.children.push(...this._addNodes(e4));
    }), [a2];
  }
  _addMesh(e3, t2) {
    this.gltf.meshes ??= [];
    const s3 = this.gltf.meshes.length;
    this.gltf.meshes.push(t2), e3.mesh = s3;
  }
  _createMeshes(t2) {
    const s3 = this.gltf.extras, r2 = s3.options.bufferOutputType === E.GLB;
    let n;
    n = r2 ? s3.binChunkBuffer : new i$2(this.gltf), this.params.origin || (this.params.origin = t2.anchor);
    const { ignoreLocalTransform: l2 } = this.params, c2 = l2 ? null : t2.transform, { vertexSpace: h2, spatialReference: f2 } = t2, u2 = h2.origin, p2 = t2.vertexAttributes;
    let g2 = null;
    if ("local" === h2.type) {
      const e3 = z(f2);
      f$3(v, c2?.localMatrix ?? o$4, [e3, e3, e3]), g2 = O(p2, v);
    } else {
      const e3 = l2 ? new i$4({ origin: u2 ? t$1(u2) : null }) : h2;
      g2 = C$1(p2, e3, c2, this.params.origin, { geographic: this.params.geographic, unit: "meters" });
    }
    if (null == g2)
      throw new s$2("Error during gltf export.");
    p2.position && g2.position === p2.position && (g2.position = p2.position.slice()), p2.normal && g2.normal === p2.normal && (g2.normal = p2.normal.slice()), p2.tangent && g2.tangent === p2.tangent && (g2.tangent = p2.tangent.slice()), c$1(t2, g2), this._flipYZAxis(g2);
    const b = n.addBufferView(C.FLOAT, L$1.VEC3, R.ARRAY_BUFFER);
    let O$1, w, I2, N2;
    g2.normal && (O$1 = n.addBufferView(C.FLOAT, L$1.VEC3, R.ARRAY_BUFFER)), p2.uv && (w = n.addBufferView(C.FLOAT, L$1.VEC2, R.ARRAY_BUFFER)), g2.tangent && (I2 = n.addBufferView(C.FLOAT, L$1.VEC4, R.ARRAY_BUFFER)), p2.color && (N2 = n.addBufferView(C.UNSIGNED_BYTE, L$1.VEC4, R.ARRAY_BUFFER)), b.startAccessor("POSITION"), O$1 && O$1.startAccessor("NORMAL"), w && w.startAccessor("TEXCOORD_0"), I2 && I2.startAccessor("TANGENT"), N2 && N2.startAccessor("COLOR_0");
    const C$2 = g2.position.length / 3, { position: L2, normal: S2, tangent: y } = g2, { color: F, uv: j } = p2;
    for (let e3 = 0; e3 < C$2; ++e3)
      b.push(L2[3 * e3]), b.push(L2[3 * e3 + 1]), b.push(L2[3 * e3 + 2]), O$1 && null != S2 && (O$1.push(S2[3 * e3]), O$1.push(S2[3 * e3 + 1]), O$1.push(S2[3 * e3 + 2])), w && null != j && (w.push(j[2 * e3]), w.push(j[2 * e3 + 1])), I2 && null != y && (I2.push(y[4 * e3]), I2.push(y[4 * e3 + 1]), I2.push(y[4 * e3 + 2]), I2.push(y[4 * e3 + 3])), N2 && null != F && (N2.push(F[4 * e3]), N2.push(F[4 * e3 + 1]), N2.push(F[4 * e3 + 2]), N2.push(F[4 * e3 + 3]));
    const V = b.endAccessor(), D = this._addAccessor(b.index, V);
    let k, G2, Y, U, P;
    if (O$1) {
      const e3 = O$1.endAccessor();
      k = this._addAccessor(O$1.index, e3);
    }
    if (w) {
      const e3 = w.endAccessor();
      G2 = this._addAccessor(w.index, e3);
    }
    if (I2) {
      const e3 = I2.endAccessor();
      Y = this._addAccessor(I2.index, e3);
    }
    if (N2) {
      const e3 = N2.endAccessor();
      U = this._addAccessor(N2.index, e3);
    }
    const z$12 = [];
    return t2.components && t2.components.length > 0 && t2.components[0].faces ? (P = n.addBufferView(C.UNSIGNED_INT, L$1.SCALAR, R.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(P, t2.components, z$12, D, k, G2, Y, U)) : this._addMeshVertexNonIndexed(t2.components, z$12, D, k, G2, Y, U), b.finalize(), O$1 && O$1.finalize(), w && w.finalize(), I2 && I2.finalize(), P && P.finalize(), N2 && N2.finalize(), r2 || n.finalize(), z$12;
  }
  _flipYZAxis({ position: e3, normal: t2, tangent: s3 }) {
    this._flipYZBuffer(e3, 3), this._flipYZBuffer(t2, 3), this._flipYZBuffer(s3, 4);
  }
  _flipYZBuffer(e3, t2) {
    if (null != e3)
      for (let s3 = 1, r2 = 2; s3 < e3.length; s3 += t2, r2 += t2) {
        const t3 = e3[s3], i4 = e3[r2];
        e3[s3] = i4, e3[r2] = -t3;
      }
  }
  _addMaterial(e3) {
    if (null === e3)
      return;
    const t2 = this._materialMap.indexOf(e3);
    if (-1 !== t2)
      return t2;
    this.gltf.materials || (this.gltf.materials = []);
    const s3 = {};
    switch (e3.alphaMode) {
      case "mask":
        s3.alphaMode = I.MASK;
        break;
      case "auto":
      case "blend":
        s3.alphaMode = I.BLEND;
    }
    0.5 !== e3.alphaCutoff && (s3.alphaCutoff = e3.alphaCutoff), e3.doubleSided && (s3.doubleSided = e3.doubleSided), s3.pbrMetallicRoughness = {};
    const r2 = (e4) => e4 ** 2.1, i4 = (e4) => {
      const t3 = e4.toRgba();
      return t3[0] = r2(t3[0] / 255), t3[1] = r2(t3[1] / 255), t3[2] = r2(t3[2] / 255), t3;
    };
    if (null != e3.color && (s3.pbrMetallicRoughness.baseColorFactor = i4(e3.color)), null != e3.colorTexture && (s3.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e3.colorTexture, e3.colorTextureTransform)), null != e3.normalTexture && (s3.normalTexture = this._createTextureInfo(e3.normalTexture, e3.normalTextureTransform)), e3 instanceof m) {
      if (null != e3.emissiveTexture && (s3.emissiveTexture = this._createTextureInfo(e3.emissiveTexture, e3.emissiveTextureTransform)), null != e3.emissiveColor) {
        const t3 = i4(e3.emissiveColor);
        s3.emissiveFactor = [t3[0], t3[1], t3[2]];
      }
      null != e3.occlusionTexture && (s3.occlusionTexture = this._createTextureInfo(e3.occlusionTexture, e3.occlusionTextureTransform)), null != e3.metallicRoughnessTexture && (s3.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e3.metallicRoughnessTexture, e3.metallicRoughnessTextureTransform)), s3.pbrMetallicRoughness.metallicFactor = e3.metallic, s3.pbrMetallicRoughness.roughnessFactor = e3.roughness;
    } else
      s3.pbrMetallicRoughness.metallicFactor = 1, s3.pbrMetallicRoughness.roughnessFactor = 1, L().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const a2 = this.gltf.materials.length;
    return this.gltf.materials.push(s3), this._materialMap.push(e3), a2;
  }
  _createTextureInfo(e3, t2) {
    const s3 = { index: this._addTexture(e3) };
    return t2 ? (s3.extensions || (s3.extensions = {}), s3.extensions.KHR_texture_transform = { scale: t2.scale, offset: t2.offset, rotation: h(t2.rotation) }, s3) : s3;
  }
  _addTexture(e3) {
    const t2 = this.gltf.textures ?? [];
    return this.gltf.textures = t2, r$2(this._textureMap, e3, () => {
      const s3 = { sampler: this._addSampler(e3), source: this._addImage(e3) }, r2 = t2.length;
      return t2.push(s3), r2;
    });
  }
  _addImage(e3) {
    const t2 = this._imageMap.get(e3);
    if (null != t2)
      return t2;
    this.gltf.images || (this.gltf.images = []);
    const s3 = {};
    if (e3.url)
      s3.uri = e3.url;
    else {
      const t3 = e3.data;
      s3.extras = t3;
      for (let e4 = 0; e4 < this.gltf.images.length; ++e4)
        if (t3 === this.gltf.images[e4].extras)
          return e4;
      const r$13 = this.gltf.extras;
      switch (r$13.options.imageOutputType) {
        case A.GLB: {
          const e4 = r$13.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE, L$1.SCALAR);
          if (r$3(t3))
            null != t3.data && e4.writeOutToBuffer(t3.data, 0);
          else {
            const r$14 = r(t3).then(({ data: e5, type: t4 }) => (s3.mimeType = t4, e5));
            e4.writeAsync(r$14).then(() => {
              e4.finalize();
            });
          }
          s3.bufferView = e4.index;
          break;
        }
        case A.DataURI:
          if (r$3(t3)) {
            L().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s3.uri = a$1(t3);
          break;
        default:
          if (r$3(t3)) {
            L().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          r$13.promises.push(r(t3).then(({ data: e4, type: t4 }) => {
            s3.uri = e4, s3.mimeType = t4;
          }));
      }
    }
    const r$12 = this.gltf.images.length;
    return this.gltf.images.push(s3), this._imageMap.set(e3, r$12), r$12;
  }
  _addSampler(e3) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t2 = D$1.REPEAT, s3 = D$1.REPEAT;
    if ("string" == typeof e3.wrap)
      switch (e3.wrap) {
        case "clamp":
          t2 = D$1.CLAMP_TO_EDGE, s3 = D$1.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D$1.MIRRORED_REPEAT, s3 = D$1.MIRRORED_REPEAT;
      }
    else {
      switch (e3.wrap.vertical) {
        case "clamp":
          s3 = D$1.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s3 = D$1.MIRRORED_REPEAT;
      }
      switch (e3.wrap.horizontal) {
        case "clamp":
          t2 = D$1.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D$1.MIRRORED_REPEAT;
      }
    }
    const r2 = { wrapS: t2, wrapT: s3 };
    for (let a2 = 0; a2 < this.gltf.samplers.length; ++a2)
      if (JSON.stringify(r2) === JSON.stringify(this.gltf.samplers[a2]))
        return a2;
    const i4 = this.gltf.samplers.length;
    return this.gltf.samplers.push(r2), i4;
  }
  _addAccessor(e3, t2) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s3 = { bufferView: e3, byteOffset: t2.byteOffset, componentType: t2.componentType, count: t2.count, type: t2.type, min: t2.min, max: t2.max, name: t2.name };
    t2.normalized && (s3.normalized = true);
    const r2 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s3), r2;
  }
  _addMeshVertexIndexed(e3, t2, s3, r2, i4, a2, o2, n) {
    const l2 = /* @__PURE__ */ new Map();
    for (const c2 of t2) {
      e3.startAccessor("INDICES");
      for (let s4 = 0; s4 < c2.faces.length; ++s4)
        e3.push(c2.faces[s4]);
      const t3 = e3.endAccessor(), h2 = { attributes: { POSITION: r2 }, indices: this._addAccessor(e3.index, t3), material: this._addMaterial(c2.material) };
      i4 && "flat" !== c2.shading && (h2.attributes.NORMAL = i4), a2 && (h2.attributes.TEXCOORD_0 = a2), o2 && "flat" !== c2.shading && (h2.attributes.TANGENT = o2), n && (h2.attributes.COLOR_0 = n);
      const f2 = l2.get(c2.name);
      if (f2)
        f2.primitives.push(h2);
      else {
        const e4 = { name: c2.name, primitives: [h2] };
        l2.set(c2.name, e4), s3.push(e4);
      }
    }
  }
  _addMeshVertexNonIndexed(e3, t2, s3, r2, i4, a2, o2) {
    const n = { primitives: [] };
    t2.push(n);
    const l2 = { attributes: { POSITION: s3 } };
    r2 && (l2.attributes.NORMAL = r2), i4 && (l2.attributes.TEXCOORD_0 = i4), a2 && (l2.attributes.TANGENT = a2), o2 && (l2.attributes.COLOR_0 = o2), e3 && (l2.material = this._addMaterial(e3[0].material)), n.primitives.push(l2);
  }
}
const v = e$4();
let s$1 = class s {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e3) {
    if (this._scenes.includes(e3))
      throw new Error("Scene already added");
    this._scenes.push(e3);
  }
  removeScene(s3) {
    R$1(this._scenes, s3);
  }
  forEachScene(e3) {
    this._scenes.forEach(e3);
  }
};
class d {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(d2) {
    if (this._nodes.includes(d2))
      throw new Error("Node already added");
    this._nodes.push(d2);
  }
  forEachNode(d2) {
    this._nodes.forEach(d2);
  }
}
class e2 {
  constructor(t2) {
    this.mesh = t2, this.name = "", this.translation = n$1(), this.rotation = e$5(), this.scale = t$1(_), this._nodes = [];
  }
  addNode(t2) {
    if (this._nodes.includes(t2))
      throw new Error("Node already added");
    this._nodes.push(t2);
  }
  forEachNode(t2) {
    this._nodes.forEach(t2);
  }
  set rotationAngles(s3) {
    T(this.rotation, s3[0], s3[1], s3[2]);
  }
}
const a = "model.gltf", f$1 = "model.glb";
async function u(u2, p2, m2) {
  const c$12 = new S(u2, p2 = p2 || {}, m2);
  let l2 = c$12.params;
  l2 ? l2.origin || (l2.origin = new x$1({ x: -1, y: -1, z: -1 })) : l2 = { origin: new x$1({ x: -1, y: -1, z: -1 }) };
  const g$1 = l2.origin, y = c$12.gltf, d2 = y.extras?.promises ?? [];
  let j = 1, x = 1, b = null;
  await Promise.allSettled(d2);
  const w = { origin: g$1 };
  delete y.extras;
  const B = "number" == typeof p2.jsonSpacing ? p2.jsonSpacing : 4, h2 = JSON.stringify(y, (e3, t2) => {
    if ("extras" !== e3) {
      if (t2 instanceof ArrayBuffer) {
        if (g(t2))
          switch (p2.imageOutputType) {
            case A.DataURI:
            case A.GLB:
              break;
            case A.External:
            default: {
              const e4 = `img${x}.png`;
              return x++, w[e4] = t2, e4;
            }
          }
        switch (p2.bufferOutputType) {
          case E.DataURI:
            return c(t2);
          case E.GLB:
            if (b)
              throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (b = t2);
          case E.External:
          default: {
            const e4 = `data${j}.bin`;
            return j++, w[e4] = t2, e4;
          }
        }
      }
      return t2;
    }
  }, B);
  return p2.bufferOutputType === E.GLB || p2.imageOutputType === A.GLB ? w[f$1] = new e$2(h2, b).buffer : w[a] = h2, w;
}
function p(e3, t2) {
  return u(e3, { bufferOutputType: E.GLB, imageOutputType: A.GLB, jsonSpacing: 0 }, t2);
}
class s2 {
  constructor(e3, o2) {
    this._file = { type: "model/gltf-binary", data: e3 }, this.origin = o2;
  }
  buffer() {
    return Promise.resolve(this._file);
  }
  download(o2) {
    ct(new Blob([this._file.data], { type: this._file.type }), o2);
  }
}
function f(e$12, f2) {
  const d$1 = new s$1(), l2 = new d();
  return d$1.addScene(l2), l2.addNode(new e2(e$12)), p(d$1, f2).then((e3) => new s2(e3[f$1], e3.origin));
}
export {
  f as toBinaryGLTF
};
