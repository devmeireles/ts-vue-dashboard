<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-navigation-drawer v-model="isOpenSidebar" app>
    <v-card class="mx-auto" width="300" elevation="0">
      <v-list v-model:opened="open">
        <v-list-item
          prepend-icon="mdi-view-dashboard-outline"
          :title="$t('core.dashboard')"
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

          <v-list-group v-if="item.actions?.includes('list')">
            <template v-slot:activator="{ props }">
              <RouterLink :to="`${item.route}`">
                <v-list-item
                  v-bind="props"
                  :title="$t('actions.list')"
                  :value="$t(item.name)"
                ></v-list-item>
              </RouterLink>
            </template>
          </v-list-group>

          <v-list-group v-if="item.actions?.includes('list')">
            <template v-slot:activator="{ props }">
              <RouterLink :to="`${item.route}/create`">
                <v-list-item
                  v-bind="props"
                  :title="$t('actions.create')"
                  :value="$t(item.name)"
                ></v-list-item>
              </RouterLink>
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
    menu: [
      {
        name: "core.product",
        route: routes.product.main,
        icon: "mdi-cart-outline",
        actions: ["list", "create"],
      },
      {
        name: "core.category",
        route: routes.category.main,
        icon: "mdi-shape-outline",
        actions: ["list", "create"],
      },
      {
        name: "core.tag",
        route: routes.tag.main,
        icon: "mdi-tag-outline",
        actions: ["list", "create"],
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
