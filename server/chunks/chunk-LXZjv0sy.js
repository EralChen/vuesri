import { aM as s$1, aq as has, n1 as r$1, bS as e$2, qc as r$2, gR as n$2, qd as t$1, fN as V$1, a$ as j, b1 as s$2, lv as w, bd as r$3, qe as s, b3 as u$1, lw as A, b4 as i$3, cq as a$2, lo as Wt, bb as s$3 } from "./chunk-KFNcxJaF.js";
import { h as h$1, N, i as i$2, o as o$1, A as A$1 } from "./chunk-_FX4l1J_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const e$1 = "upload-assets", o = () => new Error();
class r extends s$1 {
  constructor() {
    super(`${e$1}:unsupported`, "Layer does not support asset uploads.", o());
  }
}
class t extends s$1 {
  constructor() {
    super(`${e$1}:no-glb-support`, "Layer does not support glb.", o());
  }
}
let a$1 = class a extends s$1 {
  constructor() {
    super(`${e$1}:no-supported-source`, "No supported external source found", o());
  }
};
let n$1 = class n extends s$1 {
  constructor() {
    super(`${e$1}:not-base-64`, "Expected gltf data in base64 format after conversion.", o());
  }
};
let p$2 = class p extends s$1 {
  constructor() {
    super(`${e$1}:unable-to-prepare-options`, "Unable to prepare uploadAsset request options.", o());
  }
};
class u extends s$1 {
  constructor(s2, r2) {
    super(`${e$1}:bad-response`, `Bad response. Uploaded ${s2} items and received ${r2} results.`, o());
  }
}
let c$2 = class c extends s$1 {
  constructor(s2, r2) {
    super(`${e$1}-layer:upload-failed`, `Failed to upload mesh file ${s2}. Error code: ${r2?.code ?? "-1"}. Error message: ${r2?.messages ?? "unknown"}`, o());
  }
};
class d extends s$1 {
  constructor(s2) {
    super(`${e$1}-layer:unsupported-format`, `The service allowed us to upload an asset of FormatID ${s2}, but it does not list it in its supported formats.`, o());
  }
}
let l$2 = class l extends s$1 {
  constructor() {
    super(`${e$1}:convert3D-failed`, "convert3D failed.");
  }
};
const e = { upload: { createFromFiles: 0.8, loadMesh: 0.2 }, uploadAssetBlobs: { prepareAssetItems: 0.9, uploadAssetItems: 0.1 }, uploadConvertibleSource: { uploadEditSource: 0.5, serviceAssetsToGlb: 0.5 }, uploadLocalMesh: { meshToAssetBlob: 0.5, uploadAssetBlobs: 0.5 } };
function i$1(s2, t2 = (s3) => {
}, e2) {
  return new n2(s2, t2, e2);
}
class n2 {
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
      const r2 = performance.now();
      this._startTime ??= r2;
      const o2 = r$1(this._timingsMap, s2, () => ({ start: r2, end: 0 }));
      1 === e2 && (o2.end = r2);
    }
    this.emitProgress();
  }
  simulate(s2, t2) {
    return a2((t3) => this.setProgress(s2, t3), t2);
  }
  makeOnProgress(s2) {
    return (t2) => this.setProgress(s2, t2);
  }
}
function a2(t2 = (s2) => {
}, e2 = l$1) {
  const r2 = performance.now();
  t2(0);
  const o2 = setInterval(() => {
    const s2 = performance.now() - r2, o3 = 1 - Math.exp(-s2 / e2);
    t2(o3);
  }, g);
  return e$2(() => {
    clearInterval(o2), t2(1);
  });
}
function h(s2, t2 = c$1) {
  return r$2(t$1(s2 * f$1 / t2));
}
function m$1(s2, t2 = p$1) {
  return r$2(t$1(s2 * f$1 / t2));
}
const c$1 = 10, p$1 = 10, f$1 = 8e-6, g = n$2(50), l$1 = n$2(1e3);
const i = 1e6, p2 = 20 * i, l2 = 2e9, m = 3;
async function c2({ data: r2, name: c3, description: u2 }, d2, h$12) {
  let j$1 = null;
  try {
    const w$1 = V$1(d2, "uploads"), y = V$1(w$1, "info"), { data: g2 } = await j(y, { query: { f: "json" }, responseType: "json" });
    s$2(h$12);
    const U = w(d2), q2 = g2.maxUploadFileSize * i, z2 = U ? l2 : q2, T = U ? Math.min(p2, q2) : p2;
    if (r2.size > z2)
      throw new Error("Data too large");
    const A2 = V$1(w$1, "register"), { data: E } = await j(A2, { query: { f: "json", itemName: f(c3), description: u2 }, responseType: "json", method: "post" });
    if (s$2(h$12), !E.success)
      throw new Error("Registration failed");
    const { itemID: P } = E.item;
    j$1 = V$1(w$1, P);
    const D = V$1(j$1, "uploadPart"), I2 = Math.ceil(r2.size / T), M2 = new Array();
    for (let e2 = 0; e2 < I2; ++e2)
      M2.push(r2.slice(e2 * T, Math.min((e2 + 1) * T, r2.size)));
    const b = M2.slice().reverse(), v2 = new Array(), x = i$1(I2, h$12?.onProgress, "uploadItem"), F = async () => {
      for (; 0 !== b.length; ) {
        const t2 = M2.length - b.length, s2 = b.pop(), r3 = new FormData(), a3 = x.simulate(t2, h(s2.size));
        try {
          const a4 = s2;
          r3.append("f", "json"), r3.append("file", a4), r3.append("partId", `${t2}`);
          const { data: n3 } = await j(D, { timeout: 0, body: r3, responseType: "json", method: "post" });
          if (s$2(h$12), !n3.success)
            throw new Error("Part upload failed");
        } finally {
          a3.remove();
        }
      }
    };
    for (let e2 = 0; e2 < m && 0 !== b.length; ++e2)
      v2.push(F());
    await Promise.all(v2);
    const _2 = V$1(j$1, "commit"), { data: C2 } = await j(_2, { query: { f: "json", parts: M2.map((e2, o2) => o2).join(",") }, responseType: "json", method: "post" });
    if (s$2(h$12), !C2.success)
      throw new Error("Commit failed");
    return C2.item;
  } catch (w2) {
    if (null != j$1) {
      const o2 = V$1(j$1, "delete");
      await j(o2, { query: { f: "json" }, responseType: "json", method: "post" });
    }
    throw w2;
  }
}
function f(e2) {
  return e2.replaceAll("/", "_").replaceAll("\\", "_");
}
async function O(s2, e2, t2) {
  const r2 = s2.length;
  if (!r2)
    return t2?.onProgress?.(1), [];
  const o2 = i$1(r2, t2?.onProgress, "uploadAssets");
  return Promise.all(s2.map((s3, r3) => v(s3, e2, { ...t2, onProgress: o2.makeOnProgress(r3) })));
}
async function v(s2, { layer: e2, ongoingUploads: t2 }, r$12) {
  const o2 = t2.get(s2);
  if (o2)
    return o2;
  if (!Z(e2))
    throw new r();
  if (I(s2, e2))
    return r$12?.onProgress?.(1), s2;
  const n3 = k(s2, e2, r$12);
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
  const { metadata: o2 } = s2, { displaySource: n3 } = o2, a3 = H(n3?.source, e2), i2 = !!a3, c3 = o2.externalSources.length > 0, u2 = i2 ? B(a3, e2, r2) : c3 ? R(s2, e2, r2) : C(s2, e2, r2), l3 = await u2;
  return s$2(r2), s2.addExternalSources([l3]), s2;
}
async function B(s2, e2, t2) {
  return { source: await G(s2, e2, t2), original: true };
}
async function R(s2, e$12, t2) {
  const r2 = _(e$12), { externalSources: o2 } = s2.metadata, n3 = q(o2, e$12);
  if (!n3)
    throw new a$1();
  const a3 = i$1(e.uploadConvertibleSource, t2?.onProgress, "uploadConvertibleSource"), i2 = await G(n3, e$12, { onProgress: a3.makeOnProgress("uploadEditSource") });
  s2.addExternalSources([{ source: i2, original: true }]);
  const c3 = n3.reduce((s3, { asset: e2 }) => e2 instanceof File ? s3 + e2.size : s3, 0), u2 = a3.simulate("serviceAssetsToGlb", m$1(c3));
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
  const o2 = _(e2), n3 = await s2.load(r2), a3 = await n3.toBinaryGLTF({ ignoreLocalTransform: true });
  s$2(r2);
  const i2 = await a3.buffer();
  return s$2(r2), { blob: new Blob([i2.data], { type: i2.type }), assetName: `${r$3()}.glb`, assetType: o2 };
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
  let a3 = false;
  for (let i2 = 0; i2 < o2.length; ++i2) {
    const s3 = $(o2[i2], t2);
    if (!s3)
      return null;
    r2.includes(s3.assetType) && (a3 = true), n3.push(s3);
  }
  return a3 ? n3 : null;
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
  s$2(r2);
  const a3 = n3.map(({ item: s3 }) => s3), { uploadResults: i2 } = await K(a3, e$12, { ...r2, onProgress: o2.makeOnProgress("uploadAssetItems") });
  return s$2(r2), s2.map((s3, t2) => Q(n3[t2], i2[t2], e$12));
}
async function M(s2, e2) {
  const { asset: r2, assetType: o2 } = s2;
  if (r2 instanceof File)
    return { blob: r2, assetName: r2.name, assetType: o2 };
  const n3 = await r2.toBlob(e2);
  return s$2(e2), { blob: n3, assetName: r2.assetName, assetType: o2 };
}
async function W(s2, e2, r2) {
  const { blob: n3, assetType: a3, assetName: c$12 } = s2;
  let u2 = null;
  try {
    const s3 = await c2({ data: n3, name: c$12 }, e2.url, r2);
    s$2(r2), u2 = { assetType: a3, assetUploadId: s3.itemID };
  } catch (l3) {
    a$2(l3), ss().warnOnce(`Service ${e2.url} does not support the REST Uploads API.`);
  }
  if (!u2) {
    const s3 = await Wt(n3);
    if (s$2(r2), !s3.isBase64)
      throw new n$1();
    u2 = { assetType: a3, assetData: s3.data };
  }
  if (!u2)
    throw new p$2();
  return { item: u2, assetName: c$12 };
}
function z(s2, e2, r2) {
  const o2 = i$1(s2.length, r2?.onProgress, "prepareAssetItems");
  return Promise.all(s2.map(async (s3, n3) => {
    const a3 = W(await s3, e2, { ...r2, onProgress: o2.makeOnProgress(n3) });
    return s$2(r2), a3;
  }));
}
async function K(e2, r2, o2) {
  const n3 = a2(o2?.onProgress);
  try {
    const n4 = await j(V$1(r2.parsedUrl.path, "uploadAssets"), { timeout: 0, query: { f: "json", assets: JSON.stringify(e2) }, method: "post", responseType: "json" });
    if (s$2(o2), n4.data.uploadResults.length !== e2.length)
      throw new u(e2.length, n4.data.uploadResults.length);
    return n4.data;
  } finally {
    n3.remove();
  }
}
function Q(s$12, e2, t2) {
  const { success: r2 } = e2;
  if (!r2) {
    const { error: t3 } = e2;
    throw new c$2(s$12.assetName, t3);
  }
  const { assetHash: o2 } = e2, { assetName: n3, item: { assetType: a3 } } = s$12, { infoFor3D: { supportedFormats: i2 } } = t2, c3 = s(a3, i2);
  if (!c3)
    throw new d(a3);
  return new i$2(n3, c3, [new o$1(`${t2.parsedUrl.path}/assets/${o2}`, o2)]);
}
async function V(s2, e2, t2) {
  const r2 = s2.map(({ assetName: s3, parts: e3 }) => ({ assetName: s3, assetHash: e3[0].partHash })), o2 = e2.capabilities?.operations.supportsAsyncConvert3D, n3 = { f: "json", assets: JSON.stringify(r2), transportType: "esriTransportTypeUrl", targetFormat: t2, async: o2 }, i2 = V$1(e2.parsedUrl.path, "convert3D");
  let c3;
  try {
    c3 = (await (o2 ? Y : X)(i2, { query: n3, responseType: "json", timeout: 0 })).data;
  } catch (l3) {
    throw new l$2();
  }
  const { supportedFormats: u2 } = e2.infoFor3D;
  return c3.assets.map((s3) => {
    const e3 = u$1(s3.contentType, u2);
    if (!e3)
      throw new d(e3);
    return new i$2(s3.assetName, s3.contentType, [new o$1(s3.assetURL, s3.assetHash)]);
  });
}
function X(e2, t2) {
  return j(e2, t2);
}
async function Y(e2, t2) {
  const o2 = (await j(e2, t2)).data.statusUrl;
  for (; ; ) {
    const e3 = (await j(o2, { query: { f: "json" }, responseType: "json" })).data;
    switch (e3.status) {
      case "Completed":
        return j(e3.resultUrl, { query: { f: "json" }, responseType: "json" });
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
  const { infoFor3D: e2 } = s2, t$12 = u$1("model/gltf-binary", e2.supportedFormats) ?? i$3("glb", e2.supportedFormats);
  if (!t$12)
    throw new t();
  return t$12;
}
function ss() {
  return s$3.getLogger("esri.layers.graphics.sources.support.uploadAssets");
}
const es = n$2(1e3);
export {
  O as uploadAssets
};
