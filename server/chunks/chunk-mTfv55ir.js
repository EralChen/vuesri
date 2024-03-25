import { aV as e$4, aX as y$2, a_ as c$6, bZ as S$1, db as f$3, aB as f$4, b0 as has, hG as n$2, aO as s$6, i6 as n$3, j6 as u$1, cY as x$2, gb as m$3, bY as j$3, aT as s$7, aQ as U$1, df as t$8 } from "./chunk-ejFG4zJ0.js";
import { m as m$4, p as p$4, t as t$7, c as c$7 } from "./chunk-yIlBOqc3.js";
let t$6 = class t extends S$1 {
  constructor(r2) {
    super(r2), this.resultRows = [];
  }
};
e$4([y$2()], t$6.prototype, "resultRows", void 0), t$6 = e$4([c$6("esri.rest.knowledgeGraph.GraphQueryResult")], t$6);
const c$5 = t$6;
let t$5 = class t2 extends S$1 {
  constructor(r2) {
    super(r2), this.resultRowsStream = new ReadableStream();
  }
};
e$4([y$2()], t$5.prototype, "resultRowsStream", void 0), t$5 = e$4([c$6("esri.rest.knowledgeGraph.GraphQueryResult")], t$5);
const c$4 = t$5;
let s$5 = class s extends f$3 {
  constructor(o2) {
    super(o2), this.name = null, this.unique = null, this.ascending = null, this.description = null, this.fieldNames = null;
  }
};
e$4([y$2({ type: String, json: { write: true } })], s$5.prototype, "name", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], s$5.prototype, "unique", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], s$5.prototype, "ascending", void 0), e$4([y$2({ type: String, json: { write: true } })], s$5.prototype, "description", void 0), e$4([y$2({ type: [String], json: { write: true } })], s$5.prototype, "fieldNames", void 0), s$5 = e$4([c$6("esri.rest.knowledgeGraph.FieldIndex")], s$5);
const i$5 = s$5;
let i$4 = class i extends f$3 {
  constructor(t6) {
    super(t6), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = null, this.required = null, this.defaultVisibility = null, this.systemMaintained = null, this.role = null, this.defaultValue = null;
  }
};
e$4([y$2({ type: String, json: { write: true } })], i$4.prototype, "name", void 0), e$4([y$2({ type: String, json: { write: true } })], i$4.prototype, "alias", void 0), e$4([y$2({ type: String, json: { write: true } })], i$4.prototype, "fieldType", void 0), e$4([y$2({ type: String, json: { write: true } })], i$4.prototype, "geometryType", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "hasM", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "hasZ", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "nullable", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "editable", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "required", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "defaultVisibility", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$4.prototype, "systemMaintained", void 0), e$4([y$2()], i$4.prototype, "role", void 0), e$4([y$2({ type: Object, json: { type: String, write: { writer: (t6, e4) => {
  e4.defaultValue = null != t6 ? t6.toString() : null;
} } } })], i$4.prototype, "defaultValue", void 0), i$4 = e$4([c$6("esri.rest.knowledgeGraph.GraphProperty")], i$4);
const l$3 = i$4;
let i$3 = class i2 extends f$3 {
  constructor(o2) {
    super(o2), this.name = null, this.alias = null, this.role = null, this.strict = null, this.properties = null, this.fieldIndexes = null;
  }
};
e$4([y$2({ type: String, json: { write: true } })], i$3.prototype, "name", void 0), e$4([y$2({ type: String, json: { write: true } })], i$3.prototype, "alias", void 0), e$4([y$2({ type: String, json: { write: true } })], i$3.prototype, "role", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$3.prototype, "strict", void 0), e$4([y$2({ type: [l$3], json: { write: true } })], i$3.prototype, "properties", void 0), e$4([y$2({ type: [i$5], json: { write: true } })], i$3.prototype, "fieldIndexes", void 0), i$3 = e$4([c$6("esri.rest.knowledgeGraph.GraphObjectType")], i$3);
const n$1 = i$3;
let e$3 = class e extends n$1 {
  constructor(r2) {
    super(r2);
  }
};
e$3 = e$4([c$6("esri.rest.knowledgeGraph.EntityType")], e$3);
const t$4 = e$3;
let t$3 = class t3 extends n$1 {
  constructor(o2) {
    super(o2), this.endPoints = [];
  }
};
e$4([y$2()], t$3.prototype, "endPoints", void 0), t$3 = e$4([c$6("esri.rest.knowledgeGraph.RelationshipType")], t$3);
const p$3 = t$3;
let n = class extends f$3 {
  constructor(t6) {
    super(t6), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = null, this.entityTypes = null, this.relationshipTypes = null;
  }
};
e$4([y$2({ type: Date, json: { type: Number, write: { writer: (t6, e4) => {
  e4.timestamp = t6?.getTime();
} } } })], n.prototype, "timestamp", void 0), e$4([y$2({ type: f$4, json: { write: true } })], n.prototype, "spatialReference", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], n.prototype, "strict", void 0), e$4([y$2({ type: String, json: { write: true } })], n.prototype, "objectIdField", void 0), e$4([y$2({ type: String, json: { write: true } })], n.prototype, "globalIdField", void 0), e$4([y$2()], n.prototype, "arcgisManaged", void 0), e$4([y$2()], n.prototype, "identifierInfo", void 0), e$4([y$2()], n.prototype, "searchIndexes", void 0), e$4([y$2({ type: [t$4], json: { write: true } })], n.prototype, "entityTypes", void 0), e$4([y$2({ type: [p$3], json: { write: true } })], n.prototype, "relationshipTypes", void 0), n = e$4([c$6("esri.rest.knowledgeGraph.DataModel")], n);
const l$2 = n;
let i$2 = class i3 extends f$3 {
  constructor(t6) {
    super(t6), this.capabilities = [], this.supportsSearch = false, this.supportedQueryFormats = [], this.allowGeometryUpdates = false, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = false, this.dataEditingNotSupported = false, this.schemaEditingNotSupported = false;
  }
};
e$4([y$2({ type: [String], json: { write: true } })], i$2.prototype, "capabilities", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$2.prototype, "supportsSearch", void 0), e$4([y$2({ type: [String], json: { write: true } })], i$2.prototype, "supportedQueryFormats", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$2.prototype, "allowGeometryUpdates", void 0), e$4([y$2({ type: Number, json: { write: true } })], i$2.prototype, "searchMaxRecordCount", void 0), e$4([y$2({ type: Object, json: { write: true } })], i$2.prototype, "serviceCapabilities", void 0), e$4([y$2({ type: Number, json: { write: true } })], i$2.prototype, "maxRecordCount", void 0), e$4([y$2({ type: String, json: { write: true } })], i$2.prototype, "description", void 0), e$4([y$2({ type: String, json: { write: true } })], i$2.prototype, "copyrightText", void 0), e$4([y$2({ type: String, json: { write: true } })], i$2.prototype, "units", void 0), e$4([y$2({ type: Object, json: { write: true } })], i$2.prototype, "spatialReference", void 0), e$4([y$2({ type: Number, json: { write: true } })], i$2.prototype, "currentVersion", void 0), e$4([y$2({ type: Object, json: { write: true } })], i$2.prototype, "dateFieldsTimeReference", void 0), e$4([y$2({ type: String, json: { write: true } })], i$2.prototype, "serviceItemId", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$2.prototype, "supportsDocuments", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$2.prototype, "dataEditingNotSupported", void 0), e$4([y$2({ type: Boolean, json: { write: true } })], i$2.prototype, "schemaEditingNotSupported", void 0), i$2 = e$4([c$6("esri.rest.knowledgeGraph.ServiceDefinition")], i$2);
const s$4 = i$2;
let p$2 = class p extends f$3 {
  constructor(o2) {
    super(o2), this.dataModel = null, this.serviceDefinition = null;
  }
};
e$4([y$2({ type: String, json: { write: true } })], p$2.prototype, "url", void 0), e$4([y$2({ type: l$2, json: { write: true } })], p$2.prototype, "dataModel", void 0), e$4([y$2({ type: s$4, json: { write: true } })], p$2.prototype, "serviceDefinition", void 0), p$2 = e$4([c$6("esri.rest.knowledgeGraph.KnowledgeGraph")], p$2);
const c$3 = p$2;
const t$2 = "esri/rest/knowledgeGraph/wasmInterface/";
let s$3;
async function r$2() {
  const e4 = s$3;
  if (e4)
    return e4;
  const t6 = has("wasm-simd");
  return s$3 = o$1(t6), s$3;
}
async function o$1(s3) {
  if (s3) {
    const { default: s4 } = await import("./chunk--4lpNzQf.js").then((e4) => e4.a);
    return s4({ locateFile: (s5) => n$2(t$2 + s5) });
  }
  const { default: n2 } = await import("./chunk-tsBhrsbw.js").then((e4) => e4.a);
  return n2({ locateFile: (s4) => n$2(t$2 + s4) });
}
function a$2(e4, t6) {
  const n2 = new t6.ArrayValue();
  return n2.deleteLater(), e4.forEach((e5) => {
    n2.add_value(m$2(e5, t6));
  }), n2;
}
function l$1(e4, t6) {
  const n2 = new t6.ObjectValue();
  n2.deleteLater();
  for (const [o2, r2] of Object.entries(e4))
    n2.set_key_value(o2, m$2(r2, t6));
  return n2;
}
function s$2(i5, a2) {
  if (i5 instanceof u$1)
    return f$2(i5, a2);
  if (i5 instanceof x$2)
    return g$2(i5, a2);
  if (i5 instanceof m$3 || i5 instanceof j$3)
    return c$2(i5, a2);
  throw new s$6("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: i5 });
}
function u(e4, t6) {
  t6.input_quantization_parameters = { xy_resolution: e4.xyResolution, x_false_origin: e4.xFalseOrigin, y_false_origin: e4.yFalseOrigin, z_resolution: e4.zResolution, z_false_origin: e4.zFalseOrigin, m_resolution: e4.mResolution, m_false_origin: e4.mFalseOrigin };
}
function y$1(t6, n2, o2) {
  if (!t6.extent)
    throw new s$6("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", t6.extent);
  if (!t6.quantizeMode)
    throw new s$6("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", t6.quantizeMode);
  if (!t6.tolerance)
    throw new s$6("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", t6.quantizeMode);
  n2.output_quantization_parameters = { extent: { xmax: t6.extent.xmax, ymax: t6.extent.ymax, xmin: t6.extent.xmin, ymin: t6.extent.ymin }, quantize_mode: o2.esriQuantizeMode[t6.quantizeMode], tolerance: t6.tolerance };
}
function m$2(e4, t6) {
  if (null == e4)
    return "";
  if ("object" != typeof e4)
    return e4;
  if (e4 instanceof Date)
    return e4;
  if (e4 instanceof n$3)
    return s$2(e4, t6);
  if (Array.isArray(e4)) {
    const n2 = new t6.ArrayValue();
    return n2.deleteLater(), e4.forEach((e5) => {
      n2.add_value(m$2(e5, t6));
    }), n2;
  }
  return l$1(e4, t6);
}
function c$2(e4, t6) {
  const n2 = new t6.GeometryValue();
  n2.deleteLater(), n2.has_z = e4.hasZ, n2.has_m = e4.hasM;
  const i5 = [], a2 = [];
  let l2 = [];
  e4 instanceof m$3 ? (n2.geometry_type = t6.esriGeometryType.esriGeometryPolyline, l2 = e4.paths) : e4 instanceof j$3 && (n2.geometry_type = t6.esriGeometryType.esriGeometryPolygon, l2 = e4.rings);
  let s3 = 0, u2 = 0;
  return l2.forEach((e5) => {
    let t7 = 0;
    e5.forEach((e6) => {
      t7++, e6.forEach((e7) => {
        i5[u2] = e7, u2++;
      });
    }), a2[s3] = t7, s3++;
  }), n2.coords = new Float64Array(i5), n2.lengths = new Uint32Array(a2), n2;
}
function f$2(e4, t6) {
  const n2 = new t6.GeometryValue();
  n2.deleteLater(), n2.geometry_type = n2.geometry_type = t6.esriGeometryType.esriGeometryMultipoint, n2.has_z = e4.hasZ, n2.has_m = e4.hasM;
  const o2 = [], r2 = [];
  r2[0] = e4.points.length;
  let i5 = 0;
  return e4.points.forEach((e5) => {
    e5.forEach((e6) => {
      o2[i5] = e6, i5++;
    });
  }), n2.coords = new Float64Array(o2), n2.lengths = new Uint32Array(r2), n2;
}
function g$2(e4, t6) {
  const n2 = new t6.GeometryValue();
  n2.deleteLater(), n2.geometry_type = t6.esriGeometryType.esriGeometryPoint, n2.has_z = e4.hasZ, n2.has_m = e4.hasM;
  const o2 = [], r2 = [];
  r2[0] = 1, o2[0] = e4.x, o2[1] = e4.y;
  let i5 = 2;
  return e4.hasZ && (o2[i5] = e4.z, i5++), e4.hasM && (o2[i5] = e4.m, i5++), n2.coords = new Float64Array(o2), n2.lengths = new Uint32Array(r2), n2;
}
function r$1(i5, n2) {
  if (!i5.typeName)
    throw new s$6("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (i5 instanceof m$4) {
    const e4 = new n2.EntityValue();
    e4.deleteLater(), e4.type_name = i5.typeName;
    for (const [t6, o2] of Object.entries(i5.properties))
      e4.set_key_value(t6, a$1(o2, n2));
    return i5.id && e4.set_id(i5.id), e4;
  }
  if (i5 instanceof p$4) {
    const e4 = new n2.RelationshipValue();
    e4.deleteLater(), e4.type_name = i5.typeName;
    for (const [t6, o2] of Object.entries(i5.properties))
      e4.set_key_value(t6, a$1(o2, n2));
    return i5.id && e4.set_id(i5.id), i5.originId && i5.destinationId && e4.set_related_entity_ids(i5.originId, i5.destinationId), e4;
  }
  throw new s$6("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function s$1(e4) {
  return { xy_resolution: e4.xyResolution, x_false_origin: e4.xFalseOrigin, y_false_origin: e4.yFalseOrigin, z_resolution: e4.zResolution, z_false_origin: e4.zFalseOrigin, m_resolution: e4.mResolution, m_false_origin: e4.mFalseOrigin };
}
function a$1(e4, t6) {
  return null == e4 ? "" : "object" != typeof e4 || e4 instanceof Date ? e4 : e4 instanceof n$3 ? s$2(e4, t6) : "";
}
let t$1 = class t4 extends S$1 {
  constructor(r2) {
    super(r2), this.name = null, this.supportedCategory = null, this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
e$4([y$2()], t$1.prototype, "name", void 0), e$4([y$2()], t$1.prototype, "supportedCategory", void 0), e$4([y$2()], t$1.prototype, "analyzers", void 0), e$4([y$2()], t$1.prototype, "searchProperties", void 0), t$1 = e$4([c$6("esri.rest.knowledgeGraph.SearchIndex")], t$1);
const p$1 = t$1;
var e$2, r, i$1, t5, o, s2, y;
!function(e4) {
  e4[e4.Regular = 0] = "Regular", e4[e4.Provenance = 1] = "Provenance", e4[e4.Document = 2] = "Document";
}(e$2 || (e$2 = {})), function(e4) {
  e4[e4.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e4[e4.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e4[e4.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e4[e4.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e4[e4.esriFieldTypeString = 4] = "esriFieldTypeString", e4[e4.esriFieldTypeDate = 5] = "esriFieldTypeDate", e4[e4.esriFieldTypeOID = 6] = "esriFieldTypeOID", e4[e4.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e4[e4.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e4[e4.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e4[e4.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e4[e4.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e4[e4.esriFieldTypeXML = 12] = "esriFieldTypeXML", e4[e4.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e4[e4.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e4[e4.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e4[e4.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(r || (r = {})), function(e4) {
  e4[e4.esriGeometryNull = 0] = "esriGeometryNull", e4[e4.esriGeometryPoint = 1] = "esriGeometryPoint", e4[e4.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e4[e4.esriGeometryPolyline = 3] = "esriGeometryPolyline", e4[e4.esriGeometryPolygon = 4] = "esriGeometryPolygon", e4[e4.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e4[e4.esriGeometryAny = 6] = "esriGeometryAny", e4[e4.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(i$1 || (i$1 = {})), function(e4) {
  e4[e4.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e4[e4.esriUUIDESRI = 1] = "esriUUIDESRI", e4[e4.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(t5 || (t5 = {})), function(e4) {
  e4[e4.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e4[e4.esriTypeEntity = 1] = "esriTypeEntity", e4[e4.esriTypeRelationship = 2] = "esriTypeRelationship", e4[e4.esriTypeBoth = 4] = "esriTypeBoth";
}(o || (o = {})), function(e4) {
  e4[e4.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e4[e4.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e4[e4.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e4[e4.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e4[e4.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e4[e4.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e4[e4.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e4[e4.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e4[e4.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e4[e4.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension";
}(s2 || (s2 = {})), function(e4) {
  e4[e4.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e4[e4.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e4[e4.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(y || (y = {}));
function _$1(i5) {
  return i5.deleteLater(), new l$2({ timestamp: i5.timestamp, spatialReference: new f$4(i5.spatial_reference), strict: i5.strict, objectIdField: i5.objectid_property, globalIdField: i5.globalid_property, arcgisManaged: i5.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: y[i5.identifier_info?.identifier_mapping_info?.identifier_info_type?.value], databaseNativeIdentifier: i5.identifier_info?.identifier_mapping_info?.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: i5.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: t5[i5.identifier_info?.identifier_generation_info?.uuid_method_hint?.value] } }, searchIndexes: M$1(i5.search_indexes), entityTypes: j$2(i5.entity_types), relationshipTypes: x$1(i5.relationship_types) });
}
function c$1(e4) {
  return e4.deleteLater(), new t$4(z$1(e4));
}
function g$1(e4) {
  return e4.deleteLater(), new i$5({ name: e4.name, unique: e4.unique, ascending: e4.ascending, description: e4.description, fieldNames: I$1(e4.fields) });
}
function z$1(e4) {
  return { name: e4.name, alias: e4.alias, role: e$2[e4.role.value] ? e$2[e4.role.value] : null, strict: e4.strict, properties: T$2(e4.properties), fieldIndexes: w(e4.field_indexes) };
}
function b$1(e4) {
  return e4.deleteLater(), new l$3({ alias: e4.alias, name: e4.name, fieldType: r[e4.field_type.value] ? r[e4.field_type.value] : null, geometryType: i$1[e4.geometry_type.value] ? i$1[e4.geometry_type.value] : null, hasM: e4.has_m, hasZ: e4.has_z, nullable: e4.nullable, editable: e4.editable, required: e4.required, defaultVisibility: e4.default_visibility, systemMaintained: e4.system_maintained, role: s2[e4.role.value], defaultValue: e4.default_value });
}
function v$1(e4) {
  e4.deleteLater();
  const t6 = z$1(e4), i5 = [];
  for (let n2 = 0; n2 < e4.end_points.size(); n2++) {
    const t7 = e4.end_points.get(n2);
    i5.push({ originEntityType: t7.origin_entity_type, destinationEntityType: t7.dest_entity_type });
  }
  return e4.end_points.delete(), new p$3(Object.assign({ endPoints: i5 }, t6));
}
function j$2(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++)
    t6.push(c$1(e4.get(i5)));
  return e4.delete(), t6;
}
function I$1(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++)
    t6.push(e4.get(i5));
  return e4.delete(), t6;
}
function T$2(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++)
    t6.push(b$1(e4.get(i5)));
  return e4.delete(), t6;
}
function w(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++)
    t6.push(g$1(e4.get(i5)));
  return e4.delete(), t6;
}
function x$1(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++)
    t6.push(v$1(e4.get(i5)));
  return e4.delete(), t6;
}
function M$1(e4) {
  const t6 = [];
  for (let i5 = 0; i5 < e4.size(); i5++) {
    const i6 = new p$1(), n2 = e4.get(0);
    i6.name = n2.name, i6.supportedCategory = o[n2.supported_category.value];
    const r2 = n2.analyzers.size();
    for (let e5 = 0; e5 < r2; e5++)
      i6.analyzers.push({ name: n2.analyzers.get(e5).name });
    n2.analyzers.delete();
    for (let e5 = 0; e5 < n2.search_properties.keys().size(); e5++) {
      const t7 = n2.search_properties.keys().get(e5), r3 = n2.search_properties.get(t7), a2 = [];
      for (let e6 = 0; e6 < r3.property_names.size(); e6++)
        a2.push(r3.property_names.get(e6));
      i6.searchProperties.set(t7, { propertyNames: a2 });
    }
    t6.push(i6);
  }
  return e4.delete(), t6;
}
var E$2;
!function(E2) {
  E2[E2.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", E2[E2.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", E2[E2.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", E2[E2.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", E2[E2.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", E2[E2.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", E2[E2.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", E2[E2.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
}(E$2 || (E$2 = {}));
var T$1, A$1;
!function(T2) {
  T2[T2.OBJECT = 0] = "OBJECT", T2[T2.ENTITY = 1] = "ENTITY", T2[T2.RELATIONSHIP = 2] = "RELATIONSHIP", T2[T2.PATH = 3] = "PATH", T2[T2.ARRAY = 4] = "ARRAY";
}(T$1 || (T$1 = {})), function(T2) {
  T2[T2.view = 0] = "view", T2[T2.edit = 1] = "edit";
}(A$1 || (A$1 = {}));
function l(e4, o2) {
  const r2 = { spatialReference: o2 }, n2 = c(e4, r2), s3 = e4.lengths, l2 = e4.coords, i5 = s3[0];
  r2.points = [];
  let a2 = 0;
  for (let t6 = 0; t6 < i5; t6++) {
    const e5 = [];
    for (let t7 = 0; t7 < n2; t7++)
      e5[t7] = l2[a2], a2++;
    r2.points.push(e5);
  }
  return new u$1(r2);
}
function i4(e4, t6) {
  const r2 = { spatialReference: t6 };
  let n2 = 2;
  c(e4, r2);
  const s3 = e4.coords;
  return r2.x = s3[0], r2.y = s3[1], e4.has_z && (r2.z = s3[n2], n2++), e4.has_m && (r2.m = s3[n2]), new x$2(r2);
}
function a(e4, t6) {
  return new m$3(f$1(e4, t6));
}
function m$1(e4, t6) {
  return new j$3(f$1(e4, t6));
}
function f$1(t6, o2) {
  const r2 = { spatialReference: o2 }, n2 = c(t6, r2), l2 = t6.lengths, i5 = t6.coords;
  let a2 = "";
  if (t6.geometry_type.value === E$2.ESRI_GEOMETRY_POLYGON)
    a2 = "rings";
  else {
    if (t6.geometry_type.value !== E$2.ESRI_GEOMETRY_POLYLINE)
      throw new s$6("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
    a2 = "paths";
  }
  r2[a2] = [];
  let m2 = 0;
  return l2.forEach((e4) => {
    const t7 = [];
    for (let o3 = 0; o3 < e4; o3++) {
      const e5 = [];
      for (let t8 = 0; t8 < n2; t8++)
        e5[t8] = i5[m2], m2++;
      t7.push(e5);
    }
    r2[a2].push(t7);
  }), r2;
}
function c(e4, t6) {
  let o2 = 2;
  return e4.has_z ? (t6.hasZ = e4.has_z, o2++) : t6.hasZ = false, e4.has_m ? (t6.hasM = e4.has_m, o2++) : t6.hasM = false, o2;
}
const _ = () => s$7.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"), d = { decodedWasmObjToQueryResponseObj: (e4, t6, n2) => {
  if (null == e4)
    return null;
  if ("object" != typeof e4)
    return e4;
  if ("getDate" in e4)
    return e4;
  if ("geometry_type" in e4)
    switch (e4.geometry_type.value) {
      case null:
        return null;
      case E$2.ESRI_GEOMETRY_POINT:
        return i4(e4, n2);
      case E$2.ESRI_GEOMETRY_MULTIPOINT:
        return l(e4, n2);
      case E$2.ESRI_GEOMETRY_POLYLINE:
        return a(e4, n2);
      case E$2.ESRI_GEOMETRY_POLYGON:
        return m$1(e4, n2);
      case E$2.ESRI_GEOMETRY_ENVELOPE:
      case E$2.ESRI_GEOMETRY_MULTI_PATCH:
        return _().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
      case E$2.ESRI_GEOMETRY_NULL:
      case E$2.ESRI_GEOMETRY_ANY:
      default:
        return _().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
    }
  else {
    if (!("object_value_type" in e4))
      return _().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e4.object_value_type.value) {
      case T$1.OBJECT:
        return g(e4, t6, n2);
      case T$1.ENTITY:
        return f(e4, t6, n2);
      case T$1.RELATIONSHIP:
        return j$1(e4, t6, n2);
      case T$1.PATH:
        return R$1(e4, t6, n2);
      case T$1.ARRAY:
        return m(e4, t6, n2);
      default:
        return _().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function m(e4, t6, n2) {
  const r2 = [], o2 = e4.count();
  for (let s3 = 0; s3 < o2; s3++) {
    const o3 = e4.get_value_at(s3);
    r2.push(E$1(o3, t6, n2));
  }
  return r2;
}
function E$1(e4, t6, n2) {
  return d.decodedWasmObjToQueryResponseObj(e4, t6, n2);
}
function f(e4, n2, r2) {
  const o2 = e4.type_name, s3 = O(e4, n2, r2), u2 = e4.get_id();
  return new m$4(Object.assign({ typeName: o2, id: u2 }, s3));
}
function O(e4, t6, n2) {
  const r2 = {}, o2 = e4.key_count();
  for (let s3 = 0; s3 < o2; s3++)
    r2[e4.get_key_at(s3)] = E$1(e4.get_value_at(s3), t6, n2);
  return { properties: r2 };
}
function g(e4, t6, n2) {
  return new t$7(O(e4, t6, n2));
}
function R$1(e4, t6, n2) {
  const r2 = e4.entity_count(), s3 = e4.relationship_count(), u2 = [];
  for (let o2 = 0; o2 < r2; o2++)
    u2.push(f(e4.get_entity_at(o2), t6, n2)), o2 < s3 && u2.push(j$1(e4.get_relationship_at(o2), t6, n2));
  return new c$7({ path: u2 });
}
function j$1(e4, t6, n2) {
  const r2 = e4.type_name, o2 = O(e4, t6, n2);
  return new p$4(Object.assign({ typeName: r2, id: e4.get_id(), originId: e4.get_origin_entity_id(), destinationId: e4.get_destination_entity_id() }, o2));
}
let e$1 = class e2 extends S$1 {
  constructor(r2) {
    super(r2), this.hasError = null, this.error = null, this.editResults = [];
  }
};
e$4([y$2()], e$1.prototype, "hasError", void 0), e$4([y$2()], e$1.prototype, "error", void 0), e$4([y$2()], e$1.prototype, "editResults", void 0), e$1 = e$4([c$6("esri.rest.knowledgeGraph.GraphApplyEdits")], e$1);
const p2 = e$1;
function e3(e4) {
  const o2 = new p2();
  o2.hasError = e4.has_error(), o2.hasError && (o2.error = { errorCode: e4.error.error_code, errorMessage: e4.error.error_message });
  const t6 = e4.get_edit_results_count();
  for (let r2 = 0; r2 < t6; r2++) {
    const t7 = e4.get_edit_results_at(r2), s3 = e4.get_edit_results_type_name_at(r2), _2 = [], d2 = [], a2 = [], u2 = t7.get_add_results_count(), l2 = t7.get_update_results_count(), g2 = t7.get_delete_results_count();
    for (let r3 = 0; r3 < u2; r3++) {
      const e5 = t7.get_add_result_at(r3);
      _2.push({ id: e5.id, error: { errorCode: e5.error.error_code, errorMessage: e5.error.error_message } });
    }
    for (let r3 = 0; r3 < l2; r3++) {
      const e5 = t7.get_update_result_at(r3);
      d2.push({ id: e5.id, error: { errorCode: e5.error.error_code, errorMessage: e5.error.error_message } });
    }
    for (let r3 = 0; r3 < g2; r3++) {
      const e5 = t7.get_delete_result_at(r3);
      a2.push({ id: e5.id, error: { errorCode: e5.error.error_code, errorMessage: e5.error.error_message } });
    }
    o2.editResults.push({ typeName: s3, adds: _2, updates: d2, deletes: a2 });
  }
  return o2;
}
const b = { fetchKnowledgeGraph: async (e4) => {
  const t6 = new c$3({ url: e4 }), r2 = [];
  return r2.push(q(t6)), r2.push(Q(t6)), await Promise.all(r2), t6;
}, refreshDataModel: async (e4) => {
  e4.dataModel = await z(e4);
}, refreshServiceDefinition: async (e4) => {
  const r2 = (await U$1(e4.url, { query: { f: "json" } })).data;
  return r2.capabilities = r2?.capabilities?.split(","), r2.supportedQueryFormats = r2?.supportedQueryFormats?.split(","), e4.serviceDefinition = new s$4(r2), e4.serviceDefinition;
}, executeQueryStreaming: async (e4, t6, a2) => {
  const n2 = `${e4.url}/graph/query`;
  await M(e4);
  const i5 = await F(n2, a2);
  i5.data.body = await D(t6, e4);
  const d2 = await A(i5.data.url, i5.data);
  if (e4.dataModel)
    return new c$4({ resultRowsStream: await I(d2, e4.dataModel, t6.outputSpatialReference ?? void 0) });
  throw new s$6("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e4, t6, a2) => {
  if (e4.serviceDefinition?.dataEditingNotSupported)
    throw new s$6("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n2 = `${e4.url}/graph/applyEdits`;
  await M(e4);
  const o2 = await F(n2, a2);
  o2.data.body = await C(t6, e4);
  return P(await A(o2.data.url, o2.data));
}, executeQuery: async (e4, a2, o2) => {
  const i5 = `${e4.url}/graph/query`, d2 = await U$1(i5, { responseType: "array-buffer", query: { f: "pbf", openCypherQuery: a2.openCypherQuery, ...o2?.query }, signal: o2?.signal, timeout: o2?.timeout }), p3 = d2.getHeader?.("content-type"), c2 = d2.data;
  if (p3?.includes("application/x-protobuf")) {
    const t6 = new (await r$2()).GraphQueryDecoder();
    if (t6.deleteLater(), e4.dataModel)
      return new c$5({ resultRows: L(t6, c2, e4.dataModel) });
    throw new s$6("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s$6("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: p3, data: d2.data });
}, executeSearch: async (e4, a2, o2) => {
  const i5 = a2.typeCategoryFilter, d2 = `${e4.url}/graph/search`, p3 = await U$1(d2, { responseType: "array-buffer", query: { f: "pbf", searchQuery: `"${a2.searchQuery}"`, typeCategoryFilter: i5, ...o2?.query }, signal: o2?.signal, timeout: o2?.timeout }), c2 = p3.getHeader?.("content-type"), l2 = p3.data;
  if (c2?.includes("application/x-protobuf")) {
    const t6 = new (await r$2()).GraphQueryDecoder();
    if (t6.deleteLater(), e4.dataModel)
      return new c$5({ resultRows: L(t6, l2, e4.dataModel) });
    throw new s$6("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new s$6("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: c2, data: p3.data });
}, executeSearchStreaming: async (e4, t6, a2) => {
  const n2 = `${e4.url}/graph/search`;
  await M(e4);
  const i5 = await F(n2, a2);
  i5.data.body = await W(t6);
  const d2 = await A(i5.data.url, i5.data);
  if (e4.dataModel)
    return new c$4({ resultRowsStream: await I(d2, e4.dataModel) });
  throw new s$6("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, _fetchWrapper: async (e4, t6) => fetch(e4, t6) };
async function v(e4, t6, r2) {
  return b.executeApplyEdits(e4, t6, r2);
}
async function S(e4, t6, r2) {
  return b.executeQuery(e4, t6, r2);
}
async function G(e4, t6, r2) {
  return b.executeQueryStreaming(e4, t6, r2);
}
async function x(e4, t6, r2) {
  return b.executeSearch(e4, t6, r2);
}
async function E(e4, t6, r2) {
  return b.executeSearchStreaming(e4, t6, r2);
}
async function T(e4) {
  return b.fetchKnowledgeGraph(e4);
}
async function q(e4) {
  return b.refreshDataModel(e4);
}
async function Q(e4) {
  return b.refreshServiceDefinition(e4);
}
async function A(e4, t6) {
  return b._fetchWrapper(e4, t6);
}
async function M(t6) {
  const r2 = t$8?.findCredential(t6.url);
  r2 || (t6.dataModel ? await z(t6) : await q(t6));
}
function R(e4, t6, a2) {
  if (0 !== e4.error_code)
    throw new s$6(t6, a2, { errorCode: e4.error_code, errorMessage: e4.error_message });
}
function j(e4, t6, r2, a2) {
  null == t6 ? r2.set_param_key_value(e4, "") : "object" != typeof t6 || t6 instanceof Date ? r2.set_param_key_value(e4, t6) : t6 instanceof n$3 ? r2.set_param_key_value(e4, s$2(t6, a2)) : t6 instanceof Array ? r2.set_param_key_value(e4, a$2(t6, a2)) : r2.set_param_key_value(e4, l$1(t6, a2));
}
async function C(e4, t6) {
  if (t6.dataModel || await q(t6), !t6.dataModel)
    throw new s$6("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const a2 = await r$2(), n2 = !!e4.options?.cascadeDelete, o2 = new a2.GraphApplyEditsEncoder(a2.SpatialReferenceUtil.WGS84(), e4.options?.inputQuantizationParameters ? s$1(e4.options?.inputQuantizationParameters) : a2.InputQuantizationUtil.WGS84_lossless());
  o2.deleteLater(), o2.cascade_delete = n2;
  try {
    let t7;
    e4.entityAdds?.forEach((e5) => {
      t7 = o2.add_entity(r$1(e5, a2)), R(t7, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e4.relationshipAdds?.forEach((e5) => {
      if (!e5.originId || !e5.destinationId)
        throw new s$6("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      t7 = o2.add_relationship(r$1(e5, a2)), R(t7, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e4.entityUpdates?.forEach((e5) => {
      if (!e5.id)
        throw new s$6("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t7 = o2.update_entity(r$1(e5, a2)), R(t7, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e4.relationshipUpdates?.forEach((e5) => {
      if (!e5.id)
        throw new s$6("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      t7 = o2.update_relationship(r$1(e5, a2)), R(t7, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e4.entityDeletes?.forEach((e5) => {
      if (!e5.typeName)
        throw new s$6("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t8 = o2.make_delete_helper(e5.typeName, true);
      t8.deleteLater(), e5.ids?.forEach((e6) => {
        t8.delete_by_id(e6);
      });
    }), e4.relationshipDeletes?.forEach((e5) => {
      if (!e5.typeName)
        throw new s$6("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const t8 = o2.make_delete_helper(e5.typeName, false);
      e5.ids?.forEach((e6) => {
        t8.delete_by_id(e6);
      });
    }), o2.encode();
  } catch (d2) {
    throw new s$6("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: d2 });
  }
  const i5 = o2.get_encoding_result();
  return R(i5.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(i5.get_byte_buffer());
}
async function D(e4, t6) {
  const a2 = await r$2(), n2 = new a2.GraphQueryRequestEncoder();
  if (n2.deleteLater(), e4.outputSpatialReference ? n2.output_spatial_reference = { wkid: e4.outputSpatialReference.wkid, latestWkid: e4.outputSpatialReference.latestWkid, vcsWkid: e4.outputSpatialReference.vcsWkid, latestVcsWkid: e4.outputSpatialReference.latestVcsWkid, wkt: e4.outputSpatialReference.wkt ?? "" } : n2.output_spatial_reference = a2.SpatialReferenceUtil.WGS84(), n2.open_cypher_query = e4.openCypherQuery, e4.bindParameters)
    for (const [r2, d2] of Object.entries(e4.bindParameters))
      j(r2, d2, n2, a2);
  if (e4.bindGeometryQuantizationParameters)
    u(e4.bindGeometryQuantizationParameters, n2);
  else {
    if (t6.dataModel || await q(t6), 4326 !== t6.dataModel?.spatialReference?.wkid)
      throw new s$6("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n2.input_quantization_parameters = a2.InputQuantizationUtil.WGS84_lossless();
  }
  e4.outputQuantizationParameters && y$1(e4.outputQuantizationParameters, n2, a2);
  try {
    n2.encode();
  } catch (i5) {
    throw new s$6("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: i5 });
  }
  const o2 = n2.get_encoding_result();
  if (0 !== o2.error.error_code)
    throw new s$6("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o2.error.error_code, errorMessage: o2.error.error_message });
  return structuredClone(o2.get_byte_buffer());
}
async function W(e4) {
  const t6 = await r$2(), a2 = new t6.GraphSearchRequestEncoder();
  if (a2.deleteLater(), a2.search_query = e4.searchQuery, a2.type_category_filter = t6.esriNamedTypeCategory[e4.typeCategoryFilter], true === e4.returnSearchContext && (a2.return_search_context = e4.returnSearchContext), null != e4.start && e4.start > 0 && (a2.start_index = e4.start), null != e4.num && (a2.max_num_results = e4.num), null != e4.idsFilter && Array.isArray(e4.idsFilter) && e4.idsFilter.length > 0)
    try {
      a2.set_ids_filter(a$2(e4.idsFilter, t6));
    } catch (o2) {
      throw new s$6("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", { error: o2 });
    }
  e4.namedTypesFilter?.forEach((e5) => {
    a2.add_named_type_filter(e5);
  });
  try {
    a2.encode();
  } catch (o2) {
    throw new s$6("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", { error: o2 });
  }
  const n2 = a2.get_encoding_result();
  if (0 !== n2.error.error_code)
    throw new s$6("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", { errorCode: n2.error.error_code, errorMessage: n2.error.error_message });
  return structuredClone(n2.get_byte_buffer());
}
async function F(e4, r2) {
  return U$1(e4, { responseType: "native-request-init", method: "post", query: { f: "pbf", ...r2?.query }, body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: r2?.signal, timeout: r2?.timeout });
}
async function P(e$12) {
  const t6 = e$12.headers.get("content-type");
  if (t6?.includes("application/x-protobuf")) {
    const t7 = await e$12.arrayBuffer(), r2 = new (await r$2()).GraphApplyEditsDecoder();
    return r2.deleteLater(), r2.decode(new Uint8Array(t7)), e3(r2);
  }
  throw new s$6("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: t6, data: e$12.text() });
}
function L(e4, t6, a2, n2 = new f$4({ wkid: f$4.WGS84.wkid })) {
  e4.push_buffer(new Uint8Array(t6));
  const o2 = [];
  let i5 = 0;
  for (; e4.next_row(); ) {
    i5 || (i5 = e4.get_header_keys().size());
    const t7 = new Array(i5);
    for (let r2 = 0; r2 < i5; r2++) {
      const o3 = e4.get_value(r2);
      t7[r2] = E$1(o3, a2, n2);
    }
    o2.push(t7);
  }
  if (e4.has_error())
    throw new s$6("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: e4.error.error_code, errorMessage: e4.error.error_message });
  return o2;
}
async function I(e4, t6, n2) {
  const o2 = e4.headers.get("content-type");
  if (e4.headers.get("content-length") && s$7.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), o2?.includes("application/x-protobuf")) {
    const a2 = e4.body?.getReader(), o3 = new (await r$2()).GraphQueryDecoder();
    return o3.deleteLater(), new ReadableStream({ async start(e5) {
      try {
        return i5();
      } catch (d2) {
        a2?.releaseLock(), e5.error(new s$6("knowledge-graph:stream-decoding-error", "The server returned a valid response, but there was an error decoding the response stream", { error: d2 })), e5.close();
      }
      function i5() {
        return a2?.read().then(({ done: d2, value: s3 }) => {
          if (d2) {
            let t7;
            if (o3.has_error() && (t7 = new s$6("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: o3.error.error_code, errorMessage: o3.error.error_message })), a2.releaseLock(), t7)
              throw e5.error(t7), t7;
            return void e5.close();
          }
          const p3 = L(o3, s3, t6, n2);
          return p3.length > 0 && e5.enqueue(p3), i5();
        });
      }
    } });
  }
  throw new s$6("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o2, data: e4.text() });
}
async function z(e4) {
  const a2 = `${e4.url}/dataModel/queryDataModel`, n2 = await U$1(a2, { responseType: "array-buffer", query: { f: "pbf" } }), o2 = n2.getHeader?.("content-type"), i5 = n2.data;
  if (o2?.includes("application/x-protobuf")) {
    const e5 = (await r$2()).decode_data_model_from_protocol_buffer(new Uint8Array(i5));
    if (!e5)
      throw new s$6("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return _$1(e5);
  }
  throw new s$6("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: o2, data: n2.data });
}
const knowledgeGraphService = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchWrapper: A,
  executeApplyEdits: v,
  executeQuery: S,
  executeQueryStreaming: G,
  executeSearch: x,
  executeSearchStreaming: E,
  fetchKnowledgeGraph: T,
  kgRestServices: b,
  refreshDataModel: q,
  refreshServiceDefinition: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  G,
  T,
  knowledgeGraphService as k,
  p$3 as p,
  t$4 as t
};
