import { aV as e, aX as y, a_ as c, db as f, gX as v } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
var p;
let i = p = class extends f {
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
