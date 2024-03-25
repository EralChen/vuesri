import { aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
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
