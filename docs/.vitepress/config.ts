import { defineConfig } from "vitepress";
import {
  demoBlockPlugin,
  demoblockVitePlugin
} from "vitepress-theme-demoblock";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "zh-CN",
  title: "vue3组件库",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    sidebar: [
      {
        items: [
          { text: "快速开始", link: "/" },
          {
            text: "通用",
            items: [
              {
                text: "Button 按钮",
                link: "/components/button/"
              }
            ]
          },
          {
            text: "导航",
            items: [
              {
                text: "Button 按钮",
                link: "/components/button/"
              }
            ]
          },
          {
            text: "反馈"
          },
          {
            text: "数据录入"
          },
          {
            text: "数据展示",
            items: [
              {
                text: "树形控件",
                link: "/components/tree/"
              }
            ]
          },
          {
            text: "布局"
          }
        ]
      }
    ]
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it的的插件
      md.use(demoBlockPlugin, {
        customClass: "demoblock-custom"
      });
    }
  },
  vite: {
    plugins: [demoblockVitePlugin() as any]
  }
});
