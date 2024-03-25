import { aV as e, aX as y$1, bY as j, d9 as j$1, da as r, a_ as c, db as f$1, dc as H$1, dd as s, de as rn, bD as a } from "./chunk-ejFG4zJ0.js";
var l;
let y = l = class extends f$1 {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r2, o, s$1) {
    if (s$1.layer?.spatialReference && !s$1.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!H$1(e2.spatialReference, s$1.layer.spatialReference))
        return void (s$1?.messages && s$1.messages.push(new s("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s$1.layer.spatialReference, context: s$1 })));
      const p = new j();
      rn(e2, p, s$1.layer.spatialReference), r2[o] = p.toJSON(s$1);
    } else
      r2[o] = e2.toJSON(s$1);
    delete r2[o].spatialReference;
  }
  clone() {
    return new l({ geometry: a(this.geometry), type: this.type });
  }
};
e([y$1({ type: j }), j$1()], y.prototype, "geometry", void 0), e([r(["web-scene", "portal-item"], "geometry")], y.prototype, "writeGeometry", null), e([y$1({ type: ["clip", "mask", "replace"], nonNullable: true }), j$1()], y.prototype, "type", void 0), y = l = e([c("esri.layers.support.SceneModification")], y);
const f = y;
export {
  f
};
