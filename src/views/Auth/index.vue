<template>
  <v-main class="main">
    <AuthPage>
      <router-view />
    </AuthPage>
  </v-main>
</template>

<script lang="ts" setup>
import AuthPage from "@/components/organisms/AuthPage.vue";
</script>