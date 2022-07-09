<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-navigation-drawer v-model="isOpenSidebar" app> </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: "SideBar",
  props: {
    isOpenSidebar: Boolean,
  },
};
</script>
