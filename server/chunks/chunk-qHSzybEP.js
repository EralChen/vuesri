import { ToggleHandler } from "@vunk/core/shared/utils-class";
const createMitterToggleHandler = (mitter) => {
  return class MitterToggleHandler extends ToggleHandler {
    name;
    handler;
    cacheData;
    constructor(name, handler) {
      super();
      this.name = name;
      this.handler = handler;
    }
    add() {
      mitter.on(this.name, this.handler);
      this.removeHandler = () => mitter.off(this.name, this.handler);
    }
  };
};
export {
  createMitterToggleHandler as c
};
