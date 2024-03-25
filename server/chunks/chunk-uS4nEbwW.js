const t = 2654435761, s = 2246822519, n = 3266489917, e = 668265263, r = 374761393;
function h(t2) {
  const s2 = [];
  for (let n2 = 0, e2 = t2.length; n2 < e2; n2++) {
    let e3 = t2.charCodeAt(n2);
    e3 < 128 ? s2.push(e3) : e3 < 2048 ? s2.push(192 | e3 >> 6, 128 | 63 & e3) : e3 < 55296 || e3 >= 57344 ? s2.push(224 | e3 >> 12, 128 | e3 >> 6 & 63, 128 | 63 & e3) : (n2++, e3 = 65536 + ((1023 & e3) << 10 | 1023 & t2.charCodeAt(n2)), s2.push(240 | e3 >> 18, 128 | e3 >> 12 & 63, 128 | e3 >> 6 & 63, 128 | 63 & e3));
  }
  return new Uint8Array(s2);
}
class i {
  constructor(t2) {
    this._seed = t2, this._totallen = 0, this._bufs = [], this.init();
  }
  init() {
    return this._bufs = [], this._totallen = 0, this;
  }
  updateFloatArray(t2) {
    const s2 = [];
    for (const n2 of t2)
      isNaN(n2) ? s2.push("NaN") : n2 === 1 / 0 ? s2.push("Infinity") : n2 === -1 / 0 ? s2.push("-Infinity") : 0 === n2 ? s2.push("0") : s2.push(n2.toString(16));
    this.update(h(s2.join("")));
  }
  updateIntArray(t2) {
    const s2 = Int32Array.from(t2);
    this.update(new Uint8Array(s2.buffer));
  }
  updateUint8Array(t2) {
    this.update(Uint8Array.from(t2));
  }
  updateWithString(t2) {
    return this.update(h(t2));
  }
  update(t2) {
    return this._bufs.push(t2), this._totallen += t2.length, this;
  }
  digest() {
    const t2 = new Uint8Array(this._totallen);
    let s2 = 0;
    for (const n2 of this._bufs)
      t2.set(n2, s2), s2 += n2.length;
    return this.init(), this._xxHash32(t2, this._seed);
  }
  _xxHash32(h2, i2 = 0) {
    const o = h2;
    let u = i2 + r & 4294967295, a = 0;
    if (o.length >= 16) {
      const n2 = [i2 + t + s & 4294967295, i2 + s & 4294967295, i2 + 0 & 4294967295, i2 - t & 4294967295], e2 = h2, r2 = e2.length - 16;
      let o2 = 0;
      for (a = 0; (4294967280 & a) <= r2; a += 4) {
        const r3 = a, h3 = e2[r3] + (e2[r3 + 1] << 8), i3 = e2[r3 + 2] + (e2[r3 + 3] << 8), u2 = h3 * s + (i3 * s << 16);
        let l2 = n2[o2] + u2 & 4294967295;
        l2 = l2 << 13 | l2 >>> 19;
        const f = 65535 & l2, p = l2 >>> 16;
        n2[o2] = f * t + (p * t << 16) & 4294967295, o2 = o2 + 1 & 3;
      }
      u = (n2[0] << 1 | n2[0] >>> 31) + (n2[1] << 7 | n2[1] >>> 25) + (n2[2] << 12 | n2[2] >>> 20) + (n2[3] << 18 | n2[3] >>> 14) & 4294967295;
    }
    u = u + h2.length & 4294967295;
    const l = h2.length - 4;
    for (; a <= l; a += 4) {
      const t2 = a, s2 = o[t2] + (o[t2 + 1] << 8), r2 = o[t2 + 2] + (o[t2 + 3] << 8);
      u = u + (s2 * n + (r2 * n << 16)) & 4294967295, u = u << 17 | u >>> 15, u = (65535 & u) * e + ((u >>> 16) * e << 16) & 4294967295;
    }
    for (; a < o.length; ++a) {
      u += o[a] * r, u = u << 11 | u >>> 21, u = (65535 & u) * t + ((u >>> 16) * t << 16) & 4294967295;
    }
    return u ^= u >>> 15, u = ((65535 & u) * s & 4294967295) + ((u >>> 16) * s << 16), u ^= u >>> 13, u = ((65535 & u) * n & 4294967295) + ((u >>> 16) * n << 16), u ^= u >>> 16, u < 0 ? u + 4294967296 : u;
  }
}
export {
  i
};
