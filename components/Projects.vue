<script setup lang="ts">
import projectsJson from "~/assets/data/projects.json";
const projects = ref(projectsJson);
</script>

<template>
  <v-row justify="center" align="center" class="mb-16">
    <v-col lg="8" align-self="center">
      <v-card color="transparent" class="pa-8" elevation="0">
        <v-card-title class="text-success"> Some things I Built </v-card-title>
        <v-row justify="center" align="center" class="mx-8">
          <v-col cols="4" v-for="project in projects">
            <ProjectCard :project="project" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
