import { aO as s, cJ as U, cK as L, cL as G$1, cM as P } from "./chunk-ejFG4zJ0.js";
class l {
  constructor(e, t, r, o) {
    this.dataType = e, this.samplingMode = t, this.pixelFormat = r, this.internalFormat = o;
  }
}
function n(n2, i) {
  const { textureFloat: f, colorBufferFloat: s$1 } = n2.capabilities, u = f?.textureFloatLinear, _ = s$1?.textureFloat, m = s$1?.textureHalfFloat, p = s$1?.floatBlend, c = n2.driverTest.floatBufferBlend.result;
  if (!_ && !m)
    throw new s("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(p && c || m))
    throw new s("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (c ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const d = _ && p && c, h = m, b = u, R = !!s$1?.R32F, E = !!s$1?.R16F;
  if (d && b)
    return b || i.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new l(U.FLOAT, b ? L.LINEAR : L.NEAREST, R ? G$1.RED : G$1.RGBA, R ? P.R32F : G$1.RGBA);
  if (h)
    return new l(U.HALF_FLOAT, L.LINEAR, E ? G$1.RED : G$1.RGBA, E ? P.R16F : G$1.RGBA);
  throw new s("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
export {
  n
};
