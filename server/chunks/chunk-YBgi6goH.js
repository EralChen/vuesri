import { cD as n$1, cE as _, cu as E, b0 as has, cF as y } from "./chunk-ejFG4zJ0.js";
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
    return n2.push(r.registerRenderPass({ name: "stencil", brushes: [_], drawPhase: E.DEBUG | E.MAP | E.HIGHLIGHT | E.LABEL, target: () => this.getStencilTarget() })), has("esri-tiles-debug") && n2.push(r.registerRenderPass({ name: "tileInfo", brushes: [y], drawPhase: E.DEBUG, target: () => this.children })), n2;
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
