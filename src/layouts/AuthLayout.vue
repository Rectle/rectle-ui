<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
        <q-toolbar>
          <q-space />
          <q-toolbar-title class="text-center">{{ appName }} &copy; {{ currYear }}</q-toolbar-title>
          <q-space />
          <q-toggle 
            v-model="darkMode"
            @update:model-value="updateDarkMode"
            color="dark"
            checked-icon="fa-solid fa-moon"
            unchecked-icon="fa-solid fa-sun"
          />
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import moment from 'moment'
import { useQuasar, LocalStorage } from 'quasar';

const $q = useQuasar();

const appName = process.env.APP_NAME
const currYear = moment().format('YYYY')

const darkMode = ref($q.dark.isActive);

const updateDarkMode = (value: boolean) => {
  $q.dark.set(value);
  LocalStorage.set('darkmode', value);
}
</script>
