import { b0 as h$1, b1 as s$1, a$ as j, b2 as c$1, b3 as u$1, b4 as i$1 } from "./chunk-KFNcxJaF.js";
class i {
  constructor(t, r, e) {
    this.assetName = t, this.assetMimeType = r, this.parts = e;
  }
  equals(t) {
    return this === t || this.assetName === t.assetName && this.assetMimeType === t.assetMimeType && h$1(this.parts, t.parts, (t2, r) => t2.equals(r));
  }
  isOnService(t) {
    return this.parts.every((r) => r.isOnService(t));
  }
  makeHash() {
    let t = "";
    for (const r of this.parts)
      t += r.partHash;
    return t;
  }
  async toBlob(t) {
    const { parts: r } = this;
    if (1 === r.length)
      return r[0].toBlob(t);
    const s = await Promise.all(r.map((r2) => r2.toBlob(t)));
    return s$1(t), new Blob(s);
  }
}
class o {
  constructor(t, r) {
    this.partUrl = t, this.partHash = r;
  }
  equals(t) {
    return this === t || this.partUrl === t.partUrl && this.partHash === t.partHash;
  }
  isOnService(t) {
    return this.partUrl.startsWith(`${t.path}/assets/`);
  }
  async toBlob(r) {
    const { data: s } = await j(this.partUrl, { responseType: "blob" });
    return s$1(r), s;
  }
}
function u(t) {
  return p(t?.source);
}
function c(t) {
  if (!Array.isArray(t))
    return false;
  return t.every((t2) => t2 instanceof i);
}
const f = /^(model\/gltf\+json)|(model\/gltf-binary)$/, l = /\.(gltf|glb)/i;
function p(t) {
  if (!t)
    return false;
  if (Array.isArray(t)) {
    return t.some(m);
  }
  return m(t);
}
function m(t) {
  if (t instanceof File) {
    const { type: r, name: e } = t;
    return f.test(r) || l.test(e);
  }
  return f.test(t.assetMimeType) || l.test(t.assetName);
}
function h(t, r) {
  if (!t)
    return false;
  const { source: e } = t;
  return g(e, r);
}
function y(t, r) {
  if (t === r)
    return true;
  const { source: e } = t, { source: s } = r;
  if (e === s)
    return true;
  if (c(e) && c(s)) {
    if (e.length !== s.length)
      return false;
    const t2 = (t3, r3) => t3.assetName < r3.assetName ? -1 : t3.assetName > r3.assetName ? 1 : 0, r2 = [...e].sort(t2), n = [...s].sort(t2);
    for (let e2 = 0; e2 < r2.length; ++e2)
      if (!r2[e2].equals(n[e2]))
        return false;
    return true;
  }
  return false;
}
function g(t, r) {
  if (Array.isArray(t)) {
    const e = t;
    return e.length > 0 && e.every((t2) => b(t2, r));
  }
  return b(t, r);
}
function b(t, r) {
  return t instanceof i && t.isOnService(r);
}
function N(t, r) {
  return t instanceof File ? c$1(t, r) : u$1(t.assetMimeType, r) ?? i$1(t.assetName, r);
}
function A(t) {
  return Array.isArray(t) ? t : [t];
}
function v(t) {
  return !!t.original;
}
export {
  A,
  N,
  h,
  i,
  o,
  u,
  v,
  y
};
