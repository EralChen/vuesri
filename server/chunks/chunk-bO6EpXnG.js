import { dO as a, fQ as m$1, dP as u, fR as i, fS as h, fT as y, fU as r$1, dQ as r$2, bS as e$1, c4 as d$1, bI as b, fV as e, bb as s$1, bo as e$2, bp as y$1, br as c } from "./chunk-KFNcxJaF.js";
import "./chunk-anoehU8Z.js";
import "./chunk-Vy6X02jp.js";
import { r as re } from "./chunk-pNUePs4Z.js";
import "./chunk-Zlv3z8RW.js";
import { r, o, n } from "./chunk-pRHVu1Qg.js";
import { a as a$1 } from "./chunk-SHcdQomB.js";
import { S, G } from "./chunk-IcrgUyIJ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-W2fbhL5l.js";
import "./chunk-xi0IQ6PQ.js";
import "./chunk-DicJw-UR.js";
import "./chunk-b7K892Yv.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-jrhFla2W.js";
import "./chunk-KMgzOHQd.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-0Hxi-cKV.js";
import "./chunk-_ABw_62H.js";
import "./chunk-IbXsXbhF.js";
import "./chunk-E-M87tOH.js";
const V = [0, 0];
let v = class extends a(r(m$1(u))) {
  constructor() {
    super(...arguments), this._fetchQueue = null, this._highlightGraphics = new i(), this._highlightView = null, this._popupHighlightHelper = null, this._tileStrategy = null, this.layer = null;
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
    const e2 = "tileServers" in this.layer ? this.layer.tileServers : null, i2 = this.tilemapCache;
    if (this._tileInfoView = new h(this.layer.tileInfo, this.layer.fullExtent, i2?.effectiveMinLOD, i2?.effectiveMaxLOD), this._fetchQueue = new y({ tileInfoView: this._tileInfoView, concurrency: e2 && 10 * e2.length || 10, process: (e3, i3) => this.fetchTile(e3, i3) }), this._tileStrategy = new r$1({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), S(this, this.layer)) {
      const e3 = this._highlightView = new re({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new a$1(this.view.featuresTilingScheme), defaultPointSymbolEnabled: false });
      this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new G({ createFetchPopupFeaturesQueryGeometry: (e4, i3) => r$2(e4, i3, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (i3, t) => {
        e3.graphicUpdateHandler({ graphic: i3, property: t });
      }, layerView: this, updatingHandles: this._updatingHandles });
    }
    this.requestUpdate(), this.addAttachHandles(this._updatingHandles.add(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._popupHighlightHelper?.destroy(), this._highlightView?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = this._popupHighlightHelper = null;
  }
  async fetchPopupFeatures(e2, i2) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeatures(e2, i2) : [];
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
    return d$1(this.layer.tileInfo?.spatialReference, e2);
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended)
        return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const i2 = this._bitmapView.createTile(e2), t = i2.bitmap;
    return [t.x, t.y] = this._tileInfoView.getTileCoords(V, i2.key), t.resolution = this._tileInfoView.getTileResolution(i2.key), [t.width, t.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(i2)), this._bitmapView.addChild(i2), this.requestUpdate(), i2;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e$12, i2 = {}) {
    const t = this.tilemapCache, { signal: s, resamplingLevel: o$1 = 0 } = i2;
    if (!t)
      try {
        return await this._fetchImage(e$12, s);
      } catch (a2) {
        if (!b(a2) && !this.resampling)
          return o(this._tileInfoView.tileInfo.size);
        if (o$1 < 3) {
          const t2 = this._tileInfoView.getTileParentId(e$12.id);
          if (t2) {
            const r2 = new e(t2), s2 = await this.fetchTile(r2, { ...i2, resamplingLevel: o$1 + 1 });
            return n(this._tileInfoView, s2, r2, e$12);
          }
        }
        throw a2;
      }
    const l = new e(0, 0, 0, 0);
    let h2;
    try {
      if (await t.fetchAvailabilityUpsample(e$12.level, e$12.row, e$12.col, l, { signal: s }), l.level !== e$12.level && !this.resampling)
        return o(this._tileInfoView.tileInfo.size);
      h2 = await this._fetchImage(l, s);
    } catch (a2) {
      if (b(a2))
        throw a2;
      h2 = await this._fetchImage(e$12, s);
    }
    return this.resampling ? n(this._tileInfoView, h2, l, e$12) : h2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const i2 = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = i2, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (i2) {
        b(i2) || s$1.getLogger(this).error(i2);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, i2) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: i2 });
  }
};
e$2([y$1()], v.prototype, "resampling", null), e$2([y$1()], v.prototype, "tilemapCache", null), v = e$2([c("esri.views.2d.layers.TileLayerView2D")], v);
const I = v;
export {
  I as default
};
