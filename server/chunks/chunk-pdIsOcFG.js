import { r9 as s$6, bQ as V, gB as a$2, aV as e$8, aX as y$6, jd as s$7, bJ as c$b, a_ as c$c, bZ as S$1, ce as d$5, bX as P$1, aO as s$8, CZ as c$d, hG as n$a, r5 as e$9, r6 as O$1, eV as v$4, r7 as r$1, r8 as n$b, yv as e$a, C_ as L, C$ as w$7, yg as v$5, yw as i$1, yt as e$b, D0 as e$c, te as i$2, D1 as m$6, e6 as r$2, D2 as h$5, D3 as h$6, eL as r$5, hU as h$7, lA as v$6, wA as m$7, aT as s$9, ck as b$3, iY as s$a, dX as pe, aQ as U$2, lz as d$6, cr as q$2, D4 as i$3, yl as r$6, dw as We, D5 as i$4, cY as x$4, D6 as I$5, D7 as c$e, D8 as c$f, D9 as i$5, jT as i$6, c7 as s$b, si as d$7, f9 as k$3, c8 as u$5, iU as A$2, A9 as o$1, cd as b$4, Da as t$4, ds as o$2, f6 as p$9, dy as K$1, Af as i$7, Db as p$a, Dc as c$g, Dd as a$3, qi as f$5, De as t$5, b_ as S$2, nB as o$3, dF as U$3, cf as C$4, ia as d$8, hX as I$6, a$ as b$5, nY as n$c, eg as u$6, Df as e$e, Dg as o$4, ex as w$8 } from "./chunk-ejFG4zJ0.js";
import { O as O$2 } from "./chunk-V0WGYzWu.js";
import { E as E$2, x as x$3, C as C$3, q as q$1, d as de, D, P, z as z$2, R as R$3, v as v$7, M as M$4, Y as Y$1, a as ae, o as oe, T as Te, r as re, i as ie, s as se, J as J$1, n as ne, c as ce, u as ue, h as he, b as be } from "./chunk-ozhCrCUU.js";
import { e as e$d } from "./chunk-19x7Cx8s.js";
import { y as r$3, m as r$4, z as L$1 } from "./chunk-0GVzsKqt.js";
import { s as s$c } from "./chunk-wg0ozFEK.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function e$7(e3, t2, l4, n3) {
  let o2 = null, p4 = 1e3;
  "number" == typeof t2 ? (p4 = t2, n3 = l4) : (o2 = t2 ?? null, p4 = l4);
  let r2, u3 = 0;
  const a2 = () => {
    u3 = 0, e3.apply(n3, r2);
  }, c6 = (...e4) => {
    o2 && o2.apply(n3, e4), r2 = e4, p4 ? u3 || (u3 = setTimeout(a2, p4)) : a2();
  };
  return c6.remove = () => {
    u3 && (clearTimeout(u3), u3 = 0);
  }, c6.forceUpdate = () => {
    u3 && (clearTimeout(u3), a2());
  }, c6.hasPendingUpdates = () => !!u3, c6;
}
function n$9(e3) {
  switch (e3?.type) {
    case "point":
      return e3;
    case "extent":
      return e3.center;
    case "polygon":
      return e3.centroid;
    case "multipoint":
    case "polyline":
      return e3.extent?.center;
    default:
      return null;
  }
}
function n$8(i2) {
  return i2 ? { backgroundImage: `url(${i2})` } : {};
}
function e$6({ action: t2, feature: n3 }) {
  const e3 = n3?.attributes, o2 = "image" in t2 ? t2.image : void 0;
  return o2 && e3 ? s$6(o2, e3) : o2 ?? "";
}
const m$5 = { editing: false, operations: { add: true, update: true, delete: true } }, f$4 = V.ofType(a$2);
let u$4 = class u extends S$1 {
  constructor(t2) {
    super(t2), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...m$5 }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f$4(), this.fileInfos = new V(), this.graphic = null, this.mode = "view", this.filesEnabled = false, this.addHandles(d$5(() => this.graphic, () => this._graphicChanged(), P$1));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t2) {
    return { ...m$5, ...t2 };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t2 } = this;
    if (!t2)
      return false;
    const e3 = t2.layer || t2.sourceLayer;
    return e3?.loaded && "capabilities" in e3 && e3.capabilities && "operations" in e3.capabilities && "supportsResizeAttachments" in e3.capabilities.operations && e3.capabilities.operations.supportsResizeAttachments || false;
  }
  async getAttachments() {
    const { _attachmentLayer: t2, attachmentInfos: e3 } = this;
    if (!t2 || "function" != typeof t2.queryAttachments)
      throw new s$8("invalid-layer", "getAttachments(): A valid layer is required.");
    const a2 = this._getObjectId(), i2 = new c$d({ objectIds: [a2], returnMetadata: true }), r2 = [], s4 = t2.queryAttachments(i2).then((t3) => t3[a2] || r2).catch(() => r2);
    this._getAttachmentsPromise = s4, this.notifyChange("state");
    const o2 = await s4;
    return e3.removeAll(), o2.length && e3.addMany(o2), this._getAttachmentsPromise = null, this.notifyChange("state"), o2;
  }
  async addAttachment(t2, e3 = this.graphic) {
    const { _attachmentLayer: a2, attachmentInfos: i2, capabilities: r2 } = this;
    if (!e3)
      throw new s$8("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e3 });
    if (!t2)
      throw new s$8("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t2 });
    if (!r2.operations?.add)
      throw new s$8("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!a2 || "function" != typeof a2.addAttachment)
      throw new s$8("invalid-layer", "addAttachment(): A valid layer is required.");
    const s4 = a2.addAttachment(e3, t2).then((t3) => this._queryAttachment(t3.objectId, e3)), o2 = await s4;
    return i2.add(o2), o2;
  }
  async deleteAttachment(t2) {
    const { _attachmentLayer: e3, attachmentInfos: a2, graphic: i2, capabilities: r2 } = this;
    if (!t2)
      throw new s$8("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t2 });
    if (!r2.operations?.delete)
      throw new s$8("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e3 || "function" != typeof e3.deleteAttachments)
      throw new s$8("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!i2)
      throw new s$8("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s4 = e3.deleteAttachments(i2, [t2.id]).then(() => t2), o2 = await s4;
    return a2.remove(o2), o2;
  }
  async updateAttachment(t2, e3 = this.activeAttachmentInfo) {
    const { _attachmentLayer: a2, attachmentInfos: i2, graphic: r2, capabilities: s4 } = this;
    if (!t2)
      throw new s$8("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t2 });
    if (!e3)
      throw new s$8("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e3 });
    if (!s4.operations?.update)
      throw new s$8("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o2 = i2.indexOf(e3);
    if (!a2 || "function" != typeof a2.updateAttachment)
      throw new s$8("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r2)
      throw new s$8("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c6 = a2.updateAttachment(r2, e3.id, t2).then((t3) => this._queryAttachment(t3.objectId)), h4 = await c6;
    return i2.splice(o2, 1, h4), h4;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t2) => this.addAttachment(t2.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t2, e3) {
    if (!t2 || !e3)
      return null;
    const a2 = { file: t2, form: e3 };
    return this.fileInfos.add(a2), a2;
  }
  updateFile(t2, e3, a2 = this.activeFileInfo) {
    if (!t2 || !e3 || !a2)
      return null;
    const i2 = this.fileInfos.indexOf(a2);
    return i2 > -1 && this.fileInfos.splice(i2, 1, { file: t2, form: e3 }), this.fileInfos.items[i2];
  }
  deleteFile(t2) {
    const e3 = this.fileInfos.find((e4) => e4.file === t2);
    return e3 ? (this.fileInfos.remove(e3), e3) : null;
  }
  async _queryAttachment(t2, e3) {
    const { _attachmentLayer: a2 } = this;
    if (!t2 || !a2?.queryAttachments)
      throw new s$8("invalid-attachment-id", "Could not query attachment.");
    const i2 = this._getObjectId(e3), r2 = new c$d({ objectIds: [i2], attachmentsWhere: `AttachmentId=${t2}`, returnMetadata: true });
    return a2.queryAttachments(r2).then((t3) => t3[i2][0]);
  }
  _getObjectId(t2 = this.graphic) {
    return t2?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const { graphic: t2 } = this, e3 = E$2(t2);
    this._attachmentLayer = e3 ? "scene" === e3.type && null != e3.associatedLayer ? e3.associatedLayer : e3 : null;
  }
};
e$8([y$6()], u$4.prototype, "capabilities", void 0), e$8([s$7("capabilities")], u$4.prototype, "castCapabilities", null), e$8([y$6()], u$4.prototype, "activeAttachmentInfo", void 0), e$8([y$6()], u$4.prototype, "activeFileInfo", void 0), e$8([y$6({ readOnly: true, type: f$4 })], u$4.prototype, "attachmentInfos", void 0), e$8([y$6()], u$4.prototype, "fileInfos", void 0), e$8([y$6({ type: c$b })], u$4.prototype, "graphic", void 0), e$8([y$6()], u$4.prototype, "mode", void 0), e$8([y$6({ readOnly: true })], u$4.prototype, "state", null), e$8([y$6()], u$4.prototype, "filesEnabled", void 0), e$8([y$6({ readOnly: true })], u$4.prototype, "supportsResizeAttachments", null), u$4 = e$8([c$c("esri.widgets.Attachments.AttachmentsViewModel")], u$4);
const y$5 = u$4;
function e$5(i2) {
  const e3 = i2.toLowerCase();
  return "image/bmp" === e3 || "image/emf" === e3 || "image/exif" === e3 || "image/gif" === e3 || "image/x-icon" === e3 || "image/jpeg" === e3 || "image/png" === e3 || "image/tiff" === e3 || "image/x-wmf" === e3;
}
function p$8(e3) {
  const p4 = n$a("esri/themes/base/images/files/");
  return e3 ? "text/plain" === e3 ? `${p4}text-32.svg` : "application/pdf" === e3 ? `${p4}pdf-32.svg` : "text/csv" === e3 ? `${p4}csv-32.svg` : "application/gpx+xml" === e3 ? `${p4}gpx-32.svg` : "application/x-dwf" === e3 ? `${p4}cad-32.svg` : "application/postscript" === e3 || "application/json" === e3 || "text/xml" === e3 || "model/vrml" === e3 ? `${p4}code-32.svg` : "application/x-zip-compressed" === e3 || "application/x-7z-compressed" === e3 || "application/x-gzip" === e3 || "application/x-tar" === e3 || "application/x-gtar" === e3 || "application/x-bzip2" === e3 || "application/gzip" === e3 || "application/x-compress" === e3 || "application/x-apple-diskimage" === e3 || "application/x-rar-compressed" === e3 || "application/zip" === e3 ? `${p4}zip-32.svg` : e3.includes("image/") ? `${p4}image-32.svg` : e3.includes("audio/") ? `${p4}sound-32.svg` : e3.includes("video/") ? `${p4}video-32.svg` : e3.includes("msexcel") || e3.includes("ms-excel") || e3.includes("spreadsheetml") ? `${p4}excel-32.svg` : e3.includes("msword") || e3.includes("ms-word") || e3.includes("wordprocessingml") ? `${p4}word-32.svg` : e3.includes("powerpoint") || e3.includes("presentationml") ? `${p4}report-32.svg` : `${p4}generic-32.svg` : `${p4}generic-32.svg`;
}
const A$1 = { addButton: true, addSubmitButton: true, cancelAddButton: true, cancelUpdateButton: true, deleteButton: true, errorMessage: true, progressBar: true, updateButton: true }, w$6 = "esri-attachments", F$5 = { base: w$6, loaderContainer: `${w$6}__loader-container`, loader: `${w$6}__loader`, fadeIn: `${w$6}--fade-in`, container: `${w$6}__container`, containerList: `${w$6}__container--list`, containerPreview: `${w$6}__container--preview`, actions: `${w$6}__actions`, deleteButton: `${w$6}__delete-button`, addAttachmentButton: `${w$6}__add-attachment-button`, errorMessage: `${w$6}__error-message`, items: `${w$6}__items`, item: `${w$6}__item`, itemButton: `${w$6}__item-button`, itemMask: `${w$6}__item-mask`, itemMaskIcon: `${w$6}__item-mask--icon`, itemImage: `${w$6}__image`, itemImageResizable: `${w$6}__image--resizable`, itemLabel: `${w$6}__label`, itemFilename: `${w$6}__filename`, itemChevronIcon: `${w$6}__item-chevron-icon`, itemLink: `${w$6}__item-link`, itemLinkOverlay: `${w$6}__item-link-overlay`, itemLinkOverlayIcon: `${w$6}__item-link-overlay-icon`, itemEditIcon: `${w$6}__item-edit-icon`, itemAddIcon: `${w$6}__item-add-icon`, itemAddButton: `${w$6}__item-add-button`, formNode: `${w$6}__form-node`, fileFieldset: `${w$6}__file-fieldset`, fileLabel: `${w$6}__file-label`, fileName: `${w$6}__file-name`, fileInput: `${w$6}__file-input`, metadata: `${w$6}__metadata`, metadataFieldset: `${w$6}__metadata-fieldset`, progressBar: `${w$6}__progress-bar` }, k$2 = window.CSS;
let M$3 = class M extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = { ...A$1 }, this._supportsImageOrientation = k$2 && k$2.supports && k$2.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e3) {
    return e3?.viewModel || (e3 = { viewModel: new y$5(), ...e3 }), e3;
  }
  initialize() {
    this.addHandles([v$4(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), v$4(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), d$5(() => this.viewModel?.mode, () => this._modeChanged(), P$1)]);
  }
  loadDependencies() {
    return r$1({ icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e3) {
    this.viewModel.capabilities = e3;
  }
  get effectiveDisplayType() {
    const { displayType: e3 } = this;
    return e3 && "auto" !== e3 ? e3 : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e3) {
    this.viewModel.graphic = e3;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e3) {
    this._overrideIfSome("label", e3);
  }
  castVisibleElements(e3) {
    return { ...A$1, ...e3 };
  }
  addAttachment() {
    const { _addAttachmentForm: e3, viewModel: s4 } = this;
    return this._set("submitting", true), this._set("error", null), s4.addAttachment(e3).then((e4) => (this._set("submitting", false), this._set("error", null), s4.mode = "view", e4)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$8("attachments:add-attachment", this.messages.addErrorMessage, e4)), e4;
    });
  }
  deleteAttachment(e3) {
    const { viewModel: s4 } = this;
    return this._set("submitting", true), this._set("error", null), s4.deleteAttachment(e3).then((e4) => (this._set("submitting", false), this._set("error", null), s4.mode = "view", e4)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$8("attachments:delete-attachment", this.messages.deleteErrorMessage, e4)), e4;
    });
  }
  updateAttachment() {
    const { viewModel: e3 } = this, { _updateAttachmentForm: s4 } = this;
    return this._set("submitting", true), this._set("error", null), e3.updateAttachment(s4).then((t2) => (this._set("submitting", false), this._set("error", null), e3.mode = "view", t2)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$8("attachments:update-attachment", this.messages.updateErrorMessage, e4)), e4;
    });
  }
  addFile() {
    const e3 = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e3;
  }
  updateFile() {
    const { viewModel: e3 } = this, t2 = e3.updateFile(this.selectedFile, this._updateAttachmentForm, e3.activeFileInfo);
    return e3.mode = "view", t2;
  }
  deleteFile(e3) {
    const t2 = this.viewModel.deleteFile(e3 || this.viewModel.activeFileInfo?.file);
    return this.viewModel.mode = "view", t2;
  }
  render() {
    const { submitting: e3, viewModel: t2 } = this, { state: s4 } = t2;
    return n$b("div", { class: this.classes(F$5.base, e$a.widget) }, e3 ? this._renderProgressBar() : null, "loading" === s4 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e3, visibleElements: t2 } = this;
    return e3 && t2.errorMessage ? n$b("div", { class: F$5.errorMessage, key: "error-message" }, e3.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e3, mode: t2, activeAttachmentInfo: s4 } = this.viewModel;
    return "add" === t2 ? this._renderAddForm() : "edit" === t2 ? this._renderDetailsForm(s4 || e3) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return n$b("div", { class: F$5.loaderContainer, key: "loader" }, n$b("div", { class: F$5.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? n$b("div", { class: F$5.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e3, selectedFile: t2 } = this, s4 = e3 || !t2, i2 = this.visibleElements.cancelAddButton ? n$b("button", { bind: this, class: this.classes(e$a.button, e$a.buttonTertiary, e$a.buttonSmall, e$a.buttonHalf, e3 && e$a.buttonDisabled), disabled: e3, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, a2 = this.visibleElements.addSubmitButton ? n$b("button", { class: this.classes(e$a.button, e$a.buttonSecondary, e$a.buttonSmall, e$a.buttonHalf, { [e$a.buttonDisabled]: s4 }), disabled: s4, type: "submit" }, this.messages.add) : null, n3 = t2 ? n$b("span", { class: F$5.fileName, key: "file-name" }, t2.name) : null, l4 = n$b("form", { afterCreate: L, afterRemoved: w$7, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, n$b("fieldset", { class: F$5.fileFieldset }, n3, n$b("label", { class: this.classes(F$5.fileLabel, e$a.button, e$a.buttonSecondary) }, t2 ? this.messages.changeFile : this.messages.selectFile, n$b("input", { bind: this, class: F$5.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), a2, i2);
    return n$b("div", { class: F$5.formNode, key: "add-form-container" }, l4);
  }
  _renderDetailsForm(e3) {
    const { visibleElements: t2, viewModel: s4, selectedFile: i2, submitting: a2 } = this, { capabilities: l4 } = s4, r2 = a2 || !i2;
    let o2, d2, m2, c6;
    i2 ? (o2 = i2.type, d2 = i2.name, m2 = i2.size) : e3 && "file" in e3 ? (o2 = e3.file.type, d2 = e3.file.name, m2 = e3.file.size) : e3 && "contentType" in e3 && (o2 = e3.contentType, d2 = e3.name, m2 = e3.size, c6 = e3.url);
    const h4 = l4.editing && l4.operations?.delete && t2.deleteButton ? n$b("button", { bind: this, class: this.classes(e$a.button, e$a.buttonSmall, e$a.buttonTertiary, F$5.deleteButton, { [e$a.buttonDisabled]: a2 }), disabled: a2, key: "delete-button", onclick: (t3) => this._submitDeleteAttachment(t3, e3), type: "button" }, this.messages.delete) : void 0, u3 = l4.editing && l4.operations?.update && t2.updateButton ? n$b("button", { class: this.classes(e$a.button, e$a.buttonSmall, e$a.buttonThird, { [e$a.buttonDisabled]: r2 }), disabled: r2, key: "update-button", type: "submit" }, this.messages.update) : void 0, b2 = this.visibleElements.cancelUpdateButton ? n$b("button", { bind: this, class: this.classes(e$a.button, e$a.buttonSmall, e$a.buttonTertiary, e$a.buttonThird, { [e$a.buttonDisabled]: a2 }), disabled: a2, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, f2 = l4.editing && l4.operations?.update ? n$b("fieldset", { class: F$5.fileFieldset, key: "file" }, n$b("span", { class: F$5.fileName, key: "file-name" }, d2), n$b("label", { class: this.classes(F$5.fileLabel, e$a.button, e$a.buttonSecondary) }, this.messages.changeFile, n$b("input", { bind: this, class: F$5.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, v3 = n$b("fieldset", { class: F$5.metadataFieldset, key: "size" }, n$b("label", null, O$2(this.messagesUnits, m2 ?? 0))), A2 = n$b("fieldset", { class: F$5.metadataFieldset, key: "content-type" }, n$b("label", null, o2)), w2 = null != c6 ? n$b("a", { class: F$5.itemLink, href: c6, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e3, 400), n$b("div", { class: F$5.itemLinkOverlay }, n$b("span", { class: F$5.itemLinkOverlayIcon }, n$b("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e3, 400), k2 = n$b("form", { afterCreate: L, afterRemoved: w$7, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (t3) => this._submitUpdateAttachment(t3, e3) }, n$b("div", { class: F$5.metadata }, v3, A2), f2, n$b("div", { class: F$5.actions }, h4, b2, u3));
    return n$b("div", { class: F$5.formNode, key: "edit-form-container" }, w2, k2);
  }
  _renderImageMask(e3, t2) {
    return e3 ? "file" in e3 ? this._renderGenericImageMask(e3.file.name, e3.file.type) : this._renderImageMaskForAttachment(e3, t2) : null;
  }
  _renderGenericImageMask(e3, t2) {
    const { supportsResizeAttachments: s4 } = this.viewModel, i2 = p$8(t2), a2 = { [F$5.itemImageResizable]: s4 };
    return n$b("div", { class: this.classes(F$5.itemMaskIcon, F$5.itemMask), key: i2 }, n$b("img", { alt: e3, class: this.classes(a2, F$5.itemImage), src: i2, title: e3 }));
  }
  _renderImageMaskForAttachment(e3, t2) {
    const { supportsResizeAttachments: s4 } = this.viewModel;
    if (!e3)
      return null;
    const { contentType: i2, name: a2, url: n3 } = e3;
    if (!s4 || !e$5(i2))
      return this._renderGenericImageMask(a2, i2);
    const l4 = this._getCSSTransform(e3), r2 = l4 ? { transform: l4, "image-orientation": "none" } : {}, o2 = `${n3}${n3?.includes("?") ? "&" : "?"}w=${t2}`, d2 = { [F$5.itemImageResizable]: s4 };
    return n$b("div", { class: this.classes(F$5.itemMask), key: o2 }, n$b("img", { alt: a2, class: this.classes(d2, F$5.itemImage), src: o2, styles: r2, title: a2 }));
  }
  _renderFile(e3) {
    const { file: t2 } = e3;
    return n$b("li", { class: F$5.item, key: t2 }, n$b("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F$5.itemButton, key: "details-button", onclick: () => this._startEditFile(e3), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e3), n$b("label", { class: F$5.itemLabel }, n$b("span", { class: F$5.itemFilename }, t2.name || this.messages.noTitle), n$b("span", { "aria-hidden": "true", class: this.classes(F$5.itemChevronIcon, v$5(this.container) ? i$1.left : i$1.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e3, displayType: t2 }) {
    const { viewModel: s4, effectiveDisplayType: i2 } = this, { capabilities: a2, supportsResizeAttachments: n3 } = s4, { contentType: l4, name: r2, url: o2 } = e3, d2 = this._renderImageMask(e3, "list" === t2 ? 48 : 400), m2 = a2.editing ? n$b("span", { "aria-hidden": "true", class: this.classes(F$5.itemChevronIcon, v$5(this.container) ? i$1.left : i$1.right) }) : null, c6 = [d2, "preview" === i2 && n3 && e$5(l4) ? null : n$b("label", { class: F$5.itemLabel }, n$b("span", { class: F$5.itemFilename }, r2 || this.messages.noTitle), m2)], u3 = a2.editing ? n$b("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F$5.itemButton, "data-attachment-info-id": e3.id, key: "details-button", onclick: () => this._startEditAttachment(e3), title: this.messages.attachmentDetails, type: "button" }, c6) : n$b("a", { class: F$5.itemButton, href: o2 ?? void 0, key: "details-link", target: "_blank" }, c6);
    return n$b("li", { class: F$5.item, key: e3 }, u3);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: e3, viewModel: t2, visibleElements: s4 } = this, { attachmentInfos: i2, capabilities: a2, fileInfos: n3 } = t2, l4 = !!i2?.length, r2 = !!n3?.length, o2 = { [F$5.containerList]: "preview" !== e3, [F$5.containerPreview]: "preview" === e3 }, d2 = a2.editing && a2.operations?.add && s4.addButton ? n$b("button", { bind: this, class: this.classes(e$a.button, e$a.buttonTertiary, F$5.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, n$b("span", { "aria-hidden": "true", class: this.classes(F$5.itemAddIcon, i$1.plus) }), this.messages.add) : void 0, m2 = l4 ? n$b("ul", { class: F$5.items, key: "attachments-list" }, i2.toArray().map((t3) => this._renderAttachmentInfo({ attachmentInfo: t3, displayType: e3 }))) : void 0, c6 = r2 ? n$b("ul", { class: F$5.items, key: "file-list" }, n3.toArray().map((e4) => this._renderFile(e4))) : void 0, h4 = r2 || l4 ? void 0 : n$b("div", { class: e$a.empty }, this.messages.noAttachments);
    return n$b("div", { class: this.classes(F$5.container, o2), key: "attachments-container" }, m2, c6, h4, d2);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e3) {
    const t2 = e3.target, s4 = t2.files?.item(0);
    this._set("selectedFile", s4);
  }
  _submitDeleteAttachment(e3, t2) {
    e3.preventDefault(), t2 && ("file" in t2 ? this.deleteFile(t2.file) : t2 && this.deleteAttachment(t2));
  }
  _submitAddAttachment(e3) {
    e3.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e3, t2) {
    e3.preventDefault(), t2 && "file" in t2 ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e3) {
    const { viewModel: t2 } = this;
    t2.activeFileInfo = null, t2.activeAttachmentInfo = e3, t2.mode = "edit";
  }
  _startEditFile(e3) {
    const { viewModel: t2 } = this;
    t2.activeAttachmentInfo = null, t2.activeFileInfo = e3, t2.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e3) {
    e3.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e3) {
    const { orientationInfo: t2 } = e3;
    return !this._supportsImageOrientation && t2 ? [t2.rotation ? `rotate(${t2.rotation}deg)` : "", t2.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
e$8([y$6()], M$3.prototype, "capabilities", null), e$8([y$6()], M$3.prototype, "displayType", void 0), e$8([y$6({ readOnly: true })], M$3.prototype, "effectiveDisplayType", null), e$8([y$6()], M$3.prototype, "graphic", null), e$8([y$6()], M$3.prototype, "label", null), e$8([y$6(), e$9("esri/widgets/Attachments/t9n/Attachments")], M$3.prototype, "messages", void 0), e$8([y$6(), e$9("esri/core/t9n/Units")], M$3.prototype, "messagesUnits", void 0), e$8([y$6({ readOnly: true })], M$3.prototype, "selectedFile", void 0), e$8([y$6({ readOnly: true })], M$3.prototype, "submitting", void 0), e$8([y$6({ readOnly: true })], M$3.prototype, "error", void 0), e$8([y$6({ type: y$5 })], M$3.prototype, "viewModel", void 0), e$8([y$6()], M$3.prototype, "visibleElements", void 0), e$8([s$7("visibleElements")], M$3.prototype, "castVisibleElements", null), M$3 = e$8([c$c("esri.widgets.Attachments")], M$3);
const I$4 = M$3;
let s$5 = class s extends y$5 {
  constructor(t2) {
    super(t2), this.description = null, this.title = null;
  }
};
e$8([y$6()], s$5.prototype, "description", void 0), e$8([y$6()], s$5.prototype, "title", void 0), s$5 = e$8([c$c("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s$5);
const c$a = s$5;
const p$7 = "esri-feature-element-info", n$7 = { base: p$7, title: `${p$7}__title`, description: `${p$7}__description` };
let c$9 = class c extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return n$b("div", { class: n$7.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e3 } = this;
    return e3 ? n$b(e$b, { class: n$7.title, level: this.headingLevel }, e3) : null;
  }
  _renderDescription() {
    const { description: e3 } = this;
    return e3 ? n$b("div", { class: n$7.description, key: "description" }, e3) : null;
  }
};
e$8([y$6()], c$9.prototype, "description", void 0), e$8([y$6()], c$9.prototype, "headingLevel", void 0), e$8([y$6()], c$9.prototype, "title", void 0), c$9 = e$8([c$c("esri.widgets.Feature.support.FeatureElementInfo")], c$9);
const l$7 = c$9;
const d$4 = { base: "esri-feature-attachments" };
let h$4 = class h extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this.attachmentsWidget = new I$4(), this.headingLevel = 2, this.viewModel = new c$a();
  }
  initialize() {
    this._featureElementInfo = new l$7(), this.addHandles([d$5(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), P$1), d$5(() => this.viewModel, (e3) => this.attachmentsWidget.viewModel = e3, P$1)]);
  }
  destroy() {
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), this._featureElementInfo?.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e3) {
    this.viewModel.description = e3;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e3) {
    this.attachmentsWidget.displayType = e3;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e3) {
    this.viewModel.graphic = e3;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  render() {
    const { attachmentsWidget: e3 } = this;
    return n$b("div", { class: d$4.base }, this._featureElementInfo?.render(), e3?.render());
  }
  _setupFeatureElementInfo() {
    const { description: e3, title: t2, headingLevel: i2 } = this;
    this._featureElementInfo?.set({ description: e3, title: t2, headingLevel: i2 });
  }
};
e$8([y$6({ readOnly: true })], h$4.prototype, "attachmentsWidget", void 0), e$8([y$6()], h$4.prototype, "description", null), e$8([y$6()], h$4.prototype, "displayType", null), e$8([y$6()], h$4.prototype, "graphic", null), e$8([y$6()], h$4.prototype, "headingLevel", void 0), e$8([y$6()], h$4.prototype, "title", null), e$8([y$6({ type: c$a })], h$4.prototype, "viewModel", void 0), h$4 = e$8([c$c("esri.widgets.Feature.FeatureAttachments")], h$4);
const c$8 = h$4;
let c$7 = class c2 extends S$1 {
  constructor(t2) {
    super(t2), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(d$5(() => this.creator, (t3) => {
      this._destroyContent(), this._createContent(t3);
    }, P$1));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t2, graphic: e3, destroyer: r2 } = this;
    t2 && e3 && (x$3(r2, { graphic: e3 }).catch(() => null), this._set("created", null));
  }
  async _createContent(t2) {
    const e3 = this.graphic;
    if (!e3 || !t2)
      return;
    const r2 = x$3(t2, { graphic: e3 }).catch(() => null);
    this._loadingPromise = r2, this.notifyChange("state");
    const o2 = await r2;
    r2 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o2));
  }
};
e$8([y$6({ readOnly: true })], c$7.prototype, "created", void 0), e$8([y$6()], c$7.prototype, "creator", void 0), e$8([y$6()], c$7.prototype, "destroyer", void 0), e$8([y$6({ type: c$b })], c$7.prototype, "graphic", void 0), e$8([y$6({ readOnly: true })], c$7.prototype, "state", null), c$7 = e$8([c$c("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c$7);
const p$6 = c$7;
const n$6 = "esri-feature-content", c$6 = { base: n$6, loaderContainer: `${n$6}__loader-container`, loader: `${n$6}__loader` };
let l$6 = class l extends O$1 {
  constructor(e3, r2) {
    super(e3, r2), this.viewModel = null, this._addTargetToAnchors = (e4) => {
      Array.from(e4.querySelectorAll("a")).forEach((e5) => {
        C$3(e5.href) && !e5.hasAttribute("target") && e5.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    return this.viewModel?.creator;
  }
  set creator(e3) {
    this.viewModel && (this.viewModel.creator = e3);
  }
  get graphic() {
    return this.viewModel?.graphic;
  }
  set graphic(e3) {
    this.viewModel && (this.viewModel.graphic = e3);
  }
  render() {
    const e3 = this.viewModel?.state;
    return n$b("div", { class: c$6.base }, "loading" === e3 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return n$b("div", { class: c$6.loaderContainer, key: "loader" }, n$b("div", { class: c$6.loader }));
  }
  _renderCreated() {
    const e3 = this.viewModel?.created;
    return e3 ? e3 instanceof HTMLElement ? n$b("div", { afterCreate: this._attachToNode, bind: e3, key: e3 }) : e$c(e3) ? n$b("div", { key: e3 }, !e3.destroyed && e3.render()) : n$b("div", { afterCreate: this._addTargetToAnchors, innerHTML: e3, key: e3 }) : null;
  }
  _attachToNode(e3) {
    const r2 = this;
    e3.appendChild(r2);
  }
};
e$8([y$6()], l$6.prototype, "creator", null), e$8([y$6()], l$6.prototype, "graphic", null), e$8([y$6({ type: p$6 })], l$6.prototype, "viewModel", void 0), l$6 = e$8([c$c("esri.widgets.Feature.FeatureContent")], l$6);
const p$5 = l$6;
let l$5 = class l2 extends S$1 {
  constructor(o2) {
    super(o2), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o2, fieldInfos: e3 } = this, t2 = [];
    return e3?.forEach((e4) => {
      if (!(!e4.hasOwnProperty("visible") || e4.visible))
        return;
      const s4 = e4.clone();
      s4.label = q$1(s4, o2), t2.push(s4);
    }), t2;
  }
};
e$8([y$6()], l$5.prototype, "attributes", void 0), e$8([y$6({ type: [i$2] })], l$5.prototype, "expressionInfos", void 0), e$8([y$6()], l$5.prototype, "description", void 0), e$8([y$6({ type: [m$6] })], l$5.prototype, "fieldInfos", void 0), e$8([y$6({ readOnly: true })], l$5.prototype, "formattedFieldInfos", null), e$8([y$6()], l$5.prototype, "title", void 0), l$5 = e$8([c$c("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], l$5);
const n$5 = l$5;
const s$4 = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function a$1(a2, p4) {
  if ("string" != typeof p4 || !p4)
    return p4;
  const r2 = s$4.find((e3) => e3.pattern.test(p4));
  if (!r2)
    return p4;
  const t2 = p4.match(r2.pattern), n3 = t2 && t2[2], l4 = r$2(r$2(r2.label, { messages: a2, hierPart: n3 }), { appName: r2.appName }), i2 = r2.target ? ` target="${r2.target}"` : "", o2 = "_blank" === r2.target ? ' rel="noreferrer"' : "";
  return p4.replace(r2.pattern, `<a${i2} href="$1"${o2}>${l4}</a>`);
}
const u$3 = "esri-feature-fields", m$4 = { base: u$3, fieldHeader: `${u$3}__field-header`, fieldData: `${u$3}__field-data`, fieldDataDate: `${u$3}__field-data--date` };
let c$5 = class c3 extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this.viewModel = new n$5(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new l$7(), this.addHandles(d$5(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P$1));
  }
  destroy() {
    this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e3) {
    this.viewModel.attributes = e3;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e3) {
    this.viewModel.description = e3;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e3) {
    this.viewModel.expressionInfos = e3;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e3) {
    this.viewModel.fieldInfos = e3;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  render() {
    return n$b("div", { class: m$4.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e3, t2) {
    const { attributes: s4 } = this.viewModel, i2 = e3.fieldName, r2 = e3.label || i2, o2 = s4 ? null == s4[i2] ? "" : s4[i2] : "", l4 = !(!e3.format || !e3.format.dateFormat), n3 = "number" == typeof o2 && !l4 ? this._forceLTR(o2) : a$1(this.messagesURIUtils, o2), d2 = { [m$4.fieldDataDate]: l4 };
    return n$b("tr", { key: `fields-element-info-row-${i2}-${t2}` }, n$b("th", { class: m$4.fieldHeader, innerHTML: r2, key: `fields-element-info-row-header-${i2}-${t2}` }), n$b("td", { class: this.classes(m$4.fieldData, d2), innerHTML: n3, key: `fields-element-info-row-data-${i2}-${t2}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e3 } = this.viewModel;
    return e3?.length ? n$b("table", { class: e$a.table, summary: this.messages.fieldsSummary }, n$b("tbody", null, e3.map((e4, t2) => this._renderFieldInfo(e4, t2)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: e3, title: t2 } = this;
    this._featureElementInfo?.set({ description: e3, title: t2 });
  }
  _forceLTR(e3) {
    return `&lrm;${e3}`;
  }
};
e$8([y$6()], c$5.prototype, "attributes", null), e$8([y$6()], c$5.prototype, "description", null), e$8([y$6()], c$5.prototype, "expressionInfos", null), e$8([y$6()], c$5.prototype, "fieldInfos", null), e$8([y$6()], c$5.prototype, "title", null), e$8([y$6({ type: n$5, nonNullable: true })], c$5.prototype, "viewModel", void 0), e$8([y$6(), e$9("esri/widgets/Feature/t9n/Feature")], c$5.prototype, "messages", void 0), e$8([y$6(), e$9("esri/widgets/support/t9n/uriUtils")], c$5.prototype, "messagesURIUtils", void 0), c$5 = e$8([c$c("esri.widgets.Feature.FeatureFields")], c$5);
const h$3 = c$5;
async function w$5(e3, l4, t2) {
  r$5(e3, l4, () => []).push(...t2);
}
async function x$2(l4) {
  const t2 = /* @__PURE__ */ new Map();
  if (!l4)
    return t2;
  if ("visualVariables" in l4 && l4.visualVariables) {
    const e3 = l4.visualVariables.filter((e4) => "color" === e4.type);
    for (const l5 of e3) {
      const e4 = (await r$3(l5) ?? []).map((e5) => e5.color);
      await w$5(t2, l5.field || l5.valueExpression, e4);
    }
  }
  if ("heatmap" === l4.type) {
    const e3 = r$4(l4).map((e4) => e4.color);
    await w$5(t2, l4.field || l4.valueExpression, e3);
  } else if ("pie-chart" === l4.type) {
    for (const e3 of l4.attributes)
      await w$5(t2, e3.field || e3.valueExpression, [e3.color]);
    await w$5(t2, "default", [l4?.othersCategory?.color, h$5(l4.backgroundFillSymbol, null)]);
  } else if ("dot-density" === l4.type) {
    for (const e3 of l4.attributes)
      await w$5(t2, e3.field || e3.valueExpression, [e3.color]);
    await w$5(t2, "default", [l4.backgroundColor]);
  } else if ("unique-value" === l4.type)
    if ("predominance" === l4.authoringInfo?.type)
      for (const e3 of l4.uniqueValueInfos ?? [])
        await w$5(t2, e3.value.toString(), [h$5(e3.symbol, null)]);
    else {
      const e3 = (l4.uniqueValueInfos ?? []).map((e4) => h$5(e4.symbol, null)), { field: i2, field2: o2, field3: a2, valueExpression: n3 } = l4;
      (i2 || n3) && await w$5(t2, i2 || n3, e3), o2 && await w$5(t2, o2, e3), a2 && await w$5(t2, a2, e3);
    }
  else if ("class-breaks" === l4.type) {
    const e3 = l4.classBreakInfos.map((e4) => h$5(e4.symbol, null)), { field: i2, valueExpression: o2 } = l4;
    await w$5(t2, i2 ?? o2, e3);
  } else
    "simple" === l4.type && await w$5(t2, "default", [h$5(l4.symbol, null)]);
  return "defaultSymbol" in l4 && l4.defaultSymbol && await w$5(t2, "default", [h$5(l4.defaultSymbol, null)]), t2.forEach((l5, i2) => {
    const o2 = h$6(l5.filter(Boolean), (e3, l6) => JSON.stringify(e3) === JSON.stringify(l6));
    t2.set(i2, o2);
  }), t2;
}
const f$3 = "esri.widgets.Feature.support.relatedFeatureUtils", m$3 = () => s$9.getLogger(f$3), d$3 = /* @__PURE__ */ new Map();
function y$4(e3) {
  if (!de(e3))
    return null;
  const [t2, r2] = e3.split("/").slice(1);
  return { layerId: t2, fieldName: r2 };
}
function j$3(e3, t2) {
  if (!t2.relationships)
    return null;
  let r2 = null;
  const { relationships: o2 } = t2;
  return o2.some((t3) => t3.id === parseInt(e3, 10) && (r2 = t3, true)), r2;
}
function g$5({ originRelationship: e3, relationships: t2, layerId: r2 }) {
  return t2.find(({ relatedTableId: t3, id: o2 }) => `${t3}` === r2 && o2 === e3?.id) ?? null;
}
function h$2(e3, t2) {
  const r2 = t2.toLowerCase();
  for (const o2 in e3)
    if (o2.toLowerCase() === r2)
      return e3[o2];
  return null;
}
function F$4(e3, t2) {
  const r2 = j$3(e3, t2);
  if (!r2)
    return;
  return { url: `${t2.url}/${r2.relatedTableId}`, sourceSpatialReference: t2.spatialReference, relation: r2, relatedFields: [], outStatistics: [] };
}
function I$3(e3, t2) {
  if (!t2)
    return;
  if (!e3)
    return;
  const { features: r2, statsFeatures: o2 } = e3, i2 = r2?.value;
  t2.relatedFeatures = i2 ? i2.features : [];
  const s4 = o2?.value;
  t2.relatedStatsFeatures = s4 ? s4.features : [];
}
function S(e3, t2, r2, o2) {
  const i2 = new d$6();
  return i2.outFields = ["*"], i2.relationshipId = "number" == typeof t2.id ? t2.id : parseInt(t2.id, 10), i2.objectIds = [e3.attributes[r2.objectIdField]], r2.queryRelatedFeatures?.(i2, o2) ?? Promise.resolve({});
}
function w$4(e3, t2, r2) {
  let o2 = 0;
  const i2 = [];
  for (; o2 < t2.length; )
    i2.push(`${e3} IN (${t2.slice(o2, r2 + o2)})`), o2 += r2;
  return i2.join(" OR ");
}
function b$2(e3) {
  return e3 ? h$6(e3) : void 0;
}
function R$2(e3) {
  return e3 ? h$6(e3, (e4, t2) => JSON.stringify(e4.toJSON()) === JSON.stringify(t2.toJSON())) : void 0;
}
async function U$1(e3, t2, r2, o2) {
  const i2 = r2.layerId.toString(), { layerInfo: u3, relation: p4, relatedFields: c6, outStatistics: f2, url: m2, sourceSpatialReference: d2 } = t2, y2 = b$2(c6), j3 = R$2(f2);
  if (!u3 || !p4)
    return null;
  const F2 = g$5({ originRelationship: p4, relationships: u3.relationships, layerId: i2 });
  if (F2?.relationshipTableId && F2.keyFieldInRelationshipTable) {
    const t3 = (await S(e3, F2, r2, o2))[e3.attributes[r2.objectIdField]];
    if (!t3)
      return null;
    const i3 = t3.features.map((e4) => e4.attributes[u3.objectIdField]);
    if (j3?.length && u3.supportsStatistics) {
      const e4 = new b$3();
      e4.where = w$4(u3.objectIdField, i3, 1e3), e4.outFields = y2, e4.outStatistics = j3, e4.sourceSpatialReference = d2;
      const r3 = { features: Promise.resolve(t3), statsFeatures: s$a(m2, e4) };
      return v$6(r3);
    }
  }
  const I2 = F2?.keyField;
  if (I2) {
    const t3 = pe(v$3(u3.fields, I2)), r3 = h$2(e3.attributes, p4.keyField), i3 = t3 ? `${I2}=${r3}` : `${I2}='${r3}'`, c7 = s$a(m2, new b$3({ where: i3, outFields: y2, sourceSpatialReference: d2 }), o2), f3 = !!j3?.length && u3.supportsStatistics ? s$a(m2, new b$3({ where: i3, outFields: y2, outStatistics: j3, sourceSpatialReference: d2 }), o2) : null, g3 = { features: c7 };
    return f3 && (g3.statsFeatures = f3), v$6(g3);
  }
  return null;
}
function $(t2, r2) {
  return U$2(t2, { query: { f: "json" }, signal: r2?.signal });
}
function N({ relatedInfos: e3, layer: t2 }, o2) {
  const n3 = {};
  return e3.forEach((e4, o3) => {
    const { relation: i2 } = e4;
    if (!i2) {
      const e5 = new s$8("relation-required", "A relation is required on a layer to retrieve related records.");
      throw m$3().error(e5), e5;
    }
    const { relatedTableId: s4 } = i2;
    if ("number" != typeof s4) {
      const e5 = new s$8("A related table ID is required on a layer to retrieve related records.");
      throw m$3().error(e5), e5;
    }
    const l4 = `${t2.url}/${s4}`, a2 = d$3.get(l4), u3 = a2 ?? $(l4);
    a2 || d$3.set(l4, u3), n3[o3] = u3;
  }), h$7(v$6(n3), o2);
}
function T$2({ graphic: e3, relatedInfos: t2, layer: r2 }, o2) {
  const i2 = {};
  return t2.forEach((t3, s4) => {
    t3.layerInfo && (i2[s4] = U$1(e3, t3, r2, o2));
  }), v$6(i2);
}
function q({ relatedInfo: e3, fieldName: t2, fieldInfo: r2 }) {
  if (e3.relatedFields?.push(t2), r2.statisticType) {
    const o2 = new m$7({ statisticType: r2.statisticType, onStatisticField: t2, outStatisticFieldName: t2 });
    e3.outStatistics?.push(o2);
  }
}
function v$3(e3, t2) {
  if (null != e3) {
    t2 = t2.toLowerCase();
    for (const r2 of e3)
      if (r2 && r2.name.toLowerCase() === t2)
        return r2;
  }
  return null;
}
const I$2 = { chartAnimation: true };
let v$2 = class v extends S$1 {
  constructor(t2) {
    super(t2), this.abilities = { ...I$2 }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = false, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t2) {
    return { ...I$2, ...t2 };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t2) {
    this._setContentElementMedia(t2);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t2) {
    const { formattedMediaInfoCount: e3 } = this, o2 = (t2 + e3) % e3;
    this.activeMediaInfoIndex = o2;
  }
  _pageContentElementMedia(t2) {
    const { activeMediaInfoIndex: e3 } = this, o2 = e3 + t2;
    this._setContentElementMedia(o2);
  }
  _formatMediaInfos() {
    const { mediaInfos: t2, layer: e3 } = this, i2 = this.attributes ?? {}, r2 = this.formattedAttributes ?? {}, a2 = this.expressionAttributes ?? {}, s4 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t2?.map((t3) => {
      const o2 = t3?.clone();
      if (!o2)
        return null;
      if (o2.title = D({ attributes: i2, fieldInfoMap: s4, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o2.title }), o2.caption = D({ attributes: i2, fieldInfoMap: s4, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o2.caption }), o2.altText = D({ attributes: i2, fieldInfoMap: s4, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o2.altText }), "image" === o2.type) {
        const { value: t4 } = o2;
        return this._setImageValue({ value: t4, formattedAttributes: r2, layer: e3 }), o2.value.sourceURL ? o2 : void 0;
      }
      if ("pie-chart" === o2.type || "line-chart" === o2.type || "column-chart" === o2.type || "bar-chart" === o2.type) {
        const { value: t4 } = o2;
        return this._setChartValue({ value: t4, chartType: o2.type, attributes: i2, formattedAttributes: r2, layer: e3, expressionAttributes: a2 }), o2;
      }
      return null;
    }).filter(q$2) ?? [];
  }
  _setImageValue(t2) {
    const e3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: o2, formattedAttributes: i2, layer: r2 } = t2, { linkURL: a2, sourceURL: s4 } = o2;
    if (s4) {
      const t3 = P(s4, r2);
      o2.sourceURL = z$2({ formattedAttributes: i2, template: t3, fieldInfoMap: e3 });
    }
    if (a2) {
      const t3 = P(a2, r2);
      o2.linkURL = z$2({ formattedAttributes: i2, template: t3, fieldInfoMap: e3 });
    }
  }
  _setChartValue(t2) {
    const { value: e3, attributes: o2, formattedAttributes: i2, chartType: r2, layer: a2, expressionAttributes: s4 } = t2, { popupTemplate: l4, relatedInfos: n3 } = this, { fields: p4, normalizeField: d2 } = e3, m2 = a2;
    e3.fields = R$3(p4, m2), d2 && (e3.normalizeField = v$7(d2, m2));
    if (!p4.some((t3) => !!(null != i2[t3] || de(t3) && n3?.size)))
      return;
    const h4 = l4?.fieldInfos ?? [];
    p4.forEach((t3, a3) => {
      const l5 = e3.colors?.[a3];
      if (de(t3))
        return void (e3.series = [...e3.series, ...this._getRelatedChartInfos({ fieldInfos: h4, fieldName: t3, formattedAttributes: i2, chartType: r2, value: e3, color: l5 })]);
      const n4 = this._getChartOption({ value: e3, attributes: o2, chartType: r2, formattedAttributes: i2, expressionAttributes: s4, fieldName: t3, fieldInfos: h4, color: l5 });
      e3.series.push(n4);
    });
  }
  _getRelatedChartInfos(t2) {
    const { fieldInfos: e3, fieldName: o2, formattedAttributes: i2, chartType: r2, value: a2, color: s4 } = t2, l4 = [], n3 = y$4(o2), p4 = n3 && this.relatedInfos?.get(n3.layerId.toString());
    if (!p4)
      return l4;
    const { relatedFeatures: d2, relation: u3 } = p4;
    if (!u3 || !d2)
      return l4;
    const { cardinality: f2 } = u3;
    d2.forEach((t3) => {
      const { attributes: p5 } = t3;
      p5 && Object.keys(p5).forEach((t4) => {
        t4 === n3.fieldName && l4.push(this._getChartOption({ value: a2, attributes: p5, formattedAttributes: i2, fieldName: o2, chartType: r2, relatedFieldName: t4, hasMultipleRelatedFeatures: d2?.length > 1, fieldInfos: e3, color: s4 }));
      });
    });
    return "one-to-many" === f2 || "many-to-many" === f2 ? l4 : [l4[0]];
  }
  _getTooltip({ label: t2, value: e3, chartType: o2 }) {
    return "pie-chart" === o2 ? `${t2}` : `${t2}: ${e3}`;
  }
  _getChartOption(t2) {
    const { value: e3, attributes: o2, formattedAttributes: i2, expressionAttributes: r2, fieldName: a2, relatedFieldName: n3, fieldInfos: p4, chartType: d2, hasMultipleRelatedFeatures: u3, color: I2 } = t2, v3 = this.layer, M3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: A2, tooltipField: g3 } = e3, x2 = A2 ? de(A2) ? o2[y$4(A2).fieldName] : o2[A2] : null, _2 = M$4(a2) && r2 && void 0 !== r2[a2] ? r2[a2] : n3 && void 0 !== o2[n3] ? o2[n3] : void 0 !== o2[a2] ? o2[a2] : i2[a2], C2 = new i$3({ fieldName: a2, color: I2, value: void 0 === _2 ? null : _2 && x2 ? _2 / x2 : _2 });
    if (de(a2)) {
      const t3 = M3.get(a2.toLowerCase()), e4 = g3 && M3.get(g3.toLowerCase()), r3 = t3?.fieldName ?? a2, s4 = u3 && g3 ? y$4(g3).fieldName : e4?.fieldName ?? g3, l4 = u3 && s4 ? o2[s4] : i2[s4] ?? t3?.label ?? t3?.fieldName ?? n3, p5 = u3 && n3 ? o2[n3] : i2[r3];
      return C2.tooltip = this._getTooltip({ label: l4, value: p5, chartType: d2 }), C2;
    }
    const T3 = Y$1(p4, a2), N2 = v$7(a2, v3), F2 = g3 && void 0 !== i2[g3] ? i2[g3] : q$1(T3 || new m$6({ fieldName: N2 }), this.popupTemplate?.expressionInfos), j3 = i2[N2];
    return C2.tooltip = this._getTooltip({ label: F2, value: j3, chartType: d2 }), C2;
  }
};
e$8([y$6()], v$2.prototype, "abilities", void 0), e$8([s$7("abilities")], v$2.prototype, "castAbilities", null), e$8([y$6()], v$2.prototype, "activeMediaInfoIndex", void 0), e$8([y$6({ readOnly: true })], v$2.prototype, "activeMediaInfo", null), e$8([y$6()], v$2.prototype, "attributes", void 0), e$8([y$6()], v$2.prototype, "description", void 0), e$8([y$6()], v$2.prototype, "fieldInfoMap", void 0), e$8([y$6()], v$2.prototype, "formattedAttributes", void 0), e$8([y$6()], v$2.prototype, "expressionAttributes", void 0), e$8([y$6({ readOnly: true })], v$2.prototype, "formattedMediaInfos", null), e$8([y$6()], v$2.prototype, "isAggregate", void 0), e$8([y$6()], v$2.prototype, "layer", void 0), e$8([y$6({ readOnly: true })], v$2.prototype, "formattedMediaInfoCount", null), e$8([y$6()], v$2.prototype, "mediaInfos", void 0), e$8([y$6()], v$2.prototype, "popupTemplate", void 0), e$8([y$6()], v$2.prototype, "relatedInfos", void 0), e$8([y$6()], v$2.prototype, "title", void 0), v$2 = e$8([c$c("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v$2);
const M$2 = v$2;
const g$4 = "esri-feature-media", v$1 = { base: g$4, mediaContainer: `${g$4}__container`, mediaItemContainer: `${g$4}__item-container`, mediaItem: `${g$4}__item`, mediaItemText: `${g$4}__item-text`, mediaItemTitle: `${g$4}__item-title`, mediaItemCaption: `${g$4}__item-caption`, mediaNavigation: `${g$4}__item-navigation`, mediaPagination: `${g$4}__pagination`, mediaPaginationText: `${g$4}__pagination-text`, mediaPrevious: `${g$4}__previous`, mediaPreviousIconLTR: `${g$4}__previous-icon`, mediaPreviousIconRTL: `${g$4}__previous-icon--rtl`, mediaNext: `${g$4}__next`, mediaNextIconLTR: `${g$4}__next-icon`, mediaNextIconRTL: `${g$4}__next-icon--rtl`, mediaChart: `${g$4}__chart`, mediaPaginationButton: `${g$4}__pagination-button`, mediaPaginationIcon: `${g$4}__pagination-icon`, mediaChartRendered: `${g$4}__chart--rendered` }, M$1 = 15, w$3 = "category", I$1 = "value", A = "rgba(50, 50, 50, 1)", C$2 = 250, y$3 = 500, x$1 = 200;
let T$1 = class T extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new M$2(), this.messages = null, this._disposeChart = (e4) => {
      this._chartRootMap.get(e4)?.dispose(), this._chartRootMap.delete(e4);
    }, this._createChart = async (e4) => {
      const { destroyed: t3, viewModel: i2 } = this;
      if (t3 || !i2 || !e4)
        return;
      const { createRoot: r2 } = await import("./chunk-aSIysuY9.js"), a2 = await r2(e4);
      this._chartRootMap.set(e4, a2), this._renderChart({ mediaInfo: i2.activeMediaInfo, root: a2 });
    };
  }
  initialize() {
    this._featureElementInfo = new l$7(), this.addHandles([d$5(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), P$1), d$5(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P$1)]);
  }
  loadDependencies() {
    return r$1({ icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js") });
  }
  destroy() {
    this._clearMediaRefreshTimer(), this._featureElementInfo?.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e3) {
    this.viewModel.attributes = e3;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e3) {
    this.viewModel.activeMediaInfoIndex = e3;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e3) {
    this.viewModel.description = e3;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e3) {
    this.viewModel.fieldInfoMap = e3;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e3) {
    this.viewModel.layer = e3;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e3) {
    this.viewModel.mediaInfos = e3;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e3) {
    this.viewModel.popupTemplate = e3;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e3) {
    this.viewModel.relatedInfos = e3;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  render() {
    return n$b("div", { bind: this, class: v$1.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e3, activeMediaInfoIndex: t2 } = this.viewModel, i2 = this._renderMediaText();
    return e3 ? n$b("div", { class: v$1.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), n$b("div", { class: v$1.mediaNavigation }, i2, e3 > 1 ? n$b("div", { class: v$1.mediaPagination }, this._renderMediaPageButton("previous"), n$b("span", { class: v$1.mediaPaginationText }, s$6(this.messages.pageText, { index: t2 + 1, total: e3 })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e3 } = this.viewModel;
    if (!e3)
      return null;
    const t2 = e3 && e3.title ? n$b("div", { class: v$1.mediaItemTitle, innerHTML: e3.title, key: "media-title" }) : null, i2 = e3 && e3.caption ? n$b("div", { class: v$1.mediaItemCaption, innerHTML: e3.caption, key: "media-caption" }) : null;
    return t2 || i2 ? n$b("div", { class: v$1.mediaItemText, key: "media-text" }, t2, i2) : null;
  }
  _renderImageMediaInfo(e3) {
    const { _refreshIntervalInfo: t2 } = this, { activeMediaInfoIndex: i2, formattedMediaInfoCount: r2 } = this.viewModel, { value: a2, refreshInterval: s4, altText: o2, title: n3, type: l4 } = e3, { sourceURL: d2, linkURL: c6 } = a2, h4 = C$3(c6 ?? void 0) ? "_blank" : "_self", p4 = "_blank" === h4 ? "noreferrer" : "", f2 = s4 ? t2 : null, _2 = f2 ? f2.timestamp : 0, g3 = f2 ? f2.sourceURL : d2, v3 = n$b("img", { alt: o2 || n3, key: `media-${l4}-${i2}-${r2}-${_2}`, src: g3 ?? void 0 });
    return (c6 ? n$b("a", { href: c6, rel: p4, target: h4, title: n3 }, v3) : null) ?? v3;
  }
  _renderChartMediaInfo(e3) {
    const { activeMediaInfoIndex: t2, formattedMediaInfoCount: i2 } = this.viewModel;
    return n$b("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: v$1.mediaChart, key: `media-${e3.type}-${t2}-${i2}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e3 } = this.viewModel;
    return e3 ? "image" === e3.type ? this._renderImageMediaInfo(e3) : e3.type.includes("chart") ? this._renderChartMediaInfo(e3) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e3 } = this.viewModel;
    return e3 ? n$b("div", { class: v$1.mediaItemContainer, key: "media-container" }, n$b("div", { class: v$1.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e3) {
    if (this.viewModel.formattedMediaInfoCount < 2)
      return null;
    const t2 = "previous" === e3, i2 = t2 ? this.messages.previous : this.messages.next, r2 = t2 ? "chevron-left" : "chevron-right", a2 = t2 ? "media-previous" : "media-next", s4 = t2 ? this._previous : this._next;
    return n$b("button", { "aria-label": i2, bind: this, class: v$1.mediaPaginationButton, key: a2, onclick: s4, tabIndex: 0, title: i2, type: "button" }, n$b("calcite-icon", { class: v$1.mediaPaginationIcon, icon: r2, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    const { description: e3, title: t2 } = this;
    this._featureElementInfo?.set({ description: e3, title: t2 });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel)
      return;
    const { isAggregate: e3, layer: t2 } = this.viewModel;
    return e3 && t2?.featureReduction && "renderer" in t2.featureReduction ? t2.featureReduction.renderer : t2?.renderer;
  }
  async _getSeriesColors(e3) {
    const { colorAm5: t2 } = await import("./chunk-6NqvPRcT.js"), i2 = /* @__PURE__ */ new Map();
    return e3.forEach((e4) => {
      e4.color && i2.set(e4, t2(e4.color.toCss(true)));
    }), i2;
  }
  async _getRendererColors() {
    const { colorAm5: e3 } = await import("./chunk-6NqvPRcT.js"), t2 = /* @__PURE__ */ new Map(), i2 = this._getRenderer(), r2 = "default";
    if (!i2)
      return t2;
    const a2 = await x$2(i2);
    a2.delete(r2);
    return Array.from(a2.values()).every((e4) => 1 === e4?.length) ? (Array.from(a2.keys()).forEach((i3) => {
      const r3 = a2.get(i3)?.[0]?.toCss(true);
      r3 && t2.set(i3, e3(r3));
    }), t2) : t2;
  }
  _handleMediaKeyup(e3) {
    const { key: t2 } = e3;
    "ArrowLeft" === t2 && (e3.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t2 && (e3.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && (!!this.viewModel.abilities.chartAnimation && !e$d());
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C$2 : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? y$3 : 0;
  }
  async _renderChart(e3) {
    const { root: t2, mediaInfo: i2 } = e3, { value: r2, type: a2 } = i2, { ResponsiveThemeAm5: s4, DarkThemeAm5: o2, AnimatedThemeAm5: n3, ColorSetAm5: l4, ThemeAm5: d2, esriChartColorSet: m2 } = await import("./chunk-6NqvPRcT.js"), c6 = d2.new(t2);
    c6.rule("ColorSet").set("colors", m2), c6.rule("ColorSet").set("reuse", true);
    const h4 = [s4.new(t2), c6];
    r$6() && h4.push(o2.new(t2)), this._canAnimateChart() && h4.push(n3.new(t2)), t2.setThemes(h4);
    const p4 = await this._getRendererColors(), u3 = await this._getSeriesColors(r2.series), _2 = l4.new(t2, {}), g3 = u3.get(r2.series[0]), v3 = g3 ? { lineSettings: { stroke: g3 } } : void 0, M3 = r2.series.map((e4, t3) => {
      const i3 = u3.get(e4) || p4.get(e4.fieldName) || _2.getIndex(t3);
      return { [w$3]: e4.tooltip, [I$1]: e4.value, columnSettings: { fill: i3, stroke: i3 }, ...v3 };
    }).filter((e4) => "pie-chart" !== a2 || null != e4.value && e4.value > 0);
    "pie-chart" === a2 ? this._createPieChart(e3, M3) : this._createXYChart(e3, M3);
  }
  _getDirection() {
    return v$5(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!v$5(this.container);
  }
  async _customizeChartTooltip(e3, t2 = "horizontal") {
    const { colorAm5: i2 } = await import("./chunk-6NqvPRcT.js");
    e3.setAll({ pointerOrientation: t2 }), e3.get("background")?.setAll({ stroke: i2(A) }), e3.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: x$1 });
  }
  async _createPieChart(e3, t2) {
    const { TooltipAm5: i2 } = await import("./chunk-6NqvPRcT.js"), { PieChartAm5: r2, PieSeriesAm5: a2 } = await import("./chunk-j36yJOuO.js"), { mediaInfo: s4, root: o2 } = e3, { title: n3 } = s4, l4 = 5, d2 = s4?.altText || s4?.title || "", m2 = o2.container.children.push(r2.new(o2, { ariaLabel: d2, focusable: true, paddingBottom: l4, paddingTop: l4, paddingLeft: l4, paddingRight: l4 })), c6 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", h4 = i2.new(o2, { labelText: c6 }), p4 = m2.series.push(a2.new(o2, { name: n3, valueField: I$1, categoryField: w$3, tooltip: h4 }));
    p4.ticks.template.set("forceHidden", true), p4.labels.template.set("forceHidden", true), p4.slices.template.states.create("active", { shiftRadius: l4 }), this._customizeChartTooltip(h4), p4.slices.template.setAll({ ariaLabel: c6, focusable: true, templateField: "columnSettings" }), p4.data.setAll(t2), p4.appear(this._getChartSeriesAnimationMS()), m2.appear(this._getChartAnimationMS()), m2.root.dom.classList.toggle(v$1.mediaChartRendered, true);
  }
  _getMinSeriesValue(e3) {
    let t2 = 0;
    return e3.forEach((e4) => t2 = Math.min(e4.value, t2)), t2;
  }
  async _createColumnChart(e3, t2, i2) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-6NqvPRcT.js"), { CategoryAxisAm5: s4, AxisRendererXAm5: o2, ValueAxisAm5: n3, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./chunk-YW5u3O7E.js"), { mediaInfo: m2, root: c6 } = t2, { value: h4, title: p4 } = m2;
    e3.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u3 = e3.xAxes.push(s4.new(c6, { renderer: o2.new(c6, { inversed: this._isInversed() }), categoryField: w$3 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.yAxes.push(n3.new(c6, { renderer: l4.new(c6, { inside: false }), min: this._getMinSeriesValue(h4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryX}", g3 = r2.new(c6, { labelText: _2 }), v3 = e3.series.push(d2.new(c6, { name: p4, xAxis: u3, yAxis: f2, valueYField: I$1, categoryXField: w$3, tooltip: g3 }));
    this._customizeChartTooltip(g3), v3.columns.template.setAll({ ariaLabel: _2, focusable: true, templateField: "columnSettings" }), h4.series.length > M$1 && e3.set("scrollbarX", a2.new(c6, { orientation: "horizontal" })), u3.data.setAll(i2), v3.data.setAll(i2), v3.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e3, t2, i2) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-6NqvPRcT.js"), { CategoryAxisAm5: s4, AxisRendererXAm5: o2, ValueAxisAm5: n3, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./chunk-YW5u3O7E.js"), { mediaInfo: m2, root: c6 } = t2, { value: h4, title: p4 } = m2;
    e3.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const u3 = e3.yAxes.push(s4.new(c6, { renderer: l4.new(c6, { inversed: true }), categoryField: w$3 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.xAxes.push(n3.new(c6, { renderer: o2.new(c6, { inside: false, inversed: this._isInversed() }), min: this._getMinSeriesValue(h4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryY}", g3 = r2.new(c6, { labelText: _2 }), v3 = e3.series.push(d2.new(c6, { name: p4, xAxis: f2, yAxis: u3, valueXField: I$1, categoryYField: w$3, tooltip: g3 }));
    this._customizeChartTooltip(g3, "vertical"), v3.columns.template.setAll({ ariaLabel: _2, focusable: true, templateField: "columnSettings" }), h4.series.length > M$1 && e3.set("scrollbarY", a2.new(c6, { orientation: "vertical" })), u3.data.setAll(i2), v3.data.setAll(i2), v3.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e3, t2, i2) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-6NqvPRcT.js"), { CategoryAxisAm5: s4, AxisRendererXAm5: o2, ValueAxisAm5: n3, AxisRendererYAm5: l4, LineSeriesAm5: d2 } = await import("./chunk-YW5u3O7E.js"), { root: m2, mediaInfo: c6 } = t2, { value: h4, title: p4 } = c6;
    e3.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u3 = e3.xAxes.push(s4.new(m2, { renderer: o2.new(m2, { inversed: this._isInversed() }), categoryField: w$3 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.yAxes.push(n3.new(m2, { renderer: l4.new(m2, { inside: false }), min: this._getMinSeriesValue(h4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryX}", g3 = i2[0]?.lineSettings?.stroke, v3 = r2.new(m2, { getFillFromSprite: !g3, labelText: _2 });
    g3 && v3.get("background")?.setAll({ fill: g3 });
    const A2 = e3.series.push(d2.new(m2, { name: p4, xAxis: u3, yAxis: f2, valueYField: I$1, categoryXField: w$3, tooltip: v3 }));
    A2.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(v3, "vertical"), h4.series.length > M$1 && e3.set("scrollbarX", a2.new(m2, { orientation: "horizontal" })), u3.data.setAll(i2), A2.data.setAll(i2), A2.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e3, t2) {
    const { XYChartAm5: i2, XYCursorAm5: r2 } = await import("./chunk-YW5u3O7E.js"), { root: a2, mediaInfo: s4 } = e3, { type: o2 } = s4, n3 = s4?.altText || s4?.title || "", l4 = a2.container.children.push(i2.new(a2, { ariaLabel: n3, focusable: true, panX: true, panY: true }));
    l4.set("cursor", r2.new(a2, {})), "column-chart" === o2 && await this._createColumnChart(l4, e3, t2), "bar-chart" === o2 && await this._createBarChart(l4, e3, t2), "line-chart" === o2 && await this._createLineChart(l4, e3, t2), l4.root.dom.classList.toggle(v$1.mediaChartRendered, true);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e3 } = this;
    e3 && (clearTimeout(e3), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e3) {
    const t2 = Date.now();
    this._refreshIntervalInfo = { timestamp: t2, sourceURL: e3 && this._getImageSource(e3, t2) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e3 } = this.viewModel;
    e3 && "image" === e3.type && e3.refreshInterval && this._setRefreshTimeout(e3);
  }
  _setRefreshTimeout(e3) {
    const { refreshInterval: t2, value: i2 } = e3;
    if (!t2)
      return;
    const r2 = 6e4 * t2;
    this._updateMediaInfoTimestamp(i2.sourceURL);
    const a2 = setInterval(() => {
      this._updateMediaInfoTimestamp(i2.sourceURL);
    }, r2);
    this._refreshTimer = a2;
  }
  _getImageSource(e3, t2) {
    const i2 = e3.includes("?") ? "&" : "?", [r2, a2 = ""] = e3.split("#");
    return `${r2}${i2}timestamp=${t2}${a2 ? "#" : ""}${a2}`;
  }
};
e$8([y$6()], T$1.prototype, "_refreshIntervalInfo", void 0), e$8([y$6()], T$1.prototype, "attributes", null), e$8([y$6()], T$1.prototype, "activeMediaInfoIndex", null), e$8([y$6()], T$1.prototype, "description", null), e$8([y$6()], T$1.prototype, "fieldInfoMap", null), e$8([y$6()], T$1.prototype, "layer", null), e$8([y$6()], T$1.prototype, "mediaInfos", null), e$8([y$6()], T$1.prototype, "popupTemplate", null), e$8([y$6()], T$1.prototype, "relatedInfos", null), e$8([y$6()], T$1.prototype, "title", null), e$8([y$6({ type: M$2 })], T$1.prototype, "viewModel", void 0), e$8([y$6(), e$9("esri/widgets/Feature/t9n/Feature")], T$1.prototype, "messages", void 0), T$1 = e$8([c$c("esri.widgets.Feature.FeatureMedia")], T$1);
const b$1 = T$1;
const n$4 = "esri.widgets.Feature.support.arcadeFeatureUtils", s$3 = () => s$9.getLogger(n$4);
function p$4(e3) {
  return "string" == typeof e3 ? ae(oe(e3)) : Array.isArray(e3) ? c$4(e3) : "esri.arcade.Dictionary" === e3?.declaredClass ? u$2(e3) : e3;
}
function c$4(e3) {
  return `<ul class="esri-widget__list">${e3.map((e4) => `<li>${"string" == typeof e4 ? ae(oe(e4)) : e4}</li>`).join("")}</ul>`;
}
function u$2(e3) {
  const r2 = e3.keys().map((r3) => {
    const t2 = e3.field(r3);
    return `<tr><th>${r3}</th><td>${"string" == typeof t2 ? ae(oe(t2)) : t2}</td></tr>`;
  }).join("");
  return `<table class="${e$a.table}">${r2}</table>`;
}
function l$4() {
  return import("./chunk-wtPMG2yR.js");
}
function d$2(e3) {
  return "createQuery" in e3 && "queryFeatures" in e3;
}
async function f$2({ graphic: e3, view: r2, options: t2 }) {
  const { isAggregate: a2, layer: o2 } = e3;
  if (!a2 || !o2 || "2d" !== r2?.type)
    return [];
  const i2 = await r2.whenLayerView(o2);
  if (!d$2(i2))
    return [];
  const n3 = i2.createQuery(), s4 = e3.getObjectId();
  n3.aggregateIds = null != s4 ? [s4] : [];
  const { features: p4 } = await i2.queryFeatures(n3, t2);
  return p4;
}
function y$2({ layer: e3, aggregatedFeatures: r2, interceptor: a2 }) {
  const { fields: o2, objectIdField: i2, geometryType: n3, spatialReference: s4, displayField: p4 } = e3;
  return new We({ fields: o2, objectIdField: i2, geometryType: n3, spatialReference: s4, displayField: p4, interceptor: a2, ..."feature" === e3.type ? { templates: e3.templates, typeIdField: e3.typeIdField, types: e3.types } : null, source: r2 });
}
async function g$3({ expressionInfo: e3, arcade: r2, interceptor: t2, spatialReference: a2, map: o2, graphic: i2, location: n3, view: p4, options: c6 }) {
  if (!e3?.expression)
    return null;
  const { isAggregate: u3 } = i2, l4 = (i2.sourceLayer || i2.layer) ?? void 0, d2 = u3 ? "feature-reduction-popup" : "popup", g3 = r2.createArcadeProfile(d2), m2 = r2.createArcadeExecutor(e3.expression, g3).catch((r3) => s$3().error("arcade-executor-error", { error: r3, expressionInfo: e3 })), [w2, h4] = await Promise.all([f$2({ graphic: i2, view: p4, options: c6 }), m2]);
  if (!h4)
    return null;
  const F2 = "feature-reduction-popup" === d2 ? y$2({ layer: l4, aggregatedFeatures: w2, interceptor: t2 }) : void 0, $2 = { ..."feature-reduction-popup" === d2 ? { $aggregatedFeatures: F2 } : { $datastore: l4?.url, $layer: "feature" === l4?.type || "subtype-sublayer" === l4?.type ? l4 : "scene" === l4?.type && null != l4.associatedLayer ? l4.associatedLayer : void 0, $map: o2, $userInput: n3, $graph: "knowledge-graph-sublayer" === l4?.type ? l4?.parentCompositeLayer?.knowledgeGraph : void 0 }, $feature: i2 }, v3 = { abortSignal: c6?.signal ?? void 0, interceptor: t2 ?? void 0, rawOutput: true, spatialReference: a2 ?? void 0, timeZone: p4?.timeZone };
  return await h4.executeAsync($2, v3).catch((r3) => s$3().error("arcade-execution-error", { error: r3, graphic: i2, expressionInfo: e3 })).finally(() => F2?.destroy());
}
async function m$2({ expressionInfos: e3, spatialReference: t2, graphic: a2, interceptor: o2, map: i2, view: n3, location: s4, options: c6 }) {
  if (!e3?.length)
    return {};
  const u3 = await l$4(), d2 = {};
  for (const r2 of e3)
    d2[`expression/${r2.name}`] = g$3({ expressionInfo: r2, arcade: u3, interceptor: o2, spatialReference: t2, map: i2, graphic: a2, location: s4, view: n3, options: c6 });
  const f2 = await v$6(d2), y2 = {};
  for (const r2 in f2)
    y2[r2] = p$4(f2[r2].value);
  return y2;
}
const w$2 = 1;
let j$2 = class j extends S$1 {
  constructor(t2) {
    super(t2), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: t3 } = this;
      t3 && t3.abort(), this._abortController = null;
    }, this._createVM = () => {
      const t3 = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const e3 = "fields" === t3 ? new n$5() : "media" === t3 ? new M$2() : "text" === t3 ? new p$6() : null;
      this._set("contentElementViewModel", e3);
    }, this._compile = async () => {
      this._cancelQuery();
      const t3 = new AbortController();
      this._abortController = t3, await this._compileExpression(), this._abortController === t3 && (this._abortController = null);
    }, this._compileThrottled = e$7(this._compile, w$2, this), this._compileExpression = async () => {
      const { expressionInfo: t3, graphic: e3, interceptor: o2, spatialReference: r2, map: n3, location: i2, view: s4, _abortController: l4 } = this;
      if (!t3 || !e3)
        return void this._set("contentElement", null);
      const m2 = await l$4();
      if (l4 !== this._abortController)
        return;
      const h4 = await g$3({ arcade: m2, expressionInfo: t3, graphic: e3, location: i2, interceptor: o2, map: n3, spatialReference: r2, view: s4 });
      if (!h4 || "esri.arcade.Dictionary" !== h4.declaredClass)
        return void this._set("contentElement", null);
      const d2 = await h4.castAsJsonAsync(l4?.signal), u3 = d2?.type, _2 = "media" === u3 ? I$5.fromJSON(d2) : "text" === u3 ? c$e.fromJSON(d2) : "fields" === u3 ? c$f.fromJSON(d2) : null;
      this._set("contentElement", _2);
    }, this.addHandles([d$5(() => [this.expressionInfo, this.graphic, this.map, this.spatialReference, this.view], () => this._compileThrottled(), P$1), d$5(() => [this.contentElement], () => this._createVM(), P$1)]);
  }
  initialize() {
    this.addHandles(this._compileThrottled);
  }
  destroy() {
    this._cancelQuery(), this.contentElementViewModel?.destroy(), this._set("contentElementViewModel", null), this._set("contentElement", null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(t2) {
    this._override("spatialReference", t2);
  }
  get state() {
    const { _abortController: t2, contentElement: e3, contentElementViewModel: o2 } = this;
    return t2 ? "loading" : e3 || o2 ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(t2) {
    this._override("map", t2);
  }
};
e$8([y$6()], j$2.prototype, "_abortController", void 0), e$8([y$6({ type: i$4 })], j$2.prototype, "expressionInfo", void 0), e$8([y$6({ type: c$b })], j$2.prototype, "graphic", void 0), e$8([y$6({ readOnly: true })], j$2.prototype, "contentElement", void 0), e$8([y$6({ readOnly: true })], j$2.prototype, "contentElementViewModel", void 0), e$8([y$6()], j$2.prototype, "interceptor", void 0), e$8([y$6({ type: x$4 })], j$2.prototype, "location", void 0), e$8([y$6()], j$2.prototype, "spatialReference", null), e$8([y$6({ readOnly: true })], j$2.prototype, "state", null), e$8([y$6()], j$2.prototype, "map", null), e$8([y$6()], j$2.prototype, "view", void 0), j$2 = e$8([c$c("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], j$2);
const C$1 = j$2;
const u$1 = "esri-feature", g$2 = { base: `${u$1}-expression`, loadingSpinnerContainer: `${u$1}__loading-container`, spinner: `${u$1}__loading-spinner` };
let h$1 = class h2 extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._contentWidget = null, this.viewModel = new C$1();
  }
  initialize() {
    this.addHandles(d$5(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), P$1));
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: e3 } = this.viewModel;
    return n$b("div", { class: g$2.base }, "loading" === e3 ? this._renderLoading() : "disabled" === e3 ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return n$b("div", { class: g$2.loadingSpinnerContainer, key: "loading-container" }, n$b("span", { class: this.classes(i$1.loadingIndicator, e$a.rotating, g$2.spinner) }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e3 } = this;
    e3 && (e3.viewModel = null, e3.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e3, contentElement: t2 } = this.viewModel, o2 = t2?.type;
    this._destroyContentWidget();
    const s4 = e3 ? "fields" === o2 ? new h$3({ viewModel: e3 }) : "media" === o2 ? new b$1({ viewModel: e3 }) : "text" === o2 ? new p$5({ viewModel: e3 }) : null : null;
    this._contentWidget = s4, this.scheduleRender();
  }
};
e$8([y$6({ type: C$1 })], h$1.prototype, "viewModel", void 0), h$1 = e$8([c$c("esri.widgets.Feature.FeatureExpression")], h$1);
const w$1 = h$1;
var F$3;
!function(e3) {
  e3.TOO_SHORT = "length-validation-error::too-short";
}(F$3 || (F$3 = {}));
const G$2 = (e3) => {
  const t2 = [];
  if (e3.formTemplate) {
    const { description: r2, title: o2 } = e3.formTemplate;
    e3.fields?.forEach((e4) => {
      const i2 = o2 && i$5(o2, e4.name), l4 = r2 && i$5(r2, e4.name);
      (i2 || l4) && t2.push(e4.name);
    });
  }
  return t2;
};
const _$1 = 100;
let g$1 = class g extends i$6(s$b(S$1)) {
  constructor(e3) {
    super(e3), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: e4 } = this;
      e4 && e4.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: e4 } = this;
      e4 && e4.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: e4 } = this;
      e4 && e4.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const e4 = new AbortController();
      this._queryAbortController = e4, await d$7(this._query()), this._queryAbortController === e4 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e4 = new AbortController();
      this._queryFeatureCountAbortController = e4, await d$7(this._queryFeatureCount()), this._queryFeatureCountAbortController === e4 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryPageController = async () => {
      const e4 = new AbortController();
      this._queryPageAbortController = e4, await d$7(this._queryPage()), this._queryPageAbortController === e4 && (this._queryPageAbortController = null);
    }, this._queryDebounced = k$3(this._queryController, _$1), this._queryFeatureCountDebounced = k$3(this._queryFeatureCountController, _$1), this._queryPageDebounced = k$3(this._queryPageController, _$1), this._query = async () => {
      const { _queryAbortController: e4, relatedFeatures: t2 } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t2.removeAll(), this.destroyed || t2.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e4?.signal }))));
    }, this.addHandles([d$5(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), P$1), d$5(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), d$5(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.removeAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e3) {
    const { featuresPerPage: t2, featureCount: r2 } = this, o2 = 1, l4 = Math.ceil(r2 / t2) || 1;
    this._set("featurePage", Math.min(Math.max(e3, o2), l4));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e3, relatedLayer: t2 } = this;
    return e3 && t2?.loaded ? e3.map((e4) => {
      const r2 = e4.clone();
      return r2.field = v$7(e4.field, t2), r2;
    }) : e3 ?? [];
  }
  get supportsCacheHint() {
    return !!this.layer?.capabilities?.queryRelated?.supportsCacheHint;
  }
  get canLoad() {
    return !!this.map && "number" == typeof this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    const e3 = this.layer?.capabilities?.queryRelated;
    return !!(this.relatedLayer && this.relationship && "number" == typeof this.relationshipId && "number" == typeof this.objectId && e3?.supportsCount && e3?.supportsPagination);
  }
  get itemDescriptionFieldName() {
    return this.orderByFieldsFixedCasing[0]?.field || null;
  }
  set displayCount(e3) {
    const t2 = 0, r2 = 10;
    this._set("displayCount", Math.min(Math.max(e3, t2), r2));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    return (this.objectIdField && this.graphic?.attributes?.[this.objectIdField]) ?? null;
  }
  get objectIdField() {
    return this.layer?.objectIdField || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new V();
  }
  get relatedLayer() {
    const { layer: e3, map: t2, relationship: r2 } = this;
    return e3?.loaded && t2 && r2 ? Te(t2, e3, r2) ?? null : null;
  }
  get relationship() {
    const { relationshipId: e3, layer: t2 } = this;
    return "number" == typeof e3 ? t2?.relationships?.find(({ id: t3 }) => t3 === e3) ?? null : null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new V();
  }
  get state() {
    const { _queryAbortController: e3, _queryFeatureCountAbortController: t2, _queryPageAbortController: r2, canQuery: o2, _loaded: l4, canLoad: a2 } = this;
    return t2 || a2 && !l4 ? "loading" : e3 || r2 ? "querying" : o2 ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e3) {
    return this.relatedFeatures.find((t2) => t2.getObjectId() === e3);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.forEach((e3) => !e3.destroyed && e3.destroy()), this.relatedFeatureViewModels.removeAll();
  }
  async _queryFeatureCount() {
    const { layer: e3, relatedLayer: t2, relationshipId: r2, objectId: o2, _queryFeatureCountAbortController: l4, canQuery: a2, supportsCacheHint: s4 } = this;
    if (await e3?.load(), await t2?.load(), !a2 || !e3 || !t2)
      return void this._set("featureCount", 0);
    const i2 = t2.createQuery(), n3 = new d$6({ cacheHint: s4, relationshipId: r2, returnGeometry: false, objectIds: [o2], where: i2.where ?? void 0 }), u3 = await e3.queryRelatedFeaturesCount(n3, { signal: l4?.signal });
    this._set("featureCount", u3[o2] || 0);
  }
  _sliceFeatures(e3) {
    const { showAllEnabled: t2, displayCount: r2 } = this;
    return t2 ? e3 : r2 ? e3.slice(0, r2) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e3, featurePage: t2, showAllEnabled: r2, _queryPageAbortController: o2, featureCount: l4 } = this;
    !r2 || t2 < 2 || !l4 || e3.addMany(await this._queryRelatedFeatures({ signal: o2?.signal }));
  }
  async _queryRelatedFeatures(e3) {
    const { orderByFieldsFixedCasing: t2, showAllEnabled: r2, featuresPerPage: l4, displayCount: a2, layer: s4, relationshipId: i2, featurePage: n3, featureCount: u3, relatedLayer: d2, supportsCacheHint: y2 } = this, { canQuery: h4, objectId: c6 } = this;
    if (!h4 || !s4 || !d2)
      return [];
    const C2 = r2 ? ((n3 - 1) * l4 + u3) % u3 : 0, _2 = r2 ? l4 : a2, g3 = d2.objectIdField, F2 = [...t2.map((e4) => e4.field), ...G$2(d2), g3].filter(q$2), f2 = t2.map((e4) => `${e4.field} ${e4.order}`), m2 = d2.createQuery(), q2 = new d$6({ orderByFields: f2, start: C2, num: _2, outFields: F2, cacheHint: y2, relationshipId: i2, returnGeometry: false, objectIds: [c6], where: m2.where ?? void 0 }), A2 = await s4.queryRelatedFeatures(q2, { signal: e3?.signal }), w2 = A2[c6]?.features || [];
    return w2.forEach((e4) => {
      e4.sourceLayer = d2, e4.layer = d2;
    }), w2;
  }
};
e$8([y$6()], g$1.prototype, "_loaded", void 0), e$8([y$6()], g$1.prototype, "_queryAbortController", void 0), e$8([y$6()], g$1.prototype, "_queryPageAbortController", void 0), e$8([y$6()], g$1.prototype, "_queryFeatureCountAbortController", void 0), e$8([y$6({ value: 1 })], g$1.prototype, "featurePage", null), e$8([y$6()], g$1.prototype, "featuresPerPage", void 0), e$8([y$6({ readOnly: true })], g$1.prototype, "orderByFieldsFixedCasing", null), e$8([y$6({ readOnly: true })], g$1.prototype, "supportsCacheHint", null), e$8([y$6({ readOnly: true })], g$1.prototype, "canLoad", null), e$8([y$6({ readOnly: true })], g$1.prototype, "canQuery", null), e$8([y$6()], g$1.prototype, "description", void 0), e$8([y$6({ readOnly: true })], g$1.prototype, "itemDescriptionFieldName", null), e$8([y$6({ value: 3 })], g$1.prototype, "displayCount", null), e$8([y$6({ type: c$b })], g$1.prototype, "graphic", void 0), e$8([y$6()], g$1.prototype, "layer", void 0), e$8([y$6()], g$1.prototype, "map", void 0), e$8([y$6({ readOnly: true })], g$1.prototype, "objectId", null), e$8([y$6({ readOnly: true })], g$1.prototype, "objectIdField", null), e$8([y$6()], g$1.prototype, "orderByFields", void 0), e$8([y$6({ readOnly: true })], g$1.prototype, "relatedFeatures", null), e$8([y$6({ readOnly: true })], g$1.prototype, "relatedLayer", null), e$8([y$6({ readOnly: true })], g$1.prototype, "relationship", null), e$8([y$6()], g$1.prototype, "featureCount", void 0), e$8([y$6({ readOnly: true })], g$1.prototype, "relatedFeatureViewModels", null), e$8([y$6()], g$1.prototype, "relationshipId", void 0), e$8([y$6()], g$1.prototype, "showAllEnabled", void 0), e$8([y$6()], g$1.prototype, "state", null), e$8([y$6()], g$1.prototype, "title", void 0), g$1 = e$8([c$c("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], g$1);
const F$2 = g$1;
const f$1 = "esri-feature", b = `${f$1}-relationship`, y$1 = { base: b, listContainer: `${b}__list`, listItem: `${b}__list-item`, listItemHidden: `${b}__list-item--hidden`, listContainerQuerying: `${b}__list--querying`, featureObserver: `${f$1}__feature-observer`, stickySpinnerContainer: `${f$1}__sticky-loading-container`, loadingSpinnerContainer: `${f$1}__loading-container`, spinner: `${f$1}__loading-spinner` }, F$1 = { title: true, description: true };
let I = class extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e4]) => {
      e4?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.headingLevel = 2, this.viewModel = new F$2(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...F$1 }, this._increaseFeaturePage = () => {
      const { state: e4, showAllEnabled: t3, relatedFeatures: s4, featuresPerPage: r2, featurePage: i2 } = this.viewModel;
      "ready" === e4 && t3 && s4.length >= r2 * i2 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new l$7(), this.addHandles([d$5(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), P$1), d$5(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), v$4(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return r$1({ icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js"), list: () => import("@esri/calcite-components/dist/components/calcite-list.js"), "list-item": () => import("@esri/calcite-components/dist/components/calcite-list-item.js"), notice: () => import("@esri/calcite-components/dist/components/calcite-notice.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u$5(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e3, featureCount: t2, displayCount: s4, state: r2 } = this.viewModel;
    return !e3 && !!t2 && "ready" === r2 && (t2 > s4 || 0 === s4);
  }
  get displayListItems() {
    return this.displayShowAllButton || this.viewModel.relatedFeatureViewModels.length > 0;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e3) {
    this.viewModel.description = e3;
  }
  get featureCountDescription() {
    const { messages: e3 } = this, { featureCount: t2 } = this.viewModel;
    return s$6(e3?.numberRecords, { number: t2 });
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  castVisibleElements(e3) {
    return { ...F$1, ...e3 };
  }
  render() {
    const { state: e3 } = this.viewModel;
    return n$b("div", { class: this.classes(y$1.base, e$a.widget) }, this._featureElementInfo?.render(), "loading" === e3 ? this._renderLoading() : "disabled" === e3 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n$b("div", { class: y$1.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n$b("span", { class: this.classes(i$1.loadingIndicator, e$a.rotating, y$1.spinner) });
  }
  _renderLoading() {
    return n$b("div", { class: y$1.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return n$b("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e3 = v$5(this.container) ? "chevron-left" : "chevron-right";
    return n$b("calcite-icon", { icon: e3, scale: "s", slot: "content-end" });
  }
  _renderRelatedFeature(e3) {
    const { itemDescriptionFieldName: t2 } = this.viewModel, s4 = e3.title;
    e3.description = t2 && e3.formattedAttributes?.global[t2];
    const r2 = "loading" === e3.state;
    return n$b("calcite-list-item", { class: this.classes(y$1.listItem, { [y$1.listItemHidden]: r2 }), description: e3.description ?? "", key: e3.uid, label: s4, onCalciteListItemSelect: () => this.emit("select-record", { featureViewModel: e3 }) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? n$b("calcite-list-item", { description: this.featureCountDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this.emit("show-all-records") }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return n$b("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: true, scale: "s", width: "full" }, n$b("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return n$b("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: y$1.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: e3 } = this.viewModel;
    return n$b("calcite-list", null, e3.toArray().map((e4) => this._renderRelatedFeature(e4)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e3 } = this, { state: t2 } = this.viewModel;
    return n$b("div", { class: this.classes(y$1.listContainer, { [y$1.listContainerQuerying]: "querying" === t2 }), key: "list-container" }, e3 ? this._renderList() : "ready" === t2 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return n$b("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: true, scale: "s", width: "full" }, n$b("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e3 } = this.viewModel, t2 = "related-feature-viewmodels";
    this.removeHandles(t2), e3?.forEach((e4) => {
      this.addHandles(d$5(() => [e4.title, e4.state], () => this.scheduleRender(), P$1), t2);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e3, visibleElements: t2 } = this, s4 = t2.description && this.description, r2 = t2.title && this.title;
    this._featureElementInfo?.set({ description: s4, title: r2, headingLevel: e3 });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e3, showAllEnabled: t2 } = this.viewModel;
    await A$2(0), this._relatedFeatureIntersectionObserverNode && "ready" === e3 && t2 && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e3) {
    this._relatedFeatureIntersectionObserverNode = e3;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
e$8([y$6()], I.prototype, "_relatedFeatureIntersectionObserverNode", void 0), e$8([y$6({ readOnly: true })], I.prototype, "displayShowAllButton", null), e$8([y$6({ readOnly: true })], I.prototype, "displayListItems", null), e$8([y$6()], I.prototype, "description", null), e$8([y$6({ readOnly: true })], I.prototype, "featureCountDescription", null), e$8([y$6()], I.prototype, "headingLevel", void 0), e$8([y$6()], I.prototype, "title", null), e$8([y$6({ type: F$2 })], I.prototype, "viewModel", void 0), e$8([y$6(), e$9("esri/widgets/Feature/t9n/Feature")], I.prototype, "messages", void 0), e$8([y$6(), e$9("esri/t9n/common")], I.prototype, "messagesCommon", void 0), e$8([y$6()], I.prototype, "visibleElements", void 0), e$8([s$7("visibleElements")], I.prototype, "castVisibleElements", null), I = e$8([c$c("esri.widgets.Feature.FeatureRelationship")], I);
const M2 = I;
let e$4 = class e {
  constructor(e3, a2) {
    this.preLayerQueryCallback = e3, this.preRequestCallback = a2, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e4) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e4) => {
    });
  }
};
var G$1;
const z$1 = 1, J = "content-view-models", K = "relationship-view-models", W$1 = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true };
let X = G$1 = class extends s$b(S$1) {
  constructor(e3) {
    super(e3), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = e$7(this._graphicChanged, z$1, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...W$1 }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e4) => {
      const { abilities: t2 } = this;
      return "attachments" === e4.type && !!t2.attachmentsContent || "custom" === e4.type && !!t2.customContent || "fields" === e4.type && !!t2.fieldsContent || "media" === e4.type && !!t2.mediaContent || "text" === e4.type && !!t2.textContent || "expression" === e4.type && !!t2.expressionContent || "relationship" === e4.type && !!t2.relationshipContent;
    }, this.addHandles(d$5(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), P$1));
  }
  initialize() {
    this.addHandles(this._graphicChangedThrottled);
  }
  destroy() {
    this._clear(), this._cancelFeatureQuery(), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return null != this.graphic ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return re(ie(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return E$2(this.graphic);
  }
  castAbilities(e3) {
    return { ...W$1, ...e3 };
  }
  get isTable() {
    return this._sourceLayer?.isTable || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(e3) {
    this._set("graphic", e3?.clone() ?? null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e3) {
    this._override("spatialReference", e3);
  }
  get timeZone() {
    return this.view?.timeZone ?? o$1;
  }
  set timeZone(e3) {
    this._overrideIfSome("timeZone", e3);
  }
  get map() {
    return this.view?.map || null;
  }
  set map(e3) {
    this._override("map", e3);
  }
  get waitingForContent() {
    return !!this._featureAbortController;
  }
  setActiveMedia(e3, t2) {
    const i2 = this.contentViewModels[e3];
    i2 instanceof M$2 && i2.setActiveMedia(t2);
  }
  nextMedia(e3) {
    const t2 = this.contentViewModels[e3];
    t2 instanceof M$2 && t2.next();
  }
  previousMedia(e3) {
    const t2 = this.contentViewModels[e3];
    t2 instanceof M$2 && t2.previous();
  }
  async updateGeometry() {
    const { graphic: e3, spatialReference: t2, _sourceLayer: i2 } = this;
    await i2?.load();
    const r2 = i2?.objectIdField;
    if (!r2 || !e3 || !i2)
      return;
    const o2 = e3?.attributes?.[r2];
    if (null == o2)
      return;
    const s4 = [o2];
    if (!e3.geometry) {
      const r3 = await se({ layer: i2, graphic: e3, outFields: [], objectIds: s4, returnGeometry: true, spatialReference: t2 }), o3 = r3?.geometry;
      o3 && (e3.geometry = o3);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  async _graphicChanged() {
    this._cancelFeatureQuery(), this._error = null, this._clear();
    const { graphic: e3 } = this;
    if (!e3)
      return;
    const t2 = new AbortController();
    this._featureAbortController = t2;
    try {
      await this._queryFeature({ signal: t2.signal });
    } catch (i2) {
      b$4(i2) || (this._error = i2, s$9.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i2, graphic: e3, popupTemplate: this._effectivePopupTemplate }));
    }
    this._featureAbortController === t2 && (this._featureAbortController = null);
  }
  _cancelFeatureQuery() {
    const { _featureAbortController: e3 } = this;
    e3 && e3.abort(), this._featureAbortController = null;
  }
  _compileContentElement(e3, t2) {
    return "attachments" === e3.type ? this._compileAttachments(e3, t2) : "custom" === e3.type ? this._compileCustom(e3, t2) : "fields" === e3.type ? this._compileFields(e3, t2) : "media" === e3.type ? this._compileMedia(e3, t2) : "text" === e3.type ? this._compileText(e3, t2) : "expression" === e3.type ? this._compileExpression(e3, t2) : "relationship" === e3.type ? this._compileRelationship(e3, t2) : void 0;
  }
  _compileContent(e3) {
    if (this._destroyContentViewModels(), this.graphic)
      return Array.isArray(e3) ? e3.filter(this._isAllowedContentType).map((e4, t2) => this._compileContentElement(e4, t2)).filter(q$2) : "string" == typeof e3 ? this._compileText(new c$e({ text: e3 }), 0).text : e3;
  }
  _destroyContentViewModels() {
    this.removeHandles(K), this.removeHandles(J), this.contentViewModels.forEach((e3) => e3 && !e3.destroyed && e3.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e3, t2) {
    const i2 = e3?.graphic?.getObjectId(), r2 = t2?.getObjectId();
    return null != i2 && null != r2 && i2 === r2;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e3, relatedFeatures: t2, map: i2 }) {
    const { view: r2, spatialReference: o2 } = this;
    t2?.filter(Boolean).forEach((t3) => {
      e3.some((e4) => this._matchesFeature(e4, t3)) || e3.add(new G$1({ abilities: { relationshipContent: false }, map: i2, view: r2, spatialReference: o2, graphic: t3 }));
    }), e3.forEach((i3) => {
      const r3 = t2?.find((e4) => this._matchesFeature(i3, e4));
      r3 || e3.remove(i3);
    });
  }
  _setExpressionContentVM(e3, t2) {
    const i2 = this.formattedAttributes, { contentElement: r2, contentElementViewModel: o2 } = e3, s4 = r2?.type;
    o2 && s4 && ("fields" === s4 && (this._createFieldsFormattedAttributes({ contentElement: r2, contentElementIndex: t2, formattedAttributes: i2 }), o2.set(this._createFieldsVMParams(r2, t2))), "media" === s4 && (this._createMediaFormattedAttributes({ contentElement: r2, contentElementIndex: t2, formattedAttributes: i2 }), o2.set(this._createMediaVMParams(r2, t2))), "text" === s4 && o2.set(this._createTextVMParams(r2)));
  }
  _compileRelationship(e3, t2) {
    const { displayCount: i2, orderByFields: r2, relationshipId: o2, title: s4, description: n3 } = e3, { _sourceLayer: a2, graphic: l4, map: p4 } = this;
    if (!J$1(a2))
      return;
    const d2 = new F$2({ displayCount: i2, graphic: l4, orderByFields: r2, relationshipId: o2, layer: a2, map: p4, ...this._compileTitleAndDesc({ title: s4, description: n3 }) });
    return this.contentViewModels[t2] = d2, this.addHandles(v$4(() => d2.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(d2)), K), e3;
  }
  _compileExpression(e3, t2) {
    const { expressionInfo: i2 } = e3, { graphic: r2, map: o2, spatialReference: s4, view: n3, location: a2 } = this, l4 = new C$1({ expressionInfo: i2, graphic: r2, interceptor: G$1.interceptor, map: o2, spatialReference: s4, view: n3, location: a2 });
    return this.contentViewModels[t2] = l4, this.addHandles(d$5(() => l4.contentElementViewModel, () => this._setExpressionContentVM(l4, t2), P$1), J), e3;
  }
  _compileAttachments(e3, t2) {
    const { graphic: i2 } = this, { description: r2, title: o2 } = e3;
    return this.contentViewModels[t2] = new c$a({ graphic: i2, ...this._compileTitleAndDesc({ title: o2, description: r2 }) }), e3;
  }
  _compileCustom(e3, t2) {
    const { graphic: i2 } = this, { creator: r2, destroyer: o2 } = e3;
    return this.contentViewModels[t2] = new p$6({ graphic: i2, creator: r2, destroyer: o2 }), e3;
  }
  _compileTitleAndDesc({ title: e3, description: t2 }) {
    const { _fieldInfoMap: i2, _sourceLayer: r2, graphic: o2, formattedAttributes: s4 } = this, n3 = o2?.attributes, a2 = this._expressionAttributes, l4 = s4.global;
    return { title: D({ attributes: n3, fieldInfoMap: i2, globalAttributes: l4, expressionAttributes: a2, layer: r2, text: e3 }), description: D({ attributes: n3, fieldInfoMap: i2, globalAttributes: l4, expressionAttributes: a2, layer: r2, text: t2 }) };
  }
  _createFieldsVMParams(e3, t2) {
    const i2 = this._effectivePopupTemplate, r2 = this.formattedAttributes, o2 = { ...r2?.global, ...r2?.content[t2] }, s4 = e3?.fieldInfos || i2?.fieldInfos, n3 = s4?.filter(({ fieldName: e4 }) => M$4(e4) || de(e4) || o2.hasOwnProperty(e4)), a2 = i2?.expressionInfos, { description: l4, title: p4 } = e3;
    return { attributes: o2, expressionInfos: a2, fieldInfos: n3, ...this._compileTitleAndDesc({ title: p4, description: l4 }) };
  }
  _compileFields(e3, t2) {
    const i2 = e3.clone(), r2 = new n$5(this._createFieldsVMParams(e3, t2));
    return this.contentViewModels[t2] = r2, i2.fieldInfos = r2.formattedFieldInfos.slice(0), i2;
  }
  _createMediaVMParams(e3, t2) {
    const { abilities: i2, graphic: r2, _fieldInfoMap: o2, _effectivePopupTemplate: s4, relatedInfos: n3, _sourceLayer: a2, _expressionAttributes: l4 } = this, p4 = this.formattedAttributes, c6 = r2?.attributes ?? {}, { description: d2, mediaInfos: u3, title: h4 } = e3;
    return { abilities: { chartAnimation: i2.chartAnimation }, activeMediaInfoIndex: e3.activeMediaInfoIndex || 0, attributes: c6, isAggregate: r2?.isAggregate, layer: a2, fieldInfoMap: o2, formattedAttributes: { ...p4?.global, ...p4?.content[t2] }, expressionAttributes: l4, mediaInfos: u3, popupTemplate: s4, relatedInfos: n3, ...this._compileTitleAndDesc({ title: h4, description: d2 }) };
  }
  _compileMedia(e3, t2) {
    const i2 = e3.clone(), r2 = new M$2(this._createMediaVMParams(e3, t2));
    return i2.mediaInfos = r2.formattedMediaInfos.slice(0), this.contentViewModels[t2] = r2, i2;
  }
  _createTextVMParams(e3) {
    const { graphic: t2, _fieldInfoMap: i2, _sourceLayer: r2, _expressionAttributes: o2 } = this;
    if (e3 && e3.text) {
      const s4 = t2?.attributes ?? {}, n3 = this.formattedAttributes?.global ?? {};
      e3.text = D({ attributes: s4, fieldInfoMap: i2, globalAttributes: n3, expressionAttributes: o2, layer: r2, text: e3.text });
    }
    return { graphic: t2, creator: e3.text };
  }
  _compileText(e3, t2) {
    const i2 = e3.clone();
    return this.contentViewModels[t2] = new p$6(this._createTextVMParams(i2)), i2;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e3, _sourceLayer: t2, graphic: i2, timeZone: r2 } = this;
    if (!e3)
      return;
    const { lastEditInfoEnabled: o2 } = e3, s4 = t2?.editFieldsInfo;
    return o2 && s4 ? ne(s4, i2?.attributes, r2, t2) : void 0;
  }
  _compileTitle(e3) {
    const { _fieldInfoMap: t2, _sourceLayer: i2, graphic: r2, _expressionAttributes: o2 } = this, s4 = r2?.attributes ?? {}, n3 = this.formattedAttributes?.global ?? {};
    return D({ attributes: s4, fieldInfoMap: t2, globalAttributes: n3, expressionAttributes: o2, layer: i2, text: e3 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e3, graphic: t2 } = this;
    if (!t2)
      return null;
    const i2 = e3?.title;
    return x$3(i2, { graphic: t2 });
  }
  async _getContent() {
    const { _effectivePopupTemplate: e3, graphic: t2 } = this;
    if (!t2)
      return null;
    const i2 = e3?.content;
    return x$3(i2, { graphic: t2 });
  }
  async _queryFeature(e3) {
    const { _featureAbortController: t2, _sourceLayer: i2, graphic: r2, _effectivePopupTemplate: o2 } = this, s4 = this.map, n3 = this.view, a2 = this.spatialReference, p4 = this.location;
    if (t2 !== this._featureAbortController || !r2)
      return;
    await ce({ graphic: r2, popupTemplate: o2, layer: i2, spatialReference: a2 }, e3);
    const { content: { value: c6 }, title: { value: d2 } } = await v$6({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: u3 } } = await v$6({ checkForRelatedFeatures: this._checkForRelatedFeatures(e3), expressionAttributes: m$2({ expressionInfos: o2?.expressionInfos, spatialReference: a2, graphic: r2, map: s4, interceptor: G$1.interceptor, view: n3, options: e3, location: p4 }) });
    t2 === this._featureAbortController && r2 && (this._expressionAttributes = u3, this._graphicExpressionAttributes = { ...r2.attributes, ...u3 }, this._set("formattedAttributes", this._createFormattedAttributes(c6)), this._set("title", this._compileTitle(d2)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(c6) || null));
  }
  _createMediaFormattedAttributes({ contentElement: e3, contentElementIndex: t2, formattedAttributes: i2 }) {
    const { _effectivePopupTemplate: r2, graphic: o2, relatedInfos: s4, _sourceLayer: n3, _fieldInfoMap: a2, _graphicExpressionAttributes: l4, timeZone: p4 } = this;
    i2.content[t2] = ue({ fieldInfos: r2?.fieldInfos, graphic: o2, attributes: { ...l4, ...e3.attributes }, layer: n3, fieldInfoMap: a2, relatedInfos: s4, timeZone: p4 });
  }
  _createFieldsFormattedAttributes({ contentElement: e3, contentElementIndex: t2, formattedAttributes: i2 }) {
    if (e3.fieldInfos) {
      const { graphic: r2, relatedInfos: o2, _sourceLayer: s4, _fieldInfoMap: n3, _graphicExpressionAttributes: a2, timeZone: l4 } = this;
      i2.content[t2] = ue({ fieldInfos: e3.fieldInfos, graphic: r2, attributes: { ...a2, ...e3.attributes }, layer: s4, fieldInfoMap: n3, relatedInfos: o2, timeZone: l4 });
    }
  }
  _createFormattedAttributes(e3) {
    const { _effectivePopupTemplate: t2, graphic: i2, relatedInfos: r2, _sourceLayer: o2, _fieldInfoMap: s4, _graphicExpressionAttributes: n3, timeZone: a2 } = this, l4 = t2?.fieldInfos, p4 = { global: ue({ fieldInfos: l4, graphic: i2, attributes: n3, layer: o2, fieldInfoMap: s4, relatedInfos: r2, timeZone: a2 }), content: [] };
    return Array.isArray(e3) && e3.forEach((e4, t3) => {
      "fields" === e4.type && this._createFieldsFormattedAttributes({ contentElement: e4, contentElementIndex: t3, formattedAttributes: p4 }), "media" === e4.type && this._createMediaFormattedAttributes({ contentElement: e4, contentElementIndex: t3, formattedAttributes: p4 });
    }), p4;
  }
  _checkForRelatedFeatures(e3) {
    const { graphic: t2, _effectivePopupTemplate: i2 } = this;
    return this._queryRelatedInfos(t2, ie(i2), e3);
  }
  async _queryRelatedInfos(e3, t2, i2) {
    const { relatedInfos: r2, _sourceLayer: o2 } = this;
    r2.clear();
    const s4 = null != o2?.associatedLayer ? await o2?.associatedLayer.load(i2) : o2;
    if (!s4 || !e3)
      return;
    const n3 = t2.filter((e4) => e4 && de(e4.fieldName));
    if (!n3?.length)
      return;
    t2.forEach((e4) => this._configureRelatedInfo(e4, s4));
    const a2 = await N({ relatedInfos: r2, layer: s4 }, i2);
    Object.keys(a2).forEach((e4) => {
      const t3 = r2.get(e4.toString()), i3 = a2[e4]?.value;
      t3 && i3 && (t3.layerInfo = i3.data);
    });
    const l4 = await T$2({ graphic: e3, relatedInfos: r2, layer: s4 }, i2);
    Object.keys(l4).forEach((e4) => {
      I$3(l4[e4]?.value, r2.get(e4.toString()));
    });
  }
  _configureRelatedInfo(e3, t2) {
    const { relatedInfos: i2 } = this, r2 = y$4(e3.fieldName);
    if (!r2)
      return;
    const { layerId: o2, fieldName: s4 } = r2;
    if (!o2)
      return;
    const n3 = i2.get(o2.toString()) || F$4(o2, t2);
    n3 && (q({ relatedInfo: n3, fieldName: s4, fieldInfo: e3 }), this.relatedInfos.set(o2, n3));
  }
};
X.interceptor = new e$4(he, be), e$8([y$6()], X.prototype, "_error", void 0), e$8([y$6()], X.prototype, "_featureAbortController", void 0), e$8([y$6({ readOnly: true })], X.prototype, "_effectivePopupTemplate", null), e$8([y$6({ readOnly: true })], X.prototype, "_fieldInfoMap", null), e$8([y$6({ readOnly: true })], X.prototype, "_sourceLayer", null), e$8([y$6()], X.prototype, "abilities", void 0), e$8([s$7("abilities")], X.prototype, "castAbilities", null), e$8([y$6({ readOnly: true })], X.prototype, "content", void 0), e$8([y$6({ readOnly: true })], X.prototype, "contentViewModels", void 0), e$8([y$6()], X.prototype, "description", void 0), e$8([y$6({ type: Boolean })], X.prototype, "defaultPopupTemplateEnabled", void 0), e$8([y$6({ readOnly: true })], X.prototype, "isTable", null), e$8([y$6({ readOnly: true })], X.prototype, "state", null), e$8([y$6({ readOnly: true })], X.prototype, "formattedAttributes", void 0), e$8([y$6({ type: c$b, value: null })], X.prototype, "graphic", null), e$8([y$6({ readOnly: true })], X.prototype, "lastEditInfo", void 0), e$8([y$6({ type: x$4 })], X.prototype, "location", void 0), e$8([y$6({ readOnly: true })], X.prototype, "relatedInfos", void 0), e$8([y$6()], X.prototype, "spatialReference", null), e$8([y$6()], X.prototype, "timeZone", null), e$8([y$6({ readOnly: true })], X.prototype, "title", void 0), e$8([y$6()], X.prototype, "map", null), e$8([y$6({ readOnly: true })], X.prototype, "waitingForContent", null), e$8([y$6()], X.prototype, "view", void 0), X = G$1 = e$8([c$c("esri.widgets.Feature.FeatureViewModel")], X);
const Y = X;
const e$3 = "esri-feature", t$3 = { base: e$3, container: `${e$3}__size-container`, title: `${e$3}__title`, main: `${e$3}__main-container`, btn: `${e$3}__button`, icon: `${e$3}__icon`, content: `${e$3}__content`, contentNode: `${e$3}__content-node`, contentNodeText: `${e$3}__content-node--text`, contentElement: `${e$3}__content-element`, text: `${e$3}__text`, lastEditedInfo: `${e$3}__last-edited-info`, fields: `${e$3}__fields`, fieldHeader: `${e$3}__field-header`, fieldData: `${e$3}__field-data`, fieldDataDate: `${e$3}__field-data--date`, loadingSpinnerContainer: `${e$3}__loading-container`, spinner: `${e$3}__loading-spinner` };
const n$3 = (n3) => {
  let i2 = class extends n3 {
    constructor() {
      super(...arguments), this.renderNodeContent = (e3) => e$c(e3) && !e3.destroyed ? n$b("div", { class: t$3.contentNode, key: e3 }, e3.render()) : e3 instanceof HTMLElement ? n$b("div", { afterCreate: this._attachToNode, bind: e3, class: t$3.contentNode, key: e3 }) : t$4(e3) ? n$b("div", { afterCreate: this._attachToNode, bind: e3.domNode, class: t$3.contentNode, key: e3 }) : null;
    }
    _attachToNode(e3) {
      const o2 = this;
      e3.appendChild(o2);
    }
  };
  return i2 = e$8([c$c("esri.widgets.Feature.ContentMixin")], i2), i2;
};
var j$1;
const C = { title: true, content: true, lastEditedInfo: true }, F = "relationship-handles";
let W = j$1 = class extends n$3(O$1) {
  constructor(e3, t2) {
    super(e3, t2), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...C }, this.viewModel = new Y();
  }
  initialize() {
    this.addHandles(d$5(() => this.viewModel?.contentViewModels, () => this._setupContentWidgets(), P$1));
  }
  loadDependencies() {
    return r$1({ notice: () => import("@esri/calcite-components/dist/components/calcite-notice.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e3) {
    this.viewModel.graphic = e3;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e3) {
    this.viewModel.defaultPopupTemplateEnabled = e3;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e3) {
    this._overrideIfSome("label", e3);
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e3) {
    this.viewModel.spatialReference = e3;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e3) {
    this.viewModel.timeZone = e3;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e3) {
    return { ...C, ...e3 };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e3) {
    this.viewModel.map = e3;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e3) {
    this.viewModel.view = e3;
  }
  setActiveMedia(e3, t2) {
    return this.viewModel.setActiveMedia(e3, t2);
  }
  nextMedia(e3) {
    return this.viewModel.nextMedia(e3);
  }
  previousMedia(e3) {
    return this.viewModel.previousMedia(e3);
  }
  render() {
    const { state: e3 } = this.viewModel, t2 = n$b("div", { class: t$3.container, key: "container" }, this._renderTitle(), "error" === e3 ? this._renderError() : "loading" === e3 ? this._renderLoading() : this._renderContentContainer());
    return n$b("div", { class: this.classes(t$3.base, e$a.widget) }, t2);
  }
  _renderError() {
    const { messagesCommon: e3, messages: t2, visibleElements: s4 } = this;
    return n$b("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: true, scale: "s" }, s4.title ? n$b("div", { key: "error-title", slot: "title" }, e3.errorMessage) : null, n$b("div", { key: "error-message", slot: "message" }, t2.loadingError));
  }
  _renderLoading() {
    return n$b("div", { class: t$3.loadingSpinnerContainer, key: "loading-container" }, n$b("span", { class: this.classes(i$1.loadingIndicator, e$a.rotating, t$3.spinner) }));
  }
  _renderContentContainer() {
    const { visibleElements: e3 } = this;
    return e3.content ? n$b("div", { class: t$3.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e3, title: t2 } = this;
    return e3.title ? n$b(e$b, { class: t$3.title, innerHTML: t2, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e3 = this.viewModel.content, t2 = "content";
    if (!e3)
      return null;
    if (Array.isArray(e3))
      return e3.length ? n$b("div", { class: t$3.contentNode, key: `${t2}-content-elements` }, e3.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e3) {
      const e4 = this._contentWidgets[0];
      return !e4 || e4.destroyed ? null : n$b("div", { class: this.classes(t$3.contentNode, t$3.contentNodeText), key: `${t2}-content` }, e4.render());
    }
    return this.renderNodeContent(e3);
  }
  _renderContentElement(e3, t2) {
    const { visibleElements: s4 } = this;
    if ("boolean" != typeof s4.content && !s4.content?.[e3.type])
      return null;
    switch (e3.type) {
      case "attachments":
        return this._renderAttachments(t2);
      case "custom":
        return this._renderCustom(e3, t2);
      case "fields":
        return this._renderFields(t2);
      case "media":
        return this._renderMedia(t2);
      case "text":
        return this._renderText(e3, t2);
      case "expression":
        return this._renderExpression(t2);
      case "relationship":
        return this._renderRelationship(t2);
      default:
        return null;
    }
  }
  _renderAttachments(e3) {
    const t2 = this._contentWidgets[e3];
    if (!t2 || t2.destroyed)
      return null;
    const { state: s4, attachmentInfos: i2 } = t2.viewModel;
    return "loading" === s4 || i2.length > 0 ? n$b("div", { class: this.classes(t$3.contentElement), key: this._buildKey("attachments-element", e3) }, t2.render()) : null;
  }
  _renderRelationship(e3) {
    const t2 = this._contentWidgets[e3];
    return t2 && !t2.destroyed && this.flowItems ? n$b("div", { class: t$3.contentElement, key: this._buildKey("relationship-element", e3) }, t2.render()) : null;
  }
  _renderExpression(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$b("div", { class: t$3.contentElement, key: this._buildKey("expression-element", e3) }, t2.render());
  }
  _renderCustom(e3, t2) {
    const { creator: s4 } = e3, i2 = this._contentWidgets[t2];
    return !i2 || i2.destroyed ? null : s4 ? n$b("div", { class: t$3.contentElement, key: this._buildKey("custom-element", t2) }, i2.render()) : null;
  }
  _renderFields(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$b("div", { class: t$3.contentElement, key: this._buildKey("fields-element", e3) }, t2.render());
  }
  _renderMedia(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$b("div", { class: t$3.contentElement, key: this._buildKey("media-element", e3) }, t2.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e3, messages: t2 } = this, { lastEditInfo: s4 } = this.viewModel;
    if (!s4 || !e3.lastEditedInfo)
      return null;
    const { date: i2, user: n3 } = s4, r2 = "edit" === s4.type ? n3 ? t2.lastEditedByUser : t2.lastEdited : n3 ? t2.lastCreatedByUser : t2.lastCreated, o2 = s$6(r2, { date: i2, user: n3 });
    return n$b("div", { class: this.classes(t$3.lastEditedInfo, t$3.contentElement), key: "edit-info-element" }, o2);
  }
  _renderText(e3, t2) {
    const s4 = e3.text, i2 = this._contentWidgets[t2];
    return !i2 || i2.destroyed ? null : s4 ? n$b("div", { class: this.classes(t$3.contentElement, t$3.text), key: this._buildKey("text-element", t2) }, i2.render()) : null;
  }
  _buildKey(e3, ...t2) {
    return `${e3}__${this.viewModel?.graphic?.uid || "0"}-${t2.join("-")}`;
  }
  _destroyContentWidget(e3) {
    e3 && (e3.viewModel = null, !e3.destroyed && e3.destroy());
  }
  _destroyContentWidgets() {
    this.removeHandles(F), this._contentWidgets.forEach((e3) => this._destroyContentWidget(e3)), this._contentWidgets = [];
  }
  _addFeatureRelationshipHandles(e3) {
    const { flowItems: t2, visibleElements: i2 } = this;
    this.addHandles([v$4(() => e3, "select-record", ({ featureViewModel: e4 }) => {
      t2 && (e4.abilities = { relationshipContent: true }, t2.push(new j$1({ flowItems: t2, viewModel: e4, visibleElements: i2 })));
    }), v$4(() => e3, "show-all-records", () => {
      if (!t2)
        return;
      const { viewModel: s4 } = e3;
      s4.showAllEnabled = true;
      const i3 = new M2({ visibleElements: { title: false, description: false }, viewModel: s4 });
      this._addFeatureRelationshipHandles(i3), t2.push(i3);
    })], F);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e3, visibleElements: t2 } = this, s4 = this.viewModel?.content, { contentViewModels: i2 } = this.viewModel;
    if (Array.isArray(s4))
      s4.forEach((s5, n3) => {
        if ("attachments" === s5.type && (this._contentWidgets[n3] = new c$8({ displayType: s5.displayType, headingLevel: t2.title ? e3 + 1 : e3, viewModel: i2[n3] })), "fields" === s5.type && (this._contentWidgets[n3] = new h$3({ viewModel: i2[n3] })), "media" === s5.type && (this._contentWidgets[n3] = new b$1({ viewModel: i2[n3] })), "text" === s5.type && (this._contentWidgets[n3] = new p$5({ viewModel: i2[n3] })), "custom" === s5.type && (this._contentWidgets[n3] = new p$5({ viewModel: i2[n3] })), "expression" === s5.type && (this._contentWidgets[n3] = new w$1({ viewModel: i2[n3] })), "relationship" === s5.type) {
          const e4 = new M2({ viewModel: i2[n3] });
          this._addFeatureRelationshipHandles(e4), this._contentWidgets[n3] = e4;
        }
      }, this);
    else {
      const e4 = i2[0];
      e4 && !e4.destroyed && (this._contentWidgets[0] = new p$5({ viewModel: e4 }));
    }
    this.scheduleRender();
  }
};
e$8([y$6()], W.prototype, "graphic", null), e$8([y$6()], W.prototype, "defaultPopupTemplateEnabled", null), e$8([y$6()], W.prototype, "flowItems", void 0), e$8([y$6()], W.prototype, "headingLevel", void 0), e$8([y$6({ readOnly: true })], W.prototype, "isTable", null), e$8([y$6()], W.prototype, "label", null), e$8([y$6(), e$9("esri/widgets/Feature/t9n/Feature")], W.prototype, "messages", void 0), e$8([y$6(), e$9("esri/t9n/common")], W.prototype, "messagesCommon", void 0), e$8([y$6()], W.prototype, "spatialReference", null), e$8([y$6()], W.prototype, "timeZone", null), e$8([y$6({ readOnly: true })], W.prototype, "title", null), e$8([y$6()], W.prototype, "visibleElements", void 0), e$8([s$7("visibleElements")], W.prototype, "castVisibleElements", null), e$8([y$6()], W.prototype, "map", null), e$8([y$6()], W.prototype, "view", null), e$8([y$6({ type: Y })], W.prototype, "viewModel", void 0), W = j$1 = e$8([c$c("esri.widgets.Feature")], W);
const x = W;
let c$3 = class c4 extends o$2.EventedAccessor {
  constructor(e3) {
    super(e3), this.location = null, this.screenLocationEnabled = false, this.view = null, this.addHandles([p$9(() => {
      const e4 = this.screenLocationEnabled ? this.view : null;
      return e4 ? [e4.size, "3d" === e4.type ? e4.camera : e4.viewpoint] : null;
    }, () => this.notifyChange("screenLocation")), d$5(() => this.screenLocation, (e4, o2) => {
      null != e4 && null != o2 && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null;
  }
  get screenLocation() {
    const { location: e3, view: o2, screenLocationEnabled: t2 } = this, r2 = o2?.spatialReference, s4 = r2 ? K$1(e3, r2).geometry : null;
    return t2 && s4 && o2?.ready ? o2.toScreen(s4) : null;
  }
};
e$8([y$6()], c$3.prototype, "location", void 0), e$8([y$6()], c$3.prototype, "screenLocation", null), e$8([y$6()], c$3.prototype, "screenLocationEnabled", void 0), e$8([y$6()], c$3.prototype, "view", void 0), c$3 = e$8([c$c("esri.widgets.support.AnchorElementViewModel")], c$3);
const l$3 = c$3;
const t$2 = "esri.widgets.CompassViewModel";
let p$3 = class p extends l$3 {
  constructor(o2) {
    super(o2), this.visible = false;
  }
};
e$8([y$6()], p$3.prototype, "visible", void 0), p$3 = e$8([c$c(t$2)], p$3);
const c$2 = p$3;
const a = "esri-spinner", c$1 = { base: a, spinnerStart: `${a}--start`, spinnerFinish: `${a}--finish` };
let p$2 = class p2 extends O$1 {
  constructor(i2, e3) {
    super(i2, e3), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new c$2();
  }
  initialize() {
    this.addHandles(d$5(() => this.visible, (i2) => this._visibleChange(i2)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(i2) {
    this.viewModel.location = i2;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(i2) {
    this.viewModel.view = i2;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(i2) {
    this.viewModel.visible = i2;
  }
  show(i2) {
    const { location: e3, promise: t2 } = i2 ?? {};
    e3 && (this.viewModel.location = e3), this.visible = true;
    const s4 = () => this.hide();
    t2 && t2.catch(() => {
    }).then(s4);
  }
  hide() {
    this.visible = false;
  }
  render() {
    const { visible: i2 } = this, { screenLocation: e3 } = this.viewModel, t2 = !!e3, s4 = i2 && t2, o2 = !i2 && t2, r2 = { [c$1.spinnerStart]: s4, [c$1.spinnerFinish]: o2 }, n3 = this._getPositionStyles();
    return n$b("div", { class: this.classes(c$1.base, r2), styles: n3 });
  }
  _visibleChange(i2) {
    if (i2)
      return void (this.viewModel.screenLocationEnabled = true);
    const t2 = A$2(this._animationDelay);
    this._animationPromise = t2, t2.catch(() => {
    }).then(() => {
      this._animationPromise === t2 && (this.viewModel.screenLocationEnabled = false, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const { screenLocation: i2, view: e3 } = this.viewModel;
    if (null == e3 || null == i2)
      return {};
    const { padding: t2 } = e3;
    return { left: i2.x - t2.left + "px", top: i2.y - t2.top + "px" };
  }
};
e$8([y$6()], p$2.prototype, "location", null), e$8([y$6()], p$2.prototype, "view", null), e$8([y$6({ type: c$2 })], p$2.prototype, "viewModel", void 0), e$8([y$6()], p$2.prototype, "visible", null), p$2 = e$8([c$c("esri.widgets.Spinner")], p$2);
const h3 = p$2;
const e$2 = "esri-features", n$2 = { icon: `${e$2}__icon`, actionImage: `${e$2}__action-image`, base: e$2, container: `${e$2}__container`, contentContainer: `${e$2}__content-container`, contentFeature: `${e$2}__content-feature`, flowItemCollapsed: `${e$2}__flow-item--collapsed`, header: `${e$2}__header`, footer: `${e$2}__footer`, featureMenuObserver: `${e$2}__feature-menu-observer`, actionExit: `${e$2}__action--exit`, loader: `${e$2}__loader`, featuresHeading: `${e$2}__heading`, paginationActionBar: `${e$2}__pagination-action-bar`, paginationPrevious: `${e$2}__pagination-previous`, paginationNext: `${e$2}__pagination-next` };
let n$1 = class n extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this.messages = null, this.closed = false, this.closable = true, this._handleOpenRelatedFeature = (e4) => {
      this.emit("open-related-feature", { feature: e4 });
    };
  }
  loadDependencies() {
    return r$1({ action: () => import("@esri/calcite-components/dist/components/calcite-action.js"), "flow-item": () => import("@esri/calcite-components/dist/components/calcite-flow-item.js") });
  }
  render() {
    const { flowItems: e3 } = this, t2 = e3?.toArray();
    return n$b(i$7, null, t2?.map((e4) => this._renderRelatedRecordsFlowItem(e4)));
  }
  _handleCloseClick() {
    this.emit("close");
  }
  _handleExitClick() {
    this.emit("exit");
  }
  _handleRelatedRecordsBackClick() {
    const e3 = this.flowItems?.pop();
    e3 && ("showAllEnabled" in e3.viewModel && (e3.viewModel.showAllEnabled = false), e3 && (e3.viewModel = null, e3.destroy()));
  }
  _renderRelatedRecordsFlowItem(e3) {
    const { messages: t2, closable: o2, closed: s4 } = this, r2 = "graphic" in e3 && !e3.isTable;
    return n$b("calcite-flow-item", { bind: this, closable: o2, closed: s4, description: this._getRelatedRecordsFlowItemDescription(e3), heading: e3.title ?? "", key: `flow-item-${e3.viewModel.uid}`, onCalciteFlowItemBack: (e4) => {
      e4.preventDefault(), this._handleRelatedRecordsBackClick();
    }, onCalciteFlowItemClose: this._handleCloseClick }, n$b("calcite-action", { appearance: "transparent", bind: this, class: n$2.actionExit, icon: "move-up", key: "exit-related-records-action", label: t2.exitRelatedRecords, onclick: this._handleExitClick, scale: "m", slot: "header-actions-start", text: t2.exitRelatedRecords, title: t2.exitRelatedRecords }), r2 ? n$b("calcite-action", { appearance: "transparent", bind: this, icon: "zoom-to-object", key: "open-related-feature-action", label: t2.selectFeature, onclick: () => this._handleOpenRelatedFeature(e3), scale: "m", slot: "header-actions-end", text: t2.selectFeature, title: t2.selectFeature }) : null, n$b("div", { class: n$2.container }, e3.render()));
  }
  _getRelatedRecordsFlowItemDescription(e3) {
    return "featureCountDescription" in e3 ? e3.featureCountDescription : e3.viewModel.description ?? "";
  }
};
e$8([y$6()], n$1.prototype, "flowItems", void 0), e$8([y$6(), e$9("esri/widgets/Features/t9n/Features")], n$1.prototype, "messages", void 0), e$8([y$6()], n$1.prototype, "closed", void 0), e$8([y$6()], n$1.prototype, "closable", void 0), n$1 = e$8([c$c("esri.widgets.Features.FeaturesRelatedRecords")], n$1);
const d$1 = n$1;
const i = V.ofType({ key: "type", defaultKeyValue: "button", base: p$a, typeMap: { button: c$g, toggle: a$3 } }), n2 = new c$g({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: i$1.zoomInMagnifyingGlass }), r = new c$g({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: i$1.trash }), l$2 = new c$g({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: i$1.zoomInMagnifyingGlass }), m$1 = new a$3({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: i$1.table, value: false });
const s$2 = "esri.widgets.Popup.PopupViewModel", c5 = () => s$9.getLogger(s$2), u2 = (t2) => {
  const { event: s4, view: c6, viewModel: u3 } = t2, { action: l4 } = s4;
  if (!l4)
    return Promise.reject(new s$8("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: d2, id: g3 } = l4;
  if (!g3)
    return Promise.reject(new s$8("trigger-action:invalid-action", "action.id is missing"));
  if (d2)
    return Promise.reject(new s$8("trigger-action:invalid-action", "Action is disabled"));
  if (g3 === n2.id)
    return w(u3).catch(f$5);
  if (g3 === l$2.id)
    return f(u3);
  if (g3 === m$1.id)
    return u3.browseClusterEnabled = !u3.browseClusterEnabled, u3.featureMenuOpen = u3.browseClusterEnabled, Promise.resolve();
  if (g3 === r.id) {
    u3.visible = false;
    const { selectedFeature: t3 } = u3;
    if (!t3)
      return Promise.reject(new s$8(`trigger-action:${r.id}`, "selectedFeature is required", { selectedFeature: t3 }));
    const { sourceLayer: r$12 } = t3;
    return r$12 ? r$12.remove(t3) : c6?.graphics.remove(t3), Promise.resolve();
  }
  return Promise.resolve();
};
function l$1(e3) {
  const { selectedFeature: t2, location: r2, view: o2 } = e3;
  return o2 ? t2 ?? r2 ?? null : null;
}
function d(e3) {
  return !!e3 && e3.isAggregate && "cluster" === e3.sourceLayer?.featureReduction?.type;
}
async function g2(e3, t2) {
  if ("3d" !== t2?.type || !e3 || "esri.Graphic" !== e3.declaredClass)
    return true;
  const r2 = t2.getViewForGraphic(e3);
  if (r2 && "whenGraphicBounds" in r2) {
    let t3 = null;
    try {
      t3 = await r2.whenGraphicBounds(e3, { useViewElevation: true });
    } catch (o2) {
    }
    return !t3 || !t3.boundingBox || t3.boundingBox[0] === t3.boundingBox[3] && t3.boundingBox[1] === t3.boundingBox[4] && t3.boundingBox[2] === t3.boundingBox[5];
  }
  return true;
}
async function w(t2) {
  const { location: r2, selectedFeature: i2, view: n$12, zoomFactor: a2 } = t2, s4 = l$1(t2);
  if (!n$12 || !s4) {
    const t3 = new s$8("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: s4, view: n$12 });
    throw c5().error(t3), t3;
  }
  const u3 = n$12.scale / a2, d2 = t2.selectedFeature?.geometry, w2 = d2 ?? r2, f2 = null != w2 && "point" === w2.type && await g2(i2, n$12);
  n2.active = true, n2.disabled = true;
  try {
    await t2.zoomTo({ target: { target: s4, scale: f2 ? u3 : void 0 } });
  } catch (v3) {
    const t3 = new s$8("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: i2 });
    c5().error(t3);
  } finally {
    n2.active = false, n2.disabled = false, t2.zoomToLocation = null, f2 && (t2.location = w2);
  }
}
async function f(t2) {
  const { selectedFeature: r2, view: o2 } = t2;
  if ("2d" !== o2?.type) {
    const t3 = new s$8("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: o2 });
    throw c5().error(t3), t3;
  }
  if (!r2 || !d(r2)) {
    const t3 = new s$8("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: r2 });
    throw c5().error(t3), t3;
  }
  const [n3, a2] = await p$1(o2, r2);
  l$2.active = true, l$2.disabled = true;
  const { extent: s4 } = await n3.queryExtent(a2);
  s4 && await t2.zoomTo({ target: s4 }), l$2.active = false, l$2.disabled = false;
}
async function v2(e3) {
  const { view: t2, selectedFeature: r2 } = e3;
  if (!t2 || !r2)
    return;
  const [o2, i2] = await p$1(t2, r2), { extent: n3 } = await o2.queryExtent(i2);
  e3.selectedClusterBoundaryFeature.geometry = n3, t2.graphics.add(e3.selectedClusterBoundaryFeature);
}
async function m(e3) {
  const { selectedFeature: t2, view: r2 } = e3;
  if (!r2 || !t2)
    return;
  const [o2, i2] = await p$1(r2, t2);
  m$1.active = true, m$1.disabled = true;
  const { features: a2 } = await o2.queryFeatures(i2);
  m$1.active = false, m$1.disabled = false, m$1.value = true, e3?.open({ features: [t2].concat(a2), featureMenuOpen: true });
}
async function p$1(e3, t2) {
  const r2 = await e3.whenLayerView(t2.sourceLayer), o2 = r2.createQuery(), i2 = t2.getObjectId();
  return o2.aggregateIds = null != i2 ? [i2] : [], [r2, o2];
}
function y(e3) {
  m$1.value = false;
  const t2 = e3.features.filter((e4) => d(e4));
  t2.length && (e3.features = t2);
}
const H = () => [n2.clone()], B = () => [l$2.clone(), m$1.clone()];
let R$1 = null;
function U(e3, t2) {
  return "building-scene" === e3 || "2d" === t2 && ("map-image" === e3 || "tile" === e3 || "imagery" === e3 || "imagery-tile" === e3);
}
let G = class extends t$5(l$3) {
  constructor(e3) {
    super(e3), this._pendingPromises = new s$c(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this._locationScaleHandle = null, this.actions = new i(), this.activeFeature = null, this.autoCloseEnabled = false, this.autoOpenEnabled = true, this.browseClusterEnabled = false, this.content = null, this.defaultPopupTemplateEnabled = false, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = false, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = true, this.includeDefaultActions = true, this.selectedClusterBoundaryFeature = new c$b({ symbol: new S$2({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = false, this.view = null, this.visible = false, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = k$3(async (e4) => {
      const { view: t2 } = this, i2 = this.selectedFeature?.geometry?.type, s4 = this.location ?? e4;
      if ("mesh" !== i2 && t2 && s4 && this.selectedFeature)
        if ("point" !== i2)
          try {
            const { pendingFeatures: e5 } = await this._fetchFeaturesWithController({ mapPoint: s4 }), i3 = (await Promise.all(e5)).flat().filter(Boolean);
            if (!i3.length)
              return;
            if (i3.length !== this.features.length) {
              const e6 = this._getHighlightLayer(this.selectedFeature), t3 = "imagery" === e6?.type ? void 0 : e6 && "objectIdField" in e6 ? e6.objectIdField || o$3 : null;
              if (t3) {
                const s5 = this.selectedFeature.getObjectId(), r3 = i3.findIndex((i4) => {
                  const r4 = this._getHighlightLayer(i4);
                  return r4?.uid === e6?.uid && i4.attributes[t3] === s5;
                });
                this.features = i3, this.selectedFeatureIndex = r3;
              }
            }
            const r2 = i3[this.selectedFeatureIndex]?.geometry, o2 = ("mesh" !== r2?.type ? r2 : null) ?? this.selectedFeature.geometry, a2 = o2 ? U$3(o2, t2.spatialReference) : null;
            if (!a2)
              return;
            R$1 || (R$1 = await import("./chunk-mWJZoVFa.js")), await R$1.intersects(a2, s4) || (this.location = (await R$1.nearestCoordinate(a2, s4)).coordinate ?? s4);
          } catch (o2) {
            b$4(o2) || s$9.getLogger(this).error(o2);
          }
        else
          this.location = n$9(this.selectedFeature.geometry) ?? s4;
    });
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), d$5(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), d$5(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), d$5(() => this.view?.animation?.state, (e3) => this._animationStateChange(e3)), d$5(() => this.location, (e3) => this._locationChange(e3)), d$5(() => this.selectedFeature, (e3) => this._selectedFeatureChange(e3)), d$5(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), d$5(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), d$5(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e3) => u2({ event: e3, viewModel: this, view: this.view })), p$9(() => !this.waitingForResult, () => this._waitingForResultChange(), C$4), d$5(() => [this.features, this.view?.map, this.view?.spatialReference, this.view?.timeZone], () => this._updateFeatureVMs()), d$5(() => this.view?.scale, () => this._viewScaleChange()), p$9(() => !this.visible, () => this.browseClusterEnabled = false), d$5(() => this.browseClusterEnabled, (e3) => e3 ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = false, this.view = null, this._locationScaleHandle?.remove(), this._locationScaleHandle = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e3 = this._get("allActions") || new i();
    e3.removeAll();
    const { actions: t2, defaultActions: i$12, defaultPopupTemplateEnabled: s4, includeDefaultActions: r2, selectedFeature: o2 } = this, a2 = r2 ? i$12.concat(t2) : t2, n3 = o2 && ("function" == typeof o2.getEffectivePopupTemplate && o2.getEffectivePopupTemplate(s4) || o2.popupTemplate), l4 = n3?.actions, h4 = n3?.overwriteActions ? l4 : l4?.concat(a2) ?? a2;
    return h4?.filter(Boolean).forEach((t3) => e3.add(t3)), e3;
  }
  get defaultActions() {
    const e3 = this._get("defaultActions") || new i();
    return e3.removeAll(), e3.addMany(d(this.selectedFeature) ? B() : H()), e3;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(e3) {
    const t2 = e3 || [];
    this._set("features", t2);
    const { pendingPromisesCount: i2, promiseCount: s4, selectedFeatureIndex: r2 } = this, o2 = s4 && t2.length;
    o2 && i2 && -1 === r2 ? this.selectedFeatureIndex = 0 : o2 && -1 !== r2 || (this.selectedFeatureIndex = t2.length ? 0 : -1);
  }
  set location(e3) {
    let t2 = e3;
    const i2 = this.view?.spatialReference?.isWebMercator, s4 = e3?.spatialReference?.isWGS84;
    s4 && i2 && (t2 = d$8(e3)), this._set("location", t2);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(e3) {
    this._pendingPromises.clear(), this.features = [], Array.isArray(e3) && e3.length ? (this._set("promises", e3), (e3 = e3.slice(0)).forEach((e4) => this._pendingPromises.add(e4)), e3.reduce((e4, t2) => e4.finally(() => t2.then((e5) => {
      this._pendingPromises.has(t2) && this._updateFeatures(e5);
    }).finally(() => this._pendingPromises.delete(t2)).catch(() => {
    })), Promise.resolve())) : this._set("promises", []);
  }
  get selectedFeature() {
    const { features: e3, selectedFeatureIndex: t2 } = this;
    if (-1 === t2)
      return null;
    return e3[t2] || null;
  }
  get selectedFeatureIndex() {
    const e3 = this._get("selectedFeatureIndex");
    return "number" == typeof e3 ? e3 : -1;
  }
  set selectedFeatureIndex(e3) {
    const { featureCount: t2 } = this;
    e3 = isNaN(e3) || e3 < -1 || !t2 ? -1 : (e3 + t2) % t2, this.activeFeature = null, this._set("selectedFeatureIndex", e3);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  get waitingForContents() {
    return this.featureViewModels.some((e3) => e3.waitingForContent);
  }
  get waitingForResult() {
    return !(!(!!this._fetchFeaturesController || this.pendingPromisesCount > 0) || 0 !== this.featureCount);
  }
  centerAtLocation() {
    const { view: e3 } = this, t2 = l$1(this);
    return t2 && e3 ? this.callGoTo({ target: { target: t2, scale: e3.scale } }) : Promise.reject(new s$8("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: t2, view: e3 }));
  }
  zoomTo(e3) {
    return this.callGoTo(e3);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(e3, t2) {
    const { view: i2 } = this;
    if (!i2 || !e3)
      throw new s$8("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: e3, view: i2 });
    return i2.fetchPopupFeatures(e3, { pointerType: t2?.event?.pointerType, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: t2?.signal });
  }
  open(e3) {
    const t2 = { updateLocationEnabled: false, promises: [], fetchFeatures: false, ...e3, visible: true }, { fetchFeatures: i2 } = t2;
    delete t2.fetchFeatures, i2 && this._setFetchFeaturesPromises(t2.location);
    const s4 = ["actionsMenuOpen", "collapsed"];
    for (const r2 of s4)
      delete t2[r2];
    this.set(t2);
  }
  triggerAction(e3) {
    const t2 = this.allActions.at(e3);
    t2 && !t2.disabled && this.emit("trigger-action", { action: t2 });
  }
  next() {
    return this.selectedFeatureIndex++, this;
  }
  previous() {
    return this.selectedFeatureIndex--, this;
  }
  disableClusterBrowsing() {
    y(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: e3, selectedFeature: t2 } = this;
    "2d" === e3?.type ? d(t2) ? (await v2(this), await m(this)) : s$9.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t2) : s$9.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t2);
  }
  handleViewClick(e3) {
    this.autoOpenEnabled && this._fetchFeaturesAndOpen(e3);
  }
  _animationStateChange(e3) {
    this.zoomToLocation || (n2.disabled = "waiting-for-target" === e3);
  }
  _clearBrowsedClusterGraphics() {
    const e3 = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(q$2);
    this.view?.graphics?.removeMany(e3), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (d(this.selectedFeature))
      return this.browseClusterEnabled = false, this.visible = false, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e3) {
    const { selectedFeature: t2, updateLocationEnabled: i2 } = this;
    i2 && e3 && (!t2 || t2.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: e3, featureCount: t2, featurePage: i2, featuresPerPage: s4, featureViewModels: r2 } = this;
    if (null === i2)
      return;
    const o2 = ((i2 - 1) * s4 + t2) % t2, a2 = o2 + s4;
    r2.slice(o2, a2).forEach((t3, i3) => {
      t3 && (t3.graphic ??= e3[o2 + i3]);
    });
  }
  async _selectedFeatureChange(e3) {
    const { location: t2, updateLocationEnabled: i2, view: s4 } = this;
    if (e3 && s4) {
      if (this.browseClusterEnabled) {
        if (this._selectedClusterFeature && (s4.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), d(e3))
          return;
        return e3.symbol = await L$1(e3), this._selectedClusterFeature = e3, void s4.graphics.add(this._selectedClusterFeature);
      }
      if (e3.symbol = await L$1(e3), !i2 && t2 || !e3.geometry) {
        if (i2 && !e3.geometry) {
          await this.centerAtLocation();
          const e4 = s4.center?.clone();
          e4 && (this.location = e4);
        }
      } else
        this.location = n$9(e3.geometry);
    }
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = false);
  }
  async _setFetchFeaturesPromises(e3) {
    const { pendingFeatures: t2 } = await this._fetchFeaturesWithController({ mapPoint: e3 });
    this.promises = t2;
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e3) => e3 && !e3.destroyed && e3.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: e3, features: t2, featureViewModels: i2, view: s4 } = this;
    if (d(e3) || (this.browseClusterEnabled = false), this._destroyFeatureVMs(), !t2?.length)
      return;
    const r2 = i2.slice(0), o2 = [];
    t2.forEach((t3, i3) => {
      if (!t3)
        return;
      let a2 = null;
      if (r2.some((e4, i4) => (e4 && e4.graphic === t3 && (a2 = e4, r2.splice(i4, 1)), !!a2)), a2)
        o2[i3] = a2;
      else {
        const r3 = new Y({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: s4?.spatialReference, graphic: t3 === e3 ? t3 : null, location: this.location, map: s4?.map, view: s4 });
        o2[i3] = r3;
      }
    }), r2.forEach((e4) => e4 && !e4.destroyed && e4.destroy()), this._set("featureViewModels", o2);
  }
  async _getScreenPoint(e3, t2) {
    const { view: i2 } = this;
    await i2?.when();
    const s4 = e3?.spatialReference, r2 = i2?.spatialReference;
    return s4 && r2 ? (await I$6(s4, r2, null, t2), i2.toScreen(e3)) : null;
  }
  _cancelFetchingFeatures() {
    const e3 = this._fetchFeaturesController;
    e3 && e3.abort(), this._fetchFeaturesController = null;
  }
  async _projectScreenPointAndFetchFeatures({ mapPoint: e3, screenPoint: t2, event: i2, signal: s4 }) {
    return this.fetchFeatures(t2 ?? await this._getScreenPoint(e3 ?? this.location, { signal: s4 }), { signal: s4, event: i2 });
  }
  _fetchFeaturesWithController({ mapPoint: e3, screenPoint: t2, event: i2 }) {
    this._cancelFetchingFeatures();
    const s4 = new AbortController(), { signal: r2 } = s4;
    this._fetchFeaturesController = s4;
    const o2 = this._projectScreenPointAndFetchFeatures({ mapPoint: e3, screenPoint: t2, signal: r2, event: i2 });
    return o2.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null;
    }), o2;
  }
  async _fetchFeaturesAndOpen(e3) {
    const { mapPoint: t2, screenPoint: i2 } = e3, { view: s4 } = this;
    this._locationScaleHandle?.remove(), this._locationScaleHandle = d$5(() => this.view?.scale, () => this._debouncedLocationUpdate(t2).catch((e4) => {
      b$4(e4) || s$9.getLogger(this).error(e4);
    }));
    const { pendingFeatures: o2 } = await this._fetchFeaturesWithController({ mapPoint: t2, screenPoint: i2, event: e3 });
    s4?.popup && "open" in s4.popup && s4.popup.open({ location: t2 ?? void 0, promises: o2 });
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = false);
  }
  async _getLayerView(e3, t2) {
    return await e3.when(), e3.whenLayerView(t2);
  }
  _getHighlightLayer(e3) {
    const { layer: t2, sourceLayer: i2 } = e3;
    return i2 && "layer" in i2 && i2.layer ? i2.layer : "map-notes" === i2?.type || "subtype-group" === i2?.type ? i2 : t2;
  }
  _getHighlightTarget(e3, t2, i2) {
    if (U(t2.type, i2))
      return e3;
    const s4 = e3.getObjectId();
    if (null != s4)
      return s4;
    const r2 = "imagery" === t2.type ? void 0 : "objectIdField" in t2 ? t2.objectIdField || o$3 : null, o2 = e3.attributes;
    return o2 && r2 && o2[r2] || e3;
  }
  _mapIncludesLayer(e3) {
    return !!this.view?.map?.allLayers?.includes(e3);
  }
  async _highlightActiveFeature() {
    const e3 = "highlight-active-feature";
    this.removeHandles(e3);
    const { highlightEnabled: t2, view: i2, activeFeature: s4, visible: r2 } = this;
    if (!(s4 && i2 && t2 && r2))
      return;
    const o2 = this._getHighlightLayer(s4);
    if (!(o2 && o2 instanceof b$5 && this._mapIncludesLayer(o2)))
      return;
    const a2 = this._getLayerView(i2, o2);
    this._highlightActiveFeaturePromise = a2;
    const n3 = await a2;
    if (!(n3 && n$c(n3) && this._highlightActiveFeaturePromise === a2 && this.activeFeature && this.highlightEnabled))
      return;
    const l4 = n3.highlight(this._getHighlightTarget(s4, o2, i2.type));
    this.addHandles(l4, e3);
  }
  async _highlightSelectedFeature() {
    const e3 = "highlight-selected-feature";
    this.removeHandles(e3);
    const { selectedFeature: t2, highlightEnabled: i2, view: s4, visible: r2 } = this;
    if (!(t2 && s4 && i2 && r2))
      return;
    const o2 = this._getHighlightLayer(t2);
    if (!(o2 && o2 instanceof b$5 && this._mapIncludesLayer(o2)))
      return;
    const a2 = this._getLayerView(s4, o2);
    this._highlightSelectedFeaturePromise = a2;
    const n3 = await a2;
    if (!(n3 && n$c(n3) && this._highlightSelectedFeaturePromise === a2 && this.selectedFeature && this.highlightEnabled && this.visible))
      return;
    const l4 = n3.highlight(this._getHighlightTarget(t2, o2, s4.type));
    this.addHandles(l4, e3);
  }
  _updateFeatures(e3) {
    const { features: t2 } = this, i2 = e3.filter((e4) => !t2.includes(e4));
    i2?.length && (this.features = t2.concat(i2));
  }
};
e$8([y$6()], G.prototype, "_fetchFeaturesController", void 0), e$8([y$6({ type: i })], G.prototype, "actions", void 0), e$8([y$6({ readOnly: true })], G.prototype, "active", null), e$8([y$6()], G.prototype, "activeFeature", void 0), e$8([y$6({ readOnly: true })], G.prototype, "allActions", null), e$8([y$6()], G.prototype, "autoCloseEnabled", void 0), e$8([y$6()], G.prototype, "autoOpenEnabled", void 0), e$8([y$6()], G.prototype, "browseClusterEnabled", void 0), e$8([y$6()], G.prototype, "content", void 0), e$8([y$6({ type: i, readOnly: true })], G.prototype, "defaultActions", null), e$8([y$6({ type: Boolean })], G.prototype, "defaultPopupTemplateEnabled", void 0), e$8([y$6({ readOnly: true })], G.prototype, "featureCount", null), e$8([y$6()], G.prototype, "featurePage", void 0), e$8([y$6({ value: [] })], G.prototype, "features", null), e$8([y$6()], G.prototype, "featuresPerPage", void 0), e$8([y$6()], G.prototype, "featureMenuOpen", void 0), e$8([y$6()], G.prototype, "featureViewModelAbilities", void 0), e$8([y$6({ readOnly: true })], G.prototype, "featureViewModels", void 0), e$8([y$6()], G.prototype, "highlightEnabled", void 0), e$8([y$6()], G.prototype, "includeDefaultActions", void 0), e$8([y$6({ type: x$4 })], G.prototype, "location", null), e$8([y$6({ readOnly: true })], G.prototype, "pendingPromisesCount", null), e$8([y$6({ readOnly: true })], G.prototype, "promiseCount", null), e$8([y$6()], G.prototype, "promises", null), e$8([y$6({ readOnly: true })], G.prototype, "selectedClusterBoundaryFeature", void 0), e$8([y$6({ value: null, readOnly: true })], G.prototype, "selectedFeature", null), e$8([y$6({ value: -1 })], G.prototype, "selectedFeatureIndex", null), e$8([y$6({ readOnly: true })], G.prototype, "selectedFeatureViewModel", null), e$8([y$6({ readOnly: true })], G.prototype, "state", null), e$8([y$6()], G.prototype, "title", void 0), e$8([y$6()], G.prototype, "updateLocationEnabled", void 0), e$8([y$6()], G.prototype, "view", void 0), e$8([y$6()], G.prototype, "visible", void 0), e$8([y$6({ readOnly: true })], G.prototype, "waitingForContents", null), e$8([y$6({ readOnly: true })], G.prototype, "waitingForResult", null), e$8([y$6()], G.prototype, "zoomFactor", void 0), e$8([y$6()], G.prototype, "zoomToLocation", void 0), e$8([y$6()], G.prototype, "centerAtLocation", null), G = e$8([c$c("esri.widgets.Features.FeaturesViewModel")], G);
const z = G;
let s$1 = class s2 extends S$1 {
  constructor() {
    super(...arguments), this.actionBar = true, this.closeButton = true, this.collapseButton = false, this.featureNavigation = true, this.flow = true, this.heading = true, this.spinner = true;
  }
};
e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "actionBar", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "closeButton", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "collapseButton", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "featureNavigation", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "flow", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "heading", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s$1.prototype, "spinner", void 0), s$1 = e$8([c$c("esri.widgets.Features.FeaturesVisibleElements")], s$1);
const l3 = s$1;
const O = "selected-index", R = 0, j2 = "features-spinner", k$1 = 50;
let T2 = class extends n$3(O$1) {
  constructor(e3, i$12) {
    super(e3, i$12), this._featureMenuIntersectionObserverCallback = ([e4]) => {
      e4?.isIntersecting && null != this.viewModel.featurePage && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._featureMenuIntersectionObserverNode = null, this._focusOn = null, this._spinner = null, this._feature = null, this._relatedRecordsFlowItems = new V(), this._relatedRecordsWidget = new d$1({ flowItems: this._relatedRecordsFlowItems }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this._actionBarMenuNode = null, this.collapsed = false, this.icon = null, this.featureNavigationTop = false, this.headerActions = new i(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = false, this.viewModel = new z(), this.visibleElements = new l3(), this._renderAction = (e4, t2) => {
      const i2 = this._getActionTitle(e4), { type: o2, active: s4, uid: r2, disabled: n3, indicator: a2 } = e4;
      return e4.visible ? n$b("calcite-action", { active: "toggle" === o2 && e4.value, appearance: "solid", bind: this, "data-action-uid": r2, disabled: n3, icon: this._getActionIcon(e4), indicator: a2, key: `action-${t2}`, loading: s4, onclick: this._triggerAction, scale: "s", text: i2, title: this._hideActionText ? i2 : void 0 }, this._getFallbackIcon(e4)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = true, this._focusOn = "menu-flow-item";
    }, this._previousFeature = () => {
      this.viewModel.selectedFeatureIndex--;
    }, this._nextFeature = () => {
      this.viewModel.selectedFeatureIndex++;
    }, this._handleFeatureMenuBack = () => {
      this.featureMenuOpen && (this._focusOn = "root-flow-item", this.featureMenuOpen = false);
    }, this._focusFlowItemNode = (e4) => {
      this._focusOn === e4 && requestAnimationFrame(async () => {
        switch (e4) {
          case "menu-flow-item":
            await this._featureMenuViewportNode?.setFocus();
            break;
          case "root-flow-item":
            await this._rootFlowItemNode?.setFocus();
        }
        this._focusOn = null;
      });
    }, this._focusFlowItemNodeThrottled = e$7(this._focusFlowItemNode, k$1), this._displaySpinnerThrottled = e$7(() => this._displaySpinner(), R), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, this._focusFlowItemNodeThrottled, d$5(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), d$5(() => this.viewModel?.active, (e4) => this._relatedRecordsWidget.closed = !e4), d$5(() => this.visibleElements?.closeButton, (e4) => this._relatedRecordsWidget.closable = e4), d$5(() => this.visibleElements?.spinner, (e4) => this._spinnerEnabledChange(e4)), d$5(() => this.viewModel?.view, (e4, t2) => this._viewChange(e4, t2)), d$5(() => this.viewModel?.view?.ready, (e4, t2) => this._viewReadyChange(e4 ?? false, t2 ?? false)), d$5(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), d$5(() => this.viewModel?.screenLocation, () => this._closeOpenActionMenu()), d$5(() => this.selectedFeatureWidget, () => this._destroyRelatedRecordsFlowItemWidgets()), d$5(() => {
      const e4 = this.selectedFeatureWidget?.viewModel;
      return [e4?.title, e4?.state];
    }, () => this._setTitleFromFeatureWidget()), d$5(() => {
      const e4 = this.selectedFeatureWidget?.viewModel;
      return [e4?.content, e4?.state];
    }, () => this._setContentFromFeatureWidget()), d$5(() => this.viewModel?.featureViewModels, () => this._featureMenuViewportScrollTop()), this._relatedRecordsWidget.on("close", () => this.close()), this._relatedRecordsWidget.on("exit", () => this._destroyRelatedRecordsFlowItemWidgets()), this._relatedRecordsWidget.on("open-related-feature", ({ feature: e4 }) => this._openRelatedFeature(e4))]);
  }
  loadDependencies() {
    return r$1({ action: () => import("@esri/calcite-components/dist/components/calcite-action.js"), "action-bar": () => import("@esri/calcite-components/dist/components/calcite-action-bar.js"), "action-group": () => import("@esri/calcite-components/dist/components/calcite-action-group.js"), button: () => import("@esri/calcite-components/dist/components/calcite-button.js"), flow: () => import("@esri/calcite-components/dist/components/calcite-flow.js"), "flow-item": () => import("@esri/calcite-components/dist/components/calcite-flow-item.js"), list: () => import("@esri/calcite-components/dist/components/calcite-list.js"), "list-item": () => import("@esri/calcite-components/dist/components/calcite-list-item.js"), "list-item-group": () => import("@esri/calcite-components/dist/components/calcite-list-item-group.js"), loader: () => import("@esri/calcite-components/dist/components/calcite-loader.js") });
  }
  destroy() {
    this._destroyRelatedRecordsFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver?.disconnect(), this._relatedRecordsWidget?.destroy();
  }
  get _hideActionText() {
    if (!this.responsiveActionsEnabled)
      return false;
    const e3 = this.view?.widthBreakpoint;
    return "xsmall" === e3 || "small" === e3 || "medium" === e3;
  }
  get _featureNavigationVisible() {
    return this.viewModel.active && this.viewModel.featureCount > 1 && this.visibleElements.featureNavigation;
  }
  get _isCollapsed() {
    return this._collapseEnabled && this.collapsed;
  }
  get _collapseEnabled() {
    return this.visibleElements.collapseButton && !!this.title && !!this.content;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e3) {
    this.viewModel.content = e3;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e3) {
    this.viewModel.featureMenuOpen = e3;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e3) {
    this.viewModel.features = e3;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e3) {
    this.viewModel.location = e3;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e3) {
    this._overrideIfSome("label", e3);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e3) {
    this.viewModel.promises = e3;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e3) {
    this.viewModel.selectedFeatureIndex = e3;
  }
  get selectedFeatureWidget() {
    const { _feature: e3, headingLevel: t2, _relatedRecordsFlowItems: i2 } = this, { selectedFeatureViewModel: o2 } = this.viewModel, s4 = { title: false };
    return o2 ? (e3 ? (e3.viewModel = o2, e3.visibleElements = s4) : this._feature = new x({ flowItems: i2, headingLevel: t2 + 1, viewModel: o2, visibleElements: s4 }), this._feature) : null;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e3) {
    this.viewModel.updateLocationEnabled = e3;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e3) {
    this.viewModel.view = e3;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e3) {
    this.viewModel.visible = e3;
  }
  blur() {
    const { active: e3 } = this.viewModel;
    e3 ? this._rootFlowItemNode?.blur() : s$9.getLogger(this).warn("Features can only be blurred when currently active.");
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.viewModel.visible = false;
  }
  fetchFeatures(e3, t2) {
    return this.viewModel.fetchFeatures(e3, t2);
  }
  focus() {
    const { active: e3 } = this.viewModel;
    e3 ? this._setFocusOn() : s$9.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(e3) {
    this.removeHandles(O);
    const t2 = { collapsed: e3?.collapsed ?? false };
    this.set(t2), this.viewModel.open(e3), this.addHandles(p$9(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), { once: true }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(e3) {
    return this.viewModel.triggerAction(e3);
  }
  render() {
    return n$b("div", { bind: this, class: this.classes(n$2.base, e$a.widget, e$a.panel), onkeydown: this._onMainKeydown }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? n$b("div", { class: n$2.header, key: "header-actions" }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : n$b("div", { class: n$2.footer, key: "footer-actions", slot: "footer" }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const { messages: e3, viewModel: t2 } = this, { featureCount: i2, selectedFeatureIndex: o2, pendingPromisesCount: s4 } = t2;
    return n$b("calcite-action", { appearance: "solid", bind: this, icon: "list", key: "feature-menu-button", label: e3.selectFeature, loading: s4 > 0, onclick: this._openFeatureMenu, scale: "s", text: s$6(e3.pageText, { index: u$6(o2 + 1), total: u$6(i2) }), textEnabled: true, title: e3.selectFeature });
  }
  _renderPagination() {
    const { previous: e3, next: t2 } = this.messagesCommon.pagination;
    return n$b("calcite-action-bar", { class: n$2.paginationActionBar, expandDisabled: true, key: "pagination-action-bar", layout: "horizontal", overflowActionsDisabled: true, scale: "s" }, n$b("calcite-action-group", { scale: "s" }, n$b("calcite-action", { appearance: "solid", class: n$2.paginationPrevious, icon: "chevron-left", iconFlipRtl: true, label: e3, onclick: this._previousFeature, scale: "s", text: e3, title: e3 }), n$b("calcite-action", { appearance: "solid", icon: "chevron-right", iconFlipRtl: true, label: t2, onclick: this._nextFeature, scale: "s", text: t2, title: t2 })));
  }
  _renderFeatureMenuItem(e3) {
    const { selectedFeatureViewModel: t2, featureViewModels: i2 } = this.viewModel, o2 = e3 === t2, s4 = i2.indexOf(e3);
    return n$b("calcite-list-item", { bind: this, "data-feature-index": s4, key: `feature-menu-item-${e3.uid}`, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onmouseleave: this._removeActiveFeature, onmouseover: this._setActiveFeature, selected: o2, onCalciteListItemSelect: this._selectFeature }, n$b("span", { innerHTML: e3.title || this.messagesCommon.untitled, slot: "content" }));
  }
  _groupResultsByLayer() {
    const { featureViewModels: e3 } = this.viewModel, t2 = /* @__PURE__ */ new Map();
    return e3.forEach((e4) => {
      const i2 = e4?.graphic;
      if (!i2)
        return;
      const o2 = i2.sourceLayer ?? i2.layer, s4 = t2.get(o2) ?? [];
      t2.set(o2, [...s4, e4]);
    }), t2;
  }
  _renderFeatureMenu() {
    const { featureViewModels: e3 } = this.viewModel, t2 = this._groupResultsByLayer();
    return e3.length ? n$b("calcite-list", { selectionAppearance: "icon", selectionMode: "single" }, Array.from(t2.keys()).map((e4) => n$b("calcite-list-item-group", { heading: e4?.title ?? this.messagesCommon.untitled, key: e4?.uid || "untitled" }, t2.get(e4)?.map((e5) => this._renderFeatureMenuItem(e5))))) : null;
  }
  _renderHeaderAction(e3, t2) {
    return e3.visible ? n$b("calcite-action", { active: "toggle" === e3.type && e3.value, appearance: "solid", bind: this, "data-action-uid": e3.uid, disabled: e3.disabled, icon: e3.icon || "", indicator: e3.indicator, key: `header-action-${t2}`, loading: e3.active, onclick: this._triggerHeaderAction, scale: "m", slot: "header-actions-end", text: e3.title || "", title: e3.title || "" }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((e3, t2) => this._renderHeaderAction(e3, t2)).toArray();
  }
  _renderContentFeature() {
    const { headingLevel: e3, visibleElements: t2, _isCollapsed: i2, _collapseEnabled: o2, featureNavigationTop: s4 } = this, { title: r2, active: n3 } = this.viewModel, a2 = t2.heading && r2 ? r2 : "";
    return n$b("calcite-flow-item", { afterCreate: this._storeRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, class: this.classes({ [n$2.contentFeature]: true, [n$2.flowItemCollapsed]: i2 }), closable: t2.closeButton, closed: !n3, collapsed: i2, collapseDirection: s4 ? "down" : "up", collapsible: o2, headingLevel: e3, key: "root-flow-item", onCalciteFlowItemClose: this.close, onCalciteFlowItemToggle: this._handleCollapseToggle }, a2 ? n$b(e$b, { class: this.classes(n$2.featuresHeading, e$a.heading), innerHTML: a2, key: "header-content", level: this.headingLevel, slot: "header-content" }) : null, this._renderHeaderActions(), this._renderActionBar(), i2 ? null : n$b("div", { class: this.classes(n$2.container, n$2.contentContainer) }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const { viewModel: e3, featureMenuOpen: t2, messages: i2, messagesCommon: o2 } = this, { active: s4, featureViewModels: r2, pendingPromisesCount: n3 } = e3;
    return t2 ? n$b("calcite-flow-item", { afterCreate: this._storeFeatureMenuFlowItemNode, afterUpdate: this._focusFeatureMenuFlowItemNode, bind: this, closable: false, closed: !s4, description: s$6(i2.total, { total: r2.length }), heading: i2.selectFeature, key: "feature-menu", loading: e3.waitingForContents, onCalciteFlowItemBack: (e4) => {
      e4.preventDefault(), this._handleFeatureMenuBack();
    } }, n3 > 0 ? n$b("calcite-loader", { class: n$2.loader, inline: true, key: "feature-menu-loader", label: o2.loading, scale: "m", slot: "header-actions-end" }) : null, n$b("div", { class: n$2.container }, this._renderFeatureMenu()), n$b("div", { afterCreate: this._featureMenuIntersectionObserverCreated, bind: this, class: n$2.featureMenuObserver }), n$b("calcite-button", { appearance: "transparent", onclick: this._handleFeatureMenuBack, slot: "footer-actions", width: "full" }, o2.back)) : null;
  }
  _renderContentContainer() {
    const e3 = [this._renderContentFeature(), this._renderFeatureMenuContainer(), this._relatedRecordsWidget.render()];
    return this.visibleElements.flow ? n$b("calcite-flow", { key: "content-container" }, e3) : e3;
  }
  _getFallbackIcon(e3) {
    const { className: t2, icon: i2 } = e3;
    if (i2)
      return null;
    const o2 = e$6({ action: e3, feature: this.selectedFeature }), s4 = { [n$2.icon]: !!t2, [n$2.actionImage]: !!o2 };
    return t2 && (s4[t2] = true), o2 || t2 ? n$b("span", { "aria-hidden": "true", class: this.classes(n$2.icon, s4), key: "icon", styles: n$8(o2) }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? n$b("calcite-action-bar", { expandDisabled: true, expanded: !this._hideActionText, key: "header-action-bar", scale: "s", slot: "action-bar" }, n$b("calcite-action-group", { afterCreate: (e3) => this._actionBarMenuNode = e3, overlayPositioning: "fixed", scale: "s" }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const e3 = this.viewModel?.content;
    return e3 ? "string" == typeof e3 ? n$b("div", { class: t$3.contentNode, innerHTML: e3, key: e3 }) : this.renderNodeContent(e3) : null;
  }
  _setFocusOn() {
    this.renderNow(), requestAnimationFrame(() => {
      this._focusOn = this.featureMenuOpen ? "menu-flow-item" : "root-flow-item";
    });
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  async _openRelatedFeature(e3) {
    await e3.viewModel.updateGeometry();
    const t2 = e3.graphic, i2 = t2?.geometry;
    if (null == i2 || null == t2)
      return;
    this._destroyRelatedRecordsFlowItemWidgets(), await this.viewModel.zoomTo({ target: i2 });
    const o2 = n$9(i2);
    this.open({ features: [t2], location: null != o2 ? o2 : void 0 });
  }
  _focusRootFlowItemNode() {
    this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _focusFeatureMenuFlowItemNode() {
    this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _storeRootFlowItemNode(e3) {
    this._rootFlowItemNode = e3, this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _storeFeatureMenuFlowItemNode(e3) {
    this._featureMenuViewportNode = e3, this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _setActiveFeature(e3) {
    const { viewModel: t2 } = this, i2 = e3.currentTarget["data-feature-index"];
    t2.activeFeature = t2.features?.[i2] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _selectFeature(e3) {
    const t2 = e3.currentTarget["data-feature-index"];
    isNaN(t2) || (this.viewModel.selectedFeatureIndex = t2), this._handleFeatureMenuBack();
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(e3) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(e3), this._featureMenuIntersectionObserverNode = e3;
  }
  _getActionIcon(e3) {
    return e3.icon ? e3.icon : e3.image || e3.className ? void 0 : "question";
  }
  _getActionTitle(e3) {
    const { messages: t2, selectedFeature: i2, messagesCommon: o2 } = this, { id: s4 } = e3, r2 = i2?.attributes, n3 = e3.title ?? "", a2 = "zoom-to-feature" === s4 ? s$6(n3, { messages: t2 }) : "remove-selected-feature" === s4 ? s$6(n3, { messages: o2 }) : "zoom-to-clustered-features" === s4 || "browse-clustered-features" === s4 ? s$6(n3, { messages: t2 }) : e3.title;
    return a2 && r2 ? s$6(a2, r2) : a2 ?? "";
  }
  _onMainKeydown(e3) {
    const { key: t2 } = e3;
    "ArrowLeft" === t2 && (e3.stopPropagation(), this._handleFeatureMenuBack(), this.previous()), "ArrowRight" === t2 && (e3.stopPropagation(), this._handleFeatureMenuBack(), this.next());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && this._featureMenuViewportNode.scrollContentTo({ top: 0 });
  }
  _setContentFromFeatureWidget() {
    const { selectedFeatureWidget: e3 } = this;
    e3 && (this.viewModel.content = e3);
  }
  _setTitleFromFeatureWidget() {
    const { selectedFeatureWidget: e3, messagesCommon: t2 } = this, i2 = e3?.viewModel;
    e3 && (this.viewModel.title = "error" === i2?.state ? t2?.errorMessage : i2?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const e3 = d$5(() => this.viewModel?.selectedFeatureIndex, (e4, t2) => this._selectedFeatureIndexUpdated(e4, t2));
    this.addHandles(e3, O);
  }
  _selectedFeatureIndexUpdated(e3, t2) {
    const { featureCount: i2 } = this.viewModel;
    i2 && e3 !== t2 && -1 !== e3 && (this._destroyRelatedRecordsFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _triggerHeaderAction(e3) {
    const t2 = e3.currentTarget;
    if (t2.disabled)
      return;
    const i2 = t2.dataset.actionUid, o2 = this.headerActions.find(({ uid: e4 }) => e4 === i2);
    o2 && !o2.disabled && ("toggle" === o2?.type && (o2.value = !o2.value), this.emit("trigger-header-action", { action: o2 }));
  }
  _triggerAction(e3) {
    const t2 = e3.currentTarget;
    if (t2.disabled)
      return;
    const i2 = t2.dataset.actionUid, { allActions: o2 } = this.viewModel, s4 = o2.findIndex((e4) => e4.uid === i2), r2 = o2.at(s4);
    r2 && "toggle" === r2.type && (r2.value = !r2.value), this.viewModel.triggerAction(s4);
  }
  _createSpinner(e3) {
    e3 && (this._spinner = new h3({ view: e3 }), e3.ui.add(this._spinner, { key: j2, position: "manual", internal: true }));
  }
  _wireUpView(e3) {
    this._destroySpinner(), e3 && this.visibleElements?.spinner && this._createSpinner(e3);
  }
  _hideSpinner() {
    const { _spinner: e3 } = this;
    e3 && (e3.location = null, e3.hide());
  }
  _viewReadyChange(e3, t2) {
    e3 ? this._wireUpView(this.viewModel?.view) : t2 && this.viewModel.clear();
  }
  _viewChange(e3, t2) {
    e3 && t2 && this.viewModel.clear();
  }
  _destroySelectedFeatureWidget() {
    const { _feature: e3 } = this;
    e3 && (e3.viewModel = null, !e3.destroyed && e3.destroy()), this._feature = null;
  }
  _closeOpenActionMenu() {
    const { _actionBarMenuNode: e3 } = this;
    e3 && (e3.menuOpen = false);
  }
  _destroyRelatedRecordsFlowItemWidgets() {
    this._relatedRecordsFlowItems.removeAll().forEach((e3) => {
      "showAllEnabled" in e3.viewModel && (e3.viewModel.showAllEnabled = false), e3.viewModel = null, e3.destroy();
    });
  }
  _toggleScreenLocationEnabled() {
    const { viewModel: e3 } = this;
    e3 && (e3.screenLocationEnabled = e3.active);
  }
  _displaySpinner() {
    const { _spinner: e3 } = this;
    if (!e3)
      return;
    const { location: t2, waitingForResult: i2 } = this.viewModel;
    i2 && t2 ? e3.show({ location: t2 }) : e3.hide();
  }
  _destroySpinner() {
    const { _spinner: e3, view: t2 } = this;
    e3 && (t2?.ui?.remove(e3, j2), e3.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(e3) {
    this._destroySpinner(), e3 && this._createSpinner(this.viewModel?.view);
  }
};
e$8([y$6()], T2.prototype, "_focusOn", void 0), e$8([y$6()], T2.prototype, "_relatedRecordsFlowItems", void 0), e$8([y$6()], T2.prototype, "_hideActionText", null), e$8([y$6()], T2.prototype, "_featureNavigationVisible", null), e$8([y$6()], T2.prototype, "_isCollapsed", null), e$8([y$6()], T2.prototype, "_collapseEnabled", null), e$8([y$6()], T2.prototype, "collapsed", void 0), e$8([y$6()], T2.prototype, "content", null), e$8([y$6()], T2.prototype, "icon", void 0), e$8([y$6()], T2.prototype, "featureMenuOpen", null), e$8([y$6()], T2.prototype, "featureNavigationTop", void 0), e$8([y$6()], T2.prototype, "features", null), e$8([y$6({ type: i })], T2.prototype, "headerActions", void 0), e$8([y$6()], T2.prototype, "headingLevel", void 0), e$8([y$6()], T2.prototype, "location", null), e$8([y$6()], T2.prototype, "label", null), e$8([y$6(), e$9("esri/widgets/Features/t9n/Features")], T2.prototype, "messages", void 0), e$8([y$6(), e$9("esri/t9n/common")], T2.prototype, "messagesCommon", void 0), e$8([y$6()], T2.prototype, "promises", null), e$8([y$6()], T2.prototype, "responsiveActionsEnabled", void 0), e$8([y$6({ readOnly: true })], T2.prototype, "selectedFeature", null), e$8([y$6()], T2.prototype, "selectedFeatureIndex", null), e$8([y$6({ readOnly: true })], T2.prototype, "selectedFeatureWidget", null), e$8([y$6()], T2.prototype, "title", null), e$8([y$6()], T2.prototype, "updateLocationEnabled", null), e$8([y$6()], T2.prototype, "view", null), e$8([y$6({ type: z }), e$e(["triggerAction", "trigger-action"])], T2.prototype, "viewModel", void 0), e$8([y$6({ type: l3, nonNullable: true })], T2.prototype, "visibleElements", void 0), e$8([y$6()], T2.prototype, "visible", null), T2 = e$8([c$c("esri.widgets.Features")], T2);
const E$1 = T2;
const t$1 = "esri-popup", o = `${t$1}--is-docked`, e$1 = { base: t$1, main: `${t$1}__main-container`, shadow: `${t$1}--shadow`, isDocked: o, isDockedTopLeft: `${o}-top-left`, isDockedTopCenter: `${o}-top-center`, isDockedTopRight: `${o}-top-right`, isDockedBottomLeft: `${o}-bottom-left`, isDockedBottomCenter: `${o}-bottom-center`, isDockedBottomRight: `${o}-bottom-right`, alignTopCenter: `${t$1}--aligned-top-center`, alignBottomCenter: `${t$1}--aligned-bottom-center`, alignTopLeft: `${t$1}--aligned-top-left`, alignBottomLeft: `${t$1}--aligned-bottom-left`, alignTopRight: `${t$1}--aligned-top-right`, alignBottomRight: `${t$1}--aligned-bottom-right`, pointer: `${t$1}__pointer`, pointerDirection: `${t$1}__pointer-direction` };
let e2 = class extends z {
  constructor(o2) {
    super(o2);
  }
};
e2 = e$8([c$c("esri.widgets.Popup.PopupViewModel")], e2);
const t = e2;
let s3 = class extends S$1 {
  constructor() {
    super(...arguments), this.actionBar = true, this.closeButton = true, this.collapseButton = true, this.featureNavigation = true, this.heading = true, this.spinner = true;
  }
};
e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "actionBar", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "closeButton", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "collapseButton", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "featureNavigation", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "heading", void 0), e$8([y$6({ type: Boolean, nonNullable: true })], s3.prototype, "spinner", void 0), s3 = e$8([c$c("esri.widgets.Features.PopupVisibleElements")], s3);
const p3 = s3;
const _ = { buttonEnabled: true, position: "auto", breakpoint: { width: 544 } };
let E = class extends O$1 {
  constructor(e3, t$12) {
    super(e3, t$12), this._dockAction = new c$g({ id: "popup-dock-action" }), this._featuresWidget = new E$1({ responsiveActionsEnabled: true }), this._containerNode = null, this._mainContainerNode = null, this._pointerOffsetInPx = 16, this.alignment = "auto", this.collapsed = false, this.dockEnabled = false, this.headingLevel = 2, this.messages = null, this.viewModel = new t(), this.visibleElements = new p3();
  }
  initialize() {
    this.addHandles([d$5(() => [this.viewModel?.view?.widthBreakpoint, this.dockEnabled], () => this._handleDockIcon(), P$1), d$5(() => [this.dockEnabled, this.messages?.undock, this.messages?.dock], () => this._handleDockEnabled(), P$1), d$5(() => this.dockOptions, (e3) => {
      const { _dockAction: t2 } = this, i2 = this._featuresWidget.headerActions;
      i2.remove(t2), e3.buttonEnabled && i2.add(t2);
    }, P$1), d$5(() => this.viewModel?.screenLocation, () => this._positionContainer()), d$5(() => [this.viewModel?.active, this.dockEnabled], () => this._toggleScreenLocationEnabled()), d$5(() => [this.viewModel?.screenLocation, this.viewModel?.view?.padding, this.viewModel?.view?.size, this.viewModel?.active, this.viewModel?.location, this.alignment], () => this.reposition()), d$5(() => this.viewModel?.view?.size, (e3, t2) => this._updateDockEnabledForViewSize(e3, t2)), d$5(() => this.viewModel?.view, (e3, t2) => this._viewChange(e3, t2)), d$5(() => this.viewModel?.view?.ready, (e3, t2) => this._viewReadyChange(e3 ?? false, t2 ?? false)), d$5(() => this.viewModel, () => this._featuresWidget.viewModel = this.viewModel, P$1), d$5(() => this._featureNavigationTop, (e3) => this._featuresWidget.featureNavigationTop = e3, P$1), d$5(() => this.headingLevel, (e3) => this._featuresWidget.headingLevel = e3, P$1), d$5(() => this.collapsed, (e3) => this._featuresWidget.collapsed = e3, P$1), d$5(() => this.visibleElements.actionBar, (e3) => this._featuresWidget.visibleElements.actionBar = !!e3, P$1), d$5(() => this.visibleElements.closeButton, (e3) => this._featuresWidget.visibleElements.closeButton = !!e3, P$1), d$5(() => this.visibleElements.collapseButton, (e3) => this._featuresWidget.visibleElements.collapseButton = !!e3, P$1), d$5(() => this.visibleElements.heading, (e3) => this._featuresWidget.visibleElements.heading = !!e3, P$1), d$5(() => this.visibleElements.spinner, (e3) => this._featuresWidget.visibleElements.spinner = !!e3, P$1), d$5(() => this.visibleElements.featureNavigation, (e3) => this._featuresWidget.visibleElements.featureNavigation = !!e3, P$1), v$4(() => this._featuresWidget, "trigger-header-action", (e3) => {
      e3.action === this._dockAction && (this.dockEnabled = !this.dockEnabled);
    })]);
  }
  normalizeCtorArgs(e3) {
    const t2 = { ...e3 };
    return null != e3?.visibleElements && (t2.visibleElements = new p3(e3.visibleElements), null != e3.collapseEnabled && (t2.visibleElements.collapseButton = e3.collapseEnabled), null != e3.spinnerEnabled && (t2.visibleElements.spinner = e3.spinnerEnabled)), t2;
  }
  destroy() {
    this._dockAction.destroy(), this._featuresWidget?.destroy();
  }
  get _featureNavigationTop() {
    const { currentAlignment: e3, currentDockPosition: t2 } = this;
    return "bottom-left" === e3 || "bottom-center" === e3 || "bottom-right" === e3 || "top-left" === t2 || "top-center" === t2 || "top-right" === t2;
  }
  get actions() {
    return this.viewModel.actions;
  }
  set actions(e3) {
    this.viewModel.actions = e3;
  }
  get autoCloseEnabled() {
    return this.viewModel.autoCloseEnabled;
  }
  set autoCloseEnabled(e3) {
    this.viewModel.autoCloseEnabled = e3;
  }
  get autoOpenEnabled() {
    return o$4(s$9.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled;
  }
  set autoOpenEnabled(e3) {
    o$4(s$9.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled = e3;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e3) {
    this.viewModel.defaultPopupTemplateEnabled = e3;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e3) {
    this.viewModel.content = e3;
  }
  get collapseEnabled() {
    return o$4(s$9.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton;
  }
  set collapseEnabled(e3) {
    o$4(s$9.getLogger(this), "collapseEnabled", { replacement: "PopupVisibleElements.collapseButton", version: "4.29" }), this.visibleElements.collapseButton = e3;
  }
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || _;
  }
  set dockOptions(e3) {
    const t2 = { ..._ }, i2 = this.viewModel?.view?.breakpoints, o2 = {};
    i2 && (o2.width = i2.xsmall, o2.height = i2.xsmall);
    const n3 = { ...t2, ...e3 }, s4 = { ...t2.breakpoint, ...o2 }, { breakpoint: r2 } = n3;
    "object" == typeof r2 ? n3.breakpoint = { ...s4, ...r2 } : r2 && (n3.breakpoint = s4), this._set("dockOptions", n3), this._setCurrentDockPosition(), this.reposition();
  }
  get featureCount() {
    return this.viewModel.featureCount;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e3) {
    this.viewModel.featureMenuOpen = e3;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e3) {
    this.viewModel.features = e3;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e3) {
    this.viewModel.goToOverride = e3;
  }
  get highlightEnabled() {
    return this.viewModel.highlightEnabled;
  }
  set highlightEnabled(e3) {
    this.viewModel.highlightEnabled = e3;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e3) {
    this.viewModel.location = e3;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e3) {
    this._overrideIfSome("label", e3);
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e3) {
    this.viewModel.promises = e3;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e3) {
    this.viewModel.selectedFeatureIndex = e3;
  }
  get selectedFeatureWidget() {
    return this._featuresWidget.selectedFeatureWidget;
  }
  get spinnerEnabled() {
    return o$4(s$9.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner;
  }
  set spinnerEnabled(e3) {
    o$4(s$9.getLogger(this), "spinnerEnabled", { replacement: "PopupVisibleElements.spinner", version: "4.29" }), this.visibleElements.spinner = e3;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e3) {
    this.viewModel.title = e3;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e3) {
    this.viewModel.updateLocationEnabled = e3;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e3) {
    this.viewModel.view = e3;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e3) {
    this.viewModel.visible = e3;
  }
  blur() {
    const { active: e3 } = this.viewModel;
    e3 || s$9.getLogger(this).warn("Popup can only be blurred when currently active."), this._featuresWidget.blur();
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.visible = false;
  }
  fetchFeatures(e3, t2) {
    return this.viewModel.fetchFeatures(e3, t2);
  }
  focus() {
    const { active: e3 } = this.viewModel;
    e3 || s$9.getLogger(this).warn("Popup can only be focused when currently active."), this.reposition(), requestAnimationFrame(() => {
      this._featuresWidget.focus();
    });
  }
  next() {
    return this.viewModel.next();
  }
  open(e3) {
    const t2 = !!e3 && !!e3.featureMenuOpen, i2 = { collapsed: !!e3 && !!e3.collapsed, featureMenuOpen: t2 };
    this.set(i2), this.viewModel.open(e3), this._shouldFocus(e3);
  }
  previous() {
    return this.viewModel.previous();
  }
  reposition() {
    this.renderNow(), this._positionContainer(), this._setCurrentAlignment();
  }
  triggerAction(e3) {
    return this.viewModel.triggerAction(e3);
  }
  render() {
    const { dockEnabled: e3, currentAlignment: t2, currentDockPosition: i2 } = this, { active: o2 } = this.viewModel, n3 = o2 && e3, s4 = o2 && !e3, r2 = this.selectedFeature?.layer?.title, l4 = this.selectedFeature?.layer?.id, a2 = { [e$1.alignTopCenter]: "top-center" === t2, [e$1.alignBottomCenter]: "bottom-center" === t2, [e$1.alignTopLeft]: "top-left" === t2, [e$1.alignBottomLeft]: "bottom-left" === t2, [e$1.alignTopRight]: "top-right" === t2, [e$1.alignBottomRight]: "bottom-right" === t2, [e$1.isDocked]: n3, [e$1.shadow]: s4, [e$1.isDockedTopLeft]: "top-left" === i2, [e$1.isDockedTopCenter]: "top-center" === i2, [e$1.isDockedTopRight]: "top-right" === i2, [e$1.isDockedBottomLeft]: "bottom-left" === i2, [e$1.isDockedBottomCenter]: "bottom-center" === i2, [e$1.isDockedBottomRight]: "bottom-right" === i2 };
    return n$b("div", { afterCreate: this._positionContainer, afterUpdate: this._positionContainer, bind: this, class: this.classes(e$1.base, a2), "data-layer-id": l4, "data-layer-title": r2, role: "presentation" }, o2 ? [this._renderMainContainer(), this._renderPointer()] : null);
  }
  _renderPointer() {
    return this.dockEnabled ? null : n$b("div", { class: e$1.pointer, key: "popup-pointer", role: "presentation" }, n$b("div", { class: this.classes(e$1.pointerDirection, e$1.shadow) }));
  }
  _renderMainContainer() {
    const { dockEnabled: e3 } = this, t2 = { [e$1.shadow]: e3 };
    return n$b("div", { afterCreate: this._setMainContainerNode, afterUpdate: this._setMainContainerNode, bind: this, class: this.classes(e$1.main, e$a.widget, t2) }, this._featuresWidget.render());
  }
  async _shouldFocus(e3) {
    e3?.shouldFocus && (await w$8(() => true === this.viewModel?.active), this.focus());
  }
  _isOutsideView(e3) {
    const { popupHeight: t2, popupWidth: i2, screenLocation: o2, side: n3, view: s4 } = e3;
    if (isNaN(i2) || isNaN(t2) || !s4 || !o2)
      return false;
    const r2 = s4.padding;
    return "right" === n3 && o2.x + i2 / 2 > s4.width - r2.right || ("left" === n3 && o2.x - i2 / 2 < r2.left || ("top" === n3 && o2.y - t2 < r2.top || "bottom" === n3 && o2.y + t2 > s4.height - r2.bottom));
  }
  _calculateAutoAlignment(e3) {
    if ("auto" !== e3)
      return e3;
    const { _pointerOffsetInPx: t2, _containerNode: i2, _mainContainerNode: o2, viewModel: n3 } = this, { screenLocation: s4, view: r2 } = n3;
    if (null == s4 || !r2 || !i2)
      return "top-center";
    function l4(e4) {
      return parseInt(e4.replaceAll(/[^-\d\.]/g, ""), 10);
    }
    const a2 = o2 ? window.getComputedStyle(o2, null) : null, d2 = a2 ? l4(a2.getPropertyValue("max-height")) : 0, p4 = a2 ? l4(a2.getPropertyValue("height")) : 0, { height: c6, width: h4 } = i2.getBoundingClientRect(), u3 = h4 + t2, g3 = Math.max(c6, d2, p4) + t2, v3 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s4, side: "right", view: r2 }), b2 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s4, side: "left", view: r2 }), m2 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s4, side: "top", view: r2 }), w2 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s4, side: "bottom", view: r2 });
    return b2 ? m2 ? "bottom-right" : "top-right" : v3 ? m2 ? "bottom-left" : "top-left" : m2 ? w2 ? "top-center" : "bottom-center" : "top-center";
  }
  _callCurrentAlignment(e3) {
    return "function" == typeof e3 ? e3.call(this) : e3;
  }
  _getCurrentAlignment() {
    const { alignment: e3, dockEnabled: t2 } = this;
    return t2 || !this.viewModel.active ? null : this._calculatePositionResult(this._calculateAutoAlignment(this._callCurrentAlignment(e3)));
  }
  _setCurrentAlignment() {
    this._set("currentAlignment", this._getCurrentAlignment());
  }
  _setCurrentDockPosition() {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }
  _calculatePositionResult(e3) {
    const t2 = ["left", "right"];
    return v$5(this.container) && t2.reverse(), e3?.replace(/leading/gi, t2[0]).replaceAll(/trailing/gi, t2[1]);
  }
  _callDockPosition(e3) {
    return "function" == typeof e3 ? e3.call(this) : e3;
  }
  _getDockPosition() {
    return this._calculatePositionResult(this._calculateAutoDockPosition(this._callDockPosition(this.dockOptions?.position)));
  }
  _getCurrentDockPosition() {
    return this.dockEnabled && this.viewModel.active ? this._getDockPosition() : null;
  }
  _calculateAutoDockPosition(e3) {
    if ("auto" !== e3)
      return e3;
    const t2 = this.viewModel?.view, i2 = v$5(this.container) ? "top-left" : "top-right";
    if (!t2)
      return i2;
    const o2 = t2.padding || { left: 0, right: 0, top: 0, bottom: 0 }, n3 = t2.width - o2.left - o2.right, { breakpoints: s4 } = t2;
    return s4 && n3 <= s4.xsmall ? "bottom-center" : i2;
  }
  _getDockIcon() {
    const e3 = this._getDockPosition();
    if (this.dockEnabled)
      return "minimize";
    switch (e3) {
      case "top-left":
      case "bottom-left":
        return "dock-left";
      case "top-center":
        return "maximize";
      case "bottom-center":
        return "dock-bottom";
      default:
        return "dock-right";
    }
  }
  _handleDockIcon() {
    this._dockAction.icon = this._getDockIcon();
  }
  _handleDockEnabled() {
    this._dockAction.title = this.dockEnabled ? this.messages?.undock : this.messages?.dock;
  }
  _setMainContainerNode(e3) {
    this._mainContainerNode = e3;
  }
  _positionContainer(e3 = this._containerNode) {
    if (e3 && (this._containerNode = e3), !this._containerNode)
      return;
    const { screenLocation: t2 } = this.viewModel, { width: i2 } = this._containerNode.getBoundingClientRect(), o2 = this._calculatePositionStyle(t2, i2);
    o2 && Object.assign(this._containerNode.style, o2);
  }
  _calculateFullWidth(e3) {
    const { currentAlignment: t2, _pointerOffsetInPx: i2 } = this;
    return "top-left" === t2 || "bottom-left" === t2 || "top-right" === t2 || "bottom-right" === t2 ? e3 + i2 : e3;
  }
  _calculateAlignmentPosition(e3, t2, i2, o2) {
    const { currentAlignment: n3, _pointerOffsetInPx: s4 } = this;
    if (!i2)
      return;
    const { padding: r2 } = i2, l4 = o2 / 2, a2 = i2.height - t2, d2 = i2.width - e3;
    return "bottom-center" === n3 ? { top: t2 + s4 - r2.top, left: e3 - l4 - r2.left } : "top-left" === n3 ? { bottom: a2 + s4 - r2.bottom, right: d2 + s4 - r2.right } : "bottom-left" === n3 ? { top: t2 + s4 - r2.top, right: d2 + s4 - r2.right } : "top-right" === n3 ? { bottom: a2 + s4 - r2.bottom, left: e3 + s4 - r2.left } : "bottom-right" === n3 ? { top: t2 + s4 - r2.top, left: e3 + s4 - r2.left } : "top-center" === n3 ? { bottom: a2 + s4 - r2.bottom, left: e3 - l4 - r2.left } : void 0;
  }
  _calculatePositionStyle(e3, t2) {
    const { dockEnabled: i2, view: o2 } = this;
    if (!o2)
      return;
    if (i2)
      return { left: "", top: "", right: "", bottom: "" };
    if (null == e3 || !t2)
      return;
    const n3 = this._calculateFullWidth(t2), s4 = this._calculateAlignmentPosition(e3.x, e3.y, o2, n3);
    return s4 ? { top: void 0 !== s4.top ? `${s4.top}px` : "auto", left: void 0 !== s4.left ? `${s4.left}px` : "auto", bottom: void 0 !== s4.bottom ? `${s4.bottom}px` : "auto", right: void 0 !== s4.right ? `${s4.right}px` : "auto" } : void 0;
  }
  _viewChange(e3, t2) {
    e3 && t2 && (this.close(), this.clear());
  }
  _viewReadyChange(e3, t2) {
    e3 ? this._wireUpView() : t2 && (this.close(), this.clear());
  }
  _wireUpView() {
    this._setDockEnabledForViewSize(this.dockOptions);
  }
  _dockingThresholdCrossed(e3, t2, i2) {
    const [o2, n3] = e3, [s4, r2] = t2, { width: l4 = 0, height: a2 = 0 } = i2 ?? {};
    return o2 <= l4 && s4 > l4 || o2 > l4 && s4 <= l4 || n3 <= a2 && r2 > a2 || n3 > a2 && r2 <= a2;
  }
  _updateDockEnabledForViewSize(e3, t2) {
    if (!e3 || !t2)
      return;
    const i2 = this.viewModel?.view?.padding || { left: 0, right: 0, top: 0, bottom: 0 }, o2 = i2.left + i2.right, n3 = i2.top + i2.bottom, s4 = [], r2 = [];
    s4[0] = e3[0] - o2, s4[1] = e3[1] - n3, r2[0] = t2[0] - o2, r2[1] = t2[1] - n3;
    const { dockOptions: l4 } = this, a2 = l4.breakpoint;
    this._dockingThresholdCrossed(s4, r2, a2) && this._setDockEnabledForViewSize(l4), this._setCurrentDockPosition();
  }
  _toggleScreenLocationEnabled() {
    const { dockEnabled: e3, viewModel: t2 } = this;
    if (!t2)
      return;
    const i2 = t2.active && !e3;
    t2.screenLocationEnabled = i2;
  }
  _shouldDockAtCurrentViewSize(e3) {
    const t2 = e3.breakpoint, i2 = this.viewModel?.view?.ui;
    if (!i2)
      return false;
    const { width: o2, height: n3 } = i2;
    if (isNaN(o2) || isNaN(n3))
      return false;
    if (!t2)
      return false;
    const s4 = t2.hasOwnProperty("width") && o2 <= (t2.width ?? 0), r2 = t2.hasOwnProperty("height") && n3 <= (t2.height ?? 0);
    return s4 || r2;
  }
  _setDockEnabledForViewSize(e3) {
    e3.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(e3));
  }
};
e$8([y$6({ readOnly: true })], E.prototype, "_featureNavigationTop", null), e$8([y$6()], E.prototype, "actions", null), e$8([y$6()], E.prototype, "alignment", void 0), e$8([y$6()], E.prototype, "autoCloseEnabled", null), e$8([y$6()], E.prototype, "autoOpenEnabled", null), e$8([y$6()], E.prototype, "defaultPopupTemplateEnabled", null), e$8([y$6()], E.prototype, "content", null), e$8([y$6()], E.prototype, "collapsed", void 0), e$8([y$6()], E.prototype, "collapseEnabled", null), e$8([y$6({ readOnly: true })], E.prototype, "currentAlignment", null), e$8([y$6({ readOnly: true })], E.prototype, "currentDockPosition", null), e$8([y$6()], E.prototype, "dockOptions", null), e$8([y$6()], E.prototype, "dockEnabled", void 0), e$8([y$6({ readOnly: true })], E.prototype, "featureCount", null), e$8([y$6()], E.prototype, "featureMenuOpen", null), e$8([y$6()], E.prototype, "features", null), e$8([y$6()], E.prototype, "goToOverride", null), e$8([y$6()], E.prototype, "headingLevel", void 0), e$8([y$6()], E.prototype, "highlightEnabled", null), e$8([y$6()], E.prototype, "location", null), e$8([y$6()], E.prototype, "label", null), e$8([y$6(), e$9("esri/widgets/Popup/t9n/Popup")], E.prototype, "messages", void 0), e$8([y$6()], E.prototype, "promises", null), e$8([y$6({ readOnly: true })], E.prototype, "selectedFeature", null), e$8([y$6()], E.prototype, "selectedFeatureIndex", null), e$8([y$6({ readOnly: true })], E.prototype, "selectedFeatureWidget", null), e$8([y$6()], E.prototype, "spinnerEnabled", null), e$8([y$6()], E.prototype, "title", null), e$8([y$6()], E.prototype, "updateLocationEnabled", null), e$8([y$6()], E.prototype, "view", null), e$8([y$6({ type: t }), e$e(["triggerAction", "trigger-action"])], E.prototype, "viewModel", void 0), e$8([y$6()], E.prototype, "visible", null), e$8([y$6({ type: p3, nonNullable: true })], E.prototype, "visibleElements", void 0), E = e$8([c$c("esri.widgets.Popup")], E);
const k = E;
export {
  k as default
};
