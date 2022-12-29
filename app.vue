<template>
  <v-app id="inspire">
    <NuxtLayout :name="layout"></NuxtLayout>
      <v-main class="mt-4">
        <NuxtPage />
      </v-main>
  </v-app>
</template>

<script setup lang="ts">
const layout = "default";
</script>

<style>
@import url("./assets/global.css");
</style>
