<template>
  <approcheStatusTitle
    :title="props.approacheData?.title"
    :id="props.approacheData?.id"
    :score="props.approacheData?.score"
  />
  <q-separator class="q-my-sm" />
  <approacheStatusLogs />
</template>

<script setup lang="ts">
import approcheStatusTitle from './approche-status-title.vue';
import approacheStatusLogs from './approache-status-logs.vue';
const props = defineProps({
  approacheData: Object
});
</script>
