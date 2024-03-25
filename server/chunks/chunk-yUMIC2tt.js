import { aV as e, a_ as c, ce as d$1, bX as P$1, b0 as has } from "./chunk-ejFG4zJ0.js";
import { X } from "./chunk-5k2iYTz0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-YBgi6goH.js";
import "./chunk-pjiN37wa.js";
import "./chunk-zypaAtdF.js";
import "./chunk-BRDTP7A8.js";
import "./chunk-xXBI18-w.js";
import "./chunk-drfK378b.js";
import "./chunk-ifmCHxBO.js";
import "./chunk-GTnGZnu1.js";
let o = class extends X {
  initialize() {
    this.addHandles([d$1(() => this.view.scale, () => this._update(), P$1)], "constructor");
  }
  isUpdating() {
    const e2 = this.layer.sublayers.some((e3) => null != e3.renderer), r = this._commandsQueue.updateTracking.updating, s = null != this._updatingRequiredFieldsPromise, i = !this._worker, t = this.dataUpdating, o2 = e2 && (r || s || i || t);
    return has("esri-2d-log-updating") && console.log(`Updating FLV2D: ${o2}
  -> hasRenderer ${e2}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${i}
  -> updatingPipeline ${t}
`), o2;
  }
};
o = e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")], o);
const a = o;
export {
  a as default
};
