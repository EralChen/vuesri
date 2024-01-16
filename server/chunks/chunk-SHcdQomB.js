import { bo as e, br as c, bY as T$1, fW as _ } from "./chunk-KFNcxJaF.js";
import { i as i$1 } from "./chunk-IbXsXbhF.js";
let o = class extends i$1 {
  get hasHighlight() {
    return this.children.some((r) => r.hasData);
  }
  renderChildren(r) {
    if (r.drawPhase !== T$1.HIGHLIGHT)
      return;
    if (this.attributeView.update(), !this.children.some((r2) => r2.hasData))
      return;
    this.attributeView.bindTextures(r.context), super.renderChildren(r);
    const { painter: e2 } = r, s = e2.effects.highlight;
    s.bind(r), r.context.setColorMask(true, true, true, true), r.context.clear(_.COLOR_BUFFER_BIT), this._renderChildren(r, s.defines.concat(["highlightAll"])), s.draw(r), s.unbind();
  }
};
o = e([c("esri.views.2d.layers.support.HighlightGraphicContainer")], o);
const a = o;
export {
  a
};
