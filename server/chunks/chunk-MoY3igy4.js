import { aV as e, a_ as c, cu as E, cw as a$1, cv as R } from "./chunk-ejFG4zJ0.js";
import { i } from "./chunk-ZVucZwAB.js";
let a = class extends i {
  get hasHighlight() {
    return this.children.some((r) => r.hasData);
  }
  renderChildren(r) {
    this.attributeView.update(), r.drawPhase === E.HIGHLIGHT && this.children.some((r2) => r2.hasData) && (super.renderChildren(r), r.context.setColorMask(true, true, true, true), a$1(r, true, (r2) => {
      this._renderChildren(r2, R.All);
    }));
  }
};
a = e([c("esri.views.2d.layers.support.HighlightGraphicContainer")], a);
const h = a;
export {
  h
};
