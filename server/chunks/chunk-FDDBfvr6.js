import { lM as h } from "./chunk-ejFG4zJ0.js";
var t;
!function(e2) {
  e2[e2.moveTo = 1] = "moveTo", e2[e2.lineTo = 2] = "lineTo", e2[e2.close = 7] = "close";
}(t || (t = {}));
class s {
  constructor(e2, t2, s2 = 0) {
    this.values = {}, this._geometry = void 0, this._pbfGeometry = null, this.featureIndex = s2;
    const o = t2.keys, r = t2.values, a = e2.asUnsafe();
    for (; a.next(); )
      switch (a.tag()) {
        case 1:
          this.id = a.getUInt64();
          break;
        case 2: {
          const e3 = a.getMessage().asUnsafe(), t3 = this.values;
          for (; !e3.empty(); ) {
            const s3 = e3.getUInt32(), a2 = e3.getUInt32();
            t3[o[s3]] = r[a2];
          }
          e3.release();
          break;
        }
        case 3:
          this.type = a.getUInt32();
          break;
        case 4:
          this._pbfGeometry = a.getMessage();
          break;
        default:
          a.skip();
      }
  }
  getGeometry(s2) {
    if (void 0 !== this._geometry)
      return this._geometry;
    if (!this._pbfGeometry)
      return null;
    const o = this._pbfGeometry.asUnsafe();
    let r, a;
    this._pbfGeometry = null, s2 ? s2.reset(this.type) : r = [];
    let n, i = t.moveTo, l = 0, h$1 = 0, c = 0;
    for (; !o.empty(); ) {
      if (0 === l) {
        const e2 = o.getUInt32();
        i = 7 & e2, l = e2 >> 3;
      }
      switch (l--, i) {
        case t.moveTo:
          h$1 += o.getSInt32(), c += o.getSInt32(), s2 ? s2.moveTo(h$1, c) : r && (a && r.push(a), a = [], a.push(new h(h$1, c)));
          break;
        case t.lineTo:
          h$1 += o.getSInt32(), c += o.getSInt32(), s2 ? s2.lineTo(h$1, c) : a && a.push(new h(h$1, c));
          break;
        case t.close:
          s2 ? s2.close() : a && !a[0].equals(h$1, c) && a.push(a[0].clone());
          break;
        default:
          throw o.release(), new Error("Invalid path operation");
      }
    }
    return s2 ? n = s2.result() : r && (a && r.push(a), n = r), o.release(), this._geometry = n, n;
  }
}
class e {
  constructor(t2) {
    this.extent = 4096, this.keys = [], this.values = [], this._pbfLayer = t2.clone();
    const s2 = t2.asUnsafe();
    for (; s2.next(); )
      switch (s2.tag()) {
        case 1:
          this.name = s2.getString();
          break;
        case 3:
          this.keys.push(s2.getString());
          break;
        case 4:
          this.values.push(s2.processMessage(e._parseValue));
          break;
        case 5:
          this.extent = s2.getUInt32();
          break;
        default:
          s2.skip();
      }
  }
  getData() {
    return this._pbfLayer;
  }
  static _parseValue(e2) {
    for (; e2.next(); )
      switch (e2.tag()) {
        case 1:
          return e2.getString();
        case 2:
          return e2.getFloat();
        case 3:
          return e2.getDouble();
        case 4:
          return e2.getInt64();
        case 5:
          return e2.getUInt64();
        case 6:
          return e2.getSInt64();
        case 7:
          return e2.getBool();
        default:
          e2.skip();
      }
    return null;
  }
}
export {
  e,
  s
};
