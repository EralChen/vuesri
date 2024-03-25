import { aV as e, aX as y, ez as t, eA as e$1, a_ as c$1, eB as t$1, aO as s, ex as w$1, eC as C } from "./chunk-ejFG4zJ0.js";
const c = (c2) => {
  let p = class extends c2 {
    get imageFormatIsOpaque() {
      return false;
    }
    get fullExtent() {
      return this.layer.fullExtent;
    }
    get isOpaque() {
      return this.fullOpacity >= 1 && this.imageFormatIsOpaque;
    }
    get dataScaleRange() {
      const e2 = this.tileInfo.lods;
      let t2 = e2[0].scale, i = e2[e2.length - 1].scale;
      if ("tilemapCache" in this.layer && this.layer.tilemapCache) {
        const { effectiveMinLOD: e3, effectiveMaxLOD: r } = this.layer.tilemapCache;
        t2 = this.tileInfo.lodAt(e3).scale, i = this.tileInfo.lodAt(r).scale;
      }
      return { minScale: t2, maxScale: i };
    }
    get dataLevelRange() {
      const { minScale: e2, maxScale: t2 } = this.dataScaleRange;
      return this.levelRangeFromScaleRange(e2, t2);
    }
    get displayLevelRange() {
      const e2 = this.layer.minScale || this.dataScaleRange.minScale, t2 = this.layer.maxScale || this.dataScaleRange.maxScale, i = this.levelRangeFromScaleRange(e2, t2);
      return this.layer.maxScale && i.maxLevel++, i;
    }
    get performanceInfo() {
      return new t$1(this.view.basemapTerrain.getUsedMemoryForLayerView(this));
    }
    getTileUrl(e2, t2, i) {
      return this.layer.getTileUrl(e2, t2, i);
    }
    _addTilingSchemeMatchPromise() {
      if (null == this.fullExtent)
        return this.addResolvingPromise(Promise.reject(new s("tilingscheme:extent-not-defined", "This layer doesn't define a fullExtent.")));
      const e2 = this._getTileInfoSupportError(this.tileInfo, this.fullExtent);
      if (e2)
        return this.addResolvingPromise(Promise.reject(e2));
      const r = w$1(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
        const e3 = this.view.basemapTerrain.tilingScheme, t2 = this._getTileInfoCompatibilityError(this.tileInfo, e3);
        if (t2)
          throw t2;
      });
      this.addResolvingPromise(r);
    }
    _getTileInfoSupportError(e2, i) {
      const r = C(e2, i, this.view.spatialReference, this.view.state.viewingMode);
      if (r) {
        const e3 = { layer: this.layer, error: r };
        let i2;
        switch (r.name) {
          case "tilingscheme:spatial-reference-mismatch":
          case "tilingscheme:global-unsupported-spatial-reference":
          case "tilingscheme:local-unsupported-spatial-reference":
            i2 = new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", e3);
            break;
          default:
            i2 = new s("layerview:tiling-scheme-unsupported", "The tiling scheme of this layer is not supported by SceneView", e3);
        }
        return i2;
      }
      return null;
    }
    _getTileInfoCompatibilityError(e2, i) {
      return null != e2 && i.compatibleWith(e2) ? null : new s("layerview:tiling-scheme-incompatible", "The tiling scheme of this layer is incompatible with the tiling scheme of the surface");
    }
    levelRangeFromScaleRange(e2, t2) {
      const i = { minLevel: 0, maxLevel: 1 / 0 }, r = this.view && this.view.basemapTerrain && this.view.basemapTerrain.tilingScheme;
      if (!r)
        return i;
      const a = r.levels[0], l = (e3) => {
        const t3 = Math.log(a.scale / e3) / Math.LN2;
        return 0.5 - Math.abs(0.5 - t3 % 1) < 1e-9 ? Math.round(t3) : Math.ceil(t3);
      };
      return null != e2 && e2 > 0 && (i.minLevel = Math.max(0, l(e2))), null != t2 && t2 > 0 && (i.maxLevel = Math.max(0, l(t2))), i;
    }
    isUpdating() {
      return !!(this.view && this.view.basemapTerrain && this.view.basemapTerrain.updating);
    }
  };
  return e([y({ readOnly: true })], p.prototype, "imageFormatIsOpaque", null), e([y({ readOnly: true })], p.prototype, "updating", void 0), e([y(t)], p.prototype, "updatingProgress", void 0), e([y(e$1)], p.prototype, "updatingProgressValue", void 0), e([y()], p.prototype, "fullExtent", null), e([y({ readOnly: true })], p.prototype, "isOpaque", null), e([y()], p.prototype, "dataScaleRange", null), e([y({ readOnly: true })], p.prototype, "dataLevelRange", null), e([y({ readOnly: true })], p.prototype, "displayLevelRange", null), e([y()], p.prototype, "layer", void 0), p = e([c$1("esri.views.3d.layers.TiledLayerView3D")], p), p;
};
export {
  c
};
