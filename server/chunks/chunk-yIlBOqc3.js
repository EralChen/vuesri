import { aV as e$1, aX as y, a_ as c$1, db as f, cY as x$1, gb as m$1, bZ as S$1 } from "./chunk-ejFG4zJ0.js";
let t$2 = class t extends f {
  constructor(r) {
    super(r), this.properties = null;
  }
};
e$1([y({ json: { write: true } })], t$2.prototype, "properties", void 0), t$2 = e$1([c$1("esri.rest.knowledgeGraph.GraphObject")], t$2);
const p$5 = t$2;
let s$1 = class s extends p$5 {
  constructor(r) {
    super(r), this.typeName = null, this.id = null;
  }
};
e$1([y({ type: String, json: { write: true } })], s$1.prototype, "typeName", void 0), e$1([y({ type: String, json: { write: true } })], s$1.prototype, "id", void 0), s$1 = e$1([c$1("esri.rest.knowledgeGraph.GraphNamedObject")], s$1);
const p$4 = s$1;
let p$3 = class p extends p$4 {
  constructor(o) {
    super(o), this.layoutGeometry = null;
  }
};
e$1([y({ type: x$1, json: { write: true } })], p$3.prototype, "layoutGeometry", void 0), p$3 = e$1([c$1("esri.rest.knowledgeGraph.Entity")], p$3);
const m = p$3;
let i = class extends p$4 {
  constructor(o) {
    super(o), this.originId = null, this.destinationId = null, this.layoutGeometry = null;
  }
};
e$1([y({ type: String, json: { write: true } })], i.prototype, "originId", void 0), e$1([y({ type: String, json: { write: true } })], i.prototype, "destinationId", void 0), e$1([y({ type: m$1, json: { write: true } })], i.prototype, "layoutGeometry", void 0), i = e$1([c$1("esri.rest.Relationship.Relationship")], i);
const p$2 = i;
let e = class extends p$5 {
  constructor(r) {
    super(r);
  }
};
e = e$1([c$1("esri.rest.knowledgeGraph.ObjectValue")], e);
const t$1 = e;
let p$1 = class p2 extends f {
  constructor(r) {
    super(r), this.path = null;
  }
};
e$1([y({ type: [p$5], json: { write: true } })], p$1.prototype, "path", void 0), p$1 = e$1([c$1("esri.rest.knowledgeGraph.Path")], p$1);
const c = p$1;
let t2 = class extends S$1 {
  constructor(r) {
    super(r), this.openCypherQuery = "";
  }
};
e$1([y()], t2.prototype, "openCypherQuery", void 0), t2 = e$1([c$1("esri.rest.knowledgeGraph.GraphQuery")], t2);
const p3 = t2;
let s2 = class extends p3 {
  constructor(t3) {
    super(t3), this.bindParameters = null, this.bindGeometryQuantizationParameters = null, this.outputQuantizationParameters = null, this.outputSpatialReference = null;
  }
};
e$1([y()], s2.prototype, "bindParameters", void 0), e$1([y()], s2.prototype, "bindGeometryQuantizationParameters", void 0), e$1([y()], s2.prototype, "outputQuantizationParameters", void 0), e$1([y()], s2.prototype, "outputSpatialReference", void 0), s2 = e$1([c$1("esri.rest.knowledgeGraph.GraphQueryStreaming")], s2);
const a = s2;
export {
  a,
  c,
  m,
  p$2 as p,
  t$1 as t
};
