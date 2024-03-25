import { gJ as m$1, eu as u$1, c8 as u$2, bJ as c$1, bQ as V, cr as q$1, cm as e$1, aV as e, aX as y, a_ as c, gT as t$2 } from "./chunk-ejFG4zJ0.js";
import { t as t$1 } from "./chunk-Ds4Mh7HH.js";
import { $ } from "./chunk-bVBkTso-.js";
import { t } from "./chunk-ifmCHxBO.js";
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
let d = class extends m$1(u$1) {
  constructor() {
    super(...arguments), this._highlightCounter = new t();
  }
  attach() {
    this.graphicsView = new $({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new t$1(this.view.featuresTilingScheme), layerId: this.layer.id }), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler)), this._updateHighlight();
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = u$2(this.graphicsView);
  }
  async hitTest(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).map((t2) => ({ type: "graphic", graphic: t2, mapPoint: i, layer: this.layer })) : null;
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  moveStart() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i, h = "highlight") {
    let a;
    "number" == typeof i ? a = [i] : i instanceof c$1 ? a = [i.uid] : Array.isArray(i) && i.length > 0 ? a = "number" == typeof i[0] ? i : i.map((i2) => i2 && i2.uid) : V.isCollection(i) && i.length > 0 && (a = i.map((i2) => i2 && i2.uid).toArray());
    const o = a?.filter(q$1);
    return o?.length ? (this._addHighlight(o, h), e$1(() => this._removeHighlight(o, h))) : e$1();
  }
  _addHighlight(i, t2) {
    this._highlightCounter.addReason(i, t2), this._updateHighlight();
  }
  _removeHighlight(i, t2) {
    this._highlightCounter.deleteReason(i, t2), this._updateHighlight();
  }
  _updateHighlight() {
    const i = [];
    for (const t2 of this._highlightCounter.ids()) {
      const e2 = this._highlightCounter.getHighestReason(t2), r = t$2(e2);
      i.push({ objectId: t2, highlightFlags: r });
    }
    this.graphicsView?.setHighlight(i);
  }
};
e([y()], d.prototype, "graphicsView", void 0), d = e([c("esri.views.2d.layers.GraphicsLayerView2D")], d);
const u = d;
export {
  u as default
};
