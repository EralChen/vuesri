import { et as i, aO as s, ex as w$1, fO as se, fP as m, ev as r, fQ as t, aV as e, aX as y$1, a_ as c$1, eu as u$1 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { c } from "./chunk-rp7NsXHP.js";
import { p } from "./chunk-aGzW8pot.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let y = class extends p(i(c(n(u$1)))) {
  constructor() {
    super(...arguments), this.type = "imagery-tile-3d", this.isAlignedMapTile = true;
  }
  initialize() {
    this.layer.increaseRasterJobHandlerUsage(), null == this.fullExtent && this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible", "The layer extent cannot be projected to the view's spatial reference", { layer: this.layer })));
    const e2 = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const e3 = this.view.basemapTerrain.tilingScheme, t2 = this.layer.tileInfo, r2 = ["png", "png24", "png32", "jpg", "mixed"].includes(t2.format) && e3.compatibleWith(t2);
      this.isAlignedMapTile = r2;
      const i2 = r2 ? t2 : e3.toTileInfo();
      this.tileInfo = i2, this._updatingHandles.add(() => [this.layer.renderer, this.layer.interpolation, this.layer.bandIds, this.layer.multidimensionalDefinition, this.layer.multidimensionalSubset, this.layer.rasterFunction, this.timeExtent], () => this.refresh());
    });
    this.addResolvingPromise(e2);
  }
  destroy() {
    this.layer.decreaseRasterJobHandlerUsage(), this.view = null;
  }
  get _blankTile() {
    const e2 = document.createElement("canvas"), t2 = e2.getContext("2d"), [r2, i2] = this.tileInfo.size;
    return e2.width = r2, e2.height = i2, t2.clearRect(0, 0, r2, i2), t2.getImageData(0, 0, r2, i2);
  }
  get imageFormatIsOpaque() {
    return "jpg" === this.layer.tileInfo.format;
  }
  get hasMixedImageFormats() {
    return "mixed" === this.layer.tileInfo.format;
  }
  get dataLevelRange() {
    const e2 = this.layer.tileInfo, t2 = this.tileInfo.lodAt(0)?.scale, r2 = this.layer.tileInfo.lodAt(e2.lods.length - 1)?.scale;
    return this.levelRangeFromScaleRange(t2, r2);
  }
  _getfullExtent() {
    return se(this.layer.serviceRasterInfo, null != this.view.basemapTerrain?.spatialReference ? this.view.basemapTerrain.spatialReference : this.view.spatialReference);
  }
  async fetchTile(e2, t2, r2, i2) {
    const s2 = this.tileInfo, a = this._canSymbolizeInWebGL(), n2 = { tileInfo: s2, requestRawData: a, signal: i2.signal, timeExtent: this.timeExtent, requestAsImageElement: this.isAlignedMapTile, noClip: false }, { layer: l } = this, m$1 = await l.fetchTile(e2, t2, r2, n2);
    if (m$1 instanceof HTMLImageElement)
      return m$1;
    let p2 = m$1?.pixelBlock;
    if (null == p2)
      return this._blankTile;
    if (!a && (p2 = await l.applyRenderer(m$1), null == p2))
      return this._blankTile;
    const h = new m([e2, t2, r2], p2, s2.size[0], s2.size[1]);
    return a ? (h.symbolizerRenderer = l.symbolizer.rendererJSON, h.symbolizerParameters = l.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e2)), h.transformGrid = m$1.transformGrid, h.bandIds = l.bandIds) : (h.isRendereredSource = true, h.bandIds = null), h.interpolation = l.interpolation, h;
  }
  _getSymbolizerOptions(e2) {
    const t2 = this.tileInfo.lodAt(e2).resolution;
    return { pixelBlock: null, isGCS: null != this.view.basemapTerrain?.spatialReference ? this.view.basemapTerrain.spatialReference.isGeographic : this.view.spatialReference.isGeographic, resolution: { x: t2, y: t2 }, bandIds: this.layer.bandIds };
  }
  ensureSymbolizerParameters(e2) {
    this._canSymbolizeInWebGL() && JSON.stringify(e2.symbolizerRenderer) !== JSON.stringify(this.layer.symbolizer.rendererJSON) && (e2.symbolizerParameters = this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e2.lij[0])));
  }
  createFetchPopupFeaturesQueryGeometry(e2, t2) {
    return r(e2, t2, this.view);
  }
  refresh() {
    this.emit("data-changed");
  }
  async doRefresh() {
    this.suspended || this.emit("data-changed");
  }
  _canSymbolizeInWebGL() {
    const e2 = t(), { symbolizer: t$1 } = this.layer, r2 = t$1.lookup?.colormapLut?.indexedColormap, i2 = !!this.layer.rasterFunction?.hasClipFunction, s2 = r2 && r2.length > 4 * (e2.maxTextureSize || 4906);
    return t$1.canRenderInWebGL && !s2 && !i2;
  }
};
e([y$1({ readOnly: true })], y.prototype, "_blankTile", null), e([y$1({ readOnly: true })], y.prototype, "imageFormatIsOpaque", null), e([y$1({ readOnly: true })], y.prototype, "hasMixedImageFormats", null), e([y$1({ readOnly: true })], y.prototype, "dataLevelRange", null), y = e([c$1("esri.views.3d.layers.ImageryTileLayerView3D")], y);
const u = y;
export {
  u as default
};
