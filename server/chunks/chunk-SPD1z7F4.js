import { hY as C, eP as o$1, mJ as e$1, eN as _, eO as z$1, cy as x$1, eQ as n$1, bb as s$2, fn as F$1, nY as f$3, le as t$1, vx as K, vy as o$2, vz as r$1, vA as l$1, ln as V, o5 as f$4, vB as o$3, vC as V$1, ll as m$1, vD as p$2, vE as E$1, aM as s$3, or as c$1, rZ as M, n1 as r$2, oq as r$3, eA as D, hy as e$2, vF as O, gv as e$3, vG as T, vH as ct } from "./chunk-KFNcxJaF.js";
import { r as r$4, a as a$2, g, c as c$2 } from "./chunk-DicJw-UR.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var t;
!function(t2) {
  t2[t2.JSON = 1313821514] = "JSON", t2[t2.BIN = 5130562] = "BIN";
}(t || (t = {}));
class e {
  constructor(i4, r2) {
    if (!i4)
      throw new Error("GLB requires a JSON gltf chunk");
    this._length = e.HEADER_SIZE, this._length += e.CHUNK_HEADER_SIZE;
    const n = this._textToArrayBuffer(i4);
    if (this._length += this._alignTo(n.byteLength, 4), r2 && (this._length += e.CHUNK_HEADER_SIZE, this._length += r2.byteLength, r2.byteLength % 4))
      throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const h = this._writeChunk(n, 12, t.JSON, 32);
    r2 && this._writeChunk(r2, h, t.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, e.MAGIC, true), this._outView.setUint32(4, e.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t2, e2, i4, r2 = 0) {
    const n = this._alignTo(t2.byteLength, 4);
    for (this._outView.setUint32(e2, n, true), this._outView.setUint32(e2 += 4, i4, true), this._writeArrayBuffer(this._outView.buffer, t2, e2 += 4, 0, t2.byteLength), e2 += t2.byteLength; e2 % 4; )
      r2 && this._outView.setUint8(e2, r2), e2++;
    return e2;
  }
  _writeArrayBuffer(t2, e2, i4, r2, n) {
    new Uint8Array(t2, i4, n).set(new Uint8Array(e2, r2, n), 0);
  }
  _textToArrayBuffer(t2) {
    return new TextEncoder().encode(t2).buffer;
  }
  _alignTo(t2, e2) {
    return e2 * Math.ceil(t2 / e2);
  }
}
e.HEADER_SIZE = 12, e.CHUNK_HEADER_SIZE = 8, e.MAGIC = 1179937895, e.VERSION = 2;
var E, A, R, L$1, o, I, N;
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
}(o || (o = {})), function(E2) {
  E2.OPAQUE = "OPAQUE", E2.MASK = "MASK", E2.BLEND = "BLEND";
}(I || (I = {})), function(E2) {
  E2[E2.NoColor = 0] = "NoColor", E2[E2.FaceColor = 1] = "FaceColor", E2[E2.VertexColor = 2] = "VertexColor";
}(N || (N = {}));
let i$2 = class i {
  constructor(t2, s3, i4, r2, n) {
    this._buffer = t2, this._componentType = i4, this._dataType = r2, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, s3.bufferViews || (s3.bufferViews = []), this.index = s3.bufferViews.length, this._bufferView = { buffer: t2.index, byteLength: -1, target: n };
    const a2 = this._getElementSize();
    a2 >= 4 && n !== R.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a2), s3.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e2) {
    const t2 = this._data.length;
    if (this._data.push(e2), this._accessorIndex >= 0) {
      const s3 = t2 % this._numComponentsForDataType, i4 = this._accessorMin[s3];
      this._accessorMin[s3] = "number" != typeof i4 ? e2 : Math.min(i4, e2);
      const r2 = this._accessorMax[s3];
      this._accessorMax[s3] = "number" != typeof r2 ? e2 : Math.max(r2, e2);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e2(e3, t2) {
      return t2 * Math.ceil(e3 / t2);
    }
    return e2(this.dataSize, 4);
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
  _createTypedArray(e2, t2) {
    switch (this._componentType) {
      case C.BYTE:
        return new Int8Array(e2, t2);
      case C.FLOAT:
        return new Float32Array(e2, t2);
      case C.SHORT:
        return new Int16Array(e2, t2);
      case C.UNSIGNED_BYTE:
        return new Uint8Array(e2, t2);
      case C.UNSIGNED_INT:
        return new Uint32Array(e2, t2);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(e2, t2);
    }
  }
  writeOutToBuffer(e2, t2) {
    this._createTypedArray(e2, t2).set(this._data);
  }
  writeAsync(e2) {
    if (this._asyncWritePromise)
      throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e2.then((e3) => {
      const t2 = new Uint8Array(e3);
      for (let s3 = 0; s3 < t2.length; ++s3)
        this._data.push(t2[s3]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e2) {
    if (this._accessorIndex >= 0)
      throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e2;
    const t2 = this._numComponentsForDataType;
    this._accessorMin = new Array(t2), this._accessorMax = new Array(t2);
  }
  endAccessor() {
    if (this._accessorIndex < 0)
      throw new Error("An accessor was not started, but was attempted to be ended");
    const e2 = this._getElementSize(), t2 = this._numComponentsForDataType, i4 = (this._data.length - this._accessorIndex) / t2;
    if (i4 % 1)
      throw new Error("An accessor was ended with missing component values");
    for (let s3 = 0; s3 < this._accessorMin.length; ++s3)
      "number" != typeof this._accessorMin[s3] && (this._accessorMin[s3] = 0), "number" != typeof this._accessorMax[s3] && (this._accessorMax[s3] = 0);
    const r2 = { byteOffset: e2 * (this._accessorIndex / t2), componentType: this._componentType, count: i4, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
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
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e2) => this._finalizedPromiseResolve = e2);
  }
  async finalize() {
    const e2 = this._bufferView, t2 = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t2.push(this._asyncWritePromise), await Promise.allSettled(t2), this._isFinalized = true, e2.byteOffset = this.getByteOffset(), e2.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
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
let i$1 = class i2 {
  constructor(e2) {
    this._gltf = e2, this._bufferViews = [], this._isFinalized = false, e2.buffers || (e2.buffers = []), this.index = e2.buffers.length;
    const i4 = { byteLength: -1 };
    e2.buffers.push(i4), this._buffer = i4;
  }
  addBufferView(i4, t2, r2) {
    if (this._finalizePromise)
      throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f2 = new i$2(this, this._gltf, i4, t2, r2);
    return this._bufferViews.push(f2), f2;
  }
  getByteOffset(e2) {
    let i4 = 0;
    for (const t2 of this._bufferViews) {
      if (t2 === e2)
        return i4;
      i4 += t2.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e2) {
    const i4 = [];
    for (const t2 of this._bufferViews) {
      if (e2 && t2 === e2)
        return i4;
      i4.push(t2.finalized);
    }
    return i4;
  }
  getArrayBuffer() {
    if (!this._isFinalized)
      throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e2 = this._getTotalSize(), i4 = new ArrayBuffer(e2);
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
      const e2 = this.getArrayBuffer();
      this._buffer.byteLength = e2.byteLength, this._buffer.uri = e2;
    }), this._gltf.extras?.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e2 = 0;
    for (const i4 of this._bufferViews)
      e2 += i4.byteSize;
    return e2;
  }
};
function r(n, t2) {
  if (n.components)
    for (const e2 of n.components)
      e2.faces && "smooth" === e2.shading && a$1(e2, t2);
}
function a$1(s3, i4) {
  null == i4.normal && (i4.normal = new Float32Array(i4.position.length));
  const r2 = s3.faces, { position: a2, normal: c2 } = i4, h = r2.length / 3;
  for (let o2 = 0; o2 < h; ++o2) {
    const s4 = 3 * r2[3 * o2], i5 = 3 * r2[3 * o2 + 1], p2 = 3 * r2[3 * o2 + 2], h2 = o$1(f$2, a2[s4], a2[s4 + 1], a2[s4 + 2]), u2 = o$1(l, a2[i5], a2[i5 + 1], a2[i5 + 2]), g2 = o$1(m, a2[p2], a2[p2 + 1], a2[p2 + 2]), x = e$1(u2, u2, h2), v = e$1(g2, g2, h2), R2 = _(x, x, v);
    c2[s4] += R2[0], c2[s4 + 1] += R2[1], c2[s4 + 2] += R2[2], c2[i5] += R2[0], c2[i5 + 1] += R2[1], c2[i5 + 2] += R2[2], c2[p2] += R2[0], c2[p2 + 1] += R2[1], c2[p2 + 2] += R2[2];
  }
  for (let t2 = 0; t2 < c2.length; t2 += 3)
    o$1(p$1, c2[t2], c2[t2 + 1], c2[t2 + 2]), z$1(p$1, p$1), c2[t2] = p$1[0], c2[t2 + 1] = p$1[1], c2[t2 + 2] = p$1[2];
}
function c(n) {
  const { vertexSpace: t2 } = n;
  if (t2.isRelative)
    return t2.getOriginPoint(n.spatialReference);
  const { extent: e2 } = n, o2 = e2.xmax - e2.width / 2, s3 = e2.ymax - e2.height / 2, r2 = e2.zmin;
  return new x$1({ x: o2, y: s3, z: r2, spatialReference: e2.spatialReference });
}
const f$2 = n$1(), l = n$1(), m = n$1(), p$1 = n$1();
const L = s$2.getLogger("gltf");
class y {
  constructor(e2, t2, s3) {
    this.params = {}, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e2.copyright, generator: e2.generator }, extras: { options: t2, binChunkBuffer: null, promises: [] } }, s3 && (this.params = s3), this._addScenes(e2);
  }
  _addScenes(e2) {
    this.gltf.scene = e2.defaultScene;
    const t2 = this.gltf.extras, s3 = t2.options.bufferOutputType === E.GLB || t2.options.imageOutputType === A.GLB;
    s3 && (t2.binChunkBuffer = new i$1(this.gltf)), e2.forEachScene((e3) => {
      this._addScene(e3);
    }), s3 && t2.binChunkBuffer.finalize();
  }
  _addScene(e2) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t2 = {};
    e2.name && (t2.name = e2.name), e2.forEachNode((e3) => {
      t2.nodes || (t2.nodes = []), t2.nodes.push(...this._addNodes(e3));
    }), this.gltf.scenes.push(t2);
  }
  _addNodes(e2) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t2 = {};
    e2.name && (t2.name = e2.name);
    const s3 = e2.translation;
    F$1(s3, f$3) || (t2.translation = t$1(s3));
    const r2 = e2.rotation;
    K(r2, o$2) || (t2.rotation = r$1(r2));
    const i4 = e2.scale;
    F$1(i4, l$1) || (t2.scale = t$1(i4));
    const a2 = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t2), e2.mesh && e2.mesh.vertexAttributes.position) {
      const s4 = this._createMeshes(e2.mesh), r3 = [a2];
      if (1 === s4.length)
        this._addMesh(t2, s4[0]);
      else
        for (const e3 of s4) {
          const t3 = {};
          this._addMesh(t3, e3), r3.push(this.gltf.nodes.length), this.gltf.nodes.push(t3);
        }
      return r3;
    }
    return e2.forEachNode((e3) => {
      t2.children || (t2.children = []), t2.children.push(...this._addNodes(e3));
    }), [a2];
  }
  _addMesh(e2, t2) {
    this.gltf.meshes ??= [];
    const s3 = this.gltf.meshes.length;
    this.gltf.meshes.push(t2), e2.mesh = s3;
  }
  _createMeshes(t2) {
    const s3 = this.gltf.extras, r$12 = s3.options.bufferOutputType === E.GLB;
    let n;
    n = r$12 ? s3.binChunkBuffer : new i$1(this.gltf), this.params.origin || (this.params.origin = c(t2));
    const { ignoreLocalTransform: l2 } = this.params, c$12 = l2 ? null : t2.transform, { vertexSpace: h, spatialReference: u2 } = t2, f2 = t2.vertexAttributes;
    let p2 = null;
    if ("local" === h.type) {
      const e2 = V(u2);
      f$4(F, c$12?.localMatrix ?? o$3, [e2, e2, e2]), p2 = V$1(f2, F);
    } else {
      const e2 = l2 ? h.isRelative ? new m$1({ origin: t$1(h.origin) }) : new p$2() : h;
      p2 = E$1(f2, e2, c$12, this.params.origin, { geographic: this.params.geographic, unit: "meters" });
    }
    if (null == p2)
      throw new s$3("Error during gltf export.");
    f2.position && p2.position === f2.position && (p2.position = f2.position.slice()), f2.normal && p2.normal === f2.normal && (p2.normal = f2.normal.slice()), f2.tangent && p2.tangent === f2.tangent && (p2.tangent = f2.tangent.slice()), r(t2, p2), this._flipYZAxis(p2);
    const _2 = n.addBufferView(C.FLOAT, L$1.VEC3, R.ARRAY_BUFFER);
    let b, I2, N2, B;
    p2.normal && (b = n.addBufferView(C.FLOAT, L$1.VEC3, R.ARRAY_BUFFER)), f2.uv && (I2 = n.addBufferView(C.FLOAT, L$1.VEC2, R.ARRAY_BUFFER)), p2.tangent && (N2 = n.addBufferView(C.FLOAT, L$1.VEC4, R.ARRAY_BUFFER)), f2.color && (B = n.addBufferView(C.UNSIGNED_BYTE, L$1.VEC4, R.ARRAY_BUFFER)), _2.startAccessor("POSITION"), b && b.startAccessor("NORMAL"), I2 && I2.startAccessor("TEXCOORD_0"), N2 && N2.startAccessor("TANGENT"), B && B.startAccessor("COLOR_0");
    const C$1 = p2.position.length / 3, { position: v, normal: L2, tangent: y2 } = p2, { color: j, uv: k } = f2;
    for (let e2 = 0; e2 < C$1; ++e2)
      _2.push(v[3 * e2]), _2.push(v[3 * e2 + 1]), _2.push(v[3 * e2 + 2]), b && null != L2 && (b.push(L2[3 * e2]), b.push(L2[3 * e2 + 1]), b.push(L2[3 * e2 + 2])), I2 && null != k && (I2.push(k[2 * e2]), I2.push(k[2 * e2 + 1])), N2 && null != y2 && (N2.push(y2[4 * e2]), N2.push(y2[4 * e2 + 1]), N2.push(y2[4 * e2 + 2]), N2.push(y2[4 * e2 + 3])), B && null != j && (B.push(j[4 * e2]), B.push(j[4 * e2 + 1]), B.push(j[4 * e2 + 2]), B.push(j[4 * e2 + 3]));
    const V$2 = _2.endAccessor(), D2 = this._addAccessor(_2.index, V$2);
    let G, U, Y, P, z;
    if (b) {
      const e2 = b.endAccessor();
      G = this._addAccessor(b.index, e2);
    }
    if (I2) {
      const e2 = I2.endAccessor();
      U = this._addAccessor(I2.index, e2);
    }
    if (N2) {
      const e2 = N2.endAccessor();
      Y = this._addAccessor(N2.index, e2);
    }
    if (B) {
      const e2 = B.endAccessor();
      P = this._addAccessor(B.index, e2);
    }
    const Z = [];
    return t2.components && t2.components.length > 0 && t2.components[0].faces ? (z = n.addBufferView(C.UNSIGNED_INT, L$1.SCALAR, R.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(z, t2.components, Z, D2, G, U, Y, P)) : this._addMeshVertexNonIndexed(t2.components, Z, D2, G, U, Y, P), _2.finalize(), b && b.finalize(), I2 && I2.finalize(), N2 && N2.finalize(), z && z.finalize(), B && B.finalize(), r$12 || n.finalize(), Z;
  }
  _flipYZAxis({ position: e2, normal: t2, tangent: s3 }) {
    this._flipYZBuffer(e2, 3), this._flipYZBuffer(t2, 3), this._flipYZBuffer(s3, 4);
  }
  _flipYZBuffer(e2, t2) {
    if (null != e2)
      for (let s3 = 1, r2 = 2; s3 < e2.length; s3 += t2, r2 += t2) {
        const t3 = e2[s3], i4 = e2[r2];
        e2[s3] = i4, e2[r2] = -t3;
      }
  }
  _addMaterial(e2) {
    if (null === e2)
      return;
    const t2 = this._materialMap.indexOf(e2);
    if (-1 !== t2)
      return t2;
    this.gltf.materials || (this.gltf.materials = []);
    const s3 = {};
    switch (e2.alphaMode) {
      case "mask":
        s3.alphaMode = I.MASK;
        break;
      case "auto":
      case "blend":
        s3.alphaMode = I.BLEND;
    }
    0.5 !== e2.alphaCutoff && (s3.alphaCutoff = e2.alphaCutoff), e2.doubleSided && (s3.doubleSided = e2.doubleSided), s3.pbrMetallicRoughness = {};
    const r2 = (e3) => e3 ** 2.1, i4 = (e3) => {
      const t3 = e3.toRgba();
      return t3[0] = r2(t3[0] / 255), t3[1] = r2(t3[1] / 255), t3[2] = r2(t3[2] / 255), t3;
    };
    if (null != e2.color && (s3.pbrMetallicRoughness.baseColorFactor = i4(e2.color)), null != e2.colorTexture && (s3.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e2.colorTexture, e2.colorTextureTransform)), null != e2.normalTexture && (s3.normalTexture = this._createTextureInfo(e2.normalTexture, e2.normalTextureTransform)), e2 instanceof c$1) {
      if (null != e2.emissiveTexture && (s3.emissiveTexture = this._createTextureInfo(e2.emissiveTexture, e2.emissiveTextureTransform)), null != e2.emissiveColor) {
        const t3 = i4(e2.emissiveColor);
        s3.emissiveFactor = [t3[0], t3[1], t3[2]];
      }
      null != e2.occlusionTexture && (s3.occlusionTexture = this._createTextureInfo(e2.occlusionTexture, e2.occlusionTextureTransform)), null != e2.metallicRoughnessTexture && (s3.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e2.metallicRoughnessTexture, e2.metallicRoughnessTextureTransform)), s3.pbrMetallicRoughness.metallicFactor = e2.metallic, s3.pbrMetallicRoughness.roughnessFactor = e2.roughness;
    } else
      s3.pbrMetallicRoughness.metallicFactor = 1, s3.pbrMetallicRoughness.roughnessFactor = 1, L.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const a2 = this.gltf.materials.length;
    return this.gltf.materials.push(s3), this._materialMap.push(e2), a2;
  }
  _createTextureInfo(e2, t2) {
    const s3 = { index: this._addTexture(e2) };
    return t2 ? (s3.extensions || (s3.extensions = {}), s3.extensions.KHR_texture_transform = { scale: t2.scale, offset: t2.offset, rotation: M(t2.rotation) }, s3) : s3;
  }
  _addTexture(e2) {
    const t2 = this.gltf.textures ?? [];
    return this.gltf.textures = t2, r$2(this._textureMap, e2, () => {
      const s3 = { sampler: this._addSampler(e2), source: this._addImage(e2) }, r2 = t2.length;
      return t2.push(s3), r2;
    });
  }
  _addImage(e2) {
    const t2 = this._imageMap.get(e2);
    if (null != t2)
      return t2;
    this.gltf.images || (this.gltf.images = []);
    const s3 = {};
    if (e2.url)
      s3.uri = e2.url;
    else {
      const t3 = e2.data;
      s3.extras = t3;
      for (let e3 = 0; e3 < this.gltf.images.length; ++e3)
        if (t3 === this.gltf.images[e3].extras)
          return e3;
      const r3 = this.gltf.extras;
      switch (r3.options.imageOutputType) {
        case A.GLB: {
          const e3 = r3.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE, L$1.SCALAR);
          if (r$3(t3))
            null != t3.data && e3.writeOutToBuffer(t3.data, 0);
          else {
            const r4 = r$4(t3).then(({ data: e4, type: t4 }) => (s3.mimeType = t4, e4));
            e3.writeAsync(r4).then(() => {
              e3.finalize();
            });
          }
          s3.bufferView = e3.index;
          break;
        }
        case A.DataURI:
          if (r$3(t3)) {
            L.warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s3.uri = a$2(t3);
          break;
        default:
          if (r$3(t3)) {
            L.warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          r3.promises.push(r$4(t3).then(({ data: e3, type: t4 }) => {
            s3.uri = e3, s3.mimeType = t4;
          }));
      }
    }
    const r2 = this.gltf.images.length;
    return this.gltf.images.push(s3), this._imageMap.set(e2, r2), r2;
  }
  _addSampler(e2) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t2 = D.REPEAT, s3 = D.REPEAT;
    if ("string" == typeof e2.wrap)
      switch (e2.wrap) {
        case "clamp":
          t2 = D.CLAMP_TO_EDGE, s3 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D.MIRRORED_REPEAT, s3 = D.MIRRORED_REPEAT;
      }
    else {
      switch (e2.wrap.vertical) {
        case "clamp":
          s3 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s3 = D.MIRRORED_REPEAT;
      }
      switch (e2.wrap.horizontal) {
        case "clamp":
          t2 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t2 = D.MIRRORED_REPEAT;
      }
    }
    const r2 = { wrapS: t2, wrapT: s3 };
    for (let a2 = 0; a2 < this.gltf.samplers.length; ++a2)
      if (JSON.stringify(r2) === JSON.stringify(this.gltf.samplers[a2]))
        return a2;
    const i4 = this.gltf.samplers.length;
    return this.gltf.samplers.push(r2), i4;
  }
  _addAccessor(e2, t2) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s3 = { bufferView: e2, byteOffset: t2.byteOffset, componentType: t2.componentType, count: t2.count, type: t2.type, min: t2.min, max: t2.max, name: t2.name };
    t2.normalized && (s3.normalized = true);
    const r2 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s3), r2;
  }
  _addMeshVertexIndexed(e2, t2, s3, r2, i4, a2, o2, n) {
    const l2 = /* @__PURE__ */ new Map();
    for (const c2 of t2) {
      e2.startAccessor("INDICES");
      for (let s4 = 0; s4 < c2.faces.length; ++s4)
        e2.push(c2.faces[s4]);
      const t3 = e2.endAccessor(), h = { attributes: { POSITION: r2 }, indices: this._addAccessor(e2.index, t3), material: this._addMaterial(c2.material) };
      i4 && "flat" !== c2.shading && (h.attributes.NORMAL = i4), a2 && (h.attributes.TEXCOORD_0 = a2), o2 && "flat" !== c2.shading && (h.attributes.TANGENT = o2), n && (h.attributes.COLOR_0 = n);
      const u2 = l2.get(c2.name);
      if (u2)
        u2.primitives.push(h);
      else {
        const e3 = { name: c2.name, primitives: [h] };
        l2.set(c2.name, e3), s3.push(e3);
      }
    }
  }
  _addMeshVertexNonIndexed(e2, t2, s3, r2, i4, a2, o2) {
    const n = { primitives: [] };
    t2.push(n);
    const l2 = { attributes: { POSITION: s3 } };
    r2 && (l2.attributes.NORMAL = r2), i4 && (l2.attributes.TEXCOORD_0 = i4), a2 && (l2.attributes.TANGENT = a2), o2 && (l2.attributes.COLOR_0 = o2), e2 && (l2.material = this._addMaterial(e2[0].material)), n.primitives.push(l2);
  }
}
const F = e$2();
let s$1 = class s {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e2) {
    if (this._scenes.includes(e2))
      throw new Error("Scene already added");
    this._scenes.push(e2);
  }
  removeScene(s3) {
    O(this._scenes, s3);
  }
  forEachScene(e2) {
    this._scenes.forEach(e2);
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
class i3 {
  constructor(s3) {
    this.mesh = s3, this.name = "", this.translation = n$1(), this.rotation = e$3(), this.scale = t$1(l$1), this._nodes = [];
  }
  addNode(s3) {
    if (this._nodes.includes(s3))
      throw new Error("Node already added");
    this._nodes.push(s3);
  }
  forEachNode(s3) {
    this._nodes.forEach(s3);
  }
  set rotationAngles(t2) {
    T(this.rotation, t2[0], t2[1], t2[2]);
  }
}
const a = "model.gltf", f$1 = "model.glb";
async function u(u2, p2, m2) {
  const c2 = new y(u2, p2 = p2 || {}, m2);
  let l2 = c2.params;
  l2 ? l2.origin || (l2.origin = new x$1({ x: -1, y: -1, z: -1 })) : l2 = { origin: new x$1({ x: -1, y: -1, z: -1 }) };
  const g$1 = l2.origin, y$1 = c2.gltf, d2 = y$1.extras?.promises ?? [];
  let j = 1, x = 1, b = null;
  await Promise.allSettled(d2);
  const w = { origin: g$1 };
  delete y$1.extras;
  const B = "number" == typeof p2.jsonSpacing ? p2.jsonSpacing : 4, h = JSON.stringify(y$1, (e2, t2) => {
    if ("extras" !== e2) {
      if (t2 instanceof ArrayBuffer) {
        if (g(t2))
          switch (p2.imageOutputType) {
            case A.DataURI:
            case A.GLB:
              break;
            case A.External:
            default: {
              const e3 = `img${x}.png`;
              return x++, w[e3] = t2, e3;
            }
          }
        switch (p2.bufferOutputType) {
          case E.DataURI:
            return c$2(t2);
          case E.GLB:
            if (b)
              throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (b = t2);
          case E.External:
          default: {
            const e3 = `data${j}.bin`;
            return j++, w[e3] = t2, e3;
          }
        }
      }
      return t2;
    }
  }, B);
  return p2.bufferOutputType === E.GLB || p2.imageOutputType === A.GLB ? w[f$1] = new e(h, b).buffer : w[a] = h, w;
}
function p(e2, t2) {
  return u(e2, { bufferOutputType: E.GLB, imageOutputType: A.GLB, jsonSpacing: 0 }, t2);
}
class s2 {
  constructor(e2, o2) {
    this._file = { type: "model/gltf-binary", data: e2 }, this.origin = o2;
  }
  buffer() {
    return Promise.resolve(this._file);
  }
  download(o2) {
    ct(new Blob([this._file.data], { type: this._file.type }), o2);
  }
}
function f(e2, f2) {
  const d$1 = new s$1(), l2 = new d();
  return d$1.addScene(l2), l2.addNode(new i3(e2)), p(d$1, f2).then((e3) => new s2(e3[f$1], e3.origin));
}
export {
  f as toBinaryGLTF
};
