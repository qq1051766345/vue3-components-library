import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonPros } from "./button-types";
import "../style/button.scss";

export default defineComponent({
  name: "SButton",
  props: buttonPros,
  setup(props: ButtonProps, { slots }) {
    // 为了不丢失响应式，需要使用toRefs
    const { type, size, disabled, block } = toRefs(props);
    return () => {
      const defaultSlot = slots.default ? slots.default() : "按钮";
      // block
      const blockCls = block.value ? "s-btn-block" : "";
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn-${type.value} s-btn-${size.value} ${blockCls}`}
        >
          {defaultSlot}
        </button>
      );
    };
  }
});
