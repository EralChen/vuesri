import { bu as i, aO as s, bv as S, bw as Q, bx as o, by as t, bs as i$1, bz as i$2, bt as f$1 } from "./chunk-ejFG4zJ0.js";
function l(t2, r, o2) {
  const a = o2(t2);
  if (!a.isValid)
    throw new s(`${r}:invalid-parameters`, a.errorMessage, { layer: t2 });
}
async function m(e) {
  const { layer: t2, errorNamePrefix: r, validateLayer: o2 } = e;
  await t2.load(), l(t2, r, o2);
}
function c(e, t2) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t2}`;
}
function u(t2) {
  const { item: r, errorNamePrefix: o2, layer: a, validateItem: i2 } = t2;
  if (i$2(r), f(t2), i2) {
    const t3 = i2(r);
    if (!t3.isValid)
      throw new s(`${o2}:invalid-parameters`, t3.errorMessage, { layer: a });
  }
}
function f(t2) {
  const { item: r, itemType: o2, additionalItemType: a, errorNamePrefix: i2, layer: n } = t2, s$1 = [o2];
  if (a && s$1.push(a), !s$1.includes(r.type)) {
    const t3 = s$1.map((e) => `'${e}'`).join(", ");
    throw new s(`${i2}:portal-item-wrong-type`, `Portal item type should be one of: "${t3}"`, { item: r, layer: n });
  }
}
function d(t2) {
  const { layer: r, errorNamePrefix: o2 } = t2, { portalItem: a } = r;
  if (!a)
    throw new s(`${o2}:portal-item-not-set`, c(r, "requires the portalItem property to be set"));
  if (!a.loaded)
    throw new s(`${o2}:portal-item-not-loaded`, c(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  u({ ...t2, item: a });
}
function y(e) {
  const { newItem: t2, itemType: a } = e;
  let i2 = S.from(t2);
  return i2.id && (i2 = i2.clone(), i2.id = null), i2.type ??= a, i2.portal ??= Q.getDefault(), u({ ...e, item: i2 }), i2;
}
function w(e) {
  return o(e, "portal-item");
}
async function I(e, t$1, r) {
  "beforeSave" in e && "function" == typeof e.beforeSave && await e.beforeSave();
  const o2 = e.write({}, t$1);
  return await Promise.all(t$1.resources?.pendingOperations ?? []), t(t$1, { errorName: "layer-write:unsupported" }, r), o2;
}
function v(e) {
  i$1(e, f$1.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t2, r) => r.indexOf(e2) === t2));
}
async function P(e, t2, r) {
  const o2 = e.portal;
  await o2.signIn(), await o2.user?.addItem({ item: e, data: t2, folder: r?.folder });
}
async function $(e, r) {
  const { layer: o2, createItemData: a, createJSONContext: i$12, saveResources: n, supplementalUnsupportedErrors: s2 } = e;
  await m(e), d(e);
  const p = o2.portalItem, l2 = i$12 ? i$12(p) : w(p), c2 = await I(o2, l2, { ...r, supplementalUnsupportedErrors: s2 }), u2 = await a({ layer: o2, layerJSON: c2 }, p);
  return v(p), await p.update({ data: u2 }), i(l2), await n?.(p, l2), p;
}
async function j(e, r) {
  const { layer: o2, createItemData: a, createJSONContext: i$12, setItemProperties: n, saveResources: s2, supplementalUnsupportedErrors: p } = e;
  await m(e);
  const l2 = y(e), c2 = i$12 ? i$12(l2) : w(l2), u2 = await I(o2, c2, { ...r, supplementalUnsupportedErrors: p }), f2 = await a({ layer: o2, layerJSON: u2 }, l2);
  return await n(o2, l2), v(l2), await P(l2, f2, r), o2.portalItem = l2, i(c2), await s2?.(l2, c2), l2;
}
export {
  $,
  j
};
