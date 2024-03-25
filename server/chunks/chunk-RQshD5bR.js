import { watchEffect, onDeactivated, onActivated } from "vue";
function useSetVisible(instance, props) {
  watchEffect(() => {
    instance.visible = props.visible;
  });
  onDeactivated(() => {
    instance.visible = false;
  });
  onActivated(() => {
    instance.visible = props.visible;
  });
}
export {
  useSetVisible as u
};
