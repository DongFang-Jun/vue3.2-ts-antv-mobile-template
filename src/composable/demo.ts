import { ref, onMounted, onUnmounted } from "vue";

// 按照惯例，组合式函数名以“use”开头 - 来自vue3官网
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0);
  const y = ref(0);

  // 组合式函数可以随时更改其状态。
  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  // 确保在 onUnmounted() 时清理副作用。举例来说，如果一个组合式函数设置了一个事件监听器，它就应该在 onUnmounted() 中被移除 (就像我们在 useMouse() 示例中看到的一样)。当然也可以像之前的 useEventListener() 示例那样，使用一个组合式函数来自动帮你做这些事。- 来自vue3官网
  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  // 通过返回值暴露所管理的状态
  return { x, y };
}
