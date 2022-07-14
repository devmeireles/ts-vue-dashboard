<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <Sidebar :isOpenSidebar="store.sidebarState" />
  <HeaderBar
    :toggleSidebar="store.toggleSidebar"
    :toggleTheme="store.toggleTheme"
    :toggleLanguage="store.toggleLanguage"
  />
  <v-main class="main">
    <DashboardPage>
      <router-view />
    </DashboardPage>
  </v-main>
</template>

<script lang="ts" setup>
import { useCoreStore } from "@/stores/core";
import Sidebar from "@/components/organisms/Sidebar.vue";
import HeaderBar from "@/components/organisms/HeaderBar.vue";
import DashboardPage from "@/components/organisms/DashboardPage.vue";

const store = useCoreStore();
</script>

<style>
@import url("@/assets/base.css");
</style>

<style lang="scss" scoped>
.main {
  background-color: #f4f4f4;
}
</style>
