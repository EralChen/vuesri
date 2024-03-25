import { lR as g, lS as o, aB as f$1, dv as y$1, lT as z, lU as pt, dQ as rt, lV as n, lW as f$2, lX as e, lY as t$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function u(t2, e2) {
  return e2;
}
function d(t2, e2, r, s2) {
  switch (r) {
    case 0:
      return f(t2, e2 + s2, 0);
    case 1:
      return "lowerLeft" === t2.originPosition ? f(t2, e2 + s2, 1) : y(t2, e2 + s2, 1);
  }
}
function p(t2, e2, r, s2) {
  return 2 === r ? f(t2, e2, 2) : d(t2, e2, r, s2);
}
function c(t2, e2, r, s2) {
  return 2 === r ? f(t2, e2, 3) : d(t2, e2, r, s2);
}
function m(t2, e2, r, s2) {
  return 3 === r ? f(t2, e2, 3) : p(t2, e2, r, s2);
}
function f({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] + r * e2[s2];
}
function y({ translate: t2, scale: e2 }, r, s2) {
  return t2[s2] - r * e2[s2];
}
class _ {
  constructor(t2) {
    this._options = t2, this.geometryTypes = ["point", "multipoint", "polyline", "polygon"], this._previousCoordinate = [0, 0], this._transform = null, this._applyTransform = u, this._lengths = [], this._currentLengthIndex = 0, this._toAddInCurrentPath = 0, this._vertexDimension = 0, this._coordinateBuffer = null, this._coordinateBufferPtr = 0, this._attributesConstructor = class {
    }, this._missingAttributes = [];
  }
  get missingAttributes() {
    return this._missingAttributes;
  }
  createFeatureResult() {
    return new g();
  }
  finishFeatureResult(t2) {
    if (this._options.applyTransform && (t2.transform = null), this._attributesConstructor = class {
    }, this._coordinateBuffer = null, this._lengths.length = 0, !t2.hasZ)
      return;
    const e2 = o(t2.geometryType, this._options.sourceSpatialReference, t2.spatialReference);
    if (null != e2)
      for (const r of t2.features)
        e2(r.geometry);
  }
  createSpatialReference() {
    return new f$1();
  }
  addField(t2, e2) {
    t2.fields.push(y$1.fromJSON(e2));
    const r = t2.fields.map((t3) => t3.name);
    this._attributesConstructor = function() {
      for (const t3 of r)
        this[t3] = null;
    };
  }
  addFeature(t2, e2) {
    const r = this._options.maxStringAttributeLength, s2 = this._options.maxStringAttributeFields;
    z(e2.attributes, s2, r, (r2) => {
      const s3 = e2.attributes[t2.objectIdFieldName];
      null != s3 && this._missingAttributes.push({ objectId: s3, attribute: r2 });
    }), t2.features.push(e2);
  }
  addQueryGeometry(t2, e2) {
    const { queryGeometry: r, queryGeometryType: s2 } = e2, i = pt(r.clone(), r, false, false, this._transform), o2 = rt(i, s2, false, false);
    let n2 = null;
    switch (s2) {
      case "esriGeometryPoint":
        n2 = "point";
        break;
      case "esriGeometryPolygon":
        n2 = "polygon";
        break;
      case "esriGeometryPolyline":
        n2 = "polyline";
        break;
      case "esriGeometryMultipoint":
        n2 = "multipoint";
    }
    o2.type = n2, t2.queryGeometryType = s2, t2.queryGeometry = o2;
  }
  prepareFeatures(e2) {
    switch (this._transform = e2.transform ?? null, this._options.applyTransform && e2.transform && (this._applyTransform = this._deriveApplyTransform(e2)), this._vertexDimension = 2, e2.hasZ && this._vertexDimension++, e2.hasM && this._vertexDimension++, e2.geometryType) {
      case "point":
        this.addCoordinate = (t2, e3, r) => this.addCoordinatePoint(t2, e3, r), this.createGeometry = (t2) => this.createPointGeometry(t2);
        break;
      case "polygon":
        this.addCoordinate = (t2, e3, r) => this._addCoordinatePolygon(t2, e3, r), this.createGeometry = (t2) => this._createPolygonGeometry(t2);
        break;
      case "polyline":
        this.addCoordinate = (t2, e3, r) => this._addCoordinatePolyline(t2, e3, r), this.createGeometry = (t2) => this._createPolylineGeometry(t2);
        break;
      case "multipoint":
        this.addCoordinate = (t2, e3, r) => this._addCoordinateMultipoint(t2, e3, r), this.createGeometry = (t2) => this._createMultipointGeometry(t2);
        break;
      case "mesh":
      case "extent":
        break;
      default:
        n(e2.geometryType);
    }
  }
  createFeature() {
    return this._lengths.length = 0, this._currentLengthIndex = 0, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0, new f$2(e(), null, new this._attributesConstructor());
  }
  allocateCoordinates() {
    const t2 = this._lengths.reduce((t3, e2) => t3 + e2, 0);
    this._coordinateBuffer = new Float64Array(t2 * this._vertexDimension), this._coordinateBufferPtr = 0;
  }
  addLength(t2, e2) {
    0 === this._lengths.length && (this._toAddInCurrentPath = e2), this._lengths.push(e2);
  }
  createPointGeometry(t2) {
    const e2 = { type: "point", x: 0, y: 0, spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
    return e2.hasZ && (e2.z = 0), e2.hasM && (e2.m = 0), e2;
  }
  addCoordinatePoint(t2, e2, r) {
    const s2 = this._transform ? this._applyTransform(this._transform, e2, r, 0) : e2;
    if (null != s2)
      switch (r) {
        case 0:
          t2.x = s2;
          break;
        case 1:
          t2.y = s2;
          break;
        case 2:
          t2.hasZ ? t2.z = s2 : t2.m = s2;
          break;
        case 3:
          t2.m = s2;
      }
  }
  _transformPathLikeValue(t2, e2) {
    let r = 0;
    return e2 <= 1 && (r = this._previousCoordinate[e2], this._previousCoordinate[e2] += t2), this._transform ? this._applyTransform(this._transform, t2, e2, r) : t2;
  }
  _addCoordinatePolyline(t2, e2, r) {
    this._dehydratedAddPointsCoordinate(t2.paths, e2, r);
  }
  _addCoordinatePolygon(t2, e2, r) {
    this._dehydratedAddPointsCoordinate(t2.rings, e2, r);
  }
  _addCoordinateMultipoint(t2, e2, r) {
    0 === r && t2.points.push([]);
    const s2 = this._transformPathLikeValue(e2, r);
    t2.points[t2.points.length - 1].push(s2);
  }
  _createPolygonGeometry(t2) {
    return { type: "polygon", rings: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _createPolylineGeometry(t2) {
    return { type: "polyline", paths: [[]], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _createMultipointGeometry(t2) {
    return { type: "multipoint", points: [], spatialReference: t2.spatialReference, hasZ: !!t2.hasZ, hasM: !!t2.hasM };
  }
  _dehydratedAddPointsCoordinate(t2, e2, r) {
    0 === r && 0 == this._toAddInCurrentPath-- && (t2.push([]), this._toAddInCurrentPath = this._lengths[++this._currentLengthIndex] - 1, this._previousCoordinate[0] = 0, this._previousCoordinate[1] = 0);
    const s2 = this._transformPathLikeValue(e2, r), i = t2[t2.length - 1], o2 = this._coordinateBuffer;
    if (o2) {
      if (0 === r) {
        const t3 = this._coordinateBufferPtr * Float64Array.BYTES_PER_ELEMENT;
        i.push(new Float64Array(o2.buffer, t3, this._vertexDimension));
      }
      o2[this._coordinateBufferPtr++] = s2;
    }
  }
  _deriveApplyTransform(t2) {
    const { hasZ: e2, hasM: r } = t2;
    return e2 && r ? m : e2 ? p : r ? c : d;
  }
}
class t {
  _parseFeatureQuery(t2) {
    const s2 = new _(t2.options), i = t$1(t2.buffer, s2), o2 = { ...i, spatialReference: i.spatialReference?.toJSON(), fields: i.fields ? i.fields.map((e2) => e2.toJSON()) : void 0, missingAttributes: s2.missingAttributes };
    return Promise.resolve(o2);
  }
}
function s() {
  return new t();
}
export {
  s as default
};
