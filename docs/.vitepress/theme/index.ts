import DefaultTheme from "vitepress/theme";
import HelloWorld from "../../../src/components/HelloWorld.vue";
import Test from "../../../src/components/test";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("HelloWorld", HelloWorld);
    app.component("Test", Test);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  }
};
