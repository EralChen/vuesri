import { et as i, gJ as m$1, eu as u$1, gL as h, gM as m$2, gN as r$1, bO as G, gO as e, cd as b$1, aT as s$1, aV as e$1, aX as y$1, a_ as c } from "./chunk-ejFG4zJ0.js";
import { r, n } from "./chunk-FTikQmXi.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-YBgi6goH.js";
const m = /* @__PURE__ */ new Set([102113, 102100, 3857, 3785, 900913]), y = [0, 0];
let _ = class extends i(r(m$1(u$1))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const e2 = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e2 ? (e2.id !== this.layer.activeLayer.tileMatrixSetId && (this.layer.activeLayer.tileMatrixSetId = e2.id), e2) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = this.tileMatrixSet?.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new m$2({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t) }), this._tileStrategy = new r$1({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
    return this.layer.activeLayer.tileMatrixSets?.some((t) => G(t.tileInfo?.spatialReference, e2)) ?? false;
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
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(y, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e$12, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r2, resamplingLevel: a = 0 } = t;
    if (!s)
      return this._fetchImage(e$12, r2);
    const l = new e(0, 0, 0, 0);
    let o;
    try {
      await s.fetchAvailabilityUpsample(e$12.level, e$12.row, e$12.col, l, { signal: r2 }), o = await this._fetchImage(l, r2);
    } catch (n$1) {
      if (b$1(n$1))
        throw n$1;
      if (a < 3) {
        const i2 = this._tileInfoView.getTileParentId(e$12.id);
        if (i2) {
          const s2 = new e(i2), r3 = await this.fetchTile(s2, { ...t, resamplingLevel: a + 1 });
          return n(this._tileInfoView, r3, s2, e$12);
        }
      }
      throw n$1;
    }
    return n(this._tileInfoView, o, l, e$12);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s) {
        b$1(s) || s$1.getLogger(this).error(s);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    const t = this.view.spatialReference;
    if (!e2.tileMatrixSets)
      return null;
    let i2 = e2.tileMatrixSets.find((e3) => G(e3.tileInfo?.spatialReference, t));
    return !i2 && t.isWebMercator && (i2 = e2.tileMatrixSets.find((e3) => m.has(e3.tileInfo?.spatialReference.wkid ?? -1))), i2;
  }
};
e$1([y$1({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = e$1([c("esri.views.2d.layers.WMTSLayerView2D")], _);
const w = _;
export {
  w as default
};
