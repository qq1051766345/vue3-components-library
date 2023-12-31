// 入口文件
// 1.引入实现组件批量导出
import type { App } from "vue";
import buttonPlugin, { SButton as Button } from "../src/button";

// 2.导出这些组件
export { Button };
// 3.导出一个vue插件
const installs = [buttonPlugin];
export default {
  install(app: App) {
    installs.forEach(p => app.use(p));
  }
};
