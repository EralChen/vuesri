import { eB as t$1, mc as E, pc as s, lk as e, fq as D$1, o6 as i, kL as t$2, og as G, bJ as c$1, pd as l$1, fa as t$3, aO as s$1, pe as i$1, ce as d$1, bX as P$1, pf as l$2, pg as a$1, c8 as u$1, e3 as v, m7 as r$1, gs as l$3, eE as e$2, ph as e$3, pi as R, pj as T$1, pk as n$2, fr as e$4, pl as s$2, pm as o, pn as i$2, po as I, aW as n$3, nv as J, aG as u, pp as d$2, pq as o$1, iw as S$1, fk as e$5, ng as A$1, fB as n$4, eH as r$2, pr as I$1, ps as a$2, pt as u$2, fp as N$1, oV as c$2, oX as x$1, oZ as L, o$ as i$4, o_ as O, p2 as E$1, fl as t$5, p4 as u$3, pu as c, pv as k, pw as B, px as g$1, aT as s$4, aV as e$6, aX as y, a_ as c$3, eu as u$4, im as e$7 } from "./chunk-ejFG4zJ0.js";
import { x, f } from "./chunk-m3sjKNXT.js";
import { r, a, S, N, e as e$1, m, d, g, t as t$4, n as n$5, i as i$3 } from "./chunk-uXZZIsGB.js";
import { n as n$1 } from "./chunk-ZRKw_7qF.js";
import { s as s$3 } from "./chunk-tcpOk1v2.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class t extends t$1 {
  constructor(e2, t2, s2, r2, o2, h, c2) {
    super(e2, 0, 0, 0, t2), this.nodesCached = s2, this.vboMB = r2, this.textureMB = o2, this.vboMBCached = h, this.textureMBCached = c2;
  }
}
const l = { [r.Points]: null, [r.Lines]: null, [r.LineStrip]: null, [r.Triangles]: E.TRIANGLES, [r.TriangleStrip]: E.TRIANGLE_STRIP, [r.NotSet]: null }, T = { [a.Opaque]: s.Opaque, [a.Mask]: s.Mask, [a.Blend]: s.Blend }, P = { [S.Back]: e.Back, [S.Front]: e.Front, [S.None]: e.None, [S.NotSet]: e.Back }, _ = { [N.WrapYBit]: { s: D$1.CLAMP_TO_EDGE, t: D$1.REPEAT }, [N.WrapXBit]: { s: D$1.REPEAT, t: D$1.CLAMP_TO_EDGE }, [N.WrapXy]: { s: D$1.REPEAT, t: D$1.REPEAT }, [N.None]: { s: D$1.CLAMP_TO_EDGE, t: D$1.CLAMP_TO_EDGE }, [N.NotSet]: { s: D$1.CLAMP_TO_EDGE, t: D$1.CLAMP_TO_EDGE } }, A = { [e$1.U8]: 1, [e$1.I8]: 1, [e$1.U16]: 2, [e$1.I16]: 2, [e$1.U32]: 4, [e$1.I32]: 4, [e$1.F32]: 4, [e$1.F64]: 8, [e$1.Utf8String]: 1, [e$1.NotSet]: 1 };
class n {
  constructor(e2) {
    this.layerUid = [], this.type = i.TILES3D, this.slicePlaneEnabled = false, this.isGround = true, this.layerView = e2, this.layerUid.push(e2.layer.uid);
  }
  intersect(e2, r2, n2, l2) {
    const o2 = e2.results, a2 = e2.options.store === t$2.ALL;
    if (e2.options.filteredLayerUids.includes(this.layerView.layer.uid))
      return;
    const c2 = this.layerView.view._stage.renderView.componentObjectCollection;
    this.layerView.objects.forEach((s2) => {
      s2.visible && s2.intersectionGeometry && c2.intersect(s2, n2, l2, e2.tolerance, null, (s3, c3, u2, d2) => {
        if (c3 >= 0) {
          if (null != r2 && !r2(n2, l2, c3))
            return;
          const s4 = (e3) => {
            const t2 = new l$1(this.layerView.layer.uid, () => this._createTiles3DGraphic(this.layerView.layer, {}));
            e3.set(this.type, t2, c3, u2);
          };
          if (this.isGround && (null == o2.ground.dist || c3 < o2.ground.dist) && s4(o2.ground), e2.options.isFiltered)
            return;
          if ((null == o2.min.dist || c3 < o2.min.dist) && s4(o2.min), (null == o2.max.dist || c3 > o2.max.dist) && s4(o2.max), a2) {
            const i2 = G(e2.ray);
            s4(i2), e2.results.all.push(i2);
          }
        }
      });
    });
  }
  _createTiles3DGraphic(i2, t2) {
    return new c$1({ layer: i2, sourceLayer: i2, attributes: t2 });
  }
}
var ve;
!function(e2) {
  e2[e2.API = 1] = "API", e2[e2.VerboseAPI = 2] = "VerboseAPI", e2[e2.Error = 3] = "Error";
}(ve || (ve = {}));
class xe {
  constructor() {
    this.handle = 0, this.isVisible = false, this.components = [], this.texMemoryUsage = 0, this.vboMemoryUsage = 0, this.cpuMemoryUsage = 0, this.textures = [];
  }
  totalMemory() {
    return this.texMemoryUsage + this.vboMemoryUsage + this.cpuMemoryUsage;
  }
}
function je(e2) {
  return Math.round(e2 / 1048.576) / 1e3;
}
let Ce = class extends n$1(u$4) {
  constructor() {
    super(...arguments), this.type = "integrated-mesh-3dtiles", this._visibleGeometryChangedSchedulerHandle = null, this._wasmLayerId = -1, this.ignoresMemoryFactor = false, this.drapeTargetType = t$3.WithoutRasterImage, this._lyrHandleToObjects = /* @__PURE__ */ new Map(), this._initialCullFace = /* @__PURE__ */ new Map(), this._suspendedHandle = null, this._dbgFlags = /* @__PURE__ */ new Set();
  }
  initialize() {
    if (this._dbgFlags.add(ve.Error), this._dbg(ve.VerboseAPI, "Tiles3DLayerView3D initialize() called"), !this._canProjectWithoutEngine())
      throw new s$1("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
    const e2 = i$1(this).then((e3) => {
      this._intersectionHandler = new n(this), this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler), this._updatingHandles.add(() => this.slicePlaneEnabled, (e4) => this._slicePlaneEnabledChange(e4)), this._elevationProvider = new x({ view: this.view, layerElevationSource: this, intersectionHandler: this._intersectionHandler }), this.view.elevationProvider.register("im", this._elevationProvider), this.view.basemapTerrain.overlayManager.registerDrapeTarget(this), this._wasmLayerId = e3;
      const t2 = this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`, (e4) => this._onRemoveFromCache(e4));
      this._memCache = t2, this._suspendedHandle = d$1(() => this.suspended, (e4) => {
        const t3 = l$2(this.view);
        t3 && t3.setEnabled(this, !e4);
      }, P$1), this.addHandles([d$1(() => this.layer.elevationInfo, (e4) => this._elevationInfoChanged(e4))]);
    }).catch((e3) => {
      if (a$1(this), this._wasmLayerId = -1, e3 === m)
        throw new s$1("tiles3d:addLayer-failure", "The 3d tiles layer description was invalid.", {});
      if (e3 === d)
        throw new s$1("tiles3d:addLayer-failure", "The 3d tiles layer web assembly module failed to download.", {});
    });
    this.addResolvingPromise(e2);
  }
  destroy() {
    this._dbg(ve.VerboseAPI, "Tiles3DLayerView3D destroy() called"), a$1(this), this._suspendedHandle && (this._suspendedHandle.remove(), this._suspendedHandle = null), this._intersectionHandler && (this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler), this._intersectionHandler = null), this._elevationProvider && (this._elevationProvider.objectsChanged(this._obbs), this.view.elevationProvider.unregister(this._elevationProvider), this._elevationProvider = null), this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this), this._lyrHandleToObjects.forEach((e2) => this.freeObject(e2)), this._lyrHandleToObjects.clear(), this._initialCullFace.clear(), this._memCache = u$1(this._memCache), this._updatingHandles = u$1(this._updatingHandles), this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle.remove(), this._visibleGeometryChangedSchedulerHandle = null);
  }
  _visibleGeometryChanged() {
    null == this._visibleGeometryChangedSchedulerHandle && (this._visibleGeometryChangedSchedulerHandle = v(() => {
      this.emit("visible-geometry-changed"), this._visibleGeometryChangedSchedulerHandle = null;
    }));
  }
  _slicePlaneEnabledChange(e$12) {
    this._intersectionHandler && (this._intersectionHandler.slicePlaneEnabled = e$12), this.objects.forEach((t2) => {
      const r2 = this._collection.getMaterial(t2);
      r2.commonMaterialParameters.hasSlicePlane = e$12, r2.commonMaterialParameters.cullFace = e$12 ? e.None : this._initialCullFace.get(t2);
    });
  }
  _elevationInfoChanged(e2) {
    const t2 = e2?.offset ?? 0, r2 = e2?.unit ? r$1(e2?.unit) : 1, i2 = l$2(this.view);
    i2 && i2.setLayerOffset(this, t2 * r2);
  }
  get _obbs() {
    return this.objects.map((e2) => this._collection.getComponentObb(e2));
  }
  get wasmLayerId() {
    return this._wasmLayerId;
  }
  get usedMemory() {
    let e2 = 0;
    return this._lyrHandleToObjects.forEach((t2) => {
      t2.isVisible && (e2 += t2.totalMemory());
    }), e2;
  }
  get unloadedMemory() {
    let e2 = 0;
    return this._lyrHandleToObjects.forEach((t2) => {
      t2.isVisible || (e2 += t2.totalMemory());
    }), e2;
  }
  get performanceInfo() {
    let e2 = 0, t$12 = 0, r2 = 0, i2 = 0, s2 = 0, o2 = 0;
    return this._lyrHandleToObjects.forEach((n2) => {
      n2.isVisible ? (e2 += n2.texMemoryUsage, t$12 += n2.vboMemoryUsage, s2++) : (r2 += n2.texMemoryUsage, i2 += n2.vboMemoryUsage, o2++);
    }), new t(this.usedMemory, s2, o2, je(t$12), je(e2), je(i2), je(r2));
  }
  _canProjectWithoutEngine() {
    if (this.view.state.viewingMode === l$3.Local) {
      const e2 = this.view.renderSpatialReference?.isWebMercator ? 3857 : this.view.renderSpatialReference?.wkid ?? -1;
      if (3857 !== e2 && 32662 !== e2)
        return false;
    }
    return true;
  }
  get _stage() {
    return this.view._stage;
  }
  get _collection() {
    return this._stage.renderView.componentObjectCollection;
  }
  get elevationOffset() {
    return (this.layer.elevationInfo?.offset ?? 0) * (this.layer.elevationInfo?.unit ? r$1(this.layer.elevationInfo.unit) : 1);
  }
  get elevationRange() {
    const e2 = this.fullExtent;
    return e2?.zmin && e2?.zmax ? new e$2(e2.zmin, e2.zmax) : null;
  }
  getElevationRange(e2) {
    return null;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get objects() {
    return Array.from(this._lyrHandleToObjects.values()).reduce((e2, t2) => e2.concat(t2.components), new Array());
  }
  isUpdating() {
    const e2 = l$2(this.view);
    return !(this._wasmLayerId < 0 || null == e2) && e2.isUpdating(this._wasmLayerId);
  }
  updatingFlagChanged() {
    this.notifyChange("updating");
  }
  async createRenderable(e$12) {
    const t2 = e$12.meshData;
    if (null == t2.data)
      throw new Error("meshData.data undefined");
    if (t2.desc = JSON.parse(t2.desc), null == t2.desc)
      throw new Error("meshData.desc undefined");
    const r$12 = e$3(t2.desc.origin), i2 = new Array(), s$12 = /* @__PURE__ */ new Map(), o$2 = new xe();
    o$2.handle = e$12.handle, this._lyrHandleToObjects.set(e$12.handle, o$2);
    const n2 = this.view.basemapTerrain.spatialReference;
    let a2, l$12;
    if ("global" === this.view.viewingMode) {
      const e2 = e$7();
      R(T$1, r$12, e2, n2), a2 = n$2(e$4(), e2), l$12 = s$2(e$4(), a2);
    } else
      a2 = o, l$12 = o;
    const T$2 = e$7();
    i$2(T$2, T$2, r$12);
    const M = I(n$3(), T$2);
    let P$12 = null;
    const O2 = n$3();
    for (let c2 = 0; c2 < t2.desc.prims.length; c2++) {
      const e2 = t2.desc.prims[c2];
      if (e2.ptype !== r.Lines || null == t2.data)
        continue;
      const { positionView: i3, positionAttr: s2, indicesView: o2 } = this.getBufferViews(e2, t2.data.buffer, a2, false);
      null != s2 && null != i3 && null != o2 && (P$12 = J(s2), u(O2, P$12.center, r$12), P$12.center = O2);
    }
    for (let c2 = 0; c2 < t2.desc.prims.length; c2++) {
      const e$13 = t2.desc.prims[c2];
      if (this._dbg(ve.VerboseAPI, JSON.stringify(e$13)), e$13.ptype === r.Lines)
        continue;
      if (null == l[e$13.ptype] || null == t2.data) {
        this._dbg(ve.VerboseAPI, "[Unsupported Feature] Unsupported primitive mode (" + e$13.ptype + "). Skipping primitive.");
        continue;
      }
      const m2 = t2.desc?.materials && null != e$13.materialId ? t2.desc.materials[e$13.materialId] : null, h = null != m2 ? m2.lightingModel : g.Unlit, u$12 = h !== g.Unlit, { positionView: p, positionAttr: f$1, normalsView: y2, normalsAttr: v2, colorAttr: x2, texCoord0Attr: T$12, indicesView: U } = this.getBufferViews(e$13, t2.data.buffer, a2, u$12);
      if (null == f$1 || null == p || null == U)
        continue;
      const E2 = { colors: null != x2, textureCoordinates: null != T$12 ? d$2.Default : d$2.None, hasNormals: null != y2, needsNormals: u$12 }, V = f$1.data.length / f$1.size, I2 = (e2, t3) => !e2 || e2.data.length / e2.size === V || (this._dbg(ve.Error, `${t3} !== numPos. Skipping primitive.`), false);
      if (!I2(T$12, "numTexcoord") || !I2(x2, "numColors") || !I2(v2, "normals"))
        continue;
      const H = o$1(E2);
      let R2;
      if (null != P$12 ? R2 = P$12.clone() : (R2 = J(f$1), u(O2, R2.center, r$12), R2.center = O2), a2 !== o)
        for (let t3 = 0; t3 < p.count; t3++)
          p.getVec(t3, O2), S$1(O2, O2, a2), p.setVec(t3, O2);
      const F = H.createBuffer(f$1.data.length), A2 = /* @__PURE__ */ new Map([[e$5.POSITION, f$1]]);
      null != T$12 && A2.set(e$5.UV0, T$12), null != x2 && A2.set(e$5.COLOR, x2), null != v2 && A2.set(e$5.NORMALCOMPRESSED, v2), A2.forEach((e2, t3) => {
        null != e2 && A$1(t3, e2, null, null, F, 0);
      });
      const D = new Uint32Array([0, U.typedBuffer.length]), k2 = { vertices: { data: F.buffer, count: F.byteLength / H.stride, layoutParameters: E2 }, positionData: { positions: p.typedBuffer, indices: U.typedBuffer }, indices: U.typedBuffer, componentOffsets: D };
      o$2.cpuMemoryUsage += p.count, o$2.cpuMemoryUsage += U.count;
      const B2 = this.view.renderSpatialReference, G2 = n$3(), N2 = [1, 1, 1];
      f(M, B2, N2, n2) || this._dbg(ve.Error, "Unsupported coordinate system for IM overlay"), n$4(M, B2, G2, n2);
      const z = this._collection.createObject({ toMapSpace: r$2(G2[0], G2[1], N2[0], N2[1]), geometry: k2, obb: R2, transform: { position: M, rotationScale: l$12 } });
      m2 && this._collection.updateMaterial(z, (e$14) => {
        e$14.baseColor = m2.baseColorFactor, e$14.usePBR = h === g.Pbr, e$14.hasParametersFromSource = false, e$14.baseColorTexture = this._getTexture(m2.baseColorTex, t2, s$12), e$14.usePBR && (e$14.mrrFactors = [m2.metallicFactor, m2.roughnessFactor, 0], e$14.emissiveFactor = m2.emissiveFactor ?? [0, 0, 0], e$14.metallicRoughnessTexture = this._getTexture(m2.metalTex, t2, s$12), e$14.emissionTexture = this._getTexture(m2.emissiveTex, t2, s$12), e$14.occlusionTexture = this._getTexture(m2.occlusionTex, t2, s$12), e$14.normalTexture = this._getTexture(m2.normalTex, t2, s$12)), e$14.objectOpacity = 0, e$14.alphaDiscardMode = s.Mask;
        const r2 = [];
        e$14.baseColorTexture && r2.push(e$14.baseColorTexture.loadPromise), e$14.usePBR && e$14.metallicRoughnessTexture && r2.push(e$14.metallicRoughnessTexture.loadPromise), e$14.usePBR && e$14.emissionTexture && r2.push(e$14.emissionTexture.loadPromise), e$14.usePBR && e$14.occlusionTexture && r2.push(e$14.occlusionTexture.loadPromise), e$14.usePBR && e$14.normalTexture && r2.push(e$14.normalTexture.loadPromise);
        const n3 = Promise.all(r2);
        i2.push(n3), n3.then(() => {
          e$14.alphaDiscardMode = T[m2.alphaMode], e$14.objectOpacity = 1, o$2.texMemoryUsage += e$14.baseColorTexture?.glTexture?.usedMemory || 0, e$14.usePBR && (o$2.texMemoryUsage += e$14.metallicRoughnessTexture?.glTexture?.usedMemory || 0, o$2.texMemoryUsage += e$14.emissionTexture?.glTexture?.usedMemory || 0, o$2.texMemoryUsage += e$14.occlusionTexture?.glTexture?.usedMemory || 0, o$2.texMemoryUsage += e$14.normalTexture?.glTexture?.usedMemory || 0);
        }), e$14.commonMaterialParameters.doubleSided = m2.isDoubleSided, e$14.commonMaterialParameters.cullFace = m2.faceCulling ? P[m2.faceCulling] : e.Back, this._initialCullFace.set(z, e$14.commonMaterialParameters.cullFace), e$14.commonMaterialParameters.hasSlicePlane = this.slicePlaneEnabled, e$14.componentParameters.castShadows = I$1.All, e$14.textureAlphaCutoff = m2.alphaCutoff ?? 0.1, e$14.alphaDiscardMode = T[m2.alphaMode], e$14.isIntegratedMesh = true, e$14.polygonOffsetEnabled = false, e$14.hasOccludees = false, e$14.ellipsoidMode = a$2(this.view.spatialReference);
      }), o$2.components.push(z), o$2.vboMemoryUsage += this._collection.getObjectGPUMemoryUsage(z);
    }
    if (await Promise.all(i2), s$12.forEach((e2) => {
      o$2.textures.push(e2);
    }), !this._memCache)
      throw new Error("no memCache");
    return this._memCache.put(`${o$2.handle}`, o$2, o$2.totalMemory()), { memUsageBytes: o$2.totalMemory() };
  }
  freeRenderable(e2) {
    const t2 = this._lyrHandleToObjects.get(e2);
    t2 && (this.freeObject(t2), this._lyrHandleToObjects.delete(e2));
  }
  freeObject(e2) {
    this._memCache && this._memCache.pop(`${e2.handle}`), e2.components.forEach((t2) => {
      e2.textures.forEach((e3) => {
        this._stage.remove(e3);
      }), this._collection.destroyObject(t2), this._initialCullFace.delete(t2);
    });
  }
  setRenderableVisibility(e2, t2, r2) {
    if (this._memCache) {
      for (let i2 = 0; i2 < r2; ++i2) {
        const r3 = e2[i2], s2 = t2[i2];
        if (!s2)
          continue;
        const o2 = this._lyrHandleToObjects.get(r3);
        o2 && (this._visibleGeometryChanged(), o2.isVisible = s2, o2.components.forEach((e3) => {
          this._collection.setObjectVisibility(e3, s2), this._elevationProvider.objectChanged(this._collection.getComponentObb(e3));
        }), this._memCache.pop(`${r3}`));
      }
      for (let i2 = 0; i2 < r2; ++i2) {
        const r3 = e2[i2], s2 = t2[i2];
        if (s2)
          continue;
        const o2 = this._lyrHandleToObjects.get(r3);
        o2 && (this._visibleGeometryChanged(), o2.isVisible = s2, o2.components.forEach((e3) => {
          this._collection.setObjectVisibility(e3, s2), this._elevationProvider.objectChanged(this._collection.getComponentObb(e3));
        }), this._memCache.put(`${r3}`, o2, o2.totalMemory()));
      }
    }
  }
  _getTexture(e2, t2, r2) {
    let i2 = null;
    if (e2 && t2.desc?.images && t2.data?.buffer) {
      const s2 = t2.desc.images[e2?.imageId];
      if (i2 = r2.get(s2), !i2 && s2) {
        const o2 = this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy, n2 = o2 > 1, a2 = _[e2.wrapMode ?? N.None];
        let l2 = s2.alpha ? 4 : 3;
        const c2 = new Uint8Array(t2.data.buffer, s2.data.byteOffset, s2.data.byteCount);
        let m2 = null, d2 = null, h = null;
        switch (s2.format) {
          case t$4.Raw:
            s2.pixelFormat === n$5.R8 ? (m2 = c2.buffer, l2 = 1, d2 = "") : s2.pixelFormat === n$5.Rgb8 ? (m2 = c2.buffer, l2 = 3, d2 = "") : s2.pixelFormat === n$5.Rgba8 && (m2 = c2.buffer, l2 = 4, d2 = "");
            break;
          case t$4.Dxt1:
            m2 = c2.buffer, l2 = 3, d2 = u$2.DDS_ENCODING;
            break;
          case t$4.Dxt5:
            m2 = c2.buffer, l2 = 4, d2 = u$2.DDS_ENCODING;
            break;
          case t$4.Png:
            d2 = "image/png", h = document.createElement("img");
            break;
          case t$4.Jpeg:
            d2 = "image/jpeg", h = document.createElement("img");
            break;
          case t$4.Etc2:
            d2 = "image/ktx", h = document.createElement("img");
            break;
          case t$4.Astc:
            this._dbg(ve.Error, "Astc texture not supported");
            break;
          case t$4.Pvrtc:
            this._dbg(ve.Error, "Pvrtc texture not supported");
        }
        if (h && d2) {
          const e3 = new Blob([c2], { type: d2 });
          h.src = URL.createObjectURL(e3), m2 = h;
        }
        m2 && null != d2 && (i2 = new N$1(m2, { mipmap: n2, maxAnisotropy: o2, encoding: d2, wrap: a2, components: l2, noUnpackFlip: true, width: s2.mip0Width, height: s2.mip0Height }), this._stage.add(i2), r2.set(s2, i2));
      }
    }
    return i2 ? new s$3(this.view._stage.renderView.textureRepository, i2.id) : null;
  }
  getBufferViews(e2, t2, r2, i2) {
    let s2, o2, n2, a2, l2, c$12, m2, d2 = null;
    for (let u2 = 0; u2 < e2.atrbs.length; u2++) {
      const m3 = e2.atrbs[u2], p = m3.view, f2 = void 0, g2 = p.byteOffset + p.byteCount, b = p.byteCount / A[p.type], y2 = [...Array(b).keys()].map((e3) => e3);
      try {
        switch (m3.sem) {
          case i$3.Position:
            3 !== p.ncomp || p.type !== e$1.F32 ? this._dbg(ve.Error, "[Unsupported Feature] Unsupported view for Position (" + p + ")") : (s2 = new i$4(t2, p.byteOffset, f2, g2), o2 = new t$5(s2.typedBuffer, y2, 3));
            break;
          case i$3.Normal:
            if (3 !== p.ncomp || p.type !== e$1.F32)
              this._dbg(ve.Error, "[Unsupported Feature] Unsupported view for Normal (" + p + ")");
            else if (i2) {
              const e3 = new i$4(t2, p.byteOffset, f2, g2), i3 = c(e3.typedBuffer, r2);
              l2 = new k(i3), c$12 = new t$5(l2.typedBuffer, y2, 2);
            }
            break;
          case i$3.TexCoord:
            2 !== p.ncomp || p.type !== e$1.F32 ? this._dbg(ve.Error, "[Unsupported Feature] Unsupported view for Texcoord (" + p + ")") : void 0 === a2 && (a2 = new t$5(new u$3(t2, p.byteOffset, f2, g2).typedBuffer, y2, 2));
            break;
          case i$3.Color:
            4 === p.ncomp ? (p.type === e$1.F32 && (d2 = new c$2(t2, p.byteOffset, f2, g2)), p.type === e$1.U8 && (d2 = new x$1(t2, p.byteOffset, f2, g2)), p.type === e$1.U16 && (d2 = new L(t2, p.byteOffset, f2, g2))) : 3 === p.ncomp && (p.type === e$1.F32 && (d2 = new i$4(t2, p.byteOffset, f2, g2)), p.type === e$1.U8 && (d2 = new O(t2, p.byteOffset, f2, g2)), p.type === e$1.U16 && (d2 = new E$1(t2, p.byteOffset, f2, g2))), null == d2 ? this._dbg(ve.VerboseAPI, "[Unsupported Feature] Unsupported view for Color (" + p + ")") : n2 = new t$5(d2.typedBuffer, y2, p.ncomp);
            break;
          case i$3.FeatureIndex:
            break;
          default:
            this._dbg(ve.VerboseAPI, "[Unsupported Feature] Unsupported semantic (" + m3.sem + "). Skipping vertex attribute.");
        }
      } catch (h) {
        this._dbg(ve.VerboseAPI, "Error Creating buffer (" + h + "). Skipping vertex attribute.");
      }
    }
    if (e2.index) {
      const r3 = e2.index.view, i3 = void 0, s3 = r3.byteOffset + r3.byteCount;
      switch (e2.index.view.type) {
        case e$1.U16:
          m2 = new g$1(t2, r3.byteOffset, i3, s3);
          break;
        case e$1.U32:
          m2 = new B(t2, r3.byteOffset, i3, s3);
          break;
        case e$1.U8:
        default:
          this._dbg(ve.Error, "[Unsupported Feature] index type not supported (" + r3.type + ").");
      }
    }
    if (null == m2 && null != s2) {
      const e3 = s2.count;
      if (e3 < 65535) {
        const t3 = new Uint16Array(e3);
        m2 = new g$1(t3);
      } else {
        const t3 = new Uint32Array(e3);
        m2 = new B(t3);
      }
      for (let t3 = 0; t3 < e3; t3++)
        m2.set(t3, t3);
    }
    return { positionView: s2, positionAttr: o2, colorAttr: n2, texCoord0Attr: a2, indicesView: m2, normalsView: l2, normalsAttr: c$12 };
  }
  _onRemoveFromCache(e2) {
    const t2 = l$2(this.view);
    t2 && t2.onRenderableEvicted(this, e2.handle, e2.totalMemory()), this.freeRenderable(e2.handle);
  }
  _dbg(e2, t2) {
    this._dbgFlags.has(e2) && (e2 === ve.Error ? s$4.getLogger(this).error(t2) : s$4.getLogger(this).warn(t2));
  }
};
e$6([y()], Ce.prototype, "_visibleGeometryChangedSchedulerHandle", void 0), e$6([y()], Ce.prototype, "layer", void 0), e$6([y()], Ce.prototype, "elevationOffset", null), Ce = e$6([c$3("esri.views.3d.layers.Tiles3DLayerView3D")], Ce);
const Te = Ce;
export {
  Te as default
};
