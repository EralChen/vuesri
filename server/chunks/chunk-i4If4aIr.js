import { et as i, gJ as m$1, eu as u$1, gK as c$1, gL as h, gM as m, gN as r$1, ev as r$2, cm as e$1, bO as G, cd as b$1, gO as e, aT as s$1, aV as e$2, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
import "./chunk-a-_9RY_Z.js";
import "./chunk-xXBI18-w.js";
import { $ } from "./chunk-bVBkTso-.js";
import { r, o, n } from "./chunk-FTikQmXi.js";
import { h as h$1 } from "./chunk-MoY3igy4.js";
import { S, U } from "./chunk-GrWojVOW.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-jrhFla2W.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-drfK378b.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-YBgi6goH.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
const v = [0, 0];
let T = class extends i(r(m$1(u$1))) {
  constructor() {
    super(...arguments), this._fetchQueue = null, this._highlightGraphics = new c$1(), this._highlightView = null, this._popupHighlightHelper = null, this._tileStrategy = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || false !== this.layer.resampling;
  }
  get tilemapCache() {
    return "tilemapCache" in this.layer ? this.layer.tilemapCache : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume(), this._highlightView?.processUpdate(e2);
  }
  attach() {
    const e2 = "tileServers" in this.layer ? this.layer.tileServers : null, t = this.tilemapCache;
    if (this._tileInfoView = new h(this.layer.tileInfo, this.layer.fullExtent, t?.effectiveMinLOD, t?.effectiveMaxLOD), this._fetchQueue = new m({ tileInfoView: this._tileInfoView, concurrency: e2 && 10 * e2.length || 10, process: (e3, t2) => this.fetchTile(e3, t2) }), this._tileStrategy = new r$1({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), S(this, this.layer)) {
      const e3 = this._highlightView = new $({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new h$1(this.view.featuresTilingScheme), defaultPointSymbolEnabled: false });
      this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (e4, t2) => r$2(e4, t2, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (t2, i2) => {
        e3.graphicUpdateHandler({ graphic: t2, property: i2 });
      }, layerView: this, updatingHandles: this._updatingHandles });
    }
    this.requestUpdate(), this.addAttachHandles(this._updatingHandles.add(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._popupHighlightHelper?.destroy(), this._highlightView?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = this._popupHighlightHelper = null;
  }
  async fetchPopupFeaturesAtLocation(e2, t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e2, t) : [];
  }
  highlight(e2) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.highlight(e2) : e$1();
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    return G(this.layer.tileInfo?.spatialReference, e2);
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended)
        return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i2 = t.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(v, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e$12, t = {}) {
    const i2 = this.tilemapCache, { signal: r2, resamplingLevel: o$1 = 0 } = t;
    if (!i2)
      try {
        return await this._fetchImage(e$12, r2);
      } catch (m2) {
        if (!b$1(m2) && !this.resampling)
          return o(this._tileInfoView.tileInfo.size);
        if (o$1 < 3) {
          const i3 = this._tileInfoView.getTileParentId(e$12.id);
          if (i3) {
            const s = new e(i3), r3 = await this.fetchTile(s, { ...t, resamplingLevel: o$1 + 1 });
            return n(this._tileInfoView, r3, s, e$12);
          }
        }
        throw m2;
      }
    const l = new e(0, 0, 0, 0);
    let p;
    try {
      if (await i2.fetchAvailabilityUpsample(e$12.level, e$12.row, e$12.col, l, { signal: r2 }), l.level !== e$12.level && !this.resampling)
        return o(this._tileInfoView.tileInfo.size);
      p = await this._fetchImage(l, r2);
    } catch (m2) {
      if (b$1(m2))
        throw m2;
      p = await this._fetchImage(e$12, r2);
    }
    return this.resampling ? n(this._tileInfoView, p, l, e$12) : p;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (t) {
        b$1(t) || s$1.getLogger(this).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
};
e$2([y()], T.prototype, "resampling", null), e$2([y()], T.prototype, "tilemapCache", null), T = e$2([c("esri.views.2d.layers.TileLayerView2D")], T);
const I = T;
export {
  I as default
};
