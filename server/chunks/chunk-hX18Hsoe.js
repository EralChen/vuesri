import { gJ as m$1, eu as u$1, bQ as V, f9 as k, f6 as p$1, ce as d$1, aT as s$1, gR as n, aV as e, a_ as c$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const c = Symbol();
let p = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this.layerViews = new V(), this._debouncedUpdate = k(async () => {
      const { layer: e2, parent: { footprintLayerView: r } } = this;
      let t = [];
      if (r) {
        const i = this._createQuery(), { features: s } = await r.queryFeatures(i);
        this.suspended || (t = s.map((r2) => e2.acquireLayer(r2)));
      }
      this.removeHandles(c), this.addHandles(t, c);
    });
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: true }), p$1(() => false === this.parent.footprintLayerView?.dataUpdating, () => this._updateLayers()), d$1(() => [this.layer.maximumVisibleSublayers, this.suspended, this.parent.footprintLayerView?.filter], () => this._updateLayers())]);
  }
  detach() {
    this.container.removeAllChildren(), this.removeHandles(c);
  }
  update(e2) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  isUpdating() {
    return this.layerViews.some((e2) => e2.updating);
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
  _updateLayers() {
    this.suspended ? this.removeHandles(c) : this._updatingHandles.addPromise(this._debouncedUpdate().catch((e2) => {
      s$1.getLogger(this).error(e2);
    }));
  }
  _createQuery() {
    const { parent: { footprintLayerView: e2 }, layer: { maximumVisibleSublayers: r, parent: { itemTypeField: t, itemSourceField: i, objectIdField: s, orderBy: a } } } = this, d = `${t} <> 'Scene Service'`, n$1 = e2.createQuery();
    n$1.returnGeometry = false, n$1.num = r, n$1.outFields = [s, i], n$1.where = n(n$1.where, d);
    const l = a?.find((e3) => e3.field && !e3.valueExpression);
    return l?.field && (n$1.orderByFields = [`${l.field} ${"descending" === l.order ? "DESC" : "ASC"}`]), n$1;
  }
};
p = e([c$1("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], p);
const h = p;
export {
  h as default
};
