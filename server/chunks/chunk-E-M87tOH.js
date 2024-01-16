import { ia as t, ib as c, e$ as n$1, ic as z, id as $, h8 as u, ie as z$1, ig as m, ih as s, b7 as C$1 } from "./chunk-KFNcxJaF.js";
import { j } from "./chunk-Zlv3z8RW.js";
import { i } from "./chunk-_ABw_62H.js";
function n(e, t2) {
  const i2 = t2.length;
  if (e < t2[0].value || 1 === i2)
    return t2[0].size;
  for (let s2 = 1; s2 < i2; s2++)
    if (e < t2[s2].value) {
      const i3 = (e - t2[s2 - 1].value) / (t2[s2].value - t2[s2 - 1].value);
      return t2[s2 - 1].size + i3 * (t2[s2].size - t2[s2 - 1].size);
    }
  return t2[i2 - 1].size;
}
class v {
  constructor() {
    this.symbolLevels = [], this.vvColorValues = new Float32Array(8), this.vvColors = new Float32Array(32), this.vvOpacityValues = new Float32Array(8), this.vvOpacities = new Float32Array(8), this.vvSizeMinMaxValue = new Float32Array(4), this.outsideLabelsVisible = false, this._vvMaterialParameters = { vvSizeEnabled: false, vvColorEnabled: false, vvRotationEnabled: false, vvRotationType: "geographic", vvOpacityEnabled: false }, this._technique = t;
  }
  getSizeVVFieldStops(e) {
    const t2 = this._vvSizeFieldStops;
    if (t2)
      switch (t2.type) {
        case "static":
          return t2;
        case "level-dependent":
          return t2.levels[e] ?? (() => {
            let i2 = 1 / 0, s2 = 0;
            for (const o2 in t2.levels) {
              const t3 = parseFloat(o2), a2 = Math.abs(e - t3);
              a2 < i2 && (i2 = a2, s2 = t3);
            }
            if (i2 === 1 / 0)
              return { sizes: new Float32Array([0, 0, 0, 0, 0, 0]), values: new Float32Array([0, 0, 0, 0, 0, 0]) };
            const a = 2 ** ((e - s2) / 2), l = t2.levels[s2], r = new Float32Array(l.values);
            return r[2] *= a, r[3] *= a, { sizes: l.sizes, values: r };
          })();
        default:
          return;
      }
  }
  get vvMaterialParameters() {
    return this._vvMaterialParameters;
  }
  update(e) {
    null != this._vvInfo && this._updateVisualVariables(this._vvInfo.vvRanges, e);
  }
  setInfo(e, t2, i2) {
    this._updateEffects(i2), this._vvInfo = t2, this._technique = c(e), this.rendererSchema = this._technique.createOrUpdateRendererSchema(this.rendererSchema, e);
  }
  getVariation() {
    return { ...this._technique.getVariation(this.rendererSchema), outsideLabelsVisible: this.outsideLabelsVisible, supportsTextureFloat: n$1("2d").supportsTextureFloat };
  }
  getVariationHash() {
    return this._technique.getVariationHash(this.rendererSchema) << 1 | (this.outsideLabelsVisible ? 1 : 0);
  }
  _updateEffects(e) {
    this.outsideLabelsVisible = null != e && e.excludedLabelsVisible;
  }
  _updateVisualVariables(l, r) {
    const o2 = this._vvMaterialParameters;
    if (o2.vvOpacityEnabled = false, o2.vvSizeEnabled = false, o2.vvColorEnabled = false, o2.vvRotationEnabled = false, !l)
      return;
    const v2 = l.size;
    if (v2) {
      if (o2.vvSizeEnabled = true, v2.minMaxValue) {
        const t2 = v2.minMaxValue;
        let i2, l2;
        if (z(t2.minSize) && z(t2.maxSize))
          if ($(t2.minSize) && $(t2.maxSize))
            i2 = u(t2.minSize), l2 = u(t2.maxSize);
          else {
            const s2 = r.scale;
            i2 = u(n(s2, t2.minSize.stops)), l2 = u(n(s2, t2.maxSize.stops));
          }
        this.vvSizeMinMaxValue.set([t2.minDataValue, t2.maxDataValue, i2, l2]);
      }
      if (v2.scaleStops && (this.vvSizeScaleStopsValue = u(n(r.scale, v2.scaleStops.stops))), v2.unitValue) {
        const e = z$1(r.spatialReference) / m[v2.unitValue.unit];
        this.vvSizeUnitValueToPixelsRatio = e / r.resolution;
      }
      v2.fieldStops && (this._vvSizeFieldStops = v2.fieldStops);
    }
    const u$1 = l.color;
    u$1 && (o2.vvColorEnabled = true, this.vvColorValues.set(u$1.values), this.vvColors.set(u$1.colors));
    const c2 = l.opacity;
    c2 && (o2.vvOpacityEnabled = true, this.vvOpacityValues.set(c2.values), this.vvOpacities.set(c2.opacities));
    const h = l.rotation;
    h && (o2.vvRotationEnabled = true, o2.vvRotationType = h.type);
  }
}
class o extends i {
  constructor(e) {
    super(e), this._rendererInfo = new v(), this._materialItemsRequestQueue = new s(), this.attributeView = new j(() => this.onAttributeStoreUpdate());
  }
  destroy() {
    this.children.forEach((e) => e.destroy()), this.removeAllChildren(), this.attributeView.destroy(), this._materialItemsRequestQueue.clear();
  }
  setRendererInfo(e, t2, r) {
    this._rendererInfo.setInfo(e, t2, r), this.requestRender();
  }
  async getMaterialItems(t2, r) {
    if (!t2 || 0 === t2.length)
      return [];
    const s2 = C$1();
    return this._materialItemsRequestQueue.push({ items: t2, abortOptions: r, resolver: s2 }), this.requestRender(), s2.promise;
  }
  doRender(e) {
    if (e.context.capabilities.enable("textureFloat"), e.context.capabilities.enable("vao"), this._materialItemsRequestQueue.length > 0) {
      let t2 = this._materialItemsRequestQueue.pop();
      for (; t2; )
        this._processMaterialItemRequest(e, t2), t2 = this._materialItemsRequestQueue.pop();
    }
    super.doRender(e);
  }
  renderChildren(e) {
    for (const t2 of this.children)
      t2.commit(e);
    this._rendererInfo.update(e.state), super.renderChildren(e);
  }
  createRenderParams(e) {
    const t2 = super.createRenderParams(e);
    return t2.rendererInfo = this._rendererInfo, t2.attributeView = this.attributeView, t2;
  }
  onAttributeStoreUpdate() {
  }
  _processMaterialItemRequest(e, { items: t2, abortOptions: r, resolver: s2 }) {
    const { painter: i2, pixelRatio: o2 } = e, n2 = t2.map((e2) => i2.textureManager.rasterizeItem(e2.symbol, o2, e2.glyphIds, r));
    Promise.all(n2).then((e2) => {
      if (!this.stage)
        return void s2.reject();
      const r2 = e2.map((e3, r3) => ({ id: t2[r3].id, mosaicItem: e3 }));
      s2.resolve(r2);
    }, s2.reject);
  }
}
export {
  o
};
