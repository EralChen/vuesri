import { aM as s$1, vI as I$1, ap as M$3, vJ as o, vK as r$1, kF as e$3, bb as s$2, mJ as e$4, l6 as u$3, eQ as n$1, vL as D$2, vM as U$1, g_ as h$3, b1 as s$3, cy as x$3, t5 as Rt, vN as G, g$ as P$2, en as c$3, kc as u$4, bo as e$5, bp as y$5, br as c$4, iD as l$3, bh as V, e3 as v$3, vO as L, fd as c$5, rP as a$2, hI as S$2, vP as h$5, vQ as j$4, vR as R$2, vS as O$1, vT as _, vU as v$4, hy as e$6, eB as e$7, ot as g$3, on as B, oo as p$3, eO as z$1, vV as h$6, vW as N, eP as o$1, vX as U$2, vY as l$4, q0 as g$4, vZ as w$4, hx as O$2, nY as f$3, mL as g$5, iv as m$4, f3 as n$2, hd as p$4, vD as p$5, bJ as d$6, v_ as g$6, bq as j$5, v$ as f$4, w0 as r$2, w1 as t$2, mf as m$5, ll as m$6, c_ as d$7, cZ as f$5, bf as c$6, oP as r$3, qe as s$4, n1 as r$4 } from "./chunk-KFNcxJaF.js";
import { u as u$5, y as y$6, h as h$4, o as o$2, i as i$1 } from "./chunk-_FX4l1J_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let e$2 = class e extends s$1 {
  constructor() {
    super("mesh-not-loaded", "Mesh must be loaded before applying operations");
  }
};
let t$1 = class t extends s$1 {
  constructor() {
    super("component-not-found", "Provided component is not part of the list of components");
  }
};
class n extends s$1 {
  constructor() {
    super("invalid-polygon", "expected polygon to be a Polygon instance");
  }
}
class s extends s$1 {
  constructor() {
    super("invalid-input:location", "Expected location to be a Point instance");
  }
}
class r extends s$1 {
  constructor() {
    super("invalid-input:no-layer", "A layer is needed to convert the files");
  }
}
let c$2 = class c extends s$1 {
  constructor() {
    super("invalid-input:no-model", "No supported model found");
  }
};
let l$2 = class l extends s$1 {
  constructor() {
    super("invalid-input:multiple-models", "Multiple supported models found");
  }
};
function e$1({ xmin: t3, xmax: e3, ymin: i2, ymax: o2, zmin: r2, zmax: x2 }, s2, c3, f2) {
  r2 ??= 0, x2 ??= 0, a$1 ??= new Float64Array(24);
  const l3 = a$1;
  return l3[0] = t3, l3[1] = i2, l3[2] = r2, l3[3] = t3, l3[4] = o2, l3[5] = r2, l3[6] = e3, l3[7] = o2, l3[8] = r2, l3[9] = e3, l3[10] = i2, l3[11] = r2, l3[12] = t3, l3[13] = i2, l3[14] = x2, l3[15] = t3, l3[16] = o2, l3[17] = x2, l3[18] = e3, l3[19] = o2, l3[20] = x2, l3[21] = e3, l3[22] = i2, l3[23] = x2, I$1({ positions: l3, transform: s2, vertexSpace: c3, inSpatialReference: f2, outSpatialReference: f2, outPositions: l3 }), m$3(l3, f2);
}
let a$1 = null;
function m$3(n2, e3) {
  let a2 = 1 / 0, m2 = 1 / 0, i2 = 1 / 0, o2 = -1 / 0, r2 = -1 / 0, x2 = -1 / 0;
  const s2 = n2.length;
  let c3 = 0;
  for (; c3 < s2; ) {
    const t3 = n2[c3++], e4 = n2[c3++], s3 = n2[c3++];
    a2 = Math.min(a2, t3), m2 = Math.min(m2, e4), i2 = Math.min(i2, s3), o2 = Math.max(o2, t3), r2 = Math.max(r2, e4), x2 = Math.max(x2, s3);
  }
  return new M$3({ xmin: a2, ymin: m2, zmin: i2, xmax: o2, ymax: r2, zmax: x2, spatialReference: e3 });
}
const p$2 = "esri.geometry.support.meshUtils.centerAt";
function l$1(e3, t3, i2) {
  if (!e3.vertexAttributes?.position)
    return;
  const { vertexSpace: r2 } = e3, o$12 = i2?.origin ?? e3.origin;
  if (r2.isRelative)
    o(r2, p$2, i2), f$2(e3, t3, o$12);
  else {
    r$1(e3.spatialReference, i2) ? g$2(e3, t3, o$12) : d$5(e3, t3, o$12);
  }
}
function f$2(n2, s2, a2) {
  const { vertexSpace: c3 } = n2;
  if (!c3.isRelative)
    return;
  const l3 = u$2, f2 = j$3;
  if (!e$3(s2, f2, n2.spatialReference))
    return void s$2.getLogger(p$2).error(`Failed to project centerAt location (wkid:${s2.spatialReference.wkid}) to mesh spatial reference (wkid:${n2.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  if (!e$3(a2, l3, n2.spatialReference)) {
    const t3 = n2.origin;
    l3[0] = t3.x, l3[1] = t3.y, l3[2] = t3.z, s$2.getLogger(p$2).error(`Failed to project specified origin (wkid:${a2.spatialReference.wkid}) to mesh spatial reference (wkid:${n2.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  const g2 = e$4(k$2, f2, l3), d2 = c3.origin;
  c3.origin = u$3(n$1(), d2, g2);
}
function g$2(e3, t3, i2) {
  const r2 = D$2(e3.vertexAttributes, i2, { geographic: true }), { position: o2, normal: n2, tangent: s2 } = U$1(r2, t3, { geographic: true });
  e3.vertexAttributes.position = o2, e3.vertexAttributes.normal = n2, e3.vertexAttributes.tangent = s2, e3.vertexAttributesChanged();
}
function d$5(t3, i2, r2) {
  const n2 = u$2, s2 = j$3;
  if (e$3(i2, s2, t3.spatialReference)) {
    if (!e$3(r2, n2, t3.spatialReference)) {
      const i3 = t3.origin;
      n2[0] = i3.x, n2[1] = i3.y, n2[2] = i3.z, s$2.getLogger(p$2).error(`Failed to project specified origin (wkid:${r2.spatialReference.wkid}) to mesh spatial reference (wkid:${t3.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
    }
    m$2(t3.vertexAttributes.position, s2, n2), t3.vertexAttributesChanged();
  } else
    s$2.getLogger(p$2).error(`Failed to project centerAt location (wkid:${i2.spatialReference.wkid}) to mesh spatial reference (wkid:${t3.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
}
function m$2(e3, t3, i2) {
  if (e3)
    for (let r2 = 0; r2 < e3.length; r2 += 3)
      for (let o2 = 0; o2 < 3; o2++)
        e3[r2 + o2] += t3[o2] - i2[o2];
}
const j$3 = n$1(), u$2 = n$1(), k$2 = n$1();
async function c$1(e3, r2, o2) {
  const { source: n2 } = r2, { loadGLTFMesh: i2 } = await h$3(import("./chunk-fBabR9WN.js"), o2), a2 = await m$1(n2, o2);
  s$3(o2);
  const c3 = i2(new x$3({ x: 0, y: 0, z: 0, spatialReference: e3.spatialReference }), a2.url, { resolveFile: u$1(a2), requestFile: void 0, useTransform: true, signal: o2?.signal, expectedType: a2.type });
  c3.then(() => a2.dispose(), () => a2.dispose());
  const { vertexAttributes: f2, components: p2 } = await c3;
  e3.vertexAttributes = f2, e3.components = p2;
}
function u$1(e3) {
  const t3 = Rt(e3.url);
  return (s2) => {
    const r2 = G(s2, t3, t3), o2 = r2 ? r2.replace(/^ *\.\//, "") : null;
    return (o2 ? e3.files.get(o2) : null) ?? s2;
  };
}
async function m$1(t3, s2) {
  if (Array.isArray(t3)) {
    if (!t3.length)
      throw new s$1("mesh-load-external:missing-assets", "There must be at least one file to load");
    return t3[0] instanceof File ? h$2(t3) : w$3(t3, s2);
  }
  return p$1(t3);
}
async function f$1(e3, t3) {
  const { parts: r2, assetMimeType: o2, assetName: n2 } = e3;
  if (1 === r2.length)
    return new T$2(r2[0].partUrl);
  const i2 = await e3.toBlob(t3);
  return s$3(t3), T$2.fromBlob(i2, v$2(n2, o2));
}
function p$1(e3) {
  return T$2.fromBlob(e3, v$2(e3.name, e3.type));
}
function h$2(e3) {
  return j$2(e3.map((e4) => ({ name: e4.name, mimeType: e4.type, source: p$1(e4) })));
}
async function w$3(e3, t3) {
  const i2 = await P$2(e3.map(async (e4) => {
    const r2 = await f$1(e4);
    return s$3(t3), { name: e4.assetName, mimeType: e4.assetMimeType, source: r2 };
  }));
  if (c$3(t3))
    throw i2.forEach((e4) => e4.source.dispose()), u$4();
  return j$2(i2);
}
const y$4 = /^model\/gltf\+json$/, d$4 = /^model\/gltf-binary$/, g$1 = /\.gltf$/i, b$2 = /\.glb$/i;
function j$2(t3) {
  const s2 = /* @__PURE__ */ new Map();
  let r2, o2 = null;
  for (const { name: e3, mimeType: n2, source: i2 } of t3)
    null === o2 && (y$4.test(n2) || g$1.test(e3) ? (o2 = i2.url, r2 = "gltf") : (d$4.test(n2) || b$2.test(e3)) && (o2 = i2.url, r2 = "glb")), s2.set(e3, i2.url), i2.files.forEach((e4, t4) => s2.set(t4, e4));
  if (null == o2)
    throw new s$1("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new T$2(o2, () => t3.forEach(({ source: e3 }) => e3.dispose()), s2, r2);
}
let T$2 = class T {
  constructor(e3, t3 = () => {
  }, s2 = /* @__PURE__ */ new Map(), r2) {
    this.url = e3, this.dispose = t3, this.files = s2, this.type = r2;
  }
  static fromBlob(e3, t3) {
    const s2 = URL.createObjectURL(e3);
    return new T(s2, () => URL.revokeObjectURL(s2), void 0, t3);
  }
};
function v$2(e3, t3) {
  return y$4.test(t3) || g$1.test(e3) ? "gltf" : d$4.test(t3) || g$1.test(e3) ? "glb" : void 0;
}
let a = class extends l$3 {
  constructor() {
    super(), this.externalSources = new V(), this._explicitDisplaySource = null, this.addHandles(v$3(() => this.externalSources, "after-remove", ({ item: e3 }) => {
      e3 === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: true, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e3) {
    if (null != e3 && !u$5(e3))
      throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e3, e3 && this.externalSources.every((r2) => !y$6(r2, e3)) && this.externalSources.add(e3);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e3) {
    return this.externalSources.items.filter((r2) => h$4(r2, e3));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(u$5);
  }
};
e$5([y$5()], a.prototype, "externalSources", void 0), e$5([y$5()], a.prototype, "displaySource", null), e$5([y$5()], a.prototype, "_implicitDisplaySource", null), e$5([y$5()], a.prototype, "_explicitDisplaySource", void 0), a = e$5([c$4("esri.geometry.support.meshUtils.Metadata")], a);
const j$1 = "esri.geometry.support.meshUtils.offset";
function v$1(t3, e3, n2) {
  if (!t3.vertexAttributes?.position)
    return;
  const { vertexSpace: r2 } = t3;
  if (r2.isRelative)
    o(r2, j$1, n2), x$2(r2, e3);
  else {
    r$1(t3.spatialReference, n2) ? A$2(t3, e3) : b$1(t3, e3);
  }
}
function x$2(t3, e3) {
  const n2 = t3.origin;
  t3.origin = u$3(n$1(), n2, e3);
}
function A$2(e3, n2) {
  const r2 = e3.spatialReference, i2 = e3.vertexAttributes.position, a2 = e3.vertexAttributes.normal, u2 = e3.vertexAttributes.tangent, j2 = new Float64Array(i2.length), v2 = null != a2 ? new Float32Array(a2.length) : null, x2 = null != u2 ? new Float32Array(u2.length) : null, A2 = e3.extent.center, b2 = y$3;
  L(r2, [A2.x, A2.y, A2.z], R$1, c$5(r2)), a$2(d$3, R$1), S$2(b2, n2, d$3), h$5(i2, r2, j2), null != a2 && null != v2 && j$4(a2, i2, j2, r2, v2), null != u2 && null != x2 && R$2(u2, i2, j2, r2, x2), k$1(j2, b2), O$1(j2, i2, r2), null != a2 && null != v2 && _(v2, i2, j2, r2, a2), null != u2 && null != x2 && v$4(x2, i2, j2, r2, u2), e3.vertexAttributesChanged();
}
function b$1(t3, e3) {
  k$1(t3.vertexAttributes.position, e3), t3.vertexAttributesChanged();
}
function k$1(t3, e3) {
  if (t3)
    for (let n2 = 0; n2 < t3.length; n2 += 3)
      for (let r2 = 0; r2 < 3; r2++)
        t3[n2 + r2] += e3[r2];
}
const y$3 = n$1(), R$1 = e$6(), d$3 = e$7();
function i() {
  const { faceDescriptions: t3, faceVertexOffsets: e3, uvScales: n2 } = y$2, r2 = 4 * t3.length, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(2 * t3.length * 3);
  let l3 = 0, c3 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 < t3.length; h2++) {
    const r3 = t3[h2], p2 = l3 / 3;
    for (const t4 of e3)
      i2[u2++] = p2 + t4;
    const w2 = r3.corners;
    for (let t4 = 0; t4 < 4; t4++) {
      const e4 = w2[t4];
      let i3 = 0;
      a2[f2++] = 0.25 * n2[t4][0] + r3.uvOrigin[0], a2[f2++] = r3.uvOrigin[1] - 0.25 * n2[t4][1];
      for (let t5 = 0; t5 < 3; t5++)
        0 !== r3.axis[t5] ? (o2[l3++] = 0.5 * r3.axis[t5], s2[c3++] = r3.axis[t5]) : (o2[l3++] = 0.5 * e4[i3++], s2[c3++] = 0);
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function l2(t3, e3) {
  const n2 = t3.components[0], r2 = n2.faces, s2 = d$2[e3], a2 = 6 * s2, i2 = new Array(6), l3 = new Array(r2.length - 6);
  let c3 = 0, f2 = 0;
  for (let o2 = 0; o2 < r2.length; o2++)
    o2 >= a2 && o2 < a2 + 6 ? i2[c3++] = r2[o2] : l3[f2++] = r2[o2];
  if (null != t3.vertexAttributes.uv) {
    const e4 = new Float32Array(t3.vertexAttributes.uv), n3 = 4 * s2 * 2, r3 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let t4 = 0; t4 < r3.length; t4++)
      e4[n3 + t4] = r3[t4];
    t3.vertexAttributes.uv = e4;
  }
  return t3.components = [new g$3({ faces: i2, material: n2.material }), new g$3({ faces: l3 })], t3;
}
function c2(t3 = 0) {
  const e3 = Math.round(8 * 2 ** t3), n2 = 2 * e3, r2 = (e3 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(3 * ((e3 - 1) * n2 * 2));
  let l3 = 0, c3 = 0, f2 = 0, u2 = 0;
  for (let h2 = 0; h2 <= e3; h2++) {
    const t4 = h2 / e3 * Math.PI + 0.5 * Math.PI, r3 = Math.cos(t4), p2 = Math.sin(t4);
    M$2[2] = p2;
    const w2 = 0 === h2 || h2 === e3, m2 = w2 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= m2; v2++) {
      const t5 = v2 / m2 * 2 * Math.PI;
      M$2[0] = -Math.sin(t5) * r3, M$2[1] = Math.cos(t5) * r3;
      for (let e4 = 0; e4 < 3; e4++)
        o2[l3] = 0.5 * M$2[e4], s2[l3] = M$2[e4], ++l3;
      a2[c3++] = (v2 + (w2 ? 0.5 : 0)) / n2, a2[c3++] = h2 / e3, 0 !== h2 && v2 !== n2 && (h2 !== e3 && (i2[f2++] = u2, i2[f2++] = u2 + 1, i2[f2++] = u2 - n2), 1 !== h2 && (i2[f2++] = u2, i2[f2++] = u2 - n2, i2[f2++] = u2 - n2 - 1)), u2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function f(t3 = 0) {
  const e3 = 5, n2 = Math.round(16 * 2 ** t3), r2 = (e3 - 1) * (n2 + 1) + 2 * n2, o2 = new Float64Array(3 * r2), s2 = new Float32Array(3 * r2), a2 = new Float32Array(2 * r2), i2 = new Uint32Array(3 * (4 * n2));
  let l3 = 0, c3 = 0, f2 = 0, u2 = 0, h2 = 0;
  for (let p2 = 0; p2 <= e3; p2++) {
    const t4 = 0 === p2 || p2 === e3, r3 = p2 <= 1 || p2 >= e3 - 1, w2 = 2 === p2 || 4 === p2, m2 = t4 ? n2 - 1 : n2;
    for (let v2 = 0; v2 <= m2; v2++) {
      const g2 = v2 / m2 * 2 * Math.PI, A2 = t4 ? 0 : 0.5;
      M$2[0] = A2 * Math.sin(g2), M$2[1] = A2 * -Math.cos(g2), M$2[2] = p2 <= 2 ? 0.5 : -0.5;
      for (let t5 = 0; t5 < 3; t5++)
        o2[l3++] = M$2[t5], s2[c3++] = r3 ? 2 === t5 ? p2 <= 1 ? 1 : -1 : 0 : 2 === t5 ? 0 : M$2[t5] / A2;
      a2[f2++] = (v2 + (t4 ? 0.5 : 0)) / n2, a2[f2++] = p2 <= 1 ? 1 * p2 / 3 : p2 <= 3 ? 1 * (p2 - 2) / 3 + 1 / 3 : 1 * (p2 - 4) / 3 + 2 / 3, w2 || 0 === p2 || v2 === n2 || (p2 !== e3 && (i2[u2++] = h2, i2[u2++] = h2 + 1, i2[u2++] = h2 - n2), 1 !== p2 && (i2[u2++] = h2, i2[u2++] = h2 - n2, i2[u2++] = h2 - n2 - 1)), h2++;
    }
  }
  return { position: o2, normal: s2, uv: a2, faces: i2 };
}
function u(t3, e3) {
  const n2 = "number" == typeof e3 ? e3 : null != e3 ? e3.width : 1, r2 = "number" == typeof e3 ? e3 : null != e3 ? e3.height : 1;
  switch (t3) {
    case "up":
    case "down":
      return { width: n2, depth: r2 };
    case "north":
    case "south":
      return { width: n2, height: r2 };
    case "east":
    case "west":
      return { depth: n2, height: r2 };
  }
}
function h$1(t3) {
  const e3 = v.facingAxisOrderSwap[t3], n2 = v.position, r2 = v.normal, o2 = new Float64Array(n2.length), s2 = new Float32Array(r2.length);
  let a2 = 0;
  for (let i2 = 0; i2 < 4; i2++) {
    const t4 = a2;
    for (let i3 = 0; i3 < 3; i3++) {
      const l3 = e3[i3], c3 = Math.abs(l3) - 1, f2 = l3 >= 0 ? 1 : -1;
      o2[a2] = n2[t4 + c3] * f2, s2[a2] = r2[t4 + c3] * f2, a2++;
    }
  }
  return { position: o2, normal: s2, uv: new Float32Array(v.uv), faces: new Uint32Array(v.faces), isPlane: true };
}
const p = 1, w$2 = 2, m = 3, v = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [m, p, w$2], west: [-m, -p, w$2], north: [-p, m, w$2], south: [p, -m, w$2], up: [p, w$2, m], down: [p, -w$2, -m] } };
function g(t3, e3, n2) {
  t3.isPlane || A$1(t3), x$1(t3, n2?.size);
  const { vertexAttributes: r2, vertexSpace: i2, transform: l3 } = B(t3, e3, n2);
  return { vertexAttributes: new p$3({ ...r2, uv: t3.uv }), vertexSpace: i2, transform: l3, components: [new g$3({ faces: t3.faces, material: n2?.material || null })], spatialReference: e3.spatialReference };
}
function A$1(t3) {
  for (let e3 = 0; e3 < t3.position.length; e3 += 3)
    t3.position[e3 + 2] += 0.5;
}
function x$1(t3, r2) {
  if (null == r2)
    return;
  const o2 = "number" == typeof r2 ? [r2, r2, r2] : [null != r2.width ? r2.width : 1, null != r2.depth ? r2.depth : 1, null != r2.height ? r2.height : 1];
  F$1[0] = o2[0], F$1[4] = o2[1], F$1[8] = o2[2];
  for (let n2 = 0; n2 < t3.position.length; n2 += 3) {
    for (let e3 = 0; e3 < 3; e3++)
      M$2[e3] = t3.position[n2 + e3];
    S$2(M$2, M$2, F$1);
    for (let e3 = 0; e3 < 3; e3++)
      t3.position[n2 + e3] = M$2[e3];
  }
  if (o2[0] !== o2[1] || o2[1] !== o2[2]) {
    F$1[0] = 1 / o2[0], F$1[4] = 1 / o2[1], F$1[8] = 1 / o2[2];
    for (let r3 = 0; r3 < t3.normal.length; r3 += 3) {
      for (let e3 = 0; e3 < 3; e3++)
        M$2[e3] = t3.normal[r3 + e3];
      S$2(M$2, M$2, F$1), z$1(M$2, M$2);
      for (let e3 = 0; e3 < 3; e3++)
        t3.normal[r3 + e3] = M$2[e3];
    }
  }
}
const y$2 = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, d$2 = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, M$2 = n$1(), F$1 = e$7();
const T$1 = "esri.geometry.support.meshUtils.rotate";
function U(t3, e3, r2) {
  if (!t3.vertexAttributes?.position || 0 === e3[3])
    return;
  const { spatialReference: o$12, vertexSpace: n2 } = t3;
  if (n2.isRelative) {
    o(n2, T$1, r2);
    const o$13 = r2?.origin ?? t3.origin;
    t3.transform ??= new N(), z(t3.transform, n2, e3, o$13);
  } else {
    const n3 = r2?.origin ?? t3.origin;
    r$1(o$12, r2) ? C(t3, e3, n3) : I(t3, e3, n3);
  }
}
function z(t3, e3, r2, o2) {
  const n2 = e3.origin, l3 = o$1($$1, o2.x, o2.y, o2.z ?? 0), c3 = e$4($$1, l3, n2);
  t3.applyLocalInverse(c3, D$1), t3.rotation = U$2(t3.rotation, r2, h$6()), t3.applyLocalInverse(c3, c3), e$4(c3, c3, D$1), t3.translation = u$3(n$1(), t3.translation, c3);
}
function C(t3, r2, o2) {
  const n2 = t3.spatialReference, i2 = c$5(n2), s2 = S;
  e$3(o2, s2, i2) || e$3(t3.origin, s2, i2);
  const a2 = t3.vertexAttributes.position, c3 = t3.vertexAttributes.normal, f2 = t3.vertexAttributes.tangent, p2 = new Float64Array(a2.length), j2 = null != c3 ? new Float32Array(c3.length) : null, h2 = null != f2 ? new Float32Array(f2.length) : null;
  L(i2, s2, M$1, i2), a$2(O, M$1);
  const x2 = E$1;
  S$2(l$4(E$1), l$4(r2), O), x2[3] = r2[3], h$5(a2, n2, p2), null != c3 && null != j2 && j$4(c3, a2, p2, n2, j2), null != f2 && null != h2 && R$2(f2, a2, p2, n2, h2), P$1(p2, x2, 3, s2), O$1(p2, a2, n2), null != c3 && null != j2 && (P$1(j2, x2, 3), _(j2, a2, p2, n2, c3)), null != f2 && null != h2 && (P$1(h2, x2, 4), v$4(h2, a2, p2, n2, f2)), t3.vertexAttributesChanged();
}
function I(e3, r2, o2) {
  const n2 = S;
  if (!e$3(o2, n2, e3.spatialReference)) {
    const r3 = e3.origin;
    n2[0] = r3.x, n2[1] = r3.y, n2[2] = r3.z, s$2.getLogger(T$1).error(`Failed to project specified origin (wkid:${o2.spatialReference.wkid}) to mesh spatial reference (wkid:${e3.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  P$1(e3.vertexAttributes.position, r2, 3, n2), P$1(e3.vertexAttributes.normal, r2, 3), P$1(e3.vertexAttributes.tangent, r2, 4), e3.vertexAttributesChanged();
}
function P$1(t3, e3, r2, n2 = f$3) {
  if (null != t3) {
    g$4(M$1, w$4(e3), l$4(e3));
    for (let e4 = 0; e4 < t3.length; e4 += r2) {
      for (let r3 = 0; r3 < 3; r3++)
        $$1[r3] = t3[e4 + r3] - n2[r3];
      O$2($$1, $$1, M$1);
      for (let r3 = 0; r3 < 3; r3++)
        t3[e4 + r3] = $$1[r3] + n2[r3];
    }
  }
}
const $$1 = n$1(), D$1 = n$1(), E$1 = h$6(), M$1 = e$6(), O = e$7(), S = n$1();
const x = "esri.geometry.support.meshUtils.scale";
function d$1(e3, t3, r2) {
  if (!e3.vertexAttributes?.position)
    return;
  const { spatialReference: o$12, vertexSpace: n2 } = e3;
  if (n2.isRelative) {
    o(n2, x, r2);
    const o$13 = r2?.origin ?? e3.origin;
    e3.transform ??= new N(), A(e3.transform, n2, t3, o$13);
  } else {
    const n3 = r$1(o$12, r2), i2 = r2?.origin ?? e3.origin;
    n3 ? b(e3, t3, i2) : y$1(e3, t3, i2);
  }
}
function A(e3, s2, l3, a2) {
  const c3 = s2.origin, p2 = o$1(R, a2.x, a2.y, a2.z), f2 = e$4(R, p2, c3);
  e3.applyLocalInverse(f2, k);
  const u2 = g$5(n$1(), e3.scale, l3);
  e3.scale = u2, e3.applyLocalInverse(f2, f2), e$4(f2, f2, k), e3.translation = u$3(n$1(), e3.translation, f2);
}
function b(e3, t3, r2) {
  const o2 = e3.spatialReference, n2 = c$5(o2), i2 = F;
  e$3(r2, i2, n2) || e$3(e3.origin, i2, n2);
  const s2 = e3.vertexAttributes.position, c3 = e3.vertexAttributes.normal, p2 = e3.vertexAttributes.tangent, f2 = new Float64Array(s2.length), x2 = null != c3 ? new Float32Array(c3.length) : null, d2 = null != p2 ? new Float32Array(p2.length) : null;
  h$5(s2, o2, f2), null != c3 && null != x2 && j$4(c3, s2, f2, o2, x2), null != p2 && null != d2 && R$2(p2, s2, f2, o2, d2), w$1(f2, t3, i2), O$1(f2, s2, o2), null != c3 && null != x2 && _(x2, s2, f2, o2, c3), null != p2 && null != d2 && v$4(d2, s2, f2, o2, p2), e3.vertexAttributesChanged();
}
function y$1(t3, r2, o2) {
  const n2 = F;
  if (!e$3(o2, n2, t3.spatialReference)) {
    const r3 = t3.origin;
    n2[0] = r3.x, n2[1] = r3.y, n2[2] = r3.z, s$2.getLogger(x).error(`Failed to project specified origin (wkid:${o2.spatialReference.wkid}) to mesh spatial reference (wkid:${t3.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  w$1(t3.vertexAttributes.position, r2, n2), t3.vertexAttributesChanged();
}
function w$1(e3, t3, r2 = f$3) {
  if (e3)
    for (let n2 = 0; n2 < e3.length; n2 += 3) {
      for (let t4 = 0; t4 < 3; t4++)
        R[t4] = e3[n2 + t4] - r2[t4];
      g$5(R, R, t3);
      for (let t4 = 0; t4 < 3; t4++)
        e3[n2 + t4] = R[t4] + r2[t4];
    }
}
const R = n$1(), k = n$1(), F = n$1();
async function e2(e3) {
  const r2 = [];
  for (const n2 of e3)
    n2.name.toLowerCase().endsWith(".zip") ? r2.push(t2(n2)) : r2.push(Promise.resolve(n2));
  return (await Promise.all(r2)).flat();
}
async function t2(e3) {
  const { BlobReader: t3, ZipReader: r2, BlobWriter: n2 } = await import("./chunk-9vKqvxWs.js"), a2 = [], i2 = new r2(new t3(e3));
  return (await i2.getEntries()).forEach((e4) => {
    if (e4.directory || /^__MACOS/i.test(e4.filename))
      return;
    const t4 = new n2(), r3 = e4.getData?.(t4).then((t5) => new File([t5], e4.filename));
    r3 && a2.push(r3);
  }), Promise.all(a2);
}
var J;
const Q = "esri.geometry.Mesh", X = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: p$5, "georeferenced-relative": m$6, local: m$5 } };
let Y = J = class extends m$4.LoadableMixin(n$2(p$4)) {
  constructor(e3) {
    super(e3), this.components = null, this.vertexSpace = new p$5(), this.transform = null, this.metadata = new a(), this.hasZ = true, this.hasM = false, this.vertexAttributes = new p$3(), this.type = "mesh";
  }
  initialize() {
    (0 === this.metadata.externalSources.length || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(d$6(() => ({ vertexAttributes: this.vertexAttributes, components: this.components?.map((e3) => e3.clone()) }), () => this._clearSources(), { once: true, sync: true }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : null != this.metadata.displaySource?.extent;
  }
  get _transformedExtent() {
    const { components: e3, spatialReference: t3, vertexAttributes: r2, vertexSpace: s2 } = this, o2 = r2.position;
    if (0 === o2.length || e3 && 0 === e3.length)
      return new M$3({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t3 });
    if ("local" === s2.type) {
      const { _untransformedExtent: e4, transform: r3 } = this;
      return e$1(e4, r3, s2, t3);
    }
    if ("georeferenced-relative" === s2.type) {
      const { transform: e4 } = this, r3 = I$1({ positions: o2, transform: e4, vertexSpace: s2, inSpatialReference: t3, outSpatialReference: t3 });
      return m$3(r3, t3);
    }
    return m$3(o2, t3);
  }
  get _untransformedExtent() {
    return m$3(this.vertexAttributes.position, this.spatialReference);
  }
  get anchor() {
    const { vertexSpace: e3 } = this;
    if (e3.isRelative)
      return e3.getOriginPoint(this.spatialReference);
    const { center: t3, zmin: r2 } = this._transformedExtent;
    return new x$3({ x: t3.x, y: t3.y, z: r2, spatialReference: this.spatialReference });
  }
  get origin() {
    const { vertexSpace: e3 } = this;
    return e3.isRelative ? e3.getOriginPoint(this.spatialReference) : this._transformedExtent.center;
  }
  get extent() {
    return this.loaded || null == this.metadata?.displaySource?.extent ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e3) {
    if (!this.loaded)
      return s$2.getLogger(this).error("addComponent()", new e$2().message);
    this.components || (this.components = []), this.components.push(g$3.from(e3)), this.notifyChange("components");
  }
  removeComponent(e3) {
    if (!this.loaded)
      return s$2.getLogger(this).error("removeComponent()", new e$2().message);
    if (this.components) {
      const t3 = this.components.indexOf(e3);
      if (-1 !== t3)
        return this.components.splice(t3, 1), void this.notifyChange("components");
    }
    s$2.getLogger(this).error("removeComponent()", new t$1().message);
  }
  rotate(e3, t3, r2, s2) {
    return g$6(e3, t3, r2, ee), U(this, ee, s2), this;
  }
  offset(e3, t3, r2, o2) {
    return this.loaded ? ($[0] = e3, $[1] = t3, $[2] = r2, v$1(this, $, o2), this) : (s$2.getLogger(this).error("offset()", new e$2().message), this);
  }
  scale(e3, t3) {
    return this.loaded ? (d$1(this, e3, t3), this) : (s$2.getLogger(this).error("scale()", new e$2().message), this);
  }
  centerAt(e3, t3) {
    return this.loaded ? (l$1(this, e3, t3), this) : (s$2.getLogger(this).error("centerAt()", new e$2().message), this);
  }
  load(e3) {
    const { metadata: { displaySource: t3 } } = this;
    return t3 && this.addResolvingPromise(c$1(this, t3, e3)), Promise.resolve(this);
  }
  addExternalSources(e3) {
    this.metadata.externalSources.addMany(e3);
  }
  updateDisplaySource(e3) {
    this.metadata.displaySource = e3;
  }
  clone() {
    return this.cloneWithVertexSpace(this.vertexSpace.clone());
  }
  cloneWithVertexSpace(e3) {
    let t3 = null;
    if (this.components) {
      const e4 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Map();
      t3 = this.components.map((t4) => t4.cloneWithDeduplication(e4, r3));
    }
    const r2 = { components: t3, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), vertexSpace: e3, transform: this.transform?.clone() ?? null, metadata: this.metadata.clone() };
    return new J(r2);
  }
  cloneShallow() {
    return new J({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e3) {
    const t3 = import("./chunk-SPD1z7F4.js"), r2 = this.load(), s2 = await Promise.all([t3, r2]), { toBinaryGLTF: o2 } = s2[0];
    return o2(this, e3);
  }
  get memoryUsage() {
    let e3 = 0;
    if (e3 += this.vertexAttributes.memoryUsage, null != this.components)
      for (const t3 of this.components)
        e3 += t3.memoryUsage;
    return e3;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  static createBox(e3, t3) {
    if (!(e3 instanceof x$3))
      return s$2.getLogger(Q).error(".createBox()", new s().message), null;
    const r2 = new J(g(i(), e3, t3));
    return t3?.imageFace && "all" !== t3.imageFace ? l2(r2, t3.imageFace) : r2;
  }
  static createSphere(e3, t3) {
    return e3 instanceof x$3 ? new J(g(c2(t3?.densificationFactor || 0), e3, t3)) : (s$2.getLogger(Q).error(".createSphere()", new s().message), null);
  }
  static createCylinder(e3, t3) {
    return e3 instanceof x$3 ? new J(g(f(t3?.densificationFactor || 0), e3, t3)) : (s$2.getLogger(Q).error(".createCylinder()", new s().message), null);
  }
  static createPlane(e3, t3) {
    if (!(e3 instanceof x$3))
      return s$2.getLogger(Q).error(".createPlane()", new s().message), null;
    const r2 = t3?.facing ?? "up", o2 = u(r2, t3?.size);
    return new J(g(h$1(r2), e3, { ...t3, size: o2 }));
  }
  static createFromPolygon(e3, t3) {
    if (!(e3 instanceof j$5))
      return s$2.getLogger(Q).error(".createFromPolygon()", new n().message), null;
    const r2 = f$4(e3);
    return new J({ vertexAttributes: new p$3({ position: r2.position }), components: [new g$3({ faces: r2.faces, shading: "flat", material: t3?.material ?? null })], spatialReference: e3.spatialReference, vertexSpace: new p$5() });
  }
  static async createFromGLTF(e3, t3, r2) {
    if (!(e3 instanceof x$3)) {
      const e4 = new s();
      throw s$2.getLogger(Q).error(".createfromGLTF()", e4.message), e4;
    }
    const { loadGLTFMesh: o2 } = await h$3(import("./chunk-fBabR9WN.js"), r2);
    return new J(await o2(e3, t3, r2));
  }
  static async createFromFiles(e3, t3, r$12) {
    const o2 = (e4) => s$2.getLogger(Q).error(".createFromFiles()", e4.message);
    if (!(e3 instanceof x$3)) {
      const e4 = new s();
      throw o2(e4), e4;
    }
    const n2 = r$12?.layer;
    if (!n2) {
      const e4 = new r();
      throw o2(e4), e4;
    }
    const i2 = await J.extractAndFilterFiles(t3, n2), a2 = i2.reduce((e4, t4) => r$2(n2.infoFor3D, t4) ? e4 + 1 : e4, 0);
    if (0 === a2) {
      const e4 = new c$2();
      throw o2(e4), e4;
    }
    if (a2 > 1) {
      const e4 = new l$2();
      throw o2(e4), e4;
    }
    const c3 = J.createWithExternalSource(e3, i2), [p2] = await n2.uploadAssets([c3], r$12);
    return p2;
  }
  static async extractAndFilterFiles(e$12, t3) {
    const r2 = t3?.infoFor3D;
    if (!r2)
      return e$12;
    return (await e2(e$12)).filter((e3) => t$2(r2, e3));
  }
  static createWithExternalSource(e3, t3, r2) {
    const s2 = r2?.extent ?? null, { x: o2, y: n2, z: i2, spatialReference: a$12 } = e3, c3 = r2?.transform?.clone() ?? new N(), p2 = r2?.vertexSpace ?? new m$5({ origin: [o2, n2, i2 ?? 0] }), m2 = { source: t3, extent: s2 }, l3 = new a();
    return l3.externalSources.push(m2), new J({ metadata: l3, transform: c3, vertexSpace: p2, spatialReference: a$12 });
  }
  static createIncomplete(e3, r2) {
    const { x: s2, y: o2, z: n2, spatialReference: i2 } = e3, a2 = r2?.transform?.clone() ?? new N(), c3 = r2?.vertexSpace ?? new m$5({ origin: [s2, o2, n2 ?? 0] }), p2 = new J({ transform: a2, vertexSpace: c3, spatialReference: i2 });
    return p2.addResolvingPromise(Promise.reject(new s$1("mesh-incomplete", "Mesh resources are not complete"))), p2;
  }
};
e$5([y$5({ type: [g$3], json: { write: true } })], Y.prototype, "components", void 0), e$5([y$5({ nonNullable: true, types: X, constructOnly: true, json: { write: true } })], Y.prototype, "vertexSpace", void 0), e$5([y$5({ type: N, json: { write: true } })], Y.prototype, "transform", void 0), e$5([y$5({ constructOnly: true })], Y.prototype, "metadata", void 0), e$5([y$5()], Y.prototype, "hasExtent", null), e$5([y$5()], Y.prototype, "_transformedExtent", null), e$5([y$5()], Y.prototype, "_untransformedExtent", null), e$5([y$5()], Y.prototype, "anchor", null), e$5([y$5()], Y.prototype, "origin", null), e$5([y$5({ readOnly: true, json: { read: false } })], Y.prototype, "extent", null), e$5([y$5({ readOnly: true, json: { read: false, write: true, default: true } })], Y.prototype, "hasZ", void 0), e$5([y$5({ readOnly: true, json: { read: false, write: true, default: false } })], Y.prototype, "hasM", void 0), e$5([y$5({ type: p$3, nonNullable: true, json: { write: true } })], Y.prototype, "vertexAttributes", void 0), Y = J = e$5([c$4(Q)], Y);
const $ = n$1(), ee = h$6(), te = Y;
const h = () => s$2.getLogger("esri.rest.support.meshFeatureSet");
function y(t3, r2, o2) {
  const n2 = o2.features;
  o2.features = [], delete o2.geometryType;
  const s2 = d$7.fromJSON(o2);
  if (s2.geometryType = "mesh", !o2.assetMaps)
    return s2;
  const i2 = M(r2, o2.assetMaps), u2 = t3.sourceSpatialReference ?? f$5.WGS84, c3 = o2.globalIdFieldName, { outFields: f2 } = t3, m2 = null != f2 && f2.length > 0 ? E(f2.includes("*") ? null : new Set(f2)) : () => ({});
  for (const a2 of n2) {
    const t4 = S$1(a2, c3, u2, r2, i2);
    null != t4 && s2.features.push(new c$6({ geometry: t4, attributes: m2(a2) }));
  }
  return s2;
}
function E(e3) {
  return ({ attributes: t3 }) => {
    if (!t3)
      return {};
    if (!e3)
      return t3;
    for (const r2 in t3)
      e3.has(r2) || delete t3[r2];
    return t3;
  };
}
function S$1(e3, t3, r2, o2, i2) {
  const a2 = e3.attributes[t3], f2 = i2.get(a2);
  if (null == f2)
    return h().error("mesh-feature-set:asset-not-found", "Service returned a feature which was not found in the asset map", e3), null;
  if (!e3.geometry)
    return h().error("mesh-feature-set:no-geometry", "Service returned a feature without geometry", e3), null;
  const { originPoint: m2, originVector: p2 } = d(e3, r2, o2), l3 = M$3.fromJSON(e3.geometry);
  l3.spatialReference = r2;
  const g2 = j(e3.attributes, o2), y2 = f2.projectVertices ? new m$6({ origin: p2 }) : new m$5({ origin: p2 }), E2 = T2(f2);
  return E2 ? te.createWithExternalSource(m2, E2, { extent: l3, transform: g2, vertexSpace: y2 }) : te.createIncomplete(m2, { extent: l3, transform: g2, vertexSpace: y2 });
}
function d({ attributes: e3 }, t3, { transformFieldRoles: r2 }) {
  const n2 = e3[r2.originX], s2 = e3[r2.originY], a2 = e3[r2.originZ];
  return { originPoint: new x$3({ x: n2, y: s2, z: a2, spatialReference: t3 }), originVector: r$3(n2, s2, a2) };
}
function j(e3, { transformFieldRoles: t3 }) {
  return new N({ translation: [e3[t3.translationX], -e3[t3.translationZ], e3[t3.translationY]], rotationAxis: [e3[t3.rotationX], -e3[t3.rotationZ], e3[t3.rotationY]], rotationAngle: e3[t3.rotationDeg], scale: [e3[t3.scaleX], e3[t3.scaleZ], e3[t3.scaleY]] });
}
var w;
function M(e3, t3) {
  const o2 = /* @__PURE__ */ new Map();
  for (const n2 of t3) {
    const t4 = n2.parentGlobalId;
    if (null == t4)
      continue;
    const s2 = n2.assetName, i2 = n2.assetType, a2 = n2.assetHash, u2 = n2.assetURL, c3 = n2.conversionStatus, f2 = n2.seqNo, m2 = s$4(i2, e3.supportedFormats);
    if (!m2) {
      h().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${i2}, but it does not list it as a supported type`);
      continue;
    }
    const p2 = r$4(o2, t4, () => ({ projectVertices: P(n2.flags).projectVertices, files: /* @__PURE__ */ new Map() }));
    r$4(p2.files, s2, () => ({ name: s2, type: i2, mimeType: m2, status: D(c3), parts: [] })).parts[f2] = { hash: a2, url: u2 };
  }
  return o2;
}
function T2(e3) {
  const t3 = Array.from(e3.files.values()), r2 = new Array();
  for (const o2 of t3) {
    if (o2.status !== w.COMPLETED)
      return null;
    const e4 = new Array();
    for (const t4 of o2.parts) {
      if (!t4)
        return null;
      e4.push(new o$2(t4.url, t4.hash));
    }
    r2.push(new i$1(o2.name, o2.mimeType, e4));
  }
  return r2;
}
function D(e3) {
  switch (e3) {
    case "COMPLETED":
    case "SUBMITTED":
      return w.COMPLETED;
    case "INPROGRESS":
      return w.PENDING;
    default:
      return w.FAILED;
  }
}
function P(e3) {
  return { projectVertices: e3.includes("PROJECT_VERTICES") };
}
!function(e3) {
  e3[e3.FAILED = 0] = "FAILED", e3[e3.PENDING = 1] = "PENDING", e3[e3.COMPLETED = 2] = "COMPLETED";
}(w || (w = {}));
export {
  M as assetMapFromAssetMapsJSON,
  S$1 as extractMesh,
  y as meshFeatureSetFromJSON
};
