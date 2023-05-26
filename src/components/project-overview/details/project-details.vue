<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <ProjectDetailsOverview
        v-if="props.type === $t('projectTabs.overview')"
      />

      <ProjectDetailsCode v-if="props.type === $t('projectTabs.code')" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import ProjectDetailsCode from './project-details-code.vue';
import ProjectDetailsOverview from './project-details-overview.vue';

const props = defineProps({
  type: String
});
</script>
