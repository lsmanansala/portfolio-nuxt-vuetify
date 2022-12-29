<script setup lang="ts">
import ClientProjectService from '~~/services/client/ClientProjectService';
import { Project } from '~~/interfaces/project.interface';

const projects = ref<Project[]>([])

const fetchProjects = async () => {
  const response = await new ClientProjectService().getList()
  projects.value = response.data
}

onMounted(async () => {
  fetchProjects()
})
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
