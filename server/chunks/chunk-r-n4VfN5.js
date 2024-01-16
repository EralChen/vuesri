import { fG as S, fH as m$1, fI as l, fJ as t, a$ as j } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function s(t2) {
  const o = t2.toJSON();
  return o.attachmentTypes && (o.attachmentTypes = o.attachmentTypes.join(",")), o.keywords && (o.keywords = o.keywords.join(",")), o.globalIds && (o.globalIds = o.globalIds.join(",")), o.objectIds && (o.objectIds = o.objectIds.join(",")), o.size && (o.size = o.size.join(",")), o;
}
function a(o, n) {
  const s2 = {};
  for (const a2 of n) {
    const { parentObjectId: n2, parentGlobalId: c2, attachmentInfos: m2 } = a2;
    for (const a3 of m2) {
      const { id: m3 } = a3, p = S(m$1(`${o.path}/${n2}/attachments/${m3}`)), i = l.fromJSON(a3);
      i.set({ url: p, parentObjectId: n2, parentGlobalId: c2 }), s2[n2] ? s2[n2].push(i) : s2[n2] = [i];
    }
  }
  return s2;
}
function c(t$1, e, r) {
  let a2 = { query: t({ ...t$1.query, f: "json", ...s(e) }) };
  return r && (a2 = { ...r, ...a2, query: { ...r.query, ...a2.query } }), j(t$1.path + "/queryAttachments", a2).then((t2) => t2.data.attachmentGroups);
}
async function m(t2, e, n) {
  const { objectIds: r } = e, s2 = [];
  for (const a2 of r)
    s2.push(j(t2.path + "/" + a2 + "/attachments", n));
  return Promise.all(s2).then((t3) => r.map((o, e2) => ({ parentObjectId: o, attachmentInfos: t3[e2].data.attachmentInfos })));
}
export {
  c as executeAttachmentQuery,
  m as fetchAttachments,
  a as processAttachmentQueryResult
};
