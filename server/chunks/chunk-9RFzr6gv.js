import { bo as e, br as c, aM as s$1, ee as p, e5 as x, ef as n, eG as Ce } from "./chunk-KFNcxJaF.js";
const i = (i2) => {
  let c$1 = class c extends i2 {
    _validateFetchPopupFeatures(e2) {
      const { layer: s } = this, { popupEnabled: t } = s;
      if (!t)
        throw new s$1("scenelayerview3d:fetchPopupFeatures", "Popups are disabled", { layer: s });
      if (!p(s, e2))
        throw new s$1("scenelayerview3d:fetchPopupFeatures", "Layer does not define a popup template", { layer: s });
    }
    async prepareFetchPopupFeatures(e2) {
    }
    async fetchPopupFeatures(e2, r) {
      this._validateFetchPopupFeatures(r);
      const s = null != r ? r.clientGraphics : null;
      if (!s || 0 === s.length)
        return [];
      const i3 = "scene" === this.layer.type && null != this.layer.associatedLayer ? this.layer.associatedLayer : this.layer;
      let c2 = [];
      "fieldsIndex" in this.layer && (c2 = x(this.layer.fieldsIndex, await n(i3, p(this.layer, r)))), await this.prepareFetchPopupFeatures(c2);
      const l = /* @__PURE__ */ new Set(), n$1 = [], u = [];
      for (const t of s)
        Ce(c2, t, l) ? u.push(t) : n$1.push(t);
      return 0 === u.length ? n$1 : this.whenGraphicAttributes(u, [...l]).catch(() => u).then((e3) => n$1.concat(e3));
    }
  };
  return c$1 = e([c("esri.views.3d.layers.support.PopupSceneLayerView")], c$1), c$1;
};
export {
  i
};
