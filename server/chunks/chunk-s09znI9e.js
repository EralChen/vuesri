import { hN as n, hO as mt, hP as n$1 } from "./chunk-ejFG4zJ0.js";
class r extends n {
  constructor(n2) {
    super({ ...n2, constraint: new mt(n2.targetPoint) });
  }
  get hints() {
    return [new n$1(this.targetPoint, this.isDraped, this.domain)];
  }
}
export {
  r
};
