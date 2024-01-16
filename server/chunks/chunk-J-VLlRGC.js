import { bh as V, fI as l$6, bo as e$6, bp as y$6, iA as s$4, bf as c$a, br as c$b, bs as g$6, bJ as d$5, bn as P$1, aM as s$5, Cw as c$c, i6 as a$3, rx as e$7, ry as O$1, e3 as v$3, C6 as r$1, rz as n$8, wI as e$8, rB as b$3, Cx as L, ws as v$4, wJ as i$3, wG as e$9, rC as e$a, sr as i$4, Cy as c$d, dC as r$2, bb as s$6, g_ as h$6, kM as v$5, wf as m$6, bQ as b$4, ly as s$7, gk as pe, a$ as j$4, kI as d$6, tH as s$8, bX as k$3, Cz as i$5, rA as s$9, wx as r$3, CA as c$e, d5 as Ze, CB as i$6, CC as I$6, CD as c$f, CE as c$g, CF as i$7, jk as i$8, bC as s$a, kz as d$7, ej as k$4, bD as u$5, lw as A$2, bI as b$5, qj as o$3, CG as t$4, CH as t$5, d1 as o$4, eg as p$a, Ca as i$9, CI as p$b, CJ as c$h, CK as a$4, pk as f$6, CL as t$6, bt as S$3, bK as C$3, t7 as d$8, mv as o$5, bN as b$6, mV as n$9, cy as x$6, dM as u$6, CM as e$c, CN as t$7, dS as w$6 } from "./chunk-KFNcxJaF.js";
import { e as e$b } from "./chunk-KMgzOHQd.js";
import { O as O$2 } from "./chunk-KXkDk_IW.js";
import { E, x as x$4, C as C$2, q as q$1, d as de, D as D$1, P, z as z$1, R as R$2, v as v$6, M as M$4, Y, a as ae, o as oe, T as Te, r as re, i as ie, s as se, J as J$1, n as ne, c as ce, u as ue, h as he, b as be } from "./chunk-cBUQnPnC.js";
import { z as x$5, L as L$1 } from "./chunk-y_FkjZn_.js";
import { s as s$b } from "./chunk-9JhcsZul.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const m$5 = { editing: false, operations: { add: true, update: true, delete: true } }, f$5 = V.ofType(l$6);
let u$4 = class u extends g$6 {
  constructor(t2) {
    super(t2), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...m$5 }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f$5(), this.fileInfos = new V(), this.graphic = null, this.mode = "view", this.filesEnabled = false, this.addHandles(d$5(() => this.graphic, () => this._graphicChanged(), P$1));
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
      throw new s$5("invalid-layer", "getAttachments(): A valid layer is required.");
    const a2 = this._getObjectId(), i3 = new c$c({ objectIds: [a2], returnMetadata: true }), r2 = [], s2 = t2.queryAttachments(i3).then((t3) => t3[a2] || r2).catch(() => r2);
    this._getAttachmentsPromise = s2, this.notifyChange("state");
    const o3 = await s2;
    return e3.removeAll(), o3.length && e3.addMany(o3), this._getAttachmentsPromise = null, this.notifyChange("state"), o3;
  }
  async addAttachment(t2, e3 = this.graphic) {
    const { _attachmentLayer: a2, attachmentInfos: i3, capabilities: r2 } = this;
    if (!e3)
      throw new s$5("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e3 });
    if (!t2)
      throw new s$5("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t2 });
    if (!r2.operations?.add)
      throw new s$5("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!a2 || "function" != typeof a2.addAttachment)
      throw new s$5("invalid-layer", "addAttachment(): A valid layer is required.");
    const s2 = a2.addAttachment(e3, t2).then((t3) => this._queryAttachment(t3.objectId, e3)), o3 = await s2;
    return i3.add(o3), o3;
  }
  async deleteAttachment(t2) {
    const { _attachmentLayer: e3, attachmentInfos: a2, graphic: i3, capabilities: r2 } = this;
    if (!t2)
      throw new s$5("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t2 });
    if (!r2.operations?.delete)
      throw new s$5("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e3 || "function" != typeof e3.deleteAttachments)
      throw new s$5("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!i3)
      throw new s$5("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s2 = e3.deleteAttachments(i3, [t2.id]).then(() => t2), o3 = await s2;
    return a2.remove(o3), o3;
  }
  async updateAttachment(t2, e3 = this.activeAttachmentInfo) {
    const { _attachmentLayer: a2, attachmentInfos: i3, graphic: r2, capabilities: s2 } = this;
    if (!t2)
      throw new s$5("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t2 });
    if (!e3)
      throw new s$5("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e3 });
    if (!s2.operations?.update)
      throw new s$5("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o3 = i3.indexOf(e3);
    if (!a2 || "function" != typeof a2.updateAttachment)
      throw new s$5("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r2)
      throw new s$5("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c5 = a2.updateAttachment(r2, e3.id, t2).then((t3) => this._queryAttachment(t3.objectId)), h3 = await c5;
    return i3.splice(o3, 1, h3), h3;
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
    const i3 = this.fileInfos.indexOf(a2);
    return i3 > -1 && this.fileInfos.splice(i3, 1, { file: t2, form: e3 }), this.fileInfos.items[i3];
  }
  deleteFile(t2) {
    const e3 = this.fileInfos.find((e4) => e4.file === t2);
    return e3 ? (this.fileInfos.remove(e3), e3) : null;
  }
  async _queryAttachment(t2, e3) {
    const { _attachmentLayer: a2 } = this;
    if (!t2 || !a2?.queryAttachments)
      throw new s$5("invalid-attachment-id", "Could not query attachment.");
    const i3 = this._getObjectId(e3), r2 = new c$c({ objectIds: [i3], attachmentsWhere: `AttachmentId=${t2}`, returnMetadata: true });
    return a2.queryAttachments(r2).then((t3) => t3[i3][0]);
  }
  _getObjectId(t2 = this.graphic) {
    return t2?.getObjectId() ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => {
    }));
  }
  _setAttachmentLayer() {
    const { graphic: t2 } = this, e3 = E(t2);
    this._attachmentLayer = e3 ? "scene" === e3.type && null != e3.associatedLayer ? e3.associatedLayer : e3 : null;
  }
};
e$6([y$6()], u$4.prototype, "capabilities", void 0), e$6([s$4("capabilities")], u$4.prototype, "castCapabilities", null), e$6([y$6()], u$4.prototype, "activeAttachmentInfo", void 0), e$6([y$6()], u$4.prototype, "activeFileInfo", void 0), e$6([y$6({ readOnly: true, type: f$5 })], u$4.prototype, "attachmentInfos", void 0), e$6([y$6()], u$4.prototype, "fileInfos", void 0), e$6([y$6({ type: c$a })], u$4.prototype, "graphic", void 0), e$6([y$6()], u$4.prototype, "mode", void 0), e$6([y$6({ readOnly: true })], u$4.prototype, "state", null), e$6([y$6()], u$4.prototype, "filesEnabled", void 0), e$6([y$6({ readOnly: true })], u$4.prototype, "supportsResizeAttachments", null), u$4 = e$6([c$b("esri.widgets.Attachments.AttachmentsViewModel")], u$4);
const y$5 = u$4;
function e$5(i3) {
  const e3 = i3.toLowerCase();
  return "image/bmp" === e3 || "image/emf" === e3 || "image/exif" === e3 || "image/gif" === e3 || "image/x-icon" === e3 || "image/jpeg" === e3 || "image/png" === e3 || "image/tiff" === e3 || "image/x-wmf" === e3;
}
function p$9(e3) {
  const p4 = a$3("esri/themes/base/images/files/");
  return e3 ? "text/plain" === e3 ? `${p4}text-32.svg` : "application/pdf" === e3 ? `${p4}pdf-32.svg` : "text/csv" === e3 ? `${p4}csv-32.svg` : "application/gpx+xml" === e3 ? `${p4}gpx-32.svg` : "application/x-dwf" === e3 ? `${p4}cad-32.svg` : "application/postscript" === e3 || "application/json" === e3 || "text/xml" === e3 || "model/vrml" === e3 ? `${p4}code-32.svg` : "application/x-zip-compressed" === e3 || "application/x-7z-compressed" === e3 || "application/x-gzip" === e3 || "application/x-tar" === e3 || "application/x-gtar" === e3 || "application/x-bzip2" === e3 || "application/gzip" === e3 || "application/x-compress" === e3 || "application/x-apple-diskimage" === e3 || "application/x-rar-compressed" === e3 || "application/zip" === e3 ? `${p4}zip-32.svg` : e3.includes("image/") ? `${p4}image-32.svg` : e3.includes("audio/") ? `${p4}sound-32.svg` : e3.includes("video/") ? `${p4}video-32.svg` : e3.includes("msexcel") || e3.includes("ms-excel") || e3.includes("spreadsheetml") ? `${p4}excel-32.svg` : e3.includes("msword") || e3.includes("ms-word") || e3.includes("wordprocessingml") ? `${p4}word-32.svg` : e3.includes("powerpoint") || e3.includes("presentationml") ? `${p4}report-32.svg` : `${p4}generic-32.svg` : `${p4}generic-32.svg`;
}
const A$1 = { addButton: true, addSubmitButton: true, cancelAddButton: true, cancelUpdateButton: true, deleteButton: true, errorMessage: true, progressBar: true, updateButton: true }, w$5 = "esri-attachments", F$4 = { base: w$5, loaderContainer: `${w$5}__loader-container`, loader: `${w$5}__loader`, fadeIn: `${w$5}--fade-in`, container: `${w$5}__container`, containerList: `${w$5}__container--list`, containerPreview: `${w$5}__container--preview`, actions: `${w$5}__actions`, deleteButton: `${w$5}__delete-button`, addAttachmentButton: `${w$5}__add-attachment-button`, errorMessage: `${w$5}__error-message`, items: `${w$5}__items`, item: `${w$5}__item`, itemButton: `${w$5}__item-button`, itemMask: `${w$5}__item-mask`, itemMaskIcon: `${w$5}__item-mask--icon`, itemImage: `${w$5}__image`, itemImageResizable: `${w$5}__image--resizable`, itemLabel: `${w$5}__label`, itemFilename: `${w$5}__filename`, itemChevronIcon: `${w$5}__item-chevron-icon`, itemLink: `${w$5}__item-link`, itemLinkOverlay: `${w$5}__item-link-overlay`, itemLinkOverlayIcon: `${w$5}__item-link-overlay-icon`, itemEditIcon: `${w$5}__item-edit-icon`, itemAddIcon: `${w$5}__item-add-icon`, itemAddButton: `${w$5}__item-add-button`, formNode: `${w$5}__form-node`, fileFieldset: `${w$5}__file-fieldset`, fileLabel: `${w$5}__file-label`, fileName: `${w$5}__file-name`, fileInput: `${w$5}__file-input`, metadata: `${w$5}__metadata`, metadataFieldset: `${w$5}__metadata-fieldset`, progressBar: `${w$5}__progress-bar` }, k$2 = window.CSS;
let M$3 = class M extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = { ...A$1 }, this._supportsImageOrientation = k$2 && k$2.supports && k$2.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e3) {
    return e3?.viewModel || (e3 = { viewModel: new y$5(), ...e3 }), e3;
  }
  initialize() {
    this.addHandles([v$3(() => this.viewModel?.attachmentInfos, "change", () => this.scheduleRender()), v$3(() => this.viewModel?.fileInfos, "change", () => this.scheduleRender()), d$5(() => this.viewModel?.mode, () => this._modeChanged(), P$1)]);
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
    const { _addAttachmentForm: e3, viewModel: s2 } = this;
    return this._set("submitting", true), this._set("error", null), s2.addAttachment(e3).then((e4) => (this._set("submitting", false), this._set("error", null), s2.mode = "view", e4)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$5("attachments:add-attachment", this.messages.addErrorMessage, e4)), e4;
    });
  }
  deleteAttachment(e3) {
    const { viewModel: s2 } = this;
    return this._set("submitting", true), this._set("error", null), s2.deleteAttachment(e3).then((e4) => (this._set("submitting", false), this._set("error", null), s2.mode = "view", e4)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$5("attachments:delete-attachment", this.messages.deleteErrorMessage, e4)), e4;
    });
  }
  updateAttachment() {
    const { viewModel: e3 } = this, { _updateAttachmentForm: s2 } = this;
    return this._set("submitting", true), this._set("error", null), e3.updateAttachment(s2).then((t2) => (this._set("submitting", false), this._set("error", null), e3.mode = "view", t2)).catch((e4) => {
      throw this._set("submitting", false), this._set("error", new s$5("attachments:update-attachment", this.messages.updateErrorMessage, e4)), e4;
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
    const { submitting: e3, viewModel: t2 } = this, { state: s2 } = t2;
    return n$8("div", { class: this.classes(F$4.base, e$8.widget) }, e3 ? this._renderProgressBar() : null, "loading" === s2 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e3, visibleElements: t2 } = this;
    return e3 && t2.errorMessage ? n$8("div", { class: F$4.errorMessage, key: "error-message" }, e3.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e3, mode: t2, activeAttachmentInfo: s2 } = this.viewModel;
    return "add" === t2 ? this._renderAddForm() : "edit" === t2 ? this._renderDetailsForm(s2 || e3) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return n$8("div", { class: F$4.loaderContainer, key: "loader" }, n$8("div", { class: F$4.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? n$8("div", { class: F$4.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e3, selectedFile: t2 } = this, s2 = e3 || !t2, i3 = this.visibleElements.cancelAddButton ? n$8("button", { bind: this, class: this.classes(e$8.button, e$8.buttonTertiary, e$8.buttonSmall, e$8.buttonHalf, e3 && e$8.buttonDisabled), disabled: e3, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, a2 = this.visibleElements.addSubmitButton ? n$8("button", { class: this.classes(e$8.button, e$8.buttonSecondary, e$8.buttonSmall, e$8.buttonHalf, { [e$8.buttonDisabled]: s2 }), disabled: s2, type: "submit" }, this.messages.add) : null, n4 = t2 ? n$8("span", { class: F$4.fileName, key: "file-name" }, t2.name) : null, l4 = n$8("form", { afterCreate: b$3, afterRemoved: L, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, n$8("fieldset", { class: F$4.fileFieldset }, n4, n$8("label", { class: this.classes(F$4.fileLabel, e$8.button, e$8.buttonSecondary) }, t2 ? this.messages.changeFile : this.messages.selectFile, n$8("input", { bind: this, class: F$4.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), a2, i3);
    return n$8("div", { class: F$4.formNode, key: "add-form-container" }, l4);
  }
  _renderDetailsForm(e3) {
    const { visibleElements: t2, viewModel: s2, selectedFile: i3, submitting: a2 } = this, { capabilities: l4 } = s2, r2 = a2 || !i3;
    let o3, d2, m2, c5;
    i3 ? (o3 = i3.type, d2 = i3.name, m2 = i3.size) : e3 && "file" in e3 ? (o3 = e3.file.type, d2 = e3.file.name, m2 = e3.file.size) : e3 && "contentType" in e3 && (o3 = e3.contentType, d2 = e3.name, m2 = e3.size, c5 = e3.url);
    const h3 = l4.editing && l4.operations?.delete && t2.deleteButton ? n$8("button", { bind: this, class: this.classes(e$8.button, e$8.buttonSmall, e$8.buttonTertiary, F$4.deleteButton, { [e$8.buttonDisabled]: a2 }), disabled: a2, key: "delete-button", onclick: (t3) => this._submitDeleteAttachment(t3, e3), type: "button" }, this.messages.delete) : void 0, u3 = l4.editing && l4.operations?.update && t2.updateButton ? n$8("button", { class: this.classes(e$8.button, e$8.buttonSmall, e$8.buttonThird, { [e$8.buttonDisabled]: r2 }), disabled: r2, key: "update-button", type: "submit" }, this.messages.update) : void 0, b3 = this.visibleElements.cancelUpdateButton ? n$8("button", { bind: this, class: this.classes(e$8.button, e$8.buttonSmall, e$8.buttonTertiary, e$8.buttonThird, { [e$8.buttonDisabled]: a2 }), disabled: a2, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, f2 = l4.editing && l4.operations?.update ? n$8("fieldset", { class: F$4.fileFieldset, key: "file" }, n$8("span", { class: F$4.fileName, key: "file-name" }, d2), n$8("label", { class: this.classes(F$4.fileLabel, e$8.button, e$8.buttonSecondary) }, this.messages.changeFile, n$8("input", { bind: this, class: F$4.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, v3 = n$8("fieldset", { class: F$4.metadataFieldset, key: "size" }, n$8("label", null, O$2(this.messagesUnits, m2 ?? 0))), A2 = n$8("fieldset", { class: F$4.metadataFieldset, key: "content-type" }, n$8("label", null, o3)), w3 = null != c5 ? n$8("a", { class: F$4.itemLink, href: c5, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e3, 400), n$8("div", { class: F$4.itemLinkOverlay }, n$8("span", { class: F$4.itemLinkOverlayIcon }, n$8("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e3, 400), k2 = n$8("form", { afterCreate: b$3, afterRemoved: L, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (t3) => this._submitUpdateAttachment(t3, e3) }, n$8("div", { class: F$4.metadata }, v3, A2), f2, n$8("div", { class: F$4.actions }, h3, b3, u3));
    return n$8("div", { class: F$4.formNode, key: "edit-form-container" }, w3, k2);
  }
  _renderImageMask(e3, t2) {
    return e3 ? "file" in e3 ? this._renderGenericImageMask(e3.file.name, e3.file.type) : this._renderImageMaskForAttachment(e3, t2) : null;
  }
  _renderGenericImageMask(e3, t2) {
    const { supportsResizeAttachments: s2 } = this.viewModel, i3 = p$9(t2), a2 = { [F$4.itemImageResizable]: s2 };
    return n$8("div", { class: this.classes(F$4.itemMaskIcon, F$4.itemMask), key: i3 }, n$8("img", { alt: e3, class: this.classes(a2, F$4.itemImage), src: i3, title: e3 }));
  }
  _renderImageMaskForAttachment(e3, t2) {
    const { supportsResizeAttachments: s2 } = this.viewModel;
    if (!e3)
      return null;
    const { contentType: i3, name: a2, url: n4 } = e3;
    if (!s2 || !e$5(i3))
      return this._renderGenericImageMask(a2, i3);
    const l4 = this._getCSSTransform(e3), r2 = l4 ? { transform: l4, "image-orientation": "none" } : {}, o3 = `${n4}${n4?.includes("?") ? "&" : "?"}w=${t2}`, d2 = { [F$4.itemImageResizable]: s2 };
    return n$8("div", { class: this.classes(F$4.itemMask), key: o3 }, n$8("img", { alt: a2, class: this.classes(d2, F$4.itemImage), src: o3, styles: r2, title: a2 }));
  }
  _renderFile(e3) {
    const { file: t2 } = e3;
    return n$8("li", { class: F$4.item, key: t2 }, n$8("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F$4.itemButton, key: "details-button", onclick: () => this._startEditFile(e3), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e3), n$8("label", { class: F$4.itemLabel }, n$8("span", { class: F$4.itemFilename }, t2.name || this.messages.noTitle), n$8("span", { "aria-hidden": "true", class: this.classes(F$4.itemChevronIcon, v$4(this.container) ? i$3.left : i$3.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e3, displayType: t2 }) {
    const { viewModel: s2, effectiveDisplayType: i3 } = this, { capabilities: a2, supportsResizeAttachments: n4 } = s2, { contentType: l4, name: r2, url: o3 } = e3, d2 = this._renderImageMask(e3, "list" === t2 ? 48 : 400), m2 = a2.editing ? n$8("span", { "aria-hidden": "true", class: this.classes(F$4.itemChevronIcon, v$4(this.container) ? i$3.left : i$3.right) }) : null, c5 = [d2, "preview" === i3 && n4 && e$5(l4) ? null : n$8("label", { class: F$4.itemLabel }, n$8("span", { class: F$4.itemFilename }, r2 || this.messages.noTitle), m2)], u3 = a2.editing ? n$8("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F$4.itemButton, "data-attachment-info-id": e3.id, key: "details-button", onclick: () => this._startEditAttachment(e3), title: this.messages.attachmentDetails, type: "button" }, c5) : n$8("a", { class: F$4.itemButton, href: o3 ?? void 0, key: "details-link", target: "_blank" }, c5);
    return n$8("li", { class: F$4.item, key: e3 }, u3);
  }
  _renderAttachmentContainer() {
    const { effectiveDisplayType: e3, viewModel: t2, visibleElements: s2 } = this, { attachmentInfos: i3, capabilities: a2, fileInfos: n4 } = t2, l4 = !!i3?.length, r2 = !!n4?.length, o3 = { [F$4.containerList]: "preview" !== e3, [F$4.containerPreview]: "preview" === e3 }, d2 = a2.editing && a2.operations?.add && s2.addButton ? n$8("button", { bind: this, class: this.classes(e$8.button, e$8.buttonTertiary, F$4.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, n$8("span", { "aria-hidden": "true", class: this.classes(F$4.itemAddIcon, i$3.plus) }), this.messages.add) : void 0, m2 = l4 ? n$8("ul", { class: F$4.items, key: "attachments-list" }, i3.toArray().map((t3) => this._renderAttachmentInfo({ attachmentInfo: t3, displayType: e3 }))) : void 0, c5 = r2 ? n$8("ul", { class: F$4.items, key: "file-list" }, n4.toArray().map((e4) => this._renderFile(e4))) : void 0, h3 = r2 || l4 ? void 0 : n$8("div", { class: e$8.empty }, this.messages.noAttachments);
    return n$8("div", { class: this.classes(F$4.container, o3), key: "attachments-container" }, m2, c5, h3, d2);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e3) {
    const t2 = e3.target, s2 = t2.files?.item(0);
    this._set("selectedFile", s2);
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
e$6([y$6()], M$3.prototype, "capabilities", null), e$6([y$6()], M$3.prototype, "displayType", void 0), e$6([y$6({ readOnly: true })], M$3.prototype, "effectiveDisplayType", null), e$6([y$6()], M$3.prototype, "graphic", null), e$6([y$6()], M$3.prototype, "label", null), e$6([y$6(), e$7("esri/widgets/Attachments/t9n/Attachments")], M$3.prototype, "messages", void 0), e$6([y$6(), e$7("esri/core/t9n/Units")], M$3.prototype, "messagesUnits", void 0), e$6([y$6({ readOnly: true })], M$3.prototype, "selectedFile", void 0), e$6([y$6({ readOnly: true })], M$3.prototype, "submitting", void 0), e$6([y$6({ readOnly: true })], M$3.prototype, "error", void 0), e$6([y$6({ type: y$5 })], M$3.prototype, "viewModel", void 0), e$6([y$6()], M$3.prototype, "visibleElements", void 0), e$6([s$4("visibleElements")], M$3.prototype, "castVisibleElements", null), M$3 = e$6([c$b("esri.widgets.Attachments")], M$3);
const I$5 = M$3;
let o$2 = class o extends y$5 {
  constructor(t2) {
    super(t2), this.description = null, this.title = null;
  }
};
e$6([y$6()], o$2.prototype, "description", void 0), e$6([y$6()], o$2.prototype, "title", void 0), o$2 = e$6([c$b("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], o$2);
const c$9 = o$2;
const p$8 = "esri-feature-element-info", n$7 = { base: p$8, title: `${p$8}__title`, description: `${p$8}__description` };
let c$8 = class c extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return n$8("div", { class: n$7.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e3 } = this;
    return e3 ? n$8(e$9, { class: n$7.title, level: this.headingLevel }, e3) : null;
  }
  _renderDescription() {
    const { description: e3 } = this;
    return e3 ? n$8("div", { class: n$7.description, key: "description" }, e3) : null;
  }
};
e$6([y$6()], c$8.prototype, "description", void 0), e$6([y$6()], c$8.prototype, "headingLevel", void 0), e$6([y$6()], c$8.prototype, "title", void 0), c$8 = e$6([c$b("esri.widgets.Feature.support.FeatureElementInfo")], c$8);
const l$5 = c$8;
const d$4 = { base: "esri-feature-attachments" };
let c$7 = class c2 extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this.attachmentsWidget = new I$5(), this.headingLevel = 2, this.viewModel = new c$9();
  }
  initialize() {
    this._featureElementInfo = new l$5(), this.addHandles([d$5(() => [this.viewModel?.description, this.viewModel?.title, this.headingLevel], () => this._setupFeatureElementInfo(), P$1), d$5(() => this.viewModel, (e3) => this.attachmentsWidget.viewModel = e3, P$1)]);
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
    return n$8("div", { class: d$4.base }, this._featureElementInfo?.render(), e3?.render());
  }
  _setupFeatureElementInfo() {
    const { description: e3, title: t2, headingLevel: i3 } = this;
    this._featureElementInfo?.set({ description: e3, title: t2, headingLevel: i3 });
  }
};
e$6([y$6({ readOnly: true })], c$7.prototype, "attachmentsWidget", void 0), e$6([y$6()], c$7.prototype, "description", null), e$6([y$6()], c$7.prototype, "displayType", null), e$6([y$6()], c$7.prototype, "graphic", null), e$6([y$6()], c$7.prototype, "headingLevel", void 0), e$6([y$6()], c$7.prototype, "title", null), e$6([y$6({ type: c$9 })], c$7.prototype, "viewModel", void 0), c$7 = e$6([c$b("esri.widgets.Feature.FeatureAttachments")], c$7);
const h$5 = c$7;
let n$6 = class n extends g$6 {
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
    t2 && e3 && (x$4(r2, { graphic: e3 }).catch(() => null), this._set("created", null));
  }
  async _createContent(t2) {
    const e3 = this.graphic;
    if (!e3 || !t2)
      return;
    const r2 = x$4(t2, { graphic: e3 }).catch(() => null);
    this._loadingPromise = r2, this.notifyChange("state");
    const o3 = await r2;
    r2 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o3));
  }
};
e$6([y$6({ readOnly: true })], n$6.prototype, "created", void 0), e$6([y$6()], n$6.prototype, "creator", void 0), e$6([y$6()], n$6.prototype, "destroyer", void 0), e$6([y$6({ type: c$a })], n$6.prototype, "graphic", void 0), e$6([y$6({ readOnly: true })], n$6.prototype, "state", null), n$6 = e$6([c$b("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], n$6);
const p$7 = n$6;
const n$5 = "esri-feature-content", c$6 = { base: n$5, loaderContainer: `${n$5}__loader-container`, loader: `${n$5}__loader` };
let l$4 = class l extends O$1 {
  constructor(e3, r2) {
    super(e3, r2), this.viewModel = null, this._addTargetToAnchors = (e4) => {
      Array.from(e4.querySelectorAll("a")).forEach((e5) => {
        C$2(e5.href) && !e5.hasAttribute("target") && e5.setAttribute("target", "_blank");
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
    return n$8("div", { class: c$6.base }, "loading" === e3 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return n$8("div", { class: c$6.loaderContainer, key: "loader" }, n$8("div", { class: c$6.loader }));
  }
  _renderCreated() {
    const e3 = this.viewModel?.created;
    return e3 ? e3 instanceof HTMLElement ? n$8("div", { afterCreate: this._attachToNode, bind: e3, key: e3 }) : e$a(e3) ? n$8("div", { key: e3 }, !e3.destroyed && e3.render()) : n$8("div", { afterCreate: this._addTargetToAnchors, innerHTML: e3, key: e3 }) : null;
  }
  _attachToNode(e3) {
    const r2 = this;
    e3.appendChild(r2);
  }
};
e$6([y$6()], l$4.prototype, "creator", null), e$6([y$6()], l$4.prototype, "graphic", null), e$6([y$6({ type: p$7 })], l$4.prototype, "viewModel", void 0), l$4 = e$6([c$b("esri.widgets.Feature.FeatureContent")], l$4);
const p$6 = l$4;
let l$3 = class l2 extends g$6 {
  constructor(o3) {
    super(o3), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o3, fieldInfos: e3 } = this, s2 = [];
    return e3?.forEach((e4) => {
      if (!(!e4.hasOwnProperty("visible") || e4.visible))
        return;
      const t2 = e4.clone();
      t2.label = q$1(t2, o3), s2.push(t2);
    }), s2;
  }
};
e$6([y$6()], l$3.prototype, "attributes", void 0), e$6([y$6({ type: [i$4] })], l$3.prototype, "expressionInfos", void 0), e$6([y$6()], l$3.prototype, "description", void 0), e$6([y$6({ type: [c$d] })], l$3.prototype, "fieldInfos", void 0), e$6([y$6({ readOnly: true })], l$3.prototype, "formattedFieldInfos", null), e$6([y$6()], l$3.prototype, "title", void 0), l$3 = e$6([c$b("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], l$3);
const n$4 = l$3;
const s$3 = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function a$2(e3) {
  let a2 = null;
  return s$3.some((s2) => (s2.pattern.test(e3) && (a2 = s2), !!a2)), a2;
}
function p$5(s2, p4) {
  if ("string" != typeof p4 || !p4)
    return p4;
  const r2 = a$2(p4);
  if (!r2)
    return p4;
  const t2 = p4.match(r2.pattern), n4 = t2 && t2[2], l4 = r$2(r$2(r2.label, { messages: s2, hierPart: n4 }), { appName: r2.appName }), i3 = r2.target ? ` target="${r2.target}"` : "", o3 = "_blank" === r2.target ? ' rel="noreferrer"' : "";
  return p4.replace(r2.pattern, `<a${i3} href="$1"${o3}>${l4}</a>`);
}
const u$3 = "esri-feature-fields", m$4 = { base: u$3, fieldHeader: `${u$3}__field-header`, fieldData: `${u$3}__field-data`, fieldDataDate: `${u$3}__field-data--date` };
let c$5 = class c3 extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this.viewModel = new n$4(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new l$5(), this.addHandles(d$5(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P$1));
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
    return n$8("div", { class: m$4.base }, this._featureElementInfo?.render(), this._renderFields());
  }
  _renderFieldInfo(e3, t2) {
    const { attributes: s2 } = this.viewModel, r2 = e3.fieldName, i3 = e3.label || r2, o3 = s2 ? null == s2[r2] ? "" : s2[r2] : "", l4 = !(!e3.format || !e3.format.dateFormat), n4 = "number" == typeof o3 && !l4 ? this._forceLTR(o3) : p$5(this.messagesURIUtils, o3), d2 = { [m$4.fieldDataDate]: l4 };
    return n$8("tr", { key: `fields-element-info-row-${r2}-${t2}` }, n$8("th", { class: m$4.fieldHeader, innerHTML: i3, key: `fields-element-info-row-header-${r2}-${t2}` }), n$8("td", { class: this.classes(m$4.fieldData, d2), innerHTML: n4, key: `fields-element-info-row-data-${r2}-${t2}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e3 } = this.viewModel;
    return e3?.length ? n$8("table", { class: e$8.table, summary: this.messages.fieldsSummary }, n$8("tbody", null, e3.map((e4, t2) => this._renderFieldInfo(e4, t2)))) : null;
  }
  _setupFeatureElementInfo() {
    const { description: e3, title: t2 } = this;
    this._featureElementInfo?.set({ description: e3, title: t2 });
  }
  _forceLTR(e3) {
    return `&lrm;${e3}`;
  }
};
e$6([y$6()], c$5.prototype, "attributes", null), e$6([y$6()], c$5.prototype, "description", null), e$6([y$6()], c$5.prototype, "expressionInfos", null), e$6([y$6()], c$5.prototype, "fieldInfos", null), e$6([y$6()], c$5.prototype, "title", null), e$6([y$6({ type: n$4, nonNullable: true })], c$5.prototype, "viewModel", void 0), e$6([y$6(), e$7("esri/widgets/Feature/t9n/Feature")], c$5.prototype, "messages", void 0), e$6([y$6(), e$7("esri/widgets/support/t9n/uriUtils")], c$5.prototype, "messagesURIUtils", void 0), c$5 = e$6([c$b("esri.widgets.Feature.FeatureFields")], c$5);
const h$4 = c$5;
const e$4 = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const f$4 = "esri.widgets.Feature.support.relatedFeatureUtils", m$3 = s$6.getLogger(f$4), d$3 = /* @__PURE__ */ new Map();
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
  const { relationships: o3 } = t2;
  return o3.some((t3) => t3.id === parseInt(e3, 10) && (r2 = t3, true)), r2;
}
function g$5({ originRelationship: e3, relationships: t2, layerId: r2 }) {
  let o3 = null;
  return t2 && t2.some((t3) => (`${t3.relatedTableId}` === r2 && t3.id === e3?.id && (o3 = t3), !!o3)), o3;
}
function h$3(e3, t2) {
  const r2 = t2.toLowerCase();
  for (const o3 in e3)
    if (o3.toLowerCase() === r2)
      return e3[o3];
  return null;
}
function F$3(e3, t2) {
  const r2 = j$3(e3, t2);
  if (!r2)
    return;
  return { url: `${t2.url}/${r2.relatedTableId}`, sourceSpatialReference: t2.spatialReference, relation: r2, relatedFields: [], outStatistics: [] };
}
function I$4(e3, t2) {
  if (!t2)
    return;
  if (!e3)
    return;
  const { features: r2, statsFeatures: o3 } = e3, s2 = r2?.value;
  t2.relatedFeatures = s2 ? s2.features : [];
  const i3 = o3?.value;
  t2.relatedStatsFeatures = i3 ? i3.features : [];
}
function S$2(e3, t2, r2, o3) {
  const s2 = new d$6();
  return s2.outFields = ["*"], s2.relationshipId = "number" == typeof t2.id ? t2.id : parseInt(t2.id, 10), s2.objectIds = [e3.attributes[r2.objectIdField]], r2.queryRelatedFeatures?.(s2, o3) ?? Promise.resolve({});
}
function w$4(e3, t2, r2) {
  let o3 = 0;
  const s2 = [];
  for (; o3 < t2.length; )
    s2.push(`${e3} IN (${t2.slice(o3, r2 + o3)})`), o3 += r2;
  return s2.join(" OR ");
}
function b$2(e3) {
  return e3 ? s$8(e3) : void 0;
}
function R$1(e3) {
  return e3 ? s$8(e3, (e4, t2) => JSON.stringify(e4.toJSON()) === JSON.stringify(t2.toJSON())) : void 0;
}
async function U(e3, t2, r2, o3) {
  const s2 = r2.layerId.toString(), { layerInfo: u3, relation: p4, relatedFields: c5, outStatistics: f2, url: m2, sourceSpatialReference: d2 } = t2, y2 = b$2(c5), j2 = R$1(f2);
  if (!u3 || !p4)
    return null;
  const F2 = g$5({ originRelationship: p4, relationships: u3.relationships, layerId: s2 });
  if (F2?.relationshipTableId && F2.keyFieldInRelationshipTable) {
    const t3 = (await S$2(e3, F2, r2, o3))[e3.attributes[r2.objectIdField]];
    if (!t3)
      return null;
    const s3 = t3.features.map((e4) => e4.attributes[u3.objectIdField]);
    if (j2?.length && u3.supportsStatistics) {
      const e4 = new b$4();
      e4.where = w$4(u3.objectIdField, s3, 1e3), e4.outFields = y2, e4.outStatistics = j2, e4.sourceSpatialReference = d2;
      const r3 = { features: Promise.resolve(t3), statsFeatures: s$7(m2, e4) };
      return v$5(r3);
    }
  }
  const I3 = F2?.keyField;
  if (I3) {
    const t3 = pe(q(u3.fields, I3)), r3 = h$3(e3.attributes, p4.keyField), s3 = t3 ? `${I3}=${r3}` : `${I3}='${r3}'`, c6 = s$7(m2, new b$4({ where: s3, outFields: y2, sourceSpatialReference: d2 }), o3), f3 = !!j2?.length && u3.supportsStatistics ? s$7(m2, new b$4({ where: s3, outFields: y2, outStatistics: j2, sourceSpatialReference: d2 }), o3) : null, g3 = { features: c6 };
    return f3 && (g3.statsFeatures = f3), v$5(g3);
  }
  return null;
}
function $(t2, r2) {
  return j$4(t2, { query: { f: "json" }, signal: r2?.signal });
}
function v$2({ relatedInfos: e3, layer: t2 }, o3) {
  const n4 = {};
  return e3.forEach((e4, o4) => {
    const { relation: s2 } = e4;
    if (!s2) {
      const e5 = new s$5("relation-required", "A relation is required on a layer to retrieve related records.");
      throw m$3.error(e5), e5;
    }
    const { relatedTableId: i3 } = s2;
    if ("number" != typeof i3) {
      const e5 = new s$5("A related table ID is required on a layer to retrieve related records.");
      throw m$3.error(e5), e5;
    }
    const l4 = `${t2.url}/${i3}`, a2 = d$3.get(l4), u3 = a2 ?? $(l4);
    a2 || d$3.set(l4, u3), n4[o4] = u3;
  }), h$6(v$5(n4), o3);
}
function N({ graphic: e3, relatedInfos: t2, layer: r2 }, o3) {
  const s2 = {};
  return t2.forEach((t3, i3) => {
    t3.layerInfo && (s2[i3] = U(e3, t3, r2, o3));
  }), v$5(s2);
}
function T$3({ relatedInfo: e3, fieldName: t2, fieldInfo: r2 }) {
  if (e3.relatedFields?.push(t2), r2.statisticType) {
    const o3 = new m$6({ statisticType: r2.statisticType, onStatisticField: t2, outStatisticFieldName: t2 });
    e3.outStatistics?.push(o3);
  }
}
function q(e3, t2) {
  if (null != e3) {
    t2 = t2.toLowerCase();
    for (const r2 of e3)
      if (r2 && r2.name.toLowerCase() === t2)
        return r2;
  }
  return null;
}
const I$3 = { chartAnimation: true };
let v$1 = class v extends g$6 {
  constructor(t2) {
    super(t2), this.abilities = { ...I$3 }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = false, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t2) {
    return { ...I$3, ...t2 };
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
    const { formattedMediaInfoCount: e3 } = this, o3 = (t2 + e3) % e3;
    this.activeMediaInfoIndex = o3;
  }
  _pageContentElementMedia(t2) {
    const { activeMediaInfoIndex: e3 } = this, o3 = e3 + t2;
    this._setContentElementMedia(o3);
  }
  _formatMediaInfos() {
    const { mediaInfos: t2, layer: e3 } = this, i3 = this.attributes ?? {}, r2 = this.formattedAttributes ?? {}, a2 = this.expressionAttributes ?? {}, s2 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return t2?.map((t3) => {
      const o3 = t3?.clone();
      if (!o3)
        return null;
      if (o3.title = D$1({ attributes: i3, fieldInfoMap: s2, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o3.title }), o3.caption = D$1({ attributes: i3, fieldInfoMap: s2, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o3.caption }), o3.altText = D$1({ attributes: i3, fieldInfoMap: s2, globalAttributes: r2, expressionAttributes: a2, layer: e3, text: o3.altText }), "image" === o3.type) {
        const { value: t4 } = o3;
        return this._setImageValue({ value: t4, formattedAttributes: r2, layer: e3 }), o3.value.sourceURL ? o3 : void 0;
      }
      if ("pie-chart" === o3.type || "line-chart" === o3.type || "column-chart" === o3.type || "bar-chart" === o3.type) {
        const { value: t4 } = o3;
        return this._setChartValue({ value: t4, chartType: o3.type, attributes: i3, formattedAttributes: r2, layer: e3, expressionAttributes: a2 }), o3;
      }
      return null;
    }).filter(k$3) ?? [];
  }
  _setImageValue(t2) {
    const e3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: o3, formattedAttributes: i3, layer: r2 } = t2, { linkURL: a2, sourceURL: s2 } = o3;
    if (s2) {
      const t3 = P(s2, r2);
      o3.sourceURL = z$1({ formattedAttributes: i3, template: t3, fieldInfoMap: e3 });
    }
    if (a2) {
      const t3 = P(a2, r2);
      o3.linkURL = z$1({ formattedAttributes: i3, template: t3, fieldInfoMap: e3 });
    }
  }
  _setChartValue(t2) {
    const { value: e3, attributes: o3, formattedAttributes: i3, chartType: r2, layer: a2, expressionAttributes: s2 } = t2, { popupTemplate: l4, relatedInfos: n4 } = this, { fields: p4, normalizeField: d2 } = e3, m2 = a2;
    e3.fields = R$2(p4, m2), d2 && (e3.normalizeField = v$6(d2, m2));
    if (!p4.some((t3) => !!(null != i3[t3] || de(t3) && n4?.size)))
      return;
    const h3 = l4?.fieldInfos ?? [];
    p4.forEach((t3, a3) => {
      const l5 = e3.colors?.[a3];
      if (de(t3))
        return void (e3.series = [...e3.series, ...this._getRelatedChartInfos({ fieldInfos: h3, fieldName: t3, formattedAttributes: i3, chartType: r2, value: e3, color: l5 })]);
      const n5 = this._getChartOption({ value: e3, attributes: o3, chartType: r2, formattedAttributes: i3, expressionAttributes: s2, fieldName: t3, fieldInfos: h3, color: l5 });
      e3.series.push(n5);
    });
  }
  _getRelatedChartInfos(t2) {
    const { fieldInfos: e3, fieldName: o3, formattedAttributes: i3, chartType: r2, value: a2, color: s2 } = t2, l4 = [], n4 = y$4(o3), p4 = n4 && this.relatedInfos?.get(n4.layerId.toString());
    if (!p4)
      return l4;
    const { relatedFeatures: d2, relation: u3 } = p4;
    if (!u3 || !d2)
      return l4;
    const { cardinality: f2 } = u3;
    d2.forEach((t3) => {
      const { attributes: p5 } = t3;
      p5 && Object.keys(p5).forEach((t4) => {
        t4 === n4.fieldName && l4.push(this._getChartOption({ value: a2, attributes: p5, formattedAttributes: i3, fieldName: o3, chartType: r2, relatedFieldName: t4, hasMultipleRelatedFeatures: d2?.length > 1, fieldInfos: e3, color: s2 }));
      });
    });
    return "one-to-many" === f2 || "many-to-many" === f2 ? l4 : [l4[0]];
  }
  _getTooltip({ label: t2, value: e3, chartType: o3 }) {
    return "pie-chart" === o3 ? `${t2}` : `${t2}: ${e3}`;
  }
  _getChartOption(t2) {
    const { value: e3, attributes: o3, formattedAttributes: i3, expressionAttributes: r2, fieldName: a2, relatedFieldName: n4, fieldInfos: p4, chartType: d2, hasMultipleRelatedFeatures: u3, color: I3 } = t2, v3 = this.layer, M3 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: A2, tooltipField: g3 } = e3, x2 = A2 ? de(A2) ? o3[y$4(A2).fieldName] : o3[A2] : null, _2 = M$4(a2) && r2 && void 0 !== r2[a2] ? r2[a2] : n4 && void 0 !== o3[n4] ? o3[n4] : void 0 !== o3[a2] ? o3[a2] : i3[a2], C2 = new i$5({ fieldName: a2, color: I3, value: void 0 === _2 ? null : _2 && x2 ? _2 / x2 : _2 });
    if (de(a2)) {
      const t3 = M3.get(a2.toLowerCase()), e4 = g3 && M3.get(g3.toLowerCase()), r3 = t3?.fieldName ?? a2, s2 = u3 && g3 ? y$4(g3).fieldName : e4?.fieldName ?? g3, l4 = u3 && s2 ? o3[s2] : i3[s2] ?? t3?.label ?? t3?.fieldName ?? n4, p5 = u3 && n4 ? o3[n4] : i3[r3];
      return C2.tooltip = this._getTooltip({ label: l4, value: p5, chartType: d2 }), C2;
    }
    const T3 = Y(p4, a2), N2 = v$6(a2, v3), F2 = g3 && void 0 !== i3[g3] ? i3[g3] : q$1(T3 || new c$d({ fieldName: N2 }), this.popupTemplate?.expressionInfos), j2 = i3[N2];
    return C2.tooltip = this._getTooltip({ label: F2, value: j2, chartType: d2 }), C2;
  }
};
e$6([y$6()], v$1.prototype, "abilities", void 0), e$6([s$4("abilities")], v$1.prototype, "castAbilities", null), e$6([y$6()], v$1.prototype, "activeMediaInfoIndex", void 0), e$6([y$6({ readOnly: true })], v$1.prototype, "activeMediaInfo", null), e$6([y$6()], v$1.prototype, "attributes", void 0), e$6([y$6()], v$1.prototype, "description", void 0), e$6([y$6()], v$1.prototype, "fieldInfoMap", void 0), e$6([y$6()], v$1.prototype, "formattedAttributes", void 0), e$6([y$6()], v$1.prototype, "expressionAttributes", void 0), e$6([y$6({ readOnly: true })], v$1.prototype, "formattedMediaInfos", null), e$6([y$6()], v$1.prototype, "isAggregate", void 0), e$6([y$6()], v$1.prototype, "layer", void 0), e$6([y$6({ readOnly: true })], v$1.prototype, "formattedMediaInfoCount", null), e$6([y$6()], v$1.prototype, "mediaInfos", void 0), e$6([y$6()], v$1.prototype, "popupTemplate", void 0), e$6([y$6()], v$1.prototype, "relatedInfos", void 0), e$6([y$6()], v$1.prototype, "title", void 0), v$1 = e$6([c$b("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v$1);
const M$2 = v$1;
const g$4 = "esri-feature-media", M$1 = { base: g$4, mediaContainer: `${g$4}__container`, mediaItemContainer: `${g$4}__item-container`, mediaItem: `${g$4}__item`, mediaItemText: `${g$4}__item-text`, mediaItemTitle: `${g$4}__item-title`, mediaItemCaption: `${g$4}__item-caption`, mediaNavigation: `${g$4}__item-navigation`, mediaPagination: `${g$4}__pagination`, mediaPaginationText: `${g$4}__pagination-text`, mediaPrevious: `${g$4}__previous`, mediaPreviousIconLTR: `${g$4}__previous-icon`, mediaPreviousIconRTL: `${g$4}__previous-icon--rtl`, mediaNext: `${g$4}__next`, mediaNextIconLTR: `${g$4}__next-icon`, mediaNextIconRTL: `${g$4}__next-icon--rtl`, mediaChart: `${g$4}__chart`, mediaPaginationButton: `${g$4}__pagination-button`, mediaPaginationIcon: `${g$4}__pagination-icon`, mediaChartRendered: `${g$4}__chart--rendered` }, w$3 = 15, I$2 = "category", A = "value", y$3 = "rgba(50, 50, 50, 1)", C$1 = 250, x$3 = 500, T$2 = 200;
let b$1 = class b extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new M$2(), this.messages = null, this._disposeChart = (e4) => {
      this._chartRootMap.get(e4)?.dispose(), this._chartRootMap.delete(e4);
    }, this._createChart = async (e4) => {
      const { destroyed: t3, viewModel: i3 } = this;
      if (t3 || !i3 || !e4)
        return;
      const { createRoot: r2 } = await import("./chunk-e-4AEriZ.js"), a2 = await r2(e4);
      this._chartRootMap.set(e4, a2), this._renderChart({ mediaInfo: i3.activeMediaInfo, root: a2 });
    };
  }
  initialize() {
    this._featureElementInfo = new l$5(), this.addHandles([d$5(() => [this.viewModel?.activeMediaInfo, this.viewModel?.activeMediaInfoIndex], () => this._setupMediaRefreshTimer(), P$1), d$5(() => [this.viewModel?.description, this.viewModel?.title], () => this._setupFeatureElementInfo(), P$1)]);
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
    return n$8("div", { bind: this, class: M$1.base, onkeyup: this._handleMediaKeyup }, this._featureElementInfo?.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e3, activeMediaInfoIndex: t2 } = this.viewModel, i3 = this._renderMediaText();
    return e3 ? n$8("div", { class: M$1.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), n$8("div", { class: M$1.mediaNavigation }, i3, e3 > 1 ? n$8("div", { class: M$1.mediaPagination }, this._renderMediaPageButton("previous"), n$8("span", { class: M$1.mediaPaginationText }, s$9(this.messages.pageText, { index: t2 + 1, total: e3 })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e3 } = this.viewModel;
    if (!e3)
      return null;
    const t2 = e3 && e3.title ? n$8("div", { class: M$1.mediaItemTitle, innerHTML: e3.title, key: "media-title" }) : null, i3 = e3 && e3.caption ? n$8("div", { class: M$1.mediaItemCaption, innerHTML: e3.caption, key: "media-caption" }) : null;
    return t2 || i3 ? n$8("div", { class: M$1.mediaItemText, key: "media-text" }, t2, i3) : null;
  }
  _renderImageMediaInfo(e3) {
    const { _refreshIntervalInfo: t2 } = this, { activeMediaInfoIndex: i3, formattedMediaInfoCount: r2 } = this.viewModel, { value: a2, refreshInterval: s2, altText: o3, title: n4, type: l4 } = e3, { sourceURL: d2, linkURL: m2 } = a2, p4 = C$2(m2 ?? void 0) ? "_blank" : "_self", h3 = "_blank" === p4 ? "noreferrer" : "", u3 = s2 ? t2 : null, _2 = u3 ? u3.timestamp : 0, v3 = u3 ? u3.sourceURL : d2, g3 = n$8("img", { alt: o3 || n4, key: `media-${l4}-${i3}-${r2}-${_2}`, src: v3 ?? void 0 });
    return (m2 ? n$8("a", { href: m2, rel: h3, target: p4, title: n4 }, g3) : null) ?? g3;
  }
  _renderChartMediaInfo(e3) {
    const { activeMediaInfoIndex: t2, formattedMediaInfoCount: i3 } = this.viewModel;
    return n$8("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: M$1.mediaChart, key: `media-${e3.type}-${t2}-${i3}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e3 } = this.viewModel;
    return e3 ? "image" === e3.type ? this._renderImageMediaInfo(e3) : e3.type.includes("chart") ? this._renderChartMediaInfo(e3) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e3 } = this.viewModel;
    return e3 ? n$8("div", { class: M$1.mediaItemContainer, key: "media-container" }, n$8("div", { class: M$1.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e3) {
    if (this.viewModel.formattedMediaInfoCount < 2)
      return null;
    const t2 = "previous" === e3, i3 = t2 ? this.messages.previous : this.messages.next, r2 = t2 ? "chevron-left" : "chevron-right", a2 = t2 ? "media-previous" : "media-next", s2 = t2 ? this._previous : this._next;
    return n$8("button", { "aria-label": i3, bind: this, class: M$1.mediaPaginationButton, key: a2, onclick: s2, tabIndex: 0, title: i3, type: "button" }, n$8("calcite-icon", { class: M$1.mediaPaginationIcon, icon: r2, scale: "s" }));
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
    const { colorAm5: t2 } = await import("./chunk-cy2IatuJ.js"), i3 = /* @__PURE__ */ new Map();
    return e3.forEach((e4) => {
      e4.color && i3.set(e4, t2(e4.color.toCss(true)));
    }), i3;
  }
  async _getRendererColors() {
    const { colorAm5: e3 } = await import("./chunk-cy2IatuJ.js"), t2 = /* @__PURE__ */ new Map(), i3 = this._getRenderer(), r2 = "default";
    if (!i3)
      return t2;
    const a2 = await x$5(i3);
    a2.delete(r2);
    return Array.from(a2.values()).every((e4) => 1 === e4?.length) ? (Array.from(a2.keys()).forEach((i4) => {
      const r3 = a2.get(i4)?.[0]?.toCss(true);
      r3 && t2.set(i4, e3(r3));
    }), t2) : t2;
  }
  _handleMediaKeyup(e3) {
    const t2 = c$e(e3);
    "ArrowLeft" === t2 && (e3.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t2 && (e3.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && (!!this.viewModel.abilities.chartAnimation && !e$4());
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C$1 : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? x$3 : 0;
  }
  async _renderChart(e3) {
    const { root: t2, mediaInfo: i3 } = e3, { value: r2, type: a2 } = i3, { ResponsiveThemeAm5: s2, DarkThemeAm5: o3, AnimatedThemeAm5: n4, ColorSetAm5: l4, ThemeAm5: d2, esriChartColorSet: m2 } = await import("./chunk-cy2IatuJ.js"), c5 = d2.new(t2);
    c5.rule("ColorSet").set("colors", m2), c5.rule("ColorSet").set("reuse", true);
    const p4 = [s2.new(t2), c5];
    r$3() && p4.push(o3.new(t2)), this._canAnimateChart() && p4.push(n4.new(t2)), t2.setThemes(p4);
    const h3 = await this._getRendererColors(), u3 = await this._getSeriesColors(r2.series), f2 = l4.new(t2, {}), v3 = u3.get(r2.series[0]), g3 = v3 ? { lineSettings: { stroke: v3 } } : void 0, M3 = r2.series.map((e4, t3) => {
      const i4 = u3.get(e4) || h3.get(e4.fieldName) || f2.getIndex(t3);
      return { [I$2]: e4.tooltip, [A]: e4.value, columnSettings: { fill: i4, stroke: i4 }, ...g3 };
    }).filter((e4) => "pie-chart" !== a2 || null != e4.value && e4.value > 0);
    "pie-chart" === a2 ? this._createPieChart(e3, M3) : this._createXYChart(e3, M3);
  }
  _getDirection() {
    return v$4(this.container) ? "rtl" : "ltr";
  }
  _isInversed() {
    return !!v$4(this.container);
  }
  async _customizeChartTooltip(e3, t2 = "horizontal") {
    const { colorAm5: i3 } = await import("./chunk-cy2IatuJ.js");
    e3.setAll({ pointerOrientation: t2 }), e3.get("background")?.setAll({ stroke: i3(y$3) }), e3.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: T$2 });
  }
  async _createPieChart(e3, t2) {
    const { TooltipAm5: i3 } = await import("./chunk-cy2IatuJ.js"), { PieChartAm5: r2, PieSeriesAm5: a2 } = await import("./chunk-GA7nITU5.js"), { mediaInfo: s2, root: o3 } = e3, { title: n4 } = s2, l4 = 5, d2 = s2?.altText || s2?.title || "", m2 = o3.container.children.push(r2.new(o3, { ariaLabel: d2, focusable: true, paddingBottom: l4, paddingTop: l4, paddingLeft: l4, paddingRight: l4 })), c5 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", p4 = i3.new(o3, { labelText: c5 }), h3 = m2.series.push(a2.new(o3, { name: n4, valueField: A, categoryField: I$2, tooltip: p4 }));
    h3.ticks.template.set("forceHidden", true), h3.labels.template.set("forceHidden", true), h3.slices.template.states.create("active", { shiftRadius: l4 }), this._customizeChartTooltip(p4), h3.slices.template.setAll({ ariaLabel: c5, focusable: true, templateField: "columnSettings" }), h3.data.setAll(t2), h3.appear(this._getChartSeriesAnimationMS()), m2.appear(this._getChartAnimationMS()), m2.root.dom.classList.toggle(M$1.mediaChartRendered, true);
  }
  _getMinSeriesValue(e3) {
    let t2 = 0;
    return e3.forEach((e4) => t2 = Math.min(e4.value, t2)), t2;
  }
  async _createColumnChart(e3, t2, i3) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-cy2IatuJ.js"), { CategoryAxisAm5: s2, AxisRendererXAm5: o3, ValueAxisAm5: n4, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./chunk-nvtm3UKZ.js"), { mediaInfo: m2, root: c5 } = t2, { value: p4, title: h3 } = m2;
    e3.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u3 = e3.xAxes.push(s2.new(c5, { renderer: o3.new(c5, { inversed: this._isInversed() }), categoryField: I$2 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.yAxes.push(n4.new(c5, { renderer: l4.new(c5, { inside: false }), min: this._getMinSeriesValue(p4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryX}", v3 = r2.new(c5, { labelText: _2 }), g3 = e3.series.push(d2.new(c5, { name: h3, xAxis: u3, yAxis: f2, valueYField: A, categoryXField: I$2, tooltip: v3 }));
    this._customizeChartTooltip(v3), g3.columns.template.setAll({ ariaLabel: _2, focusable: true, templateField: "columnSettings" }), p4.series.length > w$3 && e3.set("scrollbarX", a2.new(c5, { orientation: "horizontal" })), u3.data.setAll(i3), g3.data.setAll(i3), g3.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e3, t2, i3) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-cy2IatuJ.js"), { CategoryAxisAm5: s2, AxisRendererXAm5: o3, ValueAxisAm5: n4, AxisRendererYAm5: l4, ColumnSeriesAm5: d2 } = await import("./chunk-nvtm3UKZ.js"), { mediaInfo: m2, root: c5 } = t2, { value: p4, title: h3 } = m2;
    e3.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const u3 = e3.yAxes.push(s2.new(c5, { renderer: l4.new(c5, { inversed: true }), categoryField: I$2 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.xAxes.push(n4.new(c5, { renderer: o3.new(c5, { inside: false, inversed: this._isInversed() }), min: this._getMinSeriesValue(p4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryY}", v3 = r2.new(c5, { labelText: _2 }), g3 = e3.series.push(d2.new(c5, { name: h3, xAxis: f2, yAxis: u3, valueXField: A, categoryYField: I$2, tooltip: v3 }));
    this._customizeChartTooltip(v3, "vertical"), g3.columns.template.setAll({ ariaLabel: _2, focusable: true, templateField: "columnSettings" }), p4.series.length > w$3 && e3.set("scrollbarY", a2.new(c5, { orientation: "vertical" })), u3.data.setAll(i3), g3.data.setAll(i3), g3.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e3, t2, i3) {
    const { TooltipAm5: r2, ScrollbarAm5: a2 } = await import("./chunk-cy2IatuJ.js"), { CategoryAxisAm5: s2, AxisRendererXAm5: o3, ValueAxisAm5: n4, AxisRendererYAm5: l4, LineSeriesAm5: d2 } = await import("./chunk-nvtm3UKZ.js"), { root: m2, mediaInfo: c5 } = t2, { value: p4, title: h3 } = c5;
    e3.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const u3 = e3.xAxes.push(s2.new(m2, { renderer: o3.new(m2, { inversed: this._isInversed() }), categoryField: I$2 }));
    u3.get("renderer").labels.template.setAll({ forceHidden: true });
    const f2 = e3.yAxes.push(n4.new(m2, { renderer: l4.new(m2, { inside: false }), min: this._getMinSeriesValue(p4.series) }));
    f2.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const _2 = "{categoryX}", v3 = i3[0]?.lineSettings?.stroke, g3 = r2.new(m2, { getFillFromSprite: !v3, labelText: _2 });
    v3 && g3.get("background")?.setAll({ fill: v3 });
    const M3 = e3.series.push(d2.new(m2, { name: h3, xAxis: u3, yAxis: f2, valueYField: A, categoryXField: I$2, tooltip: g3 }));
    M3.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(g3, "vertical"), p4.series.length > w$3 && e3.set("scrollbarX", a2.new(m2, { orientation: "horizontal" })), u3.data.setAll(i3), M3.data.setAll(i3), M3.appear(this._getChartSeriesAnimationMS()), e3.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e3, t2) {
    const { XYChartAm5: i3, XYCursorAm5: r2 } = await import("./chunk-nvtm3UKZ.js"), { root: a2, mediaInfo: s2 } = e3, { type: o3 } = s2, n4 = s2?.altText || s2?.title || "", l4 = a2.container.children.push(i3.new(a2, { ariaLabel: n4, focusable: true, panX: true, panY: true }));
    l4.set("cursor", r2.new(a2, {})), "column-chart" === o3 && await this._createColumnChart(l4, e3, t2), "bar-chart" === o3 && await this._createBarChart(l4, e3, t2), "line-chart" === o3 && await this._createLineChart(l4, e3, t2), l4.root.dom.classList.toggle(M$1.mediaChartRendered, true);
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
    const { refreshInterval: t2, value: i3 } = e3;
    if (!t2)
      return;
    const r2 = 6e4 * t2;
    this._updateMediaInfoTimestamp(i3.sourceURL);
    const a2 = setInterval(() => {
      this._updateMediaInfoTimestamp(i3.sourceURL);
    }, r2);
    this._refreshTimer = a2;
  }
  _getImageSource(e3, t2) {
    const i3 = e3.includes("?") ? "&" : "?", [r2, a2 = ""] = e3.split("#");
    return `${r2}${i3}timestamp=${t2}${a2 ? "#" : ""}${a2}`;
  }
};
e$6([y$6()], b$1.prototype, "_refreshIntervalInfo", void 0), e$6([y$6()], b$1.prototype, "attributes", null), e$6([y$6()], b$1.prototype, "activeMediaInfoIndex", null), e$6([y$6()], b$1.prototype, "description", null), e$6([y$6()], b$1.prototype, "fieldInfoMap", null), e$6([y$6()], b$1.prototype, "layer", null), e$6([y$6()], b$1.prototype, "mediaInfos", null), e$6([y$6()], b$1.prototype, "popupTemplate", null), e$6([y$6()], b$1.prototype, "relatedInfos", null), e$6([y$6()], b$1.prototype, "title", null), e$6([y$6({ type: M$2 })], b$1.prototype, "viewModel", void 0), e$6([y$6(), e$7("esri/widgets/Feature/t9n/Feature")], b$1.prototype, "messages", void 0), b$1 = e$6([c$b("esri.widgets.Feature.FeatureMedia")], b$1);
const S$1 = b$1;
const n$3 = ["$datastore", "$map", "$layer", "$aggregatedfeatures"], s$2 = "esri.widgets.Feature.support.arcadeFeatureUtils", o$1 = s$6.getLogger(s$2);
function c$4(e3) {
  return "string" == typeof e3 ? ae(oe(e3)) : Array.isArray(e3) ? p$4(e3) : "esri.arcade.Dictionary" === e3?.declaredClass ? l$2(e3) : e3;
}
function p$4(e3) {
  return `<ul class="esri-widget__list">${e3.map((e4) => `<li>${"string" == typeof e4 ? ae(oe(e4)) : e4}</li>`).join("")}</ul>`;
}
function l$2(e3) {
  return `<table class="esri-widget__table">${e3.keys().map((r2) => {
    const t2 = e3.field(r2);
    return `<tr><th>${r2}</th><td>${"string" == typeof t2 ? ae(oe(t2)) : t2}</td></tr>`;
  }).join("")}</table>`;
}
function u$2({ aggregatedFeatures: e3, arcadeUtils: r2, featureSetVars: a2, context: i3, viewInfo: n4, map: s2, graphic: o3, interceptor: c5 }) {
  a2.forEach((a3) => {
    const p4 = a3.toLowerCase(), l4 = n4.sr, u3 = { map: s2, spatialReference: l4, interceptor: c5 };
    if ("$map" === p4 && (i3.vars[p4] = r2.convertMapToFeatureSetCollection(u3)), "$layer" === p4 && (i3.vars[p4] = r2.convertFeatureLayerToFeatureSet({ layer: o3.sourceLayer, spatialReference: l4, interceptor: c5 })), "$datastore" === p4 && (i3.vars[p4] = r2.convertServiceUrlToWorkspace({ url: o3.sourceLayer.url, spatialReference: l4, interceptor: c5 })), "$aggregatedfeatures" === p4) {
      const a4 = o3.layer, { fields: n5, objectIdField: s3, geometryType: l5, spatialReference: u4, displayField: f2 } = a4, g3 = new Ze({ fields: n5, objectIdField: s3, geometryType: l5, spatialReference: u4, displayField: f2, ..."feature" === a4.type ? { templates: a4.templates, typeIdField: a4.typeIdField, types: a4.types } : null, source: e3 });
      i3.vars[p4] = r2.convertFeatureLayerToFeatureSet({ layer: g3, spatialReference: u4, interceptor: c5 });
    }
  });
}
function f$3() {
  return import("./chunk-dapYIJB-.js").then((n4) => n4.aD);
}
function g$3(e3) {
  return "createQuery" in e3 && "queryFeatures" in e3;
}
async function y$2({ graphic: e3, view: r2 }) {
  const { isAggregate: t2, layer: a2 } = e3;
  if (!t2 || !a2 || "2d" !== r2?.type)
    return [];
  const i3 = await r2.whenLayerView(a2);
  if (!g$3(i3))
    return [];
  const n4 = i3.createQuery(), s2 = e3.getObjectId();
  n4.aggregateIds = null != s2 ? [s2] : [];
  const { features: o3 } = await i3.queryFeatures(n4);
  return o3;
}
async function d$2({ expressionInfo: e3, arcadeUtils: r2, interceptor: t2, spatialReference: a2, map: i3, graphic: s2, view: c5 }) {
  if (!e3?.expression)
    return null;
  const p4 = r2.createSyntaxTree(e3.expression), l4 = n$3.filter((e4) => r2.hasVariable(p4, e4)), [f2] = await Promise.all([y$2({ graphic: s2, view: c5 }), r2.loadScriptDependencies(p4, true, l4)]), g3 = r2.getViewInfo({ spatialReference: a2 }), d2 = r2.createExecContext(s2, g3, c5?.timeZone);
  d2.interceptor = t2, d2.useAsync = true, u$2({ aggregatedFeatures: f2, arcadeUtils: r2, featureSetVars: l4, context: d2, viewInfo: g3, map: i3, graphic: s2, interceptor: t2 });
  const m2 = r2.createFunction(p4, d2);
  return r2.executeAsyncFunction(m2, d2).catch((r3) => o$1.error("arcade-execution-error", { error: r3, graphic: s2, expressionInfo: e3 }));
}
async function m$2({ expressionInfos: e3, spatialReference: t2, graphic: a2, interceptor: i3, map: n4, view: s2 }) {
  if (!e3?.length)
    return {};
  const o3 = await f$3(), p4 = {};
  for (const r2 of e3)
    p4[`expression/${r2.name}`] = d$2({ expressionInfo: r2, arcadeUtils: o3, interceptor: i3, spatialReference: t2, map: n4, graphic: a2, view: s2 });
  const l4 = await v$5(p4), u3 = {};
  for (const r2 in l4)
    u3[r2] = c$4(l4[r2].value);
  return u3;
}
const _$2 = 1;
let w$2 = class w extends g$6 {
  constructor(t2) {
    super(t2), this._abortController = null, this.expressionInfo = null, this.graphic = null, this.contentElement = null, this.contentElementViewModel = null, this.interceptor = null, this.view = null, this._cancelQuery = () => {
      const { _abortController: t3 } = this;
      t3 && t3.abort(), this._abortController = null;
    }, this._createVM = () => {
      const t3 = this.contentElement?.type;
      this.contentElementViewModel?.destroy();
      const e3 = "fields" === t3 ? new n$4() : "media" === t3 ? new M$2() : "text" === t3 ? new p$7() : null;
      this._set("contentElementViewModel", e3);
    }, this._compile = async () => {
      this._cancelQuery();
      const t3 = new AbortController();
      this._abortController = t3, await this._compileExpression(), this._abortController === t3 && (this._abortController = null);
    }, this._compileThrottled = e$b(this._compile, _$2, this), this._compileExpression = async () => {
      const { expressionInfo: t3, graphic: e3, interceptor: o3, spatialReference: r2, map: n4, view: s2, _abortController: i3 } = this;
      if (!(t3 && e3 && r2 && n4))
        return void this._set("contentElement", null);
      const l4 = await f$3();
      if (i3 !== this._abortController)
        return;
      const m2 = await d$2({ arcadeUtils: l4, expressionInfo: t3, graphic: e3, interceptor: o3, map: n4, spatialReference: r2, view: s2 });
      if (!m2 || "esri.arcade.Dictionary" !== m2.declaredClass)
        return void this._set("contentElement", null);
      const h3 = await m2.castAsJsonAsync(i3?.signal), d2 = h3?.type, u3 = "media" === d2 ? I$6.fromJSON(h3) : "text" === d2 ? c$f.fromJSON(h3) : "fields" === d2 ? c$g.fromJSON(h3) : null;
      this._set("contentElement", u3);
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
    const { _abortController: t2, contentElement: e3, contentElementViewModel: o3 } = this;
    return t2 ? "loading" : e3 || o3 ? "ready" : "disabled";
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(t2) {
    this._override("map", t2);
  }
};
e$6([y$6()], w$2.prototype, "_abortController", void 0), e$6([y$6({ type: i$6 })], w$2.prototype, "expressionInfo", void 0), e$6([y$6({ type: c$a })], w$2.prototype, "graphic", void 0), e$6([y$6({ readOnly: true })], w$2.prototype, "contentElement", void 0), e$6([y$6({ readOnly: true })], w$2.prototype, "contentElementViewModel", void 0), e$6([y$6()], w$2.prototype, "interceptor", void 0), e$6([y$6()], w$2.prototype, "spatialReference", null), e$6([y$6({ readOnly: true })], w$2.prototype, "state", null), e$6([y$6()], w$2.prototype, "map", null), e$6([y$6()], w$2.prototype, "view", void 0), w$2 = e$6([c$b("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], w$2);
const j$2 = w$2;
const u$1 = "esri-feature", g$2 = { base: `${u$1}-expression`, loadingSpinnerContainer: `${u$1}__loading-container`, spinner: `${u$1}__loading-spinner` };
let h$2 = class h extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._contentWidget = null, this.viewModel = new j$2();
  }
  initialize() {
    this.addHandles(d$5(() => this.viewModel?.contentElementViewModel, () => this._setupExpressionWidget(), P$1));
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    const { state: e3 } = this.viewModel;
    return n$8("div", { class: g$2.base }, "loading" === e3 ? this._renderLoading() : "disabled" === e3 ? null : this._contentWidget?.render());
  }
  _renderLoading() {
    return n$8("div", { class: g$2.loadingSpinnerContainer, key: "loading-container" }, n$8("span", { class: this.classes(i$3.loadingIndicator, e$8.rotating, g$2.spinner) }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e3 } = this;
    e3 && (e3.viewModel = null, e3.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e3, contentElement: t2 } = this.viewModel, o3 = t2?.type;
    this._destroyContentWidget();
    const s2 = e3 ? "fields" === o3 ? new h$4({ viewModel: e3 }) : "media" === o3 ? new S$1({ viewModel: e3 }) : "text" === o3 ? new p$6({ viewModel: e3 }) : null : null;
    this._contentWidget = s2, this.scheduleRender();
  }
};
e$6([y$6({ type: j$2 })], h$2.prototype, "viewModel", void 0), h$2 = e$6([c$b("esri.widgets.Feature.FeatureExpression")], h$2);
const w$1 = h$2;
var D;
!function(e3) {
  e3.TOO_SHORT = "length-validation-error::too-short";
}(D || (D = {}));
const G$1 = (e3) => {
  const t2 = [];
  if (e3.formTemplate) {
    const { description: r2, title: o3 } = e3.formTemplate;
    e3.fields?.forEach((e4) => {
      const i3 = o3 && i$7(o3, e4.name), l4 = r2 && i$7(r2, e4.name);
      (i3 || l4) && t2.push(e4.name);
    });
  }
  return t2;
};
const _$1 = 100;
let g$1 = class g extends i$8(s$a(g$6)) {
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
    }, this._queryDebounced = k$4(this._queryController, _$1), this._queryFeatureCountDebounced = k$4(this._queryFeatureCountController, _$1), this._queryPageDebounced = k$4(this._queryPageController, _$1), this._query = async () => {
      const { _queryAbortController: e4, relatedFeatures: t2 } = this;
      this.featureCount && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t2.removeAll(), this.destroyed || t2.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e4?.signal }))));
    }, this.addHandles([d$5(() => [this.displayCount, this.graphic, this.layer, this.layer?.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount], () => this._queryDebounced(), P$1), d$5(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), d$5(() => [this.layer, this.relationshipId, this.objectId, this.canQuery], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.removeAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e3) {
    const { featuresPerPage: t2, featureCount: r2 } = this, o3 = 1, l4 = Math.ceil(r2 / t2) || 1;
    this._set("featurePage", Math.min(Math.max(e3, o3), l4));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e3, relatedLayer: t2 } = this;
    return e3 && t2?.loaded ? e3.map((e4) => {
      const r2 = e4.clone();
      return r2.field = v$6(e4.field, t2), r2;
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
    const { _queryAbortController: e3, _queryFeatureCountAbortController: t2, _queryPageAbortController: r2, canQuery: o3, _loaded: l4, canLoad: a2 } = this;
    return t2 || a2 && !l4 ? "loading" : e3 || r2 ? "querying" : o3 ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e3) {
    return this.relatedFeatures.find((t2) => t2.getObjectId() === e3);
  }
  _destroyRelatedFeatureViewModels() {
    this.relatedFeatureViewModels?.forEach((e3) => !e3.destroyed && e3.destroy()), this.relatedFeatureViewModels.removeAll();
  }
  async _queryFeatureCount() {
    const { layer: e3, relatedLayer: t2, relationshipId: r2, objectId: o3, _queryFeatureCountAbortController: l4, canQuery: a2, supportsCacheHint: s2 } = this;
    if (await e3?.load(), await t2?.load(), !a2 || !e3 || !t2)
      return void this._set("featureCount", 0);
    const i3 = t2.createQuery(), n4 = new d$6({ cacheHint: s2, relationshipId: r2, returnGeometry: false, objectIds: [o3], where: i3.where ?? void 0 }), u3 = await e3.queryRelatedFeaturesCount(n4, { signal: l4?.signal });
    this._set("featureCount", u3[o3] || 0);
  }
  _sliceFeatures(e3) {
    const { showAllEnabled: t2, displayCount: r2 } = this;
    return t2 ? e3 : r2 ? e3.slice(0, r2) : [];
  }
  async _queryPage() {
    const { relatedFeatures: e3, featurePage: t2, showAllEnabled: r2, _queryPageAbortController: o3, featureCount: l4 } = this;
    !r2 || t2 < 2 || !l4 || e3.addMany(await this._queryRelatedFeatures({ signal: o3?.signal }));
  }
  async _queryRelatedFeatures(e3) {
    const { orderByFieldsFixedCasing: t2, showAllEnabled: r2, featuresPerPage: l4, displayCount: a2, layer: s2, relationshipId: i3, featurePage: n4, featureCount: u3, relatedLayer: d2, supportsCacheHint: y2 } = this, { canQuery: h3, objectId: c5 } = this;
    if (!h3 || !s2 || !d2)
      return [];
    const C2 = r2 ? ((n4 - 1) * l4 + u3) % u3 : 0, _2 = r2 ? l4 : a2, g3 = d2.objectIdField, F2 = [...t2.map((e4) => e4.field), ...G$1(d2), g3].filter(k$3), m2 = t2.map((e4) => `${e4.field} ${e4.order}`), f2 = d2.createQuery(), q2 = new d$6({ orderByFields: m2, start: C2, num: _2, outFields: F2, cacheHint: y2, relationshipId: i3, returnGeometry: false, objectIds: [c5], where: f2.where ?? void 0 }), A2 = await s2.queryRelatedFeatures(q2, { signal: e3?.signal }), w3 = A2[c5]?.features || [];
    return w3.forEach((e4) => {
      e4.sourceLayer = d2, e4.layer = d2;
    }), w3;
  }
};
e$6([y$6()], g$1.prototype, "_loaded", void 0), e$6([y$6()], g$1.prototype, "_queryAbortController", void 0), e$6([y$6()], g$1.prototype, "_queryPageAbortController", void 0), e$6([y$6()], g$1.prototype, "_queryFeatureCountAbortController", void 0), e$6([y$6({ value: 1 })], g$1.prototype, "featurePage", null), e$6([y$6()], g$1.prototype, "featuresPerPage", void 0), e$6([y$6({ readOnly: true })], g$1.prototype, "orderByFieldsFixedCasing", null), e$6([y$6({ readOnly: true })], g$1.prototype, "supportsCacheHint", null), e$6([y$6({ readOnly: true })], g$1.prototype, "canLoad", null), e$6([y$6({ readOnly: true })], g$1.prototype, "canQuery", null), e$6([y$6()], g$1.prototype, "description", void 0), e$6([y$6({ readOnly: true })], g$1.prototype, "itemDescriptionFieldName", null), e$6([y$6({ value: 3 })], g$1.prototype, "displayCount", null), e$6([y$6({ type: c$a })], g$1.prototype, "graphic", void 0), e$6([y$6()], g$1.prototype, "layer", void 0), e$6([y$6()], g$1.prototype, "map", void 0), e$6([y$6({ readOnly: true })], g$1.prototype, "objectId", null), e$6([y$6({ readOnly: true })], g$1.prototype, "objectIdField", null), e$6([y$6()], g$1.prototype, "orderByFields", void 0), e$6([y$6({ readOnly: true })], g$1.prototype, "relatedFeatures", null), e$6([y$6({ readOnly: true })], g$1.prototype, "relatedLayer", null), e$6([y$6({ readOnly: true })], g$1.prototype, "relationship", null), e$6([y$6()], g$1.prototype, "featureCount", void 0), e$6([y$6({ readOnly: true })], g$1.prototype, "relatedFeatureViewModels", null), e$6([y$6()], g$1.prototype, "relationshipId", void 0), e$6([y$6()], g$1.prototype, "showAllEnabled", void 0), e$6([y$6()], g$1.prototype, "state", null), e$6([y$6()], g$1.prototype, "title", void 0), e$6([y$6()], g$1.prototype, "getRelatedFeatureByObjectId", null), g$1 = e$6([c$b("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], g$1);
const F$2 = g$1;
const f$2 = "esri-feature", b2 = `${f$2}-relationship`, y$1 = { base: b2, listContainer: `${b2}__list`, listItem: `${b2}__list-item`, listItemHidden: `${b2}__list-item--hidden`, listContainerQuerying: `${b2}__list--querying`, featureObserver: `${f$2}__feature-observer`, stickySpinnerContainer: `${f$2}__sticky-loading-container`, loadingSpinnerContainer: `${f$2}__loading-container`, spinner: `${f$2}__loading-spinner` }, F$1 = { title: true, description: true };
let I$1 = class I extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e4]) => {
      e4?.isIntersecting && this._increaseFeaturePage();
    }, { root: window.document }), this.headingLevel = 2, this.viewModel = new F$2(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...F$1 }, this._increaseFeaturePage = () => {
      const { state: e4, showAllEnabled: t3, relatedFeatures: s2, featuresPerPage: r2, featurePage: i3 } = this.viewModel;
      "ready" === e4 && t3 && s2.length >= r2 * i3 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new l$5(), this.addHandles([d$5(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), P$1), d$5(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), v$3(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return r$1({ icon: () => import("@esri/calcite-components/dist/components/calcite-icon.js"), list: () => import("@esri/calcite-components/dist/components/calcite-list.js"), "list-item": () => import("@esri/calcite-components/dist/components/calcite-list-item.js"), notice: () => import("@esri/calcite-components/dist/components/calcite-notice.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u$5(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e3, featureCount: t2, displayCount: s2, state: r2 } = this.viewModel;
    return !e3 && !!t2 && "ready" === r2 && (t2 > s2 || 0 === s2);
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
    return s$9(e3?.numberRecords, { number: t2 });
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
    return n$8("div", { class: this.classes(y$1.base, e$8.widget) }, this._featureElementInfo?.render(), "loading" === e3 ? this._renderLoading() : "disabled" === e3 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n$8("div", { class: y$1.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n$8("span", { class: this.classes(i$3.loadingIndicator, e$8.rotating, y$1.spinner) });
  }
  _renderLoading() {
    return n$8("div", { class: y$1.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return n$8("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e3 = v$4(this.container) ? "chevron-left" : "chevron-right";
    return n$8("calcite-icon", { icon: e3, scale: "s", slot: "content-end" });
  }
  _renderRelatedFeature(e3) {
    const { itemDescriptionFieldName: t2 } = this.viewModel, s2 = e3.title;
    e3.description = t2 && e3.formattedAttributes?.global[t2];
    const r2 = "loading" === e3.state;
    return n$8("calcite-list-item", { class: this.classes(y$1.listItem, { [y$1.listItemHidden]: r2 }), description: e3.description ?? "", key: e3.uid, label: s2, onCalciteListItemSelect: () => this.emit("select-record", { featureViewModel: e3 }) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    return this.displayShowAllButton ? n$8("calcite-list-item", { description: this.featureCountDescription, key: "show-all-item", label: this.messages?.showAll, onCalciteListItemSelect: () => this.emit("show-all-records") }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    return n$8("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: true, scale: "s", width: "full" }, n$8("div", { slot: "message" }, this.messages?.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return n$8("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: y$1.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    const { relatedFeatureViewModels: e3 } = this.viewModel;
    return n$8("calcite-list", null, e3.toArray().map((e4) => this._renderRelatedFeature(e4)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e3 } = this, { state: t2 } = this.viewModel;
    return n$8("div", { class: this.classes(y$1.listContainer, { [y$1.listContainerQuerying]: "querying" === t2 }), key: "list-container" }, e3 ? this._renderList() : "ready" === t2 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    return n$8("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: true, scale: "s", width: "full" }, n$8("div", { slot: "message" }, this.messages?.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e3 } = this.viewModel, t2 = "related-feature-viewmodels";
    this.removeHandles(t2), e3?.forEach((e4) => {
      this.addHandles(d$5(() => [e4.title, e4.state], () => this.scheduleRender(), P$1), t2);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    const { headingLevel: e3, visibleElements: t2 } = this, s2 = t2.description && this.description, r2 = t2.title && this.title;
    this._featureElementInfo?.set({ description: s2, title: r2, headingLevel: e3 });
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
e$6([y$6()], I$1.prototype, "_relatedFeatureIntersectionObserverNode", void 0), e$6([y$6({ readOnly: true })], I$1.prototype, "displayShowAllButton", null), e$6([y$6({ readOnly: true })], I$1.prototype, "displayListItems", null), e$6([y$6()], I$1.prototype, "description", null), e$6([y$6({ readOnly: true })], I$1.prototype, "featureCountDescription", null), e$6([y$6()], I$1.prototype, "headingLevel", void 0), e$6([y$6()], I$1.prototype, "title", null), e$6([y$6({ type: F$2 })], I$1.prototype, "viewModel", void 0), e$6([y$6(), e$7("esri/widgets/Feature/t9n/Feature")], I$1.prototype, "messages", void 0), e$6([y$6(), e$7("esri/t9n/common")], I$1.prototype, "messagesCommon", void 0), e$6([y$6()], I$1.prototype, "visibleElements", void 0), e$6([s$4("visibleElements")], I$1.prototype, "castVisibleElements", null), I$1 = e$6([c$b("esri.widgets.Feature.FeatureRelationship")], I$1);
const M2 = I$1;
let e$3 = class e {
  constructor(e3, a2) {
    this.preLayerQueryCallback = e3, this.preRequestCallback = a2, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e4) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e4) => {
    });
  }
};
var Q;
const G = 1, z = "content-view-models", J = "relationship-view-models", K = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true };
let W$1 = Q = class extends s$a(g$6) {
  constructor(e3) {
    super(e3), this._error = null, this._featureAbortController = null, this._graphicChangedThrottled = e$b(this._graphicChanged, G, this), this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...K }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.lastEditInfo = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._isAllowedContentType = (e4) => {
      const { abilities: t2 } = this;
      return "attachments" === e4.type && !!t2.attachmentsContent || "custom" === e4.type && !!t2.customContent || "fields" === e4.type && !!t2.fieldsContent || "media" === e4.type && !!t2.mediaContent || "text" === e4.type && !!t2.textContent || "expression" === e4.type && !!t2.expressionContent || "relationship" === e4.type && !!t2.relationshipContent;
    }, this.addHandles(d$5(() => [this.graphic, this._effectivePopupTemplate, this.abilities], () => this._graphicChangedThrottled(), P$1));
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
    return E(this.graphic);
  }
  castAbilities(e3) {
    return { ...K, ...e3 };
  }
  get isTable() {
    return this._sourceLayer?.isTable || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(e3) {
    this._set("graphic", e3 ? e3.clone() : null);
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e3) {
    this._override("spatialReference", e3);
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
    const i3 = this.contentViewModels[e3];
    i3 instanceof M$2 && i3.setActiveMedia(t2);
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
    const { graphic: e3, spatialReference: t2, _sourceLayer: i3 } = this;
    await i3?.load();
    const r2 = i3?.objectIdField;
    if (!r2 || !e3 || !i3)
      return;
    const o3 = e3?.attributes?.[r2];
    if (null == o3)
      return;
    const s2 = [o3];
    if (!e3.geometry) {
      const r3 = await se({ layer: i3, graphic: e3, outFields: [], objectIds: s2, returnGeometry: true, spatialReference: t2 }), o4 = r3?.geometry;
      o4 && (e3.geometry = o4);
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
    } catch (i3) {
      b$5(i3) || (this._error = i3, s$6.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i3, graphic: e3, popupTemplate: this._effectivePopupTemplate }));
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
      return Array.isArray(e3) ? e3.filter(this._isAllowedContentType).map((e4, t2) => this._compileContentElement(e4, t2)).filter(k$3) : "string" == typeof e3 ? this._compileText(new c$f({ text: e3 }), 0).text : e3;
  }
  _destroyContentViewModels() {
    this.removeHandles(J), this.removeHandles(z), this.contentViewModels.forEach((e3) => e3 && !e3.destroyed && e3.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e3, t2) {
    const i3 = e3?.graphic?.getObjectId(), r2 = t2?.getObjectId();
    return null != i3 && null != r2 && i3 === r2;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e3, relatedFeatures: t2, map: i3 }) {
    const { view: r2, spatialReference: o3 } = this;
    t2?.filter(Boolean).forEach((t3) => {
      e3.find((e4) => this._matchesFeature(e4, t3)) || e3.add(new Q({ abilities: { relationshipContent: false }, map: i3, view: r2, spatialReference: o3, graphic: t3 }));
    }), e3.forEach((i4) => {
      const r3 = t2?.find((e4) => this._matchesFeature(i4, e4));
      r3 || e3.remove(i4);
    });
  }
  _setExpressionContentVM(e3, t2) {
    const i3 = this.formattedAttributes, { contentElement: r2, contentElementViewModel: o3 } = e3, s2 = r2?.type;
    o3 && s2 && ("fields" === s2 && (this._createFieldsFormattedAttributes({ contentElement: r2, contentElementIndex: t2, formattedAttributes: i3 }), o3.set(this._createFieldsVMParams(r2, t2))), "media" === s2 && (this._createMediaFormattedAttributes({ contentElement: r2, contentElementIndex: t2, formattedAttributes: i3 }), o3.set(this._createMediaVMParams(r2, t2))), "text" === s2 && o3.set(this._createTextVMParams(r2)));
  }
  _compileRelationship(e3, t2) {
    const { displayCount: i3, orderByFields: r2, relationshipId: o3, title: s2, description: n4 } = e3, { _sourceLayer: a2, graphic: l4, map: p4 } = this;
    if (!J$1(a2))
      return;
    const d2 = new F$2({ displayCount: i3, graphic: l4, orderByFields: r2, relationshipId: o3, layer: a2, map: p4, ...this._compileTitleAndDesc({ title: s2, description: n4 }) });
    return this.contentViewModels[t2] = d2, this.addHandles(v$3(() => d2.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(d2)), J), e3;
  }
  _compileExpression(e3, t2) {
    const { expressionInfo: i3 } = e3, { graphic: r2, map: o3, spatialReference: s2, view: n4 } = this, a2 = new j$2({ expressionInfo: i3, graphic: r2, interceptor: Q.interceptor, map: o3, spatialReference: s2, view: n4 });
    return this.contentViewModels[t2] = a2, this.addHandles(d$5(() => a2.contentElementViewModel, () => this._setExpressionContentVM(a2, t2), P$1), z), e3;
  }
  _compileAttachments(e3, t2) {
    const { graphic: i3 } = this, { description: r2, title: o3 } = e3;
    return this.contentViewModels[t2] = new c$9({ graphic: i3, ...this._compileTitleAndDesc({ title: o3, description: r2 }) }), e3;
  }
  _compileCustom(e3, t2) {
    const { graphic: i3 } = this, { creator: r2, destroyer: o3 } = e3;
    return this.contentViewModels[t2] = new p$7({ graphic: i3, creator: r2, destroyer: o3 }), e3;
  }
  _compileTitleAndDesc({ title: e3, description: t2 }) {
    const { _fieldInfoMap: i3, _sourceLayer: r2, graphic: o3, formattedAttributes: s2 } = this, n4 = o3?.attributes, a2 = this._expressionAttributes, l4 = s2.global;
    return { title: D$1({ attributes: n4, fieldInfoMap: i3, globalAttributes: l4, expressionAttributes: a2, layer: r2, text: e3 }), description: D$1({ attributes: n4, fieldInfoMap: i3, globalAttributes: l4, expressionAttributes: a2, layer: r2, text: t2 }) };
  }
  _createFieldsVMParams(e3, t2) {
    const i3 = this._effectivePopupTemplate, r2 = this.formattedAttributes, o3 = { ...r2?.global, ...r2?.content[t2] }, s2 = e3?.fieldInfos || i3?.fieldInfos, n4 = s2?.filter(({ fieldName: e4 }) => M$4(e4) || de(e4) || o3.hasOwnProperty(e4)), a2 = i3?.expressionInfos, { description: l4, title: p4 } = e3;
    return { attributes: o3, expressionInfos: a2, fieldInfos: n4, ...this._compileTitleAndDesc({ title: p4, description: l4 }) };
  }
  _compileFields(e3, t2) {
    const i3 = e3.clone(), r2 = new n$4(this._createFieldsVMParams(e3, t2));
    return this.contentViewModels[t2] = r2, i3.fieldInfos = r2.formattedFieldInfos.slice(0), i3;
  }
  _createMediaVMParams(e3, t2) {
    const { abilities: i3, graphic: r2, _fieldInfoMap: o3, _effectivePopupTemplate: s2, relatedInfos: n4, _sourceLayer: a2, _expressionAttributes: l4 } = this, p4 = this.formattedAttributes, c5 = r2?.attributes ?? {}, { description: d2, mediaInfos: u3, title: h3 } = e3;
    return { abilities: { chartAnimation: i3.chartAnimation }, activeMediaInfoIndex: e3.activeMediaInfoIndex || 0, attributes: c5, isAggregate: r2?.isAggregate, layer: a2, fieldInfoMap: o3, formattedAttributes: { ...p4?.global, ...p4?.content[t2] }, expressionAttributes: l4, mediaInfos: u3, popupTemplate: s2, relatedInfos: n4, ...this._compileTitleAndDesc({ title: h3, description: d2 }) };
  }
  _compileMedia(e3, t2) {
    const i3 = e3.clone(), r2 = new M$2(this._createMediaVMParams(e3, t2));
    return i3.mediaInfos = r2.formattedMediaInfos.slice(0), this.contentViewModels[t2] = r2, i3;
  }
  _createTextVMParams(e3) {
    const { graphic: t2, _fieldInfoMap: i3, _sourceLayer: r2, _expressionAttributes: o3 } = this;
    if (e3 && e3.text) {
      const s2 = t2?.attributes ?? {}, n4 = this.formattedAttributes?.global ?? {};
      e3.text = D$1({ attributes: s2, fieldInfoMap: i3, globalAttributes: n4, expressionAttributes: o3, layer: r2, text: e3.text });
    }
    return { graphic: t2, creator: e3.text };
  }
  _compileText(e3, t2) {
    const i3 = e3.clone();
    return this.contentViewModels[t2] = new p$7(this._createTextVMParams(i3)), i3;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e3, _sourceLayer: t2, graphic: i3, view: r2 } = this;
    if (!e3)
      return;
    const { lastEditInfoEnabled: o3 } = e3, s2 = t2?.editFieldsInfo;
    return o3 && s2 ? ne(s2, i3?.attributes, r2?.timeZone ?? o$3, t2) : void 0;
  }
  _compileTitle(e3) {
    const { _fieldInfoMap: t2, _sourceLayer: i3, graphic: r2, _expressionAttributes: o3 } = this, s2 = r2?.attributes ?? {}, n4 = this.formattedAttributes?.global ?? {};
    return D$1({ attributes: s2, fieldInfoMap: t2, globalAttributes: n4, expressionAttributes: o3, layer: i3, text: e3 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e3, graphic: t2 } = this;
    if (!t2)
      return null;
    const i3 = e3?.title;
    return x$4(i3, { graphic: t2 });
  }
  async _getContent() {
    const { _effectivePopupTemplate: e3, graphic: t2 } = this;
    if (!t2)
      return null;
    const i3 = e3?.content;
    return x$4(i3, { graphic: t2 });
  }
  async _queryFeature(e3) {
    const { _featureAbortController: t2, _sourceLayer: i3, graphic: r2, _effectivePopupTemplate: o3 } = this, s2 = this.map, n4 = this.view, a2 = this.spatialReference;
    if (t2 !== this._featureAbortController || !r2)
      return;
    await ce({ graphic: r2, popupTemplate: o3, layer: i3, spatialReference: a2 }, e3);
    const { content: { value: p4 }, title: { value: c5 } } = await v$5({ content: this._getContent(), title: this._getTitle() }), { expressionAttributes: { value: d2 } } = await v$5({ checkForRelatedFeatures: this._checkForRelatedFeatures(e3), expressionAttributes: m$2({ expressionInfos: o3?.expressionInfos, spatialReference: a2, graphic: r2, map: s2, interceptor: Q.interceptor, view: n4 }) });
    t2 === this._featureAbortController && r2 && (this._expressionAttributes = d2, this._graphicExpressionAttributes = { ...r2.attributes, ...d2 }, this._set("formattedAttributes", this._createFormattedAttributes(p4)), this._set("title", this._compileTitle(c5)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(p4) || null));
  }
  _createMediaFormattedAttributes({ contentElement: e3, contentElementIndex: t2, formattedAttributes: i3 }) {
    const { _effectivePopupTemplate: r2, graphic: o3, relatedInfos: s2, _sourceLayer: n4, _fieldInfoMap: a2, _graphicExpressionAttributes: l4 } = this;
    i3.content[t2] = ue({ fieldInfos: r2?.fieldInfos, graphic: o3, attributes: { ...l4, ...e3.attributes }, layer: n4, fieldInfoMap: a2, relatedInfos: s2, timeZone: this.view?.timeZone ?? o$3 });
  }
  _createFieldsFormattedAttributes({ contentElement: e3, contentElementIndex: t2, formattedAttributes: i3 }) {
    if (e3.fieldInfos) {
      const { graphic: r2, relatedInfos: o3, _sourceLayer: s2, _fieldInfoMap: n4, _graphicExpressionAttributes: a2 } = this;
      i3.content[t2] = ue({ fieldInfos: e3.fieldInfos, graphic: r2, attributes: { ...a2, ...e3.attributes }, layer: s2, fieldInfoMap: n4, relatedInfos: o3, timeZone: this.view?.timeZone ?? o$3 });
    }
  }
  _createFormattedAttributes(e3) {
    const { _effectivePopupTemplate: t2, graphic: i3, relatedInfos: r2, _sourceLayer: o3, _fieldInfoMap: s2, _graphicExpressionAttributes: n4 } = this, a2 = t2?.fieldInfos, l4 = { global: ue({ fieldInfos: a2, graphic: i3, attributes: n4, layer: o3, fieldInfoMap: s2, relatedInfos: r2, timeZone: this.view?.timeZone ?? o$3 }), content: [] };
    return Array.isArray(e3) && e3.forEach((e4, t3) => {
      "fields" === e4.type && this._createFieldsFormattedAttributes({ contentElement: e4, contentElementIndex: t3, formattedAttributes: l4 }), "media" === e4.type && this._createMediaFormattedAttributes({ contentElement: e4, contentElementIndex: t3, formattedAttributes: l4 });
    }), l4;
  }
  _checkForRelatedFeatures(e3) {
    const { graphic: t2, _effectivePopupTemplate: i3 } = this;
    return this._queryRelatedInfos(t2, ie(i3), e3);
  }
  async _queryRelatedInfos(e3, t2, i3) {
    const { relatedInfos: r2, _sourceLayer: o3 } = this;
    r2.clear();
    const s2 = null != o3?.associatedLayer ? await o3?.associatedLayer.load(i3) : o3;
    if (!s2 || !e3)
      return;
    const n4 = t2.filter((e4) => e4 && de(e4.fieldName));
    if (!n4?.length)
      return;
    t2.forEach((e4) => this._configureRelatedInfo(e4, s2));
    const a2 = await v$2({ relatedInfos: r2, layer: s2 }, i3);
    Object.keys(a2).forEach((e4) => {
      const t3 = r2.get(e4.toString()), i4 = a2[e4]?.value;
      t3 && i4 && (t3.layerInfo = i4.data);
    });
    const l4 = await N({ graphic: e3, relatedInfos: r2, layer: s2 }, i3);
    Object.keys(l4).forEach((e4) => {
      I$4(l4[e4]?.value, r2.get(e4.toString()));
    });
  }
  _configureRelatedInfo(e3, t2) {
    const { relatedInfos: i3 } = this, r2 = y$4(e3.fieldName);
    if (!r2)
      return;
    const { layerId: o3, fieldName: s2 } = r2;
    if (!o3)
      return;
    const n4 = i3.get(o3.toString()) || F$3(o3, t2);
    n4 && (T$3({ relatedInfo: n4, fieldName: s2, fieldInfo: e3 }), this.relatedInfos.set(o3, n4));
  }
};
W$1.interceptor = new e$3(he, be), e$6([y$6()], W$1.prototype, "_error", void 0), e$6([y$6()], W$1.prototype, "_featureAbortController", void 0), e$6([y$6({ readOnly: true })], W$1.prototype, "_effectivePopupTemplate", null), e$6([y$6({ readOnly: true })], W$1.prototype, "_fieldInfoMap", null), e$6([y$6({ readOnly: true })], W$1.prototype, "_sourceLayer", null), e$6([y$6()], W$1.prototype, "abilities", void 0), e$6([s$4("abilities")], W$1.prototype, "castAbilities", null), e$6([y$6({ readOnly: true })], W$1.prototype, "content", void 0), e$6([y$6({ readOnly: true })], W$1.prototype, "contentViewModels", void 0), e$6([y$6()], W$1.prototype, "description", void 0), e$6([y$6({ type: Boolean })], W$1.prototype, "defaultPopupTemplateEnabled", void 0), e$6([y$6({ readOnly: true })], W$1.prototype, "isTable", null), e$6([y$6({ readOnly: true })], W$1.prototype, "state", null), e$6([y$6({ readOnly: true })], W$1.prototype, "formattedAttributes", void 0), e$6([y$6({ type: c$a, value: null })], W$1.prototype, "graphic", null), e$6([y$6({ readOnly: true })], W$1.prototype, "lastEditInfo", void 0), e$6([y$6({ readOnly: true })], W$1.prototype, "relatedInfos", void 0), e$6([y$6()], W$1.prototype, "spatialReference", null), e$6([y$6({ readOnly: true })], W$1.prototype, "title", void 0), e$6([y$6()], W$1.prototype, "map", null), e$6([y$6({ readOnly: true })], W$1.prototype, "waitingForContent", null), e$6([y$6()], W$1.prototype, "view", void 0), W$1 = Q = e$6([c$b("esri.widgets.FeatureViewModel")], W$1);
const X = W$1;
const i$2 = (i3) => {
  let n4 = class extends i3 {
    constructor() {
      super(...arguments), this.renderNodeContent = (e3) => e$a(e3) && !e3.destroyed ? n$8("div", { class: t$4.contentNode, key: e3 }, e3.render()) : e3 instanceof HTMLElement ? n$8("div", { afterCreate: this._attachToNode, bind: e3, class: t$4.contentNode, key: e3 }) : t$5(e3) ? n$8("div", { afterCreate: this._attachToNode, bind: e3.domNode, class: t$4.contentNode, key: e3 }) : null;
    }
    _attachToNode(e3) {
      const o3 = this;
      e3.appendChild(o3);
    }
  };
  return n4 = e$6([c$b("esri.widgets.Feature.ContentMixin")], n4), n4;
};
var j$1;
const C = { title: true, content: true, lastEditedInfo: true }, F = "relationship-handles";
let W = j$1 = class extends i$2(O$1) {
  constructor(e3, t2) {
    super(e3, t2), this._contentWidgets = [], this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.messagesURIUtils = null, this.visibleElements = { ...C }, this.viewModel = new X();
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
    const { state: e3 } = this.viewModel, t2 = n$8("div", { class: t$4.container, key: "container" }, this._renderTitle(), "error" === e3 ? this._renderError() : "loading" === e3 ? this._renderLoading() : this._renderContentContainer());
    return n$8("div", { class: this.classes(t$4.base, e$8.widget) }, t2);
  }
  _renderError() {
    const { messagesCommon: e3, messages: t2, visibleElements: s2 } = this;
    return n$8("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: true, scale: "s" }, s2.title ? n$8("div", { key: "error-title", slot: "title" }, e3.errorMessage) : null, n$8("div", { key: "error-message", slot: "message" }, t2.loadingError));
  }
  _renderLoading() {
    return n$8("div", { class: t$4.loadingSpinnerContainer, key: "loading-container" }, n$8("span", { class: this.classes(i$3.loadingIndicator, e$8.rotating, t$4.spinner) }));
  }
  _renderContentContainer() {
    const { visibleElements: e3 } = this;
    return e3.content ? n$8("div", { class: t$4.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e3, title: t2 } = this;
    return e3.title ? n$8(e$9, { class: t$4.title, innerHTML: t2, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e3 = this.viewModel.content, t2 = "content";
    if (!e3)
      return null;
    if (Array.isArray(e3))
      return e3.length ? n$8("div", { class: t$4.contentNode, key: `${t2}-content-elements` }, e3.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e3) {
      const e4 = this._contentWidgets[0];
      return !e4 || e4.destroyed ? null : n$8("div", { class: this.classes(t$4.contentNode, t$4.contentNodeText), key: `${t2}-content` }, e4.render());
    }
    return this.renderNodeContent(e3);
  }
  _renderContentElement(e3, t2) {
    const { visibleElements: s2 } = this;
    if ("boolean" != typeof s2.content && !s2.content?.[e3.type])
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
    const { state: s2, attachmentInfos: i3 } = t2.viewModel;
    return "loading" === s2 || i3.length > 0 ? n$8("div", { class: this.classes(t$4.contentElement), key: this._buildKey("attachments-element", e3) }, t2.render()) : null;
  }
  _renderRelationship(e3) {
    const t2 = this._contentWidgets[e3];
    return t2 && !t2.destroyed && this.flowItems ? n$8("div", { class: t$4.contentElement, key: this._buildKey("relationship-element", e3) }, t2.render()) : null;
  }
  _renderExpression(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$8("div", { class: t$4.contentElement, key: this._buildKey("expression-element", e3) }, t2.render());
  }
  _renderCustom(e3, t2) {
    const { creator: s2 } = e3, i3 = this._contentWidgets[t2];
    return !i3 || i3.destroyed ? null : s2 ? n$8("div", { class: t$4.contentElement, key: this._buildKey("custom-element", t2) }, i3.render()) : null;
  }
  _renderFields(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$8("div", { class: t$4.contentElement, key: this._buildKey("fields-element", e3) }, t2.render());
  }
  _renderMedia(e3) {
    const t2 = this._contentWidgets[e3];
    return !t2 || t2.destroyed ? null : n$8("div", { class: t$4.contentElement, key: this._buildKey("media-element", e3) }, t2.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e3, messages: t2 } = this, { lastEditInfo: s2 } = this.viewModel;
    if (!s2 || !e3.lastEditedInfo)
      return null;
    const { date: i3, user: n4 } = s2, r2 = "edit" === s2.type ? n4 ? t2.lastEditedByUser : t2.lastEdited : n4 ? t2.lastCreatedByUser : t2.lastCreated, o3 = s$9(r2, { date: i3, user: n4 });
    return n$8("div", { class: this.classes(t$4.lastEditedInfo, t$4.contentElement), key: "edit-info-element" }, o3);
  }
  _renderText(e3, t2) {
    const s2 = e3.text, i3 = this._contentWidgets[t2];
    return !i3 || i3.destroyed ? null : s2 ? n$8("div", { class: this.classes(t$4.contentElement, t$4.text), key: this._buildKey("text-element", t2) }, i3.render()) : null;
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
    const { flowItems: t2, visibleElements: i3 } = this;
    this.addHandles([v$3(() => e3, "select-record", ({ featureViewModel: e4 }) => {
      t2 && (e4.abilities = { relationshipContent: true }, t2.push(new j$1({ flowItems: t2, viewModel: e4, visibleElements: i3 })));
    }), v$3(() => e3, "show-all-records", () => {
      if (!t2)
        return;
      const { viewModel: s2 } = e3;
      s2.showAllEnabled = true;
      const i4 = new M2({ visibleElements: { title: false, description: false }, viewModel: s2 });
      this._addFeatureRelationshipHandles(i4), t2.push(i4);
    })], F);
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e3, visibleElements: t2 } = this, s2 = this.viewModel?.content, { contentViewModels: i3 } = this.viewModel;
    if (Array.isArray(s2))
      s2.forEach((s3, n4) => {
        if ("attachments" === s3.type && (this._contentWidgets[n4] = new h$5({ displayType: s3.displayType, headingLevel: t2.title ? e3 + 1 : e3, viewModel: i3[n4] })), "fields" === s3.type && (this._contentWidgets[n4] = new h$4({ viewModel: i3[n4] })), "media" === s3.type && (this._contentWidgets[n4] = new S$1({ viewModel: i3[n4] })), "text" === s3.type && (this._contentWidgets[n4] = new p$6({ viewModel: i3[n4] })), "custom" === s3.type && (this._contentWidgets[n4] = new p$6({ viewModel: i3[n4] })), "expression" === s3.type && (this._contentWidgets[n4] = new w$1({ viewModel: i3[n4] })), "relationship" === s3.type) {
          const e4 = new M2({ viewModel: i3[n4] });
          this._addFeatureRelationshipHandles(e4), this._contentWidgets[n4] = e4;
        }
      }, this);
    else {
      const e4 = i3[0];
      e4 && !e4.destroyed && (this._contentWidgets[0] = new p$6({ viewModel: e4 }));
    }
    this.scheduleRender();
  }
};
e$6([y$6()], W.prototype, "graphic", null), e$6([y$6()], W.prototype, "defaultPopupTemplateEnabled", null), e$6([y$6()], W.prototype, "flowItems", void 0), e$6([y$6()], W.prototype, "headingLevel", void 0), e$6([y$6({ readOnly: true })], W.prototype, "isTable", null), e$6([y$6()], W.prototype, "label", null), e$6([y$6(), e$7("esri/widgets/Feature/t9n/Feature")], W.prototype, "messages", void 0), e$6([y$6(), e$7("esri/t9n/common")], W.prototype, "messagesCommon", void 0), e$6([y$6(), e$7("esri/widgets/support/t9n/uriUtils")], W.prototype, "messagesURIUtils", void 0), e$6([y$6()], W.prototype, "spatialReference", null), e$6([y$6({ readOnly: true })], W.prototype, "title", null), e$6([y$6()], W.prototype, "visibleElements", void 0), e$6([s$4("visibleElements")], W.prototype, "castVisibleElements", null), e$6([y$6()], W.prototype, "map", null), e$6([y$6()], W.prototype, "view", null), e$6([y$6({ type: X })], W.prototype, "viewModel", void 0), W = j$1 = e$6([c$b("esri.widgets.Feature")], W);
const x$2 = W;
let i$1 = class i extends o$4.EventedAccessor {
  constructor(e3) {
    super(e3), this.location = null, this.screenLocationEnabled = false, this.view = null, this.addHandles([p$a(() => {
      const e4 = this.screenLocationEnabled ? this.view : null;
      return e4 ? [e4.size, "3d" === e4.type ? e4.camera : e4.viewpoint] : null;
    }, () => this.notifyChange("screenLocation")), d$5(() => this.screenLocation, (e4, o3) => {
      null != e4 && null != o3 && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null;
  }
  get screenLocation() {
    const { location: e3, view: o3, screenLocationEnabled: t2 } = this;
    return t2 && null != e3 && null != o3 && o3.ready ? o3.toScreen(e3) : null;
  }
};
e$6([y$6()], i$1.prototype, "location", void 0), e$6([y$6()], i$1.prototype, "screenLocation", null), e$6([y$6()], i$1.prototype, "screenLocationEnabled", void 0), e$6([y$6()], i$1.prototype, "view", void 0), i$1 = e$6([c$b("esri.widgets.support.AnchorElementViewModel")], i$1);
const c$3 = i$1;
const t$3 = "esri.widgets.CompassViewModel";
let p$3 = class p extends c$3 {
  constructor(s2) {
    super(s2), this.visible = false;
  }
};
e$6([y$6()], p$3.prototype, "visible", void 0), p$3 = e$6([c$b(t$3)], p$3);
const c$2 = p$3;
const a$1 = "esri-spinner", c$1 = { base: a$1, spinnerStart: `${a$1}--start`, spinnerFinish: `${a$1}--finish` };
let p$2 = class p2 extends O$1 {
  constructor(i3, e3) {
    super(i3, e3), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new c$2();
  }
  initialize() {
    this.addHandles(d$5(() => this.visible, (i3) => this._visibleChange(i3)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(i3) {
    this.viewModel.location = i3;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(i3) {
    this.viewModel.view = i3;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(i3) {
    this.viewModel.visible = i3;
  }
  show(i3) {
    const { location: e3, promise: t2 } = i3 ?? {};
    e3 && (this.viewModel.location = e3), this.visible = true;
    const s2 = () => this.hide();
    t2 && t2.catch(() => {
    }).then(s2);
  }
  hide() {
    this.visible = false;
  }
  render() {
    const { visible: i3 } = this, { screenLocation: e3 } = this.viewModel, t2 = !!e3, s2 = i3 && t2, o3 = !i3 && t2, r2 = { [c$1.spinnerStart]: s2, [c$1.spinnerFinish]: o3 }, n4 = this._getPositionStyles();
    return n$8("div", { class: this.classes(c$1.base, r2), styles: n4 });
  }
  _visibleChange(i3) {
    if (i3)
      return void (this.viewModel.screenLocationEnabled = true);
    const t2 = A$2(this._animationDelay);
    this._animationPromise = t2, t2.catch(() => {
    }).then(() => {
      this._animationPromise === t2 && (this.viewModel.screenLocationEnabled = false, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const { screenLocation: i3, view: e3 } = this.viewModel;
    if (null == e3 || null == i3)
      return {};
    const { padding: t2 } = e3;
    return { left: i3.x - t2.left + "px", top: i3.y - t2.top + "px" };
  }
};
e$6([y$6()], p$2.prototype, "location", null), e$6([y$6()], p$2.prototype, "view", null), e$6([y$6({ type: c$2 })], p$2.prototype, "viewModel", void 0), e$6([y$6()], p$2.prototype, "visible", null), p$2 = e$6([c$b("esri.widgets.Spinner")], p$2);
const h$1 = p$2;
const e$2 = "esri-features", n$2 = { icon: `${e$2}__icon`, actionImage: `${e$2}__action-image`, base: e$2, container: `${e$2}__container`, contentContainer: `${e$2}__content-container`, contentFeature: `${e$2}__content-feature`, flowItemCollapsed: `${e$2}__flow-item--collapsed`, header: `${e$2}__header`, footer: `${e$2}__footer`, featureMenuObserver: `${e$2}__feature-menu-observer`, actionExit: `${e$2}__action--exit`, loader: `${e$2}__loader`, featuresHeading: `${e$2}__heading`, paginationActionBar: `${e$2}__pagination-action-bar`, paginationPrevious: `${e$2}__pagination-previous`, paginationNext: `${e$2}__pagination-next` };
let n$1 = class n2 extends O$1 {
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
    return n$8(i$9, null, t2?.map((e4) => this._renderRelatedRecordsFlowItem(e4)));
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
    const { messages: t2, closable: o3, closed: s2 } = this, r2 = "graphic" in e3 && !e3.isTable;
    return n$8("calcite-flow-item", { bind: this, closable: o3, closed: s2, description: this._getRelatedRecordsFlowItemDescription(e3), heading: e3.title ?? "", key: `flow-item-${e3.viewModel.uid}`, onCalciteFlowItemBack: this._handleRelatedRecordsBackClick, onCalciteFlowItemClose: this._handleCloseClick }, n$8("calcite-action", { appearance: "transparent", bind: this, class: n$2.actionExit, icon: "move-up", key: "exit-related-records-action", label: t2.exitRelatedRecords, onclick: this._handleExitClick, scale: "m", slot: "header-actions-start", text: t2.exitRelatedRecords, title: t2.exitRelatedRecords }), r2 ? n$8("calcite-action", { appearance: "transparent", bind: this, icon: "zoom-to-object", key: "open-related-feature-action", label: t2.selectFeature, onclick: () => this._handleOpenRelatedFeature(e3), scale: "m", slot: "header-actions-end", text: t2.selectFeature, title: t2.selectFeature }) : null, n$8("div", { class: n$2.container }, e3.render()));
  }
  _getRelatedRecordsFlowItemDescription(e3) {
    return "featureCountDescription" in e3 ? e3.featureCountDescription : e3.viewModel.description ?? "";
  }
};
e$6([y$6()], n$1.prototype, "flowItems", void 0), e$6([y$6(), e$7("esri/widgets/Features/t9n/Features")], n$1.prototype, "messages", void 0), e$6([y$6()], n$1.prototype, "closed", void 0), e$6([y$6()], n$1.prototype, "closable", void 0), n$1 = e$6([c$b("esri.widgets.Features.FeaturesRelatedRecords")], n$1);
const d$1 = n$1;
const i2 = V.ofType({ key: "type", defaultKeyValue: "button", base: p$b, typeMap: { button: c$h, toggle: a$4 } }), n3 = new c$h({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: i$3.zoomInMagnifyingGlass }), r = new c$h({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: i$3.trash }), l$1 = new c$h({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: i$3.zoomInMagnifyingGlass }), m$1 = new a$4({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: i$3.table, value: false });
const c4 = "esri.widgets.Popup.PopupViewModel", s$1 = s$6.getLogger(c4), u2 = (t2) => {
  const { event: c5, view: s2, viewModel: u3 } = t2, { action: l4 } = c5;
  if (!l4)
    return Promise.reject(new s$5("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: d2, id: g3 } = l4;
  if (!g3)
    return Promise.reject(new s$5("trigger-action:invalid-action", "action.id is missing"));
  if (d2)
    return Promise.reject(new s$5("trigger-action:invalid-action", "Action is disabled"));
  if (g3 === n3.id)
    return w2(u3).catch(f$6);
  if (g3 === l$1.id)
    return f$1(u3);
  if (g3 === m$1.id)
    return u3.browseClusterEnabled = !u3.browseClusterEnabled, u3.featureMenuOpen = u3.browseClusterEnabled, Promise.resolve();
  if (g3 === r.id) {
    u3.visible = false;
    const { selectedFeature: t3 } = u3;
    if (!t3)
      return Promise.reject(new s$5(`trigger-action:${r.id}`, "selectedFeature is required", { selectedFeature: t3 }));
    const { sourceLayer: r$12 } = t3;
    return r$12 ? r$12.remove(t3) : s2?.graphics.remove(t3), Promise.resolve();
  }
  return Promise.resolve();
};
function l3(e3) {
  const { selectedFeature: t2, location: r2, view: n4 } = e3;
  return n4 ? t2 ?? r2 ?? null : null;
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
    } catch (n4) {
    }
    return !t3 || !t3.boundingBox || t3.boundingBox[0] === t3.boundingBox[3] && t3.boundingBox[1] === t3.boundingBox[4] && t3.boundingBox[2] === t3.boundingBox[5];
  }
  return true;
}
async function w2(t2) {
  const { location: r2, selectedFeature: o3, view: i3, zoomFactor: a2 } = t2, c5 = l3(t2);
  if (!i3 || !c5) {
    const t3 = new s$5("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: c5, view: i3 });
    throw s$1.error(t3), t3;
  }
  const u3 = i3.scale / a2, d2 = t2.selectedFeature?.geometry, w3 = d2 ?? r2, f2 = null != w3 && "point" === w3.type && await g2(o3, i3);
  n3.active = true, n3.disabled = true;
  try {
    await t2.zoomTo({ target: { target: c5, scale: f2 ? u3 : void 0 } });
  } catch (m2) {
    const t3 = new s$5("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: o3 });
    s$1.error(t3);
  } finally {
    n3.active = false, n3.disabled = false, t2.zoomToLocation = null, f2 && (t2.location = w3);
  }
}
async function f$1(t2) {
  const { selectedFeature: r2, view: n4 } = t2;
  if ("2d" !== n4?.type) {
    const t3 = new s$5("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: n4 });
    throw s$1.error(t3), t3;
  }
  if (!r2 || !d(r2)) {
    const t3 = new s$5("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: r2 });
    throw s$1.error(t3), t3;
  }
  const [i3, a2] = await p$1(n4, r2);
  l$1.active = true, l$1.disabled = true;
  const { extent: c5 } = await i3.queryExtent(a2);
  await t2.zoomTo({ target: c5 }), l$1.active = false, l$1.disabled = false;
}
async function m(e3) {
  const { view: t2, selectedFeature: r2 } = e3;
  if (!t2 || !r2)
    return;
  const [n4, o3] = await p$1(t2, r2), { extent: i3 } = await n4.queryExtent(o3);
  e3.selectedClusterBoundaryFeature.geometry = i3, t2.graphics.add(e3.selectedClusterBoundaryFeature);
}
async function v2(e3) {
  const { selectedFeature: t2, view: r2 } = e3;
  if (!r2 || !t2)
    return;
  const [n4, o3] = await p$1(r2, t2);
  m$1.active = true, m$1.disabled = true;
  const { features: a2 } = await n4.queryFeatures(o3);
  m$1.active = false, m$1.disabled = false, m$1.value = true, e3?.open({ features: [t2].concat(a2), featureMenuOpen: true });
}
async function p$1(e3, t2) {
  const r2 = await e3.whenLayerView(t2.sourceLayer), n4 = r2.createQuery(), o3 = t2.getObjectId();
  return n4.aggregateIds = null != o3 ? [o3] : [], [r2, n4];
}
function y(e3) {
  m$1.value = false;
  const t2 = e3.features.filter((e4) => d(e4));
  t2.length && (e3.features = t2);
}
function h2(e3) {
  if (null == e3)
    return null;
  switch (e3.type) {
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
const I2 = () => [n3.clone()], S = () => [l$1.clone(), m$1.clone()];
let T$1 = class T extends t$6(c$3) {
  constructor(e3) {
    super(e3), this._pendingPromises = new s$b(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this.actions = new i2(), this.activeFeature = null, this.autoCloseEnabled = false, this.autoOpenEnabled = true, this.browseClusterEnabled = false, this.content = null, this.defaultPopupTemplateEnabled = false, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = false, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = true, this.includeDefaultActions = true, this.selectedClusterBoundaryFeature = new c$a({ symbol: new S$3({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = false, this.view = null, this.visible = false, this.zoomFactor = 4, this.zoomToLocation = null;
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), d$5(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), d$5(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), d$5(() => this.view?.animation?.state, (e3) => this._animationStateChange(e3)), d$5(() => this.location, (e3) => this._locationChange(e3)), d$5(() => this.selectedFeature, (e3) => this._selectedFeatureChange(e3)), d$5(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), d$5(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), d$5(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e3) => u2({ event: e3, viewModel: this, view: this.view })), p$a(() => !this.waitingForResult, () => this._waitingForResultChange(), C$3), d$5(() => [this.features, this.view?.map, this.view?.spatialReference], () => this._updateFeatureVMs()), d$5(() => this.view?.scale, () => this._viewScaleChange()), p$a(() => !this.visible, () => this.browseClusterEnabled = false), d$5(() => this.browseClusterEnabled, (e3) => e3 ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = false, this.view = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e3 = this._get("allActions") || new i2();
    e3.removeAll();
    const { actions: t2, defaultActions: i$12, defaultPopupTemplateEnabled: s2, includeDefaultActions: r2, selectedFeature: o3 } = this, a2 = r2 ? i$12.concat(t2) : t2, n4 = o3 && ("function" == typeof o3.getEffectivePopupTemplate && o3.getEffectivePopupTemplate(s2) || o3.popupTemplate), l4 = n4?.actions, u3 = n4?.overwriteActions ? l4 : l4?.concat(a2) ?? a2;
    return u3?.filter(Boolean).forEach((t3) => e3.add(t3)), e3;
  }
  get defaultActions() {
    const e3 = this._get("defaultActions") || new i2();
    return e3.removeAll(), e3.addMany(d(this.selectedFeature) ? S() : I2()), e3;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(e3) {
    const t2 = e3 || [];
    this._set("features", t2);
    const { pendingPromisesCount: i3, promiseCount: s2, selectedFeatureIndex: r2 } = this, o3 = s2 && t2.length;
    o3 && i3 && -1 === r2 ? this.selectedFeatureIndex = 0 : o3 && -1 !== r2 || (this.selectedFeatureIndex = t2.length ? 0 : -1);
  }
  set location(e3) {
    let t2 = e3;
    const i3 = this.view?.spatialReference?.isWebMercator, s2 = e3?.spatialReference?.isWGS84;
    s2 && i3 && (t2 = d$8(e3)), this._set("location", t2);
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
    this._pendingPromises.clear(), this.features = [], Array.isArray(e3) && e3.length ? (this._set("promises", e3), (e3 = e3.slice(0)).forEach((e4) => {
      this._pendingPromises.add(e4);
      const t2 = (t3) => {
        this._pendingPromises.has(e4) && this._updateFeatures(t3), this._updatePendingPromises(e4);
      }, i3 = () => this._updatePendingPromises(e4);
      e4.then(t2, i3);
    })) : this._set("promises", []);
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
    const { view: e3 } = this, t2 = l3(this);
    return t2 && e3 ? this.callGoTo({ target: { target: t2, scale: e3.scale } }) : Promise.reject(new s$5("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: t2, view: e3 }));
  }
  zoomTo(e3) {
    return this.callGoTo(e3);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(e3, t2) {
    const { view: i3 } = this;
    if (!i3 || !e3)
      throw new s$5("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: e3, view: i3 });
    return i3.fetchPopupFeatures(e3, { event: t2?.event, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: t2?.signal });
  }
  open(e3) {
    const t2 = { updateLocationEnabled: false, promises: [], fetchFeatures: false, ...e3, visible: true }, { fetchFeatures: i3 } = t2;
    delete t2.fetchFeatures, i3 && this._setFetchFeaturesPromises(t2.location);
    const s2 = ["actionsMenuOpen", "collapsed"];
    for (const r2 of s2)
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
    "2d" === e3?.type ? d(t2) ? (await m(this), await v2(this)) : s$6.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t2) : s$6.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t2);
  }
  handleViewClick(e3) {
    this.autoOpenEnabled && this._fetchFeaturesAndOpen(e3);
  }
  _animationStateChange(e3) {
    this.zoomToLocation || (n3.disabled = "waiting-for-target" === e3);
  }
  _clearBrowsedClusterGraphics() {
    const e3 = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(k$3);
    this.view?.graphics?.removeMany(e3), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (d(this.selectedFeature))
      return this.browseClusterEnabled = false, this.visible = false, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e3) {
    const { selectedFeature: t2, updateLocationEnabled: i3 } = this;
    i3 && e3 && (!t2 || t2.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: e3, featureCount: t2, featurePage: i3, featuresPerPage: s2, featureViewModels: r2 } = this;
    if (null === i3)
      return;
    const o3 = ((i3 - 1) * s2 + t2) % t2, a2 = o3 + s2;
    r2.slice(o3, a2).forEach((t3, i4) => {
      t3 && (t3.graphic ??= e3[o3 + i4]);
    });
  }
  async _selectedFeatureChange(e3) {
    const { location: t2, updateLocationEnabled: i3, view: s2 } = this;
    if (e3 && s2) {
      if (this.browseClusterEnabled) {
        if (this._selectedClusterFeature && (s2.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), d(e3))
          return;
        return e3.symbol = await L$1(e3), this._selectedClusterFeature = e3, void s2.graphics.add(this._selectedClusterFeature);
      }
      if (!i3 && t2 || !e3.geometry) {
        if (i3 && !e3.geometry) {
          await this.centerAtLocation();
          const e4 = s2.center?.clone();
          e4 && (this.location = e4);
        }
      } else
        this.location = h2(e3.geometry);
    }
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = false);
  }
  async _setFetchFeaturesPromises(e3) {
    const { clientOnlyGraphics: t2, promisesPerLayerView: i3 } = await this._fetchFeaturesWithController(this._getScreenPoint(e3 || this.location)), s2 = Promise.resolve(t2), r2 = i3.map((e4) => e4.promise);
    this.promises = [s2, ...r2];
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e3) => e3 && !e3.destroyed && e3.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: e3, features: t2, featureViewModels: i3, view: s2 } = this;
    if (d(e3) || (this.browseClusterEnabled = false), this._destroyFeatureVMs(), !t2?.length)
      return;
    const r2 = i3.slice(0), o3 = [];
    t2.forEach((t3, i4) => {
      if (!t3)
        return;
      let a2 = null;
      if (r2.some((e4, i5) => (e4 && e4.graphic === t3 && (a2 = e4, r2.splice(i5, 1)), !!a2)), a2)
        o3[i4] = a2;
      else {
        const r3 = new X({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: s2?.spatialReference, graphic: t3 === e3 ? t3 : null, map: s2?.map, view: s2 });
        o3[i4] = r3;
      }
    }), r2.forEach((e4) => e4 && !e4.destroyed && e4.destroy()), this._set("featureViewModels", o3);
  }
  _getScreenPoint(e3) {
    const { view: t2 } = this;
    return t2 && e3 && "function" == typeof t2.toScreen ? t2.toScreen(e3) : null;
  }
  _cancelFetchingFeatures() {
    const e3 = this._fetchFeaturesController;
    e3 && e3.abort(), this._fetchFeaturesController = null;
  }
  _fetchFeaturesWithController(e3, t2) {
    this._cancelFetchingFeatures();
    const i3 = new AbortController(), { signal: s2 } = i3;
    this._fetchFeaturesController = i3;
    const r2 = this.fetchFeatures(e3, { signal: s2, event: t2 });
    return r2.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null;
    }), r2;
  }
  async _fetchFeaturesAndOpen(e3) {
    const { screenPoint: t2, mapPoint: i3 } = e3, { view: s2 } = this, { clientOnlyGraphics: r2, promisesPerLayerView: o3, location: a2 } = await this._fetchFeaturesWithController(t2, e3), n4 = [Promise.resolve(r2), ...o3.map((e4) => e4.promise)];
    s2?.popup && "open" in s2.popup && s2.popup.open({ location: a2 || i3, promises: n4 });
  }
  _updatePendingPromises(e3) {
    e3 && this._pendingPromises.has(e3) && this._pendingPromises.delete(e3);
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = false);
  }
  async _getLayerView(e3, t2) {
    return await e3.when(), e3.whenLayerView(t2);
  }
  _getHighlightLayer(e3) {
    const { layer: t2, sourceLayer: i3 } = e3;
    return i3 && "layer" in i3 && i3.layer ? i3.layer : "map-notes" === i3?.type || "subtype-group" === i3?.type ? i3 : t2;
  }
  _getHighlightTarget(e3, t2) {
    const i3 = "imagery" === t2.type ? void 0 : "objectIdField" in t2 ? t2.objectIdField || o$5 : null, s2 = e3.attributes;
    return s2 && i3 && s2[i3] || e3;
  }
  _mapIncludesLayer(e3) {
    return !!this.view?.map?.allLayers?.includes(e3);
  }
  async _highlightActiveFeature() {
    const e3 = "highlight-active-feature";
    this.removeHandles(e3);
    const { highlightEnabled: t2, view: i3, activeFeature: s2, visible: r2 } = this;
    if (!(s2 && i3 && t2 && r2))
      return;
    const o3 = this._getHighlightLayer(s2);
    if (!(o3 && o3 instanceof b$6 && this._mapIncludesLayer(o3)))
      return;
    const a2 = this._getLayerView(i3, o3);
    this._highlightActiveFeaturePromise = a2;
    const n4 = await a2;
    if (!(n4 && n$9(n4) && this._highlightActiveFeaturePromise === a2 && this.activeFeature && this.highlightEnabled))
      return;
    const l4 = n4.highlight(this._getHighlightTarget(s2, o3));
    this.addHandles(l4, e3);
  }
  async _highlightSelectedFeature() {
    const e3 = "highlight-selected-feature";
    this.removeHandles(e3);
    const { selectedFeature: t2, highlightEnabled: i3, view: s2, visible: r2 } = this;
    if (!(t2 && s2 && i3 && r2))
      return;
    const o3 = this._getHighlightLayer(t2);
    if (!(o3 && o3 instanceof b$6 && this._mapIncludesLayer(o3)))
      return;
    const a2 = this._getLayerView(s2, o3);
    this._highlightSelectedFeaturePromise = a2;
    const n4 = await a2;
    if (!(n4 && n$9(n4) && this._highlightSelectedFeaturePromise === a2 && this.selectedFeature && this.highlightEnabled && this.visible))
      return;
    const l4 = n4.highlight(this._getHighlightTarget(t2, o3));
    this.addHandles(l4, e3);
  }
  _updateFeatures(e3) {
    const { features: t2 } = this;
    if (!e3?.length)
      return;
    if (!t2.length)
      return void (this.features = e3);
    const i3 = e3.filter((e4) => !t2.includes(e4));
    this.features = t2.concat(i3);
  }
};
e$6([y$6()], T$1.prototype, "_fetchFeaturesController", void 0), e$6([y$6({ type: i2 })], T$1.prototype, "actions", void 0), e$6([y$6({ readOnly: true })], T$1.prototype, "active", null), e$6([y$6()], T$1.prototype, "activeFeature", void 0), e$6([y$6({ readOnly: true })], T$1.prototype, "allActions", null), e$6([y$6()], T$1.prototype, "autoCloseEnabled", void 0), e$6([y$6()], T$1.prototype, "autoOpenEnabled", void 0), e$6([y$6()], T$1.prototype, "browseClusterEnabled", void 0), e$6([y$6()], T$1.prototype, "content", void 0), e$6([y$6({ type: i2, readOnly: true })], T$1.prototype, "defaultActions", null), e$6([y$6({ type: Boolean })], T$1.prototype, "defaultPopupTemplateEnabled", void 0), e$6([y$6({ readOnly: true })], T$1.prototype, "featureCount", null), e$6([y$6()], T$1.prototype, "featurePage", void 0), e$6([y$6({ value: [] })], T$1.prototype, "features", null), e$6([y$6()], T$1.prototype, "featuresPerPage", void 0), e$6([y$6()], T$1.prototype, "featureMenuOpen", void 0), e$6([y$6()], T$1.prototype, "featureViewModelAbilities", void 0), e$6([y$6({ readOnly: true })], T$1.prototype, "featureViewModels", void 0), e$6([y$6()], T$1.prototype, "highlightEnabled", void 0), e$6([y$6()], T$1.prototype, "includeDefaultActions", void 0), e$6([y$6({ type: x$6 })], T$1.prototype, "location", null), e$6([y$6({ readOnly: true })], T$1.prototype, "pendingPromisesCount", null), e$6([y$6({ readOnly: true })], T$1.prototype, "promiseCount", null), e$6([y$6()], T$1.prototype, "promises", null), e$6([y$6({ readOnly: true })], T$1.prototype, "selectedClusterBoundaryFeature", void 0), e$6([y$6({ value: null, readOnly: true })], T$1.prototype, "selectedFeature", null), e$6([y$6({ value: -1 })], T$1.prototype, "selectedFeatureIndex", null), e$6([y$6({ readOnly: true })], T$1.prototype, "selectedFeatureViewModel", null), e$6([y$6({ readOnly: true })], T$1.prototype, "state", null), e$6([y$6()], T$1.prototype, "title", void 0), e$6([y$6()], T$1.prototype, "updateLocationEnabled", void 0), e$6([y$6()], T$1.prototype, "view", void 0), e$6([y$6()], T$1.prototype, "visible", void 0), e$6([y$6({ readOnly: true })], T$1.prototype, "waitingForContents", null), e$6([y$6({ readOnly: true })], T$1.prototype, "waitingForResult", null), e$6([y$6()], T$1.prototype, "zoomFactor", void 0), e$6([y$6()], T$1.prototype, "zoomToLocation", void 0), e$6([y$6()], T$1.prototype, "centerAtLocation", null), T$1 = e$6([c$b("esri.widgets.Features.FeaturesViewModel")], T$1);
const x$1 = T$1;
let s = class extends g$6 {
  constructor() {
    super(...arguments), this.actionBar = true, this.closeButton = true, this.collapseButton = false, this.featureNavigation = true, this.heading = true, this.spinner = true;
  }
};
e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "actionBar", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "closeButton", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "collapseButton", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "featureNavigation", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "heading", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], s.prototype, "spinner", void 0), s = e$6([c$b("esri.widgets.Features.FeaturesVisibleElements")], s);
const a = s;
const x = "selected-index", j = 0, R = "features-spinner", k$1 = 50;
let O = class extends i$2(O$1) {
  constructor(e3, i$12) {
    super(e3, i$12), this._featureMenuIntersectionObserverCallback = ([e4]) => {
      e4?.isIntersecting && null != this.viewModel.featurePage && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, { root: window.document }), this._featureMenuIntersectionObserverNode = null, this._focusOn = null, this._spinner = null, this._feature = null, this._relatedRecordsFlowItems = new V(), this._relatedRecordsWidget = new d$1({ flowItems: this._relatedRecordsFlowItems }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this.collapsed = false, this.icon = null, this.featureNavigationTop = false, this.headerActions = new i2(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = false, this.viewModel = new x$1(), this.visibleElements = new a(), this._renderAction = (e4, t2) => {
      const i3 = this._getActionTitle(e4), { type: o3, active: s2, uid: r2, disabled: n4, indicator: a2 } = e4;
      return e4.visible ? n$8("calcite-action", { active: "toggle" === o3 && e4.value, appearance: "solid", bind: this, "data-action-uid": r2, disabled: n4, icon: this._getActionIcon(e4), indicator: a2, key: `action-${t2}`, loading: s2, onclick: this._triggerAction, scale: "s", text: i3, title: this._hideActionText ? i3 : void 0 }, this._getFallbackIcon(e4)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = true;
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
    }, this._focusFlowItemNodeThrottled = e$b(this._focusFlowItemNode, k$1), this._displaySpinnerThrottled = e$b(() => this._displaySpinner(), j), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, this._focusFlowItemNodeThrottled, d$5(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), d$5(() => this.viewModel?.active, (e4) => this._relatedRecordsWidget.closed = !e4), d$5(() => this.visibleElements?.closeButton, (e4) => this._relatedRecordsWidget.closable = e4), d$5(() => this.visibleElements?.spinner, (e4) => this._spinnerEnabledChange(e4)), d$5(() => this.viewModel?.view, (e4, t2) => this._viewChange(e4, t2)), d$5(() => this.viewModel?.view?.ready, (e4, t2) => this._viewReadyChange(e4 ?? false, t2 ?? false)), d$5(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), d$5(() => this.selectedFeatureWidget, () => this._destroyRelatedRecordsFlowItemWidgets()), d$5(() => {
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
    const { _feature: e3, headingLevel: t2, _relatedRecordsFlowItems: i3 } = this, { selectedFeatureViewModel: o3 } = this.viewModel, s2 = { title: false };
    return o3 ? (e3 ? (e3.viewModel = o3, e3.visibleElements = s2) : this._feature = new x$2({ flowItems: i3, headingLevel: t2 + 1, viewModel: o3, visibleElements: s2 }), this._feature) : null;
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
    e3 ? this._rootFlowItemNode?.blur() : s$6.getLogger(this).warn("Features can only be blurred when currently active.");
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
    e3 ? this._setFocusOn() : s$6.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(e3) {
    this.removeHandles(x);
    const t2 = { collapsed: e3?.collapsed ?? false };
    this.set(t2), this.viewModel.open(e3), this.addHandles(p$a(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), { once: true }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(e3) {
    return this.viewModel.triggerAction(e3);
  }
  render() {
    return n$8("div", { bind: this, class: this.classes(n$2.base, e$8.widget, e$8.panel), onkeydown: this._onMainKeydown }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? n$8("div", { class: n$2.header, key: "header-actions" }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : n$8("div", { class: n$2.footer, key: "footer-actions", slot: "footer" }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const { messages: e3, viewModel: t2 } = this, { featureCount: i3, selectedFeatureIndex: o3, pendingPromisesCount: s2 } = t2;
    return n$8("calcite-action", { appearance: "solid", bind: this, icon: "list", key: "feature-menu-button", label: e3.selectFeature, loading: s2 > 0, onclick: this._openFeatureMenu, scale: "s", text: s$9(e3.pageText, { index: u$6(o3 + 1), total: u$6(i3) }), textEnabled: true, title: e3.selectFeature });
  }
  _renderPagination() {
    const { previous: e3, next: t2 } = this.messagesCommon.pagination;
    return n$8("calcite-action-bar", { class: n$2.paginationActionBar, expandDisabled: true, key: "pagination-action-bar", layout: "horizontal", overflowActionsDisabled: true, scale: "s" }, n$8("calcite-action-group", { scale: "s" }, n$8("calcite-action", { appearance: "solid", class: n$2.paginationPrevious, icon: "chevron-left", iconFlipRtl: true, label: e3, onclick: this._previousFeature, scale: "s", text: e3, title: e3 }), n$8("calcite-action", { appearance: "solid", icon: "chevron-right", iconFlipRtl: true, label: t2, onclick: this._nextFeature, scale: "s", text: t2, title: t2 })));
  }
  _renderFeatureMenuItem(e3) {
    const { selectedFeatureViewModel: t2, featureViewModels: i3 } = this.viewModel, o3 = e3 === t2, s2 = i3.indexOf(e3);
    return n$8("calcite-list-item", { bind: this, "data-feature-index": s2, key: `feature-menu-item-${e3.uid}`, onblur: this._removeActiveFeature, onfocus: this._setActiveFeature, onmouseleave: this._removeActiveFeature, onmouseover: this._setActiveFeature, selected: o3, onCalciteListItemSelect: this._selectFeature }, n$8("span", { innerHTML: e3.title || this.messagesCommon.untitled, slot: "content" }));
  }
  _groupResultsByLayer() {
    const { featureViewModels: e3 } = this.viewModel, t2 = /* @__PURE__ */ new Map();
    return e3.forEach((e4) => {
      const i3 = e4?.graphic;
      if (!i3)
        return;
      const o3 = i3.sourceLayer ?? i3.layer, s2 = t2.get(o3) ?? [];
      t2.set(o3, [...s2, e4]);
    }), t2;
  }
  _renderFeatureMenu() {
    const { featureViewModels: e3 } = this.viewModel, t2 = this._groupResultsByLayer();
    return e3.length ? n$8("calcite-list", { selectionAppearance: "icon", selectionMode: "single" }, Array.from(t2.keys()).map((e4) => n$8("calcite-list-item-group", { heading: e4?.title ?? this.messagesCommon.untitled, key: e4?.uid || "untitled" }, t2.get(e4)?.map((e5) => this._renderFeatureMenuItem(e5))))) : null;
  }
  _renderHeaderAction(e3, t2) {
    return e3.visible ? n$8("calcite-action", { active: "toggle" === e3.type && e3.value, appearance: "solid", bind: this, "data-action-uid": e3.uid, disabled: e3.disabled, icon: e3.icon || "", indicator: e3.indicator, key: `header-action-${t2}`, loading: e3.active, onclick: this._triggerHeaderAction, scale: "m", slot: "header-actions-end", text: e3.title || "", title: e3.title || "" }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((e3, t2) => this._renderHeaderAction(e3, t2)).toArray();
  }
  _renderContentFeature() {
    const { headingLevel: e3, visibleElements: t2, _isCollapsed: i3, _collapseEnabled: o3, featureNavigationTop: s2 } = this, { title: r2, active: n4 } = this.viewModel, a2 = t2.heading && r2 ? r2 : "";
    return n$8("calcite-flow-item", { afterCreate: this._storeRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, class: this.classes({ [n$2.contentFeature]: true, [n$2.flowItemCollapsed]: i3 }), closable: t2.closeButton, closed: !n4, collapsed: i3, collapseDirection: s2 ? "down" : "up", collapsible: o3, headingLevel: e3, key: "root-flow-item", onCalciteFlowItemClose: this.close, onCalciteFlowItemToggle: this._handleCollapseToggle }, a2 ? n$8(e$9, { class: this.classes(n$2.featuresHeading, e$8.heading), innerHTML: a2, key: "header-content", level: this.headingLevel, slot: "header-content" }) : null, this._renderHeaderActions(), this._renderActionBar(), i3 ? null : n$8("div", { class: this.classes(n$2.container, n$2.contentContainer) }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const { viewModel: e3, featureMenuOpen: t2, messages: i3, messagesCommon: o3 } = this, { active: s2, featureViewModels: r2, pendingPromisesCount: n4 } = e3;
    return t2 ? n$8("calcite-flow-item", { afterCreate: this._storeFeatureMenuFlowItemNode, afterUpdate: this._focusFeatureMenuFlowItemNode, bind: this, closable: false, closed: !s2, description: s$9(i3.total, { total: r2.length }), heading: i3.selectFeature, key: "feature-menu", loading: e3.waitingForContents, onCalciteFlowItemBack: this._handleFeatureMenuBack }, n4 > 0 ? n$8("calcite-loader", { class: n$2.loader, inline: true, key: "feature-menu-loader", label: o3.loading, scale: "m", slot: "header-actions-end" }) : null, n$8("div", { class: n$2.container }, this._renderFeatureMenu()), n$8("div", { afterCreate: this._featureMenuIntersectionObserverCreated, bind: this, class: n$2.featureMenuObserver }), n$8("calcite-button", { appearance: "transparent", onclick: this._handleFeatureMenuBack, slot: "footer-actions", width: "full" }, o3.back)) : null;
  }
  _renderContentContainer() {
    return n$8("calcite-flow", { key: "content-container" }, this._renderContentFeature(), this._renderFeatureMenuContainer(), this._relatedRecordsWidget.render());
  }
  _getIconStyles(e3) {
    return { "background-image": e3 ? `url(${e3})` : "" };
  }
  _getActionImage(e3) {
    const { selectedFeature: t2 } = this, i3 = t2?.attributes, { image: o3 } = e3;
    return o3 && i3 ? s$9(o3, i3) : o3 ?? "";
  }
  _getFallbackIcon(e3) {
    const { className: t2, icon: i3 } = e3;
    if (i3)
      return null;
    const o3 = this._getActionImage(e3), s2 = { [n$2.icon]: !!t2, [n$2.actionImage]: !!o3 };
    return t2 && (s2[t2] = true), o3 || t2 ? n$8("span", { "aria-hidden": "true", class: this.classes(n$2.icon, s2), key: "icon", styles: o3 ? this._getIconStyles(o3) : {} }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? n$8("calcite-action-bar", { expandDisabled: true, expanded: !this._hideActionText, key: "header-action-bar", scale: "s", slot: "action-bar" }, n$8("calcite-action-group", { overlayPositioning: "fixed", scale: "s" }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const e3 = this.viewModel?.content;
    return e3 ? "string" == typeof e3 ? n$8("div", { class: t$4.contentNode, innerHTML: e3, key: e3 }) : this.renderNodeContent(e3) : null;
  }
  _setFocusOn() {
    this._focusOn = this.featureMenuOpen ? "menu-flow-item" : "root-flow-item", this.renderNow();
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  async _openRelatedFeature(e3) {
    await e3.viewModel.updateGeometry();
    const t2 = e3.graphic, i3 = t2?.geometry;
    if (null == i3 || null == t2)
      return;
    this._destroyRelatedRecordsFlowItemWidgets(), await this.viewModel.zoomTo({ target: i3 });
    const o3 = h2(i3);
    this.open({ features: [t2], location: null != o3 ? o3 : void 0 });
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
    const { viewModel: t2 } = this, i3 = e3.currentTarget["data-feature-index"];
    t2.activeFeature = t2.features?.[i3] || null;
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
    const { messages: t2, selectedFeature: i3, messagesCommon: o3 } = this, { id: s2 } = e3, r2 = i3?.attributes, n4 = e3.title ?? "", a2 = "zoom-to-feature" === s2 ? s$9(n4, { messages: t2 }) : "remove-selected-feature" === s2 ? s$9(n4, { messages: o3 }) : "zoom-to-clustered-features" === s2 || "browse-clustered-features" === s2 ? s$9(n4, { messages: t2 }) : e3.title;
    return a2 && r2 ? s$9(a2, r2) : a2 ?? "";
  }
  _onMainKeydown(e3) {
    const t2 = c$e(e3);
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
    const { selectedFeatureWidget: e3, messagesCommon: t2 } = this, i3 = e3?.viewModel;
    e3 && (this.viewModel.title = "error" === i3?.state ? t2?.errorMessage : i3?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const e3 = d$5(() => this.viewModel?.selectedFeatureIndex, (e4, t2) => this._selectedFeatureIndexUpdated(e4, t2));
    this.addHandles(e3, x);
  }
  _selectedFeatureIndexUpdated(e3, t2) {
    const { featureCount: i3 } = this.viewModel;
    i3 && e3 !== t2 && -1 !== e3 && (this._destroyRelatedRecordsFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({ top: 0 }));
  }
  _triggerHeaderAction(e3) {
    const t2 = e3.currentTarget;
    if (t2.disabled)
      return;
    const i3 = t2.dataset.actionUid, o3 = this.headerActions.find(({ uid: e4 }) => e4 === i3);
    o3 && !o3.disabled && ("toggle" === o3?.type && (o3.value = !o3.value), this.emit("trigger-header-action", { action: o3 }));
  }
  _triggerAction(e3) {
    const t2 = e3.currentTarget;
    if (t2.disabled)
      return;
    const i3 = t2.dataset.actionUid, { allActions: o3 } = this.viewModel, s2 = o3.findIndex((e4) => e4.uid === i3), r2 = o3.at(s2);
    r2 && "toggle" === r2.type && (r2.value = !r2.value), this.viewModel.triggerAction(s2);
  }
  _createSpinner(e3) {
    e3 && (this._spinner = new h$1({ view: e3 }), e3.ui.add(this._spinner, { key: R, position: "manual", internal: true }));
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
    const { location: t2, waitingForResult: i3 } = this.viewModel;
    i3 && t2 ? e3.show({ location: t2 }) : e3.hide();
  }
  _destroySpinner() {
    const { _spinner: e3, view: t2 } = this;
    e3 && (t2?.ui?.remove(e3, R), e3.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(e3) {
    this._destroySpinner(), e3 && this._createSpinner(this.viewModel?.view);
  }
};
e$6([y$6()], O.prototype, "_focusOn", void 0), e$6([y$6()], O.prototype, "_relatedRecordsFlowItems", void 0), e$6([y$6()], O.prototype, "_hideActionText", null), e$6([y$6()], O.prototype, "_featureNavigationVisible", null), e$6([y$6()], O.prototype, "_isCollapsed", null), e$6([y$6()], O.prototype, "_collapseEnabled", null), e$6([y$6()], O.prototype, "collapsed", void 0), e$6([y$6()], O.prototype, "content", null), e$6([y$6()], O.prototype, "icon", void 0), e$6([y$6()], O.prototype, "featureMenuOpen", null), e$6([y$6()], O.prototype, "featureNavigationTop", void 0), e$6([y$6()], O.prototype, "features", null), e$6([y$6({ type: i2 })], O.prototype, "headerActions", void 0), e$6([y$6()], O.prototype, "headingLevel", void 0), e$6([y$6()], O.prototype, "location", null), e$6([y$6()], O.prototype, "label", null), e$6([y$6(), e$7("esri/widgets/Features/t9n/Features")], O.prototype, "messages", void 0), e$6([y$6(), e$7("esri/t9n/common")], O.prototype, "messagesCommon", void 0), e$6([y$6()], O.prototype, "promises", null), e$6([y$6()], O.prototype, "responsiveActionsEnabled", void 0), e$6([y$6({ readOnly: true })], O.prototype, "selectedFeature", null), e$6([y$6()], O.prototype, "selectedFeatureIndex", null), e$6([y$6({ readOnly: true })], O.prototype, "selectedFeatureWidget", null), e$6([y$6()], O.prototype, "title", null), e$6([y$6()], O.prototype, "updateLocationEnabled", null), e$6([y$6()], O.prototype, "view", null), e$6([y$6({ type: x$1 }), e$c(["triggerAction", "trigger-action"])], O.prototype, "viewModel", void 0), e$6([y$6({ type: a, nonNullable: true })], O.prototype, "visibleElements", void 0), e$6([y$6()], O.prototype, "visible", null), O = e$6([c$b("esri.widgets.Features")], O);
const T2 = O;
const t$2 = "esri-popup", o2 = `${t$2}--is-docked`, e$1 = { base: t$2, main: `${t$2}__main-container`, shadow: `${t$2}--shadow`, isDocked: o2, isDockedTopLeft: `${o2}-top-left`, isDockedTopCenter: `${o2}-top-center`, isDockedTopRight: `${o2}-top-right`, isDockedBottomLeft: `${o2}-bottom-left`, isDockedBottomCenter: `${o2}-bottom-center`, isDockedBottomRight: `${o2}-bottom-right`, alignTopCenter: `${t$2}--aligned-top-center`, alignBottomCenter: `${t$2}--aligned-bottom-center`, alignTopLeft: `${t$2}--aligned-top-left`, alignBottomLeft: `${t$2}--aligned-bottom-left`, alignTopRight: `${t$2}--aligned-top-right`, alignBottomRight: `${t$2}--aligned-bottom-right`, pointer: `${t$2}__pointer`, pointerDirection: `${t$2}__pointer-direction` };
let e2 = class extends x$1 {
  constructor(r2) {
    super(r2);
  }
};
e2 = e$6([c$b("esri.widgets.Popup.PopupViewModel")], e2);
const t$1 = e2;
let t = class extends g$6 {
  constructor() {
    super(...arguments), this.closeButton = true, this.featureNavigation = true;
  }
};
e$6([y$6({ type: Boolean, nonNullable: true })], t.prototype, "closeButton", void 0), e$6([y$6({ type: Boolean, nonNullable: true })], t.prototype, "featureNavigation", void 0), t = e$6([c$b("esri.widgets.Features.PopupVisibleElements")], t);
const p3 = t;
const f = { buttonEnabled: true, position: "auto", breakpoint: { width: 544 } };
let _ = class extends O$1 {
  constructor(e3, t2) {
    super(e3, t2), this._dockAction = new c$h({ id: "popup-dock-action" }), this._featuresWidget = new T2({ responsiveActionsEnabled: true }), this._containerNode = null, this._mainContainerNode = null, this._pointerOffsetInPx = 16, this.alignment = "auto", this.collapsed = false, this.collapseEnabled = true, this.dockEnabled = false, this.headingLevel = 2, this.maxInlineActions = 3, this.messages = null, this.spinnerEnabled = true, this.viewModel = new t$1(), this.visibleElements = new p3();
  }
  initialize() {
    this.addHandles([d$5(() => [this.viewModel?.view?.widthBreakpoint, this.dockEnabled], () => this._handleDockIcon(), { initial: true }), d$5(() => [this.dockEnabled, this.messages?.undock, this.messages?.dock], () => this._handleDockEnabled(), { initial: true }), d$5(() => this.dockOptions, (e3) => {
      const { _dockAction: t2 } = this, i3 = this._featuresWidget.headerActions;
      i3.remove(t2), e3.buttonEnabled && i3.add(t2);
    }, { initial: true }), d$5(() => this.viewModel?.screenLocation, () => this._positionContainer()), d$5(() => [this.viewModel?.active, this.dockEnabled], () => this._toggleScreenLocationEnabled()), d$5(() => [this.viewModel?.screenLocation, this.viewModel?.view?.padding, this.viewModel?.view?.size, this.viewModel?.active, this.viewModel?.location, this.alignment], () => this.reposition()), d$5(() => this.viewModel?.view?.size, (e3, t2) => this._updateDockEnabledForViewSize(e3, t2)), d$5(() => this.viewModel?.view, (e3, t2) => this._viewChange(e3, t2)), d$5(() => this.viewModel?.view?.ready, (e3, t2) => this._viewReadyChange(e3 ?? false, t2 ?? false)), d$5(() => this.viewModel, () => this._featuresWidget.viewModel = this.viewModel, { initial: true }), d$5(() => this._featureNavigationTop, (e3) => this._featuresWidget.featureNavigationTop = e3, { initial: true }), d$5(() => this.headingLevel, (e3) => this._featuresWidget.headingLevel = e3, { initial: true }), d$5(() => this.collapseEnabled, (e3) => this._featuresWidget.visibleElements.collapseButton = e3, { initial: true }), d$5(() => this.collapsed, (e3) => this._featuresWidget.collapsed = e3, { initial: true }), d$5(() => this.visibleElements.closeButton, (e3) => this._featuresWidget.visibleElements.closeButton = !!e3, { initial: true }), d$5(() => this.spinnerEnabled, (e3) => this._featuresWidget.visibleElements.spinner = e3, { initial: true }), d$5(() => this.visibleElements.featureNavigation, (e3) => this._featuresWidget.visibleElements.featureNavigation = !!e3, { initial: true }), v$3(() => this._featuresWidget, "trigger-header-action", (e3) => {
      e3.action === this._dockAction && (this.dockEnabled = !this.dockEnabled);
    })]);
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
    return t$7(s$6.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled;
  }
  set autoOpenEnabled(e3) {
    t$7(s$6.getLogger(this), "autoOpenEnabled", { replacement: "MapView/SceneView.popupEnabled", version: "4.27" }), this.viewModel.autoOpenEnabled = e3;
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
  get currentAlignment() {
    return this._getCurrentAlignment();
  }
  get currentDockPosition() {
    return this._getCurrentDockPosition();
  }
  get dockOptions() {
    return this._get("dockOptions") || f;
  }
  set dockOptions(e3) {
    const t2 = { ...f }, i3 = this.viewModel?.view?.breakpoints, o3 = {};
    i3 && (o3.width = i3.xsmall, o3.height = i3.xsmall);
    const n4 = { ...t2, ...e3 }, s2 = { ...t2.breakpoint, ...o3 }, { breakpoint: r2 } = n4;
    "object" == typeof r2 ? n4.breakpoint = { ...s2, ...r2 } : r2 && (n4.breakpoint = s2), this._set("dockOptions", n4), this._setCurrentDockPosition(), this.reposition();
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
    e3 || s$6.getLogger(this).warn("Popup can only be blurred when currently active."), this._featuresWidget.blur();
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
    e3 || s$6.getLogger(this).warn("Popup can only be focused when currently active."), this.renderNow(), this._featuresWidget.focus();
  }
  next() {
    return this.viewModel.next();
  }
  open(e3) {
    const t2 = !!e3 && !!e3.featureMenuOpen, i3 = { collapsed: !!e3 && !!e3.collapsed, featureMenuOpen: t2 };
    this.set(i3), this.viewModel.open(e3), this._shouldFocus(e3);
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
    const { dockEnabled: e3, currentAlignment: t2, currentDockPosition: i3 } = this, { active: o3 } = this.viewModel, n4 = o3 && e3, s2 = o3 && !e3, r2 = this.selectedFeature?.layer?.title, l4 = this.selectedFeature?.layer?.id, a2 = { [e$1.alignTopCenter]: "top-center" === t2, [e$1.alignBottomCenter]: "bottom-center" === t2, [e$1.alignTopLeft]: "top-left" === t2, [e$1.alignBottomLeft]: "bottom-left" === t2, [e$1.alignTopRight]: "top-right" === t2, [e$1.alignBottomRight]: "bottom-right" === t2, [e$1.isDocked]: n4, [e$1.shadow]: s2, [e$1.isDockedTopLeft]: "top-left" === i3, [e$1.isDockedTopCenter]: "top-center" === i3, [e$1.isDockedTopRight]: "top-right" === i3, [e$1.isDockedBottomLeft]: "bottom-left" === i3, [e$1.isDockedBottomCenter]: "bottom-center" === i3, [e$1.isDockedBottomRight]: "bottom-right" === i3 };
    return n$8("div", { afterCreate: this._positionContainer, afterUpdate: this._positionContainer, bind: this, class: this.classes(e$1.base, a2), "data-layer-id": l4, "data-layer-title": r2, role: "presentation" }, o3 ? [this._renderMainContainer(), this._renderPointer()] : null);
  }
  _renderPointer() {
    return this.dockEnabled ? null : n$8("div", { class: e$1.pointer, key: "popup-pointer", role: "presentation" }, n$8("div", { class: this.classes(e$1.pointerDirection, e$1.shadow) }));
  }
  _renderMainContainer() {
    const { dockEnabled: e3 } = this, t2 = { [e$1.shadow]: e3 };
    return n$8("div", { afterCreate: this._setMainContainerNode, afterUpdate: this._setMainContainerNode, bind: this, class: this.classes(e$1.main, e$8.widget, t2) }, this._featuresWidget.render());
  }
  async _shouldFocus(e3) {
    e3?.shouldFocus && (await w$6(() => true === this.viewModel?.active), this.focus());
  }
  _isOutsideView(e3) {
    const { popupHeight: t2, popupWidth: i3, screenLocation: o3, side: n4, view: s2 } = e3;
    if (isNaN(i3) || isNaN(t2) || !s2 || !o3)
      return false;
    const r2 = s2.padding;
    return "right" === n4 && o3.x + i3 / 2 > s2.width - r2.right || ("left" === n4 && o3.x - i3 / 2 < r2.left || ("top" === n4 && o3.y - t2 < r2.top || "bottom" === n4 && o3.y + t2 > s2.height - r2.bottom));
  }
  _calculateAutoAlignment(e3) {
    if ("auto" !== e3)
      return e3;
    const { _pointerOffsetInPx: t2, _containerNode: i3, _mainContainerNode: o3, viewModel: n4 } = this, { screenLocation: s2, view: r2 } = n4;
    if (null == s2 || !r2 || !i3)
      return "top-center";
    function l4(e4) {
      return parseInt(e4.replaceAll(/[^-\d\.]/g, ""), 10);
    }
    const a2 = o3 ? window.getComputedStyle(o3, null) : null, d2 = a2 ? l4(a2.getPropertyValue("max-height")) : 0, c5 = a2 ? l4(a2.getPropertyValue("height")) : 0, { height: p4, width: h3 } = i3.getBoundingClientRect(), u3 = h3 + t2, g3 = Math.max(p4, d2, c5) + t2, v3 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s2, side: "right", view: r2 }), w3 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s2, side: "left", view: r2 }), m2 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s2, side: "top", view: r2 }), b3 = this._isOutsideView({ popupHeight: g3, popupWidth: u3, screenLocation: s2, side: "bottom", view: r2 });
    return w3 ? m2 ? "bottom-right" : "top-right" : v3 ? m2 ? "bottom-left" : "top-left" : m2 ? b3 ? "top-center" : "bottom-center" : "top-center";
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
    return v$4(this.container) && t2.reverse(), e3?.replace(/leading/gi, t2[0]).replaceAll(/trailing/gi, t2[1]);
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
    const t2 = this.viewModel?.view, i3 = v$4(this.container) ? "top-left" : "top-right";
    if (!t2)
      return i3;
    const o3 = t2.padding || { left: 0, right: 0, top: 0, bottom: 0 }, n4 = t2.width - o3.left - o3.right, { breakpoints: s2 } = t2;
    return s2 && n4 <= s2.xsmall ? "bottom-center" : i3;
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
    const { screenLocation: t2 } = this.viewModel, { width: i3 } = this._containerNode.getBoundingClientRect(), o3 = this._calculatePositionStyle(t2, i3);
    o3 && Object.assign(this._containerNode.style, o3);
  }
  _calculateFullWidth(e3) {
    const { currentAlignment: t2, _pointerOffsetInPx: i3 } = this;
    return "top-left" === t2 || "bottom-left" === t2 || "top-right" === t2 || "bottom-right" === t2 ? e3 + i3 : e3;
  }
  _calculateAlignmentPosition(e3, t2, i3, o3) {
    const { currentAlignment: n4, _pointerOffsetInPx: s2 } = this;
    if (!i3)
      return;
    const { padding: r2 } = i3, l4 = o3 / 2, a2 = i3.height - t2, d2 = i3.width - e3;
    return "bottom-center" === n4 ? { top: t2 + s2 - r2.top, left: e3 - l4 - r2.left } : "top-left" === n4 ? { bottom: a2 + s2 - r2.bottom, right: d2 + s2 - r2.right } : "bottom-left" === n4 ? { top: t2 + s2 - r2.top, right: d2 + s2 - r2.right } : "top-right" === n4 ? { bottom: a2 + s2 - r2.bottom, left: e3 + s2 - r2.left } : "bottom-right" === n4 ? { top: t2 + s2 - r2.top, left: e3 + s2 - r2.left } : "top-center" === n4 ? { bottom: a2 + s2 - r2.bottom, left: e3 - l4 - r2.left } : void 0;
  }
  _calculatePositionStyle(e3, t2) {
    const { dockEnabled: i3, view: o3 } = this;
    if (!o3)
      return;
    if (i3)
      return { left: "", top: "", right: "", bottom: "" };
    if (null == e3 || !t2)
      return;
    const n4 = this._calculateFullWidth(t2), s2 = this._calculateAlignmentPosition(e3.x, e3.y, o3, n4);
    return s2 ? { top: void 0 !== s2.top ? `${s2.top}px` : "auto", left: void 0 !== s2.left ? `${s2.left}px` : "auto", bottom: void 0 !== s2.bottom ? `${s2.bottom}px` : "auto", right: void 0 !== s2.right ? `${s2.right}px` : "auto" } : void 0;
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
  _dockingThresholdCrossed(e3, t2, i3) {
    const [o3, n4] = e3, [s2, r2] = t2, { width: l4 = 0, height: a2 = 0 } = i3 ?? {};
    return o3 <= l4 && s2 > l4 || o3 > l4 && s2 <= l4 || n4 <= a2 && r2 > a2 || n4 > a2 && r2 <= a2;
  }
  _updateDockEnabledForViewSize(e3, t2) {
    if (!e3 || !t2)
      return;
    const i3 = this.viewModel?.view?.padding || { left: 0, right: 0, top: 0, bottom: 0 }, o3 = i3.left + i3.right, n4 = i3.top + i3.bottom, s2 = [], r2 = [];
    s2[0] = e3[0] - o3, s2[1] = e3[1] - n4, r2[0] = t2[0] - o3, r2[1] = t2[1] - n4;
    const { dockOptions: l4 } = this, a2 = l4.breakpoint;
    this._dockingThresholdCrossed(s2, r2, a2) && this._setDockEnabledForViewSize(l4), this._setCurrentDockPosition();
  }
  _toggleScreenLocationEnabled() {
    const { dockEnabled: e3, viewModel: t2 } = this;
    if (!t2)
      return;
    const i3 = t2.active && !e3;
    t2.screenLocationEnabled = i3;
  }
  _shouldDockAtCurrentViewSize(e3) {
    const t2 = e3.breakpoint, i3 = this.viewModel?.view?.ui;
    if (!i3)
      return false;
    const { width: o3, height: n4 } = i3;
    if (isNaN(o3) || isNaN(n4))
      return false;
    if (!t2)
      return false;
    const s2 = t2.hasOwnProperty("width") && o3 <= (t2.width ?? 0), r2 = t2.hasOwnProperty("height") && n4 <= (t2.height ?? 0);
    return s2 || r2;
  }
  _setDockEnabledForViewSize(e3) {
    e3.breakpoint && (this.dockEnabled = this._shouldDockAtCurrentViewSize(e3));
  }
};
e$6([y$6({ readOnly: true })], _.prototype, "_featureNavigationTop", null), e$6([y$6()], _.prototype, "actions", null), e$6([y$6()], _.prototype, "alignment", void 0), e$6([y$6()], _.prototype, "autoCloseEnabled", null), e$6([y$6()], _.prototype, "autoOpenEnabled", null), e$6([y$6()], _.prototype, "defaultPopupTemplateEnabled", null), e$6([y$6()], _.prototype, "content", null), e$6([y$6()], _.prototype, "collapsed", void 0), e$6([y$6()], _.prototype, "collapseEnabled", void 0), e$6([y$6({ readOnly: true })], _.prototype, "currentAlignment", null), e$6([y$6({ readOnly: true })], _.prototype, "currentDockPosition", null), e$6([y$6()], _.prototype, "dockOptions", null), e$6([y$6()], _.prototype, "dockEnabled", void 0), e$6([y$6({ readOnly: true })], _.prototype, "featureCount", null), e$6([y$6()], _.prototype, "featureMenuOpen", null), e$6([y$6()], _.prototype, "features", null), e$6([y$6()], _.prototype, "goToOverride", null), e$6([y$6()], _.prototype, "headingLevel", void 0), e$6([y$6()], _.prototype, "highlightEnabled", null), e$6([y$6()], _.prototype, "location", null), e$6([y$6()], _.prototype, "label", null), e$6([y$6()], _.prototype, "maxInlineActions", void 0), e$6([y$6(), e$7("esri/widgets/Popup/t9n/Popup")], _.prototype, "messages", void 0), e$6([y$6()], _.prototype, "promises", null), e$6([y$6({ readOnly: true })], _.prototype, "selectedFeature", null), e$6([y$6()], _.prototype, "selectedFeatureIndex", null), e$6([y$6({ readOnly: true })], _.prototype, "selectedFeatureWidget", null), e$6([y$6()], _.prototype, "spinnerEnabled", void 0), e$6([y$6()], _.prototype, "title", null), e$6([y$6()], _.prototype, "updateLocationEnabled", null), e$6([y$6()], _.prototype, "view", null), e$6([y$6({ type: t$1 }), e$c(["triggerAction", "trigger-action"])], _.prototype, "viewModel", void 0), e$6([y$6()], _.prototype, "visible", null), e$6([y$6({ type: p3, nonNullable: true })], _.prototype, "visibleElements", void 0), _ = e$6([c$b("esri.widgets.Popup")], _);
const k = _;
export {
  k as default
};
