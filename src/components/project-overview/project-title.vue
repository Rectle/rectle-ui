<template>
  <div class="text-h5">{{ props.title }}</div>
  <div class="text-h6 text-weight-thin">
    {{ $t('projecOverviewTitle.author') }} {{ props.author }} |
    {{ props.users }}
    {{ $t('projecOverviewTitle.users') }}
  </div>
  <div v-if="props.technologies && props.technologies.length" class="q-pa-none">
    <q-chip
      v-for="(technology, index) in props.technologies"
      :key="technology"
      outline
      :class="index == '0' ? 'q-ml-none' : ''"
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
