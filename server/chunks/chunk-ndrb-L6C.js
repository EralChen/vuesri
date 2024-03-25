import { b$ as u } from "./chunk-ejFG4zJ0.js";
const o = { main: new u([255, 127, 0]), selected: new u([255, 255, 255]), outline: new u([0, 0, 0, 0.5]), selectedOutline: new u([255, 255, 255]), hoverOutline: new u([255, 255, 255]), secondary: new u([255, 255, 255]), secondaryOutline: new u([100, 100, 100]), transparent: new u([0, 0, 0, 0]) };
function t(e, o2) {
  Object.assign(e, o2);
}
class s {
  constructor(e) {
    this.size = 8, this.hoverSize = 10, this.color = o.main, this.hoverColor = o.main, this.outlineColor = o.outline, this.hoverOutlineColor = o.hoverOutline, t(this, e);
  }
}
class n {
  constructor(e) {
    this.color = o.secondary, this.hoverColor = o.main, t(this, e);
  }
}
class r {
  constructor(e) {
    this.color = o.transparent, this.hoverColor = o.transparent, this.outlineColor = o.main, this.hoverOutlineColor = o.main, this.stagedColor = o.transparent, this.stagedOutlineColor = o.secondary, t(this, e);
  }
}
class i {
  constructor(e) {
    this.vertex = new s(), this.midpoint = new s({ color: o.secondary, outlineColor: o.secondaryOutline, size: 6 }), this.selected = new s({ color: o.selected, hoverColor: o.selected, hoverOutlineColor: o.hoverOutline }), t(this, e);
  }
}
class l {
  constructor(e) {
    this.center = new s({ color: o.secondaryOutline }), this.fill = new r(), this.line = new n(), this.vertex = new s({ color: o.selected, outlineColor: o.main, hoverColor: o.selected, hoverOutlineColor: o.secondaryOutline }), t(this, e);
  }
}
class c {
  constructor(e) {
    this.reshapeGraphics = new i(), this.transformGraphics = new l(), t(this, e);
  }
}
const h = new c();
export {
  h
};
