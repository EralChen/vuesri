import { bo as e, bp as y, br as c } from "./chunk-KFNcxJaF.js";
const o = (o2) => {
  let t = class extends o2 {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((e2) => e2.name);
    }
  };
  return e([y()], t.prototype, "layer", void 0), e([y({ readOnly: true })], t.prototype, "availableFields", null), t = e([c("esri.views.layers.OGCFeatureLayerView")], t), t;
};
export {
  o
};
