import { bo as e$1, bp as y, br as c$3, cO as f$1, sq as o, sY as a$5, sZ as a$6, s_ as o$1, c7 as s$1, b8 as a$7, bu as u$2, jo as T, s$ as p$3, t0 as a$8 } from "./chunk-KFNcxJaF.js";
var s;
let i$1 = s = class extends f$1 {
  constructor() {
    super(...arguments), this.field = null, this.minValue = 0, this.maxValue = 255;
  }
  clone() {
    return new s({ field: this.field, minValue: this.minValue, maxValue: this.maxValue });
  }
};
e$1([y({ type: String, json: { write: true } })], i$1.prototype, "field", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], i$1.prototype, "minValue", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], i$1.prototype, "maxValue", void 0), i$1 = s = e$1([c$3("esri.renderers.support.pointCloud.ColorModulation")], i$1);
const p$2 = i$1;
var i;
let p$1 = i = class extends a$5 {
  constructor() {
    super(...arguments), this.type = "fixed-size", this.size = 0, this.useRealWorldSymbolSizes = null;
  }
  clone() {
    return new i({ size: this.size, useRealWorldSymbolSizes: this.useRealWorldSymbolSizes });
  }
};
e$1([o({ pointCloudFixedSizeAlgorithm: "fixed-size" })], p$1.prototype, "type", void 0), e$1([y({ type: Number, nonNullable: true, json: { write: true } })], p$1.prototype, "size", void 0), e$1([y({ type: Boolean, json: { write: true } })], p$1.prototype, "useRealWorldSymbolSizes", void 0), p$1 = i = e$1([c$3("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")], p$1);
const l$4 = p$1;
const e = { key: "type", base: a$5, typeMap: { "fixed-size": l$4, splat: a$6 } };
const u$1 = o$1()({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks", pointCloudRGBRenderer: "point-cloud-rgb", pointCloudStretchRenderer: "point-cloud-stretch", pointCloudUniqueValueRenderer: "point-cloud-unique-value" });
let c$2 = class c extends f$1 {
  constructor(o2) {
    super(o2), this.type = void 0, this.pointSizeAlgorithm = null, this.colorModulation = null, this.pointsPerInch = 10;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  cloneProperties() {
    return { pointSizeAlgorithm: a$7(this.pointSizeAlgorithm), colorModulation: a$7(this.colorModulation), pointsPerInch: a$7(this.pointsPerInch) };
  }
};
e$1([y({ type: u$1.apiValues, readOnly: true, nonNullable: true, json: { type: u$1.jsonValues, read: false, write: u$1.write } })], c$2.prototype, "type", void 0), e$1([y({ types: e, json: { write: true } })], c$2.prototype, "pointSizeAlgorithm", void 0), e$1([y({ type: p$2, json: { write: true } })], c$2.prototype, "colorModulation", void 0), e$1([y({ json: { write: true }, nonNullable: true, type: Number })], c$2.prototype, "pointsPerInch", void 0), c$2 = e$1([c$3("esri.renderers.PointCloudRenderer")], c$2), function(o2) {
  o2.fieldTransformTypeKebabDict = new s$1({ none: "none", lowFourBit: "low-four-bit", highFourBit: "high-four-bit", absoluteValue: "absolute-value", moduloTen: "modulo-ten" });
}(c$2 || (c$2 = {}));
const a$4 = c$2;
var a$3;
let p = a$3 = class extends f$1 {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.minValue = 0, this.maxValue = 0, this.color = null;
  }
  clone() {
    return new a$3({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, color: a$7(this.color) });
  }
};
e$1([y({ type: String, json: { write: true } })], p.prototype, "description", void 0), e$1([y({ type: String, json: { write: true } })], p.prototype, "label", void 0), e$1([y({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue" } } })], p.prototype, "minValue", void 0), e$1([y({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue" } } })], p.prototype, "maxValue", void 0), e$1([y({ type: u$2, json: { type: [T], write: true } })], p.prototype, "color", void 0), p = a$3 = e$1([c$3("esri.renderers.support.pointCloud.ColorClassBreakInfo")], p);
const c$1 = p;
var l$3;
let a$2 = l$3 = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-class-breaks", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.colorClassBreakInfos = null;
  }
  clone() {
    return new l$3({ ...this.cloneProperties(), field: this.field, fieldTransformType: this.fieldTransformType, colorClassBreakInfos: a$7(this.colorClassBreakInfos), legendOptions: a$7(this.legendOptions) });
  }
};
e$1([o({ pointCloudClassBreaksRenderer: "point-cloud-class-breaks" })], a$2.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], a$2.prototype, "field", void 0), e$1([y({ type: p$3, json: { write: true } })], a$2.prototype, "legendOptions", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], a$2.prototype, "fieldTransformType", void 0), e$1([y({ type: [c$1], json: { write: true } })], a$2.prototype, "colorClassBreakInfos", void 0), a$2 = l$3 = e$1([c$3("esri.renderers.PointCloudClassBreaksRenderer")], a$2);
const d$1 = a$2;
var l$2;
let d = l$2 = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-stretch", this.field = null, this.legendOptions = null, this.fieldTransformType = null, this.stops = null;
  }
  clone() {
    return new l$2({ ...this.cloneProperties(), field: a$7(this.field), fieldTransformType: a$7(this.fieldTransformType), stops: a$7(this.stops), legendOptions: a$7(this.legendOptions) });
  }
};
e$1([o({ pointCloudStretchRenderer: "point-cloud-stretch" })], d.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], d.prototype, "field", void 0), e$1([y({ type: p$3, json: { write: true } })], d.prototype, "legendOptions", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], d.prototype, "fieldTransformType", void 0), e$1([y({ type: [a$8], json: { write: true } })], d.prototype, "stops", void 0), d = l$2 = e$1([c$3("esri.renderers.PointCloudStretchRenderer")], d);
const a$1 = d;
var l$1;
let c2 = l$1 = class extends f$1 {
  constructor() {
    super(...arguments), this.description = null, this.label = null, this.values = null, this.color = null;
  }
  clone() {
    return new l$1({ description: this.description, label: this.label, values: a$7(this.values), color: a$7(this.color) });
  }
};
e$1([y({ type: String, json: { write: true } })], c2.prototype, "description", void 0), e$1([y({ type: String, json: { write: true } })], c2.prototype, "label", void 0), e$1([y({ type: [String], json: { write: true } })], c2.prototype, "values", void 0), e$1([y({ type: u$2, json: { type: [T], write: true } })], c2.prototype, "color", void 0), c2 = l$1 = e$1([c$3("esri.renderers.support.pointCloud.ColorUniqueValueInfo")], c2);
const n = c2;
var l;
let u = l = class extends a$4 {
  constructor(e2) {
    super(e2), this.type = "point-cloud-unique-value", this.field = null, this.fieldTransformType = null, this.colorUniqueValueInfos = null, this.legendOptions = null;
  }
  clone() {
    return new l({ ...this.cloneProperties(), field: a$7(this.field), fieldTransformType: a$7(this.fieldTransformType), colorUniqueValueInfos: a$7(this.colorUniqueValueInfos), legendOptions: a$7(this.legendOptions) });
  }
};
e$1([o({ pointCloudUniqueValueRenderer: "point-cloud-unique-value" })], u.prototype, "type", void 0), e$1([y({ json: { write: true }, type: String })], u.prototype, "field", void 0), e$1([y({ type: a$4.fieldTransformTypeKebabDict.apiValues, json: { type: a$4.fieldTransformTypeKebabDict.jsonValues, read: a$4.fieldTransformTypeKebabDict.read, write: a$4.fieldTransformTypeKebabDict.write } })], u.prototype, "fieldTransformType", void 0), e$1([y({ type: [n], json: { write: true } })], u.prototype, "colorUniqueValueInfos", void 0), e$1([y({ type: p$3, json: { write: true } })], u.prototype, "legendOptions", void 0), u = l = e$1([c$3("esri.renderers.PointCloudUniqueValueRenderer")], u);
const a = u;
export {
  a,
  a$1 as b,
  a$4 as c,
  d$1 as d
};
