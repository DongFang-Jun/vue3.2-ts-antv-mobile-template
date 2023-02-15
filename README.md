PC 端技术架构：

    vue3.2全家桶（组合式api + vite + pinia + vueRouter）+ typescript + less + vant@4

样式兼容适配方案：

    vw

    本项目已启用插件自动将px转换成vw进行适配，开发时直接使用px作为单位即可；对应设计稿宽度375；请在蓝湖上自行调整设计图宽度为375后，即可直接使用px进行开发；

安装工具：

    yarn

新增依赖：

    yarn add xxx

**ts 参数类型校验尽可能定义确定类型，勿大范围使用 any**

分支结构：

    master 线上分支
    test 测试分支
    ...a

    开发自创分支，向test/master merge即可；保证多人协作尽可能避免冲突

目录结构（src）：

    apis：所有接口接口走一层封装，方便不同页面调用产生多处重复代码

    assets：静态资源文件

    components：全局自定义组件

    config：全局配置文件 interface.ts为所有接口地址文件，config.ts为全局通用配置参数,router.config.ts为动态路由映射列表

    composable：“组合式函数”(Composable), 利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数；mixins的优化版

    plugins：全局插件，如自定义指令...

    router：路由文件

    stores：pinia状态存储库

    types：全局通用或者常用 ts 类型集合

    utils：工具库

    views：视图文件

![Image text](https://resource.boka.vc/BKRYB/mobile/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95.png)
