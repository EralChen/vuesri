import { ce as n$1, cf as c, bY as T$1, aq as has, cg as p } from "./chunk-KFNcxJaF.js";
const n = (e, r) => e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
class i extends n$1 {
  constructor(e) {
    super(), this._tileInfoView = e;
  }
  renderChildren(e) {
    this.sortChildren(n), this.setStencilReference(e), super.renderChildren(e);
  }
  createRenderParams(e) {
    const { state: r } = e, s = super.createRenderParams(e);
    return s.requiredLevel = this._tileInfoView.getClosestInfoForScale(r.scale).level, s.displayLevel = this._tileInfoView.tileInfo.scaleToZoom(r.scale), s;
  }
  prepareRenderPasses(r) {
    const n2 = super.prepareRenderPasses(r);
    return n2.push(r.registerRenderPass({ name: "stencil", brushes: [c], drawPhase: T$1.DEBUG | T$1.MAP | T$1.HIGHLIGHT, target: () => this.getStencilTarget() })), has("esri-tiles-debug") && n2.push(r.registerRenderPass({ name: "tileInfo", brushes: [p], drawPhase: T$1.DEBUG, target: () => this.children })), n2;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e) {
    let r = 1;
    for (const s of this.children)
      s.stencilRef = r++;
  }
}
export {
  i
};
