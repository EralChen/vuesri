import { hK as r$2, hL as r$3, hM as s } from "./chunk-ejFG4zJ0.js";
import { r as r$1 } from "./chunk-s09znI9e.js";
function r({ x: t, y: n, z: d }) {
  return s(t, n, d ?? 0);
}
function a(e, a2) {
  switch (e.type) {
    case "edge":
      return e.draped ? new r$2({ edgeStart: r(e.start), edgeEnd: r(e.end), targetPoint: r(e.target), objectId: e.objectId, getGroundElevation: a2 }) : new r$3({ edgeStart: r(e.start), edgeEnd: r(e.end), targetPoint: r(e.target), objectId: e.objectId, isDraped: false });
    case "vertex":
      return new r$1({ targetPoint: r(e.target), objectId: e.objectId, isDraped: false });
  }
}
function o(e, t) {
  return null != e && "3d" === e.type ? (n, d) => e.elevationProvider.getElevation(n, d, 0, t, "ground") : () => null;
}
export {
  a,
  o
};
