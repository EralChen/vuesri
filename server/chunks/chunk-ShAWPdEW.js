import { aM as s$1, cz as t, cA as s, aQ as a$1, aY as j$1, aR as p$1 } from "./chunk-KFNcxJaF.js";
import { t as t$3 } from "./chunk-_vnu0ofh.js";
import { a, n, s as s$2, i, l as l$1, t as t$2, r, e as e$1 } from "./chunk--tEXwTLn.js";
import { populateGroupLayer as w } from "./chunk-7mnuwwPD.js";
import { e, l } from "./chunk-9JEQPlhY.js";
import { t as t$1 } from "./chunk-rOxUIHGZ.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function g(e2, t2) {
  const r2 = e2.instance.portalItem;
  if (r2?.id)
    return await r2.load(t2), I(e2), L(e2, t2);
}
function I(t2) {
  const r2 = t2.instance.portalItem;
  if (!r2?.type || !t2.supportedTypes.includes(r2.type))
    throw new s$1("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r2?.type, expectedType: t2.supportedTypes.join(", ") });
}
async function L(e$2, t$12) {
  const r2 = e$2.instance, n2 = r2.portalItem;
  if (!n2)
    return;
  const { url: o, title: s2 } = n2, i2 = e(n2);
  if ("group" === r2.type)
    return S(r2, i2, e$2);
  o && r2.read({ url: o }, i2);
  const p = new e$1(), u = await F(e$2, p, t$12);
  return u && r2.read(u, i2), r2.resourceReferences = { portalItem: n2, paths: i2.readResourcePaths ?? [] }, "subtype-group" !== r2.type && r2.read({ title: s2 }, i2), t(r2, i2);
}
async function S(t2, r2, a2) {
  const n2 = t2.portalItem;
  if (!t2.sourceIsPortalItem)
    return;
  const { title: o, type: s$22 } = n2;
  if ("Group Layer" === s$22) {
    if (!s(n2, "Map"))
      throw new s$1("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
    return T(t2);
  }
  return t2.read({ title: o }, r2), j(t2, a2);
}
async function T(e2) {
  const t2 = e2.portalItem, r2 = await t2.fetchData("json");
  if (!r2)
    return;
  const a2 = l(t2);
  e2.read(r2, a2), await w(e2, r2, { context: a2 }), e2.resourceReferences = { portalItem: t2, paths: a2.readResourcePaths ?? [] };
}
async function j(t2, r2) {
  let n$1;
  const { portalItem: o } = t2;
  if (!o)
    return;
  const s2 = o.type, l2 = r2.layerModuleTypeMap;
  switch (s2) {
    case "Feature Service":
    case "Feature Collection":
      n$1 = l2.FeatureLayer;
      break;
    case "Stream Service":
      n$1 = l2.StreamLayer;
      break;
    case "Scene Service":
      n$1 = l2.SceneLayer;
      break;
    default:
      throw new s$1("portal:unsupported-item-type-as-group", `The item type '${s2}' is not supported as a 'IGroupLayer'`);
  }
  const i$1 = new e$1();
  let [d, m] = await Promise.all([n$1(), F(r2, i$1)]), h = () => d;
  if ("Feature Service" === s2) {
    m = o.url ? await a(m, o.url, i$1) : {};
    const e2 = n(m), r3 = s$2(m), a$12 = [];
    if (e2.length || r3?.length) {
      e2.length && a$12.push("SubtypeGroupLayer"), r3?.length && a$12.push("OrientedImageryLayer");
      const t3 = [];
      for (const e3 of a$12) {
        const r4 = l2[e3];
        t3.push(r4());
      }
      const n2 = await Promise.all(t3), o2 = /* @__PURE__ */ new Map();
      a$12.forEach((e3, t4) => {
        o2.set(e3, n2[t4]);
      }), h = (e3) => e3.layerType ? o2.get(e3.layerType) ?? d : d;
    }
    const n$12 = await E(o.url);
    return await M(t2, h, m, n$12);
  }
  return "Scene Service" === s2 && o.url && (m = await i(o, m, i$1)), l$1(m) > 0 ? await M(t2, h, m) : await v(t2, h);
}
async function v(e2, t2) {
  const { portalItem: r2 } = e2;
  if (!r2?.url)
    return;
  const a2 = await t$1(r2.url);
  a2 && M(e2, t2, { layers: a2.layers?.map(t$2), tables: a2.tables?.map(t$2) });
}
async function M(e2, t2, r2, a2) {
  let n2 = r2.layers || [];
  const s2 = r2.tables || [];
  if ("Feature Collection" === e2.portalItem?.type ? (n2.forEach((e3, t3) => {
    e3.id = t3, "Table" === e3?.layerDefinition?.type && s2.push(e3);
  }), n2 = n2.filter((e3) => "Table" !== e3?.layerDefinition?.type)) : (n2.reverse(), s2.reverse()), n2.forEach((n3) => {
    const o = a2?.(n3);
    if (o || !a2) {
      const a3 = x(e2, t2(n3), r2, n3, o);
      e2.add(a3);
    }
  }), s2.length) {
    const t3 = await a$1.FeatureLayer();
    s2.forEach((n3) => {
      const o = a2?.(n3);
      if (o || !a2) {
        const a3 = x(e2, t3, r2, n3, o);
        e2.tables.add(a3);
      }
    });
  }
}
function x(e2, t2, r2, a2, n2) {
  const o = e2.portalItem, l2 = { portalItem: o.clone(), layerId: a2.id };
  null != a2.url && (l2.url = a2.url);
  const i2 = new t2(l2);
  if ("sourceJSON" in i2 && (i2.sourceJSON = n2), "subtype-group" !== i2.type && (i2.sublayerTitleMode = "service-name"), "Feature Collection" === o.type) {
    const e3 = { origin: "portal-item", portal: o.portal || j$1.getDefault() };
    i2.read(a2, e3);
    const t3 = r2.showLegend;
    null != t3 && i2.read({ showLegend: t3 }, e3);
  }
  return i2;
}
async function F(e2, t2, r$1) {
  if (false === e2.supportsData)
    return;
  const a2 = e2.instance, n$1 = a2.portalItem;
  if (!n$1)
    return;
  let o = null;
  try {
    o = await n$1.fetchData("json", r$1);
  } catch (s2) {
  }
  if (D(a2)) {
    let e3 = null;
    const r$12 = await P(n$1, o, t2);
    if ((o?.layers || o?.tables) && r$12 > 0) {
      if (null == a2.layerId) {
        const e4 = n(o);
        a2.layerId = "subtype-group" === a2.type ? e4?.[0] : r(o);
      }
      e3 = C(o, a2), e3 && null != o.showLegend && (e3.showLegend = o.showLegend);
    }
    return r$12 > 1 && "sublayerTitleMode" in a2 && "service-name" !== a2.sublayerTitleMode && (a2.sublayerTitleMode = "item-title-and-service-name"), e3;
  }
  return o;
}
async function P(e2, r2, a2) {
  if (r2?.layers && r2?.tables)
    return l$1(r2);
  const n2 = p$1(e2.url);
  if (!n2)
    return 1;
  const o = await a2.fetchServiceMetadata(n2.url.path).catch(() => null);
  return (r2?.layers?.length ?? o?.layers?.length ?? 0) + (r2?.tables?.length ?? o?.tables?.length ?? 0);
}
function C(e2, t2) {
  const { layerId: r2 } = t2, a2 = e2.layers?.find((e3) => e3.id === r2) || e2.tables?.find((e3) => e3.id === r2);
  return a2 && k(a2, t2) ? a2 : null;
}
function D(e2) {
  return "stream" !== e2.type && "layerId" in e2;
}
function k(e2, t2) {
  return !("feature" === t2.type && "layerType" in e2 && "SubtypeGroupLayer" === e2.layerType || "subtype-group" === t2.type && !("layerType" in e2));
}
async function E(e2) {
  const { layersJSON: t2 } = await t$3(e2);
  if (!t2)
    return null;
  const a2 = [...t2.layers, ...t2.tables];
  return (e3) => a2.find((t3) => t3.id === e3.id);
}
export {
  g as load
};
