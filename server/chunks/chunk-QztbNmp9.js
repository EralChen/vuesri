import { ds as o, eP as r, eQ as E, eR as n } from "./chunk-ejFG4zJ0.js";
class h extends o {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set(), this._length = r(0);
  }
  clear() {
    if (this._set.size > 0) {
      const e = this.toArray();
      this._set.clear(), this.emit("after-changes", { type: E.REMOVE }), this.emit("change", { added: [], removed: e });
    }
  }
  get length() {
    return this._length.value;
  }
  addMany(e) {
    if (0 !== e.length) {
      for (const t of e)
        this._set.add(t);
      this._length.value = this._set.size, this.emit("after-changes", { type: E.ADD }), this.emit("change", { added: e, removed: [] });
    }
  }
  remove(e) {
    this._set.delete(e) && (this._length.value = this._set.size, this.emit("after-changes", { type: E.REMOVE }), this.emit("change", { added: [], removed: [e] }));
  }
  removeMany(e) {
    const s = [];
    for (const t of e)
      this._set.delete(t) && s.push(t);
    s.length > 0 && (this._length.value = this._set.size, this.emit("after-changes", { type: E.REMOVE }), this.emit("change", { added: [], removed: s }));
  }
  toArray() {
    return [...this._set];
  }
  find(e) {
    let t;
    return n(this._set, (s) => !!e(s) && (t = s, true)), t;
  }
  forEach(e) {
    this._set.forEach((t) => e(t));
  }
}
export {
  h
};
