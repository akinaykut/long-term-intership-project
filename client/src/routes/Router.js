import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "../pages/AdminLogin.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import TheMainPage from "../pages/TheMainPage.vue";
import TheApplication from "../pages/TheApplication.vue";
import MyApplications from "../pages/MyApplications.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheMainPage,
    },
    {
      path: "/application",
      component: TheApplication,
    },
    {
      path: "/application/my-applications",
      component: MyApplications,
    },
    {
      path: "/admin-login",
      component: AdminLogin,
    },

    {
      path: "/admin-dashboard",
      component: AdminDashboard,
    },
  ],
});

export default router;
