import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
dayjs.extend(duration);

app.use(store).use(router).mount("#app");
