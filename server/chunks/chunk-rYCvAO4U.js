import { bo as e, bp as y, e2 as j, br as c, eZ as se, f0 as v, aM as s$1, ee as p$1, bf as c$1 } from "./chunk-KFNcxJaF.js";
const p = (p2) => {
  let u = class extends p2 {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    _getfullExtent() {
      return se(this.layer.rasterInfo, this.view.spatialReference);
    }
    get hasTilingEffects() {
      return !!(this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment);
    }
    get datumTransformation() {
      return v(this.layer.fullExtent, this.view.spatialReference, true);
    }
    supportsSpatialReference(e2) {
      return !!se(this.layer.rasterInfo, e2);
    }
    async fetchPopupFeatures(e2, o) {
      const { layer: s } = this;
      if (!e2)
        throw new s$1("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: s });
      const { popupEnabled: i } = s, a = p$1(s, o);
      if (!i || null == a)
        throw new s$1("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: i, popupTemplate: a });
      const n = [], { value: p3, magdirValue: u2, processedValue: c2 } = await s.identify(e2, { timeExtent: this.timeExtent });
      let f = "";
      if (p3 && p3.length) {
        f = "imagery-tile" === s.type && s.hasStandardTime() && null != p3[0] ? p3.map((e4) => s.getStandardTimeValue(e4)).join(", ") : p3.join(", ");
        const e3 = { ObjectId: 0 }, r = "Raster.ServicePixelValue";
        e3[r] = c2?.join(", ") ?? f, e3[r + ".Raw"] = f;
        const o2 = s.rasterInfo.attributeTable;
        if (null != o2) {
          const { fields: t, features: r2 } = o2, s2 = t.find(({ name: e4 }) => "value" === e4.toLowerCase()), i3 = s2 ? r2.find((e4) => String(e4.attributes[s2.name]) === f) : null;
          if (i3) {
            for (const o3 in i3.attributes)
              if (i3.attributes.hasOwnProperty(o3)) {
                e3[this._rasterFieldPrefix + o3] = i3.attributes[o3];
              }
          }
        }
        const i2 = s.rasterInfo.dataType;
        "vector-magdir" !== i2 && "vector-uv" !== i2 || (e3["Raster.Magnitude"] = u2?.[0], e3["Raster.Direction"] = u2?.[1]);
        const a2 = new c$1(this.fullExtent.clone(), null, e3);
        a2.layer = s, a2.sourceLayer = a2.layer, n.push(a2);
      }
      return n;
    }
  };
  return e([y()], u.prototype, "layer", void 0), e([y(j)], u.prototype, "timeExtent", void 0), e([y()], u.prototype, "view", void 0), e([y()], u.prototype, "fullExtent", null), e([y()], u.prototype, "tileInfo", void 0), e([y({ readOnly: true })], u.prototype, "hasTilingEffects", null), e([y()], u.prototype, "datumTransformation", null), u = e([c("esri.views.layers.ImageryTileLayerView")], u), u;
};
export {
  p
};
