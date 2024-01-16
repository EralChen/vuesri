import { bJ as d$1, aM as s$1, eq as t, bS as e$1, c_ as d$2, bo as e$2, bp as y$1, br as c } from "./chunk-KFNcxJaF.js";
import W from "./chunk-fc7PkH4j.js";
import { e } from "./chunk-7WVHb2Yk.js";
import { o } from "./chunk-vlSW2aJy.js";
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
import "./chunk-0Hxi-cKV.js";
import "./chunk-_ABw_62H.js";
import "./chunk-jrhFla2W.js";
import "./chunk-anoehU8Z.js";
import "./chunk-E-M87tOH.js";
import "./chunk-eM88eykE.js";
function u(e2, t2) {
  if (null == e2 && null == t2)
    return null;
  const r = {};
  return null != t2 && (r.geometry = t2.toJSON()), null != e2 && (r.where = e2), r;
}
let d = class extends o(W) {
  constructor() {
    super(...arguments), this.pipelineConnectionStatus = "disconnected", this.pipelineErrorString = null, this._enabledEventTypes = /* @__PURE__ */ new Set();
  }
  initialize() {
    this.addHandles([d$1(() => this.layer.customParameters, (e2) => this._proxy.updateCustomParameters(e2)), this.layer.on("send-message-to-socket", (e2) => this._proxy.sendMessageToSocket(e2)), this.layer.on("send-message-to-client", (e2) => this._proxy.sendMessageToClient(e2)), d$1(() => this.layer.purgeOptions, () => this._update()), d$1(() => this.suspended, this._onSuspendedChange.bind(this))], "constructor");
  }
  get connectionError() {
    return this.pipelineErrorString ? new s$1("stream-controller", this.pipelineErrorString) : null;
  }
  on(e2, t$1) {
    if (Array.isArray(e2))
      return t(e2.map((e3) => this.on(e3, t$1)));
    const i = ["data-received", "message-received"].includes(e2);
    i && (this._enabledEventTypes.add(e2), this._proxy.enableEvent(e2, true));
    const n = super.on(e2, t$1), o2 = this;
    return e$1(() => {
      n.remove(), i && (o2._proxy.closed || o2.hasEventListener(e2) || o2._proxy.enableEvent(e2, false));
    });
  }
  queryLatestObservations(e2, r) {
    if (!(this.layer.timeInfo?.endField || this.layer.timeInfo?.startField || this.layer.timeInfo?.trackIdField))
      throw new s$1("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e2), r).then((e3) => {
      const t2 = d$2.fromJSON(e3);
      return t2.features.forEach((e4) => {
        e4.layer = this.layer, e4.sourceLayer = this.layer;
      }), t2;
    });
  }
  detach() {
    super.detach(), this.pipelineConnectionStatus = "disconnected";
  }
  get _streamConnectionStatus() {
    return this.pipelineConnectionStatus;
  }
  _doPause() {
    this._proxy?.pauseStream();
  }
  _doResume() {
    this._proxy?.resumeStream();
  }
  _createClientOptions() {
    return { ...super._createClientOptions(), setProperty: (e2) => {
      this.set(e2.propertyName, e2.value);
    } };
  }
  _createTileRendererHash(e2) {
    const t2 = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(u(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e2) + t2;
  }
  async _createServiceOptions() {
    const e$12 = this.layer, { objectIdField: t2 } = e$12, r = e$12.fields.map((e2) => e2.toJSON()), s = e(e$12.geometryType), i = e$12.timeInfo?.toJSON() || null, n = e$12.spatialReference ? e$12.spatialReference.toJSON() : null;
    return { type: "stream", isPaused: this._isUserPaused, fields: r, fieldsIndex: this.layer.fieldsIndex.toJSON(), geometryType: s, objectIdField: t2, timeInfo: i, source: this.layer.parsedUrl, serviceFilter: u(this.layer.definitionExpression, this.layer.geometryDefinition), purgeOptions: this.layer.purgeOptions.toJSON(), enabledEventTypes: Array.from(this._enabledEventTypes.values()), spatialReference: n, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, updateInterval: this.layer.updateInterval, customParameters: e$12.customParameters };
  }
};
e$2([y$1()], d.prototype, "pipelineConnectionStatus", void 0), e$2([y$1()], d.prototype, "pipelineErrorString", void 0), e$2([y$1({ readOnly: true })], d.prototype, "connectionError", null), e$2([y$1({ readOnly: true })], d.prototype, "_streamConnectionStatus", null), d = e$2([c("esri.views.2d.layers.StreamLayerView2D")], d);
const y = d;
export {
  y as default
};
