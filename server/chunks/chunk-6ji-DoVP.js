import { hG as n$2, aB as f$1, nl as i$1, nm as a, nn as y$1, no as n$3, np as s } from "./chunk-ejFG4zJ0.js";
import { r } from "./chunk-LITpsmk3.js";
var n$1, e$1;
!function(n2) {
  n2[n2.None = 0] = "None", n2[n2.Int16 = 1] = "Int16", n2[n2.Int32 = 2] = "Int32";
}(n$1 || (n$1 = {})), function(n2) {
  n2[n2.Replace = 0] = "Replace", n2[n2.Outside = 1] = "Outside", n2[n2.Inside = 2] = "Inside", n2[n2.Finished = 3] = "Finished";
}(e$1 || (e$1 = {}));
function e() {
  return n || (n = new Promise((t) => import("./chunk-i-E2zkvT.js").then((t2) => t2.i).then(({ default: e2 }) => {
    const n2 = e2({ locateFile: i, onRuntimeInitialized: () => t(n2) });
    delete n2.then;
  })).catch((t) => {
    throw t;
  })), n;
}
function i(e2) {
  return n$2(`esri/libs/i3s/${e2}`);
}
let n;
async function c(e2) {
  g = await _();
  const t = [e2.geometryBuffer];
  return { result: E(g, e2, t), transferList: t };
}
async function l(e2) {
  g = await _();
  const t = [e2.geometryBuffer], { geometryBuffer: r2 } = e2, o = r2.byteLength, n2 = g._malloc(o), s2 = new Uint8Array(g.HEAPU8.buffer, n2, o);
  s2.set(new Uint8Array(r2));
  const i2 = g.dracoDecompressPointCloudData(n2, s2.byteLength);
  if (g._free(n2), i2.error.length > 0)
    throw new Error(`i3s.wasm: ${i2.error}`);
  const a2 = i2.featureIds?.length > 0 ? i2.featureIds.slice() : null, f = i2.positions.slice();
  return a2 && t.push(a2.buffer), t.push(f.buffer), { result: { positions: f, featureIds: a2 }, transferList: t };
}
async function u(e2) {
  await _(), L(e2);
  const t = { buffer: e2.buffer };
  return { result: t, transferList: [t.buffer] };
}
async function m(e2) {
  await _(), w(e2);
}
async function y(e2) {
  g = await _(), g.setLegacySchema(e2.context, e2.jsonSchema);
}
async function p(n2) {
  const { localMatrix: s2, origin: i2, positions: a$1, vertexSpace: f, localMode: c2 } = n2, l2 = f$1.fromJSON(n2.inSpatialReference), u2 = f$1.fromJSON(n2.outSpatialReference);
  let m2;
  if ("georeferenced" === f.type && null == f.origin) {
    const [{ projectBuffer: e2 }, { initializeProjection: t }] = await Promise.all([import("./chunk-ejFG4zJ0.js").then((n3) => n3.DX), import("./chunk-ejFG4zJ0.js").then((n3) => n3.DY)]);
    await t(l2, u2), m2 = new Float64Array(a$1.length), e2(a$1, l2, 0, m2, u2, 0, m2.length / 3);
  } else {
    const e2 = "georeferenced" === f.type ? i$1.fromJSON(f) : a.fromJSON(f), { project: n3 } = await import("./chunk-ejFG4zJ0.js").then((n4) => n4.D_);
    m2 = y$1(n3({ positions: a$1, transform: s2 ? { localMatrix: s2 } : void 0, vertexSpace: e2, inSpatialReference: l2, outSpatialReference: u2, localMode: c2 }));
  }
  const y2 = m2.length, [p2, d2, b2] = i2;
  for (let e2 = 0; e2 < y2; e2 += 3)
    m2[e2] -= p2, m2[e2 + 1] -= d2, m2[e2 + 2] -= b2;
  return { result: { projected: m2, original: a$1 }, transferList: [m2.buffer, a$1.buffer] };
}
async function d({ normalMatrix: e2, normals: t }) {
  const r2 = new Float32Array(t.length);
  return n$3(r2, t, e2), s(r2, r2), { result: { transformed: r2, original: t }, transferList: [r2.buffer, t.buffer] };
}
function b(e2) {
  I(e2);
}
let h, g;
function w(e2) {
  if (!g)
    return;
  const t = e2.modifications, r2 = g._malloc(8 * t.length), o = new Float64Array(g.HEAPU8.buffer, r2, t.length);
  for (let n2 = 0; n2 < t.length; ++n2)
    o[n2] = t[n2];
  g.setModifications(e2.context, r2, t.length, e2.isGeodetic), g._free(r2);
}
function E(e2, t, r2) {
  const { context: o, localOrigin: n2, globalTrafo: s2, mbs: a2, obbData: f, elevationOffset: c2, geometryBuffer: l2, geometryDescriptor: u2, indexToVertexProjector: m2, vertexToRenderProjector: y2 } = t, p2 = e2._malloc(l2.byteLength), d2 = 33, b2 = e2._malloc(d2 * Float64Array.BYTES_PER_ELEMENT), h2 = new Uint8Array(e2.HEAPU8.buffer, p2, l2.byteLength);
  h2.set(new Uint8Array(l2));
  const g2 = new Float64Array(e2.HEAPU8.buffer, b2, d2);
  S(g2, n2);
  let w2 = g2.byteOffset + 3 * g2.BYTES_PER_ELEMENT, E2 = new Float64Array(g2.buffer, w2);
  S(E2, s2), w2 += 16 * g2.BYTES_PER_ELEMENT, E2 = new Float64Array(g2.buffer, w2), S(E2, a2), w2 += 4 * g2.BYTES_PER_ELEMENT, f && (E2 = new Float64Array(g2.buffer, w2), S(E2, f));
  const A2 = u2, L2 = { isDraco: false, isLegacy: false, color: t.layouts.some((e3) => e3.some((e4) => "color" === e4.name)), normal: t.needNormals && t.layouts.some((e3) => e3.some((e4) => "normalCompressed" === e4.name)), uv0: t.layouts.some((e3) => e3.some((e4) => "uv0" === e4.name)), uvRegion: t.layouts.some((e3) => e3.some((e4) => "uvRegion" === e4.name)), featureIndex: A2.featureIndex }, I2 = e2.process(o, !!t.obbData, p2, h2.byteLength, A2, L2, b2, c2, m2, y2, t.normalReferenceFrame);
  if (e2._free(b2), e2._free(p2), I2.error.length > 0)
    throw new Error(`i3s.wasm: ${I2.error}`);
  if (I2.discarded)
    return null;
  const j2 = I2.componentOffsets.length > 0 ? I2.componentOffsets.slice() : null, _2 = I2.featureIds.length > 0 ? I2.featureIds.slice() : null, x2 = I2.anchorIds.length > 0 ? Array.from(I2.anchorIds) : null, M = I2.anchors.length > 0 ? Array.from(I2.anchors) : null, P = I2.interleavedVertedData.slice().buffer, U = I2.indicesType === n$1.Int16 ? new Uint16Array(I2.indices.buffer, I2.indices.byteOffset, I2.indices.byteLength / 2).slice() : new Uint32Array(I2.indices.buffer, I2.indices.byteOffset, I2.indices.byteLength / 4).slice(), O = I2.positions.slice(), T = I2.positionIndicesType === n$1.Int16 ? new Uint16Array(I2.positionIndices.buffer, I2.positionIndices.byteOffset, I2.positionIndices.byteLength / 2).slice() : new Uint32Array(I2.positionIndices.buffer, I2.positionIndices.byteOffset, I2.positionIndices.byteLength / 4).slice(), R = { layout: t.layouts[0], interleavedVertexData: P, indices: U, hasColors: I2.hasColors, hasModifications: I2.hasModifications, positionData: { data: O, indices: T } };
  return _2 && r2.push(_2.buffer), j2 && r2.push(j2.buffer), r2.push(P), r2.push(U.buffer), r2.push(O.buffer), r2.push(T.buffer), { componentOffsets: j2, featureIds: _2, anchorIds: x2, anchors: M, transformedGeometry: R, obb: I2.obb };
}
function A(e2) {
  return 0 === e2 ? r.Unmodified : 1 === e2 ? r.PotentiallyModified : 2 === e2 ? r.Culled : r.Unknown;
}
function L(e2) {
  if (!g)
    return;
  const { context: t, buffer: r2 } = e2, o = g._malloc(r2.byteLength), n2 = r2.byteLength / Float64Array.BYTES_PER_ELEMENT, s2 = new Float64Array(g.HEAPU8.buffer, o, n2), i2 = new Float64Array(r2);
  s2.set(i2), g.filterOBBs(t, o, n2), i2.set(s2), g._free(o);
}
function I(e2) {
  g && 0 === g.destroy(e2) && (g = null);
}
function S(e2, t) {
  for (let r2 = 0; r2 < t.length; ++r2)
    e2[r2] = t[r2];
}
async function j() {
  g || await _();
}
function _() {
  return g ? Promise.resolve(g) : (h || (h = e().then((e2) => (g = e2, h = null, g))), h);
}
const x = { transform: (e2, t) => g && E(g, e2, t), destroy: I };
const SceneLayerWorker = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  destroyContext: b,
  dracoDecompressPointCloudData: l,
  filterObbsForModifications: u,
  filterObbsForModificationsSync: L,
  initialize: j,
  interpretObbModificationResults: A,
  process: c,
  project: p,
  setLegacySchema: y,
  setModifications: m,
  setModificationsSync: w,
  test: x,
  transformNormals: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  A,
  L,
  SceneLayerWorker as S,
  e$1 as e,
  j,
  w
};
