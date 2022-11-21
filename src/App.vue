<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

// TODO: Remove this logic when creating target solution
const $q = useQuasar();
// set dark mode as default
$q.dark.set(true);
</script>
