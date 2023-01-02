<script setup lang="ts">
import workHistoryJson from "~/assets/data/history.json";
import ClientHistoryService from "~~/services/client/ClientHistoryService";
import { History } from "~~/interfaces/history.interface";

const workHistory = ref<History[]>([]);

const fetchWorkHistory = async () => {
  try {
    const response = await new ClientHistoryService().getList();
    workHistory.value = response.data;
  } catch (error) {
    if (error) 
      workHistory.value = workHistoryJson
  }
};

onMounted(async () => {
  fetchWorkHistory();
});
</script>

<template>
  <div class="p-section-work">
    <v-row justify="center" align="center">
      <v-col lg="8" align-self="center">
        <v-card color="transparent" class="pa-8" elevation="0">
          <v-card-title class="text-success"> Where I've Worked </v-card-title>
          <v-expansion-panels bg-color="transparent" variant="popout" class="my-4">
            <v-expansion-panel bg-color="#0a1930" v-for="work in workHistory">
              <v-expansion-panel-title>
                <b class="text-success">{{ work.company }}</b>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pa-4">
                <div class="text-subtitle-1 text-success my-2">{{ work.position }}</div>
                <div class="text-subtitle-2 text-primary my-2">{{ work.date }}</div>
                <div class="text-body-1 text-secondary ml-4">
                  <ul>
                    <li v-for="item in work.responsibilities">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>

    <Projects />
  </div>
</template>
