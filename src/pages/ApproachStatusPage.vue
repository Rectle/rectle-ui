<template>
  <div class="q-pa-md">
    <projectDetailsApproacheStatus :approacheData="route.query" />
  </div>
</template>

<script setup lang="ts">
import projectDetailsApproacheStatus from 'src/components/project-overview/details/approache-status/project-details-approache-status.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
