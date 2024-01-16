import { inject } from "vue";
function useWmsLayer() {
  const layer = inject("vaWmsLayer");
  if (!layer) {
    throw new Error("The component which use useWmsLayer() must be in a WmsLayer component");
  }
  return layer;
}
export {
  useWmsLayer as u
};
