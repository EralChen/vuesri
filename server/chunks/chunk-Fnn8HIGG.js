import { g9 as a, cm as e$1 } from "./chunk-ejFG4zJ0.js";
function n(e, n2 = a(e)) {
  return "on-the-ground" !== n2.mode && !(null == e.geometry || !e.geometry.hasZ);
}
function t(o, n2) {
  let t2 = null;
  const r = o.events.on("grab-changed", (e) => {
    null != t2 && (t2.remove(), t2 = null), "start" === e.action ? (t2 = o.disableDisplay(), n2 && n2(e)) : n2 && n2(e);
  });
  return e$1(() => {
    t2?.remove(), r.remove();
  });
}
export {
  n,
  t
};