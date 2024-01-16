import { V as Ve, Q as Qe, x as l, aq as bt, aj as zt, al as he } from "./chunk-55vU5FGs.js";
class n extends Ve {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = true);
  }
  _draw() {
    let e = this.width(), a = this.height(), r = e, n2 = a, o2 = r / Math.abs(e), h = n2 / Math.abs(a);
    if (l(r) && l(n2)) {
      let e2 = Math.min(r, n2) / 2, s = bt(this.get("cornerRadiusTL", 8), e2), a2 = bt(this.get("cornerRadiusTR", 8), e2), c = bt(this.get("cornerRadiusBR", 8), e2), l2 = bt(this.get("cornerRadiusBL", 8), e2), d = Math.min(Math.abs(r / 2), Math.abs(n2 / 2));
      s = he(s, 0, d), a2 = he(a2, 0, d), c = he(c, 0, d), l2 = he(l2, 0, d);
      const b = this._display;
      b.moveTo(s * o2, 0), b.lineTo(r - a2 * o2, 0), a2 > 0 && b.arcTo(r, 0, r, a2 * h, a2), b.lineTo(r, n2 - c * h), c > 0 && b.arcTo(r, n2, r - c * o2, n2, c), b.lineTo(l2 * o2, n2), l2 > 0 && b.arcTo(0, n2, 0, n2 - l2 * h, l2), b.lineTo(0, s * h), s > 0 && b.arcTo(0, 0, s * o2, 0, s), b.closePath();
    }
  }
}
Object.defineProperty(n, "className", { enumerable: true, configurable: true, writable: true, value: "RoundedRectangle" }), Object.defineProperty(n, "classNames", { enumerable: true, configurable: true, writable: true, value: Ve.classNames.concat([n.className]) });
class o extends Qe {
  _afterNew() {
    this._settings.themeTags = zt(this._settings.themeTags, ["button"]), super._afterNew(), this._settings.background || this.set("background", n.new(this._root, { themeTags: zt(this._settings.themeTags, ["background"]) }));
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("icon")) {
      const e = this._prevSettings.icon, s = this.get("icon");
      s !== e && (this._disposeProperty("icon"), e && e.dispose(), s && this.children.push(s), this._prevSettings.icon = s);
    }
    if (this.isDirty("label")) {
      const e = this._prevSettings.label, s = this.get("label");
      s !== e && (this._disposeProperty("label"), e && e.dispose(), s && this.children.push(s), this._prevSettings.label = s);
    }
  }
}
Object.defineProperty(o, "className", { enumerable: true, configurable: true, writable: true, value: "Button" }), Object.defineProperty(o, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([o.className]) });
export {
  n,
  o
};
