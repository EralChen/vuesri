import { aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
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
let t = class extends X {
  get updateSuspended() {
    const e2 = this.parent?.dynamicGroupLayerView;
    return this.suspended && (!e2 || true === e2.suspended);
  }
};
e([y()], t.prototype, "updateSuspended", null), t = e([c("esri.views.2d.layers.CatalogFootprintLayerView2D")], t);
const p = t;
export {
  p as default
};
