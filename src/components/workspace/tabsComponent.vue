<template>
  <div class="q-my-md tabs">
    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="text-grey-9"
      @update:model-value="emit('tab', tab)"
    >
      <q-tab
        :ripple="false"
        :name="$t('tabs.creator')"
        :label="$t('tabs.creator')"
      />
      <q-tab
        :ripple="false"
        :name="$t('tabs.participant')"
        :label="$t('tabs.participant')"
      />
    </q-tabs>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['tab']);
const tab = ref<string>('Creator');
</script>
<style>
.tabs .q-tab__label {
  font-size: 2em;
}
.tabs .q-focus-helper {
  visibility: hidden;
}
.tabs .q-tab__indicator {
  height: 1px;
}
</style>
