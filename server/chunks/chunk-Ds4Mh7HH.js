import { cu as E, cv as R, cw as a$1 } from "./chunk-ejFG4zJ0.js";
import { i } from "./chunk-ZVucZwAB.js";
class t extends i {
  renderChildren(i2) {
    for (const e of this.children)
      e.setTransform(i2.state);
    if (super.renderChildren(i2), this.attributeView.update(), this.children.some((e) => e.hasData)) {
      switch (i2.drawPhase) {
        case E.MAP:
          this._renderChildren(i2, R.All);
          break;
        case E.HIGHLIGHT:
          this.hasHighlight && this._renderHighlight(i2);
      }
      this._boundsRenderer && this._boundsRenderer.doRender(i2);
    }
  }
  _renderHighlight(e) {
    a$1(e, false, (e2) => {
      this._renderChildren(e2, R.Highlight);
    });
  }
}
export {
  t
};
