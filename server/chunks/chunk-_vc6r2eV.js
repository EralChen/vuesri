import { cb as n } from "./chunk-KFNcxJaF.js";
import { n as n$1 } from "./chunk-GcIahY26.js";
const e = (r) => {
  let t = "";
  t += r[0].toUpperCase();
  for (let e2 = 1; e2 < r.length; e2++) {
    const s2 = r[e2];
    s2 === s2.toUpperCase() ? (t += "_", t += s2) : t += s2.toUpperCase();
  }
  return t;
}, s = (r) => {
  const s2 = {};
  for (const t in r) {
    s2[e(t)] = r[t];
  }
  return n$1(s2);
}, o = (t, e2, o2, n$12) => {
  const a = t + t.substring(t.lastIndexOf("/")), p = e2 + e2.substring(e2.lastIndexOf("/")), f = s(n$12);
  return { attributes: o2, shaders: { vertexShader: f + n(`${a}.vert`), fragmentShader: f + n(`${p}.frag`) } };
};
export {
  o
};
