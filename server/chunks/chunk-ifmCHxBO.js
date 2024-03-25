import { gP as l } from "./chunk-ejFG4zJ0.js";
class t {
  constructor() {
    this._idToCounters = /* @__PURE__ */ new Map();
  }
  get empty() {
    return 0 === this._idToCounters.size;
  }
  addReason(e, t2) {
    for (const s of e) {
      let e2 = this._idToCounters.get(s);
      e2 || (e2 = /* @__PURE__ */ new Map(), this._idToCounters.set(s, e2)), e2.set(t2, (e2.get(t2) || 0) + 1);
    }
  }
  deleteReason(e, t2) {
    for (const s of e) {
      const e2 = this._idToCounters.get(s);
      if (!e2)
        continue;
      let o = e2.get(t2);
      if (null == o)
        return;
      o--, o > 0 ? e2.set(t2, o) : e2.delete(t2), 0 === e2.size && this._idToCounters.delete(s);
    }
  }
  getHighestReason(t2) {
    const s = this._idToCounters.get(t2);
    if (!s)
      return null;
    let o = null;
    for (const n of l)
      s.get(n) && (o = n);
    return o || null;
  }
  ids() {
    return this._idToCounters.keys();
  }
}
export {
  t
};
