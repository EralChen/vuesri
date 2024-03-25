import { aV as e, aX as y, eU as j, a_ as c, fO as se, fR as v, aO as s, f4 as p$1, bJ as c$1 } from "./chunk-ejFG4zJ0.js";
const p = (p2) => {
  let u = class extends p2 {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    _getfullExtent() {
      return se(this.layer.serviceRasterInfo, this.view.spatialReference);
    }
    get hasTilingEffects() {
      return !!(this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment);
    }
    get datumTransformation() {
      return v(this.layer.fullExtent, this.view.spatialReference, true);
    }
    supportsSpatialReference(e2) {
      return !!se(this.layer.serviceRasterInfo, e2);
    }
    async fetchPopupFeaturesAtLocation(e2, i) {
      const { layer: o } = this;
      if (!e2)
        throw new s("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: o });
      const { popupEnabled: s$1 } = o, a = p$1(o, i);
      if (!s$1 || null == a)
        throw new s("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: s$1, popupTemplate: a });
      const n = [], { value: p3, magdirValue: u2, processedValue: c2 } = await o.identify(e2, { timeExtent: this.timeExtent, signal: i?.signal });
      let f = "";
      if (p3 && p3.length) {
        f = "imagery-tile" === o.type && o.hasStandardTime() && null != p3[0] ? p3.map((e4) => o.getStandardTimeValue(e4)).join(", ") : p3.join(", ");
        const e3 = { ObjectId: 0 }, r = "Raster.ServicePixelValue";
        e3[r] = "imagery-tile" === o.type && "Function" === o.raster.datasetFormat ? c2?.join(", ") : f, e3[r + ".Raw"] = f;
        const i2 = o.serviceRasterInfo.attributeTable;
        if (null != i2) {
          const { fields: t, features: r2 } = i2, o2 = t.find(({ name: e4 }) => "value" === e4.toLowerCase()), s3 = o2 ? r2.find((e4) => String(e4.attributes[o2.name]) === f) : null;
          if (s3) {
            for (const i3 in s3.attributes)
              if (s3.attributes.hasOwnProperty(i3)) {
                e3[this._rasterFieldPrefix + i3] = s3.attributes[i3];
              }
          }
        }
        const s2 = o.serviceRasterInfo.dataType;
        "vector-magdir" !== s2 && "vector-uv" !== s2 || (e3["Raster.Magnitude"] = u2?.[0], e3["Raster.Direction"] = u2?.[1]);
        const a2 = new c$1(this.fullExtent.clone(), null, e3);
        a2.layer = o, a2.sourceLayer = a2.layer, n.push(a2);
      }
      return n;
    }
  };
  return e([y()], u.prototype, "layer", void 0), e([y(j)], u.prototype, "timeExtent", void 0), e([y()], u.prototype, "view", void 0), e([y()], u.prototype, "fullExtent", null), e([y()], u.prototype, "tileInfo", void 0), e([y({ readOnly: true })], u.prototype, "hasTilingEffects", null), e([y()], u.prototype, "datumTransformation", null), u = e([c("esri.views.layers.ImageryTileLayerView")], u), u;
};
export {
  p
};
