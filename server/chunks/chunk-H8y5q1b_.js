import { hY as C$1, uF as t$4, bu as u$1, wi as j$1, tP as y$1, wj as A$1, wk as e$1, nA as L$2, i7 as $$1, od as a$3, wl as f$2, tg as l$3 } from "./chunk-KFNcxJaF.js";
import { h as h$1, t as t$5 } from "./chunk-ZLxFSCNp.js";
let t$3 = class t {
  constructor(t4) {
    this._array = [], t4 <= 0 && console.error("strideInBytes must be positive!"), this._stride = t4;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t4, r3) {
    return 65535 & t4 | r3 << 16;
  }
  static i8888to32(t4, r3, e2, s) {
    return 255 & t4 | (255 & r3) << 8 | (255 & e2) << 16 | s << 24;
  }
  static i8816to32(t4, r3, e2) {
    return 255 & t4 | (255 & r3) << 8 | e2 << 16;
  }
};
var N$1, R$1;
!function(N2) {
  N2[N2.R8_SIGNED = 0] = "R8_SIGNED", N2[N2.R8_UNSIGNED = 1] = "R8_UNSIGNED", N2[N2.R16_SIGNED = 2] = "R16_SIGNED", N2[N2.R16_UNSIGNED = 3] = "R16_UNSIGNED", N2[N2.R8G8_SIGNED = 4] = "R8G8_SIGNED", N2[N2.R8G8_UNSIGNED = 5] = "R8G8_UNSIGNED", N2[N2.R16G16_SIGNED = 6] = "R16G16_SIGNED", N2[N2.R16G16_UNSIGNED = 7] = "R16G16_UNSIGNED", N2[N2.R8G8B8A8_SIGNED = 8] = "R8G8B8A8_SIGNED", N2[N2.R8G8B8A8_UNSIGNED = 9] = "R8G8B8A8_UNSIGNED", N2[N2.R8G8B8A8_COLOR = 10] = "R8G8B8A8_COLOR", N2[N2.R16G16B16A16_DASHARRAY = 11] = "R16G16B16A16_DASHARRAY", N2[N2.R16G16B16A16_PATTERN = 12] = "R16G16B16A16_PATTERN";
}(N$1 || (N$1 = {})), function(N2) {
  N2[N2.UNIFORM = 0] = "UNIFORM", N2[N2.DATA_DRIVEN = 1] = "DATA_DRIVEN", N2[N2.INTERPOLATED_DATA_DRIVEN = 2] = "INTERPOLATED_DATA_DRIVEN", N2[N2.UNUSED = 3] = "UNUSED";
}(R$1 || (R$1 = {}));
let r$1 = class r {
  constructor(t4) {
    this._locations = /* @__PURE__ */ new Map(), this._key = t4;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return 0 === this._locations.size && this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t4, e2, n2, o2, s) {
    const r3 = this.getUniforms();
    for (const i4 of r3) {
      const { name: r4, type: a2, getValue: c3 } = i4, u2 = c3(n2, e2, o2, s);
      if (null !== u2)
        switch (a2) {
          case "float":
            t4.setUniform1f(r4, u2);
            break;
          case "vec2":
            t4.setUniform2fv(r4, u2);
            break;
          case "vec4":
            t4.setUniform4fv(r4, u2);
        }
    }
  }
  encodeAttributes(t4, n2, o2, s) {
    const r3 = this.attributesInfo(), i4 = this.getEncodingInfos(), a2 = [];
    let c3 = 0, u2 = 0;
    for (const f2 of Object.keys(i4)) {
      const _3 = i4[f2], { type: h2, precisionFactor: l3, isLayout: d3 } = r3[f2], y2 = d3 ? o2.getLayoutProperty(f2) : o2.getPaintProperty(f2), I2 = y2.interpolator?.getInterpolationRange(n2);
      let m2 = 0;
      for (const o3 of _3) {
        const { offset: r4, bufferElementsToAdd: i5 } = o3;
        if (i5 > 0) {
          for (let t5 = 0; t5 < i5; t5++)
            a2.push(0);
          c3 += u2, u2 = o3.bufferElementsToAdd;
        }
        const f3 = s ?? y2.getValue(I2 ? I2[m2] : n2, t4);
        switch (h2) {
          case N$1.R8_SIGNED:
          case N$1.R8_UNSIGNED:
            a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4);
            break;
          case N$1.R16_SIGNED:
          case N$1.R16_UNSIGNED:
            a2[c3] |= this._encodeShort(f3 * (l3 || 1), 8 * r4);
            break;
          case N$1.R8G8_SIGNED:
          case N$1.R8G8_UNSIGNED:
            a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4), a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4 + 8);
            break;
          case N$1.R16G16_SIGNED:
          case N$1.R16G16_UNSIGNED:
            a2[c3] |= this._encodeShort(f3 * (l3 || 1), 8 * r4), a2[c3] |= this._encodeShort(f3 * (l3 || 1), 8 * r4 + 16);
            break;
          case N$1.R8G8B8A8_SIGNED:
          case N$1.R8G8B8A8_UNSIGNED:
            a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4), a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4 + 8), a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4 + 16), a2[c3] |= this._encodeByte(f3 * (l3 || 1), 8 * r4 + 24);
            break;
          case N$1.R8G8B8A8_COLOR:
            a2[c3] = this._encodeColor(f3);
            break;
          case N$1.R16G16B16A16_DASHARRAY:
          case N$1.R16G16B16A16_PATTERN:
            this._encodePattern(c3, a2, f3);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        m2++;
      }
    }
    return a2;
  }
  getAtributeState(t4) {
    let e2 = 0;
    const n2 = 3 + 2 * t4;
    return e2 |= this._bit(n2), e2 |= this._bit(n2 + 1) << 1, e2;
  }
  _buildAttributesInfo() {
    const t4 = [], e2 = {}, s = {};
    let i4 = -1;
    const a2 = this.attributesInfo(), c3 = this.attributes();
    let u2 = -1;
    for (const o2 of c3) {
      u2++;
      const c4 = this.getAtributeState(u2);
      if (c4 === R$1.UNIFORM || c4 === R$1.UNUSED)
        continue;
      const f3 = a2[o2], _4 = [];
      e2[o2] = _4;
      const h3 = f3.type;
      for (let e3 = 0; e3 < c4; e3++) {
        const { dataType: e4, bytesPerElement: n2, count: o3, normalized: a3 } = r._encodingInfo[h3], c5 = n2 * o3, u3 = `${e4}-${true === a3}`;
        let f4 = s[u3], l3 = 0;
        if (!f4 || f4.count + o3 > 4)
          i4++, f4 = { dataIndex: i4, count: 0, offset: 0 }, 4 !== o3 && (s[u3] = f4), t4.push({ location: -1, name: "a_data_" + i4, count: o3, type: e4, normalized: a3 }), l3 = Math.ceil(Math.max(c5 / 4, 1));
        else {
          const e5 = t4[f4.dataIndex];
          e5.count += o3;
          l3 = Math.ceil(Math.max(e5.count * n2 / 4, 1)) - Math.ceil(Math.max(f4.offset / 4, 1));
        }
        _4.push({ dataIndex: f4.dataIndex, offset: f4.offset, bufferElementsToAdd: l3 }), f4.offset += c5, f4.count += o3;
      }
    }
    for (const n2 of t4)
      switch (n2.type) {
        case C$1.BYTE:
        case C$1.UNSIGNED_BYTE:
          n2.count = 4;
          break;
        case C$1.SHORT:
        case C$1.UNSIGNED_SHORT:
          n2.count += n2.count % 2;
      }
    this._buildVertexBufferLayout(t4);
    let f2 = 0;
    const _3 = this._layoutInfo.geometry;
    for (const n2 of _3)
      this._locations.set(n2.name, f2++);
    const h2 = this._layoutInfo.opacity;
    if (h2)
      for (const n2 of h2)
        this._locations.set(n2.name, f2++);
    this._buildShaderInfo(t4, e2), this._propertyEncodingInfo = e2;
  }
  _buildVertexBufferLayout(t4) {
    const e2 = {}, n2 = this.geometryInfo();
    let o2 = n2[0].stride;
    if (0 === t4.length)
      e2.geometry = n2;
    else {
      const r3 = [];
      let a2 = o2;
      for (const e3 of t4)
        o2 += i$3(e3.type) * e3.count;
      for (const t5 of n2)
        r3.push(new t$4(t5.name, t5.count, t5.type, t5.offset, o2, t5.normalized));
      for (const e3 of t4)
        r3.push(new t$4(e3.name, e3.count, e3.type, a2, o2, e3.normalized)), a2 += i$3(e3.type) * e3.count;
      e2.geometry = r3;
    }
    this.opacityInfo() && (e2.opacity = this.opacityInfo()), this._layoutInfo = e2, this._stride = o2;
  }
  _buildShaderInfo(t4, o2) {
    let s = "\n", i4 = "\n";
    const c3 = [];
    for (const e2 of t4)
      s += `attribute ${this._getType(e2.count)} ${e2.name};
`;
    const u2 = this.attributes(), f2 = this.attributesInfo();
    let _3 = -1;
    for (const h2 of u2) {
      _3++;
      const { name: t5, type: u3, precisionFactor: l3, isLayout: d3 } = f2[h2], y2 = l3 && 1 !== l3 ? " * " + 1 / l3 : "", { bytesPerElement: I2, count: m2 } = r._encodingInfo[u3], E2 = (t6) => `a_data_${t6.dataIndex}${a$2(m2, t6.offset, I2)}`;
      switch (this.getAtributeState(_3)) {
        case R$1.UNIFORM:
          {
            const n2 = this._getType(m2), o3 = `u_${t5}`;
            c3.push({ name: o3, type: n2, getValue: (t6, n3, o4, s2) => {
              const r3 = d3 ? t6.getLayoutValue(h2, n3) : t6.getPaintValue(h2, n3);
              if (u3 === N$1.R16G16B16A16_DASHARRAY) {
                const e2 = t6.getDashKey(r3, t6.getLayoutValue("line-cap", n3)), o5 = s2.getMosaicItemPosition(e2, false);
                if (null == o5)
                  return null;
                const { tl: i5, br: a2 } = o5;
                return [i5[0], a2[1], a2[0], i5[1]];
              }
              if (u3 === N$1.R16G16B16A16_PATTERN) {
                const t7 = s2.getMosaicItemPosition(r3, !h2.includes("line-"));
                if (null == t7)
                  return null;
                const { tl: e2, br: n4 } = t7;
                return [e2[0], n4[1], n4[0], e2[1]];
              }
              if (u3 === N$1.R8G8B8A8_COLOR) {
                const t7 = r3[3];
                return [t7 * r3[0], t7 * r3[1], t7 * r3[2], t7];
              }
              return r3;
            } }), s += `uniform ${n2} ${o3};
`, i4 += `${n2} ${t5} = ${o3};
`;
          }
          break;
        case R$1.DATA_DRIVEN:
          {
            const e2 = E2(o2[h2][0]);
            i4 += `${this._getType(m2)} ${t5} = ${e2}${y2};
`;
          }
          break;
        case R$1.INTERPOLATED_DATA_DRIVEN: {
          const e2 = `u_t_${t5}`;
          c3.push({ name: e2, type: "float", getValue: (t6, e3, n3, o3) => (d3 ? t6.getLayoutProperty(h2) : t6.getPaintProperty(h2)).interpolator.interpolationUniformValue(n3, e3) }), s += `uniform float ${e2};
`;
          const n2 = E2(o2[h2][0]), r3 = E2(o2[h2][1]);
          i4 += `${this._getType(m2)} ${t5} = mix(${n2}${y2}, ${r3}${y2}, ${e2});
`;
        }
      }
    }
    this._shaderHeader = s, this._shaderMain = i4, this._uniforms = c3;
  }
  _bit(t4) {
    return (this._key & 1 << t4) >> t4;
  }
  _getType(t4) {
    switch (t4) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(e2) {
    const n2 = 255 * e2[3];
    return t$3.i8888to32(e2[0] * n2, e2[1] * n2, e2[2] * n2, n2);
  }
  _encodePattern(t4, e2, n2) {
    if (!n2?.rect)
      return;
    const o2 = 2, s = n2.rect, r3 = n2.width, i4 = n2.height;
    e2[t4] = this._encodeShort(s.x + o2, 0), e2[t4] |= this._encodeShort(s.y + o2 + i4, 16), e2[t4 + 1] = this._encodeShort(s.x + o2 + r3, 0), e2[t4 + 1] |= this._encodeShort(s.y + o2, 16);
  }
  _encodeByte(t4, e2) {
    return (255 & t4) << e2;
  }
  _encodeShort(t4, e2) {
    return (65535 & t4) << e2;
  }
};
r$1._encodingInfo = { [N$1.R8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N$1.R8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N$1.R16_SIGNED]: { dataType: C$1.SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N$1.R16_UNSIGNED]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N$1.R8G8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N$1.R8G8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N$1.R16G16_SIGNED]: { dataType: C$1.SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N$1.R16G16_UNSIGNED]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N$1.R8G8B8A8_SIGNED]: { dataType: C$1.BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N$1.R8G8B8A8_UNSIGNED]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N$1.R8G8B8A8_COLOR]: { dataType: C$1.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: true }, [N$1.R16G16B16A16_DASHARRAY]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false }, [N$1.R16G16B16A16_PATTERN]: { dataType: C$1.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false } };
const i$3 = (t4) => {
  switch (t4) {
    case C$1.FLOAT:
    case C$1.INT:
    case C$1.UNSIGNED_INT:
      return 4;
    case C$1.SHORT:
    case C$1.UNSIGNED_SHORT:
      return 2;
    case C$1.BYTE:
    case C$1.UNSIGNED_BYTE:
      return 1;
  }
}, a$2 = (t4, e2, n2) => {
  const o2 = e2 / n2;
  if (1 === t4)
    switch (o2) {
      case 0:
        return ".x";
      case 1:
        return ".y";
      case 2:
        return ".z";
      case 3:
        return ".w";
    }
  else if (2 === t4)
    switch (o2) {
      case 0:
        return ".xy";
      case 1:
        return ".yz";
      case 2:
        return ".zw";
    }
  else if (3 === t4)
    switch (o2) {
      case 0:
        return ".xyz";
      case 1:
        return ".yzw";
    }
  return "";
};
let T$3 = class T extends r$1 {
  constructor(r3) {
    super(r3);
  }
  geometryInfo() {
    return T.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return T.ATTRIBUTES;
  }
  attributesInfo() {
    return T.ATTRIBUTES_INFO;
  }
};
T$3.ATTRIBUTES = [], T$3.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.BYTE, 0, 2)], T$3.ATTRIBUTES_INFO = {};
let t$2 = class t2 extends r$1 {
  constructor(r3) {
    super(r3);
  }
  geometryInfo() {
    return t2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return t2.ATTRIBUTES;
  }
  attributesInfo() {
    return t2.ATTRIBUTES_INFO;
  }
};
t$2.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], t$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 4)], t$2.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: N$1.R8_UNSIGNED }, "circle-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "circle-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: N$1.R8G8B8A8_COLOR }, "circle-stroke-opacity": { name: "stroke_opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "circle-blur": { name: "blur", type: N$1.R8_UNSIGNED, precisionFactor: 32 } };
let l$2 = class l extends r$1 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return l.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return l.ATTRIBUTES;
  }
  attributesInfo() {
    return l.ATTRIBUTES_INFO;
  }
};
l$2.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"], l$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 4)], l$2.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "fill-pattern": { name: "tlbr", type: N$1.R16G16B16A16_PATTERN, isOptional: true } };
let T$2 = class T2 extends r$1 {
  constructor(o2, t4) {
    super(o2), this._usefillColor = t4;
  }
  geometryInfo() {
    return T2.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this._usefillColor ? T2.ATTRIBUTES_FILL : T2.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this._usefillColor ? T2.ATTRIBUTES_INFO_FILL : T2.ATTRIBUTES_INFO_OUTLINE;
  }
};
T$2.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], T$2.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], T$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 8), new t$4("a_offset", 2, C$1.BYTE, 4, 8), new t$4("a_xnormal", 2, C$1.BYTE, 6, 8)], T$2.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 } }, T$2.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 } };
let i$2 = class i extends r$1 {
  constructor(e2) {
    super(e2);
  }
  geometryInfo() {
    return i.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return i.ATTRIBUTES;
  }
  attributesInfo() {
    return i.ATTRIBUTES_INFO;
  }
};
i$2.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width", "line-pattern", "line-dasharray"], i$2.GEOMETRY_LAYOUT = [new t$4("a_pos", 2, C$1.SHORT, 0, 16), new t$4("a_extrude_offset", 4, C$1.BYTE, 4, 16), new t$4("a_dir_normal", 4, C$1.BYTE, 8, 16), new t$4("a_accumulatedDistance", 2, C$1.UNSIGNED_SHORT, 12, 16)], i$2.ATTRIBUTES_INFO = { "line-width": { name: "width", type: N$1.R8_UNSIGNED, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: N$1.R8_UNSIGNED, precisionFactor: 2 }, "line-offset": { name: "offset", type: N$1.R8_SIGNED, precisionFactor: 2 }, "line-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "line-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "line-blur": { name: "blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "line-pattern": { name: "tlbr", type: N$1.R16G16B16A16_PATTERN, isOptional: true }, "line-dasharray": { name: "tlbr", type: N$1.R16G16B16A16_DASHARRAY, isOptional: true } };
const a$1 = [new t$4("a_pos", 2, C$1.SHORT, 0, 16), new t$4("a_vertexOffset", 2, C$1.SHORT, 4, 16), new t$4("a_texAngleRange", 4, C$1.UNSIGNED_BYTE, 8, 16), new t$4("a_levelInfo", 4, C$1.UNSIGNED_BYTE, 12, 16)], n = [new t$4("a_opacityInfo", 1, C$1.UNSIGNED_BYTE, 0, 1)];
let i$1 = class i2 extends r$1 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a$1;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return i2.ATTRIBUTES;
  }
  attributesInfo() {
    return i2.ATTRIBUTES_INFO;
  }
};
i$1.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], i$1.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "icon-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: N$1.R8G8B8A8_COLOR }, "icon-halo-width": { name: "halo_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "icon-size": { name: "size", type: N$1.R8_UNSIGNED, precisionFactor: 32, isLayout: true } };
let c$2 = class c extends r$1 {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a$1;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return c.ATTRIBUTES;
  }
  attributesInfo() {
    return c.ATTRIBUTES_INFO;
  }
};
c$2.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], c$2.ATTRIBUTES_INFO = { "text-color": { name: "color", type: N$1.R8G8B8A8_COLOR }, "text-opacity": { name: "opacity", type: N$1.R8_UNSIGNED, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: N$1.R8G8B8A8_COLOR }, "text-halo-width": { name: "halo_width", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: N$1.R8_UNSIGNED, precisionFactor: 4 }, "text-size": { name: "size", type: N$1.R8_UNSIGNED, isLayout: true } };
const r2 = { kind: "null" }, e = { kind: "number" }, t$1 = { kind: "string" }, i3 = { kind: "boolean" }, o = { kind: "color" }, f$1 = { kind: "object" }, u = { kind: "value" };
function a(n2, r3) {
  return { kind: "array", itemType: n2, n: r3 };
}
const y = [r2, e, t$1, i3, o, f$1, a(u)];
function k$1(n2) {
  if ("array" === n2.kind) {
    const r3 = k$1(n2.itemType);
    return "number" == typeof n2.n ? `array<${r3}, ${n2.n}>` : "value" === n2.itemType.kind ? "array" : `array<${r3}>`;
  }
  return n2.kind;
}
function l$1(y2) {
  if (null === y2)
    return r2;
  if ("string" == typeof y2)
    return t$1;
  if ("boolean" == typeof y2)
    return i3;
  if ("number" == typeof y2)
    return e;
  if (y2 instanceof u$1)
    return o;
  if (Array.isArray(y2)) {
    let n2;
    for (const r3 of y2) {
      const e2 = l$1(r3);
      if (n2) {
        if (n2 !== e2) {
          n2 = u;
          break;
        }
      } else
        n2 = e2;
    }
    return a(n2 || u, y2.length);
  }
  return "object" == typeof y2 ? f$1 : u;
}
function c$1(n2, r3) {
  if ("array" === r3.kind)
    return "array" === n2.kind && (0 === n2.n && "value" === n2.itemType.kind || c$1(n2.itemType, r3.itemType)) && ("number" != typeof r3.n || r3.n === n2.n);
  if ("value" === r3.kind) {
    for (const e2 of y)
      if (c$1(n2, e2))
        return true;
  }
  return r3.kind === n2.kind;
}
function d$2(r3) {
  if (null === r3)
    return "";
  const e2 = typeof r3;
  return "string" === e2 ? r3 : "number" === e2 || "boolean" === e2 ? String(r3) : r3 instanceof u$1 ? r3.toString() : JSON.stringify(r3);
}
let _$1 = class _ {
  constructor(t4) {
    this._parent = t4, this._vars = {};
  }
  add(t4, e2) {
    this._vars[t4] = e2;
  }
  get(t4) {
    return this._vars[t4] ? this._vars[t4] : this._parent ? this._parent.get(t4) : null;
  }
};
class v {
  constructor() {
    this.type = u;
  }
  static parse(t4) {
    if (t4.length > 1)
      throw new Error('"id" does not expect arguments');
    return new v();
  }
  evaluate(t4, e2) {
    return t4?.id;
  }
}
class b {
  constructor() {
    this.type = t$1;
  }
  static parse(t4) {
    if (t4.length > 1)
      throw new Error('"geometry-type" does not expect arguments');
    return new b();
  }
  evaluate(t4, e2) {
    if (!t4)
      return null;
    switch (t4.type) {
      case t$5.Point:
        return "Point";
      case t$5.LineString:
        return "LineString";
      case t$5.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
}
let d$1 = class d {
  constructor() {
    this.type = f$1;
  }
  static parse(t4) {
    if (t4.length > 1)
      throw new Error('"properties" does not expect arguments');
    return new d();
  }
  evaluate(t4, e2) {
    return t4?.values;
  }
};
class x {
  constructor() {
    this.type = e;
  }
  static parse(t4) {
    if (t4.length > 1)
      throw new Error('"zoom" does not expect arguments');
    return new x();
  }
  evaluate(t4, e2) {
    return e2;
  }
}
class E {
  constructor(t4, e2, r3) {
    this._lhs = t4, this._rhs = e2, this._compare = r3, this.type = i3;
  }
  static parse(t4, e2, r3) {
    if (3 !== t4.length && 4 !== t4.length)
      throw new Error(`"${t4[0]}" expects 2 or 3 arguments`);
    if (4 === t4.length)
      throw new Error(`"${t4[0]}" collator not supported`);
    return new E(pt(t4[1], e2), pt(t4[2], e2), r3);
  }
  evaluate(t4, e2) {
    return this._compare(this._lhs.evaluate(t4, e2), this._rhs.evaluate(t4, e2));
  }
}
class $ extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 === e3);
  }
}
class M extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 !== e3);
  }
}
class k extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 < e3);
  }
}
class A extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 <= e3);
  }
}
class j extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 > e3);
  }
}
class q extends E {
  static parse(t4, e2) {
    return E.parse(t4, e2, (t5, e3) => t5 >= e3);
  }
}
class N {
  constructor(t4) {
    this._arg = t4, this.type = i3;
  }
  static parse(t4, e2) {
    if (2 !== t4.length)
      throw new Error('"!" expects 1 argument');
    return new N(pt(t4[1], e2));
  }
  evaluate(t4, e2) {
    return !this._arg.evaluate(t4, e2);
  }
}
class C {
  constructor(t4) {
    this._args = t4, this.type = i3;
  }
  static parse(t4, e2) {
    const r3 = [];
    for (let s = 1; s < t4.length; s++)
      r3.push(pt(t4[s], e2));
    return new C(r3);
  }
  evaluate(t4, e2) {
    for (const r3 of this._args)
      if (!r3.evaluate(t4, e2))
        return false;
    return true;
  }
}
class R {
  constructor(t4) {
    this._args = t4, this.type = i3;
  }
  static parse(t4, e2) {
    const r3 = [];
    for (let s = 1; s < t4.length; s++)
      r3.push(pt(t4[s], e2));
    return new R(r3);
  }
  evaluate(t4, e2) {
    for (const r3 of this._args)
      if (r3.evaluate(t4, e2))
        return true;
    return false;
  }
}
class z {
  constructor(t4) {
    this._args = t4, this.type = i3;
  }
  static parse(t4, e2) {
    const r3 = [];
    for (let s = 1; s < t4.length; s++)
      r3.push(pt(t4[s], e2));
    return new z(r3);
  }
  evaluate(t4, e2) {
    for (const r3 of this._args)
      if (r3.evaluate(t4, e2))
        return false;
    return true;
  }
}
class I {
  constructor(t4, e2, r3) {
    this.type = t4, this._args = e2, this._fallback = r3;
  }
  static parse(t4, e2, r3) {
    if (t4.length < 4)
      throw new Error('"case" expects at least 3 arguments');
    if (t4.length % 2 == 1)
      throw new Error('"case" expects an odd number of arguments');
    let s;
    const n2 = [];
    for (let o2 = 1; o2 < t4.length - 1; o2 += 2) {
      const a3 = pt(t4[o2], e2), i4 = pt(t4[o2 + 1], e2, r3);
      s || (s = i4.type), n2.push({ condition: a3, output: i4 });
    }
    const a2 = pt(t4[t4.length - 1], e2, r3);
    return s || (s = a2.type), new I(s, n2, a2);
  }
  evaluate(t4, e2) {
    for (const r3 of this._args)
      if (r3.condition.evaluate(t4, e2))
        return r3.output.evaluate(t4, e2);
    return this._fallback.evaluate(t4, e2);
  }
}
let L$1 = class L {
  constructor(t4, e2) {
    this.type = t4, this._args = e2;
  }
  static parse(t4, e2) {
    if (t4.length < 2)
      throw new Error('"coalesce" expects at least 1 argument');
    let r3;
    const s = [];
    for (let n2 = 1; n2 < t4.length; n2++) {
      const a2 = pt(t4[n2], e2);
      r3 || (r3 = a2.type), s.push(a2);
    }
    return new L(r3, s);
  }
  evaluate(t4, e2) {
    for (const r3 of this._args) {
      const s = r3.evaluate(t4, e2);
      if (null !== s)
        return s;
    }
    return null;
  }
};
class U {
  constructor(t4, e2, r3, s, n2) {
    this.type = t4, this._input = e2, this._labels = r3, this._outputs = s, this._fallback = n2;
  }
  static parse(t4, e2) {
    if (t4.length < 3)
      throw new Error('"match" expects at least 3 arguments');
    if (t4.length % 2 == 0)
      throw new Error('"case" expects an even number of arguments');
    let r3;
    const s = pt(t4[1], e2), n2 = [], a2 = {};
    let o2;
    for (let i4 = 2; i4 < t4.length - 1; i4 += 2) {
      let s2 = t4[i4];
      Array.isArray(s2) || (s2 = [s2]);
      for (const t5 of s2) {
        const e3 = typeof t5;
        if ("string" !== e3 && "number" !== e3)
          throw new Error('"match" requires string or number literal as labels');
        if (o2) {
          if (e3 !== o2)
            throw new Error('"match" requires labels to have the same type');
        } else
          o2 = e3;
        a2[t5] = n2.length;
      }
      const l3 = pt(t4[i4 + 1], e2);
      r3 || (r3 = l3.type), n2.push(l3);
    }
    return new U(r3, s, a2, n2, pt(t4[t4.length - 1], e2));
  }
  evaluate(t4, e2) {
    const r3 = this._input.evaluate(t4, e2);
    return (this._outputs[this._labels[r3]] || this._fallback).evaluate(t4, e2);
  }
}
let P$1 = class P {
  constructor(t4, e2, r3, s, n2) {
    this._operator = t4, this.type = e2, this.interpolation = r3, this.input = s, this._stops = n2;
  }
  static parse(t4, e$12, r3) {
    const s = t4[0];
    if (t4.length < 5)
      throw new Error(`"${s}" expects at least 4 arguments`);
    const n2 = t4[1];
    if (!Array.isArray(n2) || 0 === n2.length)
      throw new Error(`"${n2}" is not a valid interpolation`);
    switch (n2[0]) {
      case "linear":
        if (1 !== n2.length)
          throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (2 !== n2.length || "number" != typeof n2[1])
          throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (5 !== n2.length)
          throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let t5 = 1; t5 < 5; t5++) {
          const e2 = n2[t5];
          if ("number" != typeof e2 || e2 < 0 || e2 > 1)
            throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t4[0]}" unknown interpolation type "${n2[0]}"`);
    }
    if (t4.length % 2 != 1)
      throw new Error(`"${s}" expects an even number of arguments`);
    const a2 = pt(t4[2], e$12, e);
    let o$1;
    "interpolate-hcl" === s || "interpolate-lab" === s ? o$1 = o : r3 && "value" !== r3.kind && (o$1 = r3);
    const i4 = [];
    for (let l3 = 3; l3 < t4.length; l3 += 2) {
      const r4 = t4[l3];
      if ("number" != typeof r4)
        throw new Error(`"${s}" requires stop inputs as literal numbers`);
      if (i4.length && i4[i4.length - 1][0] >= r4)
        throw new Error(`"${s}" requires strictly ascending stop inputs`);
      const n3 = pt(t4[l3 + 1], e$12, o$1);
      o$1 || (o$1 = n3.type), i4.push([r4, n3]);
    }
    if (o$1 && o$1 !== o && o$1 !== e && ("array" !== o$1.kind || o$1.itemType !== e))
      throw new Error(`"${s}" cannot interpolate type ${k$1(o$1)}`);
    return new P(s, o$1, n2, a2, i4);
  }
  evaluate(n2, a2) {
    const i4 = this._stops;
    if (1 === i4.length)
      return i4[0][1].evaluate(n2, a2);
    const l3 = this.input.evaluate(n2, a2);
    if (l3 <= i4[0][0])
      return i4[0][1].evaluate(n2, a2);
    if (l3 >= i4[i4.length - 1][0])
      return i4[i4.length - 1][1].evaluate(n2, a2);
    let u2 = 0;
    for (; ++u2 < i4.length && !(l3 < i4[u2][0]); )
      ;
    const c3 = i4[u2 - 1][0], h2 = i4[u2][0], p = P.interpolationRatio(this.interpolation, l3, c3, h2), f2 = i4[u2 - 1][1].evaluate(n2, a2), w = i4[u2][1].evaluate(n2, a2);
    if ("interpolate" === this._operator) {
      if ("array" === this.type.kind && Array.isArray(f2) && Array.isArray(w))
        return f2.map((t4, e2) => h$1(t4, w[e2], p));
      if ("color" === this.type.kind && f2 instanceof u$1 && w instanceof u$1) {
        const e2 = new u$1(f2), r3 = new u$1(w);
        return new u$1([h$1(e2.r, r3.r, p), h$1(e2.g, r3.g, p), h$1(e2.b, r3.b, p), h$1(e2.a, r3.a, p)]);
      }
      if ("number" === this.type.kind && "number" == typeof f2 && "number" == typeof w)
        return h$1(f2, w, p);
      throw new Error(`"${this._operator}" cannot interpolate type ${k$1(this.type)}`);
    }
    if ("interpolate-hcl" === this._operator) {
      const s = j$1(f2), n3 = j$1(w), a3 = n3.h - s.h, i5 = y$1({ h: s.h + p * (a3 > 180 || a3 < -180 ? a3 - 360 * Math.round(a3 / 360) : a3), c: h$1(s.c, n3.c, p), l: h$1(s.l, n3.l, p) });
      return new u$1({ a: h$1(f2.a, w.a, p), ...i5 });
    }
    if ("interpolate-lab" === this._operator) {
      const e2 = A$1(f2), n3 = A$1(w), a3 = y$1({ l: h$1(e2.l, n3.l, p), a: h$1(e2.a, n3.a, p), b: h$1(e2.b, n3.b, p) });
      return new u$1({ a: h$1(f2.a, w.a, p), ...a3 });
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t4, e2) {
    const r3 = this._stops;
    if (1 === r3.length)
      return 0;
    if (t4 >= r3[r3.length - 1][0])
      return 0;
    let s = 0;
    for (; ++s < r3.length && !(t4 < r3[s][0]); )
      ;
    const n2 = r3[s - 1][0], a2 = r3[s][0];
    return P.interpolationRatio(this.interpolation, e2, n2, a2);
  }
  getInterpolationRange(t4) {
    const e2 = this._stops;
    if (1 === e2.length) {
      const t5 = e2[0][0];
      return [t5, t5];
    }
    const r3 = e2[e2.length - 1][0];
    if (t4 >= r3)
      return [r3, r3];
    let s = 0;
    for (; ++s < e2.length && !(t4 < e2[s][0]); )
      ;
    return [e2[s - 1][0], e2[s][0]];
  }
  static interpolationRatio(t4, e2, r3, s) {
    let n2 = 0;
    if ("linear" === t4[0])
      n2 = P._exponentialInterpolationRatio(e2, 1, r3, s);
    else if ("exponential" === t4[0])
      n2 = P._exponentialInterpolationRatio(e2, t4[1], r3, s);
    else if ("cubic-bezier" === t4[0]) {
      n2 = e$1(t4[1], t4[2], t4[3], t4[4])(P._exponentialInterpolationRatio(e2, 1, r3, s), 1e-5);
    }
    return n2 < 0 ? n2 = 0 : n2 > 1 && (n2 = 1), n2;
  }
  static _exponentialInterpolationRatio(t4, e2, r3, s) {
    const n2 = s - r3;
    if (0 === n2)
      return 0;
    const a2 = t4 - r3;
    return 1 === e2 ? a2 / n2 : (e2 ** a2 - 1) / (e2 ** n2 - 1);
  }
};
class S {
  constructor(t4, e2, r3) {
    this.type = t4, this._input = e2, this._stops = r3;
  }
  static parse(t4, e$12) {
    if (t4.length < 5)
      throw new Error('"step" expects at least 4 arguments');
    if (t4.length % 2 != 1)
      throw new Error('"step" expects an even number of arguments');
    const r3 = pt(t4[1], e$12, e);
    let s;
    const n2 = [];
    n2.push([-1 / 0, pt(t4[2], e$12)]);
    for (let a2 = 3; a2 < t4.length; a2 += 2) {
      const r4 = t4[a2];
      if ("number" != typeof r4)
        throw new Error('"step" requires stop inputs as literal numbers');
      if (n2.length && n2[n2.length - 1][0] >= r4)
        throw new Error('"step" requires strictly ascending stop inputs');
      const o2 = pt(t4[a2 + 1], e$12);
      s || (s = o2.type), n2.push([r4, o2]);
    }
    return new S(s, r3, n2);
  }
  evaluate(t4, e2) {
    const r3 = this._stops;
    if (1 === r3.length)
      return r3[0][1].evaluate(t4, e2);
    const s = this._input.evaluate(t4, e2);
    let n2 = 0;
    for (; ++n2 < r3.length && !(s < r3[n2][0]); )
      ;
    return this._stops[n2 - 1][1].evaluate(t4, e2);
  }
}
class B {
  constructor(t4, e2) {
    this.type = t4, this._output = e2;
  }
  static parse(t4, e2, r3) {
    if (t4.length < 4)
      throw new Error('"let" expects at least 3 arguments');
    if (t4.length % 2 == 1)
      throw new Error('"let" expects an odd number of arguments');
    const s = new _$1(e2);
    for (let a2 = 1; a2 < t4.length - 1; a2 += 2) {
      const r4 = t4[a2];
      if ("string" != typeof r4)
        throw new Error(`"let" requires a string to define variable names - found ${r4}`);
      s.add(r4, pt(t4[a2 + 1], e2));
    }
    const n2 = pt(t4[t4.length - 1], s, r3);
    return new B(n2.type, n2);
  }
  evaluate(t4, e2) {
    return this._output.evaluate(t4, e2);
  }
}
let T$1 = class T3 {
  constructor(t4, e2) {
    this.type = t4, this.output = e2;
  }
  static parse(t4, e2, r3) {
    if (2 !== t4.length || "string" != typeof t4[1])
      throw new Error('"var" requires just one literal string argument');
    const s = e2.get(t4[1]);
    if (!s)
      throw new Error(`${t4[1]} must be defined before being used in a "var" expression`);
    return new T3(r3 || u, s);
  }
  evaluate(t4, e2) {
    return this.output.evaluate(t4, e2);
  }
};
class O {
  constructor(t4, e2, r3) {
    this.type = t4, this._index = e2, this._array = r3;
  }
  static parse(t4, e$12) {
    if (3 !== t4.length)
      throw new Error('"at" expects 2 arguments');
    const r3 = pt(t4[1], e$12, e), s = pt(t4[2], e$12);
    return new O(s.type.itemType, r3, s);
  }
  evaluate(t4, e2) {
    const r3 = this._index.evaluate(t4, e2), s = this._array.evaluate(t4, e2);
    if (r3 < 0 || r3 >= s.length)
      throw new Error('"at" index out of bounds');
    if (r3 !== Math.floor(r3))
      throw new Error('"at" index must be an integer');
    return s[r3];
  }
}
class F {
  constructor(t4, e2) {
    this._key = t4, this._obj = e2, this.type = u;
  }
  static parse(t4, e2) {
    let r3, s;
    switch (t4.length) {
      case 2:
        return r3 = pt(t4[1], e2), new F(r3);
      case 3:
        return r3 = pt(t4[1], e2), s = pt(t4[2], e2), new F(r3, s);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t4, e2) {
    const r3 = this._key.evaluate(t4, e2);
    if (this._obj) {
      return this._obj.evaluate(t4, e2)[r3];
    }
    return t4?.values[r3];
  }
}
class G {
  constructor(t4, e2) {
    this._key = t4, this._obj = e2, this.type = i3;
  }
  static parse(t4, e2) {
    let r3, s;
    switch (t4.length) {
      case 2:
        return r3 = pt(t4[1], e2), new G(r3);
      case 3:
        return r3 = pt(t4[1], e2), s = pt(t4[2], e2), new G(r3, s);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t4, e2) {
    const r3 = this._key.evaluate(t4, e2);
    if (this._obj) {
      return r3 in this._obj.evaluate(t4, e2);
    }
    return !!t4?.values[r3];
  }
}
class V {
  constructor(t4, e2) {
    this._key = t4, this._vals = e2, this.type = i3;
  }
  static parse(t4, e2) {
    if (3 !== t4.length)
      throw new Error('"in" expects 2 arguments');
    return new V(pt(t4[1], e2), pt(t4[2], e2));
  }
  evaluate(t4, e2) {
    const r3 = this._key.evaluate(t4, e2);
    return this._vals.evaluate(t4, e2).includes(r3);
  }
}
let D$1 = class D {
  constructor(t4, e$12, r3) {
    this._item = t4, this._array = e$12, this._from = r3, this.type = e;
  }
  static parse(t4, e$12) {
    if (t4.length < 3 || t4.length > 4)
      throw new Error('"index-of" expects 3 or 4 arguments');
    const r3 = pt(t4[1], e$12), s = pt(t4[2], e$12);
    if (4 === t4.length) {
      const n2 = pt(t4[3], e$12, e);
      return new D(r3, s, n2);
    }
    return new D(r3, s);
  }
  evaluate(t4, e2) {
    const r3 = this._item.evaluate(t4, e2), s = this._array.evaluate(t4, e2);
    if (this._from) {
      const n2 = this._from.evaluate(t4, e2);
      if (n2 !== Math.floor(n2))
        throw new Error('"index-of" index must be an integer');
      return s.indexOf(r3, n2);
    }
    return s.indexOf(r3);
  }
};
class H {
  constructor(t4) {
    this._arg = t4, this.type = e;
  }
  static parse(t4, e2) {
    if (2 !== t4.length)
      throw new Error('"length" expects 2 arguments');
    const r3 = pt(t4[1], e2);
    return new H(r3);
  }
  evaluate(t4, e2) {
    const r3 = this._arg.evaluate(t4, e2);
    if ("string" == typeof r3)
      return r3.length;
    if (Array.isArray(r3))
      return r3.length;
    throw new Error('"length" expects string or array');
  }
}
class J {
  constructor(t4, e2, r3, s) {
    this.type = t4, this._array = e2, this._from = r3, this._to = s;
  }
  static parse(t4, e$12) {
    if (t4.length < 3 || t4.length > 4)
      throw new Error('"slice" expects 2 or 3 arguments');
    const r3 = pt(t4[1], e$12), s = pt(t4[2], e$12, e);
    if (s.type !== e)
      throw new Error('"slice" index must return a number');
    if (4 === t4.length) {
      const n2 = pt(t4[3], e$12, e);
      if (n2.type !== e)
        throw new Error('"slice" index must return a number');
      return new J(r3.type, r3, s, n2);
    }
    return new J(r3.type, r3, s);
  }
  evaluate(t4, e2) {
    const r3 = this._array.evaluate(t4, e2);
    if (!Array.isArray(r3) && "string" != typeof r3)
      throw new Error('"slice" input must be an array or a string');
    const s = this._from.evaluate(t4, e2);
    if (s < 0 || s >= r3.length)
      throw new Error('"slice" index out of bounds');
    if (s !== Math.floor(s))
      throw new Error('"slice" index must be an integer');
    if (this._to) {
      const n2 = this._to.evaluate(t4, e2);
      if (n2 < 0 || n2 >= r3.length)
        throw new Error('"slice" index out of bounds');
      if (n2 !== Math.floor(n2))
        throw new Error('"slice" index must be an integer');
      return r3.slice(s, n2);
    }
    return r3.slice(s);
  }
}
class K {
  constructor() {
    this.type = i3;
  }
  static parse(t4) {
    if (1 !== t4.length)
      throw new Error('"has-id" expects no arguments');
    return new K();
  }
  evaluate(t4, e2) {
    return void 0 !== t4?.id;
  }
}
class Q {
  constructor(t4, e$12) {
    this._args = t4, this._calculate = e$12, this.type = e;
  }
  static parse(t4, e2, r3) {
    const s = t4.slice(1).map((t5) => pt(t5, e2));
    return new Q(s, r3);
  }
  evaluate(t4, e2) {
    let r3;
    return this._args && (r3 = this._args.map((r4) => r4.evaluate(t4, e2))), this._calculate(r3);
  }
}
class W extends Q {
  static parse(t4, e2) {
    switch (t4.length) {
      case 2:
        return Q.parse(t4, e2, (t5) => -t5[0]);
      case 3:
        return Q.parse(t4, e2, (t5) => t5[0] - t5[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
}
class X extends Q {
  static parse(t4, e2) {
    return Q.parse(t4, e2, (t5) => {
      let e3 = 1;
      for (const r3 of t5)
        e3 *= r3;
      return e3;
    });
  }
}
class Y extends Q {
  static parse(t4, e2) {
    if (3 === t4.length)
      return Q.parse(t4, e2, (t5) => t5[0] / t5[1]);
    throw new Error('"/" expects 2 arguments');
  }
}
class Z extends Q {
  static parse(t4, e2) {
    if (3 === t4.length)
      return Q.parse(t4, e2, (t5) => t5[0] % t5[1]);
    throw new Error('"%" expects 2 arguments');
  }
}
class tt extends Q {
  static parse(t4, e2) {
    if (3 === t4.length)
      return Q.parse(t4, e2, (t5) => t5[0] ** t5[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
}
class et extends Q {
  static parse(t4, e2) {
    return Q.parse(t4, e2, (t5) => {
      let e3 = 0;
      for (const r3 of t5)
        e3 += r3;
      return e3;
    });
  }
}
class rt {
  constructor(t4, e$12) {
    this._args = t4, this._calculate = e$12, this.type = e;
  }
  static parse(t4, e2) {
    const r3 = t4.slice(1).map((t5) => pt(t5, e2));
    return new rt(r3, rt.ops[t4[0]]);
  }
  evaluate(t4, e2) {
    let r3;
    return this._args && (r3 = this._args.map((r4) => r4.evaluate(t4, e2))), this._calculate(r3);
  }
}
rt.ops = { abs: (t4) => Math.abs(t4[0]), acos: (t4) => Math.acos(t4[0]), asin: (t4) => Math.asin(t4[0]), atan: (t4) => Math.atan(t4[0]), ceil: (t4) => Math.ceil(t4[0]), cos: (t4) => Math.cos(t4[0]), e: () => Math.E, floor: (t4) => Math.floor(t4[0]), ln: (t4) => Math.log(t4[0]), ln2: () => Math.LN2, log10: (t4) => Math.log(t4[0]) / Math.LN10, log2: (t4) => Math.log(t4[0]) / Math.LN2, max: (t4) => Math.max(...t4), min: (t4) => Math.min(...t4), pi: () => Math.PI, round: (t4) => Math.round(t4[0]), sin: (t4) => Math.sin(t4[0]), sqrt: (t4) => Math.sqrt(t4[0]), tan: (t4) => Math.tan(t4[0]) };
class st {
  constructor(t4) {
    this._args = t4, this.type = t$1;
  }
  static parse(t4, e2) {
    return new st(t4.slice(1).map((t5) => pt(t5, e2)));
  }
  evaluate(t4, e2) {
    return this._args.map((r3) => r3.evaluate(t4, e2)).join("");
  }
}
class nt {
  constructor(t4, e2) {
    this._arg = t4, this._calculate = e2, this.type = t$1;
  }
  static parse(t4, e2) {
    if (2 !== t4.length)
      throw new Error(`${t4[0]} expects 1 argument`);
    const r3 = pt(t4[1], e2);
    return new nt(r3, nt.ops[t4[0]]);
  }
  evaluate(t4, e2) {
    return this._calculate(this._arg.evaluate(t4, e2));
  }
}
nt.ops = { downcase: (t4) => t4.toLowerCase(), upcase: (t4) => t4.toUpperCase() };
class at {
  constructor(t4) {
    this._args = t4, this.type = o;
  }
  static parse(t4, e2) {
    if (4 !== t4.length)
      throw new Error('"rgb" expects 3 arguments');
    const r3 = t4.slice(1).map((t5) => pt(t5, e2));
    return new at(r3);
  }
  evaluate(e2, r3) {
    const s = this._validate(this._args[0].evaluate(e2, r3)), n2 = this._validate(this._args[1].evaluate(e2, r3)), a2 = this._validate(this._args[2].evaluate(e2, r3));
    return new u$1({ r: s, g: n2, b: a2 });
  }
  _validate(t4) {
    if ("number" != typeof t4 || t4 < 0 || t4 > 255)
      throw new Error(`${t4}: invalid color component`);
    return Math.round(t4);
  }
}
class ot {
  constructor(t4) {
    this._args = t4, this.type = o;
  }
  static parse(t4, e2) {
    if (5 !== t4.length)
      throw new Error('"rgba" expects 4 arguments');
    const r3 = t4.slice(1).map((t5) => pt(t5, e2));
    return new ot(r3);
  }
  evaluate(e2, r3) {
    const s = this._validate(this._args[0].evaluate(e2, r3)), n2 = this._validate(this._args[1].evaluate(e2, r3)), a2 = this._validate(this._args[2].evaluate(e2, r3)), o2 = this._validateAlpha(this._args[3].evaluate(e2, r3));
    return new u$1({ r: s, g: n2, b: a2, a: o2 });
  }
  _validate(t4) {
    if ("number" != typeof t4 || t4 < 0 || t4 > 255)
      throw new Error(`${t4}: invalid color component`);
    return Math.round(t4);
  }
  _validateAlpha(t4) {
    if ("number" != typeof t4 || t4 < 0 || t4 > 1)
      throw new Error(`${t4}: invalid alpha color component`);
    return t4;
  }
}
class it {
  constructor(t4) {
    this._color = t4, this.type = a(e, 4);
  }
  static parse(t4, e2) {
    if (2 !== t4.length)
      throw new Error('"to-rgba" expects 1 argument');
    const r3 = pt(t4[1], e2);
    return new it(r3);
  }
  evaluate(e2, r3) {
    return new u$1(this._color.evaluate(e2, r3)).toRgba();
  }
}
class lt {
  constructor(t4, e2) {
    this.type = t4, this._args = e2;
  }
  static parse(t4, e$12) {
    const r3 = t4[0];
    if (t4.length < 2)
      throw new Error(`${r3} expects at least one argument`);
    let s, n2 = 1;
    if ("array" === r3) {
      if (t4.length > 2) {
        switch (t4[1]) {
          case "string":
            s = t$1;
            break;
          case "number":
            s = e;
            break;
          case "boolean":
            s = i3;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        n2++;
      } else
        s = u;
      let e$13;
      if (t4.length > 3) {
        if (e$13 = t4[2], null !== e$13 && ("number" != typeof e$13 || e$13 < 0 || e$13 !== Math.floor(e$13)))
          throw new Error('"array" length argument must be a positive integer literal');
        n2++;
      }
      s = a(s, e$13);
    } else
      switch (r3) {
        case "string":
          s = t$1;
          break;
        case "number":
          s = e;
          break;
        case "boolean":
          s = i3;
          break;
        case "object":
          s = f$1;
      }
    const a$12 = [];
    for (; n2 < t4.length; n2++) {
      const r4 = pt(t4[n2], e$12);
      a$12.push(r4);
    }
    return new lt(s, a$12);
  }
  evaluate(t4, e2) {
    let r3;
    for (const s of this._args) {
      const n2 = s.evaluate(t4, e2);
      if (r3 = l$1(n2), c$1(r3, this.type))
        return n2;
    }
    throw new Error(`Expected ${k$1(this.type)} but got ${k$1(r3)}`);
  }
}
class ut {
  constructor(t4, e2) {
    this.type = t4, this._args = e2;
  }
  static parse(t4, e2) {
    const r3 = t4[0], s = ut.types[r3];
    if (s === i3 || s === t$1) {
      if (2 !== t4.length)
        throw new Error(`${r3} expects one argument`);
    } else if (t4.length < 2)
      throw new Error(`${r3} expects at least one argument`);
    const n2 = [];
    for (let a2 = 1; a2 < t4.length; a2++) {
      const r4 = pt(t4[a2], e2);
      n2.push(r4);
    }
    return new ut(s, n2);
  }
  evaluate(e$12, r3) {
    if (this.type === i3)
      return Boolean(this._args[0].evaluate(e$12, r3));
    if (this.type === t$1)
      return d$2(this._args[0].evaluate(e$12, r3));
    if (this.type === e) {
      for (const t4 of this._args) {
        const s = Number(t4.evaluate(e$12, r3));
        if (!isNaN(s))
          return s;
      }
      return null;
    }
    if (this.type === o) {
      for (const s of this._args)
        try {
          const n2 = ut.toColor(s.evaluate(e$12, r3));
          if (n2 instanceof u$1)
            return n2;
        } catch {
        }
      return null;
    }
  }
  static toBoolean(t4) {
    return Boolean(t4);
  }
  static toString(t4) {
    return d$2(t4);
  }
  static toNumber(t4) {
    const e2 = Number(t4);
    if (isNaN(e2))
      throw new Error(`"${t4}" is not a number`);
    return e2;
  }
  static toColor(e2) {
    if (e2 instanceof u$1)
      return e2;
    if ("string" == typeof e2) {
      const r3 = u$1.fromString(e2);
      if (r3)
        return r3;
      throw new Error(`"${e2}" is not a color`);
    }
    if (Array.isArray(e2))
      return u$1.fromArray(e2);
    throw new Error(`"${e2}" is not a color`);
  }
}
ut.types = { "to-boolean": i3, "to-color": o, "to-number": e, "to-string": t$1 };
class ct {
  constructor(t4) {
    this._val = t4, this.type = l$1(t4);
  }
  static parse(t4) {
    if (2 !== t4.length)
      throw new Error('"literal" expects 1 argument');
    return new ct(t4[1]);
  }
  evaluate(t4, e2) {
    return this._val;
  }
}
class ht {
  constructor(t4) {
    this._arg = t4, this.type = t$1;
  }
  static parse(t4, e2) {
    if (2 !== t4.length)
      throw new Error('"typeof" expects 1 argument');
    return new ht(pt(t4[1], e2));
  }
  evaluate(t4, e2) {
    return k$1(l$1(this._arg.evaluate(t4, e2)));
  }
}
function pt(t4, e2, r3) {
  const s = typeof t4;
  if ("string" === s || "boolean" === s || "number" === s || null === t4) {
    if (r3)
      switch (r3.kind) {
        case "string":
          "string" !== s && (t4 = ut.toString(t4));
          break;
        case "number":
          "number" !== s && (t4 = ut.toNumber(t4));
          break;
        case "color":
          t4 = ut.toColor(t4);
      }
    t4 = ["literal", t4];
  }
  if (!Array.isArray(t4) || 0 === t4.length)
    throw new Error("Expression must be a non empty array");
  const n2 = t4[0];
  if ("string" != typeof n2)
    throw new Error("First element of expression must be a string");
  const a2 = gt[n2];
  if (void 0 === a2)
    throw new Error(`Invalid expression operator "${n2}"`);
  if (!a2)
    throw new Error(`Unimplemented expression operator "${n2}"`);
  return a2.parse(t4, e2, r3);
}
const gt = { array: lt, boolean: lt, collator: null, format: null, image: null, literal: ct, number: lt, "number-format": null, object: lt, string: lt, "to-boolean": ut, "to-color": ut, "to-number": ut, "to-string": ut, typeof: ht, accumulated: null, "feature-state": null, "geometry-type": b, id: v, "line-progress": null, properties: d$1, at: O, get: F, has: G, in: V, "index-of": D$1, length: H, slice: J, "!": N, "!=": M, "<": k, "<=": A, "==": $, ">": j, ">=": q, all: C, any: R, case: I, coalesce: L$1, match: U, within: null, interpolate: P$1, "interpolate-hcl": P$1, "interpolate-lab": P$1, step: S, let: B, var: T$1, concat: st, downcase: nt, "is-supported-script": null, "resolved-locale": null, upcase: nt, rgb: at, rgba: ot, "to-rgba": it, "-": W, "*": X, "/": Y, "%": Z, "^": tt, "+": et, abs: rt, acos: rt, asin: rt, atan: rt, ceil: rt, cos: rt, e: rt, floor: rt, ln: rt, ln2: rt, log10: rt, log2: rt, max: rt, min: rt, pi: rt, round: rt, sin: rt, sqrt: rt, tan: rt, zoom: x, "heatmap-density": null, "has-id": K, none: z };
class t3 {
  constructor(e2) {
    this._expression = e2;
  }
  filter(e2, r3) {
    if (!this._expression)
      return true;
    try {
      return this._expression.evaluate(e2, r3);
    } catch (t4) {
      return console.log(t4.message), true;
    }
  }
  static createFilter(n2) {
    if (!n2)
      return null;
    this.isLegacyFilter(n2) && (n2 = this.convertLegacyFilter(n2));
    try {
      const s = pt(n2, null, i3);
      return new t3(s);
    } catch (s) {
      return console.log(s.message), null;
    }
  }
  static isLegacyFilter(e2) {
    if (!Array.isArray(e2))
      return true;
    if (0 === e2.length)
      return true;
    switch (e2[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return 3 === e2.length && "string" == typeof e2[1] && !Array.isArray(e2[2]);
      case "in":
        return e2.length >= 3 && "string" == typeof e2[1] && !Array.isArray(e2[2]);
      case "!in":
      case "none":
      case "!has":
        return true;
      case "any":
      case "all":
        for (let r3 = 1; r3 < e2.length; r3++)
          if (this.isLegacyFilter(e2[r3]))
            return true;
        return false;
      case "has":
        return 2 === e2.length && ("$id" === e2[1] || "$type" === e2[1]);
      default:
        return false;
    }
  }
  static convertLegacyFilter(e2) {
    if (!Array.isArray(e2) || 0 === e2.length)
      return true;
    const r3 = e2[0];
    if (1 === e2.length)
      return "any" !== r3;
    switch (r3) {
      case "==":
        return t3.convertComparison("==", e2[1], e2[2]);
      case "!=":
        return t3.negate(t3.convertComparison("==", e2[1], e2[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return t3.convertComparison(r3, e2[1], e2[2]);
      case "in":
        return t3.convertIn(e2[1], e2.slice(2));
      case "!in":
        return t3.negate(t3.convertIn(e2[1], e2.slice(2)));
      case "any":
      case "all":
      case "none":
        return t3.convertCombining(r3, e2.slice(1));
      case "has":
        return t3.convertHas(e2[1]);
      case "!has":
        return t3.negate(t3.convertHas(e2[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(e2, r3, t4) {
    switch (r3) {
      case "$type":
        return [e2, ["geometry-type"], t4];
      case "$id":
        return [e2, ["id"], t4];
      default:
        return [e2, ["get", r3], t4];
    }
  }
  static convertIn(e2, r3) {
    switch (e2) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", r3]];
      case "$id":
        return ["in", ["id"], ["literal", r3]];
      default:
        return ["in", ["get", e2], ["literal", r3]];
    }
  }
  static convertHas(e2) {
    switch (e2) {
      case "$type":
        return true;
      case "$id":
        return ["has-id"];
      default:
        return ["has", e2];
    }
  }
  static convertCombining(e2, r3) {
    return [e2].concat(r3.map(this.convertLegacyFilter));
  }
  static negate(e2) {
    return ["!", e2];
  }
}
class h {
  constructor(t4, e$12) {
    let o$1;
    switch (this.isDataDriven = false, this.interpolator = null, t4.type) {
      case "number":
      case "color":
        o$1 = true;
        break;
      case "array":
        o$1 = "number" === t4.value;
        break;
      default:
        o$1 = false;
    }
    if (null == e$12 && (e$12 = t4.default), Array.isArray(e$12) && e$12.length > 0 && gt[e$12[0]]) {
      const r3 = { number: e, color: o, string: t$1, boolean: i3, enum: t$1 };
      try {
        const o2 = "array" === t4.type ? a(r3[t4.value] || u, t4.length) : r3[t4.type], u$12 = pt(e$12, null, o2);
        this.getValue = this._buildExpression(u$12, t4), this.isDataDriven = true, u$12 instanceof P$1 && u$12.input instanceof x && (this.interpolator = u$12);
      } catch (m2) {
        console.log(m2.message), this.getValue = this._buildSimple(t4.default);
      }
      return;
    }
    o$1 && "interval" === e$12.type && (o$1 = false);
    const h2 = e$12?.stops && e$12.stops.length > 0;
    if (h2)
      for (const r3 of e$12.stops)
        r3[1] = this._validate(r3[1], t4);
    if (this.isDataDriven = !!e$12 && !!e$12.property, this.isDataDriven)
      if (void 0 !== e$12.default && (e$12.default = this._validate(e$12.default, t4)), h2)
        switch (e$12.type) {
          case "identity":
            this.getValue = this._buildIdentity(e$12, t4);
            break;
          case "categorical":
            this.getValue = this._buildCategorical(e$12, t4);
            break;
          default:
            this.getValue = o$1 ? this._buildInterpolate(e$12, t4) : this._buildInterval(e$12, t4);
        }
      else
        this.getValue = this._buildIdentity(e$12, t4);
    else
      h2 ? this.getValue = o$1 ? this._buildZoomInterpolate(e$12) : this._buildZoomInterval(e$12) : (e$12 = this._validate(e$12, t4), this.getValue = this._buildSimple(e$12));
  }
  _validate(t4, e2) {
    if ("number" === e2.type) {
      if (null != e2.minimum && t4 < e2.minimum)
        return e2.minimum;
      if (null != e2.maximum && t4 > e2.maximum)
        return e2.maximum;
    } else
      "color" === e2.type ? t4 = h._parseColor(t4) : "enum" === e2.type ? "string" == typeof t4 && (t4 = e2.values.indexOf(t4)) : "array" === e2.type && "enum" === e2.value ? t4 = t4.map((t5) => "string" == typeof t5 ? e2.values.indexOf(t5) : t5) : "string" === e2.type && (t4 = d$2(t4));
    return t4;
  }
  _buildSimple(t4) {
    return () => t4;
  }
  _buildExpression(t4, e2) {
    return (r3, i4) => {
      try {
        const l3 = t4.evaluate(i4, r3);
        return void 0 === l3 ? e2.default : this._validate(l3, e2);
      } catch (l3) {
        return console.log(l3.message), e2.default;
      }
    };
  }
  _buildIdentity(t4, e2) {
    return (r3, i4) => {
      let l3;
      return i4 && (l3 = i4.values[t4.property]), void 0 !== l3 && (l3 = this._validate(l3, e2)), null != l3 ? l3 : void 0 !== t4.default ? t4.default : e2.default;
    };
  }
  _buildCategorical(t4, e2) {
    return (r3, i4) => {
      let l3;
      return i4 && (l3 = i4.values[t4.property]), l3 = this._categorical(l3, t4.stops), void 0 !== l3 ? l3 : void 0 !== t4.default ? t4.default : e2.default;
    };
  }
  _buildInterval(t4, e2) {
    return (r3, i4) => {
      let l3;
      return i4 && (l3 = i4.values[t4.property]), "number" == typeof l3 ? this._interval(l3, t4.stops) : void 0 !== t4.default ? t4.default : e2.default;
    };
  }
  _buildInterpolate(t4, e2) {
    return (r3, i4) => {
      let l3;
      return i4 && (l3 = i4.values[t4.property]), "number" == typeof l3 ? this._interpolate(l3, t4.stops, t4.base || 1) : void 0 !== t4.default ? t4.default : e2.default;
    };
  }
  _buildZoomInterpolate(t4) {
    return (e2) => this._interpolate(e2, t4.stops, t4.base || 1);
  }
  _buildZoomInterval(t4) {
    return (e2) => this._interval(e2, t4.stops);
  }
  _categorical(t4, e2) {
    const r3 = e2.length;
    for (let i4 = 0; i4 < r3; i4++)
      if (e2[i4][0] === t4)
        return e2[i4][1];
  }
  _interval(t4, e2) {
    const r3 = e2.length;
    let i4 = 0;
    for (let l3 = 0; l3 < r3 && e2[l3][0] <= t4; l3++)
      i4 = l3;
    return e2[i4][1];
  }
  _interpolate(t4, r3, i4) {
    let l3, a2;
    const s = r3.length;
    for (let e2 = 0; e2 < s; e2++) {
      const i5 = r3[e2];
      if (!(i5[0] <= t4)) {
        a2 = i5;
        break;
      }
      l3 = i5;
    }
    if (l3 && a2) {
      const r4 = a2[0] - l3[0], s2 = t4 - l3[0], n2 = 1 === i4 ? s2 / r4 : (i4 ** s2 - 1) / (i4 ** r4 - 1);
      if (Array.isArray(l3[1])) {
        const t5 = l3[1], r5 = a2[1], i5 = [];
        for (let l4 = 0; l4 < t5.length; l4++)
          i5.push(h$1(t5[l4], r5[l4], n2));
        return i5;
      }
      return h$1(l3[1], a2[1], n2);
    }
    return l3 ? l3[1] : a2 ? a2[1] : void 0;
  }
  static _isEmpty(t4) {
    for (const e2 in t4)
      if (t4.hasOwnProperty(e2))
        return false;
    return true;
  }
  static _parseColor(e2) {
    return Array.isArray(e2) ? e2 : ("string" == typeof e2 && (e2 = new u$1(e2)), e2 instanceof u$1 && !this._isEmpty(e2) ? u$1.toUnitRGBA(e2) : void 0);
  }
}
var D2;
!function(t4) {
  t4[t4.BUTT = 0] = "BUTT", t4[t4.ROUND = 1] = "ROUND", t4[t4.SQUARE = 2] = "SQUARE", t4[t4.UNKNOWN = 4] = "UNKNOWN";
}(D2 || (D2 = {}));
class P2 {
  constructor(t4, i4, e2, a2) {
    switch (this.type = t4, this.typeName = i4.type, this.id = i4.id, this.source = i4.source, this.sourceLayer = i4["source-layer"], this.minzoom = i4.minzoom, this.maxzoom = i4.maxzoom, this.filter = i4.filter, this.layout = i4.layout, this.paint = i4.paint, this.z = e2, this.uid = a2, t4) {
      case a$3.BACKGROUND:
        this._layoutDefinition = f$2.backgroundLayoutDefinition, this._paintDefinition = f$2.backgroundPaintDefinition;
        break;
      case a$3.FILL:
        this._layoutDefinition = f$2.fillLayoutDefinition, this._paintDefinition = f$2.fillPaintDefinition;
        break;
      case a$3.LINE:
        this._layoutDefinition = f$2.lineLayoutDefinition, this._paintDefinition = f$2.linePaintDefinition;
        break;
      case a$3.SYMBOL:
        this._layoutDefinition = f$2.symbolLayoutDefinition, this._paintDefinition = f$2.symbolPaintDefinition;
        break;
      case a$3.CIRCLE:
        this._layoutDefinition = f$2.circleLayoutDefinition, this._paintDefinition = f$2.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return void 0 !== this._featureFilter ? this._featureFilter : this._featureFilter = t3.createFilter(this.filter);
  }
  getLayoutProperty(t4) {
    return this._layoutProperties[t4];
  }
  getPaintProperty(t4) {
    return this._paintProperties[t4];
  }
  getLayoutValue(t4, i4, e2) {
    let a2;
    const o2 = this._layoutProperties[t4];
    return o2 && (a2 = o2.getValue(i4, e2)), void 0 === a2 && (a2 = this._layoutDefinition[t4].default), a2;
  }
  getPaintValue(t4, i4, e2) {
    let a2;
    const o2 = this._paintProperties[t4];
    return o2 && (a2 = o2.getValue(i4, e2)), void 0 === a2 && (a2 = this._paintDefinition[t4].default), a2;
  }
  isPainterDataDriven() {
    const t4 = this._paintProperties;
    if (t4) {
      for (const i4 in t4)
        if (t4[i4].isDataDriven)
          return true;
    }
    return false;
  }
  _parseLayout(t4) {
    const i4 = {};
    for (const e2 in t4) {
      const a2 = this._layoutDefinition[e2];
      a2 && (i4[e2] = new h(a2, t4[e2]));
    }
    return i4;
  }
  _parsePaint(t4) {
    const i4 = {};
    for (const e2 in t4) {
      const a2 = this._paintDefinition[e2];
      a2 && (i4[e2] = new h(a2, t4[e2]));
    }
    return i4;
  }
  computeAttributesKey(t4, i4, e2, a2) {
    let o2 = 0, r3 = 0;
    for (const s of i4) {
      let t5 = 3;
      if (!s || s !== a2) {
        const i5 = e2[s], { isLayout: a3, isOptional: o3 } = i5, r4 = a3 ? this.getLayoutProperty(s) : this.getPaintProperty(s);
        t5 = r4?.interpolator ? 2 : r4?.isDataDriven ? 1 : o3 && !r4 ? 3 : 0;
      }
      r3 |= t5 << o2, o2 += 2;
    }
    return r3 << 3 | t4;
  }
}
class c2 extends P2 {
  constructor(e2, a2, o2, r3) {
    super(e2, a2, o2, r3), this.backgroundMaterial = new T$3(this.computeAttributesKey(L$2.BACKGROUND, T$3.ATTRIBUTES, T$3.ATTRIBUTES_INFO));
  }
}
class f extends P2 {
  constructor(i4, e2, r3, s) {
    super(i4, e2, r3, s);
    const n2 = this.getPaintProperty("fill-color"), h2 = this.getPaintProperty("fill-opacity"), l3 = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = n2?.isDataDriven, this.hasDataDrivenOpacity = h2?.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || l3?.isDataDriven;
    const p = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !p, this.hasDataDrivenOutlineColor = p?.isDataDriven, this.hasDataDrivenOutline = p ? p.isDataDriven : !!n2 && n2.isDataDriven, this.hasDataDrivenOutline = (p ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new l$2(this.computeAttributesKey(L$2.FILL, l$2.ATTRIBUTES, l$2.ATTRIBUTES_INFO)), this.outlineMaterial = new T$2(this.computeAttributesKey(L$2.OUTLINE, this.outlineUsesFillColor ? T$2.ATTRIBUTES_FILL : T$2.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? T$2.ATTRIBUTES_INFO_FILL : T$2.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
}
class _2 extends P2 {
  constructor(i4, e2, a2, o2) {
    super(i4, e2, a2, o2);
    const s = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new i$2(this.computeAttributesKey(L$2.LINE, i$2.ATTRIBUTES, i$2.ATTRIBUTES_INFO, s ? "line-dasharray" : "")), this.hasDataDrivenLine = this.getPaintProperty("line-blur")?.isDataDriven || this.getPaintProperty("line-color")?.isDataDriven || this.getPaintProperty("line-gap-width")?.isDataDriven || this.getPaintProperty("line-offset")?.isDataDriven || this.getPaintProperty("line-opacity")?.isDataDriven || this.getPaintProperty("line-pattern")?.isDataDriven || this.getPaintProperty("line-dasharray")?.isDataDriven || this.getLayoutProperty("line-cap")?.isDataDriven || this.getPaintProperty("line-width")?.isDataDriven, this.canUseThinTessellation = false, !this.hasDataDrivenLine) {
      const t4 = this.getPaintProperty("line-width");
      if (!t4 || "number" == typeof t4 && 0.5 * t4 < $$1) {
        const t5 = this.getPaintProperty("line-offset");
        (!t5 || "number" == typeof t5 && 0 === t5) && (this.canUseThinTessellation = true);
      }
    }
  }
  getDashKey(t4, i4) {
    let e2;
    switch (i4) {
      case D2.BUTT:
        e2 = "Butt";
        break;
      case D2.ROUND:
        e2 = "Round";
        break;
      case D2.SQUARE:
        e2 = "Square";
        break;
      default:
        e2 = "Butt";
    }
    return `dasharray-[${t4.toString()}]-${e2}`;
  }
}
class L2 extends P2 {
  constructor(i4, e2, a2, o2) {
    super(i4, e2, a2, o2), this.iconMaterial = new i$1(this.computeAttributesKey(L$2.ICON, i$1.ATTRIBUTES, i$1.ATTRIBUTES_INFO)), this.textMaterial = new c$2(this.computeAttributesKey(L$2.TEXT, c$2.ATTRIBUTES, c$2.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = this.getPaintProperty("icon-color")?.isDataDriven || this.getPaintProperty("icon-halo-blur")?.isDataDriven || this.getPaintProperty("icon-halo-color")?.isDataDriven || this.getPaintProperty("icon-halo-width")?.isDataDriven || this.getPaintProperty("icon-opacity")?.isDataDriven || this.getLayoutProperty("icon-size")?.isDataDriven, this.hasDataDrivenText = this.getPaintProperty("text-color")?.isDataDriven || this.getPaintProperty("text-halo-blur")?.isDataDriven || this.getPaintProperty("text-halo-color")?.isDataDriven || this.getPaintProperty("text-halo-width")?.isDataDriven || this.getPaintProperty("text-opacity")?.isDataDriven || this.getLayoutProperty("text-size")?.isDataDriven;
  }
}
class d2 extends P2 {
  constructor(i4, a2, o2, r3) {
    super(i4, a2, o2, r3), this.circleMaterial = new t$2(this.computeAttributesKey(L$2.CIRCLE, t$2.ATTRIBUTES, t$2.ATTRIBUTES_INFO));
  }
}
class T4 {
  constructor(t4, i4, e2) {
    let a2;
    this.allowOverlap = t4.getLayoutValue("icon-allow-overlap", i4), this.ignorePlacement = t4.getLayoutValue("icon-ignore-placement", i4), this.keepUpright = t4.getLayoutValue("icon-keep-upright", i4), this.optional = t4.getLayoutValue("icon-optional", i4), this.rotationAlignment = t4.getLayoutValue("icon-rotation-alignment", i4), this.rotationAlignment === l$3.AUTO && (this.rotationAlignment = e2 ? l$3.MAP : l$3.VIEWPORT), a2 = t4.getLayoutProperty("icon-anchor"), a2?.isDataDriven ? this._anchorProp = a2 : this.anchor = t4.getLayoutValue("icon-anchor", i4), a2 = t4.getLayoutProperty("icon-offset"), a2?.isDataDriven ? this._offsetProp = a2 : this.offset = t4.getLayoutValue("icon-offset", i4), a2 = t4.getLayoutProperty("icon-padding"), a2?.isDataDriven ? this._paddingProp = a2 : this.padding = t4.getLayoutValue("icon-padding", i4), a2 = t4.getLayoutProperty("icon-rotate"), a2?.isDataDriven ? this._rotateProp = a2 : this.rotate = t4.getLayoutValue("icon-rotate", i4), a2 = t4.getLayoutProperty("icon-size"), a2?.isDataDriven ? this._sizeProp = a2 : this.size = t4.getLayoutValue("icon-size", i4);
  }
  update(t4, i4) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t4, i4)), this._offsetProp && (this.offset = this._offsetProp.getValue(t4, i4)), this._paddingProp && (this.padding = this._paddingProp.getValue(t4, i4)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t4, i4)), this._sizeProp && (this.size = this._sizeProp.getValue(t4, i4));
  }
}
class m {
  constructor(t4, i4, e2) {
    let a2;
    this.allowOverlap = t4.getLayoutValue("text-allow-overlap", i4), this.ignorePlacement = t4.getLayoutValue("text-ignore-placement", i4), this.keepUpright = t4.getLayoutValue("text-keep-upright", i4), this.optional = t4.getLayoutValue("text-optional", i4), this.rotationAlignment = t4.getLayoutValue("text-rotation-alignment", i4), this.rotationAlignment === l$3.AUTO && (this.rotationAlignment = e2 ? l$3.MAP : l$3.VIEWPORT), a2 = t4.getLayoutProperty("text-anchor"), a2?.isDataDriven ? this._anchorProp = a2 : this.anchor = t4.getLayoutValue("text-anchor", i4), a2 = t4.getLayoutProperty("text-justify"), a2?.isDataDriven ? this._justifyProp = a2 : this.justify = t4.getLayoutValue("text-justify", i4), a2 = t4.getLayoutProperty("text-letter-spacing"), a2?.isDataDriven ? this._letterSpacingProp = a2 : this.letterSpacing = t4.getLayoutValue("text-letter-spacing", i4), a2 = t4.getLayoutProperty("text-line-height"), a2?.isDataDriven ? this._lineHeightProp = a2 : this.lineHeight = t4.getLayoutValue("text-line-height", i4), a2 = t4.getLayoutProperty("text-max-angle"), a2?.isDataDriven ? this._maxAngleProp = a2 : this.maxAngle = t4.getLayoutValue("text-max-angle", i4), a2 = t4.getLayoutProperty("text-max-width"), a2?.isDataDriven ? this._maxWidthProp = a2 : this.maxWidth = t4.getLayoutValue("text-max-width", i4), a2 = t4.getLayoutProperty("text-offset"), a2?.isDataDriven ? this._offsetProp = a2 : this.offset = t4.getLayoutValue("text-offset", i4), a2 = t4.getLayoutProperty("text-padding"), a2?.isDataDriven ? this._paddingProp = a2 : this.padding = t4.getLayoutValue("text-padding", i4), a2 = t4.getLayoutProperty("text-rotate"), a2?.isDataDriven ? this._rotateProp = a2 : this.rotate = t4.getLayoutValue("text-rotate", i4), a2 = t4.getLayoutProperty("text-size"), a2?.isDataDriven ? this._sizeProp = a2 : this.size = t4.getLayoutValue("text-size", i4), a2 = t4.getLayoutProperty("text-writing-mode"), a2?.isDataDriven ? this._writingModeProp = a2 : this.writingMode = t4.getLayoutValue("text-writing-mode", i4);
  }
  update(t4, i4) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t4, i4)), this._justifyProp && (this.justify = this._justifyProp.getValue(t4, i4)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t4, i4)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t4, i4)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t4, i4)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t4, i4)), this._offsetProp && (this.offset = this._offsetProp.getValue(t4, i4)), this._paddingProp && (this.padding = this._paddingProp.getValue(t4, i4)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t4, i4)), this._sizeProp && (this.size = this._sizeProp.getValue(t4, i4)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t4, i4));
  }
}
class l2 {
  constructor(t4) {
    if (this._style = t4, this.backgroundBucketIds = [], this._uidToLayer = /* @__PURE__ */ new Map(), this._layerByName = {}, this._runningId = 0, t4.layers || (t4.layers = []), this.version = parseFloat(t4.version), this.layers = t4.layers.map((e2, t5, r3) => this._create(e2, t5, r3)).filter((e2) => !!e2), this.layers) {
      let t5;
      for (let r3 = 0; r3 < this.layers.length; r3++)
        t5 = this.layers[r3], this._layerByName[t5.id] = t5, this._uidToLayer.set(t5.uid, t5), t5.type === a$3.BACKGROUND && this.backgroundBucketIds.push(t5.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(e2) {
    const t4 = this._layerByName[e2];
    return !!t4 && t4.isPainterDataDriven();
  }
  getStyleLayerId(e2) {
    return e2 >= this.layers.length ? null : this.layers[e2].id;
  }
  getStyleLayerByUID(e2) {
    return this._uidToLayer.get(e2) ?? null;
  }
  getStyleLayerIndex(e2) {
    const t4 = this._layerByName[e2];
    return t4 ? this.layers.indexOf(t4) : -1;
  }
  setStyleLayer(e2, t4) {
    if (!e2?.id)
      return;
    const r3 = this._style;
    null != t4 && t4 >= this.layers.length && (t4 = this.layers.length - 1);
    let i4, s = true;
    const a2 = this._layerByName[e2.id];
    if (a2) {
      const y2 = this.layers.indexOf(a2);
      t4 || (t4 = y2), t4 === y2 ? (s = false, i4 = l2._recreateLayer(e2, a2), this.layers[t4] = i4, r3.layers[t4] = e2) : (this.layers.splice(y2, 1), r3.layers.splice(y2, 1), i4 = this._create(e2, t4, this.layers), this.layers.splice(t4, 0, i4), r3.layers.splice(t4, 0, e2));
    } else
      i4 = this._create(e2, t4, this.layers), !t4 || t4 >= this.layers.length ? (this.layers.push(i4), r3.layers.push(e2)) : (this.layers.splice(t4, 0, i4), r3.layers.splice(t4, 0, e2));
    this._layerByName[e2.id] = i4, this._uidToLayer.set(i4.uid, i4), s && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(e2) {
    const t4 = this._layerByName[e2];
    return t4 ? { type: t4.typeName, id: t4.id, source: t4.source, "source-layer": t4.sourceLayer, minzoom: t4.minzoom, maxzoom: t4.maxzoom, filter: t4.filter, layout: t4.layout, paint: t4.paint } : null;
  }
  deleteStyleLayer(e2) {
    const t4 = this._layerByName[e2];
    if (t4) {
      delete this._layerByName[e2], this._uidToLayer.delete(t4.uid);
      const r3 = this.layers.indexOf(t4);
      this.layers.splice(r3, 1), this._style.layers.splice(r3, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(e2) {
    return this._layerByName[e2];
  }
  getLayoutProperties(e2) {
    const t4 = this._layerByName[e2];
    return t4 ? t4.layout : null;
  }
  getPaintProperties(e2) {
    const t4 = this._layerByName[e2];
    return t4 ? t4.paint : null;
  }
  setPaintProperties(e2, t4) {
    const r3 = this._layerByName[e2];
    if (!r3)
      return;
    const i4 = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: r3.layout, paint: t4 }, s = l2._recreateLayer(i4, r3), a2 = this.layers.indexOf(r3);
    this.layers[a2] = s, this._style.layers[a2].paint = t4, this._layerByName[r3.id] = s, this._uidToLayer.set(r3.uid, s);
  }
  setLayoutProperties(e2, t4) {
    const r3 = this._layerByName[e2];
    if (!r3)
      return;
    const i4 = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: t4, paint: r3.paint }, s = l2._recreateLayer(i4, r3), a2 = this.layers.indexOf(r3);
    this.layers[a2] = s, this._style.layers[a2].layout = t4, this._layerByName[r3.id] = s, this._uidToLayer.set(r3.uid, s);
  }
  setStyleLayerVisibility(e2, t4) {
    const r3 = this._layerByName[e2];
    if (!r3)
      return;
    const i4 = r3.layout || {};
    i4.visibility = t4;
    const s = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: i4, paint: r3.paint }, a2 = l2._recreateLayer(s, r3), y2 = this.layers.indexOf(r3);
    this.layers[y2] = a2, this._style.layers[y2].layout = i4, this._layerByName[r3.id] = a2, this._uidToLayer.set(r3.uid, a2);
  }
  getStyleLayerVisibility(e2) {
    const t4 = this._layerByName[e2];
    if (!t4)
      return "none";
    const r3 = t4.layout;
    return r3?.visibility ?? "visible";
  }
  _recomputeZValues() {
    const e2 = this.layers, t4 = 1 / (e2.length + 1);
    for (let r3 = 0; r3 < e2.length; r3++)
      e2[r3].z = 1 - (1 + r3) * t4;
  }
  _identifyRefLayers() {
    const t4 = [], r3 = [];
    let i4 = 0;
    for (const s of this.layers) {
      const a2 = s.layout;
      if (s.type === a$3.FILL) {
        const e2 = s;
        let r4 = s.source + "|" + s.sourceLayer;
        r4 += "|" + (a2?.visibility ?? ""), r4 += "|" + s.minzoom, r4 += "|" + s.maxzoom, r4 += "|" + JSON.stringify(s.filter), (e2.hasDataDrivenFill || e2.hasDataDrivenOutline) && (r4 += "|" + i4), t4.push({ key: r4, layer: s });
      } else if (s.type === a$3.LINE) {
        const e2 = s, t5 = s.paint, l3 = null != t5 && (null != t5["line-pattern"] || null != t5["line-dasharray"]);
        let y2 = s.source + "|" + s.sourceLayer;
        y2 += "|" + (a2?.visibility ?? ""), y2 += "|" + s.minzoom, y2 += "|" + s.maxzoom, y2 += "|" + JSON.stringify(s.filter), y2 += "|" + (void 0 !== a2 ? a2["line-cap"] : ""), y2 += "|" + (void 0 !== a2 ? a2["line-join"] : ""), (e2.hasDataDrivenLine || l3) && (y2 += "|" + i4), r3.push({ key: y2, layer: s });
      }
      ++i4;
    }
    this._assignRefLayers(t4), this._assignRefLayers(r3);
  }
  _assignRefLayers(t4) {
    let r3, i4;
    t4.sort((e2, t5) => e2.key < t5.key ? -1 : e2.key > t5.key ? 1 : 0);
    const s = t4.length;
    for (let a2 = 0; a2 < s; a2++) {
      const l3 = t4[a2];
      if (l3.key === r3)
        l3.layer.refLayerId = i4;
      else if (r3 = l3.key, i4 = l3.layer.id, l3.layer.type === a$3.FILL) {
        if (!l3.layer.getPaintProperty("fill-outline-color"))
          for (let e2 = a2 + 1; e2 < s; e2++) {
            const s2 = t4[e2];
            if (s2.key !== r3)
              break;
            if (s2.layer.getPaintProperty("fill-outline-color")) {
              t4[a2] = s2, t4[e2] = l3, i4 = s2.layer.id;
              break;
            }
          }
      } else if (l3.layer.type === a$3.LINE) {
        let e2 = l3.layer;
        for (let y2 = a2 + 1; y2 < s; y2++) {
          const s2 = t4[y2];
          if (s2.key !== r3)
            break;
          const n2 = s2.layer;
          (e2.canUseThinTessellation && !n2.canUseThinTessellation || !e2.canUseThinTessellation && (n2.getPaintProperty("line-pattern") || n2.getPaintProperty("line-dasharray"))) && (e2 = n2, t4[a2] = s2, t4[y2] = l3, i4 = s2.layer.id);
        }
      }
    }
  }
  _create(l3, y2, n2) {
    const o2 = 1 - (1 + y2) * (1 / (n2.length + 1)), u2 = this._runningId++;
    switch (l3.type) {
      case "background":
        return new c2(a$3.BACKGROUND, l3, o2, u2);
      case "fill":
        return new f(a$3.FILL, l3, o2, u2);
      case "line":
        return new _2(a$3.LINE, l3, o2, u2);
      case "symbol":
        return new L2(a$3.SYMBOL, l3, o2, u2);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${l3.id}`), null;
      case "circle":
        return new d2(a$3.CIRCLE, l3, o2, u2);
    }
    return null;
  }
  static _recreateLayer(l3, y2) {
    switch (l3.type) {
      case "background":
        return new c2(a$3.BACKGROUND, l3, y2.z, y2.uid);
      case "fill":
        return new f(a$3.FILL, l3, y2.z, y2.uid);
      case "line":
        return new _2(a$3.LINE, l3, y2.z, y2.uid);
      case "symbol":
        return new L2(a$3.SYMBOL, l3, y2.z, y2.uid);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${l3.id}`), null;
      case "circle":
        return new d2(a$3.CIRCLE, l3, y2.z, y2.uid);
    }
    return null;
  }
}
export {
  T4 as T,
  l2 as l,
  m,
  t$3 as t
};
