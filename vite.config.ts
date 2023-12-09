import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
// 扩展vitest配置
interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
import path from "path";
//不用查了，我给你查到了
import { fileURLToPath } from "url";
//这个是干嘛的呢，其实你把代码cope一下，把这块注释掉,哎(我这个ai是二声不是一声，哎对就是你想的那味)，把下面的import.meta.url 一定义在把dirname一输出。 哎，你就知道报什么错了。
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: "happy-dom",
    // 支持tsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
} as VitestConfigExport);
