import { aM as s$1, fK as f, g0 as i, g1 as s, a$ as j } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function e(e2, n, m, u) {
  if (!n)
    throw new s$1("post:missing-guid", "guid for version is missing");
  const a = f(e2), c = m.toJSON(), d = i(a.query, { query: s({ ...c, f: "json" }), ...u, method: "post" });
  n.startsWith("{") && (n = n.slice(1, -1));
  const f$1 = `${a.path}/versions/${n}/deleteForwardEdits`, { data: p } = await j(f$1, d);
  return p.success;
}
export {
  e as deleteForwardEdits
};
