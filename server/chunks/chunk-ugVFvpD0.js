import { fQ as m$1, bo as e, br as c } from "./chunk-KFNcxJaF.js";
import n from "./chunk-5zgYf8WM.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let a = class extends m$1(n) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
a = e([c("esri.views.2d.layers.GroupLayerView2D")], a);
const o = a;
export {
  o as default
};
