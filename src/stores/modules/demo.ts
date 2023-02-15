import { defineStore } from "pinia";
const demoStore = defineStore("demoStore", {
  state: () => ({
    number: 1,
  }),

  getters: {
    // getter本身无法接收参数
    getNumber(state) {
      return state.number + 1;
    },

    // 利用返回函数的方式接收参数
    getNumberWithParam: (state) => {
      return (addNumber: number) => state.number + addNumber;
    },
  },

  actions: {
    setNumber(params: string): Promise<string> {
      return new Promise((resolve) => {
        resolve(`actions,请求参数为${params}`);
      });
    },
  },
});
export default demoStore;
