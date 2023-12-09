import { ExtractPropTypes, PropType } from "vue";
export type IButtonType = "primary" | "secondary" | "text";
export type IButtonSize = "small" | "medium" | "large";
// 定义props属性对象
export const buttonPros = {
  type: {
    type: String as PropType<IButtonType>,
    default: "secondary"
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否设置为块级元素
  block: {
    type: Boolean,
    default: false
  }
} as const; //不可以动态的设置其他属性

export type ButtonProps = ExtractPropTypes<typeof buttonPros>;
