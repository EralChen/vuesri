import { aV as e, aX as y, eU as j, a_ as c, aO as s, f4 as p, cU as s$1, ck as b, cY as x$1 } from "./chunk-ejFG4zJ0.js";
const u = (u2) => {
  let m = class extends u2 {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeaturesAtLocation(e2, o) {
      const { layer: s$2 } = this;
      if (!e2)
        throw new s("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s$2 });
      const { popupEnabled: i } = s$2, u3 = p(s$2, o);
      if (!i || null == u3)
        throw new s("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: i, popupTemplate: u3 });
      const m2 = await u3.getRequiredFields();
      s$1(o);
      const c2 = new b();
      c2.timeExtent = this.timeExtent, c2.geometry = e2, c2.outFields = m2, c2.outSpatialReference = e2.spatialReference;
      const { resolution: l, spatialReference: y2 } = this.view, d = "2d" === this.view.type ? new x$1(l, l, y2) : new x$1(0.5 * l, 0.5 * l, y2), { returnTopmostRaster: h, showNoDataRecords: w } = u3.layerOptions || { returnTopmostRaster: true, showNoDataRecords: false }, f = { returnDomainValues: true, returnTopmostRaster: h, pixelSize: d, showNoDataRecords: w, signal: o?.signal };
      return s$2.queryVisibleRasters(c2, f).then((e3) => e3);
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return e([y()], m.prototype, "layer", void 0), e([y()], m.prototype, "suspended", void 0), e([y(j)], m.prototype, "timeExtent", void 0), e([y()], m.prototype, "view", void 0), m = e([c("esri.views.layers.ImageryLayerView")], m), m;
};
export {
  u
};
