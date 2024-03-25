import { RestFetch } from "@vunk/core/shared/utils-fetch";
const geoserver = "http://192.168.110.250:8080/geoserver";
const restFetch = new RestFetch({
  baseURL: geoserver,
  setRequestInit(config) {
    config.headers;
    return config;
  }
});
const request = (options) => {
  return restFetch.request(options);
};
const rLayers = () => {
  return request({
    method: "GET",
    url: "/rest/layers.json"
  }).then((res) => {
    return res.layers.layer;
  });
};
export {
  geoserver as g,
  rLayers as r
};
