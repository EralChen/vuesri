import { aV as e, a_ as c, aO as s, f4 as p, eX as x, f5 as n, fw as Re } from "./chunk-ejFG4zJ0.js";
const i = (i2) => {
  let c$1 = class c extends i2 {
    _validateFetchPopupFeatures(e2) {
      const { layer: r } = this, { popupEnabled: s$1 } = r;
      if (!s$1)
        throw new s("scenelayerview3d:fetchPopupFeatures", "Popups are disabled", { layer: r });
      if (!p(r, e2))
        throw new s("scenelayerview3d:fetchPopupFeatures", "Layer does not define a popup template", { layer: r });
    }
    async prepareFetchPopupFeatures(e2) {
    }
    async fetchPopupFeaturesFromGraphics(e2, t) {
      if (this._validateFetchPopupFeatures(t), 0 === e2.length)
        return [];
      const r = "scene" === this.layer.type && null != this.layer.associatedLayer ? this.layer.associatedLayer : this.layer;
      let i3 = [];
      "fieldsIndex" in this.layer && (i3 = x(this.layer.fieldsIndex, await n(r, p(this.layer, t)))), await this.prepareFetchPopupFeatures(i3);
      const c2 = /* @__PURE__ */ new Set(), n$1 = [], l = [];
      for (const s2 of e2)
        Re(i3, s2, c2) ? l.push(s2) : n$1.push(s2);
      if (0 === l.length)
        return n$1;
      const u = /* @__PURE__ */ new Map();
      for (let s2 = 0; s2 < e2.length; s2++)
        u.set(e2[s2].getObjectId() ?? 0, s2);
      const h = await this.whenGraphicAttributes(l, [...c2]).catch(() => l).then((e3) => n$1.concat(e3));
      return h.sort((e3, t2) => {
        const r2 = e3.getObjectId() ?? 0, s2 = u.get(r2) ?? 0, a = t2.getObjectId() ?? 0;
        return s2 - (u.get(a) ?? 0);
      }), h;
    }
  };
  return c$1 = e([c("esri.views.3d.layers.support.PopupSceneLayerView")], c$1), c$1;
};
export {
  i
};
