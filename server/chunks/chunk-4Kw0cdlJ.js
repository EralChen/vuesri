import { aV as e, aX as y$1, a_ as c, bZ as S$2, nE as t$1, nF as e$1, b$ as u, nG as u$1, iy as o, nH as l, nI as x, nJ as v$1, nK as p, nL as q, ce as d$1, aG as u$2, aW as n$1, nM as s, nN as x$2, ls as i$1, nO as A, aF as e$2, fE as z$1, nP as c$1, nQ as g$1, m4 as t$2, fB as n$2, aI as r$1, g4 as a, dc as H$1, nR as x$3, nS as j$2 } from "./chunk-ejFG4zJ0.js";
import { t, x as x$1 } from "./chunk-D8vtbm22.js";
let r = class extends S$2 {
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
    const { height: t$12, left: e2, top: s2, width: i, x1: r2, x2: n2, y1: a2, y2: p2 } = this._calculateCoordinates(h), l2 = `stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;
    return t("div", { classes: { "esri-line-overlay-item": true }, styles: { left: e2 + "px", top: s2 + "px", width: i + "px", height: t$12 + "px", visibility: this.visible ? "visible" : "hidden" } }, [t("svg", { width: i, height: t$12 }, [t("line", { x1: r2, y1: a2, x2: n2, y2: p2, style: l2 })])]);
  }
  renderCanvas(t2) {
    if (!this.visible)
      return;
    t2.strokeStyle = this._strokeStyle, t2.lineWidth = this.width, t2.lineCap = this._lineCap;
    const e2 = this._calculateCoordinates(h);
    t2.beginPath(), t2.moveTo(e2.left + e2.x1, e2.top + e2.y1), t2.lineTo(e2.left + e2.x2, e2.top + e2.y2), t2.stroke();
  }
  _calculateCoordinates(t2) {
    const e2 = Math.min(this.startX, this.endX), s2 = Math.max(this.startX, this.endX), i = Math.min(this.startY, this.endY), o2 = Math.max(this.startY, this.endY), r2 = this.width;
    return t2.left = e2 - r2, t2.top = i - r2, t2.width = s2 - e2 + 2 * r2, t2.height = Math.max(20, o2 - i + 2 * r2), t2.x1 = this.startX - e2 + r2, t2.y1 = this.startY - i + r2, t2.x2 = this.endX - e2 + r2, t2.y2 = this.endY - i + r2, t2;
  }
};
e([y$1()], r.prototype, "startX", void 0), e([y$1()], r.prototype, "startY", void 0), e([y$1()], r.prototype, "endX", void 0), e([y$1()], r.prototype, "endY", void 0), e([y$1()], r.prototype, "startPosition", null), e([y$1()], r.prototype, "endPosition", null), e([y$1()], r.prototype, "width", void 0), e([y$1()], r.prototype, "color", void 0), e([y$1()], r.prototype, "visible", void 0), e([y$1()], r.prototype, "isDecoration", void 0), e([y$1({ readOnly: true })], r.prototype, "_strokeStyle", null), r = e([c("esri.views.overlay.LineOverlayItem")], r);
const h = { left: 0, top: 0, width: 0, height: 0, x1: 0, y1: 0, x2: 0, y2: 0 }, n = r;
class f extends t$1 {
  constructor(o2) {
    super(o2), this._handles = new e$1(), this._textItem = null, this._calloutItem = null, this._showCallout = true, this._showText = true, this._geometry = null, this._text = "-", this._fontSize = 14, this._backgroundColor = new u([0, 0, 0, 0.6]), this._calloutColor = new u([0, 0, 0, 0.5]), this._textColor = new u([255, 255, 255]), this._distance = 25, this._anchor = "right", this.updatePositionOnCameraMove = true, this.applyProperties(o2);
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
    const { geometry: t2, view: e2, visible: o$1 } = this;
    if (null != t2 && e2._stage)
      switch (t2.type) {
        case "point":
          if (!this._computeLabelPositionFromPoint(t2.point, L))
            break;
          if (t2.callout) {
            const e3 = this._camera, o$12 = t2.callout.distance;
            u$1(j$1, j$1, [0, t2.callout.offset]), e3.renderToScreen(j$1, L), o(P, 0, 1), l(P, P, o$12), u$1(P, P, j$1), e3.renderToScreen(P, D), this._showCallout = this._updatePosition(L, D);
          } else
            this._textItem.position = [L[0], L[1]], this._textItem.anchor = "center";
          this._showText = true;
          break;
        case "corner":
          if (!this._computeLabelPositionFromCorner(t2, this._distance, L, D))
            break;
          this._showCallout = this._updatePosition(L, D), this._showText = true;
          break;
        case "segment": {
          if (!this._computeLabelPositionFromSegment(t2, this._distance, this._anchor, L, D))
            break;
          this._showText = true;
          const e3 = this._updatePosition(L, D);
          this._showCallout = false !== t2.callout && e3, this._showCallout || (this._textItem.anchor = "center");
        }
      }
    this.updateVisibility(o$1);
  }
  _computeLabelPositionFromPoint(t2, e2) {
    const o2 = this._camera;
    return o2.projectToRenderScreen(t2, T), !(T[2] < 0 || T[2] > 1) && (o2.renderToScreen(T, e2), true);
  }
  _computeLabelPositionFromCorner(t2, e2, o2, i) {
    if (!t2)
      return false;
    const s2 = this._camera;
    return g(t2.left, 1, s2, S$1), x(S$1, S$1), g(t2.right, 0, s2, y), u$1(P, S$1, y), x(P, P), v$1(P, P), s2.projectToRenderScreen(t2.left.endRenderSpace, T), !(T[2] < 0 || T[2] > 1) && (s2.renderToScreen(T, o2), l(P, P, e2), u$1(P, P, T), s2.renderToScreen(P, i), true);
  }
  _computeLabelPositionFromSegment(t2, e2, o$1, i, s2) {
    if (!t2)
      return false;
    const r2 = t2.segment, c2 = this._camera;
    p(r2.startRenderSpace, r2.endRenderSpace, c2, S$1), o(P, -S$1[1], S$1[0]);
    let m2 = false;
    switch (o$1) {
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
    if (m2 && x(P, P), 0 === q(P))
      switch (o$1) {
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
    return r2.eval(R$1[t2.sampleLocation], k), c2.projectToRenderScreen(k, T), !(T[2] < 0 || T[2] > 1) && (c2.renderToScreen(T, i), l(P, P, e2), u$1(P, P, T), c2.renderToScreen(P, s2), true);
  }
  _updatePosition(t2, e2) {
    if (e2) {
      const o2 = e2[0] - t2[0], i = e2[1] - t2[1];
      return this._textItem.position = [e2[0], e2[1]], this._textItem.anchor = Math.abs(o2) > Math.abs(i) ? o2 > 0 ? "left" : "right" : i > 0 ? "top" : "bottom", this._calloutItem.startPosition = [t2[0], t2[1]], this._calloutItem.endPosition = [e2[0], e2[1]], true;
    }
    return this._textItem.position = [t2[0], t2[1]], this._textItem.anchor = "center", false;
  }
  createResources() {
    this._textItem = new x$1({ visible: true, text: this._text, fontSize: this._fontSize, backgroundColor: this._backgroundColor, textColor: this._textColor, isDecoration: this._isDecoration }), this._calloutItem = new n({ color: this._calloutColor.toRgba(), visible: true, width: 2, isDecoration: this._isDecoration }), this.updateLabelPosition(), this.view.overlay?.items.addMany([this._textItem, this._calloutItem]), this.updatePositionOnCameraMove && this._handles.add(d$1(() => this.view.state.camera, () => this.updateLabelPosition()));
  }
  destroyResources() {
    this.view.overlay && !this.view.overlay.destroyed && this.view.overlay.items.removeMany([this._textItem, this._calloutItem]), this._handles.removeAll();
  }
  updateVisibility(t2) {
    this._textItem.visible = this._showText && t2, this._calloutItem.visible = this._showCallout && t2;
  }
}
function g(t2, e2, o2, i) {
  return t2.eval(e2, C, w), u$2(I, C, w), p(C, I, o2, i);
}
function v(t2) {
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
const C = n$1(), I = n$1(), w = n$1(), S$1 = s(), y = s(), P = s(), k = n$1(), T = x$2(), j$1 = s(), L = i$1(), D = i$1(), R$1 = { start: 0, center: 0.5, end: 1 };
class m {
  constructor(t2 = n$1(), e2 = n$1()) {
    this.startRenderSpace = t2, this.endRenderSpace = e2, this.type = "euclidean";
  }
  eval(r2, i, o2) {
    return A(i, this.startRenderSpace, this.endRenderSpace, r2), o2 && (e$2(o2, this.endRenderSpace, this.startRenderSpace), z$1(o2, o2)), i;
  }
  createRenderGeometry(t2, s2) {
    const r2 = [], i = [], o2 = (s3, o3) => {
      const n3 = j;
      e$2(n3, s3, t2), r2.push([n3[0], n3[1], n3[2]]), i.push([o3[0], o3[1], o3[2]]);
    }, n2 = s2.worldUpAtPosition(this.eval(0.5, R), c$1.get());
    return o2(this.startRenderSpace, n2), o2(this.endRenderSpace, n2), { points: r2, normals: i };
  }
  static fromPositionAndVector(t2, e2, s2 = 1) {
    return g$1(R, e2, s2), u$2(R, t2, R), new m(t$2(t2), t$2(R));
  }
}
class _ {
  _projectIn(t2, e2) {
    this._project ? n$2(t2, this.renderSpatialReference, e2, this._pcpf) : r$1(e2, t2);
  }
  constructor(t2, e2, s2) {
    this.startRenderSpace = t2, this.endRenderSpace = e2, this.renderSpatialReference = s2, this.type = "geodesic", this._start = n$1(), this._end = n$1(), this._pcpf = a(s2), this._project = H$1(s2, this._pcpf), this._projectIn(t2, this._start), this._projectIn(e2, this._end);
  }
  eval(r2, o2, n2) {
    if (this._project)
      if (n2) {
        const t2 = j;
        x$3(this._start, this._end, r2, o2, t2), u$2(S, o2, t2), n$2(o2, this._pcpf, o2, this.renderSpatialReference), n$2(S, this._pcpf, S, this.renderSpatialReference), e$2(n2, S, o2), z$1(n2, n2);
      } else
        j$2(this._start, this._end, r2, o2), n$2(o2, this._pcpf, o2, this.renderSpatialReference);
    else
      A(o2, this._start, this._end, r2), n2 && (e$2(n2, this._end, this._start), z$1(n2, n2));
    return o2;
  }
  createRenderGeometry(t2, s2) {
    const r2 = [], i = [], o2 = (s3, o3) => {
      const n3 = S;
      e$2(n3, s3, t2), r2.push([n3[0], n3[1], n3[2]]), i.push([o3[0], o3[1], o3[2]]);
    }, n2 = 128 + 1 & -2;
    for (let e2 = 0; e2 < n2; ++e2) {
      const t3 = e2 / (n2 - 1), r3 = R, i2 = j;
      this.eval(t3, r3), s2.worldUpAtPosition(r3, i2), o2(r3, i2);
    }
    return { points: r2, normals: i };
  }
}
const R = n$1(), j = n$1(), S = n$1();
export {
  _,
  f,
  m,
  v
};
