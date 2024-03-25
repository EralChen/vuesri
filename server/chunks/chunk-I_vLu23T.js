import { z as ze, i as ii, C as g, ar as pt, ak as Ft, am as de } from "./chunk-qsKdKwKn.js";
class n extends ze {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = true);
  }
  _draw() {
    let e = this.width(), a = this.height(), r = e, n2 = a, o2 = r / Math.abs(e), h = n2 / Math.abs(a);
    if (g(r) && g(n2)) {
      let e2 = Math.min(r, n2) / 2, s = pt(this.get("cornerRadiusTL", 8), e2), a2 = pt(this.get("cornerRadiusTR", 8), e2), l = pt(this.get("cornerRadiusBR", 8), e2), c = pt(this.get("cornerRadiusBL", 8), e2), d = Math.min(Math.abs(r / 2), Math.abs(n2 / 2));
      s = de(s, 0, d), a2 = de(a2, 0, d), l = de(l, 0, d), c = de(c, 0, d);
      const u = this._display;
      u.moveTo(s * o2, 0), u.lineTo(r - a2 * o2, 0), a2 > 0 && u.arcTo(r, 0, r, a2 * h, a2), u.lineTo(r, n2 - l * h), l > 0 && u.arcTo(r, n2, r - l * o2, n2, l), u.lineTo(c * o2, n2), c > 0 && u.arcTo(0, n2, 0, n2 - c * h, c), u.lineTo(0, s * h), s > 0 && u.arcTo(0, 0, s * o2, 0, s), u.closePath();
    }
  }
}
Object.defineProperty(n, "className", { enumerable: true, configurable: true, writable: true, value: "RoundedRectangle" }), Object.defineProperty(n, "classNames", { enumerable: true, configurable: true, writable: true, value: ze.classNames.concat([n.className]) });
class o extends ii {
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["button"]), super._afterNew(), this._settings.background || this.set("background", n.new(this._root, { themeTags: Ft(this._settings.themeTags, ["background"]) })), this.setPrivate("trustBounds", true);
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
Object.defineProperty(o, "className", { enumerable: true, configurable: true, writable: true, value: "Button" }), Object.defineProperty(o, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([o.className]) });
export {
  n,
  o
};
