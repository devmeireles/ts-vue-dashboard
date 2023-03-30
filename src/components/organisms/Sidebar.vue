<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-navigation-drawer v-model="isOpenSidebar" app>
    <div class="d-flex flex-row justify-center pa-5">
      <img src="@/assets/logo.png" width="150" class="pa-5" />
    </div>

    <v-divider></v-divider>

    <v-card class="mx-auto pt-5" width="300" elevation="0">
      <v-list v-model:opened="open">
        <v-list-item
          :prepend-icon="dashboardMenu.icon"
          :title="$t(dashboardMenu.name)"
          :to="dashboardMenu.route"
        ></v-list-item>

        <v-list-group v-for="item in menu" :key="item.name">
          <template v-slot:activator="{ props }">
            <v-list-item
              rounded="xl"
              v-bind="props"
              :prepend-icon="item.icon"
              :title="$t(item.name)"
              :value="$t(item.name)"
            ></v-list-item>
          </template>

          <v-list-group v-if="item.child">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-for="sub in item.child"
                v-bind="props"
                :title="$t(sub.name)"
                :value="$t(sub.name)"
                :to="sub.route"
              ></v-list-item>
            </template>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { routes } from "@/consts/routes";

export default {
  name: "SideBar",
  props: {
    isOpenSidebar: Boolean,
  },
  data: () => ({
    open: ["Users"],
    dashboardMenu: {
      name: "core.dashboard",
      route: routes.product.create,
      icon: "mdi-view-dashboard-outline",
    },
    menu: [
      {
        name: "core.product",
        route: routes.product.main,
        icon: "mdi-cart-outline",
        child: [
          {
            name: 'actions.list',
            route: routes.product.main,
          },
          {
            name: 'actions.create',
            route: routes.product.create,
          }
        ]
      },
      {
        name: "core.category",
        route: routes.category.main,
        icon: "mdi-shape-outline",
        child: [
          {
            name: 'actions.list',
            route: routes.category.main,
          },
          {
            name: 'actions.create',
            route: routes.category.create,
          }
        ]
      },
      {
        name: "core.tag",
        route: routes.tag.main,
        icon: "mdi-tag-outline",
        child: [
          {
            name: 'actions.list',
            route: routes.tag.main,
          },
          {
            name: 'actions.create',
            route: routes.tag.create,
          }
        ]
      },
      {
        name: "core.settings",
        route: "route.path",
        icon: "mdi-cog-outline",
      },
    ],
  }),
};
</script>
