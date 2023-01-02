<template>
  <div>
    <v-navigation-drawer v-model="drawer" location="right">
      <v-list>
        <v-list-item>
          <v-btn @click="scrollIntoView('home')">Home</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn @click="scrollIntoView('about')">About Me</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn @click="scrollIntoView('work')">Work</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn :href="resume" download color="success">Resume</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#0e244f" :elevation="0">
      <v-toolbar-title><v-img width="100" :src="logo"></v-img></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="mdAndUp">
        <v-spacer></v-spacer>
        <v-btn @click="scrollIntoView('home')">Home</v-btn>
        <v-btn @click="scrollIntoView('about')">About Me</v-btn>
        <v-btn @click="scrollIntoView('work')">Work</v-btn>
        <v-btn :href="resume" download color="success">Resume</v-btn>
      </div>
      <v-app-bar-nav-icon v-if="mdAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>
<script setup lang="ts">
import logo from "~/assets/images/lsm.png";
import resume from "~/assets/LudwigSeanManansalaResume.pdf";
import { useDisplay } from "vuetify";

const { mdAndDown, mdAndUp } = useDisplay();
const drawer = ref(false);

const scrollIntoView = (id: string) => {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth" });
};
</script>
