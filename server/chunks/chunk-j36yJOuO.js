import { ib as n } from "./chunk-ejFG4zJ0.js";
import { R, D, U as U$1, V as V$1, k } from "./chunk-nB7LnzIh.js";
import { s as si, al as ri, b as Ke, ap as a, ah as ge, ad as e, as as me, ar as pt, at as se$1, au as Le, ak as Ft, w, av as pe, aw as ue, ax as ne, ae as ce, i as ii, ay as Ue, r, C as g, an as ai, a as i } from "./chunk-qsKdKwKn.js";
import { s } from "./chunk-HJdTyZR6.js";
import { l } from "./chunk-tVyTP0np.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class N extends si {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeRadialText("", this.textStyle) });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged(), this._display.clear(), this.isDirty("textType") && (this._display.textType = this.get("textType"), this.markDirtyBounds()), this.isDirty("radius") && (this._display.radius = this.get("radius"), this.markDirtyBounds()), this.isDirty("startAngle") && (this._display.startAngle = (this.get("startAngle", 0) + 90) * ne, this.markDirtyBounds()), this.isDirty("inside") && (this._display.inside = this.get("inside"), this.markDirtyBounds()), this.isDirty("orientation") && (this._display.orientation = this.get("orientation"), this.markDirtyBounds()), this.isDirty("kerning") && (this._display.kerning = this.get("kerning"), this.markDirtyBounds());
  }
}
Object.defineProperty(N, "className", { enumerable: true, configurable: true, writable: true, value: "RadialText" }), Object.defineProperty(N, "classNames", { enumerable: true, configurable: true, writable: true, value: si.classNames.concat([N.className]) });
class C extends ri {
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
    const e2 = this.getPrivate("radius", 0), t = this.getPrivate("innerRadius", 0), i2 = this.get("baseRadius", 0);
    return t + pt(i2, e2 - t);
  }
  radius() {
    const e2 = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (e2 ? -1 : 1);
  }
  _updateChildren() {
    if (super._updateChildren(), this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const e2 = this.get("textType", "adjusted"), t = this.get("inside", false), i2 = this.get("orientation");
      let s2 = ce(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0)), this._text.set("inside", t);
      const a$1 = ue(s2), r2 = pe(s2);
      let l2 = this.baseRadius(), n2 = this.radius();
      if (this._display.angle = 0, "circular" == e2)
        this.setAll({ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }), this._text.set("orientation", i2), this._text.set("radius", n2);
      else {
        0 == l2 && (s2 = 0, n2 = 0);
        let t2 = n2 * r2, o = n2 * a$1;
        "radial" == e2 ? (this.setRaw("x", t2), this.setRaw("y", o), s2 < 90 || s2 > 270 || "auto" != i2 ? (this._display.angle = s2, this._flipped = false) : (this._display.angle = s2 + 180, this._flipped = true), this._dirty.rotation = false) : "adjusted" == e2 ? (this.setRaw("centerX", a), this.setRaw("centerY", a), this.setRaw("x", t2), this.setRaw("y", o)) : "regular" == e2 && (this.setRaw("x", t2), this.setRaw("y", o));
      }
      this.markDirtyPosition(), this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const e$1 = this.get("textType", "regular"), t = this.get("inside", false);
    let i2 = 0, s2 = 0, a2 = this.get("labelAngle", 0), r2 = this.localBounds(), l2 = r2.right - r2.left, n2 = r2.bottom - r2.top;
    if ("radial" == e$1) {
      if (this._flipped) {
        let e$12 = this.get("centerX");
        e$12 instanceof e && (l2 *= 1 - 2 * e$12.value), i2 = l2 * pe(a2), s2 = l2 * ue(a2);
      }
    } else
      t || "adjusted" != e$1 || (i2 = l2 / 2 * pe(a2), s2 = n2 / 2 * ue(a2));
    this.setRaw("dx", i2), this.setRaw("dy", s2), super._updatePosition();
  }
  get text() {
    return this._text;
  }
}
Object.defineProperty(C, "className", { enumerable: true, configurable: true, writable: true, value: "RadialLabel" }), Object.defineProperty(C, "classNames", { enumerable: true, configurable: true, writable: true, value: ri.classNames.concat([C.className]) });
const j = Math.abs, S = Math.atan2, O = Math.cos, I = Math.max, M = Math.min, B = Math.sin, F = Math.sqrt, H = 1e-12, X = Math.PI, Y = X / 2, V = 2 * X;
function z(e2) {
  return e2 > 1 ? 0 : e2 < -1 ? X : Math.acos(e2);
}
function W(e2) {
  return e2 >= 1 ? Y : e2 <= -1 ? -Y : Math.asin(e2);
}
function U(e2) {
  return e2.innerRadius;
}
function q(e2) {
  return e2.outerRadius;
}
function K(e2) {
  return e2.startAngle;
}
function E(e2) {
  return e2.endAngle;
}
function G(e2) {
  return e2 && e2.padAngle;
}
function J(e2, t, i2, s2, a2, r2, l2, n2) {
  var o = i2 - e2, h = s2 - t, c = l2 - a2, u = n2 - r2, d = u * o - c * h;
  if (!(d * d < H))
    return [e2 + (d = (c * (t - r2) - u * (e2 - a2)) / d) * o, t + d * h];
}
function Q(e2, t, i2, s2, a2, r2, l2) {
  var n2 = e2 - i2, o = t - s2, h = (l2 ? r2 : -r2) / F(n2 * n2 + o * o), c = h * o, u = -h * n2, d = e2 + c, g2 = t + u, p = i2 + c, y = s2 + u, b = (d + p) / 2, m = (g2 + y) / 2, f = p - d, _ = y - g2, x = f * f + _ * _, v = a2 - r2, w2 = d * y - p * g2, k2 = (_ < 0 ? -1 : 1) * F(I(0, v * v * x - w2 * w2)), D2 = (w2 * _ - f * k2) / x, A = (-w2 * f - _ * k2) / x, R2 = (w2 * _ + f * k2) / x, P = (-w2 * f + _ * k2) / x, T = D2 - b, L = A - m, N2 = R2 - b, C2 = P - m;
  return T * T + L * L > N2 * N2 + C2 * C2 && (D2 = R2, A = P), { cx: D2, cy: A, x01: -c, y01: -u, x11: D2 * (a2 / v - 1), y11: A * (a2 / v - 1) };
}
function Z() {
  var e2 = U, s2 = q, a2 = k(0), r2 = null, l2 = K, n2 = E, o = G, h = null, c = V$1(u);
  function u() {
    var t, i2, u2 = +e2.apply(this, arguments), d = +s2.apply(this, arguments), g2 = l2.apply(this, arguments) - Y, p = n2.apply(this, arguments) - Y, y = j(p - g2), b = p > g2;
    if (h || (h = t = c()), d < u2 && (i2 = d, d = u2, u2 = i2), d > H)
      if (y > V - H)
        h.moveTo(d * O(g2), d * B(g2)), h.arc(0, 0, d, g2, p, !b), u2 > H && (h.moveTo(u2 * O(p), u2 * B(p)), h.arc(0, 0, u2, p, g2, b));
      else {
        var m, f, _ = g2, x = p, v = g2, w2 = p, k2 = y, D2 = y, A = o.apply(this, arguments) / 2, R2 = A > H && (r2 ? +r2.apply(this, arguments) : F(u2 * u2 + d * d)), P = M(j(d - u2) / 2, +a2.apply(this, arguments)), T = P, L = P;
        if (R2 > H) {
          var N2 = W(R2 / u2 * B(A)), C2 = W(R2 / d * B(A));
          (k2 -= 2 * N2) > H ? (v += N2 *= b ? 1 : -1, w2 -= N2) : (k2 = 0, v = w2 = (g2 + p) / 2), (D2 -= 2 * C2) > H ? (_ += C2 *= b ? 1 : -1, x -= C2) : (D2 = 0, _ = x = (g2 + p) / 2);
        }
        var I2 = d * O(_), U2 = d * B(_), q2 = u2 * O(w2), K2 = u2 * B(w2);
        if (P > H) {
          var E2, G2 = d * O(x), Z2 = d * B(x), $2 = u2 * O(v), ee2 = u2 * B(v);
          if (y < X)
            if (E2 = J(I2, U2, $2, ee2, G2, Z2, q2, K2)) {
              var te2 = I2 - E2[0], ie2 = U2 - E2[1], se2 = G2 - E2[0], ae2 = Z2 - E2[1], re = 1 / B(z((te2 * se2 + ie2 * ae2) / (F(te2 * te2 + ie2 * ie2) * F(se2 * se2 + ae2 * ae2))) / 2), le = F(E2[0] * E2[0] + E2[1] * E2[1]);
              T = M(P, (u2 - le) / (re - 1)), L = M(P, (d - le) / (re + 1));
            } else
              T = L = 0;
        }
        D2 > H ? L > H ? (m = Q($2, ee2, I2, U2, d, L, b), f = Q(G2, Z2, q2, K2, d, L, b), h.moveTo(m.cx + m.x01, m.cy + m.y01), L < P ? h.arc(m.cx, m.cy, L, S(m.y01, m.x01), S(f.y01, f.x01), !b) : (h.arc(m.cx, m.cy, L, S(m.y01, m.x01), S(m.y11, m.x11), !b), h.arc(0, 0, d, S(m.cy + m.y11, m.cx + m.x11), S(f.cy + f.y11, f.cx + f.x11), !b), h.arc(f.cx, f.cy, L, S(f.y11, f.x11), S(f.y01, f.x01), !b))) : (h.moveTo(I2, U2), h.arc(0, 0, d, _, x, !b)) : h.moveTo(I2, U2), u2 > H && k2 > H ? T > H ? (m = Q(q2, K2, G2, Z2, u2, -T, b), f = Q(I2, U2, $2, ee2, u2, -T, b), h.lineTo(m.cx + m.x01, m.cy + m.y01), T < P ? h.arc(m.cx, m.cy, T, S(m.y01, m.x01), S(f.y01, f.x01), !b) : (h.arc(m.cx, m.cy, T, S(m.y01, m.x01), S(m.y11, m.x11), !b), h.arc(0, 0, u2, S(m.cy + m.y11, m.cx + m.x11), S(f.cy + f.y11, f.cx + f.x11), b), h.arc(f.cx, f.cy, T, S(f.y11, f.x11), S(f.y01, f.x01), !b))) : h.arc(0, 0, u2, w2, v, b) : h.lineTo(q2, K2);
      }
    else
      h.moveTo(0, 0);
    if (h.closePath(), t)
      return h = null, t + "" || null;
  }
  return u.centroid = function() {
    var t = (+e2.apply(this, arguments) + +s2.apply(this, arguments)) / 2, i2 = (+l2.apply(this, arguments) + +n2.apply(this, arguments)) / 2 - X / 2;
    return [O(i2) * t, B(i2) * t];
  }, u.innerRadius = function(t) {
    return arguments.length ? (e2 = "function" == typeof t ? t : k(+t), u) : e2;
  }, u.outerRadius = function(e3) {
    return arguments.length ? (s2 = "function" == typeof e3 ? e3 : k(+e3), u) : s2;
  }, u.cornerRadius = function(e3) {
    return arguments.length ? (a2 = "function" == typeof e3 ? e3 : k(+e3), u) : a2;
  }, u.padRadius = function(e3) {
    return arguments.length ? (r2 = null == e3 ? null : "function" == typeof e3 ? e3 : k(+e3), u) : r2;
  }, u.startAngle = function(e3) {
    return arguments.length ? (l2 = "function" == typeof e3 ? e3 : k(+e3), u) : l2;
  }, u.endAngle = function(e3) {
    return arguments.length ? (n2 = "function" == typeof e3 ? e3 : k(+e3), u) : n2;
  }, u.padAngle = function(e3) {
    return arguments.length ? (o = "function" == typeof e3 ? e3 : k(+e3), u) : o;
  }, u.context = function(e3) {
    return arguments.length ? (h = e3 ?? null, u) : h;
  }, u;
}
class $ extends Ke {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ix", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "iy", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_generator", { enumerable: true, configurable: true, writable: true, value: Z() });
  }
  _getTooltipPoint() {
    let e$1 = this.get("tooltipX"), t = this.get("tooltipY"), i2 = 0, s2 = 0;
    g(e$1) && (i2 = e$1), g(t) && (s2 = t);
    let a2 = this.get("radius", 0), r2 = this.get("innerRadius", 0);
    return a2 += this.get("dRadius", 0), r2 += this.get("dInnerRadius", 0), r2 < 0 && (r2 = a2 + r2), e$1 instanceof e && (i2 = this.ix * (r2 + (a2 - r2) * e$1.value)), t instanceof e && (s2 = this.iy * (r2 + (a2 - r2) * t.value)), this.get("arc") >= 360 && 0 == r2 && (i2 = 0, s2 = 0), { x: i2, y: s2 };
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius") || this.isDirty("shiftRadius")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      let e2 = this.get("startAngle", 0), t = this.get("arc", 0);
      const i2 = this._generator;
      t < 0 && (e2 += t, t *= -1), t > 0.1 && i2.cornerRadius(this.get("cornerRadius", 0)), i2.context(this._display);
      let s2 = this.get("radius", 0), a2 = this.get("innerRadius", 0);
      s2 += this.get("dRadius", 0), a2 += this.get("dInnerRadius", 0), a2 < 0 && (a2 = s2 + a2), i2({ innerRadius: a2, outerRadius: s2, startAngle: (e2 + 90) * ne, endAngle: (e2 + t + 90) * ne });
      let r2 = e2 + t / 2;
      this.ix = pe(r2), this.iy = ue(r2);
      const l2 = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * l2), this.setRaw("dy", this.iy * l2), this.markDirtyPosition();
    }
  }
}
Object.defineProperty($, "className", { enumerable: true, configurable: true, writable: true, value: "Slice" }), Object.defineProperty($, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([$.className]) });
class ee extends ai {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e2 = this._root.interfaceColors, t = this.rule.bind(this);
    t("PercentSeries").setAll({ legendLabelText: "{category}", legendValueText: "{valuePercentTotal.formatNumber('0.00p')}", colors: s.new(this._root, {}), width: r, height: r }), t("PieChart").setAll({ radius: i(80), startAngle: -90, endAngle: 270 }), t("PieSeries").setAll({ alignLabels: true, startAngle: -90, endAngle: 270 }), t("PieSeries").states.create("hidden", { endAngle: -90, opacity: 0 }), t("Slice", ["pie"]).setAll({ position: "absolute", isMeasured: false, x: 0, y: 0, toggleKey: "active", tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}", strokeWidth: 1, strokeOpacity: 1, role: "figure", lineJoin: "round" }), t("Slice", ["pie"]).states.create("active", { shiftRadius: 20, scale: 1 }), t("Slice", ["pie"]).states.create("hoverActive", { scale: 1.04 }), t("Slice", ["pie"]).states.create("hover", { scale: 1.04 }), t("RadialLabel", ["pie"]).setAll({ textType: "aligned", radius: 10, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", paddingTop: 5, paddingBottom: 5, populateText: true }), t("Tick", ["pie"]).setAll({ location: 1 }), t("SlicedChart").setAll({ paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10 }), t("FunnelSeries").setAll({ startLocation: 0, endLocation: 1, orientation: "vertical", alignLabels: true, sequencedInterpolation: true }), t("FunnelSlice").setAll({ interactive: true, expandDistance: 0 }), t("FunnelSlice").states.create("hover", { expandDistance: 0.15 }), t("Label", ["funnel"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["funnel", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["funnel", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("Tick", ["funnel"]).setAll({ location: 1 }), t("FunnelSlice", ["funnel", "link"]).setAll({ fillOpacity: 0.5, strokeOpacity: 0, expandDistance: -0.1 }), t("FunnelSlice", ["funnel", "link", "vertical"]).setAll({ height: 10 }), t("FunnelSlice", ["funnel", "link", "horizontal"]).setAll({ width: 10 }), t("PyramidSeries").setAll({ valueIs: "area" }), t("FunnelSlice", ["pyramid", "link"]).setAll({ fillOpacity: 0.5 }), t("FunnelSlice", ["pyramid", "link", "vertical"]).setAll({ height: 0 }), t("FunnelSlice", ["pyramid", "link", "horizontal"]).setAll({ width: 0 }), t("FunnelSlice", ["pyramid"]).setAll({ interactive: true, expandDistance: 0 }), t("FunnelSlice", ["pyramid"]).states.create("hover", { expandDistance: 0.15 }), t("Label", ["pyramid"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["pyramid", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["pyramid", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("Tick", ["pyramid"]).setAll({ location: 1 }), t("FunnelSlice", ["pictorial"]).setAll({ interactive: true, tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}" }), t("Label", ["pictorial"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["pictorial", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["pictorial", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("FunnelSlice", ["pictorial", "link"]).setAll({ fillOpacity: 0.5, width: 0, height: 0 }), t("Tick", ["pictorial"]).setAll({ location: 0.5 });
    {
      const i2 = t("Graphics", ["pictorial", "background"]);
      i2.setAll({ fillOpacity: 0.2 }), l(i2, "fill", e2, "alternativeBackground");
    }
  }
}
class te extends R {
  _afterNew() {
    this._defaultThemes.push(ee.new(this._root)), super._afterNew(), this.chartContainer.children.push(this.seriesContainer), this.seriesContainer.children.push(this.bulletsContainer);
  }
  _processSeries(e2) {
    super._processSeries(e2), this.seriesContainer.children.moveValue(this.bulletsContainer, this.seriesContainer.children.length - 1);
  }
}
Object.defineProperty(te, "className", { enumerable: true, configurable: true, writable: true, value: "PercentChart" }), Object.defineProperty(te, "classNames", { enumerable: true, configurable: true, writable: true, value: R.classNames.concat([te.className]) });
class ie extends D {
  constructor() {
    super(...arguments), Object.defineProperty(this, "slicesContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "labelsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "ticksContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "_lLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_rLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_hLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "slices", { enumerable: true, configurable: true, writable: true, value: this._makeSlices() }), Object.defineProperty(this, "labels", { enumerable: true, configurable: true, writable: true, value: this._makeLabels() }), Object.defineProperty(this, "ticks", { enumerable: true, configurable: true, writable: true, value: this._makeTicks() });
  }
  makeSlice(e2) {
    const t = this.slicesContainer.children.push(this.slices.make());
    return t.on("fill", () => {
      this.updateLegendMarker(e2);
    }), t.on("stroke", () => {
      this.updateLegendMarker(e2);
    }), t._setDataItem(e2), e2.set("slice", t), this.slices.push(t), t;
  }
  makeLabel(e2) {
    const t = this.labelsContainer.children.push(this.labels.make());
    return t._setDataItem(e2), e2.set("label", t), this.labels.push(t), t;
  }
  _shouldMakeBullet(e2) {
    return null != e2.get("value");
  }
  makeTick(e2) {
    const t = this.ticksContainer.children.push(this.ticks.make());
    return t._setDataItem(e2), e2.set("tick", t), this.ticks.push(t), t;
  }
  _afterNew() {
    this.fields.push("category", "fill"), super._afterNew();
  }
  _onDataClear() {
    const e2 = this.get("colors");
    e2 && e2.reset();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this._lLabels = [], this._rLabels = [], this._hLabels = [], this._valuesDirty) {
      let e2 = 0, t = 0, i2 = 0, s2 = 1 / 0, a2 = 0;
      w(this._dataItems, (i3) => {
        let s3 = i3.get("valueWorking", 0);
        e2 += s3, t += Math.abs(s3);
      }), w(this._dataItems, (e3) => {
        let r2 = e3.get("valueWorking", 0);
        r2 > i2 && (i2 = r2), r2 < s2 && (s2 = r2), a2++;
        let l2 = r2 / t;
        0 == t && (l2 = 0), e3.setRaw("valuePercentTotal", 100 * l2);
      }), this.setPrivateRaw("valueLow", s2), this.setPrivateRaw("valueHigh", i2), this.setPrivateRaw("valueSum", e2), this.setPrivateRaw("valueAverage", e2 / a2), this.setPrivateRaw("valueAbsoluteSum", t);
    }
  }
  show(t) {
    const i2 = Object.create(null, { show: { get: () => super.show } });
    return n(this, void 0, void 0, function* () {
      let e2 = [];
      e2.push(i2.show.call(this, t)), e2.push(this._sequencedShowHide(true, t)), yield Promise.all(e2);
    });
  }
  hide(t) {
    const i2 = Object.create(null, { hide: { get: () => super.hide } });
    return n(this, void 0, void 0, function* () {
      let e2 = [];
      e2.push(i2.hide.call(this, t)), e2.push(this._sequencedShowHide(false, t)), yield Promise.all(e2);
    });
  }
  _updateChildren() {
    super._updateChildren(), this._valuesDirty && w(this._dataItems, (e2) => {
      e2.get("label").text.markDirtyText();
    }), (this.isDirty("legendLabelText") || this.isDirty("legendValueText")) && w(this._dataItems, (e2) => {
      this.updateLegendValue(e2);
    }), this._arrange();
  }
  _arrange() {
    this._arrangeDown(this._lLabels), this._arrangeUp(this._lLabels), this._arrangeDown(this._rLabels), this._arrangeUp(this._rLabels), this._arrangeLeft(this._hLabels), this._arrangeRight(this._hLabels), w(this.dataItems, (e2) => {
      this._updateTick(e2);
    });
  }
  _afterChanged() {
    super._afterChanged(), this._arrange();
  }
  processDataItem(e2) {
    if (super.processDataItem(e2), null == e2.get("fill")) {
      let t = this.get("colors");
      t && e2.setRaw("fill", t.next());
    }
  }
  showDataItem(t, i2) {
    const s2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return n(this, void 0, void 0, function* () {
      const e2 = [s2.showDataItem.call(this, t, i2)];
      g(i2) || (i2 = this.get("stateAnimationDuration", 0));
      const a2 = this.get("stateAnimationEasing");
      let r2 = t.get("value");
      const l2 = t.animate({ key: "valueWorking", to: r2, duration: i2, easing: a2 });
      l2 && e2.push(l2.waitForStop());
      const n2 = t.get("tick");
      n2 && e2.push(n2.show(i2));
      const o = t.get("label");
      o && e2.push(o.show(i2));
      const h = t.get("slice");
      h && e2.push(h.show(i2)), h.get("active") && h.states.applyAnimate("active"), yield Promise.all(e2);
    });
  }
  hideDataItem(t, i2) {
    const s2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return n(this, void 0, void 0, function* () {
      const e2 = [s2.hideDataItem.call(this, t, i2)], a2 = this.states.create("hidden", {});
      g(i2) || (i2 = a2.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const r2 = a2.get("stateAnimationEasing", this.get("stateAnimationEasing")), l2 = t.animate({ key: "valueWorking", to: 0, duration: i2, easing: r2 });
      l2 && e2.push(l2.waitForStop());
      const n2 = t.get("tick");
      n2 && e2.push(n2.hide(i2));
      const o = t.get("label");
      o && e2.push(o.hide(i2));
      const h = t.get("slice");
      h.hideTooltip(), h && e2.push(h.hide(i2)), yield Promise.all(e2);
    });
  }
  disposeDataItem(e2) {
    super.disposeDataItem(e2);
    let t = e2.get("label");
    t && (this.labels.removeValue(t), t.dispose());
    let i2 = e2.get("tick");
    i2 && (this.ticks.removeValue(i2), i2.dispose());
    let s2 = e2.get("slice");
    s2 && (this.slices.removeValue(s2), s2.dispose());
  }
  hoverDataItem(e2) {
    const t = e2.get("slice");
    t && !t.isHidden() && t.hover();
  }
  unhoverDataItem(e2) {
    const t = e2.get("slice");
    t && t.unhover();
  }
  updateLegendMarker(e2) {
    if (e2) {
      const t = e2.get("slice");
      if (t) {
        const i2 = e2.get("legendDataItem");
        if (i2) {
          const e3 = i2.get("markerRectangle");
          w(Ue, (i3) => {
            null != t.get(i3) && e3.set(i3, t.get(i3));
          });
        }
      }
    }
  }
  _arrangeDown(e2) {
    if (e2) {
      let t = this._getNextDown();
      e2.sort((e3, t2) => e3.y > t2.y ? 1 : e3.y < t2.y ? -1 : 0), w(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.top;
        e3.y + s2 < t && (e3.y = t - s2), e3.label.set("y", e3.y), t = e3.y + i2.bottom;
      });
    }
  }
  _getNextUp() {
    return this.labelsContainer.maxHeight();
  }
  _getNextDown() {
    return 0;
  }
  _arrangeUp(e2) {
    if (e2) {
      let t = this._getNextUp();
      e2.sort((e3, t2) => e3.y < t2.y ? 1 : e3.y > t2.y ? -1 : 0), w(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.bottom;
        e3.y + s2 > t && (e3.y = t - s2), e3.label.set("y", e3.y), t = e3.y + i2.top;
      });
    }
  }
  _arrangeRight(e2) {
    if (e2) {
      let t = 0;
      e2.sort((e3, t2) => e3.y > t2.y ? 1 : e3.y < t2.y ? -1 : 0), w(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.left;
        e3.y + s2 < t && (e3.y = t - s2), e3.label.set("x", e3.y), t = e3.y + i2.right;
      });
    }
  }
  _arrangeLeft(e2) {
    if (e2) {
      let t = this.labelsContainer.maxWidth();
      e2.sort((e3, t2) => e3.y < t2.y ? 1 : e3.y > t2.y ? -1 : 0), w(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.right;
        e3.y + s2 > t && (e3.y = t - s2), e3.label.set("x", e3.y), t = e3.y + i2.left;
      });
    }
  }
  _updateSize() {
    super._updateSize(), this.markDirty();
  }
  _updateTick(e2) {
  }
  _dispose() {
    super._dispose();
    const e2 = this.chart;
    e2 && e2.series.removeValue(this);
  }
}
Object.defineProperty(ie, "className", { enumerable: true, configurable: true, writable: true, value: "PercentSeries" }), Object.defineProperty(ie, "classNames", { enumerable: true, configurable: true, writable: true, value: D.classNames.concat([ie.className]) });
class se extends te {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_maxRadius", { enumerable: true, configurable: true, writable: true, value: 1 });
  }
  _afterNew() {
    super._afterNew(), this.seriesContainer.setAll({ x: a, y: a });
  }
  _prepareChildren() {
    super._prepareChildren();
    const e$1 = this.chartContainer, t = e$1.innerWidth(), i2 = e$1.innerHeight(), s2 = this.get("startAngle", 0), a2 = this.get("endAngle", 0), r2 = this.get("innerRadius");
    let l2 = ge(0, 0, s2, a2, 1);
    const n2 = t / (l2.right - l2.left), o = i2 / (l2.bottom - l2.top);
    let c = { left: 0, right: 0, top: 0, bottom: 0 };
    if (r2 instanceof e) {
      let e2 = r2.value, l3 = Math.min(n2, o);
      e2 = Math.max(l3 * e2, l3 - Math.min(i2, t)) / l3, c = ge(0, 0, s2, a2, e2), this.setPrivateRaw("irModifyer", e2 / r2.value);
    }
    l2 = me([l2, c]);
    const u = this._maxRadius;
    this._maxRadius = Math.min(n2, o);
    const d = pt(this.get("radius", 0), this._maxRadius);
    this.seriesContainer.setAll({ dy: -d * (l2.bottom + l2.top) / 2, dx: -d * (l2.right + l2.left) / 2 }), (this.isDirty("startAngle") || this.isDirty("endAngle") || u != this._maxRadius) && this.series.each((e2) => {
      e2._markDirtyKey("startAngle");
    }), (this.isDirty("innerRadius") || this.isDirty("radius")) && this.series.each((e2) => {
      e2._markDirtyKey("innerRadius");
    });
  }
  radius(e2) {
    let t = pt(this.get("radius", 0), this._maxRadius), i2 = pt(this.get("innerRadius", 0), t);
    if (e2) {
      let s2 = this.series.indexOf(e2), a2 = this.series.length, r2 = e2.get("radius");
      return null != r2 ? i2 + pt(r2, t - i2) : i2 + (t - i2) / a2 * (s2 + 1);
    }
    return t;
  }
  innerRadius(e2) {
    const t = this.radius();
    let i2 = pt(this.get("innerRadius", 0), t);
    if (i2 < 0 && (i2 = t + i2), e2) {
      let s2 = this.series.indexOf(e2), a2 = this.series.length, r2 = e2.get("innerRadius");
      return null != r2 ? i2 + pt(r2, t - i2) : i2 + (t - i2) / a2 * s2;
    }
    return i2;
  }
}
Object.defineProperty(se, "className", { enumerable: true, configurable: true, writable: true, value: "PieChart" }), Object.defineProperty(se, "classNames", { enumerable: true, configurable: true, writable: true, value: te.classNames.concat([se.className]) });
class ae extends ie {
  _makeSlices() {
    return new se$1(Le.new({}), () => $._new(this._root, { themeTags: Ft(this.slices.template.get("themeTags", []), ["pie", "series"]) }, [this.slices.template]));
  }
  _makeLabels() {
    return new se$1(Le.new({}), () => C._new(this._root, { themeTags: Ft(this.labels.template.get("themeTags", []), ["pie", "series"]) }, [this.labels.template]));
  }
  _makeTicks() {
    return new se$1(Le.new({}), () => U$1._new(this._root, { themeTags: Ft(this.ticks.template.get("themeTags", []), ["pie", "series"]) }, [this.ticks.template]));
  }
  processDataItem(e2) {
    super.processDataItem(e2);
    const t = this.makeSlice(e2);
    t.on("scale", () => {
      this._updateTick(e2);
    }), t.on("shiftRadius", () => {
      this._updateTick(e2);
    }), t.events.on("positionchanged", () => {
      this._updateTick(e2);
    });
    const i2 = this.makeLabel(e2);
    i2.events.on("positionchanged", () => {
      this._updateTick(e2);
    }), this.makeTick(e2), t.events.on("positionchanged", () => {
      i2.markDirty();
    });
  }
  _getNextUp() {
    const e2 = this.chart;
    return e2 ? e2._maxRadius : this.labelsContainer.maxHeight() / 2;
  }
  _getNextDown() {
    const e2 = this.chart;
    return e2 ? -e2._maxRadius : -this.labelsContainer.maxHeight() / 2;
  }
  _prepareChildren() {
    super._prepareChildren();
    const e2 = this.chart;
    if (e2) {
      if (this.isDirty("alignLabels")) {
        let e3 = this.labels.template;
        if (this.get("alignLabels"))
          e3.set("textType", "aligned");
        else {
          let t = e3.get("textType");
          null != t && "aligned" != t || e3.set("textType", "adjusted");
        }
      }
      if (this._valuesDirty || this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle") || this.isDirty("alignLabels")) {
        this.markDirtyBounds();
        const t = this.get("startAngle", e2.get("startAngle", -90)), i2 = this.get("endAngle", e2.get("endAngle", 270)) - t;
        let s2 = t;
        const a2 = e2.radius(this);
        this.setPrivateRaw("radius", a2);
        let r$1 = e2.innerRadius(this) * e2.getPrivate("irModifyer", 1);
        r$1 < 0 && (r$1 = a2 + r$1), w(this._dataItems, (e3) => {
          this.updateLegendValue(e3);
          let t2 = i2 * e3.get("valuePercentTotal") / 100;
          const l2 = e3.get("slice");
          if (l2) {
            l2.set("radius", a2), l2.set("innerRadius", r$1), l2.set("startAngle", s2), l2.set("arc", t2);
            const i3 = e3.get("fill");
            l2._setDefault("fill", i3), l2._setDefault("stroke", i3);
          }
          let n2 = ce(s2 + t2 / 2);
          const o = e3.get("label");
          if (o && (o.setPrivate("radius", a2), o.setPrivate("innerRadius", r$1), o.set("labelAngle", n2), "aligned" == o.get("textType"))) {
            let e4 = a2 + o.get("radius", 0), t3 = a2 * ue(n2);
            n2 > 90 && n2 <= 270 ? (o.isHidden() || o.isHiding() || this._lLabels.push({ label: o, y: t3 }), e4 *= -1, e4 -= this.labelsContainer.get("paddingLeft", 0), o.set("centerX", r), o.setPrivateRaw("left", true)) : (o.isHidden() || o.isHiding() || this._rLabels.push({ label: o, y: t3 }), e4 += this.labelsContainer.get("paddingRight", 0), o.set("centerX", 0), o.setPrivateRaw("left", false)), o.set("x", e4), o.set("y", a2 * ue(n2));
          }
          s2 += t2, this._updateTick(e3);
        });
      }
    }
  }
  _updateTick(e2) {
    const t = e2.get("tick"), i2 = e2.get("label"), s2 = e2.get("slice"), a2 = t.get("location", 1);
    if (t && i2 && s2) {
      const e3 = (s2.get("shiftRadius", 0) + s2.get("radius", 0)) * s2.get("scale", 1) * a2, r2 = i2.get("labelAngle", 0), l2 = pe(r2), n2 = ue(r2), o = this.labelsContainer, h = o.get("paddingLeft", 0), c = o.get("paddingRight", 0);
      let g2 = 0, p = 0;
      g2 = i2.x(), p = i2.y();
      let y = [];
      if (0 != g2 && 0 != p) {
        if ("circular" == i2.get("textType")) {
          const e4 = i2.radius() - i2.get("paddingBottom", 0), t3 = i2.get("labelAngle", 0);
          g2 = e4 * pe(t3), p = e4 * ue(t3);
        }
        let t2 = -c;
        i2.getPrivate("left") && (t2 = h), y = [{ x: s2.x() + e3 * l2, y: s2.y() + e3 * n2 }, { x: g2 + t2, y: p }, { x: g2, y: p }];
      }
      t.set("points", y);
    }
  }
  _positionBullet(e2) {
    const t = e2.get("sprite");
    if (t) {
      const i2 = t.dataItem.get("slice");
      if (i2) {
        const s2 = i2.get("innerRadius", 0), a2 = i2.get("radius", 0), r2 = i2.get("startAngle", 0) + i2.get("arc", 0) * e2.get("locationX", 0.5), l2 = s2 + (a2 - s2) * e2.get("locationY", 0.5);
        t.setAll({ x: pe(r2) * l2, y: ue(r2) * l2 });
      }
    }
  }
}
Object.defineProperty(ae, "className", { enumerable: true, configurable: true, writable: true, value: "PieSeries" }), Object.defineProperty(ae, "classNames", { enumerable: true, configurable: true, writable: true, value: ie.classNames.concat([ae.className]) });
export {
  se as PieChartAm5,
  ae as PieSeriesAm5
};
