import { bO as G$1, bP as C, b9 as w, iG as J, iH as z, iI as Wt, aT as s$1, aO as s, bJ as c$1, cX as y$1, iJ as s$2, aV as e, aX as y$2, iK as m$1, f9 as k, b0 as has, iL as x, iM as Q, aQ as U$1, cr as q$1, iN as i, iO as i$1, iP as c, iQ as a, iR as t, df as t$1, aC as M, iS as c$2, iT as w$1, gG as V$1, iU as A, dN as o, dC as o$1, aP as a$1, h3 as g$1, iV as a$2, iW as v$1, bH as r, aB as f$1, iX as F, ck as b$1, iY as s$3, a_ as c$3 } from "./chunk-ejFG4zJ0.js";
import { isFeatureIdentifierArrayWithGlobalId as $$1, isFeatureIdentifierArrayWithObjectId as v } from "./chunk-_XGy4kgm.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function p(t2, e2, a2) {
  const { geometry: s2 } = e2, n = { ...e2.attributes };
  if (null != a2 && "mesh" === s2?.type) {
    const { transformFieldRoles: e3 } = a2, { origin: d, spatialReference: c2, transform: p2, vertexSpace: m2 } = s2, f2 = "local" === m2.type, g2 = t2.spatialReference, b2 = g2.isGeographic, R2 = G$1(g2, c2), y2 = R2 || C(g2) && (C(c2) || w(c2));
    if (!(f2 && b2 && y2 || !f2 && !b2 && R2))
      return null;
    const I2 = J(d, c2, g2);
    if (null == I2)
      return null;
    if (n[e3.originX] = I2.x, n[e3.originY] = I2.y, n[e3.originZ] = I2.z ?? 0, null != p2) {
      const { translation: t3, scale: a3, rotation: s3 } = p2, o2 = f2 ? 1 : z(c2) / z(g2);
      n[e3.translationX] = t3[0] * o2, n[e3.translationY] = t3[2] * o2, n[e3.translationZ] = -t3[1] * o2, n[e3.scaleX] = a3[0], n[e3.scaleY] = a3[2], n[e3.scaleZ] = a3[1], n[e3.rotationX] = s3[0], n[e3.rotationY] = s3[2], n[e3.rotationZ] = -s3[1], n[e3.rotationDeg] = s3[3];
    }
    return { attributes: n };
  }
  return null == s2 ? { attributes: n } : "mesh" === s2.type || "extent" === s2.type ? null : { geometry: s2.toJSON(), attributes: n };
}
async function m(t2, e2) {
  const a2 = await Promise.all((e2.addAttachments ?? []).map((e3) => f(t2, e3))), r2 = await Promise.all((e2.updateAttachments ?? []).map((e3) => f(t2, e3))), s2 = e2.deleteAttachments ?? [];
  return a2.length || r2.length || s2.length ? { adds: a2, updates: r2, deletes: [...s2] } : null;
}
async function f(t2, e2) {
  const { feature: a2, attachment: r2 } = e2, { globalId: o2, name: n, contentType: l, data: i2, uploadId: u } = r2, d = { globalId: o2 };
  if (a2 && ("attributes" in a2 ? d.parentGlobalId = a2.attributes?.[t2.globalIdField] : a2.globalId && (d.parentGlobalId = a2.globalId)), u)
    d.uploadId = u;
  else if (i2) {
    const t3 = await Wt(i2);
    t3 && (d.contentType = t3.mediaType, d.data = t3.data), i2 instanceof File && (d.name = i2.name);
  }
  return n && (d.name = n), l && (d.contentType = l), d;
}
function g(t2, e2, a2) {
  if (!e2 || 0 === e2.length)
    return [];
  if (a2 && $$1(e2))
    return e2.map((t3) => t3.globalId);
  if (v(e2))
    return e2.map((t3) => t3.objectId);
  const r2 = a2 ? t2.globalIdField : t2.objectIdField;
  return r2 ? e2.map((t3) => t3.getAttribute(r2)) : [];
}
function b(t2) {
  const e2 = t2?.assetMaps;
  if (e2) {
    for (const t3 of e2.addResults)
      t3.success || s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t3.globalId}.`);
    for (const t3 of e2.updateResults)
      t3.success || s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t3.globalId}.`);
  }
  const r2 = t2?.attachments, s2 = { addFeatureResults: t2?.addResults?.map(R) ?? [], updateFeatureResults: t2?.updateResults?.map(R) ?? [], deleteFeatureResults: t2?.deleteResults?.map(R) ?? [], addAttachmentResults: r2?.addResults ? r2.addResults.map(R) : [], updateAttachmentResults: r2?.updateResults ? r2.updateResults.map(R) : [], deleteAttachmentResults: r2?.deleteResults ? r2.deleteResults.map(R) : [] };
  return t2?.editMoment && (s2.editMoment = t2.editMoment), s2;
}
function R(t2) {
  const a2 = true === t2.success ? null : t2.error || { code: void 0, description: void 0 };
  return { objectId: t2.objectId, globalId: t2.globalId, error: a2 ? new s("feature-layer-source:edit-failure", a2.description, { code: a2.code }) : null };
}
function y(e2, a2) {
  return new c$1({ attributes: e2.attributes, geometry: y$1({ ...e2.geometry, spatialReference: a2 }) });
}
function I(t2, e2) {
  return { adds: t2?.adds?.map((t3) => y(t3, e2)) || [], updates: t2?.updates?.map((t3) => ({ original: y(t3[0], e2), current: y(t3[1], e2) })) || [], deletes: t2?.deletes?.map((t3) => y(t3, e2)) || [], spatialReference: e2 };
}
function h(t2) {
  const e2 = t2.details.raw, a2 = +e2.code, r2 = +e2.extendedCode;
  return 500 === a2 && (-2147217144 === r2 || -2147467261 === r2);
}
const D = new s$2({ originalAndCurrentFeatures: "original-and-current-features", none: "none" }), P = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), $ = new s$2({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let V = class extends m$1 {
  constructor() {
    super(...arguments), this.type = "feature-layer", this.refresh = k(async () => {
      await this.load();
      const e2 = this.sourceJSON.editingInfo?.lastEditDate;
      if (null == e2)
        return { dataChanged: true, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: true, updates: {} };
      }
      const t2 = e2 !== this.sourceJSON.editingInfo?.lastEditDate;
      return { dataChanged: t2, updates: t2 ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    }), this._ongoingAssetUploads = /* @__PURE__ */ new Map();
  }
  load(e2) {
    const t2 = this.layer.sourceJSON, s2 = this._fetchService(t2, { ...e2 }).then(() => this.layer.setUserPrivileges(this.sourceJSON.serviceItemId, e2)).then(() => this._ensureLatestMetadata(e2));
    return this.addResolvingPromise(s2), Promise.resolve(this);
  }
  get queryTask() {
    const { capabilities: e2, parsedUrl: t2, dynamicDataSource: s2, infoFor3D: r2, gdbVersion: a2, spatialReference: i2, fieldsIndex: o2 } = this.layer, n = has("featurelayer-pbf") && e2?.query.supportsFormatPBF && null == r2, u = e2?.operations?.supportsQueryAttachments ?? false;
    return new x({ url: t2.path, pbfSupported: n, fieldsIndex: o2, infoFor3D: r2, dynamicDataSource: s2, gdbVersion: a2, sourceSpatialReference: i2, queryAttachmentsSupported: u });
  }
  async addAttachment(e2, t2) {
    await this.load();
    const { layer: r2 } = this;
    await Q(r2, "editing");
    const a2 = e2.attributes[r2.objectIdField], i2 = r2.parsedUrl.path + "/" + a2 + "/addAttachment", o2 = this._getLayerRequestOptions(), n = this._getFormDataForAttachment(t2, o2.query);
    try {
      const e3 = await U$1(i2, { body: n });
      return R(e3.data.addAttachmentResult);
    } catch (u) {
      throw this._createAttachmentErrorResult(a2, u);
    }
  }
  async updateAttachment(e2, t2, r2) {
    await this.load();
    const { layer: a2 } = this;
    await Q(a2, "editing");
    const i2 = e2.attributes[a2.objectIdField], o2 = a2.parsedUrl.path + "/" + i2 + "/updateAttachment", n = this._getLayerRequestOptions({ query: { attachmentId: t2 } }), u = this._getFormDataForAttachment(r2, n.query);
    try {
      const e3 = await U$1(o2, { body: u });
      return R(e3.data.updateAttachmentResult);
    } catch (l) {
      throw this._createAttachmentErrorResult(i2, l);
    }
  }
  async applyEdits(e2, r2) {
    await this.load();
    const { layer: o2 } = this;
    await Q(o2, "editing");
    const n = o2.infoFor3D, u = null != n, l = u || (r2?.globalIdUsed ?? false), c$12 = u ? await this._uploadMeshesAndGetAssetMapEditsJSON(e2) : null, d = e2.addFeatures?.map((e3) => p(this.layer, e3, n)) ?? [], p$1 = (await Promise.all(d)).filter(q$1), y2 = e2.updateFeatures?.map((e3) => p(this.layer, e3, n)) ?? [], h$1 = (await Promise.all(y2)).filter(q$1), m$12 = g(this.layer, e2.deleteFeatures, l);
    i(p$1, h$1, o2.spatialReference);
    const f2 = await m(this.layer, e2), g$12 = o2.capabilities.editing.supportsAsyncApplyEdits && u, w2 = r2?.gdbVersion || o2.gdbVersion, S = { gdbVersion: w2, rollbackOnFailure: r2?.rollbackOnFailureEnabled, useGlobalIds: l, returnEditMoment: r2?.returnEditMoment, usePreviousEditMoment: r2?.usePreviousEditMoment, async: g$12 };
    await i$1(this.layer.url, w2, true);
    const q = c(this.layer.url, w2 || null);
    if (await a(o2.url, w2, o2.historicMoment))
      throw new s("feature-layer-source:historic-version", "Editing a historic version is not allowed");
    r2?.returnServiceEditsOption ? (S.edits = JSON.stringify([{ id: o2.layerId, adds: p$1, updates: h$1, deletes: m$12, attachments: f2, assetMaps: c$12 }]), S.returnServiceEditsOption = D.toJSON(r2?.returnServiceEditsOption), S.returnServiceEditsInSourceSR = r2?.returnServiceEditsInSourceSR) : (S.adds = p$1.length ? JSON.stringify(p$1) : null, S.updates = h$1.length ? JSON.stringify(h$1) : null, S.deletes = m$12.length ? l ? JSON.stringify(m$12) : m$12.join(",") : null, S.attachments = f2 && JSON.stringify(f2), S.assetMaps = null != c$12 ? JSON.stringify(c$12) : void 0);
    const E = this._getLayerRequestOptions({ method: "post", query: S });
    q && (E.authMode = "immediate", E.query.returnEditMoment = true, E.query.sessionId = t);
    const F2 = r2?.returnServiceEditsOption ? o2.url : o2.parsedUrl.path;
    let _;
    try {
      _ = g$12 ? await this._asyncApplyEdits(F2 + "/applyEdits", E) : await U$1(F2 + "/applyEdits", E);
    } catch (x2) {
      if (!h(x2))
        throw x2;
      E.authMode = "immediate", _ = g$12 ? await this._asyncApplyEdits(F2 + "/applyEdits", E) : await U$1(F2 + "/applyEdits", E);
    }
    if (!o2.capabilities.operations?.supportsEditing && o2.effectiveCapabilities?.operations?.supportsEditing) {
      const e3 = t$1?.findCredential(o2.url);
      await e3?.refreshToken();
    }
    return this._createEditsResult(_);
  }
  async deleteAttachments(e2, t2) {
    await this.load();
    const { layer: r2 } = this;
    await Q(r2, "editing");
    const a2 = e2.attributes[r2.objectIdField], i2 = r2.parsedUrl.path + "/" + a2 + "/deleteAttachments";
    try {
      return (await U$1(i2, this._getLayerRequestOptions({ query: { attachmentIds: t2.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(R);
    } catch (o2) {
      throw this._createAttachmentErrorResult(a2, o2);
    }
  }
  fetchRecomputedExtents(e2 = {}) {
    const t2 = e2.signal;
    return this.load({ signal: t2 }).then(async () => {
      const t3 = this._getLayerRequestOptions({ ...e2, query: { returnUpdates: true } }), { layerId: a2, url: i2 } = this.layer, { data: o2 } = await U$1(`${i2}/${a2}`, t3), { id: n, extent: u, fullExtent: l, timeExtent: c2 } = o2, d = u || l;
      return { id: n, fullExtent: d && M.fromJSON(d), timeExtent: c2 && c$2.fromJSON({ start: c2[0], end: c2[1] }) };
    });
  }
  async queryAttachments(e2, t2 = {}) {
    await this.load();
    const s2 = this._getLayerRequestOptions(t2);
    return this.queryTask.executeAttachmentQuery(e2, s2);
  }
  async queryFeatures(e2, t2) {
    await this.load();
    const s2 = await this.queryTask.execute(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
    return e2.outStatistics?.length && s2.features.length && s2.features.forEach((t3) => {
      const s3 = t3.attributes;
      e2.outStatistics?.forEach(({ outStatisticFieldName: e3 }) => {
        if (e3) {
          const t4 = e3.toLowerCase();
          t4 && t4 in s3 && e3 !== t4 && (s3[e3] = s3[t4], delete s3[t4]);
        }
      });
    }), s2;
  }
  async queryFeaturesJSON(e2, t2) {
    return await this.load(), this.queryTask.executeJSON(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForIds(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryFeatureCount(e2, t2) {
    return await this.load(), this.queryTask.executeForCount(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryExtent(e2, t2) {
    return await this.load(), this.queryTask.executeForExtent(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryRelatedFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQuery(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryRelatedFeaturesCount(e2, t2) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryTopFeatures(e2, t2) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryTopObjectIds(e2, t2) {
    return await this.load(), this.queryTask.executeForTopIds(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryTopExtents(e2, t2) {
    return await this.load(), this.queryTask.executeForTopExtents(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async queryTopCount(e2, t2) {
    return await this.load(), this.queryTask.executeForTopCount(e2, { ...t2, query: this._createRequestQueryOptions(t2) });
  }
  async fetchPublishingStatus() {
    if (!w$1(this.layer.url))
      return "unavailable";
    const e2 = V$1(this.layer.url, "status"), t2 = await U$1(e2, { query: { f: "json" } });
    return $.fromJSON(t2.data.status);
  }
  async uploadAssets(e2, t2) {
    const { uploadAssets: s2 } = await import("./chunk-r5qIWg_m.js");
    return s2(e2, { layer: this.layer, ongoingUploads: this._ongoingAssetUploads }, t2);
  }
  async _asyncApplyEdits(e2, t2) {
    const r2 = (await U$1(e2, t2)).data.statusUrl;
    for (; ; ) {
      const e3 = (await U$1(r2, { query: { f: "json" }, responseType: "json" })).data;
      switch (e3.status) {
        case "Completed":
          return U$1(e3.resultUrl, { query: { f: "json" }, responseType: "json" });
        case "CompletedWithErrors":
          throw new s("async-applyEdits-failed", "asynchronous applyEdits call failed.");
        case "Failed ImportChanges":
        case "InProgress":
        case "Pending":
        case "ExportAttachments":
        case "ExportChanges":
        case "ExportingData":
        case "ExportingSnapshot":
        case "ImportAttachments":
        case "ProvisioningReplica":
        case "UnRegisteringReplica":
          break;
        default:
          throw new s("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
      }
      await A(G);
    }
  }
  _createRequestQueryOptions(e2) {
    const t2 = { ...this.layer.customParameters, token: this.layer.apiKey, ...e2?.query };
    return this.layer.datesInUnknownTimezone && (t2.timeReferenceUnknownClient = true), t2;
  }
  async _fetchService(e2, t2) {
    if (!e2) {
      const r3 = {};
      has("featurelayer-advanced-symbols") && (r3.returnAdvancedSymbols = true), t2?.cacheBust && (r3._ts = Date.now());
      const { data: a2 } = await U$1(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: r3, signal: t2?.signal }));
      e2 = a2;
    }
    this.sourceJSON = await this._patchServiceJSON(e2, t2?.signal);
    const r2 = e2.type;
    if (!P.has(r2))
      throw new s("feature-layer-source:unsupported-type", `Source type "${r2}" is not supported`);
  }
  async _patchServiceJSON(e2, t2) {
    if ("Table" !== e2.type && e2.geometryType && !e2?.drawingInfo?.renderer && !e2.defaultSymbol) {
      const t3 = o(e2.geometryType).renderer;
      o$1("drawingInfo.renderer", t3, e2);
    }
    if ("esriGeometryMultiPatch" === e2.geometryType && e2.infoFor3D && (e2.geometryType = "mesh"), null == e2.extent)
      try {
        const { data: r2 } = await U$1(this.layer.url, this._getLayerRequestOptions({ signal: t2 }));
        r2.spatialReference && (e2.extent = { xmin: 0, ymin: 0, xmax: 0, ymax: 0, spatialReference: r2.spatialReference });
      } catch (r2) {
        a$1(r2);
      }
    return e2;
  }
  async _ensureLatestMetadata(e2) {
    if (this.layer.userHasUpdateItemPrivileges && this.sourceJSON.cacheMaxAge > 0)
      return this._fetchService(null, { ...e2, cacheBust: true });
  }
  async _uploadMeshesAndGetAssetMapEditsJSON(e2) {
    const { addAssetFeatures: t2 } = e2;
    if (!t2?.length)
      return null;
    const s2 = await this._filterRedundantAssetMaps(t2);
    if (!t2?.length)
      return null;
    const r2 = new Array(), a2 = /* @__PURE__ */ new Map();
    for (const i2 of s2) {
      const { geometry: e3 } = i2, { vertexSpace: t3 } = e3;
      if (g$1(t3))
        r2.push(e3);
      else {
        const t4 = a$2(e3);
        a2.set(t4, e3), i2.geometry = t4, r2.push(t4);
      }
    }
    await this.uploadAssets(r2);
    for (const [i2, o2] of a2)
      o2.addExternalSources(i2.metadata.externalSources.items);
    return { adds: this._getAssetMapEditsJSON(s2), updates: [], deletes: [] };
  }
  _getAssetMapEditsJSON(e2) {
    const t2 = new Array(), s2 = this.layer.globalIdField, r$1 = this.layer.parsedUrl;
    for (const a2 of e2) {
      const e3 = a2.geometry, { metadata: i2 } = e3, o2 = i2.getExternalSourcesOnService(r$1), n = a2.getAttribute(s2);
      if (0 === o2.length) {
        s$1.getLogger(this).error(`Skipping feature ${n}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const { source: l } = o2.find(v$1) ?? o2[0];
      for (const s3 of l)
        1 === s3.parts.length ? t2.push({ globalId: r(), parentGlobalId: n, assetName: s3.assetName, assetHash: s3.parts[0].partHash, flags: [] }) : s$1.getLogger(this).error(`Skipping asset ${s3.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
    }
    return t2;
  }
  _createEditsResult(e2) {
    const t2 = e2.data, { layerId: s2 } = this.layer, r2 = [];
    let a2 = null;
    if (Array.isArray(t2))
      for (const o2 of t2)
        r2.push({ id: o2.id, editedFeatures: o2.editedFeatures }), o2.id === s2 && (a2 = { addResults: o2.addResults ?? [], updateResults: o2.updateResults ?? [], deleteResults: o2.deleteResults ?? [], attachments: o2.attachments, editMoment: o2.editMoment });
    else
      a2 = t2;
    const i2 = b(a2);
    if (r2.length > 0) {
      i2.editedFeatureResults = [];
      for (const e3 of r2) {
        const { editedFeatures: t3 } = e3, s3 = t3?.spatialReference ? new f$1(t3.spatialReference) : null;
        i2.editedFeatureResults.push({ layerId: e3.id, editedFeatures: I(t3, s3) });
      }
    }
    return i2;
  }
  _createAttachmentErrorResult(e2, t2) {
    const s$12 = t2.details.messages?.[0] || t2.message, r2 = t2.details.httpStatus || t2.details.messageCode;
    return { objectId: e2, globalId: null, error: new s("feature-layer-source:attachment-failure", s$12, { code: r2 }) };
  }
  _getFormDataForAttachment(e2, t2) {
    const s2 = e2 instanceof FormData ? e2 : e2 && e2.elements ? new FormData(e2) : null;
    if (s2)
      for (const r2 in t2) {
        const e3 = t2[r2];
        null != e3 && (s2.set ? s2.set(r2, e3) : s2.append(r2, e3));
      }
    return s2;
  }
  _getLayerRequestOptions(e2 = {}) {
    const { parsedUrl: t2, gdbVersion: s2, dynamicDataSource: r2 } = this.layer;
    return { ...e2, query: { gdbVersion: s2, layer: r2 ? JSON.stringify({ source: r2 }) : void 0, ...t2.query, f: "json", ...this._createRequestQueryOptions(e2) }, responseType: "json" };
  }
  async _filterRedundantAssetMaps(e2) {
    const { layer: t2 } = this, { globalIdField: s2, infoFor3D: r2, parsedUrl: i2 } = t2;
    if (null == r2 || null == s2)
      return e2;
    const o2 = F(r2);
    if (null == o2)
      return e2;
    const n = V$1(i2.path, `../${o2.id}`), u = new Array(), l = new Array();
    for (const a2 of e2)
      a2.geometry.metadata.getExternalSourcesOnService(i2).length > 0 ? l.push(a2) : u.push(a2);
    const c2 = l.map((e3) => e3.getAttribute(s2)).filter(q$1);
    if (0 === c2.length)
      return e2;
    const { assetMapFieldRoles: { parentGlobalId: d, assetHash: p2 } } = r2, h2 = new b$1();
    h2.where = `${d} IN (${c2.map((e3) => `'${e3}'`)})`, h2.outFields = [p2, d], h2.returnGeometry = false;
    const m2 = await s$3(n, h2), { features: f2 } = m2;
    return 0 === f2.length ? e2 : [...u, ...l.filter((e3) => {
      const t3 = e3.getAttribute(s2);
      if (!t3)
        return true;
      const { metadata: r3 } = e3.geometry, a2 = f2.filter((e4) => e4.getAttribute(d) === t3);
      if (0 === a2.length)
        return true;
      const o3 = a2.map((e4) => e4.getAttribute(p2));
      return r3.getExternalSourcesOnService(i2).flatMap(({ source: e4 }) => e4.flatMap((e5) => e5.parts.map((e6) => e6.partHash))).some((e4) => o3.every((t4) => e4 !== t4));
    })];
  }
};
e([y$2()], V.prototype, "type", void 0), e([y$2({ constructOnly: true })], V.prototype, "layer", void 0), e([y$2({ readOnly: true })], V.prototype, "queryTask", null), V = e([c$3("esri.layers.graphics.sources.FeatureLayerSource")], V);
const G = 1e3, H = V;
export {
  H as default
};
