import { dS as g, eD as a } from "./chunk-ejFG4zJ0.js";
function l(l2) {
  const t = l2.view.spatialReference, o = l2.layer.fullExtent, s = null != o && o.spatialReference;
  if (null == o || !s)
    return Promise.resolve(null);
  if (s.equals(t))
    return Promise.resolve(o.clone());
  const n = g(o, t);
  return null != n ? Promise.resolve(n) : l2.view.state.isLocal ? a(o, t, l2.layer.portalItem).then((e) => !l2.destroyed && e ? e : null).catch(() => null) : Promise.resolve(null);
}
export {
  l
};
