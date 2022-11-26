<template>
  <q-page>
   <div class="q-pa-md row justify-center full-width">
      <div
        :style="{'max-width':`${maxCardSize}px`, 'min-width': `${$q.screen.width < maxCardSize ? 150 : maxCardSize}px`}"
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

const maxCardSize = 600;

</script>
