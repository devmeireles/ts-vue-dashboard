<template>
  <v-app :theme="layoutStore.currentTheme">
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { useLayoutStore } from "@/stores/layout";

const layoutStore = useLayoutStore();
</script>
