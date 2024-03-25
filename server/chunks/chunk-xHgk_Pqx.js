import { A1 as s$5, A2 as t$5, o4 as c$3, cr as q$1, bD as a$4, A3 as o$2, aO as s$6, aT as s$7, A4 as M$1, A5 as o$3, A6 as p$3, A7 as g$2, tE as e$2, A8 as d$1, b6 as u$1, ck as b$2, bg as a$6, dL as Z, aB as f$2, b0 as has, j2 as n$9, dQ as rt, lU as pt, cX as y$1, A9 as o$4, Aa as r$7, ct as e$3, Ab as a$7, Ac as l$2, cs as t$7, Ad as bt, cJ as U, cc as m$5, gP as l$3, mo as M$2, mw as d$2 } from "./chunk-ejFG4zJ0.js";
import { a as a$5, n as n$7, b as n$8, s as s$8, k, f as f$3 } from "./chunk-Mke_bPEP.js";
import { m as m$4, n as n$a, a as n$b } from "./chunk-KfB6QvrM.js";
import { n as n$c } from "./chunk-stE6bWuO.js";
import { b as j$1, v, t as t$6 } from "./chunk-pZO3UCge.js";
const t$4 = 1.25;
let r$6 = class r {
  get length() {
    return this._pos;
  }
  constructor(t4, r6) {
    this._pos = 0;
    const e2 = r6 ? this._roundToNearest(r6, t4.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(e2), this._buffer = new t4(this._array), this._ctor = t4, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(t4, r6) {
    const e2 = Math.round(t4);
    return 1 === r6 ? e2 : e2 + (r6 - e2 % r6);
  }
  _ensureSize(r6) {
    if (this._pos + r6 >= this._buffer.length) {
      const e2 = this._roundToNearest((this._array.byteLength + r6 * this._buffer.BYTES_PER_ELEMENT) * t$4, this._buffer.BYTES_PER_ELEMENT), s6 = new ArrayBuffer(e2), i2 = new this._ctor(s6);
      i2.set(this._buffer, 0), this._array = s6, this._buffer = i2, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t4) {
    this._ensureSize(t4);
  }
  writeF32(t4) {
    this._ensureSize(1);
    const r6 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t4, this._pos++, r6;
  }
  push(t4) {
    this._ensureSize(1);
    const r6 = this._pos;
    return this._buffer[this._pos++] = t4, r6;
  }
  writeFixed(t4) {
    this._buffer[this._pos++] = t4;
  }
  setValue(t4, r6) {
    this._buffer[t4] = r6;
  }
  i1616Add(t4, r6, e2) {
    this._i16View[2 * t4] += r6, this._i16View[2 * t4 + 1] += e2;
  }
  getValue(t4) {
    return this._buffer[t4];
  }
  getValueF32(t4) {
    return new Float32Array(this._array, 4 * t4, 1)[0];
  }
  incr(t4) {
    if (this._buffer.length < t4)
      throw new Error("Increment index overflows the target buffer");
    this._buffer[t4]++;
  }
  decr(t4) {
    this._buffer[t4]--;
  }
  writeRegion(t4) {
    this._ensureSize(t4.length);
    const r6 = this._pos;
    return this._buffer.set(t4, this._pos), this._pos += t4.length, r6;
  }
  writeManyFrom(t4, r6, e2) {
    this._ensureSize(e2 - r6);
    for (let s6 = r6; s6 !== e2; s6++)
      this.writeFixed(t4._buffer[s6]);
  }
  buffer() {
    const t4 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t4;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(t4) {
    this._pos = t4;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};
const e$1 = 6, i$2 = 4;
let r$5 = class r2 {
  constructor(r6, s6, n3, c3 = 0) {
    const h = e$1 * c3 * Uint32Array.BYTES_PER_ELEMENT, u = i$2 * c3 * n3, _2 = n3 / 4, o2 = s6.attributes.find((t4) => "pos" === t4.name || "position" === t4.name);
    if (!o2)
      throw new Error("InternalError: Unable to find position attribute");
    this.layout = { ...s6, position: o2 }, this._indices = new r$6(Uint32Array, h), this._vertices = new r$6(Uint32Array, u), this._metrics = new r$6(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = _2, this._instanceId = r6;
  }
  serialize(t4) {
    const e2 = this._indices.buffer(), i2 = this._vertices.buffer(), r6 = this._metrics.length ? this._metrics.buffer() : null;
    return t4.push(e2, i2), { instanceId: this._instanceId, layout: this.layout, indices: e2, vertices: i2, metrics: r6 };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(t4) {
    this._vertices.ensureSize(t4);
  }
  indexEnsureSize(t4) {
    this._indices.ensureSize(t4);
  }
  writeIndex(t4) {
    this._indices.push(t4);
  }
  writeVertex(t4) {
    this._vertices.push(t4);
  }
  writeVertexRegion(t4) {
    this._vertices.writeRegion(t4);
  }
  writeVertexF32(t4) {
    this._vertices.writeF32(t4);
  }
  writeMetric(t4) {
    this._metrics.incr(this._metricCountOffset), t4.serialize(this._metrics);
  }
};
let n$6 = class n {
  constructor(e2, r6 = 0) {
    this._id = e2, this._sizeHint = r6, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = { metric: null, writer: null, start: 0, sortKey: 0, instanceId: 0, layoutHash: 0, indexStart: 0, vertexStart: 0, textureKey: 0, metricBoxLenPointer: 0 }, this._entities = new r$6(Uint32Array, this._sizeHint * s$5.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const t4 = new Array(), e2 = [], r6 = this._entities.buffer();
    for (const i2 of this._instanceIdToVertexData.values())
      e2.push(i2.serialize(t4));
    return { message: { data: e2, entities: r6 }, transferList: t4 };
  }
  vertexCount() {
    return this._current.writer?.vertexCount ?? 0;
  }
  indexCount() {
    return this._current.writer?.indexCount ?? 0;
  }
  vertexEnsureSize(t4) {
    this._current.writer.vertexEnsureSize(t4);
  }
  indexEnsureSize(t4) {
    this._current.writer.indexEnsureSize(t4);
  }
  vertexWrite(t4) {
    this._current.writer.writeVertex(t4);
  }
  vertexWriteRegion(t4) {
    this._current.writer.writeVertexRegion(t4);
  }
  vertexWriteF32(t4) {
    this._current.writer.writeVertexF32(t4);
  }
  recordBounds(t4, e2, r6, i2) {
  }
  indexWrite(t4) {
    this._current.writer.writeIndex(t4);
  }
  metricStart(t4) {
    this._current.metric = t4;
  }
  metricEnd() {
    const t4 = this._current.writer;
    this._current.metric.bounds.length && t4.writeMetric(this._current.metric);
  }
  metricBoxWrite(t4) {
    this._current.metric.bounds.push(t4);
  }
  entityStart(t4, e2 = t4) {
    this._entityIdIndex = this._entities.push(t4), this._entitySortKeyIndex = this._entities.writeF32(e2), this._entityRecordCountOffset = this._entities.push(0);
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    0 === this.entityRecordCount() ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset);
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(t4, e2, r6 = 0) {
    this._current.writer = this._getVertexWriter(t4, e2), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = t4, this._current.layoutHash = e2.hash, this._current.textureKey = r6;
  }
  recordEnd(t4 = 0) {
    const r6 = this._current.vertexStart, i2 = this._current.writer.vertexCount - r6;
    if (!i2)
      return false;
    const n3 = this._current.indexStart, s6 = this._current.writer.indexCount - n3;
    return this._recordIndexStart = n3, this._recordIndexCount = s6, this._recordVertexStart = r6, this._recordVertexCount = i2, this._entities.incr(this._entityRecordCountOffset), t$5.write(this._entities, this._current.instanceId, this._current.textureKey, n3, s6, r6, i2, t4), true;
  }
  copyLast(t4, r6) {
    const i2 = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), t$5.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, i2, this._recordVertexCount, 0);
    const n3 = this._current.writer.indexWriter, s6 = this._current.writer.vertexWriter, o2 = this._recordIndexStart + this._recordIndexCount, c3 = this._recordVertexCount;
    for (let e2 = this._recordIndexStart; e2 !== o2; e2++) {
      const t5 = n3.getValue(e2);
      n3.push(t5 + c3);
    }
    const u = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, h = this._recordVertexStart * u, _2 = (this._recordVertexStart + this._recordVertexCount) * u;
    for (let e2 = h; e2 !== _2; e2++) {
      const t5 = s6.getValue(e2);
      s6.push(t5);
    }
    const d2 = this._current.writer.layout.position, a3 = d2.packPrecisionFactor ?? 1, x2 = d2.offset / Uint32Array.BYTES_PER_ELEMENT, y2 = t4 * a3, f2 = r6 * a3;
    for (let e2 = i2 * u; e2 <= s6.length; e2 += u)
      s6.i1616Add(e2 + x2, y2, f2);
    this.recordEnd();
  }
  copyLastFrom(t4, e2, r6) {
    const i2 = t4._entities.getValue(t4._entityIdIndex);
    if (i2 !== this._entities.getValue(this._entityIdIndex)) {
      const e3 = t4._entities.getValueF32(t4._entitySortKeyIndex);
      this.entityStart(i2, e3);
    }
    this.recordStart(t4._current.instanceId, t4._current.writer.layout, t4._current.textureKey);
    const n3 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, s6 = this._current.vertexStart, o2 = t4._current.vertexStart - s6, c3 = this._current.writer.indexWriter, u = this._current.writer.vertexWriter, h = t4._current.writer.indexWriter, _2 = t4._current.writer.vertexWriter;
    for (let l3 = t4._current.indexStart; l3 !== h.length; l3++) {
      const t5 = h.getValue(l3);
      c3.push(t5 - o2);
    }
    for (let l3 = t4._current.vertexStart * n3; l3 !== _2.length; l3++) {
      const t5 = _2.getValue(l3);
      u.push(t5);
    }
    const d2 = this._current.writer.layout.position, a3 = d2.packPrecisionFactor ?? 1, x2 = d2.offset / Uint32Array.BYTES_PER_ELEMENT, y2 = e2 * a3, f2 = r6 * a3;
    for (let l3 = s6 * n3; l3 <= u.length; l3 += n3)
      u.i1616Add(l3 + x2, y2, f2);
    this.recordEnd();
  }
  _getVertexWriter(t4, e2) {
    const { stride: i2 } = e2, n3 = this._instanceIdToVertexData;
    return n3.has(t4) || n3.set(t4, new r$5(t4, e2, i2, this._sizeHint)), n3.get(t4);
  }
};
function e(e2, o2) {
  let r6;
  if ("string" == typeof e2)
    r6 = c$3(e2 + `-seed(${o2})`);
  else {
    let t4 = 12;
    r6 = e2 ^ o2;
    do {
      r6 = 107 * (r6 >> 8 ^ r6) + t4 | 0;
    } while (0 != --t4);
  }
  return (1 + r6 / (1 << 31)) / 2;
}
function o$1(t4) {
  return Math.floor(e(t4, r$4) * n$5);
}
const r$4 = 53290320, n$5 = 10;
let s$4 = class s {
  destroy() {
  }
};
let r$3 = class r3 extends s$4 {
  constructor(e2) {
    super(), this._value = e2;
  }
  resize(e2) {
  }
  read(e2, r6) {
    return this._value;
  }
  readWithDefault(e2, r6, t4) {
    return this._value;
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};
const n$4 = () => s$7.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
async function c$2(e2, r6, t4 = false) {
  const { defaultValue: s6, valueExpressionInfo: a3, value: o2 } = r6;
  if (a3) {
    const { expression: o3 } = a3, i2 = await e2.createComputedField({ expression: o3 }, t4);
    return i2 ? { ...r6, computed: i2, defaultValue: s6 } : null;
  }
  return { ...r6, computed: new r$3(o2), defaultValue: s6 };
}
async function m$3(e2, r6) {
  const { defaultValue: t4, valueExpressionInfo: s6 } = r6, { expression: a3 } = s6, o2 = await e2.createComputedField({ expression: a3 });
  return o2 ? { ...r6, computed: o2, defaultValue: t4 } : null;
}
const p$2 = (e2) => "boolean" != typeof e2 && "number" != typeof e2 && "valueExpressionInfo" in e2, f$1 = (e2) => e2.some((e3) => {
  for (const r6 in e3) {
    const t4 = e3[r6];
    if (p$2(t4))
      return true;
  }
  return false;
});
let l$1 = class l {
  static async create(r6, t4, s6) {
    const a3 = {}, o2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map();
    for (const l3 in s6.params) {
      const h = s6.params[l3];
      if (null != h && "object" == typeof h)
        if (Array.isArray(h)) {
          if ("object" == typeof h[0])
            throw new Error(`InternalError: Cannot handle ${l3}. Nested array params are not supported`);
          a3[l3] = h;
        } else if ("valueExpressionInfo" in h) {
          if (h.value) {
            a3[l3] = h.value;
            continue;
          }
          const e2 = await m$3(r6, h);
          if (!e2) {
            a3[l3] = h.defaultValue;
            continue;
          }
          o2.set(l3, e2), a3[l3] = null;
        } else
          switch (h.type) {
            case "cim-effect-infos":
              if (h.effectInfos.some((e2) => e2.overrides.length)) {
                i2.set(l3, { effects: await Promise.all(h.effectInfos.map(async (t5) => {
                  const s7 = t5.overrides.map((e2) => c$2(r6, e2));
                  return { effect: t5.effect, compiledOverrides: (await Promise.all(s7)).filter(q$1) };
                })) });
                break;
              }
              a3[l3] = h.effectInfos.map((e2) => e2.effect);
              break;
            case "cim-marker-placement-info":
              h.overrides.length && n3.set(l3, { placementInfo: h, compiledOverrides: (await Promise.all(h.overrides.map((e2) => c$2(r6, e2)))).filter(q$1) }), a3[l3] = h.placement;
              break;
            case "text-rasterization-param": {
              if (h.overrides.length) {
                const t5 = h.overrides.map((e2) => c$2(r6, e2, h.useLegacyLabelEvaluationRules));
                u.set(l3, { compiledOverrides: (await Promise.all(t5)).filter(q$1), rasterizationParam: h, objectIdToResourceId: /* @__PURE__ */ new Map() });
                continue;
              }
              const s7 = { type: "cim-rasterization-info", resource: h.resource };
              a3[l3] = await t4.fetchResourceImmediate(s7) ?? null;
              break;
            }
            case "sprite-rasterization-param": {
              if (h.overrides.length) {
                const t5 = h.overrides.map((e2) => c$2(r6, e2));
                u.set(l3, { compiledOverrides: (await Promise.all(t5)).filter(q$1), rasterizationParam: h, objectIdToResourceId: /* @__PURE__ */ new Map() });
                continue;
              }
              if ("animated" === h.resource.type) {
                u.set(l3, { compiledOverrides: [], rasterizationParam: h, objectIdToResourceId: /* @__PURE__ */ new Map() });
                continue;
              }
              const s7 = { type: "cim-rasterization-info", resource: h.resource };
              a3[l3] = await t4.fetchResourceImmediate(s7) ?? null;
              break;
            }
            case "cim-marker-transform-param": {
              const { params: e2 } = h;
              if (f$1(e2)) {
                const t5 = { compiledMarkerInfos: [] };
                await Promise.all(e2.map(async (e3) => {
                  const s7 = { props: {} };
                  for (const t6 in e3)
                    if (p$2(e3[t6])) {
                      const a4 = await m$3(r6, e3[t6]);
                      s7.compiledExpressionMap || (s7.compiledExpressionMap = /* @__PURE__ */ new Map());
                      const o3 = s7.compiledExpressionMap;
                      a4 && o3.set(t6, a4);
                    } else
                      s7.props[t6] = e3[t6];
                  t5.compiledMarkerInfos.push(s7);
                })), d2.set(l3, t5);
              } else
                a3[l3] = { type: "cim-marker-transform-info", infos: e2 };
              break;
            }
            default:
              a3[l3] = h;
          }
      else
        a3[l3] = h;
    }
    return new l(s6, a3, o2, i2, n3, u, d2);
  }
  constructor(e2, r6, t4, s6, a3, o2, i2) {
    this.inputMeshParams = e2, this._resolvedMeshParams = r6, this._dynamicProperties = t4, this._dynamicEffectProperties = s6, this._dynamicPlacementProperties = a3, this._dynamicAsyncProperties = o2, this._dynamicTransformProperties = i2, this.evaluator = (e3) => e3;
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e2, s6, i2) {
    for (const m2 of this._dynamicAsyncProperties.values()) {
      const p3 = a$4(m2.rasterizationParam.resource);
      "animated" === m2.rasterizationParam.resource.type && m2.rasterizationParam.resource.randomizeStartTime && (p3.primitiveName = "__RESERVED__PRIMITIVE__NAME__", p3.startGroup = o$1(s6.getObjectId() || 0));
      for (const { primitiveName: e3, propertyName: t4, computed: a3, defaultValue: l3, valueExpressionInfo: u } of m2.compiledOverrides)
        try {
          const r6 = "animated" === m2.rasterizationParam.resource.type ? p3.primitiveName : e3;
          o$2(p3, r6, t4, a3, s6, i2, l3);
        } catch (c3) {
          n$4().errorOnce(new s$6("invalid-arcade-expression", `Encountered an error when evaluating the arcade expression '${u?.expression}' (primitive: '${e3}', property: '${t4}')`, c3));
        }
      const f2 = e2.enqueueRequest({ type: "cim-rasterization-info", resource: p3 });
      m2.objectIdToResourceId.set(s6.getObjectId(), f2);
    }
  }
  evaluateMeshParams(e2, r6, t4) {
    for (const [s6, a3] of this._dynamicProperties.entries())
      this._resolvedMeshParams[s6] = a3.computed.readWithDefault(r6, t4, a3.defaultValue);
    for (const [s6, a3] of this._dynamicPlacementProperties.entries())
      for (const { computed: e3, defaultValue: o2, propertyName: i2 } of a3.compiledOverrides) {
        const n3 = e3.readWithDefault(r6, t4, o2);
        a3.placementInfo.placement[i2] = n3, this._resolvedMeshParams[s6] = a3.placementInfo.placement;
      }
    for (const [s6, a3] of this._dynamicEffectProperties.entries())
      for (const e3 of a3.effects) {
        for (const { computed: s7, defaultValue: a4, propertyName: o2 } of e3.compiledOverrides) {
          const i2 = s7.readWithDefault(r6, t4, a4);
          e3.effect[o2] = i2;
        }
        this._resolvedMeshParams[s6] = a3.effects.map((e4) => e4.effect);
      }
    for (const [s6, a3] of this._dynamicTransformProperties.entries()) {
      const e3 = { type: "cim-marker-transform-info", infos: [] };
      for (const s7 of a3.compiledMarkerInfos) {
        const a4 = { ...s7.props };
        if (s7.compiledExpressionMap)
          for (const [e4, o2] of s7.compiledExpressionMap) {
            const s8 = o2.computed.readWithDefault(r6, t4, o2.defaultValue);
            a4[e4] = "number" == typeof s8 || "boolean" == typeof s8 ? s8 : o2.defaultValue;
          }
        e3.infos.push(a4);
      }
      this._resolvedMeshParams[s6] = e3;
    }
    for (const [s6, a3] of this._dynamicAsyncProperties.entries()) {
      const t5 = a3.objectIdToResourceId.get(r6.getObjectId());
      if (null == t5)
        continue;
      const o2 = e2.getResource(t5);
      this._resolvedMeshParams[s6] = o2;
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
};
async function n$3(t4, n3, a3, i2, o2, s6, c3) {
  const f2 = a$5[a3], m2 = await l$1.create(t4, n3, o2), p3 = new f2.constructor(i2, m2, s6, c3);
  return await p3.loadDependencies(), p3;
}
async function i$1(e2, r6, a3, i2) {
  return Promise.all(a3.map((a4) => n$3(e2, r6, a4.meshWriterName, n$7(a4.id), a4.options, i2, a4.optionalAttributes)));
}
let s$3 = class s2 {
};
let s$2 = class s3 extends s$3 {
  constructor(e2) {
    super(), this._fetcher = e2, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destory() {
    this._controller.abort();
  }
  get _abortOptions() {
    return { signal: this._controller.signal };
  }
  enqueueRequest(r6) {
    const s6 = M$1(r6.resource), o2 = c$3(JSON.stringify(s6));
    return this._pendingIds.has(o2) || (this._pendingIds.add(o2), this._pendingRequests.push({ ...r6, resourceId: o2 })), o2;
  }
  async fetchEnqueuedResources() {
    const e2 = this._pendingRequests;
    this._pendingIds.clear(), this._pendingRequests = [];
    const t4 = await this._fetcher.fetch(e2, this._abortOptions);
    for (let r6 = 0; r6 < t4.length; r6++) {
      const s6 = e2[r6].resourceId;
      this._resourceIdToResource.set(s6, t4[r6]);
    }
  }
  async fetchResourceImmediate(e2) {
    const t4 = await this._fetcher.fetch([e2], this._abortOptions);
    if (1 !== t4.length)
      throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
    return t4[0];
  }
  async fetchDictionaryResourceImmediate(e2) {
    const t4 = await this._fetcher.fetchDictionary([e2], this._abortOptions);
    if (1 !== t4.length)
      throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
    return t4[0];
  }
  getResource(e2) {
    return this._resourceIdToResource.get(e2);
  }
};
let r$2 = class r4 extends s$4 {
  constructor(e2) {
    super(), this._field = e2;
  }
  resize(e2) {
    throw new Error("Method not implemented.");
  }
  read(e2, r6) {
    return e2.readAttribute(this._field);
  }
  readWithDefault(e2, r6) {
    return e2.readAttribute(this._field);
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};
function r$1(r6, n3, t4) {
  if (null == r6)
    return null;
  const u = n3.readArcadeFeature();
  n3.contextTimeZone = t4.$view?.timeZone;
  try {
    return r6.evaluate({ ...t4, $feature: u }, r6.services);
  } catch (a3) {
    return s$7.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", a3), null;
  }
}
function n$2(e2) {
  return null == e2 || e2 === 1 / 0 || e2 === -1 / 0 || "number" == typeof e2 && isNaN(e2);
}
function t$3(e2, r6, t4, u) {
  if (null == e2)
    return null != u ? u : null;
  const a3 = r6.readArcadeFeature();
  r6.contextTimeZone = t4.$view?.timeZone;
  const o2 = e2.evaluate({ ...t4, $feature: a3 }, e2.services);
  return n$2(o2) ? null != u ? u : null : o2;
}
let c$1 = class c extends s$4 {
  static async create(t4, s6) {
    const a3 = await o$3(t4, s6.spatialReference, s6.fields), i2 = c$3(t4);
    return new c(a3, i2);
  }
  constructor(e2, r6) {
    super(), this._compiled = e2, this._cacheKey = r6;
  }
  resize(e2) {
  }
  read(e2, r6) {
    return this.referencesScale() || "system" !== r6.$view.timeZone ? r$1(this._compiled, e2, r6) : this._readCached(e2, r6);
  }
  readWithDefault(e2, r6, t4) {
    return this.referencesScale() || "system" !== r6.$view.timeZone ? t$3(this._compiled, e2, r6, t4) : this._readWithDefaultCached(e2, r6, t4);
  }
  referencesScale() {
    return this._compiled?.referencesScale() ?? false;
  }
  referencesGeometry() {
    return this._compiled?.referencesGeometry() ?? false;
  }
  _readCached(e2, r6) {
    if (e2.setCache(this._cacheKey), e2.hasCachedValue())
      return e2.getCachedValue();
    const s6 = r$1(this._compiled, e2, r6);
    return e2.setCachedValue(s6), s6;
  }
  _readWithDefaultCached(e2, r6, t4) {
    if (e2.setCache(this._cacheKey), e2.hasCachedValue())
      return e2.getCachedValue();
    const a3 = t$3(this._compiled, e2, r6, t4);
    return e2.setCachedValue(a3), a3;
  }
};
let a$3 = class a extends s$4 {
  static async create(t4, s6) {
    const l3 = p$3(t4);
    return new a((r6) => l3.replaceAll(/{[^}]*}/g, (t5) => {
      const s7 = t5.slice(1, -1), a3 = r6.metadata.fieldsIndex.get(s7);
      if (null == a3)
        return t5;
      const l4 = r6.readAttribute(s7);
      return null == l4 ? "" : g$2(l4, a3);
    }));
  }
  constructor(e2) {
    super(), this._evaluator = e2;
  }
  resize(e2) {
  }
  read(e2, r6) {
    return this._evaluator(e2);
  }
  readWithDefault(e2, r6, s6) {
    const a3 = this._evaluator(e2);
    return n$2(a3) ? s6 : a3;
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};
class r5 extends s$4 {
  constructor(e2, r6) {
    super(), this._field = e2, this._normalizationInfo = r6;
  }
  resize(e2) {
    throw new Error("Method not implemented.");
  }
  read(e2, r6) {
    return this._readNormalized(e2);
  }
  readWithDefault(e2, r6) {
    return this._readNormalized(e2);
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
  _readNormalized(e2) {
    const r6 = e2.readAttribute(this._field);
    if (null == r6)
      return null;
    const { normalizationField: t4, normalizationTotal: i2, normalizationType: o2 } = this._normalizationInfo, a3 = e2.readAttribute(t4);
    switch (o2 ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a3 ? a3 ? r6 / a3 : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(r6) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return i2 ? r6 / i2 * 100 : null;
    }
  }
}
let t$2 = class t {
  static fromBuffer(e2, s6) {
    return new t(e2, s6);
  }
  static create(e2, s6 = 4294967295) {
    const r6 = new Uint32Array(Math.ceil(e2 / 32));
    return new t(r6, s6);
  }
  constructor(t4, e2) {
    this._mask = 0, this._buf = t4, this._mask = e2;
  }
  _getIndex(t4) {
    return Math.floor(t4 / 32);
  }
  has(t4) {
    const e2 = this._mask & t4;
    return !!(this._buf[this._getIndex(e2)] & 1 << e2 % 32);
  }
  hasRange(t4, e2) {
    let s6 = t4, r6 = e2;
    for (; s6 % 32 && s6 !== r6; ) {
      if (this.has(s6))
        return true;
      s6++;
    }
    for (; r6 % 32 && s6 !== r6; ) {
      if (this.has(s6))
        return true;
      r6--;
    }
    if (s6 === r6)
      return false;
    for (let h = s6 / 32; h !== r6 / 32; h++) {
      if (this._buf[h])
        return true;
    }
    return false;
  }
  set(t4) {
    const e2 = this._mask & t4, s6 = this._getIndex(e2), r6 = 1 << e2 % 32;
    this._buf[s6] |= r6;
  }
  setRange(t4, e2) {
    let s6 = t4, r6 = e2;
    for (; s6 % 32 && s6 !== r6; )
      this.set(s6++);
    for (; r6 % 32 && s6 !== r6; )
      this.set(r6--);
    if (s6 !== r6)
      for (let h = s6 / 32; h !== r6 / 32; h++)
        this._buf[h] = 4294967295;
  }
  unset(t4) {
    const e2 = this._mask & t4, s6 = this._getIndex(e2), r6 = 1 << e2 % 32;
    this._buf[s6] &= 4294967295 ^ r6;
  }
  resize(t4) {
    const e2 = this._buf, s6 = new Uint32Array(Math.ceil(t4 / 32));
    s6.set(e2), this._buf = s6;
  }
  or(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= t4._buf[e2];
    return this;
  }
  and(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= t4._buf[e2];
    return this;
  }
  xor(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= t4._buf[e2];
    return this;
  }
  ior(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] |= ~t4._buf[e2];
    return this;
  }
  iand(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] &= ~t4._buf[e2];
    return this;
  }
  ixor(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] ^= ~t4._buf[e2];
    return this;
  }
  any() {
    for (let t4 = 0; t4 < this._buf.length; t4++)
      if (this._buf[t4])
        return true;
    return false;
  }
  copy(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++)
      this._buf[e2] = t4._buf[e2];
    return this;
  }
  clone() {
    return new t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t4 = 0; t4 < this._buf.length; t4++)
      this._buf[t4] = 0;
    return this;
  }
  forEachSet(t4) {
    for (let e2 = 0; e2 < this._buf.length; e2++) {
      let s6 = this._buf[e2], r6 = 32 * e2;
      if (s6)
        for (; s6; ) {
          1 & s6 && t4(r6), s6 >>>= 1, r6++;
        }
    }
  }
  countSet() {
    let t4 = 0;
    return this.forEachSet((e2) => {
      t4++;
    }), t4;
  }
};
const a$2 = () => s$7.getLogger("esri.views.2d.layers.features.support.whereUtils"), n$1 = { getAttribute: (e2, r6) => e2.readAttribute(r6) };
async function o(r6, o2) {
  try {
    const s6 = await e$2(r6, o2);
    if (!s6.isStandardized) {
      const r7 = new s$6("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", s6);
      a$2().error(r7);
    }
    return (e2) => {
      const t4 = e2.readArcadeFeature();
      try {
        return s6.testFeature(t4, n$1);
      } catch (o3) {
        return a$2().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r6), true;
      }
    };
  } catch (s6) {
    return a$2().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r6), (e2) => true;
  }
}
const a$1 = () => s$7.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage"), c2 = 4294967295;
function m$2(t4, e2, s6) {
  if (!(t4.length > e2))
    for (; t4.length <= e2; )
      t4.push(s6);
}
let p$1 = class p {
  constructor(t4) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = t4;
  }
  createBitset() {
    const t4 = this._bitsets.length;
    return this._bitsets.push(t$2.create(this._allocatedSize, n$8)), t4 + 1;
  }
  async createComputedField(e2, s6 = false) {
    if (e2.expression)
      try {
        if (!this.compilationOptions)
          throw new Error("InternalError: Compilation options not defined");
        if (s6)
          return a$3.create(e2.expression, this.compilationOptions);
        return await c$1.create(e2.expression, this.compilationOptions);
      } catch (d2) {
        const s7 = new s$6("featurelayer", "Failed to compile arcade expression", { error: d2, expression: e2.expression });
        return a$1().error(s7), null;
      }
    if (e2.normalizationType || e2.normalizationField)
      return new r5(e2.field, e2);
    if (e2.field)
      return new r$2(e2.field);
    const i2 = new s$6("featurelayer", "Unable to create computed field. No expression or field found", { info: e2 });
    return a$1().error(i2), null;
  }
  async createWhereClause(t4) {
    return t4 ? o(t4, this.compilationOptions.fields) : null;
  }
  getBitset(t4) {
    return this._bitsets[t4 - 1];
  }
  getComputedNumeric(t4, e2) {
    return this.getComputedNumericAtIndex(t4 & n$8, 0);
  }
  setComputedNumeric(t4, e2, s6) {
    return this.setComputedNumericAtIndex(t4 & n$8, s6, 0);
  }
  getComputedString(t4, e2) {
    return this.getComputedStringAtIndex(t4 & n$8, 0);
  }
  setComputedString(t4, e2, s6) {
    return this.setComputedStringAtIndex(t4 & n$8, 0, s6);
  }
  getComputedNumericAtIndex(t4, e2) {
    const s6 = t4 & n$8;
    return this._ensureNumeric(e2, s6), this._numerics[e2][s6];
  }
  setComputedNumericAtIndex(t4, e2, s6) {
    const r6 = t4 & n$8;
    this._ensureNumeric(e2, r6), this._numerics[e2][r6] = s6;
  }
  getPackedChunkId(t4) {
    const e2 = t4 & n$8;
    return this._ensureInstanceId(e2), this._instanceIds[e2];
  }
  setPackedChunkId(t4, e2) {
    const s6 = t4 & n$8;
    this._ensureInstanceId(s6), this._instanceIds[s6] = e2;
  }
  getComputedStringAtIndex(t4, e2) {
    const s6 = t4 & n$8;
    return this._ensureString(e2, s6), this._strings[e2][s6];
  }
  setComputedStringAtIndex(t4, e2, s6) {
    const r6 = t4 & n$8;
    this._ensureString(e2, r6), this._strings[e2][r6] = s6;
  }
  getXMin(t4) {
    return this._bounds[4 * (t4 & n$8)];
  }
  getYMin(t4) {
    return this._bounds[4 * (t4 & n$8) + 1];
  }
  getXMax(t4) {
    return this._bounds[4 * (t4 & n$8) + 2];
  }
  getYMax(t4) {
    return this._bounds[4 * (t4 & n$8) + 3];
  }
  setBounds(t4, e2, s6 = false) {
    const r6 = t4 & n$8;
    if (!s6 && !this._dirtyBitset.has(t4))
      return this._bounds[4 * r6] !== c2;
    this._dirtyBitset.unset(t4);
    const n3 = e2.readGeometryWorldSpace();
    if (m$2(this._bounds, 4 * r6 + 4, 0), !n3 || !n3.coords.length)
      return this._bounds[4 * r6] = c2, this._bounds[4 * r6 + 1] = c2, this._bounds[4 * r6 + 2] = c2, this._bounds[4 * r6 + 3] = c2, false;
    let o2 = 1 / 0, u = 1 / 0, d2 = -1 / 0, h = -1 / 0;
    return n3.forEachVertex((t5, e3) => {
      o2 = Math.min(o2, t5), u = Math.min(u, e3), d2 = Math.max(d2, t5), h = Math.max(h, e3);
    }), this._bounds[4 * r6] = o2, this._bounds[4 * r6 + 1] = u, this._bounds[4 * r6 + 2] = d2, this._bounds[4 * r6 + 3] = h, true;
  }
  getBounds(t4, e2) {
    const i2 = this.getXMin(e2), r6 = this.getYMin(e2), n3 = this.getXMax(e2), o2 = this.getYMax(e2);
    return d$1(t4, i2, r6, n3, o2), i2 !== c2;
  }
  _ensureNumeric(t4, e2) {
    this._numerics[t4] || (this._numerics[t4] = []);
    m$2(this._numerics[t4], e2, 0);
  }
  _ensureInstanceId(t4) {
    m$2(this._instanceIds, t4, 0);
  }
  _ensureString(t4, e2) {
    this._strings[t4] || (this._strings[t4] = []);
    m$2(this._strings[t4], e2, null);
  }
};
let t$1 = class t2 {
  getObjectId(t4) {
    return t4.getObjectId();
  }
  getAttributes(t4) {
    return t4.readAttributes();
  }
  getAttribute(t4, e2) {
    return t4.readAttribute(e2);
  }
  getAttributeAsTimestamp(t4, e2) {
    return t4.readAttributeAsTimestamp(e2);
  }
  cloneWithGeometry(t4, e2) {
    return t4;
  }
  getGeometry(t4) {
    return t4.readGeometryWorldSpace();
  }
  getCentroid(t4, e2) {
    return t4.readCentroidForDisplay();
  }
};
t$1.Shared = new t$1();
const d = 1, m$1 = 2;
class p2 {
  constructor(t4) {
    this._geometryBounds = u$1(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = t4;
  }
  static async create(t4) {
    const e2 = new p2(t4);
    return await e2.update(t4.filterJSON, t4.spatialReference), e2;
  }
  get hash() {
    return this._hash;
  }
  check(t4) {
    return this._applyFilter(t4);
  }
  clear() {
    const t4 = this._resetAllHiddenIds();
    return this.update(), { show: t4, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((t4, e2) => {
      this._idToVisibility.set(e2, 0);
    });
  }
  setKnownIds(t4) {
    for (const e2 of t4)
      this._idToVisibility.set(e2, d);
  }
  setTrue(t4) {
    const e2 = [], i2 = [], s6 = new Set(t4);
    return this._idToVisibility.forEach((t5, r6) => {
      const o2 = !!(this._idToVisibility.get(r6) & d), a3 = s6.has(r6);
      !o2 && a3 ? e2.push(r6) : o2 && !a3 && i2.push(r6), this._idToVisibility.set(r6, a3 ? d | m$1 : 0);
    }), { show: e2, hide: i2 };
  }
  createQuery() {
    const { geometry: t4, spatialRel: e2, where: i2, timeExtent: s6, objectIds: r6 } = this;
    return b$2.fromJSON({ geometry: t4, spatialRel: e2, where: i2, timeExtent: s6, objectIds: r6 });
  }
  async update(t4, e2) {
    this._hash = JSON.stringify(t4);
    const i2 = await j$1(t4, null, e2);
    await Promise.all([this._setGeometryFilter(i2), this._setIdFilter(i2), this._setAttributeFilter(i2), this._setTimeFilter(i2)]);
  }
  async _setAttributeFilter(t4) {
    if (!t4?.where)
      return this._clause = null, void (this.where = null);
    this._clause = await o(t4.where, this._serviceInfo.fieldsIndex), this.where = t4.where;
  }
  _setIdFilter(t4) {
    this._idsToShow = t4?.objectIds && new Set(t4.objectIds), this._idsToHide = t4?.hiddenIds && new Set(t4.hiddenIds), this.objectIds = t4?.objectIds;
  }
  async _setGeometryFilter(t4) {
    if (!t4?.geometry)
      return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const e2 = t4.geometry, i2 = t4.spatialRel || "esriSpatialRelIntersects", r6 = await v(i2, e2, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    a$6(this._geometryBounds, e2), this._spatialQueryOperator = r6, this.geometry = e2, this.spatialRel = i2;
  }
  _setTimeFilter(i2) {
    if (this.timeExtent = this._timeOperator = null, i2?.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = i2.timeExtent, this._timeOperator = t$6(this._serviceInfo.timeInfo, i2.timeExtent, t$1.Shared);
      else {
        const s6 = new s$6("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i2.timeExtent);
        s$7.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s6);
      }
  }
  _applyFilter(t4) {
    return this._filterByGeometry(t4) && this._filterById(t4) && this._filterByTime(t4) && this._filterByExpression(t4);
  }
  _filterByExpression(t4) {
    return !this.where || this._clause(t4);
  }
  _filterById(t4) {
    return (!this._idsToHide?.size || !this._idsToHide.has(t4.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(t4.getObjectId()));
  }
  _filterByGeometry(t4) {
    if (!this.geometry)
      return true;
    const e2 = t4.readGeometryWorldSpace();
    return !!e2 && this._spatialQueryOperator(e2);
  }
  _filterByTime(t4) {
    return null == this._timeOperator || this._timeOperator(t4);
  }
  _resetAllHiddenIds() {
    const t4 = [];
    return this._idToVisibility.forEach((e2, i2) => {
      e2 & d || (this._idToVisibility.set(i2, d), t4.push(i2));
    }), t4;
  }
}
class i {
  constructor(i2) {
    this._options = i2, this._fieldsIndex = "fieldsIndex" in i2 ? Z.fromJSON(i2.fieldsIndex) : new Z(i2.fields), i2.spatialReference && (this._spatialReference = f$2.fromJSON(i2.spatialReference)), this._arcadeSchema = { fields: this.fieldsIndex.fields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, objectIdField: this.objectIdField, globalIdField: this._options.globalIdField, spatialReference: this._spatialReference, timeInfo: this._options.timeInfo, typeIdField: this._options.typeIdField ?? void 0, types: this._options.types ?? void 0, subtypeField: this._options.subtypeField, subtypes: this._options.subtypes ?? void 0 };
  }
  get fieldsIndex() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._options.geometryType;
  }
  get timeInfo() {
    return this._options.timeInfo;
  }
  get objectIdField() {
    return this._options.objectIdField;
  }
  get globalIdField() {
    return this._options.globalIdField;
  }
  get arcadeSchema() {
    return this._arcadeSchema;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  get timeReferenceUnknownClient() {
    return this._options.timeReferenceUnknownClient;
  }
}
let s$1 = class s4 extends i {
  static create(e2) {
    return new s4({ fields: [], objectIdField: "uid", geometryType: null, spatialReference: e2, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, typeIdField: null, types: null, timeReferenceUnknownClient: null });
  }
};
class a2 {
  constructor(a3) {
    this._valid = t$2.create(a3), this._data = new Array(a3);
  }
  has(t4) {
    return this._valid.has(t4);
  }
  set(t4, a3) {
    this._valid.set(t4), this._data[t4] = a3;
  }
  get(t4) {
    return this._data[t4];
  }
}
const g$1 = has("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5], _$1 = g$1[0], x = g$1[1], b$1 = g$1[2], T = g$1[3], I = has("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4], A = I[0], D = I[1], F = I[2], S = has("featurelayer-simplify-mobile-factor") ?? 2, j = has("esri-mobile"), B = 4294967295;
function C(e2, t4, r6) {
  if (!(e2.length > t4))
    for (; e2.length <= t4; )
      e2.push(r6);
}
class M {
  constructor(e2) {
    this.metadata = e2, this.type = "FeatureSetReader", this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  get isEmpty() {
    return null != this._deleted && this._deleted.countSet() === this.getSize();
  }
  getAreaSimplificationThreshold(e2, t4) {
    let r6 = 1;
    const s6 = j ? S : 1;
    t4 > 4e6 ? r6 = F * s6 : t4 > 1e6 ? r6 = D * s6 : t4 > 5e5 ? r6 = A * s6 : t4 > 1e5 && (r6 = s6);
    let i2 = 0;
    return e2 > 4e3 ? i2 = T * r6 : e2 > 2e3 ? i2 = b$1 * r6 : e2 > 100 ? i2 = x : e2 > 15 && (i2 = _$1), i2;
  }
  parseTimestampOffset(e2) {
    return e2;
  }
  getBounds(e2) {
    if (C(this._boundsBuffer, 4 * this.getIndex() + 4, 0), this.getBoundsXMin() === B)
      return false;
    if (0 === this.getBoundsXMin()) {
      const t5 = this.readGeometryWorldSpace();
      if (!t5)
        return this.setBoundsXMin(B), false;
      let r7 = 1 / 0, s7 = 1 / 0, i3 = -1 / 0, a3 = -1 / 0;
      return t5.forEachVertex((e3, t6) => {
        r7 = Math.min(r7, e3), s7 = Math.min(s7, t6), i3 = Math.max(i3, e3), a3 = Math.max(a3, t6);
      }), this.setBoundsXMin(r7), this.setBoundsYMin(s7), this.setBoundsXMax(i3), this.setBoundsYMax(a3), d$1(e2, r7, s7, i3, a3), true;
    }
    const t4 = this.getBoundsXMin(), r6 = this.getBoundsYMin(), s6 = this.getBoundsXMax(), i2 = this.getBoundsYMax();
    return d$1(e2, t4, r6, s6, i2), true;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e2) {
    this._boundsBuffer[4 * this.getIndex()] = e2;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e2) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e2;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e2) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e2;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e2) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e2;
  }
  readAttributeAsTimestamp(e2) {
    const t4 = this.readAttribute(e2);
    return "string" == typeof t4 ? new Date(t4).getTime() : "number" == typeof t4 || null == t4 ? t4 : null;
  }
  readAttribute(e2, t4 = false) {
    const r6 = this._readAttribute(e2, t4);
    if (void 0 !== r6)
      return r6;
    for (const s6 of this._joined) {
      s6.setIndex(this.getIndex());
      const r7 = s6._readAttribute(e2, t4);
      if (void 0 !== r7)
        return r7;
    }
  }
  readAttributes() {
    const e2 = this._readAttributes();
    for (const t4 of this._joined) {
      t4.setIndex(this.getIndex());
      const r6 = t4._readAttributes();
      for (const t5 of Object.keys(r6))
        e2[t5] = r6[t5];
    }
    return e2;
  }
  joinAttributes(e2) {
    this._joined.push(e2);
  }
  removeIds(e2) {
    if (null == this._objectIdToIndex) {
      const e3 = /* @__PURE__ */ new Map(), r7 = this.getCursor();
      for (; r7.next(); ) {
        const s6 = r7.getObjectId();
        n$9(s6), e3.set(s6, r7.getIndex());
      }
      this._objectIdToIndex = e3;
    }
    const r6 = this._objectIdToIndex;
    for (const t4 of e2.values())
      r6.has(t4) && this._removeAtIndex(r6.get(t4));
  }
  readOptimizedFeatureWorldSpace() {
    const e2 = this.readGeometryWorldSpace(), t4 = this.readAttributes(), r6 = this.readCentroidWorldSpace(), s6 = new t$7(e2, t4, r6);
    return s6.objectId = this.getObjectId(), s6.displayId = this.getDisplayId(), s6;
  }
  readLegacyFeatureForDisplay() {
    const e2 = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e2 && { x: e2.coords[0], y: e2.coords[1] }) ?? null };
  }
  readLegacyFeatureWorldSpace() {
    const e2 = this.readCentroidWorldSpace();
    return { attributes: this.readAttributes(), geometry: this._readLegacyGeometryWorldSpace(), centroid: (e2 && { x: e2.coords[0], y: e2.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e2 = this.readGeometryForDisplay();
    return rt(e2, this.geometryType, false, false);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e2 = this._readX(), t4 = this.getInTransform();
    return null == t4 ? e2 : e2 * t4.scale[0] + t4.translate[0];
  }
  readYWorldSpace() {
    const e2 = this._readY(), t4 = this.getInTransform();
    return null == t4 ? e2 : t4.translate[1] - e2 * t4.scale[1];
  }
  readGeometryForDisplay() {
    const e2 = this._readGeometryDeltaDecoded(true);
    if (!e2) {
      const e3 = this._createGeometryFromServerCentroid();
      return e3 ? e3.deltaDecode() : null;
    }
    return e2;
  }
  readGeometryWorldSpace() {
    let e2 = this._readGeometry();
    if (e2 || (e2 = this._createGeometryFromServerCentroid()), !e2)
      return null;
    const t4 = e2.clone(), r6 = this.getInTransform();
    return null != r6 && pt(t4, t4, this.hasZ, this.hasM, r6), t4;
  }
  readCentroidForDisplay() {
    const e2 = this.readGeometryForDisplay();
    return e2 ? this._computeDisplayCentroid(e2) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e2 = this.readGeometryForDisplay(), t4 = e2 ? this._computeDisplayCentroid(e2) : this._readServerCentroid();
    if (!t4)
      return null;
    const r6 = t4.clone(), s6 = this.getInTransform();
    return null != s6 && pt(r6, r6, this.hasZ, this.hasM, s6), r6;
  }
  setCache(e2) {
    let t4 = this._caches.get(e2);
    null == t4 && (t4 = new a2(this.getSize()), this._caches.set(e2, t4)), this._activeCache = t4;
  }
  setCachedValue(e2) {
    this._activeCache.set(this.getIndex(), e2);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  _readGeometryDeltaDecoded(e2) {
    const t4 = this._readGeometry(e2);
    return "esriGeometryPoint" !== this.geometryType && t4 && this.getInTransform() ? t4.deltaDecode() : t4;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e2) {
    this._contextTimeZone = e2;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e2) {
    return this.fields.has(e2) || this._joined.some((t4) => t4.hasField(e2));
  }
  geometry() {
    const e2 = this.readGeometryWorldSpace(), t4 = rt(e2, this.geometryType, this.hasZ, this.hasM), r6 = y$1(t4);
    if (r6) {
      if (!this.metadata.spatialReference)
        throw new Error("InternalError: Expected spatial reference to be defined");
      r6.spatialReference = this.metadata.spatialReference;
    }
    return r6;
  }
  autocastArcadeDate(t4, r6) {
    return r6 && r6 instanceof Date ? this.isUnknownDateTimeField(t4) ? m$4.unknownDateJSToArcadeDate(r6) : m$4.dateJSAndZoneToArcadeDate(r6, this.contextTimeZone ?? o$4) : r6;
  }
  isUnknownDateTimeField(e2) {
    return this.metadata.fieldsIndex.getTimeZone(e2) === r$7;
  }
  field(t4) {
    let i2 = this.fields.get(t4);
    if (i2)
      switch (i2.type) {
        case "date-only":
        case "esriFieldTypeDateOnly":
          return n$b.fromReader(this.readAttribute(t4, false));
        case "time-only":
        case "esriFieldTypeTimeOnly":
          return n$a.fromReader(this.readAttribute(t4, false));
        case "esriFieldTypeTimestampOffset":
        case "timestamp-offset":
          return m$4.fromReaderAsTimeStampOffset(this.readAttribute(t4, false));
        case "date":
        case "esriFieldTypeDate":
          return this.autocastArcadeDate(t4, this.readAttribute(t4, true));
        default:
          return this.readAttribute(t4, false);
      }
    for (const o2 of this._joined)
      if (o2.setIndex(this.getIndex()), i2 = o2.fields.get(t4), i2)
        switch (i2.type) {
          case "date-only":
          case "esriFieldTypeDateOnly":
            return n$b.fromReader(o2._readAttribute(t4, false));
          case "time-only":
          case "esriFieldTypeTimeOnly":
            return n$a.fromReader(o2._readAttribute(t4, false));
          case "esriFieldTypeTimestampOffset":
          case "timestamp-offset":
            return m$4.fromReaderAsTimeStampOffset(o2._readAttribute(t4, false));
          case "date":
          case "esriFieldTypeDate":
            return this.autocastArcadeDate(t4, o2._readAttribute(t4, true));
          default:
            return this.readAttribute(t4, false);
        }
    throw new Error(`Field ${t4} does not exist`);
  }
  setField(e2, t4) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e2) => e2.name);
  }
  castToText(e2 = false) {
    if (!e2)
      return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t4 = this.readLegacyFeatureForDisplay();
    if (!t4)
      return JSON.stringify(null);
    const r6 = { geometry: t4.geometry, attributes: { ...t4.attributes ?? {} } };
    for (const s6 in r6.attributes) {
      const e3 = r6.attributes[s6];
      e3 instanceof Date && (r6.attributes[s6] = e3.getTime());
    }
    return JSON.stringify(r6);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e2 = null) {
    return { attributes: this._readAttributes(), geometry: true === e2?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null };
  }
  castAsJsonAsync(e2 = null, t4 = null) {
    return Promise.resolve(this.castAsJson(t4));
  }
  _getExists() {
    return null == this._deleted || !this._deleted.has(this.getIndex());
  }
  _computeDisplayCentroid(e2) {
    if (null == this.getInTransform())
      return n$c(new e$3(), e2, this.hasM, this.hasZ);
    const t4 = a$7.fromOptimized(e2, this.geometryType);
    t4.yFactor *= -1;
    const r6 = l$2(t4);
    return r6 ? (r6[1] *= -1, new e$3([], r6)) : null;
  }
  copyInto(e2) {
    e2._joined = this._joined, e2._deleted = this._deleted, e2._objectIdToIndex = this._objectIdToIndex, e2._boundsBuffer = this._boundsBuffer, e2._activeCache = this._activeCache, e2._caches = this._caches, e2._contextTimeZone = this._contextTimeZone;
  }
  _readLegacyGeometryWorldSpace() {
    const e2 = this.readGeometryWorldSpace();
    return rt(e2, this.geometryType, false, false);
  }
  _createGeometryFromServerCentroid() {
    const e2 = this._readServerCentroid();
    if (!e2)
      return null;
    const [t4, r6] = e2.coords;
    return this._createQuantizedExtrudedGeometry(t4, r6);
  }
  _createQuantizedExtrudedGeometry(e2, t4) {
    return "esriGeometryPolyline" === this.geometryType ? this._createQuantizedExtrudedLine(e2, t4) : this._createQuantizedExtrudedQuad(e2, t4);
  }
  _createQuantizedExtrudedQuad(e2, t4) {
    return new e$3([5], [e2 - 1, t4, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createQuantizedExtrudedLine(e2, t4) {
    return new e$3([2], [e2 - 1, t4 + 1, 1, -1]);
  }
  _removeAtIndex(e2) {
    null == this._deleted && (this._deleted = t$2.create(this.getSize())), this._deleted.set(e2);
  }
}
const n2 = (n3, l3) => n3 && ((...n4) => l3.warn("DEBUG:", ...n4)) || (() => null), l2 = false;
class t3 {
  constructor(e2) {
    this.data = e2, this._referenceCount = 0;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return 0 === this._referenceCount;
  }
}
class s5 {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  createIdForObjectId(s6) {
    let r6 = this._objectIdToDisplayId.get(s6);
    return r6 ? r6.increment() : (r6 = new t3(s$8(this._getFreeId(), false)), r6.increment(), this._objectIdToDisplayId.set(s6, r6)), r6.data;
  }
  releaseIdForObjectId(e2) {
    const t4 = this._objectIdToDisplayId.get(e2);
    t4 && (t4.decrement(), t4.empty() && (this._objectIdToDisplayId.delete(e2), this._freeIds.push(t4.data)));
  }
  releaseAll() {
    for (const e2 of this._objectIdToDisplayId.values())
      this._freeIds.push(e2.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
}
function g(t4, e2) {
  if (!t4 || !e2)
    return t4;
  switch (e2) {
    case "radius":
    case "distance":
      return 2 * t4;
    case "diameter":
    case "width":
      return t4;
    case "area":
      return Math.sqrt(t4);
  }
  return t4;
}
const _ = () => s$7.getLogger("esri.views.layers.2d.features.support.AttributeStore"), f = n2(l2, _()), y = { sharedArrayBuffer: has("esri-shared-array-buffer"), atomics: has("esri-atomics") };
class m {
  constructor(t4, e2, i2) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: s6, layout: r6, textureOnly: n3 } = e2;
    this.textureOnly = n3 || false, this.pixelType = s6, this.layout = r6, this._resetRange(), this.size = t4, this.isLocal = i2, n3 || (this.data = this._initData(s6, t4));
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(t4, e2) {
    const i2 = this.data;
    for (let s6 = 0; s6 < this.size * this.size; s6++)
      i2[s6 * this.texelSize + t4] &= ~e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t4, e2) {
    const i2 = this.data;
    for (let s6 = 0; s6 < this.size * this.size; s6++)
      i2[s6 * this.texelSize + t4] |= 255 & e2;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t4, e2, i2) {
    const s6 = this.data;
    for (const r6 of i2)
      s6[r6 * this.texelSize + t4] |= e2, this.dirtyStart = Math.min(this.dirtyStart, r6), this.dirtyEnd = Math.max(this.dirtyEnd, r6);
  }
  setComponentTexel(t4, e2, i2) {
    this.data[i2 * this.texelSize + t4] |= e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  unsetComponentTexel(t4, e2, i2) {
    this.data[i2 * this.texelSize + t4] &= ~e2, this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, i2);
  }
  getData(t4, e2) {
    const i2 = f$3(t4);
    return this.data[i2 * this.texelSize + e2];
  }
  setData(t4, e2, i2) {
    const s6 = f$3(t4), r6 = 1 << e2;
    0 != (this.layout & r6) ? null != this.data && (this.data[s6 * this.texelSize + e2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s6), this.dirtyEnd = Math.max(this.dirtyEnd, s6)) : _().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(t4) {
    if (this.size = t4, !this.textureOnly) {
      const e2 = this._initData(this.pixelType, t4), i2 = this.data;
      e2.set(i2), this.data = e2;
    }
  }
  toMessage() {
    const t4 = this.dirtyStart, e2 = this.dirtyEnd, i2 = this.texelSize;
    if (t4 > e2)
      return null;
    this._resetRange();
    const s6 = !this.isLocal, r6 = this.pixelType, n3 = this.layout, a3 = this.data;
    return { start: t4, end: e2, data: s6 && a3.slice(t4 * i2, (e2 + 1) * i2) || null, pixelType: r6, layout: n3 };
  }
  _initData(t4, e2) {
    const i2 = ArrayBuffer, s6 = d$2(t4), r6 = new s6(new i2(e2 * e2 * 4 * s6.BYTES_PER_ELEMENT));
    for (let n3 = 0; n3 < r6.length; n3 += 4)
      r6[n3 + 1] = 255;
    return r6;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class b {
  constructor(t4) {
    this._client = t4, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = bt, this._idsToHighlight = /* @__PURE__ */ new Map(), this._referencesScale = false, this._referencesGeometry = false, this._initialized = false, this.version = 0, this._idGenerator = new s5(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (null != this._blockDescriptors)
      return;
    const t4 = U.FLOAT;
    f(`Creating AttributeStore ${y.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{ pixelType: U.UNSIGNED_BYTE, layout: 1 }, { pixelType: U.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: U.UNSIGNED_BYTE, layout: 15, textureOnly: true }, { pixelType: t4, layout: 15 }, { pixelType: t4, layout: 15 }, { pixelType: t4, layout: 15 }, { pixelType: t4, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get referencesScale() {
    return this._referencesScale;
  }
  get referencesGeometry() {
    return this._referencesGeometry;
  }
  get _signal() {
    return this._abortController.signal;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(t4) {
    return this._idGenerator.createIdForObjectId(t4);
  }
  releaseDisplayIdForObjectId(t4) {
    return this._idGenerator.releaseIdForObjectId(t4);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  async update(t4, e2, s6, r6, n3 = 0) {
    const a3 = m$5(this._schema, t4);
    if (this.version = n3, a3 && (has("esri-2d-update-debug") && console.debug(`Version[${n3}] AttributeStore.update`, { changed: a3 }), this._schema = t4, this._attributeComputeInfo = null, this._initialize(), null != t4))
      if (s6 && (this._filters = await Promise.all(t4.filters.map((t5) => t5 ? p2.create({ geometryType: s6.geometryType, hasM: false, hasZ: false, timeInfo: s6.timeInfo, fieldsIndex: s6.fieldsIndex, spatialReference: r6 ?? s6.spatialReference, filterJSON: t5 }) : null))), "subtype" !== t4.type)
        this._attributeComputeInfo = { isSubtype: false, map: /* @__PURE__ */ new Map() }, await Promise.all(t4.bindings.map(async (t5) => {
          const i2 = await this._bind(e2, t5);
          this._referencesGeometry = this._referencesGeometry || (i2?.referencesGeometry() ?? false), this._referencesScale = this._referencesScale || (i2?.referencesScale() ?? false);
        }));
      else {
        this._attributeComputeInfo = { isSubtype: true, subtypeField: t4.subtypeField, map: /* @__PURE__ */ new Map() }, this._referencesScale = false, this._referencesGeometry = false;
        for (const i2 in t4.bindings) {
          const s7 = t4.bindings[i2];
          await Promise.all(s7.map(async (t5) => {
            const s8 = await this._bind(e2, t5, parseInt(i2, 10));
            this._referencesGeometry = this._referencesGeometry || (s8?.referencesGeometry() ?? false), this._referencesScale = this._referencesScale || (s8?.referencesScale() ?? false);
          }));
        }
      }
  }
  setHighlight(t4, e2) {
    const i2 = this._getBlock(0);
    i2.unsetComponentAllTexels(0, (1 << l$3.length) - 1);
    for (const { displayId: s6, highlightFlags: r6 } of t4) {
      if (null == s6)
        continue;
      const t5 = f$3(s6);
      i2.setComponent(0, r6, [t5]);
    }
    this._idsToHighlight.clear();
    for (const { objectId: s6, highlightFlags: r6 } of t4)
      this._idsToHighlight.set(s6, r6);
    for (const { objectId: s6, highlightFlags: r6 } of e2)
      this._idsToHighlight.set(s6, r6);
  }
  setData(t4, e2, i2, s6) {
    const r6 = f$3(t4);
    this._ensureSizeForTexel(r6), this._getBlock(e2).setData(t4, i2, s6);
  }
  getData(t4, e2, i2) {
    return this._getBlock(e2).getData(t4, i2);
  }
  getHighlightFlags(t4) {
    return this._idsToHighlight.get(t4) || 0;
  }
  unsetAttributeData(t4) {
    const e2 = f$3(t4);
    this._getBlock(0).setData(e2, 0, 0);
  }
  setAttributeData(t4, e2, i2) {
    const s6 = f$3(t4);
    this._ensureSizeForTexel(s6), this._getBlock(0).setData(s6, 0, this.getFilterFlags(e2));
    const r6 = this._attributeComputeInfo, o2 = 1, h = 4;
    let c3 = null;
    r6 && (c3 = r6.isSubtype ? r6.map.get(e2.readAttribute(r6.subtypeField)) : r6.map, c3?.size && c3.forEach((t5, r7) => {
      const a3 = r7 * o2 % h, c4 = Math.floor(r7 * o2 / h), d2 = this._getBlock(c4 + M$2.VV);
      let u = t5.field?.read(e2, i2);
      t5.valueRepresentation && (u = g(u, t5.valueRepresentation));
      (null === u || isNaN(u) || u === 1 / 0 || u === -1 / 0) && (u = k), d2.setData(s6, a3, u);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  async sendUpdates() {
    const t4 = this._blocks.map((t5) => null != t5 ? t5.toMessage() : null), e2 = this._getInitArgs();
    has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), await this._client.update({ initArgs: e2, blockData: t4, version: this.version, sendUpdateEpoch: this._epoch }, this._signal), this._epoch += 1, has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(t4) {
    for (; t4 >= this._size * this._size; )
      if (this._expand())
        return;
  }
  async _bind(t4, e2, i2) {
    const s6 = await t4.createComputedField(e2), { valueRepresentation: r6 } = e2, n3 = this._attributeComputeInfo;
    if (n3.isSubtype) {
      const t5 = n3.map.get(i2) ?? /* @__PURE__ */ new Map();
      t5.set(e2.binding, { field: s6, valueRepresentation: r6 }), n3.map.set(i2, t5);
    } else
      n3.map.set(e2.binding, { field: s6, valueRepresentation: r6 });
    return s6;
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = true, this._getBlock(M$2.Animation), this._getBlock(M$2.GPGPU), { blockSize: this._size, blockDescriptors: this._blocks.map((t4) => null != t4 ? { textureOnly: t4.textureOnly, buffer: t4.buffer, pixelType: t4.pixelType } : null) });
  }
  _getBlock(t4) {
    const e2 = this._blocks[t4];
    if (null != e2)
      return e2;
    f(`Initializing AttributeBlock at index ${t4}`);
    const i2 = new m(this._size, this._blockDescriptors[t4], this._client.isLocal);
    return this._blocks[t4] = i2, this._initialized = false, i2;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const t4 = this._size <<= 1;
      f("Expanding block size to", t4, this._blocks);
      for (const e2 of this._blocks)
        e2?.expand(t4);
      return this._initialized = false, this._size = t4, 0;
    }
    return _().error(new s$6("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  isVisible(t4) {
    return !!(this._getBlock(0).getData(t4, 0) & 1 << l$3.length);
  }
  getFilterFlags(t4) {
    let e2 = 0;
    for (let s6 = 0; s6 < this._filters.length; s6++) {
      const i3 = !!(1 << s6), r6 = this._filters[s6];
      e2 |= (!i3 || null == r6 || r6.check(t4) ? 1 : 0) << s6;
    }
    let i2 = 0;
    if (this._idsToHighlight.size) {
      const e3 = t4.getObjectId();
      i2 = this.getHighlightFlags(e3);
    }
    return e2 << l$3.length | i2;
  }
}
export {
  M,
  s$2 as a,
  b,
  n$3 as c,
  p2 as d,
  e,
  i as f,
  n$2 as g,
  a2 as h,
  i$1 as i,
  t$1 as j,
  n$6 as n,
  p$1 as p,
  r$3 as r,
  s$1 as s,
  t$2 as t
};
