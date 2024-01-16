import { dO as a, aM as s$1, dS as w$1, eZ as se, e_ as m, dQ as r, e$ as n$1, bo as e, bp as y, br as c, dP as u$1 } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { o } from "./chunk-yz-PXh9A.js";
import { p } from "./chunk-rYCvAO4U.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let d = class extends p(a(o(n(u$1)))) {
  constructor() {
    super(...arguments), this.type = "imagery-tile-3d", this.isAlignedMapTile = true;
  }
  initialize() {
    this.layer.increaseRasterJobHandlerUsage(), null == this.fullExtent && this.addResolvingPromise(Promise.reject(new s$1("layerview:spatial-reference-incompatible", "The layer extent cannot be projected to the view's spatial reference", { layer: this.layer })));
    const e2 = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const e3 = this.view.basemapTerrain.tilingScheme, r2 = this.layer.tileInfo, t = ["png", "png24", "png32", "jpg", "mixed"].includes(r2.format) && e3.compatibleWith(r2);
      this.isAlignedMapTile = t;
      const i = t ? r2 : e3.toTileInfo();
      this.tileInfo = i, this._updatingHandles.add(() => [this.layer.renderer, this.layer.interpolation, this.layer.bandIds, this.layer.multidimensionalDefinition, this.layer.multidimensionalSubset, this.layer.rasterFunction, this.timeExtent], () => this.refresh());
    });
    this.addResolvingPromise(e2);
  }
  destroy() {
    this.layer.decreaseRasterJobHandlerUsage(), this.view = null;
  }
  get _blankTile() {
    const e2 = document.createElement("canvas"), r2 = e2.getContext("2d"), [t, i] = this.tileInfo.size;
    return e2.width = t, e2.height = i, r2.clearRect(0, 0, t, i), r2.getImageData(0, 0, t, i);
  }
  get imageFormatIsOpaque() {
    return "jpg" === this.layer.tileInfo.format;
  }
  get hasMixedImageFormats() {
    return "mixed" === this.layer.tileInfo.format;
  }
  get dataLevelRange() {
    const e2 = this.layer.tileInfo, r2 = this.tileInfo.lodAt(0)?.scale, t = this.layer.tileInfo.lodAt(e2.lods.length - 1)?.scale;
    return this.levelRangeFromScaleRange(r2, t);
  }
  _getfullExtent() {
    return se(this.layer.rasterInfo, null != this.view.basemapTerrain?.spatialReference ? this.view.basemapTerrain.spatialReference : this.view.spatialReference);
  }
  async fetchTile(e2, r2, t, i) {
    const s = this.tileInfo, a2 = this._canSymbolizeInWebGL(), l = { tileInfo: s, requestRawData: a2, signal: i.signal, timeExtent: this.timeExtent, requestAsImageElement: this.isAlignedMapTile }, n2 = await this.layer.fetchTile(e2, r2, t, l);
    if (n2 instanceof HTMLImageElement)
      return n2;
    let m$1 = n2?.pixelBlock;
    if (null == m$1)
      return this._blankTile;
    if (!a2 && (m$1 = await this.layer.applyRenderer(n2), null == m$1))
      return this._blankTile;
    const p2 = new m([e2, r2, t], m$1, s.size[0], s.size[1]);
    return a2 ? (p2.symbolizerRenderer = this.layer.symbolizer.rendererJSON, p2.symbolizerParameters = this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e2)), p2.transformGrid = n2.transformGrid) : p2.isRendereredSource = true, p2.interpolation = this.layer.interpolation, p2.bandIds = this.layer.bandIds, p2;
  }
  _getSymbolizerOptions(e2) {
    const r2 = this.tileInfo.lodAt(e2).resolution;
    return { pixelBlock: null, isGCS: null != this.view.basemapTerrain?.spatialReference ? this.view.basemapTerrain.spatialReference.isGeographic : this.view.spatialReference.isGeographic, resolution: { x: r2, y: r2 }, bandIds: this.layer.bandIds };
  }
  ensureSymbolizerParameters(e2) {
    this._canSymbolizeInWebGL() && JSON.stringify(e2.symbolizerRenderer) !== JSON.stringify(this.layer.symbolizer.rendererJSON) && (e2.symbolizerParameters = this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e2.lij[0])));
  }
  createFetchPopupFeaturesQueryGeometry(e2, r$1) {
    return r(e2, r$1, this.view);
  }
  refresh() {
    this.emit("data-changed");
  }
  async doRefresh() {
    this.suspended || this.emit("data-changed");
  }
  _canSymbolizeInWebGL() {
    const e2 = n$1("3d"), { symbolizer: r2 } = this.layer, t = r2.lookup?.colormapLut?.indexedColormap, i = t && t.length > 4 * (e2.maxTextureSize || 4906);
    return e2.supportsTextureFloat && r2.canRenderInWebGL && !i;
  }
};
e([y({ readOnly: true })], d.prototype, "_blankTile", null), e([y({ readOnly: true })], d.prototype, "imageFormatIsOpaque", null), e([y({ readOnly: true })], d.prototype, "hasMixedImageFormats", null), e([y({ readOnly: true })], d.prototype, "dataLevelRange", null), d = e([c("esri.views.3d.layers.ImageryTileLayerView3D")], d);
const u = d;
export {
  u as default
};
