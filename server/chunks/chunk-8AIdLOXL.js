import path from "path";
const CrowdinFileLangOptions = [
  {
    label: "中文",
    value: "zh-CN",
    glob: /* @__PURE__ */ Object.assign({ "./zh-CN/pages/component.json": () => import("./chunk-qRG6xPsL.js") })
  },
  {
    label: "英文",
    value: "en-US",
    glob: /* @__PURE__ */ Object.assign({ "./en-US/pages/component.json": () => import("./chunk-gY52k1Cx.js") })
  }
];
const CrowdinFileLangReflect = CrowdinFileLangOptions.reduce((acc, cur) => {
  acc[cur.value] = cur;
  return acc;
}, {});
var CrowdinFilePath = /* @__PURE__ */ ((CrowdinFilePath2) => {
  CrowdinFilePath2["component"] = "pages/component.json";
  return CrowdinFilePath2;
})(CrowdinFilePath || {});
async function rCrowdinFiles(lang = "zh-CN") {
  const files = CrowdinFileLangReflect[lang].glob;
  const crowdinFiles = [];
  for (const filepath in files) {
    const paths = filepath.split("/");
    crowdinFiles.push({
      lang: paths[1],
      path: paths.slice(2).join("/"),
      basename: path.basename(filepath),
      source: (await files[filepath]()).default
    });
  }
  return crowdinFiles;
}
async function rCrowdinFilesAsReflect(lang) {
  const res = await rCrowdinFiles(lang);
  return res.reduce((acc, cur) => {
    acc[cur.path] = cur;
    return acc;
  }, {});
}
export {
  CrowdinFileLangOptions as C,
  CrowdinFilePath as a,
  rCrowdinFilesAsReflect as r
};
