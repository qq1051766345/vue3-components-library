import { upperFirst } from "./util";
// 创建组件核心文件模板
export default function genTypesTemplate(name: string) {
  const propsTypeName = upperFirst(name) + "Props";
  const propsName = name + "Props";
  return `import { ExtractPropTypes, PropType } from "vue";
// 定义props属性对象
export const ${propsName} = {} as const; //不可以动态的设置其他属性

export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>;
  `;
}
