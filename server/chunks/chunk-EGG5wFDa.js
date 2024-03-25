import { aV as e, aX as y, eU as j, a_ as c, fS as a, c8 as u$1, aO as s, cU as s$1 } from "./chunk-ejFG4zJ0.js";
const m = (m2) => {
  let n = class extends m2 {
    initialize() {
      this.exportImageParameters = new a({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u$1(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    async fetchPopupFeaturesAtLocation(e2, t) {
      const { layer: s$2 } = this;
      if (!e2)
        throw new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s$2 });
      const { popupEnabled: a2 } = s$2;
      if (!a2)
        throw new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: a2 });
      const p = this.createFetchPopupFeaturesQuery(e2);
      if (!p)
        return [];
      const { extent: i, width: m3, height: n2, x: c2, y: u } = p;
      if (!(i && m3 && n2))
        throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: i, width: m3, height: n2 });
      const h = await s$2.fetchFeatureInfo(i, m3, n2, c2, u);
      return s$1(t), h;
    }
  };
  return e([y()], n.prototype, "exportImageParameters", void 0), e([y({ readOnly: true })], n.prototype, "exportImageVersion", null), e([y()], n.prototype, "layer", void 0), e([y(j)], n.prototype, "timeExtent", void 0), n = e([c("esri.layers.mixins.WMSLayerView")], n), n;
};
export {
  m
};
