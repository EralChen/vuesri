import { inject } from "vue";
function useFeatureLayer() {
  const layer = inject("vaFeatureLayer");
  if (!layer) {
    throw new Error("The component which use useFeatureLayer() must be in a FeatureLayer component");
  }
  return layer;
}
export {
  useFeatureLayer as u
};
