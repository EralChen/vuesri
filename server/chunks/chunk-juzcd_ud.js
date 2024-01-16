import { ej as k, eg as p, bo as e, br as c } from "./chunk-KFNcxJaF.js";
import { N } from "./chunk-d7MAv1vm.js";
import { n as n$1 } from "./chunk-NLi-yXFd.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-7Z1hjEcP.js";
import "./chunk-UZskY1JT.js";
import "./chunk-zw9UPZSi.js";
let o = class extends n$1(N) {
  constructor() {
    super(...arguments), this.type = "imagery-3d", this.redrawDebounced = k(async (e2) => {
      this.redraw((e3, a) => this._redrawImage(e3, a), e2);
    }, 2e3);
  }
  initialize() {
    this.addHandles([p(() => this.view.basemapTerrain.ready, () => this._initializeMaximumDataResolution(), { once: true, initial: true }), this.layer.on("redraw", () => this._updatingHandles.addPromise(this.redrawDebounced()))]), this._updatingHandles.add(() => this.layer?.exportImageServiceParameters?.version, () => {
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
    const o2 = i.createImageData(s.width, s.height);
    o2.data.set(s.getAsRGBA()), i.putImageData(o2, 0, 0);
  }
};
o = e([c("esri.views.3d.layers.ImageryLayerView3D")], o);
const n = o;
export {
  n as default
};
