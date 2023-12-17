import { upperFirst } from "./util";

// 创建测试样式文件模板
export default function genTestTemplate(name: string) {
  return `import ${upperFirst(name)} from "../src/${name}";
import { render } from "@testing-library/vue";

describe("${name}", () => {
  // base功能
  test("${name}.tsx init render", () => {
    // 渲染参数
    const { getByRole } = render(${upperFirst(name)});
    getByRole("${name}");
  });
});
`;
}
