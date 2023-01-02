<script setup lang="ts">
import { Project } from "~/interfaces/project.interface";
import artforge from '~/assets/projects/artforge.png'
import etl from '~/assets/projects/etl.png'
import got from '~/assets/projects/got.png'
import potus from '~/assets/projects/potus.png'
import power from '~/assets/projects/power.png'

interface Props {
  project: Project;
}

const props = defineProps<Props>();

const getImage = (code: string) => {
  if (code === 'artforge') {
    return artforge
  } else if ( code === 'etl') {
    return etl
  } else if ( code === 'got') {
    return got
  } else if ( code === 'power') {
    return power
  } else {
    return potus
  }
}

</script>

<template>
  <div>
    <v-card color="#112240" class="mx-auto" max-width="500" :href="project.url ? project.url : ''" target="_blank">
      <v-img
        class="align-end text-white"
        height="200"
        :src="getImage(project.code)"
        cover
      >
      </v-img>
      <v-card-title> {{ project.name }}</v-card-title>
    </v-card>
  </div>
</template>
