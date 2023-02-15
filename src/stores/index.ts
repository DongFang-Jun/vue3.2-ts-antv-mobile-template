// src/store/index.ts
import demoStore from "@/stores/modules/demo";

const useStore = () => ({
  demoStore: demoStore(),
});

export default useStore;
