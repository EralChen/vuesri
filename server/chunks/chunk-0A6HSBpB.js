import { at as s$1 } from "./chunk-ejFG4zJ0.js";
import { ToggleHandler } from "@vunk/core/shared/utils-class";
import { onBeforeUnmount } from "vue";
class InterceptorToggleHandler extends ToggleHandler {
  interceptor;
  constructor(interceptor) {
    super();
    this.interceptor = interceptor;
  }
  add() {
    if (!s$1.request.interceptors) {
      s$1.request.interceptors = [];
    }
    s$1.request.interceptors?.unshift(this.interceptor);
  }
}
const useRequestInterceptor = (interceptor) => {
  const interceptorToggle = new InterceptorToggleHandler(interceptor);
  onBeforeUnmount(() => {
    interceptorToggle.remove();
  });
  return {
    interceptorToggle
  };
};
export {
  useRequestInterceptor as u
};
