import { bo as e, bp as y, e2 as j, br as c, eo as m } from "./chunk-KFNcxJaF.js";
const p = (p2) => {
  let a = class extends p2 {
    initialize() {
      this.exportImageParameters = new m({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get floors() {
      return this.view?.floors ?? null;
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), this.commitProperty("floors"), (this._get("exportImageVersion") || 0) + 1;
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return e([y()], a.prototype, "exportImageParameters", void 0), e([y({ readOnly: true })], a.prototype, "floors", null), e([y({ readOnly: true })], a.prototype, "exportImageVersion", null), e([y()], a.prototype, "layer", void 0), e([y()], a.prototype, "suspended", void 0), e([y(j)], a.prototype, "timeExtent", void 0), a = e([c("esri.views.layers.MapImageLayerView")], a), a;
};
export {
  p
};
