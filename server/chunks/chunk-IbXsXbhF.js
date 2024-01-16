import { hT as i, hU as e, hV as r$1, hW as R, hX as E$1, hY as C, hZ as L, h_ as r, hL as i$2, h$ as M, i0 as t, i1 as f$1, gs as r$2, i2 as h, h as h$1, i3 as F, f as f$2, i4 as ee, bD as u$1, i5 as O } from "./chunk-KFNcxJaF.js";
import { o } from "./chunk-E-M87tOH.js";
const v = Math.PI / 180, x = 4;
class b extends i {
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
    const s = this._program;
    e2.bindVAO(this._vao), e2.useProgram(s), s.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), e2.gl.lineWidth(1), e2.drawElements(E$1.LINES, 8 * r2.length, C.UNSIGNED_INT, 0), e2.bindVAO();
  }
  _createTransforms() {
    return { dvs: e() };
  }
  _createShaderProgram(t2) {
    if (this._program)
      return;
    const e2 = "precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }", r2 = "precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";
    this._program = t2.programCache.acquire(e2, r2, y().attributes);
  }
  _updateMatricesAndLocalOrigin(t$1) {
    const { state: a } = t$1, { displayMat3: u, size: c, resolution: _, pixelRatio: h$12, rotation: m, viewpoint: d } = a, p = v * m, { x: g, y: x2 } = d.targetGeometry, b2 = L(g, a.spatialReference);
    this._localOrigin.x = b2, this._localOrigin.y = x2;
    const y2 = h$12 * c[0], B = h$12 * c[1], M$1 = _ * y2, j = _ * B, A = r(this._dvsMat3);
    i$2(A, A, u), M(A, A, t(y2 / 2, B / 2)), f$1(A, A, r$2(c[0] / M$1, -B / j, 1)), h(A, A, -p);
  }
  _updateBufferData(t2, e2) {
    const { x: r2, y: s } = this._localOrigin, i3 = 2 * x * e2.length, o2 = new Float32Array(i3), a = new Uint32Array(8 * e2.length);
    let n = 0, f = 0;
    for (const l of e2)
      l && (o2[2 * n] = l[0] - r2, o2[2 * n + 1] = l[1] - s, o2[2 * n + 2] = l[0] - r2, o2[2 * n + 3] = l[3] - s, o2[2 * n + 4] = l[2] - r2, o2[2 * n + 5] = l[3] - s, o2[2 * n + 6] = l[2] - r2, o2[2 * n + 7] = l[1] - s, a[f] = n + 0, a[f + 1] = n + 3, a[f + 2] = n + 3, a[f + 3] = n + 2, a[f + 4] = n + 2, a[f + 5] = n + 1, a[f + 6] = n + 1, a[f + 7] = n + 0, n += 4, f += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(o2.buffer) : this._vertexBuffer = h$1.createVertex(t2, F.DYNAMIC_DRAW, o2.buffer), this._indexBuffer ? this._indexBuffer.setData(a) : this._indexBuffer = h$1.createIndex(t2, F.DYNAMIC_DRAW, a), !this._vao) {
      const e3 = y();
      this._vao = new f$2(t2, e3.attributes, e3.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const y = () => ee("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: C.FLOAT }] });
let i$1 = class i2 extends o {
  constructor(e2) {
    super(e2), this.checkHighlight = () => true;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = u$1(this._boundsRenderer);
  }
  enableRenderingBounds(e2) {
    this._boundsRenderer = new b(e2), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e2, t2) {
    e2.patch(t2), this.contains(e2) || this.addChild(e2), this.requestRender();
  }
  onTileError(e2) {
    e2.clear(), this.contains(e2) || this.addChild(e2);
  }
  _renderChildren(e2, t2) {
    for (const r2 of this.children)
      r2.isReady && r2.hasData && (r2.commit(e2), e2.context.setStencilFunction(O.EQUAL, r2.stencilRef, 255), r2.getDisplayList().replay(e2, r2, t2));
  }
};
export {
  i$1 as i
};
