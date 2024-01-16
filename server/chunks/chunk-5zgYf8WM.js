import { bo as e, bp as y, eh as t, br as c, dP as u, bh as V, bJ as d$1, bK as C, ei as n$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let h = class extends u {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new V();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e2) => {
      e2.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), d$1(() => this.layer?.visibilityMode, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, C), d$1(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, C)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  set layerViews(i) {
    this._set("layerViews", n$1(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i, e2) => i + e2.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e2) => e2.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((i2) => {
      const e2 = this._findLayerViewForLayer(i2);
      return !!e2?.visible;
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e2) => {
      e2.visible = e2 === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i2) => d$1(() => i2.visible, (e3) => this._applyVisibility(() => {
      e3 !== this.visible && (i2.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e3 ? i2 : null)), C)).toArray(), "grouplayerview:visible");
    const e2 = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e2?.visible ? e2 : null));
  }
  _applyVisibility(i, e2) {
    this._hasLayerViewVisibleOverrides() && ("inherited" === this.layer?.visibilityMode ? i() : "exclusive" === this.layer?.visibilityMode && e2());
  }
};
e([y({ cast: t })], h.prototype, "layerViews", null), e([y({ readOnly: true })], h.prototype, "updatingProgress", null), e([y()], h.prototype, "view", void 0), h = e([c("esri.views.layers.GroupLayerView")], h);
const n = h;
export {
  n as default
};
