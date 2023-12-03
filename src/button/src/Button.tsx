import { defineComponent, toRefs } from "vue";
import { ButtonProps, buttonPros } from "./button-types";

export default defineComponent({
  name: "SButton",
  props: buttonPros,
  setup(props: ButtonProps, { slots }) {
    // 为了不丢失响应式，需要使用toRefs
    const { type } = toRefs(props);
    return () => {
      const defaultSlot = slots.default ? slots.default() : "12321";
      return <button class={`s-btn s-btn-${type.value}`}>{defaultSlot}</button>;
    };
  }
});
