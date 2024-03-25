import { ib as n } from "./chunk-ejFG4zJ0.js";
import { i as ii, b as Ke, az as Me, w as w$1, N as N$1, aA as ee, r, aB as B, C as g$1, a3 as zt, ad as e, aC as Zt, al as ri, aD as ie, a0 as y$1 } from "./chunk-qsKdKwKn.js";
class b extends ee {
  constructor() {
    super(...arguments), Object.defineProperty(this, "processor", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  incrementRef() {
  }
  decrementRef() {
  }
  _onPush(e2) {
    this.processor && this.processor.processRow(e2), super._onPush(e2);
  }
  _onInsertIndex(e2, t) {
    this.processor && this.processor.processRow(t), super._onInsertIndex(e2, t);
  }
  _onSetIndex(e2, t, s) {
    this.processor && this.processor.processRow(s), super._onSetIndex(e2, t, s);
  }
}
class g extends Me {
  constructor(e2, t, s) {
    super(s), Object.defineProperty(this, "component", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "dataContext", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "bullets", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "open", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "close", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.dataContext = t, this.component = e2, this._settings.visible = true, this._checkDirty();
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
  show(e2) {
    this.setRaw("visible", true), this.component && this.component.showDataItem(this, e2);
  }
  hide(e2) {
    this.setRaw("visible", false), this.component && this.component.hideDataItem(this, e2);
  }
  isHidden() {
    return !this.get("visible");
  }
}
class _ extends ii {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_data", { enumerable: true, configurable: true, writable: true, value: new b() }), Object.defineProperty(this, "_dataItems", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_mainDataItems", { enumerable: true, configurable: true, writable: true, value: this._dataItems }), Object.defineProperty(this, "valueFields", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "fields", { enumerable: true, configurable: true, writable: true, value: ["id"] }), Object.defineProperty(this, "_valueFields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valueFieldsF", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_fields", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_fieldsF", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_valuesDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataChanged", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataGrouped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "inited", { enumerable: true, configurable: true, writable: true, value: false });
  }
  set data(e2) {
    e2.incrementRef(), this._data.decrementRef(), this._data = e2;
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
    super._afterNew(), this._data.incrementRef(), this._updateFields(), this._disposers.push(this.data.events.onAll((e2) => {
      const t = this._mainDataItems;
      if (this.markDirtyValues(), this._markDirtyGroup(), this._dataChanged = true, "clear" === e2.type)
        w$1(t, (e3) => {
          e3.dispose();
        }), t.length = 0, this._onDataClear();
      else if ("push" === e2.type) {
        const s = new g(this, e2.newValue, this._makeDataItem(e2.newValue));
        t.push(s), this.processDataItem(s);
      } else if ("setIndex" === e2.type) {
        const s = t[e2.index], i = this._makeDataItem(e2.newValue);
        s.bullets && 0 == s.bullets.length && (s.bullets = void 0), N$1(i).forEach((e3) => {
          s.animate({ key: e3, to: i[e3], duration: this.get("interpolationDuration", 0), easing: this.get("interpolationEasing") });
        }), s.dataContext = e2.newValue;
      } else if ("insertIndex" === e2.type) {
        const s = new g(this, e2.newValue, this._makeDataItem(e2.newValue));
        t.splice(e2.index, 0, s), this.processDataItem(s);
      } else if ("removeIndex" === e2.type) {
        t[e2.index].dispose(), t.splice(e2.index, 1);
      } else {
        if ("moveIndex" !== e2.type)
          throw new Error("Unknown IStreamEvent type");
        {
          const s = t[e2.oldIndex];
          t.splice(e2.oldIndex, 1), t.splice(e2.newIndex, 0, s);
        }
      }
      this._afterDataChange();
    }));
  }
  _updateFields() {
    this.valueFields && (this._valueFields = [], this._valueFieldsF = {}, w$1(this.valueFields, (e2) => {
      this.get(e2 + "Field") && (this._valueFields.push(e2), this._valueFieldsF[e2] = { fieldKey: e2 + "Field", workingKey: e2 + "Working" });
    })), this.fields && (this._fields = [], this._fieldsF = {}, w$1(this.fields, (e2) => {
      this.get(e2 + "Field") && (this._fields.push(e2), this._fieldsF[e2] = e2 + "Field");
    }));
  }
  get dataItems() {
    return this._dataItems;
  }
  processDataItem(e2) {
  }
  _makeDataItem(e2) {
    const t = {};
    return this._valueFields && w$1(this._valueFields, (s) => {
      const i = this.get(this._valueFieldsF[s].fieldKey);
      t[s] = e2[i], t[this._valueFieldsF[s].workingKey] = t[s];
    }), this._fields && w$1(this._fields, (s) => {
      const i = this.get(this._fieldsF[s]);
      t[s] = e2[i];
    }), t;
  }
  makeDataItem(e2) {
    let t = new g(this, void 0, e2);
    return this.processDataItem(t), t;
  }
  pushDataItem(e2) {
    const t = this.makeDataItem(e2);
    return this._mainDataItems.push(t), t;
  }
  disposeDataItem(e2) {
  }
  showDataItem(t, s) {
    return n(this, void 0, void 0, function* () {
      t.set("visible", true);
    });
  }
  hideDataItem(t, s) {
    return n(this, void 0, void 0, function* () {
      t.set("visible", false);
    });
  }
  _clearDirty() {
    super._clearDirty(), this._valuesDirty = false;
  }
  _afterDataChange() {
  }
  _afterChanged() {
    if (super._afterChanged(), this._dataChanged) {
      const e2 = "datavalidated";
      this.events.isEnabled(e2) && this.events.dispatch(e2, { type: e2, target: this }), this._dataChanged = false;
    }
    this.inited = true;
  }
  markDirtyValues(e2) {
    this.markDirty(), this._valuesDirty = true;
  }
  _markDirtyGroup() {
    this._dataGrouped = false;
  }
  markDirtySize() {
    this._sizeDirty = true, this.markDirty();
  }
}
function v(e2) {
  return new Promise((t, s) => {
    setTimeout(t, e2);
  });
}
Object.defineProperty(_, "className", { enumerable: true, configurable: true, writable: true, value: "Component" }), Object.defineProperty(_, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([_.className]) });
let y = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2629742400, year: 31536e6 };
function w(e2, t) {
  return null == t && (t = 1), y[e2] * t;
}
function I(e2, t, s, i, a, l, n2) {
  if (!n2 || a) {
    let n3 = 0;
    switch (a || "millisecond" == t || (n3 = e2.getTimezoneOffset(), e2.setUTCMinutes(e2.getUTCMinutes() - n3)), t) {
      case "day":
        let t2 = e2.getUTCDate();
        if (s > 1) {
          if (l) {
            l = I(l, "day", 1);
            let t3 = e2.getTime() - l.getTime(), i2 = Math.floor(t3 / w("day") / s), a3 = w("day", i2 * s);
            e2.setTime(l.getTime() + a3 - n3 * w("minute"));
          }
        } else
          e2.setUTCDate(t2);
        e2.setUTCHours(0, 0, 0, 0);
        break;
      case "second":
        let a2 = e2.getUTCSeconds();
        s > 1 && (a2 = Math.floor(a2 / s) * s), e2.setUTCSeconds(a2, 0);
        break;
      case "millisecond":
        if (1 == s)
          return e2;
        let o = e2.getUTCMilliseconds();
        o = Math.floor(o / s) * s, e2.setUTCMilliseconds(o);
        break;
      case "hour":
        let h = e2.getUTCHours();
        s > 1 && (h = Math.floor(h / s) * s), e2.setUTCHours(h, 0, 0, 0);
        break;
      case "minute":
        let u = e2.getUTCMinutes();
        s > 1 && (u = Math.floor(u / s) * s), e2.setUTCMinutes(u, 0, 0);
        break;
      case "month":
        let d = e2.getUTCMonth();
        s > 1 && (d = Math.floor(d / s) * s), e2.setUTCMonth(d, 1), e2.setUTCHours(0, 0, 0, 0);
        break;
      case "year":
        let c = e2.getUTCFullYear();
        s > 1 && (c = Math.floor(c / s) * s), e2.setUTCFullYear(c, 0, 1), e2.setUTCHours(0, 0, 0, 0);
        break;
      case "week":
        let m = e2.getUTCDate(), p = e2.getUTCDay();
        g$1(i) || (i = 1), m = p >= i ? m - p + i : m - (7 + p) + i, e2.setUTCDate(m), e2.setUTCHours(0, 0, 0, 0);
    }
    if (!a && "millisecond" != t && (e2.setUTCMinutes(e2.getUTCMinutes() + n3), "day" == t || "week" == t || "month" == t || "year" == t)) {
      let t2 = e2.getTimezoneOffset();
      if (t2 != n3) {
        let s2 = t2 - n3;
        e2.setUTCMinutes(e2.getUTCMinutes() + s2);
      }
    }
    return e2;
  }
  {
    if (isNaN(e2.getTime()))
      return e2;
    let o = n2.offsetUTC(e2), h = e2.getTimezoneOffset(), u = n2.parseDate(e2), d = u.year, c = u.month, m = u.day, p = u.hour, f = u.minute, b2 = u.second, g2 = u.millisecond, _2 = u.weekday, v2 = o - h;
    switch (t) {
      case "day":
        if (s > 1 && l) {
          l = I(l, "day", 1, i, a, void 0, n2);
          let t2 = e2.getTime() - l.getTime(), r2 = Math.floor(t2 / w("day") / s), o2 = w("day", r2 * s);
          e2.setTime(l.getTime() + o2), u = n2.parseDate(e2), d = u.year, c = u.month, m = u.day;
        }
        p = 0, f = v2, b2 = 0, g2 = 0;
        break;
      case "second":
        f += v2, s > 1 && (b2 = Math.floor(b2 / s) * s), g2 = 0;
        break;
      case "millisecond":
        f += v2, s > 1 && (g2 = Math.floor(g2 / s) * s);
        break;
      case "hour":
        s > 1 && (p = Math.floor(p / s) * s), f = v2, b2 = 0, g2 = 0;
        break;
      case "minute":
        s > 1 && (f = Math.floor(f / s) * s), f += v2, b2 = 0, g2 = 0;
        break;
      case "month":
        s > 1 && (c = Math.floor(c / s) * s), m = 1, p = 0, f = v2, b2 = 0, g2 = 0;
        break;
      case "year":
        s > 1 && (d = Math.floor(d / s) * s), c = 0, m = 1, p = 0, f = v2, b2 = 0, g2 = 0;
        break;
      case "week":
        g$1(i) || (i = 1), m = _2 >= i ? m - _2 + i : m - (7 + _2) + i, p = 0, f = v2, b2 = 0, g2 = 0;
    }
    let y2 = (e2 = new Date(d, c, m, p, f, b2, g2)).getTimezoneOffset(), D2 = n2.offsetUTC(e2) - y2;
    return D2 != v2 && e2.setTime(e2.getTime() + 6e4 * (D2 - v2)), e2;
  }
}
class D extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_aggregatesCalculated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_selectionAggregatesCalculated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dataProcessed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_psi", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_pei", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "chart", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "bullets", { enumerable: true, configurable: true, writable: true, value: new ee() }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { width: r, height: r, position: "absolute" }) });
  }
  _afterNew() {
    this.valueFields.push("value", "customValue"), super._afterNew(), this.setPrivate("customData", {}), this._disposers.push(this.bullets.events.onAll((e2) => {
      if ("clear" === e2.type)
        this._handleBullets(this.dataItems);
      else if ("push" === e2.type)
        this._handleBullets(this.dataItems);
      else if ("setIndex" === e2.type)
        this._handleBullets(this.dataItems);
      else if ("insertIndex" === e2.type)
        this._handleBullets(this.dataItems);
      else if ("removeIndex" === e2.type)
        this._handleBullets(this.dataItems);
      else {
        if ("moveIndex" !== e2.type)
          throw new Error("Unknown IListEvent type");
        this._handleBullets(this.dataItems);
      }
    }));
  }
  _dispose() {
    this.bulletsContainer.dispose(), super._dispose();
  }
  startIndex() {
    let e2 = this.dataItems.length;
    return Math.min(this.getPrivate("startIndex", 0), e2);
  }
  endIndex() {
    let e2 = this.dataItems.length;
    return Math.min(this.getPrivate("endIndex", e2), e2);
  }
  _handleBullets(e2) {
    w$1(e2, (e3) => {
      const t = e3.bullets;
      t && (w$1(t, (e4) => {
        e4.dispose();
      }), e3.bullets = void 0);
    }), this.markDirtyValues();
  }
  getDataItemById(e2) {
    return B(this.dataItems, (t) => t.get("id") == e2);
  }
  _makeBullets(e2) {
    this._shouldMakeBullet(e2) && (e2.bullets = [], this.bullets.each((t) => {
      this._makeBullet(e2, t);
    }));
  }
  _shouldMakeBullet(e2) {
    return true;
  }
  _makeBullet(e2, t, s) {
    const i = t(this._root, this, e2);
    return i && (i._index = s, this._makeBulletReal(e2, i)), i;
  }
  _makeBulletReal(e2, t) {
    let s = t.get("sprite");
    s && (s._setDataItem(e2), s.setRaw("position", "absolute"), this.bulletsContainer.children.push(s)), t.series = this, e2.bullets.push(t);
  }
  addBullet(e2, t) {
    e2.bullets || (e2.bullets = []), t && this._makeBulletReal(e2, t);
  }
  _clearDirty() {
    super._clearDirty(), this._aggregatesCalculated = false, this._selectionAggregatesCalculated = false;
  }
  _prepareChildren() {
    super._prepareChildren();
    let e2 = this.startIndex(), t = this.endIndex();
    if (this.isDirty("name") && this.updateLegendValue(), this.isDirty("heatRules") && (this._valuesDirty = true), this.isPrivateDirty("baseValueSeries")) {
      const e3 = this.getPrivate("baseValueSeries");
      e3 && this._disposers.push(e3.onPrivate("startIndex", () => {
        this.markDirtyValues();
      }));
    }
    if (this.get("calculateAggregates") && (this._valuesDirty && !this._dataProcessed && (this._aggregatesCalculated || (this._calculateAggregates(0, this.dataItems.length), this._aggregatesCalculated = true, 0 != e2 && (this._psi = void 0))), this._psi == e2 && this._pei == t && !this.isPrivateDirty("adjustedStartIndex") || this._selectionAggregatesCalculated || (0 === e2 && t === this.dataItems.length && this._aggregatesCalculated || this._calculateAggregates(e2, t), this._selectionAggregatesCalculated = true)), this.isDirty("tooltip")) {
      let e3 = this.get("tooltip");
      e3 && (e3.hide(0), e3.set("tooltipTarget", this));
    }
    if (this.isDirty("fill") || this.isDirty("stroke")) {
      let e3;
      const t2 = this.get("legendDataItem");
      if (t2 && (e3 = t2.get("markerRectangle"), e3 && this.isVisible())) {
        if (this.isDirty("stroke")) {
          let t3 = this.get("stroke");
          e3.set("stroke", t3);
        }
        if (this.isDirty("fill")) {
          let t3 = this.get("fill");
          e3.set("fill", t3);
        }
      }
      this.updateLegendMarker(void 0);
    }
    if (this.bullets.length > 0) {
      let e3 = this.startIndex(), t2 = this.endIndex();
      t2 < this.dataItems.length && t2++;
      for (let s = e3; s < t2; s++) {
        let e4 = this.dataItems[s];
        e4.bullets || this._makeBullets(e4);
      }
    }
  }
  _adjustStartIndex(e2) {
    return e2;
  }
  _calculateAggregates(e2, t) {
    let s = this._valueFields;
    if (!s)
      throw new Error("No value fields are set for the series.");
    const i = {}, l = {}, r2 = {}, n2 = {}, o = {}, h = {}, u = {}, d = {}, c = {};
    w$1(s, (e3) => {
      i[e3] = 0, l[e3] = 0, r2[e3] = 0;
    }), w$1(s, (s2) => {
      let a = s2 + "Change", m = s2 + "ChangePercent", p = s2 + "ChangePrevious", f = s2 + "ChangePreviousPercent", b2 = s2 + "ChangeSelection", g2 = s2 + "ChangeSelectionPercent", _2 = "valueY";
      "valueX" != s2 && "openValueX" != s2 && "lowValueX" != s2 && "highValueX" != s2 || (_2 = "valueX");
      const v2 = this.getPrivate("baseValueSeries"), y2 = this.getPrivate("adjustedStartIndex", e2);
      for (let w2 = y2; w2 < t; w2++) {
        const t2 = this.dataItems[w2];
        let y3 = t2.get(s2);
        null != y3 && (r2[s2]++, i[s2] += y3, l[s2] += Math.abs(y3), d[s2] = i[s2] / r2[s2], (n2[s2] > y3 || null == n2[s2]) && (n2[s2] = y3), (o[s2] < y3 || null == o[s2]) && (o[s2] = y3), u[s2] = y3, null == h[s2] && (h[s2] = y3, c[s2] = y3, v2 && (h[_2] = v2._getBase(_2))), 0 === e2 && (t2.setRaw(a, y3 - h[_2]), t2.setRaw(m, (y3 - h[_2]) / h[_2] * 100)), t2.setRaw(p, y3 - c[_2]), t2.setRaw(f, (y3 - c[_2]) / c[_2] * 100), t2.setRaw(b2, y3 - h[_2]), t2.setRaw(g2, (y3 - h[_2]) / h[_2] * 100), c[s2] = y3);
      }
      if (t < this.dataItems.length - 1) {
        const e3 = this.dataItems[t];
        let i2 = e3.get(s2);
        e3.setRaw(p, i2 - c[_2]), e3.setRaw(f, (i2 - c[_2]) / c[_2] * 100), e3.setRaw(b2, i2 - h[_2]), e3.setRaw(g2, (i2 - h[_2]) / h[_2] * 100);
      }
      e2 > 0 && e2--, delete c[s2];
      for (let t2 = e2; t2 < y2; t2++) {
        const e3 = this.dataItems[t2];
        let i2 = e3.get(s2);
        null == c[s2] && (c[s2] = i2), null != i2 && (e3.setRaw(p, i2 - c[_2]), e3.setRaw(f, (i2 - c[_2]) / c[_2] * 100), e3.setRaw(b2, i2 - h[_2]), e3.setRaw(g2, (i2 - h[_2]) / h[_2] * 100), c[s2] = i2);
      }
    }), w$1(s, (e3) => {
      this.setPrivate(e3 + "AverageSelection", d[e3]), this.setPrivate(e3 + "CountSelection", r2[e3]), this.setPrivate(e3 + "SumSelection", i[e3]), this.setPrivate(e3 + "AbsoluteSumSelection", l[e3]), this.setPrivate(e3 + "LowSelection", n2[e3]), this.setPrivate(e3 + "HighSelection", o[e3]), this.setPrivate(e3 + "OpenSelection", h[e3]), this.setPrivate(e3 + "CloseSelection", u[e3]);
    }), 0 === e2 && t === this.dataItems.length && w$1(s, (e3) => {
      this.setPrivate(e3 + "Average", d[e3]), this.setPrivate(e3 + "Count", r2[e3]), this.setPrivate(e3 + "Sum", i[e3]), this.setPrivate(e3 + "AbsoluteSum", l[e3]), this.setPrivate(e3 + "Low", n2[e3]), this.setPrivate(e3 + "High", o[e3]), this.setPrivate(e3 + "Open", h[e3]), this.setPrivate(e3 + "Close", u[e3]);
    });
  }
  _updateChildren() {
    super._updateChildren(), this._psi = this.startIndex(), this._pei = this.endIndex(), this.isDirty("visible") && this.bulletsContainer.set("visible", this.get("visible"));
    const e$1 = this.get("heatRules");
    if (this._valuesDirty && e$1 && e$1.length > 0 && w$1(e$1, (e$12) => {
      const t = e$12.minValue || this.getPrivate(e$12.dataField + "Low") || 0, s = e$12.maxValue || this.getPrivate(e$12.dataField + "High") || 0;
      w$1(e$12.target._entities, (i) => {
        const a = i.dataItem.get(e$12.dataField);
        if (g$1(a))
          if (e$12.customFunction)
            e$12.customFunction.call(this, i, t, s, a);
          else {
            let l, n2;
            l = e$12.logarithmic ? (Math.log(a) * Math.LOG10E - Math.log(t) * Math.LOG10E) / (Math.log(s) * Math.LOG10E - Math.log(t) * Math.LOG10E) : (a - t) / (s - t), !g$1(a) || g$1(l) && Math.abs(l) != 1 / 0 || (l = 0.5), g$1(e$12.min) ? n2 = e$12.min + (e$12.max - e$12.min) * l : e$12.min instanceof zt ? n2 = zt.interpolate(l, e$12.min, e$12.max) : e$12.min instanceof e && (n2 = Zt(l, e$12.min, e$12.max)), i.set(e$12.key, n2);
            const o = i.states;
            if (o) {
              const t2 = o.lookup("default");
              t2 && t2.set(e$12.key, n2);
            }
          }
        else {
          e$12.neutral && i.set(e$12.key, e$12.neutral);
          const t2 = i.states;
          if (t2) {
            const s2 = t2.lookup("default");
            s2 && s2.set(e$12.key, e$12.neutral);
          }
        }
      });
    }), this.get("visible")) {
      let e2 = this.dataItems.length, t = this.startIndex(), s = this.endIndex();
      s < e2 && s++, t > 0 && t--;
      for (let i = 0; i < t; i++)
        this._hideBullets(this.dataItems[i]);
      for (let i = t; i < s; i++)
        this._positionBullets(this.dataItems[i]);
      for (let i = s; i < e2; i++)
        this._hideBullets(this.dataItems[i]);
    }
  }
  _positionBullets(e2) {
    e2.bullets && w$1(e2.bullets, (e3) => {
      this._positionBullet(e3);
      const t = e3.get("sprite");
      e3.get("dynamic") && (t && (t._markDirtyKey("fill"), t.markDirtySize()), t instanceof ii && t.walkChildren((e4) => {
        e4._markDirtyKey("fill"), e4.markDirtySize(), e4 instanceof ri && e4.text.markDirtyText();
      })), t instanceof ri && t.get("populateText") && t.text.markDirtyText();
    });
  }
  _hideBullets(e2) {
    e2.bullets && w$1(e2.bullets, (e3) => {
      let t = e3.get("sprite");
      t && t.setPrivate("visible", false);
    });
  }
  _positionBullet(e2) {
  }
  _placeBulletsContainer(e2) {
    e2.bulletsContainer.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
    const e2 = this.bulletsContainer;
    e2.parent && e2.parent.children.removeValue(e2);
  }
  disposeDataItem(e2) {
    const t = e2.bullets;
    t && w$1(t, (e3) => {
      e3.dispose();
    });
  }
  _getItemReaderLabel() {
    return "";
  }
  showDataItem(t, s) {
    const i = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return n(this, void 0, void 0, function* () {
      const e2 = [i.showDataItem.call(this, t, s)], l = t.bullets;
      l && w$1(l, (t2) => {
        const i2 = t2.get("sprite");
        i2 && e2.push(i2.show(s));
      }), yield Promise.all(e2);
    });
  }
  hideDataItem(t, s) {
    const i = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return n(this, void 0, void 0, function* () {
      const e2 = [i.hideDataItem.call(this, t, s)], l = t.bullets;
      l && w$1(l, (t2) => {
        const i2 = t2.get("sprite");
        i2 && e2.push(i2.hide(s));
      }), yield Promise.all(e2);
    });
  }
  _sequencedShowHide(t, s) {
    return n(this, void 0, void 0, function* () {
      if (this.get("sequencedInterpolation"))
        if (g$1(s) || (s = this.get("interpolationDuration", 0)), s > 0) {
          const i = this.startIndex(), a = this.endIndex();
          yield Promise.all(y$1(this.dataItems, (l, r2) => n(this, void 0, void 0, function* () {
            let e2 = s || 0;
            (r2 < i - 10 || r2 > a + 10) && (e2 = 0);
            let n2 = this.get("sequencedDelay", 0) + e2 / (a - i);
            yield v(n2 * (r2 - i)), t ? yield this.showDataItem(l, e2) : yield this.hideDataItem(l, e2);
          })));
        } else
          yield Promise.all(y$1(this.dataItems, (e2) => t ? this.showDataItem(e2, 0) : this.hideDataItem(e2, 0)));
    });
  }
  updateLegendValue(e2) {
    if (e2) {
      const t = e2.get("legendDataItem");
      if (t) {
        const s = t.get("valueLabel");
        if (s) {
          const t2 = s.text;
          let i2 = "";
          s._setDataItem(e2), i2 = this.get("legendValueText", t2.get("text", "")), s.set("text", i2), t2.markDirtyText();
        }
        const i = t.get("label");
        if (i) {
          const t2 = i.text;
          let s2 = "";
          i._setDataItem(e2), s2 = this.get("legendLabelText", t2.get("text", "")), i.set("text", s2), t2.markDirtyText();
        }
      }
    }
  }
  updateLegendMarker(e2) {
  }
  _onHide() {
    super._onHide();
    const e2 = this.getTooltip();
    e2 && e2.hide();
  }
  hoverDataItem(e2) {
  }
  unhoverDataItem(e2) {
  }
  _getBase(e2) {
    const t = this.dataItems[this.startIndex()];
    return t ? t.get(e2) : 0;
  }
}
function x(e2, t) {
  for (let s = 0, i = t.length; s < i; s++) {
    const i2 = t[s];
    if (i2.length > 0) {
      let t2 = i2[0];
      if (t2.length > 0) {
        let s2 = t2[0];
        e2.moveTo(s2.x, s2.y);
        for (let t3 = 0, a = i2.length; t3 < a; t3++)
          C(e2, i2[t3]);
      }
    }
  }
}
function C(e2, t) {
  for (let s = 0, i = t.length; s < i; s++) {
    const i2 = t[s];
    e2.lineTo(i2.x, i2.y);
  }
}
Object.defineProperty(D, "className", { enumerable: true, configurable: true, writable: true, value: "Series" }), Object.defineProperty(D, "classNames", { enumerable: true, configurable: true, writable: true, value: _.classNames.concat([D.className]) });
class P extends Ke {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const e2 = this.get("points"), t = this.get("segments");
      if (e2 && e2.length > 0) {
        let t2 = e2[0];
        this._display.moveTo(t2.x, t2.y), x(this._display, [[e2]]);
      } else if (t)
        x(this._display, t);
      else if (!this.get("draw")) {
        let e3 = this.width(), t2 = this.height();
        this._display.moveTo(0, 0), this._display.lineTo(e3, t2);
      }
    }
  }
}
function k(e2) {
  return function() {
    return e2;
  };
}
Object.defineProperty(P, "className", { enumerable: true, configurable: true, writable: true, value: "Line" }), Object.defineProperty(P, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([P.className]) });
const T = Math.PI, M = 2 * T, O = 1e-6, $ = M - O;
function j(e2) {
  this._ += e2[0];
  for (let t = 1, s = e2.length; t < s; ++t)
    this._ += arguments[t] + e2[t];
}
function S(e2) {
  let t = Math.floor(e2);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e2}`);
  if (t > 15)
    return j;
  const s = 10 ** t;
  return function(e3) {
    this._ += e3[0];
    for (let t2 = 1, i = e3.length; t2 < i; ++t2)
      this._ += Math.round(arguments[t2] * s) / s + e3[t2];
  };
}
class F {
  constructor(e2) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == e2 ? j : S(e2);
  }
  moveTo(e2, t) {
    this._append`M${this._x0 = this._x1 = +e2},${this._y0 = this._y1 = +t}`;
  }
  closePath() {
    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e2, t) {
    this._append`L${this._x1 = +e2},${this._y1 = +t}`;
  }
  quadraticCurveTo(e2, t, s, i) {
    this._append`Q${+e2},${+t},${this._x1 = +s},${this._y1 = +i}`;
  }
  bezierCurveTo(e2, t, s, i, a, l) {
    this._append`C${+e2},${+t},${+s},${+i},${this._x1 = +a},${this._y1 = +l}`;
  }
  arcTo(e2, t, s, i, a) {
    if (e2 = +e2, t = +t, s = +s, i = +i, (a = +a) < 0)
      throw new Error(`negative radius: ${a}`);
    let l = this._x1, r2 = this._y1, n2 = s - e2, o = i - t, h = l - e2, u = r2 - t, d = h * h + u * u;
    if (null === this._x1)
      this._append`M${this._x1 = e2},${this._y1 = t}`;
    else if (d > O)
      if (Math.abs(u * n2 - o * h) > O && a) {
        let c = s - l, m = i - r2, p = n2 * n2 + o * o, f = c * c + m * m, b2 = Math.sqrt(p), g2 = Math.sqrt(d), _2 = a * Math.tan((T - Math.acos((p + d - f) / (2 * b2 * g2))) / 2), v2 = _2 / g2, y2 = _2 / b2;
        Math.abs(v2 - 1) > O && this._append`L${e2 + v2 * h},${t + v2 * u}`, this._append`A${a},${a},0,0,${+(u * c > h * m)},${this._x1 = e2 + y2 * n2},${this._y1 = t + y2 * o}`;
      } else
        this._append`L${this._x1 = e2},${this._y1 = t}`;
    else
      ;
  }
  arc(e2, t, s, i, a, l) {
    if (e2 = +e2, t = +t, l = !!l, (s = +s) < 0)
      throw new Error(`negative radius: ${s}`);
    let r2 = s * Math.cos(i), n2 = s * Math.sin(i), o = e2 + r2, h = t + n2, u = 1 ^ l, d = l ? i - a : a - i;
    null === this._x1 ? this._append`M${o},${h}` : (Math.abs(this._x1 - o) > O || Math.abs(this._y1 - h) > O) && this._append`L${o},${h}`, s && (d < 0 && (d = d % M + M), d > $ ? this._append`A${s},${s},0,1,${u},${e2 - r2},${t - n2}A${s},${s},0,1,${u},${this._x1 = o},${this._y1 = h}` : d > O && this._append`A${s},${s},0,${+(d >= T)},${u},${this._x1 = e2 + s * Math.cos(a)},${this._y1 = t + s * Math.sin(a)}`);
  }
  rect(e2, t, s, i) {
    this._append`M${this._x0 = this._x1 = +e2},${this._y0 = this._y1 = +t}h${s = +s}v${+i}h${-s}Z`;
  }
  toString() {
    return this._;
  }
}
function V(e2) {
  let t = 3;
  return e2.digits = function(s) {
    if (!arguments.length)
      return t;
    if (null == s)
      t = null;
    else {
      const e3 = Math.floor(s);
      if (!(e3 >= 0))
        throw new RangeError(`invalid digits: ${s}`);
      t = e3;
    }
    return e2;
  }, () => new F(t);
}
class N extends ii {
  constructor() {
    super(...arguments), Object.defineProperty(this, "chartContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ii.new(this._root, { width: r, height: r, interactiveChildren: false })) }), Object.defineProperty(this, "bulletsContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { interactiveChildren: false, isMeasured: false, position: "absolute", width: r, height: r }) });
  }
}
Object.defineProperty(N, "className", { enumerable: true, configurable: true, writable: true, value: "Chart" }), Object.defineProperty(N, "classNames", { enumerable: true, configurable: true, writable: true, value: ii.classNames.concat([N.className]) });
class R extends N {
  constructor() {
    super(...arguments), Object.defineProperty(this, "seriesContainer", { enumerable: true, configurable: true, writable: true, value: ii.new(this._root, { width: r, height: r, isMeasured: false }) }), Object.defineProperty(this, "series", { enumerable: true, configurable: true, writable: true, value: new ie() });
  }
  _afterNew() {
    super._afterNew(), this._disposers.push(this.series);
    const e2 = this.seriesContainer.children;
    this._disposers.push(this.series.events.onAll((t) => {
      if ("clear" === t.type) {
        w$1(t.oldValues, (e4) => {
          this._removeSeries(e4);
        });
        const e3 = this.get("colors");
        e3 && e3.reset();
      } else if ("push" === t.type)
        e2.moveValue(t.newValue), this._processSeries(t.newValue);
      else if ("setIndex" === t.type)
        e2.setIndex(t.index, t.newValue), this._processSeries(t.newValue);
      else if ("insertIndex" === t.type)
        e2.insertIndex(t.index, t.newValue), this._processSeries(t.newValue);
      else if ("removeIndex" === t.type)
        this._removeSeries(t.oldValue);
      else {
        if ("moveIndex" !== t.type)
          throw new Error("Unknown IListEvent type");
        e2.moveValue(t.value, t.newIndex), this._processSeries(t.value);
      }
    }));
  }
  _processSeries(e2) {
    e2.chart = this, e2._placeBulletsContainer(this);
  }
  _removeSeries(e2) {
    e2.isDisposed() || (this.seriesContainer.children.removeValue(e2), e2._removeBulletsContainer());
  }
}
Object.defineProperty(R, "className", { enumerable: true, configurable: true, writable: true, value: "SerialChart" }), Object.defineProperty(R, "classNames", { enumerable: true, configurable: true, writable: true, value: N.classNames.concat([R.className]) });
class U extends P {
}
Object.defineProperty(U, "className", { enumerable: true, configurable: true, writable: true, value: "Tick" }), Object.defineProperty(U, "classNames", { enumerable: true, configurable: true, writable: true, value: P.classNames.concat([U.className]) });
export {
  D,
  I,
  R,
  U,
  V,
  _,
  g,
  k
};
