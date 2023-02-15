// 前端路由映射表
export const constantRouterComponents = {
  // 基础页面 layout 必须引入
  DashBoard: () => import("@/components/Layout/DashBoard.vue"),
  RouterView: () => import("@/components/Layout/RouterView.vue"),

  // 需要动态引入的页面组件
  Demo: () => import("@/views/Demo/Demo.vue"),
};

// 当前未做动态路由，等做到的时候再改造
export const routerList = [
  {
    path: "/",
    name: "Index",
    redirect: { name: "Demo" },
    component: constantRouterComponents.DashBoard,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/demo",
        name: "Demo",
        component: constantRouterComponents.Demo,
        meta: {
          title: "测试",
        },
      },
    ],
  },
];

// 根级菜单
export const rootRouter = {
  path: "/",
  name: "Index",
  redirect: { name: "DashBoard" },
  component: "RouteView",
  hidden: true,
  meta: {
    title: "首页",
  },
  children: [],
};

// 前端未找到页面路由（固定不用改）
export const notFoundRouter = {
  path: "*",
  redirect: "/404",
  hidden: true,
};

// 基础路由（登录+404）
export const constantRouterMap = [];
