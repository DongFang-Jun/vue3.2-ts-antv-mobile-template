import type { App, DirectiveBinding } from "vue";

interface debounceElementType extends HTMLElement {
  handler: () => any;
}

interface throttleElementType extends HTMLElement {
  handler: () => any;
  disabled: boolean;
}

const plugins = (app: App) => {
  // 防抖
  app.directive("debounce", {
    mounted(el: debounceElementType, binding: DirectiveBinding) {
      if (typeof binding.value !== "function") {
        throw "callback must be a function";
      }
      let timer: NodeJS.Timeout | null = null;
      el.handler = function () {
        if (timer) {
          clearInterval(timer);
        }
        timer = setTimeout(() => {
          binding.value();
        }, Number(binding.arg || 500));
      };
      el.addEventListener("click", el.handler);
    },
    beforeUnmount(el: debounceElementType) {
      el.removeEventListener("click", el.handler);
    },
  });
  // 节流
  app.directive("throttle", {
    mounted(el: throttleElementType, binding: DirectiveBinding) {
      if (typeof binding.value !== "function") {
        throw "callback must be a function";
      }
      let timer: NodeJS.Timeout | null = null;
      el.handler = function () {
        if (timer) {
          clearTimeout(timer);
        }
        if (!el.disabled) {
          el.disabled = true;
          binding.value();
          timer = setTimeout(() => {
            el.disabled = false;
          }, Number(binding.arg || 2000));
        }
      };
      el.addEventListener("click", el.handler);
    },
    beforeUnmount(el: throttleElementType) {
      el.removeEventListener("click", el.handler);
    },
  });
};

export default plugins;
