import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
//不用查了，我给你查到了
import { fileURLToPath } from "url";
//这个是干嘛的呢，其实你把代码cope一下，把这块注释掉,哎(我这个ai是二声不是一声，哎对就是你想的那味)，把下面的import.meta.url 一定义在把dirname一输出。 哎，你就知道报什么错了。
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [vueJsx({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
