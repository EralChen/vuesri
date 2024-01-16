import { bo as e, bp as y$1, bq as j, cM as j$1, cN as r, br as c, cO as f$1, cP as D, cQ as s, cR as nn, b8 as a$1 } from "./chunk-KFNcxJaF.js";
var l;
let y = l = class extends f$1 {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r2, o, s$1) {
    if (s$1.layer?.spatialReference && !s$1.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!D(e2.spatialReference, s$1.layer.spatialReference))
        return void (s$1?.messages && s$1.messages.push(new s("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s$1.layer.spatialReference, context: s$1 })));
      const p = new j();
      nn(e2, p, s$1.layer.spatialReference), r2[o] = p.toJSON(s$1);
    } else
      r2[o] = e2.toJSON(s$1);
    delete r2[o].spatialReference;
  }
  clone() {
    return new l({ geometry: a$1(this.geometry), type: this.type });
  }
};
e([y$1({ type: j }), j$1()], y.prototype, "geometry", void 0), e([r(["web-scene", "portal-item"], "geometry")], y.prototype, "writeGeometry", null), e([y$1({ type: ["clip", "mask", "replace"], nonNullable: true }), j$1()], y.prototype, "type", void 0), y = l = e([c("esri.layers.support.SceneModification")], y);
const f = y;
export {
  f
};
