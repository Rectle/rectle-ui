<template>
  <q-page class="row items-center justify-evenly">
    <example-component title="Example component" active></example-component>
  </q-page>
</template>

<script setup lang="ts">
import ExampleComponent from 'components/ExampleComponent.vue';
import { useMeta } from 'quasar';
import metaData from '@/utils/configs/meta.ts';
useMeta({
  ...metaData,
  title: 'Home page'
})
</script>
