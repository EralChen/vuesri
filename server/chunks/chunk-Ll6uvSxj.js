import { aQ as U$1 } from "./chunk-ejFG4zJ0.js";
async function t(t2, o) {
  const { data: r } = await U$1(t2, { responseType: "json", query: { f: "json", ...o?.customParameters, token: o?.apiKey } });
  return r;
}
export {
  t
};
