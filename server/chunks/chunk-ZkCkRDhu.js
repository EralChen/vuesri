import { yh as en, yi as En, yj as f$3, xG as i, yk as o, yl as h$3, nJ as s$3, eQ as n$1, rZ as M$3, ym as u$2, bu as u$3, yn as r$1, lQ as e$2, yo as i$1, aM as s$4, yp as t, yq as i$2, b$ as n, b1 as s$5, yr as k$2, fn as F$2, vA as l$1, ov as g$3, sV as n$2, rb as e$3, eB as e$4, bo as e$5, bp as y$3, br as c$3, bs as g$4, h4 as z$2, eV as I$2, bS as e$6, as as l$2, ys as r$2, bI as b$2, y1 as J$1, dY as V$2, pq as s$6, yt as Pe, yu as Be, yv as T$3, yw as ct, l7 as E$4, y8 as qe, es as E$5, cp as t$2, yx as u$4, eA as D$3, yy as n$4, eY as i$4, lL as o$1, ez as N, yz as s$8, yA as a$4, aq as has, eF as I$3, cq as a$5, is as _$2, yB as y$4, yC as p$2, rL as _$3, b8 as a$6, yD as w$2, yE as L$1, yF as I$4, uY as H$1, ki as e$7, yG as O$1, nH as R$3, ko as o$2, yH as u$5, kj as d$4, yI as L$2, xO as Ke, o2 as a$7, ve as f$4, xN as Ge, ur as ke, yJ as ee$1, yK as T$4, yL as P$2, yM as z$3, y6 as Y$1, y7 as X$1, rS as p$3, fi as x$3, mL as g$5, pv as P$3, f8 as v, mJ as e$8, l6 as u$6, fd as c$4, bb as s$9, f3 as n$5, uT as A$1, yN as fe, eW as ue, uP as n$6, bJ as d$5, bn as P$4, bK as C$2, yO as o$3, aw as u$7, xB as u$8, uU as s$a, yP as V$3, yQ as g$6, u_ as c$5, yR as I$5, yS as l$3, qV as C$3, sk as t$3, bh as V$4, dZ as a$8, bD as u$9, em as e$9, eU as n$7, g_ as h$5, dM as u$a, yT as t$4, yU as m$3, pg as b$3, ph as r$3, yV as r$4, yW as n$8, a$ as j$1, yX as m$4, b7 as C$4 } from "./chunk-KFNcxJaF.js";
import { a as a$3, i as i$3, h as h$4, t as t$1, n as n$3, d as d$3, s as s$7, o as o$4 } from "./chunk-YQ5VkQy2.js";
import { s as s$b } from "./chunk-9JhcsZul.js";
import { assetMapFromAssetMapsJSON as M$4, extractMesh as S$4 } from "./chunk-0qGRH15g.js";
import l$4 from "./chunk-sTYTsp9W.js";
function a$2(e2, r2, t2, a3) {
  if (null == r2 || null == a3)
    return false;
  const E2 = En(r2, a3, p$1);
  if (E2.projector === f$3)
    return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], true;
  if (null == E2.projector)
    return false;
  const { source: R2, dest: m3 } = E2;
  if (m3.spatialReferenceId === i.WEB_MERCATOR) {
    const r3 = o[R2.spatialReferenceId][i.WGS84];
    return null != r3 && (r3(e2, 0, f$2, 0), h$3(f$2, 0, t2, 0), t2[3] = u$1(f$2[1], e2[2], e2[3], s$3.radius), true);
  }
  if (R2.spatialReferenceId !== i.WGS84 && R2.spatialReferenceId !== i.CGCS2000 || m3.spatialReferenceId !== i.PLATE_CARREE) {
    E2.projector(e2, 0, t2, 0);
    const r3 = R2.metersPerUnit ?? 1, n2 = m3.metersPerUnit ?? 1;
    t2[3] = e2[3] * r3 / n2;
  } else {
    const r3 = o[R2.spatialReferenceId][i.SPHERICAL_ECEF], n2 = o[i.SPHERICAL_ECEF][i.PLATE_CARREE];
    let o$12 = e2[3];
    null != r3 && null != n2 && (o$12 = u$1(e2[1], e2[2], e2[3], s$3.radius)), E2.projector(e2, 0, t2, 0), t2[3] = o$12;
  }
  return true;
}
function u$1(e2, r2, t2, n2) {
  const o2 = n2 + r2;
  if (o2 < n2 / 2 || t2 > o2)
    return Number.MAX_VALUE;
  const s3 = Math.abs(E$3 * e2) + Math.asin(t2 / o2);
  return s3 >= Math.PI / 2 ? Number.MAX_VALUE : t2 / Math.cos(s3);
}
const f$2 = n$1(), p$1 = en(), E$3 = M$3(1);
var e$1, s$2;
!function(e2) {
  e2[e2.KTX2 = 1] = "KTX2", e2[e2.Basis = 2] = "Basis", e2[e2.DDS_S3TC = 4] = "DDS_S3TC", e2[e2.PNG = 8] = "PNG", e2[e2.JPG = 16] = "JPG", e2[e2.KTX_ETC2 = 32] = "KTX_ETC2";
}(e$1 || (e$1 = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Color = 1] = "Color", e2[e2.MetallicRoughness = 2] = "MetallicRoughness", e2[e2.Normal = 4] = "Normal", e2[e2.Occlusion = 8] = "Occlusion", e2[e2.Emissive = 16] = "Emissive", e2[e2.AlphaMask = 32] = "AlphaMask", e2[e2.ColorTextures = 19] = "ColorTextures", e2[e2.GeometryTextures = 36] = "GeometryTextures", e2[e2.GeometryTexturesPBR = 44] = "GeometryTexturesPBR", e2[e2.AllTextures = 37] = "AllTextures", e2[e2.AllTexturesPBR = 63] = "AllTexturesPBR";
}(s$2 || (s$2 = {}));
async function c$2(o2) {
  const t2 = [], r2 = [];
  if (null == o2) {
    return { material: { alphaMode: "opaque", alphaCutoff: 0.1, doubleSided: true, cullFace: 0, normalTextureId: -1, emissiveTextureId: -1, occlusionTextureId: -1, emissiveFactor: [0, 0, 0], metallicRoughness: { baseColorFactor: [1, 1, 1, 1], baseColorTextureId: -1, metallicRoughnessTextureId: -1, metallicFactor: 0, roughnessFactor: 0.6000000238418579 }, wrapTextures: false, hasParametersFromSource: true }, requiredTextures: t2, textureData: r2 };
  }
  const a3 = d$2(o2);
  "auto" === o2.alphaMode && console.warn('alphaMode "auto" not supported by I3S PBRMaterial - defaulting to "blend".');
  const n2 = u$2({ normalTexture: o2.normalTexture, emissiveTexture: a3 ? o2.emissiveTexture : null, emissiveFactor: a3 ? u$3.toUnitRGB(o2.emissiveColor) : null, occlusionTexture: a3 ? o2.occlusionTexture : null, metallicRoughnessTexture: a3 ? o2.metallicRoughnessTexture : null, metallicFactor: a3 ? o2.metallic : null, roughnessFactor: a3 ? o2.roughness : null }), c3 = n2 ? r$1[0] : a3 ? o2.metallic : 0, g2 = n2 ? r$1[1] : a3 ? o2.roughness : 0;
  return { material: { alphaMode: "auto" === o2.alphaMode ? "blend" : o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, cullFace: o2.doubleSided ? e$2.None : e$2.Back, normalTextureId: await m$2(o2.normalTexture, t2, r2, s$2.Normal), emissiveTextureId: a3 ? await m$2(o2.emissiveTexture, t2, r2, s$2.Emissive) : -1, occlusionTextureId: a3 ? await m$2(o2.occlusionTexture, t2, r2, s$2.Occlusion) : -1, emissiveFactor: a3 && null != o2.emissiveColor ? u$3.toUnitRGB(o2.emissiveColor) : [0, 0, 0], metallicRoughness: { baseColorFactor: null != o2.color ? u$3.toUnitRGBA(o2.color) : [1, 1, 1, 1], baseColorTextureId: await m$2(o2.colorTexture, t2, r2, s$2.Color), metallicRoughnessTextureId: a3 ? await m$2(o2.metallicRoughnessTexture, t2, r2, s$2.MetallicRoughness) : -1, metallicFactor: c3, roughnessFactor: g2 }, wrapTextures: true, hasParametersFromSource: n2 }, requiredTextures: t2, textureData: r2 };
}
async function m$2(e2, s3, l2, i2) {
  if (null == e2)
    return -1;
  const u2 = l2.length, c3 = e2.data, m3 = e2.url;
  if (null != c3) {
    if (c3 instanceof HTMLImageElement || c3 instanceof HTMLCanvasElement) {
      const e3 = i$1(c3);
      return l2.push({ id: u2, usage: i2, data: e3, encoding: e$1.PNG, downsampled: false }), s3.push({ id: u2, usage: i2, encodings: [{ name: void 0, encoding: e$1.PNG }] }), u2;
    }
    if (c3 instanceof HTMLVideoElement)
      return -1;
    if (c3 instanceof ImageData)
      throw new s$4("ImageData textures not supported yet for client side I3S nodes");
    if (c3 instanceof t)
      throw new s$4("EncodedMeshTexture textures not supported yet for client side I3S nodes");
  } else if (null != m3) {
    const e3 = new Image();
    e3.src = m3;
    const o2 = await i$2(e3, e3.src, false, void 0), r2 = i$1(o2);
    return l2.push({ id: u2, usage: i2, data: r2, encoding: e$1.PNG, downsampled: false }), s3.push({ id: u2, usage: i2, encodings: [{ name: void 0, encoding: e$1.PNG }] }), u2;
  }
  return -1;
}
function d$2(e2) {
  return e2.hasOwnProperty("metallicRoughnessTexture");
}
let m$1 = class m {
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
    const o2 = `mesh${t2}`, r2 = e2.extent, n2 = r2.spatialReference, s3 = this._indexSR, a3 = h$2(r2, e2.origin);
    a$2(a3, n2, a3, s3);
    return { type: "mesh", id: o2, version: y$2(e2), oid: t2, mbs: a3, componentNodeIds: [], unloadedMesh: e2, nodeIndex: null, loadMeshPromise: null };
  }
  addMeshNode(t2, o2) {
    if (null != this.getMeshNodeIndex(o2.oid))
      throw new s$4(`I3SClientNodeLoader: client side mesh for feature oid=${o2.oid} already exists`);
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
      throw new s$4(`I3SClientNodeLoader::loadNodeJSON unable to find node ${t2}`);
    switch (o2.type) {
      case "mesh":
        return this._loadMeshNodeJSON(o2);
      case "mesh-component":
        return this._loadMeshComponentNodeJSON(o2);
      default:
        throw new s$4(`I3SClientNodeLoader::loadNodeJSON unable to handle node ${t2}`);
    }
  }
  async _loadMeshNodeJSON(e2) {
    const t2 = e2.id, o2 = (await this._getMeshData(e2)).loadedMesh;
    if (null == o2.components || 0 === o2.components.length)
      return { id: t2, version: null, mbs: e2.mbs, obb: null, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: null };
    const r2 = [], n2 = o2.components;
    for (let s3 = 0; s3 < n2.length; ++s3) {
      const o3 = `${t2}-component${s3}`, n3 = { type: "mesh-component", id: o3, mbs: e2.mbs, componentIndex: s3, meshNodeInfo: e2, textureData: /* @__PURE__ */ new Map() };
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
    const s3 = this._id2Meta.get(o2);
    if (null == s3 || "mesh-component" !== s3.type)
      throw new s$4(`Failed to load client node data for node ${o2} (unexpected node info)`);
    const a3 = s3.meshNodeInfo, i2 = await this._getMeshData(a3), l2 = i2.loadedMesh, d2 = a3.oid;
    if (null == l2.components)
      throw new s$4(`Failed to load client node data for node ${o2} (unexpected null reference)`);
    const u2 = l2.components[s3.componentIndex], { material: m3, requiredTextures: h2, textureData: x2 } = await c$2(u2.material);
    if (null != x2)
      for (const e2 of x2)
        null != e2 && s3.textureData.set(e2.id, e2);
    const y3 = { params: { material: m3 }, type: "ArrayBufferView" }, { vertexSpace: M2, origin: g2, transform: _2 } = l2, S2 = [g2.x, g2.y, g2.z ?? 0], w2 = { featureDataPosition: S2, featureIds: [], geometries: [y3] }, N2 = { attributeData: {}, loadedAttributes: [] };
    i2.projectionPromise || (n(this._worker, "SceneLayerWorker is needed to project mesh"), i2.projectionPromise = this._worker.project({ positions: l2.vertexAttributes.position, localMatrix: _2?.localMatrix, vertexSpace: M2.toJSON(), origin: S2, inSpatialReference: l2.spatialReference.toJSON(), outSpatialReference: this._vertexSR.toJSON(), localMode: this._localMode }, n$12));
    const { projected: b3, original: v2 } = await i2.projectionPromise;
    l2.vertexAttributes.position = v2;
    const { transformed: D2, original: R2 } = await f$1(u2, i2, this._worker, n$12);
    l2.vertexAttributes.normal = R2, s$5(n$12);
    const { geometryBuffer: I3, geometryDescriptor: j2 } = p(b3, u2.faces, D2, l2.vertexAttributes.uv, l2.vertexAttributes.color, d2);
    return { geometryData: w2, attributeDataInfo: N2, geometryBuffer: I3, geometryDescriptor: j2, requiredTextures: h2, textureData: x2, normalReferenceFrame: this._vertexSR.isGeographic ? "east-north-up" : "vertex-reference-frame" };
  }
  async loadAttributes(e2, t2, o2) {
    const r2 = e2.numFeatures, n2 = {};
    for (const { field: { name: s3 } } of t2)
      n2[s3] = new Array(r2);
    return n2;
  }
  async loadTextures(e2, t2, o2) {
    const r2 = e2.id, n2 = this._id2Meta.get(r2);
    if (null == n2 || "mesh-component" !== n2.type)
      throw new Error(`Failed to load textures for node ${e2.id} (unexpected node info)`);
    const s3 = [];
    for (const a3 of t2)
      s3.push(n2.textureData.get(a3.id) || null);
    return s3;
  }
  async _getMeshData(e2) {
    const t2 = e2.version, r2 = this._memCache.get(t2);
    if (null == r2) {
      if (null != e2.loadMeshPromise)
        return e2.loadMeshPromise;
      const r3 = async (r4, n2) => {
        const s3 = e2.unloadedMesh.clone();
        try {
          await s3.load();
        } catch (l2) {
          n2(l2);
        }
        const a3 = s3.memoryUsage, i2 = { loadedMesh: s3, projectionPromise: null, normalsTransformPromise: null, usedMemoryInBytes: a3 };
        this._memCache.put(t2, i2, a3, e$3), e2.loadMeshPromise = null, r4(i2);
      };
      return e2.loadMeshPromise = new Promise((e3, t3) => r3(e3, t3)), e2.loadMeshPromise;
    }
    return r2;
  }
};
function h$2(e2, t2) {
  const { spatialReference: o2 } = e2, r2 = [1, -1], n2 = [0.5 * e2.width, 0.5 * e2.height, e2.hasZ ? 0.5 * (e2.zmax - e2.zmin) : 0], s3 = o2.isGeographic ? o2.metersPerUnit : 1, a3 = e2.center;
  let i2 = 0;
  if (e2.hasZ)
    for (let l2 = 0; l2 < 2; ++l2)
      for (let e3 = 0; e3 < 2; ++e3)
        for (let o3 = 0; o3 < 2; ++o3) {
          const d2 = (a3.x + r2[l2] * n2[0] - t2.x) * s3, u2 = (a3.y + r2[e3] * n2[1] - t2.y) * s3, c3 = a3.z + r2[o3] * n2[2] - t2.z;
          i2 = Math.max(d2 * d2 + u2 * u2 + c3 * c3, i2);
        }
  else
    for (let l2 = 0; l2 < 2; ++l2)
      for (let e3 = 0; e3 < 2; ++e3) {
        const o3 = (a3.x + r2[l2] * n2[0] - t2.x) * s3, d2 = (a3.y + r2[e3] * n2[1] - t2.y) * s3;
        i2 = Math.max(o3 * o3 + d2 * d2, i2);
      }
  return k$2([t2.x, t2.y, t2.z], Math.sqrt(i2));
}
async function f$1(e2, o2, r2, n$12) {
  const { transform: d2, vertexAttributes: u2 } = o2.loadedMesh, c3 = "source" === e2.shading ? u2.normal : null;
  if (!(null != c3 && null != d2 && (0 !== d2.rotationAngle || !F$2(d2.scale, l$1))))
    return { transformed: c3, original: u2.normal };
  if (!o2.normalsTransformPromise) {
    n(r2, "SceneLayerWorker is needed to transform mesh normals");
    const e3 = e$4();
    g$3(e3, d2.localMatrix), o2.normalsTransformPromise = r2.transformNormals({ normalMatrix: e3, normals: c3 }, n$12);
  }
  return o2.normalsTransformPromise;
}
function p(e2, t2, o2, r2, n2, s3) {
  const a3 = 1, i2 = t2.length / 3, l2 = 3 * i2;
  let d2 = 0, u2 = 0, c3 = false, m3 = 0, h2 = false, f2 = 0, p2 = false, y3 = 0, w2 = 0, N2 = 0;
  d2 += M$2, d2 += M$2, u2 = d2, d2 += 3 * l2 * g$2, null != o2 && (c3 = true, m3 = d2, d2 += 3 * l2 * g$2), null != r2 && (h2 = true, f2 = d2, d2 += 2 * l2 * g$2), null != n2 && (p2 = true, y3 = d2, d2 += 4 * l2 * _$1), w2 = d2, d2 += a3 * S$3, N2 = d2, d2 += 2 * a3 * M$2;
  const b3 = new ArrayBuffer(d2), v2 = new Uint8Array(b3);
  x$2(v2, 0, l2), x$2(v2, M$2, a3);
  const D2 = new Float32Array(b3, u2), R2 = null != o2 ? new Float32Array(b3, m3) : null, I3 = null != r2 ? new Float32Array(b3, f2) : null, j2 = null != n2 ? new Uint8Array(b3, y3) : null;
  for (let x2 = 0; x2 < i2; ++x2) {
    const s4 = 3 * x2;
    for (let a4 = 0; a4 < 3; ++a4) {
      const i3 = t2[s4 + a4], l3 = 3 * i3, d3 = 9 * x2 + 3 * a4;
      if (D2[d3] = e2[l3], D2[d3 + 1] = e2[l3 + 1], D2[d3 + 2] = e2[l3 + 2], null != R2 && (R2[d3] = o2[l3], R2[d3 + 1] = o2[l3 + 1], R2[d3 + 2] = o2[l3 + 2]), null != I3) {
        const e3 = 2 * i3, t3 = 6 * x2 + 2 * a4;
        I3[t3] = r2[e3], I3[t3 + 1] = r2[e3 + 1];
      }
      if (null != j2) {
        const e3 = 4 * i3, t3 = 12 * x2 + 4 * a4;
        j2[t3] = n2[e3], j2[t3 + 1] = n2[e3 + 1], j2[t3 + 2] = n2[e3 + 2], j2[t3 + 3] = n2[e3 + 3];
      }
    }
  }
  x$2(v2, w2, s3), x$2(v2, w2 + M$2, s3 / 2 ** 32), x$2(v2, N2, 0), x$2(v2, N2 + M$2, i2 - 1);
  return { geometryBuffer: b3, geometryDescriptor: { isDraco: false, isLegacy: true, color: p2, normal: c3, uv0: h2, uvRegion: false, featureIndex: true } };
}
function x$2(e2, t2, o2) {
  e2[t2] = 255 & o2, e2[t2 + 1] = 255 & o2 >> 8, e2[t2 + 2] = 255 & o2 >> 16, e2[t2 + 3] = 255 & o2 >> 24;
}
function y$2(e2) {
  const t2 = e2.metadata.displaySource?.source;
  if (null == t2 || !Array.isArray(t2) || !t2.length || t2[0] instanceof File)
    return n$2();
  const o2 = t2;
  let r2 = "";
  for (const n2 of o2)
    r2 += n2.makeHash();
  return r2 + JSON.stringify(null != e2.transform ? e2.transform.toJSON() : "") + (e2.vertexSpace.isRelative ? JSON.stringify(e2.vertexSpace.origin) : "");
}
const M$2 = 4, g$2 = 4, _$1 = 1, S$3 = 8;
let a$1 = class a extends g$4 {
  constructor() {
    super(), this.referenceCount = 0, this.callbacks = new Array(), this.runIndex = 0;
  }
  get running() {
    return this.callbacks.some((r2) => r2.running);
  }
  runTask(r2) {
    this._sort();
    const s3 = this.callbacks, t2 = { numIndexLoading: 0, numNodesLoading: 0 };
    for (let e2 = 0; e2 < s3.length && !r2.done; ++e2)
      s3[e2].priority = s3[e2].runTask(r2, t2), this.runIndex = e2;
  }
  _sort() {
    const r2 = this.callbacks;
    let s3 = r2.length;
    for (let t2 = this.runIndex; t2 > 0; t2--) {
      const e2 = r2[t2 - 1];
      let o2 = t2;
      for (; o2 < r2.length && e2.priority <= r2[o2].priority && (o2 !== s3 || e2.priority < r2[o2].priority); )
        r2[o2 - 1] = r2[o2], o2++;
      r2[o2 - 1] = e2, s3 = o2 - 1;
    }
    this.runIndex = 0;
  }
  add(r2) {
    this._sort(), r2.priority = 1 / 0, this.callbacks.unshift(r2), this.notifyChange("running");
  }
  remove(r2) {
    z$2(this.callbacks, r2), this.runIndex = this.callbacks.length, this._sort(), this.notifyChange("running");
  }
};
e$5([y$3({ readOnly: true })], a$1.prototype, "running", null), a$1 = e$5([c$3("esri.views.3d.layers.i3s.I3SFrameTask")], a$1);
let c$1 = class c {
  constructor(r2, s3) {
    this.task = r2, this.handle = s3;
  }
};
const l = /* @__PURE__ */ new Map();
function u(r2, s3) {
  let t2 = l.get(r2);
  if (null == t2) {
    const s4 = new a$1(), e2 = r2.registerTask(I$2.I3S_CONTROLLER, s4);
    t2 = new c$1(s4, e2), l.set(r2, t2);
  }
  return t2.task.add(s3), e$6(() => {
    if (null == t2)
      return;
    t2.task.remove(s3);
    t2.task.callbacks.length > 0 || (l.delete(r2), t2.handle.remove(), t2.task.destroy()), t2 = null;
  });
}
function e(e2, a3, n2) {
  e2 && ("number" == typeof a3 ? (e2.elevationRangeMin = Math.min(e2.elevationRangeMin, a3), e2.elevationRangeMax = Math.max(e2.elevationRangeMax, n2)) : (e2.elevationRangeMin = Math.min(e2.elevationRangeMin, a3.elevationRangeMin), e2.elevationRangeMax = Math.max(e2.elevationRangeMax, a3.elevationRangeMax)));
}
let b$1 = class b {
  constructor(e2, t2, i2, s3, n2) {
    this.childOffset = e2, this.childCount = t2, this.visibilityCache = i2, this.ref = s3, this.node = n2, this.useAsHole = 0, this.filterImpact = t$1.NotChecked, this.traversalState = null, this.parent = -1;
  }
};
let y$1 = class y {
  constructor(e2 = [], t2 = []) {
    this.nodes = e2, this.children = t2, this.lastTraversed = 0, this.numNodesWithLoadedChildren = 0;
  }
};
let P$1 = class P {
  get _useNodePages() {
    return this._pageSize > 0;
  }
  constructor(t2, i2, s3, n2, o2, r2, a3, d2, u2, c3, g2, _2, f2, m3, v2) {
    this._layer = t2, this._streamDataController = s3, this._clientNodeLoader = n2, this._viewportQueries = o2, this._logger = r2, this.holeFilling = a3, this._isLoaded = d2, this._isReloading = u2, this._isSelected = c3, this._enable = g2, this._needsUpdate = _2, this._canRequest = f2, this._computeVisibilityObb = m3, this._computeNodeFiltering = v2, this._dirty = true, this._nodePages = /* @__PURE__ */ new Map(), this._clientNodePage = null, this._pageSize = 0, this._rootIndex = 0, this._lodMetric = a$3.None, this._lodConversion = (e2) => e2, this._isEditable = false, this._urlPrefix = "", this._loadingNodes = /* @__PURE__ */ new Set(), this._loadingPages = /* @__PURE__ */ new Set(), this._failedNodes = /* @__PURE__ */ new Set(), this._failedPages = /* @__PURE__ */ new Set(), this._indexMissing = 1, this._maxUnloadedPrio = Number.NEGATIVE_INFINITY, this._maxProcessingPrio = Number.POSITIVE_INFINITY, this._version = S$2(0), this._visibilityCacheVersion = S$2(0), this._maxLevel = 1, this._featureEstimate = { estimate: 0, leavesReached: false }, this._unloadedMemoryEstimate = 0, this._missingPagesAndNodes = new l$2({ deallocator: null }), this._prefetchNodes = new l$2({ deallocator: null }), this._updates = new I$1(this._missingPagesAndNodes), this._imModificationUncategorized = new l$2({ deallocator: null }), this.ignoreServiceObb = false, this.progressiveLoadPenalty = 0, this._pageQueue = new Array(), this._newPages = new Array(), this.needNodeElevationRange = false, this.layerHasModifications = false, this._layerHasFilter = false, this._frameNumber = 0, this._isEditable = r$2() && null != t2.associatedLayer?.infoFor3D, t2.serviceUpdateTimeStamp?.lastUpdate && (this._lastUpdate = `${t2.serviceUpdateTimeStamp.lastUpdate}`), this._maxLodLevel = this._viewportQueries ? this._viewportQueries.maxLodLevel : 1, this._init(i2);
  }
  _init(e2) {
    if ("page" === e2.type) {
      const t2 = e2.rootPage;
      switch (this._urlPrefix = e2.urlPrefix, this._pageSize = e2.pageSize, e2.lodMetric) {
        case "maxScreenThreshold":
          this._lodMetric = a$3.MaxScreenThreshold;
          break;
        case "maxScreenThresholdSQ":
          this._lodMetric = a$3.MaxScreenThreshold, this._lodConversion = z$1;
      }
      if (this._isEditable) {
        this._rootIndex = -1;
        const i2 = A(e2.rootIndex, e2.pageSize), s3 = t2.nodes[i2], n2 = { nodes: [{ index: this._rootIndex, children: [e2.rootIndex], mesh: void 0, obb: s3.obb, lodThreshold: s3.lodThreshold }] };
        this._addPage(O(this._rootIndex, this._pageSize), n2), this.getNode(-1).serviceObb = void 0;
      } else
        this._rootIndex = e2.rootIndex;
      this._addPage(O(e2.rootIndex, this._pageSize), t2), this._updateParentsAndLevel();
    } else if ("node" === e2.type) {
      this._urlPrefix = e2.urlPrefix;
      const t2 = new y$1();
      if (this._nodePages.set(0, t2), this._isEditable) {
        this._clientNodePage = new y$1();
        const t3 = { id: "-1", version: null, mbs: e2.rootNode.mbs, obb: e2.rootNode.obb, sharedResource: null, geometryData: null, attributeData: null, featureData: null, children: [{ id: "root", href: "../root", mbs: e2.rootNode.mbs, obb: e2.rootNode.obb }] };
        this._rootIndex = this._makeClientRefNode(new i$3(t3.id, null), -1);
        const i3 = this._validateNode(t3.id, t3);
        i3 && this._addNode(i3, this._rootIndex);
      } else
        this._rootIndex = this._makeRefNode(new i$3(e2.rootNode.id, null), -1);
      const i2 = this._validateNode(e2.rootNode.id, e2.rootNode);
      i2 && this._addNode(i2, 0);
    }
  }
  addClientNodeToIndex(e2, t2) {
    const i2 = -1, s3 = new i$3(e2, t2), n2 = this._makeClientRefNode(s3, i2);
    return this._linkChildToParentNode(i2, n2), this.requestUpdate(), n2;
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
        if (null == e3)
          continue;
        const t2 = e3.nodes;
        for (let i2 = 0; i2 < this._pageSize; i2++) {
          let e4 = t2[i2].parent;
          for (; null != e4 && e4 !== this._rootIndex; ) {
            const t3 = this.getNode(e4);
            t3 && !Number.isNaN(t3?.elevationRangeMin) && (t3.invalidateElevationRange(), this.invalidateBoundingVolumeCache(e4)), e4 = this.getParentIndex(e4);
          }
        }
      }
  }
  _addPage(e2, t2) {
    const s3 = [], o2 = [], r2 = t2.nodes.map((t3, r3) => {
      const a4 = s3.length, l2 = t3.children ? t3.children.length : 0;
      o2.push(this._rootIndex);
      for (let e3 = 0; e3 < l2; e3++)
        s3.push(t3.children[e3]);
      const d2 = `${t3.index}`, h2 = J$1(t3.obb), u2 = V$2(h2.center[0], h2.center[1], h2.center[2], s$6(h2.halfSize)), g2 = t3.mesh?.attribute, _2 = t3.mesh?.geometry, f2 = t3.mesh?.material, m3 = { hasSharedResource: false, isEmpty: null == _2, attributes: null != g2?.resource ? `${g2.resource}` : void 0, geometry: null != _2?.resource ? `${_2.resource}` : void 0, texture: null != f2?.resource ? `${f2.resource}` : void 0, geometryDefinition: _2 ? _2.definition : -1, materialDefinition: f2 ? f2.definition : -1 }, v2 = new h$4(d2, V$1(r3, e2, this._pageSize), u2, l2, 0, m3, this._lastUpdate, this._lodMetric, this._lodConversion(t3.lodThreshold), _2 ? _2.featureCount : null);
      return v2.serviceObb = h2, v2.visibilityObb = this._computeVisibilityObb(v2), v2.vertexCount = _2 ? _2.vertexCount : 0, new b$1(a4, l2, w$1(this._visibilityCacheVersion), null, v2);
    }), a3 = new y$1(r2, s3);
    -1 === e2 ? this._clientNodePage = a3 : this._nodePages.set(e2, a3);
  }
  _updateParentsAndLevel() {
    const e2 = new Array(), t2 = (t3, i2, s3) => {
      const n2 = this._getPage(t3);
      if (null != n2) {
        const o2 = A(t3, this._pageSize), r2 = n2.nodes[o2];
        r2.parent = null != i2 ? i2 : -1;
        const a3 = r2.node;
        null != a3 && (a3.level = s3, e2.push(t3));
      }
    };
    for (t2(this._rootIndex, null, 0); e2.length; ) {
      const i2 = e2.pop(), s3 = this.getNode(i2);
      if (null != s3)
        for (let e3 = 0; e3 < s3.childCount; e3++) {
          t2(this.getChildIndex(s3.index, e3), i2, s3.level + 1), this._maxLevel = Math.max(this._maxLevel, s3.level + 1);
        }
    }
  }
  _getPage(e2) {
    const t2 = O(e2, this._pageSize);
    return t2 < 0 ? this._clientNodePage : this._nodePages.get(t2);
  }
  _getNodeInternal(e2) {
    const t2 = this._getPage(e2);
    return null == t2 ? null : (t2.lastTraversed = this._frameNumber, t2.nodes[A(e2, this._pageSize)]);
  }
  _addNode(e2, t2) {
    null != e2.children && this.populateChildren(t2, e2.children);
    const i2 = this.getParent(t2), s3 = null != i2 ? i2.level + 1 : 0;
    this._maxLevel = Math.max(this._maxLevel, e2.children ? s3 + 1 : s3);
    const { lodMetric: n2, maxError: o2 } = k$1(e2.lodSelection), r2 = this._getNodeInternal(t2);
    return r2.node = new h$4(e2.id, t2, e2.mbs, r2.childCount, s3, e2.resources, e2.version, n2, o2, e2.numFeatures), e2.obb && (r2.node.serviceObb = J$1(e2.obb)), r2.node.visibilityObb = this._computeVisibilityObb(r2.node), null != r2.ref && (null == r2.ref.mbs && (r2.ref.mbs = e2.mbs), r2.node.renderMbs = r2.ref.renderMbs, r2.node.serviceObbInRenderSR = r2.ref.serviceObbInRenderSR, r2.ref.visibilityObb = r2.node.visibilityObb), r2.node;
  }
  _makeRefNode(e2, t2) {
    const i2 = this._nodePages.get(0);
    if (t2 < -1)
      return this._makeClientRefNode(e2, t2);
    if (null == i2)
      return -1;
    const s3 = i2.nodes.length, n2 = new b$1(0, 0, w$1(this._visibilityCacheVersion), e2, null);
    return i2.nodes.push(n2), n2.parent = t2, Pe(e2.renderMbs), Be(e2.serviceObbInRenderSR), s3;
  }
  _makeClientRefNode(e2, t2) {
    const i2 = this._clientNodePage;
    if (null == i2)
      return -1;
    if (t2 >= 0)
      throw new Error("I3SIndex::client side nodes can not be made children of service side nodes.");
    const s3 = -(i2.nodes.length + 1), n2 = new b$1(0, 0, w$1(this._visibilityCacheVersion), e2, null);
    return i2.nodes.push(n2), n2.parent = t2, Pe(e2.renderMbs), Be(e2.serviceObbInRenderSR), s3;
  }
  _linkChildToParentNode(e2, t2) {
    const i2 = this._clientNodePage;
    if (null == i2 || e2 >= 0)
      return;
    const s3 = A(e2, this._pageSize), n2 = A(t2, this._pageSize), o2 = i2.nodes[s3], r2 = o2.childOffset;
    i2.children.splice(o2.childOffset + o2.childCount, 0, t2);
    const a3 = 1;
    o2.childCount += a3, null != o2.node && (o2.node.childCount += a3);
    for (const l2 of i2.nodes)
      l2.childOffset > r2 && (l2.childOffset += a3);
    i2.nodes[n2].parent = e2, this._updateParentBoundingInformation(e2);
  }
  _destroyClientRefNode(e2, t2, i2) {
    const s3 = this._clientNodePage;
    if (null == s3)
      return;
    const n2 = this.getParentIndex(e2);
    if (null == n2)
      return;
    const o2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), a3 = (e3) => {
      const i3 = A(e3, this._pageSize), n3 = s3.nodes[i3];
      if (n3.childCount > 0)
        for (let t3 = n3.childOffset; t3 < n3.childOffset + n3.childCount; ++t3)
          a3(s3.children[t3]);
      const r3 = n3.node?.id ?? n3.ref?.id;
      if (null == r3)
        throw new Error("Node has no id");
      t2(r3, e3), o2.add(n3);
    };
    a3(e2);
    const l2 = s3.nodes, d2 = s3.children, h2 = s3.nodes.map(() => -1), u2 = [], c3 = [];
    for (let g2 = 0; g2 < l2.length; ++g2) {
      const e3 = l2[g2];
      if (o2.has(e3))
        continue;
      const t3 = u2.length, s4 = V$1(g2, -1, this._pageSize), n3 = V$1(t3, -1, this._pageSize);
      if (e3.node && (e3.node.index = n3), h2[g2] = n3, u2.push(e3), s4 !== n3) {
        const t4 = e3.node?.id ?? e3.ref?.id;
        if (null == t4)
          throw new Error("Node has no id");
        i2(t4, s4, n3), r2.set(s4, n3);
      }
    }
    for (let g2 = 0; g2 < u2.length; ++g2) {
      const e3 = V$1(g2, -1, this._pageSize), t3 = u2[g2], i3 = c3.length;
      for (let s4 = t3.childOffset; s4 < t3.childOffset + t3.childCount; ++s4) {
        const t4 = d2[s4];
        if (t4 >= 0)
          c3.push(t4);
        else {
          const i4 = A(t4, this._pageSize), s5 = l2[i4];
          if (o2.has(s5))
            continue;
          const n3 = h2[i4];
          c3.push(n3), s5.parent = e3;
        }
      }
      t3.childOffset = i3, t3.childCount = c3.length - i3, t3.node && (t3.node.childCount = t3.childCount);
    }
    s3.nodes = u2, s3.children = c3, this._updateParentBoundingInformation(h2[A(n2, this._pageSize)]);
  }
  _updateParentBoundingInformation(e2) {
    let t2 = e2;
    do {
      let e3 = null;
      const i2 = this._clientNodeLoader.indexSR, n2 = this._clientNodeLoader.renderSR, l2 = this._getNodeInternal(t2);
      if (null == l2)
        return;
      for (let a3 = 0; a3 < l2.childCount; a3++) {
        const l3 = this.getChildIndex(t2, a3), d3 = this._getNodeInternal(l3), h2 = null != d3 ? d3.ref || d3.node : null;
        if (null != h2 && h2.mbs[3] > 0)
          if (null == e3)
            e3 = T$3(h2.mbs, D$2);
          else {
            const t3 = T$2, o2 = Q$1, a4 = U;
            a$2(h2.mbs, i2, t3, n2), a$2(e3, i2, o2, n2), ct(t3, o2, a4), a$2(a4, n2, e3, i2);
          }
      }
      const d2 = l2.ref || l2.node;
      null != d2 && (null != e3 ? d2.mbs = T$3(e3, null != d2.mbs ? d2.mbs : E$4()) : Pe(d2.mbs), Pe(d2.renderMbs), Be(d2.serviceObbInRenderSR), d2.geometryObb = null), this.invalidateNodeVisibilityCacheInternal(l2), t2 = this.getParentIndex(t2);
    } while (null != t2);
  }
  populateChildren(e2, t2) {
    const i2 = this._getNodeInternal(e2), s3 = this._getPage(e2);
    i2.childOffset = s3.children.length, i2.childCount = t2.length;
    for (let n2 = 0; n2 < t2.length; n2++) {
      const i3 = this._makeRefNode(t2[n2], e2);
      s3.children.push(i3);
    }
  }
  getNode(e2) {
    const t2 = this._getNodeInternal(e2);
    return null != t2 ? t2.node : null;
  }
  getIndexById(e2) {
    let t2;
    return this._forAllNodes((i2, s3) => {
      (null != i2.node && i2.node.id === e2 || null != i2.ref && i2.ref.id === e2) && (t2 = s3);
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
    const s3 = i2.nodes[A(e2, this._pageSize)];
    return i2.children[s3.childOffset + t2];
  }
  getParentIndex(e2) {
    const t2 = this._getPage(e2);
    return null != t2 && e2 !== this._rootIndex ? t2.nodes[A(e2, this._pageSize)].parent : null;
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
      null != e2.node && (e2.node.geometryObb = null);
    });
  }
  invalidateVisibilityCache() {
    this._visibilityCacheVersion = S$2(this._visibilityCacheVersion);
  }
  invalidateNodeVisibilityCache(e2) {
    const t2 = this._getNodeInternal(e2);
    null != t2 && this.invalidateNodeVisibilityCacheInternal(t2);
  }
  invalidateNodeVisibilityCacheInternal(e2) {
    e2.visibilityCache = w$1(this._visibilityCacheVersion);
  }
  invalidateBoundingVolumeCache(e2) {
    const t2 = this._getNodeInternal(e2);
    null != t2 && (C$1(t2), this.invalidateNodeVisibilityCacheInternal(t2));
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
    const t2 = this._getNodeInternal(e2);
    null != t2?.node && (t2.node.geometryObb = null, Pe(t2.node.renderMbs), Be(t2.node.serviceObbInRenderSR));
  }
  invalidateVisibilityObbs() {
    null != this.rootNode && this.traverse(this.rootNode, (e2) => (e2.visibilityObb = this._computeVisibilityObb(e2), e2.geometryObb = null, true));
  }
  _updateElevationRange(e2) {
    this._updateElevationRangeInternal(e2, null);
  }
  _updateElevationRangeInternal(e$12, t2) {
    const i2 = this._getNodeInternal(e$12);
    if (!i2)
      return false;
    const s3 = i2?.node ?? i2?.ref;
    if (!s3)
      return false;
    const n2 = s3.elevationRangeMin;
    if (!Number.isNaN(n2))
      return e(t2, s3), true;
    const o2 = { elevationRangeMin: 1 / 0, elevationRangeMax: -1 / 0 };
    let r2 = false;
    for (let l2 = 0; l2 < i2.childCount; l2++) {
      const t3 = this.getChildIndex(e$12, l2);
      this._updateElevationRangeInternal(t3, o2) || (r2 = true);
    }
    if (0 === i2.childCount || r2) {
      const e2 = !i2.node?.resources.isEmpty;
      this._viewportQueries.expandElevationRange(s3, e2, o2);
    }
    const a3 = s3.elevationRangeMax;
    return Number.isNaN(n2) || n2 !== o2.elevationRangeMin || a3 !== o2.elevationRangeMax ? (i2.node && (i2.node.elevationRangeMin = o2.elevationRangeMin, i2.node.elevationRangeMax = o2.elevationRangeMax), i2.ref && (i2.ref.elevationRangeMin = o2.elevationRangeMin, i2.ref.elevationRangeMax = o2.elevationRangeMax), this.invalidateBoundingVolumeCache(e$12), e(t2, s3), true) : (e(t2, s3), true);
  }
  isNodeVisible(e2) {
    const t2 = this._getNodeInternal(e2);
    if (null == t2 || null != t2.ref && !t2.ref.mbs)
      return true;
    if (this.needNodeElevationRange && this._updateElevationRange(e2), !M$1(t2.visibilityCache, this._visibilityCacheVersion)) {
      const e3 = t2.node, i2 = !e3 || t2.ref && !e3.visibilityObb ? t2.ref ?? null : e3;
      if (this._layerHasFilter && this._computeNodeFiltering && (null != e3 || null != t2.ref) && t2.filterImpact === t$1.NotChecked) {
        const i3 = null != e3 ? e3.mbs : null != t2.ref ? t2.ref.mbs : null;
        t2.filterImpact = null != i3 ? this._computeNodeFiltering(i3) : t$1.Unmodified;
      }
      const s3 = null != e3 && t2.filterImpact === t$1.Culled, n2 = !(null != e3 && e3.imModificationImpact === n$3.Culled) && (!i2 || this._viewportQueries.isNodeVisible(i2)) && !s3;
      return t2.visibilityCache = R$2(n2, this._visibilityCacheVersion), n2;
    }
    return E$2(t2.visibilityCache);
  }
  isGeometryVisible(e2) {
    if (!this.isNodeVisible(e2))
      return false;
    const t2 = this._getNodeInternal(e2);
    return !!(null == t2?.node?.geometryObb || this.layerHasModifications && t2.node.imModificationImpact === n$3.NotChecked) || this._viewportQueries.isGeometryVisible(t2.node);
  }
  _traverseCoverage(e2, t2, i2, s3, n2) {
    const o2 = this._getPage(e2);
    if (null == o2 || 0 === t2.childCount)
      return;
    const r2 = t2.childOffset + t2.childCount, a3 = new Array();
    for (let l2 = t2.childOffset; l2 < r2; ++l2) {
      const e3 = o2.children[l2], t3 = this._getNodeInternal(e3);
      null != t3?.node && this.isGeometryVisible(e3) && a3.push(t3);
    }
    s3 /= a3.length;
    for (const l2 of a3) {
      const e3 = l2.node.index;
      this._isLoaded(e3) || this._isReloading(e3) ? (n2.delta = Math.max(n2.delta, i2), n2.coverage += s3) : this._traverseCoverage(e3, l2, i2 + 1, s3, n2);
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
    if (M$1(t2.useAsHole, this._version))
      return E$2(t2.useAsHole);
    const i2 = { delta: 0, coverage: 0 };
    this._traverseCoverage(e2, t2, 0, 1, i2);
    const s3 = i2.delta * i2.coverage <= 0.5;
    return t2.useAsHole = R$2(s3, this._version), s3;
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
    this._dirty = true, this._indexMissing = 1, this._version = S$2(this._version);
  }
  imModificationsChanged(e2) {
    this.layerHasModifications = e2, this._forAllNodes(({ node: e3 }) => {
      null != e3 && (e3.imModificationImpact = n$3.NotChecked, e3.visibilityObb = this._computeVisibilityObb(e3), e3.hasModifications && this.invalidateGeometryVisibility(e3.index));
    }), this.invalidateVisibilityCache();
  }
  layerFilterChanged(e2) {
    this._layerHasFilter = e2, this._forAllNodes((e3) => {
      if (null != e3) {
        e3.filterImpact = t$1.NotChecked;
        const t2 = e3.node;
        null != t2 && this.invalidateNodeVisibilityCache(t2.index);
      }
    }), this.invalidateVisibilityCache();
  }
  update(e2, t2, i2) {
    if (!this._dirty)
      return;
    this._pageQueue.length > 0 && this._addQueuedPages(t2), this._invalidateElevationRangeForNewPages(t2), this._maxUnloadedPrio = Number.NEGATIVE_INFINITY, this._maxProcessingPrio = Number.NEGATIVE_INFINITY, this._missingPagesAndNodes.clear(), this._prefetchNodes.clear(), this._updates.reset(e2), x$1.clear();
    let s3 = true;
    const n2 = new F$1(), o2 = new F$1(), r2 = this._imModificationUncategorized;
    r2.clear();
    const a3 = /* @__PURE__ */ new Set(), l2 = (l3, d3, h2) => {
      const u2 = O(l3, this._pageSize);
      if (a3.add(u2), null == d3) {
        let e3 = this._entryPriority(l3);
        return e3 === 1 / 0 && (e3 = this._entryPriority(h2)), x$1.set(u2, Math.max(e3, x$1.get(u2) || 0)), this._loadingPages.has(u2) || this._failedPages.has(u2) || this._missingPagesAndNodes.push(u2), void (this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3));
      }
      const c3 = d3.node;
      if (this._updateNodeFeatureEstimate(c3, o2), null == c3) {
        const e3 = this._entryPriority(l3);
        return this._loadingNodes.has(l3) || this._failedNodes.has(l3) || (this._missingPagesAndNodes.push(l3), x$1.set(l3, e3)), void (this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3));
      }
      const g2 = this._getPage(l3);
      if (0 === this._missingPagesAndNodes.length && !this._useNodePages)
        for (let e3 = 0; e3 < d3.childCount; e3++) {
          const t3 = g2.children[d3.childOffset + e3], i3 = this._getNodeInternal(t3);
          null == i3 || i3.node || this._loadingNodes.has(t3) || this._failedNodes.has(t3) || (x$1.set(t3, this._entryPriority(t3)), this._prefetchNodes.push(t3));
        }
      if (c3.failed || c3.resources.isEmpty)
        return void (s3 && d3.childCount > 0 && this._isSelected(c3) && (s3 = false));
      if (this._isLoaded(l3)) {
        if (n2.known += c3.memory, ++n2.knownNodes, this._isSelected(c3) ? d3.childCount > 0 && (s3 = false) : (n2.unremoved += c3.memory, s3 = false), this._needsUpdate(c3)) {
          const e3 = this._entryPriority(l3);
          x$1.set(l3, e3), this._maxProcessingPrio = Math.max(this._maxProcessingPrio, e3), this._updates.update.push(l3);
        }
        return;
      }
      if (c3.memory && (n2.known += c3.memory, ++n2.knownNodes), !this._isSelected(c3))
        return void (this._isReloading(l3) && this._updates.remove.push(l3));
      if (d3.childCount > 0 && (s3 = false), c3.memory ? (n2.missing += c3.memory, n2.known += c3.memory, ++n2.knownNodes) : ++n2.missingNodes, e2.includes(c3.index))
        return this._maxProcessingPrio = Math.max(this._maxProcessingPrio, this._entryPriority(l3)), void (this._updates.cancel = this._updates.cancel.filter((e3) => e3 !== c3.index));
      if (!t2.done && this._enable(c3))
        return void t2.madeProgress();
      const f2 = this._entryPriority(l3);
      x$1.set(l3, f2), this._maxProcessingPrio = Math.max(this._maxProcessingPrio, f2), this._updates.add.push(l3), this.layerHasModifications && i2 && null != c3 && c3.imModificationImpact === n$3.NotChecked && r2.push(l3);
    };
    this.traverseVisible(l2), this._frameNumber++, this._missingPagesAndNodes.sort((e3, t3) => e3 - t3), this._missingPagesAndNodes.filterInPlace((e3, t3) => t3 < 1 || this._missingPagesAndNodes.data[t3 - 1] !== e3), this._missingPagesAndNodes.sort((e3, t3) => x$1.get(e3) - x$1.get(t3)), this._missingPagesAndNodes.length > 0 && (this._maxUnloadedPrio = x$1.get(this._missingPagesAndNodes.back()), this._prefetchNodes.clear());
    const d2 = this._updates.add;
    d2.length > 0 && this.layerHasModifications && (r2.length > 0 && i2?.(r2), d2.filterInPlace((e3) => {
      const t3 = this._getNodeInternal(e3), i3 = null == t3?.node || t3.node.imModificationImpact !== n$3.Culled;
      return i3 || this.invalidateNodeVisibilityCache(e3), i3;
    })), this._unloadedMemoryEstimate = n2.missing - n2.unremoved, n2.knownNodes > 3 && n2.missingNodes > 0 && (this._unloadedMemoryEstimate += n2.known / n2.knownNodes * n2.missingNodes), this._unloadedMemoryEstimate = 0.8 * Math.max(0, this._unloadedMemoryEstimate), this._featureEstimate.estimate = this._computeFeatureEstimate(o2), this._featureEstimate.leavesReached = s3, this._updates.add.filterInPlace((e3) => x$1.get(e3) >= this._maxUnloadedPrio).sort((e3, t3) => x$1.get(e3) - x$1.get(t3)), this._updates.update.sort((e3, t3) => x$1.get(e3) - x$1.get(t3)), this._indexMissing = this._loadingPages.size + this._loadingNodes.size + this._missingPagesAndNodes.length, this._dirty = this._indexMissing > 0, x$1.clear();
  }
  checkFeatureTarget(e2, t2) {
    const i2 = this._viewportQueries.updateScreenSpaceErrorBias(t2);
    let s3 = t2, n2 = t2, o2 = i2, r2 = 10;
    for (; r2--; ) {
      const i3 = new F$1();
      this._updateFeatureEstimate(s3, i3);
      if (this._computeFeatureEstimate(i3) <= e2) {
        if (s3 >= t2 || i3.missingNodes > 0 || 0 === r2)
          break;
        o2 = s3, s3 = 0.5 * (s3 + n2);
      } else
        n2 = s3, s3 = 0.5 * (s3 + o2);
    }
    return this._version = S$2(this._version), this._viewportQueries.updateScreenSpaceErrorBias(i2), Math.min(t2, s3);
  }
  _updateFeatureEstimate(e2, t2) {
    this._version = S$2(this._version), this._viewportQueries.updateScreenSpaceErrorBias(e2), this.traverseVisible((e3, i2) => this._updateNodeFeatureEstimate(null != i2 ? i2.node : void 0, t2));
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
    return this._prefetchNodes.sort((e2, t2) => x$1.get(e2) - x$1.get(t2)), this._load(this._prefetchNodes);
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
    let s3 = i2?.traversalState;
    if (s3 && M$1(s3.version, this._version))
      return s3;
    const n2 = this._viewportQueries.getLodLevel(e2), o2 = this._viewportQueries.hasLOD(e2);
    let r2 = true;
    if (o2) {
      const e3 = this.getParentIndex(t2);
      if (null != e3) {
        const t3 = this._getNodeInternal(e3), i3 = t3?.traversalState;
        r2 = !!i3 && n2 > i3.lodLevel;
      } else
        r2 = n2 > 0;
    } else
      r2 = 0 === e2.childCount;
    return s3 ? (s3.lodLevel = n2, s3.isChosen = r2, s3.version = R$2(true, this._version), s3) : (s3 = new d$3(o2, r2, n2, R$2(true, this._version)), i2.traversalState = s3, s3);
  }
  async _loadNode(e2) {
    this._loadingNodes.add(e2);
    const i2 = this._getNodeInternal(e2).ref;
    if (null == i2)
      return void this._failedNodes.add(e2);
    const s3 = i2.id, n2 = this._urlPrefix + s3, o2 = () => {
      this._loadingNodes.delete(e2), 0 === this._missingPagesAndNodes.length && 0 === this._loadingNodes.size && this.requestUpdate();
    };
    let r2 = null;
    try {
      r2 = e2 >= 0 ? await this._streamDataController.request(n2, "json") : await this._clientNodeLoader.loadNodeJSON(s3);
    } catch (d2) {
      return o2(), void (b$2(d2) || (this._logger.error("#loadNode()", this._layer, "Error loading node: " + n2), this._failedNodes.add(e2)));
    }
    o2();
    const a3 = this._validateNode(s3, r2);
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
    const s3 = t2.attributeData, n2 = this._layer.attributeStorageInfo;
    null == s3 || Array.isArray(s3) && !s3.some((e3, t3) => e3.href !== `./attributes/${n2?.[t3]?.key ?? `f_${t3}`}/0`) || this._logger.warn("#validateNode()", this._layer, `Invalid attribute data on node "${e2}"`), t2.featureData && t2.featureData.length > 1 && this._logger.warn("#validateNode()", this._layer, `Node ${e2} has ${t2.featureData.length} bundles. Only the first bundle will be loaded.`);
    const o2 = t2.hasOwnProperty("obb") && !this.ignoreServiceObb ? t2.obb : null, r2 = t2.featureData && 1 === t2.featureData.length && t2.featureData[0].featureRange ? t2.featureData[0].featureRange[1] - t2.featureData[0].featureRange[0] + 1 : void 0, a3 = (t3) => {
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
      const s4 = t3.hasOwnProperty("obb") && !this.ignoreServiceObb ? t3.obb : null, n3 = new i$3(`${t3.id}`, t3.mbs);
      return n3.serviceObb = s4, n3.visibilityObb = this._computeVisibilityObb(n3), n3;
    }, l2 = Array.isArray(t2.children) ? t2.children.map(a3).filter((e3) => null != e3) : null, d2 = t2.featureData?.length ?? false, h2 = true === t2.isEmpty;
    return { id: e2, mbs: t2.mbs, obb: o2, children: l2, resources: { isEmpty: !d2 && h2, hasSharedResource: null != t2.sharedResource, attributes: t2.attributeData ? e2 : void 0, texture: t2.textureData && t2.textureData.length > 0 ? e2 : void 0, geometry: null != t2.geometryData ? e2 : void 0 }, version: "string" == typeof t2.version ? t2.version : null, lodSelection: Array.isArray(t2.lodSelection) ? t2.lodSelection : null, numFeatures: r2 };
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
    let s3 = 0;
    if (t2.node && null != i2) {
      const e3 = this._getNodeInternal(i2).traversalState;
      null != e3 && (s3 = e3.lodLevel);
    }
    let n2 = this.progressiveLoadPenalty;
    for (let r2 = e2; null != r2; r2 = this.getParentIndex(r2))
      if (this._isLoaded(r2)) {
        n2 = 0;
        break;
      }
    const o2 = null != t2.ref ? this._viewportQueries.distToPOI(t2.ref) : null != t2.node ? this._viewportQueries.distToPOI(t2.node) : 0;
    return -o2 - s3 * (o2 + this.progressiveLoadPenalty) + n2;
  }
  traverseVisible(e2) {
    const t2 = this._getNodeInternal(this._rootIndex);
    null != t2 ? this._traverseVisible(this._rootIndex, null, t2, e2) : e2(this._rootIndex, null, null);
  }
  _traverseVisible(e2, t2, i2, s3) {
    if (i2.node && 0 === i2.childCount)
      return void (this.isGeometryVisible(e2) && s3(e2, i2, t2));
    if (!this.isNodeVisible(e2))
      return;
    if (s3(e2, i2, t2), null == i2.node)
      return;
    const n2 = this.nodeTraversalState(i2.node);
    if (n2?.nodeHasLOD && n2.lodLevel === this._maxLodLevel)
      return;
    const o2 = this._getPage(e2);
    for (let r2 = 0; r2 < i2.childCount; r2++) {
      const t3 = o2.children[i2.childOffset + r2], n3 = this._getNodeInternal(t3);
      n3 ? this._traverseVisible(t3, e2, n3, s3) : s3(t3, null, e2);
    }
  }
  traverse(e2, t2) {
    t2(e2) && this.traverseChildren(e2, t2);
  }
  traverseChildren(e2, t2) {
    const i2 = e2.index, s3 = this._getNodeInternal(i2);
    null != s3 && this._traverseChildren(i2, s3, t2);
  }
  _traverseChildren(e2, t2, i2) {
    const s3 = this._getPage(e2);
    if (null == s3)
      return;
    const n2 = t2.childOffset + t2.childCount;
    for (let o2 = t2.childOffset; o2 < n2; ++o2) {
      const e3 = s3.children[o2], t3 = this._getNodeInternal(e3);
      null != t3?.node && i2(t3.node) && this._traverseChildren(e3, t3, i2);
    }
  }
  updateChildrenLoaded(e2, t2) {
    let i2 = this.getNode(e2);
    for (; null != i2; ) {
      const e3 = i2.childrenLoaded, s3 = e3 + t2;
      i2.childrenLoaded = s3;
      const n2 = 0 === e3 ? 1 : 0 === s3 ? -1 : 0, o2 = i2.index;
      if (0 !== n2) {
        this._getPage(o2).numNodesWithLoadedChildren += n2;
      }
      i2 = this.getParent(o2);
    }
  }
  checkChildrenLoadedInvariant() {
    if (null == this.rootNode)
      return true;
    const e2 = [], t2 = (i2) => {
      let s3 = this._isLoaded(i2.index) || this._isReloading(i2.index) ? 1 : 0;
      return this.traverseChildren(i2, (e3) => (s3 += t2(e3), false)), i2.childrenLoaded !== s3 && e2.push(i2.index), s3;
    };
    return t2(this.rootNode), e2.length && this._logger.error("childrenLoaded invariant broken at following nodes: " + e2.join(",")), e2.length > 0;
  }
  updateStats(e2) {
    if (this._updates.add.length > 0 && (e2.nodes += " + " + this._updates.add.length), e2.index = this._nodePages.size * (this._pageSize || 1) + (this._clientNodePage?.nodes.length ?? 0), e2.prio = this._maxProcessingPrio, (this._indexMissing || this._prefetchNodes.length > 0) && (e2.index += " + " + this._indexMissing || this._prefetchNodes.length), this._featureEstimate.estimate) {
      const t2 = this._featureEstimate.estimate - e2.features;
      t2 > 0 ? e2.features += " + " + t2 : t2 < 0 && (e2.features += " - " + -t2);
    }
  }
  updateElevationInfo(e2, t2) {
    this.needNodeElevationRange = t2 && !!e2 && ("relative-to-ground" === e2.mode || "on-the-ground" === e2.mode), this._viewportQueries.updateElevationInfo(e2), this.invalidateAllElevationRanges();
  }
  invalidateAllElevationRanges() {
    this._forAllNodes((e2) => {
      C$1(e2), null != e2.node && e2.node.invalidateElevationRange(), null != e2.ref && e2.ref.invalidateElevationRange();
    });
  }
  _forAllNodes(e2) {
    if (null != this._clientNodePage) {
      const t2 = this._clientNodePage;
      for (let i2 = 0; i2 < t2.nodes.length; i2++)
        e2(t2.nodes[i2], -(i2 + 1));
    }
    for (const [t2, i2] of this._nodePages) {
      const s3 = t2 * this._pageSize;
      for (let t3 = 0; t3 < i2.nodes.length; t3++)
        e2(i2.nodes[t3], s3 + t3);
    }
  }
  clearCaches() {
    if (this._useNodePages) {
      const e2 = this._nodePages, t2 = /* @__PURE__ */ new Set();
      this.traverseVisible((e3) => t2.add(O(e3, this._pageSize)));
      for (const [i2, s3] of e2)
        if (0 !== s3.numNodesWithLoadedChildren || t2.has(i2))
          for (const e3 of s3.nodes)
            e3.traversalState = null;
        else
          this._deleteNodePage(i2);
    }
  }
  _deleteNodePage(e2) {
    this._nodePages.delete(e2);
  }
  get test() {
    return { addNode: (e2, t2) => this._addNode(e2, t2), getNodeInternal: (e2) => this._getNodeInternal(e2), getPageIndex: (e2) => O(e2, this._pageSize), getIndexWithinPage: (e2) => A(e2, this._pageSize), getNodePage: (e2) => e2 < 0 ? this._clientNodePage : this._nodePages.get(e2), getChildIndices: (e2) => {
      const t2 = this._getNodeInternal(e2), i2 = this._getPage(e2);
      if (null == t2 || null == i2)
        return [];
      const s3 = [];
      for (let n2 = t2.childOffset; n2 < t2.childOffset + t2.childCount; ++n2)
        s3.push(i2.children[n2]);
      return s3;
    }, rootIndex: this._rootIndex, clientNodePage: this._clientNodePage, nodePages: this._nodePages };
  }
};
const x$1 = /* @__PURE__ */ new Map();
let I$1 = class I {
  constructor(t2) {
    this.missing = t2, this.update = new l$2({ deallocator: null }), this.add = new l$2({ deallocator: null }), this.remove = new l$2({ deallocator: null }), this.cancel = [];
  }
  reset(e2) {
    this.add.clear(), this.update.clear(), this.cancel = e2;
  }
};
function C$1(e2) {
  null != e2.node && (Pe(e2.node.renderMbs), Be(e2.node.serviceObbInRenderSR)), null != e2.ref && (Pe(e2.ref.renderMbs), Be(e2.ref.serviceObbInRenderSR));
}
function w$1(e2) {
  return qe(e2, -2);
}
function S$2(e2) {
  return qe(e2, 2);
}
function R$2(e2, t2) {
  return t2 + (e2 ? 1 : 0);
}
function M$1(e2, t2) {
  return (-2 & e2) === t2;
}
function E$2(e2) {
  return 1 == (1 & e2);
}
function O(e2, t2) {
  return e2 < 0 ? -1 : t2 > 0 ? e2 / t2 | 0 : 0;
}
function A(e2, t2) {
  return e2 < 0 ? -e2 - 1 : 0 === t2 ? e2 : e2 % t2;
}
function V$1(e2, t2, i2) {
  return -1 === t2 ? -(e2 + 1) : 0 === i2 ? e2 : t2 * i2 + e2;
}
const L = [["maxScreenThreshold", a$3.MaxScreenThreshold], ["screenSpaceRelative", a$3.ScreenSpaceRelative], ["removedFeatureDiameter", a$3.RemovedFeatureDiameter], ["distanceRangeFromDefaultCamera", a$3.DistanceRangeFromDefaultCamera]];
function k$1(e2) {
  if (e2) {
    for (let t2 = 0; t2 < e2.length; t2++)
      for (const i2 of L)
        if (i2[0] === e2[t2].metricType)
          return { lodMetric: i2[1], maxError: e2[t2].maxError };
  }
  return { lodMetric: a$3.None, maxError: 0 };
}
let F$1 = class F {
  constructor() {
    this.known = 0, this.knownNodes = 0, this.missing = 0, this.missingNodes = 0, this.unremoved = 0;
  }
};
function z$1(e2) {
  return Math.sqrt(e2 * (4 / Math.PI));
}
const D$2 = E$4(), T$2 = E$4(), Q$1 = E$4(), U = E$4();
var a2;
!function(a3) {
  a3[a3.FadeIn = 0] = "FadeIn", a3[a3.FadeOut = 1] = "FadeOut";
}(a2 || (a2 = {}));
let s$1 = class s {
  constructor(e2) {
    this._layerView = e2, this._lodGlobalDirty = false;
  }
  startNodeLoading(e2, i2, o2, s3) {
    this._maxLodLevel = s3.maxLodLevel, this._index = o2, this._isNodeInScaleBounds = e2, this._removeNodes = i2;
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
    const i2 = this._layerView.view.resourceController.memoryController.usedMemory, o2 = Math.max(0, Math.floor(10 * (i2 - 1)));
    d$1.clear(), this._lodGlobalHandling(this._index.rootNode, o2, false, !!this._layerView.nodeCrossfadingEnabled);
    const s3 = d$1.length;
    this._removeNodes(d$1, e2);
    const t2 = d$1.length < s3;
    return 0 !== d$1.length && (this._lodGlobalDirty = true), d$1.clear(), t2;
  }
  _lodGlobalHandling(e2, s3, t2, l2) {
    if (null == e2)
      return false;
    const r2 = e2.index, n2 = this._index, a$12 = this._layerView, h2 = n2.nodeTraversalState(e2), u2 = this._isChosenMaxLOD(h2), _2 = e2.resources.isEmpty;
    if (u2 && _2)
      return e2.childrenLoaded > 0 && this._removeChildrenRecursive(e2), true;
    const c3 = a$12.isNodeLoaded(r2);
    if (l2 && c3 && u2) {
      const i2 = !t2 && this.hasNoVisibleChildren(e2);
      a$12.fadeNode(r2, a2.FadeIn, !i2);
    }
    const x2 = c3 && (!a$12.isNodeFullyFadedIn || a$12.isNodeFullyFadedIn(r2));
    if (c3 && (a$12.updateNodeState(r2, u2 ? s$7.Leaf : s$7.Hole), u2))
      return x2 && this._removeChildrenRecursive(e2), x2;
    const L2 = e2.childCount > 0;
    let y3 = L2;
    if (L2)
      for (let i2 = 0; i2 < e2.childCount; i2++) {
        const e3 = n2.getChildIndex(r2, i2), o2 = n2.getNode(e3);
        if (null != o2) {
          !(!n2.isGeometryVisible(e3) || this._lodGlobalHandling(o2, s3, t2 || x2, l2)) && this._isNodeInScaleBounds(o2) && (y3 = false);
        } else
          n2.isNodeVisible(e3) && (y3 = false);
      }
    const N2 = c3 && !u2 && (y3 || d$1.length < s3);
    N2 && d$1.push(r2), !l2 || N2 || !c3 || t2 || y3 || a$12.fadeNode(r2, a2.FadeIn, false);
    const m3 = e2.resources.isEmpty;
    return y3 || x2 && !N2 || m3;
  }
  _removeChildrenRecursive(e2) {
    this._index.traverseChildren(e2, (e3) => ((this._layerView.isNodeLoaded(e3.index) || this._layerView.isNodeReloading(e3.index)) && d$1.push(e3.index), e3.childrenLoaded > 0));
  }
  hasNoVisibleChildren(e2) {
    let i2 = true;
    return this._index.traverseChildren(e2, (e3) => !(!i2 || !this._index.isNodeVisible(e3.index)) && (this._layerView.isNodeLoaded(e3.index) ? (i2 = false, false) : e3.childrenLoaded > 0)), i2;
  }
  _childrenRequireLoading(e2) {
    let i2 = false, o2 = true;
    return this._index.traverseChildren(e2, (e3) => {
      if (!o2 || !this._index.isNodeVisible(e3.index))
        return false;
      const s3 = this._index.nodeTraversalState(e3);
      return this._isChosenMaxLOD(s3) && this._index.isGeometryVisible(e3.index) && (i2 = true), this._layerView.isNodeLoaded(e3.index) ? (o2 = false, false) : e3.childrenLoaded > 0;
    }), o2 && i2;
  }
  _isChosenMaxLOD(e2) {
    return e2.isChosen && (!e2.nodeHasLOD || e2.lodLevel === this._maxLodLevel);
  }
};
const d$1 = new l$2({ deallocator: null });
class s2 {
  constructor(s3, r2) {
    this._textureRep = s3, this.loadPromise = null, this._disposed = false;
    const i2 = this._textureRep.acquire(r2);
    E$5(i2) ? (i2.then((t2) => {
      this._disposed ? t$2(t2) : this._textureRef = t2;
    }), this.loadPromise = i2) : this._textureRef = i2;
  }
  dispose() {
    this._textureRef = t$2(this._textureRef), this._disposed = true;
  }
  get glTexture() {
    return null != this._textureRef ? this._textureRef.glTexture : null;
  }
}
function g$1(e2, o2) {
  const r2 = /* @__PURE__ */ new Map(), s3 = (e3, o3) => {
    if (null == e3)
      return -1;
    const a3 = r2.get(e3.id);
    if (a3)
      return a3.usage |= o3, a3.id;
    const s4 = r2.size;
    return r2.set(e3.id, { id: s4, usage: o3 }), s4;
  }, t2 = o2.pbrMetallicRoughness, l2 = t2?.baseColorFactor, i2 = o2.emissiveFactor, u2 = u$2({ normalTexture: o2.normalTexture, emissiveTexture: o2.emissiveTexture, emissiveFactor: o2.emissiveFactor, occlusionTexture: o2.occlusionTexture, metallicRoughnessTexture: t2?.metallicRoughnessTexture, metallicFactor: t2?.metallicFactor, roughnessFactor: t2?.roughnessFactor }), p2 = u2 ? r$1[0] : t2?.metallicFactor ?? n$4[0], g2 = u2 ? r$1[1] : t2?.roughnessFactor ?? n$4[1], T2 = "mask" === o2.alphaMode ? s$2.Color | s$2.AlphaMask : s$2.Color, x2 = { baseColorFactor: l2 ? [l2[0], l2[1], l2[2], l2[3]] : [1, 1, 1, 1], baseColorTextureId: s3(t2?.baseColorTexture, T2), metallicRoughnessTextureId: s3(t2?.metallicRoughnessTexture, s$2.MetallicRoughness), metallicFactor: p2, roughnessFactor: g2 }, b3 = { alphaMode: o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, cullFace: "none" === o2.cullFace ? e$2.None : "back" === o2.cullFace ? e$2.Back : "front" === o2.cullFace ? e$2.Front : e$2.None, normalTextureId: s3(o2.normalTexture, s$2.Normal), emissiveTextureId: s3(o2.emissiveTexture, s$2.Emissive), occlusionTextureId: s3(o2.occlusionTexture, s$2.Occlusion), emissiveFactor: i2 ? [i2[0], i2[1], i2[2]] : [0, 0, 0], metallicRoughness: x2, wrapTextures: false, hasParametersFromSource: u2 }, F3 = [];
  return r2.forEach(({ usage: o3 }, a3) => {
    const r3 = null != e2 && e2[a3] && e2[a3].formats, s4 = r3 ? h$1(r3.map(({ name: e3, format: o4 }) => ({ name: e3, encoding: f[o4] }))) : [];
    F3.push({ id: a3, usage: o3, encodings: s4 });
  }), { material: b3, textures: F3 };
}
function h$1(e2) {
  return e2.sort((e3, o2) => e3.encoding - o2.encoding);
}
const f = { ktx2: e$1.KTX2, basis: e$1.Basis, dds: e$1.DDS_S3TC, png: e$1.PNG, jpg: e$1.JPG, "ktx-etc2": e$1.KTX_ETC2 }, T$1 = { [u$4.KTX2_ENCODING]: e$1.Basis, [u$4.BASIS_ENCODING]: e$1.Basis, [u$4.DDS_ENCODING]: e$1.DDS_S3TC, "image/png": e$1.PNG, "image/jpg": e$1.JPG, "image/jpeg": e$1.JPG, "image/ktx": e$1.KTX_ETC2 };
function x(o2) {
  const r2 = o2?.materialDefinitions ? Object.keys(o2.materialDefinitions)[0] : null, s3 = o2?.textureDefinitions ? Object.keys(o2.textureDefinitions)[0] : null, t2 = r2 ? o2.materialDefinitions?.[r2] : null, l2 = s3 ? o2.textureDefinitions?.[s3] : null, i2 = b2();
  if (null != t2) {
    const o3 = t2.params;
    o3.diffuse && (i2.metallicRoughness.baseColorFactor = [o3.diffuse[0], o3.diffuse[1], o3.diffuse[2], 1]), null != o3.doubleSided && (i2.doubleSided = o3.doubleSided, i2.cullFace = o3.doubleSided ? e$2.None : e$2.Back), "none" !== o3.cullFace && "front" !== o3.cullFace && "back" !== o3.cullFace || (i2.cullFace = "none" === o3.cullFace ? e$2.None : "back" === o3.cullFace ? e$2.Back : e$2.Front), o3.transparency && (i2.metallicRoughness.baseColorFactor[3] = i$4(1 - o3.transparency, 0, 1)), (o3.useVertexColorAlpha || i2.metallicRoughness.baseColorFactor[3] < 1) && (i2.alphaMode = "blend");
  }
  const u2 = [];
  if (null != l2) {
    const e2 = 0;
    !l2.wrap || "repeat" !== l2.wrap[0] && "repeat" !== l2.wrap[1] || (i2.wrapTextures = true);
    let o3 = s$2.Color;
    "rgba" === l2.channels && (i2.alphaMode = "blend", o3 |= s$2.AlphaMask);
    const r3 = l2.images.length - 1, s4 = l2.images[r3], t3 = (e3) => e3?.split("/").pop(), n2 = Array.isArray(l2.encoding) ? h$1(l2.encoding.map((e3, o4) => ({ name: t3(s4.href[o4]), encoding: T$1[e3] || 0 }))) : [{ name: t3(s4.href), encoding: T$1[l2.encoding] || 0 }];
    u2.push({ id: e2, usage: o3, encodings: n2 }), i2.metallicRoughness.baseColorTextureId = e2;
  }
  return { material: i2, textures: u2 };
}
const b2 = () => ({ alphaMode: "opaque", alphaCutoff: o$1, doubleSided: true, cullFace: e$2.None, normalTextureId: -1, emissiveTextureId: -1, occlusionTextureId: -1, emissiveFactor: [0, 0, 0], metallicRoughness: { baseColorFactor: [0.8, 0.8, 0.8, 1], baseColorTextureId: -1, metallicRoughnessTextureId: -1, metallicFactor: 0, roughnessFactor: 0.6 }, wrapTextures: false, hasParametersFromSource: true });
function F2(e2, o2, r2, s3) {
  if (null == e2?.data)
    return null;
  const t2 = e2.data, l2 = s3.renderingContext.parameters.maxMaxAnisotropy, n2 = l2 > 1, i2 = r2 || !o2.wrapTextures ? C : P2, c3 = w(e2.encoding), m3 = e2.usage & s$2.Color ? "opaque" === o2.alphaMode ? 3 : 4 : 3;
  return new N(t2, { mipmap: n2, maxAnisotropy: l2, encoding: c3, wrap: i2, components: m3, noUnpackFlip: true });
}
const C = { s: D$3.CLAMP_TO_EDGE, t: D$3.CLAMP_TO_EDGE }, P2 = { s: D$3.REPEAT, t: D$3.REPEAT };
function S$1(o2, l2, n2, u2, c3, p2) {
  const g2 = p2.rendererTextureUsage, h2 = (e2) => R$1(u2, n2, e2 & g2), f2 = l2.metallicRoughness.baseColorFactor, T2 = i$4(l2.metallicRoughness.baseColorFactor[3], 0, 1);
  o2.baseColor = [f2[0], f2[1], f2[2], T2], o2.hasParametersFromSource = !!l2.hasParametersFromSource, o2.usePBR = p2.usePBR, o2.mrrFactors = [l2.metallicRoughness.metallicFactor, l2.metallicRoughness.roughnessFactor, l2.hasParametersFromSource ? r$1[2] : n$4[2]], o2.emissiveFactor = l2.emissiveFactor, o2.isIntegratedMesh = p2.isIntegratedMesh, o2.textureAlphaCutoff = "mask" === l2.alphaMode ? l2.alphaCutoff : o$1, o2.alphaDiscardMode = "opaque" === l2.alphaMode ? s$8.Opaque : "mask" === l2.alphaMode ? s$8.Mask : s$8.MaskBlend;
  const x2 = [], b3 = h2(s$2.Color | s$2.AlphaMask);
  null != b3 && (o2.baseColorTexture = new s2(c3, b3), x2.push(o2.baseColorTexture.loadPromise));
  const F3 = h2(s$2.MetallicRoughness);
  null != F3 && (o2.metallicRoughnessTexture = new s2(c3, F3), x2.push(o2.metallicRoughnessTexture.loadPromise));
  const C2 = h2(s$2.Emissive);
  null != C2 && (o2.emissionTexture = new s2(c3, C2), x2.push(o2.emissionTexture.loadPromise));
  const P3 = h2(s$2.Occlusion);
  null != P3 && (o2.occlusionTexture = new s2(c3, P3), x2.push(o2.occlusionTexture.loadPromise));
  const S2 = h2(s$2.Normal);
  return null != S2 && (o2.normalTexture = new s2(c3, S2), x2.push(o2.normalTexture.loadPromise)), o2.commonMaterialParameters.hasSlicePlane = p2.slicePlaneEnabled, o2.commonMaterialParameters.doubleSided = l2.doubleSided, o2.commonMaterialParameters.cullFace = l2.cullFace, o2.ellipsoidMode = a$4(p2.viewSpatialReference), Promise.all(x2);
}
function M(e2) {
  const a3 = !!e2.compressedTextureS3TC, r2 = !!e2.compressedTextureETC, s3 = has("disable-feature:i3s-basis") ? 0 : e$1.Basis | e$1.KTX2, t2 = e$1.JPG | e$1.PNG, l2 = s3 | e$1.DDS_S3TC;
  return t2 | (a3 ? l2 : 0) | (r2 ? s3 : 0);
}
function D$1(e2, o2) {
  if (null != o2)
    return e2.find((e3) => 0 != (e3.encoding & o2));
}
function R$1(e2, o2, r2) {
  if (null == e2 || r2 === s$2.None)
    return null;
  for (let a3 = 0; a3 < e2.length; a3++) {
    const s3 = e2[a3];
    if (null != s3 && 0 != (s3.usage & r2)) {
      const e3 = o2[a3];
      return null != e3 ? e3.id : null;
    }
  }
  return null;
}
function w(e2) {
  switch (e2) {
    case e$1.KTX2:
      return u$4.KTX2_ENCODING;
    case e$1.Basis:
      return u$4.BASIS_ENCODING;
    case e$1.DDS_S3TC:
      return u$4.DDS_ENCODING;
    case e$1.PNG:
      return "image/png";
    case e$1.JPG:
      return "image/jpeg";
    case e$1.KTX_ETC2:
      return "image/ktx";
    default:
      return "";
  }
}
class d {
  constructor(e2, t2, r2, i2, o2, n2) {
    if (this._streamDataController = t2, this._logger = r2, this._defaultGeometrySchema = i2, this._requiredAttributes = o2, this._options = n2, this._logLayer = e2, this._layerUrl = e2.parsedUrl.path, this._geometryDefinitions = e2.geometryDefinitions, e2.materialDefinitions) {
      const t3 = e2.textureSetDefinitions;
      this._materialAndTextures = e2.materialDefinitions.map((e3) => g$1(t3, e3));
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
    for (let s3 = 0; s3 < t2.length; ++s3) {
      const r3 = o2[s3], a3 = t2[s3];
      if ("fulfilled" === r3.status) {
        const e3 = r3.value;
        n2[a3.name] = e3;
      } else {
        const t3 = r3.reason;
        a$5(t3), this._logger.error("#loadAttributes", this._logLayer, `Failed to load attributeData for '${a3.name}' on node '${e2.id}'`, t3);
      }
    }
    return n2;
  }
  async loadNodeData(r2, i2) {
    const o2 = null != this._requiredAttributes && r2.resources.attributes ? _$2(this.loadAttributes(r2, this._requiredAttributes, i2)) : null, { bufferDefinition: n2, bufferIndex: s3 } = _(this._geometryDefinitions, r2), u2 = !!r2.resources.geometry, f2 = u2 ? _$2(this._loadGeometry(r2.resources.geometry, s3, i2)) : null, d2 = r2.resources.hasSharedResource ? await this._loadShared(r2, i2) : null, b3 = r2.resources.materialDefinition, y3 = this._materialAndTextures && null != b3 && b3 >= 0 ? this._materialAndTextures[b3] : null != d2 ? x(d2) : null, D2 = y3?.material, p2 = y3?.textures ?? [], x$12 = `${r2.id}`, A2 = !u2 && this._options.loadFeatureData, w2 = A2 ? await this._loadFeatureData(x$12, i2) : null, T2 = A2 ? h(w2) : c2(D2), $2 = null == T2 ? m2(w2) : null, j2 = p2.length > 0 ? _$2(this.loadTextures(r2, p2, i2)) : null;
    let I3 = null, S2 = null;
    if (f2) {
      I3 = y$4(await f2);
      const e2 = g(this._defaultGeometrySchema, d2);
      S2 = p$2(n2, e2);
    }
    const U2 = j2 ? y$4(await j2) : null, q = o2 ? y$4(await o2) : {}, B2 = q ? { attributeData: q, loadedAttributes: this._requiredAttributes } : null;
    if (null != T2)
      return { geometryData: T2, attributeDataInfo: B2, geometryBuffer: I3, geometryDescriptor: S2, requiredTextures: p2, textureData: U2 };
    if (null != $2)
      return { pointData: $2, attributeDataInfo: B2, geometryBuffer: I3, geometryDescriptor: S2, requiredTextures: p2, textureData: U2 };
    throw new Error();
  }
  static _addAbsoluteHrefTexture(e2, t2) {
    const r2 = e2.textureDefinitions;
    if (null != r2)
      for (const i2 of Object.keys(r2))
        for (const e3 of r2[i2].images)
          Array.isArray(e3.href) ? e3.hrefConcat = e3.href.map((e4) => _$3(e4, t2)) : e3.hrefConcat = _$3(e3.href, t2);
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
  _loadShared(e2, t2) {
    const r2 = `${this._layerUrl}/nodes/${e2.resources.geometry}/shared`;
    return this._load(r2, "json", t2).then((e3) => (d._fixTextureEncodings(e3), d._addAbsoluteHrefTexture(e3, r2), e3));
  }
  _loadTexture(e2, t2, r2, i2, o2, s3) {
    let a3 = false;
    return o2 === e$1.DDS_S3TC || o2 === e$1.KTX2 || o2 === e$1.Basis ? this._load(e2, "binary", s3).then((e3) => ({ id: t2, usage: r2, data: e3, encoding: o2, downsampled: a3 })) : this._load(e2, "image", s3).then((e3) => {
      let n2 = e3;
      const s4 = 4096, u2 = 2;
      if (i2 && e3.width * e3.height >= s4) {
        const t3 = Math.ceil(e3.width / u2), r3 = Math.ceil(e3.height / u2), i3 = document.createElement("canvas");
        i3.width = t3, i3.height = r3;
        i3.getContext("2d").drawImage(e3, 0, 0, t3, r3), n2 = i3, a3 = true;
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
      const s3 = e2.resources.texture || e2.id, a3 = `${this._layerUrl}/nodes/${s3}/textures/${n2.name}`;
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
function c2(e2) {
  return { featureIds: [], geometries: [{ type: "ArrayBufferView", params: { material: e2 } }], featureDataPosition: [0, 0, 0] };
}
function h(e2) {
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
function m2(e2) {
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
  return !t2.materialDefinitions[i2].params.vertexRegions && e2.vertexAttributes.region && delete (e2 = a$6(e2)).vertexAttributes.region, e2;
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
  constructor(e2, t2) {
    this._requester = e2, this._apiKey = t2, this._activeRequests = /* @__PURE__ */ new Set();
  }
  get busy() {
    return this._requester.busy;
  }
  request(r2, s3, o2) {
    const l2 = new AbortController(), a3 = w$2(o2, () => l2.abort()), n2 = { signal: l2.signal, query: { token: this._apiKey } }, i2 = this._requester.request(r2, s3, n2), u2 = { response: i2, abortController: l2, abortHandle: a3 };
    return this._activeRequests.add(u2), L$1(i2, () => {
      u2.abortController = null, u2.abortHandle?.remove(), u2.abortHandle = null, this._activeRequests.delete(u2);
    }), i2;
  }
  cancelAll() {
    this._activeRequests.forEach((e2) => {
      e2.abortController?.abort(), e2.abortController = null, e2.abortHandle?.remove();
    }), this._activeRequests.clear();
  }
}
const y2 = 1e5;
class I2 {
  constructor(e2, t2, i2, s3, r2, n2, o2, a3, c3 = {}) {
    this._indexSR = e2, this._renderCoordsHelper = t2, this._clippingArea = r2, this._elevationProvider = n2, this._viewingMode = o2, this._options = c3, this._frustum = I$4(), this._useFrustumCulling = false, this._poi = n$1(), this._elevationContext = null, this.minDistance = 1 / 0, this.maxDistance = 0, this.maxLodLevel = 2, this._tmpObb = H$1(), this._tmp1 = n$1(), this._tmp2 = n$1(), this._tmp3 = n$1(), this._tmp0 = n$1(), this._screenspaceErrorBias = c3.screenspaceErrorBias || 1, this._progressiveLoadFactor = c3.progressiveLoadFactor || 1, this.updateCamera(i2, s3), this.engineSR = this._renderCoordsHelper.spatialReference, this.updateElevationInfo(a3), this._tmpPoint = e$7(0, 0, 0, e2), this._isECEFOBBInLocalMode = this._indexSR.isWGS84 && (this.engineSR.isWebMercator || O$1(this.engineSR)), this._indexSREllipsoidRadius = R$3(this._indexSR).radius;
  }
  updateElevationInfo(e2) {
    null != e2 ? (this._elevationContext = o$2.fromElevationInfo(e2), this._elevationContext.updateFeatureExpressionInfoContext(u$5(d$4(e2, false)))) : this._elevationContext = null;
  }
  updateCamera(e2, t2) {
    this._useFrustumCulling = t2, t2 && L$2(e2.viewMatrix, e2.projectionMatrix, this._frustum), this._screenSizeFactor = 1 / (e2.perScreenPixelRatio / 2), this._camPos = e2.eye, this.minDistance = 1 / 0, this.maxDistance = 0;
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
  expandElevationRange(e$12, t2, i2) {
    if (null == this._elevationContext)
      return;
    const s3 = e$12.mbs;
    if (!s3)
      return;
    if (this._elevationProvider.getSphereElevationBounds) {
      const e$13 = this._elevationProvider.getSphereElevationBounds(s3, this._indexSR);
      return void (e$13 && e(i2, e$13.min, e$13.max));
    }
    const r2 = s3[0], n2 = s3[1], o2 = s3[2], a3 = "relative-to-scene" === this._elevationContext.mode ? "scene" : "ground", h2 = this._elevationProvider.getElevation(r2, n2, o2, this._indexSR, a3);
    h2 && e(i2, h2, h2);
    const c3 = t2 ? null : this._elevationProvider.getRootElevationBounds?.();
    c3 && e(i2, c3.min, c3.max);
  }
  getRenderMbs(e2) {
    const t2 = e2.renderMbs;
    if (Ke(t2))
      return t2;
    e2.mbs && a$7(t2, e2.mbs);
    const i2 = e2.elevationRangeMin;
    if (this._elevationContext && Number.isFinite(i2)) {
      let s3 = 0, r2 = 0;
      const n2 = e2.elevationRangeMax;
      switch (this._elevationContext.mode) {
        case "relative-to-ground":
          s3 = this._elevationContext.geometryZWithOffset(t2[2], this._renderCoordsHelper) + i2 - t2[2], r2 = n2 - i2;
          break;
        case "on-the-ground":
          s3 = i2 - t2[2], r2 = n2 - i2;
      }
      t2[2] += s3 + 0.5 * r2, t2[3] += 0.5 * r2;
    } else
      this._elevationContext && t2[3] < y2 && (this._tmpPoint.x = t2[0], this._tmpPoint.y = t2[1], this._tmpPoint.z = t2[2], t2[2] = f$4(this._tmpPoint, this._elevationProvider, this._elevationContext, this._renderCoordsHelper));
    return a$2(t2, this._indexSR, t2, this.engineSR), t2;
  }
  _getVisibilityObb(e2) {
    if (null != e2.visibilityObb)
      return e2.visibilityObb;
    const t2 = e2.serviceObb, i2 = 0.01 * this._indexSREllipsoidRadius;
    return null == t2 || !e2.mbs || !Ge(t2) || this._isECEFOBBInLocalMode && t2.halfSize.some((e3) => e3 > i2) ? null : (e2.serviceObbInRenderSR = this._computeRenderObb(t2, e2.serviceObbInRenderSR, e2.mbs[3], e2.elevationRangeMin, e2.elevationRangeMax), e2.serviceObbInRenderSR);
  }
  _computeRenderObb(e2, t2, i2, s3, r2) {
    if (null == t2)
      t2 = H$1();
    else if (Ge(t2))
      return t2;
    let n2 = 0, o2 = 0;
    if (this._elevationContext && !Number.isNaN(s3) && Number.isFinite(s3))
      switch (this._elevationContext.mode) {
        case "relative-to-ground":
          n2 = this._elevationContext.geometryZWithOffset(e2.center[2], this._renderCoordsHelper) + s3 - e2.center[2], o2 = r2 - s3;
          break;
        case "on-the-ground":
          n2 = s3 - e2.center[2], o2 = r2 - s3;
      }
    else
      this._elevationContext && i2 < y2 && (this._tmpPoint.x = e2.center[0], this._tmpPoint.y = e2.center[1], this._tmpPoint.z = e2.center[2], n2 = f$4(this._tmpPoint, this._elevationProvider, this._elevationContext, this._renderCoordsHelper) - e2.center[2]);
    return o2 > 0 ? (ke(e2, this._indexSR, this._tmpObb, this.engineSR, n2), ee$1(this._tmpObb, 0, o2, this._viewingMode, t2)) : ke(e2, this._indexSR, t2, this.engineSR, n2), t2;
  }
  isNodeVisible(e2) {
    const t2 = this.getRenderMbs(e2);
    if (!this._isMBSinClippingArea(t2))
      return false;
    if (!this._useFrustumCulling)
      return true;
    const i2 = this._getVisibilityObb(e2);
    return i2 ? T$4(i2, this._frustum) : P$2(this._frustum, z$3(t2));
  }
  isGeometryVisible(e2) {
    if (!this._useFrustumCulling)
      return true;
    const t2 = e2.geometryObb;
    return null != t2 ? T$4(t2, this._frustum) : this.isNodeVisible(e2);
  }
  _isMBSinClippingArea(e2) {
    return null == this._clippingArea || Y$1(this._clippingArea, e2) !== X$1.OUTSIDE;
  }
  _screenSpaceDiameterMbs(t2, i2) {
    const s3 = this.getRenderMbs(t2), r2 = Math.sqrt(p$3(s3, this._camPos)), n2 = r2 - s3[3];
    return this._updateMinMaxDistance(r2), n2 < 0 ? 0.5 * Number.MAX_VALUE : i2 / n2 * this._screenSizeFactor;
  }
  calcCameraDistance(e2) {
    return this.calcCameraDistanceToCenter(e2) - this.getRenderMbs(e2)[3];
  }
  calcCameraDistanceToCenter(e2) {
    const i2 = this.getRenderMbs(e2), s3 = x$3(i2, this._camPos);
    return this._updateMinMaxDistance(s3), s3;
  }
  calcAngleDependentLoD(e2) {
    const s3 = this.getRenderMbs(e2), r2 = s3[3], n2 = (Math.abs(s3[0] * (s3[0] - this._camPos[0]) + s3[1] * (s3[1] - this._camPos[1]) + s3[2] * (s3[2] - this._camPos[2])) / s$6(s3) + r2) / x$3(s3, this._camPos);
    return Math.min(1, n2);
  }
  hasLOD(e2) {
    return e2.lodMetric !== a$3.None;
  }
  _getDistancePlanarMode(e2, t2) {
    const i2 = e2[0] - t2[0], s3 = e2[1] - t2[1], r2 = e2[2] - t2[2], n2 = i2 * i2 + s3 * s3, o2 = t2[3];
    if (n2 <= o2 * o2)
      return Math.abs(r2);
    const a3 = Math.sqrt(n2) - o2;
    return Math.sqrt(r2 * r2 + a3 * a3);
  }
  _getDistanceGlobeMode(h2, c3) {
    const l2 = s$6(c3), m3 = s$6(h2) - l2;
    g$5(this._tmp0, h2, P$3(h2, c3) / v(h2));
    const p2 = p$3(c3, this._tmp0), _2 = c3[3];
    if (p2 <= _2 * _2)
      return Math.abs(m3);
    {
      const e2 = g$5(this._tmp0, c3, 1 / l2), n2 = l2, p3 = _2 * _2 / 2 / n2, u2 = g$5(this._tmp1, e2, n2 - p3), d2 = h2, g2 = e$8(this._tmp2, d2, u2), v2 = e$8(this._tmp2, g2, g$5(this._tmp3, e2, P$3(e2, g2))), b3 = u$6(this._tmp2, u2, g$5(this._tmp2, v2, _2 / s$6(v2)));
      let x2 = x$3(d2, b3);
      if (m3 >= 2e5) {
        const t2 = e$8(this._tmp1, d2, b3);
        let s3 = P$3(t2, e2) / s$6(t2);
        s3 < 0.08 && (s3 = 1e-4), x2 /= s3;
      }
      return x2;
    }
  }
  _getDistance(e2, t2) {
    return this.engineSR === c$4(this.engineSR) ? this._getDistanceGlobeMode(e2, t2) : this._getDistancePlanarMode(e2, t2);
  }
  _updateMinMaxDistance(e2) {
    e2 > 0 ? (this.minDistance = Math.min(this.minDistance, e2), this.maxDistance = Math.max(this.maxDistance, e2)) : (this.minDistance = 0, this.maxDistance = Math.max(this.maxDistance, -e2));
  }
  getLodLevel(e2) {
    if (e2.lodMetric === a$3.None)
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
      case a$3.ScreenSpaceRelative: {
        const i2 = this.getRenderMbs(e2), s3 = this._getDistance(this._camPos, i2), r2 = 2 * s3 / this._screenSizeFactor, n2 = s3 + i2[3];
        return this._updateMinMaxDistance(n2), e2.maxError * t2 <= r2;
      }
      case a$3.MaxScreenThreshold: {
        let i2 = this._screenSpaceDiameterMbs(e2, e2.mbs[3] * t2);
        return this._options.angleDependentLoD && (i2 *= this.calcAngleDependentLoD(e2)), i2 < e2.maxError;
      }
      case a$3.RemovedFeatureDiameter:
        return this._screenSpaceDiameterMbs(e2, e2.maxError) * t2 < 10;
      case a$3.DistanceRangeFromDefaultCamera:
        return this.calcCameraDistance(e2) > e2.maxError * t2;
    }
    return false;
  }
  distToPOI(e2) {
    const i2 = this.getRenderMbs(e2);
    return x$3(i2, this._poi) - i2[3];
  }
  distCameraToPOI() {
    return x$3(this._camPos, this._poi);
  }
}
const G$1 = "esri.layers.graphics.controllers.I3SOnDemandController", j = s$9.getLogger(G$1), T = 100, Q = 2, E$1 = 1e4, H = 1e-4, R = 1.2, k = 500, B = 1.5;
let z = class extends n$5(g$4) {
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
    return new r(e2, this.layer.apiKey);
  }
  get dataStreamController() {
    const e2 = this.layerView.view.resourceController.createStreamDataRequester(A$1.I3S_DATA);
    return new r(e2, this.layer.apiKey);
  }
  get crsVertex() {
    return fe(this.layer);
  }
  get crsIndex() {
    return ue(this.layer);
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
    super(e2), this.screenSizeFactor = 0, this.featureTarget = 5e4, this.fixedFeatureTarget = false, this.updating = true, this.updatingProgress = 1, this.leavesReached = false, this.scaleVisibilityEnabled = true, this.worker = null, this._featureLOD = 1, this._stableFeatureLOD = false, this._isIdle = false, this._cameraDirty = true, this._invisibleDirty = false, this._idleStateCallbacks = null, this._newLoadingNodes = new l$2({ deallocator: null }), this._loadedNodeScales = /* @__PURE__ */ new Map(), this._modificationsNodeFilteringArray = new l$2(), this._downloadingCount = 0, this._loadingNodes = /* @__PURE__ */ new Map(), this._updatingNodes = /* @__PURE__ */ new Map(), this._progressMaxNumNodes = 1, this._requiredAttributes = new Array(), this._requiredAttributesDirty = true, this._updatesDisabled = false, this.disableIDBCache = false, this._disableMemCache = false, this._restartNodeLoading = false, this._fields = null, this._attributeStorageInfo = null, this._idleQueue = new n$6(), this._elevationUpdateNodes = new l$2({ deallocator: null }), this._errorCount = 0;
  }
  initialize() {
    const { layerView: e2, layer: t2 } = this;
    this._disableMemCache = !e2.loadCachedGPUData || !e2.addCachedGPUData, this._lodHandling = new s$1(e2), this._defaultGeometrySchema = t2.store.defaultGeometrySchema, this.disableIDBCache = has("disable-feature:idb-cache"), "fields" in t2 && (this._fields = t2.fields, this._attributeStorageInfo = t2.attributeStorageInfo), this.addResolvingPromise(Promise.all([t2.indexInfo, t2.when(), e2.when()]).then(([i2]) => {
      if (this.destroyed || !e2 || e2.destroyed || !i2)
        return;
      const { view: s3, clientGeometry: a3 } = e2, { resourceController: r2 } = s3;
      if (this._setClippingArea(s3.clippingArea), this.addHandles([d$5(() => s3?.pointsOfInterest?.focus?.renderLocation, (e3) => this._pointOfInterestChanged(e3), P$4), d$5(() => s3.quality, () => this._setCameraDirty(), C$2), d$5(() => e2.contentVisible, (e3) => {
        const t3 = e3 ? () => this._updateIdleState(true) : () => this._updateViewData(), i3 = e3 ? () => this._updateIdleState(false) : () => {
        };
        e3 && null != this._index && this._index.invalidateAllElevationRanges(), this._idleStateCallbacks ? (e3 || this.cancelNodeLoading(), this.restartNodeLoading(), this._idleStateCallbacks.idleBegin = t3, this._idleStateCallbacks.idleEnd = i3) : this._idleStateCallbacks = r2.scheduler.registerIdleStateCallbacks(t3, i3);
      }, P$4), u(e2.view.resourceController.scheduler, this), d$5(() => e2.uncompressedTextureDownsamplingEnabled, () => this.restartNodeLoading()), d$5(() => [this.featureTarget, this.fixedFeatureTarget], () => {
        this._setCameraDirty(), this._stableFeatureLOD = false;
      }), d$5(() => s3.state?.contentCamera, () => this._setCameraDirty()), d$5(() => t2.elevationInfo, (e3) => this._elevationInfoChanged(e3)), d$5(() => t2.effectiveScaleRange, () => this._scaleBoundsChanged()), d$5(() => e2.lodFactor, () => this._setCameraDirty()), d$5(() => e2.availableFields, () => this._requiredFieldsChange()), d$5(() => e2.holeFilling, (e3) => null != this._index && (this._index.holeFilling = e3))]), this._updateScaleHandles(), this._viewportQueries = new I2(this.crsIndex, s3.renderCoordsHelper, s3.state.contentCamera, !s3.state.fixedContentCamera || this.isGraphics3D, this._clippingArea, this.isMeshPyramid ? s3.basemapTerrain : s3.elevationProvider, o$3(s3.viewingMode), this.layer.elevationInfo, { progressiveLoadFactor: this._getProgressiveLoadFactor(), screenspaceErrorBias: this._lod, angleDependentLoD: this._lod < 0.5 }), this._clientNodeLoader = new m$1(this.layer.uid, { indexSR: this.crsIndex, vertexSR: this.crsVertex, renderSR: s3.renderCoordsHelper.spatialReference, localMode: "local" === s3.viewingMode }, s3.resourceController.memoryController, this.worker), this._index = new P$1(t2, i2, this.indexStreamController, this._clientNodeLoader, this._viewportQueries, j, e2.holeFilling, (t3) => e2.isNodeLoaded(t3), (t3) => e2.isNodeReloading(t3), (e3) => this._shouldLoadNode(e3), (e3) => this._enableFromGPUCache(e3, s$7.Leaf), (e3) => this._needsUpdate(e3), () => !this.indexStreamController.busy, (t3) => e2.computeVisibilityObb ? e2.computeVisibilityObb(t3) : null, e2?.computeNodeFiltering ? (t3) => e2.computeNodeFiltering(t3) : void 0), this._index.updateElevationInfo(this.layer.elevationInfo, this.isMeshPyramid || this.isGraphics3D), this._index.imModificationsChanged(!!e2.hasModifications), this._index.layerFilterChanged(!!e2.hasGeometryFilter), null != a3) {
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
    })), this._tmpPoint = e$7(0, 0, 0, this.crsIndex);
  }
  updateNodeModificationStatus(e2) {
    const t2 = this._index, i2 = this.layerView;
    null != t2 && i2?.updateNodeModificationStatus && (this._modificationsNodeFilteringArray.clear(), e2.forAll((e3) => {
      const i3 = t2.getNode(e3);
      null != i3 && this._modificationsNodeFilteringArray.push(i3);
    }), i2.updateNodeModificationStatus(this._modificationsNodeFilteringArray), this._invisibleDirty = true);
  }
  destroy() {
    this.cancelNodeLoading(), this._idleStateCallbacks && (this._isIdle = false, this._idleStateCallbacks.remove(), this._idleStateCallbacks = null), this._nodeLoader = null, K.prune(), null != W && (W.hide(), W = null);
  }
  _getRequiredAttributes() {
    if (null == this._attributeStorageInfo || !this._fields || !this.layerView.availableFields)
      return [];
    const e2 = this._attributeStorageInfo, t2 = this._fields, i2 = this.layer.objectIdField;
    return this.layerView.availableFields.map((i3) => {
      const s3 = $(e2, i3), a3 = $(t2, i3);
      return s3 >= 0 && a3 >= 0 ? { index: s3, name: t2[a3].name, field: t2[a3], attributeStorageInfo: e2[s3] } : null;
    }).filter((e3) => null != e3 && e3.name !== i2);
  }
  _requiredFieldsChange() {
    const e2 = this._getRequiredAttributes();
    X(this._requiredAttributes, e2) || (this._requiredAttributes = e2, this._requiredAttributesDirty = false, this.restartNodeLoading());
  }
  requestUpdate() {
    this._requiredAttributesDirty = true, this.restartNodeLoading();
  }
  _setClippingArea(e2) {
    const t2 = u$7();
    u$8(e2, t2, this.layerView.view.renderSpatialReference) ? this._clippingArea = t2 : this._clippingArea = null;
  }
  _pointOfInterestChanged(e2) {
    null != this._viewportQueries && (this._viewportQueries.setPointOfInterest(e2), null != this._index && (this._index.progressiveLoadPenalty = J.distancePenalty * this._viewportQueries.distCameraToPOI(), this._index.requestUpdate()));
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
    const i2 = this._clientNodeLoader.createMeshNodeInfo(e2, t2), s3 = this._index.addClientNodeToIndex(i2.id, i2.mbs);
    this._clientNodeLoader.addMeshNode(s3, i2), this._evaluateUpdating(), this.notifyChange("rootNodeVisible");
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
    this.crsIndex.equals(t2) || (s$a(e2, t2, Y, this.crsIndex), e2 = Y);
    const s3 = this._elevationUpdateNodes;
    return s3.clear(), V$3(e2, i2.rootNode, i2, (e3) => s3.push(e3.index)), s3.length && (s3.forAll((e3) => i2.updateElevationChanged(e3)), this._setCameraDirty()), s3;
  }
  removeAllGeometryObbs() {
    null != this._index && this._index.removeAllGeometryObbs();
  }
  getRenderMbs(e2) {
    return null != this._viewportQueries ? this._viewportQueries.getRenderMbs(e2) : null;
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
    null != i2.rootNode && s$a(e2, t2, Y, this.crsIndex) && this._loadedNodeScales.forEach((e3, t3) => {
      const s3 = i2.getNode(t3);
      null != s3 && g$6(Y, s3.mbs) && this._loadedNodeScales.set(t3, this._computeScale(s3));
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
    this.layerView.loadCachedGPUData && this.layerView.addCachedGPUData || (this._disableMemCache = true), this._disableMemCache = e2;
  }
  runTask(e2, t2) {
    return this.layerView.contentVisible ? this.layerView.visible && null != this._index ? (this._processWithErrorLogging(e2, t2), this._index.maxPriority) : -1 / 0 : (this._updateViewData(), this._evaluateUpdating(), -1 / 0);
  }
  _processWithErrorLogging(e2, t2) {
    try {
      this._process(e2, t2);
    } catch (i2) {
      this._errorCount < 50 ? j.error("Error during processing: " + i2) : 50 === this._errorCount && j.error("Too many errors for this layer. Further errors will not be displayed."), this._errorCount++;
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
    if (i2.estimate = i2.estimate || t2 / 2, this._index.indexMissing > k) {
      if (this._featureLOD <= H)
        return;
      this._featureLOD /= B, this._stableFeatureLOD = false;
    } else if (e2 && i2.estimate < t2) {
      if (i2.leavesReached || this._featureLOD >= E$1 || this._stableFeatureLOD)
        return;
      const e3 = Math.min(10, Math.max(t2 / i2.estimate, 1.001));
      this._featureLOD *= e3;
      const s3 = this._lod, a3 = this._index.checkFeatureTarget(t2, s3);
      a3 !== s3 && (this._featureLOD = a3 / this._baseLOD, this._stableFeatureLOD = true);
    } else {
      if (!(i2.estimate > t2 * R || e2 && i2.estimate > t2))
        return;
      if (this._featureLOD <= H)
        return;
      this._featureLOD /= 1 + 0.25 * (i2.estimate / t2 - 1), this._stableFeatureLOD = false;
    }
    this._featureLOD = Math.min(E$1, Math.max(H, this._featureLOD)), this._viewportQueries.updateScreenSpaceErrorBias(this._lod), this._index.requestUpdate();
  }
  _processCache(e2) {
    const t2 = this._index;
    if (null == t2)
      return false;
    for (; this._newLoadingNodes.length > 0 && !e2.done; ) {
      const i2 = this._newLoadingNodes.pop();
      for (let s3 = t2.getParent(i2); null != s3 && (!this.layerView.isNodeLoaded(s3.index) && this._isNodeInScaleBounds(s3)); s3 = t2.getParent(s3.index))
        if (this._enableFromGPUCache(s3, s$7.Hole)) {
          e2.madeProgress();
          break;
        }
    }
    return e2.hasProgressed;
  }
  _processNodes(e2, t2) {
    if (null == this._index)
      return false;
    let i2 = (this._isIdle ? T : Q) - this._loadingNodes.size;
    const s3 = this._index.updates;
    for (s3.cancel.forEach(this._cancelNode, this), s3.cancel = []; s3.remove.length > 0 && !e2.done; )
      this.layerView.removeNode(s3.remove.pop()), e2.madeProgress();
    for (; s3.update.length > 0 && !e2.done; ) {
      const t3 = this._index.getNode(s3.update.pop());
      null != t3 && (this._updateLoadedNode(t3), e2.madeProgress());
    }
    for (; s3.add.length > 0 && !e2.done && i2 > 0; ) {
      --i2;
      const a3 = this._index.getNode(s3.add.back());
      if (null == a3 || a3.cacheState !== o$4.Cached && !this._hasNodeLoadToken(t2))
        break;
      s3.add.pop(), this._loadNode(a3), e2.madeProgress();
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
    return !(!this._isIdle && e2.numNodesLoading + this._loadingNodes.size >= Q) && (this._downloadingCount < I$5 && !this.dataStreamController.busy);
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
    this.screenSizeFactor = 1 / (t2.perScreenPixelRatio / 2), this._viewportQueries.updateCamera(t2, !i2 || this.isGraphics3D), this._viewportQueries.setPointOfInterest(e2.pointsOfInterest.focus.renderLocation), this._viewportQueries.updateScreenSpaceErrorBias(this._lod), this._index.invalidateVisibilityCache(), this._index.progressiveLoadPenalty = J.distancePenalty * this._viewportQueries.distCameraToPOI(), this._index.requestUpdate(), this._stableFeatureLOD = false, this._invisibleDirty = true, this._cameraDirty = false, this.notifyChange("rootNodeVisible");
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
    return (Math.min(this.layerView.view.quality, 0.5) - l$3) / (0.5 - l$3);
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
    this._nodeLoader = new d(this.layer, this.dataStreamController, j, this._defaultGeometrySchema, this._requiredAttributes, t2), e2.requestUpdate(), this._lodHandling.startNodeLoading((e3) => this._isNodeInScaleBounds(e3), (e3, t3) => this._removeNodes(e3, t3, Z.fadeout), e2, { maxLodLevel: this._viewportQueries.maxLodLevel }), this._evaluateUpdating();
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
    K.clear(), this.layerView.getLoadedNodeIndices(K);
    const i2 = 0 === this._viewportQueries.maxDistance, s3 = i2 ? () => false : (e3) => this._shouldDropNode(e3);
    return K.filterInPlace((e3) => {
      const i3 = t2.getNode(e3);
      return null == i3 || !t2.isGeometryVisible(e3) || s3(i3) || !this._isNodeInScaleBounds(i3);
    }), K.length > 0 && this._lodHandling.setLodGlobalDirty(), this._removeNodes(K, e2, Z.pop), !(i2 && this._lodDropFactor < 1) && (0 === K.length || (K.clear(), false));
  }
  markNodeToRemove(e2) {
    K.push(e2);
  }
  removeMarkedNodes() {
    this._removeNodes(K, C$3, Z.pop);
  }
  _removeNodes(e2, t2, i2) {
    const s3 = e2.length;
    if (0 !== s3 && !t2.done) {
      for (null != this._index && this._index.requestUpdate(); e2.length > 0 && !t2.done; ) {
        const s4 = e2.pop(), a$12 = this._index;
        i2 === Z.fadeout && this.layerView.nodeFadeoutEnabled && null != a$12 && a$12.isGeometryVisible(s4) ? this.layerView.fadeNode(s4, a2.FadeOut, true) : this.layerView.removeNode(s4), t2.madeProgress();
      }
      if (this._loadedNodeScales.size > 0)
        for (let t3 = e2.length; t3 < s3; t3++) {
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
      const i2 = X(this.layerView.getLoadedAttributes(e2.index), this._requiredAttributes);
      let s3 = null;
      s3 = i2 ? await Promise.resolve(this.layerView.getAttributeData(e2.index)) : await this._loadAttributes(e2, this._requiredAttributes, t2.signal), await this.schedule(() => this.layerView.updateAttributes(e2.index, { loadedAttributes: this._requiredAttributes, attributeData: s3 }, t2.signal), t2.signal);
    } catch (i2) {
      if (!b$2(i2))
        return this.layerView.updateAttributes(e2.index, { loadedAttributes: this._requiredAttributes, attributeData: {} }, t2.signal);
    }
    this._updatingNodes.delete(e2.index), this._evaluateUpdating();
  }
  _loadNode(e2) {
    if (this._loadingNodes.has(e2.index))
      return void j.error("already loading node " + e2.index);
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
    return e2.cacheState === o$4.Uncached ? this._loadUncached(e2, t2).then(() => false) : this._loadCached(e2, t2).then((t3) => !t3 && (e2.cacheState = o$4.Uncached, true)).catch((t3) => !b$2(t3) && (e2.cacheState = o$4.Uncached, true));
  }
  _enableFromGPUCache(e2, t2) {
    if (this._disableMemCache || null == this._index)
      return false;
    if (t2 === s$7.Hole && !this._index.useNodeAsHole(e2.index))
      return true;
    const i2 = this._loadCachedGPUData(e2);
    return !!i2 && (this.layerView.addCachedGPUData(e2, i2, t2), this._nodeAdded(), true);
  }
  _loadCachedGPUData(e2) {
    const t2 = this.layerView.loadCachedGPUData(e2.index);
    return null != t2?.attributeInfo && X(t2.attributeInfo.loadedAttributes, this._requiredAttributes) ? t2 : (this.layerView.deleteCachedGPUData(t2), null);
  }
  _nodeAdded() {
    null != this._index && this._index.requestUpdate(), this._lodHandling.setLodGlobalDirty(), this._evaluateUpdating();
  }
  updateLoadStatus(e2, t2) {
    const i2 = this._index;
    null != i2 && i2.updateChildrenLoaded(e2, t2 ? 1 : -1);
  }
  async _loadCached(e2, t2) {
    if (this._enableFromGPUCache(e2, s$7.Leaf))
      return true;
    const i2 = this.layerView;
    if (this.disableIDBCache || !i2.loadCachedNodeData || !i2.addCachedNodeData)
      return false;
    const s3 = (t3, i3) => this._nodeLoader.loadTextures(e2, t3, i3), a3 = (t3, i3) => this._clientNodeLoader.loadTextures(e2, t3, i3), r2 = e2.index >= 0 ? s3 : a3, d2 = await this.schedule(() => i2.loadCachedNodeData(e2, t2, r2), t2);
    if (null == d2)
      return false;
    const o2 = this._requiredAttributes, n2 = await this.reschedule(() => this._loadAttributes(e2, o2, t2), t2);
    return await this.reschedule(() => i2.addCachedNodeData(e2, d2, { loadedAttributes: o2, attributeData: n2 }, t2), t2), this._nodeAdded(), true;
  }
  _loadUncached(e2, t2) {
    return this._downloadingCount++, this._loadNodeData(e2, t2).catch((e3) => {
      throw this._downloadingCount--, e3;
    }).then((i2) => (this._downloadingCount--, this.schedule(() => this.layerView.addNode(e2, i2, t2), t2))).then(() => {
      this._nodeAdded(), e2.cacheState = o$4.Cached;
    }).catch((t3) => {
      if (!b$2(t3))
        throw j.error("#loadNodeData()", this.layer, `Failed to load node '${e2.id}'`, t3), e2.failed = true, null != this._index && this._index.requestUpdate(), t3;
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
    this._tmpPoint.x = e2.mbs[0], this._tmpPoint.y = e2.mbs[1], this._tmpPoint.z = e2.mbs[2];
    const t2 = e2.mbs[3];
    return this.layerView.view.basemapTerrain.getSphereScale(this._tmpPoint, t2);
  }
  _isNodeInScaleBounds(e2) {
    if (!this._areScaleBoundsActive)
      return true;
    const t2 = this._getScale(e2), { minScale: i2, maxScale: s3 } = c$5(this.layer);
    return t$3(t2, i2, s3);
  }
  updateStats(e2) {
    this.isGraphics3D && (e2.detail = this._featureLOD, e2.target = this.featureTarget * this._baseLOD), this._index?.updateStats(e2);
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
e$5([y$3({ readOnly: true })], z.prototype, "isMeshPyramid", null), e$5([y$3({ readOnly: true })], z.prototype, "isGraphics3D", null), e$5([y$3({ readOnly: true })], z.prototype, "useMaximumNumberOfFeatures", null), e$5([y$3({ readOnly: true })], z.prototype, "indexStreamController", null), e$5([y$3({ readOnly: true })], z.prototype, "dataStreamController", null), e$5([y$3({ readOnly: true })], z.prototype, "crsVertex", null), e$5([y$3({ readOnly: true })], z.prototype, "crsIndex", null), e$5([y$3()], z.prototype, "screenSizeFactor", void 0), e$5([y$3()], z.prototype, "featureTarget", void 0), e$5([y$3()], z.prototype, "fixedFeatureTarget", void 0), e$5([y$3()], z.prototype, "layerView", void 0), e$5([y$3()], z.prototype, "layer", null), e$5([y$3()], z.prototype, "updating", void 0), e$5([y$3({ readOnly: true })], z.prototype, "running", null), e$5([y$3()], z.prototype, "updatingProgress", void 0), e$5([y$3({ readOnly: true })], z.prototype, "leavesReached", void 0), e$5([y$3({ constructOnly: true })], z.prototype, "scaleVisibilityEnabled", void 0), e$5([y$3({ constructOnly: true })], z.prototype, "worker", void 0), e$5([y$3({ readOnly: true, dependsOn: [] })], z.prototype, "rootNodeVisible", null), z = e$5([c$3(G$1)], z);
const K = new l$2({ deallocator: null });
let W;
function X(e2, t2) {
  return null != e2 && e2.length === t2.length && e2.every((e3) => $(t2, e3.name) >= 0);
}
function $(e2, t2) {
  const i2 = t2.toLowerCase();
  for (let s3 = 0; s3 < e2.length; s3++)
    if (e2[s3].name.toLowerCase() === i2)
      return s3;
  return -1;
}
const J = { factorIM: 0.2, factor3dObject: 0.05, distancePenalty: 10 }, Y = u$7();
var Z;
!function(e2) {
  e2[e2.pop = 0] = "pop", e2[e2.fadeout = 1] = "fadeout";
}(Z || (Z = {}));
const ee = z;
const E = "esri.views.3d.layers.i3s.I3SOverrides";
let S = class extends g$4 {
  constructor(e2) {
    super(e2), this._warnMaximumChangedObjectsExceeded = false, this._maximumNumberOfEditOVerrides = V, this._original3DOFLDefinitionExpression = null, this._interactiveEditingSessions = new V$4(), this.geometryOverrides = new V$4(), this._clientGeometryCache = /* @__PURE__ */ new Map(), this._associatedLayerView = null, this._attributeChangedObjectIds = new s$b(), this._geometryChangedObjectIds = new s$b(), this._pendingFetchChangedObjectIds = null, this._pendingFetchAbortController = new AbortController(), this._featureIdLocks = /* @__PURE__ */ new Map();
  }
  initialize() {
    this._memCache = this.memoryController.newCache(`i3s-attribute-overrides-${this.layer.uid}`), this._pendingFetchChangedObjectIds = this._fetchChangedObjectIds(this._pendingFetchAbortController?.signal), this._pendingFetchChangedObjectIds.finally(() => {
      this._pendingFetchAbortController = null, this._pendingFetchChangedObjectIds = null;
    }), this.is3DOFL && null != this._associatedLayer && (a$8() ? this._associatedLayer.load().then((e2) => {
      this.destroyed || (this._original3DOFLDefinitionExpression = e2.definitionExpression, this.addHandles(d$5(() => this._definitionExpression, (t2) => e2.definitionExpression = t2, P$4)), this._associatedLayerView = new l$4({ layer: this._associatedLayer, view: this.view }));
    }) : r$2());
  }
  destroy() {
    this.is3DOFL && null != this._associatedLayer && (a$8() ? null != this._associatedLayerView && (this._associatedLayer.definitionExpression = this._original3DOFLDefinitionExpression) : r$2()), this._set("layer", null), this._memCache = u$9(this._memCache), this._pendingFetchAbortController = e$9(this._pendingFetchAbortController), this._pendingFetchChangedObjectIds = null, this._featureIdLocks.clear();
  }
  get is3DOFL() {
    return n$7() && null != this._associatedLayer?.infoFor3D;
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
    if (a$8()) {
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
    const t2 = this._interactiveEditingSessions, r2 = new D(e2, () => {
      t2.remove(r2);
    });
    return t2.unshift(r2), r2;
  }
  async applyAttributeOverrides(e2, t2, r2, s3 = []) {
    if (this._pendingFetchChangedObjectIds && await h$5(this._pendingFetchChangedObjectIds, r2), null == t2)
      return;
    const { attributeData: i2, loadedAttributes: o2 } = t2;
    if (null == o2 || null == i2 || 0 === this._attributeChangedObjectIds.size)
      return;
    const n2 = /* @__PURE__ */ new Set();
    for (const d2 of o2)
      n2.add(d2.index);
    for (const d2 of s3)
      n2.has(d2.index) || (o2.push(d2), i2[d2.name] = new Array(e2.length));
    const a3 = await this._lockFeatureIds(e2);
    try {
      const t3 = { attributeData: i2, loadedAttributes: o2 }, s4 = this._getOverridesFromCache(e2, t3, this._attributeChangedObjectIds), { objectIds: n3, fieldNames: a4 } = s4;
      if (0 === n3.length || 0 === a4.length)
        return;
      const d2 = await this._queryAttributeOverridesFromAssociatedLayer(n3, a4, r2);
      if (null == d2)
        return;
      this._processOverridesFromAssociatedLayer(e2, d2, a4, t3);
    } finally {
      a3.remove();
    }
  }
  updateGeometry(e2, t2) {
    this._geometryChangedObjectIds.add(e2);
    const r2 = this._clientGeometryCache.get(e2);
    if (null != r2 && (this.geometryOverrides.remove(r2), this._clientGeometryCache.delete(e2)), null != t2) {
      const r3 = { oid: e2, mesh: t2 };
      this.geometryOverrides.add(r3), this._clientGeometryCache.set(e2, r3);
    }
  }
  updateAttributeValue(e2, t2, r2) {
    this._attributeChangedObjectIds.add(e2), this._cacheAttributeValue(e2, t2, r2);
  }
  featureAdded(e2) {
    this.is3DOFL && r$2() && this._geometryChangedObjectIds.add(e2), this._attributeChangedObjectIds.add(e2);
  }
  _cacheAttributeValue(e2, t2, r2) {
    this._memCache.put(this._getAttributeCacheKey(e2, t2), r2, this._memCacheAttributeValueSize(r2));
  }
  _getOverridesFromCache(e2, { loadedAttributes: t2, attributeData: r2 }, s3) {
    const i2 = /* @__PURE__ */ new Set(), o2 = new Array();
    for (const a3 of t2)
      o2[a3.index] = r2[a3.name];
    const n2 = /* @__PURE__ */ new Set();
    for (let a3 = 0; a3 < e2.length; a3++) {
      const r3 = e2[a3];
      if (s3.has(r3))
        for (const e3 of t2) {
          const t3 = this._attributeFromCache(r3, e3.index);
          void 0 === t3 ? (i2.add(r3), n2.add(e3.name)) : o2[e3.index][a3] = t3;
        }
    }
    return { objectIds: Array.from(i2), fieldNames: Array.from(n2) };
  }
  _attributeFromCache(e2, t2) {
    const r2 = this._fromInteractiveEditingSession(e2, t2);
    if (void 0 !== r2)
      return r2;
    const s3 = this._getAttributeCacheKey(e2, t2);
    return this._memCache.get(s3);
  }
  _fromInteractiveEditingSession(e2, t2) {
    if (null != this._interactiveEditingSessions)
      for (const r2 of this._interactiveEditingSessions) {
        if (r2.objectId !== e2)
          continue;
        const s3 = r2.getAttribute(t2);
        if (void 0 !== s3)
          return s3;
      }
  }
  _getAttributeCacheKey(e2, t2) {
    return `${e2}-${t2}`;
  }
  async _queryAttributeOverridesFromAssociatedLayer(e2, t2, r2) {
    if (0 === e2.length)
      return null;
    this._logWarningIfMaximumObjectsExceeded();
    const { associatedLayer: s3 } = this.layer;
    if (null == s3)
      return null;
    const i2 = s3.createQuery(), { objectIdField: o2 } = s3, n2 = [o2, ...t2];
    i2.where = "1=1", i2.returnGeometry = false, i2.outFields = n2, i2.cacheHint = true;
    const a3 = await this._executeBatchQuery(s3, e2, i2, r2), d2 = [];
    for (const c3 of a3)
      if (c3.ok)
        for (const e3 of c3.value.features)
          d2.push(e3);
    return d2;
  }
  async _queryGeometryOverridesFromAssociatedLayer(e2, t2) {
    if (0 === e2.length || !this.is3DOFL || !r$2())
      return null;
    this._logWarningIfMaximumObjectsExceeded();
    const r2 = this.layer.associatedLayer, { objectIdField: s3, globalIdField: i2 } = r2, o2 = [s3, ...null != i2 ? [i2] : []], n2 = r2.createQuery();
    n2.where = "1=1", n2.returnGeometry = true, n2.outFields = o2, n2.cacheHint = true, n2.returnZ = r2.hasZ, n2.returnM = r2.hasM;
    const a3 = await this._executeBatchQuery(r2, e2, n2, t2), d2 = r2.infoFor3D, { spatialReference: c3 } = r2, h2 = [];
    for (const l2 of a3) {
      if (!l2.ok)
        continue;
      const e3 = l2.value, { assetMaps: t3, features: r3, globalIdFieldName: s4 } = e3;
      if (null == t3)
        continue;
      const i3 = M$4(d2, t3);
      for (const o3 of r3) {
        const e4 = S$4(o3, s4, c3, d2, i3), t4 = o3;
        null != e4 ? (t4.geometry = e4, h2.push(t4)) : t4.geometry = null;
      }
    }
    return h2;
  }
  _logWarningIfMaximumObjectsExceeded() {
    if (!this._warnMaximumChangedObjectsExceeded)
      return;
    this._warnMaximumChangedObjectsExceeded = false;
    let e2 = `The number of edited objects that are not yet cached in the scene service exceeds the maximum limit. Attribute changes will only be available for the first ${u$a(this._maximumNumberOfEditOVerrides)} objects. Please consider re-caching the scene service`;
    const t2 = this.layer.portalItem;
    t2 && t2.loaded ? e2 += ` (${t2.portal.url}/home/item.html?id=${t2.id}#settings)` : e2 += ` (${this.layer.parsedUrl.path})`, s$9.getLogger(E).warn("#queryOverrides()", this.layer.title, `${e2}.`);
  }
  async _executeBatchQuery(e2, t2, r2, o2) {
    if (0 === t2.length)
      return [];
    const n2 = t$4(e2);
    t2 = [...t2].sort((e3, t3) => e3 - t3);
    const a3 = m$3(t2, n2).map((t3) => {
      const s3 = r2.clone();
      return s3.objectIds = t3, b$3(r$3(e2, s3, { signal: o2 }));
    });
    return Promise.all(a3);
  }
  _processOverridesFromAssociatedLayer(e2, t2, r2, { loadedAttributes: s3, attributeData: i2 }) {
    const o2 = this._associatedLayer;
    if (null == o2)
      return;
    const n2 = o2.objectIdField, a3 = r2.map((t3) => (t3 in i2 || (i2[t3] = new Array(e2.length)), i2[t3])), d2 = new Map(s3.map((e3) => [e3.name, e3.index])), c3 = r2.map((e3) => d2.get(e3)), h2 = new Map(Array.from(e2, (e3, t3) => [e3, t3]));
    for (const l2 of t2) {
      const e3 = l2.attributes[n2];
      for (let t3 = 0; t3 < r2.length; t3++) {
        const s4 = c3[t3], i3 = h2.get(e3), o3 = l2.attributes[r2[t3]];
        a3[t3][i3] = o3, this._cacheAttributeValue(e3, s4, o3);
      }
    }
  }
  _memCacheAttributeValueSize(e2) {
    return "string" == typeof e2 ? r$4(e2) : n$8();
  }
  async _fetchChangedObjectIds(e2) {
    const r2 = this.layer;
    await r2.load({ signal: e2 }), this._geometryChangedObjectIds.clear(), this._attributeChangedObjectIds.clear();
    const { associatedLayer: s3 } = r2;
    if (null == s3 || !s3.capabilities?.operations?.supportsChangeTracking)
      return;
    const i2 = this._getFetchChangedObjectIdsServerGen();
    if (null == i2)
      return;
    const n2 = s3.layerId, a3 = this.is3DOFL, d2 = { f: "json", returnIdsOnly: true, layers: `[${n2}]`, returnUpdates: true, returnDeletes: a3, returnInserts: a3, layerServerGens: JSON.stringify([{ id: n2, serverGen: i2 }]) };
    if (a3) {
      const e3 = s3.infoFor3D;
      d2.fieldsToCompare = JSON.stringify({ fields: [...Object.values(e3.transformFieldRoles), e3.sourceHashField] });
    }
    const c3 = await _$2(j$1(`${s3.url}/extractChanges`, { method: "post", query: d2, timeout: G, signal: e2 }));
    if (!c3.ok && m$4(c3.error)) {
      const e3 = this.layer.title;
      s$9.getLogger(E).warn("extractChanges:timeout", e3, `${e3} could not obtain edited features that are not cached in the scene service. Display of features may not be up to date with the latest edits. Consider re-caching the scene service.`);
    }
    if (c3.ok && 1 === c3.value.data?.edits?.length) {
      const t2 = c3.value.data.edits[0], r3 = t2?.objectIds, i3 = t2?.fieldUpdates, o2 = r3?.adds ?? [], n3 = r3?.updates ?? [], d3 = r3?.deletes ?? [], h2 = [...o2, ...n3, ...d3], l2 = a3 ? [...o2, ...i3 ?? n3, ...d3] : [], u2 = Math.min(this._maximumNumberOfEditOVerrides, h2.length);
      u2 < h2.length && (this._warnMaximumChangedObjectsExceeded = true);
      const m3 = h2.sort((e3, t3) => e3 - t3);
      for (let e3 = 0; e3 < u2; ++e3) {
        const t3 = m3[e3];
        this._attributeChangedObjectIds.add(t3);
      }
      for (const e3 of l2)
        this._geometryChangedObjectIds.add(e3);
      if (this.is3DOFL && r$2() && this._geometryChangedObjectIds.size > 0) {
        const t3 = await this._queryGeometryOverridesFromAssociatedLayer(Array.from(this._geometryChangedObjectIds), e2);
        if (null != t3)
          for (const e3 of t3)
            null != e3.geometry && this.updateGeometry(e3.attributes[s3.objectIdField], e3.geometry);
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
    let r2 = true;
    for (; r2; ) {
      const s4 = new Array();
      for (const r3 of e2) {
        const e3 = t2.get(r3);
        e3 && s4.push(e3);
      }
      0 === s4.length ? r2 = false : await Promise.all(s4);
    }
    const s3 = C$4(), i2 = s3.promise;
    for (const o2 of e2)
      t2.set(o2, i2);
    return e$6(() => {
      for (const r3 of e2)
        t2.delete(r3);
      s3.resolve();
    });
  }
  get test() {
    const e2 = Array.from(this._attributeChangedObjectIds), t2 = this._pendingFetchChangedObjectIds, r2 = this;
    return { changedObjectIds: e2, pendingFetchChangedObjectIds: t2, get maximumNumberOfEditOVerrides() {
      return r2._maximumNumberOfEditOVerrides;
    }, set maximumNumberOfEditOVerrides(e3) {
      r2._maximumNumberOfEditOVerrides = e3;
    } };
  }
};
e$5([y$3({ constructOnly: true })], S.prototype, "view", void 0), e$5([y$3({ constructOnly: true })], S.prototype, "layer", void 0), e$5([y$3({ readOnly: true })], S.prototype, "is3DOFL", null), e$5([y$3()], S.prototype, "_interactiveEditingSessions", void 0), e$5([y$3({ readOnly: true })], S.prototype, "sortedGeometryChangedObjectIds", null), e$5([y$3({ readOnly: true })], S.prototype, "geometryOverrides", void 0), e$5([y$3()], S.prototype, "_clientGeometryCache", void 0), e$5([y$3()], S.prototype, "_associatedLayer", null), e$5([y$3()], S.prototype, "_associatedLayerView", void 0), e$5([y$3({ constructOnly: true })], S.prototype, "memoryController", void 0), e$5([y$3()], S.prototype, "_attributeChangedObjectIds", void 0), e$5([y$3()], S.prototype, "_geometryChangedObjectIds", void 0), e$5([y$3()], S.prototype, "hasGeometryChanges", null), e$5([y$3()], S.prototype, "_pendingFetchChangedObjectIds", void 0), e$5([y$3()], S.prototype, "_pendingFetchAbortController", void 0), e$5([y$3()], S.prototype, "_definitionExpression", null), e$5([y$3()], S.prototype, "updating", null), e$5([y$3()], S.prototype, "isEmpty", null), S = e$5([c$3(E)], S);
class D {
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
const G = 1e4, V = 5e4;
export {
  D$1 as D,
  F2 as F,
  M,
  S,
  a$2 as a,
  a2 as b,
  e$1 as c,
  b2 as d,
  ee as e,
  S$1 as f,
  s$2 as s
};
