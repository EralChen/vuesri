import { m8 as i$2, m9 as e, ma as r$1, mb as R, mc as E, md as C, me as L, mf as o, iz as i$3, mg as M, mh as t$1, mi as f, mj as r$2, mk as h$1, h as h$2, ml as F, o as o$1, mm as b$1, c8 as u$1, mn as N } from "./chunk-ejFG4zJ0.js";
import { i as i$1, r as r$3 } from "./chunk-uWxJ6ZLt.js";
import { h } from "./chunk-xXBI18-w.js";
import { r } from "./chunk-Mke_bPEP.js";
let n = 0;
function a(l, a2, t2) {
  return new i$1(r(n++), l, l.meshWriter.name, a2, t2);
}
const t = { geometry: { visualVariableColor: null, visualVariableOpacity: null, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableRotation: null } };
class s {
  constructor() {
    this.instances = { fill: a(h.fill, t, { zoomRange: true }), marker: a(h.marker, t, { zoomRange: true }), line: a(h.line, t, { zoomRange: true }), text: a(h.text, t, { zoomRange: true, referenceSymbol: false, clipAngle: false }), complexFill: a(h.complexFill, t, { zoomRange: true }), texturedLine: a(h.texturedLine, t, { zoomRange: true }) }, this._instancesById = Object.values(this.instances).reduce((e2, l) => (e2.set(l.instanceId, l), e2), /* @__PURE__ */ new Map());
  }
  getInstance(e2) {
    return this._instancesById.get(e2);
  }
}
const v = Math.PI / 180, x = 4;
class b extends i$2 {
  constructor(t2) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = e(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = t2;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = r$1(this._program);
  }
  doRender(t2) {
    const { context: e2 } = t2, r2 = this._getBounds();
    if (r2.length < 1)
      return;
    this._createShaderProgram(e2), this._updateMatricesAndLocalOrigin(t2), this._updateBufferData(e2, r2), e2.setBlendingEnabled(true), e2.setDepthTestEnabled(false), e2.setStencilWriteMask(0), e2.setStencilTestEnabled(false), e2.setBlendFunction(R.ONE, R.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true);
    const i2 = this._program;
    e2.bindVAO(this._vao), e2.useProgram(i2), i2.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e2.gl.lineWidth(1), e2.drawElements(E.LINES, 8 * r2.length, C.UNSIGNED_INT, 0), e2.bindVAO();
  }
  _createTransforms() {
    return { displayViewScreenMat3: e() };
  }
  _createShaderProgram(t2) {
    if (this._program)
      return;
    const e2 = "precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", r2 = "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";
    this._program = t2.programCache.acquire(e2, r2, y().attributes);
  }
  _updateMatricesAndLocalOrigin(t2) {
    const { state: a2 } = t2, { displayMat3: m, size: c, resolution: u, pixelRatio: _, rotation: h2, viewpoint: d } = a2, p = v * h2, { x: g, y: x2 } = d.targetGeometry, b2 = L(g, a2.spatialReference);
    this._localOrigin.x = b2, this._localOrigin.y = x2;
    const y2 = _ * c[0], B = _ * c[1], M$1 = u * y2, j = u * B, A = o(this._dvsMat3);
    i$3(A, A, m), M(A, A, t$1(y2 / 2, B / 2)), f(A, A, r$2(c[0] / M$1, -B / j, 1)), h$1(A, A, -p);
  }
  _updateBufferData(t2, e2) {
    const { x: r2, y: i2 } = this._localOrigin, s2 = 2 * x * e2.length, o2 = new Float32Array(s2), a2 = new Uint32Array(8 * e2.length);
    let n2 = 0, l = 0;
    for (const f2 of e2)
      f2 && (o2[2 * n2] = f2[0] - r2, o2[2 * n2 + 1] = f2[1] - i2, o2[2 * n2 + 2] = f2[0] - r2, o2[2 * n2 + 3] = f2[3] - i2, o2[2 * n2 + 4] = f2[2] - r2, o2[2 * n2 + 5] = f2[3] - i2, o2[2 * n2 + 6] = f2[2] - r2, o2[2 * n2 + 7] = f2[1] - i2, a2[l] = n2 + 0, a2[l + 1] = n2 + 3, a2[l + 2] = n2 + 3, a2[l + 3] = n2 + 2, a2[l + 4] = n2 + 2, a2[l + 5] = n2 + 1, a2[l + 6] = n2 + 1, a2[l + 7] = n2 + 0, n2 += 4, l += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(o2.buffer) : this._vertexBuffer = h$2.createVertex(t2, F.DYNAMIC_DRAW, o2.buffer), this._indexBuffer ? this._indexBuffer.setData(a2) : this._indexBuffer = h$2.createIndex(t2, F.DYNAMIC_DRAW, a2), !this._vao) {
      const e3 = y();
      this._vao = new o$1(t2, e3.attributes, e3.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const y = () => b$1("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: C.FLOAT }] });
class i extends r$3 {
  constructor(e2) {
    super(e2), this._instanceStore = new s(), this.checkHighlight = () => true;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = u$1(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(e2) {
    this._boundsRenderer = new b(e2), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e2, r2) {
    e2.onMessage(r2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  _renderChildren(e2, r2) {
    e2.selection = r2;
    for (const n2 of this.children) {
      if (!n2.visible)
        continue;
      const r3 = n2.getDisplayList(e2.drawPhase, this._instanceStore, N.STRICT_ORDER);
      r3?.render(e2);
    }
  }
}
export {
  i
};
