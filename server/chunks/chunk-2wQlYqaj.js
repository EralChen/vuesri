import { fZ as e, aM as s$1, f_ as F, cU as i, f$ as c$1, eQ as n$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c = u();
function u() {
  return new e(50);
}
async function f(e2, o = null) {
  if (!e2.isPrimitive) {
    const o2 = e2.resource.href;
    if (!o2)
      throw new s$1("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s = c.get(o2);
    if (void 0 !== s)
      return s;
    const { fetch: n } = await import("./chunk-KFNcxJaF.js").then((n2) => n2.E5), u3 = await n(o2, { disableTextures: true }), a = F(u3.referenceBoundingBox, n$1());
    return c.put(o2, a), a;
  }
  if (!e2.resource?.primitive)
    throw new s$1("symbol:invalid-resource", "The symbol does not have a valid resource");
  const u2 = i(c$1(e2.resource.primitive));
  if (null != o)
    for (let r = 0; r < u2.length; r++)
      u2[r] *= o;
  return F(u2, n$1());
}
export {
  f as computeObjectLayerResourceSize
};
