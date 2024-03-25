import { aV as e$1, aX as y, a_ as c$2, bZ as S$1, r6 as O$1, r8 as n$a, r5 as e$2, hR as t$1, eg as u$2, Ae as B$1, sI as n$b, xB as e$3, Af as i$5, yh as g, r7 as r$2, qi as f$1, cU as s$1, Ag as M, iU as A, Ah as E, Ai as R, Aj as x$2, Ak as R$1, ce as d$3, Al as e$5, Am as n$c, cl as A$1, c8 as u$3, yg as v } from "./chunk-ejFG4zJ0.js";
import { e as e$4 } from "./chunk-19x7Cx8s.js";
import { T, k, q as q$1, x as x$1, F, S, U } from "./chunk-TCdzNZ_N.js";
import { b } from "./chunk-V0WGYzWu.js";
let r$1 = class r extends S$1 {
  constructor(e2) {
    super(e2), this.helpMessage = void 0, this.viewType = void 0;
  }
  get visibleElements() {
    return this.sketchOptions.tooltips.visibleElements;
  }
  get allFields() {
    return [];
  }
  get editableFields() {
    return this.allFields.filter((e2) => e2.visible && !e2.readOnly);
  }
};
e$1([y()], r$1.prototype, "sketchOptions", void 0), e$1([y()], r$1.prototype, "visibleElements", null), e$1([y()], r$1.prototype, "helpMessage", void 0), e$1([y()], r$1.prototype, "viewType", void 0), e$1([y()], r$1.prototype, "allFields", null), e$1([y()], r$1.prototype, "editableFields", null), r$1 = e$1([c$2("esri.views.interactive.tooltip.SketchTooltipInfo")], r$1);
const e = "esri-tooltip", t = `${e}-content`, n$9 = `${e}-content--input`, o = `${e}-content__header`, a$2 = `${e}-content__header__spacer`, _$1 = `${e}-content__header__actions`, c$1 = `${e}-draw-header-actions`, r2 = `${e}-table`, $ = `${e}-help-message`;
const p$2 = `${e}-field`, d$2 = { base: p$2, inputMode: `${p$2}--input`, title: `${p$2}__title`, value: `${p$2}__value` };
let c = class extends O$1 {
  constructor() {
    super(...arguments), this.hidden = false, this.mode = "feedback";
  }
  render() {
    return n$a("div", { class: this.classes({ [d$2.base]: true, [d$2.inputMode]: "input" === this.mode }) }, n$a("div", { class: d$2.title }, this.title), n$a("div", { class: d$2.value }, this.value));
  }
};
e$1([y()], c.prototype, "hidden", void 0), e$1([y()], c.prototype, "mode", void 0), e$1([y()], c.prototype, "title", void 0), e$1([y()], c.prototype, "value", void 0), c = e$1([c$2("esri.views.interactive.tooltip.components.TooltipField")], c);
const p$1 = { base: `${e}-value-by-value` };
let a$1 = class a extends O$1 {
  constructor() {
    super(...arguments), this.divider = "×";
  }
  render() {
    return n$a("div", { class: p$1.base }, n$a("span", null, this.left), n$a("span", null, this.divider), n$a("span", null, this.right));
  }
};
e$1([y()], a$1.prototype, "left", void 0), e$1([y()], a$1.prototype, "divider", void 0), e$1([y()], a$1.prototype, "right", void 0), a$1 = e$1([c$2("esri.views.interactive.tooltip.components.ValueByValue")], a$1);
let q = class extends O$1 {
  constructor() {
    super(...arguments), this._focusAbortController = new AbortController(), this._transition = null, this._mode = "feedback", this._getFormatters = t$1((t2, e2) => ({ angleRelative: (t3) => u$2(t3, { minimumFractionDigits: V, maximumFractionDigits: V, signDisplay: "exceptZero" }), direction: (t3) => T(t3, t3.rotationType, V), directionRelative: (t3) => {
      const e3 = B$1(t3);
      return u$2(e3, { style: "unit", unitDisplay: "narrow", unit: "degree", maximumFractionDigits: V, minimumFractionDigits: V, signDisplay: e3 > 0 ? "never" : "exceptZero" });
    }, directionRelativeBilateral: (t3) => T(t3, t3.rotationType, V), area: (i5, o2) => k(t2, i5, o2 ?? e2.area), length: (i5, o2, s) => q$1(t2, i5, o2 ?? e2.length, s), lengthRelative: (i5, o2) => x$1(t2, i5, o2 ?? e2.length), totalLength: (i5, o2) => q$1(t2, i5, o2 ?? e2.length), verticalLength: (i5, o2) => F(t2, i5, o2 ?? e2.length), verticalLengthRelative: (i5, o2) => S(t2, i5, o2 ?? e2.verticalLength), percentage: (t3) => u$2(t3.value, { style: "percent" }), scale: (t3) => u$2(t3, { style: "percent", maximumFractionDigits: 0 }) })), this._onDiscard = () => {
      this.exitInputMode();
    }, this._onCommit = (t2, e2) => {
      if ("commit-and-exit" === e2)
        return void this.exitInputMode();
      const i5 = this._getFocusableElements(), o2 = i5.length, s = i5.indexOf(t2);
      if (-1 === s)
        return void this.exitInputMode();
      const n10 = ((s + ("commit-and-next" === e2 ? 1 : -1)) % o2 + o2) % o2;
      N(i5.at(n10));
    }, this._handleTab = (t2) => {
      if (t2.code !== n$b.next)
        return;
      const e2 = this._getFocusableElements(), i5 = e2.at(0), o2 = e2.at(-1);
      i5 && o2 && (t2.shiftKey ? document.activeElement === i5 && (t2.preventDefault(), N(o2)) : document.activeElement === o2 && (t2.preventDefault(), N(i5)));
    };
  }
  get mode() {
    return this._mode;
  }
  get _displayUnits() {
    const t2 = e$3(this.tooltip.view);
    return { length: t2, verticalLength: t2, area: t2, angle: "degrees" };
  }
  get _inputUnitInfos() {
    const t2 = this._messagesUnits, e2 = (e3) => ({ unit: e3, abbreviation: b(t2, e3, "abbr") }), i5 = e$3(this.tooltip.view), o2 = e2(E(i5)), s = e2(R(i5)), n10 = e2(x$2(i5)), r3 = e2("degrees");
    return { length: o2, lengthRelative: o2, verticalLength: s, verticalLengthRelative: s, area: n10, direction: r3, orientation: r3, rotation: r3 };
  }
  get _formatters() {
    return this._getFormatters(this._messagesUnits, this._displayUnits);
  }
  get fieldContext() {
    return { formatters: this._formatters, inputUnitInfos: this._inputUnitInfos, messages: this._messagesTooltip, sketchOptions: this.info.sketchOptions, onCommit: this._onCommit, onDiscard: this._onDiscard };
  }
  render() {
    const t$12 = O(this._renderContent()), { visibleElements: e2 } = this.info.sketchOptions.tooltips, i5 = e2.helpMessage ? this._getHelpMessage() : null, o$1 = t$12.length > 0, s = o$1 || !!i5, n10 = "input" === this.mode, r$12 = O(this._renderActions());
    return n$a("div", { class: g(t, n10 && n$9), onkeydown: this._handleTab }, n10 && s && e2.header ? n$a("div", { class: o, key: "header" }, n$a("calcite-button", { appearance: "transparent", iconFlipRtl: "both", iconStart: "chevron-left", key: "discard-button", kind: "neutral", onclick: this._onDiscard, scale: "s", tabIndex: -1 }), r$12.length > 0 ? n$a(i$5, null, n$a("div", { class: a$2, key: "spacer" }), n$a("div", { class: _$1, key: "actions" }, r$12)) : null) : null, o$1 ? n$a("div", { class: r2, key: "content" }, ...t$12) : null, i5 ? n$a("div", { class: $, key: "help-message" }, i5) : null);
  }
  _renderActions() {
    return null;
  }
  loadDependencies() {
    return r$2({ button: () => import("@esri/calcite-components/dist/components/calcite-button.js"), icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js"), input: () => import("@esri/calcite-components/dist/components/calcite-input.js") });
  }
  async enterInputMode(t2) {
    try {
      await this._transitionTo("input"), await this._focusField(t2);
    } catch (e2) {
      f$1(e2);
    }
  }
  async exitInputMode() {
    try {
      await this._transitionTo("feedback"), document.querySelector(".esri-view-surface").focus();
    } catch (t2) {
      f$1(t2);
    }
  }
  _getHelpMessage(t2) {
    const { info: e2 } = this, { helpMessage: i5, viewType: o2 } = e2, s = t2 ?? i5, n10 = "3d" === o2 ? "helpMessages3d" : "helpMessages2d";
    return s ? this._messagesTooltip?.sketch?.[n10]?.[s] : void 0;
  }
  async _focusField(t2) {
    this._focusAbortController?.abort(), this._focusAbortController = new AbortController();
    const { signal: e2 } = this._focusAbortController;
    await this._waitForInputs(), s$1(e2);
    const i5 = this._getFocusableInputs();
    N(t2 ? i5.find((e3) => e3.getAttribute("data-field-name") === t2) : i5.at(0));
  }
  async _transitionTo(t2) {
    if (this._mode === t2)
      return;
    const i5 = () => {
      this._mode = t2, this.tooltip.positionMode = "input" === t2 ? "fixed" : "follow-cursor";
    };
    if (!this.domNode?.firstChild || !document.startViewTransition || e$4())
      return void i5();
    this.autoRenderingEnabled = false, this._transition?.skipTransition();
    const o2 = this._transition = document.startViewTransition(() => {
      if (!this.destroyed)
        return this.autoRenderingEnabled = true, i5(), this.renderNow(), M();
    });
    try {
      await this._transition.finished;
    } finally {
      o2 === this._transition && (this._transition = null);
    }
  }
  async _waitForInputs() {
    const t2 = Date.now(), e2 = () => Array.from(this.domNode?.querySelectorAll("calcite-input") ?? []);
    for (; 0 === e2().length; )
      if (await A(B), Date.now() - t2 > H)
        return;
  }
  _getFocusableInputs() {
    return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])") ?? []);
  }
  _getFocusableElements() {
    const t2 = this.domNode?.querySelector(`.${c$1}`);
    return [...Array.from(t2?.querySelectorAll("calcite-action:not([disabled])") ?? []), ...this._getFocusableInputs()];
  }
};
function N(t2) {
  t2?.setFocus();
}
function O(t2) {
  return (Array.isArray(t2) ? t2 : [t2]).flat(10).filter((t3) => !!t3);
}
e$1([e$2("esri/core/t9n/Units"), y()], q.prototype, "_messagesUnits", void 0), e$1([e$2("esri/views/interactive/tooltip/t9n/Tooltip"), y()], q.prototype, "_messagesTooltip", void 0), e$1([y()], q.prototype, "info", void 0), e$1([y()], q.prototype, "tooltip", void 0), e$1([y()], q.prototype, "_mode", void 0), e$1([y()], q.prototype, "mode", null), e$1([y()], q.prototype, "_displayUnits", null), e$1([y()], q.prototype, "_inputUnitInfos", null), e$1([y()], q.prototype, "_formatters", null), e$1([y()], q.prototype, "fieldContext", null), q = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContent")], q);
const V = 1, B = 50, H = 1e3;
let n$8 = class n extends q {
  _renderContent() {
    const { area: t2, radius: e2, xSize: s, ySize: n10, visibleElements: a3 } = this.info, p2 = this._messagesTooltip.sketch, m2 = this._formatters;
    return n$a(i$5, null, a3.radius && null != e2 ? n$a(c, { title: p2.radius, value: m2.length(e2) }) : null, a3.size && null != s && null != n10 ? n$a(c, { title: p2.size, value: n$a(a$1, { left: m2.length(s), right: m2.length(n10) }) }) : null, a3.area ? n$a(c, { title: p2.area, value: m2.area(t2) }) : null);
  }
};
n$8 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], n$8);
const u$1 = `${e}-editable-field`, p = { base: u$1, inputMode: `${u$1}--input`, locked: `${u$1}--locked`, title: `${u$1}__title`, titleContent: `${u$1}__title__content`, value: `${u$1}__value`, valueContent: `${u$1}__value__content`, valueContentReadOnly: `${u$1}__value__content--read-only`, input: `${u$1}__input`, inputSuffix: `${u$1}__input-suffix`, button: `${u$1}__button` };
let d$1 = class d extends O$1 {
  constructor() {
    super(...arguments), this._input = null, this._selectText = () => {
      const t2 = () => {
        this._input === document.activeElement && this._input?.selectText();
      };
      t2(), R$1().then(t2);
    }, this._onKeyDown = (t2) => {
      t2.key === n$b.discard && this._discard();
    }, this._onInputKeyDown = (t2) => {
      switch (t2.key) {
        case n$b.commit:
          return this._commit({ type: "commit-and-exit", allowLockingCurrentValue: true });
        case n$b.next:
          return t2.preventDefault(), t2.stopPropagation(), this._commit({ type: t2.shiftKey ? "commit-and-previous" : "commit-and-next", allowLockingCurrentValue: false });
      }
    }, this._onInput = (t2) => {
      this.field.inputValue = t2.target.value;
    }, this._onLockClick = () => {
      const { field: t2 } = this;
      t2.locked ? t2.unlock() : this._lock();
    };
  }
  initialize() {
    this.addHandles(d$3(() => this._rawDisplayValue, () => {
      const { committed: t2, inputValue: e2 } = this.field;
      t2 || e2 || this._input !== document.activeElement || this._selectText();
    }));
  }
  loadDependencies() {
    return r$2({ action: () => import("@esri/calcite-components/dist/components/calcite-action.js"), icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js"), input: () => import("@esri/calcite-components/dist/components/calcite-input.js") });
  }
  render() {
    const { mode: t2, field: e2 } = this, i5 = "input" === t2, { locked: n10 } = e2;
    return n$a("div", { class: this.classes({ [p.base]: true, [p.inputMode]: "input" === t2, [p.locked]: n10 }) }, n$a("div", { class: p.title, key: "title" }, n$a("div", { class: p.titleContent, key: "title-content" }, this._title, n10 && !i5 ? n$a("calcite-icon", { icon: "lock", key: "icon", scale: "s" }) : null)), n$a("div", { class: p.value, key: "value" }, i5 ? this._renderInputModeValue() : this._renderFeedbackModeValue()));
  }
  get _initialValue() {
    const { field: t2 } = this;
    return null != t2.actual ? t2.toInputUnits(t2.actual, this.context).value : null;
  }
  get _formattedValue() {
    const { context: t2, field: e2 } = this, { actual: i5, committed: n10, format: o2 } = e2;
    return null != n10 ? o2(n10, t2) : null != i5 ? o2(i5, t2) : _;
  }
  get _rawDisplayValue() {
    const { field: t2 } = this, { inputValue: e2, committed: i5 } = t2;
    return null != e2 ? e2 : this._toString(null != i5 ? t2.toInputUnits(i5, this.context).value : this._initialValue);
  }
  get _suffix() {
    const { suffix: t2 } = this.field;
    return "string" == typeof t2 ? t2 : t2(this.context);
  }
  get _title() {
    const { title: t2 } = this.field;
    return "string" == typeof t2 ? t2 : t2(this.context);
  }
  _renderFeedbackModeValue() {
    return n$a("span", { key: "value-feedback" }, this._formattedValue);
  }
  _renderInputModeValue() {
    return this.field.readOnly ? this._renderValueReadOnly() : this._renderValueWritable();
  }
  _renderValueReadOnly() {
    return n$a("span", { class: p.valueContentReadOnly, key: "value-readonly" }, this._formattedValue);
  }
  _renderValueWritable() {
    const { locked: t2, name: e2 } = this.field, i5 = this.context?.messages.sketch ?? {}, n10 = t2 ? i5.unlockConstraint : i5.lockConstraint;
    return n$a("div", { class: p.valueContent, key: "value-writable", onkeydown: this._onKeyDown }, n$a("calcite-input", { afterCreate: (t3) => {
      this._input = t3;
    }, class: p.input, "data-field-name": e2, onfocus: this._selectText, onkeydown: this._onInputKeyDown, scale: "s", type: "text", value: this._rawDisplayValue, onCalciteInputInput: this._onInput }), n$a("div", { class: p.inputSuffix, key: "suffix" }, this._suffix), n$a("calcite-action", { alignment: "center", appearance: "transparent", class: p.button, compact: true, icon: t2 ? "lock" : "unlock", label: n10, onclick: this._onLockClick, scale: "s", tabIndex: -1, text: "", title: n10 }));
  }
  _commit({ type: t2, allowLockingCurrentValue: e2 }) {
    const { _input: i5, field: n10 } = this;
    if (!i5)
      return;
    const { locked: o2, inputValue: s } = n10;
    o2 && "" === s ? n10.unlock() : (e2 && !o2 || null != s) && this._lock(), this.context.onCommit(i5, t2);
  }
  _discard() {
    this._input && (this.field.inputValue = null, this.context.onDiscard(this._input));
  }
  _lock() {
    const { field: t2 } = this, e2 = this._parseNumber(t2.inputValue), i5 = null != e2 ? t2.createQuantity(e2, this.context) : null;
    t2.lock(i5);
  }
  _parseNumber(t2) {
    if (null == t2)
      return null;
    const e2 = parseFloat(t2);
    return isNaN(e2) || !isFinite(e2) ? null : e2;
  }
  _toString(t2) {
    return null != t2 ? t2.toFixed(2) : _;
  }
};
e$1([y()], d$1.prototype, "field", void 0), e$1([y()], d$1.prototype, "context", void 0), e$1([y()], d$1.prototype, "mode", void 0), e$1([y()], d$1.prototype, "_initialValue", null), e$1([y()], d$1.prototype, "_formattedValue", null), e$1([y()], d$1.prototype, "_input", void 0), e$1([y()], d$1.prototype, "_rawDisplayValue", null), e$1([y()], d$1.prototype, "_suffix", null), e$1([y()], d$1.prototype, "_title", null), d$1 = e$1([c$2("esri.views.interactive.tooltip.components.TooltipEditableField")], d$1);
const _ = "—";
function i$4(i5) {
  const l6 = i5.fields.filter((t2) => true === t2?.visible);
  return 0 === l6.length ? null : n$a(i$5, null, l6.map((e2) => n$a(d$1, { context: i5.context, field: e2, key: e2.id, mode: i5.mode })));
}
let i$3 = class i extends q {
  _renderContent() {
    const { fieldContext: o2, info: t2, mode: r3 } = this, { elevation: i5, visibleElements: n10 } = t2;
    return n$a(i$4, { context: o2, fields: [n10.elevation ? i5 : void 0], mode: r3 });
  }
};
i$3 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")], i$3);
let i$2 = class i2 extends q {
  _renderContent() {
    const { fieldContext: o2, info: t2, mode: r3 } = this, { elevation: i5, visibleElements: n10 } = t2;
    return n$a(i$4, { context: o2, fields: [n10.elevation ? i5 : void 0], mode: r3 });
  }
};
i$2 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], i$2);
let a2 = class extends O$1 {
  constructor(e2) {
    super(e2), this._onDirectionModeChange = (e3) => {
      const t2 = e3.target.selectedItems?.[0]?.getAttribute("data-mode");
      this.sketchOptions.values.directionMode = t2 ?? "absolute";
    };
  }
  render() {
    const { directionMode: e2 } = this.sketchOptions.values, t2 = this.messages?.sketch, o2 = "absolute", r3 = "relative";
    return n$a("div", { class: c$1 }, n$a("calcite-dropdown", { key: "direction-mode", placement: "bottom-end", scale: "s", widthScale: "s", onCalciteDropdownSelect: this._onDirectionModeChange }, n$a("calcite-action", { alignment: "end", appearance: "transparent", icon: e$5[e2], scale: "s", slot: "trigger", text: "", textEnabled: false, title: t2?.directionModeSelect?.title }), n$a("calcite-dropdown-group", { selectionMode: "single" }, n$a("calcite-dropdown-item", { "data-mode": r3, "data-testid": "tooltip-direction-mode-relative", iconStart: e$5.relative, key: "relative", selected: e2 === r3 }, t2?.directionModeSelect?.relative), n$a("calcite-dropdown-item", { "data-mode": o2, "data-testid": "tooltip-direction-mode-absolute", iconStart: e$5.absolute, key: "absolute", selected: e2 === o2 }, t2?.directionModeSelect?.absolute))));
  }
  loadDependencies() {
    return r$2({ action: () => import("@esri/calcite-components/dist/components/calcite-action.js"), dropdown: () => import("@esri/calcite-components/dist/components/calcite-dropdown.js"), "dropdown-item": () => import("@esri/calcite-components/dist/components/calcite-dropdown-item.js"), "dropdown-group": () => import("@esri/calcite-components/dist/components/calcite-dropdown-group.js") });
  }
};
e$1([e$2("esri/views/interactive/tooltip/t9n/Tooltip"), y()], a2.prototype, "messages", void 0), e$1([y()], a2.prototype, "sketchOptions", void 0), a2 = e$1([c$2("esri.views.interactive.tooltip.components.DrawHeaderActions")], a2);
let n$7 = class n2 extends q {
  _renderContent() {
    const { fieldContext: o2, info: t2, mode: e2 } = this, { area: s, distance: n10, elevation: c2, direction: p2, visibleElements: d3 } = t2;
    return n$a(i$4, { context: o2, fields: [d3.direction ? p2 : void 0, d3.distance ? n10 : void 0, d3.elevation ? c2 : void 0, d3.area ? s : void 0], mode: e2 });
  }
  _renderActions() {
    return n$a(a2, { sketchOptions: this.info.sketchOptions });
  }
};
n$7 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], n$7);
let n$6 = class n3 extends q {
  _renderContent() {
    const { fieldContext: o2, info: t2, mode: e2 } = this, { distance: r3, elevation: n10, direction: c2, totalLength: p2, visibleElements: d3 } = t2;
    return n$a(i$4, { context: o2, fields: [d3.direction ? c2 : void 0, d3.distance ? r3 : void 0, d3.elevation ? n10 : void 0, d3.totalLength ? p2 : void 0], mode: e2 });
  }
  _renderActions() {
    return n$a(a2, { sketchOptions: this.info.sketchOptions });
  }
};
n$6 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], n$6);
let n$5 = class n4 extends q {
  _renderContent() {
    const { area: t2, xSize: e2, ySize: s, visibleElements: n10 } = this.info, a3 = this._messagesTooltip.sketch, p2 = this._formatters;
    return n$a(i$5, null, n10.size && null != e2 && null != s ? n$a(c, { title: a3.size, value: n$a(a$1, { left: p2.length(e2), right: p2.length(s) }) }) : null, n10.area ? n$a(c, { title: a3.area, value: p2.area(t2) }) : null);
  }
};
n$5 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], n$5);
let n$4 = class n5 extends q {
  _renderContent() {
    const { angle: t2, visibleElements: o2 } = this.info, s = this._messagesTooltip.sketch;
    return n$a(i$5, null, o2.rotation ? n$a(c, { title: s.rotation, value: this._formatters.angleRelative(t2) }) : null);
  }
};
n$4 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], n$4);
let n$3 = class n6 extends q {
  _renderContent() {
    const t2 = this.info, { visibleElements: e2 } = t2, r3 = this._messagesTooltip.sketch, n10 = this._formatters;
    return n$a(i$5, null, e2.size ? n$a(c, { title: r3.size, value: n$a(a$1, { left: n10.length(t2.xSize), right: n10.length(t2.ySize) }) }) : null, e2.scale ? n$a(c, { title: r3.scale, value: n$a(a$1, { left: n10.scale(t2.xScale), right: n10.scale(t2.yScale) }) }) : null);
  }
};
n$3 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], n$3);
let l$4 = class l extends q {
  _renderContent() {
    const { area: t2, distance: e2, totalLength: s, visibleElements: l6 } = this.info, n10 = this._messagesTooltip.sketch, a3 = this._formatters;
    return n$a(i$5, null, l6.distance ? n$a(c, { title: n10.distance, value: a3.lengthRelative(e2) }) : null, l6.area && null != t2 ? n$a(c, { title: n10.area, value: a3.area(t2) }) : null, l6.totalLength && null != s ? n$a(c, { title: n10.totalLength, value: a3.length(s) }) : null);
  }
};
l$4 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], l$4);
let l$3 = class l2 extends q {
  _renderContent() {
    const { info: t2 } = this, { visibleElements: e2 } = t2, s = this._messagesTooltip.sketch, l6 = this._formatters;
    return n$a(i$5, null, e2.orientation && null != t2.orientation ? n$a(c, { key: "orientation", title: s.orientation, value: T(t2.orientation, t2.rotationType, t2.orientationPrecision) }) : null, e2.size && null != t2.size ? n$a(c, { key: "size", title: s.size, value: l6.length(t2.size, t2.sizeUnit, t2.sizePrecision) }) : null);
  }
};
l$3 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")], l$3);
let l$2 = class l3 extends q {
  _renderContent() {
    const { info: o2 } = this, { visibleElements: i5 } = o2, n10 = this._messagesTooltip.sketch;
    return n$a(i$5, null, i5.rotation && null != o2.rotation ? n$a(c, { key: "rotation", title: n10.rotation, value: U(o2.rotation, o2.rotationType, o2.rotationPrecision) }) : null, i5.orientation && null != o2.orientation ? n$a(c, { key: "orientation", title: n10.orientation, value: T(o2.orientation, o2.rotationType, o2.orientationPrecision) }) : null);
  }
};
l$2 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")], l$2);
let l$1 = class l4 extends q {
  _renderContent() {
    const { info: e2 } = this, { visibleElements: s } = e2, o2 = this._messagesTooltip.sketch, l6 = this._formatters;
    return n$a(i$5, null, s.scale && null != e2.scale ? n$a(c, { key: "scale", title: o2.scale, value: l6.percentage(e2.scale) }) : null, s.size && null != e2.size ? n$a(c, { key: "size", title: o2.size, value: l6.length(e2.size, e2.sizeUnit, e2.sizePrecision) }) : null);
  }
};
l$1 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTransformScale")], l$1);
let n$2 = class n7 extends q {
  _renderContent() {
    const { info: t2 } = this, { visibleElements: o2 } = t2, e2 = this._messagesTooltip.sketch, n10 = this._formatters;
    return n$a(i$5, null, o2.distance ? n$a(c, { title: e2.distance, value: n10.length(t2.distance) }) : null);
  }
};
n$2 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")], n$2);
let n$1 = class n8 extends q {
  _renderContent() {
    const { info: t2 } = this, { visibleElements: o2 } = t2, e2 = this._messagesTooltip.sketch, n10 = this._formatters;
    return n$a(i$5, null, o2.distance ? n$a(c, { title: e2.distance, value: n10.length(t2.distance) }) : null);
  }
};
n$1 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")], n$1);
let n9 = class extends q {
  _renderContent() {
    const { info: t2 } = this, { visibleElements: o2 } = t2, e2 = this._messagesTooltip.sketch;
    return n$a(i$5, null, o2.distance ? n$a(c, { title: e2.distance, value: this._formatters.verticalLengthRelative(t2.distance) }) : null);
  }
};
n9 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")], n9);
let i$1 = class i3 extends q {
  _renderContent() {
    const { distance: t2, elevation: e2, area: l6, totalLength: i5, visibleElements: n10 } = this.info, a3 = this._messagesTooltip.sketch, c$12 = this._formatters;
    return n$a(i$5, null, n10.distance ? n$a(c, { title: a3.distance, value: c$12.length(t2) }) : null, n10.elevation && null != e2?.actual ? n$a(c, { title: a3.elevation, value: c$12.verticalLength(e2.actual) }) : null, n10.area && null != l6 ? n$a(c, { title: a3.area, value: c$12.area(l6) }) : null, n10.totalLength && null != i5 ? n$a(c, { title: a3.totalLength, value: c$12.length(i5) }) : null);
  }
};
i$1 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], i$1);
let i4 = class extends q {
  _renderContent() {
    const { area: t2, distance: e2, elevation: l6, totalLength: i5, visibleElements: a3 } = this.info, n10 = this._messagesTooltip.sketch, c$12 = this._formatters;
    return n$a(i$5, null, a3.distance ? n$a(c, { title: n10.distance, value: c$12.lengthRelative(e2) }) : null, a3.elevation && null != l6?.actual ? n$a(c, { title: n10.elevation, value: c$12.verticalLength(l6.actual) }) : null, a3.area && null != t2 ? n$a(c, { title: n10.area, value: c$12.area(t2) }) : null, a3.totalLength && null != i5 ? n$a(c, { title: n10.totalLength, value: c$12.length(i5) }) : null);
  }
};
i4 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")], i4);
let l5 = class extends q {
  _renderContent() {
    const { distance: t2, elevation: e2, visibleElements: s } = this.info, l6 = this._messagesTooltip.sketch, n10 = this._formatters;
    return n$a(i$5, null, s.distance ? n$a(c, { title: l6.distance, value: n10.verticalLengthRelative(t2) }) : null, s.elevation && null != e2?.actual ? n$a(c, { title: l6.elevation, value: n10.verticalLength(e2.actual) }) : null);
  }
};
l5 = e$1([c$2("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")], l5);
function x(x2, h2) {
  if (null == h2)
    return null;
  const d3 = document.createElement("div");
  switch (h2.type) {
    case "draw-point":
      return new i$2({ tooltip: x2, info: h2, container: d3 });
    case "draw-polygon":
      return new n$7({ tooltip: x2, info: h2, container: d3 });
    case "draw-polyline":
      return new n$6({ tooltip: x2, info: h2, container: d3 });
    case "draw-mesh":
      return new i$3({ tooltip: x2, info: h2, container: d3 });
    case "draw-rectangle":
      return new n$5({ tooltip: x2, info: h2, container: d3 });
    case "draw-circle":
      return new n$8({ tooltip: x2, info: h2, container: d3 });
    case "extent-rotate":
      return new n$4({ tooltip: x2, info: h2, container: d3 });
    case "extent-scale":
      return new n$3({ tooltip: x2, info: h2, container: d3 });
    case "transform-absolute":
      return new l$3({ tooltip: x2, info: h2, container: d3 });
    case "transform-rotate":
      return new l$2({ tooltip: x2, info: h2, container: d3 });
    case "transform-scale":
      return new l$1({ tooltip: x2, info: h2, container: d3 });
    case "translate-graphic":
      return new n$2({ tooltip: x2, info: h2, container: d3 });
    case "translate-graphic-z":
      return new n9({ tooltip: x2, info: h2, container: d3 });
    case "translate-graphic-xy":
      return new n$1({ tooltip: x2, info: h2, container: d3 });
    case "translate-vertex":
      return new i$1({ tooltip: x2, info: h2, container: d3 });
    case "translate-vertex-z":
      return new l5({ tooltip: x2, info: h2, container: d3 });
    case "translate-vertex-xy":
      return new i4({ tooltip: x2, info: h2, container: d3 });
    case "reshape-edge-offset":
      return new l$4({ tooltip: x2, info: h2, container: d3 });
  }
}
const d2 = { base: `${e}` };
let u = class extends S$1 {
  constructor(t2) {
    super(t2), this.info = null, this.positionMode = "follow-cursor", this.content = null, this.contentContainer = (() => {
      const t3 = document.createElement("div");
      return t3.classList.add(d2.base), n$c(t3), t3;
    })();
  }
  initialize() {
    const { contentContainer: t2 } = this;
    this.addHandles([d$3(() => this.view.overlay?.surface, (o2) => {
      t2.remove(), o2?.appendChild(t2);
    }, A$1), d$3(() => this.info, (o2, n10) => {
      if (null != this.content && null != o2 && null != n10 && o2.type === n10.type)
        this.content.info = o2;
      else {
        this.content = u$3(this.content);
        const n11 = x(this, o2);
        n11 && (this.content = n11, n11.container && t2.appendChild(n11.container));
      }
    }, A$1), d$3(() => ({ container: this.contentContainer, content: this.content, screenPoint: this._screenPoint, positionMode: this.positionMode }), h, A$1)]);
  }
  destroy() {
    this.info = null, this.content = u$3(this.content), this.contentContainer.remove();
  }
  get mode() {
    return this.content?.mode ?? "feedback";
  }
  get test() {
    return { visible: "none" !== this.contentContainer?.style.display };
  }
  get _screenPoint() {
    const t2 = this.view.inputManager;
    return t2?.multiTouchActive ? null : t2?.latestPointerLocation;
  }
  clear() {
    this.info = null;
  }
  async enterInputMode(t2) {
    await this.content?.enterInputMode(t2);
  }
  async exitInputMode() {
    await this.content?.exitInputMode();
  }
};
function h({ container: t2, content: o2, screenPoint: e2, positionMode: n10 }) {
  const { style: i5 } = t2;
  if ("fixed" !== n10)
    if (null != e2 && null != o2) {
      i5.display = "block";
      const o3 = v(t2), n11 = `translate(${Math.round(e2.x) + m[0] * (o3 ? -1 : 1)}px, ${Math.round(e2.y) + m[1]}px)`;
      i5.transform = o3 ? `translate(-100%, 0) ${n11}` : n11;
    } else
      i5.display = "none";
}
e$1([y({ nonNullable: true })], u.prototype, "view", void 0), e$1([y()], u.prototype, "info", void 0), e$1([y()], u.prototype, "positionMode", void 0), e$1([y()], u.prototype, "content", void 0), e$1([y()], u.prototype, "mode", null), e$1([y()], u.prototype, "contentContainer", void 0), e$1([y()], u.prototype, "_screenPoint", null), u = e$1([c$2("esri.views.interactive.tooltip.Tooltip")], u);
const m = [20, 20];
export {
  r$1 as r,
  u
};
