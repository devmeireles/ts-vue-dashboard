<template>
  <v-app-bar app elevation="1">
    <v-app-bar-nav-icon @click="toggleSidebar()"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $t("core.hello") }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleTheme()">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>

    <v-btn icon @click="toggleLanguage()">
      <v-icon>mdi-translate</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "HeaderBar",
  props: {
    toggleSidebar: Function,
    toggleTheme: Function,
    toggleLanguage: Function,
  },
};
</script>
