import { bo as e, bp as y$1, ul as j, br as c$c, cO as f$1, cL as y$2, cJ as m$5, bt as S, sq as o, ct as o$1, cN as r, bb as s$2, aM as s$3, g0 as i$3, a$ as j$2, t4 as qt, rK as t$1, fK as f$2, c7 as s$4, A4 as a$3, cy as x$1, bf as c$d, dy as m$6, ap as M$1, c_ as d$1, cZ as f$3, bX as k$1, be as R$2, wE as o$2, jk as i$4, pd as n$4, cw as p$6, g2 as v$1, bh as V, cB as a$5, cD as t$2, cl as u$4, cm as j$4, cn as m$8, e3 as v$2, db as o$5, dz as u$5, ds as N$1, cF as s$5, A5 as y$4, a_ as I, aX as S$3, aY as j$5, aV as f$4, aW as i$6, bI as b$1, jl as o$6, d0 as k$2, c2 as F, de as b$2, jX as j$6, bN as b$3 } from "./chunk-KFNcxJaF.js";
import { U as U$1, y as y$3, s as s$1, R as R$1, r as r$1, a as j$1, b, n as n$3, o as o$3, w, d as S$1, D as D$1, e as a$4, k, i as i$5, f as o$4, l as l$4, m as m$7, c as c$e, C as C$1, T, j as j$3, O as O$1, S as S$2, g as c$f } from "./chunk-DofnyZMT.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let p$5 = class p extends f$1 {
  constructor(o2) {
    super(o2), this.break = new y$2({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.first = new y$2({ color: [0, 255, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.unlocated = new y$2({ color: [255, 0, 0], size: 12, outline: { color: [255, 255, 255], width: 3 } }), this.last = new y$2({ color: [255, 0, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.middle = new y$2({ color: [51, 51, 51], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.waypoint = new y$2({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } });
  }
};
e([y$1({ types: j })], p$5.prototype, "break", void 0), e([y$1({ types: j })], p$5.prototype, "first", void 0), e([y$1({ types: j })], p$5.prototype, "unlocated", void 0), e([y$1({ types: j })], p$5.prototype, "last", void 0), e([y$1({ types: j })], p$5.prototype, "middle", void 0), e([y$1({ types: j })], p$5.prototype, "waypoint", void 0), p$5 = e([c$c("esri.layers.support.RouteStopSymbols")], p$5);
const l$3 = p$5;
let c$b = class c extends f$1 {
  constructor(o2) {
    super(o2), this.directionLines = new m$5({ color: [0, 122, 194], width: 6 }), this.directionPoints = new y$2({ color: [255, 255, 255], size: 6, outline: { color: [0, 122, 194], width: 2 } }), this.pointBarriers = new y$2({ style: "x", size: 10, outline: { color: [255, 0, 0], width: 3 } }), this.polygonBarriers = new S({ color: [255, 170, 0, 0.6], outline: { width: 7.5, color: [255, 0, 0, 0.6] } }), this.polylineBarriers = new m$5({ width: 7.5, color: [255, 85, 0, 0.7] }), this.routeInfo = new m$5({ width: 8, color: [20, 89, 127] }), this.stops = new l$3();
  }
};
e([y$1({ types: j })], c$b.prototype, "directionLines", void 0), e([y$1({ types: j })], c$b.prototype, "directionPoints", void 0), e([y$1({ types: j })], c$b.prototype, "pointBarriers", void 0), e([y$1({ types: j })], c$b.prototype, "polygonBarriers", void 0), e([y$1({ types: j })], c$b.prototype, "polylineBarriers", void 0), e([y$1({ types: j })], c$b.prototype, "routeInfo", void 0), e([y$1({ type: l$3 })], c$b.prototype, "stops", void 0), c$b = e([c$c("esri.layers.support.RouteSymbols")], c$b);
const n$2 = c$b;
let u$3 = class u extends f$1 {
  constructor(t2) {
    super(t2), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
e([y$1({ type: String })], u$3.prototype, "dataType", void 0), e([o(U$1, { ignoreUnknown: false })], u$3.prototype, "name", void 0), e([y$1({ type: [String] })], u$3.prototype, "parameterNames", void 0), e([y$1({ type: String })], u$3.prototype, "restrictionUsageParameterName", void 0), e([o(y$3, { ignoreUnknown: false })], u$3.prototype, "timeNeutralAttributeName", void 0), e([y$1({ type: String })], u$3.prototype, "trafficSupport", void 0), e([o(s$1)], u$3.prototype, "units", void 0), e([o(R$1)], u$3.prototype, "usageType", void 0), u$3 = e([c$c("esri.rest.support.NetworkAttribute")], u$3);
const m$4 = u$3;
let p$4 = class p2 extends f$1 {
  constructor(t2) {
    super(t2), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
e([y$1({ type: Number })], p$4.prototype, "buildTime", void 0), e([y$1({ type: String })], p$4.prototype, "name", void 0), e([y$1({ type: [m$4] })], p$4.prototype, "networkAttributes", void 0), e([y$1()], p$4.prototype, "networkSources", void 0), e([y$1({ type: String })], p$4.prototype, "state", void 0), p$4 = e([c$c("esri.rest.support.NetworkDataset")], p$4);
const i$2 = p$4;
let c$a = class c2 extends f$1 {
  constructor(t2) {
    super(t2), this.accumulateAttributeNames = null, this.attributeParameterValues = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => U$1.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e2, r2) {
    t2?.length && (e2[r2] = t2.map((t3) => U$1.toJSON(t3)));
  }
  readDefaultTravelMode(t2, e2) {
    const r2 = e2.supportedTravelModes?.find(({ id: t3 }) => t3 === e2.defaultTravelMode) ?? e2.supportedTravelModes?.find(({ itemId: t3 }) => t3 === e2.defaultTravelMode);
    return r2 ? j$1.fromJSON(r2) : null;
  }
};
e([y$1()], c$a.prototype, "accumulateAttributeNames", void 0), e([o$1("accumulateAttributeNames")], c$a.prototype, "readAccumulateAttributes", null), e([r("accumulateAttributeNames")], c$a.prototype, "writeAccumulateAttributes", null), e([y$1()], c$a.prototype, "attributeParameterValues", void 0), e([y$1()], c$a.prototype, "currentVersion", void 0), e([y$1()], c$a.prototype, "defaultTravelMode", void 0), e([o$1("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])], c$a.prototype, "readDefaultTravelMode", null), e([y$1()], c$a.prototype, "directionsLanguage", void 0), e([o(r$1)], c$a.prototype, "directionsLengthUnits", void 0), e([y$1()], c$a.prototype, "directionsSupportedLanguages", void 0), e([o(y$3, { ignoreUnknown: false })], c$a.prototype, "directionsTimeAttribute", void 0), e([y$1()], c$a.prototype, "hasZ", void 0), e([o(U$1, { ignoreUnknown: false })], c$a.prototype, "impedance", void 0), e([y$1({ type: i$2 })], c$a.prototype, "networkDataset", void 0), e([y$1({ type: [j$1] })], c$a.prototype, "supportedTravelModes", void 0), c$a = e([c$c("esri.rest.support.NetworkServiceDescription")], c$a);
const m$3 = c$a;
const l$2 = s$2.getLogger("esri.rest.networkService");
function u$2(e2, r2, t2, o2) {
  o2[t2] = [r2.length, r2.length + e2.length], e2.forEach((e3) => {
    r2.push(e3.geometry);
  });
}
function f(e2, r2) {
  for (let t2 = 0; t2 < r2.length; t2++) {
    const o2 = e2[r2[t2]];
    if (o2 && o2.length)
      for (const e3 of o2)
        e3.z = void 0;
  }
  l$2.warnOnce("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
}
function c$9(e2, r2) {
  for (let t2 = 0; t2 < r2.length; t2++) {
    const o2 = e2[r2[t2]];
    if (o2 && o2.length) {
      for (const e3 of o2)
        if (null != e3 && e3.hasZ)
          return true;
    }
  }
  return false;
}
async function d(t2, o2, s2) {
  if (!t2)
    throw new s$3("network-service:missing-url", "Url to Network service is missing");
  const n3 = i$3({ f: "json", token: o2 }, s2), { data: l2 } = await j$2(t2, n3), u3 = l2.currentVersion >= 10.4 ? p$3(t2, o2, s2) : v(t2, s2), { defaultTravelMode: f2, supportedTravelModes: c7 } = await u3;
  return l2.defaultTravelMode = f2, l2.supportedTravelModes = c7, m$3.fromJSON(l2);
}
async function v(r2, t2) {
  const i2 = i$3({ f: "json" }, t2), { data: l2 } = await j$2(r2.replace(/\/rest\/.*$/i, "/info"), i2);
  if (!l2?.owningSystemUrl)
    return { supportedTravelModes: [], defaultTravelMode: null };
  const { owningSystemUrl: u3 } = l2, f2 = qt(u3) + "/sharing/rest/portals/self", { data: c7 } = await j$2(f2, i2), d2 = t$1("helperServices.routingUtilities.url", c7);
  if (!d2)
    return { supportedTravelModes: [], defaultTravelMode: null };
  const v2 = f$2(u3), p4 = /\/solve$/i.test(v2.path) ? "Route" : /\/solveclosestfacility$/i.test(v2.path) ? "ClosestFacility" : "ServiceAreas", m3 = i$3({ f: "json", serviceName: p4 }, t2), h = qt(d2) + "/GetTravelModes/execute", g = await j$2(h, m3), w2 = [];
  let T2 = null;
  if (g?.data?.results?.length) {
    const e2 = g.data.results;
    for (const r3 of e2)
      if ("supportedTravelModes" === r3.paramName) {
        if (r3.value?.features) {
          for (const { attributes: e3 } of r3.value.features)
            if (e3) {
              const r4 = JSON.parse(e3.TravelMode);
              w2.push(r4);
            }
        }
      } else
        "defaultTravelMode" === r3.paramName && (T2 = r3.value);
  }
  return { supportedTravelModes: w2, defaultTravelMode: T2 };
}
async function p$3(t2, o2, n3) {
  try {
    const r2 = i$3({ f: "json", token: o2 }, n3), i2 = qt(t2) + "/retrieveTravelModes", { data: { supportedTravelModes: l2, defaultTravelMode: u3 } } = await j$2(i2, r2);
    return { supportedTravelModes: l2, defaultTravelMode: u3 };
  } catch (i2) {
    throw new s$3("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: i2 });
  }
}
const p$2 = new s$4({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
let c$8 = class c3 extends a$3 {
  constructor(r2) {
    super(r2), this.type = null;
  }
};
e([y$1({ type: String, json: { read: p$2.read, write: p$2.write } })], c$8.prototype, "type", void 0), c$8 = e([c$c("esri.rest.support.NAMessage")], c$8);
const a$2 = c$8;
let c$7 = class c4 extends f$1 {
  constructor(r2) {
    super(r2);
  }
};
e([y$1({ json: { read: { source: "string" } } })], c$7.prototype, "text", void 0), e([o(b, { name: "stringType" })], c$7.prototype, "type", void 0), c$7 = e([c$c("esri.rest.support.DirectionsString")], c$7);
const i$1 = c$7;
let a$1 = class a extends f$1 {
  constructor(r2) {
    super(r2), this.arriveTime = null, this.arriveTimeOffset = null, this.geometry = null, this.strings = null;
  }
  readArriveTimeOffset(r2, e2) {
    return n$3(e2.ETA, e2.arriveTimeUTC);
  }
  readGeometry(r2, e2) {
    return x$1.fromJSON(e2.point);
  }
};
e([y$1({ type: Date, json: { read: { source: "arriveTimeUTC" } } })], a$1.prototype, "arriveTime", void 0), e([y$1()], a$1.prototype, "arriveTimeOffset", void 0), e([o$1("arriveTimeOffset", ["arriveTimeUTC", "ETA"])], a$1.prototype, "readArriveTimeOffset", null), e([y$1({ type: x$1 })], a$1.prototype, "geometry", void 0), e([o$1("geometry", ["point"])], a$1.prototype, "readGeometry", null), e([y$1({ type: [i$1] })], a$1.prototype, "strings", void 0), a$1 = e([c$c("esri.rest.support.DirectionsEvent")], a$1);
const c$6 = a$1;
function i(r2) {
  if (null == r2 || "" === r2)
    return null;
  let e2 = 0, t2 = 0, s2 = 0, o2 = 0;
  const p4 = [];
  let n3, c7, i2, a3, m3, l2, u3, f2, y2 = 0, d2 = 0, h = 0;
  if (m3 = r2.match(/((\+|\-)[^\+\-\|]+|\|)/g), m3 || (m3 = []), 0 === parseInt(m3[y2], 32)) {
    y2 = 2;
    const r3 = parseInt(m3[y2], 32);
    y2++, l2 = parseInt(m3[y2], 32), y2++, 1 & r3 && (d2 = m3.indexOf("|") + 1, u3 = parseInt(m3[d2], 32), d2++), 2 & r3 && (h = m3.indexOf("|", d2) + 1, f2 = parseInt(m3[h], 32), h++);
  } else
    l2 = parseInt(m3[y2], 32), y2++;
  for (; y2 < m3.length && "|" !== m3[y2]; ) {
    n3 = parseInt(m3[y2], 32) + e2, y2++, e2 = n3, c7 = parseInt(m3[y2], 32) + t2, y2++, t2 = c7;
    const r3 = [n3 / l2, c7 / l2];
    d2 && (a3 = parseInt(m3[d2], 32) + s2, d2++, s2 = a3, r3.push(a3 / u3)), h && (i2 = parseInt(m3[h], 32) + o2, h++, o2 = i2, r3.push(i2 / f2)), p4.push(r3);
  }
  return { paths: [p4], hasZ: d2 > 0, hasM: h > 0 };
}
let a2 = class extends c$d {
  constructor(r2) {
    super(r2), this.events = null, this.strings = null;
  }
  readGeometry(r2, e2) {
    const t2 = i(e2.compressedGeometry);
    return null != t2 ? m$6.fromJSON(t2) : null;
  }
};
e([y$1({ type: [c$6] })], a2.prototype, "events", void 0), e([o$1("geometry", ["compressedGeometry"])], a2.prototype, "readGeometry", null), e([y$1({ type: [i$1] })], a2.prototype, "strings", void 0), a2 = e([c$c("esri.rest.support.DirectionsFeature")], a2);
const m$2 = a2;
function u$1(e2, t2) {
  if (0 === e2.length)
    return new m$6({ spatialReference: t2 });
  const r2 = [];
  for (const n3 of e2)
    for (const e3 of n3.paths)
      r2.push(...e3);
  const o2 = [];
  r2.forEach((e3, t3) => {
    0 !== t3 && e3[0] === r2[t3 - 1][0] && e3[1] === r2[t3 - 1][1] || o2.push(e3);
  });
  const { hasM: s2, hasZ: a3 } = e2[0];
  return new m$6({ hasM: s2, hasZ: a3, paths: [o2], spatialReference: t2 });
}
let m$1 = class m extends d$1 {
  constructor(e2) {
    super(e2), this.extent = null, this.features = [], this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(e2, t2) {
    if (!e2)
      return [];
    const r2 = t2.summary.envelope.spatialReference ?? t2.spatialReference, o2 = r2 && f$3.fromJSON(r2);
    return e2.map((e3) => {
      const t3 = m$2.fromJSON(e3);
      if (null != t3.geometry && (t3.geometry.spatialReference = o2), null != t3.events)
        for (const r3 of t3.events)
          null != r3.geometry && (r3.geometry.spatialReference = o2);
      return t3;
    });
  }
  get mergedGeometry() {
    if (!this.features)
      return null;
    return u$1(this.features.map(({ geometry: e2 }) => e2), this.extent.spatialReference);
  }
  get strings() {
    return this.features.flatMap(({ strings: e2 }) => e2).filter(k$1);
  }
};
e([y$1({ type: M$1, json: { read: { source: "summary.envelope" } } })], m$1.prototype, "extent", void 0), e([y$1({ nonNullable: true })], m$1.prototype, "features", void 0), e([o$1("features")], m$1.prototype, "readFeatures", null), e([y$1()], m$1.prototype, "geometryType", void 0), e([y$1({ readOnly: true })], m$1.prototype, "mergedGeometry", null), e([y$1()], m$1.prototype, "routeId", void 0), e([y$1()], m$1.prototype, "routeName", void 0), e([y$1({ value: null, readOnly: true })], m$1.prototype, "strings", null), e([y$1({ json: { read: { source: "summary.totalDriveTime" } } })], m$1.prototype, "totalDriveTime", void 0), e([y$1({ json: { read: { source: "summary.totalLength" } } })], m$1.prototype, "totalLength", void 0), e([y$1({ json: { read: { source: "summary.totalTime" } } })], m$1.prototype, "totalTime", void 0), m$1 = e([c$c("esri.rest.support.DirectionsFeatureSet")], m$1);
const c$5 = m$1;
let n$1 = class n extends f$1 {
  constructor(t2) {
    super(t2), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null, this.traversedEdges = null, this.traversedJunctions = null, this.traversedTurns = null;
  }
};
e([y$1({ type: d$1, json: { write: true } })], n$1.prototype, "directionLines", void 0), e([y$1({ type: d$1, json: { write: true } })], n$1.prototype, "directionPoints", void 0), e([y$1({ type: c$5, json: { write: true } })], n$1.prototype, "directions", void 0), e([y$1({ type: c$d, json: { write: true } })], n$1.prototype, "route", void 0), e([y$1({ type: String, json: { write: true } })], n$1.prototype, "routeName", void 0), e([y$1({ type: [c$d], json: { write: true } })], n$1.prototype, "stops", void 0), e([y$1({ type: d$1, json: { write: true } })], n$1.prototype, "traversedEdges", void 0), e([y$1({ type: d$1, json: { write: true } })], n$1.prototype, "traversedJunctions", void 0), e([y$1({ type: d$1, json: { write: true } })], n$1.prototype, "traversedTurns", void 0), n$1 = e([c$c("esri.rest.support.RouteResult")], n$1);
const u2 = n$1;
function n2(r2) {
  return r2 ? d$1.fromJSON(r2).features.filter(k$1) : [];
}
let c$4 = class c5 extends f$1 {
  constructor(r2) {
    super(r2), this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r2, o2) {
    return n2(o2.barriers);
  }
  readPolylineBarriers(r2) {
    return n2(r2);
  }
  readPolygonBarriers(r2) {
    return n2(r2);
  }
};
e([y$1({ type: [a$2] })], c$4.prototype, "messages", void 0), e([y$1({ type: [c$d] })], c$4.prototype, "pointBarriers", void 0), e([o$1("pointBarriers", ["barriers"])], c$4.prototype, "readPointBarriers", null), e([y$1({ type: [c$d] })], c$4.prototype, "polylineBarriers", void 0), e([o$1("polylineBarriers")], c$4.prototype, "readPolylineBarriers", null), e([y$1({ type: [c$d] })], c$4.prototype, "polygonBarriers", void 0), e([o$1("polygonBarriers")], c$4.prototype, "readPolygonBarriers", null), e([y$1({ type: [u2] })], c$4.prototype, "routeResults", void 0), c$4 = e([c$c("esri.rest.support.RouteSolveResult")], c$4);
const y = c$4;
function c$3(e2) {
  return e2 instanceof d$1;
}
async function l$1(f$12, p4, l2) {
  const y2 = [], d$12 = [], g = {}, h = {}, R2 = f$2(f$12), { path: v2 } = R2;
  c$3(p4.stops) && u$2(p4.stops.features, d$12, "stops.features", g), c$3(p4.pointBarriers) && u$2(p4.pointBarriers.features, d$12, "pointBarriers.features", g), c$3(p4.polylineBarriers) && u$2(p4.polylineBarriers.features, d$12, "polylineBarriers.features", g), c$3(p4.polygonBarriers) && u$2(p4.polygonBarriers.features, d$12, "polygonBarriers.features", g);
  const B = await R$2(d$12);
  for (const e2 in g) {
    const r2 = g[e2];
    y2.push(e2), h[e2] = B.slice(r2[0], r2[1]);
  }
  if (c$9(h, y2)) {
    let e2 = null;
    try {
      e2 = await d(v2, p4.apiKey, l2);
    } catch {
    }
    e2 && !e2.hasZ && f(h, y2);
  }
  for (const e2 in h)
    h[e2].forEach((t2, s2) => {
      o$2(p4, e2)[s2].geometry = t2;
    });
  const E = { ...l2, query: { ...R2.query, ...o$3(p4), f: "json" } }, T2 = v2.endsWith("/solve") ? v2 : `${v2}/solve`, { data: b2 } = await j$2(T2, E);
  return m2(b2);
}
function m2(e2) {
  const { barriers: r2, directionLines: t2, directionPoints: s2, directions: o2, messages: a3, polygonBarriers: i2, polylineBarriers: n3, routes: u3, stops: f2, traversedEdges: c7, traversedJunctions: l2, traversedTurns: m3 } = e2, y$12 = (e3) => {
    const r3 = g.find((r4) => r4.routeName === e3);
    if (null != r3)
      return r3;
    const t3 = { routeId: g.length + 1, routeName: e3 };
    return g.push(t3), t3;
  }, d2 = (e3) => {
    const r3 = g.find((r4) => r4.routeId === e3);
    if (null != r3)
      return r3;
    const t3 = { routeId: e3, routeName: null };
    return g.push(t3), t3;
  }, g = [];
  u3?.features.forEach((e3, r3) => {
    e3.geometry.spatialReference = u3.spatialReference ?? void 0;
    const t3 = e3.attributes.Name, s3 = r3 + 1;
    g.push({ routeId: s3, routeName: t3, route: e3 });
  }), o2?.forEach((e3) => {
    const { routeName: r3 } = e3;
    y$12(r3).directions = e3;
  });
  const h = (f2?.features.every((e3) => null == e3.attributes.RouteName) ?? false) && g.length > 0 ? g[0].routeName : null;
  return f2?.features.forEach((e3) => {
    e3.geometry && (e3.geometry.spatialReference ??= f2.spatialReference ?? void 0);
    const r3 = h ?? e3.attributes.RouteName, t3 = y$12(r3);
    t3.stops ??= [], t3.stops.push(e3);
  }), t2?.features.forEach((e3) => {
    const r3 = e3.attributes.RouteID, s3 = d2(r3), { geometryType: o3, spatialReference: a4 } = t2;
    s3.directionLines ??= { features: [], geometryType: o3, spatialReference: a4 }, s3.directionLines.features.push(e3);
  }), s2?.features.forEach((e3) => {
    const r3 = e3.attributes.RouteID, t3 = d2(r3), { geometryType: o3, spatialReference: a4 } = s2;
    t3.directionPoints ??= { features: [], geometryType: o3, spatialReference: a4 }, t3.directionPoints.features.push(e3);
  }), c7?.features.forEach((e3) => {
    const r3 = e3.attributes.RouteID, t3 = d2(r3), { geometryType: s3, spatialReference: o3 } = c7;
    t3.traversedEdges ??= { features: [], geometryType: s3, spatialReference: o3 }, t3.traversedEdges.features.push(e3);
  }), l2?.features.forEach((e3) => {
    const r3 = e3.attributes.RouteID, t3 = d2(r3), { geometryType: s3, spatialReference: o3 } = l2;
    t3.traversedJunctions ??= { features: [], geometryType: s3, spatialReference: o3 }, t3.traversedJunctions.features.push(e3);
  }), m3?.features.forEach((e3) => {
    const r3 = e3.attributes.RouteID, t3 = d2(r3);
    t3.traversedTurns ??= { features: [] }, t3.traversedTurns.features.push(e3);
  }), y.fromJSON({ routeResults: g, barriers: r2, polygonBarriers: i2, polylineBarriers: n3, messages: a3 });
}
const t = { type: String, json: { read: { source: "token" }, write: { target: "token" } } };
let l = class extends i$4(f$1) {
  constructor(o2) {
    super(o2), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
e([y$1({ type: Boolean, json: { write: true } })], l.prototype, "doNotLocateOnRestrictedElements", void 0), e([y$1({ types: n$4, json: { read: p$6, write: true } })], l.prototype, "geometry", void 0), e([o(w)], l.prototype, "geometryType", void 0), e([y$1({ type: String, json: { name: "layerName", write: true } })], l.prototype, "name", void 0), e([o(S$1, { name: "spatialRel" })], l.prototype, "spatialRelationship", void 0), e([y$1({ type: String, json: { write: true } })], l.prototype, "type", void 0), e([y$1({ type: String, json: { write: true } })], l.prototype, "where", void 0), l = e([c$c("esri.rest.support.DataLayer")], l);
const c$2 = l;
var s;
let c$1 = s = class extends d$1 {
  constructor(e2) {
    super(e2), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new s({ doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements, ...this.cloneProperties() });
  }
};
e([y$1({ type: Boolean, json: { write: true } })], c$1.prototype, "doNotLocateOnRestrictedElements", void 0), c$1 = s = e([c$c("esri.rest.support.NetworkFeatureSet")], c$1);
const p$1 = c$1;
let p3 = class extends i$4(f$1) {
  constructor(o2) {
    super(o2), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
e([y$1({ type: Boolean, json: { write: true } })], p3.prototype, "doNotLocateOnRestrictedElements", void 0), e([y$1({ type: String, json: { write: true } })], p3.prototype, "url", void 0), p3 = e([c$c("esri.rest.support.NetworkUrl")], p3);
const c6 = p3;
var N;
let P = N = class extends i$4(f$1) {
  constructor(t2) {
    super(t2), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = false, this.returnDirections = false, this.returnPolygonBarriers = false, this.returnPolylineBarriers = false, this.returnRoutes = true, this.returnStops = false, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = true, this.startTime = null, this.startTimeIsUTC = true, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(t2) {
    return v$1(N, t2);
  }
  readAccumulateAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => U$1.fromJSON(t3));
  }
  writeAccumulateAttributes(t2, e2, r2) {
    t2?.length && (e2[r2] = t2.map((t3) => U$1.toJSON(t3)));
  }
  writePointBarriers(t2, e2, r2) {
    D(t2, e2, r2);
  }
  writePolygonBarrier(t2, e2, r2) {
    D(t2, e2, r2);
  }
  writePolylineBarrier(t2, e2, r2) {
    D(t2, e2, r2);
  }
  readRestrictionAttributes(t2) {
    return null == t2 ? null : t2.map((t3) => D$1.fromJSON(t3));
  }
  writeRestrictionAttributes(t2, e2, r2) {
    t2?.length && (e2[r2] = t2.map((t3) => D$1.toJSON(t3)));
  }
  readStartTime(t2, e2) {
    const { startTime: r2 } = e2;
    return null == r2 ? null : "now" === r2 ? "now" : new Date(r2);
  }
  writeStartTime(t2, e2) {
    null != t2 && (e2.startTime = "now" === t2 ? "now" : t2.getTime());
  }
  readStops(t2, e2) {
    return C(e2.stops);
  }
  writeStops(t2, e2, r2) {
    D(t2, e2, r2);
  }
};
e([y$1({ type: [String], json: { name: "accumulateAttributeNames", write: true } })], P.prototype, "accumulateAttributes", void 0), e([o$1("accumulateAttributes")], P.prototype, "readAccumulateAttributes", null), e([r("accumulateAttributes")], P.prototype, "writeAccumulateAttributes", null), e([y$1(t)], P.prototype, "apiKey", void 0), e([y$1({ json: { write: true } })], P.prototype, "attributeParameterValues", void 0), e([y$1({ type: String, json: { write: true } })], P.prototype, "directionsLanguage", void 0), e([o(r$1)], P.prototype, "directionsLengthUnits", void 0), e([o(a$4)], P.prototype, "directionsOutputType", void 0), e([o(k)], P.prototype, "directionsStyleName", void 0), e([o(y$3, { name: "directionsTimeAttributeName", ignoreUnknown: false })], P.prototype, "directionsTimeAttribute", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "findBestSequence", void 0), e([y$1({ type: Number, json: { write: true } })], P.prototype, "geometryPrecision", void 0), e([y$1({ type: Number, json: { write: true } })], P.prototype, "geometryPrecisionM", void 0), e([y$1({ type: Number, json: { write: true } })], P.prototype, "geometryPrecisionZ", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "ignoreInvalidLocations", void 0), e([o(U$1, { name: "impedanceAttributeName", ignoreUnknown: false })], P.prototype, "impedanceAttribute", void 0), e([y$1({ type: Number, json: { write: true } })], P.prototype, "outputGeometryPrecision", void 0), e([o(i$5)], P.prototype, "outputGeometryPrecisionUnits", void 0), e([o(o$4)], P.prototype, "outputLines", void 0), e([y$1({ type: f$3, json: { name: "outSR", write: true } })], P.prototype, "outSpatialReference", void 0), e([y$1({ json: { write: true } })], P.prototype, "overrides", void 0), e([y$1({ json: { name: "barriers", write: true } })], P.prototype, "pointBarriers", void 0), e([r("pointBarriers")], P.prototype, "writePointBarriers", null), e([y$1({ json: { write: true } })], P.prototype, "polygonBarriers", void 0), e([r("polygonBarriers")], P.prototype, "writePolygonBarrier", null), e([y$1({ json: { write: true } })], P.prototype, "polylineBarriers", void 0), e([r("polylineBarriers")], P.prototype, "writePolylineBarrier", null), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "preserveFirstStop", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "preserveLastStop", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "preserveObjectID", void 0), e([y$1({ type: [String], json: { name: "restrictionAttributeNames", write: true } })], P.prototype, "restrictionAttributes", void 0), e([o$1("restrictionAttributes")], P.prototype, "readRestrictionAttributes", null), e([r("restrictionAttributes")], P.prototype, "writeRestrictionAttributes", null), e([o(l$4)], P.prototype, "restrictUTurns", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnBarriers", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnDirections", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnPolygonBarriers", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnPolylineBarriers", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnRoutes", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnStops", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnTraversedEdges", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnTraversedJunctions", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnTraversedTurns", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "returnZ", void 0), e([y$1({ type: Date, json: { type: Number, write: true } })], P.prototype, "startTime", void 0), e([o$1("startTime")], P.prototype, "readStartTime", null), e([r("startTime")], P.prototype, "writeStartTime", null), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "startTimeIsUTC", void 0), e([y$1({ json: { write: true } })], P.prototype, "stops", void 0), e([o$1("stops")], P.prototype, "readStops", null), e([r("stops")], P.prototype, "writeStops", null), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "timeWindowsAreUTC", void 0), e([y$1({ type: j$1, json: { write: true } })], P.prototype, "travelMode", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "useHierarchy", void 0), e([y$1({ type: Boolean, json: { write: true } })], P.prototype, "useTimeWindows", void 0), P = N = e([c$c("esri.rest.support.RouteParameters")], P);
const O = P;
function U(t2) {
  return t2 && "type" in t2;
}
function J(t2) {
  return t2 && "features" in t2 && "doNotLocateOnRestrictedElements" in t2;
}
function L(t2) {
  return t2 && "url" in t2;
}
function R(t2) {
  return t2 && "features" in t2;
}
function C(t2) {
  return U(t2) ? c$2.fromJSON(t2) : L(t2) ? c6.fromJSON(t2) : J(t2) ? p$1.fromJSON(t2) : R(t2) ? d$1.fromJSON(t2) : null;
}
function D(t2, e2, o2) {
  null != t2 && (e2[o2] = V.isCollection(t2) ? { features: t2.toArray().map((t3) => t3.toJSON()) } : t2.toJSON());
}
function z(e2) {
  return e2.length ? e2 : null;
}
function H(e2) {
  switch (e2) {
    case "esriGeometryPoint":
      return { type: "esriSMS", style: "esriSMSCircle", size: 12, color: [0, 0, 0, 0], outline: H("esriGeometryPolyline") };
    case "esriGeometryPolyline":
      return { type: "esriSLS", style: "esriSLSSolid", width: 1, color: [0, 0, 0, 0] };
    case "esriGeometryPolygon":
      return { type: "esriSFS", style: "esriSFSNull", outline: H("esriGeometryPolyline") };
  }
}
function K(e2) {
  return "layers" in e2;
}
function Q(e2) {
  return "esri.rest.support.FeatureSet" === e2.declaredClass;
}
function Y(e2) {
  return "esri.rest.support.NetworkFeatureSet" === e2.declaredClass;
}
function Z(e2, t2, r2) {
  const o2 = t2.networkDataset?.networkAttributes, i2 = o2?.filter(({ usageType: e3 }) => "cost" === e3) ?? [], s2 = r2.travelMode ?? t2.defaultTravelMode;
  if (null == s2)
    return void ue.warn("route-layer:missing-travel-mode", "The routing service must have a default travel mode or one must be specified in the route parameter.");
  const { timeAttributeName: n3, distanceAttributeName: a3 } = s2, u3 = i2.find(({ name: e3 }) => e3 === n3), p4 = i2.find(({ name: e3 }) => e3 === a3), c7 = r2.travelMode?.impedanceAttributeName ?? r2.impedanceAttribute ?? t2.impedance, m3 = u3?.units, y2 = p4?.units;
  if (!m3 || !y2)
    throw new s$3("routelayer:unknown-impedance-units", "the units of either the distance or time impedance are unknown");
  const f2 = r2.directionsLanguage ?? t2.directionsLanguage, d2 = r2.accumulateAttributes ?? t2.accumulateAttributeNames ?? [], h = new Set(i2.filter(({ name: e3 }) => e3 === n3 || e3 === a3 || e3 === c7 || null != e3 && d2.includes(e3)).map(({ name: e3 }) => e3)), w2 = (e3) => {
    for (const t3 in e3)
      h.has(t3) || delete e3[t3];
  };
  for (const l2 of e2.pointBarriers)
    null != l2.costs && (l2.addedCost = l2.costs[c7] ?? 0, w2(l2.costs));
  for (const l2 of e2.polygonBarriers)
    null != l2.costs && (l2.scaleFactor = l2.costs[c7] ?? 1, w2(l2.costs));
  for (const l2 of e2.polylineBarriers)
    null != l2.costs && (l2.scaleFactor = l2.costs[c7] ?? 1, w2(l2.costs));
  const { routeInfo: S2 } = e2, { findBestSequence: g, preserveFirstStop: b2, preserveLastStop: v2, startTimeIsUTC: B, timeWindowsAreUTC: P2 } = r2;
  S2.analysisSettings = new c$f({ accumulateAttributes: d2, directionsLanguage: f2, findBestSequence: g, preserveFirstStop: b2, preserveLastStop: v2, startTimeIsUTC: B, timeWindowsAreUTC: P2, travelMode: s2 }), S2.totalDuration = X(S2.totalCosts?.[n3] ?? 0, m3), S2.totalDistance = ee(S2.totalCosts?.[a3] ?? 0, y2), S2.totalLateDuration = X(S2.totalViolations?.[n3] ?? 0, m3), S2.totalWaitDuration = X(S2.totalWait?.[n3] ?? 0, m3), null != S2.totalCosts && w2(S2.totalCosts), null != S2.totalViolations && w2(S2.totalViolations), null != S2.totalWait && w2(S2.totalWait);
  for (const l2 of e2.stops)
    null != l2.serviceCosts && (l2.serviceDuration = X(l2.serviceCosts[n3] ?? 0, m3), l2.serviceDistance = ee(l2.serviceCosts[a3] ?? 0, y2), w2(l2.serviceCosts)), null != l2.cumulativeCosts && (l2.cumulativeDuration = X(l2.cumulativeCosts[n3] ?? 0, m3), l2.cumulativeDistance = ee(l2.cumulativeCosts[a3] ?? 0, y2), w2(l2.cumulativeCosts)), null != l2.violations && (l2.lateDuration = X(l2.violations[n3] ?? 0, m3), w2(l2.violations)), null != l2.wait && (l2.waitDuration = X(l2.wait[n3] ?? 0, m3), w2(l2.wait));
}
async function $(e2) {
  const t2 = f$3.WGS84;
  return await F(e2.spatialReference, t2), b$2(e2, t2);
}
function X(e2, t2) {
  switch (t2) {
    case "seconds":
      return e2 / 60;
    case "hours":
      return 60 * e2;
    case "days":
      return 60 * e2 * 24;
    default:
      return e2;
  }
}
function ee(e2, t2) {
  return "decimal-degrees" === t2 || "points" === t2 || "unknown" === t2 ? e2 : j$6(e2, t2, "meters");
}
function te(e2) {
  const { attributes: t2, geometry: r2, popupTemplate: o2, symbol: i2 } = e2.toGraphic().toJSON();
  return { attributes: t2, geometry: r2, popupInfo: o2, symbol: i2 };
}
const re = V.ofType(m$7), oe = V.ofType(c$e), ie = V.ofType(C$1), se = V.ofType(T), ne = V.ofType(j$3), le = V.ofType(O$1), ae = "esri.layers.RouteLayer", ue = s$2.getLogger(ae);
let pe = class extends a$5(t$2(u$4(j$4(m$8(b$3))))) {
  constructor(e2) {
    super(e2), this._cachedServiceDescription = null, this._featureCollection = null, this._type = "Feature Collection", this.defaultSymbols = new n$2(), this.directionLines = null, this.directionPoints = null, this.featureCollectionType = "route", this.legendEnabled = false, this.maxScale = 0, this.minScale = 0, this.pointBarriers = new ie(), this.polygonBarriers = new se(), this.polylineBarriers = new ne(), this.routeInfo = null, this.spatialReference = f$3.WGS84, this.stops = new le(), this.type = "route";
    const t2 = () => {
      this._setStopSymbol(this.stops);
    };
    this.addHandles(v$2(() => this.stops, "change", t2, { sync: true, onListenerAdd: t2 }));
  }
  writeFeatureCollectionWebmap(e2, t2, r2, o2) {
    const i2 = [this._writePolygonBarriers(), this._writePolylineBarriers(), this._writePointBarriers(), this._writeRouteInfo(), this._writeDirectionLines(), this._writeDirectionPoints(), this._writeStops()].filter((e3) => !!e3), s2 = i2.map((e3, t3) => t3), n3 = "web-map" === o2.origin ? "featureCollection.layers" : "layers";
    o$5(n3, i2, t2), t2.opacity = this.opacity, t2.visibility = this.visible, t2.visibleLayers = s2;
  }
  readDirectionLines(e2, t2) {
    return this._getNetworkFeatures(t2, "DirectionLines", (e3) => m$7.fromGraphic(e3));
  }
  readDirectionPoints(e2, t2) {
    return this._getNetworkFeatures(t2, "DirectionPoints", (e3) => c$e.fromGraphic(e3));
  }
  get fullExtent() {
    const e2 = new M$1({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: f$3.WGS84 });
    if (null != this.routeInfo?.geometry)
      return this.routeInfo.geometry.extent ?? e2;
    if (null == this.stops)
      return e2;
    const t2 = this.stops.filter((e3) => null != e3.geometry);
    if (t2.length < 2)
      return e2;
    const { spatialReference: r2 } = t2.at(0).geometry;
    if (null == r2)
      return e2;
    const o2 = t2.toArray().map((e3) => {
      const t3 = e3.geometry;
      return [t3.x, t3.y];
    });
    return new u$5({ points: o2, spatialReference: r2 }).extent;
  }
  readMaxScale(e2, t2) {
    const r2 = K(t2) ? t2.layers : t2.featureCollection?.layers, o2 = r2?.find((e3) => null != e3.layerDefinition.maxScale);
    return o2?.layerDefinition.maxScale ?? 0;
  }
  readMinScale(e2, t2) {
    const r2 = K(t2) ? t2.layers : t2.featureCollection?.layers, o2 = r2?.find((e3) => null != e3.layerDefinition.minScale);
    return o2?.layerDefinition.minScale ?? 0;
  }
  readPointBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "Barriers", (e3) => C$1.fromGraphic(e3));
  }
  readPolygonBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "PolygonBarriers", (e3) => T.fromGraphic(e3));
  }
  readPolylineBarriers(e2, t2) {
    return this._getNetworkFeatures(t2, "PolylineBarriers", (e3) => j$3.fromGraphic(e3));
  }
  readRouteInfo(e2, t2) {
    const r2 = this._getNetworkFeatures(t2, "RouteInfo", (e3) => S$2.fromGraphic(e3));
    return r2.length > 0 ? r2.at(0) : null;
  }
  readSpatialReference(e2, t2) {
    const r2 = K(t2) ? t2.layers : t2.featureCollection?.layers;
    if (!r2?.length)
      return f$3.WGS84;
    const { layerDefinition: o2, featureSet: i2 } = r2[0], s2 = i2.features[0], n3 = s2?.geometry?.spatialReference ?? i2.spatialReference ?? o2.spatialReference ?? o2.extent.spatialReference ?? N$1;
    return f$3.fromJSON(n3);
  }
  readStops(e2, t2) {
    return this._getNetworkFeatures(t2, "Stops", (e3) => O$1.fromGraphic(e3), (e3) => this._setStopSymbol(e3));
  }
  get title() {
    return null != this.routeInfo?.name ? this.routeInfo.name : "Route";
  }
  set title(e2) {
    this._overrideIfSome("title", e2);
  }
  get url() {
    return s$5.routeServiceUrl;
  }
  set url(e2) {
    null != e2 ? this._set("url", y$4(e2, ue)) : this._set("url", s$5.routeServiceUrl);
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  removeAll() {
    this.removeResult(), this.pointBarriers.removeAll(), this.polygonBarriers.removeAll(), this.polylineBarriers.removeAll(), this.stops.removeAll();
  }
  removeResult() {
    null != this.directionLines && (this.directionLines.removeAll(), this._set("directionLines", null)), null != this.directionPoints && (this.directionPoints.removeAll(), this._set("directionPoints", null)), null != this.routeInfo && this._set("routeInfo", null);
  }
  async save() {
    await this.load();
    const { fullExtent: e2, portalItem: t2 } = this;
    if (!t2)
      throw new s$3("routelayer:portal-item-not-set", "save() requires to the layer to have a portal item");
    if (!t2.id)
      throw new s$3("routelayer:portal-item-not-saved", "Please use saveAs() first to save the routelayer");
    if ("Feature Collection" !== t2.type)
      throw new s$3("routelayer:portal-item-wrong-type", 'Portal item needs to have type "Feature Collection"');
    if (null == this.routeInfo)
      throw new s$3("routelayer:route-unsolved", "save() requires a solved route");
    const { portal: r2 } = t2;
    await r2.signIn(), r2.user || await t2.reload();
    const { itemUrl: o2, itemControl: i2 } = t2;
    if ("admin" !== i2 && "update" !== i2)
      throw new s$3("routelayer:insufficient-permissions", "To save this layer, you need to be the owner or an administrator of your organization");
    const s2 = { messages: [], origin: "portal-item", portal: r2, url: o2 ? I(o2) : void 0, writtenProperties: [] }, n3 = this.write(void 0, s2);
    return t2.extent = await $(e2), t2.title = this.title, await t2.update({ data: n3 }), t2;
  }
  async saveAs(e2, t2 = {}) {
    if (await this.load(), null == this.routeInfo)
      throw new s$3("routelayer:route-unsolved", "saveAs() requires a solved route");
    const r2 = S$3.from(e2).clone();
    r2.extent ??= await $(this.fullExtent), r2.id = null, r2.portal ??= j$5.getDefault(), r2.title ??= this.title, r2.type = "Feature Collection", r2.typeKeywords = ["Data", "Feature Collection", f$4.MULTI_LAYER, "Route Layer"];
    const { portal: o2 } = r2, i2 = { messages: [], origin: "portal-item", portal: o2, url: null, writtenProperties: [] };
    await o2.signIn();
    const s2 = t2?.folder, n3 = this.write(void 0, i2);
    return await o2.user?.addItem({ item: r2, folder: s2, data: n3 }), this.portalItem = r2, i$6(i2), i2.portalItem = r2, r2;
  }
  async solve(e2, t2) {
    const r2 = e2?.stops ?? this.stops, o2 = e2?.pointBarriers ?? z(this.pointBarriers), i2 = e2?.polylineBarriers ?? z(this.polylineBarriers), s2 = e2?.polygonBarriers ?? z(this.polygonBarriers);
    if (null == r2)
      throw new s$3("routelayer:undefined-stops", "the route layer must have stops defined in the route parameters.");
    if ((Q(r2) || Y(r2)) && r2.features.length < 2 || V.isCollection(r2) && r2.length < 2)
      throw new s$3("routelayer:insufficent-stops", "the route layer must have two or more stops to solve a route.");
    if (V.isCollection(r2))
      for (const n3 of r2)
        n3.routeName = null;
    const a3 = e2?.apiKey, u3 = this.url, c7 = await this._getServiceDescription(u3, a3, t2), m3 = e2?.travelMode ?? c7.defaultTravelMode, y2 = e2?.accumulateAttributes ?? [];
    null != m3 && (y2.push(m3.distanceAttributeName), m3.timeAttributeName && y2.push(m3.timeAttributeName));
    const f2 = { startTime: /* @__PURE__ */ new Date() }, d2 = { accumulateAttributes: y2, directionsOutputType: "featuresets", ignoreInvalidLocations: true, pointBarriers: o2, polylineBarriers: i2, polygonBarriers: s2, preserveFirstStop: true, preserveLastStop: true, returnBarriers: !!o2, returnDirections: true, returnPolygonBarriers: !!s2, returnPolylineBarriers: !!i2, returnRoutes: true, returnStops: true, stops: r2 }, h = e2 ? O.from(e2) : new O();
    for (const n3 in f2)
      null == h[n3] && (h[n3] = f2[n3]);
    let w2;
    h.set(d2);
    try {
      w2 = await l$1(u3, h, t2);
    } catch (g) {
      throw b$1(g) ? g : new s$3("routelayer:failed-route-request", "the routing request failed", { error: g });
    }
    const S2 = this._toRouteLayerSolution(w2);
    return this._isOverridden("title") || (this.title = S2.routeInfo.name ?? "Route"), Z(S2, c7, h), S2;
  }
  update(e2) {
    const { stops: t2, directionLines: r2, directionPoints: o2, pointBarriers: i2, polylineBarriers: s2, polygonBarriers: n3, routeInfo: l2 } = e2;
    this.set({ stops: t2, pointBarriers: i2, polylineBarriers: s2, polygonBarriers: n3 }), this._set("directionLines", r2), this._set("directionPoints", o2), this._set("routeInfo", l2), null != l2.geometry && (this.spatialReference = l2.geometry.spatialReference);
  }
  _getNetworkFeatures(e2, t2, s2, l2) {
    const a3 = K(e2) ? e2.layers : e2.featureCollection?.layers, u3 = a3?.find((e3) => e3.layerDefinition.name === t2);
    if (null == u3)
      return new V();
    const { layerDefinition: p4, popupInfo: c7, featureSet: m3 } = u3, y2 = p4.drawingInfo.renderer, { features: f2 } = m3, d2 = m3.spatialReference ?? p4.spatialReference ?? p4.extent.spatialReference ?? N$1, h = y2 && o$6(y2), w2 = f$3.fromJSON(d2), S2 = f2.map((e3) => {
      const i2 = c$d.fromJSON(e3);
      null != i2.geometry && null != e3.geometry && null == e3.geometry.spatialReference && (i2.geometry.spatialReference = w2);
      const n3 = s2(i2);
      return n3.symbol ??= h?.getSymbol(i2) ?? this._getNetworkSymbol(t2), n3.popupTemplate ??= c7 && k$2.fromJSON(c7), n3;
    });
    return l2 && S2.some((e3) => !e3.symbol) && l2(S2), new V(S2);
  }
  _getNetworkSymbol(e2) {
    switch (e2) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  async _getServiceDescription(e2, t2, r2) {
    if (null != this._cachedServiceDescription && this._cachedServiceDescription.url === e2)
      return this._cachedServiceDescription.serviceDescription;
    const o2 = await d(e2, t2, r2);
    return this._cachedServiceDescription = { serviceDescription: o2, url: e2 }, o2;
  }
  _setStopSymbol(e2) {
    if (!e2 || 0 === e2.length)
      return;
    if (null == this.defaultSymbols.stops)
      return;
    if (e2.every(({ symbol: e3 }) => null != e3))
      return;
    const { first: t2, last: r2, middle: o2, unlocated: i2, waypoint: s2, break: n3 } = this.defaultSymbols.stops;
    if (null == this.routeInfo || 1 === e2.length)
      return void e2.forEach((i3, s3) => {
        switch (s3) {
          case 0:
            i3.symbol = t2;
            break;
          case e2.length - 1:
            i3.symbol = r2;
            break;
          default:
            i3.symbol = o2;
        }
      });
    const l2 = e2.map(({ sequence: e3 }) => e3).filter((e3) => null != e3), a3 = Math.min(...l2), u3 = Math.max(...l2);
    for (const p4 of e2)
      p4.sequence !== a3 ? p4.sequence !== u3 ? "ok" === p4.status || "not-located-on-closest" === p4.status ? "waypoint" !== p4.locationType ? "break" !== p4.locationType ? p4.symbol = o2 : p4.symbol = n3 : p4.symbol = s2 : p4.symbol = i2 : p4.symbol = r2 : p4.symbol = t2;
  }
  _toRouteLayerSolution(e2) {
    const t2 = e2.routeResults[0].stops?.map((e3) => O$1.fromJSON(e3.toJSON()));
    this._setStopSymbol(t2);
    const r2 = new le(t2), o2 = new se(e2.polygonBarriers?.map((e3) => {
      const t3 = T.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.polygonBarriers, t3;
    })), i2 = new ne(e2.polylineBarriers?.map((e3) => {
      const t3 = j$3.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.polylineBarriers, t3;
    })), s2 = new ie(e2.pointBarriers?.map((e3) => {
      const t3 = C$1.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.pointBarriers, t3;
    })), n3 = e2.routeResults[0].route?.toJSON(), l2 = S$2.fromJSON(n3);
    l2.symbol = this.defaultSymbols.routeInfo;
    const a3 = new oe(e2.routeResults[0].directionPoints?.features.map((e3) => {
      const t3 = c$e.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.directionPoints, t3;
    }));
    return { directionLines: new re(e2.routeResults[0].directionLines?.features.map((e3) => {
      const t3 = m$7.fromJSON(e3.toJSON());
      return t3.symbol = this.defaultSymbols.directionLines, t3;
    })), directionPoints: a3, pointBarriers: s2, polygonBarriers: o2, polylineBarriers: i2, routeInfo: l2, stops: r2 };
  }
  _writeDirectionLines() {
    return this._writeNetworkFeatures(this.directionLines, this.defaultSymbols.directionLines, "esriGeometryPolyline", m$7.fields, m$7.popupInfo, "DirectionLines", "Direction Lines");
  }
  _writeDirectionPoints() {
    return this._writeNetworkFeatures(this.directionPoints, this.defaultSymbols.directionPoints, "esriGeometryPoint", c$e.fields, c$e.popupInfo, "DirectionPoints", "Direction Points");
  }
  _writeNetworkFeatures(e2, t2, r2, o2, i2, s2, n3) {
    if (!e2?.length)
      return null;
    const l2 = this.spatialReference.toJSON(), { fullExtent: a3, maxScale: u3, minScale: p4 } = this;
    return { featureSet: { features: e2.toArray().map((e3) => te(e3)), geometryType: r2, spatialReference: l2 }, layerDefinition: { capabilities: "Query,Update,Editing", drawingInfo: { renderer: { type: "simple", symbol: null != t2 ? t2.toJSON() : H(r2) } }, extent: a3.toJSON(), fields: o2, geometryType: r2, hasM: false, hasZ: false, maxScale: u3, minScale: p4, name: s2, objectIdField: "ObjectID", spatialReference: l2, title: n3, type: "Feature Layer", typeIdField: "" }, popupInfo: i2 };
  }
  _writePointBarriers() {
    return this._writeNetworkFeatures(this.pointBarriers, this.defaultSymbols.pointBarriers, "esriGeometryPoint", C$1.fields, C$1.popupInfo, "Barriers", "Point Barriers");
  }
  _writePolygonBarriers() {
    return this._writeNetworkFeatures(this.polygonBarriers, this.defaultSymbols.polygonBarriers, "esriGeometryPolygon", T.fields, T.popupInfo, "PolygonBarriers", "Polygon Barriers");
  }
  _writePolylineBarriers() {
    return this._writeNetworkFeatures(this.polylineBarriers, this.defaultSymbols.polylineBarriers, "esriGeometryPolyline", j$3.fields, j$3.popupInfo, "PolylineBarriers", "Line Barriers");
  }
  _writeRouteInfo() {
    return this._writeNetworkFeatures(null != this.routeInfo ? new V([this.routeInfo]) : null, this.defaultSymbols.routeInfo, "esriGeometryPolyline", S$2.fields, S$2.popupInfo, "RouteInfo", "Route Details");
  }
  _writeStops() {
    const e2 = this._writeNetworkFeatures(this.stops, null, "esriGeometryPoint", O$1.fields, O$1.popupInfo, "Stops", "Stops");
    if (null == e2)
      return null;
    const { stops: t2 } = this.defaultSymbols, r2 = t2?.first?.toJSON(), o2 = t2?.middle?.toJSON(), i2 = t2?.last?.toJSON();
    return e2.layerDefinition.drawingInfo.renderer = { type: "uniqueValue", field1: "Sequence", defaultSymbol: o2, uniqueValueInfos: [{ value: "1", symbol: r2, label: "First Stop" }, { value: `${this.stops.length}`, symbol: i2, label: "Last Stop" }] }, e2;
  }
};
e([y$1({ readOnly: true, json: { read: false, origins: { "portal-item": { write: { allowNull: true, ignoreOrigin: true } }, "web-map": { write: { overridePolicy() {
  return { allowNull: true, ignoreOrigin: null == this.portalItem };
} } } } } })], pe.prototype, "_featureCollection", void 0), e([r(["web-map", "portal-item"], "_featureCollection")], pe.prototype, "writeFeatureCollectionWebmap", null), e([y$1({ readOnly: true, json: { read: false, origins: { "web-map": { write: { target: "type", overridePolicy() {
  return { ignoreOrigin: null != this.portalItem };
} } } } } })], pe.prototype, "_type", void 0), e([y$1({ nonNullable: true, type: n$2 })], pe.prototype, "defaultSymbols", void 0), e([y$1({ readOnly: true })], pe.prototype, "directionLines", void 0), e([o$1(["web-map", "portal-item"], "directionLines", ["layers", "featureCollection.layers"])], pe.prototype, "readDirectionLines", null), e([y$1({ readOnly: true })], pe.prototype, "directionPoints", void 0), e([o$1(["web-map", "portal-item"], "directionPoints", ["layers", "featureCollection.layers"])], pe.prototype, "readDirectionPoints", null), e([y$1({ readOnly: true, json: { read: false, origins: { "web-map": { write: { ignoreOrigin: true } } } } })], pe.prototype, "featureCollectionType", void 0), e([y$1({ readOnly: true })], pe.prototype, "fullExtent", null), e([y$1({ json: { origins: { "web-map": { name: "featureCollection.showLegend" } }, write: true } })], pe.prototype, "legendEnabled", void 0), e([y$1({ type: ["show", "hide"] })], pe.prototype, "listMode", void 0), e([y$1({ type: Number, nonNullable: true, json: { write: false } })], pe.prototype, "maxScale", void 0), e([o$1(["web-map", "portal-item"], "maxScale", ["layers", "featureCollection.layers"])], pe.prototype, "readMaxScale", null), e([y$1({ type: Number, nonNullable: true, json: { write: false } })], pe.prototype, "minScale", void 0), e([o$1(["web-map", "portal-item"], "minScale", ["layers", "featureCollection.layers"])], pe.prototype, "readMinScale", null), e([y$1({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })], pe.prototype, "operationalLayerType", void 0), e([y$1({ nonNullable: true, type: V.ofType(C$1) })], pe.prototype, "pointBarriers", void 0), e([o$1(["web-map", "portal-item"], "pointBarriers", ["layers", "featureCollection.layers"])], pe.prototype, "readPointBarriers", null), e([y$1({ nonNullable: true, type: V.ofType(T) })], pe.prototype, "polygonBarriers", void 0), e([o$1(["web-map", "portal-item"], "polygonBarriers", ["layers", "featureCollection.layers"])], pe.prototype, "readPolygonBarriers", null), e([y$1({ nonNullable: true, type: V.ofType(j$3) })], pe.prototype, "polylineBarriers", void 0), e([o$1(["web-map", "portal-item"], "polylineBarriers", ["layers", "featureCollection.layers"])], pe.prototype, "readPolylineBarriers", null), e([y$1({ readOnly: true })], pe.prototype, "routeInfo", void 0), e([o$1(["web-map", "portal-item"], "routeInfo", ["layers", "featureCollection.layers"])], pe.prototype, "readRouteInfo", null), e([y$1({ type: f$3 })], pe.prototype, "spatialReference", void 0), e([o$1(["web-map", "portal-item"], "spatialReference", ["layers", "featureCollection.layers"])], pe.prototype, "readSpatialReference", null), e([y$1({ nonNullable: true, type: V.ofType(O$1) })], pe.prototype, "stops", void 0), e([o$1(["web-map", "portal-item"], "stops", ["layers", "featureCollection.layers"])], pe.prototype, "readStops", null), e([y$1()], pe.prototype, "title", null), e([y$1({ readOnly: true, json: { read: false } })], pe.prototype, "type", void 0), e([y$1()], pe.prototype, "url", null), pe = e([c$c(ae)], pe);
const ce = pe;
export {
  ce as default
};
