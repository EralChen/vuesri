import { gq as t, bX as k$1, cZ as f$1, gr as n, gs as r, gt as O, gu as E, gv as e, gw as n$1 } from "./chunk-KFNcxJaF.js";
import { u, c as c$1, i, f } from "./chunk-TwcdQFpe.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-6ErlZ1bD.js";
class p {
  transform(t$1) {
    const e2 = this._transform(t$1), a = [e2.points.buffer, e2.rgb.buffer];
    null != e2.pointIdFilterMap && a.push(e2.pointIdFilterMap.buffer);
    for (const o of e2.attributes)
      "buffer" in o.values && t(o.values.buffer) && o.values.buffer !== e2.rgb.buffer && a.push(o.values.buffer);
    return Promise.resolve({ result: e2, transferList: a });
  }
  _transform(r2) {
    const e2 = u(r2.schema, r2.geometryBuffer);
    let a = e2.length / 3, o = null;
    const n2 = new Array(), f$2 = c$1(r2.primaryAttributeData, e2, a);
    null != r2.primaryAttributeData && f$2 && n2.push({ attributeInfo: r2.primaryAttributeData.attributeInfo, values: f$2 });
    const s = c$1(r2.modulationAttributeData, e2, a);
    null != r2.modulationAttributeData && s && n2.push({ attributeInfo: r2.modulationAttributeData.attributeInfo, values: s });
    let p2 = i(r2.rendererInfo, f$2, s, a);
    if (r2.filterInfo && r2.filterInfo.length > 0 && null != r2.filterAttributesData) {
      const f$12 = r2.filterAttributesData.filter(k$1).map((t2) => {
        const r3 = c$1(t2, e2, a), o2 = { attributeInfo: t2.attributeInfo, values: r3 };
        return n2.push(o2), o2;
      });
      o = new Uint32Array(a), a = f(e2, p2, o, r2.filterInfo, f$12);
    }
    for (const t2 of r2.userAttributesData) {
      const r3 = c$1(t2, e2, a);
      n2.push({ attributeInfo: t2.attributeInfo, values: r3 });
    }
    3 * a < p2.length && (p2 = new Uint8Array(p2.buffer.slice(0, 3 * a))), this._applyElevationOffsetInPlace(e2, a, r2.elevationOffset);
    const c2 = this._transformCoordinates(e2, a, r2.obb, f$1.fromJSON(r2.inSR), f$1.fromJSON(r2.outSR));
    return { obb: r2.obb, points: c2, rgb: p2, attributes: n2, pointIdFilterMap: o };
  }
  _transformCoordinates(t2, r$1, a, i2, u2) {
    if (!n(t2, i2, 0, t2, u2, 0, r$1))
      throw new Error("Can't reproject");
    const l = r(a.center[0], a.center[1], a.center[2]), b = n$1(), m = n$1();
    O(c, a.quaternion);
    const p2 = new Float32Array(3 * r$1);
    for (let e2 = 0; e2 < r$1; e2++)
      b[0] = t2[3 * e2] - l[0], b[1] = t2[3 * e2 + 1] - l[1], b[2] = t2[3 * e2 + 2] - l[2], E(m, b, c), a.halfSize[0] = Math.max(a.halfSize[0], Math.abs(m[0])), a.halfSize[1] = Math.max(a.halfSize[1], Math.abs(m[1])), a.halfSize[2] = Math.max(a.halfSize[2], Math.abs(m[2])), p2[3 * e2] = b[0], p2[3 * e2 + 1] = b[1], p2[3 * e2 + 2] = b[2];
    return p2;
  }
  _applyElevationOffsetInPlace(t2, r2, e2) {
    if (0 !== e2)
      for (let a = 0; a < r2; a++)
        t2[3 * a + 2] += e2;
  }
}
const c = e();
function h() {
  return new p();
}
export {
  h as default
};
