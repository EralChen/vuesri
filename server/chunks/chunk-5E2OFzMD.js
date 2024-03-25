import { C, Y as Y$1, M, W as W$1, f, a as ae$1, z as z$1, b as a, r, Q as Q$1, U, H as H$1, G, N, L, E, e, o, s, w, F, O, R, J as J$1, I, p, u, B, h as he$1, d as de$1, c as ce$1, m as me$1, _ as _e, Z as Ze$1, D, g as r$1, i as s$1, n as n$1, j as s$2 } from "./chunk-piwgY2EI.js";
import { registerFunctions as xn } from "./chunk-LhCU3Hdq.js";
import { i6 as n, aB as f$1 } from "./chunk-ejFG4zJ0.js";
import "./chunk-KfB6QvrM.js";
import "luxon";
import "./chunk-MrDe64fM.js";
import "./chunk-hqbnpNKg.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-3KM-oU2l.js";
import "./chunk-mWJZoVFa.js";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function q(e2) {
  return e2 && "function" == typeof e2.then;
}
const T = 100;
async function W(e2, t) {
  const n2 = [];
  for (let r2 = 0; r2 < t.arguments.length; r2++)
    n2.push(await Y(e2, t.arguments[r2]));
  return n2;
}
async function V(e2, t, n2) {
  if (true === t.preparsed)
    return n2(e2, null, t.arguments);
  return n2(e2, t, await W(e2, t));
}
class _ extends r$1 {
  constructor(e2, t) {
    super(), this.definition = null, this.context = null, this.definition = e2, this.context = t;
  }
  createFunction(e2) {
    return (...t) => {
      const n2 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, timeZone: this.context.timeZone ?? null, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e2.depthCounter + 1 }, globalScope: this.context.globalScope };
      if (n2.depthCounter.depth > 64)
        throw new a(e2, r.MaximumCallDepth, null);
      return Pe(this.definition, n2, t, null);
    };
  }
  call(e2, t) {
    return H(e2, t, (n2, a$1, i) => {
      const l = { spatialReference: e2.spatialReference, services: e2.services, console: e2.console, libraryResolver: e2.libraryResolver, exports: e2.exports, lrucache: e2.lrucache, timeZone: e2.timeZone ?? null, interceptor: e2.interceptor, localScope: {}, abortSignal: e2.abortSignal, globalScope: e2.globalScope, depthCounter: { depth: e2.depthCounter.depth + 1 } };
      if (l.depthCounter.depth > 64)
        throw new a(e2, r.MaximumCallDepth, t);
      return Pe(this.definition, l, i, t);
    });
  }
  marshalledCall(e2, t, n2, r2) {
    return r2(e2, t, async (o2, a2, i) => {
      const l = { spatialReference: e2.spatialReference, globalScope: n2.globalScope, depthCounter: { depth: e2.depthCounter.depth + 1 }, libraryResolver: e2.libraryResolver, exports: e2.exports, console: e2.console, abortSignal: e2.abortSignal, lrucache: e2.lrucache, timeZone: e2.timeZone ?? null, interceptor: e2.interceptor, localScope: {} };
      return i = i.map((t2) => !I(t2) || t2 instanceof s$1 ? t2 : n$1(t2, e2, r2)), n$1(await Pe(this.definition, l, i, t), n2, r2);
    });
  }
}
class z extends s$2 {
  constructor(e2) {
    super(e2);
  }
  async global(e2) {
    const t = this.executingContext.globalScope[e2.toLowerCase()];
    if (t.valueset || (t.value = await Y(this.executingContext, t.node), t.valueset = true), I(t.value) && !(t.value instanceof s$1)) {
      const e3 = new s$1();
      e3.fn = t.value, e3.parameterEvaluator = H, e3.context = this.executingContext, t.value = e3;
    }
    return t.value;
  }
  setGlobal(e2, t) {
    if (I(t))
      throw new a(null, r.AssignModuleFunction, null);
    this.executingContext.globalScope[e2.toLowerCase()] = { value: t, valueset: true, node: null };
  }
  hasGlobal(e2) {
    return void 0 === this.executingContext.exports[e2] && (e2 = e2.toLowerCase()), void 0 !== this.executingContext.exports[e2];
  }
  async loadModule(e2) {
    let n2 = e2.spatialReference;
    null == n2 && (n2 = new f$1({ wkid: 102100 })), this.moduleScope = Ge({}, e2.customfunctions, e2.timeZone), this.executingContext = { spatialReference: n2, services: e2.services, libraryResolver: new s(e2.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, abortSignal: void 0 === e2.abortSignal || null === e2.abortSignal ? { aborted: false } : e2.abortSignal, globalScope: this.moduleScope, console: e2.console ?? Ze, lrucache: e2.lrucache, timeZone: e2.timeZone ?? null, interceptor: e2.interceptor, localScope: null, depthCounter: { depth: 1 } }, await Y(this.executingContext, this.source.syntax);
  }
}
async function H(e2, t, n2) {
  if (true === t.preparsed) {
    const r3 = n2(e2, null, t.arguments);
    return q(r3), r3;
  }
  const r2 = n2(e2, t, await W(e2, t));
  return q(r2), r2;
}
async function Y(e2, t, n2) {
  if (t.breakpoint && true !== n2) {
    const n3 = t.breakpoint();
    return await n3, Y(e2, t, true);
  }
  try {
    switch (t?.type) {
      case "VariableDeclarator":
        return await xe(e2, t);
      case "ImportDeclaration":
        return await ve(e2, t);
      case "ExportNamedDeclaration":
        return await be(e2, t);
      case "VariableDeclaration":
        return await Se(e2, t, 0);
      case "BlockStatement":
      case "Program":
        return await he(e2, t);
      case "FunctionDeclaration":
        return await ye(e2, t);
      case "ReturnStatement":
        return await ge(e2, t);
      case "IfStatement":
        return await de(e2, t);
      case "ExpressionStatement":
        return await we(e2, t);
      case "UpdateExpression":
        return await ue(e2, t);
      case "AssignmentExpression":
        return await pe(e2, t);
      case "ForStatement":
        return await ne(e2, t);
      case "WhileStatement":
        return await X(e2, t);
      case "ForInStatement":
        return await ce(e2, t);
      case "BreakStatement":
        return R;
      case "EmptyStatement":
        return O;
      case "ContinueStatement":
        return J$1;
      case "TemplateElement":
        return await ke(e2, t);
      case "TemplateLiteral":
        return await Ee(e2, t);
      case "Identifier":
        return await Me(e2, t);
      case "MemberExpression":
        return await Fe(e2, t);
      case "Literal":
        return t.value;
      case "CallExpression":
        return await je(e2, t);
      case "UnaryExpression":
        return await Ie(e2, t);
      case "BinaryExpression":
        return await Ae(e2, t);
      case "LogicalExpression":
        return await Re(e2, t);
      case "ArrayExpression":
        return await Ce(e2, t);
      case "ObjectExpression":
        return await J(e2, t);
      case "Property":
        return await Q(e2, t);
      default:
        throw new a(e2, r.Unrecognized, t);
    }
  } catch (i) {
    throw u(e2, t, i);
  }
}
async function J(e2, t) {
  const a$1 = [];
  for (let n2 = 0; n2 < t.properties.length; n2++)
    a$1[n2] = await Y(e2, t.properties[n2]);
  const i = {}, l = /* @__PURE__ */ new Map();
  for (let n2 = 0; n2 < a$1.length; n2++) {
    const s3 = a$1[n2];
    if (I(s3.value))
      throw new a(e2, r.NoFunctionInDictionary, t);
    if (false === G(s3.key))
      throw new a(e2, r.KeyMustBeString, t);
    let c = s3.key.toString();
    const u2 = c.toLowerCase();
    l.has(u2) ? c = l.get(u2) : l.set(u2, c), s3.value === O ? i[c] = null : i[c] = s3.value;
  }
  const s2 = new N(i);
  return s2.immutable = false, s2;
}
async function Q(e2, t) {
  const n2 = await Y(e2, t.value);
  if ("Identifier" === t.key.type)
    return { key: t.key.name, value: n2 };
  return { key: await Y(e2, t.key), value: n2 };
}
async function X(e2, t) {
  const n2 = { testResult: true, lastAction: O };
  if (n2.testResult = await Y(e2, t.test), false === n2.testResult)
    return O;
  if (true !== n2.testResult)
    throw new a(e2, r.BooleanConditionRequired, t);
  for (; true === n2.testResult && (n2.lastAction = await Y(e2, t.body), n2.lastAction !== R) && !(n2.lastAction instanceof w); )
    if (n2.testResult = await Y(e2, t.test), true !== n2.testResult && false !== n2.testResult)
      throw new a(e2, r.BooleanConditionRequired, t);
  return n2.lastAction instanceof w ? n2.lastAction : O;
}
async function $(e2, t, n2) {
  const r2 = await Y(e2, t.body);
  return n2.lastAction = r2, n2.lastAction === R || n2.lastAction instanceof w ? (n2.testResult = false, n2) : null !== t.update ? (await Y(e2, t.update), n2) : n2;
}
async function ee(e2, t, n2) {
  if (null !== t.test) {
    const a$1 = await Y(e2, t.test);
    if (true === e2.abortSignal?.aborted)
      throw new a(e2, r.Cancelled, t);
    if (n2.testResult = a$1, false === n2.testResult)
      return n2;
    if (true !== n2.testResult)
      throw new a(e2, r.BooleanConditionRequired, t);
    return $(e2, t, n2);
  }
  return $(e2, t, n2);
}
function te(e2, t, n2, r2, o2, a2) {
  try {
    ee(e2, t, n2).then(() => {
      try {
        true === n2.testResult ? ++a2 > T ? (a2 = 0, setTimeout(() => {
          te(e2, t, n2, r2, o2, a2);
        }, 0)) : te(e2, t, n2, r2, o2, a2) : n2.lastAction instanceof w ? r2(n2.lastAction) : r2(O);
      } catch (i) {
        o2(i);
      }
    }, (e3) => {
      o2(e3);
    });
  } catch (i) {
    o2(i);
  }
}
function ne(e2, t) {
  try {
    return null !== t.init ? Y(e2, t.init).then(() => new Promise((n2, r2) => {
      te(e2, t, { testResult: true, lastAction: O }, (e3) => {
        n2(e3);
      }, (e3) => {
        r2(e3);
      }, 0);
    })) : new Promise((n2, r2) => {
      te(e2, t, { testResult: true, lastAction: O }, (e3) => {
        n2(e3);
      }, (e3) => {
        r2(e3);
      }, 0);
    });
  } catch (n2) {
    return Promise.reject(n2);
  }
}
function re(e2, t, n2, r2, o2, a2, i, l, s2, c) {
  try {
    if (r2 <= a2)
      return void l(O);
    o2.value = "k" === i ? n2[a2] : a2, Y(e2, t.body).then((u2) => {
      try {
        u2 instanceof w ? l(u2) : u2 === R ? l(O) : ++c > T ? (c = 0, setTimeout(() => {
          re(e2, t, n2, r2, o2, a2 + 1, i, l, s2, c);
        }, 0)) : re(e2, t, n2, r2, o2, a2 + 1, i, l, s2, c);
      } catch (f2) {
        s2(f2);
      }
    }, (e3) => {
      s2(e3);
    });
  } catch (u2) {
    s2(u2);
  }
}
function oe(e2, t, n2, r2, o2, a2, i, l, s2) {
  try {
    if (n2.length() <= o2)
      return void i(O);
    r2.value = "k" === a2 ? n2.get(o2) : o2, Y(e2, t.body).then((c) => {
      c instanceof w ? i(c) : c === R ? i(O) : ++s2 > T ? (s2 = 0, setTimeout(() => {
        oe(e2, t, n2, r2, o2 + 1, a2, i, l, s2);
      }, 0)) : oe(e2, t, n2, r2, o2 + 1, a2, i, l, s2);
    }, (e3) => {
      l(e3);
    });
  } catch (c) {
    l(c);
  }
}
function ae(e2, t, n2, r2, o2, a2) {
  try {
    if (void 0 === a2 && (a2 = "i"), 0 === n2.length)
      return void r2.resolve(O);
    re(e2, t, n2, n2.length, o2, 0, a2, (e3) => {
      r2.resolve(e3);
    }, (e3) => {
      r2.reject(e3);
    }, 0);
  } catch (i) {
    r2.reject(i);
  }
}
function ie(e2, t, n2, r2, o2, a2) {
  try {
    if (void 0 === a2 && (a2 = "i"), 0 === n2.length)
      return void r2.resolve(O);
    oe(e2, t, n2, o2, 0, a2, (e3) => {
      r2.resolve(e3);
    }, (e3) => {
      r2.reject(e3);
    }, 0);
  } catch (i) {
    r2.reject(i);
  }
}
function le(e2, t, n2, r2, o2) {
  try {
    ae(e2, t, n2.keys(), r2, o2, "k");
  } catch (a2) {
    r2.reject(a2);
  }
}
function se(e2, t, n2, r2, o2, a2, l, s2) {
  try {
    e2.next().then((c) => {
      try {
        if (null === c)
          a2(O);
        else {
          const u2 = D.createFromGraphicLikeObject(c.geometry, c.attributes, r2, t.timeZone);
          u2._underlyingGraphic = c, o2.value = u2;
          Y(t, n2.body).then((i) => {
            try {
              i === R ? a2(O) : i instanceof w ? a2(i) : ++s2 > T ? (s2 = 0, setTimeout(() => {
                se(e2, t, n2, r2, o2, a2, l, s2);
              }, 0)) : se(e2, t, n2, r2, o2, a2, l, s2);
            } catch (c2) {
              l(c2);
            }
          }, (e3) => {
            l(e3);
          });
        }
      } catch (u2) {
        l(u2);
      }
    }, (e3) => {
      l(e3);
    });
  } catch (c) {
    l(c);
  }
}
async function ce(e2, t) {
  return new Promise((a$1, i) => {
    Y(e2, t.right).then((l) => {
      try {
        let s2 = null;
        s2 = "VariableDeclaration" === t.left.type ? Y(e2, t.left) : Promise.resolve(), s2.then(() => {
          try {
            let s3 = "";
            if ("VariableDeclaration" === t.left.type) {
              const e3 = t.left.declarations[0].id;
              "Identifier" === e3.type && (s3 = e3.name);
            } else
              "Identifier" === t.left.type && (s3 = t.left.name);
            if (!s3)
              throw new a(e2, r.InvalidIdentifier, t);
            s3 = s3.toLowerCase();
            let c = null;
            if (null != e2.localScope && void 0 !== e2.localScope[s3] && (c = e2.localScope[s3]), null === c && void 0 !== e2.globalScope[s3] && (c = e2.globalScope[s3]), null === c)
              return void i(new a(e2, r.InvalidIdentifier, t));
            U(l) || G(l) ? ae(e2, t, l, { reject: i, resolve: a$1 }, c) : Q$1(l) ? ie(e2, t, l, { reject: i, resolve: a$1 }, c) : l instanceof N || H$1(l) ? le(e2, t, l, { reject: i, resolve: a$1 }, c) : B(l) ? se(l.iterator(e2.abortSignal), e2, t, l, c, (e3) => {
              a$1(e3);
            }, (e3) => {
              i(e3);
            }, 0) : ae(e2, t, [], { reject: i, resolve: a$1 }, c);
          } catch (s3) {
            i(s3);
          }
        }, i);
      } catch (s2) {
        i(s2);
      }
    }, i);
  });
}
async function ue(e2, t) {
  const a$1 = t.argument;
  if ("MemberExpression" === a$1.type) {
    const i2 = { t: null }, l2 = await Y(e2, a$1.object);
    let s2 = null;
    i2.t = l2, true === a$1.computed ? s2 = await Y(e2, a$1.property) : "Identifier" === a$1.property.type && (s2 = a$1.property.name);
    const c = i2.t;
    let u2;
    if (U(c)) {
      if (!E(s2))
        throw new a(e2, r.ArrayAccessorMustBeNumber, t);
      if (s2 < 0 && (s2 = c.length + s2), s2 < 0 || s2 >= c.length)
        throw new a(e2, r.OutOfBounds, t);
      u2 = he$1(c[s2]), c[s2] = "++" === t.operator ? u2 + 1 : u2 - 1;
    } else if (c instanceof N) {
      if (false === G(s2))
        throw new a(e2, r.KeyAccessorMustBeString, t);
      if (true !== c.hasField(s2))
        throw new a(e2, r.FieldNotFound, t, { key: s2 });
      u2 = he$1(c.field(s2)), c.setField(s2, "++" === t.operator ? u2 + 1 : u2 - 1);
    } else if (c instanceof z) {
      if (false === G(s2))
        throw new a(e2, r.ModuleAccessorMustBeString, t);
      if (true !== c.hasGlobal(s2))
        throw new a(e2, r.ModuleExportNotFound, t);
      u2 = he$1(await c.global(s2)), c.setGlobal(s2, "++" === t.operator ? u2 + 1 : u2 - 1);
    } else {
      if (!H$1(c))
        throw Q$1(c) ? new a(e2, r.Immutable, t) : new a(e2, r.InvalidParameter, t);
      if (false === G(s2))
        throw new a(e2, r.KeyAccessorMustBeString, t);
      if (true !== c.hasField(s2))
        throw new a(e2, r.FieldNotFound, t, { key: s2 });
      u2 = he$1(c.field(s2)), c.setField(s2, "++" === t.operator ? u2 + 1 : u2 - 1);
    }
    return false === t.prefix ? u2 : "++" === t.operator ? u2 + 1 : u2 - 1;
  }
  const i = "Identifier" === t.argument.type ? t.argument.name.toLowerCase() : "";
  if (!i)
    throw new a(e2, r.InvalidIdentifier, t);
  let l;
  if (null != e2.localScope && void 0 !== e2.localScope[i])
    return l = he$1(e2.localScope[i].value), e2.localScope[i] = { value: "++" === t.operator ? l + 1 : l - 1, valueset: true, node: t }, false === t.prefix ? l : "++" === t.operator ? l + 1 : l - 1;
  if (void 0 !== e2.globalScope[i])
    return l = he$1(e2.globalScope[i].value), e2.globalScope[i] = { value: "++" === t.operator ? l + 1 : l - 1, valueset: true, node: t }, false === t.prefix ? l : "++" === t.operator ? l + 1 : l - 1;
  throw new a(e2, r.InvalidIdentifier, t);
}
function fe(e2, t, n2, a$1, i) {
  switch (t) {
    case "=":
      return e2 === O ? null : e2;
    case "/=":
      return he$1(n2) / he$1(e2);
    case "*=":
      return he$1(n2) * he$1(e2);
    case "-=":
      return he$1(n2) - he$1(e2);
    case "+=":
      return G(n2) || G(e2) ? de$1(n2) + de$1(e2) : he$1(n2) + he$1(e2);
    case "%=":
      return he$1(n2) % he$1(e2);
    default:
      throw new a(i, r.UnsupportedOperator, a$1);
  }
}
async function pe(e2, t) {
  const a$1 = t.left;
  if ("MemberExpression" === a$1.type) {
    const i2 = await Y(e2, a$1.object);
    let l = null;
    if (true === a$1.computed)
      l = await Y(e2, a$1.property);
    else {
      if ("Identifier" !== a$1.property.type)
        throw new a(e2, r.InvalidIdentifier, t);
      l = a$1.property.name;
    }
    const s2 = await Y(e2, t.right);
    if (U(i2)) {
      if (!E(l))
        throw new a(e2, r.ArrayAccessorMustBeNumber, t);
      if (l < 0 && (l = i2.length + l), l < 0 || l > i2.length)
        throw new a(e2, r.OutOfBounds, t);
      if (l === i2.length) {
        if ("=" !== t.operator)
          throw new a(e2, r.OutOfBounds, t);
        i2[l] = fe(s2, t.operator, i2[l], t, e2);
      } else
        i2[l] = fe(s2, t.operator, i2[l], t, e2);
    } else if (i2 instanceof N) {
      if (false === G(l))
        throw new a(e2, r.KeyAccessorMustBeString, t);
      if (true === i2.hasField(l))
        i2.setField(l, fe(s2, t.operator, i2.field(l), t, e2));
      else {
        if ("=" !== t.operator)
          throw new a(e2, r.FieldNotFound, t, { key: l });
        i2.setField(l, fe(s2, t.operator, null, t, e2));
      }
    } else if (i2 instanceof z) {
      if (false === G(l))
        throw new a(e2, r.KeyAccessorMustBeString, t);
      if (true !== i2.hasGlobal(l))
        throw new a(e2, r.ModuleExportNotFound, t);
      i2.setGlobal(l, fe(s2, t.operator, await i2.global(l), t, e2));
    } else {
      if (!H$1(i2))
        throw Q$1(i2) ? new a(e2, r.Immutable, t) : new a(e2, r.InvalidParameter, t);
      if (false === G(l))
        throw new a(e2, r.KeyAccessorMustBeString, t);
      if (true === i2.hasField(l))
        i2.setField(l, fe(s2, t.operator, i2.field(l), t, e2));
      else {
        if ("=" !== t.operator)
          throw new a(e2, r.FieldNotFound, t, { key: l });
        i2.setField(l, fe(s2, t.operator, null, t, e2));
      }
    }
    return O;
  }
  const i = a$1.name.toLowerCase();
  if (null != e2.localScope && void 0 !== e2.localScope[i]) {
    const n2 = await Y(e2, t.right);
    return e2.localScope[i] = { value: fe(n2, t.operator, e2.localScope[i].value, t, e2), valueset: true, node: t.right }, O;
  }
  if (void 0 !== e2.globalScope[i]) {
    const n2 = await Y(e2, t.right);
    return e2.globalScope[i] = { value: fe(n2, t.operator, e2.globalScope[i].value, t, e2), valueset: true, node: t.right }, O;
  }
  throw new a(e2, r.InvalidIdentifier, t);
}
async function we(e2, t) {
  if ("AssignmentExpression" === t.expression.type)
    return Y(e2, t.expression);
  if ("CallExpression" === t.expression.type) {
    const n3 = await Y(e2, t.expression);
    return n3 === O ? O : new F(n3);
  }
  const n2 = await Y(e2, t.expression);
  return n2 === O ? O : new F(n2);
}
async function de(e2, t) {
  const n2 = await Y(e2, t.test);
  if (true === n2)
    return Y(e2, t.consequent);
  if (false === n2)
    return null !== t.alternate ? Y(e2, t.alternate) : O;
  throw new a(e2, r.BooleanConditionRequired, t);
}
async function he(e2, t) {
  return me(e2, t, 0);
}
async function me(e2, t, n2) {
  if (n2 >= t.body.length)
    return O;
  const r2 = await Y(e2, t.body[n2]);
  return r2 instanceof w || r2 === R || r2 === J$1 || n2 === t.body.length - 1 ? r2 : me(e2, t, n2 + 1);
}
async function ge(e2, t) {
  if (null === t.argument)
    return new w(O);
  const n2 = await Y(e2, t.argument);
  return new w(n2);
}
async function ye(e2, t) {
  const n2 = t.id.name.toLowerCase();
  return e2.globalScope[n2] = { valueset: true, node: null, value: new _(t, e2) }, O;
}
async function ve(e2, t) {
  const n2 = t.specifiers[0].local.name.toLowerCase(), r2 = e2.libraryResolver.loadLibrary(n2);
  let o2 = null;
  return e2.libraryResolver._moduleSingletons?.has(r2.uri) ? o2 = e2.libraryResolver._moduleSingletons.get(r2.uri) : (o2 = new z(r2), await o2.loadModule(e2), e2.libraryResolver._moduleSingletons?.set(r2.uri, o2)), e2.globalScope[n2] = { value: o2, valueset: true, node: t }, O;
}
async function be(e2, t) {
  if (await Y(e2, t.declaration), "FunctionDeclaration" === t.declaration.type)
    e2.exports[t.declaration.id.name.toLowerCase()] = "function";
  else if ("VariableDeclaration" === t.declaration.type)
    for (const n2 of t.declaration.declarations)
      e2.exports[n2.id.name.toLowerCase()] = "variable";
  return O;
}
async function Se(e2, t, n2) {
  return n2 >= t.declarations.length ? O : (await Y(e2, t.declarations[n2]), n2 === t.declarations.length - 1 || await Se(e2, t, n2 + 1), O);
}
async function xe(e2, t) {
  let n2 = null;
  if (n2 = null === t.init ? null : await Y(e2, t.init), null !== e2.localScope) {
    if (n2 === O && (n2 = null), "Identifier" !== t.id.type)
      throw new a(e2, r.InvalidIdentifier, t);
    const a$12 = t.id.name.toLowerCase();
    return null != e2.localScope && (e2.localScope[a$12] = { value: n2, valueset: true, node: t.init }), O;
  }
  if ("Identifier" !== t.id.type)
    throw new a(e2, r.InvalidIdentifier, t);
  const a$1 = t.id.name.toLowerCase();
  return n2 === O && (n2 = null), e2.globalScope[a$1] = { value: n2, valueset: true, node: t.init }, O;
}
async function Fe(e2, t) {
  const a$1 = await Y(e2, t.object);
  if (null === a$1)
    throw new a(e2, r.MemberOfNull, t);
  if (false === t.computed) {
    if ("Identifier" === t.property.type) {
      if (a$1 instanceof N || H$1(a$1))
        return a$1.field(t.property.name);
      if (a$1 instanceof n)
        return L(a$1, t.property.name, e2, t);
      if (a$1 instanceof z) {
        if (!a$1.hasGlobal(t.property.name))
          throw new a(e2, r.InvalidIdentifier, t);
        return a$1.global(t.property.name);
      }
      throw new a(e2, r.InvalidMemberAccessKey, t);
    }
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  let i = await Y(e2, t.property);
  if (a$1 instanceof N || H$1(a$1)) {
    if (G(i))
      return a$1.field(i);
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  if (a$1 instanceof z) {
    if (G(i))
      return a$1.global(i);
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  if (a$1 instanceof n) {
    if (G(i))
      return L(a$1, i, e2, t);
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  if (U(a$1)) {
    if (E(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a$1.length + i), i >= a$1.length || i < 0)
        throw new a(e2, r.OutOfBounds, t);
      return a$1[i];
    }
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  if (Q$1(a$1)) {
    if (E(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a$1.length() + i), i >= a$1.length() || i < 0)
        throw new a(e2, r.OutOfBounds, t);
      return a$1.get(i);
    }
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  if (G(a$1)) {
    if (E(i) && isFinite(i) && Math.floor(i) === i) {
      if (i < 0 && (i = a$1.length + i), i >= a$1.length || i < 0)
        throw new a(e2, r.OutOfBounds, t);
      return a$1[i];
    }
    throw new a(e2, r.InvalidMemberAccessKey, t);
  }
  throw new a(e2, r.InvalidMemberAccessKey, t);
}
async function Ie(e2, t) {
  const n2 = await Y(e2, t.argument);
  if (z$1(n2)) {
    if ("!" === t.operator)
      return !n2;
    if ("-" === t.operator)
      return -1 * he$1(n2);
    if ("+" === t.operator)
      return 1 * he$1(n2);
    if ("~" === t.operator)
      return ~he$1(n2);
    throw new a(e2, r.UnsupportedUnaryOperator, t);
  }
  if ("-" === t.operator)
    return -1 * he$1(n2);
  if ("+" === t.operator)
    return 1 * he$1(n2);
  if ("~" === t.operator)
    return ~he$1(n2);
  throw new a(e2, r.UnsupportedUnaryOperator, t);
}
async function Ce(e2, t) {
  const n2 = [];
  for (let r2 = 0; r2 < t.elements.length; r2++)
    n2.push(await Y(e2, t.elements[r2]));
  for (let a$1 = 0; a$1 < n2.length; a$1++) {
    if (I(n2[a$1]))
      throw new a(e2, r.NoFunctionInArray, t);
    n2[a$1] === O && (n2[a$1] = null);
  }
  return n2;
}
async function Ae(e2, t) {
  const n2 = [];
  n2[0] = await Y(e2, t.left), n2[1] = await Y(e2, t.right);
  const a$1 = n2[0], i = n2[1];
  switch (t.operator) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return _e(he$1(a$1), he$1(i), t.operator);
    case "==":
      return me$1(a$1, i);
    case "!=":
      return !me$1(a$1, i);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return ce$1(a$1, i, t.operator);
    case "+":
      return G(a$1) || G(i) ? de$1(a$1) + de$1(i) : he$1(a$1) + he$1(i);
    case "-":
      return he$1(a$1) - he$1(i);
    case "*":
      return he$1(a$1) * he$1(i);
    case "/":
      return he$1(a$1) / he$1(i);
    case "%":
      return he$1(a$1) % he$1(i);
    default:
      throw new a(e2, r.UnsupportedOperator, t);
  }
}
async function Re(e2, t) {
  const n2 = await Y(e2, t.left);
  let a$1 = null;
  if (!z$1(n2))
    throw new a(e2, r.LogicalExpressionOnlyBoolean, t);
  switch (t.operator) {
    case "||":
      if (true === n2)
        return n2;
      if (a$1 = await Y(e2, t.right), z$1(a$1))
        return a$1;
      throw new a(e2, r.LogicExpressionOrAnd, t);
    case "&&":
      if (false === n2)
        return n2;
      if (a$1 = await Y(e2, t.right), z$1(a$1))
        return a$1;
      throw new a(e2, r.LogicExpressionOrAnd, t);
    default:
      throw new a(e2, r.LogicExpressionOrAnd, t);
  }
}
async function Me(e2, t) {
  const n2 = t.name.toLowerCase();
  if (null != e2.localScope && void 0 !== e2.localScope[n2]) {
    const t2 = e2.localScope[n2];
    if (true === t2.valueset)
      return t2.value;
    if (null !== t2.d)
      return t2.d;
    t2.d = Y(e2, t2.node);
    const r2 = await t2.d;
    return t2.value = r2, t2.valueset = true, r2;
  }
  if (void 0 !== e2.globalScope[n2]) {
    const t2 = e2.globalScope[n2];
    if (true === t2.valueset)
      return t2.value;
    if (null !== t2.d)
      return t2.d;
    t2.d = Y(e2, t2.node);
    const r2 = await t2.d;
    return t2.value = r2, t2.valueset = true, r2;
  }
  throw new a(e2, r.InvalidIdentifier, t);
}
async function je(e2, t) {
  if ("MemberExpression" === t.callee.type) {
    const n2 = await Y(e2, t.callee.object);
    if (!(n2 instanceof z))
      throw new a(e2, r.FunctionNotFound, t);
    const a$1 = false === t.callee.computed ? t.callee.property.name : await Y(e2, t.callee.property);
    if (!n2.hasGlobal(a$1))
      throw new a(e2, r.FunctionNotFound, t);
    const i = await n2.global(a$1);
    if (!I(i))
      throw new a(e2, r.CallNonFunction, t);
    return i.call(e2, t);
  }
  if ("Identifier" !== t.callee.type)
    throw new a(e2, r.FunctionNotFound, t);
  if (null != e2.localScope && void 0 !== e2.localScope[t.callee.name.toLowerCase()]) {
    const n2 = e2.localScope[t.callee.name.toLowerCase()];
    if (I(n2.value))
      return n2.value.call(e2, t);
    throw new a(e2, r.CallNonFunction, t);
  }
  if (void 0 !== e2.globalScope[t.callee.name.toLowerCase()]) {
    const n2 = e2.globalScope[t.callee.name.toLowerCase()];
    if (I(n2.value))
      return n2.value.call(e2, t);
    throw new a(e2, r.CallNonFunction, t);
  }
  throw new a(e2, r.FunctionNotFound, t);
}
async function ke(e2, t) {
  return t.value ? t.value.cooked : "";
}
function Le(e2, t, n2) {
  if (I(e2))
    throw new a(t, r.NoFunctionInTemplateLiteral, n2);
  return e2;
}
async function Ee(e2, t) {
  const n2 = [];
  for (let a2 = 0; a2 < t.expressions.length; a2++) {
    const r3 = await Y(e2, t.expressions[a2]);
    n2[a2] = de$1(r3);
  }
  let r2 = "", o2 = 0;
  for (const a2 of t.quasis)
    if (r2 += a2.value ? a2.value.cooked : "", false === a2.tail) {
      r2 += n2[o2] ? Le(n2[o2], e2, t) : "", o2++;
    }
  return r2;
}
const Ne = {};
async function Oe(e2, t, n2, r2) {
  const o2 = await Y(e2, t.arguments[n2]);
  if (me$1(o2, r2))
    return Y(e2, t.arguments[n2 + 1]);
  const a2 = t.arguments.length - n2;
  return 1 === a2 ? Y(e2, t.arguments[n2]) : 2 === a2 ? null : 3 === a2 ? Y(e2, t.arguments[n2 + 2]) : Oe(e2, t, n2 + 2, r2);
}
async function Be(e2, t, n2, a$1) {
  if (true === a$1)
    return Y(e2, t.arguments[n2 + 1]);
  if (3 === t.arguments.length - n2)
    return Y(e2, t.arguments[n2 + 2]);
  const i = await Y(e2, t.arguments[n2 + 2]);
  if (false === z$1(i))
    throw new a(e2, r.ModuleExportNotFound, t.arguments[n2 + 2]);
  return Be(e2, t, n2 + 2, i);
}
async function Pe(e2, t, n2, a$1) {
  const i = e2.body;
  if (n2.length !== e2.params.length)
    throw new a(t, r.WrongNumberOfParameters, null);
  for (let r2 = 0; r2 < n2.length; r2++) {
    const o2 = e2.params[r2];
    "Identifier" === o2.type && null != t.localScope && (t.localScope[o2.name.toLowerCase()] = { d: null, value: n2[r2], valueset: true, node: null });
  }
  const l = await Y(t, i);
  if (l instanceof w)
    return l.value;
  if (l === R)
    throw new a(t, r.UnexpectedToken, a$1);
  if (l === J$1)
    throw new a(t, r.UnexpectedToken, a$1);
  return l instanceof F ? l.value : l;
}
C(Ne, V), Y$1(Ne, V), M(Ne, V), W$1(Ne, V), f(Ne, V), xn({ functions: Ne, compiled: false, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: V, standardFunctionAsync: H }), Ne.iif = async function(e2, t) {
  ae$1(null === t.arguments ? [] : t.arguments, 3, 3, e2, t);
  const n2 = await Y(e2, t.arguments[0]);
  if (false === z$1(n2))
    throw new a(e2, r.BooleanConditionRequired, t);
  return Y(e2, n2 ? t.arguments[1] : t.arguments[2]);
}, Ne.defaultvalue = async function(e2, t) {
  ae$1(null === t.arguments ? [] : t.arguments, 2, 3, e2, t);
  const a$1 = await Y(e2, t.arguments[0]);
  if (3 === t.arguments.length) {
    const i = await Y(e2, t.arguments[1]);
    let l = [];
    if (Q$1(i))
      l = i.toArray();
    else {
      if (!U(i))
        throw new a(e2, r.InvalidParameter, t);
      l = i;
    }
    let s2 = a$1;
    if (null === s2)
      return Y(e2, t.arguments[2]);
    for (const r2 of l)
      if (H$1(s2)) {
        if (false === G(r2))
          return Y(e2, t.arguments[2]);
        if (!s2.hasField(r2))
          return Y(e2, t.arguments[2]);
        s2 = s2.field(r2);
      } else if (s2 instanceof N) {
        if (false === G(r2))
          return Y(e2, t.arguments[2]);
        if (!s2.hasField(r2))
          return Y(e2, t.arguments[2]);
        s2 = s2.field(r2);
      } else if (s2 instanceof n) {
        if (false === G(r2))
          return Y(e2, t.arguments[2]);
        if (s2 = L(s2, r2, null, null, 2), null === s2)
          return Y(e2, t.arguments[2]);
        if ("notfound" === s2?.keystate)
          return Y(e2, t.arguments[2]);
      } else if (U(s2)) {
        if (false === E(r2))
          return Y(e2, t.arguments[2]);
        if (s2 = s2[r2], null == s2)
          return Y(e2, t.arguments[2]);
      } else {
        if (!Q$1(s2))
          return Y(e2, t.arguments[2]);
        if (false === E(r2))
          return Y(e2, t.arguments[2]);
        if (s2 = s2.get(r2), null == s2)
          return Y(e2, t.arguments[2]);
      }
    return s2;
  }
  return null == a$1 || "" === a$1 ? Y(e2, t.arguments[1]) : a$1;
}, Ne.decode = async function(e2, t) {
  if (t.arguments.length < 2)
    throw new a(e2, r.WrongNumberOfParameters, t);
  if (2 === t.arguments.length)
    return Y(e2, t.arguments[1]);
  if ((t.arguments.length - 1) % 2 == 0)
    throw new a(e2, r.WrongNumberOfParameters, t);
  return Oe(e2, t, 1, await Y(e2, t.arguments[0]));
}, Ne.when = async function(e2, t) {
  if (t.arguments.length < 3)
    throw new a(e2, r.WrongNumberOfParameters, t);
  if (t.arguments.length % 2 == 0)
    throw new a(e2, r.WrongNumberOfParameters, t);
  const n2 = await Y(e2, t.arguments[0]);
  if (false === z$1(n2))
    throw new a(e2, r.BooleanConditionRequired, t.arguments[0]);
  return Be(e2, t, 0, n2);
};
const Ke = { fixSpatialReference: Ze$1, parseArguments: W, standardFunction: V, standardFunctionAsync: H, evaluateIdentifier: Me };
for (const We in Ne)
  Ne[We] = { value: new e(Ne[We]), valueset: true, node: null };
const De = function() {
};
function Ge(e$1, t, r2) {
  const o2 = new De();
  null == e$1 && (e$1 = {}), null == t && (t = {});
  const a2 = new N({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  a2.immutable = false, o2.textformatting = { value: a2, valueset: true, node: null };
  for (const n2 in t)
    o2[n2] = { value: new e(t[n2]), native: true, valueset: true, node: null };
  for (const n2 in e$1)
    e$1[n2] && "esri.Graphic" === e$1[n2].declaredClass ? o2[n2] = { value: D.createFromGraphic(e$1[n2], r2), valueset: true, node: null } : o2[n2] = { value: e$1[n2], valueset: true, node: null };
  return o2;
}
function Ze(e2) {
  console.log(e2);
}
De.prototype = Ne, De.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, De.prototype.pi = { value: Math.PI, valueset: true, node: null };
const Ue = Ke;
function qe(e$1) {
  const t = { mode: "async", compiled: false, functions: {}, signatures: [], standardFunction: V, standardFunctionAsync: H, evaluateIdentifier: Me };
  for (let n2 = 0; n2 < e$1.length; n2++)
    e$1[n2].registerFunctions(t);
  for (const n2 in t.functions)
    Ne[n2] = { value: new e(t.functions[n2]), valueset: true, node: null }, De.prototype[n2] = Ne[n2];
  for (let n2 = 0; n2 < t.signatures.length; n2++)
    o(t.signatures[n2], "async");
}
async function Te(e2, n2) {
  let a$1 = n2.spatialReference;
  null == a$1 && (a$1 = new f$1({ wkid: 102100 }));
  let i = null;
  e2.usesModules && (i = new s(/* @__PURE__ */ new Map(), e2.loadedModules));
  const l = Ge(n2.vars, n2.customfunctions, n2.timeZone), s$12 = { spatialReference: a$1, services: n2.services, exports: {}, libraryResolver: i, abortSignal: void 0 === n2.abortSignal || null === n2.abortSignal ? { aborted: false } : n2.abortSignal, globalScope: l, console: n2.console ?? Ze, timeZone: n2.timeZone ?? null, lrucache: n2.lrucache, interceptor: n2.interceptor, localScope: null, depthCounter: { depth: 1 } };
  let c = await Y(s$12, e2);
  if (c instanceof w && (c = c.value), c instanceof F && (c = c.value), c === O && (c = null), c === R)
    throw new a(s$12, r.IllegalResult, null);
  if (c === J$1)
    throw new a(s$12, r.IllegalResult, null);
  if (I(c))
    throw new a(s$12, r.IllegalResult, null);
  return c;
}
qe([p]);
export {
  Te as executeScript,
  qe as extend,
  Ue as functionHelper
};
