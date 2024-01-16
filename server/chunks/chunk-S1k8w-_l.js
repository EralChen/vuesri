import { la as v$3, pl as d, ps as b$2, cy as x$1, rN as $$1, hy as e$1, eQ as n$1, rO as u, d1 as o$1, kG as i$1, mH as x, bS as e$2, nS as n, ky as x$2, mP as k$1, l6 as u$1, kC as d$1, l2 as n$2, po as g, rP as a, hI as S, pt as k$2, pp as B, hx as O$2, rQ as M$1, lb as b$3, mK as c, mL as g$1, rR as y, hw as r, nY as f, rS as p$1, rT as B$1, kD as b$4, nT as a$1, bG as C, cP as D$1, bD as u$2, pr as I, rU as F$1, nR as a$2, rV as t, nU as V, eP as o$2, mJ as e$3, rW as s, q4 as c$1, nH as R, rX as D$2, rY as n$3, rZ as M$2, r_ as r$1, eB as e$4, r$ as f$1, lJ as o$3, lF as o$4, lC as o$5, lK as o$6, lE as o$7, lG as P, lM as e$5, lD as d$2, s0 as e$6, eu as e$7, s1 as p$2, lH as o$8, s2 as e$8, s3 as t$1, lN as o$9, s4 as n$4, bo as e$9, lP as r$2, lQ as e$a, lR as t$2, lS as t$3, lT as r$3, lU as r$4, lV as S$1, s5 as c$2, lW as A$1, lX as h$1, i5 as O$3, lZ as o$a, l_ as E$1, l$ as _, s6 as _$1, s7 as c$3, s8 as h$2, m6 as A$2, s9 as t$4, me as u$3, nW as r$5, eO as z$1, sa as H, sb as E, ma as s$1, oL as i, sc as b$5, sd as E$2, se as _$2, sf as D$3, o3 as f$2, nX as d$3, sg as w$3, nP as u$4, q1 as f$3, eN as _$3, sh as h$3 } from "./chunk-KFNcxJaF.js";
class $ {
  constructor(e2) {
    this.metadata = void 0, this._camera = new $$1(), this._elevation = { offset: 0, override: null }, this.collisionType = { type: "point" }, this.collisionPriority = 0, this._renderObjects = new Array(), this.autoScaleRenderObjects = true, this._available = true, this._noDisplayCount = 0, this._radius = 10, this._worldSized = false, this.focusMultiplier = 2, this.touchMultiplier = 2.5, this.worldOriented = false, this._modelTransform = e$1(), this._worldFrame = null, this._renderLocation = n$1(), this._renderLocationDirty = true, this._location = new x$1({ x: 0, y: 0, z: 0 }), this._elevationAlignedLocation = new x$1(), this._elevationAlignedLocationDirty = true, this.interactive = true, this.selectable = false, this.grabbable = true, this.consumesClicks = true, this.cursor = null, this.grabCursor = null, this._grabbing = false, this.dragging = false, this._hovering = false, this._selected = false, this._state = u.None, this._focused = false, this.events = new o$1.EventEmitter(), this._screenLocation = { screenPointArray: i$1(), renderScreenPointArray: x(), pixelSize: 0 }, this._screenLocationDirty = true, this._engineResourcesAddedToStage = false, this._attached = false, this._location.spatialReference = e2.view.spatialReference, Object.assign(this, e2);
    const i2 = this.view.state?.camera;
    i2 && this._camera.copyFrom(i2);
  }
  destroy() {
    this._applyObjectTransform = fe, this._removeResourcesFromStage(), this._engineResources = null, this.view = null, this._camera = null;
  }
  get _stage() {
    return this.view?._stage;
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this._elevationAlignedLocationDirty = true, this._renderLocationDirty = true, this._updateEngineObject();
  }
  get renderObjects() {
    return this._renderObjects;
  }
  set renderObjects(e2) {
    this._removeResourcesFromStage(), this._engineResources = null, this._renderObjects = e2.slice(), this._updateEngineObject();
  }
  set available(e2) {
    e2 !== this._available && (this._available = e2, this._updateEngineObject());
  }
  get available() {
    return this._available;
  }
  disableDisplay() {
    return this._noDisplayCount++, 1 === this._noDisplayCount && this._updateEngineObject(), e$2(() => {
      this._noDisplayCount--, 0 === this._noDisplayCount && this._updateEngineObject();
    });
  }
  set radius(e2) {
    e2 !== this._radius && (this._radius = e2, this._updateEngineObject());
  }
  get radius() {
    return this._radius;
  }
  set worldSized(e2) {
    e2 !== this._worldSized && (this._worldSized = e2, this._updateEngineObject());
  }
  get worldSized() {
    return this._worldSized;
  }
  get modelTransform() {
    return this._modelTransform;
  }
  set modelTransform(e2) {
    ee(e2) && (this._screenLocationDirty = true), n(this._modelTransform, e2), this._updateEngineObject();
  }
  get renderLocation() {
    return this._renderLocationDirty && (this._renderLocationDirty = false, this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation, this._renderLocation), this.worldOriented ? (this._worldFrame || (this._worldFrame = e$1()), te(this.view, this._renderLocation, this._worldFrame)) : this._worldFrame && (this._worldFrame = null)), this._renderLocation;
  }
  set renderLocation(e2) {
    this.view.renderCoordsHelper.fromRenderCoords(e2, this._location), this.elevationAlignedLocation = this._location;
  }
  get location() {
    return this._location;
  }
  set location(e2) {
    x$2(e2, this._location), this._notifyLocationChanged();
  }
  _notifyLocationChanged() {
    this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = true, this._updateEngineObject(), this.events.emit("location-update", { location: this._location });
  }
  get elevationAlignedLocation() {
    return this._elevationAlignedLocationDirty ? (this._evaluateElevationAlignment(), this._updateElevationAlignedLocation(), this._elevationAlignedLocation) : this._elevationAlignedLocation;
  }
  set elevationAlignedLocation(e2) {
    x$2(e2, this._location), this._evaluateElevationAlignment(), this._location.z -= this._elevation.offset, this._updateElevationAlignedLocation(), this._updateEngineObject(), this.events.emit("location-update", { location: this._location });
  }
  _updateElevationAlignedLocation() {
    const e2 = null != this._elevation.override ? this._elevation.override : this.location.z || 0;
    this._elevationAlignedLocation.x = this.location.x, this._elevationAlignedLocation.y = this.location.y, this._elevationAlignedLocation.z = e2 + this._elevation.offset, this._elevationAlignedLocation.spatialReference = k$1(this.location.spatialReference), this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = false;
  }
  grabbableForEvent() {
    return true;
  }
  get grabbing() {
    return this._grabbing;
  }
  set grabbing(e2) {
    e2 !== this._grabbing && (this._grabbing = e2, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get hovering() {
    return this._hovering;
  }
  set hovering(e2) {
    e2 !== this._hovering && (this._hovering = e2, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get selected() {
    return this._selected;
  }
  set selected(e2) {
    e2 !== this._selected && (this._selected = e2, this._updateEngineObject(), this.events.emit("select-changed", { action: e2 ? "select" : "deselect" }));
  }
  get state() {
    return this._state;
  }
  set state(e2) {
    e2 !== this._state && (this._state = e2, this._updateEngineObject());
  }
  updateStateEnabled(e2, t2) {
    t2 ? this.state |= e2 : this.state &= ~e2;
  }
  _setFocused(e2) {
    e2 !== this._focused && (this._focused = e2, this.events.emit("focus-changed", { action: true === e2 ? "focus" : "unfocus" }));
  }
  get focused() {
    return this._focused;
  }
  get screenLocation() {
    return this._ensureScreenLocation(), this._screenLocation;
  }
  _ensureScreenLocation() {
    if (!this._screenLocationDirty)
      return;
    this._screenLocation.pixelSize = this._camera.computeScreenPixelSizeAt(this.renderLocation), this._screenLocationDirty = false;
    let e2;
    if (ee(this._modelTransform)) {
      const t2 = this._calculateModelTransformOffset(ge);
      e2 = u$1(t2, t2, this.renderLocation);
    } else
      e2 = this.renderLocation;
    this._camera.projectToRenderScreen(e2, this._screenLocation.renderScreenPointArray), this._camera.renderToScreen(this._screenLocation.renderScreenPointArray, this._screenLocation.screenPointArray);
  }
  get applyObjectTransform() {
    return this._applyObjectTransform;
  }
  set applyObjectTransform(e2) {
    this._applyObjectTransform = e2, this._screenLocationDirty = true, this._updateEngineObject();
  }
  get attached() {
    return this._attached;
  }
  intersectionDistance(t2, i2) {
    if (!this.available)
      return null;
    const s2 = d$1(t2, ie), o2 = this._getCollisionRadius(i2), n2 = -1 * this.collisionPriority;
    switch (this.collisionType.type) {
      case "point":
        if (b$4(this.screenLocation.screenPointArray, s2) < o2 * o2)
          return this.screenLocation.renderScreenPointArray[2] + n2;
        break;
      case "line": {
        const e2 = this.collisionType.paths, t3 = this._getWorldToScreenObjectScale(), i3 = this._calculateObjectTransform(t3, ae), r$12 = o2 * this.screenLocation.pixelSize, a2 = g(this._camera, s2, oe);
        if (null == a2)
          return null;
        for (const s3 of e2) {
          if (0 === s3.length)
            continue;
          const e3 = O$2(le, s3[0], i3);
          for (let t4 = 1; t4 < s3.length; t4++) {
            const o3 = O$2(he, s3[t4], i3), l = B$1(b$3(e3, o3, se), a2);
            if (null != l && l < r$12 * r$12) {
              const t5 = u$1(c.get(), e3, o3);
              g$1(t5, t5, 0.5);
              const i4 = y(c.get());
              return this._camera.projectToRenderScreen(t5, i4), i4[2] + n2;
            }
            r(e3, o3);
          }
        }
        break;
      }
      case "disc": {
        const e2 = this.collisionType.direction, t3 = this.collisionType.offset ?? f, i3 = this._getWorldToScreenObjectScale(), r2 = this._calculateObjectTransform(i3, ae), a$12 = o2 * this.screenLocation.pixelSize, c2 = g(this._camera, s2, oe);
        if (null == c2)
          return null;
        const h2 = a(ne, r2), d2 = S(_e, e2, h2), _2 = O$2(ue, t3, r2);
        k$2(_2, d2, ce);
        const u2 = de;
        if (B(ce, c2, u2) && p$1(u2, _2) < a$12 * a$12)
          return this.screenLocation.renderScreenPointArray[2] + n2;
        break;
      }
      case "ribbon": {
        const { paths: e2, direction: t3 } = this.collisionType, i3 = this._getWorldToScreenObjectScale(), r$12 = this._calculateObjectTransform(i3, ae), a$12 = o2 * this._camera.computeScreenPixelSizeAt(this.renderLocation), h2 = g(this._camera, s2, oe);
        if (null == h2)
          return null;
        const d2 = a(ne, r$12), _2 = S(_e, t3, d2), u2 = this._calculateModelTransformPosition(ue);
        k$2(u2, _2, ce);
        const g$2 = de;
        if (!B(ce, h2, g$2))
          break;
        for (const s3 of e2) {
          if (0 === s3.length)
            continue;
          const e3 = O$2(le, s3[0], r$12);
          for (let t4 = 1; t4 < s3.length; t4++) {
            const i4 = O$2(he, s3[t4], r$12), o3 = M$1(b$3(e3, i4, se), g$2);
            if (null != o3 && o3 < a$12 * a$12) {
              const t5 = u$1(c.get(), e3, i4);
              g$1(t5, t5, 0.5);
              const s4 = y(c.get());
              return this._camera.projectToRenderScreen(t5, s4), s4[2] + n2;
            }
            r(e3, i4);
          }
        }
        break;
      }
      default:
        n$2(this.collisionType);
    }
    return null;
  }
  attach(e2 = { manipulator3D: {} }) {
    const t2 = this._stage;
    if (!t2)
      return;
    const i2 = e2.manipulator3D;
    null == i2.engineLayerId ? (this._engineLayer = new a$1(t2, { pickable: false, updatePolicy: C.SYNC }), i2.engineLayerId = this._engineLayer.id) : t2?.getObject && (this._engineLayer = t2.getObject(i2.engineLayerId)), i2.engineLayerReferences = (i2.engineLayerReferences || 0) + 1, this._materialIdReferences = i2.materialIdReferences, null == this._materialIdReferences && (this._materialIdReferences = /* @__PURE__ */ new Map(), i2.materialIdReferences = this._materialIdReferences), this._camera.copyFrom(this.view.state.camera), this._attached = true, this._updateEngineObject(), D$1(this._location.spatialReference, this.view.spatialReference) || (this.location = new x$1({ x: 0, y: 0, z: 0, spatialReference: this.view.spatialReference }));
  }
  detach(e2 = { manipulator3D: {} }) {
    const t2 = e2.manipulator3D;
    t2.engineLayerReferences--;
    const i2 = 0 === t2.engineLayerReferences;
    this._removeResourcesFromStage(), i2 && (t2.engineLayerId = null, u$2(this._engineLayer)), this._engineResources = null, this._engineLayer = null, this._materialIdReferences = null, this._attached = false;
  }
  onViewChange() {
    this._camera.copyFrom(this.view.state.camera), this._screenLocationDirty = true, this._updateEngineObject();
  }
  onElevationChange(e2) {
    I(this.location, me, e2.spatialReference) && F$1(e2.extent, me) && this._notifyLocationChanged();
  }
  _evaluateElevationAlignment() {
    if (null == this.elevationInfo)
      return;
    let e2 = null, t2 = 0;
    const i2 = this.elevationInfo.offset ?? 0;
    switch (this.elevationInfo.mode) {
      case "on-the-ground":
        e2 = a$2(this.view.elevationProvider, this.location, "ground") ?? 0;
        break;
      case "relative-to-ground":
        t2 = (a$2(this.view.elevationProvider, this.location, "ground") ?? 0) + i2;
        break;
      case "relative-to-scene":
        t2 = (a$2(this.view.elevationProvider, this.location, "scene") ?? 0) + i2;
        break;
      case "absolute-height":
        t2 = i2;
    }
    return t2 !== this._elevation.offset || e2 !== this._elevation.override ? (this._elevation.offset = t2, void (this._elevation.override = e2)) : void 0;
  }
  _updateEngineObject() {
    if (!this._attached)
      return;
    if (!this.available)
      return void this._removeResourcesFromStage();
    const e2 = this._getWorldToScreenObjectScale(), t$12 = ae;
    if (true === this.autoScaleRenderObjects) {
      const i3 = this._getFocusedSize(this._radius, this.focused) * e2;
      this._calculateObjectTransform(i3, t$12);
    } else
      this._calculateObjectTransform(e2, t$12);
    const { objectsByState: i2 } = this._ensureEngineResources(), s2 = (this.focused ? t.Focused : t.Unfocused) | (this.selected ? t.Selected : t.Unselected), o2 = this._noDisplayCount > 0;
    for (const { stateMask: n2, objects: r2 } of i2) {
      if (o2) {
        for (const e4 of r2)
          e4.visible = false;
        continue;
      }
      const e3 = (n2 & t.All) !== t.None, i3 = (n2 & u.All) !== u.None, a2 = !e3 || (s2 & n2) == (n2 & t.All), c2 = !i3 || (this.state & n2) == (n2 & u.All);
      if (a2 && c2)
        for (const s3 of r2)
          s3.visible = true, s3.transformation = t$12;
      else
        for (const t2 of r2)
          t2.visible = false;
    }
  }
  _ensureEngineResources() {
    if (null == this._engineResources) {
      const e2 = this._engineLayer, t2 = [], i2 = /* @__PURE__ */ new Set();
      this.renderObjects.forEach(({ geometry: { material: e3 } }) => {
        i2.has(e3) || (t2.push(e3), i2.add(e3));
      });
      const s2 = /* @__PURE__ */ new Map();
      this._renderObjects.forEach((e3) => {
        const t3 = new V({ castShadow: false, geometries: [e3.geometry] }), i3 = s2.get(e3.stateMask) || [];
        i3.push(t3), s2.set(e3.stateMask, i3);
      });
      const o2 = [];
      s2.forEach((e3, t3) => o2.push({ stateMask: t3, objects: e3 })), this._engineResources = { objectsByState: o2, layer: e2, materials: t2 };
    }
    return this._addResourcesToStage(), this._engineResources;
  }
  _addResourcesToStage() {
    const e2 = this._stage;
    if (this._engineResourcesAddedToStage || null == this._engineResources || !e2)
      return;
    const { objectsByState: t2, layer: i2, materials: s2 } = this._engineResources;
    s2.forEach((t3) => {
      const i3 = this._materialIdReferences, s3 = i3.get(t3.id) || 0;
      0 === s3 && e2.add(t3), i3.set(t3.id, s3 + 1);
    }), t2.forEach(({ objects: t3 }) => {
      i2.addMany(t3), e2.addMany(t3);
    }), this._engineResourcesAddedToStage = true;
  }
  _removeResourcesFromStage() {
    const e2 = this._stage;
    if (!this._engineResourcesAddedToStage || null == this._engineResources || !e2)
      return;
    const { objectsByState: t2, layer: i2, materials: s2 } = this._engineResources;
    t2.forEach(({ objects: t3 }) => {
      i2.removeMany(t3), e2.removeMany(t3);
    }), s2.forEach((t3) => {
      const i3 = this._materialIdReferences, s3 = i3.get(t3.id);
      1 === s3 ? (e2.remove(t3), i3.delete(t3.id)) : i3.set(t3.id, s3 - 1);
    }), this._engineResourcesAddedToStage = false;
  }
  _getCollisionRadius(e2) {
    return this._getFocusedSize(this.radius, true) * ("touch" === e2 ? this.touchMultiplier : 1);
  }
  _getFocusedSize(e2, t2) {
    return e2 * (t2 ? this.focusMultiplier : 1);
  }
  _getWorldToScreenObjectScale() {
    return this._worldSized ? 1 : this.screenLocation.pixelSize;
  }
  _calculateModelTransformPosition(e2) {
    const t2 = this._getWorldToScreenObjectScale(), i2 = this._calculateObjectTransform(t2, re);
    return o$2(e2, i2[12], i2[13], i2[14]);
  }
  _calculateModelTransformOffset(e2) {
    const t2 = this._calculateModelTransformPosition(e2);
    return e$3(e2, t2, this.renderLocation);
  }
  _calculateObjectTransform(e2, t2) {
    return s(t2, e2, 0, 0, 0, 0, e2, 0, 0, 0, 0, e2, 0, 0, 0, 0, 1), this._worldFrame && c$1(t2, t2, this._worldFrame), c$1(t2, t2, this._modelTransform), t2[12] += this.renderLocation[0], t2[13] += this.renderLocation[1], t2[14] += this.renderLocation[2], t2[15] = 1, null != this._applyObjectTransform && this._applyObjectTransform(t2), t2;
  }
  get test() {
    let e2 = false;
    if (null != this._engineResources)
      for (const t2 of this._engineResources.objectsByState) {
        for (const i2 of t2.objects)
          if (i2.visible) {
            e2 = true;
            break;
          }
        if (e2)
          break;
      }
    return { areAnyResourcesVisible: e2 };
  }
}
function ee(e2) {
  return 0 !== e2[12] || 0 !== e2[13] || 0 !== e2[14];
}
function te(e2, t2, i2) {
  switch (e2.viewingMode) {
    case "local":
      return r$1(i2), true;
    case "global": {
      const o2 = R(e2.renderCoordsHelper.spatialReference);
      return D$2(t2, 0, le, 0, o2.radius), n$3(M$2(le[0]), M$2(le[1]), i2), true;
    }
  }
}
const ie = i$1(), se = v$3(), oe = d(), ne = e$4(), re = e$1(), ae = e$1(), ce = b$2(), le = n$1(), he = n$1(), de = n$1(), _e = n$1(), ue = n$1(), ge = n$1(), me = new x$1({ x: 0, y: 0, z: 0, spatialReference: null }), fe = () => {
};
class e {
  constructor(e2, s2 = t.None) {
    this.geometry = e2, this.stateMask = s2;
  }
}
function o(o2, c2) {
  if (!c2.screenSizeEnabled)
    return;
  const n2 = o2.vertex;
  f$1(n2, c2), n2.uniforms.add(new o$3("perScreenPixelRatio", (e2, i2) => i2.camera.perScreenPixelRatio), new o$3("screenSizeScale", (e2) => e2.screenSizeScale)), n2.code.add(o$4`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`);
}
function p(e2) {
  const p2 = new o$5(), b2 = e2.multipassEnabled && (e2.output === o$6.Color || e2.output === o$6.Alpha);
  p2.include(o$7, e2), p2.include(o, e2), p2.include(P, e2);
  const { vertex: h2, fragment: C2 } = p2;
  return C2.include(e$5), d$2(h2, e2), C2.uniforms.add(new e$6("uColor", (e3) => e3.color)), p2.attributes.add(e$7.POSITION, "vec3"), p2.varyings.add("vWorldPosition", "vec3"), b2 && p2.varyings.add("depth", "float"), e2.screenSizeEnabled && p2.attributes.add(e$7.OFFSET, "vec3"), e2.shadingEnabled && (p$2(h2), p2.attributes.add(e$7.NORMAL, "vec3"), p2.varyings.add("vViewNormal", "vec3")), h2.code.add(o$4`
    void main(void) {
      vWorldPosition = ${e2.screenSizeEnabled ? "screenSizeScaling(offset, position)" : "position"};
  `), e2.shadingEnabled && h2.code.add(o$4`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`), h2.code.add(o$4`
    ${b2 ? "depth = (view * vec4(vWorldPosition, 1.0)).z;" : ""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `), b2 && p2.include(o$8, e2), C2.code.add(o$4`
    void main() {
      discardBySlice(vWorldPosition);
      ${b2 ? "terrainDepthTest(depth);" : ""}
    `), e2.shadingEnabled ? (C2.uniforms.add(new e$8("shadingDirection", (e3) => e3.shadingDirection)), C2.uniforms.add(new e$6("shadedColor", (e3) => w$2(e3.shadingTint, e3.color))), C2.code.add(o$4`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)) : C2.code.add(o$4`vec4 finalColor = uColor;`), C2.code.add(o$4`
      ${e2.output === o$6.ObjectAndLayerIdColor ? o$4`finalColor.a = 1.0;` : ""}
      if (finalColor.a < ${o$4.float(t$1)}) {
        discard;
      }
      ${e2.output === o$6.Alpha ? o$4`fragColor = vec4(finalColor.a);` : ""}

      ${e2.output === o$6.Color ? o$4`fragColor = highlightSlice(finalColor, vWorldPosition); ${e2.transparencyPassType === o$9.Color ? "fragColor = premultiplyAlpha(fragColor);" : ""}` : ""}
    }
    `), p2;
}
function w$2(e2, o2) {
  const r2 = 1 - e2[3], i2 = e2[3] + o2[3] * r2;
  return 0 === i2 ? (b$1[3] = i2, b$1) : (b$1[0] = (e2[0] * e2[3] + o2[0] * o2[3] * r2) / i2, b$1[1] = (e2[1] * e2[3] + o2[1] * o2[3] * r2) / i2, b$1[2] = (e2[2] * e2[3] + o2[2] * o2[3] * r2) / i2, b$1[3] = o2[3], b$1);
}
const b$1 = n$4(), h = Object.freeze(Object.defineProperty({ __proto__: null, build: p }, Symbol.toStringTag, { value: "Module" }));
class T extends r$3 {
  initializeProgram(e2) {
    return new r$4(e2.rctx, T.shader.get().build(this.configuration), v$2);
  }
  _setPipelineState(e2) {
    const r2 = this.configuration, o2 = e2 === o$9.NONE, i2 = e2 === o$9.FrontFace;
    return S$1({ blending: r2.output !== o$6.Color && r2.output !== o$6.Alpha || !r2.transparent ? null : o2 ? c$2 : A$1(e2), culling: h$1(r2.cullFace), depthTest: { func: i2 ? O$3.LESS : r2.shadingEnabled ? O$3.LEQUAL : O$3.LESS }, depthWrite: o2 ? r2.writeDepth ? o$a : null : E$1(e2), colorWrite: _, polygonOffset: o2 || i2 ? null : _$1 });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
}
T.shader = new t$2(h, () => import("./chunk-LAhYthiE.js"));
let j$1 = class j extends t$3 {
  constructor() {
    super(...arguments), this.output = o$6.Color, this.cullFace = e$a.None, this.transparencyPassType = o$9.NONE, this.hasSlicePlane = false, this.transparent = false, this.writeDepth = true, this.screenSizeEnabled = true, this.shadingEnabled = true, this.multipassEnabled = false, this.cullAboveGround = false;
  }
};
e$9([r$2({ count: o$6.COUNT })], j$1.prototype, "output", void 0), e$9([r$2({ count: e$a.COUNT })], j$1.prototype, "cullFace", void 0), e$9([r$2({ count: o$9.COUNT })], j$1.prototype, "transparencyPassType", void 0), e$9([r$2()], j$1.prototype, "hasSlicePlane", void 0), e$9([r$2()], j$1.prototype, "transparent", void 0), e$9([r$2()], j$1.prototype, "writeDepth", void 0), e$9([r$2()], j$1.prototype, "screenSizeEnabled", void 0), e$9([r$2()], j$1.prototype, "shadingEnabled", void 0), e$9([r$2()], j$1.prototype, "multipassEnabled", void 0), e$9([r$2()], j$1.prototype, "cullAboveGround", void 0), e$9([r$2({ constValue: false })], j$1.prototype, "occlusionPass", void 0);
const v$2 = /* @__PURE__ */ new Map([[e$7.POSITION, 0], [e$7.NORMAL, 1], [e$7.OFFSET, 2]]);
class j2 extends c$3 {
  constructor(e2) {
    super(e2, new v$1()), this.supportsEdges = true, this._configuration = new j$1(), this._vertexAttributeLocations = v$2;
  }
  getConfiguration(e2, t2) {
    return this._configuration.output = e2, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this._isTransparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.screenSizeEnabled = this.parameters.screenSizeEnabled, this._configuration.shadingEnabled = this.parameters.shadingEnabled, this._configuration.transparencyPassType = t2.transparencyPassType, this._configuration.multipassEnabled = t2.multipassEnabled, this._configuration.cullAboveGround = t2.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e2, s2, a2, c2, l, u2) {
    if (this.parameters.screenSizeEnabled) {
      const s3 = e2.attributes.get(e$7.OFFSET), h2 = { applyToVertex: (e3, n2, o2, c3) => {
        const l2 = o$2(z, s3.data[3 * c3], s3.data[3 * c3 + 1], s3.data[3 * c3 + 2]), u3 = o$2(L, e3, n2, o2);
        return g$1(l2, l2, this.parameters.screenSizeScale * a2.camera.computeScreenPixelSizeAt(l2)), u$1(u3, u3, l2), [u3[0], u3[1], u3[2]];
      }, applyToAabb: (e3) => {
        const t2 = E$2(e3, z);
        return _$2(e3, this.parameters.screenSizeScale * a2.camera.computeScreenPixelSizeAt(t2));
      } };
      h$2(e2, a2, c2, l, h2, u2);
    } else
      h$2(e2, a2, c2, l, void 0, u2);
  }
  produces(e2, t2) {
    if (t2 === o$6.Highlight)
      return e2 === A$2.OPAQUE_MATERIAL;
    if (t2 === o$6.Color || t2 === o$6.Alpha || t2 === o$6.ObjectAndLayerIdColor) {
      let t3 = A$2.OPAQUE_MATERIAL;
      return this._isTransparent && (t3 = this.parameters.writeDepth ? A$2.TRANSPARENT_MATERIAL : A$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL), e2 === t3 || e2 === A$2.DRAPED_MATERIAL;
    }
    return false;
  }
  createGLMaterial(e2) {
    return new O$1(e2);
  }
  createBufferWriter() {
    return new w$1(this.parameters.screenSizeEnabled);
  }
  get _isTransparent() {
    return this.parameters.color[3] < 1 || this.parameters.forceTransparentMode;
  }
}
let O$1 = class O extends t$4 {
  beginSlot(e2) {
    return this.ensureTechnique(T, e2);
  }
};
let v$1 = class v extends u$3 {
  constructor() {
    super(...arguments), this.color = r$5(1, 1, 1, 1), this.shadingTint = r$5(0, 0, 0, 0.25), this.shadingDirection = z$1(n$1(), [0.5, -0.5, -0.5]), this.screenSizeScale = 14, this.forceTransparentMode = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = e$a.None, this.screenSizeEnabled = false, this.shadingEnabled = true;
  }
};
let w$1 = class w {
  constructor(e2) {
    this.screenSizeEnabled = e2;
    const t2 = H().vec3f(e$7.POSITION).vec3f(e$7.NORMAL);
    this.screenSizeEnabled && t2.vec3f(e$7.OFFSET), this.vertexBufferLayout = t2;
  }
  elementCount(e2) {
    return e2.attributes.get(e$7.POSITION).indices.length;
  }
  write(e2, t2, r2, i$12, s2) {
    if (E(r2, this.vertexBufferLayout, e2, t2, i$12, s2), this.screenSizeEnabled) {
      if (!r2.attributes.has(e$7.OFFSET))
        throw new Error(`${e$7.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);
      {
        const e3 = r2.attributes.get(e$7.OFFSET);
        s$1(3 === e3.size);
        const a2 = i$12.getField(e$7.OFFSET, i);
        if (!a2)
          throw new Error("unable to acquire view for " + e$7.OFFSET);
        b$5(e3, t2, a2, s2);
      }
    }
  }
};
const z = n$1(), L = n$1();
function w2(t2, r2 = d$3.OccludeAndTransparent, n2 = true) {
  const o2 = D$3(t2), c2 = !(t2[3] < 1);
  return n2 ? new j2({ color: o2, writeDepth: c2, cullFace: e$a.Back, renderOccluded: r2, isDecoration: true }) : new f$2({ color: o2, writeDepth: c2, cullFace: e$a.Back, renderOccluded: r2, isDecoration: true });
}
function b(t2, r2 = d$3.OccludeAndTransparent) {
  const n2 = D$3(t2);
  return new f$2({ color: n2, writeDepth: true, cullFace: e$a.Front, renderOccluded: r2, isDecoration: true });
}
const O2 = Object.freeze({ calloutLength: 40, calloutWidth: 1, discRadius: 27, focusMultiplier: 1.1 });
const D = Object.freeze({ autoScaleRenderObjects: false, worldSized: true });
function F(e2, c$12, l, s2) {
  const u2 = e$3(c.get(), e2, l), m = M(u2, _$3(c.get(), s2, u2), l, f$3.get());
  h$3(m, m);
  const p2 = O$2(c.get(), c$12, m);
  return Math.atan2(p2[1], p2[0]);
}
function M(e2, t2, r2, o2) {
  const a2 = z$1(c.get(), e2), l = z$1(c.get(), t2), s2 = _$3(c.get(), a2, l);
  return o2[0] = a2[0], o2[1] = a2[1], o2[2] = a2[2], o2[3] = 0, o2[4] = l[0], o2[5] = l[1], o2[6] = l[2], o2[7] = 0, o2[8] = s2[0], o2[9] = s2[1], o2[10] = s2[2], o2[11] = 0, o2[12] = r2[0], o2[13] = r2[1], o2[14] = r2[2], o2[15] = 1, o2;
}
function k(e2, t2) {
  const r2 = e2.getViewForGraphic(t2);
  return null != r2 && "computeAttachmentOrigin" in r2 ? r2.computeAttachmentOrigin(t2, e2.spatialReference) : null;
}
function v2(e2, t2, r2) {
  const n2 = k(e2, r2);
  null == n2 ? A(t2, r2.geometry) : t2.elevationAlignedLocation = n2;
}
function A(e2, t2) {
  if (null == t2)
    return;
  const r2 = "mesh" === t2.type ? t2.anchor : w$3(t2);
  null != r2 && (e2.location = u$4(r2));
}
export {
  $,
  D,
  F,
  M,
  O2 as O,
  b,
  e,
  j2 as j,
  k,
  p,
  v2 as v,
  w2 as w
};
