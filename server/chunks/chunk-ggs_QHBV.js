import { inject } from "vue";
function useGraphicsLayer() {
  const layer = inject("vaGraphicsLayer");
  if (!layer) {
    throw new Error("The component which use useGraphicsLayer() must be in a GraphicsLayer component");
  }
  return layer;
}
export {
  useGraphicsLayer as u
};
