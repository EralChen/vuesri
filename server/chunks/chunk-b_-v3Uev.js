import { gx as u$1, gy as f$1, gz as m, gA as j, ap as M$1, gB as L, gC as R, cy as x$1, gD as h, gE as W, gF as U, gG as R$1, gH as I, gI as u, gJ as s, gK as s$1, gL as M, gM as T, gN as i, gO as ee } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class N {
  convertVectorFieldData(r) {
    const t = u$1.fromJSON(r.pixelBlock), s2 = f$1(t, r.type);
    return Promise.resolve(null != s2 ? s2.toJSON() : null);
  }
  computeStatisticsHistograms(r) {
    const t = u$1.fromJSON(r.pixelBlock), s2 = m(t);
    return Promise.resolve(s2);
  }
  async decode(r) {
    const e = await j(r.data, r.options);
    return e && e.toJSON();
  }
  symbolize(r) {
    r.pixelBlock = u$1.fromJSON(r.pixelBlock), r.extent = r.extent ? M$1.fromJSON(r.extent) : null;
    const t = this.symbolizer.symbolize(r);
    return Promise.resolve(null != t ? t.toJSON() : null);
  }
  async updateSymbolizer(r) {
    this.symbolizer = L.fromJSON(r.symbolizerJSON), r.histograms && "rasterStretch" === this.symbolizer?.rendererJSON.type && (this.symbolizer.rendererJSON.histograms = r.histograms);
  }
  async updateRasterFunction(r) {
    this.rasterFunction = R(r.rasterFunctionJSON);
  }
  async process(r) {
    const t = this.rasterFunction.process({ extent: M$1.fromJSON(r.extent), primaryPixelBlocks: r.primaryPixelBlocks.map((r2) => null != r2 ? u$1.fromJSON(r2) : null), primaryPixelSizes: r.primaryPixelSizes?.map((r2) => null != r2 ? x$1.fromJSON(r2) : null), primaryRasterIds: r.primaryRasterIds });
    return null != t ? t.toJSON() : null;
  }
  stretch(r) {
    const t = this.symbolizer.simpleStretch(u$1.fromJSON(r.srcPixelBlock), r.stretchParams);
    return Promise.resolve(t?.toJSON());
  }
  estimateStatisticsHistograms(r) {
    const t = h(u$1.fromJSON(r.srcPixelBlock));
    return Promise.resolve(t);
  }
  split(r) {
    const t = W(u$1.fromJSON(r.srcPixelBlock), r.tileSize, r.maximumPyramidLevel);
    return t && t.forEach((r2, e) => {
      t.set(e, r2?.toJSON());
    }), Promise.resolve(t);
  }
  async mosaicAndTransform(r) {
    const t = r.srcPixelBlocks.map((r2) => r2 ? new u$1(r2) : null), s2 = U(t, r.srcMosaicSize, { blockWidths: r.blockWidths, alignmentInfo: r.alignmentInfo, clipOffset: r.clipOffset, clipSize: r.clipSize });
    let a, l = s2;
    return r.coefs && (l = R$1(s2, r.destDimension, r.coefs, r.sampleSpacing, r.interpolation)), r.projectDirections && r.gcsGrid && (a = I(r.destDimension, r.gcsGrid), l = u(l, r.isUV ? "vector-uv" : "vector-magdir", a)), { pixelBlock: l?.toJSON(), localNorthDirections: a };
  }
  async createFlowMesh(r, e) {
    const t = { data: new Float32Array(r.flowData.buffer), mask: new Uint8Array(r.flowData.maskBuffer), width: r.flowData.width, height: r.flowData.height }, { vertexData: s$12, indexData: o } = await s(r.meshType, r.simulationSettings, t, e.signal);
    return { result: { vertexBuffer: s$12.buffer, indexBuffer: o.buffer }, transferList: [s$12.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(e) {
    const t = M$1.fromJSON(e.projectedExtent), s2 = M$1.fromJSON(e.srcBufferExtent);
    let o = null;
    e.datumTransformationSteps && (o = new s$1({ steps: e.datumTransformationSteps })), (e.includeGCSGrid || M(t.spatialReference, s2.spatialReference, o)) && await T();
    const i$1 = e.rasterTransform ? i(e.rasterTransform) : null;
    return ee({ ...e, projectedExtent: t, srcBufferExtent: s2, datumTransformation: o, rasterTransform: i$1 });
  }
}
export {
  N as default
};
