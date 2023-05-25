<template>
  <q-page class="q-pa-md justify-center">
    <div>Overview Page</div>
    <ProjectOverviewComponent :project="route.query" />
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ProjectOverviewComponent from 'components/ProjectOverviewComponent.vue';

const route = useRoute();
</script>
