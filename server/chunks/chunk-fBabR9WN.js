import { ok as e$2, ol as n, om as l$1, on as B, oo as p, a$ as j, n1 as r$1, op as m, oq as r$2, bu as u, or as c, os as o, ot as g, ou as t, ov as g$1, eB as e$3, ow as f, ox as _, oy as i, oz as f$1, oA as r$3, oB as n$1, oC as f$2, oD as o$1, oE as l, oF as c$1, oG as o$2, oH as x, oI as e$4, oJ as L, oK as O, oL as i$1, oM as o$3, oN as e$5, oO as E, eA as D, nW as r$4, oP as r$5, oQ as T, oR as u$1, oS as c$2, fl as m$1, oT as o$4 } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e$1(e2, t2, o2) {
  const r2 = e2.typedBuffer, f2 = e2.typedBufferStride, d = t2.typedBuffer, n2 = t2.typedBufferStride, c2 = o2 ? o2.count : t2.count;
  let u2 = (o2?.dstIndex ?? 0) * f2, l2 = (o2?.srcIndex ?? 0) * n2;
  for (let p2 = 0; p2 < c2; ++p2) {
    for (let e3 = 0; e3 < 9; ++e3)
      r2[u2 + e3] = d[l2 + e3];
    u2 += f2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e$1 }, Symbol.toStringTag, { value: "Module" }));
function e(e2, t2, o2) {
  const r2 = e2.typedBuffer, f2 = e2.typedBufferStride, d = t2.typedBuffer, n2 = t2.typedBufferStride, c2 = o2 ? o2.count : t2.count;
  let u2 = (o2?.dstIndex ?? 0) * f2, l2 = (o2?.srcIndex ?? 0) * n2;
  for (let p2 = 0; p2 < c2; ++p2) {
    for (let e3 = 0; e3 < 16; ++e3)
      r2[u2 + e3] = d[l2 + e3];
    u2 += f2, l2 += n2;
  }
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: e }, Symbol.toStringTag, { value: "Module" }));
function r(s, r2) {
  return new s(new ArrayBuffer(r2 * s.ElementCount * e$2(s.ElementType)));
}
async function N(e2, t2, r2) {
  const o2 = { ...r2, useTransform: r2?.useTransform ?? true }, n$12 = new n(z(o2)), s = (await l$1(n$12, t2, o2, true)).model, a = s.lods.shift(), l2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
  s.textures.forEach((e3, t3) => l2.set(t3, H(e3))), s.materials.forEach((e3, t3) => i2.set(t3, J(e3, l2)));
  const u2 = Q(a);
  for (const p2 of u2.parts)
    W(u2, p2, i2);
  const { position: c2, normal: f2, tangent: m2, color: d, texCoord0: g2 } = u2.vertexAttributes, x2 = { position: c2.typedBuffer, normal: null != f2 ? f2.typedBuffer : null, tangent: null != m2 ? m2.typedBuffer : null, uv: null != g2 ? g2.typedBuffer : null, color: null != d ? d.typedBuffer : null }, T2 = B(x2, e2, o2);
  return { transform: T2.transform, vertexSpace: T2.vertexSpace, components: u2.components, spatialReference: e2.spatialReference, vertexAttributes: new p({ position: T2.vertexAttributes.position, normal: T2.vertexAttributes.normal, tangent: T2.vertexAttributes.tangent, color: x2.color, uv: x2.uv }) };
}
function z(e2) {
  const r2 = e2?.resolveFile, o2 = e2?.requestFile;
  return r2 || o2 ? { busy: false, request: async (e3, n2, s) => {
    const a = r2?.(e3) ?? e3;
    if (o2) {
      const e4 = await o2(a, n2, s?.signal);
      if (void 0 !== e4)
        return e4;
    }
    const l2 = "image" === n2 ? "image" : "binary" === n2 ? "array-buffer" : "json";
    return (await j(a, { responseType: l2, signal: null != s ? s.signal : null })).data;
  } } : null;
}
function G(e2, t2) {
  if (null == e2)
    return "-";
  const o2 = e2.typedBuffer;
  return `${r$1(t2, o2.buffer, () => t2.size)}/${o2.byteOffset}/${o2.byteLength}`;
}
function K(e2) {
  return null != e2 ? e2.toString() : "-";
}
function Q(e2) {
  let t2 = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, o2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), s = [];
  for (const a of e2.parts) {
    const { attributes: { position: e3, normal: l2, color: i2, tangent: u2, texCoord0: c2 } } = a, f2 = `
      ${G(e3, o2)}/
      ${G(l2, o2)}/
      ${G(i2, o2)}/
      ${G(u2, o2)}/
      ${G(c2, o2)}/
      ${K(a.transform)}
    `;
    let m2 = false;
    const p2 = r$1(n2, f2, () => (m2 = true, { start: t2, length: e3.count }));
    m2 && (t2 += e3.count), l2 && (has.normal = true), i2 && (has.color = true), u2 && (has.tangent = true), c2 && (has.texCoord0 = true), s.push({ gltf: a, writeVertices: m2, region: p2 });
  }
  return { vertexAttributes: { position: r(T, t2), normal: has.normal ? r(i$1, t2) : null, tangent: has.tangent ? r(c$1, t2) : null, color: has.color ? r(x, t2) : null, texCoord0: has.texCoord0 ? r(u$1, t2) : null }, parts: s, components: [] };
}
function H(e2) {
  return new m({ data: (r$2(e2.data), e2.data), wrap: Z(e2.parameters.wrap) });
}
function J(t2, r2) {
  const o2 = new u(re(t2.color, t2.opacity)), s = t2.emissiveFactor ? new u(oe(t2.emissiveFactor)) : null, a = (e2) => e2 ? new c$2({ scale: e2.scale ? [e2.scale[0], e2.scale[1]] : [1, 1], rotation: m$1(e2.rotation ?? 0), offset: e2.offset ? [e2.offset[0], e2.offset[1]] : [0, 0] }) : null;
  return new c({ color: o2, colorTexture: r2.get(t2.textureColor), normalTexture: r2.get(t2.textureNormal), emissiveColor: s, emissiveTexture: r2.get(t2.textureEmissive), occlusionTexture: r2.get(t2.textureOcclusion), alphaMode: Y(t2.alphaMode), alphaCutoff: t2.alphaCutoff, doubleSided: t2.doubleSided, metallic: t2.metallicFactor, roughness: t2.roughnessFactor, metallicRoughnessTexture: r2.get(t2.textureMetallicRoughness), colorTextureTransform: a(t2.colorTextureTransform), normalTextureTransform: a(t2.normalTextureTransform), occlusionTextureTransform: a(t2.occlusionTextureTransform), emissiveTextureTransform: a(t2.emissiveTextureTransform), metallicRoughnessTextureTransform: a(t2.metallicRoughnessTextureTransform) });
}
function W(e2, t2, r2) {
  t2.writeVertices && X(e2, t2);
  const { indices: o$12, attributes: n2, primitiveType: s, material: a } = t2.gltf;
  let l2 = o(o$12 || n2.position.count, s);
  const i2 = t2.region.start;
  if (i2) {
    const e3 = new Uint32Array(l2);
    for (let t3 = 0; t3 < l2.length; t3++)
      e3[t3] += i2;
    l2 = e3;
  }
  e2.components.push(new g({ name: t2.gltf.name, faces: l2, material: r2.get(a), shading: n2.normal ? "source" : "flat", trustSourceNormals: true }));
}
function X(e2, t$1) {
  const { position: r2, normal: n2, tangent: l$12, color: i$2, texCoord0: u2 } = e2.vertexAttributes, c2 = t$1.region.start, { attributes: f$3, transform: m2 } = t$1.gltf, p2 = f$3.position.count;
  if (t(r2.slice(c2, p2), f$3.position, m2), null != f$3.normal && null != n2) {
    const e3 = g$1(e$3(), m2), t2 = n2.slice(c2, p2);
    f(t2, f$3.normal, e3), _(e3) && i(t2, t2);
  } else
    null != n2 && f$1(n2, 0, 0, 1, { dstIndex: c2, count: p2 });
  if (null != f$3.tangent && null != l$12) {
    const e3 = g$1(e$3(), m2), t2 = l$12.slice(c2, p2);
    r$3(t2, f$3.tangent, e3), _(e3) && n$1(t2, t2);
  } else
    null != l$12 && f$2(l$12, 0, 0, 1, 1, { dstIndex: c2, count: p2 });
  if (null != f$3.texCoord0 && null != u2 ? o$1(u2.slice(c2, p2), f$3.texCoord0) : null != u2 && l(u2, 0, 0, { dstIndex: c2, count: p2 }), null != f$3.color && null != i$2) {
    const e3 = f$3.color, t2 = i$2.slice(c2, p2);
    if (4 === e3.elementCount)
      e3 instanceof c$1 ? o$2(t2, e3, 255) : e3 instanceof x ? e$4(t2, e3) : e3 instanceof L && o$2(t2, e3, 1 / 256);
    else {
      f$2(t2, 255, 255, 255, 255);
      const r3 = O.fromTypedArray(t2.typedBuffer, t2.typedBufferStride);
      e3 instanceof i$1 ? o$3(r3, e3, 255) : e3 instanceof O ? e$5(r3, e3) : e3 instanceof E && o$3(r3, e3, 1 / 256);
    }
  } else
    null != i$2 && f$2(i$2.slice(c2, p2), 255, 255, 255, 255);
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
    case D.CLAMP_TO_EDGE:
      return "clamp";
    case D.MIRRORED_REPEAT:
      return "mirror";
    case D.REPEAT:
      return "repeat";
  }
}
function te(e2) {
  return e2 ** (1 / o$4) * 255;
}
function re(e2, t2) {
  return r$4(te(e2[0]), te(e2[1]), te(e2[2]), t2);
}
function oe(e2) {
  return r$5(te(e2[0]), te(e2[1]), te(e2[2]));
}
export {
  N as loadGLTFMesh
};
