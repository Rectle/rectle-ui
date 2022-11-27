<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar, LocalStorage } from 'quasar';

const $q = useQuasar();

const isDarkMode: boolean = LocalStorage.getItem('darkmode') ?? false

$q.dark.set(isDarkMode);
</script>
