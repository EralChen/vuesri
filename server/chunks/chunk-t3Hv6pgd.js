import { bX as k$1, hv as A, hw as r, gr as n, hx as O$1, bq as j$1, bo as e, bp as y, br as c, hy as e$1, eQ as n$1 } from "./chunk-KFNcxJaF.js";
import { d } from "./chunk-Iqdi-Y9L.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let m = class extends d {
  constructor(e2) {
    super(e2);
  }
  getTiles() {
    const e2 = this.lv.getVisibleNodes(), s = this.view.renderSpatialReference, o = this.nodeSR;
    return e2.map((e3) => h(e3, s, o)).filter(k$1).sort((e3, r2) => e3.lij[0] === r2.lij[0] ? e3.label > r2.label ? -1 : 1 : e3.lij[0] - r2.lij[0]);
  }
};
function h(e2, r$1, s) {
  const o = e2.serviceObb;
  if (null == o || null == r$1)
    return null;
  A(f, o.quaternion), r(j, o.center), n(j, s, 0, j, r$1, 0, 1), f[12] = j[0], f[13] = j[1], f[14] = j[2];
  const i = [[], [], []];
  r(j, o.halfSize), O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[0].push([j[0], j[1]]), r(j, o.halfSize), j[0] = -j[0], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[0].push([j[0], j[1]]), r(j, o.halfSize), j[0] = -j[0], j[1] = -j[1], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[0].push([j[0], j[1]]), r(j, o.halfSize), j[1] = -j[1], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[0].push([j[0], j[1]]), i[1].push(i[0][0]), i[1].push(i[0][1]), r(j, o.halfSize), j[0] = -j[0], j[2] = -j[2], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[1].push([j[0], j[1]]), r(j, o.halfSize), j[2] = -j[2], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[1].push([j[0], j[1]]), i[2].push(i[0][0]), i[2].push(i[0][3]), r(j, o.halfSize), j[1] = -j[1], j[2] = -j[2], O$1(j, j, f), n(j, r$1, 0, j, s, 0, 1), i[2].push([j[0], j[1]]), i[2].push(i[1][3]);
  const c2 = new j$1({ rings: i, spatialReference: s });
  return { lij: [e2.level, e2.childCount, 0], label: e2.id, geometry: c2 };
}
e([y({ constructOnly: true })], m.prototype, "lv", void 0), e([y({ constructOnly: true })], m.prototype, "nodeSR", void 0), m = e([c("esri.views.3d.layers.support.I3STreeDebugger")], m);
const f = e$1(), j = n$1();
export {
  m as I3STreeDebugger
};
