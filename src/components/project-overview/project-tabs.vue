<template>
  <div class="q-my-md project-tabs">
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
import { defineEmits, ref, PropType, toRefs } from 'vue';

const emit = defineEmits(['tab']);

const props = defineProps({
  tabs: { type: Array as PropType<string[]>, required: true }
});
const { tabs } = toRefs(props);

const tab = ref<string>(tabs.value[0]);
</script>
<style>
.project-tabs .q-focus-helper {
  visibility: hidden;
}
.project-tabs .q-tab__indicator {
  height: 1px;
}
</style>
