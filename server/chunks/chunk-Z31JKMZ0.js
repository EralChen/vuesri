import { gJ as m$1, eu as u$1, bJ as c$1, bQ as V, cr as q$1, cm as e$1, ce as d$1, bX as P$1, eV as v, aV as e, a_ as c, gT as t$1 } from "./chunk-ejFG4zJ0.js";
import { t } from "./chunk-Ds4Mh7HH.js";
import { $ } from "./chunk-bVBkTso-.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-YBgi6goH.js";
import "./chunk-xXBI18-w.js";
import "./chunk-drfK378b.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-X6Yd3gQb.js";
const u = "sublayers", f = "layerView";
let m = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  *graphicsViews() {
    null == this._graphicsViewsFeatureCollectionMap ? null == this._graphicsViews ? yield* [] : yield* this._graphicsViews : yield* this._graphicsViewsFeatureCollectionMap.keys();
  }
  async hitTest(i, e2) {
    return Array.from(this.graphicsViews(), (e3) => {
      const s = e3.hitTest(i);
      if (null != this._graphicsViewsFeatureCollectionMap) {
        const i2 = this._graphicsViewsFeatureCollectionMap.get(e3);
        for (const e4 of s)
          !e4.popupTemplate && i2.popupTemplate && (e4.popupTemplate = i2.popupTemplate), e4.sourceLayer = e4.layer = this.layer;
      }
      return s;
    }).flat().map((e3) => ({ type: "graphic", graphic: e3, layer: this.layer, mapPoint: i }));
  }
  highlight(i) {
    let h;
    "number" == typeof i ? h = [i] : i instanceof c$1 ? h = [i.uid] : Array.isArray(i) && i.length > 0 ? h = "number" == typeof i[0] ? i : i.map((i2) => i2 && i2.uid) : V.isCollection(i) && (h = i.map((i2) => i2 && i2.uid).toArray());
    const a = h?.filter(q$1);
    return a?.length ? (this._addHighlight(a), e$1(() => this._removeHighlight(a))) : e$1();
  }
  update(i) {
    for (const e2 of this.graphicsViews())
      e2.processUpdate(i);
  }
  attach() {
    const i = this.view, e2 = () => this.requestUpdate(), s = this.layer.featureCollections;
    if (null != s && s.length) {
      this._graphicsViewsFeatureCollectionMap = /* @__PURE__ */ new Map();
      for (const t$12 of s) {
        const s2 = new t(this.view.featuresTilingScheme), r = new $({ view: i, graphics: t$12.source, renderer: t$12.renderer, requestUpdateCallback: e2, container: s2 });
        this._graphicsViewsFeatureCollectionMap.set(r, t$12), this.container.addChild(r.container), this.addHandles([d$1(() => t$12.visible, (i2) => r.container.visible = i2, P$1), d$1(() => r.updating, () => this.notifyChange("updating"), P$1)], f);
      }
      this._updateHighlight();
    } else
      null != this.layer.sublayers && this.addHandles(v(() => this.layer.sublayers, "change", () => this._createGraphicsViews(), { onListenerAdd: () => this._createGraphicsViews(), onListenerRemove: () => this._destroyGraphicsViews() }), u);
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(u);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const i of this.graphicsViews())
      i.viewChange();
  }
  isUpdating() {
    for (const i of this.graphicsViews())
      if (i.updating)
        return true;
    return false;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(f);
    for (const i of this.graphicsViews())
      i.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), null == this.layer.sublayers)
      return;
    const i = [], e2 = this.view, s = () => this.requestUpdate();
    for (const t$12 of this.layer.sublayers) {
      const r = new t(this.view.featuresTilingScheme);
      r.fadeTransitionEnabled = true;
      const a = new $({ view: e2, graphics: t$12.graphics, requestUpdateCallback: s, container: r });
      this.addHandles([t$12.on("graphic-update", a.graphicUpdateHandler), d$1(() => t$12.visible, (i2) => a.container.visible = i2, P$1), d$1(() => a.updating, () => this.notifyChange("updating"), P$1)], f), this.container.addChild(a.container), i.push(a);
    }
    this._graphicsViews = i, this._updateHighlight();
  }
  _addHighlight(i) {
    for (const e2 of i)
      if (this._highlightIds.has(e2)) {
        const i2 = this._highlightIds.get(e2);
        this._highlightIds.set(e2, i2 + 1);
      } else
        this._highlightIds.set(e2, 1);
    this._updateHighlight();
  }
  _removeHighlight(i) {
    for (const e2 of i)
      if (this._highlightIds.has(e2)) {
        const i2 = this._highlightIds.get(e2) - 1;
        0 === i2 ? this._highlightIds.delete(e2) : this._highlightIds.set(e2, i2);
      }
    this._updateHighlight();
  }
  _updateHighlight() {
    const i = Array.from(this._highlightIds.keys()), e2 = t$1("highlight");
    for (const s of this.graphicsViews())
      s.setHighlight(i.map((i2) => ({ objectId: i2, highlightFlags: e2 })));
  }
};
m = e([c("esri.views.2d.layers.MapNotesLayerView2D")], m);
const w = m;
export {
  w as default
};
