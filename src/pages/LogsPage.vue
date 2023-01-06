<template>
  <q-page>
   <div class="q-pa-md justify-center row" > 
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-4">
        <logs-component/>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LogsComponent from 'src/components/LogsComponent.vue';
import { useMeta } from 'quasar';
import metaData from '@/utils/configs/meta.ts';
useMeta({
  ...metaData,
  title: 'Logs'
})
</script>
