<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <ProjectDetailsOverview
        v-if="props.type === $t('projectTabs.overview')"
      />

      <ProjectDetailsCode
        @compileIdEmit="(e:number) => compileId = e"
        @projectIdEmit="(e:number) => projectId = e"
        v-if="props.type === $t('projectTabs.code')"
      />

      <ProjectDetailsApproaches
        :id="props.id"
        :title="props.title"
        :projectId="projectId"
        v-if="props.type === $t('projectTabs.approaches')"
      />

      <ProjectDetailsLeaderboard
        v-if="props.type === $t('projectTabs.leaderboard')"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import ProjectDetailsApproaches from './project-details-approaches.vue';
import ProjectDetailsCode from './project-details-code.vue';
import ProjectDetailsLeaderboard from './project-details-leaderboard.vue';
import ProjectDetailsOverview from './project-details-overview.vue';
import { ref } from 'vue';

const compileId = ref(0);
const projectId = ref(0);

const props = defineProps({
  type: String,
  id: String,
  title: String
});
</script>
