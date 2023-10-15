<template>
  <projectTitle
    :title="props.project?.title"
    :team="props.project?.team"
    :description="props.project?.description"
    :technologies="props.project?.technologies"
  />
  <ProjectTabs :tabs="tabs" @tab="(e: string) => type = e" />
  <ProjectDetails
    :title="props.project?.title"
    :type="type"
    :id="props.project?.id"
    :page="props.project?.page"
  />
  <!-- <ProjectDetailsFloatingButton :options="options" /> -->
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import ProjectTabs from './project-overview/project-tabs.vue';
import projectTitle from './project-overview/project-title.vue';
import ProjectDetails from './project-overview/details/project-details.vue';

const { t } = useI18n();

const tabs = [
  t('projectTabs.overview'),
  t('projectTabs.code'),
  t('projectTabs.approaches'),
  t('projectTabs.leaderboard'),
];

// const options = ['o_file_upload', 'o_add', 'o_edit'];

const type = ref<string>(tabs[0]);

const props = defineProps({
  project: Object,
});
</script>
