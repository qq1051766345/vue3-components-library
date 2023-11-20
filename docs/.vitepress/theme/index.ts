import DefaultTheme from "vitepress/theme";
import HelloWorld from "../../../src/components/HelloWorld.vue";
import Test from "../../../src/components/test";
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("HelloWorld", HelloWorld);
    app.component("Test", Test);
  }
};
