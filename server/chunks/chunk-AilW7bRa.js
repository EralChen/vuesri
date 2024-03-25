import { b as Ke, i as ii, ak as Ft, al as ri, c as Z, h as x, a6 as Y, a3 as zt, ad as e, am as de } from "./chunk-qsKdKwKn.js";
class p extends Ke {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds();
      let t = this.width(), i = this.height();
      if (t > 0 && i > 0) {
        let s = this.get("cornerRadius", 8);
        s = de(s, 0, Math.min(t / 2, i / 2));
        let o = this.get("pointerX", 0), r = this.get("pointerY", 0), l = this.get("pointerBaseWidth", 15) / 2, a = 0, n = 0, h = 0, p2 = (o - a) * (i - n) - (r - n) * (t - a), u2 = (o - h) * (0 - i) - (r - i) * (t - h);
        const g = this._display;
        if (g.moveTo(s, 0), p2 > 0 && u2 > 0) {
          let i2 = Math.round(de(o, s + l, t - l - s));
          r = de(r, -1 / 0, 0), g.lineTo(i2 - l, 0), g.lineTo(o, r), g.lineTo(i2 + l, 0);
        }
        if (g.lineTo(t - s, 0), g.arcTo(t, 0, t, s, s), p2 > 0 && u2 < 0) {
          let a2 = Math.round(de(r, s + l, i - l - s));
          o = de(o, t, 1 / 0), g.lineTo(t, s), g.lineTo(t, Math.max(a2 - l, s)), g.lineTo(o, r), g.lineTo(t, a2 + l);
        }
        if (g.lineTo(t, i - s), g.arcTo(t, i, t - s, i, s), p2 < 0 && u2 < 0) {
          let a2 = Math.round(de(o, s + l, t - l - s));
          r = de(r, i, 1 / 0), g.lineTo(t - s, i), g.lineTo(a2 + l, i), g.lineTo(o, r), g.lineTo(a2 - l, i);
        }
        if (g.lineTo(s, i), g.arcTo(0, i, 0, i - s, s), p2 < 0 && u2 > 0) {
          let t2 = Math.round(de(r, s + l, i - s - l));
          o = de(o, -1 / 0, 0), g.lineTo(0, i - s), g.lineTo(0, t2 + l), g.lineTo(o, r), g.lineTo(0, Math.max(t2 - l, s));
        }
        g.lineTo(0, s), g.arcTo(0, 0, s, 0, s), g.closePath();
      }
    }
  }
}
Object.defineProperty(p, "className", { enumerable: true, configurable: true, writable: true, value: "PointedRectangle" }), Object.defineProperty(p, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([p.className]) });
class u extends ii {
  constructor(t, e2, i, s = []) {
    super(t, e2, i, s), Object.defineProperty(this, "_fx", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_fy", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_label", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_fillDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_labelDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_w", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_h", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_keepHoverDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_htmlContentHovered", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["tooltip"]), super._afterNew(), this.set("background", p.new(this._root, { themeTags: ["tooltip", "background"] })), this._label = this.children.push(ri.new(this._root, {})), this._disposers.push(this._label.events.on("boundschanged", () => {
      this._updateBackground();
    })), this._disposers.push(this.on("bounds", () => {
      this._updateBackground();
    })), this._updateTextColor(), this._root.tooltipContainer.children.push(this), this.hide(0), this._disposers.push(this.label.onPrivate("htmlElement", (t) => {
      t && (Z(t, "pointerover", (t2) => {
        this._htmlContentHovered = true;
      }), Z(t, "pointerout", (t2) => {
        this._htmlContentHovered = false;
      }));
    })), this._root._tooltips.push(this);
  }
  get label() {
    return this._label;
  }
  dispose() {
    super.dispose(), x(this._root._tooltips, this);
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && this.get("background")._markDirtyKey("width");
    null != this.get("labelText") && this.label.set("text", this.get("labelText"));
    null != this.get("labelHTML") && this.label.set("html", this.get("labelHTML"));
  }
  _changed() {
    if (super._changed(), (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) && this._updateBackground(), this.isDirty("tooltipTarget") && this.updateBackgroundColor(), this.isDirty("keepTargetHover")) {
      if (this.get("keepTargetHover")) {
        const t = this.get("background");
        this._keepHoverDp = new Y([t.events.on("pointerover", (t2) => {
          let e2 = this.get("tooltipTarget");
          e2 && (e2.parent && e2.parent.getPrivate("tooltipTarget") == e2 && (e2 = e2.parent), e2.hover());
        }), t.events.on("pointerout", (t2) => {
          let e2 = this.get("tooltipTarget");
          e2 && (e2.parent && e2.parent.getPrivate("tooltipTarget") == e2 && (e2 = e2.parent), this._htmlContentHovered || e2.unhover());
        })]), this.label.onPrivate("htmlElement", (e2) => {
          this._keepHoverDp && e2 && this._keepHoverDp.disposers.push(Z(e2, "pointerleave", (e3) => {
            const i = this.root._renderer.getEvent(e3);
            t.events.dispatch("pointerout", { type: "pointerout", originalEvent: i.event, point: i.point, simulated: false, target: t });
          }));
        });
      } else
        this._keepHoverDp && (this._keepHoverDp.dispose(), this._keepHoverDp = void 0);
    }
  }
  _onShow() {
    super._onShow(), this.updateBackgroundColor();
  }
  updateBackgroundColor() {
    let t = this.get("tooltipTarget");
    const e2 = this.get("background");
    let i, s;
    t && e2 && (i = t.get("fill"), s = t.get("stroke"), null == i && (i = s), this.get("getFillFromSprite") && (this._fillDp && this._fillDp.dispose(), null != i && e2.set("fill", i), this._fillDp = t.on("fill", (t2) => {
      null != t2 && (e2.set("fill", t2), this._updateTextColor(t2));
    }), this._disposers.push(this._fillDp)), this.get("getStrokeFromSprite") && (this._strokeDp && this._strokeDp.dispose(), null != i && e2.set("stroke", i), this._strokeDp = t.on("fill", (t2) => {
      null != t2 && e2.set("stroke", t2);
    }), this._disposers.push(this._strokeDp)), this.get("getLabelFillFromSprite") && (this._labelDp && this._labelDp.dispose(), null != i && this.label.set("fill", i), this._labelDp = t.on("fill", (t2) => {
      null != t2 && this.label.set("fill", t2);
    }), this._disposers.push(this._labelDp))), this._updateTextColor(i);
  }
  _updateTextColor(t) {
    this.get("autoTextColor") && (null == t && (t = this.get("background").get("fill")), null == t && (t = this._root.interfaceColors.get("background")), t instanceof zt && this.label.set("fill", zt.alternative(t, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text"))));
  }
  _setDataItem(t) {
    super._setDataItem(t), this.label._setDataItem(t);
  }
  _updateBackground() {
    super.updateBackground();
    const t = this._root.container;
    if (t) {
      let i = 0.5, s = 0.5, o = this.get("centerX");
      o instanceof e && (i = o.value);
      let r = this.get("centerY");
      r instanceof e && (s = r.value);
      let l = t.width(), a = t.height(), n = this.parent, u2 = 0, g = 0;
      if (n) {
        u2 = n.x(), g = n.y();
        const t2 = n.get("layerMargin");
        t2 && (u2 += t2.left || 0, g += t2.top || 0, l += (t2.left || 0) + (t2.right || 0), a += (t2.top || 0) + (t2.bottom || 0));
      }
      const d = this.get("bounds", { left: -u2, top: -g, right: l - u2, bottom: a - g });
      this._updateBounds();
      let c = this.width(), b = this.height();
      0 === c && (c = this._w), 0 === b && (b = this._h);
      let _ = this.get("pointTo", { x: l / 2, y: a / 2 }), f = _.x, m = _.y, v = this.get("pointerOrientation"), T = this.get("background"), y = 0, D = 0, k = 0;
      T instanceof p && (y = T.get("pointerLength", 0), D = T.get("strokeWidth", 0) / 2, k = D, T.set("width", c), T.set("height", b));
      let w = 0, x2 = 0, P = d.right - d.left, C = d.bottom - d.top;
      "horizontal" == v || "left" == v || "right" == v ? (D = 0, "horizontal" == v ? f > d.left + P / 2 ? (f -= c * (1 - i) + y, k *= -1) : f += c * i + y : "left" == v ? f += c * (1 - i) + y : (f -= c * i + y, k *= -1)) : (k = 0, "vertical" == v ? m > d.top + b / 2 + y ? m -= b * (1 - s) + y : (m += b * s + y, D *= -1) : "down" == v ? m -= b * (1 - s) + y : (m += b * s + y, D *= -1)), f = de(f, d.left + c * i, d.left + P - c * (1 - i)) + k, m = de(m, d.top + b * s, d.top + C - b * (1 - s)) - D, w = _.x - f + c * i + k, x2 = _.y - m + b * s - D, this._fx = f, this._fy = m;
      const O = this.get("animationDuration", 0);
      if (O > 0 && this.get("visible") && this.get("opacity") > 0.1) {
        const t2 = this.get("animationEasing");
        this.animate({ key: "x", to: f, duration: O, easing: t2 }), this.animate({ key: "y", to: m, duration: O, easing: t2 });
      } else
        this.set("x", f), this.set("y", m);
      T instanceof p && (T.set("pointerX", w), T.set("pointerY", x2)), c > 0 && (this._w = c), b > 0 && (this._h = b);
    }
  }
}
Object.defineProperty(u, "className", { enumerable: true, configurable: true, writable: true, value: "Tooltip" }), Object.defineProperty(u, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([u.className]) });
export {
  u
};
