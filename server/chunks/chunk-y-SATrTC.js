import { m } from "./chunk-KfB6QvrM.js";
import { a as ae$1, t as te$1, k as ee$1, B, N, b as a, r, G, d as de, l as be, q as Be, X as X$1, v as Y, S as Se, U, H, x as t, Q as Q$1, I, h as he, D, y as Je, A as v, K as y$1, V, P as l$1 } from "./chunk-piwgY2EI.js";
import { e, j, q, f, c, a as e$1, b as a$1, d as a$2, g, k, F, A, B as B$1, h as b, i as k$1, L, I as I$1 } from "./chunk-pCTs0bQn.js";
import { t as t$1 } from "./chunk-MrDe64fM.js";
import { l } from "./chunk-3KM-oU2l.js";
import { u, D as D$1 } from "./chunk-M-7rbv6e.js";
import { bw as Q, fi as S, dw as We, dv as y } from "./chunk-ejFG4zJ0.js";
import { x as x$1 } from "./chunk-KyVc0M84.js";
import "luxon";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-vNVJr286.js";
import "./chunk-mWJZoVFa.js";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function X(e2, t2, n, a2) {
  if (1 === a2.length) {
    if (U(a2[0]))
      return l$1(e2, a2[0], -1);
    if (Q$1(a2[0]))
      return l$1(e2, a2[0].toArray(), -1);
  }
  return l$1(e2, a2, -1);
}
async function ee(e2, t2, n) {
  const a2 = e2.getVariables();
  if (a2.length > 0) {
    const i = [];
    for (let e3 = 0; e3 < a2.length; e3++) {
      const r3 = { name: a2[e3] };
      i.push(await t2.evaluateIdentifier(n, r3));
    }
    const r2 = {};
    for (let e3 = 0; e3 < a2.length; e3++)
      r2[a2[e3]] = i[e3];
    return e2.parameters = r2, e2;
  }
  return e2;
}
function te(e2, t2, n = null) {
  for (const a2 in e2)
    if (a2.toLowerCase() === t2.toLowerCase())
      return e2[a2];
  return n;
}
function ne(e2) {
  if (null === e2)
    return null;
  const t2 = { type: te(e2, "type", ""), name: te(e2, "name", "") };
  if ("range" === t2.type)
    t2.range = te(e2, "range", []);
  else {
    t2.codedValues = [];
    for (const n of te(e2, "codedValues", []))
      t2.codedValues.push({ name: te(n, "name", ""), code: te(n, "code", null) });
  }
  return t2;
}
function ae(e2) {
  if (null === e2)
    return null;
  const t2 = {}, n = te(e2, "wkt", null);
  null !== n && (t2.wkt = n);
  const a2 = te(e2, "wkid", null);
  return null !== a2 && (t2.wkid = a2), t2;
}
function ie(e2) {
  if (null === e2)
    return null;
  const t2 = { hasZ: te(e2, "hasz", false), hasM: te(e2, "hasm", false) }, n = te(e2, "spatialreference", null);
  n && (t2.spatialReference = ae(n));
  const a2 = te(e2, "x", null);
  if (null !== a2)
    return t2.x = a2, t2.y = te(e2, "y", null), t2.hasZ && (t2.z = te(e2, "z", null)), t2.hasM && (t2.m = te(e2, "m", null)), t2;
  const i = te(e2, "rings", null);
  if (null !== i)
    return t2.rings = i, t2;
  const r2 = te(e2, "paths", null);
  if (null !== r2)
    return t2.paths = r2, t2;
  const s = te(e2, "points", null);
  if (null !== s)
    return t2.points = s, t2;
  for (const o of ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]) {
    const n2 = te(e2, o, null);
    null !== n2 && (t2[o] = n2);
  }
  return t2;
}
function re(e2, t2) {
  for (const n of t2)
    if (n === e2)
      return true;
  return false;
}
function se(e2) {
  return !!e2.layerDefinition && (!!e2.featureSet && (false !== re(e2.layerDefinition.geometryType, ["", null, "esriGeometryNull", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) && (false !== U(e2.layerDefinition.fields) && false !== U(e2.featureSet.features))));
}
function oe(e2) {
  return "utc" === e2?.toLowerCase() ? "UTC" : "unknown" === e2?.toLowerCase() ? "Unknown" : e2;
}
function le(q$1) {
  "async" === q$1.mode && (q$1.functions.timezone = function(t2, r$1) {
    return q$1.standardFunctionAsync(t2, r$1, async (s, o, l2) => {
      if (ae$1(l2, 1, 2, t2, r$1), te$1(l2[0]))
        return "Unknown";
      if (ee$1(l2[0]))
        return "Unknown";
      if (B(l2[0])) {
        if (await l2[0].load(), 1 === l2.length || null === l2[1])
          return l2[0].datesInUnknownTimezone ? oe("unknown") : oe(l2[0].dateFieldsTimeZone);
        if (!(l2[1] instanceof N) || false === l2[1].hasField("type"))
          throw new a(t2, r.InvalidParameter, r$1);
        const e2 = l2[1].field("type");
        if (false === G(e2))
          throw new a(t2, r.InvalidParameter, r$1);
        switch (de(e2).toLowerCase()) {
          case "preferredtimezone":
            return oe(l2[0].preferredTimeZone);
          case "editfieldsinfo":
            return oe(l2[0].editFieldsInfo?.timeZone ?? null);
          case "timeinfo":
            return oe(l2[0].timeInfo?.timeZone ?? null);
          case "field":
            if (l2[1].hasField("fieldname") && G(l2[1].field("fieldname")))
              return oe(l2[0].fieldTimeZone(de(l2[1].field("fieldname"))));
        }
        throw new a(t2, r.InvalidParameter, r$1);
      }
      const f2 = be(l2[0], Be(t2));
      if (null === f2)
        return null;
      const u2 = f2.timeZone;
      return "system" === u2 ? m.systemTimeZoneCanonicalName : "utc" === u2.toLowerCase() ? "UTC" : "unknown" === u2.toLowerCase() ? "Unknown" : u2;
    });
  }, q$1.functions.sqltimestamp = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ae$1(s, 1, 3, e2, t2);
      const o = s[0];
      if (X$1(o)) {
        if (1 === s.length)
          return o.toSQLWithKeyword();
        if (2 === s.length)
          return o.changeTimeZone(de(s[1])).toSQLWithKeyword();
        throw new a(e2, r.InvalidParameter, t2);
      }
      if (ee$1(o))
        return o.toSQLWithKeyword();
      if (B(o)) {
        if (3 !== s.length)
          throw new a(e2, r.InvalidParameter, t2);
        await o.load();
        const n2 = de(s[1]);
        if (ee$1(s[2]))
          return s[2].toSQLWithKeyword();
        if (false === X$1(s[2]))
          throw new a(e2, r.InvalidParameter, t2);
        const r$12 = o.fieldTimeZone(n2);
        return null === r$12 ? s[2].toSQLWithKeyword() : s[2].changeTimeZone(r$12).toSQLWithKeyword();
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "sqltimestamp", min: 2, max: 4 }), q$1.functions.featuresetbyid = function(e$12, t2) {
    return q$1.standardFunctionAsync(e$12, t2, (n, r$1, o) => {
      if (ae$1(o, 2, 4, e$12, t2), o[0] instanceof e) {
        const n2 = de(o[1]);
        let r$12 = Y(o[2], null);
        const s = Se(Y(o[3], true));
        if (null === r$12 && (r$12 = ["*"]), false === U(r$12))
          throw new a(e$12, r.InvalidParameter, t2);
        return o[0].featureSetById(n2, s, r$12);
      }
      throw new a(e$12, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "featuresetbyid", min: 2, max: 4 }), q$1.functions.getfeatureset = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, (n, r$1, s) => {
      if (ae$1(s, 1, 2, e2, t2), H(s[0])) {
        let t3 = Y(s[1], "datasource");
        return null === t3 && (t3 = "datasource"), t3 = de(t3).toLowerCase(), j(s[0].fullSchema(), t3, e2.lrucache, e2.interceptor, e2.spatialReference);
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "getfeatureset", min: 1, max: 2 }), q$1.functions.featuresetbyportalitem = function(e2, n) {
    return q$1.standardFunctionAsync(e2, n, (r$1, s, o) => {
      if (ae$1(o, 2, 5, e2, n), null === o[0])
        throw new a(e2, r.PortalRequired, n);
      if (o[0] instanceof t) {
        const t2 = de(o[1]), r$12 = de(o[2]);
        let s2 = Y(o[3], null);
        const f3 = Se(Y(o[4], true));
        if (null === s2 && (s2 = ["*"]), false === U(s2))
          throw new a(e2, r.InvalidParameter, n);
        let u3 = null;
        return u3 = e2.services?.portal ? e2.services.portal : Q.getDefault(), u3 = l(o[0], u3), q(t2, r$12, e2.spatialReference, s2, f3, u3, e2.lrucache, e2.interceptor);
      }
      if (false === G(o[0]))
        throw new a(e2, r.PortalRequired, n);
      const f2 = de(o[0]), u2 = de(o[1]);
      let d = Y(o[2], null);
      const c2 = Se(Y(o[3], true));
      if (null === d && (d = ["*"]), false === U(d))
        throw new a(e2, r.InvalidParameter, n);
      return q(f2, u2, e2.spatialReference, d, c2, e2.services?.portal ?? Q.getDefault(), e2.lrucache, e2.interceptor);
    });
  }, q$1.signatures.push({ name: "featuresetbyportalitem", min: 2, max: 5 }), q$1.functions.featuresetbyname = function(e$12, t2) {
    return q$1.standardFunctionAsync(e$12, t2, (n, r$1, o) => {
      if (ae$1(o, 2, 4, e$12, t2), o[0] instanceof e) {
        const n2 = de(o[1]);
        let r$12 = Y(o[2], null);
        const s = Se(Y(o[3], true));
        if (null === r$12 && (r$12 = ["*"]), false === U(r$12))
          throw new a(e$12, r.InvalidParameter, t2);
        return o[0].featureSetByName(n2, s, r$12);
      }
      throw new a(e$12, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "featuresetbyname", min: 2, max: 4 }), q$1.functions.featureset = function(e2, t2) {
    return q$1.standardFunction(e2, t2, (r$1, s, o) => {
      ae$1(o, 1, 1, e2, t2);
      let l2 = o[0];
      const f$1 = { layerDefinition: { geometryType: "", objectIdField: "", hasM: false, hasZ: false, globalIdField: "", typeIdField: "", fields: [] }, featureSet: { geometryType: "", features: [] } };
      if (G(l2))
        l2 = JSON.parse(l2), void 0 !== l2.layerDefinition ? (f$1.layerDefinition = l2.layerDefinition, f$1.featureSet = l2.featureSet, l2.layerDefinition.spatialReference && (f$1.layerDefinition.spatialReference = l2.layerDefinition.spatialReference)) : (f$1.featureSet.features = l2.features, f$1.featureSet.geometryType = l2.geometryType, f$1.layerDefinition.geometryType = f$1.featureSet.geometryType, f$1.layerDefinition.objectIdField = l2.objectIdFieldName ?? "", f$1.layerDefinition.typeIdField = l2.typeIdFieldName, f$1.layerDefinition.globalIdField = l2.globalIdFieldName, f$1.layerDefinition.fields = l2.fields, l2.spatialReference && (f$1.layerDefinition.spatialReference = l2.spatialReference));
      else {
        if (!(o[0] instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        {
          l2 = JSON.parse(o[0].castToText(true));
          const e3 = te(l2, "layerdefinition");
          if (null !== e3) {
            f$1.layerDefinition.geometryType = te(e3, "geometrytype", ""), f$1.featureSet.geometryType = f$1.layerDefinition.geometryType, f$1.layerDefinition.globalIdField = te(e3, "globalidfield", ""), f$1.layerDefinition.objectIdField = te(e3, "objectidfield", ""), f$1.layerDefinition.typeIdField = te(e3, "typeidfield", ""), f$1.layerDefinition.hasZ = true === te(e3, "hasz", false), f$1.layerDefinition.hasM = true === te(e3, "hasm", false);
            const t3 = te(e3, "spatialreference", null);
            t3 && (f$1.layerDefinition.spatialReference = ae(t3));
            for (const a2 of te(e3, "fields", [])) {
              const e4 = { name: te(a2, "name", ""), alias: te(a2, "alias", ""), type: te(a2, "type", ""), nullable: te(a2, "nullable", true), editable: te(a2, "editable", true), length: te(a2, "length", null), domain: ne(te(a2, "domain")) };
              f$1.layerDefinition.fields.push(e4);
            }
            const n = te(l2, "featureset", null);
            if (n) {
              const e4 = {};
              for (const t4 of f$1.layerDefinition.fields)
                e4[t4.name.toLowerCase()] = t4.name;
              for (const t4 of te(n, "features", [])) {
                const n2 = {}, a2 = te(t4, "attributes", {});
                for (const t5 in a2)
                  n2[e4[t5.toLowerCase()]] = a2[t5];
                f$1.featureSet.features.push({ attributes: n2, geometry: ie(te(t4, "geometry", null)) });
              }
            }
          } else {
            f$1.layerDefinition.hasZ = true === te(l2, "hasz", false), f$1.layerDefinition.hasM = true === te(l2, "hasm", false), f$1.layerDefinition.geometryType = te(l2, "geometrytype", ""), f$1.featureSet.geometryType = f$1.layerDefinition.geometryType, f$1.layerDefinition.objectIdField = te(l2, "objectidfieldname", ""), f$1.layerDefinition.typeIdField = te(l2, "typeidfieldname", "");
            const e4 = te(l2, "spatialreference", null);
            e4 && (f$1.layerDefinition.spatialReference = ae(e4));
            let t3 = te(l2, "fields", null);
            if (U(t3))
              for (const i of t3) {
                const e5 = { name: te(i, "name", ""), alias: te(i, "alias", ""), type: te(i, "type", ""), nullable: te(i, "nullable", true), editable: te(i, "editable", true), length: te(i, "length", null), domain: ne(te(i, "domain")) };
                f$1.layerDefinition.fields.push(e5);
              }
            else
              t3 = null, f$1.layerDefinition.fields = t3;
            const n = {};
            for (const i of f$1.layerDefinition.fields)
              n[i.name.toLowerCase()] = i.name;
            let a2 = te(l2, "features", null);
            if (U(a2))
              for (const i of a2) {
                const e5 = {}, t4 = te(i, "attributes", {});
                for (const a3 in t4)
                  e5[n[a3.toLowerCase()]] = t4[a3];
                f$1.featureSet.features.push({ attributes: e5, geometry: ie(te(i, "geometry", null)) });
              }
            else
              a2 = null, f$1.featureSet.features = a2;
          }
        }
      }
      if (false === se(f$1))
        throw new a(e2, r.InvalidParameter, t2);
      return f$1.layerDefinition.geometryType || (f$1.layerDefinition.geometryType = "esriGeometryNull"), f.create(f$1, e2.spatialReference);
    });
  }, q$1.signatures.push({ name: "featureset", min: 1, max: 1 }), q$1.functions.filter = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ae$1(s, 2, 2, e2, t2), U(s[0]) || Q$1(s[0])) {
        const n2 = [];
        let r$12 = s[0];
        r$12 instanceof t$1 && (r$12 = r$12.toArray());
        let o = null;
        if (!I(s[1]))
          throw new a(e2, r.InvalidParameter, t2);
        o = s[1].createFunction(e2);
        for (const e3 of r$12) {
          const t3 = o(e3);
          S(t3) ? true === await t3 && n2.push(e3) : true === t3 && n2.push(e3);
        }
        return n2;
      }
      if (B(s[0])) {
        const t3 = await s[0].load(), n2 = x$1.create(s[1], t3.getFieldsIndex(), t3.dateFieldsTimeZoneDefaultUTC), a2 = n2.getVariables();
        if (a2.length > 0) {
          const t4 = [];
          for (let n3 = 0; n3 < a2.length; n3++) {
            const i2 = { name: a2[n3] };
            t4.push(await q$1.evaluateIdentifier(e2, i2));
          }
          const i = {};
          for (let e3 = 0; e3 < a2.length; e3++)
            i[a2[e3]] = t4[e3];
          return n2.parameters = i, new c({ parentfeatureset: s[0], whereclause: n2 });
        }
        return new c({ parentfeatureset: s[0], whereclause: n2 });
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "filter", min: 2, max: 2 }), q$1.functions.orderby = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ae$1(s, 2, 2, e2, t2), B(s[0])) {
        const e3 = new e$1(s[1]);
        return new a$1({ parentfeatureset: s[0], orderbyclause: e3 });
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "orderby", min: 2, max: 2 }), q$1.functions.top = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ae$1(s, 2, 2, e2, t2), B(s[0]))
        return new a$2({ parentfeatureset: s[0], topnum: s[1] });
      if (U(s[0]))
        return he(s[1]) >= s[0].length ? s[0].slice(0) : s[0].slice(0, he(s[1]));
      if (Q$1(s[0]))
        return he(s[1]) >= s[0].length() ? s[0].slice(0) : s[0].slice(0, he(s[1]));
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "top", min: 2, max: 2 }), q$1.functions.first = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, a2, i) => {
      if (ae$1(i, 1, 1, e2, t2), B(i[0])) {
        const t3 = await i[0].first(n.abortSignal);
        if (null !== t3) {
          const n2 = D.createFromGraphicLikeObject(t3.geometry, t3.attributes, i[0], e2.timeZone);
          return n2._underlyingGraphic = t3, n2;
        }
        return t3;
      }
      return U(i[0]) ? 0 === i[0].length ? null : i[0][0] : Q$1(i[0]) ? 0 === i[0].length() ? null : i[0].get(0) : null;
    });
  }, q$1.signatures.push({ name: "first", min: 1, max: 1 }), q$1.functions.attachments = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      ae$1(o, 1, 2, e2, t2);
      const l2 = { minsize: -1, maxsize: -1, types: null, returnMetadata: false };
      if (o.length > 1) {
        if (o[1] instanceof N) {
          if (o[1].hasField("minsize") && (l2.minsize = he(o[1].field("minsize"))), o[1].hasField("metadata") && (l2.returnMetadata = Se(o[1].field("metadata"))), o[1].hasField("maxsize") && (l2.maxsize = he(o[1].field("maxsize"))), o[1].hasField("types")) {
            const e3 = Je(o[1].field("types"), false);
            e3.length > 0 && (l2.types = e3);
          }
        } else if (null !== o[1])
          throw new a(e2, r.InvalidParameter, t2);
      }
      if (H(o[0])) {
        let t3 = o[0]._layer;
        return t3 instanceof We && (t3 = g(t3, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === t3 ? [] : false === B(t3) ? [] : (await t3.load(), t3.queryAttachments(o[0].field(t3.objectIdField), l2.minsize, l2.maxsize, l2.types, l2.returnMetadata));
      }
      if (null === o[0])
        return [];
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "attachments", min: 1, max: 2 }), q$1.functions.featuresetbyrelationshipname = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ae$1(s, 2, 4, e2, t2);
      const o = s[0], l2 = de(s[1]);
      let c2 = Y(s[2], null);
      const m2 = Se(Y(s[3], true));
      if (null === c2 && (c2 = ["*"]), false === U(c2))
        throw new a(e2, r.InvalidParameter, t2);
      if (null === s[0])
        return null;
      if (!H(s[0]))
        throw new a(e2, r.InvalidParameter, t2);
      let y2 = o._layer;
      if (y2 instanceof We && (y2 = g(y2, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === y2)
        return null;
      if (false === B(y2))
        return null;
      y2 = await y2.load();
      const w = y2.relationshipMetaData().filter((e3) => e3.name === l2);
      if (0 === w.length)
        return null;
      if (void 0 !== w[0].relationshipTableId && null !== w[0].relationshipTableId && w[0].relationshipTableId > -1)
        return k(y2, w[0], o.field(y2.objectIdField), y2.spatialReference, c2, m2, e2.lrucache, e2.interceptor);
      let g$1 = y2.serviceUrl();
      if (!g$1)
        return null;
      g$1 = "/" === g$1.charAt(g$1.length - 1) ? g$1 + w[0].relatedTableId.toString() : g$1 + "/" + w[0].relatedTableId.toString();
      const I2 = await F(g$1, y2.spatialReference, c2, m2, e2.lrucache, e2.interceptor);
      await I2.load();
      let D2 = I2.relationshipMetaData();
      if (D2 = D2.filter((e3) => e3.id === w[0].id), false === o.hasField(w[0].keyField) || null === o.field(w[0].keyField)) {
        const e3 = await y2.getFeatureByObjectId(o.field(y2.objectIdField), [w[0].keyField]);
        if (e3) {
          const t3 = x$1.create(D2[0].keyField + "= @id", I2.getFieldsIndex(), I2.dateFieldsTimeZoneDefaultUTC);
          return t3.parameters = { id: e3.attributes[w[0].keyField] }, I2.filter(t3);
        }
        return new u({ parentfeatureset: I2 });
      }
      const T = x$1.create(D2[0].keyField + "= @id", I2.getFieldsIndex(), I2.dateFieldsTimeZoneDefaultUTC);
      return T.parameters = { id: o.field(w[0].keyField) }, I2.filter(T);
    });
  }, q$1.signatures.push({ name: "featuresetbyrelationshipname", min: 2, max: 4 }), q$1.functions.featuresetbyassociation = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ae$1(s, 2, 3, e2, t2);
      const o = s[0], l2 = de(Y(s[1], "")).toLowerCase(), u2 = G(s[2]) ? de(s[2]) : null;
      if (null === s[0])
        return null;
      if (!H(s[0]))
        throw new a(e2, r.InvalidParameter, t2);
      let d = o._layer;
      if (d instanceof We && (d = g(d, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === d)
        return null;
      if (false === B(d))
        return null;
      await d.load();
      const m2 = d.serviceUrl(), y$2 = await A(m2, e2.spatialReference);
      let w = null, I2 = null, D2 = false;
      if (null !== u2 && "" !== u2 && void 0 !== u2) {
        for (const e3 of y$2.terminals)
          e3.terminalName === u2 && (I2 = e3.terminalId);
        null === I2 && (D2 = true);
      }
      const T = y$2.associations.getFieldsIndex(), E = T.get("TOGLOBALID").name, A$1 = T.get("FROMGLOBALID").name, x = T.get("TOTERMINALID").name, S2 = T.get("FROMTERMINALID").name, L$1 = T.get("FROMNETWORKSOURCEID").name, C = T.get("TONETWORKSOURCEID").name, v$1 = T.get("ASSOCIATIONTYPE").name, P = T.get("ISCONTENTVISIBLE").name, k2 = T.get("OBJECTID").name;
      for (const e3 of d.fields)
        if ("global-id" === e3.type) {
          w = o.field(e3.name);
          break;
        }
      let O = null, z = new B$1(new y({ name: "percentalong", alias: "percentalong", type: "double" }), x$1.create("0", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), H$1 = new B$1(new y({ name: "side", alias: "side", type: "string" }), x$1.create("''", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
      const W = "globalid", G$1 = "globalId", K = {};
      for (const e3 in y$2.lkp)
        K[e3] = y$2.lkp[e3].sourceId;
      const q2 = new b(new y({ name: "classname", alias: "classname", type: "string" }), null, K);
      let B$2 = "";
      switch (l2) {
        case "midspan": {
          B$2 = `((${E}='${w}') OR ( ${A$1}='${w}')) AND (${v$1} IN (5))`, q2.codefield = x$1.create(`CASE WHEN (${E}='${w}') THEN ${L$1} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const e3 = y$1(L.findField(y$2.associations.fields, A$1));
          e3.name = W, e3.alias = W, O = new B$1(e3, x$1.create(`CASE WHEN (${A$1}='${w}') THEN ${E} ELSE ${A$1} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), z = y$2.unVersion >= 4 ? new I$1(L.findField(y$2.associations.fields, T.get("PERCENTALONG").name)) : new B$1(new y({ name: "percentalong", alias: "percentalong", type: "double" }), x$1.create("0", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "junctionedge": {
          B$2 = `((${E}='${w}') OR ( ${A$1}='${w}')) AND (${v$1} IN (4,6))`, q2.codefield = x$1.create(`CASE WHEN (${E}='${w}') THEN ${L$1} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const e3 = y$1(L.findField(y$2.associations.fields, A$1));
          e3.name = W, e3.alias = W, O = new B$1(e3, x$1.create(`CASE WHEN (${A$1}='${w}') THEN ${E} ELSE ${A$1} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), H$1 = new B$1(new y({ name: "side", alias: "side", type: "string" }), x$1.create(`CASE WHEN (${v$1}=4) THEN 'from' ELSE 'to' END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "connected": {
          let e3 = `${E}='@T'`, t3 = `${A$1}='@T'`;
          null !== I2 && (e3 += ` AND ${x}=@A`, t3 += ` AND ${S2}=@A`), B$2 = "((" + e3 + ") OR (" + t3 + "))", B$2 = v(B$2, "@T", w ?? ""), e3 = v(e3, "@T", w ?? ""), null !== I2 && (e3 = v(e3, "@A", I2.toString()), B$2 = v(B$2, "@A", I2.toString())), q2.codefield = x$1.create("CASE WHEN " + e3 + ` THEN ${L$1} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const n2 = y$1(L.findField(y$2.associations.fields, A$1));
          n2.name = W, n2.alias = W, O = new B$1(n2, x$1.create("CASE WHEN " + e3 + ` THEN ${A$1} ELSE ${E} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "container":
          B$2 = `${E}='${w}' AND ${v$1} = 2`, null !== I2 && (B$2 += ` AND ${x} = ` + I2.toString()), q2.codefield = L$1, B$2 = "( " + B$2 + " )", O = new k$1(L.findField(y$2.associations.fields, A$1), W, W);
          break;
        case "content":
          B$2 = `(${A$1}='${w}' AND ${v$1} = 2)`, null !== I2 && (B$2 += ` AND ${S2} = ` + I2.toString()), q2.codefield = C, B$2 = "( " + B$2 + " )", O = new k$1(L.findField(y$2.associations.fields, E), W, W);
          break;
        case "structure":
          B$2 = `(${E}='${w}' AND ${v$1} = 3)`, null !== I2 && (B$2 += ` AND ${x} = ` + I2.toString()), q2.codefield = L$1, B$2 = "( " + B$2 + " )", O = new k$1(L.findField(y$2.associations.fields, A$1), W, G$1);
          break;
        case "attached":
          B$2 = `(${A$1}='${w}' AND ${v$1} = 3)`, null !== I2 && (B$2 += ` AND ${S2} = ` + I2.toString()), q2.codefield = C, B$2 = "( " + B$2 + " )", O = new k$1(L.findField(y$2.associations.fields, E), W, G$1);
          break;
        default:
          throw new a(e2, r.InvalidParameter, t2);
      }
      D2 && (B$2 = "1 <> 1");
      return new L({ parentfeatureset: y$2.associations, adaptedFields: [new I$1(L.findField(y$2.associations.fields, k2)), new I$1(L.findField(y$2.associations.fields, P)), O, H$1, q2, z], extraFilter: B$2 ? x$1.create(B$2, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC) : null });
    });
  }, q$1.signatures.push({ name: "featuresetbyassociation", min: 2, max: 6 }), q$1.functions.groupby = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      if (ae$1(o, 3, 3, e2, t2), !B(o[0]))
        throw new a(e2, r.InvalidParameter, t2);
      const l2 = await o[0].load(), f2 = [], u2 = [];
      let d = false, c2 = [];
      if (G(o[1]))
        c2.push(o[1]);
      else if (o[1] instanceof N)
        c2.push(o[1]);
      else if (U(o[1]))
        c2 = o[1];
      else {
        if (!Q$1(o[1]))
          throw new a(e2, r.InvalidParameter, t2);
        c2 = o[1].toArray();
      }
      for (const m2 of c2)
        if (G(m2)) {
          const e3 = x$1.create(de(m2), l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC), t3 = true === D$1(e3) ? de(m2) : "%%%%FIELDNAME";
          f2.push({ name: t3, expression: e3 }), "%%%%FIELDNAME" === t3 && (d = true);
        } else {
          if (!(m2 instanceof N))
            throw new a(e2, r.InvalidParameter, t2);
          {
            const n = m2.hasField("name") ? m2.field("name") : "%%%%FIELDNAME", r$12 = m2.hasField("expression") ? m2.field("expression") : "";
            if ("%%%%FIELDNAME" === n && (d = true), !n)
              throw new a(e2, r.InvalidParameter, t2);
            f2.push({ name: n, expression: x$1.create(r$12 || n, l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC) });
          }
        }
      if (c2 = [], G(o[2]))
        c2.push(o[2]);
      else if (U(o[2]))
        c2 = o[2];
      else if (Q$1(o[2]))
        c2 = o[2].toArray();
      else {
        if (!(o[2] instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        c2.push(o[2]);
      }
      for (const m2 of c2) {
        if (!(m2 instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        {
          const n = m2.hasField("name") ? m2.field("name") : "", r$12 = m2.hasField("statistic") ? m2.field("statistic") : "", s2 = m2.hasField("expression") ? m2.field("expression") : "";
          if (!n || !r$12 || !s2)
            throw new a(e2, r.InvalidParameter, t2);
          u2.push({ name: n, statistic: r$12.toLowerCase(), expression: x$1.create(s2, l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC) });
        }
      }
      if (d) {
        const e3 = {};
        for (const n of l2.fields)
          e3[n.name.toLowerCase()] = 1;
        for (const n of f2)
          "%%%%FIELDNAME" !== n.name && (e3[n.name.toLowerCase()] = 1);
        for (const n of u2)
          "%%%%FIELDNAME" !== n.name && (e3[n.name.toLowerCase()] = 1);
        let t3 = 0;
        for (const n of f2)
          if ("%%%%FIELDNAME" === n.name) {
            for (; 1 === e3["field_" + t3.toString()]; )
              t3++;
            e3["field_" + t3.toString()] = 1, n.name = "FIELD_" + t3.toString();
          }
      }
      for (const t3 of f2)
        await ee(t3.expression, q$1, e2);
      for (const t3 of u2)
        await ee(t3.expression, q$1, e2);
      return o[0].groupby(f2, u2);
    });
  }, q$1.signatures.push({ name: "groupby", min: 3, max: 3 }), q$1.functions.distinct = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      if (B(o[0])) {
        ae$1(o, 2, 2, e2, t2);
        const r$12 = await o[0].load(), s2 = [];
        let l2 = [];
        if (G(o[1]))
          l2.push(o[1]);
        else if (o[1] instanceof N)
          l2.push(o[1]);
        else if (U(o[1]))
          l2 = o[1];
        else {
          if (!Q$1(o[1]))
            throw new a(e2, r.InvalidParameter, t2);
          l2 = o[1].toArray();
        }
        let f2 = false;
        for (const o2 of l2)
          if (G(o2)) {
            const e3 = x$1.create(de(o2), r$12.getFieldsIndex(), r$12.dateFieldsTimeZoneDefaultUTC), t3 = true === D$1(e3) ? de(o2) : "%%%%FIELDNAME";
            s2.push({ name: t3, expression: e3 }), "%%%%FIELDNAME" === t3 && (f2 = true);
          } else {
            if (!(o2 instanceof N))
              throw new a(e2, r.InvalidParameter, t2);
            {
              const n = o2.hasField("name") ? o2.field("name") : "%%%%FIELDNAME", l3 = o2.hasField("expression") ? o2.field("expression") : "";
              if ("%%%%FIELDNAME" === n && (f2 = true), !n)
                throw new a(e2, r.InvalidParameter, t2);
              s2.push({ name: n, expression: x$1.create(l3 || n, r$12.getFieldsIndex(), r$12.dateFieldsTimeZoneDefaultUTC) });
            }
          }
        if (f2) {
          const e3 = {};
          for (const n of r$12.fields)
            e3[n.name.toLowerCase()] = 1;
          for (const n of s2)
            "%%%%FIELDNAME" !== n.name && (e3[n.name.toLowerCase()] = 1);
          let t3 = 0;
          for (const n of s2)
            if ("%%%%FIELDNAME" === n.name) {
              for (; 1 === e3["field_" + t3.toString()]; )
                t3++;
              e3["field_" + t3.toString()] = 1, n.name = "FIELD_" + t3.toString();
            }
        }
        for (const t3 of s2)
          await ee(t3.expression, q$1, e2);
        return o[0].groupby(s2, []);
      }
      return X("distinct", r$1, s, o);
    });
  }), q$1.functions.getfeaturesetinfo = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (a2, i, r2) => {
      if (ae$1(r2, 1, 1, e2, t2), !B(r2[0]))
        return null;
      const s = await r2[0].getFeatureSetInfo();
      return s ? N.convertObjectToArcadeDictionary({ layerId: s.layerId, layerName: s.layerName, itemId: s.itemId, serviceLayerUrl: s.serviceLayerUrl, webMapLayerId: s.webMapLayerId ?? null, webMapLayerTitle: s.webMapLayerTitle ?? null, className: null, objectClassId: null }, Be(e2), false, false) : null;
    });
  }, q$1.signatures.push({ name: "getfeaturesetinfo", min: 1, max: 1 }), q$1.functions.filterbysubtypecode = function(e2, t2) {
    return q$1.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ae$1(s, 2, 2, e2, t2), B(s[0])) {
        const n2 = await s[0].load(), r$12 = s[1];
        if (!V(r$12))
          throw new a(e2, r.InvalidParameter, t2);
        if (n2.subtypeField) {
          const e3 = x$1.create(`${n2.subtypeField}= ${s[1]}`, n2.getFieldsIndex(), n2.dateFieldsTimeZoneDefaultUTC);
          return new c({ parentfeatureset: s[0], whereclause: e3 });
        }
        if (null === n2.typeIdField || "" === n2.typeIdField)
          throw new a(e2, r.FeatureSetDoesNotHaveSubtypes, t2);
        const o = x$1.create(`${n2.typeIdField}= ${s[1]}`, n2.getFieldsIndex(), n2.dateFieldsTimeZoneDefaultUTC);
        return new c({ parentfeatureset: s[0], whereclause: o });
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$1.signatures.push({ name: "filterbysubtypecode", min: 2, max: 2 });
}
export {
  le as registerFunctions
};
