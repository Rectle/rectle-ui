<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
        <q-toolbar>
          <q-toolbar-title class="text-center">{{ appName }} &copy; 2022</q-toolbar-title>
        </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import moment from 'moment'

const appName = process.env.APP_NAME
const currYear = moment().format('YYYY')
</script>
