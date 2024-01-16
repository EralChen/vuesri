import { bo as e, bp as y, e2 as j, br as c, f1 as o, bD as u$1, aM as s$1 } from "./chunk-KFNcxJaF.js";
const i = (i2) => {
  let m = class extends i2 {
    initialize() {
      this.exportImageParameters = new o({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u$1(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    fetchPopupFeatures(e2) {
      const { layer: t } = this;
      if (!e2)
        return Promise.reject(new s$1("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: t }));
      const { popupEnabled: o2 } = t;
      if (!o2)
        return Promise.reject(new s$1("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: o2 }));
      const s = this.createFetchPopupFeaturesQuery(e2);
      if (!s)
        return Promise.resolve([]);
      const { extent: p, width: a, height: i3, x: m2, y: n } = s;
      if (!(p && a && i3))
        throw new s$1("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: p, width: a, height: i3 });
      return t.fetchFeatureInfo(p, a, i3, m2, n);
    }
  };
  return e([y()], m.prototype, "exportImageParameters", void 0), e([y({ readOnly: true })], m.prototype, "exportImageVersion", null), e([y()], m.prototype, "layer", void 0), e([y(j)], m.prototype, "timeExtent", void 0), m = e([c("esri.layers.mixins.WMSLayerView")], m), m;
};
export {
  i
};
