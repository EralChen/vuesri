import { jc as u$1, jT as i$1, mD as o, aV as e$1, aX as y, cY as x$1, jW as h, d9 as j, a_ as c, bZ as S$1, jf as l$3 } from "./chunk-ejFG4zJ0.js";
function e(e2, l3) {
  return t(e2) === t(l3);
}
function t(e2) {
  if (null == e2)
    return null;
  const t2 = null != e2.layer ? e2.layer.id : "";
  let l3 = null;
  return l3 = null != e2.objectId ? e2.objectId : null != e2.layer && "objectIdField" in e2.layer && null != e2.layer.objectIdField && null != e2.attributes ? e2.attributes[e2.layer.objectIdField] : e2.uid, null == l3 ? null : `o-${t2}-${l3}`;
}
const l$2 = { json: { write: { writer: r, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: n } } } };
function r(e2, t2) {
  null != e2?.layer?.objectIdField && null != e2.attributes && (t2.feature = { layerId: e2.layer.id, objectId: e2.attributes[e2.layer.objectIdField] });
}
function n(e2) {
  if (null != e2.layerId && null != e2.objectId)
    return { uid: null, layer: { id: e2.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e2.objectId } };
}
let l$1 = class l extends u$1(i$1(S$1)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o$1) {
    return o(this.position, o$1.position) && o(this.elevationInfo, o$1.elevationInfo) && e(this.feature, o$1.feature);
  }
};
e$1([y({ type: x$1, json: { write: { isRequired: true } } })], l$1.prototype, "position", void 0), e$1([y({ type: h }), j()], l$1.prototype, "elevationInfo", void 0), e$1([y(l$2)], l$1.prototype, "feature", void 0), l$1 = e$1([c("esri.analysis.LineOfSightAnalysisObserver")], l$1);
const u = l$1;
let l2 = class extends u$1(l$3) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o$1) {
    return o(this.position, o$1.position) && o(this.elevationInfo, o$1.elevationInfo) && e(this.feature, o$1.feature);
  }
};
e$1([y({ type: x$1 }), j()], l2.prototype, "position", void 0), e$1([y({ type: h }), j()], l2.prototype, "elevationInfo", void 0), e$1([y(l$2)], l2.prototype, "feature", void 0), l2 = e$1([c("esri.analysis.LineOfSightAnalysisTarget")], l2);
const f = l2;
export {
  f,
  t,
  u
};
