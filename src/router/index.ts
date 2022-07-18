import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/Dashboard/index.vue";
import ListCategory from "@/views/Dashboard/Category/index.vue";
import CreateCategory from "@/views/Dashboard/Category/create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "home",
      component: DashboardView,
      children: [
        {
          path: "",
          name: "dashboard",
          component: ListCategory,
        },
        {
          path: "product",
          name: "product",
          children: [
            {
              path: "",
              name: "product-index",
              component: ListCategory,
            },
            {
              path: "create",
              name: "product-create",
              component: CreateCategory,
            },
          ],
        },
        {
          path: "category",
          name: "category",
          children: [
            {
              path: "",
              name: "category-index",
              component: ListCategory,
            },
            {
              path: "create",
              name: "category-create",
              component: CreateCategory,
            },
          ],
        },
        {
          path: "tag",
          name: "tag",
          children: [
            {
              path: "",
              name: "tag-index",
              component: ListCategory,
            },
            {
              path: "create",
              name: "tag-create",
              component: CreateCategory,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
