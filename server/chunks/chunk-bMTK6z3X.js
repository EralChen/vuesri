import { fQ as m$1, dP as u, bh as V, ei as n$1, bo as e, bp as y, eh as t, br as c$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let n = class extends m$1(u) {
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
