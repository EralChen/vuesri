import { a$ as j, hp as N, h8 as u } from "./chunk-KFNcxJaF.js";
import { t } from "./chunk-y_FkjZn_.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function h(e, i, h2) {
  const s = e.thumbnail && e.thumbnail.url;
  return s ? j(s, { responseType: "image" }).then((t2) => {
    const e2 = r(t2.data, h2);
    return h2?.node ? (h2.node.appendChild(e2), h2.node) : e2;
  }) : N(e).then((t2) => t2 ? i(t2, h2) : null);
}
function r(t$1, n) {
  const h2 = !/\\.svg$/i.test(t$1.src) && n && n.disableUpsampling, r2 = Math.max(t$1.width, t$1.height);
  let s = null != n?.maxSize ? u(n.maxSize) : t.maxSize;
  h2 && (s = Math.min(r2, s));
  const o = "number" == typeof n?.size ? n?.size : null, m = Math.min(s, null != o ? u(o) : r2);
  if (m !== r2) {
    const e = 0 !== t$1.width && 0 !== t$1.height ? t$1.width / t$1.height : 1;
    e >= 1 ? (t$1.width = m, t$1.height = m / e) : (t$1.width = m * e, t$1.height = m);
  }
  return t$1;
}
export {
  h as previewWebStyleSymbol
};
