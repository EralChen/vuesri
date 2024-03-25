import { wR as u, b$ as u$1, wS as t, lk as e$1, wT as r$1, aO as s$2, wU as t$1, wV as i, j2 as n, cU as s$3, wW as T$4, vS as G$2, vW as _$2, oL as j$1, sA as n$1, h3 as g$2, rQ as e$2, fr as e$3, aV as e$4, aX as y$2, a_ as c$3, bZ as S$3, h_ as I$1, fL as I$2, cm as e$5, b0 as has, b2 as l$1, wX as r$2, cd as b$2, he as O$1, wY as O$2, wZ as it, lZ as w$3, eG as ge, w_ as de, eE as e$6, pt as u$2, fq as D$3, w$ as n$2, x0 as r$4, es as e$7, mN as o$2, fp as N$2, pc as s$5, ps as a$3, fv as I$3, aP as a$4, j5 as _$3, x1 as y$3, x2 as p$2, dH as _$4, bD as a$5, x3 as w$4, x4 as $$2, x5 as H$2, tr as n$3, aW as n$4, g4 as a$6, kU as e$8, x6 as O$3, pa as s$7, x7 as W$2, kY as o$3, x8 as u$3, kS as d$4, x9 as L$1, fE as z$2, aN as K$2, qu as P$2, fX as q$1, xa as ye, li as a$7, xb as f$2, xc as L$2, gs as l$3, aI as r$5, l_ as Z$1, xd as Y$2, xe as r$6, xf as X$2, xg as s$8, xh as k$4, nQ as g$3, vI as U$1, xi as O$4, xj as F$2, vy as p$3, lb as x$3, kH as s$9, f_ as v, aF as e$9, aG as u$4, xk as I$4, fU as n$5, wq as A$1, xl as H$3, fM as Z$2, wm as i$1, ce as d$5, bX as P$3, cf as C$2, xm as o$4, aT as s$a, b6 as u$5, xn as u$6, vK as i$2, xo as k$5, xp as g$4, ww as c$5, xq as I$5, xr as d$6, rL as C$3, fG as t$2, bQ as V$2, eO as a$9, c8 as u$7, fc as e$a, fK as n$6, hU as h$5, bO as G$3, eg as u$8, xs as t$3, xt as w$5, qg as b$3, qh as r$7, xu as r$8, xv as n$7, aQ as U$2, xw as m$2, bC as L$3 } from "./chunk-ejFG4zJ0.js";
import { a as a$2, s as s$6 } from "./chunk-tcpOk1v2.js";
import { d as d$3, s as s$4, h as h$4, o as o$1, r as r$3, l as l$2, c as c$4, a as a$8 } from "./chunk-LITpsmk3.js";
import { s as s$b } from "./chunk-wg0ozFEK.js";
import { assetMapFromAssetMapsJSON as S$4, extractMesh as h$6 } from "./chunk-9u8dCT92.js";
import c$6 from "./chunk-IVubHwAV.js";
var e, s$1;
!function(e2) {
  e2[e2.KTX2 = 1] = "KTX2", e2[e2.Basis = 2] = "Basis", e2[e2.DDS_S3TC = 4] = "DDS_S3TC", e2[e2.PNG = 8] = "PNG", e2[e2.JPG = 16] = "JPG", e2[e2.KTX_ETC2 = 32] = "KTX_ETC2";
}(e || (e = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Color = 1] = "Color", e2[e2.MetallicRoughness = 2] = "MetallicRoughness", e2[e2.Normal = 4] = "Normal", e2[e2.Occlusion = 8] = "Occlusion", e2[e2.Emissive = 16] = "Emissive", e2[e2.AlphaMask = 32] = "AlphaMask", e2[e2.ColorTextures = 19] = "ColorTextures", e2[e2.GeometryTextures = 36] = "GeometryTextures", e2[e2.GeometryTexturesPBR = 44] = "GeometryTexturesPBR", e2[e2.AllTextures = 37] = "AllTextures", e2[e2.AllTexturesPBR = 63] = "AllTexturesPBR";
}(s$1 || (s$1 = {}));
async function c$2(o2) {
  const t$12 = [], r2 = [];
  if (null == o2) {
    return { material: { alphaMode: "opaque", alphaCutoff: 0.1, doubleSided: true, cullFace: 0, normalTextureId: -1, emissiveTextureId: -1, occlusionTextureId: -1, emissiveFactor: [0, 0, 0], metallicRoughness: { baseColorFactor: [1, 1, 1, 1], baseColorTextureId: -1, metallicRoughnessTextureId: -1, metallicFactor: 0, roughnessFactor: 0.6000000238418579 }, wrapTextures: false, hasParametersFromSource: true }, requiredTextures: t$12, textureData: r2 };
  }
  const a3 = d$2(o2);
  "auto" === o2.alphaMode && console.warn('alphaMode "auto" not supported by I3S PBRMaterial - defaulting to "blend".');
  const n2 = u({ normalTexture: o2.normalTexture, emissiveTexture: a3 ? o2.emissiveTexture : null, emissiveFactor: a3 ? u$1.toUnitRGB(o2.emissiveColor) : null, occlusionTexture: a3 ? o2.occlusionTexture : null, metallicRoughnessTexture: a3 ? o2.metallicRoughnessTexture : null, metallicFactor: a3 ? o2.metallic : null, roughnessFactor: a3 ? o2.roughness : null }), c2 = n2 ? t[0] : a3 ? o2.metallic : 0, g2 = n2 ? t[1] : a3 ? o2.roughness : 0;
  return { material: { alphaMode: "auto" === o2.alphaMode ? "blend" : o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, cullFace: o2.doubleSided ? e$1.None : e$1.Back, normalTextureId: await m$1(o2.normalTexture, t$12, r2, s$1.Normal), emissiveTextureId: a3 ? await m$1(o2.emissiveTexture, t$12, r2, s$1.Emissive) : -1, occlusionTextureId: a3 ? await m$1(o2.occlusionTexture, t$12, r2, s$1.Occlusion) : -1, emissiveFactor: a3 && null != o2.emissiveColor ? u$1.toUnitRGB(o2.emissiveColor) : [0, 0, 0], metallicRoughness: { baseColorFactor: null != o2.color ? u$1.toUnitRGBA(o2.color) : [1, 1, 1, 1], baseColorTextureId: await m$1(o2.colorTexture, t$12, r2, s$1.Color), metallicRoughnessTextureId: a3 ? await m$1(o2.metallicRoughnessTexture, t$12, r2, s$1.MetallicRoughness) : -1, metallicFactor: c2, roughnessFactor: g2 }, wrapTextures: true, hasParametersFromSource: n2 }, requiredTextures: t$12, textureData: r2 };
}
async function m$1(e$12, s2, l2, i$12) {
  if (null == e$12)
    return -1;
  const u2 = l2.length, c2 = e$12.data, m2 = e$12.url;
  if (null != c2) {
    if (c2 instanceof HTMLImageElement || c2 instanceof HTMLCanvasElement) {
      const e$13 = r$1(c2);
      return l2.push({ id: u2, usage: i$12, data: e$13, encoding: e.PNG, downsampled: false }), s2.push({ id: u2, usage: i$12, encodings: [{ name: void 0, encoding: e.PNG }] }), u2;
    }
    if (c2 instanceof HTMLVideoElement)
      return -1;
    if (c2 instanceof ImageData)
      throw new s$2("ImageData textures not supported yet for client side I3S nodes");
    if (c2 instanceof t$1)
      throw new s$2("EncodedMeshTexture textures not supported yet for client side I3S nodes");
  } else if (null != m2) {
    const e$13 = new Image();
    e$13.src = m2;
    const o2 = await i(e$13, e$13.src, false, void 0), r2 = r$1(o2);
    return l2.push({ id: u2, usage: i$12, data: r2, encoding: e.PNG, downsampled: false }), s2.push({ id: u2, usage: i$12, encodings: [{ name: void 0, encoding: e.PNG }] }), u2;
  }
  return -1;
}
function d$2(e2) {
  return e2.hasOwnProperty("metallicRoughnessTexture");
}
let h$3 = class h {
  constructor(e2, t2, o2, r2) {
    this._uid = e2, this._worker = r2, this._id2Meta = /* @__PURE__ */ new Map(), this._oid2Meta = /* @__PURE__ */ new Map(), this._indexSR = t2.indexSR, this._vertexSR = t2.vertexSR, this._renderSR = t2.renderSR, this._localMode = t2.localMode, this._memCache = o2.newCache(`sl-client-mesh-data-${this._uid}`);
  }
  get uid() {
    return this._uid;
  }
  get worker() {
    return this._worker;
  }
  get indexSR() {
    return this._indexSR;
  }
  get renderSR() {
    return this._renderSR;
  }
  createMeshNodeInfo(e2, t2) {
    const o2 = `mesh${t2}`, r2 = e2.extent, n2 = r2.spatialReference, s2 = this._indexSR, a3 = f$1(r2, e2.origin);
    a$2(a3, n2, a3, s2);
    return { type: "mesh", id: o2, version: g$1(e2), oid: t2, mbs: a3, componentNodeIds: [], unloadedMesh: e2, nodeIndex: null, loadMeshPromise: null };
  }
  addMeshNode(t2, o2) {
    if (null != this.getMeshNodeIndex(o2.oid))
      throw new s$2(`I3SClientNodeLoader: client side mesh for feature oid=${o2.oid} already exists`);
    o2.nodeIndex = t2, this._id2Meta.set(o2.id, o2), this._oid2Meta.set(o2.oid, o2);
  }
  getMeshNodeIndex(e2) {
    const t2 = this._oid2Meta.get(e2);
    return null == t2 || "mesh" !== t2.type ? null : t2.nodeIndex;
  }
  removeNode(e2) {
    const t2 = this._id2Meta.get(e2);
    null != t2 && (this._id2Meta.delete(e2), "mesh" === t2.type && this._oid2Meta.delete(t2.oid));
  }
  async loadNodeJSON(t2) {
    const o2 = this._id2Meta.get(t2);
    if (null == o2)
      throw new s$2(`I3SClientNodeLoader::loadNodeJSON unable to find node ${t2}`);
    switch (o2.type) {
      case "mesh":
        return this._loadMeshNodeJSON(o2);
      case "mesh-component":
        return this._loadMeshComponentNodeJSON(o2);
      default:
        throw new s$2(`I3SClientNodeLoader::loadNodeJSON unable to handle node ${t2}`);
    }
  }
  async _loadMeshNodeJSON(e2) {
    const t2 = e2.id, o2 = (await this._getMeshData(e2)).loadedMesh;
    if (null == o2.components || 0 === o2.components.length)
      return { id: t2, version: null, mbs: e2.mbs, obb: null, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: null };
    const r2 = [], n2 = o2.components;
    for (let s2 = 0; s2 < n2.length; ++s2) {
      const o3 = `${t2}-component${s2}`, n3 = { type: "mesh-component", id: o3, mbs: e2.mbs, componentIndex: s2, meshNodeInfo: e2, textureData: /* @__PURE__ */ new Map() };
      this._id2Meta.set(n3.id, n3), e2.componentNodeIds.push(o3), r2.push({ id: n3.id, href: null, mbs: n3.mbs, obb: null });
    }
    return { id: t2, version: null, mbs: e2.mbs, obb: null, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: r2 };
  }
  updateNodeIndex(e2, t2, o2) {
    const r2 = this._id2Meta.get(e2);
    r2 && "mesh" === r2.type && (r2.nodeIndex = o2);
  }
  async _loadMeshComponentNodeJSON(e2) {
    return { id: e2.id, version: e2.meshNodeInfo.version, mbs: e2.mbs, obb: null, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: null, isEmpty: false };
  }
  async loadNodeData(o2, n$12) {
    const s2 = this._id2Meta.get(o2);
    if (null == s2 || "mesh-component" !== s2.type)
      throw new s$2(`Failed to load client node data for node ${o2} (unexpected node info)`);
    const a3 = s2.meshNodeInfo, i2 = await this._getMeshData(a3), l2 = i2.loadedMesh, d2 = a3.oid;
    if (null == l2.components)
      throw new s$2(`Failed to load client node data for node ${o2} (unexpected null reference)`);
    const u2 = l2.components[s2.componentIndex], { material: m2, requiredTextures: h3, textureData: f2 } = await c$2(u2.material);
    if (null != f2)
      for (const e2 of f2)
        null != e2 && s2.textureData.set(e2.id, e2);
    const y2 = { params: { material: m2 }, type: "ArrayBufferView" }, { vertexSpace: g2, origin: M2, transform: S2 } = l2, _2 = [M2.x, M2.y, M2.z ?? 0], w2 = { featureDataPosition: _2, featureIds: [], geometries: [y2] }, b3 = { attributeData: {}, loadedAttributes: [] };
    i2.projectionPromise || (n(this._worker, "SceneLayerWorker is needed to project mesh"), i2.projectionPromise = this._worker.project({ positions: l2.vertexAttributes.position, localMatrix: S2?.localMatrix, vertexSpace: g2.toJSON(), origin: _2, inSpatialReference: l2.spatialReference.toJSON(), outSpatialReference: this._vertexSR.toJSON(), localMode: this._localMode }, n$12));
    const { projected: N2, original: v2 } = await i2.projectionPromise;
    l2.vertexAttributes.position = v2;
    const { transformed: D2, original: j2 } = await p$1(u2, i2, this._worker, n$12);
    l2.vertexAttributes.normal = j2, s$3(n$12);
    const { geometryBuffer: I2, geometryDescriptor: R2 } = x$2(N2, u2.faces, D2, l2.vertexAttributes.uv, l2.vertexAttributes.color, d2);
    return { geometryData: w2, attributeDataInfo: b3, geometryBuffer: I2, geometryDescriptor: R2, requiredTextures: h3, textureData: f2, normalReferenceFrame: this._vertexSR.isGeographic ? "east-north-up" : "vertex-reference-frame" };
  }
  async loadAttributes(e2, t2, o2) {
    const r2 = e2.numFeatures, n2 = {};
    for (const { field: { name: s2 } } of t2)
      n2[s2] = new Array(r2);
    return n2;
  }
  async loadTextures(e2, t2, o2) {
    const r2 = e2.id, n2 = this._id2Meta.get(r2);
    if (null == n2 || "mesh-component" !== n2.type)
      throw new Error(`Failed to load textures for node ${e2.id} (unexpected node info)`);
    const s2 = [];
    for (const a3 of t2)
      s2.push(n2.textureData.get(a3.id) || null);
    return s2;
  }
  async _getMeshData(e2) {
    const t2 = e2.version, r2 = this._memCache.get(t2);
    if (null == r2) {
      if (null != e2.loadMeshPromise)
        return e2.loadMeshPromise;
      const r3 = async (r4, n2) => {
        const s2 = e2.unloadedMesh.clone();
        try {
          await s2.load();
        } catch (l2) {
          n2(l2);
        }
        const a3 = s2.memoryUsage, i2 = { loadedMesh: s2, projectionPromise: null, normalsTransformPromise: null, usedMemoryInBytes: a3 };
        this._memCache.put(t2, i2, a3, e$2), e2.loadMeshPromise = null, r4(i2);
      };
      return e2.loadMeshPromise = new Promise((e3, t3) => r3(e3, t3)), e2.loadMeshPromise;
    }
    return r2;
  }
};
function f$1(e2, t2) {
  const { spatialReference: o2 } = e2, r2 = [1, -1], n2 = [0.5 * e2.width, 0.5 * e2.height, e2.hasZ ? 0.5 * (e2.zmax - e2.zmin) : 0], s2 = o2.isGeographic ? o2.metersPerUnit : 1, a3 = e2.center;
  let i2 = 0;
  if (e2.hasZ)
    for (let l2 = 0; l2 < 2; ++l2)
      for (let e3 = 0; e3 < 2; ++e3)
        for (let o3 = 0; o3 < 2; ++o3) {
          const d2 = (a3.x + r2[l2] * n2[0] - t2.x) * s2, u2 = (a3.y + r2[e3] * n2[1] - t2.y) * s2, m2 = a3.z + r2[o3] * n2[2] - t2.z;
          i2 = Math.max(d2 * d2 + u2 * u2 + m2 * m2, i2);
        }
  else
    for (let l2 = 0; l2 < 2; ++l2)
      for (let e3 = 0; e3 < 2; ++e3) {
        const o3 = (a3.x + r2[l2] * n2[0] - t2.x) * s2, d2 = (a3.y + r2[e3] * n2[1] - t2.y) * s2;
        i2 = Math.max(o3 * o3 + d2 * d2, i2);
      }
  return T$4([t2.x, t2.y, t2.z], Math.sqrt(i2));
}
async function p$1(e2, o2, r2, n$12) {
  const { transform: d2, vertexAttributes: u2 } = o2.loadedMesh, m2 = "source" === e2.shading ? u2.normal : null;
  if (!(null != m2 && null != d2 && (0 !== d2.rotationAngle || !G$2(d2.scale, _$2))))
    return { transformed: m2, original: u2.normal };
  if (!o2.normalsTransformPromise) {
    n(r2, "SceneLayerWorker is needed to transform mesh normals");
    const e3 = e$3();
    j$1(e3, d2.localMatrix), o2.normalsTransformPromise = r2.transformNormals({ normalMatrix: e3, normals: m2 }, n$12);
  }
  return o2.normalsTransformPromise;
}
function x$2(e2, t2, o2, r2, n2, s2) {
  const a3 = 1, i2 = t2.length / 3, l2 = 3 * i2;
  let d2 = 0, u2 = 0, m2 = false, c2 = 0, h3 = false, f2 = 0, p2 = false, x2 = 0, g2 = 0, b3 = 0;
  d2 += M$3, d2 += M$3, u2 = d2, d2 += 3 * l2 * S$2, null != o2 && (m2 = true, c2 = d2, d2 += 3 * l2 * S$2), null != r2 && (h3 = true, f2 = d2, d2 += 2 * l2 * S$2), null != n2 && (p2 = true, x2 = d2, d2 += 4 * l2 * _$1), g2 = d2, d2 += a3 * w$2, b3 = d2, d2 += 2 * a3 * M$3;
  const N2 = new ArrayBuffer(d2), v2 = new Uint8Array(N2);
  y$1(v2, 0, l2), y$1(v2, M$3, a3);
  const D2 = new Float32Array(N2, u2), j2 = null != o2 ? new Float32Array(N2, c2) : null, I2 = null != r2 ? new Float32Array(N2, f2) : null, R2 = null != n2 ? new Uint8Array(N2, x2) : null;
  for (let y2 = 0; y2 < i2; ++y2) {
    const s3 = 3 * y2;
    for (let a4 = 0; a4 < 3; ++a4) {
      const i3 = t2[s3 + a4], l3 = 3 * i3, d3 = 9 * y2 + 3 * a4;
      if (D2[d3] = e2[l3], D2[d3 + 1] = e2[l3 + 1], D2[d3 + 2] = e2[l3 + 2], null != j2 && (j2[d3] = o2[l3], j2[d3 + 1] = o2[l3 + 1], j2[d3 + 2] = o2[l3 + 2]), null != I2) {
        const e3 = 2 * i3, t3 = 6 * y2 + 2 * a4;
        I2[t3] = r2[e3], I2[t3 + 1] = r2[e3 + 1];
      }
      if (null != R2) {
        const e3 = 4 * i3, t3 = 12 * y2 + 4 * a4;
        R2[t3] = n2[e3], R2[t3 + 1] = n2[e3 + 1], R2[t3 + 2] = n2[e3 + 2], R2[t3 + 3] = n2[e3 + 3];
      }
    }
  }
  y$1(v2, g2, s2), y$1(v2, g2 + M$3, s2 / 2 ** 32), y$1(v2, b3, 0), y$1(v2, b3 + M$3, i2 - 1);
  return { geometryBuffer: N2, geometryDescriptor: { isDraco: false, isLegacy: true, color: p2, normal: m2, uv0: h3, uvRegion: false, featureIndex: true } };
}
function y$1(e2, t2, o2) {
  e2[t2] = 255 & o2, e2[t2 + 1] = 255 & o2 >> 8, e2[t2 + 2] = 255 & o2 >> 16, e2[t2 + 3] = 255 & o2 >> 24;
}
function g$1(e2) {
  const t2 = e2.metadata.displaySource?.source;
  if (null == t2 || !Array.isArray(t2) || !t2.length || t2[0] instanceof File)
    return n$1();
  const o2 = t2;
  let r2 = "";
  for (const n2 of o2)
    r2 += n2.makeHash();
  return r2 + JSON.stringify(null != e2.transform ? e2.transform.toJSON() : "") + (g$2(e2.vertexSpace) ? JSON.stringify(e2.vertexSpace.origin) : "");
}
const M$3 = 4, S$2 = 4, _$1 = 1, w$2 = 8;
let a$1 = class a extends S$3 {
  constructor() {
    super(), this.referenceCount = 0, this.callbacks = new Array(), this.runIndex = 0;
  }
  get running() {
    return this.callbacks.some((r2) => r2.running);
  }
  runTask(r2) {
    this._sort();
    const s2 = this.callbacks, t2 = { numIndexLoading: 0, numNodesLoading: 0 };
    for (let e2 = 0; e2 < s2.length && !r2.done; ++e2)
      s2[e2].priority = s2[e2].runTask(r2, t2), this.runIndex = e2;
  }
  _sort() {
    const r2 = this.callbacks;
    let s2 = r2.length;
    for (let t2 = this.runIndex; t2 > 0; t2--) {
      const e2 = r2[t2 - 1];
      let o2 = t2;
      for (; o2 < r2.length && e2.priority <= r2[o2].priority && (o2 !== s2 || e2.priority < r2[o2].priority); )
        r2[o2 - 1] = r2[o2], o2++;
      r2[o2 - 1] = e2, s2 = o2 - 1;
    }
    this.runIndex = 0;
  }
  add(r2) {
    this._sort(), r2.priority = 1 / 0, this.callbacks.unshift(r2), this.notifyChange("running");
  }
  remove(r2) {
    I$1(this.callbacks, r2), this.runIndex = this.callbacks.length, this._sort(), this.notifyChange("running");
  }
};
e$4([y$2({ readOnly: true })], a$1.prototype, "running", null), a$1 = e$4([c$3("esri.views.3d.layers.i3s.I3SFrameTask")], a$1);
class l {
  constructor(r2, s2) {
    this.task = r2, this.handle = s2;
  }
}
const c$1 = /* @__PURE__ */ new Map();
function h$2(r2, s2) {
  let t2 = c$1.get(r2);
  if (null == t2) {
    const s3 = new a$1(), e2 = r2.registerTask(I$2.I3S_CONTROLLER, s3);
    t2 = new l(s3, e2), c$1.set(r2, t2);
  }
  return t2.task.add(s2), e$5(() => {
    if (null == t2)
      return;
    t2.task.remove(s2);
    t2.task.callbacks.length > 0 || (c$1.delete(r2), t2.handle.remove(), t2.task.destroy()), t2 = null;
  });
}
class s {
  constructor(s2, t2, i2, e2, h3, o2, r2, c2) {
    this.id = s2, this.mbs = t2, this.obb = i2, this.version = e2, this.resources = h3, this.children = o2, this.lodSelection = r2, this.numFeatures = c2;
  }
}
class p {
  constructor(e2, t2, i2, n2, s2) {
    this.childOffset = e2, this.childCount = t2, this.visibilityCache = i2, this.ref = n2, this.node = s2, this.useAsHole = 0, this.filterImpact = o$1.NotChecked, this.traversalState = null, this.parent = -1;
  }
}
let b$1 = class b {
  constructor(e2 = new Array(), t2 = new Array()) {
    this.nodes = e2, this.children = t2, this.lastTraversed = 0, this.numNodesWithLoadedChildren = 0;
  }
};
class I {
  get _useNodePages() {
    return this._pageSize > 0;
  }
  constructor(t2, i2, n2, s2, o2, r2, d2, h3, u2, c2, g2, _2, f2, m2, v2, N2) {
    this.viewingMode = t2, this._layer = i2, this._streamDataController = s2, this._clientNodeLoader = o2, this._viewportQueries = r2, this._logger = d2, this.holeFilling = h3, this._isLoaded = u2, this._isReloading = c2, this._isSelected = g2, this._enable = _2, this._needsUpdate = f2, this._canRequest = m2, this._computeVisibilityObb = v2, this._computeNodeFiltering = N2, this._dirty = true, this._nodePages = /* @__PURE__ */ new Map(), this._clientNodePage = null, this._pageSize = 0, this._rootIndex = 0, this._lodMetric = d$3.None, this._lodConversion = (e2) => e2, this._isEditable = false, this._urlPrefix = "", this._loadingNodes = /* @__PURE__ */ new Set(), this._loadingPages = /* @__PURE__ */ new Set(), this._failedNodes = /* @__PURE__ */ new Set(), this._failedPages = /* @__PURE__ */ new Set(), this._indexMissing = 1, this._maxUnloadedPrio = Number.NEGATIVE_INFINITY, this._maxProcessingPrio = Number.POSITIVE_INFINITY, this._version = R$2(0), this._visibilityCacheVersion = R$2(0), this._maxLevel = 1, this._featureEstimate = { estimate: 0, leavesReached: false }, this._unloadedMemoryEstimate = 0, this._missingPagesAndNodes = new l$1({ deallocator: null }), this._prefetchNodes = new l$1({ deallocator: null }), this._updates = new y(this._missingPagesAndNodes), this._imModificationUncategorized = new l$1({ deallocator: null }), this.ignoreServiceObb = false, this.progressiveLoadPenalty = 0, this._pageQueue = new Array(), this._newPages = new Array(), this.needNodeElevationRange = false, this.layerHasModifications = false, this._layerHasFilter = false, this._frameNumber = 0, this._traverseDescendantsQueue = [0], this._traverseDescendantsNestingLevel = 0, this._isEditable = r$2() && null != i2.associatedLayer?.infoFor3D, i2.serviceUpdateTimeStamp?.lastUpdate && (this._lastUpdate = `${i2.serviceUpdateTimeStamp.lastUpdate}`), this._maxLodLevel = this._viewportQueries ? this._viewportQueries.maxLodLevel : 1, this._init(n2);
  }
  _init(e2) {
    if ("page" === e2.type) {
      const t2 = e2.rootPage;
      switch (this._urlPrefix = e2.urlPrefix, this._pageSize = e2.pageSize, e2.lodMetric) {
        case "maxScreenThreshold":
          this._lodMetric = d$3.MaxScreenThreshold;
          break;
        case "maxScreenThresholdSQ":
          this._lodMetric = d$3.MaxScreenThreshold, this._lodConversion = F$1;
      }
      if (this._isEditable) {
        this._rootIndex = -1;
        const i2 = V$1(e2.rootIndex, e2.pageSize), n2 = t2.nodes[i2], s2 = { nodes: [{ index: this._rootIndex, children: [e2.rootIndex], mesh: void 0, obb: n2.obb, lodThreshold: n2.lodThreshold }] };
        this._addPage(E$1(this._rootIndex, this._pageSize), s2), this.getNode(-1).serviceObbInIndexSR = void 0;
      } else
        this._rootIndex = e2.rootIndex;
      this._addPage(E$1(e2.rootIndex, this._pageSize), t2), this._updateParentsAndLevel();
    } else if ("node" === e2.type) {
      this._urlPrefix = e2.urlPrefix;
      const t2 = new b$1();
      if (this._nodePages.set(0, t2), this._isEditable) {
        this._clientNodePage = new b$1();
        const t3 = { id: "-1", version: null, mbs: e2.rootNode.mbs, obb: e2.rootNode.obb, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: [{ id: "root", href: "../root", mbs: e2.rootNode.mbs, obb: e2.rootNode.obb }] };
        this._rootIndex = this._makeClientRefNode(new s$4(t3.id, null), -1);
        const i3 = this._validateNode(t3.id, t3);
        i3 && this._addNode(i3, this._rootIndex);
      } else
        this._rootIndex = this._makeRefNode(new s$4(e2.rootNode.id, null), -1);
      const i2 = this._validateNode(e2.rootNode.id, e2.rootNode);
      i2 && this._addNode(i2, 0);
    }
  }
  addClientNodeToIndex(e2, t2) {
    const i2 = -1, n2 = new s$4(e2, t2), s2 = this._makeClientRefNode(n2, i2);
    return this._linkChildToParentNode(i2, s2), this.requestUpdate(), s2;
  }
  removeClientNodeFromIndex(e2, t2, i2) {
    this._destroyClientRefNode(e2, t2, i2), this.requestUpdate();
  }
  _loadPage(e2) {
    this._loadingPages.add(e2);
    const i2 = this._urlPrefix + e2;
    this._streamDataController.request(i2, "json").then((t2) => {
      this._pageQueue.push({ pageIndex: e2, page: t2 });
    }).catch((i3) => {
      this._loadingPages.delete(e2), b$2(i3) || (this._failedPages.add(e2), this._logger.error("#loadPage()", this._layer, `Error when loading page ${e2}`, i3));
    });
  }
  _addQueuedPages(e2) {
    for (; this._pageQueue.length > 0 && !e2.done; ) {
      const { pageIndex: t2, page: i2 } = this._pageQueue.shift();
      this._addPage(t2, i2), this._loadingPages.delete(t2), e2.madeProgress(), this.needNodeElevationRange && this._newPages.push(t2);
    }
    this._updateParentsAndLevel();
  }
  _invalidateElevationRangeForNewPages(e2) {
    if (this.needNodeElevationRange)
      for (; this._newPages.length > 0 && !e2.done; ) {
        const e3 = this._nodePages.get(this._newPages.shift());
        e3?.nodes.forEach((e4) => {
          let t2 = e4.parent;
          for (; null != t2 && t2 !== this._rootIndex; ) {
            const e5 = this.getNode(t2);
            e5 && !Number.isNaN(e5?.elevationRangeMin) && (e5.invalidateElevationRange(), this.invalidateBoundingVolumeCache(t2)), t2 = this.getParentIndex(t2);
          }
        });
      }
  }
  _addPage(e2, t2) {
    const i2 = [], s2 = [], o2 = t2.nodes.map((t3, o3) => {
      const r3 = i2.length, a3 = t3.children ? t3.children.length : 0;
      s2.push(this._rootIndex);
      for (let e3 = 0; e3 < a3; e3++)
        i2.push(t3.children[e3]);
      const l2 = `${t3.index}`, d2 = O$1.fromJSON(t3.obb), u2 = T$4(d2.center, d2.radius), c2 = t3.mesh?.attribute, g2 = t3.mesh?.geometry, _2 = t3.mesh?.material, f2 = { hasSharedResource: false, isEmpty: null == g2, attributes: null != c2?.resource ? `${c2.resource}` : void 0, geometry: null != g2?.resource ? `${g2.resource}` : void 0, texture: null != _2?.resource ? `${_2.resource}` : void 0, geometryDefinition: g2 ? g2.definition : -1, materialDefinition: _2 ? _2.definition : -1 }, m2 = new h$4(l2, A(o3, e2, this._pageSize), u2, a3, 0, f2, this._lastUpdate, this._lodMetric, this._lodConversion(t3.lodThreshold), g2 ? g2.featureCount : null);
      return m2.serviceObbInIndexSR = d2, m2.visibilityObbInRenderSR = this._computeVisibilityObb(m2), m2.vertexCount = g2 ? g2.vertexCount : 0, new p(r3, a3, S$1(this._visibilityCacheVersion), null, m2);
    }), r2 = new b$1(o2, i2);
    -1 === e2 ? this._clientNodePage = r2 : this._nodePages.set(e2, r2);
  }
  _updateParentsAndLevel() {
    const e2 = new Array(), t2 = (t3, i2, n2) => {
      const s2 = this._getPage(t3);
      if (null != s2) {
        const o2 = V$1(t3, this._pageSize), r2 = s2.nodes[o2];
        r2.parent = null != i2 ? i2 : -1;
        const a3 = r2.node;
        null != a3 && (a3.level = n2, e2.push(t3));
      }
    };
    for (t2(this._rootIndex, null, 0); e2.length; ) {
      const i2 = e2.pop(), n2 = this.getNode(i2);
      if (null != n2)
        for (let e3 = 0; e3 < n2.childCount; e3++) {
          t2(this.getChildIndex(n2.index, e3), i2, n2.level + 1), this._maxLevel = Math.max(this._maxLevel, n2.level + 1);
        }
    }
  }
  _getPage(e2) {
    const t2 = E$1(e2, this._pageSize);
    return this._getPageFromPageIndex(t2);
  }
  _getPageFromPageIndex(e2) {
    return e2 < 0 ? this._clientNodePage : this._nodePages.get(e2);
  }
  _getNodeInternal(e2) {
    const t2 = this._getPage(e2);
    return null == t2 ? null : (t2.lastTraversed = this._frameNumber, t2.nodes[V$1(e2, this._pageSize)]);
  }
  _addNode(e2, t2) {
    e2.children && this.populateChildren(t2, e2.children);
    const i2 = this.getParent(t2), n2 = null != i2 ? i2.level + 1 : 0;
    this._maxLevel = Math.max(this._maxLevel, e2.children ? n2 + 1 : n2);
    const { lodMetric: s2, maxError: o2 } = L(e2.lodSelection), r2 = this._getNodeInternal(t2), a3 = new h$4(e2.id, t2, e2.mbs, r2.childCount, n2, e2.resources, e2.version, s2, o2, e2.numFeatures);
    r2.node = a3, e2.obb && (a3.serviceObbInIndexSR = O$1.fromJSON(e2.obb)), a3.visibilityObbInRenderSR = this._computeVisibilityObb(a3);
    const l2 = r2.ref;
    return null != l2 && (null == l2.serviceMbsInIndexSR && (l2.serviceMbsInIndexSR = e2.mbs), a3.shareServiceBVsInRenderSRWith(l2), l2.visibilityObbInRenderSR = a3.visibilityObbInRenderSR), a3;
  }
  _makeRefNode(e2, t2) {
    const i2 = this._nodePages.get(0);
    if (t2 < -1)
      return this._makeClientRefNode(e2, t2);
    if (null == i2)
      return -1;
    const n2 = i2.nodes.length, s2 = new p(0, 0, S$1(this._visibilityCacheVersion), e2, null);
    return i2.nodes.push(s2), s2.parent = t2, e2.invalidateServiceBVsInRenderSR(), n2;
  }
  _makeClientRefNode(e2, t2) {
    const i2 = this._clientNodePage;
    if (null == i2)
      return -1;
    if (t2 >= 0)
      throw new Error("I3SIndex::client side nodes can not be made children of service side nodes.");
    const n2 = -(i2.nodes.length + 1), s2 = new p(0, 0, S$1(this._visibilityCacheVersion), e2, null);
    return i2.nodes.push(s2), s2.parent = t2, e2.invalidateServiceBVsInRenderSR(), n2;
  }
  _linkChildToParentNode(e2, t2) {
    const i2 = this._clientNodePage;
    if (null == i2 || e2 >= 0)
      return;
    const n2 = V$1(e2, this._pageSize), s2 = V$1(t2, this._pageSize), o2 = i2.nodes[n2], r2 = o2.childOffset;
    i2.children.splice(o2.childOffset + o2.childCount, 0, t2);
    const a3 = 1;
    o2.childCount += a3, null != o2.node && (o2.node.childCount += a3);
    for (const l2 of i2.nodes)
      l2.childOffset > r2 && (l2.childOffset += a3);
    i2.nodes[s2].parent = e2, this._updateParentBoundingInformation(e2);
  }
  _destroyClientRefNode(e2, t2, i2) {
    const n2 = this._clientNodePage;
    if (null == n2)
      return;
    const s2 = this.getParentIndex(e2);
    if (null == s2)
      return;
    const o2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), a3 = (e3) => {
      const i3 = V$1(e3, this._pageSize), s3 = n2.nodes[i3];
      if (s3.childCount > 0)
        for (let t3 = s3.childOffset; t3 < s3.childOffset + s3.childCount; ++t3)
          a3(n2.children[t3]);
      const r3 = s3.node?.id ?? s3.ref?.id;
      if (null == r3)
        throw new Error("Node has no id");
      t2(r3, e3), o2.add(s3);
    };
    a3(e2);
    const l2 = n2.nodes, d2 = n2.children, h3 = n2.nodes.map(() => -1), u2 = [], c2 = [];
    for (let g2 = 0; g2 < l2.length; ++g2) {
      const e3 = l2[g2];
      if (o2.has(e3))
        continue;
      const t3 = u2.length, n3 = A(g2, -1, this._pageSize), s3 = A(t3, -1, this._pageSize);
      if (e3.node && (e3.node.index = s3), h3[g2] = s3, u2.push(e3), n3 !== s3) {
        const t4 = e3.node?.id ?? e3.ref?.id;
        if (null == t4)
          throw new Error("Node has no id");
        i2(t4, n3, s3), r2.set(n3, s3);
      }
    }
    for (let g2 = 0; g2 < u2.length; ++g2) {
      const e3 = A(g2, -1, this._pageSize), t3 = u2[g2], i3 = c2.length;
      for (let n3 = t3.childOffset; n3 < t3.childOffset + t3.childCount; ++n3) {
        const t4 = d2[n3];
        if (t4 >= 0)
          c2.push(t4);
        else {
          const i4 = V$1(t4, this._pageSize), n4 = l2[i4];
          if (o2.has(n4))
            continue;
          const s3 = h3[i4];
          c2.push(s3), n4.parent = e3;
        }
      }
      t3.childOffset = i3, t3.childCount = c2.length - i3, t3.node && (t3.node.childCount = t3.childCount);
    }
    n2.nodes = u2, n2.children = c2, this._updateParentBoundingInformation(h3[V$1(s2, this._pageSize)]);
  }
  _updateParentBoundingInformation(e2) {
    let t2 = e2;
    do {
      let e3 = null;
      const n2 = this._clientNodeLoader.indexSR, a3 = this._clientNodeLoader.renderSR, l2 = this._getNodeInternal(t2);
      if (null == l2)
        return;
      for (let r2 = 0; r2 < l2.childCount; r2++) {
        const l3 = this.getChildIndex(t2, r2), d3 = this._getNodeInternal(l3), h3 = null != d3 ? d3.ref || d3.node : null;
        if (null != h3 && h3.serviceMbsInIndexSR[3] > 0)
          if (null == e3)
            e3 = O$2(h3.serviceMbsInIndexSR, z$1);
          else {
            const t3 = D$2, s2 = T$3, r3 = B$1;
            a$2(h3.serviceMbsInIndexSR, n2, t3, a3), a$2(e3, n2, s2, a3), it(t3, s2, r3), a$2(r3, a3, e3, n2);
          }
      }
      const d2 = l2.ref || l2.node;
      null != d2 && (null != e3 ? (d2.serviceMbsInIndexSR ??= w$3(), O$2(e3, d2.serviceMbsInIndexSR)) : ge(d2.serviceMbsInIndexSR), d2.invalidateServiceBVsInRenderSR(), d2.geometryObbInRenderSR = null), this.invalidateNodeVisibilityCacheInternal(l2), t2 = this.getParentIndex(t2);
    } while (null != t2);
  }
  populateChildren(e2, t2) {
    const i2 = this._getNodeInternal(e2), n2 = this._getPage(e2);
    i2.childOffset = n2.children.length, i2.childCount = t2.length;
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i3 = this._makeRefNode(t2[s2], e2);
      n2.children.push(i3);
    }
  }
  getNode(e2) {
    const t2 = this._getNodeInternal(e2);
    return null != t2 ? t2.node : null;
  }
  getIndexById(e2) {
    let t2;
    return this._forAllNodes((i2, n2) => {
      (null != i2.node && i2.node.id === e2 || null != i2.ref && i2.ref.id === e2) && (t2 = n2);
    }), t2;
  }
  getNodeById(e2) {
    const t2 = this.getIndexById(e2);
    return null != t2 && t2 >= 0 ? this.getNode(t2) : null;
  }
  getChildIndex(e2, t2) {
    const i2 = this._getPage(e2);
    if (null == i2)
      return -1;
    const n2 = i2.nodes[V$1(e2, this._pageSize)];
    return i2.children[n2.childOffset + t2];
  }
  getParentIndex(e2) {
    const t2 = this._getPage(e2);
    return null != t2 && e2 !== this._rootIndex ? t2.nodes[V$1(e2, this._pageSize)].parent : null;
  }
  getParent(e2) {
    const t2 = this.getParentIndex(e2);
    return null != t2 ? this.getNode(t2) : null;
  }
  isLeaf(e2) {
    const t2 = this._getNodeInternal(e2);
    return null != t2 && 0 === t2.childCount;
  }
  get rootNode() {
    return this.getNode(this._rootIndex);
  }
  get isEditable() {
    return this._isEditable;
  }
  removeAllGeometryObbs() {
    this._forAllNodes((e2) => {
      null != e2.node && (e2.node.geometryObbInRenderSR = null);
    });
  }
  invalidateVisibilityCache() {
    this._visibilityCacheVersion = R$2(this._visibilityCacheVersion);
  }
  invalidateNodeVisibilityCache(e2) {
    const t2 = this._getNodeInternal(e2);
    null != t2 && this.invalidateNodeVisibilityCacheInternal(t2);
  }
  invalidateNodeVisibilityCacheInternal(e2) {
    e2.visibilityCache = S$1(this._visibilityCacheVersion);
  }
  invalidateBoundingVolumeCache(e2) {
    const t2 = this._getNodeInternal(e2);
    null != t2 && (x$1(t2), this.invalidateNodeVisibilityCacheInternal(t2));
  }
  updateElevationChanged(e2) {
    const t2 = this._getNodeInternal(e2);
    if (null == t2)
      return;
    if (!this.needNodeElevationRange)
      return void this.invalidateBoundingVolumeCache(e2);
    const i2 = null != t2.node ? t2.node : t2.ref;
    null != i2 && i2.invalidateElevationRange();
  }
  invalidateGeometryVisibility(e2) {
    const t2 = this._getNodeInternal(e2), i2 = t2?.node;
    i2 && (i2.geometryObbInRenderSR = null, i2.invalidateServiceBVsInRenderSR());
  }
  invalidateVisibilityObbs() {
    null != this.rootNode && this.traverse(this.rootNode, (e2) => (e2.visibilityObbInRenderSR = this._computeVisibilityObb(e2), e2.geometryObbInRenderSR = null, true));
  }
  _updateElevationRange(e2) {
    this._updateElevationRangeInternal(e2, null);
  }
  _updateElevationRangeInternal(e2, t2) {
    const i2 = this._getNodeInternal(e2);
    if (!i2)
      return false;
    const n2 = i2?.node ?? i2?.ref;
    if (!n2)
      return false;
    if (n2.elevationRangeValid)
      return t2?.expandElevationRange(n2), true;
    const s2 = new e$6();
    let o2 = false;
    for (let l2 = 0; l2 < i2.childCount; l2++) {
      const t3 = this.getChildIndex(e2, l2), i3 = this._updateElevationRangeInternal(t3, s2);
      o2 = o2 || !i3;
    }
    if (0 === i2.childCount || o2) {
      const e3 = !i2.node?.resources.isEmpty;
      this._viewportQueries.expandElevationRange(n2, e3, s2);
    }
    const r2 = n2.elevationRangeMin, a3 = n2.elevationRangeMax;
    return r2 === s2.elevationRangeMin && a3 === s2.elevationRangeMax ? (t2?.expandElevationRange(n2), true) : (i2.node?.setElevationRange(s2), i2.ref?.setElevationRange(s2), this.invalidateBoundingVolumeCache(e2), t2?.expandElevationRange(n2), true);
  }
  isNodeVisible(e2) {
    const t2 = this._getNodeInternal(e2);
    if (null == t2)
      return true;
    const i2 = t2.ref;
    if (null != i2 && !i2.serviceMbsInIndexSR)
      return true;
    if (!this.needNodeElevationRange && w$1(t2.visibilityCache, this._visibilityCacheVersion))
      return M$2(t2.visibilityCache);
    const n2 = t2.node, s2 = this._viewportQueries;
    if (n2 && n2.level > 0) {
      s2.ensureElevationAgnosticBoundingVolume(n2, this.viewingMode);
      const e3 = n2.elevationAgnosticBoundingVolume;
      if (!s2.isElevationAgnosticBoundingVolumeVisible(this.viewingMode, e3))
        return t2.visibilityCache = C$1(false, this._visibilityCacheVersion), false;
    }
    if (this.needNodeElevationRange && this._updateElevationRange(e2), !w$1(t2.visibilityCache, this._visibilityCacheVersion)) {
      if (this._layerHasFilter && this._computeNodeFiltering && (null != n2 || null != i2) && t2.filterImpact === o$1.NotChecked) {
        const e4 = null != n2 ? n2.serviceMbsInIndexSR : null != i2 ? i2.serviceMbsInIndexSR : null;
        t2.filterImpact = null != e4 ? this._computeNodeFiltering(e4) : o$1.Unmodified;
      }
      const e3 = null != n2 && t2.filterImpact === o$1.Culled, o2 = null != n2 && n2.imModificationImpact === r$3.Culled, r2 = !n2 || i2 && !n2.visibilityObbInRenderSR ? i2 ?? null : n2, a3 = !o2 && (!r2 || s2.isNodeVisible(r2)) && !e3;
      return t2.visibilityCache = C$1(a3, this._visibilityCacheVersion), a3;
    }
    return M$2(t2.visibilityCache);
  }
  isGeometryVisible(e2) {
    if (!this.isNodeVisible(e2))
      return false;
    const t2 = this._getNodeInternal(e2);
    return !!(null == t2?.node?.geometryObbInRenderSR || this.layerHasModifications && t2.node.imModificationImpact === r$3.NotChecked) || this._viewportQueries.isGeometryVisible(t2.node);
  }
  _traverseCoverage(e2, t2, i2, n2, s2) {
    const o2 = this._getPage(e2);
    if (null == o2 || 0 === t2.childCount)
      return;
    const r2 = t2.childOffset + t2.childCount, a3 = new Array();
    for (let l2 = t2.childOffset; l2 < r2; ++l2) {
      const e3 = o2.children[l2], t3 = this._getNodeInternal(e3);
      null != t3?.node && this.isGeometryVisible(e3) && a3.push(t3);
    }
    n2 /= a3.length;
    for (const l2 of a3) {
      const e3 = l2.node.index;
      this._isLoaded(e3) || this._isReloading(e3) ? (s2.delta = Math.max(s2.delta, i2), s2.coverage += n2) : this._traverseCoverage(e3, l2, i2 + 1, n2, s2);
    }
  }
  useNodeAsHole(e2) {
    if ("off" === this.holeFilling)
      return false;
    const t2 = this._getNodeInternal(e2);
    if (null == t2)
      return false;
    if ("always" === this.holeFilling)
      return true;
    if (w$1(t2.useAsHole, this._version))
      return M$2(t2.useAsHole);
    const i2 = { delta: 0, coverage: 0 };
    this._traverseCoverage(e2, t2, 0, 1, i2);
    const n2 = i2.delta * i2.coverage <= 0.5;
    return t2.useAsHole = C$1(n2, this._version), n2;
  }
  get maxLevel() {
    return this._maxLevel;
  }
  get dirty() {
    return this._dirty;
  }
  destroy() {
    this._updates.add.prune(), this._updates.update.prune();
  }
  requestUpdate() {
    this._dirty = true, this._indexMissing = 1, this._version = R$2(this._version);
  }
  imModificationsChanged(e2) {
    this.layerHasModifications = e2, this._forAllNodes(({ node: e3 }) => {
      null != e3 && (e3.imModificationImpact = r$3.NotChecked, e3.visibilityObbInRenderSR = this._computeVisibilityObb(e3), e3.hasModifications && this.invalidateGeometryVisibility(e3.index));
    }), this.invalidateVisibilityCache();
  }
  layerFilterChanged(e2) {
    this._layerHasFilter = e2, this._forAllNodes((e3) => {
      if (null != e3) {
        e3.filterImpact = o$1.NotChecked;
        const t2 = e3.node;
        null != t2 && this.invalidateNodeVisibilityCache(t2.index);
      }
    }), this.invalidateVisibilityCache();
  }
  update(e2, t2, i2) {
    if (!this._dirty)
      return;
    this._pageQueue.length > 0 && this._addQueuedPages(t2), this._invalidateElevationRangeForNewPages(t2), this._maxUnloadedPrio = Number.NEGATIVE_INFINITY, this._maxProcessingPrio = Number.NEGATIVE_INFINITY, this._missingPagesAndNodes.clear(), this._prefetchNodes.clear(), this._updates.reset(e2), P$1.clear();
    let n2 = true;
    const s2 = new k$3(), o2 = new k$3(), r2 = this._imModificationUncategorized;
    r2.clear();
    const a3 = /* @__PURE__ */ new Set();
    let l2 = 0;
    const d2 = (a4, d3, h4) => {
      const u2 = E$1(a4, this._pageSize);
      if (null == d3) {
        let e3 = this._entryPriority(a4);
        return e3 === 1 / 0 && (e3 = this._entryPriority(h4)), P$1.set(u2, Math.max(e3, P$1.get(u2) || 0)), this._loadingPages.has(u2) || this._failedPages.has(u2) || (this._missingPagesAndNodes.push(u2), ++l2), void (this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3));
      }
      const g2 = d3.node;
      if (this._updateNodeFeatureEstimate(g2, o2), null == g2) {
        const e3 = this._entryPriority(a4);
        return this._loadingNodes.has(a4) || this._failedNodes.has(a4) || (this._missingPagesAndNodes.push(a4), P$1.set(a4, e3)), void (this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3));
      }
      const _2 = this._getPage(a4);
      if (0 === this._missingPagesAndNodes.length && !this._useNodePages)
        for (let e3 = 0; e3 < d3.childCount; e3++) {
          const t3 = _2.children[d3.childOffset + e3], i3 = this._getNodeInternal(t3);
          null == i3 || i3.node || this._loadingNodes.has(t3) || this._failedNodes.has(t3) || (P$1.set(t3, this._entryPriority(t3)), this._prefetchNodes.push(t3));
        }
      if (g2.failed || g2.resources.isEmpty)
        return void (n2 && d3.childCount > 0 && this._isSelected(g2) && (n2 = false));
      if (this._isLoaded(a4)) {
        if (s2.known += g2.memory, ++s2.knownNodes, this._isSelected(g2) ? d3.childCount > 0 && (n2 = false) : (s2.unremoved += g2.memory, n2 = false), this._needsUpdate(g2)) {
          const e3 = this._entryPriority(a4);
          P$1.set(a4, e3), this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3), this._updates.update.push(a4);
        }
        return;
      }
      if (g2.memory && (s2.known += g2.memory, ++s2.knownNodes), !this._isSelected(g2))
        return void (this._isReloading(a4) && this._updates.remove.push(a4));
      if (d3.childCount > 0 && (n2 = false), g2.memory ? (s2.missing += g2.memory, s2.known += g2.memory, ++s2.knownNodes) : ++s2.missingNodes, e2.includes(g2.index))
        return this._maxProcessingPrio = Math.max(this._maxProcessingPrio, this._entryPriority(a4)), void (this._updates.cancel = this._updates.cancel.filter((e3) => e3 !== g2.index));
      if (!t2.done && this._enable(g2))
        return void t2.madeProgress();
      const f2 = this._entryPriority(a4);
      P$1.set(a4, f2), this._maxProcessingPrio = Math.max(this._maxProcessingPrio, f2), this._updates.add.push(a4), this.layerHasModifications && i2 && null != g2 && g2.imModificationImpact === r$3.NotChecked && r2.push(a4);
    };
    this.traverseVisible(d2, a3), this._frameNumber++, this._missingPagesAndNodes.sort((e3, t3) => e3 - t3), this._missingPagesAndNodes.filterInPlace((e3, t3) => t3 < 1 || this._missingPagesAndNodes.data[t3 - 1] !== e3), this._missingPagesAndNodes.sort((e3, t3) => P$1.get(e3) - P$1.get(t3)), this._missingPagesAndNodes.length > 0 && (this._maxUnloadedPrio = P$1.get(this._missingPagesAndNodes.back()), this._prefetchNodes.clear()), this._removeUnusedNodePages(a3, l2);
    const h3 = this._updates.add;
    h3.length > 0 && this.layerHasModifications && (r2.length > 0 && i2?.(r2), h3.filterInPlace((e3) => {
      const t3 = this._getNodeInternal(e3), i3 = null == t3?.node || t3.node.imModificationImpact !== r$3.Culled;
      return i3 || this.invalidateNodeVisibilityCache(e3), i3;
    })), this._unloadedMemoryEstimate = s2.missing - s2.unremoved, s2.knownNodes > 3 && s2.missingNodes > 0 && (this._unloadedMemoryEstimate += s2.known / s2.knownNodes * s2.missingNodes), this._unloadedMemoryEstimate = 0.8 * Math.max(0, this._unloadedMemoryEstimate), this._featureEstimate.estimate = this._computeFeatureEstimate(o2), this._featureEstimate.leavesReached = n2, this._updates.add.filterInPlace((e3) => P$1.get(e3) >= this._maxUnloadedPrio).sort((e3, t3) => P$1.get(e3) - P$1.get(t3)), this._updates.update.sort((e3, t3) => P$1.get(e3) - P$1.get(t3)), this._indexMissing = this._loadingPages.size + this._loadingNodes.size + this._missingPagesAndNodes.length, this._dirty = this._indexMissing > 0, P$1.clear();
  }
  checkFeatureTarget(e2, t2) {
    const i2 = this._viewportQueries.updateScreenSpaceErrorBias(t2);
    let n2 = t2, s2 = t2, o2 = i2, r2 = 10;
    for (; r2--; ) {
      const i3 = new k$3();
      this._updateFeatureEstimate(n2, i3);
      if (this._computeFeatureEstimate(i3) <= e2) {
        if (n2 >= t2 || i3.missingNodes > 0 || 0 === r2)
          break;
        o2 = n2, n2 = 0.5 * (n2 + s2);
      } else
        s2 = n2, n2 = 0.5 * (n2 + o2);
    }
    return this._version = R$2(this._version), this._viewportQueries.updateScreenSpaceErrorBias(i2), Math.min(t2, n2);
  }
  _removeUnusedNodePages(e2, t2) {
    if (!this._useNodePages)
      return;
    const i2 = e2.size, n2 = this._nodePages, s2 = n2.size + this._loadingPages.size + t2;
    if (s2 > Q$1 && s2 > i2) {
      const t3 = new Array();
      for (const [i3, s3] of n2)
        0 !== s3.numNodesWithLoadedChildren || e2.has(i3) || t3.push([s3.lastTraversed, i3]);
      t3.sort((e3, t4) => e3[0] - t4[0]).some((e3) => {
        const t4 = e3[1];
        return this._deleteNodePage(t4), n2.size <= Q$1;
      });
    }
  }
  _updateFeatureEstimate(e2, t2) {
    this._version = R$2(this._version), this._viewportQueries.updateScreenSpaceErrorBias(e2), this.traverseVisible((e3, i2) => this._updateNodeFeatureEstimate(null != i2 ? i2.node : void 0, t2));
  }
  _updateNodeFeatureEstimate(e2, t2) {
    null == e2 || e2.failed || null == e2.numFeatures || this._isSelected(e2) && (null != e2.numFeatures ? (t2.missing += e2.numFeatures, t2.known += e2.numFeatures, ++t2.knownNodes) : ++t2.missingNodes);
  }
  _computeFeatureEstimate(e2) {
    let t2 = e2.known - e2.unremoved;
    return e2.knownNodes > 3 && e2.missingNodes > 0 && (t2 += e2.known / e2.knownNodes * e2.missingNodes), Math.max(0, t2);
  }
  load() {
    return this._load(this._missingPagesAndNodes);
  }
  prefetch() {
    return this._prefetchNodes.sort((e2, t2) => P$1.get(e2) - P$1.get(t2)), this._load(this._prefetchNodes);
  }
  _load(e2) {
    if (0 === e2.length || !this._canRequest())
      return false;
    for (; e2.length > 0 && this._canRequest(); ) {
      const t2 = e2.pop();
      this._useNodePages && t2 >= 0 ? this._loadPage(t2) : this._loadNode(t2);
    }
    return true;
  }
  get isLoading() {
    return this._indexMissing > 0;
  }
  get isPrefetching() {
    return this._prefetchNodes.length > 0;
  }
  get indexLoading() {
    return this._loadingPages.size + this._loadingNodes.size;
  }
  get indexMissing() {
    return this._indexMissing;
  }
  get unloadedMemoryEstimate() {
    return this._unloadedMemoryEstimate;
  }
  get updates() {
    return this._updates;
  }
  get featureEstimate() {
    return this._featureEstimate;
  }
  get maxPriority() {
    return Math.max(this._maxProcessingPrio, this._maxUnloadedPrio);
  }
  nodeTraversalState(e2) {
    if (null == e2)
      return null;
    const t2 = e2.index, i2 = this._getNodeInternal(t2);
    if (!i2)
      return null;
    let n2 = i2?.traversalState;
    if (n2 && w$1(n2.version, this._version))
      return n2;
    const s2 = this._viewportQueries.getLodLevel(e2), o2 = this._viewportQueries.hasLOD(e2);
    let r2 = true;
    if (o2) {
      const e3 = this.getParentIndex(t2);
      if (null != e3) {
        const t3 = this._getNodeInternal(e3), i3 = t3?.traversalState;
        r2 = !!i3 && s2 > i3.lodLevel;
      } else
        r2 = s2 > 0;
    } else
      r2 = 0 === e2.childCount;
    return n2 ? (n2.lodLevel = s2, n2.isChosen = r2, n2.version = C$1(true, this._version), n2) : (n2 = new l$2(o2, r2, s2, C$1(true, this._version)), i2.traversalState = n2, n2);
  }
  async _loadNode(e2) {
    this._loadingNodes.add(e2);
    const i2 = this._getNodeInternal(e2).ref;
    if (null == i2)
      return void this._failedNodes.add(e2);
    const n2 = i2.id, s2 = this._urlPrefix + n2, o2 = () => {
      this._loadingNodes.delete(e2), 0 === this._missingPagesAndNodes.length && 0 === this._loadingNodes.size && this.requestUpdate();
    };
    let r2 = null;
    try {
      r2 = e2 >= 0 ? await this._streamDataController.request(s2, "json") : await this._clientNodeLoader.loadNodeJSON(n2);
    } catch (d2) {
      return o2(), void (b$2(d2) || (this._logger.error("#loadNode()", this._layer, "Error loading node: " + s2), this._failedNodes.add(e2)));
    }
    o2();
    const a3 = this._validateNode(n2, r2);
    if (null == a3)
      return;
    a3.obb && this.invalidateNodeVisibilityCache(e2);
    const l2 = this._addNode(a3, e2);
    this.nodeTraversalState(l2);
  }
  _validateNode(e2, t2) {
    if (null == t2 || "object" != typeof t2 || t2.id !== e2)
      return this._logger.error("#validateNode()", this._layer, `Invalid node. Wrong type or wrong id "${e2}"`), null;
    if (!Array.isArray(t2.mbs))
      return this._logger.error("#validateNode()", this._layer, `Invalid bounding volume on node ${e2}.`), null;
    t2.sharedResource && "./shared" !== t2.sharedResource.href && "./shared/" !== t2.sharedResource.href && this._logger.warn("#validateNode()", this._layer, `Invalid shared resource href on node "${e2}"`);
    const i2 = t2.geometryData;
    null == i2 || Array.isArray(i2) && 0 === i2.length || Array.isArray(i2) && 1 === i2.length && "./geometries/0" === i2[0].href || this._logger.warn("#validateNode()", this._layer, `Invalid geometry data on node "${e2}"`);
    const n2 = t2.attributeData, s$12 = this._layer.attributeStorageInfo;
    null == n2 || Array.isArray(n2) && !n2.some((e3, t3) => e3.href !== `./attributes/${s$12?.[t3]?.key ?? `f_${t3}`}/0`) || this._logger.warn("#validateNode()", this._layer, `Invalid attribute data on node "${e2}"`), t2.featureData && t2.featureData.length > 1 && this._logger.warn("#validateNode()", this._layer, `Node ${e2} has ${t2.featureData.length} bundles. Only the first bundle will be loaded.`);
    const o2 = t2.hasOwnProperty("obb") && !this.ignoreServiceObb ? t2.obb : void 0, r2 = t2.featureData && 1 === t2.featureData.length && t2.featureData[0].featureRange ? t2.featureData[0].featureRange[1] - t2.featureData[0].featureRange[0] + 1 : void 0, a3 = (t3) => {
      if (null == t3)
        return null;
      const i3 = (t4) => this._logger.error("#validateNode()", this._layer, `Invalid node reference on node ${e2}: ${t4}`);
      if ("number" == typeof t3.id)
        i3(`id ${t3.id} is a number instead of a string.`);
      else if ("string" != typeof t3.id || !Array.isArray(t3.mbs))
        return i3("Missing or invalid id."), null;
      if (!Array.isArray(t3.mbs))
        return i3(`Invalid bounding volume on reference ${t3.id}.`), null;
      t3.href && t3.href !== "../" + t3.id && this._logger.error("#validateNode()", this._layer, `Invalid node href on node "${e2}"`);
      const n3 = new s$4(`${t3.id}`, t3.mbs);
      return n3.serviceObbInIndexSR = !this.ignoreServiceObb && t3.hasOwnProperty("obb") && t3.obb ? O$1.fromJSON(t3.obb) : null, n3.visibilityObbInRenderSR = this._computeVisibilityObb(n3), n3;
    }, l2 = Array.isArray(t2.children) ? t2.children.map(a3).filter((e3) => null != e3) : null, h3 = t2.featureData?.length ?? false, u2 = true === t2.isEmpty;
    return new s(e2, t2.mbs, o2, "string" == typeof t2.version ? t2.version : null, { isEmpty: !h3 && u2, hasSharedResource: null != t2.sharedResource, attributes: t2.attributeData ? e2 : void 0, texture: t2.textureData && t2.textureData.length > 0 ? e2 : void 0, geometry: null != t2.geometryData ? e2 : void 0 }, l2, Array.isArray(t2.lodSelection) ? t2.lodSelection : null, r2);
  }
  resetFailedNodes() {
    this._failedNodes.clear(), this._failedPages.clear(), this._forAllNodes((e2) => {
      null != e2.node && (e2.node.failed = false);
    });
  }
  _entryPriority(e2) {
    const t2 = this._getNodeInternal(e2), i2 = this.getParentIndex(e2);
    if (null == t2 || null == i2 && null == t2.node)
      return null == i2 ? 1 / 0 : this._entryPriority(i2);
    let n2 = 0;
    if (t2.node && null != i2) {
      const e3 = this._getNodeInternal(i2).traversalState;
      null != e3 && (n2 = e3.lodLevel);
    }
    let s2 = this.progressiveLoadPenalty;
    for (let r2 = e2; null != r2; r2 = this.getParentIndex(r2))
      if (this._isLoaded(r2)) {
        s2 = 0;
        break;
      }
    const o2 = null != t2.ref ? this._viewportQueries.distToPOI(t2.ref) : null != t2.node ? this._viewportQueries.distToPOI(t2.node) : 0;
    return -o2 - n2 * (o2 + this.progressiveLoadPenalty) + s2;
  }
  traverseVisible(e2, t2) {
    const i2 = this._getNodeInternal(this._rootIndex);
    null != i2 ? this._traverseVisible(this._rootIndex, null, i2, e2, t2) : e2(this._rootIndex, null, null);
  }
  _traverseVisible(e2, t2, i2, n2, s2) {
    const o2 = E$1(e2, this._pageSize);
    if (s2 && s2.add(o2), i2.node && 0 === i2.childCount)
      return void (this.isGeometryVisible(e2) && n2(e2, i2, t2));
    if (!this.isNodeVisible(e2))
      return;
    if (n2(e2, i2, t2), null == i2.node)
      return;
    const r2 = this.nodeTraversalState(i2.node);
    if (r2?.nodeHasLOD && r2.lodLevel === this._maxLodLevel)
      return;
    const a3 = this._getPageFromPageIndex(o2);
    for (let l2 = 0; l2 < i2.childCount; l2++) {
      const t3 = a3.children[i2.childOffset + l2], o3 = this._getNodeInternal(t3);
      if (o3)
        this._traverseVisible(t3, e2, o3, n2, s2);
      else {
        if (s2) {
          const e3 = E$1(t3, this._pageSize);
          s2.add(e3);
        }
        n2(t3, null, e2);
      }
    }
  }
  traverse(e2, t2) {
    t2(e2) && this.traverseDescendants(e2, t2);
  }
  traverseDescendants(e2, t2) {
    ++this._traverseDescendantsNestingLevel;
    const i2 = e2.index, n2 = this._pageSize, s2 = E$1(i2, n2), o2 = this._getPageFromPageIndex(s2);
    if (null == o2)
      return;
    const r2 = this._frameNumber, a3 = this._nodePages;
    o2.lastTraversed = r2;
    const l2 = V$1(i2, n2), d2 = o2.nodes[l2], { childCount: h3 } = d2;
    if (0 === h3)
      return;
    const u2 = 1 === this._traverseDescendantsNestingLevel ? this._traverseDescendantsQueue : [0];
    let c2 = 0;
    const g2 = [];
    {
      const { childOffset: e3, childCount: t3 } = d2, { children: i3 } = o2;
      u2.length = 2 ** Math.ceil(Math.log2(c2 + t3));
      for (let n3 = e3; n3 < e3 + t3; ++n3) {
        const e4 = i3[n3];
        e4 >= 0 ? (u2[c2] = e4, ++c2) : g2.push(e4);
      }
    }
    if (g2.length > 0) {
      const e3 = this._clientNodePage;
      if (e3) {
        const i3 = e3.children;
        let n3 = 0;
        for (; n3 < g2.length; ) {
          const s3 = g2[n3];
          ++n3;
          const o3 = -s3 - 1, r3 = e3.nodes[o3], a4 = r3.node;
          if (!a4)
            continue;
          if (!t2(a4))
            continue;
          const { childCount: l3 } = r3;
          if (0 === l3)
            continue;
          const { childOffset: d3 } = r3, h4 = d3 + l3;
          for (let e4 = d3; e4 < h4; ++e4)
            g2.push(i3[e4]);
        }
      }
    }
    if (c2 > 0) {
      let e3 = 0;
      if (n2 > 0) {
        let i3 = s2 * n2, l3 = o2, d3 = l3.nodes;
        for (; e3 < c2; ) {
          const s3 = u2[e3];
          let o3;
          if (++e3, i3 <= s3 && s3 < i3 + n2)
            o3 = l3;
          else {
            const e4 = s3 / n2 | 0, t3 = a3.get(e4);
            if (void 0 === t3)
              continue;
            o3 = t3, o3.lastTraversed = r2, l3 = o3, d3 = l3.nodes, i3 = n2 * e4;
          }
          const h4 = d3[s3 - i3], g3 = h4.node;
          if (null == g3)
            continue;
          if (false === t2(g3))
            continue;
          const { childCount: _2 } = h4;
          if (0 === _2)
            continue;
          const f2 = c2 + _2;
          for (u2.length < f2 && (u2.length = 2 ** Math.ceil(Math.log2(c2 + _2))); u2.length < c2 + _2; )
            u2.length += u2.length;
          const m2 = o3.children, { childOffset: v2 } = h4, N2 = v2 + _2;
          for (let e4 = v2; e4 < N2; ++e4)
            u2[c2] = m2[e4], ++c2;
        }
      } else {
        const i3 = a3.get(0);
        if (i3)
          for (; e3 < c2; ) {
            const n3 = u2[e3];
            ++e3;
            const s3 = i3.nodes[n3], o3 = s3.node;
            if (!o3)
              continue;
            if (!t2(o3))
              continue;
            const { childCount: r3 } = s3;
            if (0 === r3)
              continue;
            u2.length = Math.max(u2.length, 2 ** Math.ceil(Math.log2(c2 + r3)));
            const a4 = i3.children, { childOffset: l3 } = s3, d3 = l3 + r3;
            for (let e4 = l3; e4 < d3; ++e4)
              u2[c2] = a4[e4], ++c2;
          }
      }
    }
    --this._traverseDescendantsNestingLevel;
  }
  updateChildrenLoaded(e2, t2) {
    let i2 = this.getNode(e2);
    for (; null != i2; ) {
      const e3 = i2.childrenLoaded, n2 = e3 + t2;
      i2.childrenLoaded = n2;
      const s2 = 0 === e3 ? 1 : 0 === n2 ? -1 : 0, o2 = i2.index;
      if (0 !== s2) {
        this._getPage(o2).numNodesWithLoadedChildren += s2;
      }
      i2 = this.getParent(o2);
    }
  }
  checkChildrenLoadedInvariant() {
    if (null == this.rootNode)
      return true;
    const e2 = [], t2 = (i2) => {
      let n2 = this._isLoaded(i2.index) || this._isReloading(i2.index) ? 1 : 0;
      return this.traverseDescendants(i2, (e3) => (n2 += t2(e3), false)), i2.childrenLoaded !== n2 && e2.push(i2.index), n2;
    };
    return t2(this.rootNode), e2.length && this._logger.error("childrenLoaded invariant broken at following nodes: " + e2.join(",")), e2.length > 0;
  }
  updateElevationInfo(e2, t2) {
    this.needNodeElevationRange = t2 && !!e2 && ("relative-to-ground" === e2.mode || "on-the-ground" === e2.mode), this._viewportQueries.updateElevationInfo(e2), this.invalidateAllElevationRanges();
  }
  invalidateAllElevationRanges() {
    this._forAllNodes((e2) => {
      x$1(e2), null != e2.node && e2.node.invalidateElevationRange(), null != e2.ref && e2.ref.invalidateElevationRange();
    });
  }
  _forAllNodes(e2) {
    if (null != this._clientNodePage) {
      const t2 = this._clientNodePage;
      for (let i2 = 0; i2 < t2.nodes.length; i2++)
        e2(t2.nodes[i2], -(i2 + 1));
    }
    for (const [t2, i2] of this._nodePages) {
      const n2 = t2 * this._pageSize;
      for (let t3 = 0; t3 < i2.nodes.length; t3++)
        e2(i2.nodes[t3], n2 + t3);
    }
  }
  clearCaches() {
    if (this._useNodePages) {
      const e2 = this._nodePages, t2 = /* @__PURE__ */ new Set();
      this.traverseVisible((e3) => t2.add(E$1(e3, this._pageSize)));
      for (const [i2, n2] of e2)
        if (0 !== n2.numNodesWithLoadedChildren || t2.has(i2))
          for (const e3 of n2.nodes)
            e3.traversalState = null;
        else
          this._deleteNodePage(i2);
    }
  }
  _deleteNodePage(e2) {
    this._nodePages.delete(e2);
  }
  get test() {
    return { addNode: (e2, t2) => this._addNode(this._validateNode(e2.id, e2), t2), getNodeInternal: (e2) => this._getNodeInternal(e2), getPageIndex: (e2) => E$1(e2, this._pageSize), getIndexWithinPage: (e2) => V$1(e2, this._pageSize), getNodePage: (e2) => e2 < 0 ? this._clientNodePage : this._nodePages.get(e2), getChildIndices: (e2) => {
      const t2 = this._getNodeInternal(e2), i2 = this._getPage(e2);
      if (null == t2 || null == i2)
        return [];
      const n2 = [];
      for (let s2 = t2.childOffset; s2 < t2.childOffset + t2.childCount; ++s2)
        n2.push(i2.children[s2]);
      return n2;
    }, rootIndex: this._rootIndex, clientNodePage: this._clientNodePage, nodePages: this._nodePages };
  }
}
const P$1 = /* @__PURE__ */ new Map();
class y {
  constructor(t2) {
    this.missing = t2, this.update = new l$1({ deallocator: null }), this.add = new l$1({ deallocator: null }), this.remove = new l$1({ deallocator: null }), this.cancel = [];
  }
  reset(e2) {
    this.add.clear(), this.update.clear(), this.cancel = e2;
  }
}
function x$1(e2) {
  e2.node?.invalidateServiceBVsInRenderSR(), e2.ref?.invalidateServiceBVsInRenderSR();
}
function S$1(e2) {
  return de(e2, -2);
}
function R$2(e2) {
  return de(e2, 2);
}
function C$1(e2, t2) {
  return t2 + (e2 ? 1 : 0);
}
function w$1(e2, t2) {
  return (-2 & e2) === t2;
}
function M$2(e2) {
  return 1 == (1 & e2);
}
function E$1(e2, t2) {
  return e2 < 0 ? -1 : t2 > 0 ? e2 / t2 | 0 : 0;
}
function V$1(e2, t2) {
  return e2 < 0 ? -e2 - 1 : 0 === t2 ? e2 : e2 % t2;
}
function A(e2, t2, i2) {
  return -1 === t2 ? -(e2 + 1) : 0 === i2 ? e2 : t2 * i2 + e2;
}
const O = [["maxScreenThreshold", d$3.MaxScreenThreshold], ["screenSpaceRelative", d$3.ScreenSpaceRelative], ["removedFeatureDiameter", d$3.RemovedFeatureDiameter], ["distanceRangeFromDefaultCamera", d$3.DistanceRangeFromDefaultCamera]];
function L(e2) {
  if (e2) {
    for (let t2 = 0; t2 < e2.length; t2++)
      for (const i2 of O)
        if (i2[0] === e2[t2].metricType)
          return { lodMetric: i2[1], maxError: e2[t2].maxError };
  }
  return { lodMetric: d$3.None, maxError: 0 };
}
let k$3 = class k {
  constructor() {
    this.known = 0, this.knownNodes = 0, this.missing = 0, this.missingNodes = 0, this.unremoved = 0;
  }
};
function F$1(e2) {
  return Math.sqrt(e2 * (4 / Math.PI));
}
const z$1 = w$3(), D$2 = w$3(), T$3 = w$3(), B$1 = w$3(), Q$1 = has("esri-mobile") ? 100 : 300;
var a2;
!function(a3) {
  a3[a3.FadeIn = 0] = "FadeIn", a3[a3.FadeOut = 1] = "FadeOut";
}(a2 || (a2 = {}));
class o {
  constructor(e2) {
    this._layerView = e2, this._lodGlobalDirty = false;
  }
  startNodeLoading(e2, i2, s2, o2) {
    this._maxLodLevel = o2.maxLodLevel, this._index = s2, this._isNodeInScaleBounds = e2, this._removeNodes = i2;
  }
  shouldLoadNode(e2) {
    if (null == e2)
      return false;
    const i2 = this._index.nodeTraversalState(e2);
    return !!this._isChosenMaxLOD(i2) || !!i2.isChosen && this._childrenRequireLoading(e2);
  }
  setLodGlobalDirty() {
    this._lodGlobalDirty = true;
  }
  get requiresLODGlobalHandling() {
    return null != this._index && true === this._lodGlobalDirty;
  }
  lodGlobalHandling(e2) {
    if (!this.requiresLODGlobalHandling)
      return false;
    this._lodGlobalDirty = false;
    const i2 = this._layerView.view.resourceController.memoryController.usedMemory, s2 = Math.max(0, Math.floor(10 * (i2 - 1)));
    d$1.clear(), this._lodGlobalHandling(this._index.rootNode, s2, false, !!this._layerView.nodeCrossfadingEnabled);
    const o2 = d$1.length;
    this._removeNodes(d$1, e2);
    const t2 = d$1.length < o2;
    return 0 !== d$1.length && (this._lodGlobalDirty = true), d$1.clear(), t2;
  }
  _lodGlobalHandling(e2, o2, t2, n2) {
    if (null == e2)
      return false;
    const l2 = e2.index, r2 = this._index, a$12 = this._layerView, h3 = r2.nodeTraversalState(e2), u2 = this._isChosenMaxLOD(h3), _2 = e2.resources.isEmpty;
    if (u2 && _2)
      return e2.childrenLoaded > 0 && this._removeChildrenRecursive(e2), true;
    const c2 = a$12.isNodeLoaded(l2);
    if (n2 && c2 && u2) {
      const i2 = !t2 && this.hasNoVisibleChildren(e2);
      a$12.fadeNode(l2, a2.FadeIn, !i2);
    }
    const x2 = c2 && (!a$12.isNodeFullyFadedIn || a$12.isNodeFullyFadedIn(l2));
    if (c2 && (a$12.updateNodeState(l2, u2 ? c$4.Leaf : c$4.Hole), u2))
      return x2 && this._removeChildrenRecursive(e2), x2;
    const L2 = e2.childCount > 0;
    let y2 = L2;
    if (L2)
      for (let i2 = 0; i2 < e2.childCount; i2++) {
        const e3 = r2.getChildIndex(l2, i2), s2 = r2.getNode(e3);
        if (null != s2) {
          !(!r2.isGeometryVisible(e3) || this._lodGlobalHandling(s2, o2, t2 || x2, n2)) && this._isNodeInScaleBounds(s2) && (y2 = false);
        } else
          r2.isNodeVisible(e3) && (y2 = false);
      }
    const N2 = c2 && !u2 && (y2 || d$1.length < o2);
    N2 && d$1.push(l2), !n2 || N2 || !c2 || t2 || y2 || a$12.fadeNode(l2, a2.FadeIn, false);
    const m2 = e2.resources.isEmpty;
    return y2 || x2 && !N2 || m2;
  }
  _removeChildrenRecursive(e2) {
    this._index.traverseDescendants(e2, (e3) => ((this._layerView.isNodeLoaded(e3.index) || this._layerView.isNodeReloading(e3.index)) && d$1.push(e3.index), e3.childrenLoaded > 0));
  }
  hasNoVisibleChildren(e2) {
    let i2 = true;
    return this._index.traverseDescendants(e2, (e3) => !(!i2 || !this._index.isNodeVisible(e3.index)) && (this._layerView.isNodeLoaded(e3.index) ? (i2 = false, false) : e3.childrenLoaded > 0)), i2;
  }
  _childrenRequireLoading(e2) {
    let i2 = false, s2 = true;
    return this._index.traverseDescendants(e2, (e3) => {
      if (!s2 || !this._index.isNodeVisible(e3.index))
        return false;
      const o2 = this._index.nodeTraversalState(e3);
      return this._isChosenMaxLOD(o2) && this._index.isGeometryVisible(e3.index) && (i2 = true), this._layerView.isNodeLoaded(e3.index) ? (s2 = false, false) : e3.childrenLoaded > 0;
    }), s2 && i2;
  }
  _isChosenMaxLOD(e2) {
    return e2.isChosen && (!e2.nodeHasLOD || e2.lodLevel === this._maxLodLevel);
  }
}
const d$1 = new l$1({ deallocator: null });
function h$1(e2, o2, a3) {
  const s2 = /* @__PURE__ */ new Map(), t$12 = (e3, o3) => {
    if (null == e3)
      return -1;
    const r2 = s2.get(e3.id);
    if (r2)
      return r2.usage |= o3, r2.id;
    const a4 = s2.size;
    return s2.set(e3.id, { id: a4, usage: o3 }), a4;
  }, l2 = o2.pbrMetallicRoughness, i2 = l2?.baseColorFactor, u$12 = o2.emissiveFactor, p2 = has("disable-feature:diffuse-rendering-i3s") || a3 ? n$2({ normalTexture: o2.normalTexture, emissiveTexture: o2.emissiveTexture, emissiveFactor: o2.emissiveFactor, occlusionTexture: o2.occlusionTexture, metallicRoughnessTexture: l2?.metallicRoughnessTexture, metallicFactor: l2?.metallicFactor, roughnessFactor: l2?.roughnessFactor }) : u({ normalTexture: o2.normalTexture, emissiveTexture: o2.emissiveTexture, emissiveFactor: o2.emissiveFactor, occlusionTexture: o2.occlusionTexture, metallicRoughnessTexture: l2?.metallicRoughnessTexture, metallicFactor: l2?.metallicFactor, roughnessFactor: l2?.roughnessFactor }), h3 = p2 ? t[0] : l2?.metallicFactor ?? r$4[0], x2 = p2 ? t[1] : l2?.roughnessFactor ?? r$4[1], F2 = "mask" === o2.alphaMode ? s$1.Color | s$1.AlphaMask : s$1.Color, b3 = { baseColorFactor: i2 ? [i2[0], i2[1], i2[2], i2[3]] : [1, 1, 1, 1], baseColorTextureId: t$12(l2?.baseColorTexture, F2), metallicRoughnessTextureId: t$12(l2?.metallicRoughnessTexture, s$1.MetallicRoughness), metallicFactor: h3, roughnessFactor: x2 }, C2 = { alphaMode: o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, cullFace: "none" === o2.cullFace ? e$1.None : "back" === o2.cullFace ? e$1.Back : "front" === o2.cullFace ? e$1.Front : e$1.None, normalTextureId: t$12(o2.normalTexture, s$1.Normal), emissiveTextureId: t$12(o2.emissiveTexture, s$1.Emissive), occlusionTextureId: t$12(o2.occlusionTexture, s$1.Occlusion), emissiveFactor: u$12 ? [u$12[0], u$12[1], u$12[2]] : [0, 0, 0], metallicRoughness: b3, wrapTextures: false, hasParametersFromSource: p2 }, P2 = [];
  return s2.forEach(({ usage: o3 }, r2) => {
    const a4 = null != e2 && e2[r2] && e2[r2].formats, s3 = a4 ? T$2(a4.map(({ name: e3, format: o4 }) => ({ name: e3, encoding: f[o4] }))) : [];
    P2.push({ id: r2, usage: o3, encodings: s3 });
  }), { material: C2, textures: P2 };
}
function T$2(e2) {
  return e2.sort((e3, o2) => e3.encoding - o2.encoding);
}
const f = { ktx2: e.KTX2, basis: e.Basis, dds: e.DDS_S3TC, png: e.PNG, jpg: e.JPG, "ktx-etc2": e.KTX_ETC2 }, x = { [u$2.KTX2_ENCODING]: e.Basis, [u$2.BASIS_ENCODING]: e.Basis, [u$2.DDS_ENCODING]: e.DDS_S3TC, "image/png": e.PNG, "image/jpg": e.JPG, "image/jpeg": e.JPG, "image/ktx": e.KTX_ETC2 };
function F(o2) {
  const a3 = o2?.materialDefinitions ? Object.keys(o2.materialDefinitions)[0] : null, s2 = o2?.textureDefinitions ? Object.keys(o2.textureDefinitions)[0] : null, t2 = a3 ? o2.materialDefinitions?.[a3] : null, l2 = s2 ? o2.textureDefinitions?.[s2] : null, i2 = b2();
  if (null != t2) {
    const o3 = t2.params;
    o3.diffuse && (i2.metallicRoughness.baseColorFactor = [o3.diffuse[0], o3.diffuse[1], o3.diffuse[2], 1]), null != o3.doubleSided && (i2.doubleSided = o3.doubleSided, i2.cullFace = o3.doubleSided ? e$1.None : e$1.Back), "none" !== o3.cullFace && "front" !== o3.cullFace && "back" !== o3.cullFace || (i2.cullFace = "none" === o3.cullFace ? e$1.None : "back" === o3.cullFace ? e$1.Back : e$1.Front), o3.transparency && (i2.metallicRoughness.baseColorFactor[3] = e$7(1 - o3.transparency, 0, 1)), (o3.useVertexColorAlpha || i2.metallicRoughness.baseColorFactor[3] < 1) && (i2.alphaMode = "blend");
  }
  const u2 = [];
  if (null != l2) {
    const e2 = 0;
    !l2.wrap || "repeat" !== l2.wrap[0] && "repeat" !== l2.wrap[1] || (i2.wrapTextures = true);
    let o3 = s$1.Color;
    "rgba" === l2.channels && (i2.alphaMode = "blend", o3 |= s$1.AlphaMask);
    const a4 = l2.images.length - 1, s3 = l2.images[a4], t3 = (e3) => e3?.split("/").pop(), n2 = Array.isArray(l2.encoding) ? T$2(l2.encoding.map((e3, o4) => ({ name: t3(s3.href[o4]), encoding: x[e3] || 0 }))) : [{ name: t3(s3.href), encoding: x[l2.encoding] || 0 }];
    u2.push({ id: e2, usage: o3, encodings: n2 }), i2.metallicRoughness.baseColorTextureId = e2;
  }
  return { material: i2, textures: u2 };
}
const b2 = () => ({ alphaMode: "opaque", alphaCutoff: o$2, doubleSided: true, cullFace: e$1.None, normalTextureId: -1, emissiveTextureId: -1, occlusionTextureId: -1, emissiveFactor: [0, 0, 0], metallicRoughness: { baseColorFactor: [0.8, 0.8, 0.8, 1], baseColorTextureId: -1, metallicRoughnessTextureId: -1, metallicFactor: 0, roughnessFactor: 0.6 }, wrapTextures: false, hasParametersFromSource: true });
function C(e2, o2, a3, s2) {
  if (null == e2?.data)
    return null;
  const t2 = e2.data, l2 = s2.renderingContext.parameters.maxMaxAnisotropy, n2 = l2 > 1, i2 = a3 || !o2.wrapTextures ? P : S, c2 = N$1(e2.encoding), m2 = e2.usage & s$1.Color ? "opaque" === o2.alphaMode ? 3 : 4 : 3;
  return new N$2(t2, { mipmap: n2, maxAnisotropy: l2, encoding: c2, wrap: i2, components: m2, noUnpackFlip: true });
}
const P = { s: D$3.CLAMP_TO_EDGE, t: D$3.CLAMP_TO_EDGE }, S = { s: D$3.REPEAT, t: D$3.REPEAT };
function M$1(o2, l2, n2, u2, c2, m2) {
  const p2 = m2.rendererTextureUsage, h3 = (e2) => w(u2, n2, e2 & p2), T2 = l2.metallicRoughness.baseColorFactor, f2 = e$7(l2.metallicRoughness.baseColorFactor[3], 0, 1);
  o2.baseColor = [T2[0], T2[1], T2[2], f2], o2.hasParametersFromSource = !!l2.hasParametersFromSource, o2.usePBR = m2.usePBR, o2.mrrFactors = [l2.metallicRoughness.metallicFactor, l2.metallicRoughness.roughnessFactor, l2.hasParametersFromSource ? t[2] : r$4[2]], o2.emissiveFactor = l2.emissiveFactor, o2.isIntegratedMesh = m2.isIntegratedMesh, o2.textureAlphaCutoff = "mask" === l2.alphaMode ? l2.alphaCutoff : o$2, o2.alphaDiscardMode = "opaque" === l2.alphaMode ? s$5.Opaque : "mask" === l2.alphaMode ? s$5.Mask : s$5.MaskBlend;
  const x2 = [], F2 = h3(s$1.Color | s$1.AlphaMask);
  null != F2 && (o2.baseColorTexture = new s$6(c2, F2), x2.push(o2.baseColorTexture.loadPromise));
  const b3 = h3(s$1.MetallicRoughness);
  null != b3 && (o2.metallicRoughnessTexture = new s$6(c2, b3), x2.push(o2.metallicRoughnessTexture.loadPromise));
  const C2 = h3(s$1.Emissive);
  null != C2 && (o2.emissionTexture = new s$6(c2, C2), x2.push(o2.emissionTexture.loadPromise));
  const P2 = h3(s$1.Occlusion);
  null != P2 && (o2.occlusionTexture = new s$6(c2, P2), x2.push(o2.occlusionTexture.loadPromise));
  const S2 = h3(s$1.Normal);
  return null != S2 && (o2.normalTexture = new s$6(c2, S2), x2.push(o2.normalTexture.loadPromise)), o2.commonMaterialParameters.hasSlicePlane = m2.slicePlaneEnabled, o2.commonMaterialParameters.doubleSided = l2.doubleSided, o2.commonMaterialParameters.cullFace = l2.cullFace, o2.ellipsoidMode = a$3(m2.viewSpatialReference), Promise.all(x2);
}
function R$1(e$12) {
  const r2 = !!e$12.compressedTextureS3TC, a3 = !!e$12.compressedTextureETC, s2 = has("disable-feature:i3s-basis") ? 0 : e.Basis | e.KTX2, t2 = e.JPG | e.PNG, l2 = s2 | e.DDS_S3TC;
  return t2 | (r2 ? l2 : 0) | (a3 ? s2 : 0);
}
function D$1(e2, o2) {
  if (null != o2)
    return e2.find((e3) => 0 != (e3.encoding & o2));
}
function w(e2, o2, a3) {
  if (null == e2 || a3 === s$1.None)
    return null;
  for (let r2 = 0; r2 < e2.length; r2++) {
    const s2 = e2[r2];
    if (null != s2 && 0 != (s2.usage & a3)) {
      const e3 = o2[r2];
      return null != e3 ? e3.id : null;
    }
  }
  return null;
}
function N$1(e$12) {
  switch (e$12) {
    case e.KTX2:
      return u$2.KTX2_ENCODING;
    case e.Basis:
      return u$2.BASIS_ENCODING;
    case e.DDS_S3TC:
      return u$2.DDS_ENCODING;
    case e.PNG:
      return "image/png";
    case e.JPG:
      return "image/jpeg";
    case e.KTX_ETC2:
      return "image/ktx";
    default:
      return "";
  }
}
class d {
  constructor(e2, t2, r2, i2, o2, n2) {
    if (this._streamDataController = t2, this._logger = r2, this._defaultGeometrySchema = i2, this._requiredAttributes = o2, this._options = n2, this._logLayer = e2, this._layerUrl = e2.parsedUrl.path, this._geometryDefinitions = e2.geometryDefinitions, e2.materialDefinitions) {
      const t3 = e2.textureSetDefinitions;
      this._materialAndTextures = e2.materialDefinitions.map((r3) => h$1(t3, r3, "integrated-mesh" === e2.type));
    }
  }
  _load(e2, t2, r2) {
    return this._streamDataController.request(e2, t2, r2);
  }
  _loadAttribute(e2, t2, r2) {
    const i2 = `${this._layerUrl}/nodes/${e2.resources.attributes}/attributes/${t2.key}/0`;
    return this._load(i2, "binary", r2).then((e3) => I$3(t2, e3));
  }
  async loadAttributes(e2, t2, r2) {
    const o2 = await Promise.allSettled(t2.map((t3) => this._loadAttribute(e2, t3.attributeStorageInfo, r2))), n2 = {};
    for (let s2 = 0; s2 < t2.length; ++s2) {
      const r3 = o2[s2], a3 = t2[s2];
      if ("fulfilled" === r3.status) {
        const e3 = r3.value;
        n2[a3.name] = e3;
      } else {
        const t3 = r3.reason;
        a$4(t3), this._logger.error("#loadAttributes", this._logLayer, `Failed to load attributeData for '${a3.name}' on node '${e2.id}'`, t3);
      }
    }
    return n2;
  }
  async loadNodeData(r2, i2) {
    const o2 = null != this._requiredAttributes && r2.resources.attributes ? _$3(this.loadAttributes(r2, this._requiredAttributes, i2)) : null, { bufferDefinition: n2, bufferIndex: s2 } = _(this._geometryDefinitions, r2), u2 = !!r2.resources.geometry, f2 = u2 ? _$3(this._loadGeometry(r2.resources.geometry, s2, i2)) : null, d2 = r2.resources.hasSharedResource ? await this._loadShared(r2, i2) : null, y2 = r2.resources.materialDefinition, b3 = this._materialAndTextures && null != y2 && y2 >= 0 ? this._materialAndTextures[y2] : null != d2 ? F(d2) : null, D2 = b3?.material, p2 = b3?.textures ?? [], x2 = `${r2.id}`, A2 = !u2 && this._options.loadFeatureData, w2 = A2 ? await this._loadFeatureData(x2, i2) : null, T2 = A2 ? m(w2) : c(D2), $2 = null == T2 ? h2(w2) : null, j2 = p2.length > 0 ? _$3(this.loadTextures(r2, p2, i2)) : null;
    let I2 = null, S2 = null;
    if (f2) {
      I2 = y$3(await f2);
      const e2 = g(this._defaultGeometrySchema, d2);
      S2 = p$2(n2, e2);
    }
    const U = j2 ? y$3(await j2) : null, q2 = o2 ? y$3(await o2) : {}, B2 = q2 ? { attributeData: q2, loadedAttributes: this._requiredAttributes } : null;
    if (null != T2)
      return { geometryData: T2, attributeDataInfo: B2, geometryBuffer: I2, geometryDescriptor: S2, requiredTextures: p2, textureData: U };
    if (null != $2)
      return { pointData: $2, attributeDataInfo: B2, geometryBuffer: I2, geometryDescriptor: S2, requiredTextures: p2, textureData: U };
    throw new Error();
  }
  static _addAbsoluteHrefTexture(e2, t2) {
    const r2 = e2.textureDefinitions;
    if (null != r2)
      for (const i2 of Object.keys(r2))
        for (const e3 of r2[i2].images)
          Array.isArray(e3.href) ? e3.hrefConcat = e3.href.map((e4) => _$4(e4, t2)) : e3.hrefConcat = _$4(e3.href, t2);
  }
  static _fixTextureEncodings(e2) {
    const t2 = e2.textureDefinitions;
    if (null != t2)
      for (const r2 in t2) {
        const e3 = t2[r2];
        if (Array.isArray(e3.encoding))
          for (let t3 = 0; t3 < e3.encoding.length; t3++) {
            const r3 = e3.encoding[t3];
            "data:" === r3.substring(0, 5) && (e3.encoding[t3] = r3.substring(5));
          }
        else {
          const t3 = e3.encoding;
          "data:" === t3.substring(0, 5) && (e3.encoding = t3.substring(5));
        }
      }
  }
  async _loadShared(e2, t2) {
    if (null == e2.resources.geometry)
      return {};
    const r2 = `${this._layerUrl}/nodes/${e2.resources.geometry}/shared`, i2 = await this._load(r2, "json", t2);
    return d._fixTextureEncodings(i2), d._addAbsoluteHrefTexture(i2, r2), i2;
  }
  _loadTexture(e$12, t2, r2, i2, o2, s2) {
    let a3 = false;
    return o2 === e.DDS_S3TC || o2 === e.KTX2 || o2 === e.Basis ? this._load(e$12, "binary", s2).then((e2) => ({ id: t2, usage: r2, data: e2, encoding: o2, downsampled: a3 })) : this._load(e$12, "image", s2).then((e2) => {
      let n2 = e2;
      const s3 = 4096, u2 = 2;
      if (i2 && e2.width * e2.height >= s3) {
        const t3 = Math.ceil(e2.width / u2), r3 = Math.ceil(e2.height / u2), i3 = document.createElement("canvas");
        i3.width = t3, i3.height = r3;
        i3.getContext("2d").drawImage(e2, 0, 0, t3, r3), n2 = i3, a3 = true;
      }
      return { id: t2, usage: r2, data: n2, encoding: o2, downsampled: a3 };
    });
  }
  loadTextures(e2, t2, r2) {
    const i2 = !!this._options.uncompressedTextureDownsamplingEnabled, o2 = this._options.textureUsageMask;
    return Promise.all(t2.map((t3) => {
      if (0 == (t3.usage & o2))
        return null;
      const n2 = D$1(t3.encodings, this._options.textureEncodings);
      if (null == n2)
        return this._logger.error("#loadTextures", this._logLayer, `No known encoding for texture found on node ${e2.id}`), Promise.reject();
      const s2 = e2.resources.texture || e2.id, a3 = `${this._layerUrl}/nodes/${s2}/textures/${n2.name}`;
      return this._loadTexture(a3, t3.id, t3.usage, i2, n2.encoding, r2);
    }));
  }
  _loadFeatureData(e2, t2) {
    const r2 = `${this._layerUrl}/nodes/${e2}/features/0`;
    return this._load(r2, "json", t2);
  }
  _loadGeometry(e2, t2, r2) {
    const i2 = `${this._layerUrl}/nodes/${e2}/geometries/${t2}`;
    return this._load(i2, "binary", r2);
  }
}
function c(e2) {
  return { featureIds: [], geometries: [{ type: "ArrayBufferView", params: { material: e2 } }], featureDataPosition: [0, 0, 0] };
}
function m(e2) {
  if (!e2)
    return null;
  for (const t2 of e2.featureData) {
    const e3 = t2.geometries;
    if (null != e3)
      for (const r2 of e3)
        return { featureIds: [t2.id], featureDataPosition: t2.position, geometries: [r2] };
  }
  return null;
}
function h2(e2) {
  if (!e2)
    return null;
  const t2 = new Array();
  for (const r2 of e2.featureData)
    null != r2.position && t2.push({ featureIds: [r2.id], featureDataPosition: r2.position, geometries: [] });
  return t2;
}
function g(e2, t2) {
  if (!e2 || !t2?.materialDefinitions)
    return e2;
  const i2 = Object.keys(t2.materialDefinitions)[0];
  return !t2.materialDefinitions[i2].params.vertexRegions && e2.vertexAttributes.region && delete (e2 = a$5(e2)).vertexAttributes.region, e2;
}
function _(e2, t2) {
  const r2 = { bufferDefinition: null, bufferIndex: 0 }, i2 = t2.resources.geometryDefinition;
  if (null == e2 || null == i2 || i2 < 0)
    return r2;
  const o2 = i2 >= 0 ? e2[i2].geometryBuffers : null;
  if (null == o2)
    return r2;
  for (let n2 = 0; n2 < o2.length; n2++) {
    const e3 = o2[n2];
    if (null == e3.compressedAttributes)
      r2.bufferIndex = n2, r2.bufferDefinition = o2[n2];
    else if ("draco" === e3.compressedAttributes.encoding && !has("disable-feature:i3s-draco"))
      return r2.bufferIndex = n2, r2.bufferDefinition = e3, r2;
  }
  return r2;
}
class r {
  constructor(e2, t2, r2) {
    this._requester = e2, this._customParameters = t2, this._apiKey = r2, this._activeRequests = /* @__PURE__ */ new Set();
  }
  get busy() {
    return this._requester.busy;
  }
  request(r2, s2, o2) {
    const a3 = new AbortController(), l2 = w$4(o2, () => a3.abort()), i2 = { signal: a3.signal, query: { ...this._customParameters, token: this._apiKey } }, n2 = this._requester.request(r2, s2, i2), u2 = { response: n2, abortController: a3, abortHandle: l2 };
    return this._activeRequests.add(u2), $$2(n2, () => {
      u2.abortController = null, u2.abortHandle?.remove(), u2.abortHandle = null, this._activeRequests.delete(u2);
    }), n2;
  }
  cancelAll() {
    this._activeRequests.forEach((e2) => {
      e2.abortController?.abort(), e2.abortController = null, e2.abortHandle?.remove();
    }), this._activeRequests.clear();
  }
}
const T$1 = 1e5;
class q {
  constructor(e2, t2, i2, s2, n2, r2, o2, a3, c2 = {}) {
    this._indexSR = e2, this._renderCoordsHelper = t2, this._clippingArea = n2, this._elevationProvider = r2, this._viewingMode = o2, this._options = c2, this._frustum = H$2(), this._frustumMbs = n$3(), this._useFrustumCulling = false, this._poi = n$4(), this._elevationContext = null, this.minDistance = 1 / 0, this.maxDistance = 0, this.maxLodLevel = 2, this._tmpObb = new O$1(), this._tmp1 = n$4(), this._tmp2 = n$4(), this._tmp3 = n$4(), this._tmp0 = n$4(), this._screenspaceErrorBias = c2.screenspaceErrorBias || 1, this._progressiveLoadFactor = c2.progressiveLoadFactor || 1, this.updateCamera(i2, s2);
    const l2 = this._renderCoordsHelper.spatialReference;
    this._renderSR = l2, this._renderSRSphericalPCPF = a$6(l2), this._isGlobalMode = l2 === this._renderSRSphericalPCPF, this.updateElevationInfo(a3), this._tmpPoint = e$8(0, 0, 0, e2), this._isECEFOBBInLocalMode = this._indexSR.isWGS84 && (l2.isWebMercator || O$3(l2)), this._indexSREllipsoidRadius = s$7(this._indexSR).radius, this._indexSRSphericalPCPF = a$6(e2), this._projectorIndexSRToIndexSRSphericalPCPF = W$2(this._indexSR, this._indexSRSphericalPCPF);
  }
  updateElevationInfo(e2) {
    null != e2 ? (this._elevationContext = o$3.fromElevationInfo(e2), this._elevationContext.updateFeatureExpressionInfoContext(u$3(d$4(e2, false)))) : this._elevationContext = null;
  }
  updateCamera(n2, r2) {
    if (this._useFrustumCulling = r2, r2) {
      L$1(n2.viewMatrix, n2.projectionMatrix, this._frustum, H$1);
      {
        const r3 = n2.eye, o2 = k$2;
        z$2(o2, n2.viewForward);
        const a3 = W$1;
        K$2(a3, H$1[4], r3);
        const c2 = 0.5 * P$2(a3, a3) / P$2(o2, a3), l2 = this._frustumMbs;
        q$1(l2, r3, o2, c2);
        const h3 = 1 + c2;
        l2[3] = h3;
      }
    }
    this._screenSizeFactor = 1 / (n2.perScreenPixelRatio / 2), this._camPos = n2.eye, this.minDistance = 1 / 0, this.maxDistance = 0;
  }
  setPointOfInterest(e2) {
    this._poi = e2;
  }
  updateScreenSpaceErrorBias(e2) {
    const t2 = this._screenspaceErrorBias;
    return this._screenspaceErrorBias = e2, t2;
  }
  updateClippingArea(e2) {
    this._clippingArea = e2;
  }
  expandElevationRange(e2, t2, i2) {
    if (null == this._elevationContext)
      return;
    const s2 = e2.serviceMbsInIndexSR;
    if (!s2)
      return;
    const n2 = "relative-to-scene" === this._elevationContext.mode ? "scene" : "ground";
    if (this._elevationProvider.getSphereElevationBounds) {
      const e3 = this._elevationProvider.getSphereElevationBounds(s2, this._indexSR, n2);
      return void (e3 && i2.expandElevationRange(e3));
    }
    const r2 = s2[0], o2 = s2[1], a3 = s2[2], c2 = this._elevationProvider.getElevation(r2, o2, a3, this._indexSR, n2);
    c2 && i2.expandElevationRangeValues(c2, c2);
    const l2 = t2 ? null : this._elevationProvider.getRootElevationBounds?.();
    l2 && i2.expandElevationRange(l2);
  }
  getServiceMbsInRenderSR(e2) {
    const t2 = e2.serviceMbsInRenderSR;
    if (ye(t2))
      return t2;
    e2.serviceMbsInIndexSR && a$7(t2, e2.serviceMbsInIndexSR);
    const i2 = e2.elevationRangeMin;
    if (this._elevationContext && Number.isFinite(i2)) {
      let s2 = 0, n2 = 0;
      const r2 = e2.elevationRangeMax;
      switch (this._elevationContext.mode) {
        case "relative-to-ground":
          s2 = this._elevationContext.geometryZWithOffset(t2[2], this._renderCoordsHelper) + i2 - t2[2], n2 = r2 - i2;
          break;
        case "on-the-ground":
          s2 = i2 - t2[2], n2 = r2 - i2;
      }
      t2[2] += s2 + 0.5 * n2, t2[3] += 0.5 * n2;
    } else
      this._elevationContext && t2[3] < T$1 && (this._tmpPoint.x = t2[0], this._tmpPoint.y = t2[1], this._tmpPoint.z = t2[2], t2[2] = f$2(this._tmpPoint, this._elevationProvider, this._elevationContext, this._renderCoordsHelper));
    return a$2(t2, this._indexSR, t2, this._renderSR), t2;
  }
  getAndUpdateVisibilityObbInRenderSR(e2) {
    {
      const t3 = e2.visibilityObbInRenderSR;
      if (t3)
        return t3;
    }
    const t2 = 0.01 * this._indexSREllipsoidRadius, { serviceMbsInIndexSR: i2, serviceObbInIndexSR: s2 } = e2;
    if (null == s2 || !i2 || !s2.isValid || this._isECEFOBBInLocalMode && (s2.halfSizeX > t2 || s2.halfSizeY > t2 || s2.halfSizeZ > t2))
      return null;
    {
      let t3 = e2.serviceObbInRenderSR;
      if (null == t3)
        t3 = new O$1(), e2.serviceObbInRenderSR = t3;
      else if (t3.isValid)
        return t3;
      const n2 = i2[3];
      let r2 = 0, o2 = 0;
      const a3 = s2.centerZ, c2 = this._renderCoordsHelper, l2 = this._elevationContext;
      if (l2 && e2.elevationRangeValid) {
        const t4 = e2.elevationRangeMin, i3 = e2.elevationRangeMax;
        switch (l2.mode) {
          case "relative-to-ground":
            r2 = l2.geometryZWithOffset(a3, c2) + t4 - a3, o2 = i3 - t4;
            break;
          case "on-the-ground":
            r2 = t4 - a3, o2 = i3 - t4;
        }
      } else if (l2 && n2 < T$1) {
        const e3 = this._tmpPoint;
        e3.x = s2.centerX, e3.y = s2.centerY, e3.z = a3, r2 = f$2(e3, this._elevationProvider, l2, c2) - a3;
      }
      const h3 = o2 > 0, d2 = h3 ? this._tmpObb : t3;
      return s2.transform(d2, this._indexSR, this._renderSR, r2, this._renderSRSphericalPCPF, this._indexSRSphericalPCPF, this._projectorIndexSRToIndexSRSphericalPCPF), h3 && L$2(d2, 0, o2, this._viewingMode, t3), t3;
    }
  }
  getNodeObbInRenderSRIndependentOfElevationOffset(e2) {
    {
      const t3 = e2.visibilityObbInRenderSR ?? e2.serviceObbInRenderSR ?? null;
      if (t3?.isValid)
        return t3;
    }
    const t2 = e2.serviceObbInIndexSR;
    return t2 ? (t2.transform(X$1, this._indexSR, this._renderSR, void 0, this._renderSRSphericalPCPF, this._indexSRSphericalPCPF, this._projectorIndexSRToIndexSRSphericalPCPF), X$1) : null;
  }
  ensureElevationAgnosticBoundingVolume(e2, t2) {
    -1 === e2.elevationAgnosticBoundingVolume[3] && (t2 === l$3.Global ? this._updateElevationAgnosticBoundingVolumeGlobal(e2) : this._updateElevationAgnosticBoundingVolumeLocal(e2));
  }
  _updateElevationAgnosticBoundingVolumeGlobal(t2) {
    const s2 = this.getNodeObbInRenderSRIndependentOfElevationOffset(t2), o2 = t2.elevationAgnosticBoundingVolume, a3 = Y$1;
    let c2 = -1;
    if (s2) {
      s2.getCenter(a3), z$2(a3, a3), s2.getCorners(J$1);
      for (const t3 of J$1) {
        z$2(t3, t3);
        const s3 = P$2(t3, a3);
        if (s3 <= 0)
          return void (o2[3] = -1);
        const n2 = Math.sqrt(1 - s3 * s3);
        c2 = Math.max(c2, n2);
      }
    } else {
      const i2 = t2.serviceMbsInRenderSR;
      if (!ye(i2))
        return void (o2[3] = -1);
      {
        const t3 = r$5(Y$1, Z$1(i2)), s3 = i2[3], o3 = Y$2(t3);
        c2 = 0 === s3 ? 0 : o3 < s3 ? -1 : s3 / o3, z$2(t3, t3);
      }
    }
    r$6(o2, a3);
    const l2 = 1e-3;
    o2[3] = c2 + l2;
  }
  _updateElevationAgnosticBoundingVolumeLocal(e2) {
    const t2 = e2.elevationAgnosticBoundingVolume, i2 = this.getNodeObbInRenderSRIndependentOfElevationOffset(e2);
    if (i2) {
      const e3 = i2.getCenter(Y$1);
      e3[2] = 0, r$6(t2, e3);
      let s2 = 0;
      const n2 = K$1;
      i2.getCorners(J$1);
      for (const t3 of J$1) {
        t3[2] = 0;
        const e4 = X$2(n2, t3);
        s2 = Math.max(s2, e4);
      }
      t2[3] = Math.sqrt(s2);
    } else {
      const i3 = e2.serviceMbsInRenderSR;
      if (ye(i3)) {
        const e3 = r$5(Y$1, Z$1(i3));
        e3[2] = 0, r$6(t2, e3), t2[3] = i3[3];
      }
    }
  }
  isNodeVisible(e2) {
    const t2 = this.getServiceMbsInRenderSR(e2);
    if (!this._isMBSinClippingArea(t2))
      return false;
    if (!this._useFrustumCulling)
      return true;
    const i2 = this.getAndUpdateVisibilityObbInRenderSR(e2);
    return i2 ? i2.isVisible(this._frustum) : s$8(this._frustum, k$4(t2));
  }
  isElevationAgnosticBoundingVolumeVisible(e2, t2) {
    return !this._useFrustumCulling || (-1 === t2[3] || (e2 === l$3.Global ? this._isConeVisibleInFrustum(t2) : this._isCylinderVisibleInFrustum(t2)));
  }
  _isConeVisibleInFrustum(e2) {
    const t2 = this._frustumMbs, s2 = t2, n2 = Y$2(s2), o2 = t2[3], l2 = e2, h3 = P$2(l2, s2), d2 = e2[3];
    if (d2 > 0.9)
      return true;
    if (n2 <= o2)
      return true;
    {
      const e3 = g$3(Z, l2, h3);
      if (U$1(e3, s2) < o2)
        return true;
    }
    const u2 = h3 / n2;
    if (h3 <= 0) {
      return -u2 < o2;
    }
    const m2 = Math.sqrt(1 - u2 * u2);
    if (m2 < d2)
      return true;
    const p2 = o2 / n2;
    return m2 * Math.sqrt(1 - p2 * p2) - p2 * u2 < d2;
  }
  _isCylinderVisibleInFrustum(e2) {
    const t2 = this._frustumMbs, i2 = t2, s2 = t2[3], r2 = r$5(Z, i2);
    r2[2] = 0;
    const o2 = e2[3];
    return U$1(r2, e2) <= o2 + s2;
  }
  isGeometryVisible(e2) {
    if (!this._useFrustumCulling)
      return true;
    const t2 = e2.geometryObbInRenderSR;
    return t2?.isVisible(this._frustum) ?? this.isNodeVisible(e2);
  }
  _isMBSinClippingArea(e2) {
    return null == this._clippingArea || O$4(this._clippingArea, e2) !== F$2.OUTSIDE;
  }
  _screenSpaceDiameterMbs(e2, t2) {
    const i2 = this.getServiceMbsInRenderSR(e2), s2 = Math.sqrt(p$3(Z$1(i2), this._camPos)), n2 = s2 - i2[3];
    return this._updateMinMaxDistance(s2), n2 < 0 ? 0.5 * Number.MAX_VALUE : t2 / n2 * this._screenSizeFactor;
  }
  calcCameraDistance(e2) {
    return this.calcCameraDistanceToCenter(e2) - this.getServiceMbsInRenderSR(e2)[3];
  }
  calcCameraDistanceToCenter(e2) {
    const t2 = this.getServiceMbsInRenderSR(e2), i2 = x$3(Z$1(t2), this._camPos);
    return this._updateMinMaxDistance(i2), i2;
  }
  calcAngleDependentLoD(e2) {
    const t2 = this.getServiceMbsInRenderSR(e2), i2 = t2[3], s2 = (Math.abs(t2[0] * (t2[0] - this._camPos[0]) + t2[1] * (t2[1] - this._camPos[1]) + t2[2] * (t2[2] - this._camPos[2])) / s$9(Z$1(t2)) + i2) / x$3(Z$1(t2), this._camPos);
    return Math.min(1, s2);
  }
  hasLOD(e2) {
    return e2.lodMetric !== d$3.None;
  }
  _getDistancePlanarMode(e2, t2) {
    const i2 = e2[0] - t2[0], s2 = e2[1] - t2[1], n2 = e2[2] - t2[2], r2 = i2 * i2 + s2 * s2, o2 = t2[3];
    if (r2 <= o2 * o2)
      return Math.abs(n2);
    const a3 = Math.sqrt(r2) - o2;
    return Math.sqrt(n2 * n2 + a3 * a3);
  }
  _getDistanceGlobeMode(e2, t2) {
    const s2 = s$9(Z$1(t2)), n2 = s$9(e2) - s2;
    g$3(this._tmp0, e2, P$2(e2, Z$1(t2)) / v(e2));
    const r2 = p$3(Z$1(t2), this._tmp0), o2 = t2[3];
    if (r2 <= o2 * o2)
      return Math.abs(n2);
    {
      const r3 = g$3(this._tmp0, Z$1(t2), 1 / s2), c2 = s2, l2 = o2 * o2 / 2 / c2, u2 = g$3(this._tmp1, r3, c2 - l2), _2 = e2, v2 = e$9(this._tmp2, _2, u2), g2 = e$9(this._tmp2, v2, g$3(this._tmp3, r3, P$2(r3, v2))), f2 = u$4(this._tmp2, u2, g$3(this._tmp2, g2, o2 / s$9(g2)));
      let S2 = x$3(_2, f2);
      if (n2 >= 2e5) {
        const e3 = e$9(this._tmp1, _2, f2);
        let t3 = P$2(e3, r3) / s$9(e3);
        t3 < 0.08 && (t3 = 1e-4), S2 /= t3;
      }
      return S2;
    }
  }
  _getDistance(e2, t2) {
    return this._isGlobalMode ? this._getDistanceGlobeMode(e2, t2) : this._getDistancePlanarMode(e2, t2);
  }
  _updateMinMaxDistance(e2) {
    e2 > 0 ? (this.minDistance = Math.min(this.minDistance, e2), this.maxDistance = Math.max(this.maxDistance, e2)) : (this.minDistance = 0, this.maxDistance = Math.max(this.maxDistance, -e2));
  }
  getLodLevel(e2) {
    if (e2.lodMetric === d$3.None)
      return 0;
    if (0 === e2.childCount)
      return this.maxLodLevel;
    if (this._useFrustumCulling && this._progressiveLoadFactor < 1) {
      const t2 = this._progressiveLoadFactor * this._screenspaceErrorBias, i2 = this._screenspaceErrorBias;
      return this.evaluateLODmetric(e2, t2) ? this.evaluateLODmetric(e2, i2) ? 2 : 1 : 0;
    }
    return this.evaluateLODmetric(e2, this._screenspaceErrorBias) ? this.maxLodLevel : 0;
  }
  evaluateLODmetric(e2, t2) {
    switch (e2.lodMetric) {
      case d$3.ScreenSpaceRelative: {
        const i2 = this.getServiceMbsInRenderSR(e2), s2 = this._getDistance(this._camPos, i2), n2 = 2 * s2 / this._screenSizeFactor, r2 = s2 + i2[3];
        return this._updateMinMaxDistance(r2), e2.maxError * t2 <= n2;
      }
      case d$3.MaxScreenThreshold: {
        let i2 = this._screenSpaceDiameterMbs(e2, e2.serviceMbsInIndexSR[3] * t2);
        return this._options.angleDependentLoD && (i2 *= this.calcAngleDependentLoD(e2)), i2 < e2.maxError;
      }
      case d$3.RemovedFeatureDiameter:
        return this._screenSpaceDiameterMbs(e2, e2.maxError) * t2 < 10;
      case d$3.DistanceRangeFromDefaultCamera:
        return this.calcCameraDistance(e2) > e2.maxError * t2;
    }
    return false;
  }
  distToPOI(e2) {
    const t2 = this.getServiceMbsInRenderSR(e2);
    return x$3(Z$1(t2), this._poi) - t2[3];
  }
  distCameraToPOI() {
    return x$3(this._camPos, this._poi);
  }
}
const k$2 = n$4(), H$1 = I$4(), W$1 = n$4(), Z = n$4(), X$1 = new O$1(), Y$1 = n$4(), J$1 = [n$4(), n$4(), n$4(), n$4(), n$4(), n$4(), n$4(), n$4()], K$1 = n$4();
const G$1 = 100, R = 2, j = 1e4, Q = 1e-4, T = 1.2, E = 500, H = 1.5;
let k$1 = class k2 extends n$5(S$3) {
  get isMeshPyramid() {
    return "mesh-pyramids" === this.layer.profile || "MeshPyramid" === this.layer.store?.lodType;
  }
  get isGraphics3D() {
    return "points" === this.layer.profile;
  }
  get useMaximumNumberOfFeatures() {
    return !this.isMeshPyramid && (null == this.layer.priority || "High" === this.layer.priority);
  }
  get indexStreamController() {
    const e2 = this.layerView.view.resourceController.createStreamDataRequester(A$1.I3S_INDEX);
    return new r(e2, this.layer.customParameters, this.layer.apiKey);
  }
  get dataStreamController() {
    const e2 = this.layerView.view.resourceController.createStreamDataRequester(A$1.I3S_DATA);
    return new r(e2, this.layer.customParameters, this.layer.apiKey);
  }
  get crsVertex() {
    return H$3(this.layer);
  }
  get crsIndex() {
    return Z$2(this.layer);
  }
  get layer() {
    return this.layerView.i3slayer;
  }
  get running() {
    return this.updating;
  }
  get rootNodeVisible() {
    if (this._index) {
      const e2 = this._index.rootNode;
      if (e2)
        return this._updateViewData(), this._index.isNodeVisible(e2.index);
    }
    return true;
  }
  get index() {
    return this._index;
  }
  get requiredAttributes() {
    return this._requiredAttributes;
  }
  constructor(e2) {
    super(e2), this.screenSizeFactor = 0, this.featureTarget = 5e4, this.fixedFeatureTarget = false, this.updating = true, this.updatingProgress = 1, this.leavesReached = false, this.scaleVisibilityEnabled = true, this.worker = null, this._featureLOD = 1, this._stableFeatureLOD = false, this._isIdle = false, this._cameraDirty = true, this._invisibleDirty = false, this._idleStateCallbacks = null, this._newLoadingNodes = new l$1({ deallocator: null }), this._loadedNodeScales = /* @__PURE__ */ new Map(), this._modificationsNodeFilteringArray = new l$1(), this._downloadingCount = 0, this._loadingNodes = /* @__PURE__ */ new Map(), this._updatingNodes = /* @__PURE__ */ new Map(), this._progressMaxNumNodes = 1, this._requiredAttributes = new Array(), this._requiredAttributesDirty = true, this._updatesDisabled = false, this.disableIDBCache = false, this._disableMemCache = false, this._restartNodeLoading = false, this._fields = null, this._attributeStorageInfo = null, this._idleQueue = new i$1(), this._elevationUpdateNodes = new l$1({ deallocator: null }), this._errorCount = 0;
  }
  initialize() {
    const { layerView: e2, layer: t2 } = this;
    this._disableMemCache = !e2.loadCachedGPUData || !e2.addCachedGPUData, this._lodHandling = new o(e2), this._defaultGeometrySchema = t2.store.defaultGeometrySchema, this.disableIDBCache = has("disable-feature:idb-cache"), "fields" in t2 && (this._fields = t2.fields, this._attributeStorageInfo = t2.attributeStorageInfo), this.addResolvingPromise(Promise.all([t2.indexInfo, t2.when(), e2.when()]).then(([s2]) => {
      if (this.destroyed || !e2 || e2.destroyed || !s2)
        return;
      const { view: r2, clientGeometry: a3 } = e2, { resourceController: l2 } = r2;
      if (this._setClippingArea(r2.clippingArea), this.addHandles([d$5(() => r2?.pointsOfInterest?.focus?.renderLocation, (e3) => this._pointOfInterestChanged(e3), P$3), d$5(() => r2.quality, () => this._setCameraDirty(), C$2), d$5(() => e2.contentVisible, (e3) => {
        const t3 = e3 ? () => this._updateIdleState(true) : () => this._updateViewData(), i2 = e3 ? () => this._updateIdleState(false) : () => {
        };
        e3 && null != this._index && this._index.invalidateAllElevationRanges(), this._idleStateCallbacks ? (e3 || this.cancelNodeLoading(), this.restartNodeLoading(), this._idleStateCallbacks.idleBegin = t3, this._idleStateCallbacks.idleEnd = i2) : this._idleStateCallbacks = l2.scheduler.registerIdleStateCallbacks(t3, i2);
      }, P$3), h$2(e2.view.resourceController.scheduler, this), d$5(() => e2.uncompressedTextureDownsamplingEnabled, () => this.restartNodeLoading()), d$5(() => [this.featureTarget, this.fixedFeatureTarget], () => {
        this._setCameraDirty(), this._stableFeatureLOD = false;
      }), d$5(() => r2.state?.contentCamera, () => this._setCameraDirty()), d$5(() => t2.elevationInfo, (e3) => this._elevationInfoChanged(e3)), d$5(() => t2.effectiveScaleRange, () => this._scaleBoundsChanged()), d$5(() => e2.lodFactor, () => this._setCameraDirty()), d$5(() => e2.availableFields, () => this._requiredFieldsChange()), d$5(() => e2.holeFilling, (e3) => null != this._index && (this._index.holeFilling = e3))]), this._updateScaleHandles(), this._viewportQueries = new q(this.crsIndex, r2.renderCoordsHelper, r2.state.contentCamera, !r2.state.fixedContentCamera || this.isGraphics3D, this._clippingArea, this.isMeshPyramid ? r2.basemapTerrain : r2.elevationProvider, o$4(r2.viewingMode), this.layer.elevationInfo, { progressiveLoadFactor: this._getProgressiveLoadFactor(), screenspaceErrorBias: this._lod, angleDependentLoD: this._lod < 0.5 }), this._clientNodeLoader = new h$3(this.layer.uid, { indexSR: this.crsIndex, vertexSR: this.crsVertex, renderSR: r2.renderCoordsHelper.spatialReference, localMode: "local" === r2.viewingMode }, r2.resourceController.memoryController, this.worker), this._index = new I(o$4(r2.viewingMode), t2, s2, this.indexStreamController, this._clientNodeLoader, this._viewportQueries, s$a.getLogger(this), e2.holeFilling, (t3) => e2.isNodeLoaded(t3), (t3) => e2.isNodeReloading(t3), (e3) => this._shouldLoadNode(e3), (e3) => this._enableFromGPUCache(e3, c$4.Leaf), (e3) => this._needsUpdate(e3), () => !this.indexStreamController.busy, (t3) => e2.computeVisibilityObb?.(t3) ?? null, e2?.computeNodeFiltering ? (t3) => e2.computeNodeFiltering(t3) : void 0), this._index.updateElevationInfo(this.layer.elevationInfo, this.isMeshPyramid || this.isGraphics3D), this._index.imModificationsChanged(!!e2.hasModifications), this._index.layerFilterChanged(!!e2.hasGeometryFilter), null != a3) {
        for (const e3 of a3)
          this._addMesh(e3.mesh, e3.oid);
        this.addHandles(a3.on("change", (e3) => {
          for (const t3 of e3.removed)
            this._removeMesh(t3.oid);
          for (const t3 of e3.added)
            this._addMesh(t3.mesh, t3.oid);
        }));
      }
      this._startNodeLoading();
    })), this._tmpPoint = e$8(0, 0, 0, this.crsIndex);
  }
  updateNodeModificationStatus(e2) {
    const t2 = this._index, i2 = this.layerView;
    null != t2 && i2?.updateNodeModificationStatus && (this._modificationsNodeFilteringArray.clear(), e2.forAll((e3) => {
      const i3 = t2.getNode(e3);
      null != i3 && this._modificationsNodeFilteringArray.push(i3);
    }), i2.updateNodeModificationStatus(this._modificationsNodeFilteringArray), this._invisibleDirty = true);
  }
  destroy() {
    this.cancelNodeLoading(), this._idleStateCallbacks && (this._isIdle = false, this._idleStateCallbacks.remove(), this._idleStateCallbacks = null), this._nodeLoader = null, B.prune(), null != z && (z.hide(), z = null);
  }
  get viewportQueries() {
    return this._viewportQueries;
  }
  _getRequiredAttributes() {
    if (null == this._attributeStorageInfo || !this._fields || !this.layerView.availableFields)
      return [];
    const e2 = this._attributeStorageInfo, t2 = this._fields, i2 = this.layer.objectIdField;
    return this.layerView.availableFields.map((i3) => {
      const s2 = K(e2, i3), r2 = K(t2, i3);
      return s2 >= 0 && r2 >= 0 ? { index: s2, name: t2[r2].name, field: t2[r2], attributeStorageInfo: e2[s2] } : null;
    }).filter((e3) => null != e3 && e3.name !== i2);
  }
  _requiredFieldsChange() {
    const e2 = this._getRequiredAttributes();
    $$1(this._requiredAttributes, e2) || (this._requiredAttributes = e2, this._requiredAttributesDirty = false, this.restartNodeLoading());
  }
  requestUpdate() {
    this._requiredAttributesDirty = true, this.restartNodeLoading();
  }
  _setClippingArea(e2) {
    const t2 = u$5();
    u$6(e2, t2, this.layerView.view.renderSpatialReference) ? this._clippingArea = t2 : this._clippingArea = null;
  }
  _pointOfInterestChanged(e2) {
    null != this._viewportQueries && (this._viewportQueries.setPointOfInterest(e2), null != this._index && (this._index.progressiveLoadPenalty = W.distancePenalty * this._viewportQueries.distCameraToPOI(), this._index.requestUpdate()));
  }
  updateClippingArea(e2) {
    this._setClippingArea(e2), null != this._viewportQueries && null != this._index && (this._viewportQueries.updateClippingArea(this._clippingArea), this._index.invalidateVisibilityCache()), this._setCameraDirty();
  }
  _setCameraDirty() {
    this._cameraDirty = true, this._lodHandling.setLodGlobalDirty(), this._evaluateUpdating();
  }
  _addMesh(e2, t2) {
    if (null == this._index)
      return;
    const i2 = this._clientNodeLoader.createMeshNodeInfo(e2, t2), s2 = this._index.addClientNodeToIndex(i2.id, i2.mbs);
    this._clientNodeLoader.addMeshNode(s2, i2), this._evaluateUpdating(), this.notifyChange("rootNodeVisible");
  }
  _removeMesh(e2) {
    const t2 = this._clientNodeLoader.getMeshNodeIndex(e2);
    if (null != t2) {
      if (null == this._index)
        throw new Error("delayed removal of client side i3s node geometry not supported yet.");
      {
        const e3 = (e4, t3) => {
          this.layerView.removeNode(t3), this._loadedNodeScales.delete(t3), this._clientNodeLoader.removeNode(e4), this.layerView.deleteCachedNodeData && null != e4 && this.layerView.deleteCachedNodeData(e4), this.layerView.deleteCachedGPUData?.(this.layerView.loadCachedGPUData?.(t3));
        }, i2 = (e4, t3, i3) => {
          this._clientNodeLoader.updateNodeIndex(e4, t3, i3), this.layerView.updateNodeIndex && this.layerView.updateNodeIndex(t3, i3);
        };
        this._index.removeClientNodeFromIndex(t2, e3, i2), this.notifyChange("rootNodeVisible");
      }
    }
  }
  updateElevationChanged(e2, t2) {
    const i2 = this._index;
    if (null == i2?.rootNode || null == t2)
      return null;
    this.crsIndex.equals(t2) || (i$2(e2, t2, X, this.crsIndex), e2 = X);
    const s2 = this._elevationUpdateNodes;
    return s2.clear(), k$5(e2, i2.rootNode, i2, (e3) => s2.push(e3.index)), s2.length && (s2.forAll((e3) => i2.updateElevationChanged(e3)), this._setCameraDirty()), s2;
  }
  removeAllGeometryObbs() {
    null != this._index && this._index.removeAllGeometryObbs();
  }
  getRenderMbs(e2) {
    return null != this._viewportQueries ? this._viewportQueries.getServiceMbsInRenderSR(e2) : null;
  }
  _elevationInfoChanged(e2) {
    null != this._index && (this._index.updateElevationInfo(e2, this.isMeshPyramid || this.isGraphics3D), this._setCameraDirty());
  }
  _updateScaleHandles() {
    const e2 = "scale-bounds";
    this.removeHandles(e2), this._areScaleBoundsActive && this.addHandles(this.layerView.view.basemapTerrain.on("scale-change", (e3) => this._scaleUpdateHandler(e3)), e2);
  }
  _scaleBoundsChanged() {
    this._areScaleBoundsActive || this._loadedNodeScales.clear(), this._updateScaleHandles(), this._setCameraDirty();
  }
  _scaleUpdateHandler(e2) {
    this._updateScaleInBoundingRect(e2.extent, e2.spatialReference), this._setCameraDirty();
  }
  _updateScaleInBoundingRect(e2, t2) {
    const i2 = this._index;
    if (null == i2)
      return;
    null != i2.rootNode && i$2(e2, t2, X, this.crsIndex) && this._loadedNodeScales.forEach((e3, t3) => {
      const s2 = i2.getNode(t3);
      null != s2 && g$4(X, s2.serviceMbsInIndexSR) && this._loadedNodeScales.set(t3, this._computeScale(s2));
    });
  }
  restartNodeLoading() {
    this._restartNodeLoading = true, this.cancelNodeLoading(), this._evaluateUpdating();
  }
  schedule(e2, t2) {
    return this._idleQueue.push(e2, t2);
  }
  reschedule(e2, t2) {
    return this._idleQueue.unshift(e2, t2);
  }
  get _isIntegratedMesh() {
    return "integrated-mesh" === this.layer.type;
  }
  get _areScaleBoundsActive() {
    const { minScale: e2, maxScale: t2 } = c$5(this.layer);
    return this.scaleVisibilityEnabled && (e2 > 0 || t2 > 0);
  }
  get unloadedMemoryEstimate() {
    return null != this._index && this.layerView.contentVisible ? this._index.unloadedMemoryEstimate * this._lodDropFactor : 0;
  }
  async _loadNodeData(e2, t2) {
    return e2.index < 0 ? this._clientNodeLoader.loadNodeData(e2.id, t2) : this._nodeLoader.loadNodeData(e2, t2);
  }
  async _loadAttributes(e2, t2, i2) {
    return (e2.index < 0 ? this._clientNodeLoader : this._nodeLoader).loadAttributes(e2, t2, i2);
  }
  get indexDepth() {
    return null != this._index ? this._index.maxLevel : 0;
  }
  set disableMemCache(e2) {
    this.layerView.loadCachedGPUData && this.layerView.addCachedGPUData ? this._disableMemCache = e2 : this._disableMemCache = true;
  }
  runTask(e2, t2) {
    return this.layerView.contentVisible ? this.layerView.visible && null != this._index ? (this._processWithErrorLogging(e2, t2), this._index.maxPriority) : -1 / 0 : (this._updateViewData(), this._evaluateUpdating(), -1 / 0);
  }
  _processWithErrorLogging(e2, t2) {
    try {
      this._process(e2, t2);
    } catch (s2) {
      this._errorCount < 50 ? s$a.getLogger(this).error(`Error during processing: ${s2} at ${s2.stack}`) : 50 === this._errorCount && s$a.getLogger(this).error("Too many errors for this layer. Further errors will not be displayed."), this._errorCount++;
    }
  }
  _process(e2, t2) {
    this._restartNodeLoading && this._startNodeLoading(), null != this._nodeLoader && null != this._index && (this._updateViewData(), this._invisibleDirty && this._removeInvisibleNodes(e2) && (this._invisibleDirty = false), this._isIntegratedMesh && (e2.enabled = false), e2.run(() => this._processIndex(e2)), this._updateFeatureLOD(), e2.run(() => this._processCache(e2)), this._isIntegratedMesh && (e2.enabled = true), e2.run(() => this._processNodes(e2, t2)), this._idleQueue.runTask(e2), e2.run(() => this._prefetchIndex()), t2.numIndexLoading += this._index.indexLoading, t2.numNodesLoading += this._downloadingCount, e2.run(() => this._lodHandling.lodGlobalHandling(e2)), this._evaluateUpdating());
  }
  _processIndex(e2) {
    if (null == this._index)
      return false;
    if (this._index.dirty) {
      this._newLoadingNodes.clear(), this._index.update(Array.from(this._loadingNodes.keys()), e2, (e3) => this.updateNodeModificationStatus(e3)), this._disableMemCache || (this._newLoadingNodes.pushArray(this._index.updates.add.data, this._index.updates.add.length), this._newLoadingNodes.pushArray(this._index.updates.missing.data, this._index.updates.missing.length));
      const t2 = this._index.featureEstimate.leavesReached;
      this._index.isLoading || t2 === this._get("leavesReached") || this._set("leavesReached", t2);
    }
    return this._index.load();
  }
  _prefetchIndex() {
    return !(null == this._index || this._loadingNodes.size > 0 || this._index.updates.add.length > 0) && this._index.prefetch();
  }
  _updateFeatureLOD() {
    if (!this.useMaximumNumberOfFeatures || null == this._index || null == this._viewportQueries)
      return;
    const e2 = !this._index.isLoading, t2 = this.featureTarget * this._baseLOD, i2 = this._index.featureEstimate;
    if (i2.estimate = i2.estimate || t2 / 2, this._index.indexMissing > E) {
      if (this._featureLOD <= Q)
        return;
      this._featureLOD /= H, this._stableFeatureLOD = false;
    } else if (e2 && i2.estimate < t2) {
      if (i2.leavesReached || this._featureLOD >= j || this._stableFeatureLOD)
        return;
      const e3 = Math.min(10, Math.max(t2 / i2.estimate, 1.001));
      this._featureLOD *= e3;
      const s2 = this._lod, r2 = this._index.checkFeatureTarget(t2, s2);
      r2 !== s2 && (this._featureLOD = r2 / this._baseLOD, this._stableFeatureLOD = true);
    } else {
      if (!(i2.estimate > t2 * T || e2 && i2.estimate > t2))
        return;
      if (this._featureLOD <= Q)
        return;
      this._featureLOD /= 1 + 0.25 * (i2.estimate / t2 - 1), this._stableFeatureLOD = false;
    }
    this._featureLOD = Math.min(j, Math.max(Q, this._featureLOD)), this._viewportQueries.updateScreenSpaceErrorBias(this._lod), this._index.requestUpdate();
  }
  _processCache(e2) {
    const t2 = this._index;
    if (null == t2)
      return false;
    for (; this._newLoadingNodes.length > 0 && !e2.done; ) {
      const i2 = this._newLoadingNodes.pop();
      for (let s2 = t2.getParent(i2); null != s2 && (!this.layerView.isNodeLoaded(s2.index) && this._isNodeInScaleBounds(s2)); s2 = t2.getParent(s2.index))
        if (this._enableFromGPUCache(s2, c$4.Hole)) {
          e2.madeProgress();
          break;
        }
    }
    return e2.hasProgressed;
  }
  _processNodes(e2, t2) {
    if (null == this._index)
      return false;
    let i2 = (this._isIdle ? G$1 : R) - this._loadingNodes.size;
    const s2 = this._index.updates;
    for (s2.cancel.forEach(this._cancelNode, this), s2.cancel = []; s2.remove.length > 0 && !e2.done; )
      this.layerView.removeNode(s2.remove.pop()), e2.madeProgress();
    for (; s2.update.length > 0 && !e2.done; ) {
      const t3 = this._index.getNode(s2.update.pop());
      null != t3 && (this._updateLoadedNode(t3), e2.madeProgress());
    }
    for (; s2.add.length > 0 && !e2.done && i2 > 0; ) {
      --i2;
      const r2 = this._index.getNode(s2.add.back());
      if (null == r2 || r2.cacheState !== a$8.Cached && !this._hasNodeLoadToken(t2))
        break;
      s2.add.pop(), this._loadNode(r2), e2.madeProgress();
    }
    return e2.hasProgressed;
  }
  _cancelAllNodes() {
    this._loadingNodes.forEach((e2) => e2.abort()), this._loadingNodes.clear(), this._updatingNodes.forEach((e2) => e2.abort()), this._updatingNodes.clear();
  }
  _cancelNode(e2) {
    const t2 = this._loadingNodes.get(e2);
    t2 && (t2.abort(), this._loadingNodes.delete(e2));
  }
  _hasNodeLoadToken(e2) {
    return !(!this._isIdle && e2.numNodesLoading + this._loadingNodes.size >= R) && (this._downloadingCount < I$5 && !this.dataStreamController.busy);
  }
  _evaluateUpdating() {
    let e2 = false, t2 = 0;
    if (this.layerView) {
      if (this.layerView.contentVisible) {
        const i2 = (null != this._index ? this._index.indexMissing : 0) + 3 * (null != this._index ? this._index.updates.add.length : 0) + 2 * this._loadingNodes.size;
        e2 = !!(i2 > 0 || this._updatingNodes.size > 0 || this._restartNodeLoading || this._cameraDirty || this._idleQueue.running || this._lodHandling && this._lodHandling.requiresLODGlobalHandling || null != this._index && this._index.isPrefetching), 0 === i2 && (this._progressMaxNumNodes = 1), this._progressMaxNumNodes = Math.max(i2, this._progressMaxNumNodes), t2 = 1 - i2 / this._progressMaxNumNodes;
      } else
        e2 = this._cameraDirty, t2 = e2 ? 0 : 1;
      this.updating = e2, this.updatingProgress = t2;
    }
  }
  _updateViewData() {
    if (!this._cameraDirty || null == this._index || null == this._viewportQueries)
      return;
    const e2 = this.layerView.view, { contentCamera: t2, fixedContentCamera: i2 } = e2.state;
    this.screenSizeFactor = 1 / (t2.perScreenPixelRatio / 2), this._viewportQueries.updateCamera(t2, !i2 || this.isGraphics3D), this._viewportQueries.setPointOfInterest(e2.pointsOfInterest.focus.renderLocation), this._viewportQueries.updateScreenSpaceErrorBias(this._lod), this._index.invalidateVisibilityCache(), this._index.progressiveLoadPenalty = W.distancePenalty * this._viewportQueries.distCameraToPOI(), this._index.requestUpdate(), this._stableFeatureLOD = false, this._invisibleDirty = true, this._cameraDirty = false, this.notifyChange("rootNodeVisible");
  }
  _getProgressiveLoadFactor() {
    return this.layerView.view.quality < 1 ? 1 : this.layerView.progressiveLoadFactor;
  }
  get _lod() {
    return this._featureLOD * this._baseLOD;
  }
  get _baseLOD() {
    const e2 = this.layerView.lodFactor;
    return this.fixedFeatureTarget ? 1 : (e2 > 0 ? e2 : 1) * this.layerView.view.quality;
  }
  get _lodDropFactor() {
    if (this.fixedFeatureTarget)
      return 1;
    return (Math.min(this.layerView.view.quality, 0.5) - d$6) / (0.5 - d$6);
  }
  isGeometryVisible(e2) {
    return !!this._index?.isGeometryVisible(e2.index);
  }
  updateVisibility(e2) {
    this._index?.invalidateNodeVisibilityCache(e2);
  }
  invalidateGeometryVisibility(e2) {
    this._index?.invalidateGeometryVisibility(e2);
  }
  invalidateVisibilityObbs() {
    this._index?.invalidateVisibilityObbs();
  }
  modificationsChanged() {
    this._index?.imModificationsChanged(!!this.layerView.hasModifications), this._invisibleDirty = true;
  }
  _shouldLoadNode(e2) {
    return !(!this._lodHandling.shouldLoadNode(e2) || this._shouldDropNode(e2)) && (!(null == this._index || !this._index.isGeometryVisible(e2.index)) && this._isNodeInScaleBounds(e2));
  }
  _shouldDropNode(e2) {
    if (null == this._viewportQueries)
      return false;
    const t2 = this._lodDropFactor;
    if (t2 >= 1 || !this._lodHandling.hasNoVisibleChildren(e2))
      return false;
    return Math.abs(this._viewportQueries.calcCameraDistanceToCenter(e2)) - this._viewportQueries.minDistance > (this._viewportQueries.maxDistance - this._viewportQueries.minDistance) * t2;
  }
  _startNodeLoading() {
    this._restartNodeLoading = false;
    const e2 = this._index;
    if (this._updatesDisabled || null == e2 || null == this._viewportQueries)
      return;
    this._updateViewData(), this._requiredAttributesDirty && (this._requiredAttributes = this._getRequiredAttributes(), this._requiredAttributesDirty = false);
    const t2 = { textureEncodings: this.layerView.supportedTextureEncodings, uncompressedTextureDownsamplingEnabled: this.layerView.uncompressedTextureDownsamplingEnabled, textureUsageMask: this.layerView.rendererTextureUsage, loadFeatureData: this.useMaximumNumberOfFeatures };
    this._nodeLoader = new d(this.layer, this.dataStreamController, s$a.getLogger(this), this._defaultGeometrySchema, this._requiredAttributes, t2), e2.requestUpdate(), this._lodHandling.startNodeLoading((e3) => this._isNodeInScaleBounds(e3), (e3, t3) => this._removeNodes(e3, t3, J.fadeout), e2, { maxLodLevel: this._viewportQueries.maxLodLevel }), this._evaluateUpdating();
  }
  isNodeLoading() {
    return null != this._nodeLoader && null != this._index;
  }
  cancelNodeLoading() {
    this.isNodeLoading() && (this.indexStreamController.cancelAll(), this.dataStreamController.cancelAll(), this._idleQueue.cancelAll(), this._cancelAllNodes(), this._nodeLoader = null, this._evaluateUpdating());
  }
  _removeInvisibleNodes(e2) {
    const t2 = this._index;
    if (null == t2 || null == this._viewportQueries)
      return false;
    B.clear(), this.layerView.getLoadedNodeIndices(B);
    const i2 = 0 === this._viewportQueries.maxDistance, s2 = i2 ? () => false : (e3) => this._shouldDropNode(e3);
    return B.filterInPlace((e3) => {
      const i3 = t2.getNode(e3);
      return null == i3 || !t2.isGeometryVisible(e3) || s2(i3) || !this._isNodeInScaleBounds(i3);
    }), B.length > 0 && this._lodHandling.setLodGlobalDirty(), this._removeNodes(B, e2, J.pop), !(i2 && this._lodDropFactor < 1) && (0 === B.length || (B.clear(), false));
  }
  markNodeToRemove(e2) {
    B.push(e2);
  }
  removeMarkedNodes() {
    this._removeNodes(B, C$3, J.pop);
  }
  _removeNodes(e2, t2, i2) {
    const s2 = e2.length;
    if (0 !== s2 && !t2.done) {
      for (null != this._index && this._index.requestUpdate(); e2.length > 0 && !t2.done; ) {
        const s3 = e2.pop(), r2 = this._index;
        i2 === J.fadeout && this.layerView.nodeFadeoutEnabled && null != r2 && r2.isGeometryVisible(s3) ? this.layerView.fadeNode(s3, a2.FadeOut, true) : this.layerView.removeNode(s3), t2.madeProgress();
      }
      if (this._loadedNodeScales.size > 0)
        for (let t3 = e2.length; t3 < s2; t3++) {
          const i3 = e2.data[t3];
          this._loadedNodeScales.delete(i3);
        }
    }
  }
  _needsUpdate(e2) {
    if (e2.resources.isEmpty || this._updatingNodes.has(e2.index))
      return false;
    const t2 = this.layerView.getLoadedAttributes(e2.index);
    return null != t2 && t2 !== this._requiredAttributes;
  }
  async _updateLoadedNode(e2) {
    const t2 = new AbortController();
    this._updatingNodes.set(e2.index, t2), this._evaluateUpdating();
    try {
      const i2 = $$1(this.layerView.getLoadedAttributes(e2.index), this._requiredAttributes);
      let s2 = null;
      s2 = i2 ? this.layerView.getAttributeData(e2.index) : await this._loadAttributes(e2, this._requiredAttributes, t2.signal), await this.schedule(() => this.layerView.updateAttributes(e2.index, { loadedAttributes: this._requiredAttributes, attributeData: s2 }, t2.signal), t2.signal);
    } catch (i2) {
      if (!b$2(i2))
        return this.layerView.updateAttributes(e2.index, { loadedAttributes: this._requiredAttributes, attributeData: {} }, t2.signal);
    }
    this._updatingNodes.delete(e2.index), this._evaluateUpdating();
  }
  _loadNode(e2) {
    if (this._loadingNodes.has(e2.index))
      return void s$a.getLogger(this).error("already loading node " + e2.index);
    const t2 = new AbortController();
    this._loadingNodes.set(e2.index, t2), this._evaluateUpdating(), this._loadAndAddNode(e2, t2.signal).then((i2) => {
      i2 && null != this._index && this._loadingNodes.get(e2.index) === t2 && (this._loadingNodes.delete(e2.index), this._index.requestUpdate());
    }).catch((e3) => {
      if (!b$2(e3))
        throw e3;
    }).finally(() => {
      this._loadingNodes.get(e2.index) === t2 && this._loadingNodes.delete(e2.index), this._evaluateUpdating();
    });
  }
  _loadAndAddNode(e2, t2) {
    return e2.cacheState === a$8.Uncached ? this._loadUncached(e2, t2).then(() => false) : this._loadCached(e2, t2).then((t3) => !t3 && (e2.cacheState = a$8.Uncached, true)).catch((t3) => !b$2(t3) && (e2.cacheState = a$8.Uncached, true));
  }
  _enableFromGPUCache(e2, t2) {
    if (this._disableMemCache || null == this._index)
      return false;
    if (t2 === c$4.Hole && !this._index.useNodeAsHole(e2.index))
      return true;
    const i2 = this._loadCachedGPUData(e2);
    return !!i2 && (this.layerView.addCachedGPUData(e2, i2, t2), this._nodeAdded(), true);
  }
  _loadCachedGPUData(e2) {
    const t2 = this.layerView.loadCachedGPUData(e2.index);
    return null != t2?.attributeInfo && $$1(t2.attributeInfo.loadedAttributes, this._requiredAttributes) ? t2 : (this.layerView.deleteCachedGPUData(t2), null);
  }
  _nodeAdded() {
    null != this._index && this._index.requestUpdate(), this._lodHandling.setLodGlobalDirty(), this._evaluateUpdating();
  }
  updateLoadStatus(e2, t2) {
    const i2 = this._index;
    null != i2 && i2.updateChildrenLoaded(e2, t2 ? 1 : -1);
  }
  async _loadCached(e2, t2) {
    if (this._enableFromGPUCache(e2, c$4.Leaf))
      return true;
    const i2 = this.layerView;
    if (this.disableIDBCache || !i2.loadCachedNodeData || !i2.addCachedNodeData)
      return false;
    const s2 = (t3, i3) => this._nodeLoader.loadTextures(e2, t3, i3), r2 = (t3, i3) => this._clientNodeLoader.loadTextures(e2, t3, i3), a3 = e2.index >= 0 ? s2 : r2, d2 = await this.schedule(() => i2.loadCachedNodeData(e2, t2, a3), t2);
    if (null == d2)
      return false;
    const o2 = this._requiredAttributes, n2 = await this.reschedule(() => this._loadAttributes(e2, o2, t2), t2);
    return await this.reschedule(() => i2.addCachedNodeData(e2, d2, { loadedAttributes: o2, attributeData: n2 }, t2), t2), this._nodeAdded(), true;
  }
  _loadUncached(e2, t2) {
    return this._downloadingCount++, this._loadNodeData(e2, t2).catch((e3) => {
      throw this._downloadingCount--, e3;
    }).then((i2) => (this._downloadingCount--, this.schedule(() => this.layerView.addNode(e2, i2, t2), t2))).then(() => {
      this._nodeAdded(), e2.cacheState = a$8.Cached;
    }).catch((t3) => {
      if (!b$2(t3))
        throw s$a.getLogger(this).error("#loadNodeData()", this.layer, `Failed to load node '${e2.id}'`, t3), e2.failed = true, null != this._index && this._index.requestUpdate(), t3;
    });
  }
  _updateIdleState(e2) {
    e2 !== this._isIdle && (this._isIdle = e2, this._evaluateUpdating(), e2 && this._index && null != this._index && this._index.resetFailedNodes());
  }
  _getScale(e2) {
    if (this._loadedNodeScales.has(e2.index))
      return this._loadedNodeScales.get(e2.index);
    const t2 = this._computeScale(e2);
    return this.layerView.isNodeLoaded(e2.index) && this._loadedNodeScales.set(e2.index, t2), t2;
  }
  _computeScale(e2) {
    this._tmpPoint.x = e2.serviceMbsInIndexSR[0], this._tmpPoint.y = e2.serviceMbsInIndexSR[1], this._tmpPoint.z = e2.serviceMbsInIndexSR[2];
    const t2 = e2.serviceMbsInIndexSR[3];
    return this.layerView.view.basemapTerrain.getSphereScale(this._tmpPoint, t2);
  }
  _isNodeInScaleBounds(e2) {
    if (!this._areScaleBoundsActive)
      return true;
    const t2 = this._getScale(e2), { minScale: i2, maxScale: s2 } = c$5(this.layer);
    return t$2(t2, i2, s2);
  }
  get test() {
    const e2 = this;
    return { index: this._index, set disableUpdates(t2) {
      e2._updatesDisabled = t2, t2 ? e2.cancelNodeLoading() : e2.requestUpdate();
    }, set disableIDBCache(t2) {
      e2.disableIDBCache = t2;
    }, set ignoreServiceObb(t2) {
      null != e2._index && (e2._index.ignoreServiceObb = t2);
    }, shouldLoadNode: (t2) => e2._shouldLoadNode(t2) };
  }
  notifyLODUpdate() {
    this._lodHandling.setLodGlobalDirty(), this._evaluateUpdating(), null != this._index && this._index.requestUpdate();
  }
  geometryFilterChanged(e2) {
    const t2 = this._index;
    null != t2 && t2.layerFilterChanged(e2), this._setCameraDirty();
  }
};
e$4([y$2({ readOnly: true })], k$1.prototype, "isMeshPyramid", null), e$4([y$2({ readOnly: true })], k$1.prototype, "isGraphics3D", null), e$4([y$2({ readOnly: true })], k$1.prototype, "useMaximumNumberOfFeatures", null), e$4([y$2({ readOnly: true })], k$1.prototype, "indexStreamController", null), e$4([y$2({ readOnly: true })], k$1.prototype, "dataStreamController", null), e$4([y$2({ readOnly: true })], k$1.prototype, "crsVertex", null), e$4([y$2({ readOnly: true })], k$1.prototype, "crsIndex", null), e$4([y$2()], k$1.prototype, "screenSizeFactor", void 0), e$4([y$2()], k$1.prototype, "featureTarget", void 0), e$4([y$2()], k$1.prototype, "fixedFeatureTarget", void 0), e$4([y$2()], k$1.prototype, "layerView", void 0), e$4([y$2()], k$1.prototype, "layer", null), e$4([y$2()], k$1.prototype, "updating", void 0), e$4([y$2({ readOnly: true })], k$1.prototype, "running", null), e$4([y$2()], k$1.prototype, "updatingProgress", void 0), e$4([y$2({ readOnly: true })], k$1.prototype, "leavesReached", void 0), e$4([y$2({ constructOnly: true })], k$1.prototype, "scaleVisibilityEnabled", void 0), e$4([y$2({ constructOnly: true })], k$1.prototype, "worker", void 0), e$4([y$2({ readOnly: true, dependsOn: [] })], k$1.prototype, "rootNodeVisible", null), k$1 = e$4([c$3("esri.layers.graphics.controllers.I3SOnDemandController")], k$1);
const B = new l$1({ deallocator: null });
let z;
function $$1(e2, t2) {
  return null != e2 && e2.length === t2.length && e2.every((e3) => K(t2, e3.name) >= 0);
}
function K(e2, t2) {
  const i2 = t2.toLowerCase();
  for (let s2 = 0; s2 < e2.length; s2++)
    if (e2[s2].name.toLowerCase() === i2)
      return s2;
  return -1;
}
const W = { factorIM: 0.2, factor3dObject: 0.05, distancePenalty: 10 }, X = u$5();
var J;
!function(e2) {
  e2[e2.pop = 0] = "pop", e2[e2.fadeout = 1] = "fadeout";
}(J || (J = {}));
const Y = k$1;
const G = "esri.views.3d.layers.i3s.I3SOverrides";
let D = class extends S$3 {
  constructor(e2) {
    super(e2), this._warnMaximumChangedObjectsExceeded = false, this._maximumNumberOfEditOVerrides = $, this._original3DOFLDefinitionExpression = null, this._interactiveEditingSessions = new V$2(), this.geometryOverrides = new V$2(), this._clientGeometryCache = /* @__PURE__ */ new Map(), this._associatedLayerView = null, this._attributeChangedObjectIds = new s$b(), this._geometryChangedObjectIds = new s$b(), this._pendingFetchChangedObjectIds = null, this._pendingFetchAbortController = new AbortController(), this._featureIdLocks = /* @__PURE__ */ new Map();
  }
  initialize() {
    this._memCache = this.memoryController.newCache(`i3s-attribute-overrides-${this.layer.uid}`), this._pendingFetchChangedObjectIds = this._fetchChangedObjectIds(this._pendingFetchAbortController?.signal), this._pendingFetchChangedObjectIds.finally(() => {
      this._pendingFetchAbortController = null, this._pendingFetchChangedObjectIds = null;
    }), this.is3DOFL && null != this._associatedLayer && (a$9() ? this._associatedLayer.load().then((e2) => {
      this.destroyed || (this._original3DOFLDefinitionExpression = e2.definitionExpression, this.addHandles(d$5(() => this._definitionExpression, (t2) => e2.definitionExpression = t2, P$3)), this._associatedLayerView = new c$6({ layer: this._associatedLayer, view: this.view }));
    }) : r$2());
  }
  destroy() {
    this.is3DOFL && null != this._associatedLayer && (a$9() ? null != this._associatedLayerView && (this._associatedLayer.definitionExpression = this._original3DOFLDefinitionExpression) : r$2()), this._set("layer", null), this._memCache = u$7(this._memCache), this._pendingFetchAbortController = e$a(this._pendingFetchAbortController), this._pendingFetchChangedObjectIds = null, this._featureIdLocks.clear();
  }
  get is3DOFL() {
    return n$6() && null != this._associatedLayer?.infoFor3D;
  }
  get sortedGeometryChangedObjectIds() {
    return this.is3DOFL ? [...this._geometryChangedObjectIds].sort((e2, t2) => e2 - t2) : [];
  }
  get _associatedLayer() {
    return null == this.layer ? null : this.layer.associatedLayer;
  }
  get hasGeometryChanges() {
    return this._geometryChangedObjectIds.size > 0;
  }
  get _definitionExpression() {
    const e2 = this.sortedGeometryChangedObjectIds;
    return 0 === e2.length ? "1 = 0" : `OBJECTID IN (${e2.join(",")})`;
  }
  get updating() {
    if (!this.is3DOFL)
      return false;
    if (this._pendingFetchChangedObjectIds)
      return true;
    if (a$9()) {
      return !(null != this._associatedLayerView) || null != this._associatedLayerView && this._associatedLayerView.updating;
    }
    return false;
  }
  get isEmpty() {
    return null == this._pendingFetchChangedObjectIds && 0 === this._attributeChangedObjectIds.size && 0 === this._geometryChangedObjectIds.size;
  }
  featureHasGeometryChanges(e2) {
    return this._geometryChangedObjectIds.has(e2);
  }
  featureHasAttributeChanges(e2) {
    return this._attributeChangedObjectIds.has(e2);
  }
  createInteractiveEditSession(e2) {
    this._attributeChangedObjectIds.add(e2);
    const t2 = this._interactiveEditingSessions, i2 = new M(e2, () => {
      t2.remove(i2);
    });
    return t2.unshift(i2), i2;
  }
  async applyAttributeOverrides(e2, t2, i2, r2 = []) {
    if (this._pendingFetchChangedObjectIds && await h$5(this._pendingFetchChangedObjectIds, i2), null == t2)
      return;
    const { attributeData: s2, loadedAttributes: o2 } = t2;
    if (null == o2 || null == s2 || 0 === this._attributeChangedObjectIds.size)
      return;
    const n2 = /* @__PURE__ */ new Set();
    for (const d2 of o2)
      n2.add(d2.index);
    for (const d2 of r2)
      n2.has(d2.index) || (o2.push(d2), s2[d2.name] = new Array(e2.length));
    const a3 = await this._lockFeatureIds(e2);
    try {
      const t3 = { attributeData: s2, loadedAttributes: o2 }, r3 = this._getOverridesFromCache(e2, t3, this._attributeChangedObjectIds), { objectIds: n3, fieldNames: a4 } = r3;
      if (0 === n3.length || 0 === a4.length)
        return;
      const d2 = await this._queryAttributeOverridesFromAssociatedLayer(n3, a4, i2);
      if (null == d2)
        return;
      this._processOverridesFromAssociatedLayer(e2, d2, a4, t3);
    } finally {
      a3.remove();
    }
  }
  updateGeometry(e2, t2) {
    this._geometryChangedObjectIds.add(e2);
    const i2 = this._clientGeometryCache.get(e2);
    if (null != i2 && (this.geometryOverrides.remove(i2), this._clientGeometryCache.delete(e2)), null != t2) {
      const i3 = { oid: e2, mesh: t2 };
      this.geometryOverrides.add(i3), this._clientGeometryCache.set(e2, i3);
    }
  }
  updateAttributeValue(e2, t2, i2) {
    this._attributeChangedObjectIds.add(e2), this._cacheAttributeValue(e2, t2, i2);
  }
  featureAdded(e2) {
    this.is3DOFL && r$2() && this._geometryChangedObjectIds.add(e2), this._attributeChangedObjectIds.add(e2);
  }
  _cacheAttributeValue(e2, t2, i2) {
    this._memCache.put(this._getAttributeCacheKey(e2, t2), i2, this._memCacheAttributeValueSize(i2));
  }
  _getOverridesFromCache(e2, { loadedAttributes: t2, attributeData: i2 }, r2) {
    const s2 = /* @__PURE__ */ new Set(), o2 = new Array();
    for (const a3 of t2)
      o2[a3.index] = i2[a3.name];
    const n2 = /* @__PURE__ */ new Set();
    for (let a3 = 0; a3 < e2.length; a3++) {
      const i3 = e2[a3];
      if (r2.has(i3))
        for (const e3 of t2) {
          const t3 = this._attributeFromCache(i3, e3.index);
          void 0 === t3 ? (s2.add(i3), n2.add(e3.name)) : o2[e3.index][a3] = t3;
        }
    }
    return { objectIds: Array.from(s2), fieldNames: Array.from(n2) };
  }
  _attributeFromCache(e2, t2) {
    const i2 = this._fromInteractiveEditingSession(e2, t2);
    if (void 0 !== i2)
      return i2;
    const r2 = this._getAttributeCacheKey(e2, t2);
    return this._memCache.get(r2);
  }
  _fromInteractiveEditingSession(e2, t2) {
    if (null != this._interactiveEditingSessions)
      for (const i2 of this._interactiveEditingSessions) {
        if (i2.objectId !== e2)
          continue;
        const r2 = i2.getAttribute(t2);
        if (void 0 !== r2)
          return r2;
      }
  }
  _getAttributeCacheKey(e2, t2) {
    return `${e2}-${t2}`;
  }
  async _queryAttributeOverridesFromAssociatedLayer(e2, t2, i2) {
    if (0 === e2.length)
      return null;
    this._logWarningIfMaximumObjectsExceeded();
    const { associatedLayer: r2 } = this.layer;
    if (null == r2)
      return null;
    const s2 = r2.createQuery(), { objectIdField: o2 } = r2, n2 = [o2, ...t2];
    s2.where = "1=1", s2.returnGeometry = false, s2.outFields = n2, s2.cacheHint = true;
    const a3 = await this._executeBatchQuery(r2, e2, s2, i2), d2 = [];
    for (const c2 of a3)
      if (c2.ok)
        for (const e3 of c2.value.features)
          d2.push(e3);
    return d2;
  }
  async _queryGeometryOverridesFromAssociatedLayer(e2, t2) {
    if (0 === e2.length || !this.is3DOFL || !r$2())
      return null;
    const i2 = this.layer.associatedLayer, r2 = i2.infoFor3D, { spatialReference: s2 } = i2, { state: { viewingMode: o2 }, spatialReference: n2 } = this.view, a3 = o2 === l$3.Global, d2 = s2.isGeographic;
    if (a3 && !d2)
      return s$a.getLogger(G).warn("unsupported-pcs-edits-in-global-view", this.layer.title, N(s2, n2, this.view.viewingMode, k3.Mode)), null;
    if (!a3 && d2)
      return s$a.getLogger(G).warn("unsupported-gcs-edits-in-local-view", this.layer.title, N(s2, n2, this.view.viewingMode, k3.Mode)), null;
    if (!(G$3(s2, n2) || a3 && n2.isWebMercator && s2.isWGS84))
      return s$a.getLogger(G).warn("unsupported-mismatched-spatial-reference-edits", this.layer.title, N(s2, n2, this.view.viewingMode, k3.SpatialReference)), null;
    this._logWarningIfMaximumObjectsExceeded();
    const { objectIdField: c2, globalIdField: l2 } = i2, u2 = [c2, ...null != l2 ? [l2] : []], m2 = i2.createQuery();
    m2.where = "1=1", m2.returnGeometry = true, m2.outFields = u2, m2.cacheHint = true, m2.returnZ = i2.hasZ, m2.returnM = i2.hasM;
    const g2 = await this._executeBatchQuery(i2, e2, m2, t2), p2 = [];
    for (const h3 of g2) {
      if (!h3.ok)
        continue;
      const e3 = h3.value, { assetMaps: t3, features: i3, globalIdFieldName: o3 } = e3;
      if (null == t3)
        continue;
      const n3 = S$4(r2, t3);
      for (const a4 of i3) {
        const e4 = h$6(a4, o3, s2, r2, n3), t4 = a4;
        null != e4 ? (t4.geometry = e4, p2.push(t4)) : t4.geometry = null;
      }
    }
    return p2;
  }
  _logWarningIfMaximumObjectsExceeded() {
    if (!this._warnMaximumChangedObjectsExceeded)
      return;
    this._warnMaximumChangedObjectsExceeded = false;
    let e2 = `The number of edited objects that are not yet cached in the scene service exceeds the maximum limit. Attribute changes will only be available for the first ${u$8(this._maximumNumberOfEditOVerrides)} objects. Please consider re-caching the scene service`;
    const t2 = this.layer.portalItem;
    t2 && t2.loaded ? e2 += ` (${t2.portal.url}/home/item.html?id=${t2.id}#settings)` : e2 += ` (${this.layer.parsedUrl.path})`, s$a.getLogger(G).warn("#queryOverrides()", this.layer.title, `${e2}.`);
  }
  async _executeBatchQuery(e2, t2, i2, o2) {
    if (0 === t2.length)
      return [];
    const n2 = t$3(e2);
    t2 = [...t2].sort((e3, t3) => e3 - t3);
    const a3 = w$5(t2, n2).map((t3) => {
      const r2 = i2.clone();
      return r2.objectIds = t3, b$3(r$7(e2, r2, { signal: o2 }));
    });
    return Promise.all(a3);
  }
  _processOverridesFromAssociatedLayer(e2, t2, i2, { loadedAttributes: r2, attributeData: s2 }) {
    const o2 = this._associatedLayer;
    if (null == o2)
      return;
    const n2 = o2.objectIdField, a3 = i2.map((t3) => (t3 in s2 || (s2[t3] = new Array(e2.length)), s2[t3])), d2 = new Map(r2.map((e3) => [e3.name, e3.index])), c2 = i2.map((e3) => d2.get(e3)), h3 = new Map(Array.from(e2, (e3, t3) => [e3, t3]));
    for (const l2 of t2) {
      const e3 = l2.attributes[n2];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const r3 = c2[t3], s3 = h3.get(e3), o3 = l2.attributes[i2[t3]];
        a3[t3][s3] = o3, this._cacheAttributeValue(e3, r3, o3);
      }
    }
  }
  _memCacheAttributeValueSize(e2) {
    return "string" == typeof e2 ? r$8(e2) : n$7();
  }
  async _fetchChangedObjectIds(e2) {
    const i2 = this.layer;
    await i2.load({ signal: e2 }), this._geometryChangedObjectIds.clear(), this._attributeChangedObjectIds.clear();
    const { associatedLayer: r2 } = i2;
    if (null == r2 || !r2.capabilities?.operations?.supportsChangeTracking)
      return;
    const s2 = this._getFetchChangedObjectIdsServerGen();
    if (null == s2)
      return;
    const n2 = r2.layerId, a3 = this.is3DOFL, d2 = { f: "json", returnIdsOnly: true, layers: `[${n2}]`, returnUpdates: true, returnDeletes: a3, returnInserts: a3, layerServerGens: JSON.stringify([{ id: n2, serverGen: s2 }]) };
    if (a3) {
      const e3 = r2.infoFor3D;
      d2.fieldsToCompare = JSON.stringify({ fields: [...Object.values(e3.transformFieldRoles), e3.sourceHashField] });
    }
    const c2 = await _$3(U$2(`${r2.url}/extractChanges`, { method: "post", query: d2, timeout: V, signal: e2 }));
    if (!c2.ok && m$2(c2.error)) {
      const e3 = this.layer.title;
      s$a.getLogger(G).warn("extractChanges:timeout", e3, `${e3} could not obtain edited features that are not cached in the scene service. Display of features may not be up to date with the latest edits. Consider re-caching the scene service.`);
    }
    if (c2.ok && 1 === c2.value.data?.edits?.length) {
      const t2 = c2.value.data.edits[0], i3 = t2?.objectIds, s3 = t2?.fieldUpdates, o2 = i3?.adds ?? [], n3 = i3?.updates ?? [], d3 = i3?.deletes ?? [], h3 = [...o2, ...n3, ...d3], l2 = a3 ? [...o2, ...s3 ?? n3, ...d3] : [], u2 = Math.min(this._maximumNumberOfEditOVerrides, h3.length);
      u2 < h3.length && (this._warnMaximumChangedObjectsExceeded = true);
      const m2 = h3.sort((e3, t3) => e3 - t3);
      for (let e3 = 0; e3 < u2; ++e3) {
        const t3 = m2[e3];
        this._attributeChangedObjectIds.add(t3);
      }
      for (const e3 of l2)
        this._geometryChangedObjectIds.add(e3);
      if (this.is3DOFL && r$2() && this._geometryChangedObjectIds.size > 0) {
        const t3 = await this._queryGeometryOverridesFromAssociatedLayer(Array.from(this._geometryChangedObjectIds), e2);
        if (null != t3)
          for (const e3 of t3)
            null != e3.geometry && this.updateGeometry(e3.attributes[r2.objectIdField], e3.geometry);
      }
    }
  }
  _getFetchChangedObjectIdsServerGen() {
    const e2 = this.layer;
    if (null != e2.serviceUpdateTimeStamp?.lastUpdate)
      return e2.serviceUpdateTimeStamp.lastUpdate;
    const t2 = e2.associatedLayer;
    return null != t2?.serverGens?.minServerGen ? t2.serverGens.minServerGen : null;
  }
  async _lockFeatureIds(e2) {
    const t2 = this._featureIdLocks;
    let i2 = true;
    for (; i2; ) {
      const r3 = new Array();
      for (const i3 of e2) {
        const e3 = t2.get(i3);
        e3 && r3.push(e3);
      }
      0 === r3.length ? i2 = false : await Promise.all(r3);
    }
    const r2 = L$3(), s2 = r2.promise;
    for (const o2 of e2)
      t2.set(o2, s2);
    return e$5(() => {
      for (const i3 of e2)
        t2.delete(i3);
      r2.resolve();
    });
  }
  get test() {
    const e2 = Array.from(this._attributeChangedObjectIds), t2 = this._pendingFetchChangedObjectIds, i2 = this;
    return { changedObjectIds: e2, pendingFetchChangedObjectIds: t2, get maximumNumberOfEditOVerrides() {
      return i2._maximumNumberOfEditOVerrides;
    }, set maximumNumberOfEditOVerrides(e3) {
      i2._maximumNumberOfEditOVerrides = e3;
    } };
  }
};
e$4([y$2({ constructOnly: true })], D.prototype, "view", void 0), e$4([y$2({ constructOnly: true })], D.prototype, "layer", void 0), e$4([y$2({ readOnly: true })], D.prototype, "is3DOFL", null), e$4([y$2()], D.prototype, "_interactiveEditingSessions", void 0), e$4([y$2({ readOnly: true })], D.prototype, "sortedGeometryChangedObjectIds", null), e$4([y$2({ readOnly: true })], D.prototype, "geometryOverrides", void 0), e$4([y$2()], D.prototype, "_clientGeometryCache", void 0), e$4([y$2()], D.prototype, "_associatedLayer", null), e$4([y$2()], D.prototype, "_associatedLayerView", void 0), e$4([y$2({ constructOnly: true })], D.prototype, "memoryController", void 0), e$4([y$2()], D.prototype, "_attributeChangedObjectIds", void 0), e$4([y$2()], D.prototype, "_geometryChangedObjectIds", void 0), e$4([y$2()], D.prototype, "hasGeometryChanges", null), e$4([y$2()], D.prototype, "_pendingFetchChangedObjectIds", void 0), e$4([y$2()], D.prototype, "_pendingFetchAbortController", void 0), e$4([y$2()], D.prototype, "_definitionExpression", null), e$4([y$2()], D.prototype, "updating", null), e$4([y$2()], D.prototype, "isEmpty", null), D = e$4([c$3(G)], D);
class M {
  constructor(e2, t2) {
    this.objectId = e2, this._remove = t2, this._updates = /* @__PURE__ */ new Map(), this._isActive = true;
  }
  getAttribute(e2) {
    return this._updates.get(e2);
  }
  setAttribute(e2, t2) {
    this.isActive && this._updates.set(e2, t2);
  }
  remove() {
    this.isActive && (this._isActive = false, this._remove());
  }
  get isActive() {
    return this._isActive;
  }
}
const V = 1e4, $ = 5e4;
var k3;
function N(e2, t2, i2, r2) {
  return `Displaying the edits of a SceneLayer with a${r2 === k3.Mode ? e2.isGeographic ? " geographic " : " projected " : " "}spatial reference (wkid:${e2.wkid}) in ${i2} viewing mode${r2 === k3.SpatialReference ? ` with spatial reference (wkid:${t2.wkid}) ` : " "}is not supported. No geometry edits will be displayed for this layer.
Please consider re-caching the scene service or changing the ${r2 === k3.Mode ? "viewing mode" : "view spatial reference"} to display edits.`;
}
!function(e2) {
  e2[e2.Mode = 0] = "Mode", e2[e2.SpatialReference = 1] = "SpatialReference";
}(k3 || (k3 = {}));
export {
  C,
  D,
  M$1 as M,
  R$1 as R,
  Y,
  a2 as a,
  D$1 as b,
  b2 as c,
  e,
  s$1 as s
};
