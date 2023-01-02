<template>
  <v-app>
    <NuxtLayout :name="layout"></NuxtLayout>
    <v-main class="mt-4">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const layout = "default";
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style>
@import url("./assets/css/global.css");
</style>
