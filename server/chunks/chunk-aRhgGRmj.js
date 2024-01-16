import { b5 as p, b6 as c, b7 as C$1, b8 as a$1, aM as s$1, b9 as O$1, ba as x, bb as s$2, bc as ot, bd as r, be as R$1, bf as c$1, b3 as u, b4 as i, bg as Te, bh as V$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function y(e) {
  return null != e?.applyEdits;
}
function g(e) {
  return "object" == typeof e && null != e && "objectId" in e && !!e.objectId;
}
function b(e) {
  return e.every(g);
}
function w(e) {
  return "object" == typeof e && null != e && "globalId" in e && !!e.globalId;
}
function F(e) {
  return e.every(w);
}
async function A(e, t, a, s = {}) {
  let i2;
  const n = "gdbVersion" in e ? e.gdbVersion : null, d = s.gdbVersion ?? n;
  if (p(e) && e.url)
    i2 = c(e.url, e.layerId, d, "original-and-current-features" === s.returnServiceEditsOption);
  else {
    i2 = C$1(), i2.promise.then((t3) => {
      (t3.addedFeatures.length || t3.updatedFeatures.length || t3.deletedFeatures.length || t3.addedAttachments.length || t3.updatedAttachments.length || t3.deletedAttachments.length) && e.emit("edits", t3);
    });
    const t2 = { result: i2.promise };
    e.emit("apply-edits", t2);
  }
  try {
    const { results: o, edits: n2 } = await v(e, t, a, s), d2 = (e2) => e2.filter((e3) => !e3.error).map(a$1), l = { edits: n2, addedFeatures: d2(o.addFeatureResults), updatedFeatures: d2(o.updateFeatureResults), deletedFeatures: d2(o.deleteFeatureResults), addedAttachments: d2(o.addAttachmentResults), updatedAttachments: d2(o.updateAttachmentResults), deletedAttachments: d2(o.deleteAttachmentResults), exceededTransferLimit: false, historicMoment: o.editMoment ? new Date(o.editMoment) : null, globalIdToObjectId: s.globalIdToObjectId };
    return o.editedFeatureResults?.length && (l.editedFeatures = o.editedFeatureResults), i2.resolve(l), o;
  } catch (p2) {
    throw i2.reject(p2), p2;
  }
}
async function v(e, t, r2, s) {
  if (await e.load(), !y(t))
    throw new s$1(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!O$1(e))
    throw new s$1(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
  const { edits: o, options: i2 } = await I(e, r2, s);
  return o.addFeatures?.length || o.updateFeatures?.length || o.deleteFeatures?.length || o.addAttachments?.length || o.updateAttachments?.length || o.deleteAttachments?.length ? { edits: o, results: await t.applyEdits(o, i2) } : { edits: o, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function I(e, t, r2) {
  const o = x(e), i2 = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), n = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments), d = null != e.infoFor3D;
  if (T(t, o, r2, !!i2, !!n, `${e.type}-layer`), !o.data.isVersioned && r2?.gdbVersion)
    throw new s$1(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!o.editing.supportsRollbackOnFailure && r2?.rollbackOnFailureEnabled)
    throw new s$1(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  const l = { ...r2 };
  if (null != l.rollbackOnFailureEnabled || o.editing.supportsRollbackOnFailure || (l.rollbackOnFailureEnabled = true), l.rollbackOnFailureEnabled || "original-and-current-features" !== l.returnServiceEditsOption || (false === l.rollbackOnFailureEnabled && s$2.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."), l.rollbackOnFailureEnabled = true), !o.editing.supportsReturnServiceEditsInSourceSpatialReference && l.returnServiceEditsInSourceSR)
    throw new s$1(`${e.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (l.returnServiceEditsInSourceSR && "original-and-current-features" !== l.returnServiceEditsOption)
    throw new s$1(`${e.type}-layer:invalid-parameter`, "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const u2 = B(t, o, `${e.type}-layer`), p2 = r2?.globalIdUsed || d, c2 = e.fields.filter((e2) => "big-integer" === e2.type || "oid" === e2.type && (e2.length || 0) >= 8);
  if (p2) {
    const { globalIdField: t2 } = e;
    if (null == t2)
      throw new s$1(`${e.type}-layer:invalid-parameter`, "Layer does not specify a global id field.");
    u2.addFeatures.forEach((e2) => U(e2, t2));
  }
  u2.addFeatures.forEach((t2) => S(t2, e, p2, c2)), u2.updateFeatures.forEach((t2) => j(t2, e, p2, c2)), u2.deleteFeatures.forEach((t2) => R(t2, e, p2, c2)), u2.addAttachments.forEach((t2) => O(t2, e)), u2.updateAttachments.forEach((t2) => O(t2, e)), d && await G(u2, e);
  return { edits: await L(u2), options: l };
}
function $(e, t, r2, s) {
  if (r2) {
    if ("attributes" in e && !e.attributes[t.globalIdField])
      throw new s$1(`${t.type}-layer:invalid-parameter`, `Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);
    if (!("attributes" in e) && !e.globalId)
      throw new s$1(`${t.type}-layer:invalid-parameter`, "`'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if (s.length && "attributes" in e)
    for (const o of s) {
      const r3 = e.attributes[o.name];
      if (void 0 !== r3 && !Te(o, r3))
        throw new s$1(`${t.type}-layer:invalid-parameter`, `Big-integer field '${o.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`, { feature: e });
    }
  if ("geometry" in e && null != e.geometry) {
    if (e.geometry.hasZ && false === t.capabilities?.data.supportsZ)
      throw new s$1(`${t.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && false === t.capabilities?.data.supportsM)
      throw new s$1(`${t.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function E(e, t) {
  if ("geometry" in e && "mesh" === e.geometry?.type && null != t.infoFor3D) {
    const { geometry: r2 } = e;
    if (r2.vertexSpace.isGeoreferenced)
      throw new s$1(`${t.type}-layer:georeferenced-mesh-unsupported`, "Uploading georeferenced meshes to a layer is not supported.");
  }
}
function S(e, t, a, r2) {
  $(e, t, a, r2), E(e, t);
}
function R(e, t, a, r2) {
  $(e, t, a, r2);
}
function j(e, t, r2, s) {
  $(e, t, r2, s), E(e, t);
  const o = x(t);
  if ("geometry" in e && null != e.geometry && !o?.editing.supportsGeometryUpdate)
    throw new s$1(`${t.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function O(e, t) {
  const { feature: r2, attachment: s } = e;
  if (!r2 || "attributes" in r2 && !r2.attributes[t.globalIdField])
    throw new s$1(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r2) && !r2.globalId)
    throw new s$1(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!s.globalId)
    throw new s$1(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!s.data && !s.uploadId)
    throw new s$1(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(s.data instanceof File && !!s.data.name) && !s.name)
    throw new s$1(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t.capabilities?.editing.supportsUploadWithItemId && s.uploadId)
    throw new s$1(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if ("string" == typeof s.data) {
    const e2 = ot(s.data);
    if (e2 && !e2.isBase64)
      throw new s$1(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function U(e, t) {
  const { attributes: a } = e;
  null == a[t] && (a[t] = r());
}
async function L(e) {
  const t = e.addFeatures ?? [], a = e.updateFeatures ?? [], r2 = t.concat(a).map((e2) => e2.geometry), s = await R$1(r2), o = t.length, i2 = a.length;
  return s.slice(0, o).forEach((e2, a2) => t[a2].geometry = e2), s.slice(o, o + i2).forEach((e2, t2) => a[t2].geometry = e2), e;
}
function k(e) {
  return { addFeatures: Array.from(e?.addFeatures ?? []), updateFeatures: Array.from(e?.updateFeatures ?? []), deleteFeatures: e && V$1.isCollection(e.deleteFeatures) ? e.deleteFeatures.toArray() : e.deleteFeatures || [], addAttachments: e.addAttachments || [], updateAttachments: e.updateAttachments || [], deleteAttachments: e.deleteAttachments || [] };
}
function B(e, t, r2) {
  const s = k(e);
  if (s.addFeatures?.length && !t.operations.supportsAdd)
    throw new s$1(`${r2}:unsupported-operation`, "Layer does not support adding features.");
  if (s.updateFeatures?.length && !t.operations.supportsUpdate)
    throw new s$1(`${r2}:unsupported-operation`, "Layer does not support updating features.");
  if (s.deleteFeatures?.length && !t.operations.supportsDelete)
    throw new s$1(`${r2}:unsupported-operation`, "Layer does not support deleting features.");
  return s.addFeatures = s.addFeatures.map(D), s.updateFeatures = s.updateFeatures.map(D), s.addAssetFeatures = [], s;
}
function T(e, t, r2, s, o, i2) {
  if (!e || !s && !o)
    throw new s$1(`${i2}:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!t.editing.supportsGlobalId && r2?.globalIdUsed)
    throw new s$1(`${i2}:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!t.editing.supportsGlobalId && o)
    throw new s$1(`${i2}:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if (!r2?.globalIdUsed && o)
    throw new s$1(`${i2}:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
}
function D(t) {
  const a = new c$1();
  return t.attributes || (t.attributes = {}), a.geometry = t.geometry, a.attributes = t.attributes, a;
}
async function G(e, t) {
  if (null == t.infoFor3D)
    return;
  const { infoFor3D: r2 } = t, s = u("model/gltf-binary", r2.supportedFormats) ?? i("glb", r2.supportedFormats);
  if (!(!!s && r2.editFormats.includes(s)))
    throw new s$1(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  e.addAssetFeatures ??= [];
  const { addAssetFeatures: o } = e;
  for (const a of e.addFeatures ?? [])
    V(a) && o.push(a);
  for (const a of e.updateFeatures ?? [])
    V(a) && o.push(a);
}
function V(e) {
  return "mesh" === e?.geometry?.type;
}
function M(e, t, r2, s) {
  if (!y(t))
    throw new s$1(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!t.uploadAssets)
    throw new s$1(`${e.type}-layer:no-asset-upload-support`, "Layer source does not support uploadAssets capability", { layer: e });
  return t.uploadAssets(r2, s);
}
export {
  A as applyEdits,
  T as checkEditingCapabilities,
  F as isFeatureIdentifierArrayWithGlobalId,
  b as isFeatureIdentifierArrayWithObjectId,
  w as isFeatureIdentifierWithGlobalId,
  g as isFeatureIdentifierWithObjectId,
  k as normalizeCollections,
  B as normalizeEdits,
  L as normalizeGeometries,
  D as shallowCloneFeature,
  M as uploadAssets
};
