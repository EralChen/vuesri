import { ho as t } from "./chunk-KFNcxJaF.js";
function e(t2) {
  return Number(t2) !== t2;
}
function i(t2) {
  return {}.toString.call(t2);
}
function s(t2) {
  if (null != t2 && !l(t2)) {
    let i2 = Number(t2);
    return e(i2) && h(t2) && "" != t2 ? s(t2.replace(/[^0-9.\-]+/g, "")) : i2;
  }
  return t2;
}
function r(t2) {
  if (o(t2))
    return new Date(t2);
  if (l(t2))
    return new Date(t2);
  {
    let e2 = Number(t2);
    return l(e2) ? new Date(e2) : new Date(t2);
  }
}
function n(t2) {
  if (e(t2))
    return "NaN";
  if (t2 === 1 / 0)
    return "Infinity";
  if (t2 === -1 / 0)
    return "-Infinity";
  if (0 === t2 && 1 / t2 == -1 / 0)
    return "-0";
  let i2 = t2 < 0;
  t2 = Math.abs(t2);
  let s2, r2 = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + t2), n2 = r2[1], o2 = r2[2] || "";
  if (void 0 === r2[3])
    s2 = "" === o2 ? n2 : n2 + "." + o2;
  else {
    let e2 = +r2[3];
    if (t2 < 1) {
      s2 = "0." + a("0", e2 - 1) + n2 + o2;
    } else {
      let t3 = e2 - o2.length;
      s2 = 0 === t3 ? n2 + o2 : t3 < 0 ? n2 + o2.slice(0, t3) + "." + o2.slice(t3) : n2 + o2 + a("0", t3);
    }
  }
  return i2 ? "-" + s2 : s2;
}
function a(t2, e2) {
  return new Array(e2 + 1).join(t2);
}
function o(t2) {
  return "[object Date]" === i(t2);
}
function h(t2) {
  return "string" == typeof t2;
}
function l(t2) {
  return "number" == typeof t2 && Number(t2) == t2;
}
function d(t2) {
  return "object" == typeof t2 && null !== t2;
}
const u = "__§§§__", p = "__§§§§__";
function c(t2, e2) {
  const i2 = t2.length;
  for (let s2 = 0; s2 < i2; ++s2)
    if (t2[s2] === e2)
      return s2;
  return -1;
}
function g(t2, e2) {
  const i2 = t2.length;
  for (let s2 = 0; s2 < i2; ++s2)
    if (e2(t2[s2]))
      return true;
  return false;
}
function _(t2, e2) {
  const i2 = t2.length, s2 = new Array(i2);
  for (let r2 = 0; r2 < i2; ++r2)
    s2[r2] = e2(t2[r2], r2);
  return s2;
}
function m(t2, e2) {
  const i2 = t2.length;
  for (let s2 = 0; s2 < i2; ++s2)
    e2(t2[s2], s2);
}
function f(t2, e2) {
  let i2 = t2.length;
  for (; i2 > 0; )
    --i2, e2(t2[i2], i2);
}
function b(t2, e2) {
  const i2 = t2.length;
  for (let s2 = 0; s2 < i2 && e2(t2[s2], s2); ++s2)
    ;
}
function v(t2, e2) {
  let i2 = false, s2 = 0;
  for (; ; ) {
    if (s2 = t2.indexOf(e2, s2), -1 === s2)
      return i2;
    i2 = true, t2.splice(s2, 1);
  }
}
function y(t2, e2) {
  let i2 = t2.indexOf(e2);
  return -1 !== i2 && (t2.splice(i2, 1), true);
}
function w(t2, e2, i2) {
  let s2 = c(t2, e2);
  -1 !== s2 && k(t2, s2), null == i2 ? t2.push(e2) : x(t2, i2, e2);
}
function P(t2, e2) {
  -1 === t2.indexOf(e2) && t2.push(e2);
}
function D(t2) {
  const e2 = t2.length, i2 = new Array(e2);
  for (let s2 = 0; s2 < e2; ++s2)
    i2[s2] = t2[s2];
  return i2;
}
function x(t2, e2, i2) {
  t2.splice(e2, 0, i2);
}
function k(t2, e2) {
  t2.splice(e2, 1);
}
function O(t2, e2) {
  const i2 = t2.length;
  for (let s2 = 0; s2 < i2; ++s2)
    if (e2(t2[s2], s2))
      return s2;
  return -1;
}
function T(t2, e2) {
  let i2 = t2.length;
  for (; i2 > 0; )
    if (--i2, e2(t2[i2], i2))
      return i2;
  return -1;
}
function S(t2, e2) {
  const i2 = O(t2, e2);
  if (-1 !== i2)
    return t2[i2];
}
function j(t2, e2) {
  const i2 = T(t2, e2);
  if (-1 !== i2)
    return t2[i2];
}
function E(t2, e2) {
  let i2 = 0, s2 = t2.length, r2 = false;
  for (; i2 < s2; ) {
    const n2 = i2 + s2 >> 1, a2 = e2(t2[n2]);
    a2 < 0 ? i2 = n2 + 1 : 0 === a2 ? (r2 = true, i2 = n2 + 1) : s2 = n2;
  }
  return { found: r2, index: r2 ? i2 - 1 : i2 };
}
function C(t2, e2) {
  let i2 = 0, s2 = t2.length, r2 = false;
  for (; i2 < s2; ) {
    const n2 = i2 + s2 >> 1, a2 = e2(t2[n2]);
    a2 < 0 ? i2 = n2 + 1 : 0 === a2 ? (r2 = true, s2 = n2) : s2 = n2;
  }
  return { found: r2, index: i2 };
}
function M(t2, e2) {
  let i2 = t2.length;
  for (; i2 > 0; )
    --i2, e2(t2[i2]) || t2.splice(i2, 1);
}
class A {
  constructor() {
    Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposed = false;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
}
class B {
  constructor(t2) {
    Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dispose", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposed = false, this._dispose = t2;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
}
class I extends A {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  _dispose() {
    m(this._disposers, (t2) => {
      t2.dispose();
    });
  }
}
class H extends A {
  constructor(t2) {
    super(), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposers = t2;
  }
  _dispose() {
    m(this._disposers, (t2) => {
      t2.dispose();
    });
  }
  get disposers() {
    return this._disposers;
  }
}
class L extends B {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_counter", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  increment() {
    return ++this._counter, new B(() => {
      --this._counter, 0 === this._counter && this.dispose();
    });
  }
}
class N {
  constructor() {
    Object.defineProperty(this, "_listeners", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_killed", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disabled", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_iterating", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_enabled", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = true, this._disposed = false;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      const t2 = this._listeners;
      this._iterating = 1, this._listeners = null, this._disabled = null;
      try {
        m(t2, (t3) => {
          t3.disposer.dispose();
        });
      } finally {
        this._killed = null, this._iterating = null;
      }
    }
  }
  hasListeners() {
    return 0 !== this._listeners.length;
  }
  hasListenersByType(t2) {
    return g(this._listeners, (e2) => (null === e2.type || e2.type === t2) && !e2.killed);
  }
  enable() {
    this._enabled = true;
  }
  disable() {
    this._enabled = false;
  }
  enableType(t2) {
    delete this._disabled[t2];
  }
  disableType(t2, e2 = 1 / 0) {
    this._disabled[t2] = e2;
  }
  _removeListener(t2) {
    if (0 === this._iterating) {
      const e2 = this._listeners.indexOf(t2);
      if (-1 === e2)
        throw new Error("Invalid state: could not remove listener");
      this._listeners.splice(e2, 1);
    } else
      this._killed.push(t2);
  }
  _removeExistingListener(t2, e2, i2, s2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._eachListener((r2) => {
      r2.once !== t2 || r2.type !== e2 || void 0 !== i2 && r2.callback !== i2 || r2.context !== s2 || r2.disposer.dispose();
    });
  }
  isEnabled(t2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(t2) && void 0 === this._disabled[t2];
  }
  removeType(t2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._eachListener((e2) => {
      e2.type === t2 && e2.disposer.dispose();
    });
  }
  has(t2, e2, i2) {
    return -1 !== O(this._listeners, (s2) => true !== s2.once && s2.type === t2 && (void 0 === e2 || s2.callback === e2) && s2.context === i2);
  }
  _shouldDispatch(t2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    const e2 = this._disabled[t2];
    return l(e2) ? (e2 <= 1 ? delete this._disabled[t2] : --this._disabled[t2], false) : this._enabled;
  }
  _eachListener(t2) {
    ++this._iterating;
    try {
      m(this._listeners, t2);
    } finally {
      --this._iterating, 0 === this._iterating && 0 !== this._killed.length && (m(this._killed, (t3) => {
        this._removeListener(t3);
      }), this._killed.length = 0);
    }
  }
  dispatch(t2, e2) {
    this._shouldDispatch(t2) && this._eachListener((i2) => {
      i2.killed || null !== i2.type && i2.type !== t2 || i2.dispatch(t2, e2);
    });
  }
  _on(t2, e2, i2, s2, r2, n2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    this._removeExistingListener(t2, e2, i2, s2);
    const a2 = { type: e2, callback: i2, context: s2, shouldClone: r2, dispatch: n2, killed: false, once: t2, disposer: new B(() => {
      a2.killed = true, this._removeListener(a2);
    }) };
    return this._listeners.push(a2), a2;
  }
  onAll(t2, e2, i2 = true) {
    return this._on(false, null, t2, e2, i2, (i3, s2) => t2.call(e2, s2)).disposer;
  }
  on(t2, e2, i2, s2 = true) {
    return this._on(false, t2, e2, i2, s2, (t3, s3) => e2.call(i2, s3)).disposer;
  }
  once(t2, e2, i2, s2 = true) {
    const r2 = this._on(true, t2, e2, i2, s2, (t3, s3) => {
      r2.disposer.dispose(), e2.call(i2, s3);
    });
    return r2.disposer;
  }
  off(t2, e2, i2) {
    this._removeExistingListener(false, t2, e2, i2);
  }
  copyFrom(t2) {
    if (this._disposed)
      throw new Error("EventDispatcher is disposed");
    if (t2 === this)
      throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    const e2 = [];
    return m(t2._listeners, (t3) => {
      !t3.killed && t3.shouldClone && (null === t3.type ? e2.push(this.onAll(t3.callback, t3.context)) : t3.once ? e2.push(this.once(t3.type, t3.callback, t3.context)) : e2.push(this.on(t3.type, t3.callback, t3.context)));
    }), new H(e2);
  }
}
function R(t2, e2) {
  if (!(t2 >= 0 && t2 < e2))
    throw new Error("Index out of bounds: " + t2);
}
class F {
  constructor(t2 = []) {
    Object.defineProperty(this, "_values", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new N() }), this._values = t2;
  }
  get values() {
    return this._values;
  }
  contains(t2) {
    return -1 !== this._values.indexOf(t2);
  }
  removeValue(t2) {
    let e2 = 0, i2 = this._values.length;
    for (; e2 < i2; )
      this._values[e2] === t2 ? (this.removeIndex(e2), --i2) : ++e2;
  }
  indexOf(t2) {
    return c(this._values, t2);
  }
  get length() {
    return this._values.length;
  }
  hasIndex(t2) {
    return t2 >= 0 && t2 < this._values.length;
  }
  getIndex(t2) {
    return this._values[t2];
  }
  _onPush(t2) {
    this.events.isEnabled("push") && this.events.dispatch("push", { type: "push", target: this, newValue: t2 });
  }
  _onInsertIndex(t2, e2) {
    this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex", { type: "insertIndex", target: this, index: t2, newValue: e2 });
  }
  _onSetIndex(t2, e2, i2) {
    this.events.isEnabled("setIndex") && this.events.dispatch("setIndex", { type: "setIndex", target: this, index: t2, oldValue: e2, newValue: i2 });
  }
  _onRemoveIndex(t2, e2) {
    this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex", { type: "removeIndex", target: this, index: t2, oldValue: e2 });
  }
  _onMoveIndex(t2, e2, i2) {
    this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex", { type: "moveIndex", target: this, oldIndex: t2, newIndex: e2, value: i2 });
  }
  _onClear(t2) {
    this.events.isEnabled("clear") && this.events.dispatch("clear", { type: "clear", target: this, oldValues: t2 });
  }
  setIndex(t2, e2) {
    R(t2, this._values.length);
    const i2 = this._values[t2];
    return i2 !== e2 && (this._values[t2] = e2, this._onSetIndex(t2, i2, e2)), i2;
  }
  insertIndex(t2, e2) {
    return R(t2, this._values.length + 1), x(this._values, t2, e2), this._onInsertIndex(t2, e2), e2;
  }
  swap(t2, e2) {
    const i2 = this._values.length;
    if (R(t2, i2), R(e2, i2), t2 !== e2) {
      const i3 = this._values[t2], s2 = this._values[e2];
      this._values[t2] = s2, this._onSetIndex(t2, i3, s2), this._values[e2] = i3, this._onSetIndex(e2, s2, i3);
    }
  }
  removeIndex(t2) {
    R(t2, this._values.length);
    const e2 = this._values[t2];
    return k(this._values, t2), this._onRemoveIndex(t2, e2), e2;
  }
  moveValue(t2, e2) {
    let i2 = this.indexOf(t2);
    if (-1 !== i2)
      if (k(this._values, i2), null == e2) {
        const e3 = this._values.length;
        this._values.push(t2), this._onMoveIndex(i2, e3, t2);
      } else
        x(this._values, e2, t2), this._onMoveIndex(i2, e2, t2);
    else
      null == e2 ? (this._values.push(t2), this._onPush(t2)) : (x(this._values, e2, t2), this._onInsertIndex(e2, t2));
    return t2;
  }
  push(t2) {
    return this._values.push(t2), this._onPush(t2), t2;
  }
  unshift(t2) {
    return this.insertIndex(0, t2), t2;
  }
  pushAll(t2) {
    m(t2, (t3) => {
      this.push(t3);
    });
  }
  copyFrom(t2) {
    this.pushAll(t2._values);
  }
  pop() {
    return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  setAll(t2) {
    const e2 = this._values;
    this._values = [], this._onClear(e2), m(t2, (t3) => {
      this._values.push(t3), this._onPush(t3);
    });
  }
  clear() {
    this.setAll([]);
  }
  *[Symbol.iterator]() {
    const t2 = this._values.length;
    for (let e2 = 0; e2 < t2; ++e2)
      yield this._values[e2];
  }
  each(t2) {
    m(this._values, t2);
  }
  eachReverse(t2) {
    f(this._values, t2);
  }
}
class W extends F {
  constructor() {
    super(...arguments), Object.defineProperty(this, "autoDispose", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _onSetIndex(t2, e2, i2) {
    this.autoDispose && e2.dispose(), super._onSetIndex(t2, e2, i2);
  }
  _onRemoveIndex(t2, e2) {
    this.autoDispose && e2.dispose(), super._onRemoveIndex(t2, e2);
  }
  _onClear(t2) {
    this.autoDispose && m(t2, (t3) => {
      t3.dispose();
    }), super._onClear(t2);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this.autoDispose && m(this._values, (t2) => {
      t2.dispose();
    }));
  }
}
class V extends W {
  constructor(t2, e2) {
    super(), Object.defineProperty(this, "template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "make", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.template = t2, this.make = e2;
  }
}
class U extends F {
  constructor(t2) {
    super(), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_events", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._container = t2, this._events = this.events.onAll((t3) => {
      if ("clear" === t3.type)
        m(t3.oldValues, (t4) => {
          this._onRemoved(t4);
        });
      else if ("push" === t3.type)
        this._onInserted(t3.newValue);
      else if ("setIndex" === t3.type)
        this._onRemoved(t3.oldValue), this._onInserted(t3.newValue, t3.index);
      else if ("insertIndex" === t3.type)
        this._onInserted(t3.newValue, t3.index);
      else if ("removeIndex" === t3.type)
        this._onRemoved(t3.oldValue);
      else {
        if ("moveIndex" !== t3.type)
          throw new Error("Unknown IListEvent type");
        this._onRemoved(t3.value), this._onInserted(t3.value, t3.newIndex);
      }
    });
  }
  _onInserted(t2, e2) {
    t2._setParent(this._container, true);
    const i2 = this._container._childrenDisplay;
    void 0 === e2 ? i2.addChild(t2._display) : i2.addChildAt(t2._display, e2);
  }
  _onRemoved(t2) {
    this._container._childrenDisplay.removeChild(t2._display), this._container.markDirtyBounds(), this._container.markDirty();
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._events.dispose(), m(this.values, (t2) => {
      t2.dispose();
    }));
  }
}
class K {
  constructor(t2) {
    Object.defineProperty(this, "_value", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._value = t2;
  }
  get value() {
    return this._value / 100;
  }
  get percent() {
    return this._value;
  }
  toString() {
    return this._value + "%";
  }
  interpolate(t2, e2) {
    return t2 + this.value * (e2 - t2);
  }
  static normalize(t2, e2, i2) {
    return t2 instanceof K ? t2 : new K(e2 === i2 ? 0 : 100 * Math.min(Math.max(1 / (i2 - e2) * (t2 - e2), 0), 1));
  }
}
function z(t2) {
  return new K(t2);
}
z(0);
const Y = z(100), X = z(50);
function $(t2) {
  return Object.keys(t2);
}
function Z(t2, e2) {
  return $(t2).sort(e2);
}
function J(t2) {
  return Object.assign({}, t2);
}
function q(t2, e2) {
  $(t2).forEach((i2) => {
    e2(i2, t2[i2]);
  });
}
function Q(t2, e2) {
  for (let i2 in t2)
    if (tt(t2, i2) && !e2(i2, t2[i2]))
      break;
}
function tt(t2, e2) {
  return {}.hasOwnProperty.call(t2, e2);
}
function et(t2) {
  t2.parentNode && t2.parentNode.removeChild(t2);
}
function it(t2, e2, i2, s2) {
  return t2.addEventListener(e2, i2, s2 || false), new B(() => {
    t2.removeEventListener(e2, i2, s2 || false);
  });
}
function st(t2) {
  return it(window, "resize", (e2) => {
    t2();
  });
}
function rt(t2) {
  switch (t2) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return false;
}
function nt(t2) {
  return t2.pointerId || 0;
}
function at() {
  if (document.activeElement && document.activeElement != document.body)
    if (document.activeElement.blur)
      document.activeElement.blur();
    else {
      let t2 = document.createElement("button");
      t2.style.position = "fixed", t2.style.top = "0px", t2.style.left = "-10000px", document.body.appendChild(t2), t2.focus(), t2.blur(), document.body.removeChild(t2);
    }
}
function ot(t2) {
  t2 && t2.focus();
}
function ht(t2) {
  if (rt("pointerevents"))
    return t2;
  if (rt("touchevents"))
    switch (t2) {
      case "pointerover":
      case "pointerdown":
        return "touchstart";
      case "pointerout":
      case "pointerleave":
      case "pointerup":
        return "touchend";
      case "pointermove":
        return "touchmove";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  else if (rt("mouseevents"))
    switch (t2) {
      case "pointerover":
        return "mouseover";
      case "pointerout":
        return "mouseout";
      case "pointerleave":
        return "mouseleave";
      case "pointerdown":
        return "mousedown";
      case "pointermove":
        return "mousemove";
      case "pointerup":
        return "mouseup";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  return t2;
}
function lt(t2) {
  if ("undefined" != typeof Touch && t2 instanceof Touch)
    return true;
  if ("undefined" != typeof PointerEvent && t2 instanceof PointerEvent && null != t2.pointerType)
    switch (t2.pointerType) {
      case "touch":
      case "pen":
      case 2:
        return true;
      case "mouse":
      case 4:
        return false;
      default:
        return !(t2 instanceof MouseEvent);
    }
  else if (null != t2.type && t2.type.match(/^mouse/))
    return false;
  return true;
}
function dt(t2, e2, i2) {
  t2.style[e2] = i2;
}
function ut(t2, e2) {
  return t2.style[e2];
}
function pt(t2) {
  if (t2.composedPath) {
    const e2 = t2.composedPath();
    return 0 === e2.length ? null : e2[0];
  }
  return t2.target;
}
function ct(t2, e2) {
  let i2 = e2;
  for (; ; ) {
    if (t2 === i2)
      return true;
    if (null === i2.parentNode) {
      if (null == i2.host)
        return false;
      i2 = i2.host;
    } else
      i2 = i2.parentNode;
  }
}
function gt(t2, e2) {
  return t2.target && ct(e2.root.dom, t2.target);
}
function _t(t2, e2) {
  t2.style.pointerEvents = e2 ? "auto" : "none";
}
function mt() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function ft() {
  return mt() ? 1 : void 0;
}
function bt(t2, e2) {
  return l(t2) ? t2 : null != t2 && l(t2.value) && l(e2) ? e2 * t2.value : 0;
}
function vt(t2) {
  let e2 = ("" + t2).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return e2 ? Math.max(0, (e2[1] ? e2[1].length : 0) - (e2[2] ? +e2[2] : 0)) : 0;
}
function yt(t2, e2 = 0, i2 = "0") {
  return "string" != typeof t2 && (t2 = t2.toString()), e2 > t2.length ? Array(e2 - t2.length + 1).join(i2) + t2 : t2;
}
function wt(t2) {
  return t2.replace(/^[\s]*/, "");
}
function Pt(t2) {
  return t2.replace(/[\s]*$/, "");
}
function Dt(t2) {
  return wt(Pt(t2));
}
function xt(t2) {
  if (void 0 === t2)
    return "string";
  let e2 = (t2 = (t2 = (t2 = t2.toLowerCase().replace(/^\[[^\]]*\]/, "")).replace(/\[[^\]]+\]/, "")).trim()).match(/\/(date|number|duration)$/);
  return e2 ? e2[1] : "number" === t2 ? "number" : "date" === t2 ? "date" : "duration" === t2 ? "duration" : t2.match(/[#0]/) ? "number" : t2.match(/[ymwdhnsqaxkzgtei]/) ? "date" : "string";
}
function kt(t2) {
  return t2.replace(/\/(date|number|duration)$/i, "");
}
function Ot(t2) {
  return t2 ? t2.replace(/<[^>]*>/g, "") : t2;
}
function Tt(t2) {
  return t2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function St(t2, e2 = false) {
  const i2 = new Date(t2.getFullYear(), 0, 0), s2 = t2.getTime() - i2.getTime() + 60 * (i2.getTimezoneOffset() - t2.getTimezoneOffset()) * 1e3, r2 = 864e5;
  return Math.floor(s2 / r2);
}
function jt(t2, e2 = false) {
  const i2 = new Date(Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate())), s2 = i2.getUTCDay() || 7;
  i2.setUTCDate(i2.getUTCDate() + 4 - s2);
  const r2 = new Date(Date.UTC(i2.getUTCFullYear(), 0, 1));
  return Math.ceil(((i2.getTime() - r2.getTime()) / 864e5 + 1) / 7);
}
function Et(t2, e2 = false) {
  const i2 = new Date(Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate())), s2 = i2.getUTCDay() || 7;
  i2.setUTCDate(i2.getUTCDate() + 4 - s2);
  return new Date(Date.UTC(i2.getUTCFullYear(), 0, 1)).getFullYear();
}
function Ct(t2, e2 = false) {
  const i2 = jt(new Date(t2.getFullYear(), t2.getMonth(), 1), e2);
  let s2 = jt(t2, e2);
  return 1 == s2 && (s2 = 53), s2 - i2 + 1;
}
function Mt(t2, e2, i2 = 1, s2 = false) {
  let r2 = new Date(e2, 0, 4, 0, 0, 0, 0);
  return s2 && r2.setUTCFullYear(e2), 7 * t2 + i2 - ((r2.getDay() || 7) + 3);
}
function At(t2, e2) {
  return t2 > 12 ? t2 -= 12 : 0 === t2 && (t2 = 12), null != e2 ? t2 + (e2 - 1) : t2;
}
function Bt(t2, e2 = false, i2 = false, s2 = false, r2) {
  if (s2)
    return e2 ? "Coordinated Universal Time" : "UTC";
  if (r2) {
    const i3 = t2.toLocaleString("en-US", { timeZone: r2 });
    return Dt(t2.toLocaleString("en-US", { timeZone: r2, timeZoneName: e2 ? "long" : "short" }).substr(i3.length));
  }
  let n2 = t2.toLocaleString("UTC"), a2 = t2.toLocaleString("UTC", { timeZoneName: e2 ? "long" : "short" }).substr(n2.length);
  return false === i2 && (a2 = a2.replace(/ (standard|daylight|summer|winter) /i, " ")), a2;
}
function It(t2) {
  const e2 = new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)), i2 = new Date(e2.toLocaleString("en-US", { timeZone: "UTC" }));
  return (new Date(e2.toLocaleString("en-US", { timeZone: t2 })).getTime() - i2.getTime()) / 6e4 * -1;
}
function Ht(t2) {
  return t2.charAt(0).toUpperCase() + t2.slice(1);
}
function Lt(t2) {
  let e2, i2, s2, r2 = t2.h, n2 = t2.s, a2 = t2.l;
  if (0 == n2)
    e2 = i2 = s2 = a2;
  else {
    let t3 = function(t4, e3, i3) {
      return i3 < 0 && (i3 += 1), i3 > 1 && (i3 -= 1), i3 < 1 / 6 ? t4 + 6 * (e3 - t4) * i3 : i3 < 0.5 ? e3 : i3 < 2 / 3 ? t4 + (e3 - t4) * (2 / 3 - i3) * 6 : t4;
    }, o2 = a2 < 0.5 ? a2 * (1 + n2) : a2 + n2 - a2 * n2, h2 = 2 * a2 - o2;
    e2 = t3(h2, o2, r2 + 1 / 3), i2 = t3(h2, o2, r2), s2 = t3(h2, o2, r2 - 1 / 3);
  }
  return { r: Math.round(255 * e2), g: Math.round(255 * i2), b: Math.round(255 * s2) };
}
function Nt(t2) {
  let e2 = t2.r / 255, i2 = t2.g / 255, s2 = t2.b / 255, r2 = Math.max(e2, i2, s2), n2 = Math.min(e2, i2, s2), a2 = 0, o2 = 0, h2 = (r2 + n2) / 2;
  if (r2 === n2)
    a2 = o2 = 0;
  else {
    let t3 = r2 - n2;
    switch (o2 = h2 > 0.5 ? t3 / (2 - r2 - n2) : t3 / (r2 + n2), r2) {
      case e2:
        a2 = (i2 - s2) / t3 + (i2 < s2 ? 6 : 0);
        break;
      case i2:
        a2 = (s2 - e2) / t3 + 2;
        break;
      case s2:
        a2 = (e2 - i2) / t3 + 4;
    }
    a2 /= 6;
  }
  return { h: a2, s: o2, l: h2 };
}
function Rt(t2, e2) {
  return t2 ? { r: Math.max(0, Math.min(255, t2.r + Ft(t2.r, e2))), g: Math.max(0, Math.min(255, t2.g + Ft(t2.g, e2))), b: Math.max(0, Math.min(255, t2.b + Ft(t2.b, e2))), a: t2.a } : t2;
}
function Ft(t2, e2) {
  let i2 = e2 > 0 ? 255 - t2 : t2;
  return Math.round(i2 * e2);
}
function Wt(t2, e2) {
  if (t2) {
    let i2 = Ft(Math.min(Math.max(t2.r, t2.g, t2.b), 230), e2);
    return { r: Math.max(0, Math.min(255, Math.round(t2.r + i2))), g: Math.max(0, Math.min(255, Math.round(t2.g + i2))), b: Math.max(0, Math.min(255, Math.round(t2.b + i2))), a: t2.a };
  }
  return t2;
}
function Vt(t2) {
  return (299 * t2.r + 587 * t2.g + 114 * t2.b) / 1e3 >= 128;
}
function Ut(t2, e2) {
  if (void 0 === t2 || 1 == e2)
    return t2;
  let i2 = Nt(t2);
  return i2.s = e2, Lt(i2);
}
function Kt(t2, e2 = { r: 255, g: 255, b: 255 }, i2 = { r: 255, g: 255, b: 255 }) {
  let s2 = e2, r2 = i2;
  return Vt(i2) && (s2 = i2, r2 = e2), Vt(t2) ? r2 : s2;
}
function zt(t2, e2) {
  return t2 || (t2 = []), [...t2, ...e2].filter((t3, e3, i2) => i2.indexOf(t3) === e3);
}
function Gt(t2, e2) {
  return !!e2 && (t2.left == e2.left && (t2.right == e2.right && (t2.top == e2.top && t2.bottom == e2.bottom)));
}
function Yt(t2) {
  return "#" === t2[0] && (t2 = t2.substr(1)), 3 == t2.length && (t2 = t2[0].repeat(2) + t2[1].repeat(2) + t2[2].repeat(2)), parseInt(t2, 16);
}
function Xt(t2) {
  let e2 = (t2 = t2.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (e2)
    e2.push("1");
  else if (e2 = t2.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !e2)
    return 0;
  let i2 = "";
  for (let s2 = 1; s2 <= 3; s2++) {
    let t3 = parseInt(e2[s2]).toString(16);
    1 == t3.length && (t3 = "0" + t3), i2 += t3;
  }
  return Yt(i2);
}
function $t(t2) {
  return Zt.fromAny(t2);
}
class Zt {
  constructor(t2) {
    Object.defineProperty(this, "_hex", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._hex = 0 | t2;
  }
  get hex() {
    return this._hex;
  }
  get r() {
    return this._hex >>> 16;
  }
  get g() {
    return this._hex >> 8 & 255;
  }
  get b() {
    return 255 & this._hex;
  }
  toCSS(t2 = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + t2 + ")";
  }
  toCSSHex() {
    return "#" + yt(this.r.toString(16), 2) + yt(this.g.toString(16), 2) + yt(this.b.toString(16), 2);
  }
  toHSL(t2 = 1) {
    return Nt({ r: this.r, g: this.g, b: this.b, a: t2 });
  }
  static fromHSL(t2, e2, i2) {
    const s2 = Lt({ h: t2, s: e2, l: i2 });
    return this.fromRGB(s2.r, s2.g, s2.b);
  }
  toString() {
    return this.toCSSHex();
  }
  static fromHex(t2) {
    return new Zt(t2);
  }
  static fromRGB(t2, e2, i2) {
    return new Zt((0 | i2) + (e2 << 8) + (t2 << 16));
  }
  static fromString(t2) {
    return new Zt(Yt(t2));
  }
  static fromCSS(t2) {
    return new Zt(Xt(t2));
  }
  static fromAny(t2) {
    if (h(t2)) {
      if ("#" == t2[0])
        return Zt.fromString(t2);
      if ("rgb" == t2.substr(0, 3))
        return Zt.fromCSS(t2);
    } else {
      if (l(t2))
        return Zt.fromHex(t2);
      if (t2 instanceof Zt)
        return Zt.fromHex(t2.hex);
    }
    throw new Error("Unknown color syntax: " + t2);
  }
  static alternative(t2, e2, i2) {
    const s2 = Kt({ r: t2.r, g: t2.g, b: t2.b }, e2 ? { r: e2.r, g: e2.g, b: e2.b } : void 0, i2 ? { r: i2.r, g: i2.g, b: i2.b } : void 0);
    return this.fromRGB(s2.r, s2.g, s2.b);
  }
  static interpolate(t2, e2, i2, s2 = "rgb") {
    if ("hsl" == s2) {
      const s3 = e2.toHSL(), r2 = i2.toHSL();
      return Zt.fromHSL(qt(t2, s3.h, r2.h), qt(t2, s3.s, r2.s), qt(t2, s3.l, r2.l));
    }
    return Zt.fromRGB(qt(t2, e2.r, i2.r), qt(t2, e2.g, i2.g), qt(t2, e2.b, i2.b));
  }
  static lighten(t2, e2) {
    const i2 = Rt({ r: t2.r, g: t2.g, b: t2.b }, e2);
    return Zt.fromRGB(i2.r, i2.g, i2.b);
  }
  static brighten(t2, e2) {
    const i2 = Wt({ r: t2.r, g: t2.g, b: t2.b }, e2);
    return Zt.fromRGB(i2.r, i2.g, i2.b);
  }
  static saturate(t2, e2) {
    const i2 = Ut({ r: t2.r, g: t2.g, b: t2.b }, e2);
    return Zt.fromRGB(i2.r, i2.g, i2.b);
  }
}
function Jt(e2) {
  return t(this, void 0, void 0, function* () {
    if (void 0 !== e2) {
      const t2 = [];
      q(e2, (e3, i2) => {
        t2.push(i2.waitForStop());
      }), yield Promise.all(t2);
    }
  });
}
function qt(t2, e2, i2) {
  return e2 + t2 * (i2 - e2);
}
function Qt(t2, e2, i2) {
  return t2 >= 1 ? i2 : e2;
}
function te(t2, e2, i2) {
  return new K(qt(t2, e2.percent, i2.percent));
}
function ee(t2, e2, i2) {
  return Zt.interpolate(t2, e2, i2);
}
function ie(t2, e2) {
  return "number" == typeof t2 && "number" == typeof e2 ? qt : t2 instanceof K && e2 instanceof K ? te : t2 instanceof Zt && e2 instanceof Zt ? ee : Qt;
}
const se = Math.PI, re = se / 180, ne = 180 / se;
function ae$1(t2, e2, i2) {
  if (!l(e2) || e2 <= 0) {
    let e3 = Math.round(t2);
    return i2 && e3 - t2 == 0.5 && e3--, e3;
  }
  {
    let i3 = Math.pow(10, e2);
    return Math.round(t2 * i3) / i3;
  }
}
function oe(t2, e2) {
  if (!l(e2) || e2 <= 0)
    return Math.ceil(t2);
  {
    let i2 = Math.pow(10, e2);
    return Math.ceil(t2 * i2) / i2;
  }
}
function he(t2, e2, i2) {
  return Math.min(Math.max(t2, e2), i2);
}
function le(t2) {
  return Math.sin(re * t2);
}
function de(t2) {
  return Math.cos(re * t2);
}
function ue(t2) {
  return (t2 %= 360) < 0 && (t2 += 360), t2;
}
function pe(t2, e2, i2, s2, r2) {
  let n2 = Number.MAX_VALUE, a2 = Number.MAX_VALUE, o2 = -Number.MAX_VALUE, h2 = -Number.MAX_VALUE, l2 = [];
  l2.push(ce(r2, i2)), l2.push(ce(r2, s2));
  let d2 = Math.min(90 * Math.floor(i2 / 90), 90 * Math.floor(s2 / 90)), u2 = Math.max(90 * Math.ceil(i2 / 90), 90 * Math.ceil(s2 / 90));
  for (let p2 = d2; p2 <= u2; p2 += 90)
    p2 >= i2 && p2 <= s2 && l2.push(ce(r2, p2));
  for (let p2 = 0; p2 < l2.length; p2++) {
    let t3 = l2[p2];
    t3.x < n2 && (n2 = t3.x), t3.y < a2 && (a2 = t3.y), t3.x > o2 && (o2 = t3.x), t3.y > h2 && (h2 = t3.y);
  }
  return { left: t2 + n2, top: e2 + a2, right: t2 + o2, bottom: e2 + h2 };
}
function ce(t2, e2) {
  return { x: t2 * de(e2), y: t2 * le(e2) };
}
function ge(t2) {
  const e2 = t2.length;
  if (e2 > 0) {
    let i2 = t2[0], s2 = i2.left, r2 = i2.top, n2 = i2.right, a2 = i2.bottom;
    if (e2 > 1)
      for (let o2 = 1; o2 < e2; o2++)
        i2 = t2[o2], s2 = Math.min(i2.left, s2), n2 = Math.max(i2.right, n2), r2 = Math.min(i2.top, r2), a2 = Math.max(i2.bottom, a2);
    return { left: s2, right: n2, top: r2, bottom: a2 };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function _e(t2) {
  return t2;
}
function me(t2) {
  return t2 * t2 * t2;
}
function fe(t2) {
  return function(e2) {
    return 1 - t2(1 - e2);
  };
}
class be {
  constructor(t2, e2) {
    Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_userSettings", { enumerable: true, configurable: true, writable: true, value: {} }), this._entity = t2, this._settings = e2, q(e2, (t3) => {
      this._userSettings[t3] = true;
    });
  }
  get(t2, e2) {
    const i2 = this._settings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  setRaw(t2, e2) {
    this._settings[t2] = e2;
  }
  set(t2, e2) {
    this._userSettings[t2] = true, this.setRaw(t2, e2);
  }
  remove(t2) {
    delete this._userSettings[t2], delete this._settings[t2];
  }
  setAll(t2) {
    $(t2).forEach((e2) => {
      this.set(e2, t2[e2]);
    });
  }
  _eachSetting(t2) {
    q(this._settings, t2);
  }
  apply() {
    const t2 = { stateAnimationEasing: true, stateAnimationDuration: true }, e2 = this._entity.states.lookup("default");
    this._eachSetting((i2, s2) => {
      t2[i2] || (t2[i2] = true, this !== e2 && (i2 in e2._settings || (e2._settings[i2] = this._entity.get(i2))), this._entity.set(i2, s2));
    });
  }
  applyAnimate(t2) {
    null == t2 && (t2 = this._settings.stateAnimationDuration), null == t2 && (t2 = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
    let e2 = this._settings.stateAnimationEasing;
    null == e2 && (e2 = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", me)));
    const i2 = this._entity.states.lookup("default"), s2 = { stateAnimationEasing: true, stateAnimationDuration: true }, r2 = {};
    return this._eachSetting((n2, a2) => {
      if (!s2[n2]) {
        s2[n2] = true, this != i2 && (n2 in i2._settings || (i2._settings[n2] = this._entity.get(n2)));
        const o2 = this._entity.animate({ key: n2, to: a2, duration: t2, easing: e2 });
        o2 && (r2[n2] = o2);
      }
    }), r2;
  }
}
class ve {
  constructor(t2) {
    Object.defineProperty(this, "_states", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._entity = t2;
  }
  lookup(t2) {
    return this._states[t2];
  }
  create(t2, e2) {
    const i2 = this._states[t2];
    if (i2)
      return i2.setAll(e2), i2;
    {
      const i3 = new be(this._entity, e2);
      return this._states[t2] = i3, i3;
    }
  }
  remove(t2) {
    delete this._states[t2];
  }
  apply(t2) {
    const e2 = this._states[t2];
    e2 && e2.apply(), this._entity._applyState(t2);
  }
  applyAnimate(t2, e2) {
    let i2;
    const s2 = this._states[t2];
    return s2 && (i2 = s2.applyAnimate(e2)), this._entity._applyStateAnimated(t2, e2), i2;
  }
}
class ye {
  constructor() {
    Object.defineProperty(this, "version", { enumerable: true, configurable: true, writable: true, value: "5.4.8" }), Object.defineProperty(this, "licenses", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "entitiesById", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "rootElements", { enumerable: true, configurable: true, writable: true, value: [] });
  }
}
const we = new ye();
function Pe(t2) {
  we.licenses.push(t2);
}
function De(t2, e2) {
  return t2 === e2 ? 0 : t2 < e2 ? -1 : 1;
}
function xe(t2, e2, i2) {
  const s2 = t2.length, r2 = e2.length, n2 = Math.min(s2, r2);
  for (let a2 = 0; a2 < n2; ++a2) {
    const s3 = i2(t2[a2], e2[a2]);
    if (0 !== s3)
      return s3;
  }
  return De(s2, r2);
}
function ke(t2, e2) {
  return t2 === e2 ? 0 : t2 < e2 ? -1 : 1;
}
class Oe {
  constructor(t2) {
    Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_callbacks", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_disabled", { enumerable: true, configurable: true, writable: true, value: {} }), this._entity = t2;
  }
  add(t2, e2) {
    let i2 = this._callbacks[t2];
    return void 0 === i2 && (i2 = this._callbacks[t2] = []), i2.push(e2), this._entity._markDirtyKey(t2), new B(() => {
      y(i2, e2) && this._entity._markDirtyKey(t2);
    });
  }
  remove(t2) {
    const e2 = this._callbacks[t2];
    void 0 !== e2 && (delete this._callbacks[t2], 0 !== e2.length && this._entity._markDirtyKey(t2));
  }
  enable(t2) {
    this._disabled[t2] && (delete this._disabled[t2], this._entity._markDirtyKey(t2));
  }
  disable(t2) {
    this._disabled[t2] || (this._disabled[t2] = true, this._entity._markDirtyKey(t2));
  }
  fold(t2, e2) {
    if (!this._disabled[t2]) {
      const i2 = this._callbacks[t2];
      if (void 0 !== i2)
        for (let s2 = 0, r2 = i2.length; s2 < r2; ++s2)
          e2 = i2[s2](e2, this._entity, t2);
    }
    return e2;
  }
}
class Te {
  constructor(t2, e2, i2, s2, r2, n2, a2) {
    Object.defineProperty(this, "_animation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_from", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_to", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_duration", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_easing", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_loops", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_interpolate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_oldTime", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_time", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_stopped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_playing", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new N() }), this._animation = t2, this._from = e2, this._to = i2, this._duration = s2, this._easing = r2, this._loops = n2, this._interpolate = ie(e2, i2), this._oldTime = a2;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    this._stopped || (this._stopped = true, this._playing = false, this.events.isEnabled("stopped") && this.events.dispatch("stopped", { type: "stopped", target: this }));
  }
  pause() {
    this._playing = false, this._oldTime = null;
  }
  play() {
    this._stopped || this._playing || (this._playing = true, this._animation._startAnimation());
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((t2, e2) => {
      if (this._stopped)
        t2();
      else {
        const e3 = () => {
          i2.dispose(), t2();
        }, i2 = this.events.on("stopped", e3);
      }
    });
  }
  _checkEnded() {
    return !(this._loops > 1) || (--this._loops, false);
  }
  _run(t2) {
    null !== this._oldTime && (this._time += t2 - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = t2;
  }
  _reset(t2) {
    this._oldTime = t2, this._time = 0;
  }
  _value(t2) {
    return this._interpolate(this._easing(t2), this._from, this._to);
  }
}
let Se = 0;
class je {
  constructor(t2) {
    Object.defineProperty(this, "uid", { enumerable: true, configurable: true, writable: true, value: ++Se }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_prevSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_prevPrivateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_animatingSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_animatingPrivateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_playingAnimations", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_userProperties", { enumerable: true, configurable: true, writable: true, value: {} }), this._settings = t2;
  }
  _checkDirty() {
    $(this._settings).forEach((t2) => {
      this._userProperties[t2] = true, this._markDirtyKey(t2);
    });
  }
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(t2) {
    return !this.isDisposed() && (q(this._animatingSettings, (e2, i2) => {
      if (i2._stopped)
        this._stopAnimation(e2);
      else if (i2._playing) {
        i2._run(t2);
        const s2 = i2.percentage;
        s2 >= 1 ? i2._checkEnded() ? this.set(e2, i2._value(1)) : (i2._reset(t2), this._set(e2, i2._value(1))) : this._set(e2, i2._value(s2));
      }
    }), q(this._animatingPrivateSettings, (e2, i2) => {
      if (i2._stopped)
        this._stopAnimationPrivate(e2);
      else if (i2._playing) {
        i2._run(t2);
        const s2 = i2.percentage;
        s2 >= 1 ? i2._checkEnded() ? this.setPrivate(e2, i2._value(1)) : (i2._reset(t2), this._setPrivate(e2, i2._value(1))) : this._setPrivate(e2, i2._value(s2));
      }
    }), 0 !== this._playingAnimations);
  }
  _markDirtyKey(t2) {
    this.markDirty();
  }
  _markDirtyPrivateKey(t2) {
    this.markDirty();
  }
  on(t2, e2) {
    let i2 = this._settingEvents[t2];
    return void 0 === i2 && (i2 = this._settingEvents[t2] = []), i2.push(e2), new B(() => {
      y(i2, e2), 0 === i2.length && delete this._settingEvents[t2];
    });
  }
  onPrivate(t2, e2) {
    let i2 = this._privateSettingEvents[t2];
    return void 0 === i2 && (i2 = this._privateSettingEvents[t2] = []), i2.push(e2), new B(() => {
      y(i2, e2), 0 === i2.length && delete this._privateSettingEvents[t2];
    });
  }
  getRaw(t2, e2) {
    const i2 = this._settings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  get(t2, e2) {
    return this.getRaw(t2, e2);
  }
  _sendKeyEvent(t2, e2) {
    const i2 = this._settingEvents[t2];
    void 0 !== i2 && m(i2, (i3) => {
      i3(e2, this, t2);
    });
  }
  _sendPrivateKeyEvent(t2, e2) {
    const i2 = this._privateSettingEvents[t2];
    void 0 !== i2 && m(i2, (i3) => {
      i3(e2, this, t2);
    });
  }
  _setRaw(t2, e2, i2) {
    this._prevSettings[t2] = e2, this._sendKeyEvent(t2, i2);
  }
  setRaw(t2, e2) {
    const i2 = this._settings[t2];
    this._settings[t2] = e2, i2 !== e2 && this._setRaw(t2, i2, e2);
  }
  _set(t2, e2) {
    const i2 = this._settings[t2];
    this._settings[t2] = e2, i2 !== e2 && (this._setRaw(t2, i2, e2), this._markDirtyKey(t2));
  }
  _stopAnimation(t2) {
    const e2 = this._animatingSettings[t2];
    e2 && (--this._playingAnimations, delete this._animatingSettings[t2], e2.stop());
  }
  set(t2, e2) {
    return this._set(t2, e2), this._stopAnimation(t2), e2;
  }
  remove(t2) {
    t2 in this._settings && (this._prevSettings[t2] = this._settings[t2], delete this._settings[t2], this._sendKeyEvent(t2, void 0), this._markDirtyKey(t2)), this._stopAnimation(t2);
  }
  removeAll() {
    m($(this._settings), (t2) => {
      this.remove(t2);
    });
  }
  getPrivate(t2, e2) {
    const i2 = this._privateSettings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  _setPrivateRaw(t2, e2, i2) {
    this._prevPrivateSettings[t2] = e2, this._sendPrivateKeyEvent(t2, i2);
  }
  setPrivateRaw(t2, e2) {
    const i2 = this._privateSettings[t2];
    this._privateSettings[t2] = e2, i2 !== e2 && this._setPrivateRaw(t2, i2, e2);
  }
  _setPrivate(t2, e2) {
    const i2 = this._privateSettings[t2];
    this._privateSettings[t2] = e2, i2 !== e2 && (this._setPrivateRaw(t2, i2, e2), this._markDirtyPrivateKey(t2));
  }
  _stopAnimationPrivate(t2) {
    const e2 = this._animatingPrivateSettings[t2];
    e2 && (--this._playingAnimations, e2.stop(), delete this._animatingPrivateSettings[t2]);
  }
  setPrivate(t2, e2) {
    return this._setPrivate(t2, e2), this._stopAnimationPrivate(t2), e2;
  }
  removePrivate(t2) {
    t2 in this._privateSettings && (this._prevPrivateSettings[t2] = this._privateSettings[t2], delete this._privateSettings[t2], this._markDirtyPrivateKey(t2)), this._stopAnimationPrivate(t2);
  }
  setAll(t2) {
    q(t2, (t3, e2) => {
      this.set(t3, e2);
    });
  }
  animate(t2) {
    const e2 = t2.key, i2 = t2.to, s2 = t2.duration || 0, r2 = t2.loops || 1, n2 = void 0 === t2.from ? this.get(e2) : t2.from, a2 = void 0 === t2.easing ? _e : t2.easing;
    if (0 === s2)
      this.set(e2, i2);
    else {
      if (void 0 !== n2 && n2 !== i2) {
        this.set(e2, n2);
        const t3 = this._animatingSettings[e2] = new Te(this, n2, i2, s2, a2, r2, this._animationTime());
        return ++this._playingAnimations, this._startAnimation(), t3;
      }
      this.set(e2, i2);
    }
    const o2 = new Te(this, n2, i2, s2, a2, r2, null);
    return o2.stop(), o2;
  }
  animatePrivate(t2) {
    const e2 = t2.key, i2 = t2.to, s2 = t2.duration || 0, r2 = t2.loops || 1, n2 = void 0 === t2.from ? this.getPrivate(e2) : t2.from, a2 = void 0 === t2.easing ? _e : t2.easing;
    if (0 === s2)
      this.setPrivate(e2, i2);
    else {
      if (void 0 !== n2 && n2 !== i2) {
        this.setPrivate(e2, n2);
        const t3 = this._animatingPrivateSettings[e2] = new Te(this, n2, i2, s2, a2, r2, this._animationTime());
        return ++this._playingAnimations, this._startAnimation(), t3;
      }
      this.setPrivate(e2, i2);
    }
    const o2 = new Te(this, n2, i2, s2, a2, r2, null);
    return o2.stop(), o2;
  }
  _dispose() {
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
}
class Ee extends je {
  constructor(t2, e2, i2, s2 = []) {
    if (super(e2), Object.defineProperty(this, "_root", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_user_id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "states", { enumerable: true, configurable: true, writable: true, value: new ve(this) }), Object.defineProperty(this, "adapters", { enumerable: true, configurable: true, writable: true, value: new Oe(this) }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: this._createEvents() }), Object.defineProperty(this, "_userPrivateProperties", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirty", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyPrivate", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_templates", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_internalTemplates", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_defaultThemes", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_templateDisposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_runSetup", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_disposerProperties", { enumerable: true, configurable: true, writable: true, value: {} }), !i2)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._root = t2, this._internalTemplates = s2, e2.id && this._registerId(e2.id);
  }
  static new(t2, e2, i2) {
    const s2 = new this(t2, e2, true);
    return s2._template = i2, s2._afterNew(), s2;
  }
  static _new(t2, e2, i2 = []) {
    const s2 = new this(t2, e2, true, i2);
    return s2._afterNew(), s2;
  }
  _afterNew() {
    this._checkDirty();
    let t2 = false;
    const e2 = this._template;
    e2 && (t2 = true, e2._setObjectTemplate(this)), m(this._internalTemplates, (e3) => {
      t2 = true, e3._setObjectTemplate(this);
    }), t2 && this._applyTemplates(false), this.states.create("default", {}), this._setDefaults();
  }
  _afterNewApplyThemes() {
    this._checkDirty();
    const t2 = this._template;
    t2 && t2._setObjectTemplate(this), m(this._internalTemplates, (t3) => {
      t3._setObjectTemplate(this);
    }), this.states.create("default", {}), this._setDefaults(), this._applyThemes();
  }
  _createEvents() {
    return new N();
  }
  get classNames() {
    return this.constructor.classNames;
  }
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefault(t2, e2) {
    t2 in this._settings || super.set(t2, e2);
  }
  _setRawDefault(t2, e2) {
    t2 in this._settings || super.setRaw(t2, e2);
  }
  _clearDirty() {
    $(this._dirty).forEach((t2) => {
      this._dirty[t2] = false;
    }), $(this._dirtyPrivate).forEach((t2) => {
      this._dirtyPrivate[t2] = false;
    });
  }
  isDirty(t2) {
    return !!this._dirty[t2];
  }
  isPrivateDirty(t2) {
    return !!this._dirtyPrivate[t2];
  }
  _markDirtyKey(t2) {
    this._dirty[t2] = true, super._markDirtyKey(t2);
  }
  _markDirtyPrivateKey(t2) {
    this._dirtyPrivate[t2] = true, super._markDirtyKey(t2);
  }
  isType(t2) {
    return -1 !== this.classNames.indexOf(t2);
  }
  _pushPropertyDisposer(t2, e2) {
    let i2 = this._disposerProperties[t2];
    return void 0 === i2 && (i2 = this._disposerProperties[t2] = []), i2.push(e2), e2;
  }
  _disposeProperty(t2) {
    const e2 = this._disposerProperties[t2];
    void 0 !== e2 && (m(e2, (t3) => {
      t3.dispose();
    }), delete this._disposerProperties[t2]);
  }
  set template(t2) {
    const e2 = this._template;
    e2 !== t2 && (this._template = t2, e2 && e2._removeObjectTemplate(this), t2 && t2._setObjectTemplate(this), this._applyTemplates());
  }
  get template() {
    return this._template;
  }
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(t2) {
  }
  _applyStateAnimated(t2, e2) {
  }
  get(t2, e2) {
    const i2 = this.adapters.fold(t2, this._settings[t2]);
    return void 0 !== i2 ? i2 : e2;
  }
  isUserSetting(t2) {
    return this._userProperties[t2] || false;
  }
  set(t2, e2) {
    return this._userProperties[t2] = true, super.set(t2, e2);
  }
  setRaw(t2, e2) {
    this._userProperties[t2] = true, super.setRaw(t2, e2);
  }
  _setSoft(t2, e2) {
    return this._userProperties[t2] ? e2 : super.set(t2, e2);
  }
  remove(t2) {
    delete this._userProperties[t2], this._removeTemplateProperty(t2);
  }
  setPrivate(t2, e2) {
    return this._userPrivateProperties[t2] = true, super.setPrivate(t2, e2);
  }
  setPrivateRaw(t2, e2) {
    this._userPrivateProperties[t2] = true, super.setPrivateRaw(t2, e2);
  }
  removePrivate(t2) {
    delete this._userPrivateProperties[t2], this._removeTemplatePrivateProperty(t2);
  }
  _setTemplateProperty(t2, e2, i2) {
    if (!this._userProperties[e2]) {
      t2 === this._findTemplateByKey(e2) && super.set(e2, i2);
    }
  }
  _setTemplatePrivateProperty(t2, e2, i2) {
    if (!this._userPrivateProperties[e2]) {
      t2 === this._findTemplateByPrivateKey(e2) && super.setPrivate(e2, i2);
    }
  }
  _removeTemplateProperty(t2) {
    if (!this._userProperties[t2]) {
      const e2 = this._findTemplateByKey(t2);
      e2 ? super.set(t2, e2._settings[t2]) : super.remove(t2);
    }
  }
  _removeTemplatePrivateProperty(t2) {
    if (!this._userPrivateProperties[t2]) {
      const e2 = this._findTemplateByPrivateKey(t2);
      e2 ? super.setPrivate(t2, e2._privateSettings[t2]) : super.removePrivate(t2);
    }
  }
  _walkParents(t2) {
    t2(this._root._rootContainer), t2(this);
  }
  _applyStateByKey(t2) {
    const e2 = this.states.create(t2, {}), i2 = {};
    this._eachTemplate((s2) => {
      const r2 = s2.states.lookup(t2);
      r2 && r2._apply(e2, i2);
    }), q(e2._settings, (t3) => {
      i2[t3] || e2._userSettings[t3] || e2.remove(t3);
    });
  }
  _applyTemplate(t2, e2) {
    this._templateDisposers.push(t2._apply(this, e2)), q(t2._settings, (t3, i2) => {
      e2.settings[t3] || this._userProperties[t3] || (e2.settings[t3] = true, super.set(t3, i2));
    }), q(t2._privateSettings, (t3, i2) => {
      e2.privateSettings[t3] || this._userPrivateProperties[t3] || (e2.privateSettings[t3] = true, super.setPrivate(t3, i2));
    }), this._runSetup && t2.setup && (this._runSetup = false, t2.setup(this));
  }
  _findStaticTemplate(t2) {
    if (this._template && t2(this._template))
      return this._template;
  }
  _eachTemplate(t2) {
    this._findStaticTemplate((e2) => (t2(e2), false)), f(this._internalTemplates, t2), m(this._templates, t2);
  }
  _applyTemplates(t2 = true) {
    t2 && this._disposeTemplates();
    const e2 = { settings: {}, privateSettings: {}, states: {} };
    this._eachTemplate((t3) => {
      this._applyTemplate(t3, e2);
    }), t2 && (q(this._settings, (t3) => {
      this._userProperties[t3] || e2.settings[t3] || super.remove(t3);
    }), q(this._privateSettings, (t3) => {
      this._userPrivateProperties[t3] || e2.privateSettings[t3] || super.removePrivate(t3);
    }));
  }
  _findTemplate(t2) {
    const e2 = this._findStaticTemplate(t2);
    if (void 0 === e2) {
      const e3 = j(this._internalTemplates, t2);
      return void 0 === e3 ? S(this._templates, t2) : e3;
    }
    return e2;
  }
  _findTemplateByKey(t2) {
    return this._findTemplate((e2) => t2 in e2._settings);
  }
  _findTemplateByPrivateKey(t2) {
    return this._findTemplate((e2) => t2 in e2._privateSettings);
  }
  _disposeTemplates() {
    m(this._templateDisposers, (t2) => {
      t2.dispose();
    }), this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    m(this._templates, (t2) => {
      t2._removeObjectTemplate(this);
    }), this._templates.length = 0;
  }
  _applyThemes() {
    let t2 = false;
    const e2 = [];
    let i2 = [];
    const s2 = /* @__PURE__ */ new Set(), r2 = this.get("themeTagsSelf");
    return r2 && m(r2, (t3) => {
      s2.add(t3);
    }), this._walkParents((r3) => {
      r3 === this._root._rootContainer && (t2 = true), r3._defaultThemes.length > 0 && e2.push(r3._defaultThemes);
      const n2 = r3.get("themes");
      n2 && i2.push(n2);
      const a2 = r3.get("themeTags");
      a2 && m(a2, (t3) => {
        s2.add(t3);
      });
    }), i2 = e2.concat(i2), this._removeTemplates(), t2 && f(this.classNames, (t3) => {
      const e3 = [];
      m(i2, (i3) => {
        m(i3, (i4) => {
          const r3 = i4._lookupRules(t3);
          r3 && f(r3, (t4) => {
            if (t4.tags.every((t5) => s2.has(t5))) {
              const i5 = C(e3, (e4) => {
                const i6 = De(t4.tags.length, e4.tags.length);
                return 0 === i6 ? xe(t4.tags, e4.tags, De) : i6;
              });
              e3.splice(i5.index, 0, t4);
            }
          });
        });
      }), m(e3, (t4) => {
        this._templates.push(t4.template), t4.template._setObjectTemplate(this);
      });
    }), this._applyTemplates(), t2 && (this._runSetup = false), t2;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const t2 = this.get("id");
      t2 && this._registerId(t2);
      const e2 = this._prevSettings.id;
      e2 && delete we.entitiesById[e2];
    }
  }
  _registerId(t2) {
    if (we.entitiesById[t2] && we.entitiesById[t2] !== this)
      throw new Error('An entity with id "' + t2 + '" already exists.');
    we.entitiesById[t2] = this;
  }
  _afterChanged() {
  }
  addDisposer(t2) {
    return this._disposers.push(t2), t2;
  }
  _dispose() {
    super._dispose();
    const t2 = this._template;
    t2 && t2._removeObjectTemplate(this), m(this._internalTemplates, (t3) => {
      t3._removeObjectTemplate(this);
    }), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((t3) => {
      t3.dispose();
    }), q(this._disposerProperties, (t3, e3) => {
      m(e3, (t4) => {
        t4.dispose();
      });
    });
    const e2 = this.get("id");
    e2 && delete we.entitiesById[e2];
  }
  setTimeout(t2, e2) {
    const i2 = setTimeout(() => {
      this.removeDispose(s2), t2();
    }, e2), s2 = new B(() => {
      clearTimeout(i2);
    });
    return this._disposers.push(s2), s2;
  }
  removeDispose(t2) {
    if (!this.isDisposed()) {
      let e2 = c(this._disposers, t2);
      e2 > -1 && this._disposers.splice(e2, 1);
    }
    t2.dispose();
  }
  hasTag(t2) {
    return -1 !== c(this.get("themeTags", []), t2);
  }
  addTag(t2) {
    if (!this.hasTag(t2)) {
      const e2 = this.get("themeTags", []);
      e2.push(t2), this.set("themeTags", e2);
    }
  }
  removeTag(t2) {
    if (this.hasTag(t2)) {
      const e2 = this.get("themeTags", []);
      v(e2, t2), this.set("themeTags", e2);
    }
  }
  _t(t2, e2, ...i2) {
    return this._root.language.translate(t2, e2, ...i2);
  }
  get root() {
    return this._root;
  }
}
Object.defineProperty(Ee, "className", { enumerable: true, configurable: true, writable: true, value: "Entity" }), Object.defineProperty(Ee, "classNames", { enumerable: true, configurable: true, writable: true, value: ["Entity"] });
class Ce {
  constructor(t2, e2, i2) {
    Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_name", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._name = t2, this._template = e2, this._settings = i2;
  }
  get(t2, e2) {
    const i2 = this._settings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  set(t2, e2) {
    this._settings[t2] = e2, this._template._stateChanged(this._name);
  }
  remove(t2) {
    delete this._settings[t2], this._template._stateChanged(this._name);
  }
  setAll(t2) {
    $(t2).forEach((e2) => {
      this._settings[e2] = t2[e2];
    }), this._template._stateChanged(this._name);
  }
  _apply(t2, e2) {
    q(this._settings, (i2, s2) => {
      e2[i2] || t2._userSettings[i2] || (e2[i2] = true, t2.setRaw(i2, s2));
    });
  }
}
class Me {
  constructor(t2) {
    Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_states", { enumerable: true, configurable: true, writable: true, value: {} }), this._template = t2;
  }
  lookup(t2) {
    return this._states[t2];
  }
  create(t2, e2) {
    const i2 = this._states[t2];
    if (i2)
      return i2.setAll(e2), i2;
    {
      const i3 = new Ce(t2, this._template, e2);
      return this._states[t2] = i3, this._template._stateChanged(t2), i3;
    }
  }
  remove(t2) {
    delete this._states[t2], this._template._stateChanged(t2);
  }
  _apply(t2, e2) {
    q(this._states, (i2, s2) => {
      let r2 = e2.states[i2];
      null == r2 && (r2 = e2.states[i2] = {});
      const n2 = t2.states.create(i2, {});
      s2._apply(n2, r2);
    });
  }
}
class Ae {
  constructor() {
    Object.defineProperty(this, "_callbacks", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  add(t2, e2) {
    let i2 = this._callbacks[t2];
    return void 0 === i2 && (i2 = this._callbacks[t2] = []), i2.push(e2), new B(() => {
      y(i2, e2), 0 === i2.length && delete this._callbacks[t2];
    });
  }
  remove(t2) {
    void 0 !== this._callbacks[t2] && delete this._callbacks[t2];
  }
  _apply(t2) {
    const e2 = [];
    return q(this._callbacks, (i2, s2) => {
      m(s2, (s3) => {
        e2.push(t2.adapters.add(i2, s3));
      });
    }), new H(e2);
  }
}
class Be {
  constructor(t2, e2) {
    if (Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_entities", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "states", { enumerable: true, configurable: true, writable: true, value: new Me(this) }), Object.defineProperty(this, "adapters", { enumerable: true, configurable: true, writable: true, value: new Ae() }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new N() }), Object.defineProperty(this, "setup", { enumerable: true, configurable: true, writable: true, value: void 0 }), !e2)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._settings = t2;
  }
  static new(t2) {
    return new Be(t2, true);
  }
  get entities() {
    return this._entities;
  }
  get(t2, e2) {
    const i2 = this._settings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  setRaw(t2, e2) {
    this._settings[t2] = e2;
  }
  set(t2, e2) {
    this._settings[t2] !== e2 && (this.setRaw(t2, e2), this._entities.forEach((i2) => {
      i2._setTemplateProperty(this, t2, e2);
    }));
  }
  remove(t2) {
    t2 in this._settings && (delete this._settings[t2], this._entities.forEach((e2) => {
      e2._removeTemplateProperty(t2);
    }));
  }
  removeAll() {
    q(this._settings, (t2, e2) => {
      this.remove(t2);
    });
  }
  getPrivate(t2, e2) {
    const i2 = this._privateSettings[t2];
    return void 0 !== i2 ? i2 : e2;
  }
  setPrivateRaw(t2, e2) {
    return this._privateSettings[t2] = e2, e2;
  }
  setPrivate(t2, e2) {
    return this._privateSettings[t2] !== e2 && (this.setPrivateRaw(t2, e2), this._entities.forEach((i2) => {
      i2._setTemplatePrivateProperty(this, t2, e2);
    })), e2;
  }
  removePrivate(t2) {
    t2 in this._privateSettings && (delete this._privateSettings[t2], this._entities.forEach((e2) => {
      e2._removeTemplatePrivateProperty(t2);
    }));
  }
  setAll(t2) {
    q(t2, (t3, e2) => {
      this.set(t3, e2);
    });
  }
  on(t2, e2) {
    let i2 = this._settingEvents[t2];
    return void 0 === i2 && (i2 = this._settingEvents[t2] = []), i2.push(e2), new B(() => {
      y(i2, e2), 0 === i2.length && delete this._settingEvents[t2];
    });
  }
  onPrivate(t2, e2) {
    let i2 = this._privateSettingEvents[t2];
    return void 0 === i2 && (i2 = this._privateSettingEvents[t2] = []), i2.push(e2), new B(() => {
      y(i2, e2), 0 === i2.length && delete this._privateSettingEvents[t2];
    });
  }
  _apply(t2, e2) {
    const i2 = [];
    return q(this._settingEvents, (e3, s2) => {
      m(s2, (s3) => {
        i2.push(t2.on(e3, s3));
      });
    }), q(this._privateSettingEvents, (e3, s2) => {
      m(s2, (s3) => {
        i2.push(t2.onPrivate(e3, s3));
      });
    }), this.states._apply(t2, e2), i2.push(this.adapters._apply(t2)), i2.push(t2.events.copyFrom(this.events)), new H(i2);
  }
  _setObjectTemplate(t2) {
    this._entities.push(t2);
  }
  _removeObjectTemplate(t2) {
    v(this._entities, t2);
  }
  _stateChanged(t2) {
    this._entities.forEach((e2) => {
      e2._applyStateByKey(t2);
    });
  }
}
class Ie extends N {
  constructor(t2) {
    super(), Object.defineProperty(this, "_sprite", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rendererDisposers", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dispatchParents", { enumerable: true, configurable: true, writable: true, value: true }), this._sprite = t2;
  }
  _makePointerEvent(t2, e2) {
    return { type: t2, originalEvent: e2.event, point: e2.point, simulated: e2.simulated, native: e2.native, target: this._sprite };
  }
  _onRenderer(t2, e2) {
    this._sprite.set("interactive", true), this._sprite._display.interactive = true;
    let i2 = this._rendererDisposers[t2];
    if (void 0 === i2) {
      const s2 = this._sprite._display.on(t2, (t3) => {
        e2.call(this, t3);
      });
      i2 = this._rendererDisposers[t2] = new L(() => {
        delete this._rendererDisposers[t2], s2.dispose();
      });
    }
    return i2.increment();
  }
  _on(t2, e2, i2, s2, r2, n2) {
    const a2 = super._on(t2, e2, i2, s2, r2, n2), o2 = Ie.RENDERER_EVENTS[e2];
    return void 0 !== o2 && (a2.disposer = new H([a2.disposer, this._onRenderer(e2, o2)])), a2;
  }
  stopParentDispatch() {
    this._dispatchParents = false;
  }
  dispatchParents(t2, e2) {
    const i2 = this._dispatchParents;
    this._dispatchParents = true;
    try {
      this.dispatch(t2, e2), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(t2, e2);
    } finally {
      this._dispatchParents = i2;
    }
  }
}
Object.defineProperty(Ie, "RENDERER_EVENTS", { enumerable: true, configurable: true, writable: true, value: { click: function(t2) {
  this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", t2)) && this.dispatch("click", this._makePointerEvent("click", t2));
}, rightclick: function(t2) {
  this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", t2));
}, middleclick: function(t2) {
  this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", t2));
}, dblclick: function(t2) {
  this.dispatchParents("dblclick", this._makePointerEvent("dblclick", t2));
}, pointerover: function(t2) {
  this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", t2));
}, pointerout: function(t2) {
  this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", t2));
}, pointerdown: function(t2) {
  this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", t2));
}, pointerup: function(t2) {
  this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", t2));
}, globalpointerup: function(t2) {
  this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", t2));
}, globalpointermove: function(t2) {
  this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", t2));
}, wheel: function(t2) {
  this.dispatchParents("wheel", { type: "wheel", target: this._sprite, originalEvent: t2.event, point: t2.point });
} } });
class He extends Ee {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_localBounds", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_parent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dataItem", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_templateField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_sizeDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dragEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dragPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isHidden", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isShowing", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isHiding", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_downPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downPoints", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_toggleDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dragDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_hoverDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_focusDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipMoveDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipPointerDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_statesHandled", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _afterNew() {
    this.setPrivateRaw("visible", true), super._afterNew();
  }
  _markDirtyKey(t2) {
    super._markDirtyKey(t2), "x" != t2 && "y" != t2 && "dx" != t2 && "dy" != t2 || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition());
  }
  _markDirtyPrivateKey(t2) {
    super._markDirtyPrivateKey(t2), "x" != t2 && "y" != t2 || this.markDirtyPosition();
  }
  _removeTemplateField() {
    this._templateField && this._templateField._removeObjectTemplate(this);
  }
  _createEvents() {
    return new Ie(this);
  }
  _processTemplateField() {
    let t2;
    const e2 = this.get("templateField");
    if (e2) {
      const i2 = this.dataItem;
      if (i2) {
        const s2 = i2.dataContext;
        s2 && (t2 = s2[e2], t2 instanceof Be || !t2 || (t2 = Be.new(t2)));
      }
    }
    this._templateField !== t2 && (this._removeTemplateField(), this._templateField = t2, t2 && t2._setObjectTemplate(this), this._applyTemplates());
  }
  _setDataItem(t2) {
    const e2 = this._dataItem;
    this._dataItem = t2, this._processTemplateField();
    const i2 = "dataitemchanged";
    t2 != e2 && this.events.isEnabled(i2) && this.events.dispatch(i2, { type: i2, target: this, oldDataItem: e2, newDataItem: t2 });
  }
  set dataItem(t2) {
    this._setDataItem(t2);
  }
  get dataItem() {
    if (this._dataItem)
      return this._dataItem;
    {
      let t2 = this._parent;
      for (; t2; ) {
        if (t2._dataItem)
          return t2._dataItem;
        t2 = t2._parent;
      }
    }
  }
  _addPercentageSizeChildren() {
    let t2 = this.parent;
    t2 && (this.get("width") instanceof K || this.get("height") instanceof K ? P(t2._percentageSizeChildren, this) : y(t2._percentageSizeChildren, this));
  }
  _addPercentagePositionChildren() {
    let t2 = this.parent;
    t2 && (this.get("x") instanceof K || this.get("y") instanceof K ? P(t2._percentagePositionChildren, this) : y(t2._percentagePositionChildren, this));
  }
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const t2 = this._localBounds;
    if (t2) {
      const e2 = this.get("centerX");
      null != e2 && (this._display.pivot.x = t2.left + bt(e2, t2.right - t2.left));
      const i2 = this.get("centerY");
      null != i2 && (this._display.pivot.y = t2.top + bt(i2, t2.bottom - t2.top));
    }
  }
  _beforeChanged() {
    if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip")) {
      const t2 = this._prevSettings.tooltip;
      t2 && t2.dispose();
    }
    if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition")) {
      const t2 = this._tooltipMoveDp;
      t2 && (t2.dispose(), this._tooltipMoveDp = void 0);
      const e2 = this._tooltipPointerDp;
      e2 && (e2.dispose(), this._tooltipPointerDp = void 0), "pointer" == this.get("tooltipPosition") && (this.isHover() && (this._tooltipMoveDp = this.events.on("globalpointermove", (t3) => {
        this.showTooltip(t3.point);
      })), this._tooltipPointerDp = new H([this.events.on("pointerover", () => {
        this._tooltipMoveDp = this.events.on("globalpointermove", (t3) => {
          this.showTooltip(t3.point);
        });
      }), this.events.on("pointerout", () => {
        const t3 = this._tooltipMoveDp;
        t3 && (t3.dispose(), this._tooltipMoveDp = void 0);
      })]));
    }
  }
  _handleStates() {
    this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", true)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", false)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", false)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", true)), this.markDirtyAccessibility()), this._statesHandled = true);
  }
  _changed() {
    super._changed();
    const t2 = this._display, e2 = this.events;
    if (this.isDirty("draggable")) {
      const i2 = this.get("draggable");
      i2 ? (this.set("interactive", true), this._dragDp = new H([e2.on("pointerdown", (t3) => {
        this.dragStart(t3);
      }), e2.on("globalpointermove", (t3) => {
        this.dragMove(t3);
      }), e2.on("globalpointerup", (t3) => {
        this.dragStop(t3);
      })])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), t2.cancelTouch = !!i2;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const t3 = this.get("tooltipText"), i2 = this.get("tooltipHTML"), s2 = this.get("showTooltipOn", "hover");
      this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (t3 || i2) && ("click" == s2 ? (this._tooltipDp = new H([e2.on("click", () => {
        this.setTimeout(() => this.showTooltip(), 10);
      }), it(document, "click", (t4) => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)) : "always" == s2 || (this._tooltipDp = new H([e2.on("pointerover", () => {
        this.showTooltip();
      }), e2.on("pointerout", () => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)));
    }
    if (this.isDirty("toggleKey")) {
      let t3 = this.get("toggleKey");
      t3 && "none" != t3 ? this._toggleDp = e2.on("click", () => {
        this._isDragging || this.set(t3, !this.get(t3));
      }) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0);
    }
    if (this.isDirty("opacity") && (t2.alpha = Math.max(0, this.get("opacity", 1))), this.isDirty("rotation") && (this.markDirtyBounds(), t2.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), t2.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? t2.visible = true : (t2.visible = false, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds(), this._addPercentageSizeChildren();
      const t3 = this.parent;
      t3 && (this.isDirty("width") && this.get("width") instanceof K || this.isDirty("height") && this.get("height") instanceof K) && (t3.markDirty(), t3._prevWidth = 0), this._sizeDirty = true;
    }
    if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && (this.markDirtyBounds(), this._sizeDirty = true), this._sizeDirty && this._updateSize(), this.isDirty("wheelable")) {
      const e3 = this.get("wheelable");
      e3 && this.set("interactive", true), t2.wheelable = !!e3;
    }
    if ((this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (t2.filter = this.get("filter")), this.isDirty("cursorOverStyle") && (t2.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new H([e2.on("focus", () => {
      this.showTooltip();
    }), e2.on("blur", () => {
      this.hideTooltip();
    })]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility()), this.isPrivateDirty("focusable") && this.markDirtyAccessibility(), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (t2.exportable = this.get("exportable")), this.isDirty("interactive")) {
      const t3 = this.events;
      this.get("interactive") ? this._hoverDp = new H([t3.on("click", (t4) => {
        lt(t4.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout(() => {
          this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", true), this.events.dispatch("pointerover", { type: "pointerover", target: t4.target, originalEvent: t4.originalEvent, point: t4.point, simulated: t4.simulated });
        }, 10));
      }), t3.on("globalpointerup", (t4) => {
        lt(t4.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", false), this.events.dispatch("pointerout", { type: "pointerout", target: t4.target, originalEvent: t4.originalEvent, point: t4.point, simulated: t4.simulated })), this._isDown && this._handleUp(t4);
      }), t3.on("pointerover", () => {
        this._handleOver();
      }), t3.on("pointerout", () => {
        this._handleOut();
      }), t3.on("pointerdown", (t4) => {
        this._handleDown(t4);
      })]) : (this._display.interactive = false, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0));
    }
    this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", false)), "always" == this.get("showTooltipOn") && this._display.visible && this.showTooltip();
  }
  dragStart(t2) {
    this._dragEvent = t2, this.events.stopParentDispatch();
  }
  dragStop(t2) {
    if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging) {
      this._isDragging = false;
      const e2 = "dragstop";
      this.events.isEnabled(e2) && this.events.dispatch(e2, { type: e2, target: this, originalEvent: t2.originalEvent, point: t2.point, simulated: t2.simulated });
    }
  }
  _handleOver() {
    this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleOut() {
    this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleUp(t2) {
    if (!this.isHidden()) {
      this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
      const e2 = nt(t2.originalEvent);
      delete this._downPoints[e2], 0 == $(this._downPoints).length && (this._isDown = false);
    }
  }
  _hasMoved(t2) {
    const e2 = nt(t2.originalEvent), i2 = this._downPoints[e2];
    if (i2) {
      const e3 = Math.abs(i2.x - t2.point.x), s2 = Math.abs(i2.y - t2.point.y);
      return e3 > 5 || s2 > 5;
    }
    return false;
  }
  _hasDown() {
    return $(this._downPoints).length > 0;
  }
  _handleDown(t2) {
    const e2 = this.parent;
    if (e2 && !this.get("draggable") && e2._handleDown(t2), this.get("interactive") && !this.isHidden()) {
      this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = { x: t2.point.x, y: t2.point.y }, this._isDown = true;
      const e3 = nt(t2.originalEvent);
      this._downPoints[e3] = { x: t2.point.x, y: t2.point.y };
    }
  }
  dragMove(t2) {
    let e2 = this._dragEvent;
    if (e2) {
      if (e2.simulated && !t2.simulated)
        return true;
      let i2 = 0, s2 = this.parent;
      for (; null != s2; )
        i2 += s2.get("rotation", 0), s2 = s2.parent;
      let r2 = t2.point.x - e2.point.x, n2 = t2.point.y - e2.point.y;
      const a2 = this.events;
      if (e2.simulated && !this._isDragging) {
        this._isDragging = true, this._dragEvent = t2, this._dragPoint = { x: this.x(), y: this.y() };
        const e3 = "dragstart";
        a2.isEnabled(e3) && a2.dispatch(e3, { type: e3, target: this, originalEvent: t2.originalEvent, point: t2.point, simulated: t2.simulated });
      }
      if (this._isDragging) {
        let e3 = this._dragPoint;
        this.set("x", e3.x + r2 * de(i2) + n2 * le(i2)), this.set("y", e3.y + n2 * de(i2) - r2 * le(i2));
        const s3 = "dragged";
        a2.isEnabled(s3) && a2.dispatch(s3, { type: s3, target: this, originalEvent: t2.originalEvent, point: t2.point, simulated: t2.simulated });
      } else if (Math.hypot(r2, n2) > 5) {
        this._isDragging = true, this._dragEvent = t2, this._dragPoint = { x: this.x(), y: this.y() };
        const e3 = "dragstart";
        a2.isEnabled(e3) && a2.dispatch(e3, { type: e3, target: this, originalEvent: t2.originalEvent, point: t2.point, simulated: t2.simulated });
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  depth() {
    let t2 = this.parent, e2 = 0;
    for (; ; ) {
      if (!t2)
        return e2;
      ++e2, t2 = t2.parent;
    }
  }
  markDirtySize() {
    this._sizeDirty = true, this.markDirty();
  }
  markDirtyBounds() {
    const t2 = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this), t2.isMeasured = true, t2.invalidateBounds();
      const e2 = this.parent;
      e2 && "absolute" != this.get("position") && (null == e2.get("width") || null == e2.get("height") || e2.get("layout")) && e2.markDirtyBounds(), this.get("focusable") && this.isFocus() && this.markDirtyAccessibility();
    }
  }
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  markDirtyLayer() {
    this._display.markDirtyLayer(true);
  }
  markDirty() {
    super.markDirty(), this.markDirtyLayer();
  }
  _updateBounds() {
    const t2 = this._adjustedLocalBounds;
    let e2;
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), e2 = this._adjustedLocalBounds) : (e2 = { left: 0, right: 0, top: 0, bottom: 0 }, this._localBounds = e2, this._adjustedLocalBounds = e2), !t2 || t2.left !== e2.left || t2.top !== e2.top || t2.right !== e2.right || t2.bottom !== e2.bottom) {
      const t3 = "boundschanged";
      this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this }), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds());
    }
  }
  _fixMinBounds(t2) {
    let e2 = this.get("minWidth", this.getPrivate("minWidth")), i2 = this.get("minHeight", this.getPrivate("minHeight"));
    l(e2) && t2.right - t2.left < e2 && (t2.right = t2.left + e2), l(i2) && t2.bottom - t2.top < i2 && (t2.bottom = t2.top + i2);
    let s2 = this.getPrivate("width"), r2 = this.getPrivate("height");
    l(s2) && (s2 > 0 ? t2.right = t2.left + s2 : t2.left = t2.right + s2), l(r2) && (r2 > 0 ? t2.bottom = t2.top + r2 : t2.top = t2.bottom + r2);
  }
  _removeParent(t2) {
    t2 && (t2.children.removeValue(this), y(t2._percentageSizeChildren, this), y(t2._percentagePositionChildren, this));
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = false, this._statesHandled = false;
  }
  hover() {
    this.showTooltip(), this._handleOver();
  }
  unhover() {
    this.hideTooltip(), this._handleOut();
  }
  showTooltip(t2) {
    const e2 = this.getTooltip(), i2 = this.get("tooltipText"), s2 = this.get("tooltipHTML");
    if ((i2 || s2) && e2) {
      const r2 = this.get("tooltipPosition"), n2 = this.getPrivate("tooltipTarget", this);
      "fixed" != r2 && t2 || (this._display._setMatrix(), t2 = this.toGlobal(n2._getTooltipPoint())), e2.set("pointTo", t2), e2.set("tooltipTarget", n2), e2.get("x") || e2.set("x", t2.x), e2.get("y") || e2.set("y", t2.y), i2 && e2.label.set("text", i2), s2 && e2.label.set("html", s2);
      const a2 = this.dataItem;
      if (a2 && e2.label._setDataItem(a2), "always" == this.get("showTooltipOn") && (t2.x < 0 || t2.x > this._root.width() || t2.y < 0 || t2.y > this._root.height()))
        return void this.hideTooltip();
      e2.label.text.markDirtyText();
      const o2 = e2.show();
      return this.setPrivateRaw("showingTooltip", true), o2;
    }
  }
  hideTooltip() {
    const t2 = this.getTooltip();
    if (t2 && (t2.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == t2)) {
      let e2 = t2.get("keepTargetHover") && 0 == t2.get("stateAnimationDuration", 0) ? 400 : void 0;
      const i2 = t2.hide(e2);
      return this.setPrivateRaw("showingTooltip", false), i2;
    }
  }
  _getTooltipPoint() {
    const t2 = this._localBounds;
    if (t2) {
      let e2 = 0, i2 = 0;
      return this.get("isMeasured") ? (e2 = t2.left + bt(this.get("tooltipX", 0), t2.right - t2.left), i2 = t2.top + bt(this.get("tooltipY", 0), t2.bottom - t2.top)) : (e2 = bt(this.get("tooltipX", 0), this.width()), i2 = bt(this.get("tooltipY", 0), this.height())), { x: e2, y: i2 };
    }
    return { x: 0, y: 0 };
  }
  getTooltip() {
    let t2 = this.get("tooltip");
    if (t2)
      return t2;
    {
      let t3 = this.parent;
      if (t3)
        return t3.getTooltip();
    }
  }
  _updatePosition() {
    const t2 = this.parent;
    let e2 = this.get("dx", 0), i2 = this.get("dy", 0), s2 = this.get("x"), r2 = this.getPrivate("x"), n2 = 0, a2 = 0;
    const o2 = this.get("position");
    s2 instanceof K && (s2 = t2 ? t2.innerWidth() * s2.value + t2.get("paddingLeft", 0) : 0), l(s2) ? n2 = s2 + e2 : null != r2 ? n2 = r2 : t2 && "relative" == o2 && (n2 = t2.get("paddingLeft", 0) + e2);
    let h2 = this.get("y"), d2 = this.getPrivate("y");
    h2 instanceof K && (h2 = t2 ? t2.innerHeight() * h2.value + t2.get("paddingTop", 0) : 0), l(h2) ? a2 = h2 + i2 : null != d2 ? a2 = d2 : t2 && "relative" == o2 && (a2 = t2.get("paddingTop", 0) + i2);
    const u2 = this._display;
    if (u2.x != n2 || u2.y != a2) {
      u2.invalidateBounds(), u2.x = n2, u2.y = a2;
      const t3 = "positionchanged";
      this.events.isEnabled(t3) && this.events.dispatch(t3, { type: t3, target: this });
    }
    this.getPrivate("showingTooltip") && this.showTooltip();
  }
  x() {
    let t2 = this.get("x"), e2 = this.getPrivate("x");
    const i2 = this.parent;
    return i2 ? t2 instanceof K ? bt(t2, i2.innerWidth()) + i2.get("paddingLeft", 0) : l(t2) ? t2 : null != e2 ? e2 : i2.get("paddingLeft", this._display.x) : this._display.x;
  }
  y() {
    let t2 = this.getPrivate("y");
    if (null != t2)
      return t2;
    let e2 = this.get("y");
    const i2 = this.parent;
    return i2 ? e2 instanceof K ? bt(e2, i2.innerHeight()) + i2.get("paddingTop", 0) : l(e2) ? e2 : null != t2 ? t2 : i2.get("paddingTop", this._display.y) : this._display.y;
  }
  _dispose() {
    super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
    const t2 = this.get("tooltip");
    t2 && t2.dispose(), this.markDirty();
  }
  adjustedLocalBounds() {
    return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds;
  }
  localBounds() {
    return this._localBounds;
  }
  bounds() {
    const t2 = this._adjustedLocalBounds, e2 = this.x(), i2 = this.y();
    return { left: t2.left + e2, right: t2.right + e2, top: t2.top + i2, bottom: t2.bottom + i2 };
  }
  globalBounds() {
    const t2 = this.localBounds(), e2 = this.toGlobal({ x: t2.left, y: t2.top }), i2 = this.toGlobal({ x: t2.right, y: t2.top }), s2 = this.toGlobal({ x: t2.right, y: t2.bottom }), r2 = this.toGlobal({ x: t2.left, y: t2.bottom });
    return { left: Math.min(e2.x, i2.x, s2.x, r2.x), top: Math.min(e2.y, i2.y, s2.y, r2.y), right: Math.max(e2.x, i2.x, s2.x, r2.x), bottom: Math.max(e2.y, i2.y, s2.y, r2.y) };
  }
  _onShow(t2) {
  }
  _onHide(t2) {
  }
  appear(e2, i2) {
    return t(this, void 0, void 0, function* () {
      return yield this.hide(0), i2 ? new Promise((t2, s2) => {
        this.setTimeout(() => {
          t2(this.show(e2));
        }, i2);
      }) : this.show(e2);
    });
  }
  show(e2) {
    return t(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = false, this._isShowing = true, this._isHiding = false, this.states.lookup("default").get("visible") && this.set("visible", true), this._onShow(e2);
        const t2 = this.states.applyAnimate("default", e2);
        yield Jt(t2), this._isShowing = false;
      }
    });
  }
  hide(e2) {
    return t(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = true, this._isShowing = false;
        let t2 = this.states.lookup("hidden");
        t2 || (t2 = this.states.create("hidden", { opacity: 0, visible: false })), this._isHidden = true, this._onHide(e2);
        const i2 = this.states.applyAnimate("hidden", e2);
        yield Jt(i2), this._isHiding = false;
      }
    });
  }
  isHidden() {
    return this._isHidden;
  }
  isShowing() {
    return this._isShowing;
  }
  isHiding() {
    return this._isHiding;
  }
  isHover() {
    return this._display.hovering();
  }
  isFocus() {
    return this._root.focused(this);
  }
  isDragging() {
    return this._isDragging;
  }
  isVisible() {
    return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"));
  }
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  compositeOpacity() {
    const t2 = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * t2 : t2;
  }
  width() {
    let t2 = this.get("width"), e2 = this.get("maxWidth", this.getPrivate("maxWidth")), i2 = this.get("minWidth", this.getPrivate("minWidth")), s2 = this.getPrivate("width"), r2 = 0;
    if (l(s2))
      r2 = s2;
    else if (null == t2)
      this._adjustedLocalBounds && (r2 = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
    else if (t2 instanceof K) {
      const e3 = this.parent;
      r2 = e3 ? e3.innerWidth() * t2.value : this._root.width() * t2.value;
    } else
      l(t2) && (r2 = t2);
    return l(i2) && (r2 = Math.max(i2, r2)), l(e2) && (r2 = Math.min(e2, r2)), r2;
  }
  maxWidth() {
    let t2 = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (l(t2))
      return t2;
    {
      let t3 = this.get("width");
      if (l(t3))
        return t3;
    }
    const e2 = this.parent;
    return e2 ? e2.innerWidth() : this._root.width();
  }
  maxHeight() {
    let t2 = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (l(t2))
      return t2;
    {
      let t3 = this.get("height");
      if (l(t3))
        return t3;
    }
    const e2 = this.parent;
    return e2 ? e2.innerHeight() : this._root.height();
  }
  height() {
    let t2 = this.get("height"), e2 = this.get("maxHeight", this.getPrivate("maxHeight")), i2 = this.get("minHeight", this.getPrivate("minHeight")), s2 = this.getPrivate("height"), r2 = 0;
    if (l(s2))
      r2 = s2;
    else if (null == t2)
      this._adjustedLocalBounds && (r2 = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
    else if (t2 instanceof K) {
      const e3 = this.parent;
      r2 = e3 ? e3.innerHeight() * t2.value : this._root.height() * t2.value;
    } else
      l(t2) && (r2 = t2);
    return l(i2) && (r2 = Math.max(i2, r2)), l(e2) && (r2 = Math.min(e2, r2)), r2;
  }
  _findStaticTemplate(t2) {
    return this._templateField && t2(this._templateField) ? this._templateField : super._findStaticTemplate(t2);
  }
  _walkParents(t2) {
    this._parent && this._walkParent(t2);
  }
  _walkParent(t2) {
    this._parent && this._parent._walkParent(t2), t2(this);
  }
  get parent() {
    return this._parent;
  }
  _setParent(t2, e2 = false) {
    const i2 = this._parent;
    t2 !== i2 && (this.markDirtyBounds(), t2.markDirty(), this._parent = t2, e2 && (this._removeParent(i2), t2 && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes());
  }
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  toGlobal(t2) {
    return this._display.toGlobal(t2);
  }
  toLocal(t2) {
    return this._display.toLocal(t2);
  }
  _getDownPoint() {
    const t2 = this._getDownPointId();
    if (t2)
      return this._downPoints[t2];
  }
  _getDownPointId() {
    if (this._downPoints)
      return Z(this._downPoints, (t2, e2) => t2 > e2 ? 1 : t2 < e2 ? -1 : 0)[0];
  }
  toFront() {
    const t2 = this.parent;
    t2 && t2.children.moveValue(this, t2.children.length - 1);
  }
  toBack() {
    const t2 = this.parent;
    t2 && t2.children.moveValue(this, 0);
  }
}
Object.defineProperty(He, "className", { enumerable: true, configurable: true, writable: true, value: "Sprite" }), Object.defineProperty(He, "classNames", { enumerable: true, configurable: true, writable: true, value: Ee.classNames.concat([He.className]) });
class Le extends Ee {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_backgroundDisplay", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_pattern", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("color") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fill") || this.isDirty("fillOpacity")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const t2 = this.get("repetition", ""), e2 = this.get("width", 100), i2 = this.get("height", 100), s2 = this.get("fill"), r2 = this.get("fillOpacity", 1);
      this._display.clear(), this._backgroundDisplay.clear(), s2 && r2 > 0 && (this._backgroundDisplay.beginFill(s2, r2), this._backgroundDisplay.drawRect(0, 0, e2, i2), this._backgroundDisplay.endFill()), this._display.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(this._display, this._backgroundDisplay, t2, e2, i2);
    }
  }
}
Object.defineProperty(Le, "className", { enumerable: true, configurable: true, writable: true, value: "Pattern" }), Object.defineProperty(Le, "classNames", { enumerable: true, configurable: true, writable: true, value: Ee.classNames.concat([Le.className]) });
class Ne extends Le {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_image", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _beforeChanged() {
    super._beforeChanged(), this._clear = true, this.isDirty("src") && this._load();
  }
  _draw() {
    super._draw();
    const t2 = this._image;
    if (t2) {
      const e2 = this.get("width", 100), i2 = this.get("height", 100), s2 = this.get("fit", "image");
      let r2 = 0, n2 = 0;
      "pattern" == s2 ? (r2 = e2, n2 = i2) : (r2 = t2.width, n2 = t2.height, "image" == s2 && (this.set("width", r2), this.set("height", n2)));
      let a2 = 0, o2 = 0;
      this.get("centered", true) && (a2 = e2 / 2 - r2 / 2, o2 = i2 / 2 - n2 / 2), this._display.image(t2, r2, n2, a2, o2);
    }
  }
  _load() {
    const t2 = this.get("src");
    if (t2) {
      const e2 = new Image();
      e2.src = t2, e2.decode().then(() => {
        this._image = e2, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded", { type: "loaded", target: this });
      }).catch((t3) => {
      });
    }
  }
}
var Re;
Object.defineProperty(Ne, "className", { enumerable: true, configurable: true, writable: true, value: "PicturePattern" }), Object.defineProperty(Ne, "classNames", { enumerable: true, configurable: true, writable: true, value: Le.classNames.concat([Ne.className]) }), function(t2) {
  t2.ADD = "lighter", t2.COLOR = "color", t2.COLOR_BURN = "color-burn", t2.COLOR_DODGE = "color-dodge", t2.DARKEN = "darken", t2.DIFFERENCE = "difference", t2.DST_OVER = "destination-over", t2.EXCLUSION = "exclusion", t2.HARD_LIGHT = "hard-light", t2.HUE = "hue", t2.LIGHTEN = "lighten", t2.LUMINOSITY = "luminosity", t2.MULTIPLY = "multiply", t2.NORMAL = "source-over", t2.OVERLAY = "overlay", t2.SATURATION = "saturation", t2.SCREEN = "screen", t2.SOFT_LIGHT = "soft-light", t2.SRC_ATOP = "source-atop", t2.XOR = "xor";
}(Re || (Re = {}));
const Fe = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset"];
class We extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _beforeChanged() {
    if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = true), this._display.crisp = this.get("crisp", false), this.isDirty("fillGradient")) {
      const t2 = this.get("fillGradient");
      if (t2) {
        this._display.isMeasured = true;
        const e2 = t2.get("target");
        e2 && (this._disposers.push(e2.events.on("boundschanged", () => {
          this._markDirtyKey("fill");
        })), this._disposers.push(e2.events.on("positionchanged", () => {
          this._markDirtyKey("fill");
        })));
      }
    }
    if (this.isDirty("strokeGradient")) {
      const t2 = this.get("strokeGradient");
      if (t2) {
        this._display.isMeasured = true;
        const e2 = t2.get("target");
        e2 && (this._disposers.push(e2.events.on("boundschanged", () => {
          this._markDirtyKey("stroke");
        })), this._disposers.push(e2.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        })));
      }
    }
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
      let t2 = this.get("strokeDasharray");
      l(t2) && (t2 = t2 < 0.5 ? [0] : [t2]), this._display.setLineDash(t2);
      const e2 = this.get("strokeDashoffset");
      e2 && this._display.setLineDashOffset(e2);
      const i2 = this.get("blendMode", Re.NORMAL);
      this._display.blendMode = i2;
      const s2 = this.get("draw");
      s2 && s2(this._display, this);
      const r2 = this.get("svgPath");
      null != r2 && this._display.svgPath(r2);
    }
  }
  _afterChanged() {
    if (super._afterChanged(), this._clear) {
      const t2 = this.get("fill"), e2 = this.get("fillGradient"), i2 = this.get("fillPattern"), s2 = this.get("fillOpacity"), r2 = this.get("stroke"), n2 = this.get("strokeGradient"), a2 = this.get("strokePattern"), o2 = this.get("shadowColor"), h2 = this.get("shadowBlur"), l2 = this.get("shadowOffsetX"), d2 = this.get("shadowOffsetY"), u2 = this.get("shadowOpacity");
      if (o2 && (h2 || l2 || d2) && this._display.shadow(o2, h2, l2, d2, u2), i2) {
        let e3 = false;
        !t2 || i2.get("fill") && !i2.get("fillInherited") || (i2.set("fill", t2), i2.set("fillInherited", true), e3 = true), !r2 || i2.get("color") && !i2.get("colorInherited") || (i2.set("color", r2), i2.set("colorInherited", true), e3 = true), e3 && i2._changed();
        const n3 = i2.pattern;
        n3 && (this._display.beginFill(n3, s2), this._display.endFill(), i2 instanceof Ne && i2.events.once("loaded", () => {
          this._clear = true, this.markDirty();
        }));
      } else if (e2) {
        if (t2) {
          const i4 = e2.get("stops", []);
          i4.length && m(i4, (e3) => {
            e3.color && !e3.colorInherited || !t2 || (e3.color = t2, e3.colorInherited = true), (null == e3.opacity || e3.opacityInherited) && (e3.opacity = s2, e3.opacityInherited = true);
          });
        }
        const i3 = e2.getFill(this);
        i3 && (this._display.beginFill(i3, s2), this._display.endFill());
      } else
        t2 && (this._display.beginFill(t2, s2), this._display.endFill());
      if (r2 || n2 || a2) {
        const t3 = this.get("strokeOpacity");
        let e3 = this.get("strokeWidth", 1);
        this.get("nonScalingStroke") && (e3 /= this.get("scale", 1)), this.get("crisp") && (e3 /= this._root._renderer.resolution);
        const i3 = this.get("lineJoin");
        if (a2) {
          let s3 = false;
          !r2 || a2.get("color") && !a2.get("colorInherited") || (a2.set("color", r2), a2.set("colorInherited", true), s3 = true), s3 && a2._changed();
          const n3 = a2.pattern;
          n3 && (this._display.lineStyle(e3, n3, t3, i3), this._display.endStroke(), a2 instanceof Ne && a2.events.once("loaded", () => {
            this._clear = true, this.markDirty();
          }));
        } else if (n2) {
          const s3 = n2.get("stops", []);
          s3.length && m(s3, (e4) => {
            e4.color && !e4.colorInherited || !r2 || (e4.color = r2, e4.colorInherited = true), (null == e4.opacity || e4.opacityInherited) && (e4.opacity = t3, e4.opacityInherited = true);
          });
          const a3 = n2.getFill(this);
          a3 && (this._display.lineStyle(e3, a3, t3, i3), this._display.endStroke());
        } else
          r2 && (this._display.lineStyle(e3, r2, t3, i3), this._display.endStroke());
      }
      this.getPrivate("showingTooltip") && this.showTooltip();
    }
    this._clear = false;
  }
}
Object.defineProperty(We, "className", { enumerable: true, configurable: true, writable: true, value: "Graphics" }), Object.defineProperty(We, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([We.className]) });
class Ve extends We {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
  _changed() {
    super._changed(), this._clear && !this.get("draw") && this._draw();
  }
  _draw() {
    this._display.drawRect(0, 0, this.width(), this.height());
  }
  _updateSize() {
    this.markDirty(), this._clear = true;
  }
}
function Ue(t2, e2) {
  t2.get("reverseChildren", false) ? t2.children.eachReverse(e2) : t2.children.each(e2);
}
Object.defineProperty(Ve, "className", { enumerable: true, configurable: true, writable: true, value: "Rectangle" }), Object.defineProperty(Ve, "classNames", { enumerable: true, configurable: true, writable: true, value: We.classNames.concat([Ve.className]) });
class Ke extends Ee {
}
Object.defineProperty(Ke, "className", { enumerable: true, configurable: true, writable: true, value: "Layout" }), Object.defineProperty(Ke, "classNames", { enumerable: true, configurable: true, writable: true, value: Ee.classNames.concat([Ke.className]) });
class ze extends Ke {
  updateContainer(t2) {
    let e2 = t2.get("paddingLeft", 0), i2 = t2.innerWidth(), s2 = 0;
    Ue(t2, (t3) => {
      if (t3.isVisible() && "relative" == t3.get("position")) {
        let e3 = t3.get("width");
        if (e3 instanceof K) {
          s2 += e3.value;
          let r3 = i2 * e3.value, n2 = t3.get("minWidth", t3.getPrivate("minWidth", -1 / 0));
          n2 > r3 && (i2 -= n2, s2 -= e3.value);
          let a2 = t3.get("maxWidth", t3.getPrivate("maxWidth", 1 / 0));
          r3 > a2 && (i2 -= a2, s2 -= e3.value);
        } else
          l(e3) || (e3 = t3.width()), i2 -= e3 + t3.get("marginLeft", 0) + t3.get("marginRight", 0);
      }
    }), (i2 <= 0 || i2 == 1 / 0) && (i2 = 0.1), Ue(t2, (t3) => {
      if (t3.isVisible() && "relative" == t3.get("position")) {
        let e3 = t3.get("width");
        if (e3 instanceof K) {
          let r3 = i2 * e3.value / s2 - t3.get("marginLeft", 0) - t3.get("marginRight", 0), n2 = t3.get("minWidth", t3.getPrivate("minWidth", -1 / 0)), a2 = t3.get("maxWidth", t3.getPrivate("maxWidth", 1 / 0));
          r3 = Math.min(Math.max(n2, r3), a2), t3.setPrivate("width", r3);
        } else
          t3._prevSettings.width instanceof K && t3.setPrivate("width", void 0);
      }
    });
    let r2 = e2;
    Ue(t2, (t3) => {
      if ("relative" == t3.get("position"))
        if (t3.isVisible()) {
          let e3 = t3.adjustedLocalBounds(), i3 = t3.get("marginLeft", 0), s3 = t3.get("marginRight", 0), n2 = t3.get("maxWidth"), a2 = e3.left, o2 = e3.right;
          n2 && o2 - a2 > n2 && (o2 = a2 + n2);
          let h2 = r2 + i3 - a2;
          t3.setPrivate("x", h2), r2 = h2 + o2 + s3;
        } else
          t3.setPrivate("x", void 0);
    });
  }
}
Object.defineProperty(ze, "className", { enumerable: true, configurable: true, writable: true, value: "HorizontalLayout" }), Object.defineProperty(ze, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([ze.className]) });
class Ge extends Ke {
  updateContainer(t2) {
    let e2 = t2.get("paddingTop", 0), i2 = t2.innerHeight(), s2 = 0;
    Ue(t2, (t3) => {
      if (t3.isVisible() && "relative" == t3.get("position")) {
        let e3 = t3.get("height");
        if (e3 instanceof K) {
          s2 += e3.value;
          let r3 = i2 * e3.value, n2 = t3.get("minHeight", t3.getPrivate("minHeight", -1 / 0));
          n2 > r3 && (i2 -= n2, s2 -= e3.value);
          let a2 = t3.get("maxHeight", t3.getPrivate("maxHeight", 1 / 0));
          r3 > a2 && (i2 -= a2, s2 -= e3.value);
        } else
          l(e3) || (e3 = t3.height()), i2 -= e3 + t3.get("marginTop", 0) + t3.get("marginBottom", 0);
      }
    }), (i2 <= 0 || i2 == 1 / 0) && (i2 = 0.1), Ue(t2, (t3) => {
      if (t3.isVisible() && "relative" == t3.get("position")) {
        let e3 = t3.get("height");
        if (e3 instanceof K) {
          let r3 = i2 * e3.value / s2 - t3.get("marginTop", 0) - t3.get("marginBottom", 0), n2 = t3.get("minHeight", t3.getPrivate("minHeight", -1 / 0)), a2 = t3.get("maxHeight", t3.getPrivate("maxHeight", 1 / 0));
          r3 = Math.min(Math.max(n2, r3), a2), t3.setPrivate("height", r3);
        } else
          t3._prevSettings.height instanceof K && t3.setPrivate("height", void 0);
      }
    });
    let r2 = e2;
    Ue(t2, (t3) => {
      if ("relative" == t3.get("position"))
        if (t3.isVisible()) {
          let e3 = t3.adjustedLocalBounds(), i3 = t3.get("marginTop", 0), s3 = e3.top, n2 = e3.bottom, a2 = t3.get("maxHeight");
          a2 && n2 - s3 > a2 && (n2 = s3 + a2);
          let o2 = t3.get("marginBottom", 0), h2 = r2 + i3 - s3;
          t3.setPrivate("y", h2), r2 = h2 + n2 + o2;
        } else
          t3.setPrivate("y", void 0);
    });
  }
}
Object.defineProperty(Ge, "className", { enumerable: true, configurable: true, writable: true, value: "VerticalLayout" }), Object.defineProperty(Ge, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([Ge.className]) });
class Ye extends Ke {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew();
  }
  updateContainer(t2) {
    let e2 = t2.get("paddingLeft", 0), i2 = t2.get("paddingRight", 0), s2 = t2.get("paddingTop", 0), r2 = t2.maxWidth() - e2 - i2, n2 = r2, a2 = 1;
    Ue(t2, (t3) => {
      if (t3.get("visible") && t3.getPrivate("visible") && !t3.get("forceHidden") && "absolute" != t3.get("position")) {
        let e3 = t3.width();
        e3 < n2 && (n2 = e3), e3 > a2 && (a2 = e3);
      }
    }), n2 = he(n2, 1, r2), a2 = he(a2, 1, r2);
    let o2 = 1;
    o2 = this.get("fixedWidthGrid") ? r2 / a2 : r2 / n2, o2 = Math.max(1, Math.floor(o2)), o2 = Math.min(this.get("maxColumns", Number.MAX_VALUE), o2);
    let h2 = this.getColumnWidths(t2, o2, a2, r2), l2 = s2, d2 = 0, u2 = 0;
    o2 = h2.length;
    let p2 = e2;
    Ue(t2, (t3) => {
      if ("relative" == t3.get("position") && t3.isVisible()) {
        const i3 = t3.get("marginTop", 0), s3 = t3.get("marginBottom", 0);
        let r3 = t3.adjustedLocalBounds(), n3 = t3.get("marginLeft", 0), a3 = t3.get("marginRight", 0), c2 = p2 + n3 - r3.left, g2 = l2 + i3 - r3.top;
        t3.setPrivate("x", c2), t3.setPrivate("y", g2), p2 += h2[d2] + a3, u2 = Math.max(u2, t3.height() + i3 + s3), d2++, d2 >= o2 && (d2 = 0, p2 = e2, l2 += u2);
      }
    });
  }
  getColumnWidths(t2, e2, i2, s2) {
    let r2 = 0, n2 = [], a2 = 0;
    return Ue(t2, (s3) => {
      let r3 = s3.adjustedLocalBounds();
      "absolute" != s3.get("position") && s3.isVisible() && (this.get("fixedWidthGrid") ? n2[a2] = i2 : n2[a2] = Math.max(0 | n2[a2], r3.right - r3.left + s3.get("marginLeft", 0) + s3.get("marginRight", 0)), a2 < t2.children.length - 1 && (a2++, a2 == e2 && (a2 = 0)));
    }), m(n2, (t3) => {
      r2 += t3;
    }), r2 > s2 ? e2 > 2 ? (e2 -= 1, this.getColumnWidths(t2, e2, i2, s2)) : [s2] : n2;
  }
}
Object.defineProperty(Ye, "className", { enumerable: true, configurable: true, writable: true, value: "GridLayout" }), Object.defineProperty(Ye, "classNames", { enumerable: true, configurable: true, writable: true, value: Ke.classNames.concat([Ye.className]) });
class Xe {
  static escape(t2) {
    return t2.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  static unescape(t2) {
    return t2.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  static cleanUp(t2) {
    return t2.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  static chunk(t2, e2 = false, i2 = false) {
    let s2 = [];
    t2 = this.escape(t2);
    let r2 = e2 ? t2.split("'") : [t2];
    for (let n2 = 0; n2 < r2.length; n2++) {
      let t3 = r2[n2];
      if ("" !== t3)
        if (n2 % 2 == 0) {
          t3 = t3.replace(/\]\[/g, "]" + u + "["), t3 = t3.replace(/\[\]/g, "[ ]");
          let e3 = t3.split(/[\[\]]+/);
          for (let t4 = 0; t4 < e3.length; t4++) {
            let r3 = this.cleanUp(this.unescape(e3[t4]));
            r3 !== u && ("" !== r3 && (t4 % 2 == 0 ? s2.push({ type: "value", text: r3 }) : s2.push({ type: i2 ? "value" : "format", text: "[" + r3 + "]" })));
          }
        } else {
          let e3 = t3.split(/[\[\]]+/);
          for (let t4 = 0; t4 < e3.length; t4++) {
            let i3 = this.cleanUp(this.unescape(e3[t4]));
            "" !== i3 && (t4 % 2 == 0 ? s2.push({ type: "text", text: i3 }) : this.isImage(i3) ? s2.push({ type: "image", text: "[" + i3 + "]" }) : s2.push({ type: "format", text: "[" + i3 + "]" }));
          }
        }
    }
    return s2;
  }
  static isImage(t2) {
    return !!t2.match(/img[ ]?:/);
  }
  static getTextStyle(t2) {
    let e2 = {};
    if ("" == t2 || "[ ]" == t2)
      return {};
    const i2 = t2.match(/('[^']*')|("[^"]*")/gi);
    if (i2)
      for (let r2 = 0; r2 < i2.length; r2++)
        t2 = t2.replace(i2[r2], i2[r2].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
    let s2 = t2.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!s2)
      return {};
    for (let r2 = 0; r2 < s2.length; r2++)
      if (s2[r2].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i))
        e2.fontWeight = s2[r2];
      else if (s2[r2].match(/^(underline|line-through)$/i))
        e2.textDecoration = s2[r2];
      else if ("/" == s2[r2])
        ;
      else if (s2[r2].match(/:/)) {
        const t3 = s2[r2].replace("+", " ").split(/:[ ]*/);
        e2[t3[0]] = t3[1];
      } else
        e2.fill = Zt.fromString(s2[r2]);
    return e2;
  }
}
function $e(t2, e2) {
  if (null != e2) {
    e2 = "" + e2;
    let i2, s2 = (e2 = Xe.escape(e2)).match(/\{([^}]+)\}/g);
    if (s2)
      for (i2 = 0; i2 < s2.length; i2++) {
        let r2 = Ze(t2, s2[i2].replace(/\{([^}]+)\}/, "$1"));
        null == r2 && (r2 = ""), e2 = e2.split(s2[i2]).join(r2);
      }
    e2 = Xe.unescape(e2);
  } else
    e2 = "";
  return e2;
}
function Ze(t2, e2, i2) {
  let s2;
  const r2 = t2.dataItem;
  let n2, a2 = [], o2 = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  for (; n2 = o2.exec(e2), null !== n2; )
    if (n2[3]) {
      a2.push({ prop: n2[3] });
      const e3 = t2.getDateFormatter().get("dateFields", []), i3 = t2.getNumberFormatter().get("numericFields", []), s3 = t2.getDurationFormatter().get("durationFields", []);
      -1 !== e3.indexOf(n2[3]) ? a2.push({ method: "formatDate", params: [] }) : -1 !== i3.indexOf(n2[3]) ? a2.push({ method: "formatNumber", params: [] }) : -1 !== s3.indexOf(n2[3]) && a2.push({ method: "formatDuration", params: [] });
    } else {
      let t3 = [];
      if ("" != Dt(n2[2])) {
        let e3, i3 = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
        for (; e3 = i3.exec(n2[2]), null !== e3; )
          t3.push(e3[1] || e3[2] || e3[3]);
      }
      a2.push({ method: n2[1], params: t3 });
    }
  if (r2) {
    s2 = qe(t2, a2, r2._settings), (null == s2 || d(s2)) && (s2 = qe(t2, a2, r2));
    let i3 = r2.dataContext;
    null == s2 && i3 && (s2 = qe(t2, a2, i3), null == s2 && (s2 = qe(t2, [{ prop: e2 }], i3)), null == s2 && i3.dataContext && (s2 = qe(t2, a2, i3.dataContext))), null == s2 && r2.component && r2.component.dataItem !== r2 && (s2 = Ze(r2.component, e2));
  }
  return null == s2 && (s2 = qe(t2, a2, t2)), null == s2 && t2.parent && (s2 = Ze(t2.parent, e2)), s2;
}
function Je(t2, e2) {
  const i2 = t2.getPrivate("customData");
  if (d(i2))
    return i2[e2];
}
function qe(t2, i2, n2, a2) {
  let h2 = n2, d2 = false;
  for (let l2 = 0, u2 = i2.length; l2 < u2; l2++) {
    let u3 = i2[l2];
    if (u3.prop) {
      if (h2 instanceof He) {
        let t3 = h2.get(u3.prop);
        null == t3 && (t3 = h2.getPrivate(u3.prop)), null == t3 && (t3 = Je(h2, u3.prop)), null == t3 && (t3 = h2[u3.prop]), h2 = t3;
      } else if (h2.get) {
        let t3 = h2.get(u3.prop);
        null == t3 && (t3 = h2[u3.prop]), h2 = t3;
      } else
        h2 = h2[u3.prop];
      if (null == h2)
        return;
    } else
      switch (u3.method) {
        case "formatNumber":
          let i3 = s(h2);
          null != i3 && (h2 = t2.getNumberFormatter().format(i3, a2 || u3.params[0] || void 0), d2 = true);
          break;
        case "formatDate":
          let l3 = r(h2);
          if (!o(l3) || e(l3.getTime()))
            return;
          null != l3 && (h2 = t2.getDateFormatter().format(l3, a2 || u3.params[0] || void 0), d2 = true);
          break;
        case "formatDuration":
          let p2 = s(h2);
          null != p2 && (h2 = t2.getDurationFormatter().format(p2, a2 || u3.params[0] || void 0, u3.params[1] || void 0), d2 = true);
          break;
        case "urlEncode":
        case "encodeURIComponent":
          h2 = encodeURIComponent(h2);
          break;
        default:
          h2[u3.method] && h2[u3.method].apply(n2, u3.params);
      }
  }
  if (!d2) {
    let e2 = [{ method: "", params: a2 }];
    if (null == a2)
      l(h2) ? (e2[0].method = "formatNumber", e2[0].params = "") : o(h2) && (e2[0].method = "formatDate", e2[0].params = "");
    else {
      let t3 = xt(a2);
      "number" === t3 ? e2[0].method = "formatNumber" : "date" === t3 ? e2[0].method = "formatDate" : "duration" === t3 && (e2[0].method = "formatDuration");
    }
    e2[0].method && (h2 = qe(t2, e2, h2));
  }
  return h2;
}
Object.defineProperty(Xe, "prefix", { enumerable: true, configurable: true, writable: true, value: "__amcharts__" });
class Qe extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "_childrenDisplay", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "children", { enumerable: true, configurable: true, writable: true, value: new U(this) }), Object.defineProperty(this, "_percentageSizeChildren", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_percentagePositionChildren", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_prevWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_prevHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_vsbd0", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_vsbd1", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    super._afterNew(), this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    f(this.allChildren(), (t2) => {
      t2.dispose();
    }), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose();
  }
  _changed() {
    if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", false)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((t2) => {
      t2.removePrivate("x"), t2.removePrivate("y");
    })), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((t2) => {
      t2.markDirtyPosition();
    }), this.isDirty("maskContent")) {
      const t2 = this._childrenDisplay;
      let e2 = this._contentMask;
      this.get("maskContent") ? e2 || (e2 = Ve.new(this._root, { x: -0.5, y: -0.5, width: this.width() + 1, height: this.height() + 1 }), this._contentMask = e2, t2.addChildAt(e2._display, 0), t2.mask = e2._display) : e2 && (t2.removeChild(e2._display), t2.mask = null, e2.dispose(), this._contentMask = void 0);
    }
  }
  _updateSize() {
    super._updateSize(), m(this._percentageSizeChildren, (t2) => {
      t2._updateSize();
    }), m(this._percentagePositionChildren, (t2) => {
      t2.markDirtyPosition(), t2._updateSize();
    }), this.updateBackground();
  }
  updateBackground() {
    const t2 = this.get("background");
    let e2 = this._localBounds;
    if (e2 && !this.isHidden()) {
      let i2 = e2.left, s2 = e2.top, r2 = e2.right - i2, n2 = e2.bottom - s2, a2 = this.get("maxWidth"), o2 = this.get("maxHeight");
      o2 && n2 > o2 && (n2 = o2), a2 && r2 > a2 && (r2 = a2);
      let h2 = this.width(), l2 = this.height();
      t2 && (t2.setAll({ width: r2, height: n2, x: i2, y: s2 }), this._display.interactive && (t2._display.interactive = true));
      const d2 = this._contentMask;
      d2 && d2.setAll({ width: h2 + 1, height: l2 + 1 });
      const u2 = this.get("verticalScrollbar");
      if (u2) {
        u2.set("height", l2), u2.set("x", h2 - u2.width() - u2.get("marginRight", 0)), u2.set("end", u2.get("start", 0) + l2 / this._contentHeight);
        const t3 = u2.get("background");
        t3 && t3.setAll({ width: u2.width(), height: l2 });
        let e3 = true;
        this._contentHeight <= l2 && (e3 = false), u2.setPrivate("visible", e3);
      }
    }
  }
  _applyThemes() {
    return !!super._applyThemes() && (this.eachChildren((t2) => {
      t2._applyThemes();
    }), true);
  }
  _applyState(t2) {
    super._applyState(t2), this.get("setStateOnChildren") && this.eachChildren((e2) => {
      e2.states.apply(t2);
    });
  }
  _applyStateAnimated(t2, e2) {
    super._applyStateAnimated(t2, e2), this.get("setStateOnChildren") && this.eachChildren((i2) => {
      i2.states.applyAnimate(t2, e2);
    });
  }
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    let t2 = this.get("width"), e2 = this.get("height"), i2 = this.getPrivate("width"), s2 = this.getPrivate("height"), r2 = { left: 0, top: 0, right: this.width(), bottom: this.height() }, n2 = this.get("layout"), a2 = false, o2 = false;
    if ((n2 instanceof ze || n2 instanceof Ye) && (a2 = true), n2 instanceof Ge && (o2 = true), null == t2 && null == i2 || null == e2 && null == s2 || this.get("verticalScrollbar")) {
      let t3 = Number.MAX_VALUE, e3 = t3, i3 = -t3, s3 = t3, n3 = -t3;
      const h2 = this.get("paddingLeft", 0), l2 = this.get("paddingTop", 0), d2 = this.get("paddingRight", 0), u2 = this.get("paddingBottom", 0);
      this.children.each((t4) => {
        if ("absolute" != t4.get("position") && t4.get("isMeasured")) {
          let r3 = t4.adjustedLocalBounds(), h3 = t4.x(), l3 = t4.y(), d3 = h3 + r3.left, u3 = h3 + r3.right, p2 = l3 + r3.top, c2 = l3 + r3.bottom;
          a2 && (d3 -= t4.get("marginLeft", 0), u3 += t4.get("marginRight", 0)), o2 && (p2 -= t4.get("marginTop", 0), c2 += t4.get("marginBottom", 0)), d3 < e3 && (e3 = d3), u3 > i3 && (i3 = u3), p2 < s3 && (s3 = p2), c2 > n3 && (n3 = c2);
        }
      }), e3 == t3 && (e3 = 0), i3 == -t3 && (i3 = 0), s3 == t3 && (s3 = 0), n3 == -t3 && (n3 = 0), r2.left = e3 - h2, r2.top = s3 - l2, r2.right = i3 + d2, r2.bottom = n3 + u2;
    }
    this._contentWidth = r2.right - r2.left, this._contentHeight = r2.bottom - r2.top, l(t2) && (r2.left = 0, r2.right = t2), l(i2) && (r2.left = 0, r2.right = i2), l(e2) && (r2.top = 0, r2.bottom = e2), l(s2) && (r2.top = 0, r2.bottom = s2), this._localBounds = r2;
  }
  _updateBounds() {
    const t2 = this.get("layout");
    t2 && t2.updateContainer(this), super._updateBounds(), this.updateBackground();
  }
  markDirty() {
    super.markDirty(), this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const t2 = this.innerWidth(), e2 = this.innerHeight();
    if (t2 != this._prevWidth || e2 != this._prevHeight) {
      let i2 = this.get("layout"), s2 = false, r2 = false;
      i2 && ((i2 instanceof ze || i2 instanceof Ye) && (s2 = true), i2 instanceof Ge && (r2 = true)), m(this._percentageSizeChildren, (i3) => {
        if (!s2) {
          let e3 = i3.get("width");
          e3 instanceof K && i3.setPrivate("width", e3.value * t2);
        }
        if (!r2) {
          let t3 = i3.get("height");
          t3 instanceof K && i3.setPrivate("height", t3.value * e2);
        }
      }), m(this._percentagePositionChildren, (t3) => {
        t3.markDirtyPosition(), t3.markDirtyBounds();
      }), this._prevWidth = t2, this._prevHeight = e2, this._sizeDirty = true, this.updateBackground();
    }
    this._handleStates();
  }
  _updateChildren() {
    if (this.isDirty("html")) {
      const t2 = this.get("html");
      t2 && "" !== t2 ? this._root._setHTMLContent(this, $e(this, this.get("html", ""))) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this);
    }
    if (this.isDirty("verticalScrollbar")) {
      const t2 = this.get("verticalScrollbar");
      if (t2) {
        t2._setParent(this), t2.startGrip.setPrivate("visible", false), t2.endGrip.setPrivate("visible", false), this.set("maskContent", true), this.set("paddingRight", t2.width() + t2.get("marginRight", 0) + t2.get("marginLeft", 0));
        let e2 = this.get("background");
        e2 || (e2 = this.set("background", Ve.new(this._root, { themeTags: ["background"], fillOpacity: 0, fill: this._root.interfaceColors.get("alternativeBackground") }))), this._vsbd0 = this.events.on("wheel", (e3) => {
          const i2 = e3.originalEvent;
          if (!gt(i2, this))
            return;
          i2.preventDefault();
          let s2 = i2.deltaY / 5e3;
          const r2 = t2.get("start", 0), n2 = t2.get("end", 1);
          r2 + s2 <= 0 && (s2 = -r2), n2 + s2 >= 1 && (s2 = 1 - n2), r2 + s2 >= 0 && n2 + s2 <= 1 && (t2.set("start", r2 + s2), t2.set("end", n2 + s2));
        }), this._disposers.push(this._vsbd0), this._vsbd1 = t2.events.on("rangechanged", () => {
          let e3 = this._contentHeight;
          const i2 = this._childrenDisplay, s2 = this._contentMask;
          i2.y = -t2.get("start") * e3, i2.markDirtyLayer(), s2 && (s2._display.y = -i2.y, i2.mask = s2._display);
        }), this._disposers.push(this._vsbd1), this._display.addChild(t2._display);
      } else {
        const t3 = this._prevSettings.verticalScrollbar;
        if (t3) {
          this._display.removeChild(t3._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose();
          this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", false), this.set("paddingRight", void 0);
        }
      }
    }
    if (this.isDirty("background")) {
      const t2 = this._prevSettings.background;
      t2 && this._display.removeChild(t2._display);
      const e2 = this.get("background");
      e2 instanceof He && (e2.set("isMeasured", false), e2._setParent(this), this._display.addChildAt(e2._display, 0));
    }
    if (this.isDirty("mask")) {
      const t2 = this.get("mask"), e2 = this._prevSettings.mask;
      if (e2 && (this._display.removeChild(e2._display), e2 != t2 && e2.dispose()), t2) {
        const e3 = t2.parent;
        e3 && e3.children.removeValue(t2), t2._setParent(this), this._display.addChildAt(t2._display, 0), this._childrenDisplay.mask = t2._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField(), this.children.each((t2) => {
      t2._processTemplateField();
    });
  }
  walkChildren(t2) {
    this.children.each((e2) => {
      e2 instanceof Qe && e2.walkChildren(t2), t2(e2);
    });
  }
  eachChildren(t2) {
    const e2 = this.get("background");
    e2 && t2(e2);
    const i2 = this.get("verticalScrollbar");
    i2 && t2(i2);
    const s2 = this.get("mask");
    s2 && t2(s2), this.children.values.forEach((e3) => {
      t2(e3);
    });
  }
  allChildren() {
    const t2 = [];
    return this.eachChildren((e2) => {
      t2.push(e2);
    }), t2;
  }
  _setDataItem(t2) {
    const e2 = t2 !== this._dataItem;
    super._setDataItem(t2);
    const i2 = this.get("html", "");
    i2 && "" !== i2 && e2 && this._root._setHTMLContent(this, $e(this, i2));
  }
}
Object.defineProperty(Qe, "className", { enumerable: true, configurable: true, writable: true, value: "Container" }), Object.defineProperty(Qe, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([Qe.className]) });
class ti extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textStyle", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeTextStyle() }), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeText("", this.textStyle) }), Object.defineProperty(this, "_textStyles", { enumerable: true, configurable: true, writable: true, value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale"] }), Object.defineProperty(this, "_originalScale", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _updateBounds() {
    if (this.get("text"))
      super._updateBounds();
    else {
      let t2 = { left: 0, right: 0, top: 0, bottom: 0 };
      this._adjustedLocalBounds = t2;
    }
  }
  _changed() {
    super._changed(), this._display.clear();
    let t2 = this.textStyle;
    if (this.isDirty("opacity")) {
      let t3 = this.get("opacity", 1);
      this._display.alpha = t3;
    }
    if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), "tooltip" == this.get("role") && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement")) {
      this.getPrivate("tooltipElement") && this._disposers.push(new B(() => {
        this._root._removeTooltipElement(this);
      }));
    }
    if (this.isDirty("width") && (t2.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (t2.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (t2.breakWords = this.get("breakWords", false), this.markDirtyBounds()), this.isDirty("ellipsis") && (t2.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (t2.ignoreFormatting = this.get("ignoreFormatting", false), this.markDirtyBounds()), this.isDirty("minScale") && (t2.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill")) {
      let e2 = this.get("fill");
      e2 && (t2.fill = e2);
    }
    if (this.isDirty("fillOpacity")) {
      let e2 = this.get("fillOpacity", 1);
      e2 && (t2.fillOpacity = e2);
    }
    (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (t2.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (t2.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), m(this._textStyles, (e2) => {
      this._dirty[e2] && (t2[e2] = this.get(e2), this.markDirtyBounds());
    }), t2.fontSize = this.get("fontSize"), t2.fontFamily = this.get("fontFamily"), this._display.style = t2, this.isDirty("role") && "tooltip" == this.get("role") && this._root.updateTooltip(this);
  }
  _getText() {
    const t2 = this.get("text", "");
    return this.get("populateText") ? $e(this, t2) : t2;
  }
  markDirtyText() {
    this._display.text = this._getText(), "tooltip" == this.get("role") && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty();
  }
  _setDataItem(t2) {
    super._setDataItem(t2), this.get("populateText") && this.markDirtyText();
  }
  getNumberFormatter() {
    return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter();
  }
  getDateFormatter() {
    return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter();
  }
  getDurationFormatter() {
    return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter();
  }
}
Object.defineProperty(ti, "className", { enumerable: true, configurable: true, writable: true, value: "Text" }), Object.defineProperty(ti, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([ti.className]) });
class ei extends Qe {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_text", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_textKeys", { enumerable: true, configurable: true, writable: true, value: ["text", "fill", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting"] });
  }
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew(), this._makeText(), m(this._textKeys, (t2) => {
      const e2 = this.get(t2);
      null != e2 && this._text.set(t2, e2);
    }), "" !== this.get("html", "") && this._text.set("text", ""), this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    }), this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(ti.new(this._root, {}));
  }
  _updateChildren() {
    if (super._updateChildren(), m(this._textKeys, (t2) => {
      this._text.set(t2, this.get(t2));
    }), this.isDirty("maxWidth") && this._setMaxDimentions(), this.isDirty("maxHeight") && this._setMaxDimentions(), this.isDirty("rotation") && this._setMaxDimentions(), "" !== this.get("html", "") ? this._text.set("text", "") : this._text.set("text", this.get("text")), this.isDirty("textAlign") || this.isDirty("width")) {
      const t2 = this.get("textAlign");
      let e2;
      null != this.get("width") ? e2 = "right" == t2 ? Y : "center" == t2 ? X : 0 : "left" == t2 || "start" == t2 ? e2 = this.get("paddingLeft") : "right" != t2 && "end" != t2 || (e2 = -this.get("paddingRight")), this.text.set("x", e2);
    }
  }
  _setMaxDimentions() {
    const t2 = this.get("rotation"), e2 = 90 == t2 || 270 == t2 || -90 == t2, i2 = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
    l(i2) ? this.text.set(e2 ? "maxHeight" : "maxWidth", i2 - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : this.text.set(e2 ? "maxHeight" : "maxWidth", void 0);
    const s2 = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
    l(s2) ? this.text.set(e2 ? "maxWidth" : "maxHeight", s2 - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : this.text.set(e2 ? "maxWidth" : "maxHeight", void 0);
  }
  _setDataItem(t2) {
    super._setDataItem(t2), this._markDirtyKey("text"), this.text.get("populateText") && this.text.markDirtyText();
  }
  getText() {
    return this._text._getText();
  }
}
Object.defineProperty(ei, "className", { enumerable: true, configurable: true, writable: true, value: "Label" }), Object.defineProperty(ei, "classNames", { enumerable: true, configurable: true, writable: true, value: Qe.classNames.concat([ei.className]) });
class ii {
  constructor(t2, e2) {
    if (Object.defineProperty(this, "_root", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rules", { enumerable: true, configurable: true, writable: true, value: {} }), this._root = t2, !e2)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
  }
  static new(t2) {
    const e2 = new this(t2, true);
    return e2.setupDefaultRules(), e2;
  }
  setupDefaultRules() {
  }
  _lookupRules(t2) {
    return this._rules[t2];
  }
  ruleRaw(t2, e2 = []) {
    let i2 = this._rules[t2];
    i2 || (i2 = this._rules[t2] = []), e2.sort(De);
    const { index: s2, found: r2 } = E(i2, (t3) => {
      const i3 = De(t3.tags.length, e2.length);
      return 0 === i3 ? xe(t3.tags, e2, De) : i3;
    });
    if (r2)
      return i2[s2].template;
    {
      const t3 = Be.new({});
      return i2.splice(s2, 0, { tags: e2, template: t3 }), t3;
    }
  }
  rule(t2, e2 = []) {
    return this.ruleRaw(t2, e2);
  }
}
export {
  $t as $,
  yt as A,
  B,
  Bt as C,
  De as D,
  Ee as E,
  At as F,
  Ge as G,
  Ct as H,
  It as I,
  J,
  jt as K,
  Et as L,
  M,
  N,
  Ot as O,
  Pe as P,
  Qe as Q,
  Mt as R,
  St as S,
  s as T,
  Tt as U,
  Ve as V,
  We as W,
  Xe as X,
  Ye as Y,
  Q as Z,
  _t as _,
  z as a,
  _ as a0,
  I as a1,
  c as a2,
  Zt as a3,
  dt as a4,
  L as a5,
  H as a6,
  ht as a7,
  pt as a8,
  D as a9,
  S as aA,
  te as aB,
  W as aC,
  gt as aD,
  w as aE,
  ke as aF,
  ae$1 as aG,
  lt as aH,
  vt as aI,
  Gt as aJ,
  e as aK,
  Ht as aL,
  oe as aM,
  Re as aa,
  b as ab,
  K as ac,
  ue as ad,
  ut as ae,
  A as af,
  pe as ag,
  ne as ah,
  Dt as ai,
  zt as aj,
  ei as ak,
  he as al,
  ii as am,
  fe as an,
  X as ao,
  me as ap,
  bt as aq,
  ge as ar,
  V as as,
  Be as at,
  de as au,
  le as av,
  re as aw,
  Fe as ax,
  je as ay,
  F as az,
  Y as b,
  at as c,
  $ as d,
  et as e,
  ft as f,
  P as g,
  $e as h,
  it as i,
  h as j,
  d as k,
  kt as l,
  m,
  n,
  ot as o,
  p,
  q,
  rt as r,
  st as s,
  ti as t,
  u,
  v,
  we as w,
  l as x,
  y,
  ze as z
};
