import { defineComponent as c, toRefs as r, createVNode as b } from "vue";
const f = {
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
  props: f,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: l,
      disabled: s,
      block: a
    } = r(t);
    return () => {
      const u = e.default ? e.default() : "按钮", d = a.value ? "s-btn-block" : "";
      return b("button", {
        disabled: s.value,
        class: `s-btn s-btn-${o.value} s-btn-${l.value} ${d}`
      }, [u]);
    };
  }
}), i = {
  install(t) {
    t.component(n.name, n);
  }
}, p = [i], y = {
  install(t) {
    p.forEach((e) => t.use(e));
  }
};
export {
  n as Button,
  y as default
};
