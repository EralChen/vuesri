// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// utils/env.ts
import path2 from "path";
import { readFileSync } from "fs";

// config/path.ts
import path from "path";
var workRoot = path.resolve("D:\\labCode\\vuesri\\playground\\config", "../");
var srcRoot = path.resolve("D:\\labCode\\vuesri\\playground\\config", "../src");
var demosRoot = path.resolve("D:\\labCode\\vuesri\\playground\\config", "../src/demos");

// utils/env.ts
function getEnv(mode) {
  const envFilePath = path2.resolve(workRoot, `./.env.${mode}`);
  const data = readFileSync(envFilePath).toString();
  const res2 = {};
  data.split("\n").forEach((line) => {
    const keyValueArr = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (keyValueArr != null) {
      const key = keyValueArr[1];
      let value = keyValueArr[2] || "";
      const len = value ? value.length : 0;
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, "\n");
      }
      value = value.replace(/(^['"]|['"]$)/g, "").trim();
      res2[key] = value;
    }
  });
  return res2;
}

// build/plugins/window-env.ts
function windowEnv() {
  let mode = "";
  return {
    configResolved(resolvedConfig) {
      mode = resolvedConfig.mode;
    },
    name: "window-env-plugin",
    transform(code) {
      if (code.includes("import.meta.env.")) {
        code = code.replace(/import\.meta\.env\./g, "window.__env__.");
      }
      return code;
    },
    transformIndexHtml(html) {
      return html.replace(`<script id="env"><\/script>`, `<script id="env">
          ${"window.__env__ =" + JSON.stringify(getEnv(mode), null, 2)}
        <\/script>`);
    }
  };
}

// vite.config.ts
import path4 from "path";
import pages from "vite-plugin-pages";
import markdown from "vite-plugin-md";
import markdownAnchor from "markdown-it-anchor";

// build/markdown/md-plugin/demo.ts
import path3 from "path";
import fs from "fs";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";

// utils/highlight.ts
import chalk from "chalk";
import escapeHtml from "escape-html";
import prism from "prismjs";
var res = await import("prismjs/components/index.js");
var loadLanguages = res.default;
loadLanguages(["markup", "css", "javascript", "vue"]);
function wrap(code, lang) {
  if (lang === "text") {
    code = escapeHtml(code);
  }
  return `<pre v-pre><code>${code}</code></pre>`;
}
var highlight = (str, lang) => {
  if (!lang) {
    return wrap(str, "text");
  }
  lang = lang.toLowerCase();
  const rawLang = lang;
  if (lang === "vue" || lang === "html") {
    lang = "markup";
  }
  if (lang === "md") {
    lang = "markdown";
  }
  if (lang === "ts") {
    lang = "typescript";
  }
  if (lang === "py") {
    lang = "python";
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    } catch (e) {
      console.warn(chalk.yellow(`[vitepress] Syntax highlight for language "${lang}" is not supported.`));
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang);
    return wrap(code, rawLang);
  }
  return wrap(str, "text");
};

// utils/string.ts
function mergeImport(str) {
  const matchAll = str.matchAll(/import\s*{(.+)}\s*from\s['|"](?<name>[A-Za-z]+)['|"]/g);
  const matchArr = [...matchAll];
  const matchMap = matchArr.reduce((a, c) => {
    if (c.groups?.name) {
      if (a[c.groups.name]) {
        a[c.groups.name].push(c);
      } else {
        a[c.groups.name] = [c];
      }
    }
    return a;
  }, {});
  for (const key in matchMap) {
    if (Object.prototype.hasOwnProperty.call(matchMap, key)) {
      const arr = matchMap[key];
      const importMerge = `import { ${arr.map((item) => item[1]).join(",").split(",").map((item) => item.trim()).join(", ")} } from '${key}'`;
      arr.forEach((item, index) => {
        const s = item[0];
        if (index === 0) {
          str = str.replace(s, importMerge);
        } else {
          const reg = new RegExp(s + "\\s*");
          str = str.replace(reg, "");
        }
      });
    }
  }
  return str;
}

// config/demo-source.ts
var restoreAlias = (source) => {
  source = source.replace(/import(.+)from\s['"]@vuesri\/shared\/(.+)['"]/g, function(a, p1, p2) {
    return `import${p1}from 'vuesri/shared/${p2}'`;
  }).replace(/import(.+)from\s['"]@vuesri\/components\/(.+)['"]/g, function(a, p1, p2) {
    return `import${p1}from 'vuesri'`;
  });
  source = mergeImport(source);
  return source;
};

// build/markdown/md-plugin/demo.ts
var localMd = MarkdownIt();
var rSourceAttr = (m, sourceFileToken) => {
  const description = m && m.length > 1 ? m[1] : "";
  let source = "";
  const sourceFile = sourceFileToken.children?.[0].content ?? "";
  if (sourceFileToken.type === "inline") {
    source = fs.readFileSync(path3.resolve(demosRoot, `${sourceFile}`), "utf-8");
  }
  return {
    description,
    source,
    sourceFile
  };
};
var mdDemoPlugin = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        let { description, source, sourceFile } = rSourceAttr(m, tokens[idx + 2]);
        if (!source)
          throw new Error(`Incorrect source file: ${sourceFile}`);
        source = restoreAlias(source);
        return `  <Suspense> <DemoContainer source="${encodeURIComponent(highlight(source, "vue"))}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}" description="${encodeURIComponent(localMd.render(description))}">`;
      } else {
        return "</DemoContainer></Suspense>";
      }
    }
  });
  md.use(mdContainer, "source", {
    validate(params) {
      return !!params.trim().match(/^source\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^source\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        let { description, source, sourceFile } = rSourceAttr(m, tokens[idx + 2]);
        if (!source)
          throw new Error(`Incorrect source file: ${sourceFile}`);
        source = restoreAlias(source);
        const fileType = sourceFile.split(".").at(-1);
        return `<SourceContainer  source="${encodeURIComponent(highlight(source, fileType || "vue"))}" path="${sourceFile}" type="${fileType}" raw-source="${encodeURIComponent(source)}" description="${encodeURIComponent(localMd.render(description))}">`;
      } else {
        return "</SourceContainer>";
      }
    }
  });
};

// build/markdown/md-plugin/linkOpen.ts
var mdLinkOpenPlugin = (md) => {
  let defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
    let aIndex = tokens[idx].attrIndex("target");
    if (aIndex < 0) {
      const href = tokens[idx].attrGet("href");
      if (href && /^http/.test(href)) {
        tokens[idx].attrPush(["target", "_blank"]);
      }
    } else {
      const attrs = tokens[idx].attrs;
      if (attrs) {
        attrs[aIndex][1] = "_blank";
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};

// vite.config.ts
import mdPrismPlugin from "markdown-it-prism";

// src/pages/docs/components/layers/layerProps.txt
var layerProps_default = "|:[maxScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#maxScale)|Number|0|\u56FE\u5C42\u6700\u5927\u6BD4\u4F8B\u5C3A|\r\n|:[minScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#minScale)|Number|0|\u56FE\u5C42\u6700\u5C0F\u6BD4\u4F8B\u5C3A|\r\n|:index|Number|-|\u56FE\u5C42\u53E0\u52A0\u987A\u5E8F|\r\n|:[opacity](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#opacity)|Number|1|\u900F\u660E\u5EA6|\r\n|:[title](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#title)|String|-|\u56FE\u5C42\u6807\u9898|\r\n|:[visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#visible)|Boolean|true|show|\r\n|orphan|Boolean|false|\u82E5\u4E3Atrue, \u5219\u5B9E\u4F8B\u4E3A\u5F85\u6302\u8F7D\u7684\u72B6\u6001|";

// src/pages/docs/components/layers/feature-layer/featureLayerProps.txt
var featureLayerProps_default = "|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#constructors-summary)|__esri.FeatureLayerProperties|{}|\u6784\u9020\u51FD\u6570\u53C2\u6570|\r\n|:[renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#renderer)|__esri.Renderer|-|\u6E32\u67D3\u5668\uFF0C\u6539\u53D8\u8981\u7D20\u6837\u5F0F|\r\n|:[definitionExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression)|String|'1=1'|SQL\u8FC7\u6EE4\u8981\u7D20|\r\n|:[popupEnabled](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupEnabled)|Boolean|true|\u662F\u5426\u542F\u7528\u9ED8\u8BA4\u5F39\u7A97|\r\n|:cursor|String|-|hover\u8981\u7D20\u65F6\u9F20\u6807\u6837\u5F0F|";

// md.frontmatter.ts
var md_frontmatter_default = {
  layerProps: layerProps_default,
  featureLayerProps: featureLayerProps_default
};

// utils/object.ts
var getDeepValue = (o, keys) => {
  const _keys = [...keys];
  function getValue(o2, ks) {
    const v = o2[ks[0]];
    ks.shift();
    if (ks.length) {
      return getValue(v, ks);
    } else {
      return v;
    }
  }
  return getValue(o, _keys);
};

// vite.config.ts
var vite_config_default = defineConfig(({ mode }) => {
  const env = getEnv(mode);
  return {
    base: env.VITE_BASE_URL + "/",
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    build: {
      outDir: path4.resolve(workRoot, "./dist" + env.VITE_BASE_URL)
    },
    server: {
      host: "0.0.0.0",
      port: 4321
    },
    resolve: {
      alias: {
        "_v": path4.resolve(srcRoot, "./views"),
        "_c": path4.resolve(srcRoot, "./components"),
        "@": path4.resolve(srcRoot, "."),
        esri: "@arcgis/core"
      }
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      vueJSX(),
      pages({
        extensions: ["vue", "md"]
      }),
      markdown({
        markdownItOptions: {
          html: true,
          linkify: true,
          highlight
        },
        markdownItSetup(md) {
          markdownAnchor(md);
          mdLinkOpenPlugin(md);
          mdPrismPlugin(md, {
            init: () => {
            },
            plugins: [],
            defaultLanguageForUnknown: "html"
          });
          mdDemoPlugin(md);
        },
        wrapperComponent: "MdWrapper",
        transforms: {
          before(code) {
            const keys = Reflect.ownKeys(md_frontmatter_default);
            const reg = new RegExp(`<\\?\\s*((${keys.join("|")}).+)\\s*\\?>`, "g");
            const matchArr = [...code.matchAll(reg)];
            matchArr.forEach((item) => {
              const temp = item[0];
              const curretKeys = item[1].split(".").map((s) => s.trim());
              code = code.replace(temp, getDeepValue(md_frontmatter_default, curretKeys));
            });
            return code;
          }
        }
      }),
      windowEnv(),
      createSvgIconsPlugin({
        iconDirs: [path4.resolve(srcRoot, "./icons/svg")],
        symbolId: "icon-[dir]-[name]"
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvZW52LnRzIiwgImNvbmZpZy9wYXRoLnRzIiwgImJ1aWxkL3BsdWdpbnMvd2luZG93LWVudi50cyIsICJidWlsZC9tYXJrZG93bi9tZC1wbHVnaW4vZGVtby50cyIsICJ1dGlscy9oaWdobGlnaHQudHMiLCAidXRpbHMvc3RyaW5nLnRzIiwgImNvbmZpZy9kZW1vLXNvdXJjZS50cyIsICJidWlsZC9tYXJrZG93bi9tZC1wbHVnaW4vbGlua09wZW4udHMiLCAibWQuZnJvbnRtYXR0ZXIudHMiLCAidXRpbHMvb2JqZWN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpTWCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuaW1wb3J0IHdpbmRvd0VudiBmcm9tICcuL2J1aWxkL3BsdWdpbnMvd2luZG93LWVudidcclxuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnLi91dGlscy9lbnYnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IHNyY1Jvb3QsIHdvcmtSb290IH0gZnJvbSAnLi9jb25maWcvcGF0aCdcclxuLy8gaW1wb3J0IGxlZ2FjeSBmcm9tICdAdml0ZWpzL3BsdWdpbi1sZWdhY3knXHJcbi8vIGltcG9ydCB7IHZpdGVFeHRlcm5hbHNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1leHRlcm5hbHMnXHJcbmltcG9ydCBwYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLW1kJ1xyXG5pbXBvcnQgbWFya2Rvd25BbmNob3IgZnJvbSAnbWFya2Rvd24taXQtYW5jaG9yJ1xyXG5pbXBvcnQgeyBtZERlbW9QbHVnaW4gfSBmcm9tICcuL2J1aWxkL21hcmtkb3duL21kLXBsdWdpbi9kZW1vJ1xyXG5pbXBvcnQgeyBtZExpbmtPcGVuUGx1Z2luIH0gZnJvbSAnLi9idWlsZC9tYXJrZG93bi9tZC1wbHVnaW4vbGlua09wZW4nXHJcbmltcG9ydCBtZFByaXNtUGx1Z2luIGZyb20gJ21hcmtkb3duLWl0LXByaXNtJ1xyXG5pbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuL3V0aWxzL2hpZ2hsaWdodCdcclxuaW1wb3J0IG1kRnJvbnRNYXR0ZXIgZnJvbSAnLi9tZC5mcm9udG1hdHRlcidcclxuaW1wb3J0IHsgZ2V0RGVlcFZhbHVlIH0gZnJvbSAnLi91dGlscy9vYmplY3QnXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBjb25zdCBlbnYgPSBnZXRFbnYobW9kZSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJhc2U6IGVudi5WSVRFX0JBU0VfVVJMICsgJy8nLFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBvc3Rjc3NQbHVnaW46ICdpbnRlcm5hbDpjaGFyc2V0LXJlbW92YWwnLFxyXG4gICAgICAgICAgICBBdFJ1bGU6IHtcclxuICAgICAgICAgICAgICBjaGFyc2V0OiAoYXRSdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXRSdWxlLm5hbWUgPT09ICdjaGFyc2V0Jykge1xyXG4gICAgICAgICAgICAgICAgICBhdFJ1bGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIG91dERpcjogcGF0aC5yZXNvbHZlKHdvcmtSb290LCAnLi9kaXN0JyArIGVudi5WSVRFX0JBU0VfVVJMKSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBwb3J0OiA0MzIxLFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnX3YnOiBwYXRoLnJlc29sdmUoc3JjUm9vdCwnLi92aWV3cycpLFxyXG4gICAgICAgICdfYyc6IHBhdGgucmVzb2x2ZShzcmNSb290LCcuL2NvbXBvbmVudHMnKSxcclxuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShzcmNSb290LCcuJyksXHJcbiAgICAgICAgZXNyaTogJ0BhcmNnaXMvY29yZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoe1xyXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcclxuICAgICAgfSksXHJcbiAgICAgIHZ1ZUpTWCgpLFxyXG4gICAgICBwYWdlcyh7XHJcbiAgICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcclxuICAgICAgfSksXHJcblxyXG4gICAgICBtYXJrZG93bih7XHJcbiAgICAgICAgbWFya2Rvd25JdE9wdGlvbnM6IHtcclxuICAgICAgICAgIGh0bWw6IHRydWUsXHJcbiAgICAgICAgICBsaW5raWZ5OiB0cnVlLFxyXG4gICAgICAgICAgaGlnaGxpZ2h0LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1hcmtkb3duSXRTZXR1cCAobWQpIHtcclxuICAgICAgICAgIC8vIGZvciBleGFtcGxlXHJcbiAgICAgICAgICBtYXJrZG93bkFuY2hvcihtZClcclxuICAgICAgICAgIG1kTGlua09wZW5QbHVnaW4obWQpXHJcbiAgICAgICAgICBtZFByaXNtUGx1Z2luKG1kLCB7XHJcbiAgICAgICAgICAgIGluaXQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiBbXSxcclxuICAgICAgICAgICAgZGVmYXVsdExhbmd1YWdlRm9yVW5rbm93bjogJ2h0bWwnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIG1kRGVtb1BsdWdpbihtZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdyYXBwZXJDb21wb25lbnQ6ICdNZFdyYXBwZXInLFxyXG4gICAgICAgIHRyYW5zZm9ybXM6IHtcclxuICAgICAgICAgIGJlZm9yZSAoY29kZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFJlZmxlY3Qub3duS2V5cyhtZEZyb250TWF0dGVyKVxyXG4gICAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGA8XFxcXD9cXFxccyooKCR7a2V5cy5qb2luKCd8Jyl9KS4rKVxcXFxzKlxcXFw/XFw+YCwgJ2cnKVxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaEFyciA9IFsuLi5jb2RlLm1hdGNoQWxsKHJlZyldXHJcbiAgICAgICAgICAgIG1hdGNoQXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGl0ZW1bMF1cclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZXRLZXlzID0gaXRlbVsxXS5zcGxpdCgnLicpLm1hcChzID0+IHMudHJpbSgpKVxyXG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UodGVtcCwgZ2V0RGVlcFZhbHVlKG1kRnJvbnRNYXR0ZXIsIGN1cnJldEtleXMpKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvLyBtYXJrZG93bkl0VXNlczogW21kRGVtb1BsdWdpbl0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBcclxuICAgICAgLy8gbGVnYWN5KHtcclxuICAgICAgLy8gICBtb2Rlcm5Qb2x5ZmlsbHM6IFsnZXNuZXh0LmFycmF5LmF0J10sXHJcbiAgICAgIC8vIH0pLFxyXG4gICAgICB3aW5kb3dFbnYoKSxcclxuICAgICAgLy8gdml0ZUV4dGVybmFsc1BsdWdpbih7XHJcblxyXG4gICAgICAvLyB9KSxcclxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xyXG4gICAgICAgIC8vIFNwZWNpZnkgdGhlIGljb24gZm9sZGVyIHRvIGJlIGNhY2hlZFxyXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHNyY1Jvb3QsICcuL2ljb25zL3N2ZycpXSxcclxuICAgICAgICAvLyBTcGVjaWZ5IHN5bWJvbElkIGZvcm1hdFxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgICB9KSxcclxuXHJcbiAgICBdLFxyXG4gIH1cclxuXHJcbn0pXHJcbiIsICJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcydcclxuaW1wb3J0IHsgd29ya1Jvb3QgfSBmcm9tICcuLi9jb25maWcvcGF0aCdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudiAobW9kZTogc3RyaW5nKTogSW1wb3J0TWV0YUVudiB7XHJcbiAgY29uc3QgZW52RmlsZVBhdGggPSBwYXRoLnJlc29sdmUod29ya1Jvb3QsIGAuLy5lbnYuJHttb2RlfWApXHJcbiAgY29uc3QgZGF0YSA9IHJlYWRGaWxlU3luYyhlbnZGaWxlUGF0aCkudG9TdHJpbmcoKVxyXG4gIGNvbnN0IHJlcyA9IHt9IGFzIEltcG9ydE1ldGFFbnZcclxuICBkYXRhLnNwbGl0KCdcXG4nKS5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICBjb25zdCBrZXlWYWx1ZUFyciA9IGxpbmUubWF0Y2goL15cXHMqKFtcXHcuLV0rKVxccyo9XFxzKiguKik/XFxzKiQvKVxyXG4gICAgaWYgKGtleVZhbHVlQXJyICE9IG51bGwpIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5VmFsdWVBcnJbMV1cclxuICAgICAgbGV0IHZhbHVlID0ga2V5VmFsdWVBcnJbMl0gfHwgJydcclxuICAgICAgY29uc3QgbGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiAwXHJcbiAgICAgIGlmIChsZW4gPiAwICYmIHZhbHVlLmNoYXJBdCgwKSA9PT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQobGVuIC0gMSkgPT09ICdcIicpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFxuL2dtLCAnXFxuJylcclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyheWydcIl18WydcIl0kKS9nLCAnJykudHJpbSgpXHJcbiAgICAgIHJlc1trZXldID0gdmFsdWVcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByZXMgIFxyXG59IiwgImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmV4cG9ydCBjb25zdCB3b3JrUm9vdCA9IHBhdGgucmVzb2x2ZShcIkQ6XFxcXGxhYkNvZGVcXFxcdnVlc3JpXFxcXHBsYXlncm91bmRcXFxcY29uZmlnXCIsICAnLi4vJylcclxuZXhwb3J0IGNvbnN0IHNyY1Jvb3QgPSBwYXRoLnJlc29sdmUoXCJEOlxcXFxsYWJDb2RlXFxcXHZ1ZXNyaVxcXFxwbGF5Z3JvdW5kXFxcXGNvbmZpZ1wiLCAnLi4vc3JjJylcclxuZXhwb3J0IGNvbnN0IGRlbW9zUm9vdCA9IHBhdGgucmVzb2x2ZShcIkQ6XFxcXGxhYkNvZGVcXFxcdnVlc3JpXFxcXHBsYXlncm91bmRcXFxcY29uZmlnXCIsICcuLi9zcmMvZGVtb3MnKVxyXG4iLCAiaW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgZ2V0RW52IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aW5kb3dFbnYgKCk6UGx1Z2luT3B0aW9uIHtcclxuICBsZXQgbW9kZSA9ICcnXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbmZpZ1Jlc29sdmVkIChyZXNvbHZlZENvbmZpZykge1xyXG4gICAgICAvLyBcdTVCNThcdTUwQThcdTY3MDBcdTdFQzhcdTg5RTNcdTY3OTBcdTc2ODRcdTkxNERcdTdGNkVcclxuICAgICAgbW9kZSA9IHJlc29sdmVkQ29uZmlnLm1vZGVcclxuICAgIH0sXHJcblxyXG4gICAgbmFtZTogJ3dpbmRvdy1lbnYtcGx1Z2luJyxcclxuICAgIHRyYW5zZm9ybSAoY29kZSkge1xyXG4gICAgICBpZiAoY29kZS5pbmNsdWRlcygnaW1wb3J0Lm1ldGEuZW52LicpKSB7XHJcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvaW1wb3J0XFwubWV0YVxcLmVudlxcLi9nLCAnd2luZG93Ll9fZW52X18uJylcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29kZVxyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybUluZGV4SHRtbCAoaHRtbCkge1xyXG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGA8c2NyaXB0IGlkPVwiZW52XCI+PC9zY3JpcHQ+YCxcclxuICAgICAgICBgPHNjcmlwdCBpZD1cImVudlwiPlxyXG4gICAgICAgICAgJHsnd2luZG93Ll9fZW52X18gPScgKyBKU09OLnN0cmluZ2lmeShnZXRFbnYobW9kZSksIG51bGwsIDIpfVxyXG4gICAgICAgIDwvc2NyaXB0PmApXHJcbiAgICB9LFxyXG4gIH1cclxufSIsICJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBNYXJrZG93bkl0IGZyb20gJ21hcmtkb3duLWl0J1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBtZENvbnRhaW5lciBmcm9tICdtYXJrZG93bi1pdC1jb250YWluZXInXHJcbmltcG9ydCB7IGhpZ2hsaWdodCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2hpZ2hsaWdodCdcclxuLy8gaW1wb3J0IHsgZG9jUm9vdCB9IGZyb20gJy4uLy4uL3V0aWxzL3BhdGhzJ1xyXG5pbXBvcnQgeyBkZW1vc1Jvb3QgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvcGF0aCdcclxuaW1wb3J0IHR5cGUgVG9rZW4gZnJvbSAnbWFya2Rvd24taXQvbGliL3Rva2VuJ1xyXG5pbXBvcnQgdHlwZSBSZW5kZXJlciBmcm9tICdtYXJrZG93bi1pdC9saWIvcmVuZGVyZXInXHJcbmltcG9ydCB7IHJlc3RvcmVBbGlhcyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kZW1vLXNvdXJjZSdcclxuY29uc3QgbG9jYWxNZCA9IE1hcmtkb3duSXQoKVxyXG4vLyBjb25zdCBzY3JpcHRTZXR1cFJFID0gLzxcXHMqc2NyaXB0W14+XSpcXGJzZXR1cFxcYltePl0qL1xyXG5cclxuaW50ZXJmYWNlIENvbnRhaW5lck9wdHMge1xyXG4gIG1hcmtlcj86IHN0cmluZyB8IHVuZGVmaW5lZFxyXG4gIHZhbGlkYXRlPyhwYXJhbXM6IHN0cmluZyk6IGJvb2xlYW5cclxuICByZW5kZXI/KFxyXG4gICAgdG9rZW5zOiBUb2tlbltdLFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIGVudjogYW55LFxyXG4gICAgc2VsZjogUmVuZGVyZXJcclxuICApOiBzdHJpbmdcclxufVxyXG5jb25zdCByU291cmNlQXR0ciA9IChtOiBSZWdFeHBNYXRjaEFycmF5fG51bGwsIHNvdXJjZUZpbGVUb2tlbjogVG9rZW4pID0+IHtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IG0gJiYgbS5sZW5ndGggPiAxID8gbVsxXSA6ICcnXHJcbiAgbGV0IHNvdXJjZSA9ICcnXHJcbiAgY29uc3Qgc291cmNlRmlsZSA9IHNvdXJjZUZpbGVUb2tlbi5jaGlsZHJlbj8uWzBdLmNvbnRlbnQgPz8gJydcclxuXHJcbiAgaWYgKHNvdXJjZUZpbGVUb2tlbi50eXBlID09PSAnaW5saW5lJykge1xyXG4gICAgc291cmNlID0gZnMucmVhZEZpbGVTeW5jKFxyXG4gICAgICBwYXRoLnJlc29sdmUoZGVtb3NSb290LCBgJHtzb3VyY2VGaWxlfWApLFxyXG4gICAgICAndXRmLTgnLFxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBzb3VyY2UsXHJcbiAgICBzb3VyY2VGaWxlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1kRGVtb1BsdWdpbiA9IChtZDogTWFya2Rvd25JdCkgPT4ge1xyXG4gIG1kLnVzZShtZENvbnRhaW5lciwgJ2RlbW8nLCB7XHJcbiAgICB2YWxpZGF0ZSAocGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiAhIXBhcmFtcy50cmltKCkubWF0Y2goL15kZW1vXFxzKiguKikkLylcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyICh0b2tlbnMsIGlkeCkge1xyXG4gICAgICBjb25zdCBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15kZW1vXFxzKiguKikkLylcclxuICAgICAgaWYgKHRva2Vuc1tpZHhdLm5lc3RpbmcgPT09IDEgLyogbWVhbnMgdGhlIHRhZyBpcyBvcGVuaW5nICovKSB7XHJcbiAgICAgICAgbGV0IHsgZGVzY3JpcHRpb24sIHNvdXJjZSwgc291cmNlRmlsZSB9ID0gclNvdXJjZUF0dHIobSwgdG9rZW5zW2lkeCArIDJdKVxyXG4gICAgICAgIGlmICghc291cmNlKSB0aHJvdyBuZXcgRXJyb3IoYEluY29ycmVjdCBzb3VyY2UgZmlsZTogJHtzb3VyY2VGaWxlfWApXHJcbiAgICAgICAgc291cmNlID0gcmVzdG9yZUFsaWFzKHNvdXJjZSlcclxuICAgICAgICByZXR1cm4gYCAgPFN1c3BlbnNlPiA8RGVtb0NvbnRhaW5lciBzb3VyY2U9XCIke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgIC8vIHNvdXJjZSxcclxuICAgICAgICAgIGhpZ2hsaWdodChzb3VyY2UsICd2dWUnKSxcclxuICAgICAgICApfVwiIHBhdGg9XCIke3NvdXJjZUZpbGV9XCIgcmF3LXNvdXJjZT1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgICAgc291cmNlLFxyXG4gICAgICAgICl9XCIgZGVzY3JpcHRpb249XCIke2VuY29kZVVSSUNvbXBvbmVudChsb2NhbE1kLnJlbmRlcihkZXNjcmlwdGlvbikpfVwiPmBcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICc8L0RlbW9Db250YWluZXI+PC9TdXNwZW5zZT4nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSBhcyBDb250YWluZXJPcHRzKVxyXG5cclxuXHJcbiAgbWQudXNlKG1kQ29udGFpbmVyLCAnc291cmNlJywge1xyXG4gICAgdmFsaWRhdGUgKHBhcmFtcykge1xyXG4gICAgICByZXR1cm4gISFwYXJhbXMudHJpbSgpLm1hdGNoKC9ec291cmNlXFxzKiguKikkLylcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyICh0b2tlbnMsIGlkeCkge1xyXG4gICAgICBjb25zdCBtID0gdG9rZW5zW2lkeF0uaW5mby50cmltKCkubWF0Y2goL15zb3VyY2VcXHMqKC4qKSQvKVxyXG4gICAgICBpZiAodG9rZW5zW2lkeF0ubmVzdGluZyA9PT0gMSAvKiBtZWFucyB0aGUgdGFnIGlzIG9wZW5pbmcgKi8pIHtcclxuXHJcbiAgICAgICAgbGV0IHsgZGVzY3JpcHRpb24sIHNvdXJjZSwgc291cmNlRmlsZSB9ID0gclNvdXJjZUF0dHIobSwgdG9rZW5zW2lkeCArIDJdKVxyXG4gICAgICAgIGlmICghc291cmNlKSB0aHJvdyBuZXcgRXJyb3IoYEluY29ycmVjdCBzb3VyY2UgZmlsZTogJHtzb3VyY2VGaWxlfWApXHJcbiAgICAgICAgc291cmNlID0gcmVzdG9yZUFsaWFzKHNvdXJjZSlcclxuICAgICAgICBjb25zdCBmaWxlVHlwZSA9IHNvdXJjZUZpbGUuc3BsaXQoJy4nKS5hdCgtMSlcclxuICAgICAgICByZXR1cm4gYDxTb3VyY2VDb250YWluZXIgIHNvdXJjZT1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgICAgLy8gc291cmNlLFxyXG4gICAgICAgICAgaGlnaGxpZ2h0KHNvdXJjZSwgZmlsZVR5cGUgfHwgJ3Z1ZScpLFxyXG4gICAgICAgICl9XCIgcGF0aD1cIiR7c291cmNlRmlsZX1cIiB0eXBlPVwiJHtmaWxlVHlwZX1cIiByYXctc291cmNlPVwiJHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgICBzb3VyY2UsXHJcbiAgICAgICAgKX1cIiBkZXNjcmlwdGlvbj1cIiR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2FsTWQucmVuZGVyKGRlc2NyaXB0aW9uKSl9XCI+YFxyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJzwvU291cmNlQ29udGFpbmVyPidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9IGFzIENvbnRhaW5lck9wdHMpXHJcbiAgXHJcbn1cclxuIiwgIi8vIHJlZiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzL2Jsb2IvbWFpbi9zcmMvbm9kZS9tYXJrZG93bi9wbHVnaW5zL2hpZ2hsaWdodC50c1xyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnXHJcbmltcG9ydCBlc2NhcGVIdG1sIGZyb20gJ2VzY2FwZS1odG1sJ1xyXG5pbXBvcnQgcHJpc20gZnJvbSAncHJpc21qcydcclxuXHJcbi8vIHByaXNtIGlzIGxpc3RlZCBhcyBhY3R1YWwgZGVwIHNvIGl0J3Mgb2sgdG8gcmVxdWlyZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xyXG5jb25zdCByZXMgPSBhd2FpdCBpbXBvcnQoJ3ByaXNtanMvY29tcG9uZW50cy9pbmRleC5qcycpXHJcbmNvbnN0IGxvYWRMYW5ndWFnZXMgPSByZXMuZGVmYXVsdFxyXG5cclxubG9hZExhbmd1YWdlcyhbJ21hcmt1cCcsICdjc3MnLCAnamF2YXNjcmlwdCcsICd2dWUnXSlcclxuXHJcbmZ1bmN0aW9uIHdyYXAgKGNvZGU6IHN0cmluZywgbGFuZzogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAobGFuZyA9PT0gJ3RleHQnKSB7XHJcbiAgICBjb2RlID0gZXNjYXBlSHRtbChjb2RlKVxyXG4gIH1cclxuICByZXR1cm4gYDxwcmUgdi1wcmU+PGNvZGU+JHtjb2RlfTwvY29kZT48L3ByZT5gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoaWdobGlnaHQgPSAoc3RyOiBzdHJpbmcsIGxhbmc6IHN0cmluZykgPT4ge1xyXG4gIGlmICghbGFuZykge1xyXG4gICAgcmV0dXJuIHdyYXAoc3RyLCAndGV4dCcpXHJcbiAgfVxyXG4gIGxhbmcgPSBsYW5nLnRvTG93ZXJDYXNlKClcclxuICBjb25zdCByYXdMYW5nID0gbGFuZ1xyXG4gIGlmIChsYW5nID09PSAndnVlJyB8fCBsYW5nID09PSAnaHRtbCcpIHtcclxuICAgIGxhbmcgPSAnbWFya3VwJ1xyXG4gIH1cclxuICBpZiAobGFuZyA9PT0gJ21kJykge1xyXG4gICAgbGFuZyA9ICdtYXJrZG93bidcclxuICB9XHJcbiAgaWYgKGxhbmcgPT09ICd0cycpIHtcclxuICAgIGxhbmcgPSAndHlwZXNjcmlwdCdcclxuICB9XHJcbiAgaWYgKGxhbmcgPT09ICdweScpIHtcclxuICAgIGxhbmcgPSAncHl0aG9uJ1xyXG4gIH1cclxuICBpZiAoIXByaXNtLmxhbmd1YWdlc1tsYW5nXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbG9hZExhbmd1YWdlcyhbbGFuZ10pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBjaGFsay55ZWxsb3coXHJcbiAgICAgICAgICBgW3ZpdGVwcmVzc10gU3ludGF4IGhpZ2hsaWdodCBmb3IgbGFuZ3VhZ2UgXCIke2xhbmd9XCIgaXMgbm90IHN1cHBvcnRlZC5gLFxyXG4gICAgICAgICksXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHByaXNtLmxhbmd1YWdlc1tsYW5nXSkge1xyXG4gICAgY29uc3QgY29kZSA9IHByaXNtLmhpZ2hsaWdodChzdHIsIHByaXNtLmxhbmd1YWdlc1tsYW5nXSwgbGFuZylcclxuICAgIHJldHVybiB3cmFwKGNvZGUsIHJhd0xhbmcpXHJcbiAgfVxyXG4gIHJldHVybiB3cmFwKHN0ciwgJ3RleHQnKVxyXG59XHJcbiIsICJleHBvcnQgZnVuY3Rpb24gbWVyZ2VJbXBvcnQgKHN0cjogc3RyaW5nKSB7XHJcbiAgY29uc3QgbWF0Y2hBbGwgPSBzdHIubWF0Y2hBbGwoL2ltcG9ydFxccyp7KC4rKX1cXHMqZnJvbVxcc1snfFwiXSg/PG5hbWU+W0EtWmEtel0rKVsnfFwiXS9nKVxyXG4gIGNvbnN0IG1hdGNoQXJyID0gIFsuLi5tYXRjaEFsbF1cclxuICBjb25zdCBtYXRjaE1hcCA9IG1hdGNoQXJyLnJlZHVjZSgoYSwgYykgPT4ge1xyXG4gICAgaWYgKGMuZ3JvdXBzPy5uYW1lKSB7XHJcbiAgICAgIGlmIChhW2MuZ3JvdXBzLm5hbWVdKSB7XHJcbiAgICAgICAgYVtjLmdyb3Vwcy5uYW1lXS5wdXNoKGMpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYVtjLmdyb3Vwcy5uYW1lXSA9IFtjXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYVxyXG4gIH0se30gYXMgUmVjb3JkPHN0cmluZywgUmVnRXhwTWF0Y2hBcnJheVtdPilcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgaW4gbWF0Y2hNYXApIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWF0Y2hNYXAsIGtleSkpIHtcclxuICAgICAgY29uc3QgYXJyID0gbWF0Y2hNYXBba2V5XVxyXG4gICAgICBjb25zdCBpbXBvcnRNZXJnZSA9IGBpbXBvcnQgeyAke1xyXG4gICAgICAgIGFyclxyXG4gICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW1bMV0pXHJcbiAgICAgICAgICAuam9pbignLCcpLnNwbGl0KCcsJylcclxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSlcclxuICAgICAgICAgIC5qb2luKCcsICcpXHJcbiAgICAgIH0gfSBmcm9tICcke2tleX0nYFxyXG5cclxuICAgICAgYXJyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IGl0ZW1bMF1cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHMsIGltcG9ydE1lcmdlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKHMgKyAnXFxcXHMqJylcclxuICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJlZywgJycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHJcclxufVxyXG4iLCAiaW1wb3J0IHsgbWVyZ2VJbXBvcnQgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnXHJcblxyXG4vKipcclxuICogXHU4RkQ4XHU1MzlGXHU1MjJCXHU1NDBEXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlc3RvcmVBbGlhcyA9IChzb3VyY2U6IHN0cmluZykgPT4ge1xyXG4gIHNvdXJjZSA9IHNvdXJjZVxyXG4gICAgLnJlcGxhY2UoXHJcbiAgICAgIC9pbXBvcnQoLispZnJvbVxcc1snXCJdQHZ1ZXNyaVxcL3NoYXJlZFxcLyguKylbJ1wiXS9nLCBcclxuICAgICAgZnVuY3Rpb24gKGEsIHAxLCBwMil7XHJcbiAgICAgICAgcmV0dXJuIGBpbXBvcnQke3AxfWZyb20gJ3Z1ZXNyaS9zaGFyZWQvJHtwMn0nYFxyXG4gICAgICB9LFxyXG4gICAgKVxyXG4gICAgLnJlcGxhY2UoXHJcbiAgICAgIC9pbXBvcnQoLispZnJvbVxcc1snXCJdQHZ1ZXNyaVxcL2NvbXBvbmVudHNcXC8oLispWydcIl0vZywgXHJcbiAgICAgIGZ1bmN0aW9uIChhLCBwMSwgcDIpe1xyXG4gICAgICAgIHJldHVybiBgaW1wb3J0JHtwMX1mcm9tICd2dWVzcmknYFxyXG4gICAgICB9LFxyXG4gICAgKVxyXG4gIHNvdXJjZSA9IG1lcmdlSW1wb3J0KHNvdXJjZSlcclxuICByZXR1cm4gc291cmNlXHJcbn1cclxuIiwgImltcG9ydCBNYXJrZG93bkl0IGZyb20gJ21hcmtkb3duLWl0J1xyXG5leHBvcnQgY29uc3QgbWRMaW5rT3BlblBsdWdpbiA9IChtZDogTWFya2Rvd25JdCkgPT4ge1xyXG4gIC8vIFJlbWVtYmVyIG9sZCByZW5kZXJlciwgaWYgb3ZlcnJpZGRlbiwgb3IgcHJveHkgdG8gZGVmYXVsdCByZW5kZXJlclxyXG4gIGxldCBkZWZhdWx0UmVuZGVyID0gbWQucmVuZGVyZXIucnVsZXMubGlua19vcGVuIHx8IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKSB7XHJcbiAgICByZXR1cm4gc2VsZi5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucylcclxuICB9XHJcbiAgbWQucmVuZGVyZXIucnVsZXMubGlua19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpIHtcclxuICAgIC8vIElmIHlvdSBhcmUgc3VyZSBvdGhlciBwbHVnaW5zIGNhbid0IGFkZCBgdGFyZ2V0YCAtIGRyb3AgY2hlY2sgYmVsb3dcclxuICAgIGxldCBhSW5kZXggPSB0b2tlbnNbaWR4XS5hdHRySW5kZXgoJ3RhcmdldCcpXHJcbiAgICBpZiAoYUluZGV4IDwgMCkge1xyXG4gICAgICBjb25zdCBocmVmID0gdG9rZW5zW2lkeF0uYXR0ckdldCgnaHJlZicpXHJcbiAgICAgIGlmIChocmVmICYmIC9eaHR0cC8udGVzdChocmVmKSkge1xyXG4gICAgICAgIHRva2Vuc1tpZHhdLmF0dHJQdXNoKFsndGFyZ2V0JywgJ19ibGFuayddKSAvLyBhZGQgbmV3IGF0dHJpYnV0ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhdHRycyA9IHRva2Vuc1tpZHhdLmF0dHJzXHJcbiAgICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGF0dHJzW2FJbmRleF1bMV0gPSAnX2JsYW5rJyAgICAvLyByZXBsYWNlIHZhbHVlIG9mIGV4aXN0aW5nIGF0dHJcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gcGFzcyB0b2tlbiB0byBkZWZhdWx0IHJlbmRlcmVyLlxyXG4gICAgcmV0dXJuIGRlZmF1bHRSZW5kZXIodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZilcclxuICB9XHJcbiAgXHJcbn0iLCAiLy8gdXNlIDw/ID8+IGluIC5tZCB0byBpbnN0ZXJ0IHRoZSBzdHJpbmdcclxuaW1wb3J0IGxheWVyUHJvcHMgZnJvbSAnLi9zcmMvcGFnZXMvZG9jcy9jb21wb25lbnRzL2xheWVycy9sYXllclByb3BzLnR4dCdcclxuaW1wb3J0IGZlYXR1cmVMYXllclByb3BzIGZyb20gJy4vc3JjL3BhZ2VzL2RvY3MvY29tcG9uZW50cy9sYXllcnMvZmVhdHVyZS1sYXllci9mZWF0dXJlTGF5ZXJQcm9wcy50eHQnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsYXllclByb3BzLFxyXG4gIGZlYXR1cmVMYXllclByb3BzLFxyXG59IGFzIFJlY29yZDxcclxuICBzdHJpbmcsIFxyXG4gIHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cclxuPiIsICJleHBvcnQgY29uc3QgZ2V0RGVlcFZhbHVlID0gPFQgPSB1bmtub3duPihvOlJlY29yZDxzdHJpbmcsIGFueT4sIGtleXM6IHN0cmluZ1tdKTogVCA9PiB7XHJcbiAgY29uc3QgX2tleXMgPSBbLi4ua2V5c11cclxuXHJcbiAgZnVuY3Rpb24gZ2V0VmFsdWUgKG86IFJlY29yZDxzdHJpbmcsIGFueT4sa3M6IHN0cmluZ1tdKTogVCB7XHJcbiAgICBjb25zdCB2ID0gb1trc1swXV1cclxuICAgIGtzLnNoaWZ0KClcclxuICAgIGlmIChrcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGdldFZhbHVlKHYsIGtzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGdldFZhbHVlKG8sIF9rZXlzKVxyXG5cclxuICBcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7OztBQ0RBO0FBQ08sSUFBTSxXQUFXLEtBQUssUUFBUSwyQ0FBNEMsS0FBSztBQUMvRSxJQUFNLFVBQVUsS0FBSyxRQUFRLDJDQUEyQyxRQUFRO0FBQ2hGLElBQU0sWUFBWSxLQUFLLFFBQVEsMkNBQTJDLGNBQWM7OztBREF4RixnQkFBaUIsTUFBNkI7QUFDbkQsUUFBTSxjQUFjLE1BQUssUUFBUSxVQUFVLFVBQVUsTUFBTTtBQUMzRCxRQUFNLE9BQU8sYUFBYSxXQUFXLEVBQUUsU0FBUztBQUNoRCxRQUFNLE9BQU0sQ0FBQztBQUNiLE9BQUssTUFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVM7QUFDakMsVUFBTSxjQUFjLEtBQUssTUFBTSwrQkFBK0I7QUFDOUQsUUFBSSxlQUFlLE1BQU07QUFDdkIsWUFBTSxNQUFNLFlBQVk7QUFDeEIsVUFBSSxRQUFRLFlBQVksTUFBTTtBQUM5QixZQUFNLE1BQU0sUUFBUSxNQUFNLFNBQVM7QUFDbkMsVUFBSSxNQUFNLEtBQUssTUFBTSxPQUFPLENBQUMsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLO0FBQ3ZFLGdCQUFRLE1BQU0sUUFBUSxTQUFTLElBQUk7QUFBQSxNQUNyQztBQUNBLGNBQVEsTUFBTSxRQUFRLGtCQUFrQixFQUFFLEVBQUUsS0FBSztBQUNqRCxXQUFJLE9BQU87QUFBQSxJQUNiO0FBQUEsRUFDRixDQUFDO0FBQ0QsU0FB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
