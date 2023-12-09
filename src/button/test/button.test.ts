import { SButton } from "../";
import { render } from "@testing-library/vue";

// base功能
test("button.tsx should work", () => {
  // 渲染参数
  const { getByRole } = render(SButton);
  getByRole("button");
});

// 默认插槽功能
test("default slot should be 按钮", () => {
  // 渲染参数
  const { getByText } = render(SButton);
  getByText("按钮");
});

// 插槽功能
test("slot should be 按钮", () => {
  // 渲染参数
  const { getByText } = render(SButton, {
    slots: {
      default: "button"
    }
  });
  getByText("button");
});

// 测试默认类型
test("default prop type should be secondary", () => {
  // 渲染参数
  const { getByRole } = render(SButton);
  const button = getByRole("button");
  expect(button.classList.contains("s-btn-secondary")).toBe(true);
});

// 测试类型
test("prop type should work", () => {
  // 渲染参数
  const { getByRole } = render(SButton, {
    props: {
      type: "primary"
    }
  });
  const button = getByRole("button");
  expect(button.classList.contains("s-btn-primary")).toBe(true);
});
