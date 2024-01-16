let t$1 = class t {
  constructor(t2 = 0, h = 0, i = 0, s = 0) {
    this.x = t2, this.y = h, this.width = i, this.height = s;
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t2) {
    this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.width = Math.max(this.width, t2.width), this.height = Math.max(this.height, t2.height);
  }
};
export {
  t$1 as t
};
