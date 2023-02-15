import { createRouter, createWebHistory } from "vue-router";
import { routerList } from "@/config/router.config";

const createRouterFun = () =>
  createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }), //刷新页面，滚动条重置
    history: createWebHistory(),
    routes: routerList,
  });

const router = createRouterFun();

export default router;
