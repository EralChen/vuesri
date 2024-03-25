import { cr as q$1, il as _, aI as r$1, aJ as n, aH as O$1, bY as j$1, aV as e, aX as y, a_ as c, im as e$1, aW as n$1 } from "./chunk-ejFG4zJ0.js";
import { d } from "./chunk-d3fZIXRm.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let u = class extends d {
  constructor(e2) {
    super(e2);
  }
  getTiles() {
    const e2 = this.lv.getVisibleNodes(), o = this.view.renderSpatialReference, s = this.nodeSR;
    return e2.map((e3) => f(e3, o, s)).filter(q$1).sort((e3, r) => e3.lij[0] === r.lij[0] ? e3.label > r.label ? -1 : 1 : e3.lij[0] - r.lij[0]);
  }
};
function f(e2, r, o) {
  const s = e2.serviceObbInIndexSR;
  if (null == s || null == r)
    return null;
  _(h, s.quaternion), r$1(j, s.center), n(j, o, 0, j, r, 0, 1), h[12] = j[0], h[13] = j[1], h[14] = j[2];
  const i = [[], [], []];
  O$1(j, s.halfSize, h), n(j, r, 0, j, o, 0, 1), i[0].push([j[0], j[1]]), r$1(j, s.halfSize), j[0] = -j[0], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[0].push([j[0], j[1]]), r$1(j, s.halfSize), j[0] = -j[0], j[1] = -j[1], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[0].push([j[0], j[1]]), r$1(j, s.halfSize), j[1] = -j[1], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[0].push([j[0], j[1]]), i[1].push(i[0][0]), i[1].push(i[0][1]), r$1(j, s.halfSize), j[0] = -j[0], j[2] = -j[2], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[1].push([j[0], j[1]]), r$1(j, s.halfSize), j[2] = -j[2], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[1].push([j[0], j[1]]), i[2].push(i[0][0]), i[2].push(i[0][3]), r$1(j, s.halfSize), j[1] = -j[1], j[2] = -j[2], O$1(j, j, h), n(j, r, 0, j, o, 0, 1), i[2].push([j[0], j[1]]), i[2].push(i[1][3]);
  const c2 = new j$1({ rings: i, spatialReference: o });
  return { lij: [e2.level, e2.childCount, 0], label: e2.id, geometry: c2 };
}
e([y({ constructOnly: true })], u.prototype, "lv", void 0), e([y({ constructOnly: true })], u.prototype, "nodeSR", void 0), u = e([c("esri.views.3d.layers.support.I3STreeDebugger")], u);
const h = e$1(), j = n$1();
export {
  u as I3STreeDebugger
};
