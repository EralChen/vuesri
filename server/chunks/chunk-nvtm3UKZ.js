import { aC as W, Q as Qe, b as Y, W as We, V as Ve, a3 as Zt, v, aD as gt, d as $$1, q, m, aE as w, x as l, aF as ke, aj as zt, r as rt, i as it, aG as ae$1, aH as lt, a6 as H, aI as vt, al as he$1, ak as ei, aq as bt, aJ as Gt, as as V, at as Be, aK as e, $ as $t, am as ii, ao as X, a9 as D$1, J as J$1, a as z, ac as K, az as F, y, aL as Ht, aM as oe$1, h as $e, ax as Fe } from "./chunk-55vU5FGs.js";
import { s } from "./chunk-tGe-gOT_.js";
import { l as l$1 } from "./chunk-YavKHluu.js";
import { U, D, _ as _$1, g, B, V as V$1, k, I } from "./chunk-zBoS714k.js";
import { o, n } from "./chunk-Z7zZ89ZF.js";
import { ho as t } from "./chunk-KFNcxJaF.js";
import "@popperjs/core";
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
function ie(e2, t2) {
  var i = k(true), s2 = null, a = $, o2 = null, n2 = V$1(r);
  function r(r2) {
    var l2, h, d, c = (r2 = J(r2)).length, u2 = false;
    for (null == s2 && (o2 = a(d = n2())), l2 = 0; l2 <= c; ++l2)
      !(l2 < c && i(h = r2[l2], l2, r2)) === u2 && ((u2 = !u2) ? o2.lineStart() : o2.lineEnd()), u2 && o2.point(+e2(h, l2, r2), +t2(h, l2, r2));
    if (d)
      return o2 = null, d + "" || null;
  }
  return e2 = "function" == typeof e2 ? e2 : void 0 === e2 ? ee : k(e2), t2 = "function" == typeof t2 ? t2 : void 0 === t2 ? te : k(t2), r.x = function(t3) {
    return arguments.length ? (e2 = "function" == typeof t3 ? t3 : k(+t3), r) : e2;
  }, r.y = function(e3) {
    return arguments.length ? (t2 = "function" == typeof e3 ? e3 : k(+e3), r) : t2;
  }, r.defined = function(e3) {
    return arguments.length ? (i = "function" == typeof e3 ? e3 : k(!!e3), r) : i;
  }, r.curve = function(e3) {
    return arguments.length ? (a = e3, null != s2 && (o2 = a(s2)), r) : a;
  }, r.context = function(e3) {
    return arguments.length ? (null == e3 ? s2 = o2 = null : o2 = a(s2 = e3), r) : s2;
  }, r;
}
function se(e2, t2, i) {
  var s2 = null, a = k(true), o2 = null, n2 = $, r = null, l2 = V$1(h);
  function h(h2) {
    var d2, c, u2, g2, p, m2 = (h2 = J(h2)).length, _2 = false, b = new Array(m2), x2 = new Array(m2);
    for (null == o2 && (r = n2(p = l2())), d2 = 0; d2 <= m2; ++d2) {
      if (!(d2 < m2 && a(g2 = h2[d2], d2, h2)) === _2)
        if (_2 = !_2)
          c = d2, r.areaStart(), r.lineStart();
        else {
          for (r.lineEnd(), r.lineStart(), u2 = d2 - 1; u2 >= c; --u2)
            r.point(b[u2], x2[u2]);
          r.lineEnd(), r.areaEnd();
        }
      _2 && (b[d2] = +e2(g2, d2, h2), x2[d2] = +t2(g2, d2, h2), r.point(s2 ? +s2(g2, d2, h2) : b[d2], i ? +i(g2, d2, h2) : x2[d2]));
    }
    if (p)
      return r = null, p + "" || null;
  }
  function d() {
    return ie().defined(a).curve(n2).context(o2);
  }
  return e2 = "function" == typeof e2 ? e2 : void 0 === e2 ? ee : k(+e2), t2 = "function" == typeof t2 ? t2 : k(void 0 === t2 ? 0 : +t2), i = "function" == typeof i ? i : void 0 === i ? te : k(+i), h.x = function(t3) {
    return arguments.length ? (e2 = "function" == typeof t3 ? t3 : k(+t3), s2 = null, h) : e2;
  }, h.x0 = function(t3) {
    return arguments.length ? (e2 = "function" == typeof t3 ? t3 : k(+t3), h) : e2;
  }, h.x1 = function(e3) {
    return arguments.length ? (s2 = null == e3 ? null : "function" == typeof e3 ? e3 : k(+e3), h) : s2;
  }, h.y = function(e3) {
    return arguments.length ? (t2 = "function" == typeof e3 ? e3 : k(+e3), i = null, h) : t2;
  }, h.y0 = function(e3) {
    return arguments.length ? (t2 = "function" == typeof e3 ? e3 : k(+e3), h) : t2;
  }, h.y1 = function(e3) {
    return arguments.length ? (i = null == e3 ? null : "function" == typeof e3 ? e3 : k(+e3), h) : i;
  }, h.lineX0 = h.lineY0 = function() {
    return d().x(e2).y(t2);
  }, h.lineY1 = function() {
    return d().x(e2).y(i);
  }, h.lineX1 = function() {
    return d().x(s2).y(t2);
  }, h.defined = function(e3) {
    return arguments.length ? (a = "function" == typeof e3 ? e3 : k(!!e3), h) : a;
  }, h.curve = function(e3) {
    return arguments.length ? (n2 = e3, null != o2 && (r = n2(o2)), h) : n2;
  }, h.context = function(e3) {
    return arguments.length ? (null == e3 ? o2 = r = null : r = n2(o2 = e3), h) : o2;
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
}, point: function(e2, t2) {
  switch (e2 = +e2, t2 = +t2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e2, t2) : this._context.moveTo(e2, t2);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e2, t2);
  }
} };
class ae extends ii {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e2 = this._root.interfaceColors, l$2 = this._root.language, h = this.rule.bind(this);
    h("XYChart").setAll({ colors: s.new(this._root, {}), paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, panX: false, panY: false, wheelStep: 0.25, arrangeTooltips: true, pinchZoomX: false, pinchZoomY: false }), h("XYSeries").setAll({ legendLabelText: "{name}" }), h("XYChart", ["scrollbar", "chart"]).setAll({ paddingBottom: 0, paddingLeft: 0, paddingTop: 0, paddingRight: 0, colors: s.new(this._root, { saturation: 0 }) });
    {
      const t2 = h("Graphics", ["scrollbar", "overlay"]);
      t2.setAll({ fillOpacity: 0.5 }), l$1(t2, "fill", e2, "background");
    }
    h("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({ cornerRadiusTR: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusBL: 0, fillOpacity: 0, focusable: true }), h("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create("hover", { fillOpacity: 0.4 }), h("RoundedRectangle", ["xy", "scrollbar", "chart", "background"]).setAll({ cornerRadiusTL: 0, cornerRadiusBL: 0, cornerRadiusTR: 0, cornerRadiusBR: 0 }), h("RoundedRectangle", ["xy", "scrollbar", "chart", "background", "resize", "button"]).setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), h("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: true }), h("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: true, minGridDistance: 5 }), h("AxisLabel", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5, centerY: Y, minPosition: 0.01, maxPosition: 0.99, fontSize: "0.8em" }), h("AxisLabel", ["category"]).setAll({ text: "{category}", populateText: true }), h("AxisLabel", ["x"]).setAll({ centerY: 0 }), h("AxisLabel", ["x", "inside"]).setAll({ centerY: Y }), h("AxisLabel", ["x", "inside", "opposite"]).setAll({ centerY: 0 }), h("AxisLabel", ["x", "opposite"]).setAll({ centerY: Y }), h("AxisLabel", ["y"]).setAll({ centerX: Y }), h("AxisLabel", ["y", "inside"]).setAll({ centerX: 0 }), h("AxisLabel", ["y", "inside", "opposite"]).setAll({ centerX: Y }), h("AxisLabel", ["y", "opposite"]).setAll({ centerX: 0 }), h("AxisLabel", ["xy", "scrollbar", "y"]).setAll({ visible: false }), h("Grid", ["xy", "scrollbar", "y"]).setAll({ visible: false }), h("Grid", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5 }), h("XYCursor").setAll({ behavior: "none", layer: 30, exportable: false, snapToSeriesBy: "xy", moveThreshold: 1 });
    {
      const t2 = h("Grid", ["cursor", "x"]);
      t2.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: l$2.translate("Use left and right arrows to move selection") }), l$1(t2, "stroke", e2, "alternativeBackground");
    }
    {
      const t2 = h("Grid", ["cursor", "y"]);
      t2.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: l$2.translate("Use up and down arrows to move selection") }), l$1(t2, "stroke", e2, "alternativeBackground");
    }
    {
      const t2 = h("Graphics", ["cursor", "selection"]);
      t2.setAll({ fillOpacity: 0.15 }), l$1(t2, "fill", e2, "alternativeBackground");
    }
    h("Axis").setAll({ start: 0, end: 1, minZoomCount: 1, maxZoomCount: 1 / 0, maxZoomFactor: 1e3, maxDeviation: 0.1, snapTooltip: true, tooltipLocation: 0.5, panX: true, panY: true, zoomX: true, zoomY: true, fixAxisSize: true }), h("AxisLabel").setAll({ location: 0.5, multiLocation: 0, centerX: X, centerY: X, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5 }), h("Container", ["axis", "header"]).setAll({ layer: 30 }), h("Rectangle", ["axis", "header", "background"]).setAll({ crisp: true });
    {
      const t2 = h("AxisRenderer");
      t2.setAll({ crisp: true, strokeOpacity: 0 }), l$1(t2, "stroke", e2, "grid");
    }
    h("AxisRendererX").setAll({ minGridDistance: 120, opposite: false, inversed: false, cellStartLocation: 0, cellEndLocation: 1, width: Y }), h("AxisRendererY").setAll({ minGridDistance: 40, opposite: false, inversed: false, cellStartLocation: 0, cellEndLocation: 1, height: Y });
    {
      const t2 = h("Rectangle", ["axis", "thumb"]);
      t2.setAll({ fillOpacity: 0 }), l$1(t2, "fill", e2, "alternativeBackground"), t2.states.create("hover", { fillOpacity: 0.1 });
    }
    h("Rectangle", ["axis", "thumb", "x"]).setAll({ cursorOverStyle: "ew-resize" }), h("Rectangle", ["axis", "thumb", "y"]).setAll({ cursorOverStyle: "ns-resize" });
    {
      const t2 = h("Grid");
      t2.setAll({ location: 0, strokeOpacity: 0.15, crisp: true }), l$1(t2, "stroke", e2, "grid");
    }
    h("Grid", ["base"]).setAll({ strokeOpacity: 0.3 });
    {
      const t2 = h("Graphics", ["axis", "fill"]);
      t2.setAll({ visible: false, isMeasured: false, position: "absolute", fillOpacity: 0.05 }), l$1(t2, "fill", e2, "alternativeBackground");
    }
    h("Graphics", ["axis", "fill", "range"]).setAll({ isMeasured: true }), h("Graphics", ["series", "fill", "range"]).setAll({ visible: false, isMeasured: true }), h("Grid", ["series", "range"]).setAll({ visible: false }), h("AxisTick", ["series", "range"]).setAll({ visible: false }), h("AxisLabel", ["series", "range"]).setAll({ visible: false });
    {
      const t2 = h("AxisTick");
      t2.setAll({ location: 0.5, multiLocation: 0, strokeOpacity: 1, isMeasured: false, position: "absolute", visible: false }), l$1(t2, "stroke", e2, "grid");
    }
    h("CategoryAxis").setAll({ startLocation: 0, endLocation: 1, fillRule: (e3, t2) => {
      const i = e3.get("axisFill");
      i && (l(t2) && t2 % 2 != 0 ? i.setPrivate("visible", false) : i.setPrivate("visible", true));
    } });
    const d = [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 5 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 50 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "millisecond", count: 500 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 5 }, { timeUnit: "second", count: 10 }, { timeUnit: "second", count: 30 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 5 }, { timeUnit: "minute", count: 10 }, { timeUnit: "minute", count: 15 }, { timeUnit: "minute", count: 30 }, { timeUnit: "hour", count: 1 }, { timeUnit: "hour", count: 3 }, { timeUnit: "hour", count: 6 }, { timeUnit: "hour", count: 12 }, { timeUnit: "day", count: 1 }, { timeUnit: "day", count: 2 }, { timeUnit: "day", count: 3 }, { timeUnit: "day", count: 4 }, { timeUnit: "day", count: 5 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "month", count: 2 }, { timeUnit: "month", count: 3 }, { timeUnit: "month", count: 6 }, { timeUnit: "year", count: 1 }, { timeUnit: "year", count: 2 }, { timeUnit: "year", count: 5 }, { timeUnit: "year", count: 10 }, { timeUnit: "year", count: 50 }, { timeUnit: "year", count: 100 }, { timeUnit: "year", count: 200 }, { timeUnit: "year", count: 500 }, { timeUnit: "year", count: 1e3 }, { timeUnit: "year", count: 2e3 }, { timeUnit: "year", count: 5e3 }, { timeUnit: "year", count: 1e4 }, { timeUnit: "year", count: 1e5 }], c = { millisecond: l$2.translate("_date_millisecond"), second: l$2.translate("_date_second"), minute: l$2.translate("_date_minute"), hour: l$2.translate("_date_hour"), day: l$2.translate("_date_day"), week: l$2.translate("_date_day"), month: l$2.translate("_date_month"), year: l$2.translate("_date_year") }, u2 = { millisecond: l$2.translate("_date_millisecond"), second: l$2.translate("_date_second"), minute: l$2.translate("_date_minute"), hour: l$2.translate("_date_day"), day: l$2.translate("_date_day"), week: l$2.translate("_date_day"), month: l$2.translate("_date_month") + " " + l$2.translate("_date_year"), year: l$2.translate("_date_year") }, g2 = { millisecond: l$2.translate("_date_millisecond_full"), second: l$2.translate("_date_second_full"), minute: l$2.translate("_date_minute_full"), hour: l$2.translate("_date_hour_full"), day: l$2.translate("_date_day_full"), week: l$2.translate("_date_week_full"), month: l$2.translate("_date_month_full"), year: l$2.translate("_date_year") };
    h("CategoryDateAxis").setAll({ markUnitChange: true, gridIntervals: D$1(d), dateFormats: J$1(c), periodChangeDateFormats: J$1(u2) }), h("DateAxis").setAll({ maxZoomFactor: null, strictMinMax: true, startLocation: 0, endLocation: 1, markUnitChange: true, groupData: false, groupCount: 500, gridIntervals: D$1(d), dateFormats: J$1(c), periodChangeDateFormats: J$1(u2), tooltipDateFormats: g2, groupIntervals: [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 10 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 10 }, { timeUnit: "hour", count: 1 }, { timeUnit: "day", count: 1 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "year", count: 1 }], fillRule: (e3) => {
      const t2 = e3.get("axisFill");
      if (t2) {
        const i = e3.component, s2 = e3.get("value"), a = e3.get("endValue"), o2 = i.intervalDuration(), n2 = i.getPrivate("baseInterval"), r = i.getPrivate("gridInterval", n2);
        let l2 = i.getPrivate("min", 0);
        if (l2 = I(new Date(l2), r.timeUnit, r.count, this._root.locale.firstDayOfWeek, this._root.utc, void 0, this._root.timezone).getTime(), null != s2 && null != a) {
          const e4 = Math.round(Math.round((s2 - l2) / o2)) / 2;
          e4 == Math.round(e4) ? t2.setPrivate("visible", true) : t2.setPrivate("visible", false);
        }
      }
    } }), h("GaplessDateAxis").setAll({ fillRule: (e3) => {
      const t2 = e3.get("axisFill");
      if (t2) {
        const i = e3.get("index");
        let a = false;
        l(i) && i % 2 != 0 || (a = true), t2.setPrivate("visible", a);
      }
    } }), h("ValueAxis").setAll({ baseValue: 0, logarithmic: false, strictMinMax: false, autoZoom: true, fillRule: (e3) => {
      const t2 = e3.get("axisFill");
      if (t2) {
        const i = e3.component, a = e3.get("value"), o2 = i.getPrivate("step");
        l(a) && l(o2) && (ae$1(a / o2 / 2, 5) == Math.round(a / o2 / 2) ? t2.setPrivate("visible", false) : t2.setPrivate("visible", true));
      }
    } }), h("DurationAxis").setAll({ baseUnit: "second" }), h("XYSeries").setAll({ maskBullets: true, stackToNegative: true, locationX: 0.5, locationY: 0.5, snapTooltip: false, openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close", seriesTooltipTarget: "series" }), h("BaseColumnSeries").setAll({ adjustBulletPosition: true }), h("ColumnSeries").setAll({ clustered: true }), h("RoundedRectangle", ["series", "column"]).setAll({ position: "absolute", isMeasured: false, width: z(70), height: z(70), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), h("LineSeries").setAll({ connect: true, autoGapCount: 1.1, stackToNegative: false }), h("Graphics", ["series", "stroke"]).setAll({ position: "absolute", strokeWidth: 1, strokeOpacity: 1, isMeasured: false }), h("Graphics", ["series", "fill"]).setAll({ visible: false, fillOpacity: 0, position: "absolute", strokeWidth: 0, strokeOpacity: 0, isMeasured: false }), h("Graphics", ["line", "series", "legend", "marker", "stroke"]).setAll({ draw: (e3, t2) => {
      const i = t2.parent;
      if (i) {
        const t3 = i.height(), s2 = i.width();
        e3.moveTo(0, t3 / 2), e3.lineTo(s2, t3 / 2);
      }
    } });
    {
      const t2 = h("Graphics", ["line", "series", "legend", "marker", "stroke"]).states.create("disabled", {});
      l$1(t2, "stroke", e2, "disabled");
    }
    h("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({ draw: (e3, t2) => {
      const i = t2.parent;
      if (i) {
        const t3 = i.height(), s2 = i.width();
        e3.moveTo(0, 0), e3.lineTo(s2, 0), e3.lineTo(s2, t3), e3.lineTo(0, t3), e3.lineTo(0, 0);
      }
    } });
    {
      const t2 = h("Graphics", ["line", "series", "legend", "marker", "fill"]).states.create("disabled", {});
      l$1(t2, "stroke", e2, "disabled");
    }
    h("SmoothedXYLineSeries").setAll({ tension: 0.5 }), h("SmoothedXLineSeries").setAll({ tension: 0.5 }), h("SmoothedYLineSeries").setAll({ tension: 0.5 }), h("Candlestick").setAll({ position: "absolute", isMeasured: false, width: z(50), height: z(50), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), h("OHLC").setAll({ width: z(80), height: z(80) }), h("CandlestickSeries").setAll({ lowValueXGrouped: "low", lowValueYGrouped: "low", highValueXGrouped: "high", highValueYGrouped: "high", openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close" });
    {
      const t2 = h("Rectangle", ["column", "autocolor"]).states.create("riseFromOpen", {});
      l$1(t2, "fill", e2, "positive"), l$1(t2, "stroke", e2, "positive");
    }
    {
      const t2 = h("Rectangle", ["column", "autocolor"]).states.create("dropFromOpen", {});
      l$1(t2, "fill", e2, "negative"), l$1(t2, "stroke", e2, "negative");
    }
    h("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromOpen", { fillOpacity: 0 }), h("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromOpen", { fillOpacity: 1 });
    {
      const t2 = h("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromPrevious", {});
      l$1(t2, "fill", e2, "positive"), l$1(t2, "stroke", e2, "positive");
    }
    {
      const t2 = h("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromPrevious", {});
      l$1(t2, "fill", e2, "negative"), l$1(t2, "stroke", e2, "negative");
    }
  }
}
class oe extends U {
  constructor() {
    super(...arguments), Object.defineProperty(this, "xAxes", { enumerable: true, configurable: true, writable: true, value: new W() }), Object.defineProperty(this, "yAxes", { enumerable: true, configurable: true, writable: true, value: new W() }), Object.defineProperty(this, "topAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(Qe.new(this._root, { width: Y, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "yAxesAndPlotContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(Qe.new(this._root, { width: Y, height: Y, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "bottomAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.chartContainer.children.push(Qe.new(this._root, { width: Y, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "leftAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(Qe.new(this._root, { height: Y, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "plotsContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(Qe.new(this._root, { width: Y, height: Y, maskContent: false })) }), Object.defineProperty(this, "plotContainer", { enumerable: true, configurable: true, writable: true, value: this.plotsContainer.children.push(Qe.new(this._root, { width: Y, height: Y })) }), Object.defineProperty(this, "topPlotContainer", { enumerable: true, configurable: true, writable: true, value: this.plotsContainer.children.push(Qe.new(this._root, { width: Y, height: Y })) }), Object.defineProperty(this, "gridContainer", { enumerable: true, configurable: true, writable: true, value: this.plotContainer.children.push(Qe.new(this._root, { width: Y, height: Y, isMeasured: false })) }), Object.defineProperty(this, "topGridContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { width: Y, height: Y, isMeasured: false }) }), Object.defineProperty(this, "rightAxesContainer", { enumerable: true, configurable: true, writable: true, value: this.yAxesAndPlotContainer.children.push(Qe.new(this._root, { height: Y, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "axisHeadersContainer", { enumerable: true, configurable: true, writable: true, value: this.plotContainer.children.push(Qe.new(this._root, {})) }), Object.defineProperty(this, "zoomOutButton", { enumerable: true, configurable: true, writable: true, value: this.topPlotContainer.children.push(o.new(this._root, { themeTags: ["zoom"], icon: We.new(this._root, { themeTags: ["button", "icon"] }) })) }), Object.defineProperty(this, "_movePoint", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_wheelDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_otherCharts", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_movePoints", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_downStartX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEndX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downStartY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEndY", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this._defaultThemes.push(ae.new(this._root)), super._afterNew(), this._disposers.push(this.xAxes), this._disposers.push(this.yAxes);
    const e2 = this._root;
    let t2 = this._root.verticalLayout;
    const i = this.zoomOutButton;
    i.events.on("click", () => {
      this.zoomOut();
    }), i.hide(0), i.states.lookup("default").set("opacity", 1), this.chartContainer.set("layout", t2);
    const s2 = this.plotContainer;
    s2.children.push(this.seriesContainer), this._disposers.push(this._processAxis(this.xAxes, this.bottomAxesContainer)), this._disposers.push(this._processAxis(this.yAxes, this.leftAxesContainer)), s2.children.push(this.topGridContainer), s2.children.push(this.bulletsContainer), s2.set("interactive", true), s2.set("interactiveChildren", false), s2.set("background", Ve.new(e2, { themeTags: ["xy", "background"], fill: Zt.fromHex(0), fillOpacity: 0 })), this._disposers.push(s2.events.on("pointerdown", (e3) => {
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
    const t2 = e2.get("xAxis");
    t2 && (v(t2.series, e2), t2.markDirtyExtremes());
    const i = e2.get("yAxis");
    i && (v(i.series, e2), i.markDirtyExtremes());
    const s2 = this.get("cursor");
    if (s2) {
      const t3 = s2.get("snapToSeries");
      t3 && v(t3, e2);
    }
    super._removeSeries(e2);
  }
  handleWheel(e2) {
    const t2 = this.get("wheelX"), i = this.get("wheelY"), s2 = this.plotContainer, a = e2.originalEvent;
    if (!gt(a, this))
      return;
    a.preventDefault();
    const o2 = s2.toLocal(e2.point), n2 = this.get("wheelStep", 0.2), r = a.deltaY / 100, l2 = a.deltaX / 100, h = this.get("wheelZoomPositionX"), d = this.get("wheelZoomPositionY");
    "zoomX" !== t2 && "zoomXY" !== t2 || 0 == l2 || this.xAxes.each((e3) => {
      if (e3.get("zoomX")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), a2 = e3.fixPosition(o2.x / s2.width());
        null != h && (a2 = h);
        let r2 = t3 - n2 * (i2 - t3) * l2 * a2, d2 = i2 + n2 * (i2 - t3) * l2 * (1 - a2);
        1 / (d2 - r2) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(r2, d2));
      }
    }), "zoomX" !== i && "zoomXY" !== i || 0 == r || this.xAxes.each((e3) => {
      if (e3.get("zoomX")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), a2 = e3.fixPosition(o2.x / s2.width());
        null != h && (a2 = h);
        let l3 = t3 - n2 * (i2 - t3) * r * a2, d2 = i2 + n2 * (i2 - t3) * r * (1 - a2);
        1 / (d2 - l3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(l3, d2));
      }
    }), "zoomY" !== t2 && "zoomXY" !== t2 || 0 == l2 || this.yAxes.each((e3) => {
      if (e3.get("zoomY")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), a2 = e3.fixPosition(o2.y / s2.height());
        null != d && (a2 = d);
        let r2 = t3 - n2 * (i2 - t3) * l2 * a2, h2 = i2 + n2 * (i2 - t3) * l2 * (1 - a2);
        1 / (h2 - r2) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(r2, h2));
      }
    }), "zoomY" !== i && "zoomXY" !== i || 0 == r || this.yAxes.each((e3) => {
      if (e3.get("zoomY")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), a2 = e3.fixPosition(o2.y / s2.height());
        null != d && (a2 = d);
        let l3 = t3 - n2 * (i2 - t3) * r * a2, h2 = i2 + n2 * (i2 - t3) * r * (1 - a2);
        1 / (h2 - l3) < e3.getPrivate("maxZoomFactor", 1 / 0) / e3.get("minZoomCount", 1) && this._handleWheelAnimation(e3.zoom(l3, h2));
      }
    }), "panX" !== t2 && "panXY" !== t2 || 0 == l2 || this.xAxes.each((e3) => {
      if (e3.get("panX")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i2 - t3) * l2, a2 = t3 + s3, o3 = i2 + s3, r2 = this._fixWheel(a2, o3);
        a2 = r2[0], o3 = r2[1], this._handleWheelAnimation(e3.zoom(a2, o3));
      }
    }), "panX" !== i && "panXY" !== i || 0 == r || this.xAxes.each((e3) => {
      if (e3.get("panX")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i2 - t3) * r, a2 = t3 + s3, o3 = i2 + s3, l3 = this._fixWheel(a2, o3);
        a2 = l3[0], o3 = l3[1], this._handleWheelAnimation(e3.zoom(a2, o3));
      }
    }), "panY" !== t2 && "panXY" !== t2 || 0 == l2 || this.yAxes.each((e3) => {
      if (e3.get("panY")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i2 - t3) * l2, a2 = t3 + s3, o3 = i2 + s3, r2 = this._fixWheel(a2, o3);
        a2 = r2[0], o3 = r2[1], this._handleWheelAnimation(e3.zoom(a2, o3));
      }
    }), "panY" !== i && "panXY" !== i || 0 == r || this.yAxes.each((e3) => {
      if (e3.get("panY")) {
        let t3 = e3.get("start"), i2 = e3.get("end"), s3 = this._getWheelSign(e3) * n2 * (i2 - t3) * r, a2 = t3 - s3, o3 = i2 - s3, l3 = this._fixWheel(a2, o3);
        a2 = l3[0], o3 = l3[1], this._handleWheelAnimation(e3.zoom(a2, o3));
      }
    });
  }
  _handleSetWheel() {
    const e2 = this.get("wheelX"), t2 = this.get("wheelY"), i = this.plotContainer;
    "none" !== e2 || "none" !== t2 ? (this._wheelDp = i.events.on("wheel", (i2) => {
      const s2 = i2.originalEvent;
      ("none" !== e2 && 0 != Math.abs(s2.deltaX) || "none" !== t2 && 0 != Math.abs(s2.deltaY)) && this.handleWheel(i2);
    }), this._disposers.push(this._wheelDp)) : this._wheelDp && this._wheelDp.dispose();
  }
  _getWheelSign(e2) {
    let t2 = 1;
    return e2.get("renderer").get("inversed") && (t2 = -1), t2;
  }
  _fixWheel(e2, t2) {
    const i = t2 - e2;
    return e2 < 0 && (t2 = (e2 = 0) + i), t2 > 1 && (e2 = (t2 = 1) - i), [e2, t2];
  }
  _handlePlotDown(e2) {
    const t2 = e2.originalEvent;
    if (2 == t2.button)
      return;
    const i = this.plotContainer;
    let s2 = i.toLocal(e2.point);
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      if (t2.pointerId && $$1(i._downPoints).length > 0) {
        const e3 = this.xAxes.getIndex(0), t3 = this.yAxes.getIndex(0);
        e3 && (this._downStartX = e3.get("start", 0), this._downEndX = e3.get("end", 1)), t3 && (this._downStartY = t3.get("start", 0), this._downEndY = t3.get("end", 1));
      }
    }
    if ((this.get("panX") || this.get("panY")) && s2.x >= 0 && s2.y >= 0 && s2.x <= i.width() && s2.y <= this.height()) {
      this._downPoint = { x: t2.clientX, y: t2.clientY };
      const i2 = this.get("panX"), s3 = this.get("panY");
      i2 && this.xAxes.each((e3) => {
        e3._panStart = e3.get("start"), e3._panEnd = e3.get("end");
      }), s3 && this.yAxes.each((e3) => {
        e3._panStart = e3.get("start"), e3._panEnd = e3.get("end");
      });
      const a = "panstarted";
      this.events.isEnabled(a) && this.events.dispatch(a, { type: a, target: this, originalEvent: e2.originalEvent });
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
    const t2 = this._downPoint;
    if (t2 && (this.get("panX") || this.get("panY"))) {
      let i = this.plotContainer.toLocal(e2.point);
      if (i.x == t2.x && i.y == t2.y) {
        const t3 = "pancancelled";
        this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this, originalEvent: e2.originalEvent });
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
    const t2 = this.plotContainer;
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const i2 = e2.pointerId;
      if (i2 && (this._movePoints[i2] = e2.point, $$1(t2._downPoints).length > 1))
        return void this._handlePinch();
    }
    let i = this._downPoint;
    if (i) {
      i = t2.toLocal(this._root.documentPointToRoot(i));
      let s2 = t2.toLocal(e2.point);
      const a = this.get("panX"), o2 = this.get("panY");
      if (a) {
        let e3 = this.get("scrollbarX");
        e3 && e3.events.disableType("rangechanged"), this.xAxes.each((e4) => {
          if (e4.get("panX")) {
            e4._isPanning = true;
            let a2 = e4._panStart, o3 = e4._panEnd, n2 = (o3 - a2) * (i.x - s2.x) / t2.width();
            e4.get("renderer").get("inversed") && (n2 *= -1);
            let r = a2 + n2, l2 = o3 + n2;
            l2 - r < 1 + 2 * e4.get("maxDeviation", 1) && (e4.set("start", r), e4.set("end", l2));
          }
        }), e3 && e3.events.enableType("rangechanged");
      }
      if (o2) {
        let e3 = this.get("scrollbarY");
        e3 && e3.events.disableType("rangechanged"), this.yAxes.each((e4) => {
          if (e4.get("panY")) {
            e4._isPanning = true;
            let a2 = e4._panStart, o3 = e4._panEnd, n2 = (o3 - a2) * (i.y - s2.y) / t2.height();
            e4.get("renderer").get("inversed") && (n2 *= -1);
            let r = a2 - n2, l2 = o3 - n2;
            l2 - r < 1 + 2 * e4.get("maxDeviation", 1) && (e4.set("start", r), e4.set("end", l2));
          }
        }), e3 && e3.events.enableType("rangechanged");
      }
    }
  }
  _handlePinch() {
    const e2 = this.plotContainer;
    let t2 = 0, i = [], s2 = [];
    if (q(e2._downPoints, (e3, a) => {
      i[t2] = a;
      let o2 = this._movePoints[e3];
      o2 && (s2[t2] = o2), t2++;
    }), i.length > 1 && s2.length > 1) {
      const t3 = e2.width(), a = e2.height();
      let o2 = i[0], n2 = i[1], r = s2[0], l2 = s2[1];
      if (o2 && n2 && r && l2) {
        if (r = e2.toLocal(r), l2 = e2.toLocal(l2), o2 = e2.toLocal(o2), n2 = e2.toLocal(n2), this.get("pinchZoomX")) {
          const e3 = this._downStartX, i2 = this._downEndX;
          if (null != e3 && null != i2) {
            o2.x > n2.x && ([o2, n2] = [n2, o2], [r, l2] = [l2, r]);
            let s3 = e3 + o2.x / t3 * (i2 - e3), a2 = e3 + n2.x / t3 * (i2 - e3), h = e3 + r.x / t3 * (i2 - e3), d = e3 + l2.x / t3 * (i2 - e3), c = Math.max(1e-3, a2 - s3) / Math.max(1e-3, d - h), u2 = e3 * c + s3 - h * c, g2 = i2 * c + a2 - d * c;
            this.xAxes.each((e4) => {
              let t4 = e4.fixPosition(u2), i3 = e4.fixPosition(g2);
              e4.zoom(t4, i3, 0);
            });
          }
        }
        if (this.get("pinchZoomY")) {
          const e3 = this._downStartY, t4 = this._downEndY;
          if (null != e3 && null != t4) {
            o2.y < n2.y && ([o2, n2] = [n2, o2], [r, l2] = [l2, r]);
            let i2 = e3 + (1 - o2.y / a) * (t4 - e3), s3 = e3 + (1 - n2.y / a) * (t4 - e3), h = e3 + (1 - r.y / a) * (t4 - e3), d = e3 + (1 - l2.y / a) * (t4 - e3), c = Math.max(1e-3, s3 - i2) / Math.max(1e-3, d - h), u2 = e3 * c + i2 - h * c, g2 = t4 * c + s3 - d * c;
            this.yAxes.each((e4) => {
              let t5 = e4.fixPosition(u2), i3 = e4.fixPosition(g2);
              e4.zoom(t5, i3, 0);
            });
          }
        }
      }
    }
  }
  _handleCursorPosition() {
    const e2 = this.get("cursor");
    if (e2) {
      const t2 = e2.getPrivate("point");
      let i = e2.get("snapToSeries");
      if (e2._downPoint && (i = void 0), i && t2) {
        const s2 = e2.get("snapToSeriesBy"), a = [];
        m(i, (e3) => {
          if (!e3.isHidden() && !e3.isHiding())
            if ("x!" != s2 && "y!" != s2) {
              const t3 = e3.startIndex(), i2 = e3.endIndex();
              for (let s3 = t3; s3 < i2; s3++) {
                const t4 = e3.dataItems[s3];
                t4 && !t4.isHidden() && a.push(t4);
              }
            } else {
              const t3 = e3.get("tooltipDataItem");
              t3 && a.push(t3);
            }
        });
        let o2, n2 = 1 / 0;
        if (m(a, (e3) => {
          const i2 = e3.get("point");
          if (i2) {
            let a2 = 0;
            a2 = "x" == s2 || "x!" == s2 ? Math.abs(t2.x - i2.x) : "y" == s2 || "y!" == s2 ? Math.abs(t2.y - i2.y) : Math.hypot(t2.x - i2.x, t2.y - i2.y), a2 < n2 && (n2 = a2, o2 = e3);
          }
        }), m(i, (e3) => {
          const t3 = e3.get("tooltip");
          t3 && t3._setDataItem(void 0);
        }), o2) {
          let t3 = o2.component;
          t3.showDataItemTooltip(o2);
          const i2 = o2.get("point");
          i2 && e2.handleMove(t3.toGlobal({ x: i2.x - t3.x(), y: i2.y - t3.y() }), true);
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
      const e2 = this._prevSettings.cursor, t2 = this.get("cursor");
      t2 !== e2 && (this._disposeProperty("cursor"), e2 && e2.dispose(), t2 && (t2._setChart(this), this._addCursor(t2), this._pushPropertyDisposer("cursor", t2.events.on("selectended", () => {
        this._handleCursorSelectEnd();
      }))), this._prevSettings.cursor = t2);
    }
    if (this.isDirty("scrollbarX")) {
      const e2 = this._prevSettings.scrollbarX, t2 = this.get("scrollbarX");
      t2 !== e2 && (this._disposeProperty("scrollbarX"), e2 && e2.dispose(), t2 && (t2.parent || this.topAxesContainer.children.push(t2), this._pushPropertyDisposer("scrollbarX", t2.events.on("rangechanged", (e3) => {
        this._handleScrollbar(this.xAxes, e3.start, e3.end, e3.grip);
      })), t2.setPrivate("positionTextFunction", (e3) => {
        const t3 = this.xAxes.getIndex(0);
        return t3 && t3.getTooltipText(e3, false) || "";
      })), this._prevSettings.scrollbarX = t2);
    }
    if (this.isDirty("scrollbarY")) {
      const e2 = this._prevSettings.scrollbarY, t2 = this.get("scrollbarY");
      t2 !== e2 && (this._disposeProperty("scrollbarY"), e2 && e2.dispose(), t2 && (t2.parent || this.rightAxesContainer.children.push(t2), this._pushPropertyDisposer("scrollbarY", t2.events.on("rangechanged", (e3) => {
        this._handleScrollbar(this.yAxes, e3.start, e3.end, e3.grip);
      })), t2.setPrivate("positionTextFunction", (e3) => {
        const t3 = this.yAxes.getIndex(0);
        return t3 && t3.getTooltipText(e3, false) || "";
      })), this._prevSettings.scrollbarY = t2);
    }
    this._handleZoomOut();
  }
  _processSeries(e2) {
    super._processSeries(e2);
    const t2 = e2.get("xAxis"), i = e2.get("yAxis");
    w(t2.series, e2), w(i.series, e2), e2._posXDp = e2.addDisposer(t2.events.on("positionchanged", () => {
      e2._fixPosition();
    })), e2._posXDp = e2.addDisposer(i.events.on("positionchanged", () => {
      e2._fixPosition();
    })), e2.get("baseAxis") || (i.isType("CategoryAxis") || i.isType("DateAxis") ? e2.set("baseAxis", i) : e2.set("baseAxis", t2)), e2.get("stacked") && (e2._markDirtyKey("stacked"), m(e2.dataItems, (e3) => {
      e3.set("stackToItemY", void 0), e3.set("stackToItemX", void 0);
    })), e2._markDirtyAxes(), i.markDirtyExtremes(), t2.markDirtyExtremes(), this._colorize(e2);
  }
  _colorize(e2) {
    const t2 = this.get("colors");
    if (t2 && null == e2.get("fill")) {
      const i = t2.next();
      e2._setSoft("stroke", i), e2._setSoft("fill", i);
    }
  }
  _handleCursorSelectEnd() {
    const e2 = this.get("cursor"), t2 = e2.get("behavior"), i = e2.getPrivate("downPositionX", 0), s2 = e2.getPrivate("downPositionY", 0), a = Math.min(1, Math.max(0, e2.getPrivate("positionX", 0.5))), o2 = Math.min(1, Math.max(0, e2.getPrivate("positionY", 0.5)));
    this.xAxes.each((e3) => {
      if ("zoomX" === t2 || "zoomXY" === t2) {
        let t3 = e3.toAxisPosition(i), s3 = e3.toAxisPosition(a);
        e3.zoom(t3, s3);
      }
      e3.setPrivate("updateScrollbar", true);
    }), this.yAxes.each((e3) => {
      if ("zoomY" === t2 || "zoomXY" === t2) {
        let t3 = e3.toAxisPosition(s2), i2 = e3.toAxisPosition(o2);
        e3.zoom(t3, i2);
      }
      e3.setPrivate("updateScrollbar", true);
    });
  }
  _handleScrollbar(e2, t2, i, s2) {
    e2.each((e3) => {
      let a = e3.fixPosition(t2), o2 = e3.fixPosition(i), n2 = e3.zoom(a, o2, void 0, s2);
      const r = "updateScrollbar";
      e3.setPrivateRaw(r, false), n2 ? n2.events.on("stopped", () => {
        e3.setPrivateRaw(r, true);
      }) : e3.setPrivateRaw(r, true);
    });
  }
  _processAxis(e2, t2) {
    return e2.events.onAll((e3) => {
      if ("clear" === e3.type)
        m(e3.oldValues, (e4) => {
          this._removeAxis(e4);
        });
      else if ("push" === e3.type)
        t2.children.push(e3.newValue), e3.newValue.processChart(this);
      else if ("setIndex" === e3.type)
        t2.children.setIndex(e3.index, e3.newValue), e3.newValue.processChart(this);
      else if ("insertIndex" === e3.type)
        t2.children.insertIndex(e3.index, e3.newValue), e3.newValue.processChart(this);
      else if ("removeIndex" === e3.type)
        this._removeAxis(e3.oldValue);
      else {
        if ("moveIndex" !== e3.type)
          throw new Error("Unknown IListEvent type");
        t2.children.moveValue(e3.value, e3.newIndex), e3.value.processChart(this);
      }
    });
  }
  _removeAxis(e2) {
    if (!e2.isDisposed()) {
      const t2 = e2.parent;
      t2 && t2.children.removeValue(e2);
      const i = e2.gridContainer, s2 = i.parent;
      s2 && s2.children.removeValue(i);
      const a = e2.topGridContainer, o2 = a.parent;
      o2 && o2.children.removeValue(a);
    }
  }
  _updateChartLayout() {
    const e2 = this.leftAxesContainer.width(), t2 = this.rightAxesContainer.width(), i = this.bottomAxesContainer;
    i.set("paddingLeft", e2), i.set("paddingRight", t2);
    const s2 = this.topAxesContainer;
    s2.set("paddingLeft", e2), s2.set("paddingRight", t2);
  }
  processAxis(e2) {
    this.get("cursor") && (this.addDisposer(e2.on("start", () => {
      this._updateCursor();
    })), this.addDisposer(e2.on("end", () => {
      this._updateCursor();
    })));
  }
  _handleAxisSelection(e2, t2) {
    let i = e2.fixPosition(e2.get("start", 0)), s2 = e2.fixPosition(e2.get("end", 1));
    if (i > s2 && ([i, s2] = [s2, i]), -1 != this.xAxes.indexOf(e2)) {
      if (t2 || e2.getPrivate("updateScrollbar")) {
        let e3 = this.get("scrollbarX");
        !e3 || e3.getPrivate("isBusy") && !t2 || (e3.setRaw("start", i), e3.setRaw("end", s2), e3.updateGrips());
      }
    } else if (-1 != this.yAxes.indexOf(e2) && (t2 || e2.getPrivate("updateScrollbar"))) {
      let e3 = this.get("scrollbarY");
      !e3 || e3.getPrivate("isBusy") && !t2 || (e3.setRaw("start", i), e3.setRaw("end", s2), e3.updateGrips());
    }
    this._handleZoomOut();
  }
  _handleZoomOut() {
    let e2 = this.zoomOutButton;
    if (e2 && e2.parent) {
      let t2 = false;
      this.xAxes.each((e3) => {
        0 == e3.get("start") && 1 == e3.get("end") || (t2 = true);
      }), this.yAxes.each((e3) => {
        0 == e3.get("start") && 1 == e3.get("end") || (t2 = true);
      }), t2 ? e2.isHidden() && e2.show() : e2.hide();
    }
  }
  inPlot(e2) {
    const t2 = this.plotContainer, i = this.getPrivate("otherCharts", this._otherCharts), s2 = t2.toGlobal(e2);
    if (e2.x >= -0.5 && e2.y >= -0.5 && e2.x <= t2.width() + 0.5 && e2.y <= t2.height() + 0.5)
      return true;
    if (i)
      for (let a = i.length - 1; a >= 0; a--) {
        const e3 = i[a];
        if (e3 != this) {
          const t3 = e3.plotContainer, i2 = this._root.rootPointToDocument(s2), a2 = e3._root.documentPointToRoot(i2), o2 = t3.toLocal(a2);
          if (o2.x >= -0.1 && o2.y >= -0.1 && o2.x <= t3.width() + 0.1 && o2.y <= t3.height() + 0.1)
            return true;
        }
      }
    return false;
  }
  arrangeTooltips() {
    const e2 = this.plotContainer, t2 = e2.width(), i = e2.height(), a = this.height();
    let o2 = e2._display.toGlobal({ x: 0, y: 0 }), n2 = e2._display.toGlobal({ x: t2, y: i });
    const r = [];
    let l$12, h, d = 0, c = 1 / 0, u2 = this._movePoint, g2 = this.get("maxTooltipDistance"), p = this.get("maxTooltipDistanceBy", "xy");
    l(g2) && this.series.each((e3) => {
      if (!e3.isHidden()) {
        const t3 = e3.get("tooltip");
        if (t3) {
          let i2 = t3.get("pointTo");
          if (i2) {
            let t4 = Math.hypot(u2.x - i2.x, u2.y - i2.y);
            "x" == p ? t4 = Math.abs(u2.x - i2.x) : "y" == p && (t4 = Math.abs(u2.y - i2.y)), t4 < c && (c = t4, l$12 = e3, h = i2);
          }
        }
      }
    });
    const m$1 = [];
    if (this.series.each((e3) => {
      const t3 = e3.get("tooltip");
      if (t3) {
        let i2 = false, s2 = t3.get("pointTo");
        if (s2) {
          if (g2 >= 0) {
            let s3 = t3.get("pointTo");
            if (s3 && e3 != l$12) {
              let e4 = Math.hypot(h.x - s3.x, h.y - s3.y);
              "x" == p ? e4 = Math.abs(h.x - s3.x) : "y" == p && (e4 = Math.abs(h.y - s3.y)), e4 > g2 && (i2 = true);
            }
          } else
            -1 == g2 && e3 != l$12 && (i2 = true);
          this.inPlot(this._tooltipToLocal(s2)) && t3.dataItem ? i2 || (d += s2.y) : i2 = true, i2 || e3.isHidden() || e3.isHiding() ? t3.hide(0) : (t3.show(), r.push(t3), m$1.push(e3));
        }
      }
    }), this.setPrivate("tooltipSeries", m$1), this.get("arrangeTooltips")) {
      const e3 = this._root.tooltipContainer, t3 = r.length;
      if (d / t3 > i / 2 + o2.y) {
        r.sort((e4, t5) => ke(t5.get("pointTo").y, e4.get("pointTo").y));
        let t4 = n2.y;
        if (m(r, (i2) => {
          let s2 = i2.height(), a2 = i2.get("centerY");
          a2 instanceof K && (s2 *= a2.value), s2 += i2.get("marginBottom", 0), i2.set("bounds", { left: o2.x, top: o2.y, right: n2.x, bottom: t4 }), i2.setPrivate("customData", { left: o2.x, top: o2.y, right: n2.x, bottom: t4 }), t4 = Math.min(t4 - s2, i2._fy - s2), i2.parent == e3 && e3.children.moveValue(i2, 0);
        }), t4 < 0) {
          r.reverse();
          let e4 = t4;
          m(r, (i2) => {
            let s2 = i2.get("bounds");
            if (s2) {
              let a2 = s2.top - t4, o3 = s2.bottom - t4;
              a2 < e4 && (a2 = e4, o3 = a2 + i2.height()), i2.set("bounds", { left: s2.left, top: a2, right: s2.right, bottom: o3 }), e4 = s2.bottom - t4 + i2.get("marginBottom", 0);
            }
          });
        }
      } else {
        r.reverse(), r.sort((e4, t5) => ke(e4.get("pointTo").y, t5.get("pointTo").y));
        let t4 = 0;
        if (m(r, (i2) => {
          let s2 = i2.height(), r2 = i2.get("centerY");
          r2 instanceof K && (s2 *= r2.value), s2 += i2.get("marginBottom", 0), i2.set("bounds", { left: o2.x, top: t4, right: n2.x, bottom: Math.max(o2.y + a, t4 + s2) }), i2.parent == e3 && e3.children.moveValue(i2, 0), t4 = Math.max(t4 + s2, i2._fy + s2);
        }), t4 > a) {
          r.reverse();
          let e4 = a;
          m(r, (i2) => {
            let s2 = i2.get("bounds");
            if (s2) {
              let o3 = s2.top - (a - t4), n3 = s2.bottom - (a - t4);
              n3 > e4 && (n3 = e4, o3 = n3 - i2.height()), i2.set("bounds", { left: s2.left, top: o3, right: s2.right, bottom: n3 }), e4 = n3 - i2.height() - i2.get("marginBottom", 0);
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
Object.defineProperty(oe, "className", { enumerable: true, configurable: true, writable: true, value: "XYChart" }), Object.defineProperty(oe, "classNames", { enumerable: true, configurable: true, writable: true, value: U.classNames.concat([oe.className]) });
class ne extends We {
  _beforeChanged() {
    super._beforeChanged(), (this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
}
Object.defineProperty(ne, "className", { enumerable: true, configurable: true, writable: true, value: "Grid" }), Object.defineProperty(ne, "classNames", { enumerable: true, configurable: true, writable: true, value: We.classNames.concat([ne.className]) });
class re extends Qe {
  constructor() {
    super(...arguments), Object.defineProperty(this, "lineX", { enumerable: true, configurable: true, writable: true, value: this.children.push(ne.new(this._root, { themeTags: ["x"] })) }), Object.defineProperty(this, "lineY", { enumerable: true, configurable: true, writable: true, value: this.children.push(ne.new(this._root, { themeTags: ["y"] })) }), Object.defineProperty(this, "selection", { enumerable: true, configurable: true, writable: true, value: this.children.push(We.new(this._root, { themeTags: ["selection", "cursor"], layer: 30 })) }), Object.defineProperty(this, "_movePoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_lastPoint", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_tooltipX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_tooltipY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_toX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_toY", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this._settings.themeTags = zt(this._settings.themeTags, ["xy", "cursor"]), super._afterNew(), this.setAll({ width: Y, height: Y, isMeasured: true, position: "absolute" }), this.states.create("hidden", { visible: true, opacity: 0 }), this._drawLines(), this.setPrivateRaw("visible", false), this._disposers.push(this.setTimeout(() => {
      this.setPrivate("visible", true);
    }, 500)), this._disposers.push(this.lineX.events.on("positionchanged", () => {
      this._handleXLine();
    })), this._disposers.push(this.lineY.events.on("positionchanged", () => {
      this._handleYLine();
    })), this._disposers.push(this.lineX.events.on("focus", (e2) => this._handleLineFocus(e2.target))), this._disposers.push(this.lineX.events.on("blur", (e2) => this._handleLineBlur(e2.target))), this._disposers.push(this.lineY.events.on("focus", (e2) => this._handleLineFocus(e2.target))), this._disposers.push(this.lineY.events.on("blur", (e2) => this._handleLineBlur(e2.target))), rt("keyboardevents") && this._disposers.push(it(document, "keydown", (e2) => {
      this._handleLineMove(e2.keyCode);
    }));
  }
  _setUpTouch() {
    const e2 = this.chart;
    e2 && (e2.plotContainer._display.cancelTouch = "none" != this.get("behavior"));
  }
  _handleXLine() {
    let e2 = this.lineX.x(), t2 = true;
    (e2 < 0 || e2 > this.width()) && (t2 = false), this.lineX.setPrivate("visible", t2);
  }
  _handleYLine() {
    let e2 = this.lineY.y(), t2 = true;
    (e2 < 0 || e2 > this.height()) && (t2 = false), this.lineY.setPrivate("visible", t2);
  }
  _handleLineMove(e2) {
    let t2 = "", i = 0, s2 = 0.1;
    const a = this.chart;
    this._root.focused(this.lineX) ? (a && a.xAxes.length && (s2 = a.xAxes.getIndex(0).getCellWidthPosition()), i = this.getPrivate("positionX", 0), t2 = "positionX", 37 == e2 ? i -= s2 : 39 == e2 && (i += s2)) : this._root.focused(this.lineY) && (a && a.yAxes.length && (s2 = a.yAxes.getIndex(0).getCellWidthPosition()), i = this.getPrivate("positionY", 0), t2 = "positionY", 38 == e2 ? i -= s2 : 40 == e2 && (i += s2)), i < 0 ? i = 0 : i > 1 && (i = 1), "" != t2 && this.set(t2, i);
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
        const t2 = e2.get("tooltip");
        t2 && (this._tooltipX = true, this._disposers.push(t2.on("pointTo", () => {
          this._updateXLine(t2);
        })));
      }
    }
    if (this.isDirty("yAxis")) {
      this._tooltipY = false;
      const e2 = this.get("yAxis");
      if (e2) {
        const t2 = e2.get("tooltip");
        t2 && (this._tooltipY = true, this._disposers.push(t2.on("pointTo", () => {
          this._updateYLine(t2);
        })));
      }
    }
  }
  _handleSyncWith() {
    const e2 = this.chart;
    if (e2) {
      const t2 = this.get("syncWith"), i = [];
      t2 && m(t2, (e3) => {
        const t3 = e3.chart;
        t3 && i.push(t3);
      }), e2._otherCharts = i;
    }
  }
  _updateChildren() {
    if (super._updateChildren(), this._handleSyncWith(), this.isDirty("positionX") || this.isDirty("positionY")) {
      const e2 = this.get("positionX"), t2 = this.get("positionY");
      null == e2 && null == t2 ? this.hide(0) : (this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0))), this.handleMove());
    }
  }
  _updateXLine(e2) {
    let t2 = ae$1(this._display.toLocal(e2.get("pointTo", { x: 0, y: 0 })).x, 2);
    this._toX != t2 && (this.lineX.animate({ key: "x", to: t2, duration: e2.get("animationDuration", 0), easing: e2.get("animationEasing") }), this._toX = t2);
  }
  _updateYLine(e2) {
    let t2 = ae$1(this._display.toLocal(e2.get("pointTo", { x: 0, y: 0 })).y, 2);
    this._toY != t2 && (this.lineY.animate({ key: "y", to: t2, duration: e2.get("animationDuration", 0), easing: e2.get("animationEasing") }), this._toY = t2);
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
    const t2 = e2.plotContainer;
    this.events.on("boundschanged", () => {
      this._disposers.push(this.setTimeout(() => {
        this.updateCursor();
      }, 50));
    }), rt("touchevents") && (this._disposers.push(t2.events.on("click", (e3) => {
      lt(e3.originalEvent) && this._handleMove(e3);
    })), this._setUpTouch()), this._disposers.push(t2.events.on("pointerdown", (e3) => {
      this._handleCursorDown(e3);
    })), this._disposers.push(t2.events.on("globalpointerup", (e3) => {
      this._handleCursorUp(e3), e3.native || this.isHidden() || this._handleMove(e3);
    })), this._disposers.push(t2.events.on("globalpointermove", (e3) => {
      (this.get("syncWith") || 0 != $$1(t2._downPoints).length || e3.native || !this.isHidden()) && this._handleMove(e3);
    }));
    const i = this.parent;
    i && i.children.moveValue(this.selection);
  }
  _inPlot(e2) {
    const t2 = this.chart;
    return !!t2 && t2.inPlot(e2);
  }
  _handleCursorDown(e2) {
    if (2 == e2.originalEvent.button)
      return;
    const t2 = e2.point;
    let i = this._display.toLocal(t2);
    const s2 = this.chart;
    if (this.selection.set("draw", () => {
    }), s2 && this._inPlot(i)) {
      if (this._downPoint = i, "none" != this.get("behavior")) {
        this.selection.show();
        const t4 = "selectstarted";
        this.events.isEnabled(t4) && this.events.dispatch(t4, { type: t4, target: this, originalEvent: e2.originalEvent });
      }
      let t3 = this._getPosition(i).x, s3 = this._getPosition(i).y;
      this.setPrivate("downPositionX", t3), this.setPrivate("downPositionY", s3);
    }
  }
  _handleCursorUp(e2) {
    if (this._downPoint) {
      const t2 = this.get("behavior", "none");
      if ("none" != t2) {
        "z" === t2.charAt(0) && this.selection.hide();
        const i = e2.point;
        let s2 = this._display.toLocal(i);
        const a = this._downPoint, o2 = this.get("moveThreshold", 1);
        if (s2 && a) {
          let i2 = false;
          if ("zoomX" !== t2 && "zoomXY" !== t2 && "selectX" !== t2 && "selectXY" !== t2 || Math.abs(s2.x - a.x) > o2 && (i2 = true), "zoomY" !== t2 && "zoomXY" !== t2 && "selectY" !== t2 && "selectXY" !== t2 || Math.abs(s2.y - a.y) > o2 && (i2 = true), i2) {
            const t3 = "selectended";
            this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this, originalEvent: e2.originalEvent });
          } else {
            const t3 = "selectcancelled";
            this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this, originalEvent: e2.originalEvent });
          }
        }
      }
    }
    this._downPoint = void 0;
  }
  _handleMove(e2) {
    if (this.getPrivate("visible")) {
      const t2 = this.chart;
      if (t2 && $$1(t2.plotContainer._downPoints).length > 1)
        return void this.set("forceHidden", true);
      this.set("forceHidden", false);
      const i = e2.point, s2 = this._lastPoint;
      if (Math.round(s2.x) === Math.round(i.x) && Math.round(s2.y) === Math.round(i.y))
        return;
      this._lastPoint = i, this.setPrivate("lastPoint", i), this.handleMove({ x: i.x, y: i.y }, false, e2.originalEvent);
    }
  }
  _getPosition(e2) {
    return { x: e2.x / this.width(), y: e2.y / this.height() };
  }
  handleMove(e2, t2, i) {
    e2 || (e2 = this._movePoint);
    const a = this.get("alwaysShow");
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
      let r = o2.x, l$12 = o2.y, h = this._getPosition(o2);
      this.setPrivate("point", o2);
      let d = this.get("snapToSeries");
      this._downPoint && (d = void 0);
      let c = this.get("positionX"), u2 = h.x;
      l(c) && (u2 = c);
      let g2 = this.get("positionY"), p = h.y;
      l(g2) && (p = g2), this.setPrivate("positionX", u2), this.setPrivate("positionY", p);
      const m2 = this._getPoint(u2, p);
      if (r = m2.x, l$12 = m2.y, n2.xAxes.each((e3) => {
        e3._handleCursorPosition(u2, d), a && e3.handleCursorShow();
      }), n2.yAxes.each((e3) => {
        e3._handleCursorPosition(p, d), a && e3.handleCursorShow();
      }), !t2) {
        n2._handleCursorPosition();
        const t3 = "cursormoved";
        this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this, point: e2, originalEvent: i });
      }
      this._updateLines(r, l$12), n2.arrangeTooltips();
    } else if (!this._downPoint && !a) {
      this.hide(0);
      const e3 = "cursorhidden";
      this.events.isEnabled(e3) && this.events.dispatch(e3, { type: e3, target: this });
    }
    this._downPoint && "none" != this.get("behavior") && this._updateSelection(o2);
  }
  _getPoint(e2, t2) {
    return { x: this.width() * e2, y: this.height() * t2 };
  }
  _updateLines(e2, t2) {
    this._tooltipX || this.lineX.set("x", e2), this._tooltipY || this.lineY.set("y", t2), this._drawLines();
  }
  _updateSelection(e2) {
    const t2 = this.selection, i = this.get("behavior"), s2 = this.width(), a = this.height();
    e2.x < 0 && (e2.x = 0), e2.x > s2 && (e2.x = s2), e2.y < 0 && (e2.y = 0), e2.y > a && (e2.y = a), t2.set("draw", (t3) => {
      const o2 = this._downPoint;
      o2 && ("zoomXY" === i || "selectXY" === i ? (t3.moveTo(o2.x, o2.y), t3.lineTo(o2.x, e2.y), t3.lineTo(e2.x, e2.y), t3.lineTo(e2.x, o2.y), t3.lineTo(o2.x, o2.y)) : "zoomX" === i || "selectX" === i ? (t3.moveTo(o2.x, 0), t3.lineTo(o2.x, a), t3.lineTo(e2.x, a), t3.lineTo(e2.x, 0), t3.lineTo(o2.x, 0)) : "zoomY" !== i && "selectY" !== i || (t3.moveTo(0, o2.y), t3.lineTo(s2, o2.y), t3.lineTo(s2, e2.y), t3.lineTo(0, e2.y), t3.lineTo(0, o2.y)));
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
function le(e2, t2) {
  return null == e2 ? t2 : null == t2 ? e2 : t2 < e2 ? t2 : e2;
}
function he(e2, t2) {
  return null == e2 ? t2 : null == t2 ? e2 : t2 > e2 ? t2 : e2;
}
Object.defineProperty(re, "className", { enumerable: true, configurable: true, writable: true, value: "XYCursor" }), Object.defineProperty(re, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([re.className]) });
class de extends D {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_xField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xOpenField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yOpenField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xLowField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_xHighField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yLowField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_yHighField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_axesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_stackDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_selectionProcessed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataSets", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_mainContainerMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_y", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "mainContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, {})) }), Object.defineProperty(this, "axisRanges", { enumerable: true, configurable: true, writable: true, value: new F() }), Object.defineProperty(this, "_skipped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_couldStackTo", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_reallyStackedTo", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_stackedSeries", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_aLocationX0", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_aLocationX1", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_aLocationY0", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_aLocationY1", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_showBullets", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "valueXFields", { enumerable: true, configurable: true, writable: true, value: ["valueX", "openValueX", "lowValueX", "highValueX"] }), Object.defineProperty(this, "valueYFields", { enumerable: true, configurable: true, writable: true, value: ["valueY", "openValueY", "lowValueY", "highValueY"] }), Object.defineProperty(this, "_valueXFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueYFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueXShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueYShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "__valueXShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "__valueYShowFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_emptyDataItem", { enumerable: true, configurable: true, writable: true, value: new g(this, void 0, {}) }), Object.defineProperty(this, "_dataSetId", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipFieldX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipFieldY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_posXDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_posYDp", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    this.fields.push("categoryX", "categoryY", "openCategoryX", "openCategoryY"), this.valueFields.push("valueX", "valueY", "openValueX", "openValueY", "lowValueX", "lowValueY", "highValueX", "highValueY"), this._setRawDefault("vcx", 1), this._setRawDefault("vcy", 1), this._setRawDefault("valueXShow", "valueXWorking"), this._setRawDefault("valueYShow", "valueYWorking"), this._setRawDefault("openValueXShow", "openValueXWorking"), this._setRawDefault("openValueYShow", "openValueYWorking"), this._setRawDefault("lowValueXShow", "lowValueXWorking"), this._setRawDefault("lowValueYShow", "lowValueYWorking"), this._setRawDefault("highValueXShow", "highValueXWorking"), this._setRawDefault("highValueYShow", "highValueYWorking"), this._setRawDefault("lowValueXGrouped", "low"), this._setRawDefault("lowValueYGrouped", "low"), this._setRawDefault("highValueXGrouped", "high"), this._setRawDefault("highValueYGrouped", "high"), super._afterNew(), this.set("maskContent", true), this._disposers.push(this.axisRanges.events.onAll((e2) => {
      if ("clear" === e2.type)
        m(e2.oldValues, (e3) => {
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
    })), this.states.create("hidden", { opacity: 1, visible: false }), this._makeFieldNames();
  }
  _processAxisRange(e2) {
    const t2 = Qe.new(this._root, {});
    e2.container = t2, this.children.push(t2), e2.series = this;
    const i = e2.axisDataItem;
    i.setRaw("isRange", true);
    const s2 = i.component;
    if (s2) {
      s2._processAxisRange(i, ["range", "series"]);
      const e3 = i.get("bullet");
      if (e3) {
        const t3 = e3.get("sprite");
        t3 && t3.setPrivate("visible", false);
      }
      const a = i.get("axisFill");
      a && t2.set("mask", a), s2._seriesAxisRanges.push(i);
    }
  }
  _removeAxisRange(e2) {
    const t2 = e2.axisDataItem, i = t2.component;
    i.disposeDataItem(t2), v(i._seriesAxisRanges, t2);
    const s2 = e2.container;
    s2 && s2.dispose();
  }
  _updateFields() {
    super._updateFields(), this._valueXFields = [], this._valueYFields = [], this._valueXShowFields = [], this._valueYShowFields = [], this.__valueXShowFields = [], this.__valueYShowFields = [], this.valueXFields && m(this.valueXFields, (e2) => {
      if (this.get(e2 + "Field")) {
        this._valueXFields.push(e2);
        let t2 = this.get(e2 + "Show");
        this.__valueXShowFields.push(t2), -1 != t2.indexOf("Working") ? this._valueXShowFields.push(t2.split("Working")[0]) : this._valueXShowFields.push(t2);
      }
    }), this.valueYFields && m(this.valueYFields, (e2) => {
      if (this.get(e2 + "Field")) {
        this._valueYFields.push(e2);
        let t2 = this.get(e2 + "Show");
        this.__valueYShowFields.push(t2), -1 != t2.indexOf("Working") ? this._valueYShowFields.push(t2.split("Working")[0]) : this._valueYShowFields.push(t2);
      }
    });
  }
  _dispose() {
    super._dispose();
    const e2 = this.chart;
    e2 && e2.series.removeValue(this), y(this.get("xAxis").series, this), y(this.get("yAxis").series, this);
  }
  _min(e2, t2) {
    let i = le(this.getPrivate(e2), t2);
    this.setPrivate(e2, i);
  }
  _max(e2, t2) {
    let i = he(this.getPrivate(e2), t2);
    this.setPrivate(e2, i);
  }
  _shouldMakeBullet(e2) {
    const t2 = this.get("xAxis"), i = this.get("yAxis"), s2 = this.get("baseAxis");
    if (!t2.inited || !i.inited)
      return false;
    const a = this.get("minBulletDistance", 0);
    if (a > 0) {
      let e3 = this.startIndex(), o2 = this.endIndex() - e3;
      if (t2 == s2) {
        if (t2.get("renderer").axisLength() / o2 < a / 5)
          return false;
      } else if (i == s2 && i.get("renderer").axisLength() / o2 < a / 5)
        return false;
    }
    return null != e2.get(this._xField) && null != e2.get(this._yField);
  }
  _makeFieldNames() {
    const e2 = this.get("xAxis"), t2 = this.get("yAxis"), i = e2.getPrivate("name"), s2 = Ht(i), a = t2.getPrivate("name"), o2 = Ht(a), n2 = e2.get("renderer").getPrivate("letter"), r = t2.get("renderer").getPrivate("letter"), l2 = "open", h = "low", d = "high", c = "Show";
    "ValueAxis" === e2.className ? (this._xField = this.get(i + n2 + c), this._xOpenField = this.get(l2 + s2 + n2 + c), this._xLowField = this.get(h + s2 + n2 + c), this._xHighField = this.get(d + s2 + n2 + c)) : (this._xField = i + n2, this._xOpenField = l2 + s2 + n2, this._xLowField = h + s2 + n2, this._xHighField = d + s2 + n2), "ValueAxis" === t2.className ? (this._yField = this.get(a + r + c), this._yOpenField = this.get(l2 + o2 + r + c), this._yLowField = this.get(h + o2 + r + c), this._yHighField = this.get(d + o2 + r + c)) : (this._yField = a + r, this._yOpenField = l2 + o2 + r, this._yLowField = h + o2 + r, this._yHighField = d + o2 + r);
  }
  _fixVC() {
    const e2 = this.get("xAxis"), t2 = this.get("yAxis"), i = this.get("baseAxis"), s2 = this.states.lookup("hidden"), a = this.get("sequencedInterpolation");
    if (s2) {
      let o2 = 0;
      a && (o2 = 0.999999999999), e2 === i ? s2.set("vcy", o2) : (t2 === i || s2.set("vcy", o2), s2.set("vcx", o2));
    }
  }
  _handleMaskBullets() {
    this.isDirty("maskBullets") && this.bulletsContainer.set("maskContent", this.get("maskBullets"));
  }
  _fixPosition() {
    const e2 = this.get("xAxis"), t2 = this.get("yAxis");
    this.set("x", e2.x() - bt(e2.get("centerX", 0), e2.width()) - e2.parent.get("paddingLeft", 0)), this.set("y", t2.y() - bt(t2.get("centerY", 0), t2.height()) - t2.parent.get("paddingTop", 0)), this.bulletsContainer.set("y", this.y()), this.bulletsContainer.set("x", this.x());
  }
  _prepareChildren() {
    super._prepareChildren(), (this.isDirty("valueYShow") || this.isDirty("valueXShow") || this.isDirty("openValueYShow") || this.isDirty("openValueXShow") || this.isDirty("lowValueYShow") || this.isDirty("lowValueXShow") || this.isDirty("highValueYShow") || this.isDirty("highValueXShow")) && (this._updateFields(), this._makeFieldNames(), this._valuesDirty = true), (this.isDirty("xAxis") || this.isDirty("yAxis")) && (this._valuesDirty = true), this.set("width", this.get("xAxis").width()), this.set("height", this.get("yAxis").height()), this._handleMaskBullets();
    const e2 = this.get("xAxis"), t2 = this.get("yAxis"), i = this.get("baseAxis");
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
    let a;
    switch (this.get("tooltipPositionY")) {
      case "open":
        a = this._yOpenField;
        break;
      case "low":
        a = this._yLowField;
        break;
      case "high":
        a = this._yHighField;
        break;
      default:
        a = this._yField;
    }
    this._tooltipFieldY = a, this.isDirty("baseAxis") && this._fixVC(), this._fixPosition();
    const o2 = this.get("stacked");
    if (this.isDirty("stacked") && (o2 ? this._valuesDirty && !this._dataProcessed || this._stack() : this._unstack()), this._valuesDirty && !this._dataProcessed && (this._dataProcessed = true, o2 && this._stack(), m(this.dataItems, (i2) => {
      m(this._valueXShowFields, (e3) => {
        let t3 = i2.get(e3);
        null != t3 && (o2 && (t3 += this.getStackedXValue(i2, e3)), this._min("minX", t3), this._max("maxX", t3));
      }), m(this._valueYShowFields, (e3) => {
        let t3 = i2.get(e3);
        null != t3 && (o2 && (t3 += this.getStackedYValue(i2, e3)), this._min("minY", t3), this._max("maxY", t3));
      }), e2.processSeriesDataItem(i2, this._valueXFields), t2.processSeriesDataItem(i2, this._valueYFields);
    }), e2._seriesValuesDirty = true, t2._seriesValuesDirty = true, this.get("ignoreMinMax") || ((this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) && e2.markDirtyExtremes(), (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) && t2.markDirtyExtremes()), this._markStakedDirtyStack(), this.get("tooltipDataItem") || this.updateLegendValue(void 0)), (this.isDirty("vcx") || this.isDirty("vcy")) && this._markStakedDirtyStack(), this._dataGrouped || (e2._groupSeriesData(this), t2._groupSeriesData(this), this._dataGrouped = true), this._valuesDirty || this.isPrivateDirty("startIndex") || this.isPrivateDirty("endIndex") || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty) {
      let s3 = this.startIndex(), a2 = this.endIndex(), o3 = this.get("minBulletDistance", 0);
      if (o3 > 0 && i && (i.get("renderer").axisLength() / (a2 - s3) > o3 ? this._showBullets = true : this._showBullets = false), (this._psi != s3 || this._pei != a2 || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty || this._valuesDirty) && !this._selectionProcessed) {
        this._selectionProcessed = true;
        const o4 = this.get("vcx", 1), n2 = this.get("vcy", 1), r = this.get("stacked", false), l2 = this.getPrivate("outOfSelection");
        if (i === e2 || !i)
          if (t2._calculateTotals(), this.setPrivateRaw("selectionMinY", void 0), this.setPrivateRaw("selectionMaxY", void 0), l2)
            t2.markDirtySelectionExtremes();
          else
            for (let e3 = s3; e3 < a2; e3++)
              this.processYSelectionDataItem(this.dataItems[e3], n2, r);
        if (i === t2 || !i)
          if (e2._calculateTotals(), this.setPrivateRaw("selectionMinX", void 0), this.setPrivateRaw("selectionMaxX", void 0), l2)
            t2.markDirtySelectionExtremes();
          else
            for (let e3 = s3; e3 < a2; e3++)
              this.processXSelectionDataItem(this.dataItems[e3], o4, r);
        if ((i === e2 || !i) && "valueYWorking" !== this.get("valueYShow")) {
          const e3 = this.getPrivate("selectionMinY");
          null != e3 && (this.setPrivateRaw("minY", e3), t2.markDirtyExtremes());
          const i2 = this.getPrivate("selectionMaxY");
          null != i2 && (this.setPrivateRaw("maxY", i2), t2.markDirtyExtremes());
        }
        if ((i === t2 || !i) && "valueXWorking" !== this.get("valueXShow")) {
          const i2 = this.getPrivate("selectionMinX");
          null != i2 && (this.setPrivateRaw("minX", i2), t2.markDirtyExtremes());
          const s4 = this.getPrivate("selectionMaxX");
          null != s4 && (this.setPrivateRaw("maxX", s4), e2.markDirtyExtremes());
        }
        (this.isPrivateDirty("selectionMinX") || this.isPrivateDirty("selectionMaxX")) && e2.markDirtySelectionExtremes(), (this.isPrivateDirty("selectionMinY") || this.isPrivateDirty("selectionMaxY")) && t2.markDirtySelectionExtremes();
      }
    }
  }
  _makeRangeMask() {
    if (this.axisRanges.length > 0) {
      let e2 = this._mainContainerMask;
      null == e2 && (e2 = this.children.push(We.new(this._root, {})), this._mainContainerMask = e2, e2.set("draw", (t2, i) => {
        const s2 = this.parent;
        if (s2) {
          const e3 = this._root.container.width(), a = this._root.container.height();
          t2.moveTo(-e3, -a), t2.lineTo(-e3, 2 * a), t2.lineTo(2 * e3, 2 * a), t2.lineTo(2 * e3, -a), t2.lineTo(-e3, -a), this.axisRanges.each((e4) => {
            const a2 = e4.axisDataItem.get("axisFill");
            if (s2 && a2) {
              let e5 = a2.get("draw");
              e5 && e5(t2, i);
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
      const t2 = e2.series.indexOf(this);
      if (this._couldStackTo = [], t2 > 0) {
        let i;
        for (let s2 = t2 - 1; s2 >= 0 && (i = e2.series.getIndex(s2), i.get("xAxis") !== this.get("xAxis") || i.get("yAxis") !== this.get("yAxis") || i.className !== this.className || (this._couldStackTo.push(i), i.get("stacked"))); s2--)
          ;
      }
      this._stackDataItems();
    }
  }
  _unstack() {
    q(this._reallyStackedTo, (e2, t2) => {
      delete t2._stackedSeries[this.uid];
    }), this._reallyStackedTo = {}, m(this.dataItems, (e2) => {
      e2.setRaw("stackToItemY", void 0), e2.setRaw("stackToItemX", void 0);
    });
  }
  _stackDataItems() {
    const e2 = this.get("baseAxis"), t2 = this.get("xAxis"), i = this.get("yAxis");
    let a, o2;
    e2 === t2 ? (a = "valueY", o2 = "stackToItemY") : e2 === i && (a = "valueX", o2 = "stackToItemX");
    let n2 = this._couldStackTo.length, r = 0;
    const l$12 = this.get("stackToNegative");
    this._reallyStackedTo = {}, m(this.dataItems, (e3) => {
      for (let t3 = 0; t3 < n2; t3++) {
        let i2 = this._couldStackTo[t3], n3 = i2.dataItems[r], h = e3.get(a);
        if (n3) {
          let t4 = n3.get(a);
          if (l$12) {
            if (!l(h))
              break;
            if (l(t4)) {
              if (h >= 0 && t4 >= 0) {
                e3.setRaw(o2, n3), this._reallyStackedTo[i2.uid] = i2, i2._stackedSeries[this.uid] = this;
                break;
              }
              if (h < 0 && t4 < 0) {
                e3.setRaw(o2, n3), this._reallyStackedTo[i2.uid] = i2, i2._stackedSeries[this.uid] = this;
                break;
              }
            }
          } else if (l(h) && l(t4)) {
            e3.setRaw(o2, n3), this._reallyStackedTo[i2.uid] = i2, i2._stackedSeries[this.uid] = this;
            break;
          }
        }
      }
      r++;
    });
  }
  processXSelectionDataItem(e2, t2, i) {
    m(this.__valueXShowFields, (s2) => {
      let a = e2.get(s2);
      null != a && (i && (a += this.getStackedXValueWorking(e2, s2)), this._min("selectionMinX", a), this._max("selectionMaxX", a * t2));
    });
  }
  processYSelectionDataItem(e2, t2, i) {
    m(this.__valueYShowFields, (s2) => {
      let a = e2.get(s2);
      null != a && (i && (a += this.getStackedYValueWorking(e2, s2)), this._min("selectionMinY", a), this._max("selectionMaxY", a * t2));
    });
  }
  getStackedYValueWorking(e2, t2) {
    const i = e2.get("stackToItemY");
    if (i) {
      const e3 = i.component;
      return i.get(t2, 0) * e3.get("vcy", 1) + this.getStackedYValueWorking(i, t2);
    }
    return 0;
  }
  getStackedXValueWorking(e2, t2) {
    const i = e2.get("stackToItemX");
    if (i) {
      const e3 = i.component;
      return i.get(t2, 0) * e3.get("vcx", 1) + this.getStackedXValueWorking(i, t2);
    }
    return 0;
  }
  getStackedYValue(e2, t2) {
    const i = e2.get("stackToItemY");
    return i ? i.get(t2, 0) + this.getStackedYValue(i, t2) : 0;
  }
  getStackedXValue(e2, t2) {
    const i = e2.get("stackToItemX");
    return i ? i.get(t2, 0) + this.getStackedXValue(i, t2) : 0;
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
    let t2 = e2.get("sprite");
    if (t2) {
      let i = t2.dataItem, s2 = e2.get("locationX", i.get("locationX", 0.5)), a = e2.get("locationY", i.get("locationY", 0.5)), o2 = this.get("xAxis"), n2 = this.get("yAxis");
      const r = o2.getDataItemPositionX(i, this._xField, s2, this.get("vcx", 1)), l2 = n2.getDataItemPositionY(i, this._yField, a, this.get("vcy", 1));
      let h = this.getPoint(r, l2), d = i.get("left", h.x), c = i.get("right", h.x), u2 = i.get("top", h.y), g2 = i.get("bottom", h.y);
      if (this._shouldShowBullet(r, l2)) {
        e2.getPrivate("hidden") ? t2.setPrivate("visible", false) : t2.setPrivate("visible", true);
        let i2 = c - d, o3 = g2 - u2;
        t2.isType("Label") && (t2.setPrivate("maxWidth", Math.abs(i2)), t2.setPrivate("maxHeight", Math.abs(o3)));
        let n3 = d + i2 * s2, r2 = g2 - o3 * a;
        t2.set("x", n3), t2.set("y", r2);
      } else
        t2.setPrivate("visible", false);
    }
  }
  _shouldShowBullet(e2, t2) {
    return this._showBullets;
  }
  setDataSet(e2) {
    if (this._dataSets[e2]) {
      this._handleDataSetChange(), this._dataItems = this._dataSets[e2], this._markDataSetDirty(), this._dataSetId = e2;
      const t2 = "datasetchanged";
      this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this, id: e2 });
    }
  }
  resetGrouping() {
    q(this._dataSets, (e2, t2) => {
      t2 != this._mainDataItems && m(t2, (e3) => {
        this.disposeDataItem(e3);
      });
    }), this._dataSets = {}, this._dataItems = this.mainDataItems;
  }
  _handleDataSetChange() {
    this.bullets.length > 0 && m(this._dataItems, (e2) => {
      let t2 = e2.bullets;
      t2 && m(t2, (e3) => {
        if (e3) {
          let t3 = e3.get("sprite");
          t3 && t3.setPrivate("visible", false);
        }
      });
    }), this._selectionProcessed = false;
  }
  show(e2) {
    const t$1 = Object.create(null, { show: { get: () => super.show } });
    return t(this, void 0, void 0, function* () {
      this._fixVC();
      let i = [];
      i.push(t$1.show.call(this, e2).then(() => {
        this._isShowing = false;
        let e3 = this.get("xAxis"), t2 = this.get("yAxis"), i2 = this.get("baseAxis");
        t2 !== i2 && t2.markDirtySelectionExtremes(), e3 !== i2 && e3.markDirtySelectionExtremes();
      })), i.push(this.bulletsContainer.show(e2)), i.push(this._sequencedShowHide(true, e2)), yield Promise.all(i);
    });
  }
  hide(e2) {
    const t$1 = Object.create(null, { hide: { get: () => super.hide } });
    return t(this, void 0, void 0, function* () {
      this._fixVC();
      let i = [];
      i.push(t$1.hide.call(this, e2).then(() => {
        this._isHiding = false;
      })), i.push(this.bulletsContainer.hide(e2)), i.push(this._sequencedShowHide(false, e2)), yield Promise.all(i);
    });
  }
  showDataItem(e2, t$1) {
    const i = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return t(this, void 0, void 0, function* () {
      const a = [i.showDataItem.call(this, e2, t$1)];
      l(t$1) || (t$1 = this.get("stateAnimationDuration", 0));
      const o2 = this.get("stateAnimationEasing");
      m(this._valueFields, (i2) => {
        a.push(e2.animate({ key: i2 + "Working", to: e2.get(i2), duration: t$1, easing: o2 }).waitForStop());
      }), yield Promise.all(a);
    });
  }
  hideDataItem(e2, t$1) {
    const i = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return t(this, void 0, void 0, function* () {
      const a = [i.hideDataItem.call(this, e2, t$1)], o2 = this.states.create("hidden", {});
      l(t$1) || (t$1 = o2.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const n2 = o2.get("stateAnimationEasing", this.get("stateAnimationEasing")), r = this.get("xAxis"), l$12 = this.get("yAxis"), h = this.get("baseAxis"), d = this.get("stacked");
      if (h !== r && h || m(this._valueYFields, (i2) => {
        let o3 = l$12.getPrivate("min"), r2 = l$12.baseValue();
        l(o3) && o3 > r2 && (r2 = o3), d && (r2 = 0), null != e2.get(i2) && a.push(e2.animate({ key: i2 + "Working", to: r2, duration: t$1, easing: n2 }).waitForStop());
      }), h === l$12 || !h) {
        let i2 = r.getPrivate("min"), o3 = r.baseValue();
        l(i2) && i2 > o3 && (o3 = i2), d && (o3 = 0), m(this._valueXFields, (i3) => {
          null != e2.get(i3) && a.push(e2.animate({ key: i3 + "Working", to: o3, duration: t$1, easing: n2 }).waitForStop());
        });
      }
      yield Promise.all(a);
    });
  }
  _markDirtyStack() {
    this._stackDirty = true, this.markDirty(), this._markStakedDirtyStack();
  }
  _markStakedDirtyStack() {
    const e2 = this._stackedSeries;
    e2 && q(e2, (e3, t2) => {
      t2._stackDirty || t2._markDirtyStack();
    });
  }
  _afterChanged() {
    super._afterChanged(), this._skipped && (this._markDirtyAxes(), this._skipped = false);
  }
  showDataItemTooltip(e2) {
    this.updateLegendMarker(e2), this.updateLegendValue(e2);
    const t2 = this.get("tooltip");
    if (t2) {
      if (this.isHidden())
        this.hideTooltip();
      else if (t2._setDataItem(e2), e2) {
        let i = this.get("locationX", 0), s2 = this.get("locationY", 1), a = e2.get("locationX", i), o2 = e2.get("locationY", s2);
        const n2 = this.get("xAxis"), r = this.get("yAxis"), l2 = this.get("vcx", 1), h = this.get("vcy", 1), d = n2.getDataItemPositionX(e2, this._tooltipFieldX, this._aLocationX0 + (this._aLocationX1 - this._aLocationX0) * a, l2), c = r.getDataItemPositionY(e2, this._tooltipFieldY, this._aLocationY0 + (this._aLocationY1 - this._aLocationY0) * o2, h), u2 = this.getPoint(d, c);
        let g2 = true;
        if (m(this._valueFields, (t3) => {
          null == e2.get(t3) && (g2 = false);
        }), g2) {
          const i2 = this.chart;
          i2 && i2.inPlot(u2) ? (t2.label.text.markDirtyText(), t2.set("tooltipTarget", this._getTooltipTarget(e2)), t2.set("pointTo", this._display.toGlobal({ x: u2.x, y: u2.y }))) : t2._setDataItem(void 0);
        } else
          t2._setDataItem(void 0);
      }
    }
  }
  hideTooltip() {
    const e2 = this.get("tooltip");
    return e2 && e2.set("tooltipTarget", this), super.hideTooltip();
  }
  _getTooltipTarget(e2) {
    if ("bullet" == this.get("seriesTooltipTarget")) {
      const t2 = e2.bullets;
      if (t2 && t2.length > 0) {
        const e3 = t2[0].get("sprite");
        if (e3)
          return e3;
      }
    }
    return this;
  }
  updateLegendValue(e2) {
    const t2 = this.get("legendDataItem");
    if (t2) {
      const i = t2.get("label");
      if (i) {
        let t3 = "";
        e2 ? (i._setDataItem(e2), t3 = this.get("legendLabelText", i.get("text", this.get("name", "")))) : (i._setDataItem(this._emptyDataItem), t3 = this.get("legendRangeLabelText", this.get("legendLabelText", i.get("text", this.get("name", ""))))), i.set("text", t3);
      }
      const s2 = t2.get("valueLabel");
      if (s2) {
        let t3 = "";
        e2 ? (s2._setDataItem(e2), t3 = this.get("legendValueText", s2.get("text", ""))) : (s2._setDataItem(this._emptyDataItem), t3 = this.get("legendRangeValueText", s2.get("text", ""))), s2.set("text", t3);
      }
    }
  }
  _getItemReaderLabel() {
    let e2 = "X: {" + this._xField;
    return this.get("xAxis").isType("DateAxis") && (e2 += ".formatDate()"), e2 += "}; Y: {" + this._yField, this.get("yAxis").isType("DateAxis") && (e2 += ".formatDate()"), e2 += "}", e2;
  }
  getPoint(e2, t2) {
    let i = this.get("xAxis").get("renderer").positionToCoordinate(e2), s2 = this.get("yAxis").get("renderer").positionToCoordinate(t2), a = 999999999;
    return s2 < -a && (s2 = -a), s2 > a && (s2 = a), i < -a && (i = -a), i > a && (i = a), { x: i, y: s2 };
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
}
Object.defineProperty(de, "className", { enumerable: true, configurable: true, writable: true, value: "XYSeries" }), Object.defineProperty(de, "classNames", { enumerable: true, configurable: true, writable: true, value: D.classNames.concat([de.className]) });
class ce extends _$1 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_series", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_isPanning", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "labelsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, {})) }), Object.defineProperty(this, "gridContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { width: Y, height: Y }) }), Object.defineProperty(this, "topGridContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { width: Y, height: Y }) }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { isMeasured: false, width: Y, height: Y, position: "absolute" })) }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rangesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_panStart", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_panEnd", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_sAnimation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_eAnimation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_skipSync", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "axisRanges", { enumerable: true, configurable: true, writable: true, value: new F() }), Object.defineProperty(this, "_seriesAxisRanges", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "ghostLabel", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_cursorPosition", { enumerable: true, configurable: true, writable: true, value: -1 }), Object.defineProperty(this, "_snapToSeries", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_seriesValuesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "axisHeader", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { themeTags: ["axis", "header"], position: "absolute", background: Ve.new(this._root, { themeTags: ["header", "background"], fill: this._root.interfaceColors.get("background") }) })) }), Object.defineProperty(this, "_bullets", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  _dispose() {
    this.gridContainer.dispose(), this.topGridContainer.dispose(), this.bulletsContainer.dispose(), this.labelsContainer.dispose(), this.axisHeader.dispose(), super._dispose();
  }
  _afterNew() {
    super._afterNew(), this.setPrivate("updateScrollbar", true), this._disposers.push(this.axisRanges.events.onAll((e3) => {
      if ("clear" === e3.type)
        m(e3.oldValues, (e4) => {
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
    e2 && (e2.axis = this, e2.processAxis()), this.children.push(e2), this.ghostLabel = e2.makeLabel(new g(this, void 0, {}), []), this.ghostLabel.adapters.disable("text"), this.ghostLabel.setAll({ opacity: 0, tooltipText: void 0, tooltipHTML: void 0, interactive: false }), this.ghostLabel.events.disable();
  }
  _updateFinals(e2, t2) {
  }
  zoom(e2, t2, i, a) {
    if (this._updateFinals(e2, t2), this.get("start") !== e2 || this.get("end") != t2) {
      let o2 = this._sAnimation, n2 = this._eAnimation, r = this.get("maxDeviation", 0.5) * Math.min(1, t2 - e2);
      e2 < -r && (e2 = -r), t2 > 1 + r && (t2 = 1 + r), e2 > t2 && ([e2, t2] = [t2, e2]), l(i) || (i = this.get("interpolationDuration", 0)), a || (a = "end");
      let l$12 = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100)), h = l$12;
      1 === t2 && 0 !== e2 && (a = e2 < this.get("start") ? "start" : "end"), 0 === e2 && 1 !== t2 && (a = t2 > this.get("end") ? "end" : "start");
      let d = this.get("minZoomCount"), c = this.get("maxZoomCount");
      l(d) && (l$12 = h / d);
      let u2 = 1;
      if (l(c) && (u2 = h / c), "start" === a ? (c > 0 && 1 / (t2 - e2) < u2 && (t2 = e2 + 1 / u2), 1 / (t2 - e2) > l$12 && (t2 = e2 + 1 / l$12), t2 > 1 && t2 - e2 < 1 / l$12 && (e2 = t2 - 1 / l$12)) : (c > 0 && 1 / (t2 - e2) < u2 && (e2 = t2 - 1 / u2), 1 / (t2 - e2) > l$12 && (e2 = t2 - 1 / l$12), e2 < 0 && t2 - e2 < 1 / l$12 && (t2 = e2 + 1 / l$12)), 1 / (t2 - e2) > l$12 && (t2 = e2 + 1 / l$12), 1 / (t2 - e2) > l$12 && (e2 = t2 - 1 / l$12), null != c && null != d && e2 == this.get("start") && t2 == this.get("end")) {
        const e3 = this.chart;
        e3 && e3._handleAxisSelection(this, true);
      }
      if ((o2 && o2.playing && o2.to == e2 || this.get("start") == e2) && (n2 && n2.playing && n2.to == t2 || this.get("end") == t2))
        return;
      if (i > 0) {
        let s2, a2, o3 = this.get("interpolationEasing");
        if (this.get("start") != e2 && (s2 = this.animate({ key: "start", to: e2, duration: i, easing: o3 })), this.get("end") != t2 && (a2 = this.animate({ key: "end", to: t2, duration: i, easing: o3 })), this._sAnimation = s2, this._eAnimation = a2, s2)
          return s2;
        if (a2)
          return a2;
      } else
        this.set("start", e2), this.set("end", t2), this._root.events.once("frameended", () => {
          this._markDirtyKey("start"), this._root._markDirty();
        });
    } else
      this._sAnimation && this._sAnimation.stop(), this._eAnimation && this._eAnimation.stop();
  }
  get series() {
    return this._series;
  }
  _processAxisRange(e2, t2) {
    e2.setRaw("isRange", true), this._createAssets(e2, t2), this._rangesDirty = true, this._prepareDataItem(e2);
    const i = e2.get("above"), s2 = this.topGridContainer, a = e2.get("grid");
    i && a && s2.children.moveValue(a);
    const o2 = e2.get("axisFill");
    i && o2 && s2.children.moveValue(o2);
  }
  _prepareDataItem(e2, t2) {
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
    }), m(this._seriesAxisRanges, (e2) => {
      this._prepareDataItem(e2);
    });
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.get("fixAxisSize") ? this.ghostLabel.set("visible", true) : this.ghostLabel.set("visible", false), this.isDirty("start") || this.isDirty("end")) {
      this.chart._updateCursor();
      let e3 = this.get("start", 0), t2 = this.get("end", 1), i = this.get("maxDeviation", 0.5) * Math.min(1, t2 - e3);
      if (e3 < -i) {
        let s2 = e3 + i;
        e3 = -i, this.setRaw("start", e3), this.isDirty("end") && this.setRaw("end", t2 - s2);
      }
      if (t2 > 1 + i) {
        let s2 = t2 - 1 - i;
        t2 = 1 + i, this.setRaw("end", t2), this.isDirty("start") && this.setRaw("start", e3 - s2);
      }
    }
    const e2 = this.get("renderer");
    if (e2._start = this.get("start"), e2._end = this.get("end"), e2._inversed = e2.get("inversed", false), e2._axisLength = e2.axisLength() / (e2._end - e2._start), e2._updateLC(), this.isDirty("tooltip")) {
      const t2 = this.get("tooltip");
      if (t2) {
        const i = e2.get("themeTags");
        t2.addTag("axis"), t2.addTag(this.className.toLowerCase()), t2._applyThemes(), i && (t2.set("themeTags", zt(t2.get("themeTags"), i)), t2.label._applyThemes());
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
    return this._toggleDataItem(e2, false), super.hideDataItem(e2);
  }
  showDataItem(e2) {
    return this._toggleDataItem(e2, true), super.showDataItem(e2);
  }
  _toggleDataItem(e2, t2) {
    const i = e2.get("label");
    i && i.setPrivate("visible", t2);
    const s2 = e2.get("grid");
    s2 && s2.setPrivate("visible", t2);
    const a = e2.get("tick");
    a && a.setPrivate("visible", t2);
    const o2 = e2.get("axisFill");
    o2 && o2.setPrivate("visible", t2);
    const n2 = e2.get("bullet");
    if (n2) {
      const e3 = n2.get("sprite");
      e3 && e3.setPrivate("visible", t2);
    }
  }
  _createAssets(e2, t2) {
    const i = this.get("renderer");
    e2.get("label") || i.makeLabel(e2, t2), e2.get("grid") || i.makeGrid(e2, t2), e2.get("tick") || i.makeTick(e2, t2), e2.get("axisFill") || i.makeAxisFill(e2, t2), this._processBullet(e2);
  }
  _processBullet(e2) {
    let t2 = e2.get("bullet"), i = this.get("bullet");
    if (t2 || !i || e2.get("isRange") || (t2 = i(this._root, this, e2)), t2) {
      t2.axis = this;
      const i2 = t2.get("sprite");
      i2 && (i2._setDataItem(e2), e2.setRaw("bullet", t2), i2.parent || this.bulletsContainer.children.push(i2));
    }
  }
  _afterChanged() {
    super._afterChanged();
    const e2 = this.chart;
    e2 && (e2._updateChartLayout(), e2.axisHeadersContainer.markDirtySize()), this.get("renderer")._updatePositions();
  }
  disposeDataItem(e2) {
    super.disposeDataItem(e2);
    const t2 = this.get("renderer"), i = e2.get("label");
    i && (t2.labels.removeValue(i), i.dispose());
    const s2 = e2.get("tick");
    s2 && (t2.ticks.removeValue(s2), s2.dispose());
    const a = e2.get("grid");
    a && (t2.grid.removeValue(a), a.dispose());
    const o2 = e2.get("axisFill");
    o2 && (t2.axisFills.removeValue(o2), o2.dispose());
    const n2 = e2.get("bullet");
    n2 && n2.dispose();
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const e2 = this.ghostLabel;
    if (!e2.isHidden()) {
      const t3 = e2.localBounds(), i2 = t3.right - t3.left;
      let s2 = e2.get("text");
      m(this.dataItems, (e3) => {
        const t4 = e3.get("label");
        if (t4 && !t4.isHidden()) {
          const e4 = t4.localBounds();
          e4.right - e4.left > i2 && (s2 = t4.text._getText());
        }
      }), e2.set("text", s2);
    }
    let t2 = this.get("start", 0), i = this.get("end", 1);
    this.get("renderer").updateLabel(e2, t2 + 0.5 * (i - t2));
  }
  _handleCursorPosition(e2, t2) {
    e2 = this.get("renderer").toAxisPosition(e2), this._cursorPosition = e2, this._snapToSeries = t2, this.updateTooltip();
  }
  updateTooltip() {
    const e$1 = this._snapToSeries;
    let t2 = this._cursorPosition;
    const i = this.get("tooltip"), a = this.get("renderer");
    l(t2) && (m(this.series, (i2) => {
      if (i2.get("baseAxis") === this) {
        const s2 = this.getSeriesItem(i2, t2, this.get("tooltipLocation"));
        i2.setRaw("tooltipDataItem", s2), e$1 && -1 != e$1.indexOf(i2) ? (i2.updateLegendMarker(s2), i2.updateLegendValue(s2)) : i2.showDataItemTooltip(s2);
      }
    }), i && (a.updateTooltipBounds(i), this.get("snapTooltip") && (t2 = this.roundAxisPosition(t2, this.get("tooltipLocation", 0.5))), e(t2) ? i.hide(0) : (this.setPrivateRaw("tooltipPosition", t2), this._updateTooltipText(i, t2), a.positionTooltip(i, t2), t2 < this.get("start") || t2 > this.get("end") ? i.hide(0) : i.show(0))));
  }
  _updateTooltipText(e2, t2) {
    e2.label.set("text", this.getTooltipText(t2));
  }
  roundAxisPosition(e2, t2) {
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
  processSeriesDataItem(e2, t2) {
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = false, this._rangesDirty = false;
  }
  coordinateToPosition(e2) {
    const t2 = this.get("renderer");
    return t2.toAxisPosition(e2 / t2.axisLength());
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
  shouldGap(e2, t2, i, s2) {
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
    this._settings.themeTags = zt(this._settings.themeTags, ["axis"]), this.setPrivateRaw("name", "value"), this.addTag("value"), super._afterNew();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("syncWithAxis")) {
      this._prevSettings.syncWithAxis && this._syncDp && this._syncDp.dispose();
      let e2 = this.get("syncWithAxis");
      e2 && (this._syncDp = new H([e2.onPrivate("selectionMinFinal", () => {
        this._dirtySelectionExtremes = true;
      }), e2.onPrivate("selectionMaxFinal", () => {
        this._dirtySelectionExtremes = true;
      })]));
    }
    (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("min") || this.isDirty("max") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) && (this._getMinMax(), this.ghostLabel.set("text", ""), this._dirtyExtremes = false), this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", true) && (this._getSelectionMinMax(), this._dirtySelectionExtremes = false), this._groupData(), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges()), this._baseValue = this.baseValue();
  }
  _groupData() {
  }
  _formatText(e2) {
    const t2 = this.get("numberFormat"), i = this.getNumberFormatter();
    let s2 = "";
    return s2 = t2 ? i.format(e2, t2) : i.format(e2, void 0, this.getPrivate("stepDecimalPlaces")), s2;
  }
  _prepareAxisItems() {
    const e2 = this.getPrivate("min"), t2 = this.getPrivate("max");
    if (l(e2) && l(t2)) {
      const t3 = this.get("logarithmic"), i = this.getPrivate("step"), s2 = this.getPrivate("selectionMin"), a = this.getPrivate("selectionMax") + i;
      let o2 = s2 - i, r = 0, l2 = 1, h = e2;
      if (t3) {
        if (o2 = this._minLogAdjusted, o2 < s2)
          for (; o2 < s2; )
            o2 += i;
        h = o2, h <= 0 && (h = 1, i < 1 && (h = i)), l2 = Math.log(a - i) * Math.LOG10E - Math.log(h) * Math.LOG10E, l2 > 2 && (o2 = Math.pow(10, Math.log(h) * Math.LOG10E - 5));
      }
      let d = -1 / 0;
      for (; o2 < a; ) {
        let e3;
        this.dataItems.length < r + 1 ? (e3 = new g(this, void 0, {}), this._dataItems.push(e3), this.processDataItem(e3)) : e3 = this.dataItems[r], this._createAssets(e3, []), e3.isHidden() && e3.show(), e3.setRaw("value", o2);
        const s3 = e3.get("label");
        if (s3 && s3.set("text", this._formatText(o2)), this._prepareDataItem(e3), t3 && l2 > 2 ? o2 = Math.pow(10, Math.log(h) * Math.LOG10E + r - 5) : o2 += i, d == o2)
          break;
        let a2 = Math.pow(10, Math.floor(Math.log(Math.abs(i)) * Math.LOG10E));
        if (a2 < 1) {
          let e4 = Math.round(Math.abs(Math.log(Math.abs(a2)) * Math.LOG10E)) + 2;
          o2 = ae$1(o2, e4);
        }
        r++, d = o2;
      }
      for (let e3 = r; e3 < this.dataItems.length; e3++)
        this.dataItems[e3].hide();
      m(this.series, (e3) => {
        e3.inited && e3._markDirtyAxes();
      }), this._updateGhost();
    }
  }
  _prepareDataItem(e2, t2) {
    let i = this.get("renderer"), a = e2.get("value"), o2 = e2.get("endValue"), n2 = this.valueToPosition(a), r = n2, l$12 = this.valueToPosition(a + this.getPrivate("step"));
    l(o2) && (r = this.valueToPosition(o2), l$12 = r), e2.get("isRange") && null == o2 && (l$12 = n2), i.updateLabel(e2.get("label"), n2, r, t2);
    const h = e2.get("grid");
    if (i.updateGrid(h, n2, r), h && (a == this.get("baseValue", 0) ? (h.addTag("base"), h._applyThemes()) : h.hasTag("base") && (h.removeTag("base"), h._applyThemes())), i.updateTick(e2.get("tick"), n2, r, t2), i.updateFill(e2.get("axisFill"), n2, l$12), this._processBullet(e2), i.updateBullet(e2.get("bullet"), n2, r), !e2.get("isRange")) {
      const t3 = this.get("fillRule");
      t3 && t3(e2);
    }
  }
  _handleRangeChange() {
    let e2 = this.positionToValue(this.get("start", 0)), t2 = this.positionToValue(this.get("end", 1));
    const i = this.get("renderer").gridCount();
    let s2 = this._adjustMinMax(e2, t2, i, true), a = vt(s2.step);
    this.setPrivateRaw("stepDecimalPlaces", a), e2 = ae$1(e2, a), t2 = ae$1(t2, a), s2 = this._adjustMinMax(e2, t2, i, true);
    let o2 = s2.step;
    e2 = s2.min, t2 = s2.max, this.getPrivate("selectionMin") === e2 && this.getPrivate("selectionMax") === t2 && this.getPrivate("step") === o2 || (this.setPrivateRaw("selectionMin", e2), this.setPrivateRaw("selectionMax", t2), this.setPrivateRaw("step", o2));
  }
  positionToValue(e2) {
    const t2 = this.getPrivate("min"), i = this.getPrivate("max");
    return this.get("logarithmic") ? Math.pow(Math.E, (e2 * (Math.log(i) * Math.LOG10E - Math.log(t2) * Math.LOG10E) + Math.log(t2) * Math.LOG10E) / Math.LOG10E) : e2 * (i - t2) + t2;
  }
  valueToPosition(e2) {
    const t2 = this.getPrivate("min"), i = this.getPrivate("max");
    if (this.get("logarithmic")) {
      if (e2 <= 0) {
        let t3 = this.get("treatZeroAs");
        l(t3) && (e2 = t3);
      }
      return (Math.log(e2) * Math.LOG10E - Math.log(t2) * Math.LOG10E) / (Math.log(i) * Math.LOG10E - Math.log(t2) * Math.LOG10E);
    }
    return (e2 - t2) / (i - t2);
  }
  valueToFinalPosition(e2) {
    const t2 = this.getPrivate("minFinal"), i = this.getPrivate("maxFinal");
    if (this.get("logarithmic")) {
      if (e2 <= 0) {
        let t3 = this.get("treatZeroAs");
        l(t3) && (e2 = t3);
      }
      return (Math.log(e2) * Math.LOG10E - Math.log(t2) * Math.LOG10E) / (Math.log(i) * Math.LOG10E - Math.log(t2) * Math.LOG10E);
    }
    return (e2 - t2) / (i - t2);
  }
  getX(e2, t2, i) {
    e2 = i + (e2 - i) * t2;
    const s2 = this.valueToPosition(e2);
    return this._settings.renderer.positionToCoordinate(s2);
  }
  getY(e2, t2, i) {
    e2 = i + (e2 - i) * t2;
    const s2 = this.valueToPosition(e2);
    return this._settings.renderer.positionToCoordinate(s2);
  }
  getDataItemCoordinateX(e2, t2, i, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(e2, t2, i, s2));
  }
  getDataItemPositionX(e2, t2, i, s2) {
    let a = e2.get(t2);
    if (e2.get("stackToItemX")) {
      a = a * s2 + e2.component.getStackedXValueWorking(e2, t2);
    } else
      a = this._baseValue + (a - this._baseValue) * s2;
    return this.valueToPosition(a);
  }
  getDataItemCoordinateY(e2, t2, i, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(e2, t2, i, s2));
  }
  getDataItemPositionY(e2, t2, i, s2) {
    let a = e2.get(t2);
    if (e2.get("stackToItemY")) {
      a = a * s2 + e2.component.getStackedYValueWorking(e2, t2);
    } else
      a = this._baseValue + (a - this._baseValue) * s2;
    return this.valueToPosition(a);
  }
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  baseValue() {
    const e2 = Math.min(this.getPrivate("minFinal", -1 / 0), this.getPrivate("selectionMin", -1 / 0)), t2 = Math.max(this.getPrivate("maxFinal", 1 / 0), this.getPrivate("selectionMax", 1 / 0));
    let i = this.get("baseValue", 0);
    return i < e2 && (i = e2), i > t2 && (i = t2), i;
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
      let e$1 = this.series[0];
      if (e$1) {
        let t2 = e$1.startIndex();
        if (e$1.dataItems.length > 0) {
          t2 > 0 && t2--;
          let i, s2, a = e$1.endIndex();
          a < e$1.dataItems.length && a++, e$1.get("yAxis") == this ? (i = "valueY", s2 = "vcy") : e$1.get("xAxis") == this && (i = "valueX", s2 = "vcx");
          let o2 = i + "Working";
          if (i)
            for (let e$12 = t2; e$12 < a; e$12++) {
              let t3 = 0, a2 = 0;
              m(this.series, (i2) => {
                if (!i2.get("excludeFromTotal")) {
                  let n2 = i2.dataItems[e$12];
                  if (n2) {
                    let e$13 = n2.get(o2) * i2.get(s2);
                    e(e$13) || (t3 += e$13, a2 += Math.abs(e$13));
                  }
                }
              }), m(this.series, (n2) => {
                if (!n2.get("excludeFromTotal")) {
                  let r = n2.dataItems[e$12];
                  if (r) {
                    let e$13 = r.get(o2) * n2.get(s2);
                    e(e$13) || (r.set(i + "Total", a2), r.set(i + "Sum", t3), r.set(i + "TotalPercent", e$13 / a2 * 100));
                  }
                }
              });
            }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const e2 = this.getPrivate("minFinal"), t2 = this.getPrivate("maxFinal"), i = this.get("min"), a = this.get("max");
    let o2 = this.get("extraMin", 0), r = this.get("extraMax", 0);
    this.get("logarithmic") && (null == this.get("extraMin") && (o2 = 0.1), null == this.get("extraMax") && (r = 0.2));
    const l$12 = this.get("renderer").gridCount(), h = this.get("strictMinMaxSelection"), d = this.get("strictMinMax");
    if (l(e2) && l(t2)) {
      let c = t2, u2 = e2;
      if (m(this.series, (e3) => {
        if (!e3.get("ignoreMinMax")) {
          let t3, i2;
          const a2 = e3.getPrivate("outOfSelection");
          e3.get("xAxis") === this ? a2 || (t3 = e3.getPrivate("selectionMinX", e3.getPrivate("minX")), i2 = e3.getPrivate("selectionMaxX", e3.getPrivate("maxX"))) : e3.get("yAxis") === this && (a2 || (t3 = e3.getPrivate("selectionMinY", e3.getPrivate("minY")), i2 = e3.getPrivate("selectionMaxY", e3.getPrivate("maxY")))), e3.isHidden() || e3.isShowing() || (l(t3) && (c = Math.min(c, t3)), l(i2) && (u2 = Math.max(u2, i2)));
        }
      }), this.axisRanges.each((e3) => {
        if (e3.get("affectsMinMax")) {
          let t3 = e3.get("value");
          null != t3 && (c = Math.min(c, t3), u2 = Math.max(u2, t3)), t3 = e3.get("endValue"), null != t3 && (c = Math.min(c, t3), u2 = Math.max(u2, t3));
        }
      }), c > u2 && ([c, u2] = [u2, c]), l(i) ? c = d ? i : e2 : d && l(this._minReal) && (c = this._minReal), l(a) ? u2 = d ? a : t2 : d && l(this._maxReal) && (u2 = this._maxReal), c === u2) {
        c -= this._deltaMinMax, u2 += this._deltaMinMax;
        let e3 = this._adjustMinMax(c, u2, l$12, d);
        c = e3.min, u2 = e3.max;
      }
      let g2 = c, p = u2;
      c -= (u2 - c) * o2, u2 += (u2 - c) * r;
      let m$1 = this._adjustMinMax(c, u2, l$12);
      c = m$1.min, u2 = m$1.max, c = he$1(c, e2, t2), u2 = he$1(u2, e2, t2), m$1 = this._adjustMinMax(c, u2, l$12, true), d || (c = m$1.min, u2 = m$1.max);
      const _2 = this.get("syncWithAxis");
      _2 && (m$1 = this._syncAxes(c, u2, m$1.step, _2.getPrivate("selectionMinFinal", _2.getPrivate("minFinal", 0)), _2.getPrivate("selectionMaxFinal", _2.getPrivate("maxFinal", 1)), _2.getPrivate("selectionStepFinal", _2.getPrivate("step", 1))), c = m$1.min, u2 = m$1.max), d && (l(i) && (c = Math.max(c, i)), l(a) && (u2 = Math.min(u2, a))), h && (c = g2 - (u2 - c) * o2, u2 = p + (u2 - c) * r), this.get("logarithmic") && (c <= 0 && (c = g2 * (1 - Math.min(o2, 0.99))), c < e2 && (c = e2), u2 > t2 && (u2 = t2));
      let x2 = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2), f = ae$1(this.valueToFinalPosition(c), x2), v2 = ae$1(this.valueToFinalPosition(u2), x2);
      this.setPrivateRaw("selectionMinFinal", c), this.setPrivateRaw("selectionMaxFinal", u2), this.setPrivateRaw("selectionStepFinal", m$1.step), this.zoom(f, v2);
    }
  }
  _getMinMax() {
    let e2 = this.get("min"), t2 = this.get("max"), i = 1 / 0, a = -1 / 0, o2 = this.get("extraMin", 0), r = this.get("extraMax", 0);
    this.get("logarithmic") && (null == this.get("extraMin") && (o2 = 0.1), null == this.get("extraMax") && (r = 0.2));
    let l$12 = 1 / 0;
    if (m(this.series, (e3) => {
      if (!e3.get("ignoreMinMax")) {
        let t3, o3;
        if (e3.get("xAxis") === this ? (t3 = e3.getPrivate("minX"), o3 = e3.getPrivate("maxX")) : e3.get("yAxis") === this && (t3 = e3.getPrivate("minY"), o3 = e3.getPrivate("maxY")), l(t3) && l(o3)) {
          i = Math.min(i, t3), a = Math.max(a, o3);
          let e4 = o3 - t3;
          e4 <= 0 && (e4 = Math.abs(o3 / 100)), e4 < l$12 && (l$12 = e4);
        }
      }
    }), this.axisRanges.each((e3) => {
      if (e3.get("affectsMinMax")) {
        let t3 = e3.get("value");
        null != t3 && (i = Math.min(i, t3), a = Math.max(a, t3)), t3 = e3.get("endValue"), null != t3 && (i = Math.min(i, t3), a = Math.max(a, t3));
      }
    }), this.get("logarithmic")) {
      let e3 = this.get("treatZeroAs");
      l(e3) && i <= 0 && (i = e3);
    }
    if (0 === i && 0 === a && (a = 0.9, i = -0.9), l(e2) && (i = e2), l(t2) && (a = t2), i === 1 / 0 || a === -1 / 0)
      return this.setPrivate("minFinal", void 0), void this.setPrivate("maxFinal", void 0);
    const h = i, d = a;
    let c = this.adapters.fold("min", i), u2 = this.adapters.fold("max", a);
    l(c) && (i = c), l(u2) && (a = u2), i = this._fixMin(i), a = this._fixMax(a), a - i <= 1 / Math.pow(10, 15) && (a - i != 0 ? this._deltaMinMax = (a - i) / 2 : this._getDelta(a), i -= this._deltaMinMax, a += this._deltaMinMax), i -= (a - i) * o2, a += (a - i) * r, this.get("logarithmic") && (i < 0 && h >= 0 && (i = 0), a > 0 && d <= 0 && (a = 0)), this._minReal = i, this._maxReal = a;
    let g2 = this.get("strictMinMax"), p = this.get("strictMinMaxSelection", false);
    p && (g2 = p);
    let m$1 = g2;
    l(t2) && (m$1 = true);
    let _2 = this.get("renderer").gridCount(), x2 = this._adjustMinMax(i, a, _2, m$1);
    i = x2.min, a = x2.max, x2 = this._adjustMinMax(i, a, _2, true), i = x2.min, a = x2.max, g2 && (i = l(e2) ? e2 : this._minReal, a = l(t2) ? t2 : this._maxReal, a - i <= 1e-8 && (i -= this._deltaMinMax, a += this._deltaMinMax), i -= (a - i) * o2, a += (a - i) * r), c = this.adapters.fold("min", i), u2 = this.adapters.fold("max", a), l(c) && (i = c), l(u2) && (a = u2), l$12 == 1 / 0 && (l$12 = a - i);
    let f = Math.round(Math.abs(Math.log(Math.abs(a - i)) * Math.LOG10E)) + 5;
    i = ae$1(i, f), a = ae$1(a, f);
    const v2 = this.get("syncWithAxis");
    if (v2 && (x2 = this._syncAxes(i, a, x2.step, v2.getPrivate("minFinal", v2.getPrivate("min", 0)), v2.getPrivate("maxFinal", v2.getPrivate("max", 1)), v2.getPrivate("step", 1)), i = x2.min, a = x2.max), this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((a - i) / l$12 * this.get("maxZoomFactor", 100)))), this._fixZoomFactor(), this.get("logarithmic") && (this._minLogAdjusted = i, i = this._minReal, a = this._maxReal, i <= 0 && (i = h * (1 - Math.min(o2, 0.99)))), l(i) && l(a) && (this.getPrivate("minFinal") !== i || this.getPrivate("maxFinal") !== a)) {
      this.setPrivate("minFinal", i), this.setPrivate("maxFinal", a), this._saveMinMax(i, a);
      const e3 = this.get("interpolationDuration", 0), t3 = this.get("interpolationEasing");
      this.animatePrivate({ key: "min", to: i, duration: e3, easing: t3 }), this.animatePrivate({ key: "max", to: a, duration: e3, easing: t3 });
    }
  }
  _fixZoomFactor() {
  }
  _getDelta(e2) {
    let t2 = Math.log(Math.abs(e2)) * Math.LOG10E, i = Math.pow(10, Math.floor(t2));
    i /= 10, this._deltaMinMax = i;
  }
  _saveMinMax(e2, t2) {
  }
  _adjustMinMax(e2, t2, i, a) {
    i <= 1 && (i = 1), i = Math.round(i);
    let o2 = e2, r = t2, l$12 = t2 - e2;
    0 === l$12 && (l$12 = Math.abs(t2));
    let h = Math.log(Math.abs(l$12)) * Math.LOG10E, d = Math.pow(10, Math.floor(h));
    d /= 10;
    let c = d;
    a && (c = 0), a ? (e2 = Math.floor(e2 / d) * d, t2 = Math.ceil(t2 / d) * d) : (e2 = Math.ceil(e2 / d) * d - c, t2 = Math.floor(t2 / d) * d + c), e2 < 0 && o2 >= 0 && (e2 = 0), t2 > 0 && r <= 0 && (t2 = 0), h = Math.log(Math.abs(l$12)) * Math.LOG10E, d = Math.pow(10, Math.floor(h)), d /= 100;
    let u2 = Math.ceil(l$12 / i / d) * d, g2 = Math.pow(10, Math.floor(Math.log(Math.abs(u2)) * Math.LOG10E)), p = Math.ceil(u2 / g2);
    p > 5 ? p = 10 : p <= 5 && p > 2 && (p = 5), u2 = Math.ceil(u2 / (g2 * p)) * g2 * p;
    let m2 = this.get("maxPrecision");
    if (l(m2)) {
      let e3 = oe$1(u2, m2);
      m2 < Number.MAX_VALUE && u2 !== e3 && (u2 = e3);
    }
    let _2 = 0;
    g2 < 1 && (_2 = Math.round(Math.abs(Math.log(Math.abs(g2)) * Math.LOG10E)) + 1, u2 = ae$1(u2, _2));
    let b, x2 = Math.floor(e2 / u2);
    return e2 = ae$1(u2 * x2, _2), b = a ? Math.floor(t2 / u2) : Math.ceil(t2 / u2), b === x2 && b++, (t2 = ae$1(u2 * b, _2)) < r && (t2 += u2), e2 > o2 && (e2 -= u2), u2 = this.fixSmallStep(u2), { min: e2, max: t2, step: u2 };
  }
  getTooltipText(e2, t2) {
    const i = this.get("tooltipNumberFormat", this.get("numberFormat")), s2 = this.getNumberFormatter(), a = this.get("extraTooltipPrecision", 0), o2 = this.getPrivate("stepDecimalPlaces", 0) + a, r = ae$1(this.positionToValue(e2), o2);
    return i ? s2.format(r, i) : s2.format(r, void 0, o2);
  }
  getSeriesItem(e2, t2) {
    let i, s2, a = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), o2 = this.positionToValue(t2);
    if (m(e2.dataItems, (e3, t3) => {
      const n2 = Math.abs(e3.get(a) - o2);
      (void 0 === i || n2 < s2) && (i = t3, s2 = n2);
    }), null != i)
      return e2.dataItems[i];
  }
  zoomToValues(e2, t2, i) {
    const s2 = this.getPrivate("minFinal", 0), a = this.getPrivate("maxFinal", 0);
    null != this.getPrivate("min") && null != this.getPrivate("max") && this.zoom((e2 - s2) / (a - s2), (t2 - s2) / (a - s2), i);
  }
  _syncAxes(e2, t2, i, a, o2, n2) {
    if (this.get("syncWithAxis")) {
      let r = Math.round(o2 - a) / n2, l$12 = Math.round((t2 - e2) / i), h = this.get("renderer").gridCount();
      if (l(r) && l(l$12)) {
        let s2 = false, a2 = 0, o3 = 0.01 * (t2 - e2), n3 = e2, l2 = t2, d = i;
        for (; 1 != s2; )
          if (s2 = this._checkSync(n3, l2, d, r), a2++, a2 > 500 && (s2 = true), s2)
            e2 = n3, t2 = l2, i = d;
          else {
            a2 / 3 == Math.round(a2 / 3) ? (n3 = e2 - o3 * a2, e2 >= 0 && n3 < 0 && (n3 = 0)) : (l2 = t2 + o3 * a2, l2 <= 0 && l2 > 0 && (l2 = 0));
            let i2 = this._adjustMinMax(n3, l2, h, true);
            n3 = i2.min, l2 = i2.max, d = i2.step;
          }
      }
    }
    return { min: e2, max: t2, step: i };
  }
  _checkSync(e2, t2, i, s2) {
    let a = (t2 - e2) / i;
    for (let o2 = 1; o2 < s2; o2++)
      if (ae$1(a / o2, 1) == s2 || a * o2 == s2)
        return true;
    return false;
  }
  getCellWidthPosition() {
    let e2 = this.getPrivate("selectionMax", this.getPrivate("max")), t2 = this.getPrivate("selectionMin", this.getPrivate("min"));
    return l(e2) && l(t2) ? this.getPrivate("step", 1) / (e2 - t2) : 0.05;
  }
}
Object.defineProperty(ue, "className", { enumerable: true, configurable: true, writable: true, value: "ValueAxis" }), Object.defineProperty(ue, "classNames", { enumerable: true, configurable: true, writable: true, value: ce.classNames.concat([ue.className]) });
class ge extends ei {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: true, configurable: true, writable: true, value: [] });
  }
}
Object.defineProperty(ge, "className", { enumerable: true, configurable: true, writable: true, value: "AxisLabel" }), Object.defineProperty(ge, "classNames", { enumerable: true, configurable: true, writable: true, value: ei.classNames.concat([ge.className]) });
class pe extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: true, configurable: true, writable: true, value: [] });
  }
}
Object.defineProperty(pe, "className", { enumerable: true, configurable: true, writable: true, value: "AxisTick" }), Object.defineProperty(pe, "classNames", { enumerable: true, configurable: true, writable: true, value: B.classNames.concat([pe.className]) });
class me extends We {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_axisLength", { enumerable: true, configurable: true, writable: true, value: 100 }), Object.defineProperty(this, "_start", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_end", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_inversed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_minSize", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_lc", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_ls", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_thumbDownPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downStart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downEnd", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ticks", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => pe._new(this._root, { themeTags: zt(this.ticks.template.get("themeTags", []), this.get("themeTags", [])) }, [this.ticks.template])) }), Object.defineProperty(this, "grid", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => ne._new(this._root, { themeTags: zt(this.grid.template.get("themeTags", []), this.get("themeTags", [])) }, [this.grid.template])) }), Object.defineProperty(this, "axisFills", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => We._new(this._root, { themeTags: zt(this.axisFills.template.get("themeTags", ["axis", "fill"]), this.get("themeTags", [])) }, [this.axisFills.template])) }), Object.defineProperty(this, "labels", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => ge._new(this._root, { themeTags: zt(this.labels.template.get("themeTags", []), this.get("themeTags", [])) }, [this.labels.template])) }), Object.defineProperty(this, "axis", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  makeTick(e2, t2) {
    const i = this.ticks.make();
    return i._setDataItem(e2), e2.setRaw("tick", i), i.set("themeTags", zt(i.get("themeTags"), t2)), this.axis.labelsContainer.children.push(i), this.ticks.push(i), i;
  }
  makeGrid(e2, t2) {
    const i = this.grid.make();
    return i._setDataItem(e2), e2.setRaw("grid", i), i.set("themeTags", zt(i.get("themeTags"), t2)), this.axis.gridContainer.children.push(i), this.grid.push(i), i;
  }
  makeAxisFill(e2, t2) {
    const i = this.axisFills.make();
    return i._setDataItem(e2), i.set("themeTags", zt(i.get("themeTags"), t2)), this.axis.gridContainer.children.push(i), e2.setRaw("axisFill", i), this.axisFills.push(i), i;
  }
  makeLabel(e2, t2) {
    const i = this.labels.make();
    return i.set("themeTags", zt(i.get("themeTags"), t2)), this.axis.labelsContainer.children.moveValue(i, 0), i._setDataItem(e2), e2.setRaw("label", i), this.labels.push(i), i;
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
  _changed() {
    if (super._changed(), this.isDirty("pan")) {
      const e2 = this.thumb;
      if (e2) {
        const t2 = this.axis.labelsContainer, i = this.get("pan");
        "zoom" == i ? t2.children.push(e2) : "none" == i && t2.children.removeValue(e2);
      }
    }
  }
  _handleThumbDown(e2) {
    this._thumbDownPoint = this.toLocal(e2.point);
    const t2 = this.axis;
    this._downStart = t2.get("start"), this._downEnd = t2.get("end");
  }
  _handleThumbUp(e2) {
    this._thumbDownPoint = void 0;
  }
  _handleThumbMove(e2) {
    const t2 = this._thumbDownPoint;
    if (t2) {
      const i = this.toLocal(e2.point), s2 = this._downStart, a = this._downEnd, o2 = this._getPan(i, t2) * Math.min(1, a - s2) / 2;
      this.axis.zoom(s2 - o2, a + o2, 0);
    }
  }
  _getPan(e2, t2) {
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
    const t2 = this._start || 0, i = this._end || 1;
    return e2 *= i - t2, e2 = this.get("inversed") ? i - e2 : t2 + e2;
  }
  toGlobalPosition(e2) {
    const t2 = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? e2 = i - e2 : e2 -= t2, e2 /= i - t2;
  }
  fixPosition(e2) {
    return this.get("inversed") ? 1 - e2 : e2;
  }
  _updateLC() {
  }
  toggleVisibility(e2, t2, i, s2) {
    let a = this.axis;
    const o2 = a.get("start", 0), n2 = a.get("end", 1);
    t2 < o2 + (n2 - o2) * (i - 1e-4) || t2 > o2 + (n2 - o2) * (s2 + 1e-4) ? e2.setPrivate("visible", false) : e2.setPrivate("visible", true);
  }
  _positionTooltip(e2, t2) {
    const i = this.chart;
    i && (i.inPlot(t2) ? e2.set("pointTo", this._display.toGlobal(t2)) : e2.hide());
  }
  processAxis() {
  }
}
Object.defineProperty(me, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRenderer" }), Object.defineProperty(me, "classNames", { enumerable: true, configurable: true, writable: true, value: We.classNames.concat([me.className]) });
class _e extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: Ve.new(this._root, { width: Y, isMeasured: false, themeTags: ["axis", "x", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = zt(this._settings.themeTags, ["renderer", "x"]), super._afterNew(), this.setPrivateRaw("letter", "X");
    const e2 = this.grid.template;
    e2.set("height", Y), e2.set("width", 0), e2.set("draw", (e3, t2) => {
      e3.moveTo(0, 0), e3.lineTo(0, t2.height());
    }), this.set("draw", (e3, t2) => {
      e3.moveTo(0, 0), e3.lineTo(t2.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const e2 = this.axis;
    e2.ghostLabel.setPrivate("visible", !this.get("inside")), e2.ghostLabel.set("x", -1e3);
    const t2 = "opposite", i = "inside";
    if (this.isDirty(t2) || this.isDirty(i)) {
      const s2 = this.chart, a = e2.children;
      if (this.get(i) ? e2.addTag(i) : e2.removeTag(i), s2) {
        if (this.get(t2)) {
          const i2 = s2.topAxesContainer.children;
          -1 == i2.indexOf(e2) && i2.insertIndex(0, e2), e2.addTag(t2), a.moveValue(this);
        } else {
          const i2 = s2.bottomAxesContainer.children;
          -1 == i2.indexOf(e2) && i2.moveValue(e2), e2.removeTag(t2), a.moveValue(this, 0);
        }
        e2.ghostLabel._applyThemes(), this.labels.each((e3) => {
          e3._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      e2.markDirtySize();
    }
    this.thumb.setPrivate("height", e2.labelsContainer.height());
  }
  _getPan(e2, t2) {
    return (t2.x - e2.x) / this.width();
  }
  toAxisPosition(e2) {
    const t2 = this._start || 0, i = this._end || 1;
    return e2 = (e2 -= this._ls) * (i - t2) / this._lc, e2 = this.get("inversed") ? i - e2 : t2 + e2;
  }
  toGlobalPosition(e2) {
    const t2 = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? e2 = i - e2 : e2 -= t2, e2 = e2 / (i - t2) * this._lc, e2 += this._ls;
  }
  _updateLC() {
    const e2 = this.axis, t2 = e2.parent;
    if (t2) {
      const i = t2.innerWidth();
      this._lc = this.axisLength() / i, this._ls = (e2.x() - t2.get("paddingLeft", 0)) / i;
    }
  }
  _updatePositions() {
    const e2 = this.axis, t2 = e2.x() - bt(e2.get("centerX", 0), e2.width()) - e2.parent.get("paddingLeft", 0);
    e2.gridContainer.set("x", t2), e2.topGridContainer.set("x", t2), e2.bulletsContainer.set("y", this.y());
    const i = e2.chart;
    if (i) {
      const t3 = i.plotContainer, s2 = e2.axisHeader;
      let a = e2.get("marginLeft", 0), o2 = e2.x() - a;
      const n2 = e2.parent;
      n2 && (o2 -= n2.get("paddingLeft", 0)), s2.children.length > 0 ? (a = e2.axisHeader.width(), e2.set("marginLeft", a + 1)) : s2.set("width", a), s2.setAll({ x: o2, y: -1, height: t3.height() + 2 });
    }
  }
  processAxis() {
    super.processAxis();
    const e2 = this.axis;
    e2.set("width", Y);
    const i = this._root.verticalLayout;
    e2.set("layout", i), e2.labelsContainer.set("width", Y), e2.axisHeader.setAll({ layout: i });
  }
  axisLength() {
    return this.axis.width();
  }
  positionToPoint(e2) {
    return { x: this.positionToCoordinate(e2), y: 0 };
  }
  updateTick(e2, i, a, o2) {
    if (e2) {
      l(i) || (i = 0);
      let n2 = 0.5;
      n2 = l(o2) && o2 > 1 ? e2.get("multiLocation", n2) : e2.get("location", n2), l(a) && a != i && (i += (a - i) * n2), e2.set("x", this.positionToCoordinate(i));
      let r = e2.get("length", 0);
      const l$12 = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? (e2.set("y", Y), l$12 || (r *= -1)) : (e2.set("y", 0), l$12 && (r *= -1)), e2.set("draw", (e3) => {
        e3.moveTo(0, 0), e3.lineTo(0, r);
      }), this.toggleVisibility(e2, i, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateLabel(e2, i, a, o2) {
    if (e2) {
      let n2 = 0.5;
      n2 = l(o2) && o2 > 1 ? e2.get("multiLocation", n2) : e2.get("location", n2), l(i) || (i = 0);
      const r = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? r ? (e2.set("position", "absolute"), e2.set("y", 0)) : (e2.set("position", "relative"), e2.set("y", Y)) : r ? (e2.set("y", 0), e2.set("position", "absolute")) : (e2.set("y", void 0), e2.set("position", "relative")), l(a) && a != i && (i += (a - i) * n2), e2.set("x", this.positionToCoordinate(i)), this.toggleVisibility(e2, i, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateGrid(e2, t2, i) {
    if (e2) {
      l(t2) || (t2 = 0);
      let a = e2.get("location", 0.5);
      l(i) && i != t2 && (t2 += (i - t2) * a), e2.set("x", this.positionToCoordinate(t2)), this.toggleVisibility(e2, t2, 0, 1);
    }
  }
  updateBullet(e2, t2, i) {
    if (e2) {
      const a = e2.get("sprite");
      if (a) {
        l(t2) || (t2 = 0);
        let o2 = e2.get("location", 0.5);
        l(i) && i != t2 && (t2 += (i - t2) * o2);
        let n2 = this.axis.roundAxisPosition(t2, o2), r = this.axis._bullets[n2], l$12 = -1;
        if (this.get("opposite") && (l$12 = 1), e2.get("stacked"))
          if (r) {
            let e3 = r.get("sprite");
            e3 && a.set("y", e3.y() + e3.height() * l$12);
          } else
            a.set("y", 0);
        this.axis._bullets[n2] = e2, a.set("x", this.positionToCoordinate(t2)), this.toggleVisibility(a, t2, 0, 1);
      }
    }
  }
  updateFill(e2, t2, i) {
    if (e2) {
      l(t2) || (t2 = 0), l(i) || (i = 1);
      let a = this.positionToCoordinate(t2), o2 = this.positionToCoordinate(i);
      this.fillDrawMethod(e2, a, o2);
    }
  }
  fillDrawMethod(e2, t2, i) {
    e2.set("draw", (e3) => {
      const s2 = this.axis.gridContainer.height(), a = this.width();
      i < t2 && ([i, t2] = [t2, i]), t2 > a || i < 0 || (e3.moveTo(t2, 0), e3.lineTo(i, 0), e3.lineTo(i, s2), e3.lineTo(t2, s2), e3.lineTo(t2, 0));
    });
  }
  positionTooltip(e2, t2) {
    this._positionTooltip(e2, { x: this.positionToCoordinate(t2), y: 0 });
  }
  updateTooltipBounds(e2) {
    const t2 = this.get("inside"), i = 1e5;
    let s2 = this._display.toGlobal({ x: 0, y: 0 }), a = s2.x, o2 = 0, n2 = this.axisLength(), r = i, l2 = "up";
    this.get("opposite") ? t2 ? (l2 = "up", o2 = s2.y, r = i) : (l2 = "down", o2 = s2.y - i, r = i) : t2 ? (l2 = "down", o2 = s2.y - i, r = i) : (l2 = "up", o2 = s2.y, r = i);
    const h = { left: a, right: a + n2, top: o2, bottom: o2 + r }, d = e2.get("bounds");
    Gt(h, d) || (e2.set("bounds", h), e2.set("pointerOrientation", l2));
  }
}
Object.defineProperty(_e, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRendererX" }), Object.defineProperty(_e, "classNames", { enumerable: true, configurable: true, writable: true, value: me.classNames.concat([_e.className]) });
class be extends me {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_downY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: true, configurable: true, writable: true, value: Ve.new(this._root, { height: Y, isMeasured: false, themeTags: ["axis", "y", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = zt(this._settings.themeTags, ["renderer", "y"]), this._settings.opposite && this._settings.themeTags.push("opposite"), super._afterNew(), this.setPrivateRaw("letter", "Y");
    const e2 = this.grid.template;
    e2.set("width", Y), e2.set("height", 0), e2.set("draw", (e3, t2) => {
      e3.moveTo(0, 0), e3.lineTo(t2.width(), 0);
    }), this.set("draw", (e3, t2) => {
      e3.moveTo(0, 0), e3.lineTo(0, t2.height());
    });
  }
  _getPan(e2, t2) {
    return (e2.y - t2.y) / this.height();
  }
  _changed() {
    super._changed();
    const e2 = this.axis;
    e2.ghostLabel.setPrivate("visible", !this.get("inside")), e2.ghostLabel.set("y", -1e3);
    const t2 = this.thumb, i = "opposite", s2 = "inside", a = this.chart;
    if (this.isDirty(i) || this.isDirty(s2)) {
      const t3 = e2.children;
      if (this.get(s2) ? e2.addTag(s2) : e2.removeTag(s2), a) {
        if (this.get(i)) {
          const s3 = a.rightAxesContainer.children;
          -1 == s3.indexOf(e2) && s3.moveValue(e2, 0), e2.addTag(i), t3.moveValue(this, 0);
        } else {
          const s3 = a.leftAxesContainer.children;
          -1 == s3.indexOf(e2) && s3.moveValue(e2), e2.removeTag(i), t3.moveValue(this);
        }
        e2.ghostLabel._applyThemes(), this.labels.each((e3) => {
          e3._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      e2.markDirtySize();
    }
    const o2 = e2.labelsContainer.width();
    a && (this.get(i) ? t2.set("centerX", 0) : t2.set("centerX", o2)), t2.setPrivate("width", o2);
  }
  processAxis() {
    super.processAxis();
    const e2 = this.axis;
    null == e2.get("height") && e2.set("height", Y);
    const i = this._root.horizontalLayout;
    e2.set("layout", i), e2.labelsContainer.set("height", Y), e2.axisHeader.set("layout", i);
  }
  _updatePositions() {
    const e2 = this.axis, t2 = e2.y() - bt(e2.get("centerY", 0), e2.height());
    e2.gridContainer.set("y", t2), e2.topGridContainer.set("y", t2), e2.bulletsContainer.set("x", this.x());
    const i = e2.chart;
    if (i) {
      const t3 = i.plotContainer, s2 = e2.axisHeader;
      let a = e2.get("marginTop", 0);
      s2.children.length > 0 ? (a = e2.axisHeader.height(), e2.set("marginTop", a + 1)) : s2.set("height", a), s2.setAll({ y: e2.y() - a, x: -1, width: t3.width() + 2 });
    }
  }
  axisLength() {
    return this.axis.innerHeight();
  }
  positionToPoint(e2) {
    return { x: 0, y: this.positionToCoordinate(e2) };
  }
  updateLabel(e2, t2, i, a) {
    if (e2) {
      l(t2) || (t2 = 0);
      let o2 = 0.5;
      o2 = l(a) && a > 1 ? e2.get("multiLocation", o2) : e2.get("location", o2);
      const n2 = this.get("opposite"), r = e2.get("inside", this.get("inside", false));
      n2 ? (e2.set("x", 0), r ? e2.set("position", "absolute") : e2.set("position", "relative")) : r ? (e2.set("x", 0), e2.set("position", "absolute")) : (e2.set("x", void 0), e2.set("position", "relative")), l(i) && i != t2 && (t2 += (i - t2) * o2), e2.set("y", this.positionToCoordinate(t2)), this.toggleVisibility(e2, t2, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateGrid(e2, t2, i) {
    if (e2) {
      l(t2) || (t2 = 0);
      let a = e2.get("location", 0.5);
      l(i) && i != t2 && (t2 += (i - t2) * a), e2.set("y", this.positionToCoordinate(t2)), this.toggleVisibility(e2, t2, 0, 1);
    }
  }
  updateTick(e2, t2, i, a) {
    if (e2) {
      l(t2) || (t2 = 0);
      let o2 = 0.5;
      o2 = l(a) && a > 1 ? e2.get("multiLocation", o2) : e2.get("location", o2), l(i) && i != t2 && (t2 += (i - t2) * o2), e2.set("y", this.positionToCoordinate(t2));
      let n2 = e2.get("length", 0);
      const r = e2.get("inside", this.get("inside", false));
      this.get("opposite") ? (e2.set("x", 0), r && (n2 *= -1)) : r || (n2 *= -1), e2.set("draw", (e3) => {
        e3.moveTo(0, 0), e3.lineTo(n2, 0);
      }), this.toggleVisibility(e2, t2, e2.get("minPosition", 0), e2.get("maxPosition", 1));
    }
  }
  updateBullet(e2, t2, i) {
    if (e2) {
      const a = e2.get("sprite");
      if (a) {
        l(t2) || (t2 = 0);
        let o2 = e2.get("location", 0.5);
        l(i) && i != t2 && (t2 += (i - t2) * o2);
        let n2 = this.axis.roundAxisPosition(t2, o2), r = this.axis._bullets[n2], l$12 = 1;
        if (this.get("opposite") && (l$12 = -1), e2.get("stacked"))
          if (r) {
            let e3 = r.get("sprite");
            e3 && a.set("x", e3.x() + e3.width() * l$12);
          } else
            a.set("x", 0);
        this.axis._bullets[n2] = e2, a.set("y", this.positionToCoordinate(t2)), this.toggleVisibility(a, t2, 0, 1);
      }
    }
  }
  updateFill(e2, t2, i) {
    if (e2) {
      l(t2) || (t2 = 0), l(i) || (i = 1);
      let a = this.positionToCoordinate(t2), o2 = this.positionToCoordinate(i);
      this.fillDrawMethod(e2, a, o2);
    }
  }
  fillDrawMethod(e2, t2, i) {
    e2.set("draw", (e3) => {
      const s2 = this.axis.gridContainer.width(), a = this.height();
      i < t2 && ([i, t2] = [t2, i]), t2 > a || i < 0 || (e3.moveTo(0, t2), e3.lineTo(s2, t2), e3.lineTo(s2, i), e3.lineTo(0, i), e3.lineTo(0, t2));
    });
  }
  positionToCoordinate(e2) {
    return this._inversed ? (e2 - this._start) * this._axisLength : (this._end - e2) * this._axisLength;
  }
  positionTooltip(e2, t2) {
    this._positionTooltip(e2, { x: 0, y: this.positionToCoordinate(t2) });
  }
  updateTooltipBounds(e2) {
    const t2 = this.get("inside"), i = 1e5;
    let s2 = this._display.toGlobal({ x: 0, y: 0 }), a = s2.y, o2 = 0, n2 = this.axisLength(), r = i, l2 = "right";
    this.get("opposite") ? t2 ? (l2 = "right", o2 = s2.x - i, r = i) : (l2 = "left", o2 = s2.x, r = i) : t2 ? (l2 = "left", o2 = s2.x, r = i) : (l2 = "right", o2 = s2.x - i, r = i);
    const h = { left: o2, right: o2 + r, top: a, bottom: a + n2 }, d = e2.get("bounds");
    Gt(h, d) || (e2.set("bounds", h), e2.set("pointerOrientation", l2));
  }
  _updateLC() {
    const e2 = this.axis, t2 = e2.parent;
    if (t2) {
      const i = t2.innerHeight();
      this._lc = this.axisLength() / i, this._ls = e2.y() / i;
    }
  }
  toAxisPosition(e2) {
    const t2 = this._start || 0, i = this._end || 1;
    return e2 = (e2 -= this._ls) * (i - t2) / this._lc, e2 = this.get("inversed") ? t2 + e2 : i - e2;
  }
  toGlobalPosition(e2) {
    const t2 = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? e2 -= t2 : e2 = i - e2, e2 = e2 / (i - t2) * this._lc, e2 += this._ls;
  }
  fixPosition(e2) {
    return this.get("inversed") ? e2 : 1 - e2;
  }
}
Object.defineProperty(be, "className", { enumerable: true, configurable: true, writable: true, value: "AxisRendererY" }), Object.defineProperty(be, "classNames", { enumerable: true, configurable: true, writable: true, value: me.classNames.concat([be.className]) });
class xe extends de {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_endIndex", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeGenerator", { enumerable: true, configurable: true, writable: true, value: ie() }), Object.defineProperty(this, "_fillGenerator", { enumerable: true, configurable: true, writable: true, value: se() }), Object.defineProperty(this, "_legendStroke", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_legendFill", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "strokes", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => We._new(this._root, { themeTags: zt(this.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template])) }), Object.defineProperty(this, "fills", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => We._new(this._root, { themeTags: zt(this.strokes.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template])) }), Object.defineProperty(this, "_fillTemplate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeTemplate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_previousPoint", { enumerable: true, configurable: true, writable: true, value: [0, 0, 0, 0] }), Object.defineProperty(this, "_dindex", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_sindex", { enumerable: true, configurable: true, writable: true, value: 0 });
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
    const t2 = this.mainContainer.children.push(e2.make());
    return e2.push(t2), t2;
  }
  makeFill(e2) {
    const t2 = this.mainContainer.children.push(e2.make());
    return e2.push(t2), t2;
  }
  _updateChildren() {
    this._strokeTemplate = void 0, this._fillTemplate = void 0;
    let e2 = this.get("xAxis"), t2 = this.get("yAxis");
    if (this.isDirty("stroke")) {
      const e3 = this.get("stroke");
      this.strokes.template.set("stroke", e3);
      const t3 = this._legendStroke;
      t3 && t3.states.lookup("default").set("stroke", e3);
    }
    if (this.isDirty("fill")) {
      const e3 = this.get("fill");
      this.fills.template.set("fill", e3);
      const t3 = this._legendFill;
      t3 && t3.states.lookup("default").set("fill", e3);
    }
    if (this.isDirty("curveFactory")) {
      const e3 = this.get("curveFactory");
      e3 && (this._strokeGenerator.curve(e3), this._fillGenerator.curve(e3));
    }
    if (e2.inited && t2.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty || this.isDirty("connect") || this.isDirty("curveFactory")) {
        this.fills.each((e4) => {
          e4.setPrivate("visible", false);
        }), this.strokes.each((e4) => {
          e4.setPrivate("visible", false);
        }), this.axisRanges.each((e4) => {
          let t4 = e4.fills;
          t4 && t4.each((e5) => {
            e5.setPrivate("visible", false);
          });
          let i2 = e4.strokes;
          i2 && i2.each((e5) => {
            e5.setPrivate("visible", false);
          });
        });
        let e3 = this.startIndex(), t3 = this.strokes.template.get("templateField"), i = this.fills.template.get("templateField"), a = true, o2 = true;
        t3 && (a = false), i && (o2 = false);
        for (let l$12 = e3 - 1; l$12 >= 0; l$12--) {
          let n3 = this.dataItems[l$12], r2 = true, h = n3.dataContext;
          if (t3 && h[t3] && (a = true), i && h[i] && (o2 = true), m(this._valueFields, (e4) => {
            l(n3.get(e4)) || (r2 = false);
          }), r2 && a && o2) {
            e3 = l$12;
            break;
          }
        }
        let n2 = this.dataItems.length, r = this.endIndex();
        if (r < n2) {
          r++;
          for (let e4 = r; e4 < n2; e4++) {
            let t4 = this.dataItems[e4], i2 = true;
            if (m(this._valueFields, (e5) => {
              l(t4.get(e5)) || (i2 = false);
            }), i2) {
              r = e4 + 1;
              break;
            }
          }
        }
        if (e3 > 0 && e3--, this._endIndex = r, this._clearGraphics(), this._sindex = 0, this._dindex = e3, 1 == this.dataItems.length)
          this._startSegment(0);
        else
          for (; this._dindex < r - 1; )
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
    let t2 = this._endIndex, i = t2;
    const s2 = this.get("autoGapCount"), a = this.get("connect"), o2 = this.makeFill(this.fills), n2 = this._fillTemplate, r = this.fills.template;
    n2 && n2 != r && (o2.template = n2), o2.setPrivate("visible", true);
    const l2 = this.makeStroke(this.strokes), h = this._strokeTemplate;
    h && h != this.strokes.template && (l2.template = h), l2.setPrivate("visible", true);
    let d = this.get("xAxis"), c = this.get("yAxis"), u2 = this.get("baseAxis"), g2 = this.get("vcx", 1), p = this.get("vcy", 1), m2 = this._xField, _2 = this._yField, b = this._xOpenField, x2 = this._yOpenField;
    const f = this.get("openValueXField"), v2 = this.get("openValueYField");
    f || (b = this._xField), v2 || (x2 = this._yField);
    const y2 = this.get("stacked"), w2 = d.basePosition(), P = c.basePosition();
    let k2;
    k2 = u2 === c ? this._yField : this._xField;
    const A = [];
    let D2 = [];
    A.push(D2);
    const T = this.strokes.template.get("templateField"), M = this.fills.template.get("templateField");
    let C = this.get("locationX", 0.5), S = this.get("locationY", 0.5), O = this.get("openLocationX", C), X2 = this.get("openLocationY", S);
    const Y2 = this.get("minDistance", 0);
    let L, F2 = this.fills.template.get("visible");
    this.axisRanges.length > 0 && (F2 = true);
    let I2 = false;
    (y2 || f || v2) && (I2 = true);
    const j = { points: D2, segments: A, stacked: y2, getOpen: I2, basePosX: w2, basePosY: P, fillVisible: F2, xField: m2, yField: _2, xOpenField: b, yOpenField: x2, vcx: g2, vcy: p, baseAxis: u2, xAxis: d, yAxis: c, locationX: C, locationY: S, openLocationX: O, openLocationY: X2, minDistance: Y2 };
    for (L = e2; L < i; L++) {
      this._dindex = L;
      const t3 = this._dataItems[L];
      let n3 = t3.get(m2), r2 = t3.get(_2);
      if (null == n3 || null == r2 ? a || (D2 = [], A.push(D2), j.points = D2) : this._getPoints(t3, j), T) {
        let s3 = t3.dataContext[T];
        if (s3) {
          if (s3 instanceof Be || (s3 = Be.new(s3)), this._strokeTemplate = s3, L > e2) {
            i = L;
            break;
          }
          l2.template = s3;
        }
      }
      if (M) {
        let s3 = t3.dataContext[M];
        if (s3) {
          if (s3 instanceof Be || (s3 = Be.new(s3)), this._fillTemplate = s3, L > e2) {
            i = L;
            break;
          }
          o2.template = s3;
        }
      }
      if (!a) {
        let e3 = this.dataItems[L + 1];
        e3 && u2.shouldGap(t3, e3, s2, k2) && (D2 = [], A.push(D2), j.points = D2);
      }
    }
    o2.setRaw("userData", [e2, L]), l2.setRaw("userData", [e2, L]), L === t2 && this._endLine(D2, A[0][0]), l2 && this._drawStroke(l2, A), o2 && this._drawFill(o2, A), this.axisRanges.each((t3) => {
      const i2 = t3.container, s3 = t3.fills, a2 = this.makeFill(s3);
      i2 && i2.children.push(a2), a2.setPrivate("visible", true), this._drawFill(a2, A);
      const o3 = t3.strokes, n3 = this.makeStroke(o3);
      i2 && i2.children.push(n3), n3.setPrivate("visible", true), this._drawStroke(n3, A), a2.setRaw("userData", [e2, L]), n3.setRaw("userData", [e2, L]);
    });
  }
  _getPoints(e$1, t2) {
    let i = t2.points, s2 = e$1.get("locationX", t2.locationX), a = e$1.get("locationY", t2.locationY), o2 = t2.xAxis.getDataItemPositionX(e$1, t2.xField, s2, t2.vcx), n2 = t2.yAxis.getDataItemPositionY(e$1, t2.yField, a, t2.vcy);
    if (this._shouldInclude(o2)) {
      const s3 = this.getPoint(o2, n2), a2 = [s3.x, s3.y];
      if (s3.x += this._x, s3.y += this._y, e$1.set("point", s3), t2.fillVisible) {
        let i2 = o2, s4 = n2;
        if (t2.baseAxis === t2.xAxis ? s4 = t2.basePosY : t2.baseAxis === t2.yAxis && (i2 = t2.basePosX), t2.getOpen) {
          let a3 = e$1.get(t2.xOpenField), o3 = e$1.get(t2.yOpenField);
          if (null != a3 && null != o3) {
            let a4 = e$1.get("openLocationX", t2.openLocationX), o4 = e$1.get("openLocationY", t2.openLocationY);
            if (t2.stacked) {
              let n3 = e$1.get("stackToItemX"), r2 = e$1.get("stackToItemY");
              n3 ? (i2 = t2.xAxis.getDataItemPositionX(n3, t2.xField, a4, n3.component.get("vcx")), e(i2) && (i2 = t2.basePosX)) : i2 = t2.yAxis === t2.baseAxis ? t2.basePosX : t2.xAxis.getDataItemPositionX(e$1, t2.xOpenField, a4, t2.vcx), r2 ? (s4 = t2.yAxis.getDataItemPositionY(r2, t2.yField, o4, r2.component.get("vcy")), e(s4) && (s4 = t2.basePosY)) : s4 = t2.xAxis === t2.baseAxis ? t2.basePosY : t2.yAxis.getDataItemPositionY(e$1, t2.yOpenField, o4, t2.vcy);
            } else
              i2 = t2.xAxis.getDataItemPositionX(e$1, t2.xOpenField, a4, t2.vcx), s4 = t2.yAxis.getDataItemPositionY(e$1, t2.yOpenField, o4, t2.vcy);
          }
        }
        let r = this.getPoint(i2, s4);
        a2[2] = r.x, a2[3] = r.y;
      }
      if (t2.minDistance > 0) {
        const e2 = a2[0], s4 = a2[1], o3 = a2[2], n3 = a2[3], r = this._previousPoint, l2 = r[0], h = r[1], d = r[2], c = r[3];
        (Math.hypot(e2 - l2, s4 - h) > t2.minDistance || o3 && n3 && Math.hypot(o3 - d, n3 - c) > t2.minDistance) && (i.push(a2), this._previousPoint = a2);
      } else
        i.push(a2);
    }
  }
  _endLine(e2, t2) {
  }
  _drawStroke(e2, t2) {
    e2.get("visible") && !e2.get("forceHidden") && e2.set("draw", (e3) => {
      m(t2, (t3) => {
        this._strokeGenerator.context(e3), this._strokeGenerator(t3);
      });
    });
  }
  _drawFill(e2, t2) {
    e2.get("visible") && !e2.get("forceHidden") && e2.set("draw", (e3) => {
      m(t2, (t3) => {
        this._fillGenerator.context(e3), this._fillGenerator(t3);
      });
    });
  }
  _processAxisRange(e2) {
    super._processAxisRange(e2), e2.fills = new V(Be.new({}), () => We._new(this._root, { themeTags: zt(e2.fills.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template, e2.fills.template])), e2.strokes = new V(Be.new({}), () => We._new(this._root, { themeTags: zt(e2.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template, e2.strokes.template]));
  }
  createLegendMarker(e2) {
    const t2 = this.get("legendDataItem");
    if (t2) {
      const e3 = t2.get("marker"), i = t2.get("markerRectangle");
      i && i.setPrivate("visible", false), e3.set("background", Ve.new(e3._root, { fillOpacity: 0, fill: $t(0) }));
      const s2 = e3.children.push(We._new(e3._root, { themeTags: ["line", "series", "legend", "marker", "stroke"], interactive: false }, [this.strokes.template]));
      this._legendStroke = s2;
      const a = e3.children.push(We._new(e3._root, { themeTags: ["line", "series", "legend", "marker", "fill"] }, [this.fills.template]));
      this._legendFill = a;
      const o2 = this._root.interfaceColors.get("disabled");
      if (s2.states.create("disabled", { fill: o2, stroke: o2 }), a.states.create("disabled", { fill: o2, stroke: o2 }), this.bullets.length > 0) {
        const t3 = this.bullets.getIndex(0);
        if (t3) {
          const i2 = t3(e3._root, this, new g(this, { legend: true }, {}));
          if (i2) {
            const t4 = i2.get("sprite");
            t4 instanceof We && t4.states.create("disabled", { fill: o2, stroke: o2 }), t4 && (t4.set("tooltipText", void 0), t4.set("tooltipHTML", void 0), e3.children.push(t4), t4.setAll({ x: e3.width() / 2, y: e3.height() / 2 }));
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
  _makeGraphics(t2, e2) {
    return this.makeColumn(e2, t2);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const t2 = this.get("xAxis"), e2 = this.get("yAxis"), i = "CategoryAxis", s2 = "ValueAxis";
    t2.isType(i) && (this.get("openCategoryXField") || (this._xOpenField = this._xField)), t2.isType(s2) && (this.get("openValueXField") || (this._xOpenField = this._xField)), e2.isType(i) && (this.get("openCategoryYField") || (this._yOpenField = this._yField)), e2.isType(s2) && (this.get("openValueYField") || (this._yOpenField = this._yField));
  }
  _prepareChildren() {
    super._prepareChildren();
    const t2 = this.get("xAxis"), e2 = this.get("yAxis"), i = this.dataItems.length, s2 = Math.max(0, this.startIndex() - 2), a = Math.min(this.endIndex() + 2, i - 1);
    if (t2.inited && e2.inited)
      for (let o2 = s2; o2 <= a; o2++) {
        let t3 = this.dataItems[o2];
        this._createGraphics(t3);
      }
  }
  _updateChildren() {
    const t2 = this.chart;
    t2 && (this._ph = t2.plotContainer.height(), this._pw = t2.plotContainer.width());
    const e2 = this.get("xAxis"), s2 = this.get("yAxis"), a = this.get("baseAxis"), o2 = this.columns.template;
    this.isDirty("fill") && null == o2.get("fill") && o2.set("fill", this.get("fill")), this.isDirty("stroke") && null == o2.get("stroke") && o2.set("stroke", this.get("stroke"));
    let n2 = 0, r = 0, h = 0;
    m(a.series, (t3) => {
      if (t3 instanceof u) {
        const e3 = t3.get("stacked");
        e3 && 0 == h && r++, !e3 && t3.get("clustered") && r++;
      }
      t3 === this && (n2 = r - 1), h++;
    }), this.get("clustered") || (n2 = 0, r = 1), 0 === r && (r = 1, n2 = 0);
    const l2 = e2.get("renderer"), g2 = s2.get("renderer"), d = "cellStartLocation", c = "cellEndLocation", m$1 = l2.get(d, 0), p = l2.get(c, 1), x2 = g2.get(d, 0), _2 = g2.get(c, 1);
    if (this._aLocationX0 = m$1 + n2 / r * (p - m$1), this._aLocationX1 = m$1 + (n2 + 1) / r * (p - m$1), this._aLocationY0 = x2 + n2 / r * (_2 - x2), this._aLocationY1 = x2 + (n2 + 1) / r * (_2 - x2), e2.inited && s2.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const t3 = this.dataItems.length;
        let e3 = Math.max(0, this.startIndex() - 2), i = Math.min(this.endIndex() + 2, t3 - 1);
        for (let a2 = 0; a2 < e3; a2++)
          this._toggleColumn(this.dataItems[a2], false);
        let s3 = this.dataItems[e3];
        for (let a2 = e3; a2 <= i; a2++) {
          let t4 = this.dataItems[a2];
          if (null != t4.get("valueX") && null != t4.get("valueY")) {
            if (s3 = t4, a2 > 0 && e3 > 0)
              for (let t5 = a2 - 1; t5 >= 0; t5--) {
                let e4 = this.dataItems[t5];
                if (null != e4.get("valueX") && null != e4.get("valueY")) {
                  s3 = e4;
                  break;
                }
              }
            break;
          }
          this._toggleColumn(t4, false);
        }
        for (let a2 = e3; a2 <= i; a2++) {
          let t4 = this.dataItems[a2];
          this._updateGraphics(t4, s3), null != t4.get("valueX") && null != t4.get("valueY") && (s3 = t4);
        }
        for (let a2 = i + 1; a2 < t3; a2++)
          this._toggleColumn(this.dataItems[a2], false);
      }
    } else
      this._skipped = true;
    this.updateLegendMarker(this.get("tooltipDataItem")), super._updateChildren();
  }
  _createGraphics(t2) {
    let e2 = t2.get("graphics");
    if (!e2) {
      e2 = this._makeGraphics(this.columns, t2), t2.set("graphics", e2), e2._setDataItem(t2);
      const i = t2.get("legendDataItem");
      if (i) {
        const t3 = i.get("markerRectangle");
        t3 && t3.setAll({ fill: e2.get("fill"), stroke: e2.get("stroke") });
      }
      this.axisRanges.each((e3) => {
        const i2 = e3.container, s2 = t2.get("rangeGraphics", []);
        t2.set("rangeGraphics", s2);
        const a = this._makeGraphics(e3.columns, t2);
        s2.push(a), a.setPrivate("list", e3.columns), i2.children.push(a);
      });
    }
  }
  _updateGraphics(t2, e$1) {
    let a = t2.get("graphics");
    const n2 = this._xField, r = this._yField, h = t2.get(n2), l2 = t2.get(r);
    if (null != h && null != l2) {
      const h2 = this._xOpenField, l3 = this._yOpenField, g2 = this.get("locationX", t2.get("locationX", 0.5)), d = this.get("locationY", t2.get("locationY", 0.5)), c = this.get("openLocationX", t2.get("openLocationX", g2)), m$1 = this.get("openLocationY", t2.get("openLocationY", d)), p = a.get("width"), u2 = a.get("height"), x2 = this.get("stacked"), _2 = this.get("xAxis"), I2 = this.get("yAxis"), f = this.get("baseAxis"), y2 = _2.get("start"), P = _2.get("end"), b = I2.get("start"), v2 = I2.get("end");
      let D2, T, A, C, w2 = this.get("vcy", 1), k2 = this.get("vcx", 1), F2 = false, M = false;
      if (I2.isType("CategoryAxis") && _2.isType("CategoryAxis")) {
        let e2 = this._aLocationX0 + c - 0.5, i = this._aLocationX1 + g2 - 0.5;
        if (p instanceof K) {
          let t3 = (i - e2) * (1 - p.value) / 2;
          e2 += t3, i -= t3;
        }
        if (D2 = _2.getDataItemPositionX(t2, h2, e2, k2), T = _2.getDataItemPositionX(t2, n2, i, k2), e2 = this._aLocationY0 + m$1 - 0.5, i = this._aLocationY1 + d - 0.5, u2 instanceof K) {
          let t3 = (i - e2) * (1 - u2.value) / 2;
          e2 += t3, i -= t3;
        }
        A = I2.getDataItemPositionY(t2, l3, e2, w2), C = I2.getDataItemPositionY(t2, r, i, w2), t2.setRaw("point", { x: D2 + (T - D2) / 2, y: A + (C - A) / 2 });
      } else if (_2 === f) {
        let e2 = this._aLocationX0 + c - 0.5, i = this._aLocationX1 + g2 - 0.5;
        if (p instanceof K) {
          let t3 = (i - e2) * (1 - p.value) / 2;
          e2 += t3, i -= t3;
        }
        if (D2 = _2.getDataItemPositionX(t2, h2, e2, k2), T = _2.getDataItemPositionX(t2, n2, i, k2), A = I2.getDataItemPositionY(t2, r, d, w2), this._yOpenField !== this._yField)
          C = I2.getDataItemPositionY(t2, l3, m$1, w2);
        else if (x2) {
          let e3 = t2.get("stackToItemY");
          C = e3 ? I2.getDataItemPositionY(e3, r, m$1, e3.component.get("vcy")) : I2.basePosition();
        } else
          C = I2.basePosition();
        t2.setRaw("point", { x: D2 + (T - D2) / 2, y: A }), M = true;
      } else if (I2 === f) {
        let e2 = this._aLocationY0 + m$1 - 0.5, i = this._aLocationY1 + d - 0.5;
        if (u2 instanceof K) {
          let t3 = (i - e2) * (1 - u2.value) / 2;
          e2 += t3, i -= t3;
        }
        if (A = I2.getDataItemPositionY(t2, l3, e2, w2), C = I2.getDataItemPositionY(t2, r, i, w2), T = _2.getDataItemPositionX(t2, n2, g2, k2), this._xOpenField !== this._xField)
          D2 = _2.getDataItemPositionX(t2, h2, c, k2);
        else if (x2) {
          let e3 = t2.get("stackToItemX");
          D2 = e3 ? _2.getDataItemPositionX(e3, n2, c, e3.component.get("vcx")) : _2.basePosition();
        } else
          D2 = _2.basePosition();
        F2 = true, t2.setRaw("point", { x: T, y: A + (C - A) / 2 });
      }
      this._updateSeriesGraphics(t2, a, D2, T, A, C, F2, M), D2 < y2 && T < y2 || D2 > P && T > P || A < b && C <= b || A >= v2 && C > v2 || e(D2) || e(A) ? this._toggleColumn(t2, false) : this._toggleColumn(t2, true);
      let X2 = t2.get("rangeGraphics");
      X2 && m(X2, (e2) => {
        this._updateSeriesGraphics(t2, e2, D2, T, A, C, F2, M);
      }), this._applyGraphicsStates(t2, e$1);
    }
  }
  _updateSeriesGraphics(t2, e2, i, s2, a, o2, r, h) {
    const l$12 = e2.get("width"), g2 = e2.get("height"), d = e2.get("maxWidth"), c = e2.get("maxHeight"), m2 = this.getPoint(i, a), p = this.getPoint(s2, o2), u2 = t2.get("point");
    if (u2) {
      const t3 = this.getPoint(u2.x, u2.y);
      u2.x = t3.x + this._x, u2.y = t3.y + this._y;
    }
    if (i = m2.x, s2 = p.x, a = m2.y, o2 = p.y, l(l$12)) {
      const t3 = (s2 - i - l$12) / 2;
      i += t3, s2 -= t3;
    }
    if (l(d) && d < Math.abs(s2 - i)) {
      const t3 = (s2 - i - d) / 2;
      i += t3, s2 -= t3;
    }
    if (l(g2)) {
      const t3 = (o2 - a - g2) / 2;
      a += t3, o2 -= t3;
    }
    if (l(c) && c < Math.abs(o2 - a)) {
      const t3 = (o2 - a - c) / 2;
      a += t3, o2 -= t3;
    }
    this.get("adjustBulletPosition") && (r && (s2 = Math.min(Math.max(0, s2), this._pw), i = Math.min(Math.max(0, i), this._pw)), h && (a = Math.min(Math.max(0, a), this._ph), o2 = Math.min(Math.max(0, o2), this._ph))), t2.setRaw("left", i), t2.setRaw("right", s2), t2.setRaw("top", a), t2.setRaw("bottom", o2), e2.setPrivate("width", s2 - i), e2.setPrivate("height", o2 - a), e2.set("x", i), e2.set("y", o2 - (o2 - a));
  }
  _handleDataSetChange() {
    super._handleDataSetChange(), m(this._dataItems, (t2) => {
      this._toggleColumn(t2, false);
    });
  }
  _applyGraphicsStates(t2, e2) {
    const i = t2.get("graphics"), s2 = i.states.lookup("dropFromOpen"), a = i.states.lookup("riseFromOpen"), o2 = i.states.lookup("dropFromPrevious"), r = i.states.lookup("riseFromPrevious");
    if (s2 || o2 || a || r) {
      const i2 = this.get("xAxis"), h = this.get("yAxis"), l$12 = this.get("baseAxis");
      let g2, d, c;
      l$12 === i2 && h.isType("ValueAxis") ? (g2 = t2.get(this._yOpenField), d = t2.get(this._yField), c = e2.get(this._yField)) : l$12 === h && i2.isType("ValueAxis") && (g2 = t2.get(this._xOpenField), d = t2.get(this._xField), c = e2.get(this._xField)), l(g2) && l(d) && (d < g2 ? s2 && s2.apply() : a && a.apply(), l(c) && (d < c ? o2 && o2.apply() : r && r.apply()));
    }
  }
  disposeDataItem(t2) {
    super.disposeDataItem(t2);
    const e2 = t2.get("graphics");
    e2 && (this.columns.removeValue(e2), e2.dispose());
    const s2 = t2.get("rangeGraphics");
    s2 && m(s2, (t3) => {
      const e3 = t3.getPrivate("list");
      e3 && e3.removeValue(t3), t3.dispose();
    });
  }
  hideDataItem(t$1, e2) {
    const s2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return t(this, void 0, void 0, function* () {
      const a = [s2.hideDataItem.call(this, t$1, e2)], o2 = t$1.get("graphics");
      o2 && a.push(o2.hide(e2));
      const n2 = t$1.get("rangeGraphics");
      n2 && m(n2, (t2) => {
        a.push(t2.hide(e2));
      }), yield Promise.all(a);
    });
  }
  _toggleColumn(t2, e2) {
    const s2 = t2.get("graphics");
    s2 && s2.setPrivate("visible", e2);
    const a = t2.get("rangeGraphics");
    a && m(a, (t3) => {
      t3.setPrivate("visible", e2);
    });
    const o2 = t2.bullets;
    o2 && m(o2, (t3) => {
      t3.setPrivate("hidden", !e2);
    });
  }
  showDataItem(t$1, e2) {
    const s2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return t(this, void 0, void 0, function* () {
      const a = [s2.showDataItem.call(this, t$1, e2)], o2 = t$1.get("graphics");
      o2 && a.push(o2.show(e2));
      const n2 = t$1.get("rangeGraphics");
      n2 && m(n2, (t2) => {
        a.push(t2.show(e2));
      }), yield Promise.all(a);
    });
  }
  updateLegendMarker(t2) {
    let e2 = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker") && !t2) {
      const e3 = this.dataItems[this.endIndex() - 1];
      e3 && (t2 = e3);
    }
    if (e2) {
      let s2 = this.columns.template;
      if (t2) {
        let e3 = t2.get("graphics");
        e3 && (s2 = e3);
      }
      const a = e2.get("markerRectangle");
      a && (e2.get("itemContainer").get("disabled") || m(Fe, (t3) => {
        a.set(t3, s2.get(t3, this.get(t3)));
      }));
    }
  }
  _getTooltipTarget(t2) {
    if ("bullet" == this.get("seriesTooltipTarget"))
      return super._getTooltipTarget(t2);
    let e2 = t2.get("graphics");
    return e2 || this;
  }
}
Object.defineProperty(u, "className", { enumerable: true, configurable: true, writable: true, value: "BaseColumnSeries" }), Object.defineProperty(u, "classNames", { enumerable: true, configurable: true, writable: true, value: de.classNames.concat([u.className]) });
class x extends ce {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_frequency", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_itemMap", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  _afterNew() {
    this._settings.themeTags = zt(this._settings.themeTags, ["axis"]), this.fields.push("category"), this.setPrivateRaw("name", "category"), this.addTag("category"), super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const t2 = this.dataItems.length;
    let e2 = 0;
    this._valuesDirty && (this._itemMap = {}, m(this.dataItems, (t3) => {
      t3.setRaw("index", e2), this._itemMap[t3.get("category")] = t3, e2++;
    }), this.setPrivateRaw("maxZoomFactor", t2)), this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * t2), 0)), this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * t2), t2)), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && this.dataItems.length > 0 && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges());
  }
  _handleRangeChange() {
    m(this.series, (t2) => {
      let e2 = this.dataItems[this.startIndex()].get("category"), s2 = this.dataItems[this.endIndex() - 1].get("category"), a = t2.get("baseAxis"), o2 = t2.get("xAxis"), n2 = t2.get("yAxis");
      if (o2 instanceof x && n2 instanceof x)
        t2._markDirtyAxes();
      else if (a === this) {
        let r, h, l2 = n2;
        if (o2 === a ? (t2.get("categoryXField") && (r = "categoryX"), t2.get("openCategoryXField") && (h = "openCategoryX")) : n2 === a && (t2.get("categoryYField") && (r = "categoryY"), t2.get("openCategoryYField") && (h = "openCategoryY"), l2 = o2), "ValueAxis" == l2.className && (r || h)) {
          let a2, o3;
          for (let i = 0, s3 = t2.dataItems.length; i < s3; i++) {
            let s4 = t2.dataItems[i];
            if (r && s4.get(r) === e2) {
              a2 = s4;
              break;
            }
            if (h && s4.get(h) === e2) {
              a2 = s4;
              break;
            }
          }
          for (let e3 = t2.dataItems.length - 1; e3 >= 0; e3--) {
            let i = t2.dataItems[e3];
            if (r && i.get(r) === s2) {
              o3 = i;
              break;
            }
            if (h && i.get(h) === s2) {
              o3 = i;
              break;
            }
          }
          let n3 = 0, l3 = t2.dataItems.length;
          a2 && (n3 = t2.dataItems.indexOf(a2)), o3 && (l3 = t2.dataItems.indexOf(o3) + 1), t2.setPrivate("startIndex", n3), t2.setPrivate("endIndex", l3);
          let g2 = false;
          for (let e3 = n3; e3 < l3; e3++) {
            const s3 = t2.dataItems[e3];
            if (m(t2.__valueXShowFields, (t3) => {
              null != s3.get(t3) && (g2 = true);
            }), m(t2.__valueYShowFields, (t3) => {
              null != s3.get(t3) && (g2 = true);
            }), g2)
              break;
          }
          t2.setPrivate("outOfSelection", !g2);
        }
        t2._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    const t2 = this.get("renderer"), e2 = this.dataItems.length;
    let i = this.startIndex();
    i > 0 && i--;
    let s2 = this.endIndex();
    s2 < e2 && s2++;
    let a = t2.axisLength() / Math.max(t2.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER), o2 = Math.max(1, Math.min(e2, Math.ceil((s2 - i) / a)));
    i = Math.floor(i / o2) * o2, this._frequency = o2;
    for (let r = 0; r < e2; r++)
      this.dataItems[r].hide();
    let n2 = this.dataItems[i].get("index", 0);
    for (let r = i; r < s2; r += o2) {
      let t3 = this.dataItems[r];
      this._createAssets(t3, []), t3.isHidden() && t3.show(), this._prepareDataItem(t3, n2, o2), n2++;
    }
    this._updateGhost();
  }
  _prepareDataItem(t2, e2, i) {
    let s2 = this.get("renderer"), a = t2.get("categoryLocation", 0), o2 = t2.get("endCategoryLocation", 1), r = t2.get("index");
    l(r) || (r = this.categoryToIndex(t2.get("category")));
    let h, l$12 = this.indexToPosition(r, a), g2 = t2.get("endCategory");
    g2 ? (h = this.categoryToIndex(g2), l(h) || (h = r)) : h = r;
    let d, c, m2 = this.indexToPosition(h, o2);
    d = t2.get("isRange") ? h : r + this._frequency - 1, c = this.indexToPosition(d, o2), s2.updateLabel(t2.get("label"), l$12, m2, i), s2.updateGrid(t2.get("grid"), l$12, m2), s2.updateTick(t2.get("tick"), l$12, m2, i), s2.updateFill(t2.get("axisFill"), l$12, c), this._processBullet(t2), s2.updateBullet(t2.get("bullet"), l$12, m2);
    const p = this.get("fillRule");
    p && p(t2, e2);
  }
  startIndex() {
    let t2 = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), t2 - 1);
  }
  endIndex() {
    let t2 = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", t2), t2));
  }
  baseValue() {
  }
  basePosition() {
    return 0;
  }
  getX(t2) {
    let e2 = this._itemMap[t2];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getY(t2) {
    let e2 = this._itemMap[t2];
    return e2 ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e2.get("index", 0))) : NaN;
  }
  getDataItemPositionX(t2, e2, i, s2) {
    const a = t2.get(e2), o2 = this._itemMap[a];
    return o2 ? this.indexToPosition(o2.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateX(t2, e2, i, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t2, e2, i, s2));
  }
  getDataItemPositionY(t2, e2, i, s2) {
    const a = t2.get(e2), o2 = this._itemMap[a];
    return o2 ? this.indexToPosition(o2.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateY(t2, e2, i, s2) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t2, e2, i, s2));
  }
  indexToPosition(t2, e2) {
    l(e2) || (e2 = 0.5);
    let i = this.dataItems.length, s2 = this.get("startLocation", 0);
    i -= s2, i -= 1 - this.get("endLocation", 1);
    let a = (t2 + e2 - s2) / i, o2 = this.dataItems[t2];
    return o2 && (a += o2.get("deltaPosition", 0)), a;
  }
  categoryToIndex(t2) {
    let e2 = this._itemMap[t2];
    return e2 ? e2.get("index") : NaN;
  }
  dataItemToPosition(t2) {
    return this.indexToPosition(t2.get("index"));
  }
  roundAxisPosition(t2, e2) {
    return t2 += (0.5 - e2) / this.dataItems.length, this.indexToPosition(this.axisPositionToIndex(t2), e2);
  }
  axisPositionToIndex(t2) {
    let e2 = this.dataItems.length;
    return he$1(Math.floor(t2 * e2), 0, e2 - 1);
  }
  getTooltipText(t2, e2) {
    const i = this.dataItems[this.axisPositionToIndex(t2)];
    if (i) {
      const t3 = i.get("label");
      if (t3)
        return $e(t3, this.get("tooltipText", ""));
    }
  }
  _updateTooltipText(t2, e2) {
    t2._setDataItem(this.dataItems[this.axisPositionToIndex(e2)]), t2.label.text.markDirtyText();
  }
  getSeriesItem(t2, e2) {
    if (this.dataItems.length > 0) {
      let i = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), s2 = this.axisPositionToIndex(e2), a = t2.dataItems[s2], o2 = this.dataItems[s2], n2 = o2.get("category");
      if (a && o2 && a.get(i) === n2)
        return a;
      for (let e3 = 0, r = t2.dataItems.length; e3 < r; e3++) {
        let s3 = t2.dataItems[e3];
        if (s3.get(i) === n2)
          return s3;
      }
    }
  }
  zoomToIndexes(t2, e2, i) {
    let s2 = this.dataItems.length;
    this.zoom(t2 / s2, e2 / s2, i);
  }
  zoomToCategories(t2, e2, i) {
    this.zoomToIndexes(this.categoryToIndex(t2), this.categoryToIndex(e2) + 1, i);
  }
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
}
Object.defineProperty(x, "className", { enumerable: true, configurable: true, writable: true, value: "CategoryAxis" }), Object.defineProperty(x, "classNames", { enumerable: true, configurable: true, writable: true, value: ce.classNames.concat([x.className]) });
class _ extends u {
  constructor() {
    super(...arguments), Object.defineProperty(this, "columns", { enumerable: true, configurable: true, writable: true, value: new V(Be.new({}), () => n._new(this._root, { position: "absolute", themeTags: zt(this.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template])) });
  }
  makeColumn(t2, e2) {
    const i = this.mainContainer.children.push(e2.make());
    return i._setDataItem(t2), e2.push(i), i;
  }
  _processAxisRange(t2) {
    super._processAxisRange(t2), t2.columns = new V(Be.new({}), () => n._new(this._root, { position: "absolute", themeTags: zt(t2.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template, t2.columns.template]));
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
