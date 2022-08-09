import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import myComponents from "@/components/UI";
import "./index.css";

const app = createApp(App).use(store);

myComponents.forEach((component) => {
    app.component(component.name, component);
});

app.mount("#app");
