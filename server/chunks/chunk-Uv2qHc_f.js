import { aO as s } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e(e2, s$1) {
  let a = s$1.responseType;
  a ? "array-buffer" !== a && "blob" !== a && "json" !== a && "native" !== a && "native-request-init" !== a && "text" !== a && (a = "text") : a = "json", s$1.responseType = a;
  const r = s$1.signal;
  return delete s$1.signal, globalThis.invokeStaticMessage("request", { url: e2, options: s$1 }, { signal: r }).then(async (n) => {
    let o, i, l, u, c;
    if (n.data)
      if (n.data instanceof ArrayBuffer) {
        if (!("json" !== a && "text" !== a && "blob" !== a || (o = new Blob([n.data]), "json" !== a && "text" !== a || (u = await o.text(), "json" !== a)))) {
          try {
            i = JSON.parse(u || null);
          } catch (p) {
            const a2 = { ...p, url: e2, requestOptions: s$1 };
            throw new s("request:server", p.message, a2);
          }
          if (i.error) {
            const a2 = { ...i.error, url: e2, requestOptions: s$1 };
            throw new s("request:server", i.error.message, a2);
          }
        }
      } else
        "native" === a && (n.data.signal = r, l = await fetch(n.data.url, n.data), n.httpStatus = l.status);
    switch (a) {
      case "blob":
        c = o;
        break;
      case "json":
        c = i;
        break;
      case "native":
        c = l;
        break;
      case "text":
        c = u;
        break;
      default:
        c = n.data;
    }
    return { data: c, httpStatus: n.httpStatus, requestOptions: s$1, ssl: n.ssl, url: e2 };
  });
}
export {
  e as execute
};
