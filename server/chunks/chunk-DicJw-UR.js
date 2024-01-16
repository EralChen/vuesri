import { aM as s$1, ci as tt, bc as ot } from "./chunk-KFNcxJaF.js";
function a(e) {
  const t = o(e);
  return null != t ? t.toDataURL() : "";
}
async function r(t) {
  const n = o(t);
  if (null == n)
    throw new s$1("imageToArrayBuffer", "Unsupported image type");
  const a2 = await i(t), r2 = await new Promise((e) => n.toBlob(e, a2));
  if (!r2)
    throw new s$1("imageToArrayBuffer", "Failed to encode image");
  return { data: await r2.arrayBuffer(), type: a2 };
}
async function i(e) {
  if (!(e instanceof HTMLImageElement))
    return "image/png";
  const a2 = e.src;
  if (tt(a2)) {
    const e2 = ot(a2);
    return "image/jpeg" === e2?.mediaType ? e2.mediaType : "image/png";
  }
  return /\.png$/i.test(a2) ? "image/png" : /\.(jpg|jpeg)$/i.test(a2) ? "image/jpeg" : "image/png";
}
function o(e) {
  if (e instanceof HTMLCanvasElement)
    return e;
  if (e instanceof HTMLVideoElement)
    return null;
  const t = document.createElement("canvas");
  t.width = e.width, t.height = e.height;
  const n = t.getContext("2d");
  return e instanceof HTMLImageElement ? n.drawImage(e, 0, 0, e.width, e.height) : e instanceof ImageData && n.putImageData(e, 0, 0), t;
}
function c(e) {
  const t = [], n = new Uint8Array(e);
  for (let a2 = 0; a2 < n.length; a2++)
    t.push(String.fromCharCode(n[a2]));
  return "data:application/octet-stream;base64," + btoa(t.join(""));
}
function g(e) {
  if (e.byteLength < 8)
    return false;
  const t = new Uint8Array(e);
  return 137 === t[0] && 80 === t[1] && 78 === t[2] && 71 === t[3] && 13 === t[4] && 10 === t[5] && 26 === t[6] && 10 === t[7];
}
export {
  a,
  c,
  g,
  o,
  r
};
