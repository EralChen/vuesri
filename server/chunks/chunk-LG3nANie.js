import { aw as j, ay as m, e3 as v, aV as e, aX as y, a_ as c$1, a$ as b, aO as s } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let a = class extends j(m(b)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, e2) => {
      v(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s$1 = "Unknown layer type";
        r2 && (s$1 += " " + r2), e2(new s("layer:unknown-layer-type", s$1, { layerType: r2 }));
      });
    }));
  }
  read(r, o) {
    super.read({ resourceInfo: r }, o);
  }
  write(r, o) {
    return null;
  }
};
e([y({ readOnly: true })], a.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), e([y({ json: { read: false }, readOnly: true, value: "unknown" })], a.prototype, "type", void 0), a = e([c$1("esri.layers.UnknownLayer")], a);
const c = a;
export {
  c as default
};
