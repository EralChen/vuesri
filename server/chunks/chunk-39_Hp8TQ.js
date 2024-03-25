import { gJ as m$1, eu as u$1, bQ as V, f8 as n$1, aV as e, aX as y, f7 as t, a_ as c$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let n = class extends m$1(u$1) {
  constructor(e2) {
    super(e2), this.layerViews = new V();
  }
  set layerViews(e2) {
    this._set("layerViews", n$1(e2, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((e2, r) => e2 + r.updatingProgress, 0) / this.layerViews.length;
  }
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
e([y({ cast: t })], n.prototype, "layerViews", null), e([y({ readOnly: true })], n.prototype, "updatingProgress", null), n = e([c$1("esri.views.2d.layers.KnowledgeGraphLayerView2D")], n);
const c = n;
export {
  c as default
};
