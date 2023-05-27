<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab
      icon="o_unfold_more"
      direction="up"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action
        v-for="button in props.options"
        :key="button"
        :icon="button"
        :disable="draggingFab"
        @click="onClick(button)"
      />
    </q-fab>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fabPos = ref([18, 18]);
const draggingFab = ref(false);
const props = defineProps({
  options: Object
});

const onClick = (ev: string) => {
  console.log(ev);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const moveFab = (ev: any) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};
</script>
