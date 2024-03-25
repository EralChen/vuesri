import { inject } from "vue";
function useSceneView() {
  const view = inject("vaSceneView");
  if (!view) {
    throw new Error("The component which use useSceneView() must be in <VaSceneView>");
  }
  return view;
}
export {
  useSceneView as u
};
