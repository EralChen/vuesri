import { m } from "./chunk-Tt9yuqqG.js";
import { n as ne$1, K, X as X$1, H, N, a, r, P, d as ce, x as ge, y as qe, Q, A as L, B as be, q, U, E as t, b as $, J as t$1, v, c as pe, D, S as we, T as I, V as y, Y as l$1 } from "./chunk-dapYIJB-.js";
import { e, j, q as q$1, f, c, a as e$1, b as a$1, d as a$2, g, k, F, T, B, h as b, i as k$1, L as L$1, I as I$1 } from "./chunk-J_UQQa3Y.js";
import { l } from "./chunk-9ybk236H.js";
import { u, D as D$1 } from "./chunk-juu6KbdW.js";
import { aY as j$1, es as E, d5 as Ze, d4 as y$1 } from "./chunk-KFNcxJaF.js";
import { x as x$1 } from "./chunk-ewxQmXoN.js";
import "luxon";
import "./chunk-pLXZyeZ7.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-6rQskHzl.js";
import "./chunk-N6hZu8Yl.js";
import "@popperjs/core";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function Y(e2, t2, n, a2) {
  if (1 === a2.length) {
    if (q(a2[0]))
      return l$1(e2, a2[0], -1);
    if ($(a2[0]))
      return l$1(e2, a2[0].toArray(), -1);
  }
  return l$1(e2, a2, -1);
}
async function X(e2, t2, n) {
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
function ee(e2, t2, n = null) {
  for (const a2 in e2)
    if (a2.toLowerCase() === t2.toLowerCase())
      return e2[a2];
  return n;
}
function te(e2) {
  if (null === e2)
    return null;
  const t2 = { type: ee(e2, "type", ""), name: ee(e2, "name", "") };
  if ("range" === t2.type)
    t2.range = ee(e2, "range", []);
  else {
    t2.codedValues = [];
    for (const n of ee(e2, "codedValues", []))
      t2.codedValues.push({ name: ee(n, "name", ""), code: ee(n, "code", null) });
  }
  return t2;
}
function ne(e2) {
  if (null === e2)
    return null;
  const t2 = {}, n = ee(e2, "wkt", null);
  null !== n && (t2.wkt = n);
  const a2 = ee(e2, "wkid", null);
  return null !== a2 && (t2.wkid = a2), t2;
}
function ae(e2) {
  if (null === e2)
    return null;
  const t2 = { hasZ: ee(e2, "hasz", false), hasM: ee(e2, "hasm", false) }, n = ee(e2, "spatialreference", null);
  n && (t2.spatialReference = ne(n));
  const a2 = ee(e2, "x", null);
  if (null !== a2)
    return t2.x = a2, t2.y = ee(e2, "y", null), t2;
  const i = ee(e2, "rings", null);
  if (null !== i)
    return t2.rings = i, t2;
  const r2 = ee(e2, "paths", null);
  if (null !== r2)
    return t2.paths = r2, t2;
  const s = ee(e2, "points", null);
  if (null !== s)
    return t2.points = s, t2;
  for (const o of ["xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"]) {
    const n2 = ee(e2, o, null);
    null !== n2 && (t2[o] = n2);
  }
  return t2;
}
function ie(e2, t2) {
  for (const n of t2)
    if (n === e2)
      return true;
  return false;
}
function re(e2) {
  return !!e2.layerDefinition && (!!e2.featureSet && (false !== ie(e2.layerDefinition.geometryType, ["", null, "esriGeometryNull", "esriGeometryPoint", "esriGeometryPolyline", "esriGeometryPolygon", "esriGeometryMultipoint", "esriGeometryEnvelope"]) && (false !== q(e2.layerDefinition.fields) && false !== q(e2.featureSet.features))));
}
function se(e2) {
  return "utc" === e2?.toLowerCase() ? "UTC" : "unknown" === e2?.toLowerCase() ? "Unknown" : e2;
}
function oe(q$2) {
  "async" === q$2.mode && (q$2.functions.timezone = function(t2, r$1) {
    return q$2.standardFunctionAsync(t2, r$1, async (s, o, l2) => {
      if (ne$1(l2, 1, 2, t2, r$1), K(l2[0]))
        return "Unknown";
      if (X$1(l2[0]))
        return "Unknown";
      if (H(l2[0])) {
        if (await l2[0].load(), 1 === l2.length || null === l2[1])
          return l2[0].datesInUnknownTimezone ? se("unknown") : se(l2[0].dateFieldsTimeZone);
        if (!(l2[1] instanceof N) || false === l2[1].hasField("type"))
          throw new a(t2, r.InvalidParameter, r$1);
        const e2 = l2[1].field("type");
        if (false === P(e2))
          throw new a(t2, r.InvalidParameter, r$1);
        switch (ce(e2).toLowerCase()) {
          case "preferredtimezone":
            return se(l2[0].preferredTimeZone);
          case "editfieldsinfo":
            return se(l2[0].editFieldsInfo?.timeZone ?? null);
          case "timeinfo":
            return se(l2[0].timeInfo?.timeZone ?? null);
          case "field":
            if (l2[1].hasField("fieldname") && P(l2[1].field("fieldname")))
              return se(l2[0].fieldTimeZone(ce(l2[1].field("fieldname"))));
        }
        throw new a(t2, r.InvalidParameter, r$1);
      }
      const f2 = ge(l2[0], qe(t2));
      if (null === f2)
        return null;
      const u2 = f2.timeZone;
      return "system" === u2 ? m.systemTimeZoneCanonicalName : "utc" === u2.toLowerCase() ? "UTC" : "unknown" === u2.toLowerCase() ? "Unknown" : u2;
    });
  }, q$2.functions.sqltimestamp = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ne$1(s, 1, 3, e2, t2);
      const o = s[0];
      if (Q(o)) {
        if (1 === s.length)
          return o.toSQLWithKeyword();
        if (2 === s.length)
          return o.changeTimeZone(ce(s[1])).toSQLWithKeyword();
        throw new a(e2, r.InvalidParameter, t2);
      }
      if (X$1(o))
        return o.toSQLWithKeyword();
      if (H(o)) {
        if (3 !== s.length)
          throw new a(e2, r.InvalidParameter, t2);
        await o.load();
        const n2 = ce(s[1]);
        if (X$1(s[2]))
          return s[2].toSQLWithKeyword();
        if (false === Q(s[2]))
          throw new a(e2, r.InvalidParameter, t2);
        const r$12 = o.fieldTimeZone(n2);
        return null === r$12 ? s[2].toSQLWithKeyword() : s[2].changeTimeZone(r$12).toSQLWithKeyword();
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "sqltimestamp", min: 2, max: 4 }), q$2.functions.featuresetbyid = function(e$12, t2) {
    return q$2.standardFunctionAsync(e$12, t2, (n, r$1, o) => {
      if (ne$1(o, 2, 4, e$12, t2), o[0] instanceof e) {
        const n2 = ce(o[1]);
        let r$12 = L(o[2], null);
        const s = be(L(o[3], true));
        if (null === r$12 && (r$12 = ["*"]), false === q(r$12))
          throw new a(e$12, r.InvalidParameter, t2);
        return o[0].featureSetById(n2, s, r$12);
      }
      throw new a(e$12, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "featuresetbyid", min: 2, max: 4 }), q$2.functions.getfeatureset = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, (n, r$1, s) => {
      if (ne$1(s, 1, 2, e2, t2), U(s[0])) {
        let t3 = L(s[1], "datasource");
        return null === t3 && (t3 = "datasource"), t3 = ce(t3).toLowerCase(), j(s[0].fullSchema(), t3, e2.lrucache, e2.interceptor, e2.spatialReference);
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "getfeatureset", min: 1, max: 2 }), q$2.functions.featuresetbyportalitem = function(e2, n) {
    return q$2.standardFunctionAsync(e2, n, (r$1, s, o) => {
      if (ne$1(o, 2, 5, e2, n), null === o[0])
        throw new a(e2, r.PortalRequired, n);
      if (o[0] instanceof t) {
        const t2 = ce(o[1]), r$12 = ce(o[2]);
        let s2 = L(o[3], null);
        const f3 = be(L(o[4], true));
        if (null === s2 && (s2 = ["*"]), false === q(s2))
          throw new a(e2, r.InvalidParameter, n);
        let u3 = null;
        return u3 = e2.services?.portal ? e2.services.portal : j$1.getDefault(), u3 = l(o[0], u3), q$1(t2, r$12, e2.spatialReference, s2, f3, u3, e2.lrucache, e2.interceptor);
      }
      if (false === P(o[0]))
        throw new a(e2, r.PortalRequired, n);
      const f2 = ce(o[0]), u2 = ce(o[1]);
      let c2 = L(o[2], null);
      const d = be(L(o[3], true));
      if (null === c2 && (c2 = ["*"]), false === q(c2))
        throw new a(e2, r.InvalidParameter, n);
      return q$1(f2, u2, e2.spatialReference, c2, d, e2.services?.portal ?? j$1.getDefault(), e2.lrucache, e2.interceptor);
    });
  }, q$2.signatures.push({ name: "featuresetbyportalitem", min: 2, max: 5 }), q$2.functions.featuresetbyname = function(e$12, t2) {
    return q$2.standardFunctionAsync(e$12, t2, (n, r$1, o) => {
      if (ne$1(o, 2, 4, e$12, t2), o[0] instanceof e) {
        const n2 = ce(o[1]);
        let r$12 = L(o[2], null);
        const s = be(L(o[3], true));
        if (null === r$12 && (r$12 = ["*"]), false === q(r$12))
          throw new a(e$12, r.InvalidParameter, t2);
        return o[0].featureSetByName(n2, s, r$12);
      }
      throw new a(e$12, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "featuresetbyname", min: 2, max: 4 }), q$2.functions.featureset = function(e2, t2) {
    return q$2.standardFunction(e2, t2, (r$1, s, o) => {
      ne$1(o, 1, 1, e2, t2);
      let l2 = o[0];
      const f$1 = { layerDefinition: { geometryType: "", objectIdField: "", hasM: false, hasZ: false, globalIdField: "", typeIdField: "", fields: [] }, featureSet: { geometryType: "", features: [] } };
      if (P(l2))
        l2 = JSON.parse(l2), void 0 !== l2.layerDefinition ? (f$1.layerDefinition = l2.layerDefinition, f$1.featureSet = l2.featureSet, l2.layerDefinition.spatialReference && (f$1.layerDefinition.spatialReference = l2.layerDefinition.spatialReference)) : (f$1.featureSet.features = l2.features, f$1.featureSet.geometryType = l2.geometryType, f$1.layerDefinition.geometryType = f$1.featureSet.geometryType, f$1.layerDefinition.objectIdField = l2.objectIdFieldName ?? "", f$1.layerDefinition.typeIdField = l2.typeIdFieldName, f$1.layerDefinition.globalIdField = l2.globalIdFieldName, f$1.layerDefinition.fields = l2.fields, l2.spatialReference && (f$1.layerDefinition.spatialReference = l2.spatialReference));
      else {
        if (!(o[0] instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        {
          l2 = JSON.parse(o[0].castToText(true));
          const e3 = ee(l2, "layerdefinition");
          if (null !== e3) {
            f$1.layerDefinition.geometryType = ee(e3, "geometrytype", ""), f$1.featureSet.geometryType = f$1.layerDefinition.geometryType, f$1.layerDefinition.globalIdField = ee(e3, "globalidfield", ""), f$1.layerDefinition.objectIdField = ee(e3, "objectidfield", ""), f$1.layerDefinition.typeIdField = ee(e3, "typeidfield", ""), f$1.layerDefinition.hasZ = true === ee(e3, "hasz", false), f$1.layerDefinition.hasM = true === ee(e3, "hasm", false);
            const t3 = ee(e3, "spatialreference", null);
            t3 && (f$1.layerDefinition.spatialReference = ne(t3));
            for (const a2 of ee(e3, "fields", [])) {
              const e4 = { name: ee(a2, "name", ""), alias: ee(a2, "alias", ""), type: ee(a2, "type", ""), nullable: ee(a2, "nullable", true), editable: ee(a2, "editable", true), length: ee(a2, "length", null), domain: te(ee(a2, "domain")) };
              f$1.layerDefinition.fields.push(e4);
            }
            const n = ee(l2, "featureset", null);
            if (n) {
              const e4 = {};
              for (const t4 of f$1.layerDefinition.fields)
                e4[t4.name.toLowerCase()] = t4.name;
              for (const t4 of ee(n, "features", [])) {
                const n2 = {}, a2 = ee(t4, "attributes", {});
                for (const t5 in a2)
                  n2[e4[t5.toLowerCase()]] = a2[t5];
                f$1.featureSet.features.push({ attributes: n2, geometry: ae(ee(t4, "geometry", null)) });
              }
            }
          } else {
            f$1.layerDefinition.hasZ = true === ee(l2, "hasz", false), f$1.layerDefinition.hasM = true === ee(l2, "hasm", false), f$1.layerDefinition.geometryType = ee(l2, "geometrytype", ""), f$1.featureSet.geometryType = f$1.layerDefinition.geometryType, f$1.layerDefinition.objectIdField = ee(l2, "objectidfieldname", ""), f$1.layerDefinition.typeIdField = ee(l2, "typeidfieldname", "");
            const e4 = ee(l2, "spatialreference", null);
            e4 && (f$1.layerDefinition.spatialReference = ne(e4));
            let t3 = ee(l2, "fields", null);
            if (q(t3))
              for (const i of t3) {
                const e5 = { name: ee(i, "name", ""), alias: ee(i, "alias", ""), type: ee(i, "type", ""), nullable: ee(i, "nullable", true), editable: ee(i, "editable", true), length: ee(i, "length", null), domain: te(ee(i, "domain")) };
                f$1.layerDefinition.fields.push(e5);
              }
            else
              t3 = null, f$1.layerDefinition.fields = t3;
            const n = {};
            for (const i of f$1.layerDefinition.fields)
              n[i.name.toLowerCase()] = i.name;
            let a2 = ee(l2, "features", null);
            if (q(a2))
              for (const i of a2) {
                const e5 = {}, t4 = ee(i, "attributes", {});
                for (const a3 in t4)
                  e5[n[a3.toLowerCase()]] = t4[a3];
                f$1.featureSet.features.push({ attributes: e5, geometry: ae(ee(i, "geometry", null)) });
              }
            else
              a2 = null, f$1.featureSet.features = a2;
          }
        }
      }
      if (false === re(f$1))
        throw new a(e2, r.InvalidParameter, t2);
      return f$1.layerDefinition.geometryType || (f$1.layerDefinition.geometryType = "esriGeometryNull"), f.create(f$1, e2.spatialReference);
    });
  }, q$2.signatures.push({ name: "featureset", min: 1, max: 1 }), q$2.functions.filter = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ne$1(s, 2, 2, e2, t2), q(s[0]) || $(s[0])) {
        const n2 = [];
        let r$12 = s[0];
        r$12 instanceof t$1 && (r$12 = r$12.toArray());
        let o = null;
        if (!v(s[1]))
          throw new a(e2, r.InvalidParameter, t2);
        o = s[1].createFunction(e2);
        for (const e3 of r$12) {
          const t3 = o(e3);
          E(t3) ? true === await t3 && n2.push(e3) : true === t3 && n2.push(e3);
        }
        return n2;
      }
      if (H(s[0])) {
        const t3 = await s[0].load(), n2 = x$1.create(s[1], t3.getFieldsIndex(), t3.dateFieldsTimeZoneDefaultUTC), a2 = n2.getVariables();
        if (a2.length > 0) {
          const t4 = [];
          for (let n3 = 0; n3 < a2.length; n3++) {
            const i2 = { name: a2[n3] };
            t4.push(await q$2.evaluateIdentifier(e2, i2));
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
  }, q$2.signatures.push({ name: "filter", min: 2, max: 2 }), q$2.functions.orderby = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ne$1(s, 2, 2, e2, t2), H(s[0])) {
        const e3 = new e$1(s[1]);
        return new a$1({ parentfeatureset: s[0], orderbyclause: e3 });
      }
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "orderby", min: 2, max: 2 }), q$2.functions.top = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      if (ne$1(s, 2, 2, e2, t2), H(s[0]))
        return new a$2({ parentfeatureset: s[0], topnum: s[1] });
      if (q(s[0]))
        return pe(s[1]) >= s[0].length ? s[0].slice(0) : s[0].slice(0, pe(s[1]));
      if ($(s[0]))
        return pe(s[1]) >= s[0].length() ? s[0].slice(0) : s[0].slice(0, pe(s[1]));
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "top", min: 2, max: 2 }), q$2.functions.first = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, a2, i) => {
      if (ne$1(i, 1, 1, e2, t2), H(i[0])) {
        const t3 = await i[0].first(n.abortSignal);
        if (null !== t3) {
          const n2 = D.createFromGraphicLikeObject(t3.geometry, t3.attributes, i[0], e2.timeZone);
          return n2._underlyingGraphic = t3, n2;
        }
        return t3;
      }
      return q(i[0]) ? 0 === i[0].length ? null : i[0][0] : $(i[0]) ? 0 === i[0].length() ? null : i[0].get(0) : null;
    });
  }, q$2.signatures.push({ name: "first", min: 1, max: 1 }), q$2.functions.attachments = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      ne$1(o, 1, 2, e2, t2);
      const l2 = { minsize: -1, maxsize: -1, types: null, returnMetadata: false };
      if (o.length > 1) {
        if (o[1] instanceof N) {
          if (o[1].hasField("minsize") && (l2.minsize = pe(o[1].field("minsize"))), o[1].hasField("metadata") && (l2.returnMetadata = be(o[1].field("metadata"))), o[1].hasField("maxsize") && (l2.maxsize = pe(o[1].field("maxsize"))), o[1].hasField("types")) {
            const e3 = we(o[1].field("types"), false);
            e3.length > 0 && (l2.types = e3);
          }
        } else if (null !== o[1])
          throw new a(e2, r.InvalidParameter, t2);
      }
      if (U(o[0])) {
        let t3 = o[0]._layer;
        return t3 instanceof Ze && (t3 = g(t3, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === t3 ? [] : false === H(t3) ? [] : (await t3.load(), t3.queryAttachments(o[0].field(t3.objectIdField), l2.minsize, l2.maxsize, l2.types, l2.returnMetadata));
      }
      if (null === o[0])
        return [];
      throw new a(e2, r.InvalidParameter, t2);
    });
  }, q$2.signatures.push({ name: "attachments", min: 1, max: 2 }), q$2.functions.featuresetbyrelationshipname = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ne$1(s, 2, 4, e2, t2);
      const o = s[0], l2 = ce(s[1]);
      let d = L(s[2], null);
      const m2 = be(L(s[3], true));
      if (null === d && (d = ["*"]), false === q(d))
        throw new a(e2, r.InvalidParameter, t2);
      if (null === s[0])
        return null;
      if (!U(s[0]))
        throw new a(e2, r.InvalidParameter, t2);
      let y2 = o._layer;
      if (y2 instanceof Ze && (y2 = g(y2, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === y2)
        return null;
      if (false === H(y2))
        return null;
      y2 = await y2.load();
      const w = y2.relationshipMetaData().filter((e3) => e3.name === l2);
      if (0 === w.length)
        return null;
      if (void 0 !== w[0].relationshipTableId && null !== w[0].relationshipTableId && w[0].relationshipTableId > -1)
        return k(y2, w[0], o.field(y2.objectIdField), y2.spatialReference, d, m2, e2.lrucache, e2.interceptor);
      let g$1 = y2.serviceUrl();
      if (!g$1)
        return null;
      g$1 = "/" === g$1.charAt(g$1.length - 1) ? g$1 + w[0].relatedTableId.toString() : g$1 + "/" + w[0].relatedTableId.toString();
      const I2 = await F(g$1, y2.spatialReference, d, m2, e2.lrucache, e2.interceptor);
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
      const T2 = x$1.create(D2[0].keyField + "= @id", I2.getFieldsIndex(), I2.dateFieldsTimeZoneDefaultUTC);
      return T2.parameters = { id: o.field(w[0].keyField) }, I2.filter(T2);
    });
  }, q$2.signatures.push({ name: "featuresetbyrelationshipname", min: 2, max: 4 }), q$2.functions.featuresetbyassociation = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (n, r$1, s) => {
      ne$1(s, 2, 3, e2, t2);
      const o = s[0], l2 = ce(L(s[1], "")).toLowerCase(), u2 = P(s[2]) ? ce(s[2]) : null;
      if (null === s[0])
        return null;
      if (!U(s[0]))
        throw new a(e2, r.InvalidParameter, t2);
      let c2 = o._layer;
      if (c2 instanceof Ze && (c2 = g(c2, e2.spatialReference, ["*"], true, e2.lrucache, e2.interceptor)), null === c2)
        return null;
      if (false === H(c2))
        return null;
      await c2.load();
      const m2 = c2.serviceUrl(), y$2 = await T(m2, e2.spatialReference);
      let w = null, I$2 = null, D2 = false;
      if (null !== u2 && "" !== u2 && void 0 !== u2) {
        for (const e3 of y$2.terminals)
          e3.terminalName === u2 && (I$2 = e3.terminalId);
        null === I$2 && (D2 = true);
      }
      const T$1 = y$2.associations.getFieldsIndex(), b$1 = T$1.get("TOGLOBALID").name, A = T$1.get("FROMGLOBALID").name, x = T$1.get("TOTERMINALID").name, L$2 = T$1.get("FROMTERMINALID").name, S = T$1.get("FROMNETWORKSOURCEID").name, C = T$1.get("TONETWORKSOURCEID").name, v2 = T$1.get("ASSOCIATIONTYPE").name, M = T$1.get("ISCONTENTVISIBLE").name, k2 = T$1.get("OBJECTID").name;
      for (const e3 of c2.fields)
        if ("global-id" === e3.type) {
          w = o.field(e3.name);
          break;
        }
      let O = null, z = new B(new y$1({ name: "percentalong", alias: "percentalong", type: "double" }), x$1.create("0", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), W = new B(new y$1({ name: "side", alias: "side", type: "string" }), x$1.create("''", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
      const H$1 = "globalid", _ = "globalId", q2 = {};
      for (const e3 in y$2.lkp)
        q2[e3] = y$2.lkp[e3].sourceId;
      const B$1 = new b(new y$1({ name: "classname", alias: "classname", type: "string" }), null, q2);
      let J = "";
      switch (l2) {
        case "midspan": {
          J = `((${b$1}='${w}') OR ( ${A}='${w}')) AND (${v2} IN (5))`, B$1.codefield = x$1.create(`CASE WHEN (${b$1}='${w}') THEN ${S} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const e3 = y(L$1.findField(y$2.associations.fields, A));
          e3.name = H$1, e3.alias = H$1, O = new B(e3, x$1.create(`CASE WHEN (${A}='${w}') THEN ${b$1} ELSE ${A} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), z = y$2.unVersion >= 4 ? new I$1(L$1.findField(y$2.associations.fields, T$1.get("PERCENTALONG").name)) : new B(new y$1({ name: "percentalong", alias: "percentalong", type: "double" }), x$1.create("0", y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "junctionedge": {
          J = `((${b$1}='${w}') OR ( ${A}='${w}')) AND (${v2} IN (4,6))`, B$1.codefield = x$1.create(`CASE WHEN (${b$1}='${w}') THEN ${S} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const e3 = y(L$1.findField(y$2.associations.fields, A));
          e3.name = H$1, e3.alias = H$1, O = new B(e3, x$1.create(`CASE WHEN (${A}='${w}') THEN ${b$1} ELSE ${A} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC)), W = new B(new y$1({ name: "side", alias: "side", type: "string" }), x$1.create(`CASE WHEN (${v2}=4) THEN 'from' ELSE 'to' END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "connected": {
          let e3 = `${b$1}='@T'`, t3 = `${A}='@T'`;
          null !== I$2 && (e3 += ` AND ${x}=@A`, t3 += ` AND ${L$2}=@A`), J = "((" + e3 + ") OR (" + t3 + "))", J = I(J, "@T", w ?? ""), e3 = I(e3, "@T", w ?? ""), null !== I$2 && (e3 = I(e3, "@A", I$2.toString()), J = I(J, "@A", I$2.toString())), B$1.codefield = x$1.create("CASE WHEN " + e3 + ` THEN ${S} ELSE ${C} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC);
          const n2 = y(L$1.findField(y$2.associations.fields, A));
          n2.name = H$1, n2.alias = H$1, O = new B(n2, x$1.create("CASE WHEN " + e3 + ` THEN ${A} ELSE ${b$1} END`, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC));
          break;
        }
        case "container":
          J = `${b$1}='${w}' AND ${v2} = 2`, null !== I$2 && (J += ` AND ${x} = ` + I$2.toString()), B$1.codefield = S, J = "( " + J + " )", O = new k$1(L$1.findField(y$2.associations.fields, A), H$1, H$1);
          break;
        case "content":
          J = `(${A}='${w}' AND ${v2} = 2)`, null !== I$2 && (J += ` AND ${L$2} = ` + I$2.toString()), B$1.codefield = C, J = "( " + J + " )", O = new k$1(L$1.findField(y$2.associations.fields, b$1), H$1, H$1);
          break;
        case "structure":
          J = `(${b$1}='${w}' AND ${v2} = 3)`, null !== I$2 && (J += ` AND ${x} = ` + I$2.toString()), B$1.codefield = S, J = "( " + J + " )", O = new k$1(L$1.findField(y$2.associations.fields, A), H$1, _);
          break;
        case "attached":
          J = `(${A}='${w}' AND ${v2} = 3)`, null !== I$2 && (J += ` AND ${L$2} = ` + I$2.toString()), B$1.codefield = C, J = "( " + J + " )", O = new k$1(L$1.findField(y$2.associations.fields, b$1), H$1, _);
          break;
        default:
          throw new a(e2, r.InvalidParameter, t2);
      }
      D2 && (J = "1 <> 1");
      return new L$1({ parentfeatureset: y$2.associations, adaptedFields: [new I$1(L$1.findField(y$2.associations.fields, k2)), new I$1(L$1.findField(y$2.associations.fields, M)), O, W, B$1, z], extraFilter: J ? x$1.create(J, y$2.associations.getFieldsIndex(), y$2.associations.dateFieldsTimeZoneDefaultUTC) : null });
    });
  }, q$2.signatures.push({ name: "featuresetbyassociation", min: 2, max: 6 }), q$2.functions.groupby = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      if (ne$1(o, 3, 3, e2, t2), !H(o[0]))
        throw new a(e2, r.InvalidParameter, t2);
      const l2 = await o[0].load(), f2 = [], u2 = [];
      let c2 = false, d = [];
      if (P(o[1]))
        d.push(o[1]);
      else if (o[1] instanceof N)
        d.push(o[1]);
      else if (q(o[1]))
        d = o[1];
      else {
        if (!$(o[1]))
          throw new a(e2, r.InvalidParameter, t2);
        d = o[1].toArray();
      }
      for (const m2 of d)
        if (P(m2)) {
          const e3 = x$1.create(ce(m2), l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC), t3 = true === D$1(e3) ? ce(m2) : "%%%%FIELDNAME";
          f2.push({ name: t3, expression: e3 }), "%%%%FIELDNAME" === t3 && (c2 = true);
        } else {
          if (!(m2 instanceof N))
            throw new a(e2, r.InvalidParameter, t2);
          {
            const n = m2.hasField("name") ? m2.field("name") : "%%%%FIELDNAME", r$12 = m2.hasField("expression") ? m2.field("expression") : "";
            if ("%%%%FIELDNAME" === n && (c2 = true), !n)
              throw new a(e2, r.InvalidParameter, t2);
            f2.push({ name: n, expression: x$1.create(r$12 || n, l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC) });
          }
        }
      if (d = [], P(o[2]))
        d.push(o[2]);
      else if (q(o[2]))
        d = o[2];
      else if ($(o[2]))
        d = o[2].toArray();
      else {
        if (!(o[2] instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        d.push(o[2]);
      }
      for (const m2 of d) {
        if (!(m2 instanceof N))
          throw new a(e2, r.InvalidParameter, t2);
        {
          const n = m2.hasField("name") ? m2.field("name") : "", r$12 = m2.hasField("statistic") ? m2.field("statistic") : "", s2 = m2.hasField("expression") ? m2.field("expression") : "";
          if (!n || !r$12 || !s2)
            throw new a(e2, r.InvalidParameter, t2);
          u2.push({ name: n, statistic: r$12.toLowerCase(), expression: x$1.create(s2, l2.getFieldsIndex(), l2.dateFieldsTimeZoneDefaultUTC) });
        }
      }
      if (c2) {
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
        await X(t3.expression, q$2, e2);
      for (const t3 of u2)
        await X(t3.expression, q$2, e2);
      return o[0].groupby(f2, u2);
    });
  }, q$2.signatures.push({ name: "groupby", min: 3, max: 3 }), q$2.functions.distinct = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (r$1, s, o) => {
      if (H(o[0])) {
        ne$1(o, 2, 2, e2, t2);
        const r$12 = await o[0].load(), s2 = [];
        let l2 = [];
        if (P(o[1]))
          l2.push(o[1]);
        else if (o[1] instanceof N)
          l2.push(o[1]);
        else if (q(o[1]))
          l2 = o[1];
        else {
          if (!$(o[1]))
            throw new a(e2, r.InvalidParameter, t2);
          l2 = o[1].toArray();
        }
        let f2 = false;
        for (const o2 of l2)
          if (P(o2)) {
            const e3 = x$1.create(ce(o2), r$12.getFieldsIndex(), r$12.dateFieldsTimeZoneDefaultUTC), t3 = true === D$1(e3) ? ce(o2) : "%%%%FIELDNAME";
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
          await X(t3.expression, q$2, e2);
        return o[0].groupby(s2, []);
      }
      return Y("distinct", r$1, s, o);
    });
  }), q$2.functions.getfeaturesetinfo = function(e2, t2) {
    return q$2.standardFunctionAsync(e2, t2, async (a2, i, r2) => {
      if (ne$1(r2, 1, 1, e2, t2), !H(r2[0]))
        return null;
      const s = await r2[0].getFeatureSetInfo();
      return s ? N.convertObjectToArcadeDictionary({ layerId: s.layerId, layerName: s.layerName, itemId: s.itemId, serviceLayerUrl: s.serviceLayerUrl, webMapLayerId: s.webMapLayerId ?? null, webMapLayerTitle: s.webMapLayerTitle ?? null, className: null, objectClassId: null }, qe(e2), false, false) : null;
    });
  }, q$2.signatures.push({ name: "getfeaturesetinfo", min: 1, max: 1 });
}
export {
  oe as registerFunctions
};
