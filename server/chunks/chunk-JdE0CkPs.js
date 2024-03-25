import { m5 as h$1, aV as e, aX as y, a_ as c, bZ as S$1, aT as s$1, ce as d$1, m6 as A, aQ as U$1, cd as b$1, m7 as r } from "./chunk-ejFG4zJ0.js";
import { d, u, m as m$1 } from "./chunk-uXZZIsGB.js";
import { n } from "./chunk-GihUd-4N.js";
import { e as e$1 } from "./chunk-ItRUmXQG.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class s extends h$1 {
  constructor(r2) {
    super("Lyr3DWorker", "process", { process: (r3) => r3.inputs }, r2, { hasInitialize: true });
  }
  destroyWasm() {
    return this.broadcast({}, "destroyWasm");
  }
}
var m, b;
!function(e2) {
  e2[e2.Lifetime = 0] = "Lifetime", e2[e2.Jobs = 1] = "Jobs", e2[e2.Renderables = 2] = "Renderables";
}(m || (m = {})), function(e2) {
  e2[e2.Critical = 0] = "Critical", e2[e2.Error = 1] = "Error", e2[e2.Warning = 2] = "Warning", e2[e2.Info = 3] = "Info";
}(b || (b = {}));
let f = class extends S$1 {
  constructor(e2) {
    super(e2), this._lyr3DMainPromise = null, this._lyr3DMain = null, this._layers = /* @__PURE__ */ new Map(), this._debugFlags = /* @__PURE__ */ new Set(), this._debugLevel = b.Critical, this._pulseTaskHandle = null, this._session = null, this._debugFlags.add(m.Lifetime), this._debugFlags.add(m.Jobs), this._debugFlags.add(m.Renderables);
  }
  _debugLog(e2, t, i, s2 = true) {
    if (this._debugFlags.has(e2) && this._debugLevel >= t) {
      const e3 = s2 ? `[js] ${i}` : `${i}`;
      t === b.Critical || t === b.Error ? s$1.getLogger(this).error(e3) : t === b.Warning && s$1.getLogger(this).warn(e3), s$1.getLogger(this).info(e3);
    }
  }
  initialize() {
    this._debugLevel > b.Warning && (s$1.getLogger(this).level = "info"), this._debugLog(m.Lifetime, b.Info, "Lyr3DWasmPerSceneView.initialize()"), this.addHandles([d$1(() => this.view.state?.contentCamera, () => this._updateWasmCamera())]), this._pulseTaskHandle = A({ preRender: () => this._pulseTask() });
  }
  destroy() {
    this._debugLog(m.Lifetime, b.Info, "Lyr3DWasmPerSceneView.destroy()"), this._lyr3DMain && (this._layers.forEach((e3) => {
      e3.abortController.abort();
    }), this._lyr3DMain.uninitialize_lyr3d_wasm(), this._lyr3DMain = null);
    const e2 = this._worker;
    e2 && e2.destroyWasm().then(() => {
      this._worker?.destroy(), this._worker = null;
    }), this._pulseTaskHandle?.remove(), this._pulseTaskHandle = null;
  }
  add3DTilesLayerView(e2) {
    return this._lyr3DMain ? this._add3DTilesLayerView(e2) : (this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"), d);
  }
  remove3DTilesLayerView(e2) {
    if (!this._lyr3DMain)
      return this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"), 0;
    this._doRemoveLayerView(e2);
    const t = this._layers.size;
    return 0 === t && (this._debugLog(m.Lifetime, b.Info, "Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"), this.destroy()), t;
  }
  setEnabled(e2, t) {
    if (!this._lyr3DMain)
      return void this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!");
    const i = this._layers.get(e2.wasmLayerId);
    i && (this._lyr3DMain.set_enabled(e2.wasmLayerId, t), i.needMemoryUsageUpdate = true);
  }
  setLayerOffset(e2, t) {
    if (!this._lyr3DMain)
      return void this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!");
    this._layers.get(e2.wasmLayerId) && this._lyr3DMain.set_carto_offset_z(e2.wasmLayerId, t);
  }
  getAttributionText() {
    if (!this._lyr3DMain)
      return this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"), [];
    return this._lyr3DMain.get_current_attribution_text().split("|");
  }
  onRenderableEvicted(e2, t, i) {
    if (!this._lyr3DMain)
      return void this._debugLog(m.Lifetime, b.Error, "Lyr3DWasmPerSceneView.onRenderableEvicted() called when WASM wasn't loaded!");
    this._layers.get(e2.wasmLayerId) && this._lyr3DMain.on_renderable_evicted(e2.wasmLayerId, t, i);
  }
  isUpdating(e2) {
    if (!this._lyr3DMain && this._lyr3DMainPromise)
      return true;
    const t = this._layers.get(e2);
    return !!t && (t.outstandingJobCount > 0 || t.outstandingRenderableCount > 0);
  }
  initializeWasm() {
    return this._lyr3DMain ? Promise.resolve() : (this._debugLog(m.Lifetime, b.Info, "Lyr3DWasmPerSceneView.initializeWasm()"), this._lyr3DMainPromise || (this._lyr3DMainPromise = n().then((e2) => {
      this._lyr3DMain = e2, this._lyr3DMainPromise = null;
      const t = this._lyr3DMain.addFunction(this._onNewJob.bind(this), "v"), i = this._lyr3DMain.addFunction(this._onNewRenderable.bind(this), "v"), r2 = this._lyr3DMain.addFunction(this._freeRenderables.bind(this), "viii"), s$12 = this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this), "viiii"), n2 = this._lyr3DMain.addFunction(this._onWasmError.bind(this), "viiii"), a = "global" === this.view.viewingMode, o = this.view.renderSpatialReference?.isWebMercator ? 3857 : this.view.renderSpatialReference?.wkid ?? -1, l = this.view.heightModelInfo?.heightModel, d2 = !l || "gravity-related-height" === l;
      return this._lyr3DMain.initialize_lyr3d_wasm(n2, t, i, r2, s$12, a, d2, o, this._debugLevel) ? (this._worker = new s(e$1(this.view.resourceController)), this._worker.promise ? this._worker.promise : void 0) : (this._lyr3DMain = null, void this._debugLog(m.Lifetime, b.Critical, "Lyr3d Main WASM failed to initialize", false));
    }).catch((e2) => {
      this._debugLog(m.Lifetime, b.Critical, `Lyr3d WASM failed to download error = ${e2}`, false);
    })), this._lyr3DMainPromise);
  }
  _pulseTask() {
    if (this._lyr3DMain) {
      let e2 = 0;
      this._layers.forEach((t2) => {
        e2 += t2.layerView.usedMemory;
      }), e2 /= 1048576;
      const t = this.view.resourceController.memoryController, i = t.usedMemory * t.maxMemory - e2, r2 = t.maxMemory - i + t.additionalCacheMemory;
      this._lyr3DMain.frame_pulse(r2, e2, i, t.maxMemory);
    }
  }
  _incrementJobCount(e2) {
    e2.outstandingJobCount += 1, 1 === e2.outstandingJobCount && e2.outstandingRenderableCount < 1 && e2.layerView.updatingFlagChanged();
  }
  _decrementJobCount(e2) {
    e2.outstandingJobCount -= 1, 0 === e2.outstandingJobCount && e2.outstandingRenderableCount < 1 && e2.layerView.updatingFlagChanged();
  }
  _incrementRenderableCount(e2) {
    e2.outstandingRenderableCount += 1, e2.outstandingJobCount < 1 && 1 === e2.outstandingRenderableCount && e2.layerView.updatingFlagChanged();
  }
  _decrementRenderableCount(e2) {
    e2.outstandingRenderableCount -= 1, e2.outstandingJobCount < 1 && 0 === e2.outstandingRenderableCount && e2.layerView.updatingFlagChanged();
  }
  _onJobFailed(e2, t, i) {
    t.error.length && this._debugLog(m.Jobs, b.Error, t.error, false), this._lyr3DMain && this._lyr3DMain.on_job_failed(i.jobId, i.desc), this._decrementJobCount(e2);
  }
  _onJobSucceeded(e2, t, i) {
    if (this._lyr3DMain) {
      const e3 = t.data.byteLength, r2 = this._lyr3DMain._malloc(e3);
      new Uint8Array(this._lyr3DMain.HEAPU8.buffer, r2, e3).set(t.data), this._lyr3DMain.on_job_completed(i.jobId, t.jobDescJson, r2, e3), this._lyr3DMain._free(r2);
    }
    this._decrementJobCount(e2);
  }
  _getRequestPromises(e2, i) {
    const r2 = [];
    for (const s2 of e2) {
      const e3 = new URL(s2), n2 = e3.searchParams.get("session");
      n2 ? this._session = n2 : this._session && e3.searchParams.append("session", this._session), r2.push(U$1(e3.toString(), i).then((e4) => e4.data));
    }
    return r2;
  }
  _onNewJob() {
    const e2 = this._lyr3DMain.get_next_job(), t = this._layers.get(e2.layerId);
    if (!t)
      return;
    this._incrementJobCount(t);
    const i = t.abortController.signal, r2 = { responseType: "array-buffer", signal: i, query: { ...t.customParameters, token: t.apiKey } }, n2 = { inputs: [], jobDescJson: e2.desc, isMissingResourceCase: false }, a = this._getRequestPromises(e2.urls, r2);
    Promise.all(a).then((e3) => (n2.inputs = e3, this._worker.invoke(n2, i))).then((e3) => e3).catch((t2) => (b$1(t2) ? this._debugLog(m.Jobs, b.Warning, `job ${e2.jobId} was cancelled.`) : this._debugLog(m.Jobs, b.Error, `job ${e2.jobId} failed with error ${t2}.`), { status: u.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [], inputs: [] })).then((a2) => {
      if (a2.status === u.Failed)
        this._onJobFailed(t, a2, e2);
      else if (a2.status === u.Succeeded)
        this._onJobSucceeded(t, a2, e2);
      else if (a2.status === u.MissingInputs) {
        const o = this._getRequestPromises(a2.missingInputUrls, r2);
        Promise.all(o).then((e3) => {
          n2.jobDescJson = a2.jobDescJson, a2.originalInputs ? n2.inputs = a2.originalInputs : n2.inputs = [], n2.isMissingResourceCase = true;
          for (const t2 of e3)
            n2.inputs.push(t2);
          return this._worker.invoke(n2, i);
        }).then((i2) => {
          i2.status === u.Failed ? this._onJobFailed(t, i2, e2) : i2.status === u.Succeeded && this._onJobSucceeded(t, i2, e2);
        }).catch((i2) => {
          this._decrementJobCount(t), b$1(i2) ? this._debugLog(m.Jobs, b.Warning, `job ${e2.jobId} was cancelled.`) : this._debugLog(m.Jobs, b.Error, `job ${e2.jobId} failed with error2 ${i2}.`), this._lyr3DMain && this._lyr3DMain.on_job_failed(e2.jobId, e2.desc);
        });
      }
    });
  }
  _onNewRenderable() {
    const e2 = this._lyr3DMain.get_next_renderable(), t = e2.meshData;
    if (t.data && t.data.byteLength > 0) {
      const e3 = t.data.slice();
      t.data = e3;
    }
    const i = this._layers.get(e2.layerId);
    i && (this._incrementRenderableCount(i), i.layerView.createRenderable(e2).then((t2) => {
      this._lyr3DMain && this._lyr3DMain.on_renderable_created(true, e2.layerId, e2.handle, t2.memUsageBytes), this._decrementRenderableCount(i);
    }).catch((t2) => {
      b$1(t2) || this._debugLog(m.Renderables, b.Error, `createRenderable failed with error ${t2}.`), this._lyr3DMain && this._lyr3DMain.on_renderable_created(false, e2.layerId, e2.handle, 0), this._decrementRenderableCount(i);
    }));
  }
  _freeRenderables(e2, t, i) {
    if (i < 1)
      return;
    const r2 = this._layers.get(e2);
    if (!r2)
      return;
    const s2 = r2.layerView, n2 = [], a = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, i);
    for (let o = 0; o < i; ++o)
      n2.push(a[o]);
    for (let o = 0; o < i; ++o)
      s2.freeRenderable(n2[o]);
  }
  _setRenderableVisibility(e2, t, i, r2) {
    if (r2 < 1)
      return;
    const s2 = this._layers.get(e2);
    if (!s2)
      return;
    const n2 = s2.layerView, a = [], o = [], l = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, r2), d2 = new Uint8Array(this._lyr3DMain.HEAPU8.buffer, i, r2);
    for (let h = 0; h < r2; ++h)
      a.push(l[h]), o.push(1 === d2[h]);
    n2.setRenderableVisibility(a, o, r2);
  }
  _onWasmError(e2, t, i, r2) {
    this._lyr3DMain && this._debugLog(i, r2, this._lyr3DMain.UTF8ToString(e2, t), false);
  }
  _doRemoveLayerView(e2) {
    const t = this._layers.get(e2.wasmLayerId);
    return !!t && (t.abortController.abort(), this._lyr3DMain.remove_layer(e2.wasmLayerId), this._layers.delete(e2.wasmLayerId), true);
  }
  _add3DTilesLayerView(e2) {
    const t = e2.layer;
    if (!t.url)
      return m$1;
    const i = this._lyr3DMain.get_next_layer_id(), r$1 = new AbortController();
    this._layers.set(i, { layerView: e2, abortController: r$1, needMemoryUsageUpdate: false, outstandingJobCount: 0, outstandingRenderableCount: 0, customParameters: t.customParameters, apiKey: t.apiKey });
    const s2 = t.elevationInfo?.offset ?? 0, n2 = t.elevationInfo?.unit ? r(t.elevationInfo?.unit) : 1;
    return this._lyr3DMain.add_layer(t.url, i, s2 * n2) ? (this._updateWasmCamera(), i) : (this._layers.delete(i), m$1);
  }
  _updateWasmCamera() {
    const e2 = this.view.state?.contentCamera;
    if (!e2 || !this._lyr3DMain)
      return;
    const { eye: t, center: i, up: r2, near: s2, far: n2, fovY: a } = e2, o = [e2.viewport[2], e2.viewport[3]], l = e2.width / e2.height;
    this._lyr3DMain.set_camera_parameters({ eye: t, center: i, up: r2, near: s2, far: n2, fov: a, aspectRatio: l, viewport: o });
  }
};
e([y({ constructOnly: true })], f.prototype, "view", void 0), f = e([c("esri.layers.Lyr3DWasmPerSceneView")], f);
const w = f;
export {
  w as default
};
