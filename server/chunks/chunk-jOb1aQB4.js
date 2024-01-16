import { d1 as o$4, At as t$1, eq as t$2, mY as r$1, aq as has, tJ as n$3, tK as c$2, tL as e, rZ as M, tI as i$3, wK as e$1, hV as r$2, hW as R, hX as E$1, b as e$2, f as f$2, Au as t$3, h as h$4, i3 as F, bY as T$1, b7 as C$1, b1 as s$3, mZ as n$4, yD as w, Av as ze, Aw as qe, eQ as n$5, hU as e$4, i5 as O$1, n9 as I, kO as n$6, eP as o$6, wn as l$4, i1 as f$3, i2 as h$5, h$ as M$1, sL as r$4, sN as r$5, Ax as t$4, qr as Q, tt as E, tu as F$1, tC as L, Ay as L$1, Az as t$5, AA as i$4, uF as t$6, hY as C, AB as M$2, AC as o$7, kR as e$5, eA as D, E as E$2, AD as i$5, AE as B, AF as _$3, qs as R$1, kS as G, kT as U, T as T$2, h8 as u$4, c8 as E$3, c9 as S$1, AG as p, i as i$6, kL as w$1, q7 as h$6, o7 as r$7, kN as N, AH as e$6, q2 as v, aM as s$4, kr as l$5, AI as n$8, AJ as P, AK as w$2, AL as s$5, hT as i$9, mz as e$7, bD as u$5, em as e$8, bJ as d$1, bn as P$1, eY as i$a, el as d$2, AM as s$6, a$ as j$2, AN as m$2, AO as Pt } from "./chunk-KFNcxJaF.js";
import { i as i$7 } from "./chunk-j9e9MSVv.js";
import { i as i$8 } from "./chunk-anoehU8Z.js";
import { o as o$8 } from "./chunk-0VrCKcMu.js";
import { e as e$3, r as r$3, t as t$7, a as r$6, m as m$1, J, n as n$7, b as t$8, c as a$2 } from "./chunk-Vy6X02jp.js";
import { d, y } from "./chunk-Vy6X02jp.js";
import { o as o$5 } from "./chunk-_vc6r2eV.js";
import { r } from "./chunk-pNUePs4Z.js";
import { i } from "./chunk-HuS-BxAR.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Zlv3z8RW.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-GcIahY26.js";
import "./chunk-W2fbhL5l.js";
import "./chunk-xi0IQ6PQ.js";
import "./chunk-DicJw-UR.js";
import "./chunk-b7K892Yv.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-jrhFla2W.js";
import "./chunk-KMgzOHQd.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-IbXsXbhF.js";
import "./chunk-E-M87tOH.js";
import "./chunk-_ABw_62H.js";
let l$3 = class l {
  constructor(a2) {
    this.events = new o$4(), this._hasMajorPerformanceCaveat = false, this._lastRenderFrameCounter = 0, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("style", "width: 100%; height:100%; display:block; willChange:transform");
    const r3 = { failIfMajorPerformanceCaveat: true, alpha: true, antialias: false, depth: true, stencil: true };
    a2.appendChild(this._canvas);
    let i4 = t$1("2d", this._canvas, r3);
    i4 || (i4 = t$1("2d", this._canvas, { ...r3, failIfMajorPerformanceCaveat: false }), this._hasMajorPerformanceCaveat = true), this._gl = i4, this._handles = t$2([r$1(this._canvas, "webglcontextlost", (e2) => this.events.emit("webgl-context-lost", e2))]);
  }
  destroy() {
    this._canvas.parentNode?.removeChild(this._canvas), this._canvas = null, this._handles.remove(), this._gl = null;
  }
  get gl() {
    return this._gl;
  }
  render(e2, t2) {
    if (this._hasMajorPerformanceCaveat || has("esri-force-performance-mode")) {
      if (++this._lastRenderFrameCounter >= has("esri-performance-mode-frames-between-render") && (t2(), this._lastRenderViewState = e2.state.clone(), this._lastRenderFrameCounter = 0), this._lastRenderViewState) {
        const [t3, s3, a2, r3, i4, n3] = this._computeViewTransform(this._lastRenderViewState, e2.state);
        this._canvas.style.transform = `matrix(${t3}, ${s3}, ${a2}, ${r3}, ${i4}, ${n3})`;
      }
    } else
      t2();
  }
  resize(e2) {
    const t2 = this._canvas, s3 = t2.style, { state: { size: a2 }, pixelRatio: r3 } = e2, i4 = a2[0], n3 = a2[1], o3 = Math.round(i4 * r3), h4 = Math.round(n3 * r3);
    t2.width === o3 && t2.height === h4 || (t2.width = o3, t2.height = h4), s3.width = i4 + "px", s3.height = n3 + "px";
  }
  _computeViewTransform(e$22, t2) {
    const [s3, c3] = e$22.center, [l4, m2] = t2.center, [d3, f3] = e$22.toScreen([0, 0], l4, m2), [_3, v2] = e$22.toScreen([0, 0], s3, c3), p2 = _3 - d3, u3 = v2 - f3, w2 = e$22.scale / t2.scale, g = t2.rotation - e$22.rotation, j3 = e$1();
    return n$3(j3), c$2(j3, j3, [w2, w2]), e(j3, j3, M(g)), i$3(j3, j3, [p2, u3]), j3;
  }
};
let _$2 = class _ {
  constructor() {
    this._initialized = false;
  }
  dispose() {
    this._program = r$2(this._program), this._vertexArrayObject = r$2(this._vertexArrayObject);
  }
  render(r3, t2, e2, i4) {
    r3 && (this._initialized || this._initialize(r3), r3.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), r3.bindVAO(this._vertexArrayObject), r3.useProgram(this._program), t2.setSamplingMode(e2), r3.bindTexture(t2, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", i4), r3.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), r3.bindTexture(null, 0), r3.bindVAO());
  }
  _initialize(r3) {
    if (this._initialized)
      return true;
    const s3 = e$2(r3, e$3);
    if (!s3)
      return false;
    const o3 = new Int8Array(16);
    o3[0] = -1, o3[1] = -1, o3[2] = 0, o3[3] = 0, o3[4] = 1, o3[5] = -1, o3[6] = 1, o3[7] = 0, o3[8] = -1, o3[9] = 1, o3[10] = 0, o3[11] = 1, o3[12] = 1, o3[13] = 1, o3[14] = 1, o3[15] = 1;
    const _3 = e$3.attributes, p2 = new f$2(r3, _3, t$3, { geometry: h$4.createVertex(r3, F.STATIC_DRAW, o3) });
    return this._program = s3, this._vertexArrayObject = p2, this._initialized = true, true;
  }
};
const t = (e2) => e2 === T$1.HITTEST || e2 === T$1.LABEL_ALPHA, a$1 = (e2) => (t(e2) ? 1 : 0) | (e2 === T$1.HIGHLIGHT ? 2 : 0), s$2 = ({ rendererInfo: r3, drawPhase: e2 }, t2, s3) => `${t2.getVariationHash()}-${a$1(e2)}-${r3.getVariationHash()}-${null != s3 && s3.join(".")}`, o$3 = (e2, a2, s3, o3 = {}) => {
  if (o3 = { ...o3, ...a2.getVariation(), ...e2.rendererInfo.getVariation(), highlight: e2.drawPhase === T$1.HIGHLIGHT, id: t(e2.drawPhase) }, null != s3)
    for (const r3 of s3)
      o3[r3] = true;
  return o3;
};
let i$2 = class i2 {
  constructor(r3) {
    this._rctx = r3, this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((r3) => r3.dispose()), this._programByKey.clear();
  }
  getProgram(r3, t2 = []) {
    const a2 = r3.vsPath + "." + r3.fsPath + JSON.stringify(t2);
    if (this._programByKey.has(a2))
      return this._programByKey.get(a2);
    const s3 = { ...t2.map((r4) => "string" == typeof r4 ? { name: r4, value: true } : r4).reduce((r4, e2) => ({ ...r4, [e2.name]: e2.value }), {}) }, { vsPath: o3, fsPath: i4, attributes: h4 } = r3, n3 = o$5(o3, i4, h4, s3), g = this._rctx.programCache.acquire(n3.shaders.vertexShader, n3.shaders.fragmentShader, n3.attributes);
    if (!g)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(a2, g), g;
  }
  getMaterialProgram(r3, t2, a2, i4, h4) {
    const n3 = s$2(r3, t2, h4);
    if (this._programByKey.has(n3))
      return this._programByKey.get(n3);
    const g = o$3(r3, t2, h4, { ignoresSamplerPrecision: r3.context.driverTest.ignoresSamplerPrecision.result }), m2 = o$5(a2, a2, i4, g), y2 = this._rctx.programCache.acquire(m2.shaders.vertexShader, m2.shaders.fragmentShader, m2.attributes);
    if (!y2)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(n3, y2), y2;
  }
};
let n$2 = class n {
  constructor(e2, t2) {
    this._queue = [], this._context = e2, this._refreshable = t2;
  }
  destroy() {
    this._queue = [];
  }
  enqueueTextureUpdate(o3, n3) {
    const h4 = C$1(), i4 = o3, a2 = qe, c3 = Math.ceil(i4.height / a2);
    if (s$3(n3), this._context.type === n$4.WEBGL1)
      this._queue.push({ type: "no-chunk", request: o3, resolver: h4, options: n3 });
    else
      for (let e2 = 0; e2 < c3; e2++) {
        const t2 = e2 * a2, s3 = e2 === c3 - 1, u3 = s3 ? i4.height - a2 * e2 : a2;
        this._queue.push({ type: "chunk", request: o3, resolver: h4, chunk: e2, chunkOffset: t2, destHeight: u3, chunkIsLast: s3, options: n3 });
      }
    return w(n3, (e2) => h4.reject(e2)), h4.promise;
  }
  upload() {
    let e2 = 0;
    for (; this._queue.length; ) {
      const t2 = performance.now(), s3 = this._queue.shift();
      if (s3) {
        if (null != s3.options.signal && s3.options.signal.aborted)
          continue;
        switch (s3.type) {
          case "chunk":
            this._uploadChunk(s3);
            break;
          case "no-chunk":
            this._uploadNoChunk(s3);
        }
        const u3 = performance.now() - t2;
        if (e2 += u3, e2 + u3 >= ze)
          break;
      }
    }
    this._queue.length && this._refreshable.requestRender();
  }
  _uploadChunk(e2) {
    const { request: t2, resolver: s3, chunkOffset: o3, chunkIsLast: u3, destHeight: r3 } = e2, { data: n3, texture: h4, width: i4 } = t2;
    null != n3 && (h4.updateData(0, 0, o3, i4, r3, n3, o3), u3 && s3.resolve());
  }
  _uploadNoChunk(e2) {
    const { request: t2, resolver: s3 } = e2, { data: o3, texture: u3 } = t2;
    u3.setData(o3), s3.resolve();
  }
};
const u$3 = r$4(-0.5, -0.5);
let f$1 = class f {
  constructor() {
    this._centerNdc = n$5(), this._pxToNdc = n$5(), this._worldDimensionsPx = n$5(), this._mat3 = e$4(), this._initialized = false;
  }
  dispose() {
    this._program = r$2(this._program), this._quad = r$2(this._quad);
  }
  render(t2, s3, i4) {
    const { context: e2 } = t2, r3 = this._updateGeometry(t2, i4);
    if (null != s3) {
      const { r: t3, g: i5, b: r4, a: o3 } = s3;
      e2.setClearColor(o3 * t3 / 255, o3 * i5 / 255, o3 * r4 / 255, o3);
    } else
      e2.setClearColor(0, 0, 0, 0);
    if (e2.setStencilFunction(O$1.ALWAYS, 0, 255), e2.setStencilWriteMask(255), !r3)
      return e2.setClearStencil(1), void e2.clear(e2.gl.STENCIL_BUFFER_BIT | e2.gl.COLOR_BUFFER_BIT);
    e2.setClearStencil(0), e2.clear(e2.gl.STENCIL_BUFFER_BIT | e2.gl.COLOR_BUFFER_BIT), this._initialized || this._initialize(e2), e2.setDepthWriteEnabled(false), e2.setDepthTestEnabled(false), e2.setColorMask(false, false, false, false), e2.setBlendingEnabled(false), e2.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), e2.setStencilFunction(O$1.ALWAYS, 1, 255), e2.setStencilTestEnabled(true), e2.useProgram(this._program), this._program.setUniformMatrix3fv("u_worldExtent", this._mat3), this._quad.draw(), this._quad.unbind();
  }
  _initialize(t2) {
    if (this._initialized)
      return;
    const s3 = e$2(t2, r$3);
    s3 && (this._program = s3, this._quad = new n$6(t2, [0, 0, 1, 0, 0, 1, 1, 1]), this._initialized = true);
  }
  _updateGeometry(t2, a2) {
    const { state: n3, pixelRatio: h4 } = t2, { size: l4, rotation: m2 } = n3, _3 = Math.round(l4[0] * h4), d3 = Math.round(l4[1] * h4);
    if (!n3.spatialReference.isWrappable)
      return false;
    const p2 = r$5(m2), f3 = Math.abs(Math.cos(p2)), g = Math.abs(Math.sin(p2)), E2 = Math.round(_3 * f3 + d3 * g), S = Math.round(n3.worldScreenWidth);
    if (E2 <= S)
      return false;
    const b = _3 * g + d3 * f3, x2 = S * h4, C2 = (a2.left - a2.right) * h4 / _3, T2 = (a2.bottom - a2.top) * h4 / d3;
    o$6(this._worldDimensionsPx, x2, b, 1), o$6(this._pxToNdc, 2 / _3, -2 / d3, 1), o$6(this._centerNdc, C2, T2, 1);
    const j3 = this._mat3;
    return l$4(j3, this._centerNdc), f$3(j3, j3, this._pxToNdc), 0 !== m2 && h$5(j3, j3, p2), f$3(j3, j3, this._worldDimensionsPx), M$1(j3, j3, u$3), true;
  }
};
let s$1 = class s extends t$4 {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(t2, r3) {
    if (!r3?.size)
      return;
    const { context: a2, renderingOptions: s3 } = t2;
    this._quad || (this._quad = new n$6(a2, [0, 0, 1, 0, 0, 1, 1, 1]));
    const o3 = a2.getBoundFramebufferObject(), { x: n3, y: u3, width: m2, height: d3 } = a2.getViewport();
    r3.bindTextures(a2);
    const f3 = r3.getBlock(Q);
    if (null == f3)
      return;
    const c3 = f3.getFBO(a2), l4 = f3.getFBO(a2, 1);
    a2.setViewport(0, 0, r3.size, r3.size), this._computeDelta(t2, l4, s3.labelsAnimationTime), this._updateAnimationState(t2, l4, c3), a2.bindFramebuffer(o3), a2.setViewport(n3, u3, m2, d3);
  }
  _computeDelta(e2, i4, a2) {
    const { context: s3, painter: o3, displayLevel: n3 } = e2, u3 = o3.materialManager.getProgram(this._desc, ["delta"]);
    s3.bindFramebuffer(i4), s3.setClearColor(0, 0, 0, 0), s3.clear(s3.gl.COLOR_BUFFER_BIT), s3.useProgram(u3);
    const m2 = has("featurelayer-animation-enabled") ? a2 : 1;
    u3.setUniform1i("u_maskTexture", E), u3.setUniform1i("u_sourceTexture", F$1), u3.setUniform1f("u_timeDelta", e2.deltaTime), u3.setUniform1f("u_animationTime", m2), u3.setUniform1f("u_zoomLevel", Math.round(10 * n3)), this._quad.draw();
  }
  _updateAnimationState(e2, t2, r3) {
    const { context: i4, painter: a2 } = e2, s3 = a2.materialManager.getProgram(this._desc, ["update"]);
    i4.bindTexture(t2.colorTexture, 1), i4.useProgram(s3), s3.setUniform1i("u_sourceTexture", 1), i4.bindFramebuffer(r3), i4.setClearColor(0, 0, 0, 0), i4.clear(i4.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
};
class s2 extends t$4 {
  constructor(e2) {
    super(), this.name = this.constructor.name, this.defines = [e2];
  }
  dispose() {
  }
  bind({ context: e2, painter: t2 }) {
    this._prev = e2.getBoundFramebufferObject();
    const s3 = t2.getFbos().effect0;
    e2.bindFramebuffer(s3), e2.setColorMask(true, true, true, true), e2.setClearColor(0, 0, 0, 0), e2.clear(e2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e2, s3) {
    const { context: r3, painter: o3 } = e2, n3 = o3.getPostProcessingEffects(s3), c3 = r3.getBoundFramebufferObject();
    for (const { postProcessingEffect: t2, effect: f3 } of n3)
      t2.draw(e2, c3, f3);
    r3.bindFramebuffer(this._prev), r3.setStencilTestEnabled(false), o3.blitTexture(r3, c3.colorTexture, L.NEAREST), r3.setStencilTestEnabled(true);
  }
}
let c$1 = class c {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e2, i4) {
    e2.bindTexture(i4, L$1), e2.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", t$5), e2.bindVAO(this._resources.quadVAO), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  finalBlur(e2, s3) {
    e2.bindTexture(s3, L$1), e2.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", i$4), e2.bindVAO(this._resources.quadVAO), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  renderHighlight(e2, s3, i4) {
    e2.bindTexture(s3, L$1), e2.useProgram(this._resources.highlightProgram), i4.applyHighlightOptions(e2, this._resources.highlightProgram), e2.bindVAO(this._resources.quadVAO), e2.setBlendingEnabled(true), e2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  _initialize(s3, i4, a2) {
    this._width = i4, this._height = a2;
    const m2 = h$4.createVertex(s3, F.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), c3 = new f$2(s3, /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new t$6("a_position", 2, C.BYTE, 0, 4), new t$6("a_texcoord", 2, C.UNSIGNED_BYTE, 2, 4)] }, { geometry: m2 }), f3 = e$2(s3, t$7), b = e$2(s3, r$6);
    s3.useProgram(f3), f3.setUniform1i("u_texture", L$1), f3.setUniform1i("u_shade", M$2), f3.setUniform1f("u_sigma", o$7), s3.useProgram(b), b.setUniform1i("u_texture", L$1), b.setUniform1f("u_sigma", o$7), this._resources = { quadGeometry: m2, quadVAO: c3, highlightProgram: f3, blurProgram: b };
  }
  setup(r3, e2, s3) {
    this._resources ? (this._width = e2, this._height = s3) : this._initialize(r3, e2, s3);
  }
};
function i$1(i4, h4, u3) {
  const l4 = new e$5(h4, u3);
  return l4.wrapMode = D.CLAMP_TO_EDGE, new E$2(i4, l4, new i$5(B.STENCIL_INDEX8, h4, u3));
}
let h$3 = class h {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(r3, e2, s3) {
    this._width = e2, this._height = s3;
    const t2 = i$1(r3, e2, s3), o3 = i$1(r3, e2, s3);
    this._resources = { sharedBlur1Fbo: t2, sharedBlur2Fbo: o3 };
  }
  setup(r3, e2, s3) {
    !this._resources || this._width === e2 && this._height === s3 || this.dispose(), this._resources || this._initialize(r3, e2, s3);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Fbo.colorTexture;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Fbo.colorTexture;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
};
const h$2 = 4, d2 = 4 / h$2;
let l$2 = class l2 extends t$4 {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new c$1(), this._width = void 0, this._height = void 0, this._boundFBO = null, this._hlSurfaces = new h$3(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new _$2();
  }
  dispose() {
    this._hlSurfaces?.dispose(), this._hlRenderer?.dispose(), this._boundFBO = null;
  }
  bind(e2) {
    const { context: t2, painter: s3 } = e2, { width: r3, height: i4 } = t2.getViewport(), h4 = s3.getFbos().effect0;
    this.setup(e2, r3, i4), t2.bindFramebuffer(h4), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e2 }, t2, s3) {
    this._width = t2, this._height = s3;
    const r3 = t2 % h$2, i4 = s3 % h$2;
    t2 += r3 < h$2 / 2 ? -r3 : h$2 - r3, s3 += i4 < h$2 / 2 ? -i4 : h$2 - i4, this._adjustedWidth = t2, this._adjustedHeight = s3, this._boundFBO = e2.getBoundFramebufferObject();
    const l4 = Math.round(t2 * d2), o3 = Math.round(s3 * d2);
    this._hlRenderer.setup(e2, l4, o3), this._hlSurfaces.setup(e2, l4, o3);
  }
  draw(e2) {
    const { context: t2, highlightGradient: s3 } = e2;
    if (!s3)
      return;
    const r3 = t2.getBoundFramebufferObject();
    t2.setViewport(0, 0, this._adjustedWidth * d2, this._adjustedHeight * d2), t2.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t2.setStencilTestEnabled(false), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(t2, r3.colorTexture, L.NEAREST, 1), t2.setStencilTestEnabled(false), t2.setBlendingEnabled(false), t2.setColorMask(false, false, false, true), t2.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(t2, this._hlSurfaces.sharedBlur1Tex), t2.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(t2, this._hlSurfaces.sharedBlur2Tex), t2.bindFramebuffer(this._boundFBO), t2.setBlendingEnabled(true), t2.setColorMask(true, true, true, true), t2.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(t2, this._hlSurfaces.sharedBlur1Tex, s3), this._boundFBO = null;
  }
};
let o$2 = class o extends t$4 {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    null != this._fbo && this._fbo.dispose();
  }
  createOptions({ pixelRatio: e2 }, i4, s3 = _$3) {
    if (!i4.length)
      return null;
    const r3 = i4.shift(), o3 = r3.x, n3 = r3.y;
    return this._outstanding = r3, { type: "hittest", distance: s3 * e2, position: [o3, n3] };
  }
  bind(t2) {
    const { context: i4, attributeView: s3 } = t2;
    if (!s3.size)
      return;
    const r3 = s3.getBlock(R$1);
    if (null == r3)
      return;
    const o3 = r3.getFBO(i4);
    i4.setViewport(0, 0, s3.size, s3.size), i4.bindFramebuffer(o3), i4.setColorMask(true, true, true, true), i4.setClearColor(0, 0, 0, 0), i4.clear(i4.gl.COLOR_BUFFER_BIT | i4.gl.DEPTH_BUFFER_BIT);
  }
  unbind(t2) {
  }
  draw(t2) {
    if (null == this._outstanding)
      return;
    const e2 = this._outstanding;
    this._outstanding = null, this._resolve(t2, e2.resolvers);
  }
  async _resolve(t2, i4) {
    const { context: o3, attributeView: n3 } = t2, c3 = n3.getBlock(R$1);
    if (null == c3)
      return void i4.forEach((t3) => t3.resolve([]));
    const l4 = c3.getFBO(o3), d3 = new Uint8Array(l4.width * l4.height * 4);
    try {
      await l4.readPixelsAsync(0, 0, l4.width, l4.height, G.RGBA, U.UNSIGNED_BYTE, d3);
    } catch (u3) {
      return void i4.forEach((t3) => t3.resolve([]));
    }
    const a2 = [];
    for (let e2 = 0; e2 < d3.length; e2 += 4) {
      const t3 = d3[e2], i5 = d3[e2 + 3];
      t3 && a2.push({ id: e2 / 4, directHits: i5 });
    }
    a2.sort((t3, e2) => e2.directHits === t3.directHits ? e2.id - t3.id : e2.directHits - t3.directHits);
    const h4 = a2.map((t3) => t3.id);
    i4.forEach((t3) => t3.resolve(h4));
  }
};
class r2 extends t$4 {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0, this._boundFBO = null;
  }
  dispose() {
    null != this._fbo && this._fbo.dispose();
  }
  bind({ context: t2, painter: e2 }) {
    this._boundFBO = t2.getBoundFramebufferObject();
    const s3 = e2.getFbos().effect0;
    t2.bindFramebuffer(s3), t2.setColorMask(true, true, true, true), t2.setClearColor(0, 0, 0, 0), t2.clear(t2.gl.COLOR_BUFFER_BIT);
  }
  unbind({ context: t2 }) {
    t2.bindFramebuffer(this._boundFBO), this._boundFBO = null;
  }
  draw(e2, s3, o3 = 2 * _$3) {
    this._resolve(e2, s3, o3);
  }
  async _resolve({ context: t2, state: e2, pixelRatio: r3 }, i4, n3) {
    const f3 = t2.getBoundFramebufferObject(), a2 = e2.size[1] * r3, u3 = Math.round(n3 * r3), h4 = u3 / 2, l4 = u3 / 2;
    this._ensureBuffer(u3), i4.forEach(async (t3, e3) => {
      const n4 = /* @__PURE__ */ new Map(), b = Math.floor(e3.x * r3 - u3 / 2), c3 = Math.floor(a2 - e3.y * r3 - u3 / 2);
      await f3.readPixelsAsync(b, c3, u3, u3, G.RGBA, U.UNSIGNED_BYTE, this._buf);
      for (let s3 = 0; s3 < this._buf32.length; s3++) {
        const t4 = this._buf32[s3];
        if (4294967295 !== t4 && 0 !== t4) {
          const e4 = s3 % u3, o3 = u3 - Math.floor(s3 / u3), r4 = (h4 - e4) * (h4 - e4) + (l4 - o3) * (l4 - o3), i5 = n4.has(t4) ? n4.get(t4) : 4294967295;
          n4.set(t4, Math.min(r4, i5));
        }
      }
      const _3 = Array.from(n4).sort((t4, e4) => t4[1] - e4[1]).map((t4) => t4[0]);
      t3.resolve(_3), i4.delete(e3);
    });
  }
  _ensureBuffer(t2) {
    this._lastSize !== t2 && (this._lastSize = t2, this._buf = new Uint8Array(4 * t2 * t2), this._buf32 = new Uint32Array(this._buf.buffer));
  }
}
const a = 5, u$2 = [1, 0], l$1 = [0, 1], m = [1, 0.8, 0.6, 0.4, 0.2], _$1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let h$1 = class h2 {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(a), this._nMips = a, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad = r$2(this._quad), this._intensityFBO = r$2(this._intensityFBO), this._compositeFBO = r$2(this._compositeFBO), this._mipsFBOs) {
      for (let t2 = 0; t2 < this._nMips; t2++)
        this._mipsFBOs[t2] && (this._mipsFBOs[t2].horizontal.dispose(), this._mipsFBOs[t2].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(t2, i4, r3) {
    const { width: o3, height: n3 } = i4, { context: h4, painter: p2 } = t2, { materialManager: c3 } = p2, d3 = h4.gl, f3 = this._programDesc, { strength: b, radius: F2, threshold: O2 } = r3;
    this._quad || (this._quad = new n$6(h4, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(t2, o3, n3), h4.setStencilTestEnabled(false), h4.setBlendingEnabled(true), h4.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), h4.setStencilWriteMask(0);
    const B2 = this._quad;
    B2.bind(), h4.bindFramebuffer(this._intensityFBO);
    const g = c3.getProgram(f3.luminosityHighPass);
    h4.useProgram(g), h4.bindTexture(i4.colorTexture, 0), g.setUniform1i("u_texture", 0), g.setUniform3fv("u_defaultColor", [0, 0, 0]), g.setUniform1f("u_defaultOpacity", 0), g.setUniform1f("u_luminosityThreshold", O2), g.setUniform1f("u_smoothWidth", 0.01);
    const T2 = [Math.round(o3 / 2), Math.round(n3 / 2)];
    h4.setViewport(0, 0, T2[0], T2[1]), h4.setClearColor(0, 0, 0, 0), h4.clear(d3.COLOR_BUFFER_BIT), B2.draw(), h4.setBlendingEnabled(false);
    let x2 = this._intensityFBO.colorTexture;
    for (let e2 = 0; e2 < this._nMips; e2++) {
      const t3 = c3.getProgram(f3.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[e2] }]);
      h4.useProgram(t3), h4.bindTexture(x2, e2 + 1), t3.setUniform1i("u_colorTexture", e2 + 1), t3.setUniform2fv("u_texSize", T2), t3.setUniform2fv("u_direction", u$2), h4.setViewport(0, 0, T2[0], T2[1]);
      const s3 = this._mipsFBOs[e2];
      h4.bindFramebuffer(s3.horizontal), B2.draw(), x2 = s3.horizontal.colorTexture, h4.bindFramebuffer(s3.vertical), h4.bindTexture(x2, e2 + 1), t3.setUniform2fv("u_direction", l$1), B2.draw(), x2 = s3.vertical.colorTexture, T2[0] = Math.round(T2[0] / 2), T2[1] = Math.round(T2[1] / 2);
    }
    h4.setViewport(0, 0, o3, n3);
    const w2 = c3.getProgram(f3.composite, [{ name: "nummips", value: a }]);
    h4.bindFramebuffer(this._compositeFBO), h4.useProgram(w2), w2.setUniform1f("u_bloomStrength", b), w2.setUniform1f("u_bloomRadius", F2), w2.setUniform1fv("u_bloomFactors", m), w2.setUniform3fv("u_bloomTintColors", _$1), h4.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), w2.setUniform1i("u_blurTexture1", 1), h4.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), w2.setUniform1i("u_blurTexture2", 2), h4.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), w2.setUniform1i("u_blurTexture3", 3), h4.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), w2.setUniform1i("u_blurTexture4", 4), h4.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), w2.setUniform1i("u_blurTexture5", 5), B2.draw(), h4.bindFramebuffer(i4), h4.setBlendingEnabled(true);
    const M2 = c3.getProgram(f3.blit);
    h4.useProgram(M2), h4.bindTexture(this._compositeFBO.colorTexture, 6), M2.setUniform1i("u_texture", 6), h4.setBlendFunction(R.ONE, R.ONE), B2.draw(), B2.unbind(), h4.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), h4.setStencilTestEnabled(true);
  }
  _createOrResizeResources(t2, e2, s3) {
    const { context: a2 } = t2;
    if (this._compositeFBO && this._size[0] === e2 && this._size[1] === s3)
      return;
    this._size[0] = e2, this._size[1] = s3;
    const u3 = [Math.round(e2 / 2), Math.round(s3 / 2)];
    if (this._compositeFBO)
      this._compositeFBO.resize(e2, s3);
    else {
      const t3 = new e$5(e2, s3);
      t3.internalFormat = G.RGBA, t3.wrapMode = D.CLAMP_TO_EDGE, this._compositeFBO = new E$2(a2, t3);
    }
    if (this._intensityFBO)
      this._intensityFBO.resize(u3[0], u3[1]);
    else {
      const t3 = new e$5(u3[0], u3[1]);
      t3.internalFormat = G.RGBA, t3.wrapMode = D.CLAMP_TO_EDGE, this._intensityFBO = new E$2(a2, t3);
    }
    for (let l4 = 0; l4 < this._nMips; l4++) {
      if (this._mipsFBOs[l4])
        this._mipsFBOs[l4].horizontal.resize(u3[0], u3[1]), this._mipsFBOs[l4].vertical.resize(u3[0], u3[1]);
      else {
        const t3 = new e$5(u3[0], u3[1]);
        t3.internalFormat = G.RGBA, t3.wrapMode = D.CLAMP_TO_EDGE, this._mipsFBOs[l4] = { horizontal: new E$2(a2, t3), vertical: new E$2(a2, t3) };
      }
      u3[0] = Math.round(u3[0] / 2), u3[1] = Math.round(u3[1] / 2);
    }
  }
};
const n$1 = [1, 0], o$1 = [0, 1];
let u$1 = class u {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(t2, s3, r3) {
    const { context: i4 } = t2, { type: a2, radius: n3 } = r3;
    if (0 === n3)
      return;
    this._createOrResizeResources(t2), this._quad || (this._quad = new n$6(i4, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const o3 = this._quad;
    o3.bind(), "blur" === a2 ? this._gaussianBlur(t2, s3, n3) : this._radialBlur(t2, s3), o3.unbind();
  }
  _gaussianBlur(e2, s3, r3) {
    const { context: i4, state: a2, painter: u3, pixelRatio: l4 } = e2, { size: d3 } = a2, { materialManager: b } = u3, c3 = this._programDesc, _3 = this._quad, p2 = [Math.round(l4 * d3[0]), Math.round(l4 * d3[1])], h4 = this._blurFBO, m2 = b.getProgram(c3.gaussianBlur, [{ name: "radius", value: Math.ceil(r3) }]);
    i4.useProgram(m2), i4.setBlendingEnabled(false), i4.bindFramebuffer(h4), i4.bindTexture(s3.colorTexture, 4), m2.setUniform1i("u_colorTexture", 4), m2.setUniform2fv("u_texSize", p2), m2.setUniform2fv("u_direction", n$1), m2.setUniform1f("u_sigma", r3), _3.draw(), i4.bindFramebuffer(s3), i4.setStencilWriteMask(0), i4.setStencilTestEnabled(false), i4.setDepthWriteEnabled(false), i4.setDepthTestEnabled(false), i4.bindTexture(h4?.colorTexture, 5), m2.setUniform1i("u_colorTexture", 5), m2.setUniform2fv("u_direction", o$1), _3.draw(), i4.setBlendingEnabled(true), i4.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), i4.setStencilTestEnabled(true);
  }
  _radialBlur(e2, s3) {
    const { context: r3, painter: i4 } = e2, { materialManager: a2 } = i4, n3 = this._programDesc, o3 = this._quad, u3 = this._blurFBO;
    r3.bindFramebuffer(u3);
    const l4 = a2.getProgram(n3.radialBlur);
    r3.useProgram(l4), r3.setBlendingEnabled(false), r3.bindTexture(s3.colorTexture, 4), l4.setUniform1i("u_colorTexture", 4), o3.draw(), r3.bindFramebuffer(s3), r3.setStencilWriteMask(0), r3.setStencilTestEnabled(false), r3.setDepthWriteEnabled(false), r3.setDepthTestEnabled(false), r3.setBlendingEnabled(true);
    const d3 = a2.getProgram(n3.blit);
    r3.useProgram(d3), r3.bindTexture(u3?.colorTexture, 5), d3.setUniform1i("u_texture", 5), r3.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), o3.draw();
  }
  _createOrResizeResources(e2) {
    const { context: t2, state: n3, pixelRatio: o3 } = e2, { size: u3 } = n3, l4 = Math.round(o3 * u3[0]), d3 = Math.round(o3 * u3[1]);
    if (!this._blurFBO || this._size[0] !== l4 || this._size[1] !== d3)
      if (this._size[0] = l4, this._size[1] = d3, this._blurFBO)
        this._blurFBO.resize(l4, d3);
      else {
        const e3 = new e$5(l4, d3);
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, this._blurFBO = new E$2(t2, e3);
      }
  }
};
class n2 {
  constructor() {
    this._layerFBOTexture = null, this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture = r$2(this._layerFBOTexture);
  }
  draw(e2, t2, s3) {
    const { width: i4, height: o3 } = t2;
    this._createOrResizeResources(e2, i4, o3);
    const { context: a2, painter: n3 } = e2, { materialManager: c3 } = n3, l4 = this._programDesc, u3 = this._quad, _3 = s3.colorMatrix;
    u3.bind();
    const h4 = this._layerFBOTexture;
    a2.bindFramebuffer(t2), t2.copyToTexture(0, 0, i4, o3, 0, 0, h4), a2.setBlendingEnabled(false), a2.setStencilTestEnabled(false);
    const m2 = c3.getProgram(l4);
    a2.useProgram(m2), a2.bindTexture(h4, 2), m2.setUniformMatrix4fv("u_coefficients", _3), m2.setUniform1i("u_colorTexture", 2), u3.draw(), a2.setBlendingEnabled(true), a2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), a2.setStencilTestEnabled(true), u3.unbind();
  }
  _createOrResizeResources(e2, r3, n3) {
    const { context: c3 } = e2;
    if (!this._layerFBOTexture || this._size[0] !== r3 || this._size[1] !== n3) {
      if (this._size[0] = r3, this._size[1] = n3, this._layerFBOTexture)
        this._layerFBOTexture.resize(r3, n3);
      else {
        const e3 = new e$5();
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, e3.width = r3, e3.height = n3, this._layerFBOTexture = new T$2(c3, e3);
      }
      this._quad || (this._quad = new n$6(c3, [-1, -1, 1, -1, -1, 1, 1, 1]));
    }
  }
}
const u2 = [1, 0], h3 = [0, 1];
class _2 {
  constructor() {
    this._layerFBOTexture = null, this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._quad = null, this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture = r$2(this._layerFBOTexture), this._horizontalBlurFBO = r$2(this._horizontalBlurFBO), this._verticalBlurFBO = r$2(this._verticalBlurFBO);
  }
  draw(e2, i4, o3) {
    const { context: a2, state: n3, painter: l4 } = e2, { materialManager: _3 } = l4, c3 = this._programDesc, p2 = i4.width, m2 = i4.height, f3 = [Math.round(p2), Math.round(m2)], { blurRadius: B2, offsetX: d3, offsetY: b, color: O2 } = o3, F2 = [u$4(d3), u$4(b)];
    this._createOrResizeResources(e2, p2, m2, f3);
    const w2 = this._horizontalBlurFBO, T2 = this._verticalBlurFBO;
    a2.setStencilWriteMask(0), a2.setStencilTestEnabled(false), a2.setDepthWriteEnabled(false), a2.setDepthTestEnabled(false);
    const x2 = this._layerFBOTexture;
    i4.copyToTexture(0, 0, p2, m2, 0, 0, x2), this._quad || (this._quad = new n$6(a2, [-1, -1, 1, -1, -1, 1, 1, 1])), a2.setViewport(0, 0, f3[0], f3[1]);
    const g = this._quad;
    g.bind(), a2.setBlendingEnabled(false);
    const z = _3.getProgram(c3.blur, [{ name: "radius", value: Math.ceil(B2) }]);
    a2.useProgram(z), a2.bindFramebuffer(w2), a2.bindTexture(i4.colorTexture, 4), z.setUniform1i("u_colorTexture", 4), z.setUniform2fv("u_texSize", f3), z.setUniform2fv("u_direction", u2), z.setUniform1f("u_sigma", B2), g.draw(), a2.bindFramebuffer(T2), a2.bindTexture(w2?.colorTexture, 5), z.setUniform1i("u_colorTexture", 5), z.setUniform2fv("u_direction", h3), g.draw(), a2.bindFramebuffer(i4), a2.setViewport(0, 0, p2, m2);
    const M2 = _3.getProgram(c3.composite);
    a2.useProgram(M2), a2.bindTexture(T2?.colorTexture, 2), M2.setUniform1i("u_blurTexture", 2), a2.bindTexture(x2, 3), M2.setUniform1i("u_layerFBOTexture", 3), M2.setUniform4fv("u_shadowColor", [O2[3] * (O2[0] / 255), O2[3] * (O2[1] / 255), O2[3] * (O2[2] / 255), O2[3]]), M2.setUniformMatrix3fv("u_displayViewMat3", n3.displayMat3), M2.setUniform2fv("u_shadowOffset", F2), g.draw(), a2.setBlendingEnabled(true), a2.setStencilTestEnabled(true), a2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), g.unbind();
  }
  _createOrResizeResources(e2, t2, r3, s3) {
    const { context: u3 } = e2;
    if (!this._horizontalBlurFBO || this._size[0] !== t2 || this._size[1] !== r3) {
      if (this._size[0] = t2, this._size[1] = r3, this._horizontalBlurFBO)
        this._horizontalBlurFBO.resize(s3[0], s3[1]);
      else {
        const e3 = new e$5(s3[0], s3[1]);
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, this._horizontalBlurFBO = new E$2(u3, e3);
      }
      if (this._verticalBlurFBO)
        this._verticalBlurFBO.resize(s3[0], s3[1]);
      else {
        const e3 = new e$5(s3[0], s3[1]);
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, this._verticalBlurFBO = new E$2(u3, e3);
      }
      if (this._layerFBOTexture)
        this._layerFBOTexture.resize(t2, r3);
      else {
        const e3 = new e$5();
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, e3.width = t2, e3.height = r3, this._layerFBOTexture = new T$2(u3, e3);
      }
    }
  }
}
class l3 {
  constructor() {
    this._size = [0, 0], this._layerFBOTexture = null;
  }
  dispose() {
    this._layerFBOTexture = r$2(this._layerFBOTexture);
  }
  draw(e2, r3, s3) {
    const { width: i4, height: o3 } = r3;
    this._createOrResizeResources(e2, i4, o3);
    const { context: l4, painter: a2 } = e2, { amount: n3 } = s3, h4 = l4.gl, u3 = this._layerFBOTexture;
    l4.bindFramebuffer(r3), r3.copyToTexture(0, 0, i4, o3, 0, 0, u3), l4.setBlendingEnabled(true), l4.setStencilTestEnabled(false), l4.setDepthTestEnabled(false), l4.setClearColor(0, 0, 0, 0), l4.clear(h4.COLOR_BUFFER_BIT), a2.blitTexture(l4, u3, L.NEAREST, n3);
  }
  _createOrResizeResources(e2, l4, a2) {
    const { context: n3 } = e2;
    if (!this._layerFBOTexture || this._size[0] !== l4 || this._size[1] !== a2)
      if (this._size[0] = l4, this._size[1] = a2, this._layerFBOTexture)
        this._layerFBOTexture.resize(l4, a2);
      else {
        const e3 = new e$5();
        e3.internalFormat = G.RGBA, e3.wrapMode = D.CLAMP_TO_EDGE, e3.samplingMode = L.NEAREST, e3.width = l4, e3.height = a2, this._layerFBOTexture = new T$2(n3, e3);
      }
  }
}
function c2(o3) {
  switch (o3) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return o3;
    default:
      return "colorize";
  }
}
const f2 = { colorize: () => new n2(), blur: () => new u$1(), bloom: () => new h$1(), opacity: () => new l3(), "drop-shadow": () => new _2() };
class i3 {
  constructor() {
    this._effectMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._effectMap.forEach((o3) => o3.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(o3) {
    if (!o3 || 0 === o3.length)
      return [];
    const e2 = [];
    for (const t2 of o3) {
      const o4 = c2(t2.type);
      let s3 = this._effectMap.get(o4);
      s3 || (s3 = f2[o4](), this._effectMap.set(o4, s3)), e2.push({ postProcessingEffect: s3, effect: t2 });
    }
    return e2;
  }
}
class o2 {
  constructor(e2, r3) {
    this.brushes = e2, this.name = r3.name, this.drawPhase = r3.drawPhase || T$1.MAP, this._targetFn = r3.target, this.effects = r3.effects || [], this.enableDefaultDraw = r3.enableDefaultDraw ?? (() => true), this.forceDrawByDisplayOrder = !!r3.forceDrawByDisplayOrder;
  }
  render(e2) {
    const { context: t2, profiler: r3 } = e2, s3 = this._targetFn(), n3 = this.drawPhase & e2.drawPhase;
    if (r3.recordPassStart(this.name), n3) {
      this.enableDefaultDraw() && this._doRender(e2, s3), r3.recordPassEnd();
      for (const r4 of this.effects) {
        if (!r4.enable())
          continue;
        const n4 = r4.apply, o3 = r4.args?.(), a2 = t2.getViewport(), i4 = t2.getBoundFramebufferObject(), f3 = e2.passOptions;
        this._bindEffect(e2, n4, o3), this._doRender(e2, s3, n4.defines), this._drawAndUnbindEffect(e2, n4, a2, i4, f3, o3);
      }
    }
  }
  _doRender(e2, t2, o3) {
    if (null == t2)
      return;
    const { profiler: a2, context: i4 } = e2;
    if (this.forceDrawByDisplayOrder) {
      for (const r3 of this.brushes) {
        if (a2.recordBrushStart(r3.name), null != r3.brushEffect) {
          const s3 = i4.getViewport(), n3 = i4.getBoundFramebufferObject(), a3 = e2.passOptions;
          this._bindEffect(e2, r3.brushEffect), this._drawWithBrush(r3, e2, t2, o3), this._drawAndUnbindEffect(e2, r3.brushEffect, s3, n3, a3);
        } else
          this._drawWithBrush(r3, e2, t2, o3);
        a2.recordBrushEnd();
      }
      const f3 = t2, c3 = e2;
      c3.attributeView.bindTextures(e2.context);
      for (const e3 of f3) {
        if (!e3.visible)
          continue;
        e3.commit(c3), c3.context.setStencilFunction(O$1.EQUAL, e3.stencilRef, 255);
        const t3 = e3.getGeometry(E$3.MARKER), a3 = e3.getGeometry(E$3.TEXT);
        if (t3?.records && a3?.records) {
          const n3 = /* @__PURE__ */ new Map(), i5 = t3.records.getCursor();
          for (; i5.next(); )
            n3.set(i5.id, [i5.getDrawInfo(t3, E$3.MARKER)]);
          const f4 = a3.records.getCursor();
          for (; f4.next(); ) {
            const e4 = n3.get(f4.id), t4 = f4.getDrawInfo(a3, E$3.TEXT);
            e4 ? e4.push(t4) : n3.set(f4.id, [t4]);
          }
          const d3 = Array.from(n3.entries()).sort(([e4, t4], [r3, s3]) => r3 - e4);
          for (const [t4, r3] of d3)
            for (const n4 of r3) {
              const t5 = c3.painter.getBrush(n4.geometryType, S$1.DEFAULT);
              t5.prepareState(c3, o3), t5.drawGeometry(c3, e3, n4, o3);
            }
        } else if (t3) {
          const n3 = c3.painter.getBrush(E$3.MARKER, S$1.DEFAULT);
          n3.prepareState(c3, o3), t3.forEachCommand((t4) => {
            n3.drawGeometry(c3, e3, t4, o3);
          });
        } else if (a3) {
          const t4 = c3.painter.getBrush(E$3.TEXT, S$1.DEFAULT);
          t4.prepareState(c3, o3), a3.forEachCommand((r3) => {
            t4.drawGeometry(c3, e3, r3, o3);
          });
        }
      }
    } else
      for (const r3 of this.brushes) {
        if (a2.recordBrushStart(r3.name), null != r3.brushEffect) {
          const s3 = i4.getViewport(), n3 = i4.getBoundFramebufferObject(), a3 = e2.passOptions;
          this._bindEffect(e2, r3.brushEffect), this._drawWithBrush(r3, e2, t2, o3), this._drawAndUnbindEffect(e2, r3.brushEffect, s3, n3, a3);
        } else
          this._drawWithBrush(r3, e2, t2, o3);
        a2.recordBrushEnd();
      }
  }
  _drawWithBrush(t2, r3, s3, n3) {
    p(s3) ? (t2.prepareState(r3, n3), t2.drawMany(r3, s3, n3)) : s3.visible && (t2.prepareState(r3, n3), t2.draw(r3, s3, n3));
  }
  _bindEffect(e2, t2, r3) {
    const { profiler: s3 } = e2;
    s3.recordPassStart(this.name + "." + t2.name), t2.bind(e2, r3);
    const n3 = t2.createOptions(e2, r3);
    e2.passOptions = n3;
  }
  _drawAndUnbindEffect(e2, t2, r3, s3, n3, o3) {
    const { profiler: a2, context: i4 } = e2;
    e2.passOptions = n3, a2.recordBrushStart(t2.name), t2.draw(e2, o3), t2.unbind(e2, o3), i4.bindFramebuffer(s3);
    const { x: f3, y: c3, width: d3, height: h4 } = r3;
    i4.setViewport(f3, c3, d3, h4), a2.recordBrushEnd(), a2.recordPassEnd();
  }
}
function O(e2, s3) {
  switch (e2) {
    case E$3.LINE:
      return w$1.line;
    case E$3.TEXT:
      return w$1.text;
    case E$3.LABEL:
      return w$1.label;
    case E$3.FILL:
      return s3 === S$1.DOT_DENSITY ? w$1.dotDensity : w$1.fill;
    case E$3.MARKER:
      switch (s3) {
        case S$1.HEATMAP:
          return w$1.heatmap;
        case S$1.PIE_CHART:
          return w$1.pieChart;
        default:
          return w$1.marker;
      }
  }
}
let j$1 = class j {
  constructor(e2, t2, i$12) {
    this.context = e2, this._blitRenderer = new _$2(), this._worldExtentRenderer = new f$1(), this._brushCache = /* @__PURE__ */ new Map(), this._lastWidth = null, this._lastHeight = null, this._vtlMaterialManager = new o$8(), this._blendEffect = new m$1(), this._stencilBuf = null, this._prevBeforeLayerFBOStack = [], this._fboPool = [], this.effects = { highlight: new l$2(), hittest: new o$2(), hittestVTL: new r2(), integrate: new s$1(), insideEffect: new s2("inside"), outsideEffect: new s2("outside") }, this.materialManager = new i$2(e2), this.textureManager = new J(t2, i$12, e2.type === n$4.WEBGL2), this.textureUploadManager = new n$2(e2, t2), this._effectsManager = new i3();
  }
  dispose() {
    if (this.materialManager.dispose(), this.textureManager.dispose(), this.textureUploadManager.destroy(), this._blitRenderer = r$2(this._blitRenderer), this._worldExtentRenderer = r$2(this._worldExtentRenderer), this._brushCache && (this._brushCache.forEach((e2) => e2.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos) {
      let e2;
      for (e2 in this._fbos)
        this._fbos[e2] && this._fbos[e2].dispose();
    }
    for (const e2 of this._fboPool)
      e2.dispose();
    if (this._fboPool.length = 0, this.effects) {
      let e2;
      for (e2 in this.effects)
        this.effects[e2] && this.effects[e2].dispose();
    }
    this._effectsManager.dispose(), this._blendEffect.dispose(this.context), this._vtlMaterialManager = r$2(this._vtlMaterialManager);
  }
  get blitRenderer() {
    return this._blitRenderer;
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getFbos() {
    if (!this._fbos)
      throw new Error("InternalError: Painter FBOs not initialized");
    return this._fbos;
  }
  acquireFbo(e2, t2) {
    let s3;
    if (this._fboPool.length > 0)
      s3 = this._fboPool.pop();
    else {
      const r3 = new e$5(e2, t2);
      r3.samplingMode = L.NEAREST, r3.wrapMode = D.CLAMP_TO_EDGE, s3 = new E$2(this.context, r3, this._stencilBuf);
    }
    return s3.width === e2 && s3.height === t2 || s3.resize(e2, t2), s3;
  }
  releaseFbo(e2) {
    this._fboPool.push(e2);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderPhases(e2, t2, s3) {
    const { context: r3 } = e2;
    this._worldExtentRenderer.render(e2, t2, s3);
    const { width: i4, height: n3 } = r3.getViewport();
    if (this.updateFBOs(i4, n3), this._prevFBO = r3.getBoundFramebufferObject(), r3.bindFramebuffer(this.getFbos().output), r3.setColorMask(true, true, true, true), null != t2) {
      const { r: e3, g: s4, b: i5, a: n4 } = t2;
      r3.setClearColor(n4 * e3 / 255, n4 * s4 / 255, n4 * i5 / 255, n4);
    } else
      r3.setClearColor(0, 0, 0, 0);
    r3.setDepthWriteEnabled(true), r3.setClearDepth(1), r3.clear(r3.gl.COLOR_BUFFER_BIT | r3.gl.DEPTH_BUFFER_BIT), r3.setDepthWriteEnabled(false);
  }
  afterRenderPhases(e2) {
    const { context: t2 } = e2;
    t2.bindFramebuffer(this._prevFBO), t2.setStencilFunction(O$1.EQUAL, 1, 255), t2.setStencilTestEnabled(true), t2.setDepthTestEnabled(false), this.blitTexture(t2, this.getFbos().output.colorTexture, L.NEAREST);
  }
  beforeRenderLayer(e2, t2, s3) {
    const { context: r3, blendMode: i4, effects: n3, drawPhase: o3, requireFBO: a2 } = e2;
    if (a2 || x(o3, i4, n3, s3)) {
      const e3 = r3.getBoundFramebufferObject();
      this._prevBeforeLayerFBOStack.push(e3);
      const { width: t3, height: s4 } = r3.getViewport(), i5 = this.acquireFbo(t3, s4);
      r3.bindFramebuffer(i5), r3.setColorMask(true, true, true, true), r3.setClearColor(0, 0, 0, 0), r3.setDepthWriteEnabled(true), r3.setClearDepth(1), r3.clear(r3.gl.COLOR_BUFFER_BIT | r3.gl.DEPTH_BUFFER_BIT), r3.setDepthWriteEnabled(false);
    }
    r3.setDepthWriteEnabled(false), r3.setDepthTestEnabled(false), r3.setStencilTestEnabled(true), r3.setClearStencil(t2), r3.setStencilWriteMask(255), r3.clear(r3.gl.STENCIL_BUFFER_BIT);
  }
  afterRenderLayer(e2, t2) {
    const { context: s3, blendMode: r3, effects: n3, requireFBO: o3, drawPhase: a2 } = e2;
    if (o3 || x(a2, r3, n3, t2)) {
      const o4 = s3.getBoundFramebufferObject();
      null != n3 && n3.length > 0 && a2 === T$1.MAP && this._applyEffects(e2, n3, o4), s3.bindFramebuffer(this._prevBeforeLayerFBOStack.pop()), s3.setStencilTestEnabled(false), s3.setStencilWriteMask(0), s3.setBlendingEnabled(true), s3.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), s3.setColorMask(true, true, true, true);
      const f3 = null == r3 || a2 === T$1.HIGHLIGHT ? "normal" : r3;
      this._blendEffect.draw(e2, o4.colorTexture, L.NEAREST, f3, t2), this.releaseFbo(o4);
    }
  }
  getBrush(e2, t2) {
    const s3 = O(e2, t2);
    let r3 = this._brushCache.get(s3);
    return void 0 === r3 && (r3 = new s3(), this._brushCache.set(s3, r3)), r3;
  }
  renderObject(e2, s3, r3, i4) {
    const n3 = w$1[r3];
    if (!n3)
      return;
    let o3 = this._brushCache.get(n3);
    void 0 === o3 && (o3 = new n3(), this._brushCache.set(n3, o3)), o3.prepareState(e2, i4), o3.draw(e2, s3, i4);
  }
  renderObjects(e2, s3, r3, i4) {
    const n3 = w$1[r3];
    if (!n3)
      return;
    let o3 = this._brushCache.get(n3);
    void 0 === o3 && (o3 = new n3(), this._brushCache.set(n3, o3)), o3.drawMany(e2, s3, i4);
  }
  registerRenderPass(e2) {
    const t2 = e2.brushes.map((e3) => (this._brushCache.has(e3) || this._brushCache.set(e3, new e3()), this._brushCache.get(e3)));
    return new o2(t2, e2);
  }
  blitTexture(e2, t2, s3, r3 = 1) {
    e2.setBlendingEnabled(true), e2.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true), this._blitRenderer.render(e2, t2, s3, r3);
  }
  getPostProcessingEffects(e2) {
    return this._effectsManager.getPostProcessingEffects(e2);
  }
  updateFBOs(e2, t2) {
    if (e2 !== this._lastWidth || t2 !== this._lastHeight) {
      if (this._lastWidth = e2, this._lastHeight = t2, this._fbos) {
        let s4;
        for (s4 in this._fbos)
          this._fbos[s4].resize(e2, t2);
        return;
      }
      const s3 = new e$5(e2, t2);
      s3.samplingMode = L.NEAREST, s3.wrapMode = D.CLAMP_TO_EDGE;
      const r3 = new i$5(B.DEPTH_STENCIL, e2, t2);
      this._stencilBuf = new i$6(this.context, r3), this._fbos = { output: new E$2(this.context, s3, this._stencilBuf), effect0: new E$2(this.context, s3, this._stencilBuf) };
    }
  }
  _applyEffects(e2, t2, s3) {
    const { context: r3 } = e2, i4 = this._effectsManager.getPostProcessingEffects(t2);
    for (const { postProcessingEffect: n3, effect: o3 } of i4)
      r3.bindFramebuffer(s3), n3.draw(e2, s3, o3);
  }
};
function x(e2, t2, s3, r3) {
  return e2 !== T$1.LABEL_ALPHA && e2 !== T$1.LABEL && e2 !== T$1.HIGHLIGHT && (1 !== r3 || null != t2 && "normal" !== t2 || null != s3 && s3.length > 0);
}
const j2 = 2e3;
class T extends h$6 {
  constructor(t2, i4) {
    super(), this._trash = /* @__PURE__ */ new Set(), this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this._renderRequested = r$7(false), this.stage = this, this._stationary = true, this._canvas = new l$3(t2), this.context = new N(this._canvas.gl, i4.contextOptions ?? {}), this.resourceManager = new i$7(), this.painter = new j$1(this.context, this, this.resourceManager), has("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), t2.appendChild(this._debugOutput));
    const a2 = () => this._highlightGradient;
    this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: false, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: false, effects: null, context: this.context, painter: this.painter, timeline: i4.timeline || new e$6(), renderingOptions: i4.renderingOptions, requestRender: () => this.requestRender(), allowDelayedRender: false, requireFBO: false, profiler: new n$7(this.context, this._debugOutput), dataUploadCounter: 0, get highlightGradient() {
      return a2();
    }, backgroundColor: i4.backgroundColor }, this._taskHandle = v({ render: (e2) => this.renderFrame(e2) }), this._taskHandle.pause(), this._lostWebGLContextHandle = this._canvas.events.on("webgl-context-lost", (t3) => this.emit("webgl-error", { error: new s$4("webgl-context-lost", t3.statusMessage) })), this._bufferPool = new i$8();
  }
  destroy() {
    this.removeAllChildren(), this._emptyTrash(), this._taskHandle = l$5(this._taskHandle), this._lostWebGLContextHandle = l$5(this._lostWebGLContextHandle), this._canvas.destroy(), this._debugOutput?.parentNode?.removeChild(this._debugOutput), this._bufferPool.destroy(), this.resourceManager.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get backgroundColor() {
    return this._renderParameters.backgroundColor;
  }
  set backgroundColor(e2) {
    this._renderParameters.backgroundColor = e2, this.requestRender();
  }
  get bufferPool() {
    return this._bufferPool;
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e2) {
    this._renderingOptions = e2, this.requestRender();
  }
  get renderRequested() {
    return this._renderRequested.value;
  }
  get state() {
    return this._state;
  }
  set state(e2) {
    this._state = e2, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e2) {
    this._stationary !== e2 && (this._stationary = e2, this.requestRender());
  }
  trashDisplayObject(e2) {
    this._trash.add(e2), this.requestRender();
  }
  untrashDisplayObject(e2) {
    return this._trash.delete(e2);
  }
  requestRender() {
    this._renderRemainingTime = j2, this.renderRequested || (this._renderRequested.value = true, this._taskHandle.resume());
  }
  renderFrame(e2) {
    const t2 = this._lastFrameRenderTime ? e2.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t2, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e2.time, this._renderRequested.value = false, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e2.time, this._renderParameters.deltaTime = e2.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash();
  }
  _createTransforms() {
    return { dvs: e$4() };
  }
  renderChildren(e2) {
    for (const t2 of this.children)
      t2.beforeRender(e2);
    this._canvas.render(e2, () => this._renderChildren(this.children, e2));
    for (const t2 of this.children)
      t2.afterRender(e2);
  }
  _renderChildren(e2, t2) {
    const r3 = this.context;
    this.painter.textureUploadManager.upload(), r3.resetInfo(), t2.profiler.recordStart("drawLayers"), t2.dataUploadCounter = 0, this.painter.beforeRenderPhases(t2, t2.backgroundColor, this.state.padding), t2.drawPhase = T$1.MAP;
    for (const s3 of e2)
      s3.processRender(t2);
    if (this.children.some((e3) => e3.hasHighlight)) {
      t2.drawPhase = T$1.HIGHLIGHT;
      for (const r4 of e2)
        r4.processRender(t2);
    }
    if (this.children.some((e3) => e3.hasLabels)) {
      t2.drawPhase = T$1.LABEL;
      for (const r4 of e2)
        r4.processRender(t2);
    }
    if (has("esri-tiles-debug")) {
      t2.drawPhase = T$1.DEBUG;
      for (const r4 of e2)
        r4.processRender(t2);
    }
    this.painter.afterRenderPhases(t2), t2.profiler.recordEnd("drawLayers"), r3.logInfo();
  }
  doRender(e2) {
    const t2 = this.context, { state: r3, pixelRatio: s3 } = e2;
    this._canvas.resize(e2), t2.setViewport(0, 0, s3 * r3.size[0], s3 * r3.size[1]), t2.setDepthWriteEnabled(true), t2.setStencilWriteMask(255), this.renderChildren(e2);
  }
  async takeScreenshot(e2, t2, r3, s3) {
    const i4 = Math.round(this.state.size[0] * e2.resolutionScale), n3 = Math.round(this.state.size[1] * e2.resolutionScale), a2 = e2.resolutionScale, o3 = this.context, h4 = this._state.clone();
    if (null != s3) {
      const e3 = h4.viewpoint;
      h4.viewpoint.rotation = s3, h4.viewpoint = e3;
    }
    const d3 = { ...this._renderParameters, drawPhase: null, globalOpacity: 1, stationary: true, state: h4, pixelRatio: a2, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: false, backgroundColor: r3 }, l4 = n$8(o3.gl), c3 = new e$5(i4, n3);
    c3.wrapMode = D.CLAMP_TO_EDGE, c3.internalFormat = l4 ? P.RGBA8 : G.RGBA, c3.isImmutable = l4;
    const m2 = new E$2(o3, c3, new i$5(B.DEPTH_STENCIL, i4, n3)), b = o3.getBoundFramebufferObject(), y2 = o3.getViewport();
    o3.bindFramebuffer(m2), o3.setViewport(0, 0, i4, n3), this._renderChildren(t2 ?? this.children, d3);
    const C2 = this._readbackScreenshot(m2, { ...e2.cropArea, y: n3 - (e2.cropArea.y + e2.cropArea.height) });
    o3.bindFramebuffer(b), o3.setViewport(y2.x, y2.y, y2.width, y2.height), this.requestRender();
    const j3 = await C2;
    let T2;
    return 1 === e2.outputScale ? T2 = j3 : (T2 = new ImageData(Math.round(j3.width * e2.outputScale), Math.round(j3.height * e2.outputScale)), w$2(j3, T2, true)), m2.dispose(), T2;
  }
  async _readbackScreenshot(e2, t2) {
    const r3 = s$5(t2.width, t2.height, document.createElement("canvas"));
    return await e2.readPixelsAsync(t2.x, t2.y, t2.width, t2.height, G.RGBA, U.UNSIGNED_BYTE, new Uint8Array(r3.data.buffer)), r3;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e2 = Array.from(this._trash);
      this._trash.clear();
      for (const t2 of e2)
        t2.processDetach();
    }
  }
}
class A extends i$9 {
  constructor() {
    super(), this._handles = new e$7(), this._resourcePixelRatio = 1, this.visible = false;
  }
  destroy() {
    this._handles = u$5(this._handles), this._disposeRenderResources(), this._resourcesTask = e$8(this._resourcesTask);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e2) {
    this._backgroundColor = e2, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e2) {
    this._magnifier = e2, this._handles.removeAll(), this._handles.add([d$1(() => e2.version, () => {
      this.visible = e2.visible && null != e2.position && e2.size > 0, this.requestRender();
    }, P$1), d$1(() => [e2.maskUrl, e2.overlayUrl], () => this._reloadResources()), d$1(() => e2.size, () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { dvs: e$4() };
  }
  doRender(e2) {
    const r3 = e2.context;
    if (!this._resourcesTask)
      return void this._reloadResources();
    if (e2.drawPhase !== T$1.MAP || !this._canRender())
      return;
    this._updateResources(e2);
    const s3 = this._magnifier;
    if (null == s3.position)
      return;
    const i4 = e2.pixelRatio, o3 = s3.size * i4, a2 = 1 / s3.factor, n3 = Math.ceil(a2 * o3);
    this._readbackTexture.resize(n3, n3);
    const { size: l4 } = e2.state, h4 = i4 * l4[0], u3 = i4 * l4[1], m2 = 0.5 * n3, c3 = 0.5 * n3, _3 = i$a(i4 * s3.position.x, m2, h4 - m2 - 1), p2 = i$a(u3 - i4 * s3.position.y, c3, u3 - c3 - 1);
    r3.setBlendingEnabled(true);
    const f3 = _3 - m2, g = p2 - c3, b = this._readbackTexture;
    r3.bindTexture(b, 0), r3.gl.copyTexImage2D(b.descriptor.target, 0, b.descriptor.pixelFormat, f3, g, n3, n3, 0);
    const T2 = this.backgroundColor, y2 = T2 ? [T2.a * T2.r / 255, T2.a * T2.g / 255, T2.a * T2.b / 255, T2.a] : [1, 1, 1, 1], k = (_3 + s3.offset.x * i4) / h4 * 2 - 1, R2 = (p2 - s3.offset.y * i4) / u3 * 2 - 1, v2 = o3 / h4 * 2, j3 = o3 / u3 * 2, A2 = this._program;
    r3.bindVAO(this._vertexArrayObject), r3.bindTexture(this._overlayTexture, 6), r3.bindTexture(this._maskTexture, 7), r3.useProgram(A2), A2.setUniform4fv("u_background", y2), A2.setUniform1i("u_readbackTexture", 0), A2.setUniform1i("u_overlayTexture", 6), A2.setUniform1i("u_maskTexture", 7), A2.setUniform4f("u_drawPos", k, R2, v2, j3), A2.setUniform1i("u_maskEnabled", s3.maskEnabled ? 1 : 0), A2.setUniform1i("u_overlayEnabled", s3.overlayEnabled ? 1 : 0), r3.setStencilTestEnabled(false), r3.setColorMask(true, true, true, true), r3.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), r3.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && null != this._magnifier;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const s3 = null != this._magnifier ? this._magnifier.maskUrl : null, t2 = null != this._magnifier ? this._magnifier.overlayUrl : null;
    this._resourcesTask = d$2(async (r3) => {
      const i4 = null == s3 || null == t2 ? s$6(r3) : null, o3 = null != s3 ? j$2(s3, { responseType: "image", signal: r3 }).then((e2) => e2.data) : i4.then((e2) => e2.mask), a2 = null != t2 ? j$2(t2, { responseType: "image", signal: r3 }).then((e2) => e2.data) : i4.then((e2) => e2.overlay), [n3, l4] = await Promise.all([o3, a2]);
      this.mask = n3, this.overlay = l4, this._disposeRenderResources(), this.requestRender();
    });
  }
  _disposeRenderResources() {
    this._readbackTexture = r$2(this._readbackTexture), this._overlayTexture = r$2(this._overlayTexture), this._maskTexture = r$2(this._maskTexture), this._vertexArrayObject = r$2(this._vertexArrayObject), this._program = r$2(this._program);
  }
  _updateResources(e2) {
    if (e2.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture)
      return;
    const r3 = e2.context;
    this._resourcePixelRatio = e2.pixelRatio;
    const s3 = Math.ceil(this._magnifier.size * e2.pixelRatio);
    this._program = t$8(r3);
    const t2 = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), i4 = a$2.attributes;
    this._vertexArrayObject = new f$2(r3, i4, m$2, { geometry: h$4.createVertex(r3, F.STATIC_DRAW, t2) }), this.overlay.width = s3, this.overlay.height = s3;
    const o3 = new e$5();
    o3.internalFormat = G.RGBA, o3.wrapMode = D.CLAMP_TO_EDGE, o3.samplingMode = L.NEAREST, o3.flipped = true, o3.preMultiplyAlpha = !Pt(this.overlay.src) || !e2.context.driverTest.svgPremultipliesAlpha.result, this._overlayTexture = new T$2(r3, o3, this.overlay), this.mask.width = s3, this.mask.height = s3, o3.pixelFormat = o3.internalFormat = G.ALPHA, this._maskTexture = new T$2(r3, o3, this.mask);
    const a2 = 1 / this._magnifier.factor;
    o3.pixelFormat = o3.internalFormat = G.RGBA, o3.width = o3.height = Math.ceil(a2 * s3), o3.samplingMode = L.LINEAR, o3.flipped = false, this._readbackTexture = new T$2(r3, o3);
  }
}
export {
  i as GraphicContainer,
  r as GraphicsView2D,
  d as LabelManager,
  A as MagnifierView2D,
  y as MapViewNavigation,
  T as Stage
};
