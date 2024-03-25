import { bA as p, bB as h, bC as L$1, bD as a, aO as s, bE as B$1, bF as O$1, aT as s$1, bG as ot, bH as r, bI as R$1, bJ as c$1, bK as u, bL as i, bM as Te, bN as A$1, bO as G$1, bP as C, b9 as w, bQ as V$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function F(e) {
  return null != e?.applyEdits;
}
function A(e) {
  return "object" == typeof e && null != e && "objectId" in e && !!e.objectId;
}
function v(e) {
  return e.every(A);
}
function I(e) {
  return "object" == typeof e && null != e && "globalId" in e && !!e.globalId;
}
function $(e) {
  return e.every(I);
}
async function E(e, t, a$1, s2 = {}) {
  let n;
  const o = "gdbVersion" in e ? e.gdbVersion : null, l = s2.gdbVersion ?? o;
  if (p(e) && e.url)
    n = h(e.url, e.layerId, l, "original-and-current-features" === s2.returnServiceEditsOption);
  else {
    n = L$1(), n.promise.then((t3) => {
      (t3.addedFeatures.length || t3.updatedFeatures.length || t3.deletedFeatures.length || t3.addedAttachments.length || t3.updatedAttachments.length || t3.deletedAttachments.length) && e.emit("edits", t3);
    });
    const t2 = { result: n.promise };
    e.emit("apply-edits", t2);
  }
  try {
    const { results: i2, edits: o2 } = await S(e, t, a$1, s2), l2 = (e2) => e2.filter((e3) => !e3.error).map(a), d = { edits: o2, addedFeatures: l2(i2.addFeatureResults), updatedFeatures: l2(i2.updateFeatureResults), deletedFeatures: l2(i2.deleteFeatureResults), addedAttachments: l2(i2.addAttachmentResults), updatedAttachments: l2(i2.updateAttachmentResults), deletedAttachments: l2(i2.deleteAttachmentResults), exceededTransferLimit: false, historicMoment: i2.editMoment ? new Date(i2.editMoment) : null, globalIdToObjectId: s2.globalIdToObjectId };
    return i2.editedFeatureResults?.length && (d.editedFeatures = i2.editedFeatureResults), n.resolve(d), i2;
  } catch (d) {
    throw n.reject(d), d;
  }
}
async function S(e, t, r2, s$12) {
  if (await e.load(), !F(t))
    throw new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!B$1(e))
    throw new s(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
  const { edits: i2, options: n } = await R(e, r2, s$12);
  return i2.addFeatures?.length || i2.updateFeatures?.length || i2.deleteFeatures?.length || i2.addAttachments?.length || i2.updateAttachments?.length || i2.deleteAttachments?.length ? { edits: i2, results: await t.applyEdits(i2, n) } : { edits: i2, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function R(e, t, r2) {
  const i2 = O$1(e), n = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), o = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments), l = null != e.infoFor3D;
  if (M(t, i2, r2, !!n, !!o, `${e.type}-layer`), !i2.data.isVersioned && r2?.gdbVersion)
    throw new s(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!i2.editing.supportsRollbackOnFailure && r2?.rollbackOnFailureEnabled)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  const d = { ...r2 };
  if (null != d.rollbackOnFailureEnabled || i2.editing.supportsRollbackOnFailure || (d.rollbackOnFailureEnabled = true), d.rollbackOnFailureEnabled || "original-and-current-features" !== d.returnServiceEditsOption || (false === d.rollbackOnFailureEnabled && s$1.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."), d.rollbackOnFailureEnabled = true), !i2.editing.supportsReturnServiceEditsInSourceSpatialReference && d.returnServiceEditsInSourceSR)
    throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (d.returnServiceEditsInSourceSR && "original-and-current-features" !== d.returnServiceEditsOption)
    throw new s(`${e.type}-layer:invalid-parameter`, "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const u2 = V(t, i2, `${e.type}-layer`), p2 = r2?.globalIdUsed || l, c = e.fields.filter((e2) => "big-integer" === e2.type || "oid" === e2.type && (e2.length || 0) >= 8);
  if (p2) {
    const { globalIdField: t2 } = e;
    if (null == t2)
      throw new s(`${e.type}-layer:invalid-parameter`, "Layer does not specify a global id field.");
    u2.addFeatures.forEach((e2) => T(e2, t2));
  }
  u2.addFeatures.forEach((t2) => U(t2, e, p2, c)), u2.updateFeatures.forEach((t2) => L(t2, e, p2, c)), u2.deleteFeatures.forEach((t2) => k(t2, e, p2, c)), u2.addAttachments.forEach((t2) => B(t2, e)), u2.updateAttachments.forEach((t2) => B(t2, e)), l && await z(u2, e);
  return { edits: await D(u2), options: d };
}
function j(e, t, r2, s$12) {
  if (r2) {
    if ("attributes" in e && !e.attributes[t.globalIdField])
      throw new s(`${t.type}-layer:invalid-parameter`, `Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);
    if (!("attributes" in e) && !e.globalId)
      throw new s(`${t.type}-layer:invalid-parameter`, "`'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if (s$12.length && "attributes" in e)
    for (const i2 of s$12) {
      const r3 = e.attributes[i2.name];
      if (void 0 !== r3 && !Te(i2, r3))
        throw new s(`${t.type}-layer:invalid-parameter`, `Big-integer field '${i2.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`, { feature: e });
    }
  if ("geometry" in e && null != e.geometry) {
    if (e.geometry.hasZ && false === t.capabilities?.data.supportsZ)
      throw new s(`${t.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && false === t.capabilities?.data.supportsM)
      throw new s(`${t.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function O(e, t) {
  if ("geometry" in e && "mesh" === e.geometry?.type && null != t.infoFor3D && null != t.spatialReference) {
    const { geometry: r2 } = e, { spatialReference: s$12, vertexSpace: i2 } = r2, n = t.spatialReference, o = "local" === i2.type, l = A$1(n), h2 = G$1(n, s$12), m = h2 || C(n) && (C(s$12) || w(s$12));
    if (!(o && l && m || !o && !l && h2))
      throw new s(`${t.type}-layer:mesh-unsupported`, `Uploading a mesh with a ${i2.type} vertex space and a spatial reference wkid:${s$12.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`);
  }
}
function U(e, t, a2, r2) {
  j(e, t, a2, r2), O(e, t);
}
function k(e, t, a2, r2) {
  j(e, t, a2, r2);
}
function L(e, t, r2, s$12) {
  j(e, t, r2, s$12), O(e, t);
  const i2 = O$1(t);
  if ("geometry" in e && null != e.geometry && !i2?.editing.supportsGeometryUpdate)
    throw new s(`${t.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function B(e, t) {
  const { feature: r2, attachment: s$12 } = e;
  if (!r2 || "attributes" in r2 && !r2.attributes[t.globalIdField])
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r2) && !r2.globalId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!s$12.globalId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!s$12.data && !s$12.uploadId)
    throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(s$12.data instanceof File && !!s$12.data.name) && !s$12.name)
    throw new s(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t.capabilities?.editing.supportsUploadWithItemId && s$12.uploadId)
    throw new s(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if ("string" == typeof s$12.data) {
    const e2 = ot(s$12.data);
    if (e2 && !e2.isBase64)
      throw new s(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function T(e, t) {
  const { attributes: a2 } = e;
  null == a2[t] && (a2[t] = r());
}
async function D(e) {
  const t = e.addFeatures ?? [], a2 = e.updateFeatures ?? [], r2 = t.concat(a2).map((e2) => e2.geometry), s2 = await R$1(r2), i2 = t.length, n = a2.length;
  return s2.slice(0, i2).forEach((e2, a3) => t[a3].geometry = e2), s2.slice(i2, i2 + n).forEach((e2, t2) => a2[t2].geometry = e2), e;
}
function G(e) {
  return { addFeatures: Array.from(e?.addFeatures ?? []), updateFeatures: Array.from(e?.updateFeatures ?? []), deleteFeatures: e && V$1.isCollection(e.deleteFeatures) ? e.deleteFeatures.toArray() : e.deleteFeatures || [], addAttachments: e.addAttachments || [], updateAttachments: e.updateAttachments || [], deleteAttachments: e.deleteAttachments || [] };
}
function V(e, t, r2) {
  const s$12 = G(e);
  if (s$12.addFeatures?.length && !t.operations.supportsAdd)
    throw new s(`${r2}:unsupported-operation`, "Layer does not support adding features.");
  if (s$12.updateFeatures?.length && !t.operations.supportsUpdate)
    throw new s(`${r2}:unsupported-operation`, "Layer does not support updating features.");
  if (s$12.deleteFeatures?.length && !t.operations.supportsDelete)
    throw new s(`${r2}:unsupported-operation`, "Layer does not support deleting features.");
  return s$12.addFeatures = s$12.addFeatures.map(x), s$12.updateFeatures = s$12.updateFeatures.map(x), s$12.addAssetFeatures = [], s$12;
}
function M(e, t, r2, s$12, i2, n) {
  if (!e || !s$12 && !i2)
    throw new s(`${n}:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!t.editing.supportsGlobalId && r2?.globalIdUsed)
    throw new s(`${n}:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!t.editing.supportsGlobalId && i2)
    throw new s(`${n}:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if (!r2?.globalIdUsed && i2)
    throw new s(`${n}:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
}
function x(t) {
  const a2 = new c$1();
  return t.attributes || (t.attributes = {}), a2.geometry = t.geometry, a2.attributes = t.attributes, a2;
}
async function z(e, t) {
  if (null == t.infoFor3D)
    return;
  const { infoFor3D: r2 } = t, s$12 = u("model/gltf-binary", r2.supportedFormats) ?? i("glb", r2.supportedFormats);
  if (!(!!s$12 && r2.editFormats.includes(s$12)))
    throw new s(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  e.addAssetFeatures ??= [];
  const { addAssetFeatures: i$1 } = e;
  for (const a2 of e.addFeatures ?? [])
    q(a2) && i$1.push(a2);
  for (const a2 of e.updateFeatures ?? [])
    q(a2) && i$1.push(a2);
}
function q(e) {
  return "mesh" === e?.geometry?.type;
}
function W(e, t, r2, s$12) {
  if (!F(t))
    throw new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!t.uploadAssets)
    throw new s(`${e.type}-layer:no-asset-upload-support`, "Layer source does not support uploadAssets capability", { layer: e });
  return t.uploadAssets(r2, s$12);
}
export {
  E as applyEdits,
  M as checkEditingCapabilities,
  $ as isFeatureIdentifierArrayWithGlobalId,
  v as isFeatureIdentifierArrayWithObjectId,
  I as isFeatureIdentifierWithGlobalId,
  A as isFeatureIdentifierWithObjectId,
  G as normalizeCollections,
  V as normalizeEdits,
  D as normalizeGeometries,
  x as shallowCloneFeature,
  W as uploadAssets
};
