import { bo as e, bp as y$1, br as c, bs as g$1, mz as e$1, bu as u$1, mA as s, hK as r$1, mB as l, mC as g$2, mD as v$1, mE as p, mF as q, bJ as d$1, l6 as u$2, fp as o, eQ as n$1, mG as s$1, mH as x$1, kG as i$1, mI as A, mJ as e$2, eO as z$1, mK as c$1, mL as g$3, le as t$2, eL as t$3, hw as r$2, fd as c$2, cP as D$1, mM as k$1, mN as g$4 } from "./chunk-KFNcxJaF.js";
import { t as t$1 } from "./chunk-XZLuqbq5.js";
import { t, x } from "./chunk-vcGzLtIh.js";
let r = class extends g$1 {
  get startPosition() {
    return [this.startX, this.startY];
  }
  set startPosition(t2) {
    this._set("startX", t2[0]), this._set("startY", t2[1]);
  }
  get endPosition() {
    return [this.endX, this.endY];
  }
  set endPosition(t2) {
    this._set("endX", t2[0]), this._set("endY", t2[1]);
  }
  constructor(t2) {
    super(t2), this.startX = 0, this.startY = 0, this.endX = 0, this.endY = 0, this.width = 1, this.color = [0, 0, 0, 0.5], this.visible = true, this.isDecoration = true;
  }
  get _strokeStyle() {
    const t2 = this.color;
    return `rgba(${t2[0]}, ${t2[1]}, ${t2[2]}, ${t2[3]})`;
  }
  get _lineCap() {
    return "round";
  }
  render() {
    const { height: t$12, left: s2, top: e2, width: i, x1: r2, x2: n2, y1: a, y2: p2 } = this._calculateCoordinates(h), l2 = `stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;
    return t("div", { classes: { "esri-line-overlay-item": true }, styles: { left: s2 + "px", top: e2 + "px", width: i + "px", height: t$12 + "px", visibility: this.visible ? "visible" : "hidden" } }, [t("svg", { width: i, height: t$12 }, [t("line", { x1: r2, y1: a, x2: n2, y2: p2, style: l2 })])]);
  }
  renderCanvas(t2) {
    if (!this.visible)
      return;
    t2.strokeStyle = this._strokeStyle, t2.lineWidth = this.width, t2.lineCap = this._lineCap;
    const s2 = this._calculateCoordinates(h);
    t2.beginPath(), t2.moveTo(s2.left + s2.x1, s2.top + s2.y1), t2.lineTo(s2.left + s2.x2, s2.top + s2.y2), t2.stroke();
  }
  _calculateCoordinates(t2) {
    const s2 = Math.min(this.startX, this.endX), e2 = Math.max(this.startX, this.endX), i = Math.min(this.startY, this.endY), o2 = Math.max(this.startY, this.endY), r2 = this.width;
    return t2.left = s2 - r2, t2.top = i - r2, t2.width = e2 - s2 + 2 * r2, t2.height = Math.max(20, o2 - i + 2 * r2), t2.x1 = this.startX - s2 + r2, t2.y1 = this.startY - i + r2, t2.x2 = this.endX - s2 + r2, t2.y2 = this.endY - i + r2, t2;
  }
};
e([y$1()], r.prototype, "startX", void 0), e([y$1()], r.prototype, "startY", void 0), e([y$1()], r.prototype, "endX", void 0), e([y$1()], r.prototype, "endY", void 0), e([y$1()], r.prototype, "startPosition", null), e([y$1()], r.prototype, "endPosition", null), e([y$1()], r.prototype, "width", void 0), e([y$1()], r.prototype, "color", void 0), e([y$1()], r.prototype, "visible", void 0), e([y$1()], r.prototype, "isDecoration", void 0), e([y$1({ readOnly: true })], r.prototype, "_strokeStyle", null), r = e([c("esri.views.overlay.LineOverlayItem")], r);
const h = { left: 0, top: 0, width: 0, height: 0, x1: 0, y1: 0, x2: 0, y2: 0 }, n = r;
class g extends t$1 {
  constructor(o2) {
    super(o2), this._handles = new e$1(), this._textItem = null, this._calloutItem = null, this._showCallout = true, this._showText = true, this._geometry = null, this._text = "-", this._fontSize = 14, this._backgroundColor = new u$1([0, 0, 0, 0.6]), this._calloutColor = new u$1([0, 0, 0, 0.5]), this._textColor = new u$1([255, 255, 255]), this._distance = 25, this._anchor = "right", this.updatePositionOnCameraMove = true, this.applyProperties(o2);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(t2) {
    this._geometry = t2, this.updateLabelPosition();
  }
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(t2) {
    this._isDecoration = t2, this._textItem && (this._textItem.isDecoration = t2), this._calloutItem && (this._calloutItem.isDecoration = t2);
  }
  get textItem() {
    return this._textItem;
  }
  get text() {
    return this._text;
  }
  set text(t2) {
    this._text = t2, this.attached && (this._textItem.text = this._text);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t2) {
    this._fontSize = t2, this.attached && (this._textItem.fontSize = this._fontSize);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(t2) {
    this._backgroundColor = t2, this.attached && (this._textItem.backgroundColor = this._backgroundColor);
  }
  get calloutColor() {
    return this._calloutColor;
  }
  set calloutColor(t2) {
    this._calloutColor = t2, this.attached && (this._calloutItem.color = this._calloutColor.toRgba());
  }
  get textColor() {
    return this._textColor;
  }
  set textColor(t2) {
    this._textColor = t2, this.attached && (this._textItem.textColor = this._textColor);
  }
  get distance() {
    return this._distance;
  }
  set distance(t2) {
    this._distance !== t2 && (this._distance = t2, this.updateLabelPosition());
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(t2) {
    this._anchor !== t2 && (this._anchor = t2, this.updateLabelPosition());
  }
  get _camera() {
    return this.view.state.cssCamera;
  }
  overlaps(t2) {
    return !!this.attached && (this.textItem.visible && t2.textItem.visible && !!this.view.overlay?.overlaps(this._textItem, t2.textItem));
  }
  updateLabelPosition() {
    if (!this.attached)
      return;
    this._showText = false, this._showCallout = false;
    const { geometry: t2, view: e2, visible: o2 } = this;
    if (null != t2 && e2._stage)
      switch (t2.type) {
        case "point":
          if (!this._computeLabelPositionFromPoint(t2.point, L))
            break;
          if (t2.callout) {
            const e3 = this._camera, o3 = t2.callout.distance;
            s(j$1, j$1, [0, t2.callout.offset]), e3.renderToScreen(j$1, L), r$1(P, 0, 1), l(P, P, o3), s(P, P, j$1), e3.renderToScreen(P, R$1), this._showCallout = this._updatePosition(L, R$1);
          } else
            this._textItem.position = [L[0], L[1]], this._textItem.anchor = "center";
          this._showText = true;
          break;
        case "corner":
          if (!this._computeLabelPositionFromCorner(t2, this._distance, L, R$1))
            break;
          this._showCallout = this._updatePosition(L, R$1), this._showText = true;
          break;
        case "segment": {
          if (!this._computeLabelPositionFromSegment(t2, this._distance, this._anchor, L, R$1))
            break;
          this._showText = true;
          const e3 = this._updatePosition(L, R$1);
          this._showCallout = false !== t2.callout && e3, this._showCallout || (this._textItem.anchor = "center");
        }
      }
    this.updateVisibility(o2);
  }
  _computeLabelPositionFromPoint(t2, e2) {
    const o2 = this._camera;
    return o2.projectToRenderScreen(t2, j$1), !(j$1[2] < 0 || j$1[2] > 1) && (o2.renderToScreen(j$1, e2), true);
  }
  _computeLabelPositionFromCorner(t2, e2, o2, i) {
    if (!t2)
      return false;
    const s$12 = this._camera;
    return v(t2.left, 1, s$12, k), g$2(k, k), v(t2.right, 0, s$12, y), s(P, k, y), g$2(P, P), v$1(P, P), s$12.projectToRenderScreen(t2.left.endRenderSpace, j$1), !(j$1[2] < 0 || j$1[2] > 1) && (s$12.renderToScreen(j$1, o2), l(P, P, e2), s(P, P, j$1), s$12.renderToScreen(P, i), true);
  }
  _computeLabelPositionFromSegment(t2, e2, o2, i, s$12) {
    if (!t2)
      return false;
    const r2 = t2.segment, l$1 = this._camera;
    p(r2.startRenderSpace, r2.endRenderSpace, l$1, k), r$1(P, -k[1], k[0]);
    let m2 = false;
    switch (o2) {
      case "top":
        m2 = P[1] < 0;
        break;
      case "bottom":
        m2 = P[1] > 0;
        break;
      case "left":
        m2 = P[0] > 0;
        break;
      case "right":
        m2 = P[0] < 0;
    }
    if (m2 && g$2(P, P), 0 === q(P))
      switch (o2) {
        case "top":
          P[1] = 1;
          break;
        case "bottom":
          P[1] = -1;
          break;
        case "left":
          P[0] = -1;
          break;
        case "right":
          P[0] = 1;
      }
    return r2.eval(O[t2.sampleLocation], T), l$1.projectToRenderScreen(T, j$1), !(j$1[2] < 0 || j$1[2] > 1) && (l$1.renderToScreen(j$1, i), l(P, P, e2), s(P, P, j$1), l$1.renderToScreen(P, s$12), true);
  }
  _updatePosition(t2, e2) {
    if (e2) {
      const o2 = e2[0] - t2[0], i = e2[1] - t2[1];
      return this._textItem.position = [e2[0], e2[1]], this._textItem.anchor = Math.abs(o2) > Math.abs(i) ? o2 > 0 ? "left" : "right" : i > 0 ? "top" : "bottom", this._calloutItem.startPosition = [t2[0], t2[1]], this._calloutItem.endPosition = [e2[0], e2[1]], true;
    }
    return this._textItem.position = [t2[0], t2[1]], this._textItem.anchor = "center", false;
  }
  createResources() {
    this._textItem = new x({ visible: true, text: this._text, fontSize: this._fontSize, backgroundColor: this._backgroundColor, textColor: this._textColor, isDecoration: this._isDecoration }), this._calloutItem = new n({ color: this._calloutColor.toRgba(), visible: true, width: 2, isDecoration: this._isDecoration }), this.updateLabelPosition(), this.view.overlay?.items.addMany([this._textItem, this._calloutItem]), this.updatePositionOnCameraMove && this._handles.add(d$1(() => this.view.state.camera, () => this.updateLabelPosition()));
  }
  destroyResources() {
    this.view.overlay && !this.view.overlay.destroyed && this.view.overlay.items.removeMany([this._textItem, this._calloutItem]), this._handles.removeAll();
  }
  updateVisibility(t2) {
    this._textItem.visible = this._showText && t2, this._calloutItem.visible = this._showCallout && t2;
  }
}
function v(t2, e2, o$1, i) {
  t2.eval(e2, I, S), u$2(w, I, S), o$1.projectToRenderScreen(I, D), o$1.projectToRenderScreen(w, F), o(i, M, z), v$1(i, i);
}
function C(t2) {
  switch (t2) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "bottom":
      return "top";
    case "left":
      return "right";
  }
}
const I = n$1(), w = n$1(), S = n$1(), k = s$1(), y = s$1(), P = s$1(), T = n$1(), j$1 = x$1(), L = i$1(), R$1 = i$1(), D = x$1(), z = D, F = x$1(), M = F, O = { start: 0, center: 0.5, end: 1 };
class m {
  constructor(t2 = n$1(), e2 = n$1()) {
    this.startRenderSpace = t2, this.endRenderSpace = e2, this.type = "euclidean";
  }
  eval(r2, i, n2) {
    return A(i, this.startRenderSpace, this.endRenderSpace, r2), n2 && (e$2(n2, this.endRenderSpace, this.startRenderSpace), z$1(n2, n2)), i;
  }
  createRenderGeometry(t2, s2) {
    const r2 = [], i = [], n2 = (s3, n3) => {
      const o3 = j;
      e$2(o3, s3, t2), r2.push([o3[0], o3[1], o3[2]]), i.push([n3[0], n3[1], n3[2]]);
    }, o2 = s2.worldUpAtPosition(this.eval(0.5, R), c$1.get());
    return n2(this.startRenderSpace, o2), n2(this.endRenderSpace, o2), { points: r2, normals: i };
  }
  static fromPositionAndVector(t2, e2, s2 = 1) {
    return g$3(R, e2, s2), u$2(R, t2, R), new m(t$2(t2), t$2(R));
  }
}
class _ {
  _projectIn(t2, e2) {
    this._project ? t$3(t2, this.renderSpatialReference, e2, this._pcpf) : r$2(e2, t2);
  }
  constructor(t2, e2, s2) {
    this.startRenderSpace = t2, this.endRenderSpace = e2, this.renderSpatialReference = s2, this.type = "geodesic", this._start = n$1(), this._end = n$1(), this._pcpf = c$2(s2), this._project = D$1(s2, this._pcpf), this._projectIn(t2, this._start), this._projectIn(e2, this._end);
  }
  eval(r2, n2, o2) {
    if (this._project)
      if (o2) {
        const t2 = j;
        k$1(this._start, this._end, r2, n2, t2), u$2(u, n2, t2), t$3(n2, this._pcpf, n2, this.renderSpatialReference), t$3(u, this._pcpf, u, this.renderSpatialReference), e$2(o2, u, n2), z$1(o2, o2);
      } else
        g$4(this._start, this._end, r2, n2), t$3(n2, this._pcpf, n2, this.renderSpatialReference);
    else
      A(n2, this._start, this._end, r2), o2 && (e$2(o2, this._end, this._start), z$1(o2, o2));
    return n2;
  }
  createRenderGeometry(t2, s2) {
    const r2 = [], i = [], n2 = (s3, n3) => {
      const o3 = u;
      e$2(o3, s3, t2), r2.push([o3[0], o3[1], o3[2]]), i.push([n3[0], n3[1], n3[2]]);
    }, o2 = 128 + 1 & -2;
    for (let e2 = 0; e2 < o2; ++e2) {
      const t3 = e2 / (o2 - 1), r3 = R, i2 = j;
      this.eval(t3, r3), s2.worldUpAtPosition(r3, i2), n2(r3, i2);
    }
    return { points: r2, normals: i };
  }
}
const R = n$1(), j = n$1(), u = n$1();
export {
  C,
  _,
  g,
  m
};
