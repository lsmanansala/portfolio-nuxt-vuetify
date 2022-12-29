<template>
  <div>
    <v-app-bar color="#0e244f" :elevation="0">
      <v-toolbar-title><v-img width="100" :src="logo"></v-img></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="scrollIntoView('home')">Home</v-btn>
      <v-btn @click="scrollIntoView('about')">About Me</v-btn>
      <v-btn @click="scrollIntoView('work')">Work</v-btn>
      <v-btn href="../assets/LudwigSeanManansalaResume.pdf" download color="success">Resume</v-btn>
    </v-app-bar>

    
  </div>
</template>
<script setup lang="ts">
import logo from '~/assets/lsm.png'
const drawer = ref(false);

const scrollIntoView = (id: string) => {
  const el = document.getElementById(id);
  el.scrollIntoView({behavior: "smooth"});
}
</script>
