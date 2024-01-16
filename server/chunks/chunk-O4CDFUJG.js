import { lk as q$1, ll as m$1, lm as r, hy as e$1, c2 as F, de as b$1, ln as V$1, lo as Wt, bb as s$1, aM as s$2, bf as c$1, cw as p$1, c7 as s$3, bo as e, bp as y, iv as m$2, ej as k, aq as has, lp as x, jE as Q$1, a$ as j, bX as k$1, lq as i, lr as s$4, ls as a, lt as r$1, cS as t, ap as M$1, lu as c$2, lv as w, fN as V$2, lw as A, dl as o, db as o$1, cq as a$1, bd as r$2, cZ as f$1, lx as F$2, bQ as b$3, ly as s$5, br as c$3 } from "./chunk-KFNcxJaF.js";
import { v } from "./chunk-_FX4l1J_.js";
import { isFeatureIdentifierArrayWithGlobalId as F$1, isFeatureIdentifierArrayWithObjectId as b$2 } from "./chunk-aRhgGRmj.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function n(t2) {
  const { vertexSpace: n2 } = t2;
  if (n2.isRelative)
    return t2.clone();
  const { anchor: i2 } = t2, c2 = i2.clone(), a2 = q$1(s, [-c2.x, -c2.y, -c2.z]), m2 = new m$1({ origin: [c2.x, c2.y, c2.z] }), p2 = t2.cloneWithVertexSpace(m2), { position: u2 } = p2.vertexAttributes;
  return p2.vertexAttributes.position = r(new Float64Array(u2.length), u2, a2), p2.vertexAttributesChanged(), p2;
}
const s = e$1();
async function u(e2, t2, a2) {
  const { geometry: s2 } = t2, l = { ...t2.attributes };
  if (null != a2 && "mesh" === s2?.type) {
    const { transformFieldRoles: t3 } = a2, { origin: i2, spatialReference: d, transform: u2 } = s2, c2 = e2.spatialReference;
    await F(d, c2);
    const p2 = b$1(i2, c2);
    if (l[t3.originX] = p2.x, l[t3.originY] = p2.y, l[t3.originZ] = p2.z ?? 0, null != u2) {
      const { translation: e3, scale: a3, rotation: o2 } = u2, { vertexSpace: n2 } = s2, i3 = n2.isGeoreferenced ? 1 : V$1(d) / V$1(c2);
      l[t3.translationX] = e3[0] * i3, l[t3.translationY] = e3[2] * i3, l[t3.translationZ] = -e3[1] * i3, l[t3.scaleX] = a3[0], l[t3.scaleY] = a3[2], l[t3.scaleZ] = a3[1], l[t3.rotationX] = o2[0], l[t3.rotationY] = o2[2], l[t3.rotationZ] = -o2[1], l[t3.rotationDeg] = o2[3];
    }
    return { attributes: l };
  }
  return null == s2 ? { attributes: l } : "mesh" === s2.type || "extent" === s2.type ? null : { geometry: s2.toJSON(), attributes: l };
}
async function c(e2, t2) {
  const a2 = await Promise.all((t2.addAttachments ?? []).map((t3) => p(e2, t3))), r2 = await Promise.all((t2.updateAttachments ?? []).map((t3) => p(e2, t3))), s2 = t2.deleteAttachments ?? [];
  return a2.length || r2.length || s2.length ? { adds: a2, updates: r2, deletes: [...s2] } : null;
}
async function p(e2, t2) {
  const { feature: a2, attachment: r2 } = t2, { globalId: o2, name: n2, contentType: l, data: i2, uploadId: d } = r2, u2 = { globalId: o2 };
  if (a2 && ("attributes" in a2 ? u2.parentGlobalId = a2.attributes?.[e2.globalIdField] : a2.globalId && (u2.parentGlobalId = a2.globalId)), d)
    u2.uploadId = d;
  else if (i2) {
    const e3 = await Wt(i2);
    e3 && (u2.contentType = e3.mediaType, u2.data = e3.data), i2 instanceof File && (u2.name = i2.name);
  }
  return n2 && (u2.name = n2), l && (u2.contentType = l), u2;
}
function m(e2, t2, a2) {
  if (!t2 || 0 === t2.length)
    return [];
  if (a2 && F$1(t2))
    return t2.map((e3) => e3.globalId);
  if (b$2(t2))
    return t2.map((e3) => e3.objectId);
  const r2 = a2 ? e2.globalIdField : e2.objectIdField;
  return r2 ? t2.map((e3) => e3.getAttribute(r2)) : [];
}
function f(e2) {
  const t2 = e2?.assetMaps;
  if (t2) {
    for (const e3 of t2.addResults)
      e3.success || s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e3.globalId}.`);
    for (const e3 of t2.updateResults)
      e3.success || s$1.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e3.globalId}.`);
  }
  const r2 = e2?.attachments, s2 = { addFeatureResults: e2?.addResults?.map(g) ?? [], updateFeatureResults: e2?.updateResults?.map(g) ?? [], deleteFeatureResults: e2?.deleteResults?.map(g) ?? [], addAttachmentResults: r2?.addResults ? r2.addResults.map(g) : [], updateAttachmentResults: r2?.updateResults ? r2.updateResults.map(g) : [], deleteAttachmentResults: r2?.deleteResults ? r2.deleteResults.map(g) : [] };
  return e2?.editMoment && (s2.editMoment = e2.editMoment), s2;
}
function g(e2) {
  const a2 = true === e2.success ? null : e2.error || { code: void 0, description: void 0 };
  return { objectId: e2.objectId, globalId: e2.globalId, error: a2 ? new s$2("feature-layer-source:edit-failure", a2.description, { code: a2.code }) : null };
}
function b(t2, a2) {
  return new c$1({ attributes: t2.attributes, geometry: p$1({ ...t2.geometry, spatialReference: a2 }) });
}
function R(e2, t2) {
  return { adds: e2?.adds?.map((e3) => b(e3, t2)) || [], updates: e2?.updates?.map((e3) => ({ original: b(e3[0], t2), current: b(e3[1], t2) })) || [], deletes: e2?.deletes?.map((e3) => b(e3, t2)) || [], spatialReference: t2 };
}
function I(e2) {
  const t2 = e2.details.raw, a2 = +t2.code, r2 = +t2.extendedCode;
  return 500 === a2 && (-2147217144 === r2 || -2147467261 === r2);
}
const L = new s$3({ originalAndCurrentFeatures: "original-and-current-features", none: "none" }), Q = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table"]), D = new s$3({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
let P = class extends m$2 {
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
    const { capabilities: e2, parsedUrl: t2, dynamicDataSource: s2, infoFor3D: r2, gdbVersion: a2, spatialReference: i2, fieldsIndex: o2 } = this.layer, n2 = has("featurelayer-pbf") && e2?.query.supportsFormatPBF && null == r2, u2 = e2?.operations?.supportsQueryAttachments ?? false;
    return new x({ url: t2.path, pbfSupported: n2, fieldsIndex: o2, infoFor3D: r2, dynamicDataSource: s2, gdbVersion: a2, sourceSpatialReference: i2, queryAttachmentsSupported: u2 });
  }
  async addAttachment(e2, t2) {
    await this.load();
    const { layer: r2 } = this;
    await Q$1(r2, "editing");
    const a2 = e2.attributes[r2.objectIdField], i2 = r2.parsedUrl.path + "/" + a2 + "/addAttachment", o2 = this._getLayerRequestOptions(), n2 = this._getFormDataForAttachment(t2, o2.query);
    try {
      const e3 = await j(i2, { body: n2 });
      return g(e3.data.addAttachmentResult);
    } catch (u2) {
      throw this._createAttachmentErrorResult(a2, u2);
    }
  }
  async updateAttachment(e2, t2, r2) {
    await this.load();
    const { layer: a2 } = this;
    await Q$1(a2, "editing");
    const i2 = e2.attributes[a2.objectIdField], o2 = a2.parsedUrl.path + "/" + i2 + "/updateAttachment", n2 = this._getLayerRequestOptions({ query: { attachmentId: t2 } }), u2 = this._getFormDataForAttachment(r2, n2.query);
    try {
      const e3 = await j(o2, { body: u2 });
      return g(e3.data.updateAttachmentResult);
    } catch (l) {
      throw this._createAttachmentErrorResult(i2, l);
    }
  }
  async applyEdits(e2, r2) {
    await this.load();
    const { layer: i$1 } = this;
    await Q$1(i$1, "editing");
    const o2 = i$1.infoFor3D, n2 = null != o2, u$1 = n2 || (r2?.globalIdUsed ?? false), l = n2 ? await this._uploadMeshesAndGetAssetMapEditsJSON(e2) : null, c$12 = e2.addFeatures?.map((e3) => u(this.layer, e3, o2)) ?? [], d = (await Promise.all(c$12)).filter(k$1), p2 = e2.updateFeatures?.map((e3) => u(this.layer, e3, o2)) ?? [], y2 = (await Promise.all(p2)).filter(k$1), h = m(this.layer, e2.deleteFeatures, u$1);
    i(d, y2, i$1.spatialReference);
    const m$12 = await c(this.layer, e2), f2 = i$1.capabilities.editing.supportsAsyncApplyEdits && n2, g2 = r2?.gdbVersion || i$1.gdbVersion, S = { gdbVersion: g2, rollbackOnFailure: r2?.rollbackOnFailureEnabled, useGlobalIds: u$1, returnEditMoment: r2?.returnEditMoment, usePreviousEditMoment: r2?.usePreviousEditMoment, async: f2 };
    await s$4(this.layer.url, g2, true);
    const w2 = a(this.layer.url, g2 || null);
    r2?.returnServiceEditsOption ? (S.edits = JSON.stringify([{ id: i$1.layerId, adds: d, updates: y2, deletes: h, attachments: m$12, assetMaps: l }]), S.returnServiceEditsOption = L.toJSON(r2?.returnServiceEditsOption), S.returnServiceEditsInSourceSR = r2?.returnServiceEditsInSourceSR) : (S.adds = d.length ? JSON.stringify(d) : null, S.updates = y2.length ? JSON.stringify(y2) : null, S.deletes = h.length ? u$1 ? JSON.stringify(h) : h.join(",") : null, S.attachments = m$12 && JSON.stringify(m$12), S.assetMaps = null != l ? JSON.stringify(l) : void 0);
    const q = this._getLayerRequestOptions({ method: "post", query: S });
    w2 && (q.authMode = "immediate", q.query.returnEditMoment = true, q.query.sessionId = r$1);
    const A2 = r2?.returnServiceEditsOption ? i$1.url : i$1.parsedUrl.path;
    let F2;
    try {
      F2 = f2 ? await this._asyncApplyEdits(A2 + "/applyEdits", q) : await j(A2 + "/applyEdits", q);
    } catch (_) {
      if (!I(_))
        throw _;
      q.authMode = "immediate", F2 = f2 ? await this._asyncApplyEdits(A2 + "/applyEdits", q) : await j(A2 + "/applyEdits", q);
    }
    if (!i$1.capabilities.operations?.supportsEditing && i$1.effectiveCapabilities?.operations?.supportsEditing) {
      const e3 = t?.findCredential(i$1.url);
      await e3?.refreshToken();
    }
    return this._createEditsResult(F2);
  }
  async deleteAttachments(e2, t2) {
    await this.load();
    const { layer: r2 } = this;
    await Q$1(r2, "editing");
    const a2 = e2.attributes[r2.objectIdField], i2 = r2.parsedUrl.path + "/" + a2 + "/deleteAttachments";
    try {
      return (await j(i2, this._getLayerRequestOptions({ query: { attachmentIds: t2.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(g);
    } catch (o2) {
      throw this._createAttachmentErrorResult(a2, o2);
    }
  }
  fetchRecomputedExtents(e2 = {}) {
    const t2 = e2.signal;
    return this.load({ signal: t2 }).then(async () => {
      const t3 = this._getLayerRequestOptions({ ...e2, query: { returnUpdates: true } }), { layerId: a2, url: i2 } = this.layer, { data: o2 } = await j(`${i2}/${a2}`, t3), { id: n2, extent: u2, fullExtent: l, timeExtent: c2 } = o2, d = u2 || l;
      return { id: n2, fullExtent: d && M$1.fromJSON(d), timeExtent: c2 && c$2.fromJSON({ start: c2[0], end: c2[1] }) };
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
    if (!w(this.layer.url))
      return "unavailable";
    const e2 = V$2(this.layer.url, "status"), t2 = await j(e2, { query: { f: "json" } });
    return D.fromJSON(t2.data.status);
  }
  async uploadAssets(e2, t2) {
    const { uploadAssets: s2 } = await import("./chunk-LXZjv0sy.js");
    return s2(e2, { layer: this.layer, ongoingUploads: this._ongoingAssetUploads }, t2);
  }
  async _asyncApplyEdits(e2, t2) {
    const r2 = (await j(e2, t2)).data.statusUrl;
    for (; ; ) {
      const e3 = (await j(r2, { query: { f: "json" }, responseType: "json" })).data;
      switch (e3.status) {
        case "Completed":
          return j(e3.resultUrl, { query: { f: "json" }, responseType: "json" });
        case "CompletedWithErrors":
          throw new s$2("async-applyEdits-failed", "asynchronous applyEdits call failed.");
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
          throw new s$2("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
      }
      await A(V);
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
      const { data: a2 } = await j(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: r3, signal: t2?.signal }));
      e2 = a2;
    }
    this.sourceJSON = await this._patchServiceJSON(e2, t2?.signal);
    const r2 = e2.type;
    if (!Q.has(r2))
      throw new s$2("feature-layer-source:unsupported-type", `Source type "${r2}" is not supported`);
  }
  async _patchServiceJSON(e2, t2) {
    if ("Table" !== e2.type && e2.geometryType && !e2?.drawingInfo?.renderer && !e2.defaultSymbol) {
      const t3 = o(e2.geometryType).renderer;
      o$1("drawingInfo.renderer", t3, e2);
    }
    if ("esriGeometryMultiPatch" === e2.geometryType && e2.infoFor3D && (e2.geometryType = "mesh"), null == e2.extent)
      try {
        const { data: r2 } = await j(this.layer.url, this._getLayerRequestOptions({ signal: t2 }));
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
      if (t3.isRelative)
        r2.push(e3);
      else {
        const t4 = n(e3);
        a2.set(t4, e3), i2.geometry = t4, r2.push(t4);
      }
    }
    await this.uploadAssets(r2);
    for (const [i2, o2] of a2)
      o2.addExternalSources(i2.metadata.externalSources.items);
    return { adds: this._getAssetMapEditsJSON(s2), updates: [], deletes: [] };
  }
  _getAssetMapEditsJSON(e2) {
    const t2 = new Array(), s2 = this.layer.globalIdField, r2 = this.layer.parsedUrl;
    for (const a2 of e2) {
      const e3 = a2.geometry, { metadata: i2 } = e3, o2 = i2.getExternalSourcesOnService(r2), n2 = a2.getAttribute(s2);
      if (0 === o2.length) {
        s$1.getLogger(this).error(`Skipping feature ${n2}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const { source: l } = o2.find(v) ?? o2[0], { vertexSpace: c2 } = e3, d = c2.isGeoreferenced ? ["PROJECT_VERTICES"] : [];
      for (const s3 of l)
        1 === s3.parts.length ? t2.push({ globalId: r$2(), parentGlobalId: n2, assetName: s3.assetName, assetHash: s3.parts[0].partHash, flags: d }) : s$1.getLogger(this).error(`Skipping asset ${s3.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
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
    const i2 = f(a2);
    if (r2.length > 0) {
      i2.editedFeatureResults = [];
      for (const e3 of r2) {
        const { editedFeatures: t3 } = e3, s3 = t3?.spatialReference ? new f$1(t3.spatialReference) : null;
        i2.editedFeatureResults.push({ layerId: e3.id, editedFeatures: R(t3, s3) });
      }
    }
    return i2;
  }
  _createAttachmentErrorResult(e2, t2) {
    const s2 = t2.details.messages?.[0] || t2.message, r2 = t2.details.httpStatus || t2.details.messageCode;
    return { objectId: e2, globalId: null, error: new s$2("feature-layer-source:attachment-failure", s2, { code: r2 }) };
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
    const o2 = F$2(r2);
    if (null == o2)
      return e2;
    const n2 = V$2(i2.path, `../${o2.id}`), u2 = new Array(), l = new Array();
    for (const a2 of e2)
      a2.geometry.metadata.getExternalSourcesOnService(i2).length > 0 ? l.push(a2) : u2.push(a2);
    const c2 = l.map((e3) => e3.getAttribute(s2)).filter(k$1);
    if (0 === c2.length)
      return e2;
    const { assetMapFieldRoles: { parentGlobalId: d, assetHash: p2 } } = r2, h = new b$3();
    h.where = `${d} IN (${c2.map((e3) => `'${e3}'`)})`, h.outFields = [p2, d], h.returnGeometry = false;
    const m2 = await s$5(n2, h), { features: f2 } = m2;
    return 0 === f2.length ? e2 : [...u2, ...l.filter((e3) => {
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
e([y()], P.prototype, "type", void 0), e([y({ constructOnly: true })], P.prototype, "layer", void 0), e([y({ readOnly: true })], P.prototype, "queryTask", null), P = e([c$3("esri.layers.graphics.sources.FeatureLayerSource")], P);
const V = 1e3, $ = P;
export {
  $ as default
};
