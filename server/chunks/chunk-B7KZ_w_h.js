import { f9 as k, f6 as p$1, aV as e, a_ as c } from "./chunk-ejFG4zJ0.js";
import { N } from "./chunk-oJ14iR_X.js";
import { u } from "./chunk-Z_-ET0Cm.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZRKw_7qF.js";
import "./chunk-315ILBUn.js";
import "./chunk--_aQKBqP.js";
let n = class extends u(N) {
  constructor() {
    super(...arguments), this.type = "imagery-3d", this.redrawDebounced = k(async (e2) => {
      this.redraw((e3, a) => this._redrawImage(e3, a), e2);
    }, 2e3);
  }
  initialize() {
    this.addHandles([p$1(() => this.view.basemapTerrain.ready, () => this._initializeMaximumDataResolution(), { once: true, initial: true }), this.layer.on("redraw", () => this._updatingHandles.addPromise(this.redrawDebounced()))]), this._updatingHandles.add(() => this.layer?.exportImageServiceParameters?.version, () => {
      this._updatingHandles.addPromise(this.refreshDebounced());
    }), this._updatingHandles.add(() => this.layer?.renderer, () => {
      this._updatingHandles.addPromise(this.refreshDebounced());
    }), this._updatingHandles.add(() => this.timeExtent, () => this._updatingHandles.addPromise(this.refreshDebounced()));
  }
  _initializeMaximumDataResolution() {
    this.maximumDataResolution = this.layer.loaded ? this.layer.serviceRasterInfo.pixelSize : null;
  }
  getFetchOptions() {
    return { timeExtent: this.timeExtent };
  }
  async processResult(e2, a, t) {
    a.imageOrCanvasElement ? e2.image = a.imageOrCanvasElement : (e2.image = document.createElement("canvas"), e2.pixelData = a.pixelData, await this._redrawImage(e2, t));
  }
  async _redrawImage(e2, a) {
    if (!(e2.image instanceof HTMLCanvasElement) || null == e2.pixelData)
      throw new Error();
    const t = e2.image, i = t.getContext("2d"), r = await this.layer.applyRenderer(e2.pixelData, { signal: a }), s = this.layer.applyFilter(r).pixelBlock;
    if (null == s)
      throw new Error();
    t.width = s.width, t.height = s.height;
    const n2 = i.createImageData(s.width, s.height);
    n2.data.set(s.getAsRGBA()), i.putImageData(n2, 0, 0);
  }
};
n = e([c("esri.views.3d.layers.ImageryLayerView3D")], n);
const o = n;
export {
  o as default
};
