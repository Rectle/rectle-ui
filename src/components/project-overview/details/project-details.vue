<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <ProjectDetailsOverview
        v-if="props.type === $t('projectTabs.overview')"
        :page="props.page"
      />

      <ProjectDetailsCode
        :page="props.page"
        :id="props.id"
        v-if="props.type === $t('projectTabs.code')"
      />

      <ProjectDetailsApproaches
        :projectId="props.id"
        :title="props.title"
        :page="props.page"
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

const props = defineProps({
  type: String,
  id: String,
  title: String,
  page: String,
});
</script>
