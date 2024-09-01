import { createApp } from "vue";
import "./app/style.css";
import App from "./app/App.vue";
import { createPinia } from "pinia";
import router from "./app/router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
