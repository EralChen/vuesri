import { n } from "./chunk-stE6bWuO.js";
import { cs as t, ct as e } from "./chunk-ejFG4zJ0.js";
const o = { getObjectId: (t2) => t2.objectId, getAttributes: (t2) => t2.attributes, getAttribute: (t2, e2) => t2.attributes[e2], cloneWithGeometry: (t$1, r) => new t(r, t$1.attributes, null, t$1.objectId), getGeometry: (t2) => t2.geometry, getCentroid: (e$1, o2) => (null == e$1.centroid && (e$1.centroid = n(new e(), e$1.geometry, o2.hasZ, o2.hasM)), e$1.centroid) };
export {
  o
};
