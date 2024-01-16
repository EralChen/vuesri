import { hT as i$6, hV as r$8, tC as L, hU as e$c, h_ as r$9, h$ as M, i0 as t$2, i2 as h$1, wr as b$1, hL as i$7, kQ as m$4, Cc as c$2, Cd as l, Ce as O, Cf as E$1, Cg as p$1, Ch as T, Ci as A$1, mZ as n$i, Cj as f, kR as e$d, AJ as P, kS as G, kT as U, eA as D, T as T$1, wm as t$3, hW as R$1, i5 as O$1, kO as n$j, Ck as _$1, E as E$2, Cl as h$2, Cm as g$1, hA as c$3, kJ as r$a, bY as T$2, aw as u$1, m$ as lt, bo as e$e, bp as y$1, br as c$4, bs as g$2, bm as h$3, ej as k, fU as r$b, ap as M$1, Cn as g$3, e$ as n$k, fS as h$4, fT as y$2, Co as a$f, gx as u$2, Cp as D$1, du as j$1, Cq as ae, cy as x$1, bI as b, bb as s$e, Cr as u$3, Cs as i$9, hN as s$f, bJ as d$1, Ct as S, dO as a$g, fQ as m$5, dP as u$4, bK as C$1, Cu as o$9, bn as P$1, bf as c$5 } from "./chunk-KFNcxJaF.js";
import { f as f$1, d, h as h$5 } from "./chunk--I7GnC72.js";
import { i as i$8 } from "./chunk-_ABw_62H.js";
import { r as r$c } from "./chunk-7WVHb2Yk.js";
import { p as p$2 } from "./chunk-rYCvAO4U.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _ = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: false, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, stretchType: "none", type: "stretch" };
class p extends i$6 {
  constructor(t2 = null, e2 = null, s2 = null) {
    super(), this._textureInvalidated = true, this._colormapTextureInvalidated = true, this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, this._colormapTexture = null, this._colormap = null, this._supportsBilinearTexture = true, this._processedTexture = null, this.functionTextures = [], this.projected = false, this.stencilRef = 0, this.coordScale = [1, 1], this._processed = false, this._symbolizerParameters = null, this.height = null, this.isRendereredSource = false, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this.rawPixelData = null, this._suspended = false, this._bandIds = null, this._interpolation = null, this._transformGrid = null, this.width = null, this.x = 0, this.y = 0, this.source = t2, this.transformGrid = e2, this.interpolation = s2;
  }
  destroy() {
    this._disposeTextures();
  }
  get processedTexture() {
    return this._processedTexture;
  }
  set processedTexture(t2) {
    this._processedTexture !== t2 && (this._disposeTextures(true), this._processedTexture = t2);
  }
  get rasterTexture() {
    return this._rasterTexture;
  }
  set rasterTexture(t2) {
    this._rasterTexture !== t2 && (this._rasterTexture?.dispose(), this._rasterTexture = t2), null == t2 && (this.projected = false);
  }
  get processed() {
    return this._processed;
  }
  set processed(e2) {
    this._processed = e2, e2 || (r$8(this.processedTexture), this.invalidateTexture());
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || _;
  }
  set symbolizerParameters(t2) {
    this._symbolizerParameters !== t2 && (this._symbolizerParameters = t2, this._colormapTextureInvalidated = true, this.commonUniforms = null);
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    this._source !== t2 && (this._source = t2, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this.commonUniforms = null, this.projected = false, this.invalidateTexture());
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(t2) {
    this._suspended && !t2 && this.stage && (this.ready(), this.requestRender()), this._suspended = t2;
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(t2) {
    this._bandIds = t2, this._isBandIdschanged(t2) && (this.projected = false, this.invalidateTexture());
  }
  get interpolation() {
    return this._interpolation || "nearest";
  }
  set interpolation(t2) {
    this._interpolation = t2, this._rasterTexture && this._rasterTexture.setSamplingMode("bilinear" === this._getTextureSamplingMethod(t2 || "nearest") ? L.LINEAR : L.NEAREST);
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(e2) {
    this._transformGrid !== e2 && (this._transformGrid = e2, this._transformGridTexture = r$8(this._transformGridTexture));
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRender());
  }
  getRasterTextureSize(t2 = false) {
    const e2 = t2 || this.projected;
    return [e2 ? this.width : this.source?.width || this.width, e2 ? this.height : this.source?.height || this.height];
  }
  getRasterCellSize() {
    const t2 = this.rawPixelData?.srcPixelSize, { projected: e2, resolution: s2 } = this;
    return t2 && !e2 ? [t2.x, t2.y] : [s2, s2];
  }
  _createTransforms() {
    return { dvs: e$c() };
  }
  setTransform(t2) {
    const a2 = r$9(this.transforms.dvs), [h2, n3] = t2.toScreenNoRotation([0, 0], [this.x, this.y]), l2 = this.resolution / this.pixelRatio / t2.resolution, d2 = l2 * this.width, c2 = l2 * this.height, _2 = Math.PI * this.rotation / 180;
    M(a2, a2, t$2(h2, n3)), M(a2, a2, t$2(d2 / 2, c2 / 2)), h$1(a2, a2, -_2), M(a2, a2, t$2(-d2 / 2, -c2 / 2)), b$1(a2, a2, t$2(d2, c2)), i$7(this.transforms.dvs, t2.displayViewMat3, a2);
  }
  getTextures({ forProcessing: t2 = false, useProcessedTexture: e2 = false } = {}) {
    const s2 = e2 ? this._processedTexture ?? this._rasterTexture : this._rasterTexture, r2 = [], i2 = [];
    return s2 ? (this._transformGridTexture && !this.projected && (i2.push(this._transformGridTexture), r2.push("u_transformGrid")), e2 ? (i2.push(s2), r2.push("u_image"), this._colormapTexture && (i2.push(this._colormapTexture), r2.push("u_colormap")), { names: r2, textures: i2 }) : (i2.push(s2), r2.push("u_image"), this._colormapTexture && !t2 && (i2.push(this._colormapTexture), r2.push("u_colormap")), { names: r2, textures: i2 })) : { names: r2, textures: i2 };
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: t2 }) {
    if (!this.stage)
      return void this._disposeTextures();
    const e2 = this._isValidSource(this.source);
    e2 && this._colormapTextureInvalidated && (this._colormapTextureInvalidated = false, this._updateColormapTexture(t2)), this._textureInvalidated && (this._textureInvalidated = false, this._createOrDestroyRasterTexture(t2), this._rasterTexture && (e2 ? this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = m$4(t2, this.transformGrid)) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender()));
  }
  updateProcessedTexture() {
    const { functionTextures: t2 } = this;
    0 !== t2.length && (this.processedTexture = t2.shift(), t2.forEach((t3) => t3?.dispose()), t2.length = 0);
  }
  _createOrDestroyRasterTexture(t2) {
    const e2 = this.source?.extractBands(this.bandIds);
    if (!this._isValidSource(e2))
      return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
    const s2 = !this._isBandIdschanged(this.bandIds);
    if (this._rasterTexture) {
      if (s2)
        return;
      this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
    }
    this._supportsBilinearTexture = !!t2.capabilities.textureFloat?.textureFloatLinear;
    const r2 = this._getTextureSamplingMethod(this.interpolation), i2 = this.isRendereredSource || !t2.capabilities.textureFloat?.textureFloat;
    this._rasterTexture = c$2(t2, e2, r2, i2), this.projected = false, this._processed = false, this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null;
  }
  _isBandIdschanged(t2) {
    const e2 = this._rasterTextureBandIds;
    return !(null == e2 && null == t2 || e2 && t2 && e2.join("") === t2.join(""));
  }
  _isValidSource(t2) {
    return null != t2 && t2.pixels?.length > 0;
  }
  _getTextureSamplingMethod(t2) {
    const { type: e2 } = this.symbolizerParameters, s2 = "lut" === e2 || "hillshade" === e2 || "stretch" === e2 && 1 === this.symbolizerParameters.bandCount;
    return !this._supportsBilinearTexture || s2 || "bilinear" !== t2 && "cubic" !== t2 ? "nearest" : "bilinear";
  }
  _updateColormapTexture(t2) {
    const e2 = this._colormap, s2 = this.symbolizerParameters.colormap;
    return s2 ? e2 ? s2.length !== e2.length || s2.some((t3, s3) => t3 !== e2[s3]) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = l(t2, s2), void (this._colormap = s2)) : void 0 : (this._colormapTexture = l(t2, s2), void (this._colormap = s2)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
  }
  _disposeTextures(t2 = false) {
    !this._transformGridTexture || t2 && !this.projected || (this._transformGridTexture.dispose(), this._transformGridTexture = null), !t2 && this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null, this._colormap = null, this._colormapTextureInvalidated = true), !t2 && this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this._processedTexture && (this._processedTexture.dispose(), this._processedTexture = null);
  }
}
function m$3(t2) {
  return null != t2.source;
}
function i$5(i2) {
  const n3 = [];
  return i2 && (n3.push("applyProjection"), 1 === i2.spacing[0] && n3.push("lookupProjection")), n3;
}
function n$h(i2, n3, e2) {
  const t2 = !e2.capabilities.textureFloat?.textureFloatLinear, u2 = [];
  return "cubic" === i2 ? u2.push("bicubic") : "bilinear" === i2 && (n3 ? (u2.push("bilinear"), u2.push("nnedge")) : t2 && u2.push("bilinear")), u2;
}
const s$d = { vsPath: "raster/common", fsPath: "raster/lut", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$e(t2, e2, o3) {
  const a2 = o3 ? [] : i$5(e2.transformGrid);
  return { defines: a2, program: t2.painter.materialManager.getProgram(s$d, a2) };
}
function n$g(r2, s2, a2, n3, m2 = false) {
  const { names: i2, textures: c2 } = a2.getTextures({ useProcessedTexture: m2 });
  O(r2.context, s2, i2, c2), E$1(s2, n3, a2.commonUniforms), s2.setUniformMatrix3fv("u_dvsMat3", a2.transforms.dvs);
  const { colormap: f2, colormapOffset: u2 } = a2.symbolizerParameters, d2 = p$1(f2, u2);
  E$1(s2, n3, d2);
}
const m$2 = { createProgram: a$e, bindTextureAndUniforms: n$g };
const n$f = { vsPath: "raster/common", fsPath: "raster/hillshade", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function m$1(o3, e2, s2) {
  const { colormap: a2 } = e2.symbolizerParameters, m2 = [...s2 ? [] : i$5(e2.transformGrid), ...n$h(e2.interpolation, true, o3.context)];
  null != a2 && m2.push("applyColormap");
  return { defines: m2, program: o3.painter.materialManager.getProgram(n$f, m2) };
}
function i$4(r2, t2, n3, m2, i2 = false) {
  const { names: c2, textures: l2 } = n3.getTextures({ useProcessedTexture: i2 });
  O(r2.context, t2, c2, l2), E$1(t2, m2, n3.commonUniforms), t2.setUniformMatrix3fv("u_dvsMat3", n3.transforms.dvs);
  const f2 = n3.symbolizerParameters, { colormap: p2, colormapOffset: u2 } = f2;
  if (null != p2) {
    const r3 = p$1(p2, u2);
    E$1(t2, m2, r3);
  }
  const d2 = T(f2);
  E$1(t2, m2, d2);
}
const c$1 = { createProgram: m$1, bindTextureAndUniforms: i$4 };
const a$d = { vsPath: "raster/common", fsPath: "raster/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function m(o3, e2, s2) {
  const { colormap: n3, bandCount: m2 } = e2.symbolizerParameters, i2 = [...s2 ? [] : i$5(e2.transformGrid), ...n$h(e2.interpolation, 1 === m2, o3.context)];
  e2.isRendereredSource && !s2 ? i2.push("noop") : null != n3 && i2.push("applyColormap");
  return { defines: i2, program: o3.painter.materialManager.getProgram(a$d, i2) };
}
function i$3(r2, t2, a2, m2, i2 = false) {
  const { names: c2, textures: u2 } = a2.getTextures({ useProcessedTexture: i2 });
  O(r2.context, t2, c2, u2), E$1(t2, m2, a2.commonUniforms), t2.setUniformMatrix3fv("u_dvsMat3", a2.transforms.dvs);
  const l2 = a2.symbolizerParameters, { colormap: p2, colormapOffset: f2 } = l2;
  if (null != p2) {
    const r3 = p$1(p2, f2);
    E$1(t2, m2, r3);
  }
  const d2 = A$1(l2);
  E$1(t2, m2, d2);
}
const c = { createProgram: m, bindTextureAndUniforms: i$3 };
const s$c = /* @__PURE__ */ new Map();
function o$8(t2) {
  return s$c.get(t2);
}
s$c.set("lut", m$2), s$c.set("hillshade", c$1), s$c.set("stretch", c);
const t$1 = [1, 1], n$e = [2, 0, 0, 0, 2, 0, -1, -1, 0];
function a$c(t2, n3, a2) {
  const { context: r2, rasterFunction: s2, hasBranches: i2 } = t2, { raster: o3 } = s2.parameters, f2 = i2 ? o3?.id ?? -1 : 0, m2 = a2.functionTextures[f2] ?? a2.rasterTexture;
  O(r2, n3, ["u_image"], [m2]);
}
function r$7(t2, n3, r2) {
  const { rasters: s2 } = t2.rasterFunction.parameters;
  if (!s2)
    return;
  if (s2.length < 2)
    return a$c(t2, n3, r2);
  const i2 = s2.filter((e2) => "Constant" !== e2.name).map((e2) => null != e2.id && "Identity" !== e2.name ? r2.functionTextures[e2.id] : r2.rasterTexture);
  if (O(t2.context, n3, ["u_image", "u_image1", "u_image2"].slice(0, i2.length), i2), i2.length !== s2.length) {
    if (2 === s2.length) {
      const e2 = s2.findIndex((e3) => "Constant" === e3.name), t3 = 0 === e2 ? [0, 1, 0, 1, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 0], { value: a2 } = s2[e2].parameters;
      n3.setUniform1f("u_image1Const", a2), n3.setUniformMatrix3fv("u_imageSwap", t3);
    } else if (3 === s2.length) {
      const e2 = [];
      if (s2.forEach((t3, n4) => "Constant" === t3.name && e2.push(n4)), 1 === e2.length) {
        const { value: t3 } = s2[e2[0]].parameters;
        n3.setUniform1f("u_image1Const", t3);
        const a2 = 0 === e2[0] ? [0, 1, 0, 0, 0, 1, 1, 0, 0] : 1 === e2[0] ? [1, 0, 0, 0, 0, 1, 0, 1, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 1];
        n3.setUniformMatrix3fv("u_imageSwap", a2);
      } else if (2 === e2.length) {
        const { value: t3 } = s2[e2[0]].parameters;
        n3.setUniform1f("u_image1Const", t3);
        const { value: a2 } = s2[e2[1]].parameters;
        n3.setUniform1f("u_image2Const", a2);
        const r3 = s2.findIndex((e3) => "Constant" !== e3.name), i3 = 0 === r3 ? [1, 0, 0, 0, 1, 0, 0, 0, 1] : 1 === r3 ? [0, 1, 0, 1, 0, 0, 0, 0, 1] : [0, 0, 1, 1, 0, 0, 0, 1, 0];
        n3.setUniformMatrix3fv("u_imageSwap", i3);
      }
    }
  }
}
function s$b(e2) {
  e2.setUniform2fv("u_coordScale", t$1), e2.setUniformMatrix3fv("u_dvsMat3", n$e);
}
const r$6 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/aspect", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$b(t2, e2) {
  return t2.painter.materialManager.getProgram(r$6, []);
}
function s$a(r2, a2, s2) {
  a$c(r2, a2, s2), s$b(a2);
  const n3 = s2.getRasterTextureSize();
  a2.setUniform2fv("u_srcImageSize", n3);
  const o3 = s2.getRasterCellSize();
  a2.setUniform2fv("u_cellSize", o3);
}
const n$d = { createProgram: a$b, bindTextureAndUniforms: s$a };
const a$a = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/bandarithmetic", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$b(t2, r2) {
  const { painter: e2, rasterFunction: n3 } = t2, { indexType: s2 } = n3.parameters;
  return e2.materialManager.getProgram(a$a, [s2]);
}
function n$c(a2, e2, n3) {
  a$c(a2, e2, n3), s$b(e2);
  const { bandIndexMat3: s2 } = a2.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", s2);
}
const s$9 = { createProgram: e$b, bindTextureAndUniforms: n$c };
const a$9 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/compositeband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$a(t2, r2) {
  return t2.painter.materialManager.getProgram(a$9, []);
}
function o$7(a2, e2, o3) {
  r$7(a2, e2, o3), s$b(e2);
}
const n$b = { createProgram: e$a, bindTextureAndUniforms: o$7 };
const s$8 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/contrast", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$9(t2, r2) {
  return t2.painter.materialManager.getProgram(s$8, []);
}
function a$8(s2, e2, a2) {
  a$c(s2, e2, a2), s$b(e2);
  const { contrastOffset: n3, brightnessOffset: o3 } = s2.rasterFunction.parameters;
  e2.setUniform1f("u_contrastOffset", n3), e2.setUniform1f("u_brightnessOffset", o3);
}
const n$a = { createProgram: e$9, bindTextureAndUniforms: a$8 };
const t = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/convolution", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$7(e2, r2) {
  const { painter: a2, rasterFunction: n3 } = e2, { kernelRows: o3, kernelCols: s2 } = n3.parameters, i2 = [{ name: "rows", value: o3 }, { name: "cols", value: s2 }];
  return a2.materialManager.getProgram(t, i2);
}
function n$9(t2, a2, n3) {
  a$c(t2, a2, n3), s$b(a2), a2.setUniform2fv("u_srcImageSize", [n3.width, n3.height]);
  const { kernel: o3, clampRange: s2 } = t2.rasterFunction.parameters;
  a2.setUniform1fv("u_kernel", o3), a2.setUniform2fv("u_clampRange", s2);
}
const o$6 = { createProgram: a$7, bindTextureAndUniforms: n$9 };
const e$8 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/curvature", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$6(r2, t2) {
  const { painter: a2, rasterFunction: s2 } = r2, { curvatureType: n3 } = s2.parameters, o3 = [n3];
  return a2.materialManager.getProgram(e$8, o3);
}
function s$7(e2, a2, s2) {
  a$c(e2, a2, s2), s$b(a2);
  const n3 = s2.getRasterTextureSize();
  a2.setUniform2fv("u_srcImageSize", n3);
  const { zFactor: o3 } = e2.rasterFunction.parameters, i2 = s2.getRasterCellSize();
  a2.setUniform1f("u_zlFactor", 200 * o3 / i2[0] / i2[1]);
}
const n$8 = { createProgram: a$6, bindTextureAndUniforms: s$7 };
const a$5 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/extractband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$7(t2, r2) {
  return t2.painter.materialManager.getProgram(a$5, []);
}
function n$7(a2, e2, n3) {
  a$c(a2, e2, n3), s$b(e2);
  const { bandIndexMat3: o3 } = a2.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", o3);
}
const o$5 = { createProgram: e$7, bindTextureAndUniforms: n$7 };
const e$6 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/focalstatistics", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function r$5(t2, a2) {
  const { painter: r2, rasterFunction: s2 } = t2, { kernelRows: n3, kernelCols: o3, fillNoDataOnly: i2, statisticsType: c2 } = s2.parameters, l2 = [{ name: "rows", value: n3 }, { name: "cols", value: o3 }, c2];
  return i2 && l2.push("fill"), r2.materialManager.getProgram(e$6, l2);
}
function s$6(e2, r2, s2) {
  a$c(e2, r2, s2), s$b(r2), r2.setUniform2fv("u_srcImageSize", [s2.width, s2.height]);
  const { clampRange: n3 } = e2.rasterFunction.parameters;
  r2.setUniform2fv("u_clampRange", n3);
}
const n$6 = { createProgram: r$5, bindTextureAndUniforms: s$6 };
const e$5 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/local", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, o$4 = /* @__PURE__ */ new Set(["sinh", "cosh", "tanh", "asinh", "acosh", "atanh"]);
function s$5(t2) {
  const { painter: n3, rasterFunction: s2 } = t2, { imageCount: r2, operationName: i2, rasters: u2, isOutputRounded: c2 } = s2.parameters;
  let m2 = i2.toLowerCase();
  t2.context.type === n$i.WEBGL1 && o$4.has(m2) && (m2 = `polyfill${m2}`);
  const p2 = [m2];
  2 === r2 && p2.push("twoImages");
  const h2 = u2.filter((t3) => "Constant" === t3.name);
  return h2.length && (p2.push("oneConstant"), 2 === h2.length && p2.push("twoConstant")), c2 && p2.push("roundOutput"), n3.materialManager.getProgram(e$5, p2);
}
function r$4(a2, e2, o3) {
  r$7(a2, e2, o3), s$b(e2);
  const { domainRange: s2 } = a2.rasterFunction.parameters;
  e2.setUniform2fv("u_domainRange", s2);
}
const i$2 = { createProgram: s$5, bindTextureAndUniforms: r$4 };
const r$3 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/mask", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function n$5(t2, a2) {
  const { painter: n3, rasterFunction: e2 } = t2, s2 = e2.parameters.bandCount > 1 ? ["multiBand"] : [];
  return n3.materialManager.getProgram(r$3, s2);
}
function e$4(r2, n3, e2) {
  a$c(r2, n3, e2), s$b(n3);
  const { includedRanges: s2, noDataValues: o3 } = r2.rasterFunction.parameters;
  n3.setUniform1fv("u_includedRanges", s2), n3.setUniform1fv("u_noDataValues", o3);
}
const s$4 = { createProgram: n$5, bindTextureAndUniforms: e$4 };
const a$4 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/ndvi", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$3(t2, r2) {
  const { painter: e2, rasterFunction: n3 } = t2, s2 = n3.parameters.scaled ? ["scaled"] : [];
  return e2.materialManager.getProgram(a$4, s2);
}
function n$4(a2, e2, n3) {
  a$c(a2, e2, n3), s$b(e2);
  const { bandIndexMat3: s2 } = a2.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", s2);
}
const s$3 = { createProgram: e$3, bindTextureAndUniforms: n$4 };
const r$2 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/remap", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$2(a2, t2) {
  return a2.painter.materialManager.getProgram(r$2, []);
}
function n$3(r2, e2, n3) {
  a$c(r2, e2, n3), s$b(e2);
  const { noDataRanges: s2, rangeMaps: o3, allowUnmatched: f2, clampRange: i2 } = r2.rasterFunction.parameters;
  e2.setUniform1fv("u_noDataRanges", s2), e2.setUniform1fv("u_rangeMaps", o3), e2.setUniform1f("u_unmatchMask", f2 ? 1 : 0), e2.setUniform2fv("u_clampRange", i2);
}
const s$2 = { createProgram: e$2, bindTextureAndUniforms: n$3 };
const e$1 = { vsPath: "raster/common", fsPath: "raster/reproject", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function i$1(t2, r2) {
  const { painter: i2 } = t2, o3 = [], { interpolation: s2, transformGrid: n3 } = r2, a2 = !!t2.rasterFunction?.parameters?.requireBilinear, f2 = "bilinear" === s2 ? !t2.context.capabilities.textureFloat?.textureFloatLinear : a2;
  return "cubic" === s2 ? o3.push("bicubic") : f2 && o3.push("bilinear"), n3 && (o3.push("applyProjection"), 1 === n3.spacing[0] && o3.push("lookupProjection")), i2.materialManager.getProgram(e$1, o3);
}
function o$3(e2, i2, o3) {
  const { names: s2, textures: n3 } = o3.getTextures({ forProcessing: true });
  O(e2.context, i2, s2, n3), i2.setUniform1f("u_scale", 1), i2.setUniform2fv("u_offset", [0, 0]), i2.setUniform2fv("u_coordScale", [1, 1]), i2.setUniformMatrix3fv("u_dvsMat3", [2, 0, 0, 0, 2, 0, -1, -1, 0]), i2.setUniform1i("u_flipY", 0), i2.setUniform1f("u_opacity", 1);
  const { width: a2, height: f$12, source: c2, transformGrid: u2 } = o3;
  i2.setUniform2fv("u_srcImageSize", [c2.width, c2.height]), i2.setUniform2fv("u_targetImageSize", [a2, f$12]), i2.setUniform2fv("u_transformSpacing", u2 ? u2.spacing : f), i2.setUniform2fv("u_transformGridSize", u2 ? u2.size : f);
}
const s$1 = { createProgram: i$1, bindTextureAndUniforms: o$3 };
const r$1 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/slope", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function s(e2, t2) {
  const { painter: s2, rasterFunction: o3 } = e2, { slopeType: a2 } = o3.parameters, i2 = "percent-rise" === a2 ? ["percentRise"] : [];
  return s2.materialManager.getProgram(r$1, i2);
}
function o$2(r2, s2, o3) {
  a$c(r2, s2, o3), s$b(s2);
  const a2 = o3.getRasterTextureSize();
  s2.setUniform2fv("u_srcImageSize", a2);
  const i2 = o3.getRasterCellSize();
  s2.setUniform2fv("u_cellSize", i2);
  const { zFactor: n3, slopeType: c2, pixelSizePower: f2, pixelSizeFactor: p2 } = r2.rasterFunction.parameters;
  s2.setUniform1f("u_zFactor", n3), s2.setUniform1f("u_pixelSizePower", "adjusted" === c2 ? f2 : 0), s2.setUniform1f("u_pixelSizeFactor", "adjusted" === c2 ? p2 : 0);
}
const a$3 = { createProgram: s, bindTextureAndUniforms: o$2 };
const a$2 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function u(t2, r2) {
  const { useGamma: u2, bandCount: e2, isOutputRounded: n3 } = t2.rasterFunction.parameters, o3 = [];
  return u2 && o3.push("useGamma"), e2 > 1 && o3.push("multiBand"), n3 && o3.push("roundOutput"), t2.painter.materialManager.getProgram(a$2, o3);
}
function e(a2, u2, e2) {
  a$c(a2, u2, e2), s$b(u2);
  const { width: n3, height: o3 } = e2, m2 = a2.rasterFunction.parameters;
  u2.setUniform2fv("u_srcImageSize", [n3, o3]), u2.setUniform1f("u_minOutput", m2.outMin), u2.setUniform1f("u_maxOutput", m2.outMax), u2.setUniform1fv("u_factor", m2.factor), u2.setUniform1fv("u_minCutOff", m2.minCutOff), u2.setUniform1fv("u_maxCutOff", m2.maxCutOff), u2.setUniform1fv("u_gamma", m2.gamma), u2.setUniform1fv("u_gammaCorrection", m2.gammaCorrection);
}
const n$2 = { createProgram: u, bindTextureAndUniforms: e };
const A = /* @__PURE__ */ new Map();
function B(r2, e2, t2) {
  const o3 = new e$d();
  return o3.width = e2, o3.height = t2, o3.internalFormat = r2.type === n$i.WEBGL2 ? P.RGBA32F : G.RGBA, o3.samplingMode = L.NEAREST, o3.dataType = U.FLOAT, o3.isImmutable = r2.type === n$i.WEBGL2, o3.wrapMode = D.CLAMP_TO_EDGE, o3;
}
function v(r2, e2, t2, o3) {
  const { context: s2, requestRender: c2, allowDelayedRender: n3 } = r2, i2 = o3.createProgram(r2, t2);
  return n3 && null != c2 && !i2.compiled ? (c2(), null) : (s2.bindFramebuffer(e2), s2.setViewport(0, 0, e2.width, e2.height), s2.useProgram(i2), i2);
}
function E(r2) {
  return A.get(r2.toLowerCase());
}
function F(r2, e2, t2, o3) {
  const s2 = r2.rasterFunction.name.toLowerCase(), c2 = "reproject" === s2 ? s$1 : E(s2);
  if (null == c2)
    return;
  const n3 = v(r2, t2, o3, c2);
  if (!n3)
    return;
  c2.bindTextureAndUniforms(r2, n3, o3), e2.draw();
  const [i2, m2] = o3.getRasterTextureSize("reproject" === s2), a2 = B(r2.context, i2, m2), p2 = new T$1(r2.context, a2);
  if (t2.copyToTexture(0, 0, i2, m2, 0, 0, p2), "reproject" === s2)
    o3.rasterTexture = p2, o3.projected = true;
  else {
    const e3 = r2.hasBranches ? r2.rasterFunction.id : 0;
    o3.functionTextures[e3] = p2;
  }
}
A.set("aspect", n$d), A.set("bandarithmetic", s$9), A.set("compositeband", n$b), A.set("convolution", o$6), A.set("contrastbrightness", n$a), A.set("curvature", n$8), A.set("extractband", o$5), A.set("statistics", n$6), A.set("local", i$2), A.set("mask", s$4), A.set("ndvi", s$3), A.set("remap", s$2), A.set("slope", a$3), A.set("stretch", n$2);
class h extends t$3 {
  constructor() {
    super(...arguments), this.name = "raster", this._quad = null, this._rendererUniformInfos = /* @__PURE__ */ new Map(), this._fbo = null;
  }
  dispose() {
    r$8(this._quad), r$8(this._fbo);
  }
  prepareState(e2) {
    const { context: t2, renderPass: r2 } = e2, s2 = "raster" === r2;
    t2.setBlendingEnabled(!s2), t2.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), t2.setColorMask(true, true, true, true), t2.setStencilWriteMask(0), t2.setStencilTestEnabled(!s2);
  }
  draw(e2, r2) {
    if (!m$3(r2) || r2.suspended)
      return;
    const { renderPass: s2 } = e2;
    if ("raster-bitmap" !== s2)
      return "raster" === s2 ? this._process(e2, r2) : void this._drawBitmap(e2, r2, true);
    this._drawBitmap(e2, r2);
  }
  _process(t2, r2) {
    const { rasterFunction: i2 } = t2, o3 = "Reproject" === i2.name;
    if (!(o3 ? !(r2.rasterTexture && r2.projected) : !r2.processed))
      return;
    const { timeline: n3, context: a2 } = t2;
    n3.begin(this.name);
    const d2 = a2.getBoundFramebufferObject(), c2 = a2.getViewport();
    o3 || (r2.processedTexture = r$8(r2.processedTexture)), a2.setStencilFunction(O$1.EQUAL, r2.stencilRef, 255), r2.updateTexture(t2), this._initQuad(a2);
    const [f2, u2] = r2.getRasterTextureSize(o3), { isStandardRasterTileSize: p2, fbo: h2 } = this._getRasterFBO(a2, f2, u2);
    F(t2, this._quad, h2, r2), p2 || h2.dispose(), a2.bindFramebuffer(d2), a2.setViewport(c2.x, c2.y, c2.width, c2.height), n3.end(this.name);
  }
  _drawBitmap(e2, t2, s2 = false) {
    const { timeline: i2, context: o3 } = e2;
    if (i2.begin(this.name), o3.setStencilFunction(O$1.EQUAL, t2.stencilRef, 255), t2.updateTexture(e2), s2 && !t2.processedTexture) {
      if (t2.updateProcessedTexture(), !t2.processedTexture)
        return void i2.end(this.name);
      t2.processed = true;
    }
    this._initBitmapCommonUniforms(t2);
    const a2 = t2.symbolizerParameters.type, d2 = o$8(a2), { requestRender: c2, allowDelayedRender: f2 } = e2, { defines: u2, program: p2 } = d2.createProgram(e2, t2, t2.projected && s2);
    if (f2 && null != c2 && !p2.compiled)
      return void c2();
    o3.useProgram(p2);
    const h2 = this._getUniformInfos(a2, o3, p2, u2);
    this._quad || (this._quad = new n$j(o3, [0, 0, 1, 0, 0, 1, 1, 1])), d2.bindTextureAndUniforms(e2, p2, t2, h2, s2), this._quad.draw(), i2.end(this.name);
  }
  _initBitmapCommonUniforms(e2) {
    if (!e2.commonUniforms) {
      const t2 = g$1(1, [0, 0]), { transformGrid: r2, width: s2, height: i2 } = e2, o3 = _$1(r2, [s2, i2], [e2.source.width, e2.source.height], 1, false);
      e2.commonUniforms = { ...t2, ...o3, u_coordScale: e2.coordScale };
    }
  }
  _getRasterFBO(e2, t2, r2) {
    const s2 = t2 === c$3 && r2 === c$3;
    return s2 ? (this._fbo || (this._fbo = this._createNewFBO(e2, t2, r2)), { isStandardRasterTileSize: s2, fbo: this._fbo }) : { isStandardRasterTileSize: s2, fbo: this._createNewFBO(e2, t2, r2) };
  }
  _createNewFBO(e2, t2, r2) {
    const s2 = B(e2, t2, r2);
    return new E$2(e2, s2);
  }
  _initQuad(e2) {
    this._quad || (this._quad = new n$j(e2, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  _getUniformInfos(e2, t2, r2, s2) {
    const i2 = s2.length > 0 ? e2 + "-" + s2.join("-") : e2;
    if (this._rendererUniformInfos.has(i2))
      return this._rendererUniformInfos.get(i2);
    const o3 = h$2(t2, r2);
    return this._rendererUniformInfos.set(i2, o3), o3;
  }
}
class i extends r$a {
  constructor(t2, e2, i2, a2, r2, n3, l2 = null) {
    super(t2, e2, i2, a2, r2, n3), this.bitmap = null, this.bitmap = new p(l2, null, null), this.bitmap.coordScale = [r2, n3], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy(), this.bitmap = null, this.stage = null;
  }
  set stencilRef(t2) {
    this.bitmap.stencilRef = t2;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(t2) {
    super.setTransform(t2), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  _createTransforms() {
    return { dvs: e$c(), tileMat3: e$c() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
let o$1 = class o extends i$8 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false;
  }
  createTile(e2) {
    const r2 = this._getTileBounds(e2), [s2, i$12] = this._tileInfoView.tileInfo.size, n3 = this._tileInfoView.getTileResolution(e2.level);
    return new i(e2, n3, r2[0], r2[3], s2, i$12);
  }
  prepareRenderPasses(e2) {
    const r2 = e2.registerRenderPass({ name: "imagery (tile)", brushes: [h], target: () => this.children.map((e3) => e3.bitmap), drawPhase: T$2.MAP });
    return [...super.prepareRenderPasses(e2), r2];
  }
  doRender(e2) {
    if (!this.visible || e2.drawPhase !== T$2.MAP)
      return;
    const { rasterFunctionChain: r2 } = this;
    if (!r2)
      return e2.renderPass = "raster-bitmap", void super.doRender(e2);
    if (!r2.hasFocalFunction) {
      const [r3, s2] = this._tileInfoView.tileInfo.size;
      e2.renderPass = "raster", e2.rasterFunction = { name: "Reproject", parameters: { targetImageSize: [r3, s2], requireBilinear: false }, pixelType: "f32", id: 0, isNoopProcess: false }, super.doRender(e2);
    }
    if (r2?.functions.length) {
      const { functions: s2, hasBranches: t2 } = r2;
      for (let r3 = 0; r3 < s2.length; r3++) {
        const i2 = s2[r3];
        "Constant" !== i2.name && "Identity" !== i2.name && (e2.renderPass = "raster", e2.rasterFunction = i2, e2.hasBranches = t2, super.doRender(e2));
      }
    }
    e2.rasterFunction = null, e2.renderPass = "bitmap", super.doRender(e2);
  }
  _getTileBounds(s2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), s2);
    if (this.isCustomTilingScheme && s2.world) {
      const { tileInfo: e2 } = this._tileInfoView, i2 = lt(e2.spatialReference);
      if (i2) {
        const r2 = e2.lodAt(s2.level);
        if (!r2)
          return t2;
        const { resolution: n3 } = r2, o3 = i2 / n3 % e2.size[0], a2 = o3 ? (e2.size[0] - o3) * n3 : 0;
        t2[0] -= a2 * s2.world, t2[2] -= a2 * s2.world;
      }
    }
    return t2;
  }
};
const C = [0, 0];
let R = class extends g$2 {
  constructor() {
    super(...arguments), this._updatingHandles = new h$3(), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = [], this.previousLOD = null, this._needBlockCacheUpdate = false, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = false, this._maxIndexedColormapSize = 0, this._rasterFunctionState = "na", this._globalUpdateRequested = false, this.attached = false, this.timeExtent = null, this.redrawOrRefetch = k(async (e2 = {}) => {
      if (!this.previousLOD || this.layerView.suspended)
        return;
      const t2 = this._rasterFunctionState;
      e2.reprocess && (await this._updatingHandles.addPromise(this.layer.updateRasterFunction()), this.updateRasterFunctionParameters());
      const i2 = this._rasterFunctionState, { type: s2 } = this;
      return e2.refetch || "raster" !== s2 && !!e2.reprocess || "cpu" === i2 || "cpu" === t2 ? this._updatingHandles.addPromise(this.doRefresh()) : this._updatingHandles.addPromise(this._redrawImage(e2.signal));
    });
  }
  destroy() {
    this._updatingHandles.destroy();
  }
  get useWebGLForProcessing() {
    return this._get("useWebGLForProcessing") ?? true;
  }
  set useWebGLForProcessing(e2) {
    this._set("useWebGLForProcessing", e2);
  }
  get useProgressiveUpdate() {
    return this._get("useProgressiveUpdate") ?? true;
  }
  set useProgressiveUpdate(e2) {
    if (this._tileStrategy && this.useProgressiveUpdate !== e2) {
      this._tileStrategy.destroy(), this.container.removeAllChildren();
      const t2 = this._getCacheSize(e2);
      this._tileStrategy = new r$b({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: t2, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", e2), this.layerView.requestUpdate();
    }
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
    const { extent: t2, resolution: i2, scale: s2 } = e2.state, r2 = this._tileInfoView.getClosestInfoForScale(s2);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const e3 = this._srcResolutions[r2.level], s3 = t2.toJSON ? t2 : M$1.fromJSON(t2);
        g$3(this._blockCacheRegistryUrl, this._blockCacheRegistryId, s3, i2, e3, this.layer.raster.ioConfig.sampling);
      }
      this._needBlockCacheUpdate = false, this.previousLOD?.level !== r2.level && (this.previousLOD = r2, null == this._symbolizerParams || this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._tileStrategy.updateCacheSize(0));
    }
  }
  moveEnd() {
    !this.layerView.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = new AbortController(), 0 === this._fetchQueue.length && this._redrawImage(this._abortController.signal).then(() => {
      this._globalUpdateRequested = false, this.layerView.requestUpdate();
    }));
    const e2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(e2), this.layerView.requestUpdate();
  }
  get updating() {
    return this._globalUpdateRequested || this._updatingHandles?.updating;
  }
  attach() {
    const e2 = n$k("2d");
    this._maxIndexedColormapSize = 4 * (e2.maxTextureSize || 4096), e2.supportsTextureFloat || (this.useWebGLForProcessing = false), this._initializeTileInfo(), this._tileInfoView = new h$4(this.layerView.tileInfo, this.layerView.fullExtent);
    const t2 = this._computeFetchConcurrency();
    this._fetchQueue = new y$2({ tileInfoView: this._tileInfoView, concurrency: t2, process: (e3, t3) => this._fetchTile(e3, t3) });
    const i2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new r$b({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: i2, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, a$f(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryUrl = this._blockCacheRegistryId = null;
  }
  acquireTile(e2) {
    const t2 = this.container.createTile(e2);
    return this._updatingHandles.addPromise(this._enqueueTileFetch(t2)), this.layerView.requestUpdate(), this._needBlockCacheUpdate = true, this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, t2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this.container.removeChild(e2), e2.once("detach", () => {
      e2.destroy(), this.layerView.requestUpdate();
    }), this.layerView.requestUpdate();
  }
  createEmptyTilePixelBlock(e2 = null) {
    const t2 = null == e2 || e2.join(",") === this._tileInfoView.tileInfo.size.join(",");
    if (t2 && null != this._emptyTilePixelBlock)
      return this._emptyTilePixelBlock;
    e2 = e2 || this._tileInfoView.tileInfo.size;
    const [i2, s2] = e2, r2 = new u$2({ width: i2, height: s2, pixels: [new Uint8Array(i2 * s2)], mask: new Uint8Array(i2 * s2), pixelType: "u8" });
    return t2 && (this._emptyTilePixelBlock = r2), r2;
  }
  _getBandIds() {
    if (!("rasterFunctionChain" in this.container) || !this.container.rasterFunctionChain)
      return this.layer.bandIds;
    const { bandIds: e2, raster: t2 } = this.layer, i2 = "rasterFunction" in t2 ? t2.rasterFunction.rawInputBandIds : null;
    return e2?.length && i2?.length && 1 !== t2.rasterInfo.bandCount ? e2.map((e3) => i2[Math.min(e3, i2.length - 1)]) : e2 || i2;
  }
  updateRasterFunctionParameters() {
  }
  _fetchTile(e2, t2) {
    const i2 = null != t2 ? t2.signal : null, s2 = this.canUseWebGLForProcessing(), { layerView: r2 } = this, { tileInfo: a2 } = r2, o3 = !a2.isWrappable && null != D$1(r2.view.spatialReference), l2 = s2 && this.layer.raster.hasUniqueSourceStorageInfo, n3 = { allowPartialFill: true, datumTransformation: r2.datumTransformation, interpolation: s2 ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: l2, skipRasterFunction: "raster" === this.type && null != this.container.rasterFunctionChain, signal: i2, srcResolution: this._srcResolutions[e2.level], timeExtent: r2.timeExtent, tileInfo: a2, disableWrapAround: o3 };
    return this.fetchTile(e2, n3);
  }
  _getCacheSize(e2) {
    return e2 ? 40 : 0;
  }
  _initializeTileInfo() {
    const { layerView: e2 } = this, t2 = e2.view.spatialReference;
    if (this._canUseLayerLODs()) {
      const { origin: i3, lods: s3 } = this.layer.tileInfo, r3 = s3.map(({ scale: e3 }) => e3), a3 = j$1.create({ spatialReference: t2, size: c$3, scales: r3, origin: i3 });
      return e2.set("tileInfo", a3), void (this._srcResolutions = s3.map(({ resolution: e3 }) => ({ x: e3, y: e3 })));
    }
    const { scales: i2, srcResolutions: s2, isCustomTilingScheme: r2 } = ae(this.layer.rasterInfo, t2, { tileSize: c$3, alignGlobalDatasetWithAGOL: true, limitToSrcResolution: false }), a2 = j$1.create({ spatialReference: t2, size: c$3, scales: i2 }), o3 = 0 === a2.origin.x, { xmin: l2, ymax: h2 } = e2.fullExtent;
    (o3 || r2 && a2.origin.x > l2) && (a2.origin = new x$1({ x: l2, y: h2, spatialReference: t2 })), this._isCustomTilingScheme = r2, e2.set("tileInfo", a2), this._srcResolutions = s2 ?? [];
  }
  _canUseLayerLODs() {
    const { layer: e2, layerView: t2 } = this;
    if ("Map" !== e2.raster.tileType)
      return false;
    const { lods: i2 } = e2.tileInfo, s2 = t2.view.constraints?.effectiveLODs;
    return s2?.length === i2.length && s2.every(({ scale: e3 }, t3) => Math.abs(e3 - i2[t3].scale) < 1e-3);
  }
  _computeFetchConcurrency() {
    const { blockBoundary: e2 } = this.layer.rasterInfo.storageInfo, t2 = e2[e2.length - 1];
    return (t2.maxCol - t2.minCol + 1) * (t2.maxRow - t2.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(e2, t2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t3 = await this._fetchQueue.push(e2.key), a2 = this._getBandIds();
        let o3 = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
        if (this._globalUpdateRequested && !this.layerView.moving && 0 === this._fetchQueue.length) {
          o3 = false;
          try {
            await this._redrawImage(this._abortController?.signal);
          } catch (s2) {
            b(s2) && s$e.getLogger(this).error(s2);
          }
          this._globalUpdateRequested = false;
        }
        !this.canUseWebGLForProcessing() && "rasterVF" !== this.type || this.layerView.hasTilingEffects || null != this._symbolizerParams || this._updateSymbolizerParams();
        const l2 = this._tileInfoView.getTileCoords(C, e2.key), n3 = this._tileInfoView.getTileResolution(e2.key);
        await this.updateTileSource(e2, { source: t3, symbolizerParams: this._symbolizerParams, globalSymbolizerParams: this._globalSymbolizerParams, suspended: o3, bandIds: a2, coords: l2, resolution: n3 }), e2.once("attach", () => this.layerView.requestUpdate()), this.container.addChild(e2);
      } catch (s2) {
        b(s2) || s$e.getLogger(this).error(s2);
      }
      this.layerView.requestUpdate();
    }
  }
  async _redrawImage(e2) {
    if (0 === this.container.children.length)
      return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects ? await this._updateGlobalSymbolizerParams(e2) : (this._updateSymbolizerParams(), this._globalSymbolizerParams = null);
    const t2 = this.container.children.map(async (e3) => this.updateTileSymbolizerParameters(e3, { local: this._symbolizerParams, global: this._globalSymbolizerParams }));
    await Promise.allSettled(t2), this.container.requestRender();
  }
  async _updateGlobalSymbolizerParams(e2) {
    const t2 = { srcResolution: this._srcResolutions[this.previousLOD.level], registryId: this._blockCacheRegistryId, signal: e2 }, i2 = await this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, t2);
    if (!i2?.pixelBlock)
      return;
    const { resolution: s2 } = this.previousLOD, r2 = this._getBandIds(), a2 = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: i2.pixelBlock.extractBands(r2), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: s2, y: s2 }, bandIds: r2 });
    !this.canUseWebGLForProcessing() && a2 && "stretch" === a2.type && this.layer.renderer && "raster-stretch" === this.layer.renderer.type && (a2.factor = a2.factor.map((e3) => 255 * e3), a2.outMin = Math.round(255 * a2.outMin), a2.outMax = Math.round(255 * a2.outMax)), this._globalSymbolizerParams = a2;
  }
  _updateSymbolizerParams() {
    const { resolution: e2 } = this.previousLOD, t2 = this._getBandIds();
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: e2, y: e2 }, bandIds: t2 });
  }
  _updateBlockCacheRegistry(e2 = false) {
    const { layer: t2, layerView: i2 } = this, { url: s2, raster: r2 } = t2, { multidimensionalDefinition: a2 } = t2.normalizeRasterFetchOptions({ multidimensionalDefinition: t2.multidimensionalDefinition, timeExtent: i2.timeExtent }), o3 = r2.rasterInfo.multidimensionalInfo ? r2.getSliceIndex(a2) : null, l2 = i$9(s2, o3);
    if (l2 !== this._blockCacheRegistryUrl) {
      if (null != this._blockCacheRegistryUrl && a$f(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = u$3(l2, r2.rasterInfo), e2) {
        const { view: e3 } = i2, t3 = this._tileInfoView.getClosestInfoForScale(e3.scale), s3 = this._srcResolutions[t3.level];
        g$3(l2, this._blockCacheRegistryId, e3.extent, e3.resolution, s3, r2.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = l2;
    }
  }
  async doRefresh() {
    if (!this.attached)
      return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._updateBlockCacheRegistry(true), this._fetchQueue.reset();
    const e2 = [];
    this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, this._tileStrategy.refresh((t2) => e2.push(this._enqueueTileFetch(t2))), await this._updatingHandles.addPromise(Promise.allSettled(e2));
  }
};
e$e([y$1()], R.prototype, "_globalUpdateRequested", void 0), e$e([y$1()], R.prototype, "attached", void 0), e$e([y$1()], R.prototype, "container", void 0), e$e([y$1()], R.prototype, "layer", void 0), e$e([y$1()], R.prototype, "layerView", void 0), e$e([y$1()], R.prototype, "type", void 0), e$e([y$1()], R.prototype, "useWebGLForProcessing", null), e$e([y$1()], R.prototype, "useProgressiveUpdate", null), e$e([y$1()], R.prototype, "timeExtent", void 0), e$e([y$1()], R.prototype, "updating", null), R = e$e([c$4("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], R);
let n$1 = class n extends R {
  constructor() {
    super(...arguments), this.type = "raster";
  }
  attach() {
    super.attach(), this.container = new o$1(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this.updateRasterFunctionParameters();
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this.container = null;
  }
  canUseWebGLForProcessing() {
    const { symbolizer: e2 } = this.layer, r2 = e2.lookup?.colormapLut?.indexedColormap, t2 = r2 && r2.length > this._maxIndexedColormapSize;
    return this.useWebGLForProcessing && e2.canRenderInWebGL && !t2 && !("majority" === this.layer.interpolation && r$c(this.layer));
  }
  fetchTile(e2, r2) {
    return this.layer.fetchTile(e2.level, e2.row, e2.col, r2);
  }
  updateRasterFunctionParameters() {
    const { raster: e2, type: r2 } = this.layer, { container: t2 } = this;
    if ("Function" !== e2.datasetFormat || "wcs" === r2)
      return t2.rasterFunctionChain = null, t2.children.forEach((e3) => {
        const { bitmap: r3 } = e3;
        r3 && (r3.suspended = true, r3.processed = false, r3.projected && (r3.invalidateTexture(), r3.rasterTexture = null));
      }), void (this._rasterFunctionState = "na");
    const s2 = this._rasterFunctionState, { rasterFunction: i2, primaryRasters: o3 } = e2, n3 = i2.supportsGPU && (!o3 || o3.rasters.length <= 1), a2 = n3 ? i2.flatWebGLFunctionChain : null, { renderer: l2 } = this.layer, c2 = !n3 || !a2?.functions.length || "raster-stretch" === l2?.type && l2.dynamicRangeAdjustment || !this.canUseWebGLForProcessing();
    t2.rasterFunctionChain = c2 ? null : a2;
    const u2 = null == i2 ? "na" : t2.rasterFunctionChain ? "gpu" : "cpu";
    t2.children.forEach((e3) => {
      const { bitmap: r3 } = e3;
      r3 && (r3.suspended = s2 !== u2, r3.processed = false, r3.processedTexture = null);
    }), this._rasterFunctionState = u2;
  }
  async updateTileSource(e2, r2) {
    const t2 = this._getBandIds(), s2 = this._getLayerInterpolation(), i2 = this.canUseWebGLForProcessing(), { source: o3, globalSymbolizerParams: n3, suspended: a2, coords: l2, resolution: c2 } = r2, u2 = this.layerView.hasTilingEffects ? n3 : r2.symbolizerParams, { bitmap: p2 } = e2;
    if ([p2.x, p2.y] = l2, p2.resolution = c2, null != o3?.pixelBlock) {
      const e3 = { extent: o3.extent, pixelBlock: o3.pixelBlock, srcPixelSize: o3.srcTilePixelSize };
      if (p2.rawPixelData = e3, i2)
        p2.source = o3.pixelBlock, p2.isRendereredSource = false;
      else {
        const r3 = await this.layer.applyRenderer(e3, "stretch" === n3?.type ? n3 : void 0);
        p2.source = r3, p2.isRendereredSource = true;
      }
      p2.symbolizerParameters = i2 ? u2 : null, p2.transformGrid = i2 ? o3.transformGrid : null;
    } else {
      const e3 = this.createEmptyTilePixelBlock();
      p2.source = e3, p2.symbolizerParameters = i2 ? u2 : null, p2.transformGrid = null;
    }
    p2.bandIds = i2 ? t2 : null, p2.width = this._tileInfoView.tileInfo.size[0], p2.height = this._tileInfoView.tileInfo.size[1], p2.interpolation = s2, p2.suspended = a2, p2.invalidateTexture();
  }
  async updateTileSymbolizerParameters(e2, r2) {
    const { local: t2, global: s2 } = r2, i2 = this._getBandIds(), o3 = this._getLayerInterpolation(), n3 = this.canUseWebGLForProcessing(), { bitmap: a2 } = e2, { rawPixelData: l2 } = a2;
    n3 || null == l2 ? (a2.isRendereredSource && null != l2 && (a2.source = l2.pixelBlock), a2.isRendereredSource = false) : (a2.source = await this.layer.applyRenderer(l2, "stretch" === s2?.type ? s2 : void 0), a2.isRendereredSource = true), a2.symbolizerParameters = n3 ? this.layerView.hasTilingEffects ? s2 : t2 : null, a2.bandIds = n3 ? i2 : null, a2.interpolation = o3, a2.suspended = false;
  }
  _getLayerInterpolation() {
    const { interpolation: e2, renderer: r2 } = this.layer;
    if (!r2)
      return e2;
    const t2 = r2.type;
    return "raster-colormap" === t2 || "unique-value" === t2 || "class-breaks" === t2 ? "nearest" : "raster-stretch" === r2.type && null != r2.colorRamp ? "bilinear" === e2 || "cubic" === e2 ? "bilinear" : "nearest" : e2;
  }
};
e$e([y$1()], n$1.prototype, "container", void 0), e$e([y$1()], n$1.prototype, "layer", void 0), e$e([y$1()], n$1.prototype, "type", void 0), n$1 = e$e([c$4("esri.views.2d.layers.imagery.ImageryTileView2D")], n$1);
const a$1 = n$1;
class r extends r$a {
  constructor(t2, s2, e2, a2, r2, o3, l2 = null) {
    super(t2, s2, e2, a2, r2, o3), this.tileData = new f$1(l2), this.tileData.coordScale = [r2, o3], this.tileData.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.tileData.destroy(), this.tileData = null, this.stage = null;
  }
  set stencilRef(t2) {
    this.tileData.stencilRef = t2;
  }
  get stencilRef() {
    return this.tileData.stencilRef;
  }
  _createTransforms() {
    return { dvs: e$c(), tileMat3: e$c() };
  }
  setTransform(e2) {
    super.setTransform(e2);
    const i2 = this.resolution / (e2.resolution * e2.pixelRatio), a2 = this.transforms.tileMat3, [r2, o3] = this.tileData.offset, l2 = [this.x + r2 * this.resolution, this.y - o3 * this.resolution], [h2, n3] = e2.toScreenNoRotation([0, 0], l2), { symbolTileSize: f2 } = this.tileData.symbolizerParameters, m2 = Math.round((this.width - this.tileData.offset[0]) / f2) * f2, c2 = Math.round((this.height - this.tileData.offset[1]) / f2) * f2, u2 = m2 / this.rangeX * i2, D2 = c2 / this.rangeY * i2;
    s$f(a2, u2, 0, 0, 0, D2, 0, h2, n3, 1), i$7(this.transforms.dvs, e2.displayViewMat3, a2), this.tileData.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class o2 extends i$8 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false, this.symbolTypes = ["triangle"];
  }
  createTile(s2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), s2), [i2, o3] = this._tileInfoView.tileInfo.size, n3 = this._tileInfoView.getTileResolution(s2.level);
    return new r(s2, n3, t2[0], t2[3], i2, o3);
  }
  prepareRenderPasses(e2) {
    const r2 = e2.registerRenderPass({ name: "imagery (vf tile)", brushes: [d], target: () => this.children.map((e3) => e3.tileData), drawPhase: T$2.MAP });
    return [...super.prepareRenderPasses(e2), r2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === T$2.MAP && this.symbolTypes.forEach((s2) => {
      e2.renderPass = s2, super.doRender(e2);
    });
  }
}
let a = class extends R {
  constructor() {
    super(...arguments), this._handle = null, this.type = "rasterVF";
  }
  canUseWebGLForProcessing() {
    return false;
  }
  async fetchTile(e2, t2) {
    t2 = { ...t2, interpolation: "nearest", requestProjectedLocalDirections: true };
    const i2 = await this.layer.fetchTile(e2.level, e2.row, e2.col, t2);
    return "vector-magdir" === this.layer.rasterInfo.dataType && i2?.pixelBlock && (i2.pixelBlock = await this.layer.convertVectorFieldData(i2.pixelBlock, t2)), i2;
  }
  updateTileSource(e2, t2) {
    const i2 = t2.symbolizerParams, { tileData: r2 } = e2;
    r2.key = e2.key, r2.width = this._tileInfoView.tileInfo.size[0], r2.height = this._tileInfoView.tileInfo.size[1];
    const { symbolTileSize: s2 } = i2, { source: o3 } = t2;
    if (r2.offset = this._getTileSymbolOffset(r2.key, s2), null != o3?.pixelBlock) {
      const e3 = { extent: o3.extent, pixelBlock: o3.pixelBlock };
      r2.rawPixelData = e3, r2.symbolizerParameters = i2, r2.source = this._sampleVectorFieldData(o3.pixelBlock, i2, r2.offset);
    } else {
      const e3 = [Math.round((this._tileInfoView.tileInfo.size[0] - r2.offset[0]) / s2), Math.round((this._tileInfoView.tileInfo.size[1] - r2.offset[1]) / s2)], t3 = this.createEmptyTilePixelBlock(e3);
      r2.source = t3, r2.symbolizerParameters = i2;
    }
    return r2.invalidateVAO(), Promise.resolve();
  }
  updateTileSymbolizerParameters(e2, t2) {
    const i2 = t2.local, { symbolTileSize: r2 } = i2, { tileData: s2 } = e2;
    s2.offset = this._getTileSymbolOffset(s2.key, r2);
    const o3 = s2.symbolizerParameters.symbolTileSize;
    s2.symbolizerParameters = i2;
    const l2 = s2.rawPixelData?.pixelBlock;
    return null != l2 && o3 !== r2 && (s2.source = this._sampleVectorFieldData(l2, s2.symbolizerParameters, s2.offset)), Promise.resolve();
  }
  attach() {
    super.attach(), this.container = new o2(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this._updateSymbolType(this.layer.renderer), this._handle = d$1(() => this.layer.renderer, (e2) => this._updateSymbolType(e2));
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this._handle?.remove(), this._handle = null, this.container = null;
  }
  _getTileSymbolOffset(e2, t2) {
    const i2 = e2.col * this._tileInfoView.tileInfo.size[0] % t2, r2 = e2.row * this._tileInfoView.tileInfo.size[1] % t2;
    return [i2 > t2 / 2 ? t2 - i2 : -i2, r2 > t2 / 2 ? t2 - r2 : -r2];
  }
  _sampleVectorFieldData(e2, t2, i2) {
    const { symbolTileSize: r2 } = t2;
    return S(e2, "vector-uv", r2, i2);
  }
  _updateSymbolType(e2) {
    "vector-field" === e2.type && (this.container.symbolTypes = "wind-barb" === e2.style ? ["scalar", "triangle"] : "simple-scalar" === e2.style ? ["scalar"] : ["triangle"]);
  }
};
e$e([y$1()], a.prototype, "container", void 0), e$e([y$1()], a.prototype, "layer", void 0), e$e([y$1()], a.prototype, "type", void 0), a = e$e([c$4("esri.views.2d.layers.imagery.VectorFieldTileView2D")], a);
const n2 = a;
let g = class extends p$2(a$g(m$5(u$4))) {
  constructor() {
    super(...arguments), this._useWebGLForProcessing = true, this._useProgressiveUpdate = true, this.subview = null;
  }
  get useWebGLForProcessing() {
    return this._useWebGLForProcessing;
  }
  set useWebGLForProcessing(e2) {
    this._useWebGLForProcessing = e2, this.subview && "useWebGLForProcessing" in this.subview && (this.subview.useWebGLForProcessing = e2);
  }
  get useProgressiveUpdate() {
    return this._useWebGLForProcessing;
  }
  set useProgressiveUpdate(e2) {
    this._useProgressiveUpdate = e2, this.subview && "useProgressiveUpdate" in this.subview && (this.subview.useProgressiveUpdate = e2);
  }
  get displayParameters() {
    const { layer: e2 } = this, t2 = this._get("displayParameters");
    return e2.renderer ? { bandIds: e2.bandIds, renderer: e2.renderer, interpolation: e2.interpolation, multidimensionalDefinition: e2.multidimensionalDefinition, rasterFunction: "imagery-tile" === e2.type ? e2.rasterFunction : null } : t2;
  }
  update(e2) {
    this.subview?.update(e2), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.addAttachHandles([d$1(() => this.displayParameters, (e2, t2) => {
      const r2 = e2.interpolation !== t2?.interpolation && ("majority" === e2.interpolation || "majority" === t2?.interpolation) && r$c(this.layer), o3 = e2.renderer !== t2?.renderer && this._getSubviewType(t2?.renderer) !== this._getSubviewType(e2.renderer);
      o3 && this._updateSubview();
      const a2 = e2.multidimensionalDefinition !== t2?.multidimensionalDefinition, n3 = e2.rasterFunction !== t2?.rasterFunction, u2 = n3 && !this._useWebGLForProcessing, h2 = a2 || r2 || o3 || u2;
      this.subview.redrawOrRefetch({ refetch: h2, reprocess: n3 }).catch((e3) => {
        b(e3) || s$e.getLogger(this).error(e3);
      }), this.notifyChange("updating");
    }), d$1(() => this.layer.multidimensionalSubset ?? null, (e2, t2) => {
      const { multidimensionalDefinition: r2 } = this.layer;
      null != r2 && o$9(r2, e2) !== o$9(r2, t2) && (this.subview.redrawOrRefetch({ refetch: true }).catch((e3) => {
        b(e3) || s$e.getLogger(this).error(e3);
      }), this.notifyChange("updating"));
    }, C$1), d$1(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch({ refetch: true }).catch((e2) => {
        b(e2) || s$e.getLogger(this).error(e2);
      });
    }, P$1)]);
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.subview.moveEnd();
  }
  async hitTest(e2, s2) {
    return [{ type: "graphic", layer: this.layer, mapPoint: e2, graphic: new c$5({ attributes: {}, geometry: e2.clone() }) }];
  }
  doRefresh() {
    return this.subview ? this.subview.doRefresh() : Promise.resolve();
  }
  _updateSubview() {
    const { renderer: e2 } = this.layer;
    if (!e2)
      return;
    const t2 = this._getSubviewType(e2);
    if (this.subview) {
      if (this.subview.type === t2)
        return void this._attachSubview(this.subview);
      this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
    }
    const { layer: s2 } = this;
    let i2;
    if (i2 = "rasterVF" === t2 ? new n2({ layer: s2, layerView: this }) : "flow" === t2 ? new h$5({ layer: s2, layerView: this }) : new a$1({ layer: s2, layerView: this }), "useWebGLForProcessing" in i2 && (i2.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in i2 && (i2.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in i2) {
      const { subview: e3 } = this;
      i2.previousLOD = e3 && "previousLOD" in e3 ? e3.previousLOD : null;
    }
    this._attachSubview(i2), this.subview = i2, this.requestUpdate();
  }
  _attachSubview(e2) {
    e2 && !e2.attached && (e2.attach(), e2.attached = true, this.container.addChildAt(e2.container, 0));
  }
  _detachSubview(e2) {
    e2?.attached && (this.container.removeChild(e2.container), e2.detach(), e2.attached = false);
  }
  _getSubviewType(e2) {
    const t2 = e2?.type;
    return "vector-field" === t2 ? "rasterVF" : "flow" === t2 ? "flow" : "raster";
  }
};
e$e([y$1()], g.prototype, "subview", void 0), e$e([y$1()], g.prototype, "useWebGLForProcessing", null), e$e([y$1()], g.prototype, "useProgressiveUpdate", null), e$e([y$1({ readOnly: true })], g.prototype, "displayParameters", null), g = e$e([c$4("esri.views.2d.layers.ImageryTileLayerView2D")], g);
const y = g;
export {
  y as default
};
