import { bo as e, br as c, bJ as d$1, bn as P$1, aq as has, e1 as d } from "./chunk-KFNcxJaF.js";
import W from "./chunk-fc7PkH4j.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-Zlv3z8RW.js";
import "./chunk-yIp_WHt0.js";
import "./chunk-G90k0bzF.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-b-LoIQKK.js";
import "./chunk-7WVHb2Yk.js";
import "./chunk-0Hxi-cKV.js";
import "./chunk-_ABw_62H.js";
import "./chunk-jrhFla2W.js";
import "./chunk-anoehU8Z.js";
import "./chunk-E-M87tOH.js";
import "./chunk-eM88eykE.js";
function n(e2, r) {
  return !e2.visible || 0 !== e2.minScale && r > e2.minScale || 0 !== e2.maxScale && r < e2.maxScale;
}
let l = class extends W {
  initialize() {
    this.addHandles([d$1(() => this.view.scale, () => this._update(), P$1)], "constructor");
  }
  isUpdating() {
    const e2 = this.layer.sublayers.some((e3) => null != e3.renderer), r = this._commandsQueue.updating, s = null != this._updatingRequiredFieldsPromise, i = !this._proxy || !this._proxy.isReady, t = this._pipelineIsUpdating, a = null == this.tileRenderer || this.tileRenderer?.updating, n2 = e2 && (r || s || i || t || a);
    return has("esri-2d-log-updating") && console.log(`Updating FLV2D: ${n2}
  -> hasRenderer ${e2}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${i}
  -> updatingPipeline ${t}
  -> updatingTileRenderer ${a}
`), n2;
  }
  _injectOverrides(e2) {
    let r = super._injectOverrides(e2);
    const s = this.view.scale, i = this.layer.sublayers.filter((e3) => n(e3, s)).map((e3) => e3.subtypeCode);
    if (!i.length)
      return r;
    r = null != r ? r : new d().toJSON();
    const a = `NOT ${this.layer.subtypeField} IN (${i.join(",")})`;
    return r.where = r.where ? `(${r.where}) AND (${a})` : a, r;
  }
  _setLayersForFeature(e2) {
    const r = this.layer.fieldsIndex.get(this.layer.subtypeField), s = e2.attributes[r.name], i = this.layer.sublayers.find((e3) => e3.subtypeCode === s);
    e2.layer = e2.sourceLayer = i;
  }
  _createSchemaConfig() {
    const e2 = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers).map((e3) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: e3.labelingInfo, labelsVisible: e3.labelsVisible, renderer: e3.renderer, subtypeCode: e3.subtypeCode, orderBy: null })) }, r = this.layer.sublayers.map((e3) => e3.subtypeCode).join(","), s = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${r})` : "1=2";
    let i = this.layer.definitionExpression ? this.layer.definitionExpression + " AND " : "";
    return i += s, { ...super._createSchemaConfig(), ...e2, definitionExpression: i };
  }
};
l = e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")], l);
const o = l;
export {
  o as default
};
