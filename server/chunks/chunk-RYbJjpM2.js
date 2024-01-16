import { inject } from "vue";
function useSublayers() {
  const instance = inject("vaSublayers");
  if (!instance) {
    throw new Error("The component which use useSublayers() must be in a has Sublayers component");
  }
  return instance;
}
export {
  useSublayers as u
};
