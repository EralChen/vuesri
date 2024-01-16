import { bo as e, bp as y$2, br as c, f3 as n$1, bs as g$1, bD as u$1, h3 as o, bJ as d$1, bf as c$1, bG as C, aM as s$1, bQ as b, dP as u$2 } from "./chunk-KFNcxJaF.js";
import { o as o$2 } from "./chunk-i-bvTqwe.js";
import { createConnection as o$1 } from "./chunk-uPuSzOAM.js";
import { r } from "./chunk-F2pifch3.js";
import { E } from "./chunk-K_eIouts.js";
import { n } from "./chunk-7Z1hjEcP.js";
import { o as o$3 } from "./chunk-vlSW2aJy.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-jrhFla2W.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-HNaBfNyK.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
import "./chunk-mk4KSkT-.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-UzDyJefO.js";
import "./chunk-vP0bHkve.js";
import "./chunk-UZskY1JT.js";
const l = 2500;
let u = class extends c$1 {
  getObjectId() {
    return this.objectId;
  }
};
e([y$2({ type: Number, json: { read: true } })], u.prototype, "objectId", void 0), u = e([c("esri.layers.graphics.controllers.StreamGraphic")], u);
let m$1 = class m {
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
};
let y$1 = class y extends n$1(g$1) {
  constructor() {
    super(...arguments), this.isPaused = false, this.graphics = new r(), this._updateInfo = { websocket: 0, client: 0 }, this._updateIntervalId = null, this._outSpatialReference = null;
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
    this._clearInterval(), this.connection = u$1(this.connection), this.store = u$1(this.store), this.graphics.clear(), this.removeAllHandles();
  }
  get updating() {
    return !this.connection || "connected" === this.connection.connectionStatus;
  }
  _startup() {
    const { layer: e2, layerView: t } = this, { spatialReference: s, definitionExpression: r2, geometryDefinition: o$32, objectIdField: a, timeInfo: n2, purgeOptions: d, maxReconnectionAttempts: l2, maxReconnectionInterval: u2, customParameters: y3 } = e2, f = e2.geometryType ? o.toJSON(e2.geometryType) : null, g = s, I = t.view.spatialReference, _ = { geometry: o$32, where: r2 };
    this.clear(), this._set("connection", o$1(e2.parsedUrl, g, I, f, _, l2, u2, y3 ?? void 0)), this._outSpatialReference = I.toJSON(), this.store = new m$1(this._onUpdate.bind(this)), this.featuresManager = new o$2(this.store, a, n2.toJSON(), d);
    const v = "startup-watches";
    this.removeHandles(v), this.addHandles([e2.on("send-message-to-socket", (e3) => this.connection.sendMessageToSocket(e3)), e2.on("send-message-to-client", (e3) => this.connection.sendMessageToClient(e3)), this.connection.on("data-received", (e3) => this._onFeature(e3)), this.connection.on("message-received", (e3) => this._onWebSocketMessage(e3)), d$1(() => [e2.definitionExpression, e2.geometryDefinition, e2.purgeOptions], () => this._startup())], v), this.isPaused || this._initUpdateInterval();
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
      const t = u.fromJSON(e2);
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
      const e3 = performance.now(), s = e3 - t;
      if (s > l) {
        t = e3;
        const r2 = Math.round(this._updateInfo.client / (s / 1e3)), o2 = Math.round(this._updateInfo.websocket / (s / 1e3));
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
};
e([y$2()], y$1.prototype, "isPaused", void 0), e([y$2({ constructOnly: true })], y$1.prototype, "layer", void 0), e([y$2({ constructOnly: true })], y$1.prototype, "layerView", void 0), e([y$2()], y$1.prototype, "connection", void 0), e([y$2({ readOnly: true })], y$1.prototype, "updating", null), y$1 = e([c("esri.layers.graphics.controllers.StreamController")], y$1);
let m2 = class extends o$3(E(n(u$2))) {
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
    return e2 ? new s$1("stream-controller", e2) : null;
  }
  createQuery() {
    return new b({ outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference });
  }
  queryLatestObservations(e2, r2) {
    return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e2), r2?.signal);
  }
  get _streamConnectionStatus() {
    return this.controller?.connection?.connectionStatus ?? "disconnected";
  }
  createController() {
    return new y$1({ layer: this.layer, layerView: this });
  }
  beforeSetController() {
  }
  _doPause() {
    this.controller?.pauseStream();
  }
  _doResume() {
    this.controller?.resumeStream();
  }
};
e([y$2({ readOnly: true })], m2.prototype, "updatePolicy", void 0), e([y$2({ readOnly: true })], m2.prototype, "connectionError", null), e([y$2()], m2.prototype, "controller", void 0), e([y$2({ readOnly: true })], m2.prototype, "hasZ", void 0), e([y$2({ readOnly: true })], m2.prototype, "hasM", void 0), e([y$2({ readOnly: true })], m2.prototype, "_streamConnectionStatus", null), m2 = e([c("esri.views.3d.layers.StreamLayerView3D")], m2);
const y2 = m2;
export {
  y2 as default
};
