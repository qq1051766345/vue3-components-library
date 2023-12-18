import Tree from "../src/tree";
import { render } from "@testing-library/vue";

describe("tree", () => {
  // base功能
  test("tree.tsx init render", () => {
    // 渲染参数
    const { getByRole } = render(Tree);
    getByRole("tree");
  });
});
