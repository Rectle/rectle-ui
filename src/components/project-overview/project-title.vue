<template>
  <div class="text-h5">{{ props.title }}</div>
  <div class="text-h6 text-weight-thin">
    {{ $t('projectOverviewTitle.author') }} {{ props.author }} |
    {{ props.users }}
    {{ $t('projectOverviewTitle.users') }}
  </div>
  <div v-if="props.technologies && props.technologies.length" class="q-pa-none">
    <q-chip
      v-for="(technology, index) in props.technologies"
      :key="technology"
      outline
      :class="{ 'q-ml-none': index === 0 }"
    >
      {{ technology }}
    </q-chip>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  author: String,
  users: String,
  technologies: Object
});
</script>
