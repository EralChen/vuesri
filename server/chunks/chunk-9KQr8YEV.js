import { hd as t, cr as q$1, he as O, aB as f$1, aJ as n, hf as t$1, hg as O$1, hh as E, hi as e$1, hj as n$1 } from "./chunk-ejFG4zJ0.js";
import { u, c as c$1, i, f } from "./chunk-tAdNaROw.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-xrU8rSw_.js";
class c {
  transform(t$12) {
    const e = this._transform(t$12), a = [e.points.buffer, e.rgb.buffer];
    null != e.pointIdFilterMap && a.push(e.pointIdFilterMap.buffer);
    for (const o of e.attributes)
      "buffer" in o.values && t(o.values.buffer) && o.values.buffer !== e.rgb.buffer && a.push(o.values.buffer);
    return Promise.resolve({ result: e, transferList: a });
  }
  _transform(r) {
    const e = u(r.schema, r.geometryBuffer);
    let a = e.length / 3, o = null;
    const i$1 = new Array(), f$2 = c$1(r.primaryAttributeData, e, a);
    null != r.primaryAttributeData && f$2 && i$1.push({ attributeInfo: r.primaryAttributeData.attributeInfo, values: f$2 });
    const s = c$1(r.modulationAttributeData, e, a);
    null != r.modulationAttributeData && s && i$1.push({ attributeInfo: r.modulationAttributeData.attributeInfo, values: s });
    let c2 = i(r.rendererInfo, f$2, s, a);
    if (r.filterInfo && r.filterInfo.length > 0 && null != r.filterAttributesData) {
      const f$12 = r.filterAttributesData.filter(q$1).map((t2) => {
        const r2 = c$1(t2, e, a), o2 = { attributeInfo: t2.attributeInfo, values: r2 };
        return i$1.push(o2), o2;
      });
      o = new Uint32Array(a), a = f(e, c2, o, r.filterInfo, f$12);
    }
    for (const t2 of r.userAttributesData) {
      const r2 = c$1(t2, e, a);
      i$1.push({ attributeInfo: t2.attributeInfo, values: r2 });
    }
    3 * a < c2.length && (c2 = new Uint8Array(c2.buffer.slice(0, 3 * a))), this._applyElevationOffsetInPlace(e, a, r.elevationOffset);
    const h2 = this._transformCoordinates(e, a, O.fromData(r.obbData), f$1.fromJSON(r.inSR), f$1.fromJSON(r.outSR));
    return { obbData: r.obbData, points: h2, rgb: c2, attributes: i$1, pointIdFilterMap: o };
  }
  _transformCoordinates(t2, r, a, n$2, u2) {
    if (!n(t2, n$2, 0, t2, u2, 0, r))
      throw new Error("Can't reproject");
    const l = t$1(a.center), m = n$1(), b = n$1(), p = t$1(a.halfSize);
    O$1(h, a.quaternion);
    const c2 = new Float32Array(3 * r);
    for (let e = 0; e < r; e++) {
      let r2 = 3 * e;
      m[0] = t2[r2] - l[0], m[1] = t2[r2 + 1] - l[1], m[2] = t2[r2 + 2] - l[2], E(b, m, h), p[0] = Math.max(p[0], Math.abs(b[0])), p[1] = Math.max(p[1], Math.abs(b[1])), p[2] = Math.max(p[2], Math.abs(b[2])), c2[r2++] = m[0], c2[r2++] = m[1], c2[r2] = m[2];
    }
    return a.halfSize = p, c2;
  }
  _applyElevationOffsetInPlace(t2, r, e) {
    if (0 !== e)
      for (let a = 0; a < r; a++)
        t2[3 * a + 2] += e;
  }
}
const h = e$1();
function I() {
  return new c();
}
export {
  I as default
};
