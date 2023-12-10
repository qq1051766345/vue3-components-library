import { defineComponent as c, toRefs as b, createVNode as f } from "vue";
const p = {
  type: {
    type: String,
    default: "secondary"
  },
  size: {
    type: String,
    default: "medium"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 是否设置为块级元素
  block: {
    type: Boolean,
    default: !1
  }
}, n = /* @__PURE__ */ c({
  name: "SButton",
  props: p,
  setup(e, {
    slots: t
  }) {
    const {
      type: o,
      size: l,
      disabled: a,
      block: s
    } = b(e);
    return () => {
      const u = t.default ? t.default() : "按钮", d = s.value ? "s-btn-block" : "";
      return f("button", {
        disabled: a.value,
        class: `s-btn s-btn-${o.value} s-btn-${l.value} ${d}`
      }, [u]);
    };
  }
}), i = {
  install(e) {
    e.component(n.name, n);
  }
};
export {
  n as SButton,
  i as default
};
