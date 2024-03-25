import { ce as d$1, aO as s, fg as r$1, cm as e$1, dm as d$2, aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
import { n, X } from "./chunk-5k2iYTz0.js";
import { r } from "./chunk-9yDx-7aP.js";
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
let p = class extends r(X) {
  constructor() {
    super(...arguments), this.pipelineConnectionStatus = "disconnected", this.pipelineErrorString = null;
  }
  initialize() {
    this.addHandles([d$1(() => this.layer.customParameters, (e2) => this._worker.streamMessenger.updateCustomParameters(e2)), this.layer.on("send-message-to-socket", (e2) => this._worker.streamMessenger.sendMessageToSocket(e2)), this.layer.on("send-message-to-client", (e2) => {
      this._worker.streamMessenger.sendMessageToClient(e2), this._isUserPaused && "type" in e2 && "clear" === e2.type && this.incrementSourceRefreshVersion();
    }), d$1(() => this.layer.purgeOptions, () => this._update()), d$1(() => this.suspended, this._onSuspendedChange.bind(this))], "constructor"), this._doResume();
  }
  destroy() {
    this._doPause();
  }
  get connectionError() {
    return this.pipelineErrorString ? new s("stream-controller", this.pipelineErrorString) : null;
  }
  on(e2, r2) {
    if (Array.isArray(e2))
      return r$1(e2.map((e3) => this.on(e3, r2)));
    const o = ["data-received", "message-received"].includes(e2);
    o && this._worker.streamMessenger.enableEvent(e2, true);
    const n2 = super.on(e2, r2), i = this;
    return e$1(() => {
      n2.remove(), o && (i._worker.closed || i.hasEventListener(e2) || i._worker.streamMessenger.enableEvent(e2, false));
    });
  }
  queryLatestObservations(e2, t) {
    if (!(this.layer.timeInfo?.endField || this.layer.timeInfo?.startField || this.layer.timeInfo?.trackIdField))
      throw new s("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return n(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e2), t).then((e3) => {
      const r2 = d$2.fromJSON(e3);
      return r2.features.forEach((e4) => {
        e4.layer = this.layer, e4.sourceLayer = this.layer;
      }), r2;
    }), new d$2({ features: [] }));
  }
  detach() {
    super.detach(), this.pipelineConnectionStatus = "disconnected";
  }
  get _streamConnectionStatus() {
    return this.pipelineConnectionStatus;
  }
  _doPause() {
    null != this._refreshInterval && (clearInterval(this._refreshInterval), this._refreshInterval = null);
  }
  _doResume() {
    this._refreshInterval = setInterval(() => this.incrementSourceRefreshVersion(), this.layer.updateInterval);
  }
  _doDisconnect() {
    this._worker.streamMessenger.disconnect(), this._doPause();
  }
  _doConnect() {
    this._worker.streamMessenger.connect(), this.resume();
  }
  _doClear() {
    this._worker.streamMessenger.clear(), null == this._refreshInterval && this.incrementSourceRefreshVersion();
  }
  _createClientOptions() {
    const e2 = super._createClientOptions(), r2 = this;
    return { ...e2, get container() {
      return r2.featureContainer;
    }, setProperty: (e3) => {
      this.set(e3.propertyName, e3.value);
    } };
  }
};
e([y()], p.prototype, "pipelineConnectionStatus", void 0), e([y()], p.prototype, "pipelineErrorString", void 0), e([y({ readOnly: true })], p.prototype, "connectionError", null), e([y({ readOnly: true })], p.prototype, "_streamConnectionStatus", null), p = e([c("esri.views.2d.layers.StreamLayerView2D")], p);
const u = p;
export {
  u as default
};
