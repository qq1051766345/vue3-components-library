import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";

// 使用全量导出
import dhUi from "../build/";

createApp(App).use(dhUi).mount("#app");
