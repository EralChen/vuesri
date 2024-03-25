import { hk as u$1, hl as f$1, hm as m$1, hn as S, aC as M, ho as L, hp as R, cY as x$1, hq as h, hr as W, hs as E, ht as U, hu as D, hv as R$1, hw as u, hx as s, hy as s$1, hz as M$1, hA as T, hB as i, hC as ee } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class J {
  convertVectorFieldData(r) {
    const t = u$1.fromJSON(r.pixelBlock), s2 = f$1(t, r.type);
    return Promise.resolve(null != s2 ? s2.toJSON() : null);
  }
  computeStatisticsHistograms(r) {
    const t = u$1.fromJSON(r.pixelBlock), s2 = m$1(t);
    return Promise.resolve(s2);
  }
  async decode(r) {
    const e = await S(r.data, r.options);
    return e && e.toJSON();
  }
  symbolize(r) {
    r.pixelBlock = u$1.fromJSON(r.pixelBlock), r.extent = r.extent ? M.fromJSON(r.extent) : null;
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
    const t = this.rasterFunction.process({ extent: M.fromJSON(r.extent), primaryPixelBlocks: r.primaryPixelBlocks.map((r2) => null != r2 ? u$1.fromJSON(r2) : null), primaryPixelSizes: r.primaryPixelSizes?.map((r2) => null != r2 ? x$1.fromJSON(r2) : null), primaryRasterIds: r.primaryRasterIds });
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
    const t = W(u$1.fromJSON(r.srcPixelBlock), r.tileSize, r.maximumPyramidLevel ?? 0, false === r.useBilinear);
    return t && t.forEach((r2, e) => {
      t.set(e, r2?.toJSON());
    }), Promise.resolve(t);
  }
  clipTile(r) {
    const t = u$1.fromJSON(r.pixelBlock), s2 = E({ ...r, pixelBlock: t });
    return Promise.resolve(s2?.toJSON());
  }
  async mosaicAndTransform(r) {
    const t = r.srcPixelBlocks.map((r2) => r2 ? new u$1(r2) : null), s2 = U(t, r.srcMosaicSize, { blockWidths: r.blockWidths, alignmentInfo: r.alignmentInfo, clipOffset: r.clipOffset, clipSize: r.clipSize });
    let o, l = s2;
    return r.coefs && (l = D(s2, r.destDimension, r.coefs, r.sampleSpacing, r.interpolation)), r.projectDirections && r.gcsGrid && (o = R$1(r.destDimension, r.gcsGrid), l = u(l, r.isUV ? "vector-uv" : "vector-magdir", o)), { pixelBlock: l?.toJSON(), localNorthDirections: o };
  }
  async createFlowMesh(r, e) {
    const t = { data: new Float32Array(r.flowData.buffer), mask: new Uint8Array(r.flowData.maskBuffer), width: r.flowData.width, height: r.flowData.height }, { vertexData: s$12, indexData: o } = await s(r.meshType, r.simulationSettings, t, e.signal);
    return { result: { vertexBuffer: s$12.buffer, indexBuffer: o.buffer }, transferList: [s$12.buffer, o.buffer] };
  }
  async getProjectionOffsetGrid(e) {
    const t = M.fromJSON(e.projectedExtent), s2 = M.fromJSON(e.srcBufferExtent);
    let o = null;
    e.datumTransformationSteps && (o = new s$1({ steps: e.datumTransformationSteps })), (e.includeGCSGrid || M$1(t.spatialReference, s2.spatialReference, o)) && await T();
    const i$1 = e.rasterTransform ? i(e.rasterTransform) : null;
    return ee({ ...e, projectedExtent: t, srcBufferExtent: s2, datumTransformation: o, rasterTransform: i$1 });
  }
}
export {
  J as default
};
