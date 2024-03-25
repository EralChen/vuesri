import { jc as u$1, aV as e, aX as y, cY as x$1, jd as s, ei as s$1, je as a, a_ as c, jf as l$1 } from "./chunk-ejFG4zJ0.js";
var t;
!function(t2) {
  t2.Horizontal = "horizontal", t2.Vertical = "vertical", t2.Direct = "direct";
}(t || (t = {}));
const r = [t.Horizontal, t.Vertical, t.Direct];
let l = class extends u$1(l$1) {
  constructor(o) {
    super(o), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = t.Direct, this.offset = 0, this.orientation = 0;
  }
};
e([y({ type: ["length"], json: { write: { isRequired: true } } })], l.prototype, "type", void 0), e([y({ type: x$1, json: { write: true } })], l.prototype, "startPoint", void 0), e([y({ type: x$1, json: { write: true } })], l.prototype, "endPoint", void 0), e([y({ type: r, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "measureType", void 0), e([y({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "offset", void 0), e([y({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o) => s$1.normalize(a(o), 0, true))], l.prototype, "orientation", void 0), l = e([c("esri.analysis.LengthDimension")], l);
const u = l;
export {
  r,
  t,
  u
};
