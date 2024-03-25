import { b0 as has, eL as r, cm as e$1, pz as r$1, cI as n$2, pA as t, gG as V$1, aQ as U$1, cU as s$1, iT as w, pB as r$2, pC as h$1, pD as n$3, bH as r$3, pE as N, pF as a$1, pG as d, eK as s, pH as c$2, eN as i$2, eM as o, pI as l$2, bK as u, iU as A, bL as i$3, pJ as t$1, pK as A$1, aP as a$2, iI as Wt, pL as u$1, pM as p$2, aT as s$2 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const e = { upload: { createFromFiles: 0.8, loadMesh: 0.2 }, uploadAssetBlobs: { prepareAssetItems: 0.9, uploadAssetItems: 0.1 }, uploadConvertibleSource: { uploadEditSource: 0.5, serviceAssetsToGlb: 0.5 }, uploadLocalMesh: { meshToAssetBlob: 0.5, uploadAssetBlobs: 0.5 } };
function i$1(s2, t2 = (s3) => {
}, e2) {
  return new n$1(s2, t2, e2);
}
let n$1 = class n {
  constructor(s2, t2 = (s3) => {
  }, e2) {
    if (this.onProgress = t2, this.taskName = e2, this._progressMap = /* @__PURE__ */ new Map(), this._startTime = void 0, this._timingsMap = /* @__PURE__ */ new Map(), "number" == typeof s2) {
      this._weights = {};
      for (let t3 = 0; t3 < s2; t3++) {
        const e3 = t3, r2 = 1 / s2;
        this._weights[e3] = r2, this._progressMap.set(e3, 0);
      }
    } else
      this._weights = s2;
    this.emitProgress();
  }
  emitProgress() {
    let s2 = 0;
    for (const [t2, e2] of this._progressMap.entries()) {
      s2 += e2 * this._weights[t2];
    }
    if (1 === s2 && has("enable-feature:esri-3dofl-upload-timings")) {
      const s3 = Math.round(performance.now() - (this._startTime ?? 0)) / 1e3;
      console.log(`${this.taskName} done in ${s3} sec`);
      for (const [t2, e2] of this._timingsMap) {
        const r2 = Math.round(e2.end - e2.start) / 1e3, o2 = Math.round(r2 / s3 * 100);
        console.log(this.taskName ?? "Task", { stepKey: t2, stepTime: r2, relativeTime: o2 });
      }
    }
    this.onProgress(s2);
  }
  setProgress(s2, e2) {
    if (this._progressMap.set(s2, e2), has("enable-feature:esri-3dofl-upload-timings")) {
      const r$12 = performance.now();
      this._startTime ??= r$12;
      const o2 = r(this._timingsMap, s2, () => ({ start: r$12, end: 0 }));
      1 === e2 && (o2.end = r$12);
    }
    this.emitProgress();
  }
  simulate(s2, t2) {
    return a((t3) => this.setProgress(s2, t3), t2);
  }
  makeOnProgress(s2) {
    return (t2) => this.setProgress(s2, t2);
  }
};
function a(t2 = (s2) => {
}, e2 = l$1) {
  const r2 = performance.now();
  t2(0);
  const o2 = setInterval(() => {
    const s2 = performance.now() - r2, o3 = 1 - Math.exp(-s2 / e2);
    t2(o3);
  }, g);
  return e$1(() => {
    clearInterval(o2), t2(1);
  });
}
function h(s2, t$12 = c$1) {
  return r$1(t(s2 * f / t$12));
}
function m$1(s2, t$12 = p$1) {
  return r$1(t(s2 * f / t$12));
}
const c$1 = 10, p$1 = 10, f = 8e-6, g = n$2(50), l$1 = n$2(1e3);
const n2 = 1e6, i = 20 * n2, p = 2e9, l = 3;
async function m({ data: m2, name: f2, description: d2 }, u2, h$12) {
  let w$1 = null;
  try {
    const y = V$1(u2, "uploads"), j = V$1(y, "info"), { data: g2 } = await U$1(j, { query: { f: "json" }, responseType: "json" });
    s$1(h$12);
    const q2 = w(u2), z2 = g2.maxUploadFileSize * n2, T = q2 ? p : z2, U = q2 ? Math.min(i, z2) : i;
    if (m2.size > T)
      throw new Error("Data too large");
    const A2 = V$1(y, "register"), { data: E } = await U$1(A2, { query: { f: "json", itemName: c(f2), description: d2 }, responseType: "json", method: "post" });
    if (s$1(h$12), !E.success)
      throw new Error("Registration failed");
    const { itemID: P } = E.item;
    w$1 = V$1(y, P);
    const D = V$1(w$1, "uploadPart"), I2 = Math.ceil(m2.size / U), M2 = new Array();
    for (let e2 = 0; e2 < I2; ++e2)
      M2.push(m2.slice(e2 * U, Math.min((e2 + 1) * U, m2.size)));
    const v2 = M2.slice().reverse(), x = new Array(), F = i$1(I2, h$12?.onProgress, "uploadItem"), _2 = async () => {
      for (; 0 !== v2.length; ) {
        const t2 = M2.length - v2.length, r2 = v2.pop(), s2 = new FormData(), n3 = F.simulate(t2, h(r2.size));
        try {
          s2.append("f", "json"), s2.append("file", r2), s2.append("partId", `${t2}`);
          const { data: a2 } = await U$1(D, { timeout: 0, body: s2, responseType: "json", method: "post" });
          if (s$1(h$12), !a2.success)
            throw new Error("Part upload failed");
        } finally {
          n3.remove();
        }
      }
    };
    for (let e2 = 0; e2 < l && 0 !== v2.length; ++e2)
      x.push(_2());
    await Promise.all(x);
    const b = V$1(w$1, "commit"), { data: C2 } = await U$1(b, { query: { f: "json", parts: M2.map((e2, o2) => o2).join(",") }, responseType: "json", method: "post" });
    if (s$1(h$12), !C2.success)
      throw new Error("Commit failed");
    return C2.item;
  } catch (y) {
    if (null != w$1) {
      const o2 = V$1(w$1, "delete");
      await U$1(o2, { query: { f: "json" }, responseType: "json", method: "post" });
    }
    throw y;
  }
}
function c(e2) {
  return e2.replaceAll("/", "_").replaceAll("\\", "_");
}
async function O(s2, e2, t2) {
  const r2 = s2.length;
  if (!r2)
    return t2?.onProgress?.(1), [];
  const o2 = i$1(r2, t2?.onProgress, "uploadAssets");
  return Promise.all(s2.map((s3, r3) => v(s3, e2, { ...t2, onProgress: o2.makeOnProgress(r3) })));
}
async function v(s2, { layer: e2, ongoingUploads: t2 }, r2) {
  const o2 = t2.get(s2);
  if (o2)
    return o2;
  if (!Z(e2))
    throw new r$2();
  if (I(s2, e2))
    return r2?.onProgress?.(1), s2;
  const n3 = k(s2, e2, r2);
  t2.set(s2, n3);
  try {
    await n3;
  } finally {
    t2.delete(s2);
  }
  return s2;
}
function I(s2, e2) {
  const { parsedUrl: t2 } = e2;
  return null != t2 && s2.metadata.externalSources.some((s3) => h$1(s3, t2));
}
async function k(s2, e2, r2) {
  const { metadata: o2 } = s2, { displaySource: n3 } = o2, a2 = H(n3?.source, e2), i2 = !!a2, c2 = o2.externalSources.length > 0, u2 = i2 ? B(a2, e2, r2) : c2 ? R(s2, e2, r2) : C(s2, e2, r2), l2 = await u2;
  return s$1(r2), s2.addExternalSources([l2]), s2;
}
async function B(s2, e2, t2) {
  return { source: await G(s2, e2, t2), original: true };
}
async function R(s2, e$12, t2) {
  const r2 = _(e$12), { externalSources: o2 } = s2.metadata, n3 = q(o2, e$12);
  if (!n3)
    throw new n$3();
  const a2 = i$1(e.uploadConvertibleSource, t2?.onProgress, "uploadConvertibleSource"), i2 = await G(n3, e$12, { onProgress: a2.makeOnProgress("uploadEditSource") });
  s2.addExternalSources([{ source: i2, original: true }]);
  const c2 = n3.reduce((s3, { asset: e2 }) => e2 instanceof File ? s3 + e2.size : s3, 0), u2 = a2.simulate("serviceAssetsToGlb", m$1(c2));
  try {
    return { source: await V(i2, e$12, r2) };
  } finally {
    u2.remove();
  }
}
async function C(s2, e$12, t2) {
  const r2 = i$1(e.uploadLocalMesh, t2?.onProgress, "uploadLocalMesh"), o2 = L(s2, e$12, { ...t2, onProgress: r2.makeOnProgress("meshToAssetBlob") });
  return { source: await J([o2], e$12, { ...t2, onProgress: r2.makeOnProgress("uploadAssetBlobs") }), extent: s2.extent.clone(), original: true };
}
async function L(s2, e2, r2) {
  const o2 = _(e2), n3 = await s2.load(r2), a2 = await n3.toBinaryGLTF({ ignoreLocalTransform: true });
  s$1(r2);
  const i2 = await a2.buffer();
  return s$1(r2), { blob: new Blob([i2.data], { type: i2.type }), assetName: `${r$3()}.glb`, assetType: o2 };
}
function q(s2, e2) {
  for (const t2 of s2) {
    const s3 = H(t2.source, e2);
    if (s3)
      return s3;
  }
  return null;
}
function H(s2, e2) {
  if (!s2)
    return null;
  const { infoFor3D: { supportedFormats: t2, editFormats: r2 } } = e2, o2 = A$1(s2), n3 = new Array();
  let a2 = false;
  for (let i2 = 0; i2 < o2.length; ++i2) {
    const s3 = $(o2[i2], t2);
    if (!s3)
      return null;
    r2.includes(s3.assetType) && (a2 = true), n3.push(s3);
  }
  return a2 ? n3 : null;
}
function $(s2, e2) {
  const t2 = N(s2, e2);
  return t2 ? { asset: s2, assetType: t2 } : null;
}
async function G(s2, e2, t2) {
  return J(s2.map((s3) => M(s3, t2)), e2, t2);
}
async function J(s2, e$12, r2) {
  const o2 = i$1(e.uploadAssetBlobs, r2?.onProgress, "uploadAssetBlobs"), n3 = await z(s2, e$12, { ...r2, onProgress: o2.makeOnProgress("prepareAssetItems") });
  s$1(r2);
  const a2 = n3.map(({ item: s3 }) => s3), { uploadResults: i2 } = await K(a2, e$12, { ...r2, onProgress: o2.makeOnProgress("uploadAssetItems") });
  return s$1(r2), s2.map((s3, t2) => Q(n3[t2], i2[t2], e$12));
}
async function M(s2, e2) {
  const { asset: r2, assetType: o2 } = s2;
  if (r2 instanceof File)
    return { blob: r2, assetName: r2.name, assetType: o2 };
  const n3 = await r2.toBlob(e2);
  return s$1(e2), { blob: n3, assetName: r2.assetName, assetType: o2 };
}
async function W(s2, e2, r2) {
  const { blob: n3, assetType: a2, assetName: c2 } = s2;
  let u2 = null;
  try {
    const s3 = await m({ data: n3, name: c2 }, e2.url, r2);
    s$1(r2), u2 = { assetType: a2, assetUploadId: s3.itemID };
  } catch (l2) {
    a$2(l2), ss().warnOnce(`Service ${e2.url} does not support the REST Uploads API.`);
  }
  if (!u2) {
    const s3 = await Wt(n3);
    if (s$1(r2), !s3.isBase64)
      throw new u$1();
    u2 = { assetType: a2, assetData: s3.data };
  }
  if (!u2)
    throw new p$2();
  return { item: u2, assetName: c2 };
}
function z(s2, e2, r2) {
  const o2 = i$1(s2.length, r2?.onProgress, "prepareAssetItems");
  return Promise.all(s2.map(async (s3, n3) => {
    const a2 = W(await s3, e2, { ...r2, onProgress: o2.makeOnProgress(n3) });
    return s$1(r2), a2;
  }));
}
async function K(e2, r2, o2) {
  const n3 = a(o2?.onProgress);
  try {
    const n4 = await U$1(V$1(r2.parsedUrl.path, "uploadAssets"), { timeout: 0, query: { f: "json", assets: JSON.stringify(e2) }, method: "post", responseType: "json" });
    if (s$1(o2), n4.data.uploadResults.length !== e2.length)
      throw new a$1(e2.length, n4.data.uploadResults.length);
    return n4.data;
  } finally {
    n3.remove();
  }
}
function Q(s$12, e2, t2) {
  const { success: r2 } = e2;
  if (!r2) {
    const { error: t3 } = e2;
    throw new d(s$12.assetName, t3);
  }
  const { assetHash: o$1 } = e2, { assetName: n3, item: { assetType: a2 } } = s$12, { infoFor3D: { supportedFormats: i2 } } = t2, c2 = s(a2, i2);
  if (!c2)
    throw new c$2(a2);
  return new i$2(n3, c2, [new o(`${t2.parsedUrl.path}/assets/${o$1}`, o$1)]);
}
async function V(s2, e2, t2) {
  const r2 = s2.map(({ assetName: s3, parts: e3 }) => ({ assetName: s3, assetHash: e3[0].partHash })), o$1 = e2.capabilities?.operations.supportsAsyncConvert3D, n3 = { f: "json", assets: JSON.stringify(r2), transportType: "esriTransportTypeUrl", targetFormat: t2, async: o$1 }, i2 = V$1(e2.parsedUrl.path, "convert3D");
  let c2;
  try {
    c2 = (await (o$1 ? Y : X)(i2, { query: n3, responseType: "json", timeout: 0 })).data;
  } catch (l2) {
    throw new l$2();
  }
  const { supportedFormats: u$12 } = e2.infoFor3D;
  return c2.assets.map((s3) => {
    const e3 = u(s3.contentType, u$12);
    if (!e3)
      throw new c$2(e3);
    return new i$2(s3.assetName, s3.contentType, [new o(s3.assetURL, s3.assetHash)]);
  });
}
function X(e2, t2) {
  return U$1(e2, t2);
}
async function Y(e2, t2) {
  const o2 = (await U$1(e2, t2)).data.statusUrl;
  for (; ; ) {
    const e3 = (await U$1(o2, { query: { f: "json" }, responseType: "json" })).data;
    switch (e3.status) {
      case "Completed":
        return U$1(e3.resultUrl, { query: { f: "json" }, responseType: "json" });
      case "CompletedWithErrors":
        throw new Error(e3.status);
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
        throw new Error();
    }
    await A(es);
  }
}
function Z(s2) {
  return !!s2.infoFor3D && !!s2.url;
}
function _(s2) {
  const { infoFor3D: e2 } = s2, t2 = u("model/gltf-binary", e2.supportedFormats) ?? i$3("glb", e2.supportedFormats);
  if (!t2)
    throw new t$1();
  return t2;
}
function ss() {
  return s$2.getLogger("esri.layers.graphics.sources.support.uploadAssets");
}
const es = n$2(1e3);
export {
  O as uploadAssets
};
