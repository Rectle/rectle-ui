<template>
  <div class="q-py-lg text-h6 row q-gutter-xl items-center justify-center">
    <q-card
      v-for="item of (props.settings as ISetting[])"
      v-bind:key="item.title"
      class="q-pa-md col-md-4 col-lg-4 col-xl-4 cursor-pointer"
      @click="$router.push({ path: item.to ?? '/setting' })"
      v-ripple.early
    >
      <div class="column items-center">
        <q-avatar size="150px">
          <q-icon :name="item.icon" />
        </q-avatar>

        <div class="text-h6 q-mt-sm q-mb-xs">
          {{ item.title }}
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  settings: {
    type: Array,
    required: true
  }
});
</script>
