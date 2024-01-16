import { dO as a, fQ as m$1, dP as u, bI as b, bb as s$1, fX as a$1, bo as e, bp as y, br as c$1 } from "./chunk-KFNcxJaF.js";
import { v } from "./chunk-FihFYhey.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let h = class extends a(m$1(u)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      b(t2) || s$1.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new a$1(), this.container.addChild(this._bitmapContainer), this._strategy = new v({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e2, r) {
    return this.layer.fetchImageBitmap(t, e2, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
e([y()], h.prototype, "_strategy", void 0), e([y()], h.prototype, "updating", void 0), h = e([c$1("esri.views.2d.layers.BaseDynamicLayerView2D")], h);
const c = h;
export {
  c as default
};
