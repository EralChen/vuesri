import { aM as s$1, c4 as d$1, eH as l, bJ as d$2, bn as P$1, eI as o, eJ as i$1, eK as P, eL as t, cZ as f$1, eM as h, eN as _, eO as z$1, eP as o$1, bb as s$2, bo as e, bp as y, br as c, eQ as n$1, dP as u } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { i } from "./chunk-9RFzr6gv.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var S;
!function(e2) {
  e2[e2.API = 1] = "API", e2[e2.VerboseAPI = 2] = "VerboseAPI", e2[e2.Error = 3] = "Error";
}(S || (S = {}));
const v = n$1(), W = n$1();
let T = class extends i(n(u)) {
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
    if (this._dbgFlags.add(S.Error), "local" !== this.view.viewingMode)
      throw new s$1("voxel:unsupported-viewingMode", "Voxel layers support local viewingMode only.", {});
    if (!!!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat)
      throw new s$1("voxel:missing-color-buffer-float", "Voxel layers require the WebGL2 extension EXT_color_buffer_float", {});
    const e2 = this.layer.spatialReference;
    if (!d$1(e2, this.view.spatialReference))
      throw new s$1("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
    const t2 = this.layer.currentVariableId, a = this.layer.getVolume(t2), o$12 = this.layer.getVariable(t2);
    if (null != a && null != o$12) {
      const e3 = a.dimensions[0], s = a.dimensions[1], t3 = a.zDimension;
      if (t3 > 1) {
        const i2 = a.dimensions[t3], r = e3.size * s.size * i2.size;
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
        this._futureMemory = l2 * r;
      }
    }
    const l$1 = l(this).then((e3) => {
      this._wasmLayerId = e3, this._suspendedHandle = d$2(() => this.suspended, (e4) => {
        const s = o(this.view);
        s && s.setEnabled(this, !e4);
      }, P$1), this.addHandles([d$2(() => this.layer.renderMode, (e4) => this._pushRenderModeToWasm(e4)), d$2(() => this.layer.currentVariableId, (e4) => this._pushCurrentVariableIdToWasm(e4)), d$2(() => this.layer.getSections(), (e4) => this._pushSectionsToWasm(e4)), d$2(() => this.layer.getVariableStyles(), (e4) => this._pushVariableStylesToWasm(e4)), d$2(() => this.layer.getVolumeStyles(), (e4) => this._pushVolumeStylesToWasm(e4)), d$2(() => this.layer.enableDynamicSections, (e4) => this._pushEnableDynamicSectionsToWasm(e4)), d$2(() => this.layer.enableIsosurfaces, (e4) => this._pushEnableIsosurfacesToWasm(e4)), d$2(() => this.layer.enableSections, (e4) => this._pushEnableSectionsToWasm(e4)), d$2(() => this.layer.enableSlices, (e4) => this._pushEnableSlicesToWasm(e4)), d$2(() => this.slicePlaneEnabled, (e4) => this._pushAnalysisSliceToWasm(e4, this.view.slicePlane)), d$2(() => this.view.slicePlane, (e4) => this._pushAnalysisSliceToWasm(this.slicePlaneEnabled, e4))]);
    }).catch((e3) => {
      if (i$1(this), this._wasmLayerId = -1, -1 === e3)
        throw new s$1("voxel:addLayer-failure", "The voxel layer description was invalid.", {});
      if (-2 === e3)
        throw new s$1("voxel:addLayer-failure", "The voxel layer web assembly module failed to download.", {});
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
    return { nodes: 0, displayedNumberOfFeatures: 0, maximumNumberOfFeatures: 0, totalNumberOfFeatures: 0, core: null };
  }
  whenGraphicBounds(e2, s) {
    const t$1 = e2.attributes["Voxel.WorldPosition"];
    if (t$1) {
      const e3 = P(), s2 = JSON.parse(t$1);
      if (t(s2, this.view.renderSpatialReference, W, this.view.spatialReference || f$1.WGS84))
        return h(e3, W), Promise.resolve({ boundingBox: e3, screenSpaceObjects: [] });
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
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushRenderModeToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setRenderMode(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushRenderModeToWasm() failed!");
  }
  _pushSectionsToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushSectionsToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setStaticSections(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushSectionsToWasm() failed!");
  }
  _pushCurrentVariableIdToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setCurrentVariable(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!");
  }
  _pushVariableStylesToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushVariableStylesToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setVariableStyles(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushVariableStylesToWasm() failed!");
  }
  _accountForEnableSlices(e2, s) {
    const t2 = null != s ? s : this.layer.enableSlices;
    for (let i2 = 0; i2 < e2.length; ++i2) {
      const s2 = e2[i2];
      for (const e3 of s2.slices)
        e3.enabled = e3.enabled && t2;
    }
  }
  _pushVolumeStylesToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushVolumeStylesToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s && (this._accountForEnableSlices(e2, null), s.setVolumeStyles(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushVolumeStylesToWasm() failed!"));
  }
  _pushAnalysisSliceToWasm(e2, s) {
    const t2 = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushAnalysisSliceToWasm() called, " + (t2 ? "have WASM" : "don't have WASM!!!"));
    let i2 = false;
    if (t2) {
      if (s) {
        const r = s.origin;
        _(v, s.basis1, s.basis2), z$1(v, v), i2 = t2.setAnalysisSlice(this, e2, r, v);
      } else
        o$1(v, 0, 0, 1), i2 = t2.setAnalysisSlice(this, false, v, v);
      i2 || this._dbg(S.Error, "VoxelLayerView3D._pushAnalysisSliceToWasm() failed!");
    }
  }
  _pushEnableDynamicSectionsToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setEnableDynamicSections(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!");
  }
  _pushEnableSlicesToWasm(e2) {
    const s = o(this.view);
    if (this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushEnableSlicesToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s) {
      const t2 = this.layer.getVolumeStyles();
      this._accountForEnableSlices(t2, e2), s.setVolumeStyles(this, t2) || this._dbg(S.Error, "VoxelLayerView3D._pushEnableSlicesToWasm() failed!");
    }
  }
  _pushEnableIsosurfacesToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setEnableIsosurfaces(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!");
  }
  _pushEnableSectionsToWasm(e2) {
    const s = o(this.view);
    this._dbg(S.VerboseAPI, "VoxelLayerView3D._pushEnableSectionsToWasm() called, " + (s ? "have WASM" : "don't have WASM!!!")), s?.setEnableSections(this, e2) || this._dbg(S.Error, "VoxelLayerView3D._pushEnableSectionsToWasm() failed!");
  }
  async whenGraphicAttributes(e2, s) {
    return e2;
  }
  _dbg(e2, s) {
    this._dbgFlags.has(e2) && (e2 === S.Error ? s$2.getLogger(this).error(s) : s$2.getLogger(this).warn(s));
  }
};
e([y()], T.prototype, "layer", void 0), e([y()], T.prototype, "baseUrl", null), e([y({ type: Boolean })], T.prototype, "slicePlaneEnabled", void 0), T = e([c("esri.views.3d.layers.VoxelLayerView3D")], T);
const E = T;
export {
  E as default
};
