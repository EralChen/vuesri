import { aV as e, aX as y$1, a_ as c, fU as n$1, bZ as S$1, c8 as u$2, hZ as o, ce as d$1, bJ as c$1, cb as C, aO as s, ck as b$1, eu as u$3 } from "./chunk-ejFG4zJ0.js";
import { o as o$1 } from "./chunk-qlOX-GZt.js";
import { createConnection as r } from "./chunk-mXYE4zLb.js";
import { h } from "./chunk-QztbNmp9.js";
import { b } from "./chunk-qr0t-oSA.js";
import { n } from "./chunk-ZRKw_7qF.js";
import { r as r$1 } from "./chunk-9yDx-7aP.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-jrhFla2W.js";
import "./chunk-nxkTbLqW.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-P_v7gizd.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-HoJyfhBe.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-drfK378b.js";
import "./chunk-315ILBUn.js";
const p = 2500;
let u$1 = class u extends c$1 {
  getObjectId() {
    return this.objectId;
  }
};
e([y$1({ type: Number, json: { read: true } })], u$1.prototype, "objectId", void 0), u$1 = e([c("esri.layers.graphics.controllers.StreamGraphic")], u$1);
class m {
  constructor(e2) {
    this.onUpdate = e2, this._idToGraphic = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._idToGraphic.clear();
  }
  add(e2) {
    this._idToGraphic.set(e2.objectId, e2);
  }
  get(e2) {
    return this._idToGraphic.get(e2);
  }
  forEach(e2) {
    this._idToGraphic.forEach(e2);
  }
  removeById(e2) {
    const t = this._idToGraphic.get(e2);
    return t ? (t.sourceLayer = t.layer = null, this._idToGraphic.delete(e2), t) : null;
  }
  update(e2, t) {
    this.onUpdate(e2, t);
  }
  get size() {
    return this._idToGraphic.size;
  }
}
let y = class extends n$1(S$1) {
  constructor() {
    super(...arguments), this.isPaused = false, this.graphics = new h(), this._updateInfo = { websocket: 0, client: 0 }, this._updateIntervalId = null, this._outSpatialReference = null;
  }
  initialize() {
    this.addResolvingPromise(this.layer.when(() => this._startup()));
  }
  destroy() {
    this.clear();
  }
  _clearInterval() {
    null !== this._updateIntervalId && (clearInterval(this._updateIntervalId), this._updateIntervalId = null);
  }
  clear() {
    this._shutdown(), this.graphics.clear();
  }
  get updating() {
    return !this.connection || "connected" === this.connection.connectionStatus;
  }
  _shutdown() {
    this._clearInterval(), this.connection = u$2(this.connection), this.store = u$2(this.store), this.removeAllHandles();
  }
  _startup() {
    const { layer: e2, layerView: t } = this, { spatialReference: s2, definitionExpression: r$12, geometryDefinition: o$2, objectIdField: a, timeInfo: n2, purgeOptions: d2, maxReconnectionAttempts: p2, maxReconnectionInterval: u3, customParameters: y2 } = e2, f = e2.geometryType ? o.toJSON(e2.geometryType) : null, g = s2, _ = t.view.spatialReference;
    this.clear(), this._set("connection", r(e2.parsedUrl, g, _, f, r$12, o$2, p2, u3, y2 ?? void 0)), this._outSpatialReference = _.toJSON(), this.store = new m(this._onUpdate.bind(this)), this.featuresManager = new o$1(this.store, a, n2.toJSON(), d2);
    const I = "startup-watches";
    this.removeHandles(I), this.addHandles([e2.on("send-message-to-socket", (e3) => this.connection.sendMessageToSocket(e3)), e2.on("send-message-to-client", (e3) => this.connection.sendMessageToClient(e3)), this.connection.on("data-received", (e3) => this._onFeature(e3)), this.connection.on("message-received", (e3) => this._onWebSocketMessage(e3)), d$1(() => [e2.definitionExpression, e2.geometryDefinition, e2.purgeOptions], () => this._startup())], I), this.isPaused || this._initUpdateInterval();
  }
  _onWebSocketMessage(e2) {
    if (this.layerView.emit("message-received", e2), "type" in e2)
      switch (e2.type) {
        case "delete":
          if (e2.objectIds)
            for (const t of e2.objectIds)
              this.featuresManager.removeById(t);
          if (e2.trackIds)
            for (const t of e2.trackIds)
              this.featuresManager.removeByTrackId(t);
          break;
        case "clear":
          this.store.forEach((e3) => this.featuresManager.removeById(e3.objectId));
      }
  }
  _onFeature(e2) {
    this._updateInfo.websocket++, this.layerView.hasEventListener("data-received") && this.layerView.emit("data-received", { attributes: e2.attributes, centroid: e2.centroid, geometry: e2.geometry });
    try {
      null == e2.geometry || e2.geometry.spatialReference || (e2.geometry.spatialReference = this._outSpatialReference);
      const t = u$1.fromJSON(e2);
      t.sourceLayer = t.layer = this.layer, this.featuresManager.add(t);
    } catch {
    }
  }
  _onUpdate(e2, t) {
    null != t && this.graphics.removeMany(t), null != e2 && (this._updateInfo.client += e2.length, this.graphics.addMany(e2));
  }
  _initUpdateInterval() {
    this._clearInterval();
    const { updateInterval: e2 } = this.layer;
    let t = performance.now();
    this._updateIntervalId = setInterval(() => {
      const e3 = performance.now(), s2 = e3 - t;
      if (s2 > p) {
        t = e3;
        const r2 = Math.round(this._updateInfo.client / (s2 / 1e3)), o2 = Math.round(this._updateInfo.websocket / (s2 / 1e3));
        this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.layerView.emit("update-rate", { client: r2, websocket: o2 });
      }
      this.featuresManager.checkForUpdates();
    }, e2);
  }
  pauseStream() {
    this.isPaused = true, this._clearInterval();
  }
  resumeStream() {
    this.isPaused = false, this._initUpdateInterval();
  }
  disconnect() {
    this._shutdown();
  }
  connect() {
    null == this.connection && this._startup();
  }
  clearGraphics() {
    this.graphics.clear();
  }
};
e([y$1()], y.prototype, "isPaused", void 0), e([y$1({ constructOnly: true })], y.prototype, "layer", void 0), e([y$1({ constructOnly: true })], y.prototype, "layerView", void 0), e([y$1()], y.prototype, "connection", void 0), e([y$1({ readOnly: true })], y.prototype, "updating", null), y = e([c("esri.layers.graphics.controllers.StreamController")], y);
let u2 = class extends r$1(b(n(u$3))) {
  constructor() {
    super(...arguments), this.type = "stream-3d", this.updatePolicy = C.ASYNC, this.hasZ = true, this.hasM = false;
  }
  initialize() {
    this.addHandles(d$1(() => this.suspended, (e2) => {
      this.controller && this._onSuspendedChange(e2);
    }));
  }
  get connectionError() {
    const e2 = this.controller?.connection?.errorString;
    return e2 ? new s("stream-controller", e2) : null;
  }
  createQuery() {
    return new b$1({ outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference });
  }
  queryLatestObservations(e2, r2) {
    return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e2), r2?.signal);
  }
  get _streamConnectionStatus() {
    return this.controller?.connection?.connectionStatus ?? "disconnected";
  }
  createController() {
    return new y({ layer: this.layer, layerView: this });
  }
  beforeSetController() {
  }
  _doPause() {
    this.controller?.pauseStream();
  }
  _doResume() {
    this.controller?.resumeStream();
  }
  _doDisconnect() {
    this.controller?.disconnect(), this._doPause();
  }
  _doConnect() {
    this.controller?.connect(), this.resume();
  }
  _doClear() {
    this.controller?.clearGraphics();
  }
};
e([y$1({ readOnly: true })], u2.prototype, "updatePolicy", void 0), e([y$1({ readOnly: true })], u2.prototype, "connectionError", null), e([y$1()], u2.prototype, "controller", void 0), e([y$1({ readOnly: true })], u2.prototype, "hasZ", void 0), e([y$1({ readOnly: true })], u2.prototype, "hasM", void 0), e([y$1({ readOnly: true })], u2.prototype, "_streamConnectionStatus", null), u2 = e([c("esri.views.3d.layers.StreamLayerView3D")], u2);
const d = u2;
export {
  d as default
};
