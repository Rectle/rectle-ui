<template>
  <q-page>
   <div class="q-pa-md row justify-center full-width">
      <div
        :style="{'max-width':`${$q.screen.sizes.sm}px`, 'min-width': `${$q.screen.width < $q.screen.sizes.sm - 100 ? 150 : $q.screen.sizes.sm}px`}"
      >
        <code-component/>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CodeComponent from 'components/CodeComponent.vue';
import { useMeta } from 'quasar';
import metaData from '@/utils/configs/meta.ts';
useMeta({
  ...metaData,
  title: 'Code'
})
</script>
