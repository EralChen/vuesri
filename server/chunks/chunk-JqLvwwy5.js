import { hG as n$1, aV as e$2, aX as y, a_ as c, o5 as c$1, n6 as A$1, o6 as i$2, aT as s$1, ce as d$1, bX as P$1, o7 as O, o8 as N, o9 as I$1, aQ as U$1, cd as b$1, oa as g, ob as j, oc as v, gs as l, od as z, oe as c$2, b0 as has, of as o$1, lb as x, kL as t$1, og as G, bJ as c$3, aW as n$2, oh as c$4 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var e$1, i$1, t, n, a, o;
!function(e2) {
  e2[e2.Binary = 0] = "Binary", e2[e2.JSON = 1] = "JSON";
}(e$1 || (e$1 = {})), function(e2) {
  e2[e2.TreeIndex = 0] = "TreeIndex", e2[e2.TreeStats = 1] = "TreeStats", e2[e2.TreeData = 2] = "TreeData", e2[e2.BrickBundles = 3] = "BrickBundles", e2[e2.Section = 4] = "Section", e2[e2.VariableStats = 5] = "VariableStats";
}(i$1 || (i$1 = {})), function(e2) {
  e2[e2.None = 1] = "None", e2[e2.Front = 2] = "Front", e2[e2.Back = 3] = "Back";
}(t || (t = {})), function(e2) {
  e2[e2.Low = 0] = "Low", e2[e2.Medium = 1] = "Medium", e2[e2.High = 2] = "High";
}(n || (n = {})), function(e2) {
  e2[e2.None = 0] = "None", e2[e2.StaticSections = 1] = "StaticSections", e2[e2.Slices = 2] = "Slices", e2[e2.DynamicSections = 4] = "DynamicSections", e2[e2.GhostShell = 8] = "GhostShell", e2[e2.Isosurface = 16] = "Isosurface", e2[e2.Quality = 32] = "Quality", e2[e2.SunLocation = 64] = "SunLocation", e2[e2.StaticSectionSelection = 128] = "StaticSectionSelection", e2[e2.ExaggerationAndOffset = 256] = "ExaggerationAndOffset", e2[e2.CurrentTime = 512] = "CurrentTime", e2[e2.CurrentVariable = 1024] = "CurrentVariable", e2[e2.DeleteIsosurface = 2048] = "DeleteIsosurface", e2[e2.ContainerVisibility = 4096] = "ContainerVisibility", e2[e2.RenderMode = 8192] = "RenderMode", e2[e2.Optimization = 16384] = "Optimization", e2[e2.VariableStyles = 32768] = "VariableStyles", e2[e2.VolumeStyles = 65536] = "VolumeStyles", e2[e2.AnalysisSlice = 131072] = "AnalysisSlice";
}(a || (a = {})), function(e2) {
  e2[e2.Isosurfaces = 0] = "Isosurfaces", e2[e2.DynamicSections = 1] = "DynamicSections", e2[e2.StaticSections = 2] = "StaticSections";
}(o || (o = {}));
function e(t2) {
  return new Promise((e2) => import("./chunk-InQHjBps.js").then((t3) => t3.v).then(({ default: n2 }) => {
    const r = n2({ locateFile: i, preinitializedWebGLContext: t2, onRuntimeInitialized: () => e2(r) });
  })).catch((t3) => {
    throw t3;
  });
}
function i(e2) {
  return n$1(`esri/libs/vxl/${e2}`);
}
var I;
!function(e2) {
  e2[e2.Lifetime = 1] = "Lifetime", e2[e2.RequestResponse = 2] = "RequestResponse", e2[e2.Rendering = 3] = "Rendering", e2[e2.Error = 4] = "Error";
}(I || (I = {}));
let U = class extends c$1 {
  constructor(e2) {
    super(e2), this._halfIntTexturesAvailable = false, this._textureFloatLinearAvailable = false, this._havePreparedWithAllLayers = false, this._renderPluginContext = null, this._vxlPromise = null, this._vxl = null, this._pluginIsActive = false, this._moreToLoad = false, this._viewportWidth = -1, this._viewportHeight = -1, this._newLayers = [], this._layers = /* @__PURE__ */ new Map(), this._rctx = null, this._renderTargetToRestore = null, this._lastFrameWasStationary = false, this._wasmMemBlockSizes = [512, 1024, 2048, 4096, 8192, 16384, 32768, 65536], this._wasmMemBlocks = /* @__PURE__ */ new Map(), this._dbgFlags = /* @__PURE__ */ new Set(), this._captureFrustum = false, this._frustum = null, this._frustumRenderableId = -1, this._renderCoordsHelper = null, this.produces = /* @__PURE__ */ new Map([[A$1.VOXEL, () => !!this._vxl && "local" === this.view.viewingMode]]), this.type = i$2.VOXEL, this.slicePlaneEnabled = true, this.isGround = false, this.layerUid = [];
  }
  _dbg(e2, t2) {
    this._dbgFlags.has(e2) && (e2 === I.Error ? s$1.getLogger(this).error(t2) : s$1.getLogger(this).warn(t2));
  }
  _removeRenderPlugin() {
    this._pluginIsActive && this.view._stage && (this._dbg(I.Lifetime, "--removeRenderPlugin--"), this.view._stage.removeRenderPlugin(this)), this._pluginIsActive = false;
  }
  initialize() {
    this._dbg(I.Lifetime, "--initialize--");
    for (const e2 of this._wasmMemBlockSizes)
      this._wasmMemBlocks.set(e2, 0);
    this.addHandles([d$1(() => this.view.ready, (e2) => {
      e2 && "local" === this.view.viewingMode ? (this._dbg(I.Lifetime, "view ready status changed to ready on a local view, calling addRenderPlugin"), this.view._stage.addRenderPlugin(this), this._pluginIsActive = true) : (this._dbg(I.Lifetime, "view ready status changed, not ready or not a local view!"), this._removeRenderPlugin());
    }, P$1), d$1(() => this.view?.qualityProfile, (e2) => {
      this._dbg(I.Rendering, "qualityProfile changed to " + e2), this._vxl && this._vxl.set_quality(this._toWasmQuality(e2));
    }, P$1), d$1(() => this.view?.timeExtent, () => {
      if (this._vxl) {
        const e2 = this._getTimeArgs(this.view?.timeExtent);
        this._dbg(I.Rendering, "sceneView timeExtent changed to useTime=" + e2.useTime + " st=" + e2.startTime + " et=" + e2.endTime), this._vxl.set_scene_time_extent(e2.startTime, e2.endTime, e2.useTime), this._renderPluginContext.requestRender();
      }
    }, P$1), d$1(() => this.view?.stationary, (e2) => {
      this._vxl && e2 && !this._lastFrameWasStationary && this._renderPluginContext.requestRender();
    })]);
  }
  initializeRenderContext(e2) {
    this._dbg(I.Lifetime, "--initializeRenderContext--");
    const t2 = e2.renderContext.rctx;
    this._renderPluginContext = e2, this._rctx = e2.renderContext.rctx, this._halfIntTexturesAvailable = !!this._rctx.capabilities.textureNorm16, this._textureFloatLinearAvailable = this._rctx.capabilities.textureFloatLinear, this._initializeWasm(t2.gl);
  }
  uninitializeRenderContext() {
    this._renderPluginContext = null, this._rctx = null, this._dbg(I.Lifetime, "--uninitializeRenderContext--");
  }
  _restoreFramebuffer() {
    if (!this._renderTargetToRestore)
      return;
    const e2 = this._renderTargetToRestore.fbo;
    if (!!!this._rctx)
      return void this._dbg(I.Error, "no context in restoreFramebuffer!");
    this._rctx.bindFramebuffer(e2, true);
    const t2 = this._renderTargetToRestore.viewport;
    this._rctx.setViewport(t2.x, t2.y, t2.width, t2.height);
  }
  _bindPreviousDepthToSlot(e2, t2) {
    const s = !!this._rctx, r = !!this._renderTargetToRestore;
    if (!s || !r)
      return 0;
    const i2 = this._renderTargetToRestore.fbo.depthStencilTexture;
    return i2 ? (0 === t2 ? this._rctx.bindTexture(null, e2, true) : this._rctx.bindTexture(i2, e2, true), 1) : (this._dbg(I.Error, "no depth/stencil texture exists!"), 0);
  }
  _modifyResourceCount(e2, t2, s) {
    if (!this._rctx)
      return void this._dbg(I.Error, "modifyAllocation callback has no rendering context!");
    const r = e2;
    1 === s ? this._rctx.instanceCounter.increment(r, t2) : this._rctx.instanceCounter.decrement(r, t2);
  }
  _setBlendState(e2, t2, s, r) {
    this._rctx ? (this._rctx.setBlendingEnabled(1 === e2), this._rctx.setBlendFunction(t2, s), this._rctx.setBlendEquation(r)) : this._dbg(I.Error, "setBlendState callback has no rendering context!");
  }
  _setFrontFace(e2) {
    this._rctx ? this._rctx.setFrontFace(e2) : this._dbg(I.Error, "setFrontFace callback has no rendering context!");
  }
  _setDepthStencilStateFunction(e2, t2, s) {
    this._rctx ? (this._rctx.setDepthFunction(s), this._rctx.setDepthTestEnabled(1 === e2), this._rctx.setDepthWriteEnabled(1 === t2), this._rctx.setStencilTestEnabled(false), this._rctx.setStencilFunction(O.ALWAYS, 0, 255), this._rctx.setStencilOpSeparate(N.FRONT, I$1.KEEP, I$1.INCR, I$1.KEEP), this._rctx.setStencilOpSeparate(N.BACK, I$1.KEEP, I$1.DECR, I$1.KEEP)) : this._dbg(I.Error, "setDepthStencilStateFunction callback has no rendering context!");
  }
  _setRasterizerState(e2) {
    if (this._rctx)
      switch (e2) {
        case t.None:
          this._rctx.setFaceCullingEnabled(false);
          break;
        case t.Back:
          this._rctx.setCullFace(N.BACK), this._rctx.setFaceCullingEnabled(true);
          break;
        case t.Front:
          this._rctx.setCullFace(N.FRONT), this._rctx.setFaceCullingEnabled(true);
      }
    else
      this._dbg(I.Error, "setRasterizerState callback has no rendering context!");
  }
  _setViewport(e2, t2, s, r) {
    this._rctx ? this._rctx.setViewport(e2, t2, s, r) : this._dbg(I.Error, "setViewport callback has no rendering context!");
  }
  _updateMemoryUsage() {
    this._layers.forEach((e2, t2) => {
      if (e2.needMemoryUsageUpdate) {
        const s = this._vxl.estimate_memory_usage(t2);
        s >= 0 && (e2.needMemoryUsageUpdate = false, e2.layerView.setUsedMemory(s));
      }
    });
  }
  _syncRequestsResponses() {
    this._layers.forEach((e2, t2) => {
      const r = [];
      e2.responses.forEach((s, i2) => {
        r.push(i2), this._dbg(I.RequestResponse, "responding for requestID:" + i2 + " size:" + s.size), this._vxl.respond(t2, i2, s), s.requestType !== i$1.TreeIndex && s.requestType !== i$1.Section || (e2.needMemoryUsageUpdate = true);
      });
      const a2 = e2.responses;
      for (const s of r)
        a2.delete(s);
      const n2 = this._vxl.get_new_requests(t2), o2 = e2.abortController.signal;
      for (const l2 in n2) {
        e2.outstandingRequestCount += 1, 1 === e2.outstandingRequestCount && e2.layerView.updatingFlagChanged();
        const t3 = n2[l2], r2 = { responseType: "array-buffer", signal: o2, query: { ...e2.layerView.layer.customParameters, token: e2.layerView.layer.apiKey } };
        this._dbg(I.RequestResponse, "making requestID:" + l2 + " url:" + t3.url), U$1(t3.url, r2).then((s) => {
          e2.outstandingRequestCount -= 1, 0 === e2.outstandingRequestCount && e2.layerView.updatingFlagChanged(), this._dbg(I.RequestResponse, "have response for requestID:" + l2);
          let r3 = 0;
          if (s.data.byteLength > 0) {
            r3 = this._vxl._malloc(s.data.byteLength);
            const e3 = new Uint8Array(this._vxl.HEAPU8.buffer, r3, s.data.byteLength), t4 = new Uint8Array(s.data);
            for (let r4 = 0; r4 < s.data.byteLength; ++r4)
              e3[r4] = t4[r4];
          }
          a2.set(+l2, { responseType: t3.responseType, ptr: r3, size: s.data.byteLength, success: true, requestType: t3.requestType });
        }).catch((s) => {
          e2.outstandingRequestCount -= 1, 0 === e2.outstandingRequestCount && e2.layerView.updatingFlagChanged(), b$1(s) || (this._dbg(I.Error, `requestID:${l2} failed, error=${s.toString()}`), a2.set(+l2, { responseType: t3.responseType, ptr: 0, size: 0, success: false, requestType: t3.requestType }));
        });
      }
    });
  }
  updateWasmCamera(e2) {
    this._vxl.set_projection_matrix.apply(this._vxl, e2.projectionMatrix), this._vxl.set_view_matrix.apply(this._vxl, e2.viewMatrix), this._vxl.set_near_far(e2.near, e2.far);
  }
  isUpdating(e2) {
    if (!this._vxl && this._vxlPromise)
      return true;
    const t2 = this._layers.get(e2);
    return !!t2 && t2.outstandingRequestCount > 0;
  }
  getLayerTimes(e2) {
    const t2 = [];
    return this._layers.forEach((s, r) => {
      if (s.layerView.wasmLayerId === e2.wasmLayerId) {
        const s2 = this._vxl.get_layer_epoch_times(r, e2.layer.currentVariableId);
        for (let e3 = 0; e3 < s2.length; ++e3)
          t2.push(s2[e3]);
      }
    }), t2;
  }
  getCurrentLayerTimeIndex(e2) {
    let t2 = 0;
    return this._layers.forEach((s, r) => {
      s.layerView.wasmLayerId === e2.wasmLayerId && (t2 = this._vxl.get_layer_current_time_id(r));
    }), t2;
  }
  setEnabled(e2, t2) {
    this._layers.forEach((s, r) => {
      s.layerView.wasmLayerId === e2.wasmLayerId && (this._vxl.set_enabled(r, t2), s.needMemoryUsageUpdate = true, this._renderPluginContext.requestRender());
    });
  }
  setIsInScaleRange(e2, t2) {
    const s = this._layers.get(e2.wasmLayerId);
    s && t2 !== s.isInScaleRange && (s.isInScaleRange = t2, this._vxl.set_is_in_scale_range(e2.wasmLayerId, t2), s.needMemoryUsageUpdate = !t2, this._renderPluginContext.requestRender());
  }
  setStaticSections(e2, t2) {
    const s = { mask: a.StaticSections, staticSections: t2 };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setCurrentVariable(e2, t2) {
    const s = { mask: a.CurrentVariable, currentVariable: t2 };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setRenderMode(e2, t2) {
    const s = { mask: a.RenderMode, renderMode: t2 };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setVerticalExaggerationAndOffset(e2, t2, s, r) {
    const i2 = { mask: a.ExaggerationAndOffset, volStyleDesc: { volumeId: t2, verticalExaggeration: s, verticalOffset: r } };
    return this._doMaskedUIUpdate(e2, i2, true);
  }
  setVariableStyles(e2, t2) {
    const s = { mask: a.VariableStyles, variableStyles: t2 };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setVolumeStyles(e2, t2) {
    const s = { mask: a.VolumeStyles, volumeStyles: t2 };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setEnableDynamicSections(e2, t2) {
    const s = { mask: a.ContainerVisibility, containerIsVisible: t2, container: o.DynamicSections };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setEnableIsosurfaces(e2, t2) {
    const s = { mask: a.ContainerVisibility, containerIsVisible: t2, container: o.Isosurfaces };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setEnableSections(e2, t2) {
    const s = { mask: a.ContainerVisibility, containerIsVisible: t2, container: o.StaticSections };
    return this._doMaskedUIUpdate(e2, s, true);
  }
  setAnalysisSlice(e2, t2, s, r) {
    const i2 = { mask: a.AnalysisSlice, analysisSlice: { point: s, normal: r, enabled: t2 } };
    return this._doMaskedUIUpdate(e2, i2, true);
  }
  _doMaskedUIUpdate(e2, t2, s) {
    if (!this._vxl)
      return false;
    let r = false;
    return this._layers.forEach((s2, i2) => {
      if (s2.layerView.wasmLayerId === e2.wasmLayerId) {
        const e3 = { str: JSON.stringify(t2), byteCount: 0, ptr: 0, isReusable: false };
        this._allocateBlock(e3) && (r = 1 === this._vxl.handle_masked_ui_update(i2, e3.ptr, e3.byteCount), e3.isReusable || this._vxl._free(e3.ptr));
      }
    }), r && s && this._renderPluginContext.requestRender(), r;
  }
  _addTriangleToWasmBuffer(e2, t2, s, r, i2) {
    return e2[3 * t2] = s[0], e2[3 * t2 + 1] = s[1], e2[3 * t2 + 2] = s[2], e2[3 * (t2 += 1)] = r[0], e2[3 * t2 + 1] = r[1], e2[3 * t2 + 2] = r[2], e2[3 * (t2 += 1)] = i2[0], e2[3 * t2 + 1] = i2[1], e2[3 * t2 + 2] = i2[2], t2 += 1;
  }
  _addNormalToWasmBuffer(e2, t2, s) {
    return e2[3 * t2] = s[0], e2[3 * t2 + 1] = s[1], e2[3 * t2 + 2] = s[2], t2 += 1;
  }
  _doCaptureFrustum() {
    if (!this._vxl)
      return;
    const e2 = 36, t2 = e2 / 3, s = this._vxl._malloc(3 * e2 * Float32Array.BYTES_PER_ELEMENT), r = new Float32Array(this._vxl.HEAPF32.buffer, s, 3 * e2), i2 = this._vxl._malloc(3 * t2 * Float32Array.BYTES_PER_ELEMENT), a2 = new Float32Array(this._vxl.HEAPF32.buffer, i2, e2), n2 = this._frustum.points[g.NEAR_BOTTOM_LEFT], o2 = this._frustum.points[g.NEAR_BOTTOM_RIGHT], l2 = this._frustum.points[g.NEAR_TOP_RIGHT], h = this._frustum.points[g.NEAR_TOP_LEFT], d = this._frustum.points[g.FAR_BOTTOM_LEFT], u = this._frustum.points[g.FAR_BOTTOM_RIGHT], m = this._frustum.points[g.FAR_TOP_RIGHT], g$1 = this._frustum.points[g.FAR_TOP_LEFT];
    let p = 0, f = 0;
    const x2 = this._frustum.planes[j.NEAR];
    p = this._addTriangleToWasmBuffer(r, p, l2, o2, n2), f = this._addNormalToWasmBuffer(a2, f, x2), p = this._addTriangleToWasmBuffer(r, p, n2, h, l2), f = this._addNormalToWasmBuffer(a2, f, x2);
    const y2 = this._frustum.planes[j.FAR];
    p = this._addTriangleToWasmBuffer(r, p, d, u, m), f = this._addNormalToWasmBuffer(a2, f, y2), p = this._addTriangleToWasmBuffer(r, p, m, g$1, d), f = this._addNormalToWasmBuffer(a2, f, y2);
    const v2 = this._frustum.planes[j.TOP];
    p = this._addTriangleToWasmBuffer(r, p, m, l2, h), f = this._addNormalToWasmBuffer(a2, f, v2), p = this._addTriangleToWasmBuffer(r, p, h, g$1, m), f = this._addNormalToWasmBuffer(a2, f, v2);
    const b = this._frustum.planes[j.BOTTOM];
    p = this._addTriangleToWasmBuffer(r, p, n2, o2, u), f = this._addNormalToWasmBuffer(a2, f, b), p = this._addTriangleToWasmBuffer(r, p, u, d, n2), f = this._addNormalToWasmBuffer(a2, f, b);
    const w = this._frustum.planes[j.LEFT];
    p = this._addTriangleToWasmBuffer(r, p, h, n2, d), f = this._addNormalToWasmBuffer(a2, f, w), p = this._addTriangleToWasmBuffer(r, p, d, g$1, h), f = this._addNormalToWasmBuffer(a2, f, w);
    const T = this._frustum.planes[j.RIGHT];
    p = this._addTriangleToWasmBuffer(r, p, l2, m, u), f = this._addNormalToWasmBuffer(a2, f, T), p = this._addTriangleToWasmBuffer(r, p, u, o2, l2), f = this._addNormalToWasmBuffer(a2, f, T), -1 !== this._frustumRenderableId && this._vxl.remove_generic_mesh(this._frustumRenderableId), this._frustumRenderableId = this._vxl.add_generic_mesh(s, 3 * e2, i2, e2, 255, 0, 0, 64), this._vxl._free(s), this._vxl._free(i2), this._captureFrustum = false, this._renderPluginContext.requestRender();
  }
  captureFrustum() {
    null === this._renderCoordsHelper && (this._renderCoordsHelper = v.create(l.Local, z(false, this.view.spatialReference))), null === this._frustum && (this._frustum = new c$2(this._renderCoordsHelper)), this._captureFrustum = true, null !== this._renderPluginContext && this._renderPluginContext.requestRender();
  }
  toggleFullVolumeExtentDraw(e2) {
    this._vxl && this._layers.forEach((t2, s) => {
      t2.layerView.wasmLayerId === e2.wasmLayerId && (this._vxl.toggle_full_volume_extent_draw(s), this._renderPluginContext.requestRender());
    });
  }
  addVoxelLayer(e2) {
    if (!this._vxl) {
      const t3 = { layerView: e2, resolveCallback: null, rejectCallback: null }, s = new Promise((e3, s2) => {
        t3.resolveCallback = e3, t3.rejectCallback = s2;
      });
      return this._newLayers.push(t3), s;
    }
    const t2 = this._addVoxelLayer(e2);
    return t2 < 0 ? Promise.reject(-1) : Promise.resolve(t2);
  }
  removeVoxelLayer(e2) {
    if (!this._vxl) {
      const t3 = this._newLayers.findIndex((t4) => e2.uid === t4.layerView.uid);
      t3 >= 0 && (this._newLayers[t3].resolveCallback(-1), this._newLayers.splice(t3, 1));
      const s2 = this._newLayers.length;
      return 0 === s2 && (this._dbg(I.Lifetime, " no voxel layers left after removing a layer, removing RenderPlugin and destroying"), this.destroy()), s2;
    }
    let t2 = -1;
    this._layers.forEach((s2, r) => {
      if (s2.layerView.wasmLayerId === e2.wasmLayerId) {
        t2 = r, s2.abortController.abort(), this._vxl.remove_layer(t2);
        const i2 = this.layerUid.indexOf(e2.layer.uid);
        -1 !== i2 && this.layerUid.splice(i2, 1);
      }
    }), t2 >= 0 && this._layers.delete(t2);
    const s = this._layers.size;
    return 0 === s && (this._dbg(I.Lifetime, " no voxel layers left after removing a layer, removing RenderPlugin and destroying"), this.destroy()), s;
  }
  _getBlockSize(e2) {
    for (const t2 of this._wasmMemBlockSizes)
      if (e2 < t2)
        return t2;
    return -1;
  }
  _allocateBlock(e2) {
    e2.byteCount = this._vxl.lengthBytesUTF8(e2.str) + 1;
    const t2 = this._getBlockSize(e2.byteCount);
    return t2 < 0 ? (e2.isReusable = false, e2.ptr = this._vxl._malloc(e2.byteCount)) : (e2.isReusable = true, e2.ptr = this._wasmMemBlocks.get(t2), 0 === e2.ptr && (e2.ptr = this._vxl._malloc(t2), this._wasmMemBlocks.set(t2, e2.ptr))), 0 !== e2.ptr && (this._vxl.stringToUTF8(e2.str, e2.ptr, e2.byteCount), true);
  }
  _getTimeArgs(e2) {
    let t2 = -Number.MAX_VALUE, s = Number.MAX_VALUE, r = false;
    return null != e2 && (e2.isAllTime ? r = true : (null != e2.start && (r = true, t2 = e2.start.getTime() / 1e3), null != e2.end && (r = true, s = e2.end.getTime() / 1e3))), { startTime: t2, endTime: s, useTime: r };
  }
  _addVoxelLayer(e2) {
    const t2 = e2.layer;
    let s = -1;
    const i2 = t2.getConfiguration();
    if (i2.length < 1)
      return -1;
    const a2 = { str: i2, byteCount: 0, ptr: 0, isReusable: false };
    if (!this._allocateBlock(a2))
      return -1;
    const n2 = this._getTimeArgs(this.view?.timeExtent), o2 = this.view.spatialReference.isWGS84 && t2.spatialReference.isWGS84 ? 111319.49079327357 : 1;
    if (s = this._vxl.add_layer(t2.serviceRoot, a2.ptr, a2.byteCount, o2, o2, n2.startTime, n2.endTime, n2.useTime, this._toWasmQuality(this.view.qualityProfile)), a2.isReusable || this._vxl._free(a2.ptr), s >= 0) {
      t2.test?.constantUpscaling && (this._setUpscalingLimits(0, 0.25, 0.25), this._setUpscalingLimits(1, 0.5, 0.5), this._setUpscalingLimits(2, 0.75, 0.75));
      const i3 = new AbortController();
      if (this._layers.set(s, { layerView: e2, responses: /* @__PURE__ */ new Map(), outstandingRequestCount: 0, abortController: i3, needMemoryUsageUpdate: false, isInScaleRange: true }), this.layerUid.push(e2.layer.uid), !this._halfIntTexturesAvailable || has("mac")) {
        const t3 = [];
        let s2 = "";
        for (const r of e2.layer.variables)
          "Int16" !== r.renderingFormat.type && "UInt16" !== r.renderingFormat.type || (t3.push(r.name), r.id === e2.layer.currentVariableId && (s2 = r.name));
        "" !== s2 && s$1.getLogger(this).error("#addVoxelLayer_error()", e2.layer, `The voxel layer '${e2.layer.title}' cannot render the current variable '${s2}' in this browser`), t3.length > 0 && s$1.getLogger(this).warn("#addVoxelLayer_warning()", e2.layer, `The voxel layer '${e2.layer.title}' cannot render the variables '${t3.toString()}' in this browser`);
      }
      if (!this._textureFloatLinearAvailable) {
        const t3 = [];
        let s2 = "";
        for (const r of e2.layer.variables)
          "Float32" === r.renderingFormat.type && (t3.push(r.name), r.id === e2.layer.currentVariableId && (s2 = r.name));
        "" !== s2 && s$1.getLogger(this).error("#addVoxelLayer_error()", e2.layer, `The voxel layer '${e2.layer.title}' cannot render the current variable '${s2}' in this browser`), t3.length > 0 && s$1.getLogger(this).warn("#addVoxelLayer_warning()", e2.layer, `The voxel layer '${e2.layer.title}' cannot render the variables '${t3.toString()}' in this browser`);
      }
      return has("esri-mobile") && s$1.getLogger(this).warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."), s;
    }
    return -1;
  }
  prepareRender(e2) {
    if (!this._vxl)
      return;
    const t2 = e2.bindParameters.camera.viewForward, s = e2.bindParameters.camera.eye;
    this._vxl.update_camera_pos_and_direction(s[0], s[1], s[2], t2[0], t2[1], t2[2]);
    const r = this._vxl.cull();
    this._dbg(I.RequestResponse, "missingResourceCount=" + r), this._moreToLoad = r > 0, this._havePreparedWithAllLayers = 0 === this._newLayers.length, this._updateMemoryUsage();
  }
  renderNode(e2) {
    if (!this._vxl)
      return;
    for (const s of this._newLayers) {
      const e3 = this._addVoxelLayer(s.layerView);
      -1 === e3 ? s.rejectCallback(-1) : s.resolveCallback(e3);
    }
    if (this._newLayers = [], 0 === this._layers.size)
      return void this._dbg(I.Error, "No voxel layers but RenderPlugin instance is being asked to render!");
    this._lastFrameWasStationary = this.view.stationary, this._syncRequestsResponses(), this._beforeDraw(), this._vxl.begin_color_frame(!this.view._stage.renderer.isFeatureEnabled(o$1.HighResolutionVoxel), e2.bindParameters.lighting.mainLight.direction[0], e2.bindParameters.lighting.mainLight.direction[1], e2.bindParameters.lighting.mainLight.direction[2]);
    const t2 = this._renderTargetToRestore.viewport;
    t2.width === this._viewportWidth && t2.height === this._viewportHeight || (this._viewportWidth = t2.width, this._viewportHeight = t2.height, this._vxl.set_viewport(t2.width, t2.height), this._layers.forEach((e3) => {
      e3.needMemoryUsageUpdate = true;
    })), 0 === t2.x && 0 === t2.y || this._dbg(I.Error, "Unsupported viewport parameters detected!"), this.updateWasmCamera(e2.bindParameters.camera), this._captureFrustum && (this._frustum.update(e2.bindParameters.camera), this._doCaptureFrustum()), this._vxl.draw(), this._afterDraw(), (this._moreToLoad || !this._havePreparedWithAllLayers && this._layers.size > 0) && this._renderPluginContext.requestRender();
  }
  destroy() {
    this._dbg(I.Lifetime, "--destroy--"), this._removeRenderPlugin(), this._vxl && (this._layers.forEach((e2) => {
      e2.abortController.abort();
    }), this._wasmMemBlocks.forEach((e2) => {
      0 !== e2 && this._vxl._free(e2);
    }), this._vxl.uninitialize_voxel_wasm(), this._vxl = null);
  }
  _initializeWasm(e$12) {
    return this._vxl ? Promise.resolve() : (this._vxlPromise || (this._vxlPromise = e(e$12).then((e2) => {
      if (this._vxl = e2, this._vxlPromise = null, this._newLayers.length <= 0)
        return this._dbg(I.Lifetime, " no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"), void this.destroy();
      const t2 = this._getTimeArgs(this.view?.timeExtent), s = this._vxl.addFunction(this._restoreFramebuffer.bind(this), "v"), r = this._vxl.addFunction(this._setBlendState.bind(this), "viiii"), i2 = this._vxl.addFunction(this._setFrontFace.bind(this), "vi"), a2 = this._vxl.addFunction(this._setRasterizerState.bind(this), "vi"), n2 = this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this), "viii"), o2 = this._vxl.addFunction(this._setViewport.bind(this), "viiii"), l2 = this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this), "iii"), h = this._vxl.addFunction(this._modifyResourceCount.bind(this), "viii"), d = this._halfIntTexturesAvailable && !has("mac"), u = this._textureFloatLinearAvailable;
      this._vxl.initialize_voxel_wasm(s, r, i2, a2, n2, o2, l2, h, t2.startTime, t2.endTime, t2.useTime, d, u), this._renderPluginContext && this._renderPluginContext.requestRender();
    }).catch(() => {
      for (const e2 of this._newLayers)
        e2.rejectCallback(-2);
      this._dbg(I.Error, " WASM failed to download, removing RenderPlugin and destroying"), this.destroy();
    })), this._vxlPromise);
  }
  pickDepth(e2, t2, s) {
    if (!this._vxl || !this._rctx || 0 === this._layers.size)
      return null;
    const r = s.viewport[3] - t2;
    if (e2 < 0 || e2 > s.viewport[2] || t2 < 0 || t2 > s.viewport[3])
      return this._dbg(I.Error, `[js] pickDepth: outOfRange, screenXY=[${e2.toFixed(0)}, ${r.toFixed(0)}]]`), null;
    this._beforeDraw();
    const i2 = s.viewForward, a2 = s.eye;
    this._vxl.update_camera_pos_and_direction(a2[0], a2[1], a2[2], i2[0], i2[1], i2[2]), this.updateWasmCamera(s), this._vxl.begin_frame();
    const n2 = this._vxl.pick_depth(e2, r);
    if (this._afterDraw(), n2.success) {
      return n2.distanceToCamera;
    }
    return null;
  }
  pickObject(e2, t2, s, r) {
    if (!this._vxl || !this._rctx || 0 === this._layers.size)
      return null;
    const i2 = Math.round(e2), a2 = Math.round(t2);
    if (i2 < 0 || i2 > s.viewport[2] || a2 < 0 || a2 > s.viewport[3])
      return this._dbg(I.Error, `[js] pickObject: outOfRange, screenXY=[${i2}, ${a2}], vp=[${s.viewport.toString()}]`), null;
    this._beforeDraw();
    const n2 = s.viewForward, o2 = s.eye;
    this._vxl.update_camera_pos_and_direction(o2[0], o2[1], o2[2], n2[0], n2[1], n2[2]), this.updateWasmCamera(s), this._vxl.begin_frame();
    let l2 = null;
    if (0 === r.length)
      l2 = this._vxl.pick_object(i2, a2, 0, 0);
    else {
      const e3 = { str: JSON.stringify({ layerIds: r }), byteCount: 0, ptr: 0, isReusable: false };
      this._allocateBlock(e3) && (l2 = this._vxl.pick_object(i2, a2, e3.ptr, e3.byteCount), e3.isReusable || this._vxl._free(e3.ptr));
    }
    return this._afterDraw(), l2;
  }
  _beforeDraw() {
    this._renderTargetToRestore = { fbo: this._rctx.getBoundFramebufferObject(), viewport: this._rctx.getViewport() }, this._rctx.setPolygonOffsetFillEnabled(false), this._rctx.setScissorTestEnabled(false), this._rctx.setColorMask(true, true, true, true);
  }
  _afterDraw() {
    this._renderTargetToRestore.fbo = null, this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(), this._vxl.get_active_texture_unit()), this._rctx.externalVertexArrayObjectUpdate(), this._rctx.externalVertexBufferUpdate(), this._rctx.externalProgramUpdate();
  }
  intersect(e2, t2, s, r, i2) {
    if (!this._vxl || !this._rctx || 0 === this._layers.size || !e2.options.selectionMode || e2.options.isFiltered)
      return;
    if (null == i2 || i2[0] < 0 || i2[0] > e2.camera.viewport[2] || i2[1] < 0 || i2[1] > e2.camera.viewport[3])
      return this._dbg(I.Error, `[js] VoxelWasmPerScene.intersect: outOfRange, screenXY=[${i2[0].toFixed(0)}, ${i2[1].toFixed(0)}]`), null;
    const a2 = [];
    this._layers.forEach((t3) => {
      e2.options.filteredLayerUids.includes(t3.layerView.layer.uid) && a2.push(t3.layerView.wasmLayerId);
    });
    const n2 = this.pickObject(i2[0], i2[1], e2.camera, a2);
    if (null == n2 || -1 === n2.layerId)
      return;
    const o2 = this._layers.get(n2.layerId);
    if (o2) {
      const t3 = o2.layerView.layer.uid, i3 = n2.distanceToCamera / x(s, r), a3 = n$2();
      a3[0] = n2.worldX, a3[1] = n2.worldY, a3[2] = n2.worldZ;
      const l2 = {};
      if (null != n2.continuousValue && null != n2.continuousValueUnits ? l2["Voxel.ServiceValue"] = `${n2.continuousValue.toLocaleString()} ${n2.continuousValueUnits}` : null != n2.uniqueValueLabel && null != n2.uniqueValue ? l2["Voxel.ServiceValue"] = `${n2.uniqueValueLabel} (${n2.uniqueValue})` : null != n2.uniqueValue && (l2["Voxel.ServiceValue"] = `${n2.uniqueValue}`), l2["Voxel.ServiceVariableLabel"] = n2.variableLabel, l2["Voxel.Position"] = n2.voxelSpacePosition, null != n2.epochTime && null != n2.nativeTime && null != n2.nativeTimeUnits) {
        const e3 = new Date(n2.epochTime);
        l2["Voxel.ServiceLocalTime"] = e3.toString(), l2["Voxel.ServiceNativeTime"] = `${n2.nativeTime.toLocaleString()} ${n2.nativeTimeUnits}`;
      }
      null != n2.depth && null != n2.depthUnits && (l2["Voxel.ServiceDepth"] = `${n2.depth.toLocaleString()} ${n2.depthUnits}`);
      const u = n2.faceNormal;
      l2["Voxel.WorldPosition"] = `[${a3[0]}, ${a3[1]}, ${a3[2]}]`;
      const _ = (e3) => {
        const s2 = new c$4(a3, t3, () => this._createVoxelGraphic(o2.layerView.layer, l2));
        e3.set(this.type, s2, i3, u);
      }, c2 = e2.results, m = e2.options.store === t$1.ALL;
      if ((null == c2.min.dist || i3 < c2.min.dist) && _(c2.min), (null == c2.max.dist || i3 > c2.max.dist) && _(c2.max), m) {
        const t4 = G(e2.ray);
        _(t4), e2.results.all.push(t4);
      }
    }
  }
  _createVoxelGraphic(e2, s) {
    return new c$3({ layer: e2, sourceLayer: e2, attributes: s });
  }
  _toWasmQuality(e2) {
    switch (e2) {
      case "low":
        return 0;
      case "medium":
        return 1;
      case "high":
        return 2;
    }
  }
  _setUpscalingLimits(e2, t2, s) {
    this._vxl && this._vxl.set_upscaling_limits(e2, t2, s);
  }
};
e$2([y({ constructOnly: true })], U.prototype, "view", void 0), U = e$2([c("esri.layers.VoxelWasmPerSceneView")], U);
const k = U;
export {
  k as default
};
