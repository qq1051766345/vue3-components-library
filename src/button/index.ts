import type { App } from "vue";
import SButton from "./src/Button";

// 具名导出
export { SButton };

// 导出插件
export default {
  install(app: App) {
    app.component(SButton.name, SButton);
  }
};
