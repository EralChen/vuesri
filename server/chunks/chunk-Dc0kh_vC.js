import { bo as e, bp as y, br as c, bs as g$1 } from "./chunk-KFNcxJaF.js";
let s = class extends g$1 {
  initialize() {
  }
  destroy() {
  }
  get supportsTileUpdates() {
    return false;
  }
  get spatialReference() {
    const e2 = this.tileStore.tileScheme.spatialReference;
    return e2 && e2.toJSON() || null;
  }
};
e([y({ readOnly: true })], s.prototype, "supportsTileUpdates", null), e([y({ constructOnly: true })], s.prototype, "remoteClient", void 0), e([y({ constructOnly: true })], s.prototype, "service", void 0), e([y()], s.prototype, "spatialReference", null), e([y({ constructOnly: true })], s.prototype, "tileInfo", void 0), e([y({ constructOnly: true })], s.prototype, "tileStore", void 0), s = e([c("esri.views.2d.layers.features.processors.BaseProcessor")], s);
const p = s;
export {
  p
};
