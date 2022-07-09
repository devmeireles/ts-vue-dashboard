import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/Dashboard/index.vue";
import ListCategoryViewVue from "@/views/Dashboard/Category/ListCategoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "home",
      component: DashboardView,
      children: [
        {
          path: "category",
          name: "category-index",
          component: ListCategoryViewVue,
        },
      ],
    },
  ],
});

export default router;
