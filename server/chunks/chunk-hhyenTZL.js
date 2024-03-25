import { aO as s, gD as f, gV as n, gW as s$1, aQ as U$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
async function e(e2, n$1, m, u) {
  if (!n$1)
    throw new s("post:missing-guid", "guid for version is missing");
  const a = f(e2), c = m.toJSON(), d = n(a.query, { query: s$1({ ...c, f: "json" }), ...u, method: "post" });
  n$1.startsWith("{") && (n$1 = n$1.slice(1, -1));
  const f$1 = `${a.path}/versions/${n$1}/deleteForwardEdits`, { data: p } = await U$1(f$1, d);
  return p.success;
}
export {
  e as deleteForwardEdits
};
