import { bo as e, bp as y, e2 as j, br as c, aM as s$1, ee as p, bQ as b, cy as x$1 } from "./chunk-KFNcxJaF.js";
const n = (n2) => {
  let u = class extends n2 {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeatures(e2, t) {
      const { layer: o } = this;
      if (!e2)
        throw new s$1("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o });
      const { popupEnabled: p$1 } = o, n3 = p(o, t);
      if (!p$1 || null == n3)
        throw new s$1("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: p$1, popupTemplate: n3 });
      const u2 = await n3.getRequiredFields(), l = new b();
      l.timeExtent = this.timeExtent, l.geometry = e2, l.outFields = u2, l.outSpatialReference = e2.spatialReference;
      const { resolution: m, spatialReference: c2 } = this.view, y2 = "2d" === this.view.type ? new x$1(m, m, c2) : new x$1(0.5 * m, 0.5 * m, c2), { returnTopmostRaster: d, showNoDataRecords: h } = n3.layerOptions || { returnTopmostRaster: true, showNoDataRecords: false }, w = { returnDomainValues: true, returnTopmostRaster: d, pixelSize: y2, showNoDataRecords: h, signal: null != t ? t.signal : null };
      return o.queryVisibleRasters(l, w).then((e3) => e3);
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return e([y()], u.prototype, "layer", void 0), e([y()], u.prototype, "suspended", void 0), e([y(j)], u.prototype, "timeExtent", void 0), e([y()], u.prototype, "view", void 0), u = e([c("esri.views.layers.ImageryLayerView")], u), u;
};
export {
  n
};
