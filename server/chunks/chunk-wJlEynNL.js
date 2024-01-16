import { bo as e$1, bp as y, rx as e$2, br as c$1, ry as O$1, rz as n$1, rA as s$3, rB as b$1, bJ as d$2, bS as e$3, rC as e$4, cO as f$1, d1 as o, cS as t$1, rD as l$1, a_ as I, b7 as C$1, kb as m, aM as s$4, en as c$2, rE as F, rF as x, a$ as j$1, kY as A, rG as et, mY as r$1, cs as v, rH as t$2, cF as s$5, rI as K, rJ as T, rK as t$3, rL as _, cT as Et, rM as n } from "./chunk-KFNcxJaF.js";
import { createFocusTrap } from "focus-trap";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const p$2 = "esri-identity-form", a = { base: p$2, group: `${p$2}__group`, label: `${p$2}__label`, footer: `${p$2}__footer`, esriInput: "esri-input", esriButton: "esri-button", esriButtonSecondary: "esri-button--secondary" }, l = "ArcGIS Online";
let d$1 = class d extends O$1 {
  constructor(s3, e2) {
    super(s3, e2), this._usernameInputNode = null, this._passwordInputNode = null, this.signingIn = false, this.server = null, this.resource = null, this.error = null, this.oAuthPrompt = false;
  }
  render() {
    const { error: s3, server: e2, resource: t2, signingIn: o2, oAuthPrompt: n2, messages: p2 } = this, d3 = n$1("div", { class: a.group }, s$3(n2 ? p2.oAuthInfo : p2.info, { server: e2 && /\.arcgis\.com/i.test(e2) ? l : e2, resource: `(${t2 || p2.lblItem})` })), c2 = n2 ? null : n$1("div", { class: a.group, key: "username" }, n$1("label", { class: a.label }, p2.lblUser, n$1("input", { afterCreate: b$1, autocomplete: "off", bind: this, class: a.esriInput, "data-node-ref": "_usernameInputNode", required: true, spellcheck: false, type: "text", value: "" }))), m2 = n2 ? null : n$1("div", { class: a.group, key: "password" }, n$1("label", { class: a.label }, p2.lblPwd, n$1("input", { afterCreate: b$1, bind: this, class: a.esriInput, "data-node-ref": "_passwordInputNode", required: true, type: "password", value: "" }))), h2 = n$1("div", { class: this.classes(a.group, a.footer) }, n$1("input", { class: a.esriButton, disabled: !!o2, type: "submit", value: o2 ? p2.lblSigning : p2.lblOk }), n$1("input", { bind: this, class: this.classes(a.esriButton, a.esriButtonSecondary), onclick: this._cancel, type: "button", value: p2.lblCancel })), b2 = s3 ? n$1("div", null, s3.details?.httpStatus ? p2.invalidUser : p2.noAuthService) : null;
    return n$1("form", { bind: this, class: a.base, onsubmit: this._submit }, d3, b2, c2, m2, h2);
  }
  _cancel() {
    this._set("signingIn", false), this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(s3) {
    s3.preventDefault(), this._set("signingIn", true);
    const e2 = this.oAuthPrompt ? {} : { username: this._usernameInputNode && this._usernameInputNode.value, password: this._passwordInputNode && this._passwordInputNode.value };
    this.emit("submit", e2);
  }
};
e$1([y(), e$2("esri/identity/t9n/identity")], d$1.prototype, "messages", void 0), e$1([y()], d$1.prototype, "signingIn", void 0), e$1([y()], d$1.prototype, "server", void 0), e$1([y()], d$1.prototype, "resource", void 0), e$1([y()], d$1.prototype, "error", void 0), e$1([y()], d$1.prototype, "oAuthPrompt", void 0), d$1 = e$1([c$1("esri.identity.IdentityForm")], d$1);
const c = d$1;
const d2 = "esri-identity-modal", p$1 = { base: d2, open: `${d2}--open`, closed: `${d2}--closed`, title: `${d2}__title`, dialog: `${d2}__dialog`, content: `${d2}__content`, closeButton: `${d2}__close-button`, iconClose: "esri-icon-close" };
let u = class extends O$1 {
  constructor(t2, e2) {
    super(t2, e2), this.container = document.createElement("div"), this.content = null, this.open = false, this._focusTrap = null, this._close = () => {
      this.open = false;
    }, document.body.appendChild(this.container), this.addHandles(d$2(() => this.open, () => this._toggleFocusTrap()));
  }
  destroy() {
    this._destroyFocusTrap();
  }
  get title() {
    return this.messages?.auth.signIn;
  }
  render() {
    const t2 = this.id, { open: e2, content: o2, title: s3, messages: i2 } = this, r2 = e2 && !!o2, n2 = { [p$1.open]: r2, [p$1.closed]: !r2 }, a2 = n$1("button", { "aria-label": i2.close, bind: this, class: p$1.closeButton, onclick: this._close, title: i2.close, type: "button" }, n$1("span", { "aria-hidden": "true", class: p$1.iconClose })), l2 = `${t2}_title`, d3 = `${t2}_content`, u2 = s3 ? n$1("h1", { class: p$1.title, id: l2 }, s3) : null, h2 = r2 ? n$1("div", { afterCreate: this._createFocusTrap, "aria-describedby": d3, "aria-labelledby": l2, bind: this, class: p$1.dialog, role: "dialog" }, a2, u2, this._renderContent(d3)) : null;
    return n$1("div", { class: this.classes(p$1.base, n2), tabIndex: -1 }, h2);
  }
  _destroyFocusTrap() {
    this._focusTrap?.deactivate({ onDeactivate: () => {
    } }), this._focusTrap = null;
  }
  _toggleFocusTrap() {
    const { _focusTrap: t2, open: e2 } = this;
    t2 && (e2 ? t2.activate() : t2.deactivate());
  }
  _createFocusTrap(t2) {
    this._destroyFocusTrap();
    const o2 = requestAnimationFrame(() => {
      this._focusTrap = createFocusTrap(t2, { initialFocus: "input", onDeactivate: this._close }), this._toggleFocusTrap();
    });
    this.addHandles(e$3(() => cancelAnimationFrame(o2)));
  }
  _renderContent(t2) {
    const e2 = this.content;
    return "string" == typeof e2 ? n$1("div", { class: p$1.content, id: t2, innerHTML: e2 }) : e$4(e2) ? n$1("div", { class: p$1.content, id: t2 }, e2.render()) : e2 instanceof HTMLElement ? n$1("div", { afterCreate: this._attachToNode, bind: e2, class: p$1.content, id: t2 }) : null;
  }
  _attachToNode(t2) {
    const e2 = this;
    t2.appendChild(e2);
  }
};
e$1([y({ readOnly: true })], u.prototype, "container", void 0), e$1([y()], u.prototype, "content", void 0), e$1([y()], u.prototype, "open", void 0), e$1([y(), e$2("esri/t9n/common")], u.prototype, "messages", void 0), e$1([y()], u.prototype, "title", null), u = e$1([c$1("esri.identity.IdentityModal")], u);
const h = u;
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
    const e2 = this._load(), s3 = this.oAuthInfo;
    if (s3 && s3.authNamespace && s3.portalUrl) {
      let r2 = e2[s3.authNamespace];
      r2 || (r2 = e2[s3.authNamespace] = {}), this.appId || (this.appId = s3.appId), r2[s3.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
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
    const e2 = this._load(), s3 = this.oAuthInfo;
    if (s3?.appId && s3?.portalUrl && (null == this.expires || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t2 = s3.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", e3 = new FormData();
      if (e3.append("f", "json"), e3.append("auth_token", this.refreshToken || this.token), e3.append("client_id", s3.appId), e3.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), "function" == typeof navigator.sendBeacon)
        navigator.sendBeacon(t2, e3);
      else {
        const s4 = new XMLHttpRequest();
        s4.open("POST", t2), s4.send(e3);
      }
    }
    if (s3 && s3.authNamespace && s3.portalUrl && this.storage) {
      const r2 = e2[s3.authNamespace];
      if (r2) {
        delete r2[s3.portalUrl];
        try {
          this.storage.setItem(t, JSON.stringify(e2));
        } catch (i2) {
          console.log(i2);
        }
      }
    }
    s3 && (s3._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t2 = this._load(), e2 = this.oAuthInfo;
    if (e2 && e2.authNamespace && e2.portalUrl) {
      let s3 = t2[e2.authNamespace];
      s3 && (s3 = s3[e2.portalUrl], s3 && (this.appId = s3.appId, this.codeVerifier = s3.codeVerifier, this.expires = s3.expires, this.refreshToken = s3.refreshToken, this.ssl = s3.ssl, this.stateUID = s3.stateUID, this.token = s3.token, this.userId = s3.userId));
    }
  }
  _load() {
    let e2 = {};
    if (this.storage) {
      const i2 = this.storage.getItem(t);
      if (i2)
        try {
          e2 = JSON.parse(i2);
        } catch (s3) {
          console.warn(s3);
        }
    }
    return e2;
  }
}
e.prototype.declaredClass = "esri.identity.OAuthCredential";
var p;
let s$2 = p = class extends f$1 {
  constructor(o2) {
    super(o2), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p.fromJSON(this.toJSON());
  }
};
e$1([y({ json: { write: true } })], s$2.prototype, "appId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "authNamespace", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "expiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "flowType", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceLogin", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "forceUserId", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "locale", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "minTimeUntilExpiration", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popup", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupCallbackUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "popupWindowFeatures", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "portalUrl", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "preserveUrlHash", void 0), e$1([y({ json: { write: true } })], s$2.prototype, "userId", void 0), s$2 = p = e$1([c$1("esri.identity.OAuthInfo")], s$2);
const i$1 = s$2;
let s$1 = class s extends f$1 {
  constructor(o2) {
    super(o2), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
e$1([y({ json: { write: true } })], s$1.prototype, "adminTokenServiceUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "currentVersion", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "hasPortal", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "hasServer", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "owningSystemUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "owningTenant", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "server", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "shortLivedTokenValidity", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "tokenServiceUrl", void 0), e$1([y({ json: { write: true } })], s$1.prototype, "webTierAuth", void 0), s$1 = e$1([c$1("esri.identity.ServerInfo")], s$1);
const i = s$1;
const C = {}, b = (e2) => {
  const t2 = new x(e2.owningSystemUrl).host, r2 = new x(e2.server).host, s3 = /.+\.arcgis\.com$/i;
  return s3.test(t2) && s3.test(r2);
}, D = (e2, t2) => !!(b(e2) && t2 && t2.some((t3) => t3.test(e2.server)));
let q = null, j = null;
try {
  q = window.localStorage, j = window.sessionStorage;
} catch {
}
class E extends o {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.formConstructor = c, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = "null" !== window.origin ? window.origin : window.location.origin, this._appUrlObj = I(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^\/]+)\/?.*/i, this._gwItem = /http.+\/items\/([^\/]+)\/?.*/i, this._gwGroup = /http.+\/groups\/([^\/]+)\/?.*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e2) => {
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
    let s3, i$12 = this.findServerInfo(t2), o2 = true;
    i$12 || (i$12 = new i(), i$12.server = this._getServerInstanceRoot(t2), r2 ? i$12.hasServer = true : (i$12.tokenServiceUrl = this._getTokenSvcUrl(t2), i$12.hasPortal = true), this.registerServers([i$12])), s3 = this._findCredential(t2), s3 ? (delete e2.server, Object.assign(s3, e2), o2 = false) : (s3 = new L({ userId: e2.userId, server: i$12.server, token: e2.token, expires: e2.expires, ssl: e2.ssl, scope: r2 ? "server" : "portal" }), s3.resources = [t2], this.credentials.push(s3)), s3.emitTokenChange(false), o2 || s3.refreshServerTokens();
  }
  toJSON() {
    return l$1({ serverInfos: this.serverInfos.map((e2) => e2.toJSON()), oAuthInfos: this.oAuthInfos.map((e2) => e2.toJSON()), credentials: this.credentials.map((e2) => e2.toJSON()) });
  }
  initialize(e2) {
    if (!e2)
      return;
    "string" == typeof e2 && (e2 = JSON.parse(e2));
    const t2 = e2.serverInfos, r2 = e2.oAuthInfos, s3 = e2.credentials;
    if (t2) {
      const e3 = [];
      t2.forEach((t3) => {
        t3.server && t3.tokenServiceUrl && e3.push(t3.declaredClass ? t3 : new i(t3));
      }), e3.length && this.registerServers(e3);
    }
    if (r2) {
      const e3 = [];
      r2.forEach((t3) => {
        t3.appId && e3.push(t3.declaredClass ? t3 : new i$1(t3));
      }), e3.length && this.registerOAuthInfos(e3);
    }
    s3 && s3.forEach((e3) => {
      e3.server && e3.token && e3.expires && e3.expires > Date.now() && ((e3 = e3.declaredClass ? e3 : new L(e3)).emitTokenChange(), this.credentials.push(e3));
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
    const s3 = this._isServerRsrc(e2) ? "server" : "portal";
    if (t2) {
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && t2 === i2.userId && i2.scope === s3) {
          r2 = i2;
          break;
        }
    } else
      for (const i2 of this.credentials)
        if (this._hasSameServerInstance(i2.server, e2) && -1 !== this._getIdenticalSvcIdx(e2, i2) && i2.scope === s3) {
          r2 = i2;
          break;
        }
    return r2;
  }
  getCredential(e2, t2) {
    let r2, s3, o2 = true;
    t2 && (r2 = !!t2.token, s3 = t2.error, o2 = false !== t2.prompt), t2 = { ...t2 }, e2 = this._sanitizeUrl(e2);
    const n2 = new AbortController(), a2 = C$1();
    if (t2.signal && m(t2.signal, () => {
      n2.abort();
    }), m(n2, () => {
      a2.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    }), c$2(n2))
      return a2.promise;
    t2.signal = n2.signal;
    const h2 = this._isAdminResource(e2), u2 = r2 ? this.findCredential(e2) : null;
    let p2;
    if (u2 && s3 && s3.details && 498 === s3.details.httpStatus)
      u2.destroy();
    else if (u2)
      return p2 = new s$4("identity-manager:not-authorized", "You are currently signed in as: '" + u2.userId + "'. You do not have access to this resource: " + e2, { error: s3 }), a2.reject(p2), a2.promise;
    const g = this._findCredential(e2, t2);
    if (g)
      return a2.resolve(g), a2.promise;
    let f = this.findServerInfo(e2);
    if (f)
      !f.hasPortal && f.server && f.owningSystemUrl && this._hasSameServerInstance(f.server, f.owningSystemUrl) && (f.hasPortal = true), !f.hasServer && this._isServerRsrc(e2) && (f._restInfoPms = this._getTokenSvcUrl(e2), f.hasServer = true);
    else {
      const t3 = this._getTokenSvcUrl(e2);
      if (!t3)
        return p2 = new s$4("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), a2.reject(p2), a2.promise;
      f = new i(), f.server = this._getServerInstanceRoot(e2), "string" == typeof t3 ? (f.tokenServiceUrl = t3, f.hasPortal = true) : (f._restInfoPms = t3, f.hasServer = true), this.registerServers([f]);
    }
    return f.hasPortal && void 0 === f._selfReq && (o2 || F(f.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e3) => e3.tokenServiceUrl === f.tokenServiceUrl)) && (f._selfReq = { owningTenant: t2?.owningTenant, selfDfd: this._getPortalSelf(f.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e2) }), this._enqueue(e2, f, t2, a2, h2);
  }
  getResourceName(e2) {
    return this._isRESTService(e2) ? e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e2) && e2.replace(this._gwUser, "$1") || this._gwItem.test(e2) && e2.replace(this._gwItem, "$1") || this._gwGroup.test(e2) && e2.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e2, t2, r2) {
    const o2 = this._rePortalTokenSvc.test(e2.tokenServiceUrl), n2 = new x(this._appOrigin), a2 = e2.shortLivedTokenValidity;
    let h2, l2, c2, d3, u2, p2, f, m2;
    t2 && (m2 = this.tokenValidity || a2 || this._defaultTokenValidity, m2 > a2 && a2 > 0 && (m2 = a2)), r2 && (h2 = r2.isAdmin, l2 = r2.serverUrl, c2 = r2.token, p2 = r2.signal, f = r2.ssl, e2.customParameters = r2.customParameters), h2 ? d3 = e2.adminTokenServiceUrl : (d3 = e2.tokenServiceUrl, u2 = new x(d3.toLowerCase()), e2.webTierAuth && r2?.serverUrl && !f && "http" === n2.scheme && (F(n2.uri, d3, true) || "https" === u2.scheme && n2.host === u2.host && "7080" === n2.port && "7443" === u2.port) && (d3 = d3.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = { query: { request: "getToken", username: t2?.username, password: t2?.password, serverUrl: l2, token: c2, expiration: m2, referer: h2 || o2 ? this._appOrigin : null, client: h2 ? "referer" : null, f: "json", ...e2.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e2, r2), signal: p2, ...r2?.ioArgs };
    o2 || (v2.withCredentials = false);
    return j$1(d3, v2).then((r3) => {
      const s3 = r3.data;
      if (!s3?.token)
        return new s$4("identity-manager:authentication-failed", "Unable to generate token");
      const o3 = e2.server;
      return C[o3] || (C[o3] = {}), t2 && (C[o3][t2.username] = t2.password), s3.validity = m2, s3;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  checkSignInStatus(e2) {
    return this.checkAppAccess(e2, "").then((e3) => e3.credential);
  }
  checkAppAccess(e2, t2, r2) {
    let o2 = false;
    return this.getCredential(e2, { prompt: false }).then((n2) => {
      let a2;
      const h2 = { f: "json" };
      if ("portal" === n2.scope)
        if (t2 && (this._doPortalSignIn(e2) || r2?.force))
          a2 = n2.server + "/sharing/rest/oauth2/validateAppAccess", h2.client_id = t2;
        else {
          if (!n2.token)
            return { credential: n2 };
          a2 = n2.server + "/sharing/rest";
        }
      else {
        if (!n2.token)
          return { credential: n2 };
        a2 = n2.server + "/rest/services";
      }
      return n2.token && (h2.token = n2.token), j$1(a2, { query: h2, authMode: "anonymous" }).then((e3) => {
        if (false === e3.data.valid)
          throw new s$4("identity-manager:not-authorized", `You are currently signed in as: '${n2.userId}'.`, e3.data);
        return o2 = !!e3.data.viewOnlyUserTypeApp, { credential: n2 };
      }).catch((e3) => {
        if ("identity-manager:not-authorized" === e3.name)
          throw e3;
        const t3 = e3.details?.httpStatus;
        if (498 === t3)
          throw n2.destroy(), new s$4("identity-manager:not-authenticated", "User is not signed in.");
        if (400 === t3)
          throw new s$4("identity-manager:invalid-request");
        return { credential: n2 };
      });
    }).then((e3) => ({ credential: e3.credential, viewOnly: o2 }));
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
    const s3 = C$1(), o2 = () => {
      h$1?.remove(), d3?.remove(), p2?.remove(), a2?.destroy(), this.dialog?.destroy(), this.dialog = a2 = h$1 = d3 = p2 = null;
    }, n2 = () => {
      o2(), this._oAuthDfd = null, s3.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    };
    r2.signal && m(r2.signal, () => {
      n2();
    });
    let a2 = new this.formConstructor();
    a2.resource = this.getResourceName(e2), a2.server = t2.server, this.dialog = new h(), this.dialog.content = a2, this.dialog.open = true, this.emit("dialog-create");
    let h$1 = a2.on("cancel", n2), d3 = d$2(() => this.dialog.open, n2), p2 = a2.on("submit", (e3) => {
      this.generateToken(t2, e3, { isAdmin: r2.isAdmin, signal: r2.signal }).then((i2) => {
        o2();
        const n3 = new L({ userId: e3.username, server: t2.server, token: i2.token, expires: null != i2.expires ? Number(i2.expires) : null, ssl: !!i2.ssl, isAdmin: r2.isAdmin, validity: i2.validity });
        s3.resolve(n3);
      }).catch((e4) => {
        a2.error = e4, a2.signingIn = false;
      });
    });
    return s3.promise;
  }
  oAuthSignIn(e2, t2, r2, s3) {
    this._oAuthDfd = C$1();
    const o2 = this._oAuthDfd;
    let n2;
    s3?.signal && m(s3.signal, () => {
      const e3 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e3 && !e3.closed ? e3.close() : this.dialog && g();
    }), o2.resUrl_ = e2, o2.sinfo_ = t2, o2.oinfo_ = r2;
    const a2 = r2._oAuthCred;
    if (a2.storage && ("authorization-code" === r2.flowType || "auto" === r2.flowType && t2.currentVersion >= 8.4)) {
      let e3 = crypto.getRandomValues(new Uint8Array(32));
      n2 = et(e3), a2.codeVerifier = n2, e3 = crypto.getRandomValues(new Uint8Array(32)), a2.stateUID = et(e3), a2.save() || (a2.codeVerifier = n2 = null);
    } else
      a2.codeVerifier = null;
    let h$1, d3, p2, _2;
    this._getCodeChallenge(n2).then((i2) => {
      const o3 = !s3 || false !== s3.oAuthPopupConfirmation;
      r2.popup && o3 ? (h$1 = new this.formConstructor(), h$1.oAuthPrompt = true, h$1.server = t2.server, this.dialog = new h(), this.dialog.content = h$1, this.dialog.open = true, this.emit("dialog-create"), d3 = h$1.on("cancel", g), p2 = d$2(() => this.dialog.open, g), _2 = h$1.on("submit", () => {
        f(), this._doOAuthSignIn(e2, t2, r2, i2);
      })) : this._doOAuthSignIn(e2, t2, r2, i2);
    });
    const g = () => {
      f(), this._oAuthDfd = null, o2.reject(new s$4("identity-manager:user-aborted", "ABORTED"));
    }, f = () => {
      d3?.remove(), p2?.remove(), _2?.remove(), h$1?.destroy(), this.dialog?.destroy(), this.dialog = null;
    };
    return o2.promise;
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
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = r$1(window, "message", (t2) => {
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
        const r3 = v(t3), s3 = window.location.pathname + (r3 ? `?${r3}` : "") + (e3.state?.hash || "");
        window.history.replaceState(window.history.state, "", s3);
      }
    }
  }
  _getOAuthToken(e2, t2, r2, i2, o2) {
    return e2 = e2.replace(/^http:/i, "https:"), j$1(`${e2}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i2 && o2 ? { grant_type: "authorization_code", code: t2, redirect_uri: i2, client_id: r2, code_verifier: o2 } : { grant_type: "refresh_token", refresh_token: t2, client_id: r2 } }).then((e3) => e3.data);
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
    let r2, s3, i2, o2, n2 = -1;
    const a2 = t2?.token, h2 = t2?.resource, l2 = this._isServerRsrc(e2) ? "server" : "portal", c2 = this.credentials.filter((t3) => this._hasSameServerInstance(t3.server, e2) && t3.scope === l2);
    if (e2 = h2 || e2, c2.length)
      if (1 === c2.length) {
        if (r2 = c2[0], i2 = this.findServerInfo(r2.server), s3 = i2?.owningSystemUrl, o2 = s3 ? this.findCredential(s3, r2.userId) : void 0, n2 = this._getIdenticalSvcIdx(e2, r2), !a2)
          return -1 === n2 && r2.resources.push(e2), this._addResource(e2, o2), r2;
        -1 !== n2 && (r2.resources.splice(n2, 1), this._removeResource(e2, o2));
      } else {
        let t3, r3;
        if (c2.some((a3) => (r3 = this._getIdenticalSvcIdx(e2, a3), -1 !== r3 && (t3 = a3, i2 = this.findServerInfo(t3.server), s3 = i2?.owningSystemUrl, o2 = s3 ? this.findCredential(s3, t3.userId) : void 0, n2 = r3, true))), a2)
          t3 && (t3.resources.splice(n2, 1), this._removeResource(e2, o2));
        else if (t3)
          return this._addResource(e2, o2), t3;
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
    const t2 = /^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i, r2 = /^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, s3 = /^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;
    return t2.test(e2) ? e2 = e2.replace(t2, "https://www.arcgis.com") : r2.test(e2) ? e2 = e2.replace(r2, "https://devext.arcgis.com") : s3.test(e2) && (e2 = e2.replace(s3, "https://qaext.arcgis.com")), e2;
  }
  _sanitizeUrl(e2) {
    const r2 = (s$5.request.proxyUrl || "").toLowerCase(), s3 = r2 ? e2.toLowerCase().indexOf(r2 + "?") : -1;
    return -1 !== s3 && (e2 = e2.substring(s3 + r2.length + 1)), e2 = K(e2), I(e2).path;
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
      const s3 = this._getSuffix(e2).toLowerCase(), i2 = this._getSuffix(t2).toLowerCase();
      if (r2 = s3 === i2, !r2) {
        const e3 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r2 = s3.replaceAll(e3, "$1") === i2.replaceAll(e3, "$1");
      }
    } else
      this._isAdminResource(e2) && this._isAdminResource(t2) ? r2 = true : this._isServerRsrc(e2) || this._isServerRsrc(t2) || !this._isPortalDomain(e2) || (r2 = true);
    return r2;
  }
  _isPortalDomain(e2) {
    const r2 = new x(e2.toLowerCase()), s3 = this._portalConfig;
    let i2 = this._gwDomains.some((e3) => e3.regex.test(r2.uri));
    return !i2 && s3 && (i2 = this._hasSameServerInstance(this._getServerInstanceRoot(s3.restBaseUrl), r2.uri)), i2 || s$5.portalUrl && (i2 = F(r2, s$5.portalUrl, true)), i2 || (i2 = this._portals.some((e3) => this._hasSameServerInstance(e3, r2.uri))), i2 = i2 || this._agsPortal.test(r2.path), i2;
  }
  _isIdProvider(e2, t2) {
    let r2 = -1, s3 = -1;
    this._gwDomains.forEach((i3, o2) => {
      -1 === r2 && i3.regex.test(e2) && (r2 = o2), -1 === s3 && i3.regex.test(t2) && (s3 = o2);
    });
    let i2 = false;
    if (r2 > -1 && s3 > -1 && (0 === r2 || 4 === r2 ? 0 !== s3 && 4 !== s3 || (i2 = true) : 1 === r2 ? 1 !== s3 && 2 !== s3 || (i2 = true) : 2 === r2 ? 2 === s3 && (i2 = true) : 3 === r2 && 3 === s3 && (i2 = true)), !i2) {
      const r3 = this.findServerInfo(t2), s4 = r3?.owningSystemUrl;
      s4 && b(r3) && this._isPortalDomain(s4) && this._isIdProvider(e2, s4) && (i2 = true);
    }
    return i2;
  }
  _getIdenticalSvcIdx(e2, t2) {
    let r2 = -1;
    for (let s3 = 0; s3 < t2.resources.length; s3++) {
      const i2 = t2.resources[s3];
      if (this._isIdenticalService(e2, i2)) {
        r2 = s3;
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
      return t2 = i3 + "/admin/generateToken", r2 = j$1(e2 = i3 + "/rest/info", { query: { f: "json" } }).then((e3) => e3.data), { adminUrl: t2, promise: r2 };
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
    const s3 = t2._oAuthCred;
    if (e2.code) {
      const i3 = s3.codeVerifier;
      return s3.codeVerifier = null, s3.stateUID = null, s3.save(), this._getOAuthToken(r2.server, e2.code, t2.appId, this._getRedirectURI(t2, true), i3).then((i4) => {
        const o2 = new L({ userId: i4.username, server: r2.server, token: i4.access_token, expires: Date.now() + 1e3 * i4.expires_in, ssl: i4.ssl, oAuthState: e2.state, _oAuthCred: s3 });
        return t2.userId = o2.userId, s3.storage = i4.persist ? q : j, s3.refreshToken = i4.refresh_token, s3.token = null, s3.expires = i4.refresh_token_expires_in ? Date.now() + 1e3 * i4.refresh_token_expires_in : null, s3.userId = o2.userId, s3.ssl = o2.ssl, s3.save(), o2;
      });
    }
    const i2 = new L({ userId: e2.username, server: r2.server, token: e2.access_token, expires: Date.now() + 1e3 * Number(e2.expires_in), ssl: "true" === e2.ssl, oAuthState: e2.state, _oAuthCred: s3 });
    return t2.userId = i2.userId, s3.storage = e2.persist ? q : j, s3.refreshToken = null, s3.token = i2.token, s3.expires = i2.expires, s3.userId = i2.userId, s3.ssl = i2.ssl, s3.save(), Promise.resolve(i2);
  }
  _processOAuthPopupParams(e2) {
    const t2 = this._oAuthDfd;
    if (this._oAuthDfd = null, t2)
      if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e2.error) {
        const r2 = "access_denied" === e2.error, s3 = new s$4(r2 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", r2 ? "ABORTED" : "OAuth: " + e2.error + " - " + e2.error_description);
        t2.reject(s3);
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
    return j$1(`${e2}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t2, token: r2 } }).then((e3) => e3.data.token);
  }
  _getPlatformSelf(e2, t2) {
    return e2 = e2.replace(/^http:/i, "https:"), j$1(`${e2}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t2, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: true }).then((e3) => e3.data);
  }
  _getPortalSelf(e2, t2) {
    let r2;
    if (this._gwDomains.some((t3) => (t3.regex.test(e2) && (r2 = t3.customBaseUrl), !!r2)), r2)
      return Promise.resolve({ allSSL: true, currentVersion: "8.4", customBaseUrl: r2, portalMode: "multitenant", supportsOAuth: true });
    this._appOrigin.startsWith("https:") ? e2 = e2.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t2) && (e2 = e2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return j$1(e2, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e3) => e3.data);
  }
  _doPortalSignIn(e2) {
    const t2 = this._portalConfig, r2 = window.location.href, s3 = this.findServerInfo(e2);
    return !(!t2 && !this._isPortalDomain(r2) || !(s3 ? s3.hasPortal || s3.owningSystemUrl && this._isPortalDomain(s3.owningSystemUrl) : this._isPortalDomain(e2)) || !(this._isIdProvider(r2, e2) || t2 && (this._hasSameServerInstance(this._getServerInstanceRoot(t2.restBaseUrl), e2) || this._isIdProvider(t2.restBaseUrl, e2)) || F(r2, e2, true)));
  }
  _checkProtocol(e2, t2, r2, s3) {
    let o2 = true;
    const n2 = s3 ? t2.adminTokenServiceUrl : t2.tokenServiceUrl;
    if (n2.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && T(n2) && (o2 = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e2, serverInfo: t2 }), !o2)) {
      r2(new s$4("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return o2;
  }
  _enqueue(e2, t2, r2, s3, i2, o2) {
    return s3 || (s3 = C$1()), s3.resUrl_ = e2, s3.sinfo_ = t2, s3.options_ = r2, s3.admin_ = i2, s3.refresh_ = o2, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e2), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s3)) : this._xoReqs.push(s3) : this._doSignIn(s3), s3.promise;
  }
  _doSignIn(e$12) {
    this._busy = e$12, this._rejectOnPersistedPageShow = false;
    const t2 = (t3) => {
      const r3 = e$12.options_?.resource, s4 = e$12.resUrl_, i2 = e$12.refresh_;
      let o3 = false;
      this.credentials.includes(t3) || (i2 && this.credentials.includes(i2) ? (i2.userId = t3.userId, i2.token = t3.token, i2.expires = t3.expires, i2.validity = t3.validity, i2.ssl = t3.ssl, i2.creationTime = t3.creationTime, o3 = true, t3 = i2) : this.credentials.push(t3)), t3.resources || (t3.resources = []), t3.resources.includes(r3 || s4) || t3.resources.push(r3 || s4), t3.scope = this._isServerRsrc(s4) ? "server" : "portal", t3.emitTokenChange();
      const n2 = this._soReqs, a3 = {};
      this._soReqs = [], n2.forEach((e2) => {
        if (!this._isIdenticalService(s4, e2.resUrl_)) {
          const r4 = this._getSuffix(e2.resUrl_);
          a3[r4] || (a3[r4] = true, t3.resources.push(e2.resUrl_));
        }
      }), e$12.resolve(t3), n2.forEach((e2) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s4), e2.resUrl_) ? e2.resolve(t3) : this._soReqs.push(e2);
      }), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, o3 || this.emit("credential-create", { credential: t3 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r2 = (t3) => {
      e$12.reject(t3), this._busy = e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s3 = (o3, a3, h2, l3) => {
      const d4 = e$12.sinfo_, u2 = !e$12.options_ || false !== e$12.options_.prompt, p2 = d4.hasPortal && this._findOAuthInfo(e$12.resUrl_);
      let g, f;
      if (o3)
        t2(new L({ userId: o3, server: d4.server, token: h2 || null, expires: null != l3 ? Number(l3) : null, ssl: !!a3 }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e$12.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const s4 = r$1(window, "message", (e2) => {
          e2.source === window.parent && e2.data && ("arcgis:auth:credential" === e2.data.type ? (s4.remove(), e2.data.credential.expires < Date.now() ? r2(new s$4("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t2(new L(e2.data.credential))) : "arcgis:auth:error" === e2.data.type && (s4.remove(), "tokenExpiredError" === e2.data.error.name ? r2(new s$4("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r2(s$4.fromJSON(e2.data.error))));
        });
        m(e$12.options_?.signal, () => {
          s4.remove();
        });
      } else if (p2) {
        let o4 = p2._oAuthCred;
        if (!o4) {
          const e$13 = new e(p2, q), t3 = new e(p2, j);
          e$13.isValid() && t3.isValid() ? e$13.expires > t3.expires ? (o4 = e$13, t3.destroy()) : (o4 = t3, e$13.destroy()) : o4 = e$13.isValid() ? e$13 : t3, p2._oAuthCred = o4;
        }
        if (o4.isValid()) {
          g = new L({ userId: o4.userId, server: d4.server, token: o4.token, expires: o4.expires, ssl: o4.ssl, _oAuthCred: o4 });
          const r3 = p2.appId !== o4.appId && this._doPortalSignIn(e$12.resUrl_);
          r3 || o4.refreshToken ? (e$12._pendingDfd = o4.refreshToken ? this._getOAuthToken(d4.server, o4.refreshToken, o4.appId).then((e2) => (g.expires = Date.now() + 1e3 * e2.expires_in, g.token = e2.access_token, g)) : Promise.resolve(g), e$12._pendingDfd.then((e2) => r3 ? this._exchangeToken(e2.server, p2.appId, e2.token).then((t3) => (e2.token = t3, e2)).catch(() => e2) : e2).then((e2) => {
            t2(e2);
          }).catch(() => {
            o4?.destroy(), s3();
          })) : t2(g);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(p2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === o4.stateUID && o4.codeVerifier)) {
          const s4 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e$12._pendingDfd = this._processOAuthResponseParams(s4, p2, d4).then((e2) => {
            t2(e2);
          }).catch(r2);
        } else {
          const s4 = () => {
            u2 ? e$12._pendingDfd = this.oAuthSignIn(e$12.resUrl_, d4, p2, e$12.options_).then(t2, r2) : (f = new s$4("identity-manager:not-authenticated", "User is not signed in."), r2(f));
          };
          this._doPortalSignIn(e$12.resUrl_) ? e$12._pendingDfd = this._getPlatformSelf(d4.server, p2.appId).then((e2) => {
            F(e2.portalUrl, this._appOrigin, true) ? (g = new L({ userId: e2.username, server: d4.server, expires: Date.now() + 1e3 * e2.expires_in, token: e2.token }), t2(g)) : s4();
          }).catch(s4) : s4();
        }
      } else if (u2) {
        if (this._checkProtocol(e$12.resUrl_, d4, r2, e$12.admin_)) {
          let s4 = e$12.options_;
          e$12.admin_ && (s4 = s4 || {}, s4.isAdmin = true), e$12._pendingDfd = this.signIn(e$12.resUrl_, d4, s4).then(t2, r2);
        }
      } else
        f = new s$4("identity-manager:not-authenticated", "User is not signed in."), r2(f);
    }, o2 = () => {
      const s4 = e$12.sinfo_, i2 = s4.owningSystemUrl, o3 = e$12.options_;
      let n2, a3, h2, l3;
      if (o3 && (n2 = o3.token, a3 = o3.error, h2 = o3.prompt), l3 = this._findCredential(i2, { token: n2, resource: e$12.resUrl_ }), !l3) {
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
        else if (D(s4, this._legacyFed)) {
          const e2 = l3.toJSON();
          e2.server = s4.server, e2.resources = null, t2(new L(e2));
        } else {
          (e$12._pendingDfd = this.generateToken(this.findServerInfo(l3.server), null, { serverUrl: e$12.resUrl_, token: l3.token, signal: e$12.options_.signal, ssl: l3.ssl })).then((r3) => {
            t2(new L({ userId: l3?.userId, server: s4.server, token: r3.token, expires: null != r3.expires ? Number(r3.expires) : null, ssl: !!r3.ssl, isAdmin: e$12.admin_, validity: r3.validity }));
          }, r2);
        }
      } else {
        this._busy = null, n2 && (e$12.options_.token = null);
        (e$12._pendingDfd = this.getCredential(i2.replace(/\/?$/, "/sharing"), { resource: e$12.resUrl_, owningTenant: s4.owningTenant, signal: e$12.options_.signal, token: n2, error: a3, prompt: h2 })).then(() => {
          this._enqueue(e$12.resUrl_, e$12.sinfo_, e$12.options_, e$12, e$12.admin_);
        }, (t3) => {
          e$12.resUrl_ = e$12.sinfo_ = e$12.refresh_ = null, e$12.reject(t3);
        });
      }
    };
    this._errbackFunc = r2;
    const a2 = e$12.sinfo_.owningSystemUrl, l2 = this._isServerRsrc(e$12.resUrl_), d3 = e$12.sinfo_._restInfoPms;
    d3 ? d3.promise.then((t3) => {
      const r3 = e$12.sinfo_;
      if (r3._restInfoPms) {
        r3.adminTokenServiceUrl = r3._restInfoPms.adminUrl, r3._restInfoPms = null, r3.tokenServiceUrl = (t$3("authInfo.tokenServicesUrl", t3) || t$3("authInfo.tokenServiceUrl", t3) || t$3("tokenServiceUrl", t3)) ?? null, r3.shortLivedTokenValidity = t$3("authInfo.shortLivedTokenValidity", t3) ?? null, r3.currentVersion = t3.currentVersion, r3.owningTenant = t3.owningTenant;
        const e2 = r3.owningSystemUrl = t3.owningSystemUrl;
        e2 && this._portals.push(e2);
      }
      l2 && r3.owningSystemUrl ? o2() : s3();
    }, () => {
      e$12.sinfo_._restInfoPms = null;
      const t3 = new s$4("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r2(t3);
    }) : l2 && a2 ? o2() : e$12.sinfo_._selfReq ? e$12.sinfo_._selfReq.selfDfd.then((t3) => {
      const r3 = {};
      let s4, i2, o3, n2;
      return t3 && (s4 = t3.user?.username, r3.username = s4, r3.allSSL = t3.allSSL, i2 = t3.supportsOAuth, n2 = parseFloat(t3.currentVersion), "multitenant" === t3.portalMode && (o3 = t3.customBaseUrl), e$12.sinfo_.currentVersion = n2), e$12.sinfo_.webTierAuth = !!s4, s4 && this.normalizeWebTierAuth ? this.generateToken(e$12.sinfo_, null, { ssl: r3.allSSL }).catch(() => null).then((e2) => (r3.portalToken = e2 && e2.token, r3.tokenExpiration = e2 && e2.expires, r3)) : !s4 && i2 && n2 >= 4.4 && !this._findOAuthInfo(e$12.resUrl_) ? this._generateOAuthInfo({ portalUrl: e$12.sinfo_.server, customBaseUrl: o3, owningTenant: e$12.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => r3) : r3;
    }).catch(() => null).then((t3) => {
      e$12.sinfo_._selfReq = null, t3 ? s3(t3.username, t3.allSSL, t3.portalToken, t3.tokenExpiration) : s3();
    }) : s3();
  }
  _generateOAuthInfo(e2) {
    let t2, r2 = null, i2 = e2.portalUrl;
    const o2 = e2.customBaseUrl, n2 = e2.owningTenant, a2 = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a2) {
      r2 = window.location.href;
      let e3 = r2.indexOf("?");
      e3 > -1 && (r2 = r2.slice(0, e3)), e3 = r2.search(/\/(apps|home)\//), r2 = e3 > -1 ? r2.slice(0, e3) : null;
    }
    return a2 && r2 ? (this._hasTestedIfAppIsOnPortal = true, t2 = j$1(r2 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new i$1({ appId: "arcgisonline", popupCallbackUrl: r2 + "/home/oauth-callback.html" });
    })) : t2 = Promise.resolve(), t2.then(() => {
      if (this._defaultOAuthInfo)
        return i2 = i2.replace(/^http:/i, "https:"), j$1(i2 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: n2, client_id: this._defaultOAuthInfo.appId, redirect_uri: _(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e3) => {
          if (e3.data.valid) {
            const t3 = this._defaultOAuthInfo.clone();
            e3.data.urlKey && o2 ? t3.portalUrl = "https://" + e3.data.urlKey.toLowerCase() + "." + o2 : t3.portalUrl = i2, t3.popup = window !== window.top || !(F(i2, this._appOrigin) || this._gwDomains.some((e4) => e4.regex.test(i2) && e4.regex.test(this._appOrigin))), this.oAuthInfos.push(t3);
          }
        });
    });
  }
  _doOAuthSignIn(e2, t2, r2, s3) {
    const o2 = r2._oAuthCred, a2 = { portalUrl: r2.portalUrl };
    !r2.popup && r2.preserveUrlHash && window.location.hash && (a2.hash = window.location.hash), o2.stateUID && (a2.uid = o2.stateUID);
    const h2 = { client_id: r2.appId, response_type: o2.codeVerifier ? "code" : "token", state: JSON.stringify(a2), expiration: r2.expiration, locale: r2.locale, redirect_uri: this._getRedirectURI(r2, !!o2.codeVerifier) };
    r2.forceLogin && (h2.force_login = true), r2.forceUserId && r2.userId && (h2.prepopulatedusername = r2.userId), !r2.popup && this._doPortalSignIn(e2) && (h2.redirectToUserOrgUrl = true), o2.codeVerifier && (h2.code_challenge = s3 || o2.codeVerifier, h2.code_challenge_method = s3 ? "S256" : "plain");
    const l2 = r2.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c2 = l2 + "?" + v(h2);
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
        }, 500), this._oAuthOnPopupHandle = r$1(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e4) => {
          "arcgis:auth:hash" === e4.type ? this.setOAuthResponseHash(e4.detail) : this._setOAuthResponseQueryString(e4.detail);
        });
      else {
        const e4 = new s$4("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e4);
      }
    } else
      this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h2, authorizeUrl: l2, resourceUrl: e2, serverInfo: t2, oAuthInfo: r2 }) : window.location.href = c2;
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
E.prototype.declaredClass = "esri.identity.IdentityManagerBase";
let L = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e2?._oAuthCred && (this._oAuthCred = e2._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e2 = t$1.findServerInfo(this.server), t2 = e2?.owningSystemUrl, s3 = !!t2 && "server" === this.scope, i2 = s3 && D(e2, t$1._legacyFed), o2 = e2.webTierAuth, n2 = o2 && t$1.normalizeWebTierAuth, a2 = C[this.server], h2 = a2?.[this.userId];
    let l2, c2 = this.resources && this.resources[0], d3 = s3 ? t$1.findServerInfo(t2) : null, u2 = { username: this.userId, password: h2 };
    if (o2 && !n2)
      return;
    s3 && !d3 && t$1.serverInfos.some((e3) => (t$1._isIdProvider(t2, e3.server) && (d3 = e3), !!d3));
    const p2 = d3 ? t$1.findCredential(d3.server, this.userId) : null;
    if (!s3 || p2) {
      if (!i2) {
        if (s3)
          l2 = { serverUrl: c2, token: p2?.token, ssl: p2 && p2.ssl };
        else if (n2)
          u2 = null, l2 = { ssl: this.ssl };
        else {
          if (!h2) {
            let t3;
            return c2 && (c2 = t$1._sanitizeUrl(c2), this._enqueued = 1, t3 = t$1._enqueue(c2, e2, null, null, this.isAdmin, this), t3.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), t3;
          }
          this.isAdmin && (l2 = { isAdmin: true });
        }
        return t$1.generateToken(s3 ? d3 : e2, s3 ? null : u2, l2).then((e3) => {
          this.token = e3.token, this.expires = null != e3.expires ? Number(e3.expires) : null, this.creationTime = Date.now(), this.validity = e3.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      p2?.refreshToken();
    }
  }
  refreshServerTokens() {
    "portal" === this.scope && t$1.credentials.forEach((e2) => {
      const t2 = t$1.findServerInfo(e2.server), s3 = t2?.owningSystemUrl;
      e2 !== this && e2.userId === this.userId && s3 && "server" === e2.scope && (t$1._hasSameServerInstance(this.server, s3) || t$1._isIdProvider(s3, this.server)) && (D(t2, t$1._legacyFed) ? (e2.token = this.token, e2.expires = this.expires, e2.creationTime = this.creationTime, e2.validity = this.validity, e2.emitTokenChange()) : e2.refreshToken());
    });
  }
  emitTokenChange(e2) {
    clearTimeout(this._refreshTimer);
    const t2 = this.server ? t$1.findServerInfo(this.server) : null, s3 = t2?.owningSystemUrl, i2 = s3 ? t$1.findServerInfo(s3) : null;
    false === e2 || s3 && "portal" !== this.scope && (!i2?.webTierAuth || t$1.normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e2 = t$1.credentials.indexOf(this);
    e2 > -1 && t$1.credentials.splice(e2, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e2 = l$1({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t2 = this.resources;
    return t2 && t2.length > 0 && (e2.resources = t2.slice()), e2;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e2 = 6e4 * this.tokenRefreshBuffer, t2 = 2 ** 31 - 1;
    let r2 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r2 < 0 ? r2 = 0 : r2 > t2 && (r2 = t2), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r2 > e2 ? r2 - e2 : r2);
  }
};
e$1([y()], L.prototype, "creationTime", void 0), e$1([y()], L.prototype, "expires", void 0), e$1([y()], L.prototype, "isAdmin", void 0), e$1([y()], L.prototype, "oAuthState", void 0), e$1([y()], L.prototype, "resources", void 0), e$1([y()], L.prototype, "scope", void 0), e$1([y()], L.prototype, "server", void 0), e$1([y()], L.prototype, "ssl", void 0), e$1([y()], L.prototype, "token", void 0), e$1([y()], L.prototype, "tokenRefreshBuffer", void 0), e$1([y()], L.prototype, "userId", void 0), e$1([y()], L.prototype, "validity", void 0), L = e$1([c$1("esri.identity.Credential")], L);
class r extends E {
}
r.prototype.declaredClass = "esri.identity.IdentityManager";
const s2 = new r();
n(s2);
export {
  s2 as default
};
