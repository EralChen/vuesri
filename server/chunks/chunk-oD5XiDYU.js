import { inject } from "vue";
function useView() {
  const view = inject("vaView");
  if (!view) {
    throw new Error("The component which use useView() must be in a View component");
  }
  return view;
}
export {
  useView as u
};
