import { gJ as m$1, eu as u$1, bQ as V, aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let s = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this.layerViews = new V();
  }
  get dynamicGroupLayerView() {
    return this.layerViews.find((e2) => e2.layer === this.layer?.dynamicGroupLayer);
  }
  get footprintLayerView() {
    return this.layerViews.find((e2) => e2.layer === this.layer?.footprintLayer);
  }
  update(e2) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: true })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  isUpdating() {
    return this.layerViews.some((e2) => e2.updating);
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
e([y()], s.prototype, "dynamicGroupLayerView", null), e([y()], s.prototype, "footprintLayerView", null), e([y()], s.prototype, "layerViews", void 0), s = e([c("esri.views.2d.layers.CatalogLayerView2D")], s);
const n = s;
export {
  n as default
};
