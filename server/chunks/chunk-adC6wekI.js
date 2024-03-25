import { aO as s, bO as G, fx as l, ce as d$1, bX as P$1, fy as o, fz as i$1, eB as t$1, fA as P, fB as n$1, aB as f$1, fC as h, fD as _$1, fE as z$1, fF as o$1, aT as s$1, aV as e, aX as y, a_ as c, aW as n$2, eu as u$1, fG as t } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { i } from "./chunk-8KqbLGAY.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var W;
!function(e2) {
  e2[e2.API = 1] = "API", e2[e2.VerboseAPI = 2] = "VerboseAPI", e2[e2.Error = 3] = "Error";
}(W || (W = {}));
const T = n$2(), x = n$2();
let E = class extends i(n(u$1)) {
  constructor() {
    super(...arguments), this._suspendedHandle = null, this._usedMemory = 0, this._futureMemory = 0, this.type = "voxel-3d", this.slicePlaneEnabled = false, this._wasmLayerId = -1, this.ignoresMemoryFactor = true, this._dbgFlags = /* @__PURE__ */ new Set();
  }
  get baseUrl() {
    return this.layer.parsedUrl?.path ?? "";
  }
  get wasmLayerId() {
    return this._wasmLayerId;
  }
  initialize() {
    if (this._dbgFlags.add(W.Error), "local" !== this.view.viewingMode)
      throw new s("voxel:unsupported-viewingMode", "Voxel layers support local viewingMode only.", {});
    if (!!!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)
      throw new s("voxel:missing-color-buffer-float", "Voxel layers require the WebGL2 extension EXT_color_buffer_float", {});
    const e2 = this.layer.spatialReference;
    if (!G(e2, this.view.spatialReference))
      throw new s("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
    const t2 = this.layer.currentVariableId, r = this.layer.getVolume(t2), o$12 = this.layer.getVariable(t2);
    if (null != r && null != o$12) {
      const e3 = r.dimensions[0], s2 = r.dimensions[1], t3 = r.zDimension;
      if (t3 > 1) {
        const i2 = r.dimensions[t3], a = e3.size * s2.size * i2.size;
        let l2 = 1;
        switch (o$12.renderingFormat.type) {
          case "Int16":
          case "UInt16":
            l2 = 2;
            break;
          case "Int32":
          case "UInt32":
          case "Float32":
            l2 = 4;
        }
        this._futureMemory = l2 * a;
      }
    }
    const l$1 = l(this).then((e3) => {
      this._wasmLayerId = e3, this._suspendedHandle = d$1(() => this.suspended, (e4) => {
        const s2 = o(this.view);
        s2 && s2.setEnabled(this, !e4);
      }, P$1), this.addHandles([d$1(() => this.layer.renderMode, (e4) => this._pushRenderModeToWasm(e4)), d$1(() => this.layer.currentVariableId, (e4) => this._pushCurrentVariableIdToWasm(e4)), d$1(() => this.layer.getSections(), (e4) => this._pushSectionsToWasm(e4)), d$1(() => this.layer.getVariableStyles(), (e4) => this._pushVariableStylesToWasm(e4)), d$1(() => this.layer.getVolumeStyles(), (e4) => this._pushVolumeStylesToWasm(e4)), d$1(() => this.layer.enableDynamicSections, (e4) => this._pushEnableDynamicSectionsToWasm(e4)), d$1(() => this.layer.enableIsosurfaces, (e4) => this._pushEnableIsosurfacesToWasm(e4)), d$1(() => this.layer.enableSections, (e4) => this._pushEnableSectionsToWasm(e4)), d$1(() => this.layer.enableSlices, (e4) => this._pushEnableSlicesToWasm(e4)), d$1(() => this.slicePlaneEnabled, (e4) => this._pushAnalysisSliceToWasm(e4, this.view.slicePlane)), d$1(() => this.view.slicePlane, (e4) => this._pushAnalysisSliceToWasm(this.slicePlaneEnabled, e4)), d$1(() => this.layer.minScale, (e4) => this._onScaleUpdated(this.view.scale, e4, this.layer.maxScale), P$1), d$1(() => this.layer.maxScale, (e4) => this._onScaleUpdated(this.view.scale, this.layer.minScale, e4), P$1), d$1(() => this.view.scale, (e4) => this._onScaleUpdated(e4, this.layer.minScale, this.layer.maxScale), P$1)]);
    }).catch((e3) => {
      if (i$1(this), this._wasmLayerId = -1, -1 === e3)
        throw new s("voxel:addLayer-failure", "The voxel layer description was invalid.", {});
      if (-2 === e3)
        throw new s("voxel:addLayer-failure", "The voxel layer web assembly module failed to download.", {});
    });
    this.addResolvingPromise(l$1);
  }
  destroy() {
    i$1(this), this._suspendedHandle && (this._suspendedHandle.remove(), this._suspendedHandle = null);
  }
  isUpdating() {
    const e2 = o(this.view);
    return !(this._wasmLayerId < 0 || null == e2) && e2.isUpdating(this._wasmLayerId);
  }
  updatingFlagChanged() {
    this.notifyChange("updating");
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get unloadedMemory() {
    return this._futureMemory;
  }
  get performanceInfo() {
    return new t$1(this.usedMemory);
  }
  whenGraphicBounds(e2, s2) {
    const t2 = e2.attributes["Voxel.WorldPosition"];
    if (t2) {
      const e3 = P(), s3 = JSON.parse(t2);
      if (n$1(s3, this.view.renderSpatialReference, x, this.view.spatialReference || f$1.WGS84))
        return h(e3, x), Promise.resolve({ boundingBox: e3, screenSpaceObjects: [] });
    }
    return Promise.reject();
  }
  setUsedMemory(e2) {
    this._usedMemory = e2, this._futureMemory = 0;
  }
  captureFrustum() {
    const e2 = o(this.view);
    e2?.captureFrustum();
  }
  toggleFullVolumeExtentDraw() {
    const e2 = o(this.view);
    e2?.toggleFullVolumeExtentDraw(this);
  }
  getLayerTimes() {
    const e2 = o(this.view);
    return e2?.getLayerTimes(this) ?? [];
  }
  getCurrentLayerTimeIndex() {
    const e2 = o(this.view);
    return e2?.getCurrentLayerTimeIndex(this) ?? 0;
  }
  _pushRenderModeToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushRenderModeToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setRenderMode(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushRenderModeToWasm() failed!");
  }
  _pushSectionsToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setStaticSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushSectionsToWasm() failed!");
  }
  _pushCurrentVariableIdToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setCurrentVariable(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!");
  }
  _pushVariableStylesToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushVariableStylesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setVariableStyles(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushVariableStylesToWasm() failed!");
  }
  _accountForEnableSlices(e2, s2) {
    const t2 = null != s2 ? s2 : this.layer.enableSlices;
    for (let i2 = 0; i2 < e2.length; ++i2) {
      const s3 = e2[i2];
      for (const e3 of s3.slices)
        e3.enabled = e3.enabled && t2;
    }
  }
  _pushVolumeStylesToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushVolumeStylesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2 && (this._accountForEnableSlices(e2, null), s2.setVolumeStyles(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushVolumeStylesToWasm() failed!"));
  }
  _pushAnalysisSliceToWasm(e2, s2) {
    const t2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushAnalysisSliceToWasm() called, " + (t2 ? "have WASM" : "don't have WASM!!!"));
    let i2 = false;
    if (t2) {
      if (s2) {
        const a = s2.origin;
        _$1(T, s2.basis1, s2.basis2), z$1(T, T), i2 = t2.setAnalysisSlice(this, e2, a, T);
      } else
        o$1(T, 0, 0, 1), i2 = t2.setAnalysisSlice(this, false, T, T);
      i2 || this._dbg(W.Error, "VoxelLayerView3D._pushAnalysisSliceToWasm() failed!");
    }
  }
  _pushEnableDynamicSectionsToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableDynamicSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!");
  }
  _pushEnableSlicesToWasm(e2) {
    const s2 = o(this.view);
    if (this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableSlicesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2) {
      const t2 = this.layer.getVolumeStyles();
      this._accountForEnableSlices(t2, e2), s2.setVolumeStyles(this, t2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableSlicesToWasm() failed!");
    }
  }
  _pushEnableIsosurfacesToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableIsosurfaces(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!");
  }
  _pushEnableSectionsToWasm(e2) {
    const s2 = o(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableSectionsToWasm() failed!");
  }
  _onScaleUpdated(e2, s2, t$12) {
    const i2 = t(e2, s2, t$12), a = o(this.view);
    a && a.setIsInScaleRange(this, i2);
  }
  async whenGraphicAttributes(e2, s2) {
    return e2;
  }
  _dbg(e2, s2) {
    this._dbgFlags.has(e2) && (e2 === W.Error ? s$1.getLogger(this).error(s2) : s$1.getLogger(this).warn(s2));
  }
};
e([y()], E.prototype, "layer", void 0), e([y()], E.prototype, "baseUrl", null), e([y({ type: Boolean })], E.prototype, "slicePlaneEnabled", void 0), E = e([c("esri.views.3d.layers.VoxelLayerView3D")], E);
const I = E;
export {
  I as default
};
