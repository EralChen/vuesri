import { an as ai, a3 as zt, a6 as Y, h as x, w, r, a as i, i as ii, ak as Ft, b as Ke, aE as ht, C as g, K as Kt } from "./chunk-qsKdKwKn.js";
import { n, o as o$1 } from "./chunk-I_vLu23T.js";
import { u } from "./chunk-AilW7bRa.js";
import { s } from "./chunk-HJdTyZR6.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class l extends ai {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("InterfaceColors").setAll({ stroke: zt.fromHex(0), fill: zt.fromHex(2829099), primaryButton: zt.lighten(zt.fromHex(6788316), -0.2), primaryButtonHover: zt.lighten(zt.fromHex(6779356), -0.2), primaryButtonDown: zt.lighten(zt.fromHex(6872181), -0.2), primaryButtonActive: zt.lighten(zt.fromHex(6872182), -0.2), primaryButtonText: zt.fromHex(16777215), primaryButtonStroke: zt.lighten(zt.fromHex(6788316), -0.2), secondaryButton: zt.fromHex(3881787), secondaryButtonHover: zt.lighten(zt.fromHex(3881787), 0.1), secondaryButtonDown: zt.lighten(zt.fromHex(3881787), 0.15), secondaryButtonActive: zt.lighten(zt.fromHex(3881787), 0.2), secondaryButtonText: zt.fromHex(12303291), secondaryButtonStroke: zt.lighten(zt.fromHex(3881787), -0.2), grid: zt.fromHex(12303291), background: zt.fromHex(0), alternativeBackground: zt.fromHex(16777215), text: zt.fromHex(16777215), alternativeText: zt.fromHex(0), disabled: zt.fromHex(11382189), positive: zt.fromHex(5288704), negative: zt.fromHex(11730944) });
  }
}
class o extends ai {
  constructor(e, t) {
    super(e, t), Object.defineProperty(this, "_dp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "responsiveRules", { enumerable: true, configurable: true, writable: true, value: [] }), this._dp = new Y([this._root._rootContainer.onPrivate("width", (e2) => {
      this._isUsed() && this._maybeApplyRules();
    }), this._root._rootContainer.onPrivate("height", (e2) => {
      this._isUsed() && this._maybeApplyRules();
    })]);
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
    return e.name && !e.template && (e.template = this.rule(e.name, e.tags)), this.responsiveRules.push(e), this._maybeApplyRule(e), e;
  }
  removeRule(e) {
    x(this.responsiveRules, e);
  }
  dispose() {
    this._dp && this._dp.dispose();
  }
  _isUsed() {
    return -1 !== this._root._rootContainer.get("themes").indexOf(this);
  }
  _maybeApplyRules() {
    w(this.responsiveRules, (e) => {
      this._maybeUnapplyRule(e);
    }), w(this.responsiveRules, (e) => {
      this._maybeApplyRule(e);
    });
  }
  _maybeApplyRule(e) {
    if (e.applied)
      return;
    const t = this._root._rootContainer.getPrivate("width"), i2 = this._root._rootContainer.getPrivate("height");
    e.relevant.call(e, t, i2) && (e.applied = true, e.template && e.settings && e.template.setAll(e.settings), e.applying && e.applying.call(e));
  }
  _maybeUnapplyRule(e) {
    if (!e.applied)
      return;
    const t = this._root._rootContainer.getPrivate("width"), i2 = this._root._rootContainer.getPrivate("height");
    e.relevant.call(e, t, i2) || (e.applied = false, e.template && e.template.removeAll(), e.removing && e.removing.call(e));
  }
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = (e2) => this.addRule(e2);
    e({ name: "Chart", relevant: o.widthXXS, settings: { paddingLeft: 0, paddingRight: 0 } }), e({ name: "Chart", relevant: o.heightXXS, settings: { paddingTop: 0, paddingBottom: 0 } }), e({ name: "Bullet", relevant: o.isXS, settings: { forceHidden: true } }), e({ name: "Legend", relevant: o.isXS, settings: { forceHidden: true } }), e({ name: "HeatLegend", tags: ["vertical"], relevant: o.widthXS, settings: { forceHidden: true } }), e({ name: "HeatLegend", tags: ["horizontal"], relevant: o.heightXS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["heatlegend", "start"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["heatlegend", "end"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Button", tags: ["resize"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "AxisRendererX", relevant: o.heightXS, settings: { inside: true } }), e({ name: "AxisRendererY", relevant: o.widthXS, settings: { inside: true } }), e({ name: "AxisRendererXLabel", relevant: o.heightXS, settings: { minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "AxisLabel", tags: ["y"], relevant: o.widthXS, settings: { centerY: r, maxPosition: 0.9 } }), e({ name: "AxisLabel", tags: ["x"], relevant: o.heightXXS, settings: { forceHidden: true } }), e({ name: "AxisLabel", tags: ["x", "minor"], relevant: o.widthXXL, settings: { forceHidden: true } }), e({ name: "AxisLabel", tags: ["y"], relevant: o.widthXXS, settings: { forceHidden: true } }), e({ name: "AxisLabel", tags: ["y", "minor"], relevant: o.heightXXL, settings: { forceHidden: true } }), e({ name: "AxisTick", tags: ["x"], relevant: o.heightXS, settings: { inside: true, minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "AxisTick", tags: ["y"], relevant: o.widthXXS, settings: { inside: true, minPosition: 0.1, maxPosition: 0.9 } }), e({ name: "Grid", relevant: o.maybeXXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["radial"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["circular"], relevant: o.maybeS, settings: { inside: true } }), e({ name: "AxisTick", relevant: o.maybeS, settings: { inside: true } }), e({ name: "RadialLabel", tags: ["circular"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "AxisTick", tags: ["circular"], relevant: o.maybeXS, settings: { inside: true } }), e({ name: "PieChart", relevant: o.maybeXS, settings: { radius: i(99) } }), e({ name: "PieChart", relevant: o.widthM, settings: { radius: i(99) } }), e({ name: "RadialLabel", tags: ["pie"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "RadialLabel", tags: ["pie"], relevant: o.widthM, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pie"], relevant: o.maybeXS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pie"], relevant: o.widthM, settings: { forceHidden: true } }), e({ name: "FunnelSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["funnel", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["funnel", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["funnel", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["funnel", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "PyramidSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["pyramid", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pyramid", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["pyramid", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pyramid", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "PictorialStackedSeries", relevant: o.widthM, settings: { alignLabels: false } }), e({ name: "Label", tags: ["pictorial", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pictorial", "vertical"], relevant: o.widthL, settings: { forceHidden: true } }), e({ name: "Label", tags: ["pictorial", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Tick", tags: ["pictorial", "horizontal"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["flow", "horizontal"], relevant: o.widthS, settings: { forceHidden: true } }), e({ name: "Label", tags: ["flow", "vertical"], relevant: o.heightS, settings: { forceHidden: true } }), e({ name: "Chord", relevant: o.maybeXS, settings: { radius: i(99) } }), e({ name: "Label", tags: ["hierarchy", "node"], relevant: o.maybeXS, settings: { forceHidden: true } });
  }
}
Object.defineProperty(o, "XXS", { enumerable: true, configurable: true, writable: true, value: 100 }), Object.defineProperty(o, "XS", { enumerable: true, configurable: true, writable: true, value: 200 }), Object.defineProperty(o, "S", { enumerable: true, configurable: true, writable: true, value: 300 }), Object.defineProperty(o, "M", { enumerable: true, configurable: true, writable: true, value: 400 }), Object.defineProperty(o, "L", { enumerable: true, configurable: true, writable: true, value: 600 }), Object.defineProperty(o, "XL", { enumerable: true, configurable: true, writable: true, value: 800 }), Object.defineProperty(o, "XXL", { enumerable: true, configurable: true, writable: true, value: 1e3 });
class u2 extends ii {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: this._makeThumb() }), Object.defineProperty(this, "startGrip", { enumerable: true, configurable: true, writable: true, value: this._makeButton() }), Object.defineProperty(this, "endGrip", { enumerable: true, configurable: true, writable: true, value: this._makeButton() }), Object.defineProperty(this, "_thumbBusy", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_startDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_endDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_thumbDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_gripDown", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _addOrientationClass() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["scrollbar", this._settings.orientation]), this._settings.background || (this._settings.background = n.new(this._root, { themeTags: Ft(this._settings.themeTags, ["main", "background"]) }));
  }
  _makeButton() {
    return this.children.push(o$1.new(this._root, { themeTags: ["resize", "button", this.get("orientation")], icon: Ke.new(this._root, { themeTags: ["icon"] }) }));
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
    const t = this.startGrip, s2 = this.endGrip, e = this.thumb, a = this.get("background");
    a && this._disposers.push(a.events.on("click", (t2) => {
      this.setPrivateRaw("isBusy", true);
      const s3 = this._display.toLocal(t2.point), i2 = this.width(), a2 = this.height(), h = this.get("orientation");
      let r2, n2, o2;
      r2 = "vertical" == h ? (s3.y - e.height() / 2) / a2 : (s3.x - e.width() / 2) / i2, "vertical" == h ? (n2 = r2 * a2, o2 = "y") : (n2 = r2 * i2, o2 = "x");
      const u3 = this.get("animationDuration", 0);
      u3 > 0 ? (this._thumbBusy = true, this._handleAnimation(this.thumb.animate({ key: o2, to: n2, duration: u3, easing: this.get("animationEasing") }))) : (this.thumb.set(o2, n2), this._root.events.once("frameended", () => {
        this.setPrivateRaw("isBusy", false);
      }));
    })), this._disposers.push(e.events.on("dblclick", (t2) => {
      if (!ht(t2.originalEvent, this))
        return;
      const s3 = this.get("animationDuration", 0), e2 = this.get("animationEasing");
      this.animate({ key: "start", to: 0, duration: s3, easing: e2 }), this.animate({ key: "end", to: 1, duration: s3, easing: e2 });
    })), this._disposers.push(t.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._startDown = true, this._gripDown = "start";
    })), this._disposers.push(s2.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._endDown = true, this._gripDown = "end";
    })), this._disposers.push(e.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._thumbDown = true, this._gripDown = void 0;
    })), this._disposers.push(t.events.on("globalpointerup", () => {
      this._startDown && this.setPrivateRaw("isBusy", false), this._startDown = false;
    })), this._disposers.push(s2.events.on("globalpointerup", () => {
      this._endDown && this.setPrivateRaw("isBusy", false), this._endDown = false;
    })), this._disposers.push(e.events.on("globalpointerup", () => {
      this._thumbDown && this.setPrivateRaw("isBusy", false), this._thumbDown = false;
    })), this._disposers.push(t.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(s2.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(t.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(s2.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(e.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    })), "vertical" == this.get("orientation") ? (t.set("x", 0), s2.set("x", 0), this._disposers.push(e.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height() - e.height()), 0))), this._disposers.push(e.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(s2.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0))), this._disposers.push(s2.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0)))) : (t.set("y", 0), s2.set("y", 0), this._disposers.push(e.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width() - e.width()), 0))), this._disposers.push(e.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(s2.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))), this._disposers.push(s2.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))));
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
    const t = this.startGrip, s2 = this.endGrip, e = this.get("orientation"), i2 = this.height(), a = this.width();
    "vertical" == e ? (t.set("y", i2 * this.get("start", 0)), s2.set("y", i2 * this.get("end", 1))) : (t.set("x", a * this.get("start", 0)), s2.set("x", a * this.get("end", 1)));
    const h = this.getPrivate("positionTextFunction"), r2 = Math.round(100 * this.get("start", 0)), n2 = Math.round(100 * this.get("end", 0));
    let o2, u3;
    h ? (o2 = h.call(this, this.get("start", 0)), u3 = h.call(this, this.get("end", 0))) : (o2 = r2 + "%", u3 = n2 + "%"), t.set("ariaLabel", this._t("From %1", void 0, o2)), t.set("ariaValueNow", "" + r2), t.set("ariaValueText", r2 + "%"), t.set("ariaValueMin", "0"), t.set("ariaValueMax", "100"), s2.set("ariaLabel", this._t("To %1", void 0, u3)), s2.set("ariaValueNow", "" + n2), s2.set("ariaValueText", n2 + "%"), s2.set("ariaValueMin", "0"), s2.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const t = this.thumb, s2 = this.startGrip, e = this.endGrip, i2 = this.height(), h = this.width();
    let r2 = s2.x(), n2 = e.x(), o2 = s2.y(), u3 = e.y(), d2 = 0, p2 = 1;
    "vertical" == this.get("orientation") ? g(o2) && g(u3) && (this._thumbBusy || t.isDragging() || (t.set("height", u3 - o2), t.set("y", o2)), d2 = o2 / i2, p2 = u3 / i2) : g(r2) && g(n2) && (this._thumbBusy || t.isDragging() || (t.set("width", n2 - r2), t.set("x", r2)), d2 = r2 / h, p2 = n2 / h), !this.getPrivate("isBusy") || this.get("start") == d2 && this.get("end") == p2 || (this.set("start", d2), this.set("end", p2));
    const l2 = this.getPrivate("positionTextFunction"), m = Math.round(100 * this.get("start", 0)), g$1 = Math.round(100 * this.get("end", 0));
    let b, c;
    l2 ? (b = l2.call(this, this.get("start", 0)), c = l2.call(this, this.get("end", 0))) : (b = m + "%", c = g$1 + "%"), t.set("ariaLabel", this._t("From %1 to %2", void 0, b, c)), t.set("ariaValueNow", "" + m), t.set("ariaValueText", m + "%");
  }
  _updateGripsByThumb() {
    const t = this.thumb, s2 = this.startGrip, e = this.endGrip;
    if ("vertical" == this.get("orientation")) {
      const i2 = t.height();
      s2.set("y", t.y()), e.set("y", t.y() + i2);
    } else {
      const i2 = t.width();
      s2.set("x", t.x()), e.set("x", t.x() + i2);
    }
  }
}
Object.defineProperty(u2, "className", { enumerable: true, configurable: true, writable: true, value: "Scrollbar" }), Object.defineProperty(u2, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([u2.className]) });
class d extends ai {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("Component").setAll({ interpolationDuration: 600 }), this.rule("Hierarchy").set("animationDuration", 600), this.rule("Scrollbar").set("animationDuration", 600), this.rule("Tooltip").set("animationDuration", 300), this.rule("MapChart").set("animationDuration", 1e3), this.rule("MapChart").set("wheelDuration", 300), this.rule("Entity").setAll({ stateAnimationDuration: 600 }), this.rule("Sprite").states.create("default", { stateAnimationDuration: 600 }), this.rule("Tooltip", ["axis"]).setAll({ animationDuration: 200 }), this.rule("WordCloud").set("animationDuration", 500), this.rule("Polygon").set("animationDuration", 600), this.rule("ArcDiagram").set("animationDuration", 600);
  }
}
const p = ["#2888B8", "#EB7028", "#48A375", "#9370B1", "#e55035", "#3d9ccc", "#DC7B04", "#b87bb0", "#3fa681", "#EE6386"].map((t) => Kt(t));
export {
  d as AnimatedThemeAm5,
  s as ColorSetAm5,
  l as DarkThemeAm5,
  o as ResponsiveThemeAm5,
  u2 as ScrollbarAm5,
  ai as ThemeAm5,
  u as TooltipAm5,
  Kt as colorAm5,
  p as esriChartColorSet
};
