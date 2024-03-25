import { hH as e, aO as s, hI as F, dh as i$1, hJ as c$1, aW as n$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c = a();
function a() {
  return new e(50);
}
async function f(e2, o = null) {
  if (!e2.isPrimitive) {
    const o2 = e2.resource.href;
    if (!o2)
      throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s$1 = c.get(o2);
    if (void 0 !== s$1)
      return s$1;
    const { fetch: n } = await import("./chunk-ejFG4zJ0.js").then((n2) => n2.D$), a3 = await n(o2, { disableTextures: true }), u = F(a3.referenceBoundingBox, n$1());
    return c.put(o2, u), u;
  }
  if (!e2.resource?.primitive)
    throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
  const a2 = i$1(c$1(e2.resource.primitive));
  if (null != o)
    for (let r = 0; r < a2.length; r++)
      a2[r] *= o;
  return F(a2, n$1());
}
export {
  f as computeObjectLayerResourceSize
};
