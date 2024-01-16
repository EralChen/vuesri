import { cm as j, cn as m$1, dx as k, bo as e, bp as y, br as c$1, bN as b$1, aM as s$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let a = class extends j(m$1(b$1)) {
  constructor(e2) {
    super(e2), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e2, o) => {
      k(() => {
        const e3 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s = "Unsupported layer type";
        e3 && (s += " " + e3), o(new s$1("layer:unsupported-layer-type", s, { layerType: e3 }));
      });
    }));
  }
  read(e2, r) {
    const o = { resourceInfo: e2 };
    null != e2.id && (o.id = e2.id), null != e2.title && (o.title = e2.title), super.read(o, r);
  }
  write(e2, r) {
    return Object.assign(e2 || {}, this.resourceInfo, { id: this.id });
  }
};
e([y({ readOnly: true })], a.prototype, "resourceInfo", void 0), e([y({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), e([y({ type: Boolean, readOnly: false })], a.prototype, "persistenceEnabled", void 0), e([y({ json: { read: false }, readOnly: true, value: "unsupported" })], a.prototype, "type", void 0), a = e([c$1("esri.layers.UnsupportedLayer")], a);
const c = a;
export {
  c as default
};
