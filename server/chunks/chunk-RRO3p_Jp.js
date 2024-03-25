import { aV as e$1, aX as y, r5 as e$2, a_ as c$1, r6 as O, r7 as r$1, r8 as n$1, r9 as s$3, ra as c$2, db as f, ds as o, df as t$1, rb as l, bT as I, bC as L$1, g7 as m$1, aO as s$4, fd as c$3, rc as F, rd as x, aQ as U$1, lL as A, re as et, n_ as o$1, cT as v, rf as t$2, at as s$5, rg as K, rh as T, ri as t$3, dH as _, dg as Et, rj as n } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const c = "esri-identity-modal", p$1 = { base: c, info: `${c}__info`, notice: `${c}__notice` }, d = "ArcGIS Online";
let u = class extends O {
  constructor(t2, e2) {
    super(t2, e2), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = false, this.open = false, this.signingIn = false, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return r$1({ button: () => import("@esri/calcite-components/dist/components/calcite-button.js"), input: () => import("@esri/calcite-components/dist/components/calcite-input.js"), label: () => import("@esri/calcite-components/dist/components/calcite-label.js"), modal: () => import("@esri/calcite-components/dist/components/calcite-modal.js"), notice: () => import("@esri/calcite-components/dist/components/calcite-notice.js") });
  }
  get title() {
    return this.commonMessages?.auth.signIn;
  }
  render() {
    const { open: t2, title: e2, messages: s2, signingIn: o2, oAuthPrompt: i2, server: n2, resource: c2, error: u2 } = this, { info: m2, oAuthInfo: h, lblItem: g, invalidUser: b2, noAuthService: v2, lblUser: y2, lblPwd: f2, lblCancel: _2, lblSigning: I2, lblOk: j2 } = s2;
    return n$1("div", { class: this.classes(p$1.base, c$2()) }, n$1("form", { bind: this, onsubmit: this._submit }, n$1("calcite-modal", { bind: this, open: t2, outsideCloseDisabled: true, scale: "s", widthScale: "s", onCalciteModalClose: this._cancel, onCalciteModalOpen: this._focusUsernameInput }, n$1("div", { slot: "header" }, e2), n$1("div", { slot: "content" }, n$1("div", { class: p$1.info }, s$3(i2 ? h : m2, { server: n2 && /\.arcgis\.com/i.test(n2) ? d : n2, resource: `(${c2 || g})` })), u2 ? n$1("calcite-notice", { class: p$1.notice, icon: "exclamation-mark-triangle", kind: "danger", open: true }, n$1("div", { slot: "message" }, u2.details?.httpStatus ? b2 : v2)) : null, i2 ? null : [n$1("calcite-label", null, y2, n$1("calcite-input", { afterCreate: (t3) => this._usernameInputNode = t3, autocomplete: "off", bind: this, name: "username", required: true, spellcheck: false, type: "text", value: "" })), n$1("calcite-label", null, f2, n$1("calcite-input", { afterCreate: (t3) => this._passwordInputNode = t3, bind: this, name: "password", required: true, type: "password", value: "" }))]), n$1("calcite-button", { appearance: "outline", bind: this, onclick: this._cancel, slot: "secondary", type: "button", width: "full" }, _2), n$1("calcite-button", { loading: !!o2, slot: "primary", type: "submit", width: "full" }, o2 ? I2 : j2))));
  }
  _focusUsernameInput() {
    requestAnimationFrame(() => {
      this._usernameInputNode?.setFocus();
    });
  }
  _cancel() {
    this._set("signingIn", false), this.open = false, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(t2) {
    t2.preventDefault(), this._set("signingIn", true);
    const e2 = this.oAuthPrompt ? {} : { username: this._usernameInputNode?.value, password: this._passwordInputNode?.value };
    this.emit("submit", e2);
  }
};
e$1([y({ readOnly: true })], u.prototype, "container", void 0), e$1([y(), e$2("esri/t9n/common")], u.prototype, "commonMessages", void 0), e$1([y()], u.prototype, "error", void 0), e$1([y(), e$2("esri/identity/t9n/identity")], u.prototype, "messages", void 0), e$1([y()], u.prototype, "oAuthPrompt", void 0), e$1([y()], u.prototype, "open", void 0), e$1([y()], u.prototype, "signingIn", void 0), e$1([y()], u.prototype, "server", void 0), e$1([y({ readOnly: true })], u.prototype, "title", null), e$1([y()], u.prototype, "resource", void 0), u = e$1([c$1("esri.identity.IdentityModal")], u);
const m = u;
const t = "esriJSAPIOAuth";
class e {
  constructor(t2, e2) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = t2, this.storage = e2, this._init();
  }
  isValid() {
    let t2 = false;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (null == this.expires && this.refreshToken)
        t2 = true;
      else if (this.expires) {
        const e2 = Date.now();
        if (this.expires > e2) {
          (this.expires - e2) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t2 = true);
        }
      }
    }
    return t2;
  }
  save() {
    if (!this.storage)
      return false;
    const e2 = this._load(), s2 = this.oAuthInfo;
    if (s2 && s2.authNamespace && s2.portalUrl) {
      let r2 = e2[s2.authNamespace];
      r2 || (r2 = e2[s2.authNamespace] = {}), this.appId || (this.appId = s2.appId), r2[s2.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(t, JSON.stringify(e2));
      } catch (i2) {
        return console.warn(i2), false;
      }
      return true;
    }
    return false;
  }
  destroy() {
    const e2 = this._load(), s2 = this.oAuthInfo;
    if (s2?.appId && s2?.portalUrl && (null == this.expires || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t2 = s2.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", e3 = new FormData();
      if (e3.append("f", "json"), e3.append("auth_token", this.refreshToken || this.token), e3.append("client_id", s2.appId), e3.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), "function" == typeof navigator.sendBeacon)
        navigator.sendBeacon(t2, e3);
      else {
        const s3 = new XMLHttpRequest();
        s3.open("POST", t2), s3.send(e3);
      }
    }
    if (s2 && s2.authNamespace && s2.portalUrl && this.storage) {
      const r2 = e2[s2.authNamespace];
      if (r2) {
        delete r2[s2.portalUrl];
        try {
          this.storage.setItem(t, JSON.stringify(e2));
        } catch (i2) {
          console.log(i2);
        }
      }
    }
    s2 && (s2._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t2 = this._load(), e2 = this.oAuthInfo;
    if (e2 && e2.authNamespace && e2.portalUrl) {
      let s2 = t2[e2.authNamespace];
      s2 && (s2 = s2[e2.portalUrl], s2 && (this.appId = s2.appId, this.codeVerifier = s2.codeVerifier, this.expires = s2.expires, this.refreshToken = s2.refreshToken, this.ssl = s2.ssl, this.stateUID = s2.stateUID, this.token = s2.token, this.userId = s2.userId));
    }
  }
  _load() {
    let e2 = {};
    if (this.storage) {
      const i2 = this.storage.getItem(t);
      if (i2)
        try {
          e2 = JSON.parse(i2);
        } catch (s2) {
          console.warn(s2);
        }
    }
    return e2;
  }
}
e.prototype.declaredClass = "esri.identity.OAuthCredential";
var p;
let s$2 = p = class extends f {
  constructor(o2) {
    super(o2), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p.fromJSON(this.toJSON());
  }
};
e$1([y({ json: { write: true } })], s$2.prototype, "appId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "authNamespace", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "expiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "flowType", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceLogin", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceUserId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "locale", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "minTimeUntilExpiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popup", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupCallbackUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupWindowFeatures", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "portalUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "preserveUrlHash", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "userId", void 0), s$2 = p = e$1([c$1("esri.identity.OAuthInfo")], s$2);
const i$1 = s$2;
let i = class extends f {
  constructor(o2) {
    super(o2), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
e$1([y({ json: { write: true } })], i.prototype, "adminTokenServiceUrl", void 0), e$1([y({ json: { write: true } })], i.prototype, "currentVersion", void 0), e$1([y({ json: { write: true } })], i.prototype, "hasPortal", void 0), e$1([y({ json: { write: true } })], i.prototype, "hasServer", void 0), e$1([y({ json: { write: true } })], i.prototype, "owningSystemUrl", void 0), e$1([y({ json: { write: true } })], i.prototype, "owningTenant", void 0), e$1([y({ json: { write: true } })], i.prototype, "server", void 0), e$1([y({ json: { write: true } })], i.prototype, "shortLivedTokenValidity", void 0), e$1([y({ json: { write: true } })], i.prototype, "tokenServiceUrl", void 0), e$1([y({ json: { write: true } })], i.prototype, "webTierAuth", void 0), i = e$1([c$1("esri.identity.ServerInfo")], i);
const s$1 = i;
const P = {}, R = (e2) => {
  const t2 = new x(e2.owningSystemUrl).host, r2 = new x(e2.server).host, s2 = /.+\.arcgis\.com$/i;
  return s2.test(t2) && s2.test(r2);
}, C = (e2, t2) => !!(R(e2) && t2 && t2.some((t3) => t3.test(e2.server)));
let b = null, D = null;
try {
  b = window.localStorage, D = window.sessionStorage;
} catch {
}
class q extends o {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = "null" !== window.origin ? window.origin : window.location.origin, this._appUrlObj = I(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e2) => {
      this._pageShowHandler(e2);
    });
  }
  registerServers(e2) {
    const t2 = this.serverInfos;
    t2 ? (e2 = e2.filter((e3) => !this.findServerInfo(e3.server)), this.serverInfos = t2.concat(e2)) : this.serverInfos = e2, e2.forEach((e3) => {
      e3.owningSystemUrl && this._portals.push(e3.owningSystemUrl), e3.hasPortal && this._portals.push(e3.server);
    });
  }
  registerOAuthInfos(e2) {
    const t2 = this.oAuthInfos;
    if (t2) {
      for (const r2 of e2) {
        const e3 = this.findOAuthInfo(r2.portalUrl);
        e3 && t2.splice(t2.indexOf(e3), 1);
      }
      this.oAuthInfos = t2.concat(e2);
    } else
      this.oAuthInfos = e2;
  }
  registerToken(e2) {
    e2 = { ...e2 };
    const t2 = this._sanitizeUrl(e2.server), r2 = this._isServerRsrc(t2);
    let s2, i2 = this.findServerInfo(t2), n2 = true;
    i2 || (i2 = new s$1(), i2.server = this._getServerInstanceRoot(t2), r2 ? i2.hasServer = true : (i2.tokenServiceUrl = this._getTokenSvcUrl(t2), i2.hasPortal = true), this.registerServers([i2])), s2 = this._findCredential(t2), s2 ? (delete e2.server, Object.assign(s2, e2), n2 = false) : (s2 = new j({ userId: e2.userId, server: i2.server, token: e2.token, expires: e2.expires, ssl: e2.ssl, scope: r2 ? "server" : "portal" }), s2.resources = [t2], this.credentials.push(s2)), s2.emitTokenChange(false), n2 || s2.refreshServerTokens();
  }
  toJSON() {
    return l({ serverInfos: this.serverInfos.map((e2) => e2.toJSON()), oAuthInfos: this.oAuthInfos.map((e2) => e2.toJSON()), credentials: this.credentials.map((e2) => e2.toJSON()) });
  }
  initialize(e2) {
    if (!e2)
      return;
    "string" == typeof e2 && (e2 = JSON.parse(e2));
    const t2 = e2.serverInfos, r2 = e2.oAuthInfos, s2 = e2.credentials;
    if (t2) {
      const e3 = [];
      t2.forEach((t3) => {
        t3.server && t3.tokenServiceUrl && e3.push(t3.declaredClass ? t3 : new s$1(t3));
      }), e3.length && this.registerServers(e3);
    }
    if (r2) {
      const e3 = [];
      r2.forEach((t3) => {
        t3.appId && e3.push(t3.declaredClass ? t3 : new i$1(t3));
      }), e3.length && this.registerOAuthInfos(e3);
    }
    s2 && s2.forEach((e3) => {
      e3.server && e3.token && e3.expires && e3.expires > Date.now() && ((e3 = e3.declaredClass ? e3 : new j(e3)).emitTokenChange(), this.credentials.push(e3));
    });
  }
  findServerInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const r2 of this.serverInfos)
      if (this._hasSameServerInstance(r2.server, e2)) {
        t2 = r2;
        break;
      }
    return t2;
  }
  findOAuthInfo(e2) {
    let t2;
    e2 = this._sanitizeUrl(e2);
    for (const r2 of this.oAuthInfos)
      if (this._hasSameServerInstance(r2.portalUrl, e2)) {
        t2 = r2;
        break;
      }
    return t2;
  }
  findCredential(e2, t2) {
    if (!e2)
      return;
    let r2;
    e2 = this._sanitizeUrl(e2);
    const s2 = this._isServerRsrc(e2) ? "server" : "portal";
    if (t2) {
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && t2 === i2.userId && i2.scope === s2) {
          r2 = i2;
          break;
        }
    } else
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && -1 !== this._getIdenticalSvcIdx(e2, i2) && i2.scope === s2) {
          r2 = i2;
          break;
        }
    return r2;
  }
  getCredential(e2, t2) {
    let r2, s2, n2 = true;
    t2 && (r2 = !!t2.token, s2 = t2.error, n2 = false !== t2.prompt), t2 = { ...t2 }, e2 = this._sanitizeUrl(e2);
    const o2 = new AbortController(), a = L$1();
    if (t2.signal && m$1(t2.signal, () => {
      o2.abort();
    }), m$1(o2, () => {
      a.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    }), c$3(o2))
      return a.promise;
    t2.signal = o2.signal;
    const h = this._isAdminResource(e2), u2 = r2 ? this.findCredential(e2) : null;
    let _2;
    if (u2 && s2 && s2.details && 498 === s2.details.httpStatus)
      u2.destroy();
    else if (u2)
      return _2 = new s$4("identity-manager:not-authorized", "You are currently signed in as: '" + u2.userId + "'. You do not have access to this resource: " + e2, { error: s2 }), a.reject(_2), a.promise;
    const g = this._findCredential(e2, t2);
    if (g)
      return a.resolve(g), a.promise;
    let f2 = this.findServerInfo(e2);
    if (f2)
      !f2.hasPortal && f2.server && f2.owningSystemUrl && this._hasSameServerInstance(f2.server, f2.owningSystemUrl) && (f2.hasPortal = true), !f2.hasServer && this._isServerRsrc(e2) && (f2._restInfoPms = this._getTokenSvcUrl(e2), f2.hasServer = true);
    else {
      const t3 = this._getTokenSvcUrl(e2);
      if (!t3)
        return _2 = new s$4("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), a.reject(_2), a.promise;
      f2 = new s$1(), f2.server = this._getServerInstanceRoot(e2), "string" == typeof t3 ? (f2.tokenServiceUrl = t3, f2.hasPortal = true) : (f2._restInfoPms = t3, f2.hasServer = true), this.registerServers([f2]);
    }
    return f2.hasPortal && void 0 === f2._selfReq && (n2 || F(f2.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e3) => e3.tokenServiceUrl === f2.tokenServiceUrl)) && (f2._selfReq = { owningTenant: t2?.owningTenant, selfDfd: this._getPortalSelf(f2.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e2) }), this._enqueue(e2, f2, t2, a, h);
  }
  getResourceName(e2) {
    return this._isRESTService(e2) ? e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e2) && e2.replace(this._gwUser, "$1") || this._gwItem.test(e2) && e2.replace(this._gwItem, "$1") || this._gwGroup.test(e2) && e2.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e2, t2, r2) {
    const n2 = this._rePortalTokenSvc.test(e2.tokenServiceUrl), o2 = new x(this._appOrigin), a = e2.shortLivedTokenValidity;
    let h, l2, c2, d2, u2, g, f2, m2;
    t2 && (m2 = this.tokenValidity || a || this._defaultTokenValidity, m2 > a && a > 0 && (m2 = a)), r2 && (h = r2.isAdmin, l2 = r2.serverUrl, c2 = r2.token, g = r2.signal, f2 = r2.ssl, e2.customParameters = r2.customParameters), h ? d2 = e2.adminTokenServiceUrl : (d2 = e2.tokenServiceUrl, u2 = new x(d2.toLowerCase()), e2.webTierAuth && r2?.serverUrl && !f2 && "http" === o2.scheme && (F(o2.uri, d2, true) || "https" === u2.scheme && o2.host === u2.host && "7080" === o2.port && "7443" === u2.port) && (d2 = d2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = { query: { request: "getToken", username: t2?.username, password: t2?.password, serverUrl: l2, token: c2, expiration: m2, referer: h || n2 ? this._appOrigin : null, client: h ? "referer" : null, f: "json", ...e2.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e2, r2), signal: g, ...r2?.ioArgs };
    n2 || (v2.withCredentials = false);
    return U$1(d2, v2).then((r3) => {
      const s2 = r3.data;
      if (!s2?.token)
        return new s$4("identity-manager:authentication-failed", "Unable to generate token");
      const n3 = e2.server;
      return P[n3] || (P[n3] = {}), t2 && (P[n3][t2.username] = t2.password), s2.validity = m2, s2;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e2) {
    return this.checkAppAccess(e2, "").then((e3) => e3.credential);
  }
  checkAppAccess(e2, t2, r2) {
    let n2 = false;
    return this.getCredential(e2, { prompt: false }).then((o2) => {
      let a;
      const h = { f: "json" };
      if ("portal" === o2.scope)
        if (t2 && (this._doPortalSignIn(e2) || r2?.force))
          a = o2.server + "/sharing/rest/oauth2/validateAppAccess", h.client_id = t2;
        else {
          if (!o2.token)
            return { credential: o2 };
          a = o2.server + "/sharing/rest";
        }
      else {
        if (!o2.token)
          return { credential: o2 };
        a = o2.server + "/rest/services";
      }
      return o2.token && (h.token = o2.token), U$1(a, { query: h, authMode: "anonymous" }).then((e3) => {
        if (false === e3.data.valid)
          throw new s$4("identity-manager:not-authorized", `You are currently signed in as: '${o2.userId}'.`, e3.data);
        return n2 = !!e3.data.viewOnlyUserTypeApp, { credential: o2 };
      }).catch((e3) => {
        if ("identity-manager:not-authorized" === e3.name)
          throw e3;
        const t3 = e3.details?.httpStatus;
        if (498 === t3)
          throw o2.destroy(), new s$4("identity-manager:not-authenticated", "User is not signed in.");
        if (400 === t3)
          throw new s$4("identity-manager:invalid-request");
        return { credential: o2 };
      });
    }).then((e3) => ({ credential: e3.credential, viewOnly: n2 }));
  }
  setOAuthResponseHash(e2) {
    e2 && ("#" === e2.charAt(0) && (e2 = e2.substring(1)), this._processOAuthPopupParams(A(e2)));
  }
  setOAuthRedirectionHandler(e2) {
    this._oAuthRedirectFunc = e2;
  }
  setProtocolErrorHandler(e2) {
    this._protocolFunc = e2;
  }
  signIn(e2, t2, r2 = {}) {
    const s2 = L$1(), n2 = () => {
      h?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = h = d2 = null;
    }, o2 = () => {
      n2(), this._oAuthDfd = null, s2.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    };
    r2.signal && m$1(r2.signal, () => {
      o2();
    });
    const a = new m({ open: true, resource: this.getResourceName(e2), server: t2.server });
    this.dialog = a, this.emit("dialog-create");
    let h = a.on("cancel", o2), d2 = a.on("submit", (e3) => {
      this.generateToken(t2, e3, { isAdmin: r2.isAdmin, signal: r2.signal }).then((i2) => {
        n2();
        const o3 = new j({ userId: e3.username, server: t2.server, token: i2.token, expires: null != i2.expires ? Number(i2.expires) : null, ssl: !!i2.ssl, isAdmin: r2.isAdmin, validity: i2.validity });
        s2.resolve(o3);
      }).catch((e4) => {
        a.error = e4, a.signingIn = false;
      });
    });
    return s2.promise;
  }
  oAuthSignIn(e2, t2, r2, s2) {
    this._oAuthDfd = L$1();
    const n2 = this._oAuthDfd;
    let o2;
    s2?.signal && m$1(s2.signal, () => {
      const e3 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e3 && !e3.closed ? e3.close() : this.dialog && u2();
    }), n2.resUrl_ = e2, n2.sinfo_ = t2, n2.oinfo_ = r2;
    const a = r2._oAuthCred;
    if (a.storage && ("authorization-code" === r2.flowType || "auto" === r2.flowType && t2.currentVersion >= 8.4)) {
      let e3 = crypto.getRandomValues(new Uint8Array(32));
      o2 = et(e3), a.codeVerifier = o2, e3 = crypto.getRandomValues(new Uint8Array(32)), a.stateUID = et(e3), a.save() || (a.codeVerifier = o2 = null);
    } else
      a.codeVerifier = null;
    let h, d2;
    this._getCodeChallenge(o2).then((i2) => {
      const n3 = !s2 || false !== s2.oAuthPopupConfirmation;
      if (!r2.popup || !n3)
        return void this._doOAuthSignIn(e2, t2, r2, i2);
      const o3 = new m({ oAuthPrompt: true, server: t2.server, open: true });
      this.dialog = o3, this.emit("dialog-create"), h = o3.on("cancel", u2), d2 = o3.on("submit", () => {
        p2(), this._doOAuthSignIn(e2, t2, r2, i2);
      });
    });
    const u2 = () => {
      p2(), this._oAuthDfd = null, n2.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    }, p2 = () => {
      h?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = null;
    };
    return n2.promise;
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e2) => {
        e2.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e2 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = o$1(window, "message", (t2) => {
      if ((t2.origin === this._appOrigin || t2.origin.endsWith(".arcgis.com")) && "arcgis:auth:requestCredential" === t2.data?.type) {
        const r2 = t2.source;
        this.getCredential(e2).then((e3) => {
          r2.postMessage({ type: "arcgis:auth:credential", credential: { expires: e3.expires, server: e3.server, ssl: e3.ssl, token: e3.token, userId: e3.userId } }, t2.origin);
        }).catch((e3) => {
          r2.postMessage({ type: "arcgis:auth:error", error: { name: e3.name, message: e3.message } }, t2.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e2 = window.location.hash;
    if (e2) {
      "#" === e2.charAt(0) && (e2 = e2.substring(1));
      const t3 = A(e2);
      let r2 = false;
      if (t3.access_token && t3.expires_in && t3.state && t3.hasOwnProperty("username"))
        try {
          t3.state = JSON.parse(t3.state), t3.state.portalUrl && (this._oAuthLocationParams = t3, r2 = true);
        } catch {
        }
      else if (t3.error && t3.error_description && (console.log("IdentityManager OAuth Error: ", t3.error, " - ", t3.error_description), "access_denied" === t3.error && (r2 = true, t3.state)))
        try {
          t3.state = JSON.parse(t3.state);
        } catch {
        }
      r2 && (window.location.hash = t3.state?.hash || "");
    }
    let t2 = window.location.search;
    if (t2) {
      "?" === t2.charAt(0) && (t2 = t2.substring(1));
      const e3 = A(t2);
      let r2 = false;
      if (e3.code && e3.state)
        try {
          e3.state = JSON.parse(e3.state), e3.state.portalUrl && e3.state.uid && (this._oAuthLocationParams = e3, r2 = true);
        } catch {
        }
      else if (e3.error && e3.error_description && (console.log("IdentityManager OAuth Error: ", e3.error, " - ", e3.error_description), "access_denied" === e3.error && (r2 = true, e3.state)))
        try {
          e3.state = JSON.parse(e3.state);
        } catch {
        }
      if (r2) {
        const t3 = { ...e3 };
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((e4) => {
          delete t3[e4];
        });
        const r3 = v(t3), s2 = window.location.pathname + (r3 ? `?${r3}` : "") + (e3.state?.hash || "");
        window.history.replaceState(window.history.state, "", s2);
      }
    }
  }
  _getOAuthToken(e2, t2, r2, i2, n2) {
    return e2 = e2.replace(/^http:/i, "https:"), U$1(`${e2}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i2 && n2 ? { grant_type: "authorization_code", code: t2, redirect_uri: i2, client_id: r2, code_verifier: n2 } : { grant_type: "refresh_token", refresh_token: t2, client_id: r2 } }).then((e3) => e3.data);
  }
  _getCodeChallenge(e2) {
    if (e2 && globalThis.isSecureContext) {
      const t2 = new TextEncoder().encode(e2);
      return crypto.subtle.digest("SHA-256", t2).then((e3) => et(new Uint8Array(e3)));
    }
    return Promise.resolve(null);
  }
  _pageShowHandler(e2) {
    if (e2.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e3 = new s$4("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e3);
    }
  }
  _findCredential(e2, t2) {
    let r2, s2, i2, n2, o2 = -1;
    const a = t2?.token, h = t2?.resource, l2 = this._isServerRsrc(e2) ? "server" : "portal", c2 = this.credentials.filter((t3) => this._hasSameServerInstance(t3.server, e2) && t3.scope === l2);
    if (e2 = h || e2, c2.length)
      if (1 === c2.length) {
        if (r2 = c2[0], i2 = this.findServerInfo(r2.server), s2 = i2?.owningSystemUrl, n2 = s2 ? this.findCredential(s2, r2.userId) : void 0, o2 = this._getIdenticalSvcIdx(e2, r2), !a)
          return -1 === o2 && r2.resources.push(e2), this._addResource(e2, n2), r2;
        -1 !== o2 && (r2.resources.splice(o2, 1), this._removeResource(e2, n2));
      } else {
        let t3, r3;
        if (c2.some((a2) => (r3 = this._getIdenticalSvcIdx(e2, a2), -1 !== r3 && (t3 = a2, i2 = this.findServerInfo(t3.server), s2 = i2?.owningSystemUrl, n2 = s2 ? this.findCredential(s2, t3.userId) : void 0, o2 = r3, true))), a)
          t3 && (t3.resources.splice(o2, 1), this._removeResource(e2, n2));
        else if (t3)
          return this._addResource(e2, n2), t3;
      }
  }
  _findOAuthInfo(e2) {
    let t2 = this.findOAuthInfo(e2);
    if (!t2) {
      for (const r2 of this.oAuthInfos)
        if (this._isIdProvider(r2.portalUrl, e2)) {
          t2 = r2;
          break;
        }
    }
    return t2;
  }
  _addResource(e2, t2) {
    t2 && -1 === this._getIdenticalSvcIdx(e2, t2) && t2.resources.push(e2);
  }
  _removeResource(e2, t2) {
    let r2 = -1;
    t2 && (r2 = this._getIdenticalSvcIdx(e2, t2), r2 > -1 && t2.resources.splice(r2, 1));
  }
  _useProxy(e2, t2) {
    return t2?.isAdmin && !F(e2.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e2.tokenServiceUrl) && "10.1" === String(e2.currentVersion) && !F(e2.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e2) {
    const t2 = new x(e2);
    return t2.scheme + "://" + t2.host + (null != t2.port ? ":" + t2.port : "");
  }
  _getServerInstanceRoot(e2) {
    const t2 = e2.toLowerCase();
    let r2 = t2.indexOf(this._agsRest);
    return -1 === r2 && this._isAdminResource(e2) && (r2 = this._agsAdmin.test(e2) ? e2.replace(this._agsAdmin, "$1").length : e2.search(this._adminSvcs)), -1 !== r2 || t$2(t2) || (r2 = t2.indexOf("/sharing")), -1 === r2 && "/" === t2.substr(-1) && (r2 = t2.length - 1), r2 > -1 ? e2.substring(0, r2) : e2;
  }
  _hasSameServerInstance(e2, t2) {
    return "/" === e2.substr(-1) && (e2 = e2.slice(0, -1)), e2 = e2.toLowerCase(), t2 = this._getServerInstanceRoot(t2).toLowerCase(), e2 = this._normalizeAGOLorgDomain(e2), t2 = this._normalizeAGOLorgDomain(t2), (e2 = e2.substr(e2.indexOf(":"))) === (t2 = t2.substr(t2.indexOf(":")));
  }
  _normalizeAGOLorgDomain(e2) {
    const t2 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, r2 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, s2 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return t2.test(e2) ? e2 = e2.replace(t2, "https://www.arcgis.com") : r2.test(e2) ? e2 = e2.replace(r2, "https://devext.arcgis.com") : s2.test(e2) && (e2 = e2.replace(s2, "https://qaext.arcgis.com")), e2;
  }
  _sanitizeUrl(e2) {
    const r2 = (s$5.request.proxyUrl || "").toLowerCase(), s2 = r2 ? e2.toLowerCase().indexOf(r2 + "?") : -1;
    return -1 !== s2 && (e2 = e2.substring(s2 + r2.length + 1)), e2 = K(e2), I(e2).path;
  }
  _isRESTService(e2) {
    return e2.includes(this._agsRest);
  }
  _isAdminResource(e2) {
    return this._agsAdmin.test(e2) || this._adminSvcs.test(e2);
  }
  _isServerRsrc(e2) {
    return this._isRESTService(e2) || this._isAdminResource(e2);
  }
  _isIdenticalService(e2, t2) {
    let r2 = false;
    if (this._isRESTService(e2) && this._isRESTService(t2)) {
      const s2 = this._getSuffix(e2).toLowerCase(), i2 = this._getSuffix(t2).toLowerCase();
      if (r2 = s2 === i2, !r2) {
        const e3 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r2 = s2.replaceAll(e3, "$1") === i2.replaceAll(e3, "$1");
      }
    } else
      this._isAdminResource(e2) && this._isAdminResource(t2) ? r2 = true : this._isServerRsrc(e2) || this._isServerRsrc(t2) || !this._isPortalDomain(e2) || (r2 = true);
    return r2;
  }
  _isPortalDomain(e2) {
    const r2 = new x(e2.toLowerCase()), s2 = this._portalConfig;
    let i2 = this._gwDomains.some((e3) => e3.regex.test(r2.uri));
    return !i2 && s2 && (i2 = this._hasSameServerInstance(this._getServerInstanceRoot(s2.restBaseUrl), r2.uri)), i2 || s$5.portalUrl && (i2 = F(r2, s$5.portalUrl, true)), i2 || (i2 = this._portals.some((e3) => this._hasSameServerInstance(e3, r2.uri))), i2 = i2 || this._agsPortal.test(r2.path), i2;
  }
  _isIdProvider(e2, t2) {
    let r2 = -1, s2 = -1;
    this._gwDomains.forEach((i3, n2) => {
      -1 === r2 && i3.regex.test(e2) && (r2 = n2), -1 === s2 && i3.regex.test(t2) && (s2 = n2);
    });
    let i2 = false;
    if (r2 > -1 && s2 > -1 && (0 === r2 || 4 === r2 ? 0 !== s2 && 4 !== s2 || (i2 = true) : 1 === r2 ? 1 !== s2 && 2 !== s2 || (i2 = true) : 2 === r2 ? 2 === s2 && (i2 = true) : 3 === r2 && 3 === s2 && (i2 = true)), !i2) {
      const r3 = this.findServerInfo(t2), s3 = r3?.owningSystemUrl;
      s3 && R(r3) && this._isPortalDomain(s3) && this._isIdProvider(e2, s3) && (i2 = true);
    }
    return i2;
  }
  _getIdenticalSvcIdx(e2, t2) {
    let r2 = -1;
    for (let s2 = 0; s2 < t2.resources.length; s2++) {
      const i2 = t2.resources[s2];
      if (this._isIdenticalService(e2, i2)) {
        r2 = s2;
        break;
      }
    }
    return r2;
  }
  _getSuffix(e2) {
    return e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e2) {
    let t2, r2, i2;
    if (this._isRESTService(e2) || this._isAdminResource(e2)) {
      const i3 = this._getServerInstanceRoot(e2);
      return t2 = i3 + "/admin/generateToken", r2 = U$1(e2 = i3 + "/rest/info", { query: { f: "json" } }).then((e3) => e3.data), { adminUrl: t2, promise: r2 };
    }
    if (this._isPortalDomain(e2)) {
      let t3 = "";
      if (this._gwDomains.some((r3) => (r3.regex.test(e2) && (t3 = r3.tokenServiceUrl), !!t3)), t3 || this._portals.some((r3) => (this._hasSameServerInstance(r3, e2) && (t3 = r3 + this._gwTokenUrl), !!t3)), t3 || (i2 = e2.toLowerCase().indexOf("/sharing"), -1 !== i2 && (t3 = e2.substring(0, i2) + this._gwTokenUrl)), t3 || (t3 = this._getOrigin(e2) + this._gwTokenUrl), t3) {
        const r3 = new x(e2).port;
        /^http:\/\//i.test(e2) && "7080" === r3 && (t3 = t3.replace(/:7080/i, ":7443")), t3 = t3.replace(/http:/i, "https:");
      }
      return t3;
    }
    if (e2.toLowerCase().includes("premium.arcgisonline.com"))
      return "https://premium.arcgisonline.com/server/tokens";
  }
  _processOAuthResponseParams(e2, t2, r2) {
    const s2 = t2._oAuthCred;
    if (e2.code) {
      const i3 = s2.codeVerifier;
      return s2.codeVerifier = null, s2.stateUID = null, s2.save(), this._getOAuthToken(r2.server, e2.code, t2.appId, this._getRedirectURI(t2, true), i3).then((i4) => {
        const n2 = new j({ userId: i4.username, server: r2.server, token: i4.access_token, expires: Date.now() + 1e3 * i4.expires_in, ssl: i4.ssl, oAuthState: e2.state, _oAuthCred: s2 });
        return t2.userId = n2.userId, s2.storage = i4.persist ? b : D, s2.refreshToken = i4.refresh_token, s2.token = null, s2.expires = i4.refresh_token_expires_in ? Date.now() + 1e3 * i4.refresh_token_expires_in : null, s2.userId = n2.userId, s2.ssl = n2.ssl, s2.save(), n2;
      });
    }
    const i2 = new j({ userId: e2.username, server: r2.server, token: e2.access_token, expires: Date.now() + 1e3 * Number(e2.expires_in), ssl: "true" === e2.ssl, oAuthState: e2.state, _oAuthCred: s2 });
    return t2.userId = i2.userId, s2.storage = e2.persist ? b : D, s2.refreshToken = null, s2.token = i2.token, s2.expires = i2.expires, s2.userId = i2.userId, s2.ssl = i2.ssl, s2.save(), Promise.resolve(i2);
  }
  _processOAuthPopupParams(e2) {
    const t2 = this._oAuthDfd;
    if (this._oAuthDfd = null, t2)
      if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e2.error) {
        const r2 = "access_denied" === e2.error, s2 = new s$4(r2 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", r2 ? "ABORTED" : "OAuth: " + e2.error + " - " + e2.error_description);
        t2.reject(s2);
      } else
        this._processOAuthResponseParams(e2, t2.oinfo_, t2.sinfo_).then((e3) => {
          t2.resolve(e3);
        }).catch((e3) => {
          t2.reject(e3);
        });
  }
  _setOAuthResponseQueryString(e2) {
    e2 && ("?" === e2.charAt(0) && (e2 = e2.substring(1)), this._processOAuthPopupParams(A(e2)));
  }
  _exchangeToken(e2, t2, r2) {
    return U$1(`${e2}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t2, token: r2 } }).then((e3) => e3.data.token);
  }
  _getPlatformSelf(e2, t2) {
    return e2 = e2.replace(/^http:/i, "https:"), U$1(`${e2}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t2, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: true }).then((e3) => e3.data);
  }
  _getPortalSelf(e2, t2) {
    let r2;
    if (this._gwDomains.some((t3) => (t3.regex.test(e2) && (r2 = t3.customBaseUrl), !!r2)), r2)
      return Promise.resolve({ allSSL: true, currentVersion: "8.4", customBaseUrl: r2, portalMode: "multitenant", supportsOAuth: true });
    this._appOrigin.startsWith("https:") ? e2 = e2.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t2) && (e2 = e2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return U$1(e2, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e3) => e3.data);
  }
  _doPortalSignIn(e2) {
    const t2 = this._portalConfig, r2 = window.location.href, s2 = this.findServerInfo(e2);
    return !(!t2 && !this._isPortalDomain(r2) || !(s2 ? s2.hasPortal || s2.owningSystemUrl && this._isPortalDomain(s2.owningSystemUrl) : this._isPortalDomain(e2)) || !(this._isIdProvider(r2, e2) || t2 && (this._hasSameServerInstance(this._getServerInstanceRoot(t2.restBaseUrl), e2) || this._isIdProvider(t2.restBaseUrl, e2)) || F(r2, e2, true)));
  }
  _checkProtocol(e2, t2, r2, s2) {
    let n2 = true;
    const o2 = s2 ? t2.adminTokenServiceUrl : t2.tokenServiceUrl;
    if (o2.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && T(o2) && (n2 = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e2, serverInfo: t2 }), !n2)) {
      r2(new s$4("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return n2;
  }
  _enqueue(e2, t2, r2, s2, i2, n2) {
    return s2 || (s2 = L$1()), s2.resUrl_ = e2, s2.sinfo_ = t2, s2.options_ = r2, s2.admin_ = i2, s2.refresh_ = n2, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e2), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s2)) : this._xoReqs.push(s2) : this._doSignIn(s2), s2.promise;
  }
  _doSignIn(e$12) {
    this._busy = e$12, this._rejectOnPersistedPageShow = false;
    const t2 = (t3) => {
      const r3 = e$12.options_?.resource, s3 = e$12.resUrl_, i2 = e$12.refresh_;
      let n3 = false;
      this.credentials.includes(t3) || (i2 && this.credentials.includes(i2) ? (i2.userId = t3.userId, i2.token = t3.token, i2.expires = t3.expires, i2.validity = t3.validity, i2.ssl = t3.ssl, i2.creationTime = t3.creationTime, n3 = true, t3 = i2) : this.credentials.push(t3)), t3.resources || (t3.resources = []), t3.resources.includes(r3 || s3) || t3.resources.push(r3 || s3), t3.scope = this._isServerRsrc(s3) ? "server" : "portal", t3.emitTokenChange();
      const o2 = this._soReqs, a2 = {};
      this._soReqs = [], o2.forEach((e2) => {
        if (!this._isIdenticalService(s3, e2.resUrl_)) {
          const r4 = this._getSuffix(e2.resUrl_);
          a2[r4] || (a2[r4] = true, t3.resources.push(e2.resUrl_));
        }
      }), e$12.resolve(t3), o2.forEach((e2) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s3), e2.resUrl_) ? e2.resolve(t3) : this._soReqs.push(e2);
      }), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, n3 || this.emit("credential-create", { credential: t3 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r2 = (t3) => {
      e$12.reject(t3), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s2 = (n3, a2, h, l3) => {
      const d3 = e$12.sinfo_, u2 = !e$12.options_ || false !== e$12.options_.prompt, _2 = d3.hasPortal && this._findOAuthInfo(e$12.resUrl_);
      let g, f2;
      if (n3)
        t2(new j({ userId: n3, server: d3.server, token: h || null, expires: null != l3 ? Number(l3) : null, ssl: !!a2 }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e$12.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const s3 = o$1(window, "message", (e2) => {
          e2.source === window.parent && e2.data && ("arcgis:auth:credential" === e2.data.type ? (s3.remove(), e2.data.credential.expires < Date.now() ? r2(new s$4("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t2(new j(e2.data.credential))) : "arcgis:auth:error" === e2.data.type && (s3.remove(), "tokenExpiredError" === e2.data.error.name ? r2(new s$4("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r2(s$4.fromJSON(e2.data.error))));
        });
        m$1(e$12.options_?.signal, () => {
          s3.remove();
        });
      } else if (_2) {
        let n4 = _2._oAuthCred;
        if (!n4) {
          const e$13 = new e(_2, b), t3 = new e(_2, D);
          e$13.isValid() && t3.isValid() ? e$13.expires > t3.expires ? (n4 = e$13, t3.destroy()) : (n4 = t3, e$13.destroy()) : n4 = e$13.isValid() ? e$13 : t3, _2._oAuthCred = n4;
        }
        if (n4.isValid()) {
          g = new j({ userId: n4.userId, server: d3.server, token: n4.token, expires: n4.expires, ssl: n4.ssl, _oAuthCred: n4 });
          const r3 = _2.appId !== n4.appId && this._doPortalSignIn(e$12.resUrl_);
          r3 || n4.refreshToken ? (e$12._pendingDfd = n4.refreshToken ? this._getOAuthToken(d3.server, n4.refreshToken, n4.appId).then((e2) => (g.expires = Date.now() + 1e3 * e2.expires_in, g.token = e2.access_token, g)) : Promise.resolve(g), e$12._pendingDfd.then((e2) => r3 ? this._exchangeToken(e2.server, _2.appId, e2.token).then((t3) => (e2.token = t3, e2)).catch(() => e2) : e2).then((e2) => {
            t2(e2);
          }).catch(() => {
            n4?.destroy(), s2();
          })) : t2(g);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(_2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === n4.stateUID && n4.codeVerifier)) {
          const s3 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e$12._pendingDfd = this._processOAuthResponseParams(s3, _2, d3).then((e2) => {
            t2(e2);
          }).catch(r2);
        } else {
          const s3 = () => {
            u2 ? e$12._pendingDfd = this.oAuthSignIn(e$12.resUrl_, d3, _2, e$12.options_).then(t2, r2) : (f2 = new s$4("identity-manager:not-authenticated", "User is not signed in."), r2(f2));
          };
          this._doPortalSignIn(e$12.resUrl_) ? e$12._pendingDfd = this._getPlatformSelf(d3.server, _2.appId).then((e2) => {
            F(e2.portalUrl, this._appOrigin, true) ? (g = new j({ userId: e2.username, server: d3.server, expires: Date.now() + 1e3 * e2.expires_in, token: e2.token }), t2(g)) : s3();
          }).catch(s3) : s3();
        }
      } else if (u2) {
        if (this._checkProtocol(e$12.resUrl_, d3, r2, e$12.admin_)) {
          let s3 = e$12.options_;
          e$12.admin_ && (s3 = s3 || {}, s3.isAdmin = true), e$12._pendingDfd = this.signIn(e$12.resUrl_, d3, s3).then(t2, r2);
        }
      } else
        f2 = new s$4("identity-manager:not-authenticated", "User is not signed in."), r2(f2);
    }, n2 = () => {
      const s3 = e$12.sinfo_, i2 = s3.owningSystemUrl, n3 = e$12.options_;
      let o2, a2, h, l3;
      if (n3 && (o2 = n3.token, a2 = n3.error, h = n3.prompt), l3 = this._findCredential(i2, { token: o2, resource: e$12.resUrl_ }), !l3) {
        for (const e2 of this.credentials)
          if (this._isIdProvider(i2, e2.server)) {
            l3 = e2;
            break;
          }
      }
      if (l3) {
        const i3 = this.findCredential(e$12.resUrl_, l3.userId);
        if (i3)
          t2(i3);
        else if (C(s3, this._legacyFed)) {
          const e2 = l3.toJSON();
          e2.server = s3.server, e2.resources = null, t2(new j(e2));
        } else {
          (e$12._pendingDfd = this.generateToken(this.findServerInfo(l3.server), null, { serverUrl: e$12.resUrl_, token: l3.token, signal: e$12.options_.signal, ssl: l3.ssl })).then((r3) => {
            t2(new j({ userId: l3?.userId, server: s3.server, token: r3.token, expires: null != r3.expires ? Number(r3.expires) : null, ssl: !!r3.ssl, isAdmin: e$12.admin_, validity: r3.validity }));
          }, r2);
        }
      } else {
        this._busy = null, o2 && (e$12.options_.token = null);
        (e$12._pendingDfd = this.getCredential(i2.replace(/\/?$/, "/sharing"), { resource: e$12.resUrl_, owningTenant: s3.owningTenant, signal: e$12.options_.signal, token: o2, error: a2, prompt: h })).then(() => {
          this._enqueue(e$12.resUrl_, e$12.sinfo_, e$12.options_, e$12, e$12.admin_);
        }, (t3) => {
          e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, e$12.reject(t3);
        });
      }
    };
    this._errbackFunc = r2;
    const a = e$12.sinfo_.owningSystemUrl, l2 = this._isServerRsrc(e$12.resUrl_), d2 = e$12.sinfo_._restInfoPms;
    d2 ? d2.promise.then((t3) => {
      const r3 = e$12.sinfo_;
      if (r3._restInfoPms) {
        r3.adminTokenServiceUrl = r3._restInfoPms.adminUrl, r3._restInfoPms = null, r3.tokenServiceUrl = (t$3("authInfo.tokenServicesUrl", t3) || t$3("authInfo.tokenServiceUrl", t3) || t$3("tokenServiceUrl", t3)) ?? null, r3.shortLivedTokenValidity = t$3("authInfo.shortLivedTokenValidity", t3) ?? null, r3.currentVersion = t3.currentVersion, r3.owningTenant = t3.owningTenant;
        const e2 = r3.owningSystemUrl = t3.owningSystemUrl;
        e2 && this._portals.push(e2);
      }
      l2 && r3.owningSystemUrl ? n2() : s2();
    }, () => {
      e$12.sinfo_._restInfoPms = null;
      const t3 = new s$4("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r2(t3);
    }) : l2 && a ? n2() : e$12.sinfo_._selfReq ? e$12.sinfo_._selfReq.selfDfd.then((t3) => {
      const r3 = {};
      let s3, i2, n3, o2;
      return t3 && (s3 = t3.user?.username, r3.username = s3, r3.allSSL = t3.allSSL, i2 = t3.supportsOAuth, o2 = parseFloat(t3.currentVersion), "multitenant" === t3.portalMode && (n3 = t3.customBaseUrl), e$12.sinfo_.currentVersion = o2), e$12.sinfo_.webTierAuth = !!s3, s3 && this.normalizeWebTierAuth ? this.generateToken(e$12.sinfo_, null, { ssl: r3.allSSL }).catch(() => null).then((e2) => (r3.portalToken = e2 && e2.token, r3.tokenExpiration = e2 && e2.expires, r3)) : !s3 && i2 && o2 >= 4.4 && !this._findOAuthInfo(e$12.resUrl_) ? this._generateOAuthInfo({ portalUrl: e$12.sinfo_.server, customBaseUrl: n3, owningTenant: e$12.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => r3) : r3;
    }).catch(() => null).then((t3) => {
      e$12.sinfo_._selfReq = null, t3 ? s2(t3.username, t3.allSSL, t3.portalToken, t3.tokenExpiration) : s2();
    }) : s2();
  }
  _generateOAuthInfo(e2) {
    let t2, r2 = null, i2 = e2.portalUrl;
    const n2 = e2.customBaseUrl, o2 = e2.owningTenant, a = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a) {
      r2 = window.location.href;
      let e3 = r2.indexOf("?");
      e3 > -1 && (r2 = r2.slice(0, e3)), e3 = r2.search(/\/(apps|home)\//), r2 = e3 > -1 ? r2.slice(0, e3) : null;
    }
    return a && r2 ? (this._hasTestedIfAppIsOnPortal = true, t2 = U$1(r2 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new i$1({ appId: "arcgisonline", popupCallbackUrl: r2 + "/home/oauth-callback.html" });
    })) : t2 = Promise.resolve(), t2.then(() => {
      if (this._defaultOAuthInfo)
        return i2 = i2.replace(/^http:/i, "https:"), U$1(i2 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: o2, client_id: this._defaultOAuthInfo.appId, redirect_uri: _(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e3) => {
          if (e3.data.valid) {
            const t3 = this._defaultOAuthInfo.clone();
            e3.data.urlKey && n2 ? t3.portalUrl = "https://" + e3.data.urlKey.toLowerCase() + "." + n2 : t3.portalUrl = i2, t3.popup = window !== window.top || !(F(i2, this._appOrigin) || this._gwDomains.some((e4) => e4.regex.test(i2) && e4.regex.test(this._appOrigin))), this.oAuthInfos.push(t3);
          }
        });
    });
  }
  _doOAuthSignIn(e2, t2, r2, s2) {
    const n2 = r2._oAuthCred, a = { portalUrl: r2.portalUrl };
    !r2.popup && r2.preserveUrlHash && window.location.hash && (a.hash = window.location.hash), n2.stateUID && (a.uid = n2.stateUID);
    const h = { client_id: r2.appId, response_type: n2.codeVerifier ? "code" : "token", state: JSON.stringify(a), expiration: r2.expiration, locale: r2.locale, redirect_uri: this._getRedirectURI(r2, !!n2.codeVerifier) };
    r2.forceLogin && (h.force_login = true), r2.forceUserId && r2.userId && (h.prepopulatedusername = r2.userId), !r2.popup && this._doPortalSignIn(e2) && (h.redirectToUserOrgUrl = true), n2.codeVerifier && (h.code_challenge = s2 || n2.codeVerifier, h.code_challenge_method = s2 ? "S256" : "plain");
    const l2 = r2.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c2 = l2 + "?" + v(h);
    if (r2.popup) {
      const e3 = window.open(c2, "esriJSAPIOAuth", r2.popupWindowFeatures);
      if (e3)
        e3.focus(), this._oAuthDfd.oAuthWin_ = e3, this._oAuthIntervalId = setInterval(() => {
          if (e3.closed) {
            clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
            const e4 = this._oAuthDfd;
            if (e4) {
              const t3 = new s$4("identity-manager:user-aborted", "ABORTED");
              e4.reject(t3);
            }
          }
        }, 500), this._oAuthOnPopupHandle = o$1(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e4) => {
          "arcgis:auth:hash" === e4.type ? this.setOAuthResponseHash(e4.detail) : this._setOAuthResponseQueryString(e4.detail);
        });
      else {
        const e4 = new s$4("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e4);
      }
    } else
      this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h, authorizeUrl: l2, resourceUrl: e2, serverInfo: t2, oAuthInfo: r2 }) : window.location.href = c2;
  }
  _getRedirectURI(e2, t2) {
    const r2 = window.location.href.replace(/#.*$/, "");
    if (e2.popup)
      return _(e2.popupCallbackUrl);
    if (t2) {
      const e3 = I(r2);
      return e3.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((t3) => {
        delete e3.query[t3];
      }), Et(e3.path, e3.query);
    }
    return r2;
  }
}
q.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let j = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e2?._oAuthCred && (this._oAuthCred = e2._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e2 = t$1.findServerInfo(this.server), t2 = e2?.owningSystemUrl, s2 = !!t2 && "server" === this.scope, i2 = s2 && C(e2, t$1._legacyFed), n2 = e2.webTierAuth, o2 = n2 && t$1.normalizeWebTierAuth, a = P[this.server], h = a?.[this.userId];
    let l2, c2 = this.resources && this.resources[0], d2 = s2 ? t$1.findServerInfo(t2) : null, u2 = { username: this.userId, password: h };
    if (n2 && !o2)
      return;
    s2 && !d2 && t$1.serverInfos.some((e3) => (t$1._isIdProvider(t2, e3.server) && (d2 = e3), !!d2));
    const p2 = d2 ? t$1.findCredential(d2.server, this.userId) : null;
    if (!s2 || p2) {
      if (!i2) {
        if (s2)
          l2 = { serverUrl: c2, token: p2?.token, ssl: p2 && p2.ssl };
        else if (o2)
          u2 = null, l2 = { ssl: this.ssl };
        else {
          if (!h) {
            let t3;
            return c2 && (c2 = t$1._sanitizeUrl(c2), this._enqueued = 1, t3 = t$1._enqueue(c2, e2, null, null, this.isAdmin, this), t3.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), t3;
          }
          this.isAdmin && (l2 = { isAdmin: true });
        }
        return t$1.generateToken(s2 ? d2 : e2, s2 ? null : u2, l2).then((e3) => {
          this.token = e3.token, this.expires = null != e3.expires ? Number(e3.expires) : null, this.creationTime = Date.now(), this.validity = e3.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      p2?.refreshToken();
    }
  }
  refreshServerTokens() {
    "portal" === this.scope && t$1.credentials.forEach((e2) => {
      const t2 = t$1.findServerInfo(e2.server), s2 = t2?.owningSystemUrl;
      e2 !== this && e2.userId === this.userId && s2 && "server" === e2.scope && (t$1._hasSameServerInstance(this.server, s2) || t$1._isIdProvider(s2, this.server)) && (C(t2, t$1._legacyFed) ? (e2.token = this.token, e2.expires = this.expires, e2.creationTime = this.creationTime, e2.validity = this.validity, e2.emitTokenChange()) : e2.refreshToken());
    });
  }
  emitTokenChange(e2) {
    clearTimeout(this._refreshTimer);
    const t2 = this.server ? t$1.findServerInfo(this.server) : null, s2 = t2?.owningSystemUrl, i2 = s2 ? t$1.findServerInfo(s2) : null;
    false === e2 || s2 && "portal" !== this.scope && (!i2?.webTierAuth || t$1.normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e2 = t$1.credentials.indexOf(this);
    e2 > -1 && t$1.credentials.splice(e2, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e2 = l({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t2 = this.resources;
    return t2 && t2.length > 0 && (e2.resources = t2.slice()), e2;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e2 = 6e4 * this.tokenRefreshBuffer, t2 = 2 ** 31 - 1;
    let r2 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r2 < 0 ? r2 = 0 : r2 > t2 && (r2 = t2), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r2 > e2 ? r2 - e2 : r2);
  }
};
e$1([y()], j.prototype, "creationTime", void 0), e$1([y()], j.prototype, "expires", void 0), e$1([y()], j.prototype, "isAdmin", void 0), e$1([y()], j.prototype, "oAuthState", void 0), e$1([y()], j.prototype, "resources", void 0), e$1([y()], j.prototype, "scope", void 0), e$1([y()], j.prototype, "server", void 0), e$1([y()], j.prototype, "ssl", void 0), e$1([y()], j.prototype, "token", void 0), e$1([y()], j.prototype, "tokenRefreshBuffer", void 0), e$1([y()], j.prototype, "userId", void 0), e$1([y()], j.prototype, "validity", void 0), j = e$1([c$1("esri.identity.Credential")], j);
class r extends q {
}
r.prototype.declaredClass = "esri.identity.IdentityManager";
const s = new r();
n(s);
export {
  s as default
};
