import { ho as t } from "./chunk-KFNcxJaF.js";
import { Q as Qe, W as We, ay as je, m, d as $$1, az as F$1, b as Y, aA as S$1, x as l, a3 as Zt, ac as K, aB as te, ak as ei, aC as W, a0 as _$1 } from "./chunk-55vU5FGs.js";
class f extends F$1 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "processor", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  incrementRef() {
  }
  decrementRef() {
  }
  _onPush(e) {
    this.processor && this.processor.processRow(e), super._onPush(e);
  }
  _onInsertIndex(e, t2) {
    this.processor && this.processor.processRow(t2), super._onInsertIndex(e, t2);
  }
  _onSetIndex(e, t2, s) {
    this.processor && this.processor.processRow(s), super._onSetIndex(e, t2, s);
  }
}
class g extends je {
  constructor(e, t2, s) {
    super(s), Object.defineProperty(this, "component", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "dataContext", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "bullets", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "open", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "close", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.dataContext = t2, this.component = e, this._settings.visible = true, this._checkDirty();
  }
  markDirty() {
    this.component.markDirtyValues(this);
  }
  _startAnimation() {
    this.component._root._addAnimation(this);
  }
  _animationTime() {
    return this.component._root.animationTime;
  }
  _dispose() {
    this.component && this.component.disposeDataItem(this), super._dispose();
  }
  show(e) {
    this.setRaw("visible", true), this.component && this.component.showDataItem(this, e);
  }
  hide(e) {
    this.setRaw("visible", false), this.component && this.component.hideDataItem(this, e);
  }
  isHidden() {
    return !this.get("visible");
  }
}
class _ extends Qe {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_data", { enumerable: true, configurable: true, writable: true, value: new f() }), Object.defineProperty(this, "_dataItems", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_mainDataItems", { enumerable: true, configurable: true, writable: true, value: this._dataItems }), Object.defineProperty(this, "valueFields", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "fields", { enumerable: true, configurable: true, writable: true, value: ["id"] }), Object.defineProperty(this, "_valueFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueFieldsF", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_fields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_fieldsF", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valuesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataChanged", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataGrouped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "inited", { enumerable: true, configurable: true, writable: true, value: false });
  }
  set data(e) {
    e.incrementRef(), this._data.decrementRef(), this._data = e;
  }
  get data() {
    return this._data;
  }
  _dispose() {
    super._dispose(), this._data.decrementRef();
  }
  _onDataClear() {
  }
  _afterNew() {
    super._afterNew(), this._data.incrementRef(), this._updateFields(), this._disposers.push(this.data.events.onAll((e) => {
      const t2 = this._mainDataItems;
      if (this.markDirtyValues(), this._markDirtyGroup(), this._dataChanged = true, "clear" === e.type)
        m(t2, (e2) => {
          e2.dispose();
        }), t2.length = 0, this._onDataClear();
      else if ("push" === e.type) {
        const s = new g(this, e.newValue, this._makeDataItem(e.newValue));
        t2.push(s), this.processDataItem(s);
      } else if ("setIndex" === e.type) {
        const s = t2[e.index], i = this._makeDataItem(e.newValue);
        s.bullets && 0 == s.bullets.length && (s.bullets = void 0), $$1(i).forEach((e2) => {
          s.animate({ key: e2, to: i[e2], duration: this.get("interpolationDuration", 0), easing: this.get("interpolationEasing") });
        }), s.dataContext = e.newValue;
      } else if ("insertIndex" === e.type) {
        const s = new g(this, e.newValue, this._makeDataItem(e.newValue));
        t2.splice(e.index, 0, s), this.processDataItem(s);
      } else if ("removeIndex" === e.type) {
        t2[e.index].dispose(), t2.splice(e.index, 1);
      } else {
        if ("moveIndex" !== e.type)
          throw new Error("Unknown IStreamEvent type");
        {
          const s = t2[e.oldIndex];
          t2.splice(e.oldIndex, 1), t2.splice(e.newIndex, 0, s);
        }
      }
      this._afterDataChange();
    }));
  }
  _updateFields() {
    this.valueFields && (this._valueFields = [], this._valueFieldsF = {}, m(this.valueFields, (e) => {
      this.get(e + "Field") && (this._valueFields.push(e), this._valueFieldsF[e] = { fieldKey: e + "Field", workingKey: e + "Working" });
    })), this.fields && (this._fields = [], this._fieldsF = {}, m(this.fields, (e) => {
      this.get(e + "Field") && (this._fields.push(e), this._fieldsF[e] = e + "Field");
    }));
  }
  get dataItems() {
    return this._dataItems;
  }
  processDataItem(e) {
  }
  _makeDataItem(e) {
    const t2 = {};
    return this._valueFields && m(this._valueFields, (s) => {
      const i = this.get(this._valueFieldsF[s].fieldKey);
      t2[s] = e[i], t2[this._valueFieldsF[s].workingKey] = t2[s];
    }), this._fields && m(this._fields, (s) => {
      const i = this.get(this._fieldsF[s]);
      t2[s] = e[i];
    }), t2;
  }
  makeDataItem(e) {
    let t2 = new g(this, void 0, e);
    return this.processDataItem(t2), t2;
  }
  pushDataItem(e) {
    const t2 = this.makeDataItem(e);
    return this._mainDataItems.push(t2), t2;
  }
  disposeDataItem(e) {
  }
  showDataItem(t$1, s) {
    return t(this, void 0, void 0, function* () {
      t$1.set("visible", true);
    });
  }
  hideDataItem(t$1, s) {
    return t(this, void 0, void 0, function* () {
      t$1.set("visible", false);
    });
  }
  _clearDirty() {
    super._clearDirty(), this._valuesDirty = false;
  }
  _afterDataChange() {
  }
  _afterChanged() {
    if (super._afterChanged(), this._dataChanged) {
      const e = "datavalidated";
      this.events.isEnabled(e) && this.events.dispatch(e, { type: e, target: this }), this._dataChanged = false;
    }
    this.inited = true;
  }
  markDirtyValues(e) {
    this.markDirty(), this._valuesDirty = true;
  }
  _markDirtyGroup() {
    this._dataGrouped = false;
  }
  markDirtySize() {
    this._sizeDirty = true, this.markDirty();
  }
}
function v(e) {
  return new Promise((t2, s) => {
    setTimeout(t2, e);
  });
}
Object.defineProperty(_, "className", { enumerable: true, configurable: true, writable: true, value: "Component" }), Object.defineProperty(_, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([_.className]) });
let y = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2629742400, year: 31536e6 };
function w(e, t2) {
  return null == t2 && (t2 = 1), y[e] * t2;
}
function I(e, t2, s, i, a, l$1, n) {
  if (!n || a) {
    let n2 = 0;
    switch (a || "millisecond" == t2 || (n2 = e.getTimezoneOffset(), e.setUTCMinutes(e.getUTCMinutes() - n2)), t2) {
      case "day":
        let t3 = e.getUTCDate();
        if (s > 1) {
          if (l$1) {
            l$1 = I(l$1, "day", 1);
            let t4 = e.getTime() - l$1.getTime(), i2 = Math.floor(t4 / w("day") / s), a3 = w("day", i2 * s);
            e.setTime(l$1.getTime() + a3 - n2 * w("minute"));
          }
        } else
          e.setUTCDate(t3);
        e.setUTCHours(0, 0, 0, 0);
        break;
      case "second":
        let a2 = e.getUTCSeconds();
        s > 1 && (a2 = Math.floor(a2 / s) * s), e.setUTCSeconds(a2, 0);
        break;
      case "millisecond":
        if (1 == s)
          return e;
        let o = e.getUTCMilliseconds();
        o = Math.floor(o / s) * s, e.setUTCMilliseconds(o);
        break;
      case "hour":
        let h = e.getUTCHours();
        s > 1 && (h = Math.floor(h / s) * s), e.setUTCHours(h, 0, 0, 0);
        break;
      case "minute":
        let u = e.getUTCMinutes();
        s > 1 && (u = Math.floor(u / s) * s), e.setUTCMinutes(u, 0, 0);
        break;
      case "month":
        let d = e.getUTCMonth();
        s > 1 && (d = Math.floor(d / s) * s), e.setUTCMonth(d, 1), e.setUTCHours(0, 0, 0, 0);
        break;
      case "year":
        let c = e.getUTCFullYear();
        s > 1 && (c = Math.floor(c / s) * s), e.setUTCFullYear(c, 0, 1), e.setUTCHours(0, 0, 0, 0);
        break;
      case "week":
        let m2 = e.getUTCDate(), p = e.getUTCDay();
        l(i) || (i = 1), m2 = p >= i ? m2 - p + i : m2 - (7 + p) + i, e.setUTCDate(m2), e.setUTCHours(0, 0, 0, 0);
    }
    if (!a && "millisecond" != t2 && (e.setUTCMinutes(e.getUTCMinutes() + n2), "day" == t2 || "week" == t2 || "month" == t2 || "year" == t2)) {
      let t3 = e.getTimezoneOffset();
      if (t3 != n2) {
        let s2 = t3 - n2;
        e.setUTCMinutes(e.getUTCMinutes() + s2);
      }
    }
    return e;
  }
  {
    if (isNaN(e.getTime()))
      return e;
    let o = n.offsetUTC(e), h = e.getTimezoneOffset(), u = n.parseDate(e), d = u.year, c = u.month, m2 = u.day, p = u.hour, b = u.minute, f2 = u.second, g2 = u.millisecond, _2 = u.weekday;
    switch (t2) {
      case "day":
        if (s > 1 && l$1) {
          l$1 = I(l$1, "day", 1, i, a, void 0, n);
          let t3 = e.getTime() - l$1.getTime(), r = Math.floor(t3 / w("day") / s), o2 = w("day", r * s);
          e.setTime(l$1.getTime() + o2), u = n.parseDate(e), d = u.year, c = u.month, m2 = u.day;
        }
        p = 0, b = o - h, f2 = 0, g2 = 0;
        break;
      case "second":
        b += o - h, s > 1 && (f2 = Math.floor(f2 / s) * s), g2 = 0;
        break;
      case "millisecond":
        b += o - h, s > 1 && (g2 = Math.floor(g2 / s) * s);
        break;
      case "hour":
        s > 1 && (p = Math.floor(p / s) * s), b = o - h, f2 = 0, g2 = 0;
        break;
      case "minute":
        s > 1 && (b = Math.floor(b / s) * s), b += o - h, f2 = 0, g2 = 0;
        break;
      case "month":
        s > 1 && (c = Math.floor(c / s) * s), m2 = 1, p = 0, b = o - h, f2 = 0, g2 = 0;
        break;
      case "year":
        s > 1 && (d = Math.floor(d / s) * s), c = 0, m2 = 1, p = 0, b = o - h, f2 = 0, g2 = 0;
        break;
      case "week":
        l(i) || (i = 1), m2 = _2 >= i ? m2 - _2 + i : m2 - (7 + _2) + i, p = 0, b = o - h, f2 = 0, g2 = 0;
    }
    let v2 = (e = new Date(d, c, m2, p, b, f2, g2)).getTimezoneOffset();
    return v2 != h && e.setTime(e.getTime() + 6e4 * (h - v2)), e;
  }
}
class D extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_aggregatesCalculated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_selectionAggregatesCalculated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataProcessed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_psi", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_pei", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "bullets", { enumerable: true, configurable: true, writable: true, value: new F$1() }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { width: Y, height: Y, position: "absolute" }) });
  }
  _afterNew() {
    this.valueFields.push("value"), super._afterNew(), this.setPrivate("customData", {}), this._disposers.push(this.bullets.events.onAll((e) => {
      if ("clear" === e.type)
        this._handleBullets(this.dataItems);
      else if ("push" === e.type)
        this._handleBullets(this.dataItems);
      else if ("setIndex" === e.type)
        this._handleBullets(this.dataItems);
      else if ("insertIndex" === e.type)
        this._handleBullets(this.dataItems);
      else if ("removeIndex" === e.type)
        this._handleBullets(this.dataItems);
      else {
        if ("moveIndex" !== e.type)
          throw new Error("Unknown IListEvent type");
        this._handleBullets(this.dataItems);
      }
    }));
  }
  _dispose() {
    this.bulletsContainer.dispose(), super._dispose();
  }
  startIndex() {
    let e = this.dataItems.length;
    return Math.min(this.getPrivate("startIndex", 0), e);
  }
  endIndex() {
    let e = this.dataItems.length;
    return Math.min(this.getPrivate("endIndex", e), e);
  }
  _handleBullets(e) {
    m(e, (e2) => {
      const t2 = e2.bullets;
      t2 && (m(t2, (e3) => {
        e3.dispose();
      }), e2.bullets = void 0);
    }), this.markDirtyValues();
  }
  getDataItemById(e) {
    return S$1(this.dataItems, (t2) => t2.get("id") == e);
  }
  _makeBullets(e) {
    this._shouldMakeBullet(e) && (e.bullets = [], this.bullets.each((t2) => {
      this._makeBullet(e, t2);
    }));
  }
  _shouldMakeBullet(e) {
    return true;
  }
  _makeBullet(e, t2, s) {
    const i = t2(this._root, this, e);
    if (i) {
      let t3 = i.get("sprite");
      t3 && (t3._setDataItem(e), t3.setRaw("position", "absolute"), this.bulletsContainer.children.push(t3)), i._index = s, i.series = this, e.bullets.push(i);
    }
    return i;
  }
  _clearDirty() {
    super._clearDirty(), this._aggregatesCalculated = false, this._selectionAggregatesCalculated = false;
  }
  _prepareChildren() {
    super._prepareChildren();
    let e = this.startIndex(), t2 = this.endIndex();
    if (this.isDirty("heatRules") && (this._valuesDirty = true), this.isPrivateDirty("baseValueSeries")) {
      const e2 = this.getPrivate("baseValueSeries");
      e2 && this._disposers.push(e2.onPrivate("startIndex", () => {
        this.markDirtyValues();
      }));
    }
    if (this.get("calculateAggregates") && (this._valuesDirty && !this._dataProcessed && (this._aggregatesCalculated || (this._calculateAggregates(0, this.dataItems.length), this._aggregatesCalculated = true)), this._psi == e && this._pei == t2 || this._selectionAggregatesCalculated || (0 === e && t2 === this.dataItems.length && this._aggregatesCalculated || this._calculateAggregates(e, t2), this._selectionAggregatesCalculated = true)), this.isDirty("tooltip")) {
      let e2 = this.get("tooltip");
      e2 && (e2.hide(0), e2.set("tooltipTarget", this));
    }
    if (this.isDirty("fill") || this.isDirty("stroke")) {
      let e2;
      const t3 = this.get("legendDataItem");
      if (t3 && (e2 = t3.get("markerRectangle"), e2 && this.isVisible())) {
        if (this.isDirty("stroke")) {
          let t4 = this.get("stroke");
          e2.set("stroke", t4);
        }
        if (this.isDirty("fill")) {
          let t4 = this.get("fill");
          e2.set("fill", t4);
        }
      }
      this.updateLegendMarker(void 0);
    }
    if (this.bullets.length > 0) {
      let e2 = this.startIndex(), t3 = this.endIndex();
      t3 < this.dataItems.length && t3++;
      for (let s = e2; s < t3; s++) {
        let e3 = this.dataItems[s];
        e3.bullets || this._makeBullets(e3);
      }
    }
  }
  _calculateAggregates(e, t2) {
    let s = this._valueFields;
    if (!s)
      throw new Error("No value fields are set for the series.");
    const i = {}, l2 = {}, r = {}, n = {}, o = {}, h = {}, u = {}, d = {}, c = {};
    m(s, (e2) => {
      i[e2] = 0, l2[e2] = 0, r[e2] = 0;
    }), m(s, (s2) => {
      let a = s2 + "Change", m2 = s2 + "ChangePercent", p = s2 + "ChangePrevious", b = s2 + "ChangePreviousPercent", f2 = s2 + "ChangeSelection", g2 = s2 + "ChangeSelectionPercent", _2 = "valueY";
      "valueX" != s2 && "openValueX" != s2 && "lowValueX" != s2 && "highValueX" != s2 || (_2 = "valueX");
      const v2 = this.getPrivate("baseValueSeries");
      for (let y2 = e; y2 < t2; y2++) {
        const t3 = this.dataItems[y2];
        let w2 = t3.get(s2);
        null != w2 && (r[s2]++, i[s2] += w2, l2[s2] += Math.abs(w2), d[s2] = i[s2] / r[s2], (n[s2] > w2 || null == n[s2]) && (n[s2] = w2), (o[s2] < w2 || null == o[s2]) && (o[s2] = w2), u[s2] = w2, null == h[s2] && (h[s2] = w2, c[s2] = w2, v2 && (h[_2] = v2._getBase(_2))), 0 === e && (t3.setRaw(a, w2 - h[_2]), t3.setRaw(m2, (w2 - h[_2]) / h[_2] * 100)), t3.setRaw(p, w2 - c[_2]), t3.setRaw(b, (w2 - c[_2]) / c[_2] * 100), t3.setRaw(f2, w2 - h[_2]), t3.setRaw(g2, (w2 - h[_2]) / h[_2] * 100), c[s2] = w2);
      }
    }), m(s, (e2) => {
      this.setPrivate(e2 + "AverageSelection", d[e2]), this.setPrivate(e2 + "CountSelection", r[e2]), this.setPrivate(e2 + "SumSelection", i[e2]), this.setPrivate(e2 + "AbsoluteSumSelection", l2[e2]), this.setPrivate(e2 + "LowSelection", n[e2]), this.setPrivate(e2 + "HighSelection", o[e2]), this.setPrivate(e2 + "OpenSelection", h[e2]), this.setPrivate(e2 + "CloseSelection", u[e2]);
    }), 0 === e && t2 === this.dataItems.length && m(s, (e2) => {
      this.setPrivate(e2 + "Average", d[e2]), this.setPrivate(e2 + "Count", r[e2]), this.setPrivate(e2 + "Sum", i[e2]), this.setPrivate(e2 + "AbsoluteSum", l2[e2]), this.setPrivate(e2 + "Low", n[e2]), this.setPrivate(e2 + "High", o[e2]), this.setPrivate(e2 + "Open", h[e2]), this.setPrivate(e2 + "Close", u[e2]);
    });
  }
  _updateChildren() {
    super._updateChildren(), this._psi = this.startIndex(), this._pei = this.endIndex(), this.isDirty("visible") && this.bulletsContainer.set("visible", this.get("visible"));
    const e = this.get("heatRules");
    if (this._valuesDirty && e && e.length > 0 && m(e, (e2) => {
      const t2 = e2.minValue || this.getPrivate(e2.dataField + "Low") || 0, s = e2.maxValue || this.getPrivate(e2.dataField + "High") || 0;
      m(e2.target._entities, (i) => {
        const a = i.dataItem.get(e2.dataField);
        if (l(a))
          if (e2.customFunction)
            e2.customFunction.call(this, i, t2, s, a);
          else {
            let l$1, n;
            l$1 = e2.logarithmic ? (Math.log(a) * Math.LOG10E - Math.log(t2) * Math.LOG10E) / (Math.log(s) * Math.LOG10E - Math.log(t2) * Math.LOG10E) : (a - t2) / (s - t2), !l(a) || l(l$1) && Math.abs(l$1) != 1 / 0 || (l$1 = 0.5), l(e2.min) ? n = e2.min + (e2.max - e2.min) * l$1 : e2.min instanceof Zt ? n = Zt.interpolate(l$1, e2.min, e2.max) : e2.min instanceof K && (n = te(l$1, e2.min, e2.max)), i.set(e2.key, n);
          }
        else
          e2.neutral && i.set(e2.key, e2.neutral);
      });
    }), this.get("visible") && this.bullets.length > 0) {
      let e2 = this.dataItems.length, t2 = this.startIndex(), s = this.endIndex();
      s < e2 && s++, t2 > 0 && t2--;
      for (let i = 0; i < t2; i++)
        this._hideBullets(this.dataItems[i]);
      for (let i = t2; i < s; i++)
        this._positionBullets(this.dataItems[i]);
      for (let i = s; i < e2; i++)
        this._hideBullets(this.dataItems[i]);
    }
  }
  _positionBullets(e) {
    e.bullets && m(e.bullets, (e2) => {
      this._positionBullet(e2);
      const t2 = e2.get("sprite");
      e2.get("dynamic") && (t2 && (t2._markDirtyKey("fill"), t2.markDirtySize()), t2 instanceof Qe && t2.walkChildren((e3) => {
        e3._markDirtyKey("fill"), e3.markDirtySize(), e3 instanceof ei && e3.text.markDirtyText();
      })), t2 instanceof ei && t2.get("populateText") && t2.text.markDirtyText();
    });
  }
  _hideBullets(e) {
    e.bullets && m(e.bullets, (e2) => {
      let t2 = e2.get("sprite");
      t2 && t2.setPrivate("visible", false);
    });
  }
  _positionBullet(e) {
  }
  _placeBulletsContainer(e) {
    e.bulletsContainer.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
    const e = this.bulletsContainer;
    e.parent && e.parent.children.removeValue(e);
  }
  disposeDataItem(e) {
    const t2 = e.bullets;
    t2 && m(t2, (e2) => {
      e2.dispose();
    });
  }
  _getItemReaderLabel() {
    return "";
  }
  showDataItem(t$1, s) {
    const i = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return t(this, void 0, void 0, function* () {
      const e = [i.showDataItem.call(this, t$1, s)], l2 = t$1.bullets;
      l2 && m(l2, (t2) => {
        e.push(t2.get("sprite").show(s));
      }), yield Promise.all(e);
    });
  }
  hideDataItem(t$1, s) {
    const i = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return t(this, void 0, void 0, function* () {
      const e = [i.hideDataItem.call(this, t$1, s)], l2 = t$1.bullets;
      l2 && m(l2, (t2) => {
        e.push(t2.get("sprite").hide(s));
      }), yield Promise.all(e);
    });
  }
  _sequencedShowHide(t$1, s) {
    return t(this, void 0, void 0, function* () {
      if (this.get("sequencedInterpolation"))
        if (l(s) || (s = this.get("interpolationDuration", 0)), s > 0) {
          const i = this.startIndex(), a = this.endIndex();
          yield Promise.all(_$1(this.dataItems, (l2, r) => t(this, void 0, void 0, function* () {
            let e = s || 0;
            (r < i - 10 || r > a + 10) && (e = 0);
            let n = this.get("sequencedDelay", 0) + e / (a - i);
            yield v(n * (r - i)), t$1 ? yield this.showDataItem(l2, e) : yield this.hideDataItem(l2, e);
          })));
        } else
          yield Promise.all(_$1(this.dataItems, (e) => t$1 ? this.showDataItem(e, 0) : this.hideDataItem(e, 0)));
    });
  }
  updateLegendValue(e) {
    if (e) {
      const t2 = e.get("legendDataItem");
      if (t2) {
        const s = t2.get("valueLabel");
        if (s) {
          const t3 = s.text;
          let i2 = "";
          s._setDataItem(e), i2 = this.get("legendValueText", t3.get("text", "")), s.set("text", i2), t3.markDirtyText();
        }
        const i = t2.get("label");
        if (i) {
          const t3 = i.text;
          let s2 = "";
          i._setDataItem(e), s2 = this.get("legendLabelText", t3.get("text", "")), i.set("text", s2), t3.markDirtyText();
        }
      }
    }
  }
  updateLegendMarker(e) {
  }
  _onHide() {
    super._onHide();
    const e = this.getTooltip();
    e && e.hide();
  }
  hoverDataItem(e) {
  }
  unhoverDataItem(e) {
  }
  _getBase(e) {
    const t2 = this.dataItems[this.startIndex()];
    return t2 ? t2.get(e) : 0;
  }
}
function x(e, t2) {
  for (let s = 0, i = t2.length; s < i; s++) {
    const i2 = t2[s];
    if (i2.length > 0) {
      let t3 = i2[0];
      if (t3.length > 0) {
        let s2 = t3[0];
        e.moveTo(s2.x, s2.y);
        for (let t4 = 0, a = i2.length; t4 < a; t4++)
          C(e, i2[t4]);
      }
    }
  }
}
function C(e, t2) {
  for (let s = 0, i = t2.length; s < i; s++) {
    const i2 = t2[s];
    e.lineTo(i2.x, i2.y);
  }
}
Object.defineProperty(D, "className", { enumerable: true, configurable: true, writable: true, value: "Series" }), Object.defineProperty(D, "classNames", { enumerable: true, configurable: true, writable: true, value: _.classNames.concat([D.className]) });
class P extends We {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const e = this.get("points"), t2 = this.get("segments");
      if (e && e.length > 0) {
        let t3 = e[0];
        this._display.moveTo(t3.x, t3.y), x(this._display, [[e]]);
      } else if (t2)
        x(this._display, t2);
      else if (!this.get("draw")) {
        let e2 = this.width(), t3 = this.height();
        this._display.moveTo(0, 0), this._display.lineTo(e2, t3);
      }
    }
  }
}
function k(e) {
  return function() {
    return e;
  };
}
Object.defineProperty(P, "className", { enumerable: true, configurable: true, writable: true, value: "Line" }), Object.defineProperty(P, "classNames", { enumerable: true, configurable: true, writable: true, value: We.classNames.concat([P.className]) });
const T = Math.PI, M = 2 * T, O = 1e-6, $ = M - O;
function j(e) {
  this._ += e[0];
  for (let t2 = 1, s = e.length; t2 < s; ++t2)
    this._ += arguments[t2] + e[t2];
}
function S(e) {
  let t2 = Math.floor(e);
  if (!(t2 >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t2 > 15)
    return j;
  const s = 10 ** t2;
  return function(e2) {
    this._ += e2[0];
    for (let t3 = 1, i = e2.length; t3 < i; ++t3)
      this._ += Math.round(arguments[t3] * s) / s + e2[t3];
  };
}
class F {
  constructor(e) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == e ? j : S(e);
  }
  moveTo(e, t2) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t2}`;
  }
  closePath() {
    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, t2) {
    this._append`L${this._x1 = +e},${this._y1 = +t2}`;
  }
  quadraticCurveTo(e, t2, s, i) {
    this._append`Q${+e},${+t2},${this._x1 = +s},${this._y1 = +i}`;
  }
  bezierCurveTo(e, t2, s, i, a, l2) {
    this._append`C${+e},${+t2},${+s},${+i},${this._x1 = +a},${this._y1 = +l2}`;
  }
  arcTo(e, t2, s, i, a) {
    if (e = +e, t2 = +t2, s = +s, i = +i, (a = +a) < 0)
      throw new Error(`negative radius: ${a}`);
    let l2 = this._x1, r = this._y1, n = s - e, o = i - t2, h = l2 - e, u = r - t2, d = h * h + u * u;
    if (null === this._x1)
      this._append`M${this._x1 = e},${this._y1 = t2}`;
    else if (d > O)
      if (Math.abs(u * n - o * h) > O && a) {
        let c = s - l2, m2 = i - r, p = n * n + o * o, b = c * c + m2 * m2, f2 = Math.sqrt(p), g2 = Math.sqrt(d), _2 = a * Math.tan((T - Math.acos((p + d - b) / (2 * f2 * g2))) / 2), v2 = _2 / g2, y2 = _2 / f2;
        Math.abs(v2 - 1) > O && this._append`L${e + v2 * h},${t2 + v2 * u}`, this._append`A${a},${a},0,0,${+(u * c > h * m2)},${this._x1 = e + y2 * n},${this._y1 = t2 + y2 * o}`;
      } else
        this._append`L${this._x1 = e},${this._y1 = t2}`;
    else
      ;
  }
  arc(e, t2, s, i, a, l2) {
    if (e = +e, t2 = +t2, l2 = !!l2, (s = +s) < 0)
      throw new Error(`negative radius: ${s}`);
    let r = s * Math.cos(i), n = s * Math.sin(i), o = e + r, h = t2 + n, u = 1 ^ l2, d = l2 ? i - a : a - i;
    null === this._x1 ? this._append`M${o},${h}` : (Math.abs(this._x1 - o) > O || Math.abs(this._y1 - h) > O) && this._append`L${o},${h}`, s && (d < 0 && (d = d % M + M), d > $ ? this._append`A${s},${s},0,1,${u},${e - r},${t2 - n}A${s},${s},0,1,${u},${this._x1 = o},${this._y1 = h}` : d > O && this._append`A${s},${s},0,${+(d >= T)},${u},${this._x1 = e + s * Math.cos(a)},${this._y1 = t2 + s * Math.sin(a)}`);
  }
  rect(e, t2, s, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t2}h${s = +s}v${+i}h${-s}Z`;
  }
  toString() {
    return this._;
  }
}
function V(e) {
  let t2 = 3;
  return e.digits = function(s) {
    if (!arguments.length)
      return t2;
    if (null == s)
      t2 = null;
    else {
      const e2 = Math.floor(s);
      if (!(e2 >= 0))
        throw new RangeError(`invalid digits: ${s}`);
      t2 = e2;
    }
    return e;
  }, () => new F(t2);
}
class N extends Qe {
  constructor() {
    super(...arguments), Object.defineProperty(this, "chartContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(Qe.new(this._root, { width: Y, height: Y, interactiveChildren: false })) }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { interactiveChildren: false, isMeasured: false, position: "absolute", width: Y, height: Y }) });
  }
}
Object.defineProperty(N, "className", { enumerable: true, configurable: true, writable: true, value: "Chart" }), Object.defineProperty(N, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([N.className]) });
class U extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "seriesContainer", { enumerable: true, configurable: true, writable: true, value: Qe.new(this._root, { width: Y, height: Y, isMeasured: false }) }), Object.defineProperty(this, "series", { enumerable: true, configurable: true, writable: true, value: new W() });
  }
  _afterNew() {
    super._afterNew(), this._disposers.push(this.series);
    const e = this.seriesContainer.children;
    this._disposers.push(this.series.events.onAll((t2) => {
      if ("clear" === t2.type) {
        m(t2.oldValues, (e3) => {
          this._removeSeries(e3);
        });
        const e2 = this.get("colors");
        e2 && e2.reset();
      } else if ("push" === t2.type)
        e.moveValue(t2.newValue), this._processSeries(t2.newValue);
      else if ("setIndex" === t2.type)
        e.setIndex(t2.index, t2.newValue), this._processSeries(t2.newValue);
      else if ("insertIndex" === t2.type)
        e.insertIndex(t2.index, t2.newValue), this._processSeries(t2.newValue);
      else if ("removeIndex" === t2.type)
        this._removeSeries(t2.oldValue);
      else {
        if ("moveIndex" !== t2.type)
          throw new Error("Unknown IListEvent type");
        e.moveValue(t2.value, t2.newIndex), this._processSeries(t2.value);
      }
    }));
  }
  _processSeries(e) {
    e.chart = this, e._placeBulletsContainer(this);
  }
  _removeSeries(e) {
    e.isDisposed() || (this.seriesContainer.children.removeValue(e), e._removeBulletsContainer());
  }
}
Object.defineProperty(U, "className", { enumerable: true, configurable: true, writable: true, value: "SerialChart" }), Object.defineProperty(U, "classNames", { enumerable: true, configurable: true, writable: true, value: N.classNames.concat([U.className]) });
class B extends P {
}
Object.defineProperty(B, "className", { enumerable: true, configurable: true, writable: true, value: "Tick" }), Object.defineProperty(B, "classNames", { enumerable: true, configurable: true, writable: true, value: P.classNames.concat([B.className]) });
export {
  B,
  D,
  I,
  U,
  V,
  _,
  g,
  k
};
