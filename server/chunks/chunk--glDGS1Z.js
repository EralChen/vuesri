import { dR as ot, cX as y$1, cs as t$1, aO as s$3, aV as e$2, aX as y$2, a_ as c$1, bZ as S$1, aT as s$4, eL as r$1, ck as b$1, hX as I$2, dT as g, dF as U, aC as M$1, tE as e$3, bY as j, jS as s$5, jD as c$2, d1 as n$1, ax as t$2, d2 as f$1, jb as l$2, tF as E$2, hZ as o$2, dv as y$3, dn as t$3, dN as o$3, jH as p$3, jI as p$4, dm as d$2, gb as m$1, jN as y$4, dp as P$1, jO as m$2, a$ as b$2, hG as n$2, bQ as V, ct as e$4, cU as s$6, cY as x$1 } from "./chunk-ejFG4zJ0.js";
import { z as z$1 } from "./chunk-Lhv5-gDf.js";
import { G, p as p$5, t as t$4, T as T$3 } from "./chunk-mTfv55ir.js";
import { a } from "./chunk-yIlBOqc3.js";
import { m } from "./chunk-HoJyfhBe.js";
import { $ } from "./chunk-P_v7gizd.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
const i$1 = "ESRI__DESTINATION_ID", s$2 = "ESRI__ORIGIN_ID";
let o$1 = class o {
  constructor() {
    this._featureLookup = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return o.instance || (o.instance = new o()), o.instance;
  }
  static resetInstance() {
    o.instance && (o.instance = null);
  }
  deleteFromStore(e2) {
    e2.forEach((e3) => {
      this._featureLookup.delete(e3);
    });
  }
  readFromStoreByList(e2) {
    const t2 = [];
    return e2.forEach((e3) => {
      const r2 = this.readFromStoreById(e3);
      r2 && t2.push(r2);
    }), t2;
  }
  readFromStoreById(e2) {
    return this._featureLookup.get(e2) ?? null;
  }
  writeToStore(o3, n2, p2) {
    const a2 = [];
    return o3.forEach((o4) => {
      if (!o4?.id)
        return;
      o4.properties || (o4.properties = []);
      let u2, c2 = null;
      if (p2 && o4.properties[p2] && (c2 = ot(o4.properties[p2])), "originId" in o4 && "destinationId" in o4 && (o4.properties[s$2] = o4.originId, o4.properties[i$1] = o4.destinationId), o4.properties[n2] = o4.id, o4.id && this._featureLookup.has(o4.id) && this._featureLookup.get(o4.id).attributes) {
        const e2 = this._featureLookup.get(o4.id), i2 = JSON.parse(JSON.stringify(Object.assign(e2.attributes, o4.properties)));
        p2 && o4.properties[p2] && (i2[p2] = y$1(o4.properties[p2])), u2 = new t$1(c2 ? JSON.parse(JSON.stringify(c2)) : e2?.geometry ? JSON.parse(JSON.stringify(e2.geometry)) : null, i2, null, o4.properties[n2]);
      } else
        u2 = new t$1(c2 ? JSON.parse(JSON.stringify(c2)) : null, o4.properties, null, o4.properties[n2]);
      this._featureLookup.set(o4.id, u2), a2.push(u2);
    }), a2;
  }
};
var T$2;
!function(s2) {
  s2.ELEMENTUID = "ELEMENTUID", s2.TYPENAME = "TYPENAME";
}(T$2 || (T$2 = {}));
[T$2.ELEMENTUID, T$2.TYPENAME];
var d$1, p$2;
!function(s2) {
  s2[s2.ELEMENTUID = 0] = "ELEMENTUID", s2[s2.TYPENAME = 1] = "TYPENAME";
}(d$1 || (d$1 = {})), function(s2) {
  s2[s2.ELEMENTUID = 0] = "ELEMENTUID", s2[s2.TYPENAME = 1] = "TYPENAME", s2[s2.FROMUID = 2] = "FROMUID", s2[s2.TOUID = 3] = "TOUID";
}(p$2 || (p$2 = {}));
var e$1, l$1, s$1, T$1;
!function(e2) {
  e2[e2.featureResult = 0] = "featureResult", e2[e2.countResult = 1] = "countResult", e2[e2.idsResult = 2] = "idsResult";
}(e$1 || (e$1 = {})), function(e2) {
  e2[e2.upperLeft = 0] = "upperLeft", e2[e2.lowerLeft = 1] = "lowerLeft";
}(l$1 || (l$1 = {})), function(e2) {
  e2[e2.sqlTypeBigInt = 0] = "sqlTypeBigInt", e2[e2.sqlTypeBinary = 1] = "sqlTypeBinary", e2[e2.sqlTypeBit = 2] = "sqlTypeBit", e2[e2.sqlTypeChar = 3] = "sqlTypeChar", e2[e2.sqlTypeDate = 4] = "sqlTypeDate", e2[e2.sqlTypeDecimal = 5] = "sqlTypeDecimal", e2[e2.sqlTypeDouble = 6] = "sqlTypeDouble", e2[e2.sqlTypeFloat = 7] = "sqlTypeFloat", e2[e2.sqlTypeGeometry = 8] = "sqlTypeGeometry", e2[e2.sqlTypeGUID = 9] = "sqlTypeGUID", e2[e2.sqlTypeInteger = 10] = "sqlTypeInteger", e2[e2.sqlTypeLongNVarchar = 11] = "sqlTypeLongNVarchar", e2[e2.sqlTypeLongVarbinary = 12] = "sqlTypeLongVarbinary", e2[e2.sqlTypeLongVarchar = 13] = "sqlTypeLongVarchar", e2[e2.sqlTypeNChar = 14] = "sqlTypeNChar", e2[e2.sqlTypeNVarChar = 15] = "sqlTypeNVarChar", e2[e2.sqlTypeOther = 16] = "sqlTypeOther", e2[e2.sqlTypeReal = 17] = "sqlTypeReal", e2[e2.sqlTypeSmallInt = 18] = "sqlTypeSmallInt", e2[e2.sqlTypeSqlXml = 19] = "sqlTypeSqlXml", e2[e2.sqlTypeTime = 20] = "sqlTypeTime", e2[e2.sqlTypeTimestamp = 21] = "sqlTypeTimestamp", e2[e2.sqlTypeTimestamp2 = 22] = "sqlTypeTimestamp2", e2[e2.sqlTypeTinyInt = 23] = "sqlTypeTinyInt", e2[e2.sqlTypeVarbinary = 24] = "sqlTypeVarbinary", e2[e2.sqlTypeVarchar = 25] = "sqlTypeVarchar";
}(s$1 || (s$1 = {})), function(e2) {
  e2[e2.OID_ARRAY = 0] = "OID_ARRAY", e2[e2.GLOBALID_ARRAY = 1] = "GLOBALID_ARRAY", e2[e2.STRING_ARRAY = 2] = "STRING_ARRAY", e2[e2.IDENTIFIER_ARRAY = 3] = "IDENTIFIER_ARRAY";
}(T$1 || (T$1 = {}));
function u$1(e2) {
  if (!e2.spatialReference.isWGS84)
    throw new s$3("knowledge-graph:layer-support-utils", "The extentToInBoundsRings function only supports WGS84 spatial references.");
  let r2;
  return r2 = e2.xmax > 180 && e2.xmin < 180 ? [[[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [180, e2.ymax], [180, e2.ymin], [e2.xmin, e2.ymin]], [[-180, e2.ymin], [-180, e2.ymax], [e2.xmax - 360, e2.ymax], [e2.xmax - 360, e2.ymin], [-180, e2.ymin]]] : e2.xmax > 180 && e2.xmin > 180 ? [[[e2.xmin - 360, e2.ymin], [e2.xmin - 360, e2.ymax], [e2.xmax - 360, e2.ymax], [e2.xmax - 360, e2.ymin], [e2.xmin - 360, e2.ymin]]] : e2.xmax > -180 && e2.xmin < -180 ? [[[e2.xmin + 360, e2.ymin], [e2.xmin + 360, e2.ymax], [180, e2.ymax], [180, e2.ymin], [e2.xmin + 360, e2.ymin]], [[-180, e2.ymin], [-180, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [-180, e2.ymin]]] : e2.xmax < -180 && e2.xmin < -180 ? [[[e2.xmin + 360, e2.ymin], [e2.xmin + 360, e2.ymax], [e2.xmax + 360, e2.ymax], [e2.xmax + 360, e2.ymin], [e2.xmin + 360, e2.ymin]]] : [[[e2.xmin, e2.ymin], [e2.xmin, e2.ymax], [e2.xmax, e2.ymax], [e2.xmax, e2.ymin], [e2.xmin, e2.ymin]]], r2;
}
async function w$1(e2, t2) {
  const r2 = [], n2 = /* @__PURE__ */ new Map(), s2 = [];
  if (t2.dataModel?.relationshipTypes)
    for (const i2 of t2.dataModel.relationshipTypes)
      i2.name && n2.set(i2.name, []);
  for (const i2 of e2)
    n2.has(i2.typeName) && n2.get(i2.typeName)?.push(i2.id);
  for (const [o3, l2] of n2) {
    if (l2.length < 1)
      continue;
    const e3 = new a({ openCypherQuery: `MATCH (n)-[r:${o3}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`, bindParameters: { ids: l2 } });
    s2.push(G(t2, e3).then(async (e4) => {
      const t3 = e4.resultRowsStream.getReader();
      for (; ; ) {
        const { done: e5, value: n3 } = await t3.read();
        if (e5)
          break;
        for (const t4 of n3)
          r2.push({ id: t4[0], typeName: t4[1] }), r2.push({ id: t4[2], typeName: t4[3] });
      }
    }));
  }
  return await Promise.all(s2), r2;
}
const w = "ESRI__ID", T = "ESRI__ORIGIN_ID", D = "ESRI__DESTINATION_ID", I$1 = "ESRI__LAYOUT_GEOMETRY", M = "ESRI__AGGREGATION_COUNT", k = 12;
let E$1 = class E extends S$1 {
  constructor(e2) {
    super(e2), this._processingCacheUpdatesLookup = /* @__PURE__ */ new Map(), this.knowledgeGraph = null, this.inclusionModeDefinition = { generateAllSublayers: true, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.entityTypeNames = /* @__PURE__ */ new Set(), this.relationshipTypeNames = /* @__PURE__ */ new Set(), this.geographicLookup = /* @__PURE__ */ new Map(), this.sublayerCaches = /* @__PURE__ */ new Map(), this.nodeConnectionsLookup = /* @__PURE__ */ new Map(), this.relationshipConnectionsLookup = /* @__PURE__ */ new Map(), this.memberIdTypeLookup = /* @__PURE__ */ new Map();
    const t2 = /* @__PURE__ */ new Map();
    e2.knowledgeGraph.dataModel.entityTypes?.forEach((i2) => {
      i2.name && (t2.set(i2.name, "entity"), this._processingCacheUpdatesLookup.set(i2.name, []), e2.inclusionModeDefinition && !e2.inclusionModeDefinition?.generateAllSublayers || this.entityTypeNames.add(i2.name), i2.properties?.forEach((e3) => {
        e3.geometryType && "esriGeometryNull" !== e3.geometryType && this.geographicLookup.set(i2.name, { name: e3.name ?? "", geometryType: e3.geometryType });
      }));
    }), e2.knowledgeGraph.dataModel.relationshipTypes?.forEach((i2) => {
      i2.name && (t2.set(i2.name, "relationship"), this._processingCacheUpdatesLookup.set(i2.name, []), e2.inclusionModeDefinition && !e2.inclusionModeDefinition?.generateAllSublayers || this.relationshipTypeNames.add(i2.name), i2.properties?.forEach((e3) => {
        e3.geometryType && "esriGeometryNull" !== e3.geometryType && this.geographicLookup.set(i2.name, { name: e3.name ?? "", geometryType: e3.geometryType });
      }));
    }), e2.inclusionModeDefinition?.namedTypeDefinitions.forEach((i2, s2) => {
      if ("entity" === t2.get(s2))
        this.entityTypeNames.add(s2);
      else {
        if ("relationship" !== t2.get(s2))
          return s$4.getLogger(this).warn(`A named type, ${s2}, was in the inclusion list that wasn't in the data model and will be removed`), void e2.inclusionModeDefinition?.namedTypeDefinitions.delete(s2);
        this.relationshipTypeNames.add(s2);
      }
      const a2 = /* @__PURE__ */ new Map();
      i2.members?.forEach((e3) => {
        r$1(this.memberIdTypeLookup, e3.id, () => /* @__PURE__ */ new Set()).add(s2);
        const t3 = this.getById(e3.id);
        t3 && a2.set(e3.id, t3);
      }), this.sublayerCaches.set(s2, a2);
    });
  }
  addToLayer(e2) {
    e2.forEach(({ typeName: e3, id: t2 }) => {
      if (!this.inclusionModeDefinition)
        throw new s$3("knowledge-graph:layer-data-manager", "You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");
      if (this.inclusionModeDefinition.namedTypeDefinitions.has(e3)) {
        if (this.inclusionModeDefinition.namedTypeDefinitions.has(e3)) {
          const i2 = this.inclusionModeDefinition.namedTypeDefinitions.get(e3);
          i2.members || (i2.members = /* @__PURE__ */ new Map()), i2.members.set(t2, { id: t2 }), r$1(this.memberIdTypeLookup, t2, () => /* @__PURE__ */ new Set()).add(e3);
        }
      } else {
        const i2 = /* @__PURE__ */ new Map();
        i2.set(t2, { id: t2 }), this.inclusionModeDefinition.namedTypeDefinitions.set(e3, { useAllData: false, members: i2 }), r$1(this.memberIdTypeLookup, t2, () => /* @__PURE__ */ new Set()).add(e3);
      }
    });
  }
  getById(e2) {
    return o$1.getInstance().readFromStoreById(e2);
  }
  async getData(e2, t2, i2) {
    if (t2.objectType.name && this.inclusionModeDefinition?.namedTypeDefinitions && this.inclusionModeDefinition.namedTypeDefinitions.size > 0 && !this.inclusionModeDefinition.namedTypeDefinitions.has(t2.objectType.name))
      return [];
    let n2;
    if (n2 = e2 || new b$1({ where: "1=1", outFields: ["*"] }), "link-chart" === t2.parentCompositeLayer.type) {
      const e3 = t2.parentCompositeLayer, i3 = this._processingCacheUpdatesLookup.get(t2.objectType.name ?? ""), o3 = n2.outFields, s2 = n2.geometry;
      let a2 = "", r2 = "";
      s2 && s2.extent && (a2 = z$1(s2.extent.ymin, s2.extent.xmin, k), r2 = z$1(s2.extent.ymax, s2.extent.xmax, k)), o3 && 1 === o3.length && o3[0] === w && "1=1" === n2.where || await Promise.all(i3 ?? []);
      const d2 = this.sublayerCaches.has(t2.objectType.name ?? "") ? Array.from(this.sublayerCaches.get(t2.objectType.name)?.values()) : [], m2 = [];
      return d2.forEach((i4) => {
        if (this.relationshipTypeNames.has(t2.objectType.name) ? i4.geometry = e3.relationshipLinkChartDiagramLookup.get(i4.attributes[t2.objectIdField]) : i4.geometry = e3.entityLinkChartDiagramLookup.get(i4.attributes[t2.objectIdField]), i4.attributes[I$1] = i4.geometry, a2 && r2) {
          const n3 = e3.linkChartGeohashLookup.get(i4.attributes[t2.objectIdField]);
          n3 ? n3 >= a2 && n3 <= r2 && m2.push(i4) : m2.push(i4);
        } else
          m2.push(i4);
      }), m2;
    }
    return this.retrieveDataFromService(n2, t2, i2);
  }
  async getConnectedRecordIds(e2, t2) {
    const i2 = [];
    let o3 = "";
    const s2 = [], a$1 = /* @__PURE__ */ new Map();
    if (e2.forEach((e3) => {
      if (this.memberIdTypeLookup.has(e3))
        for (const t3 of this.memberIdTypeLookup.get(e3)) {
          if (!this.entityTypeNames.has(t3))
            return;
          a$1.has(t3) ? a$1.get(t3)?.push(e3) : a$1.set(t3, [e3]);
        }
    }), t2 && 0 !== t2?.length) {
      for (const e3 of t2)
        o3 = o3 + e3 + "|";
      o3 = o3.slice(0, -1);
    }
    return a$1.forEach((e3, a$12) => {
      let r2;
      r2 = t2 && 0 !== t2?.length ? `MATCH (n:${a$12})-[r:${o3}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]` : `MATCH (n:${a$12})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;
      const p2 = new Promise((t3) => {
        (async () => {
          const t4 = (await G(this.knowledgeGraph, new a({ openCypherQuery: r2, bindParameters: { ids: e3 } }))).resultRowsStream.getReader();
          try {
            for (; ; ) {
              const { done: e4, value: n2 } = await t4.read();
              if (e4)
                break;
              for (let t5 = 0; t5 < n2.length; t5++) {
                const e5 = n2[t5];
                i2.push({ id: e5[0], typeName: e5[1] }), i2.push({ id: e5[2], typeName: e5[3] });
              }
            }
          } catch (o4) {
            if ("AbortError" !== o4.name)
              throw o4;
            s$4.getLogger(this).info("Request aborted as expected");
          }
        })().then(() => {
          t3();
        });
      });
      s2.push(p2);
    }), this.refreshCacheContent(), await Promise.all(s2), i2;
  }
  async refreshCacheContent(e2, t2, n2, s2 = true) {
    const a$1 = o$1.getInstance(), r2 = [], p2 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map();
    this.knowledgeGraph.dataModel.entityTypes?.forEach((e3) => {
      e3.name && d2.set(e3.name, e3);
    }), this.knowledgeGraph.dataModel.relationshipTypes?.forEach((e3) => {
      e3.name && d2.set(e3.name, e3);
    }), e2 || this.inclusionModeDefinition ? e2 ? e2.forEach((e3) => {
      if (this.memberIdTypeLookup.has(e3))
        for (const t3 of this.memberIdTypeLookup.get(e3))
          p2.has(t3) ? p2.get(t3)?.push(e3) : p2.set(t3, [e3]);
    }) : this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e3, t3) => {
      e3.useAllData ? p2.set(t3, null) : e3.members && e3.members.forEach((e4) => {
        p2.has(t3) && null !== p2.get(t3) ? p2.get(t3)?.push(e4.id) : p2.set(t3, [e4.id]);
      });
    }) : (this.knowledgeGraph.dataModel.entityTypes?.forEach((e3) => {
      e3.name && p2.set(e3.name, null);
    }), this.knowledgeGraph.dataModel.entityTypes?.forEach((e3) => {
      e3.name && p2.set(e3.name, null);
    }));
    for (const [m2, l2] of p2) {
      const e3 = new Promise((e4) => {
        const r3 = async () => {
          const e5 = /* @__PURE__ */ new Set(), r4 = [];
          let p3, h = "", c2 = false;
          if (t2 || d2.get(m2)?.properties?.forEach((t3) => {
            t3.name && e5.add(t3.name);
          }), n2 && this.geographicLookup.has(m2)) {
            const t3 = this.geographicLookup.get(m2)?.name;
            t3 && e5.add(t3);
          }
          if (this.entityTypeNames.has(m2))
            h = `MATCH (n:${m2}) ${l2 ? "WHERE id(n) IN $ids " : ""}return ID(n)`, e5.forEach((e6) => {
              h += `, n.${e6}`, r4.push(e6);
            });
          else {
            if (!this.relationshipTypeNames.has(m2))
              throw new s$3("knowledge-graph:layer-data-manager", `The graph type of ${m2} could not be determined. Was this type set in the KG data model and inclusion definition?`);
            c2 = true, h = `MATCH ()-[n:${m2}]->() ${l2 ? "WHERE id(n) IN $ids " : ""}return ID(n), id(startNode(n)), id(endNode(n))`, e5.forEach((e6) => {
              h += `, n.${e6}`, r4.push(e6);
            });
          }
          p3 = new a(l2 ? { openCypherQuery: h, bindParameters: { ids: l2 } } : { openCypherQuery: h });
          const y2 = (await G(this.knowledgeGraph, p3)).resultRowsStream.getReader();
          for (; ; ) {
            const { done: e6, value: t3 } = await y2.read();
            if (e6)
              break;
            const i2 = [];
            for (let s3 = 0; s3 < t3.length; s3++) {
              const e7 = t3[s3];
              let n4 = 0, a2 = 0;
              const p5 = { properties: {} };
              for (p5.id = e7[n4], n4++, a2++, c2 && (p5.originId = e7[n4], n4++, a2++, p5.destinationId = e7[n4], n4++, a2++, r$1(this.nodeConnectionsLookup, p5.originId, () => /* @__PURE__ */ new Set()).add(p5.id), r$1(this.nodeConnectionsLookup, p5.destinationId, () => /* @__PURE__ */ new Set()).add(p5.id), r$1(this.relationshipConnectionsLookup, p5.id, () => [p5.originId, p5.destinationId])); n4 < e7.length; n4++)
                p5.properties[r4[n4 - a2]] = e7[n4];
              i2.push(p5);
            }
            const n3 = a$1.writeToStore(i2, w, this.geographicLookup.get(m2)?.name);
            this.sublayerCaches.has(m2) || this.sublayerCaches.set(m2, /* @__PURE__ */ new Map()), s2 && !this.inclusionModeDefinition?.namedTypeDefinitions.has(m2) && this.inclusionModeDefinition?.namedTypeDefinitions.set(m2, { useAllData: false, members: /* @__PURE__ */ new Map() }), s2 && !this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members && (this.inclusionModeDefinition.namedTypeDefinitions.get(m2).members = /* @__PURE__ */ new Map());
            const p4 = this.sublayerCaches.get(m2);
            n3.forEach((e7) => {
              p4?.set(e7.attributes[w], e7), s2 && !this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members.has(e7.attributes[w]) && (this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members.set(e7.attributes[w], { id: e7.attributes[w] }), r$1(this.memberIdTypeLookup, e7.attributes[w], () => /* @__PURE__ */ new Set()).add(m2));
            });
          }
        };
        r3().then(() => {
          e4(null);
        });
      });
      r2.push(e3), this._processingCacheUpdatesLookup.get(m2)?.push(e3);
    }
    await Promise.all(r2);
  }
  removeFromLayer(e2) {
    const t2 = /* @__PURE__ */ new Set(), i2 = new Set(e2.map((e3) => e3.id));
    for (const n2 of e2)
      t2.add(n2.typeName), 1 === this.memberIdTypeLookup.get(n2.id)?.size ? this.memberIdTypeLookup.delete(n2.id) : this.memberIdTypeLookup.get(n2.id)?.delete(n2.typeName), this.inclusionModeDefinition?.namedTypeDefinitions.forEach((e3, t3) => {
        t3 === n2.typeName && e3.members?.has(n2.id) && e3.members.delete(n2.id);
      });
    t2.forEach((e3) => {
      this.sublayerCaches.get(e3)?.forEach((t3, n2) => {
        i2.has(n2) && this.sublayerCaches.get(e3)?.delete(n2);
      });
    });
  }
  async retrieveDataFromService(e2, t2, n2) {
    const o3 = o$1.getInstance(), a$1 = /* @__PURE__ */ new Set(), r2 = [];
    let p2, g$1 = "", T2 = [];
    const D2 = "relationship" === t2.graphType, I2 = this.inclusionModeDefinition?.namedTypeDefinitions?.get(t2.objectType.name)?.useAllData, M2 = t2.parentCompositeLayer.sublayerIdsCache.get(t2.objectType.name);
    let k2 = !I2 && M2 ? Array.from(M2).sort() : null;
    if (this.inclusionModeDefinition?.namedTypeDefinitions?.get(t2.objectType.name)?.useAllData)
      this.inclusionModeDefinition?.namedTypeDefinitions?.get(t2.objectType.name)?.useAllData && null != e2.objectIds && (k2 = e2.objectIds);
    else if (null != e2.objectIds && k2 && k2.length > 0) {
      const t3 = e2.objectIds;
      e2.objectIds = k2.filter((e3) => t3.includes(e3));
    } else if (null != e2.objectIds)
      k2 = e2.objectIds;
    else {
      if (this.inclusionModeDefinition?.namedTypeDefinitions.has(t2.objectType.name) && (!this.inclusionModeDefinition.namedTypeDefinitions.get(t2.objectType.name)?.members || this.inclusionModeDefinition.namedTypeDefinitions.get(t2.objectType.name)?.members?.size < 1))
        return e2.objectIds = [], [];
      e2.objectIds = k2;
    }
    if (null != e2.outFields) {
      const i2 = e2.outFields;
      i2.includes("*") ? t2.fields.forEach((e3) => {
        a$1.add(e3.name);
      }) : i2.forEach((e3) => {
        e3 !== w && e3 !== t2.geometryFieldName && a$1.add(e3);
      });
    }
    if (null != e2.geometry) {
      const n3 = e2.geometry;
      let o4;
      const c2 = t2.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition, u2 = c2?.spatialReference, w2 = c2?.serviceCapabilities?.geometryCapabilities;
      let T3 = w2?.geometryMaxBoundingRectangleSizeX, I3 = w2?.geometryMaxBoundingRectangleSizeY;
      if (n3?.extent?.spatialReference && !n3.spatialReference?.isWGS84 ? (await I$2(n3.extent.spatialReference, g), o4 = U(n3.extent, g)) : o4 = n3.extent, T3 && I3 && u2) {
        if (4326 !== u2.wkid) {
          const e3 = new M$1({ spatialReference: u2, xmax: T3, ymax: I3 }), t3 = U(e3, g);
          T3 = t3.xmax, I3 = t3.ymax;
        }
        if (o4.xmax - o4.xmin > T3)
          throw new s$3("knowledge-graph:layer-data-manager", `Extent x bounds should be within ${T3}° latitude, limit exceeded`);
        if (o4.ymax - o4.ymin > I3)
          throw new s$3("knowledge-graph:layer-data-manager", `Extent y bounds should be within ${I3}° longitude, limit exceeded`);
      }
      if (null != e2.where && "1=1" !== e2.where) {
        const i2 = await e$3(e2.where.toUpperCase(), t2.fieldsIndex);
        t2.fields.forEach((e3) => {
          i2.fieldNames.includes(e3.name) && a$1.add(e3.name);
        });
      }
      g$1 = D2 ? `Match ()-[n:${t2.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t2.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))` : `Match (n:${t2.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t2.geometryFieldName}) return ID(n)`, t2.geometryFieldName && a$1.add(t2.geometryFieldName), a$1.forEach((e3) => {
        g$1 += `, n.${e3}`, r2.push(e3);
      }), p2 = new a({ openCypherQuery: g$1, bindParameters: { param_filter_geom: new j({ rings: u$1(o4) }) } });
    } else {
      let i2 = "";
      if (null != e2.where && "1=1" !== e2.where) {
        const n4 = await e$3(e2.where, t2.fieldsIndex);
        t2.fields.forEach((e3) => {
          n4.fieldNames.includes(e3.name) && a$1.add(e3.name);
        });
        const o5 = /* @__PURE__ */ new Set(["column-reference", "string", "number", "binary-expression"]), r3 = /* @__PURE__ */ new Set(["=", "<", "<=", "<>", ">", ">=", "AND", "OR", "LIKE"]);
        let p3 = false;
        const d2 = (e3) => {
          if ("column-reference" === e3.type)
            return `n.${e3.column}`;
          if ("string" === e3.type)
            return `'${e3.value}'`;
          if ("number" === e3.type)
            return `${e3.value}`;
          if ("binary-expression" === e3.type && o5.has(e3.left.type) && o5.has(e3.right.type) && r3.has(e3.operator))
            return `${d2(e3.left)} ${e3.operator} ${d2(e3.right)}`;
          if ("binary-expression" === e3.type && "LIKE" === e3.operator) {
            let t3 = "";
            if ("function" === e3.left.type && "column-reference" === e3.left.args.value[0].type)
              t3 += `lower(n.${e3.left.args.value[0].column})`;
            else {
              if ("column-reference" !== e3.left.type)
                return p3 = true, "";
              t3 += `lower(n.${e3.left.column})`;
            }
            if (t3 += " CONTAINS (", "string" !== e3.right.type)
              return p3 = true, "";
            {
              let i3 = e3.right.value;
              "%" === i3.charAt(0) && (i3 = i3.slice(1)), "%" === i3.charAt(i3.length - 1) && (i3 = i3.slice(0, -1)), t3 += `'${i3.toLowerCase()}')`;
            }
            return t3;
          }
          return p3 = true, "";
        };
        i2 = d2(n4.parseTree), p3 && (i2 = "");
      }
      let n3 = "";
      n3 = D2 ? `Match ()-[n:${t2.objectType.name}]->()` : `Match (n:${t2.objectType.name})`;
      let o4 = false;
      k2 && (o4 = true, n3 += " WHERE ID(n) IN $ids"), i2 && (n3 += o4 ? " AND" : " WHERE", n3 += ` ${i2}`), n3 += " return ID(n)", D2 && (n3 += ", id(startNode(n)), id(endNode(n))"), e2.returnGeometry && t2.geometryFieldName && a$1.add(t2.geometryFieldName), a$1.forEach((e3) => {
        n3 += `, n.${e3}`, r2.push(e3);
      }), p2 = new a(k2 ? { openCypherQuery: n3, bindParameters: { ids: k2 } } : { openCypherQuery: n3 });
    }
    const E3 = (await G(t2.parentCompositeLayer.dataManager.knowledgeGraph, p2, n2)).resultRowsStream.getReader();
    for (; ; ) {
      const { done: e3, value: i2 } = await E3.read();
      if (e3)
        break;
      const n3 = [];
      for (let t3 = 0; t3 < i2.length; t3++) {
        const e4 = i2[t3];
        let o4 = 0, s2 = 0;
        const a2 = { properties: {} };
        for (a2.id = e4[o4], o4++, s2++, D2 && (a2.originId = e4[o4], o4++, s2++, a2.destinationId = e4[o4], o4++, s2++); o4 < e4.length; o4++)
          a2.properties[r2[o4 - s2]] = e4[o4];
        n3.push(a2);
      }
      T2 = T2.concat(o3.writeToStore(n3, w, t2.parentCompositeLayer.dataManager.geographicLookup.get(t2.objectType.name)?.name));
    }
    return T2;
  }
};
e$2([y$2()], E$1.prototype, "knowledgeGraph", void 0), e$2([y$2()], E$1.prototype, "inclusionModeDefinition", void 0), e$2([y$2()], E$1.prototype, "entityTypeNames", void 0), e$2([y$2()], E$1.prototype, "relationshipTypeNames", void 0), e$2([y$2()], E$1.prototype, "geographicLookup", void 0), e$2([y$2()], E$1.prototype, "sublayerCaches", void 0), e$2([y$2()], E$1.prototype, "nodeConnectionsLookup", void 0), e$2([y$2()], E$1.prototype, "relationshipConnectionsLookup", void 0), e$2([y$2()], E$1.prototype, "memberIdTypeLookup", void 0), E$1 = e$2([c$1("esri.rest.knowledgeGraph.knowledgeGraphLayer.KnowledgeGraphLayerDataManager")], E$1);
const t = s$5(), p$1 = (s2) => {
  let p2 = class extends s2 {
    constructor() {
      super(...arguments), this.fields = [], this.fieldsIndex = null;
    }
  };
  return e$2([y$2(t.fields)], p2.prototype, "fields", void 0), e$2([y$2(t.fieldsIndex)], p2.prototype, "fieldsIndex", void 0), p2 = e$2([c$1("esri.layers.knowledgeGraphLayer.KnowledgeGraphSublayerBase")], p2), p2;
};
let I = class extends c$2(p$1(n$1(t$2(f$1(b$2))))) {
  constructor(e2) {
    if (super(e2), this.capabilities = l$2(false, false), this.definitionExpression = "", this.displayField = "", this.elevationInfo = null, this.geometryType = null, this.geometryFieldName = null, this.graphType = null, this.hasM = false, this.hasZ = false, this.labelsVisible = null, this.labelingInfo = null, this.objectIdField = w, this.objectType = null, this.parentCompositeLayer = null, this.popupEnabled = true, this.popupTemplate = null, this.source = { openPorts: () => this.load().then(() => {
      const e3 = new MessageChannel();
      return new E$2(e3.port1, { channel: e3, client: { queryFeatures: (e4, t2 = {}) => {
        const r2 = b$1.fromJSON(e4);
        return this.queryFeaturesJSON(r2, t2);
      } } }), [e3.port2];
    }) }, this.type = "knowledge-graph-sublayer", "link-chart" === e2.parentCompositeLayer.type)
      "relationship" === e2.graphType ? this.geometryType = "polyline" : this.geometryType = "point", this.geometryFieldName = I$1;
    else if (e2.parentCompositeLayer.dataManager.geographicLookup.get(e2.objectType.name)?.geometryType && "esriGeometryNull" !== e2.parentCompositeLayer.dataManager.geographicLookup.get(e2.objectType.name)?.geometryType) {
      const t2 = e2.parentCompositeLayer.dataManager.geographicLookup.get(e2.objectType.name);
      this.geometryFieldName = t2?.name ?? null, this.geometryType = t2?.geometryType ? o$2.fromJSON(t2.geometryType) : null;
      const r2 = t2?.name, o3 = r2 ? e2.objectType.properties?.[r2] : null;
      o3 ? (this.hasM = o3.hasM ?? false, this.hasZ = o3.hasZ ?? false) : (this.hasM = false, this.hasZ = false);
    } else
      this.geometryType = null;
    e2.objectType.properties?.forEach((e3) => {
      let t2 = null, r2 = e3.fieldType;
      "esriFieldTypeOID" === r2 && (r2 = "esriFieldTypeInteger"), this.fields.push(y$3.fromJSON({ name: e3.name, type: r2, alias: e3.alias, defaultValue: t2, editable: e3.editable, nullable: e3.nullable }));
    }), this.fields.push(y$3.fromJSON({ name: this.objectIdField, type: "esriFieldTypeString", alias: this.objectIdField, editable: false })), this.fields.push(y$3.fromJSON({ name: M, type: "esriFieldTypeInteger", alias: M, editable: false })), this._set("fields", [...this.fields]), e2.parentCompositeLayer.dataManager.knowledgeGraph.dataModel?.spatialReference && (this.spatialReference = e2.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference), "link-chart" === e2.parentCompositeLayer.type ? "relationship" === e2.graphType ? this.renderer = t$3(o$3(o$2.toJSON("polyline")).renderer) : this.renderer = t$3(o$3(o$2.toJSON("point")).renderer) : this.renderer = t$3(o$3(o$2.toJSON(this.geometryType)).renderer);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e2) {
    p$3(e2, this.fieldsIndex), this._set("renderer", e2);
  }
  createPopupTemplate(e2) {
    return p$4(this, e2);
  }
  createQuery() {
    return new b$1({ where: "1=1", outFields: ["*"] });
  }
  getField(e2) {
    for (let t2 = 0; t2 < this.fields.length; t2++)
      if (this.fields[t2].name === e2)
        return this.fields[t2];
    return null;
  }
  getFieldDomain(e2, t2) {
    return null;
  }
  async queryFeatures(e2, t2) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e2), s2 = d$2.fromJSON(await o3.executeQuery(r2.toJSON(), t2?.signal));
    return s2.features.forEach((e3) => {
      e3.sourceLayer = this;
    }), s2;
  }
  async queryFeaturesJSON(e2, t2) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e2);
    return await o3.executeQuery(r2.toJSON(), t2?.signal);
  }
  async queryFeatureCount(e2, t2) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e2);
    return o3.executeQueryForCount(r2.toJSON(), t2?.signal);
  }
  async queryExtent(e2 = {}, t2) {
    const r2 = { ...e2, returnGeometry: true }, { resolvedQuery: o3, queryEngine: s2 } = await this._setupQueryObjects(r2), i2 = await s2.executeQueryForExtent(o3.toJSON(), t2?.signal);
    let a2;
    return a2 = null != i2.extent?.xmin && null != i2.extent?.xmax && null != i2.extent?.ymin && null != i2.extent?.ymax ? new M$1(i2.extent) : new M$1(), { count: i2.count, extent: a2 };
  }
  async queryObjectIds(e2, t2) {
    const r2 = b$1.from(e2);
    let o3;
    if ("link-chart" === this.parentCompositeLayer.type && this._cachedQueryEngine)
      o3 = this._cachedQueryEngine;
    else {
      const e3 = await this.parentCompositeLayer.dataManager.getData(r2, this, t2);
      o3 = this.loadQueryEngine(e3);
    }
    return o3.executeQueryForIds(r2.toJSON(), t2?.signal);
  }
  loadQueryEngine(e2) {
    const t2 = new m({ geometryType: o$2.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ }), r2 = new $({ fieldsIndex: this.fieldsIndex.toJSON(), geometryType: o$2.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: this.spatialReference.toJSON(), timeInfo: null, featureStore: t2 });
    return r2.featureStore.addMany(e2), r2;
  }
  async refreshCachedQueryEngine() {
    const e2 = await this.parentCompositeLayer.dataManager.getData(new b$1({ where: "1=1", outFields: [w] }), this);
    this._cachedQueryEngine = this.loadQueryEngine(e2);
  }
  async _setupQueryObjects(e2, t2) {
    const r2 = b$1.from(e2), o3 = r2.geometry;
    let s2;
    if (o3 && !o3.spatialReference?.isWGS84 && (await I$2(o3.spatialReference, g), r2.geometry = U(o3 instanceof j || o3 instanceof m$1 ? o3 : o3.extent, g)), "link-chart" === this.parentCompositeLayer.type && this._cachedQueryEngine)
      s2 = this._cachedQueryEngine;
    else {
      const e3 = await this.parentCompositeLayer.dataManager.getData(r2, this, t2);
      s2 = this.loadQueryEngine(e3);
    }
    return { resolvedQuery: r2, queryEngine: s2 };
  }
};
e$2([y$2()], I.prototype, "capabilities", void 0), e$2([y$2({ readOnly: true })], I.prototype, "defaultPopupTemplate", null), e$2([y$2()], I.prototype, "definitionExpression", void 0), e$2([y$2()], I.prototype, "displayField", void 0), e$2([y$2()], I.prototype, "elevationInfo", void 0), e$2([y$2()], I.prototype, "geometryType", void 0), e$2([y$2()], I.prototype, "geometryFieldName", void 0), e$2([y$2()], I.prototype, "graphType", void 0), e$2([y$2()], I.prototype, "hasM", void 0), e$2([y$2()], I.prototype, "hasZ", void 0), e$2([y$2()], I.prototype, "labelsVisible", void 0), e$2([y$2()], I.prototype, "labelingInfo", void 0), e$2([y$2()], I.prototype, "objectIdField", void 0), e$2([y$2()], I.prototype, "objectType", void 0), e$2([y$2()], I.prototype, "parentCompositeLayer", void 0), e$2([y$2(y$4)], I.prototype, "popupEnabled", void 0), e$2([y$2({ type: P$1, json: { name: "popupInfo", write: true } })], I.prototype, "popupTemplate", void 0), e$2([y$2({ types: m$2, json: { write: { target: "layerDefinition.drawingInfo.renderer" } } })], I.prototype, "renderer", null), e$2([y$2()], I.prototype, "source", void 0), e$2([y$2({ json: { read: false } })], I.prototype, "type", void 0), I = e$2([c$1("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")], I);
const R = I;
let e, r = null;
function n() {
  return e || (e = import("./chunk-0bSotyCy.js").then((t2) => t2.l).then(({ default: e2 }) => e2({ locateFile: (e3) => n$2(`esri/libs/linkchartlayout/${e3}`) })).then((t2) => {
    s(t2);
  }), e);
}
function s(t2) {
  r = t2;
}
var u, o2;
function y(t2, e2, a2, n2, s2, u2) {
  const o3 = a2.length, y2 = s2.length, i2 = Float64Array.BYTES_PER_ELEMENT, l2 = Uint32Array.BYTES_PER_ELEMENT, c2 = Uint8Array.BYTES_PER_ELEMENT, E3 = 16, p2 = E3 - 1 + o3 * (c2 + 2 * i2) + y2 * (2 * l2), f2 = r._malloc(p2);
  try {
    const c3 = f2 + E3 - f2 % E3, p3 = c3 + o3 * i2, A2 = p3 + o3 * i2, b2 = A2 + y2 * l2, P2 = b2 + y2 * l2, L2 = () => [r.HEAPF64.subarray(c3 >> 3, (c3 >> 3) + o3), r.HEAPF64.subarray(p3 >> 3, (p3 >> 3) + o3), r.HEAPU32.subarray(A2 >> 2, (A2 >> 2) + y2), r.HEAPU32.subarray(b2 >> 2, (b2 >> 2) + y2), r.HEAPU8.subarray(P2, P2 + o3)], [d2, C, H, _, g2] = L2();
    d2.set(a2), C.set(n2), H.set(s2), _.set(u2), g2.set(e2);
    let F = t2(o3, P2, c3, p3, y2, A2, b2), R2 = null;
    if (F) {
      const t3 = r.getLayoutLinksTypes(), e3 = r.getLayoutLinksVerticesEndIndices(), a3 = r.getLayoutLinksVertices(), n3 = r.countLayoutLinksVertices();
      !y2 || t3 && e3 ? n3 && !a3 ? F = false : R2 = { types: new Uint8Array(r.HEAPU8.subarray(t3, t3 + y2)), vertexEndIndex: new Uint32Array(r.HEAPU32.subarray(e3 >> 2, (e3 >> 2) + y2)), vertices: new Float64Array(r.HEAPF64.subarray(a3 >> 3, (a3 >> 3) + 2 * n3)) } : F = false;
    }
    const [h, U2, m2, B, T2] = L2();
    return a2.set(h), n2.set(U2), s2.set(m2), u2.set(B), e2.set(T2), { success: F, links: R2 };
  } finally {
    r._free(f2), r.cleanupLayout();
  }
}
!function(t2) {
  t2[t2.None = 0] = "None", t2[t2.IsMovable = 1] = "IsMovable", t2[t2.IsGeographic = 2] = "IsGeographic", t2[t2.IsRoot = 4] = "IsRoot";
}(u || (u = {})), function(t2) {
  t2[t2.Regular = 0] = "Regular", t2[t2.Orthogonal = 1] = "Orthogonal", t2[t2.Curved = 2] = "Curved", t2[t2.Recursive = 3] = "Recursive";
}(o2 || (o2 = {}));
const i = 2, l = 1, c = -1;
var E2, p, f, A, b, P, L, d;
!function(t2) {
  function e2() {
    return r.getMinIdealEdgeLength();
  }
  function a2(t3, e3, a3, n2, s2, u2 = i, o3 = l, E3 = c) {
    return y((t4, e4, a4, n3, s3, y2, i2) => r.applyForceDirectedLayout(t4, e4, a4, n3, s3, y2, i2, u2, o3, E3), t3, e3, a3, n2, s2);
  }
  t2.getMinIdealEdgeLength = e2, t2.apply = a2;
}(E2 || (E2 = {})), function(t2) {
  function e2(t3, e3, a2, n2, s2, u2 = i, o3 = l, E3 = c) {
    return y((t4, e4, a3, n3, s3, y2, i2) => r.applyCommunityLayout(t4, e4, a3, n3, s3, y2, i2, u2, o3, E3), t3, e3, a2, n2, s2);
  }
  t2.apply = e2;
}(p || (p = {})), function(t2) {
  function e2(t3, e3, a2, n2, s2) {
    return y(r.applySimpleLayout, t3, e3, a2, n2, s2);
  }
  t2.apply = e2;
}(f || (f = {})), function(t2) {
  function e2(t3, e3, a2, n2, s2) {
    return y(r.applyHierarchicalLayout, t3, e3, a2, n2, s2);
  }
  t2.apply = e2;
}(A || (A = {})), function(t2) {
  function e2(t3, e3, a2, n2, s2) {
    return y(r.applyRadialTreeLayout, t3, e3, a2, n2, s2);
  }
  t2.apply = e2;
}(b || (b = {})), function(t2) {
  function e2(t3, e3, a2, n2, s2) {
    return y(r.applySmartTreeLayout, t3, e3, a2, n2, s2);
  }
  t2.apply = e2;
}(P || (P = {})), function(t2) {
  t2[t2.Undirected = 0] = "Undirected", t2[t2.Directed = 1] = "Directed", t2[t2.Reversed = 2] = "Reversed";
}(L || (L = {})), function(t2) {
  t2[t2.ByCC_Raw = 0] = "ByCC_Raw", t2[t2.ByCC_NormalizeGlobally = 1] = "ByCC_NormalizeGlobally", t2[t2.ByCC_NormalizeByCC = 2] = "ByCC_NormalizeByCC";
}(d || (d = {}));
const S = (e2, t2, a2) => (e2.has(t2) || e2.set(t2, a2()), e2.get(t2));
let z = class extends n$1(t$2(b$2)) {
  constructor(e2) {
    if (super(e2), this.dataPreloadedInLocalCache = false, this.defaultLinkChartConfig = null, this._currentLinkChartConfig = { layoutMode: "RADIAL_TREE" }, this._graphTypeLookup = /* @__PURE__ */ new Map(), this.dataManager = null, this.knowledgeGraph = null, this.layers = new V(), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.linkChartExtent = new M$1({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 }), this.linkChartGeohashLookup = /* @__PURE__ */ new Map(), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new V(), this.type = "link-chart", this._originalInclusionList = e2.inclusionModeDefinition, e2.dataPreloadedInLocalCache && !e2.inclusionModeDefinition)
      throw new s$3("knowledge-graph:linkchart-layer-constructor", "If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
  }
  normalizeCtorArgs(e2) {
    return { url: e2.url, title: e2.title, dataPreloadedInLocalCache: e2.dataPreloadedInLocalCache, defaultLinkChartConfig: e2.defaultLinkChartConfig };
  }
  _initializeLayerProperties(e2) {
    if (!this.title && this.url) {
      const e3 = this.url.split("/");
      this.title = e3[e3.length - 2];
    }
    const t2 = /* @__PURE__ */ new Set();
    let n2 = [], s2 = [];
    if (e2.inclusionModeDefinition && (!e2.inclusionModeDefinition.namedTypeDefinitions || e2.inclusionModeDefinition.namedTypeDefinitions.size < 1))
      throw new s$3("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
    e2.knowledgeGraph.dataModel.entityTypes?.forEach((e3) => {
      e3.name && this._graphTypeLookup.set(e3.name, e3);
    }), e2.knowledgeGraph.dataModel.relationshipTypes?.forEach((e3) => {
      e3.name && this._graphTypeLookup.set(e3.name, e3);
    }), e2.inclusionModeDefinition?.generateAllSublayers ? (n2 = e2.knowledgeGraph.dataModel.entityTypes ?? [], s2 = e2.knowledgeGraph.dataModel.relationshipTypes ?? []) : e2.inclusionModeDefinition?.namedTypeDefinitions && e2.inclusionModeDefinition?.namedTypeDefinitions.size > 0 ? e2.inclusionModeDefinition?.namedTypeDefinitions.forEach((a2, o4) => {
      if (!this._graphTypeLookup.get(o4))
        return s$4.getLogger(this).warn(`A named type, ${o4}, was in the inclusion list that wasn't in the data model and will be removed`), void e2.inclusionModeDefinition?.namedTypeDefinitions.delete(o4);
      this._graphTypeLookup.get(o4) instanceof p$5 || "strictOrigin" in this._graphTypeLookup.get(o4) ? t2.has(o4) || (t2.add(o4), s2.push(this._graphTypeLookup.get(o4))) : this._graphTypeLookup.get(o4) instanceof t$4 || "properties" in this._graphTypeLookup.get(o4) ? t2.has(o4) || (t2.add(o4), n2.push(this._graphTypeLookup.get(o4))) : (s$4.getLogger(this).warn(`A named type, ${o4}, was in the inclusion list that wasn't properly modeled and will be removed`), e2.inclusionModeDefinition?.namedTypeDefinitions.delete(o4));
    }) : (n2 = e2.knowledgeGraph.dataModel.entityTypes ?? [], s2 = e2.knowledgeGraph.dataModel.relationshipTypes ?? []);
    const o3 = new E$1({ knowledgeGraph: e2.knowledgeGraph, inclusionModeDefinition: e2.inclusionModeDefinition });
    this.knowledgeGraph = e2.knowledgeGraph, this.memberEntityTypes = n2, this.memberRelationshipTypes = s2, this.dataManager = o3;
  }
  load(e2) {
    return this.addResolvingPromise(new Promise((t2) => {
      T$3(this.url).then((a2) => {
        if (this._initializeLayerProperties({ knowledgeGraph: a2, inclusionModeDefinition: this._originalInclusionList }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size || (this.dataManager.inclusionModeDefinition = { generateAllSublayers: false, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((e3) => {
          e3.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e3.name, { useAllData: true });
        }), this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((e3) => {
          e3.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e3.name, { useAllData: true });
        })), this.dataPreloadedInLocalCache)
          this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = false), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e3) => {
            e3.useAllData = false, e3.members?.forEach((e4) => {
              let t3;
              t3 = e4.linkChartLocation instanceof e$4 ? e4.linkChartLocation : e4.linkChartLocation ? ot(e4.linkChartLocation) : null, t3 && 2 === t3.coords.length && 0 === t3.lengths.length ? (this.linkChartGeohashLookup.set(e4.id, z$1(t3.coords[1], t3.coords[0], k)), this.entityLinkChartDiagramLookup.set(e4.id, t3)) : (this.linkChartGeohashLookup.set(e4.id, ""), this.relationshipLinkChartDiagramLookup.set(e4.id, t3));
            }), this.addResolvingPromise(this._initializeDiagram().then(async () => {
              this.layers.forEach(async (e4) => {
                await e4.refreshCachedQueryEngine();
              }), this.tables.forEach(async (e4) => {
                await e4.refreshCachedQueryEngine();
              });
            }));
          });
        else {
          const t3 = "GEOGRAPHIC" === this.defaultLinkChartConfig?.layoutMode;
          this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0, false, t3, true).then(async () => {
            s$6(e2);
            const t4 = [], a3 = [];
            this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = false, this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((e3) => {
              e3.useAllData = false;
            })), await this._initializeDiagram(), this.layers.forEach((e3) => {
              a3.push(e3.refreshCachedQueryEngine()), t4.push(new Promise((t5) => {
                e3.on("layerview-create", () => {
                  t5(null);
                });
              }));
            }), this.tables.forEach((e3) => {
              a3.push(e3.refreshCachedQueryEngine());
            }), await Promise.all(a3);
          }));
        }
        t2(null);
      });
    })), Promise.resolve(this);
  }
  async addRecords(e2, t2) {
    let a2 = [];
    t2?.cascadeAddRelationshipEndNodes && this.dataManager.knowledgeGraph.dataModel && (a2 = await w$1(e2, this.dataManager.knowledgeGraph));
    const i2 = e2.concat(a2).filter((e3) => !this.sublayerIdsCache.get(e3.typeName)?.has(e3.id));
    await this._handleNewRecords(i2);
  }
  async removeRecords(e2, { cascadeRemoveRelationships: t2 = true, recalculateLayout: a2 = false } = { cascadeRemoveRelationships: true, recalculateLayout: false }) {
    let i2 = [];
    for (const s2 of e2)
      false === this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s2.typeName)?.useAllData && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s2.typeName)?.members?.has(s2.id) && i2.push(s2);
    if (t2) {
      const e3 = /* @__PURE__ */ new Set(), t3 = [];
      for (const a3 of i2)
        if (this.dataManager.nodeConnectionsLookup.has(a3.id))
          for (const t4 of this.dataManager.nodeConnectionsLookup.get(a3.id))
            e3.add(t4);
      for (const a3 of e3)
        if (this.dataManager.memberIdTypeLookup.has(a3))
          for (const e4 of this.dataManager.memberIdTypeLookup.get(a3))
            this.dataManager.relationshipTypeNames.has(e4) && t3.push({ id: a3, typeName: e4 });
      i2 = i2.concat(t3);
    }
    this.dataManager.removeFromLayer(i2);
    for (const s2 of i2)
      this.sublayerIdsCache.get(s2.typeName)?.delete(s2.id), this.dataManager.relationshipTypeNames.has(s2.typeName) ? this.relationshipLinkChartDiagramLookup.delete(s2.id) : this.entityLinkChartDiagramLookup.delete(s2.id);
    a2 && await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode, {});
    const n2 = [];
    return this.layers.forEach((e3) => {
      n2.push(e3.refreshCachedQueryEngine());
    }), await Promise.all(n2), this._refreshNamedTypes(), i2;
  }
  async expand(e2, t2) {
    const a2 = await this.dataManager.getConnectedRecordIds(e2, t2), i2 = a2.filter((e3) => !this.sublayerIdsCache.get(e3.typeName)?.has(e3.id));
    return await this._handleNewRecords(a2), { records: i2 };
  }
  loadLayerAssumingLocalCache() {
    this.memberRelationshipTypes.forEach((e2) => {
      const t2 = new R({ objectType: e2, parentCompositeLayer: this, graphType: "relationship", title: e2.name });
      t2.geometryType ? this.layers.push(t2) : this.tables.push(t2), this.dataManager.sublayerCaches.has(e2.name) || this.dataManager.sublayerCaches.set(e2.name, /* @__PURE__ */ new Map());
    }), this.memberEntityTypes.forEach((e2) => {
      const t2 = new R({ objectType: e2, parentCompositeLayer: this, graphType: "entity", title: e2.name });
      t2.geometryType ? this.layers.push(t2) : this.tables.push(t2), this.dataManager.sublayerCaches.has(e2.name) || this.dataManager.sublayerCaches.set(e2.name, /* @__PURE__ */ new Map());
    }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e2, t2) => {
      const a2 = S(this.sublayerIdsCache, t2, () => /* @__PURE__ */ new Set());
      e2.members?.forEach((e3) => {
        if (a2.add(e3.id), e3.linkChartLocation)
          if (e3.linkChartLocation instanceof e$4)
            this.dataManager.relationshipTypeNames.has(t2) ? this.relationshipLinkChartDiagramLookup.set(e3.id, e3.linkChartLocation) : this.entityLinkChartDiagramLookup.set(e3.id, e3.linkChartLocation), 2 === e3.linkChartLocation.coords.length && 0 === e3.linkChartLocation.lengths.length ? this.linkChartGeohashLookup.set(e3.id, z$1(e3.linkChartLocation.coords[1], e3.linkChartLocation.coords[0], k)) : this.linkChartGeohashLookup.set(e3.id, "");
          else {
            const a3 = ot(e3.linkChartLocation);
            this.dataManager.relationshipTypeNames.has(t2) ? this.relationshipLinkChartDiagramLookup.set(e3.id, e3.linkChartLocation ? a3 : null) : this.entityLinkChartDiagramLookup.set(e3.id, e3.linkChartLocation ? a3 : null), "x" in e3.linkChartLocation && "y" in e3.linkChartLocation ? this.linkChartGeohashLookup.set(e3.id, z$1(e3.linkChartLocation.x, e3.linkChartLocation.y, k)) : this.linkChartGeohashLookup.set(e3.id, "");
          }
      });
    });
  }
  async calculateLinkChartLayout(e2 = "RADIAL_TREE", t2) {
    const n$12 = [], s2 = [], o$12 = [];
    this.dataManager.sublayerCaches.forEach((e3, t3) => {
      this.dataManager.entityTypeNames.has(t3) ? e3.forEach((e4) => {
        n$12.push({ typeName: t3, feature: e4 });
      }) : this.dataManager.relationshipTypeNames.has(t3) && e3.forEach((e4) => {
        s2.push({ typeName: t3, feature: e4 });
      });
    }), this.entityLinkChartDiagramLookup = /* @__PURE__ */ new Map(), this.relationshipLinkChartDiagramLookup = /* @__PURE__ */ new Map();
    const h = /* @__PURE__ */ new Map(), p$12 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map(), k$1 = /* @__PURE__ */ new Map(), L2 = new Uint8Array(n$12.length), C = new Float64Array(n$12.length), M$2 = new Float64Array(n$12.length), I2 = new Uint32Array(s2.length), v = new Uint32Array(s2.length), A$1 = [], S2 = "FORCE_DIRECTED", z2 = new M$1({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 });
    let O2, U2 = "FORCE_DIRECTED", Q = 0, F = 0;
    switch (U2 = "GEOGRAPHIC" === e2 ? S2 : e2, U2) {
      case "FORCE_DIRECTED":
        O2 = E2.apply;
        break;
      case "COMMUNITY":
        O2 = p.apply;
        break;
      case "HIERARCHICAL":
        O2 = A.apply;
        break;
      case "RADIAL_TREE":
        O2 = b.apply;
        break;
      case "SMART_TREE":
        O2 = P.apply;
        break;
      default:
        O2 = f.apply;
    }
    n$12.forEach(({ typeName: a2, feature: i2 }) => {
      if (t2?.lockedNodeLocations?.has(i2.attributes[w])) {
        "GEOGRAPHIC" === e2 && this.dataManager.geographicLookup.has(a2) ? L2[Q] = u.IsGeographic : L2[Q] = u.None;
        const n2 = t2.lockedNodeLocations.get(i2.attributes[w]);
        C[Q] = n2.x, M$2[Q] = n2.y;
      } else if ("GEOGRAPHIC" === e2 && this.dataManager.geographicLookup.has(a2)) {
        L2[Q] = u.IsGeographic;
        let e3 = null;
        const t3 = i2.attributes[this.dataManager.geographicLookup.get(a2).name], n2 = this.dataManager.geographicLookup.get(a2)?.geometryType;
        switch (n2) {
          case "esriGeometryPoint":
            C[Q] = t3?.x, M$2[Q] = t3?.y;
            break;
          case "esriGeometryPolygon":
            e3 = t3?.centroid, null != e3?.x && null != e3?.y ? (C[Q] = e3.x, M$2[Q] = e3.y) : L2[Q] = u.IsMovable;
            break;
          case "esriGeometryPolyline":
          case "esriGeometryMultipoint":
            e3 = t3?.extent?.center, null != e3?.x && null != e3?.y ? (C[Q] = e3.x, M$2[Q] = e3.y) : L2[Q] = u.IsMovable;
            break;
          default:
            L2[Q] = u.IsMovable;
        }
        (null == C[Q] || null == M$2[Q] || Number.isNaN(C[Q]) || Number.isNaN(M$2[Q])) && (L2[Q] = u.IsMovable, C[Q] = 0, M$2[Q] = 0);
      } else
        L2[Q] = u.IsMovable, C[Q] = 0, M$2[Q] = 0;
      k$1.set(i2.attributes[w], Q), A$1[Q] = { feature: i2, typeName: a2 }, Q++;
    });
    let H = false;
    const K = /* @__PURE__ */ new Map();
    s2.forEach((e3) => {
      const t3 = e3.feature.attributes[T], a2 = e3.feature.attributes[D], i2 = k$1.get(t3), n2 = k$1.get(a2);
      if (void 0 !== i2 && void 0 !== n2) {
        const s3 = t3 + "-" + a2, r2 = K.get(s3), h2 = r2?.has(e3.typeName);
        h2 || (I2[F] = i2, v[F] = n2, void 0 === r2 ? K.set(s3, /* @__PURE__ */ new Map([[e3.typeName, F]])) : r2.set(e3.typeName, F), F++), o$12.push(e3);
      } else
        H = true, this.relationshipLinkChartDiagramLookup.set(t3, null), this.linkChartGeohashLookup.set(t3, null);
    }), H && s$4.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null"), await n();
    const { success: $2, links: B } = O2(L2, C, M$2, I2.subarray(0, F), v.subarray(0, F));
    if (!$2)
      throw new s$3("knowledge-graph:layout-failed", "Attempting to arrange the records in the specified layout failed");
    for (let a2 = 0; a2 < A$1.length; a2++) {
      if (M$2[a2] > 84.9999 ? M$2[a2] = 84.9999 : M$2[a2] < -84.9999 && (M$2[a2] = -84.9999), C[a2] > 179.9999 ? C[a2] = 179.9999 : C[a2] < -179.9999 && (C[a2] = -179.9999), A$1[a2].feature.attributes[I$1] = new x$1(C[a2], M$2[a2]), h.has(A$1[a2].typeName)) {
        const e4 = h.get(A$1[a2].typeName);
        e4?.set(A$1[a2].feature.attributes[w], A$1[a2].feature);
      } else {
        const e4 = /* @__PURE__ */ new Map();
        e4.set(A$1[a2].feature.attributes[w], A$1[a2].feature), h.set(A$1[a2].typeName, e4);
      }
      d2.set(A$1[a2].feature.attributes[w], A$1[a2].feature);
      const e3 = ot(A$1[a2].feature.attributes[I$1]);
      this.entityLinkChartDiagramLookup.set(A$1[a2].feature.attributes[w], A$1[a2].feature.attributes[I$1] ? e3 : null), this.linkChartGeohashLookup.set(A$1[a2].feature.attributes[w], z$1(A$1[a2].feature.attributes[I$1].y, A$1[a2].feature.attributes[I$1].x, k)), A$1[a2].feature.attributes[I$1].x < z2.xmin && (z2.xmin = A$1[a2].feature.attributes[I$1].x), A$1[a2].feature.attributes[I$1].x > z2.xmax && (z2.xmax = A$1[a2].feature.attributes[I$1].x), A$1[a2].feature.attributes[I$1].y < z2.ymin && (z2.ymin = A$1[a2].feature.attributes[I$1].y), A$1[a2].feature.attributes[I$1].y > z2.ymax && (z2.ymax = A$1[a2].feature.attributes[I$1].y);
    }
    if (this.linkChartExtent.xmin = z2.xmin, this.linkChartExtent.xmax = z2.xmax, this.linkChartExtent.ymin = z2.ymin, this.linkChartExtent.ymax = z2.ymax, !B)
      throw new s$3("knowledge-graph:layout-failed", "Attempting to retrieve link geometry from diagram engine failed");
    const W = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Set();
    for (let a2 = 0; a2 < o$12.length; a2++) {
      const e3 = [], t3 = o$12[a2], n2 = t3.feature.attributes[T], s3 = t3.feature.attributes[D], r2 = n2 + "-" + s3, h2 = K.get(r2).get(t3.typeName), g2 = 0 === h2 ? 0 : B?.vertexEndIndex[h2 - 1];
      if (!J.has(h2)) {
        if (J.add(h2), B.types[h2] === o2.Recursive) {
          const t5 = [B.vertices[2 * g2], B.vertices[2 * g2 + 1]], a4 = [B.vertices[2 * (g2 + 1)], B.vertices[2 * (g2 + 1) + 1]], i2 = [0.5 * (t5[0] + a4[0]), 0.5 * (t5[1] + a4[1])], n3 = [i2[0] - t5[0], i2[1] - t5[1]], s4 = [i2[0] + n3[1], i2[1] - n3[0]], o3 = [i2[0] - n3[1], i2[1] + n3[0]];
          e3.push(t5), e3.push(s4), e3.push(a4), e3.push(o3), e3.push(t5);
        } else {
          if (B.types[h2] !== o2.Regular) {
            s$4.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");
            continue;
          }
          for (let t5 = g2; t5 < B.vertexEndIndex[h2]; t5++)
            e3.push([B.vertices[2 * t5], B.vertices[2 * t5 + 1]]);
        }
        const t4 = A$1[k$1.get(n2)]?.feature.attributes[I$1], a3 = A$1[k$1.get(s3)]?.feature.attributes[I$1];
        e3[0][0] === t4.x && e3[0][1] === t4.y || (e3[0] = [t4.x, t4.y]), e3[e3.length - 1][0] === a3.x && e3[e3.length - 1][1] === a3.y || (e3[e3.length - 1] = [a3.x, a3.y]);
        for (let i2 = 1; i2 < e3.length - 1; i2++)
          e3[i2][1] > 85.5 ? e3[i2][1] = 85.5 : e3[i2][1] < -85.5 && (e3[i2][1] = -85.5), e3[i2][0] > 179.9999 ? e3[i2][0] = 179.9999 : e3[i2][0] < -179.9999 && (e3[i2][0] = -179.9999);
        W.has(r2) ? W.get(r2).push(e3) : W.set(r2, [e3]);
      }
      const f2 = W.get(r2);
      Y.has(r2) || (Y.set(r2, /* @__PURE__ */ new Map()), q.set(r2, /* @__PURE__ */ new Map()));
      const L3 = Y.get(r2), C2 = q.get(r2);
      L3.has(t3.typeName) || (L3.set(t3.typeName, f2.shift()), C2.set(t3.typeName, 0));
      const M2 = L3.get(t3.typeName);
      C2.set(t3.typeName, C2.get(t3.typeName) + 1);
      const w$12 = new m$1({ paths: M2 });
      if (t3.feature.attributes[I$1] = w$12, p$12.has(t3.typeName)) {
        const e4 = p$12.get(t3.typeName);
        e4?.set(t3.feature.attributes[w], t3.feature);
      } else {
        const e4 = /* @__PURE__ */ new Map();
        e4.set(t3.feature.attributes[w], t3.feature), p$12.set(t3.typeName, e4);
      }
      d2.set(t3.feature.attributes[w], t3.feature);
      const b2 = ot(t3.feature.attributes[I$1]);
      this.relationshipLinkChartDiagramLookup.set(t3.feature.attributes[w], t3.feature.attributes[I$1] ? b2 : null), this.linkChartGeohashLookup.set(t3.feature.attributes[w], "");
    }
    for (const a2 of o$12)
      a2.feature.attributes[M] = q.get(a2.feature.attributes[T] + "-" + a2.feature.attributes[D])?.get(a2.typeName) ?? null;
    return this._currentLinkChartConfig = { layoutMode: e2 }, { nodes: h, links: p$12, idMap: d2 };
  }
  async applyNewLinkChartLayout(e2 = "RADIAL_TREE", t2) {
    const a2 = [];
    await this.calculateLinkChartLayout(e2, t2), this.layers.forEach((e3) => {
      a2.push(e3.refreshCachedQueryEngine());
    }), await Promise.all(a2), this._refreshNamedTypes();
  }
  getCurrentNodeLocations() {
    const e2 = /* @__PURE__ */ new Map();
    return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t2) => {
      t2?.members?.forEach((t3) => {
        const a2 = t3.linkChartLocation;
        let i2;
        const n2 = t3.id;
        a2 && (i2 = "x" in a2 ? { x: a2.x, y: a2.y } : { x: a2.coords[0], y: a2.coords[1] }, e2.set(n2, new x$1({ x: i2.x, y: i2.y })));
      });
    }), e2;
  }
  async synchronizeInclusionListWithCache() {
    return new Promise((e2) => {
      this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e3, t2) => {
        if (e3.useAllData = false, e3.members && e3.members.size > 0) {
          if (!this.dataManager.sublayerCaches.get(t2))
            return;
          const a2 = new Set(Array.from(this.dataManager.sublayerCaches.get(t2).keys()));
          Array.from(e3.members.keys()).filter((e4) => !a2.has(e4)).forEach((t3) => {
            e3.members?.delete(t3);
          });
        }
      }), e2();
    });
  }
  async refreshLinkChartCache(e2) {
    await this.dataManager.refreshCacheContent(e2);
    const t2 = [];
    this.layers.forEach((e3) => {
      t2.push(e3.refreshCachedQueryEngine());
    }), await Promise.all(t2), this._refreshNamedTypes();
  }
  async _handleNewRecords(e2) {
    const t2 = [];
    this.dataManager.addToLayer(e2);
    for (const a2 of e2)
      this.sublayerIdsCache.has(a2.typeName) || (this.sublayerIdsCache.set(a2.typeName, /* @__PURE__ */ new Set()), t2.push(a2.typeName)), this.sublayerIdsCache.get(a2.typeName).add(a2.id);
    for (const a2 of t2)
      if (this._graphTypeLookup.has(a2)) {
        const e3 = this._graphTypeLookup.get(a2), t3 = "endPoints" in e3 ? "relationship" : "entity", i2 = new R({ objectType: e3, parentCompositeLayer: this, graphType: t3, title: a2 });
        "entity" === t3 ? this.dataManager.entityTypeNames.add(a2) : this.dataManager.relationshipTypeNames.add(a2), i2.geometryType ? this.layers.push(i2) : this.tables.push(i2), this.dataManager.sublayerCaches.set(a2, /* @__PURE__ */ new Map());
      }
    await this.dataManager.refreshCacheContent(e2.map((e3) => e3.id)), await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode);
  }
  async _initializeDiagram() {
    this.defaultLinkChartConfig ? this.defaultLinkChartConfig.doNotRecalculateLayout ? (this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e2, t2) => {
      e2?.members?.forEach((e3) => {
        const a2 = e3.linkChartLocation;
        let i2;
        const n2 = e3.id;
        if (!a2)
          return;
        i2 = "x" in a2 ? { x: a2.x, y: a2.y } : { x: a2.coords[0], y: a2.coords[1] };
        const s2 = ot(i2);
        this.dataManager.relationshipTypeNames.has(t2) ? this.relationshipLinkChartDiagramLookup.set(n2, s2) : this.entityLinkChartDiagramLookup.set(n2, s2), this.linkChartGeohashLookup.set(n2, z$1(i2.x, i2.y, k)), this.linkChartExtent.xmin > i2.x && (this.linkChartExtent.xmin = i2.x), this.linkChartExtent.xmax < i2.x && (this.linkChartExtent.xmax = i2.x), this.linkChartExtent.ymin > i2.y && (this.linkChartExtent.ymin = i2.y), this.linkChartExtent.ymax < i2.y && (this.linkChartExtent.ymax = i2.y);
      });
    }), this.memberRelationshipTypes.forEach((e2) => {
      e2.name && this.dataManager.sublayerCaches.get(e2.name)?.forEach((e3) => {
        const t2 = this.relationshipLinkChartDiagramLookup.get(e3.attributes[T]), a2 = this.relationshipLinkChartDiagramLookup.get(e3.attributes[D]);
        if (t2 && a2) {
          const i2 = ot(new m$1({ paths: [[t2.coords[0], t2.coords[1]], [a2.coords[0], a2.coords[1]]] }));
          this.relationshipLinkChartDiagramLookup.set(e3.attributes[w], i2);
        } else
          this.relationshipLinkChartDiagramLookup.set(e3.attributes[w], null);
        this.linkChartGeohashLookup.set(e3.attributes[w], "");
      });
    })) : await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode, { lockedNodeLocations: this.getCurrentNodeLocations() }) : await this.calculateLinkChartLayout("RADIAL_TREE", { lockedNodeLocations: this.getCurrentNodeLocations() });
  }
  _refreshNamedTypes() {
    for (const e2 of this.layers)
      e2.emit("refresh", { dataChanged: true });
    for (const e2 of this.tables)
      e2.emit("refresh", { dataChanged: true });
  }
};
e$2([y$2()], z.prototype, "dataPreloadedInLocalCache", void 0), e$2([y$2()], z.prototype, "defaultLinkChartConfig", void 0), e$2([y$2()], z.prototype, "dataManager", void 0), e$2([y$2()], z.prototype, "knowledgeGraph", void 0), e$2([y$2()], z.prototype, "layers", void 0), e$2([y$2()], z.prototype, "entityLinkChartDiagramLookup", void 0), e$2([y$2()], z.prototype, "relationshipLinkChartDiagramLookup", void 0), e$2([y$2()], z.prototype, "linkChartExtent", void 0), e$2([y$2()], z.prototype, "linkChartGeohashLookup", void 0), e$2([y$2()], z.prototype, "memberEntityTypes", void 0), e$2([y$2()], z.prototype, "memberRelationshipTypes", void 0), e$2([y$2()], z.prototype, "sublayerIdsCache", void 0), e$2([y$2()], z.prototype, "tables", void 0), e$2([y$2({ json: { read: false } })], z.prototype, "type", void 0), z = e$2([c$1("esri.layers.LinkChartLayer")], z);
const O = z;
export {
  O as default
};
