import { a_ as I, aY as j } from "./chunk-KFNcxJaF.js";
function e(e2) {
  return { origin: "portal-item", url: I(e2.itemUrl), portal: e2.portal || j.getDefault(), portalItem: e2, readResourcePaths: [] };
}
function o(e2) {
  const o2 = I(e2.itemUrl);
  return { origin: "portal-item", messages: [], writtenProperties: [], url: o2, portal: e2.portal || j.getDefault(), portalItem: e2, verifyItemRelativeUrls: o2 ? { rootPath: o2.path, writtenUrls: [] } : null, blockedRelativeUrls: [] };
}
function l(e2) {
  return { origin: "web-map", url: I(e2.itemUrl), portal: e2.portal || j.getDefault(), portalItem: e2, readResourcePaths: [] };
}
function a(e2, o2) {
  const l2 = I(e2.itemUrl);
  return { origin: "web-map", messages: [], writtenProperties: [], url: l2, portal: e2.portal || j.getDefault(), portalItem: e2, initiator: o2, verifyItemRelativeUrls: l2 ? { rootPath: l2.path, writtenUrls: [] } : null, blockedRelativeUrls: [], resources: { toAdd: [], toUpdate: [], toKeep: [], pendingOperations: [] } };
}
export {
  a,
  e,
  l,
  o
};
