import { oA as e$2, oB as n, oC as l$1, oD as V, oE as l, aQ as U$1, eL as r$1, oF as m, oG as r$2, b$ as u, oH as m$1, oI as o, oJ as h, oK as e$3, oL as j, oM as f, oN as _, oO as a, oP as f$1, oQ as r$3, oR as n$1, oS as f$2, oT as o$1, oU as l$2, oV as c$1, oW as o$2, oX as x, oY as e$4, oZ as L, o_ as O, o$ as i, p0 as o$3, p1 as e$5, p2 as E, fq as D$1, eH as r$4, aE as r$5, p3 as T, p4 as u$1, p5 as c, aD as M, fr as e$6, p6 as o$4 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e$1(e2, t, o2) {
  const r2 = e2.typedBuffer, f2 = e2.typedBufferStride, d = t.typedBuffer, n2 = t.typedBufferStride, c2 = o2 ? o2.count : t.count;
  let u2 = (o2?.dstIndex ?? 0) * f2, l2 = (o2?.srcIndex ?? 0) * n2;
  for (let p = 0; p < c2; ++p) {
    for (let e3 = 0; e3 < 9; ++e3)
      r2[u2 + e3] = d[l2 + e3];
    u2 += f2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$1 }, Symbol.toStringTag, { value: "Module" }));
function e(e2, t, o2) {
  const r2 = e2.typedBuffer, f2 = e2.typedBufferStride, d = t.typedBuffer, n2 = t.typedBufferStride, c2 = o2 ? o2.count : t.count;
  let u2 = (o2?.dstIndex ?? 0) * f2, l2 = (o2?.srcIndex ?? 0) * n2;
  for (let p = 0; p < c2; ++p) {
    for (let e3 = 0; e3 < 16; ++e3)
      r2[u2 + e3] = d[l2 + e3];
    u2 += f2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e }, Symbol.toStringTag, { value: "Module" }));
function r(s, r2) {
  return new s(new ArrayBuffer(r2 * s.ElementCount * e$2(s.ElementType)));
}
async function N(e2, t, r2) {
  const o2 = new n(z(r2)), n$12 = (await l$1(o2, t, r2, true)).model, s = n$12.lods.shift(), l$22 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map();
  n$12.textures.forEach((e3, t2) => l$22.set(t2, H(e3))), n$12.materials.forEach((e3, t2) => a2.set(t2, J(e3, l$22)));
  const i2 = Q(s);
  for (const p of i2.parts)
    W(i2, p, a2);
  const { position: u2, normal: c2, tangent: f2, color: m2, texCoord0: g } = i2.vertexAttributes, x2 = { position: u2.typedBuffer, normal: null != c2 ? c2.typedBuffer : null, tangent: null != f2 ? f2.typedBuffer : null, uv: null != g ? g.typedBuffer : null, color: null != m2 ? m2.typedBuffer : null }, d = V(x2, e2, r2);
  return { transform: d.transform, vertexSpace: d.vertexSpace, components: i2.components, spatialReference: e2.spatialReference, vertexAttributes: new l({ position: d.vertexAttributes.position, normal: d.vertexAttributes.normal, tangent: d.vertexAttributes.tangent, color: x2.color, uv: x2.uv }) };
}
function z(e2) {
  const r2 = e2?.resolveFile;
  return r2 ? { busy: false, request: async (e3, o2, n2) => {
    const s = r2?.(e3) ?? e3, l2 = "image" === o2 ? "image" : "binary" === o2 ? "array-buffer" : "json";
    return (await U$1(s, { responseType: l2, signal: null != n2 ? n2.signal : null })).data;
  } } : null;
}
function G(e2, t) {
  if (null == e2)
    return "-";
  const o2 = e2.typedBuffer;
  return `${r$1(t, o2.buffer, () => t.size)}/${o2.byteOffset}/${o2.byteLength}`;
}
function K(e2) {
  return null != e2 ? e2.toString() : "-";
}
function Q(e2) {
  let t = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, o2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), s = [];
  for (const l2 of e2.parts) {
    const { attributes: { position: e3, normal: a2, color: i2, tangent: u2, texCoord0: c2 } } = l2, f2 = `
      ${G(e3, o2)}/
      ${G(a2, o2)}/
      ${G(i2, o2)}/
      ${G(u2, o2)}/
      ${G(c2, o2)}/
      ${K(l2.transform)}
    `;
    let m2 = false;
    const p = r$1(n2, f2, () => (m2 = true, { start: t, length: e3.count }));
    m2 && (t += e3.count), a2 && (has.normal = true), i2 && (has.color = true), u2 && (has.tangent = true), c2 && (has.texCoord0 = true), s.push({ gltf: l2, writeVertices: m2, region: p });
  }
  return { vertexAttributes: { position: r(T, t), normal: has.normal ? r(i, t) : null, tangent: has.tangent ? r(c$1, t) : null, color: has.color ? r(x, t) : null, texCoord0: has.texCoord0 ? r(u$1, t) : null }, parts: s, components: [] };
}
function H(e2) {
  return new m({ data: (r$2(e2.data), e2.data), wrap: Z(e2.parameters.wrap) });
}
function J(t, r2) {
  const o2 = new u(re(t.color, t.opacity)), s = t.emissiveFactor ? new u(oe(t.emissiveFactor)) : null, l2 = (e2) => e2 ? new c({ scale: e2.scale ? [e2.scale[0], e2.scale[1]] : [1, 1], rotation: M(e2.rotation ?? 0), offset: e2.offset ? [e2.offset[0], e2.offset[1]] : [0, 0] }) : null;
  return new m$1({ color: o2, colorTexture: r2.get(t.textureColor), normalTexture: r2.get(t.textureNormal), emissiveColor: s, emissiveTexture: r2.get(t.textureEmissive), occlusionTexture: r2.get(t.textureOcclusion), alphaMode: Y(t.alphaMode), alphaCutoff: t.alphaCutoff, doubleSided: t.doubleSided, metallic: t.metallicFactor, roughness: t.roughnessFactor, metallicRoughnessTexture: r2.get(t.textureMetallicRoughness), colorTextureTransform: l2(t.colorTextureTransform), normalTextureTransform: l2(t.normalTextureTransform), occlusionTextureTransform: l2(t.occlusionTextureTransform), emissiveTextureTransform: l2(t.emissiveTextureTransform), metallicRoughnessTextureTransform: l2(t.metallicRoughnessTextureTransform) });
}
function W(e2, t, r2) {
  t.writeVertices && X(e2, t);
  const { indices: o$12, attributes: n2, primitiveType: s, material: l2 } = t.gltf;
  let a2 = o(o$12 || n2.position.count, s);
  const i2 = t.region.start;
  if (i2) {
    const e3 = new Uint32Array(a2);
    for (let t2 = 0; t2 < a2.length; t2++)
      e3[t2] += i2;
    a2 = e3;
  }
  e2.components.push(new h({ name: t.gltf.name, faces: a2, material: r2.get(l2), shading: n2.normal ? "source" : "flat", trustSourceNormals: true }));
}
function X(e2, t) {
  const { position: r2, normal: n2, tangent: a$1, color: i$1, texCoord0: u2 } = e2.vertexAttributes, c2 = t.region.start, { attributes: f$3, transform: m2 } = t.gltf, p = f$3.position.count;
  if (e$3(r2.slice(c2, p), f$3.position, m2), null != f$3.normal && null != n2) {
    const e3 = j(e$6(), m2), t2 = n2.slice(c2, p);
    f(t2, f$3.normal, e3), _(e3) && a(t2, t2);
  } else
    null != n2 && f$1(n2, 0, 0, 1, { dstIndex: c2, count: p });
  if (null != f$3.tangent && null != a$1) {
    const e3 = j(e$6(), m2), t2 = a$1.slice(c2, p);
    r$3(t2, f$3.tangent, e3), _(e3) && n$1(t2, t2);
  } else
    null != a$1 && f$2(a$1, 0, 0, 1, 1, { dstIndex: c2, count: p });
  if (null != f$3.texCoord0 && null != u2 ? o$1(u2.slice(c2, p), f$3.texCoord0) : null != u2 && l$2(u2, 0, 0, { dstIndex: c2, count: p }), null != f$3.color && null != i$1) {
    const e3 = f$3.color, t2 = i$1.slice(c2, p);
    if (4 === e3.elementCount)
      e3 instanceof c$1 ? o$2(t2, e3, 255) : e3 instanceof x ? e$4(t2, e3) : e3 instanceof L && o$2(t2, e3, 1 / 256);
    else {
      f$2(t2, 255, 255, 255, 255);
      const r3 = O.fromTypedArray(t2.typedBuffer, t2.typedBufferStride);
      e3 instanceof i ? o$3(r3, e3, 255) : e3 instanceof O ? e$5(r3, e3) : e3 instanceof E && o$3(r3, e3, 1 / 256);
    }
  } else
    null != i$1 && f$2(i$1.slice(c2, p), 255, 255, 255, 255);
}
function Y(e2) {
  switch (e2) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function Z(e2) {
  return { horizontal: ee(e2.s), vertical: ee(e2.t) };
}
function ee(e2) {
  switch (e2) {
    case D$1.CLAMP_TO_EDGE:
      return "clamp";
    case D$1.MIRRORED_REPEAT:
      return "mirror";
    case D$1.REPEAT:
      return "repeat";
  }
}
function te(e2) {
  return e2 ** (1 / o$4) * 255;
}
function re(e2, t) {
  return r$4(te(e2[0]), te(e2[1]), te(e2[2]), t);
}
function oe(e2) {
  return r$5(te(e2[0]), te(e2[1]), te(e2[2]));
}
export {
  N as loadGLTFMesh
};
