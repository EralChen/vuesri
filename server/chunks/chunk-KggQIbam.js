import { m8 as i$5, ma as r$8, cK as L, m9 as e$d, mf as o$8, mg as M, mh as t$2, mk as h$1, xW as b$2, iz as i$6, lF as c$2, Ay as f, Az as m$4, AA as O, AB as h$2, AC as _$1, AD as A$1, AE as p$1, AF as a$g, lG as e$e, cM as P, cJ as U, fq as D$1, m as m$5, xR as t$3, mb as R$1, o7 as O$1, lD as h$3, AG as l$1, x as x$1, AH as T, AI as g$1, sd as a$h, py as r$9, cu as E, b6 as u$1, o0 as mt, aV as e$f, aX as y$1, a_ as c$3, bZ as S$1, bW as h$4, f9 as k, gN as r$a, aC as M$1, AJ as g$2, fQ as t$4, gL as h$5, gM as m$6, AK as a$i, hk as u$2, AL as D, as as j$1, AM as ae, cY as x$2, cd as b$3, aT as s$f, AN as i$8, AO as u$3, AP as r$b, AQ as a$j, iB as r$c, ce as d$1, AR as S, et as i$9, gJ as m$7, eu as u$4, cf as C$1, AS as o$9, bX as P$1 } from "./chunk-ejFG4zJ0.js";
import { f as f$1, d, a as d$2 } from "./chunk-Zl47MRFM.js";
import { i as i$7 } from "./chunk-YBgi6goH.js";
import { p as p$2 } from "./chunk-aGzW8pot.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const p = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: false, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, stretchType: "none", type: "stretch" };
class _ extends i$5 {
  constructor(e2 = null, t2 = null, s2 = null) {
    super(), this._textureInvalidated = true, this._colormapTextureInvalidated = true, this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, this._colormapTexture = null, this._colormap = null, this._supportsBilinearTexture = true, this._processedTexture = null, this.functionTextures = [], this.projected = false, this.stencilRef = 0, this.coordScale = [1, 1], this._processed = false, this._symbolizerParameters = null, this.height = null, this.isRendereredSource = false, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this.rawPixelData = null, this._suspended = false, this._bandIds = null, this._interpolation = null, this._transformGrid = null, this.width = null, this.x = 0, this.y = 0, this.source = e2, this.transformGrid = t2, this.interpolation = s2;
  }
  destroy() {
    this._disposeTextures();
  }
  get processedTexture() {
    return this._processedTexture;
  }
  set processedTexture(e2) {
    this._processedTexture !== e2 && (this._disposeTextures(true), this._processedTexture = e2);
  }
  get rasterTexture() {
    return this._rasterTexture;
  }
  set rasterTexture(e2) {
    this._rasterTexture !== e2 && (this._rasterTexture?.dispose(), this._rasterTexture = e2), null == e2 && (this.projected = false);
  }
  get processed() {
    return this._processed;
  }
  set processed(t2) {
    this._processed = t2, t2 || (r$8(this.processedTexture), this.invalidateTexture());
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || p;
  }
  set symbolizerParameters(e2) {
    this._symbolizerParameters !== e2 && (this._symbolizerParameters = e2, this._colormapTextureInvalidated = true, this.commonUniforms = null);
  }
  get source() {
    return this._source;
  }
  set source(e2) {
    this._source !== e2 && (this._source = e2, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this.commonUniforms = null, this.projected = false, this.invalidateTexture());
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(e2) {
    this._suspended && !e2 && this.stage && (this.ready(), this.requestRender()), this._suspended = e2;
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(e2) {
    this._bandIds = e2, this._isBandIdsChanged(e2) && (this.projected = false, this.invalidateTexture());
  }
  get interpolation() {
    return this._interpolation || "nearest";
  }
  set interpolation(e2) {
    this._interpolation = e2, this._rasterTexture && this._rasterTexture.setSamplingMode("bilinear" === this._getTextureSamplingMethod(e2 || "nearest") ? L.LINEAR : L.NEAREST);
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(t2) {
    this._transformGrid !== t2 && (this._transformGrid = t2, this._transformGridTexture = r$8(this._transformGridTexture));
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this.requestRender());
  }
  getRasterTextureSize(e2 = false) {
    const t2 = e2 || this.projected;
    return [t2 ? this.width : this.source?.width || this.width, t2 ? this.height : this.source?.height || this.height];
  }
  getRasterCellSize() {
    const e2 = this.rawPixelData?.srcPixelSize, { projected: t2, resolution: s2 } = this;
    return e2 && !t2 ? [e2.x, e2.y] : [s2, s2];
  }
  _createTransforms() {
    return { displayViewScreenMat3: e$d() };
  }
  setTransform(e2) {
    const a3 = o$8(this.transforms.displayViewScreenMat3), [h2, n2] = e2.toScreenNoRotation([0, 0], [this.x, this.y]), l2 = this.resolution / this.pixelRatio / e2.resolution, d2 = l2 * this.width, c2 = l2 * this.height, p2 = Math.PI * this.rotation / 180;
    M(a3, a3, t$2(h2, n2)), M(a3, a3, t$2(d2 / 2, c2 / 2)), h$1(a3, a3, -p2), M(a3, a3, t$2(-d2 / 2, -c2 / 2)), b$2(a3, a3, t$2(d2, c2)), i$6(this.transforms.displayViewScreenMat3, e2.displayViewMat3, a3);
  }
  getTextures({ forProcessing: e2 = false, useProcessedTexture: t2 = false } = {}) {
    const s2 = t2 ? this._processedTexture ?? this._rasterTexture : this._rasterTexture, r2 = [], i2 = [];
    return s2 ? (this._transformGridTexture && !this.projected && (i2.push(this._transformGridTexture), r2.push("u_transformGrid")), t2 ? (i2.push(s2), r2.push("u_image"), this._colormapTexture && (i2.push(this._colormapTexture), r2.push("u_colormap")), { names: r2, textures: i2 }) : (i2.push(s2), r2.push("u_image"), this._colormapTexture && !e2 && (i2.push(this._colormapTexture), r2.push("u_colormap")), { names: r2, textures: i2 })) : { names: r2, textures: i2 };
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: e2 }) {
    if (!this.stage)
      return void this._disposeTextures();
    const t2 = this._isValidSource(this.source);
    t2 && this._colormapTextureInvalidated && (this._colormapTextureInvalidated = false, this._updateColormapTexture(e2)), this._textureInvalidated && (this._textureInvalidated = false, this._createOrDestroyRasterTexture(e2), this._rasterTexture && (t2 ? this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = c$2(e2, this.transformGrid)) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender()));
  }
  updateProcessedTexture() {
    const { functionTextures: e2 } = this;
    0 !== e2.length && (this.processedTexture = e2.shift(), e2.forEach((e3) => e3?.dispose()), e2.length = 0);
  }
  _createOrDestroyRasterTexture(e2) {
    const t2 = this.source?.extractBands(this.bandIds);
    if (!this._isValidSource(t2))
      return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
    const s2 = !this._isBandIdsChanged(this.bandIds);
    if (this._rasterTexture) {
      if (s2)
        return;
      this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
    }
    this._supportsBilinearTexture = !!e2.capabilities.textureFloat?.textureFloatLinear;
    const r2 = this._getTextureSamplingMethod(this.interpolation), i2 = this.isRendereredSource;
    this._rasterTexture = f(e2, t2, r2, i2), this.projected = false, this._processed = false, this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null;
  }
  _isBandIdsChanged(e2) {
    const t2 = this._rasterTextureBandIds;
    return !(null == t2 && null == e2 || t2 && e2 && t2.join("") === e2.join(""));
  }
  _isValidSource(e2) {
    return null != e2 && e2.pixels?.length > 0;
  }
  _getTextureSamplingMethod(e2) {
    const { type: t2 } = this.symbolizerParameters, s2 = "lut" === t2 || "hillshade" === t2 || "stretch" === t2 && 1 === this.symbolizerParameters.bandCount;
    return !this._supportsBilinearTexture || s2 || "bilinear" !== e2 && "cubic" !== e2 ? "nearest" : "bilinear";
  }
  _updateColormapTexture(e2) {
    const t2 = this._colormap, s2 = this.symbolizerParameters.colormap;
    return s2 ? t2 ? s2.length !== t2.length || s2.some((e3, s3) => e3 !== t2[s3]) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = m$4(e2, s2), void (this._colormap = s2)) : void 0 : (this._colormapTexture = m$4(e2, s2), void (this._colormap = s2)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
  }
  _disposeTextures(e2 = false) {
    !this._transformGridTexture || e2 && !this.projected || (this._transformGridTexture.dispose(), this._transformGridTexture = null), !e2 && this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null, this._colormap = null, this._colormapTextureInvalidated = true), !e2 && this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this._processedTexture && (this._processedTexture.dispose(), this._processedTexture = null);
  }
}
function m$3(e2) {
  return null != e2.source;
}
function i$4(i2) {
  const n2 = [];
  return i2 && (n2.push("applyProjection"), 1 === i2.spacing[0] && n2.push("lookupProjection")), n2;
}
function n$i(i2, n2, e2) {
  const t2 = !e2.capabilities.textureFloat?.textureFloatLinear, u2 = [];
  return "cubic" === i2 ? u2.push("bicubic") : "bilinear" === i2 && (n2 ? (u2.push("bilinear"), u2.push("nnedge")) : t2 && u2.push("bilinear")), u2;
}
const s$e = { vsPath: "raster/common", fsPath: "raster/lut", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$f(t2, e2, o3) {
  const a3 = o3 ? [] : i$4(e2.transformGrid);
  return { defines: a3, program: t2.painter.materialManager.getProgram(s$e, a3) };
}
function n$h(r2, s2, a3, n2, m2 = false) {
  const { names: i2, textures: c2 } = a3.getTextures({ useProcessedTexture: m2 });
  O(r2.context, s2, i2, c2), h$2(s2, n2, a3.commonUniforms), s2.setUniformMatrix3fv("u_dvsMat3", a3.transforms.displayViewScreenMat3);
  const { colormap: f2, colormapOffset: u2 } = a3.symbolizerParameters, l2 = _$1(f2, u2);
  h$2(s2, n2, l2);
}
const m$2 = { createProgram: a$f, bindTextureAndUniforms: n$h };
const n$g = { vsPath: "raster/common", fsPath: "raster/hillshade", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function i$3(e2, o3, s2) {
  const { colormap: a3 } = o3.symbolizerParameters, i2 = [...s2 ? [] : i$4(o3.transformGrid), ...n$i(o3.interpolation, true, e2.context)];
  null != a3 && i2.push("applyColormap");
  return { defines: i2, program: e2.painter.materialManager.getProgram(n$g, i2) };
}
function m$1(r2, t2, n2, i2, m2 = false) {
  const { names: c2, textures: l2 } = n2.getTextures({ useProcessedTexture: m2 });
  O(r2.context, t2, c2, l2), h$2(t2, i2, n2.commonUniforms), t2.setUniformMatrix3fv("u_dvsMat3", n2.transforms.displayViewScreenMat3);
  const f2 = n2.symbolizerParameters, { colormap: p2, colormapOffset: u2 } = f2;
  if (null != p2) {
    const r3 = _$1(p2, u2);
    h$2(t2, i2, r3);
  }
  const d2 = A$1(f2);
  h$2(t2, i2, d2);
}
const c$1 = { createProgram: i$3, bindTextureAndUniforms: m$1 };
const n$f = { vsPath: "raster/common", fsPath: "raster/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function i$2(e2, o3, s2) {
  const { colormap: a3, bandCount: i2 } = o3.symbolizerParameters, m2 = [...s2 ? [] : i$4(o3.transformGrid), ...n$i(o3.interpolation, 1 === i2, e2.context)];
  o3.isRendereredSource && !s2 ? m2.push("noop") : null != a3 && m2.push("applyColormap");
  return { defines: m2, program: e2.painter.materialManager.getProgram(n$f, m2) };
}
function m(r2, t2, n2, i2, m2 = false) {
  const { names: c2, textures: l2 } = n2.getTextures({ useProcessedTexture: m2 });
  O(r2.context, t2, c2, l2), h$2(t2, i2, n2.commonUniforms), t2.setUniformMatrix3fv("u_dvsMat3", n2.transforms.displayViewScreenMat3);
  const p2 = n2.symbolizerParameters, { colormap: u2, colormapOffset: f2 } = p2;
  if (null != u2) {
    const r3 = _$1(u2, f2);
    h$2(t2, i2, r3);
  }
  const d2 = p$1(p2);
  h$2(t2, i2, d2);
}
const c = { createProgram: i$2, bindTextureAndUniforms: m };
const s$d = /* @__PURE__ */ new Map();
function o$7(t2) {
  return s$d.get(t2);
}
s$d.set("lut", m$2), s$d.set("hillshade", c$1), s$d.set("stretch", c);
const t$1 = [1, 1], n$e = [2, 0, 0, 0, 2, 0, -1, -1, 0];
function a$e(t2, n2, a3) {
  const { context: r2, rasterFunction: s2, hasBranches: i2 } = t2, { raster: o3 } = s2.parameters, f2 = i2 ? o3?.id ?? -1 : 0, m2 = a3.functionTextures[f2] ?? a3.rasterTexture;
  O(r2, n2, ["u_image"], [m2]);
}
function r$7(t2, n2, r2) {
  const { rasters: s2 } = t2.rasterFunction.parameters;
  if (!s2)
    return;
  if (s2.length < 2)
    return a$e(t2, n2, r2);
  const i2 = s2.filter((e2) => "Constant" !== e2.name).map((e2) => null != e2.id && "Identity" !== e2.name ? r2.functionTextures[e2.id] : r2.rasterTexture);
  if (O(t2.context, n2, ["u_image", "u_image1", "u_image2"].slice(0, i2.length), i2), i2.length !== s2.length) {
    if (2 === s2.length) {
      const e2 = s2.findIndex((e3) => "Constant" === e3.name), t3 = 0 === e2 ? [0, 1, 0, 1, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 0], { value: a3 } = s2[e2].parameters;
      n2.setUniform1f("u_image1Const", a3), n2.setUniformMatrix3fv("u_imageSwap", t3);
    } else if (3 === s2.length) {
      const e2 = [];
      if (s2.forEach((t3, n3) => "Constant" === t3.name && e2.push(n3)), 1 === e2.length) {
        const { value: t3 } = s2[e2[0]].parameters;
        n2.setUniform1f("u_image1Const", t3);
        const a3 = 0 === e2[0] ? [0, 1, 0, 0, 0, 1, 1, 0, 0] : 1 === e2[0] ? [1, 0, 0, 0, 0, 1, 0, 1, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 1];
        n2.setUniformMatrix3fv("u_imageSwap", a3);
      } else if (2 === e2.length) {
        const { value: t3 } = s2[e2[0]].parameters;
        n2.setUniform1f("u_image1Const", t3);
        const { value: a3 } = s2[e2[1]].parameters;
        n2.setUniform1f("u_image2Const", a3);
        const r3 = s2.findIndex((e3) => "Constant" !== e3.name), i3 = 0 === r3 ? [1, 0, 0, 0, 1, 0, 0, 0, 1] : 1 === r3 ? [0, 1, 0, 1, 0, 0, 0, 0, 1] : [0, 0, 1, 1, 0, 0, 0, 1, 0];
        n2.setUniformMatrix3fv("u_imageSwap", i3);
      }
    }
  }
}
function s$c(e2) {
  e2.setUniform2fv("u_coordScale", t$1), e2.setUniformMatrix3fv("u_dvsMat3", n$e);
}
const r$6 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/aspect", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$d(t2, e2) {
  return t2.painter.materialManager.getProgram(r$6, []);
}
function s$b(r2, a3, s2) {
  a$e(r2, a3, s2), s$c(a3);
  const n2 = s2.getRasterTextureSize();
  a3.setUniform2fv("u_srcImageSize", n2);
  const o3 = s2.getRasterCellSize();
  a3.setUniform2fv("u_cellSize", o3);
}
const n$d = { createProgram: a$d, bindTextureAndUniforms: s$b };
const a$c = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/bandarithmetic", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$c(t2, r2) {
  const { painter: e2, rasterFunction: n2 } = t2, { indexType: s2 } = n2.parameters;
  return e2.materialManager.getProgram(a$c, [s2]);
}
function n$c(a3, e2, n2) {
  a$e(a3, e2, n2), s$c(e2);
  const { bandIndexMat3: s2 } = a3.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", s2);
}
const s$a = { createProgram: e$c, bindTextureAndUniforms: n$c };
const n$b = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/compositeband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$b(t2, r2) {
  const a3 = t2.rasterFunction.parameters.rasters.filter((t3) => "Constant" === t3.name), e2 = [];
  return a3.length && (e2.push("oneConstant"), 2 === a3.length && e2.push("twoConstant")), t2.painter.materialManager.getProgram(n$b, e2);
}
function e$b(n2, a3, e2) {
  r$7(n2, a3, e2), s$c(a3);
}
const s$9 = { createProgram: a$b, bindTextureAndUniforms: e$b };
const s$8 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/contrast", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$a(t2, r2) {
  return t2.painter.materialManager.getProgram(s$8, []);
}
function a$a(s2, e2, a3) {
  a$e(s2, e2, a3), s$c(e2);
  const { contrastOffset: n2, brightnessOffset: o3 } = s2.rasterFunction.parameters;
  e2.setUniform1f("u_contrastOffset", n2), e2.setUniform1f("u_brightnessOffset", o3);
}
const n$a = { createProgram: e$a, bindTextureAndUniforms: a$a };
const t = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/convolution", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$9(e2, r2) {
  const { painter: a3, rasterFunction: n2 } = e2, { kernelRows: o3, kernelCols: s2 } = n2.parameters, i2 = [{ name: "rows", value: o3 }, { name: "cols", value: s2 }];
  return a3.materialManager.getProgram(t, i2);
}
function n$9(t2, a3, n2) {
  a$e(t2, a3, n2), s$c(a3), a3.setUniform2fv("u_srcImageSize", [n2.width, n2.height]);
  const { kernel: o3, clampRange: s2 } = t2.rasterFunction.parameters;
  a3.setUniform1fv("u_kernel", o3), a3.setUniform2fv("u_clampRange", s2);
}
const o$6 = { createProgram: a$9, bindTextureAndUniforms: n$9 };
const e$9 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/curvature", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function a$8(r2, t2) {
  const { painter: a3, rasterFunction: s2 } = r2, { curvatureType: n2 } = s2.parameters, o3 = [n2];
  return a3.materialManager.getProgram(e$9, o3);
}
function s$7(e2, a3, s2) {
  a$e(e2, a3, s2), s$c(a3);
  const n2 = s2.getRasterTextureSize();
  a3.setUniform2fv("u_srcImageSize", n2);
  const { zFactor: o3 } = e2.rasterFunction.parameters, i2 = s2.getRasterCellSize();
  a3.setUniform1f("u_zlFactor", 200 * o3 / i2[0] / i2[1]);
}
const n$8 = { createProgram: a$8, bindTextureAndUniforms: s$7 };
const a$7 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/extractband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$8(t2, r2) {
  return t2.painter.materialManager.getProgram(a$7, []);
}
function n$7(a3, e2, n2) {
  a$e(a3, e2, n2), s$c(e2);
  const { bandIndexMat3: o3 } = a3.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", o3);
}
const o$5 = { createProgram: e$8, bindTextureAndUniforms: n$7 };
const e$7 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/focalstatistics", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function r$5(t2, a3) {
  const { painter: r2, rasterFunction: s2 } = t2, { kernelRows: n2, kernelCols: o3, fillNoDataOnly: i2, statisticsType: c2 } = s2.parameters, l2 = [{ name: "rows", value: n2 }, { name: "cols", value: o3 }, c2];
  return i2 && l2.push("fill"), r2.materialManager.getProgram(e$7, l2);
}
function s$6(e2, r2, s2) {
  a$e(e2, r2, s2), s$c(r2), r2.setUniform2fv("u_srcImageSize", [s2.width, s2.height]);
  const { clampRange: n2 } = e2.rasterFunction.parameters;
  r2.setUniform2fv("u_clampRange", n2);
}
const n$6 = { createProgram: r$5, bindTextureAndUniforms: s$6 };
const a$6 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/grayscale", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$6(t2, r2) {
  return t2.painter.materialManager.getProgram(a$6, []);
}
function s$5(a3, e2, s2) {
  a$e(a3, e2, s2), s$c(e2);
  const { weights: n2 } = a3.rasterFunction.parameters;
  e2.setUniform3fv("u_weights", n2);
}
const n$5 = { createProgram: e$6, bindTextureAndUniforms: s$5 };
const a$5 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/local", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$5(t2) {
  const { painter: n2, rasterFunction: e2 } = t2, { imageCount: r2, operationName: o3, rasters: s2, isOutputRounded: u2 } = e2.parameters, i2 = [o3.toLowerCase()];
  2 === r2 && i2.push("twoImages");
  const m2 = s2.filter((t3) => "Constant" === t3.name);
  return m2.length && (i2.push("oneConstant"), 2 === m2.length && i2.push("twoConstant")), u2 && i2.push("roundOutput"), n2.materialManager.getProgram(a$5, i2);
}
function r$4(a3, e2, r2) {
  r$7(a3, e2, r2), s$c(e2);
  const { domainRange: o3 } = a3.rasterFunction.parameters;
  e2.setUniform2fv("u_domainRange", o3);
}
const o$4 = { createProgram: e$5, bindTextureAndUniforms: r$4 };
const r$3 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/mask", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function n$4(t2, a3) {
  const { painter: n2, rasterFunction: e2 } = t2, s2 = e2.parameters.bandCount > 1 ? ["multiBand"] : [];
  return n2.materialManager.getProgram(r$3, s2);
}
function e$4(r2, n2, e2) {
  a$e(r2, n2, e2), s$c(n2);
  const { includedRanges: s2, noDataValues: o3 } = r2.rasterFunction.parameters;
  n2.setUniform1fv("u_includedRanges", s2), n2.setUniform1fv("u_noDataValues", o3);
}
const s$4 = { createProgram: n$4, bindTextureAndUniforms: e$4 };
const a$4 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/ndvi", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$3(t2, r2) {
  const { painter: e2, rasterFunction: n2 } = t2, s2 = n2.parameters.scaled ? ["scaled"] : [];
  return e2.materialManager.getProgram(a$4, s2);
}
function n$3(a3, e2, n2) {
  a$e(a3, e2, n2), s$c(e2);
  const { bandIndexMat3: s2 } = a3.rasterFunction.parameters;
  e2.setUniformMatrix3fv("u_bandIndexMat3", s2);
}
const s$3 = { createProgram: e$3, bindTextureAndUniforms: n$3 };
const r$2 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/remap", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function e$2(a3, t2) {
  return a3.painter.materialManager.getProgram(r$2, []);
}
function n$2(r2, e2, n2) {
  a$e(r2, e2, n2), s$c(e2);
  const { noDataRanges: s2, rangeMaps: o3, allowUnmatched: f2, clampRange: i2 } = r2.rasterFunction.parameters;
  e2.setUniform1fv("u_noDataRanges", s2), e2.setUniform1fv("u_rangeMaps", o3), e2.setUniform1f("u_unmatchMask", f2 ? 1 : 0), e2.setUniform2fv("u_clampRange", i2);
}
const s$2 = { createProgram: e$2, bindTextureAndUniforms: n$2 };
const e$1 = { vsPath: "raster/common", fsPath: "raster/reproject", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function i$1(r2, t2) {
  const { painter: i2 } = r2, o3 = [], { interpolation: s2, transformGrid: n2 } = t2, a3 = r2.rasterFunction?.parameters;
  return "cubic" === s2 ? o3.push("bicubic") : "bilinear" === s2 && (o3.push("bilinear"), a3?.requireNNEdge && o3.push("nnedge")), n2 && (o3.push("applyProjection"), 1 === n2.spacing[0] && o3.push("lookupProjection")), i2.materialManager.getProgram(e$1, o3);
}
function o$3(e2, i2, o3) {
  const { names: s2, textures: n2 } = o3.getTextures({ forProcessing: true });
  O(e2.context, i2, s2, n2), i2.setUniform1f("u_scale", 1), i2.setUniform2fv("u_offset", [0, 0]), i2.setUniform2fv("u_coordScale", [1, 1]), i2.setUniformMatrix3fv("u_dvsMat3", [2, 0, 0, 0, 2, 0, -1, -1, 0]), i2.setUniform1i("u_flipY", 0), i2.setUniform1f("u_opacity", 1);
  const { width: a3, height: f2, source: c2, transformGrid: m2 } = o3;
  i2.setUniform2fv("u_srcImageSize", [c2.width, c2.height]), i2.setUniform2fv("u_targetImageSize", [a3, f2]), i2.setUniform2fv("u_transformSpacing", m2 ? m2.spacing : a$g), i2.setUniform2fv("u_transformGridSize", m2 ? m2.size : a$g);
}
const s$1 = { createProgram: i$1, bindTextureAndUniforms: o$3 };
const r$1 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/slope", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function s(e2, t2) {
  const { painter: s2, rasterFunction: o3 } = e2, { slopeType: a3 } = o3.parameters, i2 = "percent-rise" === a3 ? ["percentRise"] : [];
  return s2.materialManager.getProgram(r$1, i2);
}
function o$2(r2, s2, o3) {
  a$e(r2, s2, o3), s$c(s2);
  const a3 = o3.getRasterTextureSize();
  s2.setUniform2fv("u_srcImageSize", a3);
  const i2 = o3.getRasterCellSize();
  s2.setUniform2fv("u_cellSize", i2);
  const { zFactor: n2, slopeType: c2, pixelSizePower: f2, pixelSizeFactor: p2 } = r2.rasterFunction.parameters;
  s2.setUniform1f("u_zFactor", n2), s2.setUniform1f("u_pixelSizePower", "adjusted" === c2 ? f2 : 0), s2.setUniform1f("u_pixelSizeFactor", "adjusted" === c2 ? p2 : 0);
}
const a$3 = { createProgram: s, bindTextureAndUniforms: o$2 };
const a$2 = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function u(t2, r2) {
  const { useGamma: u2, bandCount: e2, isOutputRounded: n2 } = t2.rasterFunction.parameters, o3 = [];
  return u2 && o3.push("useGamma"), e2 > 1 && o3.push("multiBand"), n2 && o3.push("roundOutput"), t2.painter.materialManager.getProgram(a$2, o3);
}
function e(a3, u2, e2) {
  a$e(a3, u2, e2), s$c(u2);
  const { width: n2, height: o3 } = e2, m2 = a3.rasterFunction.parameters;
  u2.setUniform2fv("u_srcImageSize", [n2, o3]), u2.setUniform1f("u_minOutput", m2.outMin), u2.setUniform1f("u_maxOutput", m2.outMax), u2.setUniform1fv("u_factor", m2.factor), u2.setUniform1fv("u_minCutOff", m2.minCutOff), u2.setUniform1fv("u_maxCutOff", m2.maxCutOff), u2.setUniform1fv("u_gamma", m2.gamma), u2.setUniform1fv("u_gammaCorrection", m2.gammaCorrection);
}
const n$1 = { createProgram: u, bindTextureAndUniforms: e };
const b$1 = /* @__PURE__ */ new Map();
function v(r2, e2) {
  const t2 = new e$e();
  return t2.width = r2, t2.height = e2, t2.internalFormat = P.RGBA32F, t2.samplingMode = L.NEAREST, t2.dataType = U.FLOAT, t2.isImmutable = true, t2.wrapMode = D$1.CLAMP_TO_EDGE, t2;
}
function A(r2, e2, t2, o3) {
  const { context: s2, requestRender: n2, allowDelayedRender: c2 } = r2, i2 = o3.createProgram(r2, t2);
  return c2 && null != n2 && !i2.compiled ? (n2(), null) : (s2.bindFramebuffer(e2), s2.setViewport(0, 0, e2.width, e2.height), s2.useProgram(i2), i2);
}
function F(r2) {
  return b$1.get(r2.toLowerCase());
}
function y(r2, e2, t2, o3) {
  const s2 = r2.rasterFunction.name.toLowerCase(), n2 = "reproject" === s2 ? s$1 : F(s2);
  if (null == n2)
    return;
  const c2 = A(r2, t2, o3, n2);
  if (!c2)
    return;
  n2.bindTextureAndUniforms(r2, c2, o3);
  const { interpolation: i2 } = o3;
  "reproject" === s2 && (o3.interpolation = "nearest"), e2.draw();
  const [a3, m2] = o3.getRasterTextureSize("reproject" === s2), p2 = v(a3, m2), u2 = new m$5(r2.context, p2);
  if (t2.copyToTexture(0, 0, a3, m2, 0, 0, u2), "reproject" === s2)
    o3.rasterTexture = u2, o3.projected = true, o3.interpolation = i2;
  else {
    const e3 = r2.hasBranches ? r2.rasterFunction.id : 0;
    o3.functionTextures[e3] = u2;
  }
}
b$1.set("arithmetic", o$4), b$1.set("aspect", n$d), b$1.set("bandarithmetic", s$a), b$1.set("compositeband", s$9), b$1.set("convolution", o$6), b$1.set("contrastbrightness", n$a), b$1.set("curvature", n$8), b$1.set("extractband", o$5), b$1.set("statistics", n$6), b$1.set("grayscale", n$5), b$1.set("local", o$4), b$1.set("mask", s$4), b$1.set("ndvi", s$3), b$1.set("remap", s$2), b$1.set("slope", a$3), b$1.set("stretch", n$1);
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
    const { timeline: n2, context: a3 } = t2;
    n2.begin(this.name);
    const d2 = a3.getBoundFramebufferObject(), c2 = a3.getViewport();
    o3 || (r2.processedTexture = r$8(r2.processedTexture)), a3.setStencilFunction(O$1.EQUAL, r2.stencilRef, 255), r2.updateTexture(t2), this._initQuad(a3);
    const [f2, u2] = r2.getRasterTextureSize(o3), { isStandardRasterTileSize: p2, fbo: h2 } = this._getRasterFBO(a3, f2, u2);
    y(t2, this._quad, h2, r2), p2 || h2.dispose(), a3.bindFramebuffer(d2), a3.setViewport(c2.x, c2.y, c2.width, c2.height), n2.end(this.name);
  }
  _drawBitmap(e2, t2, s2 = false) {
    const { timeline: i2, context: o3 } = e2;
    if (i2.begin(this.name), o3.setStencilFunction(O$1.EQUAL, t2.stencilRef, 255), t2.updateTexture(e2), s2 && !t2.processedTexture) {
      if (t2.updateProcessedTexture(), !t2.processedTexture)
        return void i2.end(this.name);
      t2.processed = true;
    }
    this._initBitmapCommonUniforms(t2);
    const a3 = t2.symbolizerParameters.type, d2 = o$7(a3), { requestRender: c2, allowDelayedRender: f2 } = e2, { defines: u2, program: p2 } = d2.createProgram(e2, t2, t2.projected && s2);
    if (f2 && null != c2 && !p2.compiled)
      return void c2();
    o3.useProgram(p2);
    const h2 = this._getUniformInfos(a3, o3, p2, u2);
    this._quad || (this._quad = new h$3(o3, [0, 0, 1, 0, 0, 1, 1, 1])), d2.bindTextureAndUniforms(e2, p2, t2, h2, s2), this._quad.draw(), i2.end(this.name);
  }
  _initBitmapCommonUniforms(e2) {
    if (!e2.commonUniforms) {
      const t2 = g$1(1, [0, 0]), { transformGrid: r2, width: s2, height: i2 } = e2, o3 = l$1(r2, [s2, i2], [e2.source.width, e2.source.height], 1, false);
      e2.commonUniforms = { ...t2, ...o3, u_coordScale: e2.coordScale };
    }
  }
  _getRasterFBO(e2, t2, r2) {
    const s2 = t2 === a$h && r2 === a$h;
    return s2 ? (this._fbo || (this._fbo = this._createNewFBO(e2, t2, r2)), { isStandardRasterTileSize: s2, fbo: this._fbo }) : { isStandardRasterTileSize: s2, fbo: this._createNewFBO(e2, t2, r2) };
  }
  _createNewFBO(e2, t2, r2) {
    const s2 = v(t2, r2);
    return new x$1(e2, s2);
  }
  _initQuad(e2) {
    this._quad || (this._quad = new h$3(e2, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  _getUniformInfos(e2, t2, r2, s2) {
    const i2 = s2.length > 0 ? e2 + "-" + s2.join("-") : e2;
    if (this._rendererUniformInfos.has(i2))
      return this._rendererUniformInfos.get(i2);
    const o3 = T(t2, r2);
    return this._rendererUniformInfos.set(i2, o3), o3;
  }
}
class i extends r$9 {
  constructor(t2, e2, i2, a3, r2, l2, n2 = null) {
    super(t2, e2, i2, a3, r2, l2), this.bitmap = null, this.bitmap = new _(n2, null, null), this.bitmap.coordScale = [r2, l2], this.bitmap.once("isReady", () => this.ready());
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
    super.setTransform(t2), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  _createTransforms() {
    return { displayViewScreenMat3: e$d(), tileMat3: e$d() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
let o$1 = class o extends i$7 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false;
  }
  createTile(e2) {
    const s2 = this._getTileBounds(e2), [r2, i$12] = this._tileInfoView.tileInfo.size, n2 = this._tileInfoView.getTileResolution(e2.level);
    return new i(e2, n2, s2[0], s2[3], r2, i$12);
  }
  prepareRenderPasses(e2) {
    const s2 = e2.registerRenderPass({ name: "imagery (tile)", brushes: [h], target: () => this.children.map((e3) => e3.bitmap), drawPhase: E.MAP });
    return [...super.prepareRenderPasses(e2), s2];
  }
  doRender(e2) {
    if (!this.visible || e2.drawPhase !== E.MAP)
      return;
    const { rasterFunctionChain: s2 } = this;
    if (!s2)
      return e2.renderPass = "raster-bitmap", void super.doRender(e2);
    if (!s2.hasFocalFunction) {
      const [r2, t2] = this._tileInfoView.tileInfo.size;
      e2.renderPass = "raster", e2.rasterFunction = { name: "Reproject", parameters: { targetImageSize: [r2, t2], requireNNEdge: s2.isSourceSingleBand }, pixelType: "f32", id: 0, isNoopProcess: false }, super.doRender(e2);
    }
    if (s2?.functions.length) {
      const { functions: r2, hasBranches: t2 } = s2;
      for (let s3 = 0; s3 < r2.length; s3++) {
        const i2 = r2[s3];
        "Constant" !== i2.name && "Identity" !== i2.name && (e2.renderPass = "raster", e2.rasterFunction = i2, e2.hasBranches = t2, super.doRender(e2));
      }
    }
    e2.rasterFunction = null, e2.renderPass = "bitmap", super.doRender(e2);
  }
  _getTileBounds(r2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), r2);
    if (this.isCustomTilingScheme && r2.world) {
      const { tileInfo: e2 } = this._tileInfoView, i2 = mt(e2.spatialReference);
      if (i2) {
        const s2 = e2.lodAt(r2.level);
        if (!s2)
          return t2;
        const { resolution: n2 } = s2, o3 = i2 / n2 % e2.size[0], a3 = o3 ? (e2.size[0] - o3) * n2 : 0;
        t2[0] -= a3 * r2.world, t2[2] -= a3 * r2.world;
      }
    }
    return t2;
  }
};
const R = [0, 0];
let C = class extends S$1 {
  constructor() {
    super(...arguments), this._updatingHandles = new h$4(), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = [], this.previousLOD = null, this._needBlockCacheUpdate = false, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = false, this._maxIndexedColormapSize = 0, this._rasterFunctionState = "na", this._globalUpdateRequested = false, this.attached = false, this.timeExtent = null, this.redrawOrRefetch = k(async (e2 = {}) => {
      const t2 = this._rasterFunctionState;
      if (e2.reprocess && (await this._updatingHandles.addPromise(this.layer.updateRasterFunction()), this.updateRasterFunctionParameters()), !this.previousLOD || this.layerView.suspended)
        return;
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
      this._tileStrategy = new r$a({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: t2, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", e2), this.layerView.requestUpdate();
    }
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
    const { extent: t2, resolution: i2, scale: s2 } = e2.state, r2 = this._tileInfoView.getClosestInfoForScale(s2);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const e3 = this._srcResolutions[r2.level], s3 = t2.toJSON ? t2 : M$1.fromJSON(t2);
        g$2(this._blockCacheRegistryUrl, this._blockCacheRegistryId, s3, i2, e3, this.layer.raster.ioConfig.sampling);
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
    const e2 = t$4();
    this._maxIndexedColormapSize = 4 * (e2.maxTextureSize || 4096), this._initializeTileInfo(), this._tileInfoView = new h$5(this.layerView.tileInfo, this.layerView.fullExtent);
    const t2 = this._computeFetchConcurrency();
    this._fetchQueue = new m$6({ tileInfoView: this._tileInfoView, concurrency: t2, process: (e3, t3) => this._fetchTile(e3, t3) });
    const i2 = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new r$a({ cachePolicy: "purge", acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), cacheSize: i2, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, a$i(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryUrl = this._blockCacheRegistryId = null;
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
    const i2 = null != t2 ? t2.signal : null, s2 = this.canUseWebGLForProcessing(), { layerView: r2 } = this, { tileInfo: a3 } = r2, o3 = !a3.isWrappable && null != D(r2.view.spatialReference), l2 = s2 && this.layer.raster.hasUniqueSourceStorageInfo, n2 = { allowPartialFill: true, datumTransformation: r2.datumTransformation, interpolation: s2 ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: l2, skipRasterFunction: "raster" === this.type && null != this.container.rasterFunctionChain, signal: i2, srcResolution: this._srcResolutions[e2.level], timeExtent: r2.timeExtent, tileInfo: a3, disableWrapAround: o3 };
    return this.fetchTile(e2, n2);
  }
  _getCacheSize(e2) {
    return e2 ? 40 : 0;
  }
  _initializeTileInfo() {
    const { layerView: e2 } = this, t2 = e2.view.spatialReference;
    if (this._canUseLayerLODs()) {
      const { origin: i3, lods: s3 } = this.layer.tileInfo, r3 = s3.map(({ scale: e3 }) => e3), a4 = j$1.create({ spatialReference: t2, size: a$h, scales: r3, origin: i3 });
      return e2.set("tileInfo", a4), void (this._srcResolutions = s3.map(({ resolution: e3 }) => ({ x: e3, y: e3 })));
    }
    const { scales: i2, srcResolutions: s2, isCustomTilingScheme: r2 } = ae(this.layer.serviceRasterInfo, t2, { tileSize: a$h, alignGlobalDatasetWithAGOL: true, limitToSrcResolution: false }), a3 = j$1.create({ spatialReference: t2, size: a$h, scales: i2 }), o3 = 0 === a3.origin.x, { xmin: l2, ymax: h2 } = e2.fullExtent;
    (o3 || r2 && a3.origin.x > l2) && (a3.origin = new x$2({ x: l2, y: h2, spatialReference: t2 })), this._isCustomTilingScheme = r2, e2.set("tileInfo", a3), this._srcResolutions = s2 ?? [];
  }
  _canUseLayerLODs() {
    const { layer: e2, layerView: t2 } = this;
    if ("Map" !== e2.raster.tileType)
      return false;
    const { lods: i2 } = e2.tileInfo, s2 = t2.view.constraints?.effectiveLODs;
    return s2?.length === i2.length && s2.every(({ scale: e3 }, t3) => Math.abs(e3 - i2[t3].scale) < 1e-3);
  }
  _computeFetchConcurrency() {
    const { blockBoundary: e2 } = this.layer.serviceRasterInfo.storageInfo, t2 = e2[e2.length - 1];
    return (t2.maxCol - t2.minCol + 1) * (t2.maxRow - t2.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(e2, t2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t3 = await this._fetchQueue.push(e2.key), a3 = this._getBandIds();
        let o3 = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
        if (this._globalUpdateRequested && !this.layerView.moving && 0 === this._fetchQueue.length) {
          o3 = false;
          try {
            await this._redrawImage(this._abortController?.signal);
          } catch (s2) {
            b$3(s2) && s$f.getLogger(this).error(s2);
          }
          this._globalUpdateRequested = false;
        }
        !this.canUseWebGLForProcessing() && "rasterVF" !== this.type || this.layerView.hasTilingEffects || null != this._symbolizerParams || this._updateSymbolizerParams();
        const l2 = this._tileInfoView.getTileCoords(R, e2.key), n2 = this._tileInfoView.getTileResolution(e2.key);
        await this.updateTileSource(e2, { source: t3, symbolizerParams: this._symbolizerParams, globalSymbolizerParams: this._globalSymbolizerParams, suspended: o3, bandIds: a3, coords: l2, resolution: n2 }), e2.once("attach", () => this.layerView.requestUpdate()), this.container.addChild(e2);
      } catch (s2) {
        b$3(s2) || s$f.getLogger(this).error(s2);
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
    const { resolution: s2 } = this.previousLOD, r2 = this._getBandIds(), a3 = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: i2.pixelBlock.extractBands(r2), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: s2, y: s2 }, bandIds: r2 });
    !this.canUseWebGLForProcessing() && a3 && "stretch" === a3.type && this.layer.renderer && "raster-stretch" === this.layer.renderer.type && (a3.factor = a3.factor.map((e3) => 255 * e3), a3.outMin = Math.round(255 * a3.outMin), a3.outMax = Math.round(255 * a3.outMax)), this._globalSymbolizerParams = a3;
  }
  _updateSymbolizerParams() {
    const { resolution: e2 } = this.previousLOD, t2 = this._getBandIds();
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: e2, y: e2 }, bandIds: t2 });
  }
  _updateBlockCacheRegistry(e2 = false) {
    const { layer: t2, layerView: i2 } = this, { raster: s2 } = t2, { multidimensionalDefinition: r2 } = t2.normalizeRasterFetchOptions({ multidimensionalDefinition: t2.multidimensionalDefinition, timeExtent: i2.timeExtent }), a3 = s2.rasterInfo.multidimensionalInfo ? s2.getSliceIndex(r2) : null, o3 = i$8(s2.rasterId, a3);
    if (o3 !== this._blockCacheRegistryUrl) {
      if (null != this._blockCacheRegistryUrl && a$i(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = u$3(o3, s2.rasterInfo), e2) {
        const { view: e3 } = i2, t3 = this._tileInfoView.getClosestInfoForScale(e3.scale), r3 = this._srcResolutions[t3.level];
        g$2(o3, this._blockCacheRegistryId, e3.extent, e3.resolution, r3, s2.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = o3;
    }
  }
  async doRefresh() {
    if (!this.attached || !this.previousLOD || this.layerView.suspended)
      return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._updateBlockCacheRegistry(true), this._fetchQueue.reset();
    const e2 = [];
    this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, this._tileStrategy.refresh((t2) => e2.push(this._enqueueTileFetch(t2))), await this._updatingHandles.addPromise(Promise.allSettled(e2));
  }
};
e$f([y$1()], C.prototype, "_globalUpdateRequested", void 0), e$f([y$1()], C.prototype, "attached", void 0), e$f([y$1()], C.prototype, "container", void 0), e$f([y$1()], C.prototype, "layer", void 0), e$f([y$1()], C.prototype, "layerView", void 0), e$f([y$1()], C.prototype, "type", void 0), e$f([y$1()], C.prototype, "useWebGLForProcessing", null), e$f([y$1()], C.prototype, "useProgressiveUpdate", null), e$f([y$1()], C.prototype, "timeExtent", void 0), e$f([y$1()], C.prototype, "updating", null), C = e$f([c$3("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], C);
let a$1 = class a extends C {
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
    const { symbolizer: e2 } = this.layer, t2 = e2.lookup?.colormapLut?.indexedColormap, r2 = t2 && t2.length > this._maxIndexedColormapSize;
    return this.useWebGLForProcessing && e2.canRenderInWebGL && !r2 && !("majority" === this.layer.interpolation && r$b(this.layer));
  }
  fetchTile(e2, t2) {
    return this.layer.fetchTile(e2.level, e2.row, e2.col, t2);
  }
  updateRasterFunctionParameters() {
    const { clips: e2, view: t2 } = this.layerView;
    null != this._geometry && e2.remove(this._geometry);
    const { raster: r2, type: s2 } = this.layer;
    if ("Function" === r2.datasetFormat) {
      const s3 = r2.getClippingGeometry(t2.spatialReference);
      if (s3) {
        const t3 = new a$j({ geometry: s3 });
        e2.add(t3), this._geometry = t3;
      }
    }
    const { container: i2 } = this;
    if ("Function" !== r2.datasetFormat || "wcs" === s2)
      return i2.rasterFunctionChain = null, i2.children.forEach((e3) => {
        const { bitmap: t3 } = e3;
        t3 && (t3.suspended = true, t3.processed = false, t3.projected && (t3.invalidateTexture(), t3.rasterTexture = null));
      }), void (this._rasterFunctionState = "na");
    const o3 = this._rasterFunctionState, { rasterFunction: a3, primaryRasters: l2 } = r2, c2 = a3.supportsGPU && (!l2 || l2.rasters.length <= 1), u2 = c2 ? a3.flatWebGLFunctionChain : null, { renderer: p2 } = this.layer, d2 = !c2 || !u2?.functions.length || "raster-stretch" === p2?.type && p2.dynamicRangeAdjustment || !this.canUseWebGLForProcessing();
    i2.rasterFunctionChain = d2 ? null : u2;
    const h2 = null == a3 ? "na" : i2.rasterFunctionChain ? "gpu" : "cpu";
    i2.children.forEach((e3) => {
      const { bitmap: t3 } = e3;
      t3 && (t3.suspended = o3 !== h2, t3.processed = false, t3.processedTexture = null);
    }), this._rasterFunctionState = h2;
  }
  async updateTileSource(e2, t2) {
    const r2 = this._getBandIds(), s2 = this._getLayerInterpolation(), i2 = this.canUseWebGLForProcessing(), { source: o3, globalSymbolizerParams: n2, suspended: a3, coords: l2, resolution: c2 } = t2, u2 = this.layerView.hasTilingEffects ? n2 : t2.symbolizerParams, { bitmap: p2 } = e2;
    if ([p2.x, p2.y] = l2, p2.resolution = c2, null != o3?.pixelBlock) {
      const e3 = { extent: o3.extent, pixelBlock: o3.pixelBlock, srcPixelSize: o3.srcTilePixelSize };
      if (p2.rawPixelData = e3, i2)
        p2.source = o3.pixelBlock, p2.isRendereredSource = false;
      else {
        const t3 = await this.layer.applyRenderer(e3, "stretch" === n2?.type ? n2 : void 0);
        p2.source = t3, p2.isRendereredSource = true;
      }
      p2.symbolizerParameters = i2 ? u2 : null, p2.transformGrid = i2 ? o3.transformGrid : null;
    } else {
      const e3 = this.createEmptyTilePixelBlock();
      p2.source = e3, p2.symbolizerParameters = i2 ? u2 : null, p2.transformGrid = null;
    }
    p2.bandIds = i2 ? r2 : null, p2.width = this._tileInfoView.tileInfo.size[0], p2.height = this._tileInfoView.tileInfo.size[1], p2.interpolation = s2, p2.suspended = a3, p2.invalidateTexture();
  }
  async updateTileSymbolizerParameters(e2, t2) {
    const { local: r2, global: s2 } = t2, i2 = this._getBandIds(), o3 = this._getLayerInterpolation(), n2 = this.canUseWebGLForProcessing(), { bitmap: a3 } = e2, { rawPixelData: l2 } = a3;
    n2 || null == l2 ? (a3.isRendereredSource && null != l2 && (a3.source = l2.pixelBlock), a3.isRendereredSource = false) : (a3.source = await this.layer.applyRenderer(l2, "stretch" === s2?.type ? s2 : void 0), a3.isRendereredSource = true), a3.symbolizerParameters = n2 ? this.layerView.hasTilingEffects ? s2 : r2 : null, a3.bandIds = n2 ? i2 : null, a3.interpolation = o3, a3.suspended = false;
  }
  _getLayerInterpolation() {
    const { interpolation: e2, renderer: t2 } = this.layer;
    if (!t2)
      return e2;
    const r2 = t2.type;
    return "raster-colormap" === r2 || "unique-value" === r2 || "class-breaks" === r2 ? "nearest" : "raster-stretch" === t2.type && null != t2.colorRamp ? "bilinear" === e2 || "cubic" === e2 ? "bilinear" : "nearest" : e2;
  }
};
e$f([y$1()], a$1.prototype, "container", void 0), e$f([y$1()], a$1.prototype, "layer", void 0), e$f([y$1()], a$1.prototype, "type", void 0), a$1 = e$f([c$3("esri.views.2d.layers.imagery.ImageryTileView2D")], a$1);
const l = a$1;
class r extends r$9 {
  constructor(t2, e2, s2, a3, r2, l2, o3 = null) {
    super(t2, e2, s2, a3, r2, l2), this.tileData = new f$1(o3), this.tileData.coordScale = [r2, l2], this.tileData.once("isReady", () => this.ready());
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
    return { displayViewScreenMat3: e$d(), tileMat3: e$d() };
  }
  setTransform(s2) {
    super.setTransform(s2);
    const i2 = this.resolution / (s2.resolution * s2.pixelRatio), a3 = this.transforms.tileMat3, [r2, l2] = this.tileData.offset, o3 = [this.x + r2 * this.resolution, this.y - l2 * this.resolution], [n2, h2] = s2.toScreenNoRotation([0, 0], o3), { symbolTileSize: c2 } = this.tileData.symbolizerParameters, f2 = Math.round((this.width - this.tileData.offset[0]) / c2) * c2, m2 = Math.round((this.height - this.tileData.offset[1]) / c2) * c2, D2 = f2 / this.rangeX * i2, d2 = m2 / this.rangeY * i2;
    r$c(a3, D2, 0, 0, 0, d2, 0, n2, h2, 1), i$6(this.transforms.displayViewScreenMat3, s2.displayViewMat3, a3), this.tileData.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class o2 extends i$7 {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = false, this.symbolTypes = ["triangle"];
  }
  createTile(s2) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), s2), [i2, o3] = this._tileInfoView.tileInfo.size, n2 = this._tileInfoView.getTileResolution(s2.level);
    return new r(s2, n2, t2[0], t2[3], i2, o3);
  }
  prepareRenderPasses(e2) {
    const r2 = e2.registerRenderPass({ name: "imagery (vf tile)", brushes: [d], target: () => this.children.map((e3) => e3.tileData), drawPhase: E.MAP });
    return [...super.prepareRenderPasses(e2), r2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === E.MAP && this.symbolTypes.forEach((s2) => {
      e2.renderPass = s2, super.doRender(e2);
    });
  }
}
let a2 = class extends C {
  constructor() {
    super(...arguments), this._handle = null, this.type = "rasterVF";
  }
  canUseWebGLForProcessing() {
    return false;
  }
  async fetchTile(e2, t2) {
    t2 = { ...t2, interpolation: "nearest", requestProjectedLocalDirections: true };
    const i2 = await this.layer.fetchTile(e2.level, e2.row, e2.col, t2);
    return "vector-magdir" === this.layer.serviceRasterInfo.dataType && i2?.pixelBlock && (i2.pixelBlock = await this.layer.convertVectorFieldData(i2.pixelBlock, t2)), i2;
  }
  updateTileSource(e2, t2) {
    const i2 = t2.symbolizerParams, { tileData: r2 } = e2;
    r2.key = e2.key, r2.width = this._tileInfoView.tileInfo.size[0], r2.height = this._tileInfoView.tileInfo.size[1];
    const { symbolTileSize: o3 } = i2, { source: s2 } = t2;
    if (r2.offset = this._getTileSymbolOffset(r2.key, o3), null != s2?.pixelBlock) {
      const e3 = { extent: s2.extent, pixelBlock: s2.pixelBlock };
      r2.rawPixelData = e3, r2.symbolizerParameters = i2, r2.source = this._sampleVectorFieldData(s2.pixelBlock, i2, r2.offset);
    } else {
      const e3 = [Math.round((this._tileInfoView.tileInfo.size[0] - r2.offset[0]) / o3), Math.round((this._tileInfoView.tileInfo.size[1] - r2.offset[1]) / o3)], t3 = this.createEmptyTilePixelBlock(e3);
      r2.source = t3, r2.symbolizerParameters = i2;
    }
    return r2.invalidateVAO(), Promise.resolve();
  }
  updateTileSymbolizerParameters(e2, t2) {
    const i2 = t2.local, { symbolTileSize: r2 } = i2, { tileData: o3 } = e2;
    o3.offset = this._getTileSymbolOffset(o3.key, r2);
    const s2 = o3.symbolizerParameters.symbolTileSize;
    o3.symbolizerParameters = i2;
    const l2 = o3.rawPixelData?.pixelBlock;
    return null != l2 && s2 !== r2 && (o3.source = this._sampleVectorFieldData(l2, o3.symbolizerParameters, o3.offset)), Promise.resolve();
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
e$f([y$1()], a2.prototype, "container", void 0), e$f([y$1()], a2.prototype, "layer", void 0), e$f([y$1()], a2.prototype, "type", void 0), a2 = e$f([c$3("esri.views.2d.layers.imagery.VectorFieldTileView2D")], a2);
const n = a2;
let b = class extends p$2(i$9(m$7(u$4))) {
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
    const { layer: e2 } = this, s2 = this._get("displayParameters");
    return e2.renderer ? { bandIds: e2.bandIds, renderer: e2.renderer, interpolation: e2.interpolation, multidimensionalDefinition: e2.multidimensionalDefinition, rasterFunction: "imagery-tile" === e2.type ? e2.rasterFunction : null } : s2;
  }
  update(e2) {
    this.subview?.update(e2), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.addAttachHandles([d$1(() => this.displayParameters, (e2, i2) => {
      const r2 = e2.interpolation !== i2?.interpolation && ("majority" === e2.interpolation || "majority" === i2?.interpolation) && r$b(this.layer), o3 = e2.renderer !== i2?.renderer && this._getSubviewType(i2?.renderer) !== this._getSubviewType(e2.renderer);
      o3 && this._updateSubview();
      const a3 = e2.multidimensionalDefinition !== i2?.multidimensionalDefinition, n2 = e2.rasterFunction !== i2?.rasterFunction, u2 = n2 && !this._useWebGLForProcessing, h2 = a3 || r2 || o3 || u2;
      this.subview.redrawOrRefetch({ refetch: h2, reprocess: n2 }).catch((e3) => {
        b$3(e3) || s$f.getLogger(this).error(e3);
      }), this.notifyChange("updating");
    }), d$1(() => this.layer.multidimensionalSubset ?? null, (e2, i2) => {
      const { multidimensionalDefinition: r2 } = this.layer;
      null != r2 && o$9(r2, e2) !== o$9(r2, i2) && (this.subview.redrawOrRefetch({ refetch: true }).catch((e3) => {
        b$3(e3) || s$f.getLogger(this).error(e3);
      }), this.notifyChange("updating"));
    }, C$1), d$1(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch({ refetch: true }).catch((e2) => {
        b$3(e2) || s$f.getLogger(this).error(e2);
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
  doRefresh() {
    return this.subview ? this.subview.doRefresh() : Promise.resolve();
  }
  _updateSubview() {
    const { renderer: e2 } = this.layer;
    if (!e2)
      return;
    const s2 = this._getSubviewType(e2);
    if (this.subview) {
      if (this.subview.type === s2)
        return void this._attachSubview(this.subview);
      this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
    }
    const { layer: t2 } = this;
    let i2;
    if (i2 = "rasterVF" === s2 ? new n({ layer: t2, layerView: this }) : "flow" === s2 ? new d$2({ layer: t2, layerView: this }) : new l({ layer: t2, layerView: this }), "useWebGLForProcessing" in i2 && (i2.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in i2 && (i2.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in i2) {
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
    const s2 = e2?.type;
    return "vector-field" === s2 ? "rasterVF" : "flow" === s2 ? "flow" : "raster";
  }
};
e$f([y$1()], b.prototype, "subview", void 0), e$f([y$1()], b.prototype, "useWebGLForProcessing", null), e$f([y$1()], b.prototype, "useProgressiveUpdate", null), e$f([y$1({ readOnly: true })], b.prototype, "displayParameters", null), b = e$f([c$3("esri.views.2d.layers.ImageryTileLayerView2D")], b);
const g = b;
export {
  g as default
};
