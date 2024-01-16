import { i6 as a, cZ as f$1, ll as m$1, mf as m$2, mg as y$1, mh as n$2, mi as s } from "./chunk-KFNcxJaF.js";
import { n as n$3 } from "./chunk-YQ5VkQy2.js";
var n$1, e$1;
!function(n2) {
  n2[n2.None = 0] = "None", n2[n2.Int16 = 1] = "Int16", n2[n2.Int32 = 2] = "Int32";
}(n$1 || (n$1 = {})), function(n2) {
  n2[n2.Replace = 0] = "Replace", n2[n2.Outside = 1] = "Outside", n2[n2.Inside = 2] = "Inside", n2[n2.Finished = 3] = "Finished";
}(e$1 || (e$1 = {}));
function e() {
  return n || (n = new Promise((t) => import("./chunk-6_Cz8Q5i.js").then((t2) => t2.i).then(({ default: e2 }) => {
    const n2 = e2({ locateFile: i, onRuntimeInitialized: () => t(n2) });
    delete n2.then;
  })).catch((t) => {
    throw t;
  })), n;
}
function i(e2) {
  return a(`esri/libs/i3s/${e2}`);
}
let n;
async function l(e2) {
  g = await j();
  const r = [e2.geometryBuffer];
  return { result: w(g, e2, r), transferList: r };
}
async function c(e2) {
  g = await j();
  const r = [e2.geometryBuffer], { geometryBuffer: t } = e2, o = t.byteLength, n2 = g._malloc(o), s2 = new Uint8Array(g.HEAPU8.buffer, n2, o);
  s2.set(new Uint8Array(t));
  const i2 = g.dracoDecompressPointCloudData(n2, s2.byteLength);
  if (g._free(n2), i2.error.length > 0)
    throw new Error(`i3s.wasm: ${i2.error}`);
  const a2 = i2.featureIds?.length > 0 ? i2.featureIds.slice() : null, f = i2.positions.slice();
  return a2 && r.push(a2.buffer), r.push(f.buffer), { result: { positions: f, featureIds: a2 }, transferList: r };
}
async function u(e2) {
  await j(), L(e2);
  const r = { buffer: e2.buffer };
  return { result: r, transferList: [r.buffer] };
}
async function m(e2) {
  await j(), E(e2);
}
async function y(e2) {
  g = await j(), g.setLegacySchema(e2.context, e2.jsonSchema);
}
async function p(n2) {
  const { localMatrix: s2, origin: i2, positions: a2, vertexSpace: f, localMode: l2 } = n2, c2 = f$1.fromJSON(n2.inSpatialReference), u2 = f$1.fromJSON(n2.outSpatialReference);
  let m2;
  if ("georeferenced" === f.type) {
    const [{ projectBuffer: e2 }, { initializeProjection: r }] = await Promise.all([import("./chunk-KFNcxJaF.js").then((n3) => n3.E0), import("./chunk-KFNcxJaF.js").then((n3) => n3.E1)]);
    await r(c2, u2), m2 = new Float64Array(a2.length), e2(a2, c2, 0, m2, u2, 0, m2.length / 3);
  } else {
    const e2 = "georeferencedRelative" === f.type ? m$1.fromJSON(f) : m$2.fromJSON(f), { project: n3 } = await import("./chunk-KFNcxJaF.js").then((n4) => n4.E4);
    m2 = y$1(n3({ positions: a2, transform: s2 ? { localMatrix: s2 } : void 0, vertexSpace: e2, inSpatialReference: c2, outSpatialReference: u2, localMode: l2 }));
  }
  const y2 = m2.length, [p2, d2, b2] = i2;
  for (let e2 = 0; e2 < y2; e2 += 3)
    m2[e2] -= p2, m2[e2 + 1] -= d2, m2[e2 + 2] -= b2;
  return { result: { projected: m2, original: a2 }, transferList: [m2.buffer, a2.buffer] };
}
async function d({ normalMatrix: e2, normals: r }) {
  const t = new Float32Array(r.length);
  return n$2(t, r, e2), s(t, t), { result: { transformed: t, original: r }, transferList: [t.buffer, r.buffer] };
}
function b(e2) {
  S(e2);
}
let h, g;
function E(e2) {
  if (!g)
    return;
  const r = e2.modifications, t = g._malloc(8 * r.length), o = new Float64Array(g.HEAPU8.buffer, t, r.length);
  for (let n2 = 0; n2 < r.length; ++n2)
    o[n2] = r[n2];
  g.setModifications(e2.context, t, r.length, e2.isGeodetic), g._free(t);
}
function w(e2, r, t) {
  const { context: o, localOrigin: n2, globalTrafo: s2, mbs: a2, obb: f, elevationOffset: l2, geometryBuffer: c2, geometryDescriptor: u2, indexToVertexProjector: m2, vertexToRenderProjector: y2 } = r, p2 = e2._malloc(c2.byteLength), d2 = 33, b2 = e2._malloc(d2 * Float64Array.BYTES_PER_ELEMENT), h2 = new Uint8Array(e2.HEAPU8.buffer, p2, c2.byteLength);
  h2.set(new Uint8Array(c2));
  const g2 = new Float64Array(e2.HEAPU8.buffer, b2, d2);
  _(g2, n2);
  let E2 = g2.byteOffset + 3 * g2.BYTES_PER_ELEMENT, w2 = new Float64Array(g2.buffer, E2);
  _(w2, s2), E2 += 16 * g2.BYTES_PER_ELEMENT, w2 = new Float64Array(g2.buffer, E2), _(w2, a2), E2 += 4 * g2.BYTES_PER_ELEMENT, null != f && (w2 = new Float64Array(g2.buffer, E2), _(w2, f.center), E2 += 3 * g2.BYTES_PER_ELEMENT, w2 = new Float64Array(g2.buffer, E2), _(w2, f.halfSize), E2 += 3 * g2.BYTES_PER_ELEMENT, w2 = new Float64Array(g2.buffer, E2), _(w2, f.quaternion));
  const A2 = u2, L2 = { isDraco: false, isLegacy: false, color: r.layouts.some((e3) => e3.some((e4) => "color" === e4.name)), normal: r.needNormals && r.layouts.some((e3) => e3.some((e4) => "normalCompressed" === e4.name)), uv0: r.layouts.some((e3) => e3.some((e4) => "uv0" === e4.name)), uvRegion: r.layouts.some((e3) => e3.some((e4) => "uvRegion" === e4.name)), featureIndex: A2.featureIndex }, S2 = e2.process(o, !!r.obb, p2, h2.byteLength, A2, L2, b2, l2, m2, y2, r.normalReferenceFrame);
  if (e2._free(b2), e2._free(p2), S2.error.length > 0)
    throw new Error(`i3s.wasm: ${S2.error}`);
  if (S2.discarded)
    return null;
  const I2 = S2.componentOffsets.length > 0 ? S2.componentOffsets.slice() : null, j2 = S2.featureIds.length > 0 ? S2.featureIds.slice() : null, M2 = S2.anchorIds.length > 0 ? Array.from(S2.anchorIds) : null, P = S2.anchors.length > 0 ? Array.from(S2.anchors) : null, T = S2.interleavedVertedData.slice().buffer, x = S2.indicesType === n$1.Int16 ? new Uint16Array(S2.indices.buffer, S2.indices.byteOffset, S2.indices.byteLength / 2).slice() : new Uint32Array(S2.indices.buffer, S2.indices.byteOffset, S2.indices.byteLength / 4).slice(), R = S2.positions.slice(), U = S2.positionIndicesType === n$1.Int16 ? new Uint16Array(S2.positionIndices.buffer, S2.positionIndices.byteOffset, S2.positionIndices.byteLength / 2).slice() : new Uint32Array(S2.positionIndices.buffer, S2.positionIndices.byteOffset, S2.positionIndices.byteLength / 4).slice(), v = { layout: r.layouts[0], interleavedVertexData: T, indices: x, hasColors: S2.hasColors, hasModifications: S2.hasModifications, positionData: { data: R, indices: U } };
  return j2 && t.push(j2.buffer), I2 && t.push(I2.buffer), t.push(T), t.push(x.buffer), t.push(R.buffer), t.push(U.buffer), { componentOffsets: I2, featureIds: j2, anchorIds: M2, anchors: P, transformedGeometry: v, obb: S2.obb };
}
function A(e2) {
  return 0 === e2 ? n$3.Unmodified : 1 === e2 ? n$3.PotentiallyModified : 2 === e2 ? n$3.Culled : n$3.Unknown;
}
function L(e2) {
  if (!g)
    return;
  const { context: r, buffer: t } = e2, o = g._malloc(t.byteLength), n2 = t.byteLength / Float64Array.BYTES_PER_ELEMENT, s2 = new Float64Array(g.HEAPU8.buffer, o, n2), i2 = new Float64Array(t);
  s2.set(i2), g.filterOBBs(r, o, n2), i2.set(s2), g._free(o);
}
function S(e2) {
  g && 0 === g.destroy(e2) && (g = null);
}
function _(e2, r) {
  for (let t = 0; t < r.length; ++t)
    e2[t] = r[t];
}
async function I() {
  g || await j();
}
function j() {
  return g ? Promise.resolve(g) : (h || (h = e().then((e2) => (g = e2, h = null, g))), h);
}
const M = { transform: (e2, r) => g && w(g, e2, r), destroy: S };
const SceneLayerWorker = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  destroyContext: b,
  dracoDecompressPointCloudData: c,
  filterObbsForModifications: u,
  filterObbsForModificationsSync: L,
  initialize: I,
  interpretObbModificationResults: A,
  process: l,
  project: p,
  setLegacySchema: y,
  setModifications: m,
  setModificationsSync: E,
  test: M,
  transformNormals: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  A,
  E,
  I,
  L,
  SceneLayerWorker as S,
  e$1 as e
};
