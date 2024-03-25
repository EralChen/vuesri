import { aD as ie$1, i as ii, r, b as Ke, z as ze, a3 as zt, h as x$1, aE as ht, N, W, w, aF as O, C as g, aG as Se, ak as Ft, q, c as Z, aH as he$1, aI as st, a6 as Y, aJ as ct, am as de$1, al as ri, ar as pt, aK as Wt, at as se$1, au as Le, aL as n, K as Kt, an as ai, ap as a, aa as S, F, a as i, ad as e, aA as ee$1, f as k$1, aM as Ct, aN as le$1, m as qe, ay as Ue } from "./chunk-qsKdKwKn.js";
import { s } from "./chunk-HJdTyZR6.js";
import { l } from "./chunk-tVyTP0np.js";
import { R, D, _ as _$1, g as g$1, U, V, k, I } from "./chunk-nB7LnzIh.js";
import { o, n as n$2 } from "./chunk-I_vLu23T.js";
import { ib as n$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function J(e2) {
  return "object" == typeof e2 && "length" in e2 ? e2 : Array.from(e2);
}
function Q(e2) {
  this._context = e2;
}
function $(e2) {
  return new Q(e2);
}
function ee(e2) {
  return e2[0];
}
function te(e2) {
  return e2[1];
}
function ie(e2, t) {
  var i2 = k(true), s2 = null, a2 = $, o2 = null, n2 = V(r2);
  function r2(r3) {
    var l2, h, d, c = (r3 = J(r3)).length, u2 = false;
    for (null == s2 && (o2 = a2(d = n2())), l2 = 0; l2 <= c; ++l2)
      !(l2 < c && i2(h = r3[l2], l2, r3)) === u2 && ((u2 = !u2) ? o2.lineStart() : o2.lineEnd()), u2 && o2.point(+e2(h, l2, r3), +t(h, l2, r3));
    if (d)
      return o2 = null, d + "" || null;
  }
  return e2 = "function" == typeof e2 ? e2 : void 0 === e2 ? ee : k(e2), t = "function" == typeof t ? t : void 0 === t ? te : k(t), r2.x = function(t2) {
    return arguments.length ? (e2 = "function" == typeof t2 ? t2 : k(+t2), r2) : e2;
  }, r2.y = function(e3) {
    return arguments.length ? (t = "function" == typeof e3 ? e3 : k(+e3), r2) : t;
  }, r2.defined = function(e3) {
    return arguments.length ? (i2 = "function" == typeof e3 ? e3 : k(!!e3), r2) : i2;
  }, r2.curve = function(e3) {
    return arguments.length ? (a2 = e3, null != s2 && (o2 = a2(s2)), r2) : a2;
  }, r2.context = function(e3) {
    return arguments.length ? (null == e3 ? s2 = o2 = null : o2 = a2(s2 = e3), r2) : s2;
  }, r2;
}
function se(e2, t, i2) {
  var s2 = null, a2 = k(true), o2 = null, n2 = $, r2 = null, l2 = V(h);
  function h(h2) {
    var d2, c, u2, g2, p, m = (h2 = J(h2)).length, _2 = false, b = new Array(m), x2 = new Array(m);
    for (null == o2 && (r2 = n2(p = l2())), d2 = 0; d2 <= m; ++d2) {
      if (!(d2 < m && a2(g2 = h2[d2], d2, h2)) === _2)
        if (_2 = !_2)
          c = d2, r2.areaStart(), r2.lineStart();
        else {
          for (r2.lineEnd(), r2.lineStart(), u2 = d2 - 1; u2 >= c; --u2)
            r2.point(b[u2], x2[u2]);
          r2.lineEnd(), r2.areaEnd();
        }
      _2 && (b[d2] = +e2(g2, d2, h2), x2[d2] = +t(g2, d2, h2), r2.point(s2 ? +s2(g2, d2, h2) : b[d2], i2 ? +i2(g2, d2, h2) : x2[d2]));
    }
    if (p)
      return r2 = null, p + "" || null;
  }
  function d() {
    return ie().defined(a2).curve(n2).context(o2);
  }
  return e2 = "function" == typeof e2 ? e2 : void 0 === e2 ? ee : k(+e2), t = "function" == typeof t ? t : k(void 0 === t ? 0 : +t), i2 = "function" == typeof i2 ? i2 : void 0 === i2 ? te : k(+i2), h.x = function(t2) {
    return arguments.length ? (e2 = "function" == typeof t2 ? t2 : k(+t2), s2 = null, h) : e2;
  }, h.x0 = function(t2) {
    return arguments.length ? (e2 = "function" == typeof t2 ? t2 : k(+t2), h) : e2;
  }, h.x1 = function(e3) {
    return arguments.length ? (s2 = null == e3 ? null : "function" == typeof e3 ? e3 : k(+e3), h) : s2;
  }, h.y = function(e3) {
    return arguments.length ? (t = "function" == typeof e3 ? e3 : k(+e3), i2 = null, h) : t;
  }, h.y0 = function(e3) {
    return arguments.length ? (t = "function" == typeof e3 ? e3 : k(+e3), h) : t;
  }, h.y1 = function(e3) {
    return arguments.length ? (i2 = null == e3 ? null : "function" == typeof e3 ? e3 : k(+e3), h) : i2;
  }, h.lineX0 = h.lineY0 = function() {
    return d().x(e2).y(t);
  }, h.lineY1 = function() {
    return d().x(e2).y(i2);
  }, h.lineX1 = function() {
    return d().x(s2).y(t);
  }, h.defined = function(e3) {
    return arguments.length ? (a2 = "function" == typeof e3 ? e3 : k(!!e3), h) : a2;
  }, h.curve = function(e3) {
    return arguments.length ? (n2 = e3, null != o2 && (r2 = n2(o2)), h) : n2;
  }, h.context = function(e3) {
    return arguments.length ? (null == e3 ? o2 = r2 = null : r2 = n2(o2 = e3), h) : o2;
  }, h;
}
Q.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e2, t);
  }
} };
class ae extends ai {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e2 = this._root.interfaceColors, l$1 = this._root.language, h = this.rule.bind(this);
    h("XYChart").setAll({ colors: s.new(this._root, {}), paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, panX: false, panY: false, wheelStep: 0.25, arrangeTooltips: true, pinchZoomX: false, pinchZoomY: false }), h("XYSeries").setAll({ legendLabelText: "{name}" }), h("XYChart", ["scrollbar", "chart"]).setAll({ paddingBottom: 0, paddingLeft: 0, paddingTop: 0, paddingRight: 0, colors: s.new(this._root, { saturation: 0 }) });
    {
      const t = h("Graphics", ["scrollbar", "overlay"]);
      t.setAll({ fillOpacity: 0.5 }), l(t, "fill", e2, "background");
    }
    h("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({ cornerRadiusTR: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusBL: 0, fillOpacity: 0, focusable: true }), h("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create("hover", { fillOpacity: 0.4 }), h("RoundedRectangle", ["xy", "scrollbar", "chart", "background"]).setAll({ cornerRadiusTL: 0, cornerRadiusBL: 0, cornerRadiusTR: 0, cornerRadiusBR: 0 }), h("RoundedRectangle", ["xy", "scrollbar", "chart", "background", "resize", "button"]).setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), h("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: true }), h("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: true, minGridDistance: 5 }), h("AxisLabel", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5, centerY: r, minPosition: 0.01, maxPosition: 0.99, fontSize: "0.8em" }), h("AxisLabel", ["category"]).setAll({ text: "{category}", populateText: true }), h("AxisLabel", ["x"]).setAll({ centerY: 0 }), h("AxisLabel", ["x", "inside"]).setAll({ centerY: r }), h("AxisLabel", ["x", "inside", "opposite"]).setAll({ centerY: 0 }), h("AxisLabel", ["x", "opposite"]).setAll({ centerY: r }), h("AxisLabel", ["y"]).setAll({ centerX: r }), h("AxisLabel", ["y", "inside"]).setAll({ centerX: 0 }), h("AxisLabel", ["y", "inside", "opposite"]).setAll({ centerX: r }), h("AxisLabel", ["y", "opposite"]).setAll({ centerX: 0 }), h("AxisLabel", ["minor"]).setAll({ fontSize: "0.6em" }), h("AxisLabel", ["xy", "scrollbar", "y"]).setAll({ visible: false }), h("Grid", ["xy", "scrollbar", "y"]).setAll({ visible: false }), h("Grid", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5 }), h("XYCursor").setAll({ behavior: "none", layer: 30, exportable: false, snapToSeriesBy: "xy", moveThreshold: 1 });
    {
      const t = h("Grid", ["cursor", "x"]);
      t.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: l$1.translate("Use left and right arrows to move selection") }), l(t, "stroke", e2, "alternativeBackground");
    }
    {
      const t = h("Grid", ["cursor", "y"]);
      t.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: l$1.translate("Use up and down arrows to move selection") }), l(t, "stroke", e2, "alternativeBackground");
    }
    {
      const t = h("Graphics", ["cursor", "selection"]);
      t.setAll({ fillOpacity: 0.15 }), l(t, "fill", e2, "alternativeBackground");
    }
    h("Axis").setAll({ start: 0, end: 1, minZoomCount: 1, maxZoomCount: 1 / 0, maxZoomFactor: 1e3, maxDeviation: 0.1, snapTooltip: true, tooltipLocation: 0.5, panX: true, panY: true, zoomX: true, zoomY: true, fixAxisSize: true }), h("AxisLabel").setAll({ location: 0.5, multiLocation: 0, centerX: a, centerY: a, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5 }), h("Container", ["axis", "header"]).setAll({ layer: 30 }), h("Rectangle", ["axis", "header", "background"]).setAll({ crisp: true });
    {
      const t = h("AxisRenderer");
      t.setAll({ crisp: true, strokeOpacity: 0 }), l(t, "stroke", e2, "grid");
    }
    h("AxisRendererX").setAll({ minGridDistance: 120, opposite: false, inversed: false, cellStartLocation: 0, cellEndLocation: 1, width: r }), h("AxisRendererY").setAll({ minGridDistance: 40, opposite: false, inversed: false, cellStartLocation: 0, cellEndLocation: 1, height: r });
    {
      const t = h("Rectangle", ["axis", "thumb"]);
      t.setAll({ fillOpacity: 0 }), l(t, "fill", e2, "alternativeBackground"), t.states.create("hover", { fillOpacity: 0.1 });
    }
    h("Rectangle", ["axis", "thumb", "x"]).setAll({ cursorOverStyle: "ew-resize" }), h("Rectangle", ["axis", "thumb", "y"]).setAll({ cursorOverStyle: "ns-resize" });
    {
      const t = h("Grid");
      t.setAll({ location: 0, strokeOpacity: 0.15, crisp: true }), l(t, "stroke", e2, "grid");
    }
    {
      const t = h("Grid", ["minor"]);
      t.setAll({ location: 0, strokeOpacity: 0.07, crisp: true }), l(t, "stroke", e2, "grid");
    }
    h("Grid", ["base"]).setAll({ strokeOpacity: 0.3 });
    {
      const t = h("Graphics", ["axis", "fill"]);
      t.setAll({ visible: false, isMeasured: false, position: "absolute", fillOpacity: 0.05 }), l(t, "fill", e2, "alternativeBackground");
    }
    h("Graphics", ["axis", "fill", "range"]).setAll({ isMeasured: true }), h("Graphics", ["series", "fill", "range"]).setAll({ visible: false, isMeasured: true }), h("Grid", ["series", "range"]).setAll({ visible: false }), h("AxisTick", ["series", "range"]).setAll({ visible: false }), h("AxisLabel", ["series", "range"]).setAll({ visible: false });
    {
      const t = h("AxisTick");
      t.setAll({ location: 0.5, multiLocation: 0, strokeOpacity: 1, isMeasured: false, position: "absolute", visible: false }), l(t, "stroke", e2, "grid");
    }
    h("CategoryAxis").setAll({ startLocation: 0, endLocation: 1, fillRule: (e3, t) => {
      const i2 = e3.get("axisFill");
      i2 && (g(t) && t % 2 != 0 ? i2.setPrivate("visible", false) : i2.setPrivate("visible", true));
    } });
    const d = [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 5 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 50 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "millisecond", count: 500 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 5 }, { timeUnit: "second", count: 10 }, { timeUnit: "second", count: 30 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 5 }, { timeUnit: "minute", count: 10 }, { timeUnit: "minute", count: 15 }, { timeUnit: "minute", count: 30 }, { timeUnit: "hour", count: 1 }, { timeUnit: "hour", count: 3 }, { timeUnit: "hour", count: 6 }, { timeUnit: "hour", count: 12 }, { timeUnit: "day", count: 1 }, { timeUnit: "day", count: 2 }, { timeUnit: "day", count: 3 }, { timeUnit: "day", count: 4 }, { timeUnit: "day", count: 5 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "month", count: 2 }, { timeUnit: "month", count: 3 }, { timeUnit: "month", count: 6 }, { timeUnit: "year", count: 1 }, { timeUnit: "year", count: 2 }, { timeUnit: "year", count: 5 }, { timeUnit: "year", count: 10 }, { timeUnit: "year", count: 50 }, { timeUnit: "year", count: 100 }, { timeUnit: "year", count: 200 }, { timeUnit: "year", count: 500 }, { timeUnit: "year", count: 1e3 }, { timeUnit: "year", count: 2e3 }, { timeUnit: "year", count: 5e3 }, { timeUnit: "year", count: 1e4 }, { timeUnit: "year", count: 1e5 }], c = { millisecond: l$1.translate("_date_millisecond"), second: l$1.translate("_date_second"), minute: l$1.translate("_date_minute"), hour: l$1.translate("_date_hour"), day: l$1.translate("_date_day"), week: l$1.translate("_date_day"), month: l$1.translate("_date_month"), year: l$1.translate("_date_year") }, u2 = { millisecond: l$1.translate("_date_millisecond"), second: l$1.translate("_date_second"), minute: l$1.translate("_date_minute"), hour: l$1.translate("_date_day"), day: l$1.translate("_date_day"), week: l$1.translate("_date_day"), month: l$1.translate("_date_month") + " " + l$1.translate("_date_year"), year: l$1.translate("_date_year") }, g$12 = { millisecond: l$1.translate("_date_millisecond_full"), second: l$1.translate("_date_second_full"), minute: l$1.translate("_date_minute_full"), hour: l$1.translate("_date_hour_full"), day: l$1.translate("_date_day_full"), week: l$1.translate("_date_week_full"), month: l$1.translate("_date_month_full"), year: l$1.translate("_date_year") };
    h("CategoryDateAxis").setAll({ markUnitChange: true, gridIntervals: S(d), dateFormats: F(c), periodChangeDateFormats: F(u2) }), h("DateAxis").setAll({ maxZoomFactor: null, strictMinMax: true, startLocation: 0, endLocation: 1, markUnitChange: true, groupData: false, groupCount: 500, gridIntervals: S(d), dateFormats: F(c), periodChangeDateFormats: F(u2), tooltipDateFormats: g$12, groupIntervals: [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 10 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 10 }, { timeUnit: "hour", count: 1 }, { timeUnit: "day", count: 1 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "year", count: 1 }], fillRule: (e3) => {
      const t = e3.get("axisFill");
      if (t) {
        const i2 = e3.component, s2 = e3.get("value"), a2 = e3.get("endValue"), o2 = i2.intervalDuration(), n2 = i2.getPrivate("baseInterval"), r2 = i2.getPrivate("gridInterval", n2);
        let l2 = i2.getPrivate("min", 0);
        if (l2 = I(new Date(l2), r2.timeUnit, r2.count, this._root.locale.firstDayOfWeek, this._root.utc, void 0, this._root.timezone).getTime(), null != s2 && null != a2) {
          const e4 = Math.round(Math.round((s2 - l2) / o2)) / 2;
          e4 == Math.round(e4) ? t.setPrivate("visible", true) : t.setPrivate("visible", false);
        }
      }
    } }), h("GaplessDateAxis").setAll({ fillRule: (e3) => {
      const t = e3.get("axisFill");
      if (t) {
        const i2 = e3.get("index");
        let a2 = false;
        g(i2) && i2 % 2 != 0 || (a2 = true), t.setPrivate("visible", a2);
      }
    } }), h("ValueAxis").setAll({ baseValue: 0, logarithmic: false, strictMinMax: false, autoZoom: true, fillRule: (e3) => {
      const t = e3.get("axisFill");
      if (t) {
        const i2 = e3.component, a2 = e3.get("value"), o2 = i2.getPrivate("step");
        g(a2) && g(o2) && (he$1(a2 / o2 / 2, 5) == Math.round(a2 / o2 / 2) ? t.setPrivate("visible", false) : t.setPrivate("visible", true));
      }
    } }), h("DurationAxis").setAll({ baseUnit: "second" }), h("XYSeries").setAll({ maskBullets: true, stackToNegative: true, locationX: 0.5, locationY: 0.5, snapTooltip: false, openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close", seriesTooltipTarget: "series" }), h("BaseColumnSeries").setAll({ adjustBulletPosition: true }), h("ColumnSeries").setAll({ clustered: true }), h("RoundedRectangle", ["series", "column"]).setAll({ position: "absolute", isMeasured: false, width: i(70), height: i(70), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), h("LineSeries").setAll({ connect: true, autoGapCount: 1.1, stackToNegative: false }), h("Graphics", ["series", "stroke"]).setAll({ position: "absolute", strokeWidth: 1, strokeOpacity: 1, isMeasured: false }), h("Graphics", ["series", "fill"]).setAll({ visible: false, fillOpacity: 0, position: "absolute", strokeWidth: 0, strokeOpacity: 0, isMeasured: false }), h("Graphics", ["line", "series", "legend", "marker", "stroke"]).setAll({ draw: (e3, t) => {
      const i2 = t.parent;
      if (i2) {
        const t2 = i2.height(), s2 = i2.width();
        e3.moveTo(0, t2 / 2), e3.lineTo(s2, t2 / 2);
      }
    } });
    {
      const t = h("Graphics", ["line", "series", "legend", "marker", "stroke"]).states.create("disabled", {});
      l(t, "stroke", e2, "disabled");
    }
    h("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({ draw: (e3, t) => {
      const i2 = t.parent;
      if (i2) {
        const t2 = i2.height(), s2 = i2.width();
        e3.moveTo(0, 0), e3.lineTo(s2, 0), e3.lineTo(s2, t2), e3.lineTo(0, t2), e3.lineTo(0, 0);
      }
    } });
    {
      const t = h("Graphics", ["line", "series", "legend", "marker", "fill"]).states.create("disabled", {});
      l(t, "stroke", e2, "disabled");
    }
    h("SmoothedXYLineSeries").setAll({ tension: 0.5 }), h("SmoothedXLineSeries").setAll({ tension: 0.5 }), h("SmoothedYLineSeries").setAll({ tension: 0.5 }), h("Candlestick").setAll({ position: "absolute", isMeasured: false, width: i(50), height: i(50), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), h("OHLC").setAll({ width: i(80), height: i(80) }), h("CandlestickSeries").setAll({ lowValueXGrouped: "low", lowValueYGrouped: "low", highValueXGrouped: "high", highValueYGrouped: "high", openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close" });
    {
      const t = h("Rectangle", ["column", "autocolor"]).states.create("riseFromOpen", {});
      l(t, "fill", e2, "positive"), l(t, "stroke", e2, "positive");
    }
    {
      const t = h("Rectangle", ["column", "autocolor"]).states.create("dropFromOpen", {});
      l(t, "fill", e2, "negative"), l(t, "stroke", e2, "negative");
    }
    h("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromOpen", { fillOpacity: 0 }), h("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromOpen", { fillOpacity: 1 });
    {
      const t = h("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromPrevious", {});
      l(t, "fill", e2, "positive"), l(t, "stroke", e2, "positive");
    }
    {
      const t = h("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromPrevious", {});
      l(t, "fill", e2, "negative"), l(t, "stroke", e2, "negative");
    }
    h("RoundedRectangle", ["rangegrip"]).setAll({ strokeOpacity: 0, fillOpacity: 0, strokeWidth: 1, width: 12, height: 12 });
    {
      const t = h("Graphics", ["rangegrip", "button", "icon"]);
      t.setAll({ interactive: false, crisp: true, strokeOpacity: 0.5, draw: (e3) => {
        e3.moveTo(0, 0.5), e3.lineTo(0, 12.5), e3.moveTo(2, 0.5), e3.lineTo(2, 12.5), e3.moveTo(4, 0.5), e3.lineTo(4, 12.5);
      } }), l(t, "stroke", e2, "secondaryButtonText");
    }
    h("Button", ["rangegrip"]).setAll({ draggable: true, paddingTop: 0, paddingBottom: 0 }), h("Button", ["rangegrip", "vertical"]).setAll({ rotation: 90, cursorOverStyle: "ns-resize", centerX: a }), h("Button", ["rangegrip", "horizontal"]).setAll({ cursorOverStyle: "ew-resize", centerX: a }), h("Button", ["rangegrip", "vertical", "left"]).setAll({ centerY: r }), h("Button", ["rangegrip", "vertical", "right"]).setAll({ centerY: 0 }), h("Button", ["rangegrip", "horizontal", "top"]).setAll({ centerY: 0 }), h("Button", ["rangegrip", "horizontal", "bottom"]).setAll({ centerY: r });
  }
}
class oe extends R {
  constructor() {
    super(...arguments), Object.defineProperty(this, "xAxes", { enumerable: true, configurable: true, writable: true, value: new ie$1() }), Object.defineProperty(this, "yAxes", { enumerable: true, configurable: true, writable: true, value: new ie$1() }), Object.defineProperty(this, "topAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(ii.new(this._root, { width: r, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "yAxesAndPlotContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(ii.new(this._root, { width: r, height: r, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "bottomAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(ii.new(this._root, { width: r, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "leftAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(ii.new(this._root, { height: r, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "plotsContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(ii.new(this._root, { width: r, height: r, maskContent: false })) }), Object.defineProperty(this, "plotContainer", { enumerable: true, configurable: true, writable: true, value: this.plotsContainer.children.push(ii.new(this._root, { width: r, height: r })) }), Object.defineProperty(this, "topPlotContainer", { enumerable: true, configurable: true, writable: true, value: this.plotsContainer.children.push(ii.new(this._root, { width: r, height: r })) }), Object.defineProperty(this, "gridContainer", { enumerable: true, configurable: true, writable: true, value: this.plotContainer.children.push(ii.new(this._root, { width: r, height: r, isMeasured: false })) }), Object.defineProperty(this, "topGridContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { width: r, height: r, isMeasured: false }) }), Object.defineProperty(this, "rightAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(ii.new(this._root, { height: r, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "axisHeadersContainer", { enumerable: true, configurable: true, writable: true, value: this.plotContainer.children.push(ii.new(this._root, {})) }), Object.defineProperty(this, "zoomOutButton", { enumerable: true, configurable: true, writable: true, value: this.topPlotContainer.children.push(o.new(this._root, { themeTags: ["zoom"], icon: Ke.new(this._root, { themeTags: ["button", "icon"] }) })) }), Object.defineProperty(this, "_movePoint", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_wheelDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_otherCharts", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_movePoints", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_downStartX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEndX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downStartY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEndY", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this._defaultThemes.push(ae.new(this._root)), super._afterNew(), this._disposers.push(this.xAxes), this._disposers.push(this.yAxes);
    const e2 = this._root;
    let t = this._root.verticalLayout;
    const i2 = this.zoomOutButton;
    i2.events.on("click", () => {
      this.zoomOut();
    }), i2.hide(0), i2.states.lookup("default").set("opacity", 1), this.chartContainer.set("layout", t);
    const s2 = this.plotContainer;
    s2.children.push(this.seriesContainer), this._disposers.push(this._processAxis(this.xAxes, this.bottomAxesContainer)), this._disposers.push(this._processAxis(this.yAxes, this.leftAxesContainer)), s2.children.push(this.topGridContainer), s2.children.push(this.bulletsContainer), s2.set("interactive", true), s2.set("interactiveChildren", false), s2.set("background", ze.new(e2, { themeTags: ["xy", "background"], fill: zt.fromHex(0), fillOpacity: 0 })), this._disposers.push(s2.events.on("pointerdown", (e3) => {
      this._handlePlotDown(e3);
    })), this._disposers.push(s2.events.on("globalpointerup", (e3) => {
      this._handlePlotUp(e3);
    })), this._disposers.push(s2.events.on("globalpointermove", (e3) => {
      this._handlePlotMove(e3);
    })), this._maskGrid(), this._setUpTouch();
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pinchZoomX") || this.isDirty("pinchZoomY") || this.get("panX") || this.get("panY")) && this._setUpTouch();
  }
  _setUpTouch() {
    this.plotContainer._display.cancelTouch || (this.plotContainer._display.cancelTouch = !!(this.get("pinchZoomX") || this.get("pinchZoomY") || this.get("panX") || this.get("panY")));
  }
  _maskGrid() {
    this.gridContainer.set("maskContent", true), this.topGridContainer.set("maskContent", true);
  }
  _removeSeries(e2) {
    e2._unstack(), e2._posXDp && e2._posXDp.dispose(), e2._posYDp && e2._posYDp.dispose(), e2.set("baseAxis", void 0);
    const t = e2.get("xAxis");
    t && (x$1(t.series, e2), t.markDirtyExtremes());
    const i2 = e2.get("yAxis");
    i2 && (x$1(i2.series, e2), i2.markDirtyExtremes());
    const s2 = this.get("cursor");
    if (s2) {
      const t2 = s2.get("snapToSeries");
      t2 && x$1(t2, e2);
    }
    super._removeSeries(e2);
  }
  handleWheel(e2) {
    const t = this.get("wheelX"), i2 = this.get("wheelY"), s2 = this.plotContainer, a2 = e2.originalEvent;
    if (!ht(a2, this))
      return;
    a2.preventDefault();
    const o2 = s2.toLocal(e2.point), n2 = this.get("wheelStep", 0.2), r2 = a2.deltaY / 100, l2 = a2.deltaX / 100, h = this.get("wheelZoomPositionX"), d = this.get("wheelZoomPositionY");
    "zoomX" !== t && "zoomXY" !== t || 0 == l2 || this.xAxes.each((e3) => {
      if (e3.get("zoomX")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), a3 = e3.fixPosition(o2.x / s2.width());
        null != h && (a3 = h);
        let r3 = t2 - n2 * (i3 - t2) * l2 * a3, d2 = i3 + n2 * (i3 - t2) * l2 * (1 - a3);
        1 / (d2 - r3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(r3, d2));
      }
    }), "zoomX" !== i2 && "zoomXY" !== i2 || 0 == r2 || this.xAxes.each((e3) => {
      if (e3.get("zoomX")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), a3 = e3.fixPosition(o2.x / s2.width());
        null != h && (a3 = h);
        let l3 = t2 - n2 * (i3 - t2) * r2 * a3, d2 = i3 + n2 * (i3 - t2) * r2 * (1 - a3);
        1 / (d2 - l3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(l3, d2));
      }
    }), "zoomY" !== t && "zoomXY" !== t || 0 == l2 || this.yAxes.each((e3) => {
      if (e3.get("zoomY")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), a3 = e3.fixPosition(o2.y / s2.height());
        null != d && (a3 = d);
        let r3 = t2 - n2 * (i3 - t2) * l2 * a3, h2 = i3 + n2 * (i3 - t2) * l2 * (1 - a3);
        1 / (h2 - r3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(r3, h2));
      }
    }), "zoomY" !== i2 && "zoomXY" !== i2 || 0 == r2 || this.yAxes.each((e3) => {
      if (e3.get("zoomY")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), a3 = e3.fixPosition(o2.y / s2.height());
        null != d && (a3 = d);
        let l3 = t2 - n2 * (i3 - t2) * r2 * a3, h2 = i3 + n2 * (i3 - t2) * r2 * (1 - a3);
        1 / (h2 - l3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(l3, h2));
      }
    }), "panX" !== t && "panXY" !== t || 0 == l2 || this.xAxes.each((e3) => {
      if (e3.get("panX")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i3 - t2) * l2, a3 = t2 + s3, o3 = i3 + s3, r3 = this._fixWheel(a3, o3);
        a3 = r3[0], o3 = r3[1], this._handleWheelAnimation(e3.zoom(a3, o3));
      }
    }), "panX" !== i2 && "panXY" !== i2 || 0 == r2 || this.xAxes.each((e3) => {
      if (e3.get("panX")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i3 - t2) * r2, a3 = t2 + s3, o3 = i3 + s3, l3 = this._fixWheel(a3, o3);
        a3 = l3[0], o3 = l3[1], this._handleWheelAnimation(e3.zoom(a3, o3));
      }
    }), "panY" !== t && "panXY" !== t || 0 == l2 || this.yAxes.each((e3) => {
      if (e3.get("panY")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i3 - t2) * l2, a3 = t2 + s3, o3 = i3 + s3, r3 = this._fixWheel(a3, o3);
        a3 = r3[0], o3 = r3[1], this._handleWheelAnimation(e3.zoom(a3, o3));
      }
    }), "panY" !== i2 && "panXY" !== i2 || 0 == r2 || this.yAxes.each((e3) => {
      if (e3.get("panY")) {
        let t2 = e3.get("start"), i3 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i3 - t2) * r2, a3 = t2 - s3, o3 = i3 - s3, l3 = this._fixWheel(a3, o3);
        a3 = l3[0], o3 = l3[1], this._handleWheelAnimation(e3.zoom(a3, o3));
      }
    });
  }
  _handleSetWheel() {
    const e2 = this.get("wheelX"), t = this.get("wheelY"), i2 = this.plotContainer;
    "none" !== e2 || "none" !== t ? (this._wheelDp = i2.events.on("wheel", (i3) => {
      const s2 = i3.originalEvent;
      ("none" !== e2 && 0 != Math.abs(s2.deltaX) || "none" !== t && 0 != Math.abs(s2.deltaY)) && this.handleWheel(i3);
    }), this._disposers.push(this._wheelDp)) : this._wheelDp && this._wheelDp.dispose();
  }
  _getWheelSign(e2) {
    let t = 1;
    return e2.get("renderer").get("inversed") && (t = -1), t;
  }
  _fixWheel(e2, t) {
    const i2 = t - e2;
    return e2 < 0 && (t = (e2 = 0) + i2), t > 1 && (e2 = (t = 1) - i2), [e2, t];
  }
  _handlePlotDown(e2) {
    const t = e2.originalEvent;
    if (2 == t.button)
      return;
    const i2 = this.plotContainer;
    let s2 = i2.toLocal(e2.point);
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      if (t.pointerId && N(i2._downPoints).length > 0) {
        const e3 = this.xAxes.getIndex(0), t2 = this.yAxes.getIndex(0);
        e3 && (this._downStartX = e3.get("start", 0), this._downEndX = e3.get("end", 1)), t2 && (this._downStartY = t2.get("start", 0), this._downEndY = t2.get("end", 1));
      }
    }
    if ((this.get("panX") || this.get("panY")) && s2.x >= 0 && s2.y >= 0 && s2.x <= i2.width() && s2.y <= this.height()) {
      this._downPoint = { x: t.clientX, y: t.clientY };
      const i3 = this.get("panX"), s3 = this.get("panY");
      i3 && this.xAxes.each((e3) => {
        e3._panStart = e3.get("start"), e3._panEnd = e3.get("end");
      }), s3 && this.yAxes.each((e3) => {
        e3._panStart = e3.get("start"), e3._panEnd = e3.get("end");
      });
      const a2 = "panstarted";
      this.events.isEnabled(a2) && this.events.dispatch(a2, { type: a2, target: this, originalEvent: e2.originalEvent });
    }
  }
  _handleWheelAnimation(e2) {
    e2 ? e2.events.on("stopped", () => {
      this._dispatchWheelAnimation();
    }) : this._dispatchWheelAnimation();
  }
  _dispatchWheelAnimation() {
    const e2 = "wheelended";
    this.events.isEnabled(e2) && this.events.dispatch(e2, { type: e2, target: this });
  }
  _handlePlotUp(e2) {
    const t = this._downPoint;
    if (t && (this.get("panX") || this.get("panY"))) {
      let i2 = this.plotContainer.toLocal(e2.point);
      if (i2.x == t.x && i2.y == t.y) {
        const t2 = "pancancelled";
        this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this, originalEvent: e2.originalEvent });
      }
      const s2 = "panended";
      this.events.isEnabled(s2) && this.events.dispatch(s2, { type: s2, target: this, originalEvent: e2.originalEvent });
    }
    this._downPoint = void 0, this.xAxes.each((e3) => {
      e3._isPanning = false;
    }), this.yAxes.each((e3) => {
      e3._isPanning = false;
    });
  }
  _handlePlotMove(e2) {
    const t = this.plotContainer;
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const i3 = e2.originalEvent.pointerId;
      if (i3 && (this._movePoints[i3] = e2.point, N(t._downPoints).length > 1))
        return void this._handlePinch();
    }
    let i2 = this._downPoint;
    if (i2) {
      i2 = t.toLocal(this._root.documentPointToRoot(i2));
      let s2 = t.toLocal(e2.point);
      const a2 = this.get("panX"), o2 = this.get("panY");
      if (a2) {
        let e3 = this.get("scrollbarX");
        e3 && e3.events.disableType("rangechanged"), this.xAxes.each((e4) => {
          if (e4.get("panX")) {
            e4._isPanning = true;
            let a3 = e4._panStart, o3 = e4._panEnd, n2 = (o3 - a3) * (i2.x - s2.x) / t.width();
            e4.get("renderer").get("inversed") && (n2 *= -1);
            let r2 = a3 + n2, l2 = o3 + n2;
            l2 - r2 < 1 + 2 * e4.get("maxDeviation", 1) && (e4.set("start", r2), e4.set("end", l2));
          }
        }), e3 && e3.events.enableType("rangechanged");
      }
      if (o2) {
        let e3 = this.get("scrollbarY");
        e3 && e3.events.disableType("rangechanged"), this.yAxes.each((e4) => {
          if (e4.get("panY")) {
            e4._isPanning = true;
            let a3 = e4._panStart, o3 = e4._panEnd, n2 = (o3 - a3) * (i2.y - s2.y) / t.height();
            e4.get("renderer").get("inversed") && (n2 *= -1);
            let r2 = a3 - n2, l2 = o3 - n2;
            l2 - r2 < 1 + 2 * e4.get("maxDeviation", 1) && (e4.set("start", r2), e4.set("end", l2));
          }
        }), e3 && e3.events.enableType("rangechanged");
      }
    }
  }
  _handlePinch() {
    const e2 = this.plotContainer;
    let t = 0, i2 = [], s2 = [];
    if (W(e2._downPoints, (e3, a2) => {
      i2[t] = a2;
      let o2 = this._movePoints[e3];
      o2 && (s2[t] = o2), t++;
    }), i2.length > 1 && s2.length > 1) {
      const t2 = e2.width(), a2 = e2.height();
      let o2 = i2[0], n2 = i2[1], r2 = s2[0], l2 = s2[1];
      if (o2 && n2 && r2 && l2) {
        if (r2 = e2.toLocal(r2), l2 = e2.toLocal(l2), o2 = e2.toLocal(o2), n2 = e2.toLocal(n2), this.get("pinchZoomX")) {
          const e3 = this._downStartX, i3 = this._downEndX;
          if (null != e3 && null != i3) {
            o2.x > n2.x && ([o2, n2] = [n2, o2], [r2, l2] = [l2, r2]);
            let s3 = e3 + o2.x / t2 * (i3 - e3), a3 = e3 + n2.x / t2 * (i3 - e3), h = e3 + r2.x / t2 * (i3 - e3), d = e3 + l2.x / t2 * (i3 - e3), c = Math.max(1e-3, a3 - s3) / Math.max(1e-3, d - h), u2 = e3 * c + s3 - h * c, g2 = i3 * c + a3 - d * c;
            this.xAxes.each((e4) => {
              let t3 = e4.fixPosition(u2), i4 = e4.fixPosition(g2);
              e4.zoom(t3, i4, 0);
            });
          }
        }
        if (this.get("pinchZoomY")) {
          const e3 = this._downStartY, t3 = this._downEndY;
          if (null != e3 && null != t3) {
            o2.y < n2.y && ([o2, n2] = [n2, o2], [r2, l2] = [l2, r2]);
            let i3 = e3 + (1 - o2.y / a2) * (t3 - e3), s3 = e3 + (1 - n2.y / a2) * (t3 - e3), h = e3 + (1 - r2.y / a2) * (t3 - e3), d = e3 + (1 - l2.y / a2) * (t3 - e3), c = Math.max(1e-3, s3 - i3) / Math.max(1e-3, d - h), u2 = e3 * c + i3 - h * c, g2 = t3 * c + s3 - d * c;
            this.yAxes.each((e4) => {
              let t4 = e4.fixPosition(u2), i4 = e4.fixPosition(g2);
              e4.zoom(t4, i4, 0);
            });
          }
        }
      }
    }
  }
  _handleCursorPosition() {
    const e2 = this.get("cursor");
    if (e2) {
      const t = e2.getPrivate("point");
      let i2 = e2.get("snapToSeries");
      if (e2._downPoint && (i2 = void 0), i2 && t) {
        const s2 = e2.get("snapToSeriesBy"), a2 = [];
        w(i2, (e3) => {
          if (!e3.isHidden() && !e3.isHiding())
            if ("x!" != s2 && "y!" != s2) {
              const t2 = e3.startIndex(), i3 = e3.endIndex();
              for (let s3 = t2; s3 < i3; s3++) {
                const t3 = e3.dataItems[s3];
                t3 && !t3.isHidden() && a2.push(t3);
              }
            } else {
              const t2 = e3.get("tooltipDataItem");
              t2 && a2.push(t2);
            }
        });
        let o2, n2 = 1 / 0;
        if (w(a2, (e3) => {
          const i3 = e3.get("point");
          if (i3) {
            let a3 = 0;
            a3 = "x" == s2 || "x!" == s2 ? Math.abs(t.x - i3.x) : "y" == s2 || "y!" == s2 ? Math.abs(t.y - i3.y) : Math.hypot(t.x - i3.x, t.y - i3.y), a3 < n2 && (n2 = a3, o2 = e3);
          }
        }), w(i2, (e3) => {
          const t2 = e3.get("tooltip");
          t2 && t2._setDataItem(void 0);
        }), o2) {
          let t2 = o2.component;
          t2.showDataItemTooltip(o2);
          const i3 = o2.get("point");
          i3 && e2.handleMove(t2.toGlobal({ x: i3.x - t2.x(), y: i3.y - t2.y() }), true);
        }
      }
    }
  }
  _updateCursor() {
    let e2 = this.get("cursor");
    e2 && e2.updateCursor();
  }
  _addCursor(e2) {
    this.plotContainer.children.push(e2);
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.series.each((e2) => {
      this._colorize(e2);
    }), (this.isDirty("wheelX") || this.isDirty("wheelY")) && this._handleSetWheel(), this.isDirty("cursor")) {
      const e2 = this._prevSettings.cursor, t = this.get("cursor");
      t !== e2 && (this._disposeProperty("cursor"), e2 && e2.dispose(), t && (t._setChart(this), this._addCursor(t), this._pushPropertyDisposer("cursor", t.events.on("selectended", () => {
        this._handleCursorSelectEnd();
      }))), this._prevSettings.cursor = t);
    }
    if (this.isDirty("scrollbarX")) {
      const e2 = this._prevSettings.scrollbarX, t = this.get("scrollbarX");
      t !== e2 && (this._disposeProperty("scrollbarX"), e2 && e2.dispose(), t && (t.parent || this.topAxesContainer.children.push(t), this._pushPropertyDisposer("scrollbarX", t.events.on("rangechanged", (e3) => {
        this._handleScrollbar(this.xAxes, e3.start, e3.end, e3.grip);
      })), t.setPrivate("positionTextFunction", (e3) => {
        const t2 = this.xAxes.getIndex(0);
        return t2 && t2.getTooltipText(e3, false) || "";
      })), this._prevSettings.scrollbarX = t);
    }
    if (this.isDirty("scrollbarY")) {
      const e2 = this._prevSettings.scrollbarY, t = this.get("scrollbarY");
      t !== e2 && (this._disposeProperty("scrollbarY"), e2 && e2.dispose(), t && (t.parent || this.rightAxesContainer.children.push(t), this._pushPropertyDisposer("scrollbarY", t.events.on("rangechanged", (e3) => {
        this._handleScrollbar(this.yAxes, e3.start, e3.end, e3.grip);
      })), t.setPrivate("positionTextFunction", (e3) => {
        const t2 = this.yAxes.getIndex(0);
        return t2 && t2.getTooltipText(e3, false) || "";
      })), this._prevSettings.scrollbarY = t);
    }
    this._handleZoomOut();
  }
  _processSeries(e2) {
    super._processSeries(e2);
    const t = e2.get("xAxis"), i2 = e2.get("yAxis");
    O(t.series, e2), O(i2.series, e2), e2._posXDp = e2.addDisposer(t.events.on("positionchanged", () => {
      e2._fixPosition();
    })), e2._posXDp = e2.addDisposer(i2.events.on("positionchanged", () => {
      e2._fixPosition();
    })), e2.get("baseAxis") || (i2.isType("CategoryAxis") || i2.isType("DateAxis") ? e2.set("baseAxis", i2) : e2.set("baseAxis", t)), e2.get("stacked") && (e2._markDirtyKey("stacked"), w(e2.dataItems, (e3) => {
      e3.set("stackToItemY", void 0), e3.set("stackToItemX", void 0);
    })), e2._markDirtyAxes(), i2.markDirtyExtremes(), t.markDirtyExtremes(), t._seriesAdded = true, i2._seriesAdded = true, this._colorize(e2);
  }
  _colorize(e2) {
    const t = this.get("colors");
    if (t && null == e2.get("fill")) {
      const i2 = t.next();
      e2._setSoft("stroke", i2), e2._setSoft("fill", i2);
    }
  }
  _handleCursorSelectEnd() {
    const e2 = this.get("cursor"), t = e2.get("behavior"), i2 = e2.getPrivate("downPositionX", 0), s2 = e2.getPrivate("downPositionY", 0), a2 = Math.min(1, Math.max(0, e2.getPrivate("positionX", 0.5))), o2 = Math.min(1, Math.max(0, e2.getPrivate("positionY", 0.5)));
    this.xAxes.each((e3) => {
      if ("zoomX" === t || "zoomXY" === t) {
        let t2 = e3.toAxisPosition(i2), s3 = e3.toAxisPosition(a2);
        e3.zoom(t2, s3);
      }
      e3.setPrivate("updateScrollbar", true);
    }), this.yAxes.each((e3) => {
      if ("zoomY" === t || "zoomXY" === t) {
        let t2 = e3.toAxisPosition(s2), i3 = e3.toAxisPosition(o2);
        e3.zoom(t2, i3);
      }
      e3.setPrivate("updateScrollbar", true);
    });
  }
  _handleScrollbar(e2, t, i2, s2) {
    e2.each((e3) => {
      let a2 = e3.fixPosition(t), o2 = e3.fixPosition(i2), n2 = e3.zoom(a2, o2, void 0, s2);
      const r2 = "updateScrollbar";
      e3.setPrivateRaw(r2, false), n2 ? n2.events.on("stopped", () => {
        e3.setPrivateRaw(r2, true);
      }) : e3.setPrivateRaw(r2, true);
    });
  }
  _processAxis(e2, t) {
    return e2.events.onAll((e3) => {
      if ("clear" === e3.type)
        w(e3.oldValues, (e4) => {
          this._removeAxis(e4);
        });
      else if ("push" === e3.type)
        t.children.push(e3.newValue), e3.newValue.processChart(this);
      else if ("setIndex" === e3.type)
        t.children.setIndex(e3.index, e3.newValue), e3.newValue.processChart(this);
      else if ("insertIndex" === e3.type)
        t.children.insertIndex(e3.index, e3.newValue), e3.newValue.processChart(this);
      else if ("removeIndex" === e3.type)
        this._removeAxis(e3.oldValue);
      else {
        if ("moveIndex" !== e3.type)
          throw new Error("Unknown IListEvent type");
        t.children.moveValue(e3.value, e3.newIndex), e3.value.processChart(this);
      }
    });
  }
  _removeAxis(e2) {
    if (!e2.isDisposed()) {
      const t = e2.parent;
      t && t.children.removeValue(e2);
      const i2 = e2.gridContainer, s2 = i2.parent;
      s2 && s2.children.removeValue(i2);
      const a2 = e2.topGridContainer, o2 = a2.parent;
      o2 && o2.children.removeValue(a2);
    }
  }
  _updateChartLayout() {
    const e2 = this.leftAxesContainer.width(), t = this.rightAxesContainer.width(), i2 = this.bottomAxesContainer;
    i2.set("paddingLeft", e2), i2.set("paddingRight", t);
    const s2 = this.topAxesContainer;
    s2.set("paddingLeft", e2), s2.set("paddingRight", t);
  }
  processAxis(e2) {
    this.get("cursor") && (this.addDisposer(e2.on("start", () => {
      this._updateCursor();
    })), this.addDisposer(e2.on("end", () => {
      this._updateCursor();
    })));
  }
  _handleAxisSelection(e2, t) {
    let i2 = e2.fixPosition(e2.get("start", 0)), s2 = e2.fixPosition(e2.get("end", 1));
    if (i2 > s2 && ([i2, s2] = [s2, i2]), -1 != this.xAxes.indexOf(e2)) {
      if (t || e2.getPrivate("updateScrollbar")) {
        let e3 = this.get("scrollbarX");
        !e3 || e3.getPrivate("isBusy") && !t || (e3.setRaw("start", i2), e3.setRaw("end", s2), e3.updateGrips());
      }
    } else if (-1 != this.yAxes.indexOf(e2) && (t || e2.getPrivate("updateScrollbar"))) {
      let e3 = this.get("scrollbarY");
      !e3 || e3.getPrivate("isBusy") && !t || (e3.setRaw("start", i2), e3.setRaw("end", s2), e3.updateGrips());
    }
    this._handleZoomOut();
  }
  _handleZoomOut() {
    let e2 = this.zoomOutButton;
    if (e2 && e2.parent) {
      let t = false;
      this.xAxes.each((e3) => {
        0 == e3.get("start") && 1 == e3.get("end") || (t = true);
      }), this.yAxes.each((e3) => {
        0 == e3.get("start") && 1 == e3.get("end") || (t = true);
      }), t ? e2.isHidden() && e2.show() : e2.hide();
    }
  }
  inPlot(e2) {
    const t = this.plotContainer, i2 = this.getPrivate("otherCharts", this._otherCharts), s2 = t.toGlobal(e2);
    if (e2.x >= -0.5 && e2.y >= -0.5 && e2.x <= t.width() + 0.5 && e2.y <= t.height() + 0.5)
      return true;
    if (i2)
      for (let a2 = i2.length - 1; a2 >= 0; a2--) {
        const e3 = i2[a2];
        if (e3 != this) {
          const t2 = e3.plotContainer, i3 = this._root.rootPointToDocument(s2), a3 = e3._root.documentPointToRoot(i3), o2 = t2.toLocal(a3);
          if (o2.x >= -0.1 && o2.y >= -0.1 && o2.x <= t2.width() + 0.1 && o2.y <= t2.height() + 0.1)
            return true;
        }
      }
    return false;
  }
  arrangeTooltips() {
    const e$1 = this.plotContainer, t = e$1.width(), i2 = e$1.height(), a2 = this.height();
    let o2 = e$1._display.toGlobal({ x: 0, y: 0 }), n2 = e$1._display.toGlobal({ x: t, y: i2 });
    const r2 = [];
    let l2, h, d = 0, c = 1 / 0, u2 = this._movePoint, g$12 = this.get("maxTooltipDistance"), p = this.get("maxTooltipDistanceBy", "xy");
    g(g$12) && this.series.each((e2) => {
      if (!e2.isHidden()) {
        const t2 = e2.get("tooltip");
        if (t2) {
          let i3 = t2.get("pointTo");
          if (i3) {
            let t3 = Math.hypot(u2.x - i3.x, u2.y - i3.y);
            "x" == p ? t3 = Math.abs(u2.x - i3.x) : "y" == p && (t3 = Math.abs(u2.y - i3.y)), t3 < c && (c = t3, l2 = e2, h = i3);
          }
        }
      }
    });
    const m = [];
    if (this.series.each((e2) => {
      const t2 = e2.get("tooltip");
      if (t2 && !t2.get("forceHidden")) {
        let i3 = false, s2 = t2.get("pointTo");
        if (s2) {
          if (g$12 >= 0) {
            let s3 = t2.get("pointTo");
            if (s3 && h && e2 != l2) {
              let e3 = Math.hypot(h.x - s3.x, h.y - s3.y);
              "x" == p ? e3 = Math.abs(h.x - s3.x) : "y" == p && (e3 = Math.abs(h.y - s3.y)), e3 > g$12 && (i3 = true);
            }
          } else
            -1 == g$12 && e2 != l2 && (i3 = true);
          this.inPlot(this._tooltipToLocal(s2)) && t2.dataItem ? i3 || (d += s2.y) : i3 = true, i3 || e2.isHidden() || e2.isHiding() ? t2.hide(0) : (t2.show(), r2.push(t2), m.push(e2));
        }
      }
    }), this.setPrivate("tooltipSeries", m), this.get("arrangeTooltips")) {
      const e$12 = this._root.tooltipContainer, t2 = r2.length;
      if (d / t2 > i2 / 2 + o2.y) {
        r2.sort((e2, t4) => Se(t4.get("pointTo").y, e2.get("pointTo").y));
        let t3 = n2.y;
        if (w(r2, (i3) => {
          let s2 = i3.height(), a3 = i3.get("centerY");
          a3 instanceof e && (s2 *= a3.value), s2 += i3.get("marginBottom", 0), i3.set("bounds", { left: o2.x, top: o2.y, right: n2.x, bottom: t3 }), i3.setPrivate("customData", { left: o2.x, top: o2.y, right: n2.x, bottom: t3 }), t3 = Math.min(t3 - s2, i3._fy - s2), i3.parent == e$12 && e$12.children.moveValue(i3, 0);
        }), t3 < 0) {
          r2.reverse();
          let e2 = t3;
          w(r2, (i3) => {
            let s2 = i3.get("bounds");
            if (s2) {
              let a3 = s2.top - t3, o3 = s2.bottom - t3;
              a3 < e2 && (a3 = e2, o3 = a3 + i3.height()), i3.set("bounds", { left: s2.left, top: a3, right: s2.right, bottom: o3 }), e2 = s2.bottom - t3 + i3.get("marginBottom", 0);
            }
          });
        }
      } else {
        r2.reverse(), r2.sort((e2, t4) => Se(e2.get("pointTo").y, t4.get("pointTo").y));
        let t3 = 0;
        if (w(r2, (i3) => {
          let s2 = i3.height(), r3 = i3.get("centerY");
          r3 instanceof e && (s2 *= r3.value), s2 += i3.get("marginBottom", 0), i3.set("bounds", { left: o2.x, top: t3, right: n2.x, bottom: Math.max(o2.y + a2, t3 + s2) }), i3.parent == e$12 && e$12.children.moveValue(i3, 0), t3 = Math.max(t3 + s2, i3._fy + s2);
        }), t3 > a2) {
          r2.reverse();
          let e2 = a2;
          w(r2, (i3) => {
            let s2 = i3.get("bounds");
            if (s2) {
              let o3 = s2.top - (a2 - t3), n3 = s2.bottom - (a2 - t3);
              n3 > e2 && (n3 = e2, o3 = n3 - i3.height()), i3.set("bounds", { left: s2.left, top: o3, right: s2.right, bottom: n3 }), e2 = n3 - i3.height() - i3.get("marginBottom", 0);
            }
          });
        }
      }
    }
  }
  _tooltipToLocal(e2) {
    return this.plotContainer.toLocal(e2);
  }
  zoomOut() {
    this.xAxes.each((e2) => {
      e2.setPrivate("updateScrollbar", true), e2.zoom(0, 1);
    }), this.yAxes.each((e2) => {
      e2.setPrivate("updateScrollbar", true), e2.zoom(0, 1);
    });
  }
}
Object.defineProperty(oe, "className", { enumerable: true, configurable: true, writable: true, value: "XYChart" }), Object.defineProperty(oe, "classNames", { enumerable: true, configurable: true, writable: true, value: R.classNames.concat([oe.className]) });
class ne extends Ke {
  _beforeChanged() {
    super._beforeChanged(), (this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
}
Object.defineProperty(ne, "className", { enumerable: true, configurable: true, writable: true, value: "Grid" }), Object.defineProperty(ne, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([ne.className]) });
class re extends ii {
  constructor() {
    super(...arguments), Object.defineProperty(this, "lineX", { enumerable: true, configurable: true, writable: true, value: this.children.push(ne.new(this._root, { themeTags: ["x"] })) }), Object.defineProperty(this, "lineY", { enumerable: true, configurable: true, writable: true, value: this.children.push(ne.new(this._root, { themeTags: ["y"] })) }), Object.defineProperty(this, "selection", { enumerable: true, configurable: true, writable: true, value: this.children.push(Ke.new(this._root, { themeTags: ["selection", "cursor"], layer: 30 })) }), Object.defineProperty(this, "_movePoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_lastPoint", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_tooltipX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_tooltipY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_toX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_toY", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["xy", "cursor"]), super._afterNew(), this.setAll({ width: r, height: r, isMeasured: true, position: "absolute" }), this.states.create("hidden", { visible: true, opacity: 0 }), this._drawLines(), this.setPrivateRaw("visible", false), this._disposers.push(this.setTimeout(() => {
      this.setPrivate("visible", true);
    }, 500)), this._disposers.push(this.lineX.events.on("positionchanged", () => {
      this._handleXLine();
    })), this._disposers.push(this.lineY.events.on("positionchanged", () => {
      this._handleYLine();
    })), this._disposers.push(this.lineX.events.on("focus", (e2) => this._handleLineFocus(e2.target))), this._disposers.push(this.lineX.events.on("blur", (e2) => this._handleLineBlur(e2.target))), this._disposers.push(this.lineY.events.on("focus", (e2) => this._handleLineFocus(e2.target))), this._disposers.push(this.lineY.events.on("blur", (e2) => this._handleLineBlur(e2.target))), q("keyboardevents") && this._disposers.push(Z(document, "keydown", (e2) => {
      this._handleLineMove(e2.keyCode);
    }));
  }
  _setUpTouch() {
    const e2 = this.chart;
    e2 && (e2.plotContainer._display.cancelTouch = "none" != this.get("behavior"));
  }
  _handleXLine() {
    let e2 = this.lineX.x(), t = true;
    (e2 < 0 || e2 > this.width()) && (t = false), this.lineX.setPrivate("visible", t);
  }
  _handleYLine() {
    let e2 = this.lineY.y(), t = true;
    (e2 < 0 || e2 > this.height()) && (t = false), this.lineY.setPrivate("visible", t);
  }
  _handleLineMove(e2) {
    let t = "", i2 = 0, s2 = 0.1;
    const a2 = this.chart;
    this._root.focused(this.lineX) ? (a2 && a2.xAxes.length && (s2 = a2.xAxes.getIndex(0).getCellWidthPosition()), i2 = this.getPrivate("positionX", 0), t = "positionX", 37 == e2 ? i2 -= s2 : 39 == e2 && (i2 += s2)) : this._root.focused(this.lineY) && (a2 && a2.yAxes.length && (s2 = a2.yAxes.getIndex(0).getCellWidthPosition()), i2 = this.getPrivate("positionY", 0), t = "positionY", 38 == e2 ? i2 -= s2 : 40 == e2 && (i2 += s2)), i2 < 0 ? i2 = 0 : i2 > 1 && (i2 = 1), "" != t && this.set(t, i2);
  }
  _handleLineFocus(e2) {
    this.setAll({ positionX: this.getPrivate("positionX"), positionY: this.getPrivate("positionY"), alwaysShow: true });
  }
  _handleLineBlur(e2) {
    this.setAll({ positionX: void 0, positionY: void 0, alwaysShow: false });
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("xAxis")) {
      this._tooltipX = false;
      const e2 = this.get("xAxis");
      if (e2) {
        const t = e2.get("tooltip");
        t && (this._tooltipX = true, this._disposers.push(t.on("pointTo", () => {
          this._updateXLine(t);
        })));
      }
    }
    if (this.isDirty("yAxis")) {
      this._tooltipY = false;
      const e2 = this.get("yAxis");
      if (e2) {
        const t = e2.get("tooltip");
        t && (this._tooltipY = true, this._disposers.push(t.on("pointTo", () => {
          this._updateYLine(t);
        })));
      }
    }
  }
  _handleSyncWith() {
    const e2 = this.chart;
    if (e2) {
      const t = this.get("syncWith"), i2 = [];
      t && w(t, (e3) => {
        const t2 = e3.chart;
        t2 && i2.push(t2);
      }), e2._otherCharts = i2;
    }
  }
  _updateChildren() {
    if (super._updateChildren(), this._handleSyncWith(), this.isDirty("positionX") || this.isDirty("positionY")) {
      const e2 = this.get("positionX"), t = this.get("positionY");
      null == e2 && null == t ? this.hide(0) : (this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0))), this.handleMove());
    }
  }
  _updateXLine(e2) {
    let t = he$1(this._display.toLocal(e2.get("pointTo", { x: 0, y: 0 })).x, 2);
    this._toX != t && (this.lineX.animate({ key: "x", to: t, duration: e2.get("animationDuration", 0), easing: e2.get("animationEasing") }), this._toX = t);
  }
  _updateYLine(e2) {
    let t = he$1(this._display.toLocal(e2.get("pointTo", { x: 0, y: 0 })).y, 2);
    this._toY != t && (this.lineY.animate({ key: "y", to: t, duration: e2.get("animationDuration", 0), easing: e2.get("animationEasing") }), this._toY = t);
  }
  _drawLines() {
    this.lineX.set("draw", (e2) => {
      e2.moveTo(0, 0), e2.lineTo(0, this.height());
    }), this.lineY.set("draw", (e2) => {
      e2.moveTo(0, 0), e2.lineTo(this.width(), 0);
    });
  }
  updateCursor() {
    this.get("alwaysShow") && (this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)))), this.handleMove();
  }
  _setChart(e2) {
    this.chart = e2, this._handleSyncWith();
    const t = e2.plotContainer;
    this.events.on("boundschanged", () => {
      this._disposers.push(this.setTimeout(() => {
        this.updateCursor();
      }, 50));
    }), q("touchevents") && (this._disposers.push(t.events.on("click", (e3) => {
      st(e3.originalEvent) && this._handleMove(e3);
    })), this._setUpTouch()), this._disposers.push(t.events.on("pointerdown", (e3) => {
      this._handleCursorDown(e3);
    })), this._disposers.push(t.events.on("globalpointerup", (e3) => {
      this._handleCursorUp(e3), e3.native || this.isHidden() || this._handleMove(e3);
    })), this._disposers.push(t.events.on("globalpointermove", (e3) => {
      (this.get("syncWith") || 0 != N(t._downPoints).length || e3.native || !this.isHidden()) && this._handleMove(e3);
    }));
    const i2 = this.parent;
    i2 && i2.children.moveValue(this.selection);
  }
  _inPlot(e2) {
    const t = this.chart;
    return !!t && t.inPlot(e2);
  }
  _handleCursorDown(e2) {
    if (2 == e2.originalEvent.button)
      return;
    const t = e2.point;
    let i2 = this._display.toLocal(t);
    const s2 = this.chart;
    if (this.selection.set("draw", () => {
    }), s2 && this._inPlot(i2)) {
      if (this._downPoint = i2, "none" != this.get("behavior")) {
        this.selection.show();
        const t3 = "selectstarted";
        this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this, originalEvent: e2.originalEvent });
      }
      let t2 = this._getPosition(i2).x, s3 = this._getPosition(i2).y;
      this.setPrivate("downPositionX", t2), this.setPrivate("downPositionY", s3);
    }
  }
  _handleCursorUp(e2) {
    if (this._downPoint) {
      const t = this.get("behavior", "none");
      if ("none" != t) {
        "z" === t.charAt(0) && this.selection.hide();
        const i2 = e2.point;
        let s2 = this._display.toLocal(i2);
        const a2 = this._downPoint, o2 = this.get("moveThreshold", 1);
        if (s2 && a2) {
          let i3 = false;
          if ("zoomX" !== t && "zoomXY" !== t && "selectX" !== t && "selectXY" !== t || Math.abs(s2.x - a2.x) > o2 && (i3 = true), "zoomY" !== t && "zoomXY" !== t && "selectY" !== t && "selectXY" !== t || Math.abs(s2.y - a2.y) > o2 && (i3 = true), i3) {
            const t2 = "selectended";
            this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this, originalEvent: e2.originalEvent });
          } else {
            const t2 = "selectcancelled";
            this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this, originalEvent: e2.originalEvent });
          }
        }
      }
    }
    this._downPoint = void 0;
  }
  _handleMove(e2) {
    if (this.getPrivate("visible")) {
      const t = this.chart;
      if (t && N(t.plotContainer._downPoints).length > 1)
        return void this.set("forceHidden", true);
      this.set("forceHidden", false);
      const i2 = e2.point, s2 = this._lastPoint;
      if (Math.round(s2.x) === Math.round(i2.x) && Math.round(s2.y) === Math.round(i2.y))
        return;
      this._lastPoint = i2, this.setPrivate("lastPoint", i2), this.handleMove({ x: i2.x, y: i2.y }, false, e2.originalEvent);
    }
  }
  _getPosition(e2) {
    return { x: e2.x / this.width(), y: e2.y / this.height() };
  }
  handleMove(e2, t, i2) {
    e2 || (e2 = this._movePoint);
    const a2 = this.get("alwaysShow");
    if (!e2)
      return void this.hide(0);
    this._movePoint = e2;
    let o2 = this._display.toLocal(e2), n2 = this.chart;
    if (n2 && (this._inPlot(o2) || this._downPoint)) {
      if (n2._movePoint = e2, this.isHidden()) {
        this.show();
        "z" == this.get("behavior", "").charAt(0) && this.selection.set("draw", () => {
        });
      }
      let r2 = o2.x, l2 = o2.y, h = this._getPosition(o2);
      this.setPrivate("point", o2);
      let d = this.get("snapToSeries");
      this._downPoint && (d = void 0);
      let c = this.get("positionX"), u2 = h.x;
      g(c) && (u2 = c);
      let g$12 = this.get("positionY"), p = h.y;
      g(g$12) && (p = g$12), this.setPrivate("positionX", u2), this.setPrivate("positionY", p);
      const m = this._getPoint(u2, p);
      if (r2 = m.x, l2 = m.y, n2.xAxes.each((e3) => {
        e3._handleCursorPosition(u2, d), a2 && e3.handleCursorShow();
      }), n2.yAxes.each((e3) => {
        e3._handleCursorPosition(p, d), a2 && e3.handleCursorShow();
      }), !t) {
        n2._handleCursorPosition();
        const t2 = "cursormoved";
        this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this, point: e2, originalEvent: i2 });
      }
      this._updateLines(r2, l2), n2.arrangeTooltips();
    } else if (!this._downPoint && !a2) {
      this.hide(0);
      const e3 = "cursorhidden";
      this.events.isEnabled(e3) && this.events.dispatch(e3, { type: e3, target: this });
    }
    this._downPoint && "none" != this.get("behavior") && this._updateSelection(o2);
  }
  _getPoint(e2, t) {
    return { x: this.width() * e2, y: this.height() * t };
  }
  _updateLines(e2, t) {
    this._tooltipX || this.lineX.set("x", e2), this._tooltipY || this.lineY.set("y", t), this._drawLines();
  }
  _updateSelection(e2) {
    const t = this.selection, i2 = this.get("behavior"), s2 = this.width(), a2 = this.height();
    e2.x < 0 && (e2.x = 0), e2.x > s2 && (e2.x = s2), e2.y < 0 && (e2.y = 0), e2.y > a2 && (e2.y = a2), t.set("draw", (t2) => {
      const o2 = this._downPoint;
      o2 && ("zoomXY" === i2 || "selectXY" === i2 ? (t2.moveTo(o2.x, o2.y), t2.lineTo(o2.x, e2.y), t2.lineTo(e2.x, e2.y), t2.lineTo(e2.x, o2.y), t2.lineTo(o2.x, o2.y)) : "zoomX" === i2 || "selectX" === i2 ? (t2.moveTo(o2.x, 0), t2.lineTo(o2.x, a2), t2.lineTo(e2.x, a2), t2.lineTo(e2.x, 0), t2.lineTo(o2.x, 0)) : "zoomY" !== i2 && "selectY" !== i2 || (t2.moveTo(0, o2.y), t2.lineTo(s2, o2.y), t2.lineTo(s2, e2.y), t2.lineTo(0, e2.y), t2.lineTo(0, o2.y)));
    });
  }
  _onHide() {
    if (this.isHidden()) {
      let e2 = this.chart;
      e2 && (e2.xAxes.each((e3) => {
        e3.handleCursorHide();
      }), e2.yAxes.each((e3) => {
        e3.handleCursorHide();
      }), e2.series.each((e3) => {
        e3.handleCursorHide();
      }));
    }
    super._onHide();
  }
  _onShow() {
    if (!this.isHidden()) {
      let e2 = this.chart;
      e2 && (e2.xAxes.each((e3) => {
        e3.handleCursorShow();
      }), e2.yAxes.each((e3) => {
        e3.handleCursorShow();
      }));
    }
    super._onShow();
  }
  _dispose() {
    super._dispose(), this.selection.dispose();
  }
}
function le(e2, t) {
  return null == e2 ? t : null == t ? e2 : t < e2 ? t : e2;
}
function he(e2, t) {
  return null == e2 ? t : null == t ? e2 : t > e2 ? t : e2;
}
Object.defineProperty(re, "className", { enumerable: true, configurable: true, writable: true, value: "XYCursor" }), Object.defineProperty(re, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([re.className]) });
class de extends D {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_xField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xOpenField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yOpenField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xLowField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xHighField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yLowField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yHighField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_axesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_stackDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_selectionProcessed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataSets", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_mainContainerMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_y", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_bullets", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "mainContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, {})) }), Object.defineProperty(this, "axisRanges", { enumerable: true, configurable: true, writable: true, value: new ee$1() }), Object.defineProperty(this, "_skipped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_couldStackTo", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_reallyStackedTo", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_stackedSeries", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_aLocationX0", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_aLocationX1", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_aLocationY0", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_aLocationY1", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_showBullets", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "valueXFields", { enumerable: true, configurable: true, writable: true, value: ["valueX", "openValueX", "lowValueX", "highValueX"] }), Object.defineProperty(this, "valueYFields", { enumerable: true, configurable: true, writable: true, value: ["valueY", "openValueY", "lowValueY", "highValueY"] }), Object.defineProperty(this, "_valueXFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueYFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueXShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueYShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "__valueXShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "__valueYShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_emptyDataItem", { enumerable: true, configurable: true, writable: true, value: new g$1(this, void 0, {}) }), Object.defineProperty(this, "_dataSetId", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipFieldX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipFieldY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_posXDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_posYDp", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this.fields.push("categoryX", "categoryY", "openCategoryX", "openCategoryY"), this.valueFields.push("valueX", "valueY", "openValueX", "openValueY", "lowValueX", "lowValueY", "highValueX", "highValueY"), this._setRawDefault("vcx", 1), this._setRawDefault("vcy", 1), this._setRawDefault("valueXShow", "valueXWorking"), this._setRawDefault("valueYShow", "valueYWorking"), this._setRawDefault("openValueXShow", "openValueXWorking"), this._setRawDefault("openValueYShow", "openValueYWorking"), this._setRawDefault("lowValueXShow", "lowValueXWorking"), this._setRawDefault("lowValueYShow", "lowValueYWorking"), this._setRawDefault("highValueXShow", "highValueXWorking"), this._setRawDefault("highValueYShow", "highValueYWorking"), this._setRawDefault("lowValueXGrouped", "low"), this._setRawDefault("lowValueYGrouped", "low"), this._setRawDefault("highValueXGrouped", "high"), this._setRawDefault("highValueYGrouped", "high"), super._afterNew(), this.set("maskContent", true), this._disposers.push(this.axisRanges.events.onAll((e2) => {
      if ("clear" === e2.type)
        w(e2.oldValues, (e3) => {
          this._removeAxisRange(e3);
        });
      else if ("push" === e2.type)
        this._processAxisRange(e2.newValue);
      else if ("setIndex" === e2.type)
        this._processAxisRange(e2.newValue);
      else if ("insertIndex" === e2.type)
        this._processAxisRange(e2.newValue);
      else if ("removeIndex" === e2.type)
        this._removeAxisRange(e2.oldValue);
      else {
        if ("moveIndex" !== e2.type)
          throw new Error("Unknown IStreamEvent type");
        this._processAxisRange(e2.value);
      }
    })), this.states.create("hidden", { opacity: 1, visible: false }), this.onPrivate("startIndex", () => {
      this.updateLegendValue();
    }), this.onPrivate("endIndex", () => {
      this.updateLegendValue();
    }), this._makeFieldNames();
  }
  _processAxisRange(e2) {
    const t = ii.new(this._root, {});
    e2.container = t, this.children.push(t), e2.series = this;
    const i2 = e2.axisDataItem;
    i2.setRaw("isRange", true);
    const s2 = i2.component;
    if (s2) {
      s2._processAxisRange(i2, ["range", "series"]);
      const e3 = i2.get("bullet");
      if (e3) {
        const t2 = e3.get("sprite");
        t2 && t2.setPrivate("visible", false);
      }
      const a2 = i2.get("axisFill");
      a2 && t.set("mask", a2), s2._seriesAxisRanges.push(i2);
    }
  }
  _removeAxisRange(e2) {
    const t = e2.axisDataItem, i2 = t.component;
    i2.disposeDataItem(t), x$1(i2._seriesAxisRanges, t);
    const s2 = e2.container;
    s2 && s2.dispose();
  }
  _updateFields() {
    super._updateFields(), this._valueXFields = [], this._valueYFields = [], this._valueXShowFields = [], this._valueYShowFields = [], this.__valueXShowFields = [], this.__valueYShowFields = [], this.valueXFields && w(this.valueXFields, (e2) => {
      if (this.get(e2 + "Field")) {
        this._valueXFields.push(e2);
        let t = this.get(e2 + "Show");
        this.__valueXShowFields.push(t), -1 != t.indexOf("Working") ? this._valueXShowFields.push(t.split("Working")[0]) : this._valueXShowFields.push(t);
      }
    }), this.valueYFields && w(this.valueYFields, (e2) => {
      if (this.get(e2 + "Field")) {
        this._valueYFields.push(e2);
        let t = this.get(e2 + "Show");
        this.__valueYShowFields.push(t), -1 != t.indexOf("Working") ? this._valueYShowFields.push(t.split("Working")[0]) : this._valueYShowFields.push(t);
      }
    });
  }
  _dispose() {
    super._dispose(), this._bullets = {};
    const e2 = this.chart;
    e2 && e2.series.removeValue(this), k$1(this.get("xAxis").series, this), k$1(this.get("yAxis").series, this);
  }
  _min(e2, t) {
    let i2 = le(this.getPrivate(e2), t);
    this.setPrivate(e2, i2);
  }
  _max(e2, t) {
    let i2 = he(this.getPrivate(e2), t);
    this.setPrivate(e2, i2);
  }
  _shouldMakeBullet(e2) {
    const t = this.get("xAxis"), i2 = this.get("yAxis"), s2 = this.get("baseAxis");
    if (!t.inited || !i2.inited)
      return false;
    const a2 = this.get("minBulletDistance", 0);
    if (a2 > 0) {
      let e3 = this.startIndex(), o2 = this.endIndex() - e3;
      if (t == s2) {
        if (t.get("renderer").axisLength() / o2 < a2 / 5)
          return false;
      } else if (i2 == s2 && i2.get("renderer").axisLength() / o2 < a2 / 5)
        return false;
    }
    return null != e2.get(this._xField) && null != e2.get(this._yField);
  }
  _makeFieldNames() {
    const e2 = this.get("xAxis"), t = this.get("yAxis"), i2 = e2.getPrivate("name"), s2 = Ct(i2), a2 = t.getPrivate("name"), o2 = Ct(a2), n2 = e2.get("renderer").getPrivate("letter"), r2 = t.get("renderer").getPrivate("letter"), l2 = "open", h = "low", d = "high", c = "Show";
    "ValueAxis" === e2.className ? (this._xField = this.get(i2 + n2 + c), this._xOpenField = this.get(l2 + s2 + n2 + c), this._xLowField = this.get(h + s2 + n2 + c), this._xHighField = this.get(d + s2 + n2 + c)) : (this._xField = i2 + n2, this._xOpenField = l2 + s2 + n2, this._xLowField = h + s2 + n2, this._xHighField = d + s2 + n2), "ValueAxis" === t.className ? (this._yField = this.get(a2 + r2 + c), this._yOpenField = this.get(l2 + o2 + r2 + c), this._yLowField = this.get(h + o2 + r2 + c), this._yHighField = this.get(d + o2 + r2 + c)) : (this._yField = a2 + r2, this._yOpenField = l2 + o2 + r2, this._yLowField = h + o2 + r2, this._yHighField = d + o2 + r2);
  }
  _fixVC() {
    const e2 = this.get("xAxis"), t = this.get("yAxis"), i2 = this.get("baseAxis"), s2 = this.states.lookup("hidden"), a2 = this.get("sequencedInterpolation");
    if (s2) {
      let o2 = 0;
      a2 && (o2 = 0.999999999999), e2 === i2 ? s2.set("vcy", o2) : (t === i2 || s2.set("vcy", o2), s2.set("vcx", o2));
    }
  }
  _handleMaskBullets() {
    this.isDirty("maskBullets") && this.bulletsContainer.set("maskContent", this.get("maskBullets"));
  }
  _fixPosition() {
    const e2 = this.get("xAxis"), t = this.get("yAxis");
    this.set("x", e2.x() - pt(e2.get("centerX", 0), e2.width()) - e2.parent.get("paddingLeft", 0)), this.set("y", t.y() - pt(t.get("centerY", 0), t.height()) - t.parent.get("paddingTop", 0)), this.bulletsContainer.set("y", this.y()), this.bulletsContainer.set("x", this.x());
  }
  _prepareChildren() {
    super._prepareChildren(), this._bullets = {}, (this.isDirty("valueYShow") || this.isDirty("valueXShow") || this.isDirty("openValueYShow") || this.isDirty("openValueXShow") || this.isDirty("lowValueYShow") || this.isDirty("lowValueXShow") || this.isDirty("highValueYShow") || this.isDirty("highValueXShow")) && (this._updateFields(), this._makeFieldNames(), this._valuesDirty = true), (this.isDirty("xAxis") || this.isDirty("yAxis")) && (this._valuesDirty = true), this.set("width", this.get("xAxis").width()), this.set("height", this.get("yAxis").height()), this._handleMaskBullets();
    const e2 = this.get("xAxis"), t = this.get("yAxis"), i2 = this.get("baseAxis");
    let s2;
    switch (this.get("tooltipPositionX")) {
      case "open":
        s2 = this._xOpenField;
        break;
      case "low":
        s2 = this._xLowField;
        break;
      case "high":
        s2 = this._xHighField;
        break;
      default:
        s2 = this._xField;
    }
    this._tooltipFieldX = s2;
    let a2;
    switch (this.get("tooltipPositionY")) {
      case "open":
        a2 = this._yOpenField;
        break;
      case "low":
        a2 = this._yLowField;
        break;
      case "high":
        a2 = this._yHighField;
        break;
      default:
        a2 = this._yField;
    }
    this._tooltipFieldY = a2, this.isDirty("baseAxis") && this._fixVC(), this._fixPosition();
    const o2 = this.get("stacked");
    if (this.isDirty("stacked") && (o2 ? this._valuesDirty && !this._dataProcessed || this._stack() : this._unstack()), this._valuesDirty && !this._dataProcessed && (this._dataProcessed = true, o2 && this._stack(), w(this.dataItems, (i3) => {
      w(this._valueXShowFields, (e3) => {
        let t2 = i3.get(e3);
        null != t2 && (o2 && (t2 += this.getStackedXValue(i3, e3)), this._min("minX", t2), this._max("maxX", t2));
      }), w(this._valueYShowFields, (e3) => {
        let t2 = i3.get(e3);
        null != t2 && (o2 && (t2 += this.getStackedYValue(i3, e3)), this._min("minY", t2), this._max("maxY", t2));
      }), e2.processSeriesDataItem(i3, this._valueXFields), t.processSeriesDataItem(i3, this._valueYFields);
    }), e2._seriesValuesDirty = true, t._seriesValuesDirty = true, this.get("ignoreMinMax") || ((this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) && e2.markDirtyExtremes(), (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) && t.markDirtyExtremes()), this._markStakedDirtyStack(), this.get("tooltipDataItem") || this.updateLegendValue(void 0)), (this.isDirty("vcx") || this.isDirty("vcy")) && this._markStakedDirtyStack(), this._dataGrouped || (e2._groupSeriesData(this), t._groupSeriesData(this), this._dataGrouped = true), this._valuesDirty || this.isPrivateDirty("startIndex") || this.isPrivateDirty("adjustedStartIndex") || this.isPrivateDirty("endIndex") || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty || this._sizeDirty) {
      let s3 = this.startIndex(), a3 = this.endIndex(), o3 = this.get("minBulletDistance", 0);
      if (o3 > 0 && i2 && (i2.get("renderer").axisLength() / (a3 - s3) > o3 ? this._showBullets = true : this._showBullets = false), (this._psi != s3 || this._pei != a3 || this.isDirty("vcx") || this.isDirty("vcy") || this.isPrivateDirty("adjustedStartIndex") || this._stackDirty || this._valuesDirty) && !this._selectionProcessed) {
        this._selectionProcessed = true;
        const o4 = this.get("vcx", 1), n2 = this.get("vcy", 1), r2 = this.get("stacked", false), l2 = this.getPrivate("outOfSelection");
        if (i2 === e2 || !i2)
          if (t._calculateTotals(), this.setPrivateRaw("selectionMinY", void 0), this.setPrivateRaw("selectionMaxY", void 0), l2)
            t.markDirtySelectionExtremes();
          else
            for (let e3 = s3; e3 < a3; e3++)
              this.processYSelectionDataItem(this.dataItems[e3], n2, r2);
        if (i2 === t || !i2)
          if (e2._calculateTotals(), this.setPrivateRaw("selectionMinX", void 0), this.setPrivateRaw("selectionMaxX", void 0), l2)
            t.markDirtySelectionExtremes();
          else
            for (let e3 = s3; e3 < a3; e3++)
              this.processXSelectionDataItem(this.dataItems[e3], o4, r2);
        if ((i2 === e2 || !i2) && "valueYWorking" !== this.get("valueYShow")) {
          const e3 = this.getPrivate("selectionMinY");
          null != e3 && (this.setPrivateRaw("minY", e3), t.markDirtyExtremes());
          const i3 = this.getPrivate("selectionMaxY");
          null != i3 && (this.setPrivateRaw("maxY", i3), t.markDirtyExtremes());
        }
        if ((i2 === t || !i2) && "valueXWorking" !== this.get("valueXShow")) {
          const i3 = this.getPrivate("selectionMinX");
          null != i3 && (this.setPrivateRaw("minX", i3), t.markDirtyExtremes());
          const s4 = this.getPrivate("selectionMaxX");
          null != s4 && (this.setPrivateRaw("maxX", s4), e2.markDirtyExtremes());
        }
        (this.isPrivateDirty("selectionMinX") || this.isPrivateDirty("selectionMaxX")) && e2.markDirtySelectionExtremes(), (this.isPrivateDirty("selectionMinY") || this.isPrivateDirty("selectionMaxY")) && t.markDirtySelectionExtremes();
      }
    }
  }
  _makeRangeMask() {
    if (this.axisRanges.length > 0) {
      let e2 = this._mainContainerMask;
      null == e2 && (e2 = this.children.push(Ke.new(this._root, {})), this._mainContainerMask = e2, e2.set("draw", (t, i2) => {
        const s2 = this.parent;
        if (s2) {
          const e3 = this._root.container.width(), a2 = this._root.container.height();
          t.moveTo(-e3, -a2), t.lineTo(-e3, 2 * a2), t.lineTo(2 * e3, 2 * a2), t.lineTo(2 * e3, -a2), t.lineTo(-e3, -a2), this.axisRanges.each((e4) => {
            const a3 = e4.axisDataItem.get("axisFill");
            if (s2 && a3) {
              let e5 = a3.get("draw");
              e5 && e5(t, i2);
            }
          });
        }
        this.mainContainer._display.mask = e2._display;
      })), e2.markDirty(), e2._markDirtyKey("fill");
    } else
      this.mainContainer._display.mask = null;
  }
  _updateChildren() {
    super._updateChildren(), this._x = this.x(), this._y = this.y(), this._makeRangeMask();
  }
  _stack() {
    const e2 = this.chart;
    if (e2) {
      const t = e2.series.indexOf(this);
      if (this._couldStackTo = [], t > 0) {
        let i2;
        for (let s2 = t - 1; s2 >= 0 && (i2 = e2.series.getIndex(s2), i2.get("xAxis") !== this.get("xAxis") || i2.get("yAxis") !== this.get("yAxis") || i2.className !== this.className || (this._couldStackTo.push(i2), i2.get("stacked"))); s2--)
          ;
      }
      this._stackDataItems();
    }
  }
  _unstack() {
    W(this._reallyStackedTo, (e2, t) => {
      delete t._stackedSeries[this.uid];
    }), this._reallyStackedTo = {}, w(this.dataItems, (e2) => {
      e2.setRaw("stackToItemY", void 0), e2.setRaw("stackToItemX", void 0);
    });
  }
  _stackDataItems() {
    const e2 = this.get("baseAxis"), t = this.get("xAxis"), i2 = this.get("yAxis");
    let a2, o2;
    e2 === t ? (a2 = "valueY", o2 = "stackToItemY") : e2 === i2 && (a2 = "valueX", o2 = "stackToItemX");
    let n2 = this._couldStackTo.length, r2 = 0;
    const l2 = this.get("stackToNegative");
    this._reallyStackedTo = {}, w(this.dataItems, (e3) => {
      for (let t2 = 0; t2 < n2; t2++) {
        let i3 = this._couldStackTo[t2], n3 = i3.dataItems[r2], h = e3.get(a2);
        if (n3) {
          let t3 = n3.get(a2);
          if (l2) {
            if (!g(h))
              break;
            if (g(t3)) {
              if (h >= 0 && t3 >= 0) {
                e3.setRaw(o2, n3), this._reallyStackedTo[i3.uid] = i3, i3._stackedSeries[this.uid] = this;
                break;
              }
              if (h < 0 && t3 < 0) {
                e3.setRaw(o2, n3), this._reallyStackedTo[i3.uid] = i3, i3._stackedSeries[this.uid] = this;
                break;
              }
            }
          } else if (g(h) && g(t3)) {
            e3.setRaw(o2, n3), this._reallyStackedTo[i3.uid] = i3, i3._stackedSeries[this.uid] = this;
            break;
          }
        }
      }
      r2++;
    });
  }
  processXSelectionDataItem(e2, t, i2) {
    w(this.__valueXShowFields, (s2) => {
      let a2 = e2.get(s2);
      null != a2 && (i2 && (a2 += this.getStackedXValueWorking(e2, s2)), this._min("selectionMinX", a2), this._max("selectionMaxX", a2 * t));
    });
  }
  processYSelectionDataItem(e2, t, i2) {
    w(this.__valueYShowFields, (s2) => {
      let a2 = e2.get(s2);
      null != a2 && (i2 && (a2 += this.getStackedYValueWorking(e2, s2)), this._min("selectionMinY", a2), this._max("selectionMaxY", a2 * t));
    });
  }
  getStackedYValueWorking(e2, t) {
    const i2 = e2.get("stackToItemY");
    if (i2) {
      const e3 = i2.component;
      return i2.get(t, 0) * e3.get("vcy", 1) + this.getStackedYValueWorking(i2, t);
    }
    return 0;
  }
  getStackedXValueWorking(e2, t) {
    const i2 = e2.get("stackToItemX");
    if (i2) {
      const e3 = i2.component;
      return i2.get(t, 0) * e3.get("vcx", 1) + this.getStackedXValueWorking(i2, t);
    }
    return 0;
  }
  getStackedYValue(e2, t) {
    const i2 = e2.get("stackToItemY");
    return i2 ? i2.get(t, 0) + this.getStackedYValue(i2, t) : 0;
  }
  getStackedXValue(e2, t) {
    const i2 = e2.get("stackToItemX");
    return i2 ? i2.get(t, 0) + this.getStackedXValue(i2, t) : 0;
  }
  createLegendMarker(e2) {
    this.updateLegendMarker();
  }
  _markDirtyAxes() {
    this._axesDirty = true, this.markDirty();
  }
  _markDataSetDirty() {
    this._afterDataChange(), this._valuesDirty = true, this._dataProcessed = false, this._aggregatesCalculated = false, this.markDirty();
  }
  _clearDirty() {
    super._clearDirty(), this._axesDirty = false, this._selectionProcessed = false, this._stackDirty = false, this._dataProcessed = false;
  }
  _positionBullet(e2) {
    let t = e2.get("sprite");
    if (t) {
      let i2 = t.dataItem, s2 = e2.get("locationX", i2.get("locationX", 0.5)), a2 = e2.get("locationY", i2.get("locationY", 0.5)), o2 = this.get("xAxis"), n2 = this.get("yAxis"), r2 = o2.getDataItemPositionX(i2, this._xField, s2, this.get("vcx", 1)), l2 = n2.getDataItemPositionY(i2, this._yField, a2, this.get("vcy", 1)), h = this.getPoint(r2, l2), d = i2.get("left", h.x), c = i2.get("right", h.x), u2 = i2.get("top", h.y), g2 = i2.get("bottom", h.y), p = 0, m = 0, _2 = c - d, b = g2 - u2;
      if (this._shouldShowBullet(r2, l2)) {
        t.setPrivate("visible", !e2.getPrivate("hidden"));
        let o3 = e2.get("field");
        const n3 = this.get("baseAxis"), c2 = this.get("xAxis"), u3 = this.get("yAxis");
        if (null != o3) {
          let e3;
          n3 == c2 ? ("value" == o3 ? e3 = this._yField : "open" == o3 ? e3 = this._yOpenField : "high" == o3 ? e3 = this._yHighField : "low" == o3 && (e3 = this._yLowField), e3 && (l2 = u3.getDataItemPositionY(i2, e3, 0, this.get("vcy", 1)), h = u3.get("renderer").positionToPoint(l2), m = h.y, p = d + _2 * s2)) : ("value" == o3 ? e3 = this._xField : "open" == o3 ? e3 = this._xOpenField : "high" == o3 ? e3 = this._xHighField : "low" == o3 && (e3 = this._xLowField), e3 && (r2 = c2.getDataItemPositionX(i2, e3, 0, this.get("vcx", 1)), h = c2.get("renderer").positionToPoint(r2), p = h.x, m = g2 - b * a2));
        } else
          p = d + _2 * s2, m = g2 - b * a2;
        const x2 = e2.get("stacked");
        if (x2) {
          const e3 = this.chart;
          if (n3 == c2) {
            let i3 = this._bullets[r2 + "_" + l2];
            if (i3) {
              let s3 = i3.bounds(), a3 = t.localBounds(), o4 = m;
              m = s3.top, "down" == x2 ? m = s3.bottom - a3.top : "auto" == x2 ? e3 && (o4 < e3.plotContainer.height() / 2 ? m = s3.bottom - a3.top : m += a3.bottom) : m += a3.bottom;
            }
            this._bullets[r2 + "_" + l2] = t;
          } else {
            let i3 = this._bullets[r2 + "_" + l2];
            if (i3) {
              let s3 = i3.bounds(), a3 = t.localBounds(), o4 = p;
              p = s3.right, "down" == x2 ? p = s3.left - a3.right : "auto" == x2 ? e3 && (o4 < e3.plotContainer.width() / 2 ? p = s3.left - a3.right : p -= a3.left) : p -= a3.left;
            }
            this._bullets[r2 + "_" + l2] = t;
          }
        }
        t.isType("Label") && (t.setPrivate("maxWidth", Math.abs(_2)), t.setPrivate("maxHeight", Math.abs(b))), t.setAll({ x: p, y: m });
      } else
        t.setPrivate("visible", false);
    }
  }
  _shouldShowBullet(e2, t) {
    return this._showBullets;
  }
  setDataSet(e2) {
    if (this._dataSets[e2]) {
      this._handleDataSetChange(), this._dataItems = this._dataSets[e2], this._markDataSetDirty(), this._dataSetId = e2;
      const t = "datasetchanged";
      this.events.isEnabled(t) && this.events.dispatch(t, { type: t, target: this, id: e2 });
    }
  }
  resetGrouping() {
    W(this._dataSets, (e2, t) => {
      t != this._mainDataItems && w(t, (e3) => {
        this.disposeDataItem(e3);
      });
    }), this._dataSets = {}, this._dataItems = this.mainDataItems;
  }
  _handleDataSetChange() {
    w(this._dataItems, (e2) => {
      let t = e2.bullets;
      t && w(t, (e3) => {
        if (e3) {
          let t2 = e3.get("sprite");
          t2 && t2.setPrivate("visible", false);
        }
      });
    }), this._selectionProcessed = false;
  }
  show(e2) {
    const t = Object.create(null, { show: { get: () => super.show } });
    return n$1(this, void 0, void 0, function* () {
      this._fixVC();
      let i2 = [];
      i2.push(t.show.call(this, e2).then(() => {
        this._isShowing = false;
        let e3 = this.get("xAxis"), t2 = this.get("yAxis"), i3 = this.get("baseAxis");
        t2 !== i3 && t2.markDirtySelectionExtremes(), e3 !== i3 && e3.markDirtySelectionExtremes();
      })), i2.push(this.bulletsContainer.show(e2)), i2.push(this._sequencedShowHide(true, e2)), yield Promise.all(i2);
    });
  }
  hide(e2) {
    const t = Object.create(null, { hide: { get: () => super.hide } });
    return n$1(this, void 0, void 0, function* () {
      this._fixVC();
      let i2 = [];
      i2.push(t.hide.call(this, e2).then(() => {
        this._isHiding = false;
      })), i2.push(this.bulletsContainer.hide(e2)), i2.push(this._sequencedShowHide(false, e2)), yield Promise.all(i2);
    });
  }
  showDataItem(e2, t) {
    const i2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return n$1(this, void 0, void 0, function* () {
      const a2 = [i2.showDataItem.call(this, e2, t)];
      g(t) || (t = this.get("stateAnimationDuration", 0));
      const o2 = this.get("stateAnimationEasing");
      w(this._valueFields, (i3) => {
        a2.push(e2.animate({ key: i3 + "Working", to: e2.get(i3), duration: t, easing: o2 }).waitForStop());
      }), yield Promise.all(a2);
    });
  }
  hideDataItem(e2, t) {
    const i2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return n$1(this, void 0, void 0, function* () {
      const a2 = [i2.hideDataItem.call(this, e2, t)], o2 = this.states.create("hidden", {});
      g(t) || (t = o2.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const n2 = o2.get("stateAnimationEasing", this.get("stateAnimationEasing")), r2 = this.get("xAxis"), l2 = this.get("yAxis"), h = this.get("baseAxis"), d = this.get("stacked");
      if (h !== r2 && h || w(this._valueYFields, (i3) => {
        let o3 = l2.getPrivate("min"), r3 = l2.baseValue();
        g(o3) && o3 > r3 && (r3 = o3), d && (r3 = 0), null != e2.get(i3) && a2.push(e2.animate({ key: i3 + "Working", to: r3, duration: t, easing: n2 }).waitForStop());
      }), h === l2 || !h) {
        let i3 = r2.getPrivate("min"), o3 = r2.baseValue();
        g(i3) && i3 > o3 && (o3 = i3), d && (o3 = 0), w(this._valueXFields, (i4) => {
          null != e2.get(i4) && a2.push(e2.animate({ key: i4 + "Working", to: o3, duration: t, easing: n2 }).waitForStop());
        });
      }
      yield Promise.all(a2);
    });
  }
  _markDirtyStack() {
    this._stackDirty = true, this.markDirty(), this._markStakedDirtyStack();
  }
  _markStakedDirtyStack() {
    const e2 = this._stackedSeries;
    e2 && W(e2, (e3, t) => {
      t._stackDirty || t._markDirtyStack();
    });
  }
  _afterChanged() {
    super._afterChanged(), this._skipped && (this._markDirtyAxes(), this._skipped = false);
  }
  showDataItemTooltip(e2) {
    this.getPrivate("doNotUpdateLegend") || (this.updateLegendMarker(e2), this.updateLegendValue(e2));
    const t = this.get("tooltip");
    if (t) {
      if (this.isHidden())
        this.hideTooltip();
      else if (t._setDataItem(e2), e2) {
        let i2 = this.get("locationX", 0), s2 = this.get("locationY", 1), a2 = e2.get("locationX", i2), o2 = e2.get("locationY", s2);
        const n2 = this.get("xAxis"), r2 = this.get("yAxis"), l2 = this.get("vcx", 1), h = this.get("vcy", 1), d = n2.getDataItemPositionX(e2, this._tooltipFieldX, this._aLocationX0 + (this._aLocationX1 - this._aLocationX0) * a2, l2), c = r2.getDataItemPositionY(e2, this._tooltipFieldY, this._aLocationY0 + (this._aLocationY1 - this._aLocationY0) * o2, h), u2 = this.getPoint(d, c);
        let g2 = true;
        if (w(this._valueFields, (t2) => {
          null == e2.get(t2) && (g2 = false);
        }), g2) {
          const i3 = this.chart;
          i3 && i3.inPlot(u2) ? (t.label.text.markDirtyText(), t.set("tooltipTarget", this._getTooltipTarget(e2)), t.set("pointTo", this._display.toGlobal({ x: u2.x, y: u2.y }))) : t._setDataItem(void 0);
        } else
          t._setDataItem(void 0);
      }
    }
  }
  hideTooltip() {
    const e2 = this.get("tooltip");
    return e2 && e2.set("tooltipTarget", this), super.hideTooltip();
  }
  _getTooltipTarget(e2) {
    if ("bullet" == this.get("seriesTooltipTarget")) {
      const t = e2.bullets;
      if (t && t.length > 0) {
        const e3 = t[0].get("sprite");
        if (e3)
          return e3;
      }
    }
    return this;
  }
  updateLegendValue(e2) {
    const t = this.get("legendDataItem");
    if (t) {
      const i2 = t.get("label");
      if (i2) {
        let t2 = "";
        e2 ? (i2._setDataItem(e2), t2 = this.get("legendLabelText", i2.get("text", this.get("name", "")))) : (i2._setDataItem(this._emptyDataItem), t2 = this.get("legendRangeLabelText", this.get("legendLabelText", i2.get("text", this.get("name", ""))))), i2.set("text", t2);
      }
      const s2 = t.get("valueLabel");
      if (s2) {
        let t2 = "";
        e2 ? (s2._setDataItem(e2), t2 = this.get("legendValueText", s2.get("text", ""))) : (s2._setDataItem(this._emptyDataItem), t2 = this.get("legendRangeValueText", s2.get("text", ""))), s2.set("text", t2);
      }
    }
  }
  _getItemReaderLabel() {
    let e2 = "X: {" + this._xField;
    return this.get("xAxis").isType("DateAxis") && (e2 += ".formatDate()"), e2 += "}; Y: {" + this._yField, this.get("yAxis").isType("DateAxis") && (e2 += ".formatDate()"), e2 += "}", e2;
  }
  getPoint(e2, t) {
    let i2 = this.get("xAxis").get("renderer").positionToCoordinate(e2), s2 = this.get("yAxis").get("renderer").positionToCoordinate(t), a2 = 999999999;
    return s2 < -a2 && (s2 = -a2), s2 > a2 && (s2 = a2), i2 < -a2 && (i2 = -a2), i2 > a2 && (i2 = a2), { x: i2, y: s2 };
  }
  _shouldInclude(e2) {
    return true;
  }
  handleCursorHide() {
    this.hideTooltip(), this.updateLegendValue(void 0), this.updateLegendMarker(void 0);
  }
  _afterDataChange() {
    super._afterDataChange(), this.get("xAxis")._markDirtyKey("start"), this.get("yAxis")._markDirtyKey("start"), this.resetExtremes();
  }
  resetExtremes() {
    this.setPrivate("selectionMinX", void 0), this.setPrivate("selectionMaxX", void 0), this.setPrivate("selectionMinY", void 0), this.setPrivate("selectionMaxY", void 0), this.setPrivate("minX", void 0), this.setPrivate("minY", void 0), this.setPrivate("maxX", void 0), this.setPrivate("maxY", void 0);
  }
  createAxisRange(e2) {
    return this.axisRanges.push({ axisDataItem: e2 });
  }
  get mainDataItems() {
    return this._mainDataItems;
  }
  _adjustStartIndex(e2) {
    const t = this.get("xAxis");
    if (this.get("baseAxis") == t && t.isType("DateAxis")) {
      const i2 = t.baseDuration(), s2 = t.getPrivate("selectionMin", t.getPrivate("min", 0)), a2 = i2 * this.get("locationX", 0.5);
      let o2 = -1 / 0;
      for (; o2 < s2; ) {
        const t2 = this.dataItems[e2];
        if (!t2)
          break;
        {
          const i3 = t2.open;
          if (o2 = i3 ? i3.valueX : t2.get("valueX", 0), o2 += a2, !(o2 < s2))
            break;
          e2++;
        }
      }
    }
    return e2;
  }
}
Object.defineProperty(de, "className", { enumerable: true, configurable: true, writable: true, value: "XYSeries" }), Object.defineProperty(de, "classNames", { enumerable: true, configurable: true, writable: true, value: D.classNames.concat([de.className]) });
class ce extends _$1 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_series", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_isPanning", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "minorDataItems", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "labelsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, {})) }), Object.defineProperty(this, "gridContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { width: r, height: r }) }), Object.defineProperty(this, "topGridContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { width: r, height: r }) }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { isMeasured: false, width: r, height: r, position: "absolute" })) }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rangesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_panStart", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_panEnd", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_sAnimation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_eAnimation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_skipSync", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "axisRanges", { enumerable: true, configurable: true, writable: true, value: new ee$1() }), Object.defineProperty(this, "_seriesAxisRanges", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "ghostLabel", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_cursorPosition", { enumerable: true, configurable: true, writable: true, value: -1 }), Object.defineProperty(this, "_snapToSeries", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_seriesValuesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_seriesAdded", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "axisHeader", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { themeTags: ["axis", "header"], position: "absolute", background: ze.new(this._root, { themeTags: ["header", "background"], fill: this._root.interfaceColors.get("background") }) })) }), Object.defineProperty(this, "_bullets", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  _dispose() {
    this.gridContainer.dispose(), this.topGridContainer.dispose(), this.bulletsContainer.dispose(), this.labelsContainer.dispose(), this.axisHeader.dispose(), super._dispose();
  }
  _afterNew() {
    super._afterNew(), this.setPrivate("updateScrollbar", true), this._disposers.push(this.axisRanges.events.onAll((e3) => {
      if ("clear" === e3.type)
        w(e3.oldValues, (e4) => {
          this.disposeDataItem(e4);
        });
      else if ("push" === e3.type)
        this._processAxisRange(e3.newValue, ["range"]);
      else if ("setIndex" === e3.type)
        this._processAxisRange(e3.newValue, ["range"]);
      else if ("insertIndex" === e3.type)
        this._processAxisRange(e3.newValue, ["range"]);
      else if ("removeIndex" === e3.type)
        this.disposeDataItem(e3.oldValue);
      else {
        if ("moveIndex" !== e3.type)
          throw new Error("Unknown IStreamEvent type");
        this._processAxisRange(e3.value, ["range"]);
      }
    }));
    const e2 = this.get("renderer");
    e2 && (e2.axis = this, e2.processAxis()), this.children.push(e2), this.ghostLabel = e2.makeLabel(new g$1(this, void 0, {}), []), this.ghostLabel.adapters.disable("text"), this.ghostLabel.setAll({ opacity: 0, tooltipText: void 0, tooltipHTML: void 0, interactive: false }), this.ghostLabel.events.disable();
  }
  _updateFinals(e2, t) {
  }
  zoom(e2, t, i2, a2) {
    if (this.get("zoomable", true))
      if (this._updateFinals(e2, t), this.get("start") !== e2 || this.get("end") != t) {
        let o2 = this._sAnimation, n2 = this._eAnimation, r2 = this.get("maxDeviation", 0.5) * Math.min(1, t - e2);
        e2 < -r2 && (e2 = -r2), t > 1 + r2 && (t = 1 + r2), e2 > t && ([e2, t] = [t, e2]), g(i2) || (i2 = this.get("interpolationDuration", 0)), a2 || (a2 = "end");
        let l2 = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100)), h = l2;
        1 === t && 0 !== e2 && (a2 = e2 < this.get("start", 0) ? "start" : "end"), 0 === e2 && 1 !== t && (a2 = t > this.get("end", 1) ? "end" : "start");
        let d = this.get("minZoomCount", 0), c = this.get("maxZoomCount", 1 / 0);
        g(d) && (l2 = h / d);
        let u2 = 1;
        if (g(c) && (u2 = h / c), "start" === a2 ? (c > 0 && 1 / (t - e2) < u2 && (t = e2 + 1 / u2), 1 / (t - e2) > l2 && (t = e2 + 1 / l2), t > 1 && t - e2 < 1 / l2 && (e2 = t - 1 / l2)) : (c > 0 && 1 / (t - e2) < u2 && (e2 = t - 1 / u2), 1 / (t - e2) > l2 && (e2 = t - 1 / l2), e2 < 0 && t - e2 < 1 / l2 && (t = e2 + 1 / l2)), 1 / (t - e2) > l2 && (t = e2 + 1 / l2), 1 / (t - e2) > l2 && (e2 = t - 1 / l2), null != c && null != d && e2 == this.get("start") && t == this.get("end")) {
          const e3 = this.chart;
          e3 && e3._handleAxisSelection(this, true);
        }
        if ((o2 && o2.playing && o2.to == e2 || this.get("start") == e2) && (n2 && n2.playing && n2.to == t || this.get("end") == t))
          return;
        if (i2 > 0) {
          let s2, a3, o3 = this.get("interpolationEasing");
          if (this.get("start") != e2 && (s2 = this.animate({ key: "start", to: e2, duration: i2, easing: o3 })), this.get("end") != t && (a3 = this.animate({ key: "end", to: t, duration: i2, easing: o3 })), this._sAnimation = s2, this._eAnimation = a3, s2)
            return s2;
          if (a3)
            return a3;
        } else
          this.set("start", e2), this.set("end", t), this._root.events.once("frameended", () => {
            this._markDirtyKey("start"), this._root._markDirty();
          });
      } else
        this._sAnimation && this._sAnimation.stop(), this._eAnimation && this._eAnimation.stop();
  }
  get series() {
    return this._series;
  }
  _processAxisRange(e2, t) {
    e2.setRaw("isRange", true), this._createAssets(e2, t), this._rangesDirty = true, this._prepareDataItem(e2);
    const i2 = e2.get("above"), s2 = this.topGridContainer, a2 = e2.get("grid");
    i2 && a2 && s2.children.moveValue(a2);
    const o2 = e2.get("axisFill");
    i2 && o2 && s2.children.moveValue(o2);
  }
  _prepareDataItem(e2, t) {
  }
  markDirtyExtremes() {
  }
  markDirtySelectionExtremes() {
  }
  _calculateTotals() {
  }
  _updateAxisRanges() {
    this._bullets = {}, this.axisRanges.each((e2) => {
      this._prepareDataItem(e2);
    }), w(this._seriesAxisRanges, (e2) => {
      this._prepareDataItem(e2);
    });
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.get("fixAxisSize") ? this.ghostLabel.set("visible", true) : this.ghostLabel.set("visible", false), this.isDirty("start") || this.isDirty("end")) {
      const e3 = this.chart;
      e3 && e3._updateCursor();
      let t = this.get("start", 0), i2 = this.get("end", 1), s2 = this.get("maxDeviation", 0.5) * Math.min(1, i2 - t);
      if (t < -s2) {
        let e4 = t + s2;
        t = -s2, this.setRaw("start", t), this.isDirty("end") && this.setRaw("end", i2 - e4);
      }
      if (i2 > 1 + s2) {
        let e4 = i2 - 1 - s2;
        i2 = 1 + s2, this.setRaw("end", i2), this.isDirty("start") && this.setRaw("start", t - e4);
      }
    }
    const e2 = this.get("renderer");
    if (e2._start = this.get("start"), e2._end = this.get("end"), e2._inversed = e2.get("inversed", false), e2._axisLength = e2.axisLength() / (e2._end - e2._start), e2._updateLC(), this.isDirty("tooltip")) {
      const t = this.get("tooltip");
      if (t) {
        const i2 = e2.get("themeTags");
        t.addTag("axis"), t.addTag(this.className.toLowerCase()), t._applyThemes(), i2 && (t.set("themeTags", Ft(t.get("themeTags"), i2)), t.label._applyThemes());
      }
    }
  }
  _updateTooltipBounds() {
    const e2 = this.get("tooltip");
    e2 && this.get("renderer").updateTooltipBounds(e2);
  }
  _updateBounds() {
    super._updateBounds(), this._updateTooltipBounds();
  }
  processChart(e2) {
    this.chart = e2;
    this.get("renderer").chart = e2, e2.gridContainer.children.push(this.gridContainer), e2.topGridContainer.children.push(this.topGridContainer), e2.axisHeadersContainer.children.push(this.axisHeader), this.on("start", () => {
      e2._handleAxisSelection(this);
    }), this.on("end", () => {
      e2._handleAxisSelection(this);
    }), e2.plotContainer.onPrivate("width", () => {
      this.markDirtySize();
    }), e2.plotContainer.onPrivate("height", () => {
      this.markDirtySize();
    }), e2.processAxis(this);
  }
  hideDataItem(e2) {
    return this._toggleFHDataItem(e2, true), super.hideDataItem(e2);
  }
  showDataItem(e2) {
    return this._toggleFHDataItem(e2, false), super.showDataItem(e2);
  }
  _toggleFHDataItem(e2, t) {
    const i2 = "forceHidden", s2 = e2.get("label");
    s2 && s2.set(i2, t);
    const a2 = e2.get("grid");
    a2 && a2.set(i2, t);
    const o2 = e2.get("tick");
    o2 && o2.set(i2, t);
    const n2 = e2.get("axisFill");
    n2 && n2.set(i2, t);
    const r2 = e2.get("bullet");
    if (r2) {
      const e3 = r2.get("sprite");
      e3 && e3.set(i2, t);
    }
  }
  _toggleDataItem(e2, t) {
    const i2 = e2.get("label"), s2 = "visible";
    i2 && i2.setPrivate(s2, t);
    const a2 = e2.get("grid");
    a2 && a2.setPrivate(s2, t);
    const o2 = e2.get("tick");
    o2 && o2.setPrivate(s2, t);
    const n2 = e2.get("axisFill");
    n2 && n2.setPrivate(s2, t);
    const r2 = e2.get("bullet");
    if (r2) {
      const e3 = r2.get("sprite");
      e3 && e3.setPrivate(s2, t);
    }
  }
  _createAssets(e2, t, i2) {
    var s2, a2, o2;
    const n2 = this.get("renderer");
    let r2 = "minor";
    const l2 = e2.get("label");
    if (l2) {
      let a3 = l2.get("themeTags"), o3 = false;
      i2 ? -1 == (null == a3 ? void 0 : a3.indexOf(r2)) && (o3 = true) : -1 != (null == a3 ? void 0 : a3.indexOf(r2)) && (o3 = true), o3 && (null === (s2 = l2.parent) || void 0 === s2 || s2.children.removeValue(l2), n2.makeLabel(e2, t), l2.dispose(), n2.labels.removeValue(l2));
    } else
      n2.makeLabel(e2, t);
    const h = e2.get("grid");
    if (h) {
      let s3 = h.get("themeTags"), o3 = false;
      i2 ? -1 == (null == s3 ? void 0 : s3.indexOf(r2)) && (o3 = true) : -1 != (null == s3 ? void 0 : s3.indexOf(r2)) && (o3 = true), o3 && (null === (a2 = h.parent) || void 0 === a2 || a2.children.removeValue(h), n2.makeGrid(e2, t), h.dispose(), n2.grid.removeValue(h));
    } else
      n2.makeGrid(e2, t);
    const d = e2.get("tick");
    if (d) {
      let s3 = false, a3 = d.get("themeTags");
      i2 ? -1 == (null == a3 ? void 0 : a3.indexOf(r2)) && (s3 = true) : -1 != (null == a3 ? void 0 : a3.indexOf(r2)) && (s3 = true), s3 && (null === (o2 = d.parent) || void 0 === o2 || o2.children.removeValue(d), n2.makeTick(e2, t), d.dispose(), n2.ticks.removeValue(d));
    } else
      n2.makeTick(e2, t);
    i2 || e2.get("axisFill") || n2.makeAxisFill(e2, t), this._processBullet(e2);
  }
  _processBullet(e2) {
    let t = e2.get("bullet"), i2 = this.get("bullet");
    if (t || !i2 || e2.get("isRange") || (t = i2(this._root, this, e2)), t) {
      t.axis = this;
      const i3 = t.get("sprite");
      i3 && (i3._setDataItem(e2), e2.setRaw("bullet", t), i3.parent || this.bulletsContainer.children.push(i3));
    }
  }
  _afterChanged() {
    super._afterChanged();
    const e2 = this.chart;
    e2 && (e2._updateChartLayout(), e2.axisHeadersContainer.markDirtySize()), this.get("renderer")._updatePositions(), this._seriesAdded = false;
  }
  disposeDataItem(e2) {
    super.disposeDataItem(e2);
    const t = this.get("renderer"), i2 = e2.get("label");
    i2 && (t.labels.removeValue(i2), i2.dispose());
    const s2 = e2.get("tick");
    s2 && (t.ticks.removeValue(s2), s2.dispose());
    const a2 = e2.get("grid");
    a2 && (t.grid.removeValue(a2), a2.dispose());
    const o2 = e2.get("axisFill");
    o2 && (t.axisFills.removeValue(o2), o2.dispose());
    const n2 = e2.get("bullet");
    n2 && n2.dispose();
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const e2 = this.ghostLabel;
    if (!e2.isHidden()) {
      const t2 = e2.localBounds(), i3 = Math.ceil(t2.right - t2.left);
      let s2 = e2.get("text");
      w(this.dataItems, (e3) => {
        const t3 = e3.get("label");
        if (t3 && !t3.isHidden()) {
          const e4 = t3.localBounds();
          Math.ceil(e4.right - e4.left) > i3 && (s2 = t3.text._getText());
        }
      }), e2.set("text", s2);
    }
    let t = this.get("start", 0), i2 = this.get("end", 1);
    this.get("renderer").updateLabel(e2, t + 0.5 * (i2 - t));
  }
  _handleCursorPosition(e2, t) {
    e2 = this.get("renderer").toAxisPosition(e2), this._cursorPosition = e2, this._snapToSeries = t, this.updateTooltip();
  }
  updateTooltip() {
    const e2 = this._snapToSeries;
    let t = this._cursorPosition;
    const i2 = this.get("tooltip"), a2 = this.get("renderer");
    g(t) && (w(this.series, (i3) => {
      if (i3.get("baseAxis") === this) {
        const s2 = this.getSeriesItem(i3, t, this.get("tooltipLocation"));
        i3.setRaw("tooltipDataItem", s2), e2 && -1 != e2.indexOf(i3) ? (i3.updateLegendMarker(s2), i3.updateLegendValue(s2)) : i3.showDataItemTooltip(s2);
      }
    }), i2 && (a2.updateTooltipBounds(i2), this.get("snapTooltip") && (t = this.roundAxisPosition(t, this.get("tooltipLocation", 0.5))), n(t) ? i2.hide(0) : (this.setPrivateRaw("tooltipPosition", t), this._updateTooltipText(i2, t), a2.positionTooltip(i2, t), t < this.get("start", 0) || t > this.get("end", 1) ? i2.hide(0) : i2.show(0))));
  }
  _updateTooltipText(e2, t) {
    e2.label.set("text", this.getTooltipText(t));
  }
  roundAxisPosition(e2, t) {
    return e2;
  }
  handleCursorShow() {
    let e2 = this.get("tooltip");
    e2 && e2.show();
  }
  handleCursorHide() {
    let e2 = this.get("tooltip");
    e2 && e2.hide();
  }
  processSeriesDataItem(e2, t) {
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = false, this._rangesDirty = false;
  }
  coordinateToPosition(e2) {
    const t = this.get("renderer");
    return t.toAxisPosition(e2 / t.axisLength());
  }
  toAxisPosition(e2) {
    return this.get("renderer").toAxisPosition(e2);
  }
  toGlobalPosition(e2) {
    return this.get("renderer").toGlobalPosition(e2);
  }
  fixPosition(e2) {
    return this.get("renderer").fixPosition(e2);
  }
  shouldGap(e2, t, i2, s2) {
    return false;
  }
  createAxisRange(e2) {
    return this.axisRanges.push(e2);
  }
  _groupSeriesData(e2) {
  }
  getCellWidthPosition() {
    return 0.05;
  }
}
Object.defineProperty(ce, "className", { enumerable: true, configurable: true, writable: true, value: "Axis" }), Object.defineProperty(ce, "classNames", { enumerable: true, configurable: true, writable: true, value: _$1.classNames.concat([ce.className]) });
class ue extends ce {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_dirtyExtremes", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dirtySelectionExtremes", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_deltaMinMax", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_minReal", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_maxReal", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_baseValue", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_syncDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_minLogAdjusted", { enumerable: true, configurable: true, writable: true, value: 1 });
  }
  markDirtyExtremes() {
    this._dirtyExtremes = true, this.markDirty();
  }
  markDirtySelectionExtremes() {
    this._dirtySelectionExtremes = true, this.markDirty();
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["axis"]), this.setPrivateRaw("name", "value"), this.addTag("value"), super._afterNew();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("syncWithAxis")) {
      this._prevSettings.syncWithAxis && this._syncDp && this._syncDp.dispose();
      let e3 = this.get("syncWithAxis");
      e3 && (this._syncDp = new Y([e3.onPrivate("selectionMinFinal", () => {
        this._dirtySelectionExtremes = true;
      }), e3.onPrivate("selectionMaxFinal", () => {
        this._dirtySelectionExtremes = true;
      })]));
    }
    let e2 = false;
    (this.isDirty("min") || this.isDirty("max") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) && (e2 = true, this.ghostLabel.set("text", "")), (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || e2 || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection")) && (this._getMinMax(), this._dirtyExtremes = false), this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", true) && (this._getSelectionMinMax(), this._dirtySelectionExtremes = false), this._groupData(), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges()), this._baseValue = this.baseValue();
  }
  _groupData() {
  }
  _formatText(e2) {
    const t = this.get("numberFormat"), i2 = this.getNumberFormatter();
    let s2 = "";
    return s2 = t ? i2.format(e2, t) : i2.format(e2, void 0, this.getPrivate("stepDecimalPlaces")), s2;
  }
  _prepareAxisItems() {
    const e2 = this.getPrivate("min"), t = this.getPrivate("max");
    if (g(e2) && g(t)) {
      const t2 = this.get("logarithmic"), i2 = this.getPrivate("step"), s2 = this.getPrivate("selectionMin"), a2 = this.getPrivate("selectionMax") + i2;
      let o2 = s2 - i2, r2 = 1, l2 = e2;
      if (t2) {
        if (o2 = this._minLogAdjusted, o2 < s2)
          for (; o2 < s2; )
            o2 += i2;
        l2 = o2, l2 <= 0 && (l2 = 1, i2 < 1 && (l2 = i2)), r2 = Math.log(a2 - i2) * Math.LOG10E - Math.log(l2) * Math.LOG10E, r2 > 2 && (o2 = Math.pow(10, Math.log(l2) * Math.LOG10E - 5));
      }
      const h = this.get("renderer"), d = h.get("minorLabelsEnabled"), c = h.get("minorGridEnabled", d);
      let u2 = Math.pow(10, Math.floor(Math.log(Math.abs(i2)) * Math.LOG10E));
      const g2 = Math.round(i2 / u2);
      let p = 2;
      he$1(g2 / 5, 10) % 1 == 0 && (p = 5), he$1(g2 / 10, 10) % 1 == 0 && (p = 10);
      let m = i2 / p, _2 = 0, x2 = 0, f = -1 / 0;
      for (; o2 < a2; ) {
        let e3;
        this.dataItems.length < _2 + 1 ? (e3 = new g$1(this, void 0, {}), this._dataItems.push(e3), this.processDataItem(e3)) : e3 = this.dataItems[_2], this._createAssets(e3, []), this._toggleDataItem(e3, true), e3.setRaw("value", o2);
        const s3 = e3.get("label");
        s3 && s3.set("text", this._formatText(o2)), this._prepareDataItem(e3);
        let a3 = o2;
        if (t2 && r2 > 2 ? a3 = Math.pow(10, Math.log(l2) * Math.LOG10E + _2 - 5) : a3 += i2, c) {
          let e4 = o2 + m;
          if (t2) {
            if (r2 > 2) {
              m = this._adjustMinMax(o2, a3, 10).step;
            }
            e4 = o2 + m;
          }
          for (; e4 < a3 - 1e-11 * i2; ) {
            let t3;
            this.minorDataItems.length < x2 + 1 ? (t3 = new g$1(this, void 0, {}), this.minorDataItems.push(t3), this.processDataItem(t3)) : t3 = this.minorDataItems[x2], this._createAssets(t3, ["minor"], true), this._toggleDataItem(t3, true), t3.setRaw("value", e4);
            const i3 = t3.get("label");
            i3 && (d ? i3.set("text", this._formatText(e4)) : i3.setPrivate("visible", false)), this._prepareDataItem(t3), e4 += m, x2++;
          }
        }
        if (o2 = a3, f == o2)
          break;
        let h2 = Math.pow(10, Math.floor(Math.log(Math.abs(i2)) * Math.LOG10E));
        if (h2 < 1) {
          let e4 = Math.round(Math.abs(Math.log(Math.abs(h2)) * Math.LOG10E)) + 2;
          o2 = he$1(o2, e4);
        }
        _2++, f = o2;
      }
      for (let e3 = _2; e3 < this.dataItems.length; e3++)
        this._toggleDataItem(this.dataItems[e3], false);
      for (let e3 = x2; e3 < this.minorDataItems.length; e3++)
        this._toggleDataItem(this.minorDataItems[e3], false);
      w(this.series, (e3) => {
        e3.inited && e3._markDirtyAxes();
      }), this._updateGhost();
    }
  }
  _prepareDataItem(e2, t) {
    let i2 = this.get("renderer"), a2 = e2.get("value"), o2 = e2.get("endValue"), n2 = this.valueToPosition(a2), r2 = n2, l2 = this.valueToPosition(a2 + this.getPrivate("step"));
    g(o2) && (r2 = this.valueToPosition(o2), l2 = r2), e2.get("isRange") && null == o2 && (l2 = n2);
    let h = r2, d = e2.get("labelEndValue");
    null != d && (h = this.valueToPosition(d)), i2.updateLabel(e2.get("label"), n2, h, t);
    const c = e2.get("grid");
    if (i2.updateGrid(c, n2, r2), c && (a2 == this.get("baseValue", 0) ? (c.addTag("base"), c._applyThemes()) : c.hasTag("base") && (c.removeTag("base"), c._applyThemes())), i2.updateTick(e2.get("tick"), n2, h, t), i2.updateFill(e2.get("axisFill"), n2, l2), this._processBullet(e2), i2.updateBullet(e2.get("bullet"), n2, r2), !e2.get("isRange")) {
      const t2 = this.get("fillRule");
      t2 && t2(e2);
    }
  }
  _handleRangeChange() {
    let e2 = this.positionToValue(this.get("start", 0)), t = this.positionToValue(this.get("end", 1));
    const i2 = this.get("renderer").gridCount();
    let s2 = this._adjustMinMax(e2, t, i2, true), a2 = ct(s2.step);
    this.setPrivateRaw("stepDecimalPlaces", a2), e2 = he$1(e2, a2), t = he$1(t, a2), s2 = this._adjustMinMax(e2, t, i2, true);
    let o2 = s2.step;
    e2 = s2.min, t = s2.max, this.getPrivate("selectionMin") === e2 && this.getPrivate("selectionMax") === t && this.getPrivate("step") === o2 || (this.setPrivateRaw("selectionMin", e2), this.setPrivateRaw("selectionMax", t), this.setPrivateRaw("step", o2));
  }
  positionToValue(e2) {
    const t = this.getPrivate("min"), i2 = this.getPrivate("max");
    return this.get("logarithmic") ? Math.pow(Math.E, (e2 * (Math.log(i2) * Math.LOG10E - Math.log(t) * Math.LOG10E) + Math.log(t) * Math.LOG10E) / Math.LOG10E) : e2 * (i2 - t) + t;
  }
  valueToPosition(e2) {
    const t = this.getPrivate("min"), i2 = this.getPrivate("max");
    if (this.get("logarithmic")) {
      if (e2 <= 0) {
        let t2 = this.get("treatZeroAs");
        g(t2) && (e2 = t2);
      }
      return (Math.log(e2) * Math.LOG10E - Math.log(t) * Math.LOG10E) / (Math.log(i2) * Math.LOG10E - Math.log(t) * Math.LOG10E);
    }
    return (e2 - t) / (i2 - t);
  }
  valueToFinalPosition(e2) {
    const t = this.getPrivate("minFinal"), i2 = this.getPrivate("maxFinal");
    if (this.get("logarithmic")) {
      if (e2 <= 0) {
        let t2 = this.get("treatZeroAs");
        g(t2) && (e2 = t2);
      }
      return (Math.log(e2) * Math.LOG10E - Math.log(t) * Math.LOG10E) / (Math.log(i2) * Math.LOG10E - Math.log(t) * Math.LOG10E);
    }
    return (e2 - t) / (i2 - t);
  }
  getX(e2, t, i2) {
    e2 = i2 + (e2 - i2) * t;
    const s2 = this.valueToPosition(e2);
    return this._settings.renderer.positionToCoordinate(s2);
  }
  getY(e2, t, i2) {
    e2 = i2 + (e2 - i2) * t;
    const s2 = this.valueToPosition(e2);
    return this._settings.renderer.positionToCoordinate(s2);
  }
  getDataItemCoordinateX(e2, t, i2, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(e2, t, i2, s2));
  }
  getDataItemPositionX(e2, t, i2, s2) {
    let a2 = e2.get(t);
    if (e2.get("stackToItemX")) {
      a2 = a2 * s2 + e2.component.getStackedXValueWorking(e2, t);
    } else
      a2 = this._baseValue + (a2 - this._baseValue) * s2;
    return this.valueToPosition(a2);
  }
  getDataItemCoordinateY(e2, t, i2, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(e2, t, i2, s2));
  }
  getDataItemPositionY(e2, t, i2, s2) {
    let a2 = e2.get(t);
    if (e2.get("stackToItemY")) {
      a2 = a2 * s2 + e2.component.getStackedYValueWorking(e2, t);
    } else
      a2 = this._baseValue + (a2 - this._baseValue) * s2;
    return this.valueToPosition(a2);
  }
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  baseValue() {
    const e2 = Math.min(this.getPrivate("minFinal", -1 / 0), this.getPrivate("selectionMin", -1 / 0)), t = Math.max(this.getPrivate("maxFinal", 1 / 0), this.getPrivate("selectionMax", 1 / 0));
    let i2 = this.get("baseValue", 0);
    return i2 < e2 && (i2 = e2), i2 > t && (i2 = t), i2;
  }
  cellEndValue(e2) {
    return e2;
  }
  fixSmallStep(e2) {
    return 1 + e2 === 1 ? (e2 *= 2, this.fixSmallStep(e2)) : e2;
  }
  _fixMin(e2) {
    return e2;
  }
  _fixMax(e2) {
    return e2;
  }
  _calculateTotals() {
    if (this.get("calculateTotals")) {
      let e2 = this.series[0];
      if (e2) {
        let t = e2.startIndex();
        if (e2.dataItems.length > 0) {
          t > 0 && t--;
          let i2, s2, a2 = e2.endIndex();
          a2 < e2.dataItems.length && a2++, e2.get("yAxis") == this ? (i2 = "valueY", s2 = "vcy") : e2.get("xAxis") == this && (i2 = "valueX", s2 = "vcx");
          let o2 = i2 + "Working";
          if (i2)
            for (let e3 = t; e3 < a2; e3++) {
              let t2 = 0, a3 = 0;
              w(this.series, (i3) => {
                if (!i3.get("excludeFromTotal")) {
                  let n$12 = i3.dataItems[e3];
                  if (n$12) {
                    let e4 = n$12.get(o2) * i3.get(s2);
                    n(e4) || (t2 += e4, a3 += Math.abs(e4));
                  }
                }
              }), w(this.series, (n$12) => {
                if (!n$12.get("excludeFromTotal")) {
                  let r2 = n$12.dataItems[e3];
                  if (r2) {
                    let e4 = r2.get(o2) * n$12.get(s2);
                    n(e4) || (r2.set(i2 + "Total", a3), r2.set(i2 + "Sum", t2), r2.set(i2 + "TotalPercent", e4 / a3 * 100));
                  }
                }
              });
            }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const e2 = this.getPrivate("minFinal"), t = this.getPrivate("maxFinal"), i2 = this.get("min"), a2 = this.get("max");
    let o2 = this.get("extraMin", 0), r2 = this.get("extraMax", 0);
    this.get("logarithmic") && (null == this.get("extraMin") && (o2 = 0.1), null == this.get("extraMax") && (r2 = 0.2));
    const l2 = this.get("renderer").gridCount(), h = this.get("strictMinMaxSelection");
    let d = this.get("strictMinMax");
    if (g(e2) && g(t)) {
      let c = t, u2 = e2;
      if (w(this.series, (e3) => {
        if (!e3.get("ignoreMinMax")) {
          let t2, i3;
          const a3 = e3.getPrivate("outOfSelection");
          if (e3.get("xAxis") === this) {
            if (!a3) {
              let s2 = e3.getPrivate("minX"), a4 = e3.getPrivate("maxX");
              0 == e3.startIndex() && e3.endIndex() == e3.dataItems.length || (s2 = void 0, a4 = void 0), t2 = e3.getPrivate("selectionMinX", s2), i3 = e3.getPrivate("selectionMaxX", a4);
            }
          } else if (e3.get("yAxis") === this && !a3) {
            let s2 = e3.getPrivate("minY"), a4 = e3.getPrivate("maxY");
            0 == e3.startIndex() && e3.endIndex() == e3.dataItems.length || (s2 = void 0, a4 = void 0), t2 = e3.getPrivate("selectionMinY", s2), i3 = e3.getPrivate("selectionMaxY", a4);
          }
          e3.isHidden() || e3.isShowing() || (g(t2) && (c = Math.min(c, t2)), g(i3) && (u2 = Math.max(u2, i3)));
        }
      }), this.axisRanges.each((e3) => {
        if (e3.get("affectsMinMax")) {
          let t2 = e3.get("value");
          null != t2 && (c = Math.min(c, t2), u2 = Math.max(u2, t2)), t2 = e3.get("endValue"), null != t2 && (c = Math.min(c, t2), u2 = Math.max(u2, t2));
        }
      }), c > u2 && ([c, u2] = [u2, c]), g(i2) ? c = d ? i2 : e2 : d && g(this._minReal) && (c = this._minReal), g(a2) ? u2 = d ? a2 : t : d && g(this._maxReal) && (u2 = this._maxReal), c === u2) {
        let t2 = c;
        if (c -= this._deltaMinMax, u2 += this._deltaMinMax, c < e2) {
          let i4 = t2 - e2;
          0 == i4 && (i4 = this._deltaMinMax), c = t2 - i4, u2 = t2 + i4, d = true;
        }
        let i3 = this._adjustMinMax(c, u2, l2, d);
        c = i3.min, u2 = i3.max;
      }
      let g$12 = c, p = u2;
      c -= (u2 - c) * o2, u2 += (u2 - c) * r2;
      let m = this._adjustMinMax(c, u2, l2);
      c = m.min, u2 = m.max, c = de$1(c, e2, t), u2 = de$1(u2, e2, t), m = this._adjustMinMax(c, u2, l2, true), d || (c = m.min, u2 = m.max);
      const _2 = this.get("syncWithAxis");
      _2 && (m = this._syncAxes(c, u2, m.step, _2.getPrivate("selectionMinFinal", _2.getPrivate("minFinal", 0)), _2.getPrivate("selectionMaxFinal", _2.getPrivate("maxFinal", 1)), _2.getPrivate("selectionStepFinal", _2.getPrivate("step", 1))), c = m.min, u2 = m.max), d && (g(i2) && (c = Math.max(c, i2)), g(a2) && (u2 = Math.min(u2, a2))), h && (c = g$12 - (u2 - c) * o2, u2 = p + (u2 - c) * r2), this.get("logarithmic") && (c <= 0 && (c = g$12 * (1 - Math.min(o2, 0.99))), c < e2 && (c = e2), u2 > t && (u2 = t));
      let x2 = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2), f = he$1(this.valueToFinalPosition(c), x2), v = he$1(this.valueToFinalPosition(u2), x2);
      this.setPrivateRaw("selectionMinFinal", c), this.setPrivateRaw("selectionMaxFinal", u2), this.setPrivateRaw("selectionStepFinal", m.step), this.zoom(f, v);
    }
  }
  _getMinMax() {
    let e2 = this.get("min"), t = this.get("max"), i2 = 1 / 0, a2 = -1 / 0, o2 = this.get("extraMin", 0), r2 = this.get("extraMax", 0);
    this.get("logarithmic") && (null == this.get("extraMin") && (o2 = 0.1), null == this.get("extraMax") && (r2 = 0.2));
    let l2 = 1 / 0;
    if (w(this.series, (e3) => {
      if (!e3.get("ignoreMinMax")) {
        let t2, o3;
        if (e3.get("xAxis") === this ? (t2 = e3.getPrivate("minX"), o3 = e3.getPrivate("maxX")) : e3.get("yAxis") === this && (t2 = e3.getPrivate("minY"), o3 = e3.getPrivate("maxY")), g(t2) && g(o3)) {
          i2 = Math.min(i2, t2), a2 = Math.max(a2, o3);
          let e4 = o3 - t2;
          e4 <= 0 && (e4 = Math.abs(o3 / 100)), e4 < l2 && (l2 = e4);
        }
      }
    }), this.axisRanges.each((e3) => {
      if (e3.get("affectsMinMax")) {
        let t2 = e3.get("value");
        null != t2 && (i2 = Math.min(i2, t2), a2 = Math.max(a2, t2)), t2 = e3.get("endValue"), null != t2 && (i2 = Math.min(i2, t2), a2 = Math.max(a2, t2));
      }
    }), this.get("logarithmic")) {
      let e3 = this.get("treatZeroAs");
      g(e3) && i2 <= 0 && (i2 = e3);
    }
    if (0 === i2 && 0 === a2 && (a2 = 0.9, i2 = -0.9), g(e2) && (i2 = e2), g(t) && (a2 = t), i2 === 1 / 0 || a2 === -1 / 0)
      return this.setPrivate("minFinal", void 0), void this.setPrivate("maxFinal", void 0);
    const h = i2, d = a2;
    let c = this.adapters.fold("min", i2), u2 = this.adapters.fold("max", a2);
    g(c) && (i2 = c), g(u2) && (a2 = u2), i2 = this._fixMin(i2), a2 = this._fixMax(a2), a2 - i2 <= 1 / Math.pow(10, 15) && (a2 - i2 != 0 ? this._deltaMinMax = (a2 - i2) / 2 : this._getDelta(a2), i2 -= this._deltaMinMax, a2 += this._deltaMinMax), i2 -= (a2 - i2) * o2, a2 += (a2 - i2) * r2, this.get("logarithmic") && (i2 < 0 && h >= 0 && (i2 = 0), a2 > 0 && d <= 0 && (a2 = 0)), this._minReal = i2, this._maxReal = a2;
    let g$12 = this.get("strictMinMax"), p = this.get("strictMinMaxSelection", false);
    p && (g$12 = p);
    let m = g$12;
    g(t) && (m = true);
    let _2 = this.get("renderer").gridCount(), x2 = this._adjustMinMax(i2, a2, _2, m);
    i2 = x2.min, a2 = x2.max, x2 = this._adjustMinMax(i2, a2, _2, true), i2 = x2.min, a2 = x2.max, g$12 && (i2 = g(e2) ? e2 : this._minReal, a2 = g(t) ? t : this._maxReal, a2 - i2 <= 1e-8 && (i2 -= this._deltaMinMax, a2 += this._deltaMinMax), i2 -= (a2 - i2) * o2, a2 += (a2 - i2) * r2), c = this.adapters.fold("min", i2), u2 = this.adapters.fold("max", a2), g(c) && (i2 = c), g(u2) && (a2 = u2), l2 == 1 / 0 && (l2 = a2 - i2);
    let f = Math.round(Math.abs(Math.log(Math.abs(a2 - i2)) * Math.LOG10E)) + 5;
    i2 = he$1(i2, f), a2 = he$1(a2, f);
    const v = this.get("syncWithAxis");
    if (v && (x2 = this._syncAxes(i2, a2, x2.step, v.getPrivate("minFinal", v.getPrivate("min", 0)), v.getPrivate("maxFinal", v.getPrivate("max", 1)), v.getPrivate("step", 1)), i2 = x2.min, a2 = x2.max), this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((a2 - i2) / l2 * this.get("maxZoomFactor", 100)))), this._fixZoomFactor(), this.get("logarithmic") && (this._minLogAdjusted = i2, i2 = this._minReal, a2 = this._maxReal, i2 <= 0 && (i2 = h * (1 - Math.min(o2, 0.99)))), g(i2) && g(a2) && (this.getPrivate("minFinal") !== i2 || this.getPrivate("maxFinal") !== a2)) {
      this.setPrivate("minFinal", i2), this.setPrivate("maxFinal", a2), this._saveMinMax(i2, a2);
      const e3 = this.get("interpolationDuration", 0), t2 = this.get("interpolationEasing");
      this.animatePrivate({ key: "min", to: i2, duration: e3, easing: t2 }), this.animatePrivate({ key: "max", to: a2, duration: e3, easing: t2 });
    }
  }
  _fixZoomFactor() {
  }
  _getDelta(e2) {
    let t = Math.log(Math.abs(e2)) * Math.LOG10E, i2 = Math.pow(10, Math.floor(t));
    i2 /= 10, this._deltaMinMax = i2;
  }
  _saveMinMax(e2, t) {
  }
  _adjustMinMax(e2, t, i2, a2) {
    i2 <= 1 && (i2 = 1), i2 = Math.round(i2);
    let o2 = e2, r2 = t, l2 = t - e2;
    0 === l2 && (l2 = Math.abs(t));
    let h = Math.log(Math.abs(l2)) * Math.LOG10E, d = Math.pow(10, Math.floor(h));
    d /= 10;
    let c = d;
    a2 && (c = 0), a2 ? (e2 = Math.floor(e2 / d) * d, t = Math.ceil(t / d) * d) : (e2 = Math.ceil(e2 / d) * d - c, t = Math.floor(t / d) * d + c), e2 < 0 && o2 >= 0 && (e2 = 0), t > 0 && r2 <= 0 && (t = 0), h = Math.log(Math.abs(l2)) * Math.LOG10E, d = Math.pow(10, Math.floor(h)), d /= 100;
    let u2 = Math.ceil(l2 / i2 / d) * d, g$12 = Math.pow(10, Math.floor(Math.log(Math.abs(u2)) * Math.LOG10E)), p = Math.ceil(u2 / g$12);
    p > 5 ? p = 10 : p <= 5 && p > 2 && (p = 5), u2 = Math.ceil(u2 / (g$12 * p)) * g$12 * p;
    let m = this.get("maxPrecision");
    if (g(m)) {
      let e3 = le$1(u2, m);
      m < Number.MAX_VALUE && u2 !== e3 && (u2 = e3);
    }
    let _2 = 0;
    g$12 < 1 && (_2 = Math.round(Math.abs(Math.log(Math.abs(g$12)) * Math.LOG10E)) + 1, u2 = he$1(u2, _2));
    let b, x2 = Math.floor(e2 / u2);
    return e2 = he$1(u2 * x2, _2), b = a2 ? Math.floor(t / u2) : Math.ceil(t / u2), b === x2 && b++, (t = he$1(u2 * b, _2)) < r2 && (t += u2), e2 > o2 && (e2 -= u2), u2 = this.fixSmallStep(u2), { min: e2, max: t, step: u2 };
  }
  getTooltipText(e2, t) {
    const i2 = this.get("tooltipNumberFormat", this.get("numberFormat")), s2 = this.getNumberFormatter(), a2 = this.get("extraTooltipPrecision", 0), o2 = this.getPrivate("stepDecimalPlaces", 0) + a2, r2 = he$1(this.positionToValue(e2), o2);
    return i2 ? s2.format(r2, i2) : s2.format(r2, void 0, o2);
  }
  getSeriesItem(e2, t) {
    let i2, s2, a2 = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), o2 = this.positionToValue(t);
    if (w(e2.dataItems, (e3, t2) => {
      const n2 = Math.abs(e3.get(a2) - o2);
      (void 0 === i2 || n2 < s2) && (i2 = t2, s2 = n2);
    }), null != i2)
      return e2.dataItems[i2];
  }
  zoomToValues(e2, t, i2) {
    const s2 = this.getPrivate("minFinal", 0), a2 = this.getPrivate("maxFinal", 0);
    null != this.getPrivate("min") && null != this.getPrivate("max") && this.zoom((e2 - s2) / (a2 - s2), (t - s2) / (a2 - s2), i2);
  }
  _syncAxes(e2, t, i2, a2, o2, n2) {
    if (this.get("syncWithAxis")) {
      let r2 = Math.round(o2 - a2) / n2, l2 = Math.round((t - e2) / i2), h = this.get("renderer").gridCount();
      if (g(r2) && g(l2)) {
        let s2 = false, a3 = 0, o3 = 0.01 * (t - e2), n3 = e2, l3 = t, d = i2;
        for (; 1 != s2; )
          if (s2 = this._checkSync(n3, l3, d, r2), a3++, a3 > 500 && (s2 = true), s2)
            e2 = n3, t = l3, i2 = d;
          else {
            a3 / 3 == Math.round(a3 / 3) ? (n3 = e2 - o3 * a3, e2 >= 0 && n3 < 0 && (n3 = 0)) : (l3 = t + o3 * a3, l3 <= 0 && l3 > 0 && (l3 = 0));
            let i3 = this._adjustMinMax(n3, l3, h, true);
            n3 = i3.min, l3 = i3.max, d = i3.step;
          }
      }
    }
    return { min: e2, max: t, step: i2 };
  }
  _checkSync(e2, t, i2, s2) {
    let a2 = (t - e2) / i2;
    for (let o2 = 1; o2 < s2; o2++)
      if (he$1(a2 / o2, 1) == s2 || a2 * o2 == s2)
        return true;
    return false;
  }
  getCellWidthPosition() {
    let e2 = this.getPrivate("selectionMax", this.getPrivate("max")), t = this.getPrivate("selectionMin", this.getPrivate("min"));
    return g(e2) && g(t) ? this.getPrivate("step", 1) / (e2 - t) : 0.05;
  }
}
Object.defineProperty(ue, "className", { enumerable: true, configurable: true, writable: true, value: "ValueAxis" }), Object.defineProperty(ue, "classNames", { enumerable: true, configurable: true, writable: true, value: ce.classNames.concat([ue.className]) });
class ge extends ri {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: true, configurable: true, writable: true, value: [] });
  }
}
Object.defineProperty(ge, "className", { enumerable: true, configurable: true, writable: true, value: "AxisLabel" }), Object.defineProperty(ge, "classNames", { enumerable: true, configurable: true, writable: true, value: ri.classNames.concat([ge.className]) });
class pe extends U {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: true, configurable: true, writable: true, value: [] });
  }
}
Object.defineProperty(pe, "className", { enumerable: true, configurable: true, writable: true, value: "AxisTick" }), Object.defineProperty(pe, "classNames", { enumerable: true, configurable: true, writable: true, value: U.classNames.concat([pe.className]) });
class me extends Ke {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_axisLength", { enumerable: true, configurable: true, writable: true, value: 100 }), Object.defineProperty(this, "_start", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_end", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_inversed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_minSize", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_lc", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_ls", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_thumbDownPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downStart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEnd", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ticks", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => pe._new(this._root, { themeTags: Ft(this.ticks.template.get("themeTags", []), this.get("themeTags", [])) }, [this.ticks.template])) }), Object.defineProperty(this, "grid", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => ne._new(this._root, { themeTags: Ft(this.grid.template.get("themeTags", []), this.get("themeTags", [])) }, [this.grid.template])) }), Object.defineProperty(this, "axisFills", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => Ke._new(this._root, { themeTags: Ft(this.axisFills.template.get("themeTags", ["axis", "fill"]), this.get("themeTags", [])) }, [this.axisFills.template])) }), Object.defineProperty(this, "labels", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => ge._new(this._root, { themeTags: Ft(this.labels.template.get("themeTags", []), this.get("themeTags", [])) }, [this.labels.template])) }), Object.defineProperty(this, "axis", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  makeTick(e2, t) {
    const i2 = this.ticks.make();
    return i2._setDataItem(e2), e2.setRaw("tick", i2), i2.set("themeTags", Ft(i2.get("themeTags"), t)), this.axis.labelsContainer.children.push(i2), this.ticks.push(i2), i2;
  }
  makeGrid(e2, t) {
    const i2 = this.grid.make();
    return i2._setDataItem(e2), e2.setRaw("grid", i2), i2.set("themeTags", Ft(i2.get("themeTags"), t)), this.axis.gridContainer.children.push(i2), this.grid.push(i2), i2;
  }
  makeAxisFill(e2, t) {
    const i2 = this.axisFills.make();
    return i2._setDataItem(e2), i2.set("themeTags", Ft(i2.get("themeTags"), t)), this.axis.gridContainer.children.push(i2), e2.setRaw("axisFill", i2), this.axisFills.push(i2), i2;
  }
  makeLabel(e2, t) {
    const i2 = this.labels.make();
    return i2.set("themeTags", Ft(i2.get("themeTags"), t)), this.axis.labelsContainer.children.moveValue(i2, 0), i2._setDataItem(e2), e2.setRaw("label", i2), this.labels.push(i2), i2;
  }
  axisLength() {
    return 0;
  }
  gridCount() {
    return this.axisLength() / this.get("minGridDistance", 50);
  }
  _updatePositions() {
  }
  _afterNew() {
    super._afterNew(), this.set("isMeasured", false);
    const e2 = this.thumb;
    e2 && (this._disposers.push(e2.events.on("pointerdown", (e3) => {
      this._handleThumbDown(e3);
    })), this._disposers.push(e2.events.on("globalpointerup", (e3) => {
      this._handleThumbUp(e3);
    })), this._disposers.push(e2.events.on("globalpointermove", (e3) => {
      this._handleThumbMove(e3);
    })));
  }
  _beforeChanged() {
    super._beforeChanged(), this.isDirty("minGridDistance") && this.root.events.once("frameended", () => {
      this.axis.markDirtySize();
    });
  }
  _changed() {
    if (super._changed(), this.isDirty("pan")) {
      const e2 = this.thumb;
      if (e2) {
        const t = this.axis.labelsContainer, i2 = this.get("pan");
        "zoom" == i2 ? t.children.push(e2) : "none" == i2 && t.children.removeValue(e2);
      }
    }
  }
  _handleThumbDown(e2) {
    this._thumbDownPoint = this.toLocal(e2.point);
    const t = this.axis;
    this._downStart = t.get("start"), this._downEnd = t.get("end");
  }
  _handleThumbUp(e2) {
    this._thumbDownPoint = void 0;
  }
  _handleThumbMove(e2) {
    const t = this._thumbDownPoint;
    if (t) {
      const i2 = this.toLocal(e2.point), s2 = this._downStart, a2 = this._downEnd, o2 = this._getPan(i2, t) * Math.min(1, a2 - s2) / 2;
      this.axis.zoom(s2 - o2, a2 + o2, 0);
    }
  }
  _getPan(e2, t) {
    return 0;
  }
  positionToCoordinate(e2) {
    return this._inversed ? (this._end - e2) * this._axisLength : (e2 - this._start) * this._axisLength;
  }
  updateTooltipBounds(e2) {
  }
  _updateSize() {
    this.markDirty(), this._clear = true;
  }
  toAxisPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return e2 *= i2 - t, e2 = this.get("inversed") ? i2 - e2 : t + e2;
  }
  toGlobalPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return this.get("inversed") ? e2 = i2 - e2 : e2 -= t, e2 /= i2 - t;
  }
  fixPosition(e2) {
    return this.get("inversed") ? 1 - e2 : e2;
  }
  _updateLC() {
  }
  toggleVisibility(e2, t, i2, s2) {
    let a2 = this.axis;
    const o2 = a2.get("start", 0), n2 = a2.get("end", 1);
    t < o2 + (n2 - o2) * (i2 - 1e-4) || t > o2 + (n2 - o2) * (s2 + 1e-4) ? e2.setPrivate("visible", false) : e2.setPrivate("visible", true);
  }
  _positionTooltip(e2, t) {
    const i2 = this.chart;
    i2 && (e2.set("pointTo", this._display.toGlobal(t)), i2.inPlot(t) || e2.hide());
  }
  processAxis() {
  }
}
Object.defineProperty(me, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRenderer" }), Object.defineProperty(me, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([me.className]) });
class _e extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: ze.new(this._root, { width: r, isMeasured: false, themeTags: ["axis", "x", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["renderer", "x"]), super._afterNew(), this.setPrivateRaw("letter", "X");
    const e2 = this.grid.template;
    e2.set("height", r), e2.set("width", 0), e2.set("draw", (e3, t) => {
      e3.moveTo(0, 0), e3.lineTo(0, t.height());
    }), this.set("draw", (e3, t) => {
      e3.moveTo(0, 0), e3.lineTo(t.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const e2 = this.axis;
    e2.ghostLabel.setPrivate("visible", !this.get("inside")), e2.ghostLabel.set("x", -1e3);
    const t = "opposite", i2 = "inside";
    if (this.isDirty(t) || this.isDirty(i2)) {
      const s2 = this.chart, a2 = e2.children;
      if (this.get(i2) ? e2.addTag(i2) : e2.removeTag(i2), s2) {
        if (this.get(t)) {
          const i3 = s2.topAxesContainer.children;
          -1 == i3.indexOf(e2) && i3.insertIndex(0, e2), e2.addTag(t), a2.moveValue(this);
        } else {
          const i3 = s2.bottomAxesContainer.children;
          -1 == i3.indexOf(e2) && i3.moveValue(e2), e2.removeTag(t), a2.moveValue(this, 0);
        }
        e2.ghostLabel._applyThemes(), this.labels.each((e3) => {
          e3._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      e2.markDirtySize();
    }
    this.thumb.setPrivate("height", e2.labelsContainer.height());
  }
  _getPan(e2, t) {
    return (t.x - e2.x) / this.width();
  }
  toAxisPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return e2 = (e2 -= this._ls) * (i2 - t) / this._lc, e2 = this.get("inversed") ? i2 - e2 : t + e2;
  }
  toGlobalPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return this.get("inversed") ? e2 = i2 - e2 : e2 -= t, e2 = e2 / (i2 - t) * this._lc, e2 += this._ls;
  }
  _updateLC() {
    const e2 = this.axis, t = e2.parent;
    if (t) {
      const i2 = t.innerWidth();
      this._lc = this.axisLength() / i2, this._ls = (e2.x() - t.get("paddingLeft", 0)) / i2;
    }
  }
  _updatePositions() {
    const e2 = this.axis, t = e2.x() - pt(e2.get("centerX", 0), e2.width()) - e2.parent.get("paddingLeft", 0);
    e2.gridContainer.set("x", t), e2.topGridContainer.set("x", t), e2.bulletsContainer.set("y", this.y());
    const i2 = e2.chart;
    if (i2) {
      const t2 = i2.plotContainer, s2 = e2.axisHeader;
      let a2 = e2.get("marginLeft", 0), o2 = e2.x() - a2;
      const n2 = e2.parent;
      n2 && (o2 -= n2.get("paddingLeft", 0)), s2.children.length > 0 ? (a2 = e2.axisHeader.width(), e2.set("marginLeft", a2 + 1)) : s2.set("width", a2), s2.setAll({ x: o2, y: -1, height: t2.height() + 2 });
    }
  }
  processAxis() {
    super.processAxis();
    const e2 = this.axis;
    null == e2.get("width") && e2.set("width", r);
    const i2 = this._root.verticalLayout;
    e2.set("layout", i2), e2.labelsContainer.set("width", r), e2.axisHeader.setAll({ layout: i2 });
  }
  axisLength() {
    return this.axis.width();
  }
  positionToPoint(e2) {
    return { x: this.positionToCoordinate(e2), y: 0 };
  }
  updateTick(e2, i2, a2, o2) {
    if (e2) {
      g(i2) || (i2 = 0);
      let n2 = 0.5;
      n2 = g(o2) && o2 > 1 ? e2.get("multiLocation", n2) : e2.get("location", n2), g(a2) && a2 != i2 && (i2 += (a2 - i2) * n2), e2.set("x", this.positionToCoordinate(i2));
      let r$1 = e2.get("length", 0);
      const l2 = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? (e2.set("y", r), l2 || (r$1 *= -1)) : (e2.set("y", 0), l2 && (r$1 *= -1)), e2.set("draw", (e3) => {
        e3.moveTo(0, 0), e3.lineTo(0, r$1);
      }), this.toggleVisibility(e2, i2, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateLabel(e2, i2, a2, o2) {
    if (e2) {
      let n2 = 0.5;
      n2 = g(o2) && o2 > 1 ? e2.get("multiLocation", n2) : e2.get("location", n2), g(i2) || (i2 = 0);
      const r$1 = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? r$1 ? (e2.set("position", "absolute"), e2.set("y", 0)) : (e2.set("position", "relative"), e2.set("y", r)) : r$1 ? (e2.set("y", 0), e2.set("position", "absolute")) : (e2.set("y", void 0), e2.set("position", "relative")), g(a2) && a2 != i2 && (i2 += (a2 - i2) * n2), e2.set("x", this.positionToCoordinate(i2)), this.toggleVisibility(e2, i2, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateGrid(e2, t, i2) {
    if (e2) {
      g(t) || (t = 0);
      let a2 = e2.get("location", 0.5);
      g(i2) && i2 != t && (t += (i2 - t) * a2), e2.set("x", this.positionToCoordinate(t)), this.toggleVisibility(e2, t, 0, 1);
    }
  }
  updateBullet(e2, t, i2) {
    if (e2) {
      const a2 = e2.get("sprite");
      if (a2) {
        g(t) || (t = 0);
        let o2 = e2.get("location", 0.5);
        g(i2) && i2 != t && (t += (i2 - t) * o2);
        let n2 = this.axis.roundAxisPosition(t, o2), r2 = this.axis._bullets[n2], l2 = -1;
        if (this.get("opposite") && (l2 = 1), e2.get("stacked"))
          if (r2) {
            let e3 = r2.get("sprite");
            e3 && a2.set("y", e3.y() + e3.height() * l2);
          } else
            a2.set("y", 0);
        this.axis._bullets[n2] = e2, a2.set("x", this.positionToCoordinate(t)), this.toggleVisibility(a2, t, 0, 1);
      }
    }
  }
  updateFill(e2, t, i2) {
    if (e2) {
      g(t) || (t = 0), g(i2) || (i2 = 1);
      let a2 = this.positionToCoordinate(t), o2 = this.positionToCoordinate(i2);
      this.fillDrawMethod(e2, a2, o2);
    }
  }
  fillDrawMethod(e2, t, i2) {
    e2.set("draw", (e3) => {
      const s2 = this.axis.gridContainer.height(), a2 = this.width();
      i2 < t && ([i2, t] = [t, i2]), t > a2 || i2 < 0 || (e3.moveTo(t, 0), e3.lineTo(i2, 0), e3.lineTo(i2, s2), e3.lineTo(t, s2), e3.lineTo(t, 0));
    });
  }
  positionTooltip(e2, t) {
    this._positionTooltip(e2, { x: this.positionToCoordinate(t), y: 0 });
  }
  updateTooltipBounds(e2) {
    const t = this.get("inside"), i2 = 1e5;
    let s2 = this._display.toGlobal({ x: 0, y: 0 }), a2 = s2.x, o2 = 0, n2 = this.axisLength(), r2 = i2, l2 = "up";
    this.get("opposite") ? t ? (l2 = "up", o2 = s2.y, r2 = i2) : (l2 = "down", o2 = s2.y - i2, r2 = i2) : t ? (l2 = "down", o2 = s2.y - i2, r2 = i2) : (l2 = "up", o2 = s2.y, r2 = i2);
    const h = { left: a2, right: a2 + n2, top: o2, bottom: o2 + r2 }, d = e2.get("bounds");
    Wt(h, d) || (e2.set("bounds", h), e2.set("pointerOrientation", l2));
  }
}
Object.defineProperty(_e, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRendererX" }), Object.defineProperty(_e, "classNames", { enumerable: true, configurable: true, writable: true, value: me.classNames.concat([_e.className]) });
class be extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_downY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: ze.new(this._root, { height: r, isMeasured: false, themeTags: ["axis", "y", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["renderer", "y"]), this._settings.opposite && this._settings.themeTags.push("opposite"), super._afterNew(), this.setPrivateRaw("letter", "Y");
    const e2 = this.grid.template;
    e2.set("width", r), e2.set("height", 0), e2.set("draw", (e3, t) => {
      e3.moveTo(0, 0), e3.lineTo(t.width(), 0);
    }), this.set("draw", (e3, t) => {
      e3.moveTo(0, 0), e3.lineTo(0, t.height());
    });
  }
  _getPan(e2, t) {
    return (e2.y - t.y) / this.height();
  }
  _changed() {
    super._changed();
    const e2 = this.axis;
    e2.ghostLabel.setPrivate("visible", !this.get("inside")), e2.ghostLabel.set("y", -1e3);
    const t = this.thumb, i2 = "opposite", s2 = "inside", a2 = this.chart;
    if (this.isDirty(i2) || this.isDirty(s2)) {
      const t2 = e2.children;
      if (this.get(s2) ? e2.addTag(s2) : e2.removeTag(s2), a2) {
        if (this.get(i2)) {
          const s3 = a2.rightAxesContainer.children;
          -1 == s3.indexOf(e2) && s3.moveValue(e2, 0), e2.addTag(i2), t2.moveValue(this, 0);
        } else {
          const s3 = a2.leftAxesContainer.children;
          -1 == s3.indexOf(e2) && s3.moveValue(e2), e2.removeTag(i2), t2.moveValue(this);
        }
        e2.ghostLabel._applyThemes(), this.labels.each((e3) => {
          e3._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      e2.markDirtySize();
    }
    const o2 = e2.labelsContainer.width();
    a2 && (this.get(i2) ? t.set("centerX", 0) : t.set("centerX", o2)), t.setPrivate("width", o2);
  }
  processAxis() {
    super.processAxis();
    const e2 = this.axis;
    null == e2.get("height") && e2.set("height", r);
    const i2 = this._root.horizontalLayout;
    e2.set("layout", i2), e2.labelsContainer.set("height", r), e2.axisHeader.set("layout", i2);
  }
  _updatePositions() {
    const e2 = this.axis, t = e2.y() - pt(e2.get("centerY", 0), e2.height());
    e2.gridContainer.set("y", t), e2.topGridContainer.set("y", t), e2.bulletsContainer.set("x", this.x());
    const i2 = e2.chart;
    if (i2) {
      const t2 = i2.plotContainer, s2 = e2.axisHeader;
      let a2 = e2.get("marginTop", 0);
      s2.children.length > 0 ? (a2 = e2.axisHeader.height(), e2.set("marginTop", a2 + 1)) : s2.set("height", a2), s2.setAll({ y: e2.y() - a2, x: -1, width: t2.width() + 2 });
    }
  }
  axisLength() {
    return this.axis.innerHeight();
  }
  positionToPoint(e2) {
    return { x: 0, y: this.positionToCoordinate(e2) };
  }
  updateLabel(e2, t, i2, a2) {
    if (e2) {
      g(t) || (t = 0);
      let o2 = 0.5;
      o2 = g(a2) && a2 > 1 ? e2.get("multiLocation", o2) : e2.get("location", o2);
      const n2 = this.get("opposite"), r2 = e2.get("inside", this.get("inside", false));
      n2 ? (e2.set("x", 0), r2 ? e2.set("position", "absolute") : e2.set("position", "relative")) : r2 ? (e2.set("x", 0), e2.set("position", "absolute")) : (e2.set("x", void 0), e2.set("position", "relative")), g(i2) && i2 != t && (t += (i2 - t) * o2), e2.set("y", this.positionToCoordinate(t)), this.toggleVisibility(e2, t, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateGrid(e2, t, i2) {
    if (e2) {
      g(t) || (t = 0);
      let a2 = e2.get("location", 0.5);
      g(i2) && i2 != t && (t += (i2 - t) * a2), e2.set("y", this.positionToCoordinate(t)), this.toggleVisibility(e2, t, 0, 1);
    }
  }
  updateTick(e2, t, i2, a2) {
    if (e2) {
      g(t) || (t = 0);
      let o2 = 0.5;
      o2 = g(a2) && a2 > 1 ? e2.get("multiLocation", o2) : e2.get("location", o2), g(i2) && i2 != t && (t += (i2 - t) * o2), e2.set("y", this.positionToCoordinate(t));
      let n2 = e2.get("length", 0);
      const r2 = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? (e2.set("x", 0), r2 && (n2 *= -1)) : r2 || (n2 *= -1), e2.set("draw", (e3) => {
        e3.moveTo(0, 0), e3.lineTo(n2, 0);
      }), this.toggleVisibility(e2, t, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateBullet(e2, t, i2) {
    if (e2) {
      const a2 = e2.get("sprite");
      if (a2) {
        g(t) || (t = 0);
        let o2 = e2.get("location", 0.5);
        g(i2) && i2 != t && (t += (i2 - t) * o2);
        let n2 = this.axis.roundAxisPosition(t, o2), r2 = this.axis._bullets[n2], l2 = 1;
        if (this.get("opposite") && (l2 = -1), e2.get("stacked"))
          if (r2) {
            let e3 = r2.get("sprite");
            e3 && a2.set("x", e3.x() + e3.width() * l2);
          } else
            a2.set("x", 0);
        this.axis._bullets[n2] = e2, a2.set("y", this.positionToCoordinate(t)), this.toggleVisibility(a2, t, 0, 1);
      }
    }
  }
  updateFill(e2, t, i2) {
    if (e2) {
      g(t) || (t = 0), g(i2) || (i2 = 1);
      let a2 = this.positionToCoordinate(t), o2 = this.positionToCoordinate(i2);
      this.fillDrawMethod(e2, a2, o2);
    }
  }
  fillDrawMethod(e2, t, i2) {
    e2.set("draw", (e3) => {
      const s2 = this.axis.gridContainer.width(), a2 = this.height();
      i2 < t && ([i2, t] = [t, i2]), t > a2 || i2 < 0 || (e3.moveTo(0, t), e3.lineTo(s2, t), e3.lineTo(s2, i2), e3.lineTo(0, i2), e3.lineTo(0, t));
    });
  }
  positionToCoordinate(e2) {
    return this._inversed ? (e2 - this._start) * this._axisLength : (this._end - e2) * this._axisLength;
  }
  positionTooltip(e2, t) {
    this._positionTooltip(e2, { x: 0, y: this.positionToCoordinate(t) });
  }
  updateTooltipBounds(e2) {
    const t = this.get("inside"), i2 = 1e5;
    let s2 = this._display.toGlobal({ x: 0, y: 0 }), a2 = s2.y, o2 = 0, n2 = this.axisLength(), r2 = i2, l2 = "right";
    this.get("opposite") ? t ? (l2 = "right", o2 = s2.x - i2, r2 = i2) : (l2 = "left", o2 = s2.x, r2 = i2) : t ? (l2 = "left", o2 = s2.x, r2 = i2) : (l2 = "right", o2 = s2.x - i2, r2 = i2);
    const h = { left: o2, right: o2 + r2, top: a2, bottom: a2 + n2 }, d = e2.get("bounds");
    Wt(h, d) || (e2.set("bounds", h), e2.set("pointerOrientation", l2));
  }
  _updateLC() {
    const e2 = this.axis, t = e2.parent;
    if (t) {
      const i2 = t.innerHeight();
      this._lc = this.axisLength() / i2, this._ls = e2.y() / i2;
    }
  }
  toAxisPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return e2 = (e2 -= this._ls) * (i2 - t) / this._lc, e2 = this.get("inversed") ? t + e2 : i2 - e2;
  }
  toGlobalPosition(e2) {
    const t = this._start || 0, i2 = this._end || 1;
    return this.get("inversed") ? e2 -= t : e2 = i2 - e2, e2 = e2 / (i2 - t) * this._lc, e2 += this._ls;
  }
  fixPosition(e2) {
    return this.get("inversed") ? e2 : 1 - e2;
  }
}
Object.defineProperty(be, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRendererY" }), Object.defineProperty(be, "classNames", { enumerable: true, configurable: true, writable: true, value: me.classNames.concat([be.className]) });
class xe extends de {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_endIndex", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeGenerator", { enumerable: true, configurable: true, writable: true, value: ie() }), Object.defineProperty(this, "_fillGenerator", { enumerable: true, configurable: true, writable: true, value: se() }), Object.defineProperty(this, "_legendStroke", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_legendFill", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "strokes", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => Ke._new(this._root, { themeTags: Ft(this.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template])) }), Object.defineProperty(this, "fills", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => Ke._new(this._root, { themeTags: Ft(this.strokes.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template])) }), Object.defineProperty(this, "_fillTemplate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeTemplate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_previousPoint", { enumerable: true, configurable: true, writable: true, value: [0, 0, 0, 0] }), Object.defineProperty(this, "_dindex", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_sindex", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  _afterNew() {
    this._fillGenerator.y0(function(e2) {
      return e2[3];
    }), this._fillGenerator.x0(function(e2) {
      return e2[2];
    }), this._fillGenerator.y1(function(e2) {
      return e2[1];
    }), this._fillGenerator.x1(function(e2) {
      return e2[0];
    }), super._afterNew();
  }
  makeStroke(e2) {
    const t = this.mainContainer.children.push(e2.make());
    return e2.push(t), t;
  }
  makeFill(e2) {
    const t = this.mainContainer.children.push(e2.make());
    return e2.push(t), t;
  }
  _updateChildren() {
    this._strokeTemplate = void 0, this._fillTemplate = void 0;
    let e2 = this.get("xAxis"), t = this.get("yAxis");
    if (this.isDirty("stroke")) {
      const e3 = this.get("stroke");
      this.strokes.template.set("stroke", e3);
      const t2 = this._legendStroke;
      t2 && t2.states.lookup("default").set("stroke", e3);
    }
    if (this.isDirty("fill")) {
      const e3 = this.get("fill");
      this.fills.template.set("fill", e3);
      const t2 = this._legendFill;
      t2 && t2.states.lookup("default").set("fill", e3);
    }
    if (this.isDirty("curveFactory")) {
      const e3 = this.get("curveFactory");
      e3 && (this._strokeGenerator.curve(e3), this._fillGenerator.curve(e3));
    }
    if (e2.inited && t.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty || this.isDirty("connect") || this.isDirty("curveFactory")) {
        this.fills.each((e4) => {
          e4.setPrivate("visible", false);
        }), this.strokes.each((e4) => {
          e4.setPrivate("visible", false);
        }), this.axisRanges.each((e4) => {
          let t3 = e4.fills;
          t3 && t3.each((e5) => {
            e5.setPrivate("visible", false);
          });
          let i3 = e4.strokes;
          i3 && i3.each((e5) => {
            e5.setPrivate("visible", false);
          });
        });
        let e3 = this.startIndex(), t2 = this.strokes.template.get("templateField"), i2 = this.fills.template.get("templateField"), a2 = true, o2 = true;
        t2 && (a2 = false), i2 && (o2 = false);
        for (let l2 = e3 - 1; l2 >= 0; l2--) {
          let n3 = this.dataItems[l2], r3 = true, h = n3.dataContext;
          if (t2 && h[t2] && (a2 = true), i2 && h[i2] && (o2 = true), w(this._valueFields, (e4) => {
            g(n3.get(e4)) || (r3 = false);
          }), r3 && a2 && o2) {
            e3 = l2;
            break;
          }
        }
        let n2 = this.dataItems.length, r2 = this.endIndex();
        if (r2 < n2) {
          r2++;
          for (let e4 = r2; e4 < n2; e4++) {
            let t3 = this.dataItems[e4], i3 = true;
            if (w(this._valueFields, (e5) => {
              g(t3.get(e5)) || (i3 = false);
            }), i3) {
              r2 = e4 + 1;
              break;
            }
          }
        }
        if (e3 > 0 && e3--, this._endIndex = r2, this._clearGraphics(), this._sindex = 0, this._dindex = e3, 1 == this.dataItems.length)
          this._startSegment(0);
        else
          for (; this._dindex < r2 - 1; )
            this._startSegment(this._dindex), this._sindex++;
      }
    } else
      this._skipped = true;
    super._updateChildren();
  }
  _clearGraphics() {
    this.strokes.clear(), this.fills.clear();
  }
  _startSegment(e2) {
    let t = this._endIndex, i2 = t;
    const s2 = this.get("autoGapCount"), a2 = this.get("connect"), o2 = this.makeFill(this.fills), n2 = this._fillTemplate, r2 = this.fills.template;
    n2 && n2 != r2 && (o2.template = n2), o2.setPrivate("visible", true);
    const l2 = this.makeStroke(this.strokes), h = this._strokeTemplate;
    h && h != this.strokes.template && (l2.template = h), l2.setPrivate("visible", true);
    let d = this.get("xAxis"), c = this.get("yAxis"), u2 = this.get("baseAxis"), g2 = this.get("vcx", 1), p = this.get("vcy", 1), m = this._xField, _2 = this._yField, b = this._xOpenField, x2 = this._yOpenField;
    const f = this.get("openValueXField"), v = this.get("openValueYField");
    f || (b = this._xField), v || (x2 = this._yField);
    const y = this.get("stacked"), w2 = d.basePosition(), P = c.basePosition();
    let A;
    A = u2 === c ? this._yField : this._xField;
    const k2 = [];
    let D2 = [];
    k2.push(D2);
    const T = this.strokes.template.get("templateField"), M = this.fills.template.get("templateField");
    let C = this.get("locationX", 0.5), O2 = this.get("locationY", 0.5), S2 = this.get("openLocationX", C), X = this.get("openLocationY", O2);
    const Y2 = this.get("minDistance", 0);
    let L, F2 = this.fills.template.get("visible");
    this.axisRanges.length > 0 && (F2 = true);
    let R2 = false;
    (y || f || v) && (R2 = true);
    const j = { points: D2, segments: k2, stacked: y, getOpen: R2, basePosX: w2, basePosY: P, fillVisible: F2, xField: m, yField: _2, xOpenField: b, yOpenField: x2, vcx: g2, vcy: p, baseAxis: u2, xAxis: d, yAxis: c, locationX: C, locationY: O2, openLocationX: S2, openLocationY: X, minDistance: Y2 };
    for (L = e2; L < i2; L++) {
      this._dindex = L;
      const t2 = this._dataItems[L];
      let n3 = t2.get(m), r3 = t2.get(_2);
      if (null == n3 || null == r3 ? a2 || (D2 = [], k2.push(D2), j.points = D2) : this._getPoints(t2, j), T) {
        let s3 = t2.dataContext[T];
        if (s3) {
          if (s3 instanceof Le || (s3 = Le.new(s3)), this._strokeTemplate = s3, L > e2) {
            i2 = L;
            break;
          }
          l2.template = s3;
        }
      }
      if (M) {
        let s3 = t2.dataContext[M];
        if (s3) {
          if (s3 instanceof Le || (s3 = Le.new(s3)), this._fillTemplate = s3, L > e2) {
            i2 = L;
            break;
          }
          o2.template = s3;
        }
      }
      if (!a2) {
        let e3 = this.dataItems[L + 1];
        e3 && u2.shouldGap(t2, e3, s2, A) && (D2 = [], k2.push(D2), j.points = D2);
      }
    }
    o2.setRaw("userData", [e2, L]), l2.setRaw("userData", [e2, L]), L === t && this._endLine(D2, k2[0][0]), l2 && this._drawStroke(l2, k2), o2 && this._drawFill(o2, k2), this.axisRanges.each((t2) => {
      const i3 = t2.container, s3 = t2.fills, a3 = this.makeFill(s3);
      i3 && i3.children.push(a3), a3.setPrivate("visible", true), this._drawFill(a3, k2);
      const o3 = t2.strokes, n3 = this.makeStroke(o3);
      i3 && i3.children.push(n3), n3.setPrivate("visible", true), this._drawStroke(n3, k2), a3.setRaw("userData", [e2, L]), n3.setRaw("userData", [e2, L]);
    });
  }
  _getPoints(e2, t) {
    let i2 = t.points, s2 = e2.get("locationX", t.locationX), a2 = e2.get("locationY", t.locationY), o2 = t.xAxis.getDataItemPositionX(e2, t.xField, s2, t.vcx), n$12 = t.yAxis.getDataItemPositionY(e2, t.yField, a2, t.vcy);
    if (this._shouldInclude(o2)) {
      const s3 = this.getPoint(o2, n$12), a3 = [s3.x, s3.y];
      if (s3.x += this._x, s3.y += this._y, e2.set("point", s3), t.fillVisible) {
        let i3 = o2, s4 = n$12;
        if (t.baseAxis === t.xAxis ? s4 = t.basePosY : t.baseAxis === t.yAxis && (i3 = t.basePosX), t.getOpen) {
          let a4 = e2.get(t.xOpenField), o3 = e2.get(t.yOpenField);
          if (null != a4 && null != o3) {
            let a5 = e2.get("openLocationX", t.openLocationX), o4 = e2.get("openLocationY", t.openLocationY);
            if (t.stacked) {
              let n$13 = e2.get("stackToItemX"), r3 = e2.get("stackToItemY");
              n$13 ? (i3 = t.xAxis.getDataItemPositionX(n$13, t.xField, a5, n$13.component.get("vcx")), n(i3) && (i3 = t.basePosX)) : i3 = t.yAxis === t.baseAxis ? t.basePosX : t.xAxis.getDataItemPositionX(e2, t.xOpenField, a5, t.vcx), r3 ? (s4 = t.yAxis.getDataItemPositionY(r3, t.yField, o4, r3.component.get("vcy")), n(s4) && (s4 = t.basePosY)) : s4 = t.xAxis === t.baseAxis ? t.basePosY : t.yAxis.getDataItemPositionY(e2, t.yOpenField, o4, t.vcy);
            } else
              i3 = t.xAxis.getDataItemPositionX(e2, t.xOpenField, a5, t.vcx), s4 = t.yAxis.getDataItemPositionY(e2, t.yOpenField, o4, t.vcy);
          }
        }
        let r2 = this.getPoint(i3, s4);
        a3[2] = r2.x, a3[3] = r2.y;
      }
      if (t.minDistance > 0) {
        const e3 = a3[0], s4 = a3[1], o3 = a3[2], n2 = a3[3], r2 = this._previousPoint, l2 = r2[0], h = r2[1], d = r2[2], c = r2[3];
        (Math.hypot(e3 - l2, s4 - h) > t.minDistance || o3 && n2 && Math.hypot(o3 - d, n2 - c) > t.minDistance) && (i2.push(a3), this._previousPoint = a3);
      } else
        i2.push(a3);
    }
  }
  _endLine(e2, t) {
  }
  _drawStroke(e2, t) {
    e2.get("visible") && !e2.get("forceHidden") && e2.set("draw", (e3) => {
      w(t, (t2) => {
        this._strokeGenerator.context(e3), this._strokeGenerator(t2);
      });
    });
  }
  _drawFill(e2, t) {
    e2.get("visible") && !e2.get("forceHidden") && e2.set("draw", (e3) => {
      w(t, (t2) => {
        this._fillGenerator.context(e3), this._fillGenerator(t2);
      });
    });
  }
  _processAxisRange(e2) {
    super._processAxisRange(e2), e2.fills = new se$1(Le.new({}), () => Ke._new(this._root, { themeTags: Ft(e2.fills.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template, e2.fills.template])), e2.strokes = new se$1(Le.new({}), () => Ke._new(this._root, { themeTags: Ft(e2.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template, e2.strokes.template]));
  }
  createLegendMarker(e2) {
    const t = this.get("legendDataItem");
    if (t) {
      const e3 = t.get("marker"), i2 = t.get("markerRectangle");
      i2 && i2.setPrivate("visible", false), e3.set("background", ze.new(e3._root, { fillOpacity: 0, fill: Kt(0) }));
      const s2 = e3.children.push(Ke._new(e3._root, { themeTags: ["line", "series", "legend", "marker", "stroke"], interactive: false }, [this.strokes.template]));
      this._legendStroke = s2;
      const a2 = e3.children.push(Ke._new(e3._root, { themeTags: ["line", "series", "legend", "marker", "fill"] }, [this.fills.template]));
      this._legendFill = a2;
      const o2 = this._root.interfaceColors.get("disabled");
      if (s2.states.create("disabled", { fill: o2, stroke: o2 }), a2.states.create("disabled", { fill: o2, stroke: o2 }), this.bullets.length > 0) {
        const t2 = this.bullets.getIndex(0);
        if (t2) {
          const i3 = t2(e3._root, this, new g$1(this, { legend: true }, {}));
          if (i3) {
            const t3 = i3.get("sprite");
            t3 instanceof Ke && t3.states.create("disabled", { fill: o2, stroke: o2 }), t3 && (t3.set("tooltipText", void 0), t3.set("tooltipHTML", void 0), e3.children.push(t3), t3.setAll({ x: e3.width() / 2, y: e3.height() / 2 }), e3.events.on("boundschanged", () => {
              t3.setAll({ x: e3.width() / 2, y: e3.height() / 2 });
            }));
          }
        }
      }
    }
  }
}
Object.defineProperty(xe, "className", { enumerable: true, configurable: true, writable: true, value: "LineSeries" }), Object.defineProperty(xe, "classNames", { enumerable: true, configurable: true, writable: true, value: de.classNames.concat([xe.className]) });
class u extends de {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_ph", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_pw", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  _makeGraphics(t, e2) {
    return this.makeColumn(e2, t);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const t = this.get("xAxis"), e2 = this.get("yAxis"), i2 = "CategoryAxis", s2 = "ValueAxis";
    t.isType(i2) && (this.get("openCategoryXField") || (this._xOpenField = this._xField)), t.isType(s2) && (this.get("openValueXField") || (this._xOpenField = this._xField)), e2.isType(i2) && (this.get("openCategoryYField") || (this._yOpenField = this._yField)), e2.isType(s2) && (this.get("openValueYField") || (this._yOpenField = this._yField));
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.get("xAxis"), e2 = this.get("yAxis"), i2 = this.dataItems.length, s2 = Math.max(0, this.startIndex() - 2), a2 = Math.min(this.endIndex() + 2, i2 - 1);
    if (t.inited && e2.inited)
      for (let o2 = s2; o2 <= a2; o2++) {
        let t2 = this.dataItems[o2];
        this._createGraphics(t2);
      }
  }
  _updateChildren() {
    const t = this.chart;
    t && (this._ph = t.plotContainer.height(), this._pw = t.plotContainer.width());
    const e2 = this.get("xAxis"), s2 = this.get("yAxis"), a2 = this.get("baseAxis"), o2 = this.columns.template;
    this.isDirty("fill") && null == o2.get("fill") && o2.set("fill", this.get("fill")), this.isDirty("stroke") && null == o2.get("stroke") && o2.set("stroke", this.get("stroke"));
    let n2 = 0, r2 = 0, h = 0;
    w(a2.series, (t2) => {
      if (t2 instanceof u) {
        const e3 = t2.get("stacked");
        e3 && 0 == h && r2++, !e3 && t2.get("clustered") && r2++;
      }
      t2 === this && (n2 = r2 - 1), h++;
    }), this.get("clustered") || (n2 = 0, r2 = 1), 0 === r2 && (r2 = 1, n2 = 0);
    const l2 = e2.get("renderer"), g2 = s2.get("renderer"), d = "cellStartLocation", c = "cellEndLocation", m = l2.get(d, 0), p = l2.get(c, 1), x2 = g2.get(d, 0), _2 = g2.get(c, 1);
    if (this._aLocationX0 = m + n2 / r2 * (p - m), this._aLocationX1 = m + (n2 + 1) / r2 * (p - m), this._aLocationY0 = x2 + n2 / r2 * (_2 - x2), this._aLocationY1 = x2 + (n2 + 1) / r2 * (_2 - x2), e2.inited && s2.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const t2 = this.dataItems.length;
        let e3 = Math.max(0, this.startIndex() - 2), i2 = Math.min(this.endIndex() + 2, t2 - 1);
        for (let a3 = 0; a3 < e3; a3++)
          this._toggleColumn(this.dataItems[a3], false);
        let s3 = this.dataItems[e3];
        for (let a3 = e3; a3 <= i2; a3++) {
          let t3 = this.dataItems[a3];
          if (null != t3.get("valueX") && null != t3.get("valueY")) {
            if (s3 = t3, a3 > 0 && e3 > 0)
              for (let t4 = a3 - 1; t4 >= 0; t4--) {
                let e4 = this.dataItems[t4];
                if (null != e4.get("valueX") && null != e4.get("valueY")) {
                  s3 = e4;
                  break;
                }
              }
            break;
          }
          this._toggleColumn(t3, false);
        }
        for (let a3 = e3; a3 <= i2; a3++) {
          let t3 = this.dataItems[a3];
          this._updateGraphics(t3, s3), null != t3.get("valueX") && null != t3.get("valueY") && (s3 = t3);
        }
        for (let a3 = i2 + 1; a3 < t2; a3++)
          this._toggleColumn(this.dataItems[a3], false);
      }
    } else
      this._skipped = true;
    this.updateLegendMarker(this.get("tooltipDataItem")), super._updateChildren();
  }
  _createGraphics(t) {
    let e2 = t.get("graphics");
    if (!e2) {
      e2 = this._makeGraphics(this.columns, t), t.set("graphics", e2), e2._setDataItem(t);
      const a2 = t.get("legendDataItem");
      if (a2) {
        const t2 = a2.get("markerRectangle");
        if (t2) {
          const a3 = t2.states.lookup("default");
          w(Ue, (i2) => {
            const s2 = e2.get(i2, this.get(i2));
            t2.set(i2, s2), a3.set(i2, s2);
          });
        }
      }
      let o2 = t.get("rangeGraphics");
      o2 && w(o2, (t2) => {
        t2.dispose();
      }), o2 = [], t.setRaw("rangeGraphics", o2), this.axisRanges.each((e3) => {
        const i2 = e3.container, s2 = this._makeGraphics(e3.columns, t);
        o2 && o2.push(s2), s2.setPrivate("list", e3.columns), i2.children.push(s2);
      });
    }
  }
  createAxisRange(t) {
    return w(this.dataItems, (t2) => {
      const e2 = t2.get("graphics");
      e2 && (e2.dispose(), t2.set("graphics", void 0));
    }), super.createAxisRange(t);
  }
  _updateGraphics(t, e$1) {
    let s2 = t.get("graphics");
    const a2 = this._xField, r2 = this._yField, h = t.get(a2), l2 = t.get(r2);
    if (null != h && null != l2) {
      const h2 = this._xOpenField, l3 = this._yOpenField, g2 = this.get("locationX", t.get("locationX", 0.5)), d = this.get("locationY", t.get("locationY", 0.5)), c = this.get("openLocationX", t.get("openLocationX", g2)), m = this.get("openLocationY", t.get("openLocationY", d)), p = s2.get("width"), u2 = s2.get("height"), x2 = this.get("stacked"), _2 = this.get("xAxis"), I2 = this.get("yAxis"), f = this.get("baseAxis"), y = _2.get("start"), b = _2.get("end"), P = I2.get("start"), v = I2.get("end");
      let D2, T, C, w$1, A = this.get("vcy", 1), k2 = this.get("vcx", 1), F2 = false, M = false;
      if (I2.isType("CategoryAxis") && _2.isType("CategoryAxis")) {
        let e$12 = this._aLocationX0 + c - 0.5, i2 = this._aLocationX1 + g2 - 0.5;
        if (p instanceof e) {
          let t2 = (i2 - e$12) * (1 - p.value) / 2;
          e$12 += t2, i2 -= t2;
        }
        if (D2 = _2.getDataItemPositionX(t, h2, e$12, k2), T = _2.getDataItemPositionX(t, a2, i2, k2), e$12 = this._aLocationY0 + m - 0.5, i2 = this._aLocationY1 + d - 0.5, u2 instanceof e) {
          let t2 = (i2 - e$12) * (1 - u2.value) / 2;
          e$12 += t2, i2 -= t2;
        }
        C = I2.getDataItemPositionY(t, l3, e$12, A), w$1 = I2.getDataItemPositionY(t, r2, i2, A), t.setRaw("point", { x: D2 + (T - D2) / 2, y: C + (w$1 - C) / 2 });
      } else if (_2 === f) {
        let e$12 = this._aLocationX0 + c - 0.5, i2 = this._aLocationX1 + g2 - 0.5;
        if (p instanceof e) {
          let t2 = (i2 - e$12) * (1 - p.value) / 2;
          e$12 += t2, i2 -= t2;
        }
        if (D2 = _2.getDataItemPositionX(t, h2, e$12, k2), T = _2.getDataItemPositionX(t, a2, i2, k2), C = I2.getDataItemPositionY(t, r2, d, A), this._yOpenField !== this._yField)
          w$1 = I2.getDataItemPositionY(t, l3, m, A);
        else if (x2) {
          let e2 = t.get("stackToItemY");
          w$1 = e2 ? I2.getDataItemPositionY(e2, r2, m, e2.component.get("vcy")) : I2.basePosition();
        } else
          w$1 = I2.basePosition();
        t.setRaw("point", { x: D2 + (T - D2) / 2, y: C }), M = true;
      } else if (I2 === f) {
        let e$12 = this._aLocationY0 + m - 0.5, i2 = this._aLocationY1 + d - 0.5;
        if (u2 instanceof e) {
          let t2 = (i2 - e$12) * (1 - u2.value) / 2;
          e$12 += t2, i2 -= t2;
        }
        if (C = I2.getDataItemPositionY(t, l3, e$12, A), w$1 = I2.getDataItemPositionY(t, r2, i2, A), T = _2.getDataItemPositionX(t, a2, g2, k2), this._xOpenField !== this._xField)
          D2 = _2.getDataItemPositionX(t, h2, c, k2);
        else if (x2) {
          let e2 = t.get("stackToItemX");
          D2 = e2 ? _2.getDataItemPositionX(e2, a2, c, e2.component.get("vcx")) : _2.basePosition();
        } else
          D2 = _2.basePosition();
        F2 = true, t.setRaw("point", { x: T, y: C + (w$1 - C) / 2 });
      }
      this._updateSeriesGraphics(t, s2, D2, T, C, w$1, F2, M), D2 < y && T < y || D2 > b && T > b || C < P && w$1 <= P || C >= v && w$1 > v || n(D2) || n(C) ? this._toggleColumn(t, false) : this._toggleColumn(t, true);
      let X = t.get("rangeGraphics");
      X && w(X, (e2) => {
        this._updateSeriesGraphics(t, e2, D2, T, C, w$1, F2, M);
      }), this._applyGraphicsStates(t, e$1);
    }
  }
  _updateSeriesGraphics(t, e2, i2, s2, a2, o2, n2, h) {
    const l2 = e2.get("width"), g$12 = e2.get("height"), d = e2.get("maxWidth"), c = e2.get("maxHeight"), m = this.getPoint(i2, a2), p = this.getPoint(s2, o2), u2 = t.get("point");
    if (u2) {
      const t2 = this.getPoint(u2.x, u2.y);
      u2.x = t2.x + this._x, u2.y = t2.y + this._y;
    }
    if (i2 = m.x, s2 = p.x, a2 = m.y, o2 = p.y, g(l2)) {
      const t2 = (s2 - i2 - l2) / 2;
      i2 += t2, s2 -= t2;
    }
    if (g(d) && d < Math.abs(s2 - i2)) {
      const t2 = (s2 - i2 - d) / 2;
      i2 += t2, s2 -= t2;
    }
    if (g(g$12)) {
      const t2 = (o2 - a2 - g$12) / 2;
      a2 += t2, o2 -= t2;
    }
    if (g(c) && c < Math.abs(o2 - a2)) {
      const t2 = (o2 - a2 - c) / 2;
      a2 += t2, o2 -= t2;
    }
    this.get("adjustBulletPosition") && (n2 && (s2 = Math.min(Math.max(0, s2), this._pw), i2 = Math.min(Math.max(0, i2), this._pw)), h && (a2 = Math.min(Math.max(0, a2), this._ph), o2 = Math.min(Math.max(0, o2), this._ph))), t.setRaw("left", i2), t.setRaw("right", s2), t.setRaw("top", a2), t.setRaw("bottom", o2), e2.setPrivate("width", s2 - i2), e2.setPrivate("height", o2 - a2), e2.set("x", i2), e2.set("y", o2 - (o2 - a2));
  }
  _handleDataSetChange() {
    super._handleDataSetChange(), w(this._dataItems, (t) => {
      this._toggleColumn(t, false);
    });
  }
  _applyGraphicsStates(t, e2) {
    const i2 = t.get("graphics"), s2 = i2.states.lookup("dropFromOpen"), a2 = i2.states.lookup("riseFromOpen"), o2 = i2.states.lookup("dropFromPrevious"), n2 = i2.states.lookup("riseFromPrevious");
    if (s2 || o2 || a2 || n2) {
      const i3 = this.get("xAxis"), h = this.get("yAxis"), l2 = this.get("baseAxis");
      let g$12, d, c;
      l2 === i3 && h.isType("ValueAxis") ? (g$12 = t.get(this._yOpenField), d = t.get(this._yField), c = e2.get(this._yField)) : l2 === h && i3.isType("ValueAxis") && (g$12 = t.get(this._xOpenField), d = t.get(this._xField), c = e2.get(this._xField)), g(g$12) && g(d) && (d < g$12 ? s2 && s2.apply() : a2 && a2.apply(), g(c) && (d < c ? o2 && o2.apply() : n2 && n2.apply()));
    }
  }
  disposeDataItem(t) {
    super.disposeDataItem(t);
    const e2 = t.get("graphics");
    e2 && (this.columns.removeValue(e2), e2.dispose());
    const s2 = t.get("rangeGraphics");
    s2 && w(s2, (t2) => {
      const e3 = t2.getPrivate("list");
      e3 && e3.removeValue(t2), t2.dispose();
    });
  }
  hideDataItem(t, e2) {
    const s2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return n$1(this, void 0, void 0, function* () {
      const a2 = [s2.hideDataItem.call(this, t, e2)], o2 = t.get("graphics");
      o2 && a2.push(o2.hide(e2));
      const n2 = t.get("rangeGraphics");
      n2 && w(n2, (t2) => {
        a2.push(t2.hide(e2));
      }), yield Promise.all(a2);
    });
  }
  _toggleColumn(t, e2) {
    const s2 = t.get("graphics");
    s2 && s2.setPrivate("visible", e2);
    const a2 = t.get("rangeGraphics");
    a2 && w(a2, (t2) => {
      t2.setPrivate("visible", e2);
    });
    const o2 = t.bullets;
    o2 && w(o2, (t2) => {
      t2.setPrivate("hidden", !e2);
    });
  }
  showDataItem(t, e2) {
    const s2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return n$1(this, void 0, void 0, function* () {
      const a2 = [s2.showDataItem.call(this, t, e2)], o2 = t.get("graphics");
      o2 && a2.push(o2.show(e2));
      const n2 = t.get("rangeGraphics");
      n2 && w(n2, (t2) => {
        a2.push(t2.show(e2));
      }), yield Promise.all(a2);
    });
  }
  updateLegendMarker(t) {
    let e2 = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker") && !t) {
      const e3 = this.dataItems[this.endIndex() - 1];
      e3 && (t = e3);
    }
    if (e2) {
      let a2 = this.columns.template;
      if (t) {
        let e3 = t.get("graphics");
        e3 && (a2 = e3);
      }
      const o2 = e2.get("markerRectangle");
      if (o2 && !e2.get("itemContainer").get("disabled")) {
        const t2 = o2.states.lookup("default");
        w(Ue, (e3) => {
          const i2 = a2.get(e3, this.get(e3));
          o2.set(e3, i2), t2.set(e3, i2);
        });
      }
    }
  }
  _getTooltipTarget(t) {
    if ("bullet" == this.get("seriesTooltipTarget"))
      return super._getTooltipTarget(t);
    let e2 = t.get("graphics");
    return e2 || this;
  }
}
Object.defineProperty(u, "className", { enumerable: true, configurable: true, writable: true, value: "BaseColumnSeries" }), Object.defineProperty(u, "classNames", { enumerable: true, configurable: true, writable: true, value: de.classNames.concat([u.className]) });
class x extends ce {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_frequency", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_itemMap", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  _afterNew() {
    this._settings.themeTags = Ft(this._settings.themeTags, ["axis"]), this.fields.push("category"), this.setPrivateRaw("name", "category"), this.addTag("category"), super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.dataItems.length;
    let e2 = 0;
    this._valuesDirty && (this._itemMap = {}, w(this.dataItems, (t2) => {
      t2.setRaw("index", e2), this._itemMap[t2.get("category")] = t2, e2++;
    }), this.setPrivateRaw("maxZoomFactor", t)), this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * t), 0)), this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * t), t)), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && this.dataItems.length > 0 && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges());
  }
  _handleRangeChange() {
    w(this.series, (t) => {
      let e2 = this.dataItems[this.startIndex()].get("category"), s2 = this.dataItems[this.endIndex() - 1].get("category"), a2 = t.get("baseAxis"), o2 = t.get("xAxis"), n2 = t.get("yAxis");
      if (o2 instanceof x && n2 instanceof x)
        t._markDirtyAxes();
      else if (a2 === this) {
        let r2, h, l2 = n2;
        if (o2 === a2 ? (t.get("categoryXField") && (r2 = "categoryX"), t.get("openCategoryXField") && (h = "openCategoryX")) : n2 === a2 && (t.get("categoryYField") && (r2 = "categoryY"), t.get("openCategoryYField") && (h = "openCategoryY"), l2 = o2), "ValueAxis" == l2.className && (r2 || h)) {
          let a3, o3;
          for (let i2 = 0, s3 = t.dataItems.length; i2 < s3; i2++) {
            let s4 = t.dataItems[i2];
            if (r2 && s4.get(r2) === e2) {
              a3 = s4;
              break;
            }
            if (h && s4.get(h) === e2) {
              a3 = s4;
              break;
            }
          }
          for (let e3 = t.dataItems.length - 1; e3 >= 0; e3--) {
            let i2 = t.dataItems[e3];
            if (r2 && i2.get(r2) === s2) {
              o3 = i2;
              break;
            }
            if (h && i2.get(h) === s2) {
              o3 = i2;
              break;
            }
          }
          let n3 = 0, l3 = t.dataItems.length;
          a3 && (n3 = t.dataItems.indexOf(a3)), o3 && (l3 = t.dataItems.indexOf(o3) + 1), t.setPrivate("startIndex", n3), t.setPrivate("endIndex", l3);
          let g2 = false;
          for (let e3 = n3; e3 < l3; e3++) {
            const s3 = t.dataItems[e3];
            if (w(t.__valueXShowFields, (t2) => {
              null != s3.get(t2) && (g2 = true);
            }), w(t.__valueYShowFields, (t2) => {
              null != s3.get(t2) && (g2 = true);
            }), g2)
              break;
          }
          t.setPrivate("outOfSelection", !g2);
        }
        t._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    var t;
    const e2 = this.get("renderer"), i2 = this.dataItems.length;
    let s2 = this.startIndex();
    s2 > 0 && s2--;
    let a2 = this.endIndex();
    a2 < i2 && a2++;
    const o2 = e2.get("minorLabelsEnabled"), n2 = e2.get("minorGridEnabled", o2);
    let r2 = e2.axisLength() / Math.max(e2.get("minGridDistance"), 1), h = Math.max(1, Math.min(i2, Math.ceil((a2 - s2) / r2)));
    s2 = Math.floor(s2 / h) * h, this._frequency = h;
    for (let g2 = 0; g2 < i2; g2++)
      this._toggleDataItem(this.dataItems[g2], false);
    let l2 = this.dataItems[s2].get("index", 0);
    for (let g2 = s2; g2 < a2; g2 += h) {
      let t2 = this.dataItems[g2];
      this._createAssets(t2, []), this._toggleDataItem(t2, true);
      let e3 = h;
      n2 && (e3 = 1), this._prepareDataItem(t2, l2, e3), l2++;
    }
    if (e2.get("minorGridEnabled"))
      for (let g2 = s2; g2 < a2; g2++) {
        let e3 = this.dataItems[g2];
        g2 % h != 0 && (this._createAssets(e3, ["minor"], true), this._toggleDataItem(e3, true), this._prepareDataItem(e3, 0, 1), o2 || null === (t = e3.get("label")) || void 0 === t || t.setPrivate("visible", false));
      }
    this._updateGhost();
  }
  _prepareDataItem(t, e2, i2) {
    let s2 = this.get("renderer"), a2 = t.get("categoryLocation", 0), o2 = t.get("endCategoryLocation", 1), n2 = t.get("index");
    g(n2) || (n2 = this.categoryToIndex(t.get("category")));
    let h, l2 = this.indexToPosition(n2, a2), g$12 = t.get("endCategory");
    g$12 ? (h = this.categoryToIndex(g$12), g(h) || (h = n2)) : h = n2;
    let d, c, m = this.indexToPosition(h, o2);
    d = t.get("isRange") ? h : n2 + this._frequency - 1, c = this.indexToPosition(d, o2), s2.updateLabel(t.get("label"), l2, m, i2), s2.updateGrid(t.get("grid"), l2, m), s2.updateTick(t.get("tick"), l2, m, i2), s2.updateFill(t.get("axisFill"), l2, c), this._processBullet(t), s2.updateBullet(t.get("bullet"), l2, m);
    const p = this.get("fillRule");
    p && p(t, e2);
  }
  startIndex() {
    let t = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), t - 1);
  }
  endIndex() {
    let t = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", t), t));
  }
  baseValue() {
  }
  basePosition() {
    return 0;
  }
  getX(t) {
    let e2 = this._itemMap[t];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getY(t) {
    let e2 = this._itemMap[t];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getDataItemPositionX(t, e2, i2, s2) {
    const a2 = t.get(e2), o2 = this._itemMap[a2];
    return o2 ? this.indexToPosition(o2.get("index", 0), i2) : NaN;
  }
  getDataItemCoordinateX(t, e2, i2, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t, e2, i2, s2));
  }
  getDataItemPositionY(t, e2, i2, s2) {
    const a2 = t.get(e2), o2 = this._itemMap[a2];
    return o2 ? this.indexToPosition(o2.get("index", 0), i2) : NaN;
  }
  getDataItemCoordinateY(t, e2, i2, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t, e2, i2, s2));
  }
  indexToPosition(t, e2) {
    g(e2) || (e2 = 0.5);
    let i2 = this.dataItems.length, s2 = this.get("startLocation", 0);
    i2 -= s2, i2 -= 1 - this.get("endLocation", 1);
    let a2 = (t + e2 - s2) / i2, o2 = this.dataItems[t];
    return o2 && (a2 += o2.get("deltaPosition", 0)), a2;
  }
  categoryToIndex(t) {
    let e2 = this._itemMap[t];
    return e2 ? e2.get("index") : NaN;
  }
  dataItemToPosition(t) {
    return this.indexToPosition(t.get("index"));
  }
  roundAxisPosition(t, e2) {
    return t += (0.5 - e2) / this.dataItems.length, this.indexToPosition(this.axisPositionToIndex(t), e2);
  }
  axisPositionToIndex(t) {
    let e2 = this.dataItems.length;
    return de$1(Math.floor(t * e2), 0, e2 - 1);
  }
  getTooltipText(t, e2) {
    const i2 = this.dataItems[this.axisPositionToIndex(t)];
    if (i2) {
      const t2 = i2.get("label");
      if (t2)
        return qe(t2, this.get("tooltipText", ""));
    }
  }
  _updateTooltipText(t, e2) {
    t._setDataItem(this.dataItems[this.axisPositionToIndex(e2)]), t.label.text.markDirtyText();
  }
  getSeriesItem(t, e2) {
    if (this.dataItems.length > 0) {
      let i2 = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), s2 = this.axisPositionToIndex(e2), a2 = t.dataItems[s2], o2 = this.dataItems[s2], n2 = o2.get("category");
      if (a2 && o2 && a2.get(i2) === n2)
        return a2;
      for (let e3 = 0, r2 = t.dataItems.length; e3 < r2; e3++) {
        let s3 = t.dataItems[e3];
        if (s3.get(i2) === n2)
          return s3;
      }
    }
  }
  zoomToIndexes(t, e2, i2) {
    let s2 = this.dataItems.length;
    this.zoom(t / s2, e2 / s2, i2);
  }
  zoomToCategories(t, e2, i2) {
    this.zoomToIndexes(this.categoryToIndex(t), this.categoryToIndex(e2) + 1, i2);
  }
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
}
Object.defineProperty(x, "className", { enumerable: true, configurable: true, writable: true, value: "CategoryAxis" }), Object.defineProperty(x, "classNames", { enumerable: true, configurable: true, writable: true, value: ce.classNames.concat([x.className]) });
class _ extends u {
  constructor() {
    super(...arguments), Object.defineProperty(this, "columns", { enumerable: true, configurable: true, writable: true, value: new se$1(Le.new({}), () => n$2._new(this._root, { position: "absolute", themeTags: Ft(this.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template])) });
  }
  makeColumn(t, e2) {
    const i2 = this.mainContainer.children.push(e2.make());
    return i2._setDataItem(t), e2.push(i2), i2;
  }
  _processAxisRange(t) {
    super._processAxisRange(t), t.columns = new se$1(Le.new({}), () => n$2._new(this._root, { position: "absolute", themeTags: Ft(t.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template, t.columns.template]));
  }
}
Object.defineProperty(_, "className", { enumerable: true, configurable: true, writable: true, value: "ColumnSeries" }), Object.defineProperty(_, "classNames", { enumerable: true, configurable: true, writable: true, value: u.classNames.concat([_.className]) });
export {
  _e as AxisRendererXAm5,
  be as AxisRendererYAm5,
  x as CategoryAxisAm5,
  _ as ColumnSeriesAm5,
  xe as LineSeriesAm5,
  ue as ValueAxisAm5,
  oe as XYChartAm5,
  re as XYCursorAm5
};
