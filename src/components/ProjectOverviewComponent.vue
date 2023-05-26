<template>
  <projectTitle
    :title="props.project?.title"
    :author="props.project?.author"
    :users="props.project?.users"
    :technologies="props.project?.technologies"
  />
  <ProjectTabs @tab="(e: string) => type = e" />
  <ProjectDetails :type="type" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ProjectTabs from './project-overview/project-tabs.vue';
import projectTitle from './project-overview/project-title.vue';
import ProjectDetails from './project-overview/details/project-details.vue';

const type = ref<string>('');

const props = defineProps({
  project: Object
});
</script>
