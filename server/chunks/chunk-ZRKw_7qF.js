import { aV as e, aX as y, a_ as c, ew as g, cm as e$1, ex as w$1, cU as s$1, ey as a } from "./chunk-ejFG4zJ0.js";
const n = (n2) => {
  let c$1 = class c extends n2 {
    constructor() {
      super(...arguments), this.slicePlaneEnabled = false, this.supportsHeightUnitConversion = false;
    }
    postscript(e2) {
      super.postscript(e2), g(this.layer) && this.addResolvingPromise(this._validateHeightModelInfo());
    }
    async _validateHeightModelInfo() {
      const e2 = new AbortController(), r = e2.signal;
      this.addHandles(e$1(() => e2.abort())), await w$1(() => this.view.defaultsFromMap?.heightModelInfoReady, r), s$1(r);
      const i = a(this.layer, this.view.heightModelInfo, this.supportsHeightUnitConversion);
      if (i)
        throw i;
    }
    canResume() {
      const e2 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      return super.canResume() && (!e2?.minScale || !e2.maxScale || e2.minScale >= e2.maxScale);
    }
    getSuspendInfo() {
      const e2 = super.getSuspendInfo(), t = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      return t && t.minScale && t.maxScale && t.minScale < t.maxScale && (e2.outsideScaleRange = true), e2;
    }
  };
  return e([y()], c$1.prototype, "view", void 0), e([y()], c$1.prototype, "slicePlaneEnabled", void 0), c$1 = e([c("esri.views.3d.layers.LayerView3D")], c$1), c$1;
};
export {
  n
};
