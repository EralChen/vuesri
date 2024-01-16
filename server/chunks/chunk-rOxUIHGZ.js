import { a$ as j } from "./chunk-KFNcxJaF.js";
async function t(t2, o) {
  const { data: r } = await j(t2, { responseType: "json", query: { f: "json", ...o?.customParameters, token: o?.apiKey } });
  return r;
}
export {
  t
};
