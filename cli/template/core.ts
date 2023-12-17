import { upperFirst } from "./util";
// 创建组件类型文件模板
export default function genCoreTemplate(name: string) {
  const compName = "S" + upperFirst(name);
  const propsTypeName = upperFirst(name) + "Props";
  const propsName = name + "Props";
  const propsFileName = name + "-types";
  const className = "s-" + name;
  return `import { defineComponent, toRefs } from "vue";
import { ${propsTypeName}, ${propsName} } from './${propsFileName}';

export default defineComponent({
  name: "${compName}",
  props: ${propsName},
  setup(props: ${propsTypeName}, { slots }) {
    // 为了不丢失响应式，需要使用toRefs
    return () => {
      const defaultSlot = slots.default ? slots.default() : "${compName}";
      return (
        <div class="${className}">
          {defaultSlot}
        </div>
      );
    };
  }
});
  `;
}
