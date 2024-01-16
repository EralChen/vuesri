import { kJ as r$1, kK as b, hU as e, aw as u$1, kL as w, bY as T$1 } from "./chunk-KFNcxJaF.js";
import { i } from "./chunk-_ABw_62H.js";
class r extends r$1 {
  constructor(t, s, r2, i2, a, n2, m = null) {
    super(t, s, r2, i2, a, n2), this.bitmap = new b(m), this.bitmap.coordScale = [a, n2], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(t) {
    this.bitmap.beforeRender(t), super.beforeRender(t);
  }
  afterRender(t) {
    this.bitmap.afterRender(t), super.afterRender(t);
  }
  set stencilRef(t) {
    this.bitmap.stencilRef = t;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { dvs: e(), tileMat3: e() };
  }
  setTransform(t) {
    super.setTransform(t), this.bitmap.transforms.dvs = this.transforms.dvs;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
}
class n extends i {
  get requiresDedicatedFBO() {
    return this.children.some((e2) => "additive" === e2.bitmap.blendFunction);
  }
  createTile(r$12) {
    const t = this._tileInfoView.getTileBounds(u$1(), r$12), s = this._tileInfoView.getTileResolution(r$12.level), [n2, o] = this._tileInfoView.tileInfo.size;
    return new r(r$12, s, t[0], t[3], n2, o);
  }
  prepareRenderPasses(e2) {
    const i2 = e2.registerRenderPass({ name: "bitmap (tile)", brushes: [w.bitmap], target: () => this.children.map((e3) => e3.bitmap), drawPhase: T$1.MAP });
    return [...super.prepareRenderPasses(e2), i2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === T$1.MAP && super.doRender(e2);
  }
}
export {
  n
};
