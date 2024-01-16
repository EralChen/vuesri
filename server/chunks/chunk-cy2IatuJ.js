import { am as ii, a3 as Zt, a6 as H, v, b as Y, a as z, Q as Qe, aj as zt, W as We, aD as gt, x as l$2, $ as $t } from "./chunk-55vU5FGs.js";
import { n, o as o$1 } from "./chunk-Z7zZ89ZF.js";
import { u } from "./chunk-ZSioWg-m.js";
import { s } from "./chunk-tGe-gOT_.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class s2 extends ii {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("InterfaceColors").setAll({ stroke: Zt.fromHex(0), fill: Zt.fromHex(2829099), primaryButton: Zt.lighten(Zt.fromHex(6788316), -0.2), primaryButtonHover: Zt.lighten(Zt.fromHex(6779356), -0.2), primaryButtonDown: Zt.lighten(Zt.fromHex(6872181), -0.2), primaryButtonActive: Zt.lighten(Zt.fromHex(6872182), -0.2), primaryButtonText: Zt.fromHex(16777215), primaryButtonStroke: Zt.lighten(Zt.fromHex(6788316), -0.2), secondaryButton: Zt.fromHex(3881787), secondaryButtonHover: Zt.lighten(Zt.fromHex(3881787), 0.1), secondaryButtonDown: Zt.lighten(Zt.fromHex(3881787), 0.15), secondaryButtonActive: Zt.lighten(Zt.fromHex(3881787), 0.2), secondaryButtonText: Zt.fromHex(12303291), secondaryButtonStroke: Zt.lighten(Zt.fromHex(3881787), -0.2), grid: Zt.fromHex(12303291), background: Zt.fromHex(0), alternativeBackground: Zt.fromHex(16777215), text: Zt.fromHex(16777215), alternativeText: Zt.fromHex(0), disabled: Zt.fromHex(11382189), positive: Zt.fromHex(5288704), negative: Zt.fromHex(11730944) });
  }
}
const l$1 = s2;
class o extends ii {
  constructor() {
    super(...arguments), Object.defineProperty(this, "responsiveRules", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  static widthXXS(e, t) {
    return e <= o.XXS;
  }
  static widthXS(e, t) {
    return e <= o.XS;
  }
  static widthS(e, t) {
    return e <= o.S;
  }
  static widthM(e, t) {
    return e <= o.M;
  }
  static widthL(e, t) {
    return e <= o.L;
  }
  static widthXL(e, t) {
    return e <= o.XL;
  }
  static widthXXL(e, t) {
    return e <= o.XXL;
  }
  static heightXXS(e, t) {
    return t <= o.XXS;
  }
  static heightXS(e, t) {
    return t <= o.XS;
  }
  static heightS(e, t) {
    return t <= o.S;
  }
  static heightM(e, t) {
    return t <= o.M;
  }
  static heightL(e, t) {
    return t <= o.L;
  }
  static heightXL(e, t) {
    return t <= o.XL;
  }
  static heightXXL(e, t) {
    return t <= o.XXL;
  }
  static isXXS(e, t) {
    return e <= o.XXS && t <= o.XXS;
  }
  static isXS(e, t) {
    return e <= o.XS && t <= o.XS;
  }
  static isS(e, t) {
    return e <= o.S && t <= o.S;
  }
  static isM(e, t) {
    return e <= o.M && t <= o.M;
  }
  static isL(e, t) {
    return e <= o.L && t <= o.L;
  }
  static isXL(e, t) {
    return e <= o.XL && t <= o.XL;
  }
  static isXXL(e, t) {
    return e <= o.XXL && t <= o.XXL;
  }
  static maybeXXS(e, t) {
    return e <= o.XXS || t <= o.XXS;
  }
  static maybeXS(e, t) {
    return e <= o.XS || t <= o.XS;
  }
  static maybeS(e, t) {
    return e <= o.S || t <= o.S;
  }
  static maybeM(e, t) {
    return e <= o.M || t <= o.M;
  }
  static maybeL(e, t) {
    return e <= o.L || t <= o.L;
  }
  static maybeXL(e, t) {
    return e <= o.XL || t <= o.XL;
  }
  static maybeXXL(e, t) {
    return e <= o.XXL || t <= o.XXL;
  }
  static newEmpty(e) {
    return new this(e, true);
  }
  addRule(e) {
    return e.name && !e.template && (e.template = this.rule(e.name, e.tags)), e._dp = new H([this._root._rootContainer.onPrivate("width", (t) => {
      this._isUsed() && this._applyRule(e);
    }), this._root._rootContainer.onPrivate("height", (t) => {
      this._isUsed() && this._applyRule(e);
    })]), this.responsiveRules.push(e), this._applyRule(e), e;
  }
  removeRule(e) {
    v(this.responsiveRules, e), e._dp && e._dp.dispose();
  }
  _isUsed() {
    return -1 !== this._root._rootContainer.get("themes").indexOf(this);
  }
  _applyRule(e) {
    const t = this._root._rootContainer.getPrivate("width"), i = this._root._rootContainer.getPrivate("height"), a = e.relevant.call(e, t, i), n2 = e.applied;
    a ? n2 || (e.applied = true, e.template && e.settings && e.template.setAll(e.settings), e.applying && e.applying.call(e)) : n2 && (e.applied = false, e.template && e.template.removeAll(), e.removing && e.removing.call(e));
  }
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = (e2) => this.addRule(e2);
    e({ name: "Chart", relevant: o.widthXXS, settings: { paddingLeft: 0, paddingRight: 0 } }), e({ name: "Chart", relevant: o.heightXXS, settings: { paddingTop: 0, paddingBottom: 0 } }), e({ name: "Bullet", relevant: o.isXS, settings: { forceHidden: true } }), e({ name: "Legend", relevant: o.isXS, settings: { forceHidden: true } }), e({ name: "HeatLegend", tags: ["vertical"], relevant: o.widthXS, settings: { forceHidden: true } }), e({ name: "HeatLegend", tags: ["horizontal"], relevant: o.heightXS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["heatlegend", "start"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["heatlegend", "end"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Button", tags: ["resize"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "AxisRendererX", relevant: o.heightXS, settings: { inside: true } }), e({ name: "AxisRendererY", relevant: o.widthXS, settings: { inside: true } }), e({ name: "AxisRendererXLabel", relevant: o.heightXS, settings: { minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "AxisLabel", tags: ["y"], relevant: o.widthXS, settings: { centerY: Y, maxPosition: 0.9 } }), e({ name: "AxisLabel", tags: ["x"], relevant: o.heightXXS, settings: { forceHidden: true } }), e({ name: "AxisLabel", tags: ["y"], relevant: o.widthXXS, settings: { forceHidden: true } }), e({ name: "AxisTick", tags: ["x"], relevant: o.heightXS, settings: { inside: true, minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "AxisTick", tags: ["y"], relevant: o.widthXXS, settings: { inside: true, minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "Grid", relevant: o.maybeXXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["radial"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["circular"], relevant: o.maybeS, settings: { inside: true } }), e({ name: "AxisTick", relevant: o.maybeS, settings: { inside: true } }), e({ name: "RadialLabel", tags: ["circular"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "AxisTick", tags: ["circular"], relevant: o.maybeXS, settings: { inside: true } }), e({ name: "PieChart", relevant: o.maybeXS, settings: { radius: z(99) } }), e({ name: "PieChart", relevant: o.widthM, settings: { radius: z(99) } }), e({ name: "RadialLabel", tags: ["pie"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["pie"], relevant: o.widthM, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pie"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pie"], relevant: o.widthM, settings: { forceHidden: true } }), e({ name: "FunnelSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["funnel", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["funnel", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["funnel", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["funnel", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "PyramidSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["pyramid", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pyramid", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["pyramid", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pyramid", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "PictorialStackedSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["pictorial", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pictorial", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["pictorial", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pictorial", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["flow", "horizontal"], relevant: o.widthS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["flow", "vertical"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Chord", relevant: o.maybeXS, settings: { radius: z(99) } }), e({ name: "Label", tags: ["hierarchy", "node"], relevant: o.maybeXS, settings: { forceHidden: true } });
  }
}
Object.defineProperty(o, "XXS", { enumerable: true, configurable: true, writable: true, value: 100 }), Object.defineProperty(o, "XS", { enumerable: true, configurable: true, writable: true, value: 200 }), Object.defineProperty(o, "S", { enumerable: true, configurable: true, writable: true, value: 300 }), Object.defineProperty(o, "M", { enumerable: true, configurable: true, writable: true, value: 400 }), Object.defineProperty(o, "L", { enumerable: true, configurable: true, writable: true, value: 600 }), Object.defineProperty(o, "XL", { enumerable: true, configurable: true, writable: true, value: 800 }), Object.defineProperty(o, "XXL", { enumerable: true, configurable: true, writable: true, value: 1e3 });
const d = o;
class p extends Qe {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: this._makeThumb() }), Object.defineProperty(this, "startGrip", { enumerable: true, configurable: true, writable: true, value: this._makeButton() }), Object.defineProperty(this, "endGrip", { enumerable: true, configurable: true, writable: true, value: this._makeButton() }), Object.defineProperty(this, "_thumbBusy", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_startDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_endDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_thumbDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_gripDown", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _addOrientationClass() {
    this._settings.themeTags = zt(this._settings.themeTags, ["scrollbar", this._settings.orientation]), this._settings.background || (this._settings.background = n.new(this._root, { themeTags: zt(this._settings.themeTags, ["main", "background"]) }));
  }
  _makeButton() {
    return this.children.push(o$1.new(this._root, { themeTags: ["resize", "button", this.get("orientation")], icon: We.new(this._root, { themeTags: ["icon"] }) }));
  }
  _makeThumb() {
    return this.children.push(n.new(this._root, { themeTags: ["thumb", this.get("orientation")] }));
  }
  _handleAnimation(t) {
    t && this._disposers.push(t.events.on("stopped", () => {
      this.setPrivateRaw("isBusy", false), this._thumbBusy = false;
    }));
  }
  _afterNew() {
    this._addOrientationClass(), super._afterNew();
    const t = this.startGrip, s3 = this.endGrip, e = this.thumb, a = this.get("background");
    a && this._disposers.push(a.events.on("click", (t2) => {
      this.setPrivateRaw("isBusy", true);
      const s4 = this._display.toLocal(t2.point), i = this.width(), a2 = this.height(), h = this.get("orientation");
      let r, n2, o2;
      r = "vertical" == h ? (s4.y - e.height() / 2) / a2 : (s4.x - e.width() / 2) / i, "vertical" == h ? (n2 = r * a2, o2 = "y") : (n2 = r * i, o2 = "x");
      const u2 = this.get("animationDuration", 0);
      u2 > 0 ? (this._thumbBusy = true, this._handleAnimation(this.thumb.animate({ key: o2, to: n2, duration: u2, easing: this.get("animationEasing") }))) : (this.thumb.set(o2, n2), this._root.events.once("frameended", () => {
        this.setPrivateRaw("isBusy", false);
      }));
    })), this._disposers.push(e.events.on("dblclick", (t2) => {
      if (!gt(t2.originalEvent, this))
        return;
      const s4 = this.get("animationDuration", 0), e2 = this.get("animationEasing");
      this.animate({ key: "start", to: 0, duration: s4, easing: e2 }), this.animate({ key: "end", to: 1, duration: s4, easing: e2 });
    })), this._disposers.push(t.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._startDown = true, this._gripDown = "start";
    })), this._disposers.push(s3.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._endDown = true, this._gripDown = "end";
    })), this._disposers.push(e.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._thumbDown = true, this._gripDown = void 0;
    })), this._disposers.push(t.events.on("globalpointerup", () => {
      this._startDown && this.setPrivateRaw("isBusy", false), this._startDown = false;
    })), this._disposers.push(s3.events.on("globalpointerup", () => {
      this._endDown && this.setPrivateRaw("isBusy", false), this._endDown = false;
    })), this._disposers.push(e.events.on("globalpointerup", () => {
      this._thumbDown && this.setPrivateRaw("isBusy", false), this._thumbDown = false;
    })), this._disposers.push(t.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(s3.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(t.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(s3.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(e.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    })), "vertical" == this.get("orientation") ? (t.set("x", 0), s3.set("x", 0), this._disposers.push(e.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height() - e.height()), 0))), this._disposers.push(e.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(s3.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0))), this._disposers.push(s3.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0)))) : (t.set("y", 0), s3.set("y", 0), this._disposers.push(e.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width() - e.width()), 0))), this._disposers.push(e.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(s3.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))), this._disposers.push(s3.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))));
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("end") || this.isDirty("start") || this._sizeDirty) && this.updateGrips();
  }
  _changed() {
    if (super._changed(), this.isDirty("start") || this.isDirty("end")) {
      const t = "rangechanged";
      this.events.isEnabled(t) && this.events.dispatch(t, { type: t, target: this, start: this.get("start", 0), end: this.get("end", 1), grip: this._gripDown });
    }
  }
  updateGrips() {
    const t = this.startGrip, s3 = this.endGrip, e = this.get("orientation"), i = this.height(), a = this.width();
    "vertical" == e ? (t.set("y", i * this.get("start", 0)), s3.set("y", i * this.get("end", 1))) : (t.set("x", a * this.get("start", 0)), s3.set("x", a * this.get("end", 1)));
    const h = this.getPrivate("positionTextFunction"), r = Math.round(100 * this.get("start", 0)), n2 = Math.round(100 * this.get("end", 0));
    let o2, u2;
    h ? (o2 = h.call(this, this.get("start", 0)), u2 = h.call(this, this.get("end", 0))) : (o2 = r + "%", u2 = n2 + "%"), t.set("ariaLabel", this._t("From %1", void 0, o2)), t.set("ariaValueNow", "" + r), t.set("ariaValueText", r + "%"), t.set("ariaValueMin", "0"), t.set("ariaValueMax", "100"), s3.set("ariaLabel", this._t("To %1", void 0, u2)), s3.set("ariaValueNow", "" + n2), s3.set("ariaValueText", n2 + "%"), s3.set("ariaValueMin", "0"), s3.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const t = this.thumb, s3 = this.startGrip, e = this.endGrip, i = this.height(), h = this.width();
    let r = s3.x(), n2 = e.x(), o2 = s3.y(), u2 = e.y(), d2 = 0, p2 = 1;
    "vertical" == this.get("orientation") ? l$2(o2) && l$2(u2) && (this._thumbBusy || t.isDragging() || (t.set("height", u2 - o2), t.set("y", o2)), d2 = o2 / i, p2 = u2 / i) : l$2(r) && l$2(n2) && (this._thumbBusy || t.isDragging() || (t.set("width", n2 - r), t.set("x", r)), d2 = r / h, p2 = n2 / h), !this.getPrivate("isBusy") || this.get("start") == d2 && this.get("end") == p2 || (this.set("start", d2), this.set("end", p2));
    const l2 = this.getPrivate("positionTextFunction"), m2 = Math.round(100 * this.get("start", 0)), g = Math.round(100 * this.get("end", 0));
    let b, c;
    l2 ? (b = l2.call(this, this.get("start", 0)), c = l2.call(this, this.get("end", 0))) : (b = m2 + "%", c = g + "%"), t.set("ariaLabel", this._t("From %1 to %2", void 0, b, c)), t.set("ariaValueNow", "" + m2), t.set("ariaValueText", m2 + "%");
  }
  _updateGripsByThumb() {
    const t = this.thumb, s3 = this.startGrip, e = this.endGrip;
    if ("vertical" == this.get("orientation")) {
      const i = t.height();
      s3.set("y", t.y()), e.set("y", t.y() + i);
    } else {
      const i = t.width();
      s3.set("x", t.x()), e.set("x", t.x() + i);
    }
  }
}
Object.defineProperty(p, "className", { enumerable: true, configurable: true, writable: true, value: "Scrollbar" }), Object.defineProperty(p, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([p.className]) });
const l = class extends ii {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("Component").setAll({ interpolationDuration: 600 }), this.rule("Hierarchy").set("animationDuration", 600), this.rule("Scrollbar").set("animationDuration", 600), this.rule("Tooltip").set("animationDuration", 300), this.rule("MapChart").set("animationDuration", 1e3), this.rule("MapChart").set("wheelDuration", 300), this.rule("Entity").setAll({ stateAnimationDuration: 600 }), this.rule("Sprite").states.create("default", { stateAnimationDuration: 600 }), this.rule("Tooltip", ["axis"]).setAll({ animationDuration: 200 }), this.rule("WordCloud").set("animationDuration", 500), this.rule("Polygon").set("animationDuration", 600), this.rule("ArcDiagram").set("animationDuration", 600);
  }
}, m = ["#2888B8", "#EB7028", "#48A375", "#9370B1", "#e55035", "#3d9ccc", "#DC7B04", "#b87bb0", "#3fa681", "#EE6386"].map((t) => $t(t));
export {
  l as AnimatedThemeAm5,
  s as ColorSetAm5,
  l$1 as DarkThemeAm5,
  d as ResponsiveThemeAm5,
  p as ScrollbarAm5,
  ii as ThemeAm5,
  u as TooltipAm5,
  $t as colorAm5,
  m as esriChartColorSet
};
