import { f, s as s$3, m as m$5, z as z$1, Z, x as x$2 } from "./chunk-sO9RJjHR.js";
import { i, k as b$2 } from "./chunk-KXkDk_IW.js";
import { mS as G, eP as o$1, eQ as n$5, r1 as A, ss as M, az as s$2, sv as b$1, w3 as o$2, sw as R$1, c4 as d$4, st as y$1, d1 as o$3, bo as e$1, bp as y$2, br as c$7, rz as n$6, wt as g$2, ry as O$1, rx as e$2, dM as u$2, x1 as n$7, bJ as d$5, e3 as v, C6 as r$3, C7 as E, C8 as R$2, C9 as N, Ca as i$1, bs as g$3, Cb as n$8, bR as A$1, bD as u$3, ws as v$1 } from "./chunk-KFNcxJaF.js";
import { geodesicLength as q } from "./chunk-WuibsuuF.js";
import { t as t$1 } from "./chunk-Jk46lvUq.js";
import { T, k, q as q$1, x as x$3, F, S, e as e$3, U as U$2 } from "./chunk-Jwrw72Py.js";
function r$2({ hasZ: s3, spatialReference: r2, paths: n4 }, f2, e2 = 0) {
  const p4 = G(r2);
  if (null == p4)
    return false;
  const u2 = s3 ? (o2) => o2 : (s4) => o$1(c$6, s4[0], s4[1], e2);
  for (const o2 of n4) {
    const s4 = [];
    for (const t2 of o2) {
      const o3 = [0, 0, e2];
      p4(u2(t2), 0, o3, 0), s4.push(o3);
    }
    f2.push(s4);
  }
  return true;
}
const c$6 = n$5();
function r$1(r2, t2, i2, s3, ...l3) {
  return A(r2) && M(r2) ? t2.apply(void 0, l3) : s$2(r2) ? i2.apply(void 0, l3) : s3.apply(void 0, l3);
}
function u$1(e2) {
  const { spatialReference: t2 } = e2;
  return r$1(t2, y, d$3, h$2, e2);
}
function a$i(e2, t2) {
  if (!d$4(e2.spatialReference, t2.spatialReference))
    return null;
  const { spatialReference: r2 } = e2;
  return U$1[0] = e2.x, U$1[1] = e2.y, U$1[2] = e2.hasZ ? e2.z : 0, x$1[0] = t2.x, x$1[1] = t2.y, x$1[2] = t2.hasZ ? t2.z : 0, p$b(U$1, x$1, r2);
}
function p$b(e2, t2, r2) {
  return r$1(r2, l$6, g$1, j, e2, t2, r2);
}
function l$6(t2, r2, n4) {
  return i(b$1(L, t2, r2, n4).distance, "meters");
}
function g$1(t2, n4, o2) {
  return i(q(R(t2, n4, o2), "meters"), "meters");
}
function j(t2, r2, n4) {
  return o$2(t2, n4, b) && o$2(r2, n4, z) ? i(b$1(L, b, z).distance, "meters") : null;
}
function y(t2) {
  return i(y$1([t2], "meters")[0], "meters");
}
function d$3(t2) {
  return i(q(t2, "meters"), "meters");
}
function h$2(t2) {
  const r2 = [];
  if (!r$2(t2, r2))
    return null;
  let o2 = 0;
  for (const e2 of r2) {
    let t3 = 0;
    for (let r3 = 1; r3 < e2.length; ++r3)
      t3 += b$1(L, e2[r3 - 1], e2[r3]).distance;
    o2 += t3;
  }
  return i(o2, "meters");
}
function R(e2, t2, r2) {
  return { type: "polyline", spatialReference: r2, paths: [[[...e2], [...t2]]] };
}
const L = new R$1(), U$1 = n$5(), x$1 = n$5(), b = n$5(), z = n$5();
function p$a(r2, e2) {
  return h$1(s$3, u$1, f, e2, r2);
}
function d$2(n4, t2, o2) {
  return h$1(z$1, a$i, m$5, o2, n4, t2);
}
function l$5(n4, t2, r2, e2) {
  return h$1(x$2, p$b, Z, e2, n4, t2, r2);
}
function s(n4, t2, e2) {
  return h$1(m$5, a$i, m$5, e2, n4, t2);
}
function a$h(n4, t2, r2, e2) {
  return h$1(Z, p$b, Z, e2, n4, t2, r2);
}
function g(r2) {
  return h$1(s$3, u$1, f, "on-the-ground", r2);
}
function m$4(n4, t2) {
  return h$1(m$5, a$i, m$5, "on-the-ground", n4, t2);
}
function h$1(n4, t2, r2, e2, ...o2) {
  if ("on-the-ground" === e2) {
    const n5 = t2.apply(void 0, o2);
    return null != n5 ? n5 : r2.apply(void 0, o2);
  }
  return n4.apply(void 0, o2);
}
let s$1 = class s2 extends o$3.EventedAccessor {
  constructor(e2) {
    super(e2), this._mode = "feedback", this.helpMessage = void 0, this.viewType = void 0;
  }
  get mode() {
    return this._mode;
  }
  get allFields() {
    return [];
  }
  get editableFields() {
    return this.allFields.filter((e2) => !e2.readOnly);
  }
  enterInputMode() {
    this._mode = "input", this.emit("focus");
  }
  exitInputMode() {
    this._mode = "feedback";
  }
  unlockAllFields() {
    this.allFields.forEach((e2) => e2.unlock());
  }
};
e$1([y$2()], s$1.prototype, "tooltipOptions", void 0), e$1([y$2()], s$1.prototype, "_mode", void 0), e$1([y$2()], s$1.prototype, "mode", null), e$1([y$2()], s$1.prototype, "helpMessage", void 0), e$1([y$2()], s$1.prototype, "viewType", void 0), e$1([y$2()], s$1.prototype, "allFields", null), e$1([y$2()], s$1.prototype, "editableFields", null), s$1 = e$1([c$7("esri.views.interactive.tooltip.SketchTooltipInfo")], s$1);
const t = "esri-tooltip", e = `${t}-content`, n$4 = `${t}-content--input`, o = `${t}-content__header`, $ = `${t}-table`, c$5 = `${t}-help-message`;
function a$g({ className: a8, helpMessage: r2, mode: c6, onDiscard: p4, onkeydown: d2 }, ...u2) {
  const m5 = u2.flat(10).filter((t2) => !!t2);
  return n$6("div", { class: g$2(a8, e, "input" === c6 && n$4), onkeydown: d2 }, "input" === c6 ? n$6("div", { class: o, key: "tooltip-content-header" }, n$6("calcite-button", { appearance: "transparent", iconFlipRtl: "both", iconStart: "chevron-left", kind: "neutral", onclick: p4, scale: "s", tabIndex: -1 })) : null, m5.length > 0 ? n$6("div", { class: $ }, ...m5) : null, r2 ? n$6("div", { class: c$5, key: "help-message" }, r2) : null);
}
const p$9 = `${t}-field`, d$1 = { base: p$9, inputMode: `${p$9}--input`, title: `${p$9}__title`, value: `${p$9}__value` };
let a$f = class a extends O$1 {
  constructor() {
    super(...arguments), this.hidden = false, this.mode = "feedback";
  }
  render() {
    return n$6("div", { class: this.classes({ [d$1.base]: true, [d$1.inputMode]: "input" === this.mode }) }, n$6("div", { class: d$1.title }, this.title), n$6("div", { class: d$1.value }, this.value));
  }
};
e$1([y$2()], a$f.prototype, "hidden", void 0), e$1([y$2()], a$f.prototype, "mode", void 0), e$1([y$2()], a$f.prototype, "title", void 0), e$1([y$2()], a$f.prototype, "value", void 0), a$f = e$1([c$7("esri.views.interactive.tooltip.TooltipField")], a$f);
const p$8 = { base: `${t}-value-by-value` };
let a$e = class a2 extends O$1 {
  constructor() {
    super(...arguments), this.divider = "×";
  }
  render() {
    return n$6("div", { class: p$8.base }, n$6("span", null, this.left), n$6("span", null, this.divider), n$6("span", null, this.right));
  }
};
e$1([y$2()], a$e.prototype, "left", void 0), e$1([y$2()], a$e.prototype, "divider", void 0), e$1([y$2()], a$e.prototype, "right", void 0), a$e = e$1([c$7("esri.views.interactive.tooltip.ValueByValue")], a$e);
let U = class extends O$1 {
  constructor() {
    super(...arguments), this._getFormatters = t$1((t2, e2) => ({ angle: (t3) => T(t3, t3.rotationType), area: (i2, s3) => k(t2, i2, s3 ?? e2.area), length: (i2, o2, r2) => q$1(t2, i2, o2 ?? e2.length, r2), relativeLength: (i2, o2) => x$3(t2, i2, o2 ?? e2.length), totalLength: (i2, o2) => q$1(t2, i2, o2 ?? e2.length), verticalLength: (i2, o2) => F(t2, i2, o2 ?? e2.length), relativeVerticalLength: (i2, o2) => S(t2, i2, o2 ?? e2.verticalLength), relativeOrientation: (t3) => u$2(t3, { maximumFractionDigits: 2, minimumFractionDigits: 2, signDisplay: "exceptZero" }), percentage: (t3) => u$2(t3.value, { style: "percent" }), scale: (t3) => u$2(t3, { style: "percent", maximumFractionDigits: 0 }) })), this._formatScale = (t2) => this._formatters.scale(t2), this._formatRelativeOrientation = (t2) => this._formatters.relativeOrientation(t2), this._formatLength = (t2, e2, i2) => this._formatters.length(t2, e2, i2), this._formatRelativeLength = (t2, e2) => this._formatters.relativeLength(t2, e2), this._formatVerticalLength = (t2, e2) => this._formatters.verticalLength(t2, e2), this._formatRelativeVerticalLength = (t2, e2) => this._formatters.relativeVerticalLength(t2, e2), this._formatArea = (t2, e2) => this._formatters.area(t2, e2), this._formatPercentage = (t2) => this._formatters.percentage(t2), this._onDiscard = () => {
      this._exitInputMode();
    }, this._onCommit = (t2, e2) => {
      if ("commit-and-exit" === e2)
        return this._exitInputMode();
      const i2 = this._getFocusableInputs(), o2 = i2.length, s3 = i2.indexOf(t2);
      if (-1 === s3)
        return this._exitInputMode();
      const r2 = ((s3 + ("commit-and-next" === e2 ? 1 : -1)) % o2 + o2) % o2;
      i2.at(r2)?.focus();
    }, this._handleTab = (t2) => {
      if (t2.code !== n$7.next)
        return;
      const e2 = this._getFocusableInputs();
      if (0 === e2.length)
        return;
      const i2 = e2.at(0), o2 = e2.at(-1);
      i2 && o2 && (t2.shiftKey ? document.activeElement === i2 && (t2.preventDefault(), o2.focus()) : document.activeElement === o2 && (t2.preventDefault(), i2.focus()));
    };
  }
  get _displayUnits() {
    const t2 = e$3(this.tooltip.view);
    return { length: t2, verticalLength: t2, area: t2, angle: "degrees" };
  }
  get _inputUnitInfos() {
    const t2 = this._messagesUnits, e2 = (e3) => ({ unit: e3, abbreviation: b$2(t2, e3, "abbr") }), i2 = e$3(this.tooltip.view), o2 = E(i2), s3 = R$2(i2), r2 = N(i2), n4 = "degrees";
    return { length: e2(o2), relativeLength: e2(o2), verticalLength: e2(s3), relativeVerticalLength: e2(s3), area: e2(r2), orientation: e2(n4), rotation: e2(n4) };
  }
  get _formatters() {
    return this._getFormatters(this._messagesUnits, this._displayUnits);
  }
  get fieldContext() {
    return { formatters: this._formatters, inputUnitInfos: this._inputUnitInfos, messages: this._messagesTooltip, onCommit: this._onCommit, onDiscard: this._onDiscard };
  }
  initialize() {
    let t2 = new AbortController();
    this.addHandles([d$5(() => this.info.mode, (t3) => {
      this.tooltip.positionMode = "input" === t3 ? "fixed" : "follow-cursor";
    }), v(() => this.info, "focus", () => {
      t2?.abort();
      const { signal: e2 } = t2 = new AbortController();
      requestAnimationFrame(() => {
        e2.aborted || this._getFocusableInputs().at(0)?.focus();
      });
    })]);
  }
  loadDependencies() {
    return r$3({ button: () => import("@esri/calcite-components/dist/components/calcite-button.js"), icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js"), input: () => import("@esri/calcite-components/dist/components/calcite-input.js") });
  }
  _getHelpMessage(t2) {
    const { info: e2 } = this, { tooltipOptions: i2, helpMessage: o2, viewType: s3 } = e2, r2 = i2?.visibleElements?.helpMessage, n4 = t2 ?? o2, a8 = "3d" === s3 ? "helpMessages3d" : "helpMessages2d";
    return r2 && n4 ? this._messagesTooltip?.sketch?.[a8]?.[n4] : void 0;
  }
  _exitInputMode() {
    this.info.exitInputMode(), document.querySelector(".esri-view-surface").focus();
  }
  _getFocusableInputs() {
    return Array.from(this.domNode?.querySelectorAll("input:not([disabled])") ?? []);
  }
};
e$1([e$2("esri/core/t9n/Units"), y$2()], U.prototype, "_messagesUnits", void 0), e$1([e$2("esri/views/interactive/tooltip/t9n/Tooltip"), y$2()], U.prototype, "_messagesTooltip", void 0), e$1([y$2()], U.prototype, "info", void 0), e$1([y$2()], U.prototype, "tooltip", void 0), e$1([y$2()], U.prototype, "_displayUnits", null), e$1([y$2()], U.prototype, "_inputUnitInfos", null), e$1([y$2()], U.prototype, "_formatters", null), e$1([y$2()], U.prototype, "fieldContext", null), U = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContent")], U);
const p$7 = { base: `${e} ${`${e}--draw-rectangle`}` };
let m$3 = class m extends U {
  render() {
    const { area: t2, radius: e2, xSize: s3, ySize: l3, tooltipOptions: m5 } = this.info, { visibleElements: n4 } = m5, c6 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: p$7.base, helpMessage: this._getHelpMessage() }, n4.radius && null != e2 ? n$6(a$f, { title: c6.radius, value: this._formatLength(e2) }) : null, n4.size && null != s3 && null != l3 ? n$6(a$f, { title: c6.size, value: n$6(a$e, { left: this._formatLength(s3), right: this._formatLength(l3) }) }) : null, n4.area ? n$6(a$f, { title: c6.area, value: this._formatArea(t2) }) : null);
  }
};
m$3 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], m$3);
const a$d = { base: `${e}--draw-mesh` };
let l$4 = class l extends U {
  render() {
    const { elevation: t2, tooltipOptions: s3 } = this.info, { visibleElements: e2 } = s3, i2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$d.base, helpMessage: this._getHelpMessage() }, e2.elevation ? n$6(a$f, { title: i2.elevation, value: this._formatVerticalLength(t2.actual) }) : null);
  }
};
l$4 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")], l$4);
const r = `${t}-editable-field`, a$c = { base: r, inputMode: `${r}--input`, locked: `${r}--locked`, title: `${r}__title`, titleContent: `${r}__title__content`, value: `${r}__value`, valueContent: `${r}__value__content`, input: `${r}__input`, inputDisabled: `${r}__input--disabled`, inputReadOnly: `${r}__input--read-only`, inputSuffix: `${r}__input-suffix`, button: `${r}__button` };
let c$4 = class c extends O$1 {
  constructor() {
    super(...arguments), this._input = null, this._afterInputCreate = (t2) => {
      this._input = t2;
    }, this._selectText = () => {
      requestAnimationFrame(() => {
        this._input?.select();
      });
    }, this._onKeyDown = (t2) => {
      t2.key === n$7.discard && this._discard();
    }, this._onInputKeyDown = (t2) => {
      switch (t2.key) {
        case n$7.commit:
          return this._commit({ type: "commit-and-exit", allowLockingCurrentValue: true });
        case n$7.next:
          return t2.stopPropagation(), this._commit({ type: t2.shiftKey ? "commit-and-previous" : "commit-and-next", allowLockingCurrentValue: false });
      }
    }, this._onInput = (t2) => {
      this.field.inputValue = t2.target.value;
    }, this._onLockClick = () => {
      const { field: t2 } = this;
      t2.locked ? t2.unlock() : this._lock();
    };
  }
  loadDependencies() {
    return r$3({ button: () => import("@esri/calcite-components/dist/components/calcite-button.js"), icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js") });
  }
  render() {
    const { mode: t2, field: e2 } = this, i2 = "input" === t2, { locked: n4 } = e2;
    return n$6("div", { class: this.classes({ [a$c.base]: true, [a$c.inputMode]: "input" === t2, [a$c.locked]: n4 }) }, n$6("div", { class: a$c.title, key: "title" }, n$6("div", { class: a$c.titleContent, key: "title-content" }, this._title, n4 && !i2 ? n$6("calcite-icon", { icon: "lock", key: "icon", scale: "s" }) : null)), n$6("div", { class: a$c.value, key: "value" }, i2 ? this._renderInput() : n$6("span", { key: "formatted-value" }, this._feedbackValue)));
  }
  get _initialValue() {
    const { field: t2 } = this;
    return null != t2.actual ? t2.toInputUnits(t2.actual, this.context).value : null;
  }
  get _feedbackValue() {
    const { context: t2, field: e2 } = this, { actual: i2, committed: n4, format: o2 } = e2;
    return null != n4 ? o2(n4, t2) : null != i2 ? o2(i2, t2) : "";
  }
  get _displayValue() {
    const { field: t2 } = this, { inputValue: e2, committed: i2 } = t2;
    return null != e2 ? e2 : null != i2 ? this._toString(t2.toInputUnits(i2, this.context).value) : this._toString(this._initialValue);
  }
  get _suffix() {
    const { suffix: t2 } = this.field;
    return "string" == typeof t2 ? t2 : t2(this.context);
  }
  get _title() {
    const { title: t2 } = this.field;
    return "string" == typeof t2 ? t2 : t2(this.context);
  }
  _renderInput() {
    const { disabled: t2, locked: e2, readOnly: i2 } = this.field;
    return n$6("div", { class: a$c.valueContent, key: "input-container", onkeydown: this._onKeyDown }, n$6("input", { afterCreate: this._afterInputCreate, class: this.classes({ [a$c.input]: true, [a$c.inputDisabled]: t2, [a$c.inputReadOnly]: i2 }), disabled: t2 || i2, onfocus: this._selectText, oninput: this._onInput, onkeydown: this._onInputKeyDown, readOnly: i2, type: "text", value: this._displayValue }), n$6("div", { class: a$c.inputSuffix, key: "suffix" }, this._suffix), i2 ? void 0 : n$6("calcite-button", { appearance: "transparent", class: a$c.button, disabled: t2, iconStart: e2 ? "lock" : "unlock", kind: "neutral", onclick: this._onLockClick, scale: "s", tabIndex: -1 }));
  }
  _commit({ type: t2, allowLockingCurrentValue: e2 }) {
    const { _input: i2, field: n4 } = this;
    i2 && (n4.locked && "" === n4.inputValue ? n4.unlock() : (e2 || null != n4.inputValue) && this._lock(), this.context.onCommit(i2, t2));
  }
  _discard() {
    this._input && (this.field.inputValue = null, this.context.onDiscard(this._input));
  }
  _lock() {
    const { field: t2 } = this, e2 = this._parseNumber(t2.inputValue), i2 = null != e2 ? t2.createQuantity(e2, this.context) : null;
    t2.lock(i2);
  }
  _parseNumber(t2) {
    if (null == t2)
      return null;
    const e2 = parseFloat(t2);
    return isNaN(e2) || !isFinite(e2) ? null : e2;
  }
  _toString(t2) {
    return null != t2 ? t2.toFixed(3) : "0";
  }
};
e$1([y$2()], c$4.prototype, "field", void 0), e$1([y$2()], c$4.prototype, "context", void 0), e$1([y$2()], c$4.prototype, "mode", void 0), e$1([y$2()], c$4.prototype, "_initialValue", null), e$1([y$2()], c$4.prototype, "_feedbackValue", null), e$1([y$2()], c$4.prototype, "_input", void 0), e$1([y$2()], c$4.prototype, "_displayValue", null), e$1([y$2()], c$4.prototype, "_suffix", null), e$1([y$2()], c$4.prototype, "_title", null), c$4 = e$1([c$7("esri.views.interactive.tooltip.TooltipEditableField")], c$4);
function l$3(l3) {
  const i2 = l3.fields.filter((t2) => null != t2 && !t2.hidden);
  return 0 === i2.length ? null : n$6(i$1, null, i2.map((o2) => n$6(c$4, { context: l3.context, field: o2, key: o2.id, mode: l3.mode })));
}
const n$3 = { base: `${e}--draw-point` };
let a$b = class a3 extends U {
  render() {
    const { fieldContext: o2, info: s3 } = this, { mode: t2, elevation: i2, tooltipOptions: a8 } = s3, { visibleElements: m5 } = a8;
    return n$6(a$g, { className: n$3.base, helpMessage: this._getHelpMessage(), mode: t2, onkeydown: this._handleTab, onDiscard: this._onDiscard }, n$6(l$3, { context: o2, fields: [m5.elevation ? i2 : void 0], mode: t2 }));
  }
};
a$b = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], a$b);
const a$a = { base: `${e} ${`${e}--draw-polygon`}` };
let p$6 = class p extends U {
  render() {
    const { fieldContext: o2, info: e2 } = this, { area: t2, distance: i2, elevation: p4, mode: c6, orientation: l3, tooltipOptions: d2, viewType: m5 } = e2, { inputEnabled: j2, visibleElements: g2 } = d2;
    return n$6(a$g, { className: a$a.base, helpMessage: this._getHelpMessage(), mode: c6, onkeydown: this._handleTab, onDiscard: this._onDiscard }, n$6(l$3, { context: o2, fields: [j2 && g2.orientation ? l3 : void 0, j2 && g2.distance ? i2 : void 0, g2.elevation && "2d" !== m5 ? p4 : void 0, g2.area ? t2 : void 0], mode: c6 }));
  }
};
p$6 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], p$6);
const p$5 = { base: `${e} ${`${e}--draw-polyline`}` };
let a$9 = class a4 extends U {
  render() {
    const { fieldContext: o2, info: t2 } = this, { distance: e2, elevation: r2, mode: a8, orientation: l3, tooltipOptions: c6, totalLength: d2, viewType: m5 } = t2, { inputEnabled: j2, visibleElements: g2 } = c6;
    return n$6(a$g, { className: p$5.base, helpMessage: this._getHelpMessage(), mode: a8, onkeydown: this._handleTab, onDiscard: this._onDiscard }, n$6(l$3, { context: o2, fields: [j2 && g2.orientation ? l3 : void 0, j2 && g2.distance ? e2 : void 0, g2.elevation && "2d" !== m5 ? r2 : void 0, g2.totalLength ? d2 : void 0], mode: a8 }));
  }
};
a$9 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], a$9);
const p$4 = { base: `${e} ${`${e}--draw-rectangle`}` };
let m$2 = class m2 extends U {
  render() {
    const { area: t2, xSize: e2, ySize: s3, tooltipOptions: a8 } = this.info, { visibleElements: m5 } = a8, n4 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: p$4.base, helpMessage: this._getHelpMessage() }, m5.size && null != e2 && null != s3 ? n$6(a$f, { title: n4.size, value: n$6(a$e, { left: this._formatLength(e2), right: this._formatLength(s3) }) }) : null, m5.area ? n$6(a$f, { title: n4.area, value: this._formatArea(t2) }) : null);
  }
};
m$2 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], m$2);
const a$8 = { base: `${e} ${`${e}--extent-rotate`}` };
let n$2 = class n extends U {
  render() {
    const { angle: t2, tooltipOptions: o2 } = this.info, { visibleElements: s3 } = o2, i2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$8.base, helpMessage: this._getHelpMessage() }, s3.rotation ? n$6(a$f, { title: i2.rotation, value: this._formatRelativeOrientation(t2) }) : null);
  }
};
n$2 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], n$2);
const p$3 = { base: `${e} ${`${e}--extent-scale`}` };
let c$3 = class c2 extends U {
  render() {
    const t2 = this.info, { visibleElements: e2 } = t2.tooltipOptions, s3 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: p$3.base, helpMessage: this._getHelpMessage() }, e2.size ? n$6(a$f, { title: s3.size, value: n$6(a$e, { left: this._formatLength(t2.xSize), right: this._formatLength(t2.ySize) }) }) : null, e2.scale ? n$6(a$f, { title: s3.scale, value: n$6(a$e, { left: this._formatScale(t2.xScale), right: this._formatScale(t2.yScale) }) }) : null);
  }
};
c$3 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], c$3);
const l$2 = { base: `${e} ${`${e}--reshape-edge-offset`}` };
let p$2 = class p2 extends U {
  render() {
    const { area: t2, distance: e2, totalLength: s3, tooltipOptions: i2 } = this.info, { visibleElements: p4 } = i2, n4 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: l$2.base, helpMessage: this._getHelpMessage() }, p4.distance ? n$6(a$f, { title: n4.distance, value: this._formatRelativeLength(e2) }) : null, p4.area && null != t2 ? n$6(a$f, { title: n4.area, value: this._formatArea(t2) }) : null, p4.totalLength && null != s3 ? n$6(a$f, { title: n4.totalLength, value: this._formatLength(s3) }) : null);
  }
};
p$2 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], p$2);
const l$1 = { base: `${e} ${`${e}--transform-absolute`}` };
let a$7 = class a5 extends U {
  render() {
    const { info: t2 } = this, { visibleElements: s3 } = t2.tooltipOptions, e2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: l$1.base, helpMessage: this._getHelpMessage() }, s3.orientation && null != t2.orientation ? n$6(a$f, { key: "orientation", title: e2.orientation, value: T(t2.orientation, t2.rotationType, t2.orientationPrecision) }) : null, s3.size && null != t2.size ? n$6(a$f, { key: "size", title: e2.size, value: this._formatLength(t2.size, t2.sizeUnit, t2.sizePrecision) }) : null);
  }
};
a$7 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")], a$7);
const l2 = { base: `${e} ${`${e}--transform-rotate`}` };
let m$1 = class m3 extends U {
  render() {
    const { info: t2 } = this, { visibleElements: e2 } = t2.tooltipOptions, s3 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: l2.base, helpMessage: this._getHelpMessage() }, e2.rotation && null != t2.rotation ? n$6(a$f, { key: "rotation", title: s3.rotation, value: U$2(t2.rotation, t2.rotationType, t2.rotationPrecision) }) : null, e2.orientation && null != t2.orientation ? n$6(a$f, { key: "orientation", title: s3.orientation, value: T(t2.orientation, t2.rotationType, t2.orientationPrecision) }) : null);
  }
};
m$1 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")], m$1);
const p$1 = { base: `${e} ${`${e}--transform-scale`}` };
let a$6 = class a6 extends U {
  render() {
    const { info: s3 } = this, { visibleElements: e2 } = s3.tooltipOptions, t2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: p$1.base, helpMessage: this._getHelpMessage() }, e2.scale && null != s3.scale ? n$6(a$f, { key: "scale", title: t2.scale, value: this._formatPercentage(s3.scale) }) : null, e2.size && null != s3.size ? n$6(a$f, { key: "size", title: t2.size, value: this._formatLength(s3.size, s3.sizeUnit, s3.sizePrecision) }) : null);
  }
};
a$6 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTransformScale")], a$6);
const a$5 = { base: `${e} ${`${e}--translate-graphic`}` };
let c$2 = class c3 extends U {
  render() {
    const { info: s3 } = this, { visibleElements: t2 } = s3.tooltipOptions, o2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$5.base, helpMessage: this._getHelpMessage() }, t2.distance ? n$6(a$f, { title: o2.distance, value: this._formatLength(s3.distance) }) : null);
  }
};
c$2 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")], c$2);
const a$4 = { base: `${e} ${`${e}--translate-graphic-xy`}` };
let c$1 = class c4 extends U {
  render() {
    const { info: t2 } = this, { visibleElements: s3 } = t2.tooltipOptions, e2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$4.base, helpMessage: this._getHelpMessage() }, s3.distance ? n$6(a$f, { title: e2.distance, value: this._formatRelativeLength(t2.distance) }) : null);
  }
};
c$1 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")], c$1);
const a$3 = { base: `${e} ${`${e}--translate-graphic-z`}` };
let c5 = class extends U {
  render() {
    const { info: t2 } = this, { visibleElements: s3 } = t2.tooltipOptions, e2 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$3.base, helpMessage: this._getHelpMessage() }, s3.distance ? n$6(a$f, { title: e2.distance, value: this._formatRelativeVerticalLength(t2.distance) }) : null);
  }
};
c5 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")], c5);
const a$2 = { base: `${e} ${`${e}--translate-vertex`}` };
let n$1 = class n2 extends U {
  render() {
    const { distance: t2, elevation: e2, area: s3, totalLength: i2, tooltipOptions: n4 } = this.info, { visibleElements: p4 } = n4, c6 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$2.base, helpMessage: this._getHelpMessage() }, p4.distance ? n$6(a$f, { title: c6.distance, value: this._formatLength(t2) }) : null, p4.elevation && null != e2 ? n$6(a$f, { title: c6.elevation, value: this._formatVerticalLength(e2.actual) }) : null, p4.area && null != s3 ? n$6(a$f, { title: c6.area, value: this._formatArea(s3) }) : null, p4.totalLength && null != i2 ? n$6(a$f, { title: c6.totalLength, value: this._formatLength(i2) }) : null);
  }
};
n$1 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], n$1);
const a$1 = { base: `${e} ${`${e}--translate-vertex`}` };
let n3 = class extends U {
  render() {
    const { area: t2, distance: e2, elevation: s3, totalLength: i2, tooltipOptions: n4 } = this.info, { visibleElements: p4 } = n4, c6 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a$1.base, helpMessage: this._getHelpMessage() }, p4.distance ? n$6(a$f, { title: c6.distance, value: this._formatRelativeLength(e2) }) : null, p4.elevation && null != s3 ? n$6(a$f, { title: c6.elevation, value: this._formatVerticalLength(s3.actual) }) : null, p4.area && null != t2 ? n$6(a$f, { title: c6.area, value: this._formatArea(t2) }) : null, p4.totalLength && null != i2 ? n$6(a$f, { title: c6.totalLength, value: this._formatLength(i2) }) : null);
  }
};
n3 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")], n3);
const a7 = { base: `${e} ${`${e}--translate-vertex`}` };
let p3 = class extends U {
  render() {
    const { distance: t2, elevation: e2, tooltipOptions: s3 } = this.info, { visibleElements: i2 } = s3, p4 = this._messagesTooltip.sketch;
    return n$6(a$g, { className: a7.base, helpMessage: this._getHelpMessage() }, i2.distance ? n$6(a$f, { title: p4.distance, value: this._formatRelativeVerticalLength(t2) }) : null, i2.elevation && null != e2 ? n$6(a$f, { title: p4.elevation, value: this._formatVerticalLength(e2.actual) }) : null);
  }
};
p3 = e$1([c$7("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")], p3);
function x(x2, h2) {
  if (null == h2)
    return null;
  const d2 = document.createElement("div");
  switch (h2.type) {
    case "draw-point":
      return new a$b({ tooltip: x2, info: h2, container: d2 });
    case "draw-polygon":
      return new p$6({ tooltip: x2, info: h2, container: d2 });
    case "draw-polyline":
      return new a$9({ tooltip: x2, info: h2, container: d2 });
    case "draw-mesh":
      return new l$4({ tooltip: x2, info: h2, container: d2 });
    case "draw-rectangle":
      return new m$2({ tooltip: x2, info: h2, container: d2 });
    case "draw-circle":
      return new m$3({ tooltip: x2, info: h2, container: d2 });
    case "extent-rotate":
      return new n$2({ tooltip: x2, info: h2, container: d2 });
    case "extent-scale":
      return new c$3({ tooltip: x2, info: h2, container: d2 });
    case "transform-absolute":
      return new a$7({ tooltip: x2, info: h2, container: d2 });
    case "transform-rotate":
      return new m$1({ tooltip: x2, info: h2, container: d2 });
    case "transform-scale":
      return new a$6({ tooltip: x2, info: h2, container: d2 });
    case "translate-graphic":
      return new c$2({ tooltip: x2, info: h2, container: d2 });
    case "translate-graphic-z":
      return new c5({ tooltip: x2, info: h2, container: d2 });
    case "translate-graphic-xy":
      return new c$1({ tooltip: x2, info: h2, container: d2 });
    case "translate-vertex":
      return new n$1({ tooltip: x2, info: h2, container: d2 });
    case "translate-vertex-z":
      return new p3({ tooltip: x2, info: h2, container: d2 });
    case "translate-vertex-xy":
      return new n3({ tooltip: x2, info: h2, container: d2 });
    case "reshape-edge-offset":
      return new p$2({ tooltip: x2, info: h2, container: d2 });
  }
}
const d = { base: `${t}` };
let u = class extends g$3 {
  constructor(t2) {
    super(t2), this.info = null, this.positionMode = "follow-cursor", this._contentContainer = (() => {
      const t3 = document.createElement("div");
      return t3.classList.add(d.base), n$8(t3), t3;
    })(), this._contentWidget = null;
  }
  initialize() {
    const t2 = this._contentContainer;
    this.addHandles([d$5(() => this.view.overlay?.surface, (o2) => {
      t2.remove(), o2?.appendChild(t2);
    }, A$1), d$5(() => this.info, (o2, n4) => {
      if (null != this._contentWidget && null != o2 && null != n4 && o2.type === n4.type)
        this._contentWidget.info = o2;
      else {
        this._contentWidget = u$3(this._contentWidget);
        const n5 = x(this, o2);
        n5 && (this._contentWidget = n5, n5.container && t2.appendChild(n5.container));
      }
    }, A$1), d$5(() => ({ container: this._contentContainer, contentWidget: this._contentWidget, screenPoint: this._screenPoint, positionMode: this.positionMode }), h, A$1)]);
  }
  destroy() {
    this._contentWidget = u$3(this._contentWidget), this._contentContainer.remove();
  }
  clear() {
    this.info = null;
  }
  get _screenPoint() {
    const t2 = this.view.inputManager;
    return t2?.multiTouchActive ? null : t2?.latestPointerLocation;
  }
  get test() {
    return { contentContainer: this._contentContainer, visible: "none" !== this._contentContainer?.style.display };
  }
};
function h({ container: t2, contentWidget: o2, screenPoint: e2, positionMode: n4 }) {
  const { style: i2 } = t2;
  if ("docked" === n4)
    return i2.display = "block", void (i2.transform = "none");
  if ("fixed" !== n4)
    if (null != e2 && null != o2) {
      i2.display = "block";
      const o3 = v$1(t2), n5 = `translate(${Math.round(e2.x) + m4[0] * (o3 ? -1 : 1)}px, ${Math.round(e2.y) + m4[1]}px)`;
      i2.transform = o3 ? `translate(-100%, 0) ${n5}` : n5;
    } else
      i2.display = "none";
}
e$1([y$2({ nonNullable: true })], u.prototype, "view", void 0), e$1([y$2()], u.prototype, "info", void 0), e$1([y$2()], u.prototype, "positionMode", void 0), e$1([y$2()], u.prototype, "_contentContainer", void 0), e$1([y$2()], u.prototype, "_contentWidget", void 0), e$1([y$2()], u.prototype, "_screenPoint", null), u = e$1([c$7("esri.views.interactive.tooltip.Tooltip")], u);
const m4 = [20, 20];
export {
  s as a,
  p$b as b,
  a$h as c,
  d$2 as d,
  g,
  l$5 as l,
  m$4 as m,
  p$a as p,
  r$1 as r,
  s$1 as s,
  u
};
