import { iz as u$1, jk as i$1, lB as o, bo as e$1, bp as y, cy as x$1, jn as h, cM as j, br as c, bs as g$1, iD as l$2 } from "./chunk-KFNcxJaF.js";
function e(e2, l2) {
  return t(e2) === t(l2);
}
function t(e2) {
  if (null == e2)
    return null;
  const t2 = null != e2.layer ? e2.layer.id : "";
  let l2 = null;
  return l2 = null != e2.objectId ? e2.objectId : null != e2.layer && "objectIdField" in e2.layer && null != e2.layer.objectIdField && null != e2.attributes ? e2.attributes[e2.layer.objectIdField] : e2.uid, null == l2 ? null : `o-${t2}-${l2}`;
}
const l$1 = { json: { write: { writer: r, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: n } } } };
function r(e2, t2) {
  null != e2?.layer?.objectIdField && null != e2.attributes && (t2.feature = { layerId: e2.layer.id, objectId: e2.attributes[e2.layer.objectIdField] });
}
function n(e2) {
  if (null != e2.layerId && null != e2.objectId)
    return { uid: null, layer: { id: e2.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e2.objectId } };
}
let f$1 = class f extends u$1(i$1(g$1)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o$1) {
    return o(this.position, o$1.position) && o(this.elevationInfo, o$1.elevationInfo) && e(this.feature, o$1.feature);
  }
};
e$1([y({ type: x$1, json: { write: { isRequired: true } } })], f$1.prototype, "position", void 0), e$1([y({ type: h }), j()], f$1.prototype, "elevationInfo", void 0), e$1([y(l$1)], f$1.prototype, "feature", void 0), f$1 = e$1([c("esri.analysis.LineOfSightAnalysisObserver")], f$1);
const u = f$1;
let l = class extends u$1(l$2) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o$1) {
    return o(this.position, o$1.position) && o(this.elevationInfo, o$1.elevationInfo) && e(this.feature, o$1.feature);
  }
};
e$1([y({ type: x$1 }), j()], l.prototype, "position", void 0), e$1([y({ type: h }), j()], l.prototype, "elevationInfo", void 0), e$1([y(l$1)], l.prototype, "feature", void 0), l = e$1([c("esri.analysis.LineOfSightAnalysisTarget")], l);
const f2 = l;
export {
  f2 as f,
  t,
  u
};
