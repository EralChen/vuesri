import { bo as e, bp as y, br as c, dR as g, bS as e$1, dS as w$1, b1 as s$1, dT as r } from "./chunk-KFNcxJaF.js";
const n = (n2) => {
  let c$1 = class c extends n2 {
    constructor() {
      super(...arguments), this.slicePlaneEnabled = false, this.supportsHeightUnitConversion = false;
    }
    postscript(e2) {
      super.postscript(e2), g(this.layer) && this.addResolvingPromise(this._validateHeightModelInfo());
    }
    async _validateHeightModelInfo() {
      const e2 = new AbortController(), o = e2.signal;
      this.addHandles(e$1(() => e2.abort())), await w$1(() => this.view.defaultsFromMap?.heightModelInfoReady, o), s$1(o);
      const i = r(this.layer, this.view.heightModelInfo, this.supportsHeightUnitConversion);
      if (i)
        throw i;
    }
    canResume() {
      const e2 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      return super.canResume() && (!e2?.minScale || !e2.maxScale || e2.minScale >= e2.maxScale);
    }
    getSuspendInfo() {
      const e2 = super.getSuspendInfo(), s = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      return s && s.minScale && s.maxScale && s.minScale < s.maxScale && (e2.outsideScaleRange = true), e2;
    }
  };
  return e([y()], c$1.prototype, "view", void 0), e([y()], c$1.prototype, "slicePlaneEnabled", void 0), c$1 = e([c("esri.views.3d.layers.LayerView3D")], c$1), c$1;
};
export {
  n
};
