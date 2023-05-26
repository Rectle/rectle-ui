<template>
  <projectTitle
    :title="props.project?.title"
    :author="props.project?.author"
    :users="props.project?.users"
    :technologies="exampleTechnologies"
  />
</template>
<script setup lang="ts">
import projectTitle from './project-overview/project-title.vue';

const exampleTechnologies = [
  {
    id: 1,
    name: 'Python'
  },
  {
    id: 2,
    name: 'Learning'
  },
  {
    id: 3,
    name: 'K-012'
  }
];

const props = defineProps({
  project: Object
});

console.log(props.project);
</script>
