import { cu as E, BK as S$2, aV as e$2, BL as t$4, sd as a$4, md as C$2, h as h$7, ml as F$6, wf as t$5, o as o$3, BM as t$6, lG as e$3, cK as L, fq as D$1, s as s$3, Bx as i$3, By as B, x as x$5, mc as E$1, cJ as U$1, m as m$6, BN as t$7, BO as f$8, BP as m$7, BQ as h$8, BR as y$3, BS as M$1, BT as K$1, BU as L$1, zg as _$3, BV as c$4, BW as d$5, BX as w$2, ma as r$3, aT as s$4, o7 as O, o9 as I, BY as at, wE as u$b, o4 as c$6, cA as n$8, mB as o$7, fQ as t$a, aO as s$5, id as u$d, BZ as i$5, j3 as W$1, Ao as m$9, i1 as K$3, Ba as t$b, cr as q$6, B_ as L$2, Bh as _$4 } from "./chunk-ejFG4zJ0.js";
import { c as l$3, _ as _$2, e as b$6, P as P$1, j, t as tt, G as G$1, g as se, B as Bn, h as j$1, i as ee, H, m as kn, o as te, p as g$3, C as C$1, S as S$3, F as F$4, q as d$4, u as F$5, U, x as x$4, v as S$4, w as P$2, y as nt, z as ln, A as q$1, D as q$2, E as x$6, a as a$5, I as E$2, J as C$3, K as H$1, L as z$3, M as S$5, R as R$2, N as w$3, O as xt, Q as h$9, T as Bt, V as i$4, W as t$8, X as Wn, Y as tn, Z as K$2, $ as v$3, a0 as Xt, a1 as Un, a2 as vn, a3 as j$2, a4 as A$1, a5 as t$9, a6 as n$7, a7 as G$2, a8 as P$3, a9 as O$1, aa as Dt, ab as Nt, ac as Y$1, ad as I$1, ae as J$1, af as f$9, ag as h$a, ah as m$8, ai as p$8, aj as f$a, ak as l$4, al as p$9, am as B$1, an as q$3, ao as bn, ap as Sn, aq as k, ar as Zt, as as Ct, at as T$2, au as D$2, av as F$7, aw as H$2, ax as q$4, ay as q$5, az as z$4, aA as u$c, aB as r$4, aC as c$5, aD as St, aE as o$5, aF as sn, aG as h$b, aH as yt, aI as g$4, aJ as o$6, aK as a$6, d as d$6 } from "./chunk-Mke_bPEP.js";
import { n as n$6 } from "./chunk-drfK378b.js";
import { o as o$4 } from "./chunk-9fkEo-9z.js";
let e$1 = class e {
  constructor(e3) {
    this.registryName = e3, this.postProcessingEnabled = false, this.overrideStencilRef = null, this.drawPhase = E.MAP | E.HITTEST | E.HIGHLIGHT | E.DEBUG, this.symbologyPlane = S$2.FILL;
  }
  startup() {
  }
  shutdown(s2) {
  }
  postProcess(s2, t2) {
  }
};
let z$2 = class z extends b$6 {
};
e$2([l$3(0, C$1)], z$2.prototype, "pos", void 0);
let F$3 = class F extends F$5 {
};
let R$1 = class R extends P$1 {
};
e$2([_$2(j$1)], R$1.prototype, "dotSize", void 0);
let b$5 = class b extends P$1 {
};
e$2([_$2(S$3)], b$5.prototype, "locations", void 0), e$2([_$2(j$1)], b$5.prototype, "pixelRatio", void 0), e$2([_$2(j$1)], b$5.prototype, "tileZoomFactor", void 0);
const P = 1e-6;
class C extends j {
  vertex(t2) {
    const o2 = new tt(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new G$1(t2.pos.xy.divide(a$4), 1)), i3 = se(this.draw.locations, o2.xy), s2 = Bn(this.instance.dotSize.divide(2), new j$1(1));
    let r3 = new j$1(0);
    r3 = r3.add(ee(i3.a, new j$1(P)).multiply(2));
    let d3 = s2.add(this.instance.dotSize);
    const n2 = this.view.displayViewScreenMat3.multiply(new G$1(t2.pos.add(0.5), 1)), a2 = new H(n2.xy, r3, 1), l3 = this.instance.dotSize.divide(d3), h6 = new j$1(-1).divide(s2.divide(d3));
    return d3 = d3.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), { glPosition: a2, glPointSize: d3, color: i3, ratio: l3, invEdgeRatio: h6 };
  }
  fragment(t2) {
    const o2 = kn(t2.glPointCoord.subtract(0.5)).multiply(2), e3 = te(new j$1(0), new j$1(1), t2.invEdgeRatio.multiply(o2.subtract(t2.ratio)).add(1)), i3 = new F$4();
    return i3.glFragColor = t2.color.multiply(e3), i3;
  }
}
e$2([_$2(R$1)], C.prototype, "instance", void 0), e$2([_$2(b$5)], C.prototype, "draw", void 0), e$2([_$2(d$4)], C.prototype, "view", void 0), e$2([t$4(0, g$3(z$2))], C.prototype, "vertex", null), e$2([t$4(0, g$3(F$3))], C.prototype, "fragment", null);
class D extends S$4 {
}
e$2([l$3(3, j$1)], D.prototype, "inverseArea", void 0);
let V$2 = class V extends P$1 {
};
e$2([_$2(U.ofType(H, 2))], V$2.prototype, "isActive", void 0), e$2([_$2(U.ofType(H, 8))], V$2.prototype, "colors", void 0), e$2([_$2(j$1)], V$2.prototype, "dotValue", void 0);
let F$2 = class F2 extends P$1 {
};
e$2([_$2(S$3)], F$2.prototype, "dotTexture0", void 0), e$2([_$2(S$3)], F$2.prototype, "dotTexture1", void 0), e$2([_$2(j$1)], F$2.prototype, "tileZoomFactor", void 0), e$2([_$2(j$1)], F$2.prototype, "pixelRatio", void 0), e$2([_$2(j$1)], F$2.prototype, "tileDotsOverArea", void 0);
let _$1 = class _ extends P$2 {
  _dotThreshold(t2, e3, o2) {
    return t2.divide(e3).divide(o2);
  }
  vertex(t2) {
    const e3 = new tt(2 / a$4, 0, 0, 0, -2 / a$4, 0, -1, 1, 1).multiply(new G$1(t2.pos, 1)), s2 = this.clip(t2.id), i3 = new H(e3.xy, s2, 1), r3 = this.storage.getVVData(t2.id).multiply(this.instance.isActive.get(0)).multiply(t2.inverseArea), l3 = this.storage.getDataDrivenData0(t2.id).multiply(this.instance.isActive.get(1)).multiply(t2.inverseArea), d3 = this.draw.tileZoomFactor.multiply(a$4).divide(this.draw.pixelRatio), a2 = this._dotThreshold(r3, this.instance.dotValue, this.draw.tileDotsOverArea), n2 = this._dotThreshold(l3, this.instance.dotValue, this.draw.tileDotsOverArea), u9 = t2.pos.add(0.5).divide(d3);
    return { glPosition: i3, color: new H(0, 0, 0, 0), textureCoords: u9, thresholds0: a2, thresholds1: n2 };
  }
  fragment(t2) {
    const e3 = new F$4(), o2 = se(this.draw.dotTexture0, t2.textureCoords), s2 = se(this.draw.dotTexture1, t2.textureCoords), i3 = t2.thresholds0.subtract(o2), r3 = t2.thresholds1.subtract(s2);
    let l3;
    const a2 = nt.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), n2 = nt.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const t3 = ee(new j$1(0), i3), e4 = ee(new j$1(0), r3), o3 = ln(t3, i3).add(ln(e4, r3)), s3 = ee(o3, new j$1(0)), d3 = new j$1(1).subtract(s3), p5 = o3.add(s3), h6 = i3.multiply(t3).divide(p5), c2 = r3.multiply(e4).divide(p5), u9 = a2.multiply(h6).add(n2.multiply(c2));
      l3 = d3.multiply(u9);
    } else {
      const t3 = Bn(q$1(i3), q$1(r3)), e4 = ee(t3, new j$1(0)), o3 = new j$1(1).subtract(e4), s3 = ee(t3, i3), d3 = ee(t3, r3), p5 = a2.multiply(s3).add(n2.multiply(d3));
      l3 = o3.multiply(p5);
    }
    return e3.glFragColor = l3, e3;
  }
  hittest(t2) {
    return q$2(this.hittestRequest);
  }
};
e$2([x$4], _$1.prototype, "blending", void 0), e$2([_$2(V$2)], _$1.prototype, "instance", void 0), e$2([_$2(F$2)], _$1.prototype, "draw", void 0), e$2([t$4(0, g$3(D))], _$1.prototype, "vertex", null), e$2([t$4(0, g$3(F$5))], _$1.prototype, "fragment", null);
const T$1 = { [C$2.BYTE]: 1, [C$2.UNSIGNED_BYTE]: 1, [C$2.SHORT]: 2, [C$2.UNSIGNED_SHORT]: 2, [C$2.INT]: 4, [C$2.UNSIGNED_INT]: 4, [C$2.FLOAT]: 4 };
let i$2 = class i {
  constructor(t2, i3) {
    this._boundPart = null;
    const a2 = [];
    for (const e3 of i3.vertex) {
      const s2 = h$7.createVertex(t2, F$6.STATIC_DRAW, e3);
      a2.push(s2);
    }
    const u9 = [];
    for (const e3 of i3.index || []) {
      const s2 = h$7.createIndex(t2, F$6.STATIC_DRAW, e3);
      u9.push(s2);
    }
    this.groups = [];
    for (const r3 of i3.groups) {
      let o2;
      if (null != r3.index) {
        if (!i3.index)
          throw new Error("No index data.");
        const { BYTES_PER_ELEMENT: t3 } = i3.index[r3.index];
        2 === t3 ? o2 = C$2.UNSIGNED_SHORT : 4 === t3 && (o2 = C$2.UNSIGNED_INT);
      }
      const d3 = null != r3.index ? u9[r3.index] : null, c2 = /* @__PURE__ */ new Map(), l3 = {}, p5 = {};
      for (const t3 of r3.attributes) {
        const { name: r4, count: o3, type: e3, offset: s2, normalized: i4, divisor: u10, stride: d4, vertex: f6, location: h6 } = t3, b4 = `vertex-buffer-${f6}`;
        let x4 = l3[b4];
        x4 || (x4 = l3[b4] = []);
        const m3 = new t$5(r4, o3, e3, s2, d4, i4, u10);
        x4.push(m3), c2.set(r4, h6), p5[b4] = a2[f6];
      }
      const f5 = new o$3(t2, c2, l3, p5, d3);
      this.groups.push({ ...r3, vertexArray: f5, locations: c2, layout: l3, indexing: o2 });
    }
    this.parts = i3.parts;
  }
  bind(t2, r3) {
    this._boundPart = r3;
    const { group: o2 } = this.parts[this._boundPart], { vertexArray: e3 } = this.groups[o2];
    t2.bindVAO(e3);
  }
  draw(r3) {
    if (null == this._boundPart)
      throw new Error("Mesh.bind() has not been called.");
    const { start: o2, count: e3 } = this.parts[this._boundPart], { group: s2 } = this.parts[this._boundPart], { indexing: n2, primitive: i3 } = this.groups[s2];
    n2 ? r3.drawElements(i3, e3, n2, o2 * T$1[n2]) : r3.drawArrays(i3, o2, e3);
  }
  unbind(t2) {
    this._boundPart = null, t2.bindVAO(null);
  }
  destroy() {
    for (const { vertexArray: t2 } of this.groups)
      t2.dispose();
  }
};
let r$2 = class r extends i$2 {
  static create(e3, o2) {
    const n2 = [];
    let { stride: s2, hash: l3 } = o2.layout;
    if (null == s2) {
      s2 = 0;
      for (const { count: e4, type: i3, offset: r3 } of o2.layout.attributes) {
        if (null != r3)
          throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        s2 += e4 * T$1[i3];
      }
    }
    let u9 = 0, a2 = 0;
    for (const { count: i3, name: r3, offset: h6, type: m3, normalized: x4 } of o2.layout.attributes) {
      null != h6 && (a2 = h6);
      const e4 = { name: r3, location: u9, vertex: 0, count: i3, type: m3, offset: a2, stride: s2, divisor: 0, normalized: null != x4 && x4 };
      n2.push(e4), u9++, a2 += i3 * T$1[m3];
    }
    const c2 = { attributes: n2, primitive: o2.primitive };
    null != o2.index && (c2.index = 0);
    let { count: d3 } = o2;
    if (null == d3 && (d3 = o2.index ? o2.index.length : o2.vertex.byteLength / s2, Math.floor(d3) !== d3))
      throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${s2}.`);
    const p5 = { start: 0, count: d3, group: 0, primitive: o2.primitive }, f5 = { vertex: [o2.vertex], parts: [p5], groups: [c2] };
    null != o2.index && (f5.index = [o2.index]), null == l3 && (l3 = t$6(n2));
    return new r(e3, f5, { hash: l3, attributes: n2, stride: s2 });
  }
  constructor(t2, e3, i3) {
    super(t2, e3), this.layout = i3;
  }
  bind(t2, e3 = 0) {
    super.bind(t2, e3);
  }
};
let p$7 = class p {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(t2) {
    if (null == this._dotFBO) {
      const s2 = a$4, o2 = a$4, h6 = new e$3(s2, o2);
      h6.samplingMode = L.NEAREST, h6.wrapMode = D$1.CLAMP_TO_EDGE;
      const d3 = new s$3(t2, new i$3(B.DEPTH_STENCIL, s2, o2));
      this._dotFBO = new x$5(t2, h6, d3);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(t2) {
    if (null == this._dotMesh) {
      const r3 = a$4, i3 = r3 * r3, n2 = 2, u9 = new Int16Array(i3 * n2);
      for (let t3 = 0; t3 < r3; t3++)
        for (let e3 = 0; e3 < r3; e3++)
          u9[n2 * (e3 + t3 * r3)] = e3, u9[n2 * (e3 + t3 * r3) + 1] = t3;
      const l3 = [{ count: 2, type: C$2.UNSIGNED_SHORT, name: "a_position", offset: 0 }], _3 = { hash: t$6(l3), attributes: l3, stride: 4 };
      this._dotMesh = r$2.create(t2, { primitive: E$1.POINTS, vertex: u9, count: i3, layout: _3 });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e3, s2, o2) {
    if (this._dotTextureSize === s2 && this._seed === o2 || (this._disposeTextures(), this._dotTextureSize = s2, this._seed = o2), null === this._dotTextures) {
      const r3 = new t$7(o2);
      this._dotTextures = [this._allocDotDensityTexture(e3, s2, r3), this._allocDotDensityTexture(e3, s2, r3)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let t2 = 0; t2 < this._dotTextures.length; t2++)
        this._dotTextures[t2].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(t2, e3, s2) {
    const o2 = new Float32Array(e3 * e3 * 4);
    for (let r3 = 0; r3 < o2.length; r3++)
      o2[r3] = s2.getFloat();
    const i3 = new e$3();
    return i3.dataType = U$1.FLOAT, i3.samplingMode = L.NEAREST, i3.width = e3, i3.height = e3, new m$6(t2, i3, o2);
  }
};
let f$7 = class f extends e$1 {
  constructor() {
    super(...arguments), this.shaders = { polygon: new _$1(), point: new C(), fill: new x$6() }, this.meshWriter = a$5.DotDensityMeshWriter, this._resources = /* @__PURE__ */ new Map();
  }
  render(e3, t2) {
    f$8(e3) || m$7(e3) ? this._renderPolygons(e3, t2) : this._renderDotDensity(e3, t2);
  }
  _renderPolygons(e3, t2) {
    const { context: i3, painter: o2 } = e3;
    o2.setShader({ shader: this.shaders.fill, uniforms: { ...h$8(e3, t2.target), visualVariableColor: null, visualVariableOpacity: null }, defines: { ...y$3(e3) }, optionalAttributes: { zoomRange: false }, useComputeBuffer: m$7(e3) }), o2.setPipelineState(M$1(e3)), o2.submitDraw(i3, t2);
  }
  _renderDotDensity(o2, r3) {
    const { context: d3, painter: u9, requiredLevel: c2 } = o2, h6 = r3.instance.getInput(), p5 = this._getOrCreateResourcesRecord(d3), m3 = p5.getDotDensityTextures(d3, a$4, h6.seed), f5 = 1 / 2 ** (c2 - r3.target.key.level), g3 = a$4, x4 = g3 * window.devicePixelRatio * g3 * window.devicePixelRatio, D2 = 1 / f5 * (1 / f5), b4 = h6.dotScale ? o2.state.scale / h6.dotScale : 1, y2 = h6.dotValue * b4 * D2;
    u9.setShader({ shader: this.shaders.polygon, uniforms: { ...h$8(o2, r3.target), instance: { isActive: h6.isActive, colors: h6.colors, dotValue: Math.max(1, y2) }, draw: { dotTexture0: { unit: K$1, texture: m3[0] }, dotTexture1: { unit: L$1, texture: m3[1] }, tileZoomFactor: f5, pixelRatio: window.devicePixelRatio, tileDotsOverArea: x4 / (a$4 * window.devicePixelRatio * a$4 * window.devicePixelRatio) } }, defines: { ...y$3(o2), blending: h6.blending }, optionalAttributes: {}, useComputeBuffer: false }), u9.setPipelineState(M$1(o2));
    const R3 = d3.getViewport();
    d3.setViewport(0, 0, a$4, a$4);
    const P2 = d3.getBoundFramebufferObject(), S2 = p5.getFBO(d3);
    d3.bindFramebuffer(S2), d3.setClearColor(0, 0, 0, 0), u9.setPipelineState({ color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false }), u9.updatePipelineState(d3), d3.clear(_$3.COLOR_BUFFER_BIT), u9.submitDraw(d3, r3), d3.bindFramebuffer(P2), d3.setViewport(R3.x, R3.y, R3.width, R3.height);
    const v3 = p5.getFBO(d3).colorTexture;
    u9.setShader({ shader: this.shaders.point, uniforms: { view: c$4(o2, r3.target), instance: { dotSize: h6.dotSize }, draw: { locations: { unit: K$1, texture: v3 }, tileZoomFactor: 1, pixelRatio: window.devicePixelRatio } }, defines: { ...y$3(o2) }, optionalAttributes: {}, useComputeBuffer: false }), u9.setPipelineState({ color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false }), u9.submitDrawMesh(d3, p5.getDotDensityMesh(d3));
  }
  shutdown(e3) {
    super.shutdown(e3), this._resources.get(e3)?.destroy(), this._resources.delete(e3);
  }
  _getOrCreateResourcesRecord(e3) {
    let t2 = this._resources.get(e3);
    return null == t2 && (t2 = new p$7(), this._resources.set(e3, t2)), t2;
  }
};
let h$6 = class h extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.ComplexFillMeshWriter, this.shaders = { geometry: new E$2() };
  }
  render(a2, n2) {
    const { context: m3, painter: h6 } = a2;
    h6.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(a2, n2.target, n2.instance.getInput().geometry), ...h$8(a2, n2.target), mosaicInfo: h6.textureManager.getMosaicInfo(m3, n2.textureKey), localTileOffset: w$2(n2.target) }, defines: { ...y$3(a2) }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(a2) }), h6.setPipelineState(M$1(a2)), h6.submitDraw(m3, n2);
  }
};
function n$5(n2) {
  const t2 = 1 / n2;
  return { antialiasing: t2, blur: 0 + t2 };
}
let u$a = class u extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.ComplexOutlineFillMeshWriter, this.shaders = { geometry: new C$3() };
  }
  render(n2, l3) {
    const { context: m3, painter: u9, pixelRatio: p5 } = n2;
    u9.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(n2, l3.target, l3.instance.getInput().geometry), ...h$8(n2, l3.target), antialiasingControls: n$5(p5), mosaicInfo: u9.textureManager.getMosaicInfo(m3, l3.textureKey), localTileOffset: w$2(l3.target) }, defines: { ...y$3(n2) }, optionalAttributes: l3.instance.optionalAttributes, useComputeBuffer: m$7(n2) }), u9.setPipelineState(M$1(n2)), u9.submitDraw(m3, l3);
  }
};
let m$5 = class m extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.FillMeshWriter, this.shaders = { geometry: new x$6() };
  }
  render(o2, n2) {
    const { context: a2, painter: m3 } = o2;
    m3.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(o2, n2.target, n2.instance.getInput().geometry), ...h$8(o2, n2.target) }, defines: y$3(o2), optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(o2) }), m3.setPipelineState(M$1(o2)), m3.submitDraw(a2, n2);
  }
};
let l$2 = class l extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.OutlineFillMeshWriter, this.shaders = { geometry: new H$1() };
  }
  render(o2, a2) {
    const { context: m3, painter: l3, pixelRatio: u9 } = o2;
    l3.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(o2, a2.target, a2.instance.getInput().geometry), ...h$8(o2, a2.target), antialiasingControls: n$5(u9) }, defines: { ...y$3(o2) }, optionalAttributes: a2.instance.optionalAttributes, useComputeBuffer: m$7(o2) }), l3.setPipelineState(M$1(o2)), l3.submitDraw(m3, a2);
  }
};
let h$5 = class h2 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.PatternFillMeshWriter, this.shaders = { geometry: new z$3() };
  }
  render(a2, n2) {
    const { context: m3, painter: h6 } = a2;
    h6.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(a2, n2.target, n2.instance.getInput().geometry), ...h$8(a2, n2.target), mosaicInfo: h6.textureManager.getMosaicInfo(m3, n2.textureKey), localTileOffset: w$2(n2.target) }, defines: { ...y$3(a2) }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(a2) }), h6.setPipelineState(M$1(a2)), h6.submitDraw(m3, n2);
  }
};
let u$9 = class u2 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.PatternOutlineFillMeshWriter, this.shaders = { geometry: new S$5() };
  }
  render(n2, l3) {
    const { context: m3, painter: u9, pixelRatio: h6 } = n2;
    u9.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(n2, l3.target, l3.instance.getInput().geometry), ...h$8(n2, l3.target), antialiasingControls: n$5(h6), mosaicInfo: u9.textureManager.getMosaicInfo(m3, l3.textureKey), localTileOffset: w$2(l3.target) }, defines: { ...y$3(n2) }, optionalAttributes: l3.instance.optionalAttributes, useComputeBuffer: m$7(n2) }), u9.setPipelineState(M$1(n2)), u9.submitDraw(m3, l3);
  }
};
const m$4 = () => s$4.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
let f$6 = class f2 {
  destroy() {
    this._accumulateFramebuffer = r$3(this._accumulateFramebuffer), this._resolveGradientTexture = r$3(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return null != this._accumulateFramebuffer && null != this._resolveGradientTexture;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e3) {
    if (null == this._qualityProfile) {
      const r3 = n$6(e3, m$4());
      this._qualityProfile = { ...r3, defines: { usesHalfFloatPrecision: r3.dataType !== U$1.FLOAT } };
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e3, r3, t2) {
    if (null == this._accumulateFramebuffer) {
      const { dataType: u9, samplingMode: o2, pixelFormat: m3, internalFormat: f5 } = this.loadQualityProfile(e3), h6 = new e$3(r3, t2);
      h6.pixelFormat = m3, h6.internalFormat = f5, h6.dataType = u9, h6.samplingMode = o2, h6.wrapMode = D$1.CLAMP_TO_EDGE;
      const c2 = new i$3(B.DEPTH_STENCIL, r3, t2);
      this._accumulateFramebuffer = new x$5(e3, h6, c2);
    } else {
      const { width: e4, height: a2 } = this._accumulateFramebuffer;
      e4 === r3 && a2 === t2 || this._accumulateFramebuffer.resize(r3, t2);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e3, r3, t2) {
    if (null == this._resolveGradientTexture) {
      const r4 = new e$3();
      r4.wrapMode = D$1.CLAMP_TO_EDGE, this._resolveGradientTexture = new m$6(e3, r4);
    } else
      this._prevGradientHash !== r3 && (this._resolveGradientTexture.resize(t2.length / 4, 1), this._resolveGradientTexture.setData(t2), this._prevGradientHash = r3);
    return this._resolveGradientTexture;
  }
};
function n$4(n2) {
  return n2 ? 0.25 : 1;
}
let v$2 = class v extends S$4 {
};
e$2([l$3(5, C$1)], v$2.prototype, "offset", void 0);
let x$3 = class x extends F$5 {
};
let g$2 = class g extends P$1 {
};
e$2([_$2(j$1)], g$2.prototype, "radius", void 0), e$2([_$2(j$1)], g$2.prototype, "isFieldActive", void 0);
let F$1 = class F3 extends P$2 {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = false;
  }
  vertex(t2) {
    const { radius: e3, isFieldActive: s2 } = this.kernelControls, i3 = t2.offset, o2 = s2.multiply(this.storage.getVVData(t2.id).x).add(new j$1(1).subtract(s2)), l3 = this.view.displayViewScreenMat3.multiply(new G$1(t2.pos, 1)).add(this.view.displayViewMat3.multiply(new G$1(i3, 0)).multiply(e3)), r3 = this.clip(t2.id);
    return { glPosition: new H(l3.xy, r3, 1), offset: i3, fieldValue: o2, color: new H(0), ...this.maybeRunHittest(t2, {}, null) };
  }
  fragment(t2) {
    const { offset: e3, fieldValue: s2 } = t2, i3 = kn(e3), o2 = ee(i3, new j$1(1)), l3 = new j$1(1).subtract(i3.multiply(i3)), r3 = l3.multiply(l3), a2 = o2.multiply(r3).multiply(s2).multiply(new j$1(n$4(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new H(a2), t2);
  }
  hittest(t2) {
    const { viewMat3: e3, tileMat3: s2 } = this.view, i3 = e3.multiply(s2).multiply(new G$1(t2.pos, 1));
    return R$2(i3.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
};
e$2([x$4], F$1.prototype, "usesHalfFloatPrecision", void 0), e$2([_$2(g$2)], F$1.prototype, "kernelControls", void 0), e$2([t$4(0, g$3(v$2))], F$1.prototype, "vertex", null), e$2([t$4(0, g$3(x$3))], F$1.prototype, "fragment", null);
let x$2 = class x2 extends b$6 {
};
e$2([l$3(0, C$1)], x$2.prototype, "pos", void 0);
let f$5 = class f3 extends w$3 {
};
let h$4 = class h3 extends P$1 {
};
e$2([_$2(S$3)], h$4.prototype, "texture", void 0), e$2([_$2(C$1)], h$4.prototype, "minAndInvRange", void 0), e$2([_$2(j$1)], h$4.prototype, "normalization", void 0);
let w$1 = class w extends P$1 {
};
e$2([_$2(S$3)], w$1.prototype, "texture", void 0);
let b$4 = class b2 extends j {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = false;
  }
  vertex(t2) {
    return { glPosition: new H(t2.pos.multiply(2).subtract(1), 1, 1), uv: t2.pos };
  }
  fragment(t2) {
    const { accumulatedDensity: e3, gradient: o2 } = this;
    let r3 = se(e3.texture, t2.uv).r.multiply(new j$1(n$4(this.usesHalfFloatPrecision)));
    r3 = r3.multiply(e3.normalization), r3 = r3.subtract(e3.minAndInvRange.x).multiply(e3.minAndInvRange.y);
    const s2 = se(o2.texture, new C$1(r3, 0.5)), n2 = new F$4();
    return n2.glFragColor = new H(s2.rgb.multiply(s2.a), s2.a), n2;
  }
};
e$2([x$4], b$4.prototype, "usesHalfFloatPrecision", void 0), e$2([_$2(h$4)], b$4.prototype, "accumulatedDensity", void 0), e$2([_$2(w$1)], b$4.prototype, "gradient", void 0), e$2([t$4(0, g$3(x$2))], b$4.prototype, "vertex", null), e$2([t$4(0, g$3(f$5))], b$4.prototype, "fragment", null);
let p$6 = class p2 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.HeatmapMeshWriter, this.shaders = { accumulate: new F$1(), resolve: new b$4() }, this.postProcessingEnabled = true, this._isBound = false, this._resources = /* @__PURE__ */ new Map(), this.overrideStencilRef = f$4;
  }
  shutdown(e3) {
    super.shutdown(e3), this._resources.get(e3)?.destroy(), this._resources.delete(e3), this._prevFBO = null, this._unbind();
  }
  render(i3, n2) {
    const { context: o2, painter: u9, state: a2 } = i3, d3 = n2.instance.getInput(), { isFieldActive: h6 } = d3, l3 = this._getOrCreateResourcesRecord(o2), c2 = l3.loadQualityProfile(o2);
    if (f$8(i3))
      return;
    m$7(i3) || this._bind(i3, l3, d3), u9.setShader({ shader: this.shaders.accumulate, uniforms: { ...h$8(i3, n2.target), kernelControls: { radius: g$1(d3, a2), isFieldActive: h6 ? 1 : 0 } }, defines: { ...y$3(i3), ...c2.defines }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(i3) });
    const p5 = m$7(i3) ? b$3 : _2;
    u9.setPipelineState(p5), u9.submitDraw(o2, n2);
  }
  postProcess(r3, s2) {
    if (m$7(r3) || f$8(r3))
      return;
    const { context: i3, painter: n2 } = r3, o2 = this._resources.get(i3);
    if (null == this._prevFBO || null == this._prevViewport || !o2?.initialized)
      return;
    const { defines: u9 } = o2.loadQualityProfile(i3), { minDensity: a2, maxDensity: d3, radius: h6 } = s2.getInput(), l3 = 8, c2 = 9, p5 = o2.accumulateFramebuffer, m3 = o2.resolveGradientTexture;
    n2.setShader({ shader: this.shaders.resolve, uniforms: { accumulatedDensity: { texture: { unit: l3, texture: p5.colorTexture }, minAndInvRange: [a2, 1 / (d3 - a2)], normalization: 3 / (h6 * h6 * Math.PI) }, gradient: { texture: { unit: c2, texture: m3 } } }, defines: u9, optionalAttributes: {}, useComputeBuffer: false }), i3.bindFramebuffer(this._prevFBO), i3.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), i3.bindTexture(p5.colorTexture, l3), i3.bindTexture(m3, c2), n2.setPipelineState(w2), n2.submitDrawQuad(i3), this._unbind();
  }
  _getOrCreateResourcesRecord(e3) {
    let t2 = this._resources.get(e3);
    return null == t2 && (t2 = new f$6(), this._resources.set(e3, t2)), t2;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = false;
  }
  _bind(e3, t2, r3) {
    if (this._isBound)
      return;
    const { context: s2, state: i3, pixelRatio: n2 } = e3, o2 = s2.getBoundFramebufferObject(), u9 = s2.getViewport();
    this._prevFBO = o2, this._prevViewport = u9;
    const { gradient: a2, gradientHash: d3 } = r3;
    t2.ensureResolveGradientTexture(s2, d3, a2);
    const { width: h6, height: p5 } = u9, f5 = m$3(g$1(r3, i3), n2), _3 = h6 * f5, b4 = p5 * f5, w3 = t2.ensureAccumulateFBO(s2, _3, b4);
    s2.blitFramebuffer(o2, w3, 0, 0, o2.width, o2.height, 0, 0, w3.width, w3.height, _$3.STENCIL_BUFFER_BIT, L.NEAREST), s2.bindFramebuffer(w3), s2.setViewport(0, 0, w3.width, w3.height), s2.setColorMask(true, true, true, true), s2.setClearColor(0, 0, 0, 0), s2.clear(_$3.COLOR_BUFFER_BIT), this._isBound = true;
  }
};
function m$3(e3, t2) {
  const r3 = t2 > 1.5 ? 0.25 : 0.5;
  return e3 < 1 / (2 * r3) ? 1 : r3;
}
function f$4(e3) {
  return e3.key.level + 1;
}
const _2 = { color: { write: [true, true, true, true], blendMode: "additive" }, depth: false, stencil: { write: false, test: { ref: f$4, compare: O.GEQUAL, mask: 255, op: { fail: I.KEEP, zFail: I.KEEP, zPass: I.REPLACE } } } }, b$3 = { ..._2, stencil: false }, w2 = { color: { write: [true, true, true, true], blendMode: "composite" }, depth: false, stencil: false };
function g$1(e3, t2) {
  const { referenceScale: r3, radius: s2 } = e3;
  return s2 * (0 !== r3 ? r3 / t2.scale : 1);
}
let d$3 = class d extends P$1 {
  getVVRotationMat4(t2) {
    return xt(h$9(t2), nt.identity(), () => {
      const e3 = this._getNormalizedAngle(t2).multiply(t$8), r3 = Wn(e3), o2 = tn(e3);
      return new nt(o2, r3, 0, 0, r3.multiply(new j$1(-1)), o2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(t2) {
    return xt(h$9(t2), tt.identity(), () => {
      const e3 = this._getNormalizedAngle(t2).multiply(t$8), r3 = Wn(e3), o2 = tn(e3);
      return new tt(o2, r3, 0, r3.multiply(new j$1(-1)), o2, 0, 0, 0, 1);
    });
  }
  _getNormalizedAngle(t2) {
    const e3 = Bt(this.rotationType, new j$1(i$4.Arithmatic));
    return xt(e3, new j$1(90).subtract(t2), t2);
  }
};
e$2([_$2(j$1)], d$3.prototype, "rotationType", void 0);
const q = 360 / 254;
class G extends S$4 {
}
e$2([l$3(3, H)], G.prototype, "color", void 0), e$2([l$3(4, C$1)], G.prototype, "offset", void 0), e$2([l$3(5, C$1)], G.prototype, "textureUV", void 0), e$2([l$3(6, j$1)], G.prototype, "fontSize", void 0), e$2([l$3(7, j$1)], G.prototype, "referenceSize", void 0), e$2([l$3(8, j$1)], G.prototype, "haloFontSize", void 0), e$2([l$3(9, H)], G.prototype, "haloColor", void 0), e$2([l$3(10, C$1)], G.prototype, "zoomRange", void 0), e$2([l$3(11, j$1)], G.prototype, "clipAngle", void 0), e$2([l$3(12, H)], G.prototype, "referenceSymbol", void 0);
let Z$1 = class Z extends v$3 {
};
e$2([l$3(13, C$1)], Z$1.prototype, "offsetNextVertex1", void 0), e$2([l$3(14, C$1)], Z$1.prototype, "offsetNextVertex2", void 0);
class J extends F$5 {
}
class K extends P$2 {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"] }, this.isHaloPass = false, this.isBackgroundPass = false, this.isLabel = false;
  }
  clipLabel(t2, e3, o2) {
    const s2 = e3.multiply(q), a2 = Xt(this.view.rotation.subtract(s2)), r3 = Un(new j$1(360).subtract(a2), a2);
    let l3 = new j$1(0);
    const p5 = vn(this.view.currentZoom.multiply(at)).divide(at), n2 = t2.x, h6 = t2.y, v3 = new j$1(1).subtract(ee(n2, p5)).multiply(2), f5 = ee(new j$1(90), r3).multiply(2), V3 = new j$1(2).multiply(new j$1(1).subtract(ee(p5, h6)));
    return l3 = l3.add(o2.multiply(v3)), l3 = l3.add(o2.multiply(f5)), l3 = l3.add(V3), l3;
  }
  vertex(t2, e3) {
    const i3 = j$2(t2.bitset, I$1), s2 = new j$1(1).subtract(i3);
    let a2 = t2.fontSize, r3 = a2.divide(A$1);
    const l3 = this.isHaloPass ? t2.haloColor : this._getVertexColor(t2), p5 = this.isLabel ? l3.multiply(this.storage.getAnimationValue(t2.id)) : l3, n2 = this.view.displayViewScreenMat3.multiply(new G$1(t2.pos, 1));
    let d3 = t2.offset, u9 = new j$1(1), y2 = tt.identity();
    if (this.isLabel) {
      if (!t2.referenceSymbol)
        throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const e4 = t2.referenceSymbol, i4 = e4.xy, s3 = e4.z, a3 = this._unpackDirection(e4.w), r4 = t$9(this, t2.id, s3).divide(2), l4 = a3.multiply(r4.add(u$b));
      d3 = d3.add(i4).add(l4);
    } else {
      u9 = t$9(this, t2.id, t2.referenceSize).divide(t2.referenceSize), a2 = a2.multiply(u9), r3 = r3.multiply(u9), d3 = d3.multiply(u9), y2 = n$7(this, t2.id), d3 = y2.multiply(new G$1(d3, 0)).xy;
    }
    const c2 = j$2(t2.bitset, J$1), V3 = this._getViewRotationMatrix(c2).multiply(new G$1(d3, 0));
    let b4 = this.isLabel ? this.clipLabel(t2.zoomRange, t2.clipAngle, c2) : this.clip(t2.id, t2.zoomRange);
    b4 = this.isBackgroundPass ? b4.add(s2.multiply(2)) : b4.add(i3.multiply(2));
    const w3 = new H(n2.xy.add(V3.xy), b4, 1), x4 = t2.textureUV.divide(this.mosaicInfo.size);
    let g3 = new j$1(0);
    if (this.isHaloPass) {
      g3 = t2.haloFontSize.divide(r3).divide(G$2);
    }
    return { glPosition: w3, color: p5, size: r3, textureUV: x4, antialiasingWidth: new j$1(0.105 * A$1).divide(a2).divide(this.view.pixelRatio), haloDistanceOffset: g3, ...this.maybeRunHittest(t2, e3, { vvSizeAdjustment: u9, vvRotation: y2 }) };
  }
  _getViewRotationMatrix(t2) {
    const e3 = this.view.displayViewMat3, i3 = this.view.displayMat3, o2 = new j$1(1).subtract(t2);
    return e3.multiply(t2).add(i3.multiply(o2));
  }
  fragment(t2) {
    const e3 = new j$1(2 / 8), i3 = new j$1(1).subtract(e3), o2 = se(this.mosaicInfo.texture, t2.textureUV).a;
    let s2 = i3.subtract(t2.haloDistanceOffset);
    this.highlight && (s2 = s2.divide(2));
    const a2 = t2.antialiasingWidth, r3 = te(s2.subtract(a2), s2.add(a2), o2);
    return this.getFragmentOutput(t2.color.multiply(r3), t2);
  }
  hittest(t2, e3, { vvSizeAdjustment: i3, vvRotation: o2 }) {
    const s2 = o2.multiply(new G$1(t2.offset.multiply(i3), 0)), a2 = o2.multiply(new G$1(e3.offsetNextVertex1.multiply(i3), 0)), r3 = o2.multiply(new G$1(e3.offsetNextVertex2.multiply(i3), 0)), { viewMat3: l3, tileMat3: p5 } = this.view, n2 = l3.multiply(p5).multiply(new G$1(t2.pos, 1)), d3 = n2.add(p5.multiply(s2)).xy, u9 = n2.add(p5.multiply(a2)).xy, m3 = n2.add(p5.multiply(r3)).xy;
    return P$3(this.hittestRequest.position, d3.xy, u9.xy, m3.xy);
  }
  _unpackDirection(t2) {
    const e3 = new O$1(t2), i3 = Dt(e3, new O$1(2)), o2 = Nt(e3, new O$1(3));
    return new C$1(new j$1(i3).subtract(1), new j$1(o2).subtract(1));
  }
  _getVertexColor(t2) {
    let e3 = t2.color;
    if (this.visualVariableColor) {
      const i3 = this.storage.getColorValue(t2.id);
      e3 = this.visualVariableColor.getColor(i3, t2.color, new Y$1(false));
    }
    if (this.visualVariableOpacity) {
      const i3 = this.storage.getOpacityValue(t2.id), o2 = this.visualVariableOpacity.getOpacity(i3);
      e3 = e3.multiply(o2);
    }
    return e3;
  }
}
e$2([K$2(f$9)], K.prototype, "visualVariableColor", void 0), e$2([K$2(h$a)], K.prototype, "visualVariableOpacity", void 0), e$2([K$2(d$3)], K.prototype, "visualVariableRotation", void 0), e$2([K$2(m$8)], K.prototype, "visualVariableSizeMinMaxValue", void 0), e$2([K$2(p$8)], K.prototype, "visualVariableSizeScaleStops", void 0), e$2([K$2(f$a)], K.prototype, "visualVariableSizeStops", void 0), e$2([K$2(l$4)], K.prototype, "visualVariableSizeUnitValue", void 0), e$2([_$2(p$9)], K.prototype, "mosaicInfo", void 0), e$2([x$4], K.prototype, "isHaloPass", void 0), e$2([x$4], K.prototype, "isBackgroundPass", void 0), e$2([x$4], K.prototype, "isLabel", void 0), e$2([t$4(0, g$3(G)), t$4(1, g$3(Z$1))], K.prototype, "vertex", null), e$2([t$4(0, g$3(J))], K.prototype, "fragment", null);
let u$8 = class u3 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.LabelMeshWriter, this.shaders = { geometry: new K() }, this.drawPhase = E.LABEL | E.LABEL_ALPHA, this.symbologyPlane = S$2.TEXT;
  }
  render(e3, s2) {
    const { context: o2, painter: n2 } = e3, m3 = y$3(e3), u9 = { ...M$1(e3) }, h6 = { shader: this.shaders.geometry, uniforms: { ...d$5(e3, s2.target, s2.instance.getInput().geometry), ...h$8(e3, s2.target), mosaicInfo: n2.textureManager.getMosaicInfo(o2, s2.textureKey) }, defines: { ...m3, isHaloPass: false, isBackgroundPass: true, isLabel: true }, optionalAttributes: s2.instance.optionalAttributes, useComputeBuffer: false };
    n2.setShader(h6), n2.setPipelineState(u9), n2.submitDraw(o2, s2), n2.setShader({ ...h6, defines: { ...m3, isHaloPass: true, isBackgroundPass: false, isLabel: true } }), n2.setPipelineState(u9), n2.submitDraw(o2, s2), n2.setShader({ ...h6, defines: { ...m3, isHaloPass: false, isBackgroundPass: false, isLabel: true } }), n2.setPipelineState(u9), n2.submitDraw(o2, s2);
  }
};
let p$5 = class p3 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.LineMeshWriter, this.shaders = { geometry: new B$1() }, this.symbologyPlane = S$2.LINE;
  }
  render(e3, n2) {
    const { context: m3, painter: h6, pixelRatio: p5 } = e3;
    h6.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(e3, n2.target, n2.instance.getInput().geometry), ...h$8(e3, n2.target), antialiasingControls: n$5(p5) }, defines: { ...y$3(e3) }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(e3) }), h6.setPipelineState(M$1(e3)), h6.submitDraw(m3, n2);
  }
};
class A extends q$3 {
}
e$2([l$3(9, j$1)], A.prototype, "accumulatedDistance", void 0), e$2([l$3(10, C$1)], A.prototype, "segmentDirection", void 0), e$2([l$3(11, H)], A.prototype, "tlbr", void 0);
class R2 extends B$1 {
  _getLineWidthRatio(t2, e3) {
    const s2 = new j$1(o$4), a2 = j$2(t2.bitset, F$7);
    return a2.multiply(Bn(e3, new j$1(0.25))).add(new j$1(1).subtract(a2)).divide(s2);
  }
  _getSDFAlpha(t2) {
    const { halfWidth: e3, normal: i3, tlbr: s2, patternSize: a2, accumulatedDistance: n2, lineWidthRatio: l3 } = t2, h6 = a2.x.multiply(new j$1(2)).multiply(l3), y2 = bn(n2.divide(h6)), w3 = new j$1(0.25).multiply(i3.y).add(new j$1(0.5)), f5 = Sn(s2.xy, s2.zw, new C$1(y2, w3)), b4 = k(se(this.mosaicInfo.texture, f5)).subtract(new j$1(0.5)).multiply(e3), x4 = Zt(new j$1(0.5).subtract(b4), new j$1(0), new j$1(1));
    return new H(x4);
  }
  _getPatternColor(t2) {
    const { halfWidth: e3, normal: i3, color: s2, accumulatedDistance: a2, patternSize: n2, sampleAlphaOnly: l3, tlbr: p5 } = t2, w3 = n2.y.multiply(new j$1(2).multiply(e3).divide(n2.x)), f5 = bn(a2.divide(w3)), b4 = new j$1(0.5).multiply(i3.y).add(new j$1(0.5)), x4 = Sn(p5.xy, p5.zw, new C$1(b4, f5));
    let g3 = se(this.mosaicInfo.texture, x4);
    return null != this.visualVariableColor && (g3 = xt(Ct(l3, new j$1(0.5)), new H(s2.a), s2)), g3;
  }
  vertex(t2, e3) {
    const { segmentDirection: i3, tlbr: s2, bitset: a2 } = t2, n2 = T$2(this, t2), l3 = t2.accumulatedDistance.divide(this.view.displayZoomFactor).add(ln(i3, n2.scaledOffset)), r3 = new C$1(s2.z.subtract(s2.x), s2.w.subtract(s2.y)), m3 = s2.divide(this.mosaicInfo.size.xyxy), c2 = j$2(a2, H$2), p5 = j$2(a2, q$4), u9 = xt(Ct(c2, new j$1(0.5)), this._getLineWidthRatio(t2, n2.scaledHalfWidth), new j$1(1));
    return { ...n2, tlbr: m3, patternSize: r3, accumulatedDistance: l3, isSDF: c2, sampleAlphaOnly: p5, lineWidthRatio: u9, ...this.maybeRunHittest(t2, e3, n2.halfWidth) };
  }
  fragment(t2) {
    const { color: e3, opacity: i3, isSDF: s2 } = t2, a2 = D$2(t2, this.antialiasingControls.blur), n2 = xt(Ct(s2, new j$1(0.5)), this._getSDFAlpha(t2), this._getPatternColor(t2)), l3 = e3.multiply(i3).multiply(a2).multiply(n2);
    return this.getFragmentOutput(l3, t2);
  }
}
e$2([_$2(p$9)], R2.prototype, "mosaicInfo", void 0), e$2([t$4(0, g$3(A)), t$4(1, g$3(q$5))], R2.prototype, "vertex", null);
let h$3 = class h4 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.TexturedLineMeshWriter, this.shaders = { geometry: new R2() }, this.symbologyPlane = S$2.LINE;
  }
  render(e3, n2) {
    const { context: m3, painter: u9, pixelRatio: h6 } = e3;
    u9.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(e3, n2.target, n2.instance.getInput().geometry), ...h$8(e3, n2.target), antialiasingControls: n$5(h6), mosaicInfo: u9.textureManager.getMosaicInfo(m3, n2.textureKey) }, defines: { ...y$3(e3) }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(e3) }), u9.setPipelineState(M$1(e3)), u9.submitDraw(m3, n2);
  }
};
class Q extends S$4 {
}
e$2([l$3(3, H)], Q.prototype, "color", void 0), e$2([l$3(4, H)], Q.prototype, "outlineColor", void 0), e$2([l$3(5, C$1)], Q.prototype, "offset", void 0), e$2([l$3(6, C$1)], Q.prototype, "textureUV", void 0), e$2([l$3(7, H)], Q.prototype, "sizing", void 0), e$2([l$3(8, j$1)], Q.prototype, "placementAngle", void 0), e$2([l$3(9, j$1)], Q.prototype, "sizeRatio", void 0), e$2([l$3(10, C$1)], Q.prototype, "zoomRange", void 0);
class W extends v$3 {
}
e$2([l$3(12, C$1)], W.prototype, "offsetNextVertex1", void 0), e$2([l$3(13, C$1)], W.prototype, "offsetNextVertex2", void 0), e$2([l$3(14, C$1)], W.prototype, "textureUVNextVertex1", void 0), e$2([l$3(15, C$1)], W.prototype, "textureUVNextVertex2", void 0);
class X extends F$5 {
}
function Y(t2, e3, i3, o2) {
  return e3.multiply(t2.x).add(i3.multiply(t2.y)).add(o2.multiply(t2.z));
}
function Z2(t2) {
  return t2.multiply(t2).divide(128);
}
class $ extends P$2 {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(t2, e3) {
    const i3 = Z2(t2.sizing.x), o2 = Z2(t2.sizing.y), s2 = Z2(t2.sizing.z), l3 = t2.placementAngle, r3 = j$2(t2.bitset, o$6.bitset.isSDF), y2 = j$2(t2.bitset, o$6.bitset.isMapAligned), h6 = j$2(t2.bitset, o$6.bitset.scaleSymbolsProportionally), c2 = z$4(t2.bitset, o$6.bitset.colorLocked), x4 = u$c(this, t2.id), V3 = r$4(this, t2.id, t2.color, c2).multiply(x4), v3 = this.view.displayViewScreenMat3.multiply(new G$1(t2.pos.xy, 1)), w3 = t$9(this, t2.id, s2).divide(s2), f5 = i3.multiply(w3), b4 = t2.offset.xy.multiply(w3);
    let S2 = o2.multiply(h6.multiply(w3.subtract(1)).add(1));
    S2 = Un(S2, Bn(f5.subtract(0.99), new j$1(0)));
    const g3 = Bn(S2, new j$1(1)), C2 = Un(S2, new j$1(1)), M2 = tt.fromRotation(l3.multiply(c$5)), _3 = n$7(this, t2.id), U2 = this._getViewRotationMatrix(y2).multiply(_3).multiply(M2).multiply(new G$1(b4.xy, 0)), R3 = this.clip(t2.id, t2.zoomRange), N = new H(v3.xy.add(U2.xy), R3, 1), F5 = t2.textureUV.divide(this.mosaicInfo.size), D2 = t2.outlineColor.multiply(C2), k2 = j$2(t2.bitset, o$6.bitset.overrideOutlineColor), A2 = t2.sizeRatio.multiply(f5).multiply(0.5);
    return { glPosition: N, color: V3, textureUV: F5, outlineColor: D2, outlineSize: g3, distanceToPx: A2, isSDF: r3, overrideOutlineColor: k2, ...this.maybeRunHittest(t2, e3, { pos: t2.pos, size: f5, sizeCorrection: w3, isMapAligned: y2, outlineSize: g3, distanceToPx: A2, isSDF: r3 }) };
  }
  fragment(t2) {
    const e3 = this._getColor(t2.textureUV, t2);
    return this.getFragmentOutput(e3, t2);
  }
  hittest(t2, e3, i3) {
    return xt(St(i3.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(t2, e3, i3), this._hittestMarker(t2, e3, i3));
  }
  _getViewRotationMatrix(t2) {
    const e3 = this.view.displayViewMat3, i3 = this.view.displayMat3, o2 = new j$1(1).subtract(t2);
    return e3.multiply(t2).add(i3.multiply(o2));
  }
  _getViewScreenMatrix(t2) {
    const e3 = this.view.viewMat3.multiply(this.view.tileMat3), i3 = this.view.tileMat3, o2 = new j$1(1).subtract(t2);
    return e3.multiply(t2).add(i3.multiply(o2));
  }
  _getColor(t2, e3) {
    return xt(Bt(e3.isSDF, new j$1(1)), this._getSDFColor(t2, e3), this._getSpriteColor(t2, e3));
  }
  _getSpriteColor(t2, e3) {
    return se(this.mosaicInfo.texture, t2).multiply(e3.color);
  }
  _getSDFColor(t2, e3) {
    const i3 = se(this.mosaicInfo.texture, t2), o2 = new j$1(0.5).subtract(k(i3)).multiply(e3.distanceToPx).multiply(o$5), s2 = Zt(new j$1(0.5).subtract(o2), new j$1(0), new j$1(1)), l3 = e3.color.multiply(s2);
    let r3 = e3.outlineSize;
    this.highlight && (r3 = Bn(r3, e3.overrideOutlineColor.multiply(4)));
    const a2 = r3.multiply(0.5), p5 = Xt(o2).subtract(a2), d3 = Zt(new j$1(0.5).subtract(p5), new j$1(0), new j$1(1)), m3 = Sn(e3.outlineColor, e3.color, e3.overrideOutlineColor).multiply(d3);
    return new j$1(1).subtract(m3.a).multiply(l3).add(m3);
  }
  _hittestSmallMarker(t2, e3, i3) {
    const { position: o2, distance: s2, smallSymbolDistance: l3 } = this.hittestRequest, r3 = s2.subtract(l3), { viewMat3: p5, tileMat3: u9 } = this.view, n2 = p5.multiply(u9).multiply(new G$1(i3.pos, 1)).xy, d3 = i3.size.multiply(0.5);
    return sn(n2, o2).subtract(d3).add(r3);
  }
  _hittestMarker(t2, e3, i3) {
    const { pos: o2, size: s2, sizeCorrection: l3, isMapAligned: r3, outlineSize: p5, isSDF: u9, distanceToPx: d3 } = i3, y2 = new G$1(t2.offset.multiply(l3), 0), h6 = new G$1(e3.offsetNextVertex1.multiply(l3), 0), c2 = new G$1(e3.offsetNextVertex2.multiply(l3), 0), { viewMat3: x4, tileMat3: V3 } = this.view, v3 = x4.multiply(V3).multiply(new G$1(o2, 1)), w3 = this._getViewScreenMatrix(r3), f5 = v3.add(w3.multiply(y2)).xy, z3 = v3.add(w3.multiply(h6)).xy, C2 = v3.add(w3.multiply(c2)).xy, M2 = this.hittestRequest.position, _3 = this.hittestRequest.distance, j2 = h$b(M2.add(new C$1(yt(_3), yt(_3))), f5, z3, C2), U2 = h$b(M2.add(new C$1(0, yt(_3))), f5, z3, C2), D2 = h$b(M2.add(new C$1(_3, yt(_3))), f5, z3, C2), I2 = h$b(M2.add(new C$1(yt(_3), 0)), f5, z3, C2), O2 = h$b(M2, f5, z3, C2), k2 = h$b(M2.add(new C$1(_3, 0)), f5, z3, C2), A2 = h$b(M2.add(new C$1(yt(_3), _3)), f5, z3, C2), P2 = h$b(M2.add(new C$1(0, _3)), f5, z3, C2), T2 = h$b(M2.add(new C$1(_3, _3)), f5, z3, C2), q2 = t2.textureUV.divide(this.mosaicInfo.size), G2 = e3.textureUVNextVertex1.divide(this.mosaicInfo.size), H$12 = e3.textureUVNextVertex2.divide(this.mosaicInfo.size), L2 = { color: new H(1), outlineColor: new H(1), overrideOutlineColor: new j$1(1), outlineSize: p5, distanceToPx: d3, isSDF: u9 };
    let B2 = new j$1(0);
    return B2 = B2.add(g$4(j2).multiply(this._getColor(Y(j2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(U2).multiply(this._getColor(Y(U2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(D2).multiply(this._getColor(Y(D2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(I2).multiply(this._getColor(Y(I2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(O2).multiply(this._getColor(Y(O2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(k2).multiply(this._getColor(Y(k2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(A2).multiply(this._getColor(Y(A2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(P2).multiply(this._getColor(Y(P2, q2, G2, H$12), L2).a)), B2 = B2.add(g$4(T2).multiply(this._getColor(Y(T2, q2, G2, H$12), L2).a)), ee(B2, new j$1(0.05)).multiply(q$2(this.hittestRequest));
  }
}
e$2([K$2(f$9)], $.prototype, "visualVariableColor", void 0), e$2([K$2(h$a)], $.prototype, "visualVariableOpacity", void 0), e$2([K$2(d$3)], $.prototype, "visualVariableRotation", void 0), e$2([K$2(m$8)], $.prototype, "visualVariableSizeMinMaxValue", void 0), e$2([K$2(p$8)], $.prototype, "visualVariableSizeScaleStops", void 0), e$2([K$2(f$a)], $.prototype, "visualVariableSizeStops", void 0), e$2([K$2(l$4)], $.prototype, "visualVariableSizeUnitValue", void 0), e$2([_$2(p$9)], $.prototype, "mosaicInfo", void 0), e$2([t$4(0, g$3(Q)), t$4(1, g$3(W))], $.prototype, "vertex", null), e$2([t$4(0, g$3(X))], $.prototype, "fragment", null);
let u$7 = class u4 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.MarkerMeshWriter, this.shaders = { geometry: new $() }, this.symbologyPlane = S$2.MARKER;
  }
  render(e3, n2) {
    const { context: a2, painter: m3 } = e3;
    m3.setShader({ shader: this.shaders.geometry, uniforms: { ...d$5(e3, n2.target, n2.instance.getInput().geometry), ...h$8(e3, n2.target), mosaicInfo: m3.textureManager.getMosaicInfo(a2, n2.textureKey, true) }, defines: { ...y$3(e3) }, optionalAttributes: n2.instance.optionalAttributes, useComputeBuffer: m$7(e3) }), m3.setPipelineState(M$1(e3)), m3.submitDraw(a2, n2);
  }
};
class e2 {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const t2 = /* @__PURE__ */ new Map();
    for (const o2 in this.locations)
      t2.set(o2, this.locations[o2].index);
    return t2;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t2 = new Set(Object.keys(this.options));
      this._optionPropertyKeys = t2;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const o2 = this.locationsMap, e3 = Array.from(o2.entries()).map(([t2, o3]) => `${t2}.${o3}`).join("."), n2 = c$6(e3);
      this._locationInfo = { hash: n2, locations: o2 };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t2 = /* @__PURE__ */ new Map();
    for (const [o2, e3] of this.locationsMap.entries())
      t2.set("a_" + o2, e3);
    return t2;
  }
  getShaderKey(t2, o2, e3) {
    const n2 = Object.keys(e3).filter((t3) => e3[t3]).map((t3) => `${t3}_${e3[t3].toString()}`).join("."), r3 = Object.keys(o2).filter((t3) => this.optionPropertyKeys.has(t3)).join(".");
    return `${t2.hash}.${n2}.${r3}`;
  }
  getProgram(t2, e3, n2, r3) {
    let i3 = "", s2 = "";
    for (const o2 in n2)
      if (n2[o2]) {
        const t3 = "boolean" == typeof n2[o2] ? `#define ${o2}
` : `#define ${o2} ${n2[o2]}
`;
        i3 += t3, s2 += t3;
      }
    return i3 += this.vertexShader, s2 += this.fragmentShader, new a$6(i3, s2, this.renamedLocationsMap, this.locationInfo, this._getUniformBindings(e3), this._transformFeedbackBindings);
  }
  _getUniformBindings(t2) {
    const o2 = [];
    for (const e3 in this.required) {
      const t3 = this.required[e3];
      o2.push({ uniformHydrated: null, shaderModulePath: e3, uniformName: e3, uniformType: t3.type, uniformArrayElementType: n$3(t3), uniformArrayLength: r$1(t3) });
    }
    for (const e3 in t2) {
      const i3 = this.options[e3];
      if (t2[e3])
        for (const t3 in i3) {
          const s2 = i3[t3];
          o2.push({ uniformHydrated: null, shaderModulePath: `${e3}.${t3}`, uniformName: t3, uniformType: s2.type, uniformArrayElementType: n$3(s2), uniformArrayLength: r$1(s2) });
        }
    }
    return o2;
  }
}
const n$3 = (t2) => "array" === t2.type ? t2.elementType?.type : void 0, r$1 = (t2) => "array" === t2.type ? t2.size : void 0;
const p$4 = { hittestDist: j$1, hittestPos: C$1 }, y$2 = { filterFlags: S$3, animation: S$3, visualVariableData: S$3, dataDriven0: S$3, dataDriven1: S$3, dataDriven2: S$3, gpgpu: S$3, size: j$1 }, d$2 = { displayViewScreenMat3: tt, displayViewMat3: tt, displayMat3: tt, viewMat3: tt, tileMat3: tt, displayZoomFactor: j$1, requiredZoomFactor: j$1, tileOffset: C$1, currentScale: j$1, currentZoom: j$1, metersPerSRUnit: j$1 };
let u$6 = class u5 extends e2 {
  constructor() {
    super(...arguments), this.vertexShader = n$8("materials/pie/pie.vert"), this.fragmentShader = n$8("materials/pie/pie.frag"), this.required = { ...y$2, ...d$2, outlineWidth: j$1, colors: U, defaultColor: H, othersColor: H, outlineColor: H, donutRatio: j$1, sectorThreshold: j$1 }, this.options = { hittestUniforms: p$4, visualVariableSizeMinMaxValue: { minMaxValueAndSize: H }, visualVariableSizeScaleStops: { sizes: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 }, values: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 } }, visualVariableSizeStops: { sizes: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 }, values: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 } }, visualVariableSizeUnitValue: { unitValueToPixelsRatio: j$1 }, visualVariableOpacity: { opacities: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 }, opacityValues: { ...U.ofType(j$1, 8), type: "array", elementType: j$1, size: 8 } } }, this.locations = { pos: { index: 0, type: C$1 }, id: { index: 1, type: G$1 }, bitset: { index: 2, type: j$1 }, offset: { index: 3, type: C$1 }, texCoords: { index: 4, type: C$1 }, size: { index: 5, type: C$1 }, referenceSize: { index: 6, type: j$1 }, zoomRange: { index: 7, type: C$1 } }, this.defines = { VV_SIZE_MIN_MAX_VALUE: "boolean", VV_SIZE_SCALE_STOPS: "boolean", VV_SIZE_FIELD_STOPS: "boolean", VV_SIZE_UNIT_VALUE: "boolean", VV_OPACITY: "boolean", HITTEST: "boolean", numberOfFields: "number", highlight: "boolean", inside: "boolean", outside: "boolean" };
  }
  setNumberOfFields(e3) {
    this.required.colors = { ...U.ofType(H, e3), type: "array", elementType: H, size: e3 };
  }
};
let u$5 = class u6 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.PieChartMeshWriter, this.shaders = { geometry: new u$6() }, this.symbologyPlane = S$2.MARKER;
  }
  render(e3, o2) {
    const { context: h6, painter: m3 } = e3, { instance: u9, target: l3 } = o2, n2 = this.shaders.geometry, S2 = u9.getInput(), V3 = S2.numberOfFields, g3 = m$7(e3), p5 = h$8(e3, l3), f5 = y$3(e3);
    n2.setNumberOfFields(V3), m3.setShader({ shader: n2, uniforms: { ...d$5(e3, o2.target, S2.geometry), ...p5.storage, ...p5.view, hittestUniforms: p5.hittestRequest ? { hittestDist: p5.hittestRequest?.distance, hittestPos: p5.hittestRequest?.position } : null }, defines: { VV_SIZE_MIN_MAX_VALUE: !!S2.geometry.visualVariableSizeMinMaxValue, VV_SIZE_SCALE_STOPS: !!S2.geometry.visualVariableSizeScaleStops, VV_SIZE_FIELD_STOPS: !!S2.geometry.visualVariableSizeStops, VV_SIZE_UNIT_VALUE: !!S2.geometry.visualVariableSizeUnitValue, VV_OPACITY: !!S2.geometry.visualVariableOpacity, HITTEST: g3, highlight: p5.highlight ? 1 : 0, ...f5, numberOfFields: V3 }, optionalAttributes: {}, useComputeBuffer: g3 }), m3.setPipelineState(M$1(e3)), m3.submitDraw(h6, o2);
  }
};
let u$4 = class u7 extends e$1 {
  constructor() {
    super(...arguments), this.meshWriter = a$5.TextMeshWriter, this.shaders = { geometry: new K() }, this.symbologyPlane = S$2.TEXT;
  }
  render(e3, o2) {
    const { context: n2, painter: m3 } = e3, u9 = y$3(e3), h6 = { shader: this.shaders.geometry, uniforms: { ...d$5(e3, o2.target, o2.instance.getInput().geometry), ...h$8(e3, o2.target), mosaicInfo: m3.textureManager.getMosaicInfo(n2, o2.textureKey) }, defines: { ...u9, isHaloPass: false, isBackgroundPass: true, isLabel: false }, optionalAttributes: o2.instance.optionalAttributes, useComputeBuffer: m$7(e3) };
    m3.setShader(h6), m3.setPipelineState(M$1(e3)), m3.submitDraw(n2, o2), m3.setShader({ ...h6, defines: { ...u9, isHaloPass: true, isBackgroundPass: false, isLabel: false } }), m3.submitDraw(n2, o2), m3.setShader({ ...h6, defines: { ...u9, isHaloPass: false, isBackgroundPass: false, isLabel: false } }), m3.submitDraw(n2, o2);
  }
};
const h$2 = { fill: new m$5("fill"), patternFill: new h$5("patternFill"), complexFill: new h$6("complexFill"), outlineFill: new l$2("outlineFill"), patternOutlineFill: new u$9("patternOutlineFill"), complexOutlineFill: new u$a("complexOutlineFill"), marker: new u$7("marker"), pieChart: new u$5("pieChart"), line: new p$5("line"), texturedLine: new h$3("texturedLine"), text: new u$4("text"), label: new u$8("label"), heatmap: new p$6("heatmap"), dotDensity: new f$7("dotDensity") };
function F4() {
  for (const e3 in h$2) {
    h$2[e3].startup();
  }
}
function T(e3) {
  for (const i3 in h$2) {
    h$2[i3].shutdown(e3);
  }
}
function n$2(n2, t2) {
  const r3 = n2.slice(0, t2), e3 = t2 - r3.length;
  for (let o2 = 0; o2 < e3; o2++) {
    const n3 = r3[r3.length - 1];
    r3.push(n3);
  }
  return r3;
}
function t$3(n2) {
  if (!n2)
    return [0, 0, 0, 0];
  const { r: t2, g: r3, b: e3, a: o2 } = n2;
  return [t2 * (o2 / 255), r3 * (o2 / 255), e3 * (o2 / 255), o2];
}
const l$1 = 8, s$2 = l$1 - 2, n$1 = () => s$4.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function u$3(e3) {
  return e3.map((e4) => a$3(e4) ? i$1(e4.clone()) : e4);
}
function a$3(e3) {
  return ("size" === e3.type || "color" === e3.type || "opacity" === e3.type) && null != e3.stops;
}
function i$1(e3) {
  return e3.stops = b$2(e3.type, e3.stops ?? []), e3;
}
function p$3(e3, o2, r3) {
  return (1 - r3) * e3 + r3 * o2;
}
function c$3(e3, o2) {
  const [t2, ...l3] = o2, n2 = l3.pop(), u9 = l3[0].value, a2 = l3[l3.length - 1].value, i3 = (a2 - u9) / s$2, c2 = [];
  for (let s2 = u9; s2 < a2; s2 += i3) {
    let t3 = 0;
    for (; s2 >= l3[t3].value; )
      t3++;
    const n3 = l3[t3], u10 = o2[t3 - 1], a3 = s2 - u10.value, i4 = n3.value === u10.value ? 1 : a3 / (n3.value - u10.value);
    if ("color" === e3) {
      const e4 = l3[t3], r3 = o2[t3 - 1], n4 = e4.color.clone();
      n4.r = p$3(r3.color.r, n4.r, i4), n4.g = p$3(r3.color.g, n4.g, i4), n4.b = p$3(r3.color.b, n4.b, i4), n4.a = p$3(r3.color.a, n4.a, i4), c2.push({ value: s2, color: n4, label: e4.label });
    } else if ("size" === e3) {
      const e4 = l3[t3], n4 = o2[t3 - 1], u11 = o$7(e4.size), a4 = p$3(o$7(n4.size), u11, i4);
      c2.push({ value: s2, size: a4, label: e4.label });
    } else {
      const e4 = l3[t3], r3 = p$3(o2[t3 - 1].opacity, e4.opacity, i4);
      c2.push({ value: s2, opacity: r3, label: e4.label });
    }
  }
  return [t2, ...c2, n2];
}
function f$3(e3) {
  const [o2, ...r3] = e3, t2 = r3.pop();
  for (; r3.length > s$2; ) {
    let e4 = 0, o3 = 0;
    for (let t3 = 1; t3 < r3.length; t3++) {
      const l3 = r3[t3 - 1], s2 = r3[t3], n2 = Math.abs(s2.value - l3.value);
      n2 > o3 && (o3 = n2, e4 = t3);
    }
    r3.splice(e4, 1);
  }
  return [o2, ...r3, t2];
}
function b$2(e3, o2) {
  return o2.length <= l$1 ? o2 : (n$1().warn(`Found ${o2.length} Visual Variable stops, but MapView only supports ${l$1}. Displayed stops will be simplified.`), o2.length > 2 * l$1 ? c$3(e3, o2) : f$3(o2));
}
function g2() {
  const { supportsColorBufferFloat: e3, supportsColorBufferFloatBlend: o2, supportsColorBufferHalfFloat: r3 } = t$a();
  return e3 && o2 || r3;
}
function m$2(o2) {
  if (!o2)
    return true;
  switch (o2.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!g2()) {
        const o3 = t$a(), r3 = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((e3) => !o3[e3]).join(", ");
        return n$1().errorOnce(new s$5("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${r3}`)), false;
      }
  }
  return true;
}
const u$2 = 1.25, o$2 = 128, p$2 = 128;
function c$2(e3) {
  if (!e3.stops?.length)
    return null;
  const a2 = e3.stops.sort((e4, a3) => e4.value - a3.value), i3 = n$2(a2, 8), s2 = i3.map(({ value: e4 }) => e4), l3 = i3.map(({ color: e4 }) => t$3(e4));
  return { values: s2, colors: l3 };
}
function v$1(e3) {
  if (!e3.stops?.length)
    return null;
  const a2 = e3.stops.sort((e4, a3) => e4.value - a3.value), i3 = n$2(a2, 8);
  return { opacityValues: i3.map(({ value: e4 }) => e4), opacities: i3.map(({ opacity: e4 }) => e4) };
}
function V$1(e3) {
  return { rotationType: "geographic" === e3.rotationType ? i$4.Geographic : i$4.Arithmatic };
}
function f$2(a2) {
  if (!a2.stops?.length)
    return null;
  if (a2.stops.some((e3) => e3.useMaxValue || e3.useMinValue))
    return (i4, l4) => {
      const r3 = i4.statisticsByLevel.get(l4.key.level), n2 = a2.stops.map((i5) => ({ value: i5.useMaxValue ? r3?.get(a2.field)?.maxValue ?? 0 : i5.useMinValue ? r3?.get(a2.field)?.minValue ?? 0 : i5.value, size: i5.size ? u$d(i5.size) : i$5 })).sort((e3, a3) => e3.value - a3.value), u9 = n$2(n2, 8);
      return { values: u9.map(({ value: e3 }) => e3), sizes: u9.map(({ size: e3 }) => e3) };
    };
  const i3 = a2.stops.sort((e3, a3) => e3.value - a3.value), l3 = n$2(i3, 8);
  return { values: l3.map(({ value: e3 }) => e3), sizes: l3.map(({ size: a3 }) => u$d(a3)) };
}
function S$1(e3) {
  return (s2) => {
    const { state: l3 } = s2;
    return { unitValueToPixelsRatio: W$1(l3.spatialReference) / m$9[e3.valueUnit] / l3.resolution };
  };
}
function b$1(e3, a2) {
  const i3 = a2.length;
  if (e3 < a2[0].value || 1 === i3)
    return a2[0].size;
  for (let s2 = 1; s2 < i3; s2++)
    if (e3 < a2[s2].value) {
      const i4 = (e3 - a2[s2 - 1].value) / (a2[s2].value - a2[s2 - 1].value);
      return a2[s2 - 1].size + i4 * (a2[s2].size - a2[s2 - 1].size);
    }
  return a2[i3 - 1].size;
}
function z$1(a2) {
  const { minDataValue: i3, maxDataValue: s2, minSize: l3, maxSize: t2 } = a2;
  if ("object" == typeof l3 && "object" == typeof t2)
    return (a3, r3) => {
      const n2 = a3.state.scale, u9 = u$d(b$1(n2, l3.stops)), o2 = u$d(b$1(n2, t2.stops));
      return { minMaxValueAndSize: [i3, s2, u9, o2] };
    };
  if ("object" == typeof l3 || "object" == typeof t2)
    throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return { minMaxValueAndSize: [i3, s2, u$d(l3), u$d(t2)] };
}
const x$1 = { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: null, visualVariableSizeStops: null, visualVariableSizeScaleStops: null, visualVariableSizeOutlineScaleStops: null, visualVariableSizeUnitValue: null, visualVariableSizeMinMaxValue: null };
function h$1(e3, a2 = p$2, i3 = u$2) {
  if (e3.visualVariableSizeMinMaxValue)
    return e3.visualVariableSizeMinMaxValue instanceof Function ? o$2 : Math.max(e3.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * i3, a2);
  if (e3.visualVariableSizeScaleStops) {
    if (e3.visualVariableSizeScaleStops instanceof Function)
      return o$2;
    const s2 = e3.visualVariableSizeScaleStops.sizes;
    return Math.max(s2[s2.length - 1] * i3, a2);
  }
  if (e3.visualVariableSizeStops) {
    if (e3.visualVariableSizeStops instanceof Function)
      return o$2;
    const s2 = e3.visualVariableSizeStops.sizes;
    return Math.max(s2[s2.length - 1] * i3, a2);
  }
  return e3.visualVariableSizeUnitValue ? 2 * o$2 : 0;
}
function y$1(e3) {
  const a2 = { ...x$1 };
  if (!e3 || !("visualVariables" in e3) || !e3.visualVariables)
    return a2;
  for (const i3 of u$3(e3.visualVariables))
    switch (i3.type) {
      case "color":
        a2.visualVariableColor = c$2(i3);
        break;
      case "opacity":
        a2.visualVariableOpacity = v$1(i3);
        break;
      case "rotation":
        a2.visualVariableRotation = V$1(i3);
        break;
      case "size":
        switch (M(i3)) {
          case "field-stops":
            a2.visualVariableSizeStops = f$2(i3);
            break;
          case "scale-stops":
            "outline" === i3.target ? a2.visualVariableSizeOutlineScaleStops = f$2(i3) : a2.visualVariableSizeScaleStops = f$2(i3);
            break;
          case "min-max":
            a2.visualVariableSizeMinMaxValue = z$1(i3);
            break;
          case "unit-value":
            a2.visualVariableSizeUnitValue = S$1(i3);
        }
        break;
      default:
        console.error("Unable to handle VV type");
    }
  return a2;
}
function M(e3) {
  if ("number" == typeof e3.minDataValue && "number" == typeof e3.maxDataValue && null != e3.minSize && null != e3.maxSize)
    return "min-max";
  if ((e3.expression && "view.scale" === e3.expression || e3.valueExpression && "$view.scale" === e3.valueExpression) && Array.isArray(e3.stops))
    return "scale-stops";
  if ((null != e3.field || e3.expression && "view.scale" !== e3.expression || e3.valueExpression && "$view.scale" !== e3.valueExpression) && (Array.isArray(e3.stops) || "levels" in e3 && e3.levels))
    return "field-stops";
  if ((null != e3.field || e3.expression && "view.scale" !== e3.expression || e3.valueExpression && "$view.scale" !== e3.valueExpression) && null != e3.valueUnit)
    return "unit-value";
  throw new Error("InternalError: Found unknown sizeVV type");
}
function a$2(a2) {
  return !!(a2.visualVariableSizeMinMaxValue || a2.visualVariableSizeScaleStops || a2.visualVariableSizeStops || a2.visualVariableSizeUnitValue || a2.visualVariableSizeOutlineScaleStops);
}
function i2(a2) {
  return !!a2.visualVariableRotation;
}
function s$1(e3) {
  return e3.minScale || e3.maxScale ? { minScale: e3.minScale ?? 0, maxScale: e3.maxScale ?? 0 } : null;
}
function t$2(e3) {
  if (null == e3)
    return null;
  if (Array.isArray(e3)) {
    const [a2, i3, l3, o2] = e3;
    return [a2, i3, l3, 255 * o2];
  }
  return "string" == typeof e3 ? e3 : { ...e3, defaultValue: t$2(e3?.defaultValue) };
}
async function n(a2, i3) {
  const { cimResourceManager: l3, cimAnalyzer: o2, scaleExpression: r3 } = i3.schemaOptions;
  await Promise.all(K$3.fetchResources(a2.symbol, l3, []));
  const t2 = o2.analyzeSymbolReference(a2, false), n2 = { scaleInfo: s$1(a2), scaleExpression: r3 }, u9 = [];
  for (const e3 of t2)
    switch (e3.type) {
      case "marker":
        u9.push(...c$1(e3, i3, n2));
        break;
      case "fill":
        u9.push(...m$1(e3, i3, n2));
        break;
      case "line":
        u9.push(...b3(e3, i3, n2));
        break;
      case "text":
        u9.push(...v2(e3, i3, n2));
    }
  return u9;
}
function c$1(e3, a2, o2) {
  const { uniforms: r3, schemaOptions: s2 } = a2, { store: t2 } = s2, n2 = e3.isOutline ? { ...x$1, visualVariableSizeScaleStops: r3.visualVariableSizeOutlineScaleStops } : { visualVariableColor: r3.visualVariableColor, visualVariableOpacity: r3.visualVariableOpacity, visualVariableSizeMinMaxValue: r3.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r3.visualVariableSizeScaleStops, visualVariableSizeStops: r3.visualVariableSizeStops, visualVariableSizeUnitValue: r3.visualVariableSizeUnitValue, visualVariableRotation: r3.visualVariableRotation };
  return u$1(t2.ensureInstance(h$2.marker, { geometry: n2 }, { zoomRange: !!o2.scaleInfo }), e3, r3, o2);
}
function u$1(e3, i3, l3, { scaleInfo: s2, scaleExpression: n2 }) {
  const c2 = a$2(l3);
  return [e3.createMeshInfo({ params: { size: i3.size, scaleX: i3.scaleX, anchorX: i3.anchorPoint.x, anchorY: i3.anchorPoint.y, angle: i3.rotation, color: t$2(i3.color) ?? [0, 0, 0, 0], colorLocked: i3.colorLocked, frameHeight: i3.frameHeight, widthRatio: i3.widthRatio, scaleInfo: s2, offsetX: i3.offsetX, offsetY: i3.offsetY, outlineColor: t$2(i3.outlineColor) ?? [0, 0, 0, 0], outlineSize: i3.outlineWidth, referenceSize: i3.referenceSize || t$b.CIMVectorMarker.size, rotateClockwise: i3.rotateClockwise, scaleFactor: n2 ?? 1, sizeRatio: i3.sizeRatio, alignment: i3.alignment, isAbsoluteAnchorPoint: i3.isAbsoluteAnchorPoint, scaleSymbolsProportionally: i3.scaleSymbolsProportionally, sprite: i3.spriteRasterizationParam, hasSizeVV: c2, placement: i3.markerPlacement, effects: i3.effects ? { type: "cim-effect-infos", effectInfos: i3.effects } : null, transforms: i3.transform, minPixelBuffer: h$1(l3) } })];
}
function f$1(e3, a2, l3) {
  const { uniforms: o2, schemaOptions: r3 } = a2, { store: s2 } = r3;
  return p$1(s2.ensureInstance(h$2.fill, { geometry: { visualVariableColor: e3.colorLocked ? null : o2.visualVariableColor, visualVariableOpacity: o2.visualVariableOpacity } }, { zoomRange: !!l3.scaleInfo }), e3, l3);
}
function p$1(e3, a2, { scaleInfo: i3 }) {
  return [e3.createMeshInfo({ params: { color: t$2(a2.color) ?? [0, 0, 0, 0], scaleInfo: i3, effects: a2.effects ? { type: "cim-effect-infos", effectInfos: a2.effects } : null } })];
}
function m$1(e3, a2, l3) {
  if (!e3.spriteRasterizationParam)
    return f$1(e3, a2, l3);
  const { uniforms: o2, schemaOptions: r3 } = a2, { store: s2 } = r3;
  return S(s2.ensureInstance(h$2.complexFill, { geometry: { visualVariableColor: e3.colorLocked ? null : o2.visualVariableColor, visualVariableOpacity: o2.visualVariableOpacity } }, { zoomRange: !!l3.scaleInfo }), e3, null != o2.visualVariableColor, l3);
}
function S(e3, a2, i3, { scaleInfo: l3 }) {
  if (!a2.spriteRasterizationParam)
    throw new Error("InternalError: Sprite should always be defined");
  const o2 = !!a2.hasUnresolvedReplacementColor && (!i3 || a2.colorLocked), r3 = a2.sampleAlphaOnly && !o2, s2 = a2.spriteRasterizationParam;
  return [e3.createMeshInfo({ params: { color: t$2(a2.color) ?? [0, 0, 0, 0], height: a2.height, aspectRatio: a2.scaleX, offsetX: a2.offsetX, offsetY: a2.offsetY, scaleX: 1, scaleY: 1, angle: a2.angle, applyRandomOffset: a2.applyRandomOffset, sampleAlphaOnly: r3, scaleProportionally: "CIMHatchFill" === s2.resource.type, sprite: s2, scaleInfo: l3, effects: a2.effects ? { type: "cim-effect-infos", effectInfos: a2.effects } : null } })];
}
function b3(e3, a2, o2) {
  const { uniforms: r3, schemaOptions: s2 } = a2, { store: t2 } = s2, n2 = e3.isOutline ? { ...x$1, visualVariableSizeScaleStops: r3.visualVariableSizeOutlineScaleStops } : { visualVariableColor: e3.colorLocked ? null : r3.visualVariableColor, visualVariableOpacity: r3.visualVariableOpacity, visualVariableSizeMinMaxValue: r3.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r3.visualVariableSizeScaleStops, visualVariableSizeStops: r3.visualVariableSizeStops, visualVariableSizeUnitValue: r3.visualVariableSizeUnitValue }, c2 = { geometry: n2 }, u9 = !!(n2.visualVariableSizeMinMaxValue || n2.visualVariableSizeScaleStops || n2.visualVariableSizeStops || n2.visualVariableSizeUnitValue);
  if (!e3.spriteRasterizationParam) {
    return h5(t2.ensureInstance(h$2.line, c2, { zoomRange: !!o2.scaleInfo }), e3, u9, o2);
  }
  return z2(t2.ensureInstance(h$2.texturedLine, c2, { zoomRange: !!o2.scaleInfo }), e3, u9, o2);
}
function V2(e3, a2, { scaleInfo: i3 }) {
  return { params: { color: t$2(e3.color) ?? [0, 0, 0, 0], width: e3.width, referenceWidth: e3.referenceWidth, capType: e3.cap, joinType: e3.join, miterLimit: e3.miterLimit, scaleInfo: i3, hasSizeVV: a2, effects: e3.effects ? { type: "cim-effect-infos", effectInfos: e3.effects } : null } };
}
function h5(e3, a2, i3, l3) {
  if (a2.spriteRasterizationParam)
    throw new Error("InternalError: Sprite should not be defined");
  return [e3.createMeshInfo({ params: V2(a2, i3, l3).params })];
}
function z2(e3, a2, i3, l3) {
  const { spriteRasterizationParam: o2, scaleDash: r3, sampleAlphaOnly: s2 } = a2;
  if (!o2)
    throw new Error("InternalError: Sprite should be defined");
  return [e3.createMeshInfo({ params: { ...V2(a2, i3, l3).params, shouldScaleDash: r3 ?? false, shouldSampleAlphaOnly: s2, isSDF: "CIMPictureStroke" !== o2.resource.type, sprite: o2 } })];
}
function v2(e3, a2, l3) {
  const { uniforms: o2, schemaOptions: r3 } = a2, { store: s2 } = r3;
  return y(s2.ensureInstance(h$2.text, { geometry: { visualVariableColor: e3.colorLocked ? null : o2.visualVariableColor, visualVariableOpacity: o2.visualVariableOpacity, visualVariableRotation: o2.visualVariableRotation, visualVariableSizeMinMaxValue: o2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: o2.visualVariableSizeScaleStops, visualVariableSizeStops: o2.visualVariableSizeStops, visualVariableSizeUnitValue: o2.visualVariableSizeUnitValue } }, { zoomRange: !!l3.scaleInfo, referenceSymbol: false, clipAngle: false }), e3, o2, l3);
}
function y(e3, a2, i3, { scaleInfo: l3, scaleExpression: r3 }) {
  return [e3.createMeshInfo({ params: { boxBackgroundColor: t$2(a2.backgroundColor), boxBorderLineColor: t$2(a2.borderLineColor), boxBorderLineSize: a2.borderLineWidth ?? 0, color: t$2(a2.color) ?? [0, 0, 0, 0], offsetX: a2.offsetX, offsetY: a2.offsetY, postAngle: a2.angle, fontSize: a2.size, referenceSize: a2.referenceSize, decoration: a2.decoration, haloColor: t$2(a2.outlineColor) ?? [0, 0, 0, 0], haloFontSize: a2.outlineSize, lineWidth: a2.lineWidth || 512, lineHeightRatio: 1, horizontalAlignment: a2.horizontalAlignment ?? "center", verticalAlignment: a2.verticalAlignment ?? "baseline", useCIMAngleBehavior: false, glyphs: a2.textRasterizationParam, scaleInfo: l3, effects: a2.effects ? { type: "cim-effect-infos", effectInfos: a2.effects } : null, placement: a2.markerPlacement, transforms: a2.transform, scaleFactor: r3 ?? 1, minPixelBuffer: h$1(i3), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: false } })];
}
function t$1(e3, i3) {
  return { type: "simple", filters: i3, capabilities: { maxTextureSize: t$a().maxTextureSize }, bindings: a$1(e3) };
}
function s(e3) {
  switch (e3) {
    case "opacity":
      return L$2.OPACITY;
    case "color":
      return L$2.COLOR;
    case "rotation":
      return L$2.ROTATION;
    case "size":
      return L$2.SIZE;
    default:
      return null;
  }
}
function a$1(e3) {
  if (!e3)
    return [];
  switch (e3.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return c(e3);
    case "dot-density":
      return o$1(e3);
    case "pie-chart":
      return l2(e3);
    case "heatmap":
      return u8(e3);
  }
}
function o$1(e3) {
  const i3 = [];
  for (const n2 of e3.attributes)
    i3.push({ binding: i3.length, expression: n2.valueExpression, field: n2.field });
  return i3;
}
function l2(e3) {
  const i3 = c(e3);
  let n2 = 4;
  for (const r3 of e3.attributes)
    i3.push({ binding: n2++, expression: r3.valueExpression, field: r3.field });
  return i3;
}
function u8({ valueExpression: e3, field: i3 }) {
  return e3 || i3 ? [{ binding: 0, expression: e3, field: i3 }] : [];
}
function c(i3) {
  if (!("visualVariables" in i3) || !i3.visualVariables?.length)
    return [];
  return u$3(i3.visualVariables).map((e3) => x3(e3)).filter(q$6);
}
function p4(e3) {
  return "$view.scale" === e3.valueExpression ? null : { binding: s(e3.type), field: e3.field, normalizationField: e3.normalizationField, expression: e3.valueExpression, valueRepresentation: e3.valueRepresentation };
}
function f4(e3) {
  return { binding: s(e3.type), field: e3.field, normalizationField: e3.normalizationField, expression: e3.valueExpression };
}
function d$1(e3) {
  return { binding: s(e3.type), field: e3.field, normalizationField: e3.normalizationField, expression: e3.valueExpression };
}
function m2(e3) {
  return { binding: s(e3.type), expression: e3.valueExpression, field: e3.field };
}
function x3(e3) {
  switch (e3.type) {
    case "size":
      return p4(e3);
    case "color":
      return f4(e3);
    case "opacity":
      return d$1(e3);
    case "rotation":
      return m2(e3);
  }
}
function t(e3) {
  return e3.some((e4) => e4.globalId);
}
function r2(e3) {
  return e3.filter((e4) => !e4.error).map((e4) => e4.objectId ?? e4.globalId).filter((e4) => null != e4);
}
function o(e3, s2) {
  const t2 = new Set(e3);
  for (const r3 of s2.values())
    t2.add(r3);
  return t2;
}
function d2(e3, s2) {
  const t2 = new Set(e3);
  for (const r3 of s2.values())
    t2.delete(r3);
  return t2;
}
class a {
  constructor(t2) {
    this.updateTracking = new d$6({ debugName: "FeatureCommandQueue" }), this._hasGlobalIds = false, this._queueProcessor = new _$4({ concurrency: 1, process: t2.process });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  async push(e3) {
    return this.updateTracking.addPromise(this._doPush(e3));
  }
  async _doPush(e3) {
    const s2 = this._queueProcessor, t2 = s2.last(), r3 = [];
    switch (e3.type) {
      case "update":
        if (t2?.type === e3.type)
          return;
        r3.push(s2.push(e3));
        break;
      case "edit": {
        const o2 = "processed-edit" === t2?.type ? t2 : null;
        o2 && s2.popLast();
        const d3 = this._mergeEdits(o2, e3);
        for (const e4 of d3)
          e4 && r3.push(s2.push(e4));
        break;
      }
    }
    await Promise.all(r3);
  }
  _mergeEdits(e3, s2) {
    const { addedFeatures: a2, deletedFeatures: i3, updatedFeatures: u9 } = s2.edits;
    if (this._hasGlobalIds = this._hasGlobalIds || t(a2) || t(u9) || t(i3), this._hasGlobalIds) {
      return [e3, { type: "processed-edit", edits: { addOrModified: [...a2, ...u9], removed: i3 } }];
    }
    const n2 = new Set(r2(e3?.edits.addOrModified ?? [])), c2 = new Set(r2(e3?.edits.removed ?? [])), p5 = /* @__PURE__ */ new Set([...r2(a2), ...r2(u9)]), l3 = new Set(r2(i3));
    return [{ type: "processed-edit", edits: { addOrModified: Array.from(o(d2(n2, l3), p5)).map((e4) => ({ objectId: e4 })), removed: Array.from(o(d2(c2, p5), l3)).map((e4) => ({ objectId: e4 })) } }];
  }
}
export {
  F4 as F,
  S,
  T,
  h5 as a,
  a as b,
  y$1 as c,
  t$3 as d,
  h$1 as e,
  a$2 as f,
  c as g,
  h$2 as h,
  i2 as i,
  m$2 as m,
  n,
  p$1 as p,
  s$1 as s,
  t$1 as t,
  u$1 as u,
  x$1 as x,
  y,
  z2 as z
};
