import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "../pages/AdminLogin.vue";
import TheMainPage from "../pages/TheMainPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/admin-login", component: AdminLogin },
    {
      path: "/",
      component: TheMainPage,
    },
  ],
});

export default router;
