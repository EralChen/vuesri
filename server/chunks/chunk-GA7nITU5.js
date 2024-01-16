import { ho as t } from "./chunk-KFNcxJaF.js";
import { U as U$1, D, B as B$1, V as V$2, k } from "./chunk-zBoS714k.js";
import { t as ti, ak as ei, W as We, ao as X$1, ag as pe, ac as K$1, ar as ge, aq as bt, as as V$1, at as Be, aj as zt, m, au as de, av as le, aw as re, ad as ue, Q as Qe, ax as Fe, b as Y$1, x as l, am as ii, a as z$1 } from "./chunk-55vU5FGs.js";
import { s } from "./chunk-tGe-gOT_.js";
import { l as l$1 } from "./chunk-YavKHluu.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class N extends ti {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeRadialText("", this.textStyle) });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged(), this._display.clear(), this.isDirty("textType") && (this._display.textType = this.get("textType"), this.markDirtyBounds()), this.isDirty("radius") && (this._display.radius = this.get("radius"), this.markDirtyBounds()), this.isDirty("startAngle") && (this._display.startAngle = (this.get("startAngle", 0) + 90) * re, this.markDirtyBounds()), this.isDirty("inside") && (this._display.inside = this.get("inside"), this.markDirtyBounds()), this.isDirty("orientation") && (this._display.orientation = this.get("orientation"), this.markDirtyBounds()), this.isDirty("kerning") && (this._display.kerning = this.get("kerning"), this.markDirtyBounds());
  }
}
Object.defineProperty(N, "className", { enumerable: true, configurable: true, writable: true, value: "RadialText" }), Object.defineProperty(N, "classNames", { enumerable: true, configurable: true, writable: true, value: ti.classNames.concat([N.className]) });
class C extends ei {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_flipped", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _afterNew() {
    this._textKeys.push("textType", "kerning"), super._afterNew();
  }
  _makeText() {
    this._text = this.children.push(N.new(this._root, {}));
  }
  baseRadius() {
    const e = this.getPrivate("radius", 0), t2 = this.getPrivate("innerRadius", 0), i = this.get("baseRadius", 0);
    return t2 + bt(i, e - t2);
  }
  radius() {
    const e = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (e ? -1 : 1);
  }
  _updateChildren() {
    if (super._updateChildren(), this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const e = this.get("textType", "adjusted"), t2 = this.get("inside", false), i = this.get("orientation");
      let s2 = ue(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0)), this._text.set("inside", t2);
      const a = le(s2), r = de(s2);
      let l2 = this.baseRadius(), n = this.radius();
      if (this._display.angle = 0, "circular" == e)
        this.setAll({ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }), this._text.set("orientation", i), this._text.set("radius", n);
      else {
        0 == l2 && (s2 = 0, n = 0);
        let t3 = n * r, o = n * a;
        "radial" == e ? (this.setRaw("x", t3), this.setRaw("y", o), s2 < 90 || s2 > 270 || "auto" != i ? (this._display.angle = s2, this._flipped = false) : (this._display.angle = s2 + 180, this._flipped = true), this._dirty.rotation = false) : "adjusted" == e ? (this.setRaw("centerX", X$1), this.setRaw("centerY", X$1), this.setRaw("x", t3), this.setRaw("y", o)) : "regular" == e && (this.setRaw("x", t3), this.setRaw("y", o));
      }
      this.markDirtyPosition(), this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const e = this.get("textType", "regular"), t2 = this.get("inside", false);
    let i = 0, s2 = 0, a = this.get("labelAngle", 0), r = this.localBounds(), l2 = r.right - r.left, n = r.bottom - r.top;
    if ("radial" == e) {
      if (this._flipped) {
        let e2 = this.get("centerX");
        e2 instanceof K$1 && (l2 *= 1 - 2 * e2.value), i = l2 * de(a), s2 = l2 * le(a);
      }
    } else
      t2 || "adjusted" != e || (i = l2 / 2 * de(a), s2 = n / 2 * le(a));
    this.setRaw("dx", i), this.setRaw("dy", s2), super._updatePosition();
  }
  get text() {
    return this._text;
  }
}
Object.defineProperty(C, "className", { enumerable: true, configurable: true, writable: true, value: "RadialLabel" }), Object.defineProperty(C, "classNames", { enumerable: true, configurable: true, writable: true, value: ei.classNames.concat([C.className]) });
const j = Math.abs, S = Math.atan2, O = Math.cos, I = Math.max, M = Math.min, B = Math.sin, F = Math.sqrt, X = 1e-12, H = Math.PI, Y = H / 2, V = 2 * H;
function z(e) {
  return e > 1 ? 0 : e < -1 ? H : Math.acos(e);
}
function W(e) {
  return e >= 1 ? Y : e <= -1 ? -Y : Math.asin(e);
}
function U(e) {
  return e.innerRadius;
}
function K(e) {
  return e.outerRadius;
}
function q(e) {
  return e.startAngle;
}
function E(e) {
  return e.endAngle;
}
function J(e) {
  return e && e.padAngle;
}
function G(e, t2, i, s2, a, r, l2, n) {
  var o = i - e, h = s2 - t2, c = l2 - a, u = n - r, d = u * o - c * h;
  if (!(d * d < X))
    return [e + (d = (c * (t2 - r) - u * (e - a)) / d) * o, t2 + d * h];
}
function Q(e, t2, i, s2, a, r, l2) {
  var n = e - i, o = t2 - s2, h = (l2 ? r : -r) / F(n * n + o * o), c = h * o, u = -h * n, d = e + c, g = t2 + u, p = i + c, y = s2 + u, b = (d + p) / 2, m2 = (g + y) / 2, f = p - d, _ = y - g, x = f * f + _ * _, v = a - r, w = d * y - p * g, k2 = (_ < 0 ? -1 : 1) * F(I(0, v * v * x - w * w)), D2 = (w * _ - f * k2) / x, R = (-w * f - _ * k2) / x, A = (w * _ + f * k2) / x, P = (-w * f + _ * k2) / x, T = D2 - b, L = R - m2, N2 = A - b, C2 = P - m2;
  return T * T + L * L > N2 * N2 + C2 * C2 && (D2 = A, R = P), { cx: D2, cy: R, x01: -c, y01: -u, x11: D2 * (a / v - 1), y11: R * (a / v - 1) };
}
function Z() {
  var e = U, s2 = K, a = k(0), r = null, l2 = q, n = E, o = J, h = null, c = V$2(u);
  function u() {
    var t2, i, u2 = +e.apply(this, arguments), d = +s2.apply(this, arguments), g = l2.apply(this, arguments) - Y, p = n.apply(this, arguments) - Y, y = j(p - g), b = p > g;
    if (h || (h = t2 = c()), d < u2 && (i = d, d = u2, u2 = i), d > X)
      if (y > V - X)
        h.moveTo(d * O(g), d * B(g)), h.arc(0, 0, d, g, p, !b), u2 > X && (h.moveTo(u2 * O(p), u2 * B(p)), h.arc(0, 0, u2, p, g, b));
      else {
        var m2, f, _ = g, x = p, v = g, w = p, k2 = y, D2 = y, R = o.apply(this, arguments) / 2, A = R > X && (r ? +r.apply(this, arguments) : F(u2 * u2 + d * d)), P = M(j(d - u2) / 2, +a.apply(this, arguments)), T = P, L = P;
        if (A > X) {
          var N2 = W(A / u2 * B(R)), C2 = W(A / d * B(R));
          (k2 -= 2 * N2) > X ? (v += N2 *= b ? 1 : -1, w -= N2) : (k2 = 0, v = w = (g + p) / 2), (D2 -= 2 * C2) > X ? (_ += C2 *= b ? 1 : -1, x -= C2) : (D2 = 0, _ = x = (g + p) / 2);
        }
        var I2 = d * O(_), U2 = d * B(_), K2 = u2 * O(w), q2 = u2 * B(w);
        if (P > X) {
          var E2, J2 = d * O(x), Z2 = d * B(x), $2 = u2 * O(v), ee2 = u2 * B(v);
          if (y < H)
            if (E2 = G(I2, U2, $2, ee2, J2, Z2, K2, q2)) {
              var te2 = I2 - E2[0], ie2 = U2 - E2[1], se2 = J2 - E2[0], ae2 = Z2 - E2[1], re2 = 1 / B(z((te2 * se2 + ie2 * ae2) / (F(te2 * te2 + ie2 * ie2) * F(se2 * se2 + ae2 * ae2))) / 2), le2 = F(E2[0] * E2[0] + E2[1] * E2[1]);
              T = M(P, (u2 - le2) / (re2 - 1)), L = M(P, (d - le2) / (re2 + 1));
            } else
              T = L = 0;
        }
        D2 > X ? L > X ? (m2 = Q($2, ee2, I2, U2, d, L, b), f = Q(J2, Z2, K2, q2, d, L, b), h.moveTo(m2.cx + m2.x01, m2.cy + m2.y01), L < P ? h.arc(m2.cx, m2.cy, L, S(m2.y01, m2.x01), S(f.y01, f.x01), !b) : (h.arc(m2.cx, m2.cy, L, S(m2.y01, m2.x01), S(m2.y11, m2.x11), !b), h.arc(0, 0, d, S(m2.cy + m2.y11, m2.cx + m2.x11), S(f.cy + f.y11, f.cx + f.x11), !b), h.arc(f.cx, f.cy, L, S(f.y11, f.x11), S(f.y01, f.x01), !b))) : (h.moveTo(I2, U2), h.arc(0, 0, d, _, x, !b)) : h.moveTo(I2, U2), u2 > X && k2 > X ? T > X ? (m2 = Q(K2, q2, J2, Z2, u2, -T, b), f = Q(I2, U2, $2, ee2, u2, -T, b), h.lineTo(m2.cx + m2.x01, m2.cy + m2.y01), T < P ? h.arc(m2.cx, m2.cy, T, S(m2.y01, m2.x01), S(f.y01, f.x01), !b) : (h.arc(m2.cx, m2.cy, T, S(m2.y01, m2.x01), S(m2.y11, m2.x11), !b), h.arc(0, 0, u2, S(m2.cy + m2.y11, m2.cx + m2.x11), S(f.cy + f.y11, f.cx + f.x11), b), h.arc(f.cx, f.cy, T, S(f.y11, f.x11), S(f.y01, f.x01), !b))) : h.arc(0, 0, u2, w, v, b) : h.lineTo(K2, q2);
      }
    else
      h.moveTo(0, 0);
    if (h.closePath(), t2)
      return h = null, t2 + "" || null;
  }
  return u.centroid = function() {
    var t2 = (+e.apply(this, arguments) + +s2.apply(this, arguments)) / 2, i = (+l2.apply(this, arguments) + +n.apply(this, arguments)) / 2 - H / 2;
    return [O(i) * t2, B(i) * t2];
  }, u.innerRadius = function(t2) {
    return arguments.length ? (e = "function" == typeof t2 ? t2 : k(+t2), u) : e;
  }, u.outerRadius = function(e2) {
    return arguments.length ? (s2 = "function" == typeof e2 ? e2 : k(+e2), u) : s2;
  }, u.cornerRadius = function(e2) {
    return arguments.length ? (a = "function" == typeof e2 ? e2 : k(+e2), u) : a;
  }, u.padRadius = function(e2) {
    return arguments.length ? (r = null == e2 ? null : "function" == typeof e2 ? e2 : k(+e2), u) : r;
  }, u.startAngle = function(e2) {
    return arguments.length ? (l2 = "function" == typeof e2 ? e2 : k(+e2), u) : l2;
  }, u.endAngle = function(e2) {
    return arguments.length ? (n = "function" == typeof e2 ? e2 : k(+e2), u) : n;
  }, u.padAngle = function(e2) {
    return arguments.length ? (o = "function" == typeof e2 ? e2 : k(+e2), u) : o;
  }, u.context = function(e2) {
    return arguments.length ? (h = e2 ?? null, u) : h;
  }, u;
}
class $ extends We {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ix", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "iy", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_generator", { enumerable: true, configurable: true, writable: true, value: Z() });
  }
  _getTooltipPoint() {
    let e = this.get("tooltipX"), t2 = this.get("tooltipY"), i = 0, s2 = 0;
    l(e) && (i = e), l(t2) && (s2 = t2);
    let a = this.get("radius", 0), r = this.get("innerRadius", 0);
    return a += this.get("dRadius", 0), r += this.get("dInnerRadius", 0), r < 0 && (r = a + r), e instanceof K$1 && (i = this.ix * (r + (a - r) * e.value)), t2 instanceof K$1 && (s2 = this.iy * (r + (a - r) * t2.value)), this.get("arc") >= 360 && 0 == r && (i = 0, s2 = 0), { x: i, y: s2 };
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      let e = this.get("startAngle", 0), t2 = this.get("arc", 0);
      const i = this._generator;
      t2 < 0 && (e += t2, t2 *= -1), t2 > 0.1 && i.cornerRadius(this.get("cornerRadius", 0)), i.context(this._display);
      let s2 = this.get("radius", 0), a = this.get("innerRadius", 0);
      s2 += this.get("dRadius", 0), a += this.get("dInnerRadius", 0), a < 0 && (a = s2 + a), i({ innerRadius: a, outerRadius: s2, startAngle: (e + 90) * re, endAngle: (e + t2 + 90) * re });
      let r = e + t2 / 2;
      this.ix = de(r), this.iy = le(r);
    }
    if (this.isDirty("shiftRadius")) {
      const e = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * e), this.setRaw("dy", this.iy * e), this.markDirtyPosition();
    }
  }
}
Object.defineProperty($, "className", { enumerable: true, configurable: true, writable: true, value: "Slice" }), Object.defineProperty($, "classNames", { enumerable: true, configurable: true, writable: true, value: We.classNames.concat([$.className]) });
class ee extends ii {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = this._root.interfaceColors, t2 = this.rule.bind(this);
    t2("PercentSeries").setAll({ legendLabelText: "{category}", legendValueText: "{valuePercentTotal.formatNumber('0.00p')}", colors: s.new(this._root, {}), width: Y$1, height: Y$1 }), t2("PieChart").setAll({ radius: z$1(80), startAngle: -90, endAngle: 270 }), t2("PieSeries").setAll({ alignLabels: true, startAngle: -90, endAngle: 270 }), t2("PieSeries").states.create("hidden", { endAngle: -90, opacity: 0 }), t2("Slice", ["pie"]).setAll({ position: "absolute", isMeasured: false, x: 0, y: 0, toggleKey: "active", tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}", strokeWidth: 1, strokeOpacity: 1, role: "figure", lineJoin: "round" }), t2("Slice", ["pie"]).states.create("active", { shiftRadius: 20, scale: 1 }), t2("Slice", ["pie"]).states.create("hoverActive", { scale: 1.04 }), t2("Slice", ["pie"]).states.create("hover", { scale: 1.04 }), t2("RadialLabel", ["pie"]).setAll({ textType: "aligned", radius: 10, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", paddingTop: 5, paddingBottom: 5, populateText: true }), t2("Tick", ["pie"]).setAll({ location: 1 }), t2("SlicedChart").setAll({ paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10 }), t2("FunnelSeries").setAll({ startLocation: 0, endLocation: 1, orientation: "vertical", alignLabels: true, sequencedInterpolation: true }), t2("FunnelSlice").setAll({ interactive: true, expandDistance: 0 }), t2("FunnelSlice").states.create("hover", { expandDistance: 0.15 }), t2("Label", ["funnel"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: X$1 }), t2("Label", ["funnel", "horizontal"]).setAll({ centerX: 0, centerY: X$1, rotation: -90 }), t2("Label", ["funnel", "vertical"]).setAll({ centerY: X$1, centerX: 0 }), t2("Tick", ["funnel"]).setAll({ location: 1 }), t2("FunnelSlice", ["funnel", "link"]).setAll({ fillOpacity: 0.5, strokeOpacity: 0, expandDistance: -0.1 }), t2("FunnelSlice", ["funnel", "link", "vertical"]).setAll({ height: 10 }), t2("FunnelSlice", ["funnel", "link", "horizontal"]).setAll({ width: 10 }), t2("PyramidSeries").setAll({ valueIs: "area" }), t2("FunnelSlice", ["pyramid", "link"]).setAll({ fillOpacity: 0.5 }), t2("FunnelSlice", ["pyramid", "link", "vertical"]).setAll({ height: 0 }), t2("FunnelSlice", ["pyramid", "link", "horizontal"]).setAll({ width: 0 }), t2("FunnelSlice", ["pyramid"]).setAll({ interactive: true, expandDistance: 0 }), t2("FunnelSlice", ["pyramid"]).states.create("hover", { expandDistance: 0.15 }), t2("Label", ["pyramid"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: X$1 }), t2("Label", ["pyramid", "horizontal"]).setAll({ centerX: 0, centerY: X$1, rotation: -90 }), t2("Label", ["pyramid", "vertical"]).setAll({ centerY: X$1, centerX: 0 }), t2("Tick", ["pyramid"]).setAll({ location: 1 }), t2("FunnelSlice", ["pictorial"]).setAll({ interactive: true, tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}" }), t2("Label", ["pictorial"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: X$1 }), t2("Label", ["pictorial", "horizontal"]).setAll({ centerX: 0, centerY: X$1, rotation: -90 }), t2("Label", ["pictorial", "vertical"]).setAll({ centerY: X$1, centerX: 0 }), t2("FunnelSlice", ["pictorial", "link"]).setAll({ fillOpacity: 0.5, width: 0, height: 0 }), t2("Tick", ["pictorial"]).setAll({ location: 0.5 });
    {
      const i = t2("Graphics", ["pictorial", "background"]);
      i.setAll({ fillOpacity: 0.2 }), l$1(i, "fill", e, "alternativeBackground");
    }
  }
}
class te extends U$1 {
  _afterNew() {
    this._defaultThemes.push(ee.new(this._root)), super._afterNew(), this.chartContainer.children.push(this.seriesContainer), this.seriesContainer.children.push(this.bulletsContainer);
  }
  _processSeries(e) {
    super._processSeries(e), this.seriesContainer.children.moveValue(this.bulletsContainer, this.seriesContainer.children.length - 1);
  }
}
Object.defineProperty(te, "className", { enumerable: true, configurable: true, writable: true, value: "PercentChart" }), Object.defineProperty(te, "classNames", { enumerable: true, configurable: true, writable: true, value: U$1.classNames.concat([te.className]) });
class ie extends D {
  constructor() {
    super(...arguments), Object.defineProperty(this, "slicesContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "labelsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "ticksContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "_lLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_rLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_hLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "slices", { enumerable: true, configurable: true, writable: true, value: this._makeSlices() }), Object.defineProperty(this, "labels", { enumerable: true, configurable: true, writable: true, value: this._makeLabels() }), Object.defineProperty(this, "ticks", { enumerable: true, configurable: true, writable: true, value: this._makeTicks() });
  }
  makeSlice(e) {
    const t2 = this.slicesContainer.children.push(this.slices.make());
    return t2.on("fill", () => {
      this.updateLegendMarker(e);
    }), t2.on("stroke", () => {
      this.updateLegendMarker(e);
    }), t2._setDataItem(e), e.set("slice", t2), this.slices.push(t2), t2;
  }
  makeLabel(e) {
    const t2 = this.labelsContainer.children.push(this.labels.make());
    return t2._setDataItem(e), e.set("label", t2), this.labels.push(t2), t2;
  }
  _shouldMakeBullet(e) {
    return null != e.get("value");
  }
  makeTick(e) {
    const t2 = this.ticksContainer.children.push(this.ticks.make());
    return t2._setDataItem(e), e.set("tick", t2), this.ticks.push(t2), t2;
  }
  _afterNew() {
    this.fields.push("category", "fill"), super._afterNew();
  }
  _onDataClear() {
    const e = this.get("colors");
    e && e.reset();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this._lLabels = [], this._rLabels = [], this._hLabels = [], this._valuesDirty) {
      let e = 0, t2 = 0, i = 0, s2 = 1 / 0, a = 0;
      m(this._dataItems, (i2) => {
        let s3 = i2.get("valueWorking", 0);
        e += s3, t2 += Math.abs(s3);
      }), m(this._dataItems, (e2) => {
        let r = e2.get("valueWorking", 0);
        r > i && (i = r), r < s2 && (s2 = r), a++;
        let l2 = r / t2;
        0 == t2 && (l2 = 0), e2.setRaw("valuePercentTotal", 100 * l2);
      }), this.setPrivateRaw("valueLow", s2), this.setPrivateRaw("valueHigh", i), this.setPrivateRaw("valueSum", e), this.setPrivateRaw("valueAverage", e / a), this.setPrivateRaw("valueAbsoluteSum", t2);
    }
  }
  show(t$1) {
    const i = Object.create(null, { show: { get: () => super.show } });
    return t(this, void 0, void 0, function* () {
      let e = [];
      e.push(i.show.call(this, t$1)), e.push(this._sequencedShowHide(true, t$1)), yield Promise.all(e);
    });
  }
  hide(t$1) {
    const i = Object.create(null, { hide: { get: () => super.hide } });
    return t(this, void 0, void 0, function* () {
      let e = [];
      e.push(i.hide.call(this, t$1)), e.push(this._sequencedShowHide(false, t$1)), yield Promise.all(e);
    });
  }
  _updateChildren() {
    super._updateChildren(), this._valuesDirty && m(this._dataItems, (e) => {
      e.get("label").text.markDirtyText();
    }), (this.isDirty("legendLabelText") || this.isDirty("legendValueText")) && m(this._dataItems, (e) => {
      this.updateLegendValue(e);
    }), this._arrange();
  }
  _arrange() {
    this._arrangeDown(this._lLabels), this._arrangeUp(this._lLabels), this._arrangeDown(this._rLabels), this._arrangeUp(this._rLabels), this._arrangeLeft(this._hLabels), this._arrangeRight(this._hLabels), m(this.dataItems, (e) => {
      this._updateTick(e);
    });
  }
  _afterChanged() {
    super._afterChanged(), this._arrange();
  }
  processDataItem(e) {
    if (super.processDataItem(e), null == e.get("fill")) {
      let t2 = this.get("colors");
      t2 && e.setRaw("fill", t2.next());
    }
  }
  showDataItem(t$1, i) {
    const s2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return t(this, void 0, void 0, function* () {
      const e = [s2.showDataItem.call(this, t$1, i)];
      l(i) || (i = this.get("stateAnimationDuration", 0));
      const a = this.get("stateAnimationEasing");
      let r = t$1.get("value");
      const l$12 = t$1.animate({ key: "valueWorking", to: r, duration: i, easing: a });
      l$12 && e.push(l$12.waitForStop());
      const n = t$1.get("tick");
      n && e.push(n.show(i));
      const o = t$1.get("label");
      o && e.push(o.show(i));
      const h = t$1.get("slice");
      h && e.push(h.show(i)), h.get("active") && h.states.applyAnimate("active"), yield Promise.all(e);
    });
  }
  hideDataItem(t$1, i) {
    const s2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return t(this, void 0, void 0, function* () {
      const e = [s2.hideDataItem.call(this, t$1, i)], a = this.states.create("hidden", {});
      l(i) || (i = a.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const r = a.get("stateAnimationEasing", this.get("stateAnimationEasing")), l$12 = t$1.animate({ key: "valueWorking", to: 0, duration: i, easing: r });
      l$12 && e.push(l$12.waitForStop());
      const n = t$1.get("tick");
      n && e.push(n.hide(i));
      const o = t$1.get("label");
      o && e.push(o.hide(i));
      const h = t$1.get("slice");
      h.hideTooltip(), h && e.push(h.hide(i)), yield Promise.all(e);
    });
  }
  disposeDataItem(e) {
    super.disposeDataItem(e);
    let t2 = e.get("label");
    t2 && (this.labels.removeValue(t2), t2.dispose());
    let i = e.get("tick");
    i && (this.ticks.removeValue(i), i.dispose());
    let s2 = e.get("slice");
    s2 && (this.slices.removeValue(s2), s2.dispose());
  }
  hoverDataItem(e) {
    const t2 = e.get("slice");
    t2 && !t2.isHidden() && t2.hover();
  }
  unhoverDataItem(e) {
    const t2 = e.get("slice");
    t2 && t2.unhover();
  }
  updateLegendMarker(e) {
    if (e) {
      const t2 = e.get("slice");
      if (t2) {
        const i = e.get("legendDataItem");
        if (i) {
          const e2 = i.get("markerRectangle");
          m(Fe, (i2) => {
            null != t2.get(i2) && e2.set(i2, t2.get(i2));
          });
        }
      }
    }
  }
  _arrangeDown(e) {
    if (e) {
      let t2 = this._getNextDown();
      e.sort((e2, t3) => e2.y > t3.y ? 1 : e2.y < t3.y ? -1 : 0), m(e, (e2) => {
        const i = e2.label.adjustedLocalBounds();
        let s2 = i.top;
        e2.y + s2 < t2 && (e2.y = t2 - s2), e2.label.set("y", e2.y), t2 = e2.y + i.bottom;
      });
    }
  }
  _getNextUp() {
    return this.labelsContainer.maxHeight();
  }
  _getNextDown() {
    return 0;
  }
  _arrangeUp(e) {
    if (e) {
      let t2 = this._getNextUp();
      e.sort((e2, t3) => e2.y < t3.y ? 1 : e2.y > t3.y ? -1 : 0), m(e, (e2) => {
        const i = e2.label.adjustedLocalBounds();
        let s2 = i.bottom;
        e2.y + s2 > t2 && (e2.y = t2 - s2), e2.label.set("y", e2.y), t2 = e2.y + i.top;
      });
    }
  }
  _arrangeRight(e) {
    if (e) {
      let t2 = 0;
      e.sort((e2, t3) => e2.y > t3.y ? 1 : e2.y < t3.y ? -1 : 0), m(e, (e2) => {
        const i = e2.label.adjustedLocalBounds();
        let s2 = i.left;
        e2.y + s2 < t2 && (e2.y = t2 - s2), e2.label.set("x", e2.y), t2 = e2.y + i.right;
      });
    }
  }
  _arrangeLeft(e) {
    if (e) {
      let t2 = this.labelsContainer.maxWidth();
      e.sort((e2, t3) => e2.y < t3.y ? 1 : e2.y > t3.y ? -1 : 0), m(e, (e2) => {
        const i = e2.label.adjustedLocalBounds();
        let s2 = i.right;
        e2.y + s2 > t2 && (e2.y = t2 - s2), e2.label.set("x", e2.y), t2 = e2.y + i.left;
      });
    }
  }
  _updateSize() {
    super._updateSize(), this.markDirty();
  }
  _updateTick(e) {
  }
  _dispose() {
    super._dispose();
    const e = this.chart;
    e && e.series.removeValue(this);
  }
}
Object.defineProperty(ie, "className", { enumerable: true, configurable: true, writable: true, value: "PercentSeries" }), Object.defineProperty(ie, "classNames", { enumerable: true, configurable: true, writable: true, value: D.classNames.concat([ie.className]) });
class se extends te {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_maxRadius", { enumerable: true, configurable: true, writable: true, value: 1 });
  }
  _afterNew() {
    super._afterNew(), this.seriesContainer.setAll({ x: X$1, y: X$1 });
  }
  _prepareChildren() {
    super._prepareChildren();
    const e = this.chartContainer, t2 = e.innerWidth(), i = e.innerHeight(), s2 = this.get("startAngle", 0), a = this.get("endAngle", 0), r = this.get("innerRadius");
    let l2 = pe(0, 0, s2, a, 1);
    const n = t2 / (l2.right - l2.left), o = i / (l2.bottom - l2.top);
    let c = { left: 0, right: 0, top: 0, bottom: 0 };
    if (r instanceof K$1) {
      let e2 = r.value, l3 = Math.min(n, o);
      e2 = Math.max(l3 * e2, l3 - Math.min(i, t2)) / l3, c = pe(0, 0, s2, a, e2), this.setPrivateRaw("irModifyer", e2 / r.value);
    }
    l2 = ge([l2, c]);
    const u = this._maxRadius;
    this._maxRadius = Math.min(n, o);
    const d = bt(this.get("radius", 0), this._maxRadius);
    this.seriesContainer.setAll({ dy: -d * (l2.bottom + l2.top) / 2, dx: -d * (l2.right + l2.left) / 2 }), (this.isDirty("startAngle") || this.isDirty("endAngle") || u != this._maxRadius) && this.series.each((e2) => {
      e2._markDirtyKey("startAngle");
    }), (this.isDirty("innerRadius") || this.isDirty("radius")) && this.series.each((e2) => {
      e2._markDirtyKey("innerRadius");
    });
  }
  radius(e) {
    let t2 = bt(this.get("radius", 0), this._maxRadius), i = bt(this.get("innerRadius", 0), t2);
    if (e) {
      let s2 = this.series.indexOf(e), a = this.series.length, r = e.get("radius");
      return null != r ? i + bt(r, t2 - i) : i + (t2 - i) / a * (s2 + 1);
    }
    return t2;
  }
  innerRadius(e) {
    const t2 = this.radius();
    let i = bt(this.get("innerRadius", 0), t2);
    if (i < 0 && (i = t2 + i), e) {
      let s2 = this.series.indexOf(e), a = this.series.length, r = e.get("innerRadius");
      return null != r ? i + bt(r, t2 - i) : i + (t2 - i) / a * s2;
    }
    return i;
  }
}
Object.defineProperty(se, "className", { enumerable: true, configurable: true, writable: true, value: "PieChart" }), Object.defineProperty(se, "classNames", { enumerable: true, configurable: true, writable: true, value: te.classNames.concat([se.className]) });
class ae extends ie {
  _makeSlices() {
    return new V$1(Be.new({}), () => $._new(this._root, { themeTags: zt(this.slices.template.get("themeTags", []), ["pie", "series"]) }, [this.slices.template]));
  }
  _makeLabels() {
    return new V$1(Be.new({}), () => C._new(this._root, { themeTags: zt(this.labels.template.get("themeTags", []), ["pie", "series"]) }, [this.labels.template]));
  }
  _makeTicks() {
    return new V$1(Be.new({}), () => B$1._new(this._root, { themeTags: zt(this.ticks.template.get("themeTags", []), ["pie", "series"]) }, [this.ticks.template]));
  }
  processDataItem(e) {
    super.processDataItem(e);
    const t2 = this.makeSlice(e);
    t2.on("scale", () => {
      this._updateTick(e);
    }), t2.on("shiftRadius", () => {
      this._updateTick(e);
    }), t2.events.on("positionchanged", () => {
      this._updateTick(e);
    });
    const i = this.makeLabel(e);
    i.events.on("positionchanged", () => {
      this._updateTick(e);
    }), this.makeTick(e), t2.events.on("positionchanged", () => {
      i.markDirty();
    });
  }
  _getNextUp() {
    const e = this.chart;
    return e ? e._maxRadius : this.labelsContainer.maxHeight() / 2;
  }
  _getNextDown() {
    const e = this.chart;
    return e ? -e._maxRadius : -this.labelsContainer.maxHeight() / 2;
  }
  _prepareChildren() {
    super._prepareChildren();
    const e = this.chart;
    if (e) {
      if (this.isDirty("alignLabels")) {
        let e2 = this.labels.template;
        if (this.get("alignLabels"))
          e2.set("textType", "aligned");
        else {
          let t2 = e2.get("textType");
          null != t2 && "aligned" != t2 || e2.set("textType", "adjusted");
        }
      }
      if (this._valuesDirty || this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle") || this.isDirty("alignLabels")) {
        this.markDirtyBounds();
        const t2 = this.get("startAngle", e.get("startAngle", -90)), i = this.get("endAngle", e.get("endAngle", 270)) - t2;
        let s2 = t2;
        const a = e.radius(this);
        this.setPrivateRaw("radius", a);
        let r = e.innerRadius(this) * e.getPrivate("irModifyer", 1);
        r < 0 && (r = a + r), m(this._dataItems, (e2) => {
          this.updateLegendValue(e2);
          let t3 = i * e2.get("valuePercentTotal") / 100;
          const l2 = e2.get("slice");
          if (l2) {
            l2.set("radius", a), l2.set("innerRadius", r), l2.set("startAngle", s2), l2.set("arc", t3);
            const i2 = e2.get("fill");
            l2._setDefault("fill", i2), l2._setDefault("stroke", i2);
          }
          let n = ue(s2 + t3 / 2);
          const o = e2.get("label");
          if (o && (o.setPrivate("radius", a), o.setPrivate("innerRadius", r), o.set("labelAngle", n), "aligned" == o.get("textType"))) {
            let e3 = a + o.get("radius", 0), t4 = a * le(n);
            n > 90 && n <= 270 ? (o.isHidden() || o.isHiding() || this._lLabels.push({ label: o, y: t4 }), e3 *= -1, e3 -= this.labelsContainer.get("paddingLeft", 0), o.set("centerX", Y$1), o.setPrivateRaw("left", true)) : (o.isHidden() || o.isHiding() || this._rLabels.push({ label: o, y: t4 }), e3 += this.labelsContainer.get("paddingRight", 0), o.set("centerX", 0), o.setPrivateRaw("left", false)), o.set("x", e3), o.set("y", a * le(n));
          }
          s2 += t3, this._updateTick(e2);
        });
      }
    }
  }
  _updateTick(e) {
    const t2 = e.get("tick"), i = e.get("label"), s2 = e.get("slice"), a = t2.get("location", 1);
    if (t2 && i && s2) {
      const e2 = (s2.get("shiftRadius", 0) + s2.get("radius", 0)) * s2.get("scale", 1) * a, r = i.get("labelAngle", 0), l2 = de(r), n = le(r), o = this.labelsContainer, h = o.get("paddingLeft", 0), c = o.get("paddingRight", 0);
      let g = 0, p = 0;
      if (g = i.x(), p = i.y(), "circular" == i.get("textType")) {
        const e3 = i.radius() - i.get("paddingBottom", 0), t3 = i.get("labelAngle", 0);
        g = e3 * de(t3), p = e3 * le(t3);
      }
      let y = -c;
      i.getPrivate("left") && (y = h), t2.set("points", [{ x: s2.x() + e2 * l2, y: s2.y() + e2 * n }, { x: g + y, y: p }, { x: g, y: p }]);
    }
  }
  _positionBullet(e) {
    const t2 = e.get("sprite");
    if (t2) {
      const i = t2.dataItem.get("slice");
      if (i) {
        const s2 = i.get("innerRadius", 0), a = i.get("radius", 0), r = i.get("startAngle", 0) + i.get("arc", 0) * e.get("locationX", 0.5), l2 = s2 + (a - s2) * e.get("locationY", 0.5);
        t2.setAll({ x: de(r) * l2, y: le(r) * l2 });
      }
    }
  }
}
Object.defineProperty(ae, "className", { enumerable: true, configurable: true, writable: true, value: "PieSeries" }), Object.defineProperty(ae, "classNames", { enumerable: true, configurable: true, writable: true, value: ie.classNames.concat([ae.className]) });
export {
  se as PieChartAm5,
  ae as PieSeriesAm5
};
