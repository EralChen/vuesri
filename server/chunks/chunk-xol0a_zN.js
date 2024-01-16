import { cm as j, cn as m$1, dx as k, bo as e, bp as y, br as c$1, bN as b$1, aM as s$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let a = class extends j(m$1(b$1)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, e2) => {
      k(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s = "Unknown layer type";
        r2 && (s += " " + r2), e2(new s$1("layer:unknown-layer-type", s, { layerType: r2 }));
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
