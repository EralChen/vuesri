import { et as i, ex as w$1, fT as M, bQ as V, aT as s$1, aV as e, aX as y, a_ as c$1, eu as u$1 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { c } from "./chunk-rp7NsXHP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let m = class extends i(c(n(u$1))) {
  constructor() {
    super(...arguments), this.type = "wmts-3d";
  }
  initialize() {
    this._getCompatibleTileInfoMatrixSet((e3) => this._getTileInfoSupportError(e3.tileInfo, e3.fullExtent));
    const e2 = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const e3 = this._getCompatibleTileInfoMatrixSet((e4) => this._getTileInfoError(e4.tileInfo, e4.fullExtent));
      null != e3 && (null !== e3.id && this.layer.activeLayer.tileMatrixSetId !== e3.id && (this.layer.activeLayer.tileMatrixSetId = e3.id), e3.tileInfo && (this.tileInfo = e3.tileInfo), this.layer.fullExtent = e3.fullExtent);
    });
    this.addResolvingPromise(e2), this.when(() => this._postInitialize());
  }
  get hasMixedImageFormats() {
    return true;
  }
  refresh() {
    this.emit("data-changed");
  }
  canResume() {
    if (!super.canResume())
      return false;
    const e2 = this.layer.activeLayer.tileMatrixSet;
    return null != e2 && !this._getTileInfoError(e2.tileInfo, e2.fullExtent);
  }
  async doRefresh() {
    this.suspended || this.emit("data-changed");
  }
  _postInitialize() {
    this._updatingHandles.add(() => this.layer?.activeLayer?.styleId, () => this.refresh()), this._updatingHandles.add(() => this.layer?.activeLayer, (e2) => {
      const t = this._getCompatibleTileInfoMatrixSet((e3) => this._getTileInfoError(e3.tileInfo, e3.fullExtent), true);
      t && null != t.id && e2.tileMatrixSetId !== t.id && (this.layer.activeLayer.tileMatrixSetId = t.id), this.notifyChange("suspended"), this.canResume() && this.refresh();
    });
  }
  _getCompatibleTileInfoMatrixSet(e2, r = false) {
    const s = M(this.layer);
    if (null != s) {
      if (V.isCollection(s)) {
        const t = s.find((t2) => {
          const s2 = e2(t2);
          return null != s2 && (r ? s$1.getLogger(this).error("The selected tile matrix set is not compatible with the view", s2) : this.addResolvingPromise(Promise.reject(s2))), null == s2;
        });
        return t;
      }
      const o = e2(s);
      return null != o && (r ? s$1.getLogger(this).error("The selected tile matrix set is not compatible with the view", o) : this.addResolvingPromise(Promise.reject(o))), s;
    }
    return null;
  }
  _getTileInfoError(e2, t) {
    return this._getTileInfoSupportError(e2, t) || this._getTileInfoCompatibilityError(e2, this.view.basemapTerrain.tilingScheme);
  }
};
e([y({ readOnly: true })], m.prototype, "hasMixedImageFormats", null), e([y()], m.prototype, "layer", void 0), e([y()], m.prototype, "suspended", void 0), e([y()], m.prototype, "tileInfo", void 0), m = e([c$1("esri.views.3d.layers.WMTSLayerView3d")], m);
const p = m;
export {
  p as default
};
