import { aW as i, aM as s$1, aX as S, aY as j, aU as i$1, aZ as i$2, aV as f$1 } from "./chunk-KFNcxJaF.js";
import { o } from "./chunk-9JEQPlhY.js";
function l(t, r, o2) {
  const a = o2(t);
  if (!a.isValid)
    throw new s$1(`${r}:invalid-parameters`, a.errorMessage, { layer: t });
}
async function p(e) {
  const { layer: t, errorNamePrefix: r, validateLayer: o2 } = e;
  await t.load(), l(t, r, o2);
}
function m(e, t) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`;
}
function c(t) {
  const { item: r, itemType: o2, errorNamePrefix: a, layer: i2, validateItem: n } = t;
  if (i$2(r), r.type !== o2)
    throw new s$1(`${a}:portal-item-wrong-type`, `Portal item type should be "${o2}"`, { item: r, layer: i2 });
  if (n) {
    const t2 = n(r);
    if (!t2.isValid)
      throw new s$1(`${a}:invalid-parameters`, t2.errorMessage, { layer: i2 });
  }
}
function d(t) {
  const { layer: r, errorNamePrefix: o2 } = t, { portalItem: a } = r;
  if (!a)
    throw new s$1(`${o2}:portal-item-not-set`, m(r, "requires the portalItem property to be set"));
  if (!a.loaded)
    throw new s$1(`${o2}:portal-item-not-loaded`, m(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  c({ ...t, item: a });
}
function u(e) {
  const { newItem: t, itemType: a } = e;
  let i2 = S.from(t);
  return i2.id && (i2 = i2.clone(), i2.id = null), i2.type ??= a, i2.portal ??= j.getDefault(), c({ ...e, item: i2 }), i2;
}
function f(t, r) {
  let o2 = (t.messages ?? []).filter(({ type: e }) => "error" === e).map(({ name: t2, message: r2, details: o3 }) => new s$1(t2, r2, o3));
  if (t.blockedRelativeUrls && (o2 = o2.concat(t.blockedRelativeUrls.map((t2) => new s$1("url:unsupported", `Relative url '${t2}' is not supported`)))), r?.ignoreUnsupported && (o2 = o2.filter(({ name: e }) => "layer:unsupported" !== e && "symbol:unsupported" !== e && "symbol-layer:unsupported" !== e && "property:unsupported" !== e && "url:unsupported" !== e)), o2.length > 0)
    throw new s$1("layer-write:unsupported", "Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: o2 });
}
async function y(e, t, r) {
  "beforeSave" in e && "function" == typeof e.beforeSave && await e.beforeSave();
  const o2 = e.write({}, t);
  return await Promise.all(t.resources?.pendingOperations ?? []), f(t, r), o2;
}
function w(e) {
  i$1(e, f$1.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t, r) => r.indexOf(e2) === t));
}
async function v(e, t, r) {
  const o2 = e.portal;
  await o2.signIn(), await o2.user?.addItem({ item: e, data: t, folder: r?.folder });
}
async function I(e, r) {
  const { layer: o$1, createItemData: i$12, createJSONContext: n, saveResources: s } = e;
  await p(e), d(e);
  const l2 = o$1.portalItem, m2 = n ? n(l2) : o(l2), c2 = await y(o$1, m2, r), u2 = await i$12({ layer: o$1, layerJSON: c2 }, l2);
  return w(l2), await l2.update({ data: u2 }), i(m2), await s?.(l2, m2), l2;
}
async function b(e, r) {
  const { layer: o$1, createItemData: i$12, createJSONContext: n, setItemProperties: s, saveResources: l2 } = e;
  await p(e);
  const m2 = u(e), c2 = n ? n(m2) : o(m2), d2 = await y(o$1, c2, r), f2 = await i$12({ layer: o$1, layerJSON: d2 }, m2);
  return await s(o$1, m2), w(m2), await v(m2, f2, r), o$1.portalItem = m2, i(c2), await l2?.(m2, c2), m2;
}
export {
  I,
  b
};
