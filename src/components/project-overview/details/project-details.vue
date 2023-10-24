<template>
  <q-card flat bordered class="my-card">
    <q-card-section v-if="projectDetails">
      <ProjectDetailsOverview
        v-if="props.type === $t('projectTabs.overview')"
        :page="props.page"
        :projectId="props.id"
        :overview="projectDetails?.overview ?? ''"
      />

      <ProjectDetailsCode
        :page="props.page"
        :id="props.id"
        :project-name="title"
        v-if="props.type === $t('projectTabs.code')"
      />

      <ProjectDetailsApproaches
        :projectId="props.id"
        :title="props.title"
        :page="props.page"
        v-if="props.type === $t('projectTabs.approaches')"
      />

      <ProjectDetailsLeaderboard
        :projectId="props.id"
        v-if="props.type === $t('projectTabs.leaderboard')"
      />
    </q-card-section>
    <q-card-section v-else style="text-align: center">
      <h2>{{ $t('projectTabs.projectError') }}</h2>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProjectDetailsApproaches from './project-details-approaches.vue';
import ProjectDetailsCode from './project-details-code.vue';
import ProjectDetailsLeaderboard from './project-details-leaderboard.vue';
import ProjectDetailsOverview from './project-details-overview.vue';
import { getProjectById } from 'src/api/getProjectById';
import { IProjectDetails } from 'src/types/project.type';

const props = defineProps({
  type: String,
  id: String,
  title: String,
  page: String,
});

const projectDetails = ref<IProjectDetails | null>(null);

onMounted(async () => {
  projectDetails.value = props.id ? await getProjectById(props.id) : null;
});
</script>
