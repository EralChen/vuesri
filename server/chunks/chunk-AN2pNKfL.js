import { inject } from "vue";
function useLayer() {
  const layer = inject("vaLayer");
  if (!layer) {
    throw new Error("The component which use useLayer() must be in a Layer component");
  }
  return layer;
}
export {
  useLayer as u
};
