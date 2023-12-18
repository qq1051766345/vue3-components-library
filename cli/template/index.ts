import { upperFirst } from "./util";

// 创建组件样式文件模板
export default function genIndexTemplate(name: string) {
  const compName = "S" + upperFirst(name);
  return `import type { App } from "vue";
import ${compName} from "./src/${name}";

// 具名导出
export { ${compName} };

// 导出插件
export default {
  install(app: App) {
    app.component(${compName}.name, ${compName});
  }
};
`;
}
