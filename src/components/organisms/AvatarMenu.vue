<template>
  <v-menu bottom min-width="300px" rounded offset-y>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <UserAvatar img="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-btn>
    </template>
    <v-card width="300px">
      <v-list>
        <v-list-item>
          <UserAvatar
            img="https://cdn.vuetifyjs.com/images/john.jpg"
            content="Gabriel Meireles"
            size="60"
            caption-size="text-body-1"
            caption-weight="font-weight-medium"
          />
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact">
        <v-list-item
          v-for="item in menu"
          :key="item.name"
          :value="item"
          active-color="primary"
        >
          <RouterLink :to="`${item.route}`" class="menu-link">
            <v-list-item-avatar start>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
          </RouterLink>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { routes } from "@/consts/routes";
import UserAvatar from "../molecules/UserAvatar.vue";

export default {
  name: "AvatarMenu",
  data: () => ({
    menu: [
      {
        name: "core.account",
        route: routes.tag.main,
        icon: "mdi-account-outline",
      },
      {
        name: "core.settings",
        route: "route.path",
        icon: "mdi-cog-outline",
      },
      {
        name: "core.logout",
        route: "route.path",
        icon: "mdi-logout",
      },
    ],
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com",
    },
  }),
  components: { UserAvatar },
};
</script>
