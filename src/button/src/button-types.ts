import { ExtractPropTypes, PropType } from "vue";
export type IButtonType = "primary" | "secondary" | "text";
// 定义props属性对象
export const buttonPros = {
  type: {
    type: String as PropType<IButtonType>,
    default: "secondary"
  }
} as const; //不可以动态的设置其他属性

export type ButtonProps = ExtractPropTypes<typeof buttonPros>;
