import { am as ii, a3 as Zt, an as fe, ao as X, b as Y, Y as Ye, ap as me } from "./chunk-55vU5FGs.js";
function l(e, t, o, a) {
  e.set(t, o.get(a)), o.on(a, (o2) => {
    e.set(t, o2);
  });
}
class s extends ii {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = this._root.language, s2 = this._root.interfaceColors, d = this._root.horizontalLayout, c = this._root.verticalLayout, u = this.rule.bind(this);
    u("InterfaceColors").setAll({ stroke: Zt.fromHex(15066597), fill: Zt.fromHex(15987699), primaryButton: Zt.fromHex(6788316), primaryButtonHover: Zt.fromHex(6779356), primaryButtonDown: Zt.fromHex(6872182), primaryButtonActive: Zt.fromHex(6872182), primaryButtonText: Zt.fromHex(16777215), primaryButtonStroke: Zt.fromHex(16777215), secondaryButton: Zt.fromHex(14277081), secondaryButtonHover: Zt.fromHex(10724259), secondaryButtonDown: Zt.fromHex(9276813), secondaryButtonActive: Zt.fromHex(15132390), secondaryButtonText: Zt.fromHex(0), secondaryButtonStroke: Zt.fromHex(16777215), grid: Zt.fromHex(0), background: Zt.fromHex(16777215), alternativeBackground: Zt.fromHex(0), text: Zt.fromHex(0), alternativeText: Zt.fromHex(16777215), disabled: Zt.fromHex(11382189), positive: Zt.fromHex(5288704), negative: Zt.fromHex(11730944) });
    {
      const e2 = u("ColorSet");
      e2.setAll({ passOptions: { hue: 0.05, saturation: 0, lightness: 0 }, colors: [Zt.fromHex(6797276)], step: 1, reuse: false, startIndex: 0 }), e2.setPrivate("currentStep", 0), e2.setPrivate("currentPass", 0);
    }
    u("Entity").setAll({ stateAnimationDuration: 0, stateAnimationEasing: fe(me) }), u("Component").setAll({ interpolationDuration: 0, interpolationEasing: fe(me) }), u("Sprite").setAll({ visible: true, scale: 1, opacity: 1, rotation: 0, position: "relative", tooltipX: X, tooltipY: X, tooltipPosition: "fixed", isMeasured: true }), u("Sprite").states.create("default", { visible: true, opacity: 1 }), u("Container").setAll({ interactiveChildren: true, setStateOnChildren: false }), u("Graphics").setAll({ strokeWidth: 1 }), u("Chart").setAll({ width: Y, height: Y, interactiveChildren: false }), u("Sprite", ["horizontal", "center"]).setAll({ centerX: X, x: X }), u("Sprite", ["vertical", "center"]).setAll({ centerY: X, y: X }), u("Container", ["horizontal", "layout"]).setAll({ layout: d }), u("Container", ["vertical", "layout"]).setAll({ layout: c }), u("Pattern").setAll({ repetition: "repeat", width: 50, height: 50, rotation: 0, fillOpacity: 1 }), u("LinePattern").setAll({ gap: 6, colorOpacity: 1, width: 49, height: 49 }), u("RectanglePattern").setAll({ gap: 6, checkered: false, centered: true, maxWidth: 5, maxHeight: 5, width: 48, height: 48, strokeWidth: 0 }), u("CirclePattern").setAll({ gap: 5, checkered: false, centered: false, radius: 3, strokeWidth: 0, width: 45, height: 45 }), u("LinearGradient").setAll({ rotation: 90 }), u("Legend").setAll({ fillField: "fill", strokeField: "stroke", nameField: "name", layout: Ye.new(this._root, {}), layer: 30, clickTarget: "itemContainer" }), u("Container", ["legend", "item", "itemcontainer"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingBottom: 5, paddingTop: 5, layout: d, setStateOnChildren: true, interactiveChildren: false, ariaChecked: true, focusable: true, ariaLabel: e.translate("Press ENTER to toggle"), role: "checkbox" });
    {
      const e2 = u("Rectangle", ["legend", "item", "background"]);
      e2.setAll({ fillOpacity: 0 }), l(e2, "fill", s2, "background");
    }
    u("Container", ["legend", "marker"]).setAll({ setStateOnChildren: true, centerY: X, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0, width: 18, height: 18 }), u("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll({ width: Y, height: Y, cornerRadiusBL: 3, cornerRadiusTL: 3, cornerRadiusBR: 3, cornerRadiusTR: 3 });
    {
      const e2 = u("RoundedRectangle", ["legend", "marker", "rectangle"]).states.create("disabled", {});
      l(e2, "fill", s2, "disabled"), l(e2, "stroke", s2, "disabled");
    }
    u("Label", ["legend", "label"]).setAll({ centerY: X, marginLeft: 5, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0, populateText: true });
    l(u("Label", ["legend", "label"]).states.create("disabled", {}), "fill", s2, "disabled");
    u("Label", ["legend", "value", "label"]).setAll({ centerY: X, marginLeft: 5, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0, width: 50, centerX: Y, populateText: true });
    l(u("Label", ["legend", "value", "label"]).states.create("disabled", {}), "fill", s2, "disabled");
    u("HeatLegend").setAll({ stepCount: 1 }), u("RoundedRectangle", ["heatlegend", "marker"]).setAll({ cornerRadiusTR: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusBL: 0 }), u("RoundedRectangle", ["vertical", "heatlegend", "marker"]).setAll({ height: Y, width: 15 }), u("RoundedRectangle", ["horizontal", "heatlegend", "marker"]).setAll({ width: Y, height: 15 }), u("HeatLegend", ["vertical"]).setAll({ height: Y }), u("HeatLegend", ["horizontal"]).setAll({ width: Y }), u("Label", ["heatlegend", "start"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 }), u("Label", ["heatlegend", "end"]).setAll({ paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5 });
    {
      const e2 = u("Label");
      e2.setAll({ paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', fontSize: "1em", populateText: false }), l(e2, "fill", s2, "text");
    }
    u("RadialLabel").setAll({ textType: "regular", centerY: X, centerX: X, inside: false, radius: 0, baseRadius: Y, orientation: "auto", textAlign: "center" }), u("RoundedRectangle").setAll({ cornerRadiusTL: 8, cornerRadiusBL: 8, cornerRadiusTR: 8, cornerRadiusBR: 8 }), u("PointedRectangle").setAll({ pointerBaseWidth: 15, pointerLength: 10, cornerRadius: 8 }), u("Slice").setAll({ shiftRadius: 0, dRadius: 0, dInnerRadius: 0 });
    {
      const e2 = u("Tick");
      e2.setAll({ strokeOpacity: 0.15, isMeasured: false, length: 4.5, position: "absolute", crisp: true }), l(e2, "stroke", s2, "grid");
    }
    u("Bullet").setAll({ locationX: 0.5, locationY: 0.5 }), u("Tooltip").setAll({ position: "absolute", getFillFromSprite: true, getStrokeFromSprite: false, autoTextColor: true, paddingTop: 9, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, marginBottom: 5, pointerOrientation: "vertical", centerX: X, centerY: X, animationEasing: fe(me), exportable: false }), u("Polygon").setAll({ animationEasing: fe(me) });
    u("PointedRectangle", ["tooltip", "background"]).setAll({ strokeOpacity: 0.9, cornerRadius: 4, pointerLength: 4, pointerBaseWidth: 8, fillOpacity: 0.9, stroke: Zt.fromHex(16777215) });
    {
      const e2 = u("Label", ["tooltip"]);
      e2.setAll({ role: "tooltip", populateText: true, paddingRight: 0, paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }), l(e2, "fill", s2, "alternativeText");
    }
    u("Button").setAll({ paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, interactive: true, layout: d, interactiveChildren: false, setStateOnChildren: true, focusable: true }), u("Button").states.create("hover", {}), u("Button").states.create("down", { stateAnimationDuration: 0 }), u("Button").states.create("active", {});
    {
      const e2 = u("RoundedRectangle", ["button", "background"]);
      l(e2, "fill", s2, "primaryButton"), l(e2, "stroke", s2, "primaryButtonStroke");
    }
    l(u("RoundedRectangle", ["button", "background"]).states.create("hover", {}), "fill", s2, "primaryButtonHover");
    l(u("RoundedRectangle", ["button", "background"]).states.create("down", { stateAnimationDuration: 0 }), "fill", s2, "primaryButtonDown");
    l(u("RoundedRectangle", ["button", "background"]).states.create("active", {}), "fill", s2, "primaryButtonActive");
    l(u("Graphics", ["button", "icon"]), "stroke", s2, "primaryButtonText");
    l(u("Label", ["button"]), "fill", s2, "primaryButtonText");
    u("Button", ["zoom"]).setAll({ paddingTop: 18, paddingBottom: 18, paddingLeft: 12, paddingRight: 12, centerX: 46, centerY: -10, y: 0, x: Y, role: "button", ariaLabel: e.translate("Zoom Out"), layer: 30 });
    {
      const e2 = u("RoundedRectangle", ["background", "button", "zoom"]);
      e2.setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), l(e2, "fill", s2, "primaryButton");
    }
    l(u("RoundedRectangle", ["background", "button", "zoom"]).states.create("hover", {}), "fill", s2, "primaryButtonHover");
    l(u("RoundedRectangle", ["background", "button", "zoom"]).states.create("down", { stateAnimationDuration: 0 }), "fill", s2, "primaryButtonDown");
    {
      const e2 = u("Graphics", ["icon", "button", "zoom"]);
      e2.setAll({ crisp: true, strokeOpacity: 0.7, draw: (e3) => {
        e3.moveTo(0, 0), e3.lineTo(12, 0);
      } }), l(e2, "stroke", s2, "primaryButtonText");
    }
    u("Button", ["resize"]).setAll({ paddingTop: 9, paddingBottom: 9, paddingLeft: 13, paddingRight: 13, draggable: true, centerX: X, centerY: X, position: "absolute", role: "slider", ariaValueMin: "0", ariaValueMax: "100", ariaLabel: e.translate("Use up and down arrows to move selection") });
    {
      const e2 = u("RoundedRectangle", ["background", "resize", "button"]);
      e2.setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), l(e2, "fill", s2, "secondaryButton"), l(e2, "stroke", s2, "secondaryButtonStroke");
    }
    l(u("RoundedRectangle", ["background", "resize", "button"]).states.create("hover", {}), "fill", s2, "secondaryButtonHover");
    l(u("RoundedRectangle", ["background", "resize", "button"]).states.create("down", { stateAnimationDuration: 0 }), "fill", s2, "secondaryButtonDown");
    {
      const e2 = u("Graphics", ["resize", "button", "icon"]);
      e2.setAll({ interactive: false, crisp: true, strokeOpacity: 0.5, draw: (e3) => {
        e3.moveTo(0, 0.5), e3.lineTo(0, 12.5), e3.moveTo(4, 0.5), e3.lineTo(4, 12.5);
      } }), l(e2, "stroke", s2, "secondaryButtonText");
    }
    u("Button", ["resize", "vertical"]).setAll({ rotation: 90, cursorOverStyle: "ns-resize" }), u("Button", ["resize", "horizontal"]).setAll({ cursorOverStyle: "ew-resize" }), u("Button", ["play"]).setAll({ paddingTop: 13, paddingBottom: 13, paddingLeft: 14, paddingRight: 14, ariaLabel: e.translate("Play"), toggleKey: "active" });
    {
      const e2 = u("RoundedRectangle", ["play", "background"]);
      e2.setAll({ strokeOpacity: 0.5, cornerRadiusBL: 100, cornerRadiusBR: 100, cornerRadiusTL: 100, cornerRadiusTR: 100 }), l(e2, "fill", s2, "primaryButton");
    }
    {
      const e2 = u("Graphics", ["play", "icon"]);
      e2.setAll({ stateAnimationDuration: 0, dx: 1, draw: (e3) => {
        e3.moveTo(0, -5), e3.lineTo(8, 0), e3.lineTo(0, 5), e3.lineTo(0, -5);
      } }), l(e2, "fill", s2, "primaryButtonText");
    }
    u("Graphics", ["play", "icon"]).states.create("default", { stateAnimationDuration: 0 }), u("Graphics", ["play", "icon"]).states.create("active", { stateAnimationDuration: 0, draw: (e2) => {
      e2.moveTo(-4, -5), e2.lineTo(-1, -5), e2.lineTo(-1, 5), e2.lineTo(-4, 5), e2.lineTo(-4, -5), e2.moveTo(4, -5), e2.lineTo(1, -5), e2.lineTo(1, 5), e2.lineTo(4, 5), e2.lineTo(4, -5);
    } }), u("Button", ["switch"]).setAll({ paddingTop: 4, paddingBottom: 4, paddingLeft: 4, paddingRight: 4, ariaLabel: e.translate("Press ENTER to toggle"), toggleKey: "active", width: 40, height: 24, layout: null });
    {
      const e2 = u("RoundedRectangle", ["switch", "background"]);
      e2.setAll({ strokeOpacity: 0.5, cornerRadiusBL: 100, cornerRadiusBR: 100, cornerRadiusTL: 100, cornerRadiusTR: 100 }), l(e2, "fill", s2, "primaryButton");
    }
    {
      const e2 = u("Circle", ["switch", "icon"]);
      e2.setAll({ radius: 8, centerY: 0, centerX: 0, dx: 0 }), l(e2, "fill", s2, "primaryButtonText");
    }
    u("Graphics", ["switch", "icon"]).states.create("active", { dx: 16 }), u("Scrollbar").setAll({ start: 0, end: 1, layer: 30, animationEasing: fe(me) }), u("Scrollbar", ["vertical"]).setAll({ marginRight: 13, marginLeft: 13, minWidth: 12, height: Y }), u("Scrollbar", ["horizontal"]).setAll({ marginTop: 13, marginBottom: 13, minHeight: 12, width: Y }), this.rule("Button", ["scrollbar"]).setAll({ exportable: false });
    {
      const e2 = u("RoundedRectangle", ["scrollbar", "main", "background"]);
      e2.setAll({ cornerRadiusTL: 8, cornerRadiusBL: 8, cornerRadiusTR: 8, cornerRadiusBR: 8, fillOpacity: 0.8 }), l(e2, "fill", s2, "fill");
    }
    {
      const e2 = u("RoundedRectangle", ["scrollbar", "thumb"]);
      e2.setAll({ role: "slider", ariaLive: "polite", position: "absolute", draggable: true }), l(e2, "fill", s2, "secondaryButton");
    }
    l(u("RoundedRectangle", ["scrollbar", "thumb"]).states.create("hover", {}), "fill", s2, "secondaryButtonHover");
    l(u("RoundedRectangle", ["scrollbar", "thumb"]).states.create("down", { stateAnimationDuration: 0 }), "fill", s2, "secondaryButtonDown");
    u("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll({ x: X, width: Y, centerX: X, ariaLabel: e.translate("Use up and down arrows to move selection") }), u("RoundedRectangle", ["scrollbar", "thumb", "horizontal"]).setAll({ y: X, centerY: X, height: Y, ariaLabel: e.translate("Use left and right arrows to move selection") });
    {
      const e2 = u("PointedRectangle", ["axis", "tooltip", "background"]);
      e2.setAll({ cornerRadius: 0 }), l(e2, "fill", s2, "alternativeBackground");
    }
    u("Label", ["axis", "tooltip"]).setAll({ role: void 0 }), u("Label", ["axis", "tooltip", "y"]).setAll({ textAlign: "right" }), u("Label", ["axis", "tooltip", "y", "opposite"]).setAll({ textAlign: "left" }), u("Label", ["axis", "tooltip", "x"]).setAll({ textAlign: "center" }), u("Tooltip", ["categoryaxis"]).setAll({ labelText: "{category}" }), u("Star").setAll({ spikes: 5, innerRadius: 5, radius: 10 }), u("Tooltip", ["stock"]).setAll({ paddingTop: 6, paddingBottom: 5, paddingLeft: 7, paddingRight: 7 }), u("PointedRectangle", ["tooltip", "stock", "axis"]).setAll({ pointerLength: 0, pointerBaseWidth: 0, cornerRadius: 3 }), u("Label", ["tooltip", "stock"]).setAll({ fontSize: "0.8em" }), u("SpriteResizer").setAll({ rotationStep: 10 });
    u("Container", ["resizer", "grip"]).states.create("hover", {});
    {
      const e2 = u("RoundedRectangle", ["resizer", "grip"]);
      e2.setAll({ strokeOpacity: 0.7, strokeWidth: 1, fillOpacity: 1, width: 12, height: 12 }), l(e2, "fill", s2, "background"), l(e2, "stroke", s2, "alternativeBackground");
    }
    {
      const e2 = u("RoundedRectangle", ["resizer", "grip", "outline"]);
      e2.setAll({ strokeOpacity: 0, fillOpacity: 0, width: 20, height: 20 }), e2.states.create("hover", { fillOpacity: 0.3 }), l(e2, "fill", s2, "alternativeBackground");
    }
    u("RoundedRectangle", ["resizer", "grip", "left"]).setAll({ cornerRadiusBL: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusTR: 0 }), u("RoundedRectangle", ["resizer", "grip", "right"]).setAll({ cornerRadiusBL: 0, cornerRadiusBR: 0, cornerRadiusTL: 0, cornerRadiusTR: 0 });
    {
      const e2 = u("Rectangle", ["resizer", "rectangle"]);
      e2.setAll({ strokeDasharray: [2, 2], strokeOpacity: 0.5, strokeWidth: 1 }), l(e2, "stroke", s2, "alternativeBackground");
    }
  }
}
export {
  l,
  s
};
