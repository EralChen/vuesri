import { aV as e, gl as m, aX as y, a_ as c$1 } from "./chunk-ejFG4zJ0.js";
import { r as r$1 } from "./chunk-IhjTEMBX.js";
let r = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic", this.distance = m;
  }
  clear() {
    this.distance = m;
  }
};
e([y()], r.prototype, "type", void 0), e([y()], r.prototype, "distance", void 0), r = e([c$1("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")], r);
let a = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-z", this.distance = m;
  }
  clear() {
    this.distance = m;
  }
};
e([y()], a.prototype, "type", void 0), e([y()], a.prototype, "distance", void 0), a = e([c$1("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")], a);
let l = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-graphic-xy", this.distance = m;
  }
};
e([y()], l.prototype, "type", void 0), e([y()], l.prototype, "distance", void 0), l = e([c$1("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")], l);
let p = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex", this.distance = m, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = m, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
e([y()], p.prototype, "type", void 0), e([y()], p.prototype, "distance", void 0), e([y()], p.prototype, "elevation", void 0), e([y()], p.prototype, "area", void 0), e([y()], p.prototype, "totalLength", void 0), p = e([c$1("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")], p);
let n = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-z", this.distance = m, this.elevation = null;
  }
  clear() {
    this.distance = m, this.elevation = null;
  }
};
e([y()], n.prototype, "type", void 0), e([y()], n.prototype, "distance", void 0), e([y()], n.prototype, "elevation", void 0), n = e([c$1("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")], n);
let c = class extends r$1 {
  constructor(t) {
    super(t), this.type = "translate-vertex-xy", this.distance = m, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = m, this.elevation = null, this.area = null, this.totalLength = null;
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
