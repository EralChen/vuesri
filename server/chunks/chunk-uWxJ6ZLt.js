import { b0 as has, mo as M, bC as L$1, mp as q, mq as y$1, mr as H, ms as z, mt as B, mu as C, mv as E, lG as e, fq as D$1, cK as L, m as m$1, mw as d, x as x$1, aO as s, mx as c, aT as s$1 } from "./chunk-ejFG4zJ0.js";
import { f, n } from "./chunk-Mke_bPEP.js";
import { i as i$1 } from "./chunk-YBgi6goH.js";
const T = () => s$1.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");
class m {
  constructor(t, e2, i2) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s2, pixelType: r2, textureOnly: n2 } = t, a = d(r2);
    this.blockIndex = i2, this.pixelType = r2, this.size = e2, this.textureOnly = n2, n2 || (this.data = new a(s2)), this._resetRange();
  }
  destroy() {
    this._texture?.dispose();
    for (const t in this._fbos) {
      const e2 = this._fbos[t];
      e2 && ("0" === t && e2.detachColorTexture(), e2.dispose()), this._fbos[t] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t = new e();
    return t.wrapMode = D$1.CLAMP_TO_EDGE, t.samplingMode = L.NEAREST, t.dataType = this.pixelType, t.width = this.size, t.height = this.size, t;
  }
  setData(t, e2, i2) {
    const s2 = f(t), r2 = this.data, n2 = s2 * this.texelSize + e2;
    !r2 || n2 >= r2.length || (r2[n2] = i2, this.dirtyStart = Math.min(this.dirtyStart, s2), this.dirtyEnd = Math.max(this.dirtyEnd, s2));
  }
  getData(t, e2) {
    if (null == this.data)
      return null;
    const i2 = f(t) * this.texelSize + e2;
    return !this.data || i2 >= this.data.length ? null : this.data[i2];
  }
  getTexture(t) {
    return this._texture ?? this._initTexture(t);
  }
  getFBO(t, e2 = 0) {
    if (!this._fbos[e2]) {
      const i2 = 0 === e2 ? this.getTexture(t) : this._textureDesc;
      this._fbos[e2] = new x$1(t, i2);
    }
    return this._fbos[e2];
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(e2, i2) {
    try {
      const s$12 = this.dirtyStart, r2 = this.dirtyEnd;
      if (!this.hasDirty)
        return;
      has("esri-2d-update-debug") && console.debug(`Version[${i2}] AttributeStoreView.updateTexture`, { start: s$12, end: r2, firstBytes: new Uint8Array(this.data.buffer.slice(0, 16)), block: this }), this._resetRange();
      const n2 = this.data.buffer, a = this.getTexture(e2), o = 4, u = (s$12 - s$12 % this.size) / this.size, h = (r2 - r2 % this.size) / this.size, d$1 = u, l = this.size, c2 = h, _ = u * this.size * o, g = (l + c2 * this.size) * o - _, x = d(this.pixelType), f2 = new x(n2, _ * x.BYTES_PER_ELEMENT, g), b = this.size, m2 = c2 - d$1 + 1;
      if (m2 > this.size)
        return void T().error(new s("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
      a.updateData(0, 0, d$1, b, m2, f2);
    } catch (s2) {
    }
  }
  update(t) {
    const { data: e2, start: i2, end: s2 } = t;
    if (null != e2 && null != this.data) {
      const s3 = this.data, r2 = i2 * this.texelSize;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const n2 = 1 << i3 % this.texelSize;
        t.layout & n2 && (s3[r2 + i3] = e2[i3]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i2), this.dirtyEnd = Math.max(this.dirtyEnd, s2);
  }
  resize(t, e2) {
    const i2 = this.size;
    if (this.size = e2, this.textureOnly)
      return void (i2 !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s2 = d(this.pixelType);
    this.destroy(), this.data = new s2(t.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t) {
    const e2 = new m$1(t, this._textureDesc, this.data ?? void 0);
    if (null != this._lastTexture && this._fbos[0]) {
      const i2 = this._lastTexture.descriptor.width, s2 = this._lastTexture.descriptor.height, r2 = this._lastTexture.descriptor.dataType, n2 = this._lastTexture.descriptor.pixelFormat, a = this.getFBO(t), o = c(r2), u = new (d(r2))(new ArrayBuffer(i2 * s2 * o * this.texelSize)), h = t.getBoundFramebufferObject(), { x: d$1, y: l, width: _, height: g } = t.getViewport();
      t.bindFramebuffer(a), a.readPixels(0, 0, i2, s2, n2, r2, u), e2.updateData(0, 0, 0, 2 * i2, s2 / 2, u), t.setViewport(d$1, l, _, g), t.bindFramebuffer(h);
    }
    return this.destroy(), this._texture = e2, this._texture;
  }
}
class y {
  constructor() {
    this.size = 0, this._pendingAttributeUpdates = [], this._version = 0, this._epoch = 0, this._locked = false;
  }
  _initialize(t) {
    if (!t)
      throw new Error("InternalError: initArgs must be defined");
    const e2 = t.blockDescriptors;
    if (this.size = t.blockSize, has("esri-2d-update-debug") && console.debug("AttributeStoreView.initialize", { message: t }), null == this._data)
      this._data = e2.map((t2, e3) => null != t2 ? new m(t2, this.size, e3) : null);
    else
      for (let i2 = 0; i2 < this._data.length; i2++) {
        const t2 = this._data[i2], s2 = e2[i2];
        null != s2 && (null == t2 ? this._data[i2] = new m(s2, this.size, i2) : t2.resize(s2, this.size));
      }
  }
  destroy() {
    for (const t of this._data ?? [])
      t?.destroy();
    this._defaultTexture?.dispose();
    for (const { resolver: t } of this._pendingAttributeUpdates)
      t.reject("AttributeStore destroyed");
    this._pendingAttributeUpdates = [];
  }
  isEmpty() {
    return null == this._data;
  }
  getBlock(t) {
    if (null == this._data)
      return null;
    return this._data[t];
  }
  setLabelMinZoom(t, e2) {
    this.setData(t, 0, 1, e2);
  }
  getLabelMinZoom(t) {
    return this.getData(t, 0, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, 0, 0, 0);
  }
  getVVSize(t) {
    return this.getData(t, M.VV, 0, 0);
  }
  getData(t, e2, i2, s2) {
    if (!this._data)
      return 0;
    const r2 = this._data[e2];
    if (null == r2)
      return 0;
    const n2 = r2.getData(t, i2);
    return null != n2 ? n2 : s2;
  }
  setData(t, e2, i2, s2) {
    this._data[e2].setData(t, i2, s2);
  }
  lockTextureUploads() {
    this._locked = true;
  }
  unlockTextureUploads() {
    this._locked = false, this.update();
  }
  async requestUpdate(t) {
    const e2 = L$1();
    e2.promise = e2.promise.catch((t2) => {
      has("esri-2d-update-debug") && console.error("AttributeStoreView.requestUpdate rejected", t2);
    }), this._version = t.version, this._pendingAttributeUpdates.push({ inner: t, resolver: e2 }), has("esri-2d-update-debug") && console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`, { message: t });
  }
  get currentEpoch() {
    return this._epoch;
  }
  update() {
    if (this._locked)
      return;
    const t = this._pendingAttributeUpdates;
    this._pendingAttributeUpdates = [];
    for (const { inner: e2, resolver: i2 } of t) {
      const { blockData: t2, initArgs: s2, sendUpdateEpoch: r2, version: n2 } = e2;
      has("esri-2d-update-debug") && console.debug(`Version[${this._version}] Epoch[${r2}] AttributeStoreView.applyUpdate`), this._version = n2, this._epoch = r2, null != s2 && this._initialize(s2);
      const a = this._data;
      for (let e3 = 0; e3 < t2.length; e3++) {
        const i3 = t2[e3], s3 = a[e3];
        null != s3 && null != i3 && (has("esri-2d-update-debug") && console.debug(`Version[${this._version}] CpuBlock[${e3}] AttributeStoreView.update`, { block: i3 }), s3.update(i3));
      }
      i2.resolve();
    }
  }
  getUniforms(t) {
    return { filterFlags: { texture: this._getTexture(t, M.FilterFlags), unit: q }, animation: { texture: this._getTexture(t, M.Animation), unit: y$1 }, gpgpu: { texture: this._getTexture(t, M.GPGPU), unit: H }, visualVariableData: { texture: this._getTexture(t, M.VV), unit: z }, dataDriven0: { texture: this._getTexture(t, M.DD0), unit: B }, dataDriven1: { texture: this._getTexture(t, M.DD1), unit: C }, dataDriven2: { texture: this._getTexture(t, M.DD2), unit: E }, size: this.size };
  }
  _getTexture(t, e2) {
    const i2 = this._data?.[e2];
    return i2 ? (i2.updateTexture(t, this._version), i2.getTexture(t)) : this._getDefaultTexture(t);
  }
  _getDefaultTexture(t) {
    if (null == this._defaultTexture) {
      const e$1 = new e();
      e$1.wrapMode = D$1.CLAMP_TO_EDGE, e$1.samplingMode = L.NEAREST, e$1.width = 1, e$1.height = 1, this._defaultTexture = new m$1(t, e$1, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
class r extends i$1 {
  constructor(t) {
    super(t), this._statisticsByLevel = /* @__PURE__ */ new Map(), this.attributeView = new y();
  }
  destroy() {
    this.children.forEach((e2) => e2.destroy()), this.removeAllChildren(), this.attributeView.destroy();
  }
  doRender(e2) {
    e2.context.capabilities.enable("textureFloat"), super.doRender(e2);
  }
  createRenderParams(e2) {
    const t = super.createRenderParams(e2);
    return t.attributeView = this.attributeView, t.instanceStore = this._instanceStore, t.statisticsByLevel = this._statisticsByLevel, t;
  }
}
class i {
  constructor(t, i2, e2, s2, n2) {
    this._instanceId = t, this.techniqueRef = i2, this._meshWriterName = e2, this._input = s2, this.optionalAttributes = n2;
  }
  get instanceId() {
    return n(this._instanceId);
  }
  createMeshInfo(t) {
    return { id: this._instanceId, meshWriterName: this._meshWriterName, options: t, optionalAttributes: this.optionalAttributes };
  }
  getInput() {
    return this._input;
  }
  setInput(t) {
    this._input = t;
  }
}
export {
  i,
  r
};
