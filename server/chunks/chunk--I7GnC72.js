import { h8 as u$3, uF as t$3, hY as C, b1 as s$2, hW as R, hX as E$1, h as h$4, i3 as F, kR as e$1, kS as G, eA as D, T as T$1, f as f$6, wm as t$4, hU as e$2, i5 as O, ce as n$2, bY as T$2, bb as s$3, hT as i$2, rZ as M, wn as l$4, i1 as f$7, h$ as M$1, i2 as h$5, bo as e$3, bp as y$2, br as c$4, bs as g$1, bI as b, cy as x$1, ap as M$2, wo as g$2, bJ as d$5, bf as c$5, n9 as I, wp as U, wq as _$2, h_ as r$1, i0 as t$5, wr as b$1, hL as i$3, i4 as ee } from "./chunk-KFNcxJaF.js";
function n$1(n2) {
  const i2 = t$2(s$1(n2)), o2 = i2, a2 = true, l2 = Math.max(i2 / 2, 5), r2 = Math.round(u$3(n2.maxPathLength) / l2) + 1, u2 = 10, { density: c4 } = n2;
  return { smoothing: u$3(n2.smoothing), interpolate: true, velocityScale: "flow-from" === n2.flowRepresentation ? 1 : -1, verticesPerLine: r2, minSpeedThreshold: 1e-3, segmentLength: l2, maxTurnAngle: 1, collisions: a2, lineCollisionWidth: o2, lineSpacing: u2, density: c4 };
}
function t$2(e2) {
  return "constant" === e2.kind ? e2.value[0] : e2.values[e2.values.length - 1];
}
function i$1(e2) {
  const n2 = e2.toRgba();
  return [n2[0] / 255, n2[1] / 255, n2[2] / 255, n2[3]];
}
function o$1(e2) {
  return { kind: "constant", value: [0.1, 0.1, 0.1, 1] };
}
function s$1(n2) {
  if (!n2.hasVisualVariables("size"))
    return { kind: "constant", value: [u$3(n2.trailWidth)] };
  const t3 = n2.getVisualVariablesForType("size")[0], i2 = [], o2 = [];
  let s2;
  if (t3.stops) {
    for (const n3 of t3.stops)
      i2.push(n3.value), o2.push(u$3(n3.size));
    s2 = t3.stops.length;
  } else
    i2.push(t3.minDataValue, t3.maxDataValue), o2.push(u$3(t3.minSize), u$3(t3.maxSize)), s2 = 2;
  return { kind: "ramp", stops: i2, values: o2, count: s2 };
}
function a$1(e2) {
  if (!e2.hasVisualVariables("color"))
    return { kind: "constant", value: i$1(e2.color) };
  const n2 = e2.getVisualVariablesForType("color")[0], t3 = [], o2 = [];
  for (const s2 of n2.stops)
    t3.push(s2.value), Array.prototype.push.apply(o2, i$1(s2.color));
  return { kind: "ramp", stops: t3, values: o2, count: n2.stops.length };
}
function l$3(e2) {
  if (!e2.hasVisualVariables("opacity"))
    return { kind: "constant", value: [1] };
  const n2 = e2.getVisualVariablesForType("opacity")[0], t3 = [], i2 = [];
  for (const o2 of n2.stops)
    t3.push(o2.value), i2.push(o2.opacity);
  return { kind: "ramp", stops: t3, values: i2, count: n2.stops.length };
}
function r(e2, n2, t3, i2) {
  switch (n2) {
    case "int":
      e2.setUniform1iv(t3, i2);
      break;
    case "float":
      e2.setUniform1fv(t3, i2);
      break;
    case "vec2":
      e2.setUniform2fv(t3, i2);
      break;
    case "vec3":
      e2.setUniform3fv(t3, i2);
      break;
    case "vec4":
      e2.setUniform4fv(t3, i2);
  }
}
function u$2(e2, n2, t3, i2) {
  "constant" === i2.kind ? r(e2, t3, `u_${n2}`, i2.value) : (r(e2, "float", `u_${n2}_stops`, i2.stops), r(e2, t3, `u_${n2}_values`, i2.values), e2.setUniform1i(`u_${n2}_count`, i2.count));
}
function c$3(e2, n2) {
  let t3 = true;
  return t3 = t3 && e2.collisions === n2.collisions, t3 = t3 && e2.density === n2.density, t3 = t3 && e2.interpolate === n2.interpolate, t3 = t3 && e2.lineCollisionWidth === n2.lineCollisionWidth, t3 = t3 && e2.lineSpacing === n2.lineSpacing, t3 = t3 && e2.maxTurnAngle === n2.maxTurnAngle, t3 = t3 && e2.minSpeedThreshold === n2.minSpeedThreshold, t3 = t3 && e2.segmentLength === n2.segmentLength, t3 = t3 && e2.smoothing === n2.smoothing, t3 = t3 && e2.velocityScale === n2.velocityScale, t3 = t3 && e2.verticesPerLine === n2.verticesPerLine, t3;
}
function p$1(e2, n2) {
  return e2 === n2 || null != e2 && null != n2 && e2.equals(n2);
}
function f$5(e2, n2) {
  if (!c$3(e2.simulationSettings, n2.simulationSettings))
    return false;
  if (!p$1(e2.timeExtent, n2.timeExtent))
    return false;
  let t3 = true;
  return t3 = t3 && e2.loadImagery === n2.loadImagery, t3 = t3 && e2.createFlowMesh === n2.createFlowMesh, t3 = t3 && e2.color.kind === n2.color.kind, t3 = t3 && e2.opacity.kind === n2.opacity.kind, t3 = t3 && e2.size.kind === n2.size.kind, t3;
}
let f$4 = class f {
  constructor(t3) {
    this._params = t3, this.animated = false;
  }
  isCompatible(t3) {
    if (!(t3 instanceof f))
      return false;
    if (!p$1(this._params.timeExtent, t3._params.timeExtent))
      return false;
    let r2 = true;
    return r2 = r2 && this._params.loadImagery === t3._params.loadImagery, r2 = r2 && this._params.color.kind === t3._params.color.kind, r2 = r2 && this._params.opacity.kind === t3._params.opacity.kind, r2;
  }
  async load(a2, r2) {
    const { extent: e2, size: s2 } = a2;
    s$2(r2);
    const o2 = await this._params.loadImagery(e2, s2[0], s2[1], this._params.timeExtent, r2);
    return new x(o2, { color: this._params.color, opacity: this._params.opacity });
  }
  render(t3, a2, e2) {
    const { context: s2 } = t3, { program: n2 } = e2;
    s2.setFaceCullingEnabled(false), s2.setBlendingEnabled(true), s2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), s2.useProgram(n2), n2.setUniformMatrix3fv("u_dvsMat3", a2.dvsMat3), s2.bindTexture(e2.texture, 0), n2.setUniform1i("u_texture", 0), n2.setUniform1f("u_Min", e2.min), n2.setUniform1f("u_Max", e2.max), u$2(n2, "color", "vec4", this._params.color), u$2(n2, "opacity", "float", this._params.opacity), s2.bindVAO(e2.vertexArray), s2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4);
  }
};
const d$4 = /* @__PURE__ */ new Map();
d$4.set("a_position", 0), d$4.set("a_texcoord", 1);
const u$1 = { geometry: [new t$3("a_position", 2, C.UNSIGNED_SHORT, 0, 8), new t$3("a_texcoord", 2, C.UNSIGNED_SHORT, 4, 8)] }, w = { vsPath: "raster/flow/imagery", fsPath: "raster/flow/imagery", attributes: d$4 };
class x {
  constructor(t3, a2) {
    this._flowData = t3, this._values = a2;
  }
  attach(t3) {
    const { context: a2 } = t3, { width: r2, height: s2 } = this._flowData, o2 = h$4.createVertex(a2, F.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, r2, 0, 1, 1, 0, s2, 0, 0, r2, s2, 1, 0])), i2 = new f$6(a2, d$4, u$1, { geometry: o2 }), _3 = [];
    "ramp" === this._values.color.kind && _3.push("vvColor"), "ramp" === this._values.opacity.kind && _3.push("vvOpacity");
    const f3 = t3.painter.materialManager.getProgram(w, _3);
    let x2 = 1e6, g2 = -1e6;
    for (let e2 = 0; e2 < s2; e2++)
      for (let t4 = 0; t4 < r2; t4++)
        if (0 !== this._flowData.mask[e2 * r2 + t4]) {
          const a3 = this._flowData.data[2 * (e2 * r2 + t4)], s3 = this._flowData.data[2 * (e2 * r2 + t4) + 1], o3 = Math.sqrt(a3 * a3 + s3 * s3);
          x2 = Math.min(x2, o3), g2 = Math.max(g2, o3);
        }
    const y2 = new Uint8Array(4 * r2 * s2);
    for (let e2 = 0; e2 < s2; e2++)
      for (let t4 = 0; t4 < r2; t4++)
        if (0 !== this._flowData.mask[e2 * r2 + t4]) {
          const a3 = this._flowData.data[2 * (e2 * r2 + t4)], s3 = this._flowData.data[2 * (e2 * r2 + t4) + 1], o3 = (Math.sqrt(a3 * a3 + s3 * s3) - x2) / (g2 - x2);
          y2[4 * (e2 * r2 + t4)] = 255 * o3, y2[4 * (e2 * r2 + t4) + 1] = 0, y2[4 * (e2 * r2 + t4) + 2] = 0, y2[4 * (e2 * r2 + t4) + 3] = 255;
        } else
          y2[4 * (e2 * r2 + t4)] = 0, y2[4 * (e2 * r2 + t4) + 1] = 0, y2[4 * (e2 * r2 + t4) + 2] = 0, y2[4 * (e2 * r2 + t4) + 3] = 0;
    const A = new e$1();
    A.internalFormat = G.RGBA, A.wrapMode = D.CLAMP_TO_EDGE, A.flipped = true, A.width = r2, A.height = s2;
    const b2 = new T$1(a2, A, y2);
    this.vertexArray = i2, this.program = f3, this.texture = b2, this.min = x2, this.max = g2, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
}
let _$1 = class _ {
  constructor(t3) {
    this._params = t3;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t3) {
    return t3 instanceof _ && f$5(this._params, t3._params);
  }
  async load(e2, a2) {
    const { extent: s2, size: r2 } = e2;
    s$2(a2);
    const i2 = await this._params.loadImagery(s2, r2[0], r2[1], this._params.timeExtent, a2), { vertexData: o2, indexData: n2 } = await this._params.createFlowMesh("Particles", this._params.simulationSettings, i2, a2);
    return new c$2(o2, n2, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t3, e2, s2) {
    const { context: n2 } = t3, { program: m2 } = s2;
    n2.setFaceCullingEnabled(false), n2.setBlendingEnabled(true), n2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n2.useProgram(m2), m2.setUniform1f("u_time", e2.time), m2.setUniform1f("u_trailLength", this._params.trailLength), m2.setUniform1f("u_flowSpeed", this._params.flowSpeed), m2.setUniform1f("u_featheringSize", this._params.featheringSize), m2.setUniform1f("u_featheringOffset", this._params.featheringOffset), m2.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m2.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m2.setUniform1f("u_decayRate", this._params.decayRate), m2.setUniformMatrix3fv("u_dvsMat3", e2.dvsMat3), m2.setUniformMatrix3fv("u_displayViewMat3", e2.displayViewMat3), u$2(m2, "color", "vec4", this._params.color), u$2(m2, "opacity", "float", this._params.opacity), u$2(m2, "size", "float", this._params.size), n2.bindVAO(s2.vertexArray), n2.drawElements(E$1.TRIANGLES, s2.indexCount, C.UNSIGNED_INT, 0);
  }
};
const l$2 = /* @__PURE__ */ new Map();
l$2.set("a_xyts0", 0), l$2.set("a_xyts1", 1), l$2.set("a_typeIdDurationSeed", 2), l$2.set("a_extrudeInfo", 3);
const h$3 = { geometry: [new t$3("a_xyts0", 4, C.FLOAT, 0, 64), new t$3("a_xyts1", 4, C.FLOAT, 16, 64), new t$3("a_typeIdDurationSeed", 4, C.FLOAT, 32, 64), new t$3("a_extrudeInfo", 4, C.FLOAT, 48, 64)] }, f$3 = { vsPath: "raster/flow/particles", fsPath: "raster/flow/particles", attributes: l$2 };
let c$2 = class c {
  constructor(t3, e2, a2) {
    this._vertexData = t3, this._indexData = e2, this._values = a2;
  }
  attach(t3) {
    const { context: e2 } = t3, a2 = h$4.createVertex(e2, F.STATIC_DRAW, this._vertexData), r2 = h$4.createIndex(e2, F.STATIC_DRAW, this._indexData), i2 = new f$6(e2, l$2, h$3, { geometry: a2 }, r2), o2 = [];
    "ramp" === this._values.color.kind && o2.push("vvColor"), "ramp" === this._values.opacity.kind && o2.push("vvOpacity"), "ramp" === this._values.size.kind && o2.push("vvSize");
    const p2 = t3.painter.materialManager.getProgram(f$3, o2);
    this.vertexArray = i2, this.program = p2, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};
let t$1 = class t {
  constructor(t3) {
    this._styles = t3;
  }
  get animated() {
    return this._styles.reduce((t3, s2) => t3 || s2.animated, false);
  }
  isCompatible(s2) {
    if (!(s2 instanceof t))
      return false;
    if (this._styles.length !== s2._styles.length)
      return false;
    const e2 = this._styles.length;
    for (let t3 = 0; t3 < e2; t3++)
      if (!this._styles[t3].isCompatible(s2._styles[t3]))
        return false;
    return true;
  }
  async load(t3, e2) {
    const r2 = await Promise.all(this._styles.map((s2) => s2.load(t3, e2)));
    return new s(r2);
  }
  render(t3, s2, e2) {
    for (let r2 = 0; r2 < this._styles.length; r2++)
      this._styles[r2].render(t3, s2, e2.resources[r2]);
  }
};
class s {
  constructor(t3) {
    this.resources = t3;
  }
  attach(t3) {
    for (const s2 of this.resources)
      s2.attach(t3);
  }
  detach() {
    for (const t3 of this.resources)
      t3.detach();
  }
  get ready() {
    return this.resources.reduce((t3, s2) => t3 && s2.ready, true);
  }
}
class _2 {
  constructor(e2) {
    this._params = e2;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(e2) {
    return e2 instanceof _2 && f$5(this._params, e2._params);
  }
  async load(t3, a2) {
    const { extent: s2, size: r2 } = t3;
    s$2(a2);
    const i2 = await this._params.loadImagery(s2, r2[0], r2[1], this._params.timeExtent, a2), { vertexData: o2, indexData: n2 } = await this._params.createFlowMesh("Streamlines", this._params.simulationSettings, i2, a2);
    return new d$3(o2, n2, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(e2, t3, s2) {
    const { context: n2 } = e2, { program: m2 } = s2;
    n2.setFaceCullingEnabled(false), n2.setBlendingEnabled(true), n2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), n2.useProgram(m2), m2.setUniform1f("u_time", t3.time), m2.setUniform1f("u_trailLength", this._params.trailLength), m2.setUniform1f("u_flowSpeed", this._params.flowSpeed), m2.setUniform1f("u_featheringSize", this._params.featheringSize), m2.setUniform1f("u_featheringOffset", this._params.featheringOffset), m2.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), m2.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), m2.setUniform1f("u_decayRate", this._params.decayRate), m2.setUniformMatrix3fv("u_dvsMat3", t3.dvsMat3), m2.setUniformMatrix3fv("u_displayViewMat3", t3.displayViewMat3), u$2(m2, "color", "vec4", this._params.color), u$2(m2, "opacity", "float", this._params.opacity), u$2(m2, "size", "float", this._params.size), n2.bindVAO(s2.vertexArray), n2.drawElements(E$1.TRIANGLES, s2.indexCount, C.UNSIGNED_INT, 0);
  }
}
const l$1 = /* @__PURE__ */ new Map();
l$1.set("a_positionAndSide", 0), l$1.set("a_timeInfo", 1), l$1.set("a_extrude", 2), l$1.set("a_speed", 3);
const h$2 = { geometry: [new t$3("a_positionAndSide", 3, C.FLOAT, 0, 36), new t$3("a_timeInfo", 3, C.FLOAT, 12, 36), new t$3("a_extrude", 2, C.FLOAT, 24, 36), new t$3("a_speed", 1, C.FLOAT, 32, 36)] }, f$2 = { vsPath: "raster/flow/streamlines", fsPath: "raster/flow/streamlines", attributes: l$1 };
let d$3 = class d {
  constructor(e2, t3, a2) {
    this._vertexData = e2, this._indexData = t3, this._values = a2;
  }
  attach(e2) {
    const { context: t3 } = e2, a2 = h$4.createVertex(t3, F.STATIC_DRAW, this._vertexData), r2 = h$4.createIndex(t3, F.STATIC_DRAW, this._indexData), i2 = new f$6(t3, l$1, h$2, { geometry: a2 }, r2), o2 = [];
    "ramp" === this._values.color.kind && o2.push("vvColor"), "ramp" === this._values.opacity.kind && o2.push("vvOpacity"), "ramp" === this._values.size.kind && o2.push("vvSize");
    const p2 = e2.painter.materialManager.getProgram(f$2, o2);
    this.vertexArray = i2, this.program = p2, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};
const m$1 = 4, u = 1, f$1 = 0.5, p = true, d$2 = true, y$1 = 2.3;
function g(g2, w2) {
  const { flowSpeed: h2, trailLength: v } = g2, S = n$1(g2);
  let j = null;
  const k = { opacity: l$3(g2), size: s$1(g2) };
  let x2 = a$1(g2);
  if ("none" === g2.background)
    k.color = x2;
  else {
    "constant" === x2.kind && (x2 = { kind: "ramp", stops: [0, 1], values: [0, 0, 0, 1, x2.value[0], x2.value[1], x2.value[2], x2.value[3]], count: 2 });
    const e2 = { loadImagery: w2.loadImagery, timeExtent: w2.timeExtent, color: x2, opacity: { kind: "constant", value: [1] } };
    j = new f$4(e2), k.color = o$1();
  }
  const I2 = { loadImagery: w2.loadImagery, createFlowMesh: w2.createFlowMesh, simulationSettings: S, timeExtent: w2.timeExtent, trailLength: v, flowSpeed: h2, featheringSize: u, featheringOffset: f$1, introFade: p, fadeToZero: d$2, decayRate: y$1, color: k.color, opacity: k.opacity, size: k.size }, z = "butt" === g2.trailCap || t$2(s$1(g2)) <= m$1 ? new _2(I2) : new _$1(I2);
  return null != j ? new t$1([j, z]) : z;
}
class a extends t$4 {
  constructor() {
    super(...arguments), this._visualState = { time: 0, dvsMat3: e$2(), displayViewMat3: e$2() };
  }
  dispose() {
  }
  prepareState(t3) {
    const { context: e2 } = t3;
    e2.setColorMask(true, true, true, true), e2.setStencilFunction(O.EQUAL, 0, 255);
  }
  draw(t3, e2) {
    const { requestRender: s2, allowDelayedRender: a2 } = t3, { displayData: r2 } = e2;
    if (null == r2)
      return;
    if ("loaded" === r2.state.name && r2.attach(t3), "attached" !== r2.state.name)
      return;
    const i2 = r2.state.resources;
    !a2 || i2.ready || null == s2 ? (this._visualState.time = t3.time / 1e3, this._visualState.dvsMat3 = e2.transforms.dvs, this._visualState.displayViewMat3 = t3.state.displayViewMat3, r2.flowStyle.render(t3, this._visualState, i2), r2.flowStyle.animated && null != s2 && s2()) : s2();
  }
}
class t2 extends n$2 {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  doRender(e2) {
    super.doRender(e2);
  }
  prepareRenderPasses(s2) {
    const t3 = s2.registerRenderPass({ name: "flow", brushes: [a], target: () => this.children, drawPhase: T$2.MAP });
    return [...super.prepareRenderPasses(s2), t3];
  }
}
class e {
  constructor(t3, e2, s2, a2) {
    this.state = { name: "created" }, this.flowStyle = t3, this.extent = e2, this.size = s2, this.pixelRatio = a2;
  }
  async load() {
    const t3 = new AbortController();
    this.state = { name: "loading", abortController: t3 };
    const e2 = { extent: this.extent, size: this.size, pixelRatio: this.pixelRatio }, s2 = await this.flowStyle.load(e2, t3.signal);
    this.state = { name: "loaded", resources: s2 };
  }
  attach(e2) {
    if ("loaded" !== this.state.name)
      return void s$3.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
    const s2 = this.state.resources;
    s2.attach(e2), this.state = { name: "attached", resources: s2 };
  }
  detach() {
    if ("loading" === this.state.name)
      return this.state.abortController.abort(), void (this.state = { name: "detached" });
    "attached" === this.state.name && (this.state.resources.detach(), this.state = { name: "detached" });
  }
  update(t3) {
    if (!this.flowStyle.isCompatible(t3.flowStyle))
      return false;
    return !(!this.extent.equals(t3.extent) || this.size[0] !== t3.size[0] || this.size[1] !== t3.size[1] || this.pixelRatio !== t3.pixelRatio) && (this.flowStyle = t3.flowStyle, true);
  }
}
class o extends i$2 {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(t3) {
    this._displayData = t3, this.requestRender();
  }
  clear() {
    null != this._displayData && (this._displayData.detach(), this._displayData = null, this.requestRender());
  }
  setTransform(r2) {
    const { displayData: n2 } = this;
    if (null == n2)
      return;
    const o2 = n2.extent.xmin, l2 = n2.extent.ymax, p2 = [0, 0];
    r2.toScreen(p2, [o2, l2]);
    const m2 = (n2.extent.xmax - n2.extent.xmin) / n2.size[0] / r2.resolution, c4 = M(r2.rotation), { dvs: d4 } = this.transforms;
    l$4(d4, [-1, 1, 0]), f$7(d4, d4, [2 / (r2.size[0] * r2.pixelRatio), -2 / (r2.size[1] * r2.pixelRatio), 1]), M$1(d4, d4, [p2[0], p2[1], 0]), h$5(d4, d4, c4), f$7(d4, d4, [m2 * r2.pixelRatio, m2 * r2.pixelRatio, 1]);
  }
  _createTransforms() {
    return { dvs: e$2() };
  }
}
const m = 1.15;
let d$1 = class d2 extends g$1 {
  constructor(t3) {
    super(t3), this._flowDisplayObject = new o(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return null != this._loading;
  }
  update(t3) {
    const { flowStyle: o2 } = this.flowContainer;
    if (null == o2)
      return void this._clear();
    const { extent: e$12, rotation: r2, resolution: a2, pixelRatio: l2 } = t3.state, p2 = y(e$12, r2);
    p2.expand(m);
    const c4 = [Math.round((p2.xmax - p2.xmin) / a2), Math.round((p2.ymax - p2.ymin) / a2)], d4 = new e(o2, p2, c4, l2);
    if (null != this._loading) {
      if (this._loading.update(d4))
        return;
      this._loading.detach(), this._loading = null;
    }
    null != this._flowDisplayObject.displayData && this._flowDisplayObject.displayData.update(d4) || (d4.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (t4) => {
      b(t4) || (s$3.getLogger(this).error("A resource failed to load.", t4), this._loading = null);
    }), this._loading = d4);
  }
  _clear() {
    this._flowDisplayObject.clear(), null != this._loading && (this._loading.detach(), this._loading = null);
  }
};
e$3([y$2()], d$1.prototype, "_loading", void 0), e$3([y$2()], d$1.prototype, "flowContainer", void 0), e$3([y$2()], d$1.prototype, "updating", null), d$1 = e$3([c$4("esri.views.2d.engine.flow.FlowStrategy")], d$1);
const h$1 = d$1;
function y(t3, o2) {
  const i2 = new x$1({ x: (t3.xmax + t3.xmin) / 2, y: (t3.ymax + t3.ymin) / 2, spatialReference: t3.spatialReference }), s2 = t3.xmax - t3.xmin, r2 = t3.ymax - t3.ymin, a2 = Math.abs(Math.cos(M(o2))), n2 = Math.abs(Math.sin(M(o2))), p2 = a2 * s2 + n2 * r2, m2 = n2 * s2 + a2 * r2, d4 = new M$2({ xmin: i2.x - p2 / 2, ymin: i2.y - m2 / 2, xmax: i2.x + p2 / 2, ymax: i2.y + m2 / 2, spatialReference: t3.spatialReference });
  return d4.centerAt(i2), d4;
}
let c$1 = class c2 extends g$1 {
  constructor() {
    super(...arguments), this._loadImagery = (t3, e2, i2, o2, r2) => g$2(this.layer, t3, e2, i2, o2, r2), this._createFlowMesh = (t3, e2, i2, o2) => this.layer.createFlowMesh({ meshType: t3, flowData: i2, simulationSettings: e2 }, { signal: o2 }), this.attached = false, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const { layer: t$12 } = this, e2 = () => {
      this._loadImagery = (e3, i2, o2, r2, s2) => g$2(t$12, e3, i2, o2, r2, s2), this._updateVisualization();
    };
    "multidimensionalDefinition" in t$12 ? this.addHandles(d$5(() => t$12.multidimensionalDefinition, e2)) : this.addHandles([d$5(() => t$12.mosaicRule, e2), d$5(() => t$12.rasterFunction, e2), d$5(() => t$12.definitionExpression, e2)]), this.container = new t2(), this._strategy = new h$1({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container?.removeAllChildren(), this.container = null, this.removeHandles();
  }
  update(t3) {
    t3.stationary ? this._strategy.update(t3) : this.layerView.requestUpdate();
  }
  hitTest(t3) {
    return new c$5({ attributes: {}, geometry: t3.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    const t3 = this.layer.renderer;
    if (null == t3 || "flow" !== t3.type)
      return;
    const e2 = g(t3, { loadImagery: this._loadImagery, createFlowMesh: this._createFlowMesh, timeExtent: this.timeExtent });
    this.container.flowStyle = e2, this.layerView.requestUpdate();
  }
};
e$3([y$2()], c$1.prototype, "_strategy", void 0), e$3([y$2()], c$1.prototype, "attached", void 0), e$3([y$2()], c$1.prototype, "container", void 0), e$3([y$2()], c$1.prototype, "layer", void 0), e$3([y$2()], c$1.prototype, "layerView", void 0), e$3([y$2()], c$1.prototype, "type", void 0), e$3([y$2()], c$1.prototype, "updating", null), e$3([y$2()], c$1.prototype, "timeExtent", void 0), c$1 = e$3([c$4("esri.views.2d.engine.flow.FlowView2D")], c$1);
const h = c$1;
const n = new Float32Array([0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1]), i = new Float32Array([0, 92 / 255, 230 / 255, 1]), l = { beaufort_ft: n, beaufort_m: n, beaufort_km: n, beaufort_mi: n, beaufort_kn: new Float32Array([0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1]), classified_arrow: new Float32Array([0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1]), ocean_current_m: new Float32Array([0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), ocean_current_kn: new Float32Array([0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), simple_scalar: i, single_arrow: i, wind_speed: new Float32Array([0, 0, 0, 1]) }, c3 = [0, 20];
class d3 extends t$4 {
  constructor() {
    super(...arguments), this._desc = { magdir: { vsPath: "raster/magdir", fsPath: "raster/magdir", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) }, scalar: { vsPath: "raster/scalar", fsPath: "raster/scalar", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) } };
  }
  dispose() {
  }
  prepareState({ context: e2 }) {
    e2.setBlendingEnabled(true), e2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(true), e2.setStencilOp(I.KEEP, I.KEEP, I.REPLACE);
  }
  draw(e2, t3) {
    if (null == t3.source || 0 === t3.source.validPixelCount)
      return;
    const { context: a2, timeline: s2 } = e2;
    if (s2.begin(this.name), a2.setStencilFunction(O.EQUAL, t3.stencilRef, 255), t3.updateVectorFieldVAO(e2), "scalar" === e2.renderPass) {
      const a3 = t3.vaoData.scalar;
      a3 && this._drawScalars(e2, t3, a3.vao, a3.elementCount);
    } else {
      const a3 = t3.vaoData.magdir;
      a3 && this._drawTriangles(e2, t3, a3.vao, a3.elementCount);
    }
    s2.end(this.name);
  }
  _drawTriangles(e2, t3, a2, r2) {
    const { context: n2, painter: i2, requestRender: d4, allowDelayedRender: m2 } = e2, { symbolizerParameters: u2 } = t3, f3 = u2.dataRange ? ["dataRange"] : [];
    "geographic" === u2.rotationType && f3.push("rotationGeographic");
    const _3 = i2.materialManager.getProgram(this._desc.magdir, f3);
    if (m2 && null != d4 && !_3.compiled)
      return void d4();
    n2.useProgram(_3);
    const { coordScale: g2, opacity: p2, transforms: y2 } = t3;
    _3.setUniform2fv("u_coordScale", g2), _3.setUniform1f("u_opacity", p2), _3.setUniformMatrix3fv("u_dvsMat3", y2.dvs);
    const { style: v, dataRange: S, rotation: b2, symbolPercentRange: h2 } = u2;
    _3.setUniform4fv("u_colors", l[v]), _3.setUniform2fv("u_dataRange", S || c3), _3.setUniform1f("u_rotation", b2), _3.setUniform2fv("u_symbolPercentRange", h2);
    const w2 = this._getSymbolSize(e2, t3);
    _3.setUniform2fv("u_symbolSize", w2), n2.bindVAO(a2), n2.drawElements(E$1.TRIANGLES, r2, C.UNSIGNED_INT, 0);
  }
  _drawScalars(e2, t3, a2, r2) {
    const { context: n2, painter: i2, requestRender: l2, allowDelayedRender: d4 } = e2, { symbolizerParameters: m2 } = t3, u2 = [];
    "wind_speed" === m2.style ? u2.push("innerCircle") : m2.dataRange && u2.push("dataRange"), "geographic" === m2.rotationType && u2.push("rotationGeographic");
    const f3 = i2.materialManager.getProgram(this._desc.scalar, u2);
    if (d4 && null != l2 && !f3.compiled)
      return void l2();
    n2.useProgram(f3);
    const { coordScale: _3, opacity: g2, transforms: p2 } = t3;
    f3.setUniform2fv("u_coordScale", _3), f3.setUniform1f("u_opacity", g2), f3.setUniformMatrix3fv("u_dvsMat3", p2.dvs);
    const { dataRange: y2, symbolPercentRange: v } = m2;
    f3.setUniform2fv("u_dataRange", y2 || c3), f3.setUniform2fv("u_symbolPercentRange", v);
    const S = this._getSymbolSize(e2, t3);
    f3.setUniform2fv("u_symbolSize", S), n2.bindVAO(a2), n2.drawElements(E$1.TRIANGLES, r2, C.UNSIGNED_INT, 0);
  }
  _getSymbolSize(e2, t3) {
    const a2 = t3.key ? 2 ** (e2.displayLevel - t3.key.level) : t3.resolution / e2.state.resolution, { symbolTileSize: r2 } = t3.symbolizerParameters;
    return [r2 / (Math.round((t3.width - t3.offset[0]) / r2) * r2) / a2, r2 / (Math.round((t3.height - t3.offset[1]) / r2) * r2) / a2];
  }
}
class f2 extends i$2 {
  constructor(t3 = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = true, this.coordScale = [1, 1], this.height = null, this.key = null, this.offset = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.vaoData = null, this.width = null, this.source = t3;
  }
  destroy() {
    null != this.vaoData && (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t3) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t3) && (this._symbolizerParameters = t3, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t3) {
    this._source = t3, this.invalidateVAO();
  }
  invalidateVAO() {
    this._vaoInvalidated || null == this.vaoData || (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null, this._vaoInvalidated = true, this.requestRender());
  }
  updateVectorFieldVAO(t3) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = false, null != this.source && null == this.vaoData) {
        const { style: e2 } = this.symbolizerParameters;
        switch (e2) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const e3 = U(this.source, this.symbolizerParameters), s2 = this._createVectorFieldVAO(t3.context, e3);
              this.vaoData = { magdir: s2 };
            }
            break;
          case "simple_scalar":
            {
              const e3 = _$2(this.source, this.symbolizerParameters), s2 = this._createVectorFieldVAO(t3.context, e3);
              this.vaoData = { scalar: s2 };
            }
            break;
          case "wind_speed": {
            const e3 = U(this.source, this.symbolizerParameters), s2 = this._createVectorFieldVAO(t3.context, e3), a2 = _$2(this.source, this.symbolizerParameters), r2 = this._createVectorFieldVAO(t3.context, a2);
            this.vaoData = { magdir: s2, scalar: r2 };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { dvs: e$2() };
  }
  setTransform(i2) {
    const l2 = r$1(this.transforms.dvs), [n2, c4] = i2.toScreenNoRotation([0, 0], [this.x, this.y]), h2 = this.resolution / this.pixelRatio / i2.resolution, m2 = h2 * this.width, u2 = h2 * this.height, d4 = Math.PI * this.rotation / 180;
    M$1(l2, l2, t$5(n2, c4)), M$1(l2, l2, t$5(m2 / 2, u2 / 2)), h$5(l2, l2, -d4), M$1(l2, l2, t$5(-m2 / 2, -u2 / 2)), b$1(l2, l2, t$5(m2, u2)), i$3(this.transforms.dvs, i2.displayViewMat3, l2);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t3, e2) {
    const { vertexData: s2, indexData: a2 } = e2, r2 = h$4.createVertex(t3, F.STATIC_DRAW, new Float32Array(s2)), i2 = h$4.createIndex(t3, F.STATIC_DRAW, new Uint32Array(a2)), o2 = ee("vector-field", { geometry: [{ location: 0, name: "a_pos", count: 2, type: C.FLOAT, normalized: false }, { location: 1, name: "a_offset", count: 2, type: C.FLOAT, normalized: false }, { location: 2, name: "a_vv", count: 2, type: C.FLOAT, normalized: false }] });
    return { vao: new f$6(t3, o2.attributes, o2.bufferLayouts, { geometry: r2 }, i2), elementCount: a2.length };
  }
}
export {
  d3 as d,
  f2 as f,
  h
};
