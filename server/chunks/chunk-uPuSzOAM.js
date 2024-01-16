import { d1 as o$1, aM as s$1, bo as e, bp as y$1, br as c$2, l0 as o$2, cT as Et, bb as s$2, lw as A, b7 as C$1, a$ as j, cw as p, bQ as b, cZ as f$1, nN as c$3 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c$1 = class c extends o$1.EventedAccessor {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString ? new s$1("stream-connection", this.errorString) : null;
  }
  onFeature(r) {
    this.emit("data-received", r);
  }
  onMessage(r) {
    this.emit("message-received", r);
  }
};
e([y$1({ readOnly: true })], c$1.prototype, "connectionError", null), c$1 = e([c$2("esri.layers.support.StreamConnection")], c$1);
const i = c$1;
var h$1;
!function(e2) {
  e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSING = 2] = "CLOSING", e2[e2.CLOSED = 3] = "CLOSED";
}(h$1 || (h$1 = {}));
let d$1 = class d extends i {
  constructor(e2) {
    super(), this._outstandingMessages = [], this.errorString = null;
    const { geometryType: t, spatialReference: o2, sourceSpatialReference: s } = e2;
    this._config = e2, this._featureZScaler = o$2(t, s, o2), this._open();
  }
  async _open() {
    await this._tryCreateWebSocket(), this.destroyed || await this._handshake();
  }
  destroy() {
    super.destroy(), null != this._websocket && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (null == this._websocket)
      return "disconnected";
    switch (this._websocket.readyState) {
      case h$1.CONNECTING:
      case h$1.OPEN:
        return "connected";
      case h$1.CLOSING:
      case h$1.CLOSED:
        return "disconnected";
    }
  }
  sendMessageToSocket(e2) {
    null != this._websocket ? this._websocket.send(JSON.stringify(e2)) : this._outstandingMessages.push(e2);
  }
  sendMessageToClient(e2) {
    this._onMessage(e2);
  }
  updateCustomParameters(e2) {
    this._config.customParameters = e2, null != this._websocket && this._websocket.close();
  }
  async _tryCreateWebSocket(e2 = this._config.source.path, r = 1e3, i2 = 0) {
    try {
      if (this.destroyed)
        return;
      const t = Et(e2, this._config.customParameters ?? {});
      this._websocket = await this._createWebSocket(t), this.notifyChange("connectionStatus");
    } catch (c3) {
      const n = r / 1e3;
      return this._config.maxReconnectionAttempts && i2 >= this._config.maxReconnectionAttempts ? (s$2.getLogger(this).error(new s$1("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (s$2.getLogger(this).error(new s$1("websocket-connection", `Failed to connect. Attempting to reconnect in ${n}s`, c3)), await A(r), this._tryCreateWebSocket(e2, Math.min(1.5 * r, 1e3 * this._config.maxReconnectionInterval), i2 + 1));
    }
  }
  _setWebSocketJSONParseHandler(e2) {
    e2.onmessage = (e3) => {
      try {
        const t = JSON.parse(e3.data);
        this._onMessage(t);
      } catch (s) {
        return void s$2.getLogger(this).error(new s$1("websocket-connection", "Failed to parse message, invalid JSON", { error: s }));
      }
    };
  }
  _createWebSocket(e2) {
    return new Promise((t, o2) => {
      const s = new WebSocket(e2);
      s.onopen = () => {
        if (s.onopen = null, this.destroyed)
          return s.onclose = null, void s.close();
        s.onclose = (e3) => this._onClose(e3), s.onerror = (e3) => this._onError(e3), this._setWebSocketJSONParseHandler(s), t(s);
      }, s.onclose = (e3) => {
        s.onopen = s.onclose = null, o2(e3);
      };
    });
  }
  async _handshake(e2 = 1e4) {
    const s = this._websocket;
    if (null == s)
      return;
    const n = C$1(), i2 = s.onmessage, { filter: c3, outFields: a, spatialReference: l } = this._config;
    return n.timeout(e2), s.onmessage = (e3) => {
      let r = null;
      try {
        r = JSON.parse(e3.data);
      } catch (h2) {
      }
      r && "object" == typeof r || (s$2.getLogger(this).error(new s$1("websocket-connection", "Protocol violation. Handshake failed - malformed message", e3.data)), n.reject(), this.destroy()), r.spatialReference?.wkid !== l?.wkid && (s$2.getLogger(this).error(new s$1("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l.wkid}`, e3.data)), n.reject(), this.destroy()), "json" !== r.format && (s$2.getLogger(this).error(new s$1("websocket-connection", "Protocol violation. Handshake failed - format is not set", e3.data)), n.reject(), this.destroy()), c3 && r.filter !== c3 && s$2.getLogger(this).error(new s$1("websocket-connection", "Tried to set filter, but server doesn't support it")), a && r.outFields !== a && s$2.getLogger(this).error(new s$1("websocket-connection", "Tried to set outFields, but server doesn't support it")), s.onmessage = i2;
      for (const t of this._outstandingMessages)
        s.send(JSON.stringify(t));
      this._outstandingMessages = [], n.resolve();
    }, s.send(JSON.stringify({ filter: c3, outFields: a, format: "json", spatialReference: { wkid: l.wkid } })), n.promise;
  }
  _onMessage(e2) {
    if (this.onMessage(e2), "type" in e2)
      switch (e2.type) {
        case "features":
        case "featureResult":
          for (const t of e2.features)
            null != this._featureZScaler && this._featureZScaler(t.geometry), this.onFeature(t);
      }
  }
  _onError(e2) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), s$2.getLogger(this).error("websocket-connection", t);
  }
  _onClose(e2) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e2.code && s$2.getLogger(this).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e2.code}`), this.destroyed || this._open();
  }
};
e([y$1()], d$1.prototype, "connectionStatus", null), e([y$1()], d$1.prototype, "errorString", void 0), d$1 = e([c$2("esri.layers.graphics.sources.connections.WebSocketConnection")], d$1);
const h = 1e4, d2 = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let g = class extends d$1 {
  constructor(e2) {
    super({ ...d2, ...e2 }), this._buddyServicesQuery = null, this._relatedFeatures = null;
  }
  async _open() {
    const e2 = await this._fetchServiceDefinition(this._config.source);
    e2.timeInfo.trackIdField || s$2.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t = this._fetchWebSocketUrl(e2.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t);
    const { filter: r, outFields: o2 } = this._config;
    this.destroyed || this._setFilter(r, o2);
  }
  _onMessage(e2) {
    if ("attributes" in e2) {
      let o2;
      try {
        o2 = this._enrich(e2), null != this._featureZScaler && this._featureZScaler(o2.geometry);
      } catch (t) {
        return void s$2.getLogger(this).error(new s$1("geoevent-connection", "Failed to parse message", t));
      }
      this.onFeature(o2);
    } else
      this.onMessage(e2);
  }
  async _fetchServiceDefinition(e2) {
    const r = { f: "json", ...this._config.customParameters }, s = j(e2.path, { query: r, responseType: "json" }), o2 = (await s).data;
    return this._serviceDefinition = o2, o2;
  }
  _fetchWebSocketUrl(e2, t) {
    const r = e2[0], { urls: s, token: o2 } = r, n = this._inferWebSocketBaseUrl(s);
    return Et(`${n}/subscribe`, { outSR: "" + t.wkid, token: o2 });
  }
  _inferWebSocketBaseUrl(e2) {
    if (1 === e2.length)
      return e2[0];
    for (const t of e2)
      if (t.includes("wss"))
        return t;
    return s$2.getLogger(this).error(new s$1("geoevent-connection", "Unable to infer WebSocket url", e2)), null;
  }
  async _setFilter(e2, t) {
    const i2 = this._websocket;
    if (null == i2 || null == e2 && null == t)
      return;
    const n = JSON.stringify({ filter: this._serializeFilter(e2, t) });
    let a = false;
    const c3 = C$1(), u = () => {
      a || (this.destroyed || this._websocket !== i2 || s$2.getLogger(this).error(new s$1("geoevent-connection", "Server timed out when setting filter")), c3.reject());
    }, l = (e3) => {
      const t2 = JSON.parse(e3.data);
      t2.filter && (t2.error && (s$2.getLogger(this).error(new s$1("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), c3.reject(t2.error)), this._setWebSocketJSONParseHandler(i2), a = true, c3.resolve());
    };
    return i2.onmessage = l, i2.send(n), setTimeout(u, h), c3.promise;
  }
  _serializeFilter(e2, t) {
    const o2 = {};
    if (null == e2 && null == t)
      return o2;
    if (e2?.geometry)
      try {
        const t2 = p(e2.geometry);
        if ("extent" !== t2.type)
          throw new s$1(`Expected extent but found type ${t2.type}`);
        o2.geometry = JSON.stringify(t2.shiftCentralMeridian());
      } catch (i2) {
        s$2.getLogger(this).error(new s$1("geoevent-connection", "Encountered an error when setting connection geometryDefinition", i2));
      }
    return e2?.where && "1 = 1" !== e2.where && "1=1" !== e2.where && (o2.where = e2.where), null != t && (o2.outFields = t.join(",")), o2;
  }
  _enrich(e2) {
    if (!this._relatedFeatures)
      return e2;
    const t = this._serviceDefinition.relatedFeatures.joinField, o2 = e2.attributes[t], i2 = this._relatedFeatures.get(o2);
    if (!i2)
      return s$2.getLogger(this).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e2), e2;
    const { attributes: n, geometry: a } = i2;
    for (const r in n)
      e2.attributes[r] = n[r];
    return a && (e2.geometry = a), e2.geometry || e2.centroid || s$2.getLogger(this).error(new s$1("geoevent-connection", "Found malformed feature - no geometry found", e2)), e2;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e2, keepLatestArchive: t } = this._serviceDefinition, r = this._queryRelatedFeatures(e2), s = this._queryArchive(t);
      await r;
      const o2 = await s;
      if (!o2)
        return;
      for (const i2 of o2.features)
        this.onFeature(this._enrich(i2));
    } catch (e2) {
      s$2.getLogger(this).error(new s$1("geoevent-connection", "Encountered an error when querying buddy services", { error: e2 }));
    }
  }
  async _queryRelatedFeatures(e2) {
    if (!e2)
      return;
    const t = await this._queryBuddy(e2.featuresUrl);
    this._addRelatedFeatures(t);
  }
  async _queryArchive(e2) {
    if (e2)
      return this._queryBuddy(e2.featuresUrl);
  }
  async _queryBuddy(e2) {
    const t = new (await import("./chunk-KFNcxJaF.js").then((n2) => n2.E2)).default({ url: e2 }), { capabilities: r } = await t.load(), s = r.query.supportsMaxRecordCountFactor, o2 = r.query.supportsPagination, i2 = r.query.supportsCentroid, n = this._config.maxRecordCountFactor, a = t.capabilities.query.maxRecordCount, l = s ? a * n : a, h2 = new b();
    if (h2.outFields = this._config.outFields ?? ["*"], h2.where = this._config.filter?.where ?? "1=1", h2.returnGeometry = true, h2.returnExceededLimitFeatures = true, h2.outSpatialReference = f$1.fromJSON(this._config.spatialReference), i2 && (h2.returnCentroid = true), s && (h2.maxRecordCountFactor = n), o2)
      return h2.num = l, t.destroy(), this._queryPages(e2, h2);
    const d3 = await c$3(e2, h2, this._config.sourceSpatialReference);
    return t.destroy(), d3.data;
  }
  async _queryPages(e2, t, r = [], s = 0) {
    t.start = null != t.num ? s * t.num : null;
    const { data: o2 } = await c$3(e2, t, this._config.sourceSpatialReference);
    return o2.exceededTransferLimit && s < (this._config.maxQueryDepth ?? 0) ? (o2.features.forEach((e3) => r.push(e3)), this._queryPages(e2, t, r, s + 1)) : (r.forEach((e3) => o2.features.push(e3)), o2);
  }
  _addRelatedFeatures(e2) {
    const t = /* @__PURE__ */ new Map(), r = e2.features, s = this._serviceDefinition.relatedFeatures.joinField;
    for (const o2 of r) {
      const e3 = o2.attributes[s];
      t.set(e3, o2);
    }
    this._relatedFeatures = t;
  }
};
g = e([c$2("esri.layers.graphics.sources.connections.GeoEventConnection")], g);
const y = g;
let c2 = class extends i {
  constructor(e2) {
    super(), this.connectionStatus = "connected", this.errorString = null;
    const { geometryType: r, spatialReference: t, sourceSpatialReference: s } = e2;
    this._featureZScaler = o$2(r, s, t);
  }
  updateCustomParameters(e2) {
  }
  sendMessageToSocket(e2) {
  }
  sendMessageToClient(e2) {
    if ("type" in e2)
      switch (e2.type) {
        case "features":
        case "featureResult":
          for (const r of e2.features)
            null != this._featureZScaler && this._featureZScaler(r.geometry), this.onFeature(r);
      }
    this.onMessage(e2);
  }
};
e([y$1()], c2.prototype, "connectionStatus", void 0), e([y$1()], c2.prototype, "errorString", void 0), c2 = e([c$2("esri.layers.support.ClientSideConnection")], c2);
function o(o2, r, s, i2, c$12, a, m, p2) {
  const f = { source: o2, sourceSpatialReference: r, spatialReference: s, geometryType: i2, filter: c$12, maxReconnectionAttempts: a, maxReconnectionInterval: m, customParameters: p2 };
  if (!o2)
    return new c2(f);
  return o2.path.startsWith("wss://") || o2.path.startsWith("ws://") ? new d$1(f) : new y(f);
}
export {
  o as createConnection
};
