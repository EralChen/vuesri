import { aM as s$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e(e2, s) {
  let a = s.responseType;
  a ? "array-buffer" !== a && "blob" !== a && "json" !== a && "native" !== a && "native-request-init" !== a && "text" !== a && (a = "text") : a = "json", s.responseType = a;
  const r = s.signal;
  return delete s.signal, globalThis.invokeStaticMessage("request", { url: e2, options: s }, { signal: r }).then(async (n) => {
    let o, i, l, u, c;
    if (n.data)
      if (n.data instanceof ArrayBuffer) {
        if (!("json" !== a && "text" !== a && "blob" !== a || (o = new Blob([n.data]), "json" !== a && "text" !== a || (u = await o.text(), "json" !== a)))) {
          try {
            i = JSON.parse(u || null);
          } catch (p) {
            const a2 = { ...p, url: e2, requestOptions: s };
            throw new s$1("request:server", p.message, a2);
          }
          if (i.error) {
            const a2 = { ...i.error, url: e2, requestOptions: s };
            throw new s$1("request:server", i.error.message, a2);
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
    return { data: c, httpStatus: n.httpStatus, requestOptions: s, ssl: n.ssl, url: e2 };
  });
}
export {
  e as execute
};
