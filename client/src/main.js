import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

const app = createApp(App);

app.use(Router);

app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);

app.mount("#app");
