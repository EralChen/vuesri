import { watchEffect, onBeforeUnmount, onActivated, onDeactivated } from "vue";
const useAddUi = (uix, component, props) => {
  if (props.orphan)
    return;
  watchEffect(() => {
    uix.add(component, props.position);
  });
  onBeforeUnmount(() => {
    uix.remove(component);
  });
  onActivated(() => {
    uix.add(component, props.position);
  });
  onDeactivated(() => {
    uix.remove(component);
  });
};
export {
  useAddUi as u
};
