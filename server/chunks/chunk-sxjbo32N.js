import { aO as s, c_ as e, c$ as t, d0 as s$1, bo as a$1, bw as Q, bp as p$1 } from "./chunk-ejFG4zJ0.js";
import { t as t$3 } from "./chunk-x-z610yQ.js";
import { l, a, n, u, i, c, s as s$2, t as t$2, r, e as e$1 } from "./chunk-Aa808sxb.js";
import { populateGroupLayer as w } from "./chunk-2FZhvObw.js";
import { t as t$1 } from "./chunk-Ll6uvSxj.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function I(e2, t2) {
  const r2 = e2.instance.portalItem;
  if (r2?.id)
    return await r2.load(t2), L(e2), e2.validateItem && e2.validateItem(r2), v(e2, t2);
}
function L(t2) {
  const r2 = t2.instance.portalItem;
  if (!r2?.type || !t2.supportedTypes.includes(r2.type))
    throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r2?.type, expectedType: t2.supportedTypes.join(", ") });
}
async function v(e$2, t$12) {
  const r2 = e$2.instance, o = r2.portalItem;
  if (!o)
    return;
  const { url: n2, title: s2 } = o, i2 = e(o, "portal-item");
  if ("group" === r2.type)
    return S(r2, i2, e$2);
  n2 && "media" !== r2.type && r2.read({ url: n2 }, i2);
  const p = new e$1(), u2 = await C(e$2, p, t$12);
  return u2 && r2.read(u2, i2), r2.resourceReferences = { portalItem: o, paths: i2.readResourcePaths ?? [] }, "subtype-group" !== r2.type && r2.read({ title: s2 }, i2), t(r2, i2);
}
async function S(t2, r2, a2) {
  const o = t2.portalItem;
  if (!t2.sourceIsPortalItem)
    return;
  const { title: n2, type: s$22 } = o;
  if ("Group Layer" === s$22) {
    if (!s$1(o, "Map"))
      throw new s("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
    return T(t2);
  }
  return t2.read({ title: n2 }, r2), j(t2, a2);
}
async function T(e$12) {
  const t2 = e$12.portalItem, r2 = await t2.fetchData("json");
  if (!r2)
    return;
  const a2 = e(t2, "web-map");
  e$12.read(r2, a2), await w(e$12, r2, { context: a2 }), e$12.resourceReferences = { portalItem: t2, paths: a2.readResourcePaths ?? [] };
}
async function j(t2, r2) {
  let o;
  const { portalItem: n$1 } = t2;
  if (!n$1)
    return;
  const s$12 = n$1.type, l$1 = r2.layerModuleTypeMap;
  switch (s$12) {
    case "Feature Service":
    case "Feature Collection":
      o = l$1.FeatureLayer;
      break;
    case "Stream Service":
      o = l$1.StreamLayer;
      break;
    case "Scene Service":
      o = l$1.SceneLayer;
      break;
    default:
      throw new s("portal:unsupported-item-type-as-group", `The item type '${s$12}' is not supported as a 'IGroupLayer'`);
  }
  const d = new e$1();
  let [h, w2] = await Promise.all([o(), C(r2, d)]), g = () => h;
  if ("Feature Service" === s$12) {
    const e2 = l(w2)?.customParameters;
    w2 = n$1.url ? await a(w2, n$1.url, d) : {};
    const r3 = n(w2), a$12 = u(w2), o2 = i(w2), s2 = [];
    if (r3.length || a$12?.length) {
      r3.length && s2.push("SubtypeGroupLayer"), a$12?.length && s2.push("OrientedImageryLayer"), o2?.length && s2.push("CatalogLayer");
      const e3 = [];
      for (const r4 of s2) {
        const t4 = l$1[r4];
        e3.push(t4());
      }
      const t3 = await Promise.all(e3), n2 = /* @__PURE__ */ new Map();
      s2.forEach((e4, r4) => {
        n2.set(e4, t3[r4]);
      }), g = (e4) => e4.layerType ? n2.get(e4.layerType) ?? h : h;
    }
    const f = await G(n$1.url, { customParameters: e2, loadContext: d });
    return await M(t2, g, w2, f);
  }
  return "Scene Service" === s$12 && n$1.url && (w2 = await c(n$1, w2, d)), s$2(w2) > 0 ? await M(t2, g, w2) : await P(t2, g);
}
async function P(e2, t2) {
  const { portalItem: r2 } = e2;
  if (!r2?.url)
    return;
  const a2 = await t$1(r2.url);
  a2 && M(e2, t2, { layers: a2.layers?.map(t$2), tables: a2.tables?.map(t$2) });
}
async function M(e2, t2, r2, a2) {
  let o = r2.layers || [];
  const s2 = r2.tables || [];
  if ("Feature Collection" === e2.portalItem?.type ? (o.forEach((e3, t3) => {
    e3.id = t3, "Table" === e3?.layerDefinition?.type && s2.push(e3);
  }), o = o.filter((e3) => "Table" !== e3?.layerDefinition?.type)) : (o.reverse(), s2.reverse()), o.forEach((o2) => {
    const n2 = a2?.(o2);
    if (n2 || !a2) {
      const a3 = x(e2, t2(o2), r2, o2, n2);
      e2.add(a3);
    }
  }), s2.length) {
    const t3 = await a$1.FeatureLayer();
    s2.forEach((o2) => {
      const n2 = a2?.(o2);
      if (n2 || !a2) {
        const a3 = x(e2, t3, r2, o2, n2);
        e2.tables.add(a3);
      }
    });
  }
}
function x(e2, t2, r2, a2, o) {
  const n2 = e2.portalItem, l2 = { portalItem: n2.clone(), layerId: a2.id };
  null != a2.url && (l2.url = a2.url);
  const i2 = new t2(l2);
  if ("sourceJSON" in i2 && (i2.sourceJSON = o), "subtype-group" !== i2.type && "catalog" !== i2.type && (i2.sublayerTitleMode = "service-name"), "Feature Collection" === n2.type) {
    const e3 = { origin: "portal-item", portal: n2.portal || Q.getDefault() };
    i2.read(a2, e3);
    const t3 = r2.showLegend;
    null != t3 && i2.read({ showLegend: t3 }, e3);
  }
  return i2;
}
async function C(e2, t2, r$1) {
  if (false === e2.supportsData)
    return;
  const a2 = e2.instance, o = a2.portalItem;
  if (!o)
    return;
  let n$1 = null;
  try {
    n$1 = await o.fetchData("json", r$1);
  } catch (s2) {
  }
  if (k(a2)) {
    let e3 = null;
    const r$12 = await F(o, n$1, t2);
    if ((n$1?.layers || n$1?.tables) && r$12 > 0) {
      if (null == a2.layerId) {
        const e4 = n(n$1);
        a2.layerId = "subtype-group" === a2.type ? e4?.[0] : r(n$1);
      }
      e3 = D(n$1, a2), e3 && null != n$1.showLegend && (e3.showLegend = n$1.showLegend);
    }
    return r$12 > 1 && "sublayerTitleMode" in a2 && "service-name" !== a2.sublayerTitleMode && (a2.sublayerTitleMode = "item-title-and-service-name"), e3;
  }
  return n$1;
}
async function F(e2, r2, a2) {
  if (r2?.layers && r2?.tables)
    return s$2(r2);
  const o = p$1(e2.url);
  if (!o)
    return 1;
  const n2 = await a2.fetchServiceMetadata(o.url.path, { customParameters: l(r2)?.customParameters }).catch(() => null);
  return (r2?.layers?.length ?? n2?.layers?.length ?? 0) + (r2?.tables?.length ?? n2?.tables?.length ?? 0);
}
function D(e2, t2) {
  const { layerId: r2 } = t2, a2 = e2.layers?.find((e3) => e3.id === r2) || e2.tables?.find((e3) => e3.id === r2);
  return a2 && E(a2, t2) ? a2 : null;
}
function k(e2) {
  return "stream" !== e2.type && "layerId" in e2;
}
function E(e2, t2) {
  return !("feature" === t2.type && "layerType" in e2 && "SubtypeGroupLayer" === e2.layerType || "subtype-group" === t2.type && !("layerType" in e2));
}
async function G(e2, t2) {
  const { layersJSON: a2 } = await t$3(e2, t2);
  if (!a2)
    return null;
  const o = [...a2.layers, ...a2.tables];
  return (e3) => o.find((t3) => t3.id === e3.id);
}
export {
  I as load
};
