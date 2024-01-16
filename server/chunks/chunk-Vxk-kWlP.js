import { bo as e, bp as y, br as c, cO as f$1, g2 as v } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var p;
let i = p = class extends f$1 {
  static from(r) {
    return v(p, r);
  }
  constructor(r) {
    super(r), this.sessionId = void 0, this.moment = null;
  }
};
e([y({ type: String, json: { write: true } })], i.prototype, "sessionId", void 0), e([y({ type: Date, json: { type: Number, write: { writer: (r, o) => {
  o.moment = r ? r.getTime() : null;
} } } })], i.prototype, "moment", void 0), i = p = e([c("esri.rest.versionManagement.gdbVersion.support.PostParameters")], i);
const m = i;
export {
  m as default
};
