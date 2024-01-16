import { bu as u$1 } from "./chunk-KFNcxJaF.js";
const s = { main: new u$1([255, 127, 0]), selected: new u$1([255, 255, 255]), outline: new u$1([0, 0, 0, 0.5]), selectedOutline: new u$1([255, 255, 255]), hoverOutline: new u$1([255, 255, 255]), secondary: new u$1([255, 255, 255]), secondaryOutline: new u$1([100, 100, 100]), transparent: new u$1([0, 0, 0, 0]) };
function n(e, o) {
  Object.assign(e, o);
}
class i {
  constructor(e) {
    this.size = 8, this.hoverSize = 10, this.color = s.main, this.hoverColor = s.main, this.outlineColor = s.outline, this.hoverOutlineColor = s.hoverOutline, n(this, e);
  }
}
class l {
  constructor(e) {
    this.color = s.secondary, this.hoverColor = s.main, n(this, e);
  }
}
class c {
  constructor(e) {
    this.color = s.transparent, this.hoverColor = s.transparent, this.outlineColor = s.main, this.hoverOutlineColor = s.main, this.stagedColor = s.transparent, this.stagedOutlineColor = s.secondary, n(this, e);
  }
}
class h {
  constructor(e) {
    this.vertex = new i(), this.midpoint = new i({ color: s.secondary, outlineColor: s.secondaryOutline, size: 6 }), this.selected = new i({ color: s.selected, hoverColor: s.selected, hoverOutlineColor: s.hoverOutline }), n(this, e);
  }
}
class a {
  constructor(e) {
    this.center = new i({ color: s.secondaryOutline }), this.fill = new c(), this.line = new l(), this.vertex = new i({ color: s.selected, outlineColor: s.main, hoverColor: s.selected, hoverOutlineColor: s.secondaryOutline }), n(this, e);
  }
}
class u {
  constructor(e) {
    this.reshapeGraphics = new h(), this.transformGraphics = new a(), n(this, e);
  }
}
const d = new u();
export {
  d
};
