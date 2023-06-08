<template>
  <div class="text-h5">{{ props.title }}</div>
  <div class="text-h6 text-weight-thin">
    {{ $t('approcheStatusTitle.id') }} {{ props.id?.split('-')[0] }}
  </div>
  <div class="text-h6 text-weight-thin">
    {{ $t('approcheStatusTitle.score') }} {{ props.score }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  id: String,
  score: String
});
</script>
