import type { App } from "vue";
import STree from "./src/tree";

// 具名导出
export { STree };

// 导出插件
export default {
  install(app: App) {
    app.component(STree.name, STree);
  }
};
