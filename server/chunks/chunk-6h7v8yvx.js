import { bo as e, bp as y, br as c$1 } from "./chunk-KFNcxJaF.js";
import { h as h$1 } from "./chunk-KXkDk_IW.js";
import { s as s$1 } from "./chunk-GM3bx0Bh.js";
let r = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic", this.distance = h$1;
  }
  clear() {
    this.distance = h$1;
  }
};
e([y()], r.prototype, "type", void 0), e([y()], r.prototype, "distance", void 0), r = e([c$1("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")], r);
let a = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-z", this.distance = h$1;
  }
  clear() {
    this.distance = h$1;
  }
};
e([y()], a.prototype, "type", void 0), e([y()], a.prototype, "distance", void 0), a = e([c$1("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")], a);
let l = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-xy", this.distance = h$1;
  }
};
e([y()], l.prototype, "type", void 0), e([y()], l.prototype, "distance", void 0), l = e([c$1("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")], l);
let p = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex", this.distance = h$1, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = h$1, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
e([y()], p.prototype, "type", void 0), e([y()], p.prototype, "distance", void 0), e([y()], p.prototype, "elevation", void 0), e([y()], p.prototype, "area", void 0), e([y()], p.prototype, "totalLength", void 0), p = e([c$1("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")], p);
let n = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-z", this.distance = h$1, this.elevation = null;
  }
  clear() {
    this.distance = h$1, this.elevation = null;
  }
};
e([y()], n.prototype, "type", void 0), e([y()], n.prototype, "distance", void 0), e([y()], n.prototype, "elevation", void 0), n = e([c$1("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")], n);
let c = class extends s$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-xy", this.distance = h$1, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = h$1, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
e([y()], c.prototype, "type", void 0), e([y()], c.prototype, "distance", void 0), e([y()], c.prototype, "elevation", void 0), e([y()], c.prototype, "area", void 0), e([y()], c.prototype, "totalLength", void 0), c = e([c$1("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")], c);
export {
  a,
  c,
  l,
  n,
  p,
  r
};
