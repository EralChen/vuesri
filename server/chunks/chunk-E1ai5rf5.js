import { b2 as l$1, b3 as z, b4 as f$1, b5 as b$1 } from "./chunk-ejFG4zJ0.js";
class s {
  constructor(t = 9, i) {
    this._compareMinX = o, this._compareMinY = l, this._toBBox = (t2) => t2, this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), i && ("function" == typeof i ? this._toBBox = i : this._initFormat(i)), this.clear();
  }
  destroy() {
    this.clear(), p.prune(), g.prune(), M.prune(), X.prune();
  }
  all(t) {
    this._all(this._data, t);
  }
  search(t, i) {
    let n = this._data;
    const e = this._toBBox;
    if (x(t, n))
      for (p.clear(); n; ) {
        for (let s2 = 0, h2 = n.children.length; s2 < h2; s2++) {
          const h3 = n.children[s2], a2 = n.leaf ? e(h3) : h3;
          x(t, a2) && (n.leaf ? i(h3) : _(t, a2) ? this._all(h3, i) : p.push(h3));
        }
        n = p.pop();
      }
  }
  collides(t) {
    let i = this._data;
    const n = this._toBBox;
    if (!x(t, i))
      return false;
    for (p.clear(); i; ) {
      for (let e = 0, s2 = i.children.length; e < s2; e++) {
        const s3 = i.children[e], h2 = i.leaf ? n(s3) : s3;
        if (x(t, h2)) {
          if (i.leaf || _(t, h2))
            return true;
          p.push(s3);
        }
      }
      i = p.pop();
    }
    return false;
  }
  load(t) {
    if (!t.length)
      return this;
    if (t.length < this._minEntries) {
      for (let i2 = 0, n = t.length; i2 < n; i2++)
        this.insert(t[i2]);
      return this;
    }
    let i = this._build(t.slice(0, t.length), 0, t.length - 1, 0);
    if (this._data.children.length)
      if (this._data.height === i.height)
        this._splitRoot(this._data, i);
      else {
        if (this._data.height < i.height) {
          const t2 = this._data;
          this._data = i, i = t2;
        }
        this._insert(i, this._data.height - i.height - 1, true);
      }
    else
      this._data = i;
    return this;
  }
  insert(t) {
    return t && this._insert(t, this._data.height - 1), this;
  }
  clear() {
    return this._data = new w([]), this;
  }
  remove(i) {
    if (!i)
      return this;
    let n, e = this._data, s2 = null, h2 = 0, a2 = false;
    const r2 = this._toBBox(i);
    for (M.clear(), X.clear(); e || M.length > 0; ) {
      if (e || (e = M.pop(), s2 = M.data[M.length - 1], h2 = X.pop() ?? 0, a2 = true), e.leaf && (n = z(e.children, i, e.children.length, e.indexHint), -1 !== n))
        return e.children.splice(n, 1), M.push(e), this._condense(M), this;
      a2 || e.leaf || !_(e, r2) ? s2 ? (h2++, e = s2.children[h2], a2 = false) : e = null : (M.push(e), X.push(h2), h2 = 0, s2 = e, e = e.children[0]);
    }
    return this;
  }
  toJSON() {
    return this._data;
  }
  fromJSON(t) {
    return this._data = t, this;
  }
  _all(t, i) {
    let n = t;
    for (g.clear(); n; ) {
      if (true === n.leaf)
        for (const t2 of n.children)
          i(t2);
      else
        g.pushArray(n.children);
      n = g.pop() ?? null;
    }
  }
  _build(t, i, n, e) {
    const s2 = n - i + 1;
    let a2 = this._maxEntries;
    if (s2 <= a2) {
      const e2 = new w(t.slice(i, n + 1));
      return h(e2, this._toBBox), e2;
    }
    e || (e = Math.ceil(Math.log(s2) / Math.log(a2)), a2 = Math.ceil(s2 / a2 ** (e - 1)));
    const r2 = new b([]);
    r2.height = e;
    const o2 = Math.ceil(s2 / a2), l2 = o2 * Math.ceil(Math.sqrt(a2));
    f(t, i, n, l2, this._compareMinX);
    for (let h2 = i; h2 <= n; h2 += l2) {
      const i2 = Math.min(h2 + l2 - 1, n);
      f(t, h2, i2, o2, this._compareMinY);
      for (let n2 = h2; n2 <= i2; n2 += o2) {
        const s3 = Math.min(n2 + o2 - 1, i2);
        r2.children.push(this._build(t, n2, s3, e - 1));
      }
    }
    return h(r2, this._toBBox), r2;
  }
  _chooseSubtree(t, i, n, e) {
    for (; e.push(i), true !== i.leaf && e.length - 1 !== n; ) {
      let n2, e2 = 1 / 0, s2 = 1 / 0;
      for (let h2 = 0, a2 = i.children.length; h2 < a2; h2++) {
        const a3 = i.children[h2], r2 = c(a3), o2 = d(t, a3) - r2;
        o2 < s2 ? (s2 = o2, e2 = r2 < e2 ? r2 : e2, n2 = a3) : o2 === s2 && r2 < e2 && (e2 = r2, n2 = a3);
      }
      i = n2 || i.children[0];
    }
    return i;
  }
  _insert(t, i, n) {
    const e = this._toBBox, s2 = n ? t : e(t);
    M.clear();
    const h2 = this._chooseSubtree(s2, this._data, i, M);
    for (h2.children.push(t), r(h2, s2); i >= 0 && M.data[i].children.length > this._maxEntries; )
      this._split(M, i), i--;
    this._adjustParentBBoxes(s2, M, i);
  }
  _split(t, i) {
    const n = t.data[i], e = n.children.length, s2 = this._minEntries;
    this._chooseSplitAxis(n, s2, e);
    const a2 = this._chooseSplitIndex(n, s2, e);
    if (!a2)
      return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");
    const r2 = n.children.splice(a2, n.children.length - a2), o2 = n.leaf ? new w(r2) : new b(r2);
    o2.height = n.height, h(n, this._toBBox), h(o2, this._toBBox), i ? t.data[i - 1].children.push(o2) : this._splitRoot(n, o2);
  }
  _splitRoot(t, i) {
    this._data = new b([t, i]), this._data.height = t.height + 1, h(this._data, this._toBBox);
  }
  _chooseSplitIndex(t, i, n) {
    let e, s2, h2;
    e = s2 = 1 / 0;
    for (let r2 = i; r2 <= n - i; r2++) {
      const i2 = a(t, 0, r2, this._toBBox), o2 = a(t, r2, n, this._toBBox), l2 = u(i2, o2), m2 = c(i2) + c(o2);
      l2 < e ? (e = l2, h2 = r2, s2 = m2 < s2 ? m2 : s2) : l2 === e && m2 < s2 && (s2 = m2, h2 = r2);
    }
    return h2;
  }
  _chooseSplitAxis(t, i, n) {
    const e = t.leaf ? this._compareMinX : o, s2 = t.leaf ? this._compareMinY : l;
    this._allDistMargin(t, i, n, e) < this._allDistMargin(t, i, n, s2) && t.children.sort(e);
  }
  _allDistMargin(t, i, n, e) {
    t.children.sort(e);
    const s2 = this._toBBox, h2 = a(t, 0, i, s2), o2 = a(t, n - i, n, s2);
    let l2 = m(h2) + m(o2);
    for (let a2 = i; a2 < n - i; a2++) {
      const i2 = t.children[a2];
      r(h2, t.leaf ? s2(i2) : i2), l2 += m(h2);
    }
    for (let a2 = n - i - 1; a2 >= i; a2--) {
      const i2 = t.children[a2];
      r(o2, t.leaf ? s2(i2) : i2), l2 += m(o2);
    }
    return l2;
  }
  _adjustParentBBoxes(t, i, n) {
    for (let e = n; e >= 0; e--)
      r(i.data[e], t);
  }
  _condense(i) {
    for (let n = i.length - 1; n >= 0; n--) {
      const e = i.data[n];
      if (0 === e.children.length)
        if (n > 0) {
          const s2 = i.data[n - 1], h2 = s2.children;
          h2.splice(z(h2, e, h2.length, s2.indexHint), 1);
        } else
          this.clear();
      else
        h(e, this._toBBox);
    }
  }
  _initFormat(t) {
    const i = ["return a", " - b", ";"];
    this._compareMinX = new Function("a", "b", i.join(t[0])), this._compareMinY = new Function("a", "b", i.join(t[1])), this._toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
  }
}
function h(t, i) {
  a(t, 0, t.children.length, i, t);
}
function a(t, i, n, e, s2) {
  s2 || (s2 = new w([])), s2.minX = 1 / 0, s2.minY = 1 / 0, s2.maxX = -1 / 0, s2.maxY = -1 / 0;
  for (let h2, a2 = i; a2 < n; a2++)
    h2 = t.children[a2], r(s2, t.leaf ? e(h2) : h2);
  return s2;
}
function r(t, i) {
  t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY);
}
function o(t, i) {
  return t.minX - i.minX;
}
function l(t, i) {
  return t.minY - i.minY;
}
function c(t) {
  return (t.maxX - t.minX) * (t.maxY - t.minY);
}
function m(t) {
  return t.maxX - t.minX + (t.maxY - t.minY);
}
function d(t, i) {
  return (Math.max(i.maxX, t.maxX) - Math.min(i.minX, t.minX)) * (Math.max(i.maxY, t.maxY) - Math.min(i.minY, t.minY));
}
function u(t, i) {
  const n = Math.max(t.minX, i.minX), e = Math.max(t.minY, i.minY), s2 = Math.min(t.maxX, i.maxX), h2 = Math.min(t.maxY, i.maxY);
  return Math.max(0, s2 - n) * Math.max(0, h2 - e);
}
function _(t, i) {
  return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
}
function x(t, i) {
  return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
}
function f(t, i, n, s2, h2) {
  const a2 = [i, n];
  for (; a2.length; ) {
    const i2 = a2.pop(), n2 = a2.pop();
    if (i2 - n2 <= s2)
      continue;
    const r2 = n2 + Math.ceil((i2 - n2) / s2 / 2) * s2;
    f$1(t, r2, n2, i2, h2), a2.push(n2, r2, r2, i2);
  }
}
const p = new l$1(), g = new l$1(), M = new l$1(), X = new l$1({ deallocator: void 0 });
class Y {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
}
class B extends Y {
  constructor() {
    super(...arguments), this.height = 1, this.indexHint = new b$1();
  }
}
class w extends B {
  constructor(t) {
    super(), this.children = t, this.leaf = true;
  }
}
class b extends B {
  constructor(t) {
    super(), this.children = t, this.leaf = false;
  }
}
export {
  s
};
