import { u } from "./chunk-uXZZIsGB.js";
import { e as e$1 } from "./chunk-GihUd-4N.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let e, n;
async function r(t) {
  if (await o(), t.inputs.length < 1)
    return { result: { status: u.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [] }, transferList: [] };
  const e2 = { ptrs: [], sizes: [] };
  for (const s of t.inputs) {
    const t2 = n._malloc(s.byteLength);
    new Uint8Array(n.HEAPU8.buffer, t2, s.byteLength).set(new Uint8Array(s)), e2.ptrs.push(t2), e2.sizes.push(s.byteLength);
  }
  const r2 = n.process(t.jobDescJson, e2, t.isMissingResourceCase), i2 = r2.status === u.Succeeded && r2.data, a = r2.status === u.MissingInputs && r2.missingInputUrls.length > 0;
  if (i2) {
    const s = r2.data.slice();
    r2.data = s;
  } else
    a && (r2.jobDescJson = r2.jobDescJson.slice(0), r2.originalInputs = t.inputs);
  for (let s = 0; s < e2.ptrs.length; ++s)
    n._free(e2.ptrs[s]);
  const u$1 = [];
  if (i2)
    u$1.push(r2.data.buffer);
  else if (a)
    for (const s of t.inputs)
      u$1.push(s);
  return { result: r2, transferList: u$1 };
}
function i() {
  n && (n.uninitialize_lyr3d_worker_wasm(), n = null);
}
function o() {
  return n ? Promise.resolve() : (e || (e = e$1().then((s) => {
    n = s, n.initialize_lyr3d_worker_wasm(), e = null;
  })), e);
}
export {
  i as destroyWasm,
  o as initialize,
  r as process
};
