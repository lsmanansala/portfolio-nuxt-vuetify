<script setup lang="ts">
import portrait from "~/assets/images/portrait.png";
import { useDisplay } from "vuetify";
const technologies = ref([
  "VueJS 3 with TypeScript",
  "NuxtJS 3 with TypeScript",
  "ReactJS",
  "AngularJS",
  "NestJS",
  "Django",
  "Django Rest Framework",
  "MongoDB",
  "CouchDB",
  "Prisma",
  "Docker",
  "PostgreSQL",
]);
const { xs, mdAndUp } = useDisplay();
</script>

<template>
  <div class="p-section">
    <v-row justify="center" align="center">
      <v-col lg="8" align-self="center">
        <v-card color="transparent" class="pa-8" elevation="0">
          <v-card-title class="text-success"> About Me </v-card-title>
          <v-row>
            <v-col>
              <v-card-text>
                <p class="text-body-1 mb-2">
                  Hi! My name is <b class="text-success"> Ludwig Sean Manansala </b> and I
                  enjoy building things for the web. My passion for software development
                  started back in 2012 when I first started customizing my Friendster
                  Page. I enjoyed hacking and customizing HTML and CSS to add more glitter
                  to my Friendster Page.
                </p>
              </v-card-text>

              <v-card-text>
                <p class="text-body-1">
                  I attended Ateneo de Davao University and got my Bachelor's Degree in
                  Computer Science last 2017 and currently working at Inriver Philippines.
                  I also had the privelage to work for a Blockchain Company, Health
                  Technology Company, and an NFT Company.
                </p>
              </v-card-text>
              <v-card-text>
                <p class="text-body-1">
                  Here are few technologies that I used on my projects:
                </p>
                <div class="mt-8">
                  <v-row>
                    <v-col lg="6" md="6" v-for="tech in technologies">
                      <div class="mt-2 text-success">{{ `> ${tech}` }}</div>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
            </v-col>
            <v-divider v-if="mdAndUp" vertical color="success"></v-divider>
            <v-col v-if="mdAndUp" align-self="center" class="mx-8">
              <v-img :src="portrait"></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
