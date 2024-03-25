import { aI as r$1, fE as z$1, zY as I, hi as e$1, hh as E$1, zZ as c$4, ui as u$3, z_ as x$1, aW as n$1, aE as r$2, jT as i$1, ei as s$3, je as a$4, aV as e, aX as y$2, jd as s$4, a_ as c$5, db as f$2, j9 as p$b, d9 as j$1, jX as T, b$ as u$4, bQ as V, f8 as n$2, es as e$2, c6 as f$3, bD as a$5, aB as f$4, aT as s$5, bO as G, aF as e$3, z$ as i$2, cY as x$2, ph as e$4, A0 as c$6, aG as u$5, jp as L, au as l$4, av as u$6, aw as j$2, ax as t$4, ay as m$3, az as e$5, aA as i$3, zX as y$3, aP as a$6, aO as s$6, aC as M, dv as y$4, jI as p$c, d4 as c$7, aZ as d$4, cV as o, dp as P, a$ as b$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const f$1 = n$1(), l$3 = e$1(), u$2 = e$1(), p$a = e$1(), h = r$2(0, 0, 1), j = r$2(0, 1, 0), x = r$2(1, 0, 0);
function b(r) {
  r$1(f$1, r), z$1(f$1, f$1);
  const a3 = Math.atan2(f$1[1], f$1[0]), s4 = I(e$1(), h, -a3);
  E$1(f$1, f$1, s4);
  const c3 = -1 * Math.atan2(f$1[2], f$1[0]);
  return [c$4(a3) + 270, c$4(c3) + 90];
}
function g$1(o2, a3) {
  return I(u$2, h, u$3(o2 - 270)), I(p$a, j, u$3(a3 - 90)), x$1(l$3, u$2, p$a), r$1(f$1, x), E$1(f$1, f$1, l$3), z$1(f$1, f$1), [f$1[0], f$1[1], f$1[2]];
}
let m$2 = class m extends i$1(f$2) {
  constructor(o2) {
    super(o2), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [o2, t5] = b(this.normal);
    return s$3.normalize(a$4(o2), 0, true);
  }
  set orientation(o2) {
    const t5 = g$1(o2, this.tilt);
    this._set("normal", t5), this._set("orientation", o2);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [o2, t5] = b(this.normal);
    return s$3.normalize(a$4(t5), 0, true);
  }
  set tilt(o2) {
    const t5 = g$1(this.orientation, o2);
    this._set("normal", t5), this._set("tilt", o2);
  }
};
e([y$2({ type: Boolean, json: { write: true } })], m$2.prototype, "enabled", void 0), e([y$2({ type: String, json: { write: true } })], m$2.prototype, "label", void 0), e([y$2({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$4((o2) => s$3.normalize(a$4(o2), 0, true))], m$2.prototype, "orientation", null), e([y$2({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$4((o2) => s$3.normalize(a$4(o2), 0, true))], m$2.prototype, "tilt", null), e([y$2({ type: [Number], json: { write: true } })], m$2.prototype, "normal", void 0), e([y$2({ type: [Number], json: { write: true } })], m$2.prototype, "point", void 0), m$2 = e([c$5("esri.layers.voxel.VoxelSlice")], m$2);
const c$3 = m$2;
let d$3 = class d extends i$1(f$2) {
  constructor() {
    super(...arguments), this.enabled = true, this.href = null, this.id = null, this.label = "", this.normal = null, this.point = null, this.sizeInPixel = null, this.slices = null, this.timeId = 0, this.variableId = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [e2, r] = b(this.normal);
    return s$3.normalize(a$4(e2), 0, true);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [e2, r] = b(this.normal);
    return s$3.normalize(a$4(r), 0, true);
  }
};
e([y$2({ type: Boolean, json: { default: true, write: true } })], d$3.prototype, "enabled", void 0), e([y$2({ type: String, json: { origins: { service: { read: p$b } }, write: { enabled: true, isRequired: true } } }), j$1({ origins: ["web-scene"], type: "resource", prefix: "sections", compress: true })], d$3.prototype, "href", void 0), e([y$2({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$3.prototype, "id", void 0), e([y$2({ type: String, json: { write: true } })], d$3.prototype, "label", void 0), e([y$2({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$3.prototype, "orientation", null), e([y$2({ type: Number, clonable: false, readOnly: true, range: { min: 0, max: 360 } })], d$3.prototype, "tilt", null), e([y$2({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$3.prototype, "normal", void 0), e([y$2({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], d$3.prototype, "point", void 0), e([y$2({ type: [T], json: { write: { enabled: true, isRequired: true } } })], d$3.prototype, "sizeInPixel", void 0), e([y$2({ type: [c$3], json: { write: true } })], d$3.prototype, "slices", void 0), e([y$2({ type: T, json: { default: 0, write: true } })], d$3.prototype, "timeId", void 0), e([y$2({ type: T, json: { write: { enabled: true, isRequired: true } } })], d$3.prototype, "variableId", void 0), d$3 = e([c$5("esri.layers.voxel.VoxelSection")], d$3);
const u$1 = d$3;
let t$3 = class t extends f$2 {
  constructor() {
    super(...arguments), this.diffuseFactor = 0.5, this.specularFactor = 0.5;
  }
};
e([y$2({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "diffuseFactor", void 0), e([y$2({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: true } })], t$3.prototype, "specularFactor", void 0), t$3 = e([c$5("esri.layers.voxel.VoxelSimpleShading")], t$3);
const p$9 = t$3;
let s$2 = class s extends f$2 {
  constructor() {
    super(...arguments), this.continuity = null, this.hasNoData = false, this.noData = 0, this.offset = 0, this.scale = 1, this.type = null;
  }
};
e([y$2({ type: ["discrete", "continuous"], json: { write: true } })], s$2.prototype, "continuity", void 0), e([y$2({ type: Boolean, json: { write: true } })], s$2.prototype, "hasNoData", void 0), e([y$2({ type: Number, json: { write: true } })], s$2.prototype, "noData", void 0), e([y$2({ type: Number, json: { write: true } })], s$2.prototype, "offset", void 0), e([y$2({ type: Number, json: { write: true } })], s$2.prototype, "scale", void 0), e([y$2({ type: String, json: { write: { enabled: true, isRequired: true } } })], s$2.prototype, "type", void 0), s$2 = e([c$5("esri.layers.voxel.VoxelFormat")], s$2);
const p$8 = s$2;
let s$1 = class s2 extends f$2 {
  constructor() {
    super(...arguments), this.id = null, this.description = "", this.name = null, this.originalFormat = null, this.renderingFormat = null, this.unit = "", this.volumeId = 0, this.type = null;
  }
};
e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s$1.prototype, "id", void 0), e([y$2({ type: String, json: { write: true } })], s$1.prototype, "description", void 0), e([y$2({ type: String, json: { write: { enabled: true, isRequired: true } } })], s$1.prototype, "name", void 0), e([y$2({ type: p$8, json: { write: true } })], s$1.prototype, "originalFormat", void 0), e([y$2({ type: p$8, json: { write: { enabled: true, isRequired: true } } })], s$1.prototype, "renderingFormat", void 0), e([y$2({ type: String, json: { write: true } })], s$1.prototype, "unit", void 0), e([y$2({ type: Number, json: { write: true } })], s$1.prototype, "volumeId", void 0), e([y$2({ type: ["stc-hot-spot-results", "stc-cluster-outlier-results", "stc-estimated-bin", "generic-nearest-interpolated"], json: { write: true } })], s$1.prototype, "type", void 0), s$1 = e([c$5("esri.layers.voxel.VoxelVariable")], s$1);
const p$7 = s$1;
let l$2 = class l extends i$1(f$2) {
  constructor() {
    super(...arguments), this.color = u$4.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "", this.colorLocked = false;
  }
};
e([y$2({ type: u$4, json: { type: [T], write: { enabled: true, isRequired: true } } })], l$2.prototype, "color", void 0), e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], l$2.prototype, "value", void 0), e([y$2({ type: Boolean, json: { default: true, write: true } })], l$2.prototype, "enabled", void 0), e([y$2({ type: String, json: { write: true } })], l$2.prototype, "label", void 0), e([y$2({ type: Boolean, json: { default: false, write: true } })], l$2.prototype, "colorLocked", void 0), l$2 = e([c$5("esri.layers.voxel.VoxelIsosurface")], l$2);
const a$3 = l$2;
let c$2 = class c extends i$1(f$2) {
  constructor() {
    super(...arguments), this.color = null, this.position = 0;
  }
};
e([y$2({ type: u$4, json: { type: [T], write: { enabled: true, isRequired: true } } })], c$2.prototype, "color", void 0), e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], c$2.prototype, "position", void 0), c$2 = e([c$5("esri.layers.voxel.VoxelColorStop")], c$2);
const l$1 = c$2;
let p$6 = class p extends i$1(f$2) {
  constructor() {
    super(...arguments), this.opacity = 1, this.position = 0;
  }
};
e([y$2({ type: Number, json: { name: "alpha", write: { enabled: true, isRequired: true } } })], p$6.prototype, "opacity", void 0), e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], p$6.prototype, "position", void 0), p$6 = e([c$5("esri.layers.voxel.VoxelOpacityStop")], p$6);
const i = p$6;
let p$5 = class p2 extends i$1(f$2) {
  constructor() {
    super(...arguments), this.enabled = false, this.range = null;
  }
};
e([y$2({ type: Boolean, json: { default: false, write: true } })], p$5.prototype, "enabled", void 0), e([y$2({ type: [Number], json: { write: true } })], p$5.prototype, "range", void 0), p$5 = e([c$5("esri.layers.voxel.VoxelRangeFilter")], p$5);
const a$2 = p$5;
var u;
!function(o2) {
  o2[o2.Color = 1] = "Color", o2[o2.Alpha = 2] = "Alpha", o2[o2.Both = 3] = "Both";
}(u || (u = {}));
let y$1 = class y extends i$1(f$2) {
  constructor(o2) {
    super(o2), this.interpolation = null, this.stretchRange = null, this.rangeFilter = null, this._colorMapSize = 256, this.colorStops = new (V.ofType(l$1))(), this.opacityStops = new (V.ofType(i))();
  }
  set colorStops(o2) {
    this._set("colorStops", n$2(o2, this._get("colorStops"), V.ofType(l$1)));
  }
  set opacityStops(o2) {
    this._set("opacityStops", n$2(o2, this._get("opacityStops"), V.ofType(i)));
  }
  getPreviousNext(o2, t5, r) {
    let e2 = o2;
    for (; --e2 > 0 && t5[e2].type !== r && t5[e2].type !== u.Both; )
      ;
    let s4 = o2;
    const i2 = t5.length;
    for (; ++s4 < i2 && t5[s4].type !== r && t5[s4].type !== u.Both; )
      ;
    return [e2, s4];
  }
  get rasterizedTransferFunction() {
    const o2 = [];
    if (this.colorStops.length < 2)
      return o2;
    const r = [], e2 = [], s4 = 1e-5;
    for (const t5 of this.colorStops) {
      if (!t5.color)
        return o2;
      e2.push({ color: { r: t5.color.r, g: t5.color.g, b: t5.color.b, a: Math.round(255 * (1 - t5.color.a)) }, position: t5.position, type: u.Color });
    }
    if (0 === this.opacityStops.length)
      for (const t5 of e2)
        r.push({ color: t5.color, position: t5.position });
    else {
      for (const t5 of this.opacityStops) {
        const o4 = e$2(t5.position, 0, 1), r2 = Math.round(255 * e$2(1 - t5.opacity, 0, 1));
        let i3 = false;
        for (const t6 of e2)
          if (t6.type === u.Color && Math.abs(t6.position - o4) < s4) {
            t6.color.a = r2, t6.type = u.Both, i3 = true;
            break;
          }
        i3 || e2.push({ color: { r: 0, g: 0, b: 0, a: r2 }, position: t5.position, type: u.Alpha });
      }
      e2.sort((o4, t5) => o4.position < t5.position ? -1 : 1);
      const o3 = e2.length;
      for (let t5 = 0; t5 < o3; ++t5) {
        const r2 = e2[t5];
        if (r2.type !== u.Both)
          if (r2.type === u.Color) {
            const [s5, i3] = this.getPreviousNext(t5, e2, u.Alpha);
            if (-1 !== s5 && i3 !== o3) {
              const o4 = (r2.position - e2[s5].position) / (e2[i3].position - e2[s5].position);
              r2.color.a = Math.round(f$3(e2[s5].color.a, e2[i3].color.a, o4));
            } else
              r2.color.a = -1 !== s5 ? e2[s5].color.a : e2[i3].color.a;
          } else {
            const [s5, i3] = this.getPreviousNext(t5, e2, u.Color);
            if (-1 !== s5 && i3 !== o3) {
              const o4 = (r2.position - e2[s5].position) / (e2[i3].position - e2[s5].position), t6 = e2[s5].color, p4 = e2[i3].color;
              S.forEach((e3) => {
                r2.color[e3] = Math.round(f$3(t6[e3], p4[e3], o4));
              });
            } else
              -1 !== s5 ? S.forEach((o4) => {
                r2.color[o4] = e2[s5].color[o4];
              }) : S.forEach((o4) => {
                r2.color[o4] = e2[i3].color[o4];
              });
          }
      }
      for (const t5 of e2)
        r.push({ color: t5.color, position: t5.position });
    }
    r[0].position = 0, r[r.length - 1].position = 1;
    let i2 = 0, l3 = 1;
    for (let c3 = 0; c3 < this._colorMapSize; ++c3) {
      const e3 = c3 / this._colorMapSize;
      for (; e3 > r[l3].position; )
        i2 = l3++;
      const s5 = (e3 - r[i2].position) / (r[l3].position - r[i2].position), a3 = r[i2].color, h2 = r[l3].color, f2 = new u$4();
      S.forEach((o3) => {
        f2[o3] = Math.round(f$3(a3[o3], h2[o3], s5));
      }), f2.a = e$2(1 - f$3(a3.a, h2.a, s5) / 255, 0, 1), o2.push(f2);
    }
    return o2;
  }
  getColorForContinuousDataValue(o2, t5) {
    const r = this.rasterizedTransferFunction;
    if (this.colorStops.length < 2 || !Array.isArray(this.stretchRange) || this.stretchRange.length < 2 || r.length < 256)
      return null;
    let e2 = this.stretchRange[0], s4 = this.stretchRange[1];
    if (e2 > s4) {
      const o3 = e2;
      e2 = s4, s4 = o3;
    }
    o2 = e$2(o2, e2, s4);
    const i2 = r[Math.round((o2 - e2) / (s4 - e2) * (this._colorMapSize - 1))].clone();
    return t5 || (i2.a = 1), i2;
  }
};
e([y$2({ type: ["linear", "nearest"], json: { write: true } })], y$1.prototype, "interpolation", void 0), e([y$2({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], y$1.prototype, "stretchRange", void 0), e([y$2({ type: V.ofType(l$1), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.colorStops && this.colorStops.length > 0 };
} } } })], y$1.prototype, "colorStops", null), e([y$2({ type: V.ofType(i), json: { read: { source: "alphaStops" }, write: { enabled: true, target: "alphaStops", overridePolicy() {
  return { enabled: !!this.opacityStops && this.opacityStops.length > 0 };
} } } })], y$1.prototype, "opacityStops", null), e([y$2({ type: a$2, json: { write: true } })], y$1.prototype, "rangeFilter", void 0), e([y$2({ type: [u$4], clonable: false, json: { read: false } })], y$1.prototype, "rasterizedTransferFunction", null), y$1 = e([c$5("esri.layers.voxel.VoxelTransferFunctionStyle")], y$1);
const g = y$1, S = ["r", "g", "b"];
let a$1 = class a extends i$1(f$2) {
  constructor() {
    super(...arguments), this.color = u$4.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = true, this.label = "";
  }
};
e([y$2({ type: u$4, json: { type: [T], write: { enabled: true, isRequired: true } } })], a$1.prototype, "color", void 0), e([y$2({ type: T, json: { write: { enabled: true, isRequired: true } } })], a$1.prototype, "value", void 0), e([y$2({ type: Boolean, json: { default: true, write: true } })], a$1.prototype, "enabled", void 0), e([y$2({ type: String, json: { write: true } })], a$1.prototype, "label", void 0), a$1 = e([c$5("esri.layers.voxel.VoxelUniqueValue")], a$1);
const l2 = a$1;
var p$4;
let c$1 = p$4 = class extends f$2 {
  constructor(e2) {
    super(e2), this.variableId = 0, this.label = "", this.transferFunction = null, this.uniqueValues = null, this.isosurfaces = null, this.uniqueValues = new (V.ofType(l2))(), this.isosurfaces = new (V.ofType(a$3))();
  }
  clone() {
    return new p$4({ variableId: this.variableId, label: this.label, transferFunction: a$5(this.transferFunction), uniqueValues: a$5(this.uniqueValues), isosurfaces: a$5(this.isosurfaces) });
  }
};
e([y$2({ type: T, json: { write: { enabled: true, isRequired: true } } })], c$1.prototype, "variableId", void 0), e([y$2({ type: String, json: { write: true } })], c$1.prototype, "label", void 0), e([y$2({ type: g, json: { write: { enabled: true, overridePolicy() {
  return { enabled: !this.uniqueValues || this.uniqueValues.length < 1 };
} } } })], c$1.prototype, "transferFunction", void 0), e([y$2({ type: V.ofType(l2), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.uniqueValues && this.uniqueValues.length > 0 };
} } } })], c$1.prototype, "uniqueValues", void 0), e([y$2({ type: V.ofType(a$3), json: { write: { enabled: true, overridePolicy() {
  const e2 = !this.uniqueValues || this.uniqueValues.length < 1, s4 = !!this.isosurfaces && this.isosurfaces.length > 0;
  return { enabled: e2 && s4 };
} } } })], c$1.prototype, "isosurfaces", void 0), c$1 = p$4 = e([c$5("esri.layers.voxel.VoxelVariableStyle")], c$1);
const f = c$1;
let t$2 = class t2 extends f$2 {
  constructor() {
    super(...arguments), this.values = null;
  }
};
e([y$2({ type: [Number], json: { write: true } })], t$2.prototype, "values", void 0), t$2 = e([c$5("esri.layers.voxel.VoxelIrregularSpacing")], t$2);
const p$3 = t$2;
let t$1 = class t3 extends f$2 {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = 0;
  }
};
e([y$2({ type: Number, json: { write: true } })], t$1.prototype, "scale", void 0), e([y$2({ type: Number, json: { write: true } })], t$1.prototype, "offset", void 0), t$1 = e([c$5("esri.layers.voxel.VoxelRegularSpacing")], t$1);
const p$2 = t$1;
let a2 = class extends f$2 {
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
e([y$2({ type: p$3, json: { write: true } })], a2.prototype, "irregularSpacing", void 0), e([y$2({ type: Boolean, json: { write: true } })], a2.prototype, "isPositiveUp", void 0), e([y$2({ type: Boolean, json: { write: true } })], a2.prototype, "isWrappedDateLine", void 0), e([y$2({ type: String, json: { write: true } })], a2.prototype, "label", void 0), e([y$2({ type: String, json: { write: true } })], a2.prototype, "name", void 0), e([y$2({ type: String, json: { write: true } })], a2.prototype, "quantity", void 0), e([y$2({ type: p$2, json: { write: true } })], a2.prototype, "regularSpacing", void 0), e([y$2({ type: Number, json: { write: true } })], a2.prototype, "size", void 0), e([y$2({ type: String, json: { write: true } })], a2.prototype, "unit", void 0), e([y$2({ type: Boolean, json: { read: false } })], a2.prototype, "isRegular", null), a2 = e([c$5("esri.layers.voxel.VoxelDimension")], a2);
const p$1 = a2;
let d$2 = class d2 extends f$2 {
  constructor(e2) {
    super(e2), this.id = 0, this.dimensions = null, this.spatialReference = f$4.WGS84;
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
    const e2 = this.dimensions[0].getRange(), i2 = this.dimensions[1].getRange(), s4 = this.dimensions[2], r = s4.isRegular ? s4.getRange() : [0, s4.size];
    return [e2[0], i2[0], r[0]];
  }
  get voxelSizeInLayerSpaceSigned() {
    if (!this.isValid || "xyt" === this.volumeType)
      return [0, 0, 0];
    const e2 = this.dimensions[0].getRange(), i2 = this.dimensions[1].getRange(), s4 = this.dimensions[2], r = s4.isRegular ? s4.getRange() : [0, s4.size], t5 = [this.sizeInVoxels[0], this.sizeInVoxels[1], this.sizeInVoxels[2]];
    for (let n = 0; n < 3; ++n)
      t5[n] < 2 ? t5[n] = 1 : t5[n] -= 1;
    return s4.isRegular && !s4.isPositiveUp && (t5[2] *= -1), [(e2[1] - e2[0]) / t5[0], (i2[1] - i2[0]) / t5[1], (r[1] - r[0]) / t5[2]];
  }
  get volumeType() {
    if (this.isValid) {
      const e2 = this.dimensions[2].size > 0, i2 = this.dimensions[3].size > 0;
      if (!e2 && i2)
        return "xyt";
      if (e2 && i2)
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
      return s$5.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."), [0, 0, 0];
    if (!G(this.spatialReference, e2.spatialReference))
      return s$5.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."), [0, 0, 0];
    const i2 = r$2(e2.x, e2.y, e2.z ?? 0);
    e$3(i2, i2, this.originInLayerSpace3D), i$2(i2, i2, this.voxelSizeInLayerSpaceSigned);
    const r = this.dimensions[this.zDimension];
    if (!r.isRegular && Array.isArray(r.irregularSpacing?.values) && r.irregularSpacing.values.length > 1) {
      const s4 = e2.z ?? 0, t5 = r.irregularSpacing.values, n = r.isPositiveUp ? 1 : -1, o2 = t5.reduce((e3, i3) => Math.abs(n * i3 - s4) < Math.abs(n * e3 - s4) ? i3 : e3);
      for (let e3 = 0; e3 < t5.length; ++e3)
        if (t5[e3] === o2) {
          i2[2] = e3;
          break;
        }
    }
    return [i2[0], i2[1], i2[2]];
  }
  computeLayerSpaceLocation(e2) {
    if (!this.isValid)
      return new x$2({ x: 0, y: 0, spatialReference: this.spatialReference });
    const i2 = e$4(e2);
    if (c$6(i2, i2, this.voxelSizeInLayerSpaceSigned), u$5(i2, i2, this.originInLayerSpace3D), "xyt" === this.volumeType)
      return new x$2({ x: i2[0], y: i2[1], spatialReference: this.spatialReference });
    const s4 = this.dimensions[this.zDimension];
    return s4.isRegular || Array.isArray(s4.irregularSpacing?.values) && (e2[2] < 0 ? i2[2] = s4.irregularSpacing.values[0] : e2[2] < s4.irregularSpacing.values.length ? i2[2] = s4.irregularSpacing.values[e2[2]] : i2[2] = s4.irregularSpacing.values[s4.irregularSpacing.values.length - 1], s4.isPositiveUp || (i2[2] *= -1)), new x$2({ x: i2[0], y: i2[1], z: i2[2], spatialReference: this.spatialReference });
  }
};
e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "id", void 0), e([y$2({ type: [p$1], json: { write: { enabled: true, isRequired: true } } })], d$2.prototype, "dimensions", void 0), e([y$2({ type: f$4, json: { read: { enabled: false } } })], d$2.prototype, "spatialReference", void 0), e([y$2({ type: Number, json: { read: false } })], d$2.prototype, "zDimension", null), e([y$2({ type: [Boolean], json: { read: false } })], d$2.prototype, "isValid", null), e([y$2({ type: [Number], json: { read: false } })], d$2.prototype, "originInLayerSpace3D", null), e([y$2({ type: [Number], json: { read: false } })], d$2.prototype, "voxelSizeInLayerSpaceSigned", null), e([y$2({ type: ["xyz", "xyzt", "xyt"], json: { read: { enabled: false } } })], d$2.prototype, "volumeType", null), e([y$2({ type: [Number], json: { read: false } })], d$2.prototype, "sizeInVoxels", null), d$2 = e([c$5("esri.layers.voxel.VoxelVolume")], d$2);
const y2 = d$2;
var t4;
let s3 = t4 = class extends f$2 {
  constructor() {
    super(...arguments), this.apronWidth = 1, this.brickSize = [32, 32, 32], this.maxLodLevel = 0, this.nodeSize = [4, 4, 4];
  }
  isValid() {
    const e2 = new t4();
    return e2.apronWidth === this.apronWidth && e2.maxLodLevel === this.maxLodLevel && (!!this.brickSize && (!!this.nodeSize && (!(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) && (3 === this.brickSize.length && 3 === this.nodeSize.length && (32 === this.brickSize[0] && 32 === this.brickSize[1] && 32 === this.brickSize[2] && (4 === this.nodeSize[0] && 4 === this.nodeSize[1] && 4 === this.nodeSize[2]))))));
  }
};
e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s3.prototype, "apronWidth", void 0), e([y$2({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s3.prototype, "brickSize", void 0), e([y$2({ type: Number, json: { write: { enabled: true, isRequired: true } } })], s3.prototype, "maxLodLevel", void 0), e([y$2({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], s3.prototype, "nodeSize", void 0), s3 = t4 = e([c$5("esri.layers.voxel.VoxelVolumeIndex")], s3);
const d$1 = s3;
let m$1 = class m2 extends i$1(f$2) {
  constructor(o2) {
    super(o2), this.enabled = true, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [o2, t5] = b(this.normal);
    return s$3.normalize(a$4(o2), 0, true);
  }
  set orientation(o2) {
    const t5 = g$1(o2, this.tilt);
    this._set("normal", t5), this._set("orientation", o2);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || 3 !== this.normal.length)
      return 0;
    const [o2, t5] = b(this.normal);
    return s$3.normalize(a$4(t5), 0, true);
  }
  set tilt(o2) {
    const t5 = g$1(this.orientation, o2);
    this._set("normal", t5), this._set("tilt", o2);
  }
};
e([y$2({ type: Boolean, json: { default: true, write: true } })], m$1.prototype, "enabled", void 0), e([y$2({ type: String, json: { write: true } })], m$1.prototype, "label", void 0), e([y$2({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$4((o2) => s$3.normalize(a$4(o2), 0, true))], m$1.prototype, "orientation", null), e([y$2({ type: Number, json: { read: false }, clonable: false, range: { min: 0, max: 360 } }), s$4((o2) => s$3.normalize(a$4(o2), 0, true))], m$1.prototype, "tilt", null), e([y$2({ type: [Number], json: { write: true } })], m$1.prototype, "normal", void 0), e([y$2({ type: [Number], json: { write: true } })], m$1.prototype, "point", void 0), m$1 = e([c$5("esri.layers.voxel.VoxelDynamicSection")], m$1);
const c2 = m$1;
var p3;
let m3 = p3 = class extends f$2 {
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
    return new p3({ volumeId: this.volumeId, verticalExaggeration: this.verticalExaggeration, exaggerationMode: this.exaggerationMode, verticalOffset: this.verticalOffset, slices: a$5(this.slices), dynamicSections: a$5(this.dynamicSections) });
  }
};
e([y$2({ type: T, json: { write: { enabled: true, isRequired: true } } })], m3.prototype, "volumeId", void 0), e([y$2({ type: Number, json: { default: 1, write: true } })], m3.prototype, "verticalExaggeration", void 0), e([y$2({ type: ["scale-position", "scale-height"], json: { default: "scale-height", write: true } })], m3.prototype, "exaggerationMode", void 0), e([y$2({ type: Number, json: { default: 0, write: true } })], m3.prototype, "verticalOffset", void 0), e([y$2({ type: V.ofType(c$3), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.slices && this.slices.length > 0 };
} } } })], m3.prototype, "slices", null), e([y$2({ type: V.ofType(c2), json: { write: { enabled: true, overridePolicy() {
  return { enabled: !!this.dynamicSections && this.dynamicSections.length > 0 };
} } } })], m3.prototype, "dynamicSections", null), m3 = p3 = e([c$5("esri.layers.voxel.VoxelVolumeStyle")], m3);
const d3 = m3;
let A = class extends L(l$4(u$6(j$2(t$4(m$3(e$5(i$3(b$1)))))))) {
  constructor(e2) {
    super(e2), this.serviceRoot = "", this.operationalLayerType = "Voxel", this.legendEnabled = true, this.title = null, this.sections = null, this.currentVariableId = 0, this.volumeStyles = null, this.renderMode = "volume", this.variableStyles = null, this.enableSlices = true, this.enableSections = true, this.enableDynamicSections = true, this.enableIsosurfaces = true, this.shading = new p$9(), this.opacity = 1, this.variables = new V(), this.volumes = new V(), this.index = null, this.minScale = 0, this.maxScale = 0, this.type = "voxel", this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.fullExtent = null, this.popupEnabled = false, this.test = null, this.volumeStyles = new (V.ofType(d3))(), this.variableStyles = new (V.ofType(f))(), this.sections = new (V.ofType(u$1))();
  }
  normalizeCtorArgs(e2) {
    return e2?.constantUpscaling && (this.test = { constantUpscaling: true }, delete e2.constantUpscaling), e2;
  }
  set url(e2) {
    this._set("url", y$3(e2, s$5.getLogger(this)));
  }
  load(e2) {
    const t5 = null != e2 ? e2.signal : null, i2 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2).catch(a$6).then(() => this._fetchService(t5)).then(() => this.serviceRoot = this.url);
    return this.addResolvingPromise(i2), Promise.resolve(this);
  }
  read(e2, t5) {
    super.read(e2, t5);
    for (const i2 of this.volumes)
      i2.spatialReference = this.spatialReference;
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
  readFullExtent(e2, t5, i2) {
    if (null != e2 && "object" == typeof e2) {
      const o2 = M.fromJSON(e2, i2);
      if (0 === o2.zmin && 0 === o2.zmax && Array.isArray(t5.volumes)) {
        const e3 = y2.fromJSON(t5.volumes[0]);
        if (e3.isValid && "xyt" !== e3.volumeType) {
          const t6 = e3.dimensions[2];
          if (t6.isRegular) {
            let e4 = t6.regularSpacing.offset, i3 = t6.regularSpacing.offset + t6.regularSpacing.scale * (t6.size - 1);
            if (e4 > i3) {
              const t7 = e4;
              e4 = i3, i3 = t7;
            }
            o2.zmin = e4, o2.zmax = i3;
          }
        }
      }
      return o2;
    }
    return null;
  }
  get voxelFields() {
    const e2 = [new y$4({ name: "Voxel.ServiceValue", alias: "Value", domain: null, editable: false, length: 128, type: "string" }), new y$4({ name: "Voxel.ServiceVariableLabel", alias: "Variable", domain: null, editable: false, length: 128, type: "string" }), new y$4({ name: "Voxel.Position", alias: "Voxel Position", domain: null, editable: false, length: 128, type: "string" })], t5 = this.getVolume(null);
    if (null != t5) {
      if ("xyzt" === t5.volumeType || "xyt" === t5.volumeType) {
        const t6 = new y$4({ name: "Voxel.ServiceLocalTime", alias: "Local Time", domain: null, editable: false, length: 128, type: "string" });
        e2.push(t6);
        const i2 = new y$4({ name: "Voxel.ServiceNativeTime", alias: "Native Time", domain: null, editable: false, length: 128, type: "string" });
        e2.push(i2);
      }
      if ("xyt" !== t5.volumeType) {
        const t6 = new y$4({ name: "Voxel.ServiceDepth", alias: "Depth", domain: null, editable: false, length: 128, type: "string" });
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
    const t5 = this.voxelFields, i2 = this.title;
    return p$c({ fields: t5, title: i2 }, e2);
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
    const i2 = this.variableStyles.findIndex((e3) => e3.variableId === t5);
    return i2 < 0 ? null : this.variableStyles.at(i2);
  }
  getVariable(e2) {
    let t5 = -1;
    if (t5 = null != e2 ? e2 : this.currentVariableId, !this.variables || -1 === t5)
      return null;
    const i2 = this.variables.findIndex((e3) => e3.id === t5);
    return i2 < 0 ? null : this.variables.at(i2);
  }
  getVolume(e2) {
    const t5 = this.getVariable(e2);
    return null != t5 ? this.volumes.find(({ id: e3 }) => e3 === t5.volumeId) : null;
  }
  getVolumeStyle(e2) {
    const t5 = this.getVariable(e2);
    return null != t5 ? this.volumeStyles.find(({ volumeId: e3 }) => e3 === t5.volumeId) : null;
  }
  getColorForContinuousDataValue(e2, t5, i2) {
    const o2 = this.getVariable(e2);
    if (null == o2 || "continuous" !== o2.renderingFormat?.continuity)
      return null;
    if (!this.variableStyles)
      return null;
    const r = this.variableStyles.findIndex((t6) => t6.variableId === e2);
    if (r < 0)
      return null;
    const s4 = this.variableStyles.at(r);
    return s4?.transferFunction ? s4.transferFunction.getColorForContinuousDataValue(t5, i2) : null;
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
      const i2 = this._getVariable(t5);
      if (null != i2) {
        const o2 = t5.clone();
        o2.isosurfaces.length > 4 && (o2.isosurfaces = o2.isosurfaces.slice(0, 3), s$5.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));
        for (const e3 of o2.isosurfaces)
          if (!e3.colorLocked) {
            const t6 = this.getColorForContinuousDataValue(o2.variableId, e3.value, false);
            null === t6 || t6.equals(e3.color) || (e3.color = t6);
          }
        if ("continuous" === i2.renderingFormat.continuity)
          (null === o2.transferFunction || o2.transferFunction.colorStops.length < 2) && s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i2.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`), null !== o2.transferFunction && (Array.isArray(o2.transferFunction.stretchRange) && 2 === o2.transferFunction.stretchRange.length || (s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i2.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`), o2.transferFunction.stretchRange = [0, 1], o2.transferFunction.colorStops.removeAll()));
        else if ("discrete" === i2.renderingFormat.continuity)
          if (0 === t5.uniqueValues.length)
            s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i2.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);
          else
            for (const e3 of t5.uniqueValues)
              null !== e3.label && void 0 !== e3.label || null === e3.value || void 0 === e3.value || (e3.label = e3.value.toString());
        e2.push(o2);
      } else
        s$5.getLogger(this).error(`VoxelVariable ID=${t5.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);
    }
    return e2;
  }
  getVolumeStyles() {
    const e2 = [];
    for (const t5 of this.volumeStyles) {
      const i2 = this._getVolumeFromVolumeId(t5.volumeId);
      if (null != i2) {
        const o2 = t5.clone();
        for (const e3 of o2.slices)
          this._isPlaneValid(e3, [0, 1, i2.zDimension], i2.dimensions) || (e3.enabled = false, e3.label = "invalid");
        for (const e3 of o2.dynamicSections)
          this._isPlaneValid(e3, [0, 1, i2.zDimension], i2.dimensions) || (e3.enabled = false, e3.label = "invalid");
        e2.push(o2);
      } else
        s$5.getLogger(this).error(`VoxelVolume ID=${t5.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);
    }
    return e2;
  }
  _getVariable(e2) {
    const t5 = e2.variableId;
    for (const i2 of this.variables)
      if (i2.id === t5)
        return i2;
    return null;
  }
  _getVolumeFromVolumeId(e2) {
    for (const t5 of this.volumes)
      if (t5.id === e2)
        return t5;
    return null;
  }
  _isPlaneValid(e2, t5, i2) {
    if (!e2.point)
      return false;
    if (!Array.isArray(e2.point) || 3 !== e2.point.length)
      return false;
    if (!e2.normal)
      return false;
    if (!Array.isArray(e2.normal) || 3 !== e2.normal.length)
      return false;
    const o2 = r$2(e2.normal[0], e2.normal[1], e2.normal[2]);
    z$1(o2, o2);
    const r = 1e-6;
    return !(Math.abs(o2[0]) + Math.abs(o2[1]) + Math.abs(o2[2]) < r) && (e2.normal[0] = o2[0], e2.normal[1] = o2[1], e2.normal[2] = o2[2], true);
  }
};
e([y$2({ type: ["Voxel"] })], A.prototype, "operationalLayerType", void 0), e([y$2(c$7)], A.prototype, "legendEnabled", void 0), e([y$2({ json: { write: true } })], A.prototype, "title", void 0), e([y$2(d$4)], A.prototype, "url", null), e([y$2({ type: V.ofType(u$1), json: { origins: { "web-scene": { name: "layerDefinition.sections", write: true } } } })], A.prototype, "sections", void 0), e([y$2({ type: T, json: { origins: { "web-scene": { name: "layerDefinition.style.currentVariableId", write: { enabled: true, isRequired: true, ignoreOrigin: true } }, service: { name: "style.currentVariableId" } } } })], A.prototype, "currentVariableId", void 0), e([y$2({ type: V.ofType(d3), json: { origins: { "web-scene": { name: "layerDefinition.style.volumeStyles", write: true }, service: { name: "style.volumeStyles" } } } })], A.prototype, "volumeStyles", void 0), e([y$2({ type: ["volume", "surfaces"], json: { origins: { "web-scene": { name: "layerDefinition.style.renderMode", write: true }, service: { name: "style.renderMode" } } } })], A.prototype, "renderMode", void 0), e([y$2({ type: V.ofType(f), json: { origins: { "web-scene": { name: "layerDefinition.style.variableStyles", write: true }, service: { name: "style.variableStyles" } } } })], A.prototype, "variableStyles", void 0), e([y$2({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSlices", write: true }, service: { name: "style.enableSlices" } } } })], A.prototype, "enableSlices", void 0), e([y$2({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSections", write: true }, service: { name: "style.enableSections" } } } })], A.prototype, "enableSections", void 0), e([y$2({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableDynamicSections", write: true }, service: { name: "style.enableDynamicSections" } } } })], A.prototype, "enableDynamicSections", void 0), e([y$2({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableIsosurfaces", write: true }, service: { name: "style.enableIsosurfaces" } } } })], A.prototype, "enableIsosurfaces", void 0), e([y$2({ type: p$9, json: { origins: { "web-scene": { name: "layerDefinition.style.shading", write: true }, service: { name: "style.shading" } } } })], A.prototype, "shading", void 0), e([y$2({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), e([y$2({ type: Number, range: { min: 0, max: 1 }, nonNullable: true, json: { read: false, write: false, origins: { "web-scene": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], A.prototype, "opacity", void 0), e([y$2({ type: V.ofType(p$7) })], A.prototype, "variables", void 0), e([y$2({ type: V.ofType(y2) })], A.prototype, "volumes", void 0), e([y$2({ type: d$1 })], A.prototype, "index", void 0), e([y$2({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "minScale", void 0), e([y$2({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "maxScale", void 0), e([y$2({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), e([y$2({ readOnly: true, json: { name: "serviceVersion" } })], A.prototype, "version", void 0), e([o("service", "version")], A.prototype, "readVersion", null), e([y$2({ type: M })], A.prototype, "fullExtent", void 0), e([o("service", "fullExtent", ["fullExtent"])], A.prototype, "readFullExtent", null), e([y$2({ readOnly: true, clonable: false, json: { read: false } })], A.prototype, "voxelFields", null), e([y$2({ type: Boolean, json: { name: "disablePopup", read: { reader: (e2, t5) => !t5.disablePopup }, write: { enabled: true, ignoreOrigin: true, writer(e2, t5, i2) {
  t5[i2] = !e2;
} }, origins: { "portal-item": { default: true }, "web-scene": { default: true } } } })], A.prototype, "popupEnabled", void 0), e([y$2({ type: P, json: { read: false } })], A.prototype, "popupTemplate", null), e([y$2({ readOnly: true })], A.prototype, "defaultPopupTemplate", null), A = e([c$5("esri.layers.VoxelLayer")], A);
const E = A;
export {
  E as default
};
