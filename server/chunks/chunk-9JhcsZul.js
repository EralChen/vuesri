import { dA as s$1, dB as s$2 } from "./chunk-KFNcxJaF.js";
class s {
  constructor() {
    this._set = /* @__PURE__ */ new Set(), this._observable = new s$1();
  }
  get size() {
    return s$2(this._observable), this._set.size;
  }
  add(t) {
    const e = this._set.size;
    return this._set.add(t), this._set.size !== e && this._observable.notify(), this;
  }
  clear() {
    this._set.size > 0 && (this._set.clear(), this._observable.notify());
  }
  delete(t) {
    const e = this._set.delete(t);
    return e && this._observable.notify(), e;
  }
  entries() {
    return s$2(this._observable), this._set.entries();
  }
  forEach(e, s2) {
    s$2(this._observable), this._set.forEach((t, r) => e.call(s2, t, r, this), s2);
  }
  has(e) {
    return s$2(this._observable), this._set.has(e);
  }
  keys() {
    return s$2(this._observable), this._set.keys();
  }
  values() {
    return s$2(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return s$2(this._observable), this._set[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
}
export {
  s
};