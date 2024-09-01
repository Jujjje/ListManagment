import { createMemoryHistory, createRouter } from "vue-router";

import { MainPage } from "src/pages/main";
import { ListPage } from "src/pages/list";

const routes = [
  { path: "/", component: MainPage },
  { path: "/list", component: ListPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
