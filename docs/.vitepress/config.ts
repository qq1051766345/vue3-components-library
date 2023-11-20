import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

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
          }
        ]
      }
    ]
  },
  markdown: {
    config(md) {
      md.use(demoBlockPlugin);
    }
  }
});
