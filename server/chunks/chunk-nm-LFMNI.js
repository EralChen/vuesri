import { AT as o$3, AU as o$4, AV as f$2, Aq as i$4, AW as B$1, i0 as f$3, AX as b$1, AY as p$2, AZ as I, A_ as D$1, A$ as h$4, o4 as c$6, bD as a$3, B0 as L$1, B1 as T, B2 as x$1, B3 as w$1, B4 as P$1, B5 as u$4, B6 as A$2, B7 as F$2, i1 as K, id as u$5, B8 as E, B9 as z, aT as s$2, Ba as t$4, gg as e$1, Bb as ot, ds as o$5, t as t$5, fg as r$6, n_ as o$6, b0 as has, tP as a$4, tQ as c$7, tR as s$3, kR as h$5, tO as i$5, Bc as e$2, ma as r$7, mb as R$1, mc as E$1, b as e$3, o as o$7, Bd as t$6, h as h$6, ml as F$3, cz as t$7, Be as u$6, u4 as t$8, lG as e$7, cL as G$2, fq as D$2, m as m$3, qi as f$5, aQ as U$1, qW as n$6, cy as o$9, g7 as m$4, ky as u$7, cx as $$1, aO as s$4, Bf as e$8, Bg as _$3, Bh as _$4, cU as s$5, cd as b$2, at as s$6, Bi as A$3, Bj as b$3, Bk as j$1, cK as L$2, Bl as f$7, Bm as i$8, Bn as j$2, A4 as M, Bo as y, Bp as tt, bC as L$3, x3 as w$2, Bq as pt, Br as ft, aW as n$7, m9 as e$9, o7 as O$1, o9 as I$1, lD as h$7, fF as o$a, xS as l$6, mi as f$8, mk as h$8, mg as M$1, ug as r$9, ui as u$8, mo as M$2, cA as n$8, cu as E$2, Bs as I$2, Bt as t$9, Bu as i$9, wf as t$a, md as C, Bv as J, Bw as o$b, x as x$2, Bx as i$a, By as B$2, Bz as T$1, cJ as U, BA as m$5, s as s$7, zi as T$2, o8 as N$2, n$ as h$9, qI as h$a, eP as r$b, BB as s$8, lC as w$3, BC as e$a, m6 as A$4, BD as i$b, g8 as l$7, BE as vt, cM as P$2, BF as w$4, BG as s$9, m8 as i$c, nF as e$b, c8 as u$9, fc as e$c, ce as d$1, bX as P$3, es as e$d, fb as d$2, BH as s$a, BI as m$6, BJ as Pt } from "./chunk-ejFG4zJ0.js";
import { f as f$4, m as m$2, e as e$6, a as a$5 } from "./chunk-BRDTP7A8.js";
import { l as l$5 } from "./chunk-Mke_bPEP.js";
import { p as p$3 } from "./chunk-Cz0_inS0.js";
import { e as e$4, r as r$8, t as t$b, a as r$a, n as n$9, b as t$c, c as a$6 } from "./chunk-a-_9RY_Z.js";
import { d, f } from "./chunk-a-_9RY_Z.js";
import { o as o$8 } from "./chunk-tWyHFLJd.js";
import { i as i$7 } from "./chunk-t6eBKp3U.js";
import { e as e$5, i as i$6 } from "./chunk-nvycIlGH.js";
import { f as f$6 } from "./chunk-uHRm7Cl7.js";
import { F as F$4, T as T$3 } from "./chunk-xXBI18-w.js";
import { $ } from "./chunk-bVBkTso-.js";
import { t } from "./chunk-Ds4Mh7HH.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-GcIahY26.js";
import "./chunk-jrhFla2W.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-drfK378b.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-YBgi6goH.js";
const V = () => s$2.getLogger("esri.symbols.cim.cimAnalyzer");
function N$1(e2) {
  const r6 = e2.markerPlacement;
  return r6 && r6.angleToLine ? i$4.MAP : i$4.SCREEN;
}
class w {
  constructor(e2) {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [], e2 && (this._resourceManager = e2);
  }
  analyzeSymbolReference(r6, t5, i3) {
    if (this._cimLayers = i3 ?? [], !r6)
      return this._cimLayers;
    if (this._reset(), r6.primitiveOverrides) {
      this._primitiveOverrides = r6.primitiveOverrides;
      for (const r7 of this._primitiveOverrides) {
        const t6 = r7.valueExpressionInfo;
        if (t6)
          this._setPoMap(r7.primitiveName, r7.propertyName, t6);
        else if (null != r7.value) {
          let t7 = r7.value;
          r7.propertyName.includes("Color") && (o$3(t7) && (t7 = o$4(t7)), t7 = f$2(t7)), this._setPoMap(r7.primitiveName, r7.propertyName, t7);
        }
      }
    }
    return this._analyzeSymbol(r6.symbol, t5), this._cimLayers;
  }
  _reset() {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [];
  }
  _analyzeSymbol(e2, r6) {
    switch (e2?.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this._analyzeMultiLayerSymbol(e2, r6);
    }
  }
  _analyzeMultiLayerSymbol(e2, r6) {
    const t5 = e2?.symbolLayers;
    if (!t5)
      return;
    const i3 = e2.effects;
    let o2 = i$4.SCREEN;
    const a4 = B$1(e2) ?? 0;
    "CIMPointSymbol" === e2.type && "Map" === e2.angleAlignment && (o2 = i$4.MAP);
    const s3 = "CIMPolygonSymbol" === e2.type;
    let l4 = t5.length;
    for (; l4--; ) {
      const n4 = t5[l4];
      if (!n4 || false === n4.enable)
        continue;
      let p3;
      i3?.length && (p3 = [...i3]);
      const m3 = n4.effects;
      m3?.length && (i3 ? p3.push(...m3) : p3 = [...m3]);
      let y2 = null;
      if (p3) {
        y2 = [];
        for (const e3 of p3) {
          const r7 = f$3.findEffectOverrides(e3, this._primitiveOverrides);
          r7 && y2.push(r7);
        }
      }
      const f3 = [];
      switch (f$3.findApplicableOverrides(n4, this._primitiveOverrides, f3), n4.type) {
        case "CIMSolidFill":
          this._analyzeSolidFill(n4, y2);
          break;
        case "CIMPictureFill":
          this._analyzePictureFill(n4, y2);
          break;
        case "CIMHatchFill":
          this._analyzeHatchFill(n4, y2);
          break;
        case "CIMGradientFill":
          this._analyzeGradientFill(n4, y2);
          break;
        case "CIMSolidStroke":
          this._analyzeSolidStroke(n4, y2, s3, a4);
          break;
        case "CIMPictureStroke":
          this._analyzePictureStroke(n4, y2, s3, a4);
          break;
        case "CIMGradientStroke":
          this._analyzeGradientStroke(n4, y2, s3, a4);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker": {
          "CIMLineSymbol" !== e2.type && "CIMPolygonSymbol" !== e2.type || (o2 = N$1(n4));
          const t6 = [], i4 = n4.primitiveName;
          i4 && t6.push(i4);
          const l5 = s3 && b$1(n4.markerPlacement);
          this._analyzeMarker(n4, y2, null, t6, o2, a4, r6, [], false, l5);
          break;
        }
        default:
          V().error("Cannot analyze CIM layer", n4.type);
      }
    }
  }
  _analyzeSolidFill(e2, r6) {
    const { primitiveName: t5, type: i3 } = e2, o2 = f$2(e2.color);
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e2.colorLocked, color: this._getValueOrOverrideExpression(i3, t5, "Color", o2), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: r6, applyRandomOffset: false, sampleAlphaOnly: true, hasUnresolvedReplacementColor: false });
  }
  _analyzePictureFill(e2, r6) {
    const { primitiveName: t5, type: i3 } = e2, o2 = p$2(e2), a4 = I(e2.height, t$4.CIMPictureFill.height);
    let s3 = I(e2.scaleX, 1);
    if ("width" in e2 && "number" == typeof e2.width) {
      const r7 = e2.width;
      let t6 = 1;
      const i4 = this._resourceManager.getResource(e2.url);
      null != i4 && (t6 = i4.width / i4.height), s3 /= t6 * (a4 / r7);
    }
    const l4 = { type: "sprite-rasterization-param", resource: e2, overrides: this._getPrimitiveMaterialOverrides(t5, i3) };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: l4, colorLocked: !!e2.colorLocked, effects: r6, color: this._getValueOrOverrideExpression(i3, t5, "TintColor", o2), height: this._getValueOrOverrideExpression(i3, t5, "Height", a4), scaleX: this._getValueOrOverrideExpression(i3, t5, "ScaleX", s3), angle: this._getValueOrOverrideExpression(i3, t5, "Rotation", I(e2.rotation)), offsetX: this._getValueOrOverrideExpression(i3, t5, "OffsetX", I(e2.offsetX)), offsetY: this._getValueOrOverrideExpression(i3, t5, "OffsetY", I(e2.offsetY)), applyRandomOffset: false, sampleAlphaOnly: false, hasUnresolvedReplacementColor: false });
  }
  _analyzeHatchFill(e2, r6) {
    const { primitiveName: t5, type: i3 } = e2, o2 = this._analyzeMaterialOverrides(t5, ["Rotation", "OffsetX", "OffsetY"]), a4 = this._normalizePrimitiveOverrideProps(o2);
    let s3 = [255, 255, 255, 1], l4 = false;
    if (e2.lineSymbol?.symbolLayers)
      for (const n4 of e2.lineSymbol.symbolLayers) {
        if ("CIMSolidStroke" !== n4.type)
          continue;
        const e3 = n4.primitiveName ?? t5;
        l4 || !e3 || n4.colorLocked || null == this._poMap[e3]?.Color && null == this._poMap[e3]?.StrokeColor || (s3 = f$2(n4.color), s3 = this._maybeGetValueOrOverrideExpression(e3, "StrokeColor") ?? this._getValueOrOverrideExpression(i3, e3, "Color", s3), l4 = true);
        const r7 = this._maybeGetValueOrOverrideExpression(e3, "StrokeWidth");
        if (r7) {
          let t6 = null, o3 = null;
          "number" == typeof r7 ? t6 = r7 : o3 = r7.valueExpressionInfo;
          let s4 = a4.find((e4) => "strokeWidth" === e4.propertyName);
          s4 ? s4.propertyName = "width" : (s4 = { type: "CIMPrimitiveOverride", primitiveName: e3, propertyName: "width", valueExpressionInfo: o3, value: t6, defaultValue: D$1(i3, "width") }, a4.push(s4));
        }
      }
    const p3 = { type: "sprite-rasterization-param", resource: e2, overrides: a4 };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: p3, colorLocked: !!e2.colorLocked, effects: r6, color: s3, height: this._getValueOrOverrideExpression(i3, t5, "Separation", I(e2.separation, t$4.CIMHatchFill.separation)), scaleX: 1, angle: this._getValueOrOverrideExpression(i3, t5, "Rotation", I(e2.rotation)), offsetX: this._getValueOrOverrideExpression(i3, t5, "OffsetX", I(e2.offsetX)), offsetY: this._getValueOrOverrideExpression(i3, t5, "OffsetY", I(e2.offsetY)), applyRandomOffset: false, sampleAlphaOnly: true, hasUnresolvedReplacementColor: !l4 });
  }
  _analyzeGradientFill(e2, r6) {
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e2.colorLocked, effects: r6, color: [128, 128, 128, 1], height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: false, sampleAlphaOnly: false, hasUnresolvedReplacementColor: false });
  }
  _analyzeSolidStroke(e2, r6, t5, i3) {
    const { primitiveName: o2, type: a4 } = e2, s3 = f$2(e2.color), l4 = I(e2.width, t$4.CIMSolidStroke.width), p3 = h$4(e2.capStyle, t$4.CIMSolidStroke.capstyle), c4 = h$4(e2.joinStyle, t$4.CIMSolidStroke.joinstyle), m3 = e2.miterLimit;
    let y2, f3, d3 = [];
    if (this._analyzePrimitiveOverrides(o2, r6, null, null) && (d3 = this._getPrimitiveMaterialOverrides(o2, a4)), r6 && r6 instanceof Array && r6.length > 0) {
      const e3 = r6[r6.length - 1].effect;
      e3 && "CIMGeometricEffectDashes" === e3.type && "NoConstraint" === e3.lineDashEnding && null === e3.offsetAlongLine && (y2 = e3.dashTemplate, f3 = e3.scaleDash, (r6 = [...r6]).pop());
    }
    const u4 = void 0 !== y2 ? { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: y2, capStyle: p3 }, overrides: d3 } : null;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: u4, isOutline: t5, colorLocked: !!e2.colorLocked, effects: r6, color: this._getValueOrOverrideExpression(a4, o2, "Color", s3), width: this._getValueOrOverrideExpression(a4, o2, "Width", l4), cap: this._getValueOrOverrideExpression(a4, o2, "CapStyle", p3), join: this._getValueOrOverrideExpression(a4, o2, "JoinStyle", c4), miterLimit: m3 && this._getValueOrOverrideExpression(a4, o2, "MiterLimit", m3), referenceWidth: i3, zOrder: R(e2.name), dashTemplate: y2, scaleDash: f3, sampleAlphaOnly: true });
  }
  _analyzePictureStroke(e2, r6, t5, i3) {
    const { primitiveName: o2, type: a4 } = e2, s3 = p$2(e2), l4 = I(e2.width, t$4.CIMPictureStroke.width), p3 = h$4(e2.capStyle, t$4.CIMPictureStroke.capstyle), c4 = h$4(e2.joinStyle, t$4.CIMPictureStroke.joinstyle), m3 = e2.miterLimit, y2 = { type: "sprite-rasterization-param", resource: e2, overrides: this._getPrimitiveMaterialOverrides(o2, a4) };
    this._cimLayers.push({ type: "line", spriteRasterizationParam: y2, isOutline: t5, colorLocked: !!e2.colorLocked, effects: r6, color: this._getValueOrOverrideExpression(a4, o2, "TintColor", s3), width: this._getValueOrOverrideExpression(a4, o2, "Width", l4), cap: this._getValueOrOverrideExpression(a4, o2, "CapStyle", p3), join: this._getValueOrOverrideExpression(a4, o2, "JoinStyle", c4), miterLimit: m3 && this._getValueOrOverrideExpression(a4, o2, "MiterLimit", m3), referenceWidth: i3, zOrder: R(e2.name), dashTemplate: null, scaleDash: false, sampleAlphaOnly: false });
  }
  _analyzeGradientStroke(e2, r6, t5, i3) {
    const { primitiveName: o2, type: a4 } = e2, s3 = I(e2.width, t$4.CIMSolidStroke.width), l4 = h$4(e2.capStyle, t$4.CIMGradientStroke.capstyle), p3 = h$4(e2.joinStyle, t$4.CIMGradientStroke.joinstyle), c4 = e2.miterLimit;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: null, isOutline: t5, colorLocked: !!e2.colorLocked, effects: r6, color: [128, 128, 128, 1], width: this._getValueOrOverrideExpression(a4, o2, "Width", s3), cap: this._getValueOrOverrideExpression(a4, o2, "CapStyle", l4), join: this._getValueOrOverrideExpression(a4, o2, "JoinStyle", p3), miterLimit: c4 && this._getValueOrOverrideExpression(a4, o2, "MiterLimit", c4), referenceWidth: i3, zOrder: R(e2.name), dashTemplate: null, scaleDash: false, sampleAlphaOnly: false });
  }
  _analyzeMarker(e2, r6, t5, i3, o2, a4, s3, l4, p3 = false, c4 = false) {
    if (p3 ||= !!e2.colorLocked, this._analyzeMarkerInsidePolygon(e2, r6, p3))
      return;
    const m3 = I(e2.size, t$4.CIMVectorMarker.size), y2 = I(e2.rotation), f3 = I(e2.offsetX), h4 = I(e2.offsetY), { primitiveName: d3, type: u4 } = e2, v2 = this._getValueOrOverrideExpression(u4, d3, "Size", m3), _3 = this._getValueOrOverrideExpression(u4, d3, "Rotation", y2), g2 = this._getValueOrOverrideExpression(u4, d3, "OffsetX", f3), S = this._getValueOrOverrideExpression(u4, d3, "OffsetY", h4);
    switch (e2.type) {
      case "CIMPictureMarker":
        this._analyzePictureMarker(e2, r6, t5, i3, o2, a4, v2, _3, g2, S, l4, p3, c4);
        break;
      case "CIMVectorMarker":
        this._analyzeVectorMarker(e2, r6, t5, i3, o2, a4, v2, _3, g2, S, l4, s3, p3, c4);
    }
  }
  _analyzeMarkerInsidePolygon(e2, r6, t5) {
    const { markerPlacement: i3, type: o2 } = e2;
    if (!i3 || "CIMMarkerPlacementInsidePolygon" !== i3.type)
      return false;
    if ("CIMVectorMarker" === o2 || "CIMPictureMarker" === o2) {
      const t6 = e2.primitiveName;
      if (t6 && this._analyzePrimitiveOverrides([t6], r6, null, null))
        return false;
      const a4 = i3.primitiveName;
      if (a4 && this._analyzePrimitiveOverrides([a4], r6, null, null))
        return false;
      if ("CIMVectorMarker" === o2) {
        const { markerGraphics: r7 } = e2;
        if (r7)
          for (const e3 of r7) {
            const { symbol: r8 } = e3;
            if ("CIMPolygonSymbol" === r8?.type && r8.symbolLayers) {
              const { symbolLayers: e4 } = r8;
              for (const r9 of e4)
                if ("CIMSolidStroke" === r9.type)
                  return false;
            }
          }
      } else {
        const { animatedSymbolProperties: r7 } = e2;
        if (r7)
          return false;
      }
    }
    const s3 = Math.abs(i3.stepX), l4 = Math.abs(i3.stepY);
    if (0 === s3 || 0 === l4)
      return true;
    let n4, p3;
    if ("Random" === i3.gridType) {
      const e3 = e$1(ot), r7 = Math.max(Math.floor(e3 / s3), 1);
      n4 = l4 * Math.max(Math.floor(e3 / l4), 1);
      p3 = r7 * s3 / n4;
    } else
      i3.shiftOddRows ? (n4 = 2 * l4, p3 = s3 / l4 * 0.5) : (n4 = l4, p3 = s3 / l4);
    const c4 = p$2(e2), m3 = "CIMCharacterMarker" === e2.type ? null : { type: "sprite-rasterization-param", resource: e2, overrides: [] };
    return this._cimLayers.push({ type: "fill", spriteRasterizationParam: m3, colorLocked: t5, effects: r6, color: c4, height: n4, scaleX: p3, angle: i3.gridAngle, offsetX: I(i3.offsetX), offsetY: I(i3.offsetY), applyRandomOffset: "Random" === i3.gridType, sampleAlphaOnly: "CIMPictureMarker" !== e2.type, hasUnresolvedReplacementColor: true }), true;
  }
  _analyzePictureMarker(e2, r6, i3, o2, a4, l4, n4, p3, c4, m3, y2, f3, h4) {
    const { primitiveName: d3, type: u4 } = e2;
    let _3 = I(e2.scaleX, 1);
    const g2 = p$2(e2);
    i3 || (i3 = this._createMarkerPlacementOverrideExpression(e2.markerPlacement));
    const S = this._createAnimatedSymbolPropertiesOverrideExpression(e2.animatedSymbolProperties), k2 = e2.anchorPoint ?? { x: 0, y: 0 };
    if ("width" in e2 && "number" == typeof e2.width) {
      const r7 = e2.width;
      let t5 = 1;
      const i4 = this._resourceManager.getResource(e2.url);
      null != i4 && (t5 = i4.width / i4.height);
      _3 /= t5 * (I(e2.size) / r7);
    }
    const M2 = [...o2];
    let P2;
    e2.primitiveName && M2.push(e2.primitiveName), e2.animatedSymbolProperties || S ? P2 = { type: "animated", url: e2.url, urlHash: "H" + c$6(e2.url), playAnimation: e2.animatedSymbolProperties?.playAnimation, reverseAnimation: e2.animatedSymbolProperties?.reverseAnimation, randomizeStartTime: e2.animatedSymbolProperties?.randomizeStartTime, randomizeStartSeed: e2.animatedSymbolProperties?.randomizeStartSeed, startTimeOffset: e2.animatedSymbolProperties?.startTimeOffset, duration: e2.animatedSymbolProperties?.duration, repeatType: e2.animatedSymbolProperties?.repeatType, repeatDelay: e2.animatedSymbolProperties?.repeatDelay } : (P2 = a$3(e2), P2.markerPlacement = null);
    const b2 = { type: "sprite-rasterization-param", resource: P2, overrides: this._getMaterialOverrides(M2, u4) };
    S && b2.overrides.push(...S.overrides), this._cimLayers.push({ type: "marker", spriteRasterizationParam: b2, colorLocked: f3, effects: r6, scaleSymbolsProportionally: false, alignment: a4, size: n4, scaleX: this._getValueOrOverrideExpression(u4, d3, "ScaleX", _3), rotation: p3, offsetX: c4, offsetY: m3, transform: { type: "cim-marker-transform-param", params: y2 }, color: this._getValueOrOverrideExpression(u4, d3, "TintColor", g2), anchorPoint: { x: k2.x, y: k2.y }, isAbsoluteAnchorPoint: "Relative" !== e2.anchorPointUnits, outlineColor: [0, 0, 0, 0], outlineWidth: 0, frameHeight: 0, widthRatio: 1, rotateClockwise: !!e2.rotateClockwise, referenceSize: l4, sizeRatio: 1, isOutline: h4, markerPlacement: i3, animatedSymbolProperties: S });
  }
  _analyzeVectorMarker(e2, r6, t5, i3, o2, a4, s3, l4, n4, p3, c4, m3, y2, f3) {
    const h4 = e2.markerGraphics;
    if (!h4)
      return;
    const d3 = e2.frame;
    let u4 = 0;
    if (u4 = d3 ? d3.ymax - d3.ymin : a4, u4) {
      const r7 = { offsetX: n4, offsetY: p3, rotation: l4, size: s3, frameHeight: u4, rotateClockWise: !!e2.rotateClockwise };
      c4 = [...c4, r7];
    }
    t5 || (t5 = this._createMarkerPlacementOverrideExpression(e2.markerPlacement));
    for (const v2 of h4)
      if (v2) {
        const s4 = v2.symbol;
        if (!s4)
          continue;
        const l5 = v2.primitiveName;
        let n5;
        if (l5 && i3.push(l5), ("CIMPointSymbol" === s4.type || "CIMTextSymbol" === s4.type) && d3) {
          let r7 = 0, t6 = 0;
          const i4 = v2.geometry;
          "x" in i4 && "y" in i4 && (r7 += i4.x - 0.5 * (d3.xmin + d3.xmax), t6 += i4.y - 0.5 * (d3.ymin + d3.ymax));
          const o3 = e2.anchorPoint;
          o3 && ("Absolute" === e2.anchorPointUnits ? (r7 -= o3.x, t6 -= o3.y) : d3 && (r7 -= (d3.xmax - d3.xmin) * o3.x, t6 -= (d3.ymax - d3.ymin) * o3.y));
          const a5 = { offsetX: r7, offsetY: t6, rotation: 0, size: 0, frameHeight: 0, rotateClockWise: false };
          n5 = [...c4, a5];
        }
        switch (s4.type) {
          case "CIMPointSymbol":
          case "CIMLineSymbol":
          case "CIMPolygonSymbol":
            m3 || X(s4) ? this._analyzeMultiLayerGraphicNonSDF(e2, r6, t5, null, v2, i3, o2, a4, n5 ?? c4, u4, y2, f3) : this._analyzeMultiLayerGraphic(e2, r6, t5, null, v2, i3, o2, a4, n5 ?? c4, u4, y2, f3);
            break;
          case "CIMTextSymbol":
            this._analyzeTextGraphic(r6, t5, v2, i3, o2, a4, n5 ?? c4, y2);
        }
        l5 && i3.pop();
      }
  }
  _analyzeMultiLayerGraphic(e2, r6, t5, i3, o2, a4, s3, l4, n4, p3, c4, f3) {
    const d3 = o2.symbol, u4 = d3.symbolLayers;
    if (!u4)
      return;
    let v2 = u4.length;
    if (G$1(u4))
      return void this._analyzeCompositeMarkerGraphic(e2, r6, t5, i3, o2, u4, s3, l4, n4, p3, c4, f3);
    const O2 = this._resourceManager.geometryEngine, _3 = l$5.applyEffects(d3.effects, o2.geometry, O2);
    if (_3)
      for (; v2--; ) {
        const d4 = u4[v2];
        if (!d4 || false === d4.enable)
          continue;
        const g2 = d4.primitiveName;
        switch (g2 && a4.push(g2), d4.type) {
          case "CIMSolidFill":
          case "CIMSolidStroke": {
            const a5 = l$5.applyEffects(d4.effects, _3, O2), u5 = f$4(a5);
            if (!u5)
              continue;
            const v3 = "Relative" !== e2.anchorPointUnits, [P2, b2, C2, z2] = m$2(u5, e2.frame, e2.size, e2.anchorPoint, v3), x2 = "CIMSolidFill" === d4.type, L2 = { type: "sdf", geom: a5, asFill: x2 }, { path: I2 } = d4, V2 = x2 ? f$2(L$1(d4)) : null == I2 ? f$2(T(d4)) : [0, 0, 0, 0], N2 = x2 ? [0, 0, 0, 0] : f$2(T(d4)), w2 = x$1(d4) ?? 0;
            if (!x2 && !w2)
              break;
            const R2 = o2.primitiveName;
            let A2 = null;
            x2 && !d4.colorLocked && (A2 = this._maybeGetValueOrOverrideExpression(R2, "FillColor"));
            let G2 = null;
            x2 || d4.colorLocked || (G2 = this._maybeGetValueOrOverrideExpression(R2, "StrokeColor"));
            const X2 = A2 ?? this._getValueOrOverrideExpression(d4.type, g2, "Color", V2), F2 = G2 ?? this._getValueOrOverrideExpression(d4.type, g2, "Color", N2), T$12 = this._maybeGetValueOrOverrideExpression(R2, "StrokeWidth") ?? this._getValueOrOverrideExpression(d4.type, g2, "Width", w2), Y = I2 ? { type: "sprite-rasterization-param", resource: { type: "path", path: I2, asFill: x2 }, overrides: [] } : { type: "sprite-rasterization-param", resource: L2, overrides: [] };
            this._cimLayers.push({ type: "marker", spriteRasterizationParam: Y, colorLocked: !!d4.colorLocked || !!c4, effects: r6, scaleSymbolsProportionally: !!e2.scaleSymbolsProportionally, alignment: s3, anchorPoint: { x: b2, y: C2 }, isAbsoluteAnchorPoint: v3, size: p3, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: n4 }, frameHeight: p3, widthRatio: z2, rotateClockwise: false, referenceSize: l4, sizeRatio: P2, color: X2, outlineColor: F2, outlineWidth: T$12, isOutline: f3, markerPlacement: t5, animatedSymbolProperties: i3 });
            break;
          }
          case "CIMPictureMarker":
          case "CIMVectorMarker":
            d4.markerPlacement ? this._analyzeMultiLayerGraphicNonSDF(e2, r6, t5, i3, o2, a4, s3, l4, n4, p3, !!d4.colorLocked || !!c4, f3) : this._analyzeMarker(d4, r6, t5, a4, s3, l4, false, n4, c4, f3);
            break;
          default:
            this._analyzeMultiLayerGraphicNonSDF(e2, r6, t5, i3, o2, a4, s3, l4, n4, p3, !!d4.colorLocked || !!c4, f3);
        }
        g2 && a4.pop();
      }
  }
  _analyzeTextGraphic(e2, t5, i3, o2, a4, s3, l4, p3) {
    const m3 = [];
    f$3.findApplicableOverrides(i3, this._primitiveOverrides, m3);
    const y2 = i3.geometry;
    if (!("x" in y2) || !("y" in y2))
      return;
    const f3 = i3.symbol, d3 = w$1(f3), u4 = P$1(f3.fontStyleName), v2 = u$4(f3.fontFamilyName);
    f3.font = { family: v2, decoration: d3, ...u4 };
    const _3 = I(f3.height, t$4.CIMTextSymbol.height), g2 = I(f3.angle), x2 = I(f3.offsetX), L2 = I(f3.offsetY), E2 = f$2(L$1(f3));
    let I$12 = f$2(T(f3)), V2 = x$1(f3) ?? 0;
    V2 || (I$12 = f$2(L$1(f3.haloSymbol)), V2 = I(f3.haloSize));
    let N2 = false;
    if (f3.symbol?.symbolLayers)
      for (const r6 of f3.symbol.symbolLayers) {
        null != f$2(L$1(r6)) && (N2 = !!r6.colorLocked);
      }
    const w2 = i3.primitiveName;
    let R2 = null;
    N2 || (R2 = this._maybeGetValueOrOverrideExpression(w2, "FillColor"));
    const A2 = this._maybeGetValueOrOverrideExpression(w2, "TextSize"), G2 = this._maybeGetValueOrOverrideExpression(w2, "TextAngle"), X2 = this._maybeGetValueOrOverrideExpression(w2, "TextOffsetX"), F2 = this._maybeGetValueOrOverrideExpression(w2, "TextOffsetY");
    let T$12 = null, Y = null, j2 = 0;
    if (f3.callout && "CIMBackgroundCallout" === f3.callout.type) {
      const e3 = f3.callout;
      if (e3.backgroundSymbol) {
        const r6 = e3.backgroundSymbol.symbolLayers;
        if (r6)
          for (const e4 of r6)
            "CIMSolidFill" === e4.type ? T$12 = f$2(e4.color) : "CIMSolidStroke" === e4.type && (Y = f$2(e4.color), j2 = I(e4.width, t$4.CIMSolidStroke.width));
      }
    }
    const W = this._getValueOrOverrideExpression(f3.type, i3.primitiveName, "TextString", i3.textString ?? "");
    if (null == W)
      return;
    const { fontStyleName: D2 } = f3, H = v2 + (D2 ? "-" + D2.toLowerCase() : "-regular"), U2 = this._getMaterialOverrides(o2, f3.type);
    U2.push(...this._getPrimitiveMaterialOverrides(i3.primitiveName, f3.type));
    const J2 = { type: "text-rasterization-param", resource: { type: "text", textString: i3.textString ?? "", font: f3.font, symbol: f3, primitiveName: i3.primitiveName }, overrides: U2 };
    this._cimLayers.push({ type: "text", lineWidth: null, textRasterizationParam: J2, colorLocked: !!p3 || !!N2, effects: e2, alignment: a4, anchorPoint: { x: 0, y: 0 }, isAbsoluteAnchorPoint: false, fontName: H, decoration: d3, weight: u4.weight, style: u4.style, size: A2 ?? _3, angle: G2 ?? g2, offsetX: X2 ?? x2, offsetY: F2 ?? L2, transform: { type: "cim-marker-transform-param", params: l4 }, horizontalAlignment: A$2(f3.horizontalAlignment), verticalAlignment: F$2(f3.verticalAlignment), text: W, color: R2 ?? this._getValueOrOverrideExpression(f3.type, i3.primitiveName, "Color", E2), outlineColor: I$12, outlineSize: V2, backgroundColor: T$12, borderLineColor: Y, borderLineWidth: j2, referenceSize: s3, sizeRatio: 1, markerPlacement: t5 });
  }
  _analyzeMultiLayerGraphicNonSDF(e2, r6, t5, i3, a4, s3, n4, p3, c4, m3, y2, f3) {
    const h4 = this._buildSimpleMarker(e2, a4), d3 = e2.primitiveName, u4 = this._analyzeMaterialOverrides(d3, ["Rotation", "OffsetX", "OffsetY"]), v2 = this._normalizePrimitiveOverrideProps(u4), [O2, _3, g2] = K.getTextureAnchor(h4, this._resourceManager), S = this._getMaterialOverrides(s3, e2.type);
    S.push(...v2);
    const k2 = { type: "sprite-rasterization-param", resource: { ...h4, avoidSDFRasterization: true }, overrides: S };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: k2, colorLocked: y2, effects: r6, scaleSymbolsProportionally: !!e2.scaleSymbolsProportionally, alignment: n4, anchorPoint: { x: O2, y: _3 }, isAbsoluteAnchorPoint: false, size: m3, rotation: 0, offsetX: 0, offsetY: 0, transform: { type: "cim-marker-transform-param", params: c4 }, color: [255, 255, 255, 1], outlineColor: [0, 0, 0, 0], outlineWidth: 0, scaleX: 1, frameHeight: m3, widthRatio: 1, rotateClockwise: !!e2.rotateClockwise, referenceSize: p3, sizeRatio: g2 / u$5(e2.size), isOutline: f3, markerPlacement: t5, animatedSymbolProperties: i3 });
  }
  _createMarkerPlacementOverrideExpression(e2) {
    if (!e2)
      return null;
    const r6 = [];
    return f$3.findApplicableOverrides(e2, this._primitiveOverrides, r6), { type: "cim-marker-placement-info", placement: e2, overrides: F$1(r6) };
  }
  _createAnimatedSymbolPropertiesOverrideExpression(e2) {
    if (!e2)
      return null;
    const r6 = [];
    return f$3.findApplicableOverrides(e2, this._primitiveOverrides, r6), { type: "cim-animation-info", animation: e2, overrides: F$1(r6) };
  }
  _buildSimpleMarker(e2, r6) {
    return { type: e2.type, enable: true, name: e2.name, colorLocked: e2.colorLocked, primitiveName: e2.primitiveName, anchorPoint: e2.anchorPoint, anchorPointUnits: e2.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e2.rotateClockwise, rotation: 0, size: e2.size, billboardMode3D: e2.billboardMode3D, depth3D: e2.depth3D, frame: e2.frame, markerGraphics: [r6], scaleSymbolsProportionally: e2.scaleSymbolsProportionally, respectFrame: e2.respectFrame, clippingPath: e2.clippingPath };
  }
  _analyzeCompositeMarkerGraphic(e2, r6, t5, i3, o2, a4, s3, l4, p3, c4, f3, d3) {
    const u4 = o2.geometry, v2 = a4[0], _3 = a4[1], g2 = f$4(u4);
    if (!g2)
      return;
    const S = "Relative" !== e2.anchorPointUnits, [k2, M2, P2, b2] = m$2(g2, e2.frame, e2.size, e2.anchorPoint, S), { path: C2 } = _3, z2 = _3.primitiveName, x2 = v2.primitiveName, L2 = o2.primitiveName;
    let E2 = null;
    _3.colorLocked || f3 || (E2 = this._maybeGetValueOrOverrideExpression(L2, "FillColor"));
    const I$12 = E2 ?? this._getValueOrOverrideExpression(_3.type, z2, "Color", f$2(_3.color));
    let V2 = null;
    v2.colorLocked || f3 || (V2 = this._maybeGetValueOrOverrideExpression(L2, "StrokeColor"));
    const N2 = V2 ?? this._getValueOrOverrideExpression(v2.type, x2, "Color", f$2(v2.color)), w2 = this._maybeGetValueOrOverrideExpression(L2, "StrokeWidth") ?? this._getValueOrOverrideExpression(v2.type, x2, "Width", I(v2.width, t$4.CIMSolidStroke.width)), R2 = { type: "sprite-rasterization-param", resource: C2 ? { type: "path", path: C2, asFill: true } : { type: "sdf", geom: u4, asFill: true }, overrides: [] };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: R2, colorLocked: f3, effects: r6, scaleSymbolsProportionally: !!e2.scaleSymbolsProportionally, alignment: s3, anchorPoint: { x: M2, y: P2 }, isAbsoluteAnchorPoint: S, size: c4, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: p3 }, frameHeight: c4, widthRatio: b2, rotateClockwise: false, referenceSize: l4, sizeRatio: k2, color: I$12, outlineColor: N2, outlineWidth: w2, isOutline: d3, markerPlacement: t5, animatedSymbolProperties: i3 });
  }
  _setPoMap(e2, r6, t5) {
    let i3;
    this._poMap[e2] ? i3 = this._poMap[e2] : (i3 = {}, this._poMap[e2] = i3), i3[r6] = t5;
  }
  _maybeGetValueOrOverrideExpression(e2, r6, t5) {
    return this._getValueOrOverrideExpression("", e2, r6, t5, false);
  }
  _getValueOrOverrideExpression(e2, r6, t5, i3, o2 = true) {
    if (o2 && !E(i3) && (i3 = D$1(e2, t5.toLowerCase())), null == r6)
      return i3;
    const a4 = this._poMap[r6];
    if (null == a4)
      return i3;
    const s3 = a4[t5];
    return "string" == typeof s3 || "number" == typeof s3 || Array.isArray(s3) ? s3 : s3 ? { valueExpressionInfo: s3, defaultValue: i3 } : i3;
  }
  _analyzePrimitiveOverrides(e2, r6, t5, i3) {
    if (null == e2)
      return false;
    "string" == typeof e2 && (e2 = [e2]);
    for (const o2 of this._primitiveOverrides)
      if (e2.includes(o2.primitiveName) && o2.valueExpressionInfo)
        return true;
    if (null != r6) {
      for (const o2 of r6)
        if (o2?.overrides.length > 0)
          return true;
    }
    if (null != t5) {
      for (const o2 of t5)
        if (o2?.overrides.length > 0)
          return true;
    }
    if (null != i3) {
      for (const o2 of i3)
        if (o2?.overrides.length > 0)
          return true;
    }
    return false;
  }
  _getMaterialOverrides(e2, r6) {
    if (!e2)
      return [];
    const t5 = [];
    for (const i3 of e2)
      t5.push(...this._getPrimitiveMaterialOverrides(i3, r6));
    return t5;
  }
  _getPrimitiveMaterialOverrides(e2, r6) {
    if (!e2)
      return [];
    const t5 = this._normalizePrimitiveOverrideProps(this._primitiveOverrides.filter((r7) => r7.primitiveName === e2));
    return t5.forEach((e3) => e3.defaultValue = D$1(r6, e3.propertyName.toLowerCase())), t5;
  }
  _analyzeMaterialOverrides(e2, r6) {
    return this._primitiveOverrides.filter((t5) => t5.primitiveName !== e2 || !r6.includes(t5.propertyName));
  }
  _normalizePrimitiveOverrideProps(e2) {
    return e2.map((e3) => ({ ...e3, propertyName: z(e3.propertyName) }));
  }
}
function R(e2) {
  if (e2 && 0 === e2.indexOf("Level_")) {
    const r6 = parseInt(e2.substr(6), 10);
    if (!isNaN(r6))
      return r6;
  }
  return 0;
}
const G$1 = (e2) => e2 && 2 === e2.length && e2[0].enable && e2[1].enable && "CIMSolidStroke" === e2[0].type && "CIMSolidFill" === e2[1].type && null == e2[0].path && null == e2[1].path && !e2[0].effects && !e2[1].effects;
function X(e2) {
  const r6 = e2.symbolLayers;
  if (!r6 || 2 !== r6.length)
    return false;
  const t5 = r6.find((e3) => e3.effects?.find((e4) => "CIMGeometricEffectDashes" === e4.type && null != e4.dashTemplate)), i3 = r6.find((e3) => e3.effects?.find((e4) => "CIMGeometricEffectAddControlPoints" === e4.type));
  return !!t5 || !!i3;
}
function F$1(e2) {
  return a$3(e2).map((e3) => ({ ...e3, propertyName: z(e3.propertyName) }));
}
let l$4 = class l {
  constructor(s3) {
    this.events = new o$5(), this._hasMajorPerformanceCaveat = false, this._lastRenderFrameCounter = 0, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("style", "width: 100%; height:100%; display:block; willChange:transform");
    const r6 = { failIfMajorPerformanceCaveat: true, alpha: true, antialias: false, depth: true, stencil: true };
    s3.appendChild(this._canvas);
    let i3 = t$5(this._canvas, r6);
    i3 || (i3 = t$5(this._canvas, { ...r6, failIfMajorPerformanceCaveat: false }), this._hasMajorPerformanceCaveat = true), this._gl = i3, this._handles = r$6([o$6(this._canvas, "webglcontextlost", (e2) => this.events.emit("webgl-context-lost", e2))]);
  }
  destroy() {
    this._canvas.parentNode?.removeChild(this._canvas), this._canvas = null, this._handles.remove(), this._gl = null;
  }
  get gl() {
    return this._gl;
  }
  render(e2, t5) {
    if (this._hasMajorPerformanceCaveat || has("esri-force-performance-mode")) {
      if (++this._lastRenderFrameCounter >= has("esri-performance-mode-frames-between-render") && (t5(), this._lastRenderViewState = e2.state.clone(), this._lastRenderFrameCounter = 0), this._lastRenderViewState) {
        const [t6, a4, s3, r6, i3, o2] = this._computeViewTransform(this._lastRenderViewState, e2.state);
        this._canvas.style.transform = `matrix(${t6}, ${a4}, ${s3}, ${r6}, ${i3}, ${o2})`;
      }
    } else
      t5();
  }
  resize(e2) {
    const t5 = this._canvas, a4 = t5.style, { state: { size: s3 }, pixelRatio: r6 } = e2, i3 = s3[0], o2 = s3[1], n4 = Math.round(i3 * r6), h4 = Math.round(o2 * r6);
    t5.width === n4 && t5.height === h4 || (t5.width = n4, t5.height = h4), a4.width = i3 + "px", a4.height = o2 + "px";
  }
  _computeViewTransform(e2, t5) {
    const [a4, c4] = e2.center, [l4, m3] = t5.center, [d3, f3] = e2.toScreen([0, 0], l4, m3), [_3, v2] = e2.toScreen([0, 0], a4, c4), p3 = _3 - d3, g2 = v2 - f3, w2 = e2.scale / t5.scale, u4 = t5.rotation - e2.rotation, j2 = e$2();
    return a$4(j2), c$7(j2, j2, [w2, w2]), s$3(j2, j2, h$5(u4)), i$5(j2, j2, [p3, g2]), j2;
  }
};
let _$2 = class _ {
  constructor() {
    this._initialized = false;
  }
  dispose() {
    this._program = r$7(this._program), this._vertexArrayObject = r$7(this._vertexArrayObject);
  }
  render(r6, t5, e2, i3) {
    r6 && (this._initialized || this._initialize(r6), r6.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), r6.bindVAO(this._vertexArrayObject), r6.useProgram(this._program), t5.setSamplingMode(e2), r6.bindTexture(t5, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", i3), r6.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), r6.bindTexture(null, 0), r6.bindVAO());
  }
  _initialize(r6) {
    if (this._initialized)
      return true;
    const s3 = e$3(r6, e$4);
    if (!s3)
      return false;
    const o2 = new Int8Array(16);
    o2[0] = -1, o2[1] = -1, o2[2] = 0, o2[3] = 0, o2[4] = 1, o2[5] = -1, o2[6] = 1, o2[7] = 0, o2[8] = -1, o2[9] = 1, o2[10] = 0, o2[11] = 1, o2[12] = 1, o2[13] = 1, o2[14] = 1, o2[15] = 1;
    const _3 = e$4.attributes, p3 = new o$7(r6, _3, t$6, { geometry: h$6.createVertex(r6, F$3.STATIC_DRAW, o2) });
    return this._program = s3, this._vertexArrayObject = p3, this._initialized = true, true;
  }
};
class e {
  constructor(r6) {
    this._rctx = r6, this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((r6) => r6.dispose()), this._programByKey.clear();
  }
  getProgram(e2, t5 = []) {
    const a4 = e2.vsPath + "." + e2.fsPath + JSON.stringify(t5);
    if (this._programByKey.has(a4))
      return this._programByKey.get(a4);
    const s3 = { ...t5.map((r6) => "string" == typeof r6 ? { name: r6, value: true } : r6).reduce((r6, e3) => ({ ...r6, [e3.name]: e3.value }), {}) }, { vsPath: o2, fsPath: h4, attributes: i3 } = e2, g2 = o$8(o2, h4, i3, s3), m3 = this._rctx.programCache.acquire(g2.shaders.vertexShader, g2.shaders.fragmentShader, g2.attributes);
    if (!m3)
      throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(a4, m3), m3;
  }
}
const o$2 = 512;
let c$5 = class c {
  constructor(e2) {
    this._resourceManager = e2, this._cachedRasterizationCanvas = null;
  }
  dispose() {
    this._cachedRasterizationCanvas = null;
  }
  get _canvas() {
    return this._cachedRasterizationCanvas || (this._cachedRasterizationCanvas = document.createElement("canvas")), this._cachedRasterizationCanvas;
  }
  rasterizeJSONResource(e2, a4) {
    switch (e2.type) {
      case "dash": {
        const r6 = e2.dashTemplate, a5 = e2.capStyle, [s3, n4, i3] = i$6(r6, a5);
        return { size: [n4, i3], image: new Uint32Array(s3.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 };
      }
      case "fill-style": {
        const [t5, s3, n4, i3] = e$5(this._canvas, e2, a4);
        return { size: [s3, n4], image: new Uint32Array(t5.buffer), sdf: false, simplePattern: true, anchorX: 0, anchorY: 0, rasterizationScale: i3 };
      }
      case "sdf":
        return this._rasterizeSDFInfo(e2);
      case "CIMHatchFill":
      case "CIMVectorMarker":
      case "CIMPictureMarker":
        return this._rasterizeCIMJSONResource(e2, a4);
    }
  }
  _rasterizeCIMJSONResource(r6, t5) {
    switch (r6.type) {
      case "CIMHatchFill": {
        const a4 = K.fromCIMHatchFill(r6, t5);
        return this._rasterizeCIMVectorMarker(a4);
      }
      case "CIMPictureMarker": {
        const t6 = K.fromCIMInsidePolygon(r6);
        return this._rasterizeCIMVectorMarker(t6);
      }
      case "CIMVectorMarker": {
        if ("CIMMarkerPlacementInsidePolygon" === r6.markerPlacement?.type) {
          const t7 = K.fromCIMInsidePolygon(r6);
          return this._rasterizeCIMVectorMarker(t7);
        }
        const t6 = e$6(r6);
        return t6 && !r6.avoidSDFRasterization ? this._rasterizeSDFInfo(t6) : this._rasterizeCIMVectorMarker(r6, false);
      }
    }
  }
  _rasterizeSDFInfo(e2) {
    if (!e2)
      return null;
    const [r6, t5, a4] = a$5(e2);
    return r6 ? { size: [t5, a4], image: new Uint32Array(r6.buffer), sdf: true, simplePattern: true, anchorX: 0, anchorY: 0 } : null;
  }
  _rasterizeCIMVectorMarker(r6, t5 = true) {
    const s3 = t5 ? t$7.fromExtent(r6.frame) : null, [n4, i3, o2, c4, l4] = K.rasterize(this._canvas, r6, s3, this._resourceManager);
    return n4 ? { size: [i3, o2], image: new Uint32Array(n4.buffer), sdf: false, simplePattern: false, anchorX: c4, anchorY: l4 } : null;
  }
  rasterizeImageResource(e2, r6, t5, a4) {
    this._canvas.width = e2, this._canvas.height = r6;
    const s3 = this._canvas.getContext("2d", { willReadFrequently: true });
    t5 instanceof ImageData ? s3.putImageData(t5, 0, 0) : (t5.setAttribute("width", `${e2}px`), t5.setAttribute("height", `${r6}px`), s3.drawImage(t5, 0, 0, e2, r6));
    const n4 = s3.getImageData(0, 0, e2, r6), c4 = new Uint8Array(n4.data);
    if (a4) {
      for (const i3 of a4)
        if (i3 && i3.oldColor && 4 === i3.oldColor.length && i3.newColor && 4 === i3.newColor.length) {
          const [e3, r7, t6, a5] = i3.oldColor, [s4, n5, o2, l5] = i3.newColor;
          if (e3 === s4 && r7 === n5 && t6 === o2 && a5 === l5)
            continue;
          for (let i4 = 0; i4 < c4.length; i4 += 4)
            e3 === c4[i4] && r7 === c4[i4 + 1] && t6 === c4[i4 + 2] && a5 === c4[i4 + 3] && (c4[i4] = s4, c4[i4 + 1] = n5, c4[i4 + 2] = o2, c4[i4 + 3] = l5);
        }
    }
    let l4;
    for (let i3 = 0; i3 < c4.length; i3 += 4)
      l4 = c4[i3 + 3] / 255, c4[i3] = c4[i3] * l4, c4[i3 + 1] = c4[i3 + 1] * l4, c4[i3 + 2] = c4[i3 + 2] * l4;
    let h4 = c4, f3 = e2, u4 = r6;
    const m3 = o$2;
    if (f3 >= m3 || u4 >= m3) {
      const t6 = f3 / u4;
      t6 > 1 ? (f3 = m3, u4 = Math.round(m3 / t6)) : (u4 = m3, f3 = Math.round(m3 * t6)), h4 = new Uint8Array(4 * f3 * u4);
      const a5 = new Uint8ClampedArray(h4.buffer);
      u$6(c4, e2, r6, a5, f3, u4, false);
    }
    return { size: [f3, u4], image: new Uint32Array(h4.buffer), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0 };
  }
};
let t$3 = class t2 {
  constructor(t5, e2) {
    this._width = 0, this._height = 0, this._free = [], this._width = t5, this._height = e2, this._free.push(new t$8(0, 0, t5, e2));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(t5, e2) {
    if (t5 > this._width || e2 > this._height)
      return new t$8();
    let i3 = null, s3 = -1;
    for (let h4 = 0; h4 < this._free.length; ++h4) {
      const r6 = this._free[h4];
      t5 <= r6.width && e2 <= r6.height && (null === i3 || r6.y <= i3.y && r6.x <= i3.x) && (i3 = r6, s3 = h4);
    }
    return null === i3 ? new t$8() : (this._free.splice(s3, 1), i3.width < i3.height ? (i3.width > t5 && this._free.push(new t$8(i3.x + t5, i3.y, i3.width - t5, e2)), i3.height > e2 && this._free.push(new t$8(i3.x, i3.y + e2, i3.width, i3.height - e2))) : (i3.width > t5 && this._free.push(new t$8(i3.x + t5, i3.y, i3.width - t5, i3.height)), i3.height > e2 && this._free.push(new t$8(i3.x, i3.y + e2, t5, i3.height - e2))), new t$8(i3.x, i3.y, t5, e2));
  }
  release(h4) {
    for (let t5 = 0; t5 < this._free.length; ++t5) {
      const e2 = this._free[t5];
      if (e2.y === h4.y && e2.height === h4.height && e2.x + e2.width === h4.x)
        e2.width += h4.width;
      else if (e2.x === h4.x && e2.width === h4.width && e2.y + e2.height === h4.y)
        e2.height += h4.height;
      else if (h4.y === e2.y && h4.height === e2.height && h4.x + h4.width === e2.x)
        e2.x = h4.x, e2.width += h4.width;
      else {
        if (h4.x !== e2.x || h4.width !== e2.width || h4.y + h4.height !== e2.y)
          continue;
        e2.y = h4.y, e2.height += h4.height;
      }
      this._free.splice(t5, 1), this.release(h4);
    }
    this._free.push(h4);
  }
};
const n$5 = 256, o$1 = (t5) => Math.floor(t5 / 256);
function c$4(t5) {
  const e2 = /* @__PURE__ */ new Set();
  for (const i3 of t5)
    e2.add(o$1(i3));
  return e2;
}
function l$3(e2, i3, h4) {
  return e2.has(i3) || e2.set(i3, h4().then(() => {
    e2.delete(i3);
  }).catch((h5) => {
    e2.delete(i3), f$5(h5);
  })), e2.get(i3);
}
const g$1 = (t5) => ({ rect: new t$8(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: t5, sdf: true });
let p$1 = class p {
  constructor(t5, e2, h4) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this._preloadCache = {}, this.width = t5, this.height = e2, this._glyphSource = h4, this._binPack = new t$3(t5 - 4, e2 - 4), this._glyphData.push(new Uint8Array(t5 * e2)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyphs();
  }
  dispose() {
    this._binPack = null;
    for (const t5 of this._textures)
      t5 && t5.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyphs() {
    const t5 = [117, 149, 181, 207, 207, 181, 149, 117], e2 = [], i3 = [];
    for (let r6 = 0; r6 < t5.length; r6++) {
      const h5 = t5[r6];
      for (let t6 = 0; t6 < 11; t6++) {
        const s4 = r6 >= 3 && r6 < 5 && t6 >= 3 && t6 < 8 ? 255 : 0;
        e2.push(h5), i3.push(s4);
      }
    }
    const h4 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(e2) }, s3 = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(i3) };
    this._recordGlyph(h4), this._recordGlyph(s3);
  }
  getTexture(t5, e2) {
    if (!this._textures[e2]) {
      const i3 = new e$7();
      i3.pixelFormat = G$2.ALPHA, i3.wrapMode = D$2.CLAMP_TO_EDGE, i3.width = this.width, i3.height = this.height, this._textures[e2] = new m$3(t5, i3, new Uint8Array(this.width * this.height));
    }
    return this._dirties[e2] && (this._textures[e2].setData(this._glyphData[e2]), this._dirties[e2] = false), this._textures[e2];
  }
  async getGlyphItems(t5, e2, i3) {
    const h4 = this._getGlyphCache(t5);
    return await this._fetchRanges(t5, e2, i3), e2.map((e3) => this._getMosaicItem(h4, t5, e3));
  }
  bind(t5, e2, i3, h4) {
    const s3 = this.getTexture(t5, i3);
    s3.setSamplingMode(e2), t5.bindTexture(s3, h4);
  }
  preloadASCIIGlyphCache(t5) {
    const e2 = this._preloadCache[t5];
    if (null != e2)
      return e2;
    const i3 = this._glyphSource.preloadASCIIRange(t5).then(() => {
      const e3 = this._getGlyphCache(t5);
      for (let i4 = 0; i4 < 256; i4++)
        this._getMosaicItem(e3, t5, i4);
    });
    return this._preloadCache[t5] = i3, i3;
  }
  _getGlyphCache(t5) {
    return this._glyphCache[t5] || (this._glyphCache[t5] = {}), this._glyphCache[t5];
  }
  _invalidate() {
    this._dirties[this._currentPage] = true;
  }
  async _fetchRanges(t5, e2, i3) {
    const h4 = c$4(e2), s3 = [];
    h4.forEach((e3) => {
      s3.push(this._fetchRange(t5, e3, i3));
    }), await Promise.all(s3);
  }
  async _fetchRange(t5, e2, i3) {
    if (e2 > n$5)
      return;
    const h4 = t5 + e2;
    return l$3(this._rangePromises, h4, () => this._glyphSource.getRange(t5, e2, i3));
  }
  _getMosaicItem(t5, e2, i3) {
    if (!t5[i3]) {
      const h4 = this._glyphSource.getGlyph(e2, i3);
      if (!h4?.metrics)
        return g$1(i3);
      const s3 = this._recordGlyph(h4), r6 = this._currentPage, a4 = h4.metrics;
      t5[i3] = { rect: s3, page: r6, metrics: a4, code: i3, sdf: true }, this._invalidate();
    }
    return t5[i3];
  }
  _recordGlyph(t5) {
    const h4 = t5.metrics;
    let s3;
    if (0 === h4.width)
      s3 = new t$8(0, 0, 0, 0);
    else {
      const e2 = 3, r6 = h4.width + 2 * e2, a4 = h4.height + 2 * e2;
      s3 = this._binPack.allocate(r6, a4), s3.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(null), this._initDecorationGlyphs(), this._binPack = new t$3(this.width - 4, this.height - 4), s3 = this._binPack.allocate(r6, a4));
      const n4 = this._glyphData[this._currentPage], o2 = t5.bitmap;
      let c4, l4;
      if (o2)
        for (let t6 = 0; t6 < a4; t6++) {
          c4 = r6 * t6, l4 = this.width * (s3.y + t6) + s3.x;
          for (let t7 = 0; t7 < r6; t7++)
            n4[l4 + t7] = o2[c4 + t7];
        }
      has("esri-glyph-debug") && this._showDebugPage(n4);
    }
    return s3;
  }
  _showDebugPage(t5) {
    const e2 = document.createElement("canvas"), i3 = e2.getContext("2d"), h4 = new ImageData(this.width, this.height), s3 = h4.data;
    e2.width = this.width, e2.height = this.height, e2.style.border = "1px solid black";
    for (let r6 = 0; r6 < t5.length; ++r6)
      s3[4 * r6] = t5[r6], s3[4 * r6 + 1] = 0, s3[4 * r6 + 2] = 0, s3[4 * r6 + 3] = 255;
    i3.putImageData(h4, 0, 0), document.body.appendChild(e2);
  }
};
let a$2 = class a {
  constructor(e2) {
    for (this._metrics = [], this._bitmaps = []; e2.next(); )
      switch (e2.tag()) {
        case 1: {
          const t5 = e2.getMessage();
          for (; t5.next(); )
            switch (t5.tag()) {
              case 3: {
                const e3 = t5.getMessage();
                let a4, s3, r6, n4, i3, c4, g2;
                for (; e3.next(); )
                  switch (e3.tag()) {
                    case 1:
                      a4 = e3.getUInt32();
                      break;
                    case 2:
                      s3 = e3.getBytes();
                      break;
                    case 3:
                      r6 = e3.getUInt32();
                      break;
                    case 4:
                      n4 = e3.getUInt32();
                      break;
                    case 5:
                      i3 = e3.getSInt32();
                      break;
                    case 6:
                      c4 = e3.getSInt32();
                      break;
                    case 7:
                      g2 = e3.getUInt32();
                      break;
                    default:
                      e3.skip();
                  }
                e3.release(), a4 && (this._metrics[a4] = { width: r6, height: n4, left: i3, top: c4, advance: g2 }, this._bitmaps[a4] = s3);
                break;
              }
              default:
                t5.skip();
            }
          t5.release();
          break;
        }
        default:
          e2.skip();
      }
  }
  getMetrics(e2) {
    return this._metrics[e2];
  }
  getBitmap(e2) {
    return this._bitmaps[e2];
  }
};
let s$1 = class s {
  constructor() {
    this._ranges = [];
  }
  getRange(e2) {
    return this._ranges[e2];
  }
  addRange(e2, t5) {
    this._ranges[e2] = t5;
  }
};
let r$5 = class r {
  constructor(e2) {
    this._glyphInfo = {}, this._baseURL = e2;
  }
  getRange(s3, r6, n4) {
    const i3 = this._getFontStack(s3);
    if (i3.getRange(r6))
      return Promise.resolve();
    const c4 = 256 * r6, g2 = c4 + 255, o2 = this._baseURL.replace("{fontstack}", s3).replace("{range}", c4 + "-" + g2);
    return U$1(o2, { responseType: "array-buffer", ...n4 }).then((e2) => {
      i3.addRange(r6, new a$2(new n$6(new Uint8Array(e2.data), new DataView(e2.data))));
    });
  }
  async preloadASCIIRange(s3) {
    const r6 = this._getFontStack(s3), n4 = 0, i3 = 255, c4 = this._baseURL.replace("{fontstack}", s3).replace("{range}", n4 + "-" + i3), g2 = await U$1(c4, { responseType: "array-buffer" }), o2 = new a$2(new n$6(new Uint8Array(g2.data), new DataView(g2.data)));
    for (let e2 = n4; e2 <= i3; e2++)
      r6.getRange(e2) || r6.addRange(e2, o2);
  }
  getGlyph(e2, t5) {
    const a4 = this._getFontStack(e2);
    if (!a4)
      return;
    const s3 = Math.floor(t5 / 256), r6 = a4.getRange(s3);
    return r6 ? { metrics: r6.getMetrics(t5), bitmap: r6.getBitmap(t5) } : void 0;
  }
  _getFontStack(e2) {
    let t5 = this._glyphInfo[e2];
    return t5 || (t5 = this._glyphInfo[e2] = new s$1()), t5;
  }
};
const i$3 = 1e20;
let r$4 = class r2 {
  constructor(t5) {
    this._svg = null, this.size = t5;
    const e2 = document.createElement("canvas");
    e2.width = e2.height = t5, this._context = e2.getContext("2d", { willReadFrequently: false }), this._gridOuter = new Float64Array(t5 * t5), this._gridInner = new Float64Array(t5 * t5), this._f = new Float64Array(t5), this._d = new Float64Array(t5), this._z = new Float64Array(t5 + 1), this._v = new Int16Array(t5);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(r6, h4, n4, o2 = 31) {
    this._initSVG();
    const d3 = this.createSVGString(r6, h4);
    return new Promise((r7, h5) => {
      const a4 = new Image();
      a4.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(d3), a4.onload = () => {
        a4.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(a4, 0, 0, this.size, this.size);
        const e2 = this._context.getImageData(0, 0, this.size, this.size), s3 = new Uint8Array(this.size * this.size * 4);
        for (let t5 = 0; t5 < this.size * this.size; t5++) {
          const s4 = e2.data[4 * t5 + 3] / 255;
          this._gridOuter[t5] = 1 === s4 ? 0 : 0 === s4 ? i$3 : Math.max(0, 0.5 - s4) ** 2, this._gridInner[t5] = 1 === s4 ? i$3 : 0 === s4 ? 0 : Math.max(0, s4 - 0.5) ** 2;
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let i3 = 0; i3 < this.size * this.size; i3++) {
          const e3 = this._gridOuter[i3] - this._gridInner[i3];
          o$9(0.5 - e3 / (2 * o2), s3, 4 * i3);
        }
        r7(s3);
      };
      const l4 = n4?.signal;
      l4 && m$4(l4, () => h5(u$7()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const t5 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t5.setAttribute("style", "position: absolute;"), t5.setAttribute("width", "0"), t5.setAttribute("height", "0"), t5.setAttribute("aria-hidden", "true"), t5.setAttribute("role", "presentation"), document.body.appendChild(t5), this._svg = t5;
    }
    return this._svg;
  }
  createSVGString(t5, e2) {
    const s3 = this._initSVG(), i3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i3.setAttribute("d", t5), s3.appendChild(i3);
    const r6 = i3.getBBox(), h4 = r6.width / r6.height, n4 = this.size / 2;
    let o2, d3, a4;
    if (h4 > 1) {
      o2 = n4 / r6.width;
      const t6 = n4 * (1 / h4);
      d3 = this.size / 4, a4 = n4 - t6 / 2;
    } else {
      o2 = n4 / r6.height;
      d3 = n4 - n4 * h4 / 2, a4 = this.size / 4;
    }
    const l4 = -r6.x * o2 + d3, _3 = -r6.y * o2 + a4;
    i3.setAttribute("style", `transform: matrix(${o2}, 0, 0, ${o2}, ${l4}, ${_3})`), i3.setAttribute("stroke-width", "" + 0.5 / o2);
    const g2 = `<svg style="fill:${e2 ? "red" : "none"}; stroke:${e2 ? "none" : "red"}" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${s3.innerHTML}</svg>`;
    return s3.removeChild(i3), g2;
  }
  _edt(t5, e2, s3) {
    const i3 = this._f, r6 = this._d, h4 = this._v, n4 = this._z;
    for (let o2 = 0; o2 < e2; o2++) {
      for (let r7 = 0; r7 < s3; r7++)
        i3[r7] = t5[r7 * e2 + o2];
      this._edt1d(i3, r6, h4, n4, s3);
      for (let i4 = 0; i4 < s3; i4++)
        t5[i4 * e2 + o2] = r6[i4];
    }
    for (let o2 = 0; o2 < s3; o2++) {
      for (let s4 = 0; s4 < e2; s4++)
        i3[s4] = t5[o2 * e2 + s4];
      this._edt1d(i3, r6, h4, n4, e2);
      for (let s4 = 0; s4 < e2; s4++)
        t5[o2 * e2 + s4] = Math.sqrt(r6[s4]);
    }
  }
  _edt1d(t5, e2, s3, r6, h4) {
    s3[0] = 0, r6[0] = -i$3, r6[1] = +i$3;
    for (let n4 = 1, o2 = 0; n4 < h4; n4++) {
      let e3 = (t5[n4] + n4 * n4 - (t5[s3[o2]] + s3[o2] * s3[o2])) / (2 * n4 - 2 * s3[o2]);
      for (; e3 <= r6[o2]; )
        o2--, e3 = (t5[n4] + n4 * n4 - (t5[s3[o2]] + s3[o2] * s3[o2])) / (2 * n4 - 2 * s3[o2]);
      o2++, s3[o2] = n4, r6[o2] = e3, r6[o2 + 1] = +i$3;
    }
    for (let i3 = 0, n4 = 0; i3 < h4; i3++) {
      for (; r6[n4 + 1] < i3; )
        n4++;
      e2[i3] = (i3 - s3[n4]) * (i3 - s3[n4]) + t5[s3[n4]];
    }
  }
};
function c$3(t5) {
  return t5 && "static" === t5.type;
}
let n$4 = class n {
  constructor(t5, e2, i3 = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = /* @__PURE__ */ new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (t5 <= 0 || e2 <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t5, this._pageHeight = e2, i3 > 0 && (this._maxItemSize = i3), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new t$3(this._pageWidth, this._pageHeight);
    const s3 = Math.floor(this._pageWidth), r6 = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(s3 * r6) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 });
  }
  getWidth(t5) {
    return t5 >= this._mosaicPages.length ? -1 : this._mosaicPages[t5].size[0];
  }
  getHeight(t5) {
    return t5 >= this._mosaicPages.length ? -1 : this._mosaicPages[t5].size[1];
  }
  getPageTexture(t5) {
    return t5 < this._mosaicPages.length ? this._mosaicPages[t5].texture : null;
  }
  has(t5) {
    return this._mosaicRects.has(t5);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(t5) {
    return this._mosaicRects.get(t5);
  }
  addSpriteItem(t5, i3, a4, r6, o2, h4, n4 = 1) {
    if (this._mosaicRects.has(t5))
      return this._mosaicRects.get(t5);
    let g2, p3, m3;
    if (c$3(a4))
      [g2, p3, m3] = this._allocateImage(i3[0], i3[1]);
    else {
      g2 = new t$8(0, 0, i3[0], i3[1]), p3 = this._mosaicPages.length;
      const t6 = void 0;
      this._mosaicPages.push({ mosaicsData: a4, size: [i3[0] + 2 * $$1, i3[1] + 2 * $$1], dirty: true, texture: t6 });
    }
    if (g2.width <= 0 || g2.height <= 0)
      return null;
    const d3 = { type: "sprite", rect: g2, width: i3[0], height: i3[1], sdf: o2, simplePattern: h4, rasterizationScale: n4, page: p3 };
    return this._mosaicRects.set(t5, d3), c$3(a4) && (has("esri-mosaic-debug") && this._showDebugSprite(i3, a4.data), this._copy({ rect: g2, spriteSize: i3, spriteData: a4.data, page: p3, pageSize: m3, repeat: r6, sdf: o2 })), d3;
  }
  hasItemsToProcess() {
    return 0 !== this._spriteCopyQueue.length;
  }
  processNextItem() {
    const t5 = this._spriteCopyQueue.pop();
    t5 && this._copy(t5);
  }
  getMosaicItemPosition(t5) {
    const i3 = this.getSpriteItem(t5), s3 = i3?.rect;
    if (!s3)
      return null;
    s3.width = i3.width, s3.height = i3.height;
    const a4 = i3.width, r6 = i3.height, o2 = $$1, h4 = this._mosaicPages[i3.page].size;
    return { size: [i3.width, i3.height], tl: [(s3.x + o2) / h4[0], (s3.y + o2) / h4[1]], br: [(s3.x + o2 + a4) / h4[0], (s3.y + o2 + r6) / h4[1]], page: i3.page };
  }
  bind(t5, e2, i3 = 0, s3 = 0) {
    const a4 = this._mosaicPages[i3], r6 = a4.mosaicsData;
    let o2 = a4.texture;
    if (o2 || (o2 = p2(t5, a4.size), a4.texture = o2), o2.setSamplingMode(e2), c$3(r6))
      t5.bindTexture(o2, s3), a4.dirty && (o2.setData(new Uint8Array(r6.data.buffer)), o2.generateMipmap(), has("esri-mosaic-debug") && this._showDebugPage(i3));
    else {
      r6.data.loadFrame(o2), t5.bindTexture(o2, s3), o2.generateMipmap();
    }
    a4.dirty = false;
  }
  getTexture(t5, e2 = 0) {
    const i3 = this._mosaicPages[e2], s3 = i3.mosaicsData;
    let a4 = i3.texture;
    if (a4 || (a4 = p2(t5, i3.size), i3.texture = a4), c$3(s3))
      i3.dirty && (a4.setData(new Uint8Array(s3.data.buffer)), a4.generateMipmap(), has("esri-mosaic-debug") && this._showDebugPage(e2));
    else {
      s3.data.loadFrame(a4), a4.generateMipmap();
    }
    return i3.dirty = false, a4;
  }
  dispose() {
    this._binPack = null;
    for (const t5 of this._mosaicPages) {
      const e2 = t5.texture;
      e2 && e2.dispose();
      const i3 = t5.mosaicsData;
      if (!c$3(i3)) {
        i3.data.destroy();
      }
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
  static _copyBits(t5, e2, i3, s3, a4, r6, o2, h4, c4, n4, g2) {
    let p3 = s3 * e2 + i3, m3 = h4 * r6 + o2;
    if (g2) {
      m3 -= r6;
      for (let o3 = -1; o3 <= n4; o3++, p3 = ((o3 + n4) % n4 + s3) * e2 + i3, m3 += r6)
        for (let e3 = -1; e3 <= c4; e3++)
          a4[m3 + e3] = t5[p3 + (e3 + c4) % c4];
    } else
      for (let d3 = 0; d3 < n4; d3++) {
        for (let e3 = 0; e3 < c4; e3++)
          a4[m3 + e3] = t5[p3 + e3];
        p3 += e2, m3 += r6;
      }
  }
  _copy(i3) {
    if (i3.page >= this._mosaicPages.length)
      return;
    const s3 = this._mosaicPages[i3.page], a4 = s3.mosaicsData;
    if (!c$3(s3.mosaicsData))
      throw new s$4("mapview-invalid-resource", "unsuitable data type!");
    const r6 = i3.spriteData, o2 = a4.data;
    o2 && r6 || console.error("Source or target images are uninitialized!"), n._copyBits(r6, i3.spriteSize[0], 0, 0, o2, i3.pageSize[0], i3.rect.x + $$1, i3.rect.y + $$1, i3.spriteSize[0], i3.spriteSize[1], i3.repeat), s3.dirty = true;
  }
  _allocateImage(t5, r6) {
    t5 += 2 * $$1, r6 += 2 * $$1;
    const o2 = Math.max(t5, r6);
    if (this._maxItemSize && this._maxItemSize < o2) {
      const e2 = 2 ** Math.ceil(e$8(t5)), a4 = 2 ** Math.ceil(e$8(r6)), o3 = new t$8(0, 0, t5, r6);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(e2 * a4) }, size: [e2, a4], dirty: true, texture: void 0 }), [o3, this._mosaicPages.length - 1, [e2, a4]];
    }
    const h4 = this._binPack.allocate(t5, r6);
    if (h4.width <= 0) {
      const e2 = this._mosaicPages[this._currentPage];
      return !e2.dirty && c$3(e2.mosaicsData) && (e2.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: true, texture: void 0 }), this._binPack = new t$3(this._pageWidth, this._pageHeight), this._allocateImage(t5, r6);
    }
    return [h4, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _showDebugSprite([t5, e2], i3) {
    const s3 = document.createElement("canvas");
    s3.width = t5, s3.height = e2, s3.setAttribute("style", `position: absolute; top: ${4 + 204 * g++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);
    const a4 = s3.getContext("2d"), r6 = new ImageData(t5, e2);
    r6.data.set(new Uint8Array(i3.buffer)), a4.putImageData(r6, 0, 0), document.body.appendChild(s3);
  }
  _showDebugPage(t5) {
    const e2 = this._mosaicPages[t5], { size: [i3, s3], mosaicsData: a4 } = e2;
    if (!c$3(a4))
      return void console.error("Could not show sprite mosaic debug for non-static resource");
    const r6 = `mosaicDebugPage${t5}`, o2 = document.getElementById(r6) ?? document.createElement("canvas");
    o2.id = r6, o2.width = i3, o2.height = s3, o2.setAttribute("style", `position: absolute; top: ${4 + 204 * t5}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);
    const h4 = o2.getContext("2d"), n4 = new ImageData(i3, s3);
    n4.data.set(new Uint8Array(a4.data.buffer)), h4.putImageData(n4, 0, 0), document.body.appendChild(o2);
  }
};
let g = 0;
function p2(t5, e2) {
  const i3 = new e$7();
  return i3.width = e2[0], i3.height = e2[1], i3.wrapMode = D$2.CLAMP_TO_EDGE, new m$3(t5, i3, null);
}
let a$1 = class a2 {
  constructor(t5, a4, h4, e2) {
    this._animation = t5, this._frameData = null;
    const n4 = (t6) => {
      this._frameData = t6, a4.requestRender();
    };
    this.frameCount = this._animation.frameDurations.length, this.width = this._animation.width, this.height = this._animation.height, this._playHandle = f$6(this._animation, h4, e2, n4);
  }
  destroy() {
    this._playHandle.remove();
  }
  loadFrame(i3) {
    const a4 = this._frameData;
    if (null == a4)
      return;
    const h4 = "width" in a4 ? a4.width : a4.codedWidth, e2 = "height" in a4 ? a4.height : a4.codedHeight;
    i3.updateData(0, $$1, $$1, h4, e2, a4), this._frameData = null;
  }
};
const P = "arial-unicode-ms-regular", b = () => s$2.getLogger("esri.views.2d.engine.webgl.TextureManager"), v$1 = (e2, t5, i3) => b().error(new s$4(e2, t5, i3));
function j(e2) {
  switch (e2.type) {
    case "fill-style":
    case "CIMHatchFill":
      return tt;
  }
  return 1;
}
class $2 {
  static fromMosaic(e2, t5) {
    return new $2(e2, t5.page, t5.sdf);
  }
  constructor(e2, t5, i3) {
    this.mosaicType = e2, this.page = t5, this.sdf = i3;
  }
}
class k {
  constructor(i3) {
    this._requestRender = i3, this._resourceManager = new i$7(), this._invalidFontsMap = /* @__PURE__ */ new Map(), this._sdfConverter = new r$4(_$3), this._bindingInfos = new Array(), this._hashToBindingIndex = /* @__PURE__ */ new Map(), this._ongoingRasterizations = /* @__PURE__ */ new Map(), this._imageRequestQueue = new _$4({ concurrency: 10, process: async (e2, i4) => {
      s$5(i4);
      try {
        return await U$1(e2, { responseType: "image", signal: i4 });
      } catch (r6) {
        if (!b$2(r6))
          throw new s$4("mapview-invalid-resource", `Could not fetch requested resource at ${e2}`, r6);
        throw r6;
      }
    } }), this._spriteMosaic = new n$4(2048, 2048, 500), this._glyphSource = new r$5(`${s$6.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new p$1(1024, 1024, this._glyphSource), this._rasterizer = new c$5(this.resourceManager);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null, this._resourceManager.destroy();
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  get resourceManager() {
    return this._resourceManager;
  }
  async rasterizeItem(e2, t5) {
    if (null == e2)
      return v$1("mapview-null-resource", "Unable to rasterize null resource"), null;
    if ("cim-rasterization-info" !== e2.type)
      return v$1("mapview-unexpected-resource", "Unable to rasterize resource"), null;
    const { resource: i3 } = e2;
    if ("text" === i3.type) {
      const e3 = await this._rasterizeText(i3, t5);
      for (const t6 of e3.glyphs)
        this._setTextureBinding(A$3.GLYPH, t6);
      return e3;
    }
    const s3 = await this._rasterizeSprite(i3, t5);
    return s3 && this._setTextureBinding(A$3.SPRITE, s3), s3;
  }
  getMosaicInfo(e2, t5, i3 = false) {
    const s3 = this._getTextureBindingInfo(e2, t5, i3);
    return s3 ? { size: s3.size, texture: { texture: s3.texture, unit: "sprite" === s3.type ? b$3 : j$1 } } : (v$1("mapview-invalid-resource", `Unable to find resource for ${t5}`), { size: [0, 0], texture: { texture: null, unit: 0 } });
  }
  _getTextureBindingInfo(e2, t5, i3) {
    const s3 = this._bindingInfos[t5 - 1], r6 = s3.page, a4 = i3 ? L$2.LINEAR_MIPMAP_LINEAR : L$2.LINEAR;
    switch (s3.mosaicType) {
      case A$3.SPRITE: {
        const t6 = [this.sprites.getWidth(r6), this.sprites.getHeight(r6)], i4 = this._spriteMosaic.getTexture(e2, r6);
        return i4.setSamplingMode(a4), { type: "sprite", texture: i4, size: t6 };
      }
      case A$3.GLYPH: {
        const t6 = [this.glyphs.width, this.glyphs.height], i4 = this._glyphMosaic.getTexture(e2, r6);
        return this._glyphMosaic.bind(e2, a4, r6, j$1), i4.setSamplingMode(a4), { type: "glyph", texture: i4, size: t6 };
      }
      default:
        return v$1("mapview-texture-manager", `Cannot handle unknown type ${s3.mosaicType}`), null;
    }
  }
  _hashMosaic(e2, t5) {
    return 1 | e2 << 1 | (t5.sdf ? 1 : 0) << 2 | t5.page << 3;
  }
  _setTextureBinding(e2, t5) {
    const i3 = this._hashMosaic(e2, t5);
    if (!this._hashToBindingIndex.has(i3)) {
      const s3 = $2.fromMosaic(e2, t5), r6 = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i3, r6), this._bindingInfos.push(s3);
    }
    t5.textureBinding = this._hashToBindingIndex.get(i3);
  }
  async _rasterizeText(e2, t5) {
    const { font: s3, textString: a4 } = e2, n4 = f$7(s3), o2 = this._invalidFontsMap.has(n4), [c4, h4] = i$8(a4), u4 = j$2(c4);
    try {
      const e3 = o2 ? P : n4;
      has("esri-2d-stabilize-glyphs") && await this._glyphMosaic.preloadASCIIGlyphCache(e3);
      return { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(e3, u4, t5), isRightToLeft: h4 };
    } catch (l4) {
      v$1("mapview-invalid-resource", `Couldn't find font ${n4}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(n4, true);
      return { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(P, u4, t5), isRightToLeft: h4 };
    }
  }
  _hashSpriteResource(e2) {
    switch (e2.type) {
      case "path":
        return `path:${e2.path}.${e2.asFill ? 1 : 0}`;
      case "CIMPictureMarker":
        return `${e2.type}:${e2.url}:${e2.size}`;
      case "CIMPictureFill":
        return `${e2.type}:${e2.url}:${e2.height}`;
      case "CIMPictureStroke":
        return `${e2.type}:${e2.url}:${e2.width}`;
      case "dash":
        return `dash:${e2.capStyle}.${e2.dashTemplate.join("")}`;
      case "sdf":
        return `sdf:${JSON.stringify(e2.geom)}.${e2.asFill ? 1 : 0}`;
      case "fill-style":
        return `fill_style:${e2.style}`;
      case "animated":
        return JSON.stringify(M(e2));
      case "CIMHatchFill":
      case "CIMVectorMarker":
        return JSON.stringify(e2);
    }
  }
  async _rasterizeSprite(e2, t5) {
    if (!e2)
      return null;
    const i3 = c$6(this._hashSpriteResource(e2));
    if (this._spriteMosaic.has(i3))
      return this._spriteMosaic.getSpriteItem(i3);
    if ("url" in e2 && e2.url || "CIMPictureFill" === e2.type || "CIMPictureStroke" === e2.type || "CIMPictureMarker" === e2.type || "CIMVectorMarker" === e2.type) {
      const t6 = [];
      K.fetchResources({ type: "CIMPointSymbol", symbolLayers: [e2] }, this._resourceManager, t6), t6.length > 0 && await Promise.all(t6);
    }
    switch (e2.type) {
      case "CIMPictureMarker":
        return "CIMMarkerPlacementInsidePolygon" === e2.markerPlacement?.type ? this._rasterizeJSONResource(i3, e2) : this._handleAsyncResource(i3, e2, t5);
      case "animated":
      case "CIMPictureFill":
      case "CIMPictureStroke":
      case "path":
        return this._handleAsyncResource(i3, e2, t5);
      case "sdf":
      case "dash":
      case "fill-style":
      case "CIMVectorMarker":
      case "CIMHatchFill":
        return this._rasterizeJSONResource(i3, e2);
    }
  }
  _rasterizeJSONResource(e2, t5) {
    const i3 = this._rasterizer.rasterizeJSONResource(t5, j(t5));
    if (i3) {
      const { size: s3, image: r6, sdf: a4, simplePattern: n4, rasterizationScale: o2 } = i3;
      return this._addItemToMosaic(e2, s3, { type: "static", data: r6 }, A$1(t5), a4, n4, o2);
    }
    return null;
  }
  async _handleAsyncResource(e2, t5, i3) {
    if (this._ongoingRasterizations.has(e2))
      return this._ongoingRasterizations.get(e2);
    let s3;
    return s3 = "path" === t5.type ? this._handleSVG(t5, e2, i3) : this._handleImage(t5, e2, i3), this._ongoingRasterizations.set(e2, s3), s3.finally(() => this._ongoingRasterizations.delete(e2)), s3;
  }
  async _handleSVG(e2, t5, i3) {
    const s3 = [_$3, _$3], { asFill: r6 } = e2, a4 = await this._sdfConverter.draw(e2.path, r6, i3);
    return this._addItemToMosaic(t5, s3, { type: "static", data: new Uint32Array(a4.buffer) }, false, true, true);
  }
  async _handleGIFOrPNG(e2, t5, i3) {
    const s3 = e2.url, r6 = this.resourceManager.getResource(s3);
    if (null == r6)
      return null;
    const { width: a4, height: n4 } = r6;
    if (r6 instanceof HTMLImageElement) {
      if ("animated" === e2.type)
        return v$1("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
      const i4 = "colorSubstitutions" in e2 ? e2.colorSubstitutions : void 0, { size: s4, sdf: o3, image: c5 } = this._rasterizer.rasterizeImageResource(a4, n4, r6, i4);
      return this._addItemToMosaic(t5, s4, { type: "static", data: c5 }, A$1(e2), o3, false);
    }
    let o2, c4, h4;
    "animated" === e2.type ? (o2 = false, c4 = { playAnimation: e2.playAnimation, reverseAnimation: e2.reverseAnimation, randomizeStartTime: e2.randomizeStartTime, randomizeStartSeed: e2.randomizeStartSeed, startTimeOffset: e2.startTimeOffset, duration: e2.duration, repeatType: e2.repeatType, repeatDelay: e2.repeatDelay }, h4 = e2.startGroup || 0) : (o2 = A$1(e2), c4 = {}, h4 = 0);
    const u4 = new a$1(r6, this._requestRender, c4, h4);
    return this._addItemToMosaic(t5, [u4.width, u4.height], { type: "animated", data: u4 }, o2, false, false);
  }
  async _handleImage(e2, t5, i3) {
    const r6 = e2.url;
    if (G(r6) || L(r6))
      return this._handleGIFOrPNG(e2, t5, i3);
    if ("animated" === e2.type)
      return v$1("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
    try {
      let s3;
      const a4 = this.resourceManager.getResource(r6);
      if (null != a4 && a4 instanceof HTMLImageElement)
        s3 = a4;
      else {
        const { data: e3 } = await this._imageRequestQueue.push(r6, { ...i3 });
        s3 = e3;
      }
      if (y(r6)) {
        if ("width" in e2 && "height" in e2)
          s3.width = u$5(e2.width), s3.height = u$5(e2.height);
        else if ("cim" in e2) {
          const t6 = e2;
          s3.width = u$5(t6.width ?? t6.scaleX * t6.size), s3.height = u$5(t6.size);
        }
      }
      if (!s3.width || !s3.height)
        return null;
      const n4 = s3.width, o2 = s3.height, h4 = "colorSubstitutions" in e2 ? e2.colorSubstitutions : void 0, { size: u4, sdf: l4, image: p3 } = this._rasterizer.rasterizeImageResource(n4, o2, s3, h4);
      return this._addItemToMosaic(t5, u4, { type: "static", data: p3 }, A$1(e2), l4, false);
    } catch (v2) {
      if (!b$2(v2))
        throw new s$4("mapview-invalid-resource", `Could not fetch requested resource at ${r6}. ${v2.message}`);
      throw v2;
    }
  }
  _addItemToMosaic(e2, t5, i3, s3, r6, a4, n4) {
    return this._spriteMosaic.addSpriteItem(e2, t5, i3, s3, r6, a4, n4);
  }
}
function A$1(e2) {
  switch (e2.type) {
    case "CIMVectorMarker":
    case "CIMPictureMarker":
      return N(e2);
    default:
      return true;
  }
}
const F = (e2) => null != e2 && e2.startsWith("data:image/gif"), G = (e2) => e2 && (e2.includes(".gif") || F(e2)), B = (e2) => null != e2 && e2.startsWith("data:image/png"), L = (e2) => e2 && (e2.includes(".png") || B(e2)), N = (e2) => e2 && "markerPlacement" in e2 && e2.markerPlacement && "CIMMarkerPlacementInsidePolygon" === e2.markerPlacement.type;
let r$3 = class r3 {
  constructor(e2) {
    this._queue = [], this._refreshable = e2;
  }
  destroy() {
    this._queue = [];
  }
  enqueueTextureUpdate(o2, r6) {
    const n4 = L$3(), h4 = o2, i3 = ft, a4 = Math.ceil(h4.height / i3);
    s$5(r6);
    for (let e2 = 0; e2 < a4; e2++) {
      const t5 = e2 * i3, s3 = e2 === a4 - 1, u4 = s3 ? h4.height - i3 * e2 : i3;
      this._queue.push({ type: "chunk", request: o2, resolver: n4, chunk: e2, chunkOffset: t5, destHeight: u4, chunkIsLast: s3, options: r6 });
    }
    return w$2(r6, (e2) => n4.reject(e2)), n4.promise;
  }
  upload() {
    let e2 = 0;
    for (; this._queue.length; ) {
      const t5 = performance.now(), s3 = this._queue.shift();
      if (s3) {
        if (null != s3.options.signal && s3.options.signal.aborted)
          continue;
        switch (s3.type) {
          case "chunk":
            this._uploadChunk(s3);
            break;
          case "no-chunk":
            this._uploadNoChunk(s3);
        }
        const u4 = performance.now() - t5;
        if (e2 += u4, e2 + u4 >= pt)
          break;
      }
    }
    this._queue.length && this._refreshable.requestRender();
  }
  _uploadChunk(e2) {
    const { request: t5, resolver: s3, chunkOffset: o2, chunkIsLast: u4, destHeight: r6 } = e2, { data: n4, texture: h4, width: i3 } = t5;
    null != n4 && (h4.updateData(0, 0, o2, i3, r6, n4, o2), u4 && s3.resolve());
  }
  _uploadNoChunk(e2) {
    const { request: t5, resolver: s3 } = e2, { data: o2, texture: u4 } = t5;
    u4.setData(o2), s3.resolve();
  }
};
const f$1 = r$9(-0.5, -0.5);
let u$3 = class u {
  constructor() {
    this._centerNdc = n$7(), this._pxToNdc = n$7(), this._worldDimensionsPx = n$7(), this._mat3 = e$9(), this._initialized = false;
  }
  dispose() {
    this._program = r$7(this._program), this._quad = r$7(this._quad);
  }
  render(t5, i3, e2) {
    const { context: r6 } = t5, s3 = this._updateGeometry(t5, e2);
    if (null != i3) {
      const { r: t6, g: e3, b: s4, a: o2 } = i3;
      r6.setClearColor(o2 * t6 / 255, o2 * e3 / 255, o2 * s4 / 255, o2);
    } else
      r6.setClearColor(0, 0, 0, 0);
    if (r6.setStencilFunction(O$1.ALWAYS, 0, 255), r6.setStencilWriteMask(255), !s3)
      return r6.setClearStencil(1), void r6.clear(r6.gl.STENCIL_BUFFER_BIT | r6.gl.COLOR_BUFFER_BIT);
    r6.setClearStencil(0), r6.clear(r6.gl.STENCIL_BUFFER_BIT | r6.gl.COLOR_BUFFER_BIT), this._initialized || this._initialize(r6), r6.setDepthWriteEnabled(false), r6.setDepthTestEnabled(false), r6.setColorMask(false, false, false, false), r6.setBlendingEnabled(false), r6.setStencilOp(I$1.KEEP, I$1.KEEP, I$1.REPLACE), r6.setStencilFunction(O$1.ALWAYS, 1, 255), r6.setStencilTestEnabled(true), r6.useProgram(this._program), this._program.setUniformMatrix3fv("u_worldExtent", this._mat3), this._quad.draw(), this._quad.unbind();
  }
  _initialize(t5) {
    if (this._initialized)
      return;
    const i3 = e$3(t5, r$8);
    i3 && (this._program = i3, this._quad = new h$7(t5, [0, 0, 1, 0, 0, 1, 1, 1]), this._initialized = true);
  }
  _updateGeometry(t5, a4) {
    const { state: n4, pixelRatio: m3 } = t5, { size: c4, rotation: h4 } = n4, _3 = Math.round(c4[0] * m3), d3 = Math.round(c4[1] * m3);
    if (!n4.spatialReference.isWrappable)
      return false;
    const p3 = u$8(h4), u4 = Math.abs(Math.cos(p3)), g2 = Math.abs(Math.sin(p3)), b2 = Math.round(_3 * u4 + d3 * g2), x2 = Math.round(n4.worldScreenWidth);
    if (b2 <= x2)
      return false;
    const E2 = _3 * g2 + d3 * u4, S = x2 * m3, C2 = (a4.left - a4.right) * m3 / _3, T2 = (a4.bottom - a4.top) * m3 / d3;
    o$a(this._worldDimensionsPx, S, E2, 1), o$a(this._pxToNdc, 2 / _3, -2 / d3, 1), o$a(this._centerNdc, C2, T2, 1);
    const j2 = this._mat3;
    return l$6(j2, this._centerNdc), f$8(j2, j2, this._pxToNdc), 0 !== h4 && h$8(j2, j2, p3), f$8(j2, j2, this._worldDimensionsPx), M$1(j2, j2, f$1), true;
  }
};
let t$2 = class t3 {
  constructor() {
    this.name = this.constructor.name;
  }
  createOptions(t5, r6) {
    return null;
  }
};
let i$2 = class i extends t$2 {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(r6, i3) {
    if (!i3?.size)
      return;
    const { context: n4, renderingOptions: o2 } = r6;
    this._quad || (this._quad = new h$7(n4, [0, 0, 1, 0, 0, 1, 1, 1]));
    const a4 = n4.getBoundFramebufferObject(), { x: s3, y: u4, width: m3, height: d3 } = n4.getViewport(), f3 = i3.getBlock(M$2.Animation);
    if (null == f3)
      return;
    const l4 = i3.getUniforms(n4);
    n4.setViewport(0, 0, i3.size, i3.size);
    const c4 = l4.filterFlags, x2 = l4.animation, p3 = has("featurelayer-animation-enabled") ? o2.labelsAnimationTime : 1, _3 = f3.getFBO(n4, 1);
    n4.unbindTexture(_3.colorTexture), this._computeDelta(r6, _3, x2, c4, p3);
    const g2 = f3.getFBO(n4);
    n4.unbindTexture(g2.colorTexture), this._updateAnimationState(r6, _3, g2), n4.bindFramebuffer(a4), n4.setViewport(s3, u4, m3, d3);
  }
  _computeDelta(e2, t5, r6, i3, n4) {
    const { context: o2, painter: a4, displayLevel: s3 } = e2, u4 = a4.materialManager.getProgram(this._desc, ["delta"]);
    if (o2.bindFramebuffer(t5), o2.setColorMask(true, true, true, true), o2.setClearColor(0, 0, 0, 0), o2.clear(o2.gl.COLOR_BUFFER_BIT), o2.useProgram(u4), !("type" in i3.texture) || !("type" in r6.texture))
      throw new Error("InternalError: Expected to find texture");
    o2.bindTexture(i3.texture, i3.unit), o2.bindTexture(r6.texture, r6.unit), u4.setUniform1i("u_maskTexture", i3.unit), u4.setUniform1i("u_sourceTexture", r6.unit), u4.setUniform1f("u_timeDelta", e2.deltaTime), u4.setUniform1f("u_animationTime", n4), u4.setUniform1f("u_zoomLevel", Math.round(10 * s3)), this._quad.draw();
  }
  _updateAnimationState(e2, t5, r6) {
    const { context: i3, painter: n4 } = e2, o2 = n4.materialManager.getProgram(this._desc, ["update"]);
    i3.bindTexture(t5.colorTexture, 1), i3.useProgram(o2), o2.setUniform1i("u_sourceTexture", 1), i3.bindFramebuffer(r6), i3.setColorMask(true, true, true, true), i3.setClearColor(0, 0, 0, 0), i3.clear(i3.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
};
const r$2 = (e2) => e2.replace("-", "_").toUpperCase(), t$1 = (e2) => `#define ${r$2(e2)}
`;
function n$3(r6) {
  return { attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: t$1(r6) + n$8("blend/blend.vert"), fragmentShader: t$1(r6) + n$8("blend/blend.frag") } };
}
const c$2 = () => s$2.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
let m$1 = class m {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e2) {
    this._backBufferTexture = r$7(this._backBufferTexture), this._quad = r$7(this._quad);
  }
  draw(r6, t5, i3, a4, d3) {
    const { context: u4, drawPhase: f3 } = r6;
    if (this._setupShader(u4), a4 && "normal" !== a4 && f3 !== E$2.LABEL)
      return void this._drawBlended(r6, t5, i3, a4, d3);
    const m3 = n$3("normal"), h4 = u4.programCache.acquire(m3.shaders.vertexShader, m3.shaders.fragmentShader, m3.attributes);
    if (!h4)
      return void c$2().error(new s$4("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    u4.useProgram(h4), t5.setSamplingMode(i3), u4.bindTexture(t5, 0), h4.setUniform1i("u_layerTexture", 0), h4.setUniform1f("u_opacity", d3), u4.setBlendingEnabled(true), u4.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA);
    const l4 = this._quad;
    l4.draw(), l4.unbind(), h4.dispose();
  }
  _drawBlended(r6, t5, s3, i3, a4) {
    const { context: d3, state: u4, pixelRatio: f3, inFadeTransition: m3 } = r6, { size: h4 } = u4, l4 = d3.getBoundFramebufferObject();
    let _3, p3;
    null != l4 ? (_3 = l4.width, p3 = l4.height) : (_3 = Math.round(f3 * h4[0]), p3 = Math.round(f3 * h4[1])), this._createOrResizeTexture(r6, _3, p3);
    const b2 = this._backBufferTexture;
    l4.copyToTexture(0, 0, _3, p3, 0, 0, b2), d3.setStencilTestEnabled(false), d3.setStencilWriteMask(0), d3.setBlendingEnabled(true), d3.setDepthTestEnabled(false), d3.setDepthWriteEnabled(false);
    const g2 = n$3(i3), x2 = d3.programCache.acquire(g2.shaders.vertexShader, g2.shaders.fragmentShader, g2.attributes);
    if (!x2)
      return void c$2().error(new s$4("mapview-BlendEffect", `Error creating shader program for blend mode ${i3}`));
    d3.useProgram(x2), b2.setSamplingMode(s3), d3.bindTexture(b2, 0), x2.setUniform1i("u_backbufferTexture", 0), t5.setSamplingMode(s3), d3.bindTexture(t5, 1), x2.setUniform1i("u_layerTexture", 1), x2.setUniform1f("u_opacity", a4), x2.setUniform1f("u_inFadeOpacity", m3 ? 1 : 0), d3.setBlendFunction(R$1.ONE, R$1.ZERO);
    const T2 = this._quad;
    T2.draw(), T2.unbind(), x2.dispose(), d3.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e2) {
    this._quad || (this._quad = new h$7(e2, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e2, r6, t5) {
    const { context: s3 } = e2;
    if (null === this._backBufferTexture || r6 !== this._size[0] || t5 !== this._size[1]) {
      if (this._backBufferTexture)
        this._backBufferTexture.resize(r6, t5);
      else {
        const e3 = new e$7();
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, e3.width = r6, e3.height = t5, this._backBufferTexture = new m$3(s3, e3);
      }
      this._size[0] = r6, this._size[1] = t5;
    }
  }
};
class s2 extends t$2 {
  constructor(e2) {
    super(), this.name = this.constructor.name, this.defines = [e2];
  }
  dispose() {
  }
  bind({ context: e2, painter: t5 }) {
    this._prev = e2.getBoundFramebufferObject();
    const s3 = t5.getFbos().effect0;
    e2.bindFramebuffer(s3), e2.setColorMask(true, true, true, true), e2.setClearColor(0, 0, 0, 0), e2.clear(e2.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e2, s3) {
    const { context: r6, painter: o2 } = e2, n4 = o2.getPostProcessingEffects(s3), c4 = r6.getBoundFramebufferObject();
    for (const { postProcessingEffect: t5, effect: f3 } of n4)
      t5.draw(e2, c4, f3);
    r6.bindFramebuffer(this._prev), r6.setStencilTestEnabled(false), o2.blitTexture(r6, c4.colorTexture, L$2.NEAREST), r6.setStencilTestEnabled(true);
  }
}
let c$1 = class c2 {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e2, i3) {
    e2.bindTexture(i3, I$2), e2.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", t$9), e2.bindVAO(this._resources.quadVAO), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  finalBlur(e2, s3) {
    e2.bindTexture(s3, I$2), e2.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", i$9), e2.bindVAO(this._resources.quadVAO), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  renderHighlight(e2, s3, i3) {
    e2.bindTexture(s3, I$2), e2.useProgram(this._resources.highlightProgram), i3.applyHighlightOptions(e2, this._resources.highlightProgram), e2.bindVAO(this._resources.quadVAO), e2.setBlendingEnabled(true), e2.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), e2.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), e2.bindVAO();
  }
  _initialize(s3, i3, a4) {
    this._width = i3, this._height = a4;
    const m3 = h$6.createVertex(s3, F$3.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), c4 = new o$7(s3, /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new t$a("a_position", 2, C.BYTE, 0, 4), new t$a("a_texcoord", 2, C.UNSIGNED_BYTE, 2, 4)] }, { geometry: m3 }), f3 = e$3(s3, t$b), b2 = e$3(s3, r$a);
    s3.useProgram(f3), f3.setUniform1i("u_texture", I$2), f3.setUniform1i("u_shade", J), f3.setUniform1f("u_sigma", o$b), s3.useProgram(b2), b2.setUniform1i("u_texture", I$2), b2.setUniform1f("u_sigma", o$b), this._resources = { quadGeometry: m3, quadVAO: c4, highlightProgram: f3, blurProgram: b2 };
  }
  setup(r6, e2, s3) {
    this._resources ? (this._width = e2, this._height = s3) : this._initialize(r6, e2, s3);
  }
};
function i$1(i3, h4, u4) {
  const l4 = new e$7(h4, u4);
  return l4.wrapMode = D$2.CLAMP_TO_EDGE, new x$2(i3, l4, new i$a(B$2.STENCIL_INDEX8, h4, u4));
}
let h$3 = class h {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(r6, e2, s3) {
    this._width = e2, this._height = s3;
    const t5 = i$1(r6, e2, s3), o2 = i$1(r6, e2, s3);
    this._resources = { sharedBlur1Fbo: t5, sharedBlur2Fbo: o2 };
  }
  setup(r6, e2, s3) {
    !this._resources || this._width === e2 && this._height === s3 || this.dispose(), this._resources || this._initialize(r6, e2, s3);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Fbo.colorTexture;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Fbo.colorTexture;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
};
const h$2 = 4, d2 = 4 / h$2;
let l$2 = class l2 extends t$2 {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new c$1(), this._width = void 0, this._height = void 0, this._boundFBO = null, this._hlSurfaces = new h$3(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new _$2();
  }
  dispose() {
    this._hlSurfaces?.dispose(), this._hlRenderer?.dispose(), this._boundFBO = null;
  }
  bind(e2) {
    const { context: t5, painter: s3 } = e2, { width: r6, height: i3 } = t5.getViewport(), h4 = s3.getFbos().effect0;
    this.setup(e2, r6, i3), t5.bindFramebuffer(h4), t5.setColorMask(true, true, true, true), t5.setClearColor(0, 0, 0, 0), t5.clear(t5.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e2 }, t5, s3) {
    this._width = t5, this._height = s3;
    const r6 = t5 % h$2, i3 = s3 % h$2;
    t5 += r6 < h$2 / 2 ? -r6 : h$2 - r6, s3 += i3 < h$2 / 2 ? -i3 : h$2 - i3, this._adjustedWidth = t5, this._adjustedHeight = s3, this._boundFBO = e2.getBoundFramebufferObject();
    const l4 = Math.round(t5 * d2), o2 = Math.round(s3 * d2);
    this._hlRenderer.setup(e2, l4, o2), this._hlSurfaces.setup(e2, l4, o2);
  }
  draw(e2) {
    const { context: t5, passOptions: s3 } = e2, r6 = s3.activeGradient, h4 = t5.getBoundFramebufferObject();
    t5.setViewport(0, 0, this._adjustedWidth * d2, this._adjustedHeight * d2), t5.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t5.setStencilTestEnabled(false), t5.setClearColor(0, 0, 0, 0), t5.clear(t5.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(t5, h4.colorTexture, L$2.NEAREST, 1), t5.setStencilTestEnabled(false), t5.setBlendingEnabled(false), t5.setColorMask(false, false, false, true), t5.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), t5.setClearColor(0, 0, 0, 0), t5.clear(t5.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(t5, this._hlSurfaces.sharedBlur1Tex), t5.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t5.setClearColor(0, 0, 0, 0), t5.clear(t5.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(t5, this._hlSurfaces.sharedBlur2Tex), t5.bindFramebuffer(this._boundFBO), t5.setBlendingEnabled(true), t5.setColorMask(true, true, true, true), t5.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(t5, this._hlSurfaces.sharedBlur1Tex, r6), this._boundFBO = null;
  }
};
let n$2 = class n2 extends t$2 {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    null != this._fbo && this._fbo.dispose();
  }
  createOptions({ pixelRatio: e2 }, s3, i3 = T$1) {
    if (!s3.length)
      return null;
    const o2 = s3.shift(), n4 = o2.x, r6 = o2.y;
    return this._outstanding = o2, { type: "hittest", distance: i3 * e2, smallSymbolDistance: 0, smallSymbolSizeThreshold: 3, position: [n4, r6] };
  }
  bind(t5) {
    const { context: s3, attributeView: i3 } = t5;
    if (!i3.size)
      return;
    const o2 = i3.getBlock(M$2.GPGPU);
    if (null == o2)
      return;
    const n4 = o2.getFBO(s3);
    s3.setViewport(0, 0, i3.size, i3.size), s3.bindFramebuffer(n4), s3.setColorMask(true, true, true, true), s3.setClearColor(0, 0, 0, 0), s3.clear(s3.gl.COLOR_BUFFER_BIT | s3.gl.DEPTH_BUFFER_BIT);
  }
  unbind() {
  }
  draw(t5) {
    if (null == this._outstanding)
      return;
    const e2 = this._outstanding;
    this._outstanding = null, this._resolve(t5, e2.resolvers);
  }
  async _resolve(t5, s3) {
    const { context: n4, attributeView: r6 } = t5, l4 = r6.getBlock(M$2.GPGPU);
    if (null == l4)
      return void s3.forEach((t6) => t6.resolve([]));
    const c4 = l4.getFBO(n4), a4 = new Uint8Array(c4.width * c4.height * 4);
    try {
      await c4.readPixelsAsync(0, 0, c4.width, c4.height, G$2.RGBA, U.UNSIGNED_BYTE, a4);
    } catch (u4) {
      return void s3.forEach((t6) => t6.resolve([]));
    }
    const h4 = [];
    for (let e2 = 0; e2 < a4.length; e2 += 4) {
      const t6 = e2 / 4;
      a4[e2] && h4.push(t6);
    }
    s3.forEach((t6) => t6.resolve(h4));
  }
};
let r$1 = class r4 extends t$2 {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0, this._boundFBO = null;
  }
  dispose() {
    null != this._fbo && this._fbo.dispose();
  }
  bind({ context: t5, painter: e2 }) {
    this._boundFBO = t5.getBoundFramebufferObject();
    const s3 = e2.getFbos().effect0;
    t5.bindFramebuffer(s3), t5.setColorMask(true, true, true, true), t5.setClearColor(0, 0, 0, 0), t5.clear(t5.gl.COLOR_BUFFER_BIT);
  }
  unbind({ context: t5 }) {
    t5.bindFramebuffer(this._boundFBO), this._boundFBO = null;
  }
  draw(e2, s3, o2 = 2 * T$1) {
    this._resolve(e2, s3, o2);
  }
  async _resolve({ context: t5, state: e2, pixelRatio: r6 }, i3, n4) {
    const f3 = t5.getBoundFramebufferObject(), a4 = e2.size[1] * r6, u4 = Math.round(n4 * r6), h4 = u4 / 2, l4 = u4 / 2;
    this._ensureBuffer(u4), i3.forEach(async (t6, e3) => {
      const n5 = /* @__PURE__ */ new Map(), b2 = Math.floor(e3.x * r6 - u4 / 2), c4 = Math.floor(a4 - e3.y * r6 - u4 / 2);
      await f3.readPixelsAsync(b2, c4, u4, u4, G$2.RGBA, U.UNSIGNED_BYTE, this._buf);
      for (let s3 = 0; s3 < this._buf32.length; s3++) {
        const t7 = this._buf32[s3];
        if (4294967295 !== t7 && 0 !== t7) {
          const e4 = s3 % u4, o2 = u4 - Math.floor(s3 / u4), r7 = (h4 - e4) * (h4 - e4) + (l4 - o2) * (l4 - o2), i4 = n5.has(t7) ? n5.get(t7) : 4294967295;
          n5.set(t7, Math.min(r7, i4));
        }
      }
      const _3 = Array.from(n5).sort((t7, e4) => t7[1] - e4[1]).map((t7) => t7[0]);
      t6.resolve(_3), i3.delete(e3);
    });
  }
  _ensureBuffer(t5) {
    this._lastSize !== t5 && (this._lastSize = t5, this._buf = new Uint8Array(4 * t5 * t5), this._buf32 = new Uint32Array(this._buf.buffer));
  }
};
const a3 = 5, u$2 = [1, 0], l$1 = [0, 1], m2 = [1, 0.8, 0.6, 0.4, 0.2], _$1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let h$1 = class h2 {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(a3), this._nMips = a3, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad = r$7(this._quad), this._intensityFBO = r$7(this._intensityFBO), this._compositeFBO = r$7(this._compositeFBO), this._mipsFBOs) {
      for (let t5 = 0; t5 < this._nMips; t5++)
        this._mipsFBOs[t5] && (this._mipsFBOs[t5].horizontal.dispose(), this._mipsFBOs[t5].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(t5, i3, r6) {
    const { width: o2, height: n4 } = i3, { context: h4, painter: p3 } = t5, { materialManager: c4 } = p3, d3 = h4.gl, f3 = this._programDesc, { strength: b2, radius: F2, threshold: O2 } = r6;
    this._quad || (this._quad = new h$7(h4, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(t5, o2, n4), h4.setStencilTestEnabled(false), h4.setBlendingEnabled(true), h4.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), h4.setStencilWriteMask(0);
    const B2 = this._quad;
    B2.bind(), h4.bindFramebuffer(this._intensityFBO);
    const g2 = c4.getProgram(f3.luminosityHighPass);
    h4.useProgram(g2), h4.bindTexture(i3.colorTexture, 0), g2.setUniform1i("u_texture", 0), g2.setUniform3fv("u_defaultColor", [0, 0, 0]), g2.setUniform1f("u_defaultOpacity", 0), g2.setUniform1f("u_luminosityThreshold", O2), g2.setUniform1f("u_smoothWidth", 0.01);
    const T2 = [Math.round(o2 / 2), Math.round(n4 / 2)];
    h4.setViewport(0, 0, T2[0], T2[1]), h4.setClearColor(0, 0, 0, 0), h4.clear(d3.COLOR_BUFFER_BIT), B2.draw(), h4.setBlendingEnabled(false);
    let x2 = this._intensityFBO.colorTexture;
    for (let e2 = 0; e2 < this._nMips; e2++) {
      const t6 = c4.getProgram(f3.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[e2] }]);
      h4.useProgram(t6), h4.bindTexture(x2, e2 + 1), t6.setUniform1i("u_colorTexture", e2 + 1), t6.setUniform2fv("u_texSize", T2), t6.setUniform2fv("u_direction", u$2), h4.setViewport(0, 0, T2[0], T2[1]);
      const s3 = this._mipsFBOs[e2];
      h4.bindFramebuffer(s3.horizontal), B2.draw(), x2 = s3.horizontal.colorTexture, h4.bindFramebuffer(s3.vertical), h4.bindTexture(x2, e2 + 1), t6.setUniform2fv("u_direction", l$1), B2.draw(), x2 = s3.vertical.colorTexture, T2[0] = Math.round(T2[0] / 2), T2[1] = Math.round(T2[1] / 2);
    }
    h4.setViewport(0, 0, o2, n4);
    const w2 = c4.getProgram(f3.composite, [{ name: "nummips", value: a3 }]);
    h4.bindFramebuffer(this._compositeFBO), h4.useProgram(w2), w2.setUniform1f("u_bloomStrength", b2), w2.setUniform1f("u_bloomRadius", F2), w2.setUniform1fv("u_bloomFactors", m2), w2.setUniform3fv("u_bloomTintColors", _$1), h4.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), w2.setUniform1i("u_blurTexture1", 1), h4.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), w2.setUniform1i("u_blurTexture2", 2), h4.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), w2.setUniform1i("u_blurTexture3", 3), h4.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), w2.setUniform1i("u_blurTexture4", 4), h4.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), w2.setUniform1i("u_blurTexture5", 5), B2.draw(), h4.bindFramebuffer(i3), h4.setBlendingEnabled(true);
    const M2 = c4.getProgram(f3.blit);
    h4.useProgram(M2), h4.bindTexture(this._compositeFBO.colorTexture, 6), M2.setUniform1i("u_texture", 6), h4.setBlendFunction(R$1.ONE, R$1.ONE), B2.draw(), B2.unbind(), h4.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), h4.setStencilTestEnabled(true);
  }
  _createOrResizeResources(t5, e2, s3) {
    const { context: a4 } = t5;
    if (this._compositeFBO && this._size[0] === e2 && this._size[1] === s3)
      return;
    this._size[0] = e2, this._size[1] = s3;
    const u4 = [Math.round(e2 / 2), Math.round(s3 / 2)];
    if (this._compositeFBO)
      this._compositeFBO.resize(e2, s3);
    else {
      const t6 = new e$7(e2, s3);
      t6.internalFormat = G$2.RGBA, t6.wrapMode = D$2.CLAMP_TO_EDGE, this._compositeFBO = new x$2(a4, t6);
    }
    if (this._intensityFBO)
      this._intensityFBO.resize(u4[0], u4[1]);
    else {
      const t6 = new e$7(u4[0], u4[1]);
      t6.internalFormat = G$2.RGBA, t6.wrapMode = D$2.CLAMP_TO_EDGE, this._intensityFBO = new x$2(a4, t6);
    }
    for (let l4 = 0; l4 < this._nMips; l4++) {
      if (this._mipsFBOs[l4])
        this._mipsFBOs[l4].horizontal.resize(u4[0], u4[1]), this._mipsFBOs[l4].vertical.resize(u4[0], u4[1]);
      else {
        const t6 = new e$7(u4[0], u4[1]);
        t6.internalFormat = G$2.RGBA, t6.wrapMode = D$2.CLAMP_TO_EDGE, this._mipsFBOs[l4] = { horizontal: new x$2(a4, t6), vertical: new x$2(a4, t6) };
      }
      u4[0] = Math.round(u4[0] / 2), u4[1] = Math.round(u4[1] / 2);
    }
  }
};
const n$1 = [1, 0], o = [0, 1];
let u$1 = class u2 {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(t5, s3, r6) {
    const { context: i3 } = t5, { type: a4, radius: n4 } = r6;
    if (0 === n4)
      return;
    this._createOrResizeResources(t5), this._quad || (this._quad = new h$7(i3, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const o2 = this._quad;
    o2.bind(), "blur" === a4 ? this._gaussianBlur(t5, s3, n4) : this._radialBlur(t5, s3), o2.unbind();
  }
  _gaussianBlur(e2, s3, r6) {
    const { context: i3, state: a4, painter: u4, pixelRatio: l4 } = e2, { size: d3 } = a4, { materialManager: b2 } = u4, c4 = this._programDesc, _3 = this._quad, p3 = [Math.round(l4 * d3[0]), Math.round(l4 * d3[1])], h4 = this._blurFBO, m3 = b2.getProgram(c4.gaussianBlur, [{ name: "radius", value: Math.ceil(r6) }]);
    i3.useProgram(m3), i3.setBlendingEnabled(false), i3.bindFramebuffer(h4), i3.bindTexture(s3.colorTexture, 4), m3.setUniform1i("u_colorTexture", 4), m3.setUniform2fv("u_texSize", p3), m3.setUniform2fv("u_direction", n$1), m3.setUniform1f("u_sigma", r6), _3.draw(), i3.bindFramebuffer(s3), i3.setStencilWriteMask(0), i3.setStencilTestEnabled(false), i3.setDepthWriteEnabled(false), i3.setDepthTestEnabled(false), i3.bindTexture(h4?.colorTexture, 5), m3.setUniform1i("u_colorTexture", 5), m3.setUniform2fv("u_direction", o), _3.draw(), i3.setBlendingEnabled(true), i3.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), i3.setStencilTestEnabled(true);
  }
  _radialBlur(e2, s3) {
    const { context: r6, painter: i3 } = e2, { materialManager: a4 } = i3, n4 = this._programDesc, o2 = this._quad, u4 = this._blurFBO;
    r6.bindFramebuffer(u4);
    const l4 = a4.getProgram(n4.radialBlur);
    r6.useProgram(l4), r6.setBlendingEnabled(false), r6.bindTexture(s3.colorTexture, 4), l4.setUniform1i("u_colorTexture", 4), o2.draw(), r6.bindFramebuffer(s3), r6.setStencilWriteMask(0), r6.setStencilTestEnabled(false), r6.setDepthWriteEnabled(false), r6.setDepthTestEnabled(false), r6.setBlendingEnabled(true);
    const d3 = a4.getProgram(n4.blit);
    r6.useProgram(d3), r6.bindTexture(u4?.colorTexture, 5), d3.setUniform1i("u_texture", 5), r6.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), o2.draw();
  }
  _createOrResizeResources(e2) {
    const { context: t5, state: n4, pixelRatio: o2 } = e2, { size: u4 } = n4, l4 = Math.round(o2 * u4[0]), d3 = Math.round(o2 * u4[1]);
    if (!this._blurFBO || this._size[0] !== l4 || this._size[1] !== d3)
      if (this._size[0] = l4, this._size[1] = d3, this._blurFBO)
        this._blurFBO.resize(l4, d3);
      else {
        const e3 = new e$7(l4, d3);
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, this._blurFBO = new x$2(t5, e3);
      }
  }
};
class n3 {
  constructor() {
    this._layerFBOTexture = null, this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture = r$7(this._layerFBOTexture);
  }
  draw(e2, t5, s3) {
    const { width: i3, height: o2 } = t5;
    this._createOrResizeResources(e2, i3, o2);
    const { context: a4, painter: n4 } = e2, { materialManager: c4 } = n4, l4 = this._programDesc, u4 = this._quad, _3 = s3.colorMatrix;
    u4.bind();
    const h4 = this._layerFBOTexture;
    a4.bindFramebuffer(t5), t5.copyToTexture(0, 0, i3, o2, 0, 0, h4), a4.setBlendingEnabled(false), a4.setStencilTestEnabled(false);
    const m3 = c4.getProgram(l4);
    a4.useProgram(m3), a4.bindTexture(h4, 2), m3.setUniformMatrix4fv("u_coefficients", _3), m3.setUniform1i("u_colorTexture", 2), u4.draw(), a4.setBlendingEnabled(true), a4.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), a4.setStencilTestEnabled(true), u4.unbind();
  }
  _createOrResizeResources(e2, r6, n4) {
    const { context: c4 } = e2;
    if (!this._layerFBOTexture || this._size[0] !== r6 || this._size[1] !== n4) {
      if (this._size[0] = r6, this._size[1] = n4, this._layerFBOTexture)
        this._layerFBOTexture.resize(r6, n4);
      else {
        const e3 = new e$7();
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, e3.width = r6, e3.height = n4, this._layerFBOTexture = new m$3(c4, e3);
      }
      this._quad || (this._quad = new h$7(c4, [-1, -1, 1, -1, -1, 1, 1, 1]));
    }
  }
}
const u3 = [1, 0], h3 = [0, 1];
class _2 {
  constructor() {
    this._layerFBOTexture = null, this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._quad = null, this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture = r$7(this._layerFBOTexture), this._horizontalBlurFBO = r$7(this._horizontalBlurFBO), this._verticalBlurFBO = r$7(this._verticalBlurFBO);
  }
  draw(e2, i3, o2) {
    const { context: a4, state: n4, painter: l4 } = e2, { materialManager: _3 } = l4, c4 = this._programDesc, p3 = i3.width, m3 = i3.height, f3 = [Math.round(p3), Math.round(m3)], { blurRadius: B2, offsetX: d3, offsetY: b2, color: O2 } = o2, F2 = [u$5(d3), u$5(b2)];
    this._createOrResizeResources(e2, p3, m3, f3);
    const w2 = this._horizontalBlurFBO, T2 = this._verticalBlurFBO;
    a4.setStencilWriteMask(0), a4.setStencilTestEnabled(false), a4.setDepthWriteEnabled(false), a4.setDepthTestEnabled(false);
    const x2 = this._layerFBOTexture;
    i3.copyToTexture(0, 0, p3, m3, 0, 0, x2), this._quad || (this._quad = new h$7(a4, [-1, -1, 1, -1, -1, 1, 1, 1])), a4.setViewport(0, 0, f3[0], f3[1]);
    const g2 = this._quad;
    g2.bind(), a4.setBlendingEnabled(false);
    const z2 = _3.getProgram(c4.blur, [{ name: "radius", value: Math.ceil(B2) }]);
    a4.useProgram(z2), a4.bindFramebuffer(w2), a4.bindTexture(i3.colorTexture, 4), z2.setUniform1i("u_colorTexture", 4), z2.setUniform2fv("u_texSize", f3), z2.setUniform2fv("u_direction", u3), z2.setUniform1f("u_sigma", B2), g2.draw(), a4.bindFramebuffer(T2), a4.bindTexture(w2?.colorTexture, 5), z2.setUniform1i("u_colorTexture", 5), z2.setUniform2fv("u_direction", h3), g2.draw(), a4.bindFramebuffer(i3), a4.setViewport(0, 0, p3, m3);
    const M2 = _3.getProgram(c4.composite);
    a4.useProgram(M2), a4.bindTexture(T2?.colorTexture, 2), M2.setUniform1i("u_blurTexture", 2), a4.bindTexture(x2, 3), M2.setUniform1i("u_layerFBOTexture", 3), M2.setUniform4fv("u_shadowColor", [O2[3] * (O2[0] / 255), O2[3] * (O2[1] / 255), O2[3] * (O2[2] / 255), O2[3]]), M2.setUniformMatrix3fv("u_displayViewMat3", n4.displayMat3), M2.setUniform2fv("u_shadowOffset", F2), g2.draw(), a4.setBlendingEnabled(true), a4.setStencilTestEnabled(true), a4.setBlendFunction(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), g2.unbind();
  }
  _createOrResizeResources(e2, t5, r6, s3) {
    const { context: u4 } = e2;
    if (!this._horizontalBlurFBO || this._size[0] !== t5 || this._size[1] !== r6) {
      if (this._size[0] = t5, this._size[1] = r6, this._horizontalBlurFBO)
        this._horizontalBlurFBO.resize(s3[0], s3[1]);
      else {
        const e3 = new e$7(s3[0], s3[1]);
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, this._horizontalBlurFBO = new x$2(u4, e3);
      }
      if (this._verticalBlurFBO)
        this._verticalBlurFBO.resize(s3[0], s3[1]);
      else {
        const e3 = new e$7(s3[0], s3[1]);
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, this._verticalBlurFBO = new x$2(u4, e3);
      }
      if (this._layerFBOTexture)
        this._layerFBOTexture.resize(t5, r6);
      else {
        const e3 = new e$7();
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, e3.width = t5, e3.height = r6, this._layerFBOTexture = new m$3(u4, e3);
      }
    }
  }
}
class l3 {
  constructor() {
    this._size = [0, 0], this._layerFBOTexture = null;
  }
  dispose() {
    this._layerFBOTexture = r$7(this._layerFBOTexture);
  }
  draw(e2, r6, s3) {
    const { width: i3, height: o2 } = r6;
    this._createOrResizeResources(e2, i3, o2);
    const { context: l4, painter: a4 } = e2, { amount: n4 } = s3, h4 = l4.gl, u4 = this._layerFBOTexture;
    l4.bindFramebuffer(r6), r6.copyToTexture(0, 0, i3, o2, 0, 0, u4), l4.setBlendingEnabled(true), l4.setStencilTestEnabled(false), l4.setDepthTestEnabled(false), l4.setClearColor(0, 0, 0, 0), l4.clear(h4.COLOR_BUFFER_BIT), a4.blitTexture(l4, u4, L$2.NEAREST, n4);
  }
  _createOrResizeResources(e2, l4, a4) {
    const { context: n4 } = e2;
    if (!this._layerFBOTexture || this._size[0] !== l4 || this._size[1] !== a4)
      if (this._size[0] = l4, this._size[1] = a4, this._layerFBOTexture)
        this._layerFBOTexture.resize(l4, a4);
      else {
        const e3 = new e$7();
        e3.internalFormat = G$2.RGBA, e3.wrapMode = D$2.CLAMP_TO_EDGE, e3.samplingMode = L$2.NEAREST, e3.width = l4, e3.height = a4, this._layerFBOTexture = new m$3(n4, e3);
      }
  }
}
function c3(o2) {
  switch (o2) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return o2;
    default:
      return "colorize";
  }
}
const f2 = { colorize: () => new n3(), blur: () => new u$1(), bloom: () => new h$1(), opacity: () => new l3(), "drop-shadow": () => new _2() };
class i2 {
  constructor() {
    this._effectMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._effectMap.forEach((o2) => o2.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(o2) {
    if (!o2 || 0 === o2.length)
      return [];
    const e2 = [];
    for (const t5 of o2) {
      const o3 = c3(t5.type);
      let s3 = this._effectMap.get(o3);
      s3 || (s3 = f2[o3](), this._effectMap.set(o3, s3)), e2.push({ postProcessingEffect: s3, effect: t5 });
    }
    return e2;
  }
}
class t4 {
  constructor(e2, t5) {
    this.brushes = e2, this.name = t5.name, this.drawPhase = t5.drawPhase || E$2.MAP, this._targetFn = t5.target, this.effects = t5.effects || [], this.enableDefaultDraw = t5.enableDefaultDraw ?? (() => true), this.forceDrawByDisplayOrder = !!t5.forceDrawByDisplayOrder;
  }
  render(e2) {
    const { context: r6, profiler: t5 } = e2, s3 = this._targetFn(), a4 = this.drawPhase & e2.drawPhase;
    if (t5.recordPassStart(this.name), a4) {
      this.enableDefaultDraw() && this._doRender(e2, s3), t5.recordPassEnd();
      for (const t6 of this.effects) {
        if (!t6.enable())
          continue;
        const a5 = t6.apply, n4 = t6.args?.(), i3 = r6.getViewport(), o2 = r6.getBoundFramebufferObject(), d3 = e2.passOptions;
        this._bindEffect(e2, a5, n4), this._doRender(e2, s3, a5.defines), this._drawAndUnbindEffect(e2, a5, i3, o2, d3, n4);
      }
    }
  }
  _doRender(e2, r6, t5) {
    if (null == r6)
      return;
    const { profiler: s3, context: a4 } = e2;
    for (const n4 of this.brushes) {
      if (s3.recordBrushStart(n4.name), null != n4.brushEffect) {
        const s4 = a4.getViewport(), i3 = a4.getBoundFramebufferObject(), o2 = e2.passOptions;
        this._bindEffect(e2, n4.brushEffect), this._drawWithBrush(n4, e2, r6, t5), this._drawAndUnbindEffect(e2, n4.brushEffect, s4, i3, o2);
      } else
        this._drawWithBrush(n4, e2, r6, t5);
      s3.recordBrushEnd();
    }
  }
  _drawWithBrush(r6, t5, s3, a4) {
    m$5(s3) ? (r6.prepareState(t5, a4), r6.drawMany(t5, s3, a4)) : s3.visible && (r6.prepareState(t5, a4), r6.draw(t5, s3, a4));
  }
  _bindEffect(e2, r6, t5) {
    const { profiler: s3 } = e2;
    s3.recordPassStart(this.name + "." + r6.name), r6.bind(e2, t5);
    const a4 = r6.createOptions(e2, t5);
    e2.passOptions = a4;
  }
  _drawAndUnbindEffect(e2, r6, t5, s3, a4, n4) {
    const { profiler: i3, context: o2 } = e2;
    e2.passOptions = a4, i3.recordBrushStart(r6.name), r6.draw(e2, n4), r6.unbind(e2, n4), o2.bindFramebuffer(s3);
    const { x: d3, y: f3, width: h4, height: c4 } = t5;
    o2.setViewport(d3, f3, h4, c4), i3.recordBrushEnd(), i3.recordPassEnd();
  }
}
class r5 {
  constructor() {
    this._programCache = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const r6 of this._programCache.values())
      r6.destroy();
    this._programCache.clear();
  }
  getProgram(r6, e2, t5, a4, o2) {
    const s3 = r6.getShaderKey(e2, t5, a4, o2);
    let c4 = this._programCache.get(s3);
    return c4 || (c4 = r6.getProgram(e2, t5, a4, o2), this._programCache.set(s3, c4)), c4;
  }
}
class D {
  constructor(e$12, t5) {
    this.context = e$12, this._currentPipelineStateNeedsUpdate = false, this._blitRenderer = new _$2(), this._worldExtentRenderer = new u$3(), this._brushCache = /* @__PURE__ */ new Map(), this._lastWidth = null, this._lastHeight = null, this._vtlMaterialManager = new p$3(), this._blendEffect = new m$1(), this._stencilBuf = null, this._prevBeforeLayerFBOStack = [], this._fboPool = [], this.effects = { highlight: new l$2(), hittest: new n$2(), hittestVTL: new r$1(), integrate: new i$2(), insideEffect: new s2("inside"), outsideEffect: new s2("outside") }, this._programCache = new r5(), this._shaderState = { shader: null, uniforms: null, defines: null, optionalAttributes: null, useComputeBuffer: false }, this.materialManager = new e(e$12), this.textureManager = new k(t5), this.textureUploadManager = new r$3(t5), this._effectsManager = new i2(), this._quadMesh = new h$7(e$12, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  dispose() {
    if (this._programCache.destroy(), this.materialManager.dispose(), this.textureManager.dispose(), this.textureUploadManager.destroy(), this._blitRenderer = r$7(this._blitRenderer), this._worldExtentRenderer = r$7(this._worldExtentRenderer), this._quadMesh.dispose(), this._brushCache && (this._brushCache.forEach((e2) => e2.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos) {
      let e2;
      for (e2 in this._fbos)
        this._fbos[e2] && this._fbos[e2].dispose();
    }
    for (const e2 of this._fboPool)
      e2.dispose();
    if (this._fboPool.length = 0, this.effects) {
      let e2;
      for (e2 in this.effects)
        this.effects[e2] && this.effects[e2].dispose();
    }
    this._effectsManager.dispose(), this._blendEffect.dispose(this.context), this._vtlMaterialManager = r$7(this._vtlMaterialManager);
  }
  clearShaderCache() {
    this._programCache.destroy(), this._programCache = new r5();
  }
  get blitRenderer() {
    return this._blitRenderer;
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getFbos() {
    if (!this._fbos)
      throw new Error("InternalError: Painter FBOs not initialized");
    return this._fbos;
  }
  acquireFbo(e2, t5) {
    let s3;
    if (this._fboPool.length > 0)
      s3 = this._fboPool.pop();
    else {
      const r6 = new e$7(e2, t5);
      r6.samplingMode = L$2.NEAREST, r6.wrapMode = D$2.CLAMP_TO_EDGE, s3 = new x$2(this.context, r6, this._stencilBuf);
    }
    return s3.width === e2 && s3.height === t5 || s3.resize(e2, t5), s3;
  }
  releaseFbo(e2) {
    this._fboPool.push(e2);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderPhases(e2, t5, s3) {
    const { context: r6 } = e2;
    this._worldExtentRenderer.render(e2, t5, s3);
    const { width: i3, height: n4 } = r6.getViewport();
    if (this.updateFBOs(i3, n4), this._prevFBO = r6.getBoundFramebufferObject(), r6.bindFramebuffer(this.getFbos().output), r6.setColorMask(true, true, true, true), null != t5) {
      const { r: e3, g: s4, b: i4, a: n5 } = t5;
      r6.setClearColor(n5 * e3 / 255, n5 * s4 / 255, n5 * i4 / 255, n5);
    } else
      r6.setClearColor(0, 0, 0, 0);
    r6.setDepthWriteEnabled(true), r6.setClearDepth(1), r6.clear(r6.gl.COLOR_BUFFER_BIT | r6.gl.DEPTH_BUFFER_BIT), r6.setDepthWriteEnabled(false);
  }
  afterRenderPhases(e2) {
    const { context: t5 } = e2;
    t5.bindFramebuffer(this._prevFBO), t5.setStencilFunction(O$1.EQUAL, 1, 255), t5.setStencilTestEnabled(true), t5.setDepthTestEnabled(false), this.blitTexture(t5, this.getFbos().output.colorTexture, L$2.NEAREST);
  }
  beforeRenderLayer(e2, t5, s3) {
    const { context: r6, blendMode: i3, effects: n4, drawPhase: a4, requireFBO: o2 } = e2;
    if (o2 || x(a4, i3, n4, s3)) {
      const e3 = r6.getBoundFramebufferObject();
      this._prevBeforeLayerFBOStack.push(e3);
      const { width: t6, height: s4 } = r6.getViewport(), i4 = this.acquireFbo(t6, s4);
      r6.bindFramebuffer(i4), r6.setColorMask(true, true, true, true), r6.setClearColor(0, 0, 0, 0), r6.setDepthWriteEnabled(true), r6.setClearDepth(1), r6.clear(r6.gl.COLOR_BUFFER_BIT | r6.gl.DEPTH_BUFFER_BIT), r6.setDepthWriteEnabled(false);
    }
    r6.setDepthWriteEnabled(false), r6.setDepthTestEnabled(false), r6.setStencilTestEnabled(true), r6.setClearStencil(t5), r6.setStencilWriteMask(255), r6.clear(r6.gl.STENCIL_BUFFER_BIT);
  }
  afterRenderLayer(e2, t5) {
    const { context: s3, blendMode: r6, effects: n4, requireFBO: a4, drawPhase: o2 } = e2;
    if (a4 || x(o2, r6, n4, t5)) {
      const a5 = s3.getBoundFramebufferObject();
      null != n4 && n4.length > 0 && o2 === E$2.MAP && (s3.setColorMask(true, true, true, true), this._applyEffects(e2, n4, a5)), s3.bindFramebuffer(this._prevBeforeLayerFBOStack.pop()), s3.setStencilTestEnabled(false), s3.setStencilWriteMask(0), s3.setBlendingEnabled(true), s3.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), s3.setColorMask(true, true, true, true);
      const l4 = null == r6 || o2 === E$2.HIGHLIGHT ? "normal" : r6;
      this._blendEffect.draw(e2, a5.colorTexture, L$2.NEAREST, l4, t5), this.releaseFbo(a5);
    }
  }
  renderObject(e2, s3, r6, i3) {
    const n4 = h$9[r6];
    if (!n4)
      return;
    let a4 = this._brushCache.get(n4);
    void 0 === a4 && (a4 = new n4(), this._brushCache.set(n4, a4)), a4.prepareState(e2), a4.draw(e2, s3, i3);
  }
  renderObjects(e2, s3, r6, i3) {
    const n4 = h$9[r6];
    if (!n4)
      return;
    let a4 = this._brushCache.get(n4);
    void 0 === a4 && (a4 = new n4(), this._brushCache.set(n4, a4)), a4.drawMany(e2, s3, i3);
  }
  registerRenderPass(e2) {
    const t$12 = e2.brushes.map((e3) => (this._brushCache.has(e3) || this._brushCache.set(e3, new e3()), this._brushCache.get(e3)));
    return new t4(t$12, e2);
  }
  blitTexture(e2, t5, s3, r6 = 1) {
    e2.setBlendingEnabled(true), e2.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), e2.setColorMask(true, true, true, true), this._blitRenderer.render(e2, t5, s3, r6), this._currentPipelineStateNeedsUpdate = true;
  }
  getPostProcessingEffects(e2) {
    return this._effectsManager.getPostProcessingEffects(e2);
  }
  updateFBOs(e2, t5) {
    if (e2 !== this._lastWidth || t5 !== this._lastHeight) {
      if (this._lastWidth = e2, this._lastHeight = t5, this._fbos) {
        let s4;
        for (s4 in this._fbos)
          this._fbos[s4].resize(e2, t5);
        return;
      }
      const s3 = new e$7(e2, t5);
      s3.samplingMode = L$2.NEAREST, s3.wrapMode = D$2.CLAMP_TO_EDGE;
      const r6 = new i$a(B$2.DEPTH_STENCIL, e2, t5);
      this._stencilBuf = new s$7(this.context, r6), this._fbos = { output: new x$2(this.context, s3, this._stencilBuf), effect0: new x$2(this.context, s3, this._stencilBuf) };
    }
  }
  _applyEffects(e2, t5, s3) {
    const { context: r6 } = e2, i3 = this._effectsManager.getPostProcessingEffects(t5);
    for (const { postProcessingEffect: n4, effect: a4 } of i3)
      r6.bindFramebuffer(s3), n4.draw(e2, s3, a4);
    this._currentPipelineStateNeedsUpdate = true;
  }
  setShader(e2) {
    this._shaderState.shader = e2.shader, this._shaderState.uniforms = e2.uniforms, this._shaderState.defines = e2.defines, this._shaderState.optionalAttributes = e2.optionalAttributes, this._shaderState.useComputeBuffer = e2.useComputeBuffer ?? false;
  }
  setPipelineState(e2) {
    e2 !== this._currentPipelineState && (this._currentPipelineState = e2, this._currentPipelineStateNeedsUpdate = true);
  }
  submitDraw(e2, t5) {
    const { instance: s3 } = t5, r6 = s3.instanceId, { shader: i3, uniforms: n4, defines: a4, optionalAttributes: o2, useComputeBuffer: l4 } = this._shaderState, h4 = t5.target.getMesh(r6), f3 = { useComputeBuffer: l4, locationInfo: i3.locationInfo, computeAttributeMap: i3.computeAttributes }, c4 = h4.getLayout(f3);
    if (null == c4)
      return null;
    const { primitive: d3, count: u4, offset: p3 } = h4.getDrawArgs(E$1.TRIANGLES, t5.count, t5.start * Uint32Array.BYTES_PER_ELEMENT, l4), _3 = this._programCache.getProgram(i3, c4, n4, a4 ?? {}, o2 ?? {});
    _3.setUniforms(n4), _3.bind(e2), this.updatePipelineState(e2), this._updateStencilRef(e2, t5.target);
    const b2 = h4.getVAO(e2, i3.locationInfo, f3);
    return e2.bindVAO(b2), e2.drawElements(d3, u4, C.UNSIGNED_INT, p3), e2.bindVAO(null), _3.cleanupTemporaryTextures(), { vertexShader: _3.vertexShader, fragmentShader: _3.fragmentShader };
  }
  submitDrawQuad(e2) {
    const { shader: t5, uniforms: s3, defines: r6, optionalAttributes: i3 } = this._shaderState, n4 = this._programCache.getProgram(t5, this._quadMesh.layout, s3, r6 ?? {}, i3 ?? {});
    n4.setUniforms(s3), n4.bind(e2), this.updatePipelineState(e2), this._updateStencilRef(e2, null), this._quadMesh.draw(), e2.bindVAO(null), n4.cleanupTemporaryTextures();
  }
  submitDrawMesh(e2, t5, s3) {
    const { shader: r6, uniforms: i3, defines: n4, optionalAttributes: a4 } = this._shaderState, o2 = this._programCache.getProgram(r6, t5.layout, i3, n4 ?? {}, a4 ?? {});
    if (o2.setUniforms(i3), o2.bind(e2), this.updatePipelineState(e2), this._updateStencilRef(e2, null), s3)
      for (const l4 of s3)
        t5.bind(e2, l4), t5.draw(e2);
    else
      for (let l4 = 0; l4 < t5.parts.length; l4++)
        t5.bind(e2, l4), t5.draw(e2);
    t5.unbind(e2), o2.cleanupTemporaryTextures();
  }
  updatePipelineState(e2) {
    this._currentPipelineStateNeedsUpdate && (this._currentPipelineStateNeedsUpdate = false, this._updatePipelineState(e2));
  }
  _updatePipelineState(e2) {
    if (null == this._currentPipelineState)
      throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { color: t5, depth: s3, stencil: r6 } = this._currentPipelineState;
    if (t5) {
      const { blendMode: s4, write: r7 } = t5;
      switch (e2.setColorMask(...r7), e2.setBlendingEnabled(true), e2.setBlendEquation(T$2.ADD), s4) {
        case "composite":
          e2.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA);
          break;
        case "additive":
          e2.setBlendFunctionSeparate(R$1.ONE, R$1.ONE, R$1.ONE, R$1.ONE);
          break;
        case "custom": {
          const { blendParameters: s5 } = t5, { dstAlpha: r8, dstRGB: i3, srcAlpha: n4, srcRGB: a4 } = s5;
          e2.setBlendFunctionSeparate(a4, i3, n4, r8);
          break;
        }
        case "delete":
          e2.setBlendEquation(T$2.REVERSE_SUBTRACT), e2.setBlendFunctionSeparate(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA, R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA);
      }
    }
    if (s3) {
      const { test: t6, write: r7 } = s3;
      r7 ? (e2.setDepthWriteEnabled(true), e2.setDepthRange(r7.zNear, r7.zFar)) : e2.setDepthWriteEnabled(false), t6 ? (e2.setDepthTestEnabled(true), e2.setDepthFunction(t6)) : e2.setDepthTestEnabled(false);
    } else
      e2.setDepthTestEnabled(false), e2.setDepthWriteEnabled(false);
    if (r6) {
      const { test: t6, write: s4 } = r6;
      if (t6) {
        const { compare: s5, mask: r7, op: i3, ref: n4 } = t6;
        e2.setStencilTestEnabled(true), "function" != typeof n4 && e2.setStencilFunctionSeparate(N$2.FRONT_AND_BACK, s5, n4, r7), e2.setStencilOpSeparate(N$2.FRONT_AND_BACK, i3.fail, i3.zFail, i3.zPass);
      } else
        e2.setStencilTestEnabled(false);
      if (s4) {
        const { mask: t7 } = s4;
        e2.setStencilWriteMask(t7);
      } else
        e2.setStencilWriteMask(0);
    } else
      e2.setStencilTestEnabled(false), e2.setStencilWriteMask(0);
  }
  _updateStencilRef(e2, t5) {
    if (null == this._currentPipelineState)
      throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { stencil: s3 } = this._currentPipelineState;
    if (s3) {
      const { test: r6 } = s3;
      if (r6) {
        const { compare: s4, mask: i3, ref: n4 } = r6;
        "function" == typeof n4 && e2.setStencilFunctionSeparate(N$2.FRONT_AND_BACK, s4, n4(t5), i3);
      }
    }
  }
}
function x(e2, t5, s3, r6) {
  return e2 !== E$2.LABEL_ALPHA && e2 !== E$2.LABEL && e2 !== E$2.HIGHLIGHT && (1 !== r6 || null != t5 && "normal" !== t5 || null != s3 && s3.length > 0);
}
const O = 2e3;
class v extends h$a {
  constructor(t5, i3) {
    super(), this._trash = /* @__PURE__ */ new Set(), this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this._renderRequested = r$b(false), this.stage = this, this._stationary = true, this._reshuffleManager = new s$8(), this._canvas = new l$4(t5), this.context = new w$3(this._canvas.gl, i3.contextOptions ?? {}), this.painter = new D(this.context, this), this._cimAnalyzer = new w(this.painter.textureManager.resourceManager), has("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), t5.appendChild(this._debugOutput));
    const a4 = () => this._highlightGradient;
    this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: false, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: false, effects: null, context: this.context, painter: this.painter, timeline: i3.timeline || new e$a(), renderingOptions: i3.renderingOptions, requestRender: () => this.requestRender(), allowDelayedRender: false, requireFBO: false, profiler: new n$9(this.context, this._debugOutput), dataUploadCounter: 0, get highlightGradient() {
      return a4();
    }, reshuffleManager: this._reshuffleManager, backgroundColor: i3.backgroundColor }, this._taskHandle = A$4({ render: (e2) => this.renderFrame(e2) }), this._taskHandle.pause(), this._lostWebGLContextHandle = this._canvas.events.on("webgl-context-lost", (t6) => this.emit("webgl-error", { error: new s$4("webgl-context-lost", t6.statusMessage) })), this._bufferPool = new i$b(), F$4();
  }
  destroy() {
    T$3(this.context), this.removeAllChildren(), this._emptyTrash(), this._taskHandle = l$7(this._taskHandle), this._lostWebGLContextHandle = l$7(this._lostWebGLContextHandle), this._canvas.destroy(), this._debugOutput?.parentNode?.removeChild(this._debugOutput), this._bufferPool.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get textureManager() {
    return this.painter.textureManager;
  }
  get backgroundColor() {
    return this._renderParameters.backgroundColor;
  }
  set backgroundColor(e2) {
    this._renderParameters.backgroundColor = e2, this.requestRender();
  }
  get bufferPool() {
    return this._bufferPool;
  }
  get cimAnalyzer() {
    return this._cimAnalyzer;
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e2) {
    this._renderingOptions = e2, this.requestRender();
  }
  get renderRequested() {
    return this._renderRequested.value;
  }
  get state() {
    return this._state;
  }
  set state(e2) {
    this._state = e2, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e2) {
    this._stationary !== e2 && (this._stationary = e2, this.requestRender());
  }
  trashDisplayObject(e2) {
    this._trash.add(e2), this.requestRender();
  }
  untrashDisplayObject(e2) {
    return this._trash.delete(e2);
  }
  requestRender() {
    this._renderRemainingTime = O, this.renderRequested || (this._renderRequested.value = true, this._taskHandle.resume());
  }
  renderFrame(e2) {
    const t5 = this._lastFrameRenderTime ? e2.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t5, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e2.time, this._renderRequested.value = false, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e2.time, this._renderParameters.deltaTime = e2.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash();
  }
  _createTransforms() {
    return { displayViewScreenMat3: e$9() };
  }
  renderChildren(e2) {
    for (const t5 of this.children)
      t5.beforeRender(e2);
    this._reshuffleManager.reshuffle(vt), this._canvas.render(e2, () => this._renderChildren(this.children, e2));
    for (const t5 of this.children)
      t5.afterRender(e2);
  }
  _renderChildren(e2, t5) {
    const r6 = this.context;
    this.painter.textureUploadManager.upload(), r6.resetInfo(), t5.profiler.recordStart("drawLayers"), t5.dataUploadCounter = 0, this.painter.beforeRenderPhases(t5, t5.backgroundColor, this.state.padding), t5.drawPhase = E$2.MAP;
    for (const s3 of e2)
      s3.processRender(t5);
    if (this.children.some((e3) => e3.hasHighlight)) {
      t5.drawPhase = E$2.HIGHLIGHT;
      for (const r7 of e2)
        r7.processRender(t5);
    }
    if (this.children.some((e3) => e3.hasLabels)) {
      t5.drawPhase = E$2.LABEL;
      for (const r7 of e2)
        r7.processRender(t5);
    }
    if (has("esri-tiles-debug")) {
      t5.drawPhase = E$2.DEBUG;
      for (const r7 of e2)
        r7.processRender(t5);
    }
    this.painter.afterRenderPhases(t5), t5.profiler.recordEnd("drawLayers"), r6.logInfo();
  }
  doRender(e2) {
    const t5 = this.context, { state: r6, pixelRatio: s3 } = e2;
    this._canvas.resize(e2), t5.setViewport(0, 0, s3 * r6.size[0], s3 * r6.size[1]), t5.setDepthWriteEnabled(true), t5.setStencilWriteMask(255), this.renderChildren(e2);
  }
  async takeScreenshot(e2, t5, r6, s3) {
    const i3 = Math.round(this.state.size[0] * e2.resolutionScale), n4 = Math.round(this.state.size[1] * e2.resolutionScale), a4 = e2.resolutionScale, o2 = this.context, h4 = this._state.clone();
    if (null != s3) {
      const e3 = h4.viewpoint;
      h4.viewpoint.rotation = s3, h4.viewpoint = e3;
    }
    const d3 = { ...this._renderParameters, drawPhase: null, globalOpacity: 1, stationary: true, state: h4, pixelRatio: a4, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: false, backgroundColor: r6 }, l4 = new e$7(i3, n4);
    l4.wrapMode = D$2.CLAMP_TO_EDGE, l4.internalFormat = P$2.RGBA8, l4.isImmutable = true;
    const m3 = new x$2(o2, l4, new i$a(B$2.DEPTH_STENCIL, i3, n4)), c4 = o2.getBoundFramebufferObject(), u4 = o2.getViewport();
    o2.bindFramebuffer(m3), o2.setViewport(0, 0, i3, n4), this._renderChildren(t5 ?? this.children, d3);
    const p3 = this._readbackScreenshot(m3, { ...e2.cropArea, y: n4 - (e2.cropArea.y + e2.cropArea.height) });
    o2.bindFramebuffer(c4), o2.setViewport(u4.x, u4.y, u4.width, u4.height), this.requestRender();
    const f3 = await p3;
    let g2;
    return 1 === e2.outputScale ? g2 = f3 : (g2 = new ImageData(Math.round(f3.width * e2.outputScale), Math.round(f3.height * e2.outputScale)), w$4(f3, g2, true)), m3.dispose(), g2;
  }
  async _readbackScreenshot(e2, t5) {
    const r6 = s$9(t5.width, t5.height, document.createElement("canvas"));
    return await e2.readPixelsAsync(t5.x, t5.y, t5.width, t5.height, G$2.RGBA, U.UNSIGNED_BYTE, new Uint8Array(r6.data.buffer)), r6;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e2 = Array.from(this._trash);
      this._trash.clear();
      for (const t5 of e2)
        t5.processDetach();
    }
  }
}
class A extends i$c {
  constructor() {
    super(), this._handles = new e$b(), this._resourcePixelRatio = 1, this.visible = false;
  }
  destroy() {
    this._handles = u$9(this._handles), this._disposeRenderResources(), this._resourcesTask = e$c(this._resourcesTask);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e2) {
    this._backgroundColor = e2, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e2) {
    this._magnifier = e2, this._handles.removeAll(), this._handles.add([d$1(() => e2.version, () => {
      this.visible = e2.visible && null != e2.position && e2.size > 0, this.requestRender();
    }, P$3), d$1(() => [e2.maskUrl, e2.overlayUrl], () => this._reloadResources()), d$1(() => e2.size, () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e$9() };
  }
  doRender(e2) {
    const r6 = e2.context;
    if (!this._resourcesTask)
      return void this._reloadResources();
    if (e2.drawPhase !== E$2.MAP || !this._canRender())
      return;
    this._updateResources(e2);
    const s3 = this._magnifier;
    if (null == s3.position)
      return;
    const i3 = e2.pixelRatio, o2 = s3.size * i3, a4 = 1 / s3.factor, n4 = Math.ceil(a4 * o2);
    this._readbackTexture.resize(n4, n4);
    const { size: l4 } = e2.state, h4 = i3 * l4[0], m3 = i3 * l4[1], u4 = 0.5 * n4, c4 = 0.5 * n4, _3 = e$d(i3 * s3.position.x, u4, h4 - u4 - 1), p3 = e$d(m3 - i3 * s3.position.y, c4, m3 - c4 - 1);
    r6.setBlendingEnabled(true);
    const f3 = _3 - u4, g2 = p3 - c4, b2 = this._readbackTexture;
    r6.bindTexture(b2, 0), r6.gl.copyTexImage2D(b2.descriptor.target, 0, b2.descriptor.pixelFormat, f3, g2, n4, n4, 0);
    const T2 = this.backgroundColor, y2 = T2 ? [T2.a * T2.r / 255, T2.a * T2.g / 255, T2.a * T2.b / 255, T2.a] : [1, 1, 1, 1], R2 = (_3 + s3.offset.x * i3) / h4 * 2 - 1, k2 = (p3 - s3.offset.y * i3) / m3 * 2 - 1, v2 = o2 / h4 * 2, j2 = o2 / m3 * 2, A2 = this._program;
    r6.bindVAO(this._vertexArrayObject), r6.bindTexture(this._overlayTexture, 6), r6.bindTexture(this._maskTexture, 7), r6.useProgram(A2), A2.setUniform4fv("u_background", y2), A2.setUniform1i("u_readbackTexture", 0), A2.setUniform1i("u_overlayTexture", 6), A2.setUniform1i("u_maskTexture", 7), A2.setUniform4f("u_drawPos", R2, k2, v2, j2), A2.setUniform1i("u_maskEnabled", s3.maskEnabled ? 1 : 0), A2.setUniform1i("u_overlayEnabled", s3.overlayEnabled ? 1 : 0), r6.setStencilTestEnabled(false), r6.setColorMask(true, true, true, true), r6.drawArrays(E$1.TRIANGLE_STRIP, 0, 4), r6.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && null != this._magnifier;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const s3 = null != this._magnifier ? this._magnifier.maskUrl : null, t5 = null != this._magnifier ? this._magnifier.overlayUrl : null;
    this._resourcesTask = d$2(async (r6) => {
      const i3 = null == s3 || null == t5 ? s$a(r6) : null, o2 = null != s3 ? U$1(s3, { responseType: "image", signal: r6 }).then((e2) => e2.data) : i3.then((e2) => e2.mask), a4 = null != t5 ? U$1(t5, { responseType: "image", signal: r6 }).then((e2) => e2.data) : i3.then((e2) => e2.overlay), [n4, l4] = await Promise.all([o2, a4]);
      this.mask = n4, this.overlay = l4, this._disposeRenderResources(), this.requestRender();
    });
  }
  _disposeRenderResources() {
    this._readbackTexture = r$7(this._readbackTexture), this._overlayTexture = r$7(this._overlayTexture), this._maskTexture = r$7(this._maskTexture), this._vertexArrayObject = r$7(this._vertexArrayObject), this._program = r$7(this._program);
  }
  _updateResources(e2) {
    if (e2.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture)
      return;
    const r6 = e2.context;
    this._resourcePixelRatio = e2.pixelRatio;
    const s3 = Math.ceil(this._magnifier.size * e2.pixelRatio);
    this._program = t$c(r6);
    const t5 = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), i3 = a$6.attributes;
    this._vertexArrayObject = new o$7(r6, i3, m$6, { geometry: h$6.createVertex(r6, F$3.STATIC_DRAW, t5) }), this.overlay.width = s3, this.overlay.height = s3;
    const o2 = new e$7();
    o2.internalFormat = G$2.RGBA, o2.wrapMode = D$2.CLAMP_TO_EDGE, o2.samplingMode = L$2.NEAREST, o2.flipped = true, o2.preMultiplyAlpha = !Pt(this.overlay.src) || !e2.context.driverTest.svgPremultipliesAlpha.result, this._overlayTexture = new m$3(r6, o2, this.overlay), this.mask.width = s3, this.mask.height = s3, o2.pixelFormat = o2.internalFormat = G$2.ALPHA, this._maskTexture = new m$3(r6, o2, this.mask);
    const a4 = 1 / this._magnifier.factor;
    o2.pixelFormat = o2.internalFormat = G$2.RGBA, o2.width = o2.height = Math.ceil(a4 * s3), o2.samplingMode = L$2.LINEAR, o2.flipped = false, this._readbackTexture = new m$3(r6, o2);
  }
}
export {
  t as GraphicContainer,
  $ as GraphicsView2D,
  d as LabelManager,
  A as MagnifierView2D,
  f as MapViewNavigation,
  v as Stage
};
