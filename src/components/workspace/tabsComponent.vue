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
        v-for="tab_ in tabs"
        :key="tab_"
        :name="tab_"
        :label="tab_"
        :ripple="false"
      />
    </q-tabs>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['tab']);
const { t } = useI18n();
const tabs = [t('tabs.creator'), t('tabs.participant')];

const tab = ref<string>(tabs[0]);
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
