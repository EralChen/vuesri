import { bo as e$1, bp as y, br as c, bs as g$1, bu as u } from "./chunk-KFNcxJaF.js";
let e = (e2) => ({ vnodeSelector: "", properties: void 0, children: void 0, text: e2.toString(), domNode: null }), r = (t2, o, n2) => {
  for (let l2 = 0, i = o.length; l2 < i; l2++) {
    let i2 = o[l2];
    Array.isArray(i2) ? r(t2, i2, n2) : null != i2 && false !== i2 && ("string" == typeof i2 && (i2 = e(i2)), n2.push(i2));
  }
};
function t(e2, t2, o) {
  if (Array.isArray(t2))
    o = t2, t2 = void 0;
  else if (t2 && ("string" == typeof t2 || t2.hasOwnProperty("vnodeSelector")) || o && ("string" == typeof o || o.hasOwnProperty("vnodeSelector")))
    throw new Error("h called with invalid arguments");
  let n2, l2;
  return o && 1 === o.length && "string" == typeof o[0] ? n2 = o[0] : o && (l2 = [], r(e2, o, l2), 0 === l2.length && (l2 = void 0)), { vnodeSelector: e2, properties: t2, children: l2, text: "" === n2 ? void 0 : n2, domNode: null };
}
const l = { bottom: "esri-text-overlay-item-anchor-bottom", "bottom-right": "esri-text-overlay-item-anchor-bottom-right", "bottom-left": "esri-text-overlay-item-anchor-bottom-left", top: "esri-text-overlay-item-anchor-top", "top-right": "esri-text-overlay-item-anchor-top-right", "top-left": "esri-text-overlay-item-anchor-top-left", center: "esri-text-overlay-item-anchor-center", right: "esri-text-overlay-item-anchor-right", left: "esri-text-overlay-item-anchor-left" };
let n = class extends g$1 {
  get position() {
    return [this.x, this.y];
  }
  set position(t2) {
    this._set("x", t2[0]), this._set("y", t2[1]);
  }
  get _textShadowColor() {
    const { textColor: t2, backgroundColor: e2 } = this, o = e2.clone();
    return o.a *= t2.a, o;
  }
  get _textShadow() {
    const t2 = this._textShadowColor.toCss(true);
    return `0 0 ${this._textShadowSize}px ${t2}`;
  }
  get _padding() {
    return 0.5 * this.fontSize;
  }
  get _borderRadius() {
    return this._padding;
  }
  constructor(t2) {
    super(t2), this.x = 0, this.y = 0, this.text = "-", this.fontSize = 14, this.anchor = "center", this.visible = true, this.isDecoration = true, this.backgroundColor = new u([0, 0, 0, 0.6]), this.textColor = new u([255, 255, 255]), this._textShadowSize = 1;
  }
  render() {
    return t("div", { classes: this._cssClasses(), styles: { left: Math.floor(this.x) + "px", top: Math.floor(this.y) + "px", visibility: this.visible ? "visible" : "hidden", fontSize: this.fontSize + "px", lineHeight: this.fontSize + "px", backgroundColor: this.backgroundColor.toCss(true), color: this.textColor.toCss(true), padding: this._padding + "px", borderRadius: this._borderRadius + "px", textShadow: this._textShadow } }, [this.text]);
  }
  renderCanvas(t2) {
    if (!this.visible)
      return;
    const e2 = t2.font.replace(/^(.*?)px/, "");
    t2.font = `${this.fontSize}px ${e2}`;
    const o = this._padding, i = this._borderRadius, r2 = t2.measureText(this.text).width, s = this.fontSize, l2 = h[this.anchor];
    t2.textAlign = "center", t2.textBaseline = "middle";
    const n2 = r2 + 2 * o, a2 = s + 2 * o, x2 = this.x + l2.x * n2, p = this.y + l2.y * a2;
    this._roundedRect(t2, x2, p, n2, a2, i), t2.fillStyle = this.backgroundColor.toCss(true), t2.fill();
    const c2 = this.x + (l2.x + 0.5) * n2, d = this.y + (l2.y + 0.5) * a2;
    this._renderTextShadow(t2, this.text, c2, d), t2.fillStyle = this.textColor.toCss(true), t2.fillText(this.text, c2, d);
  }
  _renderTextShadow(t2, e2, o, i) {
    t2.lineJoin = "miter", t2.fillStyle = `rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1 / a.length})`;
    const r2 = this._textShadowSize;
    for (const [s, l2] of a)
      t2.fillText(e2, o + r2 * s, i + r2 * l2);
  }
  _roundedRect(t2, e2, o, i, r2, s) {
    t2.beginPath(), t2.moveTo(e2, o + s), t2.arcTo(e2, o, e2 + s, o, s), t2.lineTo(e2 + i - s, o), t2.arcTo(e2 + i, o, e2 + i, o + s, s), t2.lineTo(e2 + i, o + r2 - s), t2.arcTo(e2 + i, o + r2, e2 + i - s, o + r2, s), t2.lineTo(e2 + s, o + r2), t2.arcTo(e2, o + r2, e2, o + r2 - s, s), t2.closePath();
  }
  _cssClasses() {
    const t2 = { "esri-text-overlay-item": true };
    let e2;
    for (e2 in l)
      t2[l[e2]] = this.anchor === e2;
    return t2;
  }
};
e$1([y()], n.prototype, "x", void 0), e$1([y()], n.prototype, "y", void 0), e$1([y()], n.prototype, "position", null), e$1([y()], n.prototype, "text", void 0), e$1([y()], n.prototype, "fontSize", void 0), e$1([y()], n.prototype, "anchor", void 0), e$1([y()], n.prototype, "visible", void 0), e$1([y()], n.prototype, "isDecoration", void 0), e$1([y()], n.prototype, "backgroundColor", void 0), e$1([y()], n.prototype, "textColor", void 0), e$1([y()], n.prototype, "_textShadowSize", void 0), e$1([y()], n.prototype, "_textShadowColor", null), e$1([y()], n.prototype, "_textShadow", null), e$1([y()], n.prototype, "_padding", null), e$1([y()], n.prototype, "_borderRadius", null), n = e$1([c("esri.views.overlay.TextOverlayItem")], n);
const h = { bottom: { x: -0.5, y: -1, textAlign: "center", textBaseline: "bottom" }, "bottom-left": { x: 0, y: -1, textAlign: "left", textBaseline: "bottom" }, "bottom-right": { x: -1, y: -1, textAlign: "right", textBaseline: "bottom" }, center: { x: -0.5, y: -0.5, textAlign: "center", textBaseline: "middle" }, left: { x: 0, y: -0.5, textAlign: "left", textBaseline: "middle" }, right: { x: -1, y: -0.5, textAlign: "right", textBaseline: "middle" }, top: { x: -0.5, y: 0, textAlign: "center", textBaseline: "top" }, "top-left": { x: 0, y: 0, textAlign: "left", textBaseline: "top" }, "top-right": { x: -1, y: 0, textAlign: "right", textBaseline: "top" } }, a = [];
{
  const t2 = 16;
  for (let e2 = 0; e2 < 360; e2 += 360 / t2)
    a.push([Math.cos(Math.PI * e2 / 180), Math.sin(Math.PI * e2 / 180)]);
}
const x = n;
export {
  t,
  x
};
