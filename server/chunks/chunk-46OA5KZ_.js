import { hw as r, eO as z$1, Ao as v$1, gv as e$1, gu as E$1, Ap as u$2, sN as r$1, Aq as y$2, eQ as n$1, oP as r$2, jk as i$3, iB as s$2, iC as a$4, bo as e$2, bp as y$3, iA as s$3, br as c$4, cO as f$2, iw as m$3, cM as j$1, jo as T, bu as u$3, bh as V, ei as n$2, eY as i$4, bB as s$4, b8 as a$5, bb as s$5, cZ as f$3, c4 as d$3, mJ as e$3, Ar as i$5, cy as x$1, vw as e$4, As as c$5, l6 as u$4, iN as E$2, ck as l$3, cl as u$5, cm as j$2, cD as t$4, cn as m$4, iO as i$6, A5 as y$4, cq as a$6, aM as s$6, ap as M$2, d4 as y$5, j9 as p$c, cH as c$6, cv as d$4, ct as o, d0 as k$1, bN as b$1 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const h = n$1(), i$2 = e$1(), p$b = e$1(), e = e$1(), j = r$2(0, 0, 1), k = r$2(0, 1, 0), v = r$2(1, 0, 0);
function q(a3) {
  r(h, a3), z$1(h, h);
  const n = Math.atan2(h[1], h[0]), o2 = v$1(e$1(), j, -n);
  E$1(h, h, o2);
  const r$12 = -1 * Math.atan2(h[2], h[0]);
  return [u$2(n) + 270, u$2(r$12) + 90];
}
function M$1(t5, n) {
  return v$1(p$b, j, r$1(t5 - 270)), v$1(e, k, r$1(n - 90)), y$2(i$2, p$b, e), r(h, v), E$1(h, h, i$2), z$1(h, h), [h[0], h[1], h[2]];
}
let m$2 = class m extends i$3(f$2) {
  constructor(t5) {
    super(t5), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [t5, o2] = q(this.normal);
    return s$2.normalize(a$4(t5), 0, true);
  }
  set orientation(t5) {
    const o2 = M$1(t5, this.tilt);
    this._set("normal", o2), this._set("orientation", t5);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [t5, o2] = q(this.normal);
    return s$2.normalize(a$4(o2), 0, true);
  }
  set tilt(t5) {
    const o2 = M$1(this.orientation, t5);
    this._set("normal", o2), this._set("tilt", t5);
  }
};
e$2([y$3({ type: Boolean, json: { write: true } })], m$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], m$2.prototype, "label", void 0), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t5) => s$2.normalize(a$4(t5), 0, true))], m$2.prototype, "orientation", null), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t5) => s$2.normalize(a$4(t5), 0, true))], m$2.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: true } })], m$2.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: true } })], m$2.prototype, "point", void 0), m$2 = e$2([c$4("esri.layers.voxel.VoxelSlice")], m$2);
const c$3 = m$2;
let d$2 = class d extends i$3(f$2) {
  constructor() {
    super(...arguments), this.enabled = true, this.href = null, this.id = null, this.label = "", this.normal = null, this.point = null, this.sizeInPixel = null, this.slices = null, this.timeId = 0, this.variableId = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [e2, r2] = q(this.normal);
    return s$2.normalize(a$4(e2), 0, true);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [e2, r2] = q(this.normal);
    return s$2.normalize(a$4(r2), 0, true);
  }
};
e$2([y$3({ type: Boolean, json: { default: true, write: true } })], d$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { origins: { service: { read: m$3 } }, write: { enabled: true, isRequired: true } } }), j$1({ origins: ["web-scene"], type: "resource", prefix: "sections", compress: true })], d$2.prototype, "href", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "id", void 0), e$2([y$3({ type: String, json: { write: true } })], d$2.prototype, "label", void 0), e$2([y$3({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$2.prototype, "orientation", null), e$2([y$3({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$2.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "point", void 0), e$2([y$3({ type: [T], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "sizeInPixel", void 0), e$2([y$3({ type: [c$3], json: { write: true } })], d$2.prototype, "slices", void 0), e$2([y$3({ type: T, json: { default: 0, write: true } })], d$2.prototype, "timeId", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "variableId", void 0), d$2 = e$2([c$4("esri.layers.voxel.VoxelSection")], d$2);
const u$1 = d$2;
let t$3 = class t extends f$2 {
  constructor() {
    super(...arguments), this.diffuseFactor = 0.5, this.specularFactor = 0.5;
  }
};
e$2([y$3({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "diffuseFactor", void 0), e$2([y$3({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "specularFactor", void 0), t$3 = e$2([c$4("esri.layers.voxel.VoxelSimpleShading")], t$3);
const p$a = t$3;
let s$1 = class s extends f$2 {
  constructor() {
    super(...arguments), this.continuity = null, this.hasNoData = false, this.noData = 0, this.offset = 0, this.scale = 1, this.type = null;
  }
};
e$2([y$3({ type: ["discrete", "continuous"], json: { write: true } })], s$1.prototype, "continuity", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], s$1.prototype, "hasNoData", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "noData", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "offset", void 0), e$2([y$3({ type: Number, json: { write: true } })], s$1.prototype, "scale", void 0), e$2([y$3({ type: String, json: { write: { enabled: true, isRequired: true } } })], s$1.prototype, "type", void 0), s$1 = e$2([c$4("esri.layers.voxel.VoxelFormat")], s$1);
const p$9 = s$1;
let i$1 = class i extends f$2 {
  constructor() {
    super(...arguments), this.id = null, this.description = "", this.name = null, this.originalFormat = null, this.renderingFormat = null, this.unit = "", this.volumeId = 0, this.type = null;
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "id", void 0), e$2([y$3({ type: String, json: { write: true } })], i$1.prototype, "description", void 0), e$2([y$3({ type: String, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "name", void 0), e$2([y$3({ type: p$9, json: { write: true } })], i$1.prototype, "originalFormat", void 0), e$2([y$3({ type: p$9, json: { write: { enabled: true, isRequired: true } } })], i$1.prototype, "renderingFormat", void 0), e$2([y$3({ type: String, json: { write: true } })], i$1.prototype, "unit", void 0), e$2([y$3({ type: Number, json: { write: true } })], i$1.prototype, "volumeId", void 0), e$2([y$3({ type: ["stc-hot-spot-results", "stc-cluster-outlier-results", "stc-estimated-bin", "generic-nearest-interpolated"], json: { write: true } })], i$1.prototype, "type", void 0), i$1 = e$2([c$4("esri.layers.voxel.VoxelVariable")], i$1);
const p$8 = i$1;
let l$2 = class l extends i$3(f$2) {
  constructor() {
    super(...arguments), this.color = u$3.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "", this.colorLocked = false;
  }
};
e$2([y$3({ type: u$3, json: { type: [T], write: { enabled: true, isRequired: true } } })], l$2.prototype, "color", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], l$2.prototype, "value", void 0), e$2([y$3({ type: Boolean, json: { default: true, write: true } })], l$2.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], l$2.prototype, "label", void 0), e$2([y$3({ type: Boolean, json: { default: false, write: true } })], l$2.prototype, "colorLocked", void 0), l$2 = e$2([c$4("esri.layers.voxel.VoxelIsosurface")], l$2);
const a$3 = l$2;
let c$2 = class c extends i$3(f$2) {
  constructor() {
    super(...arguments), this.color = null, this.position = 0;
  }
};
e$2([y$3({ type: u$3, json: { type: [T], write: { enabled: true, isRequired: true } } })], c$2.prototype, "color", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], c$2.prototype, "position", void 0), c$2 = e$2([c$4("esri.layers.voxel.VoxelColorStop")], c$2);
const l$1 = c$2;
let p$7 = class p extends i$3(f$2) {
  constructor() {
    super(...arguments), this.opacity = 1, this.position = 0;
  }
};
e$2([y$3({ type: Number, json: { name: "alpha", write: { enabled: true, isRequired: true } } })], p$7.prototype, "opacity", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], p$7.prototype, "position", void 0), p$7 = e$2([c$4("esri.layers.voxel.VoxelOpacityStop")], p$7);
const i2 = p$7;
let p$6 = class p2 extends i$3(f$2) {
  constructor() {
    super(...arguments), this.enabled = false, this.range = null;
  }
};
e$2([y$3({ type: Boolean, json: { default: false, write: true } })], p$6.prototype, "enabled", void 0), e$2([y$3({ type: [Number], json: { write: true } })], p$6.prototype, "range", void 0), p$6 = e$2([c$4("esri.layers.voxel.VoxelRangeFilter")], p$6);
const a$2 = p$6;
var u;
!function(o2) {
  o2[o2.Color = 1] = "Color", o2[o2.Alpha = 2] = "Alpha", o2[o2.Both = 3] = "Both";
}(u || (u = {}));
let y$1 = class y extends i$3(f$2) {
  constructor(o2) {
    super(o2), this.interpolation = null, this.stretchRange = null, this.rangeFilter = null, this._colorMapSize = 256, this.colorStops = new (V.ofType(l$1))(), this.opacityStops = new (V.ofType(i2))();
  }
  set colorStops(o2) {
    this._set("colorStops", n$2(o2, this._get("colorStops"), V.ofType(l$1)));
  }
  set opacityStops(o2) {
    this._set("opacityStops", n$2(o2, this._get("opacityStops"), V.ofType(i2)));
  }
  getPreviousNext(o2, t5, r2) {
    let e2 = o2;
    for (; --e2 > 0 && t5[e2].type !== r2 && t5[e2].type !== u.Both; )
      ;
    let s3 = o2;
    const i3 = t5.length;
    for (; ++s3 < i3 && t5[s3].type !== r2 && t5[s3].type !== u.Both; )
      ;
    return [e2, s3];
  }
  get rasterizedTransferFunction() {
    const o2 = [];
    if (this.colorStops.length < 2)
      return o2;
    const r2 = [], e2 = [], s3 = 1e-5;
    for (const t5 of this.colorStops) {
      if (!t5.color)
        return o2;
      e2.push({ color: { r: t5.color.r, g: t5.color.g, b: t5.color.b, a: Math.round(255 * (1 - t5.color.a)) }, position: t5.position, type: u.Color });
    }
    if (0 === this.opacityStops.length)
      for (const t5 of e2)
        r2.push({ color: t5.color, position: t5.position });
    else {
      for (const t5 of this.opacityStops) {
        const o4 = i$4(t5.position, 0, 1), r3 = Math.round(255 * i$4(1 - t5.opacity, 0, 1));
        let i4 = false;
        for (const t6 of e2)
          if (t6.type === u.Color && Math.abs(t6.position - o4) < s3) {
            t6.color.a = r3, t6.type = u.Both, i4 = true;
            break;
          }
        i4 || e2.push({ color: { r: 0, g: 0, b: 0, a: r3 }, position: t5.position, type: u.Alpha });
      }
      e2.sort((o4, t5) => o4.position < t5.position ? -1 : 1);
      const o3 = e2.length;
      for (let t5 = 0; t5 < o3; ++t5) {
        const r3 = e2[t5];
        if (r3.type !== u.Both)
          if (r3.type === u.Color) {
            const [s4, i4] = this.getPreviousNext(t5, e2, u.Alpha);
            if (-1 !== s4 && i4 !== o3) {
              const o4 = (r3.position - e2[s4].position) / (e2[i4].position - e2[s4].position);
              r3.color.a = Math.round(s$4(e2[s4].color.a, e2[i4].color.a, o4));
            } else
              r3.color.a = -1 !== s4 ? e2[s4].color.a : e2[i4].color.a;
          } else {
            const [s4, i4] = this.getPreviousNext(t5, e2, u.Color);
            if (-1 !== s4 && i4 !== o3) {
              const o4 = (r3.position - e2[s4].position) / (e2[i4].position - e2[s4].position), t6 = e2[s4].color, p5 = e2[i4].color;
              g.forEach((e3) => {
                r3.color[e3] = Math.round(s$4(t6[e3], p5[e3], o4));
              });
            } else
              -1 !== s4 ? g.forEach((o4) => {
                r3.color[o4] = e2[s4].color[o4];
              }) : g.forEach((o4) => {
                r3.color[o4] = e2[i4].color[o4];
              });
          }
      }
      for (const t5 of e2)
        r2.push({ color: t5.color, position: t5.position });
    }
    r2[0].position = 0, r2[r2.length - 1].position = 1;
    let i3 = 0, l3 = 1;
    for (let c3 = 0; c3 < this._colorMapSize; ++c3) {
      const e3 = c3 / this._colorMapSize;
      for (; e3 > r2[l3].position; )
        i3 = l3++;
      const s4 = (e3 - r2[i3].position) / (r2[l3].position - r2[i3].position), a3 = r2[i3].color, h2 = r2[l3].color, f2 = new u$3();
      g.forEach((o3) => {
        f2[o3] = Math.round(s$4(a3[o3], h2[o3], s4));
      }), f2.a = i$4(1 - s$4(a3.a, h2.a, s4) / 255, 0, 1), o2.push(f2);
    }
    return o2;
  }
  getColorForContinuousDataValue(o2, t5) {
    const r2 = this.rasterizedTransferFunction;
    if (this.colorStops.length < 2 || !Array.isArray(this.stretchRange) || this.stretchRange.length < 2 || r2.length < 256)
      return null;
    let e2 = this.stretchRange[0], s3 = this.stretchRange[1];
    if (e2 > s3) {
      const o3 = e2;
      e2 = s3, s3 = o3;
    }
    o2 = i$4(o2, e2, s3);
    const i3 = r2[Math.round((o2 - e2) / (s3 - e2) * (this._colorMapSize - 1))].clone();
    return t5 || (i3.a = 1), i3;
  }
};
e$2([y$3({ type: ["linear", "nearest"], json: { write: true } })], y$1.prototype, "interpolation", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], y$1.prototype, "stretchRange", void 0), e$2([y$3({ type: V.ofType(l$1), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.colorStops && this.colorStops.length > 0 };
} } } })], y$1.prototype, "colorStops", null), e$2([y$3({ type: V.ofType(i2), json: { read: { source: "alphaStops" }, write: { enabled: true, target: "alphaStops", overridePolicy() {
  return { enabled: !!this.opacityStops && this.opacityStops.length > 0 };
} } } })], y$1.prototype, "opacityStops", null), e$2([y$3({ type: a$2, json: { write: true } })], y$1.prototype, "rangeFilter", void 0), e$2([y$3({ type: [u$3], clonable: false, json: { read: false } })], y$1.prototype, "rasterizedTransferFunction", null), y$1 = e$2([c$4("esri.layers.voxel.VoxelTransferFunctionStyle")], y$1);
const S$1 = y$1, g = ["r", "g", "b"];
let a$1 = class a extends i$3(f$2) {
  constructor() {
    super(...arguments), this.color = u$3.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "";
  }
};
e$2([y$3({ type: u$3, json: { type: [T], write: { enabled: true, isRequired: true } } })], a$1.prototype, "color", void 0), e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], a$1.prototype, "value", void 0), e$2([y$3({ type: Boolean, json: { default: true, write: true } })], a$1.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], a$1.prototype, "label", void 0), a$1 = e$2([c$4("esri.layers.voxel.VoxelUniqueValue")], a$1);
const l2 = a$1;
var p$5;
let c$1 = p$5 = class extends f$2 {
  constructor(e2) {
    super(e2), this.variableId = 0, this.label = "", this.transferFunction = null, this.uniqueValues = null, this.isosurfaces = null, this.uniqueValues = new (V.ofType(l2))(), this.isosurfaces = new (V.ofType(a$3))();
  }
  clone() {
    return new p$5({ variableId: this.variableId, label: this.label, transferFunction: a$5(this.transferFunction), uniqueValues: a$5(this.uniqueValues), isosurfaces: a$5(this.isosurfaces) });
  }
};
e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], c$1.prototype, "variableId", void 0), e$2([y$3({ type: String, json: { write: true } })], c$1.prototype, "label", void 0), e$2([y$3({ type: S$1, json: { write: { enabled: true, overridePolicy() {
  return { enabled: !this.uniqueValues || this.uniqueValues.length < 1 };
} } } })], c$1.prototype, "transferFunction", void 0), e$2([y$3({ type: V.ofType(l2), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.uniqueValues && this.uniqueValues.length > 0 };
} } } })], c$1.prototype, "uniqueValues", void 0), e$2([y$3({ type: V.ofType(a$3), json: { write: { enabled: true, overridePolicy() {
  const e2 = !this.uniqueValues || this.uniqueValues.length < 1, s3 = !!this.isosurfaces && this.isosurfaces.length > 0;
  return { enabled: e2 && s3 };
} } } })], c$1.prototype, "isosurfaces", void 0), c$1 = p$5 = e$2([c$4("esri.layers.voxel.VoxelVariableStyle")], c$1);
const f$1 = c$1;
let t$2 = class t2 extends f$2 {
  constructor() {
    super(...arguments), this.values = null;
  }
};
e$2([y$3({ type: [Number], json: { write: true } })], t$2.prototype, "values", void 0), t$2 = e$2([c$4("esri.layers.voxel.VoxelIrregularSpacing")], t$2);
const p$4 = t$2;
let t$1 = class t3 extends f$2 {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = 0;
  }
};
e$2([y$3({ type: Number, json: { write: true } })], t$1.prototype, "scale", void 0), e$2([y$3({ type: Number, json: { write: true } })], t$1.prototype, "offset", void 0), t$1 = e$2([c$4("esri.layers.voxel.VoxelRegularSpacing")], t$1);
const p$3 = t$1;
let p$2 = class p3 extends f$2 {
  constructor() {
    super(...arguments), this.irregularSpacing = null, this.isPositiveUp = true, this.isWrappedDateLine = false, this.label = null, this.name = null, this.quantity = null, this.regularSpacing = null, this.size = 0, this.unit = null;
  }
  get isRegular() {
    return (null == this.irregularSpacing || void 0 === this.irregularSpacing) && null !== this.regularSpacing;
  }
  getRange() {
    return this.isRegular ? [this.regularSpacing.offset, this.regularSpacing.offset + this.regularSpacing.scale * (this.size - 1)] : Array.isArray(this.irregularSpacing?.values) && this.irregularSpacing.values.length > 1 ? [this.irregularSpacing.values[0], this.irregularSpacing.values[this.irregularSpacing.values.length - 1]] : [0, 0];
  }
};
e$2([y$3({ type: p$4, json: { write: true } })], p$2.prototype, "irregularSpacing", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], p$2.prototype, "isPositiveUp", void 0), e$2([y$3({ type: Boolean, json: { write: true } })], p$2.prototype, "isWrappedDateLine", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "label", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "name", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "quantity", void 0), e$2([y$3({ type: p$3, json: { write: true } })], p$2.prototype, "regularSpacing", void 0), e$2([y$3({ type: Number, json: { write: true } })], p$2.prototype, "size", void 0), e$2([y$3({ type: String, json: { write: true } })], p$2.prototype, "unit", void 0), e$2([y$3({ type: Boolean, json: { read: false } })], p$2.prototype, "isRegular", null), p$2 = e$2([c$4("esri.layers.voxel.VoxelDimension")], p$2);
const a2 = p$2;
const y2 = "esri.layers.voxel.VoxelVolume", d$1 = s$5.getLogger(y2);
let f = class extends f$2 {
  constructor(e2) {
    super(e2), this.id = 0, this.dimensions = null, this.spatialReference = f$3.WGS84;
  }
  get zDimension() {
    if (!this.dimensions)
      return -1;
    if (!Array.isArray(this.dimensions))
      return -1;
    if (4 !== this.dimensions.length)
      return -1;
    for (let e2 = 2; e2 < 4; ++e2)
      if (this.dimensions[e2].size > 0)
        return e2;
    return -1;
  }
  get isValid() {
    return !!this.dimensions && (!!Array.isArray(this.dimensions) && (4 === this.dimensions.length && (!(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) && !(-1 === this.zDimension || this.dimensions[this.zDimension].size < 1))));
  }
  get originInLayerSpace3D() {
    if (!this.isValid || "xyt" === this.volumeType)
      return [0, 0, 0];
    const e2 = this.dimensions[0].getRange(), i3 = this.dimensions[1].getRange(), s3 = this.dimensions[2], r2 = s3.isRegular ? s3.getRange() : [0, s3.size];
    return [e2[0], i3[0], r2[0]];
  }
  get voxelSizeInLayerSpaceSigned() {
    if (!this.isValid || "xyt" === this.volumeType)
      return [0, 0, 0];
    const e2 = this.dimensions[0].getRange(), i3 = this.dimensions[1].getRange(), s3 = this.dimensions[2], r2 = s3.isRegular ? s3.getRange() : [0, s3.size], t5 = [this.sizeInVoxels[0], this.sizeInVoxels[1], this.sizeInVoxels[2]];
    for (let n = 0; n < 3; ++n)
      t5[n] < 2 ? t5[n] = 1 : t5[n] -= 1;
    return s3.isRegular && !s3.isPositiveUp && (t5[2] *= -1), [(e2[1] - e2[0]) / t5[0], (i3[1] - i3[0]) / t5[1], (r2[1] - r2[0]) / t5[2]];
  }
  get volumeType() {
    if (this.isValid) {
      const e2 = this.dimensions[2].size > 0, i3 = this.dimensions[3].size > 0;
      if (!e2 && i3)
        return "xyt";
      if (e2 && i3)
        return "xyzt";
    }
    return "xyz";
  }
  get sizeInVoxels() {
    if (!this.isValid)
      return [0, 0, 0];
    const e2 = this.zDimension;
    return [this.dimensions[0].size, this.dimensions[1].size, this.dimensions[e2].size];
  }
  computeVoxelSpaceLocation(e2) {
    if (!this.isValid)
      return [0, 0, 0];
    if ("xyt" === this.volumeType)
      return d$1.error("computeVoxelSpacePosition cannot be used with XYT volumes."), [0, 0, 0];
    if (!d$3(this.spatialReference, e2.spatialReference))
      return d$1.error("pos argument should have the same spatial reference as the VoxelLayer."), [0, 0, 0];
    const i3 = r$2(e2.x, e2.y, e2.z ?? 0);
    e$3(i3, i3, this.originInLayerSpace3D), i$5(i3, i3, this.voxelSizeInLayerSpaceSigned);
    const s3 = this.dimensions[this.zDimension];
    if (!s3.isRegular && Array.isArray(s3.irregularSpacing?.values) && s3.irregularSpacing.values.length > 1) {
      const r2 = e2.z ?? 0, t5 = s3.irregularSpacing.values, n = s3.isPositiveUp ? 1 : -1, o2 = t5.reduce((e3, i4) => Math.abs(n * i4 - r2) < Math.abs(n * e3 - r2) ? i4 : e3);
      for (let e3 = 0; e3 < t5.length; ++e3)
        if (t5[e3] === o2) {
          i3[2] = e3;
          break;
        }
    }
    return [i3[0], i3[1], i3[2]];
  }
  computeLayerSpaceLocation(e2) {
    if (!this.isValid)
      return new x$1({ x: 0, y: 0, spatialReference: this.spatialReference });
    const i3 = e$4(e2);
    if (c$5(i3, i3, this.voxelSizeInLayerSpaceSigned), u$4(i3, i3, this.originInLayerSpace3D), "xyt" === this.volumeType)
      return new x$1({ x: i3[0], y: i3[1], spatialReference: this.spatialReference });
    const s3 = this.dimensions[this.zDimension];
    return s3.isRegular || Array.isArray(s3.irregularSpacing?.values) && (e2[2] < 0 ? i3[2] = s3.irregularSpacing.values[0] : e2[2] < s3.irregularSpacing.values.length ? i3[2] = s3.irregularSpacing.values[e2[2]] : i3[2] = s3.irregularSpacing.values[s3.irregularSpacing.values.length - 1], s3.isPositiveUp || (i3[2] *= -1)), new x$1({ x: i3[0], y: i3[1], z: i3[2], spatialReference: this.spatialReference });
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], f.prototype, "id", void 0), e$2([y$3({ type: [a2], json: { write: { enabled: true, isRequired: true } } })], f.prototype, "dimensions", void 0), e$2([y$3({ type: f$3, json: { read: { enabled: false } } })], f.prototype, "spatialReference", void 0), e$2([y$3({ type: Number, json: { read: false } })], f.prototype, "zDimension", null), e$2([y$3({ type: [Boolean], json: { read: false } })], f.prototype, "isValid", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "originInLayerSpace3D", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "voxelSizeInLayerSpaceSigned", null), e$2([y$3({ type: ["xyz", "xyzt", "xyt"], json: { read: { enabled: false } } })], f.prototype, "volumeType", null), e$2([y$3({ type: [Number], json: { read: false } })], f.prototype, "sizeInVoxels", null), f = e$2([c$4(y2)], f);
const S = f;
var t4;
let s2 = t4 = class extends f$2 {
  constructor() {
    super(...arguments), this.apronWidth = 1, this.brickSize = [32, 32, 32], this.maxLodLevel = 0, this.nodeSize = [4, 4, 4];
  }
  isValid() {
    const e2 = new t4();
    return e2.apronWidth === this.apronWidth && e2.maxLodLevel === this.maxLodLevel && (!!this.brickSize && (!!this.nodeSize && (!(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) && (3 === this.brickSize.length && 3 === this.nodeSize.length && (32 === this.brickSize[0] && 32 === this.brickSize[1] && 32 === this.brickSize[2] && (4 === this.nodeSize[0] && 4 === this.nodeSize[1] && 4 === this.nodeSize[2]))))));
  }
};
e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s2.prototype, "apronWidth", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s2.prototype, "brickSize", void 0), e$2([y$3({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s2.prototype, "maxLodLevel", void 0), e$2([y$3({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s2.prototype, "nodeSize", void 0), s2 = t4 = e$2([c$4("esri.layers.voxel.VoxelVolumeIndex")], s2);
const p$1 = s2;
let m$1 = class m2 extends i$3(f$2) {
  constructor(t5) {
    super(t5), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [t5, o2] = q(this.normal);
    return s$2.normalize(a$4(t5), 0, true);
  }
  set orientation(t5) {
    const o2 = M$1(t5, this.tilt);
    this._set("normal", o2), this._set("orientation", t5);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [t5, o2] = q(this.normal);
    return s$2.normalize(a$4(o2), 0, true);
  }
  set tilt(t5) {
    const o2 = M$1(this.orientation, t5);
    this._set("normal", o2), this._set("tilt", t5);
  }
};
e$2([y$3({ type: Boolean, json: { default: true, write: true } })], m$1.prototype, "enabled", void 0), e$2([y$3({ type: String, json: { write: true } })], m$1.prototype, "label", void 0), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t5) => s$2.normalize(a$4(t5), 0, true))], m$1.prototype, "orientation", null), e$2([y$3({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$3((t5) => s$2.normalize(a$4(t5), 0, true))], m$1.prototype, "tilt", null), e$2([y$3({ type: [Number], json: { write: true } })], m$1.prototype, "normal", void 0), e$2([y$3({ type: [Number], json: { write: true } })], m$1.prototype, "point", void 0), m$1 = e$2([c$4("esri.layers.voxel.VoxelDynamicSection")], m$1);
const c2 = m$1;
var p4;
let m3 = p4 = class extends f$2 {
  constructor(e2) {
    super(e2), this.volumeId = 0, this.verticalExaggeration = 1, this.exaggerationMode = "scale-height", this.verticalOffset = 0, this.slices = new (V.ofType(c$3))(), this.dynamicSections = new (V.ofType(c2))();
  }
  set slices(e2) {
    this._set("slices", n$2(e2, this._get("slices"), V.ofType(c$3)));
  }
  set dynamicSections(e2) {
    this._set("dynamicSections", n$2(e2, this._get("dynamicSections"), V.ofType(c2)));
  }
  clone() {
    return new p4({ volumeId: this.volumeId, verticalExaggeration: this.verticalExaggeration, exaggerationMode: this.exaggerationMode, verticalOffset: this.verticalOffset, slices: a$5(this.slices), dynamicSections: a$5(this.dynamicSections) });
  }
};
e$2([y$3({ type: T, json: { write: { enabled: true, isRequired: true } } })], m3.prototype, "volumeId", void 0), e$2([y$3({ type: Number, json: { default: 1, write: true } })], m3.prototype, "verticalExaggeration", void 0), e$2([y$3({ type: ["scale-position", "scale-height"], json: { default: "scale-height", write: true } })], m3.prototype, "exaggerationMode", void 0), e$2([y$3({ type: Number, json: { default: 0, write: true } })], m3.prototype, "verticalOffset", void 0), e$2([y$3({ type: V.ofType(c$3), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.slices && this.slices.length > 0 };
} } } })], m3.prototype, "slices", null), e$2([y$3({ type: V.ofType(c2), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.dynamicSections && this.dynamicSections.length > 0 };
} } } })], m3.prototype, "dynamicSections", null), m3 = p4 = e$2([c$4("esri.layers.voxel.VoxelVolumeStyle")], m3);
const d2 = m3;
const A = "esri.layers.VoxelLayer", E = s$5.getLogger(A);
let R = class extends E$2(l$3(u$5(j$2(t$4(m$4(i$6(b$1))))))) {
  constructor(e2) {
    super(e2), this.serviceRoot = "", this.operationalLayerType = "Voxel", this.legendEnabled = true, this.title = null, this.sections = null, this.currentVariableId = 0, this.volumeStyles = null, this.renderMode = "volume", this.variableStyles = null, this.enableSlices = true, this.enableSections = true, this.enableDynamicSections = true, this.enableIsosurfaces = true, this.shading = new p$a(), this.opacity = 1, this.variables = new V(), this.volumes = new V(), this.index = null, this.minScale = 0, this.maxScale = 0, this.type = "voxel", this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.fullExtent = null, this.popupEnabled = false, this.test = null, this.volumeStyles = new (V.ofType(d2))(), this.variableStyles = new (V.ofType(f$1))(), this.sections = new (V.ofType(u$1))();
  }
  normalizeCtorArgs(e2) {
    return e2?.constantUpscaling && (this.test = { constantUpscaling: true }, delete e2.constantUpscaling), e2;
  }
  set url(e2) {
    this._set("url", y$4(e2, E));
  }
  load(e2) {
    const t5 = null != e2 ? e2.signal : null, i3 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(a$6).then(() => this._fetchService(t5)).then(() => this.serviceRoot = this.url);
    return this.addResolvingPromise(i3), Promise.resolve(this);
  }
  read(e2, t5) {
    super.read(e2, t5);
    for (const i3 of this.volumes)
      i3.spatialReference = this.spatialReference;
  }
  readVersion(e2, t5) {
    return super.parseVersionString(e2);
  }
  validateLayer(e2) {
    if (e2.layerType && e2.layerType !== this.operationalLayerType)
      throw new s$6("voxel-layer:layer-type-not-supported", "VoxelLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor) || this.version.major < 3)
      throw new s$6("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
    if (this.version.major > 3)
      throw new s$6("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
  }
  readFullExtent(e2, t5, i3) {
    if (null != e2 && "object" == typeof e2) {
      const r2 = M$2.fromJSON(e2, i3);
      if (0 === r2.zmin && 0 === r2.zmax && Array.isArray(t5.volumes)) {
        const e3 = S.fromJSON(t5.volumes[0]);
        if (e3.isValid && "xyt" !== e3.volumeType) {
          const t6 = e3.dimensions[2];
          if (t6.isRegular) {
            let e4 = t6.regularSpacing.offset, i4 = t6.regularSpacing.offset + t6.regularSpacing.scale * (t6.size - 1);
            if (e4 > i4) {
              const t7 = e4;
              e4 = i4, i4 = t7;
            }
            r2.zmin = e4, r2.zmax = i4;
          }
        }
      }
      return r2;
    }
    return null;
  }
  get voxelFields() {
    const e2 = [new y$5({ name: "Voxel.ServiceValue", alias: "Value", domain: null, editable: false, length: 128, type: "string" }), new y$5({ name: "Voxel.ServiceVariableLabel", alias: "Variable", domain: null, editable: false, length: 128, type: "string" }), new y$5({ name: "Voxel.Position", alias: "Voxel Position", domain: null, editable: false, length: 128, type: "string" })], t5 = this.getVolume(null);
    if (null != t5) {
      if ("xyzt" === t5.volumeType || "xyt" === t5.volumeType) {
        const t6 = new y$5({ name: "Voxel.ServiceLocalTime", alias: "Local Time", domain: null, editable: false, length: 128, type: "string" });
        e2.push(t6);
        const i3 = new y$5({ name: "Voxel.ServiceNativeTime", alias: "Native Time", domain: null, editable: false, length: 128, type: "string" });
        e2.push(i3);
      }
      if ("xyt" !== t5.volumeType) {
        const t6 = new y$5({ name: "Voxel.ServiceDepth", alias: "Depth", domain: null, editable: false, length: 128, type: "string" });
        e2.push(t6);
      }
    }
    return e2;
  }
  get popupTemplate() {
    return this.loaded ? this.createPopupTemplate() : null;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(e2) {
    const t5 = this.voxelFields, i3 = this.title;
    return p$c({ fields: t5, title: i3 }, e2);
  }
  getConfiguration() {
    const e2 = { layerType: this.operationalLayerType, version: this.version.versionString, name: this.title, spatialReference: this.spatialReference, fullExtent: this.fullExtent, volumes: this.volumes.toJSON(), variables: this.variables.toJSON(), index: this.index?.toJSON(), sections: this.getSections(), style: { volumeStyles: this.getVolumeStyles(), currentVariableId: this.currentVariableId, renderMode: this.renderMode, variableStyles: this.getVariableStyles(), enableSections: this.enableSections, enableDynamicSections: this.enableDynamicSections, enableIsosurfaces: this.enableIsosurfaces, enableSlices: this.enableSlices, shading: this.shading } };
    return e2.index && this.index?.isValid() ? JSON.stringify(e2) : "";
  }
  getVariableStyle(e2) {
    let t5 = -1;
    t5 = null != e2 ? e2 : this.currentVariableId;
    if (!this.variableStyles || -1 === t5)
      return null;
    const i3 = this.variableStyles.findIndex((e3) => e3.variableId === t5);
    return i3 < 0 ? null : this.variableStyles.at(i3);
  }
  getVariable(e2) {
    let t5 = -1;
    if (t5 = null != e2 ? e2 : this.currentVariableId, !this.variables || -1 === t5)
      return null;
    const i3 = this.variables.findIndex((e3) => e3.id === t5);
    return i3 < 0 ? null : this.variables.at(i3);
  }
  getVolume(e2) {
    const t5 = this.getVariable(e2);
    return null != t5 ? this.volumes.find(({ id: e3 }) => e3 === t5.volumeId) : null;
  }
  getVolumeStyle(e2) {
    const t5 = this.getVariable(e2);
    return null != t5 ? this.volumeStyles.find(({ volumeId: e3 }) => e3 === t5.volumeId) : null;
  }
  getColorForContinuousDataValue(e2, t5, i3) {
    const r2 = this.getVariable(e2);
    if (null == r2 || "continuous" !== r2.renderingFormat?.continuity)
      return null;
    if (!this.variableStyles)
      return null;
    const o2 = this.variableStyles.findIndex((t6) => t6.variableId === e2);
    if (o2 < 0)
      return null;
    const s3 = this.variableStyles.at(o2);
    return s3?.transferFunction ? s3.transferFunction.getColorForContinuousDataValue(t5, i3) : null;
  }
  getSections() {
    const e2 = [];
    for (const t5 of this.sections)
      e2.push(new u$1({ enabled: t5.enabled, href: t5.href, id: t5.id, label: t5.label, normal: t5.normal, point: t5.point, sizeInPixel: t5.sizeInPixel, slices: t5.slices, timeId: t5.timeId, variableId: t5.variableId }));
    return e2;
  }
  getVariableStyles() {
    const e2 = [];
    for (const t5 of this.variableStyles) {
      const i3 = this._getVariable(t5);
      if (null != i3) {
        const r2 = t5.clone();
        r2.isosurfaces.length > 4 && (r2.isosurfaces = r2.isosurfaces.slice(0, 3), E.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));
        for (const e3 of r2.isosurfaces)
          if (!e3.colorLocked) {
            const t6 = this.getColorForContinuousDataValue(r2.variableId, e3.value, false);
            null === t6 || t6.equals(e3.color) || (e3.color = t6);
          }
        if ("continuous" === i3.renderingFormat.continuity)
          (null === r2.transferFunction || r2.transferFunction.colorStops.length < 2) && E.error(`VoxelVariableStyle for variable ${i3.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`), null !== r2.transferFunction && (Array.isArray(r2.transferFunction.stretchRange) && 2 === r2.transferFunction.stretchRange.length || (E.error(`VoxelVariableStyle for variable ${i3.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`), r2.transferFunction.stretchRange = [0, 1], r2.transferFunction.colorStops.removeAll()));
        else if ("discrete" === i3.renderingFormat.continuity)
          if (0 === t5.uniqueValues.length)
            E.error(`VoxelVariableStyle for variable ${i3.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);
          else
            for (const e3 of t5.uniqueValues)
              null !== e3.label && void 0 !== e3.label || null === e3.value || void 0 === e3.value || (e3.label = e3.value.toString());
        e2.push(r2);
      } else
        E.error(`VoxelVariable ID=${t5.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);
    }
    return e2;
  }
  getVolumeStyles() {
    const e2 = [];
    for (const t5 of this.volumeStyles) {
      const i3 = this._getVolumeFromVolumeId(t5.volumeId);
      if (null != i3) {
        const r2 = t5.clone();
        for (const e3 of r2.slices)
          this._isPlaneValid(e3, [0, 1, i3.zDimension], i3.dimensions) || (e3.enabled = false, e3.label = "invalid");
        for (const e3 of r2.dynamicSections)
          this._isPlaneValid(e3, [0, 1, i3.zDimension], i3.dimensions) || (e3.enabled = false, e3.label = "invalid");
        e2.push(r2);
      } else
        E.error(`VoxelVolume ID=${t5.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);
    }
    return e2;
  }
  _getVariable(e2) {
    const t5 = e2.variableId;
    for (const i3 of this.variables)
      if (i3.id === t5)
        return i3;
    return null;
  }
  _getVolumeFromVolumeId(e2) {
    for (const t5 of this.volumes)
      if (t5.id === e2)
        return t5;
    return null;
  }
  _isPlaneValid(e2, t5, i3) {
    if (!e2.point)
      return false;
    if (!Array.isArray(e2.point) || 3 !== e2.point.length)
      return false;
    if (!e2.normal)
      return false;
    if (!Array.isArray(e2.normal) || 3 !== e2.normal.length)
      return false;
    const r2 = r$2(e2.normal[0], e2.normal[1], e2.normal[2]);
    z$1(r2, r2);
    const o2 = 1e-6;
    return !(Math.abs(r2[0]) + Math.abs(r2[1]) + Math.abs(r2[2]) < o2) && (e2.normal[0] = r2[0], e2.normal[1] = r2[1], e2.normal[2] = r2[2], true);
  }
};
e$2([y$3({ type: ["Voxel"] })], R.prototype, "operationalLayerType", void 0), e$2([y$3(c$6)], R.prototype, "legendEnabled", void 0), e$2([y$3({ json: { write: true } })], R.prototype, "title", void 0), e$2([y$3(d$4)], R.prototype, "url", null), e$2([y$3({ type: V.ofType(u$1), json: { origins: { "web-scene": { name: "layerDefinition.sections", write: true } } } })], R.prototype, "sections", void 0), e$2([y$3({ type: T, json: { origins: { "web-scene": { name: "layerDefinition.style.currentVariableId", write: { enabled: true, isRequired: true, ignoreOrigin: true } }, service: { name: "style.currentVariableId" } } } })], R.prototype, "currentVariableId", void 0), e$2([y$3({ type: V.ofType(d2), json: { origins: { "web-scene": { name: "layerDefinition.style.volumeStyles", write: true }, service: { name: "style.volumeStyles" } } } })], R.prototype, "volumeStyles", void 0), e$2([y$3({ type: ["volume", "surfaces"], json: { origins: { "web-scene": { name: "layerDefinition.style.renderMode", write: true }, service: { name: "style.renderMode" } } } })], R.prototype, "renderMode", void 0), e$2([y$3({ type: V.ofType(f$1), json: { origins: { "web-scene": { name: "layerDefinition.style.variableStyles", write: true }, service: { name: "style.variableStyles" } } } })], R.prototype, "variableStyles", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSlices", write: true }, service: { name: "style.enableSlices" } } } })], R.prototype, "enableSlices", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSections", write: true }, service: { name: "style.enableSections" } } } })], R.prototype, "enableSections", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableDynamicSections", write: true }, service: { name: "style.enableDynamicSections" } } } })], R.prototype, "enableDynamicSections", void 0), e$2([y$3({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableIsosurfaces", write: true }, service: { name: "style.enableIsosurfaces" } } } })], R.prototype, "enableIsosurfaces", void 0), e$2([y$3({ type: p$a, json: { origins: { "web-scene": { name: "layerDefinition.style.shading", write: true }, service: { name: "style.shading" } } } })], R.prototype, "shading", void 0), e$2([y$3({ type: ["show", "hide"] })], R.prototype, "listMode", void 0), e$2([y$3({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { read: false, write: false, origins: { "web-scene": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], R.prototype, "opacity", void 0), e$2([y$3({ type: V.ofType(p$8) })], R.prototype, "variables", void 0), e$2([y$3({ type: V.ofType(S) })], R.prototype, "volumes", void 0), e$2([y$3({ type: p$1 })], R.prototype, "index", void 0), e$2([y$3({ type: Number, json: { name: "layerDefinition.minScale", read: false, write: false, origins: { service: { read: false, write: false } } } })], R.prototype, "minScale", void 0), e$2([y$3({ type: Number, json: { name: "layerDefinition.maxScale", read: false, write: false, origins: { service: { read: false, write: false } } } })], R.prototype, "maxScale", void 0), e$2([y$3({ json: { read: false }, readOnly: true })], R.prototype, "type", void 0), e$2([y$3({ readOnly: true, json: { name: "serviceVersion" } })], R.prototype, "version", void 0), e$2([o("service", "version")], R.prototype, "readVersion", null), e$2([y$3({ type: M$2 })], R.prototype, "fullExtent", void 0), e$2([o("service", "fullExtent", ["fullExtent"])], R.prototype, "readFullExtent", null), e$2([y$3({ readOnly: true, clonable: false, json: { read: false } })], R.prototype, "voxelFields", null), e$2([y$3({ type: Boolean, json: { name: "disablePopup", read: { reader: (e2, t5) => !t5.disablePopup }, write: { enabled: true, ignoreOrigin: true, writer(e2, t5, i3) {
  t5[i3] = !e2;
} }, origins: { "portal-item": { default: true }, "web-scene": { default: true } } } })], R.prototype, "popupEnabled", void 0), e$2([y$3({ type: k$1, json: { read: false } })], R.prototype, "popupTemplate", null), e$2([y$3({ readOnly: true })], R.prototype, "defaultPopupTemplate", null), R = e$2([c$4(A)], R);
const M = R;
export {
  M as default
};
