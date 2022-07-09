<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <HeaderBar
    :toggleSidebar="store.toggleSidebar"
    :toggleTheme="store.toggleTheme"
    :toggleLanguage="store.toggleLanguage"
  />
  <Sidebar :isOpenSidebar="store.sidebarState" />
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import { useLayoutStore } from "@/stores/layout";
import Sidebar from "../../components/organisms/Sidebar.vue";
import HeaderBar from "../../components/organisms/HeaderBar.vue";

const store = useLayoutStore();
</script>
