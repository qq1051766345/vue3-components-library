import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";
import Button from "./button";

createApp(App).use(Button).mount("#app");
