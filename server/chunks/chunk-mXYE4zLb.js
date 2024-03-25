import { ds as o$1, aO as s, aV as e, aX as y$1, a_ as c$1, lS as o$2, dg as Et, aT as s$1, iU as A, bC as L$1, aQ as U$1, cX as y$2, ck as b, aB as f$1, qc as c$2 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c = class extends o$1.EventedAccessor {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString ? new s("stream-connection", this.errorString) : null;
  }
  onFeature(r2) {
    this.emit("data-received", r2);
  }
  onMessage(r2) {
    this.emit("message-received", r2);
  }
};
e([y$1({ readOnly: true })], c.prototype, "connectionError", null), c = e([c$1("esri.layers.support.StreamConnection")], c);
const n = c;
var h$1;
!function(e2) {
  e2[e2.CONNECTING = 0] = "CONNECTING", e2[e2.OPEN = 1] = "OPEN", e2[e2.CLOSING = 2] = "CLOSING", e2[e2.CLOSED = 3] = "CLOSED";
}(h$1 || (h$1 = {}));
let d$1 = class d extends n {
  constructor(e2) {
    super({}), this._outstandingMessages = [], this.errorString = null;
    const { geometryType: t, spatialReference: o2, sourceSpatialReference: s2 } = e2;
    this._config = e2, this._featureZScaler = o$2(t, s2, o2), this._open();
  }
  normalizeCtorArgs() {
    return {};
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
  async _tryCreateWebSocket(e2 = this._config.source.path, r2 = 1e3, i = 0) {
    try {
      if (this.destroyed)
        return;
      const t = Et(e2, this._config.customParameters ?? {});
      this._websocket = await this._createWebSocket(t), this.notifyChange("connectionStatus");
    } catch (c2) {
      const n2 = r2 / 1e3;
      return this._config.maxReconnectionAttempts && i >= this._config.maxReconnectionAttempts ? (s$1.getLogger(this).error(new s("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (s$1.getLogger(this).error(new s("websocket-connection", `Failed to connect. Attempting to reconnect in ${n2}s`, c2)), await A(r2), this._tryCreateWebSocket(e2, Math.min(1.5 * r2, 1e3 * this._config.maxReconnectionInterval), i + 1));
    }
  }
  _setWebSocketJSONParseHandler(e2) {
    e2.onmessage = (e3) => {
      try {
        const t = JSON.parse(e3.data);
        this._onMessage(t);
      } catch (s$2) {
        return void s$1.getLogger(this).error(new s("websocket-connection", "Failed to parse message, invalid JSON", { error: s$2 }));
      }
    };
  }
  _createWebSocket(e2) {
    return new Promise((t, o2) => {
      const s2 = new WebSocket(e2);
      s2.onopen = () => {
        if (s2.onopen = null, this.destroyed)
          return s2.onclose = null, void s2.close();
        s2.onclose = (e3) => this._onClose(e3), s2.onerror = (e3) => this._onError(e3), this._setWebSocketJSONParseHandler(s2), t(s2);
      }, s2.onclose = (e3) => {
        s2.onopen = s2.onclose = null, o2(e3);
      };
    });
  }
  async _handshake(e2 = 1e4) {
    const s$2 = this._websocket;
    if (null == s$2)
      return;
    const n2 = L$1(), i = s$2.onmessage, { filter: c2, outFields: a2, spatialReference: l } = this._config;
    return n2.timeout(e2), s$2.onmessage = (e3) => {
      let r2 = null;
      try {
        r2 = JSON.parse(e3.data);
      } catch (h2) {
      }
      r2 && "object" == typeof r2 || (s$1.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - malformed message", e3.data)), n2.reject(), this.destroy()), r2.spatialReference?.wkid !== l?.wkid && (s$1.getLogger(this).error(new s("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l.wkid}`, e3.data)), n2.reject(), this.destroy()), "json" !== r2.format && (s$1.getLogger(this).error(new s("websocket-connection", "Protocol violation. Handshake failed - format is not set", e3.data)), n2.reject(), this.destroy()), c2 && r2.filter !== c2 && s$1.getLogger(this).error(new s("websocket-connection", "Tried to set filter, but server doesn't support it")), a2 && r2.outFields !== a2 && s$1.getLogger(this).error(new s("websocket-connection", "Tried to set outFields, but server doesn't support it")), s$2.onmessage = i;
      for (const t of this._outstandingMessages)
        s$2.send(JSON.stringify(t));
      this._outstandingMessages = [], n2.resolve();
    }, s$2.send(JSON.stringify({ filter: c2, outFields: a2, format: "json", spatialReference: { wkid: l.wkid } })), n2.promise;
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
    this._set("errorString", t), s$1.getLogger(this).error("websocket-connection", t);
  }
  _onClose(e2) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e2.code && s$1.getLogger(this).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e2.code}`), this.destroyed || this._open();
  }
};
e([y$1()], d$1.prototype, "connectionStatus", null), e([y$1()], d$1.prototype, "errorString", void 0), d$1 = e([c$1("esri.layers.graphics.sources.connections.WebSocketConnection")], d$1);
const h = 1e4, d2 = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
let g = class extends d$1 {
  constructor(e2) {
    super({ ...d2, ...e2 }), this._buddyServicesQuery = null, this._relatedFeatures = null;
  }
  async _open() {
    const e2 = await this._fetchServiceDefinition(this._config.source);
    e2.timeInfo.trackIdField || s$1.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t = this._fetchWebSocketUrl(e2.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t);
    const { filter: r2, outFields: o2 } = this._config;
    this.destroyed || this._setFilter(r2, o2);
  }
  _onMessage(e2) {
    if ("attributes" in e2) {
      let o2;
      try {
        o2 = this._enrich(e2), null != this._featureZScaler && this._featureZScaler(o2.geometry);
      } catch (t) {
        return void s$1.getLogger(this).error(new s("geoevent-connection", "Failed to parse message", t));
      }
      this.onFeature(o2);
    } else
      this.onMessage(e2);
  }
  async _fetchServiceDefinition(e2) {
    const r2 = { f: "json", ...this._config.customParameters }, i = U$1(e2.path, { query: r2, responseType: "json" }), o2 = (await i).data;
    return this._serviceDefinition = o2, o2;
  }
  _fetchWebSocketUrl(e2, t) {
    const r2 = e2[0], { urls: i, token: o2 } = r2, n2 = this._inferWebSocketBaseUrl(i);
    return Et(`${n2}/subscribe`, { outSR: "" + t.wkid, token: o2 });
  }
  _inferWebSocketBaseUrl(e2) {
    if (1 === e2.length)
      return e2[0];
    for (const t of e2)
      if (t.includes("wss"))
        return t;
    return s$1.getLogger(this).error(new s("geoevent-connection", "Unable to infer WebSocket url", e2)), null;
  }
  async _setFilter(e2, t) {
    const s$2 = this._websocket;
    if (null == s$2 || null == e2 && null == t)
      return;
    const n2 = JSON.stringify({ filter: this._serializeFilter(e2, t) });
    let a2 = false;
    const c2 = L$1(), u = () => {
      a2 || (this.destroyed || this._websocket !== s$2 || s$1.getLogger(this).error(new s("geoevent-connection", "Server timed out when setting filter")), c2.reject());
    }, l = (e3) => {
      const t2 = JSON.parse(e3.data);
      t2.filter && (t2.error && (s$1.getLogger(this).error(new s("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), c2.reject(t2.error)), this._setWebSocketJSONParseHandler(s$2), a2 = true, c2.resolve());
    };
    return s$2.onmessage = l, s$2.send(n2), setTimeout(u, h), c2.promise;
  }
  _serializeFilter(e2, t) {
    const o2 = {};
    if (null == e2 && null == t)
      return o2;
    if (e2?.geometry)
      try {
        const t2 = y$2(e2.geometry);
        if ("extent" !== t2.type)
          throw new s(`Expected extent but found type ${t2.type}`);
        o2.geometry = JSON.stringify(t2.shiftCentralMeridian());
      } catch (s$2) {
        s$1.getLogger(this).error(new s("geoevent-connection", "Encountered an error when setting connection geometryDefinition", s$2));
      }
    return e2?.where && "1 = 1" !== e2.where && "1=1" !== e2.where && (o2.where = e2.where), null != t && (o2.outFields = t.join(",")), o2;
  }
  _enrich(e2) {
    if (!this._relatedFeatures)
      return e2;
    const t = this._serviceDefinition.relatedFeatures.joinField, o2 = e2.attributes[t], s$2 = this._relatedFeatures.get(o2);
    if (!s$2)
      return s$1.getLogger(this).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e2), e2;
    const { attributes: n2, geometry: a2 } = s$2;
    for (const r2 in n2)
      e2.attributes[r2] = n2[r2];
    return a2 && (e2.geometry = a2), e2.geometry || e2.centroid || s$1.getLogger(this).error(new s("geoevent-connection", "Found malformed feature - no geometry found", e2)), e2;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e2, keepLatestArchive: t } = this._serviceDefinition, r2 = this._queryRelatedFeatures(e2), i = this._queryArchive(t);
      await r2;
      const o2 = await i;
      if (!o2)
        return;
      for (const s2 of o2.features)
        this.onFeature(this._enrich(s2));
    } catch (e2) {
      s$1.getLogger(this).error(new s("geoevent-connection", "Encountered an error when querying buddy services", { error: e2 }));
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
    const t = new (await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DZ)).default({ url: e2 }), { capabilities: r2 } = await t.load(), i = r2.query.supportsMaxRecordCountFactor, o2 = r2.query.supportsPagination, s2 = r2.query.supportsCentroid, n2 = this._config.maxRecordCountFactor, a2 = t.capabilities.query.maxRecordCount, l = i ? a2 * n2 : a2, h2 = new b();
    if (h2.outFields = this._config.outFields ?? ["*"], h2.where = this._config.filter?.where ?? "1=1", h2.returnGeometry = true, h2.returnExceededLimitFeatures = true, h2.outSpatialReference = f$1.fromJSON(this._config.spatialReference), s2 && (h2.returnCentroid = true), i && (h2.maxRecordCountFactor = n2), o2)
      return h2.num = l, t.destroy(), this._queryPages(e2, h2);
    const d3 = await c$2(e2, h2, this._config.sourceSpatialReference);
    return t.destroy(), d3.data;
  }
  async _queryPages(e2, t, r2 = [], i = 0) {
    t.start = null != t.num ? i * t.num : null;
    const { data: o2 } = await c$2(e2, t, this._config.sourceSpatialReference);
    return o2.exceededTransferLimit && i < (this._config.maxQueryDepth ?? 0) ? (o2.features.forEach((e3) => r2.push(e3)), this._queryPages(e2, t, r2, i + 1)) : (r2.forEach((e3) => o2.features.push(e3)), o2);
  }
  _addRelatedFeatures(e2) {
    const t = /* @__PURE__ */ new Map(), r2 = e2.features, i = this._serviceDefinition.relatedFeatures.joinField;
    for (const o2 of r2) {
      const e3 = o2.attributes[i];
      t.set(e3, o2);
    }
    this._relatedFeatures = t;
  }
};
g = e([c$1("esri.layers.graphics.sources.connections.GeoEventConnection")], g);
const y = g;
let a = class extends n {
  constructor(e2) {
    super({}), this.connectionStatus = "connected", this.errorString = null;
    const { geometryType: r2, spatialReference: t, sourceSpatialReference: s2 } = e2;
    this._featureZScaler = o$2(r2, s2, t);
  }
  normalizeCtorArgs() {
    return {};
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
          for (const r2 of e2.features)
            null != this._featureZScaler && this._featureZScaler(r2.geometry), this.onFeature(r2);
      }
    this.onMessage(e2);
  }
};
e([y$1()], a.prototype, "connectionStatus", void 0), e([y$1()], a.prototype, "errorString", void 0), a = e([c$1("esri.layers.support.ClientSideConnection")], a);
function o(e2, t) {
  if (null == e2 && null == t)
    return null;
  const n2 = {};
  return null != t && (n2.geometry = t), null != e2 && (n2.where = e2), n2;
}
function r(r2, i, s2, c2, l, u, a$1, m, p) {
  const f = { source: r2, sourceSpatialReference: i, spatialReference: s2, geometryType: c2, filter: o(l, u), maxReconnectionAttempts: a$1, maxReconnectionInterval: m, customParameters: p };
  if (!r2)
    return new a(f);
  return r2.path.startsWith("wss://") || r2.path.startsWith("ws://") ? new d$1(f) : new y(f);
}
export {
  r as createConnection
};
