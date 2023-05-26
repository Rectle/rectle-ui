<template>
  <projectTitle
    :title="props.project?.title"
    :author="props.project?.author"
    :users="props.project?.users"
    :technologies="props.project?.technologies"
  />
</template>
<script setup lang="ts">
import projectTitle from './project-overview/project-title.vue';

const props = defineProps({
  project: Object
});

console.log(props.project);
</script>
