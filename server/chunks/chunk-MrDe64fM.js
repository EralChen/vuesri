class t {
  constructor(t2 = []) {
    this._elements = t2;
  }
  length() {
    return this._elements.length;
  }
  get(t2) {
    return this._elements[t2];
  }
  toArray() {
    const t2 = [];
    for (let e = 0; e < this.length(); e++)
      t2.push(this.get(e));
    return t2;
  }
}
export {
  t
};
