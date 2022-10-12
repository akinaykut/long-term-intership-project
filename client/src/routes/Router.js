import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "../pages/AdminLogin.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import TheMainPage from "../pages/TheMainPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/admin-login",
      component: AdminLogin,
    },
    {
      path: "/",
      component: TheMainPage,
    },
    {
      path: "/admin-dashboard",
      component: AdminDashboard,
    },
  ],
});

export default router;
