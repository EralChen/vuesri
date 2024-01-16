import { dq as rt, cw as p$c, h2 as t$b, bo as e$7, bp as y$3, br as c$9, bs as g$3, cO as f$4, cZ as f$5, aq as has, i6 as a$5, aM as s$b, hd as p$d, dz as u$2, cy as x$2, dy as m$3, bq as j$4, bb as s$c, a$ as j$5, cS as t$c, bQ as b$3, c2 as F$1, ds as N, de as b$4, ap as M$4, lf as e$8, n1 as r$4, jj as s$d, j4 as c$a, cB as a$6, cD as t$d, cC as f$6, iy as l$5, Cv as w$1, h3 as o$4, d4 as y$4, c$ as t$e, dl as o$5, j8 as p$f, j9 as p$g, c_ as d$1, d0 as k$2, jf as m$5, bN as b$5, bh as V, hS as t$f, b1 as s$e } from "./chunk-KFNcxJaF.js";
import { p as p$e } from "./chunk-GPG0Fj9B.js";
import { m as m$4 } from "./chunk-UzDyJefO.js";
import { W as W$1 } from "./chunk-mk4KSkT-.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
const i$8 = "ESRI__DESTINATION_ID", s$a = "ESRI__ORIGIN_ID";
let o$3 = class o {
  constructor() {
    this._featureLookup = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    return o.instance || (o.instance = new o()), o.instance;
  }
  static resetInstance() {
    o.instance && (o.instance = null);
  }
  deleteFromStore(e5) {
    e5.forEach((e6) => {
      this._featureLookup.delete(e6);
    });
  }
  readFromStoreByList(e5) {
    const t7 = [];
    return e5.forEach((e6) => {
      const r2 = this.readFromStoreById(e6);
      r2 && t7.push(r2);
    }), t7;
  }
  readFromStoreById(e5) {
    return this._featureLookup.get(e5) ?? null;
  }
  writeToStore(o3, n2, p6) {
    const a2 = [];
    return o3.forEach((o4) => {
      if (!o4?.id)
        return;
      o4.properties || (o4.properties = []);
      let u2, c2 = null;
      if (p6 && o4.properties[p6] && (c2 = rt(o4.properties[p6])), "originId" in o4 && "destinationId" in o4 && (o4.properties[s$a] = o4.originId, o4.properties[i$8] = o4.destinationId), o4.properties[n2] = o4.id, o4.id && this._featureLookup.has(o4.id) && this._featureLookup.get(o4.id).attributes) {
        const e5 = this._featureLookup.get(o4.id), i6 = JSON.parse(JSON.stringify(Object.assign(e5.attributes, o4.properties)));
        p6 && o4.properties[p6] && (i6[p6] = p$c(o4.properties[p6])), u2 = new t$b(c2 ? JSON.parse(JSON.stringify(c2)) : e5?.geometry ? JSON.parse(JSON.stringify(e5.geometry)) : null, i6, null, o4.properties[n2]);
      } else
        u2 = new t$b(c2 ? JSON.parse(JSON.stringify(c2)) : null, o4.properties, null, o4.properties[n2]);
      this._featureLookup.set(o4.id, u2), a2.push(u2);
    }), a2;
  }
};
let t$a = class t extends g$3 {
  constructor(r2) {
    super(r2), this.resultRows = [];
  }
};
e$7([y$3()], t$a.prototype, "resultRows", void 0), t$a = e$7([c$9("esri.rest.knowledgeGraph.GraphQueryResult")], t$a);
const c$8 = t$a;
let t$9 = class t2 extends g$3 {
  constructor(r2) {
    super(r2), this.resultRowsStream = new ReadableStream();
  }
};
e$7([y$3()], t$9.prototype, "resultRowsStream", void 0), t$9 = e$7([c$9("esri.rest.knowledgeGraph.GraphQueryResult")], t$9);
const c$7 = t$9;
let s$9 = class s extends f$4 {
  constructor(o3) {
    super(o3), this.name = null, this.unique = null, this.ascending = null, this.description = null, this.fieldNames = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], s$9.prototype, "name", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], s$9.prototype, "unique", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], s$9.prototype, "ascending", void 0), e$7([y$3({ type: String, json: { write: true } })], s$9.prototype, "description", void 0), e$7([y$3({ type: [String], json: { write: true } })], s$9.prototype, "fieldNames", void 0), s$9 = e$7([c$9("esri.rest.knowledgeGraph.FieldIndex")], s$9);
const i$7 = s$9;
let i$6 = class i extends f$4 {
  constructor(t7) {
    super(t7), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = null, this.required = null, this.defaultVisibility = null, this.systemMaintained = null, this.role = null, this.defaultValue = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], i$6.prototype, "name", void 0), e$7([y$3({ type: String, json: { write: true } })], i$6.prototype, "alias", void 0), e$7([y$3({ type: String, json: { write: true } })], i$6.prototype, "fieldType", void 0), e$7([y$3({ type: String, json: { write: true } })], i$6.prototype, "geometryType", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "hasM", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "hasZ", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "nullable", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "editable", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "required", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "defaultVisibility", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$6.prototype, "systemMaintained", void 0), e$7([y$3()], i$6.prototype, "role", void 0), e$7([y$3({ type: Object, json: { type: String, write: { writer: (t7, e5) => {
  e5.defaultValue = null != t7 ? t7.toString() : null;
} } } })], i$6.prototype, "defaultValue", void 0), i$6 = e$7([c$9("esri.rest.knowledgeGraph.GraphProperty")], i$6);
const s$8 = i$6;
let i$5 = class i2 extends f$4 {
  constructor(r2) {
    super(r2), this.name = null, this.alias = null, this.role = null, this.strict = null, this.properties = null, this.fieldIndexes = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], i$5.prototype, "name", void 0), e$7([y$3({ type: String, json: { write: true } })], i$5.prototype, "alias", void 0), e$7([y$3({ type: String, json: { write: true } })], i$5.prototype, "role", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$5.prototype, "strict", void 0), e$7([y$3({ type: [s$8], json: { write: true } })], i$5.prototype, "properties", void 0), e$7([y$3({ type: [i$7], json: { write: true } })], i$5.prototype, "fieldIndexes", void 0), i$5 = e$7([c$9("esri.rest.knowledgeGraph.GraphObjectType")], i$5);
const l$4 = i$5;
let e$6 = class e extends l$4 {
  constructor(r2) {
    super(r2);
  }
};
e$6 = e$7([c$9("esri.rest.knowledgeGraph.EntityType")], e$6);
const t$8 = e$6;
let t$7 = class t3 extends l$4 {
  constructor(r2) {
    super(r2), this.endPoints = [];
  }
};
e$7([y$3()], t$7.prototype, "endPoints", void 0), t$7 = e$7([c$9("esri.rest.knowledgeGraph.RelationshipType")], t$7);
const p$b = t$7;
let l$3 = class l extends f$4 {
  constructor(t7) {
    super(t7), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = null, this.entityTypes = null, this.relationshipTypes = null;
  }
};
e$7([y$3({ type: Date, json: { type: Number, write: { writer: (t7, e5) => {
  e5.timestamp = t7?.getTime();
} } } })], l$3.prototype, "timestamp", void 0), e$7([y$3({ type: f$5, json: { write: true } })], l$3.prototype, "spatialReference", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], l$3.prototype, "strict", void 0), e$7([y$3({ type: String, json: { write: true } })], l$3.prototype, "objectIdField", void 0), e$7([y$3({ type: String, json: { write: true } })], l$3.prototype, "globalIdField", void 0), e$7([y$3()], l$3.prototype, "arcgisManaged", void 0), e$7([y$3()], l$3.prototype, "identifierInfo", void 0), e$7([y$3()], l$3.prototype, "searchIndexes", void 0), e$7([y$3({ type: [t$8], json: { write: true } })], l$3.prototype, "entityTypes", void 0), e$7([y$3({ type: [p$b], json: { write: true } })], l$3.prototype, "relationshipTypes", void 0), l$3 = e$7([c$9("esri.rest.knowledgeGraph.DataModel")], l$3);
const n$1 = l$3;
let i$4 = class i3 extends f$4 {
  constructor(t7) {
    super(t7), this.capabilities = [], this.supportsSearch = false, this.supportedQueryFormats = [], this.allowGeometryUpdates = false, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = false, this.dataEditingNotSupported = false, this.schemaEditingNotSupported = false;
  }
};
e$7([y$3({ type: [String], json: { write: true } })], i$4.prototype, "capabilities", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$4.prototype, "supportsSearch", void 0), e$7([y$3({ type: [String], json: { write: true } })], i$4.prototype, "supportedQueryFormats", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$4.prototype, "allowGeometryUpdates", void 0), e$7([y$3({ type: Number, json: { write: true } })], i$4.prototype, "searchMaxRecordCount", void 0), e$7([y$3({ type: Object, json: { write: true } })], i$4.prototype, "serviceCapabilities", void 0), e$7([y$3({ type: Number, json: { write: true } })], i$4.prototype, "maxRecordCount", void 0), e$7([y$3({ type: String, json: { write: true } })], i$4.prototype, "description", void 0), e$7([y$3({ type: String, json: { write: true } })], i$4.prototype, "copyrightText", void 0), e$7([y$3({ type: String, json: { write: true } })], i$4.prototype, "units", void 0), e$7([y$3({ type: Object, json: { write: true } })], i$4.prototype, "spatialReference", void 0), e$7([y$3({ type: Number, json: { write: true } })], i$4.prototype, "currentVersion", void 0), e$7([y$3({ type: Object, json: { write: true } })], i$4.prototype, "dateFieldsTimeReference", void 0), e$7([y$3({ type: String, json: { write: true } })], i$4.prototype, "serviceItemId", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$4.prototype, "supportsDocuments", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$4.prototype, "dataEditingNotSupported", void 0), e$7([y$3({ type: Boolean, json: { write: true } })], i$4.prototype, "schemaEditingNotSupported", void 0), i$4 = e$7([c$9("esri.rest.knowledgeGraph.ServiceDefinition")], i$4);
const s$7 = i$4;
let p$a = class p extends f$4 {
  constructor(o3) {
    super(o3), this.dataModel = null, this.serviceDefinition = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], p$a.prototype, "url", void 0), e$7([y$3({ type: n$1, json: { write: true } })], p$a.prototype, "dataModel", void 0), e$7([y$3({ type: s$7, json: { write: true } })], p$a.prototype, "serviceDefinition", void 0), p$a = e$7([c$9("esri.rest.knowledgeGraph.KnowledgeGraph")], p$a);
const c$6 = p$a;
const t$6 = "esri/rest/knowledgeGraph/wasmInterface/";
let s$6;
async function r$3() {
  const e5 = s$6;
  if (e5)
    return e5;
  const t7 = has("wasm-simd");
  return s$6 = o$2(t7), s$6;
}
async function o$2(s5) {
  if (s5) {
    const { default: s6 } = await import("./chunk-uitVD23b.js").then((e5) => e5.a);
    return s6({ locateFile: (s7) => a$5(t$6 + s7) });
  }
  const { default: n2 } = await import("./chunk-22bMDAPM.js").then((e5) => e5.a);
  return n2({ locateFile: (s6) => a$5(t$6 + s6) });
}
function a$4(e5, t7) {
  const n2 = new t7.ArrayValue();
  return n2.deleteLater(), e5.forEach((e6) => {
    n2.add_value(m$2(e6, t7));
  }), n2;
}
function l$2(e5, t7) {
  const n2 = new t7.ObjectValue();
  n2.deleteLater();
  for (const [o3, r2] of Object.entries(e5))
    n2.set_key_value(o3, m$2(r2, t7));
  return n2;
}
function s$5(i6, a2) {
  if (i6 instanceof u$2)
    return f$3(i6, a2);
  if (i6 instanceof x$2)
    return g$2(i6, a2);
  if (i6 instanceof m$3 || i6 instanceof j$4)
    return c$5(i6, a2);
  throw new s$b("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: i6 });
}
function u$1(e5, t7) {
  t7.input_quantization_parameters = { xy_resolution: e5.xyResolution, x_false_origin: e5.xFalseOrigin, y_false_origin: e5.yFalseOrigin, z_resolution: e5.zResolution, z_false_origin: e5.zFalseOrigin, m_resolution: e5.mResolution, m_false_origin: e5.mFalseOrigin };
}
function y$2(t7, n2, o3) {
  if (!t7.extent)
    throw new s$b("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", t7.extent);
  if (!t7.quantizeMode)
    throw new s$b("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", t7.quantizeMode);
  if (!t7.tolerance)
    throw new s$b("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", t7.quantizeMode);
  n2.output_quantization_parameters = { extent: { xmax: t7.extent.xmax, ymax: t7.extent.ymax, xmin: t7.extent.xmin, ymin: t7.extent.ymin }, quantize_mode: o3.esriQuantizeMode[t7.quantizeMode], tolerance: t7.tolerance };
}
function m$2(e5, t7) {
  if (null == e5)
    return "";
  if ("object" != typeof e5)
    return e5;
  if (e5 instanceof Date)
    return e5;
  if (e5 instanceof p$d)
    return s$5(e5, t7);
  if (Array.isArray(e5)) {
    const n2 = new t7.ArrayValue();
    return n2.deleteLater(), e5.forEach((e6) => {
      n2.add_value(m$2(e6, t7));
    }), n2;
  }
  return l$2(e5, t7);
}
function c$5(e5, t7) {
  const n2 = new t7.GeometryValue();
  n2.deleteLater(), n2.has_z = e5.hasZ, n2.has_m = e5.hasM;
  const i6 = [], a2 = [];
  let l3 = [];
  e5 instanceof m$3 ? (n2.geometry_type = t7.esriGeometryType.esriGeometryPolyline, l3 = e5.paths) : e5 instanceof j$4 && (n2.geometry_type = t7.esriGeometryType.esriGeometryPolygon, l3 = e5.rings);
  let s5 = 0, u2 = 0;
  return l3.forEach((e6) => {
    let t8 = 0;
    e6.forEach((e7) => {
      t8++, e7.forEach((e8) => {
        i6[u2] = e8, u2++;
      });
    }), a2[s5] = t8, s5++;
  }), n2.coords = new Float64Array(i6), n2.lengths = new Uint32Array(a2), n2;
}
function f$3(e5, t7) {
  const n2 = new t7.GeometryValue();
  n2.deleteLater(), n2.geometry_type = n2.geometry_type = t7.esriGeometryType.esriGeometryMultipoint, n2.has_z = e5.hasZ, n2.has_m = e5.hasM;
  const o3 = [], r2 = [];
  r2[0] = e5.points.length;
  let i6 = 0;
  return e5.points.forEach((e6) => {
    e6.forEach((e7) => {
      o3[i6] = e7, i6++;
    });
  }), n2.coords = new Float64Array(o3), n2.lengths = new Uint32Array(r2), n2;
}
function g$2(e5, t7) {
  const n2 = new t7.GeometryValue();
  n2.deleteLater(), n2.geometry_type = t7.esriGeometryType.esriGeometryPoint, n2.has_z = e5.hasZ, n2.has_m = e5.hasM;
  const o3 = [], r2 = [];
  r2[0] = 1, o3[0] = e5.x, o3[1] = e5.y;
  let i6 = 2;
  return e5.hasZ && (o3[i6] = e5.z, i6++), e5.hasM && (o3[i6] = e5.m, i6++), n2.coords = new Float64Array(o3), n2.lengths = new Uint32Array(r2), n2;
}
let t$5 = class t4 extends f$4 {
  constructor(r2) {
    super(r2), this.properties = null;
  }
};
e$7([y$3({ json: { write: true } })], t$5.prototype, "properties", void 0), t$5 = e$7([c$9("esri.rest.knowledgeGraph.GraphObject")], t$5);
const p$9 = t$5;
let s$4 = class s2 extends p$9 {
  constructor(r2) {
    super(r2), this.typeName = null, this.id = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], s$4.prototype, "typeName", void 0), e$7([y$3({ type: String, json: { write: true } })], s$4.prototype, "id", void 0), s$4 = e$7([c$9("esri.rest.knowledgeGraph.GraphNamedObject")], s$4);
const p$8 = s$4;
let p$7 = class p2 extends p$8 {
  constructor(r2) {
    super(r2), this.layoutGeometry = null;
  }
};
e$7([y$3({ type: x$2, json: { write: true } })], p$7.prototype, "layoutGeometry", void 0), p$7 = e$7([c$9("esri.rest.knowledgeGraph.Entity")], p$7);
const c$4 = p$7;
let i$3 = class i4 extends p$8 {
  constructor(o3) {
    super(o3), this.originId = null, this.destinationId = null, this.layoutGeometry = null;
  }
};
e$7([y$3({ type: String, json: { write: true } })], i$3.prototype, "originId", void 0), e$7([y$3({ type: String, json: { write: true } })], i$3.prototype, "destinationId", void 0), e$7([y$3({ type: m$3, json: { write: true } })], i$3.prototype, "layoutGeometry", void 0), i$3 = e$7([c$9("esri.rest.Relationship.Relationship")], i$3);
const p$6 = i$3;
function r$2(i6, n2) {
  if (!i6.typeName)
    throw new s$b("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (i6 instanceof c$4) {
    const e5 = new n2.EntityValue();
    e5.deleteLater(), e5.type_name = i6.typeName;
    for (const [t7, o3] of Object.entries(i6.properties))
      e5.set_key_value(t7, a$3(o3, n2));
    return i6.id && e5.set_id(i6.id), e5;
  }
  if (i6 instanceof p$6) {
    const e5 = new n2.RelationshipValue();
    e5.deleteLater(), e5.type_name = i6.typeName;
    for (const [t7, o3] of Object.entries(i6.properties))
      e5.set_key_value(t7, a$3(o3, n2));
    return i6.id && e5.set_id(i6.id), i6.originId && i6.destinationId && e5.set_related_entity_ids(i6.originId, i6.destinationId), e5;
  }
  throw new s$b("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function s$3(e5) {
  return { xy_resolution: e5.xyResolution, x_false_origin: e5.xFalseOrigin, y_false_origin: e5.yFalseOrigin, z_resolution: e5.zResolution, z_false_origin: e5.zFalseOrigin, m_resolution: e5.mResolution, m_false_origin: e5.mFalseOrigin };
}
function a$3(e5, t7) {
  return null == e5 ? "" : "object" != typeof e5 || e5 instanceof Date ? e5 : e5 instanceof p$d ? s$5(e5, t7) : "";
}
let t$4 = class t5 extends g$3 {
  constructor(r2) {
    super(r2), this.name = null, this.supportedCategory = null, this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
e$7([y$3()], t$4.prototype, "name", void 0), e$7([y$3()], t$4.prototype, "supportedCategory", void 0), e$7([y$3()], t$4.prototype, "analyzers", void 0), e$7([y$3()], t$4.prototype, "searchProperties", void 0), t$4 = e$7([c$9("esri.rest.knowledgeGraph.SearchIndex")], t$4);
const p$5 = t$4;
var e$5, r$1, i$2, t$3, o$1, s$2, y$1;
!function(e5) {
  e5[e5.Regular = 0] = "Regular", e5[e5.Provenance = 1] = "Provenance", e5[e5.Document = 2] = "Document";
}(e$5 || (e$5 = {})), function(e5) {
  e5[e5.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e5[e5.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e5[e5.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e5[e5.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e5[e5.esriFieldTypeString = 4] = "esriFieldTypeString", e5[e5.esriFieldTypeDate = 5] = "esriFieldTypeDate", e5[e5.esriFieldTypeOID = 6] = "esriFieldTypeOID", e5[e5.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e5[e5.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e5[e5.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e5[e5.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e5[e5.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e5[e5.esriFieldTypeXML = 12] = "esriFieldTypeXML", e5[e5.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e5[e5.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e5[e5.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e5[e5.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(r$1 || (r$1 = {})), function(e5) {
  e5[e5.esriGeometryNull = 0] = "esriGeometryNull", e5[e5.esriGeometryPoint = 1] = "esriGeometryPoint", e5[e5.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e5[e5.esriGeometryPolyline = 3] = "esriGeometryPolyline", e5[e5.esriGeometryPolygon = 4] = "esriGeometryPolygon", e5[e5.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e5[e5.esriGeometryAny = 6] = "esriGeometryAny", e5[e5.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(i$2 || (i$2 = {})), function(e5) {
  e5[e5.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e5[e5.esriUUIDESRI = 1] = "esriUUIDESRI", e5[e5.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(t$3 || (t$3 = {})), function(e5) {
  e5[e5.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e5[e5.esriTypeEntity = 1] = "esriTypeEntity", e5[e5.esriTypeRelationship = 2] = "esriTypeRelationship", e5[e5.esriTypeBoth = 4] = "esriTypeBoth";
}(o$1 || (o$1 = {})), function(e5) {
  e5[e5.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e5[e5.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e5[e5.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e5[e5.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e5[e5.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e5[e5.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e5[e5.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e5[e5.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e5[e5.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e5[e5.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension";
}(s$2 || (s$2 = {})), function(e5) {
  e5[e5.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e5[e5.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e5[e5.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(y$1 || (y$1 = {}));
function _$2(i6) {
  return i6.deleteLater(), new n$1({ timestamp: i6.timestamp, spatialReference: new f$5(i6.spatial_reference), strict: i6.strict, objectIdField: i6.objectid_property, globalIdField: i6.globalid_property, arcgisManaged: i6.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: y$1[i6.identifier_info?.identifier_mapping_info?.identifier_info_type?.value], databaseNativeIdentifier: i6.identifier_info?.identifier_mapping_info?.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: i6.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: t$3[i6.identifier_info?.identifier_generation_info?.uuid_method_hint?.value] } }, searchIndexes: M$3(i6.search_indexes), entityTypes: j$3(i6.entity_types), relationshipTypes: x$1(i6.relationship_types) });
}
function c$3(e5) {
  return e5.deleteLater(), new t$8(b$2(e5));
}
function g$1(e5) {
  return e5.deleteLater(), new i$7({ name: e5.name, unique: e5.unique, ascending: e5.ascending, description: e5.description, fieldNames: I$2(e5.fields) });
}
function b$2(e5) {
  return { name: e5.name, alias: e5.alias, role: e$5[e5.role.value] ? e$5[e5.role.value] : null, strict: e5.strict, properties: T$3(e5.properties), fieldIndexes: w(e5.field_indexes) };
}
function v(e5) {
  return e5.deleteLater(), new s$8({ alias: e5.alias, name: e5.name, fieldType: r$1[e5.field_type.value] ? r$1[e5.field_type.value] : null, geometryType: i$2[e5.geometry_type.value] ? i$2[e5.geometry_type.value] : null, hasM: e5.has_m, hasZ: e5.has_z, nullable: e5.nullable, editable: e5.editable, required: e5.required, defaultVisibility: e5.default_visibility, systemMaintained: e5.system_maintained, role: s$2[e5.role.value], defaultValue: e5.default_value });
}
function z(e5) {
  e5.deleteLater();
  const t7 = b$2(e5), i6 = [];
  for (let n2 = 0; n2 < e5.end_points.size(); n2++) {
    const t8 = e5.end_points.get(n2);
    i6.push({ originEntityType: t8.origin_entity_type, destinationEntityType: t8.dest_entity_type });
  }
  return new p$b(Object.assign({ endPoints: i6 }, t7));
}
function j$3(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++)
    t7.push(c$3(e5.get(i6)));
  return t7;
}
function I$2(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++)
    t7.push(e5.get(i6));
  return t7;
}
function T$3(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++)
    t7.push(v(e5.get(i6)));
  return t7;
}
function w(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++)
    t7.push(g$1(e5.get(i6)));
  return t7;
}
function x$1(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++)
    t7.push(z(e5.get(i6)));
  return t7;
}
function M$3(e5) {
  const t7 = [];
  for (let i6 = 0; i6 < e5.size(); i6++) {
    const i7 = new p$5(), n2 = e5.get(0);
    i7.name = n2.name, i7.supportedCategory = o$1[n2.supported_category.value];
    const r2 = n2.analyzers.size();
    for (let e6 = 0; e6 < r2; e6++)
      i7.analyzers.push({ name: n2.analyzers.get(e6).name });
    for (let e6 = 0; e6 < n2.search_properties.keys().size(); e6++) {
      const t8 = n2.search_properties.keys().get(e6), r3 = n2.search_properties.get(t8), a2 = [];
      for (let e7 = 0; e7 < r3.property_names.size(); e7++)
        a2.push(r3.property_names.get(e7));
      i7.searchProperties.set(t8, { propertyNames: a2 });
    }
    t7.push(i7);
  }
  return t7;
}
let e$4 = class e2 extends p$9 {
  constructor(r2) {
    super(r2);
  }
};
e$4 = e$7([c$9("esri.rest.knowledgeGraph.ObjectValue")], e$4);
const t$2 = e$4;
let p$4 = class p3 extends f$4 {
  constructor(r2) {
    super(r2), this.path = null;
  }
};
e$7([y$3({ type: [p$9], json: { write: true } })], p$4.prototype, "path", void 0), p$4 = e$7([c$9("esri.rest.knowledgeGraph.Path")], p$4);
const c$2 = p$4;
var E$3;
!function(E3) {
  E3[E3.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", E3[E3.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", E3[E3.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", E3[E3.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", E3[E3.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", E3[E3.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", E3[E3.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", E3[E3.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
}(E$3 || (E$3 = {}));
var T$2, A$2;
!function(T2) {
  T2[T2.OBJECT = 0] = "OBJECT", T2[T2.ENTITY = 1] = "ENTITY", T2[T2.RELATIONSHIP = 2] = "RELATIONSHIP", T2[T2.PATH = 3] = "PATH", T2[T2.ARRAY = 4] = "ARRAY";
}(T$2 || (T$2 = {})), function(T2) {
  T2[T2.view = 0] = "view", T2[T2.edit = 1] = "edit";
}(A$2 || (A$2 = {}));
function l$1(o3) {
  const e5 = {}, r2 = c$1(o3, e5), n2 = o3.lengths, s5 = o3.coords, l3 = n2[0];
  e5.points = [];
  let m2 = 0;
  for (let t7 = 0; t7 < l3; t7++) {
    const o4 = [];
    for (let t8 = 0; t8 < r2; t8++)
      o4[t8] = s5[m2], m2++;
    e5.points.push(o4);
  }
  return new u$2(e5);
}
function m$1(o3) {
  const t7 = {};
  let r2 = 2;
  c$1(o3, t7);
  const n2 = o3.coords;
  return t7.x = n2[0], t7.y = n2[1], o3.has_z && (t7.z = n2[r2], r2++), o3.has_m && (t7.m = n2[r2]), new x$2(t7);
}
function i$1(o3) {
  return new m$3(a$2(o3));
}
function f$2(o3) {
  return new j$4(a$2(o3));
}
function a$2(t7) {
  const e5 = {}, r2 = c$1(t7, e5), n2 = t7.lengths, l3 = t7.coords;
  let m2 = "";
  if (t7.geometry_type.value === E$3.ESRI_GEOMETRY_POLYGON)
    m2 = "rings";
  else {
    if (t7.geometry_type.value !== E$3.ESRI_GEOMETRY_POLYLINE)
      throw new s$b("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
    m2 = "paths";
  }
  e5[m2] = [];
  let i6 = 0;
  return n2.forEach((o3) => {
    const t8 = [];
    for (let e6 = 0; e6 < o3; e6++) {
      const o4 = [];
      for (let t9 = 0; t9 < r2; t9++)
        o4[t9] = l3[i6], i6++;
      t8.push(o4);
    }
    e5[m2].push(t8);
  }), e5;
}
function c$1(o3, t7) {
  let e5 = 2;
  return o3.has_z ? (t7.hasZ = o3.has_z, e5++) : t7.hasZ = false, o3.has_m ? (t7.hasM = o3.has_m, e5++) : t7.hasM = false, e5;
}
const _$1 = s$c.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"), d = { decodedWasmObjToQueryResponseObj: (e5, t7) => {
  if (null == e5)
    return null;
  if ("object" != typeof e5)
    return e5;
  if ("getDate" in e5)
    return e5;
  if ("geometry_type" in e5)
    switch (e5.geometry_type.value) {
      case null:
        return null;
      case E$3.ESRI_GEOMETRY_POINT:
        return m$1(e5);
      case E$3.ESRI_GEOMETRY_MULTIPOINT:
        return l$1(e5);
      case E$3.ESRI_GEOMETRY_POLYLINE:
        return i$1(e5);
      case E$3.ESRI_GEOMETRY_POLYGON:
        return f$2(e5);
      case E$3.ESRI_GEOMETRY_ENVELOPE:
      case E$3.ESRI_GEOMETRY_MULTI_PATCH:
        return _$1.warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
      case E$3.ESRI_GEOMETRY_NULL:
      case E$3.ESRI_GEOMETRY_ANY:
      default:
        return _$1.warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
    }
  else {
    if (!("object_value_type" in e5))
      return _$1.warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e5.object_value_type.value) {
      case T$2.OBJECT:
        return g(e5, t7);
      case T$2.ENTITY:
        return f$1(e5, t7);
      case T$2.RELATIONSHIP:
        return j$2(e5, t7);
      case T$2.PATH:
        return R$1(e5, t7);
      case T$2.ARRAY:
        return m(e5, t7);
      default:
        return _$1.warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function m(e5, t7) {
  const n2 = [], r2 = e5.count();
  for (let o3 = 0; o3 < r2; o3++) {
    const r3 = e5.get_value_at(o3);
    n2.push(E$2(r3, t7));
  }
  return n2;
}
function E$2(e5, t7) {
  return d.decodedWasmObjToQueryResponseObj(e5, t7);
}
function f$1(e5, n2) {
  const r2 = e5.type_name, o3 = O(e5, n2), s5 = e5.get_id();
  return new c$4(Object.assign({ typeName: r2, id: s5 }, o3));
}
function O(e5, t7) {
  const n2 = {}, r2 = e5.key_count();
  for (let o3 = 0; o3 < r2; o3++)
    n2[e5.get_key_at(o3)] = E$2(e5.get_value_at(o3), t7);
  return { properties: n2 };
}
function g(e5, t7) {
  return new t$2(O(e5, t7));
}
function R$1(e5, t7) {
  const n2 = e5.entity_count(), r2 = e5.relationship_count(), s5 = [];
  for (let o3 = 0; o3 < n2; o3++)
    s5.push(f$1(e5.get_entity_at(o3), t7)), o3 < r2 && s5.push(j$2(e5.get_relationship_at(o3), t7));
  return new c$2({ path: s5 });
}
function j$2(e5, t7) {
  const n2 = e5.type_name, r2 = O(e5, t7);
  return new p$6(Object.assign({ typeName: n2, id: e5.get_id(), originId: e5.get_origin_entity_id(), destinationId: e5.get_destination_entity_id() }, r2));
}
let e$3 = class e3 extends g$3 {
  constructor(r2) {
    super(r2), this.hasError = null, this.error = null, this.editResults = [];
  }
};
e$7([y$3()], e$3.prototype, "hasError", void 0), e$7([y$3()], e$3.prototype, "error", void 0), e$7([y$3()], e$3.prototype, "editResults", void 0), e$3 = e$7([c$9("esri.rest.knowledgeGraph.GraphApplyEdits")], e$3);
const p$3 = e$3;
function e$2(e5) {
  const o3 = new p$3();
  o3.hasError = e5.has_error(), o3.hasError && (o3.error = { errorCode: e5.error.error_code, errorMessage: e5.error.error_message });
  const t7 = e5.get_edit_results_count();
  for (let r2 = 0; r2 < t7; r2++) {
    const t8 = e5.get_edit_results_at(r2), s5 = e5.get_edit_results_type_name_at(r2), _2 = [], d2 = [], a2 = [], u2 = t8.get_add_results_count(), l3 = t8.get_update_results_count(), g2 = t8.get_delete_results_count();
    for (let r3 = 0; r3 < u2; r3++) {
      const e6 = t8.get_add_result_at(r3);
      _2.push({ id: e6.id, error: { errorCode: e6.error.error_code, errorMessage: e6.error.error_message } });
    }
    for (let r3 = 0; r3 < l3; r3++) {
      const e6 = t8.get_update_result_at(r3);
      d2.push({ id: e6.id, error: { errorCode: e6.error.error_code, errorMessage: e6.error.error_message } });
    }
    for (let r3 = 0; r3 < g2; r3++) {
      const e6 = t8.get_delete_result_at(r3);
      a2.push({ id: e6.id, error: { errorCode: e6.error.error_code, errorMessage: e6.error.error_message } });
    }
    o3.editResults.push({ typeName: s5, adds: _2, updates: d2, deletes: a2 });
  }
  return o3;
}
const k$1 = { fetchKnowledgeGraph: async (e5) => {
  const t7 = new c$6({ url: e5 }), r2 = [];
  return r2.push(S$1(t7)), r2.push(q(t7)), await Promise.all(r2), t7;
}, refreshDataModel: async (e5) => {
  e5.dataModel = await W(e5);
}, refreshServiceDefinition: async (e5) => {
  const r2 = (await j$5(e5.url, { query: { f: "json" } })).data;
  return r2.capabilities = r2?.capabilities?.split(","), r2.supportedQueryFormats = r2?.supportedQueryFormats?.split(","), e5.serviceDefinition = new s$7(r2), e5.serviceDefinition;
}, executeQueryStreaming: async (e5, t7, a2) => {
  const n2 = `${e5.url}/graph/query`;
  await A$1(e5);
  const i6 = await R(n2, a2);
  i6.data.body = await C$1(t7, e5);
  const d2 = await Q(i6.data.url, i6.data);
  if (e5.dataModel)
    return new c$7({ resultRowsStream: await I$1(d2, e5.dataModel) });
  throw new s$b("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e5, t7, a2) => {
  if (e5.serviceDefinition?.dataEditingNotSupported)
    throw new s$b("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n2 = `${e5.url}/graph/applyEdits`;
  await A$1(e5);
  const o3 = await R(n2, a2);
  o3.data.body = await D$1(t7, e5);
  return P$2(await Q(o3.data.url, o3.data));
}, executeQuery: async (e5, a2, o3) => {
  const i6 = `${e5.url}/graph/query`, d2 = await j$5(i6, { responseType: "array-buffer", query: { f: "pbf", openCypherQuery: a2.openCypherQuery, ...o3?.query }, signal: o3?.signal, timeout: o3?.timeout }), p6 = d2.getHeader?.("content-type"), c2 = d2.data;
  if (p6?.includes("application/x-protobuf")) {
    const t7 = new (await r$3()).GraphQueryDecoder();
    if (t7.deleteLater(), e5.dataModel)
      return new c$8({ resultRows: L(t7, c2, e5.dataModel) });
    throw new s$b("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s$b("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: p6, data: d2.data });
}, executeSearch: async (e5, a2, o3) => {
  const i6 = a2.typeCategoryFilter, d2 = `${e5.url}/graph/search`, p6 = await j$5(d2, { responseType: "array-buffer", query: { f: "pbf", searchQuery: `"${a2.searchQuery}"`, typeCategoryFilter: i6, ...o3?.query }, signal: o3?.signal, timeout: o3?.timeout }), c2 = p6.getHeader?.("content-type"), l3 = p6.data;
  if (c2?.includes("application/x-protobuf")) {
    const t7 = new (await r$3()).GraphQueryDecoder();
    if (t7.deleteLater(), e5.dataModel)
      return new c$8({ resultRows: L(t7, l3, e5.dataModel) });
    throw new s$b("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s$b("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: c2, data: p6.data });
}, executeSearchStreaming: async (e5, t7, a2) => {
  const n2 = `${e5.url}/graph/search`;
  await A$1(e5);
  const i6 = await R(n2, a2);
  i6.data.body = await F(t7);
  const d2 = await Q(i6.data.url, i6.data);
  if (e5.dataModel)
    return new c$7({ resultRowsStream: await I$1(d2, e5.dataModel) });
  throw new s$b("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, _fetchWrapper: async (e5, t7) => fetch(e5, t7) };
async function x(e5, t7, r2) {
  return k$1.executeQueryStreaming(e5, t7, r2);
}
async function T$1(e5) {
  return k$1.fetchKnowledgeGraph(e5);
}
async function S$1(e5) {
  return k$1.refreshDataModel(e5);
}
async function q(e5) {
  return k$1.refreshServiceDefinition(e5);
}
async function Q(e5, t7) {
  return k$1._fetchWrapper(e5, t7);
}
async function A$1(t7) {
  const r2 = t$c?.findCredential(t7.url);
  r2 || (t7.dataModel ? await W(t7) : await S$1(t7));
}
function M$2(e5, t7, a2) {
  if (0 !== e5.error_code)
    throw new s$b(t7, a2, { errorCode: e5.error_code, errorMessage: e5.error_message });
}
function j$1(e5, t7, r2, a2) {
  null == t7 ? r2.set_param_key_value(e5, "") : "object" != typeof t7 || t7 instanceof Date ? r2.set_param_key_value(e5, t7) : t7 instanceof p$d ? r2.set_param_key_value(e5, s$5(t7, a2)) : t7 instanceof Array ? r2.set_param_key_value(e5, a$4(t7, a2)) : r2.set_param_key_value(e5, l$2(t7, a2));
}
async function D$1(e5, t7) {
  if (t7.dataModel || await S$1(t7), !t7.dataModel)
    throw new s$b("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const a2 = await r$3(), n2 = !!e5.options?.cascadeDelete, o3 = new a2.GraphApplyEditsEncoder(a2.SpatialReferenceUtil.WGS84(), e5.options?.inputQuantizationParameters ? s$3(e5.options?.inputQuantizationParameters) : a2.InputQuantizationUtil.WGS84_lossless());
  o3.deleteLater(), o3.cascade_delete = n2;
  try {
    let t8;
    e5.entityAdds?.forEach((e6) => {
      t8 = o3.add_entity(r$2(e6, a2)), M$2(t8, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e5.relationshipAdds?.forEach((e6) => {
      if (!e6.originId || !e6.destinationId)
        throw new s$b("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      t8 = o3.add_relationship(r$2(e6, a2)), M$2(t8, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e5.entityUpdates?.forEach((e6) => {
      if (!e6.id)
        throw new s$b("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t8 = o3.update_entity(r$2(e6, a2)), M$2(t8, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e5.relationshipUpdates?.forEach((e6) => {
      if (!e6.id)
        throw new s$b("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t8 = o3.update_relationship(r$2(e6, a2)), M$2(t8, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e5.entityDeletes?.forEach((e6) => {
      if (!e6.typeName)
        throw new s$b("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t9 = o3.make_delete_helper(e6.typeName, true);
      t9.deleteLater(), e6.ids?.forEach((e7) => {
        t9.delete_by_id(e7);
      });
    }), e5.relationshipDeletes?.forEach((e6) => {
      if (!e6.typeName)
        throw new s$b("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t9 = o3.make_delete_helper(e6.typeName, false);
      e6.ids?.forEach((e7) => {
        t9.delete_by_id(e7);
      });
    }), o3.encode();
  } catch (d2) {
    throw new s$b("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: d2 });
  }
  const i6 = o3.get_encoding_result();
  return M$2(i6.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), i6.get_byte_buffer();
}
async function C$1(e5, t7) {
  const a2 = await r$3(), n2 = new a2.GraphQueryRequestEncoder();
  if (n2.deleteLater(), n2.output_spatial_reference = a2.SpatialReferenceUtil.WGS84(), n2.open_cypher_query = e5.openCypherQuery, e5.bindParameters)
    for (const [r2, d2] of Object.entries(e5.bindParameters))
      j$1(r2, d2, n2, a2);
  if (e5.bindGeometryQuantizationParameters)
    u$1(e5.bindGeometryQuantizationParameters, n2);
  else {
    if (t7.dataModel || await S$1(t7), 4326 !== t7.dataModel?.spatialReference?.wkid)
      throw new s$b("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n2.input_quantization_parameters = a2.InputQuantizationUtil.WGS84_lossless();
  }
  e5.outputQuantizationParameters && y$2(e5.outputQuantizationParameters, n2, a2);
  try {
    n2.encode();
  } catch (i6) {
    throw new s$b("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: i6 });
  }
  const o3 = n2.get_encoding_result();
  if (0 !== o3.error.error_code)
    throw new s$b("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o3.error.error_code, errorMessage: o3.error.error_message });
  return o3.get_byte_buffer();
}
async function F(e5) {
  const t7 = await r$3(), a2 = new t7.GraphSearchRequestEncoder();
  if (a2.deleteLater(), a2.search_query = e5.searchQuery, a2.type_category_filter = t7.esriNamedTypeCategory[e5.typeCategoryFilter], true === e5.returnSearchContext && (a2.return_search_context = e5.returnSearchContext), null != e5.start && e5.start > 0 && (a2.start_index = e5.start), null != e5.num && (a2.max_num_results = e5.num), null != e5.idsFilter && Array.isArray(e5.idsFilter) && e5.idsFilter.length > 0)
    try {
      a2.set_ids_filter(a$4(e5.idsFilter, t7));
    } catch (o3) {
      throw new s$b("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", { error: o3 });
    }
  e5.namedTypesFilter?.forEach((e6) => {
    a2.add_named_type_filter(e6);
  });
  try {
    a2.encode();
  } catch (o3) {
    throw new s$b("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", { error: o3 });
  }
  const n2 = a2.get_encoding_result();
  if (0 !== n2.error.error_code)
    throw new s$b("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", { errorCode: n2.error.error_code, errorMessage: n2.error.error_message });
  return n2.get_byte_buffer();
}
async function R(e5, r2) {
  return j$5(e5, { responseType: "native-request-init", method: "post", query: { f: "pbf", ...r2?.query }, body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: r2?.signal, timeout: r2?.timeout });
}
async function P$2(e5) {
  const t7 = e5.headers.get("content-type");
  if (t7?.includes("application/x-protobuf")) {
    const t8 = await e5.arrayBuffer(), r2 = new (await r$3()).GraphApplyEditsDecoder();
    return r2.deleteLater(), r2.decode(new Uint8Array(t8)), e$2(r2);
  }
  throw new s$b("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: t7, data: e5.text() });
}
function L(e5, t7, a2) {
  e5.push_buffer(new Uint8Array(t7));
  const n2 = [];
  let o3 = 0;
  for (; e5.next_row(); ) {
    o3 || (o3 = e5.get_header_keys().size());
    const t8 = new Array(o3);
    for (let r2 = 0; r2 < o3; r2++) {
      const n3 = e5.get_value(r2);
      t8[r2] = E$2(n3, a2);
    }
    n2.push(t8);
  }
  if (e5.has_error())
    throw new s$b("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: e5.error.error_code, errorMessage: e5.error.error_message });
  return n2;
}
async function I$1(e5, t7) {
  const n2 = e5.headers.get("content-type");
  if (e5.headers.get("content-length") && s$c.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), n2?.includes("application/x-protobuf")) {
    const a2 = e5.body?.getReader(), n3 = new (await r$3()).GraphQueryDecoder();
    return n3.deleteLater(), new ReadableStream({ async start(e6) {
      try {
        return o3();
      } catch (i6) {
        a2?.releaseLock(), e6.error(new s$b("knowledge-graph:stream-decoding-error", "The server returned a valid response, but there was an error decoding the response stream", { error: i6 })), e6.close();
      }
      function o3() {
        return a2?.read().then(({ done: i6, value: d2 }) => {
          if (i6) {
            let t8;
            if (n3.has_error() && (t8 = new s$b("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: n3.error.error_code, errorMessage: n3.error.error_message })), a2.releaseLock(), t8)
              throw e6.error(t8), t8;
            return void e6.close();
          }
          const s5 = L(n3, d2, t7);
          return s5.length > 0 && e6.enqueue(s5), o3();
        });
      }
    } });
  }
  throw new s$b("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: n2, data: e5.text() });
}
async function W(e5) {
  const a2 = `${e5.url}/dataModel/queryDataModel`, n2 = await j$5(a2, { responseType: "array-buffer", query: { f: "pbf" } }), o3 = n2.getHeader?.("content-type"), i6 = n2.data;
  if (o3?.includes("application/x-protobuf")) {
    const e6 = (await r$3()).decode_data_model_from_protocol_buffer(new Uint8Array(i6));
    if (!e6)
      throw new s$b("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return _$2(e6);
  }
  throw new s$b("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o3, data: n2.data });
}
let p$2 = class p4 extends g$3 {
  constructor(r2) {
    super(r2), this.openCypherQuery = "";
  }
};
e$7([y$3()], p$2.prototype, "openCypherQuery", void 0), p$2 = e$7([c$9("esri.rest.knowledgeGraph.GraphQuery")], p$2);
const t$1 = p$2;
let s$1 = class s3 extends t$1 {
  constructor(r2) {
    super(r2), this.bindParameters = null, this.bindGeometryQuantizationParameters = null, this.outputQuantizationParameters = null;
  }
};
e$7([y$3()], s$1.prototype, "bindParameters", void 0), e$7([y$3()], s$1.prototype, "bindGeometryQuantizationParameters", void 0), e$7([y$3()], s$1.prototype, "outputQuantizationParameters", void 0), s$1 = e$7([c$9("esri.rest.knowledgeGraph.GraphQueryStreaming")], s$1);
const a$1 = s$1;
function e$1(n2) {
  if (!n2.spatialReference.isWGS84)
    throw new s$b("knowledge-graph:layer-support-utils", "The extentToInBoundsRings function only supports WGS84 spatial references.");
  let i6;
  return i6 = n2.xmax > 180 && n2.xmin < 180 ? [[[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [180, n2.ymax], [180, n2.ymin], [n2.xmin, n2.ymin]], [[-180, n2.ymin], [-180, n2.ymax], [n2.xmax - 360, n2.ymax], [n2.xmax - 360, n2.ymin], [-180, n2.ymin]]] : n2.xmax > 180 && n2.xmin > 180 ? [[[n2.xmin - 360, n2.ymin], [n2.xmin - 360, n2.ymax], [n2.xmax - 360, n2.ymax], [n2.xmax - 360, n2.ymin], [n2.xmin - 360, n2.ymin]]] : n2.xmax > -180 && n2.xmin < -180 ? [[[n2.xmin + 360, n2.ymin], [n2.xmin + 360, n2.ymax], [180, n2.ymax], [180, n2.ymin], [n2.xmin + 360, n2.ymin]], [[-180, n2.ymin], [-180, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [-180, n2.ymin]]] : n2.xmax < -180 && n2.xmin < -180 ? [[[n2.xmin + 360, n2.ymin], [n2.xmin + 360, n2.ymax], [n2.xmax + 360, n2.ymax], [n2.xmax + 360, n2.ymin], [n2.xmin + 360, n2.ymin]]] : [[[n2.xmin, n2.ymin], [n2.xmin, n2.ymax], [n2.xmax, n2.ymax], [n2.xmax, n2.ymin], [n2.xmin, n2.ymin]]], i6;
}
async function a(m2, e5) {
  const a2 = [], x$12 = /* @__PURE__ */ new Map(), r2 = [];
  if (e5.dataModel?.relationshipTypes)
    for (const n2 of e5.dataModel.relationshipTypes)
      n2.name && x$12.set(n2.name, []);
  for (const n2 of m2)
    x$12.has(n2.typeName) && x$12.get(n2.typeName)?.push(n2.id);
  for (const [t7, y2] of x$12) {
    if (y2.length < 1)
      continue;
    const m3 = new a$1({ openCypherQuery: `MATCH (n)-[r:${t7}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`, bindParameters: { ids: y2 } });
    r2.push(x(e5, m3).then(async (m4) => {
      const n2 = m4.resultRowsStream.getReader();
      for (; ; ) {
        const { done: m5, value: i6 } = await n2.read();
        if (m5)
          break;
        for (const n3 of i6)
          a2.push({ id: n3[0], typeName: n3[1] }), a2.push({ id: n3[2], typeName: n3[3] });
      }
    }));
  }
  return await Promise.all(r2), a2;
}
const b$1 = "ESRI__ID", T = "ESRI__ORIGIN_ID", D = "ESRI__DESTINATION_ID", M$1 = "ESRI__LAYOUT_GEOMETRY", I = 12, k = s$c.getLogger("esri.rest.knowledgeGraph.knowledgeGraphLayer.KnowledgeGraphLayerDataManager");
let E$1 = class E extends g$3 {
  constructor(e5) {
    super(e5), this.inclusionModeDefinition = { generateAllSublayers: true, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.entityTypeNames = /* @__PURE__ */ new Set(), this.relationshipTypeNames = /* @__PURE__ */ new Set(), this.geographicLookup = /* @__PURE__ */ new Map(), this.sublayerCaches = /* @__PURE__ */ new Map(), this.nodeConnectionsLookup = /* @__PURE__ */ new Map(), this.memberIdTypeLookup = /* @__PURE__ */ new Map(), this._processingCacheUpdatesLookup = /* @__PURE__ */ new Map();
    const t7 = /* @__PURE__ */ new Map();
    e5.knowledgeGraph.dataModel.entityTypes?.forEach((i6) => {
      i6.name && (t7.set(i6.name, "entity"), this._processingCacheUpdatesLookup.set(i6.name, []), e5.inclusionModeDefinition && !e5.inclusionModeDefinition?.generateAllSublayers || this.entityTypeNames.add(i6.name), i6.properties?.forEach((e6) => {
        e6.geometryType && "esriGeometryNull" !== e6.geometryType && this.geographicLookup.set(i6.name, { name: e6.name ?? "", geometryType: e6.geometryType });
      }));
    }), e5.knowledgeGraph.dataModel.relationshipTypes?.forEach((i6) => {
      i6.name && (t7.set(i6.name, "relationship"), this._processingCacheUpdatesLookup.set(i6.name, []), e5.inclusionModeDefinition && !e5.inclusionModeDefinition?.generateAllSublayers || this.relationshipTypeNames.add(i6.name), i6.properties?.forEach((e6) => {
        e6.geometryType && "esriGeometryNull" !== e6.geometryType && this.geographicLookup.set(i6.name, { name: e6.name ?? "", geometryType: e6.geometryType });
      }));
    }), e5.inclusionModeDefinition?.namedTypeDefinitions.forEach((i6, n2) => {
      if ("entity" === t7.get(n2))
        this.entityTypeNames.add(n2);
      else {
        if ("relationship" !== t7.get(n2))
          return k.warn(`A named type, ${n2}, was in the inclusion list that wasn't in the data model and will be removed`), void e5.inclusionModeDefinition?.namedTypeDefinitions.delete(n2);
        this.relationshipTypeNames.add(n2);
      }
      const o3 = /* @__PURE__ */ new Map();
      i6.members?.forEach((e6) => {
        this.memberIdTypeLookup.set(e6.id, n2);
        const t8 = this.getById(e6.id);
        t8 && o3.set(e6.id, t8);
      }), this.sublayerCaches.set(n2, o3);
    });
  }
  addToLayer(e5) {
    e5.forEach(({ typeName: e6, id: t7 }) => {
      if (!this.inclusionModeDefinition)
        throw new s$b("knowledge-graph:layer-data-manager", "You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");
      if (this.inclusionModeDefinition.namedTypeDefinitions.has(e6)) {
        if (this.inclusionModeDefinition.namedTypeDefinitions.has(e6)) {
          const i6 = this.inclusionModeDefinition.namedTypeDefinitions.get(e6);
          i6.members || (i6.members = /* @__PURE__ */ new Map()), i6.members.set(t7, { id: t7 }), this.memberIdTypeLookup.set(t7, e6);
        }
      } else {
        const i6 = /* @__PURE__ */ new Map();
        i6.set(t7, { id: t7 }), this.inclusionModeDefinition.namedTypeDefinitions.set(e6, { useAllData: false, members: i6 }), this.memberIdTypeLookup.set(t7, e6);
      }
    });
  }
  getById(e5) {
    return o$3.getInstance().readFromStoreById(e5);
  }
  async getData(e5, t7, i6) {
    if (t7.objectType.name && this.inclusionModeDefinition?.namedTypeDefinitions && this.inclusionModeDefinition.namedTypeDefinitions.size > 0 && !this.inclusionModeDefinition.namedTypeDefinitions.has(t7.objectType.name))
      return [];
    let n2;
    if (n2 = e5 || new b$3({ where: "1=1", outFields: ["*"] }), "link-chart" === t7.parentCompositeLayer.type) {
      const e6 = t7.parentCompositeLayer, i7 = this._processingCacheUpdatesLookup.get(t7.objectType.name ?? ""), o3 = n2.outFields, s5 = n2.geometry;
      let a2 = "", r2 = "";
      s5 && s5.extent && (a2 = p$e(s5.extent.ymin, s5.extent.xmin, I), r2 = p$e(s5.extent.ymax, s5.extent.xmax, I)), o3 && 1 === o3.length && o3[0] === b$1 && "1=1" === n2.where || await Promise.all(i7 ?? []);
      const d2 = this.sublayerCaches.has(t7.objectType.name ?? "") ? Array.from(this.sublayerCaches.get(t7.objectType.name)?.values()) : [], m2 = [];
      return d2.forEach((i8) => {
        if (i8.geometry = e6.linkChartDiagramLookup.get(i8.attributes[t7.objectIdField]), i8.attributes[M$1] = i8.geometry, a2 && r2) {
          const n3 = e6.linkChartGeohashLookup.get(i8.attributes[t7.objectIdField]);
          n3 ? n3 >= a2 && n3 <= r2 && m2.push(i8) : m2.push(i8);
        } else
          m2.push(i8);
      }), m2;
    }
    return this.retrieveDataFromService(n2, t7, i6);
  }
  async getConnectedRecordIds(e5) {
    const t7 = [], i6 = [], n2 = /* @__PURE__ */ new Map();
    return e5.forEach((e6) => {
      if (this.memberIdTypeLookup.has(e6)) {
        const t8 = this.memberIdTypeLookup.get(e6);
        if (!this.entityTypeNames.has(t8))
          return;
        n2.has(t8) ? n2.get(t8)?.push(e6) : n2.set(t8, [e6]);
      }
    }), n2.forEach((e6, n3) => {
      const o3 = `MATCH (n:${n3})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`, s5 = new Promise((i7) => {
        (async () => {
          const i8 = (await x(this.knowledgeGraph, new a$1({ openCypherQuery: o3, bindParameters: { ids: e6 } }))).resultRowsStream.getReader();
          try {
            for (; ; ) {
              const { done: e7, value: n4 } = await i8.read();
              if (e7)
                break;
              for (let i9 = 0; i9 < n4.length; i9++) {
                const e8 = n4[i9];
                t7.push({ id: e8[0], typeName: e8[1] }), t7.push({ id: e8[2], typeName: e8[3] });
              }
            }
          } catch (n4) {
            if ("AbortError" !== n4.name)
              throw n4;
            k.info("Request aborted as expected");
          }
        })().then(() => {
          i7();
        });
      });
      i6.push(s5);
    }), await Promise.all(i6), t7;
  }
  async refreshCacheContent(e5, t7, n2, s5 = true) {
    const a2 = o$3.getInstance(), r2 = [], p6 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map();
    this.knowledgeGraph.dataModel.entityTypes?.forEach((e6) => {
      e6.name && d2.set(e6.name, e6);
    }), this.knowledgeGraph.dataModel.relationshipTypes?.forEach((e6) => {
      e6.name && d2.set(e6.name, e6);
    }), e5 || this.inclusionModeDefinition ? e5 ? e5.forEach((e6) => {
      if (this.memberIdTypeLookup.has(e6)) {
        const t8 = this.memberIdTypeLookup.get(e6);
        p6.has(t8) ? p6.get(t8)?.push(e6) : p6.set(t8, [e6]);
      }
    }) : this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e6, t8) => {
      e6.useAllData ? p6.set(t8, null) : e6.members && e6.members.forEach((e7) => {
        p6.has(t8) && null !== p6.get(t8) ? p6.get(t8)?.push(e7.id) : p6.set(t8, [e7.id]);
      });
    }) : (this.knowledgeGraph.dataModel.entityTypes?.forEach((e6) => {
      e6.name && p6.set(e6.name, null);
    }), this.knowledgeGraph.dataModel.entityTypes?.forEach((e6) => {
      e6.name && p6.set(e6.name, null);
    }));
    for (const [m2, l3] of p6) {
      const e6 = new Promise((e7) => {
        const r3 = async () => {
          const e8 = /* @__PURE__ */ new Set(), r4 = [];
          let p7, h = "", c2 = false;
          if (t7 || d2.get(m2)?.properties?.forEach((t8) => {
            t8.name && e8.add(t8.name);
          }), n2 && this.geographicLookup.has(m2)) {
            const t8 = this.geographicLookup.get(m2)?.name;
            t8 && e8.add(t8);
          }
          if (this.entityTypeNames.has(m2))
            h = `MATCH (n:${m2}) ${l3 ? "WHERE id(n) IN $ids " : ""}return ID(n)`, e8.forEach((e9) => {
              h += `, n.${e9}`, r4.push(e9);
            });
          else {
            if (!this.relationshipTypeNames.has(m2))
              throw new s$b("knowledge-graph:layer-data-manager", `The graph type of ${m2} could not be determined. Was this type set in the KG data model and inclusion definition?`);
            c2 = true, h = `MATCH ()-[n:${m2}]->() ${l3 ? "WHERE id(n) IN $ids " : ""}return ID(n), id(startNode(n)), id(endNode(n))`, e8.forEach((e9) => {
              h += `, n.${e9}`, r4.push(e9);
            });
          }
          p7 = new a$1(l3 ? { openCypherQuery: h, bindParameters: { ids: l3 } } : { openCypherQuery: h });
          const y2 = (await x(this.knowledgeGraph, p7)).resultRowsStream.getReader();
          for (; ; ) {
            const { done: e9, value: t8 } = await y2.read();
            if (e9)
              break;
            const i6 = [];
            for (let s6 = 0; s6 < t8.length; s6++) {
              const e10 = t8[s6];
              let n4 = 0, a3 = 0;
              const p9 = { properties: {} };
              for (p9.id = e10[n4], n4++, a3++, c2 && (p9.originId = e10[n4], n4++, a3++, p9.destinationId = e10[n4], n4++, a3++, r$4(this.nodeConnectionsLookup, p9.originId, () => /* @__PURE__ */ new Set()).add(p9.id), r$4(this.nodeConnectionsLookup, p9.destinationId, () => /* @__PURE__ */ new Set()).add(p9.id)); n4 < e10.length; n4++)
                p9.properties[r4[n4 - a3]] = e10[n4];
              i6.push(p9);
            }
            const n3 = a2.writeToStore(i6, b$1, this.geographicLookup.get(m2)?.name);
            this.sublayerCaches.has(m2) || this.sublayerCaches.set(m2, /* @__PURE__ */ new Map()), s5 && !this.inclusionModeDefinition?.namedTypeDefinitions.has(m2) && this.inclusionModeDefinition?.namedTypeDefinitions.set(m2, { useAllData: false, members: /* @__PURE__ */ new Map() }), s5 && !this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members && (this.inclusionModeDefinition.namedTypeDefinitions.get(m2).members = /* @__PURE__ */ new Map());
            const p8 = this.sublayerCaches.get(m2);
            n3.forEach((e10) => {
              p8?.set(e10.attributes[b$1], e10), s5 && !this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members.has(e10.attributes[b$1]) && (this.inclusionModeDefinition?.namedTypeDefinitions.get(m2).members.set(e10.attributes[b$1], { id: e10.attributes[b$1] }), this.memberIdTypeLookup.set(e10.attributes[b$1], m2));
            });
          }
        };
        r3().then(() => {
          e7(null);
        });
      });
      r2.push(e6), this._processingCacheUpdatesLookup.get(m2)?.push(e6);
    }
    await Promise.all(r2);
  }
  removeFromLayer(e5) {
    const t7 = /* @__PURE__ */ new Set(), i6 = new Set(e5.map((e6) => e6.id));
    for (const n2 of e5)
      t7.add(n2.typeName), this.memberIdTypeLookup.delete(n2.id), this.inclusionModeDefinition?.namedTypeDefinitions.forEach((e6) => {
        e6.members?.has(n2.id) && e6.members.delete(n2.id);
      });
    t7.forEach((e6) => {
      this.sublayerCaches.get(e6)?.forEach((t8, n2) => {
        i6.has(n2) && this.sublayerCaches.get(e6)?.delete(n2);
      });
    });
  }
  async retrieveDataFromService(e5, t7, n2) {
    const o3 = o$3.getInstance(), a2 = /* @__PURE__ */ new Set(), r2 = [];
    let p6, g2 = "", T2 = [];
    const D2 = "relationship" === t7.graphType, M2 = this.inclusionModeDefinition?.namedTypeDefinitions?.get(t7.objectType.name)?.useAllData, I2 = t7.parentCompositeLayer.sublayerIdsCache.get(t7.objectType.name);
    let k2 = !M2 && I2 ? Array.from(I2).sort() : null;
    if (this.inclusionModeDefinition?.namedTypeDefinitions?.get(t7.objectType.name)?.useAllData)
      this.inclusionModeDefinition?.namedTypeDefinitions?.get(t7.objectType.name)?.useAllData && null != e5.objectIds && (k2 = e5.objectIds);
    else if (null != e5.objectIds && k2 && k2.length > 0) {
      const t8 = e5.objectIds;
      e5.objectIds = k2.filter((e6) => t8.includes(e6));
    } else if (null != e5.objectIds)
      k2 = e5.objectIds;
    else {
      if (this.inclusionModeDefinition?.namedTypeDefinitions.has(t7.objectType.name) && (!this.inclusionModeDefinition.namedTypeDefinitions.get(t7.objectType.name)?.members || this.inclusionModeDefinition.namedTypeDefinitions.get(t7.objectType.name)?.members?.size < 1))
        return e5.objectIds = [], [];
      e5.objectIds = k2;
    }
    if (null != e5.outFields) {
      const i6 = e5.outFields;
      i6.includes("*") ? t7.fields.forEach((e6) => {
        a2.add(e6.name);
      }) : i6.forEach((e6) => {
        e6 !== b$1 && e6 !== t7.geometryFieldName && a2.add(e6);
      });
    }
    if (null != e5.geometry) {
      const n3 = e5.geometry;
      let o4;
      const c2 = t7.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition, u2 = c2?.spatialReference, b2 = c2?.serviceCapabilities?.geometryCapabilities;
      let T3 = b2?.geometryMaxBoundingRectangleSizeX, M3 = b2?.geometryMaxBoundingRectangleSizeY;
      if (n3?.extent?.spatialReference && !n3.spatialReference?.isWGS84 ? (await F$1(n3.extent.spatialReference, N), o4 = b$4(n3.extent, N)) : o4 = n3.extent, T3 && M3 && u2) {
        if (4326 !== u2.wkid) {
          const e6 = new M$4({ spatialReference: u2, xmax: T3, ymax: M3 }), t8 = b$4(e6, N);
          T3 = t8.xmax, M3 = t8.ymax;
        }
        if (o4.xmax - o4.xmin > T3)
          throw new s$b("knowledge-graph:layer-data-manager", `Extent x bounds should be within ${T3}° latitude, limit exceeded`);
        if (o4.ymax - o4.ymin > M3)
          throw new s$b("knowledge-graph:layer-data-manager", `Extent y bounds should be within ${M3}° longitude, limit exceeded`);
      }
      if (null != e5.where && "1=1" !== e5.where) {
        const i6 = await e$8(e5.where.toUpperCase(), t7.fieldsIndex);
        t7.fields.forEach((e6) => {
          i6.fieldNames.includes(e6.name) && a2.add(e6.name);
        });
      }
      g2 = D2 ? `Match ()-[n:${t7.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t7.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))` : `Match (n:${t7.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t7.geometryFieldName}) return ID(n)`, t7.geometryFieldName && a2.add(t7.geometryFieldName), a2.forEach((e6) => {
        g2 += `, n.${e6}`, r2.push(e6);
      }), p6 = new a$1({ openCypherQuery: g2, bindParameters: { param_filter_geom: new j$4({ rings: e$1(o4) }) } });
    } else {
      let i6 = "";
      if (null != e5.where && "1=1" !== e5.where) {
        const n4 = await e$8(e5.where, t7.fieldsIndex);
        t7.fields.forEach((e6) => {
          n4.fieldNames.includes(e6.name) && a2.add(e6.name);
        });
        const o5 = /* @__PURE__ */ new Set(["column-reference", "string", "number", "binary-expression"]), r3 = /* @__PURE__ */ new Set(["=", "<", "<=", "<>", ">", ">=", "AND", "OR", "LIKE"]);
        let p7 = false;
        const d2 = (e6) => {
          if ("column-reference" === e6.type)
            return `n.${e6.column}`;
          if ("string" === e6.type)
            return `'${e6.value}'`;
          if ("number" === e6.type)
            return `${e6.value}`;
          if ("binary-expression" === e6.type && o5.has(e6.left.type) && o5.has(e6.right.type) && r3.has(e6.operator))
            return `${d2(e6.left)} ${e6.operator} ${d2(e6.right)}`;
          if ("binary-expression" === e6.type && "LIKE" === e6.operator) {
            let t8 = "";
            if ("function" === e6.left.type && "column-reference" === e6.left.args.value[0].type)
              t8 += `lower(n.${e6.left.args.value[0].column})`;
            else {
              if ("column-reference" !== e6.left.type)
                return p7 = true, "";
              t8 += `lower(n.${e6.left.column})`;
            }
            if (t8 += " CONTAINS (", "string" !== e6.right.type)
              return p7 = true, "";
            {
              let i7 = e6.right.value;
              "%" === i7.charAt(0) && (i7 = i7.slice(1)), "%" === i7.charAt(i7.length - 1) && (i7 = i7.slice(0, -1)), t8 += `'${i7.toLowerCase()}')`;
            }
            return t8;
          }
          return p7 = true, "";
        };
        i6 = d2(n4.parseTree), p7 && (i6 = "");
      }
      let n3 = "";
      n3 = D2 ? `Match ()-[n:${t7.objectType.name}]->()` : `Match (n:${t7.objectType.name})`;
      let o4 = false;
      k2 && (o4 = true, n3 += " WHERE ID(n) IN $ids"), i6 && (n3 += o4 ? " AND" : " WHERE", n3 += ` ${i6}`), n3 += " return ID(n)", D2 && (n3 += ", id(startNode(n)), id(endNode(n))"), e5.returnGeometry && t7.geometryFieldName && a2.add(t7.geometryFieldName), a2.forEach((e6) => {
        n3 += `, n.${e6}`, r2.push(e6);
      }), p6 = new a$1(k2 ? { openCypherQuery: n3, bindParameters: { ids: k2 } } : { openCypherQuery: n3 });
    }
    const E3 = (await x(t7.parentCompositeLayer.dataManager.knowledgeGraph, p6, n2)).resultRowsStream.getReader();
    for (; ; ) {
      const { done: e6, value: i6 } = await E3.read();
      if (e6)
        break;
      const n3 = [];
      for (let t8 = 0; t8 < i6.length; t8++) {
        const e7 = i6[t8];
        let o4 = 0, s5 = 0;
        const a3 = { properties: {} };
        for (a3.id = e7[o4], o4++, s5++, D2 && (a3.originId = e7[o4], o4++, s5++, a3.destinationId = e7[o4], o4++, s5++); o4 < e7.length; o4++)
          a3.properties[r2[o4 - s5]] = e7[o4];
        n3.push(a3);
      }
      T2 = T2.concat(o3.writeToStore(n3, b$1, t7.parentCompositeLayer.dataManager.geographicLookup.get(t7.objectType.name)?.name));
    }
    return T2;
  }
};
e$7([y$3()], E$1.prototype, "knowledgeGraph", void 0), e$7([y$3()], E$1.prototype, "inclusionModeDefinition", void 0), e$7([y$3()], E$1.prototype, "entityTypeNames", void 0), e$7([y$3()], E$1.prototype, "relationshipTypeNames", void 0), e$7([y$3()], E$1.prototype, "geographicLookup", void 0), e$7([y$3()], E$1.prototype, "sublayerCaches", void 0), e$7([y$3()], E$1.prototype, "nodeConnectionsLookup", void 0), e$7([y$3()], E$1.prototype, "memberIdTypeLookup", void 0), E$1 = e$7([c$9("esri.rest.knowledgeGraph.knowledgeGraphLayer.KnowledgeGraphLayerDataManager")], E$1);
const t6 = s$d(), p$1 = (o3) => {
  let p6 = class extends o3 {
    constructor() {
      super(...arguments), this.fields = [], this.fieldsIndex = null;
    }
  };
  return e$7([y$3(t6.fields)], p6.prototype, "fields", void 0), e$7([y$3(t6.fieldsIndex)], p6.prototype, "fieldsIndex", void 0), p6 = e$7([c$9("esri.layers.knowledgeGraphLayer.KnowledgeGraphSublayerBase")], p6), p6;
};
let M = class extends c$a(p$1(a$6(t$d(f$6(b$5))))) {
  constructor(e5) {
    if (super(e5), this.capabilities = l$5(false, false), this.definitionExpression = "", this.displayField = "", this.elevationInfo = null, this.geometryType = null, this.geometryFieldName = null, this.graphType = null, this.hasM = false, this.hasZ = false, this.labelsVisible = null, this.labelingInfo = null, this.objectIdField = b$1, this.objectType = null, this.parentCompositeLayer = null, this.popupTemplate = null, this.source = { openPorts: () => this.load().then(() => {
      const e6 = new MessageChannel();
      return new w$1(e6.port1, { channel: e6, client: { queryFeatures: (e7, t7 = {}) => {
        const r2 = b$3.fromJSON(e7);
        return this.queryFeaturesJSON(r2, t7);
      } } }), [e6.port2];
    }) }, this.type = "knowledge-graph-sublayer", "link-chart" === e5.parentCompositeLayer.type)
      "relationship" === e5.graphType ? this.geometryType = "polyline" : this.geometryType = "point", this.geometryFieldName = M$1;
    else if (e5.parentCompositeLayer.dataManager.geographicLookup.get(e5.objectType.name)?.geometryType && "esriGeometryNull" !== e5.parentCompositeLayer.dataManager.geographicLookup.get(e5.objectType.name)?.geometryType) {
      const t7 = e5.parentCompositeLayer.dataManager.geographicLookup.get(e5.objectType.name);
      this.geometryFieldName = t7?.name ?? null, this.geometryType = t7?.geometryType ? o$4.fromJSON(t7.geometryType) : null;
      const r2 = t7?.name, o3 = r2 ? e5.objectType.properties?.[r2] : null;
      o3 ? (this.hasM = o3.hasM ?? false, this.hasZ = o3.hasZ ?? false) : (this.hasM = false, this.hasZ = false);
    } else
      this.geometryType = null;
    e5.objectType.properties?.forEach((e6) => {
      let t7 = null, r2 = e6.fieldType;
      "esriFieldTypeOID" === r2 && (r2 = "esriFieldTypeInteger"), this.fields.push(y$4.fromJSON({ name: e6.name, type: r2, alias: e6.alias, defaultValue: t7, editable: e6.editable, nullable: e6.nullable }));
    }), this.fields.push(y$4.fromJSON({ name: this.objectIdField, type: "esriFieldTypeString", alias: this.objectIdField, editable: false })), this._set("fields", [...this.fields]), e5.parentCompositeLayer.dataManager.knowledgeGraph.dataModel?.spatialReference && (this.spatialReference = e5.parentCompositeLayer.dataManager.knowledgeGraph.dataModel.spatialReference), "link-chart" === e5.parentCompositeLayer.type ? "relationship" === e5.graphType ? this.renderer = t$e(o$5(o$4.toJSON("polyline")).renderer) : this.renderer = t$e(o$5(o$4.toJSON("point")).renderer) : this.renderer = t$e(o$5(o$4.toJSON(this.geometryType)).renderer);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e5) {
    p$f(e5, this.fieldsIndex), this._set("renderer", e5);
  }
  createPopupTemplate(e5) {
    return p$g(this, e5);
  }
  createQuery() {
    return new b$3({ where: "1=1", outFields: ["*"] });
  }
  getField(e5) {
    for (let t7 = 0; t7 < this.fields.length; t7++)
      if (this.fields[t7].name === e5)
        return this.fields[t7];
    throw new Error("Field not found");
  }
  getFieldDomain(e5, t7) {
    return null;
  }
  async queryFeatures(e5, t7) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e5), s5 = d$1.fromJSON(await o3.executeQuery(r2.toJSON(), t7?.signal));
    return s5.features.forEach((e6) => {
      e6.sourceLayer = this;
    }), s5;
  }
  async queryFeaturesJSON(e5, t7) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e5);
    return await o3.executeQuery(r2.toJSON(), t7?.signal);
  }
  async queryFeatureCount(e5, t7) {
    const { resolvedQuery: r2, queryEngine: o3 } = await this._setupQueryObjects(e5);
    return o3.executeQueryForCount(r2.toJSON(), t7?.signal);
  }
  async queryExtent(e5 = {}, t7) {
    const r2 = { ...e5, returnGeometry: true }, { resolvedQuery: o3, queryEngine: s5 } = await this._setupQueryObjects(r2), i6 = await s5.executeQueryForExtent(o3.toJSON(), t7?.signal);
    let a2;
    return a2 = null != i6.extent?.xmin && null != i6.extent?.xmax && null != i6.extent?.ymin && null != i6.extent?.ymax ? new M$4(i6.extent) : new M$4(), { count: i6.count, extent: a2 };
  }
  async queryObjectIds(e5, t7) {
    const r2 = b$3.from(e5);
    let o3;
    if ("link-chart" === this.parentCompositeLayer.type && this._cachedQueryEngine)
      o3 = this._cachedQueryEngine;
    else {
      const e6 = await this.parentCompositeLayer.dataManager.getData(r2, this, t7);
      o3 = this.loadQueryEngine(e6);
    }
    return o3.executeQueryForIds(r2.toJSON(), t7?.signal);
  }
  loadQueryEngine(e5) {
    const t7 = new m$4({ geometryType: o$4.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ }), r2 = new W$1({ fieldsIndex: this.fieldsIndex.toJSON(), geometryType: o$4.toJSON(this.geometryType), hasM: this.hasM, hasZ: this.hasZ, objectIdField: this.objectIdField, spatialReference: this.spatialReference.toJSON(), timeInfo: null, featureStore: t7 });
    return r2.featureStore.addMany(e5), r2;
  }
  async refreshCachedQueryEngine() {
    const e5 = await this.parentCompositeLayer.dataManager.getData(new b$3({ where: "1=1", outFields: [b$1] }), this);
    this._cachedQueryEngine = this.loadQueryEngine(e5);
  }
  async _setupQueryObjects(e5, t7) {
    const r2 = b$3.from(e5), o3 = r2.geometry;
    let s5;
    if (o3 && !o3.spatialReference?.isWGS84 && (await F$1(o3.spatialReference, N), r2.geometry = b$4(o3 instanceof j$4 || o3 instanceof m$3 ? o3 : o3.extent, N)), "link-chart" === this.parentCompositeLayer.type && this._cachedQueryEngine)
      s5 = this._cachedQueryEngine;
    else {
      const e6 = await this.parentCompositeLayer.dataManager.getData(r2, this, t7);
      s5 = this.loadQueryEngine(e6);
    }
    return { resolvedQuery: r2, queryEngine: s5 };
  }
};
e$7([y$3()], M.prototype, "capabilities", void 0), e$7([y$3({ readOnly: true })], M.prototype, "defaultPopupTemplate", null), e$7([y$3()], M.prototype, "definitionExpression", void 0), e$7([y$3()], M.prototype, "displayField", void 0), e$7([y$3()], M.prototype, "elevationInfo", void 0), e$7([y$3()], M.prototype, "geometryType", void 0), e$7([y$3()], M.prototype, "geometryFieldName", void 0), e$7([y$3()], M.prototype, "graphType", void 0), e$7([y$3()], M.prototype, "hasM", void 0), e$7([y$3()], M.prototype, "hasZ", void 0), e$7([y$3()], M.prototype, "labelsVisible", void 0), e$7([y$3()], M.prototype, "labelingInfo", void 0), e$7([y$3()], M.prototype, "objectIdField", void 0), e$7([y$3()], M.prototype, "objectType", void 0), e$7([y$3()], M.prototype, "parentCompositeLayer", void 0), e$7([y$3({ type: k$2, json: { name: "popupInfo", write: true } })], M.prototype, "popupTemplate", void 0), e$7([y$3({ types: m$5, json: { write: { target: "layerDefinition.drawingInfo.renderer" } } })], M.prototype, "renderer", null), e$7([y$3()], M.prototype, "source", void 0), e$7([y$3({ json: { read: false } })], M.prototype, "type", void 0), M = e$7([c$9("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")], M);
const C = M;
let e4, r = null;
function n() {
  return e4 || (e4 = import("./chunk-FKQ62MtM.js").then((t7) => t7.l).then(({ default: e5 }) => e5({ locateFile: (e6) => a$5(`esri/libs/linkchartlayout/${e6}`) })).then((t7) => {
    s4(t7);
  }), e4);
}
function s4(t7) {
  r = t7;
}
var o2;
function u(t7, e5, a2, n2, s5, o3) {
  const u2 = a2.length, y2 = s5.length, l3 = Float64Array.BYTES_PER_ELEMENT, i6 = Uint32Array.BYTES_PER_ELEMENT, c2 = Uint8Array.BYTES_PER_ELEMENT, E3 = 16, p6 = E3 - 1 + u2 * (c2 + 2 * l3) + y2 * (2 * i6), f2 = r._malloc(p6);
  try {
    const c3 = f2 + E3 - f2 % E3, p7 = c3 + u2 * l3, b2 = p7 + u2 * l3, A2 = b2 + y2 * i6, P2 = A2 + y2 * i6, _2 = () => [r.HEAPF64.subarray(c3 >> 3, (c3 >> 3) + u2), r.HEAPF64.subarray(p7 >> 3, (p7 >> 3) + u2), r.HEAPU32.subarray(b2 >> 2, (b2 >> 2) + y2), r.HEAPU32.subarray(A2 >> 2, (A2 >> 2) + y2), r.HEAPU8.subarray(P2, P2 + u2)], [C2, H, d2, m2, F2] = _2();
    C2.set(a2), H.set(n2), d2.set(s5), m2.set(o3), F2.set(e5);
    const h = t7(u2, P2, c3, p7, y2, b2, A2), [B, L2, R2, T2, g2] = _2();
    return a2.set(B), n2.set(L2), s5.set(R2), o3.set(T2), e5.set(g2), h;
  } finally {
    r._free(f2);
  }
}
!function(t7) {
  t7[t7.None = 0] = "None", t7[t7.IsMovable = 1] = "IsMovable", t7[t7.IsGeographic = 2] = "IsGeographic", t7[t7.IsRoot = 4] = "IsRoot";
}(o2 || (o2 = {}));
const y = 2, l2 = 1, i5 = -1;
var c, E2, p5, f, b, A, P$1, _;
!function(t7) {
  function e5() {
    return r.getMinIdealEdgeLength();
  }
  function a2(t8, e6, a3, n2, s5, o3 = y, c2 = l2, E3 = i5) {
    return u((t9, e7, a4, n3, s6, u2, y2) => r.applyForceDirectedLayout(t9, e7, a4, n3, s6, u2, y2, o3, c2, E3), t8, e6, a3, n2, s5);
  }
  t7.getMinIdealEdgeLength = e5, t7.apply = a2;
}(c || (c = {})), function(t7) {
  function e5(t8, e6, a2, n2, s5, o3 = y, c2 = l2, E3 = i5) {
    return u((t9, e7, a3, n3, s6, u2, y2) => r.applyCommunityLayout(t9, e7, a3, n3, s6, u2, y2, o3, c2, E3), t8, e6, a2, n2, s5);
  }
  t7.apply = e5;
}(E2 || (E2 = {})), function(t7) {
  function e5(t8, e6, a2, n2, s5) {
    return u(r.applySimpleLayout, t8, e6, a2, n2, s5);
  }
  t7.apply = e5;
}(p5 || (p5 = {})), function(t7) {
  function e5(t8, e6, a2, n2, s5) {
    return u(r.applyHierarchicalLayout, t8, e6, a2, n2, s5);
  }
  t7.apply = e5;
}(f || (f = {})), function(t7) {
  function e5(t8, e6, a2, n2, s5) {
    return u(r.applyRadialTreeLayout, t8, e6, a2, n2, s5);
  }
  t7.apply = e5;
}(b || (b = {})), function(t7) {
  function e5(t8, e6, a2, n2, s5) {
    return u(r.applySmartTreeLayout, t8, e6, a2, n2, s5);
  }
  t7.apply = e5;
}(A || (A = {})), function(t7) {
  t7[t7.Undirected = 0] = "Undirected", t7[t7.Directed = 1] = "Directed", t7[t7.Reversed = 2] = "Reversed";
}(P$1 || (P$1 = {})), function(t7) {
  t7[t7.ByCC_Raw = 0] = "ByCC_Raw", t7[t7.ByCC_NormalizeGlobally = 1] = "ByCC_NormalizeGlobally", t7[t7.ByCC_NormalizeByCC = 2] = "ByCC_NormalizeByCC";
}(_ || (_ = {}));
const S = (e5, t7, a2) => (e5.has(t7) || e5.set(t7, a2()), e5.get(t7));
let j = class extends a$6(t$d(b$5)) {
  constructor(e5) {
    if (super(e5), this.dataPreloadedInLocalCache = false, this.defaultLinkChartConfig = null, this._currentLinkChartConfig = { layoutMode: "RADIAL_TREE", xScaleFactor: 1, yScaleFactor: 1 }, this._graphTypeLookup = /* @__PURE__ */ new Map(), this.knowledgeGraph = null, this.layers = new V(), this.linkChartDiagramLookup = /* @__PURE__ */ new Map(), this.linkChartExtent = new M$4({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 }), this.linkChartGeohashLookup = /* @__PURE__ */ new Map(), this.memberEntityTypes = null, this.memberRelationshipTypes = null, this.sublayerIdsCache = /* @__PURE__ */ new Map(), this.tables = new V(), this.type = "link-chart", this._originalInclusionList = e5.inclusionModeDefinition, e5.dataPreloadedInLocalCache && !e5.inclusionModeDefinition)
      throw new s$b("knowledge-graph:linkchart-layer-constructor", "If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
  }
  normalizeCtorArgs(e5) {
    return { url: e5.url, title: e5.title, dataPreloadedInLocalCache: e5.dataPreloadedInLocalCache, defaultLinkChartConfig: e5.defaultLinkChartConfig };
  }
  _initializeLayerProperties(e5) {
    if (!this.title && this.url) {
      const e6 = this.url.split("/");
      this.title = e6[e6.length - 2];
    }
    const t7 = /* @__PURE__ */ new Set();
    let o3 = [], n2 = [];
    if (e5.inclusionModeDefinition && (!e5.inclusionModeDefinition.namedTypeDefinitions || e5.inclusionModeDefinition.namedTypeDefinitions.size < 1))
      throw new s$b("knowledge-graph:composite-layer-constructor", "If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");
    e5.knowledgeGraph.dataModel.entityTypes?.forEach((e6) => {
      e6.name && this._graphTypeLookup.set(e6.name, e6);
    }), e5.knowledgeGraph.dataModel.relationshipTypes?.forEach((e6) => {
      e6.name && this._graphTypeLookup.set(e6.name, e6);
    }), e5.inclusionModeDefinition?.generateAllSublayers ? (o3 = e5.knowledgeGraph.dataModel.entityTypes ?? [], n2 = e5.knowledgeGraph.dataModel.relationshipTypes ?? []) : e5.inclusionModeDefinition?.namedTypeDefinitions && e5.inclusionModeDefinition?.namedTypeDefinitions.size > 0 ? e5.inclusionModeDefinition?.namedTypeDefinitions.forEach((a2, s6) => {
      if (!this._graphTypeLookup.get(s6))
        return s$c.getLogger(this).warn(`A named type, ${s6}, was in the inclusion list that wasn't in the data model and will be removed`), void e5.inclusionModeDefinition?.namedTypeDefinitions.delete(s6);
      this._graphTypeLookup.get(s6) instanceof p$b || "strictOrigin" in this._graphTypeLookup.get(s6) ? t7.has(s6) || (t7.add(s6), n2.push(this._graphTypeLookup.get(s6))) : this._graphTypeLookup.get(s6) instanceof t$8 || "properties" in this._graphTypeLookup.get(s6) ? t7.has(s6) || (t7.add(s6), o3.push(this._graphTypeLookup.get(s6))) : (s$c.getLogger(this).warn(`A named type, ${s6}, was in the inclusion list that wasn't properly modeled and will be removed`), e5.inclusionModeDefinition?.namedTypeDefinitions.delete(s6));
    }) : (o3 = e5.knowledgeGraph.dataModel.entityTypes ?? [], n2 = e5.knowledgeGraph.dataModel.relationshipTypes ?? []);
    const s5 = new E$1({ knowledgeGraph: e5.knowledgeGraph, inclusionModeDefinition: e5.inclusionModeDefinition });
    this.knowledgeGraph = e5.knowledgeGraph, this.memberEntityTypes = o3, this.memberRelationshipTypes = n2, this.dataManager = s5;
  }
  load(e5) {
    return this.addResolvingPromise(new Promise((t7) => {
      T$1(this.url).then((a2) => {
        if (this._initializeLayerProperties({ knowledgeGraph: a2, inclusionModeDefinition: this._originalInclusionList }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size || (this.dataManager.inclusionModeDefinition = { generateAllSublayers: false, namedTypeDefinitions: /* @__PURE__ */ new Map() }, this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((e6) => {
          e6.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e6.name, { useAllData: true });
        }), this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((e6) => {
          e6.name && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e6.name, { useAllData: true });
        })), this.dataPreloadedInLocalCache)
          this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = false), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e6) => {
            e6.useAllData = false, e6.members?.forEach((e7) => {
              let t8;
              t8 = e7.linkChartLocation instanceof t$f ? e7.linkChartLocation : e7.linkChartLocation ? rt(e7.linkChartLocation) : null, this.linkChartDiagramLookup.set(e7.id, t8), t8 && 2 === t8.coords.length && 0 === t8.lengths.length ? this.linkChartGeohashLookup.set(e7.id, p$e(t8.coords[1], t8.coords[0], I)) : this.linkChartGeohashLookup.set(e7.id, "");
            }), this.addResolvingPromise(this._initializeDiagram().then(async () => {
              this.layers.forEach(async (e7) => {
                await e7.refreshCachedQueryEngine();
              }), this.tables.forEach(async (e7) => {
                await e7.refreshCachedQueryEngine();
              });
            }));
          });
        else {
          const t8 = "GEOGRAPHIC" === this.defaultLinkChartConfig?.layoutMode;
          this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0, false, t8, true).then(async () => {
            s$e(e5);
            const t9 = [], a3 = [];
            this.loadLayerAssumingLocalCache(), this.dataManager.inclusionModeDefinition && (this.dataManager.inclusionModeDefinition.generateAllSublayers = false, this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach((e6) => {
              e6.useAllData = false;
            })), await this._initializeDiagram(), this.layers.forEach((e6) => {
              a3.push(e6.refreshCachedQueryEngine()), t9.push(new Promise((t10) => {
                e6.on("layerview-create", () => {
                  t10(null);
                });
              }));
            }), this.tables.forEach((e6) => {
              a3.push(e6.refreshCachedQueryEngine());
            }), await Promise.all(a3);
          }));
        }
        t7(null);
      });
    })), Promise.resolve(this);
  }
  async addRecords(e5, t7) {
    let a$12 = [];
    t7?.cascadeAddRelationshipEndNodes && this.dataManager.knowledgeGraph.dataModel && (a$12 = await a(e5, this.dataManager.knowledgeGraph));
    const i6 = e5.concat(a$12).filter((e6) => !this.sublayerIdsCache.get(e6.typeName)?.has(e6.id));
    await this._handleNewRecords(i6);
  }
  async removeRecords(e5, { cascadeRemoveRelationships: t7 = true, recalculateLayout: a2 = false } = { cascadeRemoveRelationships: true, recalculateLayout: false }) {
    let i6 = [];
    for (const n2 of e5)
      false === this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n2.typeName)?.useAllData && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(n2.typeName)?.members?.has(n2.id) && i6.push(n2);
    if (t7) {
      const e6 = /* @__PURE__ */ new Set(), t8 = [];
      for (const a3 of i6)
        if (this.dataManager.nodeConnectionsLookup.has(a3.id))
          for (const t9 of this.dataManager.nodeConnectionsLookup.get(a3.id))
            e6.add(t9);
      for (const a3 of e6)
        this.dataManager.memberIdTypeLookup.has(a3) && t8.push({ id: a3, typeName: this.dataManager.memberIdTypeLookup.get(a3) });
      i6 = i6.concat(t8);
    }
    this.dataManager.removeFromLayer(i6);
    for (const n2 of i6)
      this.sublayerIdsCache.get(n2.typeName)?.delete(n2.id), this.linkChartDiagramLookup.delete(n2.id);
    a2 && await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode, { xScaleFactor: this._currentLinkChartConfig.xScaleFactor, yScaleFactor: this._currentLinkChartConfig.xScaleFactor });
    const o3 = [];
    return this.layers.forEach((e6) => {
      o3.push(e6.refreshCachedQueryEngine());
    }), await Promise.all(o3), this._refreshNamedTypes(), i6;
  }
  async expand(e5) {
    const t7 = await this.dataManager.getConnectedRecordIds(e5), a2 = t7.filter((e6) => !this.sublayerIdsCache.get(e6.typeName)?.has(e6.id));
    return await this._handleNewRecords(t7), { records: a2 };
  }
  loadLayerAssumingLocalCache() {
    this.memberRelationshipTypes.forEach((e5) => {
      const t7 = new C({ objectType: e5, parentCompositeLayer: this, graphType: "relationship", title: e5.name });
      t7.geometryType ? this.layers.push(t7) : this.tables.push(t7), this.dataManager.sublayerCaches.has(e5.name) || this.dataManager.sublayerCaches.set(e5.name, /* @__PURE__ */ new Map());
    }), this.memberEntityTypes.forEach((e5) => {
      const t7 = new C({ objectType: e5, parentCompositeLayer: this, graphType: "entity", title: e5.name });
      t7.geometryType ? this.layers.push(t7) : this.tables.push(t7), this.dataManager.sublayerCaches.has(e5.name) || this.dataManager.sublayerCaches.set(e5.name, /* @__PURE__ */ new Map());
    }), this.dataManager.inclusionModeDefinition?.namedTypeDefinitions && this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e5, t7) => {
      const a2 = S(this.sublayerIdsCache, t7, () => /* @__PURE__ */ new Set());
      e5.members?.forEach((e6) => {
        if (a2.add(e6.id), e6.linkChartLocation)
          if (e6.linkChartLocation instanceof t$f)
            this.linkChartDiagramLookup.set(e6.id, e6.linkChartLocation), 2 === e6.linkChartLocation.coords.length && 0 === e6.linkChartLocation.lengths.length ? this.linkChartGeohashLookup.set(e6.id, p$e(e6.linkChartLocation.coords[1], e6.linkChartLocation.coords[0], I)) : this.linkChartGeohashLookup.set(e6.id, "");
          else {
            const t8 = rt(e6.linkChartLocation);
            this.linkChartDiagramLookup.set(e6.id, e6.linkChartLocation ? t8 : null), "x" in e6.linkChartLocation && "y" in e6.linkChartLocation ? this.linkChartGeohashLookup.set(e6.id, p$e(e6.linkChartLocation.x, e6.linkChartLocation.y, I)) : this.linkChartGeohashLookup.set(e6.id, "");
          }
      });
    });
  }
  async calculateLinkChartLayout(e5 = "RADIAL_TREE", t7) {
    const o$12 = [], n$12 = [];
    this.dataManager.sublayerCaches.forEach((e6, t8) => {
      this.dataManager.entityTypeNames.has(t8) ? e6.forEach((e7) => {
        o$12.push({ typeName: t8, feature: e7 });
      }) : this.dataManager.relationshipTypeNames.has(t8) && e6.forEach((e7) => {
        n$12.push({ typeName: t8, feature: e7 });
      });
    }), this.linkChartDiagramLookup = /* @__PURE__ */ new Map();
    const s5 = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), c$12 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map(), g2 = new Uint8Array(o$12.length), k2 = new Float64Array(o$12.length), C2 = new Float64Array(o$12.length), L2 = new Uint32Array(n$12.length), N2 = new Uint32Array(n$12.length), I$12 = [], R2 = "FORCE_DIRECTED", S2 = t7?.xScaleFactor ?? 1, j2 = t7?.yScaleFactor ?? 1, P2 = new M$4({ xmin: -1e-7, ymin: -1e-7, xmax: 1e-7, ymax: 1e-7 });
    let F2, z2 = "FORCE_DIRECTED", O2 = 0, U = 0;
    switch (z2 = "GEOGRAPHIC" === e5 ? R2 : e5, z2) {
      case "FORCE_DIRECTED":
        F2 = c.apply;
        break;
      case "COMMUNITY":
        F2 = E2.apply;
        break;
      case "HIERARCHICAL":
        F2 = f.apply;
        break;
      case "RADIAL_TREE":
        F2 = b.apply;
        break;
      case "SMART_TREE":
        F2 = A.apply;
        break;
      default:
        F2 = p5.apply;
    }
    o$12.forEach(({ typeName: a2, feature: i6 }) => {
      if (t7?.lockedNodeLocations?.has(i6.attributes[b$1])) {
        "GEOGRAPHIC" === e5 && this.dataManager.geographicLookup.has(a2) ? g2[O2] = o2.IsGeographic : g2[O2] = o2.None;
        const o$13 = t7.lockedNodeLocations.get(i6.attributes[b$1]);
        k2[O2] = o$13.x, C2[O2] = o$13.y;
      } else if ("GEOGRAPHIC" === e5 && this.dataManager.geographicLookup.has(a2)) {
        g2[O2] = o2.IsGeographic;
        let e6 = null;
        const t8 = i6.attributes[this.dataManager.geographicLookup.get(a2).name], o$13 = this.dataManager.geographicLookup.get(a2)?.geometryType;
        switch (o$13) {
          case "esriGeometryPoint":
            k2[O2] = t8?.x, C2[O2] = t8?.y;
            break;
          case "esriGeometryPolygon":
            e6 = t8?.centroid, null != e6?.x && null != e6?.y ? (k2[O2] = e6.x, C2[O2] = e6.y) : g2[O2] = o2.IsMovable;
            break;
          case "esriGeometryPolyline":
          case "esriGeometryMultipoint":
            e6 = t8?.extent?.center, null != e6?.x && null != e6?.y ? (k2[O2] = e6.x, C2[O2] = e6.y) : g2[O2] = o2.IsMovable;
            break;
          default:
            g2[O2] = o2.IsMovable;
        }
        (null == k2[O2] || null == C2[O2] || Number.isNaN(k2[O2]) || Number.isNaN(C2[O2])) && (g2[O2] = o2.IsMovable, k2[O2] = 0, C2[O2] = 0);
      } else
        g2[O2] = o2.IsMovable, k2[O2] = 0, C2[O2] = 0;
      d2.set(i6.attributes[b$1], O2), I$12[O2] = { feature: i6, typeName: a2 }, O2++;
    });
    let Q2 = false;
    n$12.forEach((e6) => {
      const t8 = d2.get(e6.feature.attributes[T]), a2 = d2.get(e6.feature.attributes[D]);
      void 0 !== t8 && void 0 !== a2 ? (L2[U] = t8, N2[U] = a2, U++) : (Q2 = true, this.linkChartDiagramLookup.set(e6.feature.attributes[T], null), this.linkChartGeohashLookup.set(e6.feature.attributes[T], null));
    }), Q2 && s$c.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null"), await n();
    if (!F2(g2, k2, C2, L2, N2))
      throw new s$b("knowledge-graph:layout-failed", "Attempting to arrange the records in the specified layout failed");
    for (let a2 = 0; a2 < I$12.length; a2++) {
      if (g2[a2] === o2.IsMovable && (k2[a2] = k2[a2] * S2, C2[a2] = C2[a2] * j2), C2[a2] > 84.9999 && (C2[a2] = 84.9999), C2[a2] < -84.9999 && (C2[a2] = -84.9999), k2[a2] > 179.9999 && (k2[a2] = 179.9999), k2[a2] < -179.9999 && (k2[a2] = -179.9999), I$12[a2].feature.attributes[M$1] = new x$2(k2[a2], C2[a2]), s5.has(I$12[a2].typeName)) {
        const e7 = s5.get(I$12[a2].typeName);
        e7?.set(I$12[a2].feature.attributes[b$1], I$12[a2].feature);
      } else {
        const e7 = /* @__PURE__ */ new Map();
        e7.set(I$12[a2].feature.attributes[b$1], I$12[a2].feature), s5.set(I$12[a2].typeName, e7);
      }
      c$12.set(I$12[a2].feature.attributes[b$1], I$12[a2].feature);
      const e6 = rt(I$12[a2].feature.attributes[M$1]);
      this.linkChartDiagramLookup.set(I$12[a2].feature.attributes[b$1], I$12[a2].feature.attributes[M$1] ? e6 : null), this.linkChartGeohashLookup.set(I$12[a2].feature.attributes[b$1], p$e(I$12[a2].feature.attributes[M$1].y, I$12[a2].feature.attributes[M$1].x, I)), I$12[a2].feature.attributes[M$1].x < P2.xmin && (P2.xmin = I$12[a2].feature.attributes[M$1].x), I$12[a2].feature.attributes[M$1].x > P2.xmax && (P2.xmax = I$12[a2].feature.attributes[M$1].x), I$12[a2].feature.attributes[M$1].y < P2.ymin && (P2.ymin = I$12[a2].feature.attributes[M$1].y), I$12[a2].feature.attributes[M$1].y > P2.ymax && (P2.ymax = I$12[a2].feature.attributes[M$1].y);
    }
    return this.linkChartExtent.xmin = P2.xmin, this.linkChartExtent.xmax = P2.xmax, this.linkChartExtent.ymin = P2.ymin, this.linkChartExtent.ymax = P2.ymax, n$12.forEach((e6) => {
      const t8 = I$12[d2.get(e6.feature.attributes[T])]?.feature.attributes[M$1], a2 = I$12[d2.get(e6.feature.attributes[D])]?.feature.attributes[M$1];
      if (!t8 || !a2)
        return;
      const i6 = new m$3({ paths: [[t8.x, t8.y], [a2.x, a2.y]] });
      if (e6.feature.attributes[M$1] = i6, h.has(e6.typeName)) {
        const t9 = h.get(e6.typeName);
        t9?.set(e6.feature.attributes[b$1], e6.feature);
      } else {
        const t9 = /* @__PURE__ */ new Map();
        t9.set(e6.feature.attributes[b$1], e6.feature), h.set(e6.typeName, t9);
      }
      c$12.set(e6.feature.attributes[b$1], e6.feature);
      const o3 = rt(e6.feature.attributes[M$1]);
      this.linkChartDiagramLookup.set(e6.feature.attributes[b$1], e6.feature.attributes[M$1] ? o3 : null), this.linkChartGeohashLookup.set(e6.feature.attributes[b$1], "");
    }), this._currentLinkChartConfig = { layoutMode: e5, xScaleFactor: S2, yScaleFactor: j2 }, { nodes: s5, links: h, idMap: c$12 };
  }
  async applyNewLinkChartLayout(e5 = "RADIAL_TREE", t7) {
    const a2 = [];
    await this.calculateLinkChartLayout(e5, t7), this.layers.forEach((e6) => {
      a2.push(e6.refreshCachedQueryEngine());
    }), await Promise.all(a2), this._refreshNamedTypes();
  }
  getCurrentNodeLocations() {
    const e5 = /* @__PURE__ */ new Map();
    return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t7) => {
      t7?.members?.forEach((t8) => {
        const a2 = t8.linkChartLocation;
        let i6;
        const o3 = t8.id;
        a2 && (i6 = "x" in a2 ? { x: a2.x, y: a2.y } : { x: a2.coords[0], y: a2.coords[1] }, e5.set(o3, new x$2({ x: i6.x, y: i6.y })));
      });
    }), e5;
  }
  async synchronizeInclusionListWithCache() {
    return new Promise((e5) => {
      this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e6, t7) => {
        if (e6.useAllData = false, e6.members && e6.members.size > 0) {
          if (!this.dataManager.sublayerCaches.get(t7))
            return;
          const a2 = new Set(Array.from(this.dataManager.sublayerCaches.get(t7).keys()));
          Array.from(e6.members.keys()).filter((e7) => !a2.has(e7)).forEach((t8) => {
            e6.members?.delete(t8);
          });
        }
      }), e5();
    });
  }
  async refreshLinkChartCache(e5) {
    await this.dataManager.refreshCacheContent(e5);
    const t7 = [];
    this.layers.forEach((e6) => {
      t7.push(e6.refreshCachedQueryEngine());
    }), await Promise.all(t7), this._refreshNamedTypes();
  }
  async _handleNewRecords(e5) {
    const t7 = [];
    this.dataManager.addToLayer(e5);
    for (const a2 of e5)
      this.sublayerIdsCache.has(a2.typeName) || (this.sublayerIdsCache.set(a2.typeName, /* @__PURE__ */ new Set()), t7.push(a2.typeName)), this.sublayerIdsCache.get(a2.typeName).add(a2.id);
    for (const a2 of t7)
      if (this._graphTypeLookup.has(a2)) {
        const e6 = this._graphTypeLookup.get(a2), t8 = "endPoints" in e6 ? "relationship" : "entity", i6 = new C({ objectType: e6, parentCompositeLayer: this, graphType: t8, title: a2 });
        "entity" === t8 ? this.dataManager.entityTypeNames.add(a2) : this.dataManager.relationshipTypeNames.add(a2), i6.geometryType ? this.layers.push(i6) : this.tables.push(i6), this.dataManager.sublayerCaches.set(a2, /* @__PURE__ */ new Map());
      }
    await this.dataManager.refreshCacheContent(e5.map((e6) => e6.id)), await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode, { xScaleFactor: this._currentLinkChartConfig.xScaleFactor, yScaleFactor: this._currentLinkChartConfig.xScaleFactor });
  }
  async _initializeDiagram() {
    this.defaultLinkChartConfig ? this.defaultLinkChartConfig.doNotRecalculateLayout ? (this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e5) => {
      e5?.members?.forEach((e6) => {
        const t7 = e6.linkChartLocation;
        let a2;
        const i6 = e6.id;
        if (!t7)
          return;
        a2 = "x" in t7 ? { x: t7.x, y: t7.y } : { x: t7.coords[0], y: t7.coords[1] };
        const o3 = rt(a2);
        this.linkChartDiagramLookup.set(i6, o3), this.linkChartGeohashLookup.set(i6, p$e(a2.x, a2.y, I)), this.linkChartExtent.xmin > a2.x && (this.linkChartExtent.xmin = a2.x), this.linkChartExtent.xmax < a2.x && (this.linkChartExtent.xmax = a2.x), this.linkChartExtent.ymin > a2.y && (this.linkChartExtent.ymin = a2.y), this.linkChartExtent.ymax < a2.y && (this.linkChartExtent.ymax = a2.y);
      });
    }), this.memberRelationshipTypes.forEach((e5) => {
      e5.name && this.dataManager.sublayerCaches.get(e5.name)?.forEach((e6) => {
        const t7 = this.linkChartDiagramLookup.get(e6.attributes[T]), a2 = this.linkChartDiagramLookup.get(e6.attributes[D]);
        if (t7 && a2) {
          const i6 = rt(new m$3({ paths: [[t7.coords[0], t7.coords[1]], [a2.coords[0], a2.coords[1]]] }));
          this.linkChartDiagramLookup.set(e6.attributes[b$1], i6);
        } else
          this.linkChartDiagramLookup.set(e6.attributes[b$1], null);
        this.linkChartGeohashLookup.set(e6.attributes[b$1], "");
      });
    })) : await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode, { xScaleFactor: this.defaultLinkChartConfig.xScaleFactor, yScaleFactor: this.defaultLinkChartConfig.yScaleFactor, lockedNodeLocations: this.getCurrentNodeLocations() }) : await this.calculateLinkChartLayout("RADIAL_TREE", { lockedNodeLocations: this.getCurrentNodeLocations() });
  }
  _refreshNamedTypes() {
    for (const e5 of this.layers)
      e5.emit("refresh", { dataChanged: true });
    for (const e5 of this.tables)
      e5.emit("refresh", { dataChanged: true });
  }
};
e$7([y$3()], j.prototype, "dataPreloadedInLocalCache", void 0), e$7([y$3()], j.prototype, "defaultLinkChartConfig", void 0), e$7([y$3()], j.prototype, "dataManager", void 0), e$7([y$3()], j.prototype, "knowledgeGraph", void 0), e$7([y$3()], j.prototype, "layers", void 0), e$7([y$3()], j.prototype, "linkChartDiagramLookup", void 0), e$7([y$3()], j.prototype, "linkChartExtent", void 0), e$7([y$3()], j.prototype, "linkChartGeohashLookup", void 0), e$7([y$3()], j.prototype, "memberEntityTypes", void 0), e$7([y$3()], j.prototype, "memberRelationshipTypes", void 0), e$7([y$3()], j.prototype, "sublayerIdsCache", void 0), e$7([y$3()], j.prototype, "tables", void 0), e$7([y$3({ json: { read: false } })], j.prototype, "type", void 0), j = e$7([c$9("esri.layers.LinkChartLayer")], j);
const P = j;
export {
  P as default
};
