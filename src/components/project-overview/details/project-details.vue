<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <ProjectDetailsOverview
        v-if="props.type === $t('projectTabs.overview')"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import ProjectDetailsOverview from './project-details-overview.vue';

const props = defineProps({
  type: String
});
</script>
