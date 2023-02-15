import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import plugins from "@/plugins/plugins";

import "vant/es/toast/style"; // Toast
import "vant/es/dialog/style"; // Dialog
import "vant/es/notify/style"; // Notify
import "vant/es/image-preview/style"; // ImagePreview

const app = createApp(App);

// pinia store
app.use(createPinia());

// vue-router
app.use(router);

// 全局注入自定义指令
plugins(app);

app.mount("#app");
