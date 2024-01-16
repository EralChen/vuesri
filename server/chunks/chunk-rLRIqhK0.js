import { renderToString, renderToNodeStream, ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrRenderVNode, ssrRenderStyle } from "vue/server-renderer";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { onUnmounted, defineComponent, markRaw, h, createSSRApp, createApp, reactive, nextTick, mergeProps, useSSRContext, ref, watch, resolveComponent, withCtx, createVNode, unref, computed, openBlock, createBlock, renderSlot, createElementBlock, Fragment, normalizeProps, guardReactiveProps, createCommentVNode, renderList, resolveDynamicComponent, createElementVNode, toDisplayString, onScopeDispose, shallowRef, onMounted, createTextVNode, normalizeClass, normalizeStyle, withDirectives, vShow, Transition } from "vue";
import { setPageContext, usePageContext } from "vike-vue/usePageContext";
import { r as rCrowdinFilesAsReflect, a as CrowdinFilePath } from "./chunk-8AIdLOXL.js";
import { VkSvgIcon, VkDuplex, VkCheckLogic, VkCheckLogicProvider } from "@vunk/core";
import ElmentPlus, { ElSubMenu, ElMenuItem, ElIcon, ElMenu, ElScrollbar } from "element-plus";
import { useDark, useToggle, createSharedComposable } from "@vueuse/core";
import { bindPropsFactory } from "@vunk/core/shared/utils-vue";
import { ToggleHandler } from "@vunk/core/shared/utils-class";
import { findDeep } from "deepdash-es/standalone";
import gsap from "gsap";
import { useReloaded, useUpdating } from "@vunk/core/composables";
import { throttle } from "lodash-es";
import { sleep } from "@vunk/core/shared/utils-promise";
import { VkClientOnly } from "@vunk/core/components/client-only";
import { CaretTop } from "@element-plus/icons-vue";
function isCallable(thing) {
  return thing instanceof Function || typeof thing === "function";
}
function getTitle(pageContext) {
  if (pageContext.data?.title !== void 0) {
    return pageContext.data.title;
  }
  if (pageContext.title !== void 0) {
    return pageContext.title;
  }
  const titleConfig = pageContext.configEntries.title?.[0];
  if (!titleConfig) {
    return null;
  }
  const title = titleConfig.configValue;
  if (typeof title === "string") {
    return title;
  }
  if (!title) {
    return null;
  }
  const { configDefinedAt } = titleConfig;
  if (isCallable(title)) {
    const val = title(pageContext);
    if (typeof val !== "string") {
      throw new Error(configDefinedAt + " should return a string");
    }
    return val;
  }
  throw new Error(configDefinedAt + " should be a string or a function returning a string");
}
function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum);
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn, options = {
  hooks: ["mounted", "updated", "unmounted"]
}) {
  const { hooks } = options;
  hooks.forEach((hook) => {
    contentUpdatedCallbacks.push({
      callback: fn,
      hook
    });
  });
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((obj) => obj.callback !== fn);
  });
}
function createVueApp(pageContext, ssrApp = true, renderHead = false) {
  const runCbs = (hook) => {
    contentUpdatedCallbacks.filter((obj) => obj.hook === hook).forEach((obj) => obj.callback(pageContext));
  };
  const { Page } = pageContext;
  const Head = renderHead ? pageContext.config.Head : void 0;
  let rootComponent;
  const PageWithLayout = defineComponent({
    data: () => ({
      Page: markRaw(Head ? Head : Page),
      pageProps: markRaw(pageContext.pageProps || {}),
      config: markRaw(pageContext.config)
    }),
    created() {
      rootComponent = this;
    },
    render() {
      const propsWithHooks = {
        ...this.pageProps,
        onVnodeMounted: () => runCbs("mounted"),
        onVnodeUpdated: () => runCbs("updated"),
        onVnodeUnmounted: () => runCbs("unmounted"),
        onVnodeBeforeUnmount: () => runCbs("beforeUnmount")
      };
      if (!!this.config.Layout && !renderHead) {
        return h(
          this.config.Layout,
          {},
          {
            default: () => {
              return h(this.Page, propsWithHooks);
            }
          }
        );
      }
      return h(this.Page, propsWithHooks);
    }
  });
  const app = ssrApp ? createSSRApp(PageWithLayout) : createApp(PageWithLayout);
  objectAssign(app, {
    changePage: async (pageContext2) => {
      let returned = false;
      let err;
      app.config.errorHandler = (err_) => {
        if (returned) {
          console.error(err_);
        } else {
          err = err_;
        }
      };
      Object.assign(pageContextReactive, pageContext2);
      rootComponent.Page = markRaw(pageContext2.Page);
      rootComponent.pageProps = markRaw(pageContext2.pageProps || {});
      rootComponent.config = markRaw(pageContext2.config);
      await nextTick();
      returned = true;
      if (err)
        throw err;
    }
  });
  const pageContextReactive = reactive(pageContext);
  setPageContext(app, pageContextReactive);
  return app;
}
const onRenderHtml = async (pageContext) => {
  const { stream } = pageContext.config;
  const lang = pageContext.lang;
  let pageView = "";
  pageContext.crowdin = await rCrowdinFilesAsReflect(lang);
  if (!!pageContext.Page) {
    const app = createVueApp(pageContext);
    if (pageContext.config.vuePlugins) {
      pageContext.config.vuePlugins.forEach(({ plugin, options }) => {
        app.use(plugin, options);
      });
    }
    pageView = !stream ? dangerouslySkipEscape(
      await renderToStringWithErrorHandling(app)
    ) : renderToNodeStreamWithErrorHandling(app);
  }
  const title = getTitle(pageContext);
  const titleTag = !title ? "" : escapeInject`<title>${title}</title>`;
  const { description } = pageContext.config;
  const descriptionTag = !description ? "" : escapeInject`<meta name="description" content="${description}" />`;
  const { favicon } = pageContext.config;
  const faviconTag = !favicon ? "" : escapeInject`<link rel="icon" href="${favicon}" />`;
  let headHtml = "";
  if (!!pageContext.config.Head) {
    const app = createVueApp(
      pageContext,
      /*ssrApp*/
      true,
      /*renderHead*/
      true
    );
    headHtml = dangerouslySkipEscape(
      await renderToStringWithErrorHandling(app)
    );
  }
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang='${lang}'>
      <head>
        <meta charset="UTF-8" />
        ${faviconTag}
        ${titleTag}
        ${descriptionTag}
        ${headHtml}
      </head>
      <body>
        <div id="page-view">${pageView}</div>
      </body>
      <!-- built with https://github.com/vikejs/vike-vue -->
    </html>`;
  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  };
};
async function renderToStringWithErrorHandling(app) {
  let returned = false;
  let err;
  app.config.errorHandler = (err_) => {
    if (returned) {
      console.error(err_);
    } else {
      err = err_;
    }
  };
  const appHtml = await renderToString(app);
  returned = true;
  if (err)
    throw err;
  return appHtml;
}
function renderToNodeStreamWithErrorHandling(app) {
  let returned = false;
  let err;
  app.config.errorHandler = (err_) => {
    if (returned) {
      console.error(err_);
    } else {
      err = err_;
    }
  };
  const appHtml = renderToNodeStream(app);
  returned = true;
  if (err)
    throw err;
  return appHtml;
}
const isDark = useDark({
  storageKey: "el-theme-appearance"
});
const toggleDark = useToggle(isDark);
const _export_sfc$1 = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    class: "dark-icon"
  }, _attrs))}><path d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$e.setup;
_sfc_main$e.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/icons/dark.vue");
  return _sfc_setup$d ? _sfc_setup$d(props2, ctx) : void 0;
};
const DarkIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$d = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    class: "light-icon"
  }, _attrs))}><path d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$d.setup;
_sfc_main$d.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/icons/light.vue");
  return _sfc_setup$c ? _sfc_setup$c(props2, ctx) : void 0;
};
const LightIcon = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "vp-theme-toggler",
  __ssrInlineRender: true,
  setup(__props) {
    const darkMode = ref(isDark.value);
    watch(
      () => darkMode.value,
      () => {
        toggleDark();
      }
    );
    const beforeChange = () => {
      return new Promise((resolve) => {
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_el_switch = resolveComponent("el-switch");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eebe66d4>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_switch, {
              modelValue: darkMode.value,
              "onUpdate:modelValue": ($event) => darkMode.value = $event,
              "before-change": beforeChange,
              "active-action-icon": DarkIcon,
              "inactive-action-icon": LightIcon
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_switch, {
                modelValue: darkMode.value,
                "onUpdate:modelValue": ($event) => darkMode.value = $event,
                "before-change": beforeChange,
                "active-action-icon": DarkIcon,
                "inactive-action-icon": LightIcon
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$c.setup;
_sfc_main$c.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/common/vp-theme-toggler.vue");
  return _sfc_setup$b ? _sfc_setup$b(props2, ctx) : void 0;
};
const CommonThemeToggler = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-eebe66d4"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "vp-theme-toggler",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-toggler-content" }, _attrs))} data-v-40a13fe1>`);
      _push(ssrRenderComponent(CommonThemeToggler, {
        "aria-label": "theme-toggler",
        "aria-checked": unref(isDark)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$b.setup;
_sfc_main$b.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/navbar/vp-theme-toggler.vue");
  return _sfc_setup$a ? _sfc_setup$a(props2, ctx) : void 0;
};
const VpThemeToggler = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-40a13fe1"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "sk-flex": "row-between-center",
        class: "h-full layout-default-navbar"
      }, _attrs))}><div class="font-600 plr-l ptb-s text-primary"> @vuesri/core </div>`);
      _push(ssrRenderComponent(VpThemeToggler, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$a.setup;
_sfc_main$a.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default/navbar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props2, ctx) : void 0;
};
const useCrowdinFile = (path) => {
  const pageContext = usePageContext();
  return pageContext.crowdin[path];
};
function lintPath(path) {
  return path.endsWith("/") ? path.slice(0, -1) : path;
}
function resolveFullPath(path, pPath = "") {
  path = lintPath(path);
  pPath = lintPath(pPath);
  const nPath = path.startsWith("/") ? path : `${pPath}${path ? "/" : ""}${path}`;
  return nPath;
}
const props$2$1 = {
  data: {
    type: Array,
    default: () => []
  },
  popperClass: {
    type: String,
    default: "vk-routes-menu-content-popper"
  },
  basePath: {
    type: String,
    default: ""
  }
};
const emits$2 = {};
const props$1$1 = {
  data: {
    type: Object,
    default: () => ({})
  },
  popperClass: {
    type: String,
    default: ""
  },
  basePath: {
    type: String,
    default: ""
  }
};
const createBindProps = bindPropsFactory(props$1$1);
var script$2 = defineComponent({
  components: {
    ElSubMenu,
    ElMenuItem
  },
  props: props$1$1,
  setup(props2) {
    const hasChildren = computed(() => {
      let flag = false;
      if (props2.data.children) {
        flag = props2.data.children.some((item) => {
          var _a, _b;
          return ((_a = item.meta) == null ? void 0 : _a.display) != 0 && ((_b = item.meta) == null ? void 0 : _b.hidden) !== true;
        });
      }
      return flag;
    });
    return {
      resolveFullPath,
      hasChildren
    };
  }
});
function render$2$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_ElSubMenu = resolveComponent("ElSubMenu");
  const _component_ElMenuItem = resolveComponent("ElMenuItem");
  return _ctx.hasChildren ? (openBlock(), createBlock(_component_ElSubMenu, {
    key: 0,
    index: ((_a = _ctx.data.meta) == null ? void 0 : _a.subMenuIndex) || _ctx.resolveFullPath(_ctx.data.path, _ctx.basePath),
    "popper-class": _ctx.popperClass
  }, {
    title: withCtx(() => [
      renderSlot(_ctx.$slots, "menuTitle", {
        data: _ctx.data,
        href: _ctx.resolveFullPath(_ctx.data.path, _ctx.basePath)
      })
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["index", "popper-class"])) : (openBlock(), createBlock(_component_ElMenuItem, {
    key: 1,
    index: _ctx.resolveFullPath(_ctx.data.path, _ctx.basePath)
  }, {
    title: withCtx(() => [
      renderSlot(_ctx.$slots, "itemTitle", {
        data: _ctx.data,
        href: _ctx.resolveFullPath(_ctx.data.path, _ctx.basePath)
      })
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "item", {
        data: _ctx.data,
        href: _ctx.resolveFullPath(_ctx.data.path, _ctx.basePath)
      })
    ]),
    _: 3
  }, 8, ["index"]));
}
script$2.render = render$2$1;
script$2.__file = "routes-menu-content/src/item/core/index.vue";
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const props$3 = __spreadValues$1({}, props$1$1);
var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const skipRender = Symbol("skipRender");
var script$1$1 = defineComponent({
  components: {
    CoreVue: script$2
  },
  props: props$3,
  setup(props2) {
    const bindProps = createBindProps(props2);
    const onlyData = computed(() => {
      return getOnly(props2.data);
    });
    function getOnly(data, merge = {}) {
      var _a, _b, _c, _d;
      const children = data.children;
      const paths = merge.paths || [data.path];
      if ((_a = data.meta) == null ? void 0 : _a.alwaysShow)
        return;
      if (children) {
        const showChildren = children.filter((item) => {
          var _a2, _b2;
          return ((_a2 = item.meta) == null ? void 0 : _a2.display) != 0 && ((_b2 = item.meta) == null ? void 0 : _b2.hidden) !== true;
        });
        if (showChildren.length === 1) {
          const one = showChildren[0];
          paths.push(one.path);
          one[skipRender] = true;
          if ((_b = one.children) == null ? void 0 : _b.length) {
            const oneShowChildren = one.children.filter((item) => {
              var _a2, _b2;
              return ((_a2 = item.meta) == null ? void 0 : _a2.display) != 0 && ((_b2 = item.meta) == null ? void 0 : _b2.hidden) !== true;
            });
            if (oneShowChildren.length) {
              return getOnly(one, { paths });
            }
          }
          return __spreadProps$1(__spreadValues$2({}, one), {
            meta: __spreadValues$2(__spreadValues$2({}, (_c = data.meta) != null ? _c : {}), (_d = one.meta) != null ? _d : {}),
            _paths: paths,
            path: paths.reduce((prev, next) => {
              if (!prev) {
                return next;
              }
              if (next.startsWith("/")) {
                return next;
              } else {
                return prev + "/" + next;
              }
            }, "")
          });
        }
      }
    }
    return {
      skipRender,
      onlyData,
      bindProps
    };
  }
});
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_CoreVue = resolveComponent("CoreVue");
  return ((_a = _ctx.data.meta) == null ? void 0 : _a.display) != 0 && ((_b = _ctx.data.meta) == null ? void 0 : _b.hidden) !== true ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
    !_ctx.data[_ctx.skipRender] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      _ctx.onlyData ? (openBlock(), createBlock(_component_CoreVue, mergeProps({ key: 0 }, _ctx.bindProps, { data: _ctx.onlyData }), {
        item: withCtx((e) => [
          renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(e)))
        ]),
        menuTitle: withCtx((e) => [
          renderSlot(_ctx.$slots, "menuTitle", normalizeProps(guardReactiveProps(e)))
        ]),
        itemTitle: withCtx((e) => [
          renderSlot(_ctx.$slots, "itemTitle", normalizeProps(guardReactiveProps(e)))
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["data"])) : (openBlock(), createBlock(_component_CoreVue, normalizeProps(mergeProps({ key: 1 }, _ctx.bindProps)), {
        item: withCtx((e) => [
          renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(e)))
        ]),
        menuTitle: withCtx((e) => [
          renderSlot(_ctx.$slots, "menuTitle", normalizeProps(guardReactiveProps(e)))
        ]),
        itemTitle: withCtx((e) => [
          renderSlot(_ctx.$slots, "itemTitle", normalizeProps(guardReactiveProps(e)))
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16))
    ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
  ], 64)) : createCommentVNode("v-if", true);
}
script$1$1.render = render$1$1;
script$1$1.__file = "routes-menu-content/src/item/index.vue";
var script$3 = defineComponent({
  name: "VkRoutesMenuContent",
  components: {
    ItemVue: script$1$1
  },
  props: props$2$1,
  emits: emits$2,
  setup() {
    return {
      resolveFullPath
    };
  }
});
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VkRoutesMenuContent = resolveComponent("VkRoutesMenuContent");
  const _component_ItemVue = resolveComponent("ItemVue");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item) => {
    return openBlock(), createBlock(_component_ItemVue, {
      key: item.name || item.path,
      data: item,
      "popper-class": _ctx.popperClass,
      "base-path": _ctx.basePath
    }, {
      item: withCtx((e) => [
        renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(e)))
      ]),
      menuTitle: withCtx((e) => [
        renderSlot(_ctx.$slots, "menuTitle", normalizeProps(guardReactiveProps(e)))
      ]),
      itemTitle: withCtx((e) => [
        renderSlot(_ctx.$slots, "itemTitle", normalizeProps(guardReactiveProps(e)))
      ]),
      default: withCtx(() => [
        createVNode(_component_VkRoutesMenuContent, {
          data: item.children,
          "popper-class": _ctx.popperClass,
          "base-path": _ctx.resolveFullPath(item.path, _ctx.basePath)
        }, {
          item: withCtx((e) => [
            renderSlot(_ctx.$slots, "item", normalizeProps(guardReactiveProps(e)))
          ]),
          menuTitle: withCtx((e) => [
            renderSlot(_ctx.$slots, "menuTitle", normalizeProps(guardReactiveProps(e)))
          ]),
          itemTitle: withCtx((e) => [
            renderSlot(_ctx.$slots, "itemTitle", normalizeProps(guardReactiveProps(e)))
          ]),
          _: 2
        }, 1032, ["data", "popper-class", "base-path"])
      ]),
      _: 2
    }, 1032, ["data", "popper-class", "base-path"]);
  }), 128);
}
script$3.render = render$3;
script$3.__file = "routes-menu-content/src/index.vue";
script$3.install = (app) => {
  app.component(script$3.name, script$3);
};
const props$2 = {
  icon: {
    type: String,
    default: ""
  },
  customPrefix: {
    type: String,
    default: "icon-"
  },
  color: {
    type: String,
    default: void 0
  },
  size: {
    type: String,
    default: void 0
  }
};
const emits$1 = {};
var _sfc_main$9 = defineComponent({
  name: "SkAppIcon",
  components: {
    ElIcon,
    VkSvgIcon
  },
  inheritAttrs: false,
  props: props$2,
  emits: emits$1,
  setup(props2) {
    const elIconName = computed(() => {
      const icon = props2.icon;
      if (!icon) {
        return "";
      }
      const regex = /<el-icon><(.+?)\s*\/><\/el-icon>/;
      const match = regex.exec(icon);
      if (match) {
        const componentName = match[1];
        return componentName;
      }
      return "";
    });
    return {
      elIconName
    };
  }
});
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VkSvgIcon = resolveComponent("VkSvgIcon");
  const _component_ElIcon = resolveComponent("ElIcon");
  return _ctx.icon ? (openBlock(), createElementBlock(
    Fragment,
    { key: 0 },
    [
      _ctx.icon.startsWith(_ctx.customPrefix) ? (openBlock(), createBlock(_component_VkSvgIcon, mergeProps({
        key: 0,
        "icon-class": _ctx.icon.replace(_ctx.customPrefix, ""),
        style: {
          color: _ctx.color,
          "font-size": _ctx.size
        }
      }, _ctx.$attrs), null, 16, ["icon-class", "style"])) : /^https?:\/\//.test(_ctx.icon) || /^data:image/.test(_ctx.icon) || _ctx.icon.startsWith("/") ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" 正则判断是否是url  "),
          createVNode(_component_VkSvgIcon, mergeProps({
            url: _ctx.icon,
            style: {
              color: _ctx.color,
              "font-size": _ctx.size
            }
          }, _ctx.$attrs), null, 16, ["url", "style"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : _ctx.elIconName ? (openBlock(), createBlock(_component_ElIcon, { key: 2 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.elIconName.trim())))
        ]),
        _: 1
        /* STABLE */
      })) : _ctx.icon.startsWith("<svg") ? (openBlock(), createBlock(_component_ElIcon, mergeProps({
        key: 3,
        color: _ctx.color,
        size: _ctx.size
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createElementVNode("span", {
            class: "sk-app-icon-svg__inner",
            innerHTML: _ctx.icon
          }, null, 8, _hoisted_1$1)
        ]),
        _: 1
        /* STABLE */
      }, 16, ["color", "size"])) : /^\d/.test(_ctx.icon) ? (openBlock(), createElementBlock(
        "span",
        normalizeProps(mergeProps({ key: 4 }, _ctx.$attrs)),
        toDisplayString(_ctx.icon),
        17
        /* TEXT, FULL_PROPS */
      )) : /^[\u4E00-\u9FA5A-Za-z0-9\s]{2,20}$/.test(_ctx.icon) ? (openBlock(), createBlock(_component_ElIcon, mergeProps({
        key: 5,
        color: _ctx.color,
        size: _ctx.size
      }, _ctx.$attrs), {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon.trim())))
        ]),
        _: 1
        /* STABLE */
      }, 16, ["color", "size"])) : createCommentVNode("v-if", true)
    ],
    64
    /* STABLE_FRAGMENT */
  )) : createCommentVNode("v-if", true);
}
var SkAppIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render], ["__file", "D:\\projectCode\\zz-platform\\zz-platform-config\\packages\\components\\app-icon\\src\\index.vue"]]);
SkAppIcon.install = (app) => {
  app.component(SkAppIcon.name, SkAppIcon);
};
class ListenerToggle extends ToggleHandler {
  constructor(type, listener) {
    super();
    this.type = type;
    this.listener = listener;
  }
  add() {
    document.addEventListener(this.type, this.listener);
    this.removeHandler = () => {
      document.removeEventListener(this.type, this.listener);
    };
  }
}
const useMenuClick = () => {
  const listenerToggle = new ListenerToggle("click", upLinkClickToItem);
  onScopeDispose(() => {
    listenerToggle.remove();
  });
  function upLinkClickToItem(e) {
    const path = e.composedPath();
    const elMenuItem = path.find((item) => {
      return item instanceof Element && item.classList.contains("el-menu-item");
    });
    if (elMenuItem) {
      elMenuItem.getElementsByTagName("a")[0]?.click();
    }
  }
  return {
    listenerToggle
  };
};
const useSharedMenuClick = createSharedComposable(useMenuClick);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "aside",
  __ssrInlineRender: true,
  setup(__props) {
    const menuComponent = ref();
    const { listenerToggle } = useSharedMenuClick();
    const componentCrow = useCrowdinFile(CrowdinFilePath.component);
    const basePath = "/" + componentCrow.lang + "/component";
    const source = componentCrow.source;
    const menu = genRoutes(Object.values(source));
    function genRoutes(menus, parentPath = basePath) {
      return menus.map((menu2) => {
        const path = parentPath + (menu2.link ?? "");
        const meta = {
          title: menu2.text,
          alwaysShow: true
        };
        if (menu2.children?.length) {
          meta.subMenuIndex = path + menu2.children[0].link;
        }
        const route = {
          path,
          meta,
          name: menu2.text,
          children: genRoutes(menu2.children ?? [], path)
        };
        return route;
      });
    }
    const filterTitle = ref("");
    const includesTitle = (route) => !!route.meta?.title?.toLocaleLowerCase().includes(filterTitle.value.toLocaleLowerCase());
    const filterMenu = computed(() => {
      if (!filterTitle.value) {
        return menu;
      }
      function genRoutes2(routes) {
        return routes.reduce((a, route) => {
          if (includesTitle(route)) {
            a.push(route);
          } else if (route.children?.length) {
            const children = genRoutes2(route.children);
            if (children.length) {
              nextTick(() => {
                if (route.meta?.subMenuIndex) {
                  menuComponent.value?.open(route.meta.subMenuIndex);
                }
              });
              a.push({
                ...route,
                children
              });
            }
          }
          return a;
        }, []);
      }
      return genRoutes2(menu);
    });
    const pathname = shallowRef("");
    onMounted(() => {
      pathname.value = window.location.pathname;
      listenerToggle.add();
      initOpenMenu();
    });
    function initOpenMenu() {
      const pathname2 = window.location.pathname;
      findDeep(filterMenu.value, (v, k, _, { parents }) => {
        if (k === "path" && pathname2 === v) {
          if (!parents)
            return true;
          for (let i = parents.length - 2; i >= 0; i--) {
            const parent = parents[i];
            if (parent.value.meta?.subMenuIndex) {
              menuComponent.value?.open(parent.value.meta.subMenuIndex);
              break;
            }
          }
          return true;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = resolveComponent("ElInput");
      const _component_ElScrollbar = resolveComponent("ElScrollbar");
      const _component_ElIcon = resolveComponent("ElIcon");
      _push(ssrRenderComponent(unref(VkDuplex), mergeProps({ class: "h-full" }, _attrs), {
        one: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElInput, {
              modelValue: filterTitle.value,
              "onUpdate:modelValue": ($event) => filterTitle.value = $event,
              form: "",
              size: "large",
              class: "layout-default-aside-search",
              placeholder: "搜索组件"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElInput, {
                modelValue: filterTitle.value,
                "onUpdate:modelValue": ($event) => filterTitle.value = $event,
                form: "",
                size: "large",
                class: "layout-default-aside-search",
                placeholder: "搜索组件"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        two: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElScrollbar, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElMenu), {
                    ref_key: "menuComponent",
                    ref: menuComponent,
                    class: "layout-default-aside-menu",
                    "default-active": pathname.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(script$3), {
                          data: filterMenu.value,
                          "base-path": basePath
                        }, {
                          item: withCtx(({ href, data }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<a${ssrRenderAttr("href", href)}${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_ElIcon, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (data.meta?.icon) {
                                      _push6(ssrRenderComponent(unref(SkAppIcon), {
                                        icon: data.meta.icon
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      data.meta?.icon ? (openBlock(), createBlock(unref(SkAppIcon), {
                                        key: 0,
                                        icon: data.meta.icon
                                      }, null, 8, ["icon"])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</a>`);
                            } else {
                              return [
                                createVNode("a", { href }, [
                                  createVNode(_component_ElIcon, null, {
                                    default: withCtx(() => [
                                      data.meta?.icon ? (openBlock(), createBlock(unref(SkAppIcon), {
                                        key: 0,
                                        icon: data.meta.icon
                                      }, null, 8, ["icon"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 8, ["href"])
                              ];
                            }
                          }),
                          itemTitle: withCtx(({ data }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(data.meta?.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(data.meta?.title), 1)
                              ];
                            }
                          }),
                          menuTitle: withCtx(({ data }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(data.meta?.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(data.meta?.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(script$3), {
                            data: filterMenu.value,
                            "base-path": basePath
                          }, {
                            item: withCtx(({ href, data }) => [
                              createVNode("a", { href }, [
                                createVNode(_component_ElIcon, null, {
                                  default: withCtx(() => [
                                    data.meta?.icon ? (openBlock(), createBlock(unref(SkAppIcon), {
                                      key: 0,
                                      icon: data.meta.icon
                                    }, null, 8, ["icon"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 8, ["href"])
                            ]),
                            itemTitle: withCtx(({ data }) => [
                              createTextVNode(toDisplayString(data.meta?.title), 1)
                            ]),
                            menuTitle: withCtx(({ data }) => [
                              createTextVNode(toDisplayString(data.meta?.title), 1)
                            ]),
                            _: 1
                          }, 8, ["data"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElMenu), {
                      ref_key: "menuComponent",
                      ref: menuComponent,
                      class: "layout-default-aside-menu",
                      "default-active": pathname.value
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(script$3), {
                          data: filterMenu.value,
                          "base-path": basePath
                        }, {
                          item: withCtx(({ href, data }) => [
                            createVNode("a", { href }, [
                              createVNode(_component_ElIcon, null, {
                                default: withCtx(() => [
                                  data.meta?.icon ? (openBlock(), createBlock(unref(SkAppIcon), {
                                    key: 0,
                                    icon: data.meta.icon
                                  }, null, 8, ["icon"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ], 8, ["href"])
                          ]),
                          itemTitle: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.meta?.title), 1)
                          ]),
                          menuTitle: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.meta?.title), 1)
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ]),
                      _: 1
                    }, 8, ["default-active"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElScrollbar, null, {
                default: withCtx(() => [
                  createVNode(unref(ElMenu), {
                    ref_key: "menuComponent",
                    ref: menuComponent,
                    class: "layout-default-aside-menu",
                    "default-active": pathname.value
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$3), {
                        data: filterMenu.value,
                        "base-path": basePath
                      }, {
                        item: withCtx(({ href, data }) => [
                          createVNode("a", { href }, [
                            createVNode(_component_ElIcon, null, {
                              default: withCtx(() => [
                                data.meta?.icon ? (openBlock(), createBlock(unref(SkAppIcon), {
                                  key: 0,
                                  icon: data.meta.icon
                                }, null, 8, ["icon"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024)
                          ], 8, ["href"])
                        ]),
                        itemTitle: withCtx(({ data }) => [
                          createTextVNode(toDisplayString(data.meta?.title), 1)
                        ]),
                        menuTitle: withCtx(({ data }) => [
                          createTextVNode(toDisplayString(data.meta?.title), 1)
                        ]),
                        _: 1
                      }, 8, ["data"])
                    ]),
                    _: 1
                  }, 8, ["default-active"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default/aside.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props2, ctx) : void 0;
};
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".vp-doc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function getAbsoluteTop(element, root = document.body) {
  let offsetTop = 0;
  while (element !== root) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VPDocOutlineItem"
  },
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  emits: {
    linkClick: (link) => typeof link === "string"
  },
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading?.focus({ preventScroll: true });
      emit("linkClick", "#" + decodeURIComponent(id));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem toc-items", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-05df27b5><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link, title }) => {
        _push(`<li class="toc-item" data-v-05df27b5>`);
        _push(ssrRenderComponent(unref(VkCheckLogic), {
          name: link,
          custom: true
        }, {
          default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a class="${ssrRenderClass([{ "is-active": isActive }, "outline-link toc-link subitem"])}"${ssrRenderAttr("href", link)}${ssrRenderAttr("title", title)} data-v-05df27b5${_scopeId}>${ssrInterpolate(title)}</a>`);
            } else {
              return [
                createVNode("a", {
                  class: ["outline-link toc-link subitem", { "is-active": isActive }],
                  href: link,
                  title,
                  onClick
                }, toDisplayString(title), 11, ["href", "title"])
              ];
            }
          }),
          _: 2
        }, _parent));
        if (children?.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/VPDocOutlineItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props2, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-05df27b5"]]);
const props$1 = {
  modelValue: {
    type: Object,
    default: () => ({})
  }
};
const emits = {};
var script$1 = defineComponent({
  name: "VkHello",
  emits,
  props: props$1,
  setup(props2, { emit }) {
    return {};
  }
});
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, "Hello");
}
script$1.render = render$2;
script$1.__file = "hello/src/index.vue";
script$1.install = (app) => {
  app.component(script$1.name, script$1);
};
const props = {
  type: {
    type: String,
    default: "row"
  },
  itemClass: {
    type: String,
    default: "vk-tab-item"
  },
  activeClass: {
    type: String,
    default: "is-active"
  },
  scale: {
    type: Number,
    default: 1
  },
  justify: {
    type: String,
    default: "center"
  }
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var script = defineComponent({
  props,
  setup(props2) {
    const floatNode = ref();
    const customStyle = ref({
      "--vk-float-block-size": 0,
      "--vk-float-block-offset": 0
    });
    const typeInfo = {
      row: {
        offset: "offsetLeft",
        size: "clientWidth"
      },
      column: {
        offset: "offsetTop",
        size: "clientHeight"
      }
    };
    const getSize = (target) => target[typeInfo[props2.type].size] * props2.scale;
    const getOffet = (target) => {
      const offset = target[typeInfo[props2.type].offset];
      let innerOffset = 0;
      if (props2.justify === "center") {
        innerOffset = (target[typeInfo[props2.type].size] - getSize(target)) / 2;
      }
      if (props2.justify === "end") {
        innerOffset = target[typeInfo[props2.type].size] - getSize(target);
      }
      return offset + innerOffset;
    };
    let currentTarget = shallowRef(null);
    onMounted(() => {
      if (!floatNode.value)
        return;
      const pNode = floatNode.value.parentElement;
      if (!pNode)
        return;
      const children = pNode.getElementsByClassName(props2.itemClass);
      const config2 = {
        attributes: true
      };
      const observer = new MutationObserver((mutationsList) => {
        let offset = 0;
        for (let i = 0; i < mutationsList.length; i++) {
          const mutation = mutationsList[i];
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            const _target = mutation.target;
            if (_target.className.includes(props2.activeClass)) {
              currentTarget.value = _target;
              offset = getOffet(currentTarget.value);
            } else {
              if (currentTarget.value === _target) {
                currentTarget.value = null;
              }
            }
          }
        }
        if (currentTarget.value) {
          customStyle.value["--vk-float-block-size"] = getSize(currentTarget.value);
        }
        gsap.to(customStyle.value, {
          "--vk-float-block-offset": offset
        });
      });
      {
        let offset = 0;
        for (let i = 0; i < children.length; i++) {
          const target = children[i];
          if (target.className.includes(props2.activeClass)) {
            offset = getOffet(target);
          }
          customStyle.value["--vk-float-block-size"] = getSize(target);
          gsap.to(customStyle.value, {
            "--vk-float-block-offset": offset
          });
          observer.observe(target, config2);
        }
      }
      onUnmounted(() => {
        observer.disconnect();
      });
    });
    return {
      currentTarget,
      floatNode,
      customStyle: computed(() => __spreadProps(__spreadValues({}, customStyle.value), {
        "--vk-float-block-size": customStyle.value["--vk-float-block-size"] + "px",
        "--vk-float-block-offset": customStyle.value["--vk-float-block-offset"] + "px"
      }))
    };
  }
});
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vk-float-block", {
      "is-row": _ctx.type === "row",
      "is-column": _ctx.type === "column",
      "is-orphan": !_ctx.currentTarget
    }]),
    style: normalizeStyle(_ctx.customStyle),
    ref: "floatNode"
  }, null, 6);
}
script.render = render$1;
script.__file = "float-block/src/index.vue";
script.install = (app) => {
  app.component(script.name, script);
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props2 = __props;
    const throttleSetCurrentLinkByScroll = throttle(setCurrentLinkByScroll, 400);
    const reloaded = useReloaded(() => props2.headers);
    const container = ref();
    const currentLink = ref("");
    const updatingLinkByClick = useUpdating(() => sleep(1e3));
    const scrollviewNode = shallowRef();
    onMounted(() => {
      scrollviewNode.value = document.getElementById("VPScrollView");
      const scrollwrap = scrollviewNode.value.parentElement;
      scrollwrap.addEventListener("scroll", throttleSetCurrentLinkByScroll);
      onUnmounted(() => {
        scrollwrap.removeEventListener("scroll", throttleSetCurrentLinkByScroll);
      });
    });
    const linkClick = (link) => {
      currentLink.value = link;
      updatingLinkByClick.value = true;
    };
    function setCurrentLinkByScroll() {
      if (updatingLinkByClick.value)
        return;
      const scrollview = scrollviewNode.value;
      const scrollwrap = scrollview.parentElement;
      const scrollbar = scrollwrap.parentElement;
      if (!scrollbar)
        return;
      const scrollY = scrollwrap.scrollTop;
      const isBottom = scrollY + scrollwrap.clientHeight >= scrollwrap.scrollHeight;
      if (scrollY < 1) {
        currentLink.value = "";
        return;
      }
      if (isBottom) {
        currentLink.value = props2.headers[props2.headers.length - 1].link;
        return;
      }
      const linkTops = props2.headers.map((item) => {
        return {
          link: item.link,
          top: getAbsoluteTop(item.element, scrollbar)
        };
      }).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
      for (const { link, top } of linkTops) {
        if (top > scrollY) {
          currentLink.value = link;
          return;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: ["VPDocAsideOutline", { "has-outline": true }],
        role: "navigation"
      }, _attrs))} data-v-a98bbc82><div class="content" data-v-a98bbc82><nav aria-labelledby="doc-outline-aria-label" data-v-a98bbc82><span id="doc-outline-aria-label" class="visually-hidden" data-v-a98bbc82> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(unref(VkCheckLogicProvider), {
        modelValue: currentLink.value,
        "onUpdate:modelValue": ($event) => currentLink.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="vp-doc-outline-x" data-v-a98bbc82${_scopeId}>`);
            _push2(ssrRenderComponent(VPDocOutlineItem, {
              headers: __props.headers,
              root: true,
              onLinkClick: linkClick
            }, null, _parent2, _scopeId));
            if (unref(reloaded)) {
              _push2(ssrRenderComponent(unref(script), {
                scale: 0.8,
                type: "column",
                "item-class": "outline-link"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "vp-doc-outline-x" }, [
                createVNode(VPDocOutlineItem, {
                  headers: __props.headers,
                  root: true,
                  onLinkClick: linkClick
                }, null, 8, ["headers"]),
                unref(reloaded) ? (openBlock(), createBlock(unref(script), {
                  key: 0,
                  scale: 0.8,
                  type: "column",
                  "item-class": "outline-link"
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/VPDocAsideOutline.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props2, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-a98bbc82"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "toc",
  __ssrInlineRender: true,
  setup(__props) {
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(2);
    }, {
      hooks: ["mounted", "updated"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPDocAsideOutline, mergeProps({ headers: headers.value }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default/toc.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props2, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollbarNode = shallowRef();
    const currentScrollTopCache = {};
    const currentPath = shallowRef("");
    onContentUpdated((ctx) => {
      currentPath.value = ctx.urlOriginal;
      if (ctx.urlParsed.hash) {
        return;
      }
      nextTick(() => {
        scrollbarNode.value?.setScrollTop(
          currentScrollTopCache[currentPath.value] ?? 0
        );
      });
    }, {
      hooks: ["mounted"]
    });
    onContentUpdated(() => {
      currentScrollTopCache[currentPath.value] = scrollbarNode.value?.wrapRef?.scrollTop ?? 0;
    }, {
      hooks: ["beforeUnmount"]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VkDuplex), mergeProps({ class: "layout-default" }, _attrs), {
        one: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="layout-default-header"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "layout-default-header" }, [
                createVNode(_sfc_main$a)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div sk-flex class="h-100%"${_scopeId}><div class="layout-default-aside-x"${_scopeId}><div class="layout-default-aside"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(VkDuplex), { class: "flex-1 overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElScrollbar), {
                    id: "VPScrollView",
                    ref_key: "scrollbarNode",
                    ref: scrollbarNode
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<main class="page-content"${_scopeId3}><div class="doc-content-wrapper"${_scopeId3}><div id="VPContent" class="doc-content-container"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(`</div><div class="doc-toc-container"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$5, null, null, _parent4, _scopeId3));
                        _push4(`</div></div></main>`);
                      } else {
                        return [
                          createVNode("main", { class: "page-content" }, [
                            createVNode("div", { class: "doc-content-wrapper" }, [
                              createVNode("div", {
                                id: "VPContent",
                                class: "doc-content-container"
                              }, [
                                renderSlot(_ctx.$slots, "default")
                              ]),
                              createVNode("div", { class: "doc-toc-container" }, [
                                createVNode(_sfc_main$5)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElScrollbar), {
                      id: "VPScrollView",
                      ref_key: "scrollbarNode",
                      ref: scrollbarNode
                    }, {
                      default: withCtx(() => [
                        createVNode("main", { class: "page-content" }, [
                          createVNode("div", { class: "doc-content-wrapper" }, [
                            createVNode("div", {
                              id: "VPContent",
                              class: "doc-content-container"
                            }, [
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            createVNode("div", { class: "doc-toc-container" }, [
                              createVNode(_sfc_main$5)
                            ])
                          ])
                        ])
                      ]),
                      _: 3
                    }, 512)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                "sk-flex": "",
                class: "h-100%"
              }, [
                createVNode("div", { class: "layout-default-aside-x" }, [
                  createVNode("div", { class: "layout-default-aside" }, [
                    createVNode(_sfc_main$8)
                  ])
                ]),
                createVNode(unref(VkDuplex), { class: "flex-1 overflow-hidden" }, {
                  default: withCtx(() => [
                    createVNode(unref(ElScrollbar), {
                      id: "VPScrollView",
                      ref_key: "scrollbarNode",
                      ref: scrollbarNode
                    }, {
                      default: withCtx(() => [
                        createVNode("main", { class: "page-content" }, [
                          createVNode("div", { class: "doc-content-wrapper" }, [
                            createVNode("div", {
                              id: "VPContent",
                              class: "doc-content-container"
                            }, [
                              renderSlot(_ctx.$slots, "default")
                            ]),
                            createVNode("div", { class: "doc-toc-container" }, [
                              createVNode(_sfc_main$5)
                            ])
                          ])
                        ])
                      ]),
                      _: 3
                    }, 512)
                  ]),
                  _: 3
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props2, ctx) : void 0;
};
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const __unplugin_components_0 = { name: "ri-code-line", render };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "vp-example",
  __ssrInlineRender: true,
  props: {
    file: {
      type: String,
      required: true
    },
    demo: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-showcase" }, _attrs))} data-v-19ce9c2d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.demo) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.demo), _ctx.$attrs, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.demo ? (openBlock(), createBlock(resolveDynamicComponent(__props.demo), mergeProps({ key: 0 }, _ctx.$attrs), null, 16)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/demo/vp-example.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props2, ctx) : void 0;
};
const Example = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-19ce9c2d"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "vp-source-code",
  __ssrInlineRender: true,
  props: {
    source: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props2 = __props;
    const decoded = computed(() => {
      return decodeURIComponent(props2.source);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-source-wrapper" }, _attrs))} data-v-c7d9694a><div data-v-c7d9694a>${decoded.value}</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/demo/vp-source-code.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props2, ctx) : void 0;
};
const SourceCode = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-c7d9694a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "vp-tabs-source-code",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props2 = __props;
    const active = ref(props2.data[0].path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElTabs = resolveComponent("ElTabs");
      const _component_ElTabPane = resolveComponent("ElTabPane");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-source-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ElTabs, {
        modelValue: active.value,
        "onUpdate:modelValue": ($event) => active.value = $event,
        type: "border-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, (item) => {
              _push2(ssrRenderComponent(_component_ElTabPane, {
                key: item.path,
                name: item.path,
                label: item.path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}>${item.source}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        innerHTML: item.source
                      }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item) => {
                return openBlock(), createBlock(_component_ElTabPane, {
                  key: item.path,
                  name: item.path,
                  label: item.path
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      innerHTML: item.source
                    }, null, 8, ["innerHTML"])
                  ]),
                  _: 2
                }, 1032, ["name", "label"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/demo/vp-tabs-source-code.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vp-demo",
  __ssrInlineRender: true,
  props: {
    demos: {},
    source: {},
    path: {},
    rawSource: {},
    description: { default: "" },
    rawTabsSource: { default: "{}" }
  },
  setup(__props) {
    const props2 = __props;
    const prepath = computed(() => {
      return props2.path.split("/")[0] + "/";
    });
    const tabsSource = computed(() => {
      const jsonStr = decodeURIComponent(props2.rawTabsSource);
      return JSON.parse(jsonStr);
    });
    const tabsData = computed(() => {
      return [
        {
          path: props2.path.replace(prepath.value, ""),
          source: decodeURIComponent(props2.source)
        },
        ...Object.keys(tabsSource.value).map((item) => {
          return {
            path: item.replace(prepath.value, ""),
            source: tabsSource.value[item]
          };
        })
      ];
    });
    const [sourceVisible, toggleSourceVisible] = useToggle();
    const sourceCodeRef = ref();
    const formatPathDemos = computed(() => {
      const demos = {};
      Object.keys(props2.demos).forEach((key) => {
        demos[key.replace("../../examples/", "").replace(".vue", "")] = props2.demos[key];
      });
      return demos;
    });
    const locale = computed(() => {
      return {
        "view-source": "View source",
        "hide-source": "Hide source",
        "edit-in-editor": "Edit in Playground",
        "edit-on-github": "Edit on GitHub",
        "edit-in-codepen": "Edit in Codepen.io",
        "copy-code": "Copy code",
        "switch-button-option-text": "Switch to Options API",
        "switch-button-setup-text": "Switch to Composition API",
        "copy-success": "Copied!",
        "copy-error": "This browser does not support automatic copy！"
      };
    });
    const decodedDescription = computed(
      () => decodeURIComponent(props2.description)
    );
    const onSourceVisibleKeydown = (e) => {
      if (["Enter", "Space"].includes(e.code)) {
        e.preventDefault();
        toggleSourceVisible(false);
        sourceCodeRef.value?.focus();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_ElDivider = resolveComponent("ElDivider");
      const _component_ElTooltip = resolveComponent("ElTooltip");
      const _component_ElIcon = resolveComponent("ElIcon");
      const _component_i_ri_code_line = __unplugin_components_0;
      const _component_ElCollapseTransition = resolveComponent("ElCollapseTransition");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p text="sm" data-v-d3c8c828${_scopeId}>${decodedDescription.value}</p><div class="example" data-v-d3c8c828${_scopeId}>`);
            _push2(ssrRenderComponent(Example, {
              file: _ctx.path,
              demo: formatPathDemos.value[_ctx.path]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElDivider, { class: "m-0" }, null, _parent2, _scopeId));
            _push2(`<div class="op-btns" data-v-d3c8c828${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElTooltip, {
              content: locale.value["view-source"],
              "show-arrow": false,
              trigger: ["hover", "focus"],
              "trigger-keys": []
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button${ssrRenderAttr(
                    "aria-label",
                    unref(sourceVisible) ? locale.value["hide-source"] : locale.value["view-source"]
                  )} class="reset-btn el-icon op-btn" data-v-d3c8c828${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_ElIcon, { size: 16 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_i_ri_code_line, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_i_ri_code_line)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</button>`);
                } else {
                  return [
                    createVNode("button", {
                      ref_key: "sourceCodeRef",
                      ref: sourceCodeRef,
                      "aria-label": unref(sourceVisible) ? locale.value["hide-source"] : locale.value["view-source"],
                      class: "reset-btn el-icon op-btn",
                      onClick: ($event) => unref(toggleSourceVisible)()
                    }, [
                      createVNode(_component_ElIcon, { size: 16 }, {
                        default: withCtx(() => [
                          createVNode(_component_i_ri_code_line)
                        ]),
                        _: 1
                      })
                    ], 8, ["aria-label", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElCollapseTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (tabsData.value.length > 1) {
                    _push3(ssrRenderComponent(_sfc_main$1, {
                      style: unref(sourceVisible) ? null : { display: "none" },
                      data: tabsData.value
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(SourceCode, {
                      style: unref(sourceVisible) ? null : { display: "none" },
                      source: _ctx.source
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    tabsData.value.length > 1 ? withDirectives((openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      data: tabsData.value
                    }, null, 8, ["data"])), [
                      [vShow, unref(sourceVisible)]
                    ]) : withDirectives((openBlock(), createBlock(SourceCode, {
                      key: 1,
                      source: _ctx.source
                    }, null, 8, ["source"])), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(unref(sourceVisible) ? null : { display: "none" })}" class="example-float-control" tabindex="0" role="button" data-v-d3c8c828${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElIcon, { size: 16 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CaretTop), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CaretTop))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span data-v-d3c8c828${_scopeId}>${ssrInterpolate(locale.value["hide-source"])}</span></div></div>`);
          } else {
            return [
              createVNode("p", {
                text: "sm",
                innerHTML: decodedDescription.value
              }, null, 8, ["innerHTML"]),
              createVNode("div", { class: "example" }, [
                createVNode(Example, {
                  file: _ctx.path,
                  demo: formatPathDemos.value[_ctx.path]
                }, null, 8, ["file", "demo"]),
                createVNode(_component_ElDivider, { class: "m-0" }),
                createVNode("div", { class: "op-btns" }, [
                  createVNode(_component_ElTooltip, {
                    content: locale.value["view-source"],
                    "show-arrow": false,
                    trigger: ["hover", "focus"],
                    "trigger-keys": []
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        ref_key: "sourceCodeRef",
                        ref: sourceCodeRef,
                        "aria-label": unref(sourceVisible) ? locale.value["hide-source"] : locale.value["view-source"],
                        class: "reset-btn el-icon op-btn",
                        onClick: ($event) => unref(toggleSourceVisible)()
                      }, [
                        createVNode(_component_ElIcon, { size: 16 }, {
                          default: withCtx(() => [
                            createVNode(_component_i_ri_code_line)
                          ]),
                          _: 1
                        })
                      ], 8, ["aria-label", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["content"])
                ]),
                createVNode(_component_ElCollapseTransition, null, {
                  default: withCtx(() => [
                    tabsData.value.length > 1 ? withDirectives((openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      data: tabsData.value
                    }, null, 8, ["data"])), [
                      [vShow, unref(sourceVisible)]
                    ]) : withDirectives((openBlock(), createBlock(SourceCode, {
                      key: 1,
                      source: _ctx.source
                    }, null, 8, ["source"])), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(Transition, { name: "el-fade-in-linear" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("div", {
                      class: "example-float-control",
                      tabindex: "0",
                      role: "button",
                      onClick: ($event) => unref(toggleSourceVisible)(false),
                      onKeydown: onSourceVisibleKeydown
                    }, [
                      createVNode(_component_ElIcon, { size: 16 }, {
                        default: withCtx(() => [
                          createVNode(unref(CaretTop))
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, toDisplayString(locale.value["hide-source"]), 1)
                    ], 40, ["onClick"]), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vitepress/components/vp-demo.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VpDemo = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-d3c8c828"]]);
const config = {
  vuePlugins: [
    {
      plugin: (app) => {
        app.use(ElmentPlus);
        app.component("Demo", VpDemo);
        app.component("ClientOnly", VkClientOnly);
      }
    }
  ]
};
const _vuePlugins = config.vuePlugins;
const import_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _vuePlugins
}, Symbol.toStringTag, { value: "Module" }));
export {
  _export_sfc$1 as _,
  _sfc_main$4 as a,
  import_3 as i,
  onRenderHtml as o
};
